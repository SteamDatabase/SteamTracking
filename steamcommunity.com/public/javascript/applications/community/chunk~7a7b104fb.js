/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(() => {
  (self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
    [53256],
    {
      9398: (ii, fi, f) => {
        "use strict";
        f.d(fi, { I: () => K });
        var s = f(7850),
          Wr = f(14947),
          Y = f(75844),
          W = f(65946),
          Sr = f(90626),
          U = f(16346),
          Cr = f(90711),
          rr = f(21822),
          li = f(18614),
          z = f(90024),
          Hr = f.n(z),
          A = f(34360),
          o = f(19316),
          n = f(96197),
          i = f(22714),
          cr = f(86390),
          qr = f(34736),
          _r = f(33543),
          ei = f.n(_r);
        const ar = () =>
            (0, s.jsx)("div", {
              className: ei().FriendsListInsetShadowCtn,
              children: (0, s.jsx)("div", {
                className: ei().FriendListInsetShadowTop,
              }),
            }),
          T = () =>
            (0, s.jsx)("div", {
              className: ei().FriendsListInsetShadowCtn,
              children: (0, s.jsx)("div", {
                className: ei().FriendListInsetShadowBottom,
              }),
            });
        var j = f(36118),
          g = f(36707),
          m = f(18210),
          q = f(54963),
          B = f(3166),
          L = f(63508),
          y = f.n(L),
          S = f(29125),
          R = f(90828),
          tr = f(71421),
          gr = Object.defineProperty,
          ur = Object.getOwnPropertyDescriptor,
          er = (h, b, v, E) => {
            for (
              var D = E > 1 ? void 0 : E ? ur(b, v) : b, $ = h.length - 1, V;
              $ >= 0;
              $--
            )
              (V = h[$]) && (D = (E ? V(b, v, D) : V(D)) || D);
            return E && D && gr(b, v, D), D;
          };
        const dr = new RegExp("\u02D0([^\u02D0]*)\u02D0", "g"),
          jr = null,
          Dr = new RegExp(
            "^https?://(?:[^/?#]+?\\.)?(?:valvesoftware|steamcommunity|steampowered)\\.com(?:/?#|$)",
            "i",
          );
        function oi(h, b, v) {
          return v
            ? "presenter"
            : b.GetBroadcastSteamID() === h
              ? "broadcaster"
              : b.BIsUserBroadcastModerator(h)
                ? "moderator"
                : "";
        }
        const k = (h) => {
            const { userType: b, msg: v, presenterInfo: E } = h;
            if (b === "presenter" && E)
              return (0, s.jsx)("span", {
                children: (0, s.jsx)(qr.fI, {
                  name: E.name ?? "",
                  title: E.title,
                  photo: E.photo,
                  company: E.company ?? "",
                  bioString: E.bio,
                  children: (0, s.jsx)("a", {
                    className: (0, g.A)(y().MessageName, y().MessagePresenter),
                    href: B.TS.COMMUNITY_BASE_URL + "profiles/" + v.steamid,
                    target: "_blank",
                    rel: "noopener noreferrer",
                    children: v.persona_name,
                  }),
                }),
              });
            {
              let D;
              return (
                b === "broadcaster"
                  ? (D = y().MessageBroadcaster)
                  : b === "moderator" && (D = y().MessageModerator),
                (0, s.jsx)("span", {
                  children: (0, s.jsx)("a", {
                    className: (0, g.A)(y().MessageName, D),
                    href: B.TS.COMMUNITY_BASE_URL + "profiles/" + v.steamid,
                    "data-miniprofile": "s" + v.steamid,
                    target: "_blank",
                    rel: "noopener noreferrer",
                    children: v.persona_name,
                  }),
                })
              );
            }
          },
          Nr = (h) => {
            switch (h.userType) {
              case "presenter":
                return (0, s.jsx)(tr.Gq, {
                  toolTipContent: (0, m.we)(
                    "#BroadcastChat_Role_Presenter_ttip",
                  ),
                  children: (0, s.jsx)("span", {
                    className: y().RoleFlairContainer,
                    children: (0, s.jsx)(j.NCC, {}),
                  }),
                });
              case "moderator":
                return (0, s.jsx)(tr.Gq, {
                  toolTipContent: (0, m.we)(
                    "#BroadcastChat_Role_Moderatorr_ttip",
                  ),
                  children: (0, s.jsx)("span", {
                    className: y().RoleFlairContainer,
                    children: (0, s.jsx)(j.$4X, {}),
                  }),
                });
              case "broadcaster":
                return (0, s.jsx)(tr.Gq, {
                  toolTipContent: (0, m.we)(
                    "#BroadcastChat_Role_Broadcaster_ttip",
                  ),
                  children: (0, s.jsx)("span", {
                    className: y().RoleFlairContainer,
                    children: (0, s.jsx)(j.Gkr, {}),
                  }),
                });
              default:
                return null;
            }
          };
        let K = class extends Sr.Component {
          constructor(h) {
            super(h), (0, Wr.Gn)(this);
          }
          m_chat = void 0;
          messagesContainer = Sr.createRef();
          componentDidMount() {
            this.StartChat();
          }
          componentDidUpdate(h) {
            this.m_chat &&
              this.m_chat.m_bAutoScroll &&
              this.ScrollToNewestMessages(),
              (this.props.steamID !== h.steamID ||
                this.props.broadcastID !== h.broadcastID ||
                this.props.broadcastChannelID !== h.broadcastChannelID) &&
                this.StartChat();
          }
          componentWillUnmount() {
            this.m_chat && this.m_chat.Stop();
          }
          StartChat() {
            this.m_chat && this.m_chat.Stop();
            const h = rr.q
              .Get()
              .GetOrCreateChat(
                this.props.broadcastChannelID ?? "",
                this.props.steamID ?? "",
              );
            if (((this.m_chat = h), this.props.broadcastChannelID))
              h.StartForChannel(this.props.broadcastChannelID);
            else if (
              this.props.steamID &&
              this.props.steamID &&
              (this.props.broadcastID || this.props.globalChat)
            ) {
              let b = this.props.broadcastID || "0";
              h.StartForSteamID(this.props.steamID, b),
                this.ScrollToNewestMessages();
            }
          }
          IsTrustedDomain(h) {
            return !!h.match(Dr);
          }
          AddLinksEmoticons(h, b) {
            let v = dr;
            b && (v = this.m_chat?.GetUserEmoticons());
            let E = h.split(dr);
            const D = [];
            for (let $ = 0; $ < E.length; $ += 1)
              $ % 2 === 1
                ? D.push((0, s.jsx)(n.n, { emoticon: E[$], large: !0 }, $))
                : D.push(E[$]);
            return D;
          }
          HandleScroll(h) {
            const b = this.props.bInvertLayout
              ? h.currentTarget.scrollTop < 6
              : h.currentTarget.scrollTop + h.currentTarget.clientHeight >=
                h.currentTarget.scrollHeight - 6;
            this.m_chat && (this.m_chat.m_bAutoScroll = b);
          }
          ScrollToNewestMessages() {
            this.messagesContainer &&
              this.messagesContainer.current &&
              (this.messagesContainer.current.scrollTop = this.props
                .bInvertLayout
                ? 0
                : this.messagesContainer.current.scrollHeight);
          }
          OnContextMenu(h, b) {
            const v = this.m_chat;
            if (!v || b.type !== R.X8.Chat) return null;
            const E = [],
              D = v.IsUserBroadcaster(v.GetUserSteamID()),
              $ = v.BIsUserBroadcastModerator(v.GetUserSteamID());
            return (
              (B.iA && B.iA.is_support) || D || $
                ? E.push(
                    (0, s.jsx)(
                      A.kt,
                      {
                        onSelected: () =>
                          v.RemoveUserMessagesServer(b.steamid, b.persona_name),
                        children: (0, m.we)("#BroadcastChat_RemoveMessages"),
                      },
                      "remove",
                    ),
                    (0, s.jsx)(
                      A.kt,
                      {
                        onSelected: () =>
                          v.UpdateUserChatBan(
                            b.steamid,
                            Cr.sW.XP,
                            12,
                            !1,
                            b.persona_name,
                          ),
                        children: (0, m.we)("#BroadcastChat_half_Mute"),
                      },
                      "updatebanh",
                    ),
                    (0, s.jsx)(
                      A.kt,
                      {
                        onSelected: () =>
                          v.UpdateUserChatBan(
                            b.steamid,
                            Cr.sW.XP,
                            24,
                            !1,
                            b.persona_name,
                          ),
                        children: (0, m.we)("#BroadcastChat_day_Mute"),
                      },
                      "updateband",
                    ),
                    (0, s.jsx)(
                      A.kt,
                      {
                        onSelected: () =>
                          v.UpdateUserChatBan(
                            b.steamid,
                            Cr.sW.XP,
                            168,
                            !1,
                            b.persona_name,
                          ),
                        children: (0, m.we)("#BroadcastChat_week_Mute"),
                      },
                      "updatebanw",
                    ),
                    (0, s.jsx)(
                      A.kt,
                      {
                        onSelected: () =>
                          v.UpdateUserChatBan(
                            b.steamid,
                            Cr.sW.XP,
                            0,
                            !0,
                            b.persona_name,
                          ),
                        children: (0, m.we)("#BroadcastChat_perm_Mute"),
                      },
                      "updatebanp",
                    ),
                    (0, s.jsx)(
                      A.kt,
                      {
                        onSelected: () =>
                          v.UpdateUserChatBan(
                            b.steamid,
                            Cr.sW.rx,
                            0,
                            !1,
                            b.persona_name,
                            !0,
                          ),
                        children: (0, m.we)("#BroadcastChat_Unmute"),
                      },
                      "removeban",
                    ),
                  )
                : v.IsUserMutedLocally(b.steamid)
                  ? E.push(
                      (0, s.jsx)(
                        A.kt,
                        {
                          onSelected: () =>
                            v.UnmuteUserForSession(b.steamid, b.persona_name),
                          children: (0, m.we)("#BroadcastChat_UnmuteLocal"),
                        },
                        "unmuteuser",
                      ),
                    )
                  : E.push(
                      (0, s.jsx)(
                        A.kt,
                        {
                          onSelected: () =>
                            v.MuteUserForSession(b.steamid, b.persona_name),
                          children: (0, m.we)("#BroadcastChat_MuteLocal"),
                        },
                        "muteuser",
                      ),
                    ),
              ((B.iA && B.iA.is_support) ||
                v.IsUserBroadcaster(v.GetUserSteamID())) &&
                b.steamid &&
                (v.BIsUserBroadcastModerator(b.steamid)
                  ? E.push(
                      (0, s.jsx)(
                        A.kt,
                        {
                          onSelected: () =>
                            v.UpdateBroadcastChatModerator(
                              b.steamid,
                              !1,
                              b.persona_name,
                            ),
                          children: (0, m.we)(
                            "#BroadcastChat_Remove_Moderator",
                          ),
                        },
                        "removemod",
                      ),
                    )
                  : E.push(
                      (0, s.jsx)(
                        A.kt,
                        {
                          onSelected: () =>
                            v.UpdateBroadcastChatModerator(
                              b.steamid,
                              !0,
                              b.persona_name,
                            ),
                          children: (0, m.we)("#BroadcastChat_Add_Moderator"),
                        },
                        "addmod",
                      ),
                    )),
              E.length
                ? (0, U.lX)(
                    (0, s.jsxs)(A.tz, {
                      children: [
                        (0, s.jsxs)("div", {
                          className: y().SelectedUserNameCtn,
                          children: [
                            (0, m.we)("#BroadcastChat_User"),
                            (0, s.jsx)("br", {}),
                            (0, s.jsx)("span", {
                              className: y().SelectedUserName,
                              children: b.persona_name,
                            }),
                          ],
                        }),
                        E,
                      ],
                    }),
                    h,
                  )
                : null
            );
          }
          GetTypeClassName(h) {
            return h.type === R.X8.Notification
              ? y().MessageNotification
              : h.type === R.X8.Error
                ? y().MessageError
                : y().MessageChat;
          }
          FormatMessage(h, b) {
            if (h.type === R.X8.Chat) {
              let v = b ? b.FilterText(h.steamid, h.msg) : h.msg;
              return this.AddLinksEmoticons(v, !1);
            } else return h.msg;
          }
          RenderUserChatLine(h, b, v, E) {
            let D = E?.get(b.steamid);
            const $ = b.type === R.X8.Chat ? oi(b.steamid, h, D) : "";
            return (0, s.jsxs)(
              "div",
              {
                className: this.GetTypeClassName(b),
                onContextMenu: (V) => this.OnContextMenu(V, b),
                children: [
                  b.type === R.X8.Chat && (0, s.jsx)(Nr, { userType: $ }),
                  b.flair &&
                    (0, s.jsx)("span", {
                      className: y().FlairContainer,
                      children: this.AddLinksEmoticons(b.flair, !1),
                    }),
                  b.type === R.X8.Chat &&
                    (0, s.jsx)(k, { userType: $, msg: b, presenterInfo: D }),
                  b.type === R.X8.Chat &&
                    h.GetBroadcastSteamID() === b.steamid &&
                    (0, s.jsx)("span", {
                      className: `${y().MessageNotification} ${y().MessageContents}`,
                      children: ` (${(0, m.we)("#BroadcastChat_Broadcaster")})`,
                    }),
                  b.type === R.X8.Chat &&
                    h.m_mapChannelModeratorUsers.get(b.steamid) &&
                    (0, s.jsx)("span", {
                      className: `${y().MessageNotification} ${y().MessageContents}`,
                      children: ` (${(0, m.we)("#BroadcastChat_Moderator")})`,
                    }),
                  (0, s.jsxs)("span", {
                    className: `${y().MessageContents} ${this.AddLinksEmoticons(b.msg, !1).filter((V) => V && typeof V == "string").length ? "" : y().EmoticonsOnly}`,
                    children: [
                      b.type === R.X8.Chat ? " : " : "",
                      this.FormatMessage(b, h.TextFilterStore),
                    ],
                  }),
                ],
              },
              b.instance_id + "_" + b.client_ts + "_" + v,
            );
          }
          render() {
            const {
                hidden: h,
                bPartnerMemberOnlyChat: b,
                bInvertLayout: v,
                onSignIn: E,
              } = this.props,
              D = this.m_chat,
              $ = D ? D.m_rgChatMessages : [],
              V = v ? $.reverse() : $,
              hr = this.m_chat
                ? li.l.GetPresenterMapForBroadcasterSteamID(
                    this.m_chat.GetBroadcastSteamID(),
                  )
                : void 0,
              mr = this.m_chat ? this.m_chat.m_latestAnnouncement : null;
            return (0, s.jsxs)("div", {
              className: (0, g.A)(y().ChatPanel, "ChatPanel"),
              style: h ? { display: "none" } : void 0,
              children: [
                (0, s.jsx)(S.P, { latestAnnouncement: mr }),
                v &&
                  !!this.m_chat &&
                  (0, s.jsx)(P, {
                    oChat: this.m_chat,
                    emoticonStore: this.props.emoticonStore,
                    bPartnerMemberOnlyChat: b,
                    onSignIn: E,
                  }),
                (0, s.jsx)(ar, {}),
                (0, s.jsx)("div", {
                  className: (0, g.A)(
                    `${y().ChatMessages} ${Hr().minHeightZero}`,
                    "ChatMessages",
                  ),
                  onScroll: this.HandleScroll,
                  ref: this.messagesContainer,
                  children:
                    D &&
                    V.map((vr, Br) => this.RenderUserChatLine(D, vr, Br, hr)),
                }),
                (0, s.jsx)(T, {}),
                !v &&
                  !!this.m_chat &&
                  (0, s.jsx)(P, {
                    oChat: this.m_chat,
                    emoticonStore: this.props.emoticonStore,
                    bPartnerMemberOnlyChat: b,
                    onSignIn: E,
                  }),
              ],
            });
          }
        };
        er([Wr.sH], K.prototype, "m_chat", 2),
          er([q.oI], K.prototype, "StartChat", 1),
          er([q.oI], K.prototype, "HandleScroll", 1),
          er([q.oI], K.prototype, "OnContextMenu", 1),
          er([q.oI], K.prototype, "RenderUserChatLine", 1),
          (K = er([Y.PA], K));
        function P(h) {
          const {
            oChat: b,
            emoticonStore: v,
            bPartnerMemberOnlyChat: E,
            onSignIn: D,
          } = h;
          return E && (!B.iA?.logged_in || !B.iA?.is_partner_member)
            ? (0, s.jsx)(Or, {})
            : B.iA?.logged_in
              ? (0, s.jsx)(Ur, { oChat: b, emoticonStore: v })
              : D
                ? (0, s.jsx)(_, { onSignIn: D })
                : null;
        }
        function Ur(h) {
          const { oChat: b, emoticonStore: v } = h,
            [E, D] = Sr.useState(""),
            $ = Sr.useRef(null),
            V = (0, W.q3)(() => b.m_bRateLimited),
            hr = Sr.useCallback(
              (sr) => {
                !sr.shiftKey &&
                  sr.charCode === 13 &&
                  (b.m_bRateLimited || (b.SendMessage(E), D("")),
                  sr.preventDefault());
              },
              [b, E],
            ),
            mr = Sr.useCallback(
              (sr, zr = !1) => {
                D(E + `\u02D0${sr}\u02D0`), $?.current && $.current.focus();
              },
              [E, $],
            ),
            vr = () => {
              b.SendMessage(E), D("");
            };
          let Br = V || E.trim().length == 0,
            pr = (0, g.A)(
              Hr().chatSubmitButton,
              E.length == 0 && Hr().disabled,
            );
          return (0, s.jsx)("div", {
            className: (0, g.A)(y().ChatEntryCtn, "ChatEntryCtn"),
            children: (0, s.jsxs)("div", {
              className: (0, g.A)(y().ChatEntry, "ChatEntry"),
              children: [
                (0, s.jsxs)("form", {
                  className: `${Hr().chatEntryControls}`,
                  children: [
                    (0, s.jsx)("textarea", {
                      className: Hr().chatTextarea,
                      placeholder: (0, m.we)("#BroadcastChat_EnterResponse"),
                      onKeyPress: hr,
                      onChange: (sr) => D(sr.target.value),
                      value: E,
                      ref: $,
                    }),
                    V &&
                      (0, s.jsx)(Er, {
                        nSeconds: b.m_nRateLimitSeconds,
                        bRateLimited: b.m_bRateLimited,
                      }),
                    (0, s.jsx)("button", {
                      className: pr,
                      title: (0, m.we)("#ChatEntryButton_Submit"),
                      disabled: Br,
                      onClick: vr,
                      children: (0, s.jsx)(j.XTb, {}),
                    }),
                  ],
                }),
                (0, s.jsx)("div", {
                  style: { height: "50px" },
                  className: `${Hr().chatEntryActionsContainer}`,
                  children: (0, s.jsxs)("div", {
                    className: Hr().chatEntryActionsGroup,
                    children: [
                      (0, s.jsx)(i.A, {
                        disabled: !1,
                        OnEmoticonSelected: mr,
                        rtLastAckedNewEmoticons: Number.MAX_VALUE,
                        emoticonStore: v,
                      }),
                      (0, s.jsx)(Gr, { ...h, textInputRef: $ }),
                    ],
                  }),
                }),
              ],
            }),
          });
        }
        function Gr(h) {
          const { oChat: b, emoticonStore: v, textInputRef: E } = h;
          return b.m_strFlairGroupID &&
            v.flair_list &&
            v.GetFlairListByGroupID(b.m_strFlairGroupID)?.length
            ? (0, s.jsx)(i.A, {
                disabled: !1,
                OnEmoticonSelected: (D) => {
                  b.UpdateChatMessageFlair(D), E?.current && E.current.focus();
                },
                rtLastAckedNewEmoticons: Number.MAX_VALUE,
                emoticonStore: v,
                strFlairGroupID: b.m_strFlairGroupID,
                title: (0, m.we)("#ChatEntryButton_Flair"),
                buttonIcon: (0, s.jsx)(j.P7r, {}),
              })
            : null;
        }
        class Er extends Sr.Component {
          render() {
            return (0, s.jsx)("div", {
              className: y().TimedProgressBarContainer,
              children: (0, s.jsxs)("div", {
                className: y().wrapper,
                children: [
                  (0, s.jsx)("div", {
                    className: `${y().spinner} ${y().pie}`,
                    style: {
                      animationDuration: `${this.props.nSeconds || 0}s`,
                    },
                  }),
                  (0, s.jsx)("div", {
                    className: `${y().filler} ${y().pie}`,
                    style: {
                      animationDuration: `${this.props.nSeconds || 0}s`,
                    },
                  }),
                  (0, s.jsx)("div", {
                    className: y().mask,
                    style: {
                      animationDuration: `${this.props.nSeconds || 0}s`,
                    },
                  }),
                ],
              }),
            });
          }
        }
        function _(h) {
          return (0, s.jsx)("div", {
            className: y().Description,
            children: (0, s.jsx)(o.$n, {
              onClick: h.onSignIn,
              className: (0, g.A)(y().SignInButton),
              children: (0, m.we)("#BroadcastChat_Login"),
            }),
          });
        }
        function Or(h) {
          return (0, s.jsxs)("div", {
            className: y().Description,
            children: [
              (0, s.jsx)("div", {
                className: y().LogInPrompt,
                children: (0, m.we)("#Broadcast_PartnerChat_Login"),
              }),
              !B.iA.logged_in &&
                !B.TS.IN_STEAMUI &&
                (0, s.jsx)(o.$n, {
                  onClick: cr.vg,
                  className: (0, g.A)(y().SignInButton),
                  children: (0, m.we)("#Login_SignIn"),
                }),
            ],
          });
        }
      },
      29125: (ii, fi, f) => {
        "use strict";
        f.d(fi, { P: () => qr, V: () => ar });
        var s = f(7850),
          Wr = f(65946),
          Y = f(90626),
          W = f(21822),
          Sr = f(22950),
          U = f(29630),
          Cr = f(37656),
          rr = f(11587),
          li = f(53107),
          z = f(71742),
          Hr = f(36707),
          A = f(18210),
          o = f(53113),
          n = f(3166),
          i = f(8287),
          cr = f.n(i);
        function qr(T) {
          const { latestAnnouncement: j } = T;
          return j?.type == "giveaway_draw"
            ? (0, s.jsx)(_r, { latestWinner: j })
            : null;
        }
        function _r(T) {
          const {
              latestWinner: j,
              className: g,
              strActionButton: m,
              strActionClassname: q,
            } = T,
            B = j.winners_info ?? [],
            L = B.length > 0 ? B[0].accountid : 0,
            [y, S] = Y.useState(L),
            R =
              "https://store.steampowered.com/sale/thegameawardssteamdeckdrop2022",
            tr = (0, o.L$)(
              `${U.zU.GetBaseURL()}4/080b1f163b02a9810fa78f0b32b9396fab012aef.gif`,
            ),
            gr = (0, o.L$)(
              `${U.zU.GetBaseURL()}4/56521811317a8298a7aff4a914be964b67dd0325.png`,
            );
          (0, z.wT)(
            !!j.giveaway_gid,
            "Giveaway draw announcement is missing its giveaway",
            j,
          );
          const ur = (0, Cr.w)(j.giveaway_gid);
          let er =
            ur.bLoadingGiveawayInfo || ur.closed
              ? null
              : ur.seconds_until_drawing;
          const dr = L === n.iA.accountid;
          Y.useEffect(() => {
            y != L && setTimeout(() => S(L), 1500);
          }, [L, y]);
          const jr =
            B.length > 0 && B[0].persona
              ? B[0].persona
              : (0, A.we)("#GA2022_UnknownPersonaName");
          return (0, s.jsx)(li.uU, {
            href: R,
            className: g,
            children: (0, s.jsxs)("div", {
              className: (0, Hr.A)({
                [cr().GiveawayWinnerBox]: !0,
                [cr().GiveawayWinnerAnnounced]: y === L,
              }),
              children: [
                (0, s.jsx)("div", {
                  className: cr().GiveawayWinnerBoxLeft,
                  children: (0, s.jsx)("img", {
                    className: cr().GiveawayWinnerArt,
                    src: tr,
                  }),
                }),
                (0, s.jsxs)("div", {
                  className: cr().GiveawayWinnerBoxRight,
                  children: [
                    y !== L &&
                      (0, s.jsx)("div", {
                        className: (0, Hr.A)(cr().GiveawayWinnerText),
                        children: (0, A.PP)(
                          "#GA2022_Congrats_Deck_Unknown",
                          (0, s.jsx)("br", {}),
                        ),
                      }),
                    y === L &&
                      (0, s.jsx)("div", {
                        className: (0, Hr.A)(
                          cr().GiveawayWinnerText,
                          cr().GiveawayWinnerAnnounced,
                        ),
                        children: (0, A.PP)(
                          dr
                            ? "#GA2022_Congrats_Deck_Me"
                            : "#GA2022_Congrats_Deck_OTher",
                          jr,
                          (0, s.jsx)("br", {}),
                        ),
                      }),
                    !!(er && er > 0) &&
                      (0, s.jsx)("div", {
                        className: cr().GiveawayWinnerCountdown,
                        children: (0, A.PP)("#GA2022_Congrats_NextDraw", er),
                      }),
                  ],
                }),
                (0, s.jsx)("img", {
                  className: cr().GiveawayWinnerQuestion,
                  src: gr,
                }),
                !!m &&
                  (0, s.jsx)("div", {
                    className: q,
                    children: dr ? (0, A.we)("#GA2022_YouWonNextSteps") : m,
                  }),
              ],
            }),
          });
        }
        function ei(T, j) {
          const [g, m] = (0, Wr.q3)(() => [
              j?.steamid,
              j?.steamid
                ? Sr.es.GetBroadcast(j.steamid)?.m_ulBroadcastID
                : void 0,
            ]),
            [q, B] = Y.useState(null);
          Y.useEffect(() => {
            let y = null;
            return (
              g &&
                ((y = W.q.Get().GetOrCreateChat(m ?? "", g)),
                y.StartForSteamID(g, m ?? ""),
                B(y)),
              () => {
                y && (y.Stop(), B(null));
              }
            );
          }, [g, m]);
          const L = (0, Wr.q3)(() => q?.m_latestAnnouncement || null);
          if (L?.type == "giveaway_draw") {
            const y = L;
            if (y.giveaway_gid == T) return y;
          }
          return null;
        }
        function ar(T) {
          const { gidGiveaway: j, stream: g } = T,
            m = ei(j, g),
            q = (0, rr.h3)("GameAwardDrop2022");
          let B = null,
            L = cr().GiveawayRegisterButton;
          return (
            n.iA.logged_in
              ? q?.registered
                ? ((B = (0, A.we)("#GA2022_AlreadyRegistered")),
                  (L = cr().GiveawayAlreadyRegistered))
                : (B = (0, A.we)("#GA2022_RegisterToWin"))
              : (B = (0, A.we)("#GA2022_RegisterLoginToWin")),
            m
              ? (0, s.jsx)(_r, {
                  latestWinner: m,
                  className: cr().InViewerBar,
                  strActionButton: B,
                  strActionClassname: L,
                })
              : null
          );
        }
      },
      23240: (ii, fi, f) => {
        "use strict";
        f.r(fi),
          f.d(fi, {
            BroadcastDetails: () => Fr,
            LinkOverlay: () => lr,
            default: () => Q,
          });
        var s = f(7850),
          Wr = f(14947),
          Y = f(75844),
          W = f(90626),
          Sr = f(16346),
          U = f(41301),
          Cr = f(83482),
          rr = f(22950),
          li = f(10142),
          z = f(54963),
          Hr = f(8323),
          A = Object.defineProperty,
          o = Object.getOwnPropertyDescriptor,
          n = (e, a, c, d) => {
            for (
              var u = d > 1 ? void 0 : d ? o(a, c) : a, w = e.length - 1, M;
              w >= 0;
              w--
            )
              (M = e[w]) && (u = (d ? M(a, c, u) : M(u)) || u);
            return d && u && A(a, c, u), u;
          };
        class i extends W.Component {
          m_elCanvas = null;
          m_Context = null;
          m_schUpdate = new Hr.LU();
          m_bSetupComplete = !1;
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
            if (
              this.props.elementRef == null ||
              this.m_elCanvas == null ||
              this.m_bSetupComplete
            )
              return;
            let a = this.props.scaleFactor || [1, 1],
              c = this.props.elementRef,
              d = this.props.updateRate;
            const u = this.m_elCanvas.getContext("2d");
            if (!u) return;
            this.m_Context = u;
            let w = Math.floor(
                this.m_elCanvas.clientWidth / this.props.reductionFactor,
              ),
              M = Math.floor(
                this.m_elCanvas.clientHeight / this.props.reductionFactor,
              );
            (this.m_elCanvas.width = w),
              (this.m_elCanvas.height = M),
              (this.props.blurAmount ?? 0) > 0 &&
                (u.filter = "blur(" + this.props.blurAmount + "px)");
            let O = () => {
              u.drawImage(c, 0, 0, w * a[0], M * a[1]),
                d > 0 && this.m_schUpdate.Schedule(d, O);
            };
            O(), (this.m_bSetupComplete = !0);
          }
          render() {
            return (0, s.jsx)("canvas", {
              id: this.props.id,
              className: this.props.className,
              ref: this.BindCanvasRef,
              width: this.props.width,
              height: this.props.height,
            });
          }
        }
        n([z.oI], i.prototype, "BindCanvasRef", 1),
          n([z.oI], i.prototype, "updateCanvas", 1);
        var cr = f(34360),
          qr = f(81115),
          _r = f(58584),
          ei = f(59913),
          ar = f(42891),
          T = f(28679);
        function j(e, a) {
          var c = function (w) {
              return a && (0, W.isValidElement)(w) ? a(w) : w;
            },
            d = Object.create(null);
          return (
            e &&
              W.Children.map(e, function (u) {
                return u;
              }).forEach(function (u) {
                d[u.key] = c(u);
              }),
            d
          );
        }
        function g(e, a) {
          (e = e || {}), (a = a || {});
          function c(H) {
            return H in a ? a[H] : e[H];
          }
          var d = Object.create(null),
            u = [];
          for (var w in e)
            w in a ? u.length && ((d[w] = u), (u = [])) : u.push(w);
          var M,
            O = {};
          for (var X in a) {
            if (d[X])
              for (M = 0; M < d[X].length; M++) {
                var J = d[X][M];
                O[d[X][M]] = c(J);
              }
            O[X] = c(X);
          }
          for (M = 0; M < u.length; M++) O[u[M]] = c(u[M]);
          return O;
        }
        function m(e, a, c) {
          return c[a] != null ? c[a] : e.props[a];
        }
        function q(e, a) {
          return j(e.children, function (c) {
            return (0, W.cloneElement)(c, {
              onExited: a.bind(null, c),
              in: !0,
              appear: m(c, "appear", e),
              enter: m(c, "enter", e),
              exit: m(c, "exit", e),
            });
          });
        }
        function B(e, a, c) {
          var d = j(e.children),
            u = g(a, d);
          return (
            Object.keys(u).forEach(function (w) {
              var M = u[w];
              if ((0, W.isValidElement)(M)) {
                var O = w in a,
                  X = w in d,
                  J = a[w],
                  H = (0, W.isValidElement)(J) && !J.props.in;
                X && (!O || H)
                  ? (u[w] = (0, W.cloneElement)(M, {
                      onExited: c.bind(null, M),
                      in: !0,
                      exit: m(M, "exit", e),
                      enter: m(M, "enter", e),
                    }))
                  : !X && O && !H
                    ? (u[w] = (0, W.cloneElement)(M, { in: !1 }))
                    : X &&
                      O &&
                      (0, W.isValidElement)(J) &&
                      (u[w] = (0, W.cloneElement)(M, {
                        onExited: c.bind(null, M),
                        in: J.props.in,
                        exit: m(M, "exit", e),
                        enter: m(M, "enter", e),
                      }));
              }
            }),
            u
          );
        }
        var L =
            Object.values ||
            function (e) {
              return Object.keys(e).map(function (a) {
                return e[a];
              });
            },
          y = {
            component: "div",
            childFactory: function (a) {
              return a;
            },
          },
          S = (function (e) {
            (0, ar.A)(a, e);
            function a(d, u) {
              var w;
              w = e.call(this, d, u) || this;
              var M = w.handleExited.bind((0, ei.A)(w));
              return (
                (w.state = {
                  contextValue: { isMounting: !0 },
                  handleExited: M,
                  firstRender: !0,
                }),
                w
              );
            }
            var c = a.prototype;
            return (
              (c.componentDidMount = function () {
                (this.mounted = !0),
                  this.setState({ contextValue: { isMounting: !1 } });
              }),
              (c.componentWillUnmount = function () {
                this.mounted = !1;
              }),
              (a.getDerivedStateFromProps = function (u, w) {
                var M = w.children,
                  O = w.handleExited,
                  X = w.firstRender;
                return { children: X ? q(u, O) : B(u, M, O), firstRender: !1 };
              }),
              (c.handleExited = function (u, w) {
                var M = j(this.props.children);
                u.key in M ||
                  (u.props.onExited && u.props.onExited(w),
                  this.mounted &&
                    this.setState(function (O) {
                      var X = (0, _r.A)({}, O.children);
                      return delete X[u.key], { children: X };
                    }));
              }),
              (c.render = function () {
                var u = this.props,
                  w = u.component,
                  M = u.childFactory,
                  O = (0, qr.A)(u, ["component", "childFactory"]),
                  X = this.state.contextValue,
                  J = L(this.state.children).map(M);
                return (
                  delete O.appear,
                  delete O.enter,
                  delete O.exit,
                  w === null
                    ? W.createElement(T.A.Provider, { value: X }, J)
                    : W.createElement(
                        T.A.Provider,
                        { value: X },
                        W.createElement(w, O, J),
                      )
                );
              }),
              a
            );
          })(W.Component);
        (S.propTypes = {}), (S.defaultProps = y);
        const R = S;
        var tr = f(63741),
          gr = f(36707);
        const ur = 500;
        class er extends W.Component {
          render() {
            let {
              keyExtractor: a,
              style: c,
              duration: d = ur,
              className: u,
              children: w,
              childRef: M,
              ...O
            } = this.props;
            const X = { ...(c || {}), transitionDuration: `${d / 1e3}s` };
            return (0, s.jsx)(R, {
              ...O,
              className: (0, gr.A)("crossfade", u),
              children: (0, s.jsx)(
                tr.A,
                {
                  nodeRef: M,
                  classNames: "crossfade-anim",
                  timeout: d,
                  style: X,
                  children: w,
                },
                a(),
              ),
            });
          }
        }
        function dr(e) {
          const { src: a, ...c } = e,
            d = { backgroundImage: `url(${a})` },
            u = W.useRef(null);
          return (0, s.jsx)(er, {
            style: d,
            keyExtractor: () => a,
            childRef: u,
            ...c,
            children: (0, s.jsx)("div", { ref: u, className: "crossfade-img" }),
          });
        }
        var jr = f(61431),
          Dr = f(79590),
          oi = f(79167),
          k = f(36118),
          Nr = f(53107),
          K = f(82734),
          P = f(18210),
          Ur = f(19730),
          Gr = f(13854),
          Er = f(3166),
          _ = f(6600),
          Or = f(48937),
          h = f(15527),
          b = f.n(h),
          v = f(85599),
          E = Object.defineProperty,
          D = Object.getOwnPropertyDescriptor,
          $ = (e, a, c, d) => {
            for (
              var u = d > 1 ? void 0 : d ? D(a, c) : a, w = e.length - 1, M;
              w >= 0;
              w--
            )
              (M = e[w]) && (u = (d ? M(a, c, u) : M(u)) || u);
            return d && u && E(a, c, u), u;
          };
        function V() {
          return (0, s.jsx)("div", {
            className: "STV_ReplayBanner",
            children: (0, P.we)("#DASHPlayerControls_IsReplay"),
          });
        }
        const hr = (0, Y.PA)((e) => {
          let a = e.video;
          if (a && (a.IsBroadcastClip() || a.IsBroadcastVOD())) return null;
          let c = rr.fK.Loading,
            d = "";
          if (a) {
            (c = a.GetBroadcastState()), (d = a.GetBroadcastStateDescription());
            let w = a.IsBuffering();
            c == rr.fK.Unlocking && ((c = rr.fK.Loading), (d = "")),
              c == rr.fK.Ready && w && ((c = rr.fK.Loading), (d = ""));
          }
          if (
            (a && c != rr.fK.Error && a.GetUserInputNeeded()) ||
            c == rr.fK.Ready
          )
            return null;
          let u = c == rr.fK.Loading;
          return (0, s.jsxs)("div", {
            className: "BroadcastVideoWatchState",
            style: { filter: "hue-rotate(40deg)" },
            children: [
              u && (0, s.jsx)(v.t, {}),
              !u &&
                (0, s.jsx)("div", {
                  className: "BroadcastVideoWatchState_Text",
                  children: d,
                }),
            ],
          });
        });
        class mr extends W.Component {
          OnClick() {
            rr.es.UserInputClickVideo(this.props.video);
          }
          render() {
            return (0, s.jsxs)("div", {
              className: "BroadcastVideoUserInputNeeded",
              onClick: this.OnClick,
              children: [
                (0, s.jsx)(k.jGG, {}),
                (0, s.jsx)("span", {
                  children: (0, P.we)("#DASHPlayerControls_ClickToPlay"),
                }),
              ],
            });
          }
        }
        $([z.oI], mr.prototype, "OnClick", 1);
        var vr = Object.defineProperty,
          Br = Object.getOwnPropertyDescriptor,
          pr = (e, a, c, d) => {
            for (
              var u = d > 1 ? void 0 : d ? Br(a, c) : a, w = e.length - 1, M;
              w >= 0;
              w--
            )
              (M = e[w]) && (u = (d ? M(a, c, u) : M(u)) || u);
            return d && u && vr(a, c, u), u;
          };
        let sr = class extends W.Component {
          constructor(e) {
            super(e);
          }
          HideStats() {
            this.props.closeStats && this.props.closeStats();
          }
          render() {
            let e = this.props.stats;
            return (0, s.jsxs)("div", {
              className: "dash_video_stats",
              children: [
                (0, s.jsx)("button", {
                  className: "dash_stat_close_button",
                  onClick: this.HideStats,
                  children: (0, s.jsx)(k.sED, {}),
                }),
                (0, s.jsxs)("div", {
                  children: [
                    (0, P.we)("#DASHPlayerStats_BufferingResolution"),
                    " ",
                    (0, s.jsx)("span", {
                      className: "videoStatsValue",
                      children: e.GetBufferingResolutionToDisplay(),
                    }),
                  ],
                }),
                (0, s.jsxs)("div", {
                  children: [
                    (0, P.we)("#DASHPlayerStats_PlaybackResolution"),
                    " ",
                    (0, s.jsx)("span", {
                      className: "videoStatsValue",
                      children: e.GetPlaybackResolutionToDisplay(),
                    }),
                  ],
                }),
                (0, s.jsxs)("div", {
                  children: [
                    (0, P.we)("#DASHPlayerStats_HtmlResolution"),
                    " ",
                    (0, s.jsx)("span", {
                      className: "videoStatsValue",
                      children: e.GetHTMLVideoResolutionToDisplay(),
                    }),
                  ],
                }),
                (0, s.jsxs)("div", {
                  children: [
                    (0, P.we)("#DASHPlayerStats_ContentServer"),
                    " ",
                    (0, s.jsx)("span", {
                      className: "videoStatsValue",
                      children: e.GetContentServerToDisplay(),
                    }),
                  ],
                }),
                (0, s.jsxs)("div", {
                  children: [
                    (0, P.we)("#DASHPlayerStats_StallEvents"),
                    " ",
                    (0, s.jsx)("span", {
                      className: "videoStatsValue",
                      children: e.GetStalledEventsToDisplay(),
                    }),
                  ],
                }),
                (0, s.jsxs)("div", {
                  children: [
                    (0, P.we)("#DASHPlayerStats_FailedDownloads"),
                    " ",
                    (0, s.jsx)("span", {
                      className: "videoStatsValue",
                      children: e.GetFailedDownloadsToDisplay(),
                    }),
                  ],
                }),
                (0, s.jsxs)("div", {
                  children: [
                    (0, P.we)("#DASHPlayerStats_TimeToFirstFrame"),
                    " ",
                    (0, s.jsx)("span", {
                      className: "videoStatsValue",
                      children: e.GetTimeToFirstFrameToDisplay(),
                    }),
                  ],
                }),
                (0, s.jsxs)("div", {
                  children: [
                    (0, P.we)("#DASHPlayerStats_PlaybackRate"),
                    " ",
                    (0, s.jsx)("span", {
                      className: "videoStatsValue",
                      children: e.GetPlaybackRateForDisplay(),
                    }),
                  ],
                }),
                (0, s.jsx)(zr, { stats: e }),
              ],
            });
          }
        };
        pr([z.oI], sr.prototype, "HideStats", 1), (sr = pr([Y.PA], sr));
        let zr = class extends W.Component {
          constructor(e) {
            super(e);
          }
          createBufferedRange(e) {
            let a = this.props.stats,
              c = [],
              d = e ? "vidbuf" : "audbuf",
              u = e
                ? a.GetNumBufferedVideoRanges()
                : a.GetNumBufferedAudioRanges();
            if (u > 0)
              for (let w = 0; w < u; ++w) {
                let M = (0, P.we)(
                    e
                      ? "#DASHPlayerStats_VideoBufferRange"
                      : "#DASHPlayerStats_AudioBufferRange",
                    w,
                  ),
                  O = e
                    ? a.GetBufferedVideoSegmentForDisplay(w)
                    : a.GetBufferedAudioSegmentForDisplay(w);
                c.push(
                  (0, s.jsxs)(
                    "div",
                    {
                      children: [
                        M,
                        " ",
                        (0, s.jsx)("span", {
                          className: "videoStatsValue",
                          children: O,
                        }),
                      ],
                    },
                    d + w,
                  ),
                );
              }
            else {
              let w = (0, P.we)(
                e
                  ? "#DASHPlayerStats_VideoNoRangeInformation"
                  : "#DASHPlayerStats_AudioNoRangeInformation",
              );
              c.push((0, s.jsx)("div", { children: w }, d + "none"));
            }
            return c;
          }
          render() {
            let e = this.props.stats;
            return (0, s.jsxs)("div", {
              className: "dash_video_quick_stats",
              children: [
                (0, s.jsxs)("div", {
                  children: [
                    (0, P.we)("#DASHPlayerStats_BytesReceived"),
                    " ",
                    (0, s.jsx)("span", {
                      className: "videoStatsValue",
                      children: e.GetBytesReceivedToDisplay(),
                    }),
                  ],
                }),
                this.props.stats.BHasFrameInformation() &&
                  (0, s.jsxs)("div", {
                    children: [
                      (0, P.we)("#DASHPlayerStats_DroppedFrames"),
                      " ",
                      (0, s.jsx)("span", {
                        className: "videoStatsValue",
                        children: e.GetDroppedFramesToDisplay(),
                      }),
                    ],
                  }),
                (0, s.jsxs)("div", {
                  children: [
                    (0, P.we)("#DASHPlayerStats_VideoBuffered"),
                    " ",
                    (0, s.jsxs)("span", {
                      className: "videoStatsValue",
                      children: [e.GetVideoBufferedToDisplay(), " "],
                    }),
                  ],
                }),
                (0, s.jsxs)("div", {
                  children: [
                    (0, P.we)("#DASHPlayerStats_AudioBuffered"),
                    " ",
                    (0, s.jsxs)("span", {
                      className: "videoStatsValue",
                      children: [e.GetAudioBufferedToDisplay(), " "],
                    }),
                  ],
                }),
                this.createBufferedRange(!0),
                this.createBufferedRange(!1),
                (0, s.jsxs)("div", {
                  children: [
                    (0, P.we)("#DASHPlayerStats_BandwidthRequired"),
                    " ",
                    (0, s.jsx)("span", {
                      className: "videoStatsValue",
                      children: e.GetBandwidthRequiredToDisplay(),
                    }),
                  ],
                }),
                (0, s.jsxs)("div", {
                  children: [
                    (0, P.we)("#DASHPlayerStats_BandwidthVideo"),
                    " ",
                    (0, s.jsx)("span", {
                      className: "videoStatsValue",
                      children: e.GetBandwithVideoToDisplay(),
                    }),
                  ],
                }),
                (0, s.jsxs)("div", {
                  children: [
                    (0, P.we)("#DASHPlayerStats_BandwidthNums"),
                    " ",
                    (0, s.jsx)("span", {
                      className: "videoStatsValue",
                      children: e.GetBandwidthStatsToDisplay(),
                    }),
                  ],
                }),
                (0, s.jsxs)("div", {
                  children: [
                    (0, P.we)("#DASHPlayerStats_DownloadNums"),
                    " ",
                    (0, s.jsx)("span", {
                      className: "videoStatsValue",
                      children: e.GetDownloadTimeStatsToDisplay(),
                    }),
                  ],
                }),
                (0, s.jsxs)("div", {
                  children: [
                    (0, P.we)("#DASHPlayerStats_ActiveDownloads"),
                    " ",
                    (0, s.jsx)("span", {
                      className: "videoStatsValue",
                      children: e.GetActiveDownloadsToDisplay(),
                    }),
                  ],
                }),
                (0, s.jsxs)("div", {
                  children: [
                    (0, P.we)("#DASHPlayerStats_VideoDownloadProgress"),
                    " ",
                    (0, s.jsx)("span", {
                      className: "videoStatsValue",
                      children: e.GetVideoDownloadProgressToDisplay(),
                    }),
                  ],
                }),
                (0, s.jsxs)("div", {
                  children: [
                    (0, P.we)("#DASHPlayerStats_DroppingFrames"),
                    " ",
                    (0, s.jsx)("span", {
                      className: "videoStatsValue",
                      children: e.GetPersistentFrameDropsForDisplay(),
                    }),
                  ],
                }),
                (0, s.jsxs)("div", {
                  children: [
                    (0, P.we)("#DASHPlayerStats_CurrentFPS"),
                    " ",
                    (0, s.jsx)("span", {
                      className: "videoStatsValue",
                      children: e.GetCurrentFPSForDisplay(),
                    }),
                  ],
                }),
              ],
            });
          }
        };
        zr = pr([Y.PA], zr);
        var xr = f(82581),
          Lr = Object.defineProperty,
          gi = Object.getOwnPropertyDescriptor,
          G = (e, a, c, d) => {
            for (
              var u = d > 1 ? void 0 : d ? gi(a, c) : a, w = e.length - 1, M;
              w >= 0;
              w--
            )
              (M = e[w]) && (u = (d ? M(a, c, u) : M(u)) || u);
            return d && u && Lr(a, c, u), u;
          };
        class fr extends W.Component {
          m_elSettingsButton;
          m_SettingsButtonPos;
          m_elClickListener = null;
          m_elSettingsPanel = null;
          m_elSubtitlesButton = W.createRef();
          m_elSubtitlesPanel = W.createRef();
          m_SubtitlesButtonPos;
          constructor(a) {
            super(a), (this.state = { bSettingsOpen: !1, bSubtitlesOpen: !1 });
          }
          OnVideoControlClick(a) {
            this.setState({ bSettingsOpen: !this.state.bSettingsOpen }),
              (this.m_SettingsButtonPos = [
                this.m_elSettingsButton.offsetLeft,
                this.m_elSettingsButton.offsetTop,
              ]),
              (this.m_elClickListener =
                a.currentTarget.ownerDocument.defaultView),
              this.m_elClickListener?.addEventListener(
                "mouseup",
                this.OnMouseUp,
                !0,
              );
          }
          OnSubtitlesClick(a) {
            this.setState({ bSubtitlesOpen: !this.state.bSubtitlesOpen }),
              (this.m_SubtitlesButtonPos = [
                this.m_elSubtitlesButton.current?.offsetLeft,
                this.m_elSubtitlesButton.current?.offsetTop,
              ]),
              (this.m_elClickListener =
                a.currentTarget.ownerDocument.defaultView),
              this.m_elClickListener?.addEventListener(
                "mouseup",
                this.OnMouseUp,
                !0,
              );
          }
          OnMouseUp(a) {
            this.m_elClickListener?.removeEventListener(
              "mouseup",
              this.OnMouseUp,
              !0,
            ),
              (0, K.id)(this.m_elSettingsPanel, a.target) ||
                this.setState({ bSettingsOpen: !1 }),
              (0, K.id)(this.m_elSubtitlesPanel.current, a.target) ||
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
              c = !1;
            const { video: d, actions: u } = this.props;
            let w,
              M = [],
              O = 0,
              X = (0, s.jsx)(
                "div",
                { className: "settingsMenuSeparator" },
                "separator",
              );
            const J = 260,
              H = 32;
            if (
              (this.state.bSettingsOpen &&
                ((a = !0),
                (w = this.props.video.GetVideoRepresentations()),
                (M = w.map((C) =>
                  (0, s.jsx)(
                    xr.n,
                    {
                      onClick: () => {
                        this.props.video.SetVideoRepresentation(C),
                          this.setState({
                            bSettingsOpen: !this.state.bSettingsOpen,
                          });
                      },
                      bChecked: C.selected,
                      children: C.displayName,
                    },
                    C.id,
                  ),
                )),
                M.push(X),
                M.push(
                  (0, s.jsxs)(
                    xr.D,
                    {
                      onClick: this.OnShowStats,
                      children: [
                        (0, P.we)("#Broadcast_VideoContext_ToggleStats"),
                        "	",
                      ],
                    },
                    "statsToggle",
                  ),
                ),
                (O = 0 - (M.length * 21 + H))),
              this.state.bSubtitlesOpen)
            ) {
              (c = !0),
                (M = []),
                M.push(
                  (0, s.jsx)(
                    xr.n,
                    {
                      onClick: () => {
                        this.props.video.SetSubtitles(null),
                          this.setState({
                            bSubtitlesOpen: !this.state.bSubtitlesOpen,
                          });
                      },
                      className: "NoSubtitles",
                      bChecked: !1,
                      children: (0, P.we)("#Broadcast_None"),
                    },
                    "none",
                  ),
                );
              for (
                let C = 0;
                C < this.props.video.ListSubtitles().length;
                C++
              ) {
                const si = this.props.video.ListSubtitles()[C];
                M.push(
                  (0, s.jsx)(
                    xr.n,
                    {
                      onClick: () => {
                        this.props.video.SetSubtitles(si.language),
                          this.setState({
                            bSubtitlesOpen: !this.state.bSubtitlesOpen,
                          });
                      },
                      bChecked: si.mode === "showing",
                      children: si.label,
                    },
                    si.language,
                  ),
                );
              }
              O = 0 - (J + H);
            }
            const yr =
              this.props.video.BHasPlayer() && this.props.video.BHasTimedText();
            return (0, s.jsxs)("div", {
              className: "STV_BroadcastSettings",
              children: [
                yr &&
                  (0, s.jsx)("div", {
                    className:
                      "videoControlButton" +
                      (yr ? " ClosedCaptionsActive" : ""),
                    onClick: this.OnSubtitlesClick,
                    ref: this.m_elSubtitlesButton,
                    children: (0, s.jsx)(k.N8C, {}),
                  }),
                (0, s.jsx)("div", {
                  className:
                    "videoControlButton VideoSettings " +
                    (a ? " VideoSettingsOpen" : ""),
                  onClick: this.OnVideoControlClick,
                  ref: this.bindSettingsButton,
                  children: (0, s.jsx)(k.wB_, {}),
                }),
                (0, s.jsx)(Tr, { video: d }),
                u &&
                  u.map((C) =>
                    (0, s.jsx)(
                      "div",
                      {
                        className: "videoControlButton videoControlFitWidth",
                        children: C,
                      },
                      C.key,
                    ),
                  ),
                a &&
                  (0, s.jsx)("div", {
                    ref: this.BindSettingsPanel,
                    className: "STV_BroadcastSettingsPanel",
                    style: {
                      left: this.m_SettingsButtonPos[0],
                      top: this.m_SettingsButtonPos[1],
                      marginTop: O,
                    },
                    children: (0, s.jsx)("div", {
                      className: "STV_BroadcastSettingsMenuItems",
                      children: M,
                    }),
                  }),
                c &&
                  (0, s.jsx)("div", {
                    ref: this.m_elSubtitlesPanel,
                    className: "STV_BroadcastSettingsPanel SubtitlesMenu",
                    style: {
                      maxHeight: J + "px",
                      left: this.m_SubtitlesButtonPos[0],
                      top: this.m_SubtitlesButtonPos[1],
                      marginTop: O,
                    },
                    children: (0, s.jsx)("div", {
                      className: "STV_BroadcastSettingsMenuItems",
                      children: M,
                    }),
                  }),
              ],
            });
          }
        }
        G([z.oI], fr.prototype, "OnVideoControlClick", 1),
          G([z.oI], fr.prototype, "OnSubtitlesClick", 1),
          G([z.oI], fr.prototype, "OnMouseUp", 1),
          G([z.oI], fr.prototype, "bindSettingsButton", 1),
          G([z.oI], fr.prototype, "BindSettingsPanel", 1),
          G([z.oI], fr.prototype, "OnShowStats", 1);
        const Kr = !0;
        let Tr = class extends W.Component {
          constructor(e) {
            super(e), (0, Wr.Gn)(this);
          }
          k_nHideSliderTimeout = 1.5 * 1e3;
          m_bShowSlider = Kr;
          m_schHideSlider = new Hr.LU();
          m_bChildDragging = !1;
          m_bMouseOver = !1;
          componentWillUnmount() {
            this.m_schHideSlider.Cancel();
          }
          ToggleMute() {
            let e = this.props.video,
              a = e.IsMuted();
            e.SetMute(!a), e.GetVolume() < 0.01 && e.SetVolume(0.5);
          }
          OnMouseEnter(e) {
            (this.m_bShowSlider = !0),
              (this.m_bMouseOver = !0),
              this.m_schHideSlider.Cancel();
          }
          OnMouseLeave(e) {
            (this.m_bMouseOver = !1), this.ScheduleHide();
          }
          OnChildDrag(e) {
            (this.m_bChildDragging = e), this.ScheduleHide();
          }
          ScheduleHide() {
            this.m_bMouseOver ||
              this.m_bChildDragging ||
              this.m_schHideSlider.Schedule(
                this.k_nHideSliderTimeout,
                () => (this.m_bShowSlider = Kr),
              );
          }
          render() {
            let e = this.props.video,
              a = e.IsMuted(),
              c = e.GetVolume() * 100,
              d = "videoControlButton";
            c > 65
              ? (d += " HighestVolume")
              : c > 45
                ? (d += " HighVolume")
                : c < 46 && c > 24
                  ? (d += " MedVolume")
                  : c < 25 && (d += " LowVolume");
            let u = "BroadcastVolumeControl";
            return (
              this.m_bShowSlider && (u += " ShowVolumeSlider"),
              a && (u += " muted"),
              (0, s.jsx)("div", {
                className: u,
                onMouseEnter: this.OnMouseEnter,
                onMouseLeave: this.OnMouseLeave,
                children: (0, s.jsxs)("div", {
                  className: "BroadcastVolumeControl_FixedLayout",
                  children: [
                    (0, s.jsx)("div", {
                      className: d,
                      onClick: this.ToggleMute,
                      children: (0, s.jsx)(k.fSs, {}),
                    }),
                    (0, s.jsx)(or, { video: e, onDrag: this.OnChildDrag }),
                  ],
                }),
              })
            );
          }
        };
        G([Wr.sH], Tr.prototype, "m_bShowSlider", 2),
          G([z.oI], Tr.prototype, "ToggleMute", 1),
          G([z.oI], Tr.prototype, "OnMouseEnter", 1),
          G([z.oI], Tr.prototype, "OnMouseLeave", 1),
          G([z.oI], Tr.prototype, "OnChildDrag", 1),
          (Tr = G([Y.PA], Tr));
        let or = class extends W.Component {
          constructor(e) {
            super(e), (0, Wr.Gn)(this);
          }
          m_elSlider = null;
          m_nVolumeStartOfDrag = 0;
          OnMouseDown(e) {
            let a = e.currentTarget;
            (this.m_elSlider = a),
              (this.m_nVolumeStartOfDrag = this.props.video.GetVolume()),
              this.SetVolumeWithCoord(a, e.clientX),
              a.ownerDocument.defaultView?.addEventListener(
                "mousemove",
                this.OnMouseMove,
              ),
              a.ownerDocument.defaultView?.addEventListener(
                "mouseup",
                this.OnMouseUp,
              ),
              this.props.onDrag(!0);
          }
          OnMouseMove(e) {
            this.m_elSlider &&
              this.SetVolumeWithCoord(this.m_elSlider, e.clientX);
          }
          OnMouseUp(e) {
            if (!this.m_elSlider) return;
            this.SetVolumeWithCoord(this.m_elSlider, e.clientX);
            let a = this.props.video;
            a.IsMuted() && a.SetVolume(this.m_nVolumeStartOfDrag),
              this.m_elSlider.ownerDocument.defaultView?.removeEventListener(
                "mousemove",
                this.OnMouseMove,
              ),
              this.m_elSlider.ownerDocument.defaultView?.removeEventListener(
                "mouseup",
                this.OnMouseUp,
              ),
              (this.m_nVolumeStartOfDrag = 0),
              (this.m_elSlider = null),
              this.props.onDrag(!1);
          }
          SetVolumeWithCoord(e, a) {
            let c = e.getBoundingClientRect(),
              d = Gr.Fu(a, c.left, c.right, 0, 1),
              u = Gr.OQ(d, 0, 1),
              w = this.props.video;
            w.SetMute(d < 0.01), w.SetVolume(u);
          }
          render() {
            let e = this.props.video,
              a = e.GetVolume() * 100;
            e.IsMuted() && (a = 0);
            let d = { left: `${a}%` },
              u = { width: `${a}%` };
            return (0, s.jsxs)("div", {
              className: "BroadcastVolumeSlider",
              onMouseDown: this.OnMouseDown,
              children: [
                (0, s.jsx)("div", { className: "BroadcastVolumeSlider_Track" }),
                (0, s.jsx)("div", {
                  className: "BroadcastVolumeSlider_Fill",
                  style: u,
                }),
                (0, s.jsx)("div", {
                  className: "BroadcastVolumeSlider_Thumb",
                  style: d,
                }),
              ],
            });
          }
        };
        G([z.oI], or.prototype, "OnMouseDown", 1),
          G([z.oI], or.prototype, "OnMouseMove", 1),
          G([z.oI], or.prototype, "OnMouseUp", 1),
          G([Wr.XI], or.prototype, "SetVolumeWithCoord", 1),
          (or = G([Y.PA], or));
        var Yr = f(43434),
          Jr = Object.defineProperty,
          Zr = Object.getOwnPropertyDescriptor,
          N = (e, a, c, d) => {
            for (
              var u = d > 1 ? void 0 : d ? Zr(a, c) : a, w = e.length - 1, M;
              w >= 0;
              w--
            )
              (M = e[w]) && (u = (d ? M(a, c, u) : M(u)) || u);
            return d && u && Jr(a, c, u), u;
          };
        const Xr = 3200,
          br = 15;
        let Q = class extends W.Component {
          m_schHideControls = new Hr.LU();
          m_schUnmountControls = new Hr.LU();
          m_elVideo = null;
          m_elBroadcastPlayer = null;
          m_bMouseDown = !1;
          m_elMouseDown = null;
          m_listeners = new Hr.Ji();
          constructor(e) {
            super(e),
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
            let e = this.state.video;
            e &&
              (rr.es.StopVideo(e),
              this.setState({ video: null }),
              this.props.fnSetBroadcastVideo?.(null));
          }
          IsMuted() {
            let e = this.state.video;
            return !e || e.IsMuted();
          }
          StopPlaybackTillUserInput() {
            let e = this.state.video;
            e && e.StopPlaybackTillUserInput();
          }
          componentDidUpdate(e, a) {
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
              this.props.steamIDBroadcast !== e.steamIDBroadcast &&
                this.BindVideoRef(this.m_elVideo);
            const c = this.props.nAppIDVOD;
            c &&
              (a.strInitialCapsuleImageUrl === void 0 || e.nAppIDVOD != c) &&
              li.A.Get()
                .QueueAppRequest(c, {
                  include_assets: !0,
                  include_trailers: !0,
                })
                .then(() => {
                  const u =
                    li.A.Get().GetApp(c)?.GetAssets()?.GetMainCapsuleURL() ||
                    "";
                  this.setState({ strInitialCapsuleImageUrl: u });
                });
          }
          componentWillUnmount() {
            this.m_listeners.Unregister(),
              this.m_schHideControls.Cancel(),
              this.m_schUnmountControls.Cancel(),
              this.StopVideo();
          }
          BindBroadcastPlayerRef(e) {
            this.m_listeners.Unregister(),
              (this.m_elBroadcastPlayer = e),
              e &&
                (this.m_listeners.AddEventListener(
                  e,
                  "fullscreenchange",
                  this.OnFullscreenChange,
                ),
                this.m_listeners.AddEventListener(
                  e,
                  "mozfullscreenchange",
                  this.OnFullscreenChange,
                ),
                this.m_listeners.AddEventListener(
                  e,
                  "webkitfullscreenchange",
                  this.OnFullscreenChange,
                ),
                this.m_listeners.AddEventListener(
                  e,
                  "msfullscreenchange",
                  this.OnFullscreenChange,
                ));
          }
          BindVideoRef(e) {
            let a = null;
            this.StopVideo(),
              this.props.steamIDBroadcast
                ? e &&
                  (a = rr.es.CreateBroadcastVideo(
                    e,
                    this.props.steamIDBroadcast,
                    this.props.watchLocation,
                    !!this.props.bWebRTC,
                  ))
                : this.props.broadcastClipID
                  ? e &&
                    (a = rr.es.CreateClipVideo(
                      e,
                      this.props.broadcastClipID,
                      this.props.watchLocation,
                    ))
                  : this.props.nAppIDVOD &&
                    e &&
                    ((a = rr.es.CreateVODVideo(
                      e,
                      this.props.nAppIDVOD,
                      this.props.watchLocation,
                    )),
                    this.props.fnOnVideoEnd &&
                      a.SetOnVideoCallback(this.props.fnOnVideoEnd)),
              a &&
                (this.props.bStartMuted && a.SetMute(!0),
                this.props.bStartWithSubtitles && a.SetStartWithSubtitles(!0),
                this.props.bStartPaused
                  ? a.StopPlaybackTillUserInput()
                  : a.Play()),
              this.setState({ video: a }),
              this.props.fnSetBroadcastVideo?.(a),
              (this.m_elVideo = e);
          }
          OnMouseDown(e) {
            (this.m_bMouseDown = !0),
              (this.m_elMouseDown = e.currentTarget),
              this.m_elMouseDown.ownerDocument.defaultView?.addEventListener(
                "mouseup",
                this.OnMouseUp,
              );
          }
          OnMouseUp(e) {
            (this.m_bMouseDown = !1),
              this.m_elMouseDown?.ownerDocument.defaultView?.removeEventListener(
                "mouseup",
                this.OnMouseUp,
              ),
              this.m_schHideControls.Schedule(Xr, this.HideControls);
          }
          OnMouseMove(e) {
            this.m_schHideControls.Cancel(),
              this.m_schUnmountControls.Cancel(),
              this.state.bMountControls
                ? this.state.bControlsVisible ||
                  this.setState({ bControlsVisible: !0 })
                : this.setState({ bMountControls: !0 }),
              this.m_schHideControls.Schedule(Xr, this.HideControls);
          }
          OnMouseLeave(e) {
            this.HideControls();
          }
          HideControls() {
            this.state.bControlsVisible &&
              !this.m_bMouseDown &&
              this.setState({ bControlsVisible: !1 });
          }
          UmountControls() {
            this.setState((e) =>
              !e.bControlsVisible && e.bMountControls
                ? { bMountControls: !1 }
                : null,
            );
          }
          ShowStatsView() {
            let e = this.state.video;
            if (!e) return;
            this.state.bShowStats ||
              (this.setState({ bShowStats: !0 }), e.SetStatsViewIsVisible(!0));
          }
          OnContextMenu(e) {
            this.state.bFullscreen ||
              ((0, Sr.lX)(
                (0, s.jsx)(cr.tz, { children: this.GetContextMenuItems() }),
                e,
              ),
              e.preventDefault());
          }
          ToggleStatsView(e) {
            let a = !this.state.bShowStats;
            this.setState({ bShowStats: a });
            let c = this.state.video;
            c && c.SetStatsViewIsVisible(a);
          }
          ShowStorePage(e) {
            let a = this.state.video;
            if (!a || !this.props.onOpenLinkInNewWindow) return;
            let c = a.GetBroadcastInfo();
            if (!c) return;
            let d = (0, Cr.k2)(`${Er.TS.STORE_BASE_URL}app/${c.m_strAppId}`);
            this.props.onOpenLinkInNewWindow(e, d), e.stopPropagation();
          }
          GetContextMenuItems() {
            let e = [],
              a = this.state.video;
            if (!a) return e;
            let c = a.GetBroadcastInfo();
            return (
              e.push(
                (0, s.jsx)(
                  cr.IK,
                  {
                    bChecked: this.state.bShowStats,
                    onSelected: (d) => {
                      this.ToggleStatsView(d);
                    },
                    children: (0, P.we)("#Broadcast_VideoContext_ToggleStats"),
                  },
                  "togglestats",
                ),
              ),
              c &&
                c.m_strAppId != "0" &&
                Number.parseInt(c.m_strAppId) != rr.fO &&
                e.push(
                  (0, s.jsx)(
                    cr.kt,
                    {
                      onSelected: (d) => {
                        this.ShowStorePage(d);
                      },
                      children: (0, P.we)("#Broadcast_VideoContext_OpenStore"),
                    },
                    "visitstore",
                  ),
                ),
              e
            );
          }
          CloseStats() {
            let e = this.state.video;
            e &&
              this.state.bShowStats &&
              (this.setState({ bShowStats: !1 }), e.SetStatsViewIsVisible(!1));
          }
          OnToggleFullscreen() {
            this.m_elBroadcastPlayer &&
              ((0, K.ww)(this.m_elBroadcastPlayer)
                ? (0, K.MS)(this.m_elBroadcastPlayer)
                : (0, K.tl)(
                    this.m_elBroadcastPlayer,
                    this.m_elVideo ?? void 0,
                  ));
          }
          OnFullscreenChange(e) {
            if (!this.m_elBroadcastPlayer) return;
            let a = (0, K.ww)(this.m_elBroadcastPlayer);
            this.setState({ bFullscreen: a });
          }
          BHideVideoControls() {
            let e = this.state.video;
            return !e || e.GetUserInputNeeded()
              ? !0
              : rr.es.GetBroadcastState(e) == rr.fK.Error;
          }
          render() {
            const e = this.state.video,
              a = e && e.IsPaused(),
              c = e && e.BHasDASHStats() && this.state.bShowStats,
              d = !!(e && e.IsReplay()),
              u = this.state.bMountControls,
              w = this.state.bControlsVisible || a,
              M = !!(e && e.GetUserInputNeeded()),
              O = e?.GetDASHPlayerStats(),
              X =
                e?.IsBroadcastVOD() &&
                M &&
                this.state.strInitialCapsuleImageUrl;
            let J = "videoContainer";
            w || (J += " HidePlayerControls"),
              a && (J += " VideoPaused"),
              this.state.bFullscreen && (J += " fullscreenVideo"),
              this.props.classes && (J += " " + this.props.classes);
            let H = [];
            !this.state.bFullscreen &&
              this.props.actions &&
              (H = H.concat(this.props.actions)),
              !this.state.bFullscreen &&
                this.props.onTheaterMode &&
                H.push(
                  (0, s.jsx)(
                    "div",
                    {
                      onClick: this.props.onTheaterMode,
                      title: (0, P.we)("#Broadcast_View_Theater"),
                      className: "BroadcastTheaterToggle",
                    },
                    "ChatPosToggle ChatTheaterToggle",
                  ),
                ),
              H.push(
                (0, s.jsx)(
                  "div",
                  {
                    title: (0, P.we)("#Broadcast_View_Fullscreen"),
                    onClick: this.OnToggleFullscreen,
                    className: "BroadcastFullscreenToggle",
                  },
                  "FullscreenToggle",
                ),
              );
            const Mr = u && !this.BHideVideoControls(),
              yr = u && !this.state.bFullscreen,
              C =
                this.props.fnRenderBroadcastContext &&
                this.props.fnRenderBroadcastContext();
            return (0, s.jsxs)("div", {
              ref: this.BindBroadcastPlayerRef,
              className: J,
              onMouseMove: this.OnMouseMove,
              onClick: this.OnMouseMove,
              onMouseLeave: this.OnMouseLeave,
              onContextMenu: this.OnContextMenu,
              onMouseDown: this.OnMouseDown,
              children: [
                C &&
                  (0, s.jsx)("div", {
                    className: b().BroadcastContext,
                    children: C,
                  }),
                d && (0, s.jsx)(V, {}),
                this.props.showVideoBackgroundBlur &&
                  this.m_elVideo &&
                  (0, s.jsx)(i, {
                    className: "videoBlur",
                    elementRef: this.m_elVideo,
                    updateRate: 33,
                    width: 320,
                    height: 180,
                    reductionFactor: 10,
                    blurAmount: 5,
                  }),
                (0, s.jsx)("video", {
                  className: "videoSrc",
                  ref: this.BindVideoRef,
                  muted: this.props.bMuted ?? !0,
                  autoPlay: !0,
                  playsInline: !0,
                  controls: !1,
                  onVolumeChange: this.props.fnVolumeChanged,
                  onClick: this.props.fnVideoClick,
                }),
                this.props.linkRegions
                  ? (0, s.jsx)(lr, {
                      linkRegions: this.props.linkRegions,
                      editMode: !!this.props.editMode,
                      onSaveLinkRegions: this.props.onSaveLinkRegions,
                    })
                  : null,
                this.props.linkElement,
                X &&
                  (0, s.jsx)("img", {
                    loading: "lazy",
                    className: (0, gr.A)(
                      b().BroadcastPlaceholderImg,
                      "BroadcastPlaceholderImg",
                    ),
                    src: this.state.strInitialCapsuleImageUrl,
                  }),
                Mr &&
                  e &&
                  (0, s.jsx)(Ar, {
                    video: e,
                    actions: H,
                    onOpenLinkInNewWindow: this.props.onOpenLinkInNewWindow,
                    onShowStats: this.ToggleStatsView,
                    bIncludeClipEditor: !!this.props.bIncludeClipEditor,
                  }),
                yr && (0, s.jsx)(kr, { onClick: this.props.onRequestClose }),
                c &&
                  O &&
                  (0, s.jsx)(sr, { stats: O, closeStats: this.CloseStats }),
                (0, s.jsx)(hr, { video: e }),
                M && e && (0, s.jsx)(mr, { video: e }),
              ],
            });
          }
        };
        N([z.oI], Q.prototype, "BindBroadcastPlayerRef", 1),
          N([z.oI], Q.prototype, "BindVideoRef", 1),
          N([z.oI], Q.prototype, "OnMouseDown", 1),
          N([z.oI], Q.prototype, "OnMouseUp", 1),
          N([z.oI], Q.prototype, "OnMouseMove", 1),
          N([z.oI], Q.prototype, "OnMouseLeave", 1),
          N([z.oI], Q.prototype, "HideControls", 1),
          N([z.oI], Q.prototype, "UmountControls", 1),
          N([z.oI], Q.prototype, "ShowStatsView", 1),
          N([z.oI], Q.prototype, "OnContextMenu", 1),
          N([z.oI], Q.prototype, "ToggleStatsView", 1),
          N([z.oI], Q.prototype, "ShowStorePage", 1),
          N([z.oI], Q.prototype, "CloseStats", 1),
          N([z.oI], Q.prototype, "OnToggleFullscreen", 1),
          N([z.oI], Q.prototype, "OnFullscreenChange", 1),
          (Q = N([Y.PA], Q));
        let Ar = class extends W.Component {
          render() {
            const { video: e } = this.props;
            if (!e) return null;
            let a = e.has_segments;
            return (0, s.jsxs)("div", {
              className: "videoControls",
              children: [
                (0, s.jsx)(Fr, {
                  steamID: this.props.video.GetBroadcastSteamID(),
                  bHideThumbnail: !0,
                  bVerticalBroadcastChat: !0,
                  onOpenLinkInNewWindow: this.props.onOpenLinkInNewWindow,
                }),
                (0, s.jsxs)("div", {
                  className: "videoControlsBottom" + (a ? "" : " noSegments"),
                  children: [
                    (0, s.jsx)(ir, {
                      video: e,
                      bIncludeClipEditor: this.props.bIncludeClipEditor,
                    }),
                    (0, s.jsxs)("div", {
                      className: "STV_BroadcastController",
                      children: [
                        (0, s.jsx)("div", {
                          className: "videoControlsButtons LeftSpacer",
                        }),
                        (0, s.jsx)(Pr, { video: e }),
                        (0, s.jsx)(mi, { video: e }),
                        (0, s.jsx)(fr, {
                          video: e,
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
        Ar = N([Y.PA], Ar);
        class kr extends W.PureComponent {
          render() {
            return this.props.onClick
              ? (0, s.jsx)("div", {
                  className: "STV_BroadcastClose",
                  onClick: this.props.onClick,
                  children: (0, s.jsx)(k.sED, {}),
                })
              : null;
          }
        }
        class Pr extends W.Component {
          OnJumpBackward() {
            this.props.video.JumpTime(-br);
          }
          OnJumpForward() {
            this.props.video.JumpTime(br);
          }
          render() {
            let a = this.props.video,
              c = a.CanSeek();
            return (0, s.jsxs)("div", {
              className: "videoControlsButtons PlayControls",
              children: [
                (0, s.jsx)(wr, { video: a }),
                c &&
                  (0, s.jsxs)("div", {
                    className:
                      "videoControlButton videoControlJump controlFlip",
                    onClick: this.OnJumpBackward,
                    children: [
                      (0, s.jsx)(k.tID, {
                        bHidePostArrow: !0,
                        bHidePreArrow: !0,
                        bShowJumpAheadBox: !0,
                        bFlipHorizontal: !0,
                      }),
                      (0, s.jsx)("div", {
                        className: "jumpAheadValue",
                        children: br,
                      }),
                    ],
                  }),
                (0, s.jsx)(Ir, { video: a }),
                c &&
                  (0, s.jsxs)("div", {
                    className: "videoControlButton videoControlJump",
                    onClick: this.OnJumpForward,
                    children: [
                      (0, s.jsx)(k.tID, {
                        bHidePostArrow: !0,
                        bHidePreArrow: !0,
                        bShowJumpAheadBox: !0,
                        bFlipHorizontal: !1,
                      }),
                      (0, s.jsx)("div", {
                        className: "jumpAheadValue",
                        children: br,
                      }),
                    ],
                  }),
                c && (0, s.jsx)(ri, { video: a }),
              ],
            });
          }
        }
        N([z.oI], Pr.prototype, "OnJumpBackward", 1),
          N([z.oI], Pr.prototype, "OnJumpForward", 1);
        const mi = (0, Y.PA)((e) => {
          if (e.video.IsBroadcastClip() || e.video.IsBroadcastVOD())
            return null;
          const a = (d) => {
            e.video.JumpToLiveEdge();
          };
          let c = e.video.IsOnLiveEdge();
          return (0, s.jsx)("div", {
            className: "videoControlsButtons GoLive",
            children: (0, s.jsxs)("div", {
              className:
                "videoControlButton videoControlGoLive" +
                (c ? " isLiveEdge" : ""),
              onClick: c ? void 0 : a,
              children: [
                (0, s.jsx)(k.tID, {
                  bHidePreArrow: !0,
                  bHidePostArrow: !0,
                  bFlipHorizontal: !1,
                }),
                (0, s.jsx)("div", {
                  className: "jumpGoLive",
                  children: (0, P.we)(
                    c
                      ? "#DASHPlayerControls_IsLive"
                      : "#DASHPlayerControls_GoLive",
                  ),
                }),
              ],
            }),
          });
        });
        let Ir = class extends W.Component {
          OnTogglePlayPause() {
            this.props.video.TogglePlayPause();
          }
          render() {
            let a = this.props.video.IsPaused();
            return (0, s.jsx)("div", {
              className: "videoControlButton buttonPlayPause",
              onClick: this.OnTogglePlayPause,
              children: a ? (0, s.jsx)(k.jGG, {}) : (0, s.jsx)(k.vRz, {}),
            });
          }
        };
        N([z.oI], Ir.prototype, "OnTogglePlayPause", 1), (Ir = N([Y.PA], Ir));
        let wr = class extends W.Component {
          constructor(e) {
            super(e), (0, Wr.Gn)(this), (this.video = e.video);
          }
          componentDidUpdate() {
            this.video = this.props.video;
          }
          video = void 0;
          get has_previous_marker() {
            return this.GetPreviousMarkerTime() !== void 0;
          }
          GetPreviousMarkerTime() {
            const e = this.video;
            if (!e?.has_markers) return;
            let a = e.GetTimelineMarkers(),
              c = e.GetPlaybackTime();
            for (let d = a.length - 1; d >= 0; d--)
              if (!(a[d].nTime >= c)) return a[d].nTime;
          }
          OnJumpToPreviousMarkerClicked(e) {
            let a = this.GetPreviousMarkerTime();
            a !== void 0 && this.props.video.Seek(a - 0.2);
          }
          render() {
            let e = this.props.video.BHasMarkersOrSegments();
            return (0, s.jsx)("div", {
              className:
                "videoControlButton jumpToMarker controlFlip" +
                (e ? "" : " noMarkersOrSegments") +
                (this.has_previous_marker ? "" : " noMarkersInDirection"),
              onClick: this.OnJumpToPreviousMarkerClicked,
              children: (0, s.jsx)(k.tID, {
                bHidePostArrow: !0,
                bFlipHorizontal: !0,
              }),
            });
          }
        };
        N([Wr.sH], wr.prototype, "video", 2),
          N([Wr.EW], wr.prototype, "has_previous_marker", 1),
          N([z.oI], wr.prototype, "OnJumpToPreviousMarkerClicked", 1),
          (wr = N([Y.PA], wr));
        let ri = class extends W.Component {
          constructor(e) {
            super(e), (0, Wr.Gn)(this), (this.video = e.video);
          }
          componentDidUpdate() {
            this.video = this.props.video;
          }
          video = void 0;
          get has_next_marker() {
            return this.GetNextMarkerTime() !== void 0;
          }
          GetNextMarkerTime() {
            const e = this.video;
            if (!e?.has_markers) return;
            let a = e.GetTimelineMarkers(),
              c = e.GetPlaybackTime();
            for (let d = 0; d < a.length; d++)
              if (!(a[d].nTime <= c)) return a[d].nTime;
          }
          OnJumpToNextMarkerClicked(e) {
            let a = this.GetNextMarkerTime();
            a !== void 0 && this.props.video.Seek(a);
          }
          render() {
            let e = this.props.video.BHasMarkersOrSegments();
            return (0, s.jsx)("div", {
              className:
                "videoControlButton jumpToMarker" +
                (e ? "" : " noMarkersOrSegments") +
                (this.has_next_marker ? "" : " noMarkersInDirection"),
              onClick: this.OnJumpToNextMarkerClicked,
              children: (0, s.jsx)(k.tID, {
                bHidePostArrow: !0,
                bFlipHorizontal: !1,
              }),
            });
          }
        };
        N([Wr.sH], ri.prototype, "video", 2),
          N([Wr.EW], ri.prototype, "has_next_marker", 1),
          N([z.oI], ri.prototype, "OnJumpToNextMarkerClicked", 1),
          (ri = N([Y.PA], ri));
        const ci = (e) => {
          let a = () => e.onMouseEnter(e.pos);
          return (0, s.jsx)("div", {
            className: "timelineMarker",
            title: e.label,
            style: { left: e.pos + "%" },
            onMouseEnter: a,
            onMouseLeave: e.onMouseLeave,
            onMouseDown: e.onMouseDown ? e.onMouseDown : void 0,
            children: (0, s.jsx)("div", {
              className: "timelineMarkerIcon",
              children: (0, s.jsx)(k.Dp6, {}),
            }),
          });
        };
        function Qr(e) {
          let a = e.startPos,
            c = e.endPos,
            d = "",
            u = 1;
          return (
            a < 0 && ((u = (c - a) / 10), (a = 0), (d = " hideFront")),
            (0, s.jsxs)("div", {
              className: "STV_timelineSegment" + d,
              style: { left: a + "%", width: c - a + "%", opacity: u },
              onClick: e.onClick,
              children: [
                (0, s.jsx)("div", {
                  className: "STV_timelineSegmentFrontFill",
                  style: { borderColor: "rgb(" + e.color + ")" },
                }),
                (0, s.jsx)("div", {
                  className: "STV_timelineSegmentLabel",
                  style: { color: "rgb(" + e.color + ")" },
                  children: e.label,
                }),
                (0, s.jsx)("div", {
                  className: "STV_timelineSegmentBackFill",
                  style: { borderColor: "rgb(" + e.color + ")" },
                }),
              ],
            })
          );
        }
        let ir = class extends W.Component {
          m_elSlider = W.createRef();
          m_rectSlider = void 0;
          constructor(e) {
            super(e),
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
          OnMouseDown(e, a) {
            const c = this.m_elSlider.current;
            if (c) {
              e.persist(), (this.m_rectSlider = c.getBoundingClientRect());
              let d = {};
              a === "start"
                ? ((d = { bStartMouseDown: !0 }), e.stopPropagation())
                : a === "end"
                  ? ((d = { bEndMouseDown: !0 }), e.stopPropagation())
                  : (d = { bGrabberMouseDown: !0 }),
                this.setState(d, () => this.AdjustSliderForClientX(e.clientX)),
                c.ownerDocument.defaultView?.addEventListener(
                  "mousemove",
                  this.OnMouseMove,
                ),
                c.ownerDocument.defaultView?.addEventListener(
                  "mouseup",
                  this.OnMouseUp,
                );
            }
          }
          OnMouseMove(e) {
            this.AdjustSliderForClientX(e.clientX);
          }
          OnMouseUp(e) {
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
                (this.m_elSlider.current.ownerDocument.defaultView?.removeEventListener(
                  "mousemove",
                  this.OnMouseMove,
                ),
                this.m_elSlider.current.ownerDocument.defaultView?.removeEventListener(
                  "mouseup",
                  this.OnMouseUp,
                ));
          }
          OnKeyDown(e) {
            e.keyCode == U.ek
              ? (this.props.video.JumpTime(-1 * br), e.preventDefault())
              : e.keyCode == U.JI &&
                (this.props.video.JumpTime(1 * br), e.preventDefault());
          }
          AdjustSliderForClientX(e) {
            const a = this.m_rectSlider;
            if (!a) return;
            let c = this.props.video,
              d = c.GetTimelineStartPos(),
              u = c.GetTimelineStartPos() + c.GetTimelineDuration(),
              w = c.GetTimeAtMousePosition(e, a, d, u);
            const M = 5;
            if (this.state.bStartMouseDown) {
              const O = Gr.OQ(w, d, c.m_editorEndTime - M);
              c.m_editorStartTime = O;
            } else if (this.state.bEndMouseDown) {
              const O = Gr.OQ(w, c.m_editorStartTime + M, u);
              c.m_editorEndTime = O;
            } else
              w != this.state.nGrabberMouseDownTime &&
                this.setState({ nGrabberMouseDownTime: w });
          }
          OnMouseHoverMove(e) {
            this.AdjustHoverForClientX(e.clientX);
          }
          OnMouseHoverLeave(e) {
            this.setState({ hoverX: 0 });
          }
          AdjustHoverForClientX(e) {
            let a = this.props.video,
              c = a.GetTimelineStartPos(),
              d = a.GetTimelineStartPos() + a.GetTimelineDuration();
            this.m_rectSlider =
              this.m_elSlider.current?.getBoundingClientRect();
            let u =
              this.m_rectSlider &&
              a.GetTimeAtMousePosition(e, this.m_rectSlider, c, d);
          }
          OnSegmentClick(e) {
            this.props.video.Seek(e);
          }
          OnMarkerMouseEnter(e) {
            this.setState({ nHoverValue: e });
          }
          OnMarkerMouseLeave() {
            this.setState({ nHoverValue: void 0 });
          }
          render() {
            let e = this.props.video,
              a = this.state.bGrabberMouseDown,
              c = e.GetPercentOffsetFromTime(
                this.state.nGrabberMouseDownTime,
                rr.a0.Timeline,
              ),
              d = e.GetPercentOffsetFromTime(
                e.GetPlaybackTime(),
                rr.a0.Timeline,
              ),
              u = e.GetPercentOffsetFromTime(
                e.GetVideoAvailableStartTime(),
                rr.a0.Timeline,
              );
            u < 0.05 && (u = 0);
            let w = Gr.OQ(c, 0, 100).toFixed(1) + "%",
              M = Gr.OQ(d, 0, 100).toFixed(1) + "%",
              O = Gr.OQ(u, 0, 100).toFixed(1) + "%",
              X = {},
              J = {},
              H = {},
              Mr = {};
            a
              ? ((Mr.left = w), (X.width = w), (J.width = M), (H.width = O))
              : ((Mr.left = M), (J.width = M), (H.width = O));
            let yr = (0, Or.ap)(e.GetPlaybackTime()),
              C = (0, Or.ap)(this.state.nHoverValue ?? 0),
              si = "STV_timelineContainer";
            this.state.bGrabberMouseDown && (si += " grabberDown"),
              e.IsTimelineMapActive() && (si += " minimapActive");
            let yi = "";
            (c = a ? c : d),
              c > 100
                ? (yi = " grabberOffScreenRight grabberOffscreen")
                : c < 0 && (yi = " grabberOffScreenLeft grabberOffscreen");
            let vi = [];
            e.GetTimelineMarkers().forEach((ni, ai) => {
              let Mi = e.GetPercentOffsetFromTime(ni.nTime, rr.a0.Timeline);
              Mi < 0 ||
                Mi > 100 ||
                vi.push(
                  (0, s.jsx)(
                    ci,
                    {
                      pos: Mi,
                      label: ni.strTemplateName,
                      onMouseEnter: this.OnMarkerMouseEnter,
                      onMouseLeave: this.OnMarkerMouseLeave,
                    },
                    ai,
                  ),
                );
            });
            let Rr = [];
            e.GetTimelineSegments().forEach((ni, ai) => {
              let Mi = e.GetPercentOffsetFromTime(
                ni.nTimeStart,
                rr.a0.Timeline,
              );
              if (Mi > 100) return;
              let zi = e.GetPercentOffsetFromTime(ni.nTimeEnd, rr.a0.Timeline);
              zi < 0 ||
                Rr.push(
                  (0, s.jsx)(
                    Qr,
                    {
                      startPos: Mi,
                      endPos: zi,
                      label: ni.strTemplateName,
                      color: ni.color,
                      onClick: (xi) => this.OnSegmentClick(ni.nTimeStart),
                    },
                    ai,
                  ),
                );
            });
            const ui = e.GetPercentOffsetFromTime(
                e.m_editorStartTime,
                rr.a0.Timeline,
              ),
              pi = e.GetPercentOffsetFromTime(
                e.m_editorEndTime,
                rr.a0.Timeline,
              ),
              ji = this.props.bIncludeClipEditor
                ? [
                    (0, s.jsx)(
                      ci,
                      {
                        pos: ui,
                        label: (0, P.we)("#DASHPlayerControls_Start"),
                        onMouseEnter: this.OnMarkerMouseEnter,
                        onMouseLeave: this.OnMarkerMouseLeave,
                        onMouseDown: (ni) => this.OnMouseDown(ni, "start"),
                      },
                      "start",
                    ),
                    (0, s.jsx)(
                      ci,
                      {
                        pos: pi,
                        label: (0, P.we)("#DASHPlayerControls_End"),
                        onMouseEnter: this.OnMarkerMouseEnter,
                        onMouseLeave: this.OnMarkerMouseLeave,
                        onMouseDown: (ni) => this.OnMouseDown(ni, "end"),
                      },
                      "end",
                    ),
                  ]
                : [];
            return (0, s.jsx)("div", {
              className: "videoTimelineMain",
              tabIndex: 0,
              onKeyDown: this.OnKeyDown,
              children: (0, s.jsxs)("div", {
                className: si,
                children: [
                  (0, s.jsx)("div", { className: "DialogLabel", children: yr }),
                  (0, s.jsx)("div", {
                    className: "STV_timelineSegmentsContainer",
                    children: Rr,
                  }),
                  (0, s.jsx)("div", {
                    onMouseDown: this.OnMouseDown,
                    onMouseMove: this.OnMouseHoverMove,
                    onMouseLeave: this.OnMouseHoverLeave,
                    ref: this.m_elSlider,
                    children: (0, s.jsxs)("div", {
                      className: "VideoTimelineSlider",
                      children: [
                        (0, s.jsx)("div", {
                          className: "STV_timelineValue",
                          style: X,
                        }),
                        (0, s.jsx)("div", {
                          className: "STV_timelineGhostValue",
                          style: J,
                        }),
                        (0, s.jsx)("div", {
                          className: "STV_timelineNoVideo",
                          style: H,
                        }),
                        vi,
                        ji,
                        !!this.state.hoverX &&
                          (0, s.jsx)(
                            "div",
                            {
                              style: {
                                position: "absolute",
                                left: this.state.hoverX - 75,
                                bottom: "30px",
                              },
                              children: (0, s.jsxs)("div", {
                                style: {
                                  position: "relative",
                                  display: "flex",
                                  justifyContent: "center",
                                },
                                children: [
                                  this.state.thumbnailURL &&
                                    (0, s.jsx)("img", {
                                      style: { width: "150px" },
                                      src: this.state.thumbnailURL,
                                    }),
                                  (0, s.jsx)("span", {
                                    className: "STV_timelineGrabberValue",
                                    style: {
                                      position: "absolute",
                                      bottom: "4px",
                                    },
                                    children: C,
                                  }),
                                ],
                              }),
                            },
                            "grabbertime",
                          ),
                        (0, s.jsx)("div", {
                          className: "STV_timelineGrabber_Wrapper",
                          style: Mr,
                          children: (0, s.jsx)("div", {
                            className: "STV_timelineGrabber" + yi,
                            children: (0, s.jsx)("div", {
                              className: "STV_timelineGrabberArrow",
                              children: (0, s.jsx)(k.apU, {}),
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
        N([z.oI], ir.prototype, "OnMouseDown", 1),
          N([z.oI], ir.prototype, "OnMouseMove", 1),
          N([z.oI], ir.prototype, "OnMouseUp", 1),
          N([z.oI], ir.prototype, "OnKeyDown", 1),
          N([z.oI], ir.prototype, "OnMouseHoverMove", 1),
          N([z.oI], ir.prototype, "OnMouseHoverLeave", 1),
          N([z.oI], ir.prototype, "AdjustHoverForClientX", 1),
          N([z.oI], ir.prototype, "OnSegmentClick", 1),
          N([z.oI], ir.prototype, "OnMarkerMouseEnter", 1),
          N([z.oI], ir.prototype, "OnMarkerMouseLeave", 1),
          (ir = N([Y.PA], ir));
        let Fr = class extends W.Component {
          state = { info: null };
          static getDerivedStateFromProps(e, a) {
            return (!a.info || a.info.m_steamIDBroadcast !== e.steamID) &&
              (a.info && (rr.es.StopInfo(a.info), (a.info = null)), e.steamID)
              ? { info: rr.es.StartInfo(e.steamID) }
              : null;
          }
          componentWillUnmount() {
            this.state.info && rr.es.StopInfo(this.state.info);
          }
          RenderStreamSwitcher() {
            const e = this.props.steamID,
              a = this.props.onLocalStreamChange;
            return a && _.td.stream[e]
              ? (0, s.jsx)($r, { value: e, options: _.td.stream, onChange: a })
              : null;
          }
          render() {
            let { info: e } = this.state;
            if (!e) return null;
            let a = "";
            e.m_nViewerCount && (a = (0, Ur.Dq)(e.m_nViewerCount));
            let c =
                _.td.bValid && _.td.stream && _.td.stream[e.m_steamIDBroadcast],
              d =
                !this.props.bHideThumbnail &&
                this.props.bVerticalBroadcastChat &&
                (parseInt(e.m_strAppId) > 0 || c);
            const u =
              !this.props.bHideThumbnail &&
              this.props.bVerticalBroadcastChat &&
              c &&
              _.td.gidEvent;
            return (0, s.jsxs)("div", {
              className: "BroadcastDetails",
              children: [
                !this.props.bHideThumbnail &&
                  (0, s.jsx)(dr, {
                    className: "broadcastDetailsThumbBlur",
                    src: e.m_strThumbnailUrl,
                    draggable: !1,
                    duration: 2500,
                  }),
                (0, s.jsxs)("div", {
                  className: "BroadcastDetailsHeader",
                  children: [
                    e &&
                      e.m_strAppTitle &&
                      (0, s.jsxs)("div", {
                        className: "displayColumn",
                        children: [
                          (0, s.jsxs)("div", {
                            className: "Info",
                            children: [
                              (0, s.jsx)("span", {
                                className: "AppTitle",
                                children: e.m_strAppTitle,
                              }),
                              e.m_strTitle &&
                                (0, s.jsxs)("span", {
                                  className: "BroadcastTitle",
                                  children: ["\xA0- ", e.m_strTitle],
                                }),
                              this.props.onLocalStreamChange &&
                                this.RenderStreamSwitcher(),
                            ],
                          }),
                          a &&
                            (0, s.jsxs)("div", {
                              className: "BroadcastDetailsHeader_ViewerCount",
                              children: [
                                (0, s.jsx)(k.y_e, {}),
                                (0, P.Yp)("#Broadcast_ViewerCount", a),
                              ],
                            }),
                        ],
                      }),
                    c &&
                      this.props.onOpenLinkInNewWindow &&
                      (0, s.jsx)("div", {
                        className: "Actions",
                        children: (0, s.jsx)("div", {
                          onClick: (w) =>
                            this.props.onOpenLinkInNewWindow?.(w, _.td.link),
                          className: "BroadcastLink",
                          children: _.td.linkName,
                        }),
                      }),
                  ],
                }),
                u && (0, s.jsx)(Dr.m, { gidEvent: _.td.gidEvent }),
                d &&
                  (0, s.jsx)(jr.p, {
                    id:
                      _.td.bValid &&
                      _.td.stream &&
                      _.td.stream[e.m_steamIDBroadcast]
                        ? _.td.appID
                        : parseInt(e.m_strAppId),
                    type: "game",
                    bPreferAssetWithoutOverride: !1,
                  }),
              ],
            });
          }
        };
        Fr = N([Y.PA], Fr);
        class $r extends W.Component {
          showContextMenu(a) {
            const { options: c, value: d, onChange: u } = this.props,
              w = Object.keys(c).map((M) =>
                (0, s.jsx)(
                  cr.IK,
                  {
                    onSelected: () => u(M),
                    bChecked: M === d,
                    children: (0, P.we)(c[M]),
                  },
                  M,
                ),
              );
            (0, Sr.lX)((0, s.jsx)(cr.tz, { children: w }), a);
          }
          render() {
            const { value: a, options: c } = this.props,
              d = c[a];
            return (0, s.jsxs)("div", {
              className: "BroadcastLanguage",
              onClick: this.showContextMenu,
              children: [
                (0, s.jsxs)("span", { children: ["\xA0- ", (0, P.we)(d)] }),
                (0, s.jsx)("div", {
                  className: "ContextMenuButton",
                  children: (0, s.jsx)(k.GB9, {}),
                }),
              ],
            });
          }
        }
        N([z.oI], $r.prototype, "showContextMenu", 1);
        let lr = class extends W.Component {
          constructor(e) {
            super(e), (this.state = { sizableRegion: [] });
          }
          async AddLinkRegion() {
            let e = this.state.sizableRegion.length;
            this.state.sizableRegion.push({
              xPosPct: 2.5 + e,
              yPosPct: 2.5 + e,
              widthPct: 20,
              heightPct: 15,
            }),
              this.setState({ sizableRegion: this.state.sizableRegion }, () =>
                this.OnSaveRegions(),
              );
          }
          componentDidUpdate(e) {
            e.linkRegions.length == 0 &&
              this.props.linkRegions.forEach((a, c) => {
                this.LoadLinkRegion(a, c);
              });
          }
          async LoadLinkRegion(e, a) {
            let c = this.state.sizableRegion.length;
            this.state.sizableRegion.push({
              xPosPct: e.left,
              yPosPct: e.top,
              widthPct: e.width,
              heightPct: e.height,
              link_url: e.url,
              link_description: e.link_description,
              link_index: e.link_index,
            }),
              await this.setState({ sizableRegion: this.state.sizableRegion });
          }
          OnSaveRegions() {
            let e;
            e = { links: [] };
            for (let a = 0; a < this.state.sizableRegion.length; a++) {
              let c;
              (c = {
                left: Math.floor(this.state.sizableRegion[a].xPosPct * 100),
                top: Math.floor(this.state.sizableRegion[a].yPosPct * 100),
                width: Math.floor(this.state.sizableRegion[a].widthPct * 100),
                height: Math.floor(this.state.sizableRegion[a].heightPct * 100),
                url: this.state.sizableRegion[a].link_url,
                link_description: this.state.sizableRegion[a].link_description,
                link_index: a,
              }),
                e.links.push(c);
            }
            this.props.onSaveLinkRegions?.(e);
          }
          async DeleteRegion(e) {
            this.state.sizableRegion.splice(e, 1),
              console.log("keys: ", this.state.sizableRegion.keys),
              this.setState({ sizableRegion: this.state.sizableRegion }, () =>
                this.OnSaveRegions(),
              );
          }
          async UpdatePanel(e, a) {
            const c = [...this.state.sizableRegion];
            (c[e] = a),
              this.setState({ sizableRegion: c }, () => this.OnSaveRegions());
          }
          render() {
            return (0, s.jsxs)("div", {
              className: "LinkOverlayContainer",
              children: [
                (0, s.jsxs)("div", {
                  className: "LinkOverlayValidRegion",
                  children: [
                    !this.props.editMode && this.props.linkRegions
                      ? this.props.linkRegions.map((e) => {
                          const a = (0, Yr.p)(e.url);
                          return (0, s.jsx)(
                            Nr.uU,
                            {
                              href: e.url,
                              bForceExternal: a,
                              bUseLinkFilter: a,
                              children: (0, s.jsx)("div", {
                                className: "LinkRegion",
                                style: {
                                  left: e.left + "%",
                                  top: e.top + "%",
                                  width: e.width + "%",
                                  height: e.height + "%",
                                },
                                children: (0, s.jsxs)("div", {
                                  className: "LinkRegionText",
                                  children: [e.link_description, " "],
                                }),
                              }),
                            },
                            e.link_index,
                          );
                        })
                      : null,
                    this.props.editMode &&
                      this.state.sizableRegion.map((e, a) =>
                        (0, s.jsx)(
                          oi.I,
                          {
                            index: a,
                            deleteFn: this.DeleteRegion,
                            updateFn: this.UpdatePanel,
                            xPosPct: e.xPosPct,
                            yPosPct: e.yPosPct,
                            widthPct: e.widthPct,
                            heightPct: e.heightPct,
                            link_url: e.link_url,
                            link_description: e.link_description,
                          },
                          a * 100 + e.xPosPct,
                        ),
                      ),
                    this.props.editMode &&
                      (0, s.jsx)("div", {
                        className: "AddLinkRegion",
                        onClick: this.AddLinkRegion,
                        children: (0, P.we)("#SteamTV_AddLinkRegion"),
                      }),
                  ],
                }),
                (0, s.jsx)("div", {
                  className: "LinkOverlayInvalidRegion",
                  children: (0, s.jsx)("div", {
                    children: (0, P.we)("#SteamTV_LinkRegionReserved"),
                  }),
                }),
              ],
            });
          }
        };
        N([z.oI], lr.prototype, "AddLinkRegion", 1),
          N([z.oI], lr.prototype, "LoadLinkRegion", 1),
          N([z.oI], lr.prototype, "OnSaveRegions", 1),
          N([z.oI], lr.prototype, "DeleteRegion", 1),
          N([z.oI], lr.prototype, "UpdatePanel", 1),
          (lr = N([Y.PA], lr));
      },
      21822: (ii, fi, f) => {
        "use strict";
        f.d(fi, { q: () => Fi });
        var s = f(41735),
          Wr = f.n(s),
          Y = f(14947),
          W = f(90828),
          Sr = f(72604),
          U = f(35038),
          Cr = f(84110),
          rr = f(77008),
          li = f(60298),
          z = f(45806),
          Hr = f(76559),
          A = f(90711),
          o = f(80613),
          n = f.n(o),
          i = f(75245);
        function cr(Z) {
          return "unknown EBroadcastImageType ( " + Z + " )";
        }
        function qr(Z) {
          return "unknown EGetGamesAlgorithm ( " + Z + " )";
        }
        function _r(Z) {
          return "unknown EGetChannelsAlgorithm ( " + Z + " )";
        }
        function ei(Z) {
          return "unknown ESteamTVContentTemplate ( " + Z + " )";
        }
        class ar extends o.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              ar.prototype.unique_name || i.Sg(ar.M()),
              o.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              ar.sm_m ||
                (ar.sm_m = {
                  proto: ar,
                  fields: {
                    unique_name: {
                      n: 1,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                  },
                }),
              ar.sm_m
            );
          }
          static MBF() {
            return ar.sm_mbf || (ar.sm_mbf = i.w0(ar.M())), ar.sm_mbf;
          }
          toObject(r = !1) {
            return ar.toObject(r, this);
          }
          static toObject(r, t) {
            return i.BT(ar.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(ar.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (n().BinaryReader)(r),
              l = new ar();
            return ar.deserializeBinaryFromReader(l, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(ar.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (n().BinaryWriter)();
            return ar.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(ar.M(), r, t);
          }
          serializeBase64String() {
            var r = new (n().BinaryWriter)();
            return (
              ar.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_CreateBroadcastChannel_Request";
          }
        }
        class T extends o.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              T.prototype.broadcast_channel_id || i.Sg(T.M()),
              o.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              T.sm_m ||
                (T.sm_m = {
                  proto: T,
                  fields: {
                    broadcast_channel_id: {
                      n: 1,
                      br: i.qM.readFixed64String,
                      bw: i.gp.writeFixed64String,
                    },
                  },
                }),
              T.sm_m
            );
          }
          static MBF() {
            return T.sm_mbf || (T.sm_mbf = i.w0(T.M())), T.sm_mbf;
          }
          toObject(r = !1) {
            return T.toObject(r, this);
          }
          static toObject(r, t) {
            return i.BT(T.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(T.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (n().BinaryReader)(r),
              l = new T();
            return T.deserializeBinaryFromReader(l, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(T.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (n().BinaryWriter)();
            return T.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(T.M(), r, t);
          }
          serializeBase64String() {
            var r = new (n().BinaryWriter)();
            return (
              T.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_CreateBroadcastChannel_Response";
          }
        }
        class j extends o.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              j.prototype.unique_name || i.Sg(j.M()),
              o.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              j.sm_m ||
                (j.sm_m = {
                  proto: j,
                  fields: {
                    unique_name: {
                      n: 1,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                  },
                }),
              j.sm_m
            );
          }
          static MBF() {
            return j.sm_mbf || (j.sm_mbf = i.w0(j.M())), j.sm_mbf;
          }
          toObject(r = !1) {
            return j.toObject(r, this);
          }
          static toObject(r, t) {
            return i.BT(j.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(j.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (n().BinaryReader)(r),
              l = new j();
            return j.deserializeBinaryFromReader(l, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(j.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (n().BinaryWriter)();
            return j.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(j.M(), r, t);
          }
          serializeBase64String() {
            var r = new (n().BinaryWriter)();
            return (
              j.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_GetBroadcastChannelID_Request";
          }
        }
        class g extends o.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              g.prototype.broadcast_channel_id || i.Sg(g.M()),
              o.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              g.sm_m ||
                (g.sm_m = {
                  proto: g,
                  fields: {
                    broadcast_channel_id: {
                      n: 1,
                      br: i.qM.readFixed64String,
                      bw: i.gp.writeFixed64String,
                    },
                    unique_name: {
                      n: 2,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                    steamid: {
                      n: 3,
                      br: i.qM.readFixed64String,
                      bw: i.gp.writeFixed64String,
                    },
                  },
                }),
              g.sm_m
            );
          }
          static MBF() {
            return g.sm_mbf || (g.sm_mbf = i.w0(g.M())), g.sm_mbf;
          }
          toObject(r = !1) {
            return g.toObject(r, this);
          }
          static toObject(r, t) {
            return i.BT(g.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(g.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (n().BinaryReader)(r),
              l = new g();
            return g.deserializeBinaryFromReader(l, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(g.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (n().BinaryWriter)();
            return g.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(g.M(), r, t);
          }
          serializeBase64String() {
            var r = new (n().BinaryWriter)();
            return (
              g.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_GetBroadcastChannelID_Response";
          }
        }
        class m extends o.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              m.prototype.broadcast_channel_id || i.Sg(m.M()),
              o.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              m.sm_m ||
                (m.sm_m = {
                  proto: m,
                  fields: {
                    broadcast_channel_id: {
                      n: 1,
                      br: i.qM.readFixed64String,
                      bw: i.gp.writeFixed64String,
                    },
                    name: { n: 2, br: i.qM.readString, bw: i.gp.writeString },
                    language: {
                      n: 3,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                    headline: {
                      n: 4,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                    summary: {
                      n: 5,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                    avatar_hash: {
                      n: 6,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                    schedule: {
                      n: 7,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                    rules: { n: 8, br: i.qM.readString, bw: i.gp.writeString },
                    panels: { n: 9, br: i.qM.readString, bw: i.gp.writeString },
                  },
                }),
              m.sm_m
            );
          }
          static MBF() {
            return m.sm_mbf || (m.sm_mbf = i.w0(m.M())), m.sm_mbf;
          }
          toObject(r = !1) {
            return m.toObject(r, this);
          }
          static toObject(r, t) {
            return i.BT(m.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(m.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (n().BinaryReader)(r),
              l = new m();
            return m.deserializeBinaryFromReader(l, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(m.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (n().BinaryWriter)();
            return m.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(m.M(), r, t);
          }
          serializeBase64String() {
            var r = new (n().BinaryWriter)();
            return (
              m.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_SetBroadcastChannelProfile_Request";
          }
        }
        class q extends o.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(), o.Message.initialize(this, r, 0, -1, void 0, null);
          }
          toObject(r = !1) {
            return q.toObject(r, this);
          }
          static toObject(r, t) {
            return r ? { $jspbMessageInstance: t } : {};
          }
          static fromObject(r) {
            return new q();
          }
          static deserializeBinary(r) {
            let t = new (n().BinaryReader)(r),
              l = new q();
            return q.deserializeBinaryFromReader(l, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return r;
          }
          serializeBinary() {
            var r = new (n().BinaryWriter)();
            return q.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {}
          serializeBase64String() {
            var r = new (n().BinaryWriter)();
            return (
              q.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_SetBroadcastChannelProfile_Response";
          }
        }
        class B extends o.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              B.prototype.broadcast_channel_id || i.Sg(B.M()),
              o.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              B.sm_m ||
                (B.sm_m = {
                  proto: B,
                  fields: {
                    broadcast_channel_id: {
                      n: 1,
                      br: i.qM.readFixed64String,
                      bw: i.gp.writeFixed64String,
                    },
                  },
                }),
              B.sm_m
            );
          }
          static MBF() {
            return B.sm_mbf || (B.sm_mbf = i.w0(B.M())), B.sm_mbf;
          }
          toObject(r = !1) {
            return B.toObject(r, this);
          }
          static toObject(r, t) {
            return i.BT(B.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(B.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (n().BinaryReader)(r),
              l = new B();
            return B.deserializeBinaryFromReader(l, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(B.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (n().BinaryWriter)();
            return B.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(B.M(), r, t);
          }
          serializeBase64String() {
            var r = new (n().BinaryWriter)();
            return (
              B.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_GetBroadcastChannelProfile_Request";
          }
        }
        class L extends o.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              L.prototype.unique_name || i.Sg(L.M()),
              o.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              L.sm_m ||
                (L.sm_m = {
                  proto: L,
                  fields: {
                    unique_name: {
                      n: 1,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                    owner_steamid: {
                      n: 2,
                      br: i.qM.readFixed64String,
                      bw: i.gp.writeFixed64String,
                    },
                    name: { n: 3, br: i.qM.readString, bw: i.gp.writeString },
                    language: {
                      n: 4,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                    headline: {
                      n: 5,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                    summary: {
                      n: 6,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                    schedule: {
                      n: 7,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                    rules: { n: 8, br: i.qM.readString, bw: i.gp.writeString },
                    panels: { n: 9, br: i.qM.readString, bw: i.gp.writeString },
                    is_partnered: {
                      n: 10,
                      br: i.qM.readBool,
                      bw: i.gp.writeBool,
                    },
                  },
                }),
              L.sm_m
            );
          }
          static MBF() {
            return L.sm_mbf || (L.sm_mbf = i.w0(L.M())), L.sm_mbf;
          }
          toObject(r = !1) {
            return L.toObject(r, this);
          }
          static toObject(r, t) {
            return i.BT(L.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(L.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (n().BinaryReader)(r),
              l = new L();
            return L.deserializeBinaryFromReader(l, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(L.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (n().BinaryWriter)();
            return L.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(L.M(), r, t);
          }
          serializeBase64String() {
            var r = new (n().BinaryWriter)();
            return (
              L.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_GetBroadcastChannelProfile_Response";
          }
        }
        class y extends o.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              y.prototype.broadcast_channel_id || i.Sg(y.M()),
              o.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              y.sm_m ||
                (y.sm_m = {
                  proto: y,
                  fields: {
                    broadcast_channel_id: {
                      n: 1,
                      br: i.qM.readFixed64String,
                      bw: i.gp.writeFixed64String,
                    },
                    image_type: { n: 2, br: i.qM.readEnum, bw: i.gp.writeEnum },
                    image_index: {
                      n: 3,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    image_width: {
                      n: 4,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    image_height: {
                      n: 5,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    file_size: {
                      n: 6,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    file_extension: {
                      n: 7,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                    file_hash: {
                      n: 8,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                    undo: { n: 9, br: i.qM.readBool, bw: i.gp.writeBool },
                  },
                }),
              y.sm_m
            );
          }
          static MBF() {
            return y.sm_mbf || (y.sm_mbf = i.w0(y.M())), y.sm_mbf;
          }
          toObject(r = !1) {
            return y.toObject(r, this);
          }
          static toObject(r, t) {
            return i.BT(y.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(y.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (n().BinaryReader)(r),
              l = new y();
            return y.deserializeBinaryFromReader(l, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(y.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (n().BinaryWriter)();
            return y.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(y.M(), r, t);
          }
          serializeBase64String() {
            var r = new (n().BinaryWriter)();
            return (
              y.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_SetBroadcastChannelImage_Request";
          }
        }
        class S extends o.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              S.prototype.replace_image_hash || i.Sg(S.M()),
              o.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              S.sm_m ||
                (S.sm_m = {
                  proto: S,
                  fields: {
                    replace_image_hash: {
                      n: 1,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                  },
                }),
              S.sm_m
            );
          }
          static MBF() {
            return S.sm_mbf || (S.sm_mbf = i.w0(S.M())), S.sm_mbf;
          }
          toObject(r = !1) {
            return S.toObject(r, this);
          }
          static toObject(r, t) {
            return i.BT(S.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(S.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (n().BinaryReader)(r),
              l = new S();
            return S.deserializeBinaryFromReader(l, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(S.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (n().BinaryWriter)();
            return S.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(S.M(), r, t);
          }
          serializeBase64String() {
            var r = new (n().BinaryWriter)();
            return (
              S.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_SetBroadcastChannelImage_Response";
          }
        }
        class R extends o.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              R.prototype.broadcast_channel_id || i.Sg(R.M()),
              o.Message.initialize(this, r, 0, -1, [2], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              R.sm_m ||
                (R.sm_m = {
                  proto: R,
                  fields: {
                    broadcast_channel_id: {
                      n: 1,
                      br: i.qM.readFixed64String,
                      bw: i.gp.writeFixed64String,
                    },
                    image_types: {
                      n: 2,
                      r: !0,
                      q: !0,
                      br: i.qM.readEnum,
                      pbr: i.qM.readPackedEnum,
                      bw: i.gp.writeRepeatedEnum,
                    },
                  },
                }),
              R.sm_m
            );
          }
          static MBF() {
            return R.sm_mbf || (R.sm_mbf = i.w0(R.M())), R.sm_mbf;
          }
          toObject(r = !1) {
            return R.toObject(r, this);
          }
          static toObject(r, t) {
            return i.BT(R.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(R.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (n().BinaryReader)(r),
              l = new R();
            return R.deserializeBinaryFromReader(l, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(R.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (n().BinaryWriter)();
            return R.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(R.M(), r, t);
          }
          serializeBase64String() {
            var r = new (n().BinaryWriter)();
            return (
              R.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_GetBroadcastChannelImages_Request";
          }
        }
        class tr extends o.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              tr.prototype.images || i.Sg(tr.M()),
              o.Message.initialize(this, r, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              tr.sm_m ||
                (tr.sm_m = {
                  proto: tr,
                  fields: { images: { n: 1, c: gr, r: !0, q: !0 } },
                }),
              tr.sm_m
            );
          }
          static MBF() {
            return tr.sm_mbf || (tr.sm_mbf = i.w0(tr.M())), tr.sm_mbf;
          }
          toObject(r = !1) {
            return tr.toObject(r, this);
          }
          static toObject(r, t) {
            return i.BT(tr.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(tr.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (n().BinaryReader)(r),
              l = new tr();
            return tr.deserializeBinaryFromReader(l, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(tr.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (n().BinaryWriter)();
            return tr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(tr.M(), r, t);
          }
          serializeBase64String() {
            var r = new (n().BinaryWriter)();
            return (
              tr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_GetBroadcastChannelImages_Response";
          }
        }
        class gr extends o.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              gr.prototype.image_type || i.Sg(gr.M()),
              o.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              gr.sm_m ||
                (gr.sm_m = {
                  proto: gr,
                  fields: {
                    image_type: { n: 1, br: i.qM.readEnum, bw: i.gp.writeEnum },
                    image_path: {
                      n: 2,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                    image_index: {
                      n: 3,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                  },
                }),
              gr.sm_m
            );
          }
          static MBF() {
            return gr.sm_mbf || (gr.sm_mbf = i.w0(gr.M())), gr.sm_mbf;
          }
          toObject(r = !1) {
            return gr.toObject(r, this);
          }
          static toObject(r, t) {
            return i.BT(gr.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(gr.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (n().BinaryReader)(r),
              l = new gr();
            return gr.deserializeBinaryFromReader(l, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(gr.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (n().BinaryWriter)();
            return gr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(gr.M(), r, t);
          }
          serializeBase64String() {
            var r = new (n().BinaryWriter)();
            return (
              gr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_GetBroadcastChannelImages_Response_Images";
          }
        }
        class ur extends o.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              ur.prototype.broadcast_channel_id || i.Sg(ur.M()),
              o.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              ur.sm_m ||
                (ur.sm_m = {
                  proto: ur,
                  fields: {
                    broadcast_channel_id: {
                      n: 1,
                      br: i.qM.readFixed64String,
                      bw: i.gp.writeFixed64String,
                    },
                  },
                }),
              ur.sm_m
            );
          }
          static MBF() {
            return ur.sm_mbf || (ur.sm_mbf = i.w0(ur.M())), ur.sm_mbf;
          }
          toObject(r = !1) {
            return ur.toObject(r, this);
          }
          static toObject(r, t) {
            return i.BT(ur.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(ur.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (n().BinaryReader)(r),
              l = new ur();
            return ur.deserializeBinaryFromReader(l, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(ur.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (n().BinaryWriter)();
            return ur.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(ur.M(), r, t);
          }
          serializeBase64String() {
            var r = new (n().BinaryWriter)();
            return (
              ur.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_GetBroadcastChannelLinks_Request";
          }
        }
        class er extends o.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              er.prototype.links || i.Sg(er.M()),
              o.Message.initialize(this, r, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              er.sm_m ||
                (er.sm_m = {
                  proto: er,
                  fields: { links: { n: 1, c: dr, r: !0, q: !0 } },
                }),
              er.sm_m
            );
          }
          static MBF() {
            return er.sm_mbf || (er.sm_mbf = i.w0(er.M())), er.sm_mbf;
          }
          toObject(r = !1) {
            return er.toObject(r, this);
          }
          static toObject(r, t) {
            return i.BT(er.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(er.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (n().BinaryReader)(r),
              l = new er();
            return er.deserializeBinaryFromReader(l, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(er.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (n().BinaryWriter)();
            return er.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(er.M(), r, t);
          }
          serializeBase64String() {
            var r = new (n().BinaryWriter)();
            return (
              er.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_GetBroadcastChannelLinks_Response";
          }
        }
        class dr extends o.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              dr.prototype.link_index || i.Sg(dr.M()),
              o.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              dr.sm_m ||
                (dr.sm_m = {
                  proto: dr,
                  fields: {
                    link_index: {
                      n: 1,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    url: { n: 2, br: i.qM.readString, bw: i.gp.writeString },
                    link_description: {
                      n: 3,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                    left: { n: 4, br: i.qM.readUint32, bw: i.gp.writeUint32 },
                    top: { n: 5, br: i.qM.readUint32, bw: i.gp.writeUint32 },
                    width: { n: 6, br: i.qM.readUint32, bw: i.gp.writeUint32 },
                    height: { n: 7, br: i.qM.readUint32, bw: i.gp.writeUint32 },
                  },
                }),
              dr.sm_m
            );
          }
          static MBF() {
            return dr.sm_mbf || (dr.sm_mbf = i.w0(dr.M())), dr.sm_mbf;
          }
          toObject(r = !1) {
            return dr.toObject(r, this);
          }
          static toObject(r, t) {
            return i.BT(dr.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(dr.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (n().BinaryReader)(r),
              l = new dr();
            return dr.deserializeBinaryFromReader(l, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(dr.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (n().BinaryWriter)();
            return dr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(dr.M(), r, t);
          }
          serializeBase64String() {
            var r = new (n().BinaryWriter)();
            return (
              dr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_GetBroadcastChannelLinks_Response_Links";
          }
        }
        class jr extends o.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              jr.prototype.broadcast_channel_id || i.Sg(jr.M()),
              o.Message.initialize(this, r, 0, -1, [2], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              jr.sm_m ||
                (jr.sm_m = {
                  proto: jr,
                  fields: {
                    broadcast_channel_id: {
                      n: 1,
                      br: i.qM.readFixed64String,
                      bw: i.gp.writeFixed64String,
                    },
                    links: { n: 2, c: Dr, r: !0, q: !0 },
                  },
                }),
              jr.sm_m
            );
          }
          static MBF() {
            return jr.sm_mbf || (jr.sm_mbf = i.w0(jr.M())), jr.sm_mbf;
          }
          toObject(r = !1) {
            return jr.toObject(r, this);
          }
          static toObject(r, t) {
            return i.BT(jr.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(jr.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (n().BinaryReader)(r),
              l = new jr();
            return jr.deserializeBinaryFromReader(l, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(jr.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (n().BinaryWriter)();
            return jr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(jr.M(), r, t);
          }
          serializeBase64String() {
            var r = new (n().BinaryWriter)();
            return (
              jr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_SetBroadcastChannelLinkRegions_Request";
          }
        }
        class Dr extends o.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Dr.prototype.link_index || i.Sg(Dr.M()),
              o.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Dr.sm_m ||
                (Dr.sm_m = {
                  proto: Dr,
                  fields: {
                    link_index: {
                      n: 1,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    url: { n: 2, br: i.qM.readString, bw: i.gp.writeString },
                    link_description: {
                      n: 3,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                    left: { n: 4, br: i.qM.readUint32, bw: i.gp.writeUint32 },
                    top: { n: 5, br: i.qM.readUint32, bw: i.gp.writeUint32 },
                    width: { n: 6, br: i.qM.readUint32, bw: i.gp.writeUint32 },
                    height: { n: 7, br: i.qM.readUint32, bw: i.gp.writeUint32 },
                  },
                }),
              Dr.sm_m
            );
          }
          static MBF() {
            return Dr.sm_mbf || (Dr.sm_mbf = i.w0(Dr.M())), Dr.sm_mbf;
          }
          toObject(r = !1) {
            return Dr.toObject(r, this);
          }
          static toObject(r, t) {
            return i.BT(Dr.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(Dr.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (n().BinaryReader)(r),
              l = new Dr();
            return Dr.deserializeBinaryFromReader(l, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(Dr.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (n().BinaryWriter)();
            return Dr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(Dr.M(), r, t);
          }
          serializeBase64String() {
            var r = new (n().BinaryWriter)();
            return (
              Dr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_SetBroadcastChannelLinkRegions_Request_Links";
          }
        }
        class oi extends o.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(), o.Message.initialize(this, r, 0, -1, void 0, null);
          }
          toObject(r = !1) {
            return oi.toObject(r, this);
          }
          static toObject(r, t) {
            return r ? { $jspbMessageInstance: t } : {};
          }
          static fromObject(r) {
            return new oi();
          }
          static deserializeBinary(r) {
            let t = new (n().BinaryReader)(r),
              l = new oi();
            return oi.deserializeBinaryFromReader(l, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return r;
          }
          serializeBinary() {
            var r = new (n().BinaryWriter)();
            return oi.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {}
          serializeBase64String() {
            var r = new (n().BinaryWriter)();
            return (
              oi.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_SetBroadcastChannelLinkRegions_Response";
          }
        }
        class k extends o.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              k.prototype.broadcast_channel_id || i.Sg(k.M()),
              o.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              k.sm_m ||
                (k.sm_m = {
                  proto: k,
                  fields: {
                    broadcast_channel_id: {
                      n: 1,
                      br: i.qM.readFixed64String,
                      bw: i.gp.writeFixed64String,
                    },
                  },
                }),
              k.sm_m
            );
          }
          static MBF() {
            return k.sm_mbf || (k.sm_mbf = i.w0(k.M())), k.sm_mbf;
          }
          toObject(r = !1) {
            return k.toObject(r, this);
          }
          static toObject(r, t) {
            return i.BT(k.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(k.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (n().BinaryReader)(r),
              l = new k();
            return k.deserializeBinaryFromReader(l, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(k.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (n().BinaryWriter)();
            return k.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(k.M(), r, t);
          }
          serializeBase64String() {
            var r = new (n().BinaryWriter)();
            return (
              k.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_GetBroadcastChannelStatus_Request";
          }
        }
        class Nr extends o.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Nr.prototype.is_live || i.Sg(Nr.M()),
              o.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Nr.sm_m ||
                (Nr.sm_m = {
                  proto: Nr,
                  fields: {
                    is_live: { n: 1, br: i.qM.readBool, bw: i.gp.writeBool },
                    is_disabled: {
                      n: 2,
                      br: i.qM.readBool,
                      bw: i.gp.writeBool,
                    },
                    appid: { n: 3, br: i.qM.readUint32, bw: i.gp.writeUint32 },
                    viewers: {
                      n: 4,
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
                    },
                    views: {
                      n: 5,
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
                    },
                    broadcaster_steamid: {
                      n: 6,
                      br: i.qM.readFixed64String,
                      bw: i.gp.writeFixed64String,
                    },
                    thumbnail_url: {
                      n: 7,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                    followers: {
                      n: 8,
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
                    },
                    subscribers: {
                      n: 9,
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
                    },
                    unique_name: {
                      n: 10,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                    broadcast_session_id: {
                      n: 11,
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
                    },
                  },
                }),
              Nr.sm_m
            );
          }
          static MBF() {
            return Nr.sm_mbf || (Nr.sm_mbf = i.w0(Nr.M())), Nr.sm_mbf;
          }
          toObject(r = !1) {
            return Nr.toObject(r, this);
          }
          static toObject(r, t) {
            return i.BT(Nr.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(Nr.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (n().BinaryReader)(r),
              l = new Nr();
            return Nr.deserializeBinaryFromReader(l, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(Nr.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (n().BinaryWriter)();
            return Nr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(Nr.M(), r, t);
          }
          serializeBase64String() {
            var r = new (n().BinaryWriter)();
            return (
              Nr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_GetBroadcastChannelStatus_Response";
          }
        }
        class K extends o.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              K.prototype.broadcast_channel_id || i.Sg(K.M()),
              o.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              K.sm_m ||
                (K.sm_m = {
                  proto: K,
                  fields: {
                    broadcast_channel_id: {
                      n: 1,
                      br: i.qM.readFixed64String,
                      bw: i.gp.writeFixed64String,
                    },
                    unique_name: {
                      n: 2,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                    name: { n: 3, br: i.qM.readString, bw: i.gp.writeString },
                    appid: { n: 4, br: i.qM.readUint32, bw: i.gp.writeUint32 },
                    viewers: {
                      n: 5,
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
                    },
                    views: {
                      n: 6,
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
                    },
                    thumbnail_url: {
                      n: 7,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                    followers: {
                      n: 8,
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
                    },
                    headline: {
                      n: 9,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                    avatar_url: {
                      n: 10,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                    broadcaster_steamid: {
                      n: 11,
                      br: i.qM.readFixed64String,
                      bw: i.gp.writeFixed64String,
                    },
                    subscribers: {
                      n: 12,
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
                    },
                    background_url: {
                      n: 13,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                    is_featured: {
                      n: 14,
                      br: i.qM.readBool,
                      bw: i.gp.writeBool,
                    },
                    is_disabled: {
                      n: 15,
                      br: i.qM.readBool,
                      bw: i.gp.writeBool,
                    },
                    is_live: { n: 16, br: i.qM.readBool, bw: i.gp.writeBool },
                    language: {
                      n: 17,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                    reports: {
                      n: 18,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    is_partnered: {
                      n: 19,
                      br: i.qM.readBool,
                      bw: i.gp.writeBool,
                    },
                  },
                }),
              K.sm_m
            );
          }
          static MBF() {
            return K.sm_mbf || (K.sm_mbf = i.w0(K.M())), K.sm_mbf;
          }
          toObject(r = !1) {
            return K.toObject(r, this);
          }
          static toObject(r, t) {
            return i.BT(K.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(K.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (n().BinaryReader)(r),
              l = new K();
            return K.deserializeBinaryFromReader(l, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(K.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (n().BinaryWriter)();
            return K.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(K.M(), r, t);
          }
          serializeBase64String() {
            var r = new (n().BinaryWriter)();
            return (
              K.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "GetBroadcastChannelEntry";
          }
        }
        class P extends o.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(), o.Message.initialize(this, r, 0, -1, void 0, null);
          }
          toObject(r = !1) {
            return P.toObject(r, this);
          }
          static toObject(r, t) {
            return r ? { $jspbMessageInstance: t } : {};
          }
          static fromObject(r) {
            return new P();
          }
          static deserializeBinary(r) {
            let t = new (n().BinaryReader)(r),
              l = new P();
            return P.deserializeBinaryFromReader(l, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return r;
          }
          serializeBinary() {
            var r = new (n().BinaryWriter)();
            return P.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {}
          serializeBase64String() {
            var r = new (n().BinaryWriter)();
            return (
              P.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_GetFollowedChannels_Request";
          }
        }
        class Ur extends o.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Ur.prototype.results || i.Sg(Ur.M()),
              o.Message.initialize(this, r, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Ur.sm_m ||
                (Ur.sm_m = {
                  proto: Ur,
                  fields: { results: { n: 1, c: K, r: !0, q: !0 } },
                }),
              Ur.sm_m
            );
          }
          static MBF() {
            return Ur.sm_mbf || (Ur.sm_mbf = i.w0(Ur.M())), Ur.sm_mbf;
          }
          toObject(r = !1) {
            return Ur.toObject(r, this);
          }
          static toObject(r, t) {
            return i.BT(Ur.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(Ur.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (n().BinaryReader)(r),
              l = new Ur();
            return Ur.deserializeBinaryFromReader(l, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(Ur.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (n().BinaryWriter)();
            return Ur.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(Ur.M(), r, t);
          }
          serializeBase64String() {
            var r = new (n().BinaryWriter)();
            return (
              Ur.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_GetFollowedChannels_Response";
          }
        }
        class Gr extends o.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(), o.Message.initialize(this, r, 0, -1, void 0, null);
          }
          toObject(r = !1) {
            return Gr.toObject(r, this);
          }
          static toObject(r, t) {
            return r ? { $jspbMessageInstance: t } : {};
          }
          static fromObject(r) {
            return new Gr();
          }
          static deserializeBinary(r) {
            let t = new (n().BinaryReader)(r),
              l = new Gr();
            return Gr.deserializeBinaryFromReader(l, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return r;
          }
          serializeBinary() {
            var r = new (n().BinaryWriter)();
            return Gr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {}
          serializeBase64String() {
            var r = new (n().BinaryWriter)();
            return (
              Gr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_GetSubscribedChannels_Request";
          }
        }
        class Er extends o.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Er.prototype.results || i.Sg(Er.M()),
              o.Message.initialize(this, r, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Er.sm_m ||
                (Er.sm_m = {
                  proto: Er,
                  fields: { results: { n: 1, c: K, r: !0, q: !0 } },
                }),
              Er.sm_m
            );
          }
          static MBF() {
            return Er.sm_mbf || (Er.sm_mbf = i.w0(Er.M())), Er.sm_mbf;
          }
          toObject(r = !1) {
            return Er.toObject(r, this);
          }
          static toObject(r, t) {
            return i.BT(Er.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(Er.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (n().BinaryReader)(r),
              l = new Er();
            return Er.deserializeBinaryFromReader(l, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(Er.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (n().BinaryWriter)();
            return Er.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(Er.M(), r, t);
          }
          serializeBase64String() {
            var r = new (n().BinaryWriter)();
            return (
              Er.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_GetSubscribedChannels_Response";
          }
        }
        class _ extends o.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              _.prototype.broadcast_channel_id || i.Sg(_.M()),
              o.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    broadcast_channel_id: {
                      n: 1,
                      br: i.qM.readFixed64String,
                      bw: i.gp.writeFixed64String,
                    },
                    undo: { n: 2, br: i.qM.readBool, bw: i.gp.writeBool },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = i.w0(_.M())), _.sm_mbf;
          }
          toObject(r = !1) {
            return _.toObject(r, this);
          }
          static toObject(r, t) {
            return i.BT(_.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(_.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (n().BinaryReader)(r),
              l = new _();
            return _.deserializeBinaryFromReader(l, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(_.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (n().BinaryWriter)();
            return _.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(_.M(), r, t);
          }
          serializeBase64String() {
            var r = new (n().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_FollowBroadcastChannel_Request";
          }
        }
        class Or extends o.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Or.prototype.is_followed || i.Sg(Or.M()),
              o.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Or.sm_m ||
                (Or.sm_m = {
                  proto: Or,
                  fields: {
                    is_followed: {
                      n: 1,
                      br: i.qM.readBool,
                      bw: i.gp.writeBool,
                    },
                  },
                }),
              Or.sm_m
            );
          }
          static MBF() {
            return Or.sm_mbf || (Or.sm_mbf = i.w0(Or.M())), Or.sm_mbf;
          }
          toObject(r = !1) {
            return Or.toObject(r, this);
          }
          static toObject(r, t) {
            return i.BT(Or.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(Or.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (n().BinaryReader)(r),
              l = new Or();
            return Or.deserializeBinaryFromReader(l, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(Or.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (n().BinaryWriter)();
            return Or.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(Or.M(), r, t);
          }
          serializeBase64String() {
            var r = new (n().BinaryWriter)();
            return (
              Or.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_FollowBroadcastChannel_Response";
          }
        }
        class h extends o.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              h.prototype.broadcast_channel_id || i.Sg(h.M()),
              o.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              h.sm_m ||
                (h.sm_m = {
                  proto: h,
                  fields: {
                    broadcast_channel_id: {
                      n: 1,
                      br: i.qM.readFixed64String,
                      bw: i.gp.writeFixed64String,
                    },
                  },
                }),
              h.sm_m
            );
          }
          static MBF() {
            return h.sm_mbf || (h.sm_mbf = i.w0(h.M())), h.sm_mbf;
          }
          toObject(r = !1) {
            return h.toObject(r, this);
          }
          static toObject(r, t) {
            return i.BT(h.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(h.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (n().BinaryReader)(r),
              l = new h();
            return h.deserializeBinaryFromReader(l, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(h.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (n().BinaryWriter)();
            return h.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(h.M(), r, t);
          }
          serializeBase64String() {
            var r = new (n().BinaryWriter)();
            return (
              h.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_SubscribeBroadcastChannel_Request";
          }
        }
        class b extends o.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              b.prototype.is_subscribed || i.Sg(b.M()),
              o.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              b.sm_m ||
                (b.sm_m = {
                  proto: b,
                  fields: {
                    is_subscribed: {
                      n: 1,
                      br: i.qM.readBool,
                      bw: i.gp.writeBool,
                    },
                  },
                }),
              b.sm_m
            );
          }
          static MBF() {
            return b.sm_mbf || (b.sm_mbf = i.w0(b.M())), b.sm_mbf;
          }
          toObject(r = !1) {
            return b.toObject(r, this);
          }
          static toObject(r, t) {
            return i.BT(b.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(b.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (n().BinaryReader)(r),
              l = new b();
            return b.deserializeBinaryFromReader(l, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(b.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (n().BinaryWriter)();
            return b.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(b.M(), r, t);
          }
          serializeBase64String() {
            var r = new (n().BinaryWriter)();
            return (
              b.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_SubscribeBroadcastChannel_Response";
          }
        }
        class v extends o.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              v.prototype.broadcast_channel_id || i.Sg(v.M()),
              o.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              v.sm_m ||
                (v.sm_m = {
                  proto: v,
                  fields: {
                    broadcast_channel_id: {
                      n: 1,
                      br: i.qM.readFixed64String,
                      bw: i.gp.writeFixed64String,
                    },
                    reason: { n: 2, br: i.qM.readString, bw: i.gp.writeString },
                  },
                }),
              v.sm_m
            );
          }
          static MBF() {
            return v.sm_mbf || (v.sm_mbf = i.w0(v.M())), v.sm_mbf;
          }
          toObject(r = !1) {
            return v.toObject(r, this);
          }
          static toObject(r, t) {
            return i.BT(v.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(v.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (n().BinaryReader)(r),
              l = new v();
            return v.deserializeBinaryFromReader(l, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(v.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (n().BinaryWriter)();
            return v.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(v.M(), r, t);
          }
          serializeBase64String() {
            var r = new (n().BinaryWriter)();
            return (
              v.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_ReportBroadcastChannel_Request";
          }
        }
        class E extends o.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(), o.Message.initialize(this, r, 0, -1, void 0, null);
          }
          toObject(r = !1) {
            return E.toObject(r, this);
          }
          static toObject(r, t) {
            return r ? { $jspbMessageInstance: t } : {};
          }
          static fromObject(r) {
            return new E();
          }
          static deserializeBinary(r) {
            let t = new (n().BinaryReader)(r),
              l = new E();
            return E.deserializeBinaryFromReader(l, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return r;
          }
          serializeBinary() {
            var r = new (n().BinaryWriter)();
            return E.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {}
          serializeBase64String() {
            var r = new (n().BinaryWriter)();
            return (
              E.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_ReportBroadcastChannel_Response";
          }
        }
        class D extends o.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              D.prototype.broadcast_channel_id || i.Sg(D.M()),
              o.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              D.sm_m ||
                (D.sm_m = {
                  proto: D,
                  fields: {
                    broadcast_channel_id: {
                      n: 1,
                      br: i.qM.readFixed64String,
                      bw: i.gp.writeFixed64String,
                    },
                  },
                }),
              D.sm_m
            );
          }
          static MBF() {
            return D.sm_mbf || (D.sm_mbf = i.w0(D.M())), D.sm_mbf;
          }
          toObject(r = !1) {
            return D.toObject(r, this);
          }
          static toObject(r, t) {
            return i.BT(D.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(D.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (n().BinaryReader)(r),
              l = new D();
            return D.deserializeBinaryFromReader(l, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(D.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (n().BinaryWriter)();
            return D.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(D.M(), r, t);
          }
          serializeBase64String() {
            var r = new (n().BinaryWriter)();
            return (
              D.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_GetBroadcastChannelInteraction_Request";
          }
        }
        class $ extends o.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              $.prototype.is_followed || i.Sg($.M()),
              o.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              $.sm_m ||
                ($.sm_m = {
                  proto: $,
                  fields: {
                    is_followed: {
                      n: 1,
                      br: i.qM.readBool,
                      bw: i.gp.writeBool,
                    },
                    is_subscribed: {
                      n: 2,
                      br: i.qM.readBool,
                      bw: i.gp.writeBool,
                    },
                  },
                }),
              $.sm_m
            );
          }
          static MBF() {
            return $.sm_mbf || ($.sm_mbf = i.w0($.M())), $.sm_mbf;
          }
          toObject(r = !1) {
            return $.toObject(r, this);
          }
          static toObject(r, t) {
            return i.BT($.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq($.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (n().BinaryReader)(r),
              l = new $();
            return $.deserializeBinaryFromReader(l, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj($.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (n().BinaryWriter)();
            return $.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0($.M(), r, t);
          }
          serializeBase64String() {
            var r = new (n().BinaryWriter)();
            return (
              $.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_GetBroadcastChannelInteraction_Response";
          }
        }
        class V extends o.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              V.prototype.appid || i.Sg(V.M()),
              o.Message.initialize(this, r, 0, -1, [5], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              V.sm_m ||
                (V.sm_m = {
                  proto: V,
                  fields: {
                    appid: { n: 1, br: i.qM.readUint32, bw: i.gp.writeUint32 },
                    name: { n: 2, br: i.qM.readString, bw: i.gp.writeString },
                    image: { n: 3, br: i.qM.readString, bw: i.gp.writeString },
                    viewers: {
                      n: 4,
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
                    },
                    channels: { n: 5, c: K, r: !0, q: !0 },
                    release_date: {
                      n: 6,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                    developer: {
                      n: 7,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                    publisher: {
                      n: 8,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                  },
                }),
              V.sm_m
            );
          }
          static MBF() {
            return V.sm_mbf || (V.sm_mbf = i.w0(V.M())), V.sm_mbf;
          }
          toObject(r = !1) {
            return V.toObject(r, this);
          }
          static toObject(r, t) {
            return i.BT(V.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(V.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (n().BinaryReader)(r),
              l = new V();
            return V.deserializeBinaryFromReader(l, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(V.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (n().BinaryWriter)();
            return V.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(V.M(), r, t);
          }
          serializeBase64String() {
            var r = new (n().BinaryWriter)();
            return (
              V.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_Game";
          }
        }
        class hr extends o.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              hr.prototype.appid || i.Sg(hr.M()),
              o.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              hr.sm_m ||
                (hr.sm_m = {
                  proto: hr,
                  fields: {
                    appid: { n: 1, br: i.qM.readUint32, bw: i.gp.writeUint32 },
                    algorithm: { n: 2, br: i.qM.readEnum, bw: i.gp.writeEnum },
                    count: { n: 3, br: i.qM.readUint32, bw: i.gp.writeUint32 },
                  },
                }),
              hr.sm_m
            );
          }
          static MBF() {
            return hr.sm_mbf || (hr.sm_mbf = i.w0(hr.M())), hr.sm_mbf;
          }
          toObject(r = !1) {
            return hr.toObject(r, this);
          }
          static toObject(r, t) {
            return i.BT(hr.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(hr.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (n().BinaryReader)(r),
              l = new hr();
            return hr.deserializeBinaryFromReader(l, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(hr.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (n().BinaryWriter)();
            return hr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(hr.M(), r, t);
          }
          serializeBase64String() {
            var r = new (n().BinaryWriter)();
            return (
              hr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_GetGames_Request";
          }
        }
        class mr extends o.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              mr.prototype.results || i.Sg(mr.M()),
              o.Message.initialize(this, r, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              mr.sm_m ||
                (mr.sm_m = {
                  proto: mr,
                  fields: { results: { n: 1, c: V, r: !0, q: !0 } },
                }),
              mr.sm_m
            );
          }
          static MBF() {
            return mr.sm_mbf || (mr.sm_mbf = i.w0(mr.M())), mr.sm_mbf;
          }
          toObject(r = !1) {
            return mr.toObject(r, this);
          }
          static toObject(r, t) {
            return i.BT(mr.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(mr.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (n().BinaryReader)(r),
              l = new mr();
            return mr.deserializeBinaryFromReader(l, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(mr.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (n().BinaryWriter)();
            return mr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(mr.M(), r, t);
          }
          serializeBase64String() {
            var r = new (n().BinaryWriter)();
            return (
              mr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_GetGames_Response";
          }
        }
        class vr extends o.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              vr.prototype.algorithm || i.Sg(vr.M()),
              o.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              vr.sm_m ||
                (vr.sm_m = {
                  proto: vr,
                  fields: {
                    algorithm: { n: 1, br: i.qM.readEnum, bw: i.gp.writeEnum },
                    count: { n: 2, br: i.qM.readUint32, bw: i.gp.writeUint32 },
                    appid: { n: 3, br: i.qM.readUint32, bw: i.gp.writeUint32 },
                  },
                }),
              vr.sm_m
            );
          }
          static MBF() {
            return vr.sm_mbf || (vr.sm_mbf = i.w0(vr.M())), vr.sm_mbf;
          }
          toObject(r = !1) {
            return vr.toObject(r, this);
          }
          static toObject(r, t) {
            return i.BT(vr.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(vr.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (n().BinaryReader)(r),
              l = new vr();
            return vr.deserializeBinaryFromReader(l, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(vr.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (n().BinaryWriter)();
            return vr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(vr.M(), r, t);
          }
          serializeBase64String() {
            var r = new (n().BinaryWriter)();
            return (
              vr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_GetChannels_Request";
          }
        }
        class Br extends o.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Br.prototype.results || i.Sg(Br.M()),
              o.Message.initialize(this, r, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Br.sm_m ||
                (Br.sm_m = {
                  proto: Br,
                  fields: { results: { n: 1, c: K, r: !0, q: !0 } },
                }),
              Br.sm_m
            );
          }
          static MBF() {
            return Br.sm_mbf || (Br.sm_mbf = i.w0(Br.M())), Br.sm_mbf;
          }
          toObject(r = !1) {
            return Br.toObject(r, this);
          }
          static toObject(r, t) {
            return i.BT(Br.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(Br.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (n().BinaryReader)(r),
              l = new Br();
            return Br.deserializeBinaryFromReader(l, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(Br.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (n().BinaryWriter)();
            return Br.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(Br.M(), r, t);
          }
          serializeBase64String() {
            var r = new (n().BinaryWriter)();
            return (
              Br.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_GetChannels_Response";
          }
        }
        class pr extends o.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              pr.prototype.broadcast_channel_id || i.Sg(pr.M()),
              o.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              pr.sm_m ||
                (pr.sm_m = {
                  proto: pr,
                  fields: {
                    broadcast_channel_id: {
                      n: 1,
                      br: i.qM.readFixed64String,
                      bw: i.gp.writeFixed64String,
                    },
                  },
                }),
              pr.sm_m
            );
          }
          static MBF() {
            return pr.sm_mbf || (pr.sm_mbf = i.w0(pr.M())), pr.sm_mbf;
          }
          toObject(r = !1) {
            return pr.toObject(r, this);
          }
          static toObject(r, t) {
            return i.BT(pr.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(pr.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (n().BinaryReader)(r),
              l = new pr();
            return pr.deserializeBinaryFromReader(l, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(pr.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (n().BinaryWriter)();
            return pr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(pr.M(), r, t);
          }
          serializeBase64String() {
            var r = new (n().BinaryWriter)();
            return (
              pr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_GetBroadcastChannelBroadcasters_Request";
          }
        }
        class sr extends o.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              sr.prototype.broadcasters || i.Sg(sr.M()),
              o.Message.initialize(this, r, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              sr.sm_m ||
                (sr.sm_m = {
                  proto: sr,
                  fields: { broadcasters: { n: 1, c: zr, r: !0, q: !0 } },
                }),
              sr.sm_m
            );
          }
          static MBF() {
            return sr.sm_mbf || (sr.sm_mbf = i.w0(sr.M())), sr.sm_mbf;
          }
          toObject(r = !1) {
            return sr.toObject(r, this);
          }
          static toObject(r, t) {
            return i.BT(sr.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(sr.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (n().BinaryReader)(r),
              l = new sr();
            return sr.deserializeBinaryFromReader(l, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(sr.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (n().BinaryWriter)();
            return sr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(sr.M(), r, t);
          }
          serializeBase64String() {
            var r = new (n().BinaryWriter)();
            return (
              sr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_GetBroadcastChannelBroadcasters_Response";
          }
        }
        class zr extends o.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              zr.prototype.steamid || i.Sg(zr.M()),
              o.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              zr.sm_m ||
                (zr.sm_m = {
                  proto: zr,
                  fields: {
                    steamid: {
                      n: 1,
                      br: i.qM.readFixed64String,
                      bw: i.gp.writeFixed64String,
                    },
                    name: { n: 2, br: i.qM.readString, bw: i.gp.writeString },
                    rtmp_token: {
                      n: 3,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                  },
                }),
              zr.sm_m
            );
          }
          static MBF() {
            return zr.sm_mbf || (zr.sm_mbf = i.w0(zr.M())), zr.sm_mbf;
          }
          toObject(r = !1) {
            return zr.toObject(r, this);
          }
          static toObject(r, t) {
            return i.BT(zr.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(zr.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (n().BinaryReader)(r),
              l = new zr();
            return zr.deserializeBinaryFromReader(l, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(zr.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (n().BinaryWriter)();
            return zr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(zr.M(), r, t);
          }
          serializeBase64String() {
            var r = new (n().BinaryWriter)();
            return (
              zr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_GetBroadcastChannelBroadcasters_Response_Broadcaster";
          }
        }
        class xr extends o.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              xr.prototype.issuer_steamid || i.Sg(xr.M()),
              o.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              xr.sm_m ||
                (xr.sm_m = {
                  proto: xr,
                  fields: {
                    issuer_steamid: {
                      n: 1,
                      br: i.qM.readFixed64String,
                      bw: i.gp.writeFixed64String,
                    },
                    chatter_steamid: {
                      n: 2,
                      br: i.qM.readFixed64String,
                      bw: i.gp.writeFixed64String,
                    },
                    time_expires: {
                      n: 3,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                    permanent: { n: 4, br: i.qM.readBool, bw: i.gp.writeBool },
                    name: { n: 5, br: i.qM.readString, bw: i.gp.writeString },
                  },
                }),
              xr.sm_m
            );
          }
          static MBF() {
            return xr.sm_mbf || (xr.sm_mbf = i.w0(xr.M())), xr.sm_mbf;
          }
          toObject(r = !1) {
            return xr.toObject(r, this);
          }
          static toObject(r, t) {
            return i.BT(xr.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(xr.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (n().BinaryReader)(r),
              l = new xr();
            return xr.deserializeBinaryFromReader(l, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(xr.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (n().BinaryWriter)();
            return xr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(xr.M(), r, t);
          }
          serializeBase64String() {
            var r = new (n().BinaryWriter)();
            return (
              xr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_ChatBan";
          }
        }
        class Lr extends o.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Lr.prototype.broadcast_channel_id || i.Sg(Lr.M()),
              o.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Lr.sm_m ||
                (Lr.sm_m = {
                  proto: Lr,
                  fields: {
                    broadcast_channel_id: {
                      n: 1,
                      br: i.qM.readFixed64String,
                      bw: i.gp.writeFixed64String,
                    },
                    chatter_steamid: {
                      n: 2,
                      br: i.qM.readFixed64String,
                      bw: i.gp.writeFixed64String,
                    },
                    duration: {
                      n: 3,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    permanent: { n: 4, br: i.qM.readBool, bw: i.gp.writeBool },
                    undo: { n: 5, br: i.qM.readBool, bw: i.gp.writeBool },
                  },
                }),
              Lr.sm_m
            );
          }
          static MBF() {
            return Lr.sm_mbf || (Lr.sm_mbf = i.w0(Lr.M())), Lr.sm_mbf;
          }
          toObject(r = !1) {
            return Lr.toObject(r, this);
          }
          static toObject(r, t) {
            return i.BT(Lr.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(Lr.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (n().BinaryReader)(r),
              l = new Lr();
            return Lr.deserializeBinaryFromReader(l, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(Lr.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (n().BinaryWriter)();
            return Lr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(Lr.M(), r, t);
          }
          serializeBase64String() {
            var r = new (n().BinaryWriter)();
            return (
              Lr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_AddChatBan_Request";
          }
        }
        class gi extends o.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(), o.Message.initialize(this, r, 0, -1, void 0, null);
          }
          toObject(r = !1) {
            return gi.toObject(r, this);
          }
          static toObject(r, t) {
            return r ? { $jspbMessageInstance: t } : {};
          }
          static fromObject(r) {
            return new gi();
          }
          static deserializeBinary(r) {
            let t = new (n().BinaryReader)(r),
              l = new gi();
            return gi.deserializeBinaryFromReader(l, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return r;
          }
          serializeBinary() {
            var r = new (n().BinaryWriter)();
            return gi.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {}
          serializeBase64String() {
            var r = new (n().BinaryWriter)();
            return (
              gi.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_AddChatBan_Response";
          }
        }
        class G extends o.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              G.prototype.broadcast_channel_id || i.Sg(G.M()),
              o.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              G.sm_m ||
                (G.sm_m = {
                  proto: G,
                  fields: {
                    broadcast_channel_id: {
                      n: 1,
                      br: i.qM.readFixed64String,
                      bw: i.gp.writeFixed64String,
                    },
                  },
                }),
              G.sm_m
            );
          }
          static MBF() {
            return G.sm_mbf || (G.sm_mbf = i.w0(G.M())), G.sm_mbf;
          }
          toObject(r = !1) {
            return G.toObject(r, this);
          }
          static toObject(r, t) {
            return i.BT(G.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(G.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (n().BinaryReader)(r),
              l = new G();
            return G.deserializeBinaryFromReader(l, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(G.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (n().BinaryWriter)();
            return G.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(G.M(), r, t);
          }
          serializeBase64String() {
            var r = new (n().BinaryWriter)();
            return (
              G.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_GetChatBans_Request";
          }
        }
        class fr extends o.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              fr.prototype.results || i.Sg(fr.M()),
              o.Message.initialize(this, r, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              fr.sm_m ||
                (fr.sm_m = {
                  proto: fr,
                  fields: { results: { n: 1, c: xr, r: !0, q: !0 } },
                }),
              fr.sm_m
            );
          }
          static MBF() {
            return fr.sm_mbf || (fr.sm_mbf = i.w0(fr.M())), fr.sm_mbf;
          }
          toObject(r = !1) {
            return fr.toObject(r, this);
          }
          static toObject(r, t) {
            return i.BT(fr.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(fr.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (n().BinaryReader)(r),
              l = new fr();
            return fr.deserializeBinaryFromReader(l, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(fr.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (n().BinaryWriter)();
            return fr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(fr.M(), r, t);
          }
          serializeBase64String() {
            var r = new (n().BinaryWriter)();
            return (
              fr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_GetChatBans_Response";
          }
        }
        class Kr extends o.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Kr.prototype.broadcast_channel_id || i.Sg(Kr.M()),
              o.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Kr.sm_m ||
                (Kr.sm_m = {
                  proto: Kr,
                  fields: {
                    broadcast_channel_id: {
                      n: 1,
                      br: i.qM.readFixed64String,
                      bw: i.gp.writeFixed64String,
                    },
                    moderator_steamid: {
                      n: 2,
                      br: i.qM.readFixed64String,
                      bw: i.gp.writeFixed64String,
                    },
                    undo: { n: 3, br: i.qM.readBool, bw: i.gp.writeBool },
                  },
                }),
              Kr.sm_m
            );
          }
          static MBF() {
            return Kr.sm_mbf || (Kr.sm_mbf = i.w0(Kr.M())), Kr.sm_mbf;
          }
          toObject(r = !1) {
            return Kr.toObject(r, this);
          }
          static toObject(r, t) {
            return i.BT(Kr.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(Kr.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (n().BinaryReader)(r),
              l = new Kr();
            return Kr.deserializeBinaryFromReader(l, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(Kr.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (n().BinaryWriter)();
            return Kr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(Kr.M(), r, t);
          }
          serializeBase64String() {
            var r = new (n().BinaryWriter)();
            return (
              Kr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_AddChatModerator_Request";
          }
        }
        class Tr extends o.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(), o.Message.initialize(this, r, 0, -1, void 0, null);
          }
          toObject(r = !1) {
            return Tr.toObject(r, this);
          }
          static toObject(r, t) {
            return r ? { $jspbMessageInstance: t } : {};
          }
          static fromObject(r) {
            return new Tr();
          }
          static deserializeBinary(r) {
            let t = new (n().BinaryReader)(r),
              l = new Tr();
            return Tr.deserializeBinaryFromReader(l, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return r;
          }
          serializeBinary() {
            var r = new (n().BinaryWriter)();
            return Tr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {}
          serializeBase64String() {
            var r = new (n().BinaryWriter)();
            return (
              Tr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_AddChatModerator_Response";
          }
        }
        class or extends o.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              or.prototype.broadcast_channel_id || i.Sg(or.M()),
              o.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              or.sm_m ||
                (or.sm_m = {
                  proto: or,
                  fields: {
                    broadcast_channel_id: {
                      n: 1,
                      br: i.qM.readFixed64String,
                      bw: i.gp.writeFixed64String,
                    },
                  },
                }),
              or.sm_m
            );
          }
          static MBF() {
            return or.sm_mbf || (or.sm_mbf = i.w0(or.M())), or.sm_mbf;
          }
          toObject(r = !1) {
            return or.toObject(r, this);
          }
          static toObject(r, t) {
            return i.BT(or.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(or.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (n().BinaryReader)(r),
              l = new or();
            return or.deserializeBinaryFromReader(l, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(or.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (n().BinaryWriter)();
            return or.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(or.M(), r, t);
          }
          serializeBase64String() {
            var r = new (n().BinaryWriter)();
            return (
              or.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_GetChatModerators_Request";
          }
        }
        class Yr extends o.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Yr.prototype.steamid || i.Sg(Yr.M()),
              o.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Yr.sm_m ||
                (Yr.sm_m = {
                  proto: Yr,
                  fields: {
                    steamid: {
                      n: 1,
                      br: i.qM.readFixed64String,
                      bw: i.gp.writeFixed64String,
                    },
                    name: { n: 2, br: i.qM.readString, bw: i.gp.writeString },
                  },
                }),
              Yr.sm_m
            );
          }
          static MBF() {
            return Yr.sm_mbf || (Yr.sm_mbf = i.w0(Yr.M())), Yr.sm_mbf;
          }
          toObject(r = !1) {
            return Yr.toObject(r, this);
          }
          static toObject(r, t) {
            return i.BT(Yr.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(Yr.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (n().BinaryReader)(r),
              l = new Yr();
            return Yr.deserializeBinaryFromReader(l, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(Yr.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (n().BinaryWriter)();
            return Yr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(Yr.M(), r, t);
          }
          serializeBase64String() {
            var r = new (n().BinaryWriter)();
            return (
              Yr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_ChatModerator";
          }
        }
        class Jr extends o.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Jr.prototype.results || i.Sg(Jr.M()),
              o.Message.initialize(this, r, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Jr.sm_m ||
                (Jr.sm_m = {
                  proto: Jr,
                  fields: { results: { n: 1, c: Yr, r: !0, q: !0 } },
                }),
              Jr.sm_m
            );
          }
          static MBF() {
            return Jr.sm_mbf || (Jr.sm_mbf = i.w0(Jr.M())), Jr.sm_mbf;
          }
          toObject(r = !1) {
            return Jr.toObject(r, this);
          }
          static toObject(r, t) {
            return i.BT(Jr.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(Jr.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (n().BinaryReader)(r),
              l = new Jr();
            return Jr.deserializeBinaryFromReader(l, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(Jr.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (n().BinaryWriter)();
            return Jr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(Jr.M(), r, t);
          }
          serializeBase64String() {
            var r = new (n().BinaryWriter)();
            return (
              Jr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_GetChatModerators_Response";
          }
        }
        class Zr extends o.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Zr.prototype.broadcast_channel_id || i.Sg(Zr.M()),
              o.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Zr.sm_m ||
                (Zr.sm_m = {
                  proto: Zr,
                  fields: {
                    broadcast_channel_id: {
                      n: 1,
                      br: i.qM.readFixed64String,
                      bw: i.gp.writeFixed64String,
                    },
                    word: { n: 2, br: i.qM.readString, bw: i.gp.writeString },
                    undo: { n: 3, br: i.qM.readBool, bw: i.gp.writeBool },
                  },
                }),
              Zr.sm_m
            );
          }
          static MBF() {
            return Zr.sm_mbf || (Zr.sm_mbf = i.w0(Zr.M())), Zr.sm_mbf;
          }
          toObject(r = !1) {
            return Zr.toObject(r, this);
          }
          static toObject(r, t) {
            return i.BT(Zr.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(Zr.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (n().BinaryReader)(r),
              l = new Zr();
            return Zr.deserializeBinaryFromReader(l, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(Zr.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (n().BinaryWriter)();
            return Zr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(Zr.M(), r, t);
          }
          serializeBase64String() {
            var r = new (n().BinaryWriter)();
            return (
              Zr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_AddWordBan_Request";
          }
        }
        class N extends o.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(), o.Message.initialize(this, r, 0, -1, void 0, null);
          }
          toObject(r = !1) {
            return N.toObject(r, this);
          }
          static toObject(r, t) {
            return r ? { $jspbMessageInstance: t } : {};
          }
          static fromObject(r) {
            return new N();
          }
          static deserializeBinary(r) {
            let t = new (n().BinaryReader)(r),
              l = new N();
            return N.deserializeBinaryFromReader(l, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return r;
          }
          serializeBinary() {
            var r = new (n().BinaryWriter)();
            return N.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {}
          serializeBase64String() {
            var r = new (n().BinaryWriter)();
            return (
              N.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_AddWordBan_Response";
          }
        }
        class Xr extends o.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Xr.prototype.broadcast_channel_id || i.Sg(Xr.M()),
              o.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Xr.sm_m ||
                (Xr.sm_m = {
                  proto: Xr,
                  fields: {
                    broadcast_channel_id: {
                      n: 1,
                      br: i.qM.readFixed64String,
                      bw: i.gp.writeFixed64String,
                    },
                  },
                }),
              Xr.sm_m
            );
          }
          static MBF() {
            return Xr.sm_mbf || (Xr.sm_mbf = i.w0(Xr.M())), Xr.sm_mbf;
          }
          toObject(r = !1) {
            return Xr.toObject(r, this);
          }
          static toObject(r, t) {
            return i.BT(Xr.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(Xr.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (n().BinaryReader)(r),
              l = new Xr();
            return Xr.deserializeBinaryFromReader(l, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(Xr.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (n().BinaryWriter)();
            return Xr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(Xr.M(), r, t);
          }
          serializeBase64String() {
            var r = new (n().BinaryWriter)();
            return (
              Xr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_GetWordBans_Request";
          }
        }
        class br extends o.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              br.prototype.results || i.Sg(br.M()),
              o.Message.initialize(this, r, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              br.sm_m ||
                (br.sm_m = {
                  proto: br,
                  fields: {
                    results: {
                      n: 1,
                      r: !0,
                      q: !0,
                      br: i.qM.readString,
                      bw: i.gp.writeRepeatedString,
                    },
                  },
                }),
              br.sm_m
            );
          }
          static MBF() {
            return br.sm_mbf || (br.sm_mbf = i.w0(br.M())), br.sm_mbf;
          }
          toObject(r = !1) {
            return br.toObject(r, this);
          }
          static toObject(r, t) {
            return i.BT(br.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(br.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (n().BinaryReader)(r),
              l = new br();
            return br.deserializeBinaryFromReader(l, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(br.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (n().BinaryWriter)();
            return br.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(br.M(), r, t);
          }
          serializeBase64String() {
            var r = new (n().BinaryWriter)();
            return (
              br.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_GetWordBans_Response";
          }
        }
        class Q extends o.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Q.prototype.broadcast_channel_id || i.Sg(Q.M()),
              o.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Q.sm_m ||
                (Q.sm_m = {
                  proto: Q,
                  fields: {
                    broadcast_channel_id: {
                      n: 1,
                      br: i.qM.readFixed64String,
                      bw: i.gp.writeFixed64String,
                    },
                  },
                }),
              Q.sm_m
            );
          }
          static MBF() {
            return Q.sm_mbf || (Q.sm_mbf = i.w0(Q.M())), Q.sm_mbf;
          }
          toObject(r = !1) {
            return Q.toObject(r, this);
          }
          static toObject(r, t) {
            return i.BT(Q.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(Q.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (n().BinaryReader)(r),
              l = new Q();
            return Q.deserializeBinaryFromReader(l, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(Q.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (n().BinaryWriter)();
            return Q.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(Q.M(), r, t);
          }
          serializeBase64String() {
            var r = new (n().BinaryWriter)();
            return (
              Q.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_JoinChat_Request";
          }
        }
        class Ar extends o.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Ar.prototype.chat_id || i.Sg(Ar.M()),
              o.Message.initialize(this, r, 0, -1, [3], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Ar.sm_m ||
                (Ar.sm_m = {
                  proto: Ar,
                  fields: {
                    chat_id: {
                      n: 1,
                      br: i.qM.readFixed64String,
                      bw: i.gp.writeFixed64String,
                    },
                    view_url_template: {
                      n: 2,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                    flair_group_ids: {
                      n: 3,
                      r: !0,
                      q: !0,
                      br: i.qM.readUint64String,
                      pbr: i.qM.readPackedUint64String,
                      bw: i.gp.writeRepeatedUint64String,
                    },
                  },
                }),
              Ar.sm_m
            );
          }
          static MBF() {
            return Ar.sm_mbf || (Ar.sm_mbf = i.w0(Ar.M())), Ar.sm_mbf;
          }
          toObject(r = !1) {
            return Ar.toObject(r, this);
          }
          static toObject(r, t) {
            return i.BT(Ar.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(Ar.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (n().BinaryReader)(r),
              l = new Ar();
            return Ar.deserializeBinaryFromReader(l, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(Ar.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (n().BinaryWriter)();
            return Ar.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(Ar.M(), r, t);
          }
          serializeBase64String() {
            var r = new (n().BinaryWriter)();
            return (
              Ar.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_JoinChat_Response";
          }
        }
        class kr extends o.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              kr.prototype.term || i.Sg(kr.M()),
              o.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              kr.sm_m ||
                (kr.sm_m = {
                  proto: kr,
                  fields: {
                    term: { n: 1, br: i.qM.readString, bw: i.gp.writeString },
                  },
                }),
              kr.sm_m
            );
          }
          static MBF() {
            return kr.sm_mbf || (kr.sm_mbf = i.w0(kr.M())), kr.sm_mbf;
          }
          toObject(r = !1) {
            return kr.toObject(r, this);
          }
          static toObject(r, t) {
            return i.BT(kr.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(kr.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (n().BinaryReader)(r),
              l = new kr();
            return kr.deserializeBinaryFromReader(l, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(kr.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (n().BinaryWriter)();
            return kr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(kr.M(), r, t);
          }
          serializeBase64String() {
            var r = new (n().BinaryWriter)();
            return (
              kr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_Search_Request";
          }
        }
        class Pr extends o.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Pr.prototype.results || i.Sg(Pr.M()),
              o.Message.initialize(this, r, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Pr.sm_m ||
                (Pr.sm_m = {
                  proto: Pr,
                  fields: { results: { n: 1, c: K, r: !0, q: !0 } },
                }),
              Pr.sm_m
            );
          }
          static MBF() {
            return Pr.sm_mbf || (Pr.sm_mbf = i.w0(Pr.M())), Pr.sm_mbf;
          }
          toObject(r = !1) {
            return Pr.toObject(r, this);
          }
          static toObject(r, t) {
            return i.BT(Pr.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(Pr.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (n().BinaryReader)(r),
              l = new Pr();
            return Pr.deserializeBinaryFromReader(l, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(Pr.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (n().BinaryWriter)();
            return Pr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(Pr.M(), r, t);
          }
          serializeBase64String() {
            var r = new (n().BinaryWriter)();
            return (
              Pr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_Search_Response";
          }
        }
        class mi extends o.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(), o.Message.initialize(this, r, 0, -1, void 0, null);
          }
          toObject(r = !1) {
            return mi.toObject(r, this);
          }
          static toObject(r, t) {
            return r ? { $jspbMessageInstance: t } : {};
          }
          static fromObject(r) {
            return new mi();
          }
          static deserializeBinary(r) {
            let t = new (n().BinaryReader)(r),
              l = new mi();
            return mi.deserializeBinaryFromReader(l, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return r;
          }
          serializeBinary() {
            var r = new (n().BinaryWriter)();
            return mi.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {}
          serializeBase64String() {
            var r = new (n().BinaryWriter)();
            return (
              mi.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_GetSteamTVUserSettings_Request";
          }
        }
        class Ir extends o.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Ir.prototype.stream_live_email || i.Sg(Ir.M()),
              o.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Ir.sm_m ||
                (Ir.sm_m = {
                  proto: Ir,
                  fields: {
                    stream_live_email: {
                      n: 1,
                      br: i.qM.readBool,
                      bw: i.gp.writeBool,
                    },
                    stream_live_notification: {
                      n: 2,
                      br: i.qM.readBool,
                      bw: i.gp.writeBool,
                    },
                  },
                }),
              Ir.sm_m
            );
          }
          static MBF() {
            return Ir.sm_mbf || (Ir.sm_mbf = i.w0(Ir.M())), Ir.sm_mbf;
          }
          toObject(r = !1) {
            return Ir.toObject(r, this);
          }
          static toObject(r, t) {
            return i.BT(Ir.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(Ir.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (n().BinaryReader)(r),
              l = new Ir();
            return Ir.deserializeBinaryFromReader(l, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(Ir.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (n().BinaryWriter)();
            return Ir.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(Ir.M(), r, t);
          }
          serializeBase64String() {
            var r = new (n().BinaryWriter)();
            return (
              Ir.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_GetSteamTVUserSettings_Response";
          }
        }
        class wr extends o.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              wr.prototype.stream_live_email || i.Sg(wr.M()),
              o.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              wr.sm_m ||
                (wr.sm_m = {
                  proto: wr,
                  fields: {
                    stream_live_email: {
                      n: 1,
                      br: i.qM.readBool,
                      bw: i.gp.writeBool,
                    },
                    stream_live_notification: {
                      n: 2,
                      br: i.qM.readBool,
                      bw: i.gp.writeBool,
                    },
                  },
                }),
              wr.sm_m
            );
          }
          static MBF() {
            return wr.sm_mbf || (wr.sm_mbf = i.w0(wr.M())), wr.sm_mbf;
          }
          toObject(r = !1) {
            return wr.toObject(r, this);
          }
          static toObject(r, t) {
            return i.BT(wr.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(wr.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (n().BinaryReader)(r),
              l = new wr();
            return wr.deserializeBinaryFromReader(l, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(wr.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (n().BinaryWriter)();
            return wr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(wr.M(), r, t);
          }
          serializeBase64String() {
            var r = new (n().BinaryWriter)();
            return (
              wr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_SetSteamTVUserSettings_Request";
          }
        }
        class ri extends o.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(), o.Message.initialize(this, r, 0, -1, void 0, null);
          }
          toObject(r = !1) {
            return ri.toObject(r, this);
          }
          static toObject(r, t) {
            return r ? { $jspbMessageInstance: t } : {};
          }
          static fromObject(r) {
            return new ri();
          }
          static deserializeBinary(r) {
            let t = new (n().BinaryReader)(r),
              l = new ri();
            return ri.deserializeBinaryFromReader(l, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return r;
          }
          serializeBinary() {
            var r = new (n().BinaryWriter)();
            return ri.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {}
          serializeBase64String() {
            var r = new (n().BinaryWriter)();
            return (
              ri.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_SetSteamTVUserSettings_Response";
          }
        }
        class ci extends o.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(), o.Message.initialize(this, r, 0, -1, void 0, null);
          }
          toObject(r = !1) {
            return ci.toObject(r, this);
          }
          static toObject(r, t) {
            return r ? { $jspbMessageInstance: t } : {};
          }
          static fromObject(r) {
            return new ci();
          }
          static deserializeBinary(r) {
            let t = new (n().BinaryReader)(r),
              l = new ci();
            return ci.deserializeBinaryFromReader(l, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return r;
          }
          serializeBinary() {
            var r = new (n().BinaryWriter)();
            return ci.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {}
          serializeBase64String() {
            var r = new (n().BinaryWriter)();
            return (
              ci.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_GetMyBroadcastChannels_Request";
          }
        }
        class Qr extends o.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Qr.prototype.results || i.Sg(Qr.M()),
              o.Message.initialize(this, r, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Qr.sm_m ||
                (Qr.sm_m = {
                  proto: Qr,
                  fields: { results: { n: 1, c: K, r: !0, q: !0 } },
                }),
              Qr.sm_m
            );
          }
          static MBF() {
            return Qr.sm_mbf || (Qr.sm_mbf = i.w0(Qr.M())), Qr.sm_mbf;
          }
          toObject(r = !1) {
            return Qr.toObject(r, this);
          }
          static toObject(r, t) {
            return i.BT(Qr.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(Qr.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (n().BinaryReader)(r),
              l = new Qr();
            return Qr.deserializeBinaryFromReader(l, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(Qr.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (n().BinaryWriter)();
            return Qr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(Qr.M(), r, t);
          }
          serializeBase64String() {
            var r = new (n().BinaryWriter)();
            return (
              Qr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_GetMyBroadcastChannels_Response";
          }
        }
        class ir extends o.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              ir.prototype.broadcasts || i.Sg(ir.M()),
              o.Message.initialize(this, r, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              ir.sm_m ||
                (ir.sm_m = {
                  proto: ir,
                  fields: { broadcasts: { n: 1, c: K, r: !0, q: !0 } },
                }),
              ir.sm_m
            );
          }
          static MBF() {
            return ir.sm_mbf || (ir.sm_mbf = i.w0(ir.M())), ir.sm_mbf;
          }
          toObject(r = !1) {
            return ir.toObject(r, this);
          }
          static toObject(r, t) {
            return i.BT(ir.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(ir.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (n().BinaryReader)(r),
              l = new ir();
            return ir.deserializeBinaryFromReader(l, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(ir.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (n().BinaryWriter)();
            return ir.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(ir.M(), r, t);
          }
          serializeBase64String() {
            var r = new (n().BinaryWriter)();
            return (
              ir.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_HomePageTemplate_Takeover";
          }
        }
        class Fr extends o.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Fr.prototype.broadcasts || i.Sg(Fr.M()),
              o.Message.initialize(this, r, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Fr.sm_m ||
                (Fr.sm_m = {
                  proto: Fr,
                  fields: {
                    broadcasts: { n: 1, c: K, r: !0, q: !0 },
                    appid: { n: 2, br: i.qM.readUint32, bw: i.gp.writeUint32 },
                    title: { n: 3, br: i.qM.readString, bw: i.gp.writeString },
                  },
                }),
              Fr.sm_m
            );
          }
          static MBF() {
            return Fr.sm_mbf || (Fr.sm_mbf = i.w0(Fr.M())), Fr.sm_mbf;
          }
          toObject(r = !1) {
            return Fr.toObject(r, this);
          }
          static toObject(r, t) {
            return i.BT(Fr.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(Fr.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (n().BinaryReader)(r),
              l = new Fr();
            return Fr.deserializeBinaryFromReader(l, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(Fr.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (n().BinaryWriter)();
            return Fr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(Fr.M(), r, t);
          }
          serializeBase64String() {
            var r = new (n().BinaryWriter)();
            return (
              Fr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_HomePageTemplate_SingleGame";
          }
        }
        class $r extends o.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              $r.prototype.appid || i.Sg($r.M()),
              o.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              $r.sm_m ||
                ($r.sm_m = {
                  proto: $r,
                  fields: {
                    appid: { n: 1, br: i.qM.readUint32, bw: i.gp.writeUint32 },
                    game_name: {
                      n: 2,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                    broadcast: { n: 3, c: K },
                  },
                }),
              $r.sm_m
            );
          }
          static MBF() {
            return $r.sm_mbf || ($r.sm_mbf = i.w0($r.M())), $r.sm_mbf;
          }
          toObject(r = !1) {
            return $r.toObject(r, this);
          }
          static toObject(r, t) {
            return i.BT($r.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq($r.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (n().BinaryReader)(r),
              l = new $r();
            return $r.deserializeBinaryFromReader(l, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj($r.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (n().BinaryWriter)();
            return $r.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0($r.M(), r, t);
          }
          serializeBase64String() {
            var r = new (n().BinaryWriter)();
            return (
              $r.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "GameListEntry";
          }
        }
        class lr extends o.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              lr.prototype.entries || i.Sg(lr.M()),
              o.Message.initialize(this, r, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              lr.sm_m ||
                (lr.sm_m = {
                  proto: lr,
                  fields: {
                    entries: { n: 1, c: $r, r: !0, q: !0 },
                    title: { n: 2, br: i.qM.readString, bw: i.gp.writeString },
                  },
                }),
              lr.sm_m
            );
          }
          static MBF() {
            return lr.sm_mbf || (lr.sm_mbf = i.w0(lr.M())), lr.sm_mbf;
          }
          toObject(r = !1) {
            return lr.toObject(r, this);
          }
          static toObject(r, t) {
            return i.BT(lr.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(lr.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (n().BinaryReader)(r),
              l = new lr();
            return lr.deserializeBinaryFromReader(l, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(lr.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (n().BinaryWriter)();
            return lr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(lr.M(), r, t);
          }
          serializeBase64String() {
            var r = new (n().BinaryWriter)();
            return (
              lr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_HomePageTemplate_GameList";
          }
        }
        class e extends o.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              e.prototype.broadcasts || i.Sg(e.M()),
              o.Message.initialize(this, r, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              e.sm_m ||
                (e.sm_m = {
                  proto: e,
                  fields: {
                    broadcasts: { n: 1, c: K, r: !0, q: !0 },
                    title: { n: 2, br: i.qM.readString, bw: i.gp.writeString },
                  },
                }),
              e.sm_m
            );
          }
          static MBF() {
            return e.sm_mbf || (e.sm_mbf = i.w0(e.M())), e.sm_mbf;
          }
          toObject(r = !1) {
            return e.toObject(r, this);
          }
          static toObject(r, t) {
            return i.BT(e.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(e.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (n().BinaryReader)(r),
              l = new e();
            return e.deserializeBinaryFromReader(l, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(e.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (n().BinaryWriter)();
            return e.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(e.M(), r, t);
          }
          serializeBase64String() {
            var r = new (n().BinaryWriter)();
            return (
              e.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_HomePageTemplate_QuickExplore";
          }
        }
        class a extends o.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              a.prototype.broadcasts || i.Sg(a.M()),
              o.Message.initialize(this, r, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              a.sm_m ||
                (a.sm_m = {
                  proto: a,
                  fields: {
                    broadcasts: { n: 1, c: K, r: !0, q: !0 },
                    title: { n: 2, br: i.qM.readString, bw: i.gp.writeString },
                  },
                }),
              a.sm_m
            );
          }
          static MBF() {
            return a.sm_mbf || (a.sm_mbf = i.w0(a.M())), a.sm_mbf;
          }
          toObject(r = !1) {
            return a.toObject(r, this);
          }
          static toObject(r, t) {
            return i.BT(a.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(a.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (n().BinaryReader)(r),
              l = new a();
            return a.deserializeBinaryFromReader(l, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(a.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (n().BinaryWriter)();
            return a.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(a.M(), r, t);
          }
          serializeBase64String() {
            var r = new (n().BinaryWriter)();
            return (
              a.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_HomePageTemplate_ConveyorBelt";
          }
        }
        class c extends o.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              c.prototype.broadcast || i.Sg(c.M()),
              o.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              c.sm_m ||
                (c.sm_m = {
                  proto: c,
                  fields: {
                    broadcast: { n: 1, c: K },
                    title: { n: 2, br: i.qM.readString, bw: i.gp.writeString },
                    chat_group_id: {
                      n: 3,
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
                    },
                  },
                }),
              c.sm_m
            );
          }
          static MBF() {
            return c.sm_mbf || (c.sm_mbf = i.w0(c.M())), c.sm_mbf;
          }
          toObject(r = !1) {
            return c.toObject(r, this);
          }
          static toObject(r, t) {
            return i.BT(c.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(c.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (n().BinaryReader)(r),
              l = new c();
            return c.deserializeBinaryFromReader(l, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(c.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (n().BinaryWriter)();
            return c.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(c.M(), r, t);
          }
          serializeBase64String() {
            var r = new (n().BinaryWriter)();
            return (
              c.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_HomePageTemplate_WatchParty";
          }
        }
        class d extends o.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              d.prototype.broadcast || i.Sg(d.M()),
              o.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              d.sm_m ||
                (d.sm_m = {
                  proto: d,
                  fields: {
                    broadcast: { n: 1, c: K },
                    title: { n: 2, br: i.qM.readString, bw: i.gp.writeString },
                  },
                }),
              d.sm_m
            );
          }
          static MBF() {
            return d.sm_mbf || (d.sm_mbf = i.w0(d.M())), d.sm_mbf;
          }
          toObject(r = !1) {
            return d.toObject(r, this);
          }
          static toObject(r, t) {
            return i.BT(d.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(d.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (n().BinaryReader)(r),
              l = new d();
            return d.deserializeBinaryFromReader(l, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(d.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (n().BinaryWriter)();
            return d.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(d.M(), r, t);
          }
          serializeBase64String() {
            var r = new (n().BinaryWriter)();
            return (
              d.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_HomePageTemplate_Developer";
          }
        }
        class u extends o.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              u.prototype.title || i.Sg(u.M()),
              o.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              u.sm_m ||
                (u.sm_m = {
                  proto: u,
                  fields: {
                    title: { n: 1, br: i.qM.readString, bw: i.gp.writeString },
                  },
                }),
              u.sm_m
            );
          }
          static MBF() {
            return u.sm_mbf || (u.sm_mbf = i.w0(u.M())), u.sm_mbf;
          }
          toObject(r = !1) {
            return u.toObject(r, this);
          }
          static toObject(r, t) {
            return i.BT(u.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(u.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (n().BinaryReader)(r),
              l = new u();
            return u.deserializeBinaryFromReader(l, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(u.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (n().BinaryWriter)();
            return u.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(u.M(), r, t);
          }
          serializeBase64String() {
            var r = new (n().BinaryWriter)();
            return (
              u.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_HomePageTemplate_Event";
          }
        }
        class w extends o.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              w.prototype.template_type || i.Sg(w.M()),
              o.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              w.sm_m ||
                (w.sm_m = {
                  proto: w,
                  fields: {
                    template_type: {
                      n: 1,
                      br: i.qM.readEnum,
                      bw: i.gp.writeEnum,
                    },
                    takeover: { n: 2, c: ir },
                    single_game: { n: 3, c: Fr },
                    game_list: { n: 4, c: lr },
                    quick_explore: { n: 5, c: e },
                    conveyor_belt: { n: 6, c: a },
                    watch_party: { n: 7, c },
                    developer: { n: 8, c: d },
                    event: { n: 9, c: u },
                  },
                }),
              w.sm_m
            );
          }
          static MBF() {
            return w.sm_mbf || (w.sm_mbf = i.w0(w.M())), w.sm_mbf;
          }
          toObject(r = !1) {
            return w.toObject(r, this);
          }
          static toObject(r, t) {
            return i.BT(w.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(w.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (n().BinaryReader)(r),
              l = new w();
            return w.deserializeBinaryFromReader(l, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(w.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (n().BinaryWriter)();
            return w.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(w.M(), r, t);
          }
          serializeBase64String() {
            var r = new (n().BinaryWriter)();
            return (
              w.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_HomePageContentRow";
          }
        }
        class M extends o.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(), o.Message.initialize(this, r, 0, -1, void 0, null);
          }
          toObject(r = !1) {
            return M.toObject(r, this);
          }
          static toObject(r, t) {
            return r ? { $jspbMessageInstance: t } : {};
          }
          static fromObject(r) {
            return new M();
          }
          static deserializeBinary(r) {
            let t = new (n().BinaryReader)(r),
              l = new M();
            return M.deserializeBinaryFromReader(l, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return r;
          }
          serializeBinary() {
            var r = new (n().BinaryWriter)();
            return M.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {}
          serializeBase64String() {
            var r = new (n().BinaryWriter)();
            return (
              M.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_GetHomePageContents_Request";
          }
        }
        class O extends o.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              O.prototype.rows || i.Sg(O.M()),
              o.Message.initialize(this, r, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              O.sm_m ||
                (O.sm_m = {
                  proto: O,
                  fields: { rows: { n: 1, c: w, r: !0, q: !0 } },
                }),
              O.sm_m
            );
          }
          static MBF() {
            return O.sm_mbf || (O.sm_mbf = i.w0(O.M())), O.sm_mbf;
          }
          toObject(r = !1) {
            return O.toObject(r, this);
          }
          static toObject(r, t) {
            return i.BT(O.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(O.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (n().BinaryReader)(r),
              l = new O();
            return O.deserializeBinaryFromReader(l, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(O.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (n().BinaryWriter)();
            return O.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(O.M(), r, t);
          }
          serializeBase64String() {
            var r = new (n().BinaryWriter)();
            return (
              O.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_GetHomePageContents_Response";
          }
        }
        class X extends o.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              X.prototype.broadcast_channel_id || i.Sg(X.M()),
              o.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              X.sm_m ||
                (X.sm_m = {
                  proto: X,
                  fields: {
                    broadcast_channel_id: {
                      n: 1,
                      br: i.qM.readFixed64String,
                      bw: i.gp.writeFixed64String,
                    },
                  },
                }),
              X.sm_m
            );
          }
          static MBF() {
            return X.sm_mbf || (X.sm_mbf = i.w0(X.M())), X.sm_mbf;
          }
          toObject(r = !1) {
            return X.toObject(r, this);
          }
          static toObject(r, t) {
            return i.BT(X.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(X.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (n().BinaryReader)(r),
              l = new X();
            return X.deserializeBinaryFromReader(l, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(X.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (n().BinaryWriter)();
            return X.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(X.M(), r, t);
          }
          serializeBase64String() {
            var r = new (n().BinaryWriter)();
            return (
              X.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_GetBroadcastChannelClips_Request";
          }
        }
        class J extends o.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              J.prototype.broadcast_clip_id || i.Sg(J.M()),
              o.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              J.sm_m ||
                (J.sm_m = {
                  proto: J,
                  fields: {
                    broadcast_clip_id: {
                      n: 1,
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
                    },
                    channel_id: {
                      n: 2,
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
                    },
                    app_id: { n: 3, br: i.qM.readUint32, bw: i.gp.writeUint32 },
                    broadcaster_steamid: {
                      n: 4,
                      br: i.qM.readFixed64String,
                      bw: i.gp.writeFixed64String,
                    },
                    creator_steamid: {
                      n: 5,
                      br: i.qM.readFixed64String,
                      bw: i.gp.writeFixed64String,
                    },
                    video_description: {
                      n: 6,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                    live_time: {
                      n: 7,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    length_ms: {
                      n: 8,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    thumbnail_path: {
                      n: 9,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                  },
                }),
              J.sm_m
            );
          }
          static MBF() {
            return J.sm_mbf || (J.sm_mbf = i.w0(J.M())), J.sm_mbf;
          }
          toObject(r = !1) {
            return J.toObject(r, this);
          }
          static toObject(r, t) {
            return i.BT(J.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(J.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (n().BinaryReader)(r),
              l = new J();
            return J.deserializeBinaryFromReader(l, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(J.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (n().BinaryWriter)();
            return J.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(J.M(), r, t);
          }
          serializeBase64String() {
            var r = new (n().BinaryWriter)();
            return (
              J.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_BroadcastClipInfo";
          }
        }
        class H extends o.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              H.prototype.clips || i.Sg(H.M()),
              o.Message.initialize(this, r, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              H.sm_m ||
                (H.sm_m = {
                  proto: H,
                  fields: {
                    clips: { n: 1, c: J, r: !0, q: !0 },
                    thumbnail_host: {
                      n: 2,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                  },
                }),
              H.sm_m
            );
          }
          static MBF() {
            return H.sm_mbf || (H.sm_mbf = i.w0(H.M())), H.sm_mbf;
          }
          toObject(r = !1) {
            return H.toObject(r, this);
          }
          static toObject(r, t) {
            return i.BT(H.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(H.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (n().BinaryReader)(r),
              l = new H();
            return H.deserializeBinaryFromReader(l, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(H.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (n().BinaryWriter)();
            return H.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(H.M(), r, t);
          }
          serializeBase64String() {
            var r = new (n().BinaryWriter)();
            return (
              H.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_GetBroadcastChannelClips_Response";
          }
        }
        class Mr extends o.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Mr.prototype.cheer_type || i.Sg(Mr.M()),
              o.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Mr.sm_m ||
                (Mr.sm_m = {
                  proto: Mr,
                  fields: {
                    cheer_type: {
                      n: 1,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    cheer_amount: {
                      n: 2,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                  },
                }),
              Mr.sm_m
            );
          }
          static MBF() {
            return Mr.sm_mbf || (Mr.sm_mbf = i.w0(Mr.M())), Mr.sm_mbf;
          }
          toObject(r = !1) {
            return Mr.toObject(r, this);
          }
          static toObject(r, t) {
            return i.BT(Mr.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(Mr.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (n().BinaryReader)(r),
              l = new Mr();
            return Mr.deserializeBinaryFromReader(l, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(Mr.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (n().BinaryWriter)();
            return Mr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(Mr.M(), r, t);
          }
          serializeBase64String() {
            var r = new (n().BinaryWriter)();
            return (
              Mr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_AppCheer_SingleCheerType";
          }
        }
        class yr extends o.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              yr.prototype.app_id || i.Sg(yr.M()),
              o.Message.initialize(this, r, 0, -1, [3], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              yr.sm_m ||
                (yr.sm_m = {
                  proto: yr,
                  fields: {
                    app_id: { n: 1, br: i.qM.readUint32, bw: i.gp.writeUint32 },
                    cheer_target_id: {
                      n: 2,
                      br: i.qM.readFixed64String,
                      bw: i.gp.writeFixed64String,
                    },
                    cheers: { n: 3, c: Mr, r: !0, q: !0 },
                  },
                }),
              yr.sm_m
            );
          }
          static MBF() {
            return yr.sm_mbf || (yr.sm_mbf = i.w0(yr.M())), yr.sm_mbf;
          }
          toObject(r = !1) {
            return yr.toObject(r, this);
          }
          static toObject(r, t) {
            return i.BT(yr.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(yr.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (n().BinaryReader)(r),
              l = new yr();
            return yr.deserializeBinaryFromReader(l, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(yr.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (n().BinaryWriter)();
            return yr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(yr.M(), r, t);
          }
          serializeBase64String() {
            var r = new (n().BinaryWriter)();
            return (
              yr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_AppCheer_Request";
          }
        }
        class C extends o.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              C.prototype.aggregation_delay_ms || i.Sg(C.M()),
              o.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              C.sm_m ||
                (C.sm_m = {
                  proto: C,
                  fields: {
                    aggregation_delay_ms: {
                      n: 1,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                  },
                }),
              C.sm_m
            );
          }
          static MBF() {
            return C.sm_mbf || (C.sm_mbf = i.w0(C.M())), C.sm_mbf;
          }
          toObject(r = !1) {
            return C.toObject(r, this);
          }
          static toObject(r, t) {
            return i.BT(C.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(C.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (n().BinaryReader)(r),
              l = new C();
            return C.deserializeBinaryFromReader(l, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(C.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (n().BinaryWriter)();
            return C.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(C.M(), r, t);
          }
          serializeBase64String() {
            var r = new (n().BinaryWriter)();
            return (
              C.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_AppCheer_Response";
          }
        }
        var si;
        ((Z) => {
          function r(x, I, F) {
            return x.SendMsg(
              "SteamTV.CreateBroadcastChannel#1",
              (0, U.I8)(ar, I, F),
              T,
              { ePrivilege: 1, eWebAPIKeyRequirement: 2 },
            );
          }
          Z.CreateBroadcastChannel = r;
          function t(x, I, F) {
            return x.SendMsg(
              "SteamTV.GetBroadcastChannelID#1",
              (0, U.I8)(j, I, F),
              g,
              { bConstMethod: !0, ePrivilege: 0 },
            );
          }
          Z.GetBroadcastChannelID = t;
          function l(x, I, F) {
            return x.SendMsg(
              "SteamTV.SetBroadcastChannelProfile#1",
              (0, U.I8)(m, I, F),
              q,
              { ePrivilege: 1, eWebAPIKeyRequirement: 2 },
            );
          }
          Z.SetBroadcastChannelProfile = l;
          function p(x, I, F) {
            return x.SendMsg(
              "SteamTV.GetBroadcastChannelProfile#1",
              (0, U.I8)(B, I, F),
              L,
              { bConstMethod: !0, ePrivilege: 0 },
            );
          }
          Z.GetBroadcastChannelProfile = p;
          function nr(x, I, F) {
            return x.SendMsg(
              "SteamTV.SetBroadcastChannelImage#1",
              (0, U.I8)(y, I, F),
              S,
              { ePrivilege: 1, eWebAPIKeyRequirement: 2 },
            );
          }
          Z.SetBroadcastChannelImage = nr;
          function Vr(x, I, F) {
            return x.SendMsg(
              "SteamTV.GetBroadcastChannelImages#1",
              (0, U.I8)(R, I, F),
              tr,
              { bConstMethod: !0, ePrivilege: 0 },
            );
          }
          Z.GetBroadcastChannelImages = Vr;
          function wi(x, I, F) {
            return x.SendMsg(
              "SteamTV.SetBroadcastChannelLinkRegions#1",
              (0, U.I8)(jr, I, F),
              oi,
              { ePrivilege: 1, eWebAPIKeyRequirement: 2 },
            );
          }
          Z.SetBroadcastChannelLinkRegions = wi;
          function di(x, I, F) {
            return x.SendMsg(
              "SteamTV.GetBroadcastChannelLinks#1",
              (0, U.I8)(ur, I, F),
              er,
              { bConstMethod: !0, ePrivilege: 0 },
            );
          }
          Z.GetBroadcastChannelLinks = di;
          function ti(x, I, F) {
            return x.SendMsg(
              "SteamTV.GetBroadcastChannelBroadcasters#1",
              (0, U.I8)(pr, I, F),
              sr,
              { bConstMethod: !0, ePrivilege: 1, eWebAPIKeyRequirement: 2 },
            );
          }
          Z.GetBroadcastChannelBroadcasters = ti;
          function Di(x, I, F) {
            return x.SendMsg(
              "SteamTV.GetFollowedChannels#1",
              (0, U.I8)(P, I, F),
              Ur,
              { bConstMethod: !0, ePrivilege: 1, eWebAPIKeyRequirement: 2 },
            );
          }
          Z.GetFollowedChannels = Di;
          function Ni(x, I, F) {
            return x.SendMsg(
              "SteamTV.GetSubscribedChannels#1",
              (0, U.I8)(Gr, I, F),
              Er,
              { bConstMethod: !0, ePrivilege: 1, eWebAPIKeyRequirement: 2 },
            );
          }
          Z.GetSubscribedChannels = Ni;
          function Ui(x, I, F) {
            return x.SendMsg(
              "SteamTV.GetBroadcastChannelStatus#1",
              (0, U.I8)(k, I, F),
              Nr,
              { bConstMethod: !0, ePrivilege: 0 },
            );
          }
          Z.GetBroadcastChannelStatus = Ui;
          function Ei(x, I, F) {
            return x.SendMsg(
              "SteamTV.FollowBroadcastChannel#1",
              (0, U.I8)(_, I, F),
              Or,
              { ePrivilege: 1, eWebAPIKeyRequirement: 2 },
            );
          }
          Z.FollowBroadcastChannel = Ei;
          function Ai(x, I, F) {
            return x.SendMsg(
              "SteamTV.SubscribeBroadcastChannel#1",
              (0, U.I8)(h, I, F),
              b,
              { ePrivilege: 1, eWebAPIKeyRequirement: 2 },
            );
          }
          Z.SubscribeBroadcastChannel = Ai;
          function Pi(x, I, F) {
            return x.SendMsg(
              "SteamTV.GetBroadcastChannelClips#1",
              (0, U.I8)(X, I, F),
              H,
              { bConstMethod: !0, ePrivilege: 0 },
            );
          }
          Z.GetBroadcastChannelClips = Pi;
          function Li(x, I, F) {
            return x.SendMsg(
              "SteamTV.ReportBroadcastChannel#1",
              (0, U.I8)(v, I, F),
              E,
              { ePrivilege: 1, eWebAPIKeyRequirement: 2 },
            );
          }
          Z.ReportBroadcastChannel = Li;
          function Ki(x, I, F) {
            return x.SendMsg(
              "SteamTV.GetBroadcastChannelInteraction#1",
              (0, U.I8)(D, I, F),
              $,
              { bConstMethod: !0, ePrivilege: 1, eWebAPIKeyRequirement: 2 },
            );
          }
          Z.GetBroadcastChannelInteraction = Ki;
          function Xi(x, I, F) {
            return x.SendMsg("SteamTV.GetGames#1", (0, U.I8)(hr, I, F), mr, {
              bConstMethod: !0,
              ePrivilege: 2,
              eWebAPIKeyRequirement: 1,
            });
          }
          Z.GetGames = Xi;
          function $i(x, I, F) {
            return x.SendMsg("SteamTV.GetChannels#1", (0, U.I8)(vr, I, F), Br, {
              bConstMethod: !0,
              ePrivilege: 2,
              eWebAPIKeyRequirement: 1,
            });
          }
          Z.GetChannels = $i;
          function Yi(x, I, F) {
            return x.SendMsg("SteamTV.AddChatBan#1", (0, U.I8)(Lr, I, F), gi, {
              ePrivilege: 1,
              eWebAPIKeyRequirement: 2,
              rgBrowserAPISites: ["store", "community"],
            });
          }
          Z.AddChatBan = Yi;
          function Ji(x, I, F) {
            return x.SendMsg("SteamTV.GetChatBans#1", (0, U.I8)(G, I, F), fr, {
              bConstMethod: !0,
              ePrivilege: 1,
              eWebAPIKeyRequirement: 2,
            });
          }
          Z.GetChatBans = Ji;
          function Zi(x, I, F) {
            return x.SendMsg(
              "SteamTV.AddChatModerator#1",
              (0, U.I8)(Kr, I, F),
              Tr,
              {
                ePrivilege: 1,
                eWebAPIKeyRequirement: 2,
                rgBrowserAPISites: ["store", "community"],
              },
            );
          }
          Z.AddChatModerator = Zi;
          function ki(x, I, F) {
            return x.SendMsg(
              "SteamTV.GetChatModerators#1",
              (0, U.I8)(or, I, F),
              Jr,
              {
                bConstMethod: !0,
                ePrivilege: 0,
                rgBrowserAPISites: ["store", "community"],
              },
            );
          }
          Z.GetChatModerators = ki;
          function Qi(x, I, F) {
            return x.SendMsg("SteamTV.AddWordBan#1", (0, U.I8)(Zr, I, F), N, {
              ePrivilege: 1,
              eWebAPIKeyRequirement: 2,
            });
          }
          Z.AddWordBan = Qi;
          function Hi(x, I, F) {
            return x.SendMsg("SteamTV.GetWordBans#1", (0, U.I8)(Xr, I, F), br, {
              bConstMethod: !0,
              ePrivilege: 1,
              eWebAPIKeyRequirement: 2,
            });
          }
          Z.GetWordBans = Hi;
          function qi(x, I, F) {
            return x.SendMsg("SteamTV.JoinChat#1", (0, U.I8)(Q, I, F), Ar, {
              ePrivilege: 2,
              eWebAPIKeyRequirement: 1,
              rgBrowserAPISites: ["store", "community"],
            });
          }
          Z.JoinChat = qi;
          function Si(x, I, F) {
            return x.SendMsg("SteamTV.Search#1", (0, U.I8)(kr, I, F), Pr, {
              bConstMethod: !0,
              ePrivilege: 0,
            });
          }
          Z.Search = Si;
          function Ri(x, I, F) {
            return x.SendMsg(
              "SteamTV.GetSteamTVUserSettings#1",
              (0, U.I8)(mi, I, F),
              Ir,
              { bConstMethod: !0, ePrivilege: 1, eWebAPIKeyRequirement: 2 },
            );
          }
          Z.GetSteamTVUserSettings = Ri;
          function Gi(x, I, F) {
            return x.SendMsg(
              "SteamTV.SetSteamTVUserSettings#1",
              (0, U.I8)(wr, I, F),
              ri,
              { ePrivilege: 1, eWebAPIKeyRequirement: 2 },
            );
          }
          Z.SetSteamTVUserSettings = Gi;
          function Ti(x, I, F) {
            return x.SendMsg(
              "SteamTV.GetMyBroadcastChannels#1",
              (0, U.I8)(ci, I, F),
              Qr,
              { bConstMethod: !0, ePrivilege: 1, eWebAPIKeyRequirement: 2 },
            );
          }
          Z.GetMyBroadcastChannels = Ti;
          function Vi(x, I, F) {
            return x.SendMsg(
              "SteamTV.GetHomePageContents#1",
              (0, U.I8)(M, I, F),
              O,
              { bConstMethod: !0, ePrivilege: 2, eWebAPIKeyRequirement: 1 },
            );
          }
          Z.GetHomePageContents = Vi;
          function Ci(x, I, F) {
            return x.SendMsg("SteamTV.AppCheer#1", (0, U.I8)(yr, I, F), C, {
              ePrivilege: 0,
              eWebAPIKeyRequirement: 1,
            });
          }
          Z.AppCheer = Ci;
        })(si || (si = {}));
        var yi = f(27066),
          vi = f(8323),
          Rr = f(18210),
          ui = f(3166),
          pi = f(24544),
          ji = Object.defineProperty,
          ni = Object.getOwnPropertyDescriptor,
          ai = (Z, r, t, l) => {
            for (
              var p = l > 1 ? void 0 : l ? ni(r, t) : r, nr = Z.length - 1, Vr;
              nr >= 0;
              nr--
            )
              (Vr = Z[nr]) && (p = (l ? Vr(r, t, p) : Vr(p)) || p);
            return l && p && ji(r, t, p), p;
          };
        const Mi = 4,
          zi = 500,
          xi = 10,
          Ii = class Bi {
            m_mapChats = new Map();
            m_cmInterface;
            SetCMInterface(r) {
              this.m_cmInterface = r;
            }
            GetCMInterface() {
              return this.m_cmInterface;
            }
            GetChat(r, t) {
              return this.m_mapChats.get(r) || this.m_mapChats.get(t);
            }
            GetOrCreateChat(r, t) {
              let l = this.GetChat(r, t);
              return l || ((l = new bi()), this.m_mapChats.set(r || t, l)), l;
            }
            static s_Singleton;
            static Get() {
              return (
                Bi.s_Singleton || (Bi.s_Singleton = new Bi()), Bi.s_Singleton
              );
            }
            constructor() {
              (0, Y.Gn)(this);
            }
          };
        ai([Y.sH], Ii.prototype, "m_mapChats", 2);
        let Fi = Ii;
        class bi {
          m_ulBroadcastChannelID = "";
          m_ulChatID = "";
          m_strFlairGroupID = "";
          m_bAutoScroll = !0;
          m_ulBroadcastID = "";
          m_ulBroadcastSteamID = "";
          m_tsFirstRequest = null;
          m_nFromFirstRequestMS = 0;
          m_nNextChatTS = 0;
          m_cConsecutiveErrors = 0;
          m_nNudgeFactorMS = 0;
          m_nLastSleepMS = 0;
          m_bReconnecting = !1;
          m_strChatURL = "";
          m_unInstanceID = Math.floor(Math.random() * 4294967296);
          m_strUserSteamID = "";
          m_regexUserEmoticons;
          m_chatScheduledFunc;
          m_steamInterface;
          m_textFilterStore;
          m_bHasAddedWelcomeChat = !1;
          m_mapMutedUsers = {};
          m_mapChannelModeratorUsers = new Map();
          m_mapBroadcastModeratorUsers = new Map();
          m_nRateLimitSeconds = 0;
          m_bRateLimited = !1;
          m_rgChatMessages = [];
          m_rgAnnouncements = [];
          m_latestAnnouncement = null;
          constructor() {
            (0, Y.Gn)(this),
              (this.m_steamInterface = this.CreateSteamInterface());
          }
          InitTextFilter() {
            this.m_textFilterStore = new pi.s({ BIsFriend: (0, pi.Q)() });
            let r = 0;
            ui.iA.steamid !== "" &&
              (r = new Hr.b(ui.iA.steamid).GetAccountID()),
              this.m_textFilterStore.Init(r, null, new Cr.A());
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
            const r = (0, z.q)() ?? Fi.Get().GetCMInterface();
            return (
              r ||
              (0, li.C)(new rr.D(ui.TS.WEBAPI_BASE_URL, ui.iA.webapi_token))
            );
          }
          StartForSteamID(r, t) {
            (this.m_steamInterface = this.CreateSteamInterface()),
              (this.m_ulBroadcastSteamID = r),
              (this.m_ulBroadcastID = t),
              this.InitTextFilter(),
              this.RequestChatInfo();
          }
          StartForChannel(r) {
            (this.m_steamInterface = this.CreateSteamInterface()),
              (this.m_ulBroadcastChannelID = r),
              (this.m_strUserSteamID = ui.iA.steamid),
              this.InitTextFilter(),
              this.JoinChannelChat();
          }
          Stop() {
            this.m_chatScheduledFunc && this.m_chatScheduledFunc.Cancel();
          }
          async SendMessage(r) {
            const t = r.trim();
            if (t.length != 0)
              try {
                const l = U.w.Init(A.Lw);
                l.SetBodyFields({
                  chat_id: this.m_ulChatID,
                  message: t,
                  instance_id: this.m_unInstanceID.toString(),
                });
                const p = await A.DK.PostChatMessage(
                    this.m_steamInterface.GetServiceTransport(),
                    l,
                  ),
                  nr = {
                    result: p.GetEResult(),
                    cooldown_time_seconds: p.Body().cooldown_time_seconds(),
                    in_game: p.Body().in_game(),
                    persona_name: p.Body().persona_name(),
                  };
                if (nr && nr.result && nr.result != Sr.R) {
                  let Vr = "";
                  nr.result == Sr.f4
                    ? (Vr = (0, Rr.we)("#BroadcastChat_YouMuted"))
                    : nr.result == Sr.h_
                      ? (Vr = (0, Rr.we)(
                          "#BroadcastChat_Cooldown",
                          nr.cooldown_time_seconds ?? 0,
                        ))
                      : (Vr = (0, Rr.we)("#BroadcastChat_FailedToSendMsg", t)),
                    this.m_rgChatMessages.push({
                      type: W.X8.Error,
                      msg: Vr,
                      client_ts: Number(new Date()),
                      instance_id: this.m_unInstanceID,
                      in_game: nr.in_game,
                      persona_name: nr.persona_name,
                      steamid: "",
                    });
                  return;
                }
                this.m_nRateLimitSeconds ||
                  (this.m_nRateLimitSeconds = nr.cooldown_time_seconds ?? 0),
                  this.m_nRateLimitSeconds &&
                    ((this.m_bRateLimited = !0),
                    setTimeout(
                      () => (this.m_bRateLimited = !1),
                      this.m_nRateLimitSeconds * 1e3,
                    ));
              } catch {
                this.m_rgChatMessages.push({
                  type: W.X8.Error,
                  msg: (0, Rr.we)("#BroadcastChat_FailedToSendMsg", t),
                  client_ts: Number(new Date()),
                  instance_id: this.m_unInstanceID,
                  in_game: !1,
                  persona_name: "",
                  steamid: "",
                });
              }
          }
          async RequestChatInfo(r) {
            (this.m_cConsecutiveErrors = 0), (this.m_bReconnecting = !1);
            try {
              const t = {
                  steamid: this.m_ulBroadcastSteamID,
                  broadcastid: this.m_ulBroadcastID,
                  sessionid: (0, ui.KC)(),
                  notoken: 1,
                },
                l = await Wr().get(
                  `${ui.TS.CHAT_BASE_URL}broadcast/getchatinfo`,
                  { params: t, withCredentials: !0, cancelToken: r?.token },
                );
              (!r || !r.token.reason) &&
                (0, Y.h5)(() => {
                  const p = l.data;
                  (this.m_strChatURL = p.view_url_template ?? ""),
                    (this.m_ulChatID = p.chat_id ?? ""),
                    (this.m_strFlairGroupID = p.flair_group_ids?.[0] ?? ""),
                    p.blocked && console.log("User is blocked from chat"),
                    p.steamid && (this.m_strUserSteamID = p.steamid),
                    p.emoticons && this.SetOwnedEmoticons(p.emoticons),
                    this.m_bHasAddedWelcomeChat ||
                      (this.m_rgChatMessages.push({
                        type: W.X8.Notification,
                        msg: (0, Rr.we)("#BroadcastChat_DefaultMessage"),
                        client_ts: Number(new Date()),
                        instance_id: this.m_unInstanceID,
                        in_game: !1,
                        persona_name: "",
                        steamid: "",
                      }),
                      (this.m_bHasAddedWelcomeChat = !0)),
                    this.m_mapBroadcastModeratorUsers.clear(),
                    p.moderators_steamid &&
                      p.moderators_steamid.forEach((nr) =>
                        this.m_mapBroadcastModeratorUsers.set(nr, !0),
                      ),
                    (this.m_chatScheduledFunc = new vi.LU()),
                    this.m_chatScheduledFunc.Schedule(0, this.RequestLoop);
                });
            } catch (t) {
              console.error(t), console.log("Failed to get chat info!");
            }
          }
          async JoinChannelChat() {
            try {
              const r = U.w.Init(Q);
              r.SetBodyFields({
                broadcast_channel_id: this.m_ulBroadcastChannelID,
              });
              let t = await si.JoinChat(
                this.m_steamInterface.GetServiceTransport(),
                r,
              );
              const l = t.Body().view_url_template(),
                p = t.Body().chat_id();
              if (!p || !l) {
                console.log("Failed to join channel chat");
                return;
              }
              (this.m_strChatURL = l),
                (this.m_ulChatID = p),
                (this.m_strFlairGroupID =
                  t.Body().flair_group_ids() && t.Body().flair_group_ids()[0]),
                this.FetchChatModerators(),
                (this.m_rgChatMessages = []),
                this.m_rgChatMessages.push({
                  type: W.X8.Notification,
                  msg: (0, Rr.we)("#BroadcastChat_DefaultMessage"),
                  client_ts: Number(new Date()),
                  instance_id: this.m_unInstanceID,
                  in_game: !1,
                  persona_name: "",
                  steamid: "",
                }),
                (this.m_bHasAddedWelcomeChat = !0),
                (this.m_chatScheduledFunc = new vi.LU()),
                this.m_chatScheduledFunc.Schedule(0, this.RequestLoop);
            } catch (r) {
              console.error(r), console.log("Failed to join chat!");
            }
          }
          async FetchChatModerators() {
            const r = U.w.Init(or);
            r.SetBodyFields({
              broadcast_channel_id: this.m_ulBroadcastChannelID,
            });
            const l = (
                await si.GetChatModerators(
                  this.m_steamInterface.GetServiceTransport(),
                  r,
                )
              )
                .Body()
                .results(),
              p = new Map();
            l.forEach((nr) => {
              const Vr = nr.steamid();
              Vr && p.set(Vr, !0);
            }),
              (this.m_mapChannelModeratorUsers = p);
          }
          ReplaceChatAnnouncementIfAny(r) {
            r.announcements?.length > 0
              ? ((this.m_rgAnnouncements = r.announcements.reverse()),
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
            const r = {},
              t = this.m_strChatURL.replace(
                "{0}",
                this.m_nNextChatTS.toString(),
              );
            t == this.m_strChatURL &&
              this.m_nNextChatTS > 0 &&
              (r.t = this.m_nNextChatTS);
            try {
              const p = (await Wr().get(t, { params: r })).data;
              this.m_cConsecutiveErrors = 0;
              const nr = p.messages
                .map((di) => ({
                  ...di,
                  type: W.X8.Chat,
                  client_ts: Number(new Date()),
                }))
                .filter((di) => !this.IsUserMutedLocally(di.steamid));
              this.m_rgChatMessages.push(...nr),
                this.ReplaceChatAnnouncementIfAny(p);
              const Vr = this.m_bAutoScroll ? 150 : 300;
              if (
                (this.m_rgChatMessages.length > Vr &&
                  this.m_rgChatMessages.splice(
                    0,
                    this.m_rgChatMessages.length - Vr,
                  ),
                p.muted)
              )
                for (const di of p.muted) {
                  const ti =
                    di.muted == this.m_strUserSteamID
                      ? (0, Rr.we)("#BroadcastChat_YouMuted", di.persona_name)
                      : (0, Rr.we)("#BroadcastChat_UserMuted", di.persona_name);
                  this.m_rgChatMessages.push({
                    type: W.X8.Notification,
                    msg: ti,
                    client_ts: Number(new Date()),
                    instance_id: this.m_unInstanceID,
                    in_game: !1,
                    persona_name: "",
                    steamid: "",
                  });
                }
              if (p.remove_msgs)
                for (const di of p.remove_msgs)
                  this.RemoveUserMessagesLocal(di.steamid);
              let wi = 0;
              if (
                this.m_tsFirstRequest == null ||
                this.m_nNextChatTS == 0 ||
                p.initial_delay
              ) {
                if (p.initial_delay === "undefined") {
                  console.log(
                    "Need initial_delay to know when to request first chat message",
                  );
                  return;
                }
                (this.m_tsFirstRequest = performance.now() + p.initial_delay),
                  (this.m_nFromFirstRequestMS = 0),
                  (this.m_nNextChatTS = p.next_request),
                  (wi = p.initial_delay);
              } else {
                if (p.next_request < this.m_nNextChatTS) {
                  console.log("Next request in past");
                  return;
                }
                (this.m_nFromFirstRequestMS +=
                  p.next_request - this.m_nNextChatTS),
                  (this.m_nNextChatTS = p.next_request),
                  (wi =
                    this.m_tsFirstRequest +
                    this.m_nFromFirstRequestMS -
                    performance.now() +
                    this.m_nNudgeFactorMS);
              }
              this.m_bReconnecting && (this.m_bReconnecting = !1),
                (this.m_nLastSleepMS = wi),
                wi < 0 && (wi = 0),
                this.m_chatScheduledFunc?.Schedule(wi, this.RequestLoop);
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
                (this.m_nNudgeFactorMS += xi),
                this.m_cConsecutiveErrors >= Mi)
              ) {
                if (this.m_tsFirstRequest == null) {
                  this.m_rgChatMessages.push({
                    type: W.X8.Error,
                    msg: (0, Rr.we)("#BroadcastChat_UnableToJoinChat"),
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
              this.m_chatScheduledFunc?.Schedule(zi, this.RequestLoop);
            }
          }
          GetUserEmoticons() {
            return this.m_regexUserEmoticons;
          }
          SetOwnedEmoticons(r) {
            let t = [];
            for (let p = 0; p < r.length; p++) {
              let nr = r[p];
              nr.length >= 2 && nr[0] == ":"
                ? t.push(nr.substr(1, nr.length - 2))
                : t.push(nr);
            }
            let l = ":(" + t.join("|") + "):";
            this.m_regexUserEmoticons = new RegExp(l, "g");
          }
          async UpdateBroadcastChatModerator(r, t, l) {
            {
              const p = new FormData();
              p.append("broadcaststeamid", this.m_ulBroadcastSteamID),
                p.append("moderatorsteamid", r),
                p.append("bAdd", t ? "1" : "0"),
                p.append("sessionid", (0, ui.KC)());
              try {
                await Wr().post(
                  `${ui.TS.CHAT_BASE_URL}broadcast/ajaxupdatechannelmod`,
                  p,
                ),
                  this.m_mapBroadcastModeratorUsers.set(r, t);
                const nr = (0, Rr.we)(
                  t
                    ? "#BroadcastChat_AddedModerator"
                    : "#BroadcastChat_RemovedModerator",
                  l,
                );
                this.m_rgChatMessages.push({
                  type: W.X8.Notification,
                  msg: nr,
                });
              } catch {
                const nr = (0, Rr.we)(
                  t
                    ? "#BroadcastChat_AddModeratorFailed"
                    : "#BroadcastChat_RemoveModeratorFailed",
                  l,
                );
                this.m_rgChatMessages.push({ type: W.X8.Error, msg: nr });
              }
            }
          }
          async UpdateUserChatBan(r, t, l, p, nr, Vr) {
            const wi = this.m_ulBroadcastSteamID,
              di = this.m_strUserSteamID;
            if (this.m_ulBroadcastChannelID) {
              const ti = U.w.Init(Lr);
              ti.SetBodyFields({
                broadcast_channel_id: this.m_ulBroadcastChannelID,
                chatter_steamid: r,
                duration: l * 3600,
                permanent: p,
                undo: Vr,
              }),
                await si.AddChatBan(
                  this.m_steamInterface.GetServiceTransport(),
                  ti,
                );
            } else {
              const ti = new FormData();
              ti.append("broadcaststeamid", wi),
                ti.append("issuersteamid", di),
                ti.append("chattersteamid", r),
                ti.append("bantype", t),
                ti.append("duration", l.toString()),
                ti.append("perm", p ? "1" : "0"),
                ti.append("sessionid", (0, ui.KC)());
              try {
                await Wr().post(
                  `${ui.TS.CHAT_BASE_URL}broadcast/ajaxupdateusermute`,
                  ti,
                ),
                  t == A.sW.rx
                    ? delete this.m_mapMutedUsers[r]
                    : (this.m_mapMutedUsers[r] = nr);
              } catch {
                console.log("Failed to update mute for " + nr);
              }
            }
          }
          async MuteUserForSession(r, t) {
            if (r == this.m_strUserSteamID || this.m_ulBroadcastSteamID == r)
              return;
            let l = this.m_ulBroadcastSteamID == this.m_strUserSteamID;
            if (!this.m_mapMutedUsers[r]) {
              this.m_mapMutedUsers[r] = t;
              try {
                const p = U.w.Init(A.hW);
                p.SetBodyFields({
                  chat_id: this.m_ulChatID,
                  user_steamid: r,
                  muted: !0,
                }),
                  await A.DK.MuteBroadcastChatUser(
                    this.m_steamInterface.GetServiceTransport(),
                    p,
                  );
              } catch {
                l &&
                  (this.m_rgChatMessages.push({
                    type: W.X8.Error,
                    msg: (0, Rr.we)("#BroadcastChat_UserMuteFailed", t),
                    client_ts: Number(new Date()),
                    instance_id: this.m_unInstanceID,
                    in_game: !1,
                    persona_name: "",
                    steamid: "",
                  }),
                  delete this.m_mapMutedUsers[r]);
              }
            }
            l ||
              this.m_rgChatMessages.push({
                type: W.X8.Notification,
                msg: (0, Rr.we)("#BroadcastChat_UserMutedLocal", t),
                client_ts: Number(new Date()),
                instance_id: this.m_unInstanceID,
                in_game: !1,
                persona_name: "",
                steamid: "",
              });
          }
          async UnmuteUserForSession(r, t) {
            if (r == this.m_strUserSteamID) return;
            if (
              (this.m_mapMutedUsers[r] && delete this.m_mapMutedUsers[r],
              this.m_ulBroadcastSteamID == this.m_strUserSteamID)
            )
              try {
                const p = U.w.Init(A.hW);
                p.SetBodyFields({
                  chat_id: this.m_ulChatID,
                  user_steamid: r,
                  muted: !1,
                }),
                  await A.DK.MuteBroadcastChatUser(
                    this.m_steamInterface.GetServiceTransport(),
                    p,
                  ),
                  this.m_rgChatMessages.push({
                    type: W.X8.Notification,
                    msg: (0, Rr.we)("#BroadcastChat_UserUnmutedLocal", t),
                    client_ts: Number(new Date()),
                    instance_id: this.m_unInstanceID,
                    in_game: !1,
                    persona_name: "",
                    steamid: "",
                  });
              } catch {
                this.m_rgChatMessages.push({
                  type: W.X8.Error,
                  msg: (0, Rr.we)("#BroadcastChat_UserUnmuteFailed", t),
                  client_ts: Number(new Date()),
                  instance_id: this.m_unInstanceID,
                  in_game: !1,
                  persona_name: "",
                  steamid: "",
                });
              }
            else
              this.m_rgChatMessages.push({
                type: W.X8.Notification,
                msg: (0, Rr.we)("#BroadcastChat_UserUnmutedLocal", t),
                client_ts: Number(new Date()),
                instance_id: this.m_unInstanceID,
                in_game: !1,
                persona_name: "",
                steamid: "",
              });
          }
          RemoveUserMessagesLocal(r) {
            this.m_rgChatMessages = this.m_rgChatMessages.filter(
              (t) => t.steamid !== r,
            );
          }
          async RemoveUserMessagesServer(r, t) {
            if (r != this.m_strUserSteamID)
              try {
                const l = U.w.Init(A.ku);
                l.SetBodyFields({ chat_id: this.m_ulChatID, user_steamid: r }),
                  await A.DK.RemoveUserChatText(
                    this.m_steamInterface.GetServiceTransport(),
                    l,
                  );
              } catch {
                this.m_rgChatMessages.push({
                  type: W.X8.Error,
                  msg: (0, Rr.we)("#BroadcastChat_RemoveMessagesFailed", t),
                  client_ts: Number(new Date()),
                  instance_id: this.m_unInstanceID,
                  in_game: !1,
                  persona_name: "",
                  steamid: "",
                });
              }
          }
          async UpdateChatMessageFlair(r) {
            const t = U.w.Init(A.Mn);
            t.SetBodyFields({
              chat_id: this.m_ulChatID,
              flair: `^${this.m_strFlairGroupID}^:${r}:`,
            }),
              await A.DK.UpdateChatMessageFlair(
                this.m_steamInterface.GetServiceTransport(),
                t,
              );
          }
          IsUserMutedLocally(r) {
            return !!this.m_mapMutedUsers[r];
          }
          BIsUserBroadcastModerator(r) {
            return this.m_mapBroadcastModeratorUsers.has(r);
          }
          IsUserBroadcaster(r) {
            return r === this.m_ulBroadcastSteamID;
          }
          SyncChat() {
            (this.m_tsFirstRequest = null),
              (this.m_nFromFirstRequestMS = 0),
              (this.m_nNextChatTS = 0),
              (this.m_rgChatMessages = []);
          }
        }
        ai([Y.sH], bi.prototype, "m_mapChannelModeratorUsers", 2),
          ai([Y.sH], bi.prototype, "m_mapBroadcastModeratorUsers", 2),
          ai([Y.sH], bi.prototype, "m_nRateLimitSeconds", 2),
          ai([Y.sH], bi.prototype, "m_bRateLimited", 2),
          ai([Y.sH], bi.prototype, "m_rgChatMessages", 2),
          ai([Y.sH], bi.prototype, "m_latestAnnouncement", 2),
          ai([yi.o], bi.prototype, "FetchChatModerators", 1),
          ai([yi.o], bi.prototype, "RequestLoop", 1),
          ai([yi.o], bi.prototype, "MuteUserForSession", 1);
      },
      37656: (ii, fi, f) => {
        "use strict";
        f.d(fi, { w: () => T });
        var s = f(41735),
          Wr = f.n(s),
          Y = f(14947),
          W = f(65946),
          Sr = f(90626),
          U = f(27066),
          Cr = f(8323),
          rr = f(54963),
          li = f(3166),
          z = Object.defineProperty,
          Hr = Object.getOwnPropertyDescriptor,
          A = (j, g, m, q) => {
            for (
              var B = q > 1 ? void 0 : q ? Hr(g, m) : g, L = j.length - 1, y;
              L >= 0;
              L--
            )
              (y = j[L]) && (B = (q ? y(g, m, B) : y(B)) || B);
            return q && B && z(g, m, B), B;
          };
        const o = class Wi {
          constructor() {
            (0, Y.Gn)(this);
          }
          giveaway_id = void 0;
          seconds_until_drawing = void 0;
          rtime_start = void 0;
          rtime_end = void 0;
          closed = void 0;
          winner_count = void 0;
          BIsValid() {
            return this.giveaway_id !== void 0 && this.giveaway_id !== null;
          }
          BStarted() {
            return this.BIsValid()
              ? this.seconds_until_drawing !== void 0 &&
                this.seconds_until_drawing >= 0
                ? !0
                : this.winner_count !== void 0 && this.winner_count > 0
              : !1;
          }
          clone() {
            const g = new Wi();
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
        A([Y.sH], o.prototype, "giveaway_id", 2),
          A([Y.sH], o.prototype, "seconds_until_drawing", 2),
          A([Y.sH], o.prototype, "rtime_start", 2),
          A([Y.sH], o.prototype, "rtime_end", 2),
          A([Y.sH], o.prototype, "closed", 2),
          A([Y.sH], o.prototype, "winner_count", 2);
        let n = o;
        const i = class hi {
          constructor() {
            (0, Y.Gn)(this);
          }
          m_mapGiveawayIDToNextDrawInfo = new Map();
          m_mapGiveawayIDAndInstanceToNextDrawInfo = new Map();
          m_bLoadedFromConfig = !1;
          m_mapNextDrawChangeCallback = new Map();
          GetKey(g, m) {
            return g + "_" + m;
          }
          GetInfoByInstance(g, m) {
            return this.m_mapGiveawayIDAndInstanceToNextDrawInfo.get(
              this.GetKey(g, m),
            );
          }
          GetNextDrawChangeCallback(g) {
            let m = this.m_mapNextDrawChangeCallback.get(g);
            return (
              m ||
                ((m = new Cr.lu()), this.m_mapNextDrawChangeCallback.set(g, m)),
              m
            );
          }
          CopyToGiveaway(g, m) {
            m.closed != g.closed && (m.closed = g.closed),
              m.giveaway_id != g.giveaway_id && (m.giveaway_id = g.giveaway_id),
              m.rtime_start != g.rtime_start && (m.rtime_start = g.rtime_start),
              m.rtime_end != g.rtime_end && (m.rtime_end = g.rtime_end),
              m.winner_count != g.winner_count &&
                (m.winner_count = g.winner_count),
              m.seconds_until_drawing != g.seconds_until_drawing &&
                (m.seconds_until_drawing = g.seconds_until_drawing);
          }
          async ReloadGiveaway(g, m) {
            if (!g) return null;
            let q = li.TS.STORE_BASE_URL + "prizes/nextdraw/" + g,
              B = { origin: self.origin };
            const L = await Wr().get(q, { params: B }),
              y = (0, Y.h5)(() => {
                let S = this.m_mapGiveawayIDToNextDrawInfo.get(g);
                if (
                  (S ||
                    ((S = new n()),
                    this.m_mapGiveawayIDToNextDrawInfo.set(g, S)),
                  this.CopyToGiveaway(L.data, S),
                  m !== void 0)
                ) {
                  const R = this.GetKey(g, m);
                  let tr = this.m_mapGiveawayIDAndInstanceToNextDrawInfo.get(R);
                  tr ||
                    ((tr = new n()),
                    this.m_mapGiveawayIDAndInstanceToNextDrawInfo.set(R, tr)),
                    this.CopyToGiveaway(L.data, tr);
                }
                return S;
              });
            return this.GetNextDrawChangeCallback(g).Dispatch(y), y;
          }
          static s_Singleton;
          static Get() {
            return (
              hi.s_Singleton ||
                ((hi.s_Singleton = new hi()), hi.s_Singleton.Init()),
              hi.s_Singleton
            );
          }
          Init() {
            if (!this.m_bLoadedFromConfig) {
              let g = (0, li.Tc)("giveawaynextdraw", "application_config");
              if (g && g.giveaway_id) {
                let m = new n();
                this.CopyToGiveaway(g, m),
                  this.m_mapGiveawayIDToNextDrawInfo.set(g.giveaway_id, m);
              }
              this.m_bLoadedFromConfig = !0;
            }
          }
        };
        A([Y.sH], i.prototype, "m_mapGiveawayIDToNextDrawInfo", 2),
          A([Y.XI], i.prototype, "CopyToGiveaway", 1);
        let cr = i;
        const qr = class Oi {
          m_intervalID;
          m_intervalCountDownID;
          static s_GlobalInstance = 0;
          m_myInstanceNumber = 0;
          constructor() {
            (this.m_myInstanceNumber = Oi.s_GlobalInstance),
              (Oi.s_GlobalInstance += 1);
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
          SetupRefreshDataInterval(g, m) {
            if ((this.ClearRefreshInterval(), !g.closed)) {
              let B =
                g.seconds_until_drawing !== void 0 &&
                g.seconds_until_drawing <= 0 &&
                g.winner_count == 0
                  ? 60 * 1e3
                  : 5 * 1e3;
              this.m_intervalID = window.setInterval(m, B);
            }
          }
          SetupCountDown(g, m) {
            g !== void 0 &&
              g > 0 &&
              (this.m_intervalCountDownID = window.setInterval(m, 1e3));
          }
        };
        A([U.o], qr.prototype, "ClearRefreshInterval", 1),
          A([U.o], qr.prototype, "ClearCountDown", 1),
          A([U.o], qr.prototype, "SetupRefreshDataInterval", 1),
          A([U.o], qr.prototype, "SetupCountDown", 1);
        let _r = qr;
        function ei(j, g) {
          const m = cr.Get().GetInfoByInstance(j, g.m_myInstanceNumber);
          !m ||
            m.seconds_until_drawing === void 0 ||
            ((m.seconds_until_drawing -= 1),
            m.seconds_until_drawing == 0 && g.ClearCountDown());
        }
        function ar(j, g) {
          const m = cr.Get().GetInfoByInstance(j, g.m_myInstanceNumber);
          m &&
            m.BIsValid() &&
            m.seconds_until_drawing !== void 0 &&
            m.seconds_until_drawing <= 0 &&
            !m.closed &&
            (g.ClearCountDown(),
            cr
              .Get()
              .ReloadGiveaway(j, g.m_myInstanceNumber)
              .then((q) => {
                q && g.SetupCountDown(q.seconds_until_drawing, () => ei(j, g));
              }));
        }
        function T(j) {
          const [g] = (0, Sr.useState)(new _r()),
            m = (0, rr.CH)();
          (0, Sr.useEffect)(
            () => (
              cr
                .Get()
                .ReloadGiveaway(j, g.m_myInstanceNumber)
                .then((S) => {
                  S &&
                    (g.SetupRefreshDataInterval(S, () => ar(j, g)),
                    g.SetupCountDown(S.seconds_until_drawing, () => ei(j, g)),
                    m());
                }),
              () => {
                g.ClearRefreshInterval(), g.ClearCountDown();
              }
            ),
            [g, j, m],
          );
          const q = cr.Get().GetInfoByInstance(j, g.m_myInstanceNumber),
            [B, L, y] = (0, W.q3)(() => [
              q?.winner_count,
              q?.closed,
              q?.seconds_until_drawing,
            ]);
          return {
            bLoadingGiveawayInfo:
              !q || q.giveaway_id == null || !q.BStarted() || B === void 0,
            winner_count: B,
            closed: L,
            seconds_until_drawing: y,
          };
        }
      },
      86390: (ii, fi, f) => {
        "use strict";
        f.d(fi, { vg: () => n });
        var s = f(7850),
          Wr = f(90626),
          Y = f(88003),
          W = f(18210),
          Sr = f(3166),
          U = f(87242),
          Cr = f(42780),
          rr = f(94276),
          li = f(62179),
          z = f(77008),
          Hr = f(2801);
        function A(qr) {
          return (0, s.jsx)(Y.x_, {
            onEscKeypress: qr.closeModal,
            bDisableBackgroundDismiss: !0,
            children: (0, s.jsx)(cr, {
              redirectURL: qr.redirectURL,
              guestOption: qr.guestOption,
            }),
          });
        }
        function o(qr) {
          const { redirectURL: _r = window.location.href } = qr;
          return jsx(SimpleModal, {
            active: !0,
            children: jsx(A, { redirectURL: _r }),
          });
        }
        function n() {
          (0, Y.pg)(
            (0, s.jsx)(A, {
              ownerWin: window,
              redirectURL: window.location.href,
            }),
            window,
            { strTitle: (0, W.we)("#Login_SignInTitle") },
          );
        }
        function i(qr, _r) {
          ShowModalDialog(
            jsx(A, { ownerWin: window, redirectURL: qr, guestOption: _r }),
            window,
            { strTitle: Localize("#Login_SignInTitle") },
          );
        }
        function cr(qr) {
          const { redirectURL: _r, guestOption: ei } = qr,
            [ar] = (0, Wr.useState)(
              new li.x(
                new z.D(Sr.TS.WEBAPI_BASE_URL),
              ).GetAnonymousServiceTransport(),
            ),
            [T, j] = (0, Wr.useState)(!1),
            g = (m) => {
              m == U.wI.k_PrimaryDomainFail
                ? j(!0)
                : window.location.assign(_r);
            };
          return (0, s.jsx)("div", {
            children: T
              ? (0, s.jsx)(Cr.Fn, {})
              : (0, s.jsx)(Cr.YN, {
                  autoFocus: !0,
                  transport: ar,
                  platform: rr.SS.tS,
                  onComplete: g,
                  redirectUrl: _r,
                  theme: "modal",
                  children: ei && (0, s.jsx)(Cr.Mk, { redirectURL: _r }),
                }),
          });
        }
      },
      53120: (ii) => {
        ii.exports = {
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
      63508: (ii) => {
        ii.exports = {
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
      8287: (ii) => {
        ii.exports = {
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
      15527: (ii) => {
        ii.exports = {
          BroadcastPlayerLite: "SAxf3Rqn792kM6c4U_vx5",
          BroadcastPlayerLiteVideo: "yCd0zjymzfw3HkVm-1YwX",
          BroadcastContext: "_3TnYLKMweBMIC69qFU6OJj",
          BroadcastPlaceholderImg: "_3hxn99MT14hFUCrUp6zbsf",
        };
      },
      33543: (ii) => {
        ii.exports = {
          narrowWidth: "500px",
          FriendsListInsetShadowCtn: "_1qeW35auMlJ5pJVNtBC-bF",
          FriendListInsetShadowTop: "_1osHa9KHOmdCDNrA232z4N",
          FriendListInsetShadowBottom: "_2OoTJwlWvzvAysWOOEQaXS",
        };
      },
    },
  ]);
})();
