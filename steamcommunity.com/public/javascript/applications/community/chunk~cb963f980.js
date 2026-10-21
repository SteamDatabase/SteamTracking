/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(() => {
  (self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
    [60362],
    {
      76105: (M, L, t) => {
        "use strict";
        t.d(L, { t: () => r });
        var e = t(72609);
        const i = "fef49e7fa7e1997310d705b2a6158ff8dc1cdfeb";
        function r(m, B) {
          let l = "0000000000000000000000000000000000000000";
          typeof m == "string" ? (l = m) : m && (l = u(m) || l);
          let A = ".jpg";
          l === "0000000000000000000000000000000000000000" && (l = i),
            l.length == 44 && ((A = l.slice(-4)), (l = l.slice(0, 40)));
          let d = e.TS.AVATAR_BASE_URL;
          switch (
            (d ||
              ((d = e.TS.MEDIA_CDN_COMMUNITY_URL + "images/avatars/"),
              (d += l.slice(0, 2) + "/")),
            (d += l),
            B)
          ) {
            case "X-Small":
            case "Small":
              break;
            case "Medium":
            case "MediumLarge":
              d += "_medium";
              break;
            case "Large":
            case "X-Large":
            case "FillArea":
              d += "_full";
              break;
          }
          return (d += A), d;
        }
        function u(m) {
          return m
            ? (typeof m[Symbol.iterator] == "function"
                ? Array.from(m)
                : Object.values(m).filter((l) => typeof l == "number")
              )
                .map((l) => l.toString(16).padStart(2, "0"))
                .join("")
            : "";
        }
      },
      30986: (M, L, t) => {
        "use strict";
        t.d(L, { Ul: () => a, wm: () => P });
        var e = t(7850);
        const i =
            "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD//gA7Q1JFQVRPUjogZ2QtanBlZyB2MS4wICh1c2luZyBJSkcgSlBFRyB2NjIpLCBxdWFsaXR5ID0gOTAK/9sAQwADAgIDAgIDAwMDBAMDBAUIBQUEBAUKBwcGCAwKDAwLCgsLDQ4SEA0OEQ4LCxAWEBETFBUVFQwPFxgWFBgSFBUU/9sAQwEDBAQFBAUJBQUJFA0LDRQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQU/8AAEQgAIAAgAwEiAAIRAQMRAf/EAB8AAAEFAQEBAQEBAAAAAAAAAAABAgMEBQYHCAkKC//EALUQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+v/EAB8BAAMBAQEBAQEBAQEAAAAAAAABAgMEBQYHCAkKC//EALURAAIBAgQEAwQHBQQEAAECdwABAgMRBAUhMQYSQVEHYXETIjKBCBRCkaGxwQkjM1LwFWJy0QoWJDThJfEXGBkaJicoKSo1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoKDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uLj5OXm5+jp6vLz9PX29/j5+v/aAAwDAQACEQMRAD8A/P4mW5nmllmeSR3LMzMSSc1a07R73V72KzsILi9u5TiOC2RpJHPoFGSarQ/ef6n+de4fAn9oaL4D+DfGX9i6Uf8AhO9XSKDT9eZY3WxiDZcBGByTkn0JCZBxQB41qeiX+iXslnqNtdWF3H9+3uo2jkX6q2CKpgy208MsUzxyI4ZWViCDmvsr9rrUdT1j9nb4T6h8RBbH4qXUs0zMsSxXJ04hivnKoAU5MPGBg7uM7q+NpvvJ9R/OgAh+8/1P867T4POI/iz4Mc6U+u7NZtG/suPbuu8TKfKG4hct93njnmuKIltp5opYXjkRyrKykEHNWbDVbvSr63vbKaezvLeRZYbi3ZkkidTlWVhyCCMgjpQB6l+1F411nx58dPFWpa5a3mnXaXP2ZNOvXVpLKNBhYflJUY5PB5JJ6k15LN95PqP51a1PWr7WtQnvtRuLm/vrhzJNc3TtJLIx6lmbJJ9zVQCW5nhiiheSR3CqqqSSc0Af/9k=",
          r =
            t.p +
            "images/applications/community/avatar_default_full.jpg?v=valveisgoodatcaching",
          u =
            "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD//gA7Q1JFQVRPUjogZ2QtanBlZyB2MS4wICh1c2luZyBJSkcgSlBFRyB2NjIpLCBxdWFsaXR5ID0gODAK/9sAQwAGBAUGBQQGBgUGBwcGCAoQCgoJCQoUDg8MEBcUGBgXFBYWGh0lHxobIxwWFiAsICMmJykqKRkfLTAtKDAlKCko/9sAQwEHBwcKCAoTCgoTKBoWGigoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgo/8AAEQgAQABAAwEiAAIRAQMRAf/EAB8AAAEFAQEBAQEBAAAAAAAAAAABAgMEBQYHCAkKC//EALUQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+v/EAB8BAAMBAQEBAQEBAQEAAAAAAAABAgMEBQYHCAkKC//EALURAAIBAgQEAwQHBQQEAAECdwABAgMRBAUhMQYSQVEHYXETIjKBCBRCkaGxwQkjM1LwFWJy0QoWJDThJfEXGBkaJicoKSo1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoKDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uLj5OXm5+jp6vLz9PX29/j5+v/aAAwDAQACEQMRAD8A8Inmk8+T94/3j/EfWmedJ/z0f/vo0T/6+T/eP86ZQA/zpP8Ano//AH0aPOk/56P/AN9GmVo6Loeq65M0Wj6ddXrr94QRF9v1I6fjQBR86T/no/8A30aPOk/56P8A99GtHW/Dus6GV/tjS7yyD8K00RVW+h6GsugB/nSf89H/AO+jT4JpPPj/AHj/AHh/EfWoafB/r4/94fzoAJ/9fJ/vH+dMp8/+vk/3j/OmUAXdE099W1mw06Jgsl3PHApPYswUH9a+qPF3iHSPhF4S0+003TxK0hMcEAbZvIA3SO2OvIz6k18nW88ttcRz28jxTRMHSRGKsrA5BBHQg1b1TWdT1fy/7V1G8vfLzs+0TNJtz1xknHQUAfUXw+8c6Z8UdN1HS9V0xIpUTM1s7eYkiE43KcAgg/lxg180+NtEHhzxZqmkqxdLWcojHqUPK598EV9CfBbwpF4G8J3fiLxA4trm5hEsnmceRCOQD/tHqR9B1r568a63/wAJH4r1TVghRLqYuinqE6KD74AoAxafB/r4/wDeH86ZT4P9fH/vD+dABP8A6+T/AHj/ADplPn/18n+8f50ygArt/gtpltq/xK0e2vYxJArPMUYZDFEZhn2yBXEV0/w203VNX8YWdloOoHTtQkWQx3IZl2gISeV55AI/GgD1H9pvxPdi/s/DcDGOz8pbqfHWRizBQfYbc/U+1eD12PxW0fWtE8Tpa+I9UOqXpt0cTl2bCEthctz1B/OuOoAKfB/r4/8AeH86ZT4P9fH/ALw/nQAT/wCvk/3j/OmVNPDJ58n7t/vH+E+tM8mT/nm//fJoAZV7Q9Xv9C1KLUNJuGtryMEJIoBIyCD1BHQmqnkyf883/wC+TR5Mn/PN/wDvk0AaHiHXtT8RX4vdau2u7oIIxIygHaCSBwB6msyn+TJ/zzf/AL5NHkyf883/AO+TQAynwf6+P/eH86PJk/55v/3yafBDJ58f7t/vD+E+tAH/2Q==";
        var m = t(99412),
          B = t(90626);
        function l(x) {
          const { rgSources: D, onIncrementalError: O, alt: I, ...C } = x,
            [y, c] = (0, B.useState)(0),
            o = D[y];
          return (0, e.jsx)("img", {
            onError: (f) => {
              c((v) => v + 1), O?.(f, o, y);
            },
            alt: I,
            ...C,
            src: o,
          });
        }
        var A = t(72609),
          d = t(64238),
          j = t.n(d),
          E = t(16339),
          s = t(76105);
        function a(x) {
          const {
              avatarURL: D,
              size: O,
              statusStyle: I,
              statusPosition: C,
              className: y,
              children: c,
              isOnline: o,
              isInGame: f,
              isWatchingBroadcast: v,
              isAwayOrSnooze: S,
              alt: Q,
            } = x,
            N = [];
          return (
            D && N.push(D),
            N.push(K(O ?? "Medium")),
            (0, e.jsxs)("div", {
              className: j()(
                E.AvatarHolder,
                {
                  [E.Offline]: !o,
                  [E.Online]: o,
                  [E.InGame]: f,
                  [E.WatchingBroadcast]: v,
                  [E.AwayOrSnooze]: S,
                },
                y,
              ),
              "data-size": O,
              "data-status-position": C,
              children: [
                (0, e.jsx)("div", { className: E.AvatarStatus, style: I }),
                (0, e.jsx)(l, {
                  className: j()(E.Avatar),
                  rgSources: N,
                  draggable: !1,
                  alt: Q,
                }),
                c,
              ],
            })
          );
        }
        function n(x) {
          const {
            profileItem: D,
            className: O,
            bDisableAnimation: I,
            ...C
          } = x;
          if (!D || !D.image_small || D.image_small.length == 0) return null;
          let y = I ? D.image_large : D.image_small;
          return (
            y || (y = D.image_small),
            y.startsWith("https://") ||
              (y = Config.MEDIA_CDN_COMMUNITY_URL + "images/" + y),
            jsx("div", {
              className: classNames(styles.AvatarFrame, O),
              ...C,
              children: jsx("img", {
                className: styles.AvatarFrameImg,
                src: y,
                alt: "",
                role: "presentation",
              }),
            })
          );
        }
        function P(x) {
          const {
            playerLinkDetails: D,
            animatedAvatar: O,
            avatarFrame: I,
            size: C,
            ...y
          } = x;
          let c = (0, s.t)(D.public_data?.sha_digest_avatar, C);
          return (
            O?.image_small?.length &&
              (c = A.TS.MEDIA_CDN_COMMUNITY_URL + "images/" + O.image_small),
            (0, e.jsx)(a, {
              avatarURL: c,
              size: C,
              isOnline: D.private_data?.persona_state === m.UXk,
              isInGame: D.private_data?.game_id !== void 0,
              isWatchingBroadcast:
                D.private_data?.watching_broadcast_accountid !== void 0,
              isAwayOrSnooze:
                D.private_data?.persona_state === m.PrD ||
                D.private_data?.persona_state === m.vPz,
              ...y,
            })
          );
        }
        function g(x, D) {
          const [O, I] = useState(x !== "None");
          return (
            useEffect(() => {
              if ((I(x !== "None"), x === "None" || x === "Infinite")) return;
              let C;
              switch (x) {
                case "Short":
                  C = 2500;
                  break;
                case "Medium":
                  C = 5e3;
                  break;
                case "Long":
                  C = 1e4;
                  break;
              }
              const y = setTimeout(() => {
                I(D);
              }, C);
              return () => {
                clearTimeout(y);
              };
            }, [x, D]),
            O
          );
        }
        function W(x) {
          const {
              loopDuration: D = "Infinite",
              bParentHovered: O,
              bLimitProfileFrameAnimationTime: I,
              className: C,
              ...y
            } = x,
            [c, o] = useState(!1),
            f = g(D, c),
            v = useProfileItemsEquipped(
              y.playerLinkDetails.public_data.steamid,
            );
          return jsx("div", {
            className: C,
            onMouseEnter: () => o(!0),
            onMouseLeave: () => o(!1),
            children: jsx(P, {
              ...y,
              animatedAvatar: f ? v.data?.animated_avatar : void 0,
              children: jsx(n, {
                profileItem: v.data?.avatar_frame,
                bDisableAnimation: I && !f,
              }),
            }),
          });
        }
        function K(x) {
          switch (x) {
            case "X-Small":
            case "Small":
              return (0, A.YJ)(i);
            case "Medium":
            case "MediumLarge":
              return (0, A.YJ)(u);
            case "Large":
            case "X-Large":
            case "FillArea":
              return (0, A.YJ)(r);
          }
        }
      },
      1522: (M, L, t) => {
        "use strict";
        t.d(L, { f: () => j });
        var e = t(7850),
          i = t(3877),
          r = t(98929),
          u = t(86946),
          m = t(64238),
          B = t.n(m),
          l = t(80549),
          A = t(24660),
          d = t(3166);
        function j(s) {
          const {
              rows: a = 3,
              resize: n = "none",
              ref: P,
              value: g,
              onTextChange: W,
              onChange: K,
              disabled: x,
              variant: D,
              ...O
            } = s,
            I = (f) => {
              x || (W(f.target.value), K && K(f));
            },
            C = (0, l.f)("TextArea", D),
            y = (0, d.Qn)(),
            c = (0, u.w)({
              ...O,
              className: B()((0, i.T)(), (0, r.F)()),
              style: { resize: n },
              cursor: "text",
              disabled: x,
              variant: C,
            }),
            o = y ? E : "textarea";
          return (0, e.jsx)(o, {
            ref: P,
            ...c,
            value: g || "",
            onChange: I,
            rows: a,
            readOnly: x,
            "aria-disabled": x,
          });
        }
        function E(s) {
          return (0, e.jsx)(A.dO, { noFocusRing: !0, ...s });
        }
      },
      15252: (M, L, t) => {
        "use strict";
        t.d(L, { Ae: () => E, EY: () => d, U6: () => j });
        var e = t(7850),
          i = t(1039),
          r = t(69289),
          u = t(8928),
          m = t(64238),
          B = t.n(m),
          l = t(65274),
          A = t.n(l);
        function d(s) {
          const { as: a = "span", ref: n, className: P, ...g } = s,
            W = a;
          return (0, e.jsx)(W, {
            ref: n,
            ...(0, r.mz)({ ...g, className: B()(l.Text, P) }, E),
          });
        }
        const j = [
            {
              prop: "weight",
              responsive: !0,
              className: l.TextWeight,
              cssProperty: (s) => ["--text-weight", `var(--font-weight-${s})`],
            },
            {
              prop: "align",
              responsive: !0,
              className: l.TextAlign,
              cssProperty: "--text-align",
            },
            {
              prop: "color",
              responsive: !0,
              cssProperty: (s, a, n) => [
                "--text-color",
                (0, r.To)(s, (0, i.I)(a.contrast, n) ?? "body"),
              ],
            },
            {
              prop: "contrast",
              responsive: !0,
              cssProperty: (s, a, n) => [
                "--text-color",
                (0, r.To)((0, i.I)(a.color, n) ?? "text-body", s),
              ],
            },
            { prop: "truncate", className: l.Truncate },
            {
              prop: "lineClamp",
              responsive: !0,
              className: l.LineClamp,
              cssProperty: "--line-clamp",
            },
            {
              prop: "whiteSpace",
              className: l.WhiteSpace,
              cssProperty: "--white-space",
            },
          ],
          E = [
            ...j,
            ...u.L,
            {
              prop: "size",
              responsive: !0,
              className: (s) => l[`TextSize-${s}`],
            },
          ];
      },
      86336: (M, L, t) => {
        "use strict";
        t.d(L, { W: () => E, Y: () => d });
        var e = t(7850),
          i = t(50122),
          r = t.n(i),
          u = t(15252),
          m = t(69289),
          B = t(70182),
          l = t(3166),
          A = t(2333);
        function d(s) {
          const { underline: a = "auto", ...n } = s,
            P = (0, m.mz)({ ...n, underline: a, className: i.TextLink }, j);
          return (0, e.jsx)(A.o, { ...P });
        }
        const j = [
          ...u.Ae,
          { prop: "underline", className: (s) => i[`Underline-${s}`] },
        ];
        function E(s) {
          const { underline: a = "auto", focusable: n, navProps: P, ...g } = s,
            W = (0, l.Qn)(),
            K = n ?? P?.focusable ?? !!g.onClick,
            x = (0, e.jsx)("span", {
              role: "button",
              ...(0, m.mz)(
                { ...g, underline: a, className: i.TextLinkButton },
                j,
              ),
            });
          return W && (K || P)
            ? (0, e.jsx)(B.J, { ...(P || {}), focusable: K, children: x })
            : x;
        }
      },
      15860: (M, L, t) => {
        "use strict";
        t.d(L, { L: () => B, c: () => m });
        var e = t(75916),
          i = t(76617),
          r = t(58632),
          u = t.n(r);
        function m(l, A) {
          return new (u())(
            async (d) => {
              const j = [...d],
                E = await e.xtC.GetPlayerLinkDetails(l, { steamids: j }),
                s = new Map();
              return (
                E.Body()
                  .accounts()
                  .forEach((a) => {
                    const n = a.toObject();
                    s.set(n.public_data.steamid, n);
                  }),
                j.map((a) => s.get(a) ?? null)
              );
            },
            { maxBatchSize: 100, cache: !1, ...A },
          );
        }
        function B(l) {
          return (0, i.V)("PlayerLinkDetails", () => m(l));
        }
      },
      85978: (M, L, t) => {
        "use strict";
        t.d(L, { jn: () => j });
        var e = t(72609),
          i = t(68312),
          r = t(20117),
          u = t(88942),
          m = t(15860),
          B = t(99412);
        function l(s) {
          return (
            delete s?.private_data?.account_name,
            delete s?.public_data?.account_flags,
            delete s?.public_data?.ban_expires_time,
            delete s?.public_data?.privacy_state,
            s?.public_data?.profile_state !== B.IiA && delete s?.private_data,
            s
          );
        }
        function A(s) {
          return ["PlayerLinkDetails", s];
        }
        function d(s, a) {
          const n =
            typeof a == "number"
              ? r.b2.InitFromAccountID(a, e.TS.EUNIVERSE).ConvertTo64BitString()
              : a;
          return {
            queryKey: A(n),
            queryFn: async () => {
              if (n) {
                const P = await s.load(n);
                return l(P);
              }
              return null;
            },
            enabled: !!n,
          };
        }
        function j(s) {
          const a = (0, i.KV)(),
            n = (0, m.L)(a);
          return (0, u.I)(d(n, s));
        }
        function E(s, a) {
          a.forEach((n) => {
            n?.public_data?.steamid &&
              s.setQueryData(A(n.public_data.steamid), n);
          });
        }
      },
      72524: (M, L, t) => {
        "use strict";
        t.d(L, { R: () => P, h: () => n });
        var e = t(7850),
          i = t(20476),
          r = t(90626),
          u = t(86067),
          m = t(26072),
          B = t(46085),
          l = t(30770),
          A = t.n(l),
          d = t(19298),
          j = t(1522),
          E = t(68031),
          s = t(75083);
        const a = [
          [i.HH, "#moderation_escalationlevel_any"],
          [i.lp, "#moderation_escalationlevel_supervisor"],
          [i.PV, "#moderation_escalationlevel_valve"],
        ];
        function n(g) {
          return (g?.required_moderator_level ?? i.HH) < i.PV;
        }
        function P(g) {
          const { reportedContentID: W, onClose: K } = g,
            x = g.eCurrentLevel ?? i.HH,
            D = a.filter(([f]) => f > x),
            [O, I] = (0, r.useState)(i.PV),
            C = (0, B.lY)(W),
            [y, c] = (0, r.useState)(""),
            o = async () => {
              await C.mutateAsync({ eNewLevel: O, strNote: y }), K();
            };
          return (0, e.jsxs)(d.Z, {
            className: A().EscalateSubjectDialogCtn,
            children: [
              (0, e.jsx)(d.Z, {
                children: u.T.Localize("#moderation_escalation_description"),
              }),
              (0, e.jsx)("select", {
                className: A().EscalationLevelSelect,
                value: O,
                onChange: (f) => I(parseInt(f.target.value)),
                children: D.map(([f, v]) =>
                  (0, e.jsx)(
                    "option",
                    { value: f, children: u.T.Localize(v) },
                    f,
                  ),
                ),
              }),
              (0, e.jsx)("label", {
                children: u.T.Localize("#moderation_escalation_escalationnote"),
              }),
              (0, e.jsx)(j.f, { onTextChange: c, value: y }),
              (0, e.jsxs)(E.s, {
                direction: "row",
                justify: "end",
                gap: "2",
                marginTop: "2",
                children: [
                  (0, e.jsx)(s.$, {
                    color: "dull",
                    onClick: K,
                    children: m.u.Localize("#moderation_cancel"),
                  }),
                  (0, e.jsx)(s.$, {
                    onClick: o,
                    disabled: D.length == 0,
                    loading: C.isPending,
                    children: u.T.Localize("#moderation_escalation_escalate"),
                  }),
                ],
              }),
            ],
          });
        }
      },
      14432: (M, L, t) => {
        "use strict";
        t.d(L, { F: () => j });
        var e = t(7850),
          i = t(86392),
          r = t(90626),
          u = t(26072),
          m = t(59884),
          B = t.n(m),
          l = t(24660),
          A = t(19298),
          d = t(66243);
        function j(E) {
          const [s, a] = (0, r.useState)(null),
            [n, P] = (0, r.useState)([]),
            [g, W] = (0, r.useState)(!1),
            [K, x] = (0, r.useState)(!1);
          let D = E.reasons;
          for (const c of n) D = D[c].children;
          const O = s !== null ? (0, i.V$)(s) : null,
            I = s !== null ? (0, i.GA)(s) : null,
            C = () => {
              s !== null
                ? a(null)
                : n.length === 0
                  ? E.onSelect(null)
                  : P(n.slice(0, -1));
            },
            y = () => {
              let c = s;
              c !== null &&
                (g && (0, i.V$)(c) !== null && (c = (0, i.V$)(c)),
                K && (0, i.GA)(c) !== null && (c = (0, i.GA)(c)),
                E.onSelect(c));
            };
          return (0, e.jsxs)("div", {
            children: [
              s === null &&
                (0, e.jsxs)(e.Fragment, {
                  children: [
                    (0, e.jsx)("div", {
                      className: B().BlockList,
                      children: D.map((c, o) => {
                        const f = () => {
                          if ((0, i.Ju)(c)) {
                            const v = [...n];
                            v.push(o), P(v);
                          } else if ((0, i.X$)(c))
                            (0, i.V$)(c.value) || (0, i.GA)(c.value)
                              ? a(c.value)
                              : E.onSelect(c.value);
                          else throw new Error("This should be unreachable.");
                        };
                        return (0, i.Ur)(c)
                          ? (0, e.jsx)(
                              l.Ii,
                              {
                                className: B().BlockListItem,
                                href: c.url,
                                children: u.u.Localize(c.strLocToken),
                              },
                              c.url,
                            )
                          : (0, e.jsxs)(
                              A.Z,
                              {
                                onActivate: f,
                                className: B().BlockListItem,
                                children: [
                                  (0, e.jsx)("span", {
                                    children: (0, i.Ju)(c)
                                      ? u.u.Localize(c.strLocToken)
                                      : (0, i.Jt)(c.value),
                                  }),
                                  (0, i.Ju)(c) &&
                                    (0, e.jsx)("span", { children: "\u25B6" }),
                                ],
                              },
                              o,
                            );
                      }),
                    }),
                    (0, e.jsx)(d.n9, { onClick: C, children: "Back" }),
                  ],
                }),
              s !== null &&
                (0, e.jsxs)("div", {
                  className: B().BlockList,
                  children: [
                    (0, e.jsx)("div", {
                      className: B().BlockListItem,
                      children: (0, i.Jt)(s),
                    }),
                    O !== null &&
                      (0, e.jsxs)("label", {
                        children: [
                          (0, e.jsx)("input", {
                            type: "checkbox",
                            checked: g,
                            onChange: (c) => W(c.target.checked),
                          }),
                          " Targeted at women",
                        ],
                      }),
                    I !== null &&
                      (0, e.jsxs)("label", {
                        children: [
                          (0, e.jsx)("input", {
                            type: "checkbox",
                            checked: K,
                            onChange: (c) => x(c.target.checked),
                          }),
                          " Deepfake",
                        ],
                      }),
                    (0, e.jsxs)("div", {
                      className: B().BottomButtons,
                      children: [
                        (0, e.jsx)(d.n9, { onClick: C, children: "Back" }),
                        (0, e.jsx)(d.n9, { onClick: y, children: "Continue" }),
                      ],
                    }),
                  ],
                }),
            ],
          });
        }
      },
      13725: (M, L, t) => {
        "use strict";
        t.d(L, { B8: () => W, lX: () => C });
        var e = t(7850),
          i = t(30986),
          r = t(15252),
          u = t(86336),
          m = t(85978),
          B = t(16114),
          l = t(26072),
          A = t(80151),
          d = t(49527),
          j = t(85599),
          E = t(3166),
          s = t(86067),
          a = t(20609),
          n = t.n(a),
          P = t(46085),
          g = t(86392);
        function W(c) {
          const { reportedContentID: o } = c;
          return o ? (0, e.jsx)(D, { ...c }) : (0, e.jsx)(K, {});
        }
        function K(c) {
          return (0, e.jsx)("div", {
            children: (0, e.jsxs)("table", {
              className: n().ModerationTable,
              children: [
                (0, e.jsx)(x, {}),
                (0, e.jsx)("tbody", {
                  children: (0, e.jsx)("tr", {
                    children: (0, e.jsx)("td", {
                      colSpan: 4,
                      children: (0, e.jsx)(r.EY, {
                        size: "2",
                        children: s.T.Localize("#subjectauditlog_noentries"),
                      }),
                    }),
                  }),
                }),
              ],
            }),
          });
        }
        function x() {
          return (0, e.jsxs)(e.Fragment, {
            children: [
              (0, e.jsxs)("colgroup", {
                children: [
                  (0, e.jsx)("col", { className: n().DateCol }),
                  (0, e.jsx)("col", { className: n().ActorCol }),
                  (0, e.jsx)("col", { className: n().ActionCol }),
                  (0, e.jsx)("col", {}),
                ],
              }),
              (0, e.jsx)("thead", {
                children: (0, e.jsxs)("tr", {
                  children: [
                    (0, e.jsx)("th", {
                      children: (0, e.jsx)(r.EY, {
                        size: "2",
                        weight: "heavy",
                        contrast: "description",
                        children: "Date",
                      }),
                    }),
                    (0, e.jsx)("th", {
                      children: (0, e.jsx)(r.EY, {
                        size: "2",
                        weight: "heavy",
                        contrast: "description",
                        children: "Actor",
                      }),
                    }),
                    (0, e.jsx)("th", {
                      children: (0, e.jsx)(r.EY, {
                        size: "2",
                        weight: "heavy",
                        contrast: "description",
                        children: "Action",
                      }),
                    }),
                    (0, e.jsx)("th", {
                      children: (0, e.jsx)(r.EY, {
                        size: "2",
                        weight: "heavy",
                        contrast: "description",
                        children: "Details",
                      }),
                    }),
                  ],
                }),
              }),
            ],
          });
        }
        function D(c) {
          const o = (0, P.Kt)(c.reportedContentID),
            f = o?.data?.entries?.length ?? 0,
            v = o.data?.entries ?? [];
          return (
            v.sort((S, Q) => Q.timestamp - S.timestamp),
            (0, e.jsx)("div", {
              children:
                f > 0 &&
                (0, e.jsxs)("table", {
                  className: n().ModerationTable,
                  children: [
                    (0, e.jsx)(x, {}),
                    (0, e.jsxs)("tbody", {
                      children: [
                        o === void 0 &&
                          (0, e.jsx)("tr", {
                            children: (0, e.jsx)("td", {
                              colSpan: 4,
                              children: (0, e.jsx)(r.EY, {
                                size: "2",
                                children: s.T.Localize(
                                  "#subjectauditlog_noentries",
                                ),
                              }),
                            }),
                          }),
                        o &&
                          (0, e.jsxs)(e.Fragment, {
                            children: [
                              o.isLoading &&
                                (0, e.jsx)("tr", {
                                  children: (0, e.jsx)("td", {
                                    colSpan: 4,
                                    children: (0, e.jsx)(j.t, {}),
                                  }),
                                }),
                              o.isError &&
                                (0, e.jsx)("tr", {
                                  children: (0, e.jsx)("td", {
                                    colSpan: 4,
                                    children: (0, e.jsx)(r.EY, {
                                      size: "2",
                                      children: s.T.Localize(
                                        "#subjectauditlog_error",
                                      ),
                                    }),
                                  }),
                                }),
                              o.isSuccess &&
                                f === 0 &&
                                (0, e.jsx)("tr", {
                                  children: (0, e.jsx)("td", {
                                    colSpan: 4,
                                    children: (0, e.jsx)(r.EY, {
                                      size: "2",
                                      children: s.T.Localize(
                                        "#subjectauditlog_noentries",
                                      ),
                                    }),
                                  }),
                                }),
                              o.isSuccess &&
                                f > 0 &&
                                v.map((S) =>
                                  (0, e.jsx)(O, { entry: S }, S.timestamp),
                                ),
                            ],
                          }),
                      ],
                    }),
                  ],
                }),
            })
          );
        }
        function O(c) {
          const { entry: o } = c,
            f = (0, m.jn)(o.actor_steamid);
          if (!f.isSuccess || !f.data) return null;
          const v = f.data.public_data?.persona_name;
          return (0, e.jsxs)("tr", {
            children: [
              (0, e.jsx)("td", {
                children: (0, e.jsx)(r.EY, {
                  size: "2",
                  children: (0, B.P0)(o.timestamp, !1, ""),
                }),
              }),
              (0, e.jsx)("td", {
                children: (0, e.jsxs)("div", {
                  className: n().ReporterCell,
                  children: [
                    (0, e.jsx)(u.Y, {
                      href: `${E.TS.COMMUNITY_BASE_URL}profiles/${o.actor_steamid}`,
                      children: (0, e.jsx)(r.EY, {
                        size: "2",
                        truncate: !0,
                        title: v,
                        className: n().ReporterName,
                        children: v,
                      }),
                    }),
                    (0, e.jsx)(u.Y, {
                      size: "2",
                      href: `${E.TS.COMMUNITY_BASE_URL}moderation/activity/${o.actor_steamid}`,
                      children: "(activity)",
                    }),
                  ],
                }),
              }),
              (0, e.jsx)("td", {
                children: (0, e.jsxs)(r.EY, {
                  size: "2",
                  children: [
                    (0, g.fg)(o.action),
                    o.automated_action &&
                      (0, e.jsx)(e.Fragment, { children: "\xA0(Automated)" }),
                  ],
                }),
              }),
              (0, e.jsx)("td", {
                children: (0, e.jsx)(r.EY, {
                  as: "div",
                  size: "2",
                  children: (0, e.jsx)(I, {
                    eAction: o.action,
                    jsonData: o.additional_json_data,
                  }),
                }),
              }),
            ],
          });
        }
        function I(c) {
          const { eAction: o, jsonData: f } = c;
          let v = {};
          f && (v = JSON.parse(f));
          const S = v.report_id
            ? (0, e.jsxs)("span", { children: ["Report ID: ", v.report_id] })
            : null;
          switch (o) {
            case A.Hd:
              return S;
            case A._F:
              return (0, e.jsxs)(e.Fragment, {
                children: [
                  "Reason: ",
                  (0, g.Jt)(v.reason),
                  v.resolution !== d.CC &&
                    v.resolution !== d.S6 &&
                    (0, e.jsxs)(e.Fragment, {
                      children: [
                        (0, e.jsx)("br", {}),
                        "Resolution: ",
                        (0, g.l)(v.resolution),
                      ],
                    }),
                  v.sanctions &&
                    (0, e.jsxs)(e.Fragment, {
                      children: [
                        (0, e.jsx)("br", {}),
                        "Sanctions: ",
                        v.sanctions.map(g.cB).join(", "),
                      ],
                    }),
                ],
              });
            case A.Nu:
              return S;
            case A.XP:
              return (0, e.jsx)(e.Fragment, {
                children: JSON.stringify(v, null, "	"),
              });
            case A.YI:
              return (0, e.jsxs)(e.Fragment, {
                children: ["New level: ", (0, g.ar)(v.level)],
              });
            case A._7:
              return S;
            default:
              return null;
          }
        }
        function C(c) {
          const { subject: o } = c,
            f = o && o.reports && o.reports.length > 0,
            v = [...(o?.reports ?? [])].sort(
              (S, Q) => (Q.time_reported ?? 0) - (S.time_reported ?? 0),
            );
          return (0, e.jsxs)("table", {
            className: n().ModerationTable,
            children: [
              (0, e.jsxs)("colgroup", {
                children: [
                  (0, e.jsx)("col", { className: n().DateCol }),
                  (0, e.jsx)("col", { className: n().ReporterCol }),
                  (0, e.jsx)("col", { className: n().StatusCol }),
                  (0, e.jsx)("col", {}),
                ],
              }),
              (0, e.jsx)("thead", {
                children: (0, e.jsxs)("tr", {
                  children: [
                    (0, e.jsx)("th", {
                      children: (0, e.jsx)(r.EY, {
                        size: "2",
                        weight: "heavy",
                        contrast: "description",
                        children: "Date",
                      }),
                    }),
                    (0, e.jsx)("th", {
                      children: (0, e.jsx)(r.EY, {
                        size: "2",
                        weight: "heavy",
                        contrast: "description",
                        children: "Reporter",
                      }),
                    }),
                    (0, e.jsx)("th", {
                      children: (0, e.jsx)(r.EY, {
                        size: "2",
                        weight: "heavy",
                        contrast: "description",
                        children: "Status",
                      }),
                    }),
                    (0, e.jsx)("th", {
                      children: (0, e.jsx)(r.EY, {
                        size: "2",
                        weight: "heavy",
                        contrast: "description",
                        children: "Reason",
                      }),
                    }),
                  ],
                }),
              }),
              (0, e.jsxs)("tbody", {
                children: [
                  !f &&
                    (0, e.jsx)("tr", {
                      children: (0, e.jsx)("td", {
                        colSpan: 4,
                        children: (0, e.jsx)(r.EY, {
                          size: "2",
                          children: s.T.Localize(
                            "#contentreportslist_noreports",
                          ),
                        }),
                      }),
                    }),
                  f && v.map((S) => (0, e.jsx)(y, { report: S }, S.report_id)),
                ],
              }),
            ],
          });
        }
        function y(c) {
          const { report: o } = c,
            f = (0, m.jn)(o.reporter_steamid);
          if (!f.isSuccess || !f.data?.public_data) return null;
          const v = !!o.time_disputed && o.dispute_resolved === d.z_,
            S =
              o.resolved !== d.z_ &&
              (!o.time_disputed || o.dispute_resolved !== d.z_),
            Q = o.time_dispute_resolved !== 0,
            N = o.resolved === d.CC,
            _ = f.data.public_data.persona_name;
          return (0, e.jsxs)("tr", {
            children: [
              (0, e.jsx)("td", {
                children: (0, e.jsx)(r.EY, {
                  size: "2",
                  children: (0, B.P0)(o.time_reported, !1, ""),
                }),
              }),
              (0, e.jsx)("td", {
                children: (0, e.jsxs)("div", {
                  className: n().ReporterCell,
                  children: [
                    (0, e.jsx)("a", {
                      href: `${E.TS.COMMUNITY_BASE_URL}profiles/${o.reporter_steamid}`,
                      children: (0, e.jsx)(i.wm, {
                        playerLinkDetails: f.data,
                        size: "X-Small",
                        alt: "Reporter",
                      }),
                    }),
                    (0, e.jsx)(u.Y, {
                      href: `${E.TS.COMMUNITY_BASE_URL}profiles/${o.reporter_steamid}`,
                      children: (0, e.jsx)(r.EY, {
                        title: _,
                        size: "2",
                        truncate: !0,
                        className: n().ReporterName,
                        children: _,
                      }),
                    }),
                  ],
                }),
              }),
              (0, e.jsx)("td", {
                children: (0, e.jsxs)(r.EY, {
                  as: "div",
                  size: "2",
                  children: [
                    !S &&
                      (0, e.jsx)("span", {
                        children: l.u.Localize(
                          "#moderation_resolutionstatus_pending",
                        ),
                      }),
                    N &&
                      !v &&
                      !Q &&
                      (0, e.jsx)("span", {
                        children: s.T.Localize(
                          "#contentreportslist_acquitted_at",
                          (0, B.P0)(o.time_resolved, !1, ""),
                        ),
                      }),
                    S &&
                      !N &&
                      !v &&
                      !Q &&
                      (0, e.jsx)("span", {
                        children: s.T.Localize(
                          "#contentreportslist_resolved_at",
                          (0, B.P0)(o.time_resolved, !1, ""),
                        ),
                      }),
                    v &&
                      !Q &&
                      (0, e.jsx)("span", {
                        children: s.T.Localize(
                          "#contentreportslist_disputed_at",
                          (0, B.P0)(o.time_disputed, !1, ""),
                        ),
                      }),
                    Q &&
                      (0, e.jsx)("span", {
                        children: s.T.Localize(
                          "#contentreportslist_dispute_resolved_at",
                          (0, B.P0)(o.time_dispute_resolved, !1, ""),
                        ),
                      }),
                  ],
                }),
              }),
              (0, e.jsxs)("td", {
                children: [
                  (0, e.jsx)(r.EY, {
                    as: "div",
                    size: "2",
                    children: (0, g.Jt)(o.report_reason),
                  }),
                  !!o.report_text &&
                    (0, e.jsxs)(r.EY, {
                      as: "div",
                      size: "2",
                      marginTop: "1",
                      children: [
                        (0, e.jsx)(r.EY, {
                          size: "1",
                          weight: "heavy",
                          contrast: "description",
                          children: "Report: ",
                        }),
                        o.report_text,
                      ],
                    }),
                  !!o.time_disputed &&
                    !!o.dispute_details &&
                    (0, e.jsxs)(r.EY, {
                      as: "div",
                      size: "2",
                      marginTop: "1",
                      children: [
                        (0, e.jsx)(r.EY, {
                          size: "1",
                          weight: "heavy",
                          contrast: "description",
                          children: "Dispute: ",
                        }),
                        o.dispute_details,
                      ],
                    }),
                ],
              }),
            ],
          });
        }
      },
      46085: (M, L, t) => {
        "use strict";
        t.d(L, {
          EC: () => Q,
          KQ: () => S,
          Kt: () => I,
          Ky: () => g,
          N8: () => y,
          OI: () => a,
          YL: () => c,
          c3: () => N,
          lY: () => C,
          w3: () => K,
          wy: () => f,
          y4: () => o,
        });
        var e = t(72604),
          i = t(35038),
          r = t(98112),
          u = t(16277),
          m = t(68312),
          B = t(88942),
          l = t(29385),
          A = t(61739),
          d = t(86392);
        const j = "get_reported_content",
          E = "get_reported_content_by_id",
          s = "get_reported_content_audit_log",
          a = (_) => [j, JSON.stringify(_)],
          n = (_) => [E, _],
          P = (_) => [s, _];
        async function g(_, p) {
          return Promise.all([
            _.invalidateQueries({ queryKey: [j], exact: !1 }),
            _.invalidateQueries({ queryKey: n(p) }),
            _.invalidateQueries({ queryKey: P(p) }),
          ]);
        }
        function W(_, p) {
          return {
            queryKey: a(p),
            enabled: (0, d.NX)(p),
            queryFn: async () => {
              const R = i.w.Init(u.Mw);
              R.Body().set_coordinates(u.UC.fromObject(p));
              const h = await u.fL.GetReportedContent(_, R);
              if (!h.BSuccess())
                throw new Error(
                  "Failed in GetReportedContent, EResult: " + h.GetEResult(),
                );
              return h.Body().toObject();
            },
          };
        }
        function K(_) {
          const p = (0, m.KV)();
          return (0, B.I)(W(p, _));
        }
        function x(_, p) {
          return {
            queryKey: n(p),
            queryFn: async () => {
              const R = CProtoBufMsg.Init(
                CContentModeration_GetReportedContentByID_Request,
              );
              R.Body().set_reported_content_id(p);
              const h = await ContentModerationService.GetReportedContentByID(
                _,
                R,
              );
              if (!h.BSuccess())
                throw new Error(
                  "Failed in GetReportedContentByID, EResult: " +
                    h.GetEResult(),
                );
              return h.Body().toObject();
            },
          };
        }
        function D(_) {
          const p = useActiveServiceTransport();
          return useQuery(x(p, _));
        }
        function O(_, p) {
          return {
            queryKey: P(p),
            queryFn: async () => {
              if (!p) return;
              const R = i.w.Init(u.v5);
              return (
                R.Body().set_reported_content_id(p),
                (await u.fL.GetAuditLogByID(_, R)).Body().toObject()
              );
            },
          };
        }
        function I(_) {
          const p = (0, m.KV)();
          return (0, B.I)(O(p, _));
        }
        function C(_) {
          const p = (0, m.KV)(),
            R = (0, l.jE)();
          return (0, A.n)({
            mutationFn: async (h) => {
              const T = i.w.Init(u.Qi);
              T.Body().set_reported_content_id(_),
                T.Body().set_new_level(h.eNewLevel),
                h.eReason && T.Body().set_reason(h.eReason),
                h.strNote && T.Body().set_note(h.strNote);
              const U = await u.fL.EscalateSubjectByID(p, T);
              if (U.GetEResult() !== e.R)
                throw new Error(`Failed to escalate subject: ${U.GetEMsg()}`);
            },
            onSuccess: async () => {
              await Promise.all([
                g(R, _),
                R.invalidateQueries({ queryKey: ["get_claimed"] }),
                R.invalidateQueries({ queryKey: ["get_subject_overview"] }),
              ]);
            },
          });
        }
        function y() {
          const _ = (0, m.KV)(),
            p = (0, l.jE)();
          return (0, A.n)({
            mutationFn: async (R) => {
              const h = i.w.Init(u.Nr);
              h.Body().set_reported_content_id(R.reportedContentID);
              const T = await u.fL.SustainModerationByID(_, h);
              if (!T.BSuccess()) throw new Error("EResult " + T.GetEResult());
            },
            onSuccess: async (R, h) => {
              await g(p, h.reportedContentID),
                await p.invalidateQueries({ queryKey: ["get_claimed"] });
            },
          });
        }
        function c(_) {
          const p = (0, l.jE)(),
            R = (0, m.KV)();
          return (0, A.n)({
            mutationKey: ["release_subject", ..._],
            mutationFn: async () => {
              const h = i.w.Init(u.GD);
              for (const U of _) {
                const z = new u.F9();
                z.set_reported_content_id(U),
                  h.Body().add_subjects_to_release(z);
              }
              const T = await u.fL.ReleaseSubjects(R, h);
              if (!T.BSuccess()) throw new Error("EResult " + T.GetEResult());
            },
            onSuccess: async () => {
              await Promise.all([
                p.invalidateQueries({ queryKey: ["get_claimed"] }),
                p.invalidateQueries({ queryKey: ["get_subject_overview"] }),
                ..._.map((h) => g(p, h)),
              ]);
            },
          });
        }
        function o(_, p) {
          const R = (0, m.KV)(),
            h = (0, l.jE)();
          return (0, A.n)({
            mutationFn: async () => {
              const T = i.w.Init(u.LW);
              T.Body().set_reported_content_id(_), T.Body().set_details(p);
              const U = await u.fL.OwnerDisputeModeration(R, T);
              if (!U.BSuccess()) throw new Error("EResult " + U.GetEResult());
            },
            onSuccess: async () => {
              await g(h, _);
            },
          });
        }
        function f(_, p) {
          const R = (0, l.jE)(),
            h = (0, m.KV)();
          return (0, A.n)({
            mutationFn: async () => {
              const T = i.w.Init(u.ps);
              T.Body().set_reported_content_id(_),
                T.Body().set_owner_dispute_details(p);
              const U = await u.fL.UpdateSubjectByID(h, T);
              if (!U.BSuccess()) throw new Error("EResult " + U.GetEResult());
            },
            onSuccess: async () => {
              await g(R, _);
            },
          });
        }
        function v(_, p) {
          return {
            queryKey: ["reporterstats", p],
            queryFn: async () => {
              const R = i.w.Init(u.KD);
              R.Body().set_steamid(p);
              const h = await u.fL.GetReporterStats(_, R);
              if (!h.BSuccess()) throw new Error("EResult " + h.GetEResult());
              return h.Body().toObject();
            },
          };
        }
        function S(_) {
          const p = (0, m.KV)();
          return (0, B.I)(v(p, _));
        }
        function Q(_, p, R) {
          const h = (0, m.KV)(),
            T = (0, l.jE)();
          return (0, A.n)({
            mutationFn: async (U) => {
              const z = i.w.Init(r.Er);
              z.Body().set_steamid(_),
                z.Body().set_comment_thread_id(p),
                z.Body().set_gidcomment(R),
                z.Body().set_reason(U.reason),
                z.Body().set_note(U.message);
              for (const b of U.sanctions) {
                const G = new r.u6();
                G.set_sanction(b.sanction),
                  b.days && G.set_days(b.days),
                  z.Body().add_sanctions(G);
              }
              const F = await r.BE.SanctionComment(h, z);
              if (!F.BSuccess())
                throw new Error(
                  `SanctionComment failed. EResult: ${F.GetEResult()} (${F.GetErrorMessage()})`,
                );
            },
            onSuccess: async () => {
              await T.invalidateQueries({ queryKey: ["get_claimed"] });
            },
          });
        }
        function N(_, p, R) {
          const h = (0, m.KV)(),
            T = (0, l.jE)();
          return (0, A.n)({
            mutationFn: async () => {
              const U = i.w.Init(r.RX);
              U.Body().set_steamid(_),
                U.Body().set_comment_thread_id(p),
                U.Body().set_gidcomment(R),
                U.Body().set_report_action(r.du.Pn),
                U.Body().set_resolve(!0),
                await r.Vi.UpdateCommentReportState(h, U);
            },
            onSuccess: async () => {
              await T.invalidateQueries({ queryKey: ["get_claimed"] });
            },
          });
        }
      },
      76617: (M, L, t) => {
        "use strict";
        t.d(L, { V: () => A });
        function e(d) {
          return Object.prototype.toString.call(d) === "[object Object]";
        }
        function i(d) {
          if (!e(d)) return !1;
          const j = d.constructor;
          if (typeof j > "u") return !0;
          const E = j.prototype;
          return !(
            !e(E) || !Object.prototype.hasOwnProperty.call(E, "isPrototypeOf")
          );
        }
        function r(...d) {
          return JSON.stringify(d, (j, E) => {
            if (i(E)) {
              const s = {};
              return (
                Object.keys(E)
                  .sort()
                  .forEach((a) => {
                    s[a] = E[a];
                  }),
                s
              );
            }
            return E;
          });
        }
        var u = t(90626),
          m = t(7850);
        const B = (0, u.createContext)({ instances: {}, factories: {} });
        function l(d) {
          const { name: j, fnFactory: E, children: s } = d,
            a = React.useContext(B),
            [n] = useState({}),
            P = useMemo(
              () => ({
                instances: n,
                factories: { ...a.factories, [j]: E },
                parent: a,
              }),
              [n, j, a],
            );
          return jsx(B.Provider, { value: P, children: s });
        }
        function A(d, j) {
          const E = (0, u.useContext)(B),
            s = typeof d == "string" ? d : r(...d);
          let a = E;
          for (; a; ) {
            if (s in a.instances) return a.instances[s];
            if (s in a.factories) break;
            a = a.parent;
          }
          const P = (a?.factories[s] ?? j)();
          return ((a ?? E).instances[s] = P), P;
        }
      },
      66243: (M, L, t) => {
        "use strict";
        t.d(L, { Oh: () => j, n9: () => A, sP: () => m });
        var e = t(7850),
          i = t(24660),
          r = t(44375),
          u = t.n(r);
        function m(s) {
          const { children: a, ...n } = s;
          return (0, e.jsx)(i.fu, {
            className: r.GreenButton,
            type: "button",
            ...n,
            children: (0, e.jsx)("span", { children: a }),
          });
        }
        function B(s) {
          const { children: a, ...n } = s;
          return jsx(FocusableButton, {
            className: styles.GreenButton,
            type: "submit",
            ...n,
            children: jsx("span", { children: a }),
          });
        }
        function l(s) {
          const { children: a, ...n } = s;
          return jsx(FocusableAnchor, {
            className: styles.GreenButton,
            ...n,
            children: jsx("span", { children: a }),
          });
        }
        function A(s) {
          const { children: a, ...n } = s;
          return (0, e.jsx)(i.fu, {
            className: r.BlueButton,
            type: "button",
            ...n,
            children: (0, e.jsx)("span", { children: a }),
          });
        }
        function d(s) {
          const { children: a, ...n } = s;
          return jsx(FocusableAnchor, {
            className: styles.BlueButton,
            ...n,
            children: jsx("span", { children: a }),
          });
        }
        function j(s) {
          const { children: a, ...n } = s;
          return (0, e.jsx)(i.fu, {
            className: r.GreyButton,
            type: "button",
            ...n,
            children: (0, e.jsx)("span", { children: a }),
          });
        }
        function E(s) {
          const { children: a, ...n } = s;
          return jsx(FocusableAnchor, {
            className: styles.GreyButton,
            ...n,
            children: jsx("span", { children: a }),
          });
        }
      },
      16339: (M) => {
        M.exports = {
          AvatarHolder: "_1_sHcxv9rQdANehiviVZR4",
          Avatar: "_3qaudpkfSKoxlwfA-deQLX",
          Offline: "_2G4b7NcQECHtFR_D28hqQG",
          Online: "_2-QtgoeBaZrzBPhoKaud5x",
          AvatarStatus: "_3pbKzT087jaL2EeQO1qsaR",
          InGame: "_2K3Q_r66P06VLgIPo-DYsv",
          AwayOrSnooze: "_3VrE4NMh7NJt0aKikAbOA3",
          WatchingBroadcast: "FhCJhs583_Ocqm0UT9y_d",
          AvatarFrame: "_3ZPXpi9X8K-n17XiGgTMdU",
          AvatarFrameImg: "Uk4DBWxeyo7Tn8SAl8afe",
        };
      },
      65274: (M) => {
        M.exports = {
          Text: "f6hU22EA7Z8peFWZVBJU",
          Truncate: "_2tXpWMxzSX3lf_9_EFUzmJ",
          "TextSize-1": "NUSSU36hkPXb7VdM8HFef",
          "TextSize-2": "_1HTEiDPVrmM0RUnp3DzkXW",
          "TextSize-3": "_1maNP9UvDekHzld1kwwQnw",
          "TextSize-4": "mGlMCg85s0ULA8kYCZzMB",
          "TextSize-5": "_2MGI1O3WXMHKcWkSFCf6Bz",
          "TextSize-6": "_3kpvs1OYmjREjAE9RONmZm",
          "TextSize-7": "_3RzzHMo4NUK3RIl__o-aYU",
          "TextSize-8": "_3KRhxZU1kR1ArBuZyY_ib3",
          "TextSize-9": "_3O17p9mMWHcy_sU-_IPM6R",
          TextWeight: "_3KfHV-wUo5sKXQAsJZO5Uw",
          TextAlign: "_310d_LkZp2K-i9ZY8r2B_c",
          LineClamp: "_3z4FSJhGOOHIOqRI6ZqJ_H",
          WhiteSpace: "FYJ4NYxpWeIha0N1-jUcm",
        };
      },
      50122: (M) => {
        M.exports = {
          TextLink: "_1DLGHwAfYnbFVIwbZjO2cn",
          TextLinkButton: "_30P9kUCljAZzX5fl1DHGJe",
          Truncate: "_1FVRWG5uD8VhzoEiOZWrEo",
          "Underline-always": "_3ASRyX4FTT_eMM5S5yrkwK",
          "Underline-never": "_1gsOIvG4APXjSra-_55rdz",
          "Underline-auto": "_2OgYmw12nDHXtyT9za9yzL",
          "Underline-hover": "_3RITvcDUZq-hpnXRpiayfs",
        };
      },
      30770: (M) => {
        M.exports = {
          EscalateSubjectDialogCtn: "_2JObmr3sTdkGUMl1qy7pFq",
          BottomButtons: "_3ismg57mYPglYuxYD8MyWH",
          EscalationLevelSelect: "eM6-NVA-Wty4aAN1I5edn",
          ReasonTextArea: "_2Y0347paZ_xn2vI7jgBpkJ",
        };
      },
      59884: (M) => {
        M.exports = {
          BlockList: "F2uRfcfN3gZAD8WCNOVq6",
          BlockListItem: "eti_An9vsSQWyfrrZgqZO",
          DefaultItem: "zvsH8nLNLnBES_qChiT1v",
        };
      },
      20609: (M) => {
        M.exports = {
          ModerationTable: "B_CTlZJTCpB51h5D3KWu_",
          DateCol: "aLI0z0IY1ZCOHVZ6SLNx7",
          ReporterCol: "d_bWuY3Uyq1mDx69WuZxS",
          StatusCol: "_3Obdj5melGcGBcTf3eRBE3",
          ActorCol: "mznx-al2cLLnbFgi_8eth",
          ActionCol: "_pcwGAPcwJyBzTt8ykeKF",
          ReporterCell: "_1eEXuIiBlAL6-KQEr8s7iq",
          ReporterName: "_3gF45ikEXjHH4wFKEIGFSB",
        };
      },
      44375: (M) => {
        M.exports = {
          GreenButton: "_23fSnYfnMQqkgm3ROkJhrO",
          GreyButton: "_15dbpkIdbzeDJlZYQEhn1d",
          BlueButton: "_14GZWzJgooP0mbfTvEQnjA",
        };
      },
    },
  ]);
})();
