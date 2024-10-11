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
      var r = a(8871),
        s = a(90626),
        n = a(78327),
        i = a(85585),
        o = a(7445);
      function l(e) {
        const { children: t, navTreeRef: a, NavigationManager: l, ...c } = e,
          m = s.useRef(),
          u = (0, r.Ue)(m, a);
        if ((0, n.Qn)()) {
          const e = window.__nav_tree_root;
          return s.createElement(
            i.B,
            { ...c, navTreeRef: u, secondary: !0, parentEmbeddedNavTree: e },
            s.createElement(o.q, null, t),
          );
        }
        return s.createElement(s.Fragment, null, t);
      }
    },
    34181: (e, t, a) => {
      "use strict";
      a.d(t, { A: () => Q, D: () => f });
      var r = a(34629),
        s = a(90626),
        n = a(75844),
        i = a(61859),
        o = a(22837),
        l = a(10622),
        c = a(52038),
        m = a(56420),
        u = a.n(m);
      let A = class extends s.Component {
        static get hoverClass() {
          return u().hoverParent;
        }
        render() {
          const {
            persona: e,
            animating: t,
            className: a,
            size: r,
            dim: n,
            ...i
          } = this.props;
          let o = "";
          return (
            "medium" == r ? (o = u().Medium) : "large" == r && (o = u().Large),
            s.createElement(
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
              s.createElement(
                "div",
                { "data-text": "Z", className: (0, c.A)(u().SnoozeZ, u().Z1) },
                "Z",
              ),
              s.createElement(
                "div",
                { "data-text": "Z", className: (0, c.A)(u().SnoozeZ, u().Z2) },
                "Z",
              ),
              s.createElement(
                "div",
                { "data-text": "Z", className: (0, c.A)(u().SnoozeZ, u().Z3) },
                "Z",
              ),
            )
          );
        }
      };
      A = (0, r.Cg)([n.PA], A);
      var p = a(12155),
        h = a(70342),
        g = a.n(h),
        d = a(97232);
      const E = (0, n.PA)((e) => {
        const { persona: t, className: a, ...r } = e;
        if (!t) return null;
        if (!t.is_online) return null;
        const n = t.HasStateFlag(512),
          o = t.HasStateFlag(2048),
          m = t.IsOnSteamDeck(),
          u = !m && !o && t.HasStateFlag(1024);
        return s.createElement(
          s.Fragment,
          null,
          n &&
            s.createElement(
              "div",
              {
                className: (0, c.A)(
                  a,
                  g().PersonaStatusIcon,
                  g().MobilePhoneIcon,
                  (0, l.rO)(t),
                ),
                title: (0, i.we)("#Platform_Hint_Mobile"),
                ...r,
              },
              s.createElement(d.rf, null),
            ),
          o &&
            s.createElement(
              "div",
              {
                className: (0, c.A)(
                  a,
                  g().PersonaStatusIcon,
                  g().VRIcon,
                  (0, l.rO)(t),
                ),
                title: (0, i.we)("#Platform_Hint_VR"),
                ...r,
              },
              s.createElement(p.MUh, null),
            ),
          u &&
            s.createElement(
              "div",
              {
                className: (0, c.A)(
                  a,
                  g().PersonaStatusIcon,
                  g().BigPictureIcon,
                  (0, l.rO)(t),
                ),
                title: (0, i.we)("#Platform_Hint_BigPicture"),
                ...r,
              },
              s.createElement(p.bPr, null),
            ),
          m &&
            s.createElement(
              "div",
              {
                className: (0, c.A)(
                  a,
                  g().PersonaStatusIcon,
                  g().SteamDeckIcon,
                  (0, l.rO)(t),
                ),
                title: (0, i.we)("#Platform_Hint_SteamDeck"),
                ...r,
              },
              s.createElement(p.DQe, null),
            ),
        );
      });
      var B = a(18828),
        S = a.n(B),
        b = a(78327);
      function v(e) {
        return s.createElement(
          s.Fragment,
          null,
          s.createElement(
            "span",
            { className: S().partyBeaconJoin },
            (0, i.we)("#User_WantsToPlay"),
          ),
          " – ",
          e.persona.GetCurrentGameName(),
        );
      }
      let f = class extends s.Component {
        render() {
          const {
            className: e,
            onContextMenu: t,
            persona: a,
            eFriendRelationship: r,
            bIsSelf: n,
            bParenthesizeNicknames: m,
            strNickname: u,
            bCompactView: h,
            bHideGameName: g,
            bHideEnhancedRichPresenceLabel: d,
            bHideSnooze: B,
            bHideStatus: f,
            renderStatus: Q,
            renderRichPresence: C,
            bHidePersona: N,
            bDNDSet: _,
            bHasPartyBeacon: D,
            bHasGamePrivacy: P,
            bNoMask: y,
            ...R
          } = this.props;
          let I = null,
            T = null,
            w = null,
            M = [
              e,
              S().personaNameAndStatusLabel,
              (0, l.rO)(a),
              h && S().compactView,
              y && S().NoMask,
            ];
          D || a.has_public_party_beacon
            ? (T = s.createElement(v, { persona: a }))
            : (0, o.aP)(r)
              ? ((T = (0, i.we)("#PersonaStateBlocked")), M.push(S().blocked))
              : a.is_ingame
                ? ((T =
                    !a.is_in_nonsteam_game || n || (0, o.S$)(r)
                      ? a.GetCurrentGameName()
                      : (0, i.we)("#PersonaStateInNonSteamGame")),
                  n || N
                    ? n &&
                      a.is_awayOrSnooze &&
                      (w = (0, i.we)("#PersonaStateAway"))
                    : (w = a.GetCurrentGameRichPresence()))
                : a.m_broadcastAccountId &&
                  (T = (0, i.we)("#PersonaStateWatchingBroadcast")),
            T || (T = a.GetLocalizedOnlineStatus()),
            Q && (T = Q());
          let k = !N && !B;
          !1 === B && (k = !0),
            a.is_awayOrSnooze && k && (I = s.createElement(A, { persona: a }));
          let U = null;
          t
            ? (U = s.createElement(
                "div",
                { className: "ContextMenuButton", onClick: t },
                s.createElement(p.GB9, null),
              ))
            : M.push(S().noContextMenu),
            N && M.push(S().hidePersona),
            C && (w = C()),
            (!g && w) || M.push(S().twoLine);
          const H = !a.is_ingame && !f,
            L = !d && w,
            O = T && (!g || !L),
            F = (0, o.ID)(b.TS.LAUNCHER_TYPE);
          let K = u && !m,
            W = K ? u : a.m_strPlayerName,
            G = !N && (O || H) && L;
          return s.createElement(
            "div",
            { ...R, className: (0, c.A)(...M), onContextMenu: t },
            s.createElement(
              "div",
              { className: (0, c.A)(S().statusAndName, G && S().threeLines) },
              s.createElement(
                "div",
                { className: S().playerName },
                W || " ",
                m &&
                  u &&
                  s.createElement(
                    "span",
                    { className: S().playerNickname },
                    "(",
                    u,
                    ")",
                  ),
              ),
              _ &&
                s.createElement(
                  "div",
                  {
                    className: S().DNDContainer,
                    title: (0, i.we)("#User_ToggleDoNotDisturb"),
                  },
                  s.createElement(p.Aj0, null),
                ),
              K &&
                s.createElement(
                  "span",
                  {
                    className: S().playerNicknameBracket,
                    title: (0, i.we)("#isNickname"),
                  },
                  " *",
                ),
              s.createElement(E, { persona: a }),
              I,
              (a.m_bPlayerNamePending || a.m_bAvatarPending) &&
                F &&
                s.createElement(
                  "div",
                  {
                    className: S().PendingPersona,
                    title: (0, i.we)("#SteamChina_PendingPersonaName"),
                  },
                  s.createElement(p.zD7, null),
                ),
              U,
            ),
            !N &&
              s.createElement(
                "div",
                { className: S().richPresenceContainer },
                (O || H) &&
                  s.createElement(
                    "div",
                    {
                      className: (0, c.A)(
                        S().gameName,
                        G && S().threeLines,
                        S().richPresenceLabel,
                        "no-drag",
                      ),
                    },
                    P &&
                      s.createElement(
                        "div",
                        {
                          className: S().gameIsPrivateIcon,
                          title: (0, i.we)("#User_GameInfoHidden"),
                        },
                        s.createElement(p.jZl, null),
                      ),
                    T,
                  ),
                L &&
                  s.createElement(
                    "div",
                    { className: (0, c.A)(S().richPresenceLabel, "no-drag") },
                    w,
                    " ",
                  ),
              ),
          );
        }
      };
      f = (0, r.Cg)([n.PA], f);
      const Q = (0, n.PA)((e) => {
        const {
          persona: t,
          bParenthesizeNicknames: a,
          strNickname: r,
          bIgnorePersonaStatus: n,
          bDisableColoring: i,
          className: o,
          ...m
        } = e;
        let u = r && !a ? r : t.m_strPlayerName;
        return s.createElement(
          "span",
          {
            ...m,
            className: (0, c.A)(
              o,
              i && S().DisableColoring,
              !n && (0, l.rO)(t),
            ),
          },
          s.createElement(
            "span",
            { className: S().playerName },
            u || " ",
            a &&
              r &&
              s.createElement(
                "span",
                { className: S().playerNickname },
                "(",
                r,
                ")",
              ),
          ),
        );
      });
    },
    1035: (e, t, a) => {
      "use strict";
      a.d(t, { Ul: () => g, xz: () => B, $Y: () => E, i8: () => d });
      var r = a(34629),
        s = a(90626),
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
      const g = s.memo(function (e) {
        const {
            strAvatarURL: t,
            size: a = "Medium",
            className: r,
            statusStyle: n,
            statusPosition: i,
            children: l,
            ...A
          } = e,
          g = s.useMemo(() => {
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
        return s.createElement(
          "div",
          {
            className: (0, o.A)(
              p().avatarHolder,
              "avatarHolder",
              "no-drag",
              a,
              r,
            ),
            ...A,
          },
          s.createElement("div", {
            className: (0, o.A)(p().avatarStatus, "avatarStatus", i),
            style: n,
          }),
          s.createElement(c.c, {
            className: (0, o.A)(p().avatar, "avatar"),
            rgSources: g,
            draggable: !1,
          }),
          l,
        );
      });
      let d = class extends s.Component {
        render() {
          const {
            persona: e,
            size: t = "Medium",
            animatedAvatar: a,
            className: r,
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
            s.createElement(g, {
              strAvatarURL: c,
              size: t,
              className: (0, o.A)((0, i.rO)(e), r),
              ...n,
            })
          );
        }
      };
      d = (0, r.Cg)([n.PA], d);
      const E = (0, n.PA)((e) => {
        const { profileItem: t, className: a, bDisableAnimation: r, ...n } = e;
        if (!t || !t.image_small || 0 == t.image_small.length) return null;
        let i = r ? t.image_large : t.image_small;
        return (
          i || (i = t.image_small),
          i.startsWith("https://") ||
            (i = l.TS.MEDIA_CDN_COMMUNITY_URL + "images/" + i),
          s.createElement(
            "div",
            { className: (0, o.A)(p().avatarFrame, a, "avatarFrame"), ...n },
            s.createElement("img", { className: p().avatarFrameImg, src: i }),
          )
        );
      });
      let B = class extends s.Component {
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
            children: r,
            style: n,
            bLimitProfileFrameAnimationTime: i,
            bParentHovered: o,
            ...l
          } = this.props;
          return (
            l.onClick && (n = { ...n, cursor: "pointer" }),
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
                d,
                { animatedAvatar: t, ...l },
                r,
                s.createElement(E, {
                  profileItem: a,
                  bDisableAnimation: i && !this.state.bAnimate,
                }),
              ),
            )
          );
        }
      };
      B = (0, r.Cg)([n.PA], B);
    },
    69409: (e, t, a) => {
      "use strict";
      a.d(t, { m: () => A });
      var r = a(90626),
        s = a(22837),
        n = a(38390),
        i = a(27666),
        o = a(52038),
        l = a(61859),
        c = a(61336),
        m = a(78327),
        u = a(15392);
      function A(e) {
        const { gidEvent: t } = e,
          a = (0, n.RR)(t),
          [A, p] = (0, r.useMemo)(() => {
            if (
              a?.jsondata?.localized_sale_product_banner?.length > 0 &&
              a?.jsondata?.localized_sale_product_mobile_banner?.length > 0
            ) {
              const e = (0, s.sf)(m.TS.LANGUAGE),
                t = l.NT.GetWithFallback(
                  a.jsondata.localized_sale_product_banner,
                  e,
                ),
                r = l.NT.GetWithFallback(
                  a.jsondata.localized_sale_product_mobile_banner,
                  e,
                );
              if (t?.length > 0 && r?.length > 0) {
                const e = a.clanSteamID.GetAccountID();
                return [`${(0, i.mJ)()}${e}/${t}`, `${(0, i.mJ)()}${e}/${r}`];
              }
            }
            return [null, null];
          }, [a]);
        return A?.length > 0 && p?.length > 0
          ? r.createElement(
              "a",
              { href: (0, c.k2)(a.GetSaleURL()), className: u.Link },
              r.createElement("img", {
                src: A,
                className: (0, o.A)(u.Banner, u.Big),
              }),
              r.createElement("img", {
                src: p,
                className: (0, o.A)(u.Banner, u.Mobile),
              }),
            )
          : null;
      }
    },
    3088: (e, t, a) => {
      "use strict";
      a.d(t, { c: () => i });
      var r = a(34629),
        s = a(90626),
        n = a(73745);
      class i extends s.Component {
        m_refImage = s.createRef();
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
              ...r
            } = this.props,
            n = this.src;
          return s.createElement("img", {
            ref: this.m_refImage,
            ...r,
            src: n,
            onError: this.OnImageError,
          });
        }
      }
      (0, r.Cg)([n.oI], i.prototype, "OnImageError", null);
    },
    47554: (e, t, a) => {
      "use strict";
      a.r(t), a.d(t, { default: () => E });
      var r = a(90626),
        s = a(12447),
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
          [E, B] = (0, r.useState)(!1),
          [S, b] = (0, r.useState)(!1),
          [v] = (0, l.t7)(t, { include_assets: !0 }),
          f = (0, i.A)(),
          Q = r.useRef();
        r.useEffect(() => Q.current?.Activate(!0), []);
        const C = (0, d.Qn)(),
          { eStoreDiscoveryQueueType: N, storePageFilter: _ } =
            r.useMemo(() => {
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
          D = r.useCallback(() => {
            b(!0);
          }, []),
          P = r.useCallback(() => {
            B(!0);
          }, []),
          y = (0, o.WX)(N, _);
        return a && v
          ? S
            ? null
            : r.createElement(
                s.u,
                {
                  NavigationManager: f,
                  navTreeRef: Q,
                  navID: "DiscoveryQueueAppWidget",
                },
                r.createElement(
                  n.Z,
                  {
                    focusable: !0,
                    className: g().DiscoveryQueueWidgetCtn,
                    onSecondaryButton: D,
                    onOKButton: P,
                    onOKActionDescription: (0, p.we)(
                      "#DiscoveryQueue_ResumeWizard",
                    ),
                    onSecondaryActionDescription: (0, p.we)("#Button_Close"),
                  },
                  r.createElement("img", {
                    className: g().WidgetCapsule,
                    src: v?.GetAssets().GetSmallCapsuleURL(),
                  }),
                  r.createElement(
                    "div",
                    { onClick: P, className: g().WidgetText },
                    (0, p.we)("#DiscoveryQueue_ResumeWizard"),
                    y?.length > 0 && ": " + y,
                  ),
                  !C &&
                    r.createElement(
                      "div",
                      { className: g().CloseButton, onClick: D },
                      r.createElement(m.X, null),
                    ),
                  E &&
                    r.createElement(u.jM, {
                      includeAppID: t,
                      bWizardVisible: E,
                      fnCloseModal: () => B(!1),
                      eStoreDiscoveryQueueType: N,
                      storePageFilter: _,
                    }),
                ),
              )
          : null;
      }
    },
    25054: (e, t, a) => {
      "use strict";
      a.r(t), a.d(t, { default: () => u });
      var r = a(90626),
        s = a(61859),
        n = a(35391),
        i = a(26749),
        o = a(76217),
        l = a(78327),
        c = a(44325),
        m = a(738);
      function u(e) {
        const t = (0, i.G)(),
          [a, u] = (0, r.useState)(!1),
          A = r.useCallback(() => {
            l.iA.logged_in
              ? u(!0)
              : (0, m.pg)(
                  r.createElement(c.KG, {
                    onOK: () => {
                      window.location.href = `${l.TS.STORE_BASE_URL}login?redir=${encodeURIComponent(document.location.href)}`;
                    },
                    strOKButtonText: (0, s.we)(
                      "#DiscoveryQueue_Error_Login_Title",
                    ),
                    strDescription: (0, s.we)("#DiscoveryQueue_Error_Login"),
                    strTitle: (0, s.we)("#DiscoveryQueue_Error_Login_Title"),
                  }),
                  window,
                );
          }, []);
        return t
          ? r.createElement(
              o.Z,
              null,
              r.createElement(
                "a",
                { onClick: A, className: "experiment-button" },
                (0, s.we)("#DiscoveryQueue_OpenWizard"),
              ),
              a &&
                r.createElement(n.jM, {
                  bWizardVisible: a,
                  fnCloseModal: () => u(!1),
                  eStoreDiscoveryQueueType: 0,
                }),
            )
          : r.createElement(
              "div",
              { className: "experiment-button-placeholder" },
              " ",
            );
      }
    },
    54806: (e, t, a) => {
      "use strict";
      a.d(t, { E: () => g });
      var r = a(90626),
        s = a(86709),
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
          #r;
          #s;
          #n;
          #i;
          constructor(e, t, a) {
            super(),
              (this.#e = e),
              (this.#a = []),
              (this.#r = []),
              (this.#t = []),
              this.setQueries(t);
          }
          onSubscribe() {
            1 === this.listeners.size &&
              this.#r.forEach((e) => {
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
              this.#r.forEach((e) => {
                e.destroy();
              });
          }
          setQueries(e, t, a) {
            (this.#a = e),
              s.j.batch(() => {
                const e = this.#r,
                  t = this.#l(this.#a);
                t.forEach((e) =>
                  e.observer.setOptions(e.defaultedQueryOptions, a),
                );
                const r = t.map((e) => e.observer),
                  s = r.map((e) => e.getCurrentResult()),
                  n = r.some((t, a) => t !== e[a]);
                (e.length !== r.length || n) &&
                  ((this.#r = r),
                  (this.#t = s),
                  this.hasListeners() &&
                    (l(e, r).forEach((e) => {
                      e.destroy();
                    }),
                    l(r, e).forEach((e) => {
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
            return this.#r.map((e) => e.getCurrentQuery());
          }
          getObservers() {
            return this.#r;
          }
          getOptimisticResult(e, t) {
            const a = this.#l(e),
              r = a.map((e) =>
                e.observer.getOptimisticResult(e.defaultedQueryOptions),
              );
            return [
              r,
              (e) => this.#m(e ?? r, t),
              () =>
                a.map((e, t) => {
                  const s = r[t];
                  return e.defaultedQueryOptions.notifyOnChangeProps
                    ? s
                    : e.observer.trackResult(s, (e) => {
                        a.forEach((t) => {
                          t.observer.trackProp(e);
                        });
                      });
                }),
            ];
          }
          #m(e, t) {
            return t
              ? ((this.#s && this.#t === this.#i && t === this.#n) ||
                  ((this.#n = t),
                  (this.#i = this.#t),
                  (this.#s = (0, o.BH)(this.#s, t(e)))),
                this.#s)
              : e;
          }
          #l(e) {
            const t = this.#r,
              a = new Map(t.map((e) => [e.options.queryHash, e])),
              r = e.map((e) => this.#e.defaultQueryOptions(e)),
              s = r.flatMap((e) => {
                const t = a.get(e.queryHash);
                return null != t
                  ? [{ defaultedQueryOptions: e, observer: t }]
                  : [];
              }),
              i = new Set(s.map((e) => e.defaultedQueryOptions.queryHash)),
              o = r.filter((e) => !i.has(e.queryHash)),
              l = (e) => {
                const t = this.#e.defaultQueryOptions(e);
                return (
                  this.#r.find((e) => e.options.queryHash === t.queryHash) ??
                  new n.$(this.#e, t)
                );
              },
              c = o.map((e) => ({ defaultedQueryOptions: e, observer: l(e) }));
            return s
              .concat(c)
              .sort(
                (e, t) =>
                  r.indexOf(e.defaultedQueryOptions) -
                  r.indexOf(t.defaultedQueryOptions),
              );
          }
          #o(e, t) {
            const a = this.#r.indexOf(e);
            -1 !== a &&
              ((this.#t = (function (e, t, a) {
                const r = e.slice(0);
                return (r[t] = a), r;
              })(this.#t, a, t)),
              this.#c());
          }
          #c() {
            s.j.batch(() => {
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
          g = r.useMemo(
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
        const [d] = r.useState(() => new c(i, g, t)),
          [E, B, S] = d.getOptimisticResult(g, t.combine);
        r.useSyncExternalStore(
          r.useCallback(
            (e) => (o ? () => {} : d.subscribe(s.j.batchCalls(e))),
            [d, o],
          ),
          () => d.getCurrentResult(),
          () => d.getCurrentResult(),
        ),
          r.useEffect(() => {
            d.setQueries(g, t, { listeners: !1 });
          }, [g, t, d]);
        const b = E.some((e, t) => (0, h.EU)(g[t], e))
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
        if (b.length > 0) throw Promise.all(b);
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
