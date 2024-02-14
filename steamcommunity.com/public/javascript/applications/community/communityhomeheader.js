/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
  [312],
  {
    75399: (e) => {
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
    13043: (e, t, n) => {
      "use strict";
      n.d(t, { p: () => m });
      var a = n(85556),
        r = n(47427),
        o = n(82493),
        i = n(4030),
        c = n(20417),
        s = n(37563),
        l = n(35643);
      function m(e) {
        const { children: t, navTreeRef: n } = e,
          m = (0, a._T)(e, ["children", "navTreeRef"]),
          u = r.useRef(),
          d = (0, c.BE)(u, n),
          p = (0, s.id)(),
          _ = window.__virtual_keyboard_client;
        if (p) {
          const e = window.__nav_tree_root;
          return r.createElement(
            o.Fe,
            Object.assign({}, m, {
              navTreeRef: d,
              secondary: !0,
              parentEmbeddedNavTree: e,
            }),
            r.createElement(
              l.o5,
              { factory: _ },
              r.createElement(i.O, null, t),
            ),
          );
        }
        return r.createElement(r.Fragment, null, t);
      }
    },
    71472: (e, t, n) => {
      "use strict";
      n.d(t, { Ar: () => s, Wo: () => l, i9: () => c, ks: () => o });
      var a = n(47427),
        r = n(8285);
      function o(e, t) {
        let n;
        "string" == typeof e
          ? (n = e)
          : "location" in e
          ? (n = e.location.search)
          : "search" in e && (n = e.search);
        const a = new URLSearchParams(n.substring(1));
        if (a.has(t)) {
          const e = a.getAll(t);
          return e[e.length - 1];
        }
      }
      const i = (e) => null != e;
      function c(e, t, n, a = !1) {
        const r = new URLSearchParams(e.location.search.substring(1));
        r.delete(t),
          i(n) && r.append(t, n),
          a
            ? e.replace(`?${r.toString()}`, Object.assign({}, e.location.state))
            : e.push(`?${r.toString()}`);
      }
      function s(e, t) {
        const n = (0, r.k6)(),
          s = (0, r.TH)(),
          l = (0, a.useMemo)(() => {
            const n = o(s.search, e);
            return i(n)
              ? i(t)
                ? "boolean" == typeof t
                  ? t.constructor("false" !== n)
                  : t.constructor(n)
                : n
              : t;
          }, [s.search, e, t]),
          m = (0, a.useCallback)(
            (t) => {
              c(n, e, i(t) ? String(t) : null);
            },
            [n, e],
          );
        return [l, m];
      }
      function l(e, t, n = !1) {
        const a = new URLSearchParams(e.location.search.substring(1));
        for (const e in t)
          if (t.hasOwnProperty(e)) {
            const n = t[e];
            a.delete(e), i(n) && a.append(e, n);
          }
        n
          ? e.replace(`?${a.toString()}`, Object.assign({}, e.location.state))
          : e.push(`?${a.toString()}`);
      }
    },
    11134: (e, t, n) => {
      "use strict";
      n.r(t), n.d(t, { default: () => E });
      var a = n(85556),
        r = n(47427),
        o = n(31846),
        i = n(75399),
        c = n.n(i),
        s = n(82493),
        l = n(37563),
        m = n(62613),
        u = n(1485),
        d = n(80751),
        p = n.n(d),
        _ = n(80886);
      var h = n(13129),
        S = n(34310),
        H = n(71472),
        f = n(8285),
        v = n(91618),
        b = n(13043),
        C = n(41130);
      function E() {
        const e = (0, C.L)(),
          t = (0, r.useRef)();
        return (
          (0, r.useEffect)(() => {
            t.current && t.current.TakeFocus();
          }, []),
          r.createElement(
            b.p,
            { navID: "CommunityHomeHeader", NavigationManager: e },
            r.createElement(
              v.s,
              { navRef: t, className: c().CommunityHomeHeader },
              r.createElement(
                "div",
                { className: c().CommunityHomeHeaderTitleSection },
                r.createElement(
                  "div",
                  null,
                  r.createElement(
                    "div",
                    { className: c().CommunityHomeHeaderTitle },
                    (0, o.Xx)("#Community_Home_Header_Title"),
                  ),
                  r.createElement(
                    "div",
                    { className: c().CommunityHomeHeaderSubtitle },
                    (0, o.Xx)("#Community_Home_Header_Subtitle"),
                  ),
                ),
                r.createElement(
                  s.IS,
                  {
                    className: c().AddFriendBtn,
                    href: `${l.De.COMMUNITY_BASE_URL}search/users/`,
                  },
                  (0, o.Xx)("#Community_Home_Header_AddFriend_Button"),
                ),
              ),
              r.createElement(y, null),
              r.createElement(w, null),
            ),
          )
        );
      }
      function y() {
        const [e, t] = (0, r.useState)(""),
          [n, i] = (0, r.useState)([]),
          [d, h] = (0, r.useState)(!1),
          S = (function () {
            const e = (0, r.useMemo)(
                () => (0, l.ip)("personalapps", "application_config") || [],
                [],
              ),
              t = (0, r.useMemo)(
                () => (0, l.ip)("popularapps", "application_config") || [],
                [],
              ),
              n = [...e, ...t];
            if (n.length)
              return {
                isLoading: 1 === (0, _.wZ)(n, { include_assets: !0 }),
                data: { personalAppIds: e, popularAppIds: t },
              };
            return {
              isLoading: !1,
              data: { personalAppIds: e, popularAppIds: t },
            };
          })();
        if (S.isLoading) return null;
        return r.createElement(
          "div",
          { className: c().CommunityHomeHeaderContent },
          r.createElement(
            v.s,
            { className: c().AppHubsCtn },
            r.createElement(g, {
              appShortcuts: S.data.personalAppIds,
              sectionTitle: (0, o.Xx)("#Community_Home_Header_GameHubs_ForYou"),
              withDivider: S.data.popularAppIds.length > 0,
            }),
            r.createElement(g, {
              appShortcuts: S.data.popularAppIds,
              sectionTitle: (0, o.Xx)(
                "#Community_Home_Header_GameHubs_Popular",
              ),
            }),
          ),
          r.createElement(
            v.s,
            {
              onFocus: () => h(!0),
              onBlur: (e) => {
                e.currentTarget.contains(e.relatedTarget) || h(!1);
              },
              className: c().Search,
            },
            r.createElement(
              v.s,
              { className: c().SearchBar },
              r.createElement(
                "div",
                { className: c().InputContainer },
                r.createElement(u.II, {
                  onChange: (e) =>
                    (0, a.mG)(this, void 0, void 0, function* () {
                      t(e.target.value);
                      const n = yield (function (e) {
                        return (0, a.mG)(this, void 0, void 0, function* () {
                          const t = `${l.De.COMMUNITY_BASE_URL}actions/SearchApps/${e}`;
                          return (yield p().get(t)).data;
                        });
                      })(e.target.value);
                      i(n);
                    }),
                  value: e,
                  className: c().Input,
                  placeholder: (0, o.Xx)(
                    "#Community_Home_Header_FindGame_Placeholder",
                  ),
                }),
              ),
              r.createElement(
                "div",
                { className: c().SearchIcon },
                r.createElement(m.YtI, null),
              ),
            ),
            d &&
              r.createElement(
                v.s,
                { className: c().SearchResultsCtn },
                n.map((e) =>
                  r.createElement(
                    s.IS,
                    {
                      href: `${l.De.COMMUNITY_BASE_URL}app/${e.appid}`,
                      key: e.appid,
                      className: c().SearchResult,
                    },
                    e.name,
                  ),
                ),
              ),
          ),
        );
      }
      function g(e) {
        const { appShortcuts: t, sectionTitle: n, withDivider: a } = e;
        return t && t.length
          ? r.createElement(
              "div",
              { className: c().AppHubShortcutsCtn },
              r.createElement("div", { className: c().AppHubTitle }, n),
              r.createElement(
                "div",
                {
                  "flow-children": "row",
                  className: (0, h.Z)(
                    c().AppHubShortcutLinks,
                    a ? c().Divider : null,
                  ),
                },
                t.map((e, t) => r.createElement(T, { key: t, appId: e })),
              ),
            )
          : null;
      }
      function T(e) {
        const t = S.Z.Get().GetApp(e.appId);
        return t
          ? r.createElement(
              s.IS,
              {
                className: c().ShortcutLink,
                href: `${l.De.COMMUNITY_BASE_URL}app/${e.appId}`,
              },
              r.createElement("img", {
                className: c().ShortcutImage,
                src: t.GetAssets().GetLibraryCapsuleURL(),
              }),
            )
          : null;
      }
      const A = "subsection",
        I = "browsefilter";
      function w() {
        const e = (0, f.k6)(),
          t = (0, H.ks)(e, A),
          n = (0, H.ks)(e, I);
        return r.createElement(
          "div",
          null,
          r.createElement(N, { activeTab: t, activeSort: n }),
          r.createElement(k, { activeTab: t, activeSort: n }),
        );
      }
      function N(e) {
        const { activeTab: t, activeSort: n } = e,
          a = r.useRef();
        r.useEffect(() => {
          const e = document.getElementById(t);
          if (e && (null == a ? void 0 : a.current)) {
            const t = e.offsetLeft + e.clientWidth;
            t > window.innerWidth &&
              a.current.scrollBy(t - window.innerWidth, 0);
          }
        }, [null == a ? void 0 : a.current]);
        return r.createElement(
          v.s,
          { "flow-children": "row", className: c().TabContainer, ref: a },
          [
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
          ].map((e, a) => {
            const i = t ? t === e.id : 0 === a,
              m = e.id ? `${A}=${e.id}` : "",
              u = n ? `${I}=${n}` : "",
              d = `${l.De.COMMUNITY_BASE_URL}${u || m ? "?" : ""}${u}${
                m ? "&" : ""
              }${m}`;
            return r.createElement(
              s.IS,
              {
                id: e.id,
                href: d,
                key: e.id,
                className: (0, h.Z)(c().Tab, i ? c().ActiveTab : null),
              },
              (0, o.Xx)(e.label),
            );
          }),
        );
      }
      function k(e) {
        const { activeTab: t, activeSort: n } = e;
        return r.createElement(
          v.s,
          { "flow-children": "row", className: c().SortContainer },
          r.createElement(
            "div",
            { className: c().SortIcon },
            r.createElement(m.iS8, null),
          ),
          [
            { label: "#Community_Home_Header_BrowseFilter_Popular", id: "" },
            {
              label: "#Community_Home_Header_BrowseFilter_Recent",
              id: "mostrecent",
            },
          ].map((e, a) => {
            const i = n ? n === e.id : 0 === a,
              m = t ? `${A}=${t}` : "",
              u = e.id ? `${I}=${e.id}` : "",
              d = `${l.De.COMMUNITY_BASE_URL}${u || m ? "?" : ""}${u}${
                m ? "&" : ""
              }${m}`;
            return r.createElement(
              s.IS,
              {
                href: d,
                key: e.id,
                className: (0, h.Z)(c().Sort, i ? c().ActiveSort : null),
              },
              (0, o.Xx)(e.label),
            );
          }),
        );
      }
    },
  },
]);
