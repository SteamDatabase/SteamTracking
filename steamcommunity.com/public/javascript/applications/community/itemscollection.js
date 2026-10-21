/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(() => {
  (self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
    [70349],
    {
      28946: (L, O, t) => {
        "use strict";
        t.r(O), t.d(O, { default: () => ne });
        var e = t(7850),
          D = t(24660),
          a = t(19298),
          R = t(78365),
          j = t(20169),
          c = t(23386),
          _ = t(72609),
          G = t(14904),
          k = t(95995),
          x = t(72865),
          h = t(90626),
          T = t(67705);
        function M() {
          const [I, n] = (0, h.useState)(() =>
            (0, T.Tc)("profile-itemcollection", "itemcollection_config"),
          );
          return I;
        }
        var r = t(84676),
          m = t(36707),
          p = t(40594);
        function g({
          nPercent: I,
          indeterminate: n,
          animate: f,
          className: S,
        }) {
          return (0, e.jsx)("div", {
            className: (0, m.A)(
              p.ProgressBar,
              f && p.AnimateProgress,
              n && p.Indeterminate,
              S,
            ),
            style: { "--percent": I / 100 },
          });
        }
        const y = ({ nPercent: I, size: n = 120, strokeWidth: f = 20 }) => {
          const S = (n - f) / 2,
            d = 2 * Math.PI * S,
            B = d - (I / 100) * d,
            P = I == 100;
          return (0, e.jsx)("div", {
            className: (0, m.A)({ [p.Circular]: !0, [p.Full]: P }),
            children: (0, e.jsxs)("svg", {
              width: n,
              height: n,
              style: { transform: "rotate(-90deg)" },
              children: [
                (0, e.jsx)("circle", {
                  cx: n / 2,
                  cy: n / 2,
                  r: S,
                  stroke: "#0c131d",
                  strokeWidth: f,
                  fill: "none",
                }),
                (0, e.jsx)("circle", {
                  cx: n / 2,
                  cy: n / 2,
                  r: S,
                  stroke: "#1a9fff",
                  strokeWidth: f,
                  fill: "none",
                  strokeDasharray: d,
                  strokeDashoffset: B,
                  style: { transition: "stroke-dashoffset 0.3s ease-in-out" },
                }),
              ],
            }),
          });
        };
        var u = t(18210),
          q = t(92264),
          ee = t(54963),
          o = t(49395),
          l = t.n(o),
          C = t(85427),
          s = t.n(C),
          H = t(41635);
        function U(I) {
          const {
              strProfileName: n,
              strSteamId: f,
              bViewingOwnProfile: S,
              rgCommunityItemDefs: d,
              rgUserCommunityItems: B,
              nAppID: P,
              rgRewardItems: E,
              rgUserItemRewarded: K,
              oRewardDefinition: V,
            } = M(),
            i = (0, h.useMemo)(() => {
              const A = new Set();
              B.forEach((v) => {
                A.add(`${v.appid}_${v.item_type}`);
              });
              const W = new Set();
              E?.forEach((v) => {
                W.add(v.community_item_type);
              });
              const te = new Map();
              return (
                d
                  .filter(
                    (v) =>
                      v.active &&
                      !v.deleted &&
                      !W.has(v.item_type) &&
                      v.item_class != c.u8,
                  )
                  .sort((v, ie) => {
                    const se = A.has(`${v.appid}_${v.item_type}`),
                      oe = A.has(`${ie.appid}_${ie.item_type}`);
                    return (se && oe) || (!se && !oe)
                      ? ie.item_type - v.item_type
                      : se
                        ? -1
                        : 1;
                  })
                  .forEach((v) => {
                    te.has(v.item_class) || te.set(v.item_class, []),
                      te
                        .get(v.item_class)
                        .push({
                          ...v,
                          user_has_item: A.has(`${v.appid}_${v.item_type}`),
                        });
                  }),
                te
              );
            }, [d, E, B]),
            N = (0, h.useMemo)(() => {
              if (i.has(c.sU)) {
                const A = i.get(c.sU).filter((W) => {
                  const te = JSON.parse(W.item_key_values);
                  return W.item_movie_webm && W.item_movie_mp4;
                });
                if (A.length) return (0, H.fW)(A), A[0];
              }
              return null;
            }, [i]),
            F = (0, h.useMemo)(() => {
              let A = new Map();
              return (
                d.forEach((W) => {
                  A.set(W.item_type, W);
                }),
                A
              );
            }, [d]),
            J = (0, h.useMemo)(
              () => Array.from(i.keys()).sort((A, W) => W - A),
              [i],
            ),
            [X, re, ae] = h.useMemo(() => {
              const A = B?.filter((se) => {
                  const oe = F.get(se.item_type);
                  return !(
                    oe &&
                    (oe.item_class == c.Ve || oe.item_class == c.u8)
                  );
                }),
                W = d.filter(
                  (se) => se.item_class != c.Ve && se.item_class != c.u8,
                ),
                te = A.length || 0,
                v = W.length || 0;
              return [v ? Math.floor((te * 100) / v) : 0, v, te];
            }, [F, d, B]);
          return (0, e.jsx)(x.nn, {
            feature: "itemcollections",
            children: (0, e.jsx)(k.A, {
              appID: P,
              children: (0, e.jsxs)(a.Z, {
                className: l().ProfileSubPageContainer,
                children: [
                  N &&
                    (0, e.jsx)("div", {
                      className: s().PageBackground,
                      children: (0, e.jsxs)("video", {
                        preload: "auto",
                        playsInline: !0,
                        muted: !0,
                        autoPlay: !0,
                        loop: !0,
                        poster: `${_.TS.MEDIA_CDN_COMMUNITY_URL}images/items/${P}/${N.item_image_large}`,
                        children: [
                          (0, e.jsx)("source", {
                            src: `${_.TS.MEDIA_CDN_COMMUNITY_URL}images/items/${P}/${N.item_movie_webm}`,
                            type: "video/webm",
                          }),
                          !_.TS.IN_CLIENT &&
                            (0, e.jsx)("source", {
                              src: `${_.TS.MEDIA_CDN_COMMUNITY_URL}images/items/${P}/${N.item_movie_mp4}`,
                              type: "video/mp4",
                            }),
                        ],
                      }),
                    }),
                  (0, e.jsx)(z, { nAppID: P }),
                  (0, e.jsxs)("div", {
                    className: s().PageSection,
                    children: [
                      (0, e.jsx)("span", {
                        children: (0, u.we)(
                          "#ItemCollection_Collected",
                          ae,
                          re,
                        ),
                      }),
                      (0, e.jsx)(g, {
                        className: s().ProgressBar,
                        animate: !0,
                        nPercent: X,
                        indeterminate: !1,
                      }),
                    ],
                  }),
                  !!V &&
                    (0, e.jsx)("div", {
                      className: (0, m.A)(
                        s().PageSection,
                        s().BackgroundGradient,
                        s().Highlight,
                      ),
                      children: (0, e.jsx)($, {
                        oRewardDefinition: V,
                        bViewingOwnProfile: S,
                        rgRewardItems: E,
                        rgUserItemRewarded: K,
                        rgCommunityItemDefs: d,
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
                      J.map((A) =>
                        (0, e.jsx)(
                          w,
                          {
                            nAppID: P,
                            itemClass: A,
                            rgItems: i.get(A),
                            bViewingOwnProfile: S,
                            bHideItemStore: A == c.Ve,
                          },
                          "item_class_" + A,
                        ),
                      ),
                    ],
                  }),
                ],
              }),
            }),
          });
        }
        function $(I) {
          const {
              oRewardDefinition: n,
              rgRewardItems: f,
              rgUserItemRewarded: S,
              rgCommunityItemDefs: d,
              bViewingOwnProfile: B,
            } = I,
            P = (0, h.useMemo)(() => {
              const E = new Set();
              S?.forEach((i) => {
                E.add(
                  `${i.item_definition.appid}_${i.item_definition.community_item_type}`,
                );
              });
              const K = new Set();
              f.forEach((i) => {
                K.add(`${i.appid}_${i.community_item_type}`);
              });
              const V = new Map();
              return (
                d
                  .filter((i) => i.active)
                  .filter((i) => K.has(`${i.appid}_${i.item_type}`))
                  .sort((i, N) => {
                    const F = E.has(`${i.appid}_${i.item_type}`),
                      J = E.has(`${N.appid}_${N.item_type}`);
                    return (F && J) || (!F && !J)
                      ? N.item_type - i.item_type
                      : F
                        ? -1
                        : 1;
                  })
                  .forEach((i) => {
                    const N = E.has(`${i.appid}_${i.item_type}`);
                    V.has(i.item_class) || V.set(i.item_class, []),
                      V.get(i.item_class).push({ ...i, user_has_item: N });
                  }),
                V
              );
            }, [f, S, d]);
          return (0, e.jsxs)(R.YZ, {
            navEntryPreferPosition: j.iU.LAST,
            preferredFocus: !0,
            className: s().FreeQuestCtn,
            children: [
              (0, e.jsx)("div", {
                className: s().HowToGet,
                children: (0, u.we)("#ItemCollection_ForFree_Title"),
              }),
              (0, e.jsxs)(a.Z, {
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
                        children: (0, q.nR)(
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
                              href: `${_.TS.STORE_BASE_URL}explore?dq=widget`,
                            }),
                          ),
                        ],
                      }),
                    ],
                  }),
                  Array.from(P.keys()).map((E) =>
                    (0, e.jsx)(
                      w,
                      {
                        bViewingOwnProfile: B,
                        nAppID: n.appid,
                        itemClass: E,
                        rgItems: P.get(E),
                        bHideItemStore: !0,
                      },
                      "free_item_class_" + E,
                    ),
                  ),
                ],
              }),
            ],
          });
        }
        function w(I) {
          const {
              rgItems: n,
              itemClass: f,
              nAppID: S,
              bViewingOwnProfile: d,
            } = I,
            B = (0, h.useMemo)(
              () => n.filter((E) => E.user_has_item).length,
              [n],
            ),
            P = n.length ? Math.floor((B * 100) / n.length) : 0;
          return (0, e.jsxs)(R.YZ, {
            navEntryPreferPosition: j.iU.LAST,
            preferredFocus: !0,
            className: (0, m.A)(s().ItemSection),
            children: [
              (0, e.jsx)(Q, { ...I }),
              (0, e.jsxs)(a.Z, {
                className: s().ItemCategoryCtn,
                children: [
                  (0, e.jsx)(a.Z, {
                    className: s().CategoryName,
                    children: (0, u.we)("#Sale_Section_PointShop_class_" + f),
                  }),
                  (0, e.jsx)("div", { className: s().SectionLine }),
                  (0, e.jsx)(Z, { ...I }),
                ],
              }),
              (0, e.jsxs)(a.Z, {
                className: s().ItemCtn,
                children: [
                  (0, e.jsxs)(a.Z, {
                    className: s().ProgressIndicationCtn,
                    children: [
                      (0, e.jsx)(y, { nPercent: P }),
                      (0, e.jsxs)("div", {
                        className: s().ProgressText,
                        children: [
                          (0, e.jsx)("div", {
                            children: (0, u.we)(
                              "#ItemCollection_Collected_Item",
                              B,
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
                  n.map((E) =>
                    (0, e.jsx)(Y, { item: E }, "item_" + E.item_type),
                  ),
                ],
              }),
            ],
          });
        }
        function Q(I) {
          const { itemClass: n, nAppID: f } = I;
          return n !== c.Ve
            ? null
            : (0, e.jsx)(a.Z, {
                className: s().HowToGet,
                children: (0, u.we)("#ItemCollection_GameCards_Title"),
              });
        }
        function Z(I) {
          const {
            itemClass: n,
            nAppID: f,
            bViewingOwnProfile: S,
            bHideItemStore: d,
          } = I;
          return n == c.Ve && S
            ? (0, e.jsx)(D.Ii, {
                href: `${_.TS.COMMUNITY_BASE_URL}my/gamecards/${f}`,
                className: s().PointShopLink,
                children: (0, u.we)("#ItemCollection_Visit_Badge"),
              })
            : d
              ? null
              : (0, e.jsx)(D.Ii, {
                  href: `${_.TS.STORE_BASE_URL}points/shop/app/${f}`,
                  className: s().PointShopLink,
                  children: (0, u.we)("#ItemCollection_Visit"),
                });
        }
        function Y(I) {
          const { item: n } = I,
            [f, S] = (0, ee.OP)(),
            d = n.user_has_item || f,
            B = !d,
            P =
              (d || n.item_class == c.Ve || n.item_class == c.jE) &&
              n.item_class != c.J4
                ? n.item_image_small
                : void 0;
          return (0, e.jsx)(a.Z, {
            ...S,
            onFocus: () => S.onPointerEnter(),
            onBlur: () => S.onPointerLeave(),
            focusable: !0,
            className: s().ItemBackground,
            children: (0, e.jsx)(G.Qc, {
              appid: n.appid,
              item_image_large: n.item_image_large,
              item_image_small: P,
              item_title: n.item_title,
              item_movie_mp4: d ? n.item_movie_mp4_small : void 0,
              item_movie_webm: d ? n.item_movie_webm_small : void 0,
              className: (0, m.A)({ [s().ImgCtn]: !0, [s().ImgGrey]: B }),
              videoClassName: s().ImgCtn,
            }),
          });
        }
        const b = { include_assets: !0 };
        function z(I) {
          const { nAppID: n } = I,
            [f] = (0, r.t7)(n, b);
          return f
            ? (0, e.jsx)(a.Z, {
                className: s().AppHeaderCtn,
                children: (0, e.jsxs)(a.Z, {
                  children: [
                    (0, e.jsxs)(a.Z, {
                      className: s().AppHeaderRow,
                      children: [
                        (0, e.jsx)(a.Z, {
                          className: s().AppName,
                          children: f.GetName(),
                        }),
                        (0, e.jsx)(a.Z, {
                          className: s().PageName,
                          children: (0, u.we)("#ItemCollection_Title"),
                        }),
                      ],
                    }),
                    (0, e.jsx)(a.Z, {
                      children: (0, u.we)("#ItemCollection_EventSubTitle"),
                    }),
                  ],
                }),
              })
            : null;
        }
        const ne = U;
      },
      23386: (L, O, t) => {
        "use strict";
        t.d(O, {
          EL: () => e,
          Ed: () => T,
          J4: () => j,
          Qw: () => G,
          ST: () => _,
          Ve: () => a,
          XY: () => x,
          iV: () => h,
          jE: () => k,
          oW: () => c,
          sU: () => R,
          u8: () => D,
          wK: () => M,
          xi: () => m,
          xw: () => p,
          yZ: () => g,
          zs: () => r,
        });
        const e = 0,
          D = 1,
          a = 2,
          R = 3,
          j = 4,
          c = 5,
          _ = 6,
          G = 7,
          k = 8,
          x = 9,
          h = 10,
          T = 11,
          M = 12,
          r = 13,
          m = 14,
          p = 15,
          g = 16,
          y = 17;
      },
      33907: (L, O, t) => {
        "use strict";
        t.d(O, { d2: () => M });
        var e = t(88942),
          D = t(90626),
          a = t(72604),
          R = t(72609);
        const j = "minigamev2/itemdefs",
          c = "appid",
          _ = "editor";
        function G() {
          return (typeof self < "u" ? self.origin + "/" : "") ===
            R.TS.STORE_BASE_URL
            ? R.TS.STORE_BASE_URL
            : R.TS.COMMUNITY_BASE_URL;
        }
        async function k(r, m) {
          if (!r) return [];
          const p = new URLSearchParams({ [c]: String(r), l: R.TS.LANGUAGE });
          m && p.set(_, "1");
          const g = `${G()}${j}?${p}`,
            y = await fetch(g, { credentials: m ? "include" : "same-origin" });
          if (!y.ok) throw new Error(`${g} answered ${y.status}`);
          const u = await y.json();
          if (u?.success == a.R && u.item_definitions)
            return u.item_definitions;
          throw new Error(
            "Community item definitions for app " +
              r +
              " answered " +
              u?.success,
          );
        }
        function x(r, m) {
          return ["MinigameCommunityItemDefs", r, !!m];
        }
        function h(r, m) {
          return {
            queryKey: x(r, m),
            queryFn: () => k(r, m),
            enabled: !!r,
            retry: !1,
          };
        }
        function T(r, m) {
          const { data: p } = (0, e.I)(h(r, m));
          return p;
        }
        function M(r, m, p) {
          const g = T(r, p);
          return (0, D.useMemo)(
            () =>
              g?.find(
                (y) => (p || y.active) && y.appid == r && y.item_type == m,
              ),
            [g, r, m, p],
          );
        }
      },
      14904: (L, O, t) => {
        "use strict";
        t.d(O, { Qc: () => x, Zx: () => T, f8: () => h });
        var e = t(7850),
          D = t(65946),
          a = t(23386),
          R = t(85599),
          j = t(18210),
          c = t(72609),
          _ = t(56330),
          G = t.n(_),
          k = t(33907);
        function x(M) {
          const {
            appid: r,
            item_image_small: m,
            item_image_large: p,
            item_movie_mp4: g,
            item_movie_webm: y,
            item_title: u,
          } = M;
          if (g && y) {
            const q = `${c.TS.MEDIA_CDN_COMMUNITY_URL}images/items/${r}/${m}`,
              ee = `${c.TS.MEDIA_CDN_COMMUNITY_URL}images/items/${r}/${y}`,
              o = `${c.TS.MEDIA_CDN_COMMUNITY_URL}images/items/${r}/${g}`;
            return (0, e.jsx)(e.Fragment, {
              children: (0, e.jsxs)("video", {
                muted: !0,
                controls: !1,
                autoPlay: !0,
                loop: !0,
                poster: q,
                playsInline: !0,
                className: M.videoClassName,
                children: [
                  (0, e.jsx)("source", { src: ee, type: "video/webm" }),
                  !c.TS.IN_CLIENT &&
                    (0, e.jsx)("source", { src: o, type: "video/mp4" }),
                ],
              }),
            });
          } else {
            const q = `${c.TS.MEDIA_CDN_COMMUNITY_URL}images/items/${r}/${m || p}`;
            return (0, e.jsx)("img", {
              className: M.className,
              src: q,
              alt: u,
            });
          }
        }
        function h(M) {
          const { appid: r, community_item_type: m, bForEdit: p } = M,
            g = (0, k.d2)(r, m, p),
            y =
              g && !g.active
                ? (0, e.jsx)("div", {
                    className: _.WarningStylesBackground,
                    children: (0, j.we)(
                      "#Sale_Section_RewardShelf_ItemInActiveWarning",
                    ),
                  })
                : void 0;
          return g
            ? (0, e.jsxs)(e.Fragment, {
                children: [(0, e.jsx)(x, { ...g }), y],
              })
            : (0, e.jsx)(R.t, { size: "small", string: (0, j.we)("#Loading") });
        }
        function T(M) {
          const { section: r, rewardDef: m, language: p } = M,
            g = (0, k.d2)(m.appid ?? 0, m.community_item_type ?? 0),
            [y] = (0, D.q3)(() => [!!r.rewards?.show_reward_item_name]);
          let u;
          switch (m.community_class) {
            case a.xi:
            case a.xw:
              u = `${c.TS.COMMUNITY_BASE_URL}my/edit/avatar`;
              break;
            case a.u8:
              u = `${c.TS.COMMUNITY_BASE_URL}my/edit/favoritebadge`;
              break;
            case a.sU:
            case a.jE:
              u = `${c.TS.COMMUNITY_BASE_URL}my/edit/background`;
              break;
            case a.zs:
              u = `${c.TS.COMMUNITY_BASE_URL}my/edit/miniprofile`;
              break;
            case a.Ed:
              u = `${c.TS.COMMUNITY_BASE_URL}chat`;
              break;
          }
          return (0, e.jsxs)("a", {
            href: u,
            children: [
              (0, e.jsx)(h, {
                appid: m.appid ?? 0,
                community_item_type: m.community_item_type ?? 0,
              }),
              !!y && (0, e.jsx)("span", { children: g?.item_name }),
            ],
          });
        }
      },
      95995: (L, O, t) => {
        "use strict";
        t.d(O, { A: () => c });
        var e = t(72865),
          D = t(90626),
          a = t(37740),
          R = t(40365),
          j = t(18938);
        function c(_) {
          const { appID: G, feature: k, depth: x, children: h } = _,
            T = (0, e.ru)(k, x),
            M = (0, a.b)(),
            [r, m] = D.useState(void 0),
            p = D.useCallback(
              (q) => {
                q.isIntersecting &&
                  m((ee) =>
                    ee?.appID == G && ee?.snr == T ? ee : { appID: G, snr: T },
                  );
              },
              [G, T],
            );
          (0, D.useEffect)(() => {
            r && r.appID != null && M.AddImpression(r.appID, r.snr);
          }, [M, r]);
          const g = (0, R.BL)(p),
            y = G && (!r || (r.appID != G && r.snr != T)),
            u = (0, j.Ue)(h.props.ref, y ? g : void 0);
          return D.cloneElement(h, { ref: u });
        }
      },
      37740: (L, O, t) => {
        "use strict";
        t.d(O, { b: () => R });
        var e = t(7850),
          D = t(90626);
        const a = D.createContext({
          AddImpression: () => {
            console.log("Impression Tracking not enabled");
          },
          BIsValid: () => !1,
        });
        function R() {
          return D.useContext(a);
        }
        function j(c) {
          return jsx(a.Provider, {
            value: c.ImpressionTracker,
            children: c.children,
          });
        }
      },
      84676: (L, O, t) => {
        "use strict";
        t.d(O, {
          G6: () => T,
          Gg: () => m,
          Sq: () => k,
          eR: () => x,
          ik: () => h,
          mZ: () => p,
          t7: () => M,
          zX: () => y,
        });
        var e = t(41735),
          D = t.n(e),
          a = t(90626),
          R = t(72604),
          j = t(3367),
          c = t(54963),
          _ = t(10142);
        function G(o, l, C = !0) {
          const s = C
              ? CStoreItemCache.k_DataRequest_BasicInfo
              : CStoreItemCache.k_DataRequest_CommonOnly,
            H = C || CStoreItemCache.Get().BHasStoreItem(o, l, s) ? o : null,
            [U, $] = T(H, l, s),
            [w, Q] = useState(null),
            [Z, Y] = T(w, l, s);
          useEffect(() => {
            U?.GetAppType() === EStoreAppType.k_EStoreAppType_Demo &&
              Q(U.GetParentAppID());
          }, [U]);
          let b = U?.GetShortDescription()
            ? StripBBCodeTags(U.GetShortDescription())
            : "";
          (!b || b.length === 0) &&
            Z &&
            (b = Z?.GetShortDescription()
              ? StripBBCodeTags(Z.GetShortDescription())
              : "");
          const z = $ == h && (!w || Y == h);
          return [b, z];
        }
        const k = 1,
          x = 2,
          h = 3;
        function T(o, l, C, s) {
          const H = (0, a.useRef)(void 0),
            U = (0, a.useRef)(void 0),
            $ = (0, c.CH)();
          H.current = o;
          const [w, Q] = (0, a.useState)(void 0),
            {
              include_assets: Z,
              include_release: Y,
              include_platforms: b,
              include_all_purchase_options: z,
              include_screenshots: ne,
              include_trailers: I,
              include_ratings: n,
              include_tag_count: f,
              include_reviews: S,
              include_basic_info: d,
              include_supported_languages: B,
              include_full_description: P,
              include_included_items: E,
              include_assets_without_overrides: K,
              apply_user_filters: V,
              include_links: i,
              include_extra_details: N,
              include_optin_registration_tags: F,
            } = C;
          if (
            ((0, a.useEffect)(() => {
              const X = {
                include_assets: Z,
                include_release: Y,
                include_platforms: b,
                include_all_purchase_options: z,
                include_screenshots: ne,
                include_trailers: I,
                include_ratings: n,
                include_tag_count: f,
                include_reviews: S,
                include_basic_info: d,
                include_supported_languages: B,
                include_full_description: P,
                include_included_items: E,
                include_assets_without_overrides: K,
                apply_user_filters: V,
                include_links: i,
                include_extra_details: N,
                include_optin_registration_tags: F,
              };
              let re = null;
              return (
                !o ||
                  o < 0 ||
                  _.A.Get().BHasStoreItem(o, l, X) ||
                  (w !== void 0 && s && s == U.current) ||
                  (s !== U.current && (Q(void 0), (U.current = s)),
                  (re = D().CancelToken.source()),
                  _.A.Get()
                    .QueueStoreItemRequest(o, l, X)
                    .then((ae) => {
                      !re?.token.reason && H.current === o && Q(ae == R.R), $();
                    })),
                () => re?.cancel("useStoreItemCache: unmounting")
              );
            }, [
              o,
              l,
              s,
              w,
              Z,
              Y,
              b,
              z,
              ne,
              I,
              n,
              f,
              S,
              d,
              B,
              P,
              E,
              K,
              V,
              i,
              N,
              F,
              $,
            ]),
            !o)
          )
            return [null, x];
          if (w === !1) return [void 0, x];
          if (_.A.Get().BIsStoreItemMissing(o, l)) return [void 0, x];
          if (!_.A.Get().BHasStoreItem(o, l, C)) return [void 0, k];
          const J = _.A.Get().GetStoreItemWithLegacyVisibilityCheck(o, l);
          return J ? [J, h] : [null, x];
        }
        function M(o, l, C) {
          return T(o, j.c6.qI, l, C);
        }
        function r(o, l, C) {
          return T(o, EStoreItemType.k_EStoreItemType_Bundle, l, C);
        }
        function m(o, l, C) {
          return T(o, j.c6.RD, l, C);
        }
        function p(o, l, C) {
          const [s, H] = T(o, l, C);
          let U;
          s?.GetStoreItemType() == j.c6.RD &&
            !s.GetAssets()?.GetHeaderURL() &&
            s?.GetIncludedAppIDs().length == 1 &&
            (U = s.GetIncludedAppIDs()[0]);
          const [$, w] = M(U, C);
          return U && $?.BIsVisible() ? [$, w] : [s, H];
        }
        function g(o, l, C, s) {
          const H = (0, c.CH)(),
            {
              include_assets: U,
              include_release: $,
              include_platforms: w,
              include_all_purchase_options: Q,
              include_screenshots: Z,
              include_trailers: Y,
              include_ratings: b,
              include_tag_count: z,
              include_reviews: ne,
              include_basic_info: I,
              include_supported_languages: n,
              include_full_description: f,
              include_included_items: S,
              include_assets_without_overrides: d,
              apply_user_filters: B,
              include_links: P,
              include_extra_details: E,
              include_optin_registration_tags: K,
            } = C;
          return (
            (0, a.useEffect)(() => {
              if (!o || o.length == 0) return;
              const i = {
                  include_assets: U,
                  include_release: $,
                  include_platforms: w,
                  include_all_purchase_options: Q,
                  include_screenshots: Z,
                  include_trailers: Y,
                  include_ratings: b,
                  include_tag_count: z,
                  include_reviews: ne,
                  include_basic_info: I,
                  include_supported_languages: n,
                  include_full_description: f,
                  include_included_items: S,
                  include_assets_without_overrides: d,
                  apply_user_filters: B,
                  include_links: P,
                  include_extra_details: E,
                  include_optin_registration_tags: K,
                },
                N = o.filter(
                  (X) =>
                    !(
                      _.A.Get().BHasStoreItem(X, l, i) ||
                      _.A.Get().BIsStoreItemMissing(X, l)
                    ),
                );
              if (N.length == 0) return;
              const F = D().CancelToken.source(),
                J = N.map((X) => _.A.Get().QueueStoreItemRequest(X, l, i));
              return (
                Promise.all(J).then(() => {
                  F.token.reason || H();
                }),
                () => F.cancel("useStoreItemCacheMultiplePackages: unmounting")
              );
            }, [
              o,
              l,
              s,
              H,
              U,
              $,
              w,
              Q,
              Z,
              Y,
              b,
              z,
              ne,
              I,
              n,
              f,
              S,
              d,
              B,
              P,
              E,
              K,
            ]),
            o
              ? o.every(
                  (i) =>
                    _.A.Get().BHasStoreItem(i, l, C) ||
                    _.A.Get().BIsStoreItemMissing(i, l),
                )
                ? o.every((i) =>
                    _.A.Get().GetStoreItemWithLegacyVisibilityCheck(i, l),
                  )
                  ? h
                  : x
                : k
              : x
          );
        }
        function y(o, l, C) {
          return g(o, j.c6.qI, l, C);
        }
        function u(o, l, C) {
          return g(o, EStoreItemType.k_EStoreItemType_Bundle, l, C);
        }
        function q(o, l, C) {
          return g(o, EStoreItemType.k_EStoreItemType_Package, l, C);
        }
        function ee() {
          React.useEffect(
            () => (
              CStoreItemCache.Get().SetReturnUnavailableItems(!0),
              () => CStoreItemCache.Get().SetReturnUnavailableItems(!1)
            ),
            [],
          );
        }
      },
      85427: (L) => {
        L.exports = {
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
      49395: (L) => {
        L.exports = { ProfileSubPageContainer: "_1npy3GFjDHZPSB66m0_INb" };
      },
      56330: (L) => {
        L.exports = {
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
      40594: (L) => {
        L.exports = {
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
