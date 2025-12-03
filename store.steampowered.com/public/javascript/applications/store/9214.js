/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
"use strict";
(self.webpackChunkstore = self.webpackChunkstore || []).push([
  [9214],
  {
    17690: (e, t, i) => {
      i.d(t, { IU: () => u, by: () => c, sc: () => _ });
      var n = i(78327),
        r = i(85044),
        s = i(81393),
        a = i(95679);
      const _ = 0,
        l = "061818254b2c99ac49e6626adb128ed1282a392f",
        u = 120;
      class c {
        m_unAppID;
        m_bInitialized = !1;
        m_strName;
        m_strIconURL;
        m_dtUpdatedFromServer;
        m_eAppType;
        constructor(e) {
          this.m_unAppID = e;
        }
        get appid() {
          return this.m_unAppID;
        }
        get is_initialized() {
          return this.m_bInitialized;
        }
        get is_valid() {
          return this.m_bInitialized && !!this.m_strName;
        }
        get name() {
          return this.m_strName;
        }
        get icon_url_no_default() {
          return this.m_strIconURL && this.BuildAppURL(this.m_strIconURL, l);
        }
        get icon_url() {
          return this.BuildAppURL(this.m_strIconURL, l);
        }
        get time_updated_from_server() {
          return this.m_dtUpdatedFromServer;
        }
        get apptype() {
          return this.m_eAppType;
        }
        BIsApplicationOrTool() {
          return (
            this.apptype == a.Td.k_EAppTypeTool ||
            this.apptype == a.Td.k_EAppTypeApplication
          );
        }
        BuildAppURL(e, t) {
          return e
            ? n.TS.MEDIA_CDN_COMMUNITY_URL +
                "images/apps/" +
                this.appid +
                "/" +
                e +
                ".jpg"
            : (0, r.t)(t);
        }
        DeserializeFromMessage(e) {
          (this.m_bInitialized = !0),
            (this.m_strName = e.name()),
            (this.m_strIconURL = e.icon()),
            (this.m_dtUpdatedFromServer = new Date()),
            (this.m_eAppType = e.app_type());
        }
        DeserializeFromAppOverview(e) {
          e.icon_hash() && e.app_type() != a.Td.k_EAppTypeShortcut
            ? ((this.m_bInitialized = !0),
              (this.m_strName = e.display_name()),
              (this.m_strIconURL = e.icon_hash()),
              (this.m_dtUpdatedFromServer = new Date()),
              (this.m_eAppType = e.app_type()))
            : (this.m_bInitialized = !1);
        }
        DeserializeFromCacheObject(e) {
          try {
            (this.m_strName = e.strName),
              (this.m_strIconURL = e.strIconURL),
              (this.m_dtUpdatedFromServer = new Date(e.strUpdatedFromServer)),
              (this.m_eAppType = e.eAppType),
              (this.m_bInitialized = !0);
          } catch {}
        }
        SerializeToCacheObject() {
          return (
            (0, s.wT)(
              this.m_bInitialized,
              "Attempting to serialize an uninitialized AppInfo object for caching!",
            ),
            this.m_bInitialized
              ? {
                  strName: this.m_strName,
                  strIconURL: this.m_strIconURL,
                  strUpdatedFromServer: this.m_dtUpdatedFromServer.toJSON(),
                  eAppType: this.m_eAppType,
                }
              : null
          );
        }
      }
    },
    85044: (e, t, i) => {
      i.d(t, { d: () => r, t: () => s });
      var n = i(78327);
      const r = "fef49e7fa7e1997310d705b2a6158ff8dc1cdfeb";
      function s(e, t) {
        let i = ".jpg";
        (e && "0000000000000000000000000000000000000000" !== e) || (e = r),
          44 == e.length && ((i = e.substr(-4)), (e = e.substr(0, 40)));
        let s = n.TS.AVATAR_BASE_URL;
        return (
          s ||
            ((s = n.TS.MEDIA_CDN_COMMUNITY_URL + "images/avatars/"),
            (s += e.substr(0, 2) + "/")),
          (s += e),
          t && "small" != t && (s += "_" + t),
          (s += i),
          s
        );
      }
    },
    55263: (e, t, i) => {
      i.d(t, {
        G6: () => o,
        Gg: () => m,
        MS: () => f,
        N4: () => n,
        Ow: () => p,
        YM: () => g,
        mZ: () => h,
        t7: () => d,
        zX: () => S,
      });
      var n,
        r = i(41735),
        s = i.n(r),
        a = i(90626),
        _ = i(37085),
        l = i(15161),
        u = i(84933),
        c = i(82097);
      function o(e, t, i, r) {
        const l = (0, a.useRef)(void 0),
          o = (0, a.useRef)(void 0),
          d = (0, u.CH)();
        l.current = e;
        const [p, m] = (0, a.useState)(void 0),
          {
            include_assets: h,
            include_release: I,
            include_platforms: S,
            include_all_purchase_options: f,
            include_screenshots: g,
            include_trailers: A,
            include_ratings: v,
            include_tag_count: k,
            include_reviews: b,
            include_basic_info: U,
            include_supported_languages: y,
            include_full_description: T,
            include_included_items: C,
            include_assets_without_overrides: E,
            apply_user_filters: R,
            include_links: L,
          } = i;
        if (
          ((0, a.useEffect)(() => {
            const i = {
              include_assets: h,
              include_release: I,
              include_platforms: S,
              include_all_purchase_options: f,
              include_screenshots: g,
              include_trailers: A,
              include_ratings: v,
              include_tag_count: k,
              include_reviews: b,
              include_basic_info: U,
              include_supported_languages: y,
              include_full_description: T,
              include_included_items: C,
              include_assets_without_overrides: E,
              apply_user_filters: R,
              include_links: L,
            };
            let n = null;
            return (
              !e ||
                e < 0 ||
                c.A.Get().BHasStoreItem(e, t, i) ||
                (void 0 !== p && r && r == o.current) ||
                (r !== o.current && (m(void 0), (o.current = r)),
                (n = s().CancelToken.source()),
                c.A.Get()
                  .QueueStoreItemRequest(e, t, i)
                  .then((t) => {
                    n?.token.reason ||
                      l.current !== e ||
                      m(t == _.d.k_EResultOK),
                      d();
                  })),
              () => n?.cancel("useStoreItemCache: unmounting")
            );
          }, [e, t, r, p, h, I, S, f, g, A, v, k, b, U, y, T, C, E, R, L, d]),
          !e)
        )
          return [null, n.k_EStoreItemCacheState_Unavailable];
        if (!1 === p) return [void 0, n.k_EStoreItemCacheState_Unavailable];
        if (c.A.Get().BIsStoreItemMissing(e, t))
          return [void 0, n.k_EStoreItemCacheState_Unavailable];
        if (!c.A.Get().BHasStoreItem(e, t, i))
          return [void 0, n.k_EStoreItemCacheState_Loading];
        const G = c.A.Get().GetStoreItemWithLegacyVisibilityCheck(e, t);
        return G
          ? [G, n.k_EStoreItemCacheState_Found]
          : [null, n.k_EStoreItemCacheState_Unavailable];
      }
      function d(e, t, i) {
        return o(e, l.c6.k_EStoreItemType_App, t, i);
      }
      function p(e, t, i) {
        return o(e, l.c6.k_EStoreItemType_Bundle, t, i);
      }
      function m(e, t, i) {
        return o(e, l.c6.k_EStoreItemType_Package, t, i);
      }
      function h(e, t, i) {
        const [n, r] = o(e, t, i);
        let s;
        n?.GetStoreItemType() != l.c6.k_EStoreItemType_Package ||
          n.GetAssets()?.GetHeaderURL() ||
          1 != n?.GetIncludedAppIDs().length ||
          (s = n.GetIncludedAppIDs()[0]);
        const [a, _] = d(s, i);
        return s && a?.BIsVisible() ? [a, _] : [n, r];
      }
      function I(e, t, i, r) {
        const _ = (0, u.CH)(),
          {
            include_assets: l,
            include_release: o,
            include_platforms: d,
            include_all_purchase_options: p,
            include_screenshots: m,
            include_trailers: h,
            include_ratings: I,
            include_tag_count: S,
            include_reviews: f,
            include_basic_info: g,
            include_supported_languages: A,
            include_full_description: v,
            include_included_items: k,
            include_assets_without_overrides: b,
            apply_user_filters: U,
            include_links: y,
          } = i;
        if (
          ((0, a.useEffect)(() => {
            if (!e || 0 == e.length) return;
            const i = {
                include_assets: l,
                include_release: o,
                include_platforms: d,
                include_all_purchase_options: p,
                include_screenshots: m,
                include_trailers: h,
                include_ratings: I,
                include_tag_count: S,
                include_reviews: f,
                include_basic_info: g,
                include_supported_languages: A,
                include_full_description: v,
                include_included_items: k,
                include_assets_without_overrides: b,
                apply_user_filters: U,
                include_links: y,
              },
              n = e.filter(
                (e) =>
                  !(
                    c.A.Get().BHasStoreItem(e, t, i) ||
                    c.A.Get().BIsStoreItemMissing(e, t)
                  ),
              );
            if (0 == n.length) return;
            const r = s().CancelToken.source(),
              a = n.map((e) => c.A.Get().QueueStoreItemRequest(e, t, i));
            return (
              Promise.all(a).then(() => {
                r.token.reason || _();
              }),
              () => r.cancel("useStoreItemCacheMultiplePackages: unmounting")
            );
          }, [e, t, r, _, l, o, d, p, m, h, I, S, f, g, A, v, k, b, U, y]),
          !e)
        )
          return n.k_EStoreItemCacheState_Unavailable;
        if (
          !e.every(
            (e) =>
              c.A.Get().BHasStoreItem(e, t, i) ||
              c.A.Get().BIsStoreItemMissing(e, t),
          )
        )
          return n.k_EStoreItemCacheState_Loading;
        return e.every((e) =>
          c.A.Get().GetStoreItemWithLegacyVisibilityCheck(e, t),
        )
          ? n.k_EStoreItemCacheState_Found
          : n.k_EStoreItemCacheState_Unavailable;
      }
      function S(e, t, i) {
        return I(e, l.c6.k_EStoreItemType_App, t, i);
      }
      function f(e, t, i) {
        return I(e, l.c6.k_EStoreItemType_Bundle, t, i);
      }
      function g() {
        a.useEffect(
          () => (
            c.A.Get().SetReturnUnavailableItems(!0),
            () => c.A.Get().SetReturnUnavailableItems(!1)
          ),
          [],
        );
      }
      !(function (e) {
        (e[(e.k_EStoreItemCacheState_Loading = 1)] =
          "k_EStoreItemCacheState_Loading"),
          (e[(e.k_EStoreItemCacheState_Unavailable = 2)] =
            "k_EStoreItemCacheState_Unavailable"),
          (e[(e.k_EStoreItemCacheState_Found = 3)] =
            "k_EStoreItemCacheState_Found");
      })(n || (n = {}));
    },
  },
]);
