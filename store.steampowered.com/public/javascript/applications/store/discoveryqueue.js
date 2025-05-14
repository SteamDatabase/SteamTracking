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
    15392: (e) => {
      e.exports = {
        Link: "-HlDBB290kjpl61uUmRed",
        Banner: "_2bT8irkKNnA5sxFG3MUXzH",
        Big: "sGy-bB7uqEt4Hoe7U5iA1",
        Mobile: "mhii5hgMCQvO2tXOUdWPQ",
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
    12447: (e, t, a) => {
      "use strict";
      a.d(t, { u: () => l });
      var i = a(8871),
        n = a(90626),
        r = a(78327),
        s = a(85585),
        o = a(7445);
      function l(e) {
        const { children: t, navTreeRef: a, NavigationManager: l, ...m } = e,
          c = n.useRef(),
          u = (0, i.Ue)(c, a);
        if ((0, r.Qn)()) {
          const e = window.__nav_tree_root;
          return n.createElement(
            s.B2,
            { ...m, navTreeRef: u, parentEmbeddedNavTree: e },
            n.createElement(o.q, null, t),
          );
        }
        return n.createElement(n.Fragment, null, t);
      }
    },
    34181: (e, t, a) => {
      "use strict";
      a.d(t, { A: () => E, D: () => b });
      var i = a(34629),
        n = a(90626),
        r = a(75844),
        s = a(61859),
        o = a(22837),
        l = a(10622),
        m = a(52038),
        c = a(56420),
        u = a.n(c);
      let d = class extends n.Component {
        static get hoverClass() {
          return u().hoverParent;
        }
        render() {
          const {
            persona: e,
            animating: t,
            className: a,
            size: i,
            dim: r,
            ...s
          } = this.props;
          let o = "";
          return (
            "medium" == i ? (o = u().Medium) : "large" == i && (o = u().Large),
            n.createElement(
              "div",
              {
                className: (0, m.A)(
                  u().SnoozeContainer,
                  e.online_state,
                  a,
                  t && u().animating,
                  o,
                  r && u().Dim,
                ),
                ...s,
              },
              n.createElement(
                "div",
                { "data-text": "Z", className: (0, m.A)(u().SnoozeZ, u().Z1) },
                "Z",
              ),
              n.createElement(
                "div",
                { "data-text": "Z", className: (0, m.A)(u().SnoozeZ, u().Z2) },
                "Z",
              ),
              n.createElement(
                "div",
                { "data-text": "Z", className: (0, m.A)(u().SnoozeZ, u().Z3) },
                "Z",
              ),
            )
          );
        }
      };
      d = (0, i.Cg)([r.PA], d);
      var h = a(12155),
        A = a(70342),
        _ = a.n(A),
        p = a(97232);
      const C = (0, r.PA)((e) => {
        const { persona: t, className: a, ...i } = e;
        if (!t) return null;
        if (!t.is_online) return null;
        const r = t.HasStateFlag(512),
          o = t.HasStateFlag(2048),
          c = t.IsOnSteamDeck() && !o,
          u = !c && !o && t.HasStateFlag(1024);
        return n.createElement(
          n.Fragment,
          null,
          r &&
            n.createElement(
              "div",
              {
                className: (0, m.A)(
                  a,
                  _().PersonaStatusIcon,
                  _().MobilePhoneIcon,
                  (0, l.rO)(t),
                ),
                title: (0, s.we)("#Platform_Hint_Mobile"),
                ...i,
              },
              n.createElement(p.rf, null),
            ),
          o &&
            n.createElement(
              "div",
              {
                className: (0, m.A)(
                  a,
                  _().PersonaStatusIcon,
                  _().VRIcon,
                  (0, l.rO)(t),
                ),
                title: (0, s.we)("#Platform_Hint_VR"),
                ...i,
              },
              n.createElement(h.MUh, null),
            ),
          u &&
            n.createElement(
              "div",
              {
                className: (0, m.A)(
                  a,
                  _().PersonaStatusIcon,
                  _().BigPictureIcon,
                  (0, l.rO)(t),
                ),
                title: (0, s.we)("#Platform_Hint_BigPicture"),
                ...i,
              },
              n.createElement(h.bPr, null),
            ),
          c &&
            n.createElement(
              "div",
              {
                className: (0, m.A)(
                  a,
                  _().PersonaStatusIcon,
                  _().SteamDeckIcon,
                  (0, l.rO)(t),
                ),
                title: (0, s.we)("#Platform_Hint_SteamDeck"),
                ...i,
              },
              n.createElement(h.DQe, null),
            ),
        );
      });
      var g = a(18828),
        S = a.n(g),
        f = a(78327);
      function y(e) {
        return n.createElement(
          n.Fragment,
          null,
          n.createElement(
            "span",
            { className: S().partyBeaconJoin },
            (0, s.we)("#User_WantsToPlay"),
          ),
          " – ",
          e.persona.GetCurrentGameName(),
        );
      }
      let b = class extends n.Component {
        render() {
          const {
            className: e,
            onContextMenu: t,
            persona: a,
            eFriendRelationship: i,
            bIsSelf: r,
            bParenthesizeNicknames: c,
            strNickname: u,
            bCompactView: A,
            bHideGameName: _,
            bHideEnhancedRichPresenceLabel: p,
            bHideSnooze: g,
            bHideStatus: b,
            renderStatus: E,
            renderRichPresence: B,
            bHidePersona: v,
            bDNDSet: I,
            bHasPartyBeacon: N,
            bHasGamePrivacy: Q,
            bNoMask: R,
            ...w
          } = this.props;
          let D = null,
            T = null,
            P = null,
            M = [
              e,
              S().personaNameAndStatusLabel,
              (0, l.rO)(a),
              A && S().compactView,
              R && S().NoMask,
            ];
          N || a.has_public_party_beacon
            ? (T = n.createElement(y, { persona: a }))
            : (0, o.aP)(i)
              ? ((T = (0, s.we)("#PersonaStateBlocked")), M.push(S().blocked))
              : a.is_ingame
                ? ((T =
                    !a.is_in_nonsteam_game || r || (0, o.S$)(i)
                      ? a.GetCurrentGameName()
                      : (0, s.we)("#PersonaStateInNonSteamGame")),
                  r || v
                    ? r &&
                      a.is_awayOrSnooze &&
                      (P = (0, s.we)("#PersonaStateAway"))
                    : (P = a.GetCurrentGameRichPresence()))
                : a.m_broadcastAccountId &&
                  (T = (0, s.we)("#PersonaStateWatchingBroadcast")),
            T || (T = a.GetLocalizedOnlineStatus()),
            E && (T = E());
          let k = !v && !g;
          !1 === g && (k = !0),
            a.is_awayOrSnooze && k && (D = n.createElement(d, { persona: a }));
          let U = null;
          t
            ? (U = n.createElement(
                "div",
                { className: "ContextMenuButton", onClick: t },
                n.createElement(h.GB9, null),
              ))
            : M.push(S().noContextMenu),
            v && M.push(S().hidePersona),
            B && (P = B()),
            (!_ && P) || M.push(S().twoLine);
          const G = !a.is_ingame && !b,
            x = !p && P,
            F = T && (!_ || !x),
            L = (0, o.ID)(f.TS.LAUNCHER_TYPE);
          let H = u && !c,
            O = H ? u : a.m_strPlayerName,
            K = !v && (F || G) && x;
          return n.createElement(
            "div",
            { ...w, className: (0, m.A)(...M), onContextMenu: t },
            n.createElement(
              "div",
              { className: (0, m.A)(S().statusAndName, K && S().threeLines) },
              n.createElement(
                "div",
                { className: S().playerName },
                O || " ",
                c &&
                  u &&
                  n.createElement(
                    "span",
                    { className: S().playerNickname },
                    "(",
                    u,
                    ")",
                  ),
              ),
              I &&
                n.createElement(
                  "div",
                  {
                    className: S().DNDContainer,
                    title: (0, s.we)("#User_ToggleDoNotDisturb"),
                  },
                  n.createElement(h.Aj0, null),
                ),
              H &&
                n.createElement(
                  "span",
                  {
                    className: S().playerNicknameBracket,
                    title: (0, s.we)("#isNickname"),
                  },
                  " *",
                ),
              n.createElement(C, { persona: a }),
              D,
              (a.m_bPlayerNamePending || a.m_bAvatarPending) &&
                L &&
                n.createElement(
                  "div",
                  {
                    className: S().PendingPersona,
                    title: (0, s.we)("#SteamChina_PendingPersonaName"),
                  },
                  n.createElement(h.zD7, null),
                ),
              U,
            ),
            !v &&
              n.createElement(
                "div",
                { className: S().richPresenceContainer },
                (F || G) &&
                  n.createElement(
                    "div",
                    {
                      className: (0, m.A)(
                        S().gameName,
                        K && S().threeLines,
                        S().richPresenceLabel,
                        "no-drag",
                      ),
                    },
                    Q &&
                      n.createElement(
                        "div",
                        {
                          className: S().gameIsPrivateIcon,
                          title: (0, s.we)("#User_GameInfoHidden"),
                        },
                        n.createElement(h.jZl, null),
                      ),
                    T,
                  ),
                x &&
                  n.createElement(
                    "div",
                    { className: (0, m.A)(S().richPresenceLabel, "no-drag") },
                    P,
                    " ",
                  ),
              ),
          );
        }
      };
      b = (0, i.Cg)([r.PA], b);
      const E = (0, r.PA)((e) => {
        const {
          persona: t,
          bParenthesizeNicknames: a,
          strNickname: i,
          bIgnorePersonaStatus: r,
          bDisableColoring: s,
          className: o,
          ...c
        } = e;
        let u = i && !a ? i : t.m_strPlayerName;
        return n.createElement(
          "span",
          {
            ...c,
            className: (0, m.A)(
              o,
              s && S().DisableColoring,
              !r && (0, l.rO)(t),
            ),
          },
          n.createElement(
            "span",
            { className: S().playerName },
            u || " ",
            a &&
              i &&
              n.createElement(
                "span",
                { className: S().playerNickname },
                "(",
                i,
                ")",
              ),
          ),
        );
      });
    },
    1035: (e, t, a) => {
      "use strict";
      a.d(t, { Ul: () => _, xz: () => g, $Y: () => C, i8: () => p });
      var i = a(34629),
        n = a(90626),
        r = a(75844),
        s = a(10622),
        o = a(52038),
        l = a(78327),
        m = a(3088);
      const c =
          "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD//gA7Q1JFQVRPUjogZ2QtanBlZyB2MS4wICh1c2luZyBJSkcgSlBFRyB2NjIpLCBxdWFsaXR5ID0gODAK/9sAQwAGBAUGBQQGBgUGBwcGCAoQCgoJCQoUDg8MEBcUGBgXFBYWGh0lHxobIxwWFiAsICMmJykqKRkfLTAtKDAlKCko/9sAQwEHBwcKCAoTCgoTKBoWGigoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgo/8AAEQgAQABAAwEiAAIRAQMRAf/EAB8AAAEFAQEBAQEBAAAAAAAAAAABAgMEBQYHCAkKC//EALUQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+v/EAB8BAAMBAQEBAQEBAQEAAAAAAAABAgMEBQYHCAkKC//EALURAAIBAgQEAwQHBQQEAAECdwABAgMRBAUhMQYSQVEHYXETIjKBCBRCkaGxwQkjM1LwFWJy0QoWJDThJfEXGBkaJicoKSo1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoKDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uLj5OXm5+jp6vLz9PX29/j5+v/aAAwDAQACEQMRAD8A8Inmk8+T94/3j/EfWmedJ/z0f/vo0T/6+T/eP86ZQA/zpP8Ano//AH0aPOk/56P/AN9GmVo6Loeq65M0Wj6ddXrr94QRF9v1I6fjQBR86T/no/8A30aPOk/56P8A99GtHW/Dus6GV/tjS7yyD8K00RVW+h6GsugB/nSf89H/AO+jT4JpPPj/AHj/AHh/EfWoafB/r4/94fzoAJ/9fJ/vH+dMp8/+vk/3j/OmUAXdE099W1mw06Jgsl3PHApPYswUH9a+qPF3iHSPhF4S0+003TxK0hMcEAbZvIA3SO2OvIz6k18nW88ttcRz28jxTRMHSRGKsrA5BBHQg1b1TWdT1fy/7V1G8vfLzs+0TNJtz1xknHQUAfUXw+8c6Z8UdN1HS9V0xIpUTM1s7eYkiE43KcAgg/lxg180+NtEHhzxZqmkqxdLWcojHqUPK598EV9CfBbwpF4G8J3fiLxA4trm5hEsnmceRCOQD/tHqR9B1r568a63/wAJH4r1TVghRLqYuinqE6KD74AoAxafB/r4/wDeH86ZT4P9fH/vD+dABP8A6+T/AHj/ADplPn/18n+8f50ygArt/gtpltq/xK0e2vYxJArPMUYZDFEZhn2yBXEV0/w203VNX8YWdloOoHTtQkWQx3IZl2gISeV55AI/GgD1H9pvxPdi/s/DcDGOz8pbqfHWRizBQfYbc/U+1eD12PxW0fWtE8Tpa+I9UOqXpt0cTl2bCEthctz1B/OuOoAKfB/r4/8AeH86ZT4P9fH/ALw/nQAT/wCvk/3j/OmVNPDJ58n7t/vH+E+tM8mT/nm//fJoAZV7Q9Xv9C1KLUNJuGtryMEJIoBIyCD1BHQmqnkyf883/wC+TR5Mn/PN/wDvk0AaHiHXtT8RX4vdau2u7oIIxIygHaCSBwB6msyn+TJ/zzf/AL5NHkyf883/AO+TQAynwf6+P/eH86PJk/55v/3yafBDJ58f7t/vD+E+tAH/2Q==",
        u =
          a.p +
          "images/applications/store/avatar_default_full.jpg?v=valveisgoodatcaching";
      var d = a(43047),
        h = a.n(d),
        A = a(81393);
      const _ = n.memo(function (e) {
        const {
            strAvatarURL: t,
            size: a = "Medium",
            className: i,
            statusStyle: r,
            statusPosition: s,
            children: l,
            ...d
          } = e,
          _ = n.useMemo(() => {
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
                      return u;
                    default:
                      return (0, A.z)(e, `Unhandled size ${e}`), c;
                  }
                })(a),
              ),
              e
            );
          }, [t, a]);
        return n.createElement(
          "div",
          {
            className: (0, o.A)(
              h().avatarHolder,
              "avatarHolder",
              "no-drag",
              a,
              i,
            ),
            ...d,
          },
          n.createElement("div", {
            className: (0, o.A)(h().avatarStatus, "avatarStatus", s),
            style: r,
          }),
          n.createElement(m.c, {
            className: (0, o.A)(h().avatar, "avatar"),
            rgSources: _,
            draggable: !1,
          }),
          l,
        );
      });
      let p = class extends n.Component {
        render() {
          const {
            persona: e,
            size: t = "Medium",
            animatedAvatar: a,
            className: i,
            ...r
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
            n.createElement(_, {
              strAvatarURL: m,
              size: t,
              className: (0, o.A)((0, s.rO)(e), i),
              ...r,
            })
          );
        }
      };
      p = (0, i.Cg)([r.PA], p);
      const C = (0, r.PA)((e) => {
        const { profileItem: t, className: a, bDisableAnimation: i, ...r } = e;
        if (!t || !t.image_small || 0 == t.image_small.length) return null;
        let s = i ? t.image_large : t.image_small;
        return (
          s || (s = t.image_small),
          s.startsWith("https://") ||
            (s = l.TS.MEDIA_CDN_COMMUNITY_URL + "images/" + s),
          n.createElement(
            "div",
            { className: (0, o.A)(h().avatarFrame, a, "avatarFrame"), ...r },
            n.createElement("img", { className: h().avatarFrameImg, src: s }),
          )
        );
      });
      let g = class extends n.Component {
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
            children: i,
            style: r,
            bLimitProfileFrameAnimationTime: s,
            bParentHovered: o,
            ...l
          } = this.props;
          return (
            l.onClick && (r = { ...r, cursor: "pointer" }),
            this.state.bAnimate || (t = null),
            n.createElement(
              "div",
              {
                onMouseEnter: () =>
                  this.setState({
                    bAnimate: "None" != this.props.loopDuration,
                  }),
                onMouseLeave: () => this.SetupAnimationTimer(),
              },
              n.createElement(
                p,
                { animatedAvatar: t, ...l },
                i,
                n.createElement(C, {
                  profileItem: a,
                  bDisableAnimation: s && !this.state.bAnimate,
                }),
              ),
            )
          );
        }
      };
      g = (0, i.Cg)([r.PA], g);
    },
    93973: (e, t, a) => {
      "use strict";
      a.d(t, {
        CC: () => S,
        Oz: () => g,
        Qt: () => b,
        lu: () => f,
        ns: () => y,
        os: () => E,
      });
      var i = a(34629),
        n = a(56545),
        r = a(72034),
        s = a(17645),
        o = a(44332),
        l = a(78327),
        m = a(90626),
        c = a(68797),
        u = a(6144),
        d = a(73745),
        h = a(14947),
        A = a(58222),
        _ = a(23809),
        p = a(20194);
      class C {
        m_claimState = { bCanClaimNewItem: !1, bAlreadyClaimedCurrentItem: !1 };
        m_claimedFreeItemDef;
        m_rtNextClaimTime;
        m_claimTimer;
        m_SteamInterface = null;
        m_canClaimPromise = null;
        m_claimPromise = null;
        m_claimStateChangeCallback = new u.lu();
        m_testNextClaimFakeResponse = null;
        m_bInTestMode = !1;
        GetClaimItemState() {
          return this.m_claimState;
        }
        GetClaimStateChangeCallback() {
          return this.m_claimStateChangeCallback;
        }
        GetClaimedSaleRewardItemDef() {
          return this.m_claimedFreeItemDef;
        }
        GetNextClaimTime() {
          if (!this.m_rtNextClaimTime) return null;
          return new Date(1e3 * this.m_rtNextClaimTime);
        }
        TEST_OverrideClaimState(e) {
          (this.m_bInTestMode = !0),
            (this.m_canClaimPromise = null),
            (this.m_claimPromise = null),
            e.bCanClaimNewItem
              ? (this.m_testNextClaimFakeResponse = {
                  bAlreadyClaimedCurrentItem: !0,
                  bCanClaimNewItem: !1,
                  rtNextClaimTime: Math.floor(Date.now() / 1e3) + 3600,
                  appid: 2243810,
                  community_item_type: 2,
                  community_item_class: 11,
                })
              : (this.m_testNextClaimFakeResponse = null),
            (this.m_claimState = e),
            this.GetClaimStateChangeCallback().Dispatch(this.m_claimState);
        }
        async ActivateProfileModifier(e) {
          const t = n.w.Init(A.fp);
          t.Body().set_communityitemid(e.communityitemid),
            t.Body().set_appid(e.appid),
            t.Body().set_activate(!0);
          const a = await A.uy.ActivateProfileModifierItem(
            this.m_SteamInterface.GetServiceTransport(),
            t,
          );
          return (
            1 != a.GetEResult() &&
              console.error(
                `Error when calling QuestService.ActivateProfileModifierItem: EResult=${a.GetEResult()}`,
              ),
            a.GetEResult()
          );
        }
        async LoadCanUserClaimItem() {
          return this.m_bInTestMode
            ? this.m_claimState
            : (this.m_canClaimPromise ||
                (this.m_canClaimPromise = this.InternalLoadCanUserClaimItem()),
              this.m_canClaimPromise);
        }
        async InternalLoadCanUserClaimItem() {
          (0, o.w)(
            l.iA.logged_in,
            "User must be logged to use CSaleItemClaimableRewardsStore",
          );
          const e = n.w.Init(s.c3);
          e.Body().set_language(l.TS.LANGUAGE);
          let t = null;
          try {
            const a = await s.Qm.CanClaimItem(
              this.m_SteamInterface.GetServiceTransport(),
              e,
            );
            if (1 == a.GetEResult())
              return (
                (this.m_claimedFreeItemDef = Boolean(
                  a.Body().reward_item()?.defid(),
                )
                  ? a.Body().reward_item().toObject()
                  : null),
                (this.m_claimState = {
                  bCanClaimNewItem: a.Body().can_claim(),
                  bAlreadyClaimedCurrentItem: Boolean(
                    this.m_claimedFreeItemDef,
                  ),
                  appid: this.m_claimedFreeItemDef?.appid,
                  community_item_type:
                    this.m_claimedFreeItemDef?.community_item_type,
                  community_item_class:
                    this.m_claimedFreeItemDef?.community_item_class,
                  rtNextClaimTime:
                    a.Body().next_claim_time() > 0
                      ? a.Body().next_claim_time()
                      : void 0,
                }),
                (this.m_rtNextClaimTime = a.Body().next_claim_time()),
                this.SetClaimTimer(),
                this.GetClaimStateChangeCallback().Dispatch(this.m_claimState),
                this.m_claimState
              );
            t = (0, c.H)(a);
          } catch (e) {
            t = (0, c.H)(e);
          }
          return (
            console.error(
              "CSaleItemClaimableRewardsStore.InternalLoadCanUserClaimItem failed: error: " +
                t?.strErrorMsg,
              t,
            ),
            { bCanClaimNewItem: !1, bAlreadyClaimedCurrentItem: !1 }
          );
        }
        async UserClaimItem() {
          return (
            this.m_testNextClaimFakeResponse &&
              (console.log(
                "CSaleItemClaimableRewardsStore - testing, pretending claim action succeeded",
                (0, h.HO)(this.m_testNextClaimFakeResponse),
              ),
              (this.m_claimState = this.m_testNextClaimFakeResponse),
              this.GetClaimStateChangeCallback().Dispatch(this.m_claimState),
              (this.m_rtNextClaimTime = this.m_claimState.rtNextClaimTime),
              this.SetClaimTimer(),
              (this.m_testNextClaimFakeResponse = null)),
            this.m_bInTestMode
              ? this.m_claimState
              : (this.m_claimPromise ||
                  (this.m_claimPromise = this.InternalUserClaimItem()),
                this.m_claimPromise)
          );
        }
        async InternalUserClaimItem() {
          (0, o.w)(
            l.iA.logged_in,
            "User must be logged to use CSaleItemClaimableRewardsStore",
          ),
            (0, o.w)(
              this.m_claimState.bCanClaimNewItem,
              "Only should be called when we previously verified you can claim something. ",
            );
          const e = n.w.Init(s.wt);
          e.Body().set_language(l.TS.LANGUAGE);
          let t = null;
          try {
            const a = await s.Qm.ClaimItem(
              this.m_SteamInterface.GetServiceTransport(),
              e,
            );
            if (1 == a.GetEResult())
              return (
                (this.m_claimedFreeItemDef = a.Body().reward_item().toObject()),
                (this.m_claimState = {
                  bCanClaimNewItem: !1,
                  bAlreadyClaimedCurrentItem: Boolean(
                    this.m_claimedFreeItemDef,
                  ),
                  appid: this.m_claimedFreeItemDef.appid,
                  community_item_type:
                    this.m_claimedFreeItemDef.community_item_type,
                  community_item_class:
                    this.m_claimedFreeItemDef.community_item_class,
                  rtNextClaimTime:
                    a.Body().next_claim_time() > 0
                      ? a.Body().next_claim_time()
                      : void 0,
                }),
                this.GetClaimStateChangeCallback().Dispatch(this.m_claimState),
                (this.m_rtNextClaimTime = a.Body().next_claim_time()),
                this.SetClaimTimer(),
                this.m_claimState
              );
            if (29 == a.GetEResult())
              return (
                (this.m_canClaimPromise = this.InternalLoadCanUserClaimItem()),
                this.m_canClaimPromise
              );
            t = (0, c.H)(a);
          } catch (e) {
            t = (0, c.H)(e);
          }
          return (
            console.error(
              "CSaleItemClaimableRewardsStore.InternalUserClaimItem failed: error: " +
                t?.strErrorMsg,
              t,
            ),
            { bCanClaimNewItem: !1, bAlreadyClaimedCurrentItem: !1 }
          );
        }
        SetClaimTimer() {
          if (this.m_claimTimer) return;
          if (!this.m_rtNextClaimTime) return;
          const e = Date.now();
          let t = new Date(1e3 * this.m_rtNextClaimTime);
          const a = Math.max(0, Math.min(1, t.getTime() - e));
          this.m_claimTimer = window.setTimeout(
            () => {
              (this.m_claimTimer = void 0),
                Date.now() > t.getTime()
                  ? ((this.m_canClaimPromise = null),
                    (this.m_claimPromise = null),
                    (this.m_claimedFreeItemDef = null),
                    (this.m_claimState = {
                      bCanClaimNewItem: !0,
                      bAlreadyClaimedCurrentItem: !1,
                      rtNextClaimTime: void 0,
                    }),
                    this.GetClaimStateChangeCallback().Dispatch(
                      this.m_claimState,
                    ))
                  : this.SetClaimTimer();
            },
            a > 3e5 ? a / 2 : a,
          );
        }
        static s_Singleton;
        static Get() {
          return (
            C.s_Singleton ||
              ((C.s_Singleton = new C()),
              C.s_Singleton.Init(),
              "dev" == l.TS.WEB_UNIVERSE &&
                (window.g_SaleItemClaimableRewardsStore = C.s_Singleton)),
            C.s_Singleton
          );
        }
        constructor() {}
        Init() {
          const e = (0, l.Tc)("loyalty_webapi_token", "application_config");
          (0, o.w)(
            e,
            "CQuestCommunityInventoryStore: missing loyalty_webapi_token oauth permission",
          ),
            (this.m_SteamInterface = new r.D(l.TS.WEBAPI_BASE_URL, e));
        }
      }
      function g() {
        const [e, t] = (0, m.useState)(C.Get().GetClaimItemState()),
          [a, i] = (0, m.useState)(!0);
        return (
          (0, m.useEffect)(() => {
            C.Get()
              .LoadCanUserClaimItem()
              .then(t)
              .finally(() => i(!1));
          }, []),
          (0, d.hL)(C.Get().GetClaimStateChangeCallback(), t),
          { ...e, bLoading: a }
        );
      }
      function S() {
        return { fnClaimItem: C.Get().UserClaimItem };
      }
      function f() {
        return { fnSetClaimState: C.Get().TEST_OverrideClaimState };
      }
      async function y(e) {
        return C.Get().ActivateProfileModifier(e);
      }
      function b(e, t, a) {
        const i = (0, _.KV)();
        return (0, p.I)({
          queryKey: [`SaleRewardsGetDefinition_${e}_${t}_${a}`],
          queryFn: async () =>
            (async function (e, t, a, i) {
              const r = n.w.Init(s.R4);
              return (
                r.Body().set_sale_def_type(t),
                r.Body().set_language(a),
                r.Body().set_include_community_item_def(i),
                (await s.Qm.GetCurrentDefinition(e, r)).Body().toObject()
              );
            })(i, e, t, a),
          staleTime: 1 / 0,
        });
      }
      function E(e, t, a, i) {
        const r = (0, _.KV)();
        return (0, p.I)({
          queryKey: [`GetClaimedSaleRewards_${e}_${t}_${a}_${i}`],
          queryFn: async () =>
            (async function (e, t, a, i) {
              const r = n.w.Init(s.Ju);
              return (
                r.Body().set_sale_def_type(t),
                r.Body().set_language(a),
                r.Body().set_include_community_item_def(i),
                (await s.Qm.GetClaimedSaleRewards(e, r)).Body().toObject()
              );
            })(r, e, t, a),
          staleTime: 1 / 0,
        });
      }
      (0, i.Cg)([d.oI], C.prototype, "TEST_OverrideClaimState", null),
        (0, i.Cg)([d.oI], C.prototype, "UserClaimItem", null);
    },
    3734: (e, t, a) => {
      "use strict";
      a.d(t, { E2: () => h, PG: () => _ });
      var i = a(90626),
        n = a(20194),
        r = a(56545),
        s = a(94601),
        o = a(72839),
        l = a(82097),
        m = a(44332),
        c = a(23809);
      const u = i.createContext({}),
        d = () => i.useContext(u);
      function h(e) {
        let { defaultOptions: t, children: a } = e,
          n = i.useMemo(() => ({ defaultOptions: t || {} }), [t]);
        return i.createElement(u.Provider, { value: n }, a);
      }
      const A = "StoreQueryStore";
      function _(e, t, a, l) {
        let u = d();
        const h = (0, c.KV)();
        u || (0, m.w)(!1, "useStoreQuery called outside of a <StoreQueryRoot>");
        let _ = u.defaultOptions;
        const C = i.useMemo(() => {
          let e = [];
          return (
            l?.content_descriptors_excluded
              ? (e = l.content_descriptors_excluded)
              : _?.content_descriptors_excluded &&
                (e = _.content_descriptors_excluded),
            { ...t, filters: { content_descriptors_excluded: e, ...t.filters } }
          );
        }, [t, l, _]);
        let g;
        void 0 !== l?.override_country_code
          ? (g = l.override_country_code)
          : void 0 !== _?.override_country_code &&
            (g = _.override_country_code);
        let S = { staleTime: 36e5 };
        l?.reactQuery && (S = { ...S, ...l.reactQuery });
        const f = [A, C, a, l];
        return (0, n.I)({
          queryKey: f,
          queryFn: () =>
            (async function (e, t, a, i, n) {
              const l = r.w.Init(s.iU);
              (0, o.rV)(l), i && (0, o.Bn)(l, i);
              n && l.Body().set_override_country_code(n);
              l.Body().set_query(s.nu.fromObject(a)),
                l.Body().set_query_name(t);
              const m = await s.Fs.Query(e, l);
              if (1 != m.GetEResult())
                throw `Error executing StoreQuery "${t}", EResult: ${m.GetEResult()}`;
              return new p(m, i);
            })(h, e, C, a, g),
          ...S,
        });
      }
      class p {
        m_Items;
        m_rgItemIDs;
        m_metadata;
        constructor(e, t) {
          this.ReadResults(e, t);
        }
        GetItems() {
          return this.m_Items;
        }
        GetItemIDs() {
          return this.m_rgItemIDs;
        }
        GetMetadata() {
          return this.m_metadata;
        }
        ReadResults(e, t) {
          this.m_Items ||
            ((0, m.w)(
              0 == e.Body().metadata().start(),
              "Empty item list - expected to start at 0",
            ),
            (this.m_Items = []));
          const a = e.Body().ids() || [];
          if (
            ((this.m_rgItemIDs = a.map((e) => e.toObject())),
            e.Body().store_items())
          )
            for (const a of e.Body().store_items())
              this.m_Items.push(l.A.Get().ReadItem(a, t));
          this.m_metadata = e.Body().metadata().toObject();
        }
      }
    },
    69409: (e, t, a) => {
      "use strict";
      a.d(t, { m: () => d });
      var i = a(90626),
        n = a(22837),
        r = a(38390),
        s = a(27666),
        o = a(52038),
        l = a(61859),
        m = a(61336),
        c = a(78327),
        u = a(15392);
      function d(e) {
        const { gidEvent: t } = e,
          a = (0, r.RR)(t),
          [d, h] = (0, i.useMemo)(() => {
            if (
              a?.jsondata?.localized_sale_product_banner?.length > 0 &&
              a?.jsondata?.localized_sale_product_mobile_banner?.length > 0
            ) {
              const e = (0, n.sf)(c.TS.LANGUAGE),
                t = l.NT.GetWithFallback(
                  a.jsondata.localized_sale_product_banner,
                  e,
                ),
                i = l.NT.GetWithFallback(
                  a.jsondata.localized_sale_product_mobile_banner,
                  e,
                );
              if (t?.length > 0 && i?.length > 0) {
                const e = a.clanSteamID.GetAccountID();
                return [`${(0, s.mJ)()}${e}/${t}`, `${(0, s.mJ)()}${e}/${i}`];
              }
            }
            return [null, null];
          }, [a]);
        return d?.length > 0 && h?.length > 0
          ? i.createElement(
              "a",
              { href: (0, m.k2)(a.GetSaleURL()), className: u.Link },
              i.createElement("img", {
                src: d,
                className: (0, o.A)(u.Banner, u.Big),
              }),
              i.createElement("img", {
                src: h,
                className: (0, o.A)(u.Banner, u.Mobile),
              }),
            )
          : null;
      }
    },
    96236: (e, t, a) => {
      "use strict";
      a.d(t, { K: () => o });
      var i = a(34629),
        n = a(90626),
        r = a(73745),
        s = a(60383);
      class o extends n.Component {
        state = {
          bRenderChildren: !1,
          nPrevRenderWidth: 0,
          nPrevRenderHeight: 0,
        };
        m_refContainer = n.createRef();
        BLoadAndUnload() {
          return "LoadAndUnload" == (this.props.mode || "JustLoad");
        }
        OnVisibilityChange(e) {
          let t = this.state.bRenderChildren;
          if (t == e) return;
          if (t && !this.BLoadAndUnload()) return;
          let a = 0,
            i = 0;
          if (this.m_refContainer.current) {
            const e = this.m_refContainer.current.GetBoundingClientRect();
            e && ((a = e.width), (i = e.height));
          }
          this.setState({
            bRenderChildren: e,
            nPrevRenderWidth: a,
            nPrevRenderHeight: i,
          }),
            e && this.props.onRender && this.props.onRender();
        }
        render() {
          const {
              placeholderWidth: e,
              placeholderHeight: t,
              onRender: a,
              style: i,
              mode: r,
              ...o
            } = this.props,
            l = this.state.bRenderChildren;
          let m = i;
          if (!l) {
            const a = this.state.nPrevRenderWidth || e,
              n = this.state.nPrevRenderHeight || t;
            (void 0 === n && void 0 === a) ||
              (m = { ...i, minHeight: n, minWidth: a });
          }
          const c = this.BLoadAndUnload() ? "repeated" : "once";
          return n.createElement(
            s.J,
            {
              ref: this.m_refContainer,
              style: m,
              ...o,
              onVisibilityChange: this.OnVisibilityChange,
              trigger: c,
            },
            l && this.props.children,
          );
        }
      }
      (0, i.Cg)([r.oI], o.prototype, "OnVisibilityChange", null);
    },
    47554: (e, t, a) => {
      "use strict";
      a.r(t), a.d(t, { default: () => C });
      var i = a(90626),
        n = a(12447),
        r = a(76217),
        s = a(91336),
        o = a(39199),
        l = a(55263),
        m = a(95034),
        c = a(12155),
        u = a(5907),
        d = a(26749),
        h = a(61859),
        A = a(71109),
        _ = a.n(A),
        p = a(78327);
      function C(e) {
        const { appID: t } = e,
          a = (0, d.G)(),
          [A] = (0, m.QD)("inqueue", "0"),
          [C, g] = (0, i.useState)(!1),
          [S, f] = (0, i.useState)(!1),
          [y] = (0, l.t7)(t, { include_assets: !0 }),
          b = (0, s.A)(),
          E = i.useRef(void 0);
        i.useEffect(() => E.current?.Activate(!0), []);
        const B = (0, p.Qn)(),
          { eStoreDiscoveryQueueType: v, storePageFilter: I } =
            i.useMemo(() => {
              if (A?.length > 0) {
                const e = A.split("_"),
                  t = Number(e[0]);
                let a;
                return (
                  e.length > 1 && (a = (0, o.bz)(e[1])),
                  { eStoreDiscoveryQueueType: t, storePageFilter: a }
                );
              }
              return { eStoreDiscoveryQueueType: 0, storePageFilter: void 0 };
            }, [A]),
          N = i.useCallback(() => {
            f(!0);
          }, []),
          Q = i.useCallback(() => {
            g(!0);
          }, []),
          R = (0, o.WX)(v, I);
        return a && y
          ? S
            ? null
            : i.createElement(
                n.u,
                {
                  NavigationManager: b,
                  navTreeRef: E,
                  navID: "DiscoveryQueueAppWidget",
                },
                i.createElement(
                  r.Z,
                  {
                    focusable: !0,
                    className: _().DiscoveryQueueWidgetCtn,
                    onSecondaryButton: N,
                    onOKButton: Q,
                    onOKActionDescription: (0, h.we)(
                      "#DiscoveryQueue_ResumeWizard",
                    ),
                    onSecondaryActionDescription: (0, h.we)("#Button_Close"),
                  },
                  i.createElement(
                    "div",
                    { onClick: Q, className: _().WidgetText },
                    i.createElement(c.mcU, null),
                    (0, h.we)("#DiscoveryQueue_ResumeWizard"),
                    R?.length > 0 && ": " + R,
                  ),
                  !B &&
                    i.createElement(
                      "div",
                      { className: _().CloseButton, onClick: N },
                      i.createElement(c.X, null),
                    ),
                  C &&
                    i.createElement(u.jM, {
                      includeAppID: t,
                      bWizardVisible: C,
                      fnCloseModal: () => g(!1),
                      eStoreDiscoveryQueueType: v,
                      storePageFilter: I,
                    }),
                ),
              )
          : null;
      }
    },
    6804: (e, t, a) => {
      "use strict";
      a.r(t), a.d(t, { default: () => l });
      var i = a(12447),
        n = a(90626),
        r = a(91336),
        s = a(96236),
        o = a(38405);
      function l() {
        const e = (0, r.A)();
        return n.createElement(
          s.K,
          { placeholderHeight: "200px", rootMargin: "0px 0px 100% 0px" },
          n.createElement(
            i.u,
            { navID: "DiscoveryQueueWidget", NavigationManager: e },
            n.createElement(o.g, { eStoreDiscoveryQueueType: 0 }),
          ),
        );
      }
    },
    25054: (e, t, a) => {
      "use strict";
      a.r(t), a.d(t, { default: () => u });
      var i = a(90626),
        n = a(61859),
        r = a(5907),
        s = a(26749),
        o = a(76217),
        l = a(78327),
        m = a(51706),
        c = a(738);
      function u(e) {
        const t = (0, s.G)(),
          [a, u] = (0, i.useState)(!1),
          d = i.useCallback(() => {
            l.iA.logged_in
              ? u(!0)
              : (0, c.pg)(
                  i.createElement(m.KG, {
                    onOK: () => {
                      window.location.href = `${l.TS.STORE_BASE_URL}login?redir=${encodeURIComponent(document.location.href)}`;
                    },
                    strOKButtonText: (0, n.we)(
                      "#DiscoveryQueue_Error_Login_Title",
                    ),
                    strDescription: (0, n.we)("#DiscoveryQueue_Error_Login"),
                    strTitle: (0, n.we)("#DiscoveryQueue_Error_Login_Title"),
                  }),
                  window,
                );
          }, []);
        return t
          ? i.createElement(
              o.Z,
              null,
              i.createElement(
                "a",
                { onClick: d, className: "experiment-button" },
                (0, n.we)("#DiscoveryQueue_OpenWizard"),
              ),
              a &&
                i.createElement(r.jM, {
                  bWizardVisible: a,
                  fnCloseModal: () => u(!1),
                  eStoreDiscoveryQueueType: 0,
                }),
            )
          : i.createElement(
              "div",
              { className: "experiment-button-placeholder" },
              " ",
            );
      }
    },
    54806: (e, t, a) => {
      "use strict";
      a.d(t, { E: () => p });
      var i = a(90626),
        n = a(86709),
        r = a(45747),
        s = a(74500),
        o = a(57168);
      function l(e, t) {
        return e.filter((e) => !t.includes(e));
      }
      var m = class extends s.Q {
          #e;
          #t;
          #a;
          #i;
          #n;
          #r;
          #s;
          #o;
          constructor(e, t, a) {
            super(),
              (this.#e = e),
              (this.#i = a),
              (this.#a = []),
              (this.#n = []),
              (this.#t = []),
              this.setQueries(t);
          }
          onSubscribe() {
            1 === this.listeners.size &&
              this.#n.forEach((e) => {
                e.subscribe((t) => {
                  this.#l(e, t);
                });
              });
          }
          onUnsubscribe() {
            this.listeners.size || this.destroy();
          }
          destroy() {
            (this.listeners = new Set()),
              this.#n.forEach((e) => {
                e.destroy();
              });
          }
          setQueries(e, t, a) {
            (this.#a = e),
              (this.#i = t),
              n.j.batch(() => {
                const e = this.#n,
                  t = this.#m(this.#a);
                t.forEach((e) =>
                  e.observer.setOptions(e.defaultedQueryOptions, a),
                );
                const i = t.map((e) => e.observer),
                  n = i.map((e) => e.getCurrentResult()),
                  r = i.some((t, a) => t !== e[a]);
                (e.length !== i.length || r) &&
                  ((this.#n = i),
                  (this.#t = n),
                  this.hasListeners() &&
                    (l(e, i).forEach((e) => {
                      e.destroy();
                    }),
                    l(i, e).forEach((e) => {
                      e.subscribe((t) => {
                        this.#l(e, t);
                      });
                    }),
                    this.#c()));
              });
          }
          getCurrentResult() {
            return this.#t;
          }
          getQueries() {
            return this.#n.map((e) => e.getCurrentQuery());
          }
          getObservers() {
            return this.#n;
          }
          getOptimisticResult(e, t) {
            const a = this.#m(e).map((e) =>
              e.observer.getOptimisticResult(e.defaultedQueryOptions),
            );
            return [a, (e) => this.#u(e ?? a, t), () => this.#d(a, e)];
          }
          #d(e, t) {
            const a = this.#m(t);
            return a.map((t, i) => {
              const n = e[i];
              return t.defaultedQueryOptions.notifyOnChangeProps
                ? n
                : t.observer.trackResult(n, (e) => {
                    a.forEach((t) => {
                      t.observer.trackProp(e);
                    });
                  });
            });
          }
          #u(e, t) {
            return t
              ? ((this.#r && this.#t === this.#o && t === this.#s) ||
                  ((this.#s = t),
                  (this.#o = this.#t),
                  (this.#r = (0, o.BH)(this.#r, t(e)))),
                this.#r)
              : e;
          }
          #m(e) {
            const t = new Map(this.#n.map((e) => [e.options.queryHash, e])),
              a = [];
            return (
              e.forEach((e) => {
                const i = this.#e.defaultQueryOptions(e),
                  n = t.get(i.queryHash);
                if (n) a.push({ defaultedQueryOptions: i, observer: n });
                else {
                  const e = this.#n.find(
                    (e) => e.options.queryHash === i.queryHash,
                  );
                  a.push({
                    defaultedQueryOptions: i,
                    observer: e ?? new r.$(this.#e, i),
                  });
                }
              }),
              a.sort(
                (t, a) =>
                  e.findIndex(
                    (e) => e.queryHash === t.defaultedQueryOptions.queryHash,
                  ) -
                  e.findIndex(
                    (e) => e.queryHash === a.defaultedQueryOptions.queryHash,
                  ),
              )
            );
          }
          #l(e, t) {
            const a = this.#n.indexOf(e);
            -1 !== a &&
              ((this.#t = (function (e, t, a) {
                const i = e.slice(0);
                return (i[t] = a), i;
              })(this.#t, a, t)),
              this.#c());
          }
          #c() {
            if (this.hasListeners()) {
              this.#r !==
                this.#u(this.#d(this.#t, this.#a), this.#i?.combine) &&
                n.j.batch(() => {
                  this.listeners.forEach((e) => {
                    e(this.#t);
                  });
                });
            }
          }
        },
        c = a(75233),
        u = a(22730),
        d = a(43424),
        h = a(19086),
        A = a(44407),
        _ = a(19866);
      function p({ queries: e, ...t }, a) {
        const s = (0, c.jE)(a),
          o = (0, u.w)(),
          l = (0, d.h)(),
          p = i.useMemo(
            () =>
              e.map((e) => {
                const t = s.defaultQueryOptions(e);
                return (
                  (t._optimisticResults = o ? "isRestoring" : "optimistic"), t
                );
              }),
            [e, s, o],
          );
        p.forEach((e) => {
          (0, A.jv)(e), (0, h.LJ)(e, l);
        }),
          (0, h.wZ)(l);
        const [C] = i.useState(() => new m(s, p, t)),
          [g, S, f] = C.getOptimisticResult(p, t.combine);
        i.useSyncExternalStore(
          i.useCallback(
            (e) => (o ? _.l : C.subscribe(n.j.batchCalls(e))),
            [C, o],
          ),
          () => C.getCurrentResult(),
          () => C.getCurrentResult(),
        ),
          i.useEffect(() => {
            C.setQueries(p, t, { listeners: !1 });
          }, [p, t, C]);
        const y = g.some((e, t) => (0, A.EU)(p[t], e))
          ? g.flatMap((e, t) => {
              const a = p[t];
              if (a) {
                const t = new r.$(s, a);
                if ((0, A.EU)(a, e)) return (0, A.iL)(a, t, l);
                (0, A.nE)(e, o) && (0, A.iL)(a, t, l);
              }
              return [];
            })
          : [];
        if (y.length > 0) throw Promise.all(y);
        const b = g.find((e, t) => {
          const a = p[t];
          return (
            a &&
            (0, h.$1)({
              result: e,
              errorResetBoundary: l,
              throwOnError: a.throwOnError,
              query: s.getQueryCache().get(a.queryHash),
            })
          );
        });
        if (b?.error) throw b.error;
        return S(f());
      }
    },
  },
]);
