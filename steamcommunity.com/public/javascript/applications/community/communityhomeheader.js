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
      n.r(t), n.d(t, { default: () => b });
      var a = n(90626),
        r = n(61859),
        o = n(84202),
        i = n.n(o),
        l = n(45699),
        c = n(78327),
        s = n(12155),
        m = n(68255),
        u = n(41735),
        d = n.n(u),
        p = n(55263);
      var _ = n(52038),
        h = n(13952),
        S = n(95034),
        f = n(92757),
        H = n(76217),
        C = n(12447);
      function b() {
        const e = (0, a.useRef)(void 0);
        return (
          (0, a.useEffect)(() => {
            e.current && e.current.TakeFocus();
          }, []),
          a.createElement(
            C.u,
            { navID: "CommunityHomeHeader" },
            a.createElement(
              H.Z,
              { navRef: e, className: i().CommunityHomeHeader },
              a.createElement(
                "div",
                { className: i().CommunityHomeHeaderTitleSection },
                a.createElement(
                  "div",
                  null,
                  a.createElement(
                    "div",
                    { className: i().CommunityHomeHeaderTitle },
                    (0, r.we)("#Community_Home_Header_Title"),
                  ),
                  a.createElement(
                    "div",
                    { className: i().CommunityHomeHeaderSubtitle },
                    (0, r.we)("#Community_Home_Header_Subtitle"),
                  ),
                ),
                a.createElement(
                  l.Ii,
                  {
                    className: i().AddFriendBtn,
                    href: `${c.TS.COMMUNITY_BASE_URL}search/users/`,
                  },
                  (0, r.we)("#Community_Home_Header_AddFriend_Button"),
                ),
              ),
              a.createElement(v, null),
              a.createElement(A, null),
            ),
          )
        );
      }
      function v() {
        const [e, t] = (0, a.useState)(""),
          [n, o] = (0, a.useState)([]),
          [u, _] = (0, a.useState)(!1),
          h = (function () {
            const e = (0, a.useMemo)(
                () => (0, c.Fd)("personalapps", "application_config") || [],
                [],
              ),
              t = (0, a.useMemo)(
                () => (0, c.Fd)("popularapps", "application_config") || [],
                [],
              ),
              n = [...e, ...t];
            if (n.length)
              return {
                isLoading: 1 === (0, p.zX)(n, { include_assets: !0 }),
                data: { personalAppIds: e, popularAppIds: t },
              };
            return {
              isLoading: !1,
              data: { personalAppIds: e, popularAppIds: t },
            };
          })();
        if (h.isLoading) return null;
        return a.createElement(
          "div",
          { className: i().CommunityHomeHeaderContent },
          a.createElement(
            H.Z,
            { className: i().AppHubsCtn },
            a.createElement(E, {
              appShortcuts: h.data.personalAppIds,
              sectionTitle: (0, r.we)("#Community_Home_Header_GameHubs_ForYou"),
              withDivider: h.data.popularAppIds.length > 0,
            }),
            a.createElement(E, {
              appShortcuts: h.data.popularAppIds,
              sectionTitle: (0, r.we)(
                "#Community_Home_Header_GameHubs_Popular",
              ),
            }),
          ),
          a.createElement(
            H.Z,
            {
              onFocus: () => _(!0),
              onBlur: (e) => {
                e.currentTarget.contains(e.relatedTarget) || _(!1);
              },
              className: i().Search,
            },
            a.createElement(
              H.Z,
              { className: i().SearchBar },
              a.createElement(
                "div",
                { className: i().InputContainer },
                a.createElement(m.pd, {
                  onChange: async (e) => {
                    t(e.target.value);
                    const n = await (async function (e) {
                      const t = `${c.TS.COMMUNITY_BASE_URL}actions/SearchApps/${e}`;
                      return (await d().get(t)).data;
                    })(e.target.value);
                    o(n);
                  },
                  value: e,
                  className: i().Input,
                  placeholder: (0, r.we)(
                    "#Community_Home_Header_FindGame_Placeholder",
                  ),
                }),
              ),
              a.createElement(
                "div",
                { className: i().SearchIcon },
                a.createElement(s.eSy, null),
              ),
            ),
            u &&
              a.createElement(
                H.Z,
                { className: i().SearchResultsCtn },
                n.map((e) =>
                  a.createElement(
                    l.Ii,
                    {
                      href: `${c.TS.COMMUNITY_BASE_URL}app/${e.appid}`,
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
        const { appShortcuts: t, sectionTitle: n, withDivider: r } = e;
        return t && t.length
          ? a.createElement(
              "div",
              { className: i().AppHubShortcutsCtn },
              a.createElement("div", { className: i().AppHubTitle }, n),
              a.createElement(
                "div",
                {
                  "flow-children": "row",
                  className: (0, _.A)(
                    i().AppHubShortcutLinks,
                    r ? i().Divider : null,
                  ),
                },
                t.map((e, t) => a.createElement(y, { key: t, appId: e })),
              ),
            )
          : null;
      }
      function y(e) {
        const t = h.A.Get().GetApp(e.appId);
        return t
          ? a.createElement(
              l.Ii,
              {
                className: i().ShortcutLink,
                href: `${c.TS.COMMUNITY_BASE_URL}app/${e.appId}`,
              },
              a.createElement("img", {
                className: i().ShortcutImage,
                src: t.GetAssets().GetLibraryCapsuleURL(),
              }),
            )
          : null;
      }
      const T = "subsection",
        w = "browsefilter";
      function A() {
        const e = (0, f.W6)(),
          t = (0, S.f3)(e, T),
          n = (0, S.f3)(e, w);
        return a.createElement(
          "div",
          null,
          a.createElement(g, { activeTab: t, activeSort: n }),
          a.createElement(I, { activeTab: t, activeSort: n }),
        );
      }
      function g(e) {
        const { activeTab: t, activeSort: n } = e,
          o = a.useRef(void 0);
        a.useEffect(() => {
          const e = document.getElementById(t);
          if (e && (null == o ? void 0 : o.current)) {
            const t = e.offsetLeft + e.clientWidth;
            t > window.innerWidth &&
              o.current.scrollBy(t - window.innerWidth, 0);
          }
        }, [null == o ? void 0 : o.current]);
        return a.createElement(
          H.Z,
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
            const s = t ? t === e.id : 0 === o,
              m = e.id ? `${T}=${e.id}` : "",
              u = n ? `${w}=${n}` : "",
              d = `${c.TS.COMMUNITY_BASE_URL}${u || m ? "?" : ""}${u}${m ? "&" : ""}${m}`;
            return a.createElement(
              l.Ii,
              {
                id: e.id,
                href: d,
                key: e.id,
                className: (0, _.A)(i().Tab, s ? i().ActiveTab : null),
              },
              (0, r.we)(e.label),
            );
          }),
        );
      }
      function I(e) {
        const { activeTab: t, activeSort: n } = e;
        return a.createElement(
          H.Z,
          { "flow-children": "row", className: i().SortContainer },
          a.createElement(
            "div",
            { className: i().SortIcon },
            a.createElement(s.LPs, null),
          ),
          [
            { label: "#Community_Home_Header_BrowseFilter_Popular", id: "" },
            {
              label: "#Community_Home_Header_BrowseFilter_Recent",
              id: "mostrecent",
            },
          ].map((e, o) => {
            const s = n ? n === e.id : 0 === o,
              m = t ? `${T}=${t}` : "",
              u = e.id ? `${w}=${e.id}` : "",
              d = `${c.TS.COMMUNITY_BASE_URL}${u || m ? "?" : ""}${u}${m ? "&" : ""}${m}`;
            return a.createElement(
              l.Ii,
              {
                href: d,
                key: e.id,
                className: (0, _.A)(i().Sort, s ? i().ActiveSort : null),
              },
              (0, r.we)(e.label),
            );
          }),
        );
      }
    },
    12447: (e, t, n) => {
      "use strict";
      n.d(t, { u: () => s });
      var a = n(8871),
        r = n(90626),
        o = n(78327),
        i = n(85585),
        l = n(7445),
        c = n(43899);
      const s = r.forwardRef(function (e, t) {
        const { children: n, navTreeRef: s, ...m } = e,
          u = r.useRef(void 0),
          d = (0, a.Ue)(u, s),
          p = (0, o.Qn)(),
          _ = (0, c.AO)("__nav_tree_root");
        return r.createElement(
          i.B2,
          {
            ...m,
            navTreeRef: d,
            ref: t,
            parentEmbeddedNavTree: _,
            disabledRoot: !p,
          },
          r.createElement(l.q, { disableFocusRing: !p }, n),
        );
      });
    },
    95034: (e, t, n) => {
      "use strict";
      n.d(t, { Bm: () => i, QD: () => l, f3: () => o, ip: () => c });
      var a = n(90626),
        r = n(92757);
      function o(e, t) {
        let n;
        if ("string" == typeof e) n = e;
        else if ("location" in e) n = e.location.search;
        else {
          if (!("search" in e)) return;
          n = e.search;
        }
        const a = new URLSearchParams(n.substring(1));
        if (a.has(t)) {
          const e = a.getAll(t);
          return e[e.length - 1];
        }
      }
      function i(e, t, n, a = !1) {
        const r = new URLSearchParams(e.location.search.substring(1));
        if (null != n && null != n) {
          if (r.get(t) == n) return;
          r.set(t, n);
        } else {
          if (!r.has(t)) return;
          r.delete(t);
        }
        a
          ? e.replace(`?${r.toString()}`, { ...e.location.state })
          : e.push(`?${r.toString()}`);
      }
      function l(e, t) {
        const n = (0, r.W6)(),
          l = (0, r.zy)(),
          c = (0, a.useMemo)(() => {
            const n = o(l.search, e);
            return null != n && null != n
              ? null != t && null != t
                ? "boolean" == typeof t
                  ? t.constructor("false" !== n)
                  : t.constructor(n)
                : n
              : t;
          }, [l.search, e, t]),
          s = (0, a.useCallback)(
            (t, a = !1) => {
              i(n, e, null != t && null != t ? String(t) : null, a);
            },
            [n, e],
          );
        return [c, s];
      }
      function c(e, t, n = !1) {
        const a = new URLSearchParams(e.location.search.substring(1));
        for (const e in t)
          if (t.hasOwnProperty(e)) {
            const n = t[e];
            a.delete(e), null != n && null != n && a.append(e, n);
          }
        n
          ? e.replace(`?${a.toString()}`, { ...e.location.state })
          : e.push(`?${a.toString()}`);
      }
    },
  },
]);
