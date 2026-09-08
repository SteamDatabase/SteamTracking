/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
  [2092],
  {
    84202: (e) => {
      e.exports = {
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
    92598: (e, t, n) => {
      "use strict";
      n.r(t), n.d(t, { default: () => g });
      var i = n(7850),
        s = n(90626),
        r = n(61859),
        l = n(84202),
        a = n.n(l),
        c = n(45699),
        o = n(78327),
        u = n(12155),
        d = n(68255),
        _ = n(41735),
        m = n.n(_),
        p = n(55263);
      var h = n(52038),
        f = n(16021),
        S = n(95034),
        v = n(92757),
        H = n(76217);
      function g() {
        const e = (0, s.useRef)(void 0);
        return (
          (0, s.useEffect)(() => {
            e.current && e.current.TakeFocus();
          }, []),
          (0, i.jsxs)(H.Z, {
            navRef: e,
            className: a().CommunityHomeHeader,
            children: [
              (0, i.jsxs)("div", {
                className: a().CommunityHomeHeaderTitleSection,
                children: [
                  (0, i.jsxs)("div", {
                    children: [
                      (0, i.jsx)("div", {
                        className: a().CommunityHomeHeaderTitle,
                        children: (0, r.we)("#Community_Home_Header_Title"),
                      }),
                      (0, i.jsx)("div", {
                        className: a().CommunityHomeHeaderSubtitle,
                        children: (0, r.we)("#Community_Home_Header_Subtitle"),
                      }),
                    ],
                  }),
                  (0, i.jsx)(c.Ii, {
                    className: a().AddFriendBtn,
                    href: `${o.TS.COMMUNITY_BASE_URL}search/users/`,
                    children: (0, r.we)(
                      "#Community_Home_Header_AddFriend_Button",
                    ),
                  }),
                ],
              }),
              (0, i.jsx)(C, {}),
              (0, i.jsx)(w, {}),
            ],
          })
        );
      }
      function C() {
        const [e, t] = (0, s.useState)(""),
          [n, l] = (0, s.useState)([]),
          [_, h] = (0, s.useState)(!1),
          f = (function () {
            const e = (0, s.useMemo)(
                () => (0, o.Fd)("personalapps", "application_config") || [],
                [],
              ),
              t = (0, s.useMemo)(
                () => (0, o.Fd)("popularapps", "application_config") || [],
                [],
              ),
              n = [...e, ...t];
            if (n.length)
              return {
                isLoading: (0, p.zX)(n, { include_assets: !0 }) === p.Sq,
                data: { personalAppIds: e, popularAppIds: t },
              };
            return {
              isLoading: !1,
              data: { personalAppIds: e, popularAppIds: t },
            };
          })();
        if (f.isLoading) return null;
        return (0, i.jsxs)("div", {
          className: a().CommunityHomeHeaderContent,
          children: [
            (0, i.jsxs)(H.Z, {
              className: a().AppHubsCtn,
              children: [
                (0, i.jsx)(b, {
                  appShortcuts: f.data.personalAppIds,
                  sectionTitle: (0, r.we)(
                    "#Community_Home_Header_GameHubs_ForYou",
                  ),
                  withDivider: f.data.popularAppIds.length > 0,
                }),
                (0, i.jsx)(b, {
                  appShortcuts: f.data.popularAppIds,
                  sectionTitle: (0, r.we)(
                    "#Community_Home_Header_GameHubs_Popular",
                  ),
                }),
              ],
            }),
            (0, i.jsxs)(H.Z, {
              onFocus: () => h(!0),
              onBlur: (e) => {
                e.currentTarget.contains(e.relatedTarget) || h(!1);
              },
              className: a().Search,
              children: [
                (0, i.jsxs)(H.Z, {
                  className: a().SearchBar,
                  children: [
                    (0, i.jsx)("div", {
                      className: a().InputContainer,
                      children: (0, i.jsx)(d.pd, {
                        onChange: async (e) => {
                          t(e.target.value);
                          const n = await (async function (e) {
                            const t = `${o.TS.COMMUNITY_BASE_URL}actions/SearchApps/${e}`;
                            return (await m().get(t)).data;
                          })(e.target.value);
                          l(n);
                        },
                        value: e,
                        className: a().Input,
                        placeholder: (0, r.we)(
                          "#Community_Home_Header_FindGame_Placeholder",
                        ),
                      }),
                    }),
                    (0, i.jsx)("div", {
                      className: a().SearchIcon,
                      children: (0, i.jsx)(u.eSy, {}),
                    }),
                  ],
                }),
                _ &&
                  (0, i.jsx)(H.Z, {
                    className: a().SearchResultsCtn,
                    children: n.map((e) =>
                      (0, i.jsx)(
                        c.Ii,
                        {
                          href: `${o.TS.COMMUNITY_BASE_URL}app/${e.appid}`,
                          className: a().SearchResult,
                          children: e.name,
                        },
                        e.appid,
                      ),
                    ),
                  }),
              ],
            }),
          ],
        });
      }
      function b(e) {
        const { appShortcuts: t, sectionTitle: n, withDivider: s } = e;
        return t && t.length
          ? (0, i.jsxs)("div", {
              className: a().AppHubShortcutsCtn,
              children: [
                (0, i.jsx)("div", { className: a().AppHubTitle, children: n }),
                (0, i.jsx)("div", {
                  "flow-children": "row",
                  className: (0, h.A)(
                    a().AppHubShortcutLinks,
                    s ? a().Divider : null,
                  ),
                  children: t.map((e, t) => (0, i.jsx)(I, { appId: e }, t)),
                }),
              ],
            })
          : null;
      }
      function I(e) {
        const t = f.A.Get().GetApp(e.appId);
        return t
          ? (0, i.jsx)(c.Ii, {
              className: a().ShortcutLink,
              href: `${o.TS.COMMUNITY_BASE_URL}app/${e.appId}`,
              children: (0, i.jsx)("img", {
                className: a().ShortcutImage,
                src: t.GetAssets().GetLibraryCapsuleURL(),
              }),
            })
          : null;
      }
      const A = "subsection",
        y = "browsefilter";
      function w() {
        const e = (0, v.W6)(),
          t = (0, S.f3)(e, A),
          n = (0, S.f3)(e, y);
        return (0, i.jsxs)("div", {
          children: [
            (0, i.jsx)(x, { activeTab: t, activeSort: n }),
            (0, i.jsx)(T, { activeTab: t, activeSort: n }),
          ],
        });
      }
      function x(e) {
        const { activeTab: t, activeSort: n } = e,
          l = s.useRef(void 0);
        s.useEffect(() => {
          const e = document.getElementById(t);
          if (e && (null == l ? void 0 : l.current)) {
            const t = e.offsetLeft + e.clientWidth;
            t > window.innerWidth &&
              l.current.scrollBy(t - window.innerWidth, 0);
          }
        }, [null == l ? void 0 : l.current]);
        return (0, i.jsx)(H.Z, {
          "flow-children": "row",
          className: a().TabContainer,
          ref: l,
          children: [
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
          ].map((e, s) => {
            const l = t ? t === e.id : 0 === s,
              u = e.id ? `${A}=${e.id}` : "",
              d = n ? `${y}=${n}` : "",
              _ = `${o.TS.COMMUNITY_BASE_URL}${d || u ? "?" : ""}${d}${u ? "&" : ""}${u}`;
            return (0, i.jsx)(
              c.Ii,
              {
                id: e.id,
                href: _,
                className: (0, h.A)(a().Tab, l ? a().ActiveTab : null),
                children: (0, r.we)(e.label),
              },
              e.id,
            );
          }),
        });
      }
      function T(e) {
        const { activeTab: t, activeSort: n } = e;
        return (0, i.jsxs)(H.Z, {
          "flow-children": "row",
          className: a().SortContainer,
          children: [
            (0, i.jsx)("div", {
              className: a().SortIcon,
              children: (0, i.jsx)(u.LPs, {}),
            }),
            [
              { label: "#Community_Home_Header_BrowseFilter_Popular", id: "" },
              {
                label: "#Community_Home_Header_BrowseFilter_Recent",
                id: "mostrecent",
              },
            ].map((e, s) => {
              const l = n ? n === e.id : 0 === s,
                u = t ? `${A}=${t}` : "",
                d = e.id ? `${y}=${e.id}` : "",
                _ = `${o.TS.COMMUNITY_BASE_URL}${d || u ? "?" : ""}${d}${u ? "&" : ""}${u}`;
              return (0, i.jsx)(
                c.Ii,
                {
                  href: _,
                  className: (0, h.A)(a().Sort, l ? a().ActiveSort : null),
                  children: (0, r.we)(e.label),
                },
                e.id,
              );
            }),
          ],
        });
      }
    },
    55263: (e, t, n) => {
      "use strict";
      n.d(t, {
        G6: () => m,
        Gg: () => h,
        Sq: () => u,
        eR: () => d,
        ik: () => _,
        mZ: () => f,
        t7: () => p,
        zX: () => v,
      });
      var i = n(41735),
        s = n.n(i),
        r = n(90626),
        l = n(37085),
        a = n(6824),
        c = n(73745),
        o = n(16021);
      const u = 1,
        d = 2,
        _ = 3;
      function m(e, t, n, i) {
        const a = (0, r.useRef)(void 0),
          m = (0, r.useRef)(void 0),
          p = (0, c.CH)();
        a.current = e;
        const [h, f] = (0, r.useState)(void 0),
          {
            include_assets: S,
            include_release: v,
            include_platforms: H,
            include_all_purchase_options: g,
            include_screenshots: C,
            include_trailers: b,
            include_ratings: I,
            include_tag_count: A,
            include_reviews: y,
            include_basic_info: w,
            include_supported_languages: x,
            include_full_description: T,
            include_included_items: j,
            include_assets_without_overrides: B,
            apply_user_filters: N,
            include_links: k,
            include_extra_details: G,
          } = n;
        if (
          ((0, r.useEffect)(() => {
            const n = {
              include_assets: S,
              include_release: v,
              include_platforms: H,
              include_all_purchase_options: g,
              include_screenshots: C,
              include_trailers: b,
              include_ratings: I,
              include_tag_count: A,
              include_reviews: y,
              include_basic_info: w,
              include_supported_languages: x,
              include_full_description: T,
              include_included_items: j,
              include_assets_without_overrides: B,
              apply_user_filters: N,
              include_links: k,
              include_extra_details: G,
            };
            let r = null;
            return (
              !e ||
                e < 0 ||
                o.A.Get().BHasStoreItem(e, t, n) ||
                (void 0 !== h && i && i == m.current) ||
                (i !== m.current && (f(void 0), (m.current = i)),
                (r = s().CancelToken.source()),
                o.A.Get()
                  .QueueStoreItemRequest(e, t, n)
                  .then((t) => {
                    (null == r ? void 0 : r.token.reason) ||
                      a.current !== e ||
                      f(t == l.R),
                      p();
                  })),
              () =>
                null == r ? void 0 : r.cancel("useStoreItemCache: unmounting")
            );
          }, [
            e,
            t,
            i,
            h,
            S,
            v,
            H,
            g,
            C,
            b,
            I,
            A,
            y,
            w,
            x,
            T,
            j,
            B,
            N,
            k,
            G,
            p,
          ]),
          !e)
        )
          return [null, d];
        if (!1 === h) return [void 0, d];
        if (o.A.Get().BIsStoreItemMissing(e, t)) return [void 0, d];
        if (!o.A.Get().BHasStoreItem(e, t, n)) return [void 0, u];
        const R = o.A.Get().GetStoreItemWithLegacyVisibilityCheck(e, t);
        return R ? [R, _] : [null, d];
      }
      function p(e, t, n) {
        return m(e, a.c6.qI, t, n);
      }
      function h(e, t, n) {
        return m(e, a.c6.RD, t, n);
      }
      function f(e, t, n) {
        var i;
        const [s, r] = m(e, t, n);
        let l;
        (null == s ? void 0 : s.GetStoreItemType()) != a.c6.RD ||
          (null === (i = s.GetAssets()) || void 0 === i
            ? void 0
            : i.GetHeaderURL()) ||
          1 != (null == s ? void 0 : s.GetIncludedAppIDs().length) ||
          (l = s.GetIncludedAppIDs()[0]);
        const [c, o] = p(l, n);
        return l && (null == c ? void 0 : c.BIsVisible()) ? [c, o] : [s, r];
      }
      function S(e, t, n, i) {
        const l = (0, c.CH)(),
          {
            include_assets: a,
            include_release: m,
            include_platforms: p,
            include_all_purchase_options: h,
            include_screenshots: f,
            include_trailers: S,
            include_ratings: v,
            include_tag_count: H,
            include_reviews: g,
            include_basic_info: C,
            include_supported_languages: b,
            include_full_description: I,
            include_included_items: A,
            include_assets_without_overrides: y,
            apply_user_filters: w,
            include_links: x,
            include_extra_details: T,
          } = n;
        if (
          ((0, r.useEffect)(() => {
            if (!e || 0 == e.length) return;
            const n = {
                include_assets: a,
                include_release: m,
                include_platforms: p,
                include_all_purchase_options: h,
                include_screenshots: f,
                include_trailers: S,
                include_ratings: v,
                include_tag_count: H,
                include_reviews: g,
                include_basic_info: C,
                include_supported_languages: b,
                include_full_description: I,
                include_included_items: A,
                include_assets_without_overrides: y,
                apply_user_filters: w,
                include_links: x,
                include_extra_details: T,
              },
              i = e.filter(
                (e) =>
                  !(
                    o.A.Get().BHasStoreItem(e, t, n) ||
                    o.A.Get().BIsStoreItemMissing(e, t)
                  ),
              );
            if (0 == i.length) return;
            const r = s().CancelToken.source(),
              c = i.map((e) => o.A.Get().QueueStoreItemRequest(e, t, n));
            return (
              Promise.all(c).then(() => {
                r.token.reason || l();
              }),
              () => r.cancel("useStoreItemCacheMultiplePackages: unmounting")
            );
          }, [e, t, i, l, a, m, p, h, f, S, v, H, g, C, b, I, A, y, w, x, T]),
          !e)
        )
          return d;
        if (
          !e.every(
            (e) =>
              o.A.Get().BHasStoreItem(e, t, n) ||
              o.A.Get().BIsStoreItemMissing(e, t),
          )
        )
          return u;
        return e.every((e) =>
          o.A.Get().GetStoreItemWithLegacyVisibilityCheck(e, t),
        )
          ? _
          : d;
      }
      function v(e, t, n) {
        return S(e, a.c6.qI, t, n);
      }
    },
    95034: (e, t, n) => {
      "use strict";
      n.d(t, {
        Bm: () => l,
        QD: () => c,
        f3: () => r,
        iV: () => u,
        ip: () => o,
        le: () => a,
      });
      var i = n(90626),
        s = n(92757);
      function r(e, t) {
        let n;
        if ("string" == typeof e) n = e;
        else if ("location" in e) n = e.location.search;
        else {
          if (!("search" in e)) return;
          n = e.search;
        }
        const i = new URLSearchParams(n.substring(1));
        if (i.has(t)) {
          const e = i.getAll(t);
          return e[e.length - 1];
        }
      }
      function l(e, t, n, i = !1) {
        const s = new URLSearchParams(e.location.search.substring(1));
        if (null != n && null != n) {
          if (s.get(t) == n) return;
          s.set(t, n);
        } else {
          if (!s.has(t)) return;
          s.delete(t);
        }
        i
          ? e.replace(`?${s.toString()}`, { ...e.location.state })
          : e.push(`?${s.toString()}`);
      }
      function a(e, t, n) {
        l(e, t, n, !0);
      }
      function c(e, t) {
        const n = (0, s.W6)(),
          a = (0, s.zy)(),
          c = (0, i.useMemo)(() => {
            const n = r(a.search, e);
            return null != n && null != n
              ? null != t && null != t
                ? "boolean" == typeof t
                  ? t.constructor("false" !== n)
                  : t.constructor(n)
                : n
              : t;
          }, [a.search, e, t]),
          o = (0, i.useCallback)(
            (t, i = !1) => {
              l(n, e, null != t && null != t ? String(t) : null, i);
            },
            [n, e],
          );
        return [c, o];
      }
      function o(e, t, n = !1) {
        const i = new URLSearchParams(e.location.search.substring(1));
        for (const e in t)
          if (t.hasOwnProperty(e)) {
            const n = t[e];
            i.delete(e), null != n && null != n && i.append(e, n);
          }
        n
          ? e.replace(`?${i.toString()}`, { ...e.location.state })
          : e.push(`?${i.toString()}`);
      }
      function u(e, t) {
        o(e, t, !0);
      }
    },
  },
]);
