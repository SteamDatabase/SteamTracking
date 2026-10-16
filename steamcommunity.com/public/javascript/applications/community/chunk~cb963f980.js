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
        function r(A, B) {
          let u = "0000000000000000000000000000000000000000";
          typeof A == "string" ? (u = A) : A && (u = E(A) || u);
          let p = ".jpg";
          u === "0000000000000000000000000000000000000000" && (u = i),
            u.length == 44 && ((p = u.slice(-4)), (u = u.slice(0, 40)));
          let d = e.TS.AVATAR_BASE_URL;
          switch (
            (d ||
              ((d = e.TS.MEDIA_CDN_COMMUNITY_URL + "images/avatars/"),
              (d += u.slice(0, 2) + "/")),
            (d += u),
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
          return (d += p), d;
        }
        function E(A) {
          return A
            ? (typeof A[Symbol.iterator] == "function"
                ? Array.from(A)
                : Object.values(A).filter((u) => typeof u == "number")
              )
                .map((u) => u.toString(16).padStart(2, "0"))
                .join("")
            : "";
        }
      },
      30986: (M, L, t) => {
        "use strict";
        t.d(L, { Ul: () => a, wm: () => h });
        var e = t(7850);
        const i =
            "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD//gA7Q1JFQVRPUjogZ2QtanBlZyB2MS4wICh1c2luZyBJSkcgSlBFRyB2NjIpLCBxdWFsaXR5ID0gOTAK/9sAQwADAgIDAgIDAwMDBAMDBAUIBQUEBAUKBwcGCAwKDAwLCgsLDQ4SEA0OEQ4LCxAWEBETFBUVFQwPFxgWFBgSFBUU/9sAQwEDBAQFBAUJBQUJFA0LDRQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQU/8AAEQgAIAAgAwEiAAIRAQMRAf/EAB8AAAEFAQEBAQEBAAAAAAAAAAABAgMEBQYHCAkKC//EALUQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+v/EAB8BAAMBAQEBAQEBAQEAAAAAAAABAgMEBQYHCAkKC//EALURAAIBAgQEAwQHBQQEAAECdwABAgMRBAUhMQYSQVEHYXETIjKBCBRCkaGxwQkjM1LwFWJy0QoWJDThJfEXGBkaJicoKSo1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoKDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uLj5OXm5+jp6vLz9PX29/j5+v/aAAwDAQACEQMRAD8A/P4mW5nmllmeSR3LMzMSSc1a07R73V72KzsILi9u5TiOC2RpJHPoFGSarQ/ef6n+de4fAn9oaL4D+DfGX9i6Uf8AhO9XSKDT9eZY3WxiDZcBGByTkn0JCZBxQB41qeiX+iXslnqNtdWF3H9+3uo2jkX6q2CKpgy208MsUzxyI4ZWViCDmvsr9rrUdT1j9nb4T6h8RBbH4qXUs0zMsSxXJ04hivnKoAU5MPGBg7uM7q+NpvvJ9R/OgAh+8/1P867T4POI/iz4Mc6U+u7NZtG/suPbuu8TKfKG4hct93njnmuKIltp5opYXjkRyrKykEHNWbDVbvSr63vbKaezvLeRZYbi3ZkkidTlWVhyCCMgjpQB6l+1F411nx58dPFWpa5a3mnXaXP2ZNOvXVpLKNBhYflJUY5PB5JJ6k15LN95PqP51a1PWr7WtQnvtRuLm/vrhzJNc3TtJLIx6lmbJJ9zVQCW5nhiiheSR3CqqqSSc0Af/9k=",
          r =
            t.p +
            "images/applications/community/avatar_default_full.jpg?v=valveisgoodatcaching",
          E =
            "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD//gA7Q1JFQVRPUjogZ2QtanBlZyB2MS4wICh1c2luZyBJSkcgSlBFRyB2NjIpLCBxdWFsaXR5ID0gODAK/9sAQwAGBAUGBQQGBgUGBwcGCAoQCgoJCQoUDg8MEBcUGBgXFBYWGh0lHxobIxwWFiAsICMmJykqKRkfLTAtKDAlKCko/9sAQwEHBwcKCAoTCgoTKBoWGigoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgo/8AAEQgAQABAAwEiAAIRAQMRAf/EAB8AAAEFAQEBAQEBAAAAAAAAAAABAgMEBQYHCAkKC//EALUQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+v/EAB8BAAMBAQEBAQEBAQEAAAAAAAABAgMEBQYHCAkKC//EALURAAIBAgQEAwQHBQQEAAECdwABAgMRBAUhMQYSQVEHYXETIjKBCBRCkaGxwQkjM1LwFWJy0QoWJDThJfEXGBkaJicoKSo1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoKDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uLj5OXm5+jp6vLz9PX29/j5+v/aAAwDAQACEQMRAD8A8Inmk8+T94/3j/EfWmedJ/z0f/vo0T/6+T/eP86ZQA/zpP8Ano//AH0aPOk/56P/AN9GmVo6Loeq65M0Wj6ddXrr94QRF9v1I6fjQBR86T/no/8A30aPOk/56P8A99GtHW/Dus6GV/tjS7yyD8K00RVW+h6GsugB/nSf89H/AO+jT4JpPPj/AHj/AHh/EfWoafB/r4/94fzoAJ/9fJ/vH+dMp8/+vk/3j/OmUAXdE099W1mw06Jgsl3PHApPYswUH9a+qPF3iHSPhF4S0+003TxK0hMcEAbZvIA3SO2OvIz6k18nW88ttcRz28jxTRMHSRGKsrA5BBHQg1b1TWdT1fy/7V1G8vfLzs+0TNJtz1xknHQUAfUXw+8c6Z8UdN1HS9V0xIpUTM1s7eYkiE43KcAgg/lxg180+NtEHhzxZqmkqxdLWcojHqUPK598EV9CfBbwpF4G8J3fiLxA4trm5hEsnmceRCOQD/tHqR9B1r568a63/wAJH4r1TVghRLqYuinqE6KD74AoAxafB/r4/wDeH86ZT4P9fH/vD+dABP8A6+T/AHj/ADplPn/18n+8f50ygArt/gtpltq/xK0e2vYxJArPMUYZDFEZhn2yBXEV0/w203VNX8YWdloOoHTtQkWQx3IZl2gISeV55AI/GgD1H9pvxPdi/s/DcDGOz8pbqfHWRizBQfYbc/U+1eD12PxW0fWtE8Tpa+I9UOqXpt0cTl2bCEthctz1B/OuOoAKfB/r4/8AeH86ZT4P9fH/ALw/nQAT/wCvk/3j/OmVNPDJ58n7t/vH+E+tM8mT/nm//fJoAZV7Q9Xv9C1KLUNJuGtryMEJIoBIyCD1BHQmqnkyf883/wC+TR5Mn/PN/wDvk0AaHiHXtT8RX4vdau2u7oIIxIygHaCSBwB6msyn+TJ/zzf/AL5NHkyf883/AO+TQAynwf6+P/eH86PJk/55v/3yafBDJ58f7t/vD+E+tAH/2Q==";
        var A = t(99412),
          B = t(90626);
        function u(x) {
          const { rgSources: P, onIncrementalError: C, alt: I, ...O } = x,
            [R, l] = (0, B.useState)(0),
            D = P[R];
          return (0, e.jsx)("img", {
            onError: (o) => {
              l((m) => m + 1), C == null || C(o, D, R);
            },
            alt: I,
            ...O,
            src: D,
          });
        }
        var p = t(72609),
          d = t(64238),
          g = t.n(d),
          v = t(16339),
          s = t(76105);
        function a(x) {
          const {
              avatarURL: P,
              size: C,
              statusStyle: I,
              statusPosition: O,
              className: R,
              children: l,
              isOnline: D,
              isInGame: o,
              isWatchingBroadcast: m,
              isAwayOrSnooze: T,
              alt: Q,
            } = x,
            U = [];
          return (
            P && U.push(P),
            U.push(z(C != null ? C : "Medium")),
            (0, e.jsxs)("div", {
              className: g()(
                v.AvatarHolder,
                {
                  [v.Offline]: !D,
                  [v.Online]: D,
                  [v.InGame]: o,
                  [v.WatchingBroadcast]: m,
                  [v.AwayOrSnooze]: T,
                },
                R,
              ),
              "data-size": C,
              "data-status-position": O,
              children: [
                (0, e.jsx)("div", { className: v.AvatarStatus, style: I }),
                (0, e.jsx)(u, {
                  className: g()(v.Avatar),
                  rgSources: U,
                  draggable: !1,
                  alt: Q,
                }),
                l,
              ],
            })
          );
        }
        function n(x) {
          const {
            profileItem: P,
            className: C,
            bDisableAnimation: I,
            ...O
          } = x;
          if (!P || !P.image_small || P.image_small.length == 0) return null;
          let R = I ? P.image_large : P.image_small;
          return (
            R || (R = P.image_small),
            R.startsWith("https://") ||
              (R = Config.MEDIA_CDN_COMMUNITY_URL + "images/" + R),
            jsx("div", {
              className: classNames(styles.AvatarFrame, C),
              ...O,
              children: jsx("img", {
                className: styles.AvatarFrameImg,
                src: R,
                alt: "",
                role: "presentation",
              }),
            })
          );
        }
        function h(x) {
          var P, C, I, O, R, l, D;
          const {
            playerLinkDetails: o,
            animatedAvatar: m,
            avatarFrame: T,
            size: Q,
            ...U
          } = x;
          let c = (0, s.t)(
            (P = o.public_data) == null ? void 0 : P.sha_digest_avatar,
            Q,
          );
          return (
            (C = m == null ? void 0 : m.image_small) != null &&
              C.length &&
              (c = p.TS.MEDIA_CDN_COMMUNITY_URL + "images/" + m.image_small),
            (0, e.jsx)(a, {
              avatarURL: c,
              size: Q,
              isOnline:
                ((I = o.private_data) == null ? void 0 : I.persona_state) ===
                A.UXk,
              isInGame:
                ((O = o.private_data) == null ? void 0 : O.game_id) !== void 0,
              isWatchingBroadcast:
                ((R = o.private_data) == null
                  ? void 0
                  : R.watching_broadcast_accountid) !== void 0,
              isAwayOrSnooze:
                ((l = o.private_data) == null ? void 0 : l.persona_state) ===
                  A.PrD ||
                ((D = o.private_data) == null ? void 0 : D.persona_state) ===
                  A.vPz,
              ...U,
            })
          );
        }
        function f(x, P) {
          const [C, I] = useState(x !== "None");
          return (
            useEffect(() => {
              if ((I(x !== "None"), x === "None" || x === "Infinite")) return;
              let O;
              switch (x) {
                case "Short":
                  O = 2500;
                  break;
                case "Medium":
                  O = 5e3;
                  break;
                case "Long":
                  O = 1e4;
                  break;
              }
              const R = setTimeout(() => {
                I(P);
              }, O);
              return () => {
                clearTimeout(R);
              };
            }, [x, P]),
            C
          );
        }
        function K(x) {
          var P, C;
          const {
              loopDuration: I = "Infinite",
              bParentHovered: O,
              bLimitProfileFrameAnimationTime: R,
              className: l,
              ...D
            } = x,
            [o, m] = useState(!1),
            T = f(I, o),
            Q = useProfileItemsEquipped(
              D.playerLinkDetails.public_data.steamid,
            );
          return jsx("div", {
            className: l,
            onMouseEnter: () => m(!0),
            onMouseLeave: () => m(!1),
            children: jsx(h, {
              ...D,
              animatedAvatar: T
                ? (P = Q.data) == null
                  ? void 0
                  : P.animated_avatar
                : void 0,
              children: jsx(n, {
                profileItem: (C = Q.data) == null ? void 0 : C.avatar_frame,
                bDisableAnimation: R && !T,
              }),
            }),
          });
        }
        function z(x) {
          switch (x) {
            case "X-Small":
            case "Small":
              return (0, p.YJ)(i);
            case "Medium":
            case "MediumLarge":
              return (0, p.YJ)(E);
            case "Large":
            case "X-Large":
            case "FillArea":
              return (0, p.YJ)(r);
          }
        }
      },
      1522: (M, L, t) => {
        "use strict";
        t.d(L, { f: () => g });
        var e = t(7850),
          i = t(3877),
          r = t(98929),
          E = t(86946),
          A = t(64238),
          B = t.n(A),
          u = t(80549),
          p = t(24660),
          d = t(3166);
        function g(s) {
          const {
              rows: a = 3,
              resize: n = "none",
              ref: h,
              value: f,
              onTextChange: K,
              onChange: z,
              disabled: x,
              variant: P,
              ...C
            } = s,
            I = (o) => {
              x || (K(o.target.value), z && z(o));
            },
            O = (0, u.f)("TextArea", P),
            R = (0, d.Qn)(),
            l = (0, E.w)({
              ...C,
              className: B()((0, i.T)(), (0, r.F)()),
              style: { resize: n },
              cursor: "text",
              disabled: x,
              variant: O,
            }),
            D = R ? v : "textarea";
          return (0, e.jsx)(D, {
            ref: h,
            ...l,
            value: f || "",
            onChange: I,
            rows: a,
            readOnly: x,
            "aria-disabled": x,
          });
        }
        function v(s) {
          return (0, e.jsx)(p.dO, { noFocusRing: !0, ...s });
        }
      },
      15252: (M, L, t) => {
        "use strict";
        t.d(L, { Ae: () => v, EY: () => d, U6: () => g });
        var e = t(7850),
          i = t(1039),
          r = t(69289),
          E = t(8928),
          A = t(64238),
          B = t.n(A),
          u = t(65274),
          p = t.n(u);
        function d(s) {
          const { as: a = "span", ref: n, className: h, ...f } = s,
            K = a;
          return (0, e.jsx)(K, {
            ref: n,
            ...(0, r.mz)({ ...f, className: B()(u.Text, h) }, v),
          });
        }
        const g = [
            {
              prop: "weight",
              responsive: !0,
              className: u.TextWeight,
              cssProperty: (s) => ["--text-weight", `var(--font-weight-${s})`],
            },
            {
              prop: "align",
              responsive: !0,
              className: u.TextAlign,
              cssProperty: "--text-align",
            },
            {
              prop: "color",
              responsive: !0,
              cssProperty: (s, a, n) => {
                var h;
                return [
                  "--text-color",
                  (0, r.To)(
                    s,
                    (h = (0, i.I)(a.contrast, n)) != null ? h : "body",
                  ),
                ];
              },
            },
            {
              prop: "contrast",
              responsive: !0,
              cssProperty: (s, a, n) => {
                var h;
                return [
                  "--text-color",
                  (0, r.To)(
                    (h = (0, i.I)(a.color, n)) != null ? h : "text-body",
                    s,
                  ),
                ];
              },
            },
            { prop: "truncate", className: u.Truncate },
            {
              prop: "lineClamp",
              responsive: !0,
              className: u.LineClamp,
              cssProperty: "--line-clamp",
            },
            {
              prop: "whiteSpace",
              className: u.WhiteSpace,
              cssProperty: "--white-space",
            },
          ],
          v = [
            ...g,
            ...E.L,
            {
              prop: "size",
              responsive: !0,
              className: (s) => u[`TextSize-${s}`],
            },
          ];
      },
      86336: (M, L, t) => {
        "use strict";
        t.d(L, { W: () => v, Y: () => d });
        var e = t(7850),
          i = t(50122),
          r = t.n(i),
          E = t(15252),
          A = t(69289),
          B = t(70182),
          u = t(3166),
          p = t(2333);
        function d(s) {
          const { underline: a = "auto", ...n } = s,
            h = (0, A.mz)({ ...n, underline: a, className: i.TextLink }, g);
          return (0, e.jsx)(p.o, { ...h });
        }
        const g = [
          ...E.Ae,
          { prop: "underline", className: (s) => i[`Underline-${s}`] },
        ];
        function v(s) {
          var a;
          const { underline: n = "auto", focusable: h, navProps: f, ...K } = s,
            z = (0, u.Qn)(),
            x =
              (a = h != null ? h : f == null ? void 0 : f.focusable) != null
                ? a
                : !!K.onClick,
            P = (0, e.jsx)("span", {
              role: "button",
              ...(0, A.mz)(
                { ...K, underline: n, className: i.TextLinkButton },
                g,
              ),
            });
          return z && (x || f)
            ? (0, e.jsx)(B.J, { ...(f || {}), focusable: x, children: P })
            : P;
        }
      },
      15860: (M, L, t) => {
        "use strict";
        t.d(L, { L: () => B, c: () => A });
        var e = t(75916),
          i = t(76617),
          r = t(58632),
          E = t.n(r);
        function A(u, p) {
          return new (E())(
            async (d) => {
              const g = [...d],
                v = await e.xtC.GetPlayerLinkDetails(u, { steamids: g }),
                s = new Map();
              return (
                v
                  .Body()
                  .accounts()
                  .forEach((a) => {
                    const n = a.toObject();
                    s.set(n.public_data.steamid, n);
                  }),
                g.map((a) => {
                  var n;
                  return (n = s.get(a)) != null ? n : null;
                })
              );
            },
            { maxBatchSize: 100, cache: !1, ...p },
          );
        }
        function B(u) {
          return (0, i.V)("PlayerLinkDetails", () => A(u));
        }
      },
      85978: (M, L, t) => {
        "use strict";
        t.d(L, { jn: () => g });
        var e = t(72609),
          i = t(68312),
          r = t(20117),
          E = t(88942),
          A = t(15860),
          B = t(99412);
        function u(s) {
          var a, n, h, f, K;
          return (
            (a = s == null ? void 0 : s.private_data) == null ||
              delete a.account_name,
            (n = s == null ? void 0 : s.public_data) == null ||
              delete n.account_flags,
            (h = s == null ? void 0 : s.public_data) == null ||
              delete h.ban_expires_time,
            (f = s == null ? void 0 : s.public_data) == null ||
              delete f.privacy_state,
            ((K = s == null ? void 0 : s.public_data) == null
              ? void 0
              : K.profile_state) !== B.IiA &&
              (s == null || delete s.private_data),
            s
          );
        }
        function p(s) {
          return ["PlayerLinkDetails", s];
        }
        function d(s, a) {
          const n =
            typeof a == "number"
              ? r.b2.InitFromAccountID(a, e.TS.EUNIVERSE).ConvertTo64BitString()
              : a;
          return {
            queryKey: p(n),
            queryFn: async () => {
              if (n) {
                const h = await s.load(n);
                return u(h);
              }
              return null;
            },
            enabled: !!n,
          };
        }
        function g(s) {
          const a = (0, i.KV)(),
            n = (0, A.L)(a);
          return (0, E.I)(d(n, s));
        }
        function v(s, a) {
          a.forEach((n) => {
            var h;
            (h = n == null ? void 0 : n.public_data) != null &&
              h.steamid &&
              s.setQueryData(p(n.public_data.steamid), n);
          });
        }
      },
      72524: (M, L, t) => {
        "use strict";
        t.d(L, { R: () => h, h: () => n });
        var e = t(7850),
          i = t(20476),
          r = t(90626),
          E = t(86067),
          A = t(26072),
          B = t(46085),
          u = t(30770),
          p = t.n(u),
          d = t(19298),
          g = t(1522),
          v = t(68031),
          s = t(75083);
        const a = [
          [i.HH, "#moderation_escalationlevel_any"],
          [i.lp, "#moderation_escalationlevel_supervisor"],
          [i.PV, "#moderation_escalationlevel_valve"],
        ];
        function n(f) {
          var K;
          return (
            ((K = f == null ? void 0 : f.required_moderator_level) != null
              ? K
              : i.HH) < i.PV
          );
        }
        function h(f) {
          var K;
          const { reportedContentID: z, onClose: x } = f,
            P = (K = f.eCurrentLevel) != null ? K : i.HH,
            C = a.filter(([m]) => m > P),
            [I, O] = (0, r.useState)(i.PV),
            R = (0, B.lY)(z),
            [l, D] = (0, r.useState)(""),
            o = async () => {
              await R.mutateAsync({ eNewLevel: I, strNote: l }), x();
            };
          return (0, e.jsxs)(d.Z, {
            className: p().EscalateSubjectDialogCtn,
            children: [
              (0, e.jsx)(d.Z, {
                children: E.T.Localize("#moderation_escalation_description"),
              }),
              (0, e.jsx)("select", {
                className: p().EscalationLevelSelect,
                value: I,
                onChange: (m) => O(parseInt(m.target.value)),
                children: C.map(([m, T]) =>
                  (0, e.jsx)(
                    "option",
                    { value: m, children: E.T.Localize(T) },
                    m,
                  ),
                ),
              }),
              (0, e.jsx)("label", {
                children: E.T.Localize("#moderation_escalation_escalationnote"),
              }),
              (0, e.jsx)(g.f, { onTextChange: D, value: l }),
              (0, e.jsxs)(v.s, {
                direction: "row",
                justify: "end",
                gap: "2",
                marginTop: "2",
                children: [
                  (0, e.jsx)(s.$, {
                    color: "dull",
                    onClick: x,
                    children: A.u.Localize("#moderation_cancel"),
                  }),
                  (0, e.jsx)(s.$, {
                    onClick: o,
                    disabled: C.length == 0,
                    loading: R.isPending,
                    children: E.T.Localize("#moderation_escalation_escalate"),
                  }),
                ],
              }),
            ],
          });
        }
      },
      14432: (M, L, t) => {
        "use strict";
        t.d(L, { F: () => g });
        var e = t(7850),
          i = t(86392),
          r = t(90626),
          E = t(26072),
          A = t(59884),
          B = t.n(A),
          u = t(24660),
          p = t(19298),
          d = t(66243);
        function g(v) {
          const [s, a] = (0, r.useState)(null),
            [n, h] = (0, r.useState)([]),
            [f, K] = (0, r.useState)(!1),
            [z, x] = (0, r.useState)(!1);
          let P = v.reasons;
          for (const l of n) P = P[l].children;
          const C = s !== null ? (0, i.V$)(s) : null,
            I = s !== null ? (0, i.GA)(s) : null,
            O = () => {
              s !== null
                ? a(null)
                : n.length === 0
                  ? v.onSelect(null)
                  : h(n.slice(0, -1));
            },
            R = () => {
              let l = s;
              l !== null &&
                (f && (0, i.V$)(l) !== null && (l = (0, i.V$)(l)),
                z && (0, i.GA)(l) !== null && (l = (0, i.GA)(l)),
                v.onSelect(l));
            };
          return (0, e.jsxs)("div", {
            children: [
              s === null &&
                (0, e.jsxs)(e.Fragment, {
                  children: [
                    (0, e.jsx)("div", {
                      className: B().BlockList,
                      children: P.map((l, D) => {
                        const o = () => {
                          if ((0, i.Ju)(l)) {
                            const m = [...n];
                            m.push(D), h(m);
                          } else if ((0, i.X$)(l))
                            (0, i.V$)(l.value) || (0, i.GA)(l.value)
                              ? a(l.value)
                              : v.onSelect(l.value);
                          else throw new Error("This should be unreachable.");
                        };
                        return (0, i.Ur)(l)
                          ? (0, e.jsx)(
                              u.Ii,
                              {
                                className: B().BlockListItem,
                                href: l.url,
                                children: E.u.Localize(l.strLocToken),
                              },
                              l.url,
                            )
                          : (0, e.jsxs)(
                              p.Z,
                              {
                                onActivate: o,
                                className: B().BlockListItem,
                                children: [
                                  (0, e.jsx)("span", {
                                    children: (0, i.Ju)(l)
                                      ? E.u.Localize(l.strLocToken)
                                      : (0, i.Jt)(l.value),
                                  }),
                                  (0, i.Ju)(l) &&
                                    (0, e.jsx)("span", { children: "\u25B6" }),
                                ],
                              },
                              D,
                            );
                      }),
                    }),
                    (0, e.jsx)(d.n9, { onClick: O, children: "Back" }),
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
                    C !== null &&
                      (0, e.jsxs)("label", {
                        children: [
                          (0, e.jsx)("input", {
                            type: "checkbox",
                            checked: f,
                            onChange: (l) => K(l.target.checked),
                          }),
                          " Targeted at women",
                        ],
                      }),
                    I !== null &&
                      (0, e.jsxs)("label", {
                        children: [
                          (0, e.jsx)("input", {
                            type: "checkbox",
                            checked: z,
                            onChange: (l) => x(l.target.checked),
                          }),
                          " Deepfake",
                        ],
                      }),
                    (0, e.jsxs)("div", {
                      className: B().BottomButtons,
                      children: [
                        (0, e.jsx)(d.n9, { onClick: O, children: "Back" }),
                        (0, e.jsx)(d.n9, { onClick: R, children: "Continue" }),
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
        t.d(L, { B8: () => K, lX: () => O });
        var e = t(7850),
          i = t(30986),
          r = t(15252),
          E = t(86336),
          A = t(85978),
          B = t(16114),
          u = t(26072),
          p = t(80151),
          d = t(49527),
          g = t(85599),
          v = t(3166),
          s = t(86067),
          a = t(20609),
          n = t.n(a),
          h = t(46085),
          f = t(86392);
        function K(l) {
          const { reportedContentID: D } = l;
          return D ? (0, e.jsx)(P, { ...l }) : (0, e.jsx)(z, {});
        }
        function z(l) {
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
        function P(l) {
          var D, o, m, T, Q;
          const U = (0, h.Kt)(l.reportedContentID),
            c =
              (m =
                (o =
                  (D = U == null ? void 0 : U.data) == null
                    ? void 0
                    : D.entries) == null
                  ? void 0
                  : o.length) != null
                ? m
                : 0,
            _ =
              (Q = (T = U.data) == null ? void 0 : T.entries) != null ? Q : [];
          return (
            _.sort((y, j) => j.timestamp - y.timestamp),
            (0, e.jsx)("div", {
              children:
                c > 0 &&
                (0, e.jsxs)("table", {
                  className: n().ModerationTable,
                  children: [
                    (0, e.jsx)(x, {}),
                    (0, e.jsxs)("tbody", {
                      children: [
                        U === void 0 &&
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
                        U &&
                          (0, e.jsxs)(e.Fragment, {
                            children: [
                              U.isLoading &&
                                (0, e.jsx)("tr", {
                                  children: (0, e.jsx)("td", {
                                    colSpan: 4,
                                    children: (0, e.jsx)(g.t, {}),
                                  }),
                                }),
                              U.isError &&
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
                              U.isSuccess &&
                                c === 0 &&
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
                              U.isSuccess &&
                                c > 0 &&
                                _.map((y) =>
                                  (0, e.jsx)(C, { entry: y }, y.timestamp),
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
        function C(l) {
          var D;
          const { entry: o } = l,
            m = (0, A.jn)(o.actor_steamid);
          if (!m.isSuccess || !m.data) return null;
          const T = (D = m.data.public_data) == null ? void 0 : D.persona_name;
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
                    (0, e.jsx)(E.Y, {
                      href: `${v.TS.COMMUNITY_BASE_URL}profiles/${o.actor_steamid}`,
                      children: (0, e.jsx)(r.EY, {
                        size: "2",
                        truncate: !0,
                        title: T,
                        className: n().ReporterName,
                        children: T,
                      }),
                    }),
                    (0, e.jsx)(E.Y, {
                      size: "2",
                      href: `${v.TS.COMMUNITY_BASE_URL}moderation/activity/${o.actor_steamid}`,
                      children: "(activity)",
                    }),
                  ],
                }),
              }),
              (0, e.jsx)("td", {
                children: (0, e.jsxs)(r.EY, {
                  size: "2",
                  children: [
                    (0, f.fg)(o.action),
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
        function I(l) {
          const { eAction: D, jsonData: o } = l;
          let m = {};
          o && (m = JSON.parse(o));
          const T = m.report_id
            ? (0, e.jsxs)("span", { children: ["Report ID: ", m.report_id] })
            : null;
          switch (D) {
            case p.Hd:
              return T;
            case p._F:
              return (0, e.jsxs)(e.Fragment, {
                children: [
                  "Reason: ",
                  (0, f.Jt)(m.reason),
                  m.resolution !== d.CC &&
                    m.resolution !== d.S6 &&
                    (0, e.jsxs)(e.Fragment, {
                      children: [
                        (0, e.jsx)("br", {}),
                        "Resolution: ",
                        (0, f.l)(m.resolution),
                      ],
                    }),
                  m.sanctions &&
                    (0, e.jsxs)(e.Fragment, {
                      children: [
                        (0, e.jsx)("br", {}),
                        "Sanctions: ",
                        m.sanctions.map(f.cB).join(", "),
                      ],
                    }),
                ],
              });
            case p.Nu:
              return T;
            case p.XP:
              return (0, e.jsx)(e.Fragment, {
                children: JSON.stringify(m, null, "	"),
              });
            case p.YI:
              return (0, e.jsxs)(e.Fragment, {
                children: ["New level: ", (0, f.ar)(m.level)],
              });
            case p._7:
              return T;
            default:
              return null;
          }
        }
        function O(l) {
          var D;
          const { subject: o } = l,
            m = o && o.reports && o.reports.length > 0,
            T = [
              ...((D = o == null ? void 0 : o.reports) != null ? D : []),
            ].sort((Q, U) => {
              var c, _;
              return (
                ((c = U.time_reported) != null ? c : 0) -
                ((_ = Q.time_reported) != null ? _ : 0)
              );
            });
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
                  !m &&
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
                  m && T.map((Q) => (0, e.jsx)(R, { report: Q }, Q.report_id)),
                ],
              }),
            ],
          });
        }
        function R(l) {
          var D;
          const { report: o } = l,
            m = (0, A.jn)(o.reporter_steamid);
          if (!m.isSuccess || !((D = m.data) != null && D.public_data))
            return null;
          const T = !!o.time_disputed && o.dispute_resolved === d.z_,
            Q =
              o.resolved !== d.z_ &&
              (!o.time_disputed || o.dispute_resolved !== d.z_),
            U = o.time_dispute_resolved !== 0,
            c = o.resolved === d.CC,
            _ = m.data.public_data.persona_name;
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
                      href: `${v.TS.COMMUNITY_BASE_URL}profiles/${o.reporter_steamid}`,
                      children: (0, e.jsx)(i.wm, {
                        playerLinkDetails: m.data,
                        size: "X-Small",
                        alt: "Reporter",
                      }),
                    }),
                    (0, e.jsx)(E.Y, {
                      href: `${v.TS.COMMUNITY_BASE_URL}profiles/${o.reporter_steamid}`,
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
                    !Q &&
                      (0, e.jsx)("span", {
                        children: u.u.Localize(
                          "#moderation_resolutionstatus_pending",
                        ),
                      }),
                    c &&
                      !T &&
                      !U &&
                      (0, e.jsx)("span", {
                        children: s.T.Localize(
                          "#contentreportslist_acquitted_at",
                          (0, B.P0)(o.time_resolved, !1, ""),
                        ),
                      }),
                    Q &&
                      !c &&
                      !T &&
                      !U &&
                      (0, e.jsx)("span", {
                        children: s.T.Localize(
                          "#contentreportslist_resolved_at",
                          (0, B.P0)(o.time_resolved, !1, ""),
                        ),
                      }),
                    T &&
                      !U &&
                      (0, e.jsx)("span", {
                        children: s.T.Localize(
                          "#contentreportslist_disputed_at",
                          (0, B.P0)(o.time_disputed, !1, ""),
                        ),
                      }),
                    U &&
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
                    children: (0, f.Jt)(o.report_reason),
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
          KQ: () => T,
          Kt: () => I,
          Ky: () => f,
          N8: () => R,
          OI: () => a,
          YL: () => l,
          c3: () => U,
          lY: () => O,
          w3: () => z,
          wy: () => o,
          y4: () => D,
        });
        var e = t(72604),
          i = t(35038),
          r = t(98112),
          E = t(16277),
          A = t(68312),
          B = t(88942),
          u = t(29385),
          p = t(61739),
          d = t(86392);
        const g = "get_reported_content",
          v = "get_reported_content_by_id",
          s = "get_reported_content_audit_log",
          a = (c) => [g, JSON.stringify(c)],
          n = (c) => [v, c],
          h = (c) => [s, c];
        async function f(c, _) {
          return Promise.all([
            c.invalidateQueries({ queryKey: [g], exact: !1 }),
            c.invalidateQueries({ queryKey: n(_) }),
            c.invalidateQueries({ queryKey: h(_) }),
          ]);
        }
        function K(c, _) {
          return {
            queryKey: a(_),
            enabled: (0, d.NX)(_),
            queryFn: async () => {
              const y = i.w.Init(E.Mw);
              y.Body().set_coordinates(E.UC.fromObject(_));
              const j = await E.fL.GetReportedContent(c, y);
              if (!j.BSuccess())
                throw new Error(
                  "Failed in GetReportedContent, EResult: " + j.GetEResult(),
                );
              return j.Body().toObject();
            },
          };
        }
        function z(c) {
          const _ = (0, A.KV)();
          return (0, B.I)(K(_, c));
        }
        function x(c, _) {
          return {
            queryKey: n(_),
            queryFn: async () => {
              const y = CProtoBufMsg.Init(
                CContentModeration_GetReportedContentByID_Request,
              );
              y.Body().set_reported_content_id(_);
              const j = await ContentModerationService.GetReportedContentByID(
                c,
                y,
              );
              if (!j.BSuccess())
                throw new Error(
                  "Failed in GetReportedContentByID, EResult: " +
                    j.GetEResult(),
                );
              return j.Body().toObject();
            },
          };
        }
        function P(c) {
          const _ = useActiveServiceTransport();
          return useQuery(x(_, c));
        }
        function C(c, _) {
          return {
            queryKey: h(_),
            queryFn: async () => {
              if (!_) return;
              const y = i.w.Init(E.v5);
              return (
                y.Body().set_reported_content_id(_),
                (await E.fL.GetAuditLogByID(c, y)).Body().toObject()
              );
            },
          };
        }
        function I(c) {
          const _ = (0, A.KV)();
          return (0, B.I)(C(_, c));
        }
        function O(c) {
          const _ = (0, A.KV)(),
            y = (0, u.jE)();
          return (0, p.n)({
            mutationFn: async (j) => {
              const S = i.w.Init(E.Qi);
              S.Body().set_reported_content_id(c),
                S.Body().set_new_level(j.eNewLevel),
                j.eReason && S.Body().set_reason(j.eReason),
                j.strNote && S.Body().set_note(j.strNote);
              const W = await E.fL.EscalateSubjectByID(_, S);
              if (W.GetEResult() !== e.R)
                throw new Error(`Failed to escalate subject: ${W.GetEMsg()}`);
            },
            onSuccess: async () => {
              await Promise.all([
                f(y, c),
                y.invalidateQueries({ queryKey: ["get_claimed"] }),
                y.invalidateQueries({ queryKey: ["get_subject_overview"] }),
              ]);
            },
          });
        }
        function R() {
          const c = (0, A.KV)(),
            _ = (0, u.jE)();
          return (0, p.n)({
            mutationFn: async (y) => {
              const j = i.w.Init(E.Nr);
              j.Body().set_reported_content_id(y.reportedContentID);
              const S = await E.fL.SustainModerationByID(c, j);
              if (!S.BSuccess()) throw new Error("EResult " + S.GetEResult());
            },
            onSuccess: async (y, j) => {
              await f(_, j.reportedContentID),
                await _.invalidateQueries({ queryKey: ["get_claimed"] });
            },
          });
        }
        function l(c) {
          const _ = (0, u.jE)(),
            y = (0, A.KV)();
          return (0, p.n)({
            mutationKey: ["release_subject", ...c],
            mutationFn: async () => {
              const j = i.w.Init(E.GD);
              for (const W of c) {
                const N = new E.F9();
                N.set_reported_content_id(W),
                  j.Body().add_subjects_to_release(N);
              }
              const S = await E.fL.ReleaseSubjects(y, j);
              if (!S.BSuccess()) throw new Error("EResult " + S.GetEResult());
            },
            onSuccess: async () => {
              await Promise.all([
                _.invalidateQueries({ queryKey: ["get_claimed"] }),
                _.invalidateQueries({ queryKey: ["get_subject_overview"] }),
                ...c.map((j) => f(_, j)),
              ]);
            },
          });
        }
        function D(c, _) {
          const y = (0, A.KV)(),
            j = (0, u.jE)();
          return (0, p.n)({
            mutationFn: async () => {
              const S = i.w.Init(E.LW);
              S.Body().set_reported_content_id(c), S.Body().set_details(_);
              const W = await E.fL.OwnerDisputeModeration(y, S);
              if (!W.BSuccess()) throw new Error("EResult " + W.GetEResult());
            },
            onSuccess: async () => {
              await f(j, c);
            },
          });
        }
        function o(c, _) {
          const y = (0, u.jE)(),
            j = (0, A.KV)();
          return (0, p.n)({
            mutationFn: async () => {
              const S = i.w.Init(E.ps);
              S.Body().set_reported_content_id(c),
                S.Body().set_owner_dispute_details(_);
              const W = await E.fL.UpdateSubjectByID(j, S);
              if (!W.BSuccess()) throw new Error("EResult " + W.GetEResult());
            },
            onSuccess: async () => {
              await f(y, c);
            },
          });
        }
        function m(c, _) {
          return {
            queryKey: ["reporterstats", _],
            queryFn: async () => {
              const y = i.w.Init(E.KD);
              y.Body().set_steamid(_);
              const j = await E.fL.GetReporterStats(c, y);
              if (!j.BSuccess()) throw new Error("EResult " + j.GetEResult());
              return j.Body().toObject();
            },
          };
        }
        function T(c) {
          const _ = (0, A.KV)();
          return (0, B.I)(m(_, c));
        }
        function Q(c, _, y) {
          const j = (0, A.KV)(),
            S = (0, u.jE)();
          return (0, p.n)({
            mutationFn: async (W) => {
              const N = i.w.Init(r.Er);
              N.Body().set_steamid(c),
                N.Body().set_comment_thread_id(_),
                N.Body().set_gidcomment(y),
                N.Body().set_reason(W.reason),
                N.Body().set_note(W.message);
              for (const F of W.sanctions) {
                const G = new r.u6();
                G.set_sanction(F.sanction),
                  F.days && G.set_days(F.days),
                  N.Body().add_sanctions(G);
              }
              const b = await r.BE.SanctionComment(j, N);
              if (!b.BSuccess())
                throw new Error(
                  `SanctionComment failed. EResult: ${b.GetEResult()} (${b.GetErrorMessage()})`,
                );
            },
            onSuccess: async () => {
              await S.invalidateQueries({ queryKey: ["get_claimed"] });
            },
          });
        }
        function U(c, _, y) {
          const j = (0, A.KV)(),
            S = (0, u.jE)();
          return (0, p.n)({
            mutationFn: async () => {
              const W = i.w.Init(r.RX);
              W.Body().set_steamid(c),
                W.Body().set_comment_thread_id(_),
                W.Body().set_gidcomment(y),
                W.Body().set_report_action(r.du.Pn),
                W.Body().set_resolve(!0),
                await r.Vi.UpdateCommentReportState(j, W);
            },
            onSuccess: async () => {
              await S.invalidateQueries({ queryKey: ["get_claimed"] });
            },
          });
        }
      },
      76617: (M, L, t) => {
        "use strict";
        t.d(L, { V: () => p });
        function e(d) {
          return Object.prototype.toString.call(d) === "[object Object]";
        }
        function i(d) {
          if (!e(d)) return !1;
          const g = d.constructor;
          if (typeof g == "undefined") return !0;
          const v = g.prototype;
          return !(
            !e(v) || !Object.prototype.hasOwnProperty.call(v, "isPrototypeOf")
          );
        }
        function r(...d) {
          return JSON.stringify(d, (g, v) => {
            if (i(v)) {
              const s = {};
              return (
                Object.keys(v)
                  .sort()
                  .forEach((a) => {
                    s[a] = v[a];
                  }),
                s
              );
            }
            return v;
          });
        }
        var E = t(90626),
          A = t(7850);
        const B = (0, E.createContext)({ instances: {}, factories: {} });
        function u(d) {
          const { name: g, fnFactory: v, children: s } = d,
            a = React.useContext(B),
            [n] = useState({}),
            h = useMemo(
              () => ({
                instances: n,
                factories: { ...a.factories, [g]: v },
                parent: a,
              }),
              [n, g, a],
            );
          return jsx(B.Provider, { value: h, children: s });
        }
        function p(d, g) {
          var v;
          const s = (0, E.useContext)(B),
            a = typeof d == "string" ? d : r(...d);
          let n = s;
          for (; n; ) {
            if (a in n.instances) return n.instances[a];
            if (a in n.factories) break;
            n = n.parent;
          }
          const f = (
            (v = n == null ? void 0 : n.factories[a]) != null ? v : g
          )();
          return ((n != null ? n : s).instances[a] = f), f;
        }
      },
      66243: (M, L, t) => {
        "use strict";
        t.d(L, { Oh: () => g, n9: () => p, sP: () => A });
        var e = t(7850),
          i = t(24660),
          r = t(44375),
          E = t.n(r);
        function A(s) {
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
        function u(s) {
          const { children: a, ...n } = s;
          return jsx(FocusableAnchor, {
            className: styles.GreenButton,
            ...n,
            children: jsx("span", { children: a }),
          });
        }
        function p(s) {
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
        function g(s) {
          const { children: a, ...n } = s;
          return (0, e.jsx)(i.fu, {
            className: r.GreyButton,
            type: "button",
            ...n,
            children: (0, e.jsx)("span", { children: a }),
          });
        }
        function v(s) {
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
