/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkstore = self.webpackChunkstore || []).push([
  [9672],
  {
    56420: (e) => {
      e.exports = {
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
    18828: (e) => {
      e.exports = {
        "duration-app-launch": "800ms",
        statusAndName: "_4ZTzGZ5TTgFyfw1DcXLXS",
        threeLines: "_1oYSXGjBe7QctQ1ikLpCMm",
        blocked: "VTxPkslK1CSpKNFMgKg7d",
        richPresenceLabel: "_2Ri005Wg_uXDTa71kdRbcN",
        playerName: "nOdcT-MoOaXGePXLyPe0H",
        playerNickname: "_2saJTAocZ9TnYXTGvnqUMC",
        DisableColoring: "_3oDmKGyTBBm7i4DULjwYcC",
        playerNicknameBracket: "_3XEmWmfQy7gbYJ4KJ1N9tp",
        richPresenceContainer: "_3sxE7F1LV2IcSX68YsH9dI",
        gameName: "_1cB0qtF0paHWWyj1XNcnbG",
        NoMask: "_2dAj6KfWRAxoYPr6tgXd6t",
        twoLine: "_1BbOegz8bYL7iPzgYpOgQI",
        DNDContainer: "_3IswZMeeD6ORStUjgv6Xh8",
        partyBeaconJoin: "_3BnDsXrefFJrt_8frF2wvB",
        hidePersona: "_3ZJkOzmqed_i-p74uF3hus",
        compactView: "_3bbRZyUiK-bfc5Qov6xukI",
        noContextMenu: "_1JE5G7_FNm2SRDEEnOWMVv",
        gameIsPrivateIcon: "_2gBKQXiTBLjeVVaqvc5QVh",
        PendingPersona: "_2sxXnGfkPxNgR6Lk1-SmfQ",
      };
    },
    70342: (e) => {
      e.exports = {
        "duration-app-launch": "800ms",
        PersonaStatusIcon: "KxAI_M9gWx3OnKSshHOs6",
        MobilePhoneIcon: "_1iRFj5lJrMqMnRb3GZYPSw",
        SteamDeckIcon: "_2oLqcfqHHKKAK0WfzjXMg_",
        VRIcon: "_368tz9TSOLGiG2mNMLScMz",
      };
    },
    43047: (e) => {
      e.exports = {
        avatarHolder: "nibodjvvrm86uCfnnAn4g",
        avatarStatus: "_3xUpb5DWXPFNcHHIcv-9pe",
        avatar: "_3h-QRJGxnVOIExtHD1R0f2",
        avatarFrame: "X_mJE4BYV5StDPwZhSiAu",
        avatarFrameImg: "_3fM0F85j3aWVzr4RJM9-eu",
      };
    },
    71109: (e) => {
      e.exports = {
        "duration-app-launch": "800ms",
        DiscoveryQueueWidgetCtn: "_1LXqxVtAL8Lmy7J7rLSVit",
        WidgetText: "co4IP1iV1813n9UgG3h5f",
        WidgetCapsule: "ZyOLslFdmnVjR1OGpRaue",
        CloseButton: "bfN8kdqVDI58Ly1qiSuT_",
        Y: "_1FD7rgQVEqkzjDjzYa-1BC",
      };
    },
    34181: (e, t, a) => {
      "use strict";
      a.d(t, { A: () => f, D: () => b });
      var s = a(34629),
        r = a(90626),
        n = a(75844),
        i = a(61859),
        o = a(22837),
        l = a(10622),
        c = a(52038),
        m = a(56420),
        u = a.n(m);
      let A = class extends r.Component {
        static get hoverClass() {
          return u().hoverParent;
        }
        render() {
          const {
            persona: e,
            animating: t,
            className: a,
            size: s,
            dim: n,
            ...i
          } = this.props;
          let o = "";
          return (
            "medium" == s ? (o = u().Medium) : "large" == s && (o = u().Large),
            r.createElement(
              "div",
              {
                className: (0, c.A)(
                  u().SnoozeContainer,
                  e.online_state,
                  a,
                  t && u().animating,
                  o,
                  n && u().Dim,
                ),
                ...i,
              },
              r.createElement(
                "div",
                { "data-text": "Z", className: (0, c.A)(u().SnoozeZ, u().Z1) },
                "Z",
              ),
              r.createElement(
                "div",
                { "data-text": "Z", className: (0, c.A)(u().SnoozeZ, u().Z2) },
                "Z",
              ),
              r.createElement(
                "div",
                { "data-text": "Z", className: (0, c.A)(u().SnoozeZ, u().Z3) },
                "Z",
              ),
            )
          );
        }
      };
      A = (0, s.Cg)([n.PA], A);
      var p = a(12155),
        h = a(70342),
        g = a.n(h),
        d = a(97232);
      const E = (0, n.PA)((e) => {
        const { persona: t, className: a, ...s } = e;
        if (!t) return null;
        if (!t.is_online) return null;
        const n = t.HasStateFlag(512),
          o = t.HasStateFlag(2048),
          m = t.IsOnSteamDeck(),
          u = !m && !o && t.HasStateFlag(1024);
        return r.createElement(
          r.Fragment,
          null,
          n &&
            r.createElement(
              "div",
              {
                className: (0, c.A)(
                  a,
                  g().PersonaStatusIcon,
                  g().MobilePhoneIcon,
                  (0, l.rO)(t),
                ),
                title: (0, i.we)("#Platform_Hint_Mobile"),
                ...s,
              },
              r.createElement(d.rf, null),
            ),
          o &&
            r.createElement(
              "div",
              {
                className: (0, c.A)(
                  a,
                  g().PersonaStatusIcon,
                  g().VRIcon,
                  (0, l.rO)(t),
                ),
                title: (0, i.we)("#Platform_Hint_VR"),
                ...s,
              },
              r.createElement(p.MUh, null),
            ),
          u &&
            r.createElement(
              "div",
              {
                className: (0, c.A)(
                  a,
                  g().PersonaStatusIcon,
                  g().BigPictureIcon,
                  (0, l.rO)(t),
                ),
                title: (0, i.we)("#Platform_Hint_BigPicture"),
                ...s,
              },
              r.createElement(p.bPr, null),
            ),
          m &&
            r.createElement(
              "div",
              {
                className: (0, c.A)(
                  a,
                  g().PersonaStatusIcon,
                  g().SteamDeckIcon,
                  (0, l.rO)(t),
                ),
                title: (0, i.we)("#Platform_Hint_SteamDeck"),
                ...s,
              },
              r.createElement(p.DQe, null),
            ),
        );
      });
      var B = a(18828),
        S = a.n(B),
        Q = a(78327);
      function v(e) {
        return r.createElement(
          r.Fragment,
          null,
          r.createElement(
            "span",
            { className: S().partyBeaconJoin },
            (0, i.we)("#User_WantsToPlay"),
          ),
          " – ",
          e.persona.GetCurrentGameName(),
        );
      }
      let b = class extends r.Component {
        render() {
          const {
            className: e,
            onContextMenu: t,
            persona: a,
            eFriendRelationship: s,
            bIsSelf: n,
            bParenthesizeNicknames: m,
            strNickname: u,
            bCompactView: h,
            bHideGameName: g,
            bHideEnhancedRichPresenceLabel: d,
            bHideSnooze: B,
            bHideStatus: b,
            renderStatus: f,
            renderRichPresence: C,
            bHidePersona: N,
            bDNDSet: D,
            bHasPartyBeacon: P,
            bHasGamePrivacy: y,
            bNoMask: _,
            ...I
          } = this.props;
          let R = null,
            w = null,
            T = null,
            M = [
              e,
              S().personaNameAndStatusLabel,
              (0, l.rO)(a),
              h && S().compactView,
              _ && S().NoMask,
            ];
          P || a.has_public_party_beacon
            ? (w = r.createElement(v, { persona: a }))
            : (0, o.aP)(s)
              ? ((w = (0, i.we)("#PersonaStateBlocked")), M.push(S().blocked))
              : a.is_ingame
                ? ((w =
                    !a.is_in_nonsteam_game || n || (0, o.S$)(s)
                      ? a.GetCurrentGameName()
                      : (0, i.we)("#PersonaStateInNonSteamGame")),
                  n || N
                    ? n &&
                      a.is_awayOrSnooze &&
                      (T = (0, i.we)("#PersonaStateAway"))
                    : (T = a.GetCurrentGameRichPresence()))
                : a.m_broadcastAccountId &&
                  (w = (0, i.we)("#PersonaStateWatchingBroadcast")),
            w || (w = a.GetLocalizedOnlineStatus()),
            f && (w = f());
          let k = !N && !B;
          !1 === B && (k = !0),
            a.is_awayOrSnooze && k && (R = r.createElement(A, { persona: a }));
          let H = null;
          t
            ? (H = r.createElement(
                "div",
                { className: "ContextMenuButton", onClick: t },
                r.createElement(p.GB9, null),
              ))
            : M.push(S().noContextMenu),
            N && M.push(S().hidePersona),
            C && (T = C()),
            (!g && T) || M.push(S().twoLine);
          const U = !a.is_ingame && !b,
            L = !d && T,
            O = w && (!g || !L),
            F = (0, o.ID)(Q.TS.LAUNCHER_TYPE);
          let K = u && !m,
            W = K ? u : a.m_strPlayerName,
            Z = !N && (O || U) && L;
          return r.createElement(
            "div",
            { ...I, className: (0, c.A)(...M), onContextMenu: t },
            r.createElement(
              "div",
              { className: (0, c.A)(S().statusAndName, Z && S().threeLines) },
              r.createElement(
                "div",
                { className: S().playerName },
                W || " ",
                m &&
                  u &&
                  r.createElement(
                    "span",
                    { className: S().playerNickname },
                    "(",
                    u,
                    ")",
                  ),
              ),
              D &&
                r.createElement(
                  "div",
                  {
                    className: S().DNDContainer,
                    title: (0, i.we)("#User_ToggleDoNotDisturb"),
                  },
                  r.createElement(p.Aj0, null),
                ),
              K &&
                r.createElement(
                  "span",
                  {
                    className: S().playerNicknameBracket,
                    title: (0, i.we)("#isNickname"),
                  },
                  " *",
                ),
              r.createElement(E, { persona: a }),
              R,
              (a.m_bPlayerNamePending || a.m_bAvatarPending) &&
                F &&
                r.createElement(
                  "div",
                  {
                    className: S().PendingPersona,
                    title: (0, i.we)("#SteamChina_PendingPersonaName"),
                  },
                  r.createElement(p.zD7, null),
                ),
              H,
            ),
            !N &&
              r.createElement(
                "div",
                { className: S().richPresenceContainer },
                (O || U) &&
                  r.createElement(
                    "div",
                    {
                      className: (0, c.A)(
                        S().gameName,
                        Z && S().threeLines,
                        S().richPresenceLabel,
                        "no-drag",
                      ),
                    },
                    y &&
                      r.createElement(
                        "div",
                        {
                          className: S().gameIsPrivateIcon,
                          title: (0, i.we)("#User_GameInfoHidden"),
                        },
                        r.createElement(p.jZl, null),
                      ),
                    w,
                  ),
                L &&
                  r.createElement(
                    "div",
                    { className: (0, c.A)(S().richPresenceLabel, "no-drag") },
                    T,
                    " ",
                  ),
              ),
          );
        }
      };
      b = (0, s.Cg)([n.PA], b);
      const f = (0, n.PA)((e) => {
        const {
          persona: t,
          bParenthesizeNicknames: a,
          strNickname: s,
          bIgnorePersonaStatus: n,
          bDisableColoring: i,
          className: o,
          ...m
        } = e;
        let u = s && !a ? s : t.m_strPlayerName;
        return r.createElement(
          "span",
          {
            ...m,
            className: (0, c.A)(
              o,
              i && S().DisableColoring,
              !n && (0, l.rO)(t),
            ),
          },
          r.createElement(
            "span",
            { className: S().playerName },
            u || " ",
            a &&
              s &&
              r.createElement(
                "span",
                { className: S().playerNickname },
                "(",
                s,
                ")",
              ),
          ),
        );
      });
    },
    1035: (e, t, a) => {
      "use strict";
      a.d(t, { Ul: () => g, xz: () => B, $Y: () => E, i8: () => d });
      var s = a(34629),
        r = a(90626),
        n = a(75844),
        i = a(10622),
        o = a(52038),
        l = a(78327),
        c = a(3088);
      const m =
          "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD//gA7Q1JFQVRPUjogZ2QtanBlZyB2MS4wICh1c2luZyBJSkcgSlBFRyB2NjIpLCBxdWFsaXR5ID0gODAK/9sAQwAGBAUGBQQGBgUGBwcGCAoQCgoJCQoUDg8MEBcUGBgXFBYWGh0lHxobIxwWFiAsICMmJykqKRkfLTAtKDAlKCko/9sAQwEHBwcKCAoTCgoTKBoWGigoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgo/8AAEQgAQABAAwEiAAIRAQMRAf/EAB8AAAEFAQEBAQEBAAAAAAAAAAABAgMEBQYHCAkKC//EALUQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+v/EAB8BAAMBAQEBAQEBAQEAAAAAAAABAgMEBQYHCAkKC//EALURAAIBAgQEAwQHBQQEAAECdwABAgMRBAUhMQYSQVEHYXETIjKBCBRCkaGxwQkjM1LwFWJy0QoWJDThJfEXGBkaJicoKSo1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoKDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uLj5OXm5+jp6vLz9PX29/j5+v/aAAwDAQACEQMRAD8A8Inmk8+T94/3j/EfWmedJ/z0f/vo0T/6+T/eP86ZQA/zpP8Ano//AH0aPOk/56P/AN9GmVo6Loeq65M0Wj6ddXrr94QRF9v1I6fjQBR86T/no/8A30aPOk/56P8A99GtHW/Dus6GV/tjS7yyD8K00RVW+h6GsugB/nSf89H/AO+jT4JpPPj/AHj/AHh/EfWoafB/r4/94fzoAJ/9fJ/vH+dMp8/+vk/3j/OmUAXdE099W1mw06Jgsl3PHApPYswUH9a+qPF3iHSPhF4S0+003TxK0hMcEAbZvIA3SO2OvIz6k18nW88ttcRz28jxTRMHSRGKsrA5BBHQg1b1TWdT1fy/7V1G8vfLzs+0TNJtz1xknHQUAfUXw+8c6Z8UdN1HS9V0xIpUTM1s7eYkiE43KcAgg/lxg180+NtEHhzxZqmkqxdLWcojHqUPK598EV9CfBbwpF4G8J3fiLxA4trm5hEsnmceRCOQD/tHqR9B1r568a63/wAJH4r1TVghRLqYuinqE6KD74AoAxafB/r4/wDeH86ZT4P9fH/vD+dABP8A6+T/AHj/ADplPn/18n+8f50ygArt/gtpltq/xK0e2vYxJArPMUYZDFEZhn2yBXEV0/w203VNX8YWdloOoHTtQkWQx3IZl2gISeV55AI/GgD1H9pvxPdi/s/DcDGOz8pbqfHWRizBQfYbc/U+1eD12PxW0fWtE8Tpa+I9UOqXpt0cTl2bCEthctz1B/OuOoAKfB/r4/8AeH86ZT4P9fH/ALw/nQAT/wCvk/3j/OmVNPDJ58n7t/vH+E+tM8mT/nm//fJoAZV7Q9Xv9C1KLUNJuGtryMEJIoBIyCD1BHQmqnkyf883/wC+TR5Mn/PN/wDvk0AaHiHXtT8RX4vdau2u7oIIxIygHaCSBwB6msyn+TJ/zzf/AL5NHkyf883/AO+TQAynwf6+P/eH86PJk/55v/3yafBDJ58f7t/vD+E+tAH/2Q==",
        u =
          a.p +
          "images/applications/store/avatar_default_full.jpg?v=valveisgoodatcaching";
      var A = a(43047),
        p = a.n(A),
        h = a(81393);
      const g = r.memo(function (e) {
        const {
            strAvatarURL: t,
            size: a = "Medium",
            className: s,
            statusStyle: n,
            statusPosition: i,
            children: l,
            ...A
          } = e,
          g = r.useMemo(() => {
            const e = [];
            return (
              t && e.push(t),
              e.push(
                (function (e) {
                  switch (e) {
                    case "X-Small":
                    case "Small":
                      return "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD//gA7Q1JFQVRPUjogZ2QtanBlZyB2MS4wICh1c2luZyBJSkcgSlBFRyB2NjIpLCBxdWFsaXR5ID0gOTAK/9sAQwADAgIDAgIDAwMDBAMDBAUIBQUEBAUKBwcGCAwKDAwLCgsLDQ4SEA0OEQ4LCxAWEBETFBUVFQwPFxgWFBgSFBUU/9sAQwEDBAQFBAUJBQUJFA0LDRQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQU/8AAEQgAIAAgAwEiAAIRAQMRAf/EAB8AAAEFAQEBAQEBAAAAAAAAAAABAgMEBQYHCAkKC//EALUQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+v/EAB8BAAMBAQEBAQEBAQEAAAAAAAABAgMEBQYHCAkKC//EALURAAIBAgQEAwQHBQQEAAECdwABAgMRBAUhMQYSQVEHYXETIjKBCBRCkaGxwQkjM1LwFWJy0QoWJDThJfEXGBkaJicoKSo1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoKDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uLj5OXm5+jp6vLz9PX29/j5+v/aAAwDAQACEQMRAD8A/P4mW5nmllmeSR3LMzMSSc1a07R73V72KzsILi9u5TiOC2RpJHPoFGSarQ/ef6n+de4fAn9oaL4D+DfGX9i6Uf8AhO9XSKDT9eZY3WxiDZcBGByTkn0JCZBxQB41qeiX+iXslnqNtdWF3H9+3uo2jkX6q2CKpgy208MsUzxyI4ZWViCDmvsr9rrUdT1j9nb4T6h8RBbH4qXUs0zMsSxXJ04hivnKoAU5MPGBg7uM7q+NpvvJ9R/OgAh+8/1P867T4POI/iz4Mc6U+u7NZtG/suPbuu8TKfKG4hct93njnmuKIltp5opYXjkRyrKykEHNWbDVbvSr63vbKaezvLeRZYbi3ZkkidTlWVhyCCMgjpQB6l+1F411nx58dPFWpa5a3mnXaXP2ZNOvXVpLKNBhYflJUY5PB5JJ6k15LN95PqP51a1PWr7WtQnvtRuLm/vrhzJNc3TtJLIx6lmbJJ9zVQCW5nhiiheSR3CqqqSSc0Af/9k=";
                    case "Medium":
                    case "MediumLarge":
                      return m;
                    case "Large":
                    case "X-Large":
                    case "FillArea":
                      return u;
                    default:
                      return (0, h.z)(e, `Unhandled size ${e}`), m;
                  }
                })(a),
              ),
              e
            );
          }, [t, a]);
        return r.createElement(
          "div",
          {
            className: (0, o.A)(
              p().avatarHolder,
              "avatarHolder",
              "no-drag",
              a,
              s,
            ),
            ...A,
          },
          r.createElement("div", {
            className: (0, o.A)(p().avatarStatus, "avatarStatus", i),
            style: n,
          }),
          r.createElement(c.c, {
            className: (0, o.A)(p().avatar, "avatar"),
            rgSources: g,
            draggable: !1,
          }),
          l,
        );
      });
      let d = class extends r.Component {
        render() {
          const {
            persona: e,
            size: t = "Medium",
            animatedAvatar: a,
            className: s,
            ...n
          } = this.props;
          let c = "";
          return (
            a && a.image_small && 0 != a.image_small.length
              ? (c = l.TS.MEDIA_CDN_COMMUNITY_URL + "images/" + a.image_small)
              : e &&
                ((c = e.avatar_url_medium),
                "Small" == t || "X-Small" == t
                  ? (c = e.avatar_url)
                  : ("Large" != t && "X-Large" != t && "FillArea" != t) ||
                    (c = e.avatar_url_full)),
            r.createElement(g, {
              strAvatarURL: c,
              size: t,
              className: (0, o.A)((0, i.rO)(e), s),
              ...n,
            })
          );
        }
      };
      d = (0, s.Cg)([n.PA], d);
      const E = (0, n.PA)((e) => {
        const { profileItem: t, className: a, bDisableAnimation: s, ...n } = e;
        if (!t || !t.image_small || 0 == t.image_small.length) return null;
        let i = s ? t.image_large : t.image_small;
        return (
          i || (i = t.image_small),
          i.startsWith("https://") ||
            (i = l.TS.MEDIA_CDN_COMMUNITY_URL + "images/" + i),
          r.createElement(
            "div",
            { className: (0, o.A)(p().avatarFrame, a, "avatarFrame"), ...n },
            r.createElement("img", { className: p().avatarFrameImg, src: i }),
          )
        );
      });
      let B = class extends r.Component {
        m_timer;
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
                : (this.setState({ bAnimate: !0 }),
                  this.SetupAnimationTimer())),
            this.props.bParentHovered != e.bParentHovered &&
              (this.props.bParentHovered &&
              "None" != this.props.loopDuration &&
              "Infinite" != this.props.loopDuration
                ? (this.setState({ bAnimate: !0 }), this.StopAnimationTimer())
                : this.state.bAnimate && this.SetupAnimationTimer());
        }
        render() {
          let {
            loopDuration: e,
            animatedAvatar: t,
            avatarFrame: a,
            children: s,
            style: n,
            bLimitProfileFrameAnimationTime: i,
            bParentHovered: o,
            ...l
          } = this.props;
          return (
            l.onClick && (n = { ...n, cursor: "pointer" }),
            this.state.bAnimate || (t = null),
            r.createElement(
              "div",
              {
                onMouseEnter: () =>
                  this.setState({
                    bAnimate: "None" != this.props.loopDuration,
                  }),
                onMouseLeave: () => this.SetupAnimationTimer(),
              },
              r.createElement(
                d,
                { animatedAvatar: t, ...l },
                s,
                r.createElement(E, {
                  profileItem: a,
                  bDisableAnimation: i && !this.state.bAnimate,
                }),
              ),
            )
          );
        }
      };
      B = (0, s.Cg)([n.PA], B);
    },
    3088: (e, t, a) => {
      "use strict";
      a.d(t, { c: () => i });
      var s = a(34629),
        r = a(90626),
        n = a(73745);
      class i extends r.Component {
        m_refImage = r.createRef();
        constructor(e) {
          super(e), (this.state = { nImage: 0 });
        }
        componentDidUpdate(e) {
          JSON.stringify(this.props.rgSources) != JSON.stringify(e.rgSources) &&
            this.setState({ nImage: 0 });
        }
        get src() {
          let e = "";
          return (
            this.props.rgSources &&
              this.props.rgSources.length > this.state.nImage &&
              (e = this.props.rgSources[this.state.nImage]),
            e ||
              (console.warn(
                "MultiSourceImage created with no image src",
                this.props,
                this.state.nImage,
              ),
              (e =
                "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=")),
            e
          );
        }
        get imgRef() {
          return this.m_refImage;
        }
        OnImageError(e) {
          this.props.onIncrementalError &&
            this.props.onIncrementalError(
              e,
              this.props.rgSources[this.state.nImage],
              this.state.nImage,
            );
          let t = this.state.nImage + 1;
          t >= this.props.rgSources.length &&
            this.props.onError &&
            this.props.onError(e),
            t < this.props.rgSources.length && this.setState({ nImage: t });
        }
        render() {
          const {
              rgSources: e,
              onIncrementalError: t,
              onError: a,
              ...s
            } = this.props,
            n = this.src;
          return r.createElement("img", {
            ref: this.m_refImage,
            ...s,
            src: n,
            onError: this.OnImageError,
          });
        }
      }
      (0, s.Cg)([n.oI], i.prototype, "OnImageError", null);
    },
    47554: (e, t, a) => {
      "use strict";
      a.r(t), a.d(t, { default: () => E });
      var s = a(90626),
        r = a(12447),
        n = a(76217),
        i = a(46115),
        o = a(39199),
        l = a(55263),
        c = a(95034),
        m = a(12155),
        u = a(35391),
        A = a(26749),
        p = a(61859),
        h = a(71109),
        g = a.n(h),
        d = a(78327);
      function E(e) {
        const { appID: t } = e,
          a = (0, A.G)(),
          [h] = (0, c.QD)("inqueue", "0"),
          [E, B] = (0, s.useState)(!1),
          [S, Q] = (0, s.useState)(!1),
          [v] = (0, l.t7)(t, { include_assets: !0 }),
          b = (0, i.A)(),
          f = s.useRef();
        s.useEffect(() => f.current?.Activate(!0), []);
        const C = (0, d.Qn)(),
          { eStoreDiscoveryQueueType: N, storePageFilter: D } =
            s.useMemo(() => {
              if (h?.length > 0) {
                const e = h.split("_"),
                  t = Number(e[0]);
                let a;
                return (
                  e.length > 1 && (a = (0, o.bz)(e[1])),
                  { eStoreDiscoveryQueueType: t, storePageFilter: a }
                );
              }
              return { eStoreDiscoveryQueueType: 0, storePageFilter: void 0 };
            }, [h]),
          P = s.useCallback(() => {
            Q(!0);
          }, []),
          y = s.useCallback(() => {
            B(!0);
          }, []),
          _ = (0, o.WX)(N, D);
        return a && v
          ? S
            ? null
            : s.createElement(
                r.u,
                {
                  NavigationManager: b,
                  navTreeRef: f,
                  navID: "DiscoveryQueueAppWidget",
                },
                s.createElement(
                  n.Z,
                  {
                    focusable: !0,
                    className: g().DiscoveryQueueWidgetCtn,
                    onSecondaryButton: P,
                    onOKButton: y,
                    onOKActionDescription: (0, p.we)(
                      "#DiscoveryQueue_ResumeWizard",
                    ),
                    onSecondaryActionDescription: (0, p.we)("#Button_Close"),
                  },
                  s.createElement("img", {
                    className: g().WidgetCapsule,
                    src: v?.GetAssets().GetSmallCapsuleURL(),
                  }),
                  s.createElement(
                    "div",
                    { onClick: y, className: g().WidgetText },
                    (0, p.we)("#DiscoveryQueue_ResumeWizard"),
                    _?.length > 0 && ": " + _,
                  ),
                  !C &&
                    s.createElement(
                      "div",
                      { className: g().CloseButton, onClick: P },
                      s.createElement(m.X, null),
                    ),
                  E &&
                    s.createElement(u.jM, {
                      includeAppID: t,
                      bWizardVisible: E,
                      fnCloseModal: () => B(!1),
                      eStoreDiscoveryQueueType: N,
                      storePageFilter: D,
                    }),
                ),
              )
          : null;
      }
    },
    25054: (e, t, a) => {
      "use strict";
      a.r(t), a.d(t, { default: () => u });
      var s = a(90626),
        r = a(61859),
        n = a(35391),
        i = a(26749),
        o = a(76217),
        l = a(78327),
        c = a(44325),
        m = a(738);
      function u(e) {
        const t = (0, i.G)(),
          [a, u] = (0, s.useState)(!1),
          A = s.useCallback(() => {
            l.iA.logged_in
              ? u(!0)
              : (0, m.pg)(
                  s.createElement(c.KG, {
                    onOK: () => {
                      window.location.href = `${l.TS.STORE_BASE_URL}login?redir=${encodeURIComponent(document.location.href)}`;
                    },
                    strOKButtonText: (0, r.we)(
                      "#DiscoveryQueue_Error_Login_Title",
                    ),
                    strDescription: (0, r.we)("#DiscoveryQueue_Error_Login"),
                    strTitle: (0, r.we)("#DiscoveryQueue_Error_Login_Title"),
                  }),
                  window,
                );
          }, []);
        return t
          ? s.createElement(
              o.Z,
              null,
              s.createElement(
                "a",
                { onClick: A, className: "experiment-button" },
                (0, r.we)("#DiscoveryQueue_OpenWizard"),
              ),
              a &&
                s.createElement(n.jM, {
                  bWizardVisible: a,
                  fnCloseModal: () => u(!1),
                  eStoreDiscoveryQueueType: 0,
                }),
            )
          : s.createElement(
              "div",
              { className: "experiment-button-placeholder" },
              " ",
            );
      }
    },
    54806: (e, t, a) => {
      "use strict";
      a.d(t, { E: () => g });
      var s = a(90626),
        r = a(86709),
        n = a(45747),
        i = a(74500),
        o = a(57168);
      function l(e, t) {
        return e.filter((e) => !t.includes(e));
      }
      var c = class extends i.Q {
          #e;
          #t;
          #a;
          #s;
          #r;
          #n;
          #i;
          constructor(e, t, a) {
            super(),
              (this.#e = e),
              (this.#a = []),
              (this.#s = []),
              (this.#t = []),
              this.setQueries(t);
          }
          onSubscribe() {
            1 === this.listeners.size &&
              this.#s.forEach((e) => {
                e.subscribe((t) => {
                  this.#o(e, t);
                });
              });
          }
          onUnsubscribe() {
            this.listeners.size || this.destroy();
          }
          destroy() {
            (this.listeners = new Set()),
              this.#s.forEach((e) => {
                e.destroy();
              });
          }
          setQueries(e, t, a) {
            (this.#a = e),
              r.j.batch(() => {
                const e = this.#s,
                  t = this.#l(this.#a);
                t.forEach((e) =>
                  e.observer.setOptions(e.defaultedQueryOptions, a),
                );
                const s = t.map((e) => e.observer),
                  r = s.map((e) => e.getCurrentResult()),
                  n = s.some((t, a) => t !== e[a]);
                (e.length !== s.length || n) &&
                  ((this.#s = s),
                  (this.#t = r),
                  this.hasListeners() &&
                    (l(e, s).forEach((e) => {
                      e.destroy();
                    }),
                    l(s, e).forEach((e) => {
                      e.subscribe((t) => {
                        this.#o(e, t);
                      });
                    }),
                    this.#c()));
              });
          }
          getCurrentResult() {
            return this.#t;
          }
          getQueries() {
            return this.#s.map((e) => e.getCurrentQuery());
          }
          getObservers() {
            return this.#s;
          }
          getOptimisticResult(e, t) {
            const a = this.#l(e),
              s = a.map((e) =>
                e.observer.getOptimisticResult(e.defaultedQueryOptions),
              );
            return [
              s,
              (e) => this.#m(e ?? s, t),
              () =>
                a.map((e, t) => {
                  const r = s[t];
                  return e.defaultedQueryOptions.notifyOnChangeProps
                    ? r
                    : e.observer.trackResult(r, (e) => {
                        a.forEach((t) => {
                          t.observer.trackProp(e);
                        });
                      });
                }),
            ];
          }
          #m(e, t) {
            return t
              ? ((this.#r && this.#t === this.#i && t === this.#n) ||
                  ((this.#n = t),
                  (this.#i = this.#t),
                  (this.#r = (0, o.BH)(this.#r, t(e)))),
                this.#r)
              : e;
          }
          #l(e) {
            const t = this.#s,
              a = new Map(t.map((e) => [e.options.queryHash, e])),
              s = e.map((e) => this.#e.defaultQueryOptions(e)),
              r = s.flatMap((e) => {
                const t = a.get(e.queryHash);
                return null != t
                  ? [{ defaultedQueryOptions: e, observer: t }]
                  : [];
              }),
              i = new Set(r.map((e) => e.defaultedQueryOptions.queryHash)),
              o = s.filter((e) => !i.has(e.queryHash)),
              l = (e) => {
                const t = this.#e.defaultQueryOptions(e);
                return (
                  this.#s.find((e) => e.options.queryHash === t.queryHash) ??
                  new n.$(this.#e, t)
                );
              },
              c = o.map((e) => ({ defaultedQueryOptions: e, observer: l(e) }));
            return r
              .concat(c)
              .sort(
                (e, t) =>
                  s.indexOf(e.defaultedQueryOptions) -
                  s.indexOf(t.defaultedQueryOptions),
              );
          }
          #o(e, t) {
            const a = this.#s.indexOf(e);
            -1 !== a &&
              ((this.#t = (function (e, t, a) {
                const s = e.slice(0);
                return (s[t] = a), s;
              })(this.#t, a, t)),
              this.#c());
          }
          #c() {
            r.j.batch(() => {
              this.listeners.forEach((e) => {
                e(this.#t);
              });
            });
          }
        },
        m = a(75233),
        u = a(22730),
        A = a(43424),
        p = a(19086),
        h = a(44407);
      function g({ queries: e, ...t }, a) {
        const i = (0, m.jE)(a),
          o = (0, u.w)(),
          l = (0, A.h)(),
          g = s.useMemo(
            () =>
              e.map((e) => {
                const t = i.defaultQueryOptions(e);
                return (
                  (t._optimisticResults = o ? "isRestoring" : "optimistic"), t
                );
              }),
            [e, i, o],
          );
        g.forEach((e) => {
          (0, h.tu)(e), (0, p.LJ)(e, l);
        }),
          (0, p.wZ)(l);
        const [d] = s.useState(() => new c(i, g, t)),
          [E, B, S] = d.getOptimisticResult(g, t.combine);
        s.useSyncExternalStore(
          s.useCallback(
            (e) => (o ? () => {} : d.subscribe(r.j.batchCalls(e))),
            [d, o],
          ),
          () => d.getCurrentResult(),
          () => d.getCurrentResult(),
        ),
          s.useEffect(() => {
            d.setQueries(g, t, { listeners: !1 });
          }, [g, t, d]);
        const Q = E.some((e, t) => (0, h.EU)(g[t], e))
          ? E.flatMap((e, t) => {
              const a = g[t];
              if (a) {
                const t = new n.$(i, a);
                if ((0, h.EU)(a, e)) return (0, h.iL)(a, t, l);
                (0, h.nE)(e, o) && (0, h.iL)(a, t, l);
              }
              return [];
            })
          : [];
        if (Q.length > 0) throw Promise.all(Q);
        const v = E.find((e, t) => {
          const a = g[t];
          return (
            a &&
            (0, p.$1)({
              result: e,
              errorResetBoundary: l,
              throwOnError: a.throwOnError,
              query: i.getQueryCache().get(a.queryHash),
            })
          );
        });
        if (v?.error) throw v.error;
        return B(S());
      }
    },
  },
]);
