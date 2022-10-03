/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkstore = self.webpackChunkstore || []).push([
  [6720],
  {
    59445: (e) => {
      e.exports = {
        SnoozeContainer: "friendsnooze_SnoozeContainer_3EzTy",
        SnoozeZ: "friendsnooze_SnoozeZ_1DArl",
        none: "friendsnooze_none_2k961",
        Medium: "friendsnooze_Medium_3Gk3l",
        Large: "friendsnooze_Large_dTohL",
        Dim: "friendsnooze_Dim_2TzRZ",
        Z1: "friendsnooze_Z1_1OyrT",
        Z2: "friendsnooze_Z2_1mx4k",
        Z3: "friendsnooze_Z3_1ltvK",
        hoverParent: "friendsnooze_hoverParent_3ID9R",
        animating: "friendsnooze_animating_3CzX5",
        Snoring: "friendsnooze_Snoring_YuCwj",
      };
    },
    24194: (e) => {
      e.exports = {
        "duration-app-launch": "800ms",
        statusAndName: "personanameandstatus_statusAndName_3n8q8",
        threeLines: "personanameandstatus_threeLines_3ms2P",
        blocked: "personanameandstatus_blocked_3_oRk",
        richPresenceLabel: "personanameandstatus_richPresenceLabel_1k82N",
        playerName: "personanameandstatus_playerName_r62qz",
        playerNickname: "personanameandstatus_playerNickname_3T-9P",
        playerNicknameBracket:
          "personanameandstatus_playerNicknameBracket_2aXev",
        richPresenceContainer:
          "personanameandstatus_richPresenceContainer_2nrSd",
        gameName: "personanameandstatus_gameName_2wpap",
        NoMask: "personanameandstatus_NoMask_2J0IS",
        twoLine: "personanameandstatus_twoLine_27M2G",
        DNDContainer: "personanameandstatus_DNDContainer_12iWK",
        partyBeaconJoin: "personanameandstatus_partyBeaconJoin_1K_OI",
        hidePersona: "personanameandstatus_hidePersona_3meBu",
        compactView: "personanameandstatus_compactView_34CCB",
        noContextMenu: "personanameandstatus_noContextMenu_2317W",
        gameIsPrivateIcon: "personanameandstatus_gameIsPrivateIcon_1FPaN",
        PendingPersona: "personanameandstatus_PendingPersona_ifetn",
      };
    },
    82202: (e) => {
      e.exports = {
        "duration-app-launch": "800ms",
        PersonaStatusIcon: "personastatusicons_PersonaStatusIcon_1YsWj",
        MobilePhoneIcon: "personastatusicons_MobilePhoneIcon_3pGV8",
      };
    },
    25130: (e) => {
      e.exports = {
        avatarHolder: "steamavatar_avatarHolder_1YGAH",
        avatarStatus: "steamavatar_avatarStatus_1yIzy",
        avatar: "steamavatar_avatar_1p_Qr",
        avatarFrame: "steamavatar_avatarFrame_3atbN",
        avatarFrameImg: "steamavatar_avatarFrameImg_338kJ",
      };
    },
    93981: (e, a, t) => {
      "use strict";
      t.d(a, { Pv: () => _, sB: () => c });
      var n = t(70655),
        s = t(22188),
        r = t(27661),
        i = t(86605),
        o = t(41311),
        m = (t(54698), t(21205), t(90666)),
        l = (t(3389), t(43359));
      function c(e) {
        let a = "offline";
        return (
          e &&
            (e.is_ingame
              ? (a = "ingame")
              : e.m_broadcastAccountId
              ? (a = "watchingbroadcast")
              : e.is_online && (a = "online"),
            e.is_awayOrSnooze && (a += " awayOrSnooze")),
          a
        );
      }
      class _ {
        constructor(e) {
          (this.m_bInitialized = !1),
            (this.m_ePersonaState = 0),
            (this.m_unGamePlayedAppID = 0),
            (this.m_gameid = "0"),
            (this.m_unPersonaStateFlags = 0),
            (this.m_strPlayerName = ""),
            (this.m_strAvatarHash = l.W),
            (this.m_strAccountName = ""),
            (this.m_rtLastSeenOnline = 0),
            (this.m_strGameExtraInfo = ""),
            (this.m_unGameServerIP = 0),
            (this.m_unGameServerPort = 0),
            (this.m_game_lobby_id = ""),
            (this.m_bPlayerNamePending = !1),
            (this.m_bAvatarPending = !1),
            (this.m_mapRichPresence = s.LO.map()),
            (this.m_bNameInitialized = !1),
            (this.m_bStatusInitialized = !1),
            (this.m_steamid = e);
        }
        Reset() {
          (this.m_ePersonaState = 0),
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
            (this.m_strBroadcastTitle = void 0);
        }
        GetAccountID() {
          return this.m_steamid.GetAccountID();
        }
        get is_online() {
          return 0 != this.m_ePersonaState && 7 != this.m_ePersonaState;
        }
        get is_ingame() {
          return (
            this.is_online &&
            (0 != this.m_unGamePlayedAppID || "0" != this.m_gameid)
          );
        }
        get is_watchingbroadcast() {
          return !!this.m_broadcastAccountId;
        }
        get is_in_nonsteam_game() {
          return 0 == this.m_unGamePlayedAppID && "0" != this.m_gameid;
        }
        get is_in_joinable_game() {
          return (
            this.has_joinable_game_flag ||
            this.is_in_valid_lobby ||
            this.has_server_ip
          );
        }
        get has_joinable_game_flag() {
          return 0 != (2 & this.m_unPersonaStateFlags);
        }
        get connect_string() {
          return this.m_mapRichPresence.get("connect");
        }
        get is_in_valid_lobby() {
          return this.m_game_lobby_id && "0" != this.m_game_lobby_id;
        }
        get has_server_ip() {
          return 0 != this.m_unGameServerIP;
        }
        get is_awayOrSnooze() {
          return 3 == this.m_ePersonaState || 4 == this.m_ePersonaState;
        }
        HasStateFlag(e) {
          return 0 != (this.m_unPersonaStateFlags & e);
        }
        get last_seen_online() {
          return this.m_rtLastSeenOnline;
        }
        ClearStateOnDisconnect() {
          0 != this.m_ePersonaState && this.Reset();
        }
        get is_golden() {
          return this.HasStateFlag(4);
        }
        GetCurrentGameName() {
          return this.m_strGameExtraInfo
            ? this.m_strGameExtraInfo
            : this.m_unGamePlayedAppID
            ? i.Q8.GetAppInfo(this.m_unGamePlayedAppID).name
            : "";
        }
        GetCurrentGameIconURL() {
          return this.m_unGamePlayedAppID
            ? i.Q8.GetAppInfo(this.m_unGamePlayedAppID).icon_url
            : "";
        }
        GetCurrentGameLogoURL() {
          return this.m_unGamePlayedAppID
            ? i.Q8.GetAppInfo(this.m_unGamePlayedAppID).logo_url
            : "";
        }
        GetBroadcastGameLogoURL() {
          return this.m_broadcastAppId
            ? i.Q8.GetAppInfo(this.m_broadcastAppId).logo_url
            : "";
        }
        BIsAppInfoReady() {
          return (
            !this.m_unGamePlayedAppID ||
            i.Q8.GetAppInfo(this.m_unGamePlayedAppID).is_initialized
          );
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
            let e = i.Q8.GetRichPresenceLoc(this.m_unGamePlayedAppID);
            if (e) {
              let a = this.m_mapRichPresence.get("steam_display");
              return e.Localize(a, this.m_mapRichPresence);
            }
          } else if (this.HasStateFlag(8))
            return (0, o.Xx)("#PersonaStateRemotePlayTogether");
          return "";
        }
        GetOfflineStatusUpdateRate() {
          if (0 == this.last_seen_online) return 3e4;
          const e = 3600;
          let a = 1e3;
          const t = i.Q8.CMInterface.GetServerRTime32() - this.last_seen_online;
          return (a *= t > 86400 ? e : t > 7200 ? 60 : 15), a;
        }
        GetOfflineStatusTime() {
          if (0 == this.last_seen_online)
            return (0, o.Xx)("#PersonaStateOffline");
          let e = this.GetOfflineStatusUpdateRate();
          (!m.De.IN_MOBILE || e <= 60) && (0, r.zO)(e);
          let a = i.Q8.CMInterface.GetServerRTime32() - this.last_seen_online;
          return a < 60
            ? (0, o.Xx)("#PersonaStateLastSeen_JustNow")
            : (0, o.Xx)("#PersonaStateLastSeen", (0, o.yW)(a));
        }
        GetLocalizedOnlineStatus() {
          switch (this.m_ePersonaState) {
            case 0:
            case 7:
              return this.GetOfflineStatusTime();
            case 1:
              return (0, o.Xx)("#PersonaStateOnline");
            case 2:
              return (0, o.Xx)("#PersonaStateBusy");
            case 3:
              return (0, o.Xx)("#PersonaStateAway");
            case 4:
              return (0, o.Xx)("#PersonaStateSnooze");
            case 5:
              return (0, o.Xx)("#PersonaStateLookingToTrade");
            case 6:
              return (0, o.Xx)("#PersonaStateLookingToPlay");
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
                this.m_mapRichPresence.get("steam_player_group_size")
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
          return this.m_strAvatarHash != l.W;
        }
        get avatar_url() {
          return (0, l.U)(this.m_strAvatarHash);
        }
        get avatar_url_medium() {
          return (0, l.U)(this.m_strAvatarHash, "medium");
        }
        get avatar_url_full() {
          return (0, l.U)(this.m_strAvatarHash, "full");
        }
        static SortStatusComparator(e, a, t) {
          if (a.has_public_party_beacon) {
            if (!t.has_public_party_beacon) return -1;
          } else {
            if (t.has_public_party_beacon) return 1;
            if (a.is_ingame) {
              if (!t.is_ingame) return -1;
              if (!e) return 0;
              if (a.is_awayOrSnooze) {
                if (!t.is_awayOrSnooze) return 1;
              } else if (t.is_awayOrSnooze) return -1;
            } else if (t.is_ingame) return 1;
          }
          if (a.is_online) {
            if (!t.is_online) return -1;
          } else if (t.is_online) return 1;
          if (e)
            if (a.is_awayOrSnooze) {
              if (!t.is_awayOrSnooze) return 1;
            } else if (t.is_awayOrSnooze) return -1;
          return 0;
        }
      }
      (0, n.gn)([s.LO], _.prototype, "m_bInitialized", void 0),
        (0, n.gn)([s.LO], _.prototype, "m_ePersonaState", void 0),
        (0, n.gn)([s.LO], _.prototype, "m_unGamePlayedAppID", void 0),
        (0, n.gn)([s.LO], _.prototype, "m_gameid", void 0),
        (0, n.gn)([s.LO], _.prototype, "m_unPersonaStateFlags", void 0),
        (0, n.gn)([s.LO], _.prototype, "m_strPlayerName", void 0),
        (0, n.gn)([s.LO], _.prototype, "m_strAvatarHash", void 0),
        (0, n.gn)([s.LO], _.prototype, "m_strAccountName", void 0),
        (0, n.gn)([s.LO], _.prototype, "m_rtLastSeenOnline", void 0),
        (0, n.gn)([s.LO], _.prototype, "m_strGameExtraInfo", void 0),
        (0, n.gn)([s.LO], _.prototype, "m_unGameServerIP", void 0),
        (0, n.gn)([s.LO], _.prototype, "m_unGameServerPort", void 0),
        (0, n.gn)([s.LO], _.prototype, "m_game_lobby_id", void 0),
        (0, n.gn)([s.LO], _.prototype, "m_bPlayerNamePending", void 0),
        (0, n.gn)([s.LO], _.prototype, "m_bAvatarPending", void 0),
        (0, n.gn)([s.LO], _.prototype, "m_broadcastId", void 0),
        (0, n.gn)([s.LO], _.prototype, "m_broadcastAccountId", void 0),
        (0, n.gn)([s.LO], _.prototype, "m_broadcastAppId", void 0),
        (0, n.gn)([s.LO], _.prototype, "m_broadcastViewerCount", void 0),
        (0, n.gn)([s.LO], _.prototype, "m_strBroadcastTitle", void 0),
        (0, n.gn)([s.LO], _.prototype, "m_bCommunityBanned", void 0);
    },
    65409: (e, a, t) => {
      "use strict";
      t.d(a, { o: () => B });
      var n = t(70655),
        s = t(67294),
        r = t(29323),
        i = t(41311),
        o = t(26149),
        m = t(93981),
        l = t(7573),
        c = t(59445),
        _ = t.n(c);
      let p = class extends s.Component {
        static get hoverClass() {
          return _().hoverParent;
        }
        render() {
          const e = this.props,
            { persona: a, animating: t, className: r, size: i, dim: o } = e,
            m = (0, n._T)(e, [
              "persona",
              "animating",
              "className",
              "size",
              "dim",
            ]);
          let c = "";
          return (
            "medium" == i ? (c = _().Medium) : "large" == i && (c = _().Large),
            s.createElement(
              "div",
              Object.assign(
                {
                  className: (0, l.Z)(
                    _().SnoozeContainer,
                    a.online_state,
                    r,
                    t && _().animating,
                    c,
                    o && _().Dim
                  ),
                },
                m
              ),
              s.createElement(
                "div",
                { "data-text": "Z", className: (0, l.Z)(_().SnoozeZ, _().Z1) },
                "Z"
              ),
              s.createElement(
                "div",
                { "data-text": "Z", className: (0, l.Z)(_().SnoozeZ, _().Z2) },
                "Z"
              ),
              s.createElement(
                "div",
                { "data-text": "Z", className: (0, l.Z)(_().SnoozeZ, _().Z3) },
                "Z"
              )
            )
          );
        }
      };
      p = (0, n.gn)([r.Pi], p);
      t(21205);
      var A = t(95598),
        u = t(82202),
        d = t.n(u),
        h = t(5827);
      const g = (0, r.Pi)((e) => {
        const { persona: a, className: t } = e,
          r = (0, n._T)(e, ["persona", "className"]);
        if (!a) return null;
        if (!a.is_online) return null;
        const o = a.HasStateFlag(512),
          c = a.HasStateFlag(2048),
          _ = !c && a.HasStateFlag(1024);
        return s.createElement(
          s.Fragment,
          null,
          o &&
            s.createElement(
              "div",
              Object.assign(
                {
                  className: (0, l.Z)(
                    t,
                    d().PersonaStatusIcon,
                    d().MobilePhoneIcon,
                    (0, m.sB)(a)
                  ),
                  title: (0, i.Xx)("#Platform_Hint_Mobile"),
                },
                r
              ),
              s.createElement(h.Mr, null)
            ),
          c &&
            s.createElement(
              "div",
              Object.assign(
                {
                  className: (0, l.Z)(
                    t,
                    d().PersonaStatusIcon,
                    d().VRIcon,
                    (0, m.sB)(a)
                  ),
                  title: (0, i.Xx)("#Platform_Hint_VR"),
                },
                r
              ),
              s.createElement(A.VR, null)
            ),
          _ &&
            s.createElement(
              "div",
              Object.assign(
                {
                  className: (0, l.Z)(
                    t,
                    d().PersonaStatusIcon,
                    d().BigPictureIcon,
                    (0, m.sB)(a)
                  ),
                  title: (0, i.Xx)("#Platform_Hint_BigPicture"),
                },
                r
              ),
              s.createElement(A.Ucz, null)
            )
        );
      });
      var P = t(24194),
        S = t.n(P);
      function v(e) {
        return s.createElement(
          s.Fragment,
          null,
          s.createElement(
            "span",
            { className: S().partyBeaconJoin },
            (0, i.Xx)("#User_WantsToPlay")
          ),
          " – ",
          e.persona.GetCurrentGameName()
        );
      }
      let B = class extends s.Component {
        render() {
          const e = this.props,
            {
              className: a,
              onContextMenu: t,
              persona: r,
              eFriendRelationship: c,
              bIsSelf: _,
              bParenthesizeNicknames: u,
              strNickname: d,
              bCompactView: h,
              bHideGameName: P,
              bHideEnhancedRichPresenceLabel: B,
              bHideSnooze: N,
              bHideStatus: b,
              renderStatus: y,
              renderRichPresence: f,
              bHidePersona: I,
              bDNDSet: E,
              bHasPartyBeacon: C,
              bHasGamePrivacy: Q,
              bNoMask: G,
            } = e,
            D = (0, n._T)(e, [
              "className",
              "onContextMenu",
              "persona",
              "eFriendRelationship",
              "bIsSelf",
              "bParenthesizeNicknames",
              "strNickname",
              "bCompactView",
              "bHideGameName",
              "bHideEnhancedRichPresenceLabel",
              "bHideSnooze",
              "bHideStatus",
              "renderStatus",
              "renderRichPresence",
              "bHidePersona",
              "bDNDSet",
              "bHasPartyBeacon",
              "bHasGamePrivacy",
              "bNoMask",
            ]);
          let L = null,
            R = null,
            k = null,
            z = [
              a,
              S().personaNameAndStatusLabel,
              (0, m.sB)(r),
              h && S().compactView,
              G && S().NoMask,
            ];
          C || r.has_public_party_beacon
            ? (R = s.createElement(v, { persona: r }))
            : (0, o.fk)(c)
            ? ((R = (0, i.Xx)("#PersonaStateBlocked")), z.push(S().blocked))
            : r.is_ingame
            ? ((R =
                !r.is_in_nonsteam_game || _ || (0, o.my)(c)
                  ? r.GetCurrentGameName()
                  : (0, i.Xx)("#PersonaStateInNonSteamGame")),
              _ || I
                ? _ && r.is_awayOrSnooze && (k = (0, i.Xx)("#PersonaStateAway"))
                : (k = r.GetCurrentGameRichPresence()))
            : r.m_broadcastAccountId &&
              (R = (0, i.Xx)("#PersonaStateWatchingBroadcast")),
            R || (R = r.GetLocalizedOnlineStatus()),
            y && (R = y());
          let H = !I && !N;
          !1 === N && (H = !0),
            r.is_awayOrSnooze && H && (L = s.createElement(p, { persona: r }));
          let O = null;
          t
            ? (O = s.createElement(
                "div",
                { className: "ContextMenuButton", onClick: t },
                s.createElement(A.$gZ, null)
              ))
            : z.push(S().noContextMenu),
            I && z.push(S().hidePersona),
            f && (k = f()),
            (!P && k) || z.push(S().twoLine);
          const T = !r.is_ingame && !b,
            U = !B && k,
            w = R && (!P || !U);
          let Z = d && !u,
            x = Z ? d : r.m_strPlayerName,
            F = !I && (w || T) && U;
          return s.createElement(
            "div",
            Object.assign({}, D, {
              className: (0, l.Z)(...z),
              onContextMenu: t,
            }),
            s.createElement(
              "div",
              { className: (0, l.Z)(S().statusAndName, F && S().threeLines) },
              s.createElement(
                "div",
                { className: S().playerName },
                x || " ",
                u &&
                  d &&
                  s.createElement(
                    "span",
                    { className: S().playerNickname },
                    "(",
                    d,
                    ")"
                  )
              ),
              E &&
                s.createElement(
                  "div",
                  {
                    className: S().DNDContainer,
                    title: (0, i.Xx)("#User_ToggleDoNotDisturb"),
                  },
                  s.createElement(A.YVR, null)
                ),
              Z &&
                s.createElement(
                  "span",
                  {
                    className: S().playerNicknameBracket,
                    title: (0, i.Xx)("#isNickname"),
                  },
                  " *"
                ),
              s.createElement(g, { persona: r }),
              L,
              (r.m_bPlayerNamePending || r.m_bAvatarPending) &&
                s.createElement(
                  "div",
                  {
                    className: S().PendingPersona,
                    title: (0, i.Xx)("#SteamChina_PendingPersonaName"),
                  },
                  s.createElement(A.SUY, null)
                ),
              O
            ),
            !I &&
              s.createElement(
                "div",
                { className: S().richPresenceContainer },
                (w || T) &&
                  s.createElement(
                    "div",
                    {
                      className: (0, l.Z)(
                        S().gameName,
                        F && S().threeLines,
                        S().richPresenceLabel,
                        "no-drag"
                      ),
                    },
                    Q &&
                      s.createElement(
                        "div",
                        {
                          className: S().gameIsPrivateIcon,
                          title: (0, i.Xx)("#User_GameInfoHidden"),
                        },
                        s.createElement(A._GE, null)
                      ),
                    R
                  ),
                U &&
                  s.createElement(
                    "div",
                    { className: (0, l.Z)(S().richPresenceLabel, "no-drag") },
                    k,
                    " "
                  )
              )
          );
        }
      };
      B = (0, n.gn)([r.Pi], B);
      (0, r.Pi)((e) => {
        const {
            persona: a,
            bParenthesizeNicknames: t,
            strNickname: r,
            className: i,
          } = e,
          o = (0, n._T)(e, [
            "persona",
            "bParenthesizeNicknames",
            "strNickname",
            "className",
          ]);
        let c = r && !t ? r : a.m_strPlayerName;
        return s.createElement(
          "span",
          Object.assign({}, o, { className: (0, l.Z)(i, (0, m.sB)(a)) }),
          s.createElement(
            "span",
            { className: S().playerName },
            c || " ",
            t &&
              r &&
              s.createElement(
                "span",
                { className: S().playerNickname },
                "(",
                r,
                ")"
              )
          )
        );
      });
    },
    44298: (e, a, t) => {
      "use strict";
      t.d(a, { o: () => A, _1: () => h, DY: () => d, vV: () => u });
      var n = t(70655),
        s = t(67294),
        r = t(29323),
        i = t(93981),
        o = t(7573),
        m = (t(18330), t(90666)),
        l = t(60501);
      const c =
        t.p +
        "images/applications/store/avatar_default_full.jpg?v=valveisgoodatcaching";
      var _ = t(25130),
        p = t.n(_);
      class A extends s.Component {
        render() {
          const e = this.props,
            {
              strAvatarURL: a,
              size: t,
              className: r,
              statusStyle: i,
              statusPosition: m,
              children: _,
            } = e,
            A = (0, n._T)(e, [
              "strAvatarURL",
              "size",
              "className",
              "statusStyle",
              "statusPosition",
              "children",
            ]),
            u = [];
          return (
            a && u.push(a),
            u.push(
              (function (e) {
                switch (e) {
                  case "X-Small":
                  case "Small":
                    return "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD//gA7Q1JFQVRPUjogZ2QtanBlZyB2MS4wICh1c2luZyBJSkcgSlBFRyB2NjIpLCBxdWFsaXR5ID0gOTAK/9sAQwADAgIDAgIDAwMDBAMDBAUIBQUEBAUKBwcGCAwKDAwLCgsLDQ4SEA0OEQ4LCxAWEBETFBUVFQwPFxgWFBgSFBUU/9sAQwEDBAQFBAUJBQUJFA0LDRQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQU/8AAEQgAIAAgAwEiAAIRAQMRAf/EAB8AAAEFAQEBAQEBAAAAAAAAAAABAgMEBQYHCAkKC//EALUQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+v/EAB8BAAMBAQEBAQEBAQEAAAAAAAABAgMEBQYHCAkKC//EALURAAIBAgQEAwQHBQQEAAECdwABAgMRBAUhMQYSQVEHYXETIjKBCBRCkaGxwQkjM1LwFWJy0QoWJDThJfEXGBkaJicoKSo1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoKDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uLj5OXm5+jp6vLz9PX29/j5+v/aAAwDAQACEQMRAD8A/P4mW5nmllmeSR3LMzMSSc1a07R73V72KzsILi9u5TiOC2RpJHPoFGSarQ/ef6n+de4fAn9oaL4D+DfGX9i6Uf8AhO9XSKDT9eZY3WxiDZcBGByTkn0JCZBxQB41qeiX+iXslnqNtdWF3H9+3uo2jkX6q2CKpgy208MsUzxyI4ZWViCDmvsr9rrUdT1j9nb4T6h8RBbH4qXUs0zMsSxXJ04hivnKoAU5MPGBg7uM7q+NpvvJ9R/OgAh+8/1P867T4POI/iz4Mc6U+u7NZtG/suPbuu8TKfKG4hct93njnmuKIltp5opYXjkRyrKykEHNWbDVbvSr63vbKaezvLeRZYbi3ZkkidTlWVhyCCMgjpQB6l+1F411nx58dPFWpa5a3mnXaXP2ZNOvXVpLKNBhYflJUY5PB5JJ6k15LN95PqP51a1PWr7WtQnvtRuLm/vrhzJNc3TtJLIx6lmbJJ9zVQCW5nhiiheSR3CqqqSSc0Af/9k=";
                  case "Medium":
                  case "MediumLarge":
                    return "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD//gA7Q1JFQVRPUjogZ2QtanBlZyB2MS4wICh1c2luZyBJSkcgSlBFRyB2NjIpLCBxdWFsaXR5ID0gODAK/9sAQwAGBAUGBQQGBgUGBwcGCAoQCgoJCQoUDg8MEBcUGBgXFBYWGh0lHxobIxwWFiAsICMmJykqKRkfLTAtKDAlKCko/9sAQwEHBwcKCAoTCgoTKBoWGigoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgo/8AAEQgAQABAAwEiAAIRAQMRAf/EAB8AAAEFAQEBAQEBAAAAAAAAAAABAgMEBQYHCAkKC//EALUQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+v/EAB8BAAMBAQEBAQEBAQEAAAAAAAABAgMEBQYHCAkKC//EALURAAIBAgQEAwQHBQQEAAECdwABAgMRBAUhMQYSQVEHYXETIjKBCBRCkaGxwQkjM1LwFWJy0QoWJDThJfEXGBkaJicoKSo1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoKDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uLj5OXm5+jp6vLz9PX29/j5+v/aAAwDAQACEQMRAD8A8Inmk8+T94/3j/EfWmedJ/z0f/vo0T/6+T/eP86ZQA/zpP8Ano//AH0aPOk/56P/AN9GmVo6Loeq65M0Wj6ddXrr94QRF9v1I6fjQBR86T/no/8A30aPOk/56P8A99GtHW/Dus6GV/tjS7yyD8K00RVW+h6GsugB/nSf89H/AO+jT4JpPPj/AHj/AHh/EfWoafB/r4/94fzoAJ/9fJ/vH+dMp8/+vk/3j/OmUAXdE099W1mw06Jgsl3PHApPYswUH9a+qPF3iHSPhF4S0+003TxK0hMcEAbZvIA3SO2OvIz6k18nW88ttcRz28jxTRMHSRGKsrA5BBHQg1b1TWdT1fy/7V1G8vfLzs+0TNJtz1xknHQUAfUXw+8c6Z8UdN1HS9V0xIpUTM1s7eYkiE43KcAgg/lxg180+NtEHhzxZqmkqxdLWcojHqUPK598EV9CfBbwpF4G8J3fiLxA4trm5hEsnmceRCOQD/tHqR9B1r568a63/wAJH4r1TVghRLqYuinqE6KD74AoAxafB/r4/wDeH86ZT4P9fH/vD+dABP8A6+T/AHj/ADplPn/18n+8f50ygArt/gtpltq/xK0e2vYxJArPMUYZDFEZhn2yBXEV0/w203VNX8YWdloOoHTtQkWQx3IZl2gISeV55AI/GgD1H9pvxPdi/s/DcDGOz8pbqfHWRizBQfYbc/U+1eD12PxW0fWtE8Tpa+I9UOqXpt0cTl2bCEthctz1B/OuOoAKfB/r4/8AeH86ZT4P9fH/ALw/nQAT/wCvk/3j/OmVNPDJ58n7t/vH+E+tM8mT/nm//fJoAZV7Q9Xv9C1KLUNJuGtryMEJIoBIyCD1BHQmqnkyf883/wC+TR5Mn/PN/wDvk0AaHiHXtT8RX4vdau2u7oIIxIygHaCSBwB6msyn+TJ/zzf/AL5NHkyf883/AO+TQAynwf6+P/eH86PJk/55v/3yafBDJ58f7t/vD+E+tAH/2Q==";
                  case "Large":
                  case "X-Large":
                  case "FillArea":
                    return c;
                }
              })(t)
            ),
            s.createElement(
              "div",
              Object.assign(
                {
                  className: (0, o.Z)(
                    p().avatarHolder,
                    "avatarHolder",
                    "no-drag",
                    t || "Medium",
                    r
                  ),
                },
                A
              ),
              s.createElement("div", {
                className: (0, o.Z)(p().avatarStatus, "avatarStatus", m),
                style: i,
              }),
              s.createElement(l.j, {
                className: (0, o.Z)(p().avatar, "avatar"),
                rgSources: u,
                draggable: !1,
              }),
              _
            )
          );
        }
      }
      let u = class extends s.Component {
        render() {
          const e = this.props,
            { persona: a, size: t, animatedAvatar: r, className: l } = e,
            c = (0, n._T)(e, [
              "persona",
              "size",
              "animatedAvatar",
              "className",
            ]);
          let _ = "";
          return (
            r && r.image_small && 0 != r.image_small.length
              ? (_ = m.De.MEDIA_CDN_COMMUNITY_URL + "images/" + r.image_small)
              : a &&
                ((_ = a.avatar_url_medium),
                "Small" == t || "X-Small" == t
                  ? (_ = a.avatar_url)
                  : ("Large" != t && "X-Large" != t && "FillArea" != t) ||
                    (_ = a.avatar_url_full)),
            s.createElement(
              A,
              Object.assign(
                {
                  strAvatarURL: _,
                  size: t,
                  className: (0, o.Z)((0, i.sB)(a), l),
                },
                c
              )
            )
          );
        }
      };
      u = (0, n.gn)([r.Pi], u);
      const d = (0, r.Pi)((e) => {
        const { profileItem: a, className: t, bDisableAnimation: r } = e,
          i = (0, n._T)(e, ["profileItem", "className", "bDisableAnimation"]);
        if (!a || !a.image_small || 0 == a.image_small.length) return null;
        let l = r ? a.image_large : a.image_small;
        return (
          l || (l = a.image_small),
          l.startsWith("https://") ||
            (l = m.De.MEDIA_CDN_COMMUNITY_URL + "images/" + l),
          s.createElement(
            "div",
            Object.assign(
              { className: (0, o.Z)(p().avatarFrame, t, "avatarFrame") },
              i
            ),
            s.createElement("img", { className: p().avatarFrameImg, src: l })
          )
        );
      });
      let h = class extends s.Component {
        constructor(e) {
          super(e),
            (this.state = { bAnimate: "None" != this.props.loopDuration }),
            (this.m_timer = 0);
        }
        componentDidMount() {
          this.SetupAnimationTimer();
        }
        SetupAnimationTimer() {
          let e = 0;
          switch (this.props.loopDuration) {
            case "Short":
              e = 2500;
              break;
            case "Medium":
              e = 5e3;
              break;
            case "Long":
              e = 1e4;
          }
          0 != e &&
            (this.m_timer = window.setTimeout(
              () => this.setState({ bAnimate: !1 }),
              e
            ));
        }
        StopAnimationTimer() {
          this.m_timer &&
            (window.clearTimeout(this.m_timer), (this.m_timer = 0));
        }
        componentWillUnmount() {
          this.StopAnimationTimer();
        }
        componentDidUpdate(e) {
          this.props.loopDuration != e.loopDuration &&
            ("None" == this.props.loopDuration
              ? (this.setState({ bAnimate: !1 }), this.StopAnimationTimer())
              : "Infinite" == this.props.loopDuration &&
                (this.setState({ bAnimate: !0 }), this.StopAnimationTimer()));
        }
        render() {
          let e = this.props,
            {
              loopDuration: a,
              animatedAvatar: t,
              avatarFrame: r,
              children: i,
              style: o,
            } = e,
            m = (0, n._T)(e, [
              "loopDuration",
              "animatedAvatar",
              "avatarFrame",
              "children",
              "style",
            ]);
          return (
            m.onClick &&
              (o = Object.assign(Object.assign({}, o), { cursor: "pointer" })),
            this.state.bAnimate || (t = null),
            s.createElement(
              u,
              Object.assign({ animatedAvatar: t }, m),
              i,
              s.createElement(d, {
                profileItem: r,
                bDisableAnimation: "None" === this.props.loopDuration,
              })
            )
          );
        }
      };
      h = (0, n.gn)([r.Pi], h);
    },
  },
]);
