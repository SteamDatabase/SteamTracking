/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(() => {
  (self.webpackChunkstore = self.webpackChunkstore || []).push([
    [68135],
    {
      95414: (w, G, e) => {
        "use strict";
        e.d(G, { j: () => A, u: () => $ });
        var t = e(7850),
          O = e(90626),
          M = e(24660),
          I = e(83482),
          T = e(72865),
          F = e(77200),
          R = e(53113),
          l = e(68094),
          W = e(72609),
          Q = e(3166);
        function U(d) {
          if (d) {
            if ("appid" in d) return "app";
            if ("bundleid" in d) return "bundle";
            if ("packageid" in d) return "sub";
          }
        }
        function A(d) {
          const {
              id: m,
              hoverClassName: u,
              fnGetIDOverride: s,
              fnHoverState: o,
              disableScreenshots: h,
              children: f,
            } = d,
            n = O.useRef(null),
            P = O.useCallback(
              (v) => {
                const i = U(m);
                i &&
                  (o && o(!0),
                  window.GameHover &&
                    (n.current &&
                      h &&
                      (n.current.dataset.hoverDisableScreenshots = "true"),
                    window.GameHover(s ? s() : n.current, v, "global_hover", {
                      type: i,
                      id: (0, l.G$)(m).id,
                      v6: 1,
                    })));
              },
              [o, s, h, m],
            ),
            p = O.useCallback(
              (v) => {
                U(m) &&
                  (o && v.relatedTarget && o(!1),
                  window.HideGameHover &&
                    window.HideGameHover(
                      s ? s() : n.current,
                      v,
                      "global_hover",
                    ));
              },
              [m, o, s],
            );
          return (0, t.jsx)("div", {
            ref: n,
            className: u,
            onMouseEnter: P,
            onMouseLeave: p,
            onFocus: P,
            onBlur: p,
            children: f,
          });
        }
        function $(d) {
          const {
              id: m,
              strExtraParams: u,
              fnOnClickOverride: s,
              strOverrideURL: o,
            } = d,
            h = (0, T.n9)(),
            f = (0, F.w)(),
            n = (0, R.NT)(
              o ||
                (m && "creatorid" in m
                  ? (0, I.It)(
                      `${W.TS.STORE_BASE_URL}curator/${((0, l.G$))(m).id}${u ? `?${u}` : ""}`,
                      h,
                      f,
                    )
                  : (0, I.It)(
                      `${W.TS.STORE_BASE_URL}${U(m)}/${((0, l.G$))(m).id}${u ? `?${u}` : ""}`,
                      h,
                      f,
                    )),
            );
          return (0, t.jsx)(A, {
            ...d,
            children: (0, t.jsx)(M.Ii, {
              className: d.className,
              href: s ? void 0 : n,
              target: W.TS.IN_CLIENT || s ? void 0 : "_blank",
              rel: "noopener noreferrer",
              onClick: s,
              children: d.children,
            }),
          });
        }
      },
      63063: (w, G, e) => {
        "use strict";
        e.d(G, { q: () => $ });
        var t = e(7850),
          O = e(76105),
          M = e(48156),
          I = e(40358),
          T = e(90626),
          F = e(63803),
          R = e(76532),
          l = e.n(R),
          W = e(29245),
          Q = e(48357),
          U = e(64774),
          A = e(36707);
        function $(u) {
          const {
              id: s,
              bHidePrice: o,
              bShowInLibraryInsteadOfPrice: h,
              bHidePlatforms: f,
              strClassName: n,
              creatorAccountID: P,
              bShowName: p,
              onlyOneDiscountPct: v,
              bShowAddToCart: i,
              bShowWishlistButton: E,
            } = u,
            D = (0, T.useRef)(null),
            [r, x] = (0, T.useState)(!1),
            { data: g } = (0, I.J$)(s);
          if (
            ((0, T.useEffect)(() => {
              D.current && x(D.current.offsetWidth < 370);
            }, [D]),
            !s || !("appid" in s || "bundleid" in s || "packageid" in s))
          )
            return null;
          const Y = !!(E && g?.item_type == M.c6.qI),
            J = !!(!P && !i && !Y && f && o);
          return (0, t.jsxs)(t.Fragment, {
            children: [
              !J &&
                (0, t.jsxs)("div", {
                  ref: D,
                  className: (0, A.A)(
                    l().CapsuleBottomBar,
                    "CapsuleBottomBar",
                    n,
                  ),
                  children: [
                    P && (0, t.jsx)(m, { creatorAccountID: P, ...u }),
                    i &&
                      (0, t.jsx)(F.h, {
                        id: s,
                        className: (0, A.A)(
                          l().MaxActionButtonWidth,
                          l().AddToCartButton,
                        ),
                      }),
                    Y &&
                      "appid" in s &&
                      (0, t.jsx)(U.r, {
                        appid: s.appid,
                        className: (0, A.A)(
                          l().MaxActionButtonWidth,
                          l().AddToWishlistButton,
                        ),
                      }),
                    !f &&
                      (0, t.jsx)(W.Q, {
                        id: s,
                        bMinimizePlatforms: r,
                        bHideWindows: !0,
                      }),
                    !o &&
                      (0, t.jsx)("span", {
                        className: l().BottomBarPriceInfo,
                        children: (0, t.jsx)(Q.NF, {
                          id: s,
                          bShowInLibrary: h,
                          onlyOneDiscountPct: v,
                        }),
                      }),
                  ],
                }),
              p && (0, t.jsx)(d, { id: s }),
            ],
          });
        }
        function d(u) {
          const { id: s } = u,
            { data: o } = (0, I.J$)(s);
          return o?.name
            ? (0, t.jsx)("div", {
                className: l().CapsuleName,
                children: o.name,
              })
            : null;
        }
        function m(u) {
          const { creatorAccountID: s, strClassName: o } = u,
            h = (0, T.useMemo)(() => ({ creatorid: s }), [s]),
            { data: f } = (0, I.J$)(h),
            { data: n } = (0, I.lv)(h);
          if (!f) return null;
          const P = (0, O.t)(n?.clan_avatar, "Medium"),
            p = f.name || "";
          return (0, t.jsxs)("div", {
            className: (0, A.A)(l().BottomCreatorRow, o),
            children: [
              (0, t.jsx)("img", {
                className: (0, A.A)(l().CreatorLogo),
                src: P,
                alt: p,
              }),
              (0, t.jsx)("span", { className: l().CreatorName, children: p }),
            ],
          });
        }
      },
      64774: (w, G, e) => {
        "use strict";
        e.d(G, { _: () => n, r: () => f });
        var t = e(7850),
          O = e(48156),
          M = e(29522),
          I = e(40358),
          T = e(72865),
          F = e(24179),
          R = e(54528),
          l = e(96362),
          W = e(90626),
          Q = e(83482),
          U = e(76532),
          A = e.n(U),
          $ = e(85705),
          d = e(36118),
          m = e(71421),
          u = e(36707),
          s = e(18210),
          o = e(3166),
          h = e(89926);
        function f(v) {
          const { appid: i, className: E, bTextMode: D } = v,
            r = (0, M.$5)(i),
            { data: x } = (0, I.J$)(r),
            { data: g } = (0, I.by)(r);
          return (0, t.jsx)(n, {
            appid: i,
            bIsFree: !!x?.is_free,
            bIsComingSoon: !!g?.is_coming_soon,
            bTextMode: D,
            className: E,
          });
        }
        function n(v) {
          const [i, E] = W.useState(!1),
            D = (0, T.n9)(),
            {
              appid: r,
              bIsFree: x,
              bIsComingSoon: g,
              className: Y,
              bTextMode: J,
            } = v,
            z = (0, M.$5)(r),
            { bIsOwned: ie } = (0, F.ZJ)(z),
            te = (0, R.bB)(r),
            { mutateAsync: se } = (0, l.s)(r, !te, (0, Q.L3)(D)),
            { elDialogElement: le, fnShowLogonDialog: N } = (0, h.l)(),
            de = async () => {
              if (!o.iA.logged_in) {
                N();
                return;
              }
              i || (E(!0), await se(), E(!1));
            };
          if (ie || (!g && x))
            return x ? (0, t.jsx)(P, { possibleDemoAppID: r }) : null;
          let V = null;
          return (
            i && !J
              ? (V = (0, t.jsx)($.k, { size: 18 }))
              : te
                ? te &&
                  (V = J ? (0, s.we)("#OnWishlist") : (0, t.jsx)(d.qnF, {}))
                : (V = J
                    ? (0, s.we)("#wishlist_add_to_wishlist")
                    : (0, t.jsx)(d.T4m, {})),
            (0, t.jsxs)(t.Fragment, {
              children: [
                (0, t.jsx)(m.he, {
                  toolTipContent: (0, s.we)("#AddToWishlist_ttip"),
                  children: (0, t.jsx)("div", {
                    className: (0, u.A)(A().WishList, Y),
                    onClick: de,
                    children: V,
                  }),
                }),
                le,
              ],
            })
          );
        }
        function P(v) {
          const { possibleDemoAppID: i, className: E } = v,
            D = (0, M.$5)(i),
            { data: r } = (0, I.J$)(D);
          return r &&
            (r.type == O.uE.ue || r.type == O.uE.Vi) &&
            r.related_items?.parent_appid
            ? (0, t.jsx)(p, {
                parentAppID: r.related_items?.parent_appid,
                className: E,
              })
            : null;
        }
        function p(v) {
          const { parentAppID: i, className: E } = v,
            D = (0, M.$5)(i),
            { data: r } = (0, I.J$)(D),
            { data: x } = (0, I.by)(D);
          return !r || !x
            ? null
            : (0, t.jsx)(n, {
                appid: i,
                bIsComingSoon: !!x.is_coming_soon,
                bIsFree: !!r.is_free,
                className: E,
              });
        }
      },
      96117: (w, G, e) => {
        "use strict";
        e.d(G, { W: () => fe, J: () => ue });
        var t = e(7850),
          O = e(24660),
          M = e(19298),
          I = e(20169),
          T = e(48156),
          F = e(88743),
          R = e(6698),
          l = e(80702),
          W = e(86298),
          Q = e(95414);
        function U() {
          return { width: 460, height: 215 };
        }
        function A() {
          return { width: 616, height: 353 };
        }
        function $() {
          return { width: 231, height: 87 };
        }
        var d = e(46727),
          m = e(84607),
          u = e(41188),
          s = e(77459),
          o = e(63063),
          h = e(21721),
          f = e(87249),
          n = e(40358),
          P = e(29522),
          p = e(72865),
          v = e(24179),
          i = e(32994),
          E = e(90626),
          D = e(83482),
          r = e(33924),
          x = e(76532),
          g = e.n(x),
          Y = e(96155),
          J = e(77200),
          z = e(36707),
          ie = e(18210),
          te = e(53113),
          se = e(3166),
          le = e(91291),
          N = e.n(le),
          de = e(3348),
          V = e(47875);
        const ue = "capsule_index_";
        function fe(a) {
          const {
              capsule: c,
              bShowParentApp: S,
              elElementToAppendToHover: C,
              index: _,
              navKey: j,
              bHideStoreHover: B,
              onlyOneDiscountPct: X,
              bPreferDemoStorePage: b,
              bShowEarlyAccessBanner: k,
            } = a,
            q = (0, se.Qn)(),
            [ee, L] = E.useState(!1),
            [H, ne] = E.useState(!1),
            [Z, oe] = E.useState(!1),
            ae = E.useRef(!1);
          E.useEffect(() => {
            if (H && !ae.current) {
              const pe = window.setTimeout(() => {
                (ae.current = !0), oe(!0);
              }, 500);
              return () => window.clearTimeout(pe);
            }
            return oe(H || ee), () => {};
          }, [H, ee]);
          const { data: ce } = (0, i.lI)(),
            re = !!ce?.preferences?.disable_microtrailers,
            y = (0, F.rt)(c),
            { data: K } = (0, n.J$)(y),
            me = (0, P.$5)(S ? K?.related_items?.parent_appid : void 0),
            { data: ve } = (0, n.J$)(me);
          if (!K || !y) return null;
          const Ee = !!ve && !!me,
            Ie = (0, t.jsx)(he, {
              ...a,
              strExtraParams: a.strExtraParams,
              id: y,
              bIsHovered: Z && !re,
              bHasParentAppToDisplay: Ee,
              onlyOneDiscountPct: X,
              bShowEarlyAccessBanner: k,
              bUsePanel: !B && !q,
            });
          return (0, t.jsxs)(M.Z, {
            className: (0, z.A)({
              [g().OuterCapsuleContainer]: !0,
              [g().TrailerActive]: Z && !re && q,
              [ue + _]: _ == 0,
            }),
            navEntryPreferPosition: I.iU.PREFERRED_CHILD,
            navKey: j,
            onFocusWithin: a.imageType != "library" ? ne : void 0,
            children: [
              (0, t.jsxs)(R.oj, {
                appid: K.appid,
                children: [
                  B
                    ? (0, t.jsx)("div", {
                        onMouseEnter: () => L(!0),
                        onMouseLeave: () => L(!1),
                        children: Ie,
                      })
                    : (0, t.jsx)(l.Q, {
                        className: g().CapsuleContainer,
                        id: y,
                        elElementToAppend: a.elElementToAppendToHover,
                        bShowDemoButton: a.bShowDemoButton,
                        bPreferDemoStorePage: a.bPreferDemoStorePage,
                        bShowDeckCompatibilityDialog:
                          a.bShowDeckCompatibilityDialog,
                        eHardwareCompatibilityDisplay:
                          a.eHardwareCompatibilityDisplay,
                        bHidePrice: a.bHidePrice,
                        bUseSubscriptionLayout: a.bUseSubscriptionLayout,
                        strExtraParams: a.strExtraParams,
                        nCreatorAccountID: a.creatorAccountID,
                        nWidthMultiplier: a.nWidthMultiplier,
                        bShowIgnoreButton: a.bShowIgnoreButton,
                        bShowDescription: a.bShowDescriptionInHover,
                        children: Ie,
                      }),
                  !!C && (0, t.jsx)(t.Fragment, { children: C }),
                ],
              }),
              Ee &&
                (0, t.jsx)(De, {
                  strExtraParams: a.strExtraParams,
                  parentID: me,
                  parentStoreItemDefaultInfo: ve,
                  childAppType: K.type,
                  bPreferDemoStorePage: !!b,
                }),
            ],
          });
        }
        function De(a) {
          const {
              strExtraParams: c,
              parentID: S,
              parentStoreItemDefaultInfo: C,
              childAppType: _,
              bPreferDemoStorePage: j,
            } = a,
            B = (0, p.n9)(),
            X = (0, se.Qn)(),
            { data: b } = (0, n.lv)(S);
          return b
            ? (0, t.jsx)(O.ml, {
                className: g().CapsuleParentInfo,
                ...(0, W.S)(C, B, X, j, c),
                children: (0, t.jsxs)(R.oj, {
                  appid: C.appid,
                  children: [
                    (0, t.jsx)("div", {
                      className: g().ParentType,
                      children: (0, ie.we)(
                        _ == T.uE.Ov
                          ? "#SalePage_ParentApp_SoundTrack"
                          : "#SalePage_ParentApp_DLC",
                      ),
                    }),
                    (0, t.jsx)(Q.u, {
                      id: S,
                      strExtraParams: c,
                      children: (0, t.jsx)("img", {
                        loading: "lazy",
                        className: r.AppCapsuleImage,
                        alt: C.name || "",
                        src: (0, h.b0)(b, "small_capsule"),
                        ...$(),
                      }),
                    }),
                  ],
                }),
              })
            : null;
        }
        function he(a) {
          const {
              id: c,
              bHideStatusBanners: S,
              bUsePanel: C,
              strExtraParams: _,
              index: j,
              imageType: B,
              bHasParentAppToDisplay: X,
              bIsHovered: b,
              strDoubleCapsuleMessage: k,
              bPreferDemoStorePage: q,
              bShowEarlyAccessBanner: ee,
              bPreferAssetWithoutOverride: L,
            } = a,
            H = (0, p.n9)(),
            ne = (0, J.w)(),
            Z = (0, se.Qn)(),
            oe = (0, P._Z)(c),
            { data: ae } = (0, n.J$)(c);
          if (!ae) return null;
          const ce = C
              ? void 0
              : (0, te.NT)(
                  (0, D.It)(`${(0, V._)(ae, q)}${_ ? `?${_}` : ""}`, H, ne),
                ),
            re = C ? M.Z : O.Ii,
            y = b && Z,
            K = !!k;
          return (0, t.jsxs)(t.Fragment, {
            children: [
              (0, t.jsxs)("div", {
                className: (0, z.A)({ [N().TwoWidthCtn]: K }),
                children: [
                  (0, t.jsxs)(re, {
                    href: ce,
                    style: {
                      display: "block",
                      cursor: "pointer",
                      position: Z ? "relative" : void 0,
                      zIndex: y ? 4 : void 0,
                    },
                    className: (0, z.A)({ [N().TwoWidthCapsule]: K }),
                    preferredFocus: X,
                    focusable: !0,
                    noFocusRing: y,
                    children: [
                      (0, t.jsx)(d.V, {
                        appids: oe,
                        hide_status_banners: S,
                        show_early_access: ee,
                      }),
                      B != "none" &&
                        (0, t.jsx)(m.a, {
                          imageType: B,
                          id: c,
                          bPreferAssetWithoutOverride: L,
                        }),
                      (0, t.jsx)(Y.J, { id: c }),
                      (0, t.jsx)("div", {
                        className: (0, z.A)({ [N().FadeIn]: y }),
                        children: (0, t.jsx)(f.mj, {
                          id: c,
                          active: b,
                          bIsHoverMode: !0,
                          eGrowOnActivate: y
                            ? f.C0.k_ETrailerGrowAmount_Implicit
                            : void 0,
                        }),
                      }),
                    ],
                  }),
                  K &&
                    (0, t.jsx)(Pe, {
                      id: c,
                      strDoubleCapsuleMessage: k,
                      index: j,
                    }),
                ],
              }),
              (0, t.jsx)(Ce, { ...a }),
            ],
          });
        }
        function Pe(a) {
          const { id: c, strDoubleCapsuleMessage: S, index: C } = a,
            { data: _ } = (0, n.by)(c),
            { data: j } = (0, n.xz)(c);
          return (0, t.jsxs)("div", {
            className: (0, z.A)(N().TwoWidthSideInfo, "TwoWidthSideInfo"),
            children: [
              (0, t.jsx)("div", { className: N().Reason, children: S }),
              (0, t.jsx)("div", {
                className: N().StoreSaleItemRelease,
                children: (0, t.jsx)("span", {
                  children: _ ? (0, de.CC)(_) : "",
                }),
              }),
              (0, t.jsx)(u.n, {
                bHideTitle: !0,
                rgTagIDs: j?.map((B) => B.tagid) || [],
                instanceNum: C,
              }),
            ],
          });
        }
        function Ce(a) {
          const {
              id: c,
              bHidePriceIfOwned: S,
              bHideStatusBanners: C,
              bUseSubscriptionLayout: _,
              elElementToAppendToHover: j,
              bHidePrice: B,
              bHidePlatforms: X,
              creatorAccountID: b,
              bIsHovered: k,
              onlyOneDiscountPct: q,
              strDoubleCapsuleMessage: ee,
            } = a,
            { data: L } = (0, n.J$)(c),
            { bIsOwned: H } = (0, v.ZJ)(c),
            ne = H && !C;
          if (_ && L && L.item_type == T.c6.qI && L.appid)
            return (0, t.jsx)(s.E, { appid: L.appid, bIsMuted: k });
          if (j) return null;
          const Z = !!(H && S);
          return (0, t.jsx)(o.q, {
            id: c,
            bHidePrice: B,
            bShowInLibraryInsteadOfPrice: Z,
            bHidePlatforms: X,
            creatorAccountID: b,
            bShowName: a.bShowName,
            onlyOneDiscountPct: q,
            bShowWishlistButton: !!ee,
          });
        }
      },
      33924: (w) => {
        w.exports = {
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
      91291: (w) => {
        w.exports = {
          "duration-app-launch": "800ms",
          narrowWidth: "500px",
          TwoWidthCtn: "_49thIpYeG08pUfNc1x_w9",
          TwoWidthCapsule: "_78Qv2C95AM2DNCuLD5o8U",
          TwoWidthSideInfo: "_2qz5D65VkY796Xw-al9f_a",
          Reason: "_2h0GKAYcXRP10ryZHFn79d",
          StoreSaleItemRelease: "wJ7ZiTc09km2kH4mSsZ9j",
          FadeIn: "_1xh0S-u1cc7_ADm8OLsN-i",
          fadeIn: "cEYXuP-T4izqJqayIpH0D",
        };
      },
    },
  ]);
})();
