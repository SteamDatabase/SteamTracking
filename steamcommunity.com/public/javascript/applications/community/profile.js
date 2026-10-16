/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(() => {
  (self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
    [58138],
    {
      10635: (w, xe, m) => {
        "use strict";
        m.r(xe), m.d(xe, { ProfileEditRoutes: () => _r, default: () => La });
        var t = m(7850);
        let H = { ProfileURL: "" };
        var $ = m(41735),
          y = m.n($),
          d = m(14947),
          F = m(99412),
          ne = m(84110),
          ee = m(85528),
          S = m(75844),
          u = m(90626),
          l = m(18210),
          b = m(88363),
          x = m(5858),
          p = m(36707),
          O = m(36118),
          K = m(70342),
          _ = m.n(K),
          T = m(75975);
        const z = (0, S.PA)((r) => {
          const { persona: e, className: i, ...s } = r;
          if (!e || !e.is_online) return null;
          const a = e.HasStateFlag(b.R$),
            o = e.HasStateFlag(b.hs),
            n = e.m_eGamingDeviceType == F.LS$,
            h = e.m_eGamingDeviceType == F.ppM,
            f = !n && !h && !o && e.HasStateFlag(b.sr);
          return (0, t.jsxs)(u.Fragment, {
            children: [
              a &&
                (0, t.jsx)("div", {
                  className: (0, p.A)(
                    i,
                    _().PersonaStatusIcon,
                    _().MobilePhoneIcon,
                    (0, x.rO)(e),
                  ),
                  title: (0, l.we)("#Platform_Hint_Mobile"),
                  ...s,
                  children: (0, t.jsx)(T.rf, {}),
                }),
              o &&
                (0, t.jsx)("div", {
                  className: (0, p.A)(
                    i,
                    _().PersonaStatusIcon,
                    _().VRIcon,
                    (0, x.rO)(e),
                  ),
                  title: (0, l.we)("#Platform_Hint_VR"),
                  ...s,
                  children: (0, t.jsx)(O.MUh, {}),
                }),
              f &&
                (0, t.jsx)("div", {
                  className: (0, p.A)(
                    i,
                    _().PersonaStatusIcon,
                    _().BigPictureIcon,
                    (0, x.rO)(e),
                  ),
                  title: (0, l.we)("#Platform_Hint_BigPicture"),
                  ...s,
                  children: (0, t.jsx)(O.bPr, {}),
                }),
              n &&
                (0, t.jsx)("div", {
                  className: (0, p.A)(
                    i,
                    _().PersonaStatusIcon,
                    _().SteamDeckIcon,
                    (0, x.rO)(e),
                  ),
                  title: (0, l.we)("#Platform_Hint_SteamDeck"),
                  ...s,
                  children: (0, t.jsx)(O.DQe, {}),
                }),
              h &&
                (0, t.jsx)("div", {
                  className: (0, p.A)(
                    i,
                    _().PersonaStatusIcon,
                    _().SteamDeckIcon,
                    (0, x.rO)(e),
                  ),
                  title: (0, l.we)("#Platform_Hint_LegionGoS"),
                  ...s,
                  children: (0, t.jsx)(O.DQe, {}),
                }),
            ],
          });
        });
        var ae = m(56420),
          W = m.n(ae),
          Ee = Object.defineProperty,
          Me = Object.getOwnPropertyDescriptor,
          E = (r, e, i, s) => {
            for (
              var a = s > 1 ? void 0 : s ? Me(e, i) : e, o = r.length - 1, n;
              o >= 0;
              o--
            )
              (n = r[o]) && (a = (s ? n(e, i, a) : n(a)) || a);
            return s && a && Ee(e, i, a), a;
          };
        let G = class extends u.Component {
          static get hoverClass() {
            return W().hoverParent;
          }
          render() {
            const {
              persona: r,
              animating: e,
              className: i,
              size: s,
              dim: a,
              ...o
            } = this.props;
            let n = "";
            return (
              s == "medium"
                ? (n = W().Medium)
                : s == "large" && (n = W().Large),
              (0, t.jsxs)("div", {
                className: (0, p.A)(
                  W().SnoozeContainer,
                  r.online_state,
                  i,
                  e && W().animating,
                  n,
                  a && W().Dim,
                ),
                ...o,
                children: [
                  (0, t.jsx)("div", {
                    "data-text": "Z",
                    className: (0, p.A)(W().SnoozeZ, W().Z1),
                    children: "Z",
                  }),
                  (0, t.jsx)("div", {
                    "data-text": "Z",
                    className: (0, p.A)(W().SnoozeZ, W().Z2),
                    children: "Z",
                  }),
                  (0, t.jsx)("div", {
                    "data-text": "Z",
                    className: (0, p.A)(W().SnoozeZ, W().Z3),
                    children: "Z",
                  }),
                ],
              })
            );
          }
        };
        G = E([S.PA], G);
        var Q = m(85198),
          c = m.n(Q),
          Z = m(46943),
          te = m(84676),
          le = m(36174),
          v = m(3166),
          P = Object.defineProperty,
          A = Object.getOwnPropertyDescriptor,
          D = (r, e, i) =>
            e in r
              ? P(r, e, {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: i,
                })
              : (r[e] = i),
          B = (r, e, i, s) => {
            for (
              var a = s > 1 ? void 0 : s ? A(e, i) : e, o = r.length - 1, n;
              o >= 0;
              o--
            )
              (n = r[o]) && (a = (s ? n(e, i, a) : n(a)) || a);
            return s && a && P(e, i, a), a;
          },
          q = (r, e, i) => D(r, typeof e != "symbol" ? e + "" : e, i);
        const V = le.Kp.PerMinute;
        class ve {
          constructor(e) {
            q(this, "m_accountid"),
              q(this, "m_bLoadingData", !1),
              q(this, "m_rtLastLoad", 0),
              q(this, "m_communityData"),
              (0, d.Gn)(this),
              (this.m_accountid = e);
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
              i = Date.now() > this.m_rtLastLoad + V * 1e3;
            (!e || (i && !this.m_bLoadingData)) &&
              ((this.m_bLoadingData = !0),
              y()
                .get(
                  v.TS.CHAT_BASE_URL +
                    "miniprofile/" +
                    this.m_accountid +
                    "/json/?origin=" +
                    (0, v.xv)(),
                )
                .then((s) => {
                  let a = s.data;
                  typeof a.level == "number" &&
                    typeof a.level_class == "string" &&
                    (this.m_communityData = a),
                    (this.m_bLoadingData = !1),
                    (this.m_rtLastLoad = Date.now());
                })
                .catch((s) => {
                  this.m_bLoadingData = !1;
                }));
          }
        }
        B([d.sH], ve.prototype, "m_communityData", 2);
        var Qe = Object.defineProperty,
          ze = Object.getOwnPropertyDescriptor,
          Ge = (r, e, i, s) => {
            for (
              var a = s > 1 ? void 0 : s ? ze(e, i) : e, o = r.length - 1, n;
              o >= 0;
              o--
            )
              (n = r[o]) && (a = (s ? n(e, i, a) : n(a)) || a);
            return s && a && Qe(e, i, a), a;
          };
        let Nt = class extends u.Component {
          render() {
            const { community_data: r } = this.props;
            let e = r && r.favorite_badge;
            return e
              ? (0, t.jsxs)("div", {
                  className: (0, p.A)(
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
                      className: (0, p.A)(
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
        Nt = Ge([S.PA], Nt);
        let bt = class extends u.Component {
          render() {
            const { community_data: r, className: e } = this.props;
            return r
              ? (0, t.jsxs)("div", {
                  className: (0, p.A)(c().miniProfileFeaturedContainer, e),
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
        bt = Ge([S.PA], bt);
        let Lt = class extends u.Component {
          render() {
            var r;
            let e = this.props.persona,
              i = this.props.community_data;
            return (0, t.jsxs)("div", {
              className: (0, p.A)(
                c().miniProfileGameContainer,
                this.props.className,
              ),
              children: [
                ((r = i == null ? void 0 : i.in_game) == null
                  ? void 0
                  : r.logo) &&
                  (0, t.jsx)("img", {
                    className: c().gameLogo,
                    src: i.in_game.logo,
                  }),
                (0, t.jsxs)("div", {
                  className: (0, p.A)(
                    c().gameContent,
                    c().persona,
                    c().ingame,
                    c().ellipsis,
                  ),
                  children: [
                    (0, t.jsx)("div", {
                      className: c().gameState,
                      children: (0, l.we)(
                        e.is_in_nonsteam_game
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
        Lt = Ge([S.PA], Lt);
        function Xr(r) {
          var e;
          const { appID: i } = r,
            [s] = (0, te.t7)(i, { include_assets_without_overrides: !0 }),
            a =
              (e = s == null ? void 0 : s.GetAssetsWithoutOverrides()) == null
                ? void 0
                : e.GetHeaderURL();
          return a
            ? (0, t.jsx)("img", { className: c().gameLogo, src: a })
            : null;
        }
        let Ot = class extends u.Component {
          render() {
            let r,
              e,
              i = this.props.broadcast_description;
            return (
              i && ((r = (0, l.we)("#PersonaStateWatchingBroadcast")), (e = i)),
              (0, t.jsxs)("div", {
                className: (0, p.A)(
                  c().miniProfileGameContainer,
                  this.props.className,
                ),
                children: [
                  this.props.persona.m_broadcastAppId &&
                    (0, t.jsx)(Xr, {
                      appID: this.props.persona.m_broadcastAppId,
                    }),
                  (0, t.jsxs)("div", {
                    className: (0, p.A)(
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
        Ot = Ge([S.PA], Ot);
        let Dt = class extends u.Component {
          render() {
            const {
              className: r,
              persona: e,
              data_loader: i,
              community_data_override: s,
              nickname: a,
              is_friend: o,
              is_blocked: n,
              friend_relationship: h,
              broadcast_description: f,
              broadcast_thumbnail: C,
              mutual_friends: R,
              in_game_section_additional: k,
              bottom_section_additional: U,
              ...N
            } = this.props;
            let J = i.community_data;
            s && (J = { ...J, ...s });
            const Be =
              Object.keys((J && J.profile_background) || {}).length > 0;
            let Te,
              We = c().miniProfileContent;
            e.is_ingame
              ? (Te = (0, t.jsx)(Lt, {
                  ...this.props,
                  community_data: J,
                  className: Be ? c().miniProfileBackdropBlur : void 0,
                }))
              : e.is_watchingbroadcast
                ? (Te = (0, t.jsx)(Ot, {
                    ...this.props,
                    className: Be ? c().miniProfileBackdropBlur : void 0,
                  }))
                : (We += " " + c().notInOrWatchingGame);
            let gr = !0,
              Et = !1,
              Gt = !1;
            o || ((We += " " + c().notFriends), (gr = !1)),
              n && ((We += " " + c().communicationBlocked), (Gt = !0));
            let Oa = a !== void 0,
              Rt = e.is_awayOrSnooze,
              Pr;
            return (
              Oa
                ? (Pr = (0, t.jsxs)("div", {
                    children: [
                      (0, t.jsxs)("div", {
                        className: c().personaAndIcons,
                        children: [
                          (0, t.jsxs)("div", {
                            className: (0, p.A)(c().personaName, c().nickName),
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
                          (0, t.jsx)(z, { persona: e }),
                        ],
                      }),
                      (0, t.jsxs)("div", {
                        className: (0, p.A)(c().personaName, c().hasNickname),
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
                : (Pr = (0, t.jsxs)("div", {
                    className: c().personaAndIcons,
                    children: [
                      (0, t.jsx)("div", {
                        className: c().personaName,
                        children: (0, t.jsx)("div", {
                          className: c().personaNameLabel,
                          children: e.m_strPlayerName,
                        }),
                      }),
                      (0, t.jsx)(z, { persona: e }),
                    ],
                  })),
              this.props.friend_relationship == F.UXi && (Et = !0),
              (0, t.jsx)(u.Fragment, {
                children: (0, t.jsx)(
                  "div",
                  {
                    className: (0, p.A)(this.props.className, c().miniProfile),
                    ...N,
                    children: (0, t.jsxs)("div", {
                      className: We,
                      children: [
                        (0, t.jsx)(Jr, { community_data: J, persona: e }),
                        (0, t.jsx)("div", {
                          className: c().miniProfileHeader,
                          children: (0, t.jsxs)("div", {
                            className: (0, p.A)(
                              c().miniProfilePlayer,
                              e.online_state,
                              Rt && c().isAway,
                              (0, x.rO)(e),
                            ),
                            children: [
                              (0, t.jsx)($r, {
                                persona: this.props.persona,
                                community_data: J,
                              }),
                              Rt &&
                                (0, t.jsx)(G, {
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
                                      Pr,
                                      Rt &&
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
                                        !Rt &&
                                        (0, t.jsx)("div", {
                                          className: c().awayStatusLabel,
                                          children: (0, l.we)(
                                            "#PersonaStateOnline",
                                          ),
                                        }),
                                      !gr &&
                                        (0, t.jsx)("div", {
                                          className: c().miniProfileNotFriends,
                                          children: Et
                                            ? (0, l.we)(
                                                "#Friend_Menu_NotAFriendRequesting",
                                              )
                                            : (0, l.we)(
                                                "#Friend_Menu_NotAFriendLabel",
                                              ),
                                        }),
                                      Gt &&
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
                        Te,
                        (0, t.jsxs)("div", {
                          className: (0, p.A)(
                            c().miniProfileBottom,
                            Be && c().miniProfileBackdropBlur,
                          ),
                          children: [
                            (0, t.jsx)(Nt, { community_data: J }),
                            (0, t.jsx)(bt, { community_data: J }),
                          ],
                        }),
                        U,
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
        Dt = Ge([S.PA], Dt);
        const Jr = ({ community_data: r, persona: e }) => {
            if (r && r.profile_background) {
              const { image: i, ...s } = r.profile_background;
              if (Object.keys(s).length)
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
                      children: Object.keys(s).map((a) =>
                        (0, t.jsx)("source", { src: s[a], type: a }, a),
                      ),
                    }),
                  },
                  s["video/webm"] || s["video/mp4"] || "image",
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
          $r = (r) => {
            const { persona: e, community_data: i, size: s, ...a } = r,
              o =
                i &&
                i.avatar_frame &&
                (0, t.jsx)("img", {
                  src: i.avatar_frame,
                  className: c().Frame,
                }),
              n = i && i.animated_avatar,
              h = {
                size: s || "X-Large",
                statusPosition: "bottom",
                className: c().playerAvatar,
              };
            return n
              ? (0, t.jsx)(Z.Ul, { ...a, strAvatarURL: n, ...h, children: o })
              : (0, t.jsx)(Z.i8, { persona: e, ...a, ...h, children: o });
          };
        var Ft = m(76559),
          ei = m(28462),
          M = m(72604),
          ue = m(35038),
          yr = m(98112),
          ti = Object.defineProperty,
          ri = Object.getOwnPropertyDescriptor,
          ii = (r, e, i, s) => {
            for (
              var a = s > 1 ? void 0 : s ? ri(e, i) : e, o = r.length - 1, n;
              o >= 0;
              o--
            )
              (n = r[o]) && (a = (s ? n(e, i, a) : n(a)) || a);
            return s && a && ti(e, i, a), a;
          };
        class Ar {
          constructor(e) {
            (this.m_rgPreviousAvatars = []),
              (0, d.Gn)(this),
              (this.m_SteamInterface = e);
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
            const e = ue.w.Init(yr.Vc);
            e.SetBodyFields({
              steamid: v.iA.steamid,
              filter_user_uploaded_only: !0,
            });
            let i = await yr.BE.GetAvatarHistory(
              this.m_SteamInterface.GetServiceTransport(),
              e,
            );
            return (
              i.GetEResult() == M.R
                ? ((this.m_rgPreviousAvatars = []),
                  i
                    .Body()
                    .toObject()
                    .avatars.map((s) => {
                      this.m_rgPreviousAvatars.push({
                        avatar_hash: s.avatar_sha1,
                        timestamp: s.timestamp,
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
            for (let s = 0; s < this.m_rgPreviousAvatars.length; ++s)
              if (this.m_rgPreviousAvatars[s].avatar_hash == i)
                return this.SelectAvatar(e, i);
            return M.p;
          }
          async SelectAvatar(e, i) {
            let s = new FormData();
            s.append("sessionid", (0, v.KC)()),
              s.append("json", "1"),
              s.append("sha", i);
            let o =
              (
                await y().post(
                  `${v.TS.COMMUNITY_BASE_URL}actions/selectPreviousAvatar`,
                  s,
                )
              ).data.success || M.zi;
            return o == M.R && e.CommitAvatarHash(), o;
          }
        }
        ii([d.sH], Ar.prototype, "m_rgPreviousAvatars", 2);
        var si = Object.defineProperty,
          ai = Object.getOwnPropertyDescriptor,
          oi = (r, e, i, s) => {
            for (
              var a = s > 1 ? void 0 : s ? ai(e, i) : e, o = r.length - 1, n;
              o >= 0;
              o--
            )
              (n = r[o]) && (a = (s ? n(e, i, a) : n(a)) || a);
            return s && a && si(e, i, a), a;
          };
        class Cr {
          constructor() {
            (this.m_AvatarData = void 0), (0, d.Gn)(this);
          }
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
              `${v.TS.COMMUNITY_BASE_URL}actions/GameAvatars/?json=1&l=${v.TS.LANGUAGE}`,
            );
            return (this.m_AvatarData = e.data || null), !!e.data;
          }
          async SetPlayerOGGAvatar(e) {
            let i = li(this),
              s,
              a = e.GetAvatarHash();
            for (; (s = i.next().value); ) {
              let o = s.avatars.find((n) => n.avatar_hash == a);
              if (o) return this.SelectGameAvatar(e, s.appid, o.ordinal);
            }
            return M.p;
          }
          async SelectGameAvatar(e, i, s) {
            let a = new FormData();
            a.append("sessionid", (0, v.KC)()),
              a.append("json", "1"),
              a.append("selectedAvatar", "" + s);
            let n =
              (
                await y().post(
                  `${v.TS.COMMUNITY_BASE_URL}ogg/${i}/selectAvatar`,
                  a,
                )
              ).data.success || M.zi;
            return n == M.R && e.CommitAvatarHash(), n;
          }
          UpdateAvatarsForGame(e, i) {
            const s = ["rgRecentGames", "rgOwnedGames", "rgOtherGames"];
            let a = new Set();
            for (const o of s) {
              const n = this.m_AvatarData[o];
              if (!(!n || !Array.isArray(n)))
                for (const h of n) h.appid === e && ((h.avatars = i), a.add(o));
            }
            a.forEach((o) => {
              const n = this.m_AvatarData[o];
              !n || !Array.isArray(n) || (this.m_AvatarData[o] = [...n]);
            });
          }
        }
        oi([d.sH.shallow], Cr.prototype, "m_AvatarData", 2);
        function* ni(r) {
          for (let e of [
            r.GetRecentGameAvatars(),
            r.GetOwnedGameAvatars(),
            r.GetOtherGameAvatars(),
          ])
            for (let i of e) for (let s of i.avatars) yield s;
        }
        function* li(r) {
          for (let e of [
            r.GetRecentGameAvatars(),
            r.GetOwnedGameAvatars(),
            r.GetOtherGameAvatars(),
          ])
            for (let i of e) yield i;
        }
        var mi = Object.defineProperty,
          di = Object.getOwnPropertyDescriptor,
          dt = (r, e, i, s) => {
            for (
              var a = s > 1 ? void 0 : s ? di(e, i) : e, o = r.length - 1, n;
              o >= 0;
              o--
            )
              (n = r[o]) && (a = (s ? n(e, i, a) : n(a)) || a);
            return s && a && mi(e, i, a), a;
          };
        const Da = null,
          Tt = 0,
          Mt = 1,
          Ut = 2,
          Ue = 0,
          Ht = 1,
          qt = 2,
          kt = 3;
        function Sr(r) {
          switch (r) {
            case F.uvF:
              return (0, l.we)("#Privacy_Private");
            case F.Snd:
              return (0, l.we)("#Privacy_FriendsOnly");
            case F.Quy:
              return (0, l.we)("#Privacy_Public");
            default:
              return "";
          }
        }
        function ci(r) {
          switch (r) {
            case Tt:
              return (0, l.we)("#Privacy_FriendsOnly");
            case Mt:
              return (0, l.we)("#Privacy_Public");
            case Ut:
              return (0, l.we)("#Privacy_Private");
            default:
              return "";
          }
        }
        function Ve(r, e) {
          return r < e ? r : e;
        }
        function ui(r, e) {
          return e == F.uvF ? Ut : e == F.Snd && r == Mt ? Tt : r;
        }
        class Ze {
          constructor(e, i) {
            (this.m_PrivacySettings = void 0),
              (this.m_eCommentPermission = void 0),
              (this.m_eSaveStateByKey = new Map()),
              (this.m_eCommentSaveState = Ue),
              (0, d.Gn)(this),
              (this.m_PrivacySettings = e),
              (this.m_eCommentPermission = i);
          }
          GetPrivacySetting(e) {
            return e == "PrivacyOwnedGames"
              ? Ve(
                  this.m_PrivacySettings.PrivacyProfile,
                  this.m_PrivacySettings.PrivacyOwnedGames,
                )
              : e == "PrivacyPlaytime"
                ? Ve(
                    this.GetPrivacySetting("PrivacyOwnedGames"),
                    this.m_PrivacySettings.PrivacyPlaytime,
                  )
                : e == "PrivacyInventory"
                  ? Ve(
                      this.m_PrivacySettings.PrivacyProfile,
                      this.m_PrivacySettings.PrivacyInventory,
                    )
                  : e == "PrivacyInventoryGifts"
                    ? Ve(
                        this.GetPrivacySetting("PrivacyInventory"),
                        this.m_PrivacySettings.PrivacyInventoryGifts,
                      )
                    : e == "PrivacyFriendsList"
                      ? Ve(
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
          ChangePrivacySetting(e, i, s) {
            if (this.m_PrivacySettings[e] == i) return;
            this.m_PrivacySettings[e] = i;
            let a = this.SavePrivacy(),
              o = s || e;
            a
              ? (this.m_eSaveStateByKey.set(o, Ht),
                a.then((n) => {
                  n
                    ? this.m_eSaveStateByKey.set(o, qt)
                    : this.m_eSaveStateByKey.set(o, kt);
                }))
              : this.m_eSaveStateByKey.set(o, Ue);
          }
          ChangeCommentPermission(e) {
            if (this.m_eCommentPermission == e) return;
            this.m_eCommentPermission = e;
            let i = this.SavePrivacy();
            i
              ? ((this.m_eCommentSaveState = Ht),
                i.then((s) => {
                  s
                    ? (this.m_eCommentSaveState = qt)
                    : (this.m_eCommentSaveState = kt);
                }))
              : (this.m_eCommentSaveState = Ue);
          }
          SavePrivacy() {
            let e = new FormData();
            return (
              e.append("sessionid", (0, v.KC)()),
              e.append("Privacy", JSON.stringify(this.m_PrivacySettings)),
              e.append(
                "eCommentPermission",
                JSON.stringify(this.m_eCommentPermission),
              ),
              y()
                .post(H.ProfileURL + "ajaxsetprivacy/", e)
                .then((i) => {
                  let s = i.data;
                  if (s.success != M.R)
                    return (
                      window.ShowAlertDialog(
                        (0, l.we)("#Error_Error"),
                        (0, l.we)("#Error_CommentEditFailed"),
                      ),
                      !1
                    );
                  let a = s.Privacy;
                  return (
                    a &&
                      a.PrivacySettings &&
                      a.eCommentPermission &&
                      (0, d.h5)(() => {
                        (this.m_PrivacySettings = a.PrivacySettings),
                          (this.m_eCommentPermission = a.eCommentPermission);
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
        dt([d.sH], Ze.prototype, "m_PrivacySettings", 2),
          dt([d.sH], Ze.prototype, "m_eCommentPermission", 2),
          dt([d.sH], Ze.prototype, "m_eSaveStateByKey", 2),
          dt([d.sH], Ze.prototype, "m_eCommentSaveState", 2);
        var Y = m(75916),
          hi = Object.defineProperty,
          pi = Object.getOwnPropertyDescriptor,
          Kt = (r, e, i, s) => {
            for (
              var a = s > 1 ? void 0 : s ? pi(e, i) : e, o = r.length - 1, n;
              o >= 0;
              o--
            )
              (n = r[o]) && (a = (s ? n(e, i, a) : n(a)) || a);
            return s && a && hi(e, i, a), a;
          };
        class ct {
          constructor(e, i, s) {
            (this.m_rgBadges = []),
              (this.m_FavoriteBadge = void 0),
              (0, d.Gn)(this),
              (this.m_CMInterface = e),
              (this.m_AppInfoStore = i);
            const a = s.rgBadges,
              o = s.FavoriteBadge;
            if (!Array.isArray(a))
              for (let n in a) {
                const h = a[n];
                let f;
                "communityitemid" in h
                  ? (f = new fi(h, this.m_AppInfoStore))
                  : (f = new vi(h)),
                  this.m_rgBadges.push(f),
                  o &&
                    f.BIsFavoriteBadge(o) &&
                    (this.m_CommittedFavoriteBadge = this.m_FavoriteBadge = f);
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
              return M.R;
            let e = this.FavoriteBadgeID,
              i = ue.w.Init(Y.Hrm);
            e.badgeid
              ? i.Body().set_badgeid(e.badgeid)
              : e.communityitemid &&
                i.Body().set_communityitemid(e.communityitemid);
            let s = await Y.xtC.SetFavoriteBadge(
              this.m_CMInterface.GetServiceTransport(),
              i,
            );
            return (
              s.GetEResult() == M.R &&
                (this.m_CommittedFavoriteBadge = this.m_FavoriteBadge),
              s.GetEResult()
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
        Kt([d.sH], ct.prototype, "m_FavoriteBadge", 2),
          Kt([d.XI], ct.prototype, "SetFavoriteBadge", 1),
          Kt([d.XI], ct.prototype, "RevertFavoriteBadge", 1);
        class xr {
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
        class vi extends xr {
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
        class fi extends xr {
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
        var ut = m(80876),
          _i = m(8323),
          gi = Object.defineProperty,
          Pi = Object.getOwnPropertyDescriptor,
          ye = (r, e, i, s) => {
            for (
              var a = s > 1 ? void 0 : s ? Pi(e, i) : e, o = r.length - 1, n;
              o >= 0;
              o--
            )
              (n = r[o]) && (a = (s ? n(e, i, a) : n(a)) || a);
            return s && a && gi(e, i, a), a;
          };
        function yi(r) {
          return Le(r.movie_webm);
        }
        function Ai(r) {
          return Le(r.movie_webm_small) || Le(r.movie_webm);
        }
        function Ci(r) {
          return Le(r.movie_mp4);
        }
        function Si(r) {
          return Le(r.movie_mp4_small) || Le(r.movie_mp4);
        }
        function ht(r) {
          return Le(r.image_small);
        }
        function De(r) {
          return Le(r.image_large);
        }
        function Wt(r) {
          return xi(r, 252, 160);
        }
        function xi(r, e, i) {
          return r
            ? r.image_large
              ? `${v.TS.COMMUNITY_CDN_URL}economy/profilebackground/${r.image_large}?size=${e}x${i}`
              : null
            : `${v.TS.COMMUNITY_CDN_URL}public/images/profile/2020/bg_dots.png`;
        }
        function Qt(r, e = !1) {
          let i = {},
            s = e ? Ai(r) : yi(r);
          s && (i["video/webm"] = s);
          let a = e ? Si(r) : Ci(r);
          return a && (i["video/mp4"] = a), i;
        }
        function Le(r) {
          return r ? `${v.TS.MEDIA_CDN_COMMUNITY_URL}images/${r}` : null;
        }
        class Ye {
          constructor(e, i, s) {
            (this.m_Backgrounds = new fe(this)),
              (this.m_MiniProfileBackgrounds = new fe(this)),
              (this.m_Avatars = new fe(this)),
              (this.m_AvatarFrames = new fe(this)),
              (this.m_ProfileModifiers = new fe(this)),
              (this.m_OnAvatarEquipmentChangedCallbacks = new _i.lu()),
              (this.m_mapGoldenProfileConfigByAppID = new Map()),
              (0, d.Gn)(this),
              (this.m_SteamInterface = e),
              (this.m_AppInfoStore = i);
            for (let a of s)
              this.m_mapGoldenProfileConfigByAppID.set(a.appid, a);
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
                let i = ue.w.Init(Y.F55);
                i.Body().set_communityitemid(
                  this.m_Backgrounds.m_EquippedItem &&
                    this.m_Backgrounds.m_EquippedItem.communityitemid,
                );
                let s = await Y.xtC.SetProfileBackground(
                  this.m_SteamInterface.GetServiceTransport(),
                  i,
                );
                if (s.GetEResult() != M.R) return s.GetEResult();
              }
              if (
                this.m_Backgrounds.m_EquippedItem &&
                this.m_Backgrounds.m_EquippedItem.communityitemid
              ) {
                let i = ue.w.Init(Y.MK$);
                i
                  .Body()
                  .set_communityitemid(
                    this.m_Backgrounds.m_EquippedItem.communityitemid,
                  ),
                  i.Body().set_flags(this.m_Backgrounds.m_EquipFlags);
                let s = await Y.xtC.SetEquippedProfileItemFlags(
                  this.m_SteamInterface.GetServiceTransport(),
                  i,
                );
                s.GetEResult() != M.R &&
                  console.error(
                    `Error when calling PlayerService.SetEquippedProfileItemFlags: EResult=${s.GetEResult()}`,
                  );
              }
            }
            return this.m_Backgrounds.SetComitted(), M.R;
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
              let e = ue.w.Init(Y.A6_);
              e.Body().set_communityitemid(
                this.m_MiniProfileBackgrounds.m_EquippedItem &&
                  this.m_MiniProfileBackgrounds.m_EquippedItem.communityitemid,
              );
              let i = await Y.xtC.SetMiniProfileBackground(
                this.m_SteamInterface.GetServiceTransport(),
                e,
              );
              if (i.GetEResult() != M.R) return i.GetEResult();
            }
            return (
              this.m_MiniProfileBackgrounds.SetComitted(),
              this.m_OnAvatarEquipmentChangedCallbacks.Dispatch(),
              M.R
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
              let o = ue.w.Init(Y.UMm);
              o
                .Body()
                .set_communityitemid(
                  this.m_Avatars.m_EquippedItem &&
                    this.m_Avatars.m_EquippedItem.communityitemid,
                ),
                (e = Y.xtC.SetAnimatedAvatar(
                  this.m_SteamInterface.GetServiceTransport(),
                  o,
                ));
            }
            if (this.m_AvatarFrames.BIsUncomitted()) {
              let o = ue.w.Init(Y.C0y);
              o
                .Body()
                .set_communityitemid(
                  this.m_AvatarFrames.m_EquippedItem &&
                    this.m_AvatarFrames.m_EquippedItem.communityitemid,
                ),
                (i = Y.xtC.SetAvatarFrame(
                  this.m_SteamInterface.GetServiceTransport(),
                  o,
                ));
            }
            const [s, a] = await Promise.all([e, i]);
            return s && s.GetEResult() != M.R
              ? s.GetEResult()
              : a && a.GetEResult() != M.R
                ? a.GetEResult()
                : (this.m_Avatars.SetComitted(),
                  this.m_AvatarFrames.SetComitted(),
                  this.m_OnAvatarEquipmentChangedCallbacks.Dispatch(),
                  M.R);
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
            let e = ue.w.Init(Y.aKf);
            e.Body().set_steamid(v.iA.steamid),
              e.Body().set_language(v.TS.LANGUAGE),
              (this.m_promiseEquipped = Y.xtC.GetProfileItemsEquipped(
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
                let i = ue.w.Init(ut.fp);
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
                let s = await ut.uy.ActivateProfileModifierItem(
                  this.m_SteamInterface.GetServiceTransport(),
                  i,
                );
                if (s.GetEResult() != M.R) return s.GetEResult();
                e = !0;
              }
              if (this.m_ProfileModifiers.m_EquippedItem) {
                let i = ue.w.Init(ut.fp);
                i
                  .Body()
                  .set_communityitemid(
                    this.m_ProfileModifiers.m_EquippedItem.communityitemid,
                  ),
                  i
                    .Body()
                    .set_appid(this.m_ProfileModifiers.m_EquippedItem.appid),
                  i.Body().set_activate(!0);
                let s = await ut.uy.ActivateProfileModifierItem(
                  this.m_SteamInterface.GetServiceTransport(),
                  i,
                );
                if (s.GetEResult() != M.R) return s.GetEResult();
                e = !0;
              }
              this.m_ProfileModifiers.SetComitted(),
                e &&
                  (0, d.h5)(() => {
                    this.ReloadEquippedItems();
                  });
            }
            return M.R;
          }
          BIsLegacyGoldenProfile(e) {
            return this.m_mapGoldenProfileConfigByAppID.has(e);
          }
          GetGoldenProfileConfigValue(e) {
            let i = this.GetEquippedProfileModifier();
            if (!i) return null;
            let s = this.m_mapGoldenProfileConfigByAppID.get(i.appid);
            return s ? s[e] : null;
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
            let e = ue.w.Init(Y.YkN);
            e.Body().set_language(v.TS.LANGUAGE),
              (this.m_promiseOwned = Y.xtC.GetProfileItemsOwned(
                this.m_SteamInterface.GetServiceTransport(),
                e,
              ));
            let i = ue.w.Init(Y.aKf);
            i.Body().set_steamid(v.iA.steamid),
              i.Body().set_language(v.TS.LANGUAGE),
              (this.m_promiseEquipped = Y.xtC.GetProfileItemsEquipped(
                this.m_SteamInterface.GetServiceTransport(),
                i,
              ));
          }
        }
        ye([d.XI], Ye.prototype, "RevertBackgroundChanges", 1),
          ye([d.XI], Ye.prototype, "RevertMiniProfileBackgroundChanges", 1),
          ye([d.XI], Ye.prototype, "RevertAvatarChanges", 1),
          ye([d.XI], Ye.prototype, "ReloadEquippedItems", 1);
        class fe {
          constructor(e) {
            (this.m_cItemsOwned = void 0),
              (this.m_bEquippedLoaded = !1),
              (this.m_bUnsavedChanges = !1),
              (this.m_CommittedEquippedItem = void 0),
              (this.m_EquippedItem = void 0),
              (this.m_EquipFlags = void 0),
              (0, d.Gn)(this),
              (this.m_parent = e);
          }
          GetOwnedItemCount() {
            return this.m_cItemsOwned;
          }
          async SetItems(e) {
            let i = e.map((s) => s.toObject());
            (this.m_rgOwnedItems = (await this.FillAppNames(i)).reverse()),
              (this.m_cItemsOwned = this.m_rgOwnedItems.length);
          }
          async LoadEquipped(e) {
            if (e !== void 0 && e.communityitemid()) {
              let i = e.toObject();
              if (i) {
                let [s] = await this.FillAppNames([i]);
                (0, d.h5)(() => {
                  (this.m_CommittedEquippedItem = this.m_EquippedItem = s),
                    (this.m_EquipFlags = s && s.equipped_flags);
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
        ye([d.sH], fe.prototype, "m_cItemsOwned", 2),
          ye([d.sH], fe.prototype, "m_bUnsavedChanges", 2),
          ye([d.sH], fe.prototype, "m_CommittedEquippedItem", 2),
          ye([d.sH], fe.prototype, "m_EquippedItem", 2),
          ye([d.sH], fe.prototype, "m_EquipFlags", 2),
          ye([d.XI], fe.prototype, "SetEquipped", 1),
          ye([d.XI], fe.prototype, "SetEquippedFlags", 1),
          ye([d.XI], fe.prototype, "Revert", 1);
        var wi = Object.defineProperty,
          ji = Object.getOwnPropertyDescriptor,
          _e = (r, e, i, s) => {
            for (
              var a = s > 1 ? void 0 : s ? ji(e, i) : e, o = r.length - 1, n;
              o >= 0;
              o--
            )
              (n = r[o]) && (a = (s ? n(e, i, a) : n(a)) || a);
            return s && a && wi(e, i, a), a;
          };
        class pe {
          constructor(e, i, s, a, o, n) {
            (this.m_strDisplayCountry = void 0),
              (this.m_strDisplayState = void 0),
              (this.m_strDisplayCity = void 0),
              (this.m_strCountryCode = void 0),
              (this.m_strStateCode = void 0),
              (this.m_strCityCode = void 0),
              (this.m_bStateSelectionAvailable = !1),
              (this.m_bCitySelectionAvailable = !1),
              (0, d.Gn)(this),
              (this.m_strDisplayCountry = e),
              (this.m_strDisplayState = s),
              (this.m_strDisplayCity = o),
              (this.m_strCountryCode = i),
              (this.m_strStateCode = a),
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
                    .get(v.TS.COMMUNITY_BASE_URL + "/actions/QueryLocations/")
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
                        v.TS.COMMUNITY_BASE_URL +
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
                        v.TS.COMMUNITY_BASE_URL +
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
        _e([d.sH], pe.prototype, "m_strDisplayCountry", 2),
          _e([d.sH], pe.prototype, "m_strDisplayState", 2),
          _e([d.sH], pe.prototype, "m_strDisplayCity", 2),
          _e([d.sH], pe.prototype, "m_strCountryCode", 2),
          _e([d.sH], pe.prototype, "m_strStateCode", 2),
          _e([d.sH], pe.prototype, "m_strCityCode", 2),
          _e([d.sH], pe.prototype, "m_bStateSelectionAvailable", 2),
          _e([d.sH], pe.prototype, "m_bCitySelectionAvailable", 2),
          _e([d.XI], pe.prototype, "SetCountry", 1),
          _e([d.XI], pe.prototype, "SetState", 1),
          _e([d.XI], pe.prototype, "SetCity", 1),
          _e([d.XI], pe.prototype, "FindAndSetActiveCountry", 1),
          _e([d.XI], pe.prototype, "FindAndSetActiveState", 1);
        var Ii = Object.defineProperty,
          Bi = Object.getOwnPropertyDescriptor,
          wr = (r, e, i, s) => {
            for (
              var a = s > 1 ? void 0 : s ? Bi(e, i) : e, o = r.length - 1, n;
              o >= 0;
              o--
            )
              (n = r[o]) && (a = (s ? n(e, i, a) : n(a)) || a);
            return s && a && Ii(e, i, a), a;
          };
        class zt {
          constructor(e, i, s) {
            (this.m_ActiveTheme = void 0),
              (0, d.Gn)(this),
              (this.m_CMInterface = e),
              (this.m_rgAvailableThemes = s.map((a) => ({
                ...a,
                theme_id: a.theme_id || "Default",
                title: (0, l.we)(a.title),
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
            for (let s of this.m_rgAvailableThemes)
              if (e === s.theme_id) {
                (this.m_ActiveTheme = s), i && (this.m_ComittedActiveTheme = s);
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
            let e = ue.w.Init(Y.yow);
            e.Body().set_theme_id(
              this.ActiveTheme.theme_id == "Default"
                ? ""
                : this.ActiveTheme.theme_id,
            );
            const i = await Y.xtC.SetProfileTheme(
              this.m_CMInterface.GetServiceTransport(),
              e,
            );
            return (
              i.GetEResult() == M.R &&
                (this.m_ComittedActiveTheme = this.ActiveTheme),
              i.GetEResult()
            );
          }
        }
        wr([d.sH], zt.prototype, "m_ActiveTheme", 2),
          wr([d.XI], zt.prototype, "RevertActiveTheme", 1);
        var Vt = m(35413);
        async function Zt(r, e) {
          let i;
          if (e instanceof FormData) i = e;
          else {
            i = new FormData();
            for (const a in e) i.append(a, e[a]);
          }
          i.append("type", r),
            i.append("sessionID", (0, v.KC)()),
            i.append("json", "1");
          const s = `${H.ProfileURL}edit/`;
          try {
            let a = await y().post(s, i);
            return {
              eResult: a.data.success,
              strHTMLError: a.data.errmsg,
              strRedirectURL: a.data.redirect,
            };
          } catch {
            return {
              eResult: M.iV,
              strHTMLError: (0, l.we)("#ConnectionTrouble_FailedToConnect"),
            };
          }
        }
        var Ei = Object.defineProperty,
          Gi = Object.getOwnPropertyDescriptor,
          pt = (r, e, i, s) => {
            for (
              var a = s > 1 ? void 0 : s ? Gi(e, i) : e, o = r.length - 1, n;
              o >= 0;
              o--
            )
              (n = r[o]) && (a = (s ? n(e, i, a) : n(a)) || a);
            return s && a && Ei(e, i, a), a;
          };
        class Xe {
          constructor(e) {
            (this.m_PrimaryGroup = void 0),
              (this.m_bLoaded = !1),
              (0, d.Gn)(this),
              e &&
                (this.m_CommittedPrimaryGroup = this.m_PrimaryGroup =
                  new jr(new Ft.b(e.steamid), e.name, e.avatarHash));
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
              `${H.ProfileURL}ajaxgroupinvite?select_primary=1&json=1`,
            );
            return (
              (0, d.h5)(() => {
                e.data &&
                  (this.m_rgUserGroups = e.data.map(
                    (i) => new jr(new Ft.b(i.steamid), i.name, i.avatarHash),
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
            let e = await Zt("favoriteclan", {
              primary_group_steamid: this.m_PrimaryGroup
                .GetSteamID()
                .ConvertTo64BitString(),
            });
            return (
              e.eResult == M.R &&
                (this.m_CommittedPrimaryGroup = this.m_PrimaryGroup),
              e
            );
          }
          RevertPrimaryGroupChanges() {
            this.m_PrimaryGroup = this.m_CommittedPrimaryGroup;
          }
        }
        pt([d.sH], Xe.prototype, "m_PrimaryGroup", 2),
          pt([d.sH], Xe.prototype, "m_bLoaded", 2),
          pt([d.XI], Xe.prototype, "SetPrimaryGroup", 1),
          pt([d.XI], Xe.prototype, "RevertPrimaryGroupChanges", 1);
        class jr {
          constructor(e, i, s) {
            (this.m_steamID = e),
              (this.m_strName = i),
              (this.m_strAvatarHash = s);
          }
          GetSteamID() {
            return this.m_steamID;
          }
          GetName() {
            return this.m_strName;
          }
          GetAvatarURL(e) {
            return (0, Vt.t)(
              this.m_strAvatarHash ||
                "0000000000000000000000000000000000000000",
              e,
            );
          }
        }
        var Ri = Object.defineProperty,
          Ni = Object.getOwnPropertyDescriptor,
          Ae = (r, e, i, s) => {
            for (
              var a = s > 1 ? void 0 : s ? Ni(e, i) : e, o = r.length - 1, n;
              o >= 0;
              o--
            )
              (n = r[o]) && (a = (s ? n(e, i, a) : n(a)) || a);
            return s && a && Ri(e, i, a), a;
          };
        class bi {
          constructor(e, i, s) {
            (this.m_OGGAvatars = new Cr()),
              (this.m_EmoticonStore = new ei.T()),
              (this.m_Profile = new X(e)),
              (this.m_WebAPI = s),
              (this.m_AppInfoStore = new ee.Mi()),
              this.m_AppInfoStore.Init(this.m_WebAPI),
              this.m_AppInfoStore.SetCacheStorage(new ne.A()),
              (this.m_ProfileBadges = new ct(
                this.m_WebAPI,
                this.m_AppInfoStore,
                i,
              )),
              (this.m_ProfileItems = new Ye(
                this.m_WebAPI,
                this.m_AppInfoStore,
                e.rgGoldenProfileData,
              )),
              (this.m_ProfileTheme = new zt(
                this.m_WebAPI,
                e.ActiveTheme,
                e.rgAvailableThemes,
              )),
              (this.m_ProfilePrivacy = new Ze(
                e.Privacy.PrivacySettings,
                e.Privacy.eCommentPermission,
              )),
              (this.m_AvatarHistory = new Ar(this.m_WebAPI)),
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
        class X {
          constructor(e) {
            (this.m_strPersonaName = void 0),
              (this.m_strCommittedPersonaName = void 0),
              (this.m_strCustomURL = void 0),
              (this.m_strRealName = void 0),
              (this.m_strSummary = void 0),
              (this.m_strAvatarHash = void 0),
              (this.m_strCommittedAvatarHash = void 0),
              (this.m_Preferences = void 0),
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
                locCountryCode: s,
                locState: a,
                locStateCode: o,
                locCity: n,
                locCityCode: h,
              },
            } = e;
            (this.m_Location = new pe(i, s, a, o, n, h)),
              (this.m_GroupList = new Xe(e.PrimaryGroup));
            const f = new Ft.b(v.iA.steamid);
            (this.m_MiniProfileData = new ve(f.GetAccountID())),
              (this.m_persona = new x.Z(f)),
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
            if (e != null && e.postMessage) {
              const i = {
                event_name: "personastatechanged",
                steamid: v.iA.steamid,
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
              ? `${v.TS.COMMUNITY_BASE_URL}id/${this.m_strCustomURL}/`
              : `${v.TS.COMMUNITY_BASE_URL}profiles/${v.iA.steamid}/`;
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
              (this.m_persona.m_ePersonaState = F.UXk);
          }
          async UploadAvatar(e) {
            let i = new FormData();
            i.append("avatar", e),
              i.append("type", "player_avatar_image"),
              i.append("sId", v.iA.steamid),
              i.append("sessionid", (0, v.KC)()),
              i.append("doSub", "1"),
              i.append("json", "1");
            let s = !1,
              a = "";
            try {
              let o = await y().post(
                `${v.TS.COMMUNITY_BASE_URL}actions/FileUploader/`,
                i,
              );
              o.data && o.data.success
                ? ((s = !0), this.SetAvatarHash(o.data.hash, !0))
                : (a =
                    (o.data && o.data.message) ||
                    (0, l.we)("#Chat_Settings_Error_ServerError"));
            } catch (o) {
              a =
                (o.response && o.response.data.message) ||
                (0, l.we)("#Chat_Settings_Error_ServerError");
            }
            return { bSuccess: s, strError: a };
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
        }
        (X.k_strPersonaNameCooldownSupportURL =
          "https://help.steampowered.com/faqs/view/6862-8119-C23E-EA7B"),
          (X.k_strProfileSummaryCooldownSupportURL =
            "https://help.steampowered.com/faqs/view/6862-8119-C23E-EA7B"),
          (X.k_strAvatarCooldownSupportURL =
            "https://help.steampowered.com/faqs/view/6862-8119-C23E-EA7B"),
          (X.k_strNameFilteredSupportURL =
            "https://help.steampowered.com/wizard/HelpWithSteamIssue/?issueid=415"),
          Ae([d.sH], X.prototype, "m_strPersonaName", 2),
          Ae([d.sH], X.prototype, "m_strCommittedPersonaName", 2),
          Ae([d.sH], X.prototype, "m_strCustomURL", 2),
          Ae([d.sH], X.prototype, "m_strRealName", 2),
          Ae([d.sH], X.prototype, "m_strSummary", 2),
          Ae([d.sH], X.prototype, "m_strAvatarHash", 2),
          Ae([d.sH], X.prototype, "m_strCommittedAvatarHash", 2),
          Ae([d.sH], X.prototype, "m_Preferences", 2),
          Ae([d.XI], X.prototype, "RevertBasicInfoChanges", 1),
          Ae([d.XI], X.prototype, "SetAvatarHash", 1),
          Ae([d.XI], X.prototype, "RevertToComittedAvatarHash", 1);
        var re = m(92757),
          ge = m(32093),
          Yt = m(68312),
          Fa = m(64641),
          Li = m(72739),
          ie = m(35471),
          I = m(19316),
          j = m(54963),
          Oi = m(72609),
          Je = m(88942),
          g = m(45301),
          L = m(19298),
          oe = m(31270),
          Ir = m(2801),
          Re = m(25792),
          Di = m(92264),
          Fi = Object.defineProperty,
          Ti = Object.getOwnPropertyDescriptor,
          vt = (r, e, i, s) => {
            for (
              var a = s > 1 ? void 0 : s ? Ti(e, i) : e, o = r.length - 1, n;
              o >= 0;
              o--
            )
              (n = r[o]) && (a = (s ? n(e, i, a) : n(a)) || a);
            return s && a && Fi(e, i, a), a;
          };
        const Ta = ({ className: r, children: e }) =>
            jsx("div", {
              className: classnames(styles.ProfileRow, r),
              children: e,
            }),
          Ma = ({ className: r, children: e }) =>
            jsx("div", {
              className: classnames(styles.ProfileCol, r),
              children: e,
            }),
          ft = ({ title: r, className: e, children: i }) =>
            (0, t.jsxs)("div", {
              className: (0, p.A)(oe.ProfileBox, e),
              children: [
                (0, t.jsx)("div", {
                  className: oe.ProfileBoxTitle,
                  children: r,
                }),
                (0, t.jsx)("div", {
                  className: oe.ProfileBoxContent,
                  children: (0, t.jsx)(Re.tH, { children: i }),
                }),
              ],
            }),
          He = ({ onSave: r, onCancel: e, disabled: i }) =>
            (0, t.jsxs)(L.Z, {
              className: oe.SaveCancelButtons,
              "flow-children": "row-reverse",
              children: [
                (0, t.jsx)(I.jn, {
                  onClick: r,
                  disabled: i,
                  children: (0, l.we)("#Button_Save"),
                }),
                (0, t.jsx)(I.$n, {
                  onClick: e,
                  children: (0, l.we)("#Button_Cancel"),
                }),
              ],
            });
        function $e(r) {
          return (0, l.we)(r).replace(/%s/g, "");
        }
        function Ua(r) {
          const { active: e, onDismiss: i, strDialogTitle: s, ...a } = r;
          return jsxs(DialogModal, {
            active: e,
            onDismiss: i,
            children: [
              s && jsx(Dialog.Header, { children: s }),
              jsx(Dialog.Body, {
                children: jsx(ErrorBoundary, { children: jsx(et, { ...a }) }),
              }),
            ],
          });
        }
        class Fe extends u.Component {
          constructor() {
            super(...arguments),
              (this.state = { activeItem: void 0, bSaving: !1 });
          }
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
                className: s,
                fnRenderPreview: a,
                ...o
              } = this.props,
              { activeItem: n, bSaving: h } = this.state;
            return (0, t.jsxs)(I.nB, {
              className: (0, p.A)(oe.PickerPreviewDialog, s),
              children: [
                (0, t.jsx)(re.XG, {
                  when: !o.fnIsSameItem(n, this.props.ActiveItem),
                  message: (0, l.we)("#Profile_Edit_UnsavedChangesWarning"),
                }),
                (0, t.jsxs)(L.Z, {
                  className: oe.PickerPreviewBody,
                  "flow-children": "column",
                  children: [
                    (0, t.jsx)("div", {
                      className: oe.PickerPreview,
                      children: (0, t.jsx)(Re.tH, { children: a(n) }),
                    }),
                    e && (0, t.jsx)(I.Y9, { children: e }),
                    (0, t.jsx)("div", {
                      className: oe.PickerPreviewItems,
                      children: (0, t.jsx)(Re.tH, {
                        children: (0, t.jsx)(et, {
                          ...o,
                          onItemSelected: this.OnItemSelected,
                          activeItem: n,
                        }),
                      }),
                    }),
                    (0, t.jsx)(He, {
                      onSave: this.CommitChanges,
                      onCancel: this.RevertChanges,
                      disabled: h,
                    }),
                  ],
                }),
              ],
            });
          }
        }
        vt([j.oI], Fe.prototype, "CommitChanges", 1),
          vt([j.oI], Fe.prototype, "RevertChanges", 1),
          vt([j.oI], Fe.prototype, "OnItemSelected", 1);
        function Mi(r) {
          return r ? r.toLocaleLowerCase().replace(/\W/g, "") : "";
        }
        class et extends u.Component {
          constructor() {
            super(...arguments),
              (this.state = { strSearch: "" }),
              (this.m_rgSearchableItems = null),
              (this.m_refRootDiv = u.createRef());
          }
          async componentDidMount() {
            if (this.m_rgSearchableItems === null) {
              const {
                  getItems: e,
                  getSearchFields: i,
                  onItemSelected: s,
                } = this.props,
                a = await e();
              this.m_fnSearchFieldsDisposer = (0, d.fm)(() => {
                (this.m_rgSearchableItems = a.map((o, n) => ({
                  key: "" + n,
                  normalized_search_strings: i && i(o).map(Mi),
                  OnSelected: () => {
                    s(o);
                  },
                  item: o,
                }))),
                  this.props.RenderDefaultComponent &&
                    this.m_rgSearchableItems.unshift({
                      key: "default",
                      normalized_search_strings: [""],
                      OnSelected: () => {
                        s(null);
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
                .filter((s) => s.trim().length > 0);
              return (s) => {
                for (let a of i) {
                  let o = !1;
                  for (let n of s.normalized_search_strings)
                    if (n.includes(a)) {
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
            this.setState((s) => {
              let a = { strSearch: i };
              if (!s.strSearch && i) {
                let o = this.m_refRootDiv.current.getBoundingClientRect();
                (a.nHeight = o.height), (a.nWidth = o.width);
              } else
                s.strSearch && !i && ((a.nHeight = null), (a.nWidth = null));
              return a;
            });
          }
          render() {
            const {
                ItemComponent: e,
                RenderDefaultComponent: i,
                getSearchFields: s,
                activeItem: a,
                fnIsSameItem: o,
                classNameItemPicker: n,
              } = this.props,
              { strSearch: h, nWidth: f, nHeight: C } = this.state;
            if (this.m_rgSearchableItems === null) return null;
            let R = this.BuildFilterPredicate(),
              k = {};
            f && C && (k = { width: f + "px", height: C + "px" });
            let U =
              o ||
              function (N, J) {
                return N == J;
              };
            return (0, t.jsxs)(L.Z, {
              className: (0, p.A)(oe.ItemPicker, n),
              ref: this.m_refRootDiv,
              style: k,
              "flow-children": "column",
              children: [
                s &&
                  (0, t.jsx)("div", {
                    className: oe.ItemPickeFilter,
                    children: (0, t.jsx)(I.pd, {
                      value: h,
                      label: (0, l.we)("#ItemPicker_Filter"),
                      onChange: this.OnSearchChange,
                    }),
                  }),
                (0, t.jsx)("div", {
                  className: oe.ItemPickerCtn,
                  children: (0, t.jsx)(L.Z, {
                    className: oe.ItemPickerList,
                    "flow-children": "grid",
                    children: this.m_rgSearchableItems.map((N) =>
                      R && !R(N)
                        ? null
                        : N.item
                          ? (0, t.jsx)(
                              Re.tH,
                              {
                                children: (0, t.jsx)(e, {
                                  Item: N.item,
                                  onSelected: N.OnSelected,
                                  active: a && U(N.item, a),
                                }),
                              },
                              N.key,
                            )
                          : (0, t.jsx)(
                              Re.tH,
                              {
                                children: i({
                                  onSelected: N.OnSelected,
                                  active: !a,
                                }),
                              },
                              N.key,
                            ),
                    ),
                  }),
                }),
              ],
            });
          }
        }
        vt([j.oI], et.prototype, "OnSearchChange", 1);
        const qe = ({ strHTMLError: r }) =>
            r
              ? (0, t.jsxs)("div", {
                  className: oe.HTMLErrorBox,
                  children: [
                    (0, t.jsxs)("b", {
                      children: [(0, l.we)("#Error_Generic_Label"), "\xA0"],
                    }),
                    (0, t.jsx)("span", {
                      className: oe.HTMLError,
                      dangerouslySetInnerHTML: { __html: r },
                    }),
                  ],
                })
              : null,
          _t = ({
            strCooldownLabel: r,
            rtCooldownEnd: e,
            strCooldownDescHTML: i,
            children: s,
          }) => {
            if (!e) return (0, t.jsx)(t.Fragment, { children: s });
            const a = Math.max(0, e - Date.now() / 1e3);
            return (0, t.jsxs)("div", {
              className: oe.CooldownNotice,
              children: [
                (0, t.jsxs)("div", {
                  className: oe.HTMLErrorBox,
                  children: [
                    (0, t.jsxs)("div", {
                      className: oe.ErrorMessage,
                      children: [
                        r,
                        " ",
                        (0, l.Hq)(a, {
                          eSuffix: Di.a8.None,
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
                  className: oe.DisabledInputCtn,
                  children: s,
                }),
              ],
            });
          };
        function Br(r) {
          const { image: e, onSelected: i, className: s } = r,
            [a, o] = u.useState(!1),
            [n, h] = u.useState(!1),
            f = () => o(!0),
            C = () => o(!1),
            R = () => h(!0),
            k = () => h(!1),
            U = () => i(e);
          return (0, t.jsx)(L.Z, {
            className: s,
            onGamepadFocus: R,
            onGamepadBlur: k,
            onMouseEnter: f,
            onMouseLeave: C,
            onActivate: U,
            children: (0, t.jsx)("img", {
              src: a || n || ts ? ht(e) : De(e),
              loading: "lazy",
            }),
          });
        }
        var Ui = m(24642),
          Hi = Object.defineProperty,
          qi = Object.getOwnPropertyDescriptor,
          gt = (r, e, i, s) => {
            for (
              var a = s > 1 ? void 0 : s ? qi(e, i) : e, o = r.length - 1, n;
              o >= 0;
              o--
            )
              (n = r[o]) && (a = (s ? n(e, i, a) : n(a)) || a);
            return s && a && Hi(e, i, a), a;
          };
        let ke = class extends u.Component {
          constructor() {
            super(...arguments), (this.state = { bReady: !1 });
          }
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
                let s = 0;
                s < i.length && (e.push(i[s]), !(e.length >= r));
                ++s
              );
            }
            if (e.length < r) {
              let i = ni(this.props.OGGAvatars);
              for (
                let s = i.next();
                s.value && (e.push(s.value), !(e.length >= r));
                s = i.next()
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
              AvatarHistory: s,
              fnOnCollapse: a,
            } = this.props;
            if (r)
              return (0, t.jsxs)("div", {
                className: g.AvatarCollection,
                children: [
                  (0, t.jsx)(Pt, {
                    children: (0, l.we)("#Profile_Edit_Avatar_YourAvatars"),
                  }),
                  (0, t.jsx)(ki, {
                    rgAnimatedAvatars: this.m_rgAvatars,
                    OGGAvatars: i,
                    AvatarHistory: s,
                    onSelectAnimatedAvatar: this.SelectAnimatedAvatar,
                    onSelectOGGAvatar: this.SelectOGGAvatar,
                    onSelectPreviousAvatar: this.SelectPreviousAvatar,
                  }),
                ],
              });
            {
              let o = this.GetTopAvatars();
              return (0, t.jsxs)("div", {
                className: g.AvatarCollection,
                children: [
                  (0, t.jsx)(Pt, {
                    children: (0, l.we)("#Profile_Edit_Avatar_YourAvatars"),
                  }),
                  (0, t.jsx)("div", {
                    className: g.AvatarCollectionSingleRowWrapper,
                    children: (0, t.jsx)(L.Z, {
                      className: g.AvatarCollectionSingleRow,
                      "flow-children": "row",
                      children: o.map((n) =>
                        "communityitemid" in n
                          ? (0, t.jsxs)(
                              u.Fragment,
                              {
                                children: [
                                  (0, t.jsx)(Er, {
                                    avatar: n,
                                    onSelected: this.SelectAnimatedAvatar,
                                    large: !0,
                                  }),
                                  (0, t.jsx)("div", {
                                    className: g.AvatarRowSpacer,
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
                                    (0, t.jsx)(yt, {
                                      hash: n.avatar_hash,
                                      onSelected: this.SelectPreviousAvatar,
                                      large: !0,
                                    }),
                                    (0, t.jsx)("div", {
                                      className: g.AvatarRowSpacer,
                                    }),
                                  ],
                                },
                                n.avatar_hash,
                              )
                            : (0, t.jsxs)(
                                u.Fragment,
                                {
                                  children: [
                                    (0, t.jsx)(yt, {
                                      hash: n.avatar_hash,
                                      onSelected: this.SelectOGGAvatar,
                                      large: !0,
                                    }),
                                    (0, t.jsx)("div", {
                                      className: g.AvatarRowSpacer,
                                    }),
                                  ],
                                },
                                n.avatar_hash,
                              ),
                      ),
                    }),
                  }),
                  (0, t.jsx)("div", {
                    className: g.ExpandButtonContainer,
                    children: (0, t.jsx)(I.$n, {
                      onClick: e,
                      children: (0, l.we)("#Profile_Edit_Avatar_SeeAll"),
                    }),
                  }),
                ],
              });
            }
          }
        };
        gt([j.oI], ke.prototype, "SelectAnimatedAvatar", 1),
          gt([j.oI], ke.prototype, "SelectOGGAvatar", 1),
          gt([j.oI], ke.prototype, "SelectPreviousAvatar", 1),
          (ke = gt([S.PA], ke));
        const Pt = ({ children: r }) =>
          (0, t.jsx)("div", {
            className: g.AvatarCollectionHeader,
            children: (0, t.jsx)("div", {
              className: g.AvatarCollectionName,
              children: r,
            }),
          });
        function Er(r) {
          const { avatar: e, onSelected: i, large: s } = r;
          return (0, t.jsx)(Br, {
            image: e,
            onSelected: i,
            className: (0, p.A)(g.AvatarPreview, g.Animated, s && g.Large),
          });
        }
        const yt = ({ hash: r, onSelected: e, large: i }) =>
            (0, t.jsx)(L.Z, {
              className: (0, p.A)(g.AvatarPreview, g.Static, i && g.Large),
              onClick: () => e(r),
              onActivate: () => e(r),
              children: (0, t.jsx)("img", {
                src: (0, x.tp)(r, i ? "full" : "medium"),
                loading: "lazy",
              }),
            }),
          ki = (0, S.PA)(
            ({
              rgAnimatedAvatars: r,
              OGGAvatars: e,
              AvatarHistory: i,
              onSelectAnimatedAvatar: s,
              onSelectOGGAvatar: a,
              onSelectPreviousAvatar: o,
            }) => {
              let n = i.GetAvatarHistory(),
                h = [...e.GetRecentGameAvatars(), ...e.GetOwnedGameAvatars()];
              return (0, t.jsxs)(L.Z, {
                "flow-children": "column",
                children: [
                  (0, t.jsx)(Ki, { rgAnimatedAvatars: r, onSelected: s }),
                  (0, t.jsx)(Wi, { rgAvatars: n, onSelected: o }),
                  (0, t.jsx)(Gr, {
                    OGGAvatars: e,
                    rgAvatars: h,
                    onSelected: a,
                    title: (0, l.we)("#Profile_Edit_YourGameAvatars"),
                  }),
                  h.length < 20 &&
                    (0, t.jsx)(Gr, {
                      OGGAvatars: e,
                      rgAvatars: e.GetOtherGameAvatars(),
                      onSelected: a,
                      title: (0, l.we)("#Profile_Edit_MoreGameAvatars"),
                    }),
                ],
              });
            },
          ),
          Ki = ({ rgAnimatedAvatars: r, onSelected: e }) =>
            r.length
              ? (0, t.jsxs)("div", {
                  className: (0, p.A)(g.CollectionGroup, g.Primary),
                  children: [
                    (0, t.jsx)("div", {
                      className: g.Title,
                      children: (0, l.we)(
                        "#Profile_Edit_PurchasedFromRewardsStore",
                      ),
                    }),
                    (0, t.jsx)(L.Z, {
                      className: g.CollectionGroupAvatars,
                      "flow-children": "grid",
                      children: r.map((i) =>
                        (0, t.jsx)(
                          Er,
                          { avatar: i, onSelected: e },
                          i.communityitemid,
                        ),
                      ),
                    }),
                  ],
                })
              : null,
          Wi = (0, S.PA)(({ rgAvatars: r, onSelected: e }) =>
            r.length
              ? (0, t.jsxs)("div", {
                  className: (0, p.A)(g.CollectionGroup, g.Primary),
                  children: [
                    (0, t.jsx)("div", {
                      className: g.Title,
                      children: (0, l.we)("#Profile_Edit_YourPreviousAvatars"),
                    }),
                    (0, t.jsx)("div", {
                      className: g.CollectionGroupAvatars,
                      children: r.map((i) =>
                        (0, t.jsx)(
                          yt,
                          { hash: i.avatar_hash, onSelected: e },
                          i.avatar_hash,
                        ),
                      ),
                    }),
                  ],
                })
              : null,
          );
        function Gr(r) {
          const { rgAvatars: e, OGGAvatars: i, onSelected: s, title: a } = r;
          return e.length
            ? (0, t.jsxs)("div", {
                className: (0, p.A)(g.CollectionGroup, g.Primary),
                children: [
                  (0, t.jsx)("div", { className: g.Title, children: a }),
                  e.map((o) =>
                    (0, t.jsx)(
                      Qi,
                      { OGGAvatars: i, game: o, onSelected: s },
                      o.appid,
                    ),
                  ),
                ],
              })
            : null;
        }
        function Qi(r) {
          const { game: e, onSelected: i, OGGAvatars: s } = r,
            [a, o] = u.useState(!1),
            { isLoading: n, data: h } = zi(s, e.appid, a);
          let f;
          a && h
            ? (f = h)
            : e.avatar_count == e.avatars.length
              ? (f = e.avatars)
              : (f = e.avatars.slice(0, 5));
          const C = e.avatar_count - f.length;
          return (0, t.jsxs)("div", {
            className: g.CollectionGroup,
            children: [
              (0, t.jsx)("div", { className: g.Title, children: e.name }),
              (0, t.jsxs)(L.Z, {
                className: g.CollectionGroupAvatars,
                "flow-children": "grid",
                children: [
                  f.map((R) =>
                    (0, t.jsx)(
                      yt,
                      { hash: R.avatar_hash, onSelected: i },
                      R.avatar_hash,
                    ),
                  ),
                  (!a || n) &&
                    C > 0 &&
                    (0, t.jsxs)(I.$n, {
                      type: "button",
                      className: (0, p.A)(
                        g.AvatarPreview,
                        g.ExpandAvatarsButton,
                        g.Static,
                      ),
                      disabled: n,
                      onClick: n ? void 0 : () => o(!0),
                      children: ["+", (0, Ui.D)(C)],
                    }),
                ],
              }),
            ],
          });
        }
        function zi(r, e, i) {
          return (0, Je.I)({
            queryKey: ["OGGAvatars", e],
            queryFn: async () => {
              const a = await (
                await fetch(
                  `${Oi.TS.COMMUNITY_BASE_URL}actions/GameAvatarsForGame/${e}`,
                )
              ).json();
              return r.UpdateAvatarsForGame(e, a), a;
            },
            enabled: i,
          });
        }
        var Vi = Object.defineProperty,
          Zi = Object.getOwnPropertyDescriptor,
          Yi = (r, e, i, s) => {
            for (
              var a = s > 1 ? void 0 : s ? Zi(e, i) : e, o = r.length - 1, n;
              o >= 0;
              o--
            )
              (n = r[o]) && (a = (s ? n(e, i, a) : n(a)) || a);
            return s && a && Vi(e, i, a), a;
          };
        class Rr extends u.Component {
          constructor() {
            super(...arguments), (this.state = { bReady: !1 });
          }
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
              fnOnExpand: s,
              fnOnCollapse: a,
            } = this.props;
            if (e)
              return (0, t.jsxs)("div", {
                className: g.AvatarCollection,
                children: [
                  (0, t.jsx)(Pt, {
                    children: (0, l.we)("#Profile_Edit_Avatar_YourFrames"),
                  }),
                  (0, t.jsx)(Re.tH, {
                    children: (0, t.jsx)(Xi, {
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
              return (0, t.jsxs)(L.Z, {
                className: g.AvatarCollection,
                "flow-children": "column",
                children: [
                  (0, t.jsx)(Pt, {
                    children: (0, l.we)("#Profile_Edit_Avatar_YourFrames"),
                  }),
                  (0, t.jsx)("div", {
                    className: g.AvatarCollectionSingleRowWrapper,
                    children: (0, t.jsxs)(L.Z, {
                      className: (0, p.A)(
                        g.AvatarCollectionSingleRow,
                        g.ThreeColumns,
                      ),
                      "flow-children": "row",
                      children: [
                        (0, t.jsx)(br, {
                          onSelected: this.SelectFrame,
                          large: !0,
                          ProfileItems: i,
                        }),
                        (0, t.jsx)("div", { className: g.AvatarRowSpacer }),
                        (0, t.jsx)(Re.tH, {
                          children: o.map((h) =>
                            (0, t.jsxs)(
                              u.Fragment,
                              {
                                children: [
                                  (0, t.jsx)(Nr, {
                                    frame: h,
                                    onSelected: this.SelectFrame,
                                    large: !0,
                                  }),
                                  (0, t.jsx)("div", {
                                    className: g.AvatarRowSpacer,
                                  }),
                                ],
                              },
                              h.communityitemid,
                            ),
                          ),
                        }),
                      ],
                    }),
                  }),
                  n &&
                    (0, t.jsx)("div", {
                      className: g.ExpandButtonContainer,
                      children: (0, t.jsx)(I.$n, {
                        onClick: s,
                        children: (0, l.we)("#Profile_Edit_Avatar_SeeAll"),
                      }),
                    }),
                ],
              });
            }
          }
        }
        Yi([j.oI], Rr.prototype, "SelectFrame", 1);
        function Nr(r) {
          const { frame: e, onSelected: i, large: s } = r;
          return (0, t.jsx)(Br, {
            image: e,
            onSelected: i,
            className: (0, p.A)(g.FramePreview, s && g.Large),
          });
        }
        const br = (0, S.PA)(({ onSelected: r, ProfileItems: e, large: i }) => {
            let s = e.GetProfileModifierAvatarFrameURL();
            return s
              ? (0, t.jsx)(L.Z, {
                  className: (0, p.A)(g.FramePreview, i && g.Large),
                  onActivate: () => r(null),
                  children: (0, t.jsx)("img", { src: s }),
                })
              : (0, t.jsx)(L.Z, {
                  className: (0, p.A)(
                    g.FramePreview,
                    i && g.Large,
                    g.DefaultAvatarFramePreview,
                  ),
                  onActivate: () => r(null),
                  children: (0, t.jsx)("div", {
                    className: g.DefaultAvatarFrame,
                    children: (0, t.jsx)("div", {
                      className: g.DefaultAvatarFrameContent,
                    }),
                  }),
                });
          }),
          Xi = ({ rgFrames: r, ProfileItems: e, onSelected: i }) =>
            (0, t.jsxs)("div", {
              className: (0, p.A)(g.CollectionGroup, g.Primary),
              children: [
                (0, t.jsx)("div", {
                  className: g.Title,
                  children: (0, l.we)(
                    "#Profile_Edit_PurchasedFromRewardsStore",
                  ),
                }),
                (0, t.jsxs)(L.Z, {
                  className: g.CollectionGroupAvatars,
                  "flow-children": "grid",
                  children: [
                    (0, t.jsx)(br, { onSelected: i, ProfileItems: e }),
                    r.map((s) =>
                      (0, t.jsx)(
                        Nr,
                        { frame: s, onSelected: i },
                        s.communityitemid,
                      ),
                    ),
                  ],
                }),
              ],
            });
        var Ji = Object.defineProperty,
          $i = Object.getOwnPropertyDescriptor,
          Ne = (r, e, i, s) => {
            for (
              var a = s > 1 ? void 0 : s ? $i(e, i) : e, o = r.length - 1, n;
              o >= 0;
              o--
            )
              (n = r[o]) && (a = (s ? n(e, i, a) : n(a)) || a);
            return s && a && Ji(e, i, a), a;
          };
        const es = u.lazy(() =>
            Promise.all([m.e(54922), m.e(25278)]).then(m.bind(m, 66185)),
          ),
          ts = !0;
        let Xt = class extends u.Component {
          render() {
            return (0, t.jsx)(be, { ...this.props });
          }
        };
        Xt = Ne([S.PA], Xt);
        class rs extends u.Component {
          componentDidMount() {
            document
              .querySelector(".profile_small_header_avatar")
              .classList.add(ie.HideDefaultAvatar),
              (this.m_disposer = (0, d.fm)(() => {
                const { Profile: e, ProfileItems: i } = this.props,
                  s = tt(
                    e.GetCommittedAvatarHash(),
                    i.GetCommittedEquippedAvatar(),
                    "small",
                    { disableAnimation: !0 },
                  );
                document
                  .querySelectorAll(".user_avatar > img")
                  .forEach((a) => (a.src = s));
              }));
          }
          componentWillUnmount() {
            document
              .querySelector(".profile_small_header_avatar")
              .classList.remove(ie.HideDefaultAvatar),
              this.m_disposer();
          }
          render() {
            const { Profile: e, ProfileItems: i } = this.props;
            return Li.createPortal(
              (0, t.jsx)(os, { Profile: e, ProfileItems: i }),
              document.querySelector(".profile_small_header_avatar"),
            );
          }
        }
        class be extends u.Component {
          constructor() {
            super(...arguments),
              (this.state = {
                uploadImage: null,
                strUploadError: "",
                bAvatarCollectionExpanded: !1,
                bFrameCollectionExpanded: !1,
                bSaving: !1,
                bHTMLError: !1,
              }),
              (this.cropRef = u.createRef());
          }
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
            var e;
            const {
                Profile: i,
                ProfileItems: s,
                AvatarHistory: a,
              } = this.props,
              o = await i.UploadAvatar(
                await ((e = this.cropRef.current) == null
                  ? void 0
                  : e.getBlob()),
              );
            if (!o.bSuccess) {
              this.setState({ strUploadError: o.strError });
              return;
            }
            this.setState({ uploadImage: null, strUploadError: "" }),
              (this.cropRef = u.createRef()),
              s.SetEquippedAvatar(null, !0),
              a.RefreshAvatarHistory(),
              this.setState({
                bHTMLError: (await s.CommitAvatarChanges()) !== M.R,
              });
          }
          async CommitChanges() {
            const {
                Profile: e,
                ProfileItems: i,
                OGGAvatars: s,
                AvatarHistory: a,
              } = this.props,
              [o, n, h] = await Promise.all([
                i.CommitAvatarChanges(),
                e.BHasUncomittedAvatarChanges()
                  ? s.SetPlayerOGGAvatar(e)
                  : Promise.resolve(M.R),
                e.BHasUncomittedAvatarChanges()
                  ? a.SetPreviousAvatar(e)
                  : Promise.resolve(M.R),
              ]);
            this.setState({
              bHTMLError: o !== M.R || (n !== M.R && h !== M.R),
            }),
              a.RefreshAvatarHistory();
          }
          componentWillUnmount() {
            this.RevertChanges();
          }
          render() {
            const {
                Profile: e,
                ProfileItems: i,
                OGGAvatars: s,
                AvatarHistory: a,
              } = this.props,
              {
                uploadImage: o,
                bAvatarCollectionExpanded: n,
                bFrameCollectionExpanded: h,
                bSaving: f,
              } = this.state,
              C = {
                Profile: e,
                ProfileItems: i,
                OGGAvatars: s,
                AvatarHistory: a,
                fnOnCollapse: this.Reset,
              };
            return (0, t.jsxs)(I.nB, {
              className: ie.AvatarDialog,
              children: [
                (0, t.jsx)(re.XG, {
                  when: i.BIsAvatarUncomitted(),
                  message: (0, l.we)("#Profile_Edit_UnsavedChangesWarning"),
                }),
                (0, t.jsxs)(L.Z, {
                  "flow-children": "column",
                  children: [
                    (0, t.jsxs)(L.Z, {
                      className: ie.AvatarDialogBody,
                      "flow-children": "column",
                      children: [
                        (0, t.jsx)(I.Y9, {
                          children: (0, l.we)("#Profile_FieldAvatar"),
                        }),
                        (0, t.jsx)(I.a3, {
                          children: (0, l.we)(
                            "#Profile_Edit_Avatar_Instructions",
                          ),
                        }),
                        (0, t.jsx)(qe, {
                          strHTMLError: this.state.bHTMLError
                            ? (0, l.we)("#ConnectionTrouble_FailedToConnect")
                            : "",
                        }),
                        (0, t.jsxs)(is, {
                          Profile: e,
                          children: [
                            (0, t.jsxs)("div", {
                              className: ie.AvatarDialogTop,
                              children: [
                                (0, t.jsx)(ss, { Profile: e, ProfileItems: i }),
                                (0, t.jsxs)("div", {
                                  className: ie.AvatarDialogUploadArea,
                                  children: [
                                    (0, t.jsx)(as, {
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
                                children: (0, t.jsx)(es, {
                                  imageData: o,
                                  ref: this.cropRef,
                                }),
                              }),
                            !o &&
                              !h &&
                              (0, t.jsx)(ke, {
                                ...C,
                                bExpanded: n,
                                fnOnExpand: this.OnShowAllAvatarsClicked,
                              }),
                            !o &&
                              !n &&
                              (0, t.jsx)(Rr, {
                                ...C,
                                bExpanded: h,
                                fnOnExpand: this.OnShowAllFramesClicked,
                              }),
                          ],
                        }),
                      ],
                    }),
                    (0, t.jsx)(He, {
                      onSave: this.OnSave,
                      onCancel: this.RevertChanges,
                      disabled: f || e.BIsAvatarChangeOnCooldown(),
                    }),
                  ],
                }),
              ],
            });
          }
        }
        Ne([j.oI], be.prototype, "OnUploadSelected", 1),
          Ne([j.oI], be.prototype, "OnShowAllAvatarsClicked", 1),
          Ne([j.oI], be.prototype, "OnShowAllFramesClicked", 1),
          Ne([j.oI], be.prototype, "Reset", 1),
          Ne([j.oI], be.prototype, "RevertChanges", 1),
          Ne([j.oI], be.prototype, "OnSave", 1),
          Ne([j.oI], be.prototype, "SaveUpload", 1),
          Ne([j.oI], be.prototype, "CommitChanges", 1);
        const is = ({ Profile: r, children: e }) =>
          r.BIsAvatarChangeOnCooldown()
            ? (0, t.jsx)(_t, {
                rtCooldownEnd: r.GetAvatarChangeCooldownEndRTime(),
                strCooldownLabel: (0, l.we)("#Profile_AvatarUploadingBanned"),
                strCooldownDescHTML: (0, l.we)(
                  "#Profile_AvatarUploadingBanned_Desc",
                  X.k_strAvatarCooldownSupportURL,
                ),
                children: e,
              })
            : (0, t.jsx)(t.Fragment, { children: e });
        function tt(r, e, i, s) {
          return e
            ? s != null && s.disableAnimation
              ? De(e)
              : ht(e)
            : (0, Vt.t)(r || Vt.d, i);
        }
        const ss = (0, S.PA)(({ Profile: r, ProfileItems: e }) => {
            const i = r.GetAvatarHash(),
              s = e.GetEquippedAvatar(),
              a = e.GetEquippedAvatarFrame();
            let o = !a && e.GetEquippedProfileModifier();
            o && !e.BIsLegacyGoldenProfile(o.appid) && (o = null);
            let n = null;
            return (
              o ? (n = e.GetProfileModifierAvatarFrameURL()) : a && (n = ht(a)),
              (0, t.jsxs)("div", {
                className: ie.AvatarRow,
                children: [
                  (0, t.jsx)(Jt, {
                    sizeClassName: ie.Large,
                    sizePx: 184,
                    avatarURL: tt(i, s, "full"),
                    frameURL: n,
                    isGolden: !!o,
                  }),
                  (0, t.jsx)(Jt, {
                    sizeClassName: ie.Medium,
                    sizePx: 64,
                    avatarURL: tt(i, s, "medium"),
                    frameURL: n,
                    isGolden: !!o,
                  }),
                  (0, t.jsx)(Jt, {
                    sizeClassName: ie.Small,
                    sizePx: 32,
                    avatarURL: tt(i, s, "small"),
                    frameURL: n,
                    isGolden: !!o,
                  }),
                ],
              })
            );
          }),
          Jt = ({
            sizeClassName: r,
            sizePx: e,
            avatarURL: i,
            frameURL: s,
            isGolden: a,
          }) =>
            (0, t.jsxs)("div", {
              className: (0, p.A)(ie.Avatar, r),
              children: [
                (0, t.jsxs)("div", {
                  className: ie.AvatarImgCtn,
                  children: [
                    (0, t.jsx)("div", { className: ie.AvatarCropPreview }),
                    s &&
                      (0, t.jsx)("div", {
                        className: ie.AvatarFrame,
                        children: (0, t.jsx)("img", { src: s }),
                      }),
                    a &&
                      (0, t.jsx)("div", { className: "goldenAvatarOverlay" }),
                    (0, t.jsx)("img", { src: i }),
                  ],
                }),
                (0, t.jsxs)("div", { className: ie.size, children: [e, "px"] }),
              ],
            });
        function as(r) {
          const { OnAvatarSelected: e, disabled: i, strError: s } = r,
            a = u.useRef(void 0),
            o = u.useCallback(() => {
              var n;
              const h = (n = a.current) == null ? void 0 : n.files;
              (h == null ? void 0 : h.length) > 0 &&
                h[0].type.startsWith("image/") &&
                (e(h[0]), (a.current.value = null));
            }, [e]);
          return (0, t.jsxs)(t.Fragment, {
            children: [
              (0, t.jsx)("input", {
                type: "file",
                accept: "image/*",
                style: { display: "none" },
                ref: a,
                onInput: o,
              }),
              !!s && (0, t.jsx)("div", { className: ie.Error, children: s }),
              (0, t.jsx)(I.$n, {
                onClick: () => a.current.click(),
                disabled: i,
                children: (0, l.we)("#Profile_UploadAvatar"),
              }),
            ],
          });
        }
        const os = (0, S.PA)(({ Profile: r, ProfileItems: e }) => {
          const i = tt(
              r.GetCommittedAvatarHash(),
              e.GetCommittedEquippedAvatar(),
              "full",
            ),
            s = e.GetCommittedEquippedAvatarFrame(),
            a = !s && e.GetCommittedEquippedProfileModifier();
          let o = null;
          return (
            a ? (o = e.GetProfileModifierAvatarFrameURL()) : s && (o = ht(s)),
            (0, t.jsx)("div", {
              className: (0, p.A)(ie.Avatar, ie.Medium),
              children: (0, t.jsxs)("div", {
                className: ie.AvatarImgCtn,
                children: [
                  o &&
                    (0, t.jsx)("div", {
                      className: ie.AvatarFrame,
                      children: (0, t.jsx)("img", { src: o }),
                    }),
                  (0, t.jsx)("img", { src: i }),
                ],
              }),
            })
          );
        });
        var ns = m(43828),
          Lr = m(27456),
          $t = m(65946);
        function ls(r) {
          const {
            Profile: { Location: e },
          } = r;
          return (0, t.jsxs)(t.Fragment, {
            children: [
              (0, t.jsx)(ms, { LocationStore: e }),
              (0, t.jsx)(ds, { LocationStore: e }),
              (0, t.jsx)(cs, { LocationStore: e }),
            ],
          });
        }
        async function er(r, e) {
          const i = await r();
          return [
            { label: (0, l.we)("#Profile_LocationDoNotDisplay"), data: null },
            ...i
              .map(e)
              .sort((s, a) =>
                s.data.strDisplayText.localeCompare(a.data.strDisplayText),
              ),
          ];
        }
        function ms(r) {
          const { LocationStore: e } = r,
            { CountryCode: i, Country: s } = e,
            [a, o] = u.useState(),
            n = (0, Je.I)({
              queryKey: ["CountryEdit"],
              queryFn: async () =>
                await er(
                  () => e.GetCountryList(),
                  (C) => ({
                    label: C.countryname,
                    data: {
                      strCode: C.countrycode,
                      strDisplayText: C.countryname,
                    },
                  }),
                ),
              staleTime: 1 / 0,
            });
          u.useEffect(() => {
            var f, C, R;
            o(
              (R =
                (f = n.data) == null
                  ? void 0
                  : f.find((k) => {
                      var U;
                      return (
                        ((U = k.data) == null ? void 0 : U.strCode) ==
                        e.CountryCode
                      );
                    })) != null
                ? R
                : ((C = n.data) == null ? void 0 : C.length) > 0
                  ? n.data[0]
                  : void 0,
            );
          }, [n.data, e.CountryCode]);
          const h = u.useCallback(
            (f) => {
              var C, R;
              e.SetCountry(
                (C = f.data) == null ? void 0 : C.strCode,
                (R = f.data) != null && R.strCode
                  ? f.data.strDisplayText
                  : void 0,
              ),
                o(f);
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
              (0, t.jsx)(I.m, {
                contextMenuPositionOptions: { bDisablePopTop: !0 },
                label: (0, l.we)("#Profile_FieldCountry"),
                rgOptions: n.data,
                selectedOption: a == null ? void 0 : a.data,
                controlled: !0,
                disabled: n.isFetching,
                onChange: h,
                strDefaultLabel:
                  s || (0, l.we)("#Profile_LocationDoNotDisplay"),
                tooltip: $e("#Profile_DescriptionLocation"),
              }),
            ],
          });
        }
        function ds(r) {
          const { LocationStore: e } = r,
            { StateCode: i, State: s } = e,
            [a, o] = u.useState(),
            [n, h] = (0, $t.q3)(() => [
              e.BIsStateSelectionAvailable(),
              e.CountryCode,
            ]),
            f = (0, Je.I)({
              queryKey: ["StateEdit", h],
              queryFn: async () =>
                await er(
                  () => e.GetStateList(),
                  (U) => ({
                    label: U.statename,
                    data: { strCode: U.statecode, strDisplayText: U.statename },
                  }),
                ),
              staleTime: 1 / 0,
            });
          u.useEffect(() => {
            var k, U, N;
            o(
              (N =
                (k = f.data) == null
                  ? void 0
                  : k.find((J) => {
                      var Be;
                      return (
                        ((Be = J.data) == null ? void 0 : Be.strCode) ==
                        e.StateCode
                      );
                    })) != null
                ? N
                : ((U = f.data) == null ? void 0 : U.length) > 0
                  ? f.data[0]
                  : void 0,
            );
          }, [f.data, e.StateCode]);
          const C = u.useCallback(
              (k) => {
                var U, N;
                e.SetState(
                  (U = k.data) == null ? void 0 : U.strCode,
                  (N = k.data) != null && N.strCode
                    ? k.data.strDisplayText
                    : void 0,
                ),
                  o(k);
              },
              [e],
            ),
            R = n && !f.isError;
          return (0, t.jsxs)(t.Fragment, {
            children: [
              (0, t.jsx)("input", {
                type: "hidden",
                name: "state",
                value: i || "",
              }),
              R &&
                (0, t.jsx)(I.m, {
                  contextMenuPositionOptions: { bDisablePopTop: !0 },
                  label: (0, l.we)("#Profile_FieldState"),
                  rgOptions: f.data,
                  selectedOption: a == null ? void 0 : a.data,
                  controlled: !0,
                  disabled: f.isFetching,
                  onChange: C,
                  strDefaultLabel:
                    s || (0, l.we)("#Profile_LocationDoNotDisplay"),
                  tooltip: $e("#Profile_DescriptionLocation"),
                }),
            ],
          });
        }
        function cs(r) {
          const { LocationStore: e } = r,
            { CityCode: i, City: s } = e,
            [a, o] = u.useState(),
            [n, h, f] = (0, $t.q3)(() => [
              e.BIsCitySelectionAvailable(),
              e.CountryCode,
              e.StateCode,
            ]),
            C = (0, Je.I)({
              queryKey: ["CityEdit", h, f],
              queryFn: async () =>
                await er(
                  () => e.GetCityList(),
                  (N) => ({
                    label: N.cityname,
                    data: {
                      strCode: "" + N.cityid,
                      strDisplayText: N.cityname,
                    },
                  }),
                ),
              staleTime: 1 / 0,
              retry: !1,
            });
          u.useEffect(() => {
            var U, N, J;
            o(
              (J =
                (U = C.data) == null
                  ? void 0
                  : U.find((Be) => {
                      var Te;
                      return (
                        ((Te = Be.data) == null ? void 0 : Te.strCode) ==
                        e.CityCode
                      );
                    })) != null
                ? J
                : ((N = C.data) == null ? void 0 : N.length) > 0
                  ? C.data[0]
                  : void 0,
            );
          }, [C.data, e.CityCode]);
          const R = u.useCallback(
              (U) => {
                var N, J;
                e.SetCity(
                  (N = U.data) == null ? void 0 : N.strCode,
                  (J = U.data) != null && J.strCode
                    ? U.data.strDisplayText
                    : void 0,
                ),
                  o(U);
              },
              [e],
            ),
            k = n && !C.isError;
          return (0, t.jsxs)(t.Fragment, {
            children: [
              (0, t.jsx)("input", {
                type: "hidden",
                name: "city",
                value: i || "",
              }),
              k &&
                (0, t.jsx)(I.m, {
                  contextMenuPositionOptions: { bDisablePopTop: !0 },
                  label: (0, l.we)("#Profile_FieldCity"),
                  rgOptions: C.data,
                  selectedOption: a == null ? void 0 : a.data,
                  controlled: !0,
                  disabled: C.isFetching,
                  onChange: R,
                  strDefaultLabel:
                    s || (0, l.we)("#Profile_LocationDoNotDisplay"),
                  tooltip: $e("#Profile_DescriptionLocation"),
                }),
            ],
          });
        }
        var us = m(22714),
          At = m(19838),
          hs = Object.defineProperty,
          ps = Object.getOwnPropertyDescriptor,
          Or = (r, e, i, s) => {
            for (
              var a = s > 1 ? void 0 : s ? ps(e, i) : e, o = r.length - 1, n;
              o >= 0;
              o--
            )
              (n = r[o]) && (a = (s ? n(e, i, a) : n(a)) || a);
            return s && a && hs(e, i, a), a;
          };
        class tr extends u.Component {
          constructor() {
            super(...arguments),
              (this.state = { strSummary: "" }),
              (this.m_refTextInput = u.createRef());
          }
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
              s = i.value,
              a = s.substr(0, i.selectionStart) + e + s.substr(i.selectionEnd),
              o = i.selectionStart + e.length;
            this.SetInputValue(a, () => {
              i.selectionStart = i.selectionEnd = o;
            });
          }
          SetInputValue(e, i) {
            this.setState({ strSummary: e }, i),
              this.props.Profile.SetSummary(e);
          }
          render() {
            const { EmoticonStore: e, Profile: i } = this.props,
              { strSummary: s } = this.state;
            return (0, t.jsx)(vs, {
              Profile: i,
              children: (0, t.jsxs)("div", {
                className: At.summaryContainer,
                children: [
                  (0, t.jsx)(I.Cl, {
                    nMinHeight: 40,
                    name: "summary",
                    rows: 3,
                    cols: 40,
                    onChange: this.OnChange,
                    className: At.summaryTextArea,
                    value: s,
                    ref: this.m_refTextInput,
                  }),
                  (0, t.jsx)("div", {
                    className: At.formattingButtons,
                    children: (0, t.jsx)(us.A, {
                      className: At.formattingButton,
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
        Or([j.oI], tr.prototype, "OnChange", 1),
          Or([j.oI], tr.prototype, "InsertEmoticon", 1);
        const vs = ({ Profile: r, children: e }) =>
          r.BIsProfileSummaryChangeOnCooldown()
            ? (0, t.jsx)(_t, {
                rtCooldownEnd: r.GetProfileSummaryCooldownEndRTime(),
                strCooldownLabel: (0, l.we)("#Profile_ProfileSummaryCooldown"),
                strCooldownDescHTML: (0, l.we)(
                  "#Profile_ProfileSummaryCooldown_Desc",
                  X.k_strProfileSummaryCooldownSupportURL,
                ),
                children: e,
              })
            : (0, t.jsx)(t.Fragment, { children: e });
        var rr = m(20169),
          fs = Object.defineProperty,
          _s = Object.getOwnPropertyDescriptor,
          we = (r, e, i, s) => {
            for (
              var a = s > 1 ? void 0 : s ? _s(e, i) : e, o = r.length - 1, n;
              o >= 0;
              o--
            )
              (n = r[o]) && (a = (s ? n(e, i, a) : n(a)) || a);
            return s && a && fs(e, i, a), a;
          };
        class ir extends u.Component {
          constructor() {
            super(...arguments),
              (this.state = { bSaving: !1, strHTMLError: "" });
          }
          OnSubmit(e) {
            e.preventDefault(), this.CommitChanges(e.currentTarget);
          }
          async CommitChanges(e) {
            this.setState({ bSaving: !0, strHTMLError: "" });
            let i = await Zt("profileSave", new FormData(e));
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
              { bSaving: s, strHTMLError: a } = this.state;
            return (0, t.jsx)(L.Z, {
              "flow-children": "column",
              navEntryPreferPosition: rr.iU.MAINTAIN_Y,
              children: (0, t.jsxs)("form", {
                method: "POST",
                action: `${H.ProfileURL}edit/info`,
                onSubmit: this.OnSubmit,
                children: [
                  (0, t.jsx)("input", {
                    type: "hidden",
                    name: "sessionID",
                    value: (0, v.KC)(),
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
                  (0, t.jsx)(I.Y9, { children: (0, l.we)("#Profile_About") }),
                  (0, t.jsx)(I.a3, { children: (0, t.jsx)(gs, {}) }),
                  (0, t.jsx)(qe, { strHTMLError: a }),
                  (0, t.jsxs)(ft, {
                    title: (0, l.we)("#Profile_Edit_BasicInfo"),
                    children: [
                      (0, t.jsx)(rt, { Profile: e }),
                      !(0, ge.nA)(v.TS.EREALM) &&
                        (0, t.jsx)(Ct, { Profile: e }),
                    ],
                  }),
                  !(0, ge.nA)(v.TS.EREALM) &&
                    (0, t.jsx)(ft, {
                      title: (0, l.we)("#Profile_Edit_Location"),
                      children: (0, t.jsx)(ls, { Profile: e }),
                    }),
                  !(0, ge.nA)(v.TS.EREALM) &&
                    (0, t.jsx)(ft, {
                      title: (0, l.we)("#Profile_FieldSummary"),
                      children: (0, t.jsx)(tr, {
                        Profile: e,
                        EmoticonStore: i,
                      }),
                    }),
                  !(0, ge.nA)(v.TS.EREALM) &&
                    (0, t.jsx)(ft, {
                      title: (0, l.we)("#Profile_Edit_Preferences"),
                      children: (0, t.jsx)(St, { Profile: e }),
                    }),
                  (0, t.jsx)(He, { onCancel: this.RevertChanges, disabled: s }),
                ],
              }),
            });
          }
        }
        we([j.oI], ir.prototype, "OnSubmit", 1),
          we([j.oI], ir.prototype, "RevertChanges", 1);
        class gs extends u.Component {
          render() {
            return (0, t.jsx)("div", {
              style: { display: "block" },
              children: (0, t.jsx)(ns.h, {
                text: (0, l.we)(
                  (0, ge.nA)(v.TS.EREALM)
                    ? "#Profile_Edit_About_Instructions_SteamChina"
                    : "#Profile_Edit_About_Instructions",
                ),
              }),
            });
          }
        }
        let rt = class extends u.Component {
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
                (0, t.jsxs)(Ps, {
                  Profile: r,
                  children: [
                    (0, t.jsx)(I.pd, {
                      label: (0, l.we)("#Profile_FieldProfileName"),
                      disabled: r.BIsPersonaNameChangeOnCooldown(),
                      name: "personaName",
                      value: r.GetPersonaName(),
                      onChange: this.OnPersonaNameChange,
                    }),
                    (0, t.jsx)(ys, { Profile: r }),
                  ],
                }),
                !(0, ge.nA)(v.TS.EREALM) &&
                  (0, t.jsxs)(As, {
                    Profile: r,
                    children: [
                      (0, t.jsx)(I.pd, {
                        label: (0, l.we)("#Profile_FieldRealName"),
                        disabled: r.BIsProfileSummaryChangeOnCooldown(),
                        tooltip: $e("#Profile_DescriptionRealName"),
                        name: "real_name",
                        value: r.GetRealName(),
                        onChange: this.OnRealNameChange,
                      }),
                      (0, t.jsx)(Cs, { Profile: r }),
                    ],
                  }),
              ],
            });
          }
        };
        we([j.oI], rt.prototype, "OnPersonaNameChange", 1),
          we([j.oI], rt.prototype, "OnRealNameChange", 1),
          (rt = we([S.PA], rt));
        const Ps = ({ Profile: r, children: e }) =>
          r.BIsPersonaNameChangeOnCooldown()
            ? (0, t.jsx)(_t, {
                rtCooldownEnd: r.GetPersonaNameCooldownEndRTime(),
                strCooldownLabel: (0, l.we)("#Profile_PersonaNameCooldown"),
                strCooldownDescHTML: (0, l.we)(
                  "#Profile_PersonaNameCooldown_Desc",
                  X.k_strPersonaNameCooldownSupportURL,
                ),
                children: e,
              })
            : (0, t.jsx)(t.Fragment, { children: e });
        class ys extends u.Component {
          render() {
            const { Profile: e } = this.props;
            return e.HasFilteredPersonaName()
              ? (0, t.jsx)("div", {
                  className: Lr.FilteredNameWarning,
                  children: (0, l.oW)(
                    "#Profile_PersonaNameFiltered",
                    (0, t.jsx)("a", { href: X.k_strNameFilteredSupportURL }),
                  ),
                })
              : null;
          }
        }
        const As = ({ Profile: r, children: e }) =>
          r.BIsProfileSummaryChangeOnCooldown()
            ? (0, t.jsx)(_t, {
                rtCooldownEnd: r.GetProfileSummaryCooldownEndRTime(),
                strCooldownLabel: (0, l.we)("#Profile_RealNameCooldown"),
                strCooldownDescHTML: (0, l.we)(
                  "#Profile_RealNameCooldown_Desc",
                  X.k_strPersonaNameCooldownSupportURL,
                ),
                children: e,
              })
            : (0, t.jsx)(t.Fragment, { children: e });
        class Cs extends u.Component {
          render() {
            const { Profile: e } = this.props;
            return e.HasFilteredRealName()
              ? (0, t.jsx)("div", {
                  className: Lr.FilteredNameWarning,
                  children: (0, l.oW)(
                    "#Profile_RealNameFiltered",
                    (0, t.jsx)("a", { href: X.k_strNameFilteredSupportURL }),
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
              children: (0, t.jsx)(I.pd, {
                label: (0, l.we)("#Profile_FieldCustomURL"),
                tooltip: $e("#Profile_DescriptionCustomURL"),
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
        we([j.oI], Ct.prototype, "OnProfileURLChange", 1),
          (Ct = we([S.PA], Ct));
        let sr = class extends u.Component {
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
        sr = we([S.PA], sr);
        let St = class extends u.Component {
          OnProfileAwardsCheckboxChecked(r) {
            let { Profile: e } = this.props,
              i = r,
              s = e.GetPreferences();
            (s.hide_profile_awards = i), e.SetPreferences(s);
          }
          render() {
            const { Profile: r } = this.props,
              e = r.GetPreferences();
            return (0, t.jsxs)("div", {
              children: [
                (0, t.jsx)(I.Yh, {
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
        we([j.oI], St.prototype, "OnProfileAwardsCheckboxChecked", 1),
          (St = we([S.PA], St));
        var se = m(90713),
          Ss = Object.defineProperty,
          xs = Object.getOwnPropertyDescriptor,
          ar = (r, e, i, s) => {
            for (
              var a = s > 1 ? void 0 : s ? xs(e, i) : e, o = r.length - 1, n;
              o >= 0;
              o--
            )
              (n = r[o]) && (a = (s ? n(e, i, a) : n(a)) || a);
            return s && a && Ss(e, i, a), a;
          };
        let it = class extends u.Component {
          constructor() {
            super(...arguments),
              (this.state = { bSaving: !1, strHTMLError: "" });
          }
          async CommitFavoriteBadge() {
            const r = this.props.Badges;
            this.setState({ bSaving: !0 }),
              (await r.CommitFavoriteBadgeChanges()) != M.R
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
            let s = r.FavoriteBadge;
            return (0, t.jsx)(Re.tH, {
              children: (0, t.jsxs)(L.Z, {
                "flow-children": "column",
                children: [
                  (0, t.jsx)(re.XG, {
                    when: r.BFavoriteBadgeUncomitted(),
                    message: (0, l.we)("#Profile_Edit_UnsavedChangesWarning"),
                  }),
                  (0, t.jsx)(I.Y9, {
                    children: (0, l.we)("#Profile_Edit_FavoriteBadge"),
                  }),
                  (0, t.jsx)(I.a3, {
                    children: (0, l.we)("#Profile_Edit_Badge_Instructions"),
                  }),
                  (0, t.jsx)(qe, { strHTMLError: i }),
                  s && (0, t.jsx)(ws, { badge: s }),
                  !s && (0, t.jsx)(js, { count: r.Badges.length }),
                  (0, t.jsx)(et, {
                    getSearchFields: Is,
                    getItems: async () => r.Badges,
                    onItemSelected: (a) => {
                      r.SetFavoriteBadge(a);
                    },
                    ItemComponent: Bs,
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
        ar([j.oI], it.prototype, "CommitFavoriteBadge", 1),
          ar([j.oI], it.prototype, "RevertFavoriteBadge", 1),
          (it = ar([S.PA], it));
        const ws = ({ badge: r, children: e }) =>
            (0, t.jsxs)("div", {
              className: (0, p.A)(se.Badge, se.FavoriteBadge),
              children: [
                (0, t.jsx)("img", {
                  className: se.BadgeImage,
                  src: r.GetIconURL(),
                }),
                (0, t.jsxs)("div", {
                  className: se.BadgeDetails,
                  children: [
                    (0, t.jsx)("div", {
                      className: se.BadgeName,
                      children: r.GetName(),
                    }),
                    (0, t.jsx)("div", {
                      className: se.GameName,
                      children: r.GetGameName(),
                    }),
                  ],
                }),
              ],
            }),
          js = ({ count: r, children: e }) =>
            (0, t.jsxs)("div", {
              className: (0, p.A)(se.Badge, se.FavoriteBadge),
              children: [
                (0, t.jsx)("div", {
                  className: se.BadgeImageNone,
                  children: (0, t.jsx)("img", {
                    className: se.BadgeImage,
                    src: `${v.TS.COMMUNITY_CDN_URL}public/images/trans.gif`,
                  }),
                }),
                (0, t.jsxs)("div", {
                  className: se.BadgeDetails,
                  children: [
                    (0, t.jsx)("div", {
                      className: se.BadgeName,
                      children: "None selected",
                    }),
                    (0, t.jsx)("div", {
                      className: se.GameName,
                      children: `${r} badges available`,
                    }),
                  ],
                }),
              ],
            }),
          Is = (r) => [r.GetName(), r.GetGameName()],
          Bs = ({ Item: r, onSelected: e }) => {
            const i = r;
            return (0, t.jsxs)(L.Z, {
              className: (0, p.A)(se.Badge, se.BadgeOption),
              onActivate: e,
              children: [
                (0, t.jsx)("img", {
                  className: se.BadgeImage,
                  src: i.GetIconURL(),
                  loading: "lazy",
                }),
                (0, t.jsxs)("div", {
                  className: se.BadgeDetails,
                  children: [
                    (0, t.jsx)("div", {
                      className: se.BadgeName,
                      children: i.GetName(),
                    }),
                    (0, t.jsx)("div", {
                      className: se.GameName,
                      children: i.GetGameName(),
                    }),
                  ],
                }),
              ],
            });
          };
        var je = m(53841),
          Es = Object.defineProperty,
          Gs = Object.getOwnPropertyDescriptor,
          or = (r, e, i, s) => {
            for (
              var a = s > 1 ? void 0 : s ? Gs(e, i) : e, o = r.length - 1, n;
              o >= 0;
              o--
            )
              (n = r[o]) && (a = (s ? n(e, i, a) : n(a)) || a);
            return s && a && Es(e, i, a), a;
          };
        let st = class extends u.Component {
          constructor() {
            super(...arguments),
              (this.state = { bSaving: !1, strHTMLError: "" });
          }
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
              s = r.GroupList,
              a = s.PrimaryGroup;
            return (0, t.jsxs)(L.Z, {
              "flow-children": "column",
              children: [
                (0, t.jsx)(re.XG, {
                  when: s.BPrimaryGroupUncomitted(),
                  message: (0, l.we)("#Profile_Edit_UnsavedChangesWarning"),
                }),
                (0, t.jsx)(I.Y9, {
                  children: (0, l.we)("#Profile_Edit_FavoriteGroup"),
                }),
                (0, t.jsx)(I.a3, {
                  children: (0, l.we)("#Profile_Edit_Group_Instructions"),
                }),
                (0, t.jsx)(qe, { strHTMLError: i }),
                a && (0, t.jsx)(Rs, { group: a }),
                (0, t.jsx)(et, {
                  getSearchFields: Ns,
                  getItems: async () => (
                    await s.BWaitForUserGroups(), s.GetUserGroups()
                  ),
                  onItemSelected: (o) => {
                    s.SetPrimaryGroup(o);
                  },
                  ItemComponent: bs,
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
        or([j.oI], st.prototype, "CommitFavoriteGroup", 1),
          or([j.oI], st.prototype, "RevertFavoriteGroup", 1),
          (st = or([S.PA], st));
        const Rs = ({ group: r, children: e }) =>
            (0, t.jsxs)("div", {
              className: (0, p.A)(je.Group, je.FavoriteGroup),
              children: [
                (0, t.jsx)("img", {
                  className: je.GroupAvatar,
                  src: r.GetAvatarURL("full"),
                }),
                (0, t.jsx)("div", {
                  className: je.GroupDetails,
                  children: (0, t.jsx)("div", {
                    className: je.GroupName,
                    children: r.GetName(),
                  }),
                }),
              ],
            }),
          Ns = (r) => [r.GetName()],
          bs = ({ Item: r, onSelected: e }) => {
            const i = r;
            return (0, t.jsxs)(L.Z, {
              className: (0, p.A)(je.Group, je.GroupOption),
              onActivate: e,
              children: [
                (0, t.jsx)("img", {
                  className: je.GroupAvatar,
                  src: i.GetAvatarURL("full"),
                  loading: "lazy",
                }),
                (0, t.jsx)("div", {
                  className: je.GroupDetails,
                  children: (0, t.jsx)("div", {
                    className: je.GroupName,
                    children: i.GetName(),
                  }),
                }),
              ],
            });
          };
        var me = m(30082);
        const Dr = ({ Item: r, small: e }) => {
            let i = Qt(r, e);
            return Object.keys(i).length == 0
              ? null
              : (0, t.jsx)("video", {
                  loop: !0,
                  preload: "none",
                  muted: !0,
                  autoPlay: !0,
                  playsInline: !0,
                  children: Object.keys(i).map((s) =>
                    (0, t.jsx)("source", { src: i[s], type: s }, s),
                  ),
                });
          },
          Fr = ({ Background: r, className: e, small: i }) =>
            r
              ? (0, t.jsx)("div", {
                  className: e,
                  children: (0, t.jsx)(Dr, { Item: r, small: i }),
                })
              : null;
        function Tr(r) {
          r.currentTarget.querySelector("video").play();
        }
        function Ls(r) {
          r.detail.focusedNode.Element.querySelector("video").play();
        }
        function nr(r) {
          return [r.item_title, r.app_name];
        }
        function lr(r, e) {
          return r ? (e ? r.communityitemid === e.communityitemid : !1) : !e;
        }
        var Os = Object.defineProperty,
          Ds = Object.getOwnPropertyDescriptor,
          Mr = (r, e, i, s) => {
            for (
              var a = s > 1 ? void 0 : s ? Ds(e, i) : e, o = r.length - 1, n;
              o >= 0;
              o--
            )
              (n = r[o]) && (a = (s ? n(e, i, a) : n(a)) || a);
            return s && a && Os(e, i, a), a;
          };
        let xt = class extends u.Component {
          RevertChanges() {
            this.props.ProfileEdit.ProfileItems.RevertMiniProfileBackgroundChanges();
          }
          render() {
            const { ProfileEdit: r } = this.props,
              { Profile: e, ProfileItems: i, MiniProfileOverrideData: s } = r,
              { MiniProfileData: a, PersonaState: o } = e;
            return (0, t.jsxs)(t.Fragment, {
              children: [
                (0, t.jsx)(I.Y9, {
                  children: (0, l.we)("#Profile_Edit_MiniProfile"),
                }),
                (0, t.jsx)(I.a3, {
                  children: (0, l.we)("#Profile_Edit_MiniProfile_Instructions"),
                }),
                (0, t.jsx)(Fs, {
                  ProfileItems: i,
                  Profile: e,
                  MiniProfileOverrideData: s,
                  onDismiss: this.RevertChanges,
                }),
              ],
            });
          }
        };
        Mr([j.oI], xt.prototype, "RevertChanges", 1), (xt = Mr([S.PA], xt));
        const Fs = (0, S.PA)(
            ({
              Profile: r,
              ProfileItems: e,
              MiniProfileOverrideData: i,
              onDismiss: s,
            }) => {
              let a = e.GetEquippedProfileModifier();
              return (
                a && !e.BIsLegacyGoldenProfile(a.appid) && (a = null),
                (0, t.jsx)(Fe, {
                  fnRevertChanges: s,
                  getSearchFields: nr,
                  getItems: () => e.GetOwnedMiniProfileBackgrounds(),
                  fnCommitChanges: async (o) => (
                    e.SetEquippedMiniProfileBackground(o),
                    e.CommitMiniProfileChanges()
                  ),
                  ItemComponent: Ur,
                  RenderDefaultComponent: ({ onSelected: o, active: n }) =>
                    (0, t.jsx)(Ms, { onSelected: o, active: n, Modifier: a }),
                  ActiveItem: e.GetEquippedMiniProfileBackground(),
                  fnIsSameItem: lr,
                  fnRenderPreview: (o) =>
                    (0, t.jsx)(Ts, {
                      MiniProfileBackground: o,
                      Profile: r,
                      ProfileItems: e,
                      MiniProfileOverrideData: i,
                    }),
                })
              );
            },
          ),
          Ts = ({
            MiniProfileBackground: r,
            MiniProfileOverrideData: e,
            Profile: i,
            ProfileItems: s,
          }) => {
            const { MiniProfileData: a, PersonaState: o } = i;
            let n;
            if (r) {
              n = Qt(r);
              let h = De(r);
              h && (n.image = h);
            } else {
              n = s.GetProfileModifierMiniProfileBackgroundMovies();
              let h = s.GetProfileModifierMiniProfileBackground();
              h && (n.image = h);
            }
            return (0, t.jsx)(t.Fragment, {
              children: (0, t.jsx)("div", {
                className: me.MiniProfileDialogPreviewCtn,
                children: (0, t.jsx)(Dt, {
                  persona: o,
                  className: me.MiniProfilePreview,
                  data_loader: a,
                  community_data_override: { ...e, profile_background: n },
                }),
              }),
            });
          },
          Ur = ({ Item: r, onSelected: e, children: i, active: s }) => {
            let a = Qt(r),
              o = Object.keys(a).length > 0;
            return (0, t.jsxs)(L.Z, {
              className: (0, p.A)(
                me.MiniProfileBackgroundOption,
                o && me.WithVideo,
                s && me.Active,
              ),
              onActivate: e,
              onMouseEnter: o ? Tr : void 0,
              children: [
                (0, t.jsxs)("div", {
                  className: me.Preview,
                  children: [
                    (0, t.jsx)("img", { src: De(r), loading: "lazy" }),
                    o &&
                      (0, t.jsx)("div", {
                        className: me.PreviewVideo,
                        children: (0, t.jsx)(Dr, { Item: r }),
                      }),
                  ],
                }),
                (0, t.jsxs)("div", {
                  className: me.Details,
                  children: [
                    (0, t.jsxs)("div", {
                      children: [
                        (0, t.jsx)("div", {
                          className: me.Title,
                          children: r.item_title,
                        }),
                        (0, t.jsx)("div", {
                          className: me.App,
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
          Ms = ({ Modifier: r, onSelected: e, children: i, active: s }) =>
            r
              ? (0, t.jsx)(Ur, { Item: r, onSelected: e, active: s })
              : (0, t.jsxs)(L.Z, {
                  className: (0, p.A)(
                    me.MiniProfileBackgroundOption,
                    s && me.Active,
                  ),
                  onClick: e,
                  onActivate: e,
                  children: [
                    (0, t.jsx)("div", {
                      className: (0, p.A)(me.Preview, me.BlankBackground),
                      children: (0, t.jsx)("img", {
                        src: `${v.TS.COMMUNITY_CDN_URL}public/images/trans.gif`,
                        loading: "lazy",
                      }),
                    }),
                    (0, t.jsxs)("div", {
                      className: me.Details,
                      children: [
                        (0, t.jsxs)("div", {
                          children: [
                            (0, t.jsx)("div", {
                              className: me.Title,
                              children: (0, l.we)(
                                "#Profile_Edit_DefaultBlankBackground",
                              ),
                            }),
                            (0, t.jsx)("div", { className: me.App }),
                          ],
                        }),
                        i,
                      ],
                    }),
                  ],
                });
        var Oe = m(24660),
          Us = Object.defineProperty,
          Hs = Object.getOwnPropertyDescriptor,
          mr = (r, e, i, s) => {
            for (
              var a = s > 1 ? void 0 : s ? Hs(e, i) : e, o = r.length - 1, n;
              o >= 0;
              o--
            )
              (n = r[o]) && (a = (s ? n(e, i, a) : n(a)) || a);
            return s && a && Us(e, i, a), a;
          };
        let dr = class extends u.Component {
          render() {
            let r = this.props.PrivacyStore;
            return (0, t.jsxs)(L.Z, {
              className: "ProfilePrivacyRoot",
              "flow-children": "column",
              navEntryPreferPosition: rr.iU.MAINTAIN_Y,
              children: [
                (0, t.jsx)(Ke, {
                  PrivacyStore: r,
                  strLabel: (0, l.we)("#ProfilePrivacy_BasicDetails"),
                  strReadOnlySetting: Sr(F.Quy),
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
                        r.GetPrivacySetting("PrivacyOwnedGames") != F.uvF &&
                          (0, t.jsx)(kr, {
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
                        (0, t.jsx)(L.Z, {
                          "flow-children": "row",
                          children: (0, l.PP)(
                            "#ProfilePrivacy_Inventory_Desc",
                            (0, t.jsx)(Oe.Ii, {
                              href: H.ProfileURL + "inventory/",
                              children: (0, l.we)(
                                "#ProfilePrivacy_Inventory_Inventory",
                              ),
                            }),
                            (0, t.jsx)(Oe.Ii, {
                              href: H.ProfileURL + "inventory/#753_6",
                              children: (0, l.we)(
                                "#ProfilePrivacy_Inventory_TradingCards",
                              ),
                            }),
                          ),
                        }),
                        r.GetPrivacySetting("PrivacyInventory") != F.uvF &&
                          (0, t.jsx)(kr, {
                            PrivacyStore: r,
                            PrivacyKey: "PrivacyInventoryGifts",
                            LimitPrivacyKey: "PrivacyInventory",
                            children: (0, l.we)("#ProfilePrivacy_Gifts"),
                          }),
                      ],
                    }),
                    (0, t.jsx)("div", { className: "ProfilePrivacyHR" }),
                    (0, t.jsxs)(Hr, {
                      children: [
                        (0, l.we)("#ProfilePrivacy_Comments"),
                        ":",
                        (0, t.jsx)(wt, { PrivacyStore: r }),
                      ],
                    }),
                    !(0, ge.nA)(v.TS.EREALM) &&
                      (0, t.jsx)("div", { className: "ProfilePrivacyHR" }),
                    !(0, ge.nA)(v.TS.EREALM) &&
                      (0, t.jsx)(Ke, {
                        PrivacyStore: r,
                        strLabel: (0, l.we)("#ProfilePrivacy_UGC"),
                        strReadOnlySetting: (0, l.we)("#Privacy_PerItem"),
                        children: (0, t.jsx)(L.Z, {
                          "flow-children": "row",
                          children: (0, l.PP)(
                            "#ProfilePrivacy_UGC_Desc",
                            (0, t.jsx)(Oe.Ii, {
                              href: H.ProfileURL + "screenshots/",
                              children: (0, l.we)(
                                "#ProfilePrivacy_UGC_Desc_Screenshots",
                              ),
                            }),
                            (0, t.jsx)(Oe.Ii, {
                              href: H.ProfileURL + "myworkshopfiles/",
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
        dr = mr([S.PA], dr);
        function Ke(r) {
          let e;
          return (
            r.strReadOnlySetting
              ? (e = (0, t.jsx)(Qs, { strLabel: r.strReadOnlySetting }))
              : (e = (0, t.jsx)(Ks, {
                  PrivacyStore: r.PrivacyStore,
                  PrivacyKey: r.PrivacyKey,
                  LimitPrivacyKey: r.LimitPrivacyKey,
                })),
            (0, t.jsxs)(u.Fragment, {
              children: [
                (0, t.jsxs)(Hr, { children: [r.strLabel, ":", e] }),
                (0, t.jsx)(qs, { children: r.children }),
              ],
            })
          );
        }
        function Hr(r) {
          return (0, t.jsx)("div", {
            className: "ProfilePrivacyHeader",
            children: r.children,
          });
        }
        function qs(r) {
          return (0, t.jsx)("div", {
            className: "ProfilePrivacyDesc",
            children: r.children,
          });
        }
        function ks(r) {
          const e = [
              { label: (0, l.we)("#Privacy_Public"), data: F.Quy },
              { label: (0, l.we)("#Privacy_FriendsOnly"), data: F.Snd },
              { label: (0, l.we)("#Privacy_Private"), data: F.uvF },
            ],
            i = r != null ? r : F.Quy;
          return e.filter((s) => i >= s.data);
        }
        const Ks = (0, S.PA)(function (e) {
          const {
              PrivacyStore: i,
              PrivacyKey: s,
              LimitPrivacyKey: a,
              children: o,
            } = e,
            n = u.useCallback(() => {
              if (a) return i.GetPrivacySetting(a);
            }, [i, a]),
            h = u.useCallback(
              (k) => {
                i.ChangePrivacySetting(s, k);
              },
              [i, s],
            );
          let f = i.GetPrivacySetting(s),
            C = Sr(f);
          const R = ks(n());
          return (0, t.jsxs)(u.Fragment, {
            children: [
              (0, t.jsx)(I.ZU, {
                strDropDownButtonClassName: "ProfilePrivacyDropDown",
                bMatchWidth: !1,
                rgOptions: R,
                onChange: (k) => h(k.data),
                selectedOption: f,
              }),
              (0, t.jsx)(qr, { eSaveState: i.GetSaveState(s) }),
            ],
          });
        });
        function qr(r) {
          switch (r.eSaveState) {
            case Ht:
              return (0, t.jsx)("div", {
                className: "PrivacySaveNotice Saving",
                children: (0, l.we)("#Shared_Saving"),
              });
            case kt:
              return (0, t.jsx)("div", {
                className: "PrivacySaveNotice Error",
                children: (0, l.we)("#Error_Error"),
              });
            case qt:
              return (0, t.jsx)("div", {
                className: "PrivacySaveNotice Saved",
                children: (0, l.we)("#Shared_Saved"),
              });
            case Ue:
            default:
              return null;
          }
        }
        function kr(r) {
          const {
              PrivacyStore: e,
              PrivacyKey: i,
              LimitPrivacyKey: s,
              children: a,
            } = r,
            o = u.useCallback(
              (f) => {
                let C = f.currentTarget.checked ? F.uvF : F.Quy;
                e.ChangePrivacySetting(i, C, s);
              },
              [e, i, s],
            );
          let h = (0, $t.q3)(() => e.GetPrivacySetting(i)) == F.uvF;
          return (0, t.jsx)("div", {
            className: "ProfilePrivacyCheckbox",
            children: (0, t.jsxs)("label", {
              children: [
                (0, t.jsx)(Oe.BA, {
                  className: "ProfilePrivacyCheckbox_Input",
                  type: "checkbox",
                  checked: h,
                  onChange: o,
                }),
                (0, t.jsx)("div", {
                  className: "ProfilePrivacyCheckbox_Desc",
                  children: a,
                }),
              ],
            }),
          });
        }
        function Ws(r) {
          const e = [
              {
                label: (0, l.we)("#Profile_CommentPermission_Public_Desc"),
                data: Mt,
              },
              {
                label: (0, l.we)("#Profile_CommentPermission_FriendsOnly_Desc"),
                data: Tt,
              },
              {
                label: (0, l.we)("#Profile_CommentPermission_Private_Desc"),
                data: Ut,
              },
            ],
            i = r != null ? r : F.Quy;
          return e.filter((s) => i >= s.data);
        }
        let wt = class extends u.Component {
          constructor(r) {
            super(r), (this.state = { eSaveState: Ue });
          }
          OnSettingChanged(r) {
            this.props.PrivacyStore.ChangeCommentPermission(r);
          }
          render() {
            let r = this.props.PrivacyStore.CommentPermission,
              e = this.props.PrivacyStore.GetPrivacySetting("PrivacyProfile"),
              i = ci(ui(r, e));
            const s = Ws(e);
            return (0, t.jsxs)(u.Fragment, {
              children: [
                (0, t.jsx)(I.ZU, {
                  strDropDownButtonClassName: "ProfilePrivacyDropDown",
                  rgOptions: s,
                  bMatchWidth: !1,
                  onChange: (a) => this.OnSettingChanged(a.data),
                  selectedOption: r,
                }),
                (0, t.jsx)(qr, {
                  eSaveState: this.props.PrivacyStore.GetCommentSaveState(),
                }),
              ],
            });
          }
        };
        mr([j.oI], wt.prototype, "OnSettingChanged", 1), (wt = mr([S.PA], wt));
        function Qs(r) {
          return (0, t.jsx)("div", {
            className: "ProfilePrivacyDropDown readonly",
            children: r.strLabel,
          });
        }
        var he = m(26075),
          Ce = m(38945),
          cr = m(19939),
          Kr = m(54212);
        const zs = ({ className: r, width: e, height: i, theme: s }) => {
            s || (s = "Default"), (s = s + "Theme");
            const [a, o] = (0, Kr.l)(),
              [n, h] = (0, Kr.l)();
            return (0, t.jsxs)("svg", {
              width: e || "401",
              height: i || "399",
              viewBox: "0 0 401 399",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              className: (0, p.A)(r, Ce.ProfilePreview, cr[s]),
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
                  className: Ce.ThemeBackground,
                }),
                (0, t.jsx)("rect", {
                  y: "13",
                  width: "401",
                  height: "382",
                  fill: o,
                  className: Ce.PaintRadial0,
                }),
                (0, t.jsx)("rect", {
                  y: "13",
                  width: "401",
                  height: "382",
                  fill: h,
                  className: Ce.PaintRadial1,
                }),
                (0, t.jsxs)("defs", {
                  children: [
                    (0, t.jsxs)("radialGradient", {
                      id: a,
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
          Ha = null,
          Wr = (0, S.PA)(({ ProfileItems: r, Background: e, theme: i }) => {
            e === void 0 && (e = r.GetEquippedBackground());
            let s = e && e.movie_webm,
              a = e && e.tiled,
              o = e ? De(e) : Wt(null);
            const n = e && !a && r.GetEquippedBackgroundFlags() == Y.JA9.Z;
            let h = null;
            return (
              a &&
                (h = {
                  backgroundImage: `url( ${o} )`,
                  backgroundRepeat: "repeat",
                  backgroundSize: "125px 125px",
                }),
              (0, t.jsxs)("div", {
                style: h,
                className: Ce.ProfilePagePreviewCtn,
                children: [
                  (0, t.jsx)("div", {
                    className: Ce.BackgroundPosition,
                    children: (0, t.jsxs)("div", {
                      className: (0, p.A)(Ce.Background, n && Ce.FullScreen),
                      children: [
                        !s && !a && (0, t.jsx)("img", { src: o }),
                        s && (0, t.jsx)(Fr, { Background: e, className: "" }),
                      ],
                    }),
                  }),
                  (0, t.jsx)("div", {
                    className: Ce.ProfilePreviewPosition,
                    children: (0, t.jsx)("div", {
                      className: Ce.ProfilePreviewCtn,
                      children: (0, t.jsx)(zs, {
                        className: Ce.ProfilePreview,
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
        var Vs = Object.defineProperty,
          Zs = Object.getOwnPropertyDescriptor,
          at = (r, e, i, s) => {
            for (
              var a = s > 1 ? void 0 : s ? Zs(e, i) : e, o = r.length - 1, n;
              o >= 0;
              o--
            )
              (n = r[o]) && (a = (s ? n(e, i, a) : n(a)) || a);
            return s && a && Vs(e, i, a), a;
          };
        let ot = class extends u.Component {
          constructor() {
            super(...arguments), (this.state = { equipFlags: 0 });
          }
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
              s = r.GetEquippedProfileModifier();
            return (
              s && !r.BIsLegacyGoldenProfile(s.appid) && (s = null),
              (0, t.jsxs)(L.Z, {
                "flow-children": "column",
                children: [
                  (0, t.jsx)(I.Y9, {
                    children: (0, l.we)("#Profile_Edit_ChooseBackground"),
                  }),
                  (0, t.jsx)(I.a3, {
                    children: (0, l.we)(
                      "#Profile_Edit_Background_Instructions",
                    ),
                  }),
                  (0, t.jsx)(Fe, {
                    className: he.BackgroundPickerPage,
                    getSearchFields: nr,
                    getItems: () => r.GetOwnedBackgrounds(),
                    fnCommitChanges: this.CommitChanges,
                    fnRevertChanges: this.RevertChanges,
                    ItemComponent: Vr,
                    RenderDefaultComponent: ({ onSelected: a, active: o }) =>
                      (0, t.jsx)(Xs, { Modifier: s, onSelected: a, active: o }),
                    ActiveItem: r.GetEquippedBackground(),
                    fnIsSameItem: lr,
                    fnRenderPreview: (a) =>
                      (0, t.jsx)(Ys, {
                        Background: a,
                        ProfileItems: r,
                        theme: e.ActiveTheme.theme_id,
                      }),
                  }),
                ],
              })
            );
          }
        };
        at([j.oI], ot.prototype, "CommitChanges", 1),
          at([j.oI], ot.prototype, "RevertChanges", 1),
          (ot = at([S.PA], ot));
        const Qr = ({ label: r, currentFlag: e, flag: i, onSelect: s }) => {
          let a = (o) => {
            o && s(i);
          };
          return (0, t.jsx)("div", {
            className: he.ProfileBackgroundEquipOption,
            children: (0, t.jsx)(I.Od, {
              checked: e == i,
              disabled: e == i,
              onChange: a,
              label: r,
            }),
          });
        };
        let jt = class extends u.Component {
          OnChange(r) {
            this.props.ProfileItems.SetEquippedBackgroundFlags(r);
          }
          render() {
            let { Background: r, ProfileItems: e } = this.props;
            const i = !r || (r == null ? void 0 : r.tiled),
              s = e.GetEquippedBackgroundFlags();
            let a = (0, t.jsx)(Qr, {
                flag: Y.JA9.Z,
                currentFlag: s,
                onSelect: this.OnChange,
                label: (0, l.we)(
                  "#Profile_Edit_BackgroundEquipFlag_FullScreen",
                ),
              }),
              o = (0, t.jsx)(Qr, {
                flag: 0,
                currentFlag: s,
                onSelect: this.OnChange,
                label: (0, l.we)(
                  "#Profile_Edit_BackgroundEquipFlag_OriginalSize",
                ),
              });
            return (0, t.jsxs)("div", {
              className: (0, p.A)(
                he.ProfileBackgroundEquipOptions,
                i && he.HideEquipOptions,
              ),
              children: [a, o],
            });
          }
        };
        at([j.oI], jt.prototype, "OnChange", 1), (jt = at([S.PA], jt));
        const Ys = (0, S.PA)(({ Background: r, ProfileItems: e, theme: i }) =>
            (0, t.jsxs)("div", {
              children: [
                (0, t.jsx)(
                  Wr,
                  { Background: r, ProfileItems: e, theme: i },
                  r && r.communityitemid,
                ),
                (0, t.jsx)(jt, { ProfileItems: e, Background: r }),
              ],
            }),
          ),
          zr = ({ Background: r, children: e }) =>
            (0, t.jsxs)("div", {
              className: he.Details,
              children: [
                (0, t.jsxs)("div", {
                  children: [
                    (0, t.jsx)("div", {
                      className: he.Title,
                      children: r
                        ? r.item_title
                        : (0, l.we)("#Profile_Edit_DefaultBlankBackground"),
                    }),
                    (0, t.jsx)("div", {
                      className: he.App,
                      children: r && r.app_name,
                    }),
                  ],
                }),
                e,
              ],
            }),
          Vr = ({ Item: r, onSelected: e, active: i, children: s }) => {
            let a = !!r.movie_webm;
            return (0, t.jsxs)(L.Z, {
              className: (0, p.A)(
                he.BackgroundOption,
                a && he.WithVideo,
                i && he.Active,
              ),
              onClick: e,
              onActivate: e,
              onGamepadFocus: a ? Ls : void 0,
              onMouseEnter: a ? Tr : void 0,
              focusable: !0,
              children: [
                (0, t.jsxs)("div", {
                  className: he.Preview,
                  children: [
                    (0, t.jsx)("img", { src: Wt(r), loading: "lazy" }),
                    (0, t.jsx)(Fr, {
                      Background: r,
                      className: he.PreviewVideo,
                      small: !0,
                    }),
                  ],
                }),
                (0, t.jsx)(zr, { Background: r, children: s }),
              ],
            });
          },
          Xs = ({ onSelected: r, Modifier: e, active: i, children: s }) =>
            e
              ? (0, t.jsx)(Vr, { Item: e, onSelected: r, active: i })
              : (0, t.jsxs)("div", {
                  className: (0, p.A)(he.BackgroundOption, i && he.Active),
                  onClick: r,
                  children: [
                    (0, t.jsx)("div", {
                      className: he.Preview,
                      children: (0, t.jsx)("img", { src: Wt(null) }),
                    }),
                    (0, t.jsx)(zr, { Background: null, children: s }),
                  ],
                });
        var Js = m(75130),
          $s = m(17083);
        function ea(r) {
          return !!(r.metaKey || r.altKey || r.ctrlKey || r.shiftKey);
        }
        function Zr(r) {
          const { navigate: e, onClick: i, ...s } = r,
            { target: a } = s,
            o = (n) => {
              try {
                i && i(n);
              } catch (h) {
                throw (n.preventDefault(), h);
              }
              !n.defaultPrevented &&
                n.button === 0 &&
                (!a || a === "_self") &&
                !ea(n) &&
                (n.preventDefault(), e());
            };
          return (0, t.jsx)(Oe.Ii, { ...s, onClick: o });
        }
        function ta(r) {
          return (0, t.jsx)($s.k2, { component: Zr, ...r });
        }
        function qa(r) {
          return jsx(Link, { component: Zr, ...r });
        }
        var Se = m(78091);
        function ra(r) {
          const { root: e, currentPath: i, linksAvailable: s, children: a } = r;
          return (0, t.jsx)(Js.u, {
            navID: "ProfileEditShell",
            children: (0, t.jsx)(L.Z, {
              children: (0, t.jsxs)(L.Z, {
                className: Se.Shell,
                "flow-children": "row",
                navEntryPreferPosition: rr.iU.FIRST,
                children: [
                  (0, t.jsx)(ia, {
                    root: e,
                    currentPath: i,
                    linksAvailable: s,
                  }),
                  (0, t.jsx)("div", {
                    className: Se.PageContent,
                    children: (0, t.jsx)(Re.tH, { children: a }),
                  }),
                ],
              }),
            }),
          });
        }
        const ia = ({ root: r, currentPath: e, linksAvailable: i }) => {
            const s = { root: r, currentPath: e },
              a = _r,
              o = (0, v.Qn)();
            return (0, t.jsxs)(L.Z, {
              className: Se.Navigation,
              "flow-children": "column",
              children: [
                (0, t.jsx)("div", {
                  className: Se.BackToProfileCtn,
                  children: (0, t.jsx)(Oe.Ii, {
                    href: H.ProfileURL,
                    children: (0, l.we)("#Profile_ReturnToYourProfile"),
                  }),
                }),
                (0, t.jsx)("div", { className: Se.ProfileEditLine }),
                (0, t.jsx)(Ie, {
                  ...s,
                  to: a.Info(),
                  children: (0, l.we)("#Profile_Edit_BasicInfo"),
                }),
                (0, t.jsx)(Ie, {
                  ...s,
                  to: a.Avatar(),
                  children: (0, l.we)("#Profile_FieldAvatar"),
                }),
                (0, t.jsx)(Ie, {
                  ...s,
                  to: a.Background(),
                  children: (0, l.we)("#Profile_FieldProfileBackground"),
                }),
                (0, t.jsx)(Ie, {
                  ...s,
                  to: a.MiniProfile(),
                  children: (0, l.we)("#Profile_Edit_MiniProfile"),
                }),
                (0, t.jsx)(Ie, {
                  ...s,
                  to: a.Theme(),
                  children: (0, l.we)("#Profile_Edit_Theme"),
                }),
                (0, t.jsx)(Ie, {
                  ...s,
                  to: a.ProfileModifier(),
                  fnVisible: i.ProfileModifierAvailable,
                  children: (0, l.we)("#Profile_Edit_ProfileModifier"),
                }),
                (0, t.jsx)(Ie, {
                  ...s,
                  to: a.FavoriteBadge(),
                  fnVisible: i.BadgesAvailable,
                  children: (0, l.we)("#Profile_Edit_FavoriteBadge"),
                }),
                (0, t.jsx)(Ie, {
                  ...s,
                  to: a.FavoriteGroup(),
                  fnVisible: i.GroupsAvailable,
                  children: (0, l.we)("#Profile_Edit_FavoriteGroup"),
                }),
                !o &&
                  (0, t.jsx)(Ie, {
                    ...s,
                    to: a.Showcases(),
                    fnVisible: i.ShowcasesAvailable,
                    children: (0, l.we)("#Profile_Edit_FeaturedShowcase"),
                  }),
                (0, t.jsx)("div", { className: Se.ProfileEditLine }),
                (0, t.jsx)(Ie, {
                  ...s,
                  to: a.Privacy(),
                  children: (0, l.we)("#Profile_EditPrivacySettings"),
                }),
                (0, t.jsx)("div", {
                  className: Se.ProfileEditStoreLink,
                  children: (0, t.jsx)(Oe.Ii, {
                    className: (0, p.A)(Se.ExternalLink),
                    href: `${v.TS.STORE_BASE_URL}points/`,
                    children: (0, l.we)("#SteamPointsShop"),
                  }),
                }),
              ],
            });
          },
          Ie = (0, S.PA)(
            ({
              root: r,
              currentPath: e,
              to: i,
              fnVisible: s,
              fnDisabled: a,
              children: o,
            }) => {
              const n = `${r}${i}`,
                h = n == e;
              if (!h && s && !s()) return null;
              const f = a && a(),
                C = !!f;
              let R;
              return (
                f && (R = (k) => k.preventDefault()),
                (0, t.jsx)(ta, {
                  className: (0, p.A)(
                    Se.NavLink,
                    h && Se.Active,
                    C && Se.Disabled,
                  ),
                  to: n,
                  onClick: R,
                  title: f,
                  children: o,
                })
              );
            },
          );
        var de = m(49622),
          sa = Object.defineProperty,
          aa = Object.getOwnPropertyDescriptor,
          nt = (r, e, i, s) => {
            for (
              var a = s > 1 ? void 0 : s ? aa(e, i) : e, o = r.length - 1, n;
              o >= 0;
              o--
            )
              (n = r[o]) && (a = (s ? n(e, i, a) : n(a)) || a);
            return s && a && sa(e, i, a), a;
          };
        let lt = class extends u.Component {
          constructor() {
            super(...arguments), (this.state = { bDialogActive: !1 });
          }
          ShowDialog() {
            this.setState({ bDialogActive: !0 });
          }
          HideDialog() {
            this.setState({ bDialogActive: !1 });
          }
          render() {
            const { ProfileItems: r } = this.props;
            return r.BHasAnyProfileModifiers()
              ? (0, t.jsx)(It, {
                  active: this.state.bDialogActive,
                  ProfileItems: r,
                  onDismiss: this.HideDialog,
                })
              : null;
          }
        };
        nt([j.oI], lt.prototype, "ShowDialog", 1),
          nt([j.oI], lt.prototype, "HideDialog", 1),
          (lt = nt([S.PA], lt));
        const oa = (0, S.PA)(({ ProfileItems: r }) => {
            let e = r.GetProfileModifierCSSURL();
            return e
              ? (0, t.jsx)("link", {
                  rel: "stylesheet",
                  type: "text/css",
                  href: e,
                })
              : null;
          }),
          na = ({ ProfileModifier: r }) => {
            const e = r
                ? De(r)
                : `${v.TS.COMMUNITY_CDN_URL}public/images/trans.gif`,
              i = r
                ? r.item_title
                : (0, l.we)("#Profile_Edit_DefaultBlankBackground"),
              s = r ? r.app_name : "";
            return (0, t.jsx)(t.Fragment, {
              children: (0, t.jsxs)("div", {
                className: de.ProfileModifierBody,
                children: [
                  (0, t.jsx)("img", {
                    className: de.GoldenProfileItemImage,
                    src: e,
                  }),
                  (0, t.jsx)("div", {
                    className: de.GoldenProfileTitle,
                    children: i,
                  }),
                  (0, t.jsx)("div", {
                    className: de.GoldenProfileApp,
                    children: s,
                  }),
                ],
              }),
            });
          };
        let It = class extends u.Component {
          OnDismiss() {
            this.props.ProfileItems.RevertProfileModifierChanges(),
              this.props.onDismiss();
          }
          render() {
            const { ProfileItems: r } = this.props;
            return (0, t.jsxs)(t.Fragment, {
              children: [
                (0, t.jsx)(I.Y9, {
                  children: (0, l.we)("#Profile_Edit_ProfileModifier"),
                }),
                (0, t.jsx)(I.a3, {
                  children: (0, l.we)(
                    "#Profile_Edit_ProfileModifier_Instructions",
                  ),
                }),
                (0, t.jsx)(Fe, {
                  fnRevertChanges: this.OnDismiss,
                  getSearchFields: nr,
                  getItems: () => r.GetOwnedProfileModifiers(),
                  fnCommitChanges: async (e) => (
                    r.SetEquippedProfileModifier(e),
                    r.CommitProfileModifierChanges()
                  ),
                  ItemComponent: la,
                  RenderDefaultComponent: ({ onSelected: e, active: i }) =>
                    (0, t.jsx)(ma, { onSelected: e, active: i }),
                  ActiveItem: r.GetEquippedProfileModifier(),
                  fnIsSameItem: lr,
                  fnRenderPreview: (e) =>
                    (0, t.jsx)(na, { ProfileModifier: e }),
                }),
              ],
            });
          }
        };
        nt([j.oI], It.prototype, "OnDismiss", 1), (It = nt([S.PA], It));
        const la = ({ Item: r, onSelected: e, children: i, active: s }) =>
            (0, t.jsxs)(L.Z, {
              className: (0, p.A)(de.ProfileModifierOption, s && de.Active),
              onActivate: e,
              children: [
                (0, t.jsx)("div", {
                  className: de.Preview,
                  children: (0, t.jsx)("img", { src: De(r), loading: "lazy" }),
                }),
                (0, t.jsxs)("div", {
                  className: de.Details,
                  children: [
                    (0, t.jsxs)("div", {
                      children: [
                        (0, t.jsx)("div", {
                          className: de.Title,
                          children: r.item_title,
                        }),
                        (0, t.jsx)("div", {
                          className: de.App,
                          children: r.app_name,
                        }),
                      ],
                    }),
                    i,
                  ],
                }),
              ],
            }),
          ma = ({ onSelected: r, children: e, active: i }) =>
            (0, t.jsxs)(L.Z, {
              className: (0, p.A)(de.ProfileModifierOption, i && de.Active),
              onActivate: r,
              children: [
                (0, t.jsx)("div", {
                  className: (0, p.A)(de.Preview, de.BlankBackground),
                  children: (0, t.jsx)("img", {
                    src: `${v.TS.COMMUNITY_CDN_URL}public/images/trans.gif`,
                    loading: "lazy",
                  }),
                }),
                (0, t.jsxs)("div", {
                  className: de.Details,
                  children: [
                    (0, t.jsxs)("div", {
                      children: [
                        (0, t.jsx)("div", {
                          className: de.Title,
                          children: (0, l.we)("#ProfileModifier_DisabledTitle"),
                        }),
                        (0, t.jsx)("div", { className: de.App }),
                      ],
                    }),
                    e,
                  ],
                }),
              ],
            });
        var ce = m(20644),
          da = Object.defineProperty,
          ca = Object.getOwnPropertyDescriptor,
          ur = (r, e, i, s) => {
            for (
              var a = s > 1 ? void 0 : s ? ca(e, i) : e, o = r.length - 1, n;
              o >= 0;
              o--
            )
              (n = r[o]) && (a = (s ? n(e, i, a) : n(a)) || a);
            return s && a && da(e, i, a), a;
          };
        let mt = class extends u.Component {
          constructor() {
            super(...arguments),
              (this.state = { bSaving: !1, strHTMLError: "" });
          }
          async CommitChanges(r) {
            const { ProfileTheme: e } = this.props;
            this.setState({ bSaving: !0, strHTMLError: "" }),
              e.SetActiveTheme(r.theme_id);
            let i = await e.CommitActiveTheme();
            return (
              i != M.R &&
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
                (0, t.jsx)(I.Y9, {
                  children: (0, l.we)("#Profile_Edit_Theme"),
                }),
                (0, t.jsx)(I.a3, {
                  children: (0, l.we)("#Profile_Edit_Theme_Instructions"),
                }),
                (0, t.jsx)(qe, { strHTMLError: this.state.strHTMLError }),
                i && (0, t.jsx)(fa, {}),
                (0, t.jsx)(Fe, {
                  getSearchFields: null,
                  ActiveItem: r.ActiveTheme,
                  getItems: async () => r.AvailableThemes,
                  fnCommitChanges: this.CommitChanges,
                  fnRevertChanges: this.RevertChanges,
                  fnRenderPreview: (s) =>
                    (0, t.jsx)(ha, { Theme: s, ProfileItems: e }),
                  fnIsSameItem: pa,
                  ItemComponent: va,
                  classNameItemPicker: ce.ProfileThemePicker,
                  className: (0, p.A)(i && ce.ThemePickerDisabled),
                }),
              ],
            });
          }
        };
        ur([j.oI], mt.prototype, "CommitChanges", 1),
          ur([j.oI], mt.prototype, "RevertChanges", 1),
          (mt = ur([S.PA], mt));
        const ua = ({ Theme: r, children: e }) => {
            let i;
            return (
              typeof r == "string"
                ? (i = r + "Theme")
                : (i =
                    ((r == null ? void 0 : r.theme_id) || "Default") + "Theme"),
              (0, t.jsx)("div", { className: cr[i], children: e })
            );
          },
          ha = (0, S.PA)(({ Theme: r, ProfileItems: e }) =>
            (0, t.jsx)("div", {
              className: ce.ProfileThemePreviewCtn,
              children: (0, t.jsx)(Wr, { ProfileItems: e, theme: r.theme_id }),
            }),
          ),
          ka = (r) => [r.title],
          pa = (r, e) => (r && r.theme_id) === (e && e.theme_id),
          va = ({ Item: r, onSelected: e, active: i, children: s }) => {
            const a = r.theme_id + "Theme",
              o = `ThemeOption${a}`;
            return (0, t.jsxs)(L.Z, {
              className: (0, p.A)(
                ce.ProfileTheme,
                e && ce.Option,
                i && ce.Active,
                cr[a],
              ),
              onActivate: e,
              children: [
                (0, t.jsx)("div", {
                  className: ce.PreviewCtn,
                  children: (0, t.jsxs)("svg", {
                    className: (0, p.A)(ce.Preview),
                    viewBox: "0 0 382 382",
                    width: "100%",
                    height: "100%",
                    children: [
                      (0, t.jsx)("rect", {
                        width: "382",
                        height: "382",
                        fill: "var(--edit-background)",
                        className: ce.EditBackground,
                      }),
                      (0, t.jsx)("rect", {
                        width: "382",
                        height: "382",
                        fill: "var(--gradient-background)",
                        fillOpacity: "0.23",
                        className: ce.ThemeBackground,
                      }),
                      (0, t.jsx)("rect", {
                        width: "382",
                        height: "382",
                        fill: `url(#${o}paint0_radial)`,
                        className: ce.PaintRadial0,
                      }),
                      (0, t.jsx)("rect", {
                        width: "382",
                        height: "382",
                        fill: `url(#${o}paint1_radial)`,
                        className: ce.PaintRadial1,
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
                  className: ce.Details,
                  children: [
                    (0, t.jsx)("div", {
                      className: ce.Title,
                      children: r.title,
                    }),
                    s,
                  ],
                }),
              ],
            });
          },
          fa = ({ children: r }) =>
            (0, t.jsx)("div", {
              className: ce.ThemesDisabledNotice,
              children: (0, t.jsx)("div", {
                className: ce.Notice,
                children: (0, l.we)(
                  "#Profile_Edit_GoldenProfileOverridesTheme",
                ),
              }),
            });
        var _a = Object.defineProperty,
          ga = Object.getOwnPropertyDescriptor,
          Yr = (r, e, i, s) => {
            for (
              var a = s > 1 ? void 0 : s ? ga(e, i) : e, o = r.length - 1, n;
              o >= 0;
              o--
            )
              (n = r[o]) && (a = (s ? n(e, i, a) : n(a)) || a);
            return s && a && _a(e, i, a), a;
          };
        class hr extends u.Component {
          constructor() {
            super(...arguments),
              (this.m_refDiv = u.createRef()),
              (this.state = { bSaving: !1, strHTMLError: "" });
          }
          OnSubmit(e) {
            e.preventDefault(), this.CommitChanges(e.currentTarget);
          }
          async CommitChanges(e) {
            this.setState({ bSaving: !0, strHTMLError: "" });
            let i = await Zt("showcases", new FormData(e));
            i.strHTMLError
              ? this.setState({ strHTMLError: i.strHTMLError })
              : this.setState({ strHTMLError: "" }),
              this.setState({ bSaving: !1 });
          }
          RevertChanges() {
            window.location.href = H.ProfileURL;
          }
          componentDidMount() {
            this.props.elShowcases &&
              ((this.props.elShowcases.style.display = ""),
              this.m_refDiv.current.appendChild(this.props.elShowcases));
          }
          render() {
            const { bSaving: e, strHTMLError: i } = this.state,
              { ProfileTheme: s } = this.props;
            return (0, t.jsx)(ua, {
              Theme: s.ActiveTheme,
              children: (0, t.jsxs)("form", {
                onSubmit: this.OnSubmit,
                children: [
                  (0, t.jsx)(I.Y9, {
                    children: (0, l.we)("#Profile_Edit_FeaturedShowcase"),
                  }),
                  (0, t.jsx)(I.a3, {
                    children: (0, l.oW)(
                      "#Profile_Edit_Showcase_Instructions",
                      (0, t.jsx)("a", {
                        href:
                          v.TS.STORE_BASE_URL + "points/shop/profileshowcases",
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
        Yr([j.oI], hr.prototype, "OnSubmit", 1),
          Yr([j.oI], hr.prototype, "RevertChanges", 1);
        let pr, vr, fr;
        async function Pa(r) {
          let e = (0, v.Tc)("config", "profile_config");
          e && Object.assign(H, e),
            (pr = new bi(
              (0, v.Tc)("profile-edit", "profile_edit_config"),
              (0, v.Tc)("profile-badges", "profile_edit_config"),
              r,
            )),
            (0, ge.nA)(v.TS.EREALM) || pr.Profile.GroupList.GetUserGroups(),
            (vr = document.getElementById("showcases"));
        }
        function ya(r) {
          const [e, i] = u.useState(!1),
            s = (0, Yt.TR)();
          if (
            (u.useEffect(() => {
              fr || (fr = Pa(s)), fr.then(() => i(!0));
            }, [s]),
            u.useLayoutEffect(() => {
              if (e)
                for (let U of [
                  "profile_edit_main_content",
                  "profile_edit_leftcol",
                ]) {
                  let N = document.getElementById(U);
                  N && (N.style.visibility = "");
                }
            }, [e]),
            !e)
          )
            return null;
          const a = r.match.url,
            o = pr,
            {
              Profile: n,
              ProfileItems: h,
              ProfileTheme: f,
              EmoticonStore: C,
            } = o,
            R = _r,
            k = {
              ProfileModifierAvailable: () => h.BHasAnyProfileModifiers(),
              BadgesAvailable: () =>
                !(0, ge.nA)(v.TS.EREALM) && o.ProfileBadges.Badges.length > 0,
              GroupsAvailable: () =>
                !(0, ge.nA)(v.TS.EREALM) &&
                (n.GroupList.BGroupsLoaded()
                  ? n.GroupList.BHasAnyGroups()
                  : !0),
              ShowcasesAvailable: () => vr != null,
            };
          return (0, t.jsxs)(t.Fragment, {
            children: [
              (0, t.jsx)(oa, { ProfileItems: h }),
              (0, t.jsx)(sr, { Profile: n }),
              (0, t.jsx)(rs, { Profile: n, ProfileItems: h }),
              (0, t.jsx)(ra, {
                root: a,
                currentPath: r.location.pathname,
                linksAvailable: k,
                children: (0, t.jsxs)(re.dO, {
                  children: [
                    (0, t.jsx)(re.qh, {
                      path: `${a}${R.Info()}`,
                      children: (0, t.jsx)(ir, {
                        Profile: n,
                        EmoticonStore: C,
                      }),
                    }),
                    (0, t.jsx)(re.qh, {
                      path: `${a}${R.Avatar()}`,
                      children: (0, t.jsx)(Xt, {
                        Profile: n,
                        ProfileItems: h,
                        OGGAvatars: o.OGGAvatarStore,
                        AvatarHistory: o.AvatarHistory,
                      }),
                    }),
                    (0, t.jsx)(re.qh, {
                      path: `${a}${R.Background()}`,
                      children: (0, t.jsx)(ot, {
                        ProfileTheme: f,
                        ProfileItems: h,
                      }),
                    }),
                    (0, t.jsx)(re.qh, {
                      path: `${a}${R.MiniProfile()}`,
                      children: (0, t.jsx)(xt, { ProfileEdit: o }),
                    }),
                    (0, t.jsx)(re.qh, {
                      path: `${a}${R.Theme()}`,
                      children: (0, t.jsx)(mt, {
                        ProfileTheme: f,
                        ProfileItems: h,
                      }),
                    }),
                    (0, t.jsx)(re.qh, {
                      path: `${a}${R.ProfileModifier()}`,
                      children: (0, t.jsx)(lt, { ProfileItems: h }),
                    }),
                    !(0, ge.nA)(v.TS.EREALM) &&
                      (0, t.jsx)(re.qh, {
                        path: `${a}${R.FavoriteBadge()}`,
                        children: (0, t.jsx)(it, { Badges: o.ProfileBadges }),
                      }),
                    !(0, ge.nA)(v.TS.EREALM) &&
                      (0, t.jsx)(re.qh, {
                        path: `${a}${R.FavoriteGroup()}`,
                        children: (0, t.jsx)(st, { Profile: n }),
                      }),
                    (0, t.jsx)(re.qh, {
                      path: `${a}${R.Privacy()}`,
                      children: (0, t.jsx)(dr, {
                        PrivacyStore: o.ProfilePrivacy,
                      }),
                    }),
                    (0, t.jsx)(re.qh, {
                      path: `${a}${R.Showcases()}`,
                      children: (0, t.jsx)(hr, {
                        elShowcases: vr,
                        ProfileTheme: f,
                      }),
                    }),
                    (0, t.jsx)(re.qh, {
                      children: (0, t.jsx)(re.rd, { to: `${a}${R.Info()}` }),
                    }),
                  ],
                }),
              }),
            ],
          });
        }
        var Aa = m(9591),
          Ca = m(76006),
          Sa = m(20076),
          xa = m(16114),
          wa = m(46085),
          Pe = m(26072),
          Bt = m(16277),
          ja = m(29385),
          Ia = m(61739),
          Ba = m(85599);
        function Ea(r) {
          const [e, i] = (0, u.useState)(!1),
            s = Ga(r.steamid),
            a = Ra(r.steamid),
            o = (0, u.useRef)(null),
            n = (0, u.useRef)(null),
            [h, f] = (0, u.useState)(!1),
            C = (0, wa.KQ)(r.steamid),
            R = async () => {
              var N, J;
              if ((f(!0), !o.current)) return;
              const Be = o.current.value,
                We = parseInt(Be) * 86400,
                Et = Math.floor(new Date().getTime() / 1e3) + We,
                Gt =
                  (J = (N = n.current) == null ? void 0 : N.checked) != null
                    ? J
                    : !1;
              await a.mutateAsync({
                rtCooldownEnds: Et,
                bClearOpenReports: Gt,
              }),
                i(!1),
                f(!1);
            },
            k = async () => {
              await a.mutateAsync({ rtCooldownEnds: 0 }), i(!1);
            };
          let U = "";
          if (s.isSuccess && s.data > 0) {
            const N = Math.floor((s.data - new Date().getTime() / 1e3) / 86400);
            U = " " + Pe.u.Localize("#setcooldown_cooldownsummary", N);
          }
          return (0, t.jsxs)(t.Fragment, {
            children: [
              (0, t.jsx)(Ir.EN, {
                active: e,
                children: (0, t.jsxs)(Ir.o0, {
                  onCancel: () => i(!1),
                  onOK: R,
                  strTitle: Pe.u.Localize("#setcooldown_dialogtitle"),
                  strDescription: Pe.u.Localize(
                    "#setcooldown_dialogdescription",
                  ),
                  strOKButtonText: Pe.u.Localize("#setcooldown_setbutton"),
                  bOKDisabled: h,
                  children: [
                    s.isLoading &&
                      (0, t.jsxs)("p", {
                        children: [
                          (0, t.jsx)(Ba.t, { size: "small" }),
                          " ",
                          Pe.u.Localize("#setcooldown_loading"),
                        ],
                      }),
                    s.isError &&
                      (0, t.jsx)("p", {
                        children: Pe.u.Localize("#setcooldown_errorloading"),
                      }),
                    s.isSuccess &&
                      s.data > 0 &&
                      (0, t.jsx)("p", {
                        children: Pe.u.Localize(
                          "#setcooldown_expireson",
                          (0, xa.P0)(s.data, !1, ""),
                        ),
                      }),
                    s.isSuccess &&
                      s.data === 0 &&
                      (0, t.jsx)("p", {
                        children: Pe.u.Localize("#setcooldown_nocooldown"),
                      }),
                    C.isSuccess &&
                      !!C.data &&
                      (0, t.jsx)(t.Fragment, {
                        children: (0, t.jsx)("p", {
                          children: Pe.u.Localize(
                            "#setcooldown_statssummary",
                            C.data.total_acquitted_reports,
                            C.data.total_reports,
                            C.data.acquitted_reports_in_last_week,
                            C.data.reports_in_last_week,
                          ),
                        }),
                      }),
                    (0, t.jsxs)("p", {
                      children: [
                        (0, t.jsxs)("label", {
                          children: [
                            Pe.u.Localize("#setcooldown_newcooldownlabel"),
                            " ",
                            (0, t.jsx)("input", {
                              type: "number",
                              min: "0",
                              placeholder: Pe.u.Localize("#setcooldown_days"),
                              ref: o,
                            }),
                          ],
                        }),
                        (0, t.jsxs)("p", {
                          children: [
                            (0, t.jsx)("input", { type: "checkbox", ref: n }),
                            " ",
                            Pe.u.Localize("#setcooldown_clearopenreports"),
                          ],
                        }),
                        (0, t.jsx)("button", {
                          disabled: h,
                          onClick: k,
                          children: Pe.u.Localize("#setcooldown_clearcooldown"),
                        }),
                      ],
                    }),
                  ],
                }),
              }),
              (0, t.jsxs)("a", {
                className: "popup_menu_item",
                onClick: () => i(!0),
                children: ["Reporting Cooldown", U],
              }),
            ],
          });
        }
        function Ga(r) {
          const e = (0, Yt.KV)();
          return (0, Je.I)({
            queryKey: ["reportercooldown", r],
            queryFn: async () => {
              var i;
              const s = ue.w.Init(Bt.a9);
              s.Body().set_steamid(r);
              const a = await Bt.fL.GetReporterCooldown(e, s);
              if (!a.BSuccess()) throw new Error("EResult " + a.GetEResult());
              return (i = a.Body().rtime_cooldown_ends()) != null ? i : 0;
            },
          });
        }
        function Ra(r) {
          const e = (0, Yt.KV)(),
            i = (0, ja.jE)();
          return (0, Ia.n)({
            mutationFn: async (s) => {
              const a = ue.w.Init(Bt.f0);
              a.Body().set_steamid(r),
                a.Body().set_rtime_cooldown_ends(s.rtCooldownEnds),
                s.bClearOpenReports !== void 0 &&
                  a.Body().set_acquit_unresolved_reports(s.bClearOpenReports);
              const o = await Bt.fL.UpdateReporterCooldown(e, a);
              if (!o.BSuccess()) throw new Error("EResult " + o.GetEResult());
            },
            onSuccess: async () => {
              await i.invalidateQueries({ queryKey: ["reportercooldown", r] });
            },
          });
        }
        const Na = {
            ProfileEdit: () => "edit",
            ProfilePrivacy: () => "edit/settings",
            Games: () => "games",
            ItemCollection: () => "itemcollection",
          },
          _r = {
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
        function ba(r) {
          return (0, t.jsx)("div", {
            children: (0, t.jsx)(Ca.Ay, { targetType: Aa.Pw.BZ }),
          });
        }
        function La(r) {
          const e = r.match.path;
          return (0, t.jsxs)(re.dO, {
            children: [
              (0, t.jsx)(re.qh, {
                path: `${e}/${Na.ProfileEdit()}`,
                render: (i) => (0, t.jsx)(ya, { ...i }),
              }),
              (0, t.jsx)(re.qh, {
                path: `${e}`,
                render: (i) =>
                  (0, t.jsx)(Sa.X, {
                    config: {
                      "profile-rewards": () => (0, t.jsx)(ba, { ...i }),
                      "reporter-cooldown-dialog": (s) =>
                        (0, t.jsx)(Ea, { ...s }),
                    },
                  }),
              }),
            ],
          });
        }
      },
      46085: (w, xe, m) => {
        "use strict";
        m.d(xe, {
          EC: () => le,
          KQ: () => te,
          Kt: () => Ee,
          Ky: () => K,
          N8: () => E,
          OI: () => x,
          YL: () => G,
          c3: () => v,
          lY: () => Me,
          w3: () => T,
          wy: () => c,
          y4: () => Q,
        });
        var t = m(72604),
          H = m(35038),
          $ = m(98112),
          y = m(16277),
          d = m(68312),
          F = m(88942),
          ne = m(29385),
          ee = m(61739),
          S = m(86392);
        const u = "get_reported_content",
          l = "get_reported_content_by_id",
          b = "get_reported_content_audit_log",
          x = (P) => [u, JSON.stringify(P)],
          p = (P) => [l, P],
          O = (P) => [b, P];
        async function K(P, A) {
          return Promise.all([
            P.invalidateQueries({ queryKey: [u], exact: !1 }),
            P.invalidateQueries({ queryKey: p(A) }),
            P.invalidateQueries({ queryKey: O(A) }),
          ]);
        }
        function _(P, A) {
          return {
            queryKey: x(A),
            enabled: (0, S.NX)(A),
            queryFn: async () => {
              const D = H.w.Init(y.Mw);
              D.Body().set_coordinates(y.UC.fromObject(A));
              const B = await y.fL.GetReportedContent(P, D);
              if (!B.BSuccess())
                throw new Error(
                  "Failed in GetReportedContent, EResult: " + B.GetEResult(),
                );
              return B.Body().toObject();
            },
          };
        }
        function T(P) {
          const A = (0, d.KV)();
          return (0, F.I)(_(A, P));
        }
        function z(P, A) {
          return {
            queryKey: p(A),
            queryFn: async () => {
              const D = CProtoBufMsg.Init(
                CContentModeration_GetReportedContentByID_Request,
              );
              D.Body().set_reported_content_id(A);
              const B = await ContentModerationService.GetReportedContentByID(
                P,
                D,
              );
              if (!B.BSuccess())
                throw new Error(
                  "Failed in GetReportedContentByID, EResult: " +
                    B.GetEResult(),
                );
              return B.Body().toObject();
            },
          };
        }
        function ae(P) {
          const A = useActiveServiceTransport();
          return useQuery(z(A, P));
        }
        function W(P, A) {
          return {
            queryKey: O(A),
            queryFn: async () => {
              if (!A) return;
              const D = H.w.Init(y.v5);
              return (
                D.Body().set_reported_content_id(A),
                (await y.fL.GetAuditLogByID(P, D)).Body().toObject()
              );
            },
          };
        }
        function Ee(P) {
          const A = (0, d.KV)();
          return (0, F.I)(W(A, P));
        }
        function Me(P) {
          const A = (0, d.KV)(),
            D = (0, ne.jE)();
          return (0, ee.n)({
            mutationFn: async (B) => {
              const q = H.w.Init(y.Qi);
              q.Body().set_reported_content_id(P),
                q.Body().set_new_level(B.eNewLevel),
                B.eReason && q.Body().set_reason(B.eReason),
                B.strNote && q.Body().set_note(B.strNote);
              const V = await y.fL.EscalateSubjectByID(A, q);
              if (V.GetEResult() !== t.R)
                throw new Error(`Failed to escalate subject: ${V.GetEMsg()}`);
            },
            onSuccess: async () => {
              await Promise.all([
                K(D, P),
                D.invalidateQueries({ queryKey: ["get_claimed"] }),
                D.invalidateQueries({ queryKey: ["get_subject_overview"] }),
              ]);
            },
          });
        }
        function E() {
          const P = (0, d.KV)(),
            A = (0, ne.jE)();
          return (0, ee.n)({
            mutationFn: async (D) => {
              const B = H.w.Init(y.Nr);
              B.Body().set_reported_content_id(D.reportedContentID);
              const q = await y.fL.SustainModerationByID(P, B);
              if (!q.BSuccess()) throw new Error("EResult " + q.GetEResult());
            },
            onSuccess: async (D, B) => {
              await K(A, B.reportedContentID),
                await A.invalidateQueries({ queryKey: ["get_claimed"] });
            },
          });
        }
        function G(P) {
          const A = (0, ne.jE)(),
            D = (0, d.KV)();
          return (0, ee.n)({
            mutationKey: ["release_subject", ...P],
            mutationFn: async () => {
              const B = H.w.Init(y.GD);
              for (const V of P) {
                const ve = new y.F9();
                ve.set_reported_content_id(V),
                  B.Body().add_subjects_to_release(ve);
              }
              const q = await y.fL.ReleaseSubjects(D, B);
              if (!q.BSuccess()) throw new Error("EResult " + q.GetEResult());
            },
            onSuccess: async () => {
              await Promise.all([
                A.invalidateQueries({ queryKey: ["get_claimed"] }),
                A.invalidateQueries({ queryKey: ["get_subject_overview"] }),
                ...P.map((B) => K(A, B)),
              ]);
            },
          });
        }
        function Q(P, A) {
          const D = (0, d.KV)(),
            B = (0, ne.jE)();
          return (0, ee.n)({
            mutationFn: async () => {
              const q = H.w.Init(y.LW);
              q.Body().set_reported_content_id(P), q.Body().set_details(A);
              const V = await y.fL.OwnerDisputeModeration(D, q);
              if (!V.BSuccess()) throw new Error("EResult " + V.GetEResult());
            },
            onSuccess: async () => {
              await K(B, P);
            },
          });
        }
        function c(P, A) {
          const D = (0, ne.jE)(),
            B = (0, d.KV)();
          return (0, ee.n)({
            mutationFn: async () => {
              const q = H.w.Init(y.ps);
              q.Body().set_reported_content_id(P),
                q.Body().set_owner_dispute_details(A);
              const V = await y.fL.UpdateSubjectByID(B, q);
              if (!V.BSuccess()) throw new Error("EResult " + V.GetEResult());
            },
            onSuccess: async () => {
              await K(D, P);
            },
          });
        }
        function Z(P, A) {
          return {
            queryKey: ["reporterstats", A],
            queryFn: async () => {
              const D = H.w.Init(y.KD);
              D.Body().set_steamid(A);
              const B = await y.fL.GetReporterStats(P, D);
              if (!B.BSuccess()) throw new Error("EResult " + B.GetEResult());
              return B.Body().toObject();
            },
          };
        }
        function te(P) {
          const A = (0, d.KV)();
          return (0, F.I)(Z(A, P));
        }
        function le(P, A, D) {
          const B = (0, d.KV)(),
            q = (0, ne.jE)();
          return (0, ee.n)({
            mutationFn: async (V) => {
              const ve = H.w.Init($.Er);
              ve.Body().set_steamid(P),
                ve.Body().set_comment_thread_id(A),
                ve.Body().set_gidcomment(D),
                ve.Body().set_reason(V.reason),
                ve.Body().set_note(V.message);
              for (const ze of V.sanctions) {
                const Ge = new $.u6();
                Ge.set_sanction(ze.sanction),
                  ze.days && Ge.set_days(ze.days),
                  ve.Body().add_sanctions(Ge);
              }
              const Qe = await $.BE.SanctionComment(B, ve);
              if (!Qe.BSuccess())
                throw new Error(
                  `SanctionComment failed. EResult: ${Qe.GetEResult()} (${Qe.GetErrorMessage()})`,
                );
            },
            onSuccess: async () => {
              await q.invalidateQueries({ queryKey: ["get_claimed"] });
            },
          });
        }
        function v(P, A, D) {
          const B = (0, d.KV)(),
            q = (0, ne.jE)();
          return (0, ee.n)({
            mutationFn: async () => {
              const V = H.w.Init($.RX);
              V.Body().set_steamid(P),
                V.Body().set_comment_thread_id(A),
                V.Body().set_gidcomment(D),
                V.Body().set_report_action($.du.Pn),
                V.Body().set_resolve(!0),
                await $.Vi.UpdateCommentReportState(B, V);
            },
            onSuccess: async () => {
              await q.invalidateQueries({ queryKey: ["get_claimed"] });
            },
          });
        }
      },
      88363: (w, xe, m) => {
        "use strict";
        m.d(xe, {
          Fj: () => H,
          R$: () => F,
          Zx: () => $,
          hs: () => ee,
          o5: () => y,
          sr: () => ne,
        });
        const t = 1,
          H = 2,
          $ = 4,
          y = 8,
          d = 256,
          F = 512,
          ne = 1024,
          ee = 2048,
          S = 4096,
          u = 8192;
      },
      5858: (w, xe, m) => {
        "use strict";
        m.d(xe, { Z: () => O, dV: () => ee.d, rO: () => p, tp: () => ee.t });
        var t = m(14947),
          H = m(31561),
          $ = m(85528),
          y = m(18210),
          d = m(99412),
          F = m(88363),
          ne = m(3166),
          ee = m(35413),
          S = Object.defineProperty,
          u = Object.getOwnPropertyDescriptor,
          l = (K, _, T) =>
            _ in K
              ? S(K, _, {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: T,
                })
              : (K[_] = T),
          b = (K, _, T, z) => {
            for (
              var ae = z > 1 ? void 0 : z ? u(_, T) : _, W = K.length - 1, Ee;
              W >= 0;
              W--
            )
              (Ee = K[W]) && (ae = (z ? Ee(_, T, ae) : Ee(ae)) || ae);
            return z && ae && S(_, T, ae), ae;
          },
          x = (K, _, T) => l(K, typeof _ != "symbol" ? _ + "" : _, T);
        function p(K) {
          let _ = "offline";
          return (
            K &&
              (K.is_ingame
                ? (_ = "ingame")
                : K.m_broadcastAccountId
                  ? (_ = "watchingbroadcast")
                  : K.is_online && (_ = "online"),
              K.is_awayOrSnooze && (_ += " awayOrSnooze")),
            _
          );
        }
        class O {
          constructor(_) {
            x(this, "m_steamid"),
              x(this, "m_bInitialized", !1),
              x(this, "m_ePersonaState", d.cU3),
              x(this, "m_unGamePlayedAppID", 0),
              x(this, "m_gameid", "0"),
              x(this, "m_unPersonaStateFlags", 0),
              x(this, "m_strPlayerName", ""),
              x(this, "m_strAvatarHash", ee.d),
              x(this, "m_strAccountName", ""),
              x(this, "m_rtLastSeenOnline", 0),
              x(this, "m_strGameExtraInfo", ""),
              x(this, "m_unGameServerIP", 0),
              x(this, "m_unGameServerPort", 0),
              x(this, "m_game_lobby_id", ""),
              x(this, "m_bPlayerNamePending", !1),
              x(this, "m_bAvatarPending", !1),
              x(this, "m_broadcastId"),
              x(this, "m_broadcastAccountId"),
              x(this, "m_broadcastAppId"),
              x(this, "m_broadcastViewerCount"),
              x(this, "m_strBroadcastTitle"),
              x(this, "m_bCommunityBanned"),
              x(this, "m_eGamingDeviceType", d.eSB),
              x(this, "m_mapRichPresence", t.sH.map()),
              x(this, "m_bNameInitialized", !1),
              x(this, "m_bStatusInitialized", !1),
              x(this, "m_strProfileURL"),
              (0, t.Gn)(this),
              (this.m_steamid = _);
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
            var _;
            return (
              (((_ = this.m_unPersonaStateFlags) != null ? _ : 0) & F.Fj) != 0
            );
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
          HasStateFlag(_) {
            var T;
            return (
              (((T = this.m_unPersonaStateFlags) != null ? T : 0) & _) != 0
            );
          }
          get last_seen_online() {
            return this.m_rtLastSeenOnline;
          }
          ClearStateOnDisconnect() {
            this.m_ePersonaState != d.cU3 && this.Reset();
          }
          get is_golden() {
            return this.HasStateFlag(F.Zx);
          }
          GetCurrentGameName() {
            return this.m_strGameExtraInfo
              ? this.m_strGameExtraInfo
              : this.m_unGamePlayedAppID
                ? $.Vw.GetAppInfo(this.m_unGamePlayedAppID).name
                : "";
          }
          GetCurrentGameIconURL() {
            return this.m_unGamePlayedAppID
              ? $.Vw.GetAppInfo(this.m_unGamePlayedAppID).icon_url
              : "";
          }
          BIsAppInfoReady() {
            return this.m_unGamePlayedAppID
              ? $.Vw.GetAppInfo(this.m_unGamePlayedAppID).is_initialized
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
              let _ = $.Vw.GetRichPresenceLoc(this.m_unGamePlayedAppID);
              if (_) {
                let T = this.m_mapRichPresence.get("steam_display");
                return _.Localize(T, this.m_mapRichPresence);
              }
            } else if (this.HasStateFlag(F.o5))
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
            const _ = 60,
              T = _ * 60,
              z = T * 24;
            let ae = 1e3;
            const W =
              $.Vw.CMInterface.GetServerRTime32() - this.last_seen_online;
            return (
              W > z ? (ae *= T) : W > 2 * T ? (ae *= _) : (ae *= _ / 4), ae
            );
          }
          GetOfflineStatusTime() {
            if (this.last_seen_online == 0)
              return (0, y.we)("#PersonaStateOffline");
            let _ = this.GetOfflineStatusUpdateRate();
            (!ne.TS.IN_MOBILE || _ <= 60) && (0, H.tB)(_);
            let T = $.Vw.CMInterface.GetServerRTime32() - this.last_seen_online;
            return T < 60
              ? (0, y.we)("#PersonaStateLastSeen_JustNow")
              : (0, y.we)("#PersonaStateLastSeen", (0, y.Hq)(T));
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
            return this.m_strAvatarHash != ee.d;
          }
          get avatar_url() {
            return (0, ee.t)(this.m_strAvatarHash);
          }
          get avatar_url_medium() {
            return (0, ee.t)(this.m_strAvatarHash, "medium");
          }
          get avatar_url_full() {
            return (0, ee.t)(this.m_strAvatarHash, "full");
          }
          static SortStatusComparator(_, T, z) {
            if (T.has_public_party_beacon) {
              if (!z.has_public_party_beacon) return -1;
            } else {
              if (z.has_public_party_beacon) return 1;
              if (T.is_ingame)
                if (z.is_ingame)
                  if (_) {
                    if (T.is_awayOrSnooze) {
                      if (!z.is_awayOrSnooze) return 1;
                    } else if (z.is_awayOrSnooze) return -1;
                  } else return 0;
                else return -1;
              else if (z.is_ingame) return 1;
            }
            if (T.is_online) {
              if (!z.is_online) return -1;
            } else if (z.is_online) return 1;
            if (_) {
              if (T.is_awayOrSnooze) {
                if (!z.is_awayOrSnooze) return 1;
              } else if (z.is_awayOrSnooze) return -1;
            }
            return 0;
          }
          GetCommunityProfileURL() {
            return this.m_strProfileURL
              ? `${ne.TS.COMMUNITY_BASE_URL}id/${this.m_strProfileURL}/`
              : `${ne.TS.COMMUNITY_BASE_URL}profiles/${this.m_steamid.ConvertTo64BitString()}/`;
          }
        }
        b([t.sH], O.prototype, "m_bInitialized", 2),
          b([t.sH], O.prototype, "m_ePersonaState", 2),
          b([t.sH], O.prototype, "m_unGamePlayedAppID", 2),
          b([t.sH], O.prototype, "m_gameid", 2),
          b([t.sH], O.prototype, "m_unPersonaStateFlags", 2),
          b([t.sH], O.prototype, "m_strPlayerName", 2),
          b([t.sH], O.prototype, "m_strAvatarHash", 2),
          b([t.sH], O.prototype, "m_strAccountName", 2),
          b([t.sH], O.prototype, "m_rtLastSeenOnline", 2),
          b([t.sH], O.prototype, "m_strGameExtraInfo", 2),
          b([t.sH], O.prototype, "m_unGameServerIP", 2),
          b([t.sH], O.prototype, "m_unGameServerPort", 2),
          b([t.sH], O.prototype, "m_game_lobby_id", 2),
          b([t.sH], O.prototype, "m_bPlayerNamePending", 2),
          b([t.sH], O.prototype, "m_bAvatarPending", 2),
          b([t.sH], O.prototype, "m_broadcastId", 2),
          b([t.sH], O.prototype, "m_broadcastAccountId", 2),
          b([t.sH], O.prototype, "m_broadcastAppId", 2),
          b([t.sH], O.prototype, "m_broadcastViewerCount", 2),
          b([t.sH], O.prototype, "m_strBroadcastTitle", 2),
          b([t.sH], O.prototype, "m_bCommunityBanned", 2),
          b([t.sH], O.prototype, "m_eGamingDeviceType", 2),
          b([t.sH], O.prototype, "m_bNameInitialized", 2);
      },
      46943: (w, xe, m) => {
        "use strict";
        m.d(xe, { Ul: () => ae, i8: () => W });
        var t = m(7850),
          H = m(90626),
          $ = m(75844),
          y = m(5858),
          d = m(36707),
          F = m(3166),
          ne = m(13465);
        const ee =
            "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD//gA7Q1JFQVRPUjogZ2QtanBlZyB2MS4wICh1c2luZyBJSkcgSlBFRyB2NjIpLCBxdWFsaXR5ID0gOTAK/9sAQwADAgIDAgIDAwMDBAMDBAUIBQUEBAUKBwcGCAwKDAwLCgsLDQ4SEA0OEQ4LCxAWEBETFBUVFQwPFxgWFBgSFBUU/9sAQwEDBAQFBAUJBQUJFA0LDRQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQU/8AAEQgAIAAgAwEiAAIRAQMRAf/EAB8AAAEFAQEBAQEBAAAAAAAAAAABAgMEBQYHCAkKC//EALUQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+v/EAB8BAAMBAQEBAQEBAQEAAAAAAAABAgMEBQYHCAkKC//EALURAAIBAgQEAwQHBQQEAAECdwABAgMRBAUhMQYSQVEHYXETIjKBCBRCkaGxwQkjM1LwFWJy0QoWJDThJfEXGBkaJicoKSo1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoKDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uLj5OXm5+jp6vLz9PX29/j5+v/aAAwDAQACEQMRAD8A/P4mW5nmllmeSR3LMzMSSc1a07R73V72KzsILi9u5TiOC2RpJHPoFGSarQ/ef6n+de4fAn9oaL4D+DfGX9i6Uf8AhO9XSKDT9eZY3WxiDZcBGByTkn0JCZBxQB41qeiX+iXslnqNtdWF3H9+3uo2jkX6q2CKpgy208MsUzxyI4ZWViCDmvsr9rrUdT1j9nb4T6h8RBbH4qXUs0zMsSxXJ04hivnKoAU5MPGBg7uM7q+NpvvJ9R/OgAh+8/1P867T4POI/iz4Mc6U+u7NZtG/suPbuu8TKfKG4hct93njnmuKIltp5opYXjkRyrKykEHNWbDVbvSr63vbKaezvLeRZYbi3ZkkidTlWVhyCCMgjpQB6l+1F411nx58dPFWpa5a3mnXaXP2ZNOvXVpLKNBhYflJUY5PB5JJ6k15LN95PqP51a1PWr7WtQnvtRuLm/vrhzJNc3TtJLIx6lmbJJ9zVQCW5nhiiheSR3CqqqSSc0Af/9k=",
          S =
            "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD//gA7Q1JFQVRPUjogZ2QtanBlZyB2MS4wICh1c2luZyBJSkcgSlBFRyB2NjIpLCBxdWFsaXR5ID0gODAK/9sAQwAGBAUGBQQGBgUGBwcGCAoQCgoJCQoUDg8MEBcUGBgXFBYWGh0lHxobIxwWFiAsICMmJykqKRkfLTAtKDAlKCko/9sAQwEHBwcKCAoTCgoTKBoWGigoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgo/8AAEQgAQABAAwEiAAIRAQMRAf/EAB8AAAEFAQEBAQEBAAAAAAAAAAABAgMEBQYHCAkKC//EALUQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+v/EAB8BAAMBAQEBAQEBAQEAAAAAAAABAgMEBQYHCAkKC//EALURAAIBAgQEAwQHBQQEAAECdwABAgMRBAUhMQYSQVEHYXETIjKBCBRCkaGxwQkjM1LwFWJy0QoWJDThJfEXGBkaJicoKSo1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoKDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uLj5OXm5+jp6vLz9PX29/j5+v/aAAwDAQACEQMRAD8A8Inmk8+T94/3j/EfWmedJ/z0f/vo0T/6+T/eP86ZQA/zpP8Ano//AH0aPOk/56P/AN9GmVo6Loeq65M0Wj6ddXrr94QRF9v1I6fjQBR86T/no/8A30aPOk/56P8A99GtHW/Dus6GV/tjS7yyD8K00RVW+h6GsugB/nSf89H/AO+jT4JpPPj/AHj/AHh/EfWoafB/r4/94fzoAJ/9fJ/vH+dMp8/+vk/3j/OmUAXdE099W1mw06Jgsl3PHApPYswUH9a+qPF3iHSPhF4S0+003TxK0hMcEAbZvIA3SO2OvIz6k18nW88ttcRz28jxTRMHSRGKsrA5BBHQg1b1TWdT1fy/7V1G8vfLzs+0TNJtz1xknHQUAfUXw+8c6Z8UdN1HS9V0xIpUTM1s7eYkiE43KcAgg/lxg180+NtEHhzxZqmkqxdLWcojHqUPK598EV9CfBbwpF4G8J3fiLxA4trm5hEsnmceRCOQD/tHqR9B1r568a63/wAJH4r1TVghRLqYuinqE6KD74AoAxafB/r4/wDeH86ZT4P9fH/vD+dABP8A6+T/AHj/ADplPn/18n+8f50ygArt/gtpltq/xK0e2vYxJArPMUYZDFEZhn2yBXEV0/w203VNX8YWdloOoHTtQkWQx3IZl2gISeV55AI/GgD1H9pvxPdi/s/DcDGOz8pbqfHWRizBQfYbc/U+1eD12PxW0fWtE8Tpa+I9UOqXpt0cTl2bCEthctz1B/OuOoAKfB/r4/8AeH86ZT4P9fH/ALw/nQAT/wCvk/3j/OmVNPDJ58n7t/vH+E+tM8mT/nm//fJoAZV7Q9Xv9C1KLUNJuGtryMEJIoBIyCD1BHQmqnkyf883/wC+TR5Mn/PN/wDvk0AaHiHXtT8RX4vdau2u7oIIxIygHaCSBwB6msyn+TJ/zzf/AL5NHkyf883/AO+TQAynwf6+P/eH86PJk/55v/3yafBDJ58f7t/vD+E+tAH/2Q==",
          u =
            m.p +
            "images/applications/community/avatar_default_full.jpg?v=valveisgoodatcaching";
        var l = m(43047),
          b = m.n(l),
          x = m(71742),
          p = Object.defineProperty,
          O = Object.getOwnPropertyDescriptor,
          K = (E, G, Q) =>
            G in E
              ? p(E, G, {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: Q,
                })
              : (E[G] = Q),
          _ = (E, G, Q, c) => {
            for (
              var Z = c > 1 ? void 0 : c ? O(G, Q) : G, te = E.length - 1, le;
              te >= 0;
              te--
            )
              (le = E[te]) && (Z = (c ? le(G, Q, Z) : le(Z)) || Z);
            return c && Z && p(G, Q, Z), Z;
          },
          T = (E, G, Q) => K(E, typeof G != "symbol" ? G + "" : G, Q);
        function z(E) {
          switch (E) {
            case "X-Small":
            case "Small":
              return ee;
            case "Medium":
            case "MediumLarge":
              return S;
            case "Large":
            case "X-Large":
            case "FillArea":
              return u;
            default:
              return (0, x.z_)(E, `Unhandled size ${E}`), S;
          }
        }
        const ae = H.memo(function (G) {
          const {
              strAvatarURL: Q,
              size: c = "Medium",
              className: Z,
              statusStyle: te,
              statusPosition: le,
              children: v,
              ...P
            } = G,
            A = H.useMemo(() => {
              const D = [];
              return Q && D.push(Q), D.push(z(c)), D;
            }, [Q, c]);
          return (0, t.jsxs)("div", {
            className: (0, d.A)(
              b().avatarHolder,
              "avatarHolder",
              "no-drag",
              c,
              Z,
            ),
            ...P,
            children: [
              (0, t.jsx)("div", {
                className: (0, d.A)(b().avatarStatus, "avatarStatus", le),
                style: te,
              }),
              (0, t.jsx)(ne.c, {
                className: (0, d.A)(b().avatar, "avatar"),
                rgSources: A,
                draggable: !1,
              }),
              v,
            ],
          });
        });
        let W = class extends H.Component {
          render() {
            const {
              persona: E,
              size: G = "Medium",
              animatedAvatar: Q,
              className: c,
              strBackupAvatarURL: Z,
              ...te
            } = this.props;
            let le = "";
            return (
              Q && Q.image_small && Q.image_small.length != 0
                ? (le =
                    F.TS.MEDIA_CDN_COMMUNITY_URL + "images/" + Q.image_small)
                : E
                  ? ((le = E.avatar_url_medium),
                    G == "Small" || G == "X-Small"
                      ? (le = E.avatar_url)
                      : (G == "Large" || G == "X-Large" || G == "FillArea") &&
                        (le = E.avatar_url_full))
                  : Z && (le = Z),
              (0, t.jsx)(ae, {
                strAvatarURL: le,
                size: G,
                className: (0, d.A)((0, y.rO)(E), c),
                ...te,
              })
            );
          }
        };
        W = _([$.PA], W);
        const Ee = (0, $.PA)((E) => {
          const {
            profileItem: G,
            className: Q,
            bDisableAnimation: c,
            ...Z
          } = E;
          if (!G || !G.image_small || G.image_small.length == 0) return null;
          let te = c ? G.image_large : G.image_small;
          return (
            te || (te = G.image_small),
            te.startsWith("https://") ||
              (te = F.TS.MEDIA_CDN_COMMUNITY_URL + "images/" + te),
            (0, t.jsx)("div", {
              className: (0, d.A)(b().avatarFrame, Q, "avatarFrame"),
              ...Z,
              children: (0, t.jsx)("img", {
                className: b().avatarFrameImg,
                src: te,
              }),
            })
          );
        });
        let Me = class extends H.Component {
          constructor(E) {
            super(E),
              T(this, "m_timer"),
              (this.state = { bAnimate: this.props.loopDuration != "None" }),
              (this.m_timer = 0);
          }
          componentDidMount() {
            this.props.bParentHovered || this.SetupAnimationTimer();
          }
          SetupAnimationTimer() {
            let E = 0;
            switch (this.props.loopDuration) {
              case "Short":
                E = 2500;
                break;
              case "Medium":
                E = 5e3;
                break;
              case "Long":
                E = 1e4;
                break;
            }
            E != 0 &&
              (this.setState({ bAnimate: this.props.loopDuration != "None" }),
              (this.m_timer = window.setTimeout(
                () => this.setState({ bAnimate: !1 }),
                E,
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
          componentDidUpdate(E) {
            this.props.loopDuration != E.loopDuration &&
              (this.props.loopDuration == "None"
                ? (this.setState({ bAnimate: !1 }), this.StopAnimationTimer())
                : this.props.loopDuration == "Infinite"
                  ? (this.setState({ bAnimate: !0 }), this.StopAnimationTimer())
                  : (this.setState({ bAnimate: !0 }),
                    this.SetupAnimationTimer())),
              this.props.bParentHovered != E.bParentHovered &&
                (this.props.bParentHovered &&
                this.props.loopDuration != "None" &&
                this.props.loopDuration != "Infinite"
                  ? (this.setState({ bAnimate: !0 }), this.StopAnimationTimer())
                  : this.state.bAnimate && this.SetupAnimationTimer());
          }
          render() {
            let {
              loopDuration: E,
              animatedAvatar: G,
              avatarFrame: Q,
              children: c,
              style: Z,
              bLimitProfileFrameAnimationTime: te,
              bParentHovered: le,
              ...v
            } = this.props;
            v.onClick && (Z = { ...Z, cursor: "pointer" });
            const P = this.state.bAnimate && G != null ? G : void 0;
            return (0, t.jsx)("div", {
              onMouseEnter: () =>
                this.setState({ bAnimate: this.props.loopDuration != "None" }),
              onMouseLeave: () => this.SetupAnimationTimer(),
              children: (0, t.jsxs)(W, {
                animatedAvatar: P,
                ...v,
                children: [
                  c,
                  (0, t.jsx)(Ee, {
                    profileItem: Q != null ? Q : null,
                    bDisableAnimation: te && !this.state.bAnimate,
                  }),
                ],
              }),
            });
          }
        };
        Me = _([$.PA], Me);
      },
      35471: (w) => {
        w.exports = {
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
      45301: (w) => {
        w.exports = {
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
      27456: (w) => {
        w.exports = { FilteredNameWarning: "WMztNH2YVTVVxIq6OxSLt" };
      },
      90713: (w) => {
        w.exports = {
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
      53841: (w) => {
        w.exports = {
          Group: "_1yHxtA_qbj9xWiLkUiovpE",
          GroupAvatar: "_1C_n640PvrV_-DCXwOeCZY",
          GroupDetails: "aUFBJvbETNq6EL-n8KopY",
          Active: "_12sHAG2Fad1srfzqUDKzBF",
          FavoriteGroup: "_2XwzRFYfrwfarnDmtGb8Hj",
          GroupOption: "_3neyrJugKgECRdGVuulTG5",
        };
      },
      30082: (w) => {
        w.exports = {
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
      26075: (w) => {
        w.exports = {
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
      78091: (w) => {
        w.exports = {
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
          BackgroundAnimation: "_2KBoHhvcLeo2vQwWuj0IRb",
          "ItemFocusAnim-darkerGrey-nocolor": "tmP6KcnuW7UY3GT67_yjy",
          "ItemFocusAnim-darkerGrey": "_2z9xuC0Na9M0VX4xEFjoSR",
          "ItemFocusAnim-darkGreySettings": "_2AOpRetkacszHSv5tq9OQa",
          "ItemFocusAnim-darkGrey": "_1X0OQa5fPKjWOsHz5d-xAO",
          "ItemFocusAnim-grey": "X_zua7jreE_f2rGbT4l-O",
          "ItemFocusAnim-translucent-white-10": "_3PmOIuJLR5U9VhCcOub_Uz",
          "ItemFocusAnim-translucent-white-20": "YMb3o1HrEEjr7vA9uSIUi",
          "ItemFocusAnimBorder-darkGrey": "_1zSKntJJ3QOyql8hDShLJz",
          "ItemFocusAnim-green": "_1fvU-7Mr4_64KzW_eUa87u",
          focusAnimation: "_1gK9ZDrO_OJkKiiO1p7daU",
          hoverAnimation: "MK_YH9374l4-TSjBSAaxv",
        };
      },
      49622: (w) => {
        w.exports = {
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
      38945: (w) => {
        w.exports = {
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
      20644: (w) => {
        w.exports = {
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
      19838: (w) => {
        w.exports = {
          "duration-app-launch": "800ms",
          formattingButtons: "_2T2D7Afq6aW35s3wV5Tgkz",
          formattingButton: "LhNoIaEKN1cIpOrnt59wq",
          summaryTextArea: "_2ipSt29jAqoPXf-_iTAL0-",
          summaryContainer: "_3sH5hzWvrCU2QOKpNxfq3m",
          BackgroundAnimation: "iQhnWyYlwgFi5YWYBMwJ4",
          "ItemFocusAnim-darkerGrey-nocolor": "_12rtn7LW8NeHZuOZRYrQUr",
          "ItemFocusAnim-darkerGrey": "_3ASpBDSwq0FQWK7k3PCaCE",
          "ItemFocusAnim-darkGreySettings": "_2imfEHKAKkMI4e0U6blAKg",
          "ItemFocusAnim-darkGrey": "_2eY89CR3ALmqkaa5c8qJnd",
          "ItemFocusAnim-grey": "mGBoBubSOBDji6ZhWGlSk",
          "ItemFocusAnim-translucent-white-10": "jQ_HCKVuc3Rbnyna4TT6k",
          "ItemFocusAnim-translucent-white-20": "_31vG8GURxLO6NzzoGFspfp",
          "ItemFocusAnimBorder-darkGrey": "_3y-gKQtRDkvMB_jhfgrSpC",
          "ItemFocusAnim-green": "_2CI6zPlogHCygbXcFwfdub",
          focusAnimation: "_3JagW-WJua436yyI1Rep86",
          hoverAnimation: "TNBcq_UtYAx1mhBY2fZD9",
        };
      },
      31270: (w) => {
        w.exports = {
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
      56420: (w) => {
        w.exports = {
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
      85198: (w) => {
        w.exports = {
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
      70342: (w) => {
        w.exports = {
          "duration-app-launch": "800ms",
          narrowWidth: "500px",
          PersonaStatusIcon: "KxAI_M9gWx3OnKSshHOs6",
          MobilePhoneIcon: "_1iRFj5lJrMqMnRb3GZYPSw",
          SteamDeckIcon: "_2oLqcfqHHKKAK0WfzjXMg_",
          VRIcon: "_368tz9TSOLGiG2mNMLScMz",
          BackgroundAnimation: "_3EMAF_7GAyPW8G7OSt8s0z",
          "ItemFocusAnim-darkerGrey-nocolor": "_3fWOpZpfDmwOCKEdw8xcqf",
          "ItemFocusAnim-darkerGrey": "_2Tvf1f8cUg1eYlQg027B3W",
          "ItemFocusAnim-darkGreySettings": "_1tKhhjTYPWAz5_eQe91O1A",
          "ItemFocusAnim-darkGrey": "_1l7IyrCH5ez4PBO7R4h8RT",
          "ItemFocusAnim-grey": "_3X7_M9NEYzjKEgQRMQevkQ",
          "ItemFocusAnim-translucent-white-10": "_3YCxpOEfjLuLbB1hut87fZ",
          "ItemFocusAnim-translucent-white-20": "_2kvhksXgWA4vxGz5Oy1tV1",
          "ItemFocusAnimBorder-darkGrey": "_3N1wGZIJ5QySTBWgyBavuM",
          "ItemFocusAnim-green": "Vgab6fHUHvZ-iWKRJwy8h",
          focusAnimation: "GvE_FaPqTf1D0HASx1C_0",
          hoverAnimation: "_88lGefJsUDJUpRFJ3pUq7",
        };
      },
      43047: (w) => {
        w.exports = {
          narrowWidth: "500px",
          avatarHolder: "nibodjvvrm86uCfnnAn4g",
          avatarStatus: "_3xUpb5DWXPFNcHHIcv-9pe",
          avatar: "_3h-QRJGxnVOIExtHD1R0f2",
          avatarFrame: "X_mJE4BYV5StDPwZhSiAu",
          avatarFrameImg: "_3fM0F85j3aWVzr4RJM9-eu",
        };
      },
      19939: (w) => {
        w.exports = {
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
