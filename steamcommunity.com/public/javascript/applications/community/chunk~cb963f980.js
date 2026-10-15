/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(() => {
  (self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
    [60362],
    {
      76105: (R, O, t) => {
        "use strict";
        t.d(O, { t: () => o });
        var e = t(72609);
        const i = "fef49e7fa7e1997310d705b2a6158ff8dc1cdfeb";
        function o(E, B) {
          let u = "0000000000000000000000000000000000000000";
          typeof E == "string" ? (u = E) : E && (u = d(E) || u);
          let p = ".jpg";
          u === "0000000000000000000000000000000000000000" && (u = i),
            u.length == 44 && ((p = u.slice(-4)), (u = u.slice(0, 40)));
          let _ = e.TS.AVATAR_BASE_URL;
          switch (
            (_ ||
              ((_ = e.TS.MEDIA_CDN_COMMUNITY_URL + "images/avatars/"),
              (_ += u.slice(0, 2) + "/")),
            (_ += u),
            B)
          ) {
            case "X-Small":
            case "Small":
              break;
            case "Medium":
            case "MediumLarge":
              _ += "_medium";
              break;
            case "Large":
            case "X-Large":
            case "FillArea":
              _ += "_full";
              break;
          }
          return (_ += p), _;
        }
        function d(E) {
          return E
            ? (typeof E[Symbol.iterator] == "function"
                ? Array.from(E)
                : Object.values(E).filter((u) => typeof u == "number")
              )
                .map((u) => u.toString(16).padStart(2, "0"))
                .join("")
            : "";
        }
      },
      30986: (R, O, t) => {
        "use strict";
        t.d(O, { Ul: () => a, wm: () => f });
        var e = t(7850);
        const i =
            "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD//gA7Q1JFQVRPUjogZ2QtanBlZyB2MS4wICh1c2luZyBJSkcgSlBFRyB2NjIpLCBxdWFsaXR5ID0gOTAK/9sAQwADAgIDAgIDAwMDBAMDBAUIBQUEBAUKBwcGCAwKDAwLCgsLDQ4SEA0OEQ4LCxAWEBETFBUVFQwPFxgWFBgSFBUU/9sAQwEDBAQFBAUJBQUJFA0LDRQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQU/8AAEQgAIAAgAwEiAAIRAQMRAf/EAB8AAAEFAQEBAQEBAAAAAAAAAAABAgMEBQYHCAkKC//EALUQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+v/EAB8BAAMBAQEBAQEBAQEAAAAAAAABAgMEBQYHCAkKC//EALURAAIBAgQEAwQHBQQEAAECdwABAgMRBAUhMQYSQVEHYXETIjKBCBRCkaGxwQkjM1LwFWJy0QoWJDThJfEXGBkaJicoKSo1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoKDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uLj5OXm5+jp6vLz9PX29/j5+v/aAAwDAQACEQMRAD8A/P4mW5nmllmeSR3LMzMSSc1a07R73V72KzsILi9u5TiOC2RpJHPoFGSarQ/ef6n+de4fAn9oaL4D+DfGX9i6Uf8AhO9XSKDT9eZY3WxiDZcBGByTkn0JCZBxQB41qeiX+iXslnqNtdWF3H9+3uo2jkX6q2CKpgy208MsUzxyI4ZWViCDmvsr9rrUdT1j9nb4T6h8RBbH4qXUs0zMsSxXJ04hivnKoAU5MPGBg7uM7q+NpvvJ9R/OgAh+8/1P867T4POI/iz4Mc6U+u7NZtG/suPbuu8TKfKG4hct93njnmuKIltp5opYXjkRyrKykEHNWbDVbvSr63vbKaezvLeRZYbi3ZkkidTlWVhyCCMgjpQB6l+1F411nx58dPFWpa5a3mnXaXP2ZNOvXVpLKNBhYflJUY5PB5JJ6k15LN95PqP51a1PWr7WtQnvtRuLm/vrhzJNc3TtJLIx6lmbJJ9zVQCW5nhiiheSR3CqqqSSc0Af/9k=",
          o =
            t.p +
            "images/applications/community/avatar_default_full.jpg?v=valveisgoodatcaching",
          d =
            "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD//gA7Q1JFQVRPUjogZ2QtanBlZyB2MS4wICh1c2luZyBJSkcgSlBFRyB2NjIpLCBxdWFsaXR5ID0gODAK/9sAQwAGBAUGBQQGBgUGBwcGCAoQCgoJCQoUDg8MEBcUGBgXFBYWGh0lHxobIxwWFiAsICMmJykqKRkfLTAtKDAlKCko/9sAQwEHBwcKCAoTCgoTKBoWGigoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgo/8AAEQgAQABAAwEiAAIRAQMRAf/EAB8AAAEFAQEBAQEBAAAAAAAAAAABAgMEBQYHCAkKC//EALUQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+v/EAB8BAAMBAQEBAQEBAQEAAAAAAAABAgMEBQYHCAkKC//EALURAAIBAgQEAwQHBQQEAAECdwABAgMRBAUhMQYSQVEHYXETIjKBCBRCkaGxwQkjM1LwFWJy0QoWJDThJfEXGBkaJicoKSo1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoKDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uLj5OXm5+jp6vLz9PX29/j5+v/aAAwDAQACEQMRAD8A8Inmk8+T94/3j/EfWmedJ/z0f/vo0T/6+T/eP86ZQA/zpP8Ano//AH0aPOk/56P/AN9GmVo6Loeq65M0Wj6ddXrr94QRF9v1I6fjQBR86T/no/8A30aPOk/56P8A99GtHW/Dus6GV/tjS7yyD8K00RVW+h6GsugB/nSf89H/AO+jT4JpPPj/AHj/AHh/EfWoafB/r4/94fzoAJ/9fJ/vH+dMp8/+vk/3j/OmUAXdE099W1mw06Jgsl3PHApPYswUH9a+qPF3iHSPhF4S0+003TxK0hMcEAbZvIA3SO2OvIz6k18nW88ttcRz28jxTRMHSRGKsrA5BBHQg1b1TWdT1fy/7V1G8vfLzs+0TNJtz1xknHQUAfUXw+8c6Z8UdN1HS9V0xIpUTM1s7eYkiE43KcAgg/lxg180+NtEHhzxZqmkqxdLWcojHqUPK598EV9CfBbwpF4G8J3fiLxA4trm5hEsnmceRCOQD/tHqR9B1r568a63/wAJH4r1TVghRLqYuinqE6KD74AoAxafB/r4/wDeH86ZT4P9fH/vD+dABP8A6+T/AHj/ADplPn/18n+8f50ygArt/gtpltq/xK0e2vYxJArPMUYZDFEZhn2yBXEV0/w203VNX8YWdloOoHTtQkWQx3IZl2gISeV55AI/GgD1H9pvxPdi/s/DcDGOz8pbqfHWRizBQfYbc/U+1eD12PxW0fWtE8Tpa+I9UOqXpt0cTl2bCEthctz1B/OuOoAKfB/r4/8AeH86ZT4P9fH/ALw/nQAT/wCvk/3j/OmVNPDJ58n7t/vH+E+tM8mT/nm//fJoAZV7Q9Xv9C1KLUNJuGtryMEJIoBIyCD1BHQmqnkyf883/wC+TR5Mn/PN/wDvk0AaHiHXtT8RX4vdau2u7oIIxIygHaCSBwB6msyn+TJ/zzf/AL5NHkyf883/AO+TQAynwf6+P/eH86PJk/55v/3yafBDJ58f7t/vD+E+tAH/2Q==";
        var E = t(99412),
          B = t(90626);
        function u(x) {
          const { rgSources: P, onIncrementalError: C, alt: I, ...L } = x,
            [M, c] = (0, B.useState)(0),
            g = P[M];
          return (0, e.jsx)("img", {
            onError: (r) => {
              c((v) => v + 1), C == null || C(r, g, M);
            },
            alt: I,
            ...L,
            src: g,
          });
        }
        var p = t(72609),
          _ = t(64238),
          D = t.n(_),
          A = t(16339),
          s = t(76105);
        function a(x) {
          const {
              avatarURL: P,
              size: C,
              statusStyle: I,
              statusPosition: L,
              className: M,
              children: c,
              isOnline: g,
              isInGame: r,
              isWatchingBroadcast: v,
              isAwayOrSnooze: U,
              alt: W,
            } = x,
            T = [];
          return (
            P && T.push(P),
            T.push(z(C != null ? C : "Medium")),
            (0, e.jsxs)("div", {
              className: D()(
                A.AvatarHolder,
                {
                  [A.Offline]: !g,
                  [A.Online]: g,
                  [A.InGame]: r,
                  [A.WatchingBroadcast]: v,
                  [A.AwayOrSnooze]: U,
                },
                M,
              ),
              "data-size": C,
              "data-status-position": L,
              children: [
                (0, e.jsx)("div", { className: A.AvatarStatus, style: I }),
                (0, e.jsx)(u, {
                  className: D()(A.Avatar),
                  rgSources: T,
                  draggable: !1,
                  alt: W,
                }),
                c,
              ],
            })
          );
        }
        function n(x) {
          const {
            profileItem: P,
            className: C,
            bDisableAnimation: I,
            ...L
          } = x;
          if (!P || !P.image_small || P.image_small.length == 0) return null;
          let M = I ? P.image_large : P.image_small;
          return (
            M || (M = P.image_small),
            M.startsWith("https://") ||
              (M = Config.MEDIA_CDN_COMMUNITY_URL + "images/" + M),
            jsx("div", {
              className: classNames(styles.AvatarFrame, C),
              ...L,
              children: jsx("img", {
                className: styles.AvatarFrameImg,
                src: M,
                alt: "",
                role: "presentation",
              }),
            })
          );
        }
        function f(x) {
          var P, C, I, L, M, c, g;
          const {
            playerLinkDetails: r,
            animatedAvatar: v,
            avatarFrame: U,
            size: W,
            ...T
          } = x;
          let l = (0, s.t)(
            (P = r.public_data) == null ? void 0 : P.sha_digest_avatar,
            W,
          );
          return (
            (C = v == null ? void 0 : v.image_small) != null &&
              C.length &&
              (l = p.TS.MEDIA_CDN_COMMUNITY_URL + "images/" + v.image_small),
            (0, e.jsx)(a, {
              avatarURL: l,
              size: W,
              isOnline:
                ((I = r.private_data) == null ? void 0 : I.persona_state) ===
                E.UXk,
              isInGame:
                ((L = r.private_data) == null ? void 0 : L.game_id) !== void 0,
              isWatchingBroadcast:
                ((M = r.private_data) == null
                  ? void 0
                  : M.watching_broadcast_accountid) !== void 0,
              isAwayOrSnooze:
                ((c = r.private_data) == null ? void 0 : c.persona_state) ===
                  E.PrD ||
                ((g = r.private_data) == null ? void 0 : g.persona_state) ===
                  E.vPz,
              ...T,
            })
          );
        }
        function j(x, P) {
          const [C, I] = useState(x !== "None");
          return (
            useEffect(() => {
              if ((I(x !== "None"), x === "None" || x === "Infinite")) return;
              let L;
              switch (x) {
                case "Short":
                  L = 2500;
                  break;
                case "Medium":
                  L = 5e3;
                  break;
                case "Long":
                  L = 1e4;
                  break;
              }
              const M = setTimeout(() => {
                I(P);
              }, L);
              return () => {
                clearTimeout(M);
              };
            }, [x, P]),
            C
          );
        }
        function Q(x) {
          var P, C;
          const {
              loopDuration: I = "Infinite",
              bParentHovered: L,
              bLimitProfileFrameAnimationTime: M,
              className: c,
              ...g
            } = x,
            [r, v] = useState(!1),
            U = j(I, r),
            W = useProfileItemsEquipped(
              g.playerLinkDetails.public_data.steamid,
            );
          return jsx("div", {
            className: c,
            onMouseEnter: () => v(!0),
            onMouseLeave: () => v(!1),
            children: jsx(f, {
              ...g,
              animatedAvatar: U
                ? (P = W.data) == null
                  ? void 0
                  : P.animated_avatar
                : void 0,
              children: jsx(n, {
                profileItem: (C = W.data) == null ? void 0 : C.avatar_frame,
                bDisableAnimation: M && !U,
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
              return (0, p.YJ)(d);
            case "Large":
            case "X-Large":
            case "FillArea":
              return (0, p.YJ)(o);
          }
        }
      },
      1522: (R, O, t) => {
        "use strict";
        t.d(O, { f: () => D });
        var e = t(7850),
          i = t(3877),
          o = t(98929),
          d = t(86946),
          E = t(64238),
          B = t.n(E),
          u = t(80549),
          p = t(24660),
          _ = t(3166);
        function D(s) {
          const {
              rows: a = 3,
              resize: n = "none",
              ref: f,
              value: j,
              onTextChange: Q,
              onChange: z,
              disabled: x,
              variant: P,
              ...C
            } = s,
            I = (r) => {
              x || (Q(r.target.value), z && z(r));
            },
            L = (0, u.f)("TextArea", P),
            M = (0, _.Qn)(),
            c = (0, d.w)({
              ...C,
              className: B()((0, i.T)(), (0, o.F)()),
              style: { resize: n },
              cursor: "text",
              disabled: x,
              variant: L,
            }),
            g = M ? A : "textarea";
          return (0, e.jsx)(g, {
            ref: f,
            ...c,
            value: j || "",
            onChange: I,
            rows: a,
            readOnly: x,
            "aria-disabled": x,
          });
        }
        function A(s) {
          return (0, e.jsx)(p.dO, { noFocusRing: !0, ...s });
        }
      },
      15252: (R, O, t) => {
        "use strict";
        t.d(O, { Ae: () => A, EY: () => _, U6: () => D });
        var e = t(7850),
          i = t(1039),
          o = t(69289),
          d = t(8928),
          E = t(64238),
          B = t.n(E),
          u = t(65274),
          p = t.n(u);
        function _(s) {
          const { as: a = "span", ref: n, className: f, ...j } = s,
            Q = a;
          return (0, e.jsx)(Q, {
            ref: n,
            ...(0, o.mz)({ ...j, className: B()(u.Text, f) }, A),
          });
        }
        const D = [
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
                var f;
                return [
                  "--text-color",
                  (0, o.To)(
                    s,
                    (f = (0, i.I)(a.contrast, n)) != null ? f : "body",
                  ),
                ];
              },
            },
            {
              prop: "contrast",
              responsive: !0,
              cssProperty: (s, a, n) => {
                var f;
                return [
                  "--text-color",
                  (0, o.To)(
                    (f = (0, i.I)(a.color, n)) != null ? f : "text-body",
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
          A = [
            ...D,
            ...d.L,
            {
              prop: "size",
              responsive: !0,
              className: (s) => u[`TextSize-${s}`],
            },
          ];
      },
      86336: (R, O, t) => {
        "use strict";
        t.d(O, { W: () => A, Y: () => _ });
        var e = t(7850),
          i = t(50122),
          o = t.n(i),
          d = t(15252),
          E = t(69289),
          B = t(70182),
          u = t(3166),
          p = t(2333);
        function _(s) {
          const { underline: a = "auto", ...n } = s,
            f = (0, E.mz)({ ...n, underline: a, className: i.TextLink }, D);
          return (0, e.jsx)(p.o, { ...f });
        }
        const D = [
          ...d.Ae,
          { prop: "underline", className: (s) => i[`Underline-${s}`] },
        ];
        function A(s) {
          var a;
          const { underline: n = "auto", focusable: f, navProps: j, ...Q } = s,
            z = (0, u.Qn)(),
            x =
              (a = f != null ? f : j == null ? void 0 : j.focusable) != null
                ? a
                : !!Q.onClick,
            P = (0, e.jsx)("span", {
              role: "button",
              ...(0, E.mz)(
                { ...Q, underline: n, className: i.TextLinkButton },
                D,
              ),
            });
          return z && (x || j)
            ? (0, e.jsx)(B.J, { ...(j || {}), focusable: x, children: P })
            : P;
        }
      },
      15860: (R, O, t) => {
        "use strict";
        t.d(O, { L: () => B, c: () => E });
        var e = t(75916),
          i = t(76617),
          o = t(58632),
          d = t.n(o);
        function E(u, p) {
          return new (d())(
            async (_) => {
              const D = [..._],
                A = await e.xtC.GetPlayerLinkDetails(u, { steamids: D }),
                s = new Map();
              return (
                A.Body()
                  .accounts()
                  .forEach((a) => {
                    const n = a.toObject();
                    s.set(n.public_data.steamid, n);
                  }),
                D.map((a) => {
                  var n;
                  return (n = s.get(a)) != null ? n : null;
                })
              );
            },
            { maxBatchSize: 100, cache: !1, ...p },
          );
        }
        function B(u) {
          return (0, i.V)("PlayerLinkDetails", () => E(u));
        }
      },
      85978: (R, O, t) => {
        "use strict";
        t.d(O, { jn: () => D });
        var e = t(72609),
          i = t(68312),
          o = t(20117),
          d = t(88942),
          E = t(15860),
          B = t(99412);
        function u(s) {
          var a, n, f, j, Q;
          return (
            (a = s == null ? void 0 : s.private_data) == null ||
              delete a.account_name,
            (n = s == null ? void 0 : s.public_data) == null ||
              delete n.account_flags,
            (f = s == null ? void 0 : s.public_data) == null ||
              delete f.ban_expires_time,
            (j = s == null ? void 0 : s.public_data) == null ||
              delete j.privacy_state,
            ((Q = s == null ? void 0 : s.public_data) == null
              ? void 0
              : Q.profile_state) !== B.IiA &&
              (s == null || delete s.private_data),
            s
          );
        }
        function p(s) {
          return ["PlayerLinkDetails", s];
        }
        function _(s, a) {
          const n =
            typeof a == "number"
              ? o.b2.InitFromAccountID(a, e.TS.EUNIVERSE).ConvertTo64BitString()
              : a;
          return {
            queryKey: p(n),
            queryFn: async () => {
              if (n) {
                const f = await s.load(n);
                return u(f);
              }
              return null;
            },
            enabled: !!n,
          };
        }
        function D(s) {
          const a = (0, i.KV)(),
            n = (0, E.L)(a);
          return (0, d.I)(_(n, s));
        }
        function A(s, a) {
          a.forEach((n) => {
            var f;
            (f = n == null ? void 0 : n.public_data) != null &&
              f.steamid &&
              s.setQueryData(p(n.public_data.steamid), n);
          });
        }
      },
      72524: (R, O, t) => {
        "use strict";
        t.d(O, { R: () => a });
        var e = t(7850),
          i = t(20476),
          o = t(90626),
          d = t(86067),
          E = t(26072),
          B = t(46085),
          u = t(30770),
          p = t.n(u),
          _ = t(19298),
          D = t(1522),
          A = t(68031),
          s = t(75083);
        function a(n) {
          const { reportedContentID: f, onClose: j } = n,
            [Q, z] = (0, o.useState)(i.PV),
            x = (0, B.lY)(f),
            [P, C] = (0, o.useState)(""),
            I = async () => {
              await x.mutateAsync({ eNewLevel: Q, strNote: P }), j();
            };
          return (0, e.jsxs)(_.Z, {
            className: p().EscalateSubjectDialogCtn,
            children: [
              (0, e.jsx)(_.Z, {
                children: d.T.Localize("#moderation_escalation_description"),
              }),
              (0, e.jsxs)("select", {
                className: p().EscalationLevelSelect,
                value: Q,
                onChange: (L) => z(parseInt(L.target.value)),
                children: [
                  (0, e.jsx)("option", {
                    value: i.HH,
                    children: d.T.Localize("#moderation_escalationlevel_any"),
                  }),
                  (0, e.jsx)("option", {
                    value: i.lp,
                    children: d.T.Localize(
                      "#moderation_escalationlevel_supervisor",
                    ),
                  }),
                  (0, e.jsx)("option", {
                    value: i.PV,
                    children: d.T.Localize("#moderation_escalationlevel_valve"),
                  }),
                ],
              }),
              (0, e.jsx)("label", {
                children: d.T.Localize("#moderation_escalation_escalationnote"),
              }),
              (0, e.jsx)(D.f, { onTextChange: C, value: P }),
              (0, e.jsxs)(A.s, {
                direction: "row",
                justify: "end",
                gap: "2",
                marginTop: "2",
                children: [
                  (0, e.jsx)(s.$, {
                    color: "dull",
                    onClick: j,
                    children: E.u.Localize("#moderation_cancel"),
                  }),
                  (0, e.jsx)(s.$, {
                    onClick: I,
                    loading: x.isPending,
                    children: d.T.Localize("#moderation_escalation_escalate"),
                  }),
                ],
              }),
            ],
          });
        }
      },
      14432: (R, O, t) => {
        "use strict";
        t.d(O, { F: () => D });
        var e = t(7850),
          i = t(86392),
          o = t(90626),
          d = t(26072),
          E = t(59884),
          B = t.n(E),
          u = t(24660),
          p = t(19298),
          _ = t(66243);
        function D(A) {
          const [s, a] = (0, o.useState)(null),
            [n, f] = (0, o.useState)([]),
            [j, Q] = (0, o.useState)(!1),
            [z, x] = (0, o.useState)(!1);
          let P = A.reasons;
          for (const c of n) P = P[c].children;
          const C = s !== null ? (0, i.V$)(s) : null,
            I = s !== null ? (0, i.GA)(s) : null,
            L = () => {
              s !== null
                ? a(null)
                : n.length === 0
                  ? A.onSelect(null)
                  : f(n.slice(0, -1));
            },
            M = () => {
              let c = s;
              c !== null &&
                (j && (0, i.V$)(c) !== null && (c = (0, i.V$)(c)),
                z && (0, i.GA)(c) !== null && (c = (0, i.GA)(c)),
                A.onSelect(c));
            };
          return (0, e.jsxs)("div", {
            children: [
              s === null &&
                (0, e.jsxs)(e.Fragment, {
                  children: [
                    (0, e.jsx)("div", {
                      className: B().BlockList,
                      children: P.map((c, g) => {
                        const r = () => {
                          if ((0, i.Ju)(c)) {
                            const v = [...n];
                            v.push(g), f(v);
                          } else if ((0, i.X$)(c))
                            (0, i.V$)(c.value) || (0, i.GA)(c.value)
                              ? a(c.value)
                              : A.onSelect(c.value);
                          else throw new Error("This should be unreachable.");
                        };
                        return (0, i.Ur)(c)
                          ? (0, e.jsx)(
                              u.Ii,
                              {
                                className: B().BlockListItem,
                                href: c.url,
                                children: d.u.Localize(c.strLocToken),
                              },
                              c.url,
                            )
                          : (0, e.jsxs)(
                              p.Z,
                              {
                                onActivate: r,
                                className: B().BlockListItem,
                                children: [
                                  (0, e.jsx)("span", {
                                    children: (0, i.Ju)(c)
                                      ? d.u.Localize(c.strLocToken)
                                      : (0, i.Jt)(c.value),
                                  }),
                                  (0, i.Ju)(c) &&
                                    (0, e.jsx)("span", { children: "\u25B6" }),
                                ],
                              },
                              g,
                            );
                      }),
                    }),
                    (0, e.jsx)(_.n9, { onClick: L, children: "Back" }),
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
                            checked: j,
                            onChange: (c) => Q(c.target.checked),
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
                            onChange: (c) => x(c.target.checked),
                          }),
                          " Deepfake",
                        ],
                      }),
                    (0, e.jsxs)("div", {
                      className: B().BottomButtons,
                      children: [
                        (0, e.jsx)(_.n9, { onClick: L, children: "Back" }),
                        (0, e.jsx)(_.n9, { onClick: M, children: "Continue" }),
                      ],
                    }),
                  ],
                }),
            ],
          });
        }
      },
      13725: (R, O, t) => {
        "use strict";
        t.d(O, { B8: () => Q, lX: () => L });
        var e = t(7850),
          i = t(30986),
          o = t(15252),
          d = t(86336),
          E = t(85978),
          B = t(16114),
          u = t(26072),
          p = t(80151),
          _ = t(49527),
          D = t(85599),
          A = t(3166),
          s = t(86067),
          a = t(20609),
          n = t.n(a),
          f = t(46085),
          j = t(86392);
        function Q(c) {
          const { reportedContentID: g } = c;
          return g ? (0, e.jsx)(P, { ...c }) : (0, e.jsx)(z, {});
        }
        function z(c) {
          return (0, e.jsx)("div", {
            children: (0, e.jsxs)("table", {
              className: n().ModerationTable,
              children: [
                (0, e.jsx)(x, {}),
                (0, e.jsx)("tbody", {
                  children: (0, e.jsx)("tr", {
                    children: (0, e.jsx)("td", {
                      colSpan: 4,
                      children: (0, e.jsx)(o.EY, {
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
                      children: (0, e.jsx)(o.EY, {
                        size: "2",
                        weight: "heavy",
                        contrast: "description",
                        children: "Date",
                      }),
                    }),
                    (0, e.jsx)("th", {
                      children: (0, e.jsx)(o.EY, {
                        size: "2",
                        weight: "heavy",
                        contrast: "description",
                        children: "Actor",
                      }),
                    }),
                    (0, e.jsx)("th", {
                      children: (0, e.jsx)(o.EY, {
                        size: "2",
                        weight: "heavy",
                        contrast: "description",
                        children: "Action",
                      }),
                    }),
                    (0, e.jsx)("th", {
                      children: (0, e.jsx)(o.EY, {
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
        function P(c) {
          var g, r, v, U, W;
          const T = (0, f.Kt)(c.reportedContentID),
            l =
              (v =
                (r =
                  (g = T == null ? void 0 : T.data) == null
                    ? void 0
                    : g.entries) == null
                  ? void 0
                  : r.length) != null
                ? v
                : 0,
            m =
              (W = (U = T.data) == null ? void 0 : U.entries) != null ? W : [];
          return (
            m.sort((y, h) => h.timestamp - y.timestamp),
            (0, e.jsx)("div", {
              children:
                l > 0 &&
                (0, e.jsxs)("table", {
                  className: n().ModerationTable,
                  children: [
                    (0, e.jsx)(x, {}),
                    (0, e.jsxs)("tbody", {
                      children: [
                        T === void 0 &&
                          (0, e.jsx)("tr", {
                            children: (0, e.jsx)("td", {
                              colSpan: 4,
                              children: (0, e.jsx)(o.EY, {
                                size: "2",
                                children: s.T.Localize(
                                  "#subjectauditlog_noentries",
                                ),
                              }),
                            }),
                          }),
                        T &&
                          (0, e.jsxs)(e.Fragment, {
                            children: [
                              T.isLoading &&
                                (0, e.jsx)("tr", {
                                  children: (0, e.jsx)("td", {
                                    colSpan: 4,
                                    children: (0, e.jsx)(D.t, {}),
                                  }),
                                }),
                              T.isError &&
                                (0, e.jsx)("tr", {
                                  children: (0, e.jsx)("td", {
                                    colSpan: 4,
                                    children: (0, e.jsx)(o.EY, {
                                      size: "2",
                                      children: s.T.Localize(
                                        "#subjectauditlog_error",
                                      ),
                                    }),
                                  }),
                                }),
                              T.isSuccess &&
                                l === 0 &&
                                (0, e.jsx)("tr", {
                                  children: (0, e.jsx)("td", {
                                    colSpan: 4,
                                    children: (0, e.jsx)(o.EY, {
                                      size: "2",
                                      children: s.T.Localize(
                                        "#subjectauditlog_noentries",
                                      ),
                                    }),
                                  }),
                                }),
                              T.isSuccess &&
                                l > 0 &&
                                m.map((y) =>
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
        function C(c) {
          var g;
          const { entry: r } = c,
            v = (0, E.jn)(r.actor_steamid);
          if (!v.isSuccess || !v.data) return null;
          const U = (g = v.data.public_data) == null ? void 0 : g.persona_name;
          return (0, e.jsxs)("tr", {
            children: [
              (0, e.jsx)("td", {
                children: (0, e.jsx)(o.EY, {
                  size: "2",
                  children: (0, B.P0)(r.timestamp, !1, ""),
                }),
              }),
              (0, e.jsx)("td", {
                children: (0, e.jsxs)("div", {
                  className: n().ReporterCell,
                  children: [
                    (0, e.jsx)(d.Y, {
                      href: `${A.TS.COMMUNITY_BASE_URL}profiles/${r.actor_steamid}`,
                      children: (0, e.jsx)(o.EY, {
                        size: "2",
                        truncate: !0,
                        title: U,
                        className: n().ReporterName,
                        children: U,
                      }),
                    }),
                    (0, e.jsx)(d.Y, {
                      size: "2",
                      href: `${A.TS.COMMUNITY_BASE_URL}moderation/activity/${r.actor_steamid}`,
                      children: "(activity)",
                    }),
                  ],
                }),
              }),
              (0, e.jsx)("td", {
                children: (0, e.jsxs)(o.EY, {
                  size: "2",
                  children: [
                    (0, j.fg)(r.action),
                    r.automated_action &&
                      (0, e.jsx)(e.Fragment, { children: "\xA0(Automated)" }),
                  ],
                }),
              }),
              (0, e.jsx)("td", {
                children: (0, e.jsx)(o.EY, {
                  as: "div",
                  size: "2",
                  children: (0, e.jsx)(I, {
                    eAction: r.action,
                    jsonData: r.additional_json_data,
                  }),
                }),
              }),
            ],
          });
        }
        function I(c) {
          const { eAction: g, jsonData: r } = c;
          let v = {};
          r && (v = JSON.parse(r));
          const U = v.report_id
            ? (0, e.jsxs)("span", { children: ["Report ID: ", v.report_id] })
            : null;
          switch (g) {
            case p.Hd:
              return U;
            case p._F:
              return (0, e.jsxs)(e.Fragment, {
                children: [
                  "Reason: ",
                  (0, j.Jt)(v.reason),
                  v.resolution !== _.CC &&
                    v.resolution !== _.S6 &&
                    (0, e.jsxs)(e.Fragment, {
                      children: [
                        (0, e.jsx)("br", {}),
                        "Resolution: ",
                        (0, j.l)(v.resolution),
                      ],
                    }),
                  v.sanctions &&
                    (0, e.jsxs)(e.Fragment, {
                      children: [
                        (0, e.jsx)("br", {}),
                        "Sanctions: ",
                        v.sanctions.map(j.cB).join(", "),
                      ],
                    }),
                ],
              });
            case p.Nu:
              return U;
            case p.XP:
              return (0, e.jsx)(e.Fragment, {
                children: JSON.stringify(v, null, "	"),
              });
            case p.YI:
              return (0, e.jsxs)(e.Fragment, {
                children: ["New level: ", (0, j.ar)(v.level)],
              });
            case p._7:
              return U;
            default:
              return null;
          }
        }
        function L(c) {
          var g;
          const { subject: r } = c,
            v = r && r.reports && r.reports.length > 0,
            U = [
              ...((g = r == null ? void 0 : r.reports) != null ? g : []),
            ].sort((W, T) => {
              var l, m;
              return (
                ((l = T.time_reported) != null ? l : 0) -
                ((m = W.time_reported) != null ? m : 0)
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
                      children: (0, e.jsx)(o.EY, {
                        size: "2",
                        weight: "heavy",
                        contrast: "description",
                        children: "Date",
                      }),
                    }),
                    (0, e.jsx)("th", {
                      children: (0, e.jsx)(o.EY, {
                        size: "2",
                        weight: "heavy",
                        contrast: "description",
                        children: "Reporter",
                      }),
                    }),
                    (0, e.jsx)("th", {
                      children: (0, e.jsx)(o.EY, {
                        size: "2",
                        weight: "heavy",
                        contrast: "description",
                        children: "Status",
                      }),
                    }),
                    (0, e.jsx)("th", {
                      children: (0, e.jsx)(o.EY, {
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
                  !v &&
                    (0, e.jsx)("tr", {
                      children: (0, e.jsx)("td", {
                        colSpan: 4,
                        children: (0, e.jsx)(o.EY, {
                          size: "2",
                          children: s.T.Localize(
                            "#contentreportslist_noreports",
                          ),
                        }),
                      }),
                    }),
                  v && U.map((W) => (0, e.jsx)(M, { report: W }, W.report_id)),
                ],
              }),
            ],
          });
        }
        function M(c) {
          var g;
          const { report: r } = c,
            v = (0, E.jn)(r.reporter_steamid);
          if (!v.isSuccess || !((g = v.data) != null && g.public_data))
            return null;
          const U = !!r.time_disputed && r.dispute_resolved === _.z_,
            W =
              r.resolved !== _.z_ &&
              (!r.time_disputed || r.dispute_resolved !== _.z_),
            T = r.time_dispute_resolved !== 0,
            l = r.resolved === _.CC,
            m = v.data.public_data.persona_name;
          return (0, e.jsxs)("tr", {
            children: [
              (0, e.jsx)("td", {
                children: (0, e.jsx)(o.EY, {
                  size: "2",
                  children: (0, B.P0)(r.time_reported, !1, ""),
                }),
              }),
              (0, e.jsx)("td", {
                children: (0, e.jsxs)("div", {
                  className: n().ReporterCell,
                  children: [
                    (0, e.jsx)("a", {
                      href: `${A.TS.COMMUNITY_BASE_URL}profiles/${r.reporter_steamid}`,
                      children: (0, e.jsx)(i.wm, {
                        playerLinkDetails: v.data,
                        size: "X-Small",
                        alt: "Reporter",
                      }),
                    }),
                    (0, e.jsx)(d.Y, {
                      href: `${A.TS.COMMUNITY_BASE_URL}profiles/${r.reporter_steamid}`,
                      children: (0, e.jsx)(o.EY, {
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
              (0, e.jsx)("td", {
                children: (0, e.jsxs)(o.EY, {
                  as: "div",
                  size: "2",
                  children: [
                    !W &&
                      (0, e.jsx)("span", {
                        children: u.u.Localize(
                          "#moderation_resolutionstatus_pending",
                        ),
                      }),
                    l &&
                      !U &&
                      !T &&
                      (0, e.jsx)("span", {
                        children: s.T.Localize(
                          "#contentreportslist_acquitted_at",
                          (0, B.P0)(r.time_resolved, !1, ""),
                        ),
                      }),
                    W &&
                      !l &&
                      !U &&
                      !T &&
                      (0, e.jsx)("span", {
                        children: s.T.Localize(
                          "#contentreportslist_resolved_at",
                          (0, B.P0)(r.time_resolved, !1, ""),
                        ),
                      }),
                    U &&
                      !T &&
                      (0, e.jsx)("span", {
                        children: s.T.Localize(
                          "#contentreportslist_disputed_at",
                          (0, B.P0)(r.time_disputed, !1, ""),
                        ),
                      }),
                    T &&
                      (0, e.jsx)("span", {
                        children: s.T.Localize(
                          "#contentreportslist_dispute_resolved_at",
                          (0, B.P0)(r.time_dispute_resolved, !1, ""),
                        ),
                      }),
                  ],
                }),
              }),
              (0, e.jsxs)("td", {
                children: [
                  (0, e.jsx)(o.EY, {
                    as: "div",
                    size: "2",
                    children: (0, j.Jt)(r.report_reason),
                  }),
                  !!r.report_text &&
                    (0, e.jsxs)(o.EY, {
                      as: "div",
                      size: "2",
                      marginTop: "1",
                      children: [
                        (0, e.jsx)(o.EY, {
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
                    (0, e.jsxs)(o.EY, {
                      as: "div",
                      size: "2",
                      marginTop: "1",
                      children: [
                        (0, e.jsx)(o.EY, {
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
      46085: (R, O, t) => {
        "use strict";
        t.d(O, {
          EC: () => W,
          KQ: () => U,
          Kt: () => I,
          Ky: () => j,
          N8: () => M,
          OI: () => a,
          YL: () => c,
          c3: () => T,
          lY: () => L,
          w3: () => z,
          wy: () => r,
          y4: () => g,
        });
        var e = t(72604),
          i = t(35038),
          o = t(98112),
          d = t(16277),
          E = t(68312),
          B = t(88942),
          u = t(29385),
          p = t(61739),
          _ = t(86392);
        const D = "get_reported_content",
          A = "get_reported_content_by_id",
          s = "get_reported_content_audit_log",
          a = (l) => [D, JSON.stringify(l)],
          n = (l) => [A, l],
          f = (l) => [s, l];
        async function j(l, m) {
          return Promise.all([
            l.invalidateQueries({ queryKey: [D], exact: !1 }),
            l.invalidateQueries({ queryKey: n(m) }),
            l.invalidateQueries({ queryKey: f(m) }),
          ]);
        }
        function Q(l, m) {
          return {
            queryKey: a(m),
            enabled: (0, _.NX)(m),
            queryFn: async () => {
              const y = i.w.Init(d.Mw);
              y.Body().set_coordinates(d.UC.fromObject(m));
              const h = await d.fL.GetReportedContent(l, y);
              if (!h.BSuccess())
                throw new Error(
                  "Failed in GetReportedContent, EResult: " + h.GetEResult(),
                );
              return h.Body().toObject();
            },
          };
        }
        function z(l) {
          const m = (0, E.KV)();
          return (0, B.I)(Q(m, l));
        }
        function x(l, m) {
          return {
            queryKey: n(m),
            queryFn: async () => {
              const y = CProtoBufMsg.Init(
                CContentModeration_GetReportedContentByID_Request,
              );
              y.Body().set_reported_content_id(m);
              const h = await ContentModerationService.GetReportedContentByID(
                l,
                y,
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
        function P(l) {
          const m = useActiveServiceTransport();
          return useQuery(x(m, l));
        }
        function C(l, m) {
          return {
            queryKey: f(m),
            queryFn: async () => {
              if (!m) return;
              const y = i.w.Init(d.v5);
              return (
                y.Body().set_reported_content_id(m),
                (await d.fL.GetAuditLogByID(l, y)).Body().toObject()
              );
            },
          };
        }
        function I(l) {
          const m = (0, E.KV)();
          return (0, B.I)(C(m, l));
        }
        function L(l) {
          const m = (0, E.KV)(),
            y = (0, u.jE)();
          return (0, p.n)({
            mutationFn: async (h) => {
              const S = i.w.Init(d.Qi);
              S.Body().set_reported_content_id(l),
                S.Body().set_new_level(h.eNewLevel),
                h.eReason && S.Body().set_reason(h.eReason),
                h.strNote && S.Body().set_note(h.strNote);
              const K = await d.fL.EscalateSubjectByID(m, S);
              if (K.GetEResult() !== e.R)
                throw new Error(`Failed to escalate subject: ${K.GetEMsg()}`);
            },
            onSuccess: async () => {
              await Promise.all([
                j(y, l),
                y.invalidateQueries({ queryKey: ["get_claimed"] }),
                y.invalidateQueries({ queryKey: ["get_subject_overview"] }),
              ]);
            },
          });
        }
        function M() {
          const l = (0, E.KV)(),
            m = (0, u.jE)();
          return (0, p.n)({
            mutationFn: async (y) => {
              const h = i.w.Init(d.Nr);
              h.Body().set_reported_content_id(y.reportedContentID);
              const S = await d.fL.SustainModerationByID(l, h);
              if (!S.BSuccess()) throw new Error("EResult " + S.GetEResult());
            },
            onSuccess: async (y, h) => {
              await j(m, h.reportedContentID),
                await m.invalidateQueries({ queryKey: ["get_claimed"] });
            },
          });
        }
        function c(l) {
          const m = (0, u.jE)(),
            y = (0, E.KV)();
          return (0, p.n)({
            mutationKey: ["release_subject", ...l],
            mutationFn: async () => {
              const h = i.w.Init(d.GD);
              for (const K of l) {
                const N = new d.F9();
                N.set_reported_content_id(K),
                  h.Body().add_subjects_to_release(N);
              }
              const S = await d.fL.ReleaseSubjects(y, h);
              if (!S.BSuccess()) throw new Error("EResult " + S.GetEResult());
            },
            onSuccess: async () => {
              await Promise.all([
                m.invalidateQueries({ queryKey: ["get_claimed"] }),
                m.invalidateQueries({ queryKey: ["get_subject_overview"] }),
                ...l.map((h) => j(m, h)),
              ]);
            },
          });
        }
        function g(l, m) {
          const y = (0, E.KV)(),
            h = (0, u.jE)();
          return (0, p.n)({
            mutationFn: async () => {
              const S = i.w.Init(d.LW);
              S.Body().set_reported_content_id(l), S.Body().set_details(m);
              const K = await d.fL.OwnerDisputeModeration(y, S);
              if (!K.BSuccess()) throw new Error("EResult " + K.GetEResult());
            },
            onSuccess: async () => {
              await j(h, l);
            },
          });
        }
        function r(l, m) {
          const y = (0, u.jE)(),
            h = (0, E.KV)();
          return (0, p.n)({
            mutationFn: async () => {
              const S = i.w.Init(d.ps);
              S.Body().set_reported_content_id(l),
                S.Body().set_owner_dispute_details(m);
              const K = await d.fL.UpdateSubjectByID(h, S);
              if (!K.BSuccess()) throw new Error("EResult " + K.GetEResult());
            },
            onSuccess: async () => {
              await j(y, l);
            },
          });
        }
        function v(l, m) {
          return {
            queryKey: ["reporterstats", m],
            queryFn: async () => {
              const y = i.w.Init(d.KD);
              y.Body().set_steamid(m);
              const h = await d.fL.GetReporterStats(l, y);
              if (!h.BSuccess()) throw new Error("EResult " + h.GetEResult());
              return h.Body().toObject();
            },
          };
        }
        function U(l) {
          const m = (0, E.KV)();
          return (0, B.I)(v(m, l));
        }
        function W(l, m, y) {
          const h = (0, E.KV)(),
            S = (0, u.jE)();
          return (0, p.n)({
            mutationFn: async (K) => {
              const N = i.w.Init(o.Er);
              N.Body().set_steamid(l),
                N.Body().set_comment_thread_id(m),
                N.Body().set_gidcomment(y),
                N.Body().set_reason(K.reason),
                N.Body().set_note(K.message);
              for (const F of K.sanctions) {
                const G = new o.u6();
                G.set_sanction(F.sanction),
                  F.days && G.set_days(F.days),
                  N.Body().add_sanctions(G);
              }
              const b = await o.BE.SanctionComment(h, N);
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
        function T(l, m, y) {
          const h = (0, E.KV)(),
            S = (0, u.jE)();
          return (0, p.n)({
            mutationFn: async () => {
              const K = i.w.Init(o.RX);
              K.Body().set_steamid(l),
                K.Body().set_comment_thread_id(m),
                K.Body().set_gidcomment(y),
                K.Body().set_report_action(o.du.Pn),
                K.Body().set_resolve(!0),
                await o.Vi.UpdateCommentReportState(h, K);
            },
            onSuccess: async () => {
              await S.invalidateQueries({ queryKey: ["get_claimed"] });
            },
          });
        }
      },
      76617: (R, O, t) => {
        "use strict";
        t.d(O, { V: () => p });
        function e(_) {
          return Object.prototype.toString.call(_) === "[object Object]";
        }
        function i(_) {
          if (!e(_)) return !1;
          const D = _.constructor;
          if (typeof D == "undefined") return !0;
          const A = D.prototype;
          return !(
            !e(A) || !Object.prototype.hasOwnProperty.call(A, "isPrototypeOf")
          );
        }
        function o(..._) {
          return JSON.stringify(_, (D, A) => {
            if (i(A)) {
              const s = {};
              return (
                Object.keys(A)
                  .sort()
                  .forEach((a) => {
                    s[a] = A[a];
                  }),
                s
              );
            }
            return A;
          });
        }
        var d = t(90626),
          E = t(7850);
        const B = (0, d.createContext)({ instances: {}, factories: {} });
        function u(_) {
          const { name: D, fnFactory: A, children: s } = _,
            a = React.useContext(B),
            [n] = useState({}),
            f = useMemo(
              () => ({
                instances: n,
                factories: { ...a.factories, [D]: A },
                parent: a,
              }),
              [n, D, a],
            );
          return jsx(B.Provider, { value: f, children: s });
        }
        function p(_, D) {
          var A;
          const s = (0, d.useContext)(B),
            a = typeof _ == "string" ? _ : o(..._);
          let n = s;
          for (; n; ) {
            if (a in n.instances) return n.instances[a];
            if (a in n.factories) break;
            n = n.parent;
          }
          const j = (
            (A = n == null ? void 0 : n.factories[a]) != null ? A : D
          )();
          return ((n != null ? n : s).instances[a] = j), j;
        }
      },
      66243: (R, O, t) => {
        "use strict";
        t.d(O, { Oh: () => D, n9: () => p, sP: () => E });
        var e = t(7850),
          i = t(24660),
          o = t(44375),
          d = t.n(o);
        function E(s) {
          const { children: a, ...n } = s;
          return (0, e.jsx)(i.fu, {
            className: o.GreenButton,
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
            className: o.BlueButton,
            type: "button",
            ...n,
            children: (0, e.jsx)("span", { children: a }),
          });
        }
        function _(s) {
          const { children: a, ...n } = s;
          return jsx(FocusableAnchor, {
            className: styles.BlueButton,
            ...n,
            children: jsx("span", { children: a }),
          });
        }
        function D(s) {
          const { children: a, ...n } = s;
          return (0, e.jsx)(i.fu, {
            className: o.GreyButton,
            type: "button",
            ...n,
            children: (0, e.jsx)("span", { children: a }),
          });
        }
        function A(s) {
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
