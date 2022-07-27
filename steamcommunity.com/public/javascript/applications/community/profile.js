/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(window.webpackJsonp = window.webpackJsonp || []).push([
  [121],
  {
    "042x": function (e, t, r) {
      e.exports = {
        ProfileModifierPreview: "profilemodifier_ProfileModifierPreview_OhBEt",
        ProfileModifierOption: "profilemodifier_ProfileModifierOption_3NIiY",
        Preview: "profilemodifier_Preview_2GvFU",
        Active: "profilemodifier_Active_3nePJ",
        Details: "profilemodifier_Details_v3Wjr",
        BlankBackground: "profilemodifier_BlankBackground_Gd3-p",
        Title: "profilemodifier_Title_3be6D",
        App: "profilemodifier_App_2SYZ_",
      };
    },
    "1TsT": function (e, t, r) {
      "use strict";
      r.d(t, "a", function () {
        return c;
      });
      var i = !(
        "undefined" == typeof window ||
        !window.document ||
        !window.document.createElement
      );
      var a = void 0;
      function o() {
        return (
          void 0 === a &&
            (a = (function () {
              if (!i) return !1;
              if (
                !window.addEventListener ||
                !window.removeEventListener ||
                !Object.defineProperty
              )
                return !1;
              var e = !1;
              try {
                var t = Object.defineProperty({}, "passive", {
                    get: function () {
                      e = !0;
                    },
                  }),
                  r = function () {};
                window.addEventListener("testPassiveEventSupport", r, t),
                  window.removeEventListener("testPassiveEventSupport", r, t);
              } catch (e) {}
              return e;
            })()),
          a
        );
      }
      function n(e) {
        e.handlers === e.nextHandlers && (e.nextHandlers = e.handlers.slice());
      }
      function s(e) {
        (this.target = e), (this.events = {});
      }
      (s.prototype.getEventHandlers = function (e, t) {
        var r,
          i =
            String(e) +
            " " +
            String(
              (r = t)
                ? !0 === r
                  ? 100
                  : (r.capture << 0) + (r.passive << 1) + (r.once << 2)
                : 0
            );
        return (
          this.events[i] ||
            ((this.events[i] = { handlers: [], handleEvent: void 0 }),
            (this.events[i].nextHandlers = this.events[i].handlers)),
          this.events[i]
        );
      }),
        (s.prototype.handleEvent = function (e, t, r) {
          var i = this.getEventHandlers(e, t);
          (i.handlers = i.nextHandlers),
            i.handlers.forEach(function (e) {
              e && e(r);
            });
        }),
        (s.prototype.add = function (e, t, r) {
          var i = this,
            a = this.getEventHandlers(e, r);
          n(a),
            0 === a.nextHandlers.length &&
              ((a.handleEvent = this.handleEvent.bind(this, e, r)),
              this.target.addEventListener(e, a.handleEvent, r)),
            a.nextHandlers.push(t);
          var o = !0;
          return function () {
            if (o) {
              (o = !1), n(a);
              var s = a.nextHandlers.indexOf(t);
              a.nextHandlers.splice(s, 1),
                0 === a.nextHandlers.length &&
                  (i.target &&
                    i.target.removeEventListener(e, a.handleEvent, r),
                  (a.handleEvent = void 0));
            }
          };
        });
      var l = "__consolidated_events_handlers__";
      function c(e, t, r, i) {
        e[l] || (e[l] = new s(e));
        var a = (function (e) {
          if (e) return o() ? e : !!e.capture;
        })(i);
        return e[l].add(t, r, a);
      }
    },
    "5y7u": function (e, t, r) {
      e.exports = {
        AvatarCollectionHeader: "avatarcollection_AvatarCollectionHeader_27Q-8",
        AvatarCollectionName: "avatarcollection_AvatarCollectionName_2pum1",
        AvatarCollection: "avatarcollection_AvatarCollection_1UoAv",
        AvatarCollectionSingleRowWrapper:
          "avatarcollection_AvatarCollectionSingleRowWrapper_1vTT_",
        ExpandButtonContainer: "avatarcollection_ExpandButtonContainer_1gQbx",
        AvatarCollectionSingleRow:
          "avatarcollection_AvatarCollectionSingleRow_BT8Zj",
        AvatarRowSpacer: "avatarcollection_AvatarRowSpacer_3g0nr",
        AvatarPreview: "avatarcollection_AvatarPreview_29CGQ",
        Large: "avatarcollection_Large_1aa4C",
        FramePreview: "avatarcollection_FramePreview_16w1D",
        DefaultAvatarFrame: "avatarcollection_DefaultAvatarFrame_Z3REH",
        DefaultAvatarFrameContent:
          "avatarcollection_DefaultAvatarFrameContent_2TBs_",
        CollectionGroup: "avatarcollection_CollectionGroup_2kbA6",
        Title: "avatarcollection_Title_2Gy0L",
        Primary: "avatarcollection_Primary_24kML",
        CollectionGroupAvatars: "avatarcollection_CollectionGroupAvatars_wWso7",
      };
    },
    "6dn6": function (e, t, r) {
      e.exports = {
        formattingButtons: "summary_formattingButtons_2T2D7",
        formattingButton: "summary_formattingButton_LhNoI",
        summaryTextArea: "summary_summaryTextArea_2ipSt",
      };
    },
    "8Uds": function (e, t, r) {
      e.exports = {
        DefaultTheme: "profilethemecolors_DefaultTheme_tedMf",
        CosmicTheme: "profilethemecolors_CosmicTheme_17vHy",
        SummerTheme: "profilethemecolors_SummerTheme_2skFv",
        MidnightTheme: "profilethemecolors_MidnightTheme_M8Pf4",
        DarkModeTheme: "profilethemecolors_DarkModeTheme_2p-_x",
        SteelTheme: "profilethemecolors_SteelTheme_xdD8L",
        PinkTealTheme: "profilethemecolors_PinkTealTheme_3M7cl",
        MutedRedTheme: "profilethemecolors_MutedRedTheme_3lp4R",
        SteamGreenTheme: "profilethemecolors_SteamGreenTheme_335yQ",
        BlueRedTheme: "profilethemecolors_BlueRedTheme_2wH82",
        GoldBurgundyTheme: "profilethemecolors_GoldBurgundyTheme_YGKfX",
        VibrantBlueTheme: "profilethemecolors_VibrantBlueTheme_3DOwB",
        GoldenProfileDebutTheme:
          "profilethemecolors_GoldenProfileDebutTheme_3BHT2",
        WinterProfile2020Theme:
          "profilethemecolors_WinterProfile2020Theme_3jPiA",
        GoldenWeekProfile2021Theme:
          "profilethemecolors_GoldenWeekProfile2021Theme_24NEV",
        Summer2021Theme: "profilethemecolors_Summer2021Theme_2bB_m",
        MutedBlueTheme: "profilethemecolors_MutedBlueTheme_3-7Wk",
        GoldTheme: "profilethemecolors_GoldTheme_l3sX-",
        BurntOrangeTheme: "profilethemecolors_BurntOrangeTheme_37pNJ",
        FlatGreyTheme: "profilethemecolors_FlatGreyTheme_2AFCa",
        PurpleTheme: "profilethemecolors_PurpleTheme_KM8jQ",
        GreenSlimeTheme: "profilethemecolors_GreenSlimeTheme_FdC8c",
        GhostTheme: "profilethemecolors_GhostTheme_1JZpe",
        ColorNightmareTheme: "profilethemecolors_ColorNightmareTheme_2LNsd",
        MurugiahTheme: "profilethemecolors_MurugiahTheme_22BXC",
        Winter2021Theme: "profilethemecolors_Winter2021Theme_X0_g8",
        Lunar2022Theme: "profilethemecolors_Lunar2022Theme_1NSMH",
        SteamDeckTheme: "profilethemecolors_SteamDeckTheme_2aDQK",
      };
    },
    "9g5v": function (e, t, r) {
      e.exports = {
        ProfileThemePicker: "profiletheme_ProfileThemePicker_37I7q",
        ThemePickerDisabled: "profiletheme_ThemePickerDisabled_1gBl2",
        ProfileThemePreviewCtn: "profiletheme_ProfileThemePreviewCtn_3PwJq",
        ThemesDisabledNotice: "profiletheme_ThemesDisabledNotice_3GOAI",
        Notice: "profiletheme_Notice_2fpuQ",
        ProfileTheme: "profiletheme_ProfileTheme_39ksj",
        Option: "profiletheme_Option_2aQ08",
        Details: "profiletheme_Details_mHggM",
        Preview: "profiletheme_Preview_36oSt",
        Active: "profiletheme_Active_1axzt",
        PreviewCtn: "profiletheme_PreviewCtn_33SnK",
        EditBackground: "profiletheme_EditBackground_1idPP",
        PaintRadial0: "profiletheme_PaintRadial0_18laV",
        PaintRadial1: "profiletheme_PaintRadial1_W_TqK",
        ProfilePreview: "profiletheme_ProfilePreview_MneEO",
      };
    },
    EImw: function (e, t, r) {
      e.exports = {
        miniProfile: "miniprofile_miniProfile_2QPdq",
        miniProfileContent: "miniprofile_miniProfileContent_1xTAT",
        miniProfileHeader: "miniprofile_miniProfileHeader_3CZcH",
        miniProfilePlayer: "miniprofile_miniProfilePlayer_2jZ0A",
        playerContent: "miniprofile_playerContent_2-pwJ",
        miniProfileBackground: "miniprofile_miniProfileBackground_3HzZh",
        miniProfileBackgroundBlur:
          "miniprofile_miniProfileBackgroundBlur_xUosY",
        miniProfileVideoBackground:
          "miniprofile_miniProfileVideoBackground_2Zqfb",
        miniProfileVideoBackgroundContainer:
          "miniprofile_miniProfileVideoBackgroundContainer_3MrYv",
        miniProfileBackdropBlur: "miniprofile_miniProfileBackdropBlur_1QhpY",
        miniProfileBlocked: "miniprofile_miniProfileBlocked_39Jef",
        miniProfileNotFriends: "miniprofile_miniProfileNotFriends_3Ea91",
        notFriends: "miniprofile_notFriends_2zgR7",
        SnoozeContainer: "miniprofile_SnoozeContainer_1cAsx",
        miniProfileHover: "miniprofile_miniProfileHover_2AWay",
        miniprofile_arrow: "miniprofile_miniprofile_arrow_1YsNo",
        left: "miniprofile_left_1qS_b",
        playerAvatar: "miniprofile_playerAvatar_36eQg",
        Frame: "miniprofile_Frame_2nPON",
        avatarStatus: "miniprofile_avatarStatus_1YdpX",
        miniProfileAvatarStatus: "miniprofile_miniProfileAvatarStatus_1k5Yk",
        personaName: "miniprofile_personaName_qiP8a",
        hasNickname: "miniprofile_hasNickname_2TAWS",
        personaNameLabel: "miniprofile_personaNameLabel_2VUw8",
        nickName: "miniprofile_nickName_h_So5",
        persona: "miniprofile_persona_3c5GO",
        personaAndIcons: "miniprofile_personaAndIcons_1p9kf",
        awayStatusLabel: "miniprofile_awayStatusLabel_1FgWI",
        nickname: "miniprofile_nickname_1SWhp",
        playerNicknameBracket: "miniprofile_playerNicknameBracket_3qa8c",
        notInOrWatchingGame: "miniprofile_notInOrWatchingGame_1NkB7",
        miniProfileBottom: "miniprofile_miniProfileBottom_26ga2",
        miniProfileGameContainer: "miniprofile_miniProfileGameContainer_7-U6j",
        gameLogo: "miniprofile_gameLogo_A0XYr",
        ingame: "miniprofile_ingame_24oQz",
        richPresence: "miniprofile_richPresence_39T3E",
        gameState: "miniprofile_gameState_3Hxc3",
        watchingbroadcast: "miniprofile_watchingbroadcast_3hSAG",
        watchingbroadcastThumbnail:
          "miniprofile_watchingbroadcastThumbnail_FmBWy",
        gameContent: "miniprofile_gameContent_3YwnZ",
        miniProfileFeaturedContainer:
          "miniprofile_miniProfileFeaturedContainer_1KDhd",
        favoriteBadgeIcon: "miniprofile_favoriteBadgeIcon_qP4hs",
        badgeIcon: "miniprofile_badgeIcon_1oWOa",
        featuredLabels: "miniprofile_featuredLabels_39har",
        friendPlayerLevelNum: "miniprofile_friendPlayerLevelNum_3vvwM",
        featuredTitle: "miniprofile_featuredTitle_2mCgt",
        mutualFriends: "miniprofile_mutualFriends_3AWk3",
        featuredSubTitle: "miniprofile_featuredSubTitle_3DelZ",
      };
    },
    EWA5: function (e, t, r) {
      e.exports = {
        Group: "favoritegroup_Group_1yHxt",
        GroupAvatar: "favoritegroup_GroupAvatar_1C_n6",
        GroupDetails: "favoritegroup_GroupDetails_aUFBJ",
        Active: "favoritegroup_Active_12sHA",
        FavoriteGroup: "favoritegroup_FavoriteGroup_2XwzR",
        GroupOption: "favoritegroup_GroupOption_3neyr",
      };
    },
    GEPe: function (e, t, r) {
      "use strict";
      r.r(t),
        r.d(t, "ProfileEditRoutes", function () {
          return qr;
        }),
        r.d(t, "default", function () {
          return Wr;
        });
      var i = r("q1tI"),
        a = r("EC67"),
        o = r("WplJ"),
        n = r("mrSG");
      let s = { ProfileURL: "" };
      var l = r("vDqi"),
        c = r.n(l),
        m = r("2vnA"),
        d = (r("mgoM"), r("u2yL")),
        p = r("WBba"),
        u = r("qD+2"),
        h = r("TyAF"),
        v = r("lkRc"),
        f = r("jUCX"),
        _ = r("TLQK"),
        g = r("URGX"),
        b = r("Gpul"),
        P = r("fOts"),
        E = r("exH9"),
        y = r("EImw"),
        C = r.n(y);
      const S = r("CdLH").f.PerMinute;
      class O {
        constructor(e) {
          (this.m_bLoadingData = !1),
            (this.m_rtLastLoad = 0),
            (this.m_accountid = e);
        }
        get community_data() {
          return this.m_communityData;
        }
        get community_data_ready() {
          return void 0 !== this.m_communityData;
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
            t = Date.now() > this.m_rtLastLoad + 1e3 * S;
          (!e || (t && !this.m_bLoadingData)) &&
            ((this.m_bLoadingData = !0),
            c.a
              .get(
                v.c.CHAT_BASE_URL +
                  "miniprofile/" +
                  this.m_accountid +
                  "/json/?origin=" +
                  Object(v.e)()
              )
              .then((e) => {
                let t = e.data;
                "number" == typeof t.level &&
                  "string" == typeof t.level_class &&
                  (this.m_communityData = t),
                  (this.m_bLoadingData = !1),
                  (this.m_rtLastLoad = Date.now());
              })
              .catch((e) => {
                this.m_bLoadingData = !1;
              }));
        }
      }
      Object(n.b)([m.C], O.prototype, "m_communityData", void 0);
      let A = class extends i.Component {
        render() {
          const { community_data: e } = this.props;
          let t = e && e.favorite_badge;
          return t
            ? i.createElement(
                "div",
                {
                  className: Object(E.a)(
                    C.a.miniProfileFeaturedContainer,
                    this.props.className
                  ),
                },
                i.createElement(
                  "div",
                  { className: C.a.favoriteBadgeIcon },
                  i.createElement("img", {
                    src: t.icon,
                    className: C.a.badgeIcon,
                  })
                ),
                i.createElement(
                  "div",
                  {
                    className: Object(E.a)(
                      C.a.featuredLabels,
                      C.a.favoriteBadgeDescription
                    ),
                  },
                  i.createElement(
                    "div",
                    { className: C.a.featuredTitle },
                    t.name
                  ),
                  i.createElement(
                    "div",
                    { className: C.a.featuredSubTitle },
                    Object(_.f)("#Hover_BadgeXP", t.xp)
                  )
                )
              )
            : null;
        }
      };
      A = Object(n.b)([h.a], A);
      let B = class extends i.Component {
        render() {
          const { community_data: e, className: t } = this.props;
          return e
            ? i.createElement(
                "div",
                { className: Object(E.a)(C.a.miniProfileFeaturedContainer, t) },
                i.createElement(
                  "div",
                  { className: e.level_class },
                  i.createElement(
                    "span",
                    { className: C.a.friendPlayerLevelNum },
                    e.level
                  )
                ),
                i.createElement(
                  "div",
                  { className: C.a.featuredLabels },
                  i.createElement(
                    "div",
                    { className: C.a.featuredTitle },
                    Object(_.f)("#Hover_SteamLevel") + " "
                  )
                )
              )
            : null;
        }
      };
      B = Object(n.b)([h.a], B);
      let w = class extends i.Component {
        render() {
          let e = this.props.persona;
          return i.createElement(
            "div",
            {
              className: Object(E.a)(
                C.a.miniProfileGameContainer,
                this.props.className
              ),
            },
            this.props.persona.GetCurrentGameLogoURL() &&
              i.createElement("img", {
                className: C.a.gameLogo,
                src: this.props.persona.GetCurrentGameLogoURL(),
              }),
            i.createElement(
              "div",
              {
                className: Object(E.a)(
                  C.a.gameContent,
                  C.a.persona,
                  C.a.ingame,
                  C.a.ellipsis
                ),
              },
              i.createElement(
                "div",
                { className: C.a.gameState },
                Object(_.f)(
                  e.is_in_nonsteam_game
                    ? "#PersonaStateInNonSteamGame"
                    : "#PersonaStateInGame"
                )
              ),
              this.props.persona.GetCurrentGameName(),
              this.props.persona.HasCurrentGameRichPresence() &&
                i.createElement(
                  "div",
                  { className: C.a.richPresence },
                  this.props.persona.GetCurrentGameRichPresence()
                ),
              this.props.in_game_section_additional
            )
          );
        }
      };
      w = Object(n.b)([h.a], w);
      let j = class extends i.Component {
        render() {
          let e,
            t,
            r = this.props.broadcast_description;
          return (
            r && ((e = Object(_.f)("#PersonaStateWatchingBroadcast")), (t = r)),
            i.createElement(
              "div",
              {
                className: Object(E.a)(
                  C.a.miniProfileGameContainer,
                  this.props.className
                ),
              },
              this.props.persona.GetBroadcastGameLogoURL() &&
                i.createElement("img", {
                  className: C.a.gameLogo,
                  src: this.props.persona.GetBroadcastGameLogoURL(),
                }),
              i.createElement(
                "div",
                {
                  className: Object(E.a)(
                    C.a.gameContent,
                    C.a.persona,
                    C.a.watchingbroadcast,
                    C.a.ellipsis
                  ),
                },
                i.createElement("div", { className: C.a.gameState }, e),
                t && i.createElement("div", { className: C.a.richPresence }, t),
                i.createElement(
                  "div",
                  { className: C.a.watchingbroadcastThumbnail },
                  this.props.broadcast_thumbnail
                )
              )
            )
          );
        }
      };
      j = Object(n.b)([h.a], j);
      let I = class extends i.Component {
        render() {
          const e = this.props,
            {
              className: t,
              persona: r,
              data_loader: a,
              community_data_override: o,
              nickname: s,
              is_friend: l,
              is_blocked: c,
              friend_relationship: m,
              broadcast_description: d,
              broadcast_thumbnail: p,
              mutual_friends: u,
              in_game_section_additional: h,
              bottom_section_additional: v,
            } = e,
            b = Object(n.c)(e, [
              "className",
              "persona",
              "data_loader",
              "community_data_override",
              "nickname",
              "is_friend",
              "is_blocked",
              "friend_relationship",
              "broadcast_description",
              "broadcast_thumbnail",
              "mutual_friends",
              "in_game_section_additional",
              "bottom_section_additional",
            ]);
          let y = a.community_data;
          o && (y = Object.assign(Object.assign({}, y), o));
          const S = Object.keys((y && y.profile_background) || {}).length > 0;
          let O,
            I = C.a.miniProfileContent;
          r.is_ingame
            ? (O = i.createElement(
                w,
                Object.assign({}, this.props, {
                  className: S ? C.a.miniProfileBackdropBlur : void 0,
                })
              ))
            : r.is_watchingbroadcast
            ? (O = i.createElement(
                j,
                Object.assign({}, this.props, {
                  className: S ? C.a.miniProfileBackdropBlur : void 0,
                })
              ))
            : (I += " " + C.a.notInOrWatchingGame);
          let L = !0,
            k = !1,
            T = !1;
          l || ((I += " " + C.a.notFriends), (L = !1)),
            c && ((I += " " + C.a.communicationBlocked), (T = !0));
          let R,
            M = void 0 !== s,
            F = r.is_awayOrSnooze;
          return (
            (R = M
              ? i.createElement(
                  "div",
                  null,
                  i.createElement(
                    "div",
                    { className: C.a.personaAndIcons },
                    i.createElement(
                      "div",
                      { className: Object(E.a)(C.a.personaName, C.a.nickName) },
                      i.createElement(
                        "div",
                        { className: C.a.personaNameLabel },
                        this.props.nickname
                      ),
                      i.createElement(
                        "div",
                        {
                          className: C.a.playerNicknameBracket,
                          title: Object(_.f)("#isNickname"),
                        },
                        "*"
                      )
                    ),
                    i.createElement(P.a, { persona: r })
                  ),
                  i.createElement(
                    "div",
                    {
                      className: Object(E.a)(C.a.personaName, C.a.hasNickname),
                    },
                    "(",
                    i.createElement(
                      "div",
                      { className: C.a.personaNameLabel },
                      r.m_strPlayerName
                    ),
                    ")"
                  )
                )
              : i.createElement(
                  "div",
                  { className: C.a.personaAndIcons },
                  i.createElement(
                    "div",
                    { className: C.a.personaName },
                    i.createElement(
                      "div",
                      { className: C.a.personaNameLabel },
                      r.m_strPlayerName
                    )
                  ),
                  i.createElement(P.a, { persona: r })
                )),
            2 == this.props.friend_relationship && (k = !0),
            i.createElement(
              i.Fragment,
              null,
              i.createElement(
                "div",
                Object.assign(
                  {
                    key: r.GetAccountID(),
                    className: Object(E.a)(
                      this.props.className,
                      C.a.miniProfile
                    ),
                  },
                  b
                ),
                i.createElement(
                  "div",
                  { className: I },
                  i.createElement(G, { community_data: y, persona: r }),
                  i.createElement(
                    "div",
                    { className: C.a.miniProfileHeader },
                    i.createElement(
                      "div",
                      {
                        className: Object(E.a)(
                          C.a.miniProfilePlayer,
                          r.online_state,
                          F && C.a.isAway,
                          Object(f.c)(r)
                        ),
                      },
                      i.createElement(N, {
                        persona: this.props.persona,
                        community_data: y,
                      }),
                      F &&
                        i.createElement(g.a, {
                          persona: r,
                          animating: !0,
                          className: C.a.SnoozeContainer,
                          size: "large",
                        }),
                      i.createElement(
                        "div",
                        { className: C.a.playerContent },
                        i.createElement(
                          "div",
                          { className: C.a.playerName },
                          i.createElement(
                            "div",
                            { className: C.a.persona },
                            R,
                            F &&
                              i.createElement(
                                "div",
                                { className: C.a.awayStatusLabel },
                                Object(_.f)("#PersonaStateAway")
                              ),
                            !r.is_online &&
                              i.createElement(
                                "div",
                                { className: C.a.awayStatusLabel },
                                this.props.persona.GetLocalizedOnlineStatus()
                              ),
                            "online" == r.online_state &&
                              !F &&
                              i.createElement(
                                "div",
                                { className: C.a.awayStatusLabel },
                                Object(_.f)("#PersonaStateOnline")
                              ),
                            !L &&
                              i.createElement(
                                "div",
                                { className: C.a.miniProfileNotFriends },
                                k
                                  ? Object(_.f)(
                                      "#Friend_Menu_NotAFriendRequesting"
                                    )
                                  : Object(_.f)("#Friend_Menu_NotAFriendLabel")
                              ),
                            T &&
                              i.createElement(
                                "div",
                                { className: C.a.miniProfileBlocked },
                                Object(_.f)("#PersonaStateBlocked")
                              )
                          )
                        )
                      )
                    )
                  ),
                  O,
                  i.createElement(
                    "div",
                    {
                      className: Object(E.a)(
                        C.a.miniProfileBottom,
                        S && C.a.miniProfileBackdropBlur
                      ),
                    },
                    i.createElement(A, { community_data: y }),
                    i.createElement(B, { community_data: y })
                  ),
                  v,
                  i.createElement(
                    "div",
                    { className: C.a.mutualFriends },
                    this.props.mutual_friends
                  )
                )
              )
            )
          );
        }
      };
      I = Object(n.b)([h.a], I);
      const G = ({ community_data: e, persona: t }) => {
          if (e && e.profile_background) {
            const t = e.profile_background,
              { image: r } = t,
              a = Object(n.c)(t, ["image"]);
            if (Object.keys(a).length)
              return i.createElement(
                "div",
                {
                  className: C.a.miniProfileVideoBackgroundContainer,
                  key: a["video/webm"] || a["video/mp4"] || "image",
                },
                i.createElement(
                  "video",
                  {
                    className: C.a.miniProfileVideoBackground,
                    playsInline: !0,
                    muted: !0,
                    autoPlay: !0,
                    loop: !0,
                    poster: r,
                  },
                  Object.keys(a).map((e) =>
                    i.createElement("source", { key: e, src: a[e], type: e })
                  )
                )
              );
            if (r)
              return i.createElement(
                "div",
                { className: C.a.miniProfileVideoBackgroundContainer },
                i.createElement("img", {
                  className: C.a.miniProfileVideoBackground,
                  src: r,
                })
              );
          }
          return i.createElement(
            "div",
            { className: C.a.miniProfileBackground },
            i.createElement("img", {
              className: C.a.miniProfileBackgroundBlur,
              src: t.avatar_url,
            })
          );
        },
        N = (e) => {
          const { persona: t, community_data: r, size: a } = e,
            o = Object(n.c)(e, ["persona", "community_data", "size"]),
            s =
              r &&
              r.avatar_frame &&
              i.createElement("img", {
                src: r.avatar_frame,
                className: C.a.Frame,
              }),
            l = r && r.animated_avatar,
            c = {
              size: a || "X-Large",
              statusPosition: "bottom",
              className: C.a.playerAvatar,
            };
          return l
            ? i.createElement(
                b.a,
                Object.assign({}, o, { strAvatarURL: l }, c),
                s
              )
            : i.createElement(b.b, Object.assign({ persona: t }, o, c), s);
        };
      var L = r("kLLr"),
        k = (r("wUwH"), r("a5LV")),
        T = r("UWWC"),
        R = r("bxBv"),
        M = (r("E4Op"), r("oFam")),
        F = r("0xSo"),
        D = r("qiKp");
      r("r64O");
      function x(e) {
        return z(e.image_small);
      }
      function U(e) {
        return z(e.image_large);
      }
      function H(e) {
        return (function (e, t, r) {
          return e
            ? e.image_large
              ? `${v.c.COMMUNITY_CDN_URL}economy/profilebackground/${e.image_large}?size=${t}x${r}`
              : null
            : `${v.c.COMMUNITY_CDN_URL}public/images/profile/2020/bg_dots.png`;
        })(e, 252, 160);
      }
      function q(e, t = !1) {
        let r = {},
          i = t
            ? (function (e) {
                return z(e.movie_webm_small) || z(e.movie_webm);
              })(e)
            : (function (e) {
                return z(e.movie_webm);
              })(e);
        i && (r["video/webm"] = i);
        let a = t
          ? (function (e) {
              return z(e.movie_mp4_small) || z(e.movie_mp4);
            })(e)
          : (function (e) {
              return z(e.movie_mp4);
            })(e);
        return a && (r["video/mp4"] = a), r;
      }
      function z(e) {
        return e ? `${v.c.MEDIA_CDN_COMMUNITY_URL}images/${e}` : null;
      }
      class W {
        constructor(e, t, r) {
          (this.m_Backgrounds = new $(this)),
            (this.m_MiniProfileBackgrounds = new $(this)),
            (this.m_Avatars = new $(this)),
            (this.m_AvatarFrames = new $(this)),
            (this.m_ProfileModifiers = new $(this)),
            (this.m_OnAvatarEquipmentChangedCallbacks = new D.a()),
            (this.m_mapGoldenProfileConfigByAppID = new Map()),
            (this.m_SteamInterface = e),
            (this.m_AppInfoStore = t);
          for (let e of r) this.m_mapGoldenProfileConfigByAppID.set(e.appid, e);
          this.Initialize();
        }
        get AppInfoStore() {
          return this.m_AppInfoStore;
        }
        GetOwnedBackgrounds() {
          return Object(n.a)(this, void 0, void 0, function* () {
            return (
              this.m_Backgrounds.m_rgOwnedItems ||
                (yield this.m_Backgrounds.SetItems(
                  (yield this.m_promiseOwned).Body().profile_backgrounds()
                )),
              this.m_Backgrounds.m_rgOwnedItems
            );
          });
        }
        GetEquippedBackground() {
          return (
            this.m_Backgrounds.m_bEquippedLoaded ||
              (() => {
                Object(n.a)(this, void 0, void 0, function* () {
                  return this.m_Backgrounds.LoadEquipped(
                    (yield this.m_promiseEquipped).Body().profile_background(!1)
                  );
                });
              })(),
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
        SetAndEquipProfileBackground(e) {
          return Object(n.a)(this, void 0, void 0, function* () {
            if (
              (this.m_Backgrounds.SetEquipped(e),
              this.m_Backgrounds.BIsUncomitted())
            ) {
              {
                let e = R.b.Init(M.m);
                e.Body().set_communityitemid(
                  this.m_Backgrounds.m_EquippedItem &&
                    this.m_Backgrounds.m_EquippedItem.communityitemid
                );
                let t = yield M.p.SetProfileBackground(
                  this.m_SteamInterface.GetServiceTransport(),
                  e
                );
                if (1 != t.GetEResult()) return t.GetEResult();
              }
              if (
                this.m_Backgrounds.m_EquippedItem &&
                this.m_Backgrounds.m_EquippedItem.communityitemid
              ) {
                let e = R.b.Init(M.j);
                e
                  .Body()
                  .set_communityitemid(
                    this.m_Backgrounds.m_EquippedItem.communityitemid
                  ),
                  e.Body().set_flags(this.m_Backgrounds.m_EquipFlags);
                let t = yield M.p.SetEquippedProfileItemFlags(
                  this.m_SteamInterface.GetServiceTransport(),
                  e
                );
                1 != t.GetEResult() &&
                  console.error(
                    `Error when calling PlayerService.SetEquippedProfileItemFlags: EResult=${t.GetEResult()}`
                  );
              }
            }
            return this.m_Backgrounds.SetComitted(), 1;
          });
        }
        RevertBackgroundChanges() {
          this.m_Backgrounds.Revert();
        }
        GetOwnedMiniProfileBackgrounds() {
          return Object(n.a)(this, void 0, void 0, function* () {
            return (
              this.m_MiniProfileBackgrounds.m_rgOwnedItems ||
                (yield this.m_MiniProfileBackgrounds.SetItems(
                  (yield this.m_promiseOwned).Body().mini_profile_backgrounds()
                )),
              this.m_MiniProfileBackgrounds.m_rgOwnedItems
            );
          });
        }
        GetEquippedMiniProfileBackground() {
          return (
            this.m_MiniProfileBackgrounds.m_bEquippedLoaded ||
              (() => {
                Object(n.a)(this, void 0, void 0, function* () {
                  return this.m_MiniProfileBackgrounds.LoadEquipped(
                    (yield this.m_promiseEquipped)
                      .Body()
                      .mini_profile_background(!1)
                  );
                });
              })(),
            this.m_MiniProfileBackgrounds.m_EquippedItem
          );
        }
        SetEquippedMiniProfileBackground(e) {
          this.m_MiniProfileBackgrounds.SetEquipped(e);
        }
        BIsMiniProfileBackgroundUncomitted() {
          return this.m_MiniProfileBackgrounds.BIsUncomitted();
        }
        CommitMiniProfileChanges() {
          return Object(n.a)(this, void 0, void 0, function* () {
            if (this.m_MiniProfileBackgrounds.BIsUncomitted()) {
              let e = R.b.Init(M.l);
              e.Body().set_communityitemid(
                this.m_MiniProfileBackgrounds.m_EquippedItem &&
                  this.m_MiniProfileBackgrounds.m_EquippedItem.communityitemid
              );
              let t = yield M.p.SetMiniProfileBackground(
                this.m_SteamInterface.GetServiceTransport(),
                e
              );
              if (1 != t.GetEResult()) return t.GetEResult();
            }
            return (
              this.m_MiniProfileBackgrounds.SetComitted(),
              this.m_OnAvatarEquipmentChangedCallbacks.Dispatch(),
              1
            );
          });
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
        CommitAvatarChanges() {
          return Object(n.a)(this, void 0, void 0, function* () {
            let e, t;
            if (this.m_Avatars.BIsUncomitted()) {
              let t = R.b.Init(M.h);
              t
                .Body()
                .set_communityitemid(
                  this.m_Avatars.m_EquippedItem &&
                    this.m_Avatars.m_EquippedItem.communityitemid
                ),
                (e = M.p.SetAnimatedAvatar(
                  this.m_SteamInterface.GetServiceTransport(),
                  t
                ));
            }
            if (this.m_AvatarFrames.BIsUncomitted()) {
              let e = R.b.Init(M.i);
              e
                .Body()
                .set_communityitemid(
                  this.m_AvatarFrames.m_EquippedItem &&
                    this.m_AvatarFrames.m_EquippedItem.communityitemid
                ),
                (t = M.p.SetAvatarFrame(
                  this.m_SteamInterface.GetServiceTransport(),
                  e
                ));
            }
            const [r, i] = yield Promise.all([e, t]);
            return r && 1 != r.GetEResult()
              ? r.GetEResult()
              : i && 1 != i.GetEResult()
              ? i.GetEResult()
              : (this.m_Avatars.SetComitted(),
                this.m_AvatarFrames.SetComitted(),
                this.m_OnAvatarEquipmentChangedCallbacks.Dispatch(),
                1);
          });
        }
        RevertAvatarChanges() {
          this.m_Avatars.Revert(), this.m_AvatarFrames.Revert();
        }
        AddOnAvatarEquipmentChangedCallback(e) {
          this.m_OnAvatarEquipmentChangedCallbacks.Register(e);
        }
        GetOwnedAvatars() {
          return Object(n.a)(this, void 0, void 0, function* () {
            return (
              this.m_Avatars.m_rgOwnedItems ||
                (yield this.m_Avatars.SetItems(
                  (yield this.m_promiseOwned).Body().animated_avatars()
                )),
              this.m_Avatars.m_rgOwnedItems
            );
          });
        }
        GetEquippedAvatar() {
          return (
            this.m_Avatars.m_bEquippedLoaded ||
              (() => {
                Object(n.a)(this, void 0, void 0, function* () {
                  return this.m_Avatars.LoadEquipped(
                    (yield this.m_promiseEquipped).Body().animated_avatar(!1)
                  );
                });
              })(),
            this.m_Avatars.m_EquippedItem
          );
        }
        GetCommittedEquippedAvatar() {
          return (
            this.m_Avatars.m_bEquippedLoaded ||
              (() => {
                Object(n.a)(this, void 0, void 0, function* () {
                  return this.m_Avatars.LoadEquipped(
                    (yield this.m_promiseEquipped).Body().animated_avatar(!1)
                  );
                });
              })(),
            this.m_Avatars.m_CommittedEquippedItem
          );
        }
        SetEquippedAvatar(e, t = !1) {
          this.m_Avatars.SetEquipped(e, t);
        }
        GetOwnedAvatarFrames() {
          return Object(n.a)(this, void 0, void 0, function* () {
            return (
              this.m_AvatarFrames.m_rgOwnedItems ||
                (yield this.m_AvatarFrames.SetItems(
                  (yield this.m_promiseOwned).Body().avatar_frames()
                )),
              this.m_AvatarFrames.m_rgOwnedItems
            );
          });
        }
        GetEquippedAvatarFrame() {
          return (
            this.m_AvatarFrames.m_bEquippedLoaded ||
              (() => {
                Object(n.a)(this, void 0, void 0, function* () {
                  return this.m_AvatarFrames.LoadEquipped(
                    (yield this.m_promiseEquipped).Body().avatar_frame(!1)
                  );
                });
              })(),
            this.m_AvatarFrames.m_EquippedItem
          );
        }
        GetCommittedEquippedAvatarFrame() {
          return (
            this.m_AvatarFrames.m_bEquippedLoaded ||
              (() => {
                Object(n.a)(this, void 0, void 0, function* () {
                  return this.m_AvatarFrames.LoadEquipped(
                    (yield this.m_promiseEquipped).Body().avatar_frame(!1)
                  );
                });
              })(),
            this.m_AvatarFrames.m_CommittedEquippedItem
          );
        }
        SetEquippedAvatarFrame(e) {
          this.m_AvatarFrames.SetEquipped(e);
        }
        GetOwnedProfileModifiers() {
          return Object(n.a)(this, void 0, void 0, function* () {
            return (
              this.m_ProfileModifiers.m_rgOwnedItems ||
                (yield this.m_ProfileModifiers.SetItems(
                  (yield this.m_promiseOwned).Body().profile_modifiers()
                )),
              this.m_ProfileModifiers.m_rgOwnedItems
            );
          });
        }
        GetEquippedProfileModifier() {
          return (
            this.m_ProfileModifiers.m_bEquippedLoaded ||
              (() => {
                Object(n.a)(this, void 0, void 0, function* () {
                  return this.m_ProfileModifiers.LoadEquipped(
                    (yield this.m_promiseEquipped).Body().profile_modifier(!1)
                  );
                });
              })(),
            this.m_ProfileModifiers.m_EquippedItem
          );
        }
        GetCommittedEquippedProfileModifier() {
          return (
            this.m_ProfileModifiers.m_bEquippedLoaded ||
              (() => {
                Object(n.a)(this, void 0, void 0, function* () {
                  return this.m_ProfileModifiers.LoadEquipped(
                    (yield this.m_promiseEquipped).Body().profile_modifier(!1)
                  );
                });
              })(),
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
          let e = R.b.Init(M.d);
          e.Body().set_steamid(v.j.steamid),
            e.Body().set_language(v.c.LANGUAGE),
            (this.m_promiseEquipped = M.p.GetProfileItemsEquipped(
              this.m_SteamInterface.GetServiceTransport(),
              e
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
        CommitProfileModifierChanges() {
          return Object(n.a)(this, void 0, void 0, function* () {
            if (this.m_ProfileModifiers.BIsUncomitted()) {
              let e = !1;
              if (
                this.m_ProfileModifiers.m_CommittedEquippedItem &&
                this.m_ProfileModifiers.m_CommittedEquippedItem !=
                  this.m_ProfileModifiers.m_EquippedItem
              ) {
                let t = R.b.Init(F.a);
                t
                  .Body()
                  .set_communityitemid(
                    this.m_ProfileModifiers.m_CommittedEquippedItem
                      .communityitemid
                  ),
                  t
                    .Body()
                    .set_appid(
                      this.m_ProfileModifiers.m_CommittedEquippedItem.appid
                    ),
                  t.Body().set_activate(!1);
                let r = yield F.e.ActivateProfileModifierItem(
                  this.m_SteamInterface.GetServiceTransport(),
                  t
                );
                if (1 != r.GetEResult()) return r.GetEResult();
                e = !0;
              }
              if (this.m_ProfileModifiers.m_EquippedItem) {
                let t = R.b.Init(F.a);
                t
                  .Body()
                  .set_communityitemid(
                    this.m_ProfileModifiers.m_EquippedItem.communityitemid
                  ),
                  t
                    .Body()
                    .set_appid(this.m_ProfileModifiers.m_EquippedItem.appid),
                  t.Body().set_activate(!0);
                let r = yield F.e.ActivateProfileModifierItem(
                  this.m_SteamInterface.GetServiceTransport(),
                  t
                );
                if (1 != r.GetEResult()) return r.GetEResult();
                e = !0;
              }
              this.m_ProfileModifiers.SetComitted(),
                e &&
                  Object(m.G)(() => {
                    this.ReloadEquippedItems();
                  });
            }
            return 1;
          });
        }
        BIsLegacyGoldenProfile(e) {
          return this.m_mapGoldenProfileConfigByAppID.has(e);
        }
        GetGoldenProfileConfigValue(e) {
          let t = this.GetEquippedProfileModifier();
          if (!t) return null;
          let r = this.m_mapGoldenProfileConfigByAppID.get(t.appid);
          return r ? r[e] : null;
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
        Initialize() {
          return Object(n.a)(this, void 0, void 0, function* () {
            let e = R.b.Init(M.e);
            e.Body().set_language(v.c.LANGUAGE),
              (this.m_promiseOwned = M.p.GetProfileItemsOwned(
                this.m_SteamInterface.GetServiceTransport(),
                e
              ));
            let t = R.b.Init(M.d);
            t.Body().set_steamid(v.j.steamid),
              t.Body().set_language(v.c.LANGUAGE),
              (this.m_promiseEquipped = M.p.GetProfileItemsEquipped(
                this.m_SteamInterface.GetServiceTransport(),
                t
              ));
          });
        }
      }
      Object(n.b)([m.k], W.prototype, "RevertBackgroundChanges", null),
        Object(n.b)(
          [m.k],
          W.prototype,
          "RevertMiniProfileBackgroundChanges",
          null
        ),
        Object(n.b)([m.k], W.prototype, "RevertAvatarChanges", null),
        Object(n.b)([m.k], W.prototype, "ReloadEquippedItems", null);
      class $ {
        constructor(e) {
          (this.m_bEquippedLoaded = !1),
            (this.m_bUnsavedChanges = !1),
            (this.m_parent = e);
        }
        GetOwnedItemCount() {
          return this.m_cItemsOwned;
        }
        SetItems(e) {
          return Object(n.a)(this, void 0, void 0, function* () {
            let t = e.map((e) => e.toObject());
            (this.m_rgOwnedItems = (yield this.FillAppNames(t)).reverse()),
              (this.m_cItemsOwned = this.m_rgOwnedItems.length);
          });
        }
        LoadEquipped(e) {
          return Object(n.a)(this, void 0, void 0, function* () {
            if (void 0 !== e && e.communityitemid()) {
              let t = e.toObject();
              if (t) {
                let [e] = yield this.FillAppNames([t]);
                Object(m.G)(() => {
                  (this.m_CommittedEquippedItem = this.m_EquippedItem = e),
                    (this.m_EquipFlags = e && e.equipped_flags);
                });
              }
              this.m_bEquippedLoaded = !0;
            }
          });
        }
        SetEquipped(e, t = !1) {
          (this.m_EquippedItem = e),
            (this.m_bEquippedLoaded = !0),
            t
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
              (this.m_CommittedEquippedItem.equipped_flags = this.m_EquipFlags);
        }
        Revert() {
          (this.m_EquippedItem = this.m_CommittedEquippedItem),
            (this.m_EquipFlags =
              this.m_EquippedItem && this.m_EquippedItem.equipped_flags),
            (this.m_bUnsavedChanges = !1);
        }
        FillAppNames(e) {
          return Object(n.a)(this, void 0, void 0, function* () {
            yield this.m_parent.AppInfoStore.EnsureAppInfoForAppIDs(
              e.map((e) => e.appid)
            );
            for (let t of e)
              t.app_name = t.appid
                ? this.m_parent.AppInfoStore.GetAppInfo(t.appid).name
                : "";
            return e;
          });
        }
      }
      Object(n.b)([m.C], $.prototype, "m_cItemsOwned", void 0),
        Object(n.b)([m.C], $.prototype, "m_bUnsavedChanges", void 0),
        Object(n.b)([m.C], $.prototype, "m_CommittedEquippedItem", void 0),
        Object(n.b)([m.C], $.prototype, "m_EquippedItem", void 0),
        Object(n.b)([m.C], $.prototype, "m_EquipFlags", void 0),
        Object(n.b)([m.k], $.prototype, "SetEquipped", null),
        Object(n.b)([m.k], $.prototype, "SetEquippedFlags", null),
        Object(n.b)([m.k], $.prototype, "Revert", null);
      class V {
        constructor(e, t, r, i, a, o) {
          (this.m_bStateSelectionAvailable = !1),
            (this.m_bCitySelectionAvailable = !1),
            (this.m_strDisplayCountry = e),
            (this.m_strDisplayState = r),
            (this.m_strDisplayCity = a),
            (this.m_strCountryCode = t),
            (this.m_strStateCode = i),
            (this.m_strCityCode = o),
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
        SetCountry(e, t) {
          e != this.m_strCountryCode &&
            ((this.m_strStateCode = ""),
            (this.m_strDisplayState = ""),
            (this.m_strCityCode = ""),
            (this.m_strDisplayCity = "")),
            (this.m_strCountryCode = e),
            (this.m_strDisplayCountry = t),
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
        SetState(e, t) {
          e != this.m_strStateCode &&
            ((this.m_strCityCode = ""), (this.m_strDisplayCity = "")),
            (this.m_strStateCode = e),
            (this.m_strDisplayState = t),
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
        SetCity(e, t) {
          (this.m_strCityCode = e), (this.m_strDisplayCity = t);
        }
        GetCountryList() {
          return Object(n.a)(this, void 0, void 0, function* () {
            return this.m_rgCountryList
              ? this.m_rgCountryList
              : (this.m_promiseLoadCountries ||
                  ((this.m_promiseLoadCountries = c.a
                    .get(v.c.COMMUNITY_BASE_URL + "/actions/QueryLocations/")
                    .then((e) => e.data)),
                  this.m_promiseLoadCountries.then(
                    (e) => {
                      (this.m_rgCountryList = e),
                        (this.m_promiseLoadCountries = null),
                        this.FindAndSetActiveCountry();
                    },
                    () => {
                      this.m_promiseLoadCountries = null;
                    }
                  )),
                this.m_promiseLoadCountries);
          });
        }
        FindAndSetActiveCountry() {
          (this.m_CountryCur =
            this.m_strCountryCode &&
            this.m_rgCountryList.find(
              (e) => e.countrycode == this.m_strCountryCode
            )),
            (this.m_bStateSelectionAvailable =
              this.m_CountryCur && !!this.m_CountryCur.hasstates);
        }
        GetStateList() {
          return Object(n.a)(this, void 0, void 0, function* () {
            this.m_CountryCur || (yield this.GetCountryList());
            let e = this.m_CountryCur;
            return e && e.hasstates
              ? void 0 !== e.states
                ? e.states
                : (e.stateloader ||
                    ((e.stateloader = c.a
                      .get(
                        v.c.COMMUNITY_BASE_URL +
                          `/actions/QueryLocations/${e.countrycode}/`
                      )
                      .then((e) => e.data)),
                    e.stateloader.then(
                      (t) => {
                        (e.states = t || []),
                          delete e.stateloader,
                          this.FindAndSetActiveState();
                      },
                      () => {
                        delete e.stateloader;
                      }
                    )),
                  e.stateloader)
              : [];
          });
        }
        FindAndSetActiveState() {
          (this.m_StateCur =
            this.m_CountryCur &&
            this.m_CountryCur.states &&
            this.m_CountryCur.states.find(
              (e) => e.statecode == this.m_strStateCode
            )),
            (this.m_bCitySelectionAvailable = !!this.m_StateCur);
        }
        GetCityList() {
          return Object(n.a)(this, void 0, void 0, function* () {
            this.m_StateCur || (yield this.GetStateList());
            let e = this.m_StateCur;
            return e
              ? void 0 !== e.cities
                ? e.cities
                : (e.cityloader ||
                    ((e.cityloader = c.a
                      .get(
                        v.c.COMMUNITY_BASE_URL +
                          `/actions/QueryLocations/${e.countrycode}/${e.statecode}`
                      )
                      .then((e) => e.data)),
                    e.cityloader.then(
                      (t) => {
                        (e.cities = t || []), delete e.cityloader;
                      },
                      () => {
                        delete e.cityloader;
                      }
                    )),
                  e.cityloader)
              : [];
          });
        }
      }
      Object(n.b)([m.C], V.prototype, "m_strDisplayCountry", void 0),
        Object(n.b)([m.C], V.prototype, "m_strDisplayState", void 0),
        Object(n.b)([m.C], V.prototype, "m_strDisplayCity", void 0),
        Object(n.b)([m.C], V.prototype, "m_strCountryCode", void 0),
        Object(n.b)([m.C], V.prototype, "m_strStateCode", void 0),
        Object(n.b)([m.C], V.prototype, "m_strCityCode", void 0),
        Object(n.b)([m.C], V.prototype, "m_bStateSelectionAvailable", void 0),
        Object(n.b)([m.C], V.prototype, "m_bCitySelectionAvailable", void 0),
        Object(n.b)([m.k], V.prototype, "SetCountry", null),
        Object(n.b)([m.k], V.prototype, "SetState", null),
        Object(n.b)([m.k], V.prototype, "SetCity", null),
        Object(n.b)([m.k], V.prototype, "FindAndSetActiveCountry", null),
        Object(n.b)([m.k], V.prototype, "FindAndSetActiveState", null);
      class Y {
        constructor(e, t, r) {
          (this.m_CMInterface = e),
            (this.m_rgAvailableThemes = r.map((e) =>
              Object.assign(Object.assign({}, e), {
                theme_id: e.theme_id || "Default",
                title: Object(_.f)(e.title),
              })
            )),
            void 0 === t || "" === t.theme_id
              ? this.SetActiveTheme("Default", !0)
              : ((this.m_ActiveTheme = t), (this.m_ComittedActiveTheme = t));
        }
        get ActiveTheme() {
          return this.m_ActiveTheme;
        }
        get AvailableThemes() {
          return this.m_rgAvailableThemes;
        }
        SetActiveTheme(e, t = !1) {
          for (let r of this.m_rgAvailableThemes)
            if (e === r.theme_id) {
              (this.m_ActiveTheme = r), t && (this.m_ComittedActiveTheme = r);
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
        CommitActiveTheme() {
          return Object(n.a)(this, void 0, void 0, function* () {
            let e = R.b.Init(M.n);
            e.Body().set_theme_id(
              "Default" == this.ActiveTheme.theme_id
                ? ""
                : this.ActiveTheme.theme_id
            );
            const t = yield M.p.SetProfileTheme(
              this.m_CMInterface.GetServiceTransport(),
              e
            );
            return (
              1 == t.GetEResult() &&
                (this.m_ComittedActiveTheme = this.ActiveTheme),
              t.GetEResult()
            );
          });
        }
      }
      Object(n.b)([m.C], Y.prototype, "m_ActiveTheme", void 0),
        Object(n.b)([m.k], Y.prototype, "RevertActiveTheme", null);
      class K {
        constructor(e, t, r) {
          (this.m_rgBadges = []),
            (this.m_CMInterface = e),
            (this.m_AppInfoStore = t);
          const i = r.rgBadges,
            a = r.FavoriteBadge;
          if (!Array.isArray(i))
            for (let e in i) {
              const t = i[e];
              let r;
              (r =
                "communityitemid" in t
                  ? new J(t, this.m_AppInfoStore)
                  : new X(t)),
                this.m_rgBadges.push(r),
                a &&
                  r.BIsFavoriteBadge(a) &&
                  (this.m_CommittedFavoriteBadge = this.m_FavoriteBadge = r);
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
        CommitFavoriteBadgeChanges() {
          return Object(n.a)(this, void 0, void 0, function* () {
            if (this.m_FavoriteBadge == this.m_CommittedFavoriteBadge) return 1;
            let e = this.FavoriteBadgeID,
              t = R.b.Init(M.k);
            e.badgeid
              ? t.Body().set_badgeid(e.badgeid)
              : e.communityitemid &&
                t.Body().set_communityitemid(e.communityitemid);
            let r = yield M.p.SetFavoriteBadge(
              this.m_CMInterface.GetServiceTransport(),
              t
            );
            return (
              1 == r.GetEResult() &&
                (this.m_CommittedFavoriteBadge = this.m_FavoriteBadge),
              r.GetEResult()
            );
          });
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
      Object(n.b)([m.C], K.prototype, "m_FavoriteBadge", void 0),
        Object(n.b)([m.k], K.prototype, "SetFavoriteBadge", null),
        Object(n.b)([m.k], K.prototype, "RevertFavoriteBadge", null);
      class Z {
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
      class X extends Z {
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
      class J extends Z {
        constructor(e, t) {
          super(e),
            (this.m_ulCommunityItemID = e.communityitemid),
            (this.m_usItemType = e.item_type),
            (this.m_unAppID = e.appid),
            (this.m_unBorderColor = e.border_color),
            (this.m_AppInfoStore = t);
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
          return 1 == this.m_unBorderColor;
        }
      }
      class Q {
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
        BWaitForLoad() {
          return Object(n.a)(this, void 0, void 0, function* () {
            return this.StartLoadIfNeeded(), this.m_promiseLoading;
          });
        }
        StartLoadIfNeeded() {
          this.m_promiseLoading ||
            (this.m_promiseLoading = this.LoadOGGAvatars());
        }
        LoadOGGAvatars() {
          return Object(n.a)(this, void 0, void 0, function* () {
            let e = yield c.a.get(
              `${v.c.COMMUNITY_BASE_URL}actions/GameAvatars/?json=1&l=${v.c.LANGUAGE}`
            );
            return (this.m_AvatarData = e.data || null), !!e.data;
          });
        }
        SetPlayerOGGAvatar(e) {
          return Object(n.a)(this, void 0, void 0, function* () {
            let t,
              r = (function* (e) {
                for (let t of [
                  e.GetRecentGameAvatars(),
                  e.GetOwnedGameAvatars(),
                  e.GetOtherGameAvatars(),
                ])
                  for (let e of t) yield e;
              })(this),
              i = e.GetAvatarHash();
            for (; (t = r.next().value); ) {
              let r = t.avatars.find((e) => e.avatar_hash == i);
              if (r) return this.SelectGameAvatar(e, t.appid, r.ordinal);
            }
            return 42;
          });
        }
        SelectGameAvatar(e, t, r) {
          return Object(n.a)(this, void 0, void 0, function* () {
            let i = new FormData();
            i.append("sessionid", v.c.SESSIONID),
              i.append("json", "1"),
              i.append("selectedAvatar", "" + r);
            let a =
              (yield c.a.post(
                `${v.c.COMMUNITY_BASE_URL}ogg/${t}/selectAvatar`,
                i
              )).data.success || 2;
            return 1 == a && e.CommitAvatarHash(), a;
          });
        }
      }
      Object(n.b)([m.C.shallow], Q.prototype, "m_AvatarData", void 0);
      var ee = r("8H1D");
      function te(e, t) {
        return Object(n.a)(this, void 0, void 0, function* () {
          let r;
          if (t instanceof FormData) r = t;
          else {
            r = new FormData();
            for (const e in t) r.append(e, t[e]);
          }
          r.append("type", e),
            r.append("sessionID", v.c.SESSIONID),
            r.append("json", "1");
          const i = `${s.ProfileURL}edit/`;
          try {
            let e = yield c.a.post(i, r);
            return {
              eResult: e.data.success,
              strHTMLError: e.data.errmsg,
              strRedirectURL: e.data.redirect,
            };
          } catch (e) {
            return {
              eResult: 35,
              strHTMLError: Object(_.f)("#ConnectionTrouble_FailedToConnect"),
            };
          }
        });
      }
      class re {
        constructor(e) {
          (this.m_bLoaded = !1),
            e &&
              (this.m_CommittedPrimaryGroup = this.m_PrimaryGroup =
                new ie(new L.a(e.steamid), e.name, e.avatarHash));
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
        BWaitForUserGroups() {
          return Object(n.a)(this, void 0, void 0, function* () {
            return this.StartUserGroupLoad(), this.m_promiseLoading;
          });
        }
        StartUserGroupLoad() {
          this.m_promiseLoading ||
            (this.m_promiseLoading = this.LoadUserGroups());
        }
        LoadUserGroups() {
          return Object(n.a)(this, void 0, void 0, function* () {
            let e = yield c.a.get(
              `${s.ProfileURL}ajaxgroupinvite?select_primary=1&json=1`
            );
            return (
              Object(m.G)(() => {
                e.data &&
                  (this.m_rgUserGroups = e.data.map(
                    (e) => new ie(new L.a(e.steamid), e.name, e.avatarHash)
                  )),
                  (this.m_bLoaded = !0);
              }),
              !!e.data
            );
          });
        }
        BPrimaryGroupUncomitted() {
          return (
            (this.m_PrimaryGroup &&
              this.m_PrimaryGroup.GetSteamID().GetAccountID()) !=
            (this.m_CommittedPrimaryGroup &&
              this.m_CommittedPrimaryGroup.GetSteamID().GetAccountID())
          );
        }
        CommitPrimaryGroup() {
          return Object(n.a)(this, void 0, void 0, function* () {
            let e = yield te("favoriteclan", {
              primary_group_steamid: this.m_PrimaryGroup
                .GetSteamID()
                .ConvertTo64BitString(),
            });
            return (
              1 == e.eResult &&
                (this.m_CommittedPrimaryGroup = this.m_PrimaryGroup),
              e
            );
          });
        }
        RevertPrimaryGroupChanges() {
          this.m_PrimaryGroup = this.m_CommittedPrimaryGroup;
        }
      }
      Object(n.b)([m.C], re.prototype, "m_PrimaryGroup", void 0),
        Object(n.b)([m.C], re.prototype, "m_bLoaded", void 0),
        Object(n.b)([m.k], re.prototype, "SetPrimaryGroup", null),
        Object(n.b)([m.k], re.prototype, "RevertPrimaryGroupChanges", null);
      class ie {
        constructor(e, t, r) {
          (this.m_steamID = e),
            (this.m_strName = t),
            (this.m_strAvatarHash = r);
        }
        GetSteamID() {
          return this.m_steamID;
        }
        GetName() {
          return this.m_strName;
        }
        GetAvatarURL(e) {
          return Object(ee.a)(
            this.m_strAvatarHash || "0000000000000000000000000000000000000000",
            e
          );
        }
      }
      var ae = r("MUT6");
      class oe {
        constructor(e) {
          this.m_SteamInterface = e;
        }
        GetAvatarHistory() {
          return this.StartLoadIfNeeded(), this.m_rgPreviousAvatars || [];
        }
        RefreshAvatarHistory() {
          this.m_promiseLoading = this.LoadAvatarHistory();
        }
        BWaitForLoad() {
          return Object(n.a)(this, void 0, void 0, function* () {
            return this.StartLoadIfNeeded(), this.m_promiseLoading;
          });
        }
        StartLoadIfNeeded() {
          this.m_promiseLoading ||
            (this.m_promiseLoading = this.LoadAvatarHistory());
        }
        LoadAvatarHistory() {
          return Object(n.a)(this, void 0, void 0, function* () {
            const e = R.b.Init(ae.c);
            e.SetBodyFields({
              steamid: v.j.steamid,
              filter_user_uploaded_only: !0,
            });
            let t = yield ae.h.GetAvatarHistory(
              this.m_SteamInterface.GetServiceTransport(),
              e
            );
            return (
              1 == t.GetEResult()
                ? ((this.m_rgPreviousAvatars = []),
                  t
                    .Body()
                    .toObject()
                    .avatars.map((e) => {
                      this.m_rgPreviousAvatars.push({
                        avatar_hash: e.avatar_sha1,
                        timestamp: e.timestamp,
                      });
                    }))
                : console.error(
                    "Error when calling CommunityService.GetAvatarHistory: EResult=${msgResponse.GetEResult()}"
                  ),
              !!this.m_rgPreviousAvatars
            );
          });
        }
        SetPreviousAvatar(e) {
          return Object(n.a)(this, void 0, void 0, function* () {
            let t = e.GetAvatarHash();
            for (let r = 0; r < this.m_rgPreviousAvatars.length; ++r)
              if (this.m_rgPreviousAvatars[r].avatar_hash == t)
                return this.SelectAvatar(e, t);
            return 42;
          });
        }
        SelectAvatar(e, t) {
          return Object(n.a)(this, void 0, void 0, function* () {
            let r = new FormData();
            r.append("sessionid", v.c.SESSIONID),
              r.append("json", "1"),
              r.append("sha", t);
            let i =
              (yield c.a.post(
                `${v.c.COMMUNITY_BASE_URL}actions/selectPreviousAvatar`,
                r
              )).data.success || 2;
            return 1 == i && e.CommitAvatarHash(), i;
          });
        }
      }
      function ne(e) {
        switch (e) {
          case 1:
            return Object(_.f)("#Privacy_Private");
          case 2:
            return Object(_.f)("#Privacy_FriendsOnly");
          case 3:
            return Object(_.f)("#Privacy_Public");
          default:
            return "";
        }
      }
      function se(e, t) {
        return e < t ? e : t;
      }
      Object(n.b)([m.C], oe.prototype, "m_rgPreviousAvatars", void 0);
      class le {
        constructor(e, t) {
          (this.m_eSaveStateByKey = new Map()),
            (this.m_eCommentSaveState = 0),
            (this.m_PrivacySettings = e),
            (this.m_eCommentPermission = t);
        }
        GetPrivacySetting(e) {
          return "PrivacyOwnedGames" == e
            ? se(
                this.m_PrivacySettings.PrivacyProfile,
                this.m_PrivacySettings.PrivacyOwnedGames
              )
            : "PrivacyPlaytime" == e
            ? se(
                this.GetPrivacySetting("PrivacyOwnedGames"),
                this.m_PrivacySettings.PrivacyPlaytime
              )
            : "PrivacyInventory" == e
            ? se(
                this.m_PrivacySettings.PrivacyProfile,
                this.m_PrivacySettings.PrivacyInventory
              )
            : "PrivacyInventoryGifts" == e
            ? se(
                this.GetPrivacySetting("PrivacyInventory"),
                this.m_PrivacySettings.PrivacyInventoryGifts
              )
            : "PrivacyFriendsList" == e
            ? se(
                this.m_PrivacySettings.PrivacyProfile,
                this.m_PrivacySettings.PrivacyFriendsList
              )
            : this.m_PrivacySettings[e];
        }
        get CommentPermission() {
          return this.m_eCommentPermission;
        }
        GetSaveState(e) {
          return this.m_eSaveStateByKey.get(e) || 0;
        }
        GetCommentSaveState() {
          return this.m_eCommentSaveState;
        }
        ChangePrivacySetting(e, t, r) {
          if (this.m_PrivacySettings[e] == t) return;
          this.m_PrivacySettings[e] = t;
          let i = this.SavePrivacy(),
            a = r || e;
          i
            ? (this.m_eSaveStateByKey.set(a, 1),
              i.then((e) => {
                e
                  ? this.m_eSaveStateByKey.set(a, 2)
                  : this.m_eSaveStateByKey.set(a, 3);
              }))
            : this.m_eSaveStateByKey.set(a, 0);
        }
        ChangeCommentPermission(e) {
          if (this.m_eCommentPermission == e) return;
          this.m_eCommentPermission = e;
          let t = this.SavePrivacy();
          t
            ? ((this.m_eCommentSaveState = 1),
              t.then((e) => {
                this.m_eCommentSaveState = e ? 2 : 3;
              }))
            : (this.m_eCommentSaveState = 0);
        }
        SavePrivacy() {
          let e = new FormData();
          return (
            e.append("sessionid", v.c.SESSIONID),
            e.append("Privacy", JSON.stringify(this.m_PrivacySettings)),
            e.append(
              "eCommentPermission",
              JSON.stringify(this.m_eCommentPermission)
            ),
            c.a
              .post(s.ProfileURL + "ajaxsetprivacy/", e)
              .then((e) => {
                let t = e.data;
                if (1 != t.success)
                  return (
                    window.ShowAlertDialog(
                      Object(_.f)("#Error_Error"),
                      Object(_.f)("#Error_CommentEditFailed")
                    ),
                    !1
                  );
                let r = t.Privacy;
                return (
                  r &&
                    r.PrivacySettings &&
                    r.eCommentPermission &&
                    Object(m.G)(() => {
                      (this.m_PrivacySettings = r.PrivacySettings),
                        (this.m_eCommentPermission = r.eCommentPermission);
                    }),
                  !0
                );
              })
              .catch(
                (e) => (
                  window.ShowAlertDialog(
                    Object(_.f)("#Error_Error"),
                    Object(_.f)("#Error_CommentEditFailed")
                  ),
                  !1
                )
              )
          );
        }
      }
      Object(n.b)([m.C], le.prototype, "m_PrivacySettings", void 0),
        Object(n.b)([m.C], le.prototype, "m_eCommentPermission", void 0),
        Object(n.b)([m.C], le.prototype, "m_eSaveStateByKey", void 0),
        Object(n.b)([m.C], le.prototype, "m_eCommentSaveState", void 0);
      r("6Y59");
      class ce {
        constructor(e, t) {
          (this.m_OGGAvatars = new Q()),
            (this.m_EmoticonStore = new T.a()),
            (this.m_EmoticonHoverStore = new k.a()),
            (this.m_Profile = new me(e)),
            (this.m_WebAPI = new p.a(v.c.WEBAPI_BASE_URL, e.webapi_token)),
            (this.m_AppInfoStore = new u.b()),
            this.m_AppInfoStore.Init(this.m_WebAPI),
            this.m_AppInfoStore.SetCacheStorage(new d.a()),
            (this.m_ProfileBadges = new K(
              this.m_WebAPI,
              this.m_AppInfoStore,
              t
            )),
            (this.m_ProfileItems = new W(
              this.m_WebAPI,
              this.m_AppInfoStore,
              e.rgGoldenProfileData
            )),
            (this.m_ProfileTheme = new Y(
              this.m_WebAPI,
              e.ActiveTheme,
              e.rgAvailableThemes
            )),
            (this.m_ProfilePrivacy = new le(
              e.Privacy.PrivacySettings,
              e.Privacy.eCommentPermission
            )),
            (this.m_AvatarHistory = new oe(this.m_WebAPI)),
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
        get EmoticonHoverStore() {
          return this.m_EmoticonHoverStore;
        }
        get MiniProfileOverrideData() {
          return {
            favorite_badge: this.m_ProfileBadges.GetFavoriteBadgePreview(),
          };
        }
      }
      class me {
        constructor(e) {
          (this.m_strPersonaName = e.strPersonaName),
            (this.m_strCustomURL = e.strCustomURL),
            (this.m_strRealName = e.strRealName),
            (this.m_strSummary = e.strSummary),
            (this.m_Preferences = e.ProfilePreferences),
            this.SetBasicInfoChangesComitted(),
            (this.m_strCommittedAvatarHash = this.m_strAvatarHash =
              e.strAvatarHash);
          const {
            LocationData: {
              locCountry: t,
              locCountryCode: r,
              locState: i,
              locStateCode: a,
              locCity: o,
              locCityCode: n,
            },
          } = e;
          (this.m_Location = new V(t, r, i, a, o, n)),
            (this.m_GroupList = new re(e.PrimaryGroup));
          const s = new L.a(v.j.steamid);
          (this.m_MiniProfileData = new O(s.GetAccountID())),
            (this.m_persona = new f.b(s)),
            Object(m.l)(() => {
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
            (this.m_strCustomURL = this.m_strComittedCustomURL),
            (this.m_strRealName = this.m_strComittedRealName),
            (this.m_strSummary = this.m_strComittedSummary);
        }
        SetBasicInfoChangesComitted() {
          (this.m_strCommittedPersonaName = this.m_strPersonaName),
            (this.m_strComittedCustomURL = this.m_strCustomURL),
            (this.m_strComittedRealName = this.m_strRealName),
            (this.m_strComittedSummary = this.m_strSummary);
        }
        GetPersonaName() {
          return this.m_strPersonaName;
        }
        GetComittedPersonaName() {
          return this.m_strCommittedPersonaName;
        }
        SetPersonaName(e) {
          this.m_strPersonaName = e;
        }
        GetRealName() {
          return this.m_strRealName;
        }
        SetRealName(e) {
          this.m_strRealName = e;
        }
        GetCustomURL() {
          return this.m_strCustomURL;
        }
        SetCustomURL(e) {
          this.m_strCustomURL = e;
        }
        GetConstructedURL() {
          return this.m_strCustomURL
            ? `${v.c.COMMUNITY_BASE_URL}id/${this.m_strCustomURL}/`
            : `${v.c.COMMUNITY_BASE_URL}profiles/${v.j.steamid}/`;
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
            (this.m_persona.m_ePersonaState = 1);
        }
        UploadAvatar(e) {
          return Object(n.a)(this, void 0, void 0, function* () {
            let t = new FormData();
            t.append("avatar", e),
              t.append("type", "player_avatar_image"),
              t.append("sId", v.j.steamid),
              t.append("sessionid", v.c.SESSIONID),
              t.append("doSub", "1"),
              t.append("json", "1");
            let r = !1,
              i = "";
            try {
              let e = yield c.a.post(
                `${v.c.COMMUNITY_BASE_URL}actions/FileUploader/`,
                t
              );
              e.data && e.data.success
                ? ((r = !0), this.SetAvatarHash(e.data.hash, !0))
                : (i =
                    (e.data && e.data.message) ||
                    Object(_.f)("#Chat_Settings_Error_ServerError"));
            } catch (e) {
              i =
                (e.response && e.response.data.message) ||
                Object(_.f)("#Chat_Settings_Error_ServerError");
            }
            return { bSuccess: r, strError: i };
          });
        }
        SetAvatarHash(e, t = !1) {
          (this.m_strAvatarHash = e), t && this.CommitAvatarHash();
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
      (me.k_strPersonaNameCooldownSupportURL =
        "https://support.steampowered.com/kb_article.php?ref=4045-USHJ-3810"),
        (me.k_strProfileSummaryCooldownSupportURL =
          "https://support.steampowered.com/kb_article.php?ref=4045-USHJ-3810"),
        (me.k_strAvatarCooldownSupportURL =
          "https://support.steampowered.com/kb_article.php?ref=4045-USHJ-3810"),
        Object(n.b)([m.C], me.prototype, "m_strPersonaName", void 0),
        Object(n.b)([m.C], me.prototype, "m_strCommittedPersonaName", void 0),
        Object(n.b)([m.C], me.prototype, "m_strCustomURL", void 0),
        Object(n.b)([m.C], me.prototype, "m_strRealName", void 0),
        Object(n.b)([m.C], me.prototype, "m_strSummary", void 0),
        Object(n.b)([m.C], me.prototype, "m_strAvatarHash", void 0),
        Object(n.b)([m.C], me.prototype, "m_strCommittedAvatarHash", void 0),
        Object(n.b)([m.C], me.prototype, "m_Preferences", void 0),
        Object(n.b)([m.k], me.prototype, "RevertBasicInfoChanges", null),
        Object(n.b)([m.k], me.prototype, "SetAvatarHash", null),
        Object(n.b)([m.k], me.prototype, "RevertToComittedAvatarHash", null);
      var de = r("65aj"),
        pe = (r("xnZ7"), r("idvb"), r("i8i4")),
        ue = r("yJIw"),
        he = r("Mgs7"),
        ve = r("opsS"),
        fe = (r("7Q8g"), r("5y7u"));
      let _e = class extends i.Component {
        constructor() {
          super(...arguments), (this.state = { bReady: !1 });
        }
        componentDidMount() {
          return Object(n.a)(this, void 0, void 0, function* () {
            let e;
            ([this.m_rgAvatars, e] = yield Promise.all([
              this.props.ProfileItems.GetOwnedAvatars(),
              this.props.OGGAvatars.BWaitForLoad(),
            ])),
              this.setState({ bReady: !0 });
          });
        }
        SelectAnimatedAvatar(e) {
          this.props.Profile.RevertToComittedAvatarHash(),
            this.props.ProfileItems.SetEquippedAvatar(e),
            this.props.fnOnCollapse();
        }
        SelectOGGAvatar(e) {
          this.props.Profile.SetAvatarHash(e),
            this.props.ProfileItems.SetEquippedAvatar(null),
            this.props.fnOnCollapse();
        }
        SelectPreviousAvatar(e) {
          this.props.Profile.SetAvatarHash(e),
            this.props.ProfileItems.SetEquippedAvatar(null),
            this.props.fnOnCollapse();
        }
        GetTopAvatars(e = 4) {
          let t;
          if (((t = this.m_rgAvatars.slice(0, e)), t.length < e)) {
            const r = this.props.AvatarHistory.GetAvatarHistory();
            for (
              let i = 0;
              i < r.length && (t.push(r[i]), !(t.length >= e));
              ++i
            );
          }
          if (t.length < e) {
            let r = (function* (e) {
              for (let t of [
                e.GetRecentGameAvatars(),
                e.GetOwnedGameAvatars(),
                e.GetOtherGameAvatars(),
              ])
                for (let e of t) for (let t of e.avatars) yield t;
            })(this.props.OGGAvatars);
            for (
              let i = r.next();
              i.value && (t.push(i.value), !(t.length >= e));
              i = r.next()
            );
          }
          return t;
        }
        render() {
          if (!this.state.bReady) return !1;
          const {
            bExpanded: e,
            fnOnExpand: t,
            OGGAvatars: r,
            AvatarHistory: a,
            fnOnCollapse: o,
          } = this.props;
          if (e)
            return i.createElement(
              "div",
              { className: fe.AvatarCollection },
              i.createElement(
                be,
                null,
                Object(_.f)("#Profile_Edit_Avatar_YourAvatars")
              ),
              i.createElement(ye, {
                rgAnimatedAvatars: this.m_rgAvatars,
                OGGAvatars: r,
                AvatarHistory: a,
                onSelectAnimatedAvatar: this.SelectAnimatedAvatar,
                onSelectOGGAvatar: this.SelectOGGAvatar,
                onSelectPreviousAvatar: this.SelectPreviousAvatar,
              })
            );
          {
            let e = this.GetTopAvatars();
            return i.createElement(
              "div",
              { className: fe.AvatarCollection },
              i.createElement(
                be,
                null,
                Object(_.f)("#Profile_Edit_Avatar_YourAvatars")
              ),
              i.createElement(
                "div",
                { className: fe.AvatarCollectionSingleRowWrapper },
                i.createElement(
                  "div",
                  { className: fe.AvatarCollectionSingleRow },
                  e.map((e) =>
                    "communityitemid" in e
                      ? i.createElement(
                          i.Fragment,
                          { key: e.communityitemid },
                          i.createElement(Pe, {
                            avatar: e,
                            onSelected: this.SelectAnimatedAvatar,
                            large: !0,
                          }),
                          i.createElement("div", {
                            className: fe.AvatarRowSpacer,
                          })
                        )
                      : "timestamp" in e
                      ? i.createElement(
                          i.Fragment,
                          { key: e.avatar_hash },
                          i.createElement(Ee, {
                            hash: e.avatar_hash,
                            onSelected: this.SelectPreviousAvatar,
                            large: !0,
                          }),
                          i.createElement("div", {
                            className: fe.AvatarRowSpacer,
                          })
                        )
                      : i.createElement(
                          i.Fragment,
                          { key: e.avatar_hash },
                          i.createElement(Ee, {
                            hash: e.avatar_hash,
                            onSelected: this.SelectOGGAvatar,
                            large: !0,
                          }),
                          i.createElement("div", {
                            className: fe.AvatarRowSpacer,
                          })
                        )
                  )
                )
              ),
              i.createElement(
                "div",
                { className: fe.ExpandButtonContainer },
                i.createElement(
                  he.e,
                  { onClick: t },
                  Object(_.f)("#Profile_Edit_Avatar_SeeAll")
                )
              )
            );
          }
        }
      };
      Object(n.b)([ve.b], _e.prototype, "SelectAnimatedAvatar", null),
        Object(n.b)([ve.b], _e.prototype, "SelectOGGAvatar", null),
        Object(n.b)([ve.b], _e.prototype, "SelectPreviousAvatar", null),
        (_e = Object(n.b)([h.a], _e));
      var ge = _e;
      const be = ({ children: e }) =>
        i.createElement(
          "div",
          { className: fe.AvatarCollectionHeader },
          i.createElement("div", { className: fe.AvatarCollectionName }, e)
        );
      class Pe extends i.Component {
        constructor() {
          super(...arguments), (this.state = { bHovered: !1 });
        }
        OnMouseEnter() {
          this.setState({ bHovered: !0 });
        }
        OnMouseLeave() {
          this.setState({ bHovered: !1 });
        }
        onSelected() {
          this.props.onSelected(this.props.avatar);
        }
        render() {
          const { avatar: e, large: t } = this.props,
            { bHovered: r } = this.state;
          return i.createElement(
            "div",
            {
              className: Object(E.a)(
                fe.AvatarPreview,
                fe.Animated,
                t && fe.Large
              ),
              onMouseEnter: this.OnMouseEnter,
              onMouseLeave: this.OnMouseLeave,
              onClick: this.onSelected,
            },
            i.createElement("img", {
              src: r || qe ? x(e) : U(e),
              loading: "lazy",
            })
          );
        }
      }
      Object(n.b)([ve.b], Pe.prototype, "OnMouseEnter", null),
        Object(n.b)([ve.b], Pe.prototype, "OnMouseLeave", null),
        Object(n.b)([ve.b], Pe.prototype, "onSelected", null);
      const Ee = ({ hash: e, onSelected: t, large: r }) =>
          i.createElement(
            "div",
            {
              className: Object(E.a)(
                fe.AvatarPreview,
                fe.Static,
                r && fe.Large
              ),
              onClick: () => t(e),
            },
            i.createElement("img", {
              src: Object(f.a)(e, r ? "full" : "medium"),
              loading: "lazy",
            })
          ),
        ye = Object(h.a)(
          ({
            rgAnimatedAvatars: e,
            OGGAvatars: t,
            AvatarHistory: r,
            onSelectAnimatedAvatar: a,
            onSelectOGGAvatar: o,
            onSelectPreviousAvatar: n,
          }) => {
            let s = r.GetAvatarHistory(),
              l = [...t.GetRecentGameAvatars(), ...t.GetOwnedGameAvatars()];
            return i.createElement(
              i.Fragment,
              null,
              i.createElement(Ce, { rgAnimatedAvatars: e, onSelected: a }),
              i.createElement(Se, { rgAvatars: s, onSelected: n }),
              i.createElement(Oe, {
                rgAvatars: l,
                onSelected: o,
                title: Object(_.f)("#Profile_Edit_YourGameAvatars"),
              }),
              l.length < 20 &&
                i.createElement(Oe, {
                  rgAvatars: t.GetOtherGameAvatars(),
                  onSelected: o,
                  title: Object(_.f)("#Profile_Edit_MoreGameAvatars"),
                })
            );
          }
        ),
        Ce = ({ rgAnimatedAvatars: e, onSelected: t }) =>
          e.length
            ? i.createElement(
                "div",
                { className: Object(E.a)(fe.CollectionGroup, fe.Primary) },
                i.createElement(
                  "div",
                  { className: fe.Title },
                  Object(_.f)("#Profile_Edit_PurchasedFromRewardsStore")
                ),
                i.createElement(
                  "div",
                  { className: fe.CollectionGroupAvatars },
                  e.map((e) =>
                    i.createElement(Pe, {
                      key: e.communityitemid,
                      avatar: e,
                      onSelected: t,
                    })
                  )
                )
              )
            : null,
        Se = Object(h.a)(({ rgAvatars: e, onSelected: t }) =>
          e.length
            ? i.createElement(
                "div",
                { className: Object(E.a)(fe.CollectionGroup, fe.Primary) },
                i.createElement(
                  "div",
                  { className: fe.Title },
                  Object(_.f)("#Profile_Edit_YourPreviousAvatars")
                ),
                i.createElement(
                  "div",
                  { className: fe.CollectionGroupAvatars },
                  e.map((e) =>
                    i.createElement(Ee, {
                      key: e.avatar_hash,
                      hash: e.avatar_hash,
                      onSelected: t,
                    })
                  )
                )
              )
            : null
        ),
        Oe = ({ rgAvatars: e, onSelected: t, title: r }) =>
          e.length
            ? i.createElement(
                "div",
                { className: Object(E.a)(fe.CollectionGroup, fe.Primary) },
                i.createElement("div", { className: fe.Title }, r),
                e.map((e) =>
                  i.createElement(Ae, { key: e.appid, game: e, onSelected: t })
                )
              )
            : null,
        Ae = ({ game: e, onSelected: t }) =>
          i.createElement(
            "div",
            { className: fe.CollectionGroup },
            i.createElement("div", { className: fe.Title }, e.name),
            i.createElement(
              "div",
              { className: fe.CollectionGroupAvatars },
              e.avatars.map((e) =>
                i.createElement(Ee, {
                  key: e.avatar_hash,
                  hash: e.avatar_hash,
                  onSelected: t,
                })
              )
            )
          );
      var Be = r("IjL/");
      class we extends i.Component {
        constructor() {
          super(...arguments), (this.state = { bReady: !1 });
        }
        componentDidMount() {
          return Object(n.a)(this, void 0, void 0, function* () {
            (this.m_rgFrames =
              yield this.props.ProfileItems.GetOwnedAvatarFrames()),
              this.setState({ bReady: !0 });
          });
        }
        SelectFrame(e) {
          this.props.ProfileItems.SetEquippedAvatarFrame(e),
            this.props.fnOnCollapse();
        }
        render() {
          if (!this.state.bReady) return !1;
          const {
            bExpanded: e,
            ProfileItems: t,
            fnOnExpand: r,
            fnOnCollapse: a,
          } = this.props;
          if (e)
            return i.createElement(
              "div",
              { className: fe.AvatarCollection },
              i.createElement(
                be,
                null,
                Object(_.f)("#Profile_Edit_Avatar_YourFrames")
              ),
              i.createElement(
                Be.a,
                null,
                i.createElement(Ge, {
                  rgFrames: this.m_rgFrames,
                  ProfileItems: t,
                  onSelected: this.SelectFrame,
                })
              )
            );
          {
            let e = this.m_rgFrames.slice(0, 2),
              a = this.m_rgFrames.length > 2;
            return i.createElement(
              "div",
              { className: fe.AvatarCollection },
              i.createElement(
                be,
                null,
                Object(_.f)("#Profile_Edit_Avatar_YourFrames")
              ),
              i.createElement(
                "div",
                { className: fe.AvatarCollectionSingleRowWrapper },
                i.createElement(
                  "div",
                  {
                    className: Object(E.a)(
                      fe.AvatarCollectionSingleRow,
                      fe.ThreeColumns
                    ),
                  },
                  i.createElement(Ie, {
                    onSelected: this.SelectFrame,
                    large: !0,
                    ProfileItems: t,
                  }),
                  i.createElement("div", { className: fe.AvatarRowSpacer }),
                  i.createElement(
                    Be.a,
                    null,
                    e.map((e) =>
                      i.createElement(
                        i.Fragment,
                        { key: e.communityitemid },
                        i.createElement(je, {
                          frame: e,
                          onSelected: this.SelectFrame,
                          large: !0,
                        }),
                        i.createElement("div", {
                          className: fe.AvatarRowSpacer,
                        })
                      )
                    )
                  )
                )
              ),
              a &&
                i.createElement(
                  "div",
                  { className: fe.ExpandButtonContainer },
                  i.createElement(
                    he.e,
                    { onClick: r },
                    Object(_.f)("#Profile_Edit_Avatar_SeeAll")
                  )
                )
            );
          }
        }
      }
      Object(n.b)([ve.b], we.prototype, "SelectFrame", null);
      class je extends i.Component {
        constructor() {
          super(...arguments), (this.state = { bHovered: !1 });
        }
        OnMouseEnter() {
          this.setState({ bHovered: !0 });
        }
        OnMouseLeave() {
          this.setState({ bHovered: !1 });
        }
        onSelected() {
          this.props.onSelected(this.props.frame);
        }
        render() {
          const { frame: e, large: t } = this.props,
            { bHovered: r } = this.state;
          return i.createElement(
            "div",
            {
              className: Object(E.a)(fe.FramePreview, t && fe.Large),
              onMouseEnter: this.OnMouseEnter,
              onMouseLeave: this.OnMouseLeave,
              onClick: this.onSelected,
            },
            i.createElement("img", { src: r || qe ? x(e) : U(e) })
          );
        }
      }
      Object(n.b)([ve.b], je.prototype, "OnMouseEnter", null),
        Object(n.b)([ve.b], je.prototype, "OnMouseLeave", null),
        Object(n.b)([ve.b], je.prototype, "onSelected", null);
      const Ie = Object(h.a)(({ onSelected: e, ProfileItems: t, large: r }) => {
          let a = t.GetProfileModifierAvatarFrameURL();
          return a
            ? i.createElement(
                "div",
                {
                  className: Object(E.a)(fe.FramePreview, r && fe.Large),
                  onClick: () => e(null),
                },
                i.createElement("img", { src: a })
              )
            : i.createElement(
                "div",
                {
                  className: Object(E.a)(
                    fe.FramePreview,
                    r && fe.Large,
                    fe.DefaultAvatarFramePreview
                  ),
                  onClick: () => e(null),
                },
                i.createElement(
                  "div",
                  { className: fe.DefaultAvatarFrame },
                  i.createElement("div", {
                    className: fe.DefaultAvatarFrameContent,
                  })
                )
              );
        }),
        Ge = ({ rgFrames: e, ProfileItems: t, onSelected: r }) =>
          i.createElement(
            "div",
            { className: Object(E.a)(fe.CollectionGroup, fe.Primary) },
            i.createElement(
              "div",
              { className: fe.Title },
              Object(_.f)("#Profile_Edit_PurchasedFromRewardsStore")
            ),
            i.createElement(
              "div",
              { className: fe.CollectionGroupAvatars },
              i.createElement(Ie, { onSelected: r, ProfileItems: t }),
              e.map((e) =>
                i.createElement(je, {
                  key: e.communityitemid,
                  frame: e,
                  onSelected: r,
                })
              )
            )
          );
      var Ne = r("NzeR"),
        Le = r("Z1oF");
      const ke = ({ title: e, className: t, children: r }) =>
          i.createElement(
            "div",
            { className: Object(E.a)(Ne.ProfileBox, t) },
            i.createElement("div", { className: Ne.ProfileBoxTitle }, e),
            i.createElement(
              "div",
              { className: Ne.ProfileBoxContent },
              i.createElement(Be.a, null, r)
            )
          ),
        Te = ({ onSave: e, onCancel: t, disabled: r }) =>
          i.createElement(
            "div",
            { className: Ne.SaveCancelButtons },
            i.createElement(
              he.G,
              { onClick: e, disabled: r },
              Object(_.f)("#Button_Save")
            ),
            i.createElement(he.e, { onClick: t }, Object(_.f)("#Button_Cancel"))
          );
      function Re(e) {
        return Object(_.f)(e).replace(/%s/g, "");
      }
      class Me extends i.Component {
        constructor() {
          super(...arguments),
            (this.state = { activeItem: void 0, bSaving: !1 });
        }
        static getDerivedStateFromProps(e, t) {
          return {
            activeItem: void 0 !== t.activeItem ? t.activeItem : e.ActiveItem,
          };
        }
        CommitChanges() {
          return Object(n.a)(this, void 0, void 0, function* () {
            this.setState({ bSaving: !0 });
            yield this.props.fnCommitChanges(this.state.activeItem);
            this.setState({ bSaving: !1 });
          });
        }
        RevertChanges() {
          return Object(n.a)(this, void 0, void 0, function* () {
            this.setState({ activeItem: this.props.ActiveItem }),
              this.props.fnRevertChanges();
          });
        }
        OnItemSelected(e) {
          this.setState({ activeItem: e });
        }
        render() {
          const e = this.props,
            {
              strDialogTitle: t,
              ActiveItem: r,
              className: o,
              fnRenderPreview: s,
            } = e,
            l = Object(n.c)(e, [
              "strDialogTitle",
              "ActiveItem",
              "className",
              "fnRenderPreview",
            ]),
            { activeItem: c, bSaving: m } = this.state;
          return i.createElement(
            he.c,
            { className: Object(E.a)(Ne.PickerPreviewDialog, o) },
            i.createElement(a.a, {
              when: !l.fnIsSameItem(c, this.props.ActiveItem),
              message: Object(_.f)("#Profile_Edit_UnsavedChangesWarning"),
            }),
            i.createElement(
              "div",
              { className: Ne.PickerPreviewBody },
              i.createElement(
                "div",
                { className: Ne.PickerPreview },
                i.createElement(Be.a, null, s(c))
              ),
              t && i.createElement(he.z, null, t),
              i.createElement(
                "div",
                { className: Ne.PickerPreviewItems },
                i.createElement(
                  Be.a,
                  null,
                  i.createElement(
                    De,
                    Object.assign({}, l, {
                      onItemSelected: this.OnItemSelected,
                      activeItem: c,
                    })
                  )
                )
              ),
              i.createElement(Te, {
                onSave: this.CommitChanges,
                onCancel: this.RevertChanges,
                disabled: m,
              })
            )
          );
        }
      }
      function Fe(e) {
        return e ? e.toLocaleLowerCase().replace(/\W/g, "") : "";
      }
      Object(n.b)([ve.b], Me.prototype, "CommitChanges", null),
        Object(n.b)([ve.b], Me.prototype, "RevertChanges", null),
        Object(n.b)([ve.b], Me.prototype, "OnItemSelected", null);
      class De extends i.Component {
        constructor() {
          super(...arguments),
            (this.state = { strSearch: "" }),
            (this.m_rgSearchableItems = null),
            (this.m_refRootDiv = i.createRef());
        }
        componentDidMount() {
          return Object(n.a)(this, void 0, void 0, function* () {
            if (null === this.m_rgSearchableItems) {
              const {
                  getItems: e,
                  getSearchFields: t,
                  onItemSelected: r,
                } = this.props,
                i = yield e();
              this.m_fnSearchFieldsDisposer = Object(m.l)(() => {
                (this.m_rgSearchableItems = i.map((e, i) => ({
                  key: "" + i,
                  normalized_search_strings: t && t(e).map(Fe),
                  OnSelected: () => {
                    r(e);
                  },
                  item: e,
                }))),
                  this.props.RenderDefaultComponent &&
                    this.m_rgSearchableItems.unshift({
                      key: "default",
                      normalized_search_strings: [""],
                      OnSelected: () => {
                        r(null);
                      },
                      item: null,
                    }),
                  this.forceUpdate();
              });
            }
          });
        }
        componentWillUnmount() {
          this.m_fnSearchFieldsDisposer && this.m_fnSearchFieldsDisposer();
        }
        BuildFilterPredicate() {
          const { strSearch: e } = this.state;
          if (e && e.trim().length) {
            let t = e
              .toLocaleLowerCase()
              .split(/\W/)
              .filter((e) => e.trim().length > 0);
            return (e) => {
              for (let r of t) {
                let t = !1;
                for (let i of e.normalized_search_strings)
                  if (i.includes(r)) {
                    t = !0;
                    break;
                  }
                if (!t) return !1;
              }
              return !0;
            };
          }
          return null;
        }
        OnSearchChange(e) {
          let t = e.currentTarget.value;
          this.setState((e) => {
            let r = { strSearch: t };
            if (!e.strSearch && t) {
              let e = this.m_refRootDiv.current.getBoundingClientRect();
              (r.nHeight = e.height), (r.nWidth = e.width);
            } else e.strSearch && !t && ((r.nHeight = null), (r.nWidth = null));
            return r;
          });
        }
        render() {
          const {
              ItemComponent: e,
              RenderDefaultComponent: t,
              getSearchFields: r,
              activeItem: a,
              fnIsSameItem: o,
              classNameItemPicker: n,
            } = this.props,
            { strSearch: s, nWidth: l, nHeight: c } = this.state;
          if (null === this.m_rgSearchableItems) return null;
          let m = this.BuildFilterPredicate(),
            d = {};
          l && c && (d = { width: l + "px", height: c + "px" });
          let p =
            o ||
            function (e, t) {
              return e == t;
            };
          return i.createElement(
            "div",
            {
              className: Object(E.a)(Ne.ItemPicker, n),
              ref: this.m_refRootDiv,
              style: d,
            },
            r &&
              i.createElement(
                "div",
                { className: Ne.ItemPickeFilter },
                i.createElement(he.A, {
                  value: s,
                  label: "filter",
                  autoFocus: !0,
                  onChange: this.OnSearchChange,
                })
              ),
            i.createElement(
              "div",
              { className: Ne.ItemPickerCtn },
              i.createElement(
                "div",
                { className: Ne.ItemPickerList },
                this.m_rgSearchableItems.map((r) =>
                  m && !m(r)
                    ? null
                    : r.item
                    ? i.createElement(
                        Be.a,
                        { key: r.key },
                        i.createElement(e, {
                          Item: r.item,
                          onSelected: r.OnSelected,
                          active: a && p(r.item, a),
                        })
                      )
                    : i.createElement(
                        Be.a,
                        { key: r.key },
                        t({ onSelected: r.OnSelected, active: !a })
                      )
                )
              )
            )
          );
        }
      }
      Object(n.b)([ve.b], De.prototype, "OnSearchChange", null);
      const xe = ({ strHTMLError: e }) =>
          e
            ? i.createElement(
                "div",
                { className: Ne.HTMLErrorBox },
                i.createElement(
                  "b",
                  null,
                  Object(_.f)("#Error_Generic_Label"),
                  " "
                ),
                i.createElement("span", {
                  className: Ne.HTMLError,
                  dangerouslySetInnerHTML: { __html: e },
                })
              )
            : null,
        Ue = ({
          strCooldownLabel: e,
          rtCooldownEnd: t,
          strCooldownDescHTML: r,
          children: a,
        }) => {
          if (!t) return i.createElement(i.Fragment, null, a);
          const o = Math.max(0, t - Date.now() / 1e3);
          return i.createElement(
            "div",
            { className: Ne.CooldownNotice },
            i.createElement(
              "div",
              { className: Ne.HTMLErrorBox },
              i.createElement(
                "div",
                { className: Ne.ErrorMessage },
                e,
                " ",
                Object(_.r)(o, { eSuffix: Le.a.None, bForceSingleUnits: !0 }),
                " "
              ),
              i.createElement("div", { dangerouslySetInnerHTML: { __html: r } })
            ),
            i.createElement("div", { className: Ne.DisabledInputCtn }, a)
          );
        },
        He = i.lazy(() =>
          Promise.all([r.e(27), r.e(18)]).then(r.bind(null, "AxZo"))
        ),
        qe = !0;
      let ze = class extends i.Component {
        render() {
          return i.createElement(Ve, Object.assign({}, this.props));
        }
      };
      ze = Object(n.b)([h.a], ze);
      var We = ze;
      class $e extends i.Component {
        componentDidMount() {
          document
            .querySelector(".profile_small_header_avatar")
            .classList.add(ue.HideDefaultAvatar),
            (this.m_disposer = Object(m.l)(() => {
              const { Profile: e, ProfileItems: t } = this.props,
                r = Ke(
                  e.GetCommittedAvatarHash(),
                  t.GetCommittedEquippedAvatar(),
                  "small",
                  { disableAnimation: !0 }
                );
              document
                .querySelectorAll(".user_avatar > img")
                .forEach((e) => (e.src = r));
            }));
        }
        componentWillUnmount() {
          document
            .querySelector(".profile_small_header_avatar")
            .classList.remove(ue.HideDefaultAvatar),
            this.m_disposer();
        }
        render() {
          const { Profile: e, ProfileItems: t } = this.props;
          return pe.createPortal(
            i.createElement(Qe, { Profile: e, ProfileItems: t }),
            document.querySelector(".profile_small_header_avatar")
          );
        }
      }
      class Ve extends i.Component {
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
            (this.cropRef = i.createRef());
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
          (this.cropRef = i.createRef()),
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
        OnSave() {
          return Object(n.a)(this, void 0, void 0, function* () {
            this.setState({ bSaving: !0 }),
              this.state.uploadImage
                ? yield this.SaveUpload()
                : yield this.CommitChanges(),
              this.setState({ bSaving: !1 });
          });
        }
        SaveUpload() {
          var e;
          return Object(n.a)(this, void 0, void 0, function* () {
            const {
                Profile: t,
                ProfileItems: r,
                AvatarHistory: a,
              } = this.props,
              o = yield t.UploadAvatar(
                yield null === (e = this.cropRef.current) || void 0 === e
                  ? void 0
                  : e.getBlob()
              );
            o.bSuccess
              ? (this.setState({ uploadImage: null, strUploadError: "" }),
                (this.cropRef = i.createRef()),
                r.SetEquippedAvatar(null, !0),
                a.RefreshAvatarHistory(),
                this.setState({
                  bHTMLError: 1 !== (yield r.CommitAvatarChanges()),
                }))
              : this.setState({ strUploadError: o.strError });
          });
        }
        CommitChanges() {
          return Object(n.a)(this, void 0, void 0, function* () {
            const {
                Profile: e,
                ProfileItems: t,
                OGGAvatars: r,
                AvatarHistory: i,
              } = this.props,
              [a, o, n] = yield Promise.all([
                t.CommitAvatarChanges(),
                e.BHasUncomittedAvatarChanges()
                  ? r.SetPlayerOGGAvatar(e)
                  : Promise.resolve(1),
                e.BHasUncomittedAvatarChanges()
                  ? i.SetPreviousAvatar(e)
                  : Promise.resolve(1),
              ]);
            this.setState({ bHTMLError: 1 !== a || (1 !== o && 1 !== n) }),
              i.RefreshAvatarHistory();
          });
        }
        componentWillUnmount() {
          this.RevertChanges();
        }
        render() {
          const {
              Profile: e,
              ProfileItems: t,
              OGGAvatars: r,
              AvatarHistory: o,
            } = this.props,
            {
              uploadImage: n,
              bAvatarCollectionExpanded: s,
              bFrameCollectionExpanded: l,
              bSaving: c,
            } = this.state,
            m = {
              Profile: e,
              ProfileItems: t,
              OGGAvatars: r,
              AvatarHistory: o,
              fnOnCollapse: this.Reset,
            };
          return i.createElement(
            he.c,
            { className: ue.AvatarDialog },
            i.createElement(a.a, {
              when: t.BIsAvatarUncomitted(),
              message: Object(_.f)("#Profile_Edit_UnsavedChangesWarning"),
            }),
            i.createElement(
              "div",
              { className: ue.AvatarDialogBody },
              i.createElement(he.z, null, Object(_.f)("#Profile_FieldAvatar")),
              i.createElement(
                he.d,
                null,
                Object(_.f)("#Profile_Edit_Avatar_Instructions")
              ),
              i.createElement(xe, {
                strHTMLError: this.state.bHTMLError
                  ? Object(_.f)("#ConnectionTrouble_FailedToConnect")
                  : "",
              }),
              i.createElement(
                Ye,
                { Profile: e },
                i.createElement(
                  "div",
                  { className: ue.AvatarDialogTop },
                  i.createElement(Ze, { Profile: e, ProfileItems: t }),
                  i.createElement(
                    "div",
                    { className: ue.AvatarDialogUploadArea },
                    i.createElement(Je, {
                      OnAvatarSelected: this.OnUploadSelected,
                      disabled: this.state.bSaving,
                      strError: this.state.strUploadError,
                    }),
                    i.createElement(
                      "div",
                      null,
                      Object(_.f)("#Profile_Edit_Avatar_UploadInstructions")
                    )
                  )
                ),
                n &&
                  i.createElement(
                    i.Suspense,
                    { fallback: null },
                    i.createElement(He, { imageData: n, ref: this.cropRef })
                  ),
                !n &&
                  !l &&
                  i.createElement(
                    ge,
                    Object.assign({}, m, {
                      bExpanded: s,
                      fnOnExpand: this.OnShowAllAvatarsClicked,
                    })
                  ),
                !n &&
                  !s &&
                  i.createElement(
                    we,
                    Object.assign({}, m, {
                      bExpanded: l,
                      fnOnExpand: this.OnShowAllFramesClicked,
                    })
                  )
              )
            ),
            i.createElement(Te, {
              onSave: this.OnSave,
              onCancel: this.RevertChanges,
              disabled: c || e.BIsAvatarChangeOnCooldown(),
            })
          );
        }
      }
      Object(n.b)([ve.b], Ve.prototype, "OnUploadSelected", null),
        Object(n.b)([ve.b], Ve.prototype, "OnShowAllAvatarsClicked", null),
        Object(n.b)([ve.b], Ve.prototype, "OnShowAllFramesClicked", null),
        Object(n.b)([ve.b], Ve.prototype, "Reset", null),
        Object(n.b)([ve.b], Ve.prototype, "RevertChanges", null),
        Object(n.b)([ve.b], Ve.prototype, "OnSave", null),
        Object(n.b)([ve.b], Ve.prototype, "SaveUpload", null),
        Object(n.b)([ve.b], Ve.prototype, "CommitChanges", null);
      const Ye = ({ Profile: e, children: t }) =>
        e.BIsAvatarChangeOnCooldown()
          ? i.createElement(
              Ue,
              {
                rtCooldownEnd: e.GetAvatarChangeCooldownEndRTime(),
                strCooldownLabel: Object(_.f)("#Profile_AvatarUploadingBanned"),
                strCooldownDescHTML: Object(_.f)(
                  "#Profile_AvatarUploadingBanned_Desc",
                  me.k_strAvatarCooldownSupportURL
                ),
              },
              t
            )
          : i.createElement(i.Fragment, null, t);
      function Ke(e, t, r, i) {
        return t
          ? (null == i ? void 0 : i.disableAnimation)
            ? U(t)
            : x(t)
          : Object(ee.a)(e || ee.b, r);
      }
      const Ze = Object(h.a)(({ Profile: e, ProfileItems: t }) => {
          const r = e.GetAvatarHash(),
            a = t.GetEquippedAvatar(),
            o = t.GetEquippedAvatarFrame();
          let n = !o && t.GetEquippedProfileModifier();
          n && !t.BIsLegacyGoldenProfile(n.appid) && (n = null);
          let s = null;
          return (
            n ? (s = t.GetProfileModifierAvatarFrameURL()) : o && (s = x(o)),
            i.createElement(
              "div",
              { className: ue.AvatarRow },
              i.createElement(Xe, {
                sizeClassName: ue.Large,
                sizePx: 184,
                avatarURL: Ke(r, a, "full"),
                frameURL: s,
                isGolden: !!n,
              }),
              i.createElement(Xe, {
                sizeClassName: ue.Medium,
                sizePx: 64,
                avatarURL: Ke(r, a, "medium"),
                frameURL: s,
                isGolden: !!n,
              }),
              i.createElement(Xe, {
                sizeClassName: ue.Small,
                sizePx: 32,
                avatarURL: Ke(r, a, "small"),
                frameURL: s,
                isGolden: !!n,
              })
            )
          );
        }),
        Xe = ({
          sizeClassName: e,
          sizePx: t,
          avatarURL: r,
          frameURL: a,
          isGolden: o,
        }) =>
          i.createElement(
            "div",
            { className: Object(E.a)(ue.Avatar, e) },
            i.createElement(
              "div",
              { className: ue.AvatarImgCtn },
              i.createElement("div", { className: ue.AvatarCropPreview }),
              a &&
                i.createElement(
                  "div",
                  { className: ue.AvatarFrame },
                  i.createElement("img", { src: a })
                ),
              o && i.createElement("div", { className: "goldenAvatarOverlay" }),
              i.createElement("img", { src: r })
            ),
            i.createElement("div", { className: ue.size }, t, "px")
          );
      function Je(e) {
        const { OnAvatarSelected: t, disabled: r, strError: a } = e,
          o = i.useRef(),
          n = i.useCallback(() => {
            var e;
            const r =
              null === (e = o.current) || void 0 === e ? void 0 : e.files;
            (null == r ? void 0 : r.length) > 0 &&
              r[0].type.startsWith("image/") &&
              (t(r[0]), (o.current.value = null));
          }, [t]);
        return i.createElement(
          i.Fragment,
          null,
          i.createElement("input", {
            type: "file",
            accept: "image/*",
            style: { display: "none" },
            ref: o,
            onInput: n,
          }),
          !!a && i.createElement("div", { className: ue.Error }, a),
          i.createElement(
            he.e,
            { onClick: () => o.current.click(), disabled: r },
            Object(_.f)("#Profile_UploadAvatar")
          )
        );
      }
      const Qe = Object(h.a)(({ Profile: e, ProfileItems: t }) => {
        const r = Ke(
            e.GetCommittedAvatarHash(),
            t.GetCommittedEquippedAvatar(),
            "full"
          ),
          a = t.GetCommittedEquippedAvatarFrame();
        let o = null;
        return (
          !a && t.GetCommittedEquippedProfileModifier()
            ? (o = t.GetProfileModifierAvatarFrameURL())
            : a && (o = x(a)),
          i.createElement(
            "div",
            { className: Object(E.a)(ue.Avatar, ue.Medium) },
            i.createElement(
              "div",
              { className: ue.AvatarImgCtn },
              o &&
                i.createElement(
                  "div",
                  { className: ue.AvatarFrame },
                  i.createElement("img", { src: o })
                ),
              i.createElement("img", { src: r })
            )
          )
        );
      });
      var et = r("TOXn");
      class tt extends i.Component {
        render() {
          const {
            Profile: { Location: e },
          } = this.props;
          return i.createElement(
            i.Fragment,
            null,
            i.createElement(it, { Location: e }),
            i.createElement(at, { Location: e }),
            i.createElement(ot, { Location: e })
          );
        }
      }
      const rt = { contextMenuPositionOptions: { bDisablePopTop: !0 } };
      let it = class extends i.Component {
        GetCountryList() {
          return Object(n.a)(this, void 0, void 0, function* () {
            const { Location: e } = this.props,
              t = yield e.GetCountryList();
            return [
              {
                label: Object(_.f)("#Profile_LocationDoNotDisplay"),
                data: null,
              },
              ...t.map((e) => ({ label: e.countryname, data: e.countrycode })),
            ];
          });
        }
        OnCountrySelected(e) {
          this.props.Location.SetCountry(e.data, e.data && e.label);
        }
        render() {
          const {
            Location: { Country: e, CountryCode: t },
          } = this.props;
          return i.createElement(
            i.Fragment,
            null,
            i.createElement("input", {
              type: "hidden",
              name: "country",
              value: t || "",
            }),
            i.createElement(
              he.n,
              Object.assign({}, rt, {
                label: Object(_.f)("#Profile_FieldCountry"),
                fnLoadOptions: this.GetCountryList,
                onChange: this.OnCountrySelected,
                initialValue: t,
                strInitialDisplay: e,
                strDefaultLabel: Object(_.f)("#Profile_LocationDoNotDisplay"),
                tooltip: Re("#Profile_DescriptionLocation"),
              })
            )
          );
        }
      };
      Object(n.b)([ve.b], it.prototype, "GetCountryList", null),
        Object(n.b)([ve.b], it.prototype, "OnCountrySelected", null),
        (it = Object(n.b)([h.a], it));
      let at = class extends i.Component {
        GetStateList() {
          return Object(n.a)(this, void 0, void 0, function* () {
            const { Location: e } = this.props,
              t = (yield e.GetStateList()) || [];
            return [
              {
                label: Object(_.f)("#Profile_LocationDoNotDisplay"),
                data: null,
              },
              ...t.map((e) => ({ label: e.statename, data: e.statecode })),
            ];
          });
        }
        OnStateSelected(e) {
          this.props.Location.SetState(e.data, e.data && e.label);
        }
        render() {
          const { Location: e } = this.props,
            { CountryCode: t, State: r, StateCode: a } = e;
          return i.createElement(
            i.Fragment,
            null,
            i.createElement("input", {
              type: "hidden",
              name: "state",
              value: a || "",
            }),
            e.BIsStateSelectionAvailable() &&
              i.createElement(
                he.n,
                Object.assign({ key: t }, rt, {
                  label: Object(_.f)("#Profile_FieldState"),
                  fnLoadOptions: this.GetStateList,
                  onChange: this.OnStateSelected,
                  initialValue: a,
                  strInitialDisplay: r,
                  strDefaultLabel: Object(_.f)("#Profile_LocationDoNotDisplay"),
                })
              )
          );
        }
      };
      Object(n.b)([ve.b], at.prototype, "GetStateList", null),
        Object(n.b)([ve.b], at.prototype, "OnStateSelected", null),
        (at = Object(n.b)([h.a], at));
      let ot = class extends i.Component {
        GetCityList() {
          return Object(n.a)(this, void 0, void 0, function* () {
            const { Location: e } = this.props,
              t = (yield e.GetCityList()) || [];
            return [
              {
                label: Object(_.f)("#Profile_LocationDoNotDisplay"),
                data: null,
              },
              ...t.map((e) => ({ label: e.cityname, data: "" + e.cityid })),
            ];
          });
        }
        OnStateSelected(e) {
          this.props.Location.SetCity(e.data, e.data && e.label);
        }
        render() {
          const { Location: e } = this.props,
            { StateCode: t, City: r, CityCode: a } = e;
          return i.createElement(
            i.Fragment,
            null,
            i.createElement("input", {
              type: "hidden",
              name: "city",
              value: a || "",
            }),
            e.BIsCitySelectionAvailable() &&
              i.createElement(
                he.n,
                Object.assign({ key: t }, rt, {
                  label: Object(_.f)("#Profile_FieldCity"),
                  fnLoadOptions: this.GetCityList,
                  onChange: this.OnStateSelected,
                  initialValue: "" + a,
                  strInitialDisplay: r,
                  strDefaultLabel: Object(_.f)("#Profile_LocationDoNotDisplay"),
                })
              )
          );
        }
      };
      Object(n.b)([ve.b], ot.prototype, "GetCityList", null),
        Object(n.b)([ve.b], ot.prototype, "OnStateSelected", null),
        (ot = Object(n.b)([h.a], ot));
      var nt = r("0QoN"),
        st = r("6dn6");
      class lt extends i.Component {
        constructor() {
          super(...arguments),
            (this.state = { strSummary: "" }),
            (this.m_refTextInput = i.createRef());
        }
        static getDerivedStateFromProps(e) {
          return { strSummary: e.Profile.GetSummary() };
        }
        OnChange(e) {
          this.SetInputValue(e.currentTarget.value);
        }
        InsertEmoticon(e, t) {
          t || this.m_refTextInput.current.focus(),
            this.InsertAtCursor(`:${e}:`);
        }
        InsertAtCursor(e) {
          let t = this.m_refTextInput.current.textarea,
            r = t.value,
            i = r.substr(0, t.selectionStart) + e + r.substr(t.selectionEnd),
            a = t.selectionStart + e.length;
          this.SetInputValue(i, () => {
            t.selectionStart = t.selectionEnd = a;
          });
        }
        SetInputValue(e, t) {
          this.setState({ strSummary: e }, t), this.props.Profile.SetSummary(e);
        }
        render() {
          const {
              EmoticonStore: e,
              EmoticonHoverStore: t,
              Profile: r,
            } = this.props,
            { strSummary: a } = this.state;
          return i.createElement(
            ct,
            { Profile: r },
            i.createElement(he.a, {
              nMinHeight: 40,
              name: "summary",
              rows: 3,
              cols: 40,
              onChange: this.OnChange,
              className: st.summaryTextArea,
              value: a,
              ref: this.m_refTextInput,
            }),
            i.createElement(
              "div",
              { className: st.formattingButtons },
              i.createElement(nt.a, {
                className: st.formattingButton,
                disabled: !1,
                OnEmoticonSelected: this.InsertEmoticon,
                emoticonHoverStore: t,
                emoticonStore: e,
              })
            )
          );
        }
      }
      Object(n.b)([ve.b], lt.prototype, "OnChange", null),
        Object(n.b)([ve.b], lt.prototype, "InsertEmoticon", null);
      const ct = ({ Profile: e, children: t }) =>
        e.BIsProfileSummaryChangeOnCooldown()
          ? i.createElement(
              Ue,
              {
                rtCooldownEnd: e.GetProfileSummaryCooldownEndRTime(),
                strCooldownLabel: Object(_.f)(
                  "#Profile_ProfileSummaryCooldown"
                ),
                strCooldownDescHTML: Object(_.f)(
                  "#Profile_ProfileSummaryCooldown_Desc",
                  me.k_strProfileSummaryCooldownSupportURL
                ),
              },
              t
            )
          : i.createElement(i.Fragment, null, t);
      class mt extends i.Component {
        constructor() {
          super(...arguments), (this.state = { bSaving: !1, strHTMLError: "" });
        }
        OnSubmit(e) {
          e.preventDefault(), this.CommitChanges(e.currentTarget);
        }
        CommitChanges(e) {
          return Object(n.a)(this, void 0, void 0, function* () {
            this.setState({ bSaving: !0, strHTMLError: "" });
            let t = yield te("profileSave", new FormData(e));
            t.strRedirectURL
              ? (window.location.href = `${t.strRedirectURL}/info`)
              : (this.props.Profile.SetBasicInfoChangesComitted(),
                t.strHTMLError
                  ? this.setState({ strHTMLError: t.strHTMLError })
                  : this.setState({ strHTMLError: "" }),
                this.setState({ bSaving: !1 }));
          });
        }
        RevertChanges() {
          const { Profile: e } = this.props;
          e.RevertBasicInfoChanges(), this.setState({ strHTMLError: "" });
        }
        render() {
          const {
              Profile: e,
              EmoticonStore: t,
              EmoticonHoverStore: r,
            } = this.props,
            { bSaving: a, strHTMLError: o } = this.state;
          return i.createElement(
            "form",
            {
              method: "POST",
              action: `${s.ProfileURL}edit/info`,
              onSubmit: this.OnSubmit,
            },
            i.createElement("input", {
              type: "hidden",
              name: "sessionID",
              value: v.c.SESSIONID,
            }),
            i.createElement("input", {
              type: "hidden",
              name: "type",
              value: "profileSave",
            }),
            i.createElement("input", {
              type: "hidden",
              name: "weblink_1_title",
              value: "",
            }),
            i.createElement("input", {
              type: "hidden",
              name: "weblink_1_url",
              value: "",
            }),
            i.createElement("input", {
              type: "hidden",
              name: "weblink_2_title",
              value: "",
            }),
            i.createElement("input", {
              type: "hidden",
              name: "weblink_2_url",
              value: "",
            }),
            i.createElement("input", {
              type: "hidden",
              name: "weblink_3_title",
              value: "",
            }),
            i.createElement("input", {
              type: "hidden",
              name: "weblink_3_url",
              value: "",
            }),
            i.createElement(he.z, null, Object(_.f)("#Profile_About")),
            i.createElement(he.d, null, i.createElement(dt, null)),
            i.createElement(xe, { strHTMLError: o }),
            i.createElement(
              ke,
              { title: Object(_.f)("#Profile_Edit_BasicInfo") },
              i.createElement(pt, { Profile: e }),
              !Object(de.b)(v.c.EREALM) && i.createElement(vt, { Profile: e })
            ),
            !Object(de.b)(v.c.EREALM) &&
              i.createElement(
                ke,
                { title: Object(_.f)("#Profile_Edit_Location") },
                i.createElement(tt, { Profile: e })
              ),
            !Object(de.b)(v.c.EREALM) &&
              i.createElement(
                ke,
                { title: Object(_.f)("#Profile_FieldSummary") },
                i.createElement(lt, {
                  Profile: e,
                  EmoticonStore: t,
                  EmoticonHoverStore: r,
                })
              ),
            !Object(de.b)(v.c.EREALM) &&
              i.createElement(
                ke,
                { title: Object(_.f)("#Profile_Edit_Preferences") },
                i.createElement(_t, { Profile: e })
              ),
            i.createElement(Te, { onCancel: this.RevertChanges, disabled: a })
          );
        }
      }
      Object(n.b)([ve.b], mt.prototype, "OnSubmit", null),
        Object(n.b)([ve.b], mt.prototype, "RevertChanges", null);
      class dt extends i.Component {
        render() {
          return i.createElement(
            "div",
            { style: { display: "block" } },
            i.createElement(et.a, {
              text: Object(_.f)(
                Object(de.b)(v.c.EREALM)
                  ? "#Profile_Edit_About_Instructions_SteamChina"
                  : "#Profile_Edit_About_Instructions"
              ),
            })
          );
        }
      }
      let pt = class extends i.Component {
        OnPersonaNameChange(e) {
          this.props.Profile.SetPersonaName(e.target.value);
        }
        OnRealNameChange(e) {
          this.props.Profile.SetRealName(e.target.value);
        }
        render() {
          const { Profile: e } = this.props;
          return i.createElement(
            i.Fragment,
            null,
            i.createElement(
              ut,
              { Profile: e },
              i.createElement(he.A, {
                label: Object(_.f)("#Profile_FieldProfileName"),
                disabled: e.BIsPersonaNameChangeOnCooldown(),
                name: "personaName",
                value: e.GetPersonaName(),
                onChange: this.OnPersonaNameChange,
              })
            ),
            !Object(de.b)(v.c.EREALM) &&
              i.createElement(
                ht,
                { Profile: e },
                i.createElement(he.A, {
                  label: Object(_.f)("#Profile_FieldRealName"),
                  disabled: e.BIsProfileSummaryChangeOnCooldown(),
                  tooltip: Re("#Profile_DescriptionRealName"),
                  name: "real_name",
                  value: e.GetRealName(),
                  onChange: this.OnRealNameChange,
                })
              )
          );
        }
      };
      Object(n.b)([ve.b], pt.prototype, "OnPersonaNameChange", null),
        Object(n.b)([ve.b], pt.prototype, "OnRealNameChange", null),
        (pt = Object(n.b)([h.a], pt));
      const ut = ({ Profile: e, children: t }) =>
          e.BIsPersonaNameChangeOnCooldown()
            ? i.createElement(
                Ue,
                {
                  rtCooldownEnd: e.GetPersonaNameCooldownEndRTime(),
                  strCooldownLabel: Object(_.f)("#Profile_PersonaNameCooldown"),
                  strCooldownDescHTML: Object(_.f)(
                    "#Profile_PersonaNameCooldown_Desc",
                    me.k_strPersonaNameCooldownSupportURL
                  ),
                },
                t
              )
            : i.createElement(i.Fragment, null, t),
        ht = ({ Profile: e, children: t }) =>
          e.BIsProfileSummaryChangeOnCooldown()
            ? i.createElement(
                Ue,
                {
                  rtCooldownEnd: e.GetProfileSummaryCooldownEndRTime(),
                  strCooldownLabel: Object(_.f)("#Profile_RealNameCooldown"),
                  strCooldownDescHTML: Object(_.f)(
                    "#Profile_RealNameCooldown_Desc",
                    me.k_strProfileSummaryCooldownSupportURL
                  ),
                },
                t
              )
            : i.createElement(i.Fragment, null, t);
      let vt = class extends i.Component {
        OnProfileURLChange(e) {
          this.props.Profile.SetCustomURL(e.target.value);
        }
        render() {
          const { Profile: e } = this.props;
          return i.createElement(
            i.Fragment,
            null,
            i.createElement(he.A, {
              label: Object(_.f)("#Profile_FieldCustomURL"),
              tooltip: Re("#Profile_DescriptionCustomURL"),
              name: "customURL",
              value: e.GetCustomURL(),
              onChange: this.OnProfileURLChange,
              description: Object(_.f)(
                "#Profile_ProfileAvailableAtURL",
                e.GetConstructedURL()
              ),
            })
          );
        }
      };
      Object(n.b)([ve.b], vt.prototype, "OnProfileURLChange", null),
        (vt = Object(n.b)([h.a], vt));
      let ft = class extends i.Component {
        componentDidMount() {
          this.m_disposer = Object(m.l)(() => {
            const { Profile: e } = this.props;
            document
              .querySelectorAll(".persona_name_text_content")
              .forEach((t) => (t.textContent = e.GetComittedPersonaName()));
          });
        }
        componentWillUnmount() {
          this.m_disposer();
        }
        render() {
          return null;
        }
      };
      ft = Object(n.b)([h.a], ft);
      let _t = class extends i.Component {
        OnProfileAwardsCheckboxChecked(e) {
          let { Profile: t } = this.props,
            r = e,
            i = t.GetPreferences();
          (i.hide_profile_awards = r), t.SetPreferences(i);
        }
        render() {
          const { Profile: e } = this.props,
            t = e.GetPreferences();
          return i.createElement(
            "div",
            null,
            i.createElement(he.f, {
              label: Object(_.f)("#Profile_Preferences_HideProfileAwards"),
              checked: t.hide_profile_awards,
              onChange: this.OnProfileAwardsCheckboxChecked,
            }),
            i.createElement("input", {
              type: "hidden",
              name: "hide_profile_awards",
              value: t.hide_profile_awards ? 1 : 0,
            })
          );
        }
      };
      Object(n.b)([ve.b], _t.prototype, "OnProfileAwardsCheckboxChecked", null),
        (_t = Object(n.b)([h.a], _t));
      var gt = r("af95");
      let bt = class extends i.Component {
        constructor() {
          super(...arguments), (this.state = { bSaving: !1, strHTMLError: "" });
        }
        CommitFavoriteBadge() {
          return Object(n.a)(this, void 0, void 0, function* () {
            const e = this.props.Badges;
            this.setState({ bSaving: !0 }),
              1 != (yield e.CommitFavoriteBadgeChanges())
                ? this.setState({
                    strHTMLError: Object(_.f)(
                      "#ConnectionTrouble_FailedToConnect"
                    ),
                  })
                : this.setState({ strHTMLError: "" }),
              this.setState({ bSaving: !1 });
          });
        }
        RevertFavoriteBadge() {
          this.props.Badges.RevertFavoriteBadge(),
            this.setState({ strHTMLError: "" });
        }
        componentWillUnmount() {
          this.props.Badges.RevertFavoriteBadge();
        }
        render() {
          const { Badges: e } = this.props,
            { bSaving: t, strHTMLError: r } = this.state;
          let o = e.FavoriteBadge;
          return i.createElement(
            Be.a,
            null,
            i.createElement(a.a, {
              when: e.BFavoriteBadgeUncomitted(),
              message: Object(_.f)("#Profile_Edit_UnsavedChangesWarning"),
            }),
            i.createElement(
              he.z,
              null,
              Object(_.f)("#Profile_Edit_FavoriteBadge")
            ),
            i.createElement(
              he.d,
              null,
              Object(_.f)("#Profile_Edit_Badge_Instructions")
            ),
            i.createElement(xe, { strHTMLError: r }),
            o && i.createElement(Et, { badge: o }),
            !o && i.createElement(yt, { count: e.Badges.length }),
            i.createElement(De, {
              getSearchFields: Ct,
              getItems: () =>
                Object(n.a)(this, void 0, void 0, function* () {
                  return e.Badges;
                }),
              onItemSelected: (t) => {
                e.SetFavoriteBadge(t);
              },
              ItemComponent: St,
            }),
            i.createElement(Te, {
              onSave: this.CommitFavoriteBadge,
              onCancel: this.RevertFavoriteBadge,
              disabled: t,
            })
          );
        }
      };
      Object(n.b)([ve.b], bt.prototype, "CommitFavoriteBadge", null),
        Object(n.b)([ve.b], bt.prototype, "RevertFavoriteBadge", null),
        (bt = Object(n.b)([h.a], bt));
      var Pt = bt;
      const Et = ({ badge: e, children: t }) =>
          i.createElement(
            "div",
            { className: Object(E.a)(gt.Badge, gt.FavoriteBadge) },
            i.createElement("img", {
              className: gt.BadgeImage,
              src: e.GetIconURL(),
            }),
            i.createElement(
              "div",
              { className: gt.BadgeDetails },
              i.createElement("div", { className: gt.BadgeName }, e.GetName()),
              i.createElement(
                "div",
                { className: gt.GameName },
                e.GetGameName()
              )
            )
          ),
        yt = ({ count: e, children: t }) =>
          i.createElement(
            "div",
            { className: Object(E.a)(gt.Badge, gt.FavoriteBadge) },
            i.createElement("img", {
              className: gt.BadgeImage,
              src: `${v.c.COMMUNITY_CDN_URL}public/images/trans.gif`,
            }),
            i.createElement(
              "div",
              { className: gt.BadgeDetails },
              i.createElement(
                "div",
                { className: gt.BadgeName },
                "None selected"
              ),
              i.createElement(
                "div",
                { className: gt.GameName },
                `${e} badges available`
              )
            )
          ),
        Ct = (e) => [e.GetName(), e.GetGameName()],
        St = ({ Item: e, onSelected: t }) => {
          const r = e;
          return i.createElement(
            "div",
            { className: Object(E.a)(gt.Badge, gt.BadgeOption), onClick: t },
            i.createElement("img", {
              className: gt.BadgeImage,
              src: r.GetIconURL(),
              loading: "lazy",
            }),
            i.createElement(
              "div",
              { className: gt.BadgeDetails },
              i.createElement("div", { className: gt.BadgeName }, r.GetName()),
              i.createElement(
                "div",
                { className: gt.GameName },
                r.GetGameName()
              )
            )
          );
        };
      var Ot = r("EWA5");
      let At = class extends i.Component {
        constructor() {
          super(...arguments), (this.state = { bSaving: !1, strHTMLError: "" });
        }
        CommitFavoriteGroup() {
          return Object(n.a)(this, void 0, void 0, function* () {
            const e = this.props.Profile.GroupList;
            this.setState({ bSaving: !0 });
            let t = yield e.CommitPrimaryGroup();
            t.strHTMLError
              ? this.setState({ strHTMLError: t.strHTMLError })
              : this.setState({ strHTMLError: "" }),
              this.setState({ bSaving: !1 });
          });
        }
        RevertFavoriteGroup() {
          this.props.Profile.GroupList.RevertPrimaryGroupChanges(),
            this.setState({ strHTMLError: "" });
        }
        componentWillUnmount() {
          this.props.Profile.GroupList.RevertPrimaryGroupChanges();
        }
        render() {
          const { Profile: e } = this.props,
            { bSaving: t, strHTMLError: r } = this.state,
            o = e.GroupList,
            s = o.PrimaryGroup;
          return i.createElement(
            i.Fragment,
            null,
            i.createElement(a.a, {
              when: o.BPrimaryGroupUncomitted(),
              message: Object(_.f)("#Profile_Edit_UnsavedChangesWarning"),
            }),
            i.createElement(
              he.z,
              null,
              Object(_.f)("#Profile_Edit_FavoriteGroup")
            ),
            i.createElement(
              he.d,
              null,
              Object(_.f)("#Profile_Edit_Group_Instructions")
            ),
            i.createElement(xe, { strHTMLError: r }),
            s && i.createElement(wt, { group: s }),
            i.createElement(De, {
              getSearchFields: jt,
              getItems: () =>
                Object(n.a)(this, void 0, void 0, function* () {
                  return yield o.BWaitForUserGroups(), o.GetUserGroups();
                }),
              onItemSelected: (e) => {
                o.SetPrimaryGroup(e);
              },
              ItemComponent: It,
            }),
            i.createElement(Te, {
              onSave: this.CommitFavoriteGroup,
              onCancel: this.RevertFavoriteGroup,
              disabled: t,
            })
          );
        }
      };
      Object(n.b)([ve.b], At.prototype, "CommitFavoriteGroup", null),
        Object(n.b)([ve.b], At.prototype, "RevertFavoriteGroup", null),
        (At = Object(n.b)([h.a], At));
      var Bt = At;
      const wt = ({ group: e, children: t }) =>
          i.createElement(
            "div",
            { className: Object(E.a)(Ot.Group, Ot.FavoriteGroup) },
            i.createElement("img", {
              className: Ot.GroupAvatar,
              src: e.GetAvatarURL("full"),
            }),
            i.createElement(
              "div",
              { className: Ot.GroupDetails },
              i.createElement("div", { className: Ot.GroupName }, e.GetName())
            )
          ),
        jt = (e) => [e.GetName()],
        It = ({ Item: e, onSelected: t }) => {
          const r = e;
          return i.createElement(
            "div",
            { className: Object(E.a)(Ot.Group, Ot.GroupOption), onClick: t },
            i.createElement("img", {
              className: Ot.GroupAvatar,
              src: r.GetAvatarURL("full"),
              loading: "lazy",
            }),
            i.createElement(
              "div",
              { className: Ot.GroupDetails },
              i.createElement("div", { className: Ot.GroupName }, r.GetName())
            )
          );
        };
      var Gt = r("mQc3");
      const Nt = ({ Item: e, small: t }) => {
          let r = q(e, t);
          return 0 == Object.keys(r).length
            ? null
            : i.createElement(
                "video",
                {
                  loop: !0,
                  preload: "none",
                  muted: !0,
                  autoPlay: !0,
                  playsInline: !0,
                },
                Object.keys(r).map((e) =>
                  i.createElement("source", { key: e, src: r[e], type: e })
                )
              );
        },
        Lt = ({ Background: e, className: t, small: r }) =>
          e
            ? i.createElement(
                "div",
                { className: t },
                i.createElement(Nt, { Item: e, small: r })
              )
            : null;
      function kt(e) {
        e.currentTarget.querySelector("video").play();
      }
      function Tt(e) {
        return [e.item_title, e.app_name];
      }
      function Rt(e, t) {
        return e ? !!t && e.communityitemid === t.communityitemid : !t;
      }
      let Mt = class extends i.Component {
        RevertChanges() {
          this.props.ProfileEdit.ProfileItems.RevertMiniProfileBackgroundChanges();
        }
        render() {
          const { ProfileEdit: e } = this.props,
            { Profile: t, ProfileItems: r, MiniProfileOverrideData: a } = e,
            { MiniProfileData: o, PersonaState: n } = t;
          return i.createElement(
            i.Fragment,
            null,
            i.createElement(
              he.z,
              null,
              Object(_.f)("#Profile_Edit_MiniProfile")
            ),
            i.createElement(
              he.d,
              null,
              Object(_.f)("#Profile_Edit_MiniProfile_Instructions")
            ),
            i.createElement(Dt, {
              ProfileItems: r,
              Profile: t,
              MiniProfileOverrideData: a,
              onDismiss: this.RevertChanges,
            })
          );
        }
      };
      Object(n.b)([ve.b], Mt.prototype, "RevertChanges", null),
        (Mt = Object(n.b)([h.a], Mt));
      var Ft = Mt;
      const Dt = Object(h.a)(
          ({
            Profile: e,
            ProfileItems: t,
            MiniProfileOverrideData: r,
            onDismiss: a,
          }) => {
            let o = t.GetEquippedProfileModifier();
            return (
              o && !t.BIsLegacyGoldenProfile(o.appid) && (o = null),
              i.createElement(Me, {
                fnRevertChanges: a,
                getSearchFields: Tt,
                getItems: () => t.GetOwnedMiniProfileBackgrounds(),
                fnCommitChanges: (e) =>
                  Object(n.a)(void 0, void 0, void 0, function* () {
                    return (
                      t.SetEquippedMiniProfileBackground(e),
                      t.CommitMiniProfileChanges()
                    );
                  }),
                ItemComponent: Ut,
                RenderDefaultComponent: ({ onSelected: e, active: t }) =>
                  i.createElement(Ht, {
                    onSelected: e,
                    active: t,
                    Modifier: o,
                  }),
                ActiveItem: t.GetEquippedMiniProfileBackground(),
                fnIsSameItem: Rt,
                fnRenderPreview: (a) =>
                  i.createElement(xt, {
                    MiniProfileBackground: a,
                    Profile: e,
                    ProfileItems: t,
                    MiniProfileOverrideData: r,
                  }),
              })
            );
          }
        ),
        xt = ({
          MiniProfileBackground: e,
          MiniProfileOverrideData: t,
          Profile: r,
          ProfileItems: a,
        }) => {
          const { MiniProfileData: o, PersonaState: n } = r;
          let s;
          if (e) {
            s = q(e);
            let t = U(e);
            t && (s.image = t);
          } else {
            s = a.GetProfileModifierMiniProfileBackgroundMovies();
            let e = a.GetProfileModifierMiniProfileBackground();
            e && (s.image = e);
          }
          return i.createElement(
            i.Fragment,
            null,
            i.createElement(
              "div",
              { className: Gt.MiniProfileDialogPreviewCtn },
              i.createElement(I, {
                persona: n,
                className: Gt.MiniProfilePreview,
                data_loader: o,
                community_data_override: Object.assign(Object.assign({}, t), {
                  profile_background: s,
                }),
              })
            )
          );
        },
        Ut = ({ Item: e, onSelected: t, children: r, active: a }) => {
          let o = q(e),
            n = Object.keys(o).length > 0;
          return i.createElement(
            "div",
            {
              className: Object(E.a)(
                Gt.MiniProfileBackgroundOption,
                n && Gt.WithVideo,
                a && Gt.Active
              ),
              onClick: t,
              onMouseEnter: n ? kt : void 0,
            },
            i.createElement(
              "div",
              { className: Gt.Preview },
              i.createElement("img", { src: U(e), loading: "lazy" }),
              n &&
                i.createElement(
                  "div",
                  { className: Gt.PreviewVideo },
                  i.createElement(Nt, { Item: e })
                )
            ),
            i.createElement(
              "div",
              { className: Gt.Details },
              i.createElement(
                "div",
                null,
                i.createElement("div", { className: Gt.Title }, e.item_title),
                i.createElement("div", { className: Gt.App }, e.app_name)
              ),
              r
            )
          );
        },
        Ht = ({ Modifier: e, onSelected: t, children: r, active: a }) =>
          e
            ? i.createElement(Ut, { Item: e, onSelected: t, active: a })
            : i.createElement(
                "div",
                {
                  className: Object(E.a)(
                    Gt.MiniProfileBackgroundOption,
                    a && Gt.Active
                  ),
                  onClick: t,
                },
                i.createElement(
                  "div",
                  { className: Object(E.a)(Gt.Preview, Gt.BlankBackground) },
                  i.createElement("img", {
                    src: `${v.c.COMMUNITY_CDN_URL}public/images/trans.gif`,
                    loading: "lazy",
                  })
                ),
                i.createElement(
                  "div",
                  { className: Gt.Details },
                  i.createElement(
                    "div",
                    null,
                    i.createElement(
                      "div",
                      { className: Gt.Title },
                      Object(_.f)("#Profile_Edit_DefaultBlankBackground")
                    ),
                    i.createElement("div", { className: Gt.App })
                  ),
                  r
                )
              );
      var qt = r("TtDX"),
        zt = r("y+6m");
      let Wt = class extends i.Component {
        render() {
          let e = this.props.PrivacyStore;
          return i.createElement(
            "div",
            { className: "ProfilePrivacyRoot" },
            i.createElement(
              $t,
              {
                PrivacyStore: e,
                strLabel: Object(_.f)("#ProfilePrivacy_BasicDetails"),
                strReadOnlySetting: ne(3),
              },
              Object(_.f)("#ProfilePrivacy_BasicDetails_Desc")
            ),
            i.createElement("div", { className: "ProfilePrivacyHR" }),
            i.createElement(
              $t,
              {
                PrivacyStore: e,
                strLabel: Object(_.f)("#ProfilePrivacy_Profile"),
                PrivacyKey: "PrivacyProfile",
              },
              i.createElement(
                "p",
                null,
                Object(_.f)("#ProfilePrivacy_Profile_Desc")
              ),
              i.createElement(
                "p",
                null,
                Object(_.f)("#ProfilePrivacy_Profile_Desc2")
              )
            ),
            i.createElement(
              "div",
              { className: "ProfilePrivacyRoot_Indent" },
              i.createElement(
                $t,
                {
                  PrivacyStore: e,
                  strLabel: Object(_.f)("#ProfilePrivacy_GameLibrary"),
                  PrivacyKey: "PrivacyOwnedGames",
                  LimitPrivacyKey: "PrivacyProfile",
                },
                Object(_.f)("#ProfilePrivacy_GameLibrary_Desc"),
                1 != e.GetPrivacySetting("PrivacyOwnedGames") &&
                  i.createElement(
                    Xt,
                    {
                      PrivacyStore: e,
                      PrivacyKey: "PrivacyPlaytime",
                      LimitPrivacyKey: "PrivacyOwnedGames",
                    },
                    Object(_.f)("#ProfilePrivacy_Playtime")
                  )
              ),
              i.createElement("div", { className: "ProfilePrivacyHR" }),
              i.createElement(
                $t,
                {
                  PrivacyStore: e,
                  strLabel: Object(_.f)("#ProfilePrivacy_FriendsList"),
                  PrivacyKey: "PrivacyFriendsList",
                  LimitPrivacyKey: "PrivacyProfile",
                },
                Object(_.f)("#ProfilePrivacy_FriendsList_Desc")
              ),
              i.createElement("div", { className: "ProfilePrivacyHR" }),
              i.createElement(
                $t,
                {
                  PrivacyStore: e,
                  strLabel: Object(_.f)("#ProfilePrivacy_Inventory"),
                  PrivacyKey: "PrivacyInventory",
                  LimitPrivacyKey: "PrivacyProfile",
                },
                Object(_.o)(
                  "#ProfilePrivacy_Inventory_Desc",
                  i.createElement(
                    "a",
                    { href: s.ProfileURL + "inventory/" },
                    Object(_.f)("#ProfilePrivacy_Inventory_Inventory")
                  ),
                  i.createElement(
                    "a",
                    { href: s.ProfileURL + "inventory/#753_6" },
                    Object(_.f)("#ProfilePrivacy_Inventory_TradingCards")
                  )
                ),
                1 != e.GetPrivacySetting("PrivacyInventory") &&
                  i.createElement(
                    Xt,
                    {
                      PrivacyStore: e,
                      PrivacyKey: "PrivacyInventoryGifts",
                      LimitPrivacyKey: "PrivacyInventory",
                    },
                    Object(_.f)("#ProfilePrivacy_Gifts")
                  )
              ),
              i.createElement("div", { className: "ProfilePrivacyHR" }),
              i.createElement(
                Vt,
                null,
                Object(_.f)("#ProfilePrivacy_Comments"),
                ":",
                i.createElement(Jt, { PrivacyStore: e })
              ),
              !Object(de.b)(v.c.EREALM) &&
                i.createElement("div", { className: "ProfilePrivacyHR" }),
              !Object(de.b)(v.c.EREALM) &&
                i.createElement(
                  $t,
                  {
                    PrivacyStore: e,
                    strLabel: Object(_.f)("#ProfilePrivacy_UGC"),
                    strReadOnlySetting: Object(_.f)("#Privacy_PerItem"),
                  },
                  Object(_.o)(
                    "#ProfilePrivacy_UGC_Desc",
                    i.createElement(
                      "a",
                      { href: s.ProfileURL + "screenshots/" },
                      Object(_.f)("#ProfilePrivacy_UGC_Desc_Screenshots")
                    ),
                    i.createElement(
                      "a",
                      { href: s.ProfileURL + "myworkshopfiles/" },
                      Object(_.f)("#ProfilePrivacy_UGC_Desc_WorkshopItems")
                    )
                  )
                )
            )
          );
        }
      };
      function $t(e) {
        let t;
        return (
          (t = e.strReadOnlySetting
            ? i.createElement(Qt, { strLabel: e.strReadOnlySetting })
            : i.createElement(Kt, {
                PrivacyStore: e.PrivacyStore,
                PrivacyKey: e.PrivacyKey,
                LimitPrivacyKey: e.LimitPrivacyKey,
              })),
          i.createElement(
            i.Fragment,
            null,
            i.createElement(Vt, null, e.strLabel, ":", t),
            i.createElement(Yt, null, e.children)
          )
        );
      }
      function Vt(e) {
        return i.createElement(
          "div",
          { className: "ProfilePrivacyHeader" },
          e.children
        );
      }
      function Yt(e) {
        return i.createElement(
          "div",
          { className: "ProfilePrivacyDesc" },
          e.children
        );
      }
      Wt = Object(n.b)([h.a], Wt);
      let Kt = class extends i.Component {
        OnClick(e) {
          let t = this.props.PrivacyStore.GetPrivacySetting(
            this.props.PrivacyKey
          );
          Object(qt.a)(
            i.createElement(er, {
              OnChange: this.OnSettingChanged,
              eCurrentPrivacy: t,
              eMinPrivacy: this.GetMinPrivacy(),
            }),
            e,
            { bOverlapHorizontal: !0 }
          );
        }
        OnSettingChanged(e) {
          this.props.PrivacyStore.ChangePrivacySetting(
            this.props.PrivacyKey,
            e
          );
        }
        GetMinPrivacy() {
          if (this.props.LimitPrivacyKey)
            return this.props.PrivacyStore.GetPrivacySetting(
              this.props.LimitPrivacyKey
            );
        }
        render() {
          let e = ne(
            this.props.PrivacyStore.GetPrivacySetting(this.props.PrivacyKey)
          );
          return i.createElement(
            i.Fragment,
            null,
            i.createElement(
              "div",
              { className: "ProfilePrivacyDropDown", onClick: this.OnClick },
              e,
              i.createElement("img", {
                className: "ProfilePrivacyDropDown_Arrow",
                src:
                  v.c.COMMUNITY_CDN_URL +
                  "public/images/skin_1/actionArrowDnWhite.gif",
              })
            ),
            i.createElement(Zt, {
              eSaveState: this.props.PrivacyStore.GetSaveState(
                this.props.PrivacyKey
              ),
            })
          );
        }
      };
      function Zt(e) {
        switch (e.eSaveState) {
          case 1:
            return i.createElement(
              "div",
              { className: "PrivacySaveNotice Saving" },
              Object(_.f)("#Shared_Saving")
            );
          case 3:
            return i.createElement(
              "div",
              { className: "PrivacySaveNotice Error" },
              Object(_.f)("#Error_Error")
            );
          case 2:
            return i.createElement(
              "div",
              { className: "PrivacySaveNotice Saved" },
              Object(_.f)("#Shared_Saved")
            );
          case 0:
          default:
            return null;
        }
      }
      Object(n.b)([ve.b], Kt.prototype, "OnClick", null),
        Object(n.b)([ve.b], Kt.prototype, "OnSettingChanged", null),
        (Kt = Object(n.b)([h.a], Kt));
      let Xt = class extends Kt {
        OnCheckboxChecked(e) {
          let t = e.currentTarget.checked ? 1 : 3;
          this.props.PrivacyStore.ChangePrivacySetting(
            this.props.PrivacyKey,
            t,
            this.props.LimitPrivacyKey
          );
        }
        render() {
          let e =
            1 ==
            this.props.PrivacyStore.GetPrivacySetting(this.props.PrivacyKey);
          return i.createElement(
            "div",
            { className: "ProfilePrivacyCheckbox" },
            i.createElement(
              "label",
              null,
              i.createElement("input", {
                className: "ProfilePrivacyCheckbox_Input",
                type: "checkbox",
                checked: e,
                onChange: this.OnCheckboxChecked,
              }),
              i.createElement(
                "div",
                { className: "ProfilePrivacyCheckbox_Desc" },
                this.props.children
              )
            )
          );
        }
      };
      Object(n.b)([ve.b], Xt.prototype, "OnCheckboxChecked", null),
        (Xt = Object(n.b)([h.a], Xt));
      let Jt = class extends i.Component {
        constructor(e) {
          super(e), (this.state = { eSaveState: 0 });
        }
        OnClick(e) {
          let t = this.props.PrivacyStore.CommentPermission;
          Object(qt.a)(
            i.createElement(tr, {
              OnChange: this.OnSettingChanged,
              eCurrentPermission: t,
              eMinPrivacy:
                this.props.PrivacyStore.GetPrivacySetting("PrivacyProfile"),
            }),
            e,
            { bOverlapHorizontal: !0 }
          );
        }
        OnSettingChanged(e) {
          this.props.PrivacyStore.ChangeCommentPermission(e);
        }
        render() {
          let e = this.props.PrivacyStore.CommentPermission,
            t = this.props.PrivacyStore.GetPrivacySetting("PrivacyProfile"),
            r = (function (e) {
              switch (e) {
                case 0:
                  return Object(_.f)("#Privacy_FriendsOnly");
                case 1:
                  return Object(_.f)("#Privacy_Public");
                case 2:
                  return Object(_.f)("#Privacy_Private");
                default:
                  return "";
              }
            })(((a = e), 1 == (o = t) ? 2 : 2 == o && 1 == a ? 0 : a));
          var a, o;
          return i.createElement(
            i.Fragment,
            null,
            i.createElement(
              "div",
              { className: "ProfilePrivacyDropDown", onClick: this.OnClick },
              r,
              i.createElement("img", {
                className: "ProfilePrivacyDropDown_Arrow",
                src:
                  v.c.COMMUNITY_CDN_URL +
                  "public/images/skin_1/actionArrowDnWhite.gif",
              })
            ),
            i.createElement(Zt, {
              eSaveState: this.props.PrivacyStore.GetCommentSaveState(),
            })
          );
        }
      };
      function Qt(e) {
        return i.createElement(
          "div",
          { className: "ProfilePrivacyDropDown readonly" },
          e.strLabel
        );
      }
      Object(n.b)([ve.b], Jt.prototype, "OnClick", null),
        Object(n.b)([ve.b], Jt.prototype, "OnSettingChanged", null),
        (Jt = Object(n.b)([h.a], Jt));
      class er extends i.Component {
        render() {
          let e = this.props.eMinPrivacy;
          return i.createElement(
            zt.c,
            null,
            (!e || e >= 3) &&
              i.createElement(
                zt.d,
                { onSelected: () => this.props.OnChange(3) },
                Object(_.f)("#Privacy_Public")
              ),
            (!e || e >= 2) &&
              i.createElement(
                zt.d,
                { onSelected: () => this.props.OnChange(2) },
                Object(_.f)("#Privacy_FriendsOnly")
              ),
            i.createElement(
              zt.d,
              { onSelected: () => this.props.OnChange(1) },
              Object(_.f)("#Privacy_Private")
            )
          );
        }
      }
      class tr extends i.Component {
        render() {
          let e = this.props.eMinPrivacy;
          return i.createElement(
            zt.c,
            null,
            (!e || e >= 3) &&
              i.createElement(
                zt.d,
                {
                  onSelected: () => this.props.OnChange(1),
                  title: Object(_.f)("#Profile_CommentPermission_Public_Desc"),
                },
                Object(_.f)("#Privacy_Public")
              ),
            (!e || e >= 2) &&
              i.createElement(
                zt.d,
                {
                  onSelected: () => this.props.OnChange(0),
                  title: Object(_.f)(
                    "#Profile_CommentPermission_FriendsOnly_Desc"
                  ),
                },
                Object(_.f)("#Privacy_FriendsOnly")
              ),
            i.createElement(
              zt.d,
              {
                onSelected: () => this.props.OnChange(2),
                title: Object(_.f)("#Profile_CommentPermission_Private_Desc"),
              },
              Object(_.f)("#Privacy_Private")
            )
          );
        }
      }
      var rr = r("YtMT"),
        ir = r("gCuR"),
        ar = r("8Uds");
      const or = ({ className: e, width: t, height: r, theme: a }) => (
        a || (a = "Default"),
        (a += "Theme"),
        i.createElement(
          "svg",
          {
            width: t || "401",
            height: r || "399",
            viewBox: "0 0 401 399",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            className: Object(E.a)(e, ir.ProfilePreview, ar[a]),
          },
          i.createElement("rect", {
            y: "13",
            width: "401",
            height: "386",
            fill: "#373C42",
          }),
          i.createElement("rect", {
            x: "0.5",
            y: "13.5",
            width: "400",
            height: "385",
            stroke: "black",
            strokeOpacity: "0.5",
          }),
          i.createElement("rect", {
            x: "26",
            y: "33",
            width: "61",
            height: "61",
            rx: "10",
            fill: "#272B30",
          }),
          i.createElement("path", {
            d: "M57.0246 64.052C63.4696 64.052 68.6942 58.8273 68.6942 52.3823C68.6942 45.9373 63.4696 40.7126 57.0246 40.7126C50.5796 40.7126 45.3549 45.9373 45.3549 52.3823C45.3549 58.8273 50.5796 64.052 57.0246 64.052Z",
            fill: "#444A51",
          }),
          i.createElement("path", {
            d: "M77.4319 72.8873C76.6734 68.1167 70.0792 66.5175 65.3744 65.0024C63.1235 66.918 60.2118 68.0792 57.0246 68.0792C53.8374 68.0792 50.9262 66.918 48.6753 65.0024C43.97 66.5175 37.3763 68.1167 36.6172 72.8873C35.2667 81.3728 47.8848 86.2873 57.0246 86.2873C66.1648 86.2873 78.7825 81.3728 77.4319 72.8873Z",
            fill: "#444A51",
          }),
          i.createElement("rect", {
            x: "299",
            y: "50",
            width: "91",
            height: "31.882",
            rx: "3",
            fill: "#272B30",
          }),
          i.createElement("rect", {
            x: "299",
            y: "87",
            width: "44",
            height: "10",
            rx: "3",
            fill: "#272B30",
          }),
          i.createElement("rect", {
            x: "346",
            y: "87",
            width: "44",
            height: "10",
            rx: "3",
            fill: "#272B30",
          }),
          i.createElement("rect", {
            x: "299",
            y: "104.091",
            width: "91",
            height: "240.254",
            rx: "3",
            fill: "#272B30",
          }),
          i.createElement("rect", {
            x: "103",
            y: "57",
            width: "82",
            height: "6",
            rx: "3",
            fill: "#444A51",
          }),
          i.createElement("rect", {
            x: "103",
            y: "67",
            width: "82",
            height: "6",
            rx: "3",
            fill: "#444A51",
          }),
          i.createElement("rect", {
            x: "26",
            y: "117.755",
            width: "260",
            height: "87.6755",
            rx: "3",
            fill: "#272B30",
          }),
          i.createElement("rect", {
            x: "32",
            y: "182.755",
            width: "246",
            height: "17",
            rx: "3",
            fill: "#262B31",
          }),
          i.createElement("rect", {
            x: "37",
            y: "185.755",
            width: "21",
            height: "4",
            rx: "2",
            fill: "#373C42",
          }),
          i.createElement("rect", {
            x: "37",
            y: "192.755",
            width: "12",
            height: "4",
            rx: "2",
            fill: "#373C42",
          }),
          i.createElement("rect", {
            x: "71",
            y: "185.755",
            width: "21",
            height: "4",
            rx: "2",
            fill: "#373C42",
          }),
          i.createElement("rect", {
            x: "71",
            y: "192.755",
            width: "12",
            height: "4",
            rx: "2",
            fill: "#373C42",
          }),
          i.createElement("path", {
            d: "M26 120.755C26 119.098 27.3431 117.755 29 117.755H283C284.657 117.755 286 119.098 286 120.755V131.755H26V120.755Z",
            fill: "#444A51",
          }),
          i.createElement("rect", {
            x: "35",
            y: "120.755",
            width: "37",
            height: "7",
            rx: "3",
            fill: "#373C42",
          }),
          i.createElement("rect", {
            x: "103",
            y: "38.0502",
            width: "57",
            height: "11.3864",
            rx: "3",
            fill: "#4F555C",
          }),
          i.createElement("rect", {
            x: "299",
            y: "32",
            width: "35",
            height: "11",
            rx: "3",
            fill: "#4F555C",
          }),
          i.createElement("rect", {
            x: "26",
            y: "214.54",
            width: "260",
            height: "167.381",
            rx: "3",
            fill: "#272B30",
          }),
          i.createElement("rect", {
            x: "32",
            y: "358.54",
            width: "246",
            height: "17",
            rx: "3",
            fill: "#262B31",
          }),
          i.createElement("rect", {
            x: "37",
            y: "361.54",
            width: "21",
            height: "4",
            rx: "2",
            fill: "#373C42",
          }),
          i.createElement("rect", {
            x: "37",
            y: "368.54",
            width: "12",
            height: "4",
            rx: "2",
            fill: "#373C42",
          }),
          i.createElement("rect", {
            x: "71",
            y: "361.54",
            width: "21",
            height: "4",
            rx: "2",
            fill: "#373C42",
          }),
          i.createElement("rect", {
            x: "71",
            y: "368.54",
            width: "12",
            height: "4",
            rx: "2",
            fill: "#373C42",
          }),
          i.createElement("path", {
            d: "M26 217.54C26 215.883 27.3431 214.54 29 214.54H283C284.657 214.54 286 215.883 286 217.54V228.54H26V217.54Z",
            fill: "#444A51",
          }),
          i.createElement("rect", {
            x: "35",
            y: "217.54",
            width: "37",
            height: "7",
            rx: "3",
            fill: "#373C42",
          }),
          i.createElement("circle", {
            cx: "347.5",
            cy: "37.5",
            r: "8.5",
            stroke: "#4F555C",
            strokeWidth: "2",
          }),
          i.createElement("rect", {
            x: "41",
            y: "144",
            width: "31",
            height: "31",
            rx: "5",
            fill: "#373C42",
          }),
          i.createElement("rect", {
            x: "36",
            y: "241",
            width: "111",
            height: "31",
            rx: "5",
            fill: "#373C42",
          }),
          i.createElement("rect", {
            x: "36",
            y: "283",
            width: "111",
            height: "31",
            rx: "5",
            fill: "#373C42",
          }),
          i.createElement("rect", {
            x: "161",
            y: "241",
            width: "111",
            height: "31",
            rx: "5",
            fill: "#373C42",
          }),
          i.createElement("rect", {
            x: "161",
            y: "283",
            width: "111",
            height: "31",
            rx: "5",
            fill: "#373C42",
          }),
          i.createElement("rect", {
            x: "91",
            y: "144",
            width: "31",
            height: "31",
            rx: "5",
            fill: "#373C42",
          }),
          i.createElement("rect", {
            x: "141",
            y: "144",
            width: "31",
            height: "31",
            rx: "5",
            fill: "#373C42",
          }),
          i.createElement("rect", {
            x: "191",
            y: "144",
            width: "31",
            height: "31",
            rx: "5",
            fill: "#373C42",
          }),
          i.createElement("rect", {
            x: "241",
            y: "144",
            width: "31",
            height: "31",
            rx: "5",
            fill: "#373C42",
          }),
          i.createElement("rect", {
            y: "13",
            width: "401",
            height: "382",
            fill: "var(--gradient-background)",
            fillOpacity: "0.23",
            className: ir.ThemeBackground,
          }),
          i.createElement("rect", {
            y: "13",
            width: "401",
            height: "382",
            fill: "url(#paint0_radial)",
            className: ir.PaintRadial0,
          }),
          i.createElement("rect", {
            y: "13",
            width: "401",
            height: "382",
            fill: "url(#paint1_radial)",
            className: ir.PaintRadial1,
          }),
          i.createElement(
            "defs",
            null,
            i.createElement(
              "radialGradient",
              {
                id: "paint0_radial",
                cx: "0",
                cy: "0",
                r: "1",
                gradientUnits: "userSpaceOnUse",
                gradientTransform:
                  "translate(11 126) rotate(9.77175) scale(182.65 191.735)",
              },
              i.createElement("stop", { stopColor: "var(--gradient-left)" }),
              i.createElement("stop", {
                offset: "1",
                stopColor: "var(--gradient-background-left)",
                stopOpacity: "0",
              })
            ),
            i.createElement(
              "radialGradient",
              {
                id: "paint1_radial",
                cx: "0",
                cy: "0",
                r: "1",
                gradientUnits: "userSpaceOnUse",
                gradientTransform:
                  "translate(385 148) rotate(-164.809) scale(312.935 328.499)",
              },
              i.createElement("stop", {
                offset: "0.348958",
                stopColor: "var(--gradient-right)",
              }),
              i.createElement("stop", {
                offset: "1",
                stopColor: "var(--gradient-background-right)",
                stopOpacity: "0",
              })
            )
          )
        )
      );
      const nr = Object(h.a)(({ ProfileItems: e, Background: t, theme: r }) => {
        void 0 === t && (t = e.GetEquippedBackground());
        let a = t && t.movie_webm,
          o = t ? U(t) : H(null);
        const n = t && 1 == e.GetEquippedBackgroundFlags();
        return i.createElement(
          "div",
          { className: ir.ProfilePagePreviewCtn },
          i.createElement(
            "div",
            { className: ir.BackgroundPosition },
            i.createElement(
              "div",
              { className: Object(E.a)(ir.Background, n && ir.FullScreen) },
              !a && i.createElement("img", { src: o }),
              a && i.createElement(Lt, { Background: t, className: "" })
            )
          ),
          i.createElement(
            "div",
            { className: ir.ProfilePreviewPosition },
            i.createElement(
              "div",
              { className: ir.ProfilePreviewCtn },
              i.createElement(or, {
                className: ir.ProfilePreview,
                width: "50%",
                height: "auto",
                theme: r,
              })
            )
          )
        );
      });
      let sr = class extends i.Component {
        constructor() {
          super(...arguments), (this.state = { equipFlags: 0 });
        }
        componentDidMount() {
          return Object(n.a)(this, void 0, void 0, function* () {
            const { ProfileItems: e } = this.props;
            yield e.GetEquippedBackground();
          });
        }
        CommitChanges(e) {
          return Object(n.a)(this, void 0, void 0, function* () {
            const { ProfileItems: t } = this.props;
            return t.SetAndEquipProfileBackground(e);
          });
        }
        RevertChanges() {
          const { ProfileItems: e } = this.props;
          e.RevertBackgroundChanges();
        }
        render() {
          const { ProfileItems: e, ProfileTheme: t } = this.props;
          e.GetEquippedBackground();
          let r = e.GetEquippedProfileModifier();
          return (
            r && !e.BIsLegacyGoldenProfile(r.appid) && (r = null),
            i.createElement(
              i.Fragment,
              null,
              i.createElement(
                he.z,
                null,
                Object(_.f)("#Profile_Edit_ChooseBackground")
              ),
              i.createElement(
                he.d,
                null,
                Object(_.f)("#Profile_Edit_Background_Instructions")
              ),
              i.createElement(Me, {
                className: rr.BackgroundPickerPage,
                getSearchFields: Tt,
                getItems: () => e.GetOwnedBackgrounds(),
                fnCommitChanges: this.CommitChanges,
                fnRevertChanges: this.RevertChanges,
                ItemComponent: ur,
                RenderDefaultComponent: ({ onSelected: e, active: t }) =>
                  i.createElement(hr, {
                    Modifier: r,
                    onSelected: e,
                    active: t,
                  }),
                ActiveItem: e.GetEquippedBackground(),
                fnIsSameItem: Rt,
                fnRenderPreview: (r) =>
                  i.createElement(dr, {
                    Background: r,
                    ProfileItems: e,
                    theme: t.ActiveTheme.theme_id,
                  }),
              })
            )
          );
        }
      };
      Object(n.b)([ve.b], sr.prototype, "CommitChanges", null),
        Object(n.b)([ve.b], sr.prototype, "RevertChanges", null),
        (sr = Object(n.b)([h.a], sr));
      var lr = sr;
      const cr = ({ label: e, currentFlag: t, flag: r, onSelect: a }) =>
        i.createElement(
          "div",
          { className: rr.ProfileBackgroundEquipOption },
          i.createElement(he.J, {
            checked: t == r,
            disabled: t == r,
            onChange: (e) => {
              e && a(r);
            },
            label: e,
          })
        );
      let mr = class extends i.Component {
        OnChange(e) {
          this.props.ProfileItems.SetEquippedBackgroundFlags(e);
        }
        render() {
          let { Background: e, ProfileItems: t } = this.props;
          const r = t.GetEquippedBackgroundFlags();
          let a = i.createElement(cr, {
              flag: 1,
              currentFlag: r,
              onSelect: this.OnChange,
              label: Object(_.f)(
                "#Profile_Edit_BackgroundEquipFlag_FullScreen"
              ),
            }),
            o = i.createElement(cr, {
              flag: 0,
              currentFlag: r,
              onSelect: this.OnChange,
              label: Object(_.f)(
                "#Profile_Edit_BackgroundEquipFlag_OriginalSize"
              ),
            });
          return i.createElement(
            "div",
            {
              className: Object(E.a)(
                rr.ProfileBackgroundEquipOptions,
                !e && rr.HideEquipOptions
              ),
            },
            a,
            o
          );
        }
      };
      Object(n.b)([ve.b], mr.prototype, "OnChange", null),
        (mr = Object(n.b)([h.a], mr));
      const dr = Object(h.a)(({ Background: e, ProfileItems: t, theme: r }) =>
          i.createElement(
            "div",
            null,
            i.createElement(nr, {
              Background: e,
              ProfileItems: t,
              key: e && e.communityitemid,
              theme: r,
            }),
            i.createElement(mr, { ProfileItems: t, Background: e })
          )
        ),
        pr = ({ Background: e, children: t }) =>
          i.createElement(
            "div",
            { className: rr.Details },
            i.createElement(
              "div",
              null,
              i.createElement(
                "div",
                { className: rr.Title },
                e
                  ? e.item_title
                  : Object(_.f)("#Profile_Edit_DefaultBlankBackground")
              ),
              i.createElement("div", { className: rr.App }, e && e.app_name)
            ),
            t
          ),
        ur = ({ Item: e, onSelected: t, active: r, children: a }) => {
          let o = !!e.movie_webm;
          return i.createElement(
            "div",
            {
              className: Object(E.a)(
                rr.BackgroundOption,
                o && rr.WithVideo,
                r && rr.Active
              ),
              onClick: t,
              onMouseEnter: o ? kt : void 0,
            },
            i.createElement(
              "div",
              { className: rr.Preview },
              i.createElement("img", { src: H(e), loading: "lazy" }),
              i.createElement(Lt, {
                Background: e,
                className: rr.PreviewVideo,
                small: !0,
              })
            ),
            i.createElement(pr, { Background: e }, a)
          );
        },
        hr = ({ onSelected: e, Modifier: t, active: r, children: a }) =>
          t
            ? i.createElement(ur, { Item: t, onSelected: e, active: r })
            : i.createElement(
                "div",
                {
                  className: Object(E.a)(rr.BackgroundOption, r && rr.Active),
                  onClick: e,
                },
                i.createElement(
                  "div",
                  { className: rr.Preview },
                  i.createElement("img", { src: H(null) })
                ),
                i.createElement(pr, { Background: null }, a)
              );
      var vr = r("55Ip"),
        fr = r("gavw");
      class _r extends i.Component {
        render() {
          const {
            root: e,
            currentPath: t,
            linksAvailable: r,
            children: a,
          } = this.props;
          return i.createElement(
            i.Fragment,
            null,
            i.createElement(
              "div",
              { className: fr.BackToProfileCtn },
              i.createElement(
                "a",
                { href: s.ProfileURL },
                Object(_.f)("#Profile_ReturnToYourProfile")
              )
            ),
            i.createElement(
              "div",
              { className: fr.Shell },
              i.createElement(gr, {
                root: e,
                currentPath: t,
                linksAvailable: r,
              }),
              i.createElement(
                "div",
                { className: fr.PageContent },
                i.createElement(Be.a, null, a)
              )
            )
          );
        }
      }
      const gr = ({ root: e, currentPath: t, linksAvailable: r }) => {
          const a = { root: e, currentPath: t },
            o = qr;
          return i.createElement(
            "div",
            { className: fr.Navigation },
            i.createElement(
              br,
              Object.assign({}, a, { to: o.Info() }),
              Object(_.f)("#Profile_Edit_BasicInfo")
            ),
            i.createElement(
              br,
              Object.assign({}, a, { to: o.Avatar() }),
              Object(_.f)("#Profile_FieldAvatar")
            ),
            i.createElement(
              br,
              Object.assign({}, a, { to: o.Background() }),
              Object(_.f)("#Profile_FieldProfileBackground")
            ),
            i.createElement(
              br,
              Object.assign({}, a, { to: o.MiniProfile() }),
              Object(_.f)("#Profile_Edit_MiniProfile")
            ),
            i.createElement(
              br,
              Object.assign({}, a, { to: o.Theme() }),
              Object(_.f)("#Profile_Edit_Theme")
            ),
            i.createElement(
              br,
              Object.assign({}, a, {
                to: o.ProfileModifier(),
                fnVisible: r.ProfileModifierAvailable,
              }),
              Object(_.f)("#Profile_Edit_ProfileModifier")
            ),
            i.createElement(
              br,
              Object.assign({}, a, {
                to: o.FavoriteBadge(),
                fnVisible: r.BadgesAvailable,
              }),
              Object(_.f)("#Profile_Edit_FavoriteBadge")
            ),
            i.createElement(
              br,
              Object.assign({}, a, {
                to: o.FavoriteGroup(),
                fnVisible: r.GroupsAvailable,
              }),
              Object(_.f)("#Profile_Edit_FavoriteGroup")
            ),
            i.createElement(
              br,
              Object.assign({}, a, {
                to: o.Showcases(),
                fnVisible: r.ShowcasesAvailable,
              }),
              Object(_.f)("#Profile_Edit_FeaturedShowcase")
            ),
            i.createElement("div", { className: fr.ProfileEditLine }),
            i.createElement(
              br,
              Object.assign({}, a, { to: o.Privacy() }),
              Object(_.f)("#Profile_EditPrivacySettings")
            ),
            i.createElement(
              "div",
              { className: fr.ProfileEditStoreLink },
              i.createElement(
                "a",
                {
                  className: Object(E.a)(fr.ExternalLink),
                  href: `${v.c.STORE_BASE_URL}points/`,
                },
                Object(_.f)("#SteamPointsShop")
              )
            )
          );
        },
        br = Object(h.a)(
          ({
            root: e,
            currentPath: t,
            to: r,
            fnVisible: a,
            fnDisabled: o,
            children: n,
          }) => {
            const s = `${e}${r}`,
              l = s == t;
            if (!l && a && !a()) return null;
            const c = o && o(),
              m = !!c;
            let d;
            return (
              c && (d = (e) => e.preventDefault()),
              i.createElement(
                vr.c,
                {
                  className: Object(E.a)(
                    fr.NavLink,
                    l && fr.Active,
                    m && fr.Disabled
                  ),
                  to: s,
                  onClick: d,
                  title: c,
                },
                n
              )
            );
          }
        );
      var Pr = r("042x");
      let Er = class extends i.Component {
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
          const { ProfileItems: e } = this.props;
          return e.BHasAnyProfileModifiers()
            ? i.createElement(Or, {
                active: this.state.bDialogActive,
                ProfileItems: e,
                onDismiss: this.HideDialog,
              })
            : null;
        }
      };
      Object(n.b)([ve.b], Er.prototype, "ShowDialog", null),
        Object(n.b)([ve.b], Er.prototype, "HideDialog", null),
        (Er = Object(n.b)([h.a], Er));
      var yr = Er;
      const Cr = Object(h.a)(({ ProfileItems: e }) => {
          let t = e.GetProfileModifierCSSURL();
          return t
            ? i.createElement("link", {
                rel: "stylesheet",
                type: "text/css",
                href: t,
              })
            : null;
        }),
        Sr = ({ ProfileModifier: e }) => {
          const t = e
              ? U(e)
              : `${v.c.COMMUNITY_CDN_URL}public/images/trans.gif`,
            r = e
              ? e.item_title
              : Object(_.f)("#Profile_Edit_DefaultBlankBackground"),
            a = e ? e.app_name : "";
          return i.createElement(
            i.Fragment,
            null,
            i.createElement(
              "div",
              { className: Pr.ProfileModifierBody },
              i.createElement("img", {
                className: Pr.GoldenProfileItemImage,
                src: t,
              }),
              i.createElement("div", { className: Pr.GoldenProfileTitle }, r),
              i.createElement("div", { className: Pr.GoldenProfileApp }, a)
            )
          );
        };
      let Or = class extends i.Component {
        OnDismiss() {
          this.props.ProfileItems.RevertProfileModifierChanges(),
            this.props.onDismiss();
        }
        render() {
          const { ProfileItems: e } = this.props;
          return i.createElement(
            i.Fragment,
            null,
            i.createElement(
              he.z,
              null,
              Object(_.f)("#Profile_Edit_ProfileModifier")
            ),
            i.createElement(
              he.d,
              null,
              Object(_.f)("#Profile_Edit_ProfileModifier_Instructions")
            ),
            i.createElement(Me, {
              fnRevertChanges: this.OnDismiss,
              getSearchFields: Tt,
              getItems: () => e.GetOwnedProfileModifiers(),
              fnCommitChanges: (t) =>
                Object(n.a)(this, void 0, void 0, function* () {
                  return (
                    e.SetEquippedProfileModifier(t),
                    e.CommitProfileModifierChanges()
                  );
                }),
              ItemComponent: Ar,
              RenderDefaultComponent: ({ onSelected: e, active: t }) =>
                i.createElement(Br, { onSelected: e, active: t }),
              ActiveItem: e.GetEquippedProfileModifier(),
              fnIsSameItem: Rt,
              fnRenderPreview: (e) =>
                i.createElement(Sr, { ProfileModifier: e }),
            })
          );
        }
      };
      Object(n.b)([ve.b], Or.prototype, "OnDismiss", null),
        (Or = Object(n.b)([h.a], Or));
      const Ar = ({ Item: e, onSelected: t, children: r, active: a }) =>
          i.createElement(
            "div",
            {
              className: Object(E.a)(Pr.ProfileModifierOption, a && Pr.Active),
              onClick: t,
            },
            i.createElement(
              "div",
              { className: Pr.Preview },
              i.createElement("img", { src: U(e), loading: "lazy" })
            ),
            i.createElement(
              "div",
              { className: Pr.Details },
              i.createElement(
                "div",
                null,
                i.createElement("div", { className: Pr.Title }, e.item_title),
                i.createElement("div", { className: Pr.App }, e.app_name)
              ),
              r
            )
          ),
        Br = ({ onSelected: e, children: t, active: r }) =>
          i.createElement(
            "div",
            {
              className: Object(E.a)(Pr.ProfileModifierOption, r && Pr.Active),
              onClick: e,
            },
            i.createElement(
              "div",
              { className: Object(E.a)(Pr.Preview, Pr.BlankBackground) },
              i.createElement("img", {
                src: `${v.c.COMMUNITY_CDN_URL}public/images/trans.gif`,
                loading: "lazy",
              })
            ),
            i.createElement(
              "div",
              { className: Pr.Details },
              i.createElement(
                "div",
                null,
                i.createElement(
                  "div",
                  { className: Pr.Title },
                  Object(_.f)("#ProfileModifier_DisabledTitle")
                ),
                i.createElement("div", { className: Pr.App })
              ),
              t
            )
          );
      var wr = r("9g5v");
      let jr = class extends i.Component {
        constructor() {
          super(...arguments), (this.state = { bSaving: !1, strHTMLError: "" });
        }
        CommitChanges(e) {
          return Object(n.a)(this, void 0, void 0, function* () {
            const { ProfileTheme: t } = this.props;
            this.setState({ bSaving: !0, strHTMLError: "" }),
              t.SetActiveTheme(e.theme_id);
            let r = yield t.CommitActiveTheme();
            return (
              1 != r &&
                this.setState({
                  strHTMLError: Object(_.f)(
                    "#ConnectionTrouble_FailedToConnect"
                  ),
                }),
              this.setState({ bSaving: !1 }),
              r
            );
          });
        }
        RevertChanges() {
          const { ProfileTheme: e } = this.props;
          this.setState({ strHTMLError: "" }), e.RevertActiveTheme();
        }
        render() {
          const { ProfileTheme: e, ProfileItems: t } = this.props;
          let r = !!t.GetEquippedProfileModifier();
          return i.createElement(
            i.Fragment,
            null,
            i.createElement(he.z, null, Object(_.f)("#Profile_Edit_Theme")),
            i.createElement(
              he.d,
              null,
              Object(_.f)("#Profile_Edit_Theme_Instructions")
            ),
            i.createElement(xe, { strHTMLError: this.state.strHTMLError }),
            r && i.createElement(Tr, null),
            i.createElement(Me, {
              getSearchFields: null,
              ActiveItem: e.ActiveTheme,
              getItems: () =>
                Object(n.a)(this, void 0, void 0, function* () {
                  return e.AvailableThemes;
                }),
              fnCommitChanges: this.CommitChanges,
              fnRevertChanges: this.RevertChanges,
              fnRenderPreview: (e) =>
                i.createElement(Nr, { Theme: e, ProfileItems: t }),
              fnIsSameItem: Lr,
              ItemComponent: kr,
              classNameItemPicker: wr.ProfileThemePicker,
              className: Object(E.a)(r && wr.ThemePickerDisabled),
            })
          );
        }
      };
      Object(n.b)([ve.b], jr.prototype, "CommitChanges", null),
        Object(n.b)([ve.b], jr.prototype, "RevertChanges", null),
        (jr = Object(n.b)([h.a], jr));
      var Ir = jr;
      const Gr = ({ Theme: e, children: t }) => {
          let r;
          return (
            (r =
              "string" == typeof e
                ? e + "Theme"
                : ((null == e ? void 0 : e.theme_id) || "Default") + "Theme"),
            i.createElement("div", { className: ar[r] }, t)
          );
        },
        Nr = Object(h.a)(({ Theme: e, ProfileItems: t }) =>
          i.createElement(
            "div",
            { className: wr.ProfileThemePreviewCtn },
            i.createElement(nr, { ProfileItems: t, theme: e.theme_id })
          )
        ),
        Lr = (e, t) => (e && e.theme_id) === (t && t.theme_id),
        kr = ({ Item: e, onSelected: t, active: r, children: a }) => {
          const o = e.theme_id + "Theme",
            n = `ThemeOption${o}`;
          return i.createElement(
            "div",
            {
              className: Object(E.a)(
                wr.ProfileTheme,
                t && wr.Option,
                r && wr.Active,
                ar[o]
              ),
              onClick: t,
            },
            i.createElement(
              "div",
              { className: wr.PreviewCtn },
              i.createElement(
                "svg",
                {
                  className: Object(E.a)(wr.Preview),
                  viewBox: "0 0 382 382",
                  width: "100%",
                  height: "100%",
                },
                i.createElement("rect", {
                  width: "382",
                  height: "382",
                  fill: "var(--edit-background)",
                  className: wr.EditBackground,
                }),
                i.createElement("rect", {
                  width: "382",
                  height: "382",
                  fill: "var(--gradient-background)",
                  fillOpacity: "0.23",
                  className: wr.ThemeBackground,
                }),
                i.createElement("rect", {
                  width: "382",
                  height: "382",
                  fill: `url(#${n}paint0_radial)`,
                  className: wr.PaintRadial0,
                }),
                i.createElement("rect", {
                  width: "382",
                  height: "382",
                  fill: `url(#${n}paint1_radial)`,
                  className: wr.PaintRadial1,
                }),
                i.createElement(
                  "defs",
                  null,
                  i.createElement(
                    "radialGradient",
                    {
                      id: `${n}paint0_radial`,
                      cx: "0",
                      cy: "0",
                      r: "1",
                      gradientUnits: "userSpaceOnUse",
                      gradientTransform:
                        "translate(11 126) rotate(9.77175) scale(182.65 191.735)",
                    },
                    i.createElement("stop", {
                      stopColor: "var(--gradient-left)",
                    }),
                    i.createElement("stop", {
                      offset: "1",
                      stopColor: "var(--gradient-background-left)",
                      stopOpacity: "0",
                    })
                  ),
                  i.createElement(
                    "radialGradient",
                    {
                      id: `${n}paint1_radial`,
                      cx: "0",
                      cy: "0",
                      r: "1",
                      gradientUnits: "userSpaceOnUse",
                      gradientTransform:
                        "translate(385 148) rotate(-164.809) scale(312.935 328.499)",
                    },
                    i.createElement("stop", {
                      offset: "0.348958",
                      stopColor: "var(--gradient-right)",
                    }),
                    i.createElement("stop", {
                      offset: "1",
                      stopColor: "var(--gradient-background-right)",
                      stopOpacity: "0",
                    })
                  )
                )
              )
            ),
            i.createElement(
              "div",
              { className: wr.Details },
              i.createElement("div", { className: wr.Title }, e.title),
              a
            )
          );
        },
        Tr = ({ children: e }) =>
          i.createElement(
            "div",
            { className: wr.ThemesDisabledNotice },
            i.createElement(
              "div",
              { className: wr.Notice },
              Object(_.f)("#Profile_Edit_GoldenProfileOverridesTheme")
            )
          );
      class Rr extends i.Component {
        constructor() {
          super(...arguments),
            (this.m_refDiv = i.createRef()),
            (this.state = { bSaving: !1, strHTMLError: "" });
        }
        OnSubmit(e) {
          e.preventDefault(), this.CommitChanges(e.currentTarget);
        }
        CommitChanges(e) {
          return Object(n.a)(this, void 0, void 0, function* () {
            this.setState({ bSaving: !0, strHTMLError: "" });
            let t = yield te("showcases", new FormData(e));
            t.strHTMLError
              ? this.setState({ strHTMLError: t.strHTMLError })
              : this.setState({ strHTMLError: "" }),
              this.setState({ bSaving: !1 });
          });
        }
        RevertChanges() {
          window.location.href = s.ProfileURL;
        }
        componentDidMount() {
          this.props.elShowcases &&
            ((this.props.elShowcases.style.display = ""),
            this.m_refDiv.current.appendChild(this.props.elShowcases));
        }
        render() {
          const { bSaving: e, strHTMLError: t } = this.state,
            { ProfileTheme: r } = this.props;
          return i.createElement(
            Gr,
            { Theme: r.ActiveTheme },
            i.createElement(
              "form",
              { onSubmit: this.OnSubmit },
              i.createElement(
                he.z,
                null,
                Object(_.f)("#Profile_Edit_FeaturedShowcase")
              ),
              i.createElement(
                he.d,
                null,
                Object(_.f)("#Profile_Edit_Showcase_Instructions")
              ),
              i.createElement(xe, { strHTMLError: t }),
              i.createElement("div", { ref: this.m_refDiv }),
              i.createElement(Te, { onCancel: this.RevertChanges, disabled: e })
            )
          );
        }
      }
      let Mr, Fr, Dr;
      Object(n.b)([ve.b], Rr.prototype, "OnSubmit", null),
        Object(n.b)([ve.b], Rr.prototype, "RevertChanges", null);
      class xr extends i.Component {
        constructor() {
          super(...arguments), (this.state = { bReady: !1 });
        }
        render() {
          if (!this.state.bReady) return null;
          const e = this.props.match.url,
            t = Mr,
            {
              Profile: r,
              ProfileItems: o,
              ProfileTheme: n,
              EmoticonStore: s,
              EmoticonHoverStore: l,
            } = t,
            c = qr,
            m = {
              ProfileModifierAvailable: () => o.BHasAnyProfileModifiers(),
              BadgesAvailable: () =>
                !Object(de.b)(v.c.EREALM) && t.ProfileBadges.Badges.length > 0,
              GroupsAvailable: () =>
                !Object(de.b)(v.c.EREALM) &&
                (!r.GroupList.BGroupsLoaded() || r.GroupList.BHasAnyGroups()),
              ShowcasesAvailable: () => null != Fr,
            };
          return i.createElement(
            i.Fragment,
            null,
            i.createElement(Cr, { ProfileItems: o }),
            i.createElement(ft, { Profile: r }),
            i.createElement($e, { Profile: r, ProfileItems: o }),
            i.createElement(
              _r,
              {
                root: e,
                currentPath: this.props.location.pathname,
                linksAvailable: m,
              },
              i.createElement(
                a.e,
                null,
                i.createElement(
                  a.c,
                  { path: `${e}${c.Info()}` },
                  i.createElement(mt, {
                    Profile: r,
                    EmoticonStore: s,
                    EmoticonHoverStore: l,
                  })
                ),
                i.createElement(
                  a.c,
                  { path: `${e}${c.Avatar()}` },
                  i.createElement(We, {
                    Profile: r,
                    ProfileItems: o,
                    OGGAvatars: t.OGGAvatarStore,
                    AvatarHistory: t.AvatarHistory,
                  })
                ),
                i.createElement(
                  a.c,
                  { path: `${e}${c.Background()}` },
                  i.createElement(lr, { ProfileTheme: n, ProfileItems: o })
                ),
                i.createElement(
                  a.c,
                  { path: `${e}${c.MiniProfile()}` },
                  i.createElement(Ft, { ProfileEdit: t })
                ),
                i.createElement(
                  a.c,
                  { path: `${e}${c.Theme()}` },
                  i.createElement(Ir, { ProfileTheme: n, ProfileItems: o })
                ),
                i.createElement(
                  a.c,
                  { path: `${e}${c.ProfileModifier()}` },
                  i.createElement(yr, { ProfileItems: o })
                ),
                !Object(de.b)(v.c.EREALM) &&
                  i.createElement(
                    a.c,
                    { path: `${e}${c.FavoriteBadge()}` },
                    i.createElement(Pt, { Badges: t.ProfileBadges })
                  ),
                !Object(de.b)(v.c.EREALM) &&
                  i.createElement(
                    a.c,
                    { path: `${e}${c.FavoriteGroup()}` },
                    i.createElement(Bt, { Profile: r })
                  ),
                i.createElement(
                  a.c,
                  { path: `${e}${c.Privacy()}` },
                  i.createElement(Wt, { PrivacyStore: t.ProfilePrivacy })
                ),
                i.createElement(
                  a.c,
                  { path: `${e}${c.Showcases()}` },
                  i.createElement(Rr, { elShowcases: Fr, ProfileTheme: n })
                ),
                i.createElement(
                  a.c,
                  null,
                  i.createElement(a.b, { to: `${e}${c.Info()}` })
                )
              )
            )
          );
        }
        componentDidMount() {
          Dr ||
            (Dr = (function () {
              return Object(n.a)(this, void 0, void 0, function* () {
                let e = Object(v.g)("config", "profile_config");
                e && Object.assign(s, e),
                  (Mr = new ce(
                    Object(v.g)("profile-edit", "profile_edit_config"),
                    Object(v.g)("profile-badges", "profile_edit_config")
                  )),
                  Object(de.b)(v.c.EREALM) ||
                    Mr.Profile.GroupList.GetUserGroups(),
                  (Fr = document.getElementById("showcases"));
              });
            })()),
            Dr.then(() => {
              this.setState({ bReady: !0 }, () => {
                for (let e of [
                  "profile_edit_main_content",
                  "profile_edit_leftcol",
                ]) {
                  let t = document.getElementById(e);
                  t && (t.style.visibility = "");
                }
              });
            });
        }
      }
      var Ur = r("tPo2");
      r("OU48");
      const Hr = () => "edit",
        qr = {
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
      function zr(e) {
        return i.createElement(
          "div",
          null,
          i.createElement(Ur.a, { targetType: 3 })
        );
      }
      function Wr(e) {
        const t = e.match.path;
        return i.createElement(
          a.e,
          null,
          i.createElement(a.c, {
            path: `${t}/${Hr()}`,
            render: (e) => i.createElement(xr, Object.assign({}, e)),
          }),
          i.createElement(a.c, {
            path: `${t}`,
            render: (e) =>
              i.createElement(o.a, {
                config: {
                  "profile-rewards": () =>
                    i.createElement(zr, Object.assign({}, e)),
                },
              }),
          })
        );
      }
    },
    NzeR: function (e, t, r) {
      e.exports = {
        ProfileEditRoot: "profileedit_ProfileEditRoot_1lBbV",
        ItemPicker: "profileedit_ItemPicker_n1M1o",
        ItemPickerCtn: "profileedit_ItemPickerCtn_20EDL",
        ItemPickerList: "profileedit_ItemPickerList_SMUuC",
        PickerPreviewDialog: "profileedit_PickerPreviewDialog_20HXb",
        PickerPreviewBody: "profileedit_PickerPreviewBody_2sArl",
        PickerPreviewItems: "profileedit_PickerPreviewItems_2N5uy",
        SaveCancelButtons: "profileedit_SaveCancelButtons_2KJ8a",
        ProfileRow: "profileedit_ProfileRow_302o-",
        ProfileCol: "profileedit_ProfileCol_3tMGe",
        ProfileBox: "profileedit_ProfileBox_uwqwo",
        ProfileBoxTitle: "profileedit_ProfileBoxTitle_2CGYg",
        ProfileBoxContent: "profileedit_ProfileBoxContent_3s6BB",
        ShortLeftCol: "profileedit_ShortLeftCol_1tHO9",
        HTMLErrorBox: "profileedit_HTMLErrorBox_2MfLN",
        HTMLErrorBoxAppear: "profileedit_HTMLErrorBoxAppear_1QYzn",
        CooldownNotice: "profileedit_CooldownNotice_2kl3A",
        ErrorMessage: "profileedit_ErrorMessage_3j9lm",
        DisabledInputCtn: "profileedit_DisabledInputCtn_ZePu4",
      };
    },
    URGX: function (e, t, r) {
      "use strict";
      r.d(t, "a", function () {
        return c;
      });
      var i = r("mrSG"),
        a = r("q1tI"),
        o = r("TyAF"),
        n = r("exH9"),
        s = r("WonJ"),
        l = r.n(s);
      r("jUCX");
      let c = class extends a.Component {
        static get hoverClass() {
          return l.a.hoverParent;
        }
        render() {
          const e = this.props,
            { persona: t, animating: r, className: o, size: s, dim: c } = e,
            m = Object(i.c)(e, [
              "persona",
              "animating",
              "className",
              "size",
              "dim",
            ]);
          let d = "";
          return (
            "medium" == s ? (d = l.a.Medium) : "large" == s && (d = l.a.Large),
            a.createElement(
              "div",
              Object.assign(
                {
                  className: Object(n.a)(
                    l.a.SnoozeContainer,
                    t.online_state,
                    o,
                    r && l.a.animating,
                    d,
                    c && l.a.Dim
                  ),
                },
                m
              ),
              a.createElement(
                "div",
                {
                  "data-text": "Z",
                  className: Object(n.a)(l.a.SnoozeZ, l.a.Z1),
                },
                "Z"
              ),
              a.createElement(
                "div",
                {
                  "data-text": "Z",
                  className: Object(n.a)(l.a.SnoozeZ, l.a.Z2),
                },
                "Z"
              ),
              a.createElement(
                "div",
                {
                  "data-text": "Z",
                  className: Object(n.a)(l.a.SnoozeZ, l.a.Z3),
                },
                "Z"
              )
            )
          );
        }
      };
      c = Object(i.b)([o.a], c);
    },
    WonJ: function (e, t, r) {
      e.exports = {
        SnoozeContainer: "friendsnooze_SnoozeContainer_1Dsum",
        SnoozeZ: "friendsnooze_SnoozeZ_2n0Ei",
        none: "friendsnooze_none_T3Fb5",
        Medium: "friendsnooze_Medium_1iYPl",
        Large: "friendsnooze_Large_3BESV",
        Dim: "friendsnooze_Dim_rpZ9b",
        Z1: "friendsnooze_Z1_2hnF3",
        Z2: "friendsnooze_Z2_VmQTO",
        Z3: "friendsnooze_Z3_29mta",
        hoverParent: "friendsnooze_hoverParent_3-8cB",
        animating: "friendsnooze_animating_2rXc7",
        Snoring: "friendsnooze_Snoring_38wIV",
      };
    },
    Xfd2: function (e, t, r) {
      e.exports = {
        "duration-app-launch": "800ms",
        PersonaStatusIcon: "personastatusicons_PersonaStatusIcon_KxAI_",
        MobilePhoneIcon: "personastatusicons_MobilePhoneIcon_1iRFj",
      };
    },
    YtMT: function (e, t, r) {
      e.exports = {
        EquippedBackgroundBlock:
          "profilebackground_EquippedBackgroundBlock_1Pihr",
        EquippedBackgroundPreview:
          "profilebackground_EquippedBackgroundPreview_2k_2L",
        BackgroundOption: "profilebackground_BackgroundOption_189ER",
        Preview: "profilebackground_Preview_2Zegg",
        Active: "profilebackground_Active_evPn2",
        Details: "profilebackground_Details_1xKo7",
        PreviewVideo: "profilebackground_PreviewVideo_2zA7Y",
        WithVideo: "profilebackground_WithVideo_3muY5",
        Title: "profilebackground_Title_o0PlP",
        App: "profilebackground_App_3yGh0",
        ProfileBackgroundEquipOptions:
          "profilebackground_ProfileBackgroundEquipOptions_RS77U",
        HideEquipOptions: "profilebackground_HideEquipOptions_1XNnr",
        ProfileBackgroundEquipOption:
          "profilebackground_ProfileBackgroundEquipOption_3Hc2R",
      };
    },
    af95: function (e, t, r) {
      e.exports = {
        Badge: "favoritebadge_Badge_2ODUB",
        BadgeImage: "favoritebadge_BadgeImage_3M7FE",
        BadgeDetails: "favoritebadge_BadgeDetails_3Y40H",
        GameName: "favoritebadge_GameName_k5Tyf",
        Active: "favoritebadge_Active_1r9u8",
        FavoriteBadge: "favoritebadge_FavoriteBadge_3lkNZ",
        BadgeOption: "favoritebadge_BadgeOption_P1MG7",
      };
    },
    fOts: function (e, t, r) {
      "use strict";
      r.d(t, "a", function () {
        return u;
      });
      var i = r("mrSG"),
        a = r("q1tI"),
        o = r("TyAF"),
        n = r("TLQK"),
        s = (r("li7h"), r("jUCX")),
        l = r("exH9"),
        c = r("6Y59"),
        m = r("Xfd2"),
        d = r.n(m),
        p = r("kkPE");
      const u = Object(o.a)((e) => {
        const { persona: t, className: r } = e,
          o = Object(i.c)(e, ["persona", "className"]);
        if (!t) return null;
        if (!t.is_online) return null;
        const m = t.HasStateFlag(512),
          u = t.HasStateFlag(2048),
          h = !u && t.HasStateFlag(1024);
        return a.createElement(
          a.Fragment,
          null,
          m &&
            a.createElement(
              "div",
              Object.assign(
                {
                  className: Object(l.a)(
                    r,
                    d.a.PersonaStatusIcon,
                    d.a.MobilePhoneIcon,
                    Object(s.c)(t)
                  ),
                  title: Object(n.f)("#Platform_Hint_Mobile"),
                },
                o
              ),
              a.createElement(p.b, null)
            ),
          u &&
            a.createElement(
              "div",
              Object.assign(
                {
                  className: Object(l.a)(
                    r,
                    d.a.PersonaStatusIcon,
                    d.a.VRIcon,
                    Object(s.c)(t)
                  ),
                  title: Object(n.f)("#Platform_Hint_VR"),
                },
                o
              ),
              a.createElement(c.xb, null)
            ),
          h &&
            a.createElement(
              "div",
              Object.assign(
                {
                  className: Object(l.a)(
                    r,
                    d.a.PersonaStatusIcon,
                    d.a.BigPictureIcon,
                    Object(s.c)(t)
                  ),
                  title: Object(n.f)("#Platform_Hint_BigPicture"),
                },
                o
              ),
              a.createElement(c.f, null)
            )
        );
      });
    },
    gCuR: function (e, t, r) {
      e.exports = {
        ProfilePreview: "profilepreview_ProfilePreview_sJ5St",
        PaintRadial0: "profilepreview_PaintRadial0_3ygvj",
        PaintRadial1: "profilepreview_PaintRadial1_1iVdB",
        ThemeBackground: "profilepreview_ThemeBackground_2cgol",
        ProfilePagePreviewCtn: "profilepreview_ProfilePagePreviewCtn_jnA47",
        BackgroundPosition: "profilepreview_BackgroundPosition_2iCc5",
        Background: "profilepreview_Background_3gdqW",
        FullScreen: "profilepreview_FullScreen_3wfiB",
        ProfilePreviewPosition: "profilepreview_ProfilePreviewPosition_2YO8v",
        ProfilePreviewCtn: "profilepreview_ProfilePreviewCtn_uyN_g",
      };
    },
    gavw: function (e, t, r) {
      e.exports = {
        Shell: "profileeditshell_Shell_2kqKZ",
        Navigation: "profileeditshell_Navigation_33Kl1",
        NavLink: "profileeditshell_NavLink_3rtIp",
        ExternalLink: "profileeditshell_ExternalLink_1xCAN",
        Disabled: "profileeditshell_Disabled_k9wPo",
        Active: "profileeditshell_Active_3H7Aw",
        ProfileEditStoreLink: "profileeditshell_ProfileEditStoreLink_3iaJs",
        PageContent: "profileeditshell_PageContent_23XE6",
        ProfileEditLine: "profileeditshell_ProfileEditLine_58Mgh",
        BackToProfileCtn: "profileeditshell_BackToProfileCtn_1YOt2",
      };
    },
    mQc3: function (e, t, r) {
      e.exports = {
        MiniProfilePreview: "miniprofilepreview_MiniProfilePreview_1MWlW",
        MiniProfileBackgroundOption:
          "miniprofilepreview_MiniProfileBackgroundOption_1kB6_",
        Preview: "miniprofilepreview_Preview_1JFlR",
        Active: "miniprofilepreview_Active_B-qJh",
        Details: "miniprofilepreview_Details_3-aXJ",
        BlankBackground: "miniprofilepreview_BlankBackground_19sKX",
        PreviewVideo: "miniprofilepreview_PreviewVideo_3PAmy",
        Title: "miniprofilepreview_Title_2l5zy",
        App: "miniprofilepreview_App_xmRMR",
        WithVideo: "miniprofilepreview_WithVideo_1BBIS",
      };
    },
    uuth: function (e, t, r) {
      "use strict";
      (function (e) {
        r.d(t, "a", function () {
          return y;
        });
        var i = r("1TsT"),
          a = (r("17x9"), r("q1tI")),
          o = r.n(a),
          n = r("TOwV");
        function s(e, t) {
          for (var r = 0; r < t.length; r++) {
            var i = t[r];
            (i.enumerable = i.enumerable || !1),
              (i.configurable = !0),
              "value" in i && (i.writable = !0),
              Object.defineProperty(e, i.key, i);
          }
        }
        function l(e) {
          return (l = Object.setPrototypeOf
            ? Object.getPrototypeOf
            : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e);
              })(e);
        }
        function c(e, t) {
          return (c =
            Object.setPrototypeOf ||
            function (e, t) {
              return (e.__proto__ = t), e;
            })(e, t);
        }
        function m(e, t) {
          return !t || ("object" != typeof t && "function" != typeof t)
            ? (function (e) {
                if (void 0 === e)
                  throw new ReferenceError(
                    "this hasn't been initialised - super() hasn't been called"
                  );
                return e;
              })(e)
            : t;
        }
        function d(e) {
          var t = (function () {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
              return (
                Date.prototype.toString.call(
                  Reflect.construct(Date, [], function () {})
                ),
                !0
              );
            } catch (e) {
              return !1;
            }
          })();
          return function () {
            var r,
              i = l(e);
            if (t) {
              var a = l(this).constructor;
              r = Reflect.construct(i, arguments, a);
            } else r = i.apply(this, arguments);
            return m(this, r);
          };
        }
        function p(e, t) {
          var r,
            i =
              ((r = e),
              !isNaN(parseFloat(r)) && isFinite(r)
                ? parseFloat(r)
                : "px" === r.slice(-2)
                ? parseFloat(r.slice(0, -2))
                : void 0);
          if ("number" == typeof i) return i;
          var a = (function (e) {
            if ("%" === e.slice(-1)) return parseFloat(e.slice(0, -1)) / 100;
          })(e);
          return "number" == typeof a ? a * t : void 0;
        }
        var u = "above",
          h = "inside",
          v = "below",
          f = "invisible";
        function _(e) {
          return "string" == typeof e.type;
        }
        var g;
        var b = [];
        function P(e) {
          b.push(e),
            g ||
              (g = setTimeout(function () {
                var e;
                for (g = null; (e = b.shift()); ) e();
              }, 0));
          var t = !0;
          return function () {
            if (t) {
              t = !1;
              var r = b.indexOf(e);
              -1 !== r &&
                (b.splice(r, 1),
                !b.length && g && (clearTimeout(g), (g = null)));
            }
          };
        }
        var E = {
            debug: !1,
            scrollableAncestor: void 0,
            children: void 0,
            topOffset: "0px",
            bottomOffset: "0px",
            horizontal: !1,
            onEnter: function () {},
            onLeave: function () {},
            onPositionChange: function () {},
            fireOnRapidScroll: !0,
          },
          y = (function (t) {
            !(function (e, t) {
              if ("function" != typeof t && null !== t)
                throw new TypeError(
                  "Super expression must either be null or a function"
                );
              (e.prototype = Object.create(t && t.prototype, {
                constructor: { value: e, writable: !0, configurable: !0 },
              })),
                t && c(e, t);
            })(g, t);
            var r,
              a,
              l,
              m = d(g);
            function g(e) {
              var t;
              return (
                (function (e, t) {
                  if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function");
                })(this, g),
                ((t = m.call(this, e)).refElement = function (e) {
                  t._ref = e;
                }),
                t
              );
            }
            return (
              (r = g),
              (a = [
                {
                  key: "componentDidMount",
                  value: function () {
                    var e = this;
                    g.getWindow() &&
                      (this.cancelOnNextTick = P(function () {
                        e.cancelOnNextTick = null;
                        var t = e.props,
                          r = t.children;
                        t.debug,
                          (function (e, t) {
                            if (e && !_(e) && !t)
                              throw new Error(
                                "<Waypoint> needs a DOM element to compute boundaries. The child you passed is neither a DOM element (e.g. <div>) nor does it use the innerRef prop.\n\nSee https://goo.gl/LrBNgw for more info."
                              );
                          })(r, e._ref),
                          (e._handleScroll = e._handleScroll.bind(e)),
                          (e.scrollableAncestor = e._findScrollableAncestor()),
                          (e.scrollEventListenerUnsubscribe = Object(i.a)(
                            e.scrollableAncestor,
                            "scroll",
                            e._handleScroll,
                            { passive: !0 }
                          )),
                          (e.resizeEventListenerUnsubscribe = Object(i.a)(
                            window,
                            "resize",
                            e._handleScroll,
                            { passive: !0 }
                          )),
                          e._handleScroll(null);
                      }));
                  },
                },
                {
                  key: "componentDidUpdate",
                  value: function () {
                    var e = this;
                    g.getWindow() &&
                      this.scrollableAncestor &&
                      (this.cancelOnNextTick ||
                        (this.cancelOnNextTick = P(function () {
                          (e.cancelOnNextTick = null), e._handleScroll(null);
                        })));
                  },
                },
                {
                  key: "componentWillUnmount",
                  value: function () {
                    g.getWindow() &&
                      (this.scrollEventListenerUnsubscribe &&
                        this.scrollEventListenerUnsubscribe(),
                      this.resizeEventListenerUnsubscribe &&
                        this.resizeEventListenerUnsubscribe(),
                      this.cancelOnNextTick && this.cancelOnNextTick());
                  },
                },
                {
                  key: "_findScrollableAncestor",
                  value: function () {
                    var t = this.props,
                      r = t.horizontal,
                      i = t.scrollableAncestor;
                    if (i)
                      return (function (t) {
                        return "window" === t ? e.window : t;
                      })(i);
                    for (var a = this._ref; a.parentNode; ) {
                      if ((a = a.parentNode) === document.body) return window;
                      var o = window.getComputedStyle(a),
                        n =
                          (r
                            ? o.getPropertyValue("overflow-x")
                            : o.getPropertyValue("overflow-y")) ||
                          o.getPropertyValue("overflow");
                      if ("auto" === n || "scroll" === n || "overlay" === n)
                        return a;
                    }
                    return window;
                  },
                },
                {
                  key: "_handleScroll",
                  value: function (e) {
                    if (this._ref) {
                      var t = this._getBounds(),
                        r = (function (e) {
                          return e.viewportBottom - e.viewportTop == 0
                            ? f
                            : (e.viewportTop <= e.waypointTop &&
                                e.waypointTop <= e.viewportBottom) ||
                              (e.viewportTop <= e.waypointBottom &&
                                e.waypointBottom <= e.viewportBottom) ||
                              (e.waypointTop <= e.viewportTop &&
                                e.viewportBottom <= e.waypointBottom)
                            ? h
                            : e.viewportBottom < e.waypointTop
                            ? v
                            : e.waypointTop < e.viewportTop
                            ? u
                            : f;
                        })(t),
                        i = this._previousPosition,
                        a = this.props,
                        o = (a.debug, a.onPositionChange),
                        n = a.onEnter,
                        s = a.onLeave,
                        l = a.fireOnRapidScroll;
                      if (((this._previousPosition = r), i !== r)) {
                        var c = {
                          currentPosition: r,
                          previousPosition: i,
                          event: e,
                          waypointTop: t.waypointTop,
                          waypointBottom: t.waypointBottom,
                          viewportTop: t.viewportTop,
                          viewportBottom: t.viewportBottom,
                        };
                        o.call(this, c),
                          r === h
                            ? n.call(this, c)
                            : i === h && s.call(this, c),
                          l &&
                            ((i === v && r === u) || (i === u && r === v)) &&
                            (n.call(this, {
                              currentPosition: h,
                              previousPosition: i,
                              event: e,
                              waypointTop: t.waypointTop,
                              waypointBottom: t.waypointBottom,
                              viewportTop: t.viewportTop,
                              viewportBottom: t.viewportBottom,
                            }),
                            s.call(this, {
                              currentPosition: r,
                              previousPosition: h,
                              event: e,
                              waypointTop: t.waypointTop,
                              waypointBottom: t.waypointBottom,
                              viewportTop: t.viewportTop,
                              viewportBottom: t.viewportBottom,
                            }));
                      }
                    }
                  },
                },
                {
                  key: "_getBounds",
                  value: function () {
                    var e,
                      t,
                      r = this.props,
                      i = r.horizontal,
                      a = (r.debug, this._ref.getBoundingClientRect()),
                      o = a.left,
                      n = a.top,
                      s = a.right,
                      l = a.bottom,
                      c = i ? o : n,
                      m = i ? s : l;
                    this.scrollableAncestor === window
                      ? ((e = i ? window.innerWidth : window.innerHeight),
                        (t = 0))
                      : ((e = i
                          ? this.scrollableAncestor.offsetWidth
                          : this.scrollableAncestor.offsetHeight),
                        (t = i
                          ? this.scrollableAncestor.getBoundingClientRect().left
                          : this.scrollableAncestor.getBoundingClientRect()
                              .top));
                    var d = this.props,
                      u = d.bottomOffset;
                    return {
                      waypointTop: c,
                      waypointBottom: m,
                      viewportTop: t + p(d.topOffset, e),
                      viewportBottom: t + e - p(u, e),
                    };
                  },
                },
                {
                  key: "render",
                  value: function () {
                    var e = this,
                      t = this.props.children;
                    return t
                      ? _(t) || Object(n.isForwardRef)(t)
                        ? o.a.cloneElement(t, {
                            ref: function (r) {
                              e.refElement(r),
                                t.ref &&
                                  ("function" == typeof t.ref
                                    ? t.ref(r)
                                    : (t.ref.current = r));
                            },
                          })
                        : o.a.cloneElement(t, { innerRef: this.refElement })
                      : o.a.createElement("span", {
                          ref: this.refElement,
                          style: { fontSize: 0 },
                        });
                  },
                },
              ]) && s(r.prototype, a),
              l && s(r, l),
              g
            );
          })(o.a.PureComponent);
        (y.above = u),
          (y.below = v),
          (y.inside = h),
          (y.invisible = f),
          (y.getWindow = function () {
            if ("undefined" != typeof window) return window;
          }),
          (y.defaultProps = E),
          (y.displayName = "Waypoint");
      }.call(this, r("yLpj")));
    },
    yJIw: function (e, t, r) {
      e.exports = {
        AvatarRow: "avatar_AvatarRow_2_WvK",
        Avatar: "avatar_Avatar_27tBX",
        AvatarImgCtn: "avatar_AvatarImgCtn_38rbz",
        AvatarCropPreview: "avatar_AvatarCropPreview_2Oe26",
        AvatarFrame: "avatar_AvatarFrame_3ySvF",
        Large: "avatar_Large_EYMSh",
        Medium: "avatar_Medium_14qK3",
        Small: "avatar_Small_2pCRw",
        size: "avatar_size_2jOhb",
        AvatarDialog: "avatar_AvatarDialog_1p-Wx",
        AvatarDialogBody: "avatar_AvatarDialogBody_39Ovv",
        AvatarDialogTop: "avatar_AvatarDialogTop_aCrGP",
        AvatarDialogUploadArea: "avatar_AvatarDialogUploadArea_22Ena",
        AvatarSaveActions: "avatar_AvatarSaveActions_1c6Pv",
        Error: "avatar_Error_eo3iM",
        HideDefaultAvatar: "avatar_HideDefaultAvatar_6zU6F",
      };
    },
  },
]);
