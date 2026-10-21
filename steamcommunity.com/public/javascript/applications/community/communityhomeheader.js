/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(() => {
  (self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
    [52092],
    {
      75484: (K, U, a) => {
        "use strict";
        a.r(U), a.d(U, { default: () => J });
        var e = a(7850),
          H = a(90626),
          I = a(18210),
          L = a(84202),
          s = a.n(L),
          x = a(24660),
          h = a(3166),
          N = a(36118),
          c = a(19316),
          o = a(41735),
          m = a.n(o),
          S = a(84676);
        function _() {
          const n = (0, H.useMemo)(
              () => (0, h.Fd)("personalapps", "application_config") || [],
              [],
            ),
            i = (0, H.useMemo)(
              () => (0, h.Fd)("popularapps", "application_config") || [],
              [],
            ),
            u = [...n, ...i];
          return u.length
            ? {
                isLoading: (0, S.zX)(u, { include_assets: !0 }) === S.Sq,
                data: { personalAppIds: n, popularAppIds: i },
              }
            : { isLoading: !1, data: { personalAppIds: n, popularAppIds: i } };
        }
        async function R(n) {
          const i = `${h.TS.COMMUNITY_BASE_URL}actions/SearchApps/${n}`;
          return (await m().get(i)).data;
        }
        var T = a(36707),
          w = a(10142),
          F = a(179),
          Z = a(92757),
          G = a(19298);
        function J() {
          const n = (0, H.useRef)(void 0);
          return (
            (0, H.useEffect)(() => {
              n.current && n.current.TakeFocus();
            }, []),
            (0, e.jsxs)(G.Z, {
              navRef: n,
              className: s().CommunityHomeHeader,
              children: [
                (0, e.jsxs)("div", {
                  className: s().CommunityHomeHeaderTitleSection,
                  children: [
                    (0, e.jsxs)("div", {
                      children: [
                        (0, e.jsx)("div", {
                          className: s().CommunityHomeHeaderTitle,
                          children: (0, I.we)("#Community_Home_Header_Title"),
                        }),
                        (0, e.jsx)("div", {
                          className: s().CommunityHomeHeaderSubtitle,
                          children: (0, I.we)(
                            "#Community_Home_Header_Subtitle",
                          ),
                        }),
                      ],
                    }),
                    (0, e.jsx)(x.Ii, {
                      className: s().AddFriendBtn,
                      href: `${h.TS.COMMUNITY_BASE_URL}search/users/`,
                      children: (0, I.we)(
                        "#Community_Home_Header_AddFriend_Button",
                      ),
                    }),
                  ],
                }),
                (0, e.jsx)(q, {}),
                (0, e.jsx)(P, {}),
              ],
            })
          );
        }
        function q() {
          const [n, i] = (0, H.useState)(""),
            [u, C] = (0, H.useState)([]),
            [p, d] = (0, H.useState)(!1),
            A = _();
          if (A.isLoading) return null;
          const y = async (g) => {
              i(g.target.value);
              const j = await R(g.target.value);
              C(j);
            },
            B = (g) => {
              g.currentTarget.contains(g.relatedTarget) || d(!1);
            },
            E = () => d(!0);
          return (0, e.jsxs)("div", {
            className: s().CommunityHomeHeaderContent,
            children: [
              (0, e.jsxs)(G.Z, {
                className: s().AppHubsCtn,
                children: [
                  (0, e.jsx)(t, {
                    appShortcuts: A.data.personalAppIds,
                    sectionTitle: (0, I.we)(
                      "#Community_Home_Header_GameHubs_ForYou",
                    ),
                    withDivider: A.data.popularAppIds.length > 0,
                  }),
                  (0, e.jsx)(t, {
                    appShortcuts: A.data.popularAppIds,
                    sectionTitle: (0, I.we)(
                      "#Community_Home_Header_GameHubs_Popular",
                    ),
                  }),
                ],
              }),
              (0, e.jsxs)(G.Z, {
                onFocus: E,
                onBlur: B,
                className: s().Search,
                children: [
                  (0, e.jsxs)(G.Z, {
                    className: s().SearchBar,
                    children: [
                      (0, e.jsx)("div", {
                        className: s().InputContainer,
                        children: (0, e.jsx)(c.pd, {
                          onChange: y,
                          value: n,
                          className: s().Input,
                          placeholder: (0, I.we)(
                            "#Community_Home_Header_FindGame_Placeholder",
                          ),
                        }),
                      }),
                      (0, e.jsx)("div", {
                        className: s().SearchIcon,
                        children: (0, e.jsx)(N.eSy, {}),
                      }),
                    ],
                  }),
                  p &&
                    (0, e.jsx)(G.Z, {
                      className: s().SearchResultsCtn,
                      children: u.map((g) =>
                        (0, e.jsx)(
                          x.Ii,
                          {
                            href: `${h.TS.COMMUNITY_BASE_URL}app/${g.appid}`,
                            className: s().SearchResult,
                            children: g.name,
                          },
                          g.appid,
                        ),
                      ),
                    }),
                ],
              }),
            ],
          });
        }
        function t(n) {
          const { appShortcuts: i, sectionTitle: u, withDivider: C } = n;
          return !i || !i.length
            ? null
            : (0, e.jsxs)("div", {
                className: s().AppHubShortcutsCtn,
                children: [
                  (0, e.jsx)("div", {
                    className: s().AppHubTitle,
                    children: u,
                  }),
                  (0, e.jsx)("div", {
                    "flow-children": "row",
                    className: (0, T.A)(
                      s().AppHubShortcutLinks,
                      C ? s().Divider : null,
                    ),
                    children: i.map((p, d) => (0, e.jsx)(r, { appId: p }, d)),
                  }),
                ],
              });
        }
        function r(n) {
          const i = w.A.Get().GetApp(n.appId);
          return i
            ? (0, e.jsx)(x.Ii, {
                className: s().ShortcutLink,
                href: `${h.TS.COMMUNITY_BASE_URL}app/${n.appId}`,
                children: (0, e.jsx)("img", {
                  className: s().ShortcutImage,
                  src: i.GetAssets().GetLibraryCapsuleURL(),
                }),
              })
            : null;
        }
        const l = "subsection",
          f = "browsefilter";
        function P() {
          const n = (0, Z.W6)(),
            i = (0, F.f3)(n, l),
            u = (0, F.f3)(n, f);
          return (0, e.jsxs)("div", {
            children: [
              (0, e.jsx)(v, { activeTab: i, activeSort: u }),
              (0, e.jsx)(b, { activeTab: i, activeSort: u }),
            ],
          });
        }
        function v(n) {
          const { activeTab: i, activeSort: u } = n,
            C = H.useRef(void 0);
          H.useEffect(() => {
            const d = document.getElementById(i);
            if (d && C?.current) {
              const A = d.offsetLeft + d.clientWidth;
              A > window.innerWidth &&
                C.current.scrollBy(A - window.innerWidth, 0);
            }
          }, [C?.current]);
          const p = [
            { label: "#Community_Home_Header_Filter_All", id: "" },
            {
              label: "#Community_Home_Header_Filter_Screenshots",
              id: "screenshots",
            },
            { label: "#Community_Home_Header_Filter_Artwork", id: "images" },
            {
              label: "#Community_Home_Header_Filter_Broadcasts",
              id: "broadcasts",
            },
            { label: "#Community_Home_Header_Filter_Videos", id: "videos" },
            { label: "#Community_Home_Header_Filter_Workshop", id: "workshop" },
            { label: "#Community_Home_Header_Filter_News", id: "news" },
            { label: "#Community_Home_Header_Filter_Guides", id: "guides" },
            { label: "#Community_Home_Header_Filter_Reviews", id: "reviews" },
          ];
          return (0, e.jsx)(G.Z, {
            "flow-children": "row",
            className: s().TabContainer,
            ref: C,
            children: p.map((d, A) => {
              const y = i ? i === d.id : A === 0,
                B = d.id ? `${l}=${d.id}` : "",
                E = u ? `${f}=${u}` : "",
                g = `${h.TS.COMMUNITY_BASE_URL}${E || B ? "?" : ""}${E}${B ? "&" : ""}${B}`;
              return (0, e.jsx)(
                x.Ii,
                {
                  id: d.id,
                  href: g,
                  className: (0, T.A)(s().Tab, y ? s().ActiveTab : null),
                  children: (0, I.we)(d.label),
                },
                d.id,
              );
            }),
          });
        }
        function b(n) {
          const { activeTab: i, activeSort: u } = n,
            C = [
              { label: "#Community_Home_Header_BrowseFilter_Popular", id: "" },
              {
                label: "#Community_Home_Header_BrowseFilter_Recent",
                id: "mostrecent",
              },
            ];
          return (0, e.jsxs)(G.Z, {
            "flow-children": "row",
            className: s().SortContainer,
            children: [
              (0, e.jsx)("div", {
                className: s().SortIcon,
                children: (0, e.jsx)(N.LPs, {}),
              }),
              C.map((p, d) => {
                const A = u ? u === p.id : d === 0,
                  y = i ? `${l}=${i}` : "",
                  B = p.id ? `${f}=${p.id}` : "",
                  E = `${h.TS.COMMUNITY_BASE_URL}${B || y ? "?" : ""}${B}${y ? "&" : ""}${y}`;
                return (0, e.jsx)(
                  x.Ii,
                  {
                    href: E,
                    className: (0, T.A)(s().Sort, A ? s().ActiveSort : null),
                    children: (0, I.we)(p.label),
                  },
                  p.id,
                );
              }),
            ],
          });
        }
      },
      84676: (K, U, a) => {
        "use strict";
        a.d(U, {
          G6: () => S,
          Gg: () => T,
          Sq: () => c,
          eR: () => o,
          ik: () => m,
          mZ: () => w,
          t7: () => _,
          zX: () => Z,
        });
        var e = a(41735),
          H = a.n(e),
          I = a(90626),
          L = a(72604),
          s = a(3367),
          x = a(54963),
          h = a(10142);
        function N(t, r, l = !0) {
          const f = l
              ? CStoreItemCache.k_DataRequest_BasicInfo
              : CStoreItemCache.k_DataRequest_CommonOnly,
            P = l || CStoreItemCache.Get().BHasStoreItem(t, r, f) ? t : null,
            [v, b] = S(P, r, f),
            [n, i] = useState(null),
            [u, C] = S(n, r, f);
          useEffect(() => {
            v?.GetAppType() === EStoreAppType.k_EStoreAppType_Demo &&
              i(v.GetParentAppID());
          }, [v]);
          let p = v?.GetShortDescription()
            ? StripBBCodeTags(v.GetShortDescription())
            : "";
          (!p || p.length === 0) &&
            u &&
            (p = u?.GetShortDescription()
              ? StripBBCodeTags(u.GetShortDescription())
              : "");
          const d = b == m && (!n || C == m);
          return [p, d];
        }
        const c = 1,
          o = 2,
          m = 3;
        function S(t, r, l, f) {
          const P = (0, I.useRef)(void 0),
            v = (0, I.useRef)(void 0),
            b = (0, x.CH)();
          P.current = t;
          const [n, i] = (0, I.useState)(void 0),
            {
              include_assets: u,
              include_release: C,
              include_platforms: p,
              include_all_purchase_options: d,
              include_screenshots: A,
              include_trailers: y,
              include_ratings: B,
              include_tag_count: E,
              include_reviews: g,
              include_basic_info: j,
              include_supported_languages: O,
              include_full_description: $,
              include_included_items: W,
              include_assets_without_overrides: k,
              apply_user_filters: X,
              include_links: M,
              include_extra_details: Q,
              include_optin_registration_tags: Y,
            } = l;
          if (
            ((0, I.useEffect)(() => {
              const D = {
                include_assets: u,
                include_release: C,
                include_platforms: p,
                include_all_purchase_options: d,
                include_screenshots: A,
                include_trailers: y,
                include_ratings: B,
                include_tag_count: E,
                include_reviews: g,
                include_basic_info: j,
                include_supported_languages: O,
                include_full_description: $,
                include_included_items: W,
                include_assets_without_overrides: k,
                apply_user_filters: X,
                include_links: M,
                include_extra_details: Q,
                include_optin_registration_tags: Y,
              };
              let z = null;
              return (
                !t ||
                  t < 0 ||
                  h.A.Get().BHasStoreItem(t, r, D) ||
                  (n !== void 0 && f && f == v.current) ||
                  (f !== v.current && (i(void 0), (v.current = f)),
                  (z = H().CancelToken.source()),
                  h.A.Get()
                    .QueueStoreItemRequest(t, r, D)
                    .then((ee) => {
                      !z?.token.reason && P.current === t && i(ee == L.R), b();
                    })),
                () => z?.cancel("useStoreItemCache: unmounting")
              );
            }, [
              t,
              r,
              f,
              n,
              u,
              C,
              p,
              d,
              A,
              y,
              B,
              E,
              g,
              j,
              O,
              $,
              W,
              k,
              X,
              M,
              Q,
              Y,
              b,
            ]),
            !t)
          )
            return [null, o];
          if (n === !1) return [void 0, o];
          if (h.A.Get().BIsStoreItemMissing(t, r)) return [void 0, o];
          if (!h.A.Get().BHasStoreItem(t, r, l)) return [void 0, c];
          const V = h.A.Get().GetStoreItemWithLegacyVisibilityCheck(t, r);
          return V ? [V, m] : [null, o];
        }
        function _(t, r, l) {
          return S(t, s.c6.qI, r, l);
        }
        function R(t, r, l) {
          return S(t, EStoreItemType.k_EStoreItemType_Bundle, r, l);
        }
        function T(t, r, l) {
          return S(t, s.c6.RD, r, l);
        }
        function w(t, r, l) {
          const [f, P] = S(t, r, l);
          let v;
          f?.GetStoreItemType() == s.c6.RD &&
            !f.GetAssets()?.GetHeaderURL() &&
            f?.GetIncludedAppIDs().length == 1 &&
            (v = f.GetIncludedAppIDs()[0]);
          const [b, n] = _(v, l);
          return v && b?.BIsVisible() ? [b, n] : [f, P];
        }
        function F(t, r, l, f) {
          const P = (0, x.CH)(),
            {
              include_assets: v,
              include_release: b,
              include_platforms: n,
              include_all_purchase_options: i,
              include_screenshots: u,
              include_trailers: C,
              include_ratings: p,
              include_tag_count: d,
              include_reviews: A,
              include_basic_info: y,
              include_supported_languages: B,
              include_full_description: E,
              include_included_items: g,
              include_assets_without_overrides: j,
              apply_user_filters: O,
              include_links: $,
              include_extra_details: W,
              include_optin_registration_tags: k,
            } = l;
          return (
            (0, I.useEffect)(() => {
              if (!t || t.length == 0) return;
              const M = {
                  include_assets: v,
                  include_release: b,
                  include_platforms: n,
                  include_all_purchase_options: i,
                  include_screenshots: u,
                  include_trailers: C,
                  include_ratings: p,
                  include_tag_count: d,
                  include_reviews: A,
                  include_basic_info: y,
                  include_supported_languages: B,
                  include_full_description: E,
                  include_included_items: g,
                  include_assets_without_overrides: j,
                  apply_user_filters: O,
                  include_links: $,
                  include_extra_details: W,
                  include_optin_registration_tags: k,
                },
                Q = t.filter(
                  (D) =>
                    !(
                      h.A.Get().BHasStoreItem(D, r, M) ||
                      h.A.Get().BIsStoreItemMissing(D, r)
                    ),
                );
              if (Q.length == 0) return;
              const Y = H().CancelToken.source(),
                V = Q.map((D) => h.A.Get().QueueStoreItemRequest(D, r, M));
              return (
                Promise.all(V).then(() => {
                  Y.token.reason || P();
                }),
                () => Y.cancel("useStoreItemCacheMultiplePackages: unmounting")
              );
            }, [
              t,
              r,
              f,
              P,
              v,
              b,
              n,
              i,
              u,
              C,
              p,
              d,
              A,
              y,
              B,
              E,
              g,
              j,
              O,
              $,
              W,
              k,
            ]),
            t
              ? t.every(
                  (M) =>
                    h.A.Get().BHasStoreItem(M, r, l) ||
                    h.A.Get().BIsStoreItemMissing(M, r),
                )
                ? t.every((M) =>
                    h.A.Get().GetStoreItemWithLegacyVisibilityCheck(M, r),
                  )
                  ? m
                  : o
                : c
              : o
          );
        }
        function Z(t, r, l) {
          return F(t, s.c6.qI, r, l);
        }
        function G(t, r, l) {
          return F(t, EStoreItemType.k_EStoreItemType_Bundle, r, l);
        }
        function J(t, r, l) {
          return F(t, EStoreItemType.k_EStoreItemType_Package, r, l);
        }
        function q() {
          React.useEffect(
            () => (
              CStoreItemCache.Get().SetReturnUnavailableItems(!0),
              () => CStoreItemCache.Get().SetReturnUnavailableItems(!1)
            ),
            [],
          );
        }
      },
      179: (K, U, a) => {
        "use strict";
        a.d(U, {
          Bm: () => L,
          QD: () => x,
          f3: () => I,
          iV: () => N,
          ip: () => h,
          le: () => s,
        });
        var e = a(90626),
          H = a(92757);
        function I(c, o) {
          let m;
          if (typeof c == "string") m = c;
          else if ("location" in c) m = c.location.search;
          else if ("search" in c) m = c.search;
          else return;
          const S = new URLSearchParams(m.substring(1));
          if (S.has(o)) {
            const _ = S.getAll(o);
            return _[_.length - 1];
          }
        }
        function L(c, o, m, S = !1) {
          const _ = new URLSearchParams(c.location.search.substring(1));
          if (m != null && m != null) {
            if (_.get(o) == m) return;
            _.set(o, m);
          } else {
            if (!_.has(o)) return;
            _.delete(o);
          }
          S
            ? c.replace(`?${_.toString()}`, { ...c.location.state })
            : c.push(`?${_.toString()}`);
        }
        function s(c, o, m) {
          L(c, o, m, !0);
        }
        function x(c, o) {
          const m = (0, H.W6)(),
            S = (0, H.zy)(),
            _ = (0, e.useMemo)(() => {
              const T = I(S.search, c);
              return T != null && T != null
                ? o != null && o != null
                  ? typeof o == "boolean"
                    ? o.constructor(T !== "false")
                    : o.constructor(T)
                  : T
                : o;
            }, [S.search, c, o]),
            R = (0, e.useCallback)(
              (T, w = !1) => {
                L(m, c, T != null && T != null ? String(T) : null, w);
              },
              [m, c],
            );
          return [_, R];
        }
        function h(c, o, m = !1) {
          const S = new URLSearchParams(c.location.search.substring(1));
          for (const _ in o)
            if (o.hasOwnProperty(_)) {
              const R = o[_];
              S.delete(_), R != null && R != null && S.append(_, R);
            }
          m
            ? c.replace(`?${S.toString()}`, { ...c.location.state })
            : c.push(`?${S.toString()}`);
        }
        function N(c, o) {
          h(c, o, !0);
        }
      },
      84202: (K) => {
        K.exports = {
          CommunityHomeHeader: "_1C-zu8dsenPxA1G4fPb6xE",
          CommunityHomeHeaderTitleSection: "_31q4bBxhekoyefz_1Si0p7",
          CommunityHomeHeaderTitle: "_1V0f6-9bCasXuqDwyWopVL",
          CommunityHomeHeaderSubtitle: "_3QCfE7HVkS-jXMupL7Yw1g",
          AddFriendBtn: "iT6jDvjkaGUJBajHTCSwR",
          CommunityHomeHeaderContent: "_2OgY2oJ3f76jG54YDkv50a",
          AppHubsCtn: "O58NjOp-mp1C-Lp7kBnIv",
          Search: "r2myGP0jUBQpGPHfhdmNI",
          SearchBar: "BhYo9QBvxSZkbL835fMMt",
          InputContainer: "_8AoAYdWjlmxqtKLBHQhJ3",
          Input: "_1WV5gMjevy9p73E4rTI8ST",
          SearchIcon: "_2WLXg04_KtraVN3Oor_0Ab",
          SearchResultsCtn: "_23v0AdndBTSyI1M0hE-Ych",
          SearchResult: "_2f5QMmIxd8ttoAZBDPTPbI",
          AppHubShortcutsCtn: "_1BQW_8CTrPdSDSeREni4z5",
          AppHubTitle: "_1cmkhczo0dmSXCxOc_o1wi",
          AppHubShortcutLinks: "XhbenBCaP7IsSqg9LTU0K",
          ShortcutLink: "_12bMm2vWSzxZwD1nawoCDk",
          ShortcutImage: "irepMDTcqg6chiv6s2wpU",
          Divider: "_3sA9tFyrm7NsK9Vq3tR25D",
          TabContainer: "HY3YtM4tUrRbQjB6vZcZD",
          Tab: "_1oAgoNzRfQm9XWHkkgq1n5",
          ActiveTab: "_3Jb_4nYSDCuV7cqWpLbHFP",
          SortContainer: "_16DeiVTD4vxhf_NU37gQmq",
          Sort: "_1sg_EWgXdB6V6BWmPMyt1y",
          ActiveSort: "_3whf2vJwX5vpGwFaOsyA0P",
          SortIcon: "_2g7dImB7FKkKiEYpVTXCWb",
        };
      },
    },
  ]);
})();
