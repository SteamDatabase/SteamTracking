/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(() => {
  (self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
    [58138],
    {
      10635: (A, xe, m) => {
        "use strict";
        m.r(xe), m.d(xe, { ProfileEditRoutes: () => pr, default: () => Ns });
        var t = m(7850);
        let R = { ProfileURL: "" };
        var z = m(41735),
          y = m.n(z),
          d = m(14947),
          G = m(99412),
          ie = m(84110),
          V = m(85528),
          C = m(75844),
          u = m(90626),
          l = m(18210),
          oe = m(88363),
          j = m(5858),
          h = m(36707),
          B = m(36118),
          O = m(70342),
          N = m.n(O),
          J = m(75975);
        const ve = (0, C.PA)((r) => {
          const { persona: e, className: i, ...a } = r;
          if (!e || !e.is_online) return null;
          const s = e.HasStateFlag(oe.R$),
            o = e.HasStateFlag(oe.hs),
            n = e.m_eGamingDeviceType == G.LS$,
            p = e.m_eGamingDeviceType == G.ppM,
            v = !n && !p && !o && e.HasStateFlag(oe.sr);
          return (0, t.jsxs)(u.Fragment, {
            children: [
              s &&
                (0, t.jsx)("div", {
                  className: (0, h.A)(
                    i,
                    N().PersonaStatusIcon,
                    N().MobilePhoneIcon,
                    (0, j.rO)(e),
                  ),
                  title: (0, l.we)("#Platform_Hint_Mobile"),
                  ...a,
                  children: (0, t.jsx)(J.rf, {}),
                }),
              o &&
                (0, t.jsx)("div", {
                  className: (0, h.A)(
                    i,
                    N().PersonaStatusIcon,
                    N().VRIcon,
                    (0, j.rO)(e),
                  ),
                  title: (0, l.we)("#Platform_Hint_VR"),
                  ...a,
                  children: (0, t.jsx)(B.MUh, {}),
                }),
              v &&
                (0, t.jsx)("div", {
                  className: (0, h.A)(
                    i,
                    N().PersonaStatusIcon,
                    N().BigPictureIcon,
                    (0, j.rO)(e),
                  ),
                  title: (0, l.we)("#Platform_Hint_BigPicture"),
                  ...a,
                  children: (0, t.jsx)(B.bPr, {}),
                }),
              n &&
                (0, t.jsx)("div", {
                  className: (0, h.A)(
                    i,
                    N().PersonaStatusIcon,
                    N().SteamDeckIcon,
                    (0, j.rO)(e),
                  ),
                  title: (0, l.we)("#Platform_Hint_SteamDeck"),
                  ...a,
                  children: (0, t.jsx)(B.DQe, {}),
                }),
              p &&
                (0, t.jsx)("div", {
                  className: (0, h.A)(
                    i,
                    N().PersonaStatusIcon,
                    N().SteamDeckIcon,
                    (0, j.rO)(e),
                  ),
                  title: (0, l.we)("#Platform_Hint_LegionGoS"),
                  ...a,
                  children: (0, t.jsx)(B.DQe, {}),
                }),
            ],
          });
        });
        var ye = m(56420),
          ne = m.n(ye),
          Me = Object.defineProperty,
          b = Object.getOwnPropertyDescriptor,
          T = (r, e, i, a) => {
            for (
              var s = a > 1 ? void 0 : a ? b(e, i) : e, o = r.length - 1, n;
              o >= 0;
              o--
            )
              (n = r[o]) && (s = (a ? n(e, i, s) : n(s)) || s);
            return a && s && Me(e, i, s), s;
          };
        let H = class extends u.Component {
          static get hoverClass() {
            return ne().hoverParent;
          }
          render() {
            const {
              persona: r,
              animating: e,
              className: i,
              size: a,
              dim: s,
              ...o
            } = this.props;
            let n = "";
            return (
              a == "medium"
                ? (n = ne().Medium)
                : a == "large" && (n = ne().Large),
              (0, t.jsxs)("div", {
                className: (0, h.A)(
                  ne().SnoozeContainer,
                  r.online_state,
                  i,
                  e && ne().animating,
                  n,
                  s && ne().Dim,
                ),
                ...o,
                children: [
                  (0, t.jsx)("div", {
                    "data-text": "Z",
                    className: (0, h.A)(ne().SnoozeZ, ne().Z1),
                    children: "Z",
                  }),
                  (0, t.jsx)("div", {
                    "data-text": "Z",
                    className: (0, h.A)(ne().SnoozeZ, ne().Z2),
                    children: "Z",
                  }),
                  (0, t.jsx)("div", {
                    "data-text": "Z",
                    className: (0, h.A)(ne().SnoozeZ, ne().Z3),
                    children: "Z",
                  }),
                ],
              })
            );
          }
        };
        H = T([C.PA], H);
        var Z = m(85198),
          c = m.n(Z),
          q = m(46943),
          $ = m(84676),
          we = m(36174),
          f = m(3166),
          g = Object.defineProperty,
          P = Object.getOwnPropertyDescriptor,
          F = (r, e, i, a) => {
            for (
              var s = a > 1 ? void 0 : a ? P(e, i) : e, o = r.length - 1, n;
              o >= 0;
              o--
            )
              (n = r[o]) && (s = (a ? n(e, i, s) : n(s)) || s);
            return a && s && g(e, i, s), s;
          };
        const I = we.Kp.PerMinute;
        class M {
          m_accountid;
          m_bLoadingData = !1;
          m_rtLastLoad = 0;
          m_communityData = void 0;
          constructor(e) {
            (0, d.Gn)(this), (this.m_accountid = e);
          }
          get community_data() {
            return this.m_communityData;
          }
          get community_data_ready() {
            return this.m_communityData !== void 0;
          }
          get player_level() {
            return this.m_communityData && this.m_communityData.level;
          }
          get player_level_class() {
            return this.m_communityData && this.m_communityData.level_class;
          }
          get player_badge() {
            return this.m_communityData && this.m_communityData.favorite_badge;
          }
          get profile_background() {
            return (
              this.m_communityData && this.m_communityData.profile_background
            );
          }
          Reload() {
            (this.m_rtLastLoad = 0), this.EnsureCommunityDataLoaded();
          }
          EnsureCommunityDataLoaded() {
            const e = this.m_communityData || this.m_bLoadingData,
              i = Date.now() > this.m_rtLastLoad + I * 1e3;
            (!e || (i && !this.m_bLoadingData)) &&
              ((this.m_bLoadingData = !0),
              y()
                .get(
                  f.TS.CHAT_BASE_URL +
                    "miniprofile/" +
                    this.m_accountid +
                    "/json/?origin=" +
                    (0, f.xv)(),
                )
                .then((a) => {
                  let s = a.data;
                  typeof s.level == "number" &&
                    typeof s.level_class == "string" &&
                    (this.m_communityData = s),
                    (this.m_bLoadingData = !1),
                    (this.m_rtLastLoad = Date.now());
                })
                .catch((a) => {
                  this.m_bLoadingData = !1;
                }));
          }
        }
        F([d.sH], M.prototype, "m_communityData", 2);
        var k = Object.defineProperty,
          _e = Object.getOwnPropertyDescriptor,
          Ee = (r, e, i, a) => {
            for (
              var s = a > 1 ? void 0 : a ? _e(e, i) : e, o = r.length - 1, n;
              o >= 0;
              o--
            )
              (n = r[o]) && (s = (a ? n(e, i, s) : n(s)) || s);
            return a && s && k(e, i, s), s;
          };
        let De = class extends u.Component {
          render() {
            const { community_data: r } = this.props;
            let e = r && r.favorite_badge;
            return e
              ? (0, t.jsxs)("div", {
                  className: (0, h.A)(
                    c().miniProfileFeaturedContainer,
                    this.props.className,
                  ),
                  children: [
                    (0, t.jsx)("div", {
                      className: c().favoriteBadgeIcon,
                      children: (0, t.jsx)("img", {
                        src: e.icon,
                        className: c().badgeIcon,
                      }),
                    }),
                    (0, t.jsxs)("div", {
                      className: (0, h.A)(
                        c().featuredLabels,
                        c().favoriteBadgeDescription,
                      ),
                      children: [
                        (0, t.jsx)("div", {
                          className: c().featuredTitle,
                          children: e.name,
                        }),
                        (0, t.jsx)("div", {
                          className: c().featuredSubTitle,
                          children: (0, l.we)("#Hover_BadgeXP", e.xp),
                        }),
                      ],
                    }),
                  ],
                })
              : null;
          }
        };
        De = Ee([C.PA], De);
        let Oe = class extends u.Component {
          render() {
            const { community_data: r, className: e } = this.props;
            return r
              ? (0, t.jsxs)("div", {
                  className: (0, h.A)(c().miniProfileFeaturedContainer, e),
                  children: [
                    (0, t.jsx)("div", {
                      className: r.level_class,
                      children: (0, t.jsx)("span", {
                        className: c().friendPlayerLevelNum,
                        children: r.level,
                      }),
                    }),
                    (0, t.jsx)("div", {
                      className: c().featuredLabels,
                      children: (0, t.jsx)("div", {
                        className: c().featuredTitle,
                        children: (0, l.we)("#Hover_SteamLevel") + " ",
                      }),
                    }),
                  ],
                })
              : null;
          }
        };
        Oe = Ee([C.PA], Oe);
        let Rt = class extends u.Component {
          render() {
            let r = this.props.persona,
              e = this.props.community_data;
            return (0, t.jsxs)("div", {
              className: (0, h.A)(
                c().miniProfileGameContainer,
                this.props.className,
              ),
              children: [
                e?.in_game?.logo &&
                  (0, t.jsx)("img", {
                    className: c().gameLogo,
                    src: e.in_game.logo,
                  }),
                (0, t.jsxs)("div", {
                  className: (0, h.A)(
                    c().gameContent,
                    c().persona,
                    c().ingame,
                    c().ellipsis,
                  ),
                  children: [
                    (0, t.jsx)("div", {
                      className: c().gameState,
                      children: (0, l.we)(
                        r.is_in_nonsteam_game
                          ? "#PersonaStateInNonSteamGame"
                          : "#PersonaStateInGame",
                      ),
                    }),
                    this.props.persona.GetCurrentGameName(),
                    this.props.persona.HasCurrentGameRichPresence() &&
                      (0, t.jsx)("div", {
                        className: c().richPresence,
                        children:
                          this.props.persona.GetCurrentGameRichPresence(),
                      }),
                    this.props.in_game_section_additional,
                  ],
                }),
              ],
            });
          }
        };
        Rt = Ee([C.PA], Rt);
        function Zr(r) {
          const { appID: e } = r,
            [i] = (0, $.t7)(e, { include_assets_without_overrides: !0 }),
            a = i?.GetAssetsWithoutOverrides()?.GetHeaderURL();
          return a
            ? (0, t.jsx)("img", { className: c().gameLogo, src: a })
            : null;
        }
        let Nt = class extends u.Component {
          render() {
            let r,
              e,
              i = this.props.broadcast_description;
            return (
              i && ((r = (0, l.we)("#PersonaStateWatchingBroadcast")), (e = i)),
              (0, t.jsxs)("div", {
                className: (0, h.A)(
                  c().miniProfileGameContainer,
                  this.props.className,
                ),
                children: [
                  this.props.persona.m_broadcastAppId &&
                    (0, t.jsx)(Zr, {
                      appID: this.props.persona.m_broadcastAppId,
                    }),
                  (0, t.jsxs)("div", {
                    className: (0, h.A)(
                      c().gameContent,
                      c().persona,
                      c().watchingbroadcast,
                      c().ellipsis,
                    ),
                    children: [
                      (0, t.jsx)("div", {
                        className: c().gameState,
                        children: r,
                      }),
                      e &&
                        (0, t.jsx)("div", {
                          className: c().richPresence,
                          children: e,
                        }),
                      (0, t.jsx)("div", {
                        className: c().watchingbroadcastThumbnail,
                        children: this.props.broadcast_thumbnail,
                      }),
                    ],
                  }),
                ],
              })
            );
          }
        };
        Nt = Ee([C.PA], Nt);
        let bt = class extends u.Component {
          render() {
            const {
              className: r,
              persona: e,
              data_loader: i,
              community_data_override: a,
              nickname: s,
              is_friend: o,
              is_blocked: n,
              friend_relationship: p,
              broadcast_description: v,
              broadcast_thumbnail: w,
              mutual_friends: D,
              in_game_section_additional: U,
              bottom_section_additional: W,
              ...K
            } = this.props;
            let Pe = i.community_data;
            a && (Pe = { ...Pe, ...a });
            const lt =
              Object.keys((Pe && Pe.profile_background) || {}).length > 0;
            let Bt,
              Qe = c().miniProfileContent;
            e.is_ingame
              ? (Bt = (0, t.jsx)(Rt, {
                  ...this.props,
                  community_data: Pe,
                  className: lt ? c().miniProfileBackdropBlur : void 0,
                }))
              : e.is_watchingbroadcast
                ? (Bt = (0, t.jsx)(Nt, {
                    ...this.props,
                    className: lt ? c().miniProfileBackdropBlur : void 0,
                  }))
                : (Qe += " " + c().notInOrWatchingGame);
            let Et = !0,
              zr = !1,
              Vr = !1;
            o || ((Qe += " " + c().notFriends), (Et = !1)),
              n && ((Qe += " " + c().communicationBlocked), (Vr = !0));
            let bs = s !== void 0,
              Gt = e.is_awayOrSnooze,
              fr;
            return (
              bs
                ? (fr = (0, t.jsxs)("div", {
                    children: [
                      (0, t.jsxs)("div", {
                        className: c().personaAndIcons,
                        children: [
                          (0, t.jsxs)("div", {
                            className: (0, h.A)(c().personaName, c().nickName),
                            children: [
                              (0, t.jsx)("div", {
                                className: c().personaNameLabel,
                                children: this.props.nickname,
                              }),
                              (0, t.jsx)("div", {
                                className: c().playerNicknameBracket,
                                title: (0, l.we)("#isNickname"),
                                children: "*",
                              }),
                            ],
                          }),
                          (0, t.jsx)(ve, { persona: e }),
                        ],
                      }),
                      (0, t.jsxs)("div", {
                        className: (0, h.A)(c().personaName, c().hasNickname),
                        children: [
                          "( ",
                          (0, t.jsx)("div", {
                            className: c().personaNameLabel,
                            children: e.m_strPlayerName,
                          }),
                          " )",
                        ],
                      }),
                    ],
                  }))
                : (fr = (0, t.jsxs)("div", {
                    className: c().personaAndIcons,
                    children: [
                      (0, t.jsx)("div", {
                        className: c().personaName,
                        children: (0, t.jsx)("div", {
                          className: c().personaNameLabel,
                          children: e.m_strPlayerName,
                        }),
                      }),
                      (0, t.jsx)(ve, { persona: e }),
                    ],
                  })),
              this.props.friend_relationship == G.UXi && (zr = !0),
              (0, t.jsx)(u.Fragment, {
                children: (0, t.jsx)(
                  "div",
                  {
                    className: (0, h.A)(this.props.className, c().miniProfile),
                    ...K,
                    children: (0, t.jsxs)("div", {
                      className: Qe,
                      children: [
                        (0, t.jsx)(Xr, { community_data: Pe, persona: e }),
                        (0, t.jsx)("div", {
                          className: c().miniProfileHeader,
                          children: (0, t.jsxs)("div", {
                            className: (0, h.A)(
                              c().miniProfilePlayer,
                              e.online_state,
                              Gt && c().isAway,
                              (0, j.rO)(e),
                            ),
                            children: [
                              (0, t.jsx)(Yr, {
                                persona: this.props.persona,
                                community_data: Pe,
                              }),
                              Gt &&
                                (0, t.jsx)(H, {
                                  persona: e,
                                  animating: !0,
                                  className: c().SnoozeContainer,
                                  size: "large",
                                }),
                              (0, t.jsx)("div", {
                                className: c().playerContent,
                                children: (0, t.jsx)("div", {
                                  className: c().playerName,
                                  children: (0, t.jsxs)("div", {
                                    className: c().persona,
                                    children: [
                                      fr,
                                      Gt &&
                                        (0, t.jsx)("div", {
                                          className: c().awayStatusLabel,
                                          children: (0, l.we)(
                                            "#PersonaStateAway",
                                          ),
                                        }),
                                      !e.is_online &&
                                        (0, t.jsx)("div", {
                                          className: c().awayStatusLabel,
                                          children:
                                            this.props.persona.GetLocalizedOnlineStatus(),
                                        }),
                                      e.online_state == "online" &&
                                        !Gt &&
                                        (0, t.jsx)("div", {
                                          className: c().awayStatusLabel,
                                          children: (0, l.we)(
                                            "#PersonaStateOnline",
                                          ),
                                        }),
                                      !Et &&
                                        (0, t.jsx)("div", {
                                          className: c().miniProfileNotFriends,
                                          children: zr
                                            ? (0, l.we)(
                                                "#Friend_Menu_NotAFriendRequesting",
                                              )
                                            : (0, l.we)(
                                                "#Friend_Menu_NotAFriendLabel",
                                              ),
                                        }),
                                      Vr &&
                                        (0, t.jsx)("div", {
                                          className: c().miniProfileBlocked,
                                          children: (0, l.we)(
                                            "#PersonaStateBlocked",
                                          ),
                                        }),
                                    ],
                                  }),
                                }),
                              }),
                            ],
                          }),
                        }),
                        Bt,
                        (0, t.jsxs)("div", {
                          className: (0, h.A)(
                            c().miniProfileBottom,
                            lt && c().miniProfileBackdropBlur,
                          ),
                          children: [
                            (0, t.jsx)(De, { community_data: Pe }),
                            (0, t.jsx)(Oe, { community_data: Pe }),
                          ],
                        }),
                        W,
                        (0, t.jsx)("div", {
                          className: c().mutualFriends,
                          children: this.props.mutual_friends,
                        }),
                      ],
                    }),
                  },
                  e.GetAccountID(),
                ),
              })
            );
          }
        };
        bt = Ee([C.PA], bt);
        const Xr = ({ community_data: r, persona: e }) => {
            if (r && r.profile_background) {
              const { image: i, ...a } = r.profile_background;
              if (Object.keys(a).length)
                return (0, t.jsx)(
                  "div",
                  {
                    className: c().miniProfileVideoBackgroundContainer,
                    children: (0, t.jsx)("video", {
                      className: c().miniProfileVideoBackground,
                      playsInline: !0,
                      muted: !0,
                      autoPlay: !0,
                      loop: !0,
                      poster: i,
                      children: Object.keys(a).map((s) =>
                        (0, t.jsx)("source", { src: a[s], type: s }, s),
                      ),
                    }),
                  },
                  a["video/webm"] || a["video/mp4"] || "image",
                );
              if (i)
                return (0, t.jsx)("div", {
                  className: c().miniProfileVideoBackgroundContainer,
                  children: (0, t.jsx)("img", {
                    className: c().miniProfileVideoBackground,
                    src: i,
                  }),
                });
            }
            return (0, t.jsx)("div", {
              className: c().miniProfileBackground,
              children: (0, t.jsx)("img", {
                className: c().miniProfileBackgroundBlur,
                src: e.avatar_url,
              }),
            });
          },
          Yr = (r) => {
            const { persona: e, community_data: i, size: a, ...s } = r,
              o =
                i &&
                i.avatar_frame &&
                (0, t.jsx)("img", {
                  src: i.avatar_frame,
                  className: c().Frame,
                }),
              n = i && i.animated_avatar,
              p = {
                size: a || "X-Large",
                statusPosition: "bottom",
                className: c().playerAvatar,
              };
            return n
              ? (0, t.jsx)(q.Ul, { ...s, strAvatarURL: n, ...p, children: o })
              : (0, t.jsx)(q.i8, { persona: e, ...s, ...p, children: o });
          };
        var Lt = m(76559),
          Jr = m(28462),
          L = m(72604),
          me = m(35038),
          vr = m(98112),
          $r = Object.defineProperty,
          ei = Object.getOwnPropertyDescriptor,
          ti = (r, e, i, a) => {
            for (
              var s = a > 1 ? void 0 : a ? ei(e, i) : e, o = r.length - 1, n;
              o >= 0;
              o--
            )
              (n = r[o]) && (s = (a ? n(e, i, s) : n(s)) || s);
            return a && s && $r(e, i, s), s;
          };
        class _r {
          m_SteamInterface;
          m_rgPreviousAvatars = [];
          m_promiseLoading;
          constructor(e) {
            (0, d.Gn)(this), (this.m_SteamInterface = e);
          }
          GetAvatarHistory() {
            return this.StartLoadIfNeeded(), this.m_rgPreviousAvatars || [];
          }
          RefreshAvatarHistory() {
            this.m_promiseLoading = this.LoadAvatarHistory();
          }
          async BWaitForLoad() {
            return this.StartLoadIfNeeded(), this.m_promiseLoading;
          }
          StartLoadIfNeeded() {
            this.m_promiseLoading ||
              (this.m_promiseLoading = this.LoadAvatarHistory());
          }
          async LoadAvatarHistory() {
            const e = me.w.Init(vr.Vc);
            e.SetBodyFields({
              steamid: f.iA.steamid,
              filter_user_uploaded_only: !0,
            });
            let i = await vr.BE.GetAvatarHistory(
              this.m_SteamInterface.GetServiceTransport(),
              e,
            );
            return (
              i.GetEResult() == L.R
                ? ((this.m_rgPreviousAvatars = []),
                  i
                    .Body()
                    .toObject()
                    .avatars.map((a) => {
                      this.m_rgPreviousAvatars.push({
                        avatar_hash: a.avatar_sha1,
                        timestamp: a.timestamp,
                      });
                    }))
                : console.error(
                    `Error when calling CommunityService.GetAvatarHistory: EResult=${i.GetEResult()}`,
                  ),
              !!this.m_rgPreviousAvatars
            );
          }
          async SetPreviousAvatar(e) {
            let i = e.GetAvatarHash();
            for (let a = 0; a < this.m_rgPreviousAvatars.length; ++a)
              if (this.m_rgPreviousAvatars[a].avatar_hash == i)
                return this.SelectAvatar(e, i);
            return L.p;
          }
          async SelectAvatar(e, i) {
            let a = new FormData();
            a.append("sessionid", (0, f.KC)()),
              a.append("json", "1"),
              a.append("sha", i);
            let o =
              (
                await y().post(
                  `${f.TS.COMMUNITY_BASE_URL}actions/selectPreviousAvatar`,
                  a,
                )
              ).data.success || L.zi;
            return o == L.R && e.CommitAvatarHash(), o;
          }
        }
        ti([d.sH], _r.prototype, "m_rgPreviousAvatars", 2);
        var ri = Object.defineProperty,
          ii = Object.getOwnPropertyDescriptor,
          ai = (r, e, i, a) => {
            for (
              var s = a > 1 ? void 0 : a ? ii(e, i) : e, o = r.length - 1, n;
              o >= 0;
              o--
            )
              (n = r[o]) && (s = (a ? n(e, i, s) : n(s)) || s);
            return a && s && ri(e, i, s), s;
          };
        class gr {
          constructor() {
            (0, d.Gn)(this);
          }
          m_AvatarData = void 0;
          m_promiseLoading;
          GetRecentGameAvatars() {
            return (
              this.StartLoadIfNeeded(),
              (this.m_AvatarData && this.m_AvatarData.rgRecentGames) || []
            );
          }
          GetOwnedGameAvatars() {
            return (
              this.StartLoadIfNeeded(),
              (this.m_AvatarData && this.m_AvatarData.rgOwnedGames) || []
            );
          }
          GetOtherGameAvatars() {
            return (
              this.StartLoadIfNeeded(),
              (this.m_AvatarData && this.m_AvatarData.rgOtherGames) || []
            );
          }
          async BWaitForLoad() {
            return this.StartLoadIfNeeded(), this.m_promiseLoading;
          }
          StartLoadIfNeeded() {
            this.m_promiseLoading ||
              (this.m_promiseLoading = this.LoadOGGAvatars());
          }
          async LoadOGGAvatars() {
            let e = await y().get(
              `${f.TS.COMMUNITY_BASE_URL}actions/GameAvatars/?json=1&l=${f.TS.LANGUAGE}`,
            );
            return (this.m_AvatarData = e.data || null), !!e.data;
          }
          async SetPlayerOGGAvatar(e) {
            let i = oi(this),
              a,
              s = e.GetAvatarHash();
            for (; (a = i.next().value); ) {
              let o = a.avatars.find((n) => n.avatar_hash == s);
              if (o) return this.SelectGameAvatar(e, a.appid, o.ordinal);
            }
            return L.p;
          }
          async SelectGameAvatar(e, i, a) {
            let s = new FormData();
            s.append("sessionid", (0, f.KC)()),
              s.append("json", "1"),
              s.append("selectedAvatar", "" + a);
            let n =
              (
                await y().post(
                  `${f.TS.COMMUNITY_BASE_URL}ogg/${i}/selectAvatar`,
                  s,
                )
              ).data.success || L.zi;
            return n == L.R && e.CommitAvatarHash(), n;
          }
          UpdateAvatarsForGame(e, i) {
            const a = ["rgRecentGames", "rgOwnedGames", "rgOtherGames"];
            let s = new Set();
            for (const o of a) {
              const n = this.m_AvatarData[o];
              if (!(!n || !Array.isArray(n)))
                for (const p of n) p.appid === e && ((p.avatars = i), s.add(o));
            }
            s.forEach((o) => {
              const n = this.m_AvatarData[o];
              !n || !Array.isArray(n) || (this.m_AvatarData[o] = [...n]);
            });
          }
        }
        ai([d.sH.shallow], gr.prototype, "m_AvatarData", 2);
        function* si(r) {
          for (let e of [
            r.GetRecentGameAvatars(),
            r.GetOwnedGameAvatars(),
            r.GetOtherGameAvatars(),
          ])
            for (let i of e) for (let a of i.avatars) yield a;
        }
        function* oi(r) {
          for (let e of [
            r.GetRecentGameAvatars(),
            r.GetOwnedGameAvatars(),
            r.GetOtherGameAvatars(),
          ])
            for (let i of e) yield i;
        }
        var ni = Object.defineProperty,
          li = Object.getOwnPropertyDescriptor,
          mt = (r, e, i, a) => {
            for (
              var s = a > 1 ? void 0 : a ? li(e, i) : e, o = r.length - 1, n;
              o >= 0;
              o--
            )
              (n = r[o]) && (s = (a ? n(e, i, s) : n(s)) || s);
            return a && s && ni(e, i, s), s;
          };
        const Ls = null,
          Dt = 0,
          Ot = 1,
          Ft = 2,
          Ue = 0,
          Tt = 1,
          Mt = 2,
          Ut = 3;
        function Pr(r) {
          switch (r) {
            case G.uvF:
              return (0, l.we)("#Privacy_Private");
            case G.Snd:
              return (0, l.we)("#Privacy_FriendsOnly");
            case G.Quy:
              return (0, l.we)("#Privacy_Public");
            default:
              return "";
          }
        }
        function mi(r) {
          switch (r) {
            case Dt:
              return (0, l.we)("#Privacy_FriendsOnly");
            case Ot:
              return (0, l.we)("#Privacy_Public");
            case Ft:
              return (0, l.we)("#Privacy_Private");
            default:
              return "";
          }
        }
        function We(r, e) {
          return r < e ? r : e;
        }
        function di(r, e) {
          return e == G.uvF ? Ft : e == G.Snd && r == Ot ? Dt : r;
        }
        class ze {
          m_PrivacySettings = void 0;
          m_eCommentPermission = void 0;
          m_eSaveStateByKey = new Map();
          m_eCommentSaveState = Ue;
          constructor(e, i) {
            (0, d.Gn)(this),
              (this.m_PrivacySettings = e),
              (this.m_eCommentPermission = i);
          }
          GetPrivacySetting(e) {
            return e == "PrivacyOwnedGames"
              ? We(
                  this.m_PrivacySettings.PrivacyProfile,
                  this.m_PrivacySettings.PrivacyOwnedGames,
                )
              : e == "PrivacyPlaytime"
                ? We(
                    this.GetPrivacySetting("PrivacyOwnedGames"),
                    this.m_PrivacySettings.PrivacyPlaytime,
                  )
                : e == "PrivacyInventory"
                  ? We(
                      this.m_PrivacySettings.PrivacyProfile,
                      this.m_PrivacySettings.PrivacyInventory,
                    )
                  : e == "PrivacyInventoryGifts"
                    ? We(
                        this.GetPrivacySetting("PrivacyInventory"),
                        this.m_PrivacySettings.PrivacyInventoryGifts,
                      )
                    : e == "PrivacyFriendsList"
                      ? We(
                          this.m_PrivacySettings.PrivacyProfile,
                          this.m_PrivacySettings.PrivacyFriendsList,
                        )
                      : this.m_PrivacySettings[e];
          }
          get CommentPermission() {
            return this.m_eCommentPermission;
          }
          GetSaveState(e) {
            return this.m_eSaveStateByKey.get(e) || Ue;
          }
          GetCommentSaveState() {
            return this.m_eCommentSaveState;
          }
          ChangePrivacySetting(e, i, a) {
            if (this.m_PrivacySettings[e] == i) return;
            this.m_PrivacySettings[e] = i;
            let s = this.SavePrivacy(),
              o = a || e;
            s
              ? (this.m_eSaveStateByKey.set(o, Tt),
                s.then((n) => {
                  n
                    ? this.m_eSaveStateByKey.set(o, Mt)
                    : this.m_eSaveStateByKey.set(o, Ut);
                }))
              : this.m_eSaveStateByKey.set(o, Ue);
          }
          ChangeCommentPermission(e) {
            if (this.m_eCommentPermission == e) return;
            this.m_eCommentPermission = e;
            let i = this.SavePrivacy();
            i
              ? ((this.m_eCommentSaveState = Tt),
                i.then((a) => {
                  a
                    ? (this.m_eCommentSaveState = Mt)
                    : (this.m_eCommentSaveState = Ut);
                }))
              : (this.m_eCommentSaveState = Ue);
          }
          SavePrivacy() {
            let e = new FormData();
            return (
              e.append("sessionid", (0, f.KC)()),
              e.append("Privacy", JSON.stringify(this.m_PrivacySettings)),
              e.append(
                "eCommentPermission",
                JSON.stringify(this.m_eCommentPermission),
              ),
              y()
                .post(R.ProfileURL + "ajaxsetprivacy/", e)
                .then((i) => {
                  let a = i.data;
                  if (a.success != L.R)
                    return (
                      window.ShowAlertDialog(
                        (0, l.we)("#Error_Error"),
                        (0, l.we)("#Error_CommentEditFailed"),
                      ),
                      !1
                    );
                  let s = a.Privacy;
                  return (
                    s &&
                      s.PrivacySettings &&
                      s.eCommentPermission &&
                      (0, d.h5)(() => {
                        (this.m_PrivacySettings = s.PrivacySettings),
                          (this.m_eCommentPermission = s.eCommentPermission);
                      }),
                    !0
                  );
                })
                .catch(
                  (i) => (
                    window.ShowAlertDialog(
                      (0, l.we)("#Error_Error"),
                      (0, l.we)("#Error_CommentEditFailed"),
                    ),
                    !1
                  ),
                )
            );
          }
        }
        mt([d.sH], ze.prototype, "m_PrivacySettings", 2),
          mt([d.sH], ze.prototype, "m_eCommentPermission", 2),
          mt([d.sH], ze.prototype, "m_eSaveStateByKey", 2),
          mt([d.sH], ze.prototype, "m_eCommentSaveState", 2);
        var Q = m(75916),
          ci = Object.defineProperty,
          ui = Object.getOwnPropertyDescriptor,
          Ht = (r, e, i, a) => {
            for (
              var s = a > 1 ? void 0 : a ? ui(e, i) : e, o = r.length - 1, n;
              o >= 0;
              o--
            )
              (n = r[o]) && (s = (a ? n(e, i, s) : n(s)) || s);
            return a && s && ci(e, i, s), s;
          };
        class dt {
          m_rgBadges = [];
          m_FavoriteBadge = void 0;
          m_CommittedFavoriteBadge;
          m_AppInfoStore;
          m_CMInterface;
          constructor(e, i, a) {
            (0, d.Gn)(this),
              (this.m_CMInterface = e),
              (this.m_AppInfoStore = i);
            const s = a.rgBadges,
              o = a.FavoriteBadge;
            if (!Array.isArray(s))
              for (let n in s) {
                const p = s[n];
                let v;
                "communityitemid" in p
                  ? (v = new pi(p, this.m_AppInfoStore))
                  : (v = new hi(p)),
                  this.m_rgBadges.push(v),
                  o &&
                    v.BIsFavoriteBadge(o) &&
                    (this.m_CommittedFavoriteBadge = this.m_FavoriteBadge = v);
              }
          }
          get Badges() {
            return this.m_rgBadges;
          }
          get FavoriteBadge() {
            return this.m_FavoriteBadge;
          }
          get FavoriteBadgeID() {
            return this.m_FavoriteBadge
              ? this.m_FavoriteBadge.GetFavoriteBadgeID()
              : {};
          }
          SetFavoriteBadge(e) {
            this.m_FavoriteBadge = e;
          }
          RevertFavoriteBadge() {
            this.m_FavoriteBadge = this.m_CommittedFavoriteBadge;
          }
          BFavoriteBadgeUncomitted() {
            return this.m_FavoriteBadge != this.m_CommittedFavoriteBadge;
          }
          async CommitFavoriteBadgeChanges() {
            if (this.m_FavoriteBadge == this.m_CommittedFavoriteBadge)
              return L.R;
            let e = this.FavoriteBadgeID,
              i = me.w.Init(Q.Hrm);
            e.badgeid
              ? i.Body().set_badgeid(e.badgeid)
              : e.communityitemid &&
                i.Body().set_communityitemid(e.communityitemid);
            let a = await Q.xtC.SetFavoriteBadge(
              this.m_CMInterface.GetServiceTransport(),
              i,
            );
            return (
              a.GetEResult() == L.R &&
                (this.m_CommittedFavoriteBadge = this.m_FavoriteBadge),
              a.GetEResult()
            );
          }
          GetFavoriteBadgePreview() {
            return this.m_FavoriteBadge
              ? {
                  name: this.m_FavoriteBadge.GetName(),
                  xp: parseInt(this.m_FavoriteBadge.GetXP()),
                  level: 0,
                  description: this.m_FavoriteBadge.GetGameName(),
                  icon: this.m_FavoriteBadge.GetIconURL(),
                }
              : null;
          }
        }
        Ht([d.sH], dt.prototype, "m_FavoriteBadge", 2),
          Ht([d.XI], dt.prototype, "SetFavoriteBadge", 1),
          Ht([d.XI], dt.prototype, "RevertFavoriteBadge", 1);
        class yr {
          m_strIconURL;
          m_strName;
          m_strXP;
          constructor(e) {
            (this.m_strIconURL = e.icon),
              (this.m_strName = e.name),
              (this.m_strXP = e.xp);
          }
          GetIconURL() {
            return this.m_strIconURL;
          }
          GetName() {
            return this.m_strName;
          }
          GetXP() {
            return this.m_strXP;
          }
          GetGameName() {
            return "";
          }
          BIsFoil() {
            return !1;
          }
        }
        class hi extends yr {
          m_unBadgeID;
          constructor(e) {
            super(e), (this.m_unBadgeID = e.badgeid);
          }
          GetFavoriteBadgeID() {
            return { badgeid: this.m_unBadgeID };
          }
          BIsFavoriteBadge(e) {
            return e.badgeid && e.badgeid == this.m_unBadgeID;
          }
        }
        class pi extends yr {
          m_ulCommunityItemID;
          m_usItemType;
          m_unAppID;
          m_unBorderColor;
          m_AppInfoStore;
          constructor(e, i) {
            super(e),
              (this.m_ulCommunityItemID = e.communityitemid),
              (this.m_usItemType = e.item_type),
              (this.m_unAppID = e.appid),
              (this.m_unBorderColor = e.border_color),
              (this.m_AppInfoStore = i);
          }
          GetFavoriteBadgeID() {
            return { communityitemid: this.m_ulCommunityItemID };
          }
          BIsFavoriteBadge(e) {
            return (
              e.communityitemid && e.communityitemid == this.m_ulCommunityItemID
            );
          }
          GetGameName() {
            return this.m_AppInfoStore.GetAppInfo(this.m_unAppID).name;
          }
          BIsFoil() {
            return this.m_unBorderColor == 1;
          }
        }
        var ct = m(80876),
          fi = m(8323),
          vi = Object.defineProperty,
          _i = Object.getOwnPropertyDescriptor,
          ge = (r, e, i, a) => {
            for (
              var s = a > 1 ? void 0 : a ? _i(e, i) : e, o = r.length - 1, n;
              o >= 0;
              o--
            )
              (n = r[o]) && (s = (a ? n(e, i, s) : n(s)) || s);
            return a && s && vi(e, i, s), s;
          };
        function gi(r) {
          return be(r.movie_webm);
        }
        function Pi(r) {
          return be(r.movie_webm_small) || be(r.movie_webm);
        }
        function yi(r) {
          return be(r.movie_mp4);
        }
        function Ci(r) {
          return be(r.movie_mp4_small) || be(r.movie_mp4);
        }
        function ut(r) {
          return be(r.image_small);
        }
        function Fe(r) {
          return be(r.image_large);
        }
        function qt(r) {
          return Ai(r, 252, 160);
        }
        function Ai(r, e, i) {
          return r
            ? r.image_large
              ? `${f.TS.COMMUNITY_CDN_URL}economy/profilebackground/${r.image_large}?size=${e}x${i}`
              : null
            : `${f.TS.COMMUNITY_CDN_URL}public/images/profile/2020/bg_dots.png`;
        }
        function kt(r, e = !1) {
          let i = {},
            a = e ? Pi(r) : gi(r);
          a && (i["video/webm"] = a);
          let s = e ? Ci(r) : yi(r);
          return s && (i["video/mp4"] = s), i;
        }
        function be(r) {
          return r ? `${f.TS.MEDIA_CDN_COMMUNITY_URL}images/${r}` : null;
        }
        class Ve {
          m_SteamInterface;
          m_AppInfoStore;
          m_promiseOwned;
          m_promiseEquipped;
          m_Backgrounds = new ue(this);
          m_MiniProfileBackgrounds = new ue(this);
          m_Avatars = new ue(this);
          m_AvatarFrames = new ue(this);
          m_ProfileModifiers = new ue(this);
          m_OnAvatarEquipmentChangedCallbacks = new fi.lu();
          m_mapGoldenProfileConfigByAppID = new Map();
          constructor(e, i, a) {
            (0, d.Gn)(this),
              (this.m_SteamInterface = e),
              (this.m_AppInfoStore = i);
            for (let s of a)
              this.m_mapGoldenProfileConfigByAppID.set(s.appid, s);
            this.Initialize();
          }
          get AppInfoStore() {
            return this.m_AppInfoStore;
          }
          async GetOwnedBackgrounds() {
            return (
              this.m_Backgrounds.m_rgOwnedItems ||
                (await this.m_Backgrounds.SetItems(
                  (await this.m_promiseOwned).Body().profile_backgrounds(),
                )),
              this.m_Backgrounds.m_rgOwnedItems
            );
          }
          GetEquippedBackground() {
            return (
              this.m_Backgrounds.m_bEquippedLoaded ||
                (async () =>
                  this.m_Backgrounds.LoadEquipped(
                    (await this.m_promiseEquipped)
                      .Body()
                      .profile_background(!1),
                  ))(),
              this.m_Backgrounds.m_EquippedItem
            );
          }
          SetEquippedBackground(e) {
            this.m_Backgrounds.SetEquipped(e);
          }
          GetEquippedBackgroundFlags() {
            return this.m_Backgrounds.m_EquipFlags || 0;
          }
          SetEquippedBackgroundFlags(e) {
            this.m_Backgrounds.SetEquippedFlags(e);
          }
          BIsBackgroundUncomitted() {
            return this.m_Backgrounds.BIsUncomitted();
          }
          async SetAndEquipProfileBackground(e) {
            if (
              (this.m_Backgrounds.SetEquipped(e),
              this.m_Backgrounds.BIsUncomitted())
            ) {
              {
                let i = me.w.Init(Q.F55);
                i.Body().set_communityitemid(
                  this.m_Backgrounds.m_EquippedItem &&
                    this.m_Backgrounds.m_EquippedItem.communityitemid,
                );
                let a = await Q.xtC.SetProfileBackground(
                  this.m_SteamInterface.GetServiceTransport(),
                  i,
                );
                if (a.GetEResult() != L.R) return a.GetEResult();
              }
              if (
                this.m_Backgrounds.m_EquippedItem &&
                this.m_Backgrounds.m_EquippedItem.communityitemid
              ) {
                let i = me.w.Init(Q.MK$);
                i
                  .Body()
                  .set_communityitemid(
                    this.m_Backgrounds.m_EquippedItem.communityitemid,
                  ),
                  i.Body().set_flags(this.m_Backgrounds.m_EquipFlags);
                let a = await Q.xtC.SetEquippedProfileItemFlags(
                  this.m_SteamInterface.GetServiceTransport(),
                  i,
                );
                a.GetEResult() != L.R &&
                  console.error(
                    `Error when calling PlayerService.SetEquippedProfileItemFlags: EResult=${a.GetEResult()}`,
                  );
              }
            }
            return this.m_Backgrounds.SetComitted(), L.R;
          }
          RevertBackgroundChanges() {
            this.m_Backgrounds.Revert();
          }
          async GetOwnedMiniProfileBackgrounds() {
            return (
              this.m_MiniProfileBackgrounds.m_rgOwnedItems ||
                (await this.m_MiniProfileBackgrounds.SetItems(
                  (await this.m_promiseOwned).Body().mini_profile_backgrounds(),
                )),
              this.m_MiniProfileBackgrounds.m_rgOwnedItems
            );
          }
          GetEquippedMiniProfileBackground() {
            return (
              this.m_MiniProfileBackgrounds.m_bEquippedLoaded ||
                (async () =>
                  this.m_MiniProfileBackgrounds.LoadEquipped(
                    (await this.m_promiseEquipped)
                      .Body()
                      .mini_profile_background(!1),
                  ))(),
              this.m_MiniProfileBackgrounds.m_EquippedItem
            );
          }
          SetEquippedMiniProfileBackground(e) {
            this.m_MiniProfileBackgrounds.SetEquipped(e);
          }
          BIsMiniProfileBackgroundUncomitted() {
            return this.m_MiniProfileBackgrounds.BIsUncomitted();
          }
          async CommitMiniProfileChanges() {
            if (this.m_MiniProfileBackgrounds.BIsUncomitted()) {
              let e = me.w.Init(Q.A6_);
              e.Body().set_communityitemid(
                this.m_MiniProfileBackgrounds.m_EquippedItem &&
                  this.m_MiniProfileBackgrounds.m_EquippedItem.communityitemid,
              );
              let i = await Q.xtC.SetMiniProfileBackground(
                this.m_SteamInterface.GetServiceTransport(),
                e,
              );
              if (i.GetEResult() != L.R) return i.GetEResult();
            }
            return (
              this.m_MiniProfileBackgrounds.SetComitted(),
              this.m_OnAvatarEquipmentChangedCallbacks.Dispatch(),
              L.R
            );
          }
          RevertMiniProfileBackgroundChanges() {
            this.m_MiniProfileBackgrounds.Revert();
          }
          BIsAvatarUncomitted() {
            return (
              this.m_Avatars.BIsUncomitted() ||
              this.m_AvatarFrames.BIsUncomitted()
            );
          }
          async CommitAvatarChanges() {
            let e, i;
            if (this.m_Avatars.BIsUncomitted()) {
              let o = me.w.Init(Q.UMm);
              o
                .Body()
                .set_communityitemid(
                  this.m_Avatars.m_EquippedItem &&
                    this.m_Avatars.m_EquippedItem.communityitemid,
                ),
                (e = Q.xtC.SetAnimatedAvatar(
                  this.m_SteamInterface.GetServiceTransport(),
                  o,
                ));
            }
            if (this.m_AvatarFrames.BIsUncomitted()) {
              let o = me.w.Init(Q.C0y);
              o
                .Body()
                .set_communityitemid(
                  this.m_AvatarFrames.m_EquippedItem &&
                    this.m_AvatarFrames.m_EquippedItem.communityitemid,
                ),
                (i = Q.xtC.SetAvatarFrame(
                  this.m_SteamInterface.GetServiceTransport(),
                  o,
                ));
            }
            const [a, s] = await Promise.all([e, i]);
            return a && a.GetEResult() != L.R
              ? a.GetEResult()
              : s && s.GetEResult() != L.R
                ? s.GetEResult()
                : (this.m_Avatars.SetComitted(),
                  this.m_AvatarFrames.SetComitted(),
                  this.m_OnAvatarEquipmentChangedCallbacks.Dispatch(),
                  L.R);
          }
          RevertAvatarChanges() {
            this.m_Avatars.Revert(), this.m_AvatarFrames.Revert();
          }
          AddOnAvatarEquipmentChangedCallback(e) {
            this.m_OnAvatarEquipmentChangedCallbacks.Register(e);
          }
          async GetOwnedAvatars() {
            return (
              this.m_Avatars.m_rgOwnedItems ||
                (await this.m_Avatars.SetItems(
                  (await this.m_promiseOwned).Body().animated_avatars(),
                )),
              this.m_Avatars.m_rgOwnedItems
            );
          }
          GetEquippedAvatar() {
            return (
              this.m_Avatars.m_bEquippedLoaded ||
                (async () =>
                  this.m_Avatars.LoadEquipped(
                    (await this.m_promiseEquipped).Body().animated_avatar(!1),
                  ))(),
              this.m_Avatars.m_EquippedItem
            );
          }
          GetCommittedEquippedAvatar() {
            return (
              this.m_Avatars.m_bEquippedLoaded ||
                (async () =>
                  this.m_Avatars.LoadEquipped(
                    (await this.m_promiseEquipped).Body().animated_avatar(!1),
                  ))(),
              this.m_Avatars.m_CommittedEquippedItem
            );
          }
          SetEquippedAvatar(e, i = !1) {
            this.m_Avatars.SetEquipped(e, i);
          }
          async GetOwnedAvatarFrames() {
            return (
              this.m_AvatarFrames.m_rgOwnedItems ||
                (await this.m_AvatarFrames.SetItems(
                  (await this.m_promiseOwned).Body().avatar_frames(),
                )),
              this.m_AvatarFrames.m_rgOwnedItems
            );
          }
          GetEquippedAvatarFrame() {
            return (
              this.m_AvatarFrames.m_bEquippedLoaded ||
                (async () =>
                  this.m_AvatarFrames.LoadEquipped(
                    (await this.m_promiseEquipped).Body().avatar_frame(!1),
                  ))(),
              this.m_AvatarFrames.m_EquippedItem
            );
          }
          GetCommittedEquippedAvatarFrame() {
            return (
              this.m_AvatarFrames.m_bEquippedLoaded ||
                (async () =>
                  this.m_AvatarFrames.LoadEquipped(
                    (await this.m_promiseEquipped).Body().avatar_frame(!1),
                  ))(),
              this.m_AvatarFrames.m_CommittedEquippedItem
            );
          }
          SetEquippedAvatarFrame(e) {
            this.m_AvatarFrames.SetEquipped(e);
          }
          async GetOwnedProfileModifiers() {
            return (
              this.m_ProfileModifiers.m_rgOwnedItems ||
                (await this.m_ProfileModifiers.SetItems(
                  (await this.m_promiseOwned).Body().profile_modifiers(),
                )),
              this.m_ProfileModifiers.m_rgOwnedItems
            );
          }
          GetEquippedProfileModifier() {
            return (
              this.m_ProfileModifiers.m_bEquippedLoaded ||
                (async () =>
                  this.m_ProfileModifiers.LoadEquipped(
                    (await this.m_promiseEquipped).Body().profile_modifier(!1),
                  ))(),
              this.m_ProfileModifiers.m_EquippedItem
            );
          }
          GetCommittedEquippedProfileModifier() {
            return (
              this.m_ProfileModifiers.m_bEquippedLoaded ||
                (async () =>
                  this.m_ProfileModifiers.LoadEquipped(
                    (await this.m_promiseEquipped).Body().profile_modifier(!1),
                  ))(),
              this.m_ProfileModifiers.m_CommittedEquippedItem
            );
          }
          BHasAnyProfileModifiers() {
            return (
              this.GetOwnedProfileModifiers(),
              !!this.m_ProfileModifiers.GetOwnedItemCount()
            );
          }
          SetEquippedProfileModifier(e) {
            this.m_ProfileModifiers.SetEquipped(e);
          }
          RevertProfileModifierChanges() {
            this.m_ProfileModifiers.Revert();
          }
          ReloadEquippedItems() {
            let e = me.w.Init(Q.aKf);
            e.Body().set_steamid(f.iA.steamid),
              e.Body().set_language(f.TS.LANGUAGE),
              (this.m_promiseEquipped = Q.xtC.GetProfileItemsEquipped(
                this.m_SteamInterface.GetServiceTransport(),
                e,
              )),
              this.m_AvatarFrames.SetEquipped(null, !0),
              (this.m_AvatarFrames.m_bEquippedLoaded = !1),
              this.GetEquippedAvatarFrame(),
              this.m_Backgrounds.SetEquipped(null, !0),
              (this.m_Backgrounds.m_bEquippedLoaded = !1),
              this.GetEquippedBackground(),
              this.m_MiniProfileBackgrounds.SetEquipped(null, !0),
              (this.m_MiniProfileBackgrounds.m_bEquippedLoaded = !1),
              this.GetEquippedMiniProfileBackground();
          }
          async CommitProfileModifierChanges() {
            if (this.m_ProfileModifiers.BIsUncomitted()) {
              let e = !1;
              if (
                this.m_ProfileModifiers.m_CommittedEquippedItem &&
                this.m_ProfileModifiers.m_CommittedEquippedItem !=
                  this.m_ProfileModifiers.m_EquippedItem
              ) {
                let i = me.w.Init(ct.fp);
                i
                  .Body()
                  .set_communityitemid(
                    this.m_ProfileModifiers.m_CommittedEquippedItem
                      .communityitemid,
                  ),
                  i
                    .Body()
                    .set_appid(
                      this.m_ProfileModifiers.m_CommittedEquippedItem.appid,
                    ),
                  i.Body().set_activate(!1);
                let a = await ct.uy.ActivateProfileModifierItem(
                  this.m_SteamInterface.GetServiceTransport(),
                  i,
                );
                if (a.GetEResult() != L.R) return a.GetEResult();
                e = !0;
              }
              if (this.m_ProfileModifiers.m_EquippedItem) {
                let i = me.w.Init(ct.fp);
                i
                  .Body()
                  .set_communityitemid(
                    this.m_ProfileModifiers.m_EquippedItem.communityitemid,
                  ),
                  i
                    .Body()
                    .set_appid(this.m_ProfileModifiers.m_EquippedItem.appid),
                  i.Body().set_activate(!0);
                let a = await ct.uy.ActivateProfileModifierItem(
                  this.m_SteamInterface.GetServiceTransport(),
                  i,
                );
                if (a.GetEResult() != L.R) return a.GetEResult();
                e = !0;
              }
              this.m_ProfileModifiers.SetComitted(),
                e &&
                  (0, d.h5)(() => {
                    this.ReloadEquippedItems();
                  });
            }
            return L.R;
          }
          BIsLegacyGoldenProfile(e) {
            return this.m_mapGoldenProfileConfigByAppID.has(e);
          }
          GetGoldenProfileConfigValue(e) {
            let i = this.GetEquippedProfileModifier();
            if (!i) return null;
            let a = this.m_mapGoldenProfileConfigByAppID.get(i.appid);
            return a ? a[e] : null;
          }
          GetProfileModifierCSSURL() {
            return this.GetGoldenProfileConfigValue("css_url");
          }
          GetProfileModifierAvatarFrameURL() {
            return this.GetGoldenProfileConfigValue("frame_url");
          }
          GetProfileModifierMiniProfileBackground() {
            return this.GetGoldenProfileConfigValue("miniprofile_background");
          }
          GetProfileModifierMiniProfileBackgroundMovies() {
            return this.GetGoldenProfileConfigValue("miniprofile_movie");
          }
          async Initialize() {
            let e = me.w.Init(Q.YkN);
            e.Body().set_language(f.TS.LANGUAGE),
              (this.m_promiseOwned = Q.xtC.GetProfileItemsOwned(
                this.m_SteamInterface.GetServiceTransport(),
                e,
              ));
            let i = me.w.Init(Q.aKf);
            i.Body().set_steamid(f.iA.steamid),
              i.Body().set_language(f.TS.LANGUAGE),
              (this.m_promiseEquipped = Q.xtC.GetProfileItemsEquipped(
                this.m_SteamInterface.GetServiceTransport(),
                i,
              ));
          }
        }
        ge([d.XI], Ve.prototype, "RevertBackgroundChanges", 1),
          ge([d.XI], Ve.prototype, "RevertMiniProfileBackgroundChanges", 1),
          ge([d.XI], Ve.prototype, "RevertAvatarChanges", 1),
          ge([d.XI], Ve.prototype, "ReloadEquippedItems", 1);
        class ue {
          m_cItemsOwned = void 0;
          m_bEquippedLoaded = !1;
          m_bUnsavedChanges = !1;
          m_CommittedEquippedItem = void 0;
          m_EquippedItem = void 0;
          m_EquipFlags = void 0;
          m_rgOwnedItems;
          m_parent;
          constructor(e) {
            (0, d.Gn)(this), (this.m_parent = e);
          }
          GetOwnedItemCount() {
            return this.m_cItemsOwned;
          }
          async SetItems(e) {
            let i = e.map((a) => a.toObject());
            (this.m_rgOwnedItems = (await this.FillAppNames(i)).reverse()),
              (this.m_cItemsOwned = this.m_rgOwnedItems.length);
          }
          async LoadEquipped(e) {
            if (e !== void 0 && e.communityitemid()) {
              let i = e.toObject();
              if (i) {
                let [a] = await this.FillAppNames([i]);
                (0, d.h5)(() => {
                  (this.m_CommittedEquippedItem = this.m_EquippedItem = a),
                    (this.m_EquipFlags = a && a.equipped_flags);
                });
              }
              this.m_bEquippedLoaded = !0;
            }
          }
          SetEquipped(e, i = !1) {
            (this.m_EquippedItem = e),
              (this.m_bEquippedLoaded = !0),
              i
                ? this.SetComitted()
                : (e &&
                      (!this.m_CommittedEquippedItem ||
                        this.m_CommittedEquippedItem.communityitemid !=
                          e.communityitemid ||
                        this.m_CommittedEquippedItem.equipped_flags !=
                          this.m_EquipFlags)) ||
                    (!e && this.m_CommittedEquippedItem)
                  ? (this.m_bUnsavedChanges = !0)
                  : (this.m_bUnsavedChanges = !1);
          }
          SetEquippedFlags(e) {
            this.m_EquipFlags = e;
          }
          BIsUncomitted() {
            return this.m_bUnsavedChanges;
          }
          SetComitted() {
            (this.m_bUnsavedChanges = !1),
              (this.m_CommittedEquippedItem = this.m_EquippedItem),
              this.m_CommittedEquippedItem &&
                (this.m_CommittedEquippedItem.equipped_flags =
                  this.m_EquipFlags);
          }
          Revert() {
            (this.m_EquippedItem = this.m_CommittedEquippedItem),
              (this.m_EquipFlags =
                this.m_EquippedItem && this.m_EquippedItem.equipped_flags),
              (this.m_bUnsavedChanges = !1);
          }
          async FillAppNames(e) {
            await this.m_parent.AppInfoStore.EnsureAppInfoForAppIDs(
              e.map((i) => i.appid),
            );
            for (let i of e)
              i.app_name = i.appid
                ? this.m_parent.AppInfoStore.GetAppInfo(i.appid).name
                : "";
            return e;
          }
        }
        ge([d.sH], ue.prototype, "m_cItemsOwned", 2),
          ge([d.sH], ue.prototype, "m_bUnsavedChanges", 2),
          ge([d.sH], ue.prototype, "m_CommittedEquippedItem", 2),
          ge([d.sH], ue.prototype, "m_EquippedItem", 2),
          ge([d.sH], ue.prototype, "m_EquipFlags", 2),
          ge([d.XI], ue.prototype, "SetEquipped", 1),
          ge([d.XI], ue.prototype, "SetEquippedFlags", 1),
          ge([d.XI], ue.prototype, "Revert", 1);
        var Si = Object.defineProperty,
          xi = Object.getOwnPropertyDescriptor,
          he = (r, e, i, a) => {
            for (
              var s = a > 1 ? void 0 : a ? xi(e, i) : e, o = r.length - 1, n;
              o >= 0;
              o--
            )
              (n = r[o]) && (s = (a ? n(e, i, s) : n(s)) || s);
            return a && s && Si(e, i, s), s;
          };
        class ce {
          m_strDisplayCountry = void 0;
          m_strDisplayState = void 0;
          m_strDisplayCity = void 0;
          m_strCountryCode = void 0;
          m_strStateCode = void 0;
          m_strCityCode = void 0;
          m_CountryCur;
          m_StateCur;
          m_rgCountryList;
          m_promiseLoadCountries;
          m_bStateSelectionAvailable = !1;
          m_bCitySelectionAvailable = !1;
          constructor(e, i, a, s, o, n) {
            (0, d.Gn)(this),
              (this.m_strDisplayCountry = e),
              (this.m_strDisplayState = a),
              (this.m_strDisplayCity = o),
              (this.m_strCountryCode = i),
              (this.m_strStateCode = s),
              (this.m_strCityCode = n),
              this.m_strStateCode
                ? (this.m_bStateSelectionAvailable = !0)
                : this.m_strCountryCode && this.GetCountryList(),
              (this.m_bCitySelectionAvailable = !!this.m_strStateCode);
          }
          get Country() {
            return this.m_strDisplayCountry;
          }
          get CountryCode() {
            return this.m_strCountryCode;
          }
          SetCountry(e, i) {
            e != this.m_strCountryCode &&
              ((this.m_strStateCode = ""),
              (this.m_strDisplayState = ""),
              (this.m_strCityCode = ""),
              (this.m_strDisplayCity = "")),
              (this.m_strCountryCode = e),
              (this.m_strDisplayCountry = i),
              this.FindAndSetActiveCountry(),
              this.FindAndSetActiveState();
          }
          BIsStateSelectionAvailable() {
            return this.m_bStateSelectionAvailable;
          }
          get State() {
            return this.m_strDisplayState;
          }
          get StateCode() {
            return this.m_strStateCode;
          }
          SetState(e, i) {
            e != this.m_strStateCode &&
              ((this.m_strCityCode = ""), (this.m_strDisplayCity = "")),
              (this.m_strStateCode = e),
              (this.m_strDisplayState = i),
              this.FindAndSetActiveState();
          }
          BIsCitySelectionAvailable() {
            return this.m_bCitySelectionAvailable;
          }
          get City() {
            return this.m_strDisplayCity;
          }
          get CityCode() {
            return this.m_strCityCode;
          }
          SetCity(e, i) {
            (this.m_strCityCode = e), (this.m_strDisplayCity = i);
          }
          async GetCountryList() {
            return this.m_rgCountryList
              ? this.m_rgCountryList
              : this.m_promiseLoadCountries
                ? this.m_promiseLoadCountries
                : ((this.m_promiseLoadCountries = y()
                    .get(f.TS.COMMUNITY_BASE_URL + "/actions/QueryLocations/")
                    .then((e) => e.data)),
                  this.m_promiseLoadCountries.then(
                    (e) => {
                      (this.m_rgCountryList = e),
                        (this.m_promiseLoadCountries = null),
                        this.FindAndSetActiveCountry();
                    },
                    () => {
                      this.m_promiseLoadCountries = null;
                    },
                  ),
                  this.m_promiseLoadCountries);
          }
          FindAndSetActiveCountry() {
            (this.m_CountryCur =
              this.m_strCountryCode &&
              this.m_rgCountryList.find(
                (e) => e.countrycode == this.m_strCountryCode,
              )),
              (this.m_bStateSelectionAvailable =
                this.m_CountryCur && !!this.m_CountryCur.hasstates);
          }
          async GetStateList() {
            this.m_CountryCur || (await this.GetCountryList());
            let e = this.m_CountryCur;
            return !e || !e.hasstates
              ? []
              : e.states !== void 0
                ? e.states
                : (e.stateloader ||
                    ((e.stateloader = y()
                      .get(
                        f.TS.COMMUNITY_BASE_URL +
                          `/actions/QueryLocations/${e.countrycode}/`,
                      )
                      .then((i) => i.data)),
                    e.stateloader.then(
                      (i) => {
                        (e.states = i || []),
                          delete e.stateloader,
                          this.FindAndSetActiveState();
                      },
                      () => {
                        delete e.stateloader;
                      },
                    )),
                  e.stateloader);
          }
          FindAndSetActiveState() {
            (this.m_StateCur =
              this.m_CountryCur &&
              this.m_CountryCur.states &&
              this.m_CountryCur.states.find(
                (e) => e.statecode == this.m_strStateCode,
              )),
              (this.m_bCitySelectionAvailable = !!this.m_StateCur);
          }
          async GetCityList() {
            this.m_StateCur || (await this.GetStateList());
            let e = this.m_StateCur;
            return e
              ? e.cities !== void 0
                ? e.cities
                : (e.cityloader ||
                    ((e.cityloader = y()
                      .get(
                        f.TS.COMMUNITY_BASE_URL +
                          `/actions/QueryLocations/${e.countrycode}/${e.statecode}`,
                      )
                      .then((i) => i.data)),
                    e.cityloader.then(
                      (i) => {
                        (e.cities = i || []), delete e.cityloader;
                      },
                      () => {
                        delete e.cityloader;
                      },
                    )),
                  e.cityloader)
              : [];
          }
        }
        he([d.sH], ce.prototype, "m_strDisplayCountry", 2),
          he([d.sH], ce.prototype, "m_strDisplayState", 2),
          he([d.sH], ce.prototype, "m_strDisplayCity", 2),
          he([d.sH], ce.prototype, "m_strCountryCode", 2),
          he([d.sH], ce.prototype, "m_strStateCode", 2),
          he([d.sH], ce.prototype, "m_strCityCode", 2),
          he([d.sH], ce.prototype, "m_bStateSelectionAvailable", 2),
          he([d.sH], ce.prototype, "m_bCitySelectionAvailable", 2),
          he([d.XI], ce.prototype, "SetCountry", 1),
          he([d.XI], ce.prototype, "SetState", 1),
          he([d.XI], ce.prototype, "SetCity", 1),
          he([d.XI], ce.prototype, "FindAndSetActiveCountry", 1),
          he([d.XI], ce.prototype, "FindAndSetActiveState", 1);
        var wi = Object.defineProperty,
          ji = Object.getOwnPropertyDescriptor,
          Cr = (r, e, i, a) => {
            for (
              var s = a > 1 ? void 0 : a ? ji(e, i) : e, o = r.length - 1, n;
              o >= 0;
              o--
            )
              (n = r[o]) && (s = (a ? n(e, i, s) : n(s)) || s);
            return a && s && wi(e, i, s), s;
          };
        class Kt {
          m_ActiveTheme = void 0;
          m_ComittedActiveTheme;
          m_rgAvailableThemes;
          m_CMInterface;
          constructor(e, i, a) {
            (0, d.Gn)(this),
              (this.m_CMInterface = e),
              (this.m_rgAvailableThemes = a.map((s) => ({
                ...s,
                theme_id: s.theme_id || "Default",
                title: (0, l.we)(s.title),
              }))),
              i === void 0 || i.theme_id === ""
                ? this.SetActiveTheme("Default", !0)
                : ((this.m_ActiveTheme = i), (this.m_ComittedActiveTheme = i));
          }
          get ActiveTheme() {
            return this.m_ActiveTheme;
          }
          get AvailableThemes() {
            return this.m_rgAvailableThemes;
          }
          SetActiveTheme(e, i = !1) {
            for (let a of this.m_rgAvailableThemes)
              if (e === a.theme_id) {
                (this.m_ActiveTheme = a), i && (this.m_ComittedActiveTheme = a);
                break;
              }
          }
          BActiveThemeUncomitted() {
            return (
              this.m_ActiveTheme.theme_id != this.m_ComittedActiveTheme.theme_id
            );
          }
          RevertActiveTheme() {
            this.m_ActiveTheme = this.m_ComittedActiveTheme;
          }
          async CommitActiveTheme() {
            let e = me.w.Init(Q.yow);
            e.Body().set_theme_id(
              this.ActiveTheme.theme_id == "Default"
                ? ""
                : this.ActiveTheme.theme_id,
            );
            const i = await Q.xtC.SetProfileTheme(
              this.m_CMInterface.GetServiceTransport(),
              e,
            );
            return (
              i.GetEResult() == L.R &&
                (this.m_ComittedActiveTheme = this.ActiveTheme),
              i.GetEResult()
            );
          }
        }
        Cr([d.sH], Kt.prototype, "m_ActiveTheme", 2),
          Cr([d.XI], Kt.prototype, "RevertActiveTheme", 1);
        var Qt = m(35413);
        async function Wt(r, e) {
          let i;
          if (e instanceof FormData) i = e;
          else {
            i = new FormData();
            for (const s in e) i.append(s, e[s]);
          }
          i.append("type", r),
            i.append("sessionID", (0, f.KC)()),
            i.append("json", "1");
          const a = `${R.ProfileURL}edit/`;
          try {
            let s = await y().post(a, i);
            return {
              eResult: s.data.success,
              strHTMLError: s.data.errmsg,
              strRedirectURL: s.data.redirect,
            };
          } catch {
            return {
              eResult: L.iV,
              strHTMLError: (0, l.we)("#ConnectionTrouble_FailedToConnect"),
            };
          }
        }
        var Ii = Object.defineProperty,
          Bi = Object.getOwnPropertyDescriptor,
          ht = (r, e, i, a) => {
            for (
              var s = a > 1 ? void 0 : a ? Bi(e, i) : e, o = r.length - 1, n;
              o >= 0;
              o--
            )
              (n = r[o]) && (s = (a ? n(e, i, s) : n(s)) || s);
            return a && s && Ii(e, i, s), s;
          };
        class Ze {
          m_rgUserGroups;
          m_PrimaryGroup = void 0;
          m_CommittedPrimaryGroup;
          m_bLoaded = !1;
          m_promiseLoading;
          constructor(e) {
            (0, d.Gn)(this),
              e &&
                (this.m_CommittedPrimaryGroup = this.m_PrimaryGroup =
                  new Ar(new Lt.b(e.steamid), e.name, e.avatarHash));
          }
          get PrimaryGroup() {
            return this.m_PrimaryGroup;
          }
          SetPrimaryGroup(e) {
            this.m_PrimaryGroup = e;
          }
          BGroupsLoaded() {
            return this.m_bLoaded;
          }
          BHasAnyGroups() {
            return this.m_rgUserGroups.length > 0;
          }
          GetUserGroups() {
            return (
              this.m_bLoaded || this.StartUserGroupLoad(), this.m_rgUserGroups
            );
          }
          async BWaitForUserGroups() {
            return this.StartUserGroupLoad(), this.m_promiseLoading;
          }
          StartUserGroupLoad() {
            this.m_promiseLoading ||
              (this.m_promiseLoading = this.LoadUserGroups());
          }
          async LoadUserGroups() {
            let e = await y().get(
              `${R.ProfileURL}ajaxgroupinvite?select_primary=1&json=1`,
            );
            return (
              (0, d.h5)(() => {
                e.data &&
                  (this.m_rgUserGroups = e.data.map(
                    (i) => new Ar(new Lt.b(i.steamid), i.name, i.avatarHash),
                  )),
                  (this.m_bLoaded = !0);
              }),
              !!e.data
            );
          }
          BPrimaryGroupUncomitted() {
            return (
              (this.m_PrimaryGroup &&
                this.m_PrimaryGroup.GetSteamID().GetAccountID()) !=
              (this.m_CommittedPrimaryGroup &&
                this.m_CommittedPrimaryGroup.GetSteamID().GetAccountID())
            );
          }
          async CommitPrimaryGroup() {
            let e = await Wt("favoriteclan", {
              primary_group_steamid: this.m_PrimaryGroup
                .GetSteamID()
                .ConvertTo64BitString(),
            });
            return (
              e.eResult == L.R &&
                (this.m_CommittedPrimaryGroup = this.m_PrimaryGroup),
              e
            );
          }
          RevertPrimaryGroupChanges() {
            this.m_PrimaryGroup = this.m_CommittedPrimaryGroup;
          }
        }
        ht([d.sH], Ze.prototype, "m_PrimaryGroup", 2),
          ht([d.sH], Ze.prototype, "m_bLoaded", 2),
          ht([d.XI], Ze.prototype, "SetPrimaryGroup", 1),
          ht([d.XI], Ze.prototype, "RevertPrimaryGroupChanges", 1);
        class Ar {
          m_steamID;
          m_strName;
          m_strAvatarHash;
          constructor(e, i, a) {
            (this.m_steamID = e),
              (this.m_strName = i),
              (this.m_strAvatarHash = a);
          }
          GetSteamID() {
            return this.m_steamID;
          }
          GetName() {
            return this.m_strName;
          }
          GetAvatarURL(e) {
            return (0, Qt.t)(
              this.m_strAvatarHash ||
                "0000000000000000000000000000000000000000",
              e,
            );
          }
        }
        var Ei = Object.defineProperty,
          Gi = Object.getOwnPropertyDescriptor,
          Ce = (r, e, i, a) => {
            for (
              var s = a > 1 ? void 0 : a ? Gi(e, i) : e, o = r.length - 1, n;
              o >= 0;
              o--
            )
              (n = r[o]) && (s = (a ? n(e, i, s) : n(s)) || s);
            return a && s && Ei(e, i, s), s;
          };
        class Ri {
          m_Profile;
          m_ProfileBadges;
          m_ProfileItems;
          m_ProfileTheme;
          m_ProfilePrivacy;
          m_OGGAvatars = new gr();
          m_AvatarHistory;
          m_EmoticonStore = new Jr.T();
          m_WebAPI;
          m_AppInfoStore;
          constructor(e, i, a) {
            (this.m_Profile = new te(e)),
              (this.m_WebAPI = a),
              (this.m_AppInfoStore = new V.Mi()),
              this.m_AppInfoStore.Init(this.m_WebAPI),
              this.m_AppInfoStore.SetCacheStorage(new ie.A()),
              (this.m_ProfileBadges = new dt(
                this.m_WebAPI,
                this.m_AppInfoStore,
                i,
              )),
              (this.m_ProfileItems = new Ve(
                this.m_WebAPI,
                this.m_AppInfoStore,
                e.rgGoldenProfileData,
              )),
              (this.m_ProfileTheme = new Kt(
                this.m_WebAPI,
                e.ActiveTheme,
                e.rgAvailableThemes,
              )),
              (this.m_ProfilePrivacy = new ze(
                e.Privacy.PrivacySettings,
                e.Privacy.eCommentPermission,
              )),
              (this.m_AvatarHistory = new _r(this.m_WebAPI)),
              this.m_ProfileItems.AddOnAvatarEquipmentChangedCallback(() => {
                this.m_Profile.MiniProfileData.Reload(),
                  this.m_AvatarHistory.RefreshAvatarHistory();
              });
          }
          get ServiceTransport() {
            return this.m_WebAPI.GetServiceTransport();
          }
          get Profile() {
            return this.m_Profile;
          }
          get ProfileBadges() {
            return this.m_ProfileBadges;
          }
          get ProfileItems() {
            return this.m_ProfileItems;
          }
          get ProfileTheme() {
            return this.m_ProfileTheme;
          }
          get ProfilePrivacy() {
            return this.m_ProfilePrivacy;
          }
          get OGGAvatarStore() {
            return this.m_OGGAvatars;
          }
          get AvatarHistory() {
            return this.m_AvatarHistory;
          }
          get EmoticonStore() {
            return this.m_EmoticonStore;
          }
          get MiniProfileOverrideData() {
            return {
              favorite_badge: this.m_ProfileBadges.GetFavoriteBadgePreview(),
            };
          }
        }
        class te {
          m_strPersonaName = void 0;
          m_strCommittedPersonaName = void 0;
          m_strFilteredPersonaName;
          m_strCommittedFilteredPersonaName;
          m_strCustomURL = void 0;
          m_strComittedCustomURL;
          m_strRealName = void 0;
          m_strComittedRealName;
          m_strFilteredRealName;
          m_strCommittedFilteredRealName;
          m_strSummary = void 0;
          m_strComittedSummary;
          m_strAvatarHash = void 0;
          m_strCommittedAvatarHash = void 0;
          m_persona;
          m_MiniProfileData;
          m_Location;
          m_GroupList;
          m_rtPersonaNameBannedUntil;
          m_rtProfileSummaryBannedUntil;
          m_rtAvatarBannedUntil;
          m_Preferences = void 0;
          constructor(e) {
            (0, d.Gn)(this),
              (this.m_strPersonaName = e.strPersonaName),
              (this.m_strFilteredPersonaName = e.strFilteredPersonaName),
              (this.m_strCustomURL = e.strCustomURL),
              (this.m_strRealName = e.strRealName),
              (this.m_strFilteredRealName = e.strFilteredRealName),
              (this.m_strSummary = e.strSummary),
              (this.m_Preferences = e.ProfilePreferences),
              this.SetBasicInfoChangesComitted(),
              (this.m_strCommittedAvatarHash = this.m_strAvatarHash =
                e.strAvatarHash);
            const {
              LocationData: {
                locCountry: i,
                locCountryCode: a,
                locState: s,
                locStateCode: o,
                locCity: n,
                locCityCode: p,
              },
            } = e;
            (this.m_Location = new ce(i, a, s, o, n, p)),
              (this.m_GroupList = new Ze(e.PrimaryGroup));
            const v = new Lt.b(f.iA.steamid);
            (this.m_MiniProfileData = new M(v.GetAccountID())),
              (this.m_persona = new j.Z(v)),
              (0, d.fm)(() => {
                this.BuildPersonaStateObject();
              }),
              (this.m_rtPersonaNameBannedUntil =
                e.rtPersonaNameBannedUntil || void 0),
              (this.m_rtProfileSummaryBannedUntil =
                e.rtProfileSummaryBannedUntil || void 0),
              (this.m_rtAvatarBannedUntil = e.rtAvatarBannedUntil || void 0);
          }
          RevertBasicInfoChanges() {
            (this.m_strPersonaName = this.m_strCommittedPersonaName),
              (this.m_strFilteredPersonaName =
                this.m_strCommittedFilteredPersonaName),
              (this.m_strCustomURL = this.m_strComittedCustomURL),
              (this.m_strRealName = this.m_strComittedRealName),
              (this.m_strFilteredRealName =
                this.m_strCommittedFilteredRealName),
              (this.m_strSummary = this.m_strComittedSummary);
          }
          SetBasicInfoChangesComitted() {
            (this.m_strCommittedPersonaName = this.m_strPersonaName),
              (this.m_strCommittedFilteredPersonaName =
                this.m_strFilteredPersonaName),
              (this.m_strComittedCustomURL = this.m_strCustomURL),
              (this.m_strComittedRealName = this.m_strRealName),
              (this.m_strCommittedFilteredRealName =
                this.m_strFilteredRealName),
              (this.m_strComittedSummary = this.m_strSummary);
          }
          NotifyRNMobileAppStateChanged() {
            const e = Reflect.get(window, "ReactNativeWebView");
            if (e?.postMessage) {
              const i = {
                event_name: "personastatechanged",
                steamid: f.iA.steamid,
              };
              e.postMessage(JSON.stringify(i));
            }
          }
          GetPersonaName() {
            return this.m_strPersonaName;
          }
          GetComittedPersonaName() {
            return this.m_strCommittedPersonaName;
          }
          SetPersonaName(e) {
            (this.m_strPersonaName = e), (this.m_strFilteredPersonaName = e);
          }
          HasFilteredPersonaName() {
            return this.m_strPersonaName !== this.m_strFilteredPersonaName;
          }
          GetRealName() {
            return this.m_strRealName;
          }
          SetRealName(e) {
            (this.m_strRealName = e), (this.m_strFilteredRealName = e);
          }
          HasFilteredRealName() {
            return this.m_strRealName !== this.m_strFilteredRealName;
          }
          GetCustomURL() {
            return this.m_strCustomURL;
          }
          SetCustomURL(e) {
            this.m_strCustomURL = e;
          }
          GetConstructedURL() {
            return this.m_strCustomURL
              ? `${f.TS.COMMUNITY_BASE_URL}id/${this.m_strCustomURL}/`
              : `${f.TS.COMMUNITY_BASE_URL}profiles/${f.iA.steamid}/`;
          }
          GetAvatarHash() {
            return this.m_strAvatarHash;
          }
          GetCommittedAvatarHash() {
            return this.m_strCommittedAvatarHash;
          }
          GetSummary() {
            return this.m_strSummary;
          }
          SetSummary(e) {
            this.m_strSummary = e;
          }
          GetPreferences() {
            return this.m_Preferences;
          }
          SetPreferences(e) {
            this.m_Preferences = e;
          }
          GetPrimaryGroupSteamID() {
            return (
              this.m_GroupList.PrimaryGroup &&
              this.m_GroupList.PrimaryGroup.GetSteamID()
            );
          }
          get GroupList() {
            return this.m_GroupList;
          }
          get Location() {
            return this.m_Location;
          }
          get MiniProfileData() {
            return (
              this.m_MiniProfileData.EnsureCommunityDataLoaded(),
              this.m_MiniProfileData
            );
          }
          get PersonaState() {
            return this.m_persona;
          }
          BuildPersonaStateObject() {
            (this.m_persona.m_strPlayerName = this.m_strPersonaName),
              (this.m_persona.m_strAvatarHash = this.m_strAvatarHash),
              (this.m_persona.m_ePersonaState = G.UXk);
          }
          async UploadAvatar(e) {
            let i = new FormData();
            i.append("avatar", e),
              i.append("type", "player_avatar_image"),
              i.append("sId", f.iA.steamid),
              i.append("sessionid", (0, f.KC)()),
              i.append("doSub", "1"),
              i.append("json", "1");
            let a = !1,
              s = "";
            try {
              let o = await y().post(
                `${f.TS.COMMUNITY_BASE_URL}actions/FileUploader/`,
                i,
              );
              o.data && o.data.success
                ? ((a = !0), this.SetAvatarHash(o.data.hash, !0))
                : (s =
                    (o.data && o.data.message) ||
                    (0, l.we)("#Chat_Settings_Error_ServerError"));
            } catch (o) {
              s =
                (o.response && o.response.data.message) ||
                (0, l.we)("#Chat_Settings_Error_ServerError");
            }
            return { bSuccess: a, strError: s };
          }
          SetAvatarHash(e, i = !1) {
            (this.m_strAvatarHash = e), i && this.CommitAvatarHash();
          }
          BHasUncomittedAvatarChanges() {
            return this.m_strAvatarHash != this.m_strCommittedAvatarHash;
          }
          CommitAvatarHash() {
            this.m_strCommittedAvatarHash = this.m_strAvatarHash;
          }
          RevertToComittedAvatarHash() {
            this.m_strAvatarHash = this.m_strCommittedAvatarHash;
          }
          BIsPersonaNameChangeOnCooldown() {
            return !!this.m_rtPersonaNameBannedUntil;
          }
          GetPersonaNameCooldownEndRTime() {
            return this.m_rtPersonaNameBannedUntil;
          }
          BIsProfileSummaryChangeOnCooldown() {
            return !!this.m_rtProfileSummaryBannedUntil;
          }
          GetProfileSummaryCooldownEndRTime() {
            return this.m_rtProfileSummaryBannedUntil;
          }
          BIsAvatarChangeOnCooldown() {
            return !!this.m_rtAvatarBannedUntil;
          }
          GetAvatarChangeCooldownEndRTime() {
            return this.m_rtAvatarBannedUntil;
          }
          static k_strPersonaNameCooldownSupportURL =
            "https://help.steampowered.com/faqs/view/6862-8119-C23E-EA7B";
          static k_strProfileSummaryCooldownSupportURL =
            "https://help.steampowered.com/faqs/view/6862-8119-C23E-EA7B";
          static k_strAvatarCooldownSupportURL =
            "https://help.steampowered.com/faqs/view/6862-8119-C23E-EA7B";
          static k_strNameFilteredSupportURL =
            "https://help.steampowered.com/wizard/HelpWithSteamIssue/?issueid=415";
        }
        Ce([d.sH], te.prototype, "m_strPersonaName", 2),
          Ce([d.sH], te.prototype, "m_strCommittedPersonaName", 2),
          Ce([d.sH], te.prototype, "m_strCustomURL", 2),
          Ce([d.sH], te.prototype, "m_strRealName", 2),
          Ce([d.sH], te.prototype, "m_strSummary", 2),
          Ce([d.sH], te.prototype, "m_strAvatarHash", 2),
          Ce([d.sH], te.prototype, "m_strCommittedAvatarHash", 2),
          Ce([d.sH], te.prototype, "m_Preferences", 2),
          Ce([d.XI], te.prototype, "RevertBasicInfoChanges", 1),
          Ce([d.XI], te.prototype, "SetAvatarHash", 1),
          Ce([d.XI], te.prototype, "RevertToComittedAvatarHash", 1);
        var X = m(92757),
          pe = m(32093),
          zt = m(68312),
          Ds = m(64641),
          Ni = m(72739),
          Y = m(35471),
          x = m(19316),
          S = m(54963),
          bi = m(72609),
          Xe = m(88942),
          _ = m(45301),
          E = m(19298),
          re = m(31270),
          Sr = m(2801),
          Ge = m(25792),
          Li = m(92264),
          Di = Object.defineProperty,
          Oi = Object.getOwnPropertyDescriptor,
          pt = (r, e, i, a) => {
            for (
              var s = a > 1 ? void 0 : a ? Oi(e, i) : e, o = r.length - 1, n;
              o >= 0;
              o--
            )
              (n = r[o]) && (s = (a ? n(e, i, s) : n(s)) || s);
            return a && s && Di(e, i, s), s;
          };
        const Os = ({ className: r, children: e }) =>
            jsx("div", {
              className: classnames(styles.ProfileRow, r),
              children: e,
            }),
          Fs = ({ className: r, children: e }) =>
            jsx("div", {
              className: classnames(styles.ProfileCol, r),
              children: e,
            }),
          ft = ({ title: r, className: e, children: i }) =>
            (0, t.jsxs)("div", {
              className: (0, h.A)(re.ProfileBox, e),
              children: [
                (0, t.jsx)("div", {
                  className: re.ProfileBoxTitle,
                  children: r,
                }),
                (0, t.jsx)("div", {
                  className: re.ProfileBoxContent,
                  children: (0, t.jsx)(Ge.tH, { children: i }),
                }),
              ],
            }),
          He = ({ onSave: r, onCancel: e, disabled: i }) =>
            (0, t.jsxs)(E.Z, {
              className: re.SaveCancelButtons,
              "flow-children": "row-reverse",
              children: [
                (0, t.jsx)(x.jn, {
                  onClick: r,
                  disabled: i,
                  children: (0, l.we)("#Button_Save"),
                }),
                (0, t.jsx)(x.$n, {
                  onClick: e,
                  children: (0, l.we)("#Button_Cancel"),
                }),
              ],
            });
        function Ye(r) {
          return (0, l.we)(r).replace(/%s/g, "");
        }
        function Ts(r) {
          const { active: e, onDismiss: i, strDialogTitle: a, ...s } = r;
          return jsxs(DialogModal, {
            active: e,
            onDismiss: i,
            children: [
              a && jsx(Dialog.Header, { children: a }),
              jsx(Dialog.Body, {
                children: jsx(ErrorBoundary, { children: jsx(Je, { ...s }) }),
              }),
            ],
          });
        }
        class Te extends u.Component {
          state = { activeItem: void 0, bSaving: !1 };
          static getDerivedStateFromProps(e, i) {
            return {
              activeItem: i.activeItem !== void 0 ? i.activeItem : e.ActiveItem,
            };
          }
          async CommitChanges() {
            this.setState({ bSaving: !0 });
            let e = await this.props.fnCommitChanges(this.state.activeItem);
            this.setState({ bSaving: !1 });
          }
          async RevertChanges() {
            this.setState({ activeItem: this.props.ActiveItem }),
              this.props.fnRevertChanges();
          }
          OnItemSelected(e) {
            this.setState({ activeItem: e });
          }
          render() {
            const {
                strDialogTitle: e,
                ActiveItem: i,
                className: a,
                fnRenderPreview: s,
                ...o
              } = this.props,
              { activeItem: n, bSaving: p } = this.state;
            return (0, t.jsxs)(x.nB, {
              className: (0, h.A)(re.PickerPreviewDialog, a),
              children: [
                (0, t.jsx)(X.XG, {
                  when: !o.fnIsSameItem(n, this.props.ActiveItem),
                  message: (0, l.we)("#Profile_Edit_UnsavedChangesWarning"),
                }),
                (0, t.jsxs)(E.Z, {
                  className: re.PickerPreviewBody,
                  "flow-children": "column",
                  children: [
                    (0, t.jsx)("div", {
                      className: re.PickerPreview,
                      children: (0, t.jsx)(Ge.tH, { children: s(n) }),
                    }),
                    e && (0, t.jsx)(x.Y9, { children: e }),
                    (0, t.jsx)("div", {
                      className: re.PickerPreviewItems,
                      children: (0, t.jsx)(Ge.tH, {
                        children: (0, t.jsx)(Je, {
                          ...o,
                          onItemSelected: this.OnItemSelected,
                          activeItem: n,
                        }),
                      }),
                    }),
                    (0, t.jsx)(He, {
                      onSave: this.CommitChanges,
                      onCancel: this.RevertChanges,
                      disabled: p,
                    }),
                  ],
                }),
              ],
            });
          }
        }
        pt([S.oI], Te.prototype, "CommitChanges", 1),
          pt([S.oI], Te.prototype, "RevertChanges", 1),
          pt([S.oI], Te.prototype, "OnItemSelected", 1);
        function Fi(r) {
          return r ? r.toLocaleLowerCase().replace(/\W/g, "") : "";
        }
        class Je extends u.Component {
          state = { strSearch: "" };
          m_rgSearchableItems = null;
          m_fnSearchFieldsDisposer;
          m_refRootDiv = u.createRef();
          async componentDidMount() {
            if (this.m_rgSearchableItems === null) {
              const {
                  getItems: e,
                  getSearchFields: i,
                  onItemSelected: a,
                } = this.props,
                s = await e();
              this.m_fnSearchFieldsDisposer = (0, d.fm)(() => {
                (this.m_rgSearchableItems = s.map((o, n) => ({
                  key: "" + n,
                  normalized_search_strings: i && i(o).map(Fi),
                  OnSelected: () => {
                    a(o);
                  },
                  item: o,
                }))),
                  this.props.RenderDefaultComponent &&
                    this.m_rgSearchableItems.unshift({
                      key: "default",
                      normalized_search_strings: [""],
                      OnSelected: () => {
                        a(null);
                      },
                      item: null,
                    }),
                  this.forceUpdate();
              });
            }
          }
          componentWillUnmount() {
            this.m_fnSearchFieldsDisposer && this.m_fnSearchFieldsDisposer();
          }
          BuildFilterPredicate() {
            const { strSearch: e } = this.state;
            if (e && e.trim().length) {
              let i = e
                .toLocaleLowerCase()
                .split(/\W/)
                .filter((a) => a.trim().length > 0);
              return (a) => {
                for (let s of i) {
                  let o = !1;
                  for (let n of a.normalized_search_strings)
                    if (n.includes(s)) {
                      o = !0;
                      break;
                    }
                  if (!o) return !1;
                }
                return !0;
              };
            }
            return null;
          }
          OnSearchChange(e) {
            let i = e.currentTarget.value;
            this.setState((a) => {
              let s = { strSearch: i };
              if (!a.strSearch && i) {
                let o = this.m_refRootDiv.current.getBoundingClientRect();
                (s.nHeight = o.height), (s.nWidth = o.width);
              } else
                a.strSearch && !i && ((s.nHeight = null), (s.nWidth = null));
              return s;
            });
          }
          render() {
            const {
                ItemComponent: e,
                RenderDefaultComponent: i,
                getSearchFields: a,
                activeItem: s,
                fnIsSameItem: o,
                classNameItemPicker: n,
              } = this.props,
              { strSearch: p, nWidth: v, nHeight: w } = this.state;
            if (this.m_rgSearchableItems === null) return null;
            let D = this.BuildFilterPredicate(),
              U = {};
            v && w && (U = { width: v + "px", height: w + "px" });
            let W =
              o ||
              function (K, Pe) {
                return K == Pe;
              };
            return (0, t.jsxs)(E.Z, {
              className: (0, h.A)(re.ItemPicker, n),
              ref: this.m_refRootDiv,
              style: U,
              "flow-children": "column",
              children: [
                a &&
                  (0, t.jsx)("div", {
                    className: re.ItemPickeFilter,
                    children: (0, t.jsx)(x.pd, {
                      value: p,
                      label: (0, l.we)("#ItemPicker_Filter"),
                      onChange: this.OnSearchChange,
                    }),
                  }),
                (0, t.jsx)("div", {
                  className: re.ItemPickerCtn,
                  children: (0, t.jsx)(E.Z, {
                    className: re.ItemPickerList,
                    "flow-children": "grid",
                    children: this.m_rgSearchableItems.map((K) =>
                      D && !D(K)
                        ? null
                        : K.item
                          ? (0, t.jsx)(
                              Ge.tH,
                              {
                                children: (0, t.jsx)(e, {
                                  Item: K.item,
                                  onSelected: K.OnSelected,
                                  active: s && W(K.item, s),
                                }),
                              },
                              K.key,
                            )
                          : (0, t.jsx)(
                              Ge.tH,
                              {
                                children: i({
                                  onSelected: K.OnSelected,
                                  active: !s,
                                }),
                              },
                              K.key,
                            ),
                    ),
                  }),
                }),
              ],
            });
          }
        }
        pt([S.oI], Je.prototype, "OnSearchChange", 1);
        const qe = ({ strHTMLError: r }) =>
            r
              ? (0, t.jsxs)("div", {
                  className: re.HTMLErrorBox,
                  children: [
                    (0, t.jsxs)("b", {
                      children: [(0, l.we)("#Error_Generic_Label"), "\xA0"],
                    }),
                    (0, t.jsx)("span", {
                      className: re.HTMLError,
                      dangerouslySetInnerHTML: { __html: r },
                    }),
                  ],
                })
              : null,
          vt = ({
            strCooldownLabel: r,
            rtCooldownEnd: e,
            strCooldownDescHTML: i,
            children: a,
          }) => {
            if (!e) return (0, t.jsx)(t.Fragment, { children: a });
            const s = Math.max(0, e - Date.now() / 1e3);
            return (0, t.jsxs)("div", {
              className: re.CooldownNotice,
              children: [
                (0, t.jsxs)("div", {
                  className: re.HTMLErrorBox,
                  children: [
                    (0, t.jsxs)("div", {
                      className: re.ErrorMessage,
                      children: [
                        r,
                        " ",
                        (0, l.Hq)(s, {
                          eSuffix: Li.a8.None,
                          bForceSingleUnits: !0,
                        }),
                        " ",
                      ],
                    }),
                    (0, t.jsx)("div", {
                      dangerouslySetInnerHTML: { __html: i },
                    }),
                  ],
                }),
                (0, t.jsx)("div", {
                  className: re.DisabledInputCtn,
                  children: a,
                }),
              ],
            });
          };
        function xr(r) {
          const { image: e, onSelected: i, className: a } = r,
            [s, o] = u.useState(!1),
            [n, p] = u.useState(!1),
            v = () => o(!0),
            w = () => o(!1),
            D = () => p(!0),
            U = () => p(!1),
            W = () => i(e);
          return (0, t.jsx)(E.Z, {
            className: a,
            onGamepadFocus: D,
            onGamepadBlur: U,
            onMouseEnter: v,
            onMouseLeave: w,
            onActivate: W,
            children: (0, t.jsx)("img", {
              src: s || n || $i ? ut(e) : Fe(e),
              loading: "lazy",
            }),
          });
        }
        var Ti = m(24642),
          Mi = Object.defineProperty,
          Ui = Object.getOwnPropertyDescriptor,
          _t = (r, e, i, a) => {
            for (
              var s = a > 1 ? void 0 : a ? Ui(e, i) : e, o = r.length - 1, n;
              o >= 0;
              o--
            )
              (n = r[o]) && (s = (a ? n(e, i, s) : n(s)) || s);
            return a && s && Mi(e, i, s), s;
          };
        let ke = class extends u.Component {
          state = { bReady: !1 };
          m_rgAvatars;
          async componentDidMount() {
            let r;
            ([this.m_rgAvatars, r] = await Promise.all([
              this.props.ProfileItems.GetOwnedAvatars(),
              this.props.OGGAvatars.BWaitForLoad(),
            ])),
              this.setState({ bReady: !0 });
          }
          SelectAnimatedAvatar(r) {
            this.props.Profile.RevertToComittedAvatarHash(),
              this.props.ProfileItems.SetEquippedAvatar(r),
              this.props.fnOnCollapse();
          }
          SelectOGGAvatar(r) {
            this.props.Profile.SetAvatarHash(r),
              this.props.ProfileItems.SetEquippedAvatar(null),
              this.props.fnOnCollapse();
          }
          SelectPreviousAvatar(r) {
            this.props.Profile.SetAvatarHash(r),
              this.props.ProfileItems.SetEquippedAvatar(null),
              this.props.fnOnCollapse();
          }
          GetTopAvatars(r = 4) {
            let e;
            if (((e = this.m_rgAvatars.slice(0, r)), e.length < r)) {
              const i = this.props.AvatarHistory.GetAvatarHistory();
              for (
                let a = 0;
                a < i.length && (e.push(i[a]), !(e.length >= r));
                ++a
              );
            }
            if (e.length < r) {
              let i = si(this.props.OGGAvatars);
              for (
                let a = i.next();
                a.value && (e.push(a.value), !(e.length >= r));
                a = i.next()
              );
            }
            return e;
          }
          render() {
            if (!this.state.bReady) return !1;
            const {
              bExpanded: r,
              fnOnExpand: e,
              OGGAvatars: i,
              AvatarHistory: a,
              fnOnCollapse: s,
            } = this.props;
            if (r)
              return (0, t.jsxs)("div", {
                className: _.AvatarCollection,
                children: [
                  (0, t.jsx)(gt, {
                    children: (0, l.we)("#Profile_Edit_Avatar_YourAvatars"),
                  }),
                  (0, t.jsx)(Hi, {
                    rgAnimatedAvatars: this.m_rgAvatars,
                    OGGAvatars: i,
                    AvatarHistory: a,
                    onSelectAnimatedAvatar: this.SelectAnimatedAvatar,
                    onSelectOGGAvatar: this.SelectOGGAvatar,
                    onSelectPreviousAvatar: this.SelectPreviousAvatar,
                  }),
                ],
              });
            {
              let o = this.GetTopAvatars();
              return (0, t.jsxs)("div", {
                className: _.AvatarCollection,
                children: [
                  (0, t.jsx)(gt, {
                    children: (0, l.we)("#Profile_Edit_Avatar_YourAvatars"),
                  }),
                  (0, t.jsx)("div", {
                    className: _.AvatarCollectionSingleRowWrapper,
                    children: (0, t.jsx)(E.Z, {
                      className: _.AvatarCollectionSingleRow,
                      "flow-children": "row",
                      children: o.map((n) =>
                        "communityitemid" in n
                          ? (0, t.jsxs)(
                              u.Fragment,
                              {
                                children: [
                                  (0, t.jsx)(wr, {
                                    avatar: n,
                                    onSelected: this.SelectAnimatedAvatar,
                                    large: !0,
                                  }),
                                  (0, t.jsx)("div", {
                                    className: _.AvatarRowSpacer,
                                  }),
                                ],
                              },
                              n.communityitemid,
                            )
                          : "timestamp" in n
                            ? (0, t.jsxs)(
                                u.Fragment,
                                {
                                  children: [
                                    (0, t.jsx)(Pt, {
                                      hash: n.avatar_hash,
                                      onSelected: this.SelectPreviousAvatar,
                                      large: !0,
                                    }),
                                    (0, t.jsx)("div", {
                                      className: _.AvatarRowSpacer,
                                    }),
                                  ],
                                },
                                n.avatar_hash,
                              )
                            : (0, t.jsxs)(
                                u.Fragment,
                                {
                                  children: [
                                    (0, t.jsx)(Pt, {
                                      hash: n.avatar_hash,
                                      onSelected: this.SelectOGGAvatar,
                                      large: !0,
                                    }),
                                    (0, t.jsx)("div", {
                                      className: _.AvatarRowSpacer,
                                    }),
                                  ],
                                },
                                n.avatar_hash,
                              ),
                      ),
                    }),
                  }),
                  (0, t.jsx)("div", {
                    className: _.ExpandButtonContainer,
                    children: (0, t.jsx)(x.$n, {
                      onClick: e,
                      children: (0, l.we)("#Profile_Edit_Avatar_SeeAll"),
                    }),
                  }),
                ],
              });
            }
          }
        };
        _t([S.oI], ke.prototype, "SelectAnimatedAvatar", 1),
          _t([S.oI], ke.prototype, "SelectOGGAvatar", 1),
          _t([S.oI], ke.prototype, "SelectPreviousAvatar", 1),
          (ke = _t([C.PA], ke));
        const gt = ({ children: r }) =>
          (0, t.jsx)("div", {
            className: _.AvatarCollectionHeader,
            children: (0, t.jsx)("div", {
              className: _.AvatarCollectionName,
              children: r,
            }),
          });
        function wr(r) {
          const { avatar: e, onSelected: i, large: a } = r;
          return (0, t.jsx)(xr, {
            image: e,
            onSelected: i,
            className: (0, h.A)(_.AvatarPreview, _.Animated, a && _.Large),
          });
        }
        const Pt = ({ hash: r, onSelected: e, large: i }) =>
            (0, t.jsx)(E.Z, {
              className: (0, h.A)(_.AvatarPreview, _.Static, i && _.Large),
              onClick: () => e(r),
              onActivate: () => e(r),
              children: (0, t.jsx)("img", {
                src: (0, j.tp)(r, i ? "full" : "medium"),
                loading: "lazy",
              }),
            }),
          Hi = (0, C.PA)(
            ({
              rgAnimatedAvatars: r,
              OGGAvatars: e,
              AvatarHistory: i,
              onSelectAnimatedAvatar: a,
              onSelectOGGAvatar: s,
              onSelectPreviousAvatar: o,
            }) => {
              let n = i.GetAvatarHistory(),
                p = [...e.GetRecentGameAvatars(), ...e.GetOwnedGameAvatars()];
              return (0, t.jsxs)(E.Z, {
                "flow-children": "column",
                children: [
                  (0, t.jsx)(qi, { rgAnimatedAvatars: r, onSelected: a }),
                  (0, t.jsx)(ki, { rgAvatars: n, onSelected: o }),
                  (0, t.jsx)(jr, {
                    OGGAvatars: e,
                    rgAvatars: p,
                    onSelected: s,
                    title: (0, l.we)("#Profile_Edit_YourGameAvatars"),
                  }),
                  p.length < 20 &&
                    (0, t.jsx)(jr, {
                      OGGAvatars: e,
                      rgAvatars: e.GetOtherGameAvatars(),
                      onSelected: s,
                      title: (0, l.we)("#Profile_Edit_MoreGameAvatars"),
                    }),
                ],
              });
            },
          ),
          qi = ({ rgAnimatedAvatars: r, onSelected: e }) =>
            r.length
              ? (0, t.jsxs)("div", {
                  className: (0, h.A)(_.CollectionGroup, _.Primary),
                  children: [
                    (0, t.jsx)("div", {
                      className: _.Title,
                      children: (0, l.we)(
                        "#Profile_Edit_PurchasedFromRewardsStore",
                      ),
                    }),
                    (0, t.jsx)(E.Z, {
                      className: _.CollectionGroupAvatars,
                      "flow-children": "grid",
                      children: r.map((i) =>
                        (0, t.jsx)(
                          wr,
                          { avatar: i, onSelected: e },
                          i.communityitemid,
                        ),
                      ),
                    }),
                  ],
                })
              : null,
          ki = (0, C.PA)(({ rgAvatars: r, onSelected: e }) =>
            r.length
              ? (0, t.jsxs)("div", {
                  className: (0, h.A)(_.CollectionGroup, _.Primary),
                  children: [
                    (0, t.jsx)("div", {
                      className: _.Title,
                      children: (0, l.we)("#Profile_Edit_YourPreviousAvatars"),
                    }),
                    (0, t.jsx)("div", {
                      className: _.CollectionGroupAvatars,
                      children: r.map((i) =>
                        (0, t.jsx)(
                          Pt,
                          { hash: i.avatar_hash, onSelected: e },
                          i.avatar_hash,
                        ),
                      ),
                    }),
                  ],
                })
              : null,
          );
        function jr(r) {
          const { rgAvatars: e, OGGAvatars: i, onSelected: a, title: s } = r;
          return e.length
            ? (0, t.jsxs)("div", {
                className: (0, h.A)(_.CollectionGroup, _.Primary),
                children: [
                  (0, t.jsx)("div", { className: _.Title, children: s }),
                  e.map((o) =>
                    (0, t.jsx)(
                      Ki,
                      { OGGAvatars: i, game: o, onSelected: a },
                      o.appid,
                    ),
                  ),
                ],
              })
            : null;
        }
        function Ki(r) {
          const { game: e, onSelected: i, OGGAvatars: a } = r,
            [s, o] = u.useState(!1),
            { isLoading: n, data: p } = Qi(a, e.appid, s);
          let v;
          s && p
            ? (v = p)
            : e.avatar_count == e.avatars.length
              ? (v = e.avatars)
              : (v = e.avatars.slice(0, 5));
          const w = e.avatar_count - v.length;
          return (0, t.jsxs)("div", {
            className: _.CollectionGroup,
            children: [
              (0, t.jsx)("div", { className: _.Title, children: e.name }),
              (0, t.jsxs)(E.Z, {
                className: _.CollectionGroupAvatars,
                "flow-children": "grid",
                children: [
                  v.map((D) =>
                    (0, t.jsx)(
                      Pt,
                      { hash: D.avatar_hash, onSelected: i },
                      D.avatar_hash,
                    ),
                  ),
                  (!s || n) &&
                    w > 0 &&
                    (0, t.jsxs)(x.$n, {
                      type: "button",
                      className: (0, h.A)(
                        _.AvatarPreview,
                        _.ExpandAvatarsButton,
                        _.Static,
                      ),
                      disabled: n,
                      onClick: n ? void 0 : () => o(!0),
                      children: ["+", (0, Ti.D)(w)],
                    }),
                ],
              }),
            ],
          });
        }
        function Qi(r, e, i) {
          return (0, Xe.I)({
            queryKey: ["OGGAvatars", e],
            queryFn: async () => {
              const s = await (
                await fetch(
                  `${bi.TS.COMMUNITY_BASE_URL}actions/GameAvatarsForGame/${e}`,
                )
              ).json();
              return r.UpdateAvatarsForGame(e, s), s;
            },
            enabled: i,
          });
        }
        var Wi = Object.defineProperty,
          zi = Object.getOwnPropertyDescriptor,
          Vi = (r, e, i, a) => {
            for (
              var s = a > 1 ? void 0 : a ? zi(e, i) : e, o = r.length - 1, n;
              o >= 0;
              o--
            )
              (n = r[o]) && (s = (a ? n(e, i, s) : n(s)) || s);
            return a && s && Wi(e, i, s), s;
          };
        class Ir extends u.Component {
          state = { bReady: !1 };
          m_rgFrames;
          async componentDidMount() {
            (this.m_rgFrames =
              await this.props.ProfileItems.GetOwnedAvatarFrames()),
              this.setState({ bReady: !0 });
          }
          SelectFrame(e) {
            this.props.ProfileItems.SetEquippedAvatarFrame(e),
              this.props.fnOnCollapse();
          }
          render() {
            if (!this.state.bReady) return !1;
            const {
              bExpanded: e,
              ProfileItems: i,
              fnOnExpand: a,
              fnOnCollapse: s,
            } = this.props;
            if (e)
              return (0, t.jsxs)("div", {
                className: _.AvatarCollection,
                children: [
                  (0, t.jsx)(gt, {
                    children: (0, l.we)("#Profile_Edit_Avatar_YourFrames"),
                  }),
                  (0, t.jsx)(Ge.tH, {
                    children: (0, t.jsx)(Zi, {
                      rgFrames: this.m_rgFrames,
                      ProfileItems: i,
                      onSelected: this.SelectFrame,
                    }),
                  }),
                ],
              });
            {
              let o = this.m_rgFrames.slice(0, 2),
                n = this.m_rgFrames.length > 2;
              return (0, t.jsxs)(E.Z, {
                className: _.AvatarCollection,
                "flow-children": "column",
                children: [
                  (0, t.jsx)(gt, {
                    children: (0, l.we)("#Profile_Edit_Avatar_YourFrames"),
                  }),
                  (0, t.jsx)("div", {
                    className: _.AvatarCollectionSingleRowWrapper,
                    children: (0, t.jsxs)(E.Z, {
                      className: (0, h.A)(
                        _.AvatarCollectionSingleRow,
                        _.ThreeColumns,
                      ),
                      "flow-children": "row",
                      children: [
                        (0, t.jsx)(Er, {
                          onSelected: this.SelectFrame,
                          large: !0,
                          ProfileItems: i,
                        }),
                        (0, t.jsx)("div", { className: _.AvatarRowSpacer }),
                        (0, t.jsx)(Ge.tH, {
                          children: o.map((p) =>
                            (0, t.jsxs)(
                              u.Fragment,
                              {
                                children: [
                                  (0, t.jsx)(Br, {
                                    frame: p,
                                    onSelected: this.SelectFrame,
                                    large: !0,
                                  }),
                                  (0, t.jsx)("div", {
                                    className: _.AvatarRowSpacer,
                                  }),
                                ],
                              },
                              p.communityitemid,
                            ),
                          ),
                        }),
                      ],
                    }),
                  }),
                  n &&
                    (0, t.jsx)("div", {
                      className: _.ExpandButtonContainer,
                      children: (0, t.jsx)(x.$n, {
                        onClick: a,
                        children: (0, l.we)("#Profile_Edit_Avatar_SeeAll"),
                      }),
                    }),
                ],
              });
            }
          }
        }
        Vi([S.oI], Ir.prototype, "SelectFrame", 1);
        function Br(r) {
          const { frame: e, onSelected: i, large: a } = r;
          return (0, t.jsx)(xr, {
            image: e,
            onSelected: i,
            className: (0, h.A)(_.FramePreview, a && _.Large),
          });
        }
        const Er = (0, C.PA)(({ onSelected: r, ProfileItems: e, large: i }) => {
            let a = e.GetProfileModifierAvatarFrameURL();
            return a
              ? (0, t.jsx)(E.Z, {
                  className: (0, h.A)(_.FramePreview, i && _.Large),
                  onActivate: () => r(null),
                  children: (0, t.jsx)("img", { src: a }),
                })
              : (0, t.jsx)(E.Z, {
                  className: (0, h.A)(
                    _.FramePreview,
                    i && _.Large,
                    _.DefaultAvatarFramePreview,
                  ),
                  onActivate: () => r(null),
                  children: (0, t.jsx)("div", {
                    className: _.DefaultAvatarFrame,
                    children: (0, t.jsx)("div", {
                      className: _.DefaultAvatarFrameContent,
                    }),
                  }),
                });
          }),
          Zi = ({ rgFrames: r, ProfileItems: e, onSelected: i }) =>
            (0, t.jsxs)("div", {
              className: (0, h.A)(_.CollectionGroup, _.Primary),
              children: [
                (0, t.jsx)("div", {
                  className: _.Title,
                  children: (0, l.we)(
                    "#Profile_Edit_PurchasedFromRewardsStore",
                  ),
                }),
                (0, t.jsxs)(E.Z, {
                  className: _.CollectionGroupAvatars,
                  "flow-children": "grid",
                  children: [
                    (0, t.jsx)(Er, { onSelected: i, ProfileItems: e }),
                    r.map((a) =>
                      (0, t.jsx)(
                        Br,
                        { frame: a, onSelected: i },
                        a.communityitemid,
                      ),
                    ),
                  ],
                }),
              ],
            });
        var Xi = Object.defineProperty,
          Yi = Object.getOwnPropertyDescriptor,
          Re = (r, e, i, a) => {
            for (
              var s = a > 1 ? void 0 : a ? Yi(e, i) : e, o = r.length - 1, n;
              o >= 0;
              o--
            )
              (n = r[o]) && (s = (a ? n(e, i, s) : n(s)) || s);
            return a && s && Xi(e, i, s), s;
          };
        const Ji = u.lazy(() =>
            Promise.all([m.e(54922), m.e(25278)]).then(m.bind(m, 66185)),
          ),
          $i = !0;
        let Vt = class extends u.Component {
          render() {
            return (0, t.jsx)(Ne, { ...this.props });
          }
        };
        Vt = Re([C.PA], Vt);
        class ea extends u.Component {
          m_disposer;
          componentDidMount() {
            document
              .querySelector(".profile_small_header_avatar")
              .classList.add(Y.HideDefaultAvatar),
              (this.m_disposer = (0, d.fm)(() => {
                const { Profile: e, ProfileItems: i } = this.props,
                  a = $e(
                    e.GetCommittedAvatarHash(),
                    i.GetCommittedEquippedAvatar(),
                    "small",
                    { disableAnimation: !0 },
                  );
                document
                  .querySelectorAll(".user_avatar > img")
                  .forEach((s) => (s.src = a));
              }));
          }
          componentWillUnmount() {
            document
              .querySelector(".profile_small_header_avatar")
              .classList.remove(Y.HideDefaultAvatar),
              this.m_disposer();
          }
          render() {
            const { Profile: e, ProfileItems: i } = this.props;
            return Ni.createPortal(
              (0, t.jsx)(aa, { Profile: e, ProfileItems: i }),
              document.querySelector(".profile_small_header_avatar"),
            );
          }
        }
        class Ne extends u.Component {
          state = {
            uploadImage: null,
            strUploadError: "",
            bAvatarCollectionExpanded: !1,
            bFrameCollectionExpanded: !1,
            bSaving: !1,
            bHTMLError: !1,
          };
          cropRef = u.createRef();
          OnUploadSelected(e) {
            this.setState({
              uploadImage: e,
              bAvatarCollectionExpanded: !1,
              bFrameCollectionExpanded: !1,
            });
          }
          OnShowAllAvatarsClicked() {
            this.setState({
              bAvatarCollectionExpanded: !0,
              bFrameCollectionExpanded: !1,
            });
          }
          OnShowAllFramesClicked() {
            this.setState({
              bAvatarCollectionExpanded: !1,
              bFrameCollectionExpanded: !0,
            });
          }
          Reset() {
            (this.cropRef = u.createRef()),
              this.setState({
                uploadImage: null,
                strUploadError: "",
                bAvatarCollectionExpanded: !1,
                bFrameCollectionExpanded: !1,
                bHTMLError: !1,
              });
          }
          RevertChanges() {
            this.props.ProfileItems.RevertAvatarChanges(),
              this.props.Profile.RevertToComittedAvatarHash(),
              this.Reset();
          }
          async OnSave() {
            this.setState({ bSaving: !0 }),
              this.state.uploadImage
                ? await this.SaveUpload()
                : await this.CommitChanges(),
              this.setState({ bSaving: !1 }),
              this.props.Profile.NotifyRNMobileAppStateChanged();
          }
          async SaveUpload() {
            const {
                Profile: e,
                ProfileItems: i,
                AvatarHistory: a,
              } = this.props,
              s = await e.UploadAvatar(await this.cropRef.current?.getBlob());
            if (!s.bSuccess) {
              this.setState({ strUploadError: s.strError });
              return;
            }
            this.setState({ uploadImage: null, strUploadError: "" }),
              (this.cropRef = u.createRef()),
              i.SetEquippedAvatar(null, !0),
              a.RefreshAvatarHistory(),
              this.setState({
                bHTMLError: (await i.CommitAvatarChanges()) !== L.R,
              });
          }
          async CommitChanges() {
            const {
                Profile: e,
                ProfileItems: i,
                OGGAvatars: a,
                AvatarHistory: s,
              } = this.props,
              [o, n, p] = await Promise.all([
                i.CommitAvatarChanges(),
                e.BHasUncomittedAvatarChanges()
                  ? a.SetPlayerOGGAvatar(e)
                  : Promise.resolve(L.R),
                e.BHasUncomittedAvatarChanges()
                  ? s.SetPreviousAvatar(e)
                  : Promise.resolve(L.R),
              ]);
            this.setState({
              bHTMLError: o !== L.R || (n !== L.R && p !== L.R),
            }),
              s.RefreshAvatarHistory();
          }
          componentWillUnmount() {
            this.RevertChanges();
          }
          render() {
            const {
                Profile: e,
                ProfileItems: i,
                OGGAvatars: a,
                AvatarHistory: s,
              } = this.props,
              {
                uploadImage: o,
                bAvatarCollectionExpanded: n,
                bFrameCollectionExpanded: p,
                bSaving: v,
              } = this.state,
              w = {
                Profile: e,
                ProfileItems: i,
                OGGAvatars: a,
                AvatarHistory: s,
                fnOnCollapse: this.Reset,
              };
            return (0, t.jsxs)(x.nB, {
              className: Y.AvatarDialog,
              children: [
                (0, t.jsx)(X.XG, {
                  when: i.BIsAvatarUncomitted(),
                  message: (0, l.we)("#Profile_Edit_UnsavedChangesWarning"),
                }),
                (0, t.jsxs)(E.Z, {
                  "flow-children": "column",
                  children: [
                    (0, t.jsxs)(E.Z, {
                      className: Y.AvatarDialogBody,
                      "flow-children": "column",
                      children: [
                        (0, t.jsx)(x.Y9, {
                          children: (0, l.we)("#Profile_FieldAvatar"),
                        }),
                        (0, t.jsx)(x.a3, {
                          children: (0, l.we)(
                            "#Profile_Edit_Avatar_Instructions",
                          ),
                        }),
                        (0, t.jsx)(qe, {
                          strHTMLError: this.state.bHTMLError
                            ? (0, l.we)("#ConnectionTrouble_FailedToConnect")
                            : "",
                        }),
                        (0, t.jsxs)(ta, {
                          Profile: e,
                          children: [
                            (0, t.jsxs)("div", {
                              className: Y.AvatarDialogTop,
                              children: [
                                (0, t.jsx)(ra, { Profile: e, ProfileItems: i }),
                                (0, t.jsxs)("div", {
                                  className: Y.AvatarDialogUploadArea,
                                  children: [
                                    (0, t.jsx)(ia, {
                                      OnAvatarSelected: this.OnUploadSelected,
                                      disabled: this.state.bSaving,
                                      strError: this.state.strUploadError,
                                    }),
                                    (0, t.jsx)("div", {
                                      children: (0, l.we)(
                                        "#Profile_Edit_Avatar_UploadInstructions",
                                      ),
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            o &&
                              (0, t.jsx)(u.Suspense, {
                                fallback: null,
                                children: (0, t.jsx)(Ji, {
                                  imageData: o,
                                  ref: this.cropRef,
                                }),
                              }),
                            !o &&
                              !p &&
                              (0, t.jsx)(ke, {
                                ...w,
                                bExpanded: n,
                                fnOnExpand: this.OnShowAllAvatarsClicked,
                              }),
                            !o &&
                              !n &&
                              (0, t.jsx)(Ir, {
                                ...w,
                                bExpanded: p,
                                fnOnExpand: this.OnShowAllFramesClicked,
                              }),
                          ],
                        }),
                      ],
                    }),
                    (0, t.jsx)(He, {
                      onSave: this.OnSave,
                      onCancel: this.RevertChanges,
                      disabled: v || e.BIsAvatarChangeOnCooldown(),
                    }),
                  ],
                }),
              ],
            });
          }
        }
        Re([S.oI], Ne.prototype, "OnUploadSelected", 1),
          Re([S.oI], Ne.prototype, "OnShowAllAvatarsClicked", 1),
          Re([S.oI], Ne.prototype, "OnShowAllFramesClicked", 1),
          Re([S.oI], Ne.prototype, "Reset", 1),
          Re([S.oI], Ne.prototype, "RevertChanges", 1),
          Re([S.oI], Ne.prototype, "OnSave", 1),
          Re([S.oI], Ne.prototype, "SaveUpload", 1),
          Re([S.oI], Ne.prototype, "CommitChanges", 1);
        const ta = ({ Profile: r, children: e }) =>
          r.BIsAvatarChangeOnCooldown()
            ? (0, t.jsx)(vt, {
                rtCooldownEnd: r.GetAvatarChangeCooldownEndRTime(),
                strCooldownLabel: (0, l.we)("#Profile_AvatarUploadingBanned"),
                strCooldownDescHTML: (0, l.we)(
                  "#Profile_AvatarUploadingBanned_Desc",
                  te.k_strAvatarCooldownSupportURL,
                ),
                children: e,
              })
            : (0, t.jsx)(t.Fragment, { children: e });
        function $e(r, e, i, a) {
          return e
            ? a?.disableAnimation
              ? Fe(e)
              : ut(e)
            : (0, Qt.t)(r || Qt.d, i);
        }
        const ra = (0, C.PA)(({ Profile: r, ProfileItems: e }) => {
            const i = r.GetAvatarHash(),
              a = e.GetEquippedAvatar(),
              s = e.GetEquippedAvatarFrame();
            let o = !s && e.GetEquippedProfileModifier();
            o && !e.BIsLegacyGoldenProfile(o.appid) && (o = null);
            let n = null;
            return (
              o ? (n = e.GetProfileModifierAvatarFrameURL()) : s && (n = ut(s)),
              (0, t.jsxs)("div", {
                className: Y.AvatarRow,
                children: [
                  (0, t.jsx)(Zt, {
                    sizeClassName: Y.Large,
                    sizePx: 184,
                    avatarURL: $e(i, a, "full"),
                    frameURL: n,
                    isGolden: !!o,
                  }),
                  (0, t.jsx)(Zt, {
                    sizeClassName: Y.Medium,
                    sizePx: 64,
                    avatarURL: $e(i, a, "medium"),
                    frameURL: n,
                    isGolden: !!o,
                  }),
                  (0, t.jsx)(Zt, {
                    sizeClassName: Y.Small,
                    sizePx: 32,
                    avatarURL: $e(i, a, "small"),
                    frameURL: n,
                    isGolden: !!o,
                  }),
                ],
              })
            );
          }),
          Zt = ({
            sizeClassName: r,
            sizePx: e,
            avatarURL: i,
            frameURL: a,
            isGolden: s,
          }) =>
            (0, t.jsxs)("div", {
              className: (0, h.A)(Y.Avatar, r),
              children: [
                (0, t.jsxs)("div", {
                  className: Y.AvatarImgCtn,
                  children: [
                    (0, t.jsx)("div", { className: Y.AvatarCropPreview }),
                    a &&
                      (0, t.jsx)("div", {
                        className: Y.AvatarFrame,
                        children: (0, t.jsx)("img", { src: a }),
                      }),
                    s &&
                      (0, t.jsx)("div", { className: "goldenAvatarOverlay" }),
                    (0, t.jsx)("img", { src: i }),
                  ],
                }),
                (0, t.jsxs)("div", { className: Y.size, children: [e, "px"] }),
              ],
            });
        function ia(r) {
          const { OnAvatarSelected: e, disabled: i, strError: a } = r,
            s = u.useRef(void 0),
            o = u.useCallback(() => {
              const n = s.current?.files;
              n?.length > 0 &&
                n[0].type.startsWith("image/") &&
                (e(n[0]), (s.current.value = null));
            }, [e]);
          return (0, t.jsxs)(t.Fragment, {
            children: [
              (0, t.jsx)("input", {
                type: "file",
                accept: "image/*",
                style: { display: "none" },
                ref: s,
                onInput: o,
              }),
              !!a && (0, t.jsx)("div", { className: Y.Error, children: a }),
              (0, t.jsx)(x.$n, {
                onClick: () => s.current.click(),
                disabled: i,
                children: (0, l.we)("#Profile_UploadAvatar"),
              }),
            ],
          });
        }
        const aa = (0, C.PA)(({ Profile: r, ProfileItems: e }) => {
          const i = $e(
              r.GetCommittedAvatarHash(),
              e.GetCommittedEquippedAvatar(),
              "full",
            ),
            a = e.GetCommittedEquippedAvatarFrame(),
            s = !a && e.GetCommittedEquippedProfileModifier();
          let o = null;
          return (
            s ? (o = e.GetProfileModifierAvatarFrameURL()) : a && (o = ut(a)),
            (0, t.jsx)("div", {
              className: (0, h.A)(Y.Avatar, Y.Medium),
              children: (0, t.jsxs)("div", {
                className: Y.AvatarImgCtn,
                children: [
                  o &&
                    (0, t.jsx)("div", {
                      className: Y.AvatarFrame,
                      children: (0, t.jsx)("img", { src: o }),
                    }),
                  (0, t.jsx)("img", { src: i }),
                ],
              }),
            })
          );
        });
        var sa = m(43828),
          Gr = m(27456),
          Xt = m(65946);
        function oa(r) {
          const {
            Profile: { Location: e },
          } = r;
          return (0, t.jsxs)(t.Fragment, {
            children: [
              (0, t.jsx)(na, { LocationStore: e }),
              (0, t.jsx)(la, { LocationStore: e }),
              (0, t.jsx)(ma, { LocationStore: e }),
            ],
          });
        }
        async function Yt(r, e) {
          const i = await r();
          return [
            { label: (0, l.we)("#Profile_LocationDoNotDisplay"), data: null },
            ...i
              .map(e)
              .sort((a, s) =>
                a.data.strDisplayText.localeCompare(s.data.strDisplayText),
              ),
          ];
        }
        function na(r) {
          const { LocationStore: e } = r,
            { CountryCode: i, Country: a } = e,
            [s, o] = u.useState(),
            n = (0, Xe.I)({
              queryKey: ["CountryEdit"],
              queryFn: async () =>
                await Yt(
                  () => e.GetCountryList(),
                  (w) => ({
                    label: w.countryname,
                    data: {
                      strCode: w.countrycode,
                      strDisplayText: w.countryname,
                    },
                  }),
                ),
              staleTime: 1 / 0,
            });
          u.useEffect(() => {
            o(
              n.data?.find((v) => v.data?.strCode == e.CountryCode) ??
                (n.data?.length > 0 ? n.data[0] : void 0),
            );
          }, [n.data, e.CountryCode]);
          const p = u.useCallback(
            (v) => {
              e.SetCountry(
                v.data?.strCode,
                v.data?.strCode ? v.data.strDisplayText : void 0,
              ),
                o(v);
            },
            [e],
          );
          return (0, t.jsxs)(t.Fragment, {
            children: [
              (0, t.jsx)("input", {
                type: "hidden",
                name: "country",
                value: i || "",
              }),
              (0, t.jsx)(x.m, {
                contextMenuPositionOptions: { bDisablePopTop: !0 },
                label: (0, l.we)("#Profile_FieldCountry"),
                rgOptions: n.data,
                selectedOption: s?.data,
                controlled: !0,
                disabled: n.isFetching,
                onChange: p,
                strDefaultLabel:
                  a || (0, l.we)("#Profile_LocationDoNotDisplay"),
                tooltip: Ye("#Profile_DescriptionLocation"),
              }),
            ],
          });
        }
        function la(r) {
          const { LocationStore: e } = r,
            { StateCode: i, State: a } = e,
            [s, o] = u.useState(),
            [n, p] = (0, Xt.q3)(() => [
              e.BIsStateSelectionAvailable(),
              e.CountryCode,
            ]),
            v = (0, Xe.I)({
              queryKey: ["StateEdit", p],
              queryFn: async () =>
                await Yt(
                  () => e.GetStateList(),
                  (W) => ({
                    label: W.statename,
                    data: { strCode: W.statecode, strDisplayText: W.statename },
                  }),
                ),
              staleTime: 1 / 0,
            });
          u.useEffect(() => {
            o(
              v.data?.find((U) => U.data?.strCode == e.StateCode) ??
                (v.data?.length > 0 ? v.data[0] : void 0),
            );
          }, [v.data, e.StateCode]);
          const w = u.useCallback(
              (U) => {
                e.SetState(
                  U.data?.strCode,
                  U.data?.strCode ? U.data.strDisplayText : void 0,
                ),
                  o(U);
              },
              [e],
            ),
            D = n && !v.isError;
          return (0, t.jsxs)(t.Fragment, {
            children: [
              (0, t.jsx)("input", {
                type: "hidden",
                name: "state",
                value: i || "",
              }),
              D &&
                (0, t.jsx)(x.m, {
                  contextMenuPositionOptions: { bDisablePopTop: !0 },
                  label: (0, l.we)("#Profile_FieldState"),
                  rgOptions: v.data,
                  selectedOption: s?.data,
                  controlled: !0,
                  disabled: v.isFetching,
                  onChange: w,
                  strDefaultLabel:
                    a || (0, l.we)("#Profile_LocationDoNotDisplay"),
                  tooltip: Ye("#Profile_DescriptionLocation"),
                }),
            ],
          });
        }
        function ma(r) {
          const { LocationStore: e } = r,
            { CityCode: i, City: a } = e,
            [s, o] = u.useState(),
            [n, p, v] = (0, Xt.q3)(() => [
              e.BIsCitySelectionAvailable(),
              e.CountryCode,
              e.StateCode,
            ]),
            w = (0, Xe.I)({
              queryKey: ["CityEdit", p, v],
              queryFn: async () =>
                await Yt(
                  () => e.GetCityList(),
                  (K) => ({
                    label: K.cityname,
                    data: {
                      strCode: "" + K.cityid,
                      strDisplayText: K.cityname,
                    },
                  }),
                ),
              staleTime: 1 / 0,
              retry: !1,
            });
          u.useEffect(() => {
            o(
              w.data?.find((W) => W.data?.strCode == e.CityCode) ??
                (w.data?.length > 0 ? w.data[0] : void 0),
            );
          }, [w.data, e.CityCode]);
          const D = u.useCallback(
              (W) => {
                e.SetCity(
                  W.data?.strCode,
                  W.data?.strCode ? W.data.strDisplayText : void 0,
                ),
                  o(W);
              },
              [e],
            ),
            U = n && !w.isError;
          return (0, t.jsxs)(t.Fragment, {
            children: [
              (0, t.jsx)("input", {
                type: "hidden",
                name: "city",
                value: i || "",
              }),
              U &&
                (0, t.jsx)(x.m, {
                  contextMenuPositionOptions: { bDisablePopTop: !0 },
                  label: (0, l.we)("#Profile_FieldCity"),
                  rgOptions: w.data,
                  selectedOption: s?.data,
                  controlled: !0,
                  disabled: w.isFetching,
                  onChange: D,
                  strDefaultLabel:
                    a || (0, l.we)("#Profile_LocationDoNotDisplay"),
                  tooltip: Ye("#Profile_DescriptionLocation"),
                }),
            ],
          });
        }
        var da = m(22714),
          yt = m(19838),
          ca = Object.defineProperty,
          ua = Object.getOwnPropertyDescriptor,
          Rr = (r, e, i, a) => {
            for (
              var s = a > 1 ? void 0 : a ? ua(e, i) : e, o = r.length - 1, n;
              o >= 0;
              o--
            )
              (n = r[o]) && (s = (a ? n(e, i, s) : n(s)) || s);
            return a && s && ca(e, i, s), s;
          };
        class Jt extends u.Component {
          state = { strSummary: "" };
          m_refTextInput = u.createRef();
          static getDerivedStateFromProps(e) {
            return { strSummary: e.Profile.GetSummary() };
          }
          OnChange(e) {
            this.SetInputValue(e.currentTarget.value);
          }
          InsertEmoticon(e, i) {
            i || this.m_refTextInput.current.focus(),
              this.InsertAtCursor(`:${e}:`);
          }
          InsertAtCursor(e) {
            let i = this.m_refTextInput.current.textarea,
              a = i.value,
              s = a.substr(0, i.selectionStart) + e + a.substr(i.selectionEnd),
              o = i.selectionStart + e.length;
            this.SetInputValue(s, () => {
              i.selectionStart = i.selectionEnd = o;
            });
          }
          SetInputValue(e, i) {
            this.setState({ strSummary: e }, i),
              this.props.Profile.SetSummary(e);
          }
          render() {
            const { EmoticonStore: e, Profile: i } = this.props,
              { strSummary: a } = this.state;
            return (0, t.jsx)(ha, {
              Profile: i,
              children: (0, t.jsxs)("div", {
                className: yt.summaryContainer,
                children: [
                  (0, t.jsx)(x.Cl, {
                    nMinHeight: 40,
                    name: "summary",
                    rows: 3,
                    cols: 40,
                    onChange: this.OnChange,
                    className: yt.summaryTextArea,
                    value: a,
                    ref: this.m_refTextInput,
                  }),
                  (0, t.jsx)("div", {
                    className: yt.formattingButtons,
                    children: (0, t.jsx)(da.A, {
                      className: yt.formattingButton,
                      disabled: !1,
                      OnEmoticonSelected: this.InsertEmoticon,
                      emoticonStore: e,
                    }),
                  }),
                ],
              }),
            });
          }
        }
        Rr([S.oI], Jt.prototype, "OnChange", 1),
          Rr([S.oI], Jt.prototype, "InsertEmoticon", 1);
        const ha = ({ Profile: r, children: e }) =>
          r.BIsProfileSummaryChangeOnCooldown()
            ? (0, t.jsx)(vt, {
                rtCooldownEnd: r.GetProfileSummaryCooldownEndRTime(),
                strCooldownLabel: (0, l.we)("#Profile_ProfileSummaryCooldown"),
                strCooldownDescHTML: (0, l.we)(
                  "#Profile_ProfileSummaryCooldown_Desc",
                  te.k_strProfileSummaryCooldownSupportURL,
                ),
                children: e,
              })
            : (0, t.jsx)(t.Fragment, { children: e });
        var $t = m(20169),
          pa = Object.defineProperty,
          fa = Object.getOwnPropertyDescriptor,
          je = (r, e, i, a) => {
            for (
              var s = a > 1 ? void 0 : a ? fa(e, i) : e, o = r.length - 1, n;
              o >= 0;
              o--
            )
              (n = r[o]) && (s = (a ? n(e, i, s) : n(s)) || s);
            return a && s && pa(e, i, s), s;
          };
        class er extends u.Component {
          state = { bSaving: !1, strHTMLError: "" };
          OnSubmit(e) {
            e.preventDefault(), this.CommitChanges(e.currentTarget);
          }
          async CommitChanges(e) {
            this.setState({ bSaving: !0, strHTMLError: "" });
            let i = await Wt("profileSave", new FormData(e));
            if (i.strRedirectURL) {
              window.location.href = `${i.strRedirectURL}/info`;
              return;
            }
            this.props.Profile.SetBasicInfoChangesComitted(),
              i.strHTMLError
                ? this.setState({ strHTMLError: i.strHTMLError })
                : this.setState({ strHTMLError: "" }),
              this.setState({ bSaving: !1 }),
              this.props.Profile.NotifyRNMobileAppStateChanged();
          }
          RevertChanges() {
            const { Profile: e } = this.props;
            e.RevertBasicInfoChanges(), this.setState({ strHTMLError: "" });
          }
          render() {
            const { Profile: e, EmoticonStore: i } = this.props,
              { bSaving: a, strHTMLError: s } = this.state;
            return (0, t.jsx)(E.Z, {
              "flow-children": "column",
              navEntryPreferPosition: $t.iU.MAINTAIN_Y,
              children: (0, t.jsxs)("form", {
                method: "POST",
                action: `${R.ProfileURL}edit/info`,
                onSubmit: this.OnSubmit,
                children: [
                  (0, t.jsx)("input", {
                    type: "hidden",
                    name: "sessionID",
                    value: (0, f.KC)(),
                  }),
                  (0, t.jsx)("input", {
                    type: "hidden",
                    name: "type",
                    value: "profileSave",
                  }),
                  (0, t.jsx)("input", {
                    type: "hidden",
                    name: "weblink_1_title",
                    value: "",
                  }),
                  (0, t.jsx)("input", {
                    type: "hidden",
                    name: "weblink_1_url",
                    value: "",
                  }),
                  (0, t.jsx)("input", {
                    type: "hidden",
                    name: "weblink_2_title",
                    value: "",
                  }),
                  (0, t.jsx)("input", {
                    type: "hidden",
                    name: "weblink_2_url",
                    value: "",
                  }),
                  (0, t.jsx)("input", {
                    type: "hidden",
                    name: "weblink_3_title",
                    value: "",
                  }),
                  (0, t.jsx)("input", {
                    type: "hidden",
                    name: "weblink_3_url",
                    value: "",
                  }),
                  (0, t.jsx)(x.Y9, { children: (0, l.we)("#Profile_About") }),
                  (0, t.jsx)(x.a3, { children: (0, t.jsx)(va, {}) }),
                  (0, t.jsx)(qe, { strHTMLError: s }),
                  (0, t.jsxs)(ft, {
                    title: (0, l.we)("#Profile_Edit_BasicInfo"),
                    children: [
                      (0, t.jsx)(et, { Profile: e }),
                      !(0, pe.nA)(f.TS.EREALM) &&
                        (0, t.jsx)(Ct, { Profile: e }),
                    ],
                  }),
                  !(0, pe.nA)(f.TS.EREALM) &&
                    (0, t.jsx)(ft, {
                      title: (0, l.we)("#Profile_Edit_Location"),
                      children: (0, t.jsx)(oa, { Profile: e }),
                    }),
                  !(0, pe.nA)(f.TS.EREALM) &&
                    (0, t.jsx)(ft, {
                      title: (0, l.we)("#Profile_FieldSummary"),
                      children: (0, t.jsx)(Jt, {
                        Profile: e,
                        EmoticonStore: i,
                      }),
                    }),
                  !(0, pe.nA)(f.TS.EREALM) &&
                    (0, t.jsx)(ft, {
                      title: (0, l.we)("#Profile_Edit_Preferences"),
                      children: (0, t.jsx)(At, { Profile: e }),
                    }),
                  (0, t.jsx)(He, { onCancel: this.RevertChanges, disabled: a }),
                ],
              }),
            });
          }
        }
        je([S.oI], er.prototype, "OnSubmit", 1),
          je([S.oI], er.prototype, "RevertChanges", 1);
        class va extends u.Component {
          render() {
            return (0, t.jsx)("div", {
              style: { display: "block" },
              children: (0, t.jsx)(sa.h, {
                text: (0, l.we)(
                  (0, pe.nA)(f.TS.EREALM)
                    ? "#Profile_Edit_About_Instructions_SteamChina"
                    : "#Profile_Edit_About_Instructions",
                ),
              }),
            });
          }
        }
        let et = class extends u.Component {
          OnPersonaNameChange(r) {
            this.props.Profile.SetPersonaName(r.target.value);
          }
          OnRealNameChange(r) {
            this.props.Profile.SetRealName(r.target.value);
          }
          render() {
            const { Profile: r } = this.props;
            return (0, t.jsxs)(t.Fragment, {
              children: [
                (0, t.jsxs)(_a, {
                  Profile: r,
                  children: [
                    (0, t.jsx)(x.pd, {
                      label: (0, l.we)("#Profile_FieldProfileName"),
                      disabled: r.BIsPersonaNameChangeOnCooldown(),
                      name: "personaName",
                      value: r.GetPersonaName(),
                      onChange: this.OnPersonaNameChange,
                    }),
                    (0, t.jsx)(ga, { Profile: r }),
                  ],
                }),
                !(0, pe.nA)(f.TS.EREALM) &&
                  (0, t.jsxs)(Pa, {
                    Profile: r,
                    children: [
                      (0, t.jsx)(x.pd, {
                        label: (0, l.we)("#Profile_FieldRealName"),
                        disabled: r.BIsProfileSummaryChangeOnCooldown(),
                        tooltip: Ye("#Profile_DescriptionRealName"),
                        name: "real_name",
                        value: r.GetRealName(),
                        onChange: this.OnRealNameChange,
                      }),
                      (0, t.jsx)(ya, { Profile: r }),
                    ],
                  }),
              ],
            });
          }
        };
        je([S.oI], et.prototype, "OnPersonaNameChange", 1),
          je([S.oI], et.prototype, "OnRealNameChange", 1),
          (et = je([C.PA], et));
        const _a = ({ Profile: r, children: e }) =>
          r.BIsPersonaNameChangeOnCooldown()
            ? (0, t.jsx)(vt, {
                rtCooldownEnd: r.GetPersonaNameCooldownEndRTime(),
                strCooldownLabel: (0, l.we)("#Profile_PersonaNameCooldown"),
                strCooldownDescHTML: (0, l.we)(
                  "#Profile_PersonaNameCooldown_Desc",
                  te.k_strPersonaNameCooldownSupportURL,
                ),
                children: e,
              })
            : (0, t.jsx)(t.Fragment, { children: e });
        class ga extends u.Component {
          render() {
            const { Profile: e } = this.props;
            return e.HasFilteredPersonaName()
              ? (0, t.jsx)("div", {
                  className: Gr.FilteredNameWarning,
                  children: (0, l.oW)(
                    "#Profile_PersonaNameFiltered",
                    (0, t.jsx)("a", { href: te.k_strNameFilteredSupportURL }),
                  ),
                })
              : null;
          }
        }
        const Pa = ({ Profile: r, children: e }) =>
          r.BIsProfileSummaryChangeOnCooldown()
            ? (0, t.jsx)(vt, {
                rtCooldownEnd: r.GetProfileSummaryCooldownEndRTime(),
                strCooldownLabel: (0, l.we)("#Profile_RealNameCooldown"),
                strCooldownDescHTML: (0, l.we)(
                  "#Profile_RealNameCooldown_Desc",
                  te.k_strPersonaNameCooldownSupportURL,
                ),
                children: e,
              })
            : (0, t.jsx)(t.Fragment, { children: e });
        class ya extends u.Component {
          render() {
            const { Profile: e } = this.props;
            return e.HasFilteredRealName()
              ? (0, t.jsx)("div", {
                  className: Gr.FilteredNameWarning,
                  children: (0, l.oW)(
                    "#Profile_RealNameFiltered",
                    (0, t.jsx)("a", { href: te.k_strNameFilteredSupportURL }),
                  ),
                })
              : null;
          }
        }
        let Ct = class extends u.Component {
          OnProfileURLChange(r) {
            this.props.Profile.SetCustomURL(r.target.value);
          }
          render() {
            const { Profile: r } = this.props;
            return (0, t.jsx)(t.Fragment, {
              children: (0, t.jsx)(x.pd, {
                label: (0, l.we)("#Profile_FieldCustomURL"),
                tooltip: Ye("#Profile_DescriptionCustomURL"),
                name: "customURL",
                value: r.GetCustomURL(),
                onChange: this.OnProfileURLChange,
                description: (0, l.we)(
                  "#Profile_ProfileAvailableAtURL",
                  r.GetConstructedURL(),
                ),
              }),
            });
          }
        };
        je([S.oI], Ct.prototype, "OnProfileURLChange", 1),
          (Ct = je([C.PA], Ct));
        let tr = class extends u.Component {
          m_disposer;
          componentDidMount() {
            this.m_disposer = (0, d.fm)(() => {
              const { Profile: r } = this.props;
              document
                .querySelectorAll(".persona_name_text_content")
                .forEach((e) => (e.textContent = r.GetComittedPersonaName()));
            });
          }
          componentWillUnmount() {
            this.m_disposer();
          }
          render() {
            return null;
          }
        };
        tr = je([C.PA], tr);
        let At = class extends u.Component {
          OnProfileAwardsCheckboxChecked(r) {
            let { Profile: e } = this.props,
              i = r,
              a = e.GetPreferences();
            (a.hide_profile_awards = i), e.SetPreferences(a);
          }
          render() {
            const { Profile: r } = this.props,
              e = r.GetPreferences();
            return (0, t.jsxs)("div", {
              children: [
                (0, t.jsx)(x.Yh, {
                  label: (0, l.we)("#Profile_Preferences_HideProfileAwards"),
                  checked: e.hide_profile_awards,
                  onChange: this.OnProfileAwardsCheckboxChecked,
                }),
                (0, t.jsx)("input", {
                  type: "hidden",
                  name: "hide_profile_awards",
                  value: e.hide_profile_awards ? 1 : 0,
                }),
              ],
            });
          }
        };
        je([S.oI], At.prototype, "OnProfileAwardsCheckboxChecked", 1),
          (At = je([C.PA], At));
        var ee = m(90713),
          Ca = Object.defineProperty,
          Aa = Object.getOwnPropertyDescriptor,
          rr = (r, e, i, a) => {
            for (
              var s = a > 1 ? void 0 : a ? Aa(e, i) : e, o = r.length - 1, n;
              o >= 0;
              o--
            )
              (n = r[o]) && (s = (a ? n(e, i, s) : n(s)) || s);
            return a && s && Ca(e, i, s), s;
          };
        let tt = class extends u.Component {
          state = { bSaving: !1, strHTMLError: "" };
          async CommitFavoriteBadge() {
            const r = this.props.Badges;
            this.setState({ bSaving: !0 }),
              (await r.CommitFavoriteBadgeChanges()) != L.R
                ? this.setState({
                    strHTMLError: (0, l.we)(
                      "#ConnectionTrouble_FailedToConnect",
                    ),
                  })
                : this.setState({ strHTMLError: "" }),
              this.setState({ bSaving: !1 });
          }
          RevertFavoriteBadge() {
            this.props.Badges.RevertFavoriteBadge(),
              this.setState({ strHTMLError: "" });
          }
          componentWillUnmount() {
            this.props.Badges.RevertFavoriteBadge();
          }
          render() {
            const { Badges: r } = this.props,
              { bSaving: e, strHTMLError: i } = this.state;
            let a = r.FavoriteBadge;
            return (0, t.jsx)(Ge.tH, {
              children: (0, t.jsxs)(E.Z, {
                "flow-children": "column",
                children: [
                  (0, t.jsx)(X.XG, {
                    when: r.BFavoriteBadgeUncomitted(),
                    message: (0, l.we)("#Profile_Edit_UnsavedChangesWarning"),
                  }),
                  (0, t.jsx)(x.Y9, {
                    children: (0, l.we)("#Profile_Edit_FavoriteBadge"),
                  }),
                  (0, t.jsx)(x.a3, {
                    children: (0, l.we)("#Profile_Edit_Badge_Instructions"),
                  }),
                  (0, t.jsx)(qe, { strHTMLError: i }),
                  a && (0, t.jsx)(Sa, { badge: a }),
                  !a && (0, t.jsx)(xa, { count: r.Badges.length }),
                  (0, t.jsx)(Je, {
                    getSearchFields: wa,
                    getItems: async () => r.Badges,
                    onItemSelected: (s) => {
                      r.SetFavoriteBadge(s);
                    },
                    ItemComponent: ja,
                  }),
                  (0, t.jsx)(He, {
                    onSave: this.CommitFavoriteBadge,
                    onCancel: this.RevertFavoriteBadge,
                    disabled: e,
                  }),
                ],
              }),
            });
          }
        };
        rr([S.oI], tt.prototype, "CommitFavoriteBadge", 1),
          rr([S.oI], tt.prototype, "RevertFavoriteBadge", 1),
          (tt = rr([C.PA], tt));
        const Sa = ({ badge: r, children: e }) =>
            (0, t.jsxs)("div", {
              className: (0, h.A)(ee.Badge, ee.FavoriteBadge),
              children: [
                (0, t.jsx)("img", {
                  className: ee.BadgeImage,
                  src: r.GetIconURL(),
                }),
                (0, t.jsxs)("div", {
                  className: ee.BadgeDetails,
                  children: [
                    (0, t.jsx)("div", {
                      className: ee.BadgeName,
                      children: r.GetName(),
                    }),
                    (0, t.jsx)("div", {
                      className: ee.GameName,
                      children: r.GetGameName(),
                    }),
                  ],
                }),
              ],
            }),
          xa = ({ count: r, children: e }) =>
            (0, t.jsxs)("div", {
              className: (0, h.A)(ee.Badge, ee.FavoriteBadge),
              children: [
                (0, t.jsx)("div", {
                  className: ee.BadgeImageNone,
                  children: (0, t.jsx)("img", {
                    className: ee.BadgeImage,
                    src: `${f.TS.COMMUNITY_CDN_URL}public/images/trans.gif`,
                  }),
                }),
                (0, t.jsxs)("div", {
                  className: ee.BadgeDetails,
                  children: [
                    (0, t.jsx)("div", {
                      className: ee.BadgeName,
                      children: "None selected",
                    }),
                    (0, t.jsx)("div", {
                      className: ee.GameName,
                      children: `${r} badges available`,
                    }),
                  ],
                }),
              ],
            }),
          wa = (r) => [r.GetName(), r.GetGameName()],
          ja = ({ Item: r, onSelected: e }) => {
            const i = r;
            return (0, t.jsxs)(E.Z, {
              className: (0, h.A)(ee.Badge, ee.BadgeOption),
              onActivate: e,
              children: [
                (0, t.jsx)("img", {
                  className: ee.BadgeImage,
                  src: i.GetIconURL(),
                  loading: "lazy",
                }),
                (0, t.jsxs)("div", {
                  className: ee.BadgeDetails,
                  children: [
                    (0, t.jsx)("div", {
                      className: ee.BadgeName,
                      children: i.GetName(),
                    }),
                    (0, t.jsx)("div", {
                      className: ee.GameName,
                      children: i.GetGameName(),
                    }),
                  ],
                }),
              ],
            });
          };
        var Ie = m(53841),
          Ia = Object.defineProperty,
          Ba = Object.getOwnPropertyDescriptor,
          ir = (r, e, i, a) => {
            for (
              var s = a > 1 ? void 0 : a ? Ba(e, i) : e, o = r.length - 1, n;
              o >= 0;
              o--
            )
              (n = r[o]) && (s = (a ? n(e, i, s) : n(s)) || s);
            return a && s && Ia(e, i, s), s;
          };
        let rt = class extends u.Component {
          state = { bSaving: !1, strHTMLError: "" };
          async CommitFavoriteGroup() {
            const r = this.props.Profile.GroupList;
            this.setState({ bSaving: !0 });
            let e = await r.CommitPrimaryGroup();
            e.strHTMLError
              ? this.setState({ strHTMLError: e.strHTMLError })
              : this.setState({ strHTMLError: "" }),
              this.setState({ bSaving: !1 });
          }
          RevertFavoriteGroup() {
            this.props.Profile.GroupList.RevertPrimaryGroupChanges(),
              this.setState({ strHTMLError: "" });
          }
          componentWillUnmount() {
            this.props.Profile.GroupList.RevertPrimaryGroupChanges();
          }
          render() {
            const { Profile: r } = this.props,
              { bSaving: e, strHTMLError: i } = this.state,
              a = r.GroupList,
              s = a.PrimaryGroup;
            return (0, t.jsxs)(E.Z, {
              "flow-children": "column",
              children: [
                (0, t.jsx)(X.XG, {
                  when: a.BPrimaryGroupUncomitted(),
                  message: (0, l.we)("#Profile_Edit_UnsavedChangesWarning"),
                }),
                (0, t.jsx)(x.Y9, {
                  children: (0, l.we)("#Profile_Edit_FavoriteGroup"),
                }),
                (0, t.jsx)(x.a3, {
                  children: (0, l.we)("#Profile_Edit_Group_Instructions"),
                }),
                (0, t.jsx)(qe, { strHTMLError: i }),
                s && (0, t.jsx)(Ea, { group: s }),
                (0, t.jsx)(Je, {
                  getSearchFields: Ga,
                  getItems: async () => (
                    await a.BWaitForUserGroups(), a.GetUserGroups()
                  ),
                  onItemSelected: (o) => {
                    a.SetPrimaryGroup(o);
                  },
                  ItemComponent: Ra,
                }),
                (0, t.jsx)(He, {
                  onSave: this.CommitFavoriteGroup,
                  onCancel: this.RevertFavoriteGroup,
                  disabled: e,
                }),
              ],
            });
          }
        };
        ir([S.oI], rt.prototype, "CommitFavoriteGroup", 1),
          ir([S.oI], rt.prototype, "RevertFavoriteGroup", 1),
          (rt = ir([C.PA], rt));
        const Ea = ({ group: r, children: e }) =>
            (0, t.jsxs)("div", {
              className: (0, h.A)(Ie.Group, Ie.FavoriteGroup),
              children: [
                (0, t.jsx)("img", {
                  className: Ie.GroupAvatar,
                  src: r.GetAvatarURL("full"),
                }),
                (0, t.jsx)("div", {
                  className: Ie.GroupDetails,
                  children: (0, t.jsx)("div", {
                    className: Ie.GroupName,
                    children: r.GetName(),
                  }),
                }),
              ],
            }),
          Ga = (r) => [r.GetName()],
          Ra = ({ Item: r, onSelected: e }) => {
            const i = r;
            return (0, t.jsxs)(E.Z, {
              className: (0, h.A)(Ie.Group, Ie.GroupOption),
              onActivate: e,
              children: [
                (0, t.jsx)("img", {
                  className: Ie.GroupAvatar,
                  src: i.GetAvatarURL("full"),
                  loading: "lazy",
                }),
                (0, t.jsx)("div", {
                  className: Ie.GroupDetails,
                  children: (0, t.jsx)("div", {
                    className: Ie.GroupName,
                    children: i.GetName(),
                  }),
                }),
              ],
            });
          };
        var ae = m(30082);
        const Nr = ({ Item: r, small: e }) => {
            let i = kt(r, e);
            return Object.keys(i).length == 0
              ? null
              : (0, t.jsx)("video", {
                  loop: !0,
                  preload: "none",
                  muted: !0,
                  autoPlay: !0,
                  playsInline: !0,
                  children: Object.keys(i).map((a) =>
                    (0, t.jsx)("source", { src: i[a], type: a }, a),
                  ),
                });
          },
          br = ({ Background: r, className: e, small: i }) =>
            r
              ? (0, t.jsx)("div", {
                  className: e,
                  children: (0, t.jsx)(Nr, { Item: r, small: i }),
                })
              : null;
        function Lr(r) {
          r.currentTarget.querySelector("video").play();
        }
        function Na(r) {
          r.detail.focusedNode.Element.querySelector("video").play();
        }
        function ar(r) {
          return [r.item_title, r.app_name];
        }
        function sr(r, e) {
          return r ? (e ? r.communityitemid === e.communityitemid : !1) : !e;
        }
        var ba = Object.defineProperty,
          La = Object.getOwnPropertyDescriptor,
          Dr = (r, e, i, a) => {
            for (
              var s = a > 1 ? void 0 : a ? La(e, i) : e, o = r.length - 1, n;
              o >= 0;
              o--
            )
              (n = r[o]) && (s = (a ? n(e, i, s) : n(s)) || s);
            return a && s && ba(e, i, s), s;
          };
        let St = class extends u.Component {
          RevertChanges() {
            this.props.ProfileEdit.ProfileItems.RevertMiniProfileBackgroundChanges();
          }
          render() {
            const { ProfileEdit: r } = this.props,
              { Profile: e, ProfileItems: i, MiniProfileOverrideData: a } = r,
              { MiniProfileData: s, PersonaState: o } = e;
            return (0, t.jsxs)(t.Fragment, {
              children: [
                (0, t.jsx)(x.Y9, {
                  children: (0, l.we)("#Profile_Edit_MiniProfile"),
                }),
                (0, t.jsx)(x.a3, {
                  children: (0, l.we)("#Profile_Edit_MiniProfile_Instructions"),
                }),
                (0, t.jsx)(Da, {
                  ProfileItems: i,
                  Profile: e,
                  MiniProfileOverrideData: a,
                  onDismiss: this.RevertChanges,
                }),
              ],
            });
          }
        };
        Dr([S.oI], St.prototype, "RevertChanges", 1), (St = Dr([C.PA], St));
        const Da = (0, C.PA)(
            ({
              Profile: r,
              ProfileItems: e,
              MiniProfileOverrideData: i,
              onDismiss: a,
            }) => {
              let s = e.GetEquippedProfileModifier();
              return (
                s && !e.BIsLegacyGoldenProfile(s.appid) && (s = null),
                (0, t.jsx)(Te, {
                  fnRevertChanges: a,
                  getSearchFields: ar,
                  getItems: () => e.GetOwnedMiniProfileBackgrounds(),
                  fnCommitChanges: async (o) => (
                    e.SetEquippedMiniProfileBackground(o),
                    e.CommitMiniProfileChanges()
                  ),
                  ItemComponent: Or,
                  RenderDefaultComponent: ({ onSelected: o, active: n }) =>
                    (0, t.jsx)(Fa, { onSelected: o, active: n, Modifier: s }),
                  ActiveItem: e.GetEquippedMiniProfileBackground(),
                  fnIsSameItem: sr,
                  fnRenderPreview: (o) =>
                    (0, t.jsx)(Oa, {
                      MiniProfileBackground: o,
                      Profile: r,
                      ProfileItems: e,
                      MiniProfileOverrideData: i,
                    }),
                })
              );
            },
          ),
          Oa = ({
            MiniProfileBackground: r,
            MiniProfileOverrideData: e,
            Profile: i,
            ProfileItems: a,
          }) => {
            const { MiniProfileData: s, PersonaState: o } = i;
            let n;
            if (r) {
              n = kt(r);
              let p = Fe(r);
              p && (n.image = p);
            } else {
              n = a.GetProfileModifierMiniProfileBackgroundMovies();
              let p = a.GetProfileModifierMiniProfileBackground();
              p && (n.image = p);
            }
            return (0, t.jsx)(t.Fragment, {
              children: (0, t.jsx)("div", {
                className: ae.MiniProfileDialogPreviewCtn,
                children: (0, t.jsx)(bt, {
                  persona: o,
                  className: ae.MiniProfilePreview,
                  data_loader: s,
                  community_data_override: { ...e, profile_background: n },
                }),
              }),
            });
          },
          Or = ({ Item: r, onSelected: e, children: i, active: a }) => {
            let s = kt(r),
              o = Object.keys(s).length > 0;
            return (0, t.jsxs)(E.Z, {
              className: (0, h.A)(
                ae.MiniProfileBackgroundOption,
                o && ae.WithVideo,
                a && ae.Active,
              ),
              onActivate: e,
              onMouseEnter: o ? Lr : void 0,
              children: [
                (0, t.jsxs)("div", {
                  className: ae.Preview,
                  children: [
                    (0, t.jsx)("img", { src: Fe(r), loading: "lazy" }),
                    o &&
                      (0, t.jsx)("div", {
                        className: ae.PreviewVideo,
                        children: (0, t.jsx)(Nr, { Item: r }),
                      }),
                  ],
                }),
                (0, t.jsxs)("div", {
                  className: ae.Details,
                  children: [
                    (0, t.jsxs)("div", {
                      children: [
                        (0, t.jsx)("div", {
                          className: ae.Title,
                          children: r.item_title,
                        }),
                        (0, t.jsx)("div", {
                          className: ae.App,
                          children: r.app_name,
                        }),
                      ],
                    }),
                    i,
                  ],
                }),
              ],
            });
          },
          Fa = ({ Modifier: r, onSelected: e, children: i, active: a }) =>
            r
              ? (0, t.jsx)(Or, { Item: r, onSelected: e, active: a })
              : (0, t.jsxs)(E.Z, {
                  className: (0, h.A)(
                    ae.MiniProfileBackgroundOption,
                    a && ae.Active,
                  ),
                  onClick: e,
                  onActivate: e,
                  children: [
                    (0, t.jsx)("div", {
                      className: (0, h.A)(ae.Preview, ae.BlankBackground),
                      children: (0, t.jsx)("img", {
                        src: `${f.TS.COMMUNITY_CDN_URL}public/images/trans.gif`,
                        loading: "lazy",
                      }),
                    }),
                    (0, t.jsxs)("div", {
                      className: ae.Details,
                      children: [
                        (0, t.jsxs)("div", {
                          children: [
                            (0, t.jsx)("div", {
                              className: ae.Title,
                              children: (0, l.we)(
                                "#Profile_Edit_DefaultBlankBackground",
                              ),
                            }),
                            (0, t.jsx)("div", { className: ae.App }),
                          ],
                        }),
                        i,
                      ],
                    }),
                  ],
                });
        var Le = m(24660),
          Ta = Object.defineProperty,
          Ma = Object.getOwnPropertyDescriptor,
          or = (r, e, i, a) => {
            for (
              var s = a > 1 ? void 0 : a ? Ma(e, i) : e, o = r.length - 1, n;
              o >= 0;
              o--
            )
              (n = r[o]) && (s = (a ? n(e, i, s) : n(s)) || s);
            return a && s && Ta(e, i, s), s;
          };
        let nr = class extends u.Component {
          render() {
            let r = this.props.PrivacyStore;
            return (0, t.jsxs)(E.Z, {
              className: "ProfilePrivacyRoot",
              "flow-children": "column",
              navEntryPreferPosition: $t.iU.MAINTAIN_Y,
              children: [
                (0, t.jsx)(Ke, {
                  PrivacyStore: r,
                  strLabel: (0, l.we)("#ProfilePrivacy_BasicDetails"),
                  strReadOnlySetting: Pr(G.Quy),
                  children: (0, l.we)("#ProfilePrivacy_BasicDetails_Desc"),
                }),
                (0, t.jsx)("div", { className: "ProfilePrivacyHR" }),
                (0, t.jsxs)(Ke, {
                  PrivacyStore: r,
                  strLabel: (0, l.we)("#ProfilePrivacy_Profile"),
                  PrivacyKey: "PrivacyProfile",
                  children: [
                    (0, t.jsx)("p", {
                      children: (0, l.we)("#ProfilePrivacy_Profile_Desc"),
                    }),
                    (0, t.jsx)("p", {
                      children: (0, l.we)("#ProfilePrivacy_Profile_Desc2"),
                    }),
                  ],
                }),
                (0, t.jsxs)("div", {
                  className: "ProfilePrivacyRoot_Indent",
                  children: [
                    (0, t.jsxs)(Ke, {
                      PrivacyStore: r,
                      strLabel: (0, l.we)("#ProfilePrivacy_GameLibrary"),
                      PrivacyKey: "PrivacyOwnedGames",
                      LimitPrivacyKey: "PrivacyProfile",
                      children: [
                        (0, l.we)("#ProfilePrivacy_GameLibrary_Desc"),
                        r.GetPrivacySetting("PrivacyOwnedGames") != G.uvF &&
                          (0, t.jsx)(Mr, {
                            PrivacyStore: r,
                            PrivacyKey: "PrivacyPlaytime",
                            LimitPrivacyKey: "PrivacyOwnedGames",
                            children: (0, l.we)("#ProfilePrivacy_Playtime"),
                          }),
                      ],
                    }),
                    (0, t.jsx)("div", { className: "ProfilePrivacyHR" }),
                    (0, t.jsx)(Ke, {
                      PrivacyStore: r,
                      strLabel: (0, l.we)("#ProfilePrivacy_FriendsList"),
                      PrivacyKey: "PrivacyFriendsList",
                      LimitPrivacyKey: "PrivacyProfile",
                      children: (0, l.we)("#ProfilePrivacy_FriendsList_Desc"),
                    }),
                    (0, t.jsx)("div", { className: "ProfilePrivacyHR" }),
                    (0, t.jsxs)(Ke, {
                      PrivacyStore: r,
                      strLabel: (0, l.we)("#ProfilePrivacy_Inventory"),
                      PrivacyKey: "PrivacyInventory",
                      LimitPrivacyKey: "PrivacyProfile",
                      children: [
                        (0, t.jsx)(E.Z, {
                          "flow-children": "row",
                          children: (0, l.PP)(
                            "#ProfilePrivacy_Inventory_Desc",
                            (0, t.jsx)(Le.Ii, {
                              href: R.ProfileURL + "inventory/",
                              children: (0, l.we)(
                                "#ProfilePrivacy_Inventory_Inventory",
                              ),
                            }),
                            (0, t.jsx)(Le.Ii, {
                              href: R.ProfileURL + "inventory/#753_6",
                              children: (0, l.we)(
                                "#ProfilePrivacy_Inventory_TradingCards",
                              ),
                            }),
                          ),
                        }),
                        r.GetPrivacySetting("PrivacyInventory") != G.uvF &&
                          (0, t.jsx)(Mr, {
                            PrivacyStore: r,
                            PrivacyKey: "PrivacyInventoryGifts",
                            LimitPrivacyKey: "PrivacyInventory",
                            children: (0, l.we)("#ProfilePrivacy_Gifts"),
                          }),
                      ],
                    }),
                    (0, t.jsx)("div", { className: "ProfilePrivacyHR" }),
                    (0, t.jsxs)(Fr, {
                      children: [
                        (0, l.we)("#ProfilePrivacy_Comments"),
                        ":",
                        (0, t.jsx)(xt, { PrivacyStore: r }),
                      ],
                    }),
                    !(0, pe.nA)(f.TS.EREALM) &&
                      (0, t.jsx)("div", { className: "ProfilePrivacyHR" }),
                    !(0, pe.nA)(f.TS.EREALM) &&
                      (0, t.jsx)(Ke, {
                        PrivacyStore: r,
                        strLabel: (0, l.we)("#ProfilePrivacy_UGC"),
                        strReadOnlySetting: (0, l.we)("#Privacy_PerItem"),
                        children: (0, t.jsx)(E.Z, {
                          "flow-children": "row",
                          children: (0, l.PP)(
                            "#ProfilePrivacy_UGC_Desc",
                            (0, t.jsx)(Le.Ii, {
                              href: R.ProfileURL + "screenshots/",
                              children: (0, l.we)(
                                "#ProfilePrivacy_UGC_Desc_Screenshots",
                              ),
                            }),
                            (0, t.jsx)(Le.Ii, {
                              href: R.ProfileURL + "myworkshopfiles/",
                              children: (0, l.we)(
                                "#ProfilePrivacy_UGC_Desc_WorkshopItems",
                              ),
                            }),
                          ),
                        }),
                      }),
                  ],
                }),
              ],
            });
          }
        };
        nr = or([C.PA], nr);
        function Ke(r) {
          let e;
          return (
            r.strReadOnlySetting
              ? (e = (0, t.jsx)(Ka, { strLabel: r.strReadOnlySetting }))
              : (e = (0, t.jsx)(qa, {
                  PrivacyStore: r.PrivacyStore,
                  PrivacyKey: r.PrivacyKey,
                  LimitPrivacyKey: r.LimitPrivacyKey,
                })),
            (0, t.jsxs)(u.Fragment, {
              children: [
                (0, t.jsxs)(Fr, { children: [r.strLabel, ":", e] }),
                (0, t.jsx)(Ua, { children: r.children }),
              ],
            })
          );
        }
        function Fr(r) {
          return (0, t.jsx)("div", {
            className: "ProfilePrivacyHeader",
            children: r.children,
          });
        }
        function Ua(r) {
          return (0, t.jsx)("div", {
            className: "ProfilePrivacyDesc",
            children: r.children,
          });
        }
        function Ha(r) {
          const e = [
              { label: (0, l.we)("#Privacy_Public"), data: G.Quy },
              { label: (0, l.we)("#Privacy_FriendsOnly"), data: G.Snd },
              { label: (0, l.we)("#Privacy_Private"), data: G.uvF },
            ],
            i = r ?? G.Quy;
          return e.filter((a) => i >= a.data);
        }
        const qa = (0, C.PA)(function (e) {
          const {
              PrivacyStore: i,
              PrivacyKey: a,
              LimitPrivacyKey: s,
              children: o,
            } = e,
            n = u.useCallback(() => {
              if (s) return i.GetPrivacySetting(s);
            }, [i, s]),
            p = u.useCallback(
              (U) => {
                i.ChangePrivacySetting(a, U);
              },
              [i, a],
            );
          let v = i.GetPrivacySetting(a),
            w = Pr(v);
          const D = Ha(n());
          return (0, t.jsxs)(u.Fragment, {
            children: [
              (0, t.jsx)(x.ZU, {
                strDropDownButtonClassName: "ProfilePrivacyDropDown",
                bMatchWidth: !1,
                rgOptions: D,
                onChange: (U) => p(U.data),
                selectedOption: v,
              }),
              (0, t.jsx)(Tr, { eSaveState: i.GetSaveState(a) }),
            ],
          });
        });
        function Tr(r) {
          switch (r.eSaveState) {
            case Tt:
              return (0, t.jsx)("div", {
                className: "PrivacySaveNotice Saving",
                children: (0, l.we)("#Shared_Saving"),
              });
            case Ut:
              return (0, t.jsx)("div", {
                className: "PrivacySaveNotice Error",
                children: (0, l.we)("#Error_Error"),
              });
            case Mt:
              return (0, t.jsx)("div", {
                className: "PrivacySaveNotice Saved",
                children: (0, l.we)("#Shared_Saved"),
              });
            case Ue:
            default:
              return null;
          }
        }
        function Mr(r) {
          const {
              PrivacyStore: e,
              PrivacyKey: i,
              LimitPrivacyKey: a,
              children: s,
            } = r,
            o = u.useCallback(
              (v) => {
                let w = v.currentTarget.checked ? G.uvF : G.Quy;
                e.ChangePrivacySetting(i, w, a);
              },
              [e, i, a],
            );
          let p = (0, Xt.q3)(() => e.GetPrivacySetting(i)) == G.uvF;
          return (0, t.jsx)("div", {
            className: "ProfilePrivacyCheckbox",
            children: (0, t.jsxs)("label", {
              children: [
                (0, t.jsx)(Le.BA, {
                  className: "ProfilePrivacyCheckbox_Input",
                  type: "checkbox",
                  checked: p,
                  onChange: o,
                }),
                (0, t.jsx)("div", {
                  className: "ProfilePrivacyCheckbox_Desc",
                  children: s,
                }),
              ],
            }),
          });
        }
        function ka(r) {
          const e = [
              {
                label: (0, l.we)("#Profile_CommentPermission_Public_Desc"),
                data: Ot,
              },
              {
                label: (0, l.we)("#Profile_CommentPermission_FriendsOnly_Desc"),
                data: Dt,
              },
              {
                label: (0, l.we)("#Profile_CommentPermission_Private_Desc"),
                data: Ft,
              },
            ],
            i = r ?? G.Quy;
          return e.filter((a) => i >= a.data);
        }
        let xt = class extends u.Component {
          constructor(r) {
            super(r), (this.state = { eSaveState: Ue });
          }
          OnSettingChanged(r) {
            this.props.PrivacyStore.ChangeCommentPermission(r);
          }
          render() {
            let r = this.props.PrivacyStore.CommentPermission,
              e = this.props.PrivacyStore.GetPrivacySetting("PrivacyProfile"),
              i = mi(di(r, e));
            const a = ka(e);
            return (0, t.jsxs)(u.Fragment, {
              children: [
                (0, t.jsx)(x.ZU, {
                  strDropDownButtonClassName: "ProfilePrivacyDropDown",
                  rgOptions: a,
                  bMatchWidth: !1,
                  onChange: (s) => this.OnSettingChanged(s.data),
                  selectedOption: r,
                }),
                (0, t.jsx)(Tr, {
                  eSaveState: this.props.PrivacyStore.GetCommentSaveState(),
                }),
              ],
            });
          }
        };
        or([S.oI], xt.prototype, "OnSettingChanged", 1), (xt = or([C.PA], xt));
        function Ka(r) {
          return (0, t.jsx)("div", {
            className: "ProfilePrivacyDropDown readonly",
            children: r.strLabel,
          });
        }
        var de = m(26075),
          Ae = m(38945),
          lr = m(19939),
          Ur = m(54212);
        const Qa = ({ className: r, width: e, height: i, theme: a }) => {
            a || (a = "Default"), (a = a + "Theme");
            const [s, o] = (0, Ur.l)(),
              [n, p] = (0, Ur.l)();
            return (0, t.jsxs)("svg", {
              width: e || "401",
              height: i || "399",
              viewBox: "0 0 401 399",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              className: (0, h.A)(r, Ae.ProfilePreview, lr[a]),
              children: [
                (0, t.jsx)("rect", {
                  y: "13",
                  width: "401",
                  height: "386",
                  fill: "#373C42",
                }),
                (0, t.jsx)("rect", {
                  x: "0.5",
                  y: "13.5",
                  width: "400",
                  height: "385",
                  stroke: "black",
                  strokeOpacity: "0.5",
                }),
                (0, t.jsx)("rect", {
                  x: "26",
                  y: "33",
                  width: "61",
                  height: "61",
                  rx: "10",
                  fill: "#272B30",
                }),
                (0, t.jsx)("path", {
                  d: "M57.0246 64.052C63.4696 64.052 68.6942 58.8273 68.6942 52.3823C68.6942 45.9373 63.4696 40.7126 57.0246 40.7126C50.5796 40.7126 45.3549 45.9373 45.3549 52.3823C45.3549 58.8273 50.5796 64.052 57.0246 64.052Z",
                  fill: "#444A51",
                }),
                (0, t.jsx)("path", {
                  d: "M77.4319 72.8873C76.6734 68.1167 70.0792 66.5175 65.3744 65.0024C63.1235 66.918 60.2118 68.0792 57.0246 68.0792C53.8374 68.0792 50.9262 66.918 48.6753 65.0024C43.97 66.5175 37.3763 68.1167 36.6172 72.8873C35.2667 81.3728 47.8848 86.2873 57.0246 86.2873C66.1648 86.2873 78.7825 81.3728 77.4319 72.8873Z",
                  fill: "#444A51",
                }),
                (0, t.jsx)("rect", {
                  x: "299",
                  y: "50",
                  width: "91",
                  height: "31.882",
                  rx: "3",
                  fill: "#272B30",
                }),
                (0, t.jsx)("rect", {
                  x: "299",
                  y: "87",
                  width: "44",
                  height: "10",
                  rx: "3",
                  fill: "#272B30",
                }),
                (0, t.jsx)("rect", {
                  x: "346",
                  y: "87",
                  width: "44",
                  height: "10",
                  rx: "3",
                  fill: "#272B30",
                }),
                (0, t.jsx)("rect", {
                  x: "299",
                  y: "104.091",
                  width: "91",
                  height: "240.254",
                  rx: "3",
                  fill: "#272B30",
                }),
                (0, t.jsx)("rect", {
                  x: "103",
                  y: "57",
                  width: "82",
                  height: "6",
                  rx: "3",
                  fill: "#444A51",
                }),
                (0, t.jsx)("rect", {
                  x: "103",
                  y: "67",
                  width: "82",
                  height: "6",
                  rx: "3",
                  fill: "#444A51",
                }),
                (0, t.jsx)("rect", {
                  x: "26",
                  y: "117.755",
                  width: "260",
                  height: "87.6755",
                  rx: "3",
                  fill: "#272B30",
                }),
                (0, t.jsx)("rect", {
                  x: "32",
                  y: "182.755",
                  width: "246",
                  height: "17",
                  rx: "3",
                  fill: "#262B31",
                }),
                (0, t.jsx)("rect", {
                  x: "37",
                  y: "185.755",
                  width: "21",
                  height: "4",
                  rx: "2",
                  fill: "#373C42",
                }),
                (0, t.jsx)("rect", {
                  x: "37",
                  y: "192.755",
                  width: "12",
                  height: "4",
                  rx: "2",
                  fill: "#373C42",
                }),
                (0, t.jsx)("rect", {
                  x: "71",
                  y: "185.755",
                  width: "21",
                  height: "4",
                  rx: "2",
                  fill: "#373C42",
                }),
                (0, t.jsx)("rect", {
                  x: "71",
                  y: "192.755",
                  width: "12",
                  height: "4",
                  rx: "2",
                  fill: "#373C42",
                }),
                (0, t.jsx)("path", {
                  d: "M26 120.755C26 119.098 27.3431 117.755 29 117.755H283C284.657 117.755 286 119.098 286 120.755V131.755H26V120.755Z",
                  fill: "#444A51",
                }),
                (0, t.jsx)("rect", {
                  x: "35",
                  y: "120.755",
                  width: "37",
                  height: "7",
                  rx: "3",
                  fill: "#373C42",
                }),
                (0, t.jsx)("rect", {
                  x: "103",
                  y: "38.0502",
                  width: "57",
                  height: "11.3864",
                  rx: "3",
                  fill: "#4F555C",
                }),
                (0, t.jsx)("rect", {
                  x: "299",
                  y: "32",
                  width: "35",
                  height: "11",
                  rx: "3",
                  fill: "#4F555C",
                }),
                (0, t.jsx)("rect", {
                  x: "26",
                  y: "214.54",
                  width: "260",
                  height: "167.381",
                  rx: "3",
                  fill: "#272B30",
                }),
                (0, t.jsx)("rect", {
                  x: "32",
                  y: "358.54",
                  width: "246",
                  height: "17",
                  rx: "3",
                  fill: "#262B31",
                }),
                (0, t.jsx)("rect", {
                  x: "37",
                  y: "361.54",
                  width: "21",
                  height: "4",
                  rx: "2",
                  fill: "#373C42",
                }),
                (0, t.jsx)("rect", {
                  x: "37",
                  y: "368.54",
                  width: "12",
                  height: "4",
                  rx: "2",
                  fill: "#373C42",
                }),
                (0, t.jsx)("rect", {
                  x: "71",
                  y: "361.54",
                  width: "21",
                  height: "4",
                  rx: "2",
                  fill: "#373C42",
                }),
                (0, t.jsx)("rect", {
                  x: "71",
                  y: "368.54",
                  width: "12",
                  height: "4",
                  rx: "2",
                  fill: "#373C42",
                }),
                (0, t.jsx)("path", {
                  d: "M26 217.54C26 215.883 27.3431 214.54 29 214.54H283C284.657 214.54 286 215.883 286 217.54V228.54H26V217.54Z",
                  fill: "#444A51",
                }),
                (0, t.jsx)("rect", {
                  x: "35",
                  y: "217.54",
                  width: "37",
                  height: "7",
                  rx: "3",
                  fill: "#373C42",
                }),
                (0, t.jsx)("circle", {
                  cx: "347.5",
                  cy: "37.5",
                  r: "8.5",
                  stroke: "#4F555C",
                  strokeWidth: "2",
                }),
                (0, t.jsx)("rect", {
                  x: "41",
                  y: "144",
                  width: "31",
                  height: "31",
                  rx: "5",
                  fill: "#373C42",
                }),
                (0, t.jsx)("rect", {
                  x: "36",
                  y: "241",
                  width: "111",
                  height: "31",
                  rx: "5",
                  fill: "#373C42",
                }),
                (0, t.jsx)("rect", {
                  x: "36",
                  y: "283",
                  width: "111",
                  height: "31",
                  rx: "5",
                  fill: "#373C42",
                }),
                (0, t.jsx)("rect", {
                  x: "161",
                  y: "241",
                  width: "111",
                  height: "31",
                  rx: "5",
                  fill: "#373C42",
                }),
                (0, t.jsx)("rect", {
                  x: "161",
                  y: "283",
                  width: "111",
                  height: "31",
                  rx: "5",
                  fill: "#373C42",
                }),
                (0, t.jsx)("rect", {
                  x: "91",
                  y: "144",
                  width: "31",
                  height: "31",
                  rx: "5",
                  fill: "#373C42",
                }),
                (0, t.jsx)("rect", {
                  x: "141",
                  y: "144",
                  width: "31",
                  height: "31",
                  rx: "5",
                  fill: "#373C42",
                }),
                (0, t.jsx)("rect", {
                  x: "191",
                  y: "144",
                  width: "31",
                  height: "31",
                  rx: "5",
                  fill: "#373C42",
                }),
                (0, t.jsx)("rect", {
                  x: "241",
                  y: "144",
                  width: "31",
                  height: "31",
                  rx: "5",
                  fill: "#373C42",
                }),
                (0, t.jsx)("rect", {
                  y: "13",
                  width: "401",
                  height: "382",
                  fill: "var(--gradient-background)",
                  fillOpacity: "0.23",
                  className: Ae.ThemeBackground,
                }),
                (0, t.jsx)("rect", {
                  y: "13",
                  width: "401",
                  height: "382",
                  fill: o,
                  className: Ae.PaintRadial0,
                }),
                (0, t.jsx)("rect", {
                  y: "13",
                  width: "401",
                  height: "382",
                  fill: p,
                  className: Ae.PaintRadial1,
                }),
                (0, t.jsxs)("defs", {
                  children: [
                    (0, t.jsxs)("radialGradient", {
                      id: s,
                      cx: "0",
                      cy: "0",
                      r: "1",
                      gradientUnits: "userSpaceOnUse",
                      gradientTransform:
                        "translate(11 126) rotate(9.77175) scale(182.65 191.735)",
                      children: [
                        (0, t.jsx)("stop", {
                          stopColor: "var(--gradient-left)",
                        }),
                        (0, t.jsx)("stop", {
                          offset: "1",
                          stopColor: "var(--gradient-background-left)",
                          stopOpacity: "0",
                        }),
                      ],
                    }),
                    (0, t.jsxs)("radialGradient", {
                      id: n,
                      cx: "0",
                      cy: "0",
                      r: "1",
                      gradientUnits: "userSpaceOnUse",
                      gradientTransform:
                        "translate(385 148) rotate(-164.809) scale(312.935 328.499)",
                      children: [
                        (0, t.jsx)("stop", {
                          offset: "0.348958",
                          stopColor: "var(--gradient-right)",
                        }),
                        (0, t.jsx)("stop", {
                          offset: "1",
                          stopColor: "var(--gradient-background-right)",
                          stopOpacity: "0",
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            });
          },
          Ms = null,
          Hr = (0, C.PA)(({ ProfileItems: r, Background: e, theme: i }) => {
            e === void 0 && (e = r.GetEquippedBackground());
            let a = e && e.movie_webm,
              s = e && e.tiled,
              o = e ? Fe(e) : qt(null);
            const n = e && !s && r.GetEquippedBackgroundFlags() == Q.JA9.Z;
            let p = null;
            return (
              s &&
                (p = {
                  backgroundImage: `url( ${o} )`,
                  backgroundRepeat: "repeat",
                  backgroundSize: "125px 125px",
                }),
              (0, t.jsxs)("div", {
                style: p,
                className: Ae.ProfilePagePreviewCtn,
                children: [
                  (0, t.jsx)("div", {
                    className: Ae.BackgroundPosition,
                    children: (0, t.jsxs)("div", {
                      className: (0, h.A)(Ae.Background, n && Ae.FullScreen),
                      children: [
                        !a && !s && (0, t.jsx)("img", { src: o }),
                        a && (0, t.jsx)(br, { Background: e, className: "" }),
                      ],
                    }),
                  }),
                  (0, t.jsx)("div", {
                    className: Ae.ProfilePreviewPosition,
                    children: (0, t.jsx)("div", {
                      className: Ae.ProfilePreviewCtn,
                      children: (0, t.jsx)(Qa, {
                        className: Ae.ProfilePreview,
                        width: "50%",
                        height: "auto",
                        theme: i,
                      }),
                    }),
                  }),
                ],
              })
            );
          });
        var Wa = Object.defineProperty,
          za = Object.getOwnPropertyDescriptor,
          it = (r, e, i, a) => {
            for (
              var s = a > 1 ? void 0 : a ? za(e, i) : e, o = r.length - 1, n;
              o >= 0;
              o--
            )
              (n = r[o]) && (s = (a ? n(e, i, s) : n(s)) || s);
            return a && s && Wa(e, i, s), s;
          };
        let at = class extends u.Component {
          state = { equipFlags: 0 };
          async componentDidMount() {
            const { ProfileItems: r } = this.props;
            let e = await r.GetEquippedBackground();
          }
          async CommitChanges(r) {
            const { ProfileItems: e } = this.props;
            return e.SetAndEquipProfileBackground(r);
          }
          RevertChanges() {
            const { ProfileItems: r } = this.props;
            r.RevertBackgroundChanges();
          }
          render() {
            const { ProfileItems: r, ProfileTheme: e } = this.props;
            let i = r.GetEquippedBackground(),
              a = r.GetEquippedProfileModifier();
            return (
              a && !r.BIsLegacyGoldenProfile(a.appid) && (a = null),
              (0, t.jsxs)(E.Z, {
                "flow-children": "column",
                children: [
                  (0, t.jsx)(x.Y9, {
                    children: (0, l.we)("#Profile_Edit_ChooseBackground"),
                  }),
                  (0, t.jsx)(x.a3, {
                    children: (0, l.we)(
                      "#Profile_Edit_Background_Instructions",
                    ),
                  }),
                  (0, t.jsx)(Te, {
                    className: de.BackgroundPickerPage,
                    getSearchFields: ar,
                    getItems: () => r.GetOwnedBackgrounds(),
                    fnCommitChanges: this.CommitChanges,
                    fnRevertChanges: this.RevertChanges,
                    ItemComponent: Kr,
                    RenderDefaultComponent: ({ onSelected: s, active: o }) =>
                      (0, t.jsx)(Za, { Modifier: a, onSelected: s, active: o }),
                    ActiveItem: r.GetEquippedBackground(),
                    fnIsSameItem: sr,
                    fnRenderPreview: (s) =>
                      (0, t.jsx)(Va, {
                        Background: s,
                        ProfileItems: r,
                        theme: e.ActiveTheme.theme_id,
                      }),
                  }),
                ],
              })
            );
          }
        };
        it([S.oI], at.prototype, "CommitChanges", 1),
          it([S.oI], at.prototype, "RevertChanges", 1),
          (at = it([C.PA], at));
        const qr = ({ label: r, currentFlag: e, flag: i, onSelect: a }) => {
          let s = (o) => {
            o && a(i);
          };
          return (0, t.jsx)("div", {
            className: de.ProfileBackgroundEquipOption,
            children: (0, t.jsx)(x.Od, {
              checked: e == i,
              disabled: e == i,
              onChange: s,
              label: r,
            }),
          });
        };
        let wt = class extends u.Component {
          OnChange(r) {
            this.props.ProfileItems.SetEquippedBackgroundFlags(r);
          }
          render() {
            let { Background: r, ProfileItems: e } = this.props;
            const i = !r || r?.tiled,
              a = e.GetEquippedBackgroundFlags();
            let s = (0, t.jsx)(qr, {
                flag: Q.JA9.Z,
                currentFlag: a,
                onSelect: this.OnChange,
                label: (0, l.we)(
                  "#Profile_Edit_BackgroundEquipFlag_FullScreen",
                ),
              }),
              o = (0, t.jsx)(qr, {
                flag: 0,
                currentFlag: a,
                onSelect: this.OnChange,
                label: (0, l.we)(
                  "#Profile_Edit_BackgroundEquipFlag_OriginalSize",
                ),
              });
            return (0, t.jsxs)("div", {
              className: (0, h.A)(
                de.ProfileBackgroundEquipOptions,
                i && de.HideEquipOptions,
              ),
              children: [s, o],
            });
          }
        };
        it([S.oI], wt.prototype, "OnChange", 1), (wt = it([C.PA], wt));
        const Va = (0, C.PA)(({ Background: r, ProfileItems: e, theme: i }) =>
            (0, t.jsxs)("div", {
              children: [
                (0, t.jsx)(
                  Hr,
                  { Background: r, ProfileItems: e, theme: i },
                  r && r.communityitemid,
                ),
                (0, t.jsx)(wt, { ProfileItems: e, Background: r }),
              ],
            }),
          ),
          kr = ({ Background: r, children: e }) =>
            (0, t.jsxs)("div", {
              className: de.Details,
              children: [
                (0, t.jsxs)("div", {
                  children: [
                    (0, t.jsx)("div", {
                      className: de.Title,
                      children: r
                        ? r.item_title
                        : (0, l.we)("#Profile_Edit_DefaultBlankBackground"),
                    }),
                    (0, t.jsx)("div", {
                      className: de.App,
                      children: r && r.app_name,
                    }),
                  ],
                }),
                e,
              ],
            }),
          Kr = ({ Item: r, onSelected: e, active: i, children: a }) => {
            let s = !!r.movie_webm;
            return (0, t.jsxs)(E.Z, {
              className: (0, h.A)(
                de.BackgroundOption,
                s && de.WithVideo,
                i && de.Active,
              ),
              onClick: e,
              onActivate: e,
              onGamepadFocus: s ? Na : void 0,
              onMouseEnter: s ? Lr : void 0,
              focusable: !0,
              children: [
                (0, t.jsxs)("div", {
                  className: de.Preview,
                  children: [
                    (0, t.jsx)("img", { src: qt(r), loading: "lazy" }),
                    (0, t.jsx)(br, {
                      Background: r,
                      className: de.PreviewVideo,
                      small: !0,
                    }),
                  ],
                }),
                (0, t.jsx)(kr, { Background: r, children: a }),
              ],
            });
          },
          Za = ({ onSelected: r, Modifier: e, active: i, children: a }) =>
            e
              ? (0, t.jsx)(Kr, { Item: e, onSelected: r, active: i })
              : (0, t.jsxs)("div", {
                  className: (0, h.A)(de.BackgroundOption, i && de.Active),
                  onClick: r,
                  children: [
                    (0, t.jsx)("div", {
                      className: de.Preview,
                      children: (0, t.jsx)("img", { src: qt(null) }),
                    }),
                    (0, t.jsx)(kr, { Background: null, children: a }),
                  ],
                });
        var Xa = m(75130),
          Ya = m(17083);
        function Ja(r) {
          return !!(r.metaKey || r.altKey || r.ctrlKey || r.shiftKey);
        }
        function Qr(r) {
          const { navigate: e, onClick: i, ...a } = r,
            { target: s } = a,
            o = (n) => {
              try {
                i && i(n);
              } catch (p) {
                throw (n.preventDefault(), p);
              }
              !n.defaultPrevented &&
                n.button === 0 &&
                (!s || s === "_self") &&
                !Ja(n) &&
                (n.preventDefault(), e());
            };
          return (0, t.jsx)(Le.Ii, { ...a, onClick: o });
        }
        function $a(r) {
          return (0, t.jsx)(Ya.k2, { component: Qr, ...r });
        }
        function Us(r) {
          return jsx(Link, { component: Qr, ...r });
        }
        var Se = m(78091);
        function es(r) {
          const { root: e, currentPath: i, linksAvailable: a, children: s } = r;
          return (0, t.jsx)(Xa.u, {
            navID: "ProfileEditShell",
            children: (0, t.jsx)(E.Z, {
              children: (0, t.jsxs)(E.Z, {
                className: Se.Shell,
                "flow-children": "row",
                navEntryPreferPosition: $t.iU.FIRST,
                children: [
                  (0, t.jsx)(ts, {
                    root: e,
                    currentPath: i,
                    linksAvailable: a,
                  }),
                  (0, t.jsx)("div", {
                    className: Se.PageContent,
                    children: (0, t.jsx)(Ge.tH, { children: s }),
                  }),
                ],
              }),
            }),
          });
        }
        const ts = ({ root: r, currentPath: e, linksAvailable: i }) => {
            const a = { root: r, currentPath: e },
              s = pr,
              o = (0, f.Qn)();
            return (0, t.jsxs)(E.Z, {
              className: Se.Navigation,
              "flow-children": "column",
              children: [
                (0, t.jsx)("div", {
                  className: Se.BackToProfileCtn,
                  children: (0, t.jsx)(Le.Ii, {
                    href: R.ProfileURL,
                    children: (0, l.we)("#Profile_ReturnToYourProfile"),
                  }),
                }),
                (0, t.jsx)("div", { className: Se.ProfileEditLine }),
                (0, t.jsx)(Be, {
                  ...a,
                  to: s.Info(),
                  children: (0, l.we)("#Profile_Edit_BasicInfo"),
                }),
                (0, t.jsx)(Be, {
                  ...a,
                  to: s.Avatar(),
                  children: (0, l.we)("#Profile_FieldAvatar"),
                }),
                (0, t.jsx)(Be, {
                  ...a,
                  to: s.Background(),
                  children: (0, l.we)("#Profile_FieldProfileBackground"),
                }),
                (0, t.jsx)(Be, {
                  ...a,
                  to: s.MiniProfile(),
                  children: (0, l.we)("#Profile_Edit_MiniProfile"),
                }),
                (0, t.jsx)(Be, {
                  ...a,
                  to: s.Theme(),
                  children: (0, l.we)("#Profile_Edit_Theme"),
                }),
                (0, t.jsx)(Be, {
                  ...a,
                  to: s.ProfileModifier(),
                  fnVisible: i.ProfileModifierAvailable,
                  children: (0, l.we)("#Profile_Edit_ProfileModifier"),
                }),
                (0, t.jsx)(Be, {
                  ...a,
                  to: s.FavoriteBadge(),
                  fnVisible: i.BadgesAvailable,
                  children: (0, l.we)("#Profile_Edit_FavoriteBadge"),
                }),
                (0, t.jsx)(Be, {
                  ...a,
                  to: s.FavoriteGroup(),
                  fnVisible: i.GroupsAvailable,
                  children: (0, l.we)("#Profile_Edit_FavoriteGroup"),
                }),
                !o &&
                  (0, t.jsx)(Be, {
                    ...a,
                    to: s.Showcases(),
                    fnVisible: i.ShowcasesAvailable,
                    children: (0, l.we)("#Profile_Edit_FeaturedShowcase"),
                  }),
                (0, t.jsx)("div", { className: Se.ProfileEditLine }),
                (0, t.jsx)(Be, {
                  ...a,
                  to: s.Privacy(),
                  children: (0, l.we)("#Profile_EditPrivacySettings"),
                }),
                (0, t.jsx)("div", {
                  className: Se.ProfileEditStoreLink,
                  children: (0, t.jsx)(Le.Ii, {
                    className: (0, h.A)(Se.ExternalLink),
                    href: `${f.TS.STORE_BASE_URL}points/`,
                    children: (0, l.we)("#SteamPointsShop"),
                  }),
                }),
              ],
            });
          },
          Be = (0, C.PA)(
            ({
              root: r,
              currentPath: e,
              to: i,
              fnVisible: a,
              fnDisabled: s,
              children: o,
            }) => {
              const n = `${r}${i}`,
                p = n == e;
              if (!p && a && !a()) return null;
              const v = s && s(),
                w = !!v;
              let D;
              return (
                v && (D = (U) => U.preventDefault()),
                (0, t.jsx)($a, {
                  className: (0, h.A)(
                    Se.NavLink,
                    p && Se.Active,
                    w && Se.Disabled,
                  ),
                  to: n,
                  onClick: D,
                  title: v,
                  children: o,
                })
              );
            },
          );
        var se = m(49622),
          rs = Object.defineProperty,
          is = Object.getOwnPropertyDescriptor,
          st = (r, e, i, a) => {
            for (
              var s = a > 1 ? void 0 : a ? is(e, i) : e, o = r.length - 1, n;
              o >= 0;
              o--
            )
              (n = r[o]) && (s = (a ? n(e, i, s) : n(s)) || s);
            return a && s && rs(e, i, s), s;
          };
        let ot = class extends u.Component {
          state = { bDialogActive: !1 };
          ShowDialog() {
            this.setState({ bDialogActive: !0 });
          }
          HideDialog() {
            this.setState({ bDialogActive: !1 });
          }
          render() {
            const { ProfileItems: r } = this.props;
            return r.BHasAnyProfileModifiers()
              ? (0, t.jsx)(jt, {
                  active: this.state.bDialogActive,
                  ProfileItems: r,
                  onDismiss: this.HideDialog,
                })
              : null;
          }
        };
        st([S.oI], ot.prototype, "ShowDialog", 1),
          st([S.oI], ot.prototype, "HideDialog", 1),
          (ot = st([C.PA], ot));
        const as = (0, C.PA)(({ ProfileItems: r }) => {
            let e = r.GetProfileModifierCSSURL();
            return e
              ? (0, t.jsx)("link", {
                  rel: "stylesheet",
                  type: "text/css",
                  href: e,
                })
              : null;
          }),
          ss = ({ ProfileModifier: r }) => {
            const e = r
                ? Fe(r)
                : `${f.TS.COMMUNITY_CDN_URL}public/images/trans.gif`,
              i = r
                ? r.item_title
                : (0, l.we)("#Profile_Edit_DefaultBlankBackground"),
              a = r ? r.app_name : "";
            return (0, t.jsx)(t.Fragment, {
              children: (0, t.jsxs)("div", {
                className: se.ProfileModifierBody,
                children: [
                  (0, t.jsx)("img", {
                    className: se.GoldenProfileItemImage,
                    src: e,
                  }),
                  (0, t.jsx)("div", {
                    className: se.GoldenProfileTitle,
                    children: i,
                  }),
                  (0, t.jsx)("div", {
                    className: se.GoldenProfileApp,
                    children: a,
                  }),
                ],
              }),
            });
          };
        let jt = class extends u.Component {
          OnDismiss() {
            this.props.ProfileItems.RevertProfileModifierChanges(),
              this.props.onDismiss();
          }
          render() {
            const { ProfileItems: r } = this.props;
            return (0, t.jsxs)(t.Fragment, {
              children: [
                (0, t.jsx)(x.Y9, {
                  children: (0, l.we)("#Profile_Edit_ProfileModifier"),
                }),
                (0, t.jsx)(x.a3, {
                  children: (0, l.we)(
                    "#Profile_Edit_ProfileModifier_Instructions",
                  ),
                }),
                (0, t.jsx)(Te, {
                  fnRevertChanges: this.OnDismiss,
                  getSearchFields: ar,
                  getItems: () => r.GetOwnedProfileModifiers(),
                  fnCommitChanges: async (e) => (
                    r.SetEquippedProfileModifier(e),
                    r.CommitProfileModifierChanges()
                  ),
                  ItemComponent: os,
                  RenderDefaultComponent: ({ onSelected: e, active: i }) =>
                    (0, t.jsx)(ns, { onSelected: e, active: i }),
                  ActiveItem: r.GetEquippedProfileModifier(),
                  fnIsSameItem: sr,
                  fnRenderPreview: (e) =>
                    (0, t.jsx)(ss, { ProfileModifier: e }),
                }),
              ],
            });
          }
        };
        st([S.oI], jt.prototype, "OnDismiss", 1), (jt = st([C.PA], jt));
        const os = ({ Item: r, onSelected: e, children: i, active: a }) =>
            (0, t.jsxs)(E.Z, {
              className: (0, h.A)(se.ProfileModifierOption, a && se.Active),
              onActivate: e,
              children: [
                (0, t.jsx)("div", {
                  className: se.Preview,
                  children: (0, t.jsx)("img", { src: Fe(r), loading: "lazy" }),
                }),
                (0, t.jsxs)("div", {
                  className: se.Details,
                  children: [
                    (0, t.jsxs)("div", {
                      children: [
                        (0, t.jsx)("div", {
                          className: se.Title,
                          children: r.item_title,
                        }),
                        (0, t.jsx)("div", {
                          className: se.App,
                          children: r.app_name,
                        }),
                      ],
                    }),
                    i,
                  ],
                }),
              ],
            }),
          ns = ({ onSelected: r, children: e, active: i }) =>
            (0, t.jsxs)(E.Z, {
              className: (0, h.A)(se.ProfileModifierOption, i && se.Active),
              onActivate: r,
              children: [
                (0, t.jsx)("div", {
                  className: (0, h.A)(se.Preview, se.BlankBackground),
                  children: (0, t.jsx)("img", {
                    src: `${f.TS.COMMUNITY_CDN_URL}public/images/trans.gif`,
                    loading: "lazy",
                  }),
                }),
                (0, t.jsxs)("div", {
                  className: se.Details,
                  children: [
                    (0, t.jsxs)("div", {
                      children: [
                        (0, t.jsx)("div", {
                          className: se.Title,
                          children: (0, l.we)("#ProfileModifier_DisabledTitle"),
                        }),
                        (0, t.jsx)("div", { className: se.App }),
                      ],
                    }),
                    e,
                  ],
                }),
              ],
            });
        var le = m(20644),
          ls = Object.defineProperty,
          ms = Object.getOwnPropertyDescriptor,
          mr = (r, e, i, a) => {
            for (
              var s = a > 1 ? void 0 : a ? ms(e, i) : e, o = r.length - 1, n;
              o >= 0;
              o--
            )
              (n = r[o]) && (s = (a ? n(e, i, s) : n(s)) || s);
            return a && s && ls(e, i, s), s;
          };
        let nt = class extends u.Component {
          state = { bSaving: !1, strHTMLError: "" };
          async CommitChanges(r) {
            const { ProfileTheme: e } = this.props;
            this.setState({ bSaving: !0, strHTMLError: "" }),
              e.SetActiveTheme(r.theme_id);
            let i = await e.CommitActiveTheme();
            return (
              i != L.R &&
                this.setState({
                  strHTMLError: (0, l.we)("#ConnectionTrouble_FailedToConnect"),
                }),
              this.setState({ bSaving: !1 }),
              i
            );
          }
          RevertChanges() {
            const { ProfileTheme: r } = this.props;
            this.setState({ strHTMLError: "" }), r.RevertActiveTheme();
          }
          render() {
            const { ProfileTheme: r, ProfileItems: e } = this.props;
            let i = !!e.GetEquippedProfileModifier();
            return (0, t.jsxs)(t.Fragment, {
              children: [
                (0, t.jsx)(x.Y9, {
                  children: (0, l.we)("#Profile_Edit_Theme"),
                }),
                (0, t.jsx)(x.a3, {
                  children: (0, l.we)("#Profile_Edit_Theme_Instructions"),
                }),
                (0, t.jsx)(qe, { strHTMLError: this.state.strHTMLError }),
                i && (0, t.jsx)(ps, {}),
                (0, t.jsx)(Te, {
                  getSearchFields: null,
                  ActiveItem: r.ActiveTheme,
                  getItems: async () => r.AvailableThemes,
                  fnCommitChanges: this.CommitChanges,
                  fnRevertChanges: this.RevertChanges,
                  fnRenderPreview: (a) =>
                    (0, t.jsx)(cs, { Theme: a, ProfileItems: e }),
                  fnIsSameItem: us,
                  ItemComponent: hs,
                  classNameItemPicker: le.ProfileThemePicker,
                  className: (0, h.A)(i && le.ThemePickerDisabled),
                }),
              ],
            });
          }
        };
        mr([S.oI], nt.prototype, "CommitChanges", 1),
          mr([S.oI], nt.prototype, "RevertChanges", 1),
          (nt = mr([C.PA], nt));
        const ds = ({ Theme: r, children: e }) => {
            let i;
            return (
              typeof r == "string"
                ? (i = r + "Theme")
                : (i = (r?.theme_id || "Default") + "Theme"),
              (0, t.jsx)("div", { className: lr[i], children: e })
            );
          },
          cs = (0, C.PA)(({ Theme: r, ProfileItems: e }) =>
            (0, t.jsx)("div", {
              className: le.ProfileThemePreviewCtn,
              children: (0, t.jsx)(Hr, { ProfileItems: e, theme: r.theme_id }),
            }),
          ),
          Hs = (r) => [r.title],
          us = (r, e) => (r && r.theme_id) === (e && e.theme_id),
          hs = ({ Item: r, onSelected: e, active: i, children: a }) => {
            const s = r.theme_id + "Theme",
              o = `ThemeOption${s}`;
            return (0, t.jsxs)(E.Z, {
              className: (0, h.A)(
                le.ProfileTheme,
                e && le.Option,
                i && le.Active,
                lr[s],
              ),
              onActivate: e,
              children: [
                (0, t.jsx)("div", {
                  className: le.PreviewCtn,
                  children: (0, t.jsxs)("svg", {
                    className: (0, h.A)(le.Preview),
                    viewBox: "0 0 382 382",
                    width: "100%",
                    height: "100%",
                    children: [
                      (0, t.jsx)("rect", {
                        width: "382",
                        height: "382",
                        fill: "var(--edit-background)",
                        className: le.EditBackground,
                      }),
                      (0, t.jsx)("rect", {
                        width: "382",
                        height: "382",
                        fill: "var(--gradient-background)",
                        fillOpacity: "0.23",
                        className: le.ThemeBackground,
                      }),
                      (0, t.jsx)("rect", {
                        width: "382",
                        height: "382",
                        fill: `url(#${o}paint0_radial)`,
                        className: le.PaintRadial0,
                      }),
                      (0, t.jsx)("rect", {
                        width: "382",
                        height: "382",
                        fill: `url(#${o}paint1_radial)`,
                        className: le.PaintRadial1,
                      }),
                      (0, t.jsxs)("defs", {
                        children: [
                          (0, t.jsxs)("radialGradient", {
                            id: `${o}paint0_radial`,
                            cx: "0",
                            cy: "0",
                            r: "1",
                            gradientUnits: "userSpaceOnUse",
                            gradientTransform:
                              "translate(11 126) rotate(9.77175) scale(182.65 191.735)",
                            children: [
                              (0, t.jsx)("stop", {
                                stopColor: "var(--gradient-left)",
                              }),
                              (0, t.jsx)("stop", {
                                offset: "1",
                                stopColor: "var(--gradient-background-left)",
                                stopOpacity: "0",
                              }),
                            ],
                          }),
                          (0, t.jsxs)("radialGradient", {
                            id: `${o}paint1_radial`,
                            cx: "0",
                            cy: "0",
                            r: "1",
                            gradientUnits: "userSpaceOnUse",
                            gradientTransform:
                              "translate(385 148) rotate(-164.809) scale(312.935 328.499)",
                            children: [
                              (0, t.jsx)("stop", {
                                offset: "0.348958",
                                stopColor: "var(--gradient-right)",
                              }),
                              (0, t.jsx)("stop", {
                                offset: "1",
                                stopColor: "var(--gradient-background-right)",
                                stopOpacity: "0",
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
                (0, t.jsxs)("div", {
                  className: le.Details,
                  children: [
                    (0, t.jsx)("div", {
                      className: le.Title,
                      children: r.title,
                    }),
                    a,
                  ],
                }),
              ],
            });
          },
          ps = ({ children: r }) =>
            (0, t.jsx)("div", {
              className: le.ThemesDisabledNotice,
              children: (0, t.jsx)("div", {
                className: le.Notice,
                children: (0, l.we)(
                  "#Profile_Edit_GoldenProfileOverridesTheme",
                ),
              }),
            });
        var fs = Object.defineProperty,
          vs = Object.getOwnPropertyDescriptor,
          Wr = (r, e, i, a) => {
            for (
              var s = a > 1 ? void 0 : a ? vs(e, i) : e, o = r.length - 1, n;
              o >= 0;
              o--
            )
              (n = r[o]) && (s = (a ? n(e, i, s) : n(s)) || s);
            return a && s && fs(e, i, s), s;
          };
        class dr extends u.Component {
          m_refDiv = u.createRef();
          state = { bSaving: !1, strHTMLError: "" };
          OnSubmit(e) {
            e.preventDefault(), this.CommitChanges(e.currentTarget);
          }
          async CommitChanges(e) {
            this.setState({ bSaving: !0, strHTMLError: "" });
            let i = await Wt("showcases", new FormData(e));
            i.strHTMLError
              ? this.setState({ strHTMLError: i.strHTMLError })
              : this.setState({ strHTMLError: "" }),
              this.setState({ bSaving: !1 });
          }
          RevertChanges() {
            window.location.href = R.ProfileURL;
          }
          componentDidMount() {
            this.props.elShowcases &&
              ((this.props.elShowcases.style.display = ""),
              this.m_refDiv.current.appendChild(this.props.elShowcases));
          }
          render() {
            const { bSaving: e, strHTMLError: i } = this.state,
              { ProfileTheme: a } = this.props;
            return (0, t.jsx)(ds, {
              Theme: a.ActiveTheme,
              children: (0, t.jsxs)("form", {
                onSubmit: this.OnSubmit,
                children: [
                  (0, t.jsx)(x.Y9, {
                    children: (0, l.we)("#Profile_Edit_FeaturedShowcase"),
                  }),
                  (0, t.jsx)(x.a3, {
                    children: (0, l.oW)(
                      "#Profile_Edit_Showcase_Instructions",
                      (0, t.jsx)("a", {
                        href:
                          f.TS.STORE_BASE_URL + "points/shop/profileshowcases",
                      }),
                    ),
                  }),
                  (0, t.jsx)(qe, { strHTMLError: i }),
                  (0, t.jsx)("div", { ref: this.m_refDiv }),
                  (0, t.jsx)(He, { onCancel: this.RevertChanges, disabled: e }),
                ],
              }),
            });
          }
        }
        Wr([S.oI], dr.prototype, "OnSubmit", 1),
          Wr([S.oI], dr.prototype, "RevertChanges", 1);
        let cr, ur, hr;
        async function _s(r) {
          let e = (0, f.Tc)("config", "profile_config");
          e && Object.assign(R, e),
            (cr = new Ri(
              (0, f.Tc)("profile-edit", "profile_edit_config"),
              (0, f.Tc)("profile-badges", "profile_edit_config"),
              r,
            )),
            (0, pe.nA)(f.TS.EREALM) || cr.Profile.GroupList.GetUserGroups(),
            (ur = document.getElementById("showcases"));
        }
        function gs(r) {
          const [e, i] = u.useState(!1),
            a = (0, zt.TR)();
          if (
            (u.useEffect(() => {
              hr || (hr = _s(a)), hr.then(() => i(!0));
            }, [a]),
            u.useLayoutEffect(() => {
              if (e)
                for (let W of [
                  "profile_edit_main_content",
                  "profile_edit_leftcol",
                ]) {
                  let K = document.getElementById(W);
                  K && (K.style.visibility = "");
                }
            }, [e]),
            !e)
          )
            return null;
          const s = r.match.url,
            o = cr,
            {
              Profile: n,
              ProfileItems: p,
              ProfileTheme: v,
              EmoticonStore: w,
            } = o,
            D = pr,
            U = {
              ProfileModifierAvailable: () => p.BHasAnyProfileModifiers(),
              BadgesAvailable: () =>
                !(0, pe.nA)(f.TS.EREALM) && o.ProfileBadges.Badges.length > 0,
              GroupsAvailable: () =>
                !(0, pe.nA)(f.TS.EREALM) &&
                (n.GroupList.BGroupsLoaded()
                  ? n.GroupList.BHasAnyGroups()
                  : !0),
              ShowcasesAvailable: () => ur != null,
            };
          return (0, t.jsxs)(t.Fragment, {
            children: [
              (0, t.jsx)(as, { ProfileItems: p }),
              (0, t.jsx)(tr, { Profile: n }),
              (0, t.jsx)(ea, { Profile: n, ProfileItems: p }),
              (0, t.jsx)(es, {
                root: s,
                currentPath: r.location.pathname,
                linksAvailable: U,
                children: (0, t.jsxs)(X.dO, {
                  children: [
                    (0, t.jsx)(X.qh, {
                      path: `${s}${D.Info()}`,
                      children: (0, t.jsx)(er, {
                        Profile: n,
                        EmoticonStore: w,
                      }),
                    }),
                    (0, t.jsx)(X.qh, {
                      path: `${s}${D.Avatar()}`,
                      children: (0, t.jsx)(Vt, {
                        Profile: n,
                        ProfileItems: p,
                        OGGAvatars: o.OGGAvatarStore,
                        AvatarHistory: o.AvatarHistory,
                      }),
                    }),
                    (0, t.jsx)(X.qh, {
                      path: `${s}${D.Background()}`,
                      children: (0, t.jsx)(at, {
                        ProfileTheme: v,
                        ProfileItems: p,
                      }),
                    }),
                    (0, t.jsx)(X.qh, {
                      path: `${s}${D.MiniProfile()}`,
                      children: (0, t.jsx)(St, { ProfileEdit: o }),
                    }),
                    (0, t.jsx)(X.qh, {
                      path: `${s}${D.Theme()}`,
                      children: (0, t.jsx)(nt, {
                        ProfileTheme: v,
                        ProfileItems: p,
                      }),
                    }),
                    (0, t.jsx)(X.qh, {
                      path: `${s}${D.ProfileModifier()}`,
                      children: (0, t.jsx)(ot, { ProfileItems: p }),
                    }),
                    !(0, pe.nA)(f.TS.EREALM) &&
                      (0, t.jsx)(X.qh, {
                        path: `${s}${D.FavoriteBadge()}`,
                        children: (0, t.jsx)(tt, { Badges: o.ProfileBadges }),
                      }),
                    !(0, pe.nA)(f.TS.EREALM) &&
                      (0, t.jsx)(X.qh, {
                        path: `${s}${D.FavoriteGroup()}`,
                        children: (0, t.jsx)(rt, { Profile: n }),
                      }),
                    (0, t.jsx)(X.qh, {
                      path: `${s}${D.Privacy()}`,
                      children: (0, t.jsx)(nr, {
                        PrivacyStore: o.ProfilePrivacy,
                      }),
                    }),
                    (0, t.jsx)(X.qh, {
                      path: `${s}${D.Showcases()}`,
                      children: (0, t.jsx)(dr, {
                        elShowcases: ur,
                        ProfileTheme: v,
                      }),
                    }),
                    (0, t.jsx)(X.qh, {
                      children: (0, t.jsx)(X.rd, { to: `${s}${D.Info()}` }),
                    }),
                  ],
                }),
              }),
            ],
          });
        }
        var Ps = m(9591),
          ys = m(76006),
          Cs = m(20076),
          As = m(16114),
          Ss = m(46085),
          fe = m(26072),
          It = m(16277),
          xs = m(29385),
          ws = m(61739),
          js = m(85599);
        function Is(r) {
          const [e, i] = (0, u.useState)(!1),
            a = Bs(r.steamid),
            s = Es(r.steamid),
            o = (0, u.useRef)(null),
            n = (0, u.useRef)(null),
            [p, v] = (0, u.useState)(!1),
            w = (0, Ss.KQ)(r.steamid),
            D = async () => {
              if ((v(!0), !o.current)) return;
              const K = o.current.value,
                lt = parseInt(K) * 86400,
                Qe = Math.floor(new Date().getTime() / 1e3) + lt,
                Et = n.current?.checked ?? !1;
              await s.mutateAsync({
                rtCooldownEnds: Qe,
                bClearOpenReports: Et,
              }),
                i(!1),
                v(!1);
            },
            U = async () => {
              await s.mutateAsync({ rtCooldownEnds: 0 }), i(!1);
            };
          let W = "";
          if (a.isSuccess && a.data > 0) {
            const K = Math.floor((a.data - new Date().getTime() / 1e3) / 86400);
            W = " " + fe.u.Localize("#setcooldown_cooldownsummary", K);
          }
          return (0, t.jsxs)(t.Fragment, {
            children: [
              (0, t.jsx)(Sr.EN, {
                active: e,
                children: (0, t.jsxs)(Sr.o0, {
                  onCancel: () => i(!1),
                  onOK: D,
                  strTitle: fe.u.Localize("#setcooldown_dialogtitle"),
                  strDescription: fe.u.Localize(
                    "#setcooldown_dialogdescription",
                  ),
                  strOKButtonText: fe.u.Localize("#setcooldown_setbutton"),
                  bOKDisabled: p,
                  children: [
                    a.isLoading &&
                      (0, t.jsxs)("p", {
                        children: [
                          (0, t.jsx)(js.t, { size: "small" }),
                          " ",
                          fe.u.Localize("#setcooldown_loading"),
                        ],
                      }),
                    a.isError &&
                      (0, t.jsx)("p", {
                        children: fe.u.Localize("#setcooldown_errorloading"),
                      }),
                    a.isSuccess &&
                      a.data > 0 &&
                      (0, t.jsx)("p", {
                        children: fe.u.Localize(
                          "#setcooldown_expireson",
                          (0, As.P0)(a.data, !1, ""),
                        ),
                      }),
                    a.isSuccess &&
                      a.data === 0 &&
                      (0, t.jsx)("p", {
                        children: fe.u.Localize("#setcooldown_nocooldown"),
                      }),
                    w.isSuccess &&
                      !!w.data &&
                      (0, t.jsx)(t.Fragment, {
                        children: (0, t.jsx)("p", {
                          children: fe.u.Localize(
                            "#setcooldown_statssummary",
                            w.data.total_acquitted_reports,
                            w.data.total_reports,
                            w.data.acquitted_reports_in_last_week,
                            w.data.reports_in_last_week,
                          ),
                        }),
                      }),
                    (0, t.jsxs)("p", {
                      children: [
                        (0, t.jsxs)("label", {
                          children: [
                            fe.u.Localize("#setcooldown_newcooldownlabel"),
                            " ",
                            (0, t.jsx)("input", {
                              type: "number",
                              min: "0",
                              placeholder: fe.u.Localize("#setcooldown_days"),
                              ref: o,
                            }),
                          ],
                        }),
                        (0, t.jsxs)("p", {
                          children: [
                            (0, t.jsx)("input", { type: "checkbox", ref: n }),
                            " ",
                            fe.u.Localize("#setcooldown_clearopenreports"),
                          ],
                        }),
                        (0, t.jsx)("button", {
                          disabled: p,
                          onClick: U,
                          children: fe.u.Localize("#setcooldown_clearcooldown"),
                        }),
                      ],
                    }),
                  ],
                }),
              }),
              (0, t.jsxs)("a", {
                className: "popup_menu_item",
                onClick: () => i(!0),
                children: ["Reporting Cooldown", W],
              }),
            ],
          });
        }
        function Bs(r) {
          const e = (0, zt.KV)();
          return (0, Xe.I)({
            queryKey: ["reportercooldown", r],
            queryFn: async () => {
              const i = me.w.Init(It.a9);
              i.Body().set_steamid(r);
              const a = await It.fL.GetReporterCooldown(e, i);
              if (!a.BSuccess()) throw new Error("EResult " + a.GetEResult());
              return a.Body().rtime_cooldown_ends() ?? 0;
            },
          });
        }
        function Es(r) {
          const e = (0, zt.KV)(),
            i = (0, xs.jE)();
          return (0, ws.n)({
            mutationFn: async (a) => {
              const s = me.w.Init(It.f0);
              s.Body().set_steamid(r),
                s.Body().set_rtime_cooldown_ends(a.rtCooldownEnds),
                a.bClearOpenReports !== void 0 &&
                  s.Body().set_acquit_unresolved_reports(a.bClearOpenReports);
              const o = await It.fL.UpdateReporterCooldown(e, s);
              if (!o.BSuccess()) throw new Error("EResult " + o.GetEResult());
            },
            onSuccess: async () => {
              await i.invalidateQueries({ queryKey: ["reportercooldown", r] });
            },
          });
        }
        const Gs = {
            ProfileEdit: () => "edit",
            ProfilePrivacy: () => "edit/settings",
            Games: () => "games",
            ItemCollection: () => "itemcollection",
          },
          pr = {
            Info: () => "/info",
            Avatar: () => "/avatar",
            Background: () => "/background",
            MiniProfile: () => "/miniprofile",
            Theme: () => "/theme",
            ProfileModifier: () => "/goldenprofile",
            FavoriteBadge: () => "/favoritebadge",
            FavoriteGroup: () => "/favoritegroup",
            Privacy: () => "/settings",
            Showcases: () => "/showcases",
          };
        function Rs(r) {
          return (0, t.jsx)("div", {
            children: (0, t.jsx)(ys.Ay, { targetType: Ps.Pw.BZ }),
          });
        }
        function Ns(r) {
          const e = r.match.path;
          return (0, t.jsxs)(X.dO, {
            children: [
              (0, t.jsx)(X.qh, {
                path: `${e}/${Gs.ProfileEdit()}`,
                render: (i) => (0, t.jsx)(gs, { ...i }),
              }),
              (0, t.jsx)(X.qh, {
                path: `${e}`,
                render: (i) =>
                  (0, t.jsx)(Cs.X, {
                    config: {
                      "profile-rewards": () => (0, t.jsx)(Rs, { ...i }),
                      "reporter-cooldown-dialog": (a) =>
                        (0, t.jsx)(Is, { ...a }),
                    },
                  }),
              }),
            ],
          });
        }
      },
      46085: (A, xe, m) => {
        "use strict";
        m.d(xe, {
          EC: () => we,
          KQ: () => $,
          Kt: () => Me,
          Ky: () => O,
          N8: () => T,
          OI: () => j,
          YL: () => H,
          c3: () => f,
          lY: () => b,
          w3: () => J,
          wy: () => c,
          y4: () => Z,
        });
        var t = m(72604),
          R = m(35038),
          z = m(98112),
          y = m(16277),
          d = m(68312),
          G = m(88942),
          ie = m(29385),
          V = m(61739),
          C = m(86392);
        const u = "get_reported_content",
          l = "get_reported_content_by_id",
          oe = "get_reported_content_audit_log",
          j = (g) => [u, JSON.stringify(g)],
          h = (g) => [l, g],
          B = (g) => [oe, g];
        async function O(g, P) {
          return Promise.all([
            g.invalidateQueries({ queryKey: [u], exact: !1 }),
            g.invalidateQueries({ queryKey: h(P) }),
            g.invalidateQueries({ queryKey: B(P) }),
          ]);
        }
        function N(g, P) {
          return {
            queryKey: j(P),
            enabled: (0, C.NX)(P),
            queryFn: async () => {
              const F = R.w.Init(y.Mw);
              F.Body().set_coordinates(y.UC.fromObject(P));
              const I = await y.fL.GetReportedContent(g, F);
              if (!I.BSuccess())
                throw new Error(
                  "Failed in GetReportedContent, EResult: " + I.GetEResult(),
                );
              return I.Body().toObject();
            },
          };
        }
        function J(g) {
          const P = (0, d.KV)();
          return (0, G.I)(N(P, g));
        }
        function ve(g, P) {
          return {
            queryKey: h(P),
            queryFn: async () => {
              const F = CProtoBufMsg.Init(
                CContentModeration_GetReportedContentByID_Request,
              );
              F.Body().set_reported_content_id(P);
              const I = await ContentModerationService.GetReportedContentByID(
                g,
                F,
              );
              if (!I.BSuccess())
                throw new Error(
                  "Failed in GetReportedContentByID, EResult: " +
                    I.GetEResult(),
                );
              return I.Body().toObject();
            },
          };
        }
        function ye(g) {
          const P = useActiveServiceTransport();
          return useQuery(ve(P, g));
        }
        function ne(g, P) {
          return {
            queryKey: B(P),
            queryFn: async () => {
              if (!P) return;
              const F = R.w.Init(y.v5);
              return (
                F.Body().set_reported_content_id(P),
                (await y.fL.GetAuditLogByID(g, F)).Body().toObject()
              );
            },
          };
        }
        function Me(g) {
          const P = (0, d.KV)();
          return (0, G.I)(ne(P, g));
        }
        function b(g) {
          const P = (0, d.KV)(),
            F = (0, ie.jE)();
          return (0, V.n)({
            mutationFn: async (I) => {
              const M = R.w.Init(y.Qi);
              M.Body().set_reported_content_id(g),
                M.Body().set_new_level(I.eNewLevel),
                I.eReason && M.Body().set_reason(I.eReason),
                I.strNote && M.Body().set_note(I.strNote);
              const k = await y.fL.EscalateSubjectByID(P, M);
              if (k.GetEResult() !== t.R)
                throw new Error(`Failed to escalate subject: ${k.GetEMsg()}`);
            },
            onSuccess: async () => {
              await Promise.all([
                O(F, g),
                F.invalidateQueries({ queryKey: ["get_claimed"] }),
                F.invalidateQueries({ queryKey: ["get_subject_overview"] }),
              ]);
            },
          });
        }
        function T() {
          const g = (0, d.KV)(),
            P = (0, ie.jE)();
          return (0, V.n)({
            mutationFn: async (F) => {
              const I = R.w.Init(y.Nr);
              I.Body().set_reported_content_id(F.reportedContentID);
              const M = await y.fL.SustainModerationByID(g, I);
              if (!M.BSuccess()) throw new Error("EResult " + M.GetEResult());
            },
            onSuccess: async (F, I) => {
              await O(P, I.reportedContentID),
                await P.invalidateQueries({ queryKey: ["get_claimed"] });
            },
          });
        }
        function H(g) {
          const P = (0, ie.jE)(),
            F = (0, d.KV)();
          return (0, V.n)({
            mutationKey: ["release_subject", ...g],
            mutationFn: async () => {
              const I = R.w.Init(y.GD);
              for (const k of g) {
                const _e = new y.F9();
                _e.set_reported_content_id(k),
                  I.Body().add_subjects_to_release(_e);
              }
              const M = await y.fL.ReleaseSubjects(F, I);
              if (!M.BSuccess()) throw new Error("EResult " + M.GetEResult());
            },
            onSuccess: async () => {
              await Promise.all([
                P.invalidateQueries({ queryKey: ["get_claimed"] }),
                P.invalidateQueries({ queryKey: ["get_subject_overview"] }),
                ...g.map((I) => O(P, I)),
              ]);
            },
          });
        }
        function Z(g, P) {
          const F = (0, d.KV)(),
            I = (0, ie.jE)();
          return (0, V.n)({
            mutationFn: async () => {
              const M = R.w.Init(y.LW);
              M.Body().set_reported_content_id(g), M.Body().set_details(P);
              const k = await y.fL.OwnerDisputeModeration(F, M);
              if (!k.BSuccess()) throw new Error("EResult " + k.GetEResult());
            },
            onSuccess: async () => {
              await O(I, g);
            },
          });
        }
        function c(g, P) {
          const F = (0, ie.jE)(),
            I = (0, d.KV)();
          return (0, V.n)({
            mutationFn: async () => {
              const M = R.w.Init(y.ps);
              M.Body().set_reported_content_id(g),
                M.Body().set_owner_dispute_details(P);
              const k = await y.fL.UpdateSubjectByID(I, M);
              if (!k.BSuccess()) throw new Error("EResult " + k.GetEResult());
            },
            onSuccess: async () => {
              await O(F, g);
            },
          });
        }
        function q(g, P) {
          return {
            queryKey: ["reporterstats", P],
            queryFn: async () => {
              const F = R.w.Init(y.KD);
              F.Body().set_steamid(P);
              const I = await y.fL.GetReporterStats(g, F);
              if (!I.BSuccess()) throw new Error("EResult " + I.GetEResult());
              return I.Body().toObject();
            },
          };
        }
        function $(g) {
          const P = (0, d.KV)();
          return (0, G.I)(q(P, g));
        }
        function we(g, P, F) {
          const I = (0, d.KV)(),
            M = (0, ie.jE)();
          return (0, V.n)({
            mutationFn: async (k) => {
              const _e = R.w.Init(z.Er);
              _e.Body().set_steamid(g),
                _e.Body().set_comment_thread_id(P),
                _e.Body().set_gidcomment(F),
                _e.Body().set_reason(k.reason),
                _e.Body().set_note(k.message);
              for (const De of k.sanctions) {
                const Oe = new z.u6();
                Oe.set_sanction(De.sanction),
                  De.days && Oe.set_days(De.days),
                  _e.Body().add_sanctions(Oe);
              }
              const Ee = await z.BE.SanctionComment(I, _e);
              if (!Ee.BSuccess())
                throw new Error(
                  `SanctionComment failed. EResult: ${Ee.GetEResult()} (${Ee.GetErrorMessage()})`,
                );
            },
            onSuccess: async () => {
              await M.invalidateQueries({ queryKey: ["get_claimed"] });
            },
          });
        }
        function f(g, P, F) {
          const I = (0, d.KV)(),
            M = (0, ie.jE)();
          return (0, V.n)({
            mutationFn: async () => {
              const k = R.w.Init(z.RX);
              k.Body().set_steamid(g),
                k.Body().set_comment_thread_id(P),
                k.Body().set_gidcomment(F),
                k.Body().set_report_action(z.du.Pn),
                k.Body().set_resolve(!0),
                await z.Vi.UpdateCommentReportState(I, k);
            },
            onSuccess: async () => {
              await M.invalidateQueries({ queryKey: ["get_claimed"] });
            },
          });
        }
      },
      88363: (A, xe, m) => {
        "use strict";
        m.d(xe, {
          Fj: () => R,
          R$: () => G,
          Zx: () => z,
          hs: () => V,
          o5: () => y,
          sr: () => ie,
        });
        const t = 1,
          R = 2,
          z = 4,
          y = 8,
          d = 256,
          G = 512,
          ie = 1024,
          V = 2048,
          C = 4096,
          u = 8192;
      },
      5858: (A, xe, m) => {
        "use strict";
        m.d(xe, { Z: () => j, dV: () => V.d, rO: () => oe, tp: () => V.t });
        var t = m(14947),
          R = m(31561),
          z = m(85528),
          y = m(18210),
          d = m(99412),
          G = m(88363),
          ie = m(3166),
          V = m(35413),
          C = Object.defineProperty,
          u = Object.getOwnPropertyDescriptor,
          l = (h, B, O, N) => {
            for (
              var J = N > 1 ? void 0 : N ? u(B, O) : B, ve = h.length - 1, ye;
              ve >= 0;
              ve--
            )
              (ye = h[ve]) && (J = (N ? ye(B, O, J) : ye(J)) || J);
            return N && J && C(B, O, J), J;
          };
        function oe(h) {
          let B = "offline";
          return (
            h &&
              (h.is_ingame
                ? (B = "ingame")
                : h.m_broadcastAccountId
                  ? (B = "watchingbroadcast")
                  : h.is_online && (B = "online"),
              h.is_awayOrSnooze && (B += " awayOrSnooze")),
            B
          );
        }
        class j {
          m_steamid;
          m_bInitialized = !1;
          m_ePersonaState = d.cU3;
          m_unGamePlayedAppID = 0;
          m_gameid = "0";
          m_unPersonaStateFlags = 0;
          m_strPlayerName = "";
          m_strAvatarHash = V.d;
          m_strAccountName = "";
          m_rtLastSeenOnline = 0;
          m_strGameExtraInfo = "";
          m_unGameServerIP = 0;
          m_unGameServerPort = 0;
          m_game_lobby_id = "";
          m_bPlayerNamePending = !1;
          m_bAvatarPending = !1;
          m_broadcastId = void 0;
          m_broadcastAccountId = void 0;
          m_broadcastAppId = void 0;
          m_broadcastViewerCount = void 0;
          m_strBroadcastTitle = void 0;
          m_bCommunityBanned = void 0;
          m_eGamingDeviceType = d.eSB;
          m_mapRichPresence = t.sH.map();
          m_bNameInitialized = !1;
          m_bStatusInitialized = !1;
          m_strProfileURL = void 0;
          constructor(B) {
            (0, t.Gn)(this), (this.m_steamid = B);
          }
          Reset() {
            (this.m_ePersonaState = d.cU3),
              (this.m_unGamePlayedAppID = 0),
              (this.m_gameid = "0"),
              (this.m_strGameExtraInfo = ""),
              (this.m_unGameServerIP = 0),
              (this.m_unGameServerPort = 0),
              (this.m_game_lobby_id = ""),
              this.m_mapRichPresence.clear(),
              (this.m_broadcastId = void 0),
              (this.m_broadcastAccountId = void 0),
              (this.m_broadcastAppId = void 0),
              (this.m_broadcastViewerCount = void 0),
              (this.m_strBroadcastTitle = void 0),
              (this.m_eGamingDeviceType = d.eSB);
          }
          GetAccountID() {
            return this.m_steamid.GetAccountID();
          }
          GetSteamIDAsString() {
            return this.m_steamid.ConvertTo64BitString();
          }
          get is_online() {
            return (
              this.m_ePersonaState != d.cU3 && this.m_ePersonaState != d._3b
            );
          }
          get is_ingame() {
            return (
              this.is_online &&
              (this.m_unGamePlayedAppID != 0 || this.m_gameid != "0")
            );
          }
          get is_watchingbroadcast() {
            return !!this.m_broadcastAccountId;
          }
          get is_in_nonsteam_game() {
            return this.m_unGamePlayedAppID == 0 && this.m_gameid != "0";
          }
          get is_in_joinable_game() {
            return (
              this.has_joinable_game_flag ||
              this.is_in_valid_lobby ||
              this.has_server_ip
            );
          }
          get has_joinable_game_flag() {
            return ((this.m_unPersonaStateFlags ?? 0) & G.Fj) != 0;
          }
          get connect_string() {
            return this.m_mapRichPresence.get("connect");
          }
          get is_in_valid_lobby() {
            return this.m_game_lobby_id != null && this.m_game_lobby_id != "0";
          }
          get has_server_ip() {
            return this.m_unGameServerIP != 0;
          }
          get is_awayOrSnooze() {
            return (
              this.m_ePersonaState == d.PrD || this.m_ePersonaState == d.vPz
            );
          }
          HasStateFlag(B) {
            return ((this.m_unPersonaStateFlags ?? 0) & B) != 0;
          }
          get last_seen_online() {
            return this.m_rtLastSeenOnline;
          }
          ClearStateOnDisconnect() {
            this.m_ePersonaState != d.cU3 && this.Reset();
          }
          get is_golden() {
            return this.HasStateFlag(G.Zx);
          }
          GetCurrentGameName() {
            return this.m_strGameExtraInfo
              ? this.m_strGameExtraInfo
              : this.m_unGamePlayedAppID
                ? z.Vw.GetAppInfo(this.m_unGamePlayedAppID).name
                : "";
          }
          GetCurrentGameIconURL() {
            return this.m_unGamePlayedAppID
              ? z.Vw.GetAppInfo(this.m_unGamePlayedAppID).icon_url
              : "";
          }
          BIsAppInfoReady() {
            return this.m_unGamePlayedAppID
              ? z.Vw.GetAppInfo(this.m_unGamePlayedAppID).is_initialized
              : !0;
          }
          HasCurrentGameRichPresence() {
            return this.m_mapRichPresence.has("steam_display");
          }
          HasRichPresenceForViewGameInfo() {
            return !!(
              this.m_mapRichPresence.has("status") ||
              this.m_mapRichPresence.has("connect") ||
              this.m_mapRichPresence.has("connect_private")
            );
          }
          GetCurrentGameRichPresence() {
            if (this.HasCurrentGameRichPresence()) {
              let B = z.Vw.GetRichPresenceLoc(this.m_unGamePlayedAppID);
              if (B) {
                let O = this.m_mapRichPresence.get("steam_display");
                return B.Localize(O, this.m_mapRichPresence);
              }
            } else if (this.HasStateFlag(G.o5))
              return (0, y.we)("#PersonaStateRemotePlayTogether");
            return "";
          }
          GetCurrentGameStatus() {
            return (
              this.GetCurrentGameRichPresence() ||
              this.m_mapRichPresence.get("status") ||
              ""
            );
          }
          GetOfflineStatusUpdateRate() {
            if (this.last_seen_online == 0) return 3e4;
            const B = 60,
              O = B * 60,
              N = O * 24;
            let J = 1e3;
            const ve =
              z.Vw.CMInterface.GetServerRTime32() - this.last_seen_online;
            return ve > N ? (J *= O) : ve > 2 * O ? (J *= B) : (J *= B / 4), J;
          }
          GetOfflineStatusTime() {
            if (this.last_seen_online == 0)
              return (0, y.we)("#PersonaStateOffline");
            let B = this.GetOfflineStatusUpdateRate();
            (!ie.TS.IN_MOBILE || B <= 60) && (0, R.tB)(B);
            let O = z.Vw.CMInterface.GetServerRTime32() - this.last_seen_online;
            return O < 60
              ? (0, y.we)("#PersonaStateLastSeen_JustNow")
              : (0, y.we)("#PersonaStateLastSeen", (0, y.Hq)(O));
          }
          GetLocalizedOnlineStatus() {
            switch (this.m_ePersonaState) {
              case d.cU3:
              case d._3b:
                return this.GetOfflineStatusTime();
              case d.UXk:
                return (0, y.we)("#PersonaStateOnline");
              case d.wcG:
                return (0, y.we)("#PersonaStateBusy");
              case d.PrD:
                return (0, y.we)("#PersonaStateAway");
              case d.vPz:
                return (0, y.we)("#PersonaStateSnooze");
              case d.Hrn:
                return (0, y.we)("#PersonaStateLookingToTrade");
              case d.HAb:
                return (0, y.we)("#PersonaStateLookingToPlay");
              default:
                return "";
            }
          }
          get has_public_party_beacon() {
            return this.m_mapRichPresence.has("__beacon") && this.is_ingame;
          }
          get player_group() {
            return this.m_mapRichPresence.has("steam_player_group")
              ? this.m_mapRichPresence.get("steam_player_group")
              : "";
          }
          get player_group_size() {
            return this.m_mapRichPresence.has("steam_player_group_size")
              ? Number.parseInt(
                  this.m_mapRichPresence.get("steam_player_group_size"),
                )
              : 0;
          }
          get online_state() {
            return this.is_online
              ? this.is_ingame
                ? "in-game"
                : this.m_broadcastAccountId
                  ? "watchingbroadcast"
                  : "online"
              : "offline";
          }
          BHasAvatarSet() {
            return this.m_strAvatarHash != V.d;
          }
          get avatar_url() {
            return (0, V.t)(this.m_strAvatarHash);
          }
          get avatar_url_medium() {
            return (0, V.t)(this.m_strAvatarHash, "medium");
          }
          get avatar_url_full() {
            return (0, V.t)(this.m_strAvatarHash, "full");
          }
          static SortStatusComparator(B, O, N) {
            if (O.has_public_party_beacon) {
              if (!N.has_public_party_beacon) return -1;
            } else {
              if (N.has_public_party_beacon) return 1;
              if (O.is_ingame)
                if (N.is_ingame)
                  if (B) {
                    if (O.is_awayOrSnooze) {
                      if (!N.is_awayOrSnooze) return 1;
                    } else if (N.is_awayOrSnooze) return -1;
                  } else return 0;
                else return -1;
              else if (N.is_ingame) return 1;
            }
            if (O.is_online) {
              if (!N.is_online) return -1;
            } else if (N.is_online) return 1;
            if (B) {
              if (O.is_awayOrSnooze) {
                if (!N.is_awayOrSnooze) return 1;
              } else if (N.is_awayOrSnooze) return -1;
            }
            return 0;
          }
          GetCommunityProfileURL() {
            return this.m_strProfileURL
              ? `${ie.TS.COMMUNITY_BASE_URL}id/${this.m_strProfileURL}/`
              : `${ie.TS.COMMUNITY_BASE_URL}profiles/${this.m_steamid.ConvertTo64BitString()}/`;
          }
        }
        l([t.sH], j.prototype, "m_bInitialized", 2),
          l([t.sH], j.prototype, "m_ePersonaState", 2),
          l([t.sH], j.prototype, "m_unGamePlayedAppID", 2),
          l([t.sH], j.prototype, "m_gameid", 2),
          l([t.sH], j.prototype, "m_unPersonaStateFlags", 2),
          l([t.sH], j.prototype, "m_strPlayerName", 2),
          l([t.sH], j.prototype, "m_strAvatarHash", 2),
          l([t.sH], j.prototype, "m_strAccountName", 2),
          l([t.sH], j.prototype, "m_rtLastSeenOnline", 2),
          l([t.sH], j.prototype, "m_strGameExtraInfo", 2),
          l([t.sH], j.prototype, "m_unGameServerIP", 2),
          l([t.sH], j.prototype, "m_unGameServerPort", 2),
          l([t.sH], j.prototype, "m_game_lobby_id", 2),
          l([t.sH], j.prototype, "m_bPlayerNamePending", 2),
          l([t.sH], j.prototype, "m_bAvatarPending", 2),
          l([t.sH], j.prototype, "m_broadcastId", 2),
          l([t.sH], j.prototype, "m_broadcastAccountId", 2),
          l([t.sH], j.prototype, "m_broadcastAppId", 2),
          l([t.sH], j.prototype, "m_broadcastViewerCount", 2),
          l([t.sH], j.prototype, "m_strBroadcastTitle", 2),
          l([t.sH], j.prototype, "m_bCommunityBanned", 2),
          l([t.sH], j.prototype, "m_eGamingDeviceType", 2),
          l([t.sH], j.prototype, "m_bNameInitialized", 2);
      },
      46943: (A, xe, m) => {
        "use strict";
        m.d(xe, { Ul: () => J, i8: () => ye });
        var t = m(7850),
          R = m(90626),
          z = m(75844),
          y = m(5858),
          d = m(36707),
          G = m(3166),
          ie = m(13465);
        const V =
            "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD//gA7Q1JFQVRPUjogZ2QtanBlZyB2MS4wICh1c2luZyBJSkcgSlBFRyB2NjIpLCBxdWFsaXR5ID0gOTAK/9sAQwADAgIDAgIDAwMDBAMDBAUIBQUEBAUKBwcGCAwKDAwLCgsLDQ4SEA0OEQ4LCxAWEBETFBUVFQwPFxgWFBgSFBUU/9sAQwEDBAQFBAUJBQUJFA0LDRQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQU/8AAEQgAIAAgAwEiAAIRAQMRAf/EAB8AAAEFAQEBAQEBAAAAAAAAAAABAgMEBQYHCAkKC//EALUQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+v/EAB8BAAMBAQEBAQEBAQEAAAAAAAABAgMEBQYHCAkKC//EALURAAIBAgQEAwQHBQQEAAECdwABAgMRBAUhMQYSQVEHYXETIjKBCBRCkaGxwQkjM1LwFWJy0QoWJDThJfEXGBkaJicoKSo1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoKDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uLj5OXm5+jp6vLz9PX29/j5+v/aAAwDAQACEQMRAD8A/P4mW5nmllmeSR3LMzMSSc1a07R73V72KzsILi9u5TiOC2RpJHPoFGSarQ/ef6n+de4fAn9oaL4D+DfGX9i6Uf8AhO9XSKDT9eZY3WxiDZcBGByTkn0JCZBxQB41qeiX+iXslnqNtdWF3H9+3uo2jkX6q2CKpgy208MsUzxyI4ZWViCDmvsr9rrUdT1j9nb4T6h8RBbH4qXUs0zMsSxXJ04hivnKoAU5MPGBg7uM7q+NpvvJ9R/OgAh+8/1P867T4POI/iz4Mc6U+u7NZtG/suPbuu8TKfKG4hct93njnmuKIltp5opYXjkRyrKykEHNWbDVbvSr63vbKaezvLeRZYbi3ZkkidTlWVhyCCMgjpQB6l+1F411nx58dPFWpa5a3mnXaXP2ZNOvXVpLKNBhYflJUY5PB5JJ6k15LN95PqP51a1PWr7WtQnvtRuLm/vrhzJNc3TtJLIx6lmbJJ9zVQCW5nhiiheSR3CqqqSSc0Af/9k=",
          C =
            "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD//gA7Q1JFQVRPUjogZ2QtanBlZyB2MS4wICh1c2luZyBJSkcgSlBFRyB2NjIpLCBxdWFsaXR5ID0gODAK/9sAQwAGBAUGBQQGBgUGBwcGCAoQCgoJCQoUDg8MEBcUGBgXFBYWGh0lHxobIxwWFiAsICMmJykqKRkfLTAtKDAlKCko/9sAQwEHBwcKCAoTCgoTKBoWGigoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgo/8AAEQgAQABAAwEiAAIRAQMRAf/EAB8AAAEFAQEBAQEBAAAAAAAAAAABAgMEBQYHCAkKC//EALUQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+v/EAB8BAAMBAQEBAQEBAQEAAAAAAAABAgMEBQYHCAkKC//EALURAAIBAgQEAwQHBQQEAAECdwABAgMRBAUhMQYSQVEHYXETIjKBCBRCkaGxwQkjM1LwFWJy0QoWJDThJfEXGBkaJicoKSo1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoKDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uLj5OXm5+jp6vLz9PX29/j5+v/aAAwDAQACEQMRAD8A8Inmk8+T94/3j/EfWmedJ/z0f/vo0T/6+T/eP86ZQA/zpP8Ano//AH0aPOk/56P/AN9GmVo6Loeq65M0Wj6ddXrr94QRF9v1I6fjQBR86T/no/8A30aPOk/56P8A99GtHW/Dus6GV/tjS7yyD8K00RVW+h6GsugB/nSf89H/AO+jT4JpPPj/AHj/AHh/EfWoafB/r4/94fzoAJ/9fJ/vH+dMp8/+vk/3j/OmUAXdE099W1mw06Jgsl3PHApPYswUH9a+qPF3iHSPhF4S0+003TxK0hMcEAbZvIA3SO2OvIz6k18nW88ttcRz28jxTRMHSRGKsrA5BBHQg1b1TWdT1fy/7V1G8vfLzs+0TNJtz1xknHQUAfUXw+8c6Z8UdN1HS9V0xIpUTM1s7eYkiE43KcAgg/lxg180+NtEHhzxZqmkqxdLWcojHqUPK598EV9CfBbwpF4G8J3fiLxA4trm5hEsnmceRCOQD/tHqR9B1r568a63/wAJH4r1TVghRLqYuinqE6KD74AoAxafB/r4/wDeH86ZT4P9fH/vD+dABP8A6+T/AHj/ADplPn/18n+8f50ygArt/gtpltq/xK0e2vYxJArPMUYZDFEZhn2yBXEV0/w203VNX8YWdloOoHTtQkWQx3IZl2gISeV55AI/GgD1H9pvxPdi/s/DcDGOz8pbqfHWRizBQfYbc/U+1eD12PxW0fWtE8Tpa+I9UOqXpt0cTl2bCEthctz1B/OuOoAKfB/r4/8AeH86ZT4P9fH/ALw/nQAT/wCvk/3j/OmVNPDJ58n7t/vH+E+tM8mT/nm//fJoAZV7Q9Xv9C1KLUNJuGtryMEJIoBIyCD1BHQmqnkyf883/wC+TR5Mn/PN/wDvk0AaHiHXtT8RX4vdau2u7oIIxIygHaCSBwB6msyn+TJ/zzf/AL5NHkyf883/AO+TQAynwf6+P/eH86PJk/55v/3yafBDJ58f7t/vD+E+tAH/2Q==",
          u =
            m.p +
            "images/applications/community/avatar_default_full.jpg?v=valveisgoodatcaching";
        var l = m(43047),
          oe = m.n(l),
          j = m(71742),
          h = Object.defineProperty,
          B = Object.getOwnPropertyDescriptor,
          O = (b, T, H, Z) => {
            for (
              var c = Z > 1 ? void 0 : Z ? B(T, H) : T, q = b.length - 1, $;
              q >= 0;
              q--
            )
              ($ = b[q]) && (c = (Z ? $(T, H, c) : $(c)) || c);
            return Z && c && h(T, H, c), c;
          };
        function N(b) {
          switch (b) {
            case "X-Small":
            case "Small":
              return V;
            case "Medium":
            case "MediumLarge":
              return C;
            case "Large":
            case "X-Large":
            case "FillArea":
              return u;
            default:
              return (0, j.z_)(b, `Unhandled size ${b}`), C;
          }
        }
        const J = R.memo(function (T) {
            const {
                strAvatarURL: H,
                size: Z = "Medium",
                className: c,
                statusStyle: q,
                statusPosition: $,
                children: we,
                ...f
              } = T,
              g = R.useMemo(() => {
                const P = [];
                return H && P.push(H), P.push(N(Z)), P;
              }, [H, Z]);
            return (0, t.jsxs)("div", {
              className: (0, d.A)(
                oe().avatarHolder,
                "avatarHolder",
                "no-drag",
                Z,
                c,
              ),
              ...f,
              children: [
                (0, t.jsx)("div", {
                  className: (0, d.A)(oe().avatarStatus, "avatarStatus", $),
                  style: q,
                }),
                (0, t.jsx)(ie.c, {
                  className: (0, d.A)(oe().avatar, "avatar"),
                  rgSources: g,
                  draggable: !1,
                }),
                we,
              ],
            });
          }),
          ve = R.memo(function (T) {
            const {
              strAvatarURL: H,
              size: Z = "Medium",
              className: c,
              statusStyle: q,
              statusPosition: $,
              children: we,
              ...f
            } = T;
            return (0, t.jsxs)("div", {
              className: (0, d.A)(
                oe().avatarHolder,
                "avatarHolder",
                "no-drag",
                Z,
                c,
              ),
              ...f,
              children: [
                (0, t.jsx)("div", {
                  className: (0, d.A)(oe().avatarStatus, "avatarStatus", $),
                  style: q,
                }),
                (0, t.jsx)("img", {
                  className: (0, d.A)(oe().avatar, "avatar"),
                  src: H,
                  draggable: !1,
                }),
                we,
              ],
            });
          });
        let ye = class extends R.Component {
          render() {
            const {
              persona: b,
              size: T = "Medium",
              animatedAvatar: H,
              className: Z,
              strBackupAvatarURL: c,
              ...q
            } = this.props;
            let $ = "";
            return (
              H && H.image_small && H.image_small.length != 0
                ? ($ = G.TS.MEDIA_CDN_COMMUNITY_URL + "images/" + H.image_small)
                : b
                  ? (($ = b.avatar_url_medium),
                    T == "Small" || T == "X-Small"
                      ? ($ = b.avatar_url)
                      : (T == "Large" || T == "X-Large" || T == "FillArea") &&
                        ($ = b.avatar_url_full))
                  : c && ($ = c),
              (0, t.jsx)(J, {
                strAvatarURL: $,
                size: T,
                className: (0, d.A)((0, y.rO)(b), Z),
                ...q,
              })
            );
          }
        };
        ye = O([z.PA], ye);
        const ne = (0, z.PA)((b) => {
          const {
            profileItem: T,
            className: H,
            bDisableAnimation: Z,
            ...c
          } = b;
          if (!T || !T.image_small || T.image_small.length == 0) return null;
          let q = Z ? T.image_large : T.image_small;
          return (
            q || (q = T.image_small),
            q.startsWith("https://") ||
              (q = G.TS.MEDIA_CDN_COMMUNITY_URL + "images/" + q),
            (0, t.jsx)("div", {
              className: (0, d.A)(oe().avatarFrame, H, "avatarFrame"),
              ...c,
              children: (0, t.jsx)("img", {
                className: oe().avatarFrameImg,
                src: q,
              }),
            })
          );
        });
        let Me = class extends R.Component {
          m_timer;
          constructor(b) {
            super(b),
              (this.state = { bAnimate: this.props.loopDuration != "None" }),
              (this.m_timer = 0);
          }
          componentDidMount() {
            this.props.bParentHovered || this.SetupAnimationTimer();
          }
          SetupAnimationTimer() {
            let b = 0;
            switch (this.props.loopDuration) {
              case "Short":
                b = 2500;
                break;
              case "Medium":
                b = 5e3;
                break;
              case "Long":
                b = 1e4;
                break;
            }
            b != 0 &&
              (this.setState({ bAnimate: this.props.loopDuration != "None" }),
              (this.m_timer = window.setTimeout(
                () => this.setState({ bAnimate: !1 }),
                b,
              )));
          }
          StopAnimationTimer() {
            this.m_timer &&
              (window.clearTimeout(this.m_timer), (this.m_timer = 0));
          }
          onHover() {
            this.SetupAnimationTimer();
          }
          componentWillUnmount() {
            this.StopAnimationTimer();
          }
          componentDidUpdate(b) {
            this.props.loopDuration != b.loopDuration &&
              (this.props.loopDuration == "None"
                ? (this.setState({ bAnimate: !1 }), this.StopAnimationTimer())
                : this.props.loopDuration == "Infinite"
                  ? (this.setState({ bAnimate: !0 }), this.StopAnimationTimer())
                  : (this.setState({ bAnimate: !0 }),
                    this.SetupAnimationTimer())),
              this.props.bParentHovered != b.bParentHovered &&
                (this.props.bParentHovered &&
                this.props.loopDuration != "None" &&
                this.props.loopDuration != "Infinite"
                  ? (this.setState({ bAnimate: !0 }), this.StopAnimationTimer())
                  : this.state.bAnimate && this.SetupAnimationTimer());
          }
          render() {
            let {
              loopDuration: b,
              animatedAvatar: T,
              avatarFrame: H,
              children: Z,
              style: c,
              bLimitProfileFrameAnimationTime: q,
              bParentHovered: $,
              ...we
            } = this.props;
            we.onClick && (c = { ...c, cursor: "pointer" });
            const f = this.state.bAnimate ? (T ?? void 0) : void 0;
            return (0, t.jsx)("div", {
              onMouseEnter: () =>
                this.setState({ bAnimate: this.props.loopDuration != "None" }),
              onMouseLeave: () => this.SetupAnimationTimer(),
              children: (0, t.jsxs)(ye, {
                animatedAvatar: f,
                ...we,
                children: [
                  Z,
                  (0, t.jsx)(ne, {
                    profileItem: H ?? null,
                    bDisableAnimation: q && !this.state.bAnimate,
                  }),
                ],
              }),
            });
          }
        };
        Me = O([z.PA], Me);
      },
      35471: (A) => {
        A.exports = {
          AvatarRow: "_2_WvK_kw61MeIY0BLQuTYk",
          Avatar: "_27tBXgfdEAfkIIkBVcHcz7",
          AvatarImgCtn: "_38rbzqVaeYFSog5HY2wIfA",
          AvatarCropPreview: "_2Oe26ilBQ7C8rjQMvDsmgp",
          AvatarFrame: "_3ySvFQWUuRAY6Vx1d5Efkw",
          Large: "EYMShwguH1_ideNSQzvMS",
          Medium: "_14qK3ssEIfafgHxF-tSLUd",
          Small: "_2pCRw3iWEG_XNKhAxycr9t",
          size: "_2jOhbF8XC1faroHD7ujZfC",
          AvatarDialog: "_1p-WxvRlOfiudkoGE7ksJy",
          AvatarDialogBody: "_39Ovvp_JpX-r2RWezUkAdX",
          AvatarDialogTop: "aCrGPGVeH6HvzyPW8PaAj",
          AvatarDialogUploadArea: "_22EnaYFQb5I0kYtH2UHEhV",
          AvatarSaveActions: "_1c6Pv0fgCBFtwWexhQwIT-",
          Error: "eo3iM5FQXIYFjV6icGtOt",
          HideDefaultAvatar: "_6zU6FltqwlftPqcXGNwdg",
        };
      },
      45301: (A) => {
        A.exports = {
          AvatarCollectionHeader: "_27Q-8T7of0bKkwA3zlx1kz",
          AvatarCollectionName: "_2pum1YNak3hPxNcovBkHLM",
          AvatarCollection: "_1UoAvYFtO-OEv3DMwZCL8A",
          AvatarCollectionSingleRowWrapper: "_1vTT_zTYgCMac88oxQi3Ha",
          ExpandButtonContainer: "_1gQbx3Kj8dnEC2lP45X6kS",
          AvatarCollectionSingleRow: "BT8ZjnpbIcKCaGUGlVd-v",
          AvatarRowSpacer: "_3g0nrYJivLhKmdWlHk1uhD",
          AvatarPreview: "_29CGQrIvjYllKwVQKe8d8R",
          Large: "_1aa4CwlUeZE1tRZGOsRPx9",
          ExpandAvatarsButton: "_3PolQ91t3Uohfvr4beUAM9",
          FramePreview: "_16w1DqxiJ7Hou6al4RGELE",
          DefaultAvatarFrame: "Z3REHSppX48KICnAjjh90",
          DefaultAvatarFrameContent: "_2TBs_xzgkuwXPkgIBiITOJ",
          CollectionGroup: "_2kbA6NLESf88_j1ERdI8Gv",
          Title: "_2Gy0LT9CY0HBBCjrM9Ffs7",
          Primary: "_24kMLN7TtIY39bpBnG9XZv",
          CollectionGroupAvatars: "wWso7JTRLQM-cuJ7gvxf3",
        };
      },
      27456: (A) => {
        A.exports = { FilteredNameWarning: "WMztNH2YVTVVxIq6OxSLt" };
      },
      90713: (A) => {
        A.exports = {
          Badge: "_2ODUBJas15JwSZWN9fWb07",
          BadgeImage: "_3M7FE3-Qhs3rPPI1uEviqM",
          BadgeImageNone: "_1oIYR3fmUnOC9eWJOv-Rz-",
          BadgeDetails: "_3Y40HABkqaQQVn7lIX0Rm9",
          GameName: "k5TyflBXF_FmpbYNKfggk",
          Active: "_1r9u8u8kKtPi6zOrEDoLzY",
          FavoriteBadge: "_3lkNZaOsD0rSbyrItINirx",
          BadgeOption: "P1MG7839XeRbNLY9PPQ38",
        };
      },
      53841: (A) => {
        A.exports = {
          Group: "_1yHxtA_qbj9xWiLkUiovpE",
          GroupAvatar: "_1C_n640PvrV_-DCXwOeCZY",
          GroupDetails: "aUFBJvbETNq6EL-n8KopY",
          Active: "_12sHAG2Fad1srfzqUDKzBF",
          FavoriteGroup: "_2XwzRFYfrwfarnDmtGb8Hj",
          GroupOption: "_3neyrJugKgECRdGVuulTG5",
        };
      },
      30082: (A) => {
        A.exports = {
          MiniProfilePreview: "_1MWlWL7ZhPBM6BDFnIiZC-",
          MiniProfileBackgroundOption: "_1kB6_rUcA_VRp7MER6E0Vi",
          Preview: "_1JFlRrkeYJegFK8xCBRfYw",
          Active: "B-qJhQJWkxUckMndLyqeR",
          Details: "_3-aXJM9nyOBORZvUQyQ3ap",
          BlankBackground: "_19sKX1Sg9icPcVJAPT7kN0",
          PreviewVideo: "_3PAmyizPC3zW2TZLRI8I9P",
          Title: "_2l5zy4BaLwvaZNuUvyQnU6",
          App: "xmRMR8QAsdIDgZA0PoBxy",
          WithVideo: "_1BBISLCwQa0DE2a_Xy6Icq",
        };
      },
      26075: (A) => {
        A.exports = {
          EquippedBackgroundBlock: "_1PihrEGH3HghW5Q87-82wa",
          EquippedBackgroundPreview: "_2k_2LLU5UqpUgiNx2F04-w",
          BackgroundOption: "_189ERe_A-jhzSSRw4f2Hw",
          Preview: "_2Zeggw-2qC5ma2qpjzHRlF",
          Active: "evPn26xhwAuh_SlWNY26E",
          Details: "_1xKo7wTahW2CJNXn4Gfkxj",
          PreviewVideo: "_2zA7YWc8urB45EvldeF88g",
          WithVideo: "_3muY5fT_nvt4gikS1bVHmO",
          Title: "o0PlP8_WMy75QKdhVlbov",
          App: "_3yGh0iLXIo7GSx2Pg69p8j",
          ProfileBackgroundEquipOptions: "RS77Un974Vp7lUC-yWzSj",
          HideEquipOptions: "_1XNnrCt7ro_dtfW9NhPTVH",
          ProfileBackgroundEquipOption: "_3Hc2RndZ1VBwa3ChKjT5r_",
        };
      },
      78091: (A) => {
        A.exports = {
          "duration-app-launch": "800ms",
          Shell: "_2kqKZFxhF8XvzaoAekjV7m",
          Navigation: "_33Kl16vpskBOQpwINGA8ah",
          NavLink: "_3rtIpqfC_9VWz4DRSTPach",
          ExternalLink: "_1xCANgh2DSCcadDX6X0PpT",
          Disabled: "k9wPoKS3UeY-ju9JEoeZZ",
          Active: "_3H7Awq1oAhxrdDo3ANR4mu",
          ProfileEditStoreLink: "_3iaJsP4avEYu4oI9gP8Gro",
          PageContent: "_23XE60ehNyeIhLHf5L7QPl",
          table: "_3hkXCJfwhtQ7cIylRaBXqu",
          grey_bevel: "TyiecoVJmS6-thhLSt8g3",
          ProfileEditLine: "_58Mghr8vhm_-IZP3Mkcb_",
          BackToProfileCtn: "_1YOt2792y012GM8bOQs0kh",
        };
      },
      49622: (A) => {
        A.exports = {
          ProfileModifierPreview: "OhBEtbgKwv_tF8ApEBKW1",
          ProfileModifierOption: "_3NIiYdehUu4wAz6rNXR_OB",
          Preview: "_2GvFUUI49ePmg62crk2qDO",
          Active: "_3nePJyNcthWMTkF4NSI7aI",
          Details: "v3WjrE9N9goFIJQPWYt2y",
          BlankBackground: "Gd3-pJ25GXL-bDaQAnChb",
          Title: "_3be6DMXFaQOXetdgMvAlAB",
          App: "_2SYZ_HWvH4AGrrsvCxfhv",
        };
      },
      38945: (A) => {
        A.exports = {
          ProfilePreview: "sJ5StnbpDdxWmTGb1GPaI",
          PaintRadial0: "_3ygvjjstY4gEw5KnTovscL",
          PaintRadial1: "_1iVdB4h9VHJh3-Y2uaYV_a",
          ThemeBackground: "_2cgol9Az0EgKe5fq221xB1",
          ProfilePagePreviewCtn: "jnA47pnC2fs47Uo4apcHu",
          BackgroundPosition: "_2iCc5ucakNB4NVioWadFOk",
          Background: "_3gdqW4BrRxMHh-BiNB6op0",
          FullScreen: "_3wfiB3fzVjHX4d37oNIrws",
          ProfilePreviewPosition: "_2YO8vzkqzPjjFQ2DkjOdUE",
          ProfilePreviewCtn: "uyN_gy4zQkYOLt9JjhqwO",
        };
      },
      20644: (A) => {
        A.exports = {
          ProfileThemePicker: "_37I7qqfjDrrodNn7HMcUDt",
          ThemePickerDisabled: "_1gBl2q9swlXkDKS1stCsJI",
          ProfileThemePreviewCtn: "_3PwJq2PZopqeihMUUx3DFr",
          ThemesDisabledNotice: "_3GOAIB03esypNEP7awK6mV",
          Notice: "_2fpuQBcIAw_0cP_FLqJqBR",
          ProfileTheme: "_39ksjd1_LKKPt0CIOhnMF7",
          Option: "_2aQ08chNRS9DgKjACdNLuA",
          Details: "mHggMG8QHavW0I9eosXGZ",
          Preview: "_36oStJXlvGWLdFxYUgNyg-",
          Active: "_1axztkRY8LVC4m3V8pYDb3",
          PreviewCtn: "_33SnKgfa_4ZtACekXcqli0",
          EditBackground: "_1idPP7NJkL8W_tzA70RqD_",
          PaintRadial0: "_18laVD4VvL_F7TfqStTAlc",
          PaintRadial1: "W_TqKQWMZV-fb62eqJZLF",
          ProfilePreview: "MneEOvQdS_KqFNR9i_Uxz",
        };
      },
      19838: (A) => {
        A.exports = {
          "duration-app-launch": "800ms",
          formattingButtons: "_2T2D7Afq6aW35s3wV5Tgkz",
          formattingButton: "LhNoIaEKN1cIpOrnt59wq",
          summaryTextArea: "_2ipSt29jAqoPXf-_iTAL0-",
          summaryContainer: "_3sH5hzWvrCU2QOKpNxfq3m",
        };
      },
      31270: (A) => {
        A.exports = {
          ProfileEditRoot: "_1lBbVHO5WRsyO1b79tnWM7",
          ItemPicker: "n1M1oAE4l0f1dxNm_ux2s",
          ItemPickerCtn: "_20EDLy9ziFgZhS3jI4b1FG",
          ItemPickerList: "SMUuC8C6RWRfyx8muAw-S",
          PickerPreviewDialog: "_20HXbZxc7PM5Cr1hOzK2SC",
          PickerPreviewBody: "_2sArlom6cS_SfcD2RzzHW2",
          PickerPreviewItems: "_2N5uyja8fIs2OYuVFmwXLH",
          SaveCancelButtons: "_2KJ8a96V8ilTQR7aQd6wsC",
          ProfileRow: "_302o-E1lWNsjmNpOpQSdDC",
          ProfileCol: "_3tMGe9MfyRH0586o3fy4n5",
          ProfileBox: "uwqwoAlIVWyJ8l71i77-i",
          ProfileBoxTitle: "_2CGYg9che0ONznDOoGhp9Y",
          ProfileBoxContent: "_3s6BBoF1hXm0yeOzoVsAQj",
          ShortLeftCol: "_1tHO9JW5QgfwCm1zzF3wgo",
          HTMLErrorBox: "_2MfLNiVZp5dIGmdFChe4Dg",
          HTMLErrorBoxAppear: "_1QYzncYqyxT6XGGW0-0gTG",
          CooldownNotice: "_2kl3Ad3oDakegWuvxJmSOH",
          ErrorMessage: "_3j9lmAnUKBFcmX-wJ4iTF7",
          DisabledInputCtn: "ZePu4IVRyGY6qjrJ4cgua",
        };
      },
      56420: (A) => {
        A.exports = {
          narrowWidth: "500px",
          SnoozeContainer: "_1DsumfIa3MlkzUV9EXY5W9",
          SnoozeZ: "_2n0EiKMGRP-r_BI5tDtttu",
          none: "T3Fb5KTXwIHM2B-ThTvEs",
          Medium: "_1iYPlsChibPe7Ga9B3c5Wm",
          Large: "_3BESV4eFnr4EnaSaJSdk6T",
          Dim: "rpZ9bKyFXYvNQvgtKn5GV",
          Z1: "_2hnF3M_l4xdIdQ4CkN7LYB",
          Z2: "VmQTOrz5MPOWte5C9K7YS",
          Z3: "_29mtadjX8N6pRn5TX1nA0o",
          hoverParent: "_3-8cByP2koYzHwgZqjvFA",
          animating: "_2rXc7hLg6bohWZ-JpRcYEB",
          Snoring: "_38wIVgo1WjvGqL5ZsmpmiX",
        };
      },
      85198: (A) => {
        A.exports = {
          miniProfile: "_2QPdq7GZ_03AD1ioPixVXW",
          miniProfileContent: "_1xTATKELHR-lRS_s3A4yzd",
          miniProfileHeader: "_3CZcHyWskP9Hc5t7AOo75A",
          miniProfilePlayer: "_2jZ0A5VjGTNGTQm03FbLrF",
          playerContent: "_2-pwJCHlrc7zxN4iup2TR7",
          miniProfileBackground: "_3HzZhZyBuR0K4qXaQoHMxI",
          miniProfileBackgroundBlur: "xUosYQXZvivPCxe-KwpvT",
          miniProfileVideoBackground: "_2ZqfbNDeHFU_qaf3X3_Jjv",
          miniProfileVideoBackgroundContainer: "_3MrYvAGQ-g7bNccn6VJNpK",
          miniProfileBackdropBlur: "_1QhpYlQvI1J05uCM2I2e3X",
          miniProfileBlocked: "_39Jef4sV4jnGy6XES6JdVs",
          miniProfileNotFriends: "_3Ea91LEoevcAXAuoA2-uLa",
          notFriends: "_2zgR7xa30ESr7HTdIXFpx_",
          SnoozeContainer: "_1cAsx42HMUFngn5IALUvH0",
          miniProfileHover: "_2AWayy-K0ZoNKv_Fr3CT_R",
          miniprofile_arrow: "_1YsNonjqp5KW66H9OqH1uE",
          left: "_1qS_btEzAb6Qf5ngmgbhmz",
          playerAvatar: "_36eQg-jp1ebbdaE6PBniHu",
          Frame: "_2nPONxDUmK4rQXzK4Y3vG2",
          avatarStatus: "_1YdpXFoH7P9pEEXDMITSHu",
          miniProfileAvatarStatus: "_1k5YkN8kx48i2TZ6kG9muA",
          personaName: "qiP8aEgNz331tt6X4NMNW",
          hasNickname: "_2TAWSrfSd1CiZ9WSYsc69c",
          personaNameLabel: "_2VUw8xyYCaD1WduLCK3nlW",
          nickName: "h_So5GaEfmXOgB9hCC0Is",
          persona: "_3c5GOobmMUyjAWTosaUKUS",
          personaAndIcons: "_1p9kf3ahuMynhiqV1RC7aC",
          awayStatusLabel: "_1FgWIOIaRCAekjhGj0zFWq",
          nickname: "_1SWhpi9ByGQrwHGQgTJCF5",
          playerNicknameBracket: "_3qa8cpVZ8PcsB3PpYNfVgb",
          notInOrWatchingGame: "_1NkB7RuIs66QCtsv4kxeCu",
          miniProfileBottom: "_26ga2HHZL2HlK6wwFImcgX",
          miniProfileGameContainer: "_7-U6jtoeGvesTm7JFGH0-",
          gameLogo: "A0XYrZMFUpzFpMU7qBrhJ",
          ingame: "_24oQzlBma4VdZUDiSBaYFA",
          richPresence: "_39T3EbAEqqKrJl5rX1-qPW",
          gameState: "_3Hxc3f2ZlkYTKbrxVoS9sq",
          watchingbroadcast: "_3hSAG74hI2XkboOz8Vpg5L",
          watchingbroadcastThumbnail: "FmBWyeU1wuwOi6NsbQ4c2",
          gameContent: "_3YwnZTz_58lZ5anORkzDg3",
          miniProfileFeaturedContainer: "_1KDhdcZYSzJ8bcqGIVKlWI",
          favoriteBadgeIcon: "qP4hsoQxxvaLVT3Gkm4J8",
          badgeIcon: "_1oWOaeg_sFX88v15LwM2PO",
          featuredLabels: "_39hariVfr4A85k8c2TC_x1",
          friendPlayerLevelNum: "_3vvwMiUuxFKnz-LwGwe5Do",
          featuredTitle: "_2mCgtDakdGp_qrKcyIcZii",
          mutualFriends: "_3AWk3BnPfsx8KJEGVge4Cr",
          featuredSubTitle: "_3DelZ7HZu1TfU115lLc7vl",
        };
      },
      70342: (A) => {
        A.exports = {
          "duration-app-launch": "800ms",
          narrowWidth: "500px",
          PersonaStatusIcon: "KxAI_M9gWx3OnKSshHOs6",
          MobilePhoneIcon: "_1iRFj5lJrMqMnRb3GZYPSw",
          SteamDeckIcon: "_2oLqcfqHHKKAK0WfzjXMg_",
          VRIcon: "_368tz9TSOLGiG2mNMLScMz",
        };
      },
      43047: (A) => {
        A.exports = {
          narrowWidth: "500px",
          avatarHolder: "nibodjvvrm86uCfnnAn4g",
          avatarStatus: "_3xUpb5DWXPFNcHHIcv-9pe",
          avatar: "_3h-QRJGxnVOIExtHD1R0f2",
          avatarFrame: "X_mJE4BYV5StDPwZhSiAu",
          avatarFrameImg: "_3fM0F85j3aWVzr4RJM9-eu",
        };
      },
      19939: (A) => {
        A.exports = {
          DefaultTheme: "tedMfud89T5ZrUuQ8lAqa",
          CosmicTheme: "_17vHyc7XLi7gzu2oXAzl5a",
          SummerTheme: "_2skFv_DvfYIlpykYdWu7xV",
          MidnightTheme: "M8Pf4xHIhZLaD7sf8J3vu",
          DarkModeTheme: "_2p-_xCU5_sEJ9phLJw-z_3",
          SteelTheme: "xdD8LlOZDqnQ4lJDHdXGW",
          PinkTealTheme: "_3M7clERndkEKPNIhBohVMW",
          MutedRedTheme: "_3lp4RPxbavagP3nVyYOqZR",
          SteamGreenTheme: "_335yQcbM4tv-C34Oxp247l",
          BlueRedTheme: "_2wH82wp5kaa9YD2ljk9RES",
          GoldBurgundyTheme: "YGKfXNHlIS_8t5PbZ990c",
          VibrantBlueTheme: "_3DOwBWizAt9lgmPWTYUHGM",
          GoldenProfileDebutTheme: "_3BHT2anoumk7shbvRYLwFK",
          WinterProfile2020Theme: "_3jPiA59YTBrjF0Yke8xtNc",
          GoldenWeekProfile2021Theme: "_24NEVre-U6vI5Uy2EbOWXo",
          Summer2021Theme: "_2bB_m6htDqAvdWtyyUGztf",
          MutedBlueTheme: "_3-7Wke7qwH61HrZRnXuxmv",
          GoldTheme: "l3sX-a8OUjKBofHsEf91k",
          BurntOrangeTheme: "_37pNJIGOi3wXudkvWXoSml",
          FlatGreyTheme: "_2AFCapxkkQ1VOQHq5zlYQC",
          PurpleTheme: "KM8jQtPy2nL-Nk9L8yGP",
          GreenSlimeTheme: "FdC8cnFr-QlxSBx3MwbCE",
          GhostTheme: "_1JZpez3LJOrJQwH9KGB0RI",
          ColorNightmareTheme: "_2LNsd64hsGzgmRbQ8WSHSh",
          MurugiahTheme: "_22BXC8Rv2JkvXu3mmagICl",
          Winter2021Theme: "X0_g81BFvECaAe-ByasOs",
          Lunar2022Theme: "_1NSMHkt3eWfSDC6LEzKeJn",
          SteamDeckTheme: "_2aDQKbd2fBPJ0D_2CiGhRT",
        };
      },
    },
  ]);
})();
