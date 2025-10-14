/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
"use strict";
(self.webpackChunkstore = self.webpackChunkstore || []).push([
  [6535],
  {
    17690: (e, t, i) => {
      i.d(t, { IU: () => l, by: () => _, sc: () => u });
      var n = i(78327),
        s = i(85044),
        r = i(81393);
      const u = 0,
        c = "061818254b2c99ac49e6626adb128ed1282a392f",
        l = 120;
      class _ {
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
          return this.m_strIconURL && this.BuildAppURL(this.m_strIconURL, c);
        }
        get icon_url() {
          return this.BuildAppURL(this.m_strIconURL, c);
        }
        get time_updated_from_server() {
          return this.m_dtUpdatedFromServer;
        }
        get apptype() {
          return this.m_eAppType;
        }
        BIsApplicationOrTool() {
          return 4 == this.apptype || 2 == this.apptype;
        }
        BuildAppURL(e, t) {
          return e
            ? n.TS.MEDIA_CDN_COMMUNITY_URL +
                "images/apps/" +
                this.appid +
                "/" +
                e +
                ".jpg"
            : (0, s.t)(t);
        }
        DeserializeFromMessage(e) {
          (this.m_bInitialized = !0),
            (this.m_strName = e.name()),
            (this.m_strIconURL = e.icon()),
            (this.m_dtUpdatedFromServer = new Date()),
            (this.m_eAppType = e.app_type());
        }
        DeserializeFromAppOverview(e) {
          e.icon_hash() && 1073741824 != e.app_type()
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
            (0, r.wT)(
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
      i.d(t, { d: () => s, t: () => r });
      var n = i(78327);
      const s = "fef49e7fa7e1997310d705b2a6158ff8dc1cdfeb";
      function r(e, t) {
        let i = ".jpg";
        (e && "0000000000000000000000000000000000000000" !== e) || (e = s),
          44 == e.length && ((i = e.substr(-4)), (e = e.substr(0, 40)));
        let r = n.TS.AVATAR_BASE_URL;
        return (
          r ||
            ((r = n.TS.MEDIA_CDN_COMMUNITY_URL + "images/avatars/"),
            (r += e.substr(0, 2) + "/")),
          (r += e),
          t && "small" != t && (r += "_" + t),
          (r += i),
          r
        );
      }
    },
    55263: (e, t, i) => {
      i.d(t, {
        G6: () => l,
        Gg: () => d,
        MS: () => h,
        Ow: () => a,
        YM: () => f,
        mZ: () => o,
        t7: () => _,
        zX: () => m,
      });
      var n = i(41735),
        s = i.n(n),
        r = i(90626),
        u = i(84933),
        c = i(82097);
      function l(e, t, i, n) {
        const l = (0, r.useRef)(void 0),
          _ = (0, r.useRef)(void 0),
          a = (0, u.CH)();
        l.current = e;
        const [d, o] = (0, r.useState)(void 0),
          {
            include_assets: p,
            include_release: m,
            include_platforms: h,
            include_all_purchase_options: f,
            include_screenshots: I,
            include_trailers: g,
            include_ratings: A,
            include_tag_count: v,
            include_reviews: S,
            include_basic_info: b,
            include_supported_languages: U,
            include_full_description: y,
            include_included_items: R,
            include_assets_without_overrides: G,
            apply_user_filters: T,
            include_links: L,
          } = i;
        if (
          ((0, r.useEffect)(() => {
            const i = {
              include_assets: p,
              include_release: m,
              include_platforms: h,
              include_all_purchase_options: f,
              include_screenshots: I,
              include_trailers: g,
              include_ratings: A,
              include_tag_count: v,
              include_reviews: S,
              include_basic_info: b,
              include_supported_languages: U,
              include_full_description: y,
              include_included_items: R,
              include_assets_without_overrides: G,
              apply_user_filters: T,
              include_links: L,
            };
            let r = null;
            return (
              !e ||
                e < 0 ||
                c.A.Get().BHasStoreItem(e, t, i) ||
                (void 0 !== d && n && n == _.current) ||
                (n !== _.current && (o(void 0), (_.current = n)),
                (r = s().CancelToken.source()),
                c.A.Get()
                  .QueueStoreItemRequest(e, t, i)
                  .then((t) => {
                    r?.token.reason || l.current !== e || o(1 == t), a();
                  })),
              () => r?.cancel("useStoreItemCache: unmounting")
            );
          }, [e, t, n, d, p, m, h, f, I, g, A, v, S, b, U, y, R, G, T, L, a]),
          !e)
        )
          return [null, 2];
        if (!1 === d) return [void 0, 2];
        if (c.A.Get().BIsStoreItemMissing(e, t)) return [void 0, 2];
        if (!c.A.Get().BHasStoreItem(e, t, i)) return [void 0, 1];
        const z = c.A.Get().GetStoreItemWithLegacyVisibilityCheck(e, t);
        return z ? [z, 3] : [null, 2];
      }
      function _(e, t, i) {
        return l(e, 0, t, i);
      }
      function a(e, t, i) {
        return l(e, 2, t, i);
      }
      function d(e, t, i) {
        return l(e, 1, t, i);
      }
      function o(e, t, i) {
        const [n, s] = l(e, t, i);
        let r;
        1 != n?.GetStoreItemType() ||
          n.GetAssets()?.GetHeaderURL() ||
          1 != n?.GetIncludedAppIDs().length ||
          (r = n.GetIncludedAppIDs()[0]);
        const [u, c] = _(r, i);
        return r && u?.BIsVisible() ? [u, c] : [n, s];
      }
      function p(e, t, i, n) {
        const l = (0, u.CH)(),
          {
            include_assets: _,
            include_release: a,
            include_platforms: d,
            include_all_purchase_options: o,
            include_screenshots: p,
            include_trailers: m,
            include_ratings: h,
            include_tag_count: f,
            include_reviews: I,
            include_basic_info: g,
            include_supported_languages: A,
            include_full_description: v,
            include_included_items: S,
            include_assets_without_overrides: b,
            apply_user_filters: U,
            include_links: y,
          } = i;
        if (
          ((0, r.useEffect)(() => {
            if (!e || 0 == e.length) return;
            const i = {
                include_assets: _,
                include_release: a,
                include_platforms: d,
                include_all_purchase_options: o,
                include_screenshots: p,
                include_trailers: m,
                include_ratings: h,
                include_tag_count: f,
                include_reviews: I,
                include_basic_info: g,
                include_supported_languages: A,
                include_full_description: v,
                include_included_items: S,
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
              u = n.map((e) => c.A.Get().QueueStoreItemRequest(e, t, i));
            return (
              Promise.all(u).then(() => {
                r.token.reason || l();
              }),
              () => r.cancel("useStoreItemCacheMultiplePackages: unmounting")
            );
          }, [e, t, n, l, _, a, d, o, p, m, h, f, I, g, A, v, S, b, U, y]),
          !e)
        )
          return 2;
        if (
          !e.every(
            (e) =>
              c.A.Get().BHasStoreItem(e, t, i) ||
              c.A.Get().BIsStoreItemMissing(e, t),
          )
        )
          return 1;
        return e.every((e) =>
          c.A.Get().GetStoreItemWithLegacyVisibilityCheck(e, t),
        )
          ? 3
          : 2;
      }
      function m(e, t, i) {
        return p(e, 0, t, i);
      }
      function h(e, t, i) {
        return p(e, 2, t, i);
      }
      function f() {
        r.useEffect(
          () => (
            c.A.Get().SetReturnUnavailableItems(!0),
            () => c.A.Get().SetReturnUnavailableItems(!1)
          ),
          [],
        );
      }
    },
    4434: (e, t, i) => {
      i.d(t, { m: () => u });
      var n = i(41735),
        s = i.n(n),
        r = i(90626);
      function u(e) {
        const t = r.useRef(s().CancelToken.source());
        return (
          r.useEffect(() => {
            const i = t.current;
            return () => i.cancel(e ? `${e}: unmounting` : "unmounting");
          }, [e]),
          t.current
        );
      }
    },
  },
]);
