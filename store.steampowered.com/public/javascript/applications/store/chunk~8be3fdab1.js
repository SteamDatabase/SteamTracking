/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
"use strict";
(self.webpackChunkstore = self.webpackChunkstore || []).push([
  [4922],
  {
    6866: (e, t, a) => {
      a.d(t, { Pm: () => u, d$: () => p, tB: () => m });
      var n = a(90626),
        i = a(15759),
        l = a(55963),
        r = a(32754),
        o = a(61336),
        s = a(78327),
        c = a(45699);
      function d(e, t) {
        return (0, i.p)(
          e,
          (function (e) {
            if (!e) return;
            let t = e?.jsondata?.read_more_link
              ? (0, o.wm)(e.jsondata.read_more_link).toLocaleLowerCase()
              : void 0;
            return t ? [t] : void 0;
          })(t),
        );
      }
      function m(e, t) {
        return e
          ? (e = d(e, t)
              ? (s.TS.IN_CLIENT ? "steam://openurl_external/" : "") +
                (0, i.E)(e)
              : (0, o.NT)(e))
          : "";
      }
      function u(e, t, a) {
        let i = e;
        return (
          i.toLowerCase().startsWith("http") || (i = "http://" + i),
          n.createElement(p, { url: i, event: t }, a || e)
        );
      }
      const p = (e) => {
        const { url: t, event: a, className: s, style: d } = e;
        let u,
          p = (0, l.OZ)(t);
        (p = m(p, a)), (0, i.p)(p) && (u = "noopener nofollow");
        const _ =
          "string" == typeof e.children &&
          e.children.length > 0 &&
          t &&
          !t.startsWith("steam://")
            ? (0, o.Qz)(t)
            : void 0;
        return n.createElement(
          r.Gq,
          { toolTipContent: _, direction: "top" },
          n.createElement(
            c.Ii,
            { className: s, href: p, rel: u, id: e.id, style: d },
            e.children,
          ),
        );
      };
    },
    41399: (e, t, a) => {
      a.d(t, { p: () => G });
      var n = a(45699),
        i = a(76217),
        l = a(23310),
        r = a(20433),
        o = a(78588),
        s = a(39777),
        c = a(7338),
        d = a(75233),
        m = a(90626),
        u = a(18654),
        p = a.n(u),
        _ = a(99956);
      function E(e) {
        const { id: t } = e;
        return t ? m.createElement(f, { id: t }) : null;
      }
      function f(e) {
        const { id: t } = e,
          a = (function (e) {
            const [t, a] = (0, m.useState)(void 0),
              { data: n } = (0, s.J$)(e),
              { data: i } = (0, s.xz)(e),
              l = (0, d.jE)(),
              r = (0, c.eG)();
            return (
              (0, m.useEffect)(() => {
                if (n)
                  if (i && i.length > 0) a(i);
                  else if (n.related_items?.parent_appid) {
                    const e = { appid: n.related_items?.parent_appid };
                    (async () => {
                      const t = await l.fetchQuery((0, s.Ec)(r, e));
                      t && t.length > 0 && a(t);
                    })();
                  }
              }, [r, l, n, i]),
              t
            );
          })(t);
        return a
          ? m.createElement(
              "div",
              { className: p().StoreSaleWidgetTags },
              a.map((e) =>
                m.createElement(_.p, {
                  key: "tag_" + e.tagid,
                  tagid: e.tagid,
                  className: p().AppTag,
                }),
              ),
            )
          : null;
      }
      var S = a(42834),
        h = a(52541),
        g = a(58918),
        v = a(61859);
      const w = 6;
      function C(e) {
        const { id: t, bHideInLibraryApps: a } = e,
          { data: n } = (0, s.J$)(t),
          [i, l] = m.useState(null),
          r = 2 == n?.item_type,
          { data: o } = (0, g.$Y)();
        if (
          (m.useEffect(() => {
            n &&
              (1 == n.item_type || 2 == n.item_type
                ? l(
                    (n.included_appids || [])
                      .filter((e) => !r || !a || !o?.has(e))
                      .map((e) => ({ appid: e })),
                  )
                : console.error(
                    "ContentsPreviewList unexpected store item type: ",
                    n.item_type,
                  ));
          }, [n, a, r, o]),
          !i || 0 == i.length)
        )
          return null;
        const c = i.length;
        let d = (0, v.Yp)("#Sale_ContentPreview", c);
        if (r && n) {
          const e = n.included_appids?.length || 0;
          e != c &&
            (d = (0, v.we)("#Sale_Bundle_CompletePartialSet", e - c, e));
        }
        return m.createElement(
          "div",
          { className: p().BundleContentPreview },
          m.createElement(
            "div",
            { className: p().ContentsCount },
            r &&
              m.createElement(
                "span",
                { className: p().BundleTag },
                (0, v.we)("#AppType_bundle"),
              ),
            d,
          ),
          m.createElement(
            "div",
            { className: p().PreviewCtn },
            i
              .slice(0, w)
              .map((e) =>
                m.createElement(b, { key: `preview${(0, h.ER)(e)}`, id: e }),
              ),
          ),
        );
      }
      function b(e) {
        const { id: t } = e,
          { data: a } = (0, s.f2)(t),
          { data: n } = (0, s.U2)(t);
        if (!a || !n) return null;
        const i = (0, S.b0)(a, "small_capsule");
        return m.createElement(
          r.u,
          { id: t, hoverClassName: p().PreviewItem },
          m.createElement("img", {
            src: i,
            className: p().PreviewImg,
            loading: "lazy",
            alt: n.name || "",
          }),
        );
      }
      var y = a(3740),
        N = a(62349),
        B = a(5309),
        P = a(30020),
        W = a(71420),
        k = a(14987),
        A = a(60014),
        D = a(6866),
        T = a(35380),
        O = a(91822),
        I = a(55963),
        L = a(83284),
        R = a.n(L),
        H = a(52038),
        F = a(78327),
        M = a(79613),
        $ = a(49411),
        z = a(54492),
        Q = a(72237),
        J = a(70300),
        j = a(47235),
        U = a(3661),
        x = a(72860),
        Y = a(88961),
        Z = a(26101),
        q = a(94095);
      function G(e) {
        const {
            id: t,
            type: a,
            bShowDemoButton: c,
            bPreferDemoStorePage: d,
            bHidePrice: u,
            bUseSubscriptionLayout: _,
            bHidePlatforms: f,
            bHideContainedApps: S,
            bAllowTwoLinesForHeader: v,
            bShowReviewSummary: w,
            bShowDeckCompatibilityDialog: b,
            bAutoFocus: B,
            fnOnClickOverride: L,
            bIsMarketingMessage: G,
            bPreferAssetWithoutOverride: X,
          } = e,
          ee = (0, T.zl)(t, a),
          [te, ae] = (0, m.useState)(!1),
          ne = (0, A.n9)(),
          ie = (0, $.w)(),
          { data: le } = (0, s.U2)(ee),
          { data: re } = (0, s.Q_)(ee),
          { data: oe } = (0, s.by)(ee),
          { data: se } = (0, g.$Y)(),
          ce = (0, k._)(ee),
          de = (0, m.useRef)(null),
          [me, ue] = (0, m.useState)(!1),
          pe = (0, F.Qn)();
        (0, m.useEffect)(() => {
          de.current && ue(de.current.offsetWidth < 370);
        }, [de]);
        const _e = (0, m.useMemo)(
            () => (d && le && (0, N.J)(le) ? { appid: (0, N.S)(le)[0] } : ee),
            [d, ee, le],
          ),
          Ee = (0, D.tB)((0, W._)(le, d));
        if (!le) return null;
        const fe = le.included_appids?.length || 0,
          Se = le.included_appids?.filter((e) => se?.has(e))?.length || 0,
          he = 2 == le.item_type && Boolean(re?.must_purchase_as_set),
          ge = (0, I.L3)(ne),
          ve = Boolean(!S && fe > 1),
          we = 1 == le.item_type && 1 == fe,
          Ce = 0 == le.item_type || we,
          be = we && le.appid,
          ye = (0, I.It)(Ee, ne, ie),
          Ne = (0, M.Ae)(),
          Be = le.name || "",
          Pe = (0, P.Nq)(oe, re),
          We = pe || !oe?.is_coming_soon || Pe;
        return m.createElement(
          i.Z,
          {
            className: (0, H.A)({
              [p().StoreSaleWidgetOuterContainer]: !0,
              [p().AllowTwoLineHeader]: v,
              StoreSaleWidgetOuterContainer: !0,
            }),
            onMouseEnter: () => !Ne && ae(!0),
            onMouseLeave: () => !Ne && ae(!1),
            "flow-children": "grid",
            navEntryPreferPosition: l.iU.PREFERRED_CHILD,
            autoFocus: B,
            navKey: "preview_widget_" + (0, h.ER)(ee),
          },
          m.createElement(
            J.oj,
            { appid: Ce && "appid" in ee ? ee.appid : void 0 },
            m.createElement(
              n.ml,
              {
                onClick: G ? L : void 0,
                className: (0, H.A)({
                  [p().StoreSaleWidgetContainer]: !0,
                  [p().SaleItemDefaultCapsuleDisplay]: !0,
                  [p().MarketingMessage]: G,
                }),
                ...(0, x.S)(le, ne, pe, Boolean(d), void 0, L),
                preferredFocus: ve,
              },
              m.createElement(
                "div",
                { className: (0, H.A)(p().StoreSaleWidgetHalfLeft) },
                m.createElement(
                  r.u,
                  { id: _e, fnHoverState: ae },
                  m.createElement(
                    "div",
                    { className: p().StoreSaleWidgetImage },
                    m.createElement(Y.V, { appids: ce }),
                    m.createElement(o.a, {
                      id: ee,
                      imageType: "header",
                      bPreferAssetWithoutOverride: X,
                    }),
                    m.createElement(z.J, { id: ee }),
                    Boolean(ee && te) &&
                      m.createElement(U.m, { id: ee, bIsHoverMode: !0 }),
                  ),
                ),
              ),
              m.createElement(
                "div",
                {
                  className: (0, H.A)(
                    p().StoreSaleWidgetRight,
                    ve ? p().Bundle : "",
                  ),
                },
                Boolean(Ce && !L) &&
                  m.createElement(Z.EP, {
                    id: ee,
                    classOverride: (0, H.A)(
                      R().WishlistButtonNotTop,
                      "WishlistButton",
                    ),
                    snr: ge,
                  }),
                m.createElement(
                  "div",
                  { className: p().TitleCtn },
                  m.createElement(
                    "a",
                    {
                      href: L ? void 0 : ye,
                      target: F.TS.IN_CLIENT ? void 0 : "_blank",
                      onClick: L,
                    },
                    m.createElement(
                      "div",
                      {
                        className: (0, H.A)(
                          p().StoreSaleWidgetTitle,
                          "StoreSaleWidgetTitle",
                        ),
                      },
                      Be,
                    ),
                  ),
                ),
                m.createElement(E, { id: ee }),
                m.createElement(
                  "div",
                  { className: p().WidgetReleaseDateAndPlatformCtn, ref: de },
                  Ce && m.createElement(K, { id: ee }),
                  !f &&
                    ee &&
                    m.createElement(
                      m.Fragment,
                      null,
                      m.createElement(Q.Q, { id: ee, bMinimizePlatforms: me }),
                      Boolean(b && 0 == le.item_type) &&
                        m.createElement(O.kk, {
                          className: p().DeckCompatIcon,
                          id: ee,
                        }),
                    ),
                ),
                w &&
                  ee &&
                  m.createElement(
                    "div",
                    { className: p().ReviewScores },
                    m.createElement(Z.Jz, { id: ee }),
                  ),
                ve &&
                  ee &&
                  m.createElement(C, {
                    id: ee,
                    bHideInLibraryApps: !he && 2 == le.item_type && Se < fe,
                  }),
                Boolean(Ce) && m.createElement(V, { id: ee }),
                Boolean(!L)
                  ? m.createElement(
                      m.Fragment,
                      null,
                      _ && Ce && be
                        ? m.createElement(j.E, {
                            appid: be,
                            bIsMuted: Boolean(te),
                          })
                        : m.createElement(q.w, {
                            id: ee,
                            bShowDemoButton: c,
                            bHidePrice: u,
                            bHideWishlistButton: We,
                            bShowDeckCompatibilityDialog: b,
                          }),
                    )
                  : m.createElement(
                      "div",
                      { className: p().StoreActionWidgetContainer },
                      m.createElement(
                        "div",
                        { className: p().StoreSalePriceActionWidgetContainer },
                        m.createElement(y.N, { id: ee }),
                      ),
                    ),
                m.createElement(
                  "div",
                  { className: p().StoreSaleWidgetBgTint },
                  m.createElement(o.a, {
                    id: ee,
                    bPreferAssetWithoutOverride: X,
                    imageType: "header",
                  }),
                ),
              ),
            ),
          ),
          Boolean(e.strReason && e.strReason.length > 0) &&
            m.createElement(
              "div",
              { className: p().RecommendationReason },
              e.strReason,
            ),
        );
      }
      function K(e) {
        const { id: t } = e,
          { data: a } = (0, s.by)(t);
        return a
          ? m.createElement(
              "div",
              { className: p().StoreSaleWidgetRelease },
              (0, B.CC)(a),
            )
          : null;
      }
      function V(e) {
        const { id: t } = e,
          { data: a } = (0, s.U2)(t),
          { data: n } = (0, s.Q_)(t),
          { data: i } = (0, s.wl)(t),
          { data: l } = (0, g.$Y)();
        if (!(a && i && i.short_description && l)) return null;
        const r = n?.discount_pct || 0,
          o = a.included_appids?.length || 0,
          c = a.included_appids?.filter((e) => l?.has(e))?.length || 0;
        let d = i.short_description;
        const u = 1 == a.item_type && 1 == o,
          _ = 2 == a.item_type && Boolean(n?.must_purchase_as_set);
        return (
          (2 == a.item_type || (1 == a.item_type && !u)) &&
            (d =
              !_ && c > 0 && c < o
                ? (0, v.we)("#Sale_Bundle_CompletePartialSet", c, o)
                : r > 0
                  ? (0, v.we)("#Sale_BundleSave_WithDiscount", r, o)
                  : (0, v.we)("#Sale_BundleSave", o)),
          m.createElement(
            "div",
            {
              className: (0, H.A)(
                p().StoreSaleWidgetShortDesc,
                "StoreSaleWidgetShortDesc",
              ),
            },
            Boolean(d.startsWith("#") && -1 == d.indexOf(" "))
              ? m.createElement(
                  "span",
                  { className: p().LocalizationSpan },
                  (0, v.oW)(
                    d,
                    m.createElement("i", null),
                    m.createElement("i", null),
                    m.createElement("i", null),
                    m.createElement("i", null),
                  ),
                )
              : d,
          )
        );
      }
    },
    94095: (e, t, a) => {
      a.d(t, { w: () => S });
      var n = a(81886),
        i = a(40807),
        l = a(3740),
        r = a(39777),
        o = a(58918),
        s = a(90626),
        c = a(54906),
        d = a(43976),
        m = a(18654),
        u = a.n(m),
        p = a(26408),
        _ = a(52038),
        E = a(61859),
        f = a(91675);
      function S(e) {
        const {
            id: t,
            bShowDemoButton: a,
            bShowPurchaseOptionsButton: m,
            fnOnPurchaseOptionsClick: S,
            bHidePrice: g,
            bShowDeckCompatibilityDialog: v,
            className: w,
            bShowCartButton: C,
          } = e,
          { data: b } = (0, r.J$)(t),
          { data: y } = (0, r.by)(t),
          { data: N } = (0, r.Q_)(t),
          { bIsOwned: B } = (0, o.ZJ)(t);
        if (!b) return null;
        const P =
            (1 === b.type && !y?.is_coming_soon) ||
            (b.related_items?.demo_appid &&
              b.related_items?.demo_appid.length > 0),
          W = (0, n.vm)(b.type),
          k = a && W && P;
        let A = null;
        if (!B && N?.is_free_to_keep && N?.free_to_keep_ends) {
          const e = N.free_to_keep_ends,
            t = (0, E.we)(
              "#Sale_default_label_Free_Promo_Description_Short",
              (0, E.$z)(e) + " @ " + (0, f.KC)(e, { bForce24HourClock: !1 }),
            );
          A = s.createElement(
            "div",
            { className: u().PurchaseOptionDetails },
            t,
            s.createElement(p.o, {
              tooltip: (0, E.we)("#Sale_default_Tooltip_Free_Promo_Limitation"),
            }),
          );
        }
        return s.createElement(
          "div",
          { className: (0, _.A)(u().StoreActionWidgetContainer, w) },
          A,
          s.createElement(
            "div",
            { className: u().StoreSalePriceActionWidgetContainer },
            Boolean(k) &&
              s.createElement(i.j, { id: t, className: u().Action }),
            Boolean(!g) &&
              1 !== b.type &&
              s.createElement(
                s.Fragment,
                null,
                Boolean(m && !b.is_free) &&
                  s.createElement(h, { fnOnPurchaseOptionsClick: S }),
                Boolean(C && !b.is_free) &&
                  s.createElement(d.h, { id: t, className: "CartBtn" }),
              ),
            Boolean(!g) && s.createElement(l.N, { id: t }),
            Boolean(v) && s.createElement(c.Q8, { id: t }),
          ),
        );
      }
      function h(e) {
        return s.createElement(
          "div",
          { className: u().Action, onClick: e.fnOnPurchaseOptionsClick },
          s.createElement(
            "span",
            null,
            (0, E.we)("#EventDisplay_CallToAction_ShowPurchaseOptions_Button"),
          ),
        );
      }
    },
  },
]);
