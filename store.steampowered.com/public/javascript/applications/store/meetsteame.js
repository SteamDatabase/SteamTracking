/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkstore = self.webpackChunkstore || []).push([
  [5667],
  {
    91291: (e) => {
      e.exports = {
        TwoWidthCtn: "_49thIpYeG08pUfNc1x_w9",
        TwoWidthCapsule: "_78Qv2C95AM2DNCuLD5o8U",
        TwoWidthSideInfo: "_2qz5D65VkY796Xw-al9f_a",
        Reason: "_2h0GKAYcXRP10ryZHFn79d",
        StoreSaleItemRelease: "wJ7ZiTc09km2kH4mSsZ9j",
      };
    },
    20019: (e, t, a) => {
      "use strict";
      function n(e) {
        switch (e) {
          case 0:
            return "game";
          case 6:
            return "software";
          case 1:
            return "demo";
          case 4:
            return "dlc";
          case 7:
          case 3:
            return "video";
          case 11:
            return "music";
          case 12:
            return "beta";
          case 2:
            return "mod";
        }
        return "invalid";
      }
      a.d(t, { U: () => n });
    },
    46416: (e, t, a) => {
      "use strict";
      a.d(t, { J: () => _, W: () => k });
      var n = a(90626),
        r = a(57876),
        o = a(45699),
        s = a(76217),
        l = a(97907),
        i = a(55963),
        c = a(30894),
        m = a(62792),
        p = a(55263),
        u = a(33924),
        d = a(26101),
        E = a(45359),
        b = a(18654),
        P = a.n(b),
        S = a(3661),
        f = a(89274),
        D = a(72860),
        I = a(70300),
        v = a(47235),
        A = a(37076),
        h = a(54492),
        y = a(60014),
        g = a(52038),
        T = a(61859),
        w = a(61336),
        C = a(78327),
        G = a(91291),
        H = a.n(G),
        N = a(99956);
      const _ = "capsule_index_";
      function k(e) {
        const {
            capsule: t,
            bShowParentApp: a,
            elElementToAppendToHover: o,
            index: i,
            navKey: c,
            bHideStoreHover: u,
            onlyOneDiscountPct: E,
            bPreferDemoStorePage: b,
          } = e,
          [S, f] = n.useState(!1),
          [D] = (0, p.G6)(t.id, (0, m.SW)(t.type), r.Xh),
          [v] = (0, p.t7)(a && D?.GetParentAppID(), r.Xh);
        if (!D) return null;
        const A = Boolean(v),
          h = n.createElement(L, {
            ...e,
            info: t,
            bIsHovered: S,
            bHasParentAppToDisplay: A,
            onlyOneDiscountPct: E,
          });
        return n.createElement(
          s.Z,
          {
            className: (0, g.A)({
              [P().OuterCapsuleContainer]: !0,
              [_ + i]: 0 == i,
            }),
            navEntryPreferPosition: l.iU.PREFERRED_CHILD,
            navKey: c,
          },
          n.createElement(
            I.oj,
            { appid: D.GetAppID() },
            Boolean(u)
              ? n.createElement(
                  "div",
                  { onMouseEnter: () => f(!0), onMouseLeave: () => f(!1) },
                  h,
                )
              : n.createElement(
                  d.Qf,
                  {
                    className: P().CapsuleContainer,
                    item: t,
                    elElementToAppend: e.elElementToAppendToHover,
                    bShowDemoButton: e.bShowDemoButton,
                    bPreferDemoStorePage: e.bPreferDemoStorePage,
                    bShowDeckCompatibilityDialog:
                      e.bShowDeckCompatibilityDialog,
                    bHidePrice: e.bHidePrice,
                    bUseSubscriptionLayout: e.bUseSubscriptionLayout,
                    strExtraParams: e.strExtraParams,
                    nCreatorAccountID: e.creatorAccountID,
                  },
                  h,
                ),
            Boolean(o) && n.createElement("div", null, o),
          ),
          A &&
            n.createElement(B, {
              strExtraParams: e.strExtraParams,
              parentStoreItem: v,
              childAppType: D.GetAppType(),
              bPreferDemoStorePage: b,
            }),
        );
      }
      function B(e) {
        const {
            strExtraParams: t,
            parentStoreItem: a,
            childAppType: s,
            bPreferDemoStorePage: l,
          } = e,
          i = (0, y.n9)(),
          c = (0, C.Qn)();
        return n.createElement(
          o.ml,
          { className: P().CapsuleParentInfo, ...(0, D.S)(a, i, c, l, t) },
          n.createElement(
            I.oj,
            { appid: a.GetAppID() },
            n.createElement(
              "div",
              { className: P().ParentType },
              (0, T.we)(
                11 == s
                  ? "#SalePage_ParentApp_SoundTrack"
                  : "#SalePage_ParentApp_DLC",
              ),
            ),
            n.createElement(
              A.u,
              { type: "app", id: a.GetAppID(), strExtraParams: t },
              n.createElement("img", {
                loading: "lazy",
                className: u.AppCapsuleImage,
                alt: a.GetName(),
                src: a.GetAssets().GetSmallCapsuleURL(),
                ...(0, r.Jw)(),
              }),
            ),
          ),
        );
      }
      function L(e) {
        const {
            info: t,
            bHideStatusBanners: a,
            strExtraParams: s,
            index: l,
            imageType: c,
            bHasParentAppToDisplay: u,
            bIsHovered: d,
            strDoubleCapsuleMessage: b,
            bPreferDemoStorePage: P,
          } = e,
          [D] = (0, p.G6)(t.id, (0, m.SW)(t.type), r.Xh),
          I = (0, y.n9)(),
          v = (0, n.useMemo)(() => D?.GetIncludedAppIDsOrSelf(), [D]);
        if (!D) return null;
        const A = (0, w.NT)(
          (0, i.wJ)(`${D.GetStorePageURL(P)}${s ? `?${s}` : ""}`, I),
        );
        let T;
        "overrideNavigation" in t &&
          (T = (e) => (
            t.overrideNavigation(e), e.preventDefault(), e.stopPropagation(), !1
          ));
        const C = Boolean(b);
        return n.createElement(
          n.Fragment,
          null,
          n.createElement(
            o.Ii,
            {
              href: T ? null : A,
              style: { display: "block", cursor: "pointer" },
              preferredFocus: u,
              onClick: T,
            },
            n.createElement(
              "div",
              { className: (0, g.A)({ [H().TwoWidthCtn]: C }) },
              n.createElement(
                "div",
                { className: (0, g.A)({ [H().TwoWidthCapsule]: C }) },
                n.createElement(f.V, { appids: v, hide_status_banners: a }),
                n.createElement(E.aU, { imageType: c, info: t }),
                n.createElement(h.S, {
                  eDeckCompatibilityCategory:
                    D?.GetPlatforms()?.steam_deck_compat_category,
                }),
                Boolean(d) && n.createElement(S.m, { appInfo: t }),
              ),
              C &&
                n.createElement(
                  "div",
                  { className: H().TwoWidthSideInfo },
                  n.createElement("div", { className: H().Reason }, b),
                  n.createElement(
                    "div",
                    { className: H().StoreSaleItemRelease },
                    n.createElement(
                      "span",
                      null,
                      D.GetFormattedSteamReleaseDate(),
                    ),
                  ),
                  n.createElement(N.n, {
                    bHideTitle: !0,
                    rgTagIDs: D.GetTagIDs(),
                    instanceNum: l,
                  }),
                ),
            ),
          ),
          n.createElement(O, { ...e }),
        );
      }
      function O(e) {
        const {
            info: t,
            bHidePriceIfOwned: a,
            bHideStatusBanners: o,
            bUseSubscriptionLayout: s,
            elElementToAppendToHover: l,
            bHidePrice: i,
            bHidePlatforms: u,
            creatorAccountID: d,
            bIsHovered: b,
            onlyOneDiscountPct: P,
            strDoubleCapsuleMessage: S,
          } = e,
          [f] = (0, p.G6)(t.id, (0, m.SW)(t.type), r.Xh),
          D =
            f &&
            f?.GetIncludedAppIDsOrSelf().every((e) => c.Fm.Get().BOwnsApp(e)),
          I = D && !o;
        if (s && 0 == f?.GetStoreItemType())
          return n.createElement(v.E, { appid: f.GetAppID(), bIsMuted: b });
        if (l) return null;
        const A = D && a,
          h = I;
        return n.createElement(E.qn, {
          info: t,
          bShowAsMuted: h,
          bHidePrice: i,
          bShowInLibraryInsteadOfPrice: A,
          bHidePlatforms: u,
          creatorAccountID: d,
          bShowName: e.bShowName,
          onlyOneDiscountPct: P,
          bShowWishlistButton: Boolean(S),
        });
      }
    },
    51219: (e, t, a) => {
      "use strict";
      a.r(t), a.d(t, { default: () => P });
      var n = a(82715),
        r = a(22837),
        o = a(2160),
        s = a(8527),
        l = a(90626),
        i = a(92757),
        c = a(60746),
        m = a(91254),
        p = a(30756),
        u = a(77156),
        d = a(22797),
        E = a(61859),
        b = a(43068);
      function P(e) {
        const { gid: t } = (0, i.g)(),
          [a, P] = (0, l.useState)(!0);
        if (
          (l.useEffect(() => {
            a &&
              (m.O3.Init(), Promise.all([c.KN.InitGlobal()]).then(() => P(!1)));
          }, [a]),
          a)
        )
          return l.createElement(d.t, {
            string: (0, E.we)("#Loading"),
            position: "center",
          });
        const S = m.O3.GetClanEventModel(t);
        return l.createElement(
          n.tH,
          null,
          !S.BIsUnlistedEvent() &&
            l.createElement(
              "div",
              null,
              "NOTE: Event needs to be published in unlisted mode for Steam partners to see it. Admin account bypass this check",
            ),
          l.createElement(u.jA, {
            lang: (0, r.sf)(s.TS.LANGUAGE),
            event: S,
            adminPanel:
              s.TS.EREALM === o.TU.k_ESteamRealmChina
                ? l.createElement(b.P, { eventModel: S })
                : l.createElement(p.g, { eventModel: S }),
          }),
        );
      }
    },
  },
]);
