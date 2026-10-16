/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(() => {
  (self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
    [70349],
    {
      28946: (k, w, t) => {
        "use strict";
        t.r(w), t.d(w, { default: () => ne });
        var e = t(7850),
          D = t(24660),
          l = t(19298),
          R = t(78365),
          j = t(20169),
          c = t(23386),
          d = t(72609),
          W = t(14904),
          G = t(95995),
          x = t(72865),
          h = t(90626),
          T = t(67705);
        function B() {
          const [g, n] = (0, h.useState)(() =>
            (0, T.Tc)("profile-itemcollection", "itemcollection_config"),
          );
          return g;
        }
        var i = t(84676),
          m = t(36707),
          f = t(40594);
        function p({
          nPercent: g,
          indeterminate: n,
          animate: C,
          className: v,
        }) {
          return (0, e.jsx)("div", {
            className: (0, m.A)(
              f.ProgressBar,
              C && f.AnimateProgress,
              n && f.Indeterminate,
              v,
            ),
            style: { "--percent": g / 100 },
          });
        }
        const y = ({ nPercent: g, size: n = 120, strokeWidth: C = 20 }) => {
          const v = (n - C) / 2,
            I = 2 * Math.PI * v,
            A = I - (g / 100) * I,
            P = g == 100;
          return (0, e.jsx)("div", {
            className: (0, m.A)({ [f.Circular]: !0, [f.Full]: P }),
            children: (0, e.jsxs)("svg", {
              width: n,
              height: n,
              style: { transform: "rotate(-90deg)" },
              children: [
                (0, e.jsx)("circle", {
                  cx: n / 2,
                  cy: n / 2,
                  r: v,
                  stroke: "#0c131d",
                  strokeWidth: C,
                  fill: "none",
                }),
                (0, e.jsx)("circle", {
                  cx: n / 2,
                  cy: n / 2,
                  r: v,
                  stroke: "#1a9fff",
                  strokeWidth: C,
                  fill: "none",
                  strokeDasharray: I,
                  strokeDashoffset: A,
                  style: { transition: "stroke-dashoffset 0.3s ease-in-out" },
                }),
              ],
            }),
          });
        };
        var u = t(18210),
          z = t(92264),
          $ = t(54963),
          o = t(49395),
          r = t.n(o),
          _ = t(85427),
          s = t.n(_),
          N = t(41635);
        function U(g) {
          const {
              strProfileName: n,
              strSteamId: C,
              bViewingOwnProfile: v,
              rgCommunityItemDefs: I,
              rgUserCommunityItems: A,
              nAppID: P,
              rgRewardItems: S,
              rgUserItemRewarded: Y,
              oRewardDefinition: Q,
            } = B(),
            a = (0, h.useMemo)(() => {
              const M = new Set();
              A.forEach((E) => {
                M.add(`${E.appid}_${E.item_type}`);
              });
              const F = new Set();
              S == null ||
                S.forEach((E) => {
                  F.add(E.community_item_type);
                });
              const te = new Map();
              return (
                I.filter(
                  (E) =>
                    E.active &&
                    !E.deleted &&
                    !F.has(E.item_type) &&
                    E.item_class != c.u8,
                )
                  .sort((E, ie) => {
                    const se = M.has(`${E.appid}_${E.item_type}`),
                      re = M.has(`${ie.appid}_${ie.item_type}`);
                    return (se && re) || (!se && !re)
                      ? ie.item_type - E.item_type
                      : se
                        ? -1
                        : 1;
                  })
                  .forEach((E) => {
                    te.has(E.item_class) || te.set(E.item_class, []),
                      te
                        .get(E.item_class)
                        .push({
                          ...E,
                          user_has_item: M.has(`${E.appid}_${E.item_type}`),
                        });
                  }),
                te
              );
            }, [I, S, A]),
            O = (0, h.useMemo)(() => {
              if (a.has(c.sU)) {
                const M = a.get(c.sU).filter((F) => {
                  const te = JSON.parse(F.item_key_values);
                  return F.item_movie_webm && F.item_movie_mp4;
                });
                if (M.length) return (0, N.fW)(M), M[0];
              }
              return null;
            }, [a]),
            V = (0, h.useMemo)(() => {
              let M = new Map();
              return (
                I.forEach((F) => {
                  M.set(F.item_type, F);
                }),
                M
              );
            }, [I]),
            q = (0, h.useMemo)(
              () => Array.from(a.keys()).sort((M, F) => F - M),
              [a],
            ),
            [ee, oe, ae] = h.useMemo(() => {
              const M =
                  A == null
                    ? void 0
                    : A.filter((se) => {
                        const re = V.get(se.item_type);
                        return !(
                          re &&
                          (re.item_class == c.Ve || re.item_class == c.u8)
                        );
                      }),
                F = I.filter(
                  (se) => se.item_class != c.Ve && se.item_class != c.u8,
                ),
                te = M.length || 0,
                E = F.length || 0;
              return [E ? Math.floor((te * 100) / E) : 0, E, te];
            }, [V, I, A]);
          return (0, e.jsx)(x.nn, {
            feature: "itemcollections",
            children: (0, e.jsx)(G.A, {
              appID: P,
              children: (0, e.jsxs)(l.Z, {
                className: r().ProfileSubPageContainer,
                children: [
                  O &&
                    (0, e.jsx)("div", {
                      className: s().PageBackground,
                      children: (0, e.jsxs)("video", {
                        preload: "auto",
                        playsInline: !0,
                        muted: !0,
                        autoPlay: !0,
                        loop: !0,
                        poster: `${d.TS.MEDIA_CDN_COMMUNITY_URL}images/items/${P}/${O.item_image_large}`,
                        children: [
                          (0, e.jsx)("source", {
                            src: `${d.TS.MEDIA_CDN_COMMUNITY_URL}images/items/${P}/${O.item_movie_webm}`,
                            type: "video/webm",
                          }),
                          !d.TS.IN_CLIENT &&
                            (0, e.jsx)("source", {
                              src: `${d.TS.MEDIA_CDN_COMMUNITY_URL}images/items/${P}/${O.item_movie_mp4}`,
                              type: "video/mp4",
                            }),
                        ],
                      }),
                    }),
                  (0, e.jsx)(X, { nAppID: P }),
                  (0, e.jsxs)("div", {
                    className: s().PageSection,
                    children: [
                      (0, e.jsx)("span", {
                        children: (0, u.we)(
                          "#ItemCollection_Collected",
                          ae,
                          oe,
                        ),
                      }),
                      (0, e.jsx)(p, {
                        className: s().ProgressBar,
                        animate: !0,
                        nPercent: ee,
                        indeterminate: !1,
                      }),
                    ],
                  }),
                  !!Q &&
                    (0, e.jsx)("div", {
                      className: (0, m.A)(
                        s().PageSection,
                        s().BackgroundGradient,
                        s().Highlight,
                      ),
                      children: (0, e.jsx)(b, {
                        oRewardDefinition: Q,
                        bViewingOwnProfile: v,
                        rgRewardItems: S,
                        rgUserItemRewarded: Y,
                        rgCommunityItemDefs: I,
                      }),
                    }),
                  (0, e.jsxs)("div", {
                    className: (0, m.A)(
                      s().PageSection,
                      s().BackgroundGradient,
                    ),
                    children: [
                      (0, e.jsx)("div", {
                        className: s().HowToGet,
                        children: (0, u.we)("#ItemCollection_ForPoints_Title"),
                      }),
                      q.map((M) =>
                        (0, e.jsx)(
                          L,
                          {
                            nAppID: P,
                            itemClass: M,
                            rgItems: a.get(M),
                            bViewingOwnProfile: v,
                            bHideItemStore: M == c.Ve,
                          },
                          "item_class_" + M,
                        ),
                      ),
                    ],
                  }),
                ],
              }),
            }),
          });
        }
        function b(g) {
          const {
              oRewardDefinition: n,
              rgRewardItems: C,
              rgUserItemRewarded: v,
              rgCommunityItemDefs: I,
              bViewingOwnProfile: A,
            } = g,
            P = (0, h.useMemo)(() => {
              const S = new Set();
              v == null ||
                v.forEach((a) => {
                  S.add(
                    `${a.item_definition.appid}_${a.item_definition.community_item_type}`,
                  );
                });
              const Y = new Set();
              C.forEach((a) => {
                Y.add(`${a.appid}_${a.community_item_type}`);
              });
              const Q = new Map();
              return (
                I.filter((a) => a.active)
                  .filter((a) => Y.has(`${a.appid}_${a.item_type}`))
                  .sort((a, O) => {
                    const V = S.has(`${a.appid}_${a.item_type}`),
                      q = S.has(`${O.appid}_${O.item_type}`);
                    return (V && q) || (!V && !q)
                      ? O.item_type - a.item_type
                      : V
                        ? -1
                        : 1;
                  })
                  .forEach((a) => {
                    const O = S.has(`${a.appid}_${a.item_type}`);
                    Q.has(a.item_class) || Q.set(a.item_class, []),
                      Q.get(a.item_class).push({ ...a, user_has_item: O });
                  }),
                Q
              );
            }, [C, v, I]);
          return (0, e.jsxs)(R.YZ, {
            navEntryPreferPosition: j.iU.LAST,
            preferredFocus: !0,
            className: s().FreeQuestCtn,
            children: [
              (0, e.jsx)("div", {
                className: s().HowToGet,
                children: (0, u.we)("#ItemCollection_ForFree_Title"),
              }),
              (0, e.jsxs)(l.Z, {
                children: [
                  (0, e.jsxs)("div", {
                    className: s().QuestInstructions,
                    children: [
                      (0, e.jsx)("div", {
                        className: s().QuestName,
                        children: (0, u.we)(
                          "#ItemCollection_ForFree_Discovery",
                        ),
                      }),
                      (0, e.jsx)("p", {
                        children: (0, z.nR)(
                          n.rtime_start_time,
                          n.rtime_end_time,
                        ),
                      }),
                      (0, e.jsxs)("p", {
                        children: [
                          (0, u.we)("#ItemCollection_ForFree_Discovery_desc"),
                          (0, e.jsx)("br", {}),
                          (0, u.oW)(
                            "#ItemCollection_ForFree_Discovery_desc2",
                            (0, e.jsx)(D.Ii, {
                              href: `${d.TS.STORE_BASE_URL}explore?dq=widget`,
                            }),
                          ),
                        ],
                      }),
                    ],
                  }),
                  Array.from(P.keys()).map((S) =>
                    (0, e.jsx)(
                      L,
                      {
                        bViewingOwnProfile: A,
                        nAppID: n.appid,
                        itemClass: S,
                        rgItems: P.get(S),
                        bHideItemStore: !0,
                      },
                      "free_item_class_" + S,
                    ),
                  ),
                ],
              }),
            ],
          });
        }
        function L(g) {
          const {
              rgItems: n,
              itemClass: C,
              nAppID: v,
              bViewingOwnProfile: I,
            } = g,
            A = (0, h.useMemo)(
              () => n.filter((S) => S.user_has_item).length,
              [n],
            ),
            P = n.length ? Math.floor((A * 100) / n.length) : 0;
          return (0, e.jsxs)(R.YZ, {
            navEntryPreferPosition: j.iU.LAST,
            preferredFocus: !0,
            className: (0, m.A)(s().ItemSection),
            children: [
              (0, e.jsx)(K, { ...g }),
              (0, e.jsxs)(l.Z, {
                className: s().ItemCategoryCtn,
                children: [
                  (0, e.jsx)(l.Z, {
                    className: s().CategoryName,
                    children: (0, u.we)("#Sale_Section_PointShop_class_" + C),
                  }),
                  (0, e.jsx)("div", { className: s().SectionLine }),
                  (0, e.jsx)(H, { ...g }),
                ],
              }),
              (0, e.jsxs)(l.Z, {
                className: s().ItemCtn,
                children: [
                  (0, e.jsxs)(l.Z, {
                    className: s().ProgressIndicationCtn,
                    children: [
                      (0, e.jsx)(y, { nPercent: P }),
                      (0, e.jsxs)("div", {
                        className: s().ProgressText,
                        children: [
                          (0, e.jsx)("div", {
                            children: (0, u.we)(
                              "#ItemCollection_Collected_Item",
                              A,
                              n.length,
                            ),
                          }),
                          (0, e.jsx)("div", {
                            children: (0, u.we)(
                              "#ItemCollection_Collected_Line",
                            ),
                          }),
                        ],
                      }),
                    ],
                  }),
                  n.map((S) =>
                    (0, e.jsx)(J, { item: S }, "item_" + S.item_type),
                  ),
                ],
              }),
            ],
          });
        }
        function K(g) {
          const { itemClass: n, nAppID: C } = g;
          return n !== c.Ve
            ? null
            : (0, e.jsx)(l.Z, {
                className: s().HowToGet,
                children: (0, u.we)("#ItemCollection_GameCards_Title"),
              });
        }
        function H(g) {
          const {
            itemClass: n,
            nAppID: C,
            bViewingOwnProfile: v,
            bHideItemStore: I,
          } = g;
          return n == c.Ve && v
            ? (0, e.jsx)(D.Ii, {
                href: `${d.TS.COMMUNITY_BASE_URL}my/gamecards/${C}`,
                className: s().PointShopLink,
                children: (0, u.we)("#ItemCollection_Visit_Badge"),
              })
            : I
              ? null
              : (0, e.jsx)(D.Ii, {
                  href: `${d.TS.STORE_BASE_URL}points/shop/app/${C}`,
                  className: s().PointShopLink,
                  children: (0, u.we)("#ItemCollection_Visit"),
                });
        }
        function J(g) {
          const { item: n } = g,
            [C, v] = (0, $.OP)(),
            I = n.user_has_item || C,
            A = !I,
            P =
              (I || n.item_class == c.Ve || n.item_class == c.jE) &&
              n.item_class != c.J4
                ? n.item_image_small
                : void 0;
          return (0, e.jsx)(l.Z, {
            ...v,
            onFocus: () => v.onPointerEnter(),
            onBlur: () => v.onPointerLeave(),
            focusable: !0,
            className: s().ItemBackground,
            children: (0, e.jsx)(W.Qc, {
              appid: n.appid,
              item_image_large: n.item_image_large,
              item_image_small: P,
              item_title: n.item_title,
              item_movie_mp4: I ? n.item_movie_mp4_small : void 0,
              item_movie_webm: I ? n.item_movie_webm_small : void 0,
              className: (0, m.A)({ [s().ImgCtn]: !0, [s().ImgGrey]: A }),
              videoClassName: s().ImgCtn,
            }),
          });
        }
        const Z = { include_assets: !0 };
        function X(g) {
          const { nAppID: n } = g,
            [C] = (0, i.t7)(n, Z);
          return C
            ? (0, e.jsx)(l.Z, {
                className: s().AppHeaderCtn,
                children: (0, e.jsxs)(l.Z, {
                  children: [
                    (0, e.jsxs)(l.Z, {
                      className: s().AppHeaderRow,
                      children: [
                        (0, e.jsx)(l.Z, {
                          className: s().AppName,
                          children: C.GetName(),
                        }),
                        (0, e.jsx)(l.Z, {
                          className: s().PageName,
                          children: (0, u.we)("#ItemCollection_Title"),
                        }),
                      ],
                    }),
                    (0, e.jsx)(l.Z, {
                      children: (0, u.we)("#ItemCollection_EventSubTitle"),
                    }),
                  ],
                }),
              })
            : null;
        }
        const ne = U;
      },
      23386: (k, w, t) => {
        "use strict";
        t.d(w, {
          EL: () => e,
          Ed: () => T,
          J4: () => j,
          Qw: () => W,
          ST: () => d,
          Ve: () => l,
          XY: () => x,
          iV: () => h,
          jE: () => G,
          oW: () => c,
          sU: () => R,
          u8: () => D,
          wK: () => B,
          xi: () => m,
          xw: () => f,
          yZ: () => p,
          zs: () => i,
        });
        const e = 0,
          D = 1,
          l = 2,
          R = 3,
          j = 4,
          c = 5,
          d = 6,
          W = 7,
          G = 8,
          x = 9,
          h = 10,
          T = 11,
          B = 12,
          i = 13,
          m = 14,
          f = 15,
          p = 16,
          y = 17;
      },
      33907: (k, w, t) => {
        "use strict";
        t.d(w, { d2: () => B });
        var e = t(88942),
          D = t(90626),
          l = t(72604),
          R = t(72609);
        const j = "minigamev2/itemdefs",
          c = "appid",
          d = "editor";
        function W() {
          return (typeof self != "undefined" ? self.origin + "/" : "") ===
            R.TS.STORE_BASE_URL
            ? R.TS.STORE_BASE_URL
            : R.TS.COMMUNITY_BASE_URL;
        }
        async function G(i, m) {
          if (!i) return [];
          const f = new URLSearchParams({ [c]: String(i), l: R.TS.LANGUAGE });
          m && f.set(d, "1");
          const p = `${W()}${j}?${f}`,
            y = await fetch(p, { credentials: m ? "include" : "same-origin" });
          if (!y.ok) throw new Error(`${p} answered ${y.status}`);
          const u = await y.json();
          if ((u == null ? void 0 : u.success) == l.R && u.item_definitions)
            return u.item_definitions;
          throw new Error(
            "Community item definitions for app " +
              i +
              " answered " +
              (u == null ? void 0 : u.success),
          );
        }
        function x(i, m) {
          return ["MinigameCommunityItemDefs", i, !!m];
        }
        function h(i, m) {
          return {
            queryKey: x(i, m),
            queryFn: () => G(i, m),
            enabled: !!i,
            retry: !1,
          };
        }
        function T(i, m) {
          const { data: f } = (0, e.I)(h(i, m));
          return f;
        }
        function B(i, m, f) {
          const p = T(i, f);
          return (0, D.useMemo)(
            () =>
              p == null
                ? void 0
                : p.find(
                    (y) => (f || y.active) && y.appid == i && y.item_type == m,
                  ),
            [p, i, m, f],
          );
        }
      },
      14904: (k, w, t) => {
        "use strict";
        t.d(w, { Qc: () => x, Zx: () => T, f8: () => h });
        var e = t(7850),
          D = t(65946),
          l = t(23386),
          R = t(85599),
          j = t(18210),
          c = t(72609),
          d = t(56330),
          W = t.n(d),
          G = t(33907);
        function x(B) {
          const {
            appid: i,
            item_image_small: m,
            item_image_large: f,
            item_movie_mp4: p,
            item_movie_webm: y,
            item_title: u,
          } = B;
          if (p && y) {
            const z = `${c.TS.MEDIA_CDN_COMMUNITY_URL}images/items/${i}/${m}`,
              $ = `${c.TS.MEDIA_CDN_COMMUNITY_URL}images/items/${i}/${y}`,
              o = `${c.TS.MEDIA_CDN_COMMUNITY_URL}images/items/${i}/${p}`;
            return (0, e.jsx)(e.Fragment, {
              children: (0, e.jsxs)("video", {
                muted: !0,
                controls: !1,
                autoPlay: !0,
                loop: !0,
                poster: z,
                playsInline: !0,
                className: B.videoClassName,
                children: [
                  (0, e.jsx)("source", { src: $, type: "video/webm" }),
                  !c.TS.IN_CLIENT &&
                    (0, e.jsx)("source", { src: o, type: "video/mp4" }),
                ],
              }),
            });
          } else {
            const z = `${c.TS.MEDIA_CDN_COMMUNITY_URL}images/items/${i}/${m || f}`;
            return (0, e.jsx)("img", {
              className: B.className,
              src: z,
              alt: u,
            });
          }
        }
        function h(B) {
          const { appid: i, community_item_type: m, bForEdit: f } = B,
            p = (0, G.d2)(i, m, f),
            y =
              p && !p.active
                ? (0, e.jsx)("div", {
                    className: d.WarningStylesBackground,
                    children: (0, j.we)(
                      "#Sale_Section_RewardShelf_ItemInActiveWarning",
                    ),
                  })
                : void 0;
          return p
            ? (0, e.jsxs)(e.Fragment, {
                children: [(0, e.jsx)(x, { ...p }), y],
              })
            : (0, e.jsx)(R.t, { size: "small", string: (0, j.we)("#Loading") });
        }
        function T(B) {
          var i, m, f, p;
          const { section: y, rewardDef: u, language: z } = B,
            $ = (0, G.d2)(
              (i = u.appid) != null ? i : 0,
              (m = u.community_item_type) != null ? m : 0,
            ),
            [o] = (0, D.q3)(() => {
              var _;
              return [!!((_ = y.rewards) != null && _.show_reward_item_name)];
            });
          let r;
          switch (u.community_class) {
            case l.xi:
            case l.xw:
              r = `${c.TS.COMMUNITY_BASE_URL}my/edit/avatar`;
              break;
            case l.u8:
              r = `${c.TS.COMMUNITY_BASE_URL}my/edit/favoritebadge`;
              break;
            case l.sU:
            case l.jE:
              r = `${c.TS.COMMUNITY_BASE_URL}my/edit/background`;
              break;
            case l.zs:
              r = `${c.TS.COMMUNITY_BASE_URL}my/edit/miniprofile`;
              break;
            case l.Ed:
              r = `${c.TS.COMMUNITY_BASE_URL}chat`;
              break;
          }
          return (0, e.jsxs)("a", {
            href: r,
            children: [
              (0, e.jsx)(h, {
                appid: (f = u.appid) != null ? f : 0,
                community_item_type:
                  (p = u.community_item_type) != null ? p : 0,
              }),
              !!o &&
                (0, e.jsx)("span", {
                  children: $ == null ? void 0 : $.item_name,
                }),
            ],
          });
        }
      },
      95995: (k, w, t) => {
        "use strict";
        t.d(w, { A: () => c });
        var e = t(72865),
          D = t(90626),
          l = t(37740),
          R = t(40365),
          j = t(18938);
        function c(d) {
          const { appID: W, feature: G, depth: x, children: h } = d,
            T = (0, e.ru)(G, x),
            B = (0, l.b)(),
            [i, m] = D.useState(void 0),
            f = D.useCallback(
              (z) => {
                z.isIntersecting &&
                  m(($) =>
                    ($ == null ? void 0 : $.appID) == W &&
                    ($ == null ? void 0 : $.snr) == T
                      ? $
                      : { appID: W, snr: T },
                  );
              },
              [W, T],
            );
          (0, D.useEffect)(() => {
            i && i.appID != null && B.AddImpression(i.appID, i.snr);
          }, [B, i]);
          const p = (0, R.BL)(f),
            y = W && (!i || (i.appID != W && i.snr != T)),
            u = (0, j.Ue)(h.props.ref, y ? p : void 0);
          return D.cloneElement(h, { ref: u });
        }
      },
      37740: (k, w, t) => {
        "use strict";
        t.d(w, { b: () => R });
        var e = t(7850),
          D = t(90626);
        const l = D.createContext({
          AddImpression: () => {
            console.log("Impression Tracking not enabled");
          },
          BIsValid: () => !1,
        });
        function R() {
          return D.useContext(l);
        }
        function j(c) {
          return jsx(l.Provider, {
            value: c.ImpressionTracker,
            children: c.children,
          });
        }
      },
      84676: (k, w, t) => {
        "use strict";
        t.d(w, {
          G6: () => T,
          Gg: () => m,
          Sq: () => G,
          eR: () => x,
          ik: () => h,
          mZ: () => f,
          t7: () => B,
          zX: () => y,
        });
        var e = t(41735),
          D = t.n(e),
          l = t(90626),
          R = t(72604),
          j = t(3367),
          c = t(54963),
          d = t(10142);
        function W(o, r, _ = !0) {
          const s = _
              ? CStoreItemCache.k_DataRequest_BasicInfo
              : CStoreItemCache.k_DataRequest_CommonOnly,
            N = _ || CStoreItemCache.Get().BHasStoreItem(o, r, s) ? o : null,
            [U, b] = T(N, r, s),
            [L, K] = useState(null),
            [H, J] = T(L, r, s);
          useEffect(() => {
            (U == null ? void 0 : U.GetAppType()) ===
              EStoreAppType.k_EStoreAppType_Demo && K(U.GetParentAppID());
          }, [U]);
          let Z =
            U != null && U.GetShortDescription()
              ? StripBBCodeTags(U.GetShortDescription())
              : "";
          (!Z || Z.length === 0) &&
            H &&
            (Z =
              H != null && H.GetShortDescription()
                ? StripBBCodeTags(H.GetShortDescription())
                : "");
          const X = b == h && (!L || J == h);
          return [Z, X];
        }
        const G = 1,
          x = 2,
          h = 3;
        function T(o, r, _, s) {
          const N = (0, l.useRef)(void 0),
            U = (0, l.useRef)(void 0),
            b = (0, c.CH)();
          N.current = o;
          const [L, K] = (0, l.useState)(void 0),
            {
              include_assets: H,
              include_release: J,
              include_platforms: Z,
              include_all_purchase_options: X,
              include_screenshots: ne,
              include_trailers: g,
              include_ratings: n,
              include_tag_count: C,
              include_reviews: v,
              include_basic_info: I,
              include_supported_languages: A,
              include_full_description: P,
              include_included_items: S,
              include_assets_without_overrides: Y,
              apply_user_filters: Q,
              include_links: a,
              include_extra_details: O,
              include_optin_registration_tags: V,
            } = _;
          if (
            ((0, l.useEffect)(() => {
              const ee = {
                include_assets: H,
                include_release: J,
                include_platforms: Z,
                include_all_purchase_options: X,
                include_screenshots: ne,
                include_trailers: g,
                include_ratings: n,
                include_tag_count: C,
                include_reviews: v,
                include_basic_info: I,
                include_supported_languages: A,
                include_full_description: P,
                include_included_items: S,
                include_assets_without_overrides: Y,
                apply_user_filters: Q,
                include_links: a,
                include_extra_details: O,
                include_optin_registration_tags: V,
              };
              let oe = null;
              return (
                !o ||
                  o < 0 ||
                  d.A.Get().BHasStoreItem(o, r, ee) ||
                  (L !== void 0 && s && s == U.current) ||
                  (s !== U.current && (K(void 0), (U.current = s)),
                  (oe = D().CancelToken.source()),
                  d.A.Get()
                    .QueueStoreItemRequest(o, r, ee)
                    .then((ae) => {
                      !(oe != null && oe.token.reason) &&
                        N.current === o &&
                        K(ae == R.R),
                        b();
                    })),
                () =>
                  oe == null
                    ? void 0
                    : oe.cancel("useStoreItemCache: unmounting")
              );
            }, [
              o,
              r,
              s,
              L,
              H,
              J,
              Z,
              X,
              ne,
              g,
              n,
              C,
              v,
              I,
              A,
              P,
              S,
              Y,
              Q,
              a,
              O,
              V,
              b,
            ]),
            !o)
          )
            return [null, x];
          if (L === !1) return [void 0, x];
          if (d.A.Get().BIsStoreItemMissing(o, r)) return [void 0, x];
          if (!d.A.Get().BHasStoreItem(o, r, _)) return [void 0, G];
          const q = d.A.Get().GetStoreItemWithLegacyVisibilityCheck(o, r);
          return q ? [q, h] : [null, x];
        }
        function B(o, r, _) {
          return T(o, j.c6.qI, r, _);
        }
        function i(o, r, _) {
          return T(o, EStoreItemType.k_EStoreItemType_Bundle, r, _);
        }
        function m(o, r, _) {
          return T(o, j.c6.RD, r, _);
        }
        function f(o, r, _) {
          var s;
          const [N, U] = T(o, r, _);
          let b;
          (N == null ? void 0 : N.GetStoreItemType()) == j.c6.RD &&
            !((s = N.GetAssets()) != null && s.GetHeaderURL()) &&
            (N == null ? void 0 : N.GetIncludedAppIDs().length) == 1 &&
            (b = N.GetIncludedAppIDs()[0]);
          const [L, K] = B(b, _);
          return b && L != null && L.BIsVisible() ? [L, K] : [N, U];
        }
        function p(o, r, _, s) {
          const N = (0, c.CH)(),
            {
              include_assets: U,
              include_release: b,
              include_platforms: L,
              include_all_purchase_options: K,
              include_screenshots: H,
              include_trailers: J,
              include_ratings: Z,
              include_tag_count: X,
              include_reviews: ne,
              include_basic_info: g,
              include_supported_languages: n,
              include_full_description: C,
              include_included_items: v,
              include_assets_without_overrides: I,
              apply_user_filters: A,
              include_links: P,
              include_extra_details: S,
              include_optin_registration_tags: Y,
            } = _;
          return (
            (0, l.useEffect)(() => {
              if (!o || o.length == 0) return;
              const a = {
                  include_assets: U,
                  include_release: b,
                  include_platforms: L,
                  include_all_purchase_options: K,
                  include_screenshots: H,
                  include_trailers: J,
                  include_ratings: Z,
                  include_tag_count: X,
                  include_reviews: ne,
                  include_basic_info: g,
                  include_supported_languages: n,
                  include_full_description: C,
                  include_included_items: v,
                  include_assets_without_overrides: I,
                  apply_user_filters: A,
                  include_links: P,
                  include_extra_details: S,
                  include_optin_registration_tags: Y,
                },
                O = o.filter(
                  (ee) =>
                    !(
                      d.A.Get().BHasStoreItem(ee, r, a) ||
                      d.A.Get().BIsStoreItemMissing(ee, r)
                    ),
                );
              if (O.length == 0) return;
              const V = D().CancelToken.source(),
                q = O.map((ee) => d.A.Get().QueueStoreItemRequest(ee, r, a));
              return (
                Promise.all(q).then(() => {
                  V.token.reason || N();
                }),
                () => V.cancel("useStoreItemCacheMultiplePackages: unmounting")
              );
            }, [
              o,
              r,
              s,
              N,
              U,
              b,
              L,
              K,
              H,
              J,
              Z,
              X,
              ne,
              g,
              n,
              C,
              v,
              I,
              A,
              P,
              S,
              Y,
            ]),
            o
              ? o.every(
                  (a) =>
                    d.A.Get().BHasStoreItem(a, r, _) ||
                    d.A.Get().BIsStoreItemMissing(a, r),
                )
                ? o.every((a) =>
                    d.A.Get().GetStoreItemWithLegacyVisibilityCheck(a, r),
                  )
                  ? h
                  : x
                : G
              : x
          );
        }
        function y(o, r, _) {
          return p(o, j.c6.qI, r, _);
        }
        function u(o, r, _) {
          return p(o, EStoreItemType.k_EStoreItemType_Bundle, r, _);
        }
        function z(o, r, _) {
          return p(o, EStoreItemType.k_EStoreItemType_Package, r, _);
        }
        function $() {
          React.useEffect(
            () => (
              CStoreItemCache.Get().SetReturnUnavailableItems(!0),
              () => CStoreItemCache.Get().SetReturnUnavailableItems(!1)
            ),
            [],
          );
        }
      },
      85427: (k) => {
        k.exports = {
          AppHeaderCtn: "_1E99FsAAFaUjsZvZ4P5Vzl",
          AppHeaderRow: "_90TlYhcg-nmOFhraNLUeZ",
          AppName: "o1m9BbS1X5-LqjZ8B1v64",
          PageName: "_1qzjiDNpGZYKIvwBx1el1t",
          PageSubTitle: "RrvoHJVvvZtgasOhRJTbT",
          PageSection: "_2j6xq7lPsl9WaiSWYe6FXz",
          BackgroundGradient: "_2Xm3_sNhoAPpV25YOHUm8A",
          Highlight: "YkEMN4dqPVdvdufkn7yLq",
          ItemSection: "_3p4EX6xLxF9ccx1Y_jNDCa",
          HowToGet: "_3Ivasew2xNa_b5CaL7a_In",
          FreeQuestCtn: "_1deYqyFU74gu0n6WzNrTmn",
          QuestInstructions: "_1G50d530t6b5H3PiVNOPBQ",
          QuestName: "kkqhGQQsuX6fr0UUwIxXg",
          ProgressBar: "_16EW5nb2jZ7nNNJtJknVYf",
          ItemCategoryCtn: "aaosYB-OO-EJn70ocmC-J",
          CategoryName: "_1FN5OnaWAzybq4J_ozBIsY",
          SectionLine: "KJMVW9vv7xeG9RxSrn1AZ",
          PointShopLink: "v75cc6-VG2tzRr_W4eQ12",
          ItemCtn: "_1QrzyWO-Wl--rxSjTbLz5p",
          ProgressIndicationCtn: "_15b3bAwBMv-0X3I6uaac6o",
          ProgressText: "HqRb17BK0zUwRPQXbHm9x",
          ItemBackground: "_1b-IbdTr9R3ZKUWl3WIZj5",
          ImgCtn: "_3i3mybB0zixbTQe_pqH6N2",
          ImgGrey: "_3n2Ur4vZ1ojk_YPqd7iZfq",
          PageBackground: "zZIkdIHeeChogTvItWGO2",
        };
      },
      49395: (k) => {
        k.exports = { ProfileSubPageContainer: "_1npy3GFjDHZPSB66m0_INb" };
      },
      56330: (k) => {
        k.exports = {
          ErrorStyles: "_2Sg7W8jsvFcXVuQ7fbhSLJ",
          ErrorStylesWithIcon: "Lc2PK-Vkkvr2TUS0TfCqq",
          ErrorIconLayout: "_42__6kBR5lkICeFfkFnwz",
          ErrorStylesBackground: "_3fVv6M5HyJXcQ6kNF1SvoH",
          ErrorFloatBelow: "_2aKylEXoZKcXuXfFcmcuQc",
          WarningStyles: "_3gxgE6PMPecWZDBSlGjMX_",
          WarningStylesWithIcon: "_1S_uSkD_E5ayHa48JzzE0E",
          WarningIconLayout: "_2jM80ZtA-oI5okavBZZqnF",
          WarningStylesBackground: "UYrHsewdjj7dSkpWGgikw",
          Stuck: "_2b5wWgFg1yvry3TDzRUfFt",
          WarningFloatBelow: "_3e0cNuLANduciMmeZz1dnk",
          InfoStyles: "_2lreMbIjEILzP1Eomy1QZM",
          InfoStylesWithIcon: "_1_-PibdcIVQzDZEP0_PeLV",
          InfoIconLayout: "_3kyPzolDIjhIh7zW0wA6fy",
          InfoStylesBackground: "_3gNTI5UYknHdJwDfou9Iih",
          Padding: "_36hmaGtzxNb1Pql2UhfM5Z",
          NotTooWideModal: "UfQcb76CCbHawnpQ9tbu3",
          ImageManageDialog: "Pl7AIUjh5siFakQJbPFO9",
          SuccessErrorDialog: "_1wBO1L1tT0f1wtl3CpBWbn",
        };
      },
      40594: (k) => {
        k.exports = {
          ProgressBar: "_3szjUMH5QeRwtXAsLRcWt9",
          AnimateProgress: "_3DjdoQj5NoknowwV5t5JPN",
          loadingBarAnim: "_2SA1xV5w3BGirkDWosGYoX",
          Indeterminate: "_3G7KLhFOuTiHW-fGxtWtRs",
          Circular: "_3wMS41OoTPnZyEddTVwzy_",
          Full: "_3t_UEZDy1QxxcYfn3TTvD2",
        };
      },
    },
  ]);
})();
