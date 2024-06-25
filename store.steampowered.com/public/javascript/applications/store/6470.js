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
      a.d(t, { r: () => C, o: () => P });
      var n = a(85556),
        r = a(47427),
        s = a(27605),
        i = a(31846),
        o = a(77936),
        l = a(42411),
        m = a(13129),
        c = a(16091),
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
            ...i
          } = this.props;
          let o = "";
          return (
            "medium" == n ? (o = A().Medium) : "large" == n && (o = A().Large),
            r.createElement(
              "div",
              {
                className: (0, m.Z)(
                  A().SnoozeContainer,
                  e.online_state,
                  a,
                  t && A().animating,
                  o,
                  s && A().Dim,
                ),
                ...i,
              },
              r.createElement(
                "div",
                { "data-text": "Z", className: (0, m.Z)(A().SnoozeZ, A().Z1) },
                "Z",
              ),
              r.createElement(
                "div",
                { "data-text": "Z", className: (0, m.Z)(A().SnoozeZ, A().Z2) },
                "Z",
              ),
              r.createElement(
                "div",
                { "data-text": "Z", className: (0, m.Z)(A().SnoozeZ, A().Z3) },
                "Z",
              ),
            )
          );
        }
      };
      u = (0, n.gn)([s.Pi], u);
      var p = a(62613),
        g = a(26358),
        d = a.n(g),
        h = a(7686);
      const B = (0, s.Pi)((e) => {
        const { persona: t, className: a, ...n } = e;
        if (!t) return null;
        if (!t.is_online) return null;
        const s = t.HasStateFlag(512),
          o = t.HasStateFlag(2048),
          c = !o && t.HasStateFlag(1024);
        return r.createElement(
          r.Fragment,
          null,
          s &&
            r.createElement(
              "div",
              {
                className: (0, m.Z)(
                  a,
                  d().PersonaStatusIcon,
                  d().MobilePhoneIcon,
                  (0, l.sB)(t),
                ),
                title: (0, i.Xx)("#Platform_Hint_Mobile"),
                ...n,
              },
              r.createElement(h.Mr, null),
            ),
          o &&
            r.createElement(
              "div",
              {
                className: (0, m.Z)(
                  a,
                  d().PersonaStatusIcon,
                  d().VRIcon,
                  (0, l.sB)(t),
                ),
                title: (0, i.Xx)("#Platform_Hint_VR"),
                ...n,
              },
              r.createElement(p.VR, null),
            ),
          c &&
            r.createElement(
              "div",
              {
                className: (0, m.Z)(
                  a,
                  d().PersonaStatusIcon,
                  d().BigPictureIcon,
                  (0, l.sB)(t),
                ),
                title: (0, i.Xx)("#Platform_Hint_BigPicture"),
                ...n,
              },
              r.createElement(p.Ucz, null),
            ),
        );
      });
      var E = a(32633),
        Q = a.n(E),
        N = a(37563);
      function S(e) {
        return r.createElement(
          r.Fragment,
          null,
          r.createElement(
            "span",
            { className: Q().partyBeaconJoin },
            (0, i.Xx)("#User_WantsToPlay"),
          ),
          " – ",
          e.persona.GetCurrentGameName(),
        );
      }
      let P = class extends r.Component {
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
            bHideSnooze: E,
            bHideStatus: P,
            renderStatus: C,
            renderRichPresence: f,
            bHidePersona: v,
            bDNDSet: I,
            bHasPartyBeacon: y,
            bHasGamePrivacy: D,
            bNoMask: Z,
            ..._
          } = this.props;
          let k = null,
            F = null,
            b = null,
            M = [
              e,
              Q().personaNameAndStatusLabel,
              (0, l.sB)(a),
              g && Q().compactView,
              Z && Q().NoMask,
            ];
          y || a.has_public_party_beacon
            ? (F = r.createElement(S, { persona: a }))
            : (0, o.fk)(n)
              ? ((F = (0, i.Xx)("#PersonaStateBlocked")), M.push(Q().blocked))
              : a.is_ingame
                ? ((F =
                    !a.is_in_nonsteam_game || s || (0, o.my)(n)
                      ? a.GetCurrentGameName()
                      : (0, i.Xx)("#PersonaStateInNonSteamGame")),
                  s || v
                    ? s &&
                      a.is_awayOrSnooze &&
                      (b = (0, i.Xx)("#PersonaStateAway"))
                    : (b = a.GetCurrentGameRichPresence()))
                : a.m_broadcastAccountId &&
                  (F = (0, i.Xx)("#PersonaStateWatchingBroadcast")),
            F || (F = a.GetLocalizedOnlineStatus()),
            C && (F = C());
          let w = !v && !E;
          !1 === E && (w = !0),
            a.is_awayOrSnooze && w && (k = r.createElement(u, { persona: a }));
          let H = null;
          t
            ? (H = r.createElement(
                "div",
                { className: "ContextMenuButton", onClick: t },
                r.createElement(p.$gZ, null),
              ))
            : M.push(Q().noContextMenu),
            v && M.push(Q().hidePersona),
            f && (b = f()),
            (!d && b) || M.push(Q().twoLine);
          const R = !a.is_ingame && !P,
            U = !h && b,
            T = F && (!d || !U),
            G = (0, o.hz)(N.De.LAUNCHER_TYPE);
          let K = A && !c,
            J = K ? A : a.m_strPlayerName,
            L = !v && (T || R) && U;
          return r.createElement(
            "div",
            { ..._, className: (0, m.Z)(...M), onContextMenu: t },
            r.createElement(
              "div",
              { className: (0, m.Z)(Q().statusAndName, L && Q().threeLines) },
              r.createElement(
                "div",
                { className: Q().playerName },
                J || " ",
                c &&
                  A &&
                  r.createElement(
                    "span",
                    { className: Q().playerNickname },
                    "(",
                    A,
                    ")",
                  ),
              ),
              I &&
                r.createElement(
                  "div",
                  {
                    className: Q().DNDContainer,
                    title: (0, i.Xx)("#User_ToggleDoNotDisturb"),
                  },
                  r.createElement(p.YVR, null),
                ),
              K &&
                r.createElement(
                  "span",
                  {
                    className: Q().playerNicknameBracket,
                    title: (0, i.Xx)("#isNickname"),
                  },
                  " *",
                ),
              r.createElement(B, { persona: a }),
              k,
              (a.m_bPlayerNamePending || a.m_bAvatarPending) &&
                G &&
                r.createElement(
                  "div",
                  {
                    className: Q().PendingPersona,
                    title: (0, i.Xx)("#SteamChina_PendingPersonaName"),
                  },
                  r.createElement(p.SUY, null),
                ),
              H,
            ),
            !v &&
              r.createElement(
                "div",
                { className: Q().richPresenceContainer },
                (T || R) &&
                  r.createElement(
                    "div",
                    {
                      className: (0, m.Z)(
                        Q().gameName,
                        L && Q().threeLines,
                        Q().richPresenceLabel,
                        "no-drag",
                      ),
                    },
                    D &&
                      r.createElement(
                        "div",
                        {
                          className: Q().gameIsPrivateIcon,
                          title: (0, i.Xx)("#User_GameInfoHidden"),
                        },
                        r.createElement(p._GE, null),
                      ),
                    F,
                  ),
                U &&
                  r.createElement(
                    "div",
                    { className: (0, m.Z)(Q().richPresenceLabel, "no-drag") },
                    b,
                    " ",
                  ),
              ),
          );
        }
      };
      P = (0, n.gn)([s.Pi], P);
      const C = (0, s.Pi)((e) => {
        const {
          persona: t,
          bParenthesizeNicknames: a,
          strNickname: n,
          bIgnorePersonaStatus: s,
          className: i,
          ...o
        } = e;
        let c = n && !a ? n : t.m_strPlayerName;
        return r.createElement(
          "span",
          { ...o, className: (0, m.Z)(i, !s && (0, l.sB)(t)) },
          r.createElement(
            "span",
            { className: Q().playerName },
            c || " ",
            a &&
              n &&
              r.createElement(
                "span",
                { className: Q().playerNickname },
                "(",
                n,
                ")",
              ),
          ),
        );
      });
    },
    38605: (e, t, a) => {
      "use strict";
      a.d(t, { o: () => d, _1: () => E, DY: () => B, vV: () => h });
      var n = a(85556),
        r = a(47427),
        s = a(27605),
        i = a(42411),
        o = a(13129),
        l = a(37563),
        m = a(28918);
      const c =
          "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD//gA7Q1JFQVRPUjogZ2QtanBlZyB2MS4wICh1c2luZyBJSkcgSlBFRyB2NjIpLCBxdWFsaXR5ID0gODAK/9sAQwAGBAUGBQQGBgUGBwcGCAoQCgoJCQoUDg8MEBcUGBgXFBYWGh0lHxobIxwWFiAsICMmJykqKRkfLTAtKDAlKCko/9sAQwEHBwcKCAoTCgoTKBoWGigoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgo/8AAEQgAQABAAwEiAAIRAQMRAf/EAB8AAAEFAQEBAQEBAAAAAAAAAAABAgMEBQYHCAkKC//EALUQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+v/EAB8BAAMBAQEBAQEBAQEAAAAAAAABAgMEBQYHCAkKC//EALURAAIBAgQEAwQHBQQEAAECdwABAgMRBAUhMQYSQVEHYXETIjKBCBRCkaGxwQkjM1LwFWJy0QoWJDThJfEXGBkaJicoKSo1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoKDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uLj5OXm5+jp6vLz9PX29/j5+v/aAAwDAQACEQMRAD8A8Inmk8+T94/3j/EfWmedJ/z0f/vo0T/6+T/eP86ZQA/zpP8Ano//AH0aPOk/56P/AN9GmVo6Loeq65M0Wj6ddXrr94QRF9v1I6fjQBR86T/no/8A30aPOk/56P8A99GtHW/Dus6GV/tjS7yyD8K00RVW+h6GsugB/nSf89H/AO+jT4JpPPj/AHj/AHh/EfWoafB/r4/94fzoAJ/9fJ/vH+dMp8/+vk/3j/OmUAXdE099W1mw06Jgsl3PHApPYswUH9a+qPF3iHSPhF4S0+003TxK0hMcEAbZvIA3SO2OvIz6k18nW88ttcRz28jxTRMHSRGKsrA5BBHQg1b1TWdT1fy/7V1G8vfLzs+0TNJtz1xknHQUAfUXw+8c6Z8UdN1HS9V0xIpUTM1s7eYkiE43KcAgg/lxg180+NtEHhzxZqmkqxdLWcojHqUPK598EV9CfBbwpF4G8J3fiLxA4trm5hEsnmceRCOQD/tHqR9B1r568a63/wAJH4r1TVghRLqYuinqE6KD74AoAxafB/r4/wDeH86ZT4P9fH/vD+dABP8A6+T/AHj/ADplPn/18n+8f50ygArt/gtpltq/xK0e2vYxJArPMUYZDFEZhn2yBXEV0/w203VNX8YWdloOoHTtQkWQx3IZl2gISeV55AI/GgD1H9pvxPdi/s/DcDGOz8pbqfHWRizBQfYbc/U+1eD12PxW0fWtE8Tpa+I9UOqXpt0cTl2bCEthctz1B/OuOoAKfB/r4/8AeH86ZT4P9fH/ALw/nQAT/wCvk/3j/OmVNPDJ58n7t/vH+E+tM8mT/nm//fJoAZV7Q9Xv9C1KLUNJuGtryMEJIoBIyCD1BHQmqnkyf883/wC+TR5Mn/PN/wDvk0AaHiHXtT8RX4vdau2u7oIIxIygHaCSBwB6msyn+TJ/zzf/AL5NHkyf883/AO+TQAynwf6+P/eH86PJk/55v/3yafBDJ58f7t/vD+E+tAH/2Q==",
        A =
          a.p +
          "images/applications/store/avatar_default_full.jpg?v=valveisgoodatcaching";
      var u = a(5167),
        p = a.n(u),
        g = a(20020);
      const d = r.memo(function (e) {
        const {
            strAvatarURL: t,
            size: a = "Medium",
            className: n,
            statusStyle: s,
            statusPosition: i,
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
                      return (0, g.Z)(e, `Unhandled size ${e}`), c;
                  }
                })(a),
              ),
              e
            );
          }, [t, a]);
        return r.createElement(
          "div",
          {
            className: (0, o.Z)(
              p().avatarHolder,
              "avatarHolder",
              "no-drag",
              a,
              n,
            ),
            ...u,
          },
          r.createElement("div", {
            className: (0, o.Z)(p().avatarStatus, "avatarStatus", i),
            style: s,
          }),
          r.createElement(m.j, {
            className: (0, o.Z)(p().avatar, "avatar"),
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
              ? (m = l.De.MEDIA_CDN_COMMUNITY_URL + "images/" + a.image_small)
              : e &&
                ((m = e.avatar_url_medium),
                "Small" == t || "X-Small" == t
                  ? (m = e.avatar_url)
                  : ("Large" != t && "X-Large" != t && "FillArea" != t) ||
                    (m = e.avatar_url_full)),
            r.createElement(d, {
              strAvatarURL: m,
              size: t,
              className: (0, o.Z)((0, i.sB)(e), n),
              ...s,
            })
          );
        }
      };
      h = (0, n.gn)([s.Pi], h);
      const B = (0, s.Pi)((e) => {
        const { profileItem: t, className: a, bDisableAnimation: n, ...s } = e;
        if (!t || !t.image_small || 0 == t.image_small.length) return null;
        let i = n ? t.image_large : t.image_small;
        return (
          i || (i = t.image_small),
          i.startsWith("https://") ||
            (i = l.De.MEDIA_CDN_COMMUNITY_URL + "images/" + i),
          r.createElement(
            "div",
            { className: (0, o.Z)(p().avatarFrame, a, "avatarFrame"), ...s },
            r.createElement("img", { className: p().avatarFrameImg, src: i }),
          )
        );
      });
      let E = class extends r.Component {
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
            bLimitProfileFrameAnimationTime: i,
            bParentHovered: o,
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
                r.createElement(B, {
                  profileItem: a,
                  bDisableAnimation: i && !this.state.bAnimate,
                }),
              ),
            )
          );
        }
      };
      E = (0, n.gn)([s.Pi], E);
    },
    88619: (e, t, a) => {
      "use strict";
      a.d(t, { N5: () => d, co: () => u, hg: () => A, m6: () => E });
      var n = a(53923),
        r = a(40057),
        s = a(42718),
        i = a(79545),
        o = a(35427),
        l = a(3172),
        m = a(82182),
        c = a(51915);
      function A(e) {
        const t = (0, r.bY)(),
          a = (0, n.M)(),
          i = (0, c.E8)(),
          l = (0, s.useQueryClient)();
        let m = { loadNicknames: !1, loadFavorites: !1, ...e };
        return (0, s.useQuery)(
          ["FriendsList", a, m],
          async () => {
            const e = l.fetchQuery(p(t, a)),
              n = m.loadNicknames ? l.fetchQuery(g(t, a)) : void 0,
              r = m.loadFavorites ? l.fetchQuery(h(t, a)) : void 0,
              s = await e,
              A = new Map(s.map((e) => [e, l.fetchQuery((0, c.Zx)(i, t, e))]));
            let u;
            if (n) {
              const e = (await n).nicknames;
              u = new Map(e.map((e) => [e.accountid, e.nickname]));
            }
            const d = new Set(await (r ?? Promise.resolve([])));
            return (
              await Promise.all(
                s.map(async (e) => {
                  const t = new o.K(e).GetAccountID(),
                    a = { accountid: t, persona: await A.get(e) };
                  return (
                    d.has(t) && (a.is_favorite = !0),
                    u && u.has(t) && (a.nickname = u.get(t)),
                    a
                  );
                }),
              )
            ).filter((e) => !!e.persona);
          },
          { staleTime: 12e4 },
        );
      }
      function u() {
        const e = (0, r.bY)(),
          t = (0, n.M)();
        return (0, s.useQuery)(p(e, t));
      }
      function p(e, t) {
        return {
          queryKey: ["GetFriendsList", t],
          queryFn: async () => {
            const t = i.gA.Init(l.Fi),
              a = await l.qW.GetFriendsList(e, t);
            return a
              .Body()
              .friendslist()
              ?.friends()
              ?.filter((e) => {
                const t = new o.K(e.ulfriendid());
                return (
                  (3 == e.efriendrelationship() ||
                    6 == e.efriendrelationship()) &&
                  t.BIsIndividualAccount()
                );
              })
              .map((e) => e.ulfriendid());
          },
        };
      }
      function g(e, t) {
        return {
          queryKey: ["GetFriendNicknameList", t],
          queryFn: async () => {
            const t = i.gA.Init(m.bM);
            return (await m.lk.GetNicknameList(e, t)).Body().toObject();
          },
        };
      }
      function d(e = {}) {
        return (function (e = {}) {
          const t = (0, r.bY)(),
            a = (0, n.M)();
          return (0, s.useQuery)({ ...g(t, a), ...e });
        })({
          ...e,
          select: (e) =>
            new Map(e.nicknames.map((e) => [e.accountid, e.nickname])),
        });
      }
      function h(e, t) {
        return {
          queryKey: ["GetFriendFavorites", t],
          queryFn: async () => {
            const t = i.gA.Init(l.Zi),
              a = (await l.qW.GetFavorites(e, t)).Body().toObject();
            return a.favorites
              ?.filter((e) => e.accountid)
              .map((e) => e.accountid);
          },
        };
      }
      async function B(e, t) {
        const a = i.gA.Init(m.$_);
        a.Body().set_appid(t);
        const n = await m.lk.GetFriendsGameplayInfo(e, a);
        return (
          n.BSuccess() ||
            console.warn(`Failed to get gameplay info: ${n.GetEResult()}`),
          n.Body().toObject()
        );
      }
      function E(e, t = {}) {
        const a = (0, r.bY)(),
          i = (0, n.M)();
        return (0, s.useQuery)({
          queryKey: `GameplayInfo_${i}_${e}`,
          queryFn: async () => await B(a, e),
          ...t,
        });
      }
    },
    7686: (e, t, a) => {
      "use strict";
      a.d(t, { Jr: () => o, Mr: () => l, tk: () => m });
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
      function m() {
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
      (0, n.gn)([s.ak], i.prototype, "OnImageError", null);
    },
  },
]);
