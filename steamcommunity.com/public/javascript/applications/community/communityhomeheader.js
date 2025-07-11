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
    92598: (e, t, a) => {
      "use strict";
      a.r(t), a.d(t, { default: () => b });
      var n = a(90626),
        r = a(61859),
        o = a(84202),
        i = a.n(o),
        c = a(45699),
        s = a(78327),
        l = a(12155),
        m = a(68255),
        u = a(41735),
        d = a.n(u),
        p = a(55263);
      var _ = a(52038),
        h = a(13952),
        S = a(95034),
        H = a(92757),
        f = a(76217),
        C = a(12447);
      function b() {
        const e = (0, n.useRef)(void 0);
        return (
          (0, n.useEffect)(() => {
            e.current && e.current.TakeFocus();
          }, []),
          n.createElement(
            C.u,
            { navID: "CommunityHomeHeader" },
            n.createElement(
              f.Z,
              { navRef: e, className: i().CommunityHomeHeader },
              n.createElement(
                "div",
                { className: i().CommunityHomeHeaderTitleSection },
                n.createElement(
                  "div",
                  null,
                  n.createElement(
                    "div",
                    { className: i().CommunityHomeHeaderTitle },
                    (0, r.we)("#Community_Home_Header_Title"),
                  ),
                  n.createElement(
                    "div",
                    { className: i().CommunityHomeHeaderSubtitle },
                    (0, r.we)("#Community_Home_Header_Subtitle"),
                  ),
                ),
                n.createElement(
                  c.Ii,
                  {
                    className: i().AddFriendBtn,
                    href: `${s.TS.COMMUNITY_BASE_URL}search/users/`,
                  },
                  (0, r.we)("#Community_Home_Header_AddFriend_Button"),
                ),
              ),
              n.createElement(v, null),
              n.createElement(A, null),
            ),
          )
        );
      }
      function v() {
        const [e, t] = (0, n.useState)(""),
          [a, o] = (0, n.useState)([]),
          [u, _] = (0, n.useState)(!1),
          h = (function () {
            const e = (0, n.useMemo)(
                () => (0, s.Fd)("personalapps", "application_config") || [],
                [],
              ),
              t = (0, n.useMemo)(
                () => (0, s.Fd)("popularapps", "application_config") || [],
                [],
              ),
              a = [...e, ...t];
            if (a.length)
              return {
                isLoading: 1 === (0, p.zX)(a, { include_assets: !0 }),
                data: { personalAppIds: e, popularAppIds: t },
              };
            return {
              isLoading: !1,
              data: { personalAppIds: e, popularAppIds: t },
            };
          })();
        if (h.isLoading) return null;
        return n.createElement(
          "div",
          { className: i().CommunityHomeHeaderContent },
          n.createElement(
            f.Z,
            { className: i().AppHubsCtn },
            n.createElement(E, {
              appShortcuts: h.data.personalAppIds,
              sectionTitle: (0, r.we)("#Community_Home_Header_GameHubs_ForYou"),
              withDivider: h.data.popularAppIds.length > 0,
            }),
            n.createElement(E, {
              appShortcuts: h.data.popularAppIds,
              sectionTitle: (0, r.we)(
                "#Community_Home_Header_GameHubs_Popular",
              ),
            }),
          ),
          n.createElement(
            f.Z,
            {
              onFocus: () => _(!0),
              onBlur: (e) => {
                e.currentTarget.contains(e.relatedTarget) || _(!1);
              },
              className: i().Search,
            },
            n.createElement(
              f.Z,
              { className: i().SearchBar },
              n.createElement(
                "div",
                { className: i().InputContainer },
                n.createElement(m.pd, {
                  onChange: async (e) => {
                    t(e.target.value);
                    const a = await (async function (e) {
                      const t = `${s.TS.COMMUNITY_BASE_URL}actions/SearchApps/${e}`;
                      return (await d().get(t)).data;
                    })(e.target.value);
                    o(a);
                  },
                  value: e,
                  className: i().Input,
                  placeholder: (0, r.we)(
                    "#Community_Home_Header_FindGame_Placeholder",
                  ),
                }),
              ),
              n.createElement(
                "div",
                { className: i().SearchIcon },
                n.createElement(l.eSy, null),
              ),
            ),
            u &&
              n.createElement(
                f.Z,
                { className: i().SearchResultsCtn },
                a.map((e) =>
                  n.createElement(
                    c.Ii,
                    {
                      href: `${s.TS.COMMUNITY_BASE_URL}app/${e.appid}`,
                      key: e.appid,
                      className: i().SearchResult,
                    },
                    e.name,
                  ),
                ),
              ),
          ),
        );
      }
      function E(e) {
        const { appShortcuts: t, sectionTitle: a, withDivider: r } = e;
        return t && t.length
          ? n.createElement(
              "div",
              { className: i().AppHubShortcutsCtn },
              n.createElement("div", { className: i().AppHubTitle }, a),
              n.createElement(
                "div",
                {
                  "flow-children": "row",
                  className: (0, _.A)(
                    i().AppHubShortcutLinks,
                    r ? i().Divider : null,
                  ),
                },
                t.map((e, t) => n.createElement(y, { key: t, appId: e })),
              ),
            )
          : null;
      }
      function y(e) {
        const t = h.A.Get().GetApp(e.appId);
        return t
          ? n.createElement(
              c.Ii,
              {
                className: i().ShortcutLink,
                href: `${s.TS.COMMUNITY_BASE_URL}app/${e.appId}`,
              },
              n.createElement("img", {
                className: i().ShortcutImage,
                src: t.GetAssets().GetLibraryCapsuleURL(),
              }),
            )
          : null;
      }
      const T = "subsection",
        w = "browsefilter";
      function A() {
        const e = (0, H.W6)(),
          t = (0, S.f3)(e, T),
          a = (0, S.f3)(e, w);
        return n.createElement(
          "div",
          null,
          n.createElement(g, { activeTab: t, activeSort: a }),
          n.createElement(I, { activeTab: t, activeSort: a }),
        );
      }
      function g(e) {
        const { activeTab: t, activeSort: a } = e,
          o = n.useRef(void 0);
        n.useEffect(() => {
          const e = document.getElementById(t);
          if (e && (null == o ? void 0 : o.current)) {
            const t = e.offsetLeft + e.clientWidth;
            t > window.innerWidth &&
              o.current.scrollBy(t - window.innerWidth, 0);
          }
        }, [null == o ? void 0 : o.current]);
        return n.createElement(
          f.Z,
          { "flow-children": "row", className: i().TabContainer, ref: o },
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
          ].map((e, o) => {
            const l = t ? t === e.id : 0 === o,
              m = e.id ? `${T}=${e.id}` : "",
              u = a ? `${w}=${a}` : "",
              d = `${s.TS.COMMUNITY_BASE_URL}${u || m ? "?" : ""}${u}${m ? "&" : ""}${m}`;
            return n.createElement(
              c.Ii,
              {
                id: e.id,
                href: d,
                key: e.id,
                className: (0, _.A)(i().Tab, l ? i().ActiveTab : null),
              },
              (0, r.we)(e.label),
            );
          }),
        );
      }
      function I(e) {
        const { activeTab: t, activeSort: a } = e;
        return n.createElement(
          f.Z,
          { "flow-children": "row", className: i().SortContainer },
          n.createElement(
            "div",
            { className: i().SortIcon },
            n.createElement(l.LPs, null),
          ),
          [
            { label: "#Community_Home_Header_BrowseFilter_Popular", id: "" },
            {
              label: "#Community_Home_Header_BrowseFilter_Recent",
              id: "mostrecent",
            },
          ].map((e, o) => {
            const l = a ? a === e.id : 0 === o,
              m = t ? `${T}=${t}` : "",
              u = e.id ? `${w}=${e.id}` : "",
              d = `${s.TS.COMMUNITY_BASE_URL}${u || m ? "?" : ""}${u}${m ? "&" : ""}${m}`;
            return n.createElement(
              c.Ii,
              {
                href: d,
                key: e.id,
                className: (0, _.A)(i().Sort, l ? i().ActiveSort : null),
              },
              (0, r.we)(e.label),
            );
          }),
        );
      }
    },
    12447: (e, t, a) => {
      "use strict";
      a.d(t, { u: () => l });
      var n = a(8871),
        r = a(90626),
        o = a(78327),
        i = a(85585),
        c = a(7445),
        s = a(43899);
      const l = r.forwardRef(function (e, t) {
        const { children: a, navTreeRef: l, ...m } = e,
          u = r.useRef(),
          d = (0, n.Ue)(u, l),
          p = (0, o.Qn)(),
          _ = (0, s.AO)("__nav_tree_root");
        return r.createElement(
          i.B2,
          {
            ...m,
            navTreeRef: d,
            ref: t,
            parentEmbeddedNavTree: _,
            disabledRoot: !p,
          },
          r.createElement(c.q, { disableFocusRing: !p }, a),
        );
      });
    },
    95034: (e, t, a) => {
      "use strict";
      a.d(t, { Bm: () => c, QD: () => s, f3: () => o, ip: () => l });
      var n = a(90626),
        r = a(92757);
      function o(e, t) {
        let a;
        "string" == typeof e
          ? (a = e)
          : "location" in e
            ? (a = e.location.search)
            : "search" in e && (a = e.search);
        const n = new URLSearchParams(a.substring(1));
        if (n.has(t)) {
          const e = n.getAll(t);
          return e[e.length - 1];
        }
      }
      const i = (e) => null != e;
      function c(e, t, a, n = !1) {
        const r = new URLSearchParams(e.location.search.substring(1));
        if (i(a)) {
          if (r.get(t) == a) return;
          r.set(t, a);
        } else {
          if (!r.has(t)) return;
          r.delete(t);
        }
        n
          ? e.replace(`?${r.toString()}`, { ...e.location.state })
          : e.push(`?${r.toString()}`);
      }
      function s(e, t) {
        const a = (0, r.W6)(),
          s = (0, r.zy)(),
          l = (0, n.useMemo)(() => {
            const a = o(s.search, e);
            return i(a)
              ? i(t)
                ? "boolean" == typeof t
                  ? t.constructor("false" !== a)
                  : t.constructor(a)
                : a
              : t;
          }, [s.search, e, t]),
          m = (0, n.useCallback)(
            (t, n = !1) => {
              c(a, e, i(t) ? String(t) : null, n);
            },
            [a, e],
          );
        return [l, m];
      }
      function l(e, t, a = !1) {
        const n = new URLSearchParams(e.location.search.substring(1));
        for (const e in t)
          if (t.hasOwnProperty(e)) {
            const a = t[e];
            n.delete(e), i(a) && n.append(e, a);
          }
        a
          ? e.replace(`?${n.toString()}`, { ...e.location.state })
          : e.push(`?${n.toString()}`);
      }
    },
  },
]);
