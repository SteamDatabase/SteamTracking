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
    92598: (e, t, r) => {
      "use strict";
      r.r(t), r.d(t, { default: () => y });
      var n = r(90626),
        a = r(61859),
        o = r(84202),
        i = r.n(o),
        s = r(45699),
        c = r(78327),
        l = r(12155),
        u = r(68255),
        m = r(41735),
        d = r.n(m),
        p = r(55263);
      var _ = r(52038),
        f = r(16021),
        h = r(95034),
        S = r(92757),
        v = r(76217),
        H = r(75422);
      function y() {
        const e = (0, n.useRef)(void 0);
        return (
          (0, n.useEffect)(() => {
            e.current && e.current.TakeFocus();
          }, []),
          n.createElement(
            H.u,
            { navID: "CommunityHomeHeader" },
            n.createElement(
              v.Z,
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
                    (0, a.we)("#Community_Home_Header_Title"),
                  ),
                  n.createElement(
                    "div",
                    { className: i().CommunityHomeHeaderSubtitle },
                    (0, a.we)("#Community_Home_Header_Subtitle"),
                  ),
                ),
                n.createElement(
                  s.Ii,
                  {
                    className: i().AddFriendBtn,
                    href: `${c.TS.COMMUNITY_BASE_URL}search/users/`,
                  },
                  (0, a.we)("#Community_Home_Header_AddFriend_Button"),
                ),
              ),
              n.createElement(C, null),
              n.createElement(g, null),
            ),
          )
        );
      }
      function C() {
        const [e, t] = (0, n.useState)(""),
          [r, o] = (0, n.useState)([]),
          [m, _] = (0, n.useState)(!1),
          f = (function () {
            const e = (0, n.useMemo)(
                () => (0, c.Fd)("personalapps", "application_config") || [],
                [],
              ),
              t = (0, n.useMemo)(
                () => (0, c.Fd)("popularapps", "application_config") || [],
                [],
              ),
              r = [...e, ...t];
            if (r.length)
              return {
                isLoading: 1 === (0, p.zX)(r, { include_assets: !0 }),
                data: { personalAppIds: e, popularAppIds: t },
              };
            return {
              isLoading: !1,
              data: { personalAppIds: e, popularAppIds: t },
            };
          })();
        if (f.isLoading) return null;
        return n.createElement(
          "div",
          { className: i().CommunityHomeHeaderContent },
          n.createElement(
            v.Z,
            { className: i().AppHubsCtn },
            n.createElement(b, {
              appShortcuts: f.data.personalAppIds,
              sectionTitle: (0, a.we)("#Community_Home_Header_GameHubs_ForYou"),
              withDivider: f.data.popularAppIds.length > 0,
            }),
            n.createElement(b, {
              appShortcuts: f.data.popularAppIds,
              sectionTitle: (0, a.we)(
                "#Community_Home_Header_GameHubs_Popular",
              ),
            }),
          ),
          n.createElement(
            v.Z,
            {
              onFocus: () => _(!0),
              onBlur: (e) => {
                e.currentTarget.contains(e.relatedTarget) || _(!1);
              },
              className: i().Search,
            },
            n.createElement(
              v.Z,
              { className: i().SearchBar },
              n.createElement(
                "div",
                { className: i().InputContainer },
                n.createElement(u.pd, {
                  onChange: async (e) => {
                    t(e.target.value);
                    const r = await (async function (e) {
                      const t = `${c.TS.COMMUNITY_BASE_URL}actions/SearchApps/${e}`;
                      return (await d().get(t)).data;
                    })(e.target.value);
                    o(r);
                  },
                  value: e,
                  className: i().Input,
                  placeholder: (0, a.we)(
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
            m &&
              n.createElement(
                v.Z,
                { className: i().SearchResultsCtn },
                r.map((e) =>
                  n.createElement(
                    s.Ii,
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
      function b(e) {
        const { appShortcuts: t, sectionTitle: r, withDivider: a } = e;
        return t && t.length
          ? n.createElement(
              "div",
              { className: i().AppHubShortcutsCtn },
              n.createElement("div", { className: i().AppHubTitle }, r),
              n.createElement(
                "div",
                {
                  "flow-children": "row",
                  className: (0, _.A)(
                    i().AppHubShortcutLinks,
                    a ? i().Divider : null,
                  ),
                },
                t.map((e, t) => n.createElement(E, { key: t, appId: e })),
              ),
            )
          : null;
      }
      function E(e) {
        const t = f.A.Get().GetApp(e.appId);
        return t
          ? n.createElement(
              s.Ii,
              {
                className: i().ShortcutLink,
                href: `${c.TS.COMMUNITY_BASE_URL}app/${e.appId}`,
              },
              n.createElement("img", {
                className: i().ShortcutImage,
                src: t.GetAssets().GetLibraryCapsuleURL(),
              }),
            )
          : null;
      }
      const w = "subsection",
        T = "browsefilter";
      function g() {
        const e = (0, S.W6)(),
          t = (0, h.f3)(e, w),
          r = (0, h.f3)(e, T);
        return n.createElement(
          "div",
          null,
          n.createElement(A, { activeTab: t, activeSort: r }),
          n.createElement(N, { activeTab: t, activeSort: r }),
        );
      }
      function A(e) {
        const { activeTab: t, activeSort: r } = e,
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
          v.Z,
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
              u = e.id ? `${w}=${e.id}` : "",
              m = r ? `${T}=${r}` : "",
              d = `${c.TS.COMMUNITY_BASE_URL}${m || u ? "?" : ""}${m}${u ? "&" : ""}${u}`;
            return n.createElement(
              s.Ii,
              {
                id: e.id,
                href: d,
                key: e.id,
                className: (0, _.A)(i().Tab, l ? i().ActiveTab : null),
              },
              (0, a.we)(e.label),
            );
          }),
        );
      }
      function N(e) {
        const { activeTab: t, activeSort: r } = e;
        return n.createElement(
          v.Z,
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
            const l = r ? r === e.id : 0 === o,
              u = t ? `${w}=${t}` : "",
              m = e.id ? `${T}=${e.id}` : "",
              d = `${c.TS.COMMUNITY_BASE_URL}${m || u ? "?" : ""}${m}${u ? "&" : ""}${u}`;
            return n.createElement(
              s.Ii,
              {
                href: d,
                key: e.id,
                className: (0, _.A)(i().Sort, l ? i().ActiveSort : null),
              },
              (0, a.we)(e.label),
            );
          }),
        );
      }
    },
    75422: (e, t, r) => {
      "use strict";
      r.d(t, { u: () => S });
      var n = r(8871),
        a = r(90626),
        o = r(78327),
        i = r(85585),
        s = r(7445),
        c = r(87133),
        l = r(8527),
        u = r(92757),
        m = r(39575),
        d = r(76217),
        p = r(60778);
      const _ = "FocusNavHistoryID",
        f = new p.wd("FocusHistory").Debug;
      function h(e) {
        const { children: t, timeoutMS: r, ...n } = e,
          o = (function (e = 2) {
            const t = (0, u.W6)(),
              r = a.useRef(void 0),
              n = (0, u.zy)(),
              o = l.TS.IN_STEAMUI,
              i = (null == n ? void 0 : n.state) && n.state[_],
              s = a.useRef(void 0),
              [c, d] = a.useState(i);
            return (
              a.useLayoutEffect(() => {
                if (!r.current) return;
                const e = r.current;
                return e
                  .Node()
                  .Tree.WindowContext.FocusChangedCallbacks.Register(
                    (r, n, a) => {
                      const i = t.location;
                      let c = i.state && i.state[_];
                      c ||
                        ((c = o
                          ? `State_${i.key}`
                          : `State_${e.Node().Tree.id}`),
                        (s.current = c),
                        t.replace({ ...i, state: { ...i.state, [_]: c } })),
                        s.current == c &&
                          (o
                            ? e.SaveState(c)
                            : window.history.replaceState(
                                {
                                  ...window.history.state,
                                  [c]: (0, m.Ze)(e.Node()),
                                },
                                "",
                              ));
                    },
                  ).Unregister;
              }, [t, o]),
              a.useLayoutEffect(() => {
                if (r.current && s.current != i) {
                  if (!i) return void d(void 0);
                  const t = r.current.NavTree().DeferredFocus;
                  t.SuppressFocus(),
                    f(
                      `Start restoring history for ${i} in tree ${r.current.NavTree().id}, suppressing focus`,
                    );
                  const n = window.setTimeout(() => {
                    d(i);
                  }, e);
                  return () => {
                    window.clearTimeout(n), t.ExecuteQueuedFocus();
                  };
                }
              }, [i, e]),
              a.useEffect(() => {
                var e;
                if (!c || !r.current) return;
                const t = o
                    ? null
                    : null === (e = window.history.state) || void 0 === e
                      ? void 0
                      : e[c],
                  n = r.current.NavTree().DeferredFocus;
                let a = !1;
                o
                  ? (a = r.current.RestoreState(c, 1))
                  : t && ((0, m.LU)(r.current.Node(), t, 0), (a = !0)),
                  f(
                    `Completed restoring history for state ${c} - ${a ? "had history." : "no history for this state."}`,
                  ),
                  a ? n.Reset() : n.ExecuteQueuedFocus(),
                  (s.current = c);
              }, [c, t, o]),
              r
            );
          })(r);
        return a.createElement(d.Z, { ...n, navRef: o }, t);
      }
      const S = a.forwardRef(function (e, t) {
        const { children: r, navTreeRef: l, ...u } = e,
          m = a.useRef(void 0),
          d = (0, n.Ue)(m, l),
          p = (0, o.Qn)(),
          _ = (0, c.AO)("__nav_tree_root");
        return a.createElement(
          i.B2,
          {
            ...u,
            navTreeRef: d,
            ref: t,
            parentEmbeddedNavTree: _,
            disabledRoot: !p,
          },
          a.createElement(
            h,
            { style: { display: "contents" } },
            a.createElement(s.q, { disableFocusRing: !p }, r),
          ),
        );
      });
    },
    95034: (e, t, r) => {
      "use strict";
      r.d(t, { Bm: () => i, QD: () => s, f3: () => o, ip: () => c });
      var n = r(90626),
        a = r(92757);
      function o(e, t) {
        let r;
        if ("string" == typeof e) r = e;
        else if ("location" in e) r = e.location.search;
        else {
          if (!("search" in e)) return;
          r = e.search;
        }
        const n = new URLSearchParams(r.substring(1));
        if (n.has(t)) {
          const e = n.getAll(t);
          return e[e.length - 1];
        }
      }
      function i(e, t, r, n = !1) {
        const a = new URLSearchParams(e.location.search.substring(1));
        if (null != r && null != r) {
          if (a.get(t) == r) return;
          a.set(t, r);
        } else {
          if (!a.has(t)) return;
          a.delete(t);
        }
        n
          ? e.replace(`?${a.toString()}`, { ...e.location.state })
          : e.push(`?${a.toString()}`);
      }
      function s(e, t) {
        const r = (0, a.W6)(),
          s = (0, a.zy)(),
          c = (0, n.useMemo)(() => {
            const r = o(s.search, e);
            return null != r && null != r
              ? null != t && null != t
                ? "boolean" == typeof t
                  ? t.constructor("false" !== r)
                  : t.constructor(r)
                : r
              : t;
          }, [s.search, e, t]),
          l = (0, n.useCallback)(
            (t, n = !1) => {
              i(r, e, null != t && null != t ? String(t) : null, n);
            },
            [r, e],
          );
        return [c, l];
      }
      function c(e, t, r = !1) {
        const n = new URLSearchParams(e.location.search.substring(1));
        for (const e in t)
          if (t.hasOwnProperty(e)) {
            const r = t[e];
            n.delete(e), null != r && null != r && n.append(e, r);
          }
        r
          ? e.replace(`?${n.toString()}`, { ...e.location.state })
          : e.push(`?${n.toString()}`);
      }
    },
  },
]);
