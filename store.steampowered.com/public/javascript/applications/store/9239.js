/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkstore = self.webpackChunkstore || []).push([
  [9239],
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
    34181: (e, a, t) => {
      "use strict";
      t.d(a, { A: () => C, D: () => P });
      var n = t(34629),
        r = t(90626),
        s = t(75844),
        i = t(61859),
        o = t(22837),
        A = t(10622),
        m = t(52038),
        l = t(56420),
        c = t.n(l);
      let p = class extends r.Component {
        static get hoverClass() {
          return c().hoverParent;
        }
        render() {
          const {
            persona: e,
            animating: a,
            className: t,
            size: n,
            dim: s,
            ...i
          } = this.props;
          let o = "";
          return (
            "medium" == n ? (o = c().Medium) : "large" == n && (o = c().Large),
            r.createElement(
              "div",
              {
                className: (0, m.A)(
                  c().SnoozeContainer,
                  e.online_state,
                  t,
                  a && c().animating,
                  o,
                  s && c().Dim,
                ),
                ...i,
              },
              r.createElement(
                "div",
                { "data-text": "Z", className: (0, m.A)(c().SnoozeZ, c().Z1) },
                "Z",
              ),
              r.createElement(
                "div",
                { "data-text": "Z", className: (0, m.A)(c().SnoozeZ, c().Z2) },
                "Z",
              ),
              r.createElement(
                "div",
                { "data-text": "Z", className: (0, m.A)(c().SnoozeZ, c().Z3) },
                "Z",
              ),
            )
          );
        }
      };
      p = (0, n.Cg)([s.PA], p);
      var u = t(12155),
        B = t(70342),
        g = t.n(B),
        d = t(97232);
      const E = (0, s.PA)((e) => {
        const { persona: a, className: t, ...n } = e;
        if (!a) return null;
        if (!a.is_online) return null;
        const s = a.HasStateFlag(512),
          o = a.HasStateFlag(2048),
          l = !o && a.HasStateFlag(1024);
        return r.createElement(
          r.Fragment,
          null,
          s &&
            r.createElement(
              "div",
              {
                className: (0, m.A)(
                  t,
                  g().PersonaStatusIcon,
                  g().MobilePhoneIcon,
                  (0, A.rO)(a),
                ),
                title: (0, i.we)("#Platform_Hint_Mobile"),
                ...n,
              },
              r.createElement(d.rf, null),
            ),
          o &&
            r.createElement(
              "div",
              {
                className: (0, m.A)(
                  t,
                  g().PersonaStatusIcon,
                  g().VRIcon,
                  (0, A.rO)(a),
                ),
                title: (0, i.we)("#Platform_Hint_VR"),
                ...n,
              },
              r.createElement(u.VR, null),
            ),
          l &&
            r.createElement(
              "div",
              {
                className: (0, m.A)(
                  t,
                  g().PersonaStatusIcon,
                  g().BigPictureIcon,
                  (0, A.rO)(a),
                ),
                title: (0, i.we)("#Platform_Hint_BigPicture"),
                ...n,
              },
              r.createElement(u.bPr, null),
            ),
        );
      });
      var h = t(18828),
        S = t.n(h),
        N = t(78327);
      function Q(e) {
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
      let P = class extends r.Component {
        render() {
          const {
            className: e,
            onContextMenu: a,
            persona: t,
            eFriendRelationship: n,
            bIsSelf: s,
            bParenthesizeNicknames: l,
            strNickname: c,
            bCompactView: B,
            bHideGameName: g,
            bHideEnhancedRichPresenceLabel: d,
            bHideSnooze: h,
            bHideStatus: P,
            renderStatus: C,
            renderRichPresence: v,
            bHidePersona: D,
            bDNDSet: b,
            bHasPartyBeacon: T,
            bHasGamePrivacy: _,
            bNoMask: I,
            ...M
          } = this.props;
          let H = null,
            f = null,
            k = null,
            U = [
              e,
              S().personaNameAndStatusLabel,
              (0, A.rO)(t),
              B && S().compactView,
              I && S().NoMask,
            ];
          T || t.has_public_party_beacon
            ? (f = r.createElement(Q, { persona: t }))
            : (0, o.aP)(n)
              ? ((f = (0, i.we)("#PersonaStateBlocked")), U.push(S().blocked))
              : t.is_ingame
                ? ((f =
                    !t.is_in_nonsteam_game || s || (0, o.S$)(n)
                      ? t.GetCurrentGameName()
                      : (0, i.we)("#PersonaStateInNonSteamGame")),
                  s || D
                    ? s &&
                      t.is_awayOrSnooze &&
                      (k = (0, i.we)("#PersonaStateAway"))
                    : (k = t.GetCurrentGameRichPresence()))
                : t.m_broadcastAccountId &&
                  (f = (0, i.we)("#PersonaStateWatchingBroadcast")),
            f || (f = t.GetLocalizedOnlineStatus()),
            C && (f = C());
          let F = !D && !h;
          !1 === h && (F = !0),
            t.is_awayOrSnooze && F && (H = r.createElement(p, { persona: t }));
          let R = null;
          a
            ? (R = r.createElement(
                "div",
                { className: "ContextMenuButton", onClick: a },
                r.createElement(u.GB9, null),
              ))
            : U.push(S().noContextMenu),
            D && U.push(S().hidePersona),
            v && (k = v()),
            (!g && k) || U.push(S().twoLine);
          const w = !t.is_ingame && !P,
            K = !d && k,
            L = f && (!g || !K),
            Z = (0, o.ID)(N.TS.LAUNCHER_TYPE);
          let J = c && !l,
            W = J ? c : t.m_strPlayerName,
            X = !D && (L || w) && K;
          return r.createElement(
            "div",
            { ...M, className: (0, m.A)(...U), onContextMenu: a },
            r.createElement(
              "div",
              { className: (0, m.A)(S().statusAndName, X && S().threeLines) },
              r.createElement(
                "div",
                { className: S().playerName },
                W || " ",
                l &&
                  c &&
                  r.createElement(
                    "span",
                    { className: S().playerNickname },
                    "(",
                    c,
                    ")",
                  ),
              ),
              b &&
                r.createElement(
                  "div",
                  {
                    className: S().DNDContainer,
                    title: (0, i.we)("#User_ToggleDoNotDisturb"),
                  },
                  r.createElement(u.Aj0, null),
                ),
              J &&
                r.createElement(
                  "span",
                  {
                    className: S().playerNicknameBracket,
                    title: (0, i.we)("#isNickname"),
                  },
                  " *",
                ),
              r.createElement(E, { persona: t }),
              H,
              (t.m_bPlayerNamePending || t.m_bAvatarPending) &&
                Z &&
                r.createElement(
                  "div",
                  {
                    className: S().PendingPersona,
                    title: (0, i.we)("#SteamChina_PendingPersonaName"),
                  },
                  r.createElement(u.zD7, null),
                ),
              R,
            ),
            !D &&
              r.createElement(
                "div",
                { className: S().richPresenceContainer },
                (L || w) &&
                  r.createElement(
                    "div",
                    {
                      className: (0, m.A)(
                        S().gameName,
                        X && S().threeLines,
                        S().richPresenceLabel,
                        "no-drag",
                      ),
                    },
                    _ &&
                      r.createElement(
                        "div",
                        {
                          className: S().gameIsPrivateIcon,
                          title: (0, i.we)("#User_GameInfoHidden"),
                        },
                        r.createElement(u.jZl, null),
                      ),
                    f,
                  ),
                K &&
                  r.createElement(
                    "div",
                    { className: (0, m.A)(S().richPresenceLabel, "no-drag") },
                    k,
                    " ",
                  ),
              ),
          );
        }
      };
      P = (0, n.Cg)([s.PA], P);
      const C = (0, s.PA)((e) => {
        const {
          persona: a,
          bParenthesizeNicknames: t,
          strNickname: n,
          bIgnorePersonaStatus: s,
          className: i,
          ...o
        } = e;
        let l = n && !t ? n : a.m_strPlayerName;
        return r.createElement(
          "span",
          { ...o, className: (0, m.A)(i, !s && (0, A.rO)(a)) },
          r.createElement(
            "span",
            { className: S().playerName },
            l || " ",
            t &&
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
    1035: (e, a, t) => {
      "use strict";
      t.d(a, { Ul: () => g, xz: () => h, $Y: () => E, i8: () => d });
      var n = t(34629),
        r = t(90626),
        s = t(75844),
        i = t(10622),
        o = t(52038),
        A = t(78327),
        m = t(3088);
      const l =
          "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD//gA7Q1JFQVRPUjogZ2QtanBlZyB2MS4wICh1c2luZyBJSkcgSlBFRyB2NjIpLCBxdWFsaXR5ID0gODAK/9sAQwAGBAUGBQQGBgUGBwcGCAoQCgoJCQoUDg8MEBcUGBgXFBYWGh0lHxobIxwWFiAsICMmJykqKRkfLTAtKDAlKCko/9sAQwEHBwcKCAoTCgoTKBoWGigoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgo/8AAEQgAQABAAwEiAAIRAQMRAf/EAB8AAAEFAQEBAQEBAAAAAAAAAAABAgMEBQYHCAkKC//EALUQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+v/EAB8BAAMBAQEBAQEBAQEAAAAAAAABAgMEBQYHCAkKC//EALURAAIBAgQEAwQHBQQEAAECdwABAgMRBAUhMQYSQVEHYXETIjKBCBRCkaGxwQkjM1LwFWJy0QoWJDThJfEXGBkaJicoKSo1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoKDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uLj5OXm5+jp6vLz9PX29/j5+v/aAAwDAQACEQMRAD8A8Inmk8+T94/3j/EfWmedJ/z0f/vo0T/6+T/eP86ZQA/zpP8Ano//AH0aPOk/56P/AN9GmVo6Loeq65M0Wj6ddXrr94QRF9v1I6fjQBR86T/no/8A30aPOk/56P8A99GtHW/Dus6GV/tjS7yyD8K00RVW+h6GsugB/nSf89H/AO+jT4JpPPj/AHj/AHh/EfWoafB/r4/94fzoAJ/9fJ/vH+dMp8/+vk/3j/OmUAXdE099W1mw06Jgsl3PHApPYswUH9a+qPF3iHSPhF4S0+003TxK0hMcEAbZvIA3SO2OvIz6k18nW88ttcRz28jxTRMHSRGKsrA5BBHQg1b1TWdT1fy/7V1G8vfLzs+0TNJtz1xknHQUAfUXw+8c6Z8UdN1HS9V0xIpUTM1s7eYkiE43KcAgg/lxg180+NtEHhzxZqmkqxdLWcojHqUPK598EV9CfBbwpF4G8J3fiLxA4trm5hEsnmceRCOQD/tHqR9B1r568a63/wAJH4r1TVghRLqYuinqE6KD74AoAxafB/r4/wDeH86ZT4P9fH/vD+dABP8A6+T/AHj/ADplPn/18n+8f50ygArt/gtpltq/xK0e2vYxJArPMUYZDFEZhn2yBXEV0/w203VNX8YWdloOoHTtQkWQx3IZl2gISeV55AI/GgD1H9pvxPdi/s/DcDGOz8pbqfHWRizBQfYbc/U+1eD12PxW0fWtE8Tpa+I9UOqXpt0cTl2bCEthctz1B/OuOoAKfB/r4/8AeH86ZT4P9fH/ALw/nQAT/wCvk/3j/OmVNPDJ58n7t/vH+E+tM8mT/nm//fJoAZV7Q9Xv9C1KLUNJuGtryMEJIoBIyCD1BHQmqnkyf883/wC+TR5Mn/PN/wDvk0AaHiHXtT8RX4vdau2u7oIIxIygHaCSBwB6msyn+TJ/zzf/AL5NHkyf883/AO+TQAynwf6+P/eH86PJk/55v/3yafBDJ58f7t/vD+E+tAH/2Q==",
        c =
          t.p +
          "images/applications/store/avatar_default_full.jpg?v=valveisgoodatcaching";
      var p = t(43047),
        u = t.n(p),
        B = t(81393);
      const g = r.memo(function (e) {
        const {
            strAvatarURL: a,
            size: t = "Medium",
            className: n,
            statusStyle: s,
            statusPosition: i,
            children: A,
            ...p
          } = e,
          g = r.useMemo(() => {
            const e = [];
            return (
              a && e.push(a),
              e.push(
                (function (e) {
                  switch (e) {
                    case "X-Small":
                    case "Small":
                      return "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD//gA7Q1JFQVRPUjogZ2QtanBlZyB2MS4wICh1c2luZyBJSkcgSlBFRyB2NjIpLCBxdWFsaXR5ID0gOTAK/9sAQwADAgIDAgIDAwMDBAMDBAUIBQUEBAUKBwcGCAwKDAwLCgsLDQ4SEA0OEQ4LCxAWEBETFBUVFQwPFxgWFBgSFBUU/9sAQwEDBAQFBAUJBQUJFA0LDRQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQU/8AAEQgAIAAgAwEiAAIRAQMRAf/EAB8AAAEFAQEBAQEBAAAAAAAAAAABAgMEBQYHCAkKC//EALUQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+v/EAB8BAAMBAQEBAQEBAQEAAAAAAAABAgMEBQYHCAkKC//EALURAAIBAgQEAwQHBQQEAAECdwABAgMRBAUhMQYSQVEHYXETIjKBCBRCkaGxwQkjM1LwFWJy0QoWJDThJfEXGBkaJicoKSo1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoKDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uLj5OXm5+jp6vLz9PX29/j5+v/aAAwDAQACEQMRAD8A/P4mW5nmllmeSR3LMzMSSc1a07R73V72KzsILi9u5TiOC2RpJHPoFGSarQ/ef6n+de4fAn9oaL4D+DfGX9i6Uf8AhO9XSKDT9eZY3WxiDZcBGByTkn0JCZBxQB41qeiX+iXslnqNtdWF3H9+3uo2jkX6q2CKpgy208MsUzxyI4ZWViCDmvsr9rrUdT1j9nb4T6h8RBbH4qXUs0zMsSxXJ04hivnKoAU5MPGBg7uM7q+NpvvJ9R/OgAh+8/1P867T4POI/iz4Mc6U+u7NZtG/suPbuu8TKfKG4hct93njnmuKIltp5opYXjkRyrKykEHNWbDVbvSr63vbKaezvLeRZYbi3ZkkidTlWVhyCCMgjpQB6l+1F411nx58dPFWpa5a3mnXaXP2ZNOvXVpLKNBhYflJUY5PB5JJ6k15LN95PqP51a1PWr7WtQnvtRuLm/vrhzJNc3TtJLIx6lmbJJ9zVQCW5nhiiheSR3CqqqSSc0Af/9k=";
                    case "Medium":
                    case "MediumLarge":
                      return l;
                    case "Large":
                    case "X-Large":
                    case "FillArea":
                      return c;
                    default:
                      return (0, B.z)(e, `Unhandled size ${e}`), l;
                  }
                })(t),
              ),
              e
            );
          }, [a, t]);
        return r.createElement(
          "div",
          {
            className: (0, o.A)(
              u().avatarHolder,
              "avatarHolder",
              "no-drag",
              t,
              n,
            ),
            ...p,
          },
          r.createElement("div", {
            className: (0, o.A)(u().avatarStatus, "avatarStatus", i),
            style: s,
          }),
          r.createElement(m.c, {
            className: (0, o.A)(u().avatar, "avatar"),
            rgSources: g,
            draggable: !1,
          }),
          A,
        );
      });
      let d = class extends r.Component {
        render() {
          const {
            persona: e,
            size: a = "Medium",
            animatedAvatar: t,
            className: n,
            ...s
          } = this.props;
          let m = "";
          return (
            t && t.image_small && 0 != t.image_small.length
              ? (m = A.TS.MEDIA_CDN_COMMUNITY_URL + "images/" + t.image_small)
              : e &&
                ((m = e.avatar_url_medium),
                "Small" == a || "X-Small" == a
                  ? (m = e.avatar_url)
                  : ("Large" != a && "X-Large" != a && "FillArea" != a) ||
                    (m = e.avatar_url_full)),
            r.createElement(g, {
              strAvatarURL: m,
              size: a,
              className: (0, o.A)((0, i.rO)(e), n),
              ...s,
            })
          );
        }
      };
      d = (0, n.Cg)([s.PA], d);
      const E = (0, s.PA)((e) => {
        const { profileItem: a, className: t, bDisableAnimation: n, ...s } = e;
        if (!a || !a.image_small || 0 == a.image_small.length) return null;
        let i = n ? a.image_large : a.image_small;
        return (
          i || (i = a.image_small),
          i.startsWith("https://") ||
            (i = A.TS.MEDIA_CDN_COMMUNITY_URL + "images/" + i),
          r.createElement(
            "div",
            { className: (0, o.A)(u().avatarFrame, t, "avatarFrame"), ...s },
            r.createElement("img", { className: u().avatarFrameImg, src: i }),
          )
        );
      });
      let h = class extends r.Component {
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
            animatedAvatar: a,
            avatarFrame: t,
            children: n,
            style: s,
            bLimitProfileFrameAnimationTime: i,
            bParentHovered: o,
            ...A
          } = this.props;
          return (
            A.onClick && (s = { ...s, cursor: "pointer" }),
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
                { animatedAvatar: a, ...A },
                n,
                r.createElement(E, {
                  profileItem: t,
                  bDisableAnimation: i && !this.state.bAnimate,
                }),
              ),
            )
          );
        }
      };
      h = (0, n.Cg)([s.PA], h);
    },
  },
]);
