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
    55909: (e, t, a) => {
      "use strict";
      a.d(t, { u: () => m });
      var n = a(90626),
        r = a(71513),
        s = a(93007),
        o = a(56093),
        i = a(78327),
        l = a(61712);
      function m(e) {
        const { children: t, navTreeRef: a, ...m } = e,
          c = n.useRef(),
          A = (0, o.Ue)(c, a),
          u = (0, i.Qn)(),
          p = window.__virtual_keyboard_client;
        if (u) {
          const e = window.__nav_tree_root;
          return n.createElement(
            r.B2,
            { ...m, navTreeRef: A, secondary: !0, parentEmbeddedNavTree: e },
            n.createElement(
              l.F6,
              { factory: p },
              n.createElement(s.q, null, t),
            ),
          );
        }
        return n.createElement(n.Fragment, null, t);
      }
    },
    34181: (e, t, a) => {
      "use strict";
      a.d(t, { A: () => N, D: () => v });
      var n = a(34629),
        r = a(90626),
        s = a(75844),
        o = a(61859),
        i = a(22837),
        l = a(10622),
        m = a(52038),
        c = a(56420),
        A = a.n(c);
      let u = class extends r.Component {
        static get hoverClass() {
          return A().hoverParent;
        }
        render() {
          const {
            persona: e,
            animating: t,
            className: a,
            size: n,
            dim: s,
            ...o
          } = this.props;
          let i = "";
          return (
            "medium" == n ? (i = A().Medium) : "large" == n && (i = A().Large),
            r.createElement(
              "div",
              {
                className: (0, m.A)(
                  A().SnoozeContainer,
                  e.online_state,
                  a,
                  t && A().animating,
                  i,
                  s && A().Dim,
                ),
                ...o,
              },
              r.createElement(
                "div",
                { "data-text": "Z", className: (0, m.A)(A().SnoozeZ, A().Z1) },
                "Z",
              ),
              r.createElement(
                "div",
                { "data-text": "Z", className: (0, m.A)(A().SnoozeZ, A().Z2) },
                "Z",
              ),
              r.createElement(
                "div",
                { "data-text": "Z", className: (0, m.A)(A().SnoozeZ, A().Z3) },
                "Z",
              ),
            )
          );
        }
      };
      u = (0, n.Cg)([s.PA], u);
      var p = a(12155),
        g = a(70342),
        d = a.n(g),
        h = a(97232);
      const E = (0, s.PA)((e) => {
        const { persona: t, className: a, ...n } = e;
        if (!t) return null;
        if (!t.is_online) return null;
        const s = t.HasStateFlag(512),
          i = t.HasStateFlag(2048),
          c = t.IsOnSteamDeck(),
          A = !c && !i && t.HasStateFlag(1024);
        return r.createElement(
          r.Fragment,
          null,
          s &&
            r.createElement(
              "div",
              {
                className: (0, m.A)(
                  a,
                  d().PersonaStatusIcon,
                  d().MobilePhoneIcon,
                  (0, l.rO)(t),
                ),
                title: (0, o.we)("#Platform_Hint_Mobile"),
                ...n,
              },
              r.createElement(h.rf, null),
            ),
          i &&
            r.createElement(
              "div",
              {
                className: (0, m.A)(
                  a,
                  d().PersonaStatusIcon,
                  d().VRIcon,
                  (0, l.rO)(t),
                ),
                title: (0, o.we)("#Platform_Hint_VR"),
                ...n,
              },
              r.createElement(p.MUh, null),
            ),
          A &&
            r.createElement(
              "div",
              {
                className: (0, m.A)(
                  a,
                  d().PersonaStatusIcon,
                  d().BigPictureIcon,
                  (0, l.rO)(t),
                ),
                title: (0, o.we)("#Platform_Hint_BigPicture"),
                ...n,
              },
              r.createElement(p.bPr, null),
            ),
          c &&
            r.createElement(
              "div",
              {
                className: (0, m.A)(
                  a,
                  d().PersonaStatusIcon,
                  d().SteamDeckIcon,
                  (0, l.rO)(t),
                ),
                title: (0, o.we)("#Platform_Hint_SteamDeck"),
                ...n,
              },
              r.createElement(p.DQe, null),
            ),
        );
      });
      var B = a(18828),
        S = a.n(B),
        Q = a(78327);
      function C(e) {
        return r.createElement(
          r.Fragment,
          null,
          r.createElement(
            "span",
            { className: S().partyBeaconJoin },
            (0, o.we)("#User_WantsToPlay"),
          ),
          " – ",
          e.persona.GetCurrentGameName(),
        );
      }
      let v = class extends r.Component {
        render() {
          const {
            className: e,
            onContextMenu: t,
            persona: a,
            eFriendRelationship: n,
            bIsSelf: s,
            bParenthesizeNicknames: c,
            strNickname: A,
            bCompactView: g,
            bHideGameName: d,
            bHideEnhancedRichPresenceLabel: h,
            bHideSnooze: B,
            bHideStatus: v,
            renderStatus: N,
            renderRichPresence: D,
            bHidePersona: P,
            bDNDSet: _,
            bHasPartyBeacon: I,
            bHasGamePrivacy: f,
            bNoMask: b,
            ...T
          } = this.props;
          let w = null,
            M = null,
            R = null,
            k = [
              e,
              S().personaNameAndStatusLabel,
              (0, l.rO)(a),
              g && S().compactView,
              b && S().NoMask,
            ];
          I || a.has_public_party_beacon
            ? (M = r.createElement(C, { persona: a }))
            : (0, i.aP)(n)
              ? ((M = (0, o.we)("#PersonaStateBlocked")), k.push(S().blocked))
              : a.is_ingame
                ? ((M =
                    !a.is_in_nonsteam_game || s || (0, i.S$)(n)
                      ? a.GetCurrentGameName()
                      : (0, o.we)("#PersonaStateInNonSteamGame")),
                  s || P
                    ? s &&
                      a.is_awayOrSnooze &&
                      (R = (0, o.we)("#PersonaStateAway"))
                    : (R = a.GetCurrentGameRichPresence()))
                : a.m_broadcastAccountId &&
                  (M = (0, o.we)("#PersonaStateWatchingBroadcast")),
            M || (M = a.GetLocalizedOnlineStatus()),
            N && (M = N());
          let y = !P && !B;
          !1 === B && (y = !0),
            a.is_awayOrSnooze && y && (w = r.createElement(u, { persona: a }));
          let U = null;
          t
            ? (U = r.createElement(
                "div",
                { className: "ContextMenuButton", onClick: t },
                r.createElement(p.GB9, null),
              ))
            : k.push(S().noContextMenu),
            P && k.push(S().hidePersona),
            D && (R = D()),
            (!d && R) || k.push(S().twoLine);
          const F = !a.is_ingame && !v,
            L = !h && R,
            H = M && (!d || !L),
            K = (0, i.ID)(Q.TS.LAUNCHER_TYPE);
          let W = A && !c,
            Z = W ? A : a.m_strPlayerName,
            G = !P && (H || F) && L;
          return r.createElement(
            "div",
            { ...T, className: (0, m.A)(...k), onContextMenu: t },
            r.createElement(
              "div",
              { className: (0, m.A)(S().statusAndName, G && S().threeLines) },
              r.createElement(
                "div",
                { className: S().playerName },
                Z || " ",
                c &&
                  A &&
                  r.createElement(
                    "span",
                    { className: S().playerNickname },
                    "(",
                    A,
                    ")",
                  ),
              ),
              _ &&
                r.createElement(
                  "div",
                  {
                    className: S().DNDContainer,
                    title: (0, o.we)("#User_ToggleDoNotDisturb"),
                  },
                  r.createElement(p.Aj0, null),
                ),
              W &&
                r.createElement(
                  "span",
                  {
                    className: S().playerNicknameBracket,
                    title: (0, o.we)("#isNickname"),
                  },
                  " *",
                ),
              r.createElement(E, { persona: a }),
              w,
              (a.m_bPlayerNamePending || a.m_bAvatarPending) &&
                K &&
                r.createElement(
                  "div",
                  {
                    className: S().PendingPersona,
                    title: (0, o.we)("#SteamChina_PendingPersonaName"),
                  },
                  r.createElement(p.zD7, null),
                ),
              U,
            ),
            !P &&
              r.createElement(
                "div",
                { className: S().richPresenceContainer },
                (H || F) &&
                  r.createElement(
                    "div",
                    {
                      className: (0, m.A)(
                        S().gameName,
                        G && S().threeLines,
                        S().richPresenceLabel,
                        "no-drag",
                      ),
                    },
                    f &&
                      r.createElement(
                        "div",
                        {
                          className: S().gameIsPrivateIcon,
                          title: (0, o.we)("#User_GameInfoHidden"),
                        },
                        r.createElement(p.jZl, null),
                      ),
                    M,
                  ),
                L &&
                  r.createElement(
                    "div",
                    { className: (0, m.A)(S().richPresenceLabel, "no-drag") },
                    R,
                    " ",
                  ),
              ),
          );
        }
      };
      v = (0, n.Cg)([s.PA], v);
      const N = (0, s.PA)((e) => {
        const {
          persona: t,
          bParenthesizeNicknames: a,
          strNickname: n,
          bIgnorePersonaStatus: s,
          bDisableColoring: o,
          className: i,
          ...c
        } = e;
        let A = n && !a ? n : t.m_strPlayerName;
        return r.createElement(
          "span",
          {
            ...c,
            className: (0, m.A)(
              i,
              o && S().DisableColoring,
              !s && (0, l.rO)(t),
            ),
          },
          r.createElement(
            "span",
            { className: S().playerName },
            A || " ",
            a &&
              n &&
              r.createElement(
                "span",
                { className: S().playerNickname },
                "(",
                n,
                ")",
              ),
          ),
        );
      });
    },
    1035: (e, t, a) => {
      "use strict";
      a.d(t, { Ul: () => d, xz: () => B, $Y: () => E, i8: () => h });
      var n = a(34629),
        r = a(90626),
        s = a(75844),
        o = a(10622),
        i = a(52038),
        l = a(78327),
        m = a(3088);
      const c =
          "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD//gA7Q1JFQVRPUjogZ2QtanBlZyB2MS4wICh1c2luZyBJSkcgSlBFRyB2NjIpLCBxdWFsaXR5ID0gODAK/9sAQwAGBAUGBQQGBgUGBwcGCAoQCgoJCQoUDg8MEBcUGBgXFBYWGh0lHxobIxwWFiAsICMmJykqKRkfLTAtKDAlKCko/9sAQwEHBwcKCAoTCgoTKBoWGigoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgo/8AAEQgAQABAAwEiAAIRAQMRAf/EAB8AAAEFAQEBAQEBAAAAAAAAAAABAgMEBQYHCAkKC//EALUQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+v/EAB8BAAMBAQEBAQEBAQEAAAAAAAABAgMEBQYHCAkKC//EALURAAIBAgQEAwQHBQQEAAECdwABAgMRBAUhMQYSQVEHYXETIjKBCBRCkaGxwQkjM1LwFWJy0QoWJDThJfEXGBkaJicoKSo1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoKDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uLj5OXm5+jp6vLz9PX29/j5+v/aAAwDAQACEQMRAD8A8Inmk8+T94/3j/EfWmedJ/z0f/vo0T/6+T/eP86ZQA/zpP8Ano//AH0aPOk/56P/AN9GmVo6Loeq65M0Wj6ddXrr94QRF9v1I6fjQBR86T/no/8A30aPOk/56P8A99GtHW/Dus6GV/tjS7yyD8K00RVW+h6GsugB/nSf89H/AO+jT4JpPPj/AHj/AHh/EfWoafB/r4/94fzoAJ/9fJ/vH+dMp8/+vk/3j/OmUAXdE099W1mw06Jgsl3PHApPYswUH9a+qPF3iHSPhF4S0+003TxK0hMcEAbZvIA3SO2OvIz6k18nW88ttcRz28jxTRMHSRGKsrA5BBHQg1b1TWdT1fy/7V1G8vfLzs+0TNJtz1xknHQUAfUXw+8c6Z8UdN1HS9V0xIpUTM1s7eYkiE43KcAgg/lxg180+NtEHhzxZqmkqxdLWcojHqUPK598EV9CfBbwpF4G8J3fiLxA4trm5hEsnmceRCOQD/tHqR9B1r568a63/wAJH4r1TVghRLqYuinqE6KD74AoAxafB/r4/wDeH86ZT4P9fH/vD+dABP8A6+T/AHj/ADplPn/18n+8f50ygArt/gtpltq/xK0e2vYxJArPMUYZDFEZhn2yBXEV0/w203VNX8YWdloOoHTtQkWQx3IZl2gISeV55AI/GgD1H9pvxPdi/s/DcDGOz8pbqfHWRizBQfYbc/U+1eD12PxW0fWtE8Tpa+I9UOqXpt0cTl2bCEthctz1B/OuOoAKfB/r4/8AeH86ZT4P9fH/ALw/nQAT/wCvk/3j/OmVNPDJ58n7t/vH+E+tM8mT/nm//fJoAZV7Q9Xv9C1KLUNJuGtryMEJIoBIyCD1BHQmqnkyf883/wC+TR5Mn/PN/wDvk0AaHiHXtT8RX4vdau2u7oIIxIygHaCSBwB6msyn+TJ/zzf/AL5NHkyf883/AO+TQAynwf6+P/eH86PJk/55v/3yafBDJ58f7t/vD+E+tAH/2Q==",
        A =
          a.p +
          "images/applications/store/avatar_default_full.jpg?v=valveisgoodatcaching";
      var u = a(43047),
        p = a.n(u),
        g = a(81393);
      const d = r.memo(function (e) {
        const {
            strAvatarURL: t,
            size: a = "Medium",
            className: n,
            statusStyle: s,
            statusPosition: o,
            children: l,
            ...u
          } = e,
          d = r.useMemo(() => {
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
                      return c;
                    case "Large":
                    case "X-Large":
                    case "FillArea":
                      return A;
                    default:
                      return (0, g.z)(e, `Unhandled size ${e}`), c;
                  }
                })(a),
              ),
              e
            );
          }, [t, a]);
        return r.createElement(
          "div",
          {
            className: (0, i.A)(
              p().avatarHolder,
              "avatarHolder",
              "no-drag",
              a,
              n,
            ),
            ...u,
          },
          r.createElement("div", {
            className: (0, i.A)(p().avatarStatus, "avatarStatus", o),
            style: s,
          }),
          r.createElement(m.c, {
            className: (0, i.A)(p().avatar, "avatar"),
            rgSources: d,
            draggable: !1,
          }),
          l,
        );
      });
      let h = class extends r.Component {
        render() {
          const {
            persona: e,
            size: t = "Medium",
            animatedAvatar: a,
            className: n,
            ...s
          } = this.props;
          let m = "";
          return (
            a && a.image_small && 0 != a.image_small.length
              ? (m = l.TS.MEDIA_CDN_COMMUNITY_URL + "images/" + a.image_small)
              : e &&
                ((m = e.avatar_url_medium),
                "Small" == t || "X-Small" == t
                  ? (m = e.avatar_url)
                  : ("Large" != t && "X-Large" != t && "FillArea" != t) ||
                    (m = e.avatar_url_full)),
            r.createElement(d, {
              strAvatarURL: m,
              size: t,
              className: (0, i.A)((0, o.rO)(e), n),
              ...s,
            })
          );
        }
      };
      h = (0, n.Cg)([s.PA], h);
      const E = (0, s.PA)((e) => {
        const { profileItem: t, className: a, bDisableAnimation: n, ...s } = e;
        if (!t || !t.image_small || 0 == t.image_small.length) return null;
        let o = n ? t.image_large : t.image_small;
        return (
          o || (o = t.image_small),
          o.startsWith("https://") ||
            (o = l.TS.MEDIA_CDN_COMMUNITY_URL + "images/" + o),
          r.createElement(
            "div",
            { className: (0, i.A)(p().avatarFrame, a, "avatarFrame"), ...s },
            r.createElement("img", { className: p().avatarFrameImg, src: o }),
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
            children: n,
            style: s,
            bLimitProfileFrameAnimationTime: o,
            bParentHovered: i,
            ...l
          } = this.props;
          return (
            l.onClick && (s = { ...s, cursor: "pointer" }),
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
                h,
                { animatedAvatar: t, ...l },
                n,
                r.createElement(E, {
                  profileItem: a,
                  bDisableAnimation: o && !this.state.bAnimate,
                }),
              ),
            )
          );
        }
      };
      B = (0, n.Cg)([s.PA], B);
    },
    3088: (e, t, a) => {
      "use strict";
      a.d(t, { c: () => o });
      var n = a(34629),
        r = a(90626),
        s = a(56093);
      class o extends r.Component {
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
              ...n
            } = this.props,
            s = this.src;
          return r.createElement("img", {
            ref: this.m_refImage,
            ...n,
            src: s,
            onError: this.OnImageError,
          });
        }
      }
      (0, n.Cg)([s.oI], o.prototype, "OnImageError", null);
    },
    47554: (e, t, a) => {
      "use strict";
      a.r(t), a.d(t, { default: () => E });
      var n = a(90626),
        r = a(55909),
        s = a(32381),
        o = a(25855),
        i = a(39199),
        l = a(55263),
        m = a(95034),
        c = a(12155),
        A = a(39505),
        u = a(26749),
        p = a(61859),
        g = a(71109),
        d = a.n(g),
        h = a(78327);
      function E(e) {
        const { appID: t } = e,
          a = (0, u.G)(),
          [g] = (0, m.QD)("inqueue", "0"),
          [E, B] = (0, n.useState)(!1),
          [S, Q] = (0, n.useState)(!1),
          [C] = (0, l.t7)(t, { include_assets: !0 }),
          v = (0, o.A)(),
          N = n.useRef();
        n.useEffect(() => N.current?.Activate(!0), []);
        const D = (0, h.Qn)(),
          { eStoreDiscoveryQueueType: P, storePageFilter: _ } =
            n.useMemo(() => {
              if (g?.length > 0) {
                const e = g.split("_"),
                  t = Number(e[0]);
                let a;
                return (
                  e.length > 1 && (a = (0, i.bz)(e[1])),
                  { eStoreDiscoveryQueueType: t, storePageFilter: a }
                );
              }
              return { eStoreDiscoveryQueueType: 0, storePageFilter: void 0 };
            }, [g]),
          I = n.useCallback(() => {
            Q(!0);
          }, []),
          f = n.useCallback(() => {
            B(!0);
          }, []),
          b = (0, i.WX)(P, _);
        return a && C
          ? S
            ? null
            : n.createElement(
                r.u,
                {
                  NavigationManager: v,
                  navTreeRef: N,
                  navID: "DiscoveryQueueAppWidget",
                },
                n.createElement(
                  s.Z,
                  {
                    focusable: !0,
                    className: d().DiscoveryQueueWidgetCtn,
                    onSecondaryButton: I,
                    onOKButton: f,
                    onOKActionDescription: (0, p.we)(
                      "#DiscoveryQueue_ResumeWizard",
                    ),
                    onSecondaryActionDescription: (0, p.we)("#Button_Close"),
                  },
                  n.createElement("img", {
                    className: d().WidgetCapsule,
                    src: C?.GetAssets().GetSmallCapsuleURL(),
                  }),
                  n.createElement(
                    "div",
                    { onClick: f, className: d().WidgetText },
                    (0, p.we)("#DiscoveryQueue_ResumeWizard"),
                    b?.length > 0 && ": " + b,
                  ),
                  !D &&
                    n.createElement(
                      "div",
                      { className: d().CloseButton, onClick: I },
                      n.createElement(c.X, null),
                    ),
                  E &&
                    n.createElement(A.jM, {
                      includeAppID: t,
                      bWizardVisible: E,
                      fnCloseModal: () => B(!1),
                      eStoreDiscoveryQueueType: P,
                      storePageFilter: _,
                    }),
                ),
              )
          : null;
      }
    },
    25054: (e, t, a) => {
      "use strict";
      a.r(t), a.d(t, { default: () => A });
      var n = a(90626),
        r = a(61859),
        s = a(39505),
        o = a(26749),
        i = a(32381),
        l = a(78327),
        m = a(44325),
        c = a(738);
      function A(e) {
        const t = (0, o.G)(),
          [a, A] = (0, n.useState)(!1),
          u = n.useCallback(() => {
            l.iA.logged_in
              ? A(!0)
              : (0, c.pg)(
                  n.createElement(m.KG, {
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
          ? n.createElement(
              i.Z,
              null,
              n.createElement(
                "a",
                { onClick: u, className: "experiment-button" },
                (0, r.we)("#DiscoveryQueue_OpenWizard"),
              ),
              a &&
                n.createElement(s.jM, {
                  bWizardVisible: a,
                  fnCloseModal: () => A(!1),
                  eStoreDiscoveryQueueType: 0,
                }),
            )
          : n.createElement(
              "div",
              { className: "experiment-button-placeholder" },
              " ",
            );
      }
    },
  },
]);
