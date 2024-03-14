/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkstore = self.webpackChunkstore || []).push([
  [6470],
  {
    16091: (e) => {
      e.exports = {
        SnoozeContainer: "_3EzTyjJx_tZUEIHygPwAeC",
        SnoozeZ: "_1DArl3Gs9lXPcZdmCIlDJa",
        none: "_2k961y27AKXbskWyA2zQaU",
        Medium: "_3Gk3l3Mqo0jqDRvFGfTPAc",
        Large: "dTohLgV0utdpWZ84eh3FP",
        Dim: "_2TzRZ3Ygn6XEn8aKf7CqWB",
        Z1: "_1OyrTEYQD775VOOVC9yYrB",
        Z2: "_1mx4kcxNcUvaiFLQiW1XVR",
        Z3: "_1ltvK3RJFhtrbr2a5xlAR4",
        hoverParent: "_3ID9ReYE8luRukPMTP-Whi",
        animating: "_3CzX57jufuQpN4Qbp5pgJx",
        Snoring: "YuCwjyOZanmNiMAZTC3PY",
      };
    },
    32633: (e) => {
      e.exports = {
        "duration-app-launch": "800ms",
        statusAndName: "_3n8q82Bm3oNKRPFbrZOlo8",
        threeLines: "_3ms2PyGmolbJQnm8GTFdFu",
        blocked: "_3_oRkgqe1Y70ZF2-ZfcuwG",
        richPresenceLabel: "_1k82NiWym4STegDGxRBHz2",
        playerName: "r62qzcdJQ0qezZglOtiUX",
        playerNickname: "_3T-9PkwXmTHyFu3b1pAn2O",
        playerNicknameBracket: "_2aXevHqPLXEAmOJUXiYYUT",
        richPresenceContainer: "_2nrSdZqzl3e01VZleoVaWp",
        gameName: "_2wpaptjZY-3Gn1HOPlL85O",
        NoMask: "_2J0ISrAA2GKgQuiyzzV10X",
        twoLine: "_27M2GicEvwcoEI5R0FSKi9",
        DNDContainer: "_12iWKn1QT-c-GZZ135BQJd",
        partyBeaconJoin: "_1K_OItH1ngVtuSuY6GVsE7",
        hidePersona: "_3meBuXhr41q7X3dEQZ1qqM",
        compactView: "_34CCBJ8pGM-KGInRNV98M-",
        noContextMenu: "_2317WeOq8zJVeOi6ILQbF8",
        gameIsPrivateIcon: "_1FPaN3pRLeYmPBLJgQxunA",
        PendingPersona: "ifetnZHsAIzsfvMphG0oC",
      };
    },
    26358: (e) => {
      e.exports = {
        "duration-app-launch": "800ms",
        PersonaStatusIcon: "_1YsWjZbxFewllb2PX6ZhNm",
        MobilePhoneIcon: "_3pGV8dWHnZMYHcytHxo6pw",
      };
    },
    5167: (e) => {
      e.exports = {
        avatarHolder: "_1YGAHSfGavQI6MODJq-pJB",
        avatarStatus: "_1yIzy56YfJIliF6ykwhP2r",
        avatar: "_1p_QrI3ixF-RAwnxad9pEm",
        avatarFrame: "_3atbNcPD1_nRVTjOvryjWe",
        avatarFrameImg: "_338kJp62vHY5iDbsraaiKD",
      };
    },
    70548: (e, t, a) => {
      "use strict";
      a.d(t, { r: () => P, o: () => Q });
      var n = a(85556),
        r = a(47427),
        s = a(27605),
        i = a(31846),
        o = a(77936),
        l = a(42411),
        c = a(13129),
        m = a(16091),
        A = a.n(m);
      let u = class extends r.Component {
        static get hoverClass() {
          return A().hoverParent;
        }
        render() {
          const e = this.props,
            { persona: t, animating: a, className: s, size: i, dim: o } = e,
            l = (0, n._T)(e, [
              "persona",
              "animating",
              "className",
              "size",
              "dim",
            ]);
          let m = "";
          return (
            "medium" == i ? (m = A().Medium) : "large" == i && (m = A().Large),
            r.createElement(
              "div",
              Object.assign(
                {
                  className: (0, c.Z)(
                    A().SnoozeContainer,
                    t.online_state,
                    s,
                    a && A().animating,
                    m,
                    o && A().Dim,
                  ),
                },
                l,
              ),
              r.createElement(
                "div",
                { "data-text": "Z", className: (0, c.Z)(A().SnoozeZ, A().Z1) },
                "Z",
              ),
              r.createElement(
                "div",
                { "data-text": "Z", className: (0, c.Z)(A().SnoozeZ, A().Z2) },
                "Z",
              ),
              r.createElement(
                "div",
                { "data-text": "Z", className: (0, c.Z)(A().SnoozeZ, A().Z3) },
                "Z",
              ),
            )
          );
        }
      };
      u = (0, n.gn)([s.Pi], u);
      var p = a(62613),
        d = a(26358),
        g = a.n(d),
        h = a(7686);
      const B = (0, s.Pi)((e) => {
        const { persona: t, className: a } = e,
          s = (0, n._T)(e, ["persona", "className"]);
        if (!t) return null;
        if (!t.is_online) return null;
        const o = t.HasStateFlag(512),
          m = t.HasStateFlag(2048),
          A = !m && t.HasStateFlag(1024);
        return r.createElement(
          r.Fragment,
          null,
          o &&
            r.createElement(
              "div",
              Object.assign(
                {
                  className: (0, c.Z)(
                    a,
                    g().PersonaStatusIcon,
                    g().MobilePhoneIcon,
                    (0, l.sB)(t),
                  ),
                  title: (0, i.Xx)("#Platform_Hint_Mobile"),
                },
                s,
              ),
              r.createElement(h.Mr, null),
            ),
          m &&
            r.createElement(
              "div",
              Object.assign(
                {
                  className: (0, c.Z)(
                    a,
                    g().PersonaStatusIcon,
                    g().VRIcon,
                    (0, l.sB)(t),
                  ),
                  title: (0, i.Xx)("#Platform_Hint_VR"),
                },
                s,
              ),
              r.createElement(p.VR, null),
            ),
          A &&
            r.createElement(
              "div",
              Object.assign(
                {
                  className: (0, c.Z)(
                    a,
                    g().PersonaStatusIcon,
                    g().BigPictureIcon,
                    (0, l.sB)(t),
                  ),
                  title: (0, i.Xx)("#Platform_Hint_BigPicture"),
                },
                s,
              ),
              r.createElement(p.Ucz, null),
            ),
        );
      });
      var E = a(32633),
        v = a.n(E),
        N = a(37563);
      function S(e) {
        return r.createElement(
          r.Fragment,
          null,
          r.createElement(
            "span",
            { className: v().partyBeaconJoin },
            (0, i.Xx)("#User_WantsToPlay"),
          ),
          " – ",
          e.persona.GetCurrentGameName(),
        );
      }
      let Q = class extends r.Component {
        render() {
          const e = this.props,
            {
              className: t,
              onContextMenu: a,
              persona: s,
              eFriendRelationship: m,
              bIsSelf: A,
              bParenthesizeNicknames: d,
              strNickname: g,
              bCompactView: h,
              bHideGameName: E,
              bHideEnhancedRichPresenceLabel: Q,
              bHideSnooze: P,
              bHideStatus: b,
              renderStatus: f,
              renderRichPresence: C,
              bHidePersona: I,
              bDNDSet: y,
              bHasPartyBeacon: _,
              bHasGamePrivacy: D,
              bNoMask: k,
            } = e,
            F = (0, n._T)(e, [
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
            H = null,
            T = null,
            M = [
              t,
              v().personaNameAndStatusLabel,
              (0, l.sB)(s),
              h && v().compactView,
              k && v().NoMask,
            ];
          _ || s.has_public_party_beacon
            ? (H = r.createElement(S, { persona: s }))
            : (0, o.fk)(m)
              ? ((H = (0, i.Xx)("#PersonaStateBlocked")), M.push(v().blocked))
              : s.is_ingame
                ? ((H =
                    !s.is_in_nonsteam_game || A || (0, o.my)(m)
                      ? s.GetCurrentGameName()
                      : (0, i.Xx)("#PersonaStateInNonSteamGame")),
                  A || I
                    ? A &&
                      s.is_awayOrSnooze &&
                      (T = (0, i.Xx)("#PersonaStateAway"))
                    : (T = s.GetCurrentGameRichPresence()))
                : s.m_broadcastAccountId &&
                  (H = (0, i.Xx)("#PersonaStateWatchingBroadcast")),
            H || (H = s.GetLocalizedOnlineStatus()),
            f && (H = f());
          let R = !I && !P;
          !1 === P && (R = !0),
            s.is_awayOrSnooze && R && (Z = r.createElement(u, { persona: s }));
          let G = null;
          a
            ? (G = r.createElement(
                "div",
                { className: "ContextMenuButton", onClick: a },
                r.createElement(p.$gZ, null),
              ))
            : M.push(v().noContextMenu),
            I && M.push(v().hidePersona),
            C && (T = C()),
            (!E && T) || M.push(v().twoLine);
          const U = !s.is_ingame && !b,
            w = !Q && T,
            K = H && (!E || !w),
            L = (0, o.hz)(N.De.LAUNCHER_TYPE);
          let j = g && !d,
            J = j ? g : s.m_strPlayerName,
            x = !I && (K || U) && w;
          return r.createElement(
            "div",
            Object.assign({}, F, {
              className: (0, c.Z)(...M),
              onContextMenu: a,
            }),
            r.createElement(
              "div",
              { className: (0, c.Z)(v().statusAndName, x && v().threeLines) },
              r.createElement(
                "div",
                { className: v().playerName },
                J || " ",
                d &&
                  g &&
                  r.createElement(
                    "span",
                    { className: v().playerNickname },
                    "(",
                    g,
                    ")",
                  ),
              ),
              y &&
                r.createElement(
                  "div",
                  {
                    className: v().DNDContainer,
                    title: (0, i.Xx)("#User_ToggleDoNotDisturb"),
                  },
                  r.createElement(p.YVR, null),
                ),
              j &&
                r.createElement(
                  "span",
                  {
                    className: v().playerNicknameBracket,
                    title: (0, i.Xx)("#isNickname"),
                  },
                  " *",
                ),
              r.createElement(B, { persona: s }),
              Z,
              (s.m_bPlayerNamePending || s.m_bAvatarPending) &&
                L &&
                r.createElement(
                  "div",
                  {
                    className: v().PendingPersona,
                    title: (0, i.Xx)("#SteamChina_PendingPersonaName"),
                  },
                  r.createElement(p.SUY, null),
                ),
              G,
            ),
            !I &&
              r.createElement(
                "div",
                { className: v().richPresenceContainer },
                (K || U) &&
                  r.createElement(
                    "div",
                    {
                      className: (0, c.Z)(
                        v().gameName,
                        x && v().threeLines,
                        v().richPresenceLabel,
                        "no-drag",
                      ),
                    },
                    D &&
                      r.createElement(
                        "div",
                        {
                          className: v().gameIsPrivateIcon,
                          title: (0, i.Xx)("#User_GameInfoHidden"),
                        },
                        r.createElement(p._GE, null),
                      ),
                    H,
                  ),
                w &&
                  r.createElement(
                    "div",
                    { className: (0, c.Z)(v().richPresenceLabel, "no-drag") },
                    T,
                    " ",
                  ),
              ),
          );
        }
      };
      Q = (0, n.gn)([s.Pi], Q);
      const P = (0, s.Pi)((e) => {
        const {
            persona: t,
            bParenthesizeNicknames: a,
            strNickname: s,
            bIgnorePersonaStatus: i,
            className: o,
          } = e,
          m = (0, n._T)(e, [
            "persona",
            "bParenthesizeNicknames",
            "strNickname",
            "bIgnorePersonaStatus",
            "className",
          ]);
        let A = s && !a ? s : t.m_strPlayerName;
        return r.createElement(
          "span",
          Object.assign({}, m, { className: (0, c.Z)(o, !i && (0, l.sB)(t)) }),
          r.createElement(
            "span",
            { className: v().playerName },
            A || " ",
            a &&
              s &&
              r.createElement(
                "span",
                { className: v().playerNickname },
                "(",
                s,
                ")",
              ),
          ),
        );
      });
    },
    38605: (e, t, a) => {
      "use strict";
      a.d(t, { o: () => p, _1: () => h, DY: () => g, vV: () => d });
      var n = a(85556),
        r = a(47427),
        s = a(27605),
        i = a(42411),
        o = a(13129),
        l = a(37563),
        c = a(28918);
      const m =
        a.p +
        "images/applications/store/avatar_default_full.jpg?v=valveisgoodatcaching";
      var A = a(5167),
        u = a.n(A);
      class p extends r.Component {
        render() {
          const e = this.props,
            {
              strAvatarURL: t,
              size: a,
              className: s,
              statusStyle: i,
              statusPosition: l,
              children: A,
            } = e,
            p = (0, n._T)(e, [
              "strAvatarURL",
              "size",
              "className",
              "statusStyle",
              "statusPosition",
              "children",
            ]),
            d = [];
          return (
            t && d.push(t),
            d.push(
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
                    return m;
                }
              })(a),
            ),
            r.createElement(
              "div",
              Object.assign(
                {
                  className: (0, o.Z)(
                    u().avatarHolder,
                    "avatarHolder",
                    "no-drag",
                    a || "Medium",
                    s,
                  ),
                },
                p,
              ),
              r.createElement("div", {
                className: (0, o.Z)(u().avatarStatus, "avatarStatus", l),
                style: i,
              }),
              r.createElement(c.j, {
                className: (0, o.Z)(u().avatar, "avatar"),
                rgSources: d,
                draggable: !1,
              }),
              A,
            )
          );
        }
      }
      let d = class extends r.Component {
        render() {
          const e = this.props,
            { persona: t, size: a, animatedAvatar: s, className: c } = e,
            m = (0, n._T)(e, [
              "persona",
              "size",
              "animatedAvatar",
              "className",
            ]);
          let A = "";
          return (
            s && s.image_small && 0 != s.image_small.length
              ? (A = l.De.MEDIA_CDN_COMMUNITY_URL + "images/" + s.image_small)
              : t &&
                ((A = t.avatar_url_medium),
                "Small" == a || "X-Small" == a
                  ? (A = t.avatar_url)
                  : ("Large" != a && "X-Large" != a && "FillArea" != a) ||
                    (A = t.avatar_url_full)),
            r.createElement(
              p,
              Object.assign(
                {
                  strAvatarURL: A,
                  size: a,
                  className: (0, o.Z)((0, i.sB)(t), c),
                },
                m,
              ),
            )
          );
        }
      };
      d = (0, n.gn)([s.Pi], d);
      const g = (0, s.Pi)((e) => {
        const { profileItem: t, className: a, bDisableAnimation: s } = e,
          i = (0, n._T)(e, ["profileItem", "className", "bDisableAnimation"]);
        if (!t || !t.image_small || 0 == t.image_small.length) return null;
        let c = s ? t.image_large : t.image_small;
        return (
          c || (c = t.image_small),
          c.startsWith("https://") ||
            (c = l.De.MEDIA_CDN_COMMUNITY_URL + "images/" + c),
          r.createElement(
            "div",
            Object.assign(
              { className: (0, o.Z)(u().avatarFrame, a, "avatarFrame") },
              i,
            ),
            r.createElement("img", { className: u().avatarFrameImg, src: c }),
          )
        );
      });
      let h = class extends r.Component {
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
          let e = this.props,
            {
              loopDuration: t,
              animatedAvatar: a,
              avatarFrame: s,
              children: i,
              style: o,
              bLimitProfileFrameAnimationTime: l,
              bParentHovered: c,
            } = e,
            m = (0, n._T)(e, [
              "loopDuration",
              "animatedAvatar",
              "avatarFrame",
              "children",
              "style",
              "bLimitProfileFrameAnimationTime",
              "bParentHovered",
            ]);
          return (
            m.onClick &&
              (o = Object.assign(Object.assign({}, o), { cursor: "pointer" })),
            this.state.bAnimate || (a = null),
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
                Object.assign({ animatedAvatar: a }, m),
                i,
                r.createElement(g, {
                  profileItem: s,
                  bDisableAnimation: l && !this.state.bAnimate,
                }),
              ),
            )
          );
        }
      };
      h = (0, n.gn)([s.Pi], h);
    },
    88619: (e, t, a) => {
      "use strict";
      a.d(t, { N5: () => h, co: () => p, hg: () => u, m6: () => v });
      var n = a(85556),
        r = a(53923),
        s = a(40057),
        i = a(42718),
        o = a(79545),
        l = a(35427),
        c = a(3172),
        m = a(82182),
        A = a(51915);
      function u(e) {
        const t = (0, s.bY)(),
          a = (0, r.M)(),
          o = (0, A.E8)(),
          c = (0, i.useQueryClient)();
        let m = Object.assign({ loadNicknames: !1, loadFavorites: !1 }, e);
        return (0, i.useQuery)(
          ["FriendsList", a, m],
          () =>
            (0, n.mG)(this, void 0, void 0, function* () {
              const e = c.fetchQuery(d(t, a)),
                r = m.loadNicknames ? c.fetchQuery(g(t, a)) : void 0,
                s = m.loadFavorites ? c.fetchQuery(B(t, a)) : void 0,
                i = yield e,
                u = new Map(
                  i.map((e) => [e, c.fetchQuery((0, A.Zx)(o, t, e))]),
                );
              let p;
              if (r) {
                const e = (yield r).nicknames;
                p = new Map(e.map((e) => [e.accountid, e.nickname]));
              }
              const h = new Set(yield null != s ? s : Promise.resolve([]));
              return Promise.all(
                i.map((e) =>
                  (0, n.mG)(this, void 0, void 0, function* () {
                    const t = new l.K(e).GetAccountID(),
                      a = { accountid: t, persona: yield u.get(e) };
                    return (
                      h.has(t) && (a.is_favorite = !0),
                      p && p.has(t) && (a.nickname = p.get(t)),
                      a
                    );
                  }),
                ),
              );
            }),
          { staleTime: 12e4 },
        );
      }
      function p() {
        const e = (0, s.bY)(),
          t = (0, r.M)();
        return (0, i.useQuery)(d(e, t));
      }
      function d(e, t) {
        return {
          queryKey: ["GetFriendsList", t],
          queryFn: () =>
            (0, n.mG)(this, void 0, void 0, function* () {
              var t, a;
              const n = o.gA.Init(c.Fi);
              return null ===
                (a =
                  null ===
                    (t = (yield c.qW.GetFriendsList(e, n))
                      .Body()
                      .friendslist()) || void 0 === t
                    ? void 0
                    : t.friends()) || void 0 === a
                ? void 0
                : a
                    .filter((e) => {
                      const t = new l.K(e.ulfriendid());
                      return (
                        (3 == e.efriendrelationship() ||
                          6 == e.efriendrelationship()) &&
                        t.BIsIndividualAccount()
                      );
                    })
                    .map((e) => e.ulfriendid());
            }),
        };
      }
      function g(e, t) {
        return {
          queryKey: ["GetFriendNicknameList", t],
          queryFn: () =>
            (0, n.mG)(this, void 0, void 0, function* () {
              const t = o.gA.Init(m.bM);
              return (yield m.lk.GetNicknameList(e, t)).Body().toObject();
            }),
        };
      }
      function h(e = {}) {
        return (function (e = {}) {
          const t = (0, s.bY)(),
            a = (0, r.M)();
          return (0, i.useQuery)(Object.assign(Object.assign({}, g(t, a)), e));
        })(
          Object.assign(Object.assign({}, e), {
            select: (e) =>
              new Map(e.nicknames.map((e) => [e.accountid, e.nickname])),
          }),
        );
      }
      function B(e, t) {
        return {
          queryKey: ["GetFriendFavorites", t],
          queryFn: () =>
            (0, n.mG)(this, void 0, void 0, function* () {
              var t;
              const a = o.gA.Init(c.Zi);
              return null ===
                (t = (yield c.qW.GetFavorites(e, a))
                  .Body()
                  .toObject().favorites) || void 0 === t
                ? void 0
                : t.filter((e) => e.accountid).map((e) => e.accountid);
            }),
        };
      }
      function E(e, t) {
        return (0, n.mG)(this, void 0, void 0, function* () {
          const a = o.gA.Init(m.$_);
          a.Body().set_appid(t);
          const n = yield m.lk.GetFriendsGameplayInfo(e, a);
          return (
            n.BSuccess() ||
              console.warn(`Failed to get gameplay info: ${n.GetEResult()}`),
            n.Body().toObject()
          );
        });
      }
      function v(e, t = {}) {
        const a = (0, s.bY)(),
          o = (0, r.M)();
        return (0, i.useQuery)(
          Object.assign(
            {
              queryKey: `GameplayInfo_${o}_${e}`,
              queryFn: () =>
                (0, n.mG)(this, void 0, void 0, function* () {
                  return yield E(a, e);
                }),
            },
            t,
          ),
        );
      }
    },
    7686: (e, t, a) => {
      "use strict";
      a.d(t, { Jr: () => o, Mr: () => l, tk: () => c });
      var n = a(47427),
        r = a(62613),
        s = a(58538),
        i = a(37563);
      function o() {
        return (0, i.id)()
          ? n.createElement(s.MCw, null)
          : n.createElement(r.JrY, null);
      }
      function l() {
        return n.createElement(r.MrB, null);
      }
      function c() {
        return (0, i.id)()
          ? n.createElement(s.tkI, null)
          : n.createElement(r.j5H, null);
      }
    },
    28918: (e, t, a) => {
      "use strict";
      a.d(t, { j: () => i });
      var n = a(85556),
        r = a(47427),
        s = a(20417);
      class i extends r.Component {
        constructor(e) {
          super(e),
            (this.m_refImage = r.createRef()),
            (this.state = { nImage: 0 });
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
          const e = this.props,
            { src: t, rgSources: a, onIncrementalError: s, onError: i } = e,
            o = (0, n._T)(e, [
              "src",
              "rgSources",
              "onIncrementalError",
              "onError",
            ]),
            l = this.src;
          return r.createElement(
            "img",
            Object.assign({ src: l, ref: this.m_refImage }, o, {
              onError: this.OnImageError,
            }),
          );
        }
      }
      (0, n.gn)([s.ak], i.prototype, "OnImageError", null);
    },
  },
]);
