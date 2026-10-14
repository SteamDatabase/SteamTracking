/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(() => {
  (self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
    [362],
    {
      76105: (R, C, e) => {
        "use strict";
        e.d(C, { t: () => o });
        var t = e(72609);
        const i = "fef49e7fa7e1997310d705b2a6158ff8dc1cdfeb";
        function o(A, p) {
          let u = "0000000000000000000000000000000000000000";
          typeof A == "string" ? (u = A) : A && (u = l(A) || u);
          let v = ".jpg";
          u === "0000000000000000000000000000000000000000" && (u = i),
            u.length == 44 && ((v = u.slice(-4)), (u = u.slice(0, 40)));
          let d = t.TS.AVATAR_BASE_URL;
          switch (
            (d ||
              ((d = t.TS.MEDIA_CDN_COMMUNITY_URL + "images/avatars/"),
              (d += u.slice(0, 2) + "/")),
            (d += u),
            p)
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
          return (d += v), d;
        }
        function l(A) {
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
      30986: (R, C, e) => {
        "use strict";
        e.d(C, { Ul: () => a, wm: () => B });
        var t = e(7850);
        const i =
            "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD//gA7Q1JFQVRPUjogZ2QtanBlZyB2MS4wICh1c2luZyBJSkcgSlBFRyB2NjIpLCBxdWFsaXR5ID0gOTAK/9sAQwADAgIDAgIDAwMDBAMDBAUIBQUEBAUKBwcGCAwKDAwLCgsLDQ4SEA0OEQ4LCxAWEBETFBUVFQwPFxgWFBgSFBUU/9sAQwEDBAQFBAUJBQUJFA0LDRQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQU/8AAEQgAIAAgAwEiAAIRAQMRAf/EAB8AAAEFAQEBAQEBAAAAAAAAAAABAgMEBQYHCAkKC//EALUQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+v/EAB8BAAMBAQEBAQEBAQEAAAAAAAABAgMEBQYHCAkKC//EALURAAIBAgQEAwQHBQQEAAECdwABAgMRBAUhMQYSQVEHYXETIjKBCBRCkaGxwQkjM1LwFWJy0QoWJDThJfEXGBkaJicoKSo1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoKDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uLj5OXm5+jp6vLz9PX29/j5+v/aAAwDAQACEQMRAD8A/P4mW5nmllmeSR3LMzMSSc1a07R73V72KzsILi9u5TiOC2RpJHPoFGSarQ/ef6n+de4fAn9oaL4D+DfGX9i6Uf8AhO9XSKDT9eZY3WxiDZcBGByTkn0JCZBxQB41qeiX+iXslnqNtdWF3H9+3uo2jkX6q2CKpgy208MsUzxyI4ZWViCDmvsr9rrUdT1j9nb4T6h8RBbH4qXUs0zMsSxXJ04hivnKoAU5MPGBg7uM7q+NpvvJ9R/OgAh+8/1P867T4POI/iz4Mc6U+u7NZtG/suPbuu8TKfKG4hct93njnmuKIltp5opYXjkRyrKykEHNWbDVbvSr63vbKaezvLeRZYbi3ZkkidTlWVhyCCMgjpQB6l+1F411nx58dPFWpa5a3mnXaXP2ZNOvXVpLKNBhYflJUY5PB5JJ6k15LN95PqP51a1PWr7WtQnvtRuLm/vrhzJNc3TtJLIx6lmbJJ9zVQCW5nhiiheSR3CqqqSSc0Af/9k=",
          o =
            e.p +
            "images/applications/community/avatar_default_full.jpg?v=valveisgoodatcaching",
          l =
            "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD//gA7Q1JFQVRPUjogZ2QtanBlZyB2MS4wICh1c2luZyBJSkcgSlBFRyB2NjIpLCBxdWFsaXR5ID0gODAK/9sAQwAGBAUGBQQGBgUGBwcGCAoQCgoJCQoUDg8MEBcUGBgXFBYWGh0lHxobIxwWFiAsICMmJykqKRkfLTAtKDAlKCko/9sAQwEHBwcKCAoTCgoTKBoWGigoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgo/8AAEQgAQABAAwEiAAIRAQMRAf/EAB8AAAEFAQEBAQEBAAAAAAAAAAABAgMEBQYHCAkKC//EALUQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+v/EAB8BAAMBAQEBAQEBAQEAAAAAAAABAgMEBQYHCAkKC//EALURAAIBAgQEAwQHBQQEAAECdwABAgMRBAUhMQYSQVEHYXETIjKBCBRCkaGxwQkjM1LwFWJy0QoWJDThJfEXGBkaJicoKSo1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoKDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uLj5OXm5+jp6vLz9PX29/j5+v/aAAwDAQACEQMRAD8A8Inmk8+T94/3j/EfWmedJ/z0f/vo0T/6+T/eP86ZQA/zpP8Ano//AH0aPOk/56P/AN9GmVo6Loeq65M0Wj6ddXrr94QRF9v1I6fjQBR86T/no/8A30aPOk/56P8A99GtHW/Dus6GV/tjS7yyD8K00RVW+h6GsugB/nSf89H/AO+jT4JpPPj/AHj/AHh/EfWoafB/r4/94fzoAJ/9fJ/vH+dMp8/+vk/3j/OmUAXdE099W1mw06Jgsl3PHApPYswUH9a+qPF3iHSPhF4S0+003TxK0hMcEAbZvIA3SO2OvIz6k18nW88ttcRz28jxTRMHSRGKsrA5BBHQg1b1TWdT1fy/7V1G8vfLzs+0TNJtz1xknHQUAfUXw+8c6Z8UdN1HS9V0xIpUTM1s7eYkiE43KcAgg/lxg180+NtEHhzxZqmkqxdLWcojHqUPK598EV9CfBbwpF4G8J3fiLxA4trm5hEsnmceRCOQD/tHqR9B1r568a63/wAJH4r1TVghRLqYuinqE6KD74AoAxafB/r4/wDeH86ZT4P9fH/vD+dABP8A6+T/AHj/ADplPn/18n+8f50ygArt/gtpltq/xK0e2vYxJArPMUYZDFEZhn2yBXEV0/w203VNX8YWdloOoHTtQkWQx3IZl2gISeV55AI/GgD1H9pvxPdi/s/DcDGOz8pbqfHWRizBQfYbc/U+1eD12PxW0fWtE8Tpa+I9UOqXpt0cTl2bCEthctz1B/OuOoAKfB/r4/8AeH86ZT4P9fH/ALw/nQAT/wCvk/3j/OmVNPDJ58n7t/vH+E+tM8mT/nm//fJoAZV7Q9Xv9C1KLUNJuGtryMEJIoBIyCD1BHQmqnkyf883/wC+TR5Mn/PN/wDvk0AaHiHXtT8RX4vdau2u7oIIxIygHaCSBwB6msyn+TJ/zzf/AL5NHkyf883/AO+TQAynwf6+P/eH86PJk/55v/3yafBDJ58f7t/vD+E+tAH/2Q==";
        var A = e(99412),
          p = e(90626);
        function u(h) {
          const { rgSources: j, onIncrementalError: M, alt: L, ...T } = h,
            [O, _] = (0, p.useState)(0),
            g = j[O];
          return (0, t.jsx)("img", {
            onError: (r) => {
              _((f) => f + 1), M == null || M(r, g, O);
            },
            alt: L,
            ...T,
            src: g,
          });
        }
        var v = e(72609),
          d = e(64238),
          P = e.n(d),
          E = e(16339),
          s = e(76105);
        function a(h) {
          const {
              avatarURL: j,
              size: M,
              statusStyle: L,
              statusPosition: T,
              className: O,
              children: _,
              isOnline: g,
              isInGame: r,
              isWatchingBroadcast: f,
              isAwayOrSnooze: U,
              alt: Q,
            } = h,
            I = [];
          return (
            j && I.push(j),
            I.push(z(M != null ? M : "Medium")),
            (0, t.jsxs)("div", {
              className: P()(
                E.AvatarHolder,
                {
                  [E.Offline]: !g,
                  [E.Online]: g,
                  [E.InGame]: r,
                  [E.WatchingBroadcast]: f,
                  [E.AwayOrSnooze]: U,
                },
                O,
              ),
              "data-size": M,
              "data-status-position": T,
              children: [
                (0, t.jsx)("div", { className: E.AvatarStatus, style: L }),
                (0, t.jsx)(u, {
                  className: P()(E.Avatar),
                  rgSources: I,
                  draggable: !1,
                  alt: Q,
                }),
                _,
              ],
            })
          );
        }
        function n(h) {
          const {
            profileItem: j,
            className: M,
            bDisableAnimation: L,
            ...T
          } = h;
          if (!j || !j.image_small || j.image_small.length == 0) return null;
          let O = L ? j.image_large : j.image_small;
          return (
            O || (O = j.image_small),
            O.startsWith("https://") ||
              (O = Config.MEDIA_CDN_COMMUNITY_URL + "images/" + O),
            jsx("div", {
              className: classNames(styles.AvatarFrame, M),
              ...T,
              children: jsx("img", {
                className: styles.AvatarFrameImg,
                src: O,
                alt: "",
                role: "presentation",
              }),
            })
          );
        }
        function B(h) {
          var j, M, L, T, O, _, g;
          const {
            playerLinkDetails: r,
            animatedAvatar: f,
            avatarFrame: U,
            size: Q,
            ...I
          } = h;
          let c = (0, s.t)(
            (j = r.public_data) == null ? void 0 : j.sha_digest_avatar,
            Q,
          );
          return (
            (M = f == null ? void 0 : f.image_small) != null &&
              M.length &&
              (c = v.TS.MEDIA_CDN_COMMUNITY_URL + "images/" + f.image_small),
            (0, t.jsx)(a, {
              avatarURL: c,
              size: Q,
              isOnline:
                ((L = r.private_data) == null ? void 0 : L.persona_state) ===
                A.UXk,
              isInGame:
                ((T = r.private_data) == null ? void 0 : T.game_id) !== void 0,
              isWatchingBroadcast:
                ((O = r.private_data) == null
                  ? void 0
                  : O.watching_broadcast_accountid) !== void 0,
              isAwayOrSnooze:
                ((_ = r.private_data) == null ? void 0 : _.persona_state) ===
                  A.PrD ||
                ((g = r.private_data) == null ? void 0 : g.persona_state) ===
                  A.vPz,
              ...I,
            })
          );
        }
        function x(h, j) {
          const [M, L] = useState(h !== "None");
          return (
            useEffect(() => {
              if ((L(h !== "None"), h === "None" || h === "Infinite")) return;
              let T;
              switch (h) {
                case "Short":
                  T = 2500;
                  break;
                case "Medium":
                  T = 5e3;
                  break;
                case "Long":
                  T = 1e4;
                  break;
              }
              const O = setTimeout(() => {
                L(j);
              }, T);
              return () => {
                clearTimeout(O);
              };
            }, [h, j]),
            M
          );
        }
        function K(h) {
          var j, M;
          const {
              loopDuration: L = "Infinite",
              bParentHovered: T,
              bLimitProfileFrameAnimationTime: O,
              className: _,
              ...g
            } = h,
            [r, f] = useState(!1),
            U = x(L, r),
            Q = useProfileItemsEquipped(
              g.playerLinkDetails.public_data.steamid,
            );
          return jsx("div", {
            className: _,
            onMouseEnter: () => f(!0),
            onMouseLeave: () => f(!1),
            children: jsx(B, {
              ...g,
              animatedAvatar: U
                ? (j = Q.data) == null
                  ? void 0
                  : j.animated_avatar
                : void 0,
              children: jsx(n, {
                profileItem: (M = Q.data) == null ? void 0 : M.avatar_frame,
                bDisableAnimation: O && !U,
              }),
            }),
          });
        }
        function z(h) {
          switch (h) {
            case "X-Small":
            case "Small":
              return (0, v.YJ)(i);
            case "Medium":
            case "MediumLarge":
              return (0, v.YJ)(l);
            case "Large":
            case "X-Large":
            case "FillArea":
              return (0, v.YJ)(o);
          }
        }
      },
      86946: (R, C, e) => {
        "use strict";
        e.d(C, { j: () => P, w: () => E });
        var t = e(7850),
          i = e(64238),
          o = e.n(i),
          l = e(38878),
          A = e.n(l),
          p = e(60351),
          u = e(68031),
          v = e(8928),
          d = e(69289);
        function P(s) {
          const {
              children: a,
              beforeContent: n,
              afterContent: B,
              hasValue: x,
              ...K
            } = s,
            z = E(K);
          return (0, t.jsxs)(u.s, {
            ...z,
            align: "center",
            "data-has-value": !!x,
            minWidth: "0",
            children: [
              n && (0, t.jsx)(u.s, { paddingRight: "2", children: n }),
              (0, t.jsx)(p.az, { flexGrow: "1", minWidth: "0", children: a }),
              B && (0, t.jsx)(u.s, { paddingLeft: "2", children: B }),
            ],
          });
        }
        function E(s) {
          const {
              variant: a = "basic",
              size: n = "2",
              radius: B,
              focusable: x = !0,
              hoverable: K = !0,
              clickable: z = !0,
              disabled: h,
              className: j,
              status: M,
              color: L,
              ...T
            } = s,
            O = a === "underline" ? "none" : B;
          return (0, d.mz)(
            {
              ...T,
              radius: O,
              "data-status": M,
              "data-dull-color": L && L !== "dull" ? L : void 0,
              className: o()(
                l.ControlBox,
                x && !h && l.Focusable,
                K && !h && l.Hoverable,
                z && !h && l.Clickable,
                h && l.Disabled,
                l[`Variant-${a}`],
                l[`Size-${n}`],
                j,
              ),
            },
            v.h,
          );
        }
      },
      98929: (R, C, e) => {
        "use strict";
        e.d(C, { F: () => o });
        var t = e(24089),
          i = e.n(t);
        function o() {
          return t.TextEntry;
        }
      },
      1522: (R, C, e) => {
        "use strict";
        e.d(C, { f: () => P });
        var t = e(7850),
          i = e(3877),
          o = e(98929),
          l = e(86946),
          A = e(64238),
          p = e.n(A),
          u = e(80549),
          v = e(24660),
          d = e(3166);
        function P(s) {
          const {
              rows: a = 3,
              resize: n = "none",
              ref: B,
              value: x,
              onTextChange: K,
              onChange: z,
              disabled: h,
              variant: j,
              ...M
            } = s,
            L = (r) => {
              h || (K(r.target.value), z && z(r));
            },
            T = (0, u.f)("TextArea", j),
            O = (0, d.Qn)(),
            _ = (0, l.w)({
              ...M,
              className: p()((0, i.T)(), (0, o.F)()),
              style: { resize: n },
              cursor: "text",
              disabled: h,
              variant: T,
            }),
            g = O ? E : "textarea";
          return (0, t.jsx)(g, {
            ref: B,
            ..._,
            value: x || "",
            onChange: L,
            rows: a,
            readOnly: h,
            "aria-disabled": h,
          });
        }
        function E(s) {
          return (0, t.jsx)(v.dO, { noFocusRing: !0, ...s });
        }
      },
      15252: (R, C, e) => {
        "use strict";
        e.d(C, { Ae: () => E, EY: () => d, U6: () => P });
        var t = e(7850),
          i = e(1039),
          o = e(69289),
          l = e(8928),
          A = e(64238),
          p = e.n(A),
          u = e(65274),
          v = e.n(u);
        function d(s) {
          const { as: a = "span", ref: n, className: B, ...x } = s,
            K = a;
          return (0, t.jsx)(K, {
            ref: n,
            ...(0, o.mz)({ ...x, className: p()(u.Text, B) }, E),
          });
        }
        const P = [
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
                var B;
                return [
                  "--text-color",
                  (0, o.To)(
                    s,
                    (B = (0, i.I)(a.contrast, n)) != null ? B : "body",
                  ),
                ];
              },
            },
            {
              prop: "contrast",
              responsive: !0,
              cssProperty: (s, a, n) => {
                var B;
                return [
                  "--text-color",
                  (0, o.To)(
                    (B = (0, i.I)(a.color, n)) != null ? B : "text-body",
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
          E = [
            ...P,
            ...l.L,
            {
              prop: "size",
              responsive: !0,
              className: (s) => u[`TextSize-${s}`],
            },
          ];
      },
      86336: (R, C, e) => {
        "use strict";
        e.d(C, { W: () => E, Y: () => d });
        var t = e(7850),
          i = e(50122),
          o = e.n(i),
          l = e(15252),
          A = e(69289),
          p = e(70182),
          u = e(3166),
          v = e(2333);
        function d(s) {
          const { underline: a = "auto", ...n } = s,
            B = (0, A.mz)({ ...n, underline: a, className: i.TextLink }, P);
          return (0, t.jsx)(v.o, { ...B });
        }
        const P = [
          ...l.Ae,
          { prop: "underline", className: (s) => i[`Underline-${s}`] },
        ];
        function E(s) {
          var a;
          const { underline: n = "auto", focusable: B, navProps: x, ...K } = s,
            z = (0, u.Qn)(),
            h =
              (a = B != null ? B : x == null ? void 0 : x.focusable) != null
                ? a
                : !!K.onClick,
            j = (0, t.jsx)("span", {
              role: "button",
              ...(0, A.mz)(
                { ...K, underline: n, className: i.TextLinkButton },
                P,
              ),
            });
          return z && (h || x)
            ? (0, t.jsx)(p.J, { ...(x || {}), focusable: h, children: j })
            : j;
        }
      },
      15860: (R, C, e) => {
        "use strict";
        e.d(C, { L: () => p, c: () => A });
        var t = e(75916),
          i = e(76617),
          o = e(58632),
          l = e.n(o);
        function A(u, v) {
          return new (l())(
            async (d) => {
              const P = [...d],
                E = await t.xtC.GetPlayerLinkDetails(u, { steamids: P }),
                s = new Map();
              return (
                E.Body()
                  .accounts()
                  .forEach((a) => {
                    const n = a.toObject();
                    s.set(n.public_data.steamid, n);
                  }),
                P.map((a) => {
                  var n;
                  return (n = s.get(a)) != null ? n : null;
                })
              );
            },
            { maxBatchSize: 100, cache: !1, ...v },
          );
        }
        function p(u) {
          return (0, i.V)("PlayerLinkDetails", () => A(u));
        }
      },
      85978: (R, C, e) => {
        "use strict";
        e.d(C, { jn: () => P });
        var t = e(72609),
          i = e(68312),
          o = e(20117),
          l = e(88942),
          A = e(15860),
          p = e(99412);
        function u(s) {
          var a, n, B, x, K;
          return (
            (a = s == null ? void 0 : s.private_data) == null ||
              delete a.account_name,
            (n = s == null ? void 0 : s.public_data) == null ||
              delete n.account_flags,
            (B = s == null ? void 0 : s.public_data) == null ||
              delete B.ban_expires_time,
            (x = s == null ? void 0 : s.public_data) == null ||
              delete x.privacy_state,
            ((K = s == null ? void 0 : s.public_data) == null
              ? void 0
              : K.profile_state) !== p.IiA &&
              (s == null || delete s.private_data),
            s
          );
        }
        function v(s) {
          return ["PlayerLinkDetails", s];
        }
        function d(s, a) {
          const n =
            typeof a == "number"
              ? o.b2.InitFromAccountID(a, t.TS.EUNIVERSE).ConvertTo64BitString()
              : a;
          return {
            queryKey: v(n),
            queryFn: async () => {
              if (n) {
                const B = await s.load(n);
                return u(B);
              }
              return null;
            },
            enabled: !!n,
          };
        }
        function P(s) {
          const a = (0, i.KV)(),
            n = (0, A.L)(a);
          return (0, l.I)(d(n, s));
        }
        function E(s, a) {
          a.forEach((n) => {
            var B;
            (B = n == null ? void 0 : n.public_data) != null &&
              B.steamid &&
              s.setQueryData(v(n.public_data.steamid), n);
          });
        }
      },
      72524: (R, C, e) => {
        "use strict";
        e.d(C, { R: () => a });
        var t = e(7850),
          i = e(20476),
          o = e(90626),
          l = e(86067),
          A = e(26072),
          p = e(46085),
          u = e(30770),
          v = e.n(u),
          d = e(19298),
          P = e(1522),
          E = e(68031),
          s = e(75083);
        function a(n) {
          const { reportedContentID: B, onClose: x } = n,
            [K, z] = (0, o.useState)(i.PV),
            h = (0, p.lY)(B),
            [j, M] = (0, o.useState)(""),
            L = async () => {
              await h.mutateAsync({ eNewLevel: K, strNote: j }), x();
            };
          return (0, t.jsxs)(d.Z, {
            className: v().EscalateSubjectDialogCtn,
            children: [
              (0, t.jsx)(d.Z, {
                children: l.T.Localize("#moderation_escalation_description"),
              }),
              (0, t.jsxs)("select", {
                className: v().EscalationLevelSelect,
                value: K,
                onChange: (T) => z(parseInt(T.target.value)),
                children: [
                  (0, t.jsx)("option", {
                    value: i.HH,
                    children: l.T.Localize("#moderation_escalationlevel_any"),
                  }),
                  (0, t.jsx)("option", {
                    value: i.lp,
                    children: l.T.Localize(
                      "#moderation_escalationlevel_supervisor",
                    ),
                  }),
                  (0, t.jsx)("option", {
                    value: i.PV,
                    children: l.T.Localize("#moderation_escalationlevel_valve"),
                  }),
                ],
              }),
              (0, t.jsx)("label", {
                children: l.T.Localize("#moderation_escalation_escalationnote"),
              }),
              (0, t.jsx)(P.f, { onTextChange: M, value: j }),
              (0, t.jsxs)(E.s, {
                direction: "row",
                justify: "end",
                gap: "2",
                marginTop: "2",
                children: [
                  (0, t.jsx)(s.$, {
                    color: "dull",
                    onClick: x,
                    children: A.u.Localize("#moderation_cancel"),
                  }),
                  (0, t.jsx)(s.$, {
                    onClick: L,
                    loading: h.isPending,
                    children: l.T.Localize("#moderation_escalation_escalate"),
                  }),
                ],
              }),
            ],
          });
        }
      },
      14432: (R, C, e) => {
        "use strict";
        e.d(C, { F: () => P });
        var t = e(7850),
          i = e(86392),
          o = e(90626),
          l = e(26072),
          A = e(59884),
          p = e.n(A),
          u = e(24660),
          v = e(19298),
          d = e(66243);
        function P(E) {
          const [s, a] = (0, o.useState)(null),
            [n, B] = (0, o.useState)([]),
            [x, K] = (0, o.useState)(!1),
            [z, h] = (0, o.useState)(!1);
          let j = E.reasons;
          for (const _ of n) j = j[_].children;
          const M = s !== null ? (0, i.V$)(s) : null,
            L = s !== null ? (0, i.GA)(s) : null,
            T = () => {
              s !== null
                ? a(null)
                : n.length === 0
                  ? E.onSelect(null)
                  : B(n.slice(0, -1));
            },
            O = () => {
              let _ = s;
              _ !== null &&
                (x && (0, i.V$)(_) !== null && (_ = (0, i.V$)(_)),
                z && (0, i.GA)(_) !== null && (_ = (0, i.GA)(_)),
                E.onSelect(_));
            };
          return (0, t.jsxs)("div", {
            children: [
              s === null &&
                (0, t.jsxs)(t.Fragment, {
                  children: [
                    (0, t.jsx)("div", {
                      className: p().BlockList,
                      children: j.map((_, g) => {
                        const r = () => {
                          if ((0, i.Ju)(_)) {
                            const f = [...n];
                            f.push(g), B(f);
                          } else if ((0, i.X$)(_))
                            (0, i.V$)(_.value) || (0, i.GA)(_.value)
                              ? a(_.value)
                              : E.onSelect(_.value);
                          else throw new Error("This should be unreachable.");
                        };
                        return (0, i.Ur)(_)
                          ? (0, t.jsx)(
                              u.Ii,
                              {
                                className: p().BlockListItem,
                                href: _.url,
                                children: l.u.Localize(_.strLocToken),
                              },
                              _.url,
                            )
                          : (0, t.jsxs)(
                              v.Z,
                              {
                                onActivate: r,
                                className: p().BlockListItem,
                                children: [
                                  (0, t.jsx)("span", {
                                    children: (0, i.Ju)(_)
                                      ? l.u.Localize(_.strLocToken)
                                      : (0, i.Jt)(_.value),
                                  }),
                                  (0, i.Ju)(_) &&
                                    (0, t.jsx)("span", { children: "\u25B6" }),
                                ],
                              },
                              g,
                            );
                      }),
                    }),
                    (0, t.jsx)(d.n9, { onClick: T, children: "Back" }),
                  ],
                }),
              s !== null &&
                (0, t.jsxs)("div", {
                  className: p().BlockList,
                  children: [
                    (0, t.jsx)("div", {
                      className: p().BlockListItem,
                      children: (0, i.Jt)(s),
                    }),
                    M !== null &&
                      (0, t.jsxs)("label", {
                        children: [
                          (0, t.jsx)("input", {
                            type: "checkbox",
                            checked: x,
                            onChange: (_) => K(_.target.checked),
                          }),
                          " Targeted at women",
                        ],
                      }),
                    L !== null &&
                      (0, t.jsxs)("label", {
                        children: [
                          (0, t.jsx)("input", {
                            type: "checkbox",
                            checked: z,
                            onChange: (_) => h(_.target.checked),
                          }),
                          " Deepfake",
                        ],
                      }),
                    (0, t.jsxs)("div", {
                      className: p().BottomButtons,
                      children: [
                        (0, t.jsx)(d.n9, { onClick: T, children: "Back" }),
                        (0, t.jsx)(d.n9, { onClick: O, children: "Continue" }),
                      ],
                    }),
                  ],
                }),
            ],
          });
        }
      },
      13725: (R, C, e) => {
        "use strict";
        e.d(C, { B8: () => K, lX: () => T });
        var t = e(7850),
          i = e(30986),
          o = e(15252),
          l = e(86336),
          A = e(85978),
          p = e(16114),
          u = e(26072),
          v = e(80151),
          d = e(49527),
          P = e(85599),
          E = e(3166),
          s = e(86067),
          a = e(20609),
          n = e.n(a),
          B = e(46085),
          x = e(86392);
        function K(_) {
          const { reportedContentID: g } = _;
          return g ? (0, t.jsx)(j, { ..._ }) : (0, t.jsx)(z, {});
        }
        function z(_) {
          return (0, t.jsx)("div", {
            children: (0, t.jsxs)("table", {
              className: n().ModerationTable,
              children: [
                (0, t.jsx)(h, {}),
                (0, t.jsx)("tbody", {
                  children: (0, t.jsx)("tr", {
                    children: (0, t.jsx)("td", {
                      colSpan: 4,
                      children: (0, t.jsx)(o.EY, {
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
        function h() {
          return (0, t.jsxs)(t.Fragment, {
            children: [
              (0, t.jsxs)("colgroup", {
                children: [
                  (0, t.jsx)("col", { className: n().DateCol }),
                  (0, t.jsx)("col", { className: n().ActorCol }),
                  (0, t.jsx)("col", { className: n().ActionCol }),
                  (0, t.jsx)("col", {}),
                ],
              }),
              (0, t.jsx)("thead", {
                children: (0, t.jsxs)("tr", {
                  children: [
                    (0, t.jsx)("th", {
                      children: (0, t.jsx)(o.EY, {
                        size: "2",
                        weight: "heavy",
                        contrast: "description",
                        children: "Date",
                      }),
                    }),
                    (0, t.jsx)("th", {
                      children: (0, t.jsx)(o.EY, {
                        size: "2",
                        weight: "heavy",
                        contrast: "description",
                        children: "Actor",
                      }),
                    }),
                    (0, t.jsx)("th", {
                      children: (0, t.jsx)(o.EY, {
                        size: "2",
                        weight: "heavy",
                        contrast: "description",
                        children: "Action",
                      }),
                    }),
                    (0, t.jsx)("th", {
                      children: (0, t.jsx)(o.EY, {
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
        function j(_) {
          var g, r, f, U, Q;
          const I = (0, B.Kt)(_.reportedContentID),
            c =
              (f =
                (r =
                  (g = I == null ? void 0 : I.data) == null
                    ? void 0
                    : g.entries) == null
                  ? void 0
                  : r.length) != null
                ? f
                : 0,
            m =
              (Q = (U = I.data) == null ? void 0 : U.entries) != null ? Q : [];
          return (
            m.sort((y, D) => D.timestamp - y.timestamp),
            (0, t.jsx)("div", {
              children:
                c > 0 &&
                (0, t.jsxs)("table", {
                  className: n().ModerationTable,
                  children: [
                    (0, t.jsx)(h, {}),
                    (0, t.jsxs)("tbody", {
                      children: [
                        I === void 0 &&
                          (0, t.jsx)("tr", {
                            children: (0, t.jsx)("td", {
                              colSpan: 4,
                              children: (0, t.jsx)(o.EY, {
                                size: "2",
                                children: s.T.Localize(
                                  "#subjectauditlog_noentries",
                                ),
                              }),
                            }),
                          }),
                        I &&
                          (0, t.jsxs)(t.Fragment, {
                            children: [
                              I.isLoading &&
                                (0, t.jsx)("tr", {
                                  children: (0, t.jsx)("td", {
                                    colSpan: 4,
                                    children: (0, t.jsx)(P.t, {}),
                                  }),
                                }),
                              I.isError &&
                                (0, t.jsx)("tr", {
                                  children: (0, t.jsx)("td", {
                                    colSpan: 4,
                                    children: (0, t.jsx)(o.EY, {
                                      size: "2",
                                      children: s.T.Localize(
                                        "#subjectauditlog_error",
                                      ),
                                    }),
                                  }),
                                }),
                              I.isSuccess &&
                                c === 0 &&
                                (0, t.jsx)("tr", {
                                  children: (0, t.jsx)("td", {
                                    colSpan: 4,
                                    children: (0, t.jsx)(o.EY, {
                                      size: "2",
                                      children: s.T.Localize(
                                        "#subjectauditlog_noentries",
                                      ),
                                    }),
                                  }),
                                }),
                              I.isSuccess &&
                                c > 0 &&
                                m.map((y) =>
                                  (0, t.jsx)(M, { entry: y }, y.timestamp),
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
        function M(_) {
          var g;
          const { entry: r } = _,
            f = (0, A.jn)(r.actor_steamid);
          if (!f.isSuccess || !f.data) return null;
          const U = (g = f.data.public_data) == null ? void 0 : g.persona_name;
          return (0, t.jsxs)("tr", {
            children: [
              (0, t.jsx)("td", {
                children: (0, t.jsx)(o.EY, {
                  size: "2",
                  children: (0, p.P0)(r.timestamp, !1, ""),
                }),
              }),
              (0, t.jsx)("td", {
                children: (0, t.jsxs)("div", {
                  className: n().ReporterCell,
                  children: [
                    (0, t.jsx)(l.Y, {
                      href: `${E.TS.COMMUNITY_BASE_URL}profiles/${r.actor_steamid}`,
                      children: (0, t.jsx)(o.EY, {
                        size: "2",
                        truncate: !0,
                        title: U,
                        className: n().ReporterName,
                        children: U,
                      }),
                    }),
                    (0, t.jsx)(l.Y, {
                      size: "2",
                      href: `${E.TS.COMMUNITY_BASE_URL}moderation/activity/${r.actor_steamid}`,
                      children: "(activity)",
                    }),
                  ],
                }),
              }),
              (0, t.jsx)("td", {
                children: (0, t.jsxs)(o.EY, {
                  size: "2",
                  children: [
                    (0, x.fg)(r.action),
                    r.automated_action &&
                      (0, t.jsx)(t.Fragment, { children: "\xA0(Automated)" }),
                  ],
                }),
              }),
              (0, t.jsx)("td", {
                children: (0, t.jsx)(o.EY, {
                  as: "div",
                  size: "2",
                  children: (0, t.jsx)(L, {
                    eAction: r.action,
                    jsonData: r.additional_json_data,
                  }),
                }),
              }),
            ],
          });
        }
        function L(_) {
          const { eAction: g, jsonData: r } = _;
          let f = {};
          r && (f = JSON.parse(r));
          const U = f.report_id
            ? (0, t.jsxs)("span", { children: ["Report ID: ", f.report_id] })
            : null;
          switch (g) {
            case v.Hd:
              return U;
            case v._F:
              return (0, t.jsxs)(t.Fragment, {
                children: [
                  "Reason: ",
                  (0, x.Jt)(f.reason),
                  f.resolution !== d.CC &&
                    f.resolution !== d.S6 &&
                    (0, t.jsxs)(t.Fragment, {
                      children: [
                        (0, t.jsx)("br", {}),
                        "Resolution: ",
                        (0, x.l)(f.resolution),
                      ],
                    }),
                  f.sanctions &&
                    (0, t.jsxs)(t.Fragment, {
                      children: [
                        (0, t.jsx)("br", {}),
                        "Sanctions: ",
                        f.sanctions.map(x.cB).join(", "),
                      ],
                    }),
                ],
              });
            case v.Nu:
              return U;
            case v.XP:
              return (0, t.jsx)(t.Fragment, {
                children: JSON.stringify(f, null, "	"),
              });
            case v.YI:
              return (0, t.jsxs)(t.Fragment, {
                children: ["New level: ", (0, x.ar)(f.level)],
              });
            case v._7:
              return U;
            default:
              return null;
          }
        }
        function T(_) {
          var g;
          const { subject: r } = _,
            f = r && r.reports && r.reports.length > 0,
            U = [
              ...((g = r == null ? void 0 : r.reports) != null ? g : []),
            ].sort((Q, I) => {
              var c, m;
              return (
                ((c = I.time_reported) != null ? c : 0) -
                ((m = Q.time_reported) != null ? m : 0)
              );
            });
          return (0, t.jsxs)("table", {
            className: n().ModerationTable,
            children: [
              (0, t.jsxs)("colgroup", {
                children: [
                  (0, t.jsx)("col", { className: n().DateCol }),
                  (0, t.jsx)("col", { className: n().ReporterCol }),
                  (0, t.jsx)("col", { className: n().StatusCol }),
                  (0, t.jsx)("col", {}),
                ],
              }),
              (0, t.jsx)("thead", {
                children: (0, t.jsxs)("tr", {
                  children: [
                    (0, t.jsx)("th", {
                      children: (0, t.jsx)(o.EY, {
                        size: "2",
                        weight: "heavy",
                        contrast: "description",
                        children: "Date",
                      }),
                    }),
                    (0, t.jsx)("th", {
                      children: (0, t.jsx)(o.EY, {
                        size: "2",
                        weight: "heavy",
                        contrast: "description",
                        children: "Reporter",
                      }),
                    }),
                    (0, t.jsx)("th", {
                      children: (0, t.jsx)(o.EY, {
                        size: "2",
                        weight: "heavy",
                        contrast: "description",
                        children: "Status",
                      }),
                    }),
                    (0, t.jsx)("th", {
                      children: (0, t.jsx)(o.EY, {
                        size: "2",
                        weight: "heavy",
                        contrast: "description",
                        children: "Reason",
                      }),
                    }),
                  ],
                }),
              }),
              (0, t.jsxs)("tbody", {
                children: [
                  !f &&
                    (0, t.jsx)("tr", {
                      children: (0, t.jsx)("td", {
                        colSpan: 4,
                        children: (0, t.jsx)(o.EY, {
                          size: "2",
                          children: s.T.Localize(
                            "#contentreportslist_noreports",
                          ),
                        }),
                      }),
                    }),
                  f && U.map((Q) => (0, t.jsx)(O, { report: Q }, Q.report_id)),
                ],
              }),
            ],
          });
        }
        function O(_) {
          var g;
          const { report: r } = _,
            f = (0, A.jn)(r.reporter_steamid);
          if (!f.isSuccess || !((g = f.data) != null && g.public_data))
            return null;
          const U = !!r.time_disputed && r.dispute_resolved === d.z_,
            Q =
              r.resolved !== d.z_ &&
              (!r.time_disputed || r.dispute_resolved !== d.z_),
            I = r.time_dispute_resolved !== 0,
            c = r.resolved === d.CC,
            m = f.data.public_data.persona_name;
          return (0, t.jsxs)("tr", {
            children: [
              (0, t.jsx)("td", {
                children: (0, t.jsx)(o.EY, {
                  size: "2",
                  children: (0, p.P0)(r.time_reported, !1, ""),
                }),
              }),
              (0, t.jsx)("td", {
                children: (0, t.jsxs)("div", {
                  className: n().ReporterCell,
                  children: [
                    (0, t.jsx)("a", {
                      href: `${E.TS.COMMUNITY_BASE_URL}profiles/${r.reporter_steamid}`,
                      children: (0, t.jsx)(i.wm, {
                        playerLinkDetails: f.data,
                        size: "X-Small",
                        alt: "Reporter",
                      }),
                    }),
                    (0, t.jsx)(l.Y, {
                      href: `${E.TS.COMMUNITY_BASE_URL}profiles/${r.reporter_steamid}`,
                      children: (0, t.jsx)(o.EY, {
                        title: m,
                        size: "2",
                        truncate: !0,
                        className: n().ReporterName,
                        children: m,
                      }),
                    }),
                  ],
                }),
              }),
              (0, t.jsx)("td", {
                children: (0, t.jsxs)(o.EY, {
                  as: "div",
                  size: "2",
                  children: [
                    !Q &&
                      (0, t.jsx)("span", {
                        children: u.u.Localize(
                          "#moderation_resolutionstatus_pending",
                        ),
                      }),
                    c &&
                      !U &&
                      !I &&
                      (0, t.jsx)("span", {
                        children: s.T.Localize(
                          "#contentreportslist_acquitted_at",
                          (0, p.P0)(r.time_resolved, !1, ""),
                        ),
                      }),
                    Q &&
                      !c &&
                      !U &&
                      !I &&
                      (0, t.jsx)("span", {
                        children: s.T.Localize(
                          "#contentreportslist_resolved_at",
                          (0, p.P0)(r.time_resolved, !1, ""),
                        ),
                      }),
                    U &&
                      !I &&
                      (0, t.jsx)("span", {
                        children: s.T.Localize(
                          "#contentreportslist_disputed_at",
                          (0, p.P0)(r.time_disputed, !1, ""),
                        ),
                      }),
                    I &&
                      (0, t.jsx)("span", {
                        children: s.T.Localize(
                          "#contentreportslist_dispute_resolved_at",
                          (0, p.P0)(r.time_dispute_resolved, !1, ""),
                        ),
                      }),
                  ],
                }),
              }),
              (0, t.jsxs)("td", {
                children: [
                  (0, t.jsx)(o.EY, {
                    as: "div",
                    size: "2",
                    children: (0, x.Jt)(r.report_reason),
                  }),
                  !!r.report_text &&
                    (0, t.jsxs)(o.EY, {
                      as: "div",
                      size: "2",
                      marginTop: "1",
                      children: [
                        (0, t.jsx)(o.EY, {
                          size: "1",
                          weight: "heavy",
                          contrast: "description",
                          children: "Report: ",
                        }),
                        r.report_text,
                      ],
                    }),
                  !!r.time_disputed &&
                    !!r.dispute_details &&
                    (0, t.jsxs)(o.EY, {
                      as: "div",
                      size: "2",
                      marginTop: "1",
                      children: [
                        (0, t.jsx)(o.EY, {
                          size: "1",
                          weight: "heavy",
                          contrast: "description",
                          children: "Dispute: ",
                        }),
                        r.dispute_details,
                      ],
                    }),
                ],
              }),
            ],
          });
        }
      },
      46085: (R, C, e) => {
        "use strict";
        e.d(C, {
          EC: () => Q,
          KQ: () => U,
          Kt: () => L,
          Ky: () => x,
          N8: () => O,
          OI: () => a,
          YL: () => _,
          c3: () => I,
          lY: () => T,
          w3: () => z,
          wy: () => r,
          y4: () => g,
        });
        var t = e(72604),
          i = e(35038),
          o = e(98112),
          l = e(16277),
          A = e(68312),
          p = e(88942),
          u = e(29385),
          v = e(61739),
          d = e(86392);
        const P = "get_reported_content",
          E = "get_reported_content_by_id",
          s = "get_reported_content_audit_log",
          a = (c) => [P, JSON.stringify(c)],
          n = (c) => [E, c],
          B = (c) => [s, c];
        async function x(c, m) {
          return Promise.all([
            c.invalidateQueries({ queryKey: [P], exact: !1 }),
            c.invalidateQueries({ queryKey: n(m) }),
            c.invalidateQueries({ queryKey: B(m) }),
          ]);
        }
        function K(c, m) {
          return {
            queryKey: a(m),
            enabled: (0, d.NX)(m),
            queryFn: async () => {
              const y = i.w.Init(l.Mw);
              y.Body().set_coordinates(l.UC.fromObject(m));
              const D = await l.fL.GetReportedContent(c, y);
              if (!D.BSuccess())
                throw new Error(
                  "Failed in GetReportedContent, EResult: " + D.GetEResult(),
                );
              return D.Body().toObject();
            },
          };
        }
        function z(c) {
          const m = (0, A.KV)();
          return (0, p.I)(K(m, c));
        }
        function h(c, m) {
          return {
            queryKey: n(m),
            queryFn: async () => {
              const y = CProtoBufMsg.Init(
                CContentModeration_GetReportedContentByID_Request,
              );
              y.Body().set_reported_content_id(m);
              const D = await ContentModerationService.GetReportedContentByID(
                c,
                y,
              );
              if (!D.BSuccess())
                throw new Error(
                  "Failed in GetReportedContentByID, EResult: " +
                    D.GetEResult(),
                );
              return D.Body().toObject();
            },
          };
        }
        function j(c) {
          const m = useActiveServiceTransport();
          return useQuery(h(m, c));
        }
        function M(c, m) {
          return {
            queryKey: B(m),
            queryFn: async () => {
              if (!m) return;
              const y = i.w.Init(l.v5);
              return (
                y.Body().set_reported_content_id(m),
                (await l.fL.GetAuditLogByID(c, y)).Body().toObject()
              );
            },
          };
        }
        function L(c) {
          const m = (0, A.KV)();
          return (0, p.I)(M(m, c));
        }
        function T(c) {
          const m = (0, A.KV)(),
            y = (0, u.jE)();
          return (0, v.n)({
            mutationFn: async (D) => {
              const S = i.w.Init(l.Qi);
              S.Body().set_reported_content_id(c),
                S.Body().set_new_level(D.eNewLevel),
                D.eReason && S.Body().set_reason(D.eReason),
                D.strNote && S.Body().set_note(D.strNote);
              const W = await l.fL.EscalateSubjectByID(m, S);
              if (W.GetEResult() !== t.R)
                throw new Error(`Failed to escalate subject: ${W.GetEMsg()}`);
            },
            onSuccess: async () => {
              await Promise.all([
                x(y, c),
                y.invalidateQueries({ queryKey: ["get_claimed"] }),
                y.invalidateQueries({ queryKey: ["get_subject_overview"] }),
              ]);
            },
          });
        }
        function O() {
          const c = (0, A.KV)(),
            m = (0, u.jE)();
          return (0, v.n)({
            mutationFn: async (y) => {
              const D = i.w.Init(l.Nr);
              D.Body().set_reported_content_id(y.reportedContentID);
              const S = await l.fL.SustainModerationByID(c, D);
              if (!S.BSuccess()) throw new Error("EResult " + S.GetEResult());
            },
            onSuccess: async (y, D) => {
              await x(m, D.reportedContentID),
                await m.invalidateQueries({ queryKey: ["get_claimed"] });
            },
          });
        }
        function _(c) {
          const m = (0, u.jE)(),
            y = (0, A.KV)();
          return (0, v.n)({
            mutationKey: ["release_subject", ...c],
            mutationFn: async () => {
              const D = i.w.Init(l.GD);
              for (const W of c) {
                const b = new l.F9();
                b.set_reported_content_id(W),
                  D.Body().add_subjects_to_release(b);
              }
              const S = await l.fL.ReleaseSubjects(y, D);
              if (!S.BSuccess()) throw new Error("EResult " + S.GetEResult());
            },
            onSuccess: async () => {
              await Promise.all([
                m.invalidateQueries({ queryKey: ["get_claimed"] }),
                m.invalidateQueries({ queryKey: ["get_subject_overview"] }),
                ...c.map((D) => x(m, D)),
              ]);
            },
          });
        }
        function g(c, m) {
          const y = (0, A.KV)(),
            D = (0, u.jE)();
          return (0, v.n)({
            mutationFn: async () => {
              const S = i.w.Init(l.LW);
              S.Body().set_reported_content_id(c), S.Body().set_details(m);
              const W = await l.fL.OwnerDisputeModeration(y, S);
              if (!W.BSuccess()) throw new Error("EResult " + W.GetEResult());
            },
            onSuccess: async () => {
              await x(D, c);
            },
          });
        }
        function r(c, m) {
          const y = (0, u.jE)(),
            D = (0, A.KV)();
          return (0, v.n)({
            mutationFn: async () => {
              const S = i.w.Init(l.ps);
              S.Body().set_reported_content_id(c),
                S.Body().set_owner_dispute_details(m);
              const W = await l.fL.UpdateSubjectByID(D, S);
              if (!W.BSuccess()) throw new Error("EResult " + W.GetEResult());
            },
            onSuccess: async () => {
              await x(y, c);
            },
          });
        }
        function f(c, m) {
          return {
            queryKey: ["reporterstats", m],
            queryFn: async () => {
              const y = i.w.Init(l.KD);
              y.Body().set_steamid(m);
              const D = await l.fL.GetReporterStats(c, y);
              if (!D.BSuccess()) throw new Error("EResult " + D.GetEResult());
              return D.Body().toObject();
            },
          };
        }
        function U(c) {
          const m = (0, A.KV)();
          return (0, p.I)(f(m, c));
        }
        function Q(c, m, y) {
          const D = (0, A.KV)(),
            S = (0, u.jE)();
          return (0, v.n)({
            mutationFn: async (W) => {
              const b = i.w.Init(o.Er);
              b.Body().set_steamid(c),
                b.Body().set_comment_thread_id(m),
                b.Body().set_gidcomment(y),
                b.Body().set_reason(W.reason),
                b.Body().set_note(W.message);
              for (const F of W.sanctions) {
                const G = new o.u6();
                G.set_sanction(F.sanction),
                  F.days && G.set_days(F.days),
                  b.Body().add_sanctions(G);
              }
              const N = await o.BE.SanctionComment(D, b);
              if (!N.BSuccess())
                throw new Error(
                  `SanctionComment failed. EResult: ${N.GetEResult()} (${N.GetErrorMessage()})`,
                );
            },
            onSuccess: async () => {
              await S.invalidateQueries({ queryKey: ["get_claimed"] });
            },
          });
        }
        function I(c, m, y) {
          const D = (0, A.KV)(),
            S = (0, u.jE)();
          return (0, v.n)({
            mutationFn: async () => {
              const W = i.w.Init(o.RX);
              W.Body().set_steamid(c),
                W.Body().set_comment_thread_id(m),
                W.Body().set_gidcomment(y),
                W.Body().set_report_action(o.du.Pn),
                W.Body().set_resolve(!0),
                await o.Vi.UpdateCommentReportState(D, W);
            },
            onSuccess: async () => {
              await S.invalidateQueries({ queryKey: ["get_claimed"] });
            },
          });
        }
      },
      76617: (R, C, e) => {
        "use strict";
        e.d(C, { V: () => v });
        function t(d) {
          return Object.prototype.toString.call(d) === "[object Object]";
        }
        function i(d) {
          if (!t(d)) return !1;
          const P = d.constructor;
          if (typeof P == "undefined") return !0;
          const E = P.prototype;
          return !(
            !t(E) || !Object.prototype.hasOwnProperty.call(E, "isPrototypeOf")
          );
        }
        function o(...d) {
          return JSON.stringify(d, (P, E) => {
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
        var l = e(90626),
          A = e(7850);
        const p = (0, l.createContext)({ instances: {}, factories: {} });
        function u(d) {
          const { name: P, fnFactory: E, children: s } = d,
            a = React.useContext(p),
            [n] = useState({}),
            B = useMemo(
              () => ({
                instances: n,
                factories: { ...a.factories, [P]: E },
                parent: a,
              }),
              [n, P, a],
            );
          return jsx(p.Provider, { value: B, children: s });
        }
        function v(d, P) {
          var E;
          const s = (0, l.useContext)(p),
            a = typeof d == "string" ? d : o(...d);
          let n = s;
          for (; n; ) {
            if (a in n.instances) return n.instances[a];
            if (a in n.factories) break;
            n = n.parent;
          }
          const x = (
            (E = n == null ? void 0 : n.factories[a]) != null ? E : P
          )();
          return ((n != null ? n : s).instances[a] = x), x;
        }
      },
      66243: (R, C, e) => {
        "use strict";
        e.d(C, { Oh: () => P, n9: () => v, sP: () => A });
        var t = e(7850),
          i = e(24660),
          o = e(44375),
          l = e.n(o);
        function A(s) {
          const { children: a, ...n } = s;
          return (0, t.jsx)(i.fu, {
            className: o.GreenButton,
            type: "button",
            ...n,
            children: (0, t.jsx)("span", { children: a }),
          });
        }
        function p(s) {
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
        function v(s) {
          const { children: a, ...n } = s;
          return (0, t.jsx)(i.fu, {
            className: o.BlueButton,
            type: "button",
            ...n,
            children: (0, t.jsx)("span", { children: a }),
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
        function P(s) {
          const { children: a, ...n } = s;
          return (0, t.jsx)(i.fu, {
            className: o.GreyButton,
            type: "button",
            ...n,
            children: (0, t.jsx)("span", { children: a }),
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
      16339: (R) => {
        R.exports = {
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
      38878: (R) => {
        R.exports = {
          "Variant-basic": "xqG5GdDEeYauX2ots2DLl",
          "Size-3": "_1K_Ve980-qBq8l1-cZJdw1",
          "Variant-inset": "_2Z-Zr4UW8-jHrU5olM_rpn",
          "Variant-inset-focus": "_2RYWJyn7v0tvoY5cR63QuI",
          Focusable: "_1cd-wdIp5lIWsydAxII-vY",
          "Variant-inset-glass": "_32JdL4FubsmwHfHXm6OB9I",
          "Variant-underline": "yV_Aq5WutzzittgbOJ1R-",
          "Variant-dim": "_2qQgKJgeeqc9lEI-i7HdsM",
          "Variant-highlight": "EFvA4gLIikUE06LDGCqg5",
          "Variant-bare": "_3vxqpebgJYIYNTcigTXx21",
          ControlBox: "_2gL71Yq-HzVI9oOGyWu3jH",
          Hoverable: "_8JNTStqpIYaMWQJx6g6hK",
          Clickable: "_1KONo9A0HE0_NOK2F6uvXy",
          Disabled: "_2I6xXve3oCxh8fra7SWTnq",
          "Size-1": "_2e1xlPghh48rkP13ydQOPb",
          "Size-2": "B7HtDxiiORArIRcBR9kVB",
        };
      },
      24089: (R) => {
        R.exports = { TextEntry: "_1vE-LsK6l_D_5yjbywZV1p" };
      },
      65274: (R) => {
        R.exports = {
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
      50122: (R) => {
        R.exports = {
          TextLink: "_1DLGHwAfYnbFVIwbZjO2cn",
          TextLinkButton: "_30P9kUCljAZzX5fl1DHGJe",
          Truncate: "_1FVRWG5uD8VhzoEiOZWrEo",
          "Underline-always": "_3ASRyX4FTT_eMM5S5yrkwK",
          "Underline-never": "_1gsOIvG4APXjSra-_55rdz",
          "Underline-auto": "_2OgYmw12nDHXtyT9za9yzL",
          "Underline-hover": "_3RITvcDUZq-hpnXRpiayfs",
        };
      },
      30770: (R) => {
        R.exports = {
          EscalateSubjectDialogCtn: "_2JObmr3sTdkGUMl1qy7pFq",
          BottomButtons: "_3ismg57mYPglYuxYD8MyWH",
          EscalationLevelSelect: "eM6-NVA-Wty4aAN1I5edn",
          ReasonTextArea: "_2Y0347paZ_xn2vI7jgBpkJ",
        };
      },
      59884: (R) => {
        R.exports = {
          BlockList: "F2uRfcfN3gZAD8WCNOVq6",
          BlockListItem: "eti_An9vsSQWyfrrZgqZO",
          DefaultItem: "zvsH8nLNLnBES_qChiT1v",
        };
      },
      20609: (R) => {
        R.exports = {
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
      44375: (R) => {
        R.exports = {
          GreenButton: "_23fSnYfnMQqkgm3ROkJhrO",
          GreyButton: "_15dbpkIdbzeDJlZYQEhn1d",
          BlueButton: "_14GZWzJgooP0mbfTvEQnjA",
        };
      },
    },
  ]);
})();
