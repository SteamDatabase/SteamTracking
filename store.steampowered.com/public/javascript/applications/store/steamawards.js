/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(() => {
  (self.webpackChunkstore = self.webpackChunkstore || []).push([
    [23027],
    {
      15252: (F, U, t) => {
        "use strict";
        t.d(U, { Ae: () => p, EY: () => y, U6: () => m });
        var e = t(7850),
          u = t(1039),
          I = t(69289),
          d = t(8928),
          R = t(64238),
          s = t.n(R),
          O = t(65274),
          x = t.n(O);
        function y(j) {
          const { as: A = "span", ref: _, className: N, ...n } = j,
            C = A;
          return (0, e.jsx)(C, {
            ref: _,
            ...(0, I.mz)({ ...n, className: s()(O.Text, N) }, p),
          });
        }
        const m = [
            {
              prop: "weight",
              responsive: !0,
              className: O.TextWeight,
              cssProperty: (j) => ["--text-weight", `var(--font-weight-${j})`],
            },
            {
              prop: "align",
              responsive: !0,
              className: O.TextAlign,
              cssProperty: "--text-align",
            },
            {
              prop: "color",
              responsive: !0,
              cssProperty: (j, A, _) => [
                "--text-color",
                (0, I.To)(j, (0, u.I)(A.contrast, _) ?? "body"),
              ],
            },
            {
              prop: "contrast",
              responsive: !0,
              cssProperty: (j, A, _) => [
                "--text-color",
                (0, I.To)((0, u.I)(A.color, _) ?? "text-body", j),
              ],
            },
            { prop: "truncate", className: O.Truncate },
            {
              prop: "lineClamp",
              responsive: !0,
              className: O.LineClamp,
              cssProperty: "--line-clamp",
            },
            {
              prop: "whiteSpace",
              className: O.WhiteSpace,
              cssProperty: "--white-space",
            },
          ],
          p = [
            ...m,
            ...d.L,
            {
              prop: "size",
              responsive: !0,
              className: (j) => O[`TextSize-${j}`],
            },
          ];
      },
      86336: (F, U, t) => {
        "use strict";
        t.d(U, { W: () => p, Y: () => y });
        var e = t(7850),
          u = t(50122),
          I = t.n(u),
          d = t(15252),
          R = t(69289),
          s = t(70182),
          O = t(3166),
          x = t(2333);
        function y(j) {
          const { underline: A = "auto", ..._ } = j,
            N = (0, R.mz)({ ..._, underline: A, className: u.TextLink }, m);
          return (0, e.jsx)(x.o, { ...N });
        }
        const m = [
          ...d.Ae,
          { prop: "underline", className: (j) => u[`Underline-${j}`] },
        ];
        function p(j) {
          const { underline: A = "auto", focusable: _, navProps: N, ...n } = j,
            C = (0, O.Qn)(),
            c = _ ?? N?.focusable ?? !!n.onClick,
            V = (0, e.jsx)("span", {
              role: "button",
              ...(0, R.mz)(
                { ...n, underline: A, className: u.TextLinkButton },
                m,
              ),
            });
          return C && (c || N)
            ? (0, e.jsx)(s.J, { ...(N || {}), focusable: c, children: V })
            : V;
        }
      },
      15860: (F, U, t) => {
        "use strict";
        t.d(U, { L: () => s, c: () => R });
        var e = t(27386),
          u = t(76617),
          I = t(58632),
          d = t.n(I);
        function R(O, x) {
          return new (d())(
            async (y) => {
              const m = [...y],
                p = await e.xtC.GetPlayerLinkDetails(O, { steamids: m }),
                j = new Map();
              return (
                p
                  .Body()
                  .accounts()
                  .forEach((A) => {
                    const _ = A.toObject();
                    j.set(_.public_data.steamid, _);
                  }),
                m.map((A) => j.get(A) ?? null)
              );
            },
            { maxBatchSize: 100, cache: !1, ...x },
          );
        }
        function s(O) {
          return (0, u.V)("PlayerLinkDetails", () => R(O));
        }
      },
      95174: (F, U, t) => {
        "use strict";
        t.d(U, { u: () => Ce, z: () => oe });
        var e = t(7850),
          u = t(9046),
          I = t(99412),
          d = t(19298),
          R = t(68266),
          s = t(56492),
          O = t(72609),
          x = t(86298),
          y = t(80702),
          m = t(21721),
          p = t(95995),
          j = t(29522),
          A = t(40358),
          _ = t(72865),
          N = t(41032),
          n = t(65946),
          C = t(68031),
          c = t(90626),
          V = t(73259),
          b = t(33924),
          h = t.n(b),
          M = t(28515),
          E = t(76532),
          P = t.n(E),
          D = t(18057),
          X = t(13465),
          G = t(36118),
          L = t(36707),
          Z = t(3166);
        const $ = 30;
        function Ce(le) {
          const {
              event: Q,
              imageURLOverride: k,
              bShowAssociatedApp: se,
              langOverride: J,
              onClick: q,
              eEventRount: z,
              bHidePrices: ee,
              nSummaryMaxLength: de,
            } = le,
            ne = (0, N.Zj)(Q.appid),
            _e = (0, M.n)(),
            ce = J || (0, I.sfN)(O.TS.LANGUAGE),
            he =
              (0, R.m0)(
                k !== void 0 ? void 0 : Q,
                "capsule",
                ce,
                u.wI.capsule_main,
              ) ?? k,
            fe =
              (0, R.m0)(k !== void 0 ? void 0 : Q, "capsule", ce, u.wI.full) ??
              k,
            [De, Te, Oe, ge] = (0, n.q3)(() => [
              Q.GetNameWithFallback(ce) || "",
              Q.GetCategoryAsString(),
              Q.GetSummaryWithFallback(ce, de),
              Q.GetSubTitleWithLanguageFallback(ce) || "",
            ]),
            ye = (0, j.$5)(Q.appid),
            { data: Ie } = (0, A.lv)(ye),
            te = [];
          if ((he && te.push(he), fe && fe !== he && te.push(fe), Ie)) {
            const Ee = (0, m.b0)(Ie, "main_capsule");
            Ee && te.push(Ee);
          }
          const [we, Me] = (0, c.useState)(he),
            Fe = (Ee, Ue, Le) => {
              Le >= te.length && Me(void 0), Me(te[Le + 1]);
            };
          if (!Q)
            return (0, e.jsx)("div", { className: h().OtherEvents_EventCtn });
          const We = Q ? Q.GetStartTimeAndDateUnixSeconds() : 0;
          let xe = ge;
          return (
            ge && (ge.length > $ || De.length > $) && (xe = void 0),
            (0, e.jsxs)("div", {
              className: h().EventSizer,
              children: [
                (0, e.jsxs)(s.tj, {
                  className: (0, L.A)(
                    h().OtherEvents_EventCtn,
                    "OtherEvents_EventCtn",
                    h().HoversEnabled,
                  ),
                  eventModel: Q,
                  route: z || s.PH.k_eView,
                  onClick: q,
                  preferredFocus: !0,
                  children: [
                    (0, e.jsxs)("div", {
                      className: (0, L.A)(
                        h().EventSummaryContainer,
                        h().HideInWideMode,
                      ),
                      children: [
                        (0, e.jsx)("div", {
                          className: h().EventSummaryType,
                          children: Te,
                        }),
                        (0, e.jsx)("div", {
                          className: h().EventSummaryText,
                          children: Oe,
                        }),
                      ],
                    }),
                    (0, e.jsx)("div", {
                      className: h().OtherEvents_BGImage,
                      style: {
                        backgroundColor: "#ffffff",
                        backgroundImage: we ? `url(${(0, V.j3)(we)})` : "none",
                      },
                    }),
                    (0, e.jsxs)("div", {
                      className: h().OtherEvents_ContentCtn,
                      children: [
                        (0, e.jsx)("div", {
                          className: (0, L.A)(
                            h().OtherEvents_MainImageCtn,
                            ne && h().MaskImages,
                          ),
                          children: (0, e.jsx)(X.c, {
                            rgSources: te,
                            onIncrementalError: Fe,
                            className: h().OtherEvents_MainImage,
                            alt: "",
                          }),
                        }),
                        (0, e.jsxs)("div", {
                          className: h().OtherEvents_TextCtn,
                          children: [
                            (0, e.jsx)("div", {
                              className: h().OtherEvents_TextTitle,
                              children: De,
                            }),
                            !!xe &&
                              (0, e.jsx)("div", {
                                className: h().OtherEvents_SubTitle,
                                children: xe,
                              }),
                            (0, e.jsxs)(C.s, {
                              direction: "row",
                              gap: "3",
                              align: "center",
                              children: [
                                (0, e.jsx)("div", {
                                  className: (0, L.A)(
                                    h().EventType,
                                    h().ShowInWideMode,
                                  ),
                                  children: Te,
                                }),
                                We > _e
                                  ? (0, e.jsx)("div", {
                                      className: (0, L.A)(
                                        h().UpcomingCtn,
                                        "UpcomingCtn",
                                      ),
                                      children: (0, e.jsx)(D.K4, {
                                        bSingleLine: !0,
                                        dateAndTime:
                                          Q.GetStartTimeAndDateUnixSeconds(),
                                      }),
                                    })
                                  : (0, e.jsx)(D.K4, {
                                      bSingleLine: !0,
                                      bOnlyDate: !0,
                                      dateAndTime:
                                        Q.GetStartTimeAndDateUnixSeconds(),
                                    }),
                              ],
                            }),
                            (0, e.jsx)("div", {
                              className: (0, L.A)(
                                h().EventSummaryText,
                                h().ShowInWideMode,
                              ),
                              children: Oe,
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
                !!(se && Q.appid) &&
                  (0, e.jsx)(oe, { appid: Q.appid, bHidePrice: ee }),
              ],
            })
          );
        }
        function oe(le) {
          const { appid: Q, bHidePrice: k } = le,
            se = (0, j.$5)(Q),
            { data: J } = (0, A.J$)(se),
            { data: q } = (0, A.lv)(se),
            { data: z } = (0, A.Q_)(se),
            ee = (0, _.n9)(),
            de = (0, Z.Qn)();
          if (!q || !J) return null;
          const ne = z && z.hide_discount_pct_for_compliance;
          return (0, e.jsx)(p.A, {
            appID: Q,
            children: (0, e.jsxs)(d.Z, {
              className: (0, L.A)(h().AppCapsuleCtn, "AppCapsuleCtn"),
              ...(0, x.S)(J, ee, de, !1),
              children: [
                (0, e.jsx)(y.Q, {
                  id: se,
                  hoverProps: {
                    direction: "overlay",
                    style: { minWidth: "320px" },
                  },
                  children: (0, e.jsx)("img", {
                    className: (0, L.A)(h().AppCapsuleImage, h().CapsuleShadow),
                    src: (0, m.b0)(q, "small_capsule"),
                    alt: J.name,
                  }),
                }),
                !k &&
                  !J.is_free &&
                  (0, e.jsxs)("span", {
                    className: (0, L.A)(
                      h().AppCapsulePrice,
                      z?.discount_pct ? P().Discounted : "",
                    ),
                    children: [
                      !!(z?.discount_pct && ne) &&
                        (0, e.jsx)("div", {
                          className: P().DiscountIconCtn,
                          children: (0, e.jsx)(G.XH_, {}),
                        }),
                      !!(z?.discount_pct && !ne) &&
                        (0, e.jsx)("span", {
                          className: P().StoreSaleDiscountBox,
                          children: `-${z?.discount_pct}%`,
                        }),
                      z &&
                        z.final_price_in_cents &&
                        (0, e.jsx)("span", {
                          className: P().StoreSalePriceBox,
                          children: z.formatted_final_price,
                        }),
                    ],
                  }),
              ],
            }),
          });
        }
      },
      95414: (F, U, t) => {
        "use strict";
        t.d(U, { j: () => j, u: () => A });
        var e = t(7850),
          u = t(90626),
          I = t(24660),
          d = t(83482),
          R = t(72865),
          s = t(77200),
          O = t(53113),
          x = t(68094),
          y = t(72609),
          m = t(3166);
        function p(_) {
          if (_) {
            if ("appid" in _) return "app";
            if ("bundleid" in _) return "bundle";
            if ("packageid" in _) return "sub";
          }
        }
        function j(_) {
          const {
              id: N,
              hoverClassName: n,
              fnGetIDOverride: C,
              fnHoverState: c,
              disableScreenshots: V,
              children: b,
            } = _,
            h = u.useRef(null),
            M = u.useCallback(
              (P) => {
                const D = p(N);
                D &&
                  (c && c(!0),
                  window.GameHover &&
                    (h.current &&
                      V &&
                      (h.current.dataset.hoverDisableScreenshots = "true"),
                    window.GameHover(C ? C() : h.current, P, "global_hover", {
                      type: D,
                      id: (0, x.G$)(N).id,
                      v6: 1,
                    })));
              },
              [c, C, V, N],
            ),
            E = u.useCallback(
              (P) => {
                p(N) &&
                  (c && P.relatedTarget && c(!1),
                  window.HideGameHover &&
                    window.HideGameHover(
                      C ? C() : h.current,
                      P,
                      "global_hover",
                    ));
              },
              [N, c, C],
            );
          return (0, e.jsx)("div", {
            ref: h,
            className: n,
            onMouseEnter: M,
            onMouseLeave: E,
            onFocus: M,
            onBlur: E,
            children: b,
          });
        }
        function A(_) {
          const {
              id: N,
              strExtraParams: n,
              fnOnClickOverride: C,
              strOverrideURL: c,
            } = _,
            V = (0, R.n9)(),
            b = (0, s.w)(),
            h = (0, O.NT)(
              c ||
                (N && "creatorid" in N
                  ? (0, d.It)(
                      `${y.TS.STORE_BASE_URL}curator/${((0, x.G$))(N).id}${n ? `?${n}` : ""}`,
                      V,
                      b,
                    )
                  : (0, d.It)(
                      `${y.TS.STORE_BASE_URL}${p(N)}/${((0, x.G$))(N).id}${n ? `?${n}` : ""}`,
                      V,
                      b,
                    )),
            );
          return (0, e.jsx)(j, {
            ..._,
            children: (0, e.jsx)(I.Ii, {
              className: _.className,
              href: C ? void 0 : h,
              target: y.TS.IN_CLIENT || C ? void 0 : "_blank",
              rel: "noopener noreferrer",
              onClick: C,
              children: _.children,
            }),
          });
        }
      },
      64774: (F, U, t) => {
        "use strict";
        t.d(U, { _: () => h, r: () => b });
        var e = t(7850),
          u = t(48156),
          I = t(29522),
          d = t(40358),
          R = t(72865),
          s = t(24179),
          O = t(54528),
          x = t(96362),
          y = t(90626),
          m = t(83482),
          p = t(76532),
          j = t.n(p),
          A = t(85705),
          _ = t(36118),
          N = t(71421),
          n = t(36707),
          C = t(18210),
          c = t(3166),
          V = t(89926);
        function b(P) {
          const { appid: D, className: X, bTextMode: G } = P,
            L = (0, I.$5)(D),
            { data: Z } = (0, d.J$)(L),
            { data: $ } = (0, d.by)(L);
          return (0, e.jsx)(h, {
            appid: D,
            bIsFree: !!Z?.is_free,
            bIsComingSoon: !!$?.is_coming_soon,
            bTextMode: G,
            className: X,
          });
        }
        function h(P) {
          const [D, X] = y.useState(!1),
            G = (0, R.n9)(),
            {
              appid: L,
              bIsFree: Z,
              bIsComingSoon: $,
              className: Ce,
              bTextMode: oe,
            } = P,
            le = (0, I.$5)(L),
            { bIsOwned: Q } = (0, s.ZJ)(le),
            k = (0, O.bB)(L),
            { mutateAsync: se } = (0, x.s)(L, !k, (0, m.L3)(G)),
            { elDialogElement: J, fnShowLogonDialog: q } = (0, V.l)(),
            z = async () => {
              if (!c.iA.logged_in) {
                q();
                return;
              }
              D || (X(!0), await se(), X(!1));
            };
          if (Q || (!$ && Z))
            return Z ? (0, e.jsx)(M, { possibleDemoAppID: L }) : null;
          let ee = null;
          return (
            D && !oe
              ? (ee = (0, e.jsx)(A.k, { size: 18 }))
              : k
                ? k &&
                  (ee = oe ? (0, C.we)("#OnWishlist") : (0, e.jsx)(_.qnF, {}))
                : (ee = oe
                    ? (0, C.we)("#wishlist_add_to_wishlist")
                    : (0, e.jsx)(_.T4m, {})),
            (0, e.jsxs)(e.Fragment, {
              children: [
                (0, e.jsx)(N.he, {
                  toolTipContent: (0, C.we)("#AddToWishlist_ttip"),
                  children: (0, e.jsx)("div", {
                    className: (0, n.A)(j().WishList, Ce),
                    onClick: z,
                    children: ee,
                  }),
                }),
                J,
              ],
            })
          );
        }
        function M(P) {
          const { possibleDemoAppID: D, className: X } = P,
            G = (0, I.$5)(D),
            { data: L } = (0, d.J$)(G);
          return L &&
            (L.type == u.uE.ue || L.type == u.uE.Vi) &&
            L.related_items?.parent_appid
            ? (0, e.jsx)(E, {
                parentAppID: L.related_items?.parent_appid,
                className: X,
              })
            : null;
        }
        function E(P) {
          const { parentAppID: D, className: X } = P,
            G = (0, I.$5)(D),
            { data: L } = (0, d.J$)(G),
            { data: Z } = (0, d.by)(G);
          return !L || !Z
            ? null
            : (0, e.jsx)(h, {
                appid: D,
                bIsComingSoon: !!Z.is_coming_soon,
                bIsFree: !!L.is_free,
                className: X,
              });
        }
      },
      76617: (F, U, t) => {
        "use strict";
        t.d(U, { V: () => x });
        function e(y) {
          return Object.prototype.toString.call(y) === "[object Object]";
        }
        function u(y) {
          if (!e(y)) return !1;
          const m = y.constructor;
          if (typeof m > "u") return !0;
          const p = m.prototype;
          return !(
            !e(p) || !Object.prototype.hasOwnProperty.call(p, "isPrototypeOf")
          );
        }
        function I(...y) {
          return JSON.stringify(y, (m, p) => {
            if (u(p)) {
              const j = {};
              return (
                Object.keys(p)
                  .sort()
                  .forEach((A) => {
                    j[A] = p[A];
                  }),
                j
              );
            }
            return p;
          });
        }
        var d = t(90626),
          R = t(7850);
        const s = (0, d.createContext)({ instances: {}, factories: {} });
        function O(y) {
          const { name: m, fnFactory: p, children: j } = y,
            A = React.useContext(s),
            [_] = useState({}),
            N = useMemo(
              () => ({
                instances: _,
                factories: { ...A.factories, [m]: p },
                parent: A,
              }),
              [_, m, A],
            );
          return jsx(s.Provider, { value: N, children: j });
        }
        function x(y, m) {
          const p = (0, d.useContext)(s),
            j = typeof y == "string" ? y : I(...y);
          let A = p;
          for (; A; ) {
            if (j in A.instances) return A.instances[j];
            if (j in A.factories) break;
            A = A.parent;
          }
          const N = (A?.factories[j] ?? m)();
          return ((A ?? p).instances[j] = N), N;
        }
      },
      22673: (F, U, t) => {
        "use strict";
        t.d(U, { u: () => R, c: () => d });
        var e = t(37901);
        const u = {};
        (u.arabic = () => t.e(98135).then(t.t.bind(t, 98135, 19))),
          (u.brazilian = () => t.e(32427).then(t.t.bind(t, 32427, 19))),
          (u.bulgarian = () => t.e(56708).then(t.t.bind(t, 56708, 19))),
          (u.czech = () => t.e(18914).then(t.t.bind(t, 18914, 19))),
          (u.danish = () => t.e(15670).then(t.t.bind(t, 15670, 19))),
          (u.dutch = () => t.e(93067).then(t.t.bind(t, 93067, 19))),
          (u.english = () => t.e(52777).then(t.t.bind(t, 52777, 19))),
          (u.finnish = () => t.e(73934).then(t.t.bind(t, 73934, 19))),
          (u.french = () => t.e(31055).then(t.t.bind(t, 31055, 19))),
          (u.german = () => t.e(1509).then(t.t.bind(t, 1509, 19))),
          (u.greek = () => t.e(89553).then(t.t.bind(t, 11934, 19))),
          (u.hungarian = () => t.e(92760).then(t.t.bind(t, 92760, 19))),
          (u.indonesian = () => t.e(41411).then(t.t.bind(t, 41411, 19))),
          (u.italian = () => t.e(3905).then(t.t.bind(t, 3905, 19))),
          (u.japanese = () => t.e(15816).then(t.t.bind(t, 15816, 19))),
          (u.koreana = () => t.e(40202).then(t.t.bind(t, 40202, 19))),
          (u.latam = () => t.e(61090).then(t.t.bind(t, 61090, 19))),
          (u.malay = () => t.e(94841).then(t.t.bind(t, 94841, 19))),
          (u.norwegian = () => t.e(71693).then(t.t.bind(t, 71693, 19))),
          (u.polish = () => t.e(57258).then(t.t.bind(t, 57258, 19))),
          (u.portuguese = () => t.e(49994).then(t.t.bind(t, 49994, 19))),
          (u.romanian = () => t.e(61540).then(t.t.bind(t, 61540, 19))),
          (u.russian = () => t.e(13956).then(t.t.bind(t, 13956, 19))),
          (u.sc_schinese = () => t.e(58430).then(t.t.bind(t, 58430, 19))),
          (u.schinese = () => t.e(56983).then(t.t.bind(t, 56983, 19))),
          (u.spanish = () => t.e(80657).then(t.t.bind(t, 80657, 19))),
          (u.swedish = () => t.e(91712).then(t.t.bind(t, 91712, 19))),
          (u.tchinese = () => t.e(27228).then(t.t.bind(t, 27228, 19))),
          (u.thai = () => t.e(57001).then(t.t.bind(t, 57001, 19))),
          (u.turkish = () => t.e(17681).then(t.t.bind(t, 17681, 19))),
          (u.ukrainian = () => t.e(93275).then(t.t.bind(t, 93275, 19))),
          (u.vietnamese = () => t.e(23352).then(t.t.bind(t, 23352, 19)));
        async function I(s) {
          if (u[s]) return u[s]();
        }
        const d = (0, e.l)(I);
        function R(s, O, x, y, ...m) {
          const p = `${O}${x ? "_second" : "_third"}`;
          if (s.HasKey(p))
            return x ? s.LocalizeReact(p, ...m) : s.LocalizeReact(p, y, ...m);
          if (s.HasKey(O)) return s.LocalizeReact(O, ...m);
        }
      },
      7582: (F, U, t) => {
        "use strict";
        t.d(U, { HD: () => x, f1: () => _, s4: () => N, sB: () => A });
        var e = t(19367),
          u = t.n(e),
          I = t(90626),
          d = t(59432),
          R = t(47689),
          s = t(77291);
        class O {
          bIncludeFeaturedAsGameSource = !0;
          get nOverrideDateNow() {
            return (0, d.mm)();
          }
          set nOverrideDateNow(C) {
            (0, d.ai)(C);
          }
          get bRequireAllEventsLoadedInTimeBlock() {
            return !1;
          }
          get bIncludeCurators() {
            return !0;
          }
          GetTimeNowWithOverride() {
            return (0, d.Gw)();
          }
          GetTimeNowWithOverrideAsDate() {
            return (0, d.Lk)();
          }
          BHasTimeOverride() {
            return !!(0, d.mm)();
          }
          ParseDevOverrides(C) {
            if (!C || C.length == 0) return;
            new URLSearchParams(C[0] == "?" ? C.substring(1) : C).has("t");
          }
        }
        const x = new O();
        (0, s.V)("g_EventCalendarDevFeatures", x);
        function y(n = 1) {
          const [C, c] = React.useState(() => j()),
            V = useCancelTokenSource("useTimeNowWithOverride"),
            b = React.useCallback(() => {
              V.token.reason || c(j());
            }, []);
          return (
            React.useEffect(() => {
              const h = 1e3 * n,
                M = Date.now() % h,
                E = h - M,
                P = window.setTimeout(b, E);
              return () => {
                window.clearTimeout(P);
              };
            }, [C, n, b]),
            C
          );
        }
        const p = Math.floor(new Date().getTime() / 1e3);
        function j() {
          const n = Math.floor(Date.now() / 1e3);
          return x.nOverrideDateNow ? x.nOverrideDateNow + (n - p) : n;
        }
        function A() {
          return x.nOverrideDateNow ?? p;
        }
        function _() {
          return I.useMemo(() => A(), []);
        }
        function N() {
          return I.useMemo(() => x.GetTimeNowWithOverrideAsDate(), []);
        }
      },
      35098: (F, U, t) => {
        "use strict";
        t.d(U, { DW: () => j, js: () => m, mK: () => C, tb: () => n });
        var e = t(90626),
          u = t(80902),
          I = t(54806),
          d = t(99412),
          R = t(68312),
          s = t(15369),
          O = t(5858),
          x = t(76559),
          y = t(15860);
        function m(h) {
          const M = (0, R.KV)(),
            E = e.useContext(N);
          return (0, u.I)(C(E, M, h));
        }
        function p(h) {
          const M = React.useRef(void 0),
            E = m(h);
          return E.data
            ? E
            : (M.current ||
                (M.current = new CPersonaStateImpl(
                  typeof h == "string"
                    ? new CSteamID(h)
                    : CSteamID.InitFromAccountID(h),
                )),
              { ...E, data: M.current });
        }
        function j(h) {
          const M = (0, R.KV)(),
            E = e.useContext(N);
          return (0, I.E)({ queries: h.map((P) => C(E, M, P)) });
        }
        function A(h) {
          return ReactQueryClient.getQueryData(["PlayerSummary", h]);
        }
        function _(h) {
          const { loadPersonaState: M, children: E } = h,
            P = React.useMemo(() => ({ loadPersonaState: M }), [M]);
          return React.createElement(N.Provider, { value: P }, E);
        }
        const N = e.createContext({
          loadPersonaState: async (h, M) => {
            if (h == null) return null;
            const E = await V(M).load(
              x.b.InitFromAccountID(h).ConvertTo64BitString(),
            );
            return b(x.b.InitFromAccountID(h), E);
          },
        });
        function n() {
          return e.useContext(N);
        }
        function C(h, M, E) {
          const P = typeof E == "string" ? new x.b(E).GetAccountID() : E;
          return {
            queryKey: ["PlayerSummary", P],
            queryFn: () => h.loadPersonaState(P, M),
            enabled: !!P,
          };
        }
        let c;
        function V(h) {
          return (c ??= (0, y.c)(h));
        }
        function b(h, M) {
          let E = new O.Z(h);
          const P = M?.public_data,
            D = M?.private_data;
          return (
            (E.m_bInitialized = !!M),
            (E.m_ePersonaState = D?.persona_state ?? d.cU3),
            (E.m_strAvatarHash = P?.sha_digest_avatar
              ? (0, s.Kx)(P.sha_digest_avatar)
              : O.dV),
            (E.m_strPlayerName = P?.persona_name ?? h.ConvertTo64BitString()),
            (E.m_strAccountName = D?.account_name),
            D?.persona_state_flags &&
              (E.m_unPersonaStateFlags = D?.persona_state_flags),
            D?.game_id && (E.m_gameid = D?.game_id),
            D?.game_server_ip_address &&
              (E.m_unGameServerIP = D?.game_server_ip_address),
            D?.lobby_steam_id && (E.m_game_lobby_id = D?.lobby_steam_id),
            D?.game_extra_info && (E.m_strGameExtraInfo = D?.game_extra_info),
            P?.profile_url && (E.m_strProfileURL = P.profile_url),
            E
          );
        }
      },
      86390: (F, U, t) => {
        "use strict";
        t.d(U, { Cg: () => A, pZ: () => N, vg: () => _ });
        var e = t(7850),
          u = t(90626),
          I = t(88003),
          d = t(18210),
          R = t(3166),
          s = t(87242),
          O = t(74974),
          x = t(6740),
          y = t(62179),
          m = t(3685),
          p = t(96538);
        function j(C) {
          return (0, e.jsx)(I.x_, {
            onEscKeypress: C.closeModal,
            bDisableBackgroundDismiss: !0,
            children: (0, e.jsx)(n, {
              redirectURL: C.redirectURL,
              guestOption: C.guestOption,
            }),
          });
        }
        function A(C) {
          const { redirectURL: c = window.location.href } = C;
          return (0, e.jsx)(p.EN, {
            active: !0,
            children: (0, e.jsx)(j, { redirectURL: c }),
          });
        }
        function _() {
          (0, I.pg)(
            (0, e.jsx)(j, {
              ownerWin: window,
              redirectURL: window.location.href,
            }),
            window,
            { strTitle: (0, d.we)("#Login_SignInTitle") },
          );
        }
        function N(C, c) {
          (0, I.pg)(
            (0, e.jsx)(j, { ownerWin: window, redirectURL: C, guestOption: c }),
            window,
            { strTitle: (0, d.we)("#Login_SignInTitle") },
          );
        }
        function n(C) {
          const { redirectURL: c, guestOption: V } = C,
            [b] = (0, u.useState)(
              new y.x(
                new m.D(R.TS.WEBAPI_BASE_URL),
              ).GetAnonymousServiceTransport(),
            ),
            [h, M] = (0, u.useState)(!1),
            E = (P) => {
              P == s.wI.k_PrimaryDomainFail ? M(!0) : window.location.assign(c);
            };
          return (0, e.jsx)("div", {
            children: h
              ? (0, e.jsx)(O.Fn, {})
              : (0, e.jsx)(O.YN, {
                  autoFocus: !0,
                  transport: b,
                  platform: x.SS.tS,
                  onComplete: E,
                  redirectUrl: c,
                  theme: "modal",
                  children: V && (0, e.jsx)(O.Mk, { redirectURL: c }),
                }),
          });
        }
      },
      37643: (F, U, t) => {
        "use strict";
        t.r(U), t.d(U, { default: () => Lt });
        var e = t(7850),
          u = t(58732),
          I = t(92757),
          d = t(90626),
          R = t(85415),
          s = t.n(R),
          O = t(24660),
          x = t(19298),
          y = t(95414),
          m = t(76035),
          p = t(98609),
          j = t(82734),
          A = t(3166),
          _ = t(16412),
          N = t(36118),
          n = t(18210),
          C = t(22673),
          c = t(36707),
          V = t(96538),
          b = t(88003),
          h = t(27386),
          M = t(86390),
          E = t(34041),
          P = t(85599),
          D = t(84676),
          X = t(72604),
          G = t(51079),
          L = t(18994),
          Z = t(68538),
          $ = t(77495),
          Ce = t(76559),
          oe = t(90537),
          le = t(95174),
          Q = t(10142),
          k = t(72849),
          se = t(91424),
          J = t(30096),
          q = t(71568),
          z = t(28124),
          ee = t(93285),
          de = t(29522),
          ne = t(40358),
          _e = t(21721);
        const ce = {
          include_basic_info: !0,
          include_assets_without_overrides: !0,
        };
        function he(o) {
          const {
              category: a,
              fnShowPicker: i,
              rgPrevLaborOfLoveWinners: l,
            } = o,
            [r, v] = d.useState("");
          if (!(0, m.jT)(a.voteid).data)
            return (0, e.jsx)(P.t, {
              size: "medium",
              position: "center",
              msDelayAppear: 200,
            });
          let S = (0, n.we)("#Steamawards_Nominate_ThisYear");
          return (
            a.flag == E.Xs.bV &&
              (S = (0, n.we)("#Steamawards_Nominate_PastYear")),
            (0, e.jsxs)("div", {
              className: s().NominationPickerCtn,
              children: [
                (0, e.jsxs)("div", {
                  className: s().TopRow,
                  children: [
                    (0, e.jsx)("div", {
                      className: s().TopBarText,
                      children: S,
                    }),
                    (0, e.jsx)("div", {
                      className: s().SearchBarCtn,
                      children: (0, e.jsx)(_.pd, {
                        focusOnMount: !0,
                        onChange: (T) =>
                          v(T.currentTarget.value.toLocaleLowerCase()),
                        value: r,
                        className: s().SearchBar,
                        placeholder: (0, n.we)("#Steamawards_Nominate_Search"),
                        bShowClearAction: !0,
                      }),
                    }),
                    (0, e.jsx)(O.fu, {
                      className: s().CloseButton,
                      onClick: () => i(!1),
                      children: (0, n.we)("#Button_Close"),
                    }),
                  ],
                }),
                r.trim().length > 0
                  ? (0, e.jsx)(Te, {
                      strSearch: r,
                      category: a,
                      rgPrevLaborOfLoveWinners: l,
                    })
                  : (0, e.jsx)(fe, { category: a, fnShowPicker: i }),
                (0, e.jsx)("div", {
                  className: s().BottomRow,
                  children: (0, e.jsx)(te, {
                    unAppID: m.Fq,
                    eSteamAwardCategoryID: a.voteid,
                    eNominatonSource: E.Ji.HW,
                    fnShowPicker: i,
                  }),
                }),
              ],
            })
          );
        }
        function fe(o) {
          const { category: a, fnShowPicker: i } = o,
            l = (0, m.jT)(a.voteid),
            r = (0, m.cO)(),
            v = (0, A.Qn)(),
            f = d.useMemo(() => {
              let S = [];
              return l.data.played_app
                .map((w) => ({ appID: w.appid, nPlaytime: w.playtime }))
                .filter((w) =>
                  r.data?.some(
                    (K) => K.appid == w.appID && K.category_id != a.voteid,
                  )
                    ? (S.push(w), !1)
                    : !0,
                )
                .concat(S);
            }, [a.voteid, r.data, l.data.played_app]);
          return (0, e.jsxs)("div", {
            className: s().CarouselView,
            children: [
              l.data?.played_app?.length
                ? (0, e.jsxs)("div", {
                    className: (0, c.A)(s().RecommendationRow, s().Games),
                    children: [
                      (0, e.jsx)("div", {
                        className: s().RecommendationRowTitle,
                        children: (0, n.we)(
                          "#Steamawards_Nominate_GamesYouPlayed",
                        ),
                      }),
                      (0, e.jsx)(ye, {
                        eSteamAwardCategoryID: a.voteid,
                        eNominatonSource: E.Ji.MU,
                        rgGameCarouselItems: f,
                      }),
                    ],
                  })
                : (0, e.jsx)(De, {
                    eSteamAwardCategoryID: a.voteid,
                    fnShowPicker: i,
                  }),
              !v &&
                l.data?.suggested_events?.length > 0 &&
                (0, e.jsxs)("div", {
                  className: (0, c.A)(s().RecommendationRow, s().Events),
                  children: [
                    (0, e.jsx)("div", {
                      className: s().RecommendationRowTitle,
                      children: (0, n.we)("#Steamawards_Nominate_Events"),
                    }),
                    (0, e.jsx)(we, { rgEvents: l.data.suggested_events }),
                  ],
                }),
              (0, e.jsxs)("div", {
                className: (0, c.A)(s().RecommendationRow, s().Games),
                children: [
                  (0, e.jsx)("div", {
                    className: s().RecommendationRowTitle,
                    children: (0, n.we)("#Steamawards_Nominate_Recommended"),
                  }),
                  l.data?.suggested_apps &&
                    (0, e.jsx)(ye, {
                      eSteamAwardCategoryID: a.voteid,
                      eNominatonSource: E.Ji.qP,
                      rgGameCarouselItems: l.data.suggested_apps.map((S) => ({
                        appID: S.appid,
                      })),
                    }),
                ],
              }),
            ],
          });
        }
        function De(o) {
          const { eSteamAwardCategoryID: a, fnShowPicker: i } = o;
          return (0, e.jsxs)("div", {
            className: (0, c.A)(s().RecommendationRow, s().NoEligibleGamesCtn),
            children: [
              (0, e.jsx)("div", {
                className: s().RecommendationRowTitle,
                children: (0, n.we)("#Steamawards_Nominate_NoEligibleGames"),
              }),
              (0, e.jsx)("div", {
                className: s().RecommendationRowSubtitle,
                children: (0, n.we)(
                  "#Steamawards_Nominate_NoEligibleGames_cont",
                ),
              }),
              (0, e.jsx)(te, {
                unAppID: m.Fq,
                eSteamAwardCategoryID: a,
                eNominatonSource: E.Ji.HW,
                fnShowPicker: i,
              }),
            ],
          });
        }
        function Te(o) {
          const { strSearch: a, category: i, rgPrevLaborOfLoveWinners: l } = o,
            r = (0, m.lE)(a, i, l),
            v = d.useRef(void 0),
            f = (0, A.Qn)();
          return (
            d.useEffect(() => {
              v?.current && f && v.current.scrollIntoView();
            }, [r, f]),
            (0, e.jsx)("div", {
              className: s().SearchContainer,
              ref: v,
              children: r.isLoading
                ? (0, e.jsx)(P.t, {
                    className: s().SearchThrobber,
                    size: "large",
                    position: "center",
                    msDelayAppear: 200,
                  })
                : (0, e.jsx)(e.Fragment, {
                    children:
                      r.data?.length > 0
                        ? (0, e.jsx)(x.Z, {
                            className: s().SearchResultsContainer,
                            children: r.data.map((S) =>
                              (0, e.jsx)(
                                Oe,
                                {
                                  eSteamAwardCategoryID: i.voteid,
                                  eNominatonSource: E.Ji.RU,
                                  appSuggestion: S,
                                },
                                S.id,
                              ),
                            ),
                          })
                        : (0, e.jsx)("div", {
                            className: s().NoResultsCtn,
                            children: (0, n.we)(
                              "#Steamawards_Search_NoResults",
                            ),
                          }),
                  }),
            })
          );
        }
        function Oe(o) {
          const {
              appSuggestion: a,
              eSteamAwardCategoryID: i,
              eNominatonSource: l,
            } = o,
            r = parseInt(a.id),
            v = (0, de.$5)(r);
          return (0, e.jsxs)(x.Z, {
            className: s().SearchResultApp,
            children: [
              (0, e.jsx)(y.u, {
                id: v,
                children: (0, e.jsx)("img", { src: a.small_cap }),
              }),
              (0, e.jsx)(te, {
                eSteamAwardCategoryID: i,
                eNominatonSource: l,
                unAppID: r,
              }),
            ],
          });
        }
        function ge(o) {
          let a = 1;
          return (
            o.innerWidth >= 1080
              ? (a = 4)
              : o.innerWidth >= 800
                ? (a = 3)
                : o.innerWidth >= 600 && (a = 2),
            a
          );
        }
        function ye(o) {
          const {
              rgGameCarouselItems: a,
              eSteamAwardCategoryID: i,
              eNominatonSource: l,
            } = o,
            r = (0, D.zX)(
              a?.map((H) => H.appID),
              ce,
            ),
            f = (0, q.R7)()?.ownerWindow || window,
            [S, T] = d.useState(() => ge(f)),
            w = (0, A.Qn)(),
            W = d.useCallback(
              (H) => {
                T(ge(f));
              },
              [f],
            ),
            K = (0, J.wY)(W);
          if (r == D.Sq) return null;
          const Y = a.filter((H) => Q.A.Get().BHasApp(H.appID));
          return (0, e.jsx)("div", {
            ref: K,
            className: s().SuggestionCarousel,
            children: (0, e.jsx)(G.Ay, {
              feature: "steamawards_nominate",
              children: (0, e.jsx)(Z.F, {
                gap: 12,
                hideArrows: !(0, L.rp)(),
                visibleElements: S,
                useTestScrollbar: !0,
                bLazyRenderChildren: !0,
                hidePips: w,
                screenIsWide: (0, L.rp)(),
                children: Y.map((H) =>
                  (0, e.jsx)(
                    Ie,
                    {
                      eNominatonSource: l,
                      eSteamAwardCategoryID: i,
                      appID: H.appID,
                      nPlaytime: H.nPlaytime,
                    },
                    H.appID,
                  ),
                ),
              }),
            }),
          });
        }
        function Ie(o) {
          const {
              appID: a,
              eSteamAwardCategoryID: i,
              eNominatonSource: l,
              nPlaytime: r,
            } = o,
            v = (0, de.$5)(a),
            { data: f } = (0, ne.J$)(v),
            { data: S } = (0, ne.gy)(v);
          if (!f) return null;
          let T = null;
          return (
            r && (T = (r / 60).toFixed(1)),
            (0, e.jsxs)("div", {
              className: s().GameCarouselItemCtn,
              children: [
                T &&
                  (0, e.jsx)("div", {
                    className: s().PlaytimeIndicator,
                    children: (0, n.we)("#Steamawards_Playtime_Hours", T),
                  }),
                (0, e.jsx)(y.u, {
                  id: v,
                  children: (0, e.jsx)("img", {
                    className: z.AppCapsuleImage,
                    src: (0, _e.b0)(S, "small_capsule"),
                    alt: f.name || "",
                  }),
                }),
                (0, e.jsx)(te, {
                  unAppID: a,
                  eNominatonSource: l,
                  eSteamAwardCategoryID: i,
                }),
              ],
            })
          );
        }
        function te(o) {
          const {
              unAppID: a,
              eSteamAwardCategoryID: i,
              eNominatonSource: l,
              fnShowPicker: r,
            } = o,
            v = (0, m.cO)(),
            S = (0, q.R7)()?.ownerWindow || window,
            T = a === m.Fq,
            w = d.useMemo(
              () => v.data?.find((ue) => ue.category_id == i)?.appid === a,
              [i, v.data, a],
            ),
            W = d.useCallback(
              (ae) => {
                let ue = (0, n.we)(
                  "#Steamawards_Nominate_Error_Generic",
                  a,
                  ae ?? "Unknown",
                );
                ae == X.p &&
                  (ue = (0, n.we)("#Steamawards_Nominate_Error_NoMatch", a)),
                  (0, V.pY)(ue, S);
              },
              [S, a],
            ),
            K = d.useCallback(() => {
              a === m.Fq && r && r(!1);
            }, [r, a]),
            Y = (0, m.$d)(a, i, l, W, K);
          let H = (0, n.we)("#Steamawards_Nominate"),
            me = null,
            pe = (ae) => {
              if (w) {
                ae.preventDefault();
                return;
              }
              if ((0, ee.UserEligibleToNominateOrVote)(!1)) Y.mutate();
              else {
                console.log(
                  "EventDisplaySteamAwardNomination: UserEligibleToNominateOrVote failed",
                );
                return;
              }
            };
          return (
            T
              ? ((H = (0, n.we)("#Steamawards_Skip_Btn")),
                (me = (0, e.jsx)(N.MOk, {})))
              : w && (H = (0, n.we)("#Steamawards_Nominated")),
            (0, e.jsxs)(_.$n, {
              onClick: pe,
              className: (0, c.A)(s().NominateGameButton, w && s().Nominated),
              children: [me, H],
            })
          );
        }
        function we(o) {
          const { rgEvents: a } = o,
            [i, l] = d.useState(!1),
            v = (0, q.R7)()?.ownerWindow || window,
            [f, S] = d.useState(4),
            T = d.useCallback(
              (W) => {
                let K = 1;
                v.innerWidth >= 1080
                  ? (K = 4)
                  : v.innerWidth >= 920
                    ? (K = 3)
                    : v.innerWidth >= 600 && (K = 2),
                  S(K);
              },
              [v],
            ),
            w = (0, J.wY)(T);
          return (
            d.useEffect(() => {
              if (i) return;
              (async () => {
                a.forEach((Y) => {
                  $.O3.QueueLoadPartnerEvent(Y.clanid, Y.event_gid, !1);
                });
                const K = a.map((Y) =>
                  $.O3.LoadPartnerEventFromClanEventGIDAndClanSteamID(
                    Ce.b.InitFromClanID(Y.clanid),
                    Y.event_gid,
                    0,
                    !1,
                  ),
                );
                await Promise.all(K), l(!0);
              })();
            }, [a, i]),
            a.length
              ? i
                ? (0, e.jsx)("div", {
                    ref: w,
                    className: s().EventCarousel,
                    children: (0, e.jsx)(G.Ay, {
                      feature: "steamawards_event",
                      children: (0, e.jsx)(Z.F, {
                        gap: 12,
                        hideArrows: !(0, L.rp)(),
                        visibleElements: f,
                        useTestScrollbar: !0,
                        bLazyRenderChildren: !0,
                        className: s().GameCarousel,
                        screenIsWide: (0, L.rp)(),
                        children: a.map((W) =>
                          (0, e.jsx)(
                            Me,
                            { gidEvent: W.event_gid },
                            W.event_gid,
                          ),
                        ),
                      }),
                    }),
                  })
                : (0, e.jsx)(P.t, {
                    className: s().EventCarousel,
                    size: "xlarge",
                    position: "center",
                  })
              : null
          );
        }
        function Me(o) {
          const { gidEvent: a } = o,
            i = $.O3.GetClanEventModel(a),
            l = (0, oe.Y)();
          if (!i) return null;
          const r = (v) => {
            l.RecordEventRead(i, k.Tc.HX),
              (0, se.Y)(i, j.uX(v)),
              v.stopPropagation(),
              v.preventDefault();
          };
          return (0, e.jsx)(le.u, {
            event: i,
            bShowAssociatedApp: !0,
            bHidePrices: !0,
            onClick: r,
          });
        }
        var Fe = t(179),
          We = t(35098),
          xe = t(19367),
          Ee = t.n(xe),
          Ue = t(7582);
        function Le(o) {
          const { steamID: a, nYear: i } = o,
            [l] = (0, Fe.QD)("k", null),
            r = !!((a && a != p.iA.steamid) || l),
            v = Ee()("2025-12-01T10:00:00-08:00").unix(),
            f = Ue.HD.GetTimeNowWithOverride(),
            S = !r && f <= v;
          return (
            d.useEffect(() => {
              $.O3.Init();
            }, []),
            (0, e.jsx)(G.Ay, {
              method: "nominations",
              children: (0, e.jsxs)(x.Z, {
                className: s().NominationsPageContent,
                children: [
                  r
                    ? (0, e.jsx)(Xe, { bEnableNominating: S, steamid: a })
                    : (0, e.jsx)(Ye, { year: i }),
                  !r &&
                    (0, e.jsxs)("div", {
                      className: (0, c.A)(
                        s().SectionContent,
                        s().ProgressAndShareCtn,
                      ),
                      children: [
                        (0, e.jsx)(Ze, {}),
                        (0, e.jsx)(rt, { nYear: i }),
                      ],
                    }),
                  (0, e.jsx)(ke, { bEnableNominating: S }),
                  (0, e.jsxs)("div", {
                    className: s().BackgroundDark,
                    children: [!r && (0, e.jsx)(qe, {}), (0, e.jsx)(nt, {})],
                  }),
                ],
              }),
            })
          );
        }
        function Ye(o) {
          return (0, e.jsx)("div", {
            className: s().NominationsHeaderCtn,
            children: (0, e.jsx)("div", {
              className: s().FAQHeaderArea,
              children: (0, e.jsxs)("div", {
                className: s().FAQHeaderCtn,
                children: [
                  (0, e.jsx)("div", {
                    className: s().FAQSaletitle,
                    children: (0, n.PP)(
                      "#Steamawards_Title",
                      (0, e.jsx)("br", {}),
                      (0, e.jsx)("br", {}),
                    ),
                  }),
                  (0, e.jsx)("div", {
                    className: s().FAQComingsoon,
                    children: (0, n.we)("#Steamawards_NominateNow"),
                  }),
                  (0, e.jsx)("div", {
                    className: s().FAQComingsoon,
                    children: (0, n.we)("#Steamawards_LevelUpNow", o.year),
                  }),
                  (0, e.jsx)("div", {
                    className: s().FAQComingsoon,
                    children: (0, n.we)("#Steamawards_VoteWinter"),
                  }),
                  (0, e.jsx)("div", {
                    className: s().FAQComingsoon,
                    children: (0, n.we)("#Steamawards_WinnersAnnounced"),
                  }),
                ],
              }),
            }),
          });
        }
        function Xe(o) {
          const { steamid: a, bEnableNominating: i } = o,
            l = (0, We.js)(a);
          return (0, e.jsx)("div", {
            className: s().NominationsHeaderCtn,
            children: (0, e.jsxs)("div", {
              className: (0, c.A)(s().FAQHeaderArea, s().FriendsHeader),
              children: [
                (0, e.jsxs)("div", {
                  className: s().FriendsHeaderCtn,
                  children: [
                    (0, e.jsx)("img", { src: l.data?.avatar_url_full }),
                    (0, e.jsxs)("div", {
                      className: s().FriendsTitleCtn,
                      children: [
                        (0, e.jsx)("div", {
                          className: (0, c.A)(s().FriendsTitle, s().Gold),
                          children: (0, n.we)("#Steamawards_TheSteamAwards"),
                        }),
                        (0, e.jsx)("div", {
                          className: s().FriendsTitle,
                          children: (0, n.we)(
                            "#Steamawards_FriendsNominations",
                            l.data?.m_strPlayerName,
                          ),
                        }),
                      ],
                    }),
                  ],
                }),
                i &&
                  (0, e.jsx)("div", {
                    className: s().HeaderButtonCtn,
                    children: (0, e.jsx)("a", {
                      href: `${A.TS.STORE_BASE_URL}steamawards/nominations`,
                      className: (0, c.A)(s().NominateGameButton, s().White),
                      children: (0, n.we)(
                        "#Steamawards_MakeYourOwnNominations_Btn",
                      ),
                    }),
                  }),
              ],
            }),
          });
        }
        function Ze(o) {
          const a = (0, m.cO)(),
            i = (0, m.Jo)(m.Ri);
          if (!i.data?.votes) return null;
          const l = !a.data || a.data.length == 0 ? "0" : "" + a.data.length;
          return (0, e.jsx)(x.Z, {
            className: (0, c.A)(s().NominationProgressCtn),
            children: (0, e.jsx)("div", {
              className: s().ProgressTitle,
              children: (0, n.PP)(
                "#Steamawards_TotalNominations",
                l,
                i.data?.votes?.length,
              ),
            }),
          });
        }
        function ke(o) {
          const { bEnableNominating: a } = o,
            i = (0, m.Jo)(m.Ri);
          if (!i.data) return null;
          const l = i.data.votes.map((r) =>
            (0, e.jsx)(
              Je,
              {
                bEnableNominating: a,
                category: r,
                rgPrevLaborOfLoveWinners: i.data.labor_of_love_winners,
              },
              r.voteid,
            ),
          );
          return (0, e.jsx)(x.Z, {
            className: (0, c.A)(s().SectionContent, s().SteamAwardCategories),
            children: l,
          });
        }
        function Je(o) {
          const {
              category: a,
              bEnableNominating: i,
              rgPrevLaborOfLoveWinners: l,
            } = o,
            { currentNomination: r } = (0, m.Vz)(a.voteid),
            [v, f] = d.useState(!1),
            S = a.internal_name,
            T =
              A.TS.BASE_URL_STORE_CDN_ASSETS +
              "promo/steamawards2024/backgrounds/" +
              S +
              ".jpg?v=3";
          return (0, e.jsxs)(x.Z, {
            className: (0, c.A)(
              s().SteamAwardCategory,
              r && s().Nominated,
              v && s().PickerOpen,
            ),
            children: [
              (0, e.jsx)("div", {
                className: (0, c.A)(s().SteamAwardCategoryBackground),
                style: { backgroundImage: `url( ${T} )` },
              }),
              (0, e.jsx)("div", {
                className: (0, c.A)(s().SteamAwardCategoryBlurryBackground),
                style: { backgroundImage: `url( ${T} )` },
              }),
              (0, e.jsxs)("div", {
                className: s().CategoryRow,
                children: [
                  (0, e.jsxs)("div", {
                    className: s().LeftColumn,
                    children: [
                      (0, e.jsxs)("div", {
                        className: s().CategoryTitleRow,
                        children: [
                          i &&
                            (0, e.jsx)("div", {
                              className: s().Checkbox,
                              children:
                                r &&
                                (0, e.jsx)(N.X4B, {
                                  color: "#ffffff",
                                  highlightColor: "#ffffff",
                                }),
                            }),
                          (0, e.jsx)("div", {
                            className: s().CategoryTitle,
                            children: a.localization.title_award,
                          }),
                        ],
                      }),
                      (0, e.jsx)("div", {
                        className: s().CategoryDescription,
                        children: a.localization.award_description,
                      }),
                    ],
                  }),
                  (0, e.jsxs)("div", {
                    className: (0, c.A)(s().RightColumn, v && s().PickerOpen),
                    children: [
                      (0, e.jsx)("div", {
                        className: s().CapsuleBlurryContainer,
                        children: r
                          ? (0, e.jsx)(be, { nomination: r, bBlurry: !0 })
                          : (0, e.jsx)(Ge, {}),
                      }),
                      (0, e.jsx)("div", {
                        className: s().CapsuleContainer,
                        children: r
                          ? (0, e.jsx)(be, { nomination: r, bBlurry: !1 })
                          : (0, e.jsx)(Ge, {}),
                      }),
                      i &&
                        (0, e.jsx)($e, {
                          fnShowPicker: f,
                          has_nomination: !!r,
                        }),
                    ],
                  }),
                ],
              }),
              v &&
                (0, e.jsx)(he, {
                  fnShowPicker: f,
                  category: a,
                  rgPrevLaborOfLoveWinners: l,
                }),
            ],
          });
        }
        function be(o) {
          const { nomination: a, bBlurry: i } = o,
            l = (0, de.$5)(a.appid),
            { data: r } = (0, ne.J$)(l),
            { data: v } = (0, ne.gy)(l);
          return r
            ? i
              ? (0, e.jsx)("img", { src: (0, _e.b0)(v, "header"), alt: r.name })
              : (0, e.jsx)(y.u, {
                  className: s().NominatedGameCapsule,
                  id: l,
                  children: (0, e.jsx)("img", {
                    src: (0, _e.b0)(v, "header"),
                    alt: r.name,
                  }),
                })
            : null;
        }
        function Ge() {
          return (0, e.jsx)("div", { className: s().NominatedGameCapsule });
        }
        function $e(o) {
          const { has_nomination: a, fnShowPicker: i } = o;
          let l = (0, n.we)("#Steamawards_Nominate_Btn"),
            r = s().ActionNominate,
            v = () => i(!0);
          return (
            p.iA.logged_in
              ? a &&
                ((l = (0, n.we)("#Steamawards_Edit_Btn")), (r = s().ActionEdit))
              : ((l = (0, n.we)("#Steamawards_Login_Btn")),
                (r = s().ActionLogin),
                (v = () => (0, M.vg)())),
            (0, e.jsx)("div", {
              className: (0, c.A)(s().NominateBtnCtn, r),
              children: (0, e.jsx)(_.$n, {
                onClick: v,
                className: (0, c.A)(s().NominateButton),
                children: l,
              }),
            })
          );
        }
        function qe() {
          const o = (0, m.ed)(h.GPz.Mt);
          let a = 0;
          const i = o.data?.quests?.map(
            (r) => (
              r.completed && a++,
              (0, e.jsx)(
                st,
                { eStoreQuestID: r.questid, completed: r.completed },
                r.questid,
              )
            ),
          );
          let l = [];
          for (let r = 1; r < 5; r++)
            l.push((0, e.jsx)(et, { nBadgeLevel: r, bCompleted: a >= r }, r));
          return (0, e.jsxs)("div", {
            className: (0, c.A)(s().BadgeSectionCtn, s().SectionContent),
            children: [
              p.iA.logged_in &&
                (0, e.jsxs)(e.Fragment, {
                  children: [
                    (0, e.jsx)("div", {
                      className: s().BadgeSectionTitle,
                      children: (0, n.we)("#Steamawards_Badge_SectionTitle"),
                    }),
                    (0, e.jsx)("div", {
                      className: s().BadgeTasksCtn,
                      children: i,
                    }),
                  ],
                }),
              (0, e.jsxs)("div", {
                className: s().BadgeStatusCtn,
                children: [
                  (0, e.jsx)("div", {
                    className: s().BadgeStatusTitle,
                    children: (0, n.we)("#Steamawards_Badge_BadgeTitle"),
                  }),
                  (0, e.jsx)("div", {
                    className: s().BadgeStatusDesc,
                    children: (0, n.we)("#Steamawards_Badge_BadgeDesc"),
                  }),
                  (0, e.jsx)("div", {
                    className: s().BadgeImageRow,
                    children: l,
                  }),
                ],
              }),
            ],
          });
        }
        function et(o) {
          const { nBadgeLevel: a, bCompleted: i } = o;
          return (0, e.jsxs)("div", {
            className: (0, c.A)(s().BadgeItem, i && s().Active),
            children: [
              (0, e.jsx)("div", {
                className: s().BadgeImage,
                children: (0, e.jsx)("img", {
                  src:
                    A.TS.BASE_URL_STORE_CDN_ASSETS +
                    `promo/steamawards2025/level_0${a}.webp`,
                }),
              }),
              (0, e.jsx)("div", {
                className: s().BadgeDesc,
                children: (0, n.we)(`#Steamawards_Badge_BadgeTask${a}`),
              }),
            ],
          });
        }
        function tt(o) {
          switch (o) {
            case 610:
              return (0, n.we)("#Steamawards_Task1");
            case 611:
              return (0, n.we)("#Steamawards_Task2");
            case 612:
              return (0, n.we)("#Steamawards_Task3");
            case 613:
              return (0, n.we)("#Steamawards_Task4");
            default:
              return "Unknown Task";
          }
        }
        function st(o) {
          const { eStoreQuestID: a, completed: i } = o;
          return (0, e.jsxs)("div", {
            className: s().BadgeTask,
            children: [
              (0, e.jsx)("div", {
                className: s().Checkbox,
                children: i ? (0, e.jsx)(N.Jlk, {}) : null,
              }),
              (0, e.jsx)("div", { className: s().TaskTitle, children: tt(a) }),
            ],
          });
        }
        function nt() {
          const o = A.TS.COMMUNITY_BASE_URL + "my/badges/";
          return (0, e.jsx)("div", {
            className: (0, c.A)(s().NominationsFAQ, s().SectionContent),
            children: (0, e.jsxs)("div", {
              className: s().NominationsFAQCtn,
              children: [
                (0, e.jsxs)("div", {
                  className: s().LeftCol,
                  children: [
                    (0, e.jsx)("h3", {
                      className: s().FaqSectionTitle,
                      children: (0, n.we)("#Steamawards_FAQ_Title_Badges"),
                    }),
                    (0, e.jsxs)("div", {
                      className: s().FaqEntry,
                      children: [
                        (0, e.jsx)("div", {
                          className: s().FAQ_Q,
                          children: (0, n.we)("#Steamawards_FAQ_XP_Q"),
                        }),
                        (0, e.jsx)("div", {
                          className: s().FAQ_A,
                          children: (0, n.we)("#Steamawards_FAQ_XP_A"),
                        }),
                      ],
                    }),
                    (0, e.jsxs)("div", {
                      className: s().FaqEntry,
                      children: [
                        (0, e.jsx)("div", {
                          className: s().FAQ_Q,
                          children: (0, n.we)("#Steamawards_FAQ_BadgesAll_Q"),
                        }),
                        (0, e.jsx)("div", {
                          className: s().FAQ_A,
                          children: (0, n.PP)(
                            "#Steamawards_FAQ_BadgesAll_A_wLink",
                            (0, e.jsx)("a", {
                              href: o,
                              children: (0, n.we)(
                                "#Steamawards_FAQ_BadgesAll_A_YourBadges",
                              ),
                            }),
                          ),
                        }),
                      ],
                    }),
                    (0, e.jsxs)("div", {
                      className: s().FaqEntry,
                      children: [
                        (0, e.jsx)("div", {
                          className: s().FAQ_Q,
                          children: (0, n.we)("#Steamawards_FAQ_ReviewsPrev_Q"),
                        }),
                        (0, e.jsx)("div", {
                          className: s().FAQ_A,
                          children: (0, n.we)("#Steamawards_FAQ_ReviewsPrev_A"),
                        }),
                      ],
                    }),
                    (0, e.jsxs)("div", {
                      className: s().FaqEntry,
                      children: [
                        (0, e.jsx)("div", {
                          className: s().FAQ_Q,
                          children: (0, n.we)(
                            "#Steamawards_FAQ_BadgeSkipping_Q",
                          ),
                        }),
                        (0, e.jsx)("div", {
                          className: s().FAQ_A,
                          children: (0, n.we)(
                            "#Steamawards_FAQ_BadgeSkipping_A1",
                          ),
                        }),
                        (0, e.jsx)("div", {
                          className: s().FAQ_A,
                          children: (0, n.we)(
                            "#Steamawards_FAQ_BadgeSkipping_A2",
                          ),
                        }),
                      ],
                    }),
                  ],
                }),
                (0, e.jsxs)("div", {
                  className: s().RightCol,
                  children: [
                    (0, e.jsx)("h3", {
                      className: s().FaqSectionTitle,
                      children: (0, n.we)("#Steamawards_FAQ_Title_Nominations"),
                    }),
                    (0, e.jsxs)("div", {
                      className: s().FaqEntry,
                      children: [
                        (0, e.jsx)("div", {
                          className: s().FAQ_Q,
                          children: (0, n.we)(
                            "#Steamawards_FAQ_WhoCanNominate_Q",
                          ),
                        }),
                        (0, e.jsx)("div", {
                          className: s().FAQ_A,
                          children: (0, n.we)(
                            "#Steamawards_FAQ_WhoCanNominate_A",
                          ),
                        }),
                      ],
                    }),
                    (0, e.jsxs)("div", {
                      className: s().FaqEntry,
                      children: [
                        (0, e.jsx)("div", {
                          className: s().FAQ_Q,
                          children: (0, n.we)(
                            "#Steamawards_FAQ_HowToNominate_Q",
                          ),
                        }),
                        (0, e.jsx)("div", {
                          className: s().FAQ_A,
                          children: (0, n.we)(
                            "#Steamawards_FAQ_HowToNominate_A",
                          ),
                        }),
                      ],
                    }),
                    (0, e.jsxs)("div", {
                      className: s().FaqEntry,
                      children: [
                        (0, e.jsx)("div", {
                          className: s().FAQ_Q,
                          children: (0, n.we)("#Steamawards_FAQ_WhichGames_Q"),
                        }),
                        (0, e.jsx)("div", {
                          className: s().FAQ_A,
                          children: (0, n.we)("#Steamawards_FAQ_WhichGames_A1"),
                        }),
                        (0, e.jsx)("div", {
                          className: s().FAQ_A,
                          children: (0, n.we)("#Steamawards_FAQ_WhichGames_A2"),
                        }),
                        (0, e.jsx)("div", {
                          className: s().FAQ_A,
                          children: (0, n.we)("#Steamawards_FAQ_WhichGames_A3"),
                        }),
                      ],
                    }),
                    (0, e.jsxs)("div", {
                      className: s().FaqEntry,
                      children: [
                        (0, e.jsx)("div", {
                          className: s().FAQ_Q,
                          children: (0, n.we)(
                            "#Steamawards_FAQ_NominateMultiple_Q",
                          ),
                        }),
                        (0, e.jsx)("div", {
                          className: s().FAQ_A,
                          children: (0, n.we)(
                            "#Steamawards_FAQ_NominateMultiple_A",
                          ),
                        }),
                      ],
                    }),
                    (0, e.jsxs)("div", {
                      className: s().FaqEntry,
                      children: [
                        (0, e.jsx)("div", {
                          className: s().FAQ_Q,
                          children: (0, n.we)(
                            "#Steamawards_FAQ_EditNominations_Q",
                          ),
                        }),
                        (0, e.jsx)("div", {
                          className: s().FAQ_A,
                          children: (0, n.we)(
                            "#Steamawards_FAQ_EditNominations_A",
                          ),
                        }),
                      ],
                    }),
                    (0, e.jsxs)("div", {
                      className: s().FaqEntry,
                      children: [
                        (0, e.jsx)("div", {
                          className: s().FAQ_Q,
                          children: (0, n.we)(
                            "#Steamawards_FAQ_HowShareFriends_Q",
                          ),
                        }),
                        (0, e.jsx)("div", {
                          className: s().FAQ_A,
                          children: (0, n.we)(
                            "#Steamawards_FAQ_HowShareFriends_A",
                          ),
                        }),
                      ],
                    }),
                    (0, e.jsxs)("div", {
                      className: s().FaqEntry,
                      children: [
                        (0, e.jsx)("div", {
                          className: s().FAQ_Q,
                          children: (0, n.we)(
                            "#Steamawards_FAQ_WinnersSelected_Q",
                          ),
                        }),
                        (0, e.jsx)("div", {
                          className: s().FAQ_A,
                          children: (0, n.we)(
                            "#Steamawards_FAQ_WinnersSelected_A",
                          ),
                        }),
                      ],
                    }),
                    (0, e.jsxs)("div", {
                      className: s().FaqEntry,
                      children: [
                        (0, e.jsx)("div", {
                          className: s().FAQ_Q,
                          children: (0, n.we)(
                            "#Steamawards_FAQ_WhyParticipate_Q",
                          ),
                        }),
                        (0, e.jsx)("div", {
                          className: s().FAQ_A,
                          children: (0, n.we)(
                            "#Steamawards_FAQ_WhyParticipate_A",
                          ),
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          });
        }
        function at(o, a) {
          (0, b.pg)((0, e.jsx)(ot, { nYear: o }), a);
        }
        function ot(o) {
          const { closeModal: a, nYear: i } = o,
            l = (0, m.np)(),
            r = (0, m._C)(),
            [v, f] = (0, d.useState)(!1);
          if (!l.data) return null;
          const [S, T] = l.data;
          let w = "";
          T.code &&
            (w =
              A.TS.STORE_BASE_URL +
              `steamawards/nominations/${i}/` +
              p.iA.steamid +
              "?k=" +
              T.code);
          const W = () => {
            navigator.clipboard.writeText(w), f(!0);
          };
          return (0, e.jsx)(V.o0, {
            closeModal: a,
            bAlertDialog: !0,
            strCancelButtonText: (0, n.we)("#Steamawards_Close_Btn"),
            strTitle: (0, n.we)("#Steamawards_ShareLink_Title"),
            children: (0, e.jsxs)(x.Z, {
              className: s().ShareModalBody,
              "flow-children": "column",
              children: [
                (0, e.jsx)("p", {
                  className: (0, c.A)(s().ShareModalText, s().IntroText),
                  children: (0, n.we)("#Steamawards_ShareModal_Description"),
                }),
                w &&
                  (0, e.jsxs)(e.Fragment, {
                    children: [
                      (0, e.jsx)(_.JU, {
                        children: C.c.Localize("#YIR_ShareModal_YourLink"),
                      }),
                      (0, e.jsxs)("div", {
                        className: s().UrlContainer,
                        children: [
                          (0, e.jsx)("div", {
                            className: s().Url,
                            children: w,
                          }),
                          (0, e.jsx)(_.jn, {
                            className: s().Button,
                            onClick: W,
                            children: C.c.Localize(
                              v
                                ? "#YIR_ShareModal_CopyLink_Success"
                                : "#YIR_ShareModal_CopyLink",
                            ),
                          }),
                        ],
                      }),
                      (0, e.jsx)("p", {
                        className: s().ShareModalText,
                        children: (0, n.we)(
                          "#Steamawards_ShareModal_Description2",
                        ),
                      }),
                    ],
                  }),
                (0, e.jsx)(_.$n, {
                  className: s().GenerateShareLinkBtn,
                  onClick: () => r.mutate(),
                  children: (0, n.we)(
                    w
                      ? "#Steamawards_GenerateLink_Btn_Renew"
                      : "#Steamawards_GenerateLink_Btn",
                  ),
                }),
              ],
            }),
          });
        }
        function rt(o) {
          const { nYear: a } = o,
            i = (0, m.cO)();
          return !p.iA.logged_in || !i.data || i.data.length == 0
            ? (0, e.jsx)("div", {
                className: s().ShareLinkCtn,
                children: (0, e.jsx)("div", {
                  className: s().ProgressTitle,
                  children: (0, n.we)("#Steamawards_GenerateLink_Fallback"),
                }),
              })
            : (0, e.jsx)("div", {
                className: s().ShareLinkCtn,
                children: (0, e.jsxs)(O.Ii, {
                  className: s().ShareBtn,
                  onClick: (l) => {
                    l.preventDefault(),
                      l.stopPropagation(),
                      at(a, (0, j.uX)(l));
                  },
                  children: [
                    (0, e.jsx)(N.SYj, {}),
                    (0, e.jsx)("span", {
                      children: (0, n.we)("#Steamawards_ShareLink_Btn"),
                    }),
                  ],
                }),
              });
        }
        var it = t(4775),
          g = t.n(it),
          lt = t(81944),
          Qe = t(72865),
          dt = t(25792),
          ct = t(7414),
          mt = t(76867),
          ut = t(41032);
        const Se = {
          include_basic_info: !0,
          include_assets_without_overrides: !0,
          include_trailers: !0,
        };
        function vt() {
          const o = d.useContext(m.AD);
          return o
            ? (0, e.jsxs)(x.Z, {
                className: g().VotingPageContent,
                children: [
                  (0, e.jsx)(ht, {
                    bIsVotingOpen: o.bVotingOpen,
                    bIsVotingPast: o.bVotingPast,
                  }),
                  (0, e.jsxs)("div", {
                    className: g().VotingArea,
                    children: [
                      o.bHasStickerRewards &&
                        (0, e.jsx)(gt, {
                          unSaleAppID: o.config.appid,
                          bIsVotingOpen: o.bVotingOpen,
                          bIsVotingPast: o.bVotingPast,
                        }),
                      (0, e.jsx)(jt, {
                        bIsVotingOpen: o.bVotingOpen,
                        bIsVotingPast: o.bVotingPast,
                        unSaleAppID: o.config.appid,
                      }),
                    ],
                  }),
                  (0, e.jsx)(St, {}),
                ],
              })
            : null;
        }
        function ht(o) {
          const { bIsVotingOpen: a, bIsVotingPast: i } = o,
            l = d.useContext(m.AD),
            r = (0, m.CF)();
          let v;
          return (
            a
              ? (v = (0, n.we)("#Steamawards_Voting_Header_VoteNow"))
              : i
                ? (v = (0, n.we)("#Steamawards_Voting_Header_WinnersUp"))
                : (v = (0, n.we)(
                    "#Steamawards_Voting_Header_VoteSoon_New",
                    Ae(l.rtVoteStart),
                  )),
            (0, e.jsx)(x.Z, {
              children: (0, e.jsx)("div", {
                className: (0, c.A)(g().HeaderCtn, r.HeaderCtn),
                children: (0, e.jsx)("div", {
                  className: g().HeaderContent,
                  children: (0, e.jsxs)("div", {
                    className: g().TextColumn,
                    children: [
                      (0, e.jsx)("div", {
                        className: (0, c.A)(g().EventTitle, r.EventTitle),
                        children: (0, n.PP)(
                          "#Steamawards_Title_WithYear",
                          l.nYear,
                          (0, e.jsx)("br", {}),
                        ),
                      }),
                      (0, e.jsx)("div", {
                        className: (0, c.A)(
                          g().InfoText,
                          g().Large,
                          r.InfoText,
                          r.Large,
                        ),
                        children: v,
                      }),
                      i
                        ? (0, e.jsx)(e.Fragment, {
                            children: (0, e.jsx)("div", {
                              className: (0, c.A)(g().InfoText, r.InfoText),
                              children: (0, n.PP)(
                                "#Steamawards_Voting_Header_Winners",
                                l.nYear,
                              ),
                            }),
                          })
                        : (0, e.jsxs)(e.Fragment, {
                            children: [
                              (0, e.jsx)("div", {
                                className: (0, c.A)(g().InfoText, r.InfoText),
                                children: (0, n.we)(
                                  "#Steamawards_Voting_Header_Finalists",
                                ),
                              }),
                              (0, e.jsx)("div", {
                                className: (0, c.A)(g().InfoText, r.InfoText),
                                children: (0, n.we)(
                                  "#Steamawards_Voting_Header_HowTo",
                                  Ae(l.rtVoteEnd),
                                ),
                              }),
                              (0, e.jsx)("div", {
                                className: (0, c.A)(g().InfoText, r.InfoText),
                                children: (0, n.we)(
                                  "#Steamawards_Voting_Header_Dates_New",
                                  Ae(l.rtVoteEnd),
                                ),
                              }),
                            ],
                          }),
                    ],
                  }),
                }),
              }),
            })
          );
        }
        function gt(o) {
          const { unSaleAppID: a, bIsVotingOpen: i, bIsVotingPast: l } = o,
            r = (0, m.Jo)(a),
            v = (0, m.a8)(a),
            f = (0, m.CF)();
          if (!r.data) return null;
          const S = r.data.votes.map((w) =>
            (0, e.jsx)(At, { unSaleAppID: a, definition: w }, w.voteid),
          );
          let T = null;
          return (
            l
              ? (T = (0, n.PP)(
                  "#Steamawards_Progress_Title_Past",
                  v.data?.length ?? 0,
                  r.data.votes.length,
                ))
              : i
                ? A.iA.logged_in
                  ? v.data?.length > 0
                    ? (T = (0, n.PP)(
                        "#Steamawards_Progress_Title",
                        v.data?.length,
                        r.data.votes.length,
                      ))
                    : (T = (0, n.PP)(
                        "#Steamawards_Progress_Title_None",
                        r.data.votes.length,
                      ))
                  : (T = (0, n.we)("#Steamawards_Progress_Title_LoggedOut"))
                : (T = (0, n.PP)(
                    "#Steamawards_Progress_Title_Soon",
                    r.data.votes.length,
                  )),
            (0, e.jsxs)(x.Z, {
              className: (0, c.A)(
                g().ProgressCtn,
                g().SectionContent,
                f.ProgressCtn,
              ),
              children: [
                (0, e.jsx)("div", { className: g().Title, children: T }),
                (0, e.jsx)("div", { className: g().StickerRow, children: S }),
              ],
            })
          );
        }
        function At(o) {
          const { definition: a, unSaleAppID: i } = o,
            l = (0, m.Mn)(i, a.voteid),
            r = () =>
              (window.location.href =
                "#" + a.localization.title.replace(/\s/g, "")),
            v = (0, m.PV)(i, a.voteid),
            f = (0, m.CF)(),
            S = `${A.TS.MEDIA_CDN_COMMUNITY_URL}images/items/${i}/${l ? v?.item_image_small : v?.item_image_large}`,
            T = `${A.TS.MEDIA_CDN_COMMUNITY_URL}images/items/${i}/${v?.item_image_small}`;
          return (0, e.jsxs)("div", {
            className: (0, c.A)(g().CategoryStickerCtn, f.CategoryStickerCtn),
            children: [
              (0, e.jsx)("img", {
                className: (0, c.A)(
                  g().CategoryStickerHover,
                  f.CategoryStickerHover,
                ),
                src: T,
              }),
              (0, e.jsx)(x.Z, {
                className: (0, c.A)(g().CategorySticker, !l && g().Inactive),
                onActivate: r,
                style: { backgroundImage: `url( '${S}' )` },
              }),
            ],
          });
        }
        function jt(o) {
          const { unSaleAppID: a, bIsVotingOpen: i, bIsVotingPast: l } = o,
            v = (0, m.Jo)(a).data.votes.map((f) =>
              (0, e.jsx)(
                Ct,
                {
                  bIsVotingOpen: i,
                  bIsVotingPast: l,
                  unSaleAppID: a,
                  definition: f,
                },
                f.voteid,
              ),
            );
          return (0, e.jsx)(x.Z, {
            id: "Categories",
            className: (0, c.A)(g().CategoryList, g().SectionContent),
            children: v,
          });
        }
        function Ct(o) {
          const {
              definition: a,
              unSaleAppID: i,
              bIsVotingOpen: l,
              bIsVotingPast: r,
            } = o,
            v = (0, D.zX)(
              a.app_discounts.map((B) => B.appid),
              Se,
            ),
            f = (0, m.Mn)(i, a.voteid),
            S = d.useRef(0),
            T = (0, q.R7)(),
            w = d.useContext(m.AD),
            [W, K] = d.useState([]),
            [Y, H] = d.useState(0),
            [me, pe] = d.useState(!1),
            [ae, ue] = d.useState(0),
            [Ke, Rt] = d.useState(!f && !r),
            [Bt, Ft] = d.useState(),
            [je, Wt] = d.useState(669),
            ze =
              A.TS.BASE_URL_STORE_CDN_ASSETS +
              "promo/steamawards2024/backgrounds/" +
              a.internal_name +
              ".jpg?v=1",
            Ut = A.TS.IMG_URL + "promo/steamawards2023/placeholder_main.png",
            Ne = T?.ownerWindow || window,
            Qt = d.useCallback((B) => {
              Wt(B.contentRect.height);
            }, []),
            Vt = (0, J.wY)(Qt),
            Re = d.useCallback(() => {
              let B = "-20% 0px -50% 0px";
              if (Ne.innerHeight <= je) B = "0px 0px 0px 0px";
              else {
                const ve = Ne.innerHeight / je,
                  ie = Math.min(
                    ve * 40 + ve * je - (je + 40),
                    Ne.innerHeight * 0.65,
                  );
                B = `-${Math.min(je * 0.4, Ne.innerHeight * 0.1)}px 0px -${ie}px 0px`;
              }
              Ft(B);
            }, [Ne.innerHeight, je]);
          d.useEffect(
            () => (
              window.addEventListener("resize", Re),
              () => window.removeEventListener("resize", Re)
            ),
          ),
            d.useEffect(() => {
              const B = async () => {
                let Pe = [];
                if (A.iA.logged_in) {
                  const ve = await Promise.all(
                    a.app_discounts?.map(async (ie) => {
                      const Be = [ie.appid, A.iA.accountid].toString(),
                        Zt = await (0, ct.sx)(Be);
                      return { appid: ie.appid, hash: Zt };
                    }),
                  );
                  ve.sort((ie, Be) => (ie.hash > Be.hash ? 1 : -1)),
                    (Pe = ve.map((ie) => ie.appid));
                } else Pe = a.app_discounts.map((ve) => ve.appid);
                K(Pe), H(Pe[S.current]), Re();
              };
              W.length || B();
            }, [a.app_discounts, Re, W]);
          const Kt = d.useCallback(() => {
              if (!ae) {
                let B = S.current + 1;
                B >= W.length && (B = 0), (S.current = B), H(W[S.current]);
              }
            }, [W, ae]),
            Ht = d.useCallback((B) => {
              pe(B);
            }, []),
            bt = d.useCallback((B) => {
              ue(B), H(B);
            }, []),
            Gt = d.useCallback(() => {
              ue(0), H(W[S.current]);
            }, [W]);
          if (v == D.Sq)
            return (0, e.jsx)(P.t, {
              position: "center",
              size: "large",
              msDelayAppear: 300,
            });
          const zt = W?.map((B) =>
              (0, e.jsx)(
                Et,
                {
                  eCategory: a.voteid,
                  unSaleAppID: i,
                  bCurrentlyActive: Y === B,
                  unAppID: B,
                  bIsVotingOpen: l,
                  bIsCurrentVoteApp: f == B,
                  fnOnMouseLeaveApp: Gt,
                  fnOnMouseEnterApp: bt,
                },
                B,
              ),
            ),
            Yt = W?.map((B) =>
              (0, e.jsx)(
                xt,
                {
                  bHoveringApp: B == ae,
                  unAppID: B,
                  bPlayMicrotrailers: me,
                  bCurrentlyActive: Y === B,
                  fnOnVideoEnd: Kt,
                },
                B,
              ),
            ),
            Xt = 500;
          let He = (0, e.jsx)(e.Fragment, { children: Yt });
          return (
            a.winner_appid && r
              ? (He = (0, e.jsx)(ft, { unAppID: a.winner_appid }))
              : f && (He = (0, e.jsx)(_t, { unAppID: f })),
            (0, e.jsx)(dt.tH, {
              children: (0, e.jsx)(lt.J, {
                thresholds: [0.4],
                rootMargin: Bt,
                trigger: "repeated",
                onVisibilityChange: Ht,
                children: (0, e.jsxs)(x.Z, {
                  ref: Vt,
                  className: (0, c.A)(
                    g().SteamAwardCategory,
                    f && g().CategoryVoted,
                    me && g().Active,
                  ),
                  children: [
                    (0, e.jsx)("a", {
                      id: a.localization.title.replace(/\s/g, ""),
                      className: g().Anchor,
                    }),
                    (0, e.jsx)("div", {
                      className: (0, c.A)(g().SteamAwardCategoryBackground),
                      style: { backgroundImage: `url( ${ze} )` },
                    }),
                    (0, e.jsx)("div", {
                      className: (0, c.A)(
                        g().SteamAwardCategoryBlurryBackground,
                      ),
                      style: { backgroundImage: `url( ${ze} )` },
                    }),
                    (0, e.jsxs)("div", {
                      className: g().CategoryRow,
                      children: [
                        (0, e.jsxs)("div", {
                          className: g().LeftColumn,
                          children: [
                            (0, e.jsxs)("div", {
                              className: g().CategoryTitleRow,
                              children: [
                                (0, e.jsx)("div", {
                                  className: g().CategoryYear,
                                  children: (0, n.PP)(
                                    "#Steamawards_Title_WithYear_NoBreaks",
                                    w.nYear,
                                  ),
                                }),
                                (0, e.jsx)("div", {
                                  className: g().CategoryTitle,
                                  children: a.localization.title_award,
                                }),
                              ],
                            }),
                            (0, e.jsx)("div", {
                              className: g().CategoryDescription,
                              children: a.localization.award_description,
                            }),
                            (f || r) &&
                              (0, e.jsx)(_.$n, {
                                className: g().HideShowBtn,
                                onClick: () => Rt(!Ke),
                                children: Ke
                                  ? (0, n.we)("#Steamawards_HideFinalists_Btn")
                                  : (0, n.we)("#Steamawards_ShowFinalists_Btn"),
                              }),
                          ],
                        }),
                        (0, e.jsx)("div", {
                          className: (0, c.A)(g().RightColumn),
                          children: (0, e.jsxs)("div", {
                            className: g().CapsuleContainer,
                            children: [He, (0, e.jsx)("img", { src: Ut })],
                          }),
                        }),
                      ],
                    }),
                    (0, e.jsx)(mt.M, {
                      timeout: Xt,
                      unmountOnExit: !0,
                      mountOnEnter: !0,
                      in: Ke,
                      classNames: {
                        enter: g().Enter,
                        enterActive: g().EnterActive,
                        exit: g().Exit,
                        exitActive: g().ExitActive,
                      },
                      children: (B) =>
                        (0, e.jsxs)("div", {
                          ref: B,
                          className: g().FinalistsCtn,
                          children: [
                            (0, e.jsxs)("div", {
                              className: g().FinalistsIntro,
                              children: [
                                (0, e.jsx)("div", {
                                  children: r
                                    ? (0, n.we)(
                                        "#Steamawards_Voting_Finalists_Past",
                                      )
                                    : (0, n.we)(
                                        "#Steamawards_Voting_Finalists",
                                      ),
                                }),
                                (0, e.jsx)("div", {
                                  className: g().FinalistsLine,
                                }),
                              ],
                            }),
                            (0, e.jsx)("div", {
                              className: g().FinalistsRow,
                              children: zt,
                            }),
                          ],
                        }),
                    }),
                  ],
                }),
              }),
            })
          );
        }
        function _t(o) {
          const { unAppID: a } = o,
            [i] = (0, D.t7)(a, Se),
            l = (0, Qe.aL)(i?.GetStorePageURL(), "nominee_capsule");
          return i
            ? (0, e.jsxs)(e.Fragment, {
                children: [
                  (0, e.jsx)("div", {
                    className: g().CurrentVoteBanner,
                    children: (0, n.we)("#Steamawards_Voting_YourVote"),
                  }),
                  (0, e.jsx)("a", {
                    href: l,
                    children: (0, e.jsx)("img", {
                      src: i.GetAssetsWithoutOverrides().GetMainCapsuleURL(),
                    }),
                  }),
                ],
              })
            : null;
        }
        function ft(o) {
          const { unAppID: a } = o,
            [i] = (0, D.t7)(a, Se),
            l = (0, Qe.aL)(i?.GetStorePageURL(), "winner_capsule");
          return i
            ? (0, e.jsxs)(e.Fragment, {
                children: [
                  (0, e.jsx)("div", {
                    className: g().CurrentVoteBanner,
                    children: (0, n.we)("#Steamawards_Voting_Winner"),
                  }),
                  (0, e.jsx)("a", {
                    className: g().WinnerCapsule,
                    href: l,
                    children: (0, e.jsx)("img", {
                      src: i.GetAssetsWithoutOverrides().GetMainCapsuleURL(),
                    }),
                  }),
                ],
              })
            : null;
        }
        function xt(o) {
          const {
              unAppID: a,
              bCurrentlyActive: i,
              fnOnVideoEnd: l,
              bPlayMicrotrailers: r,
              bHoveringApp: v,
            } = o,
            [f] = (0, D.t7)(a, Se),
            S = d.useRef(void 0),
            T = (0, ut.dy)();
          d.useEffect(() => {
            S.current && (i && r ? S.current.play() : S.current.pause());
          }, [i, r]);
          const w = f?.GetMicroTrailer(T);
          return !f || !w?.strWebMURL
            ? null
            : (0, e.jsxs)("video", {
                className: (0, c.A)(g().MicrotrailerVideo, i && g().Active),
                poster: f.GetAssetsWithoutOverrides().GetMainCapsuleURL(),
                onEnded: l,
                ref: S,
                preload: "auto",
                loop: v,
                playsInline: !0,
                muted: !0,
                children: [
                  (0, e.jsx)("source", {
                    src: w.strWebMURL,
                    type: "video/webm",
                  }),
                  !A.TS.IN_CLIENT &&
                    (0, e.jsx)("source", {
                      src: w.strMP4URL,
                      type: "video/mp4",
                    }),
                ],
              });
        }
        function Et(o) {
          const {
              unAppID: a,
              unSaleAppID: i,
              eCategory: l,
              bCurrentlyActive: r,
              fnOnMouseEnterApp: v,
              fnOnMouseLeaveApp: f,
              bIsVotingOpen: S,
              bIsCurrentVoteApp: T,
            } = o,
            [w] = (0, D.t7)(a, Se),
            W = (0, m.ZB)(a, l, i),
            K = (0, Qe.aL)(w?.GetStorePageURL(), "nominee_capsule"),
            Y = (0, m.Vz)(l),
            H = Y && Y.currentNomination?.appid === a,
            me = d.useCallback(() => {
              if ((0, ee.UserEligibleToNominateOrVote)(!0)) T || W.mutate();
              else {
                console.log(
                  "EventDisplaySteamAwardNomination: UserEligibleToNominateOrVote failed",
                );
                return;
              }
            }, [T, W]);
          if (!w) return null;
          const pe = T
            ? (0, n.we)("#Steamawards_Voting_Action_Voted")
            : (0, n.we)("#Steamawards_Voting_Action_Vote");
          return (0, e.jsxs)(x.Z, {
            className: (0, c.A)(
              g().FinalistGameCtn,
              r ? g().CurrentlyFeatured : "",
              T ? g().MyVote : "",
            ),
            onMouseEnter: () => v(a),
            onBlur: f,
            onFocus: () => v(a),
            onMouseLeave: f,
            children: [
              (0, e.jsxs)("a", {
                href: K,
                className: g().CapsuleLink,
                children: [
                  (0, e.jsx)("img", {
                    src: w.GetAssetsWithoutOverrides().GetHeroCapsuleURL(),
                    className: g().Capsule,
                  }),
                  (0, e.jsx)("div", {
                    className: g().Highlight,
                    children: "\xA0",
                  }),
                ],
              }),
              S &&
                (0, e.jsx)(_.$n, {
                  onClick: me,
                  className: g().ActionButton,
                  children: pe,
                }),
              H &&
                (0, e.jsx)("div", {
                  className: g().YourNomination,
                  children: (0, n.we)("#Steamawards_Voting_Action_YourNominee"),
                }),
            ],
          });
        }
        function St() {
          const o = d.useContext(m.AD),
            a = (0, m.CF)(),
            i = A.TS.HELP_BASE_URL + "faqs/view/71D3-35C2-AD96-AA3A",
            l =
              "#Steamawards_Voting_FAQ_6_Q" + (o.nYear >= 2024 ? "_2024" : ""),
            r =
              "#Steamawards_Voting_FAQ_6_A" + (o.nYear >= 2024 ? "_2024" : "");
          let v = [
            (0, e.jsx)(
              re,
              {
                strQuestion: (0, n.we)("#Steamawards_Voting_FAQ_1_Q"),
                strAnswer: (0, n.oW)(
                  "#Steamawards_Voting_FAQ_1_A",
                  (0, e.jsx)("a", { href: i, children: ", " }),
                ),
              },
              "FAQ_1",
            ),
          ];
          return (
            o.bHasStickerRewards &&
              v.push(
                (0, e.jsx)(
                  re,
                  {
                    strQuestion: (0, n.we)("#Steamawards_Voting_FAQ_2_Q"),
                    strAnswer: (0, n.we)("#Steamawards_Voting_FAQ_2_A"),
                  },
                  "FAQ_2",
                ),
              ),
            (v = [
              ...v,
              (0, e.jsx)(
                re,
                {
                  strQuestion: (0, n.we)("#Steamawards_Voting_FAQ_3_Q"),
                  strAnswer: (0, n.we)(
                    "#Steamawards_Voting_FAQ_3_A_New",
                    Ae(o.rtVoteStart),
                    Ae(o.rtVoteEnd),
                  ),
                },
                "FAQ_3",
              ),
              (0, e.jsx)(
                re,
                {
                  strQuestion: (0, n.we)("#Steamawards_Voting_FAQ_7_Q"),
                  strAnswer: (0, n.we)("#Steamawards_Voting_FAQ_7_A"),
                },
                "FAQ_4",
              ),
              (0, e.jsx)(
                re,
                {
                  strQuestion: (0, n.we)("#Steamawards_Voting_FAQ_8_Q"),
                  strAnswer: (0, n.we)("#Steamawards_Voting_FAQ_8_A"),
                },
                "FAQ_5",
              ),
              (0, e.jsx)(
                re,
                {
                  strQuestion: (0, n.we)("#Steamawards_Voting_FAQ_4_Q"),
                  strAnswer: (0, n.we)(
                    "#Steamawards_Voting_FAQ_4_A_New",
                    Ae(o.rtVoteEnd),
                  ),
                },
                "FAQ_6",
              ),
              (0, e.jsx)(
                re,
                {
                  strQuestion: (0, n.we)("#Steamawards_Voting_FAQ_5_Q"),
                  strAnswer: (0, n.we)("#Steamawards_Voting_FAQ_5_A"),
                },
                "FAQ_7",
              ),
              (0, e.jsx)(
                re,
                { strQuestion: (0, n.we)(l), strAnswer: (0, n.we)(r) },
                "FAQ_8",
              ),
            ]),
            (0, e.jsxs)("div", {
              className: (0, c.A)(g().FAQWrapper, g().SectionContent),
              children: [
                (0, e.jsx)("div", {
                  className: (0, c.A)(g().FaqSectionTitle, a.FaqSectionTitle),
                  children: (0, n.we)("#Steamawards_Voting_FAQ_Title"),
                }),
                (0, e.jsx)("div", {
                  className: (0, c.A)(g().FAQCtn, a.FAQCtn),
                  children: v,
                }),
              ],
            })
          );
        }
        function re(o) {
          const { strQuestion: a, strAnswer: i } = o,
            l = (0, m.CF)();
          return (0, e.jsxs)(x.Z, {
            className: (0, c.A)(g().FaqEntry, l.FaqEntry),
            children: [
              (0, e.jsx)("div", {
                className: (0, c.A)(g().FAQ_Q, l.FAQ_Q),
                children: a,
              }),
              (0, e.jsx)("div", {
                className: (0, c.A)(g().FAQ_A, l.FAQ_A),
                children: i,
              }),
            ],
          });
        }
        function Ae(o) {
          return new Date(o * 1e3).toLocaleString(n.pf.GetPreferredLocales(), {
            day: "numeric",
            month: "short",
            hour: "numeric",
            minute: "numeric",
            timeZoneName: "short",
          });
        }
        var pt = t(26019),
          Nt = t.n(pt),
          Pt = t(79870),
          Dt = t.n(Pt),
          Tt = t(66701),
          Ot = t.n(Tt);
        function yt(o) {
          const { nYear: a } = o,
            i = (0, Ue.f1)(),
            l = (0, m.RE)(),
            r = Mt(a),
            v = d.useMemo(() => {
              if (!l || !l.definitions?.votes?.length) return null;
              const f = l.definitions.votes[0].start_time,
                S = l.definitions.votes[0].end_time,
                T = i >= f && i < S,
                w = i >= S,
                W = l.definitions.votes.some((K) => !!K.item_type);
              return {
                config: l,
                bVotingOpen: T,
                bVotingPast: w,
                yearStyles: r,
                nYear: a,
                rtVoteStart: f,
                rtVoteEnd: S,
                bHasStickerRewards: W,
              };
            }, [a, i, l, r]);
          return v
            ? (0, e.jsx)(G.Ay, {
                method: "steamawards",
                children: (0, e.jsx)(m.AD.Provider, {
                  value: v,
                  children: (0, e.jsx)(vt, {}),
                }),
              })
            : null;
        }
        const Ve = { 2023: Nt(), 2024: Dt(), 2025: Ot() },
          It = Object.values(Ve).reduce((o, a) => ({ ...o, ...a }), {}),
          wt = 2023;
        function Mt(o) {
          const [a, i] = d.useState({});
          return (
            d.useEffect(() => {
              let r = Ve[o];
              r || (r = Ve[wt]), i({ ...It, ...r });
            }, [o]),
            a
          );
        }
        const Lt = () =>
          (0, e.jsx)(G.Ay, {
            controller: "steamawards",
            children: (0, e.jsxs)(I.dO, {
              children: [
                (0, e.jsx)(I.qh, {
                  path: u.B.SteamAwardNominations(),
                  render: (o) =>
                    (0, e.jsx)(Le, {
                      nYear: parseInt(o.match.params.year),
                      steamID: o.match.params.steamid,
                      ...o,
                    }),
                }),
                (0, e.jsx)(I.qh, {
                  path: u.B.SteamAwards(),
                  render: (o) =>
                    (0, e.jsx)(yt, { nYear: parseInt(o.match.params.year) }),
                }),
              ],
            }),
          });
      },
      65274: (F) => {
        F.exports = {
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
      50122: (F) => {
        F.exports = {
          TextLink: "_1DLGHwAfYnbFVIwbZjO2cn",
          TextLinkButton: "_30P9kUCljAZzX5fl1DHGJe",
          Truncate: "_1FVRWG5uD8VhzoEiOZWrEo",
          "Underline-always": "_3ASRyX4FTT_eMM5S5yrkwK",
          "Underline-never": "_1gsOIvG4APXjSra-_55rdz",
          "Underline-auto": "_2OgYmw12nDHXtyT9za9yzL",
          "Underline-hover": "_3RITvcDUZq-hpnXRpiayfs",
        };
      },
      33924: (F) => {
        F.exports = {
          OtherEventsCtn: "_9H6b5yfaxlmcnHvkqtwDK",
          OtherEvents_MainImageCtn: "_2qyLPxO8_nkczRvFiaju8N",
          OtherEvents: "_16DzRvjcqFcYr0NYcWmTrg",
          EventSizer: "_2JC5DEuXUeE50kjpb7Eeau",
          OtherEvents_EventCtn: "_1MwNf8slOG9lOvAeOshmuu",
          EventSummaryText: "ENbI1gFgvIca6HSKAbfiJ",
          ShowInWideMode: "RLbLb742gN095uDUITtIB",
          EventSummaryContainer: "_2GYp44BuZLfKRQdeILTDC3",
          HideInWideMode: "_3itHivPkrgI7TWENi1yxjI",
          OtherEvents_ContentCtn: "_22jEpNTfml-w_aRJV-fKDm",
          HoversEnabled: "_3o6M87A6T172WsUE6MNvdW",
          OtherEvents_TextTitle: "_2jc1DpJ_WzFtigRh5qDWce",
          OtherEvents_MainImage: "_3_wKbXvT7_y5YkrtadL0I6",
          PartnerEventRowCapsule_MainImage: "bC2Zkx7FlANno4SW8FwB-",
          EventSummaryType: "_11JXznGoylLSEmZXZbgcsq",
          OtherEvents_BGImage: "_2pPj9UWoWM6h318uBN0-8X",
          MaskImages: "_1kFdtNfhXozP4yI_qOv2H-",
          OtherEvents_TextCtn: "_3-EtNa1Nr_737K0kglkT9C",
          UpcomingCtn: "_2CXrGPtlQh-j3aSa6XsQDI",
          OtherEvents_SubTitle: "_1Swox5XYdeesack-J7fNLH",
          EventType: "_2BWwVF5N-3fDuJRblB6gHb",
          AppCapsuleImage: "_3OzV3h4jW1bkLmB6TqbYmo",
          CapsuleShadow: "_2rjkJQtvus70aLmbfGoneD",
          AppCapsuleCtn: "_16au-uWHggl6G731aw_eHt",
          AppCapsuleImageHover: "IeC3X0McKdGC79BsC3VvM",
          AppCapsulePrice: "_2-l2M5GPuxKFwV8h1tc_fH",
        };
      },
      28124: () => {},
      85415: (F) => {
        F.exports = {
          narrowWidth: "500px",
          "duration-app-launch": "800ms",
          NominationsPageContent: "w8AKcU3i8ClK1UzQzqzI",
          SectionContent: "_20IkdxpCDwL8VLda92dq2Y",
          SteamAwardCategories: "_192O0SfNHIDsbHXq5iRgCM",
          NominationCategory: "_2G4S0SFOCuBF1c4Bx-dELf",
          BackgroundDark: "_1tIgRv45QmeUOQXrV9mdMq",
          NominationsHeaderCtn: "_1TnKc86XFqFWZThfWLgaRw",
          FAQHeaderArea: "_2Mwx1ICH6jNzJoeIPhhFDv",
          FAQHeaderCtn: "_3Jx_3njrOqCGvmBb5b53I6",
          FriendsHeader: "_27LlNtlWucjFwSNWY-Sbyb",
          FAQSaletitle: "_3s_6VHcgaXEyyUZ16zweVp",
          FAQComingsoon: "_1cG2WETjKlQ8Z5EC0lw0i9",
          NominationsFAQCtn: "_296AV5WTzSw4KsXXNtA2_x",
          FaqSectionTitle: "_1XIaoVZxTy-yIN4iv4QqL1",
          LeftCol: "Swdwp186ooghtuQCkEqml",
          RightCol: "_2RbOCvYEtWD-qpyXmp3Ye7",
          FaqEntry: "_3QrF1mai6HX6dr7jJijnTT",
          FAQ_Q: "_3Mou7FjFlqrR-kKuTt9N8g",
          FAQ_A: "-K9ED0JWohLoxFufaRmWt",
          SteamAwardCategory: "_3i1u-y7pjl-qc98gufdZUu",
          PickerOpen: "_1rSWia4DrhNXjIAW9m_H7R",
          SteamAwardCategoryBackground: "_35LJC3vUDhyY8YWBfRTzRB",
          Nominated: "_4GIBs4zFQvYzih0mbwMoB",
          SteamAwardCategoryBlurryBackground: "_3obFcpxM1lY5DMX8dIuroo",
          CategoryRow: "_1n-khJ_oWP9-ADtdauxmaP",
          LeftColumn: "_3Od-8EtYzDWL-rqzXdco_3",
          CategoryTitleRow: "_21wHFSOia958bDDSKRAnuz",
          Checkbox: "_33AlTMfX070fpO5wsAbYCj",
          CategoryTitle: "_3nVYk2PImiZU57xx8MxH-X",
          CategoryDescription: "_3mFT207sfDAaxfn-HB15sj",
          RightColumn: "_1g7X8N5RaLG09kZx1u2fbV",
          NominateBtnCtn: "_1HYrGX2M4CebVc7ClAyqi5",
          NominateButton: "_3yYqk-nDDM0DcyB3Id8NjD",
          PickerShown: "_2O-paI1bSbPTq6FALASFAe",
          ActionLogin: "_3s5xsmskAdOpXRyYWej0pj",
          ActionEdit: "_2p6oT45t7Kjk11DKng_WDR",
          CapsuleContainer: "_1fSqpH3qLOnMPsLvsocjDD",
          CapsuleBlurryContainer: "_1NTFi-9ML6rmzzrsR1dDt4",
          SectionTitle: "_2pyDiHU7ljm9ZRO_MWsJwr",
          BadgeSectionCtn: "_2lMcC-ffwNaKEZXfHcIZ2R",
          BadgeTasksCtn: "lVHOaGMQxyd0Pv3gC9QUj",
          BadgeTask: "_3nxfLmk626DE9RgzkJKLsD",
          TaskTitle: "uZMkLwiiLuPCt8EGWV29h",
          BadgeStatusCtn: "_2y8n9AG3gE8R7p0vnCu11y",
          BadgeStatusTitle: "_2sMYOvGVozOqLO6WXFCAMk",
          BadgeStatusDesc: "_3L4e0hBb8fmEtnQ8yFIoZe",
          BadgeImageRow: "_2MLgogShQSsdXcjJVnCrs_",
          BadgeItem: "PJRtCS56eG2Y0_F_VSsx7",
          BadgeImage: "_2sB2cTqit-_ethQFZRSqSN",
          Active: "_20Ol8bIY8KcNPBctmmB8zn",
          NominationPickerCtn: "_3I1Ga7kMZPDXXbOfgfBTDj",
          CarouselView: "_3mKDmumAiG1vMlU0jWpTe0",
          BottomRow: "a3_pmPQJhnwuVtzHgSyu8",
          TopRow: "_1ARPXpnwKMwds0ED6n65hh",
          CloseButton: "_2kep5HQu4ssXfj5IcG2_Zk",
          TopBarText: "_1CNpmoVrp_326dsK0CmqNS",
          SearchBarCtn: "_2sWS-29Gf-VMMR6kq1I0bN",
          RecommendationRow: "_3Xwn8eFK1QXh1ckrOXov07",
          RecommendationRowTitle: "_2Q0KQMyl8fMBpSMgOn0jsf",
          RecommendationRowSubtitle: "xKXQL9kh2IaXx62pUvaM8",
          Events: "kigvxizh8JmTyh5cyzSEA",
          Games: "IpzhVl6SWsWj5Vcmktozv",
          NoEligibleGamesCtn: "_2AqJTwluya2l8sHRS0Nrne",
          SearchContainer: "KBqkfDknFrTcr7ETAE2OW",
          SearchThrobber: "i4KlSZuYm2iFdxbjUegqJ",
          SearchResultsContainer: "_3M2mdkv-ZvUKBkLPH46U8S",
          SearchResultApp: "_3cbS4zsH_qv-1ZcwaA-4Tt",
          NominateGameButton: "CEmahjyiRmgWZlXL6XEpv",
          GameCarouselItemCtn: "_1Em3_QE0y0zfLhSA7n0NDm",
          PlaytimeIndicator: "_3t0T2BFkpBYduyOOwxnBI2",
          BadgeSectionTitle: "_3G1iNhfSRJ9NLuaxjN8MRA",
          White: "_17enANXtRLMRK09o9OKDdF",
          NoResultsCtn: "_2IlW9sfsAiruuo0GxHGgwl",
          ShareLinkCtn: "_15-jFxRvrZDrlMsnc5flU3",
          FriendsHeaderCtn: "_1T9FWlr19WP72HpE5wYup8",
          FriendsTitleCtn: "_3we3-2_E8Qgoj9vpaFu9JG",
          FriendsTitle: "oaA8CcFGe_Kz-3D-qR28Z",
          ProgressAndShareCtn: "_3FdxnzdLCLEUpdpoJJThYZ",
          ProgressTitle: "_3x6HhTNw3LbAwygEgTzwDr",
          ShareBtn: "_1t4jW207kK9lq0dm7UwBIq",
          HeaderButtonCtn: "WSKzFdd9sj_fIAKnqmiOT",
          Gold: "_3f-rIyt2OF08sZWkdxcuzG",
          EventCarousel: "_1ggzska8h4zQPvkSiT3642",
          ShareModalBody: "_3gj5bE9dm_7GXn87PPWJ7q",
          ShareModalText: "_1xonFOaYYv3jpu4vluDcs6",
          IntroText: "_3_Vb7QOOCe07PD_0t4UL0",
          Button: "_2Ynf3ZGFeViNrevWHYC6a-",
          UrlContainer: "_3CXjxVNiKxUH_xCflrU0fv",
          Url: "_3YxsXALKJ70zL3MTTWqibh",
          GenerateShareLinkBtn: "_23i3vxhJO5yZFZ8UkYUHfq",
        };
      },
      26019: (F) => {
        F.exports = {
          HeaderCtn: "_1oXTW_jpUID161hkqtu59M",
          EventTitle: "_3xLoBdLse_J3sDGG1p-yXS",
          InfoText: "_2ajjx_6sFyPgZhqB5H3ZnC",
          Large: "TDUFDP_Bl5TP_b5lgQUzr",
          FAQCtn: "_21i-Qc2WCMVQJPd0uWk5t4",
          FAQ_Q: "dwrawv-PnUTEQ1WVRwb1A",
          FAQ_A: "_2EmOv2BukDb5pXZiDipwMd",
          ProgressCtn: "_10nGaDuKJPA3cGdfbd7NPA",
          CategoryStickerCtn: "bI10T2_lqnfiIng7NCXzs",
          CategoryStickerHover: "_10SrgdoAjwiz9kvKG9lBKZ",
          FaqSectionTitle: "_3iDsXG7lNe9DQrxH1NNhwu",
        };
      },
      79870: (F) => {
        F.exports = {
          HeaderCtn: "_1GMPkxVZv0yXnOWg0EPh6C",
          EventTitle: "_2tLWKoQISyrtT5cRa7Bthz",
          InfoText: "_3FtbGRpd5Nc_3f0NWPSmPD",
          Large: "_3lWFGFpuyI0hO8I3yb_rNn",
          FAQCtn: "_3VrYL1Qsqq2VRPBJkD_HaR",
          FAQ_Q: "_3RNM6O7oImIghEzoU__8Xv",
          FAQ_A: "Eq7UcjWcQdQ6tRTSkwOAX",
          ProgressCtn: "_33gp2xeb7nySC065zyyBA4",
          CategoryStickerCtn: "BLVGwcLwZotI2A0JYeAmO",
          CategoryStickerHover: "_3gQFhFaB86zoAkrwBD3DlC",
          FaqSectionTitle: "_1M-Tp2eIsHzDqKVdeyNwEE",
        };
      },
      66701: (F) => {
        F.exports = {
          HeaderCtn: "_1LNVToRGS4KgtDmwChCdO-",
          EventTitle: "SHcWFaCZK_WUravI9p1Lm",
          InfoText: "_3Rnea2kVxFT3chmOmqisne",
          Large: "_2jbNvt46h0RqPVOeAwcb8o",
          FAQCtn: "_3UcPLvxpWKhkpPp5vuNZ4T",
          FaqEntry: "_8B-oP4jghkxueOwLkY5FR",
          FAQ_Q: "_3PJmH1yq33fNNGz3U9m-G0",
          FAQ_A: "_2CZcny1e2NwmV-B3klLJiN",
          ProgressCtn: "_3NRXvKouZmkfv0SJaRwm3z",
          CategoryStickerCtn: "_3aAMtCHlbBv9NIEZdV0q4E",
          CategoryStickerHover: "MofbE6cz8noD7aLG-RuYg",
          FaqSectionTitle: "_1KImUETUAUTMVe-r0tBhbv",
        };
      },
      4775: (F) => {
        F.exports = {
          narrowWidth: "500px",
          "duration-app-launch": "800ms",
          VotingPageContent: "_1HBQ3phQnNEooQ3rlXJWEU",
          SectionContent: "zKwKtEP3BYYZy9vgcUrYt",
          HeaderCtn: "_13RFBrxHyoARje0nMxX8tH",
          HeaderContent: "_1o6dhi3wA_BGCQuKqQs9Ms",
          TextColumn: "PsKAPvFalwTAqd-O5tpBs",
          FriendsHeader: "_2pdEK8BhZO9Fsk7gBzJcYG",
          EventTitle: "_2mq56csinWHiVtUbhcbIOM",
          InfoText: "_1fILAMegJPwehj7zLNiCnz",
          Large: "_2mg9K9HjkOCk8oaDZr8nkp",
          FaqSectionTitle: "_1EC9jX-4aGWknZdkL2jXz_",
          FAQWrapper: "_3k0Nep9QQO6OOkrJKij0rN",
          FAQCtn: "_2771UKLz1V9nHv-LmzpMxN",
          FaqEntry: "_2ajVjokAhuY_AzHO1fxS-N",
          FAQ_Q: "_1HaJqKTqlf4p0CRH0hJkFP",
          FAQ_A: "_3471NyjBfuVEY6GEgzQvTL",
          CategoryList: "_1XPN-o00qToVhhqCl0uCTs",
          SteamAwardCategory: "_1XBoC_51pQmCRN5avridVk",
          Anchor: "VcuHpIeUsOyyyT_KdUjAm",
          Active: "_1O8sHGuQHPL5zH5Sb46LPO",
          SteamAwardCategoryBackground: "_1ZcFSopSc0cwMRbi5HSVry",
          SteamAwardCategoryBlurryBackground: "L4OcSCmIVcuUl12bXB0TX",
          CategoryVoted: "_1t5sSouAYZGCwMwKgvAnnK",
          FinalistGameCtn: "_1BgO7N4S-tDGDCVnQbvKkq",
          MyVote: "_280DKBVL06EUXmV8oW_Stf",
          FinalistsRow: "gyb_bFa1822peSfG3BTXg",
          CurrentlyFeatured: "_26AMuDHs36difPA2OiqXtX",
          CapsuleLink: "_2jKUwrwbrF2t4kX3B82jyy",
          Highlight: "_2U0iDjf7-xhJmnwL85CgAL",
          CategoryRow: "_2coYuktGYgHFSf2bVXdpq_",
          LeftColumn: "_3Jr5t3bKaU_ex0uuo649cF",
          CategoryTitleRow: "xuEPVrSwJC-vQEtreQvnm",
          CategoryYear: "mRgEVFiqQRKYg192KYX8p",
          CategoryTitle: "_3Ly3DC2P8CDiJ7Xasn2ebQ",
          CategoryDescription: "JP2ZzubSDTJPbrIuVD2dj",
          RightColumn: "p_hWPrN8iGC3gBczTo-6t",
          HideShowBtn: "_15hKKH8LRiReglaS1WuEv3",
          CapsuleContainer: "_1hsDa2rFPpjzMu9rjU82U2",
          MicrotrailerVideo: "_3vYc4xomNAmkqKxT6BWe7-",
          CurrentVoteBanner: "_1jM-nBkKTkN_b8SE_j6ZlE",
          FinalistsCtn: "e6QP7VDRKVVFuD2RnEOjR",
          Enter: "_2bR4vh-7XndeYuAbZ9m3mi",
          EnterActive: "HzogqjfTp-YZfCxAYW1fk",
          "open-finalists": "_28Ukz2J5tkhC8hlAaMrh4a",
          Exit: "_1ihgKIWB0hGadYHxkDnfkc",
          ExitActive: "_2PHm0gzC_ah6_cbZ3Oy37F",
          "close-finalists": "_16yj_nglGTyrUl6zzC-jbj",
          FinalistsIntro: "_1tf4a4qNCkQo4ge5yBdOKV",
          FinalistsLine: "_1Se69bGQiI6RkGrQPuVBAa",
          Capsule: "bfZUvnddL__eLX2GmRP-F",
          ActionButton: "_38mJcOp4-kSzGLzkPdUCp",
          YourNomination: "_2KubnqoAbzyD4ZXRpsMPHy",
          WinnerInfoCtn: "_33Gx5kCJIh6ENRNdv04f9b",
          WinnerText: "joZ0rl06vZjm-lcXLbuSO",
          WinnerName: "_3ycfW5X-9UvOmi_kWZgnNU",
          WinnerCapsule: "_3ELJccHCME0WPJAkoGrxJt",
          VotingArea: "n6ZgKyivXpFdb4SqlA64M",
          ProgressCtn: "_2vUweIYz36Cfi6nm57qY0E",
          Title: "_3BVrSWCKUqUJI-Y9JHyPzu",
          StickerRow: "_1zyzM5BB2snSZ78ORI-3no",
          CategoryStickerCtn: "_1-Z8yTrwnOFgH8CFXjAh50",
          CategorySticker: "_1draD7X6gu1HpgfRr0k3bO",
          Inactive: "_1N55FNJtt9fgD3oEKh1ulo",
          CategoryStickerHover: "_16qkH83hzNBjI3OfNA2yPZ",
        };
      },
      61738: (F, U, t) => {
        var e = {
          "./af": 30911,
          "./af.js": 30911,
          "./ar": 63595,
          "./ar-dz": 99358,
          "./ar-dz.js": 99358,
          "./ar-kw": 46830,
          "./ar-kw.js": 46830,
          "./ar-ly": 26067,
          "./ar-ly.js": 26067,
          "./ar-ma": 64154,
          "./ar-ma.js": 64154,
          "./ar-ps": 90753,
          "./ar-ps.js": 90753,
          "./ar-sa": 53616,
          "./ar-sa.js": 53616,
          "./ar-tn": 19026,
          "./ar-tn.js": 19026,
          "./ar.js": 63595,
          "./az": 87043,
          "./az.js": 87043,
          "./be": 28437,
          "./be.js": 28437,
          "./bg": 29843,
          "./bg.js": 29843,
          "./bm": 39421,
          "./bm.js": 39421,
          "./bn": 41300,
          "./bn-bd": 54487,
          "./bn-bd.js": 54487,
          "./bn.js": 41300,
          "./bo": 40827,
          "./bo.js": 40827,
          "./br": 35120,
          "./br.js": 35120,
          "./bs": 41991,
          "./bs.js": 41991,
          "./ca": 47504,
          "./ca.js": 47504,
          "./cs": 98346,
          "./cs.js": 98346,
          "./cv": 17525,
          "./cv.js": 17525,
          "./cy": 80872,
          "./cy.js": 80872,
          "./da": 48787,
          "./da.js": 48787,
          "./de": 30199,
          "./de-at": 33461,
          "./de-at.js": 33461,
          "./de-ch": 97995,
          "./de-ch.js": 97995,
          "./de.js": 30199,
          "./dv": 14682,
          "./dv.js": 14682,
          "./el": 52549,
          "./el.js": 52549,
          "./en-au": 5706,
          "./en-au.js": 5706,
          "./en-ca": 50584,
          "./en-ca.js": 50584,
          "./en-gb": 41685,
          "./en-gb.js": 41685,
          "./en-ie": 32050,
          "./en-ie.js": 32050,
          "./en-il": 35545,
          "./en-il.js": 35545,
          "./en-in": 42551,
          "./en-in.js": 42551,
          "./en-nz": 10620,
          "./en-nz.js": 10620,
          "./en-sg": 16222,
          "./en-sg.js": 16222,
          "./eo": 88124,
          "./eo.js": 88124,
          "./es": 59784,
          "./es-do": 30300,
          "./es-do.js": 30300,
          "./es-mx": 47292,
          "./es-mx.js": 47292,
          "./es-us": 36469,
          "./es-us.js": 36469,
          "./es.js": 59784,
          "./et": 56349,
          "./et.js": 56349,
          "./eu": 6782,
          "./eu.js": 6782,
          "./fa": 86749,
          "./fa.js": 86749,
          "./fi": 52469,
          "./fi.js": 52469,
          "./fil": 2989,
          "./fil.js": 2989,
          "./fo": 50743,
          "./fo.js": 50743,
          "./fr": 34916,
          "./fr-ca": 96853,
          "./fr-ca.js": 96853,
          "./fr-ch": 81566,
          "./fr-ch.js": 81566,
          "./fr.js": 34916,
          "./fy": 82949,
          "./fy.js": 82949,
          "./ga": 80932,
          "./ga.js": 80932,
          "./gd": 82671,
          "./gd.js": 82671,
          "./gl": 95687,
          "./gl.js": 95687,
          "./gom-deva": 67330,
          "./gom-deva.js": 67330,
          "./gom-latn": 7021,
          "./gom-latn.js": 7021,
          "./gu": 78728,
          "./gu.js": 78728,
          "./he": 28211,
          "./he.js": 28211,
          "./hi": 15487,
          "./hi.js": 15487,
          "./hr": 94106,
          "./hr.js": 94106,
          "./hu": 14147,
          "./hu.js": 14147,
          "./hy-am": 23862,
          "./hy-am.js": 23862,
          "./id": 78825,
          "./id.js": 78825,
          "./is": 57612,
          "./is.js": 57612,
          "./it": 9497,
          "./it-ch": 75653,
          "./it-ch.js": 75653,
          "./it.js": 9497,
          "./ja": 2209,
          "./ja.js": 2209,
          "./jv": 85668,
          "./jv.js": 85668,
          "./ka": 6904,
          "./ka.js": 6904,
          "./kk": 2138,
          "./kk.js": 2138,
          "./km": 81660,
          "./km.js": 81660,
          "./kn": 88613,
          "./kn.js": 88613,
          "./ko": 57894,
          "./ko.js": 57894,
          "./ku": 28468,
          "./ku-kmr": 57123,
          "./ku-kmr.js": 57123,
          "./ku.js": 28468,
          "./ky": 91808,
          "./ky.js": 91808,
          "./lb": 47070,
          "./lb.js": 47070,
          "./lo": 56505,
          "./lo.js": 56505,
          "./lt": 53656,
          "./lt.js": 53656,
          "./lv": 83746,
          "./lv.js": 83746,
          "./me": 42486,
          "./me.js": 42486,
          "./mi": 82,
          "./mi.js": 82,
          "./mk": 14792,
          "./mk.js": 14792,
          "./ml": 10845,
          "./ml.js": 10845,
          "./mn": 46939,
          "./mn.js": 46939,
          "./mr": 5575,
          "./mr.js": 5575,
          "./ms": 81424,
          "./ms-my": 43179,
          "./ms-my.js": 43179,
          "./ms.js": 81424,
          "./mt": 30341,
          "./mt.js": 30341,
          "./my": 72834,
          "./my.js": 72834,
          "./nb": 75292,
          "./nb.js": 75292,
          "./ne": 23753,
          "./ne.js": 23753,
          "./nl": 53922,
          "./nl-be": 77542,
          "./nl-be.js": 77542,
          "./nl.js": 53922,
          "./nn": 81304,
          "./nn.js": 81304,
          "./oc-lnc": 41156,
          "./oc-lnc.js": 41156,
          "./pa-in": 17851,
          "./pa-in.js": 17851,
          "./pl": 66636,
          "./pl.js": 66636,
          "./pt": 13252,
          "./pt-br": 95189,
          "./pt-br.js": 95189,
          "./pt.js": 13252,
          "./ro": 5451,
          "./ro.js": 5451,
          "./ru": 981,
          "./ru.js": 981,
          "./sd": 49139,
          "./sd.js": 49139,
          "./se": 24684,
          "./se.js": 24684,
          "./si": 85448,
          "./si.js": 85448,
          "./sk": 61682,
          "./sk.js": 61682,
          "./sl": 17595,
          "./sl.js": 17595,
          "./sq": 61360,
          "./sq.js": 61360,
          "./sr": 45897,
          "./sr-cyrl": 80616,
          "./sr-cyrl.js": 80616,
          "./sr.js": 45897,
          "./ss": 15034,
          "./ss.js": 15034,
          "./sv": 78213,
          "./sv.js": 78213,
          "./sw": 47494,
          "./sw.js": 47494,
          "./ta": 48387,
          "./ta.js": 48387,
          "./te": 90951,
          "./te.js": 90951,
          "./tet": 83675,
          "./tet.js": 83675,
          "./tg": 99753,
          "./tg.js": 99753,
          "./th": 59844,
          "./th.js": 59844,
          "./tk": 84429,
          "./tk.js": 84429,
          "./tl-ph": 54645,
          "./tl-ph.js": 54645,
          "./tlh": 56946,
          "./tlh.js": 56946,
          "./tr": 8630,
          "./tr.js": 8630,
          "./tzl": 79480,
          "./tzl.js": 79480,
          "./tzm": 13839,
          "./tzm-latn": 36313,
          "./tzm-latn.js": 36313,
          "./tzm.js": 13839,
          "./ug-cn": 26648,
          "./ug-cn.js": 26648,
          "./uk": 24192,
          "./uk.js": 24192,
          "./ur": 8335,
          "./ur.js": 8335,
          "./uz": 21351,
          "./uz-latn": 60785,
          "./uz-latn.js": 60785,
          "./uz.js": 21351,
          "./vi": 9541,
          "./vi.js": 9541,
          "./x-pseudo": 309,
          "./x-pseudo.js": 309,
          "./yo": 21512,
          "./yo.js": 21512,
          "./zh-cn": 98562,
          "./zh-cn.js": 98562,
          "./zh-hk": 7374,
          "./zh-hk.js": 7374,
          "./zh-mo": 87107,
          "./zh-mo.js": 87107,
          "./zh-tw": 34518,
          "./zh-tw.js": 34518,
        };
        function u(d) {
          var R = I(d);
          return t(R);
        }
        function I(d) {
          if (!t.o(e, d)) {
            var R = new Error("Cannot find module '" + d + "'");
            throw ((R.code = "MODULE_NOT_FOUND"), R);
          }
          return e[d];
        }
        (u.keys = function () {
          return Object.keys(e);
        }),
          (u.resolve = I),
          (F.exports = u),
          (u.id = 61738);
      },
    },
  ]);
})();
