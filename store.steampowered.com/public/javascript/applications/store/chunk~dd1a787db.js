/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkstore = self.webpackChunkstore || []).push([
  [6709],
  {
    51964: (e) => {
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
    27245: (e) => {
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
    61204: (e) => {
      e.exports = {
        "duration-app-launch": "800ms",
        PersonaStatusIcon: "personastatusicons_PersonaStatusIcon_1YsWj",
        MobilePhoneIcon: "personastatusicons_MobilePhoneIcon_3pGV8",
      };
    },
    30120: (e) => {
      e.exports = {
        avatarHolder: "steamavatar_avatarHolder_1YGAH",
        avatarStatus: "steamavatar_avatarStatus_1yIzy",
        avatar: "steamavatar_avatar_1p_Qr",
        avatarFrame: "steamavatar_avatarFrame_3atbN",
        avatarFrameImg: "steamavatar_avatarFrameImg_338kJ",
      };
    },
    45761: (e, a, t) => {
      "use strict";
      t.d(a, { r: () => v, o: () => S });
      var n = t(33940),
        s = t(89526),
        r = t(88464),
        i = t(14826),
        o = t(40442),
        m = t(11301),
        l = t(19304),
        c = t(51964),
        A = t.n(c);
      let p = class extends s.Component {
        static get hoverClass() {
          return A().hoverParent;
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
            "medium" == i ? (c = A().Medium) : "large" == i && (c = A().Large),
            s.createElement(
              "div",
              Object.assign(
                {
                  className: (0, l.Z)(
                    A().SnoozeContainer,
                    a.online_state,
                    r,
                    t && A().animating,
                    c,
                    o && A().Dim,
                  ),
                },
                m,
              ),
              s.createElement(
                "div",
                { "data-text": "Z", className: (0, l.Z)(A().SnoozeZ, A().Z1) },
                "Z",
              ),
              s.createElement(
                "div",
                { "data-text": "Z", className: (0, l.Z)(A().SnoozeZ, A().Z2) },
                "Z",
              ),
              s.createElement(
                "div",
                { "data-text": "Z", className: (0, l.Z)(A().SnoozeZ, A().Z3) },
                "Z",
              ),
            )
          );
        }
      };
      p = (0, n.gn)([r.Pi], p);
      var d = t(701),
        u = t(61204),
        g = t.n(u),
        B = t(93908);
      const h = (0, r.Pi)((e) => {
        const { persona: a, className: t } = e,
          r = (0, n._T)(e, ["persona", "className"]);
        if (!a) return null;
        if (!a.is_online) return null;
        const o = a.HasStateFlag(512),
          c = a.HasStateFlag(2048),
          A = !c && a.HasStateFlag(1024);
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
                    g().PersonaStatusIcon,
                    g().MobilePhoneIcon,
                    (0, m.sB)(a),
                  ),
                  title: (0, i.Xx)("#Platform_Hint_Mobile"),
                },
                r,
              ),
              s.createElement(B.Mr, null),
            ),
          c &&
            s.createElement(
              "div",
              Object.assign(
                {
                  className: (0, l.Z)(
                    t,
                    g().PersonaStatusIcon,
                    g().VRIcon,
                    (0, m.sB)(a),
                  ),
                  title: (0, i.Xx)("#Platform_Hint_VR"),
                },
                r,
              ),
              s.createElement(d.VR, null),
            ),
          A &&
            s.createElement(
              "div",
              Object.assign(
                {
                  className: (0, l.Z)(
                    t,
                    g().PersonaStatusIcon,
                    g().BigPictureIcon,
                    (0, m.sB)(a),
                  ),
                  title: (0, i.Xx)("#Platform_Hint_BigPicture"),
                },
                r,
              ),
              s.createElement(d.Ucz, null),
            ),
        );
      });
      var N = t(27245),
        _ = t.n(N),
        E = t(32765);
      function P(e) {
        return s.createElement(
          s.Fragment,
          null,
          s.createElement(
            "span",
            { className: _().partyBeaconJoin },
            (0, i.Xx)("#User_WantsToPlay"),
          ),
          " – ",
          e.persona.GetCurrentGameName(),
        );
      }
      let S = class extends s.Component {
        render() {
          const e = this.props,
            {
              className: a,
              onContextMenu: t,
              persona: r,
              eFriendRelationship: c,
              bIsSelf: A,
              bParenthesizeNicknames: u,
              strNickname: g,
              bCompactView: B,
              bHideGameName: N,
              bHideEnhancedRichPresenceLabel: S,
              bHideSnooze: v,
              bHideStatus: C,
              renderStatus: Q,
              renderRichPresence: b,
              bHidePersona: D,
              bDNDSet: k,
              bHasPartyBeacon: H,
              bHasGamePrivacy: f,
              bNoMask: T,
            } = e,
            I = (0, n._T)(e, [
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
          let Z = null,
            U = null,
            M = null,
            R = [
              a,
              _().personaNameAndStatusLabel,
              (0, m.sB)(r),
              B && _().compactView,
              T && _().NoMask,
            ];
          H || r.has_public_party_beacon
            ? (U = s.createElement(P, { persona: r }))
            : (0, o.fk)(c)
            ? ((U = (0, i.Xx)("#PersonaStateBlocked")), R.push(_().blocked))
            : r.is_ingame
            ? ((U =
                !r.is_in_nonsteam_game || A || (0, o.my)(c)
                  ? r.GetCurrentGameName()
                  : (0, i.Xx)("#PersonaStateInNonSteamGame")),
              A || D
                ? A && r.is_awayOrSnooze && (M = (0, i.Xx)("#PersonaStateAway"))
                : (M = r.GetCurrentGameRichPresence()))
            : r.m_broadcastAccountId &&
              (U = (0, i.Xx)("#PersonaStateWatchingBroadcast")),
            U || (U = r.GetLocalizedOnlineStatus()),
            Q && (U = Q());
          let F = !D && !v;
          !1 === v && (F = !0),
            r.is_awayOrSnooze && F && (Z = s.createElement(p, { persona: r }));
          let L = null;
          t
            ? (L = s.createElement(
                "div",
                { className: "ContextMenuButton", onClick: t },
                s.createElement(d.$gZ, null),
              ))
            : R.push(_().noContextMenu),
            D && R.push(_().hidePersona),
            b && (M = b()),
            (!N && M) || R.push(_().twoLine);
          const z = !r.is_ingame && !C,
            y = !S && M,
            K = U && (!N || !y),
            w = (0, o.hz)(E.De.LAUNCHER_TYPE);
          let x = g && !u,
            J = x ? g : r.m_strPlayerName,
            j = !D && (K || z) && y;
          return s.createElement(
            "div",
            Object.assign({}, I, {
              className: (0, l.Z)(...R),
              onContextMenu: t,
            }),
            s.createElement(
              "div",
              { className: (0, l.Z)(_().statusAndName, j && _().threeLines) },
              s.createElement(
                "div",
                { className: _().playerName },
                J || " ",
                u &&
                  g &&
                  s.createElement(
                    "span",
                    { className: _().playerNickname },
                    "(",
                    g,
                    ")",
                  ),
              ),
              k &&
                s.createElement(
                  "div",
                  {
                    className: _().DNDContainer,
                    title: (0, i.Xx)("#User_ToggleDoNotDisturb"),
                  },
                  s.createElement(d.YVR, null),
                ),
              x &&
                s.createElement(
                  "span",
                  {
                    className: _().playerNicknameBracket,
                    title: (0, i.Xx)("#isNickname"),
                  },
                  " *",
                ),
              s.createElement(h, { persona: r }),
              Z,
              (r.m_bPlayerNamePending || r.m_bAvatarPending) &&
                w &&
                s.createElement(
                  "div",
                  {
                    className: _().PendingPersona,
                    title: (0, i.Xx)("#SteamChina_PendingPersonaName"),
                  },
                  s.createElement(d.SUY, null),
                ),
              L,
            ),
            !D &&
              s.createElement(
                "div",
                { className: _().richPresenceContainer },
                (K || z) &&
                  s.createElement(
                    "div",
                    {
                      className: (0, l.Z)(
                        _().gameName,
                        j && _().threeLines,
                        _().richPresenceLabel,
                        "no-drag",
                      ),
                    },
                    f &&
                      s.createElement(
                        "div",
                        {
                          className: _().gameIsPrivateIcon,
                          title: (0, i.Xx)("#User_GameInfoHidden"),
                        },
                        s.createElement(d._GE, null),
                      ),
                    U,
                  ),
                y &&
                  s.createElement(
                    "div",
                    { className: (0, l.Z)(_().richPresenceLabel, "no-drag") },
                    M,
                    " ",
                  ),
              ),
          );
        }
      };
      S = (0, n.gn)([r.Pi], S);
      const v = (0, r.Pi)((e) => {
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
            { className: _().playerName },
            c || " ",
            t &&
              r &&
              s.createElement(
                "span",
                { className: _().playerNickname },
                "(",
                r,
                ")",
              ),
          ),
        );
      });
    },
    50355: (e, a, t) => {
      "use strict";
      t.d(a, { o: () => d, _1: () => B, DY: () => g, vV: () => u });
      var n = t(33940),
        s = t(89526),
        r = t(88464),
        i = t(11301),
        o = t(19304),
        m = t(32765),
        l = t(87178);
      const c =
        t.p +
        "images/applications/store/avatar_default_full.jpg?v=valveisgoodatcaching";
      var A = t(30120),
        p = t.n(A);
      class d extends s.Component {
        render() {
          const e = this.props,
            {
              strAvatarURL: a,
              size: t,
              className: r,
              statusStyle: i,
              statusPosition: m,
              children: A,
            } = e,
            d = (0, n._T)(e, [
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
              })(t),
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
                    r,
                  ),
                },
                d,
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
              A,
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
          let A = "";
          return (
            r && r.image_small && 0 != r.image_small.length
              ? (A = m.De.MEDIA_CDN_COMMUNITY_URL + "images/" + r.image_small)
              : a &&
                ((A = a.avatar_url_medium),
                "Small" == t || "X-Small" == t
                  ? (A = a.avatar_url)
                  : ("Large" != t && "X-Large" != t && "FillArea" != t) ||
                    (A = a.avatar_url_full)),
            s.createElement(
              d,
              Object.assign(
                {
                  strAvatarURL: A,
                  size: t,
                  className: (0, o.Z)((0, i.sB)(a), l),
                },
                c,
              ),
            )
          );
        }
      };
      u = (0, n.gn)([r.Pi], u);
      const g = (0, r.Pi)((e) => {
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
              i,
            ),
            s.createElement("img", { className: p().avatarFrameImg, src: l }),
          )
        );
      });
      let B = class extends s.Component {
        constructor(e) {
          super(e),
            (this.state = { bAnimate: "None" != this.props.loopDuration }),
            (this.m_timer = 0);
        }
        componentDidMount() {
          this.props.bParentHovered || this.SetupAnimationTimer();
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
            (this.setState({ bAnimate: "None" != this.props.loopDuration }),
            (this.m_timer = window.setTimeout(
              () => this.setState({ bAnimate: !1 }),
              e,
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
        componentDidUpdate(e) {
          this.props.loopDuration != e.loopDuration &&
            ("None" == this.props.loopDuration
              ? (this.setState({ bAnimate: !1 }), this.StopAnimationTimer())
              : "Infinite" == this.props.loopDuration
              ? (this.setState({ bAnimate: !0 }), this.StopAnimationTimer())
              : (this.setState({ bAnimate: !0 }), this.SetupAnimationTimer())),
            this.props.bParentHovered != e.bParentHovered &&
              (this.props.bParentHovered &&
              "None" != this.props.loopDuration &&
              "Infinite" != this.props.loopDuration
                ? (this.setState({ bAnimate: !0 }), this.StopAnimationTimer())
                : this.state.bAnimate && this.SetupAnimationTimer());
        }
        render() {
          let e = this.props,
            {
              loopDuration: a,
              animatedAvatar: t,
              avatarFrame: r,
              children: i,
              style: o,
              bLimitProfileFrameAnimationTime: m,
              bParentHovered: l,
            } = e,
            c = (0, n._T)(e, [
              "loopDuration",
              "animatedAvatar",
              "avatarFrame",
              "children",
              "style",
              "bLimitProfileFrameAnimationTime",
              "bParentHovered",
            ]);
          return (
            c.onClick &&
              (o = Object.assign(Object.assign({}, o), { cursor: "pointer" })),
            this.state.bAnimate || (t = null),
            s.createElement(
              "div",
              {
                onMouseEnter: () =>
                  this.setState({
                    bAnimate: "None" != this.props.loopDuration,
                  }),
                onMouseLeave: () => this.SetupAnimationTimer(),
              },
              s.createElement(
                u,
                Object.assign({ animatedAvatar: t }, c),
                i,
                s.createElement(g, {
                  profileItem: r,
                  bDisableAnimation: m && !this.state.bAnimate,
                }),
              ),
            )
          );
        }
      };
      B = (0, n.gn)([r.Pi], B);
    },
  },
]);
