/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
  [312],
  {
    91144: (e) => {
      e.exports = {
        CommunityHomeHeader: "communityhomeheader_CommunityHomeHeader_1C-zu",
        CommunityHomeHeaderTitleSection:
          "communityhomeheader_CommunityHomeHeaderTitleSection_31q4b",
        CommunityHomeHeaderTitle:
          "communityhomeheader_CommunityHomeHeaderTitle_1V0f6",
        CommunityHomeHeaderSubtitle:
          "communityhomeheader_CommunityHomeHeaderSubtitle_3QCfE",
        AddFriendBtn: "communityhomeheader_AddFriendBtn_iT6jD",
        CommunityHomeHeaderContent:
          "communityhomeheader_CommunityHomeHeaderContent_2OgY2",
        AppHubsCtn: "communityhomeheader_AppHubsCtn_O58Nj",
        Search: "communityhomeheader_Search_r2myG",
        SearchBar: "communityhomeheader_SearchBar_BhYo9",
        InputContainer: "communityhomeheader_InputContainer_8AoAY",
        Input: "communityhomeheader_Input_1WV5g",
        SearchIcon: "communityhomeheader_SearchIcon_2WLXg",
        SearchResultsCtn: "communityhomeheader_SearchResultsCtn_23v0A",
        SearchResult: "communityhomeheader_SearchResult_2f5QM",
        AppHubShortcutsCtn: "communityhomeheader_AppHubShortcutsCtn_1BQW_",
        AppHubTitle: "communityhomeheader_AppHubTitle_1cmkh",
        AppHubShortcutLinks: "communityhomeheader_AppHubShortcutLinks_Xhben",
        ShortcutLink: "communityhomeheader_ShortcutLink_12bMm",
        ShortcutImage: "communityhomeheader_ShortcutImage_irepM",
        Divider: "communityhomeheader_Divider_3sA9t",
        TabContainer: "communityhomeheader_TabContainer_HY3Yt",
        Tab: "communityhomeheader_Tab_1oAgo",
        ActiveTab: "communityhomeheader_ActiveTab_3Jb_4",
        SortContainer: "communityhomeheader_SortContainer_16Dei",
        Sort: "communityhomeheader_Sort_1sg_E",
        ActiveSort: "communityhomeheader_ActiveSort_3whf2",
        SortIcon: "communityhomeheader_SortIcon_2g7dI",
      };
    },
    29979: (e, t, n) => {
      "use strict";
      n.d(t, { p: () => l });
      var a = n(33940),
        r = n(89526),
        o = n(49194),
        i = n(49920),
        m = n(31621),
        c = n(70983),
        s = n(38811);
      function l(e) {
        const { children: t, navTreeRef: n } = e,
          l = (0, a._T)(e, ["children", "navTreeRef"]),
          u = r.useRef(),
          d = (0, m.BE)(u, n),
          _ = (0, c.id)(),
          h = window.__virtual_keyboard_client;
        if (
          ((0, r.useEffect)(() => {
            s.Wz.SetHookFactory(() => h);
          }, [h]),
          _)
        ) {
          const e = window.__nav_tree_root;
          return r.createElement(
            o.Fe,
            Object.assign({}, l, {
              navTreeRef: d,
              secondary: !0,
              parentEmbeddedNavTree: e,
            }),
            r.createElement(i.O, null, t)
          );
        }
        return r.createElement(r.Fragment, null, t);
      }
    },
    31319: (e, t, n) => {
      "use strict";
      n.d(t, { Ar: () => c, Wo: () => s, i9: () => m, ks: () => o });
      var a = n(89526),
        r = n(59934);
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
      function m(e, t, n) {
        const a = new URLSearchParams(e.location.search.substring(1));
        a.delete(t), i(n) && a.append(t, n), e.push(`?${a.toString()}`);
      }
      function c(e, t) {
        const n = (0, r.k6)(),
          c = (0, r.TH)(),
          s = (0, a.useMemo)(() => {
            const n = o(c.search, e);
            return i(n)
              ? i(t)
                ? "boolean" == typeof t
                  ? t.constructor("false" !== n)
                  : t.constructor(n)
                : n
              : t;
          }, [c.search, e, t]),
          l = (0, a.useCallback)(
            (t) => {
              m(n, e, i(t) ? String(t) : null);
            },
            [n, e]
          );
        return [s, l];
      }
      function s(e, t) {
        const n = new URLSearchParams(e.location.search.substring(1));
        for (const e in t)
          if (t.hasOwnProperty(e)) {
            const a = t[e];
            n.delete(e), i(a) && n.append(e, a);
          }
        e.push(`?${n.toString()}`);
      }
    },
    18786: (e, t, n) => {
      "use strict";
      n.r(t), n.d(t, { default: () => v });
      var a = n(33940),
        r = n(89526),
        o = n(31587),
        i = n(91144),
        m = n.n(i),
        c = n(49194),
        s = n(70983),
        l = n(86701),
        u = n(57255),
        d = (n(8392), n(52868)),
        _ = n.n(d),
        h = n(23708);
      var p = n(13806),
        H = n(63154),
        y = n(31319),
        S = n(59934),
        C = n(23907),
        b = n(29979),
        f = n(31641);
      n(48870);
      function v() {
        const e = (0, f.L)(),
          t = (0, r.useRef)();
        return (
          (0, r.useEffect)(() => {
            t.current && t.current.TakeFocus();
          }, []),
          r.createElement(
            b.p,
            { navID: "CommunityHomeHeader", NavigationManager: e },
            r.createElement(
              C.s,
              { navRef: t, className: m().CommunityHomeHeader },
              r.createElement(
                "div",
                { className: m().CommunityHomeHeaderTitleSection },
                r.createElement(
                  "div",
                  null,
                  r.createElement(
                    "div",
                    { className: m().CommunityHomeHeaderTitle },
                    (0, o.Xx)("#Community_Home_Header_Title")
                  ),
                  r.createElement(
                    "div",
                    { className: m().CommunityHomeHeaderSubtitle },
                    (0, o.Xx)("#Community_Home_Header_Subtitle")
                  )
                ),
                r.createElement(
                  c.IS,
                  {
                    className: m().AddFriendBtn,
                    href: `${s.De.COMMUNITY_BASE_URL}search/users/`,
                  },
                  (0, o.Xx)("#Community_Home_Header_AddFriend_Button")
                )
              ),
              r.createElement(E, null),
              r.createElement(N, null)
            )
          )
        );
      }
      function E() {
        const [e, t] = (0, r.useState)(""),
          [n, i] = (0, r.useState)([]),
          [d, p] = (0, r.useState)(!1),
          H = (function () {
            const e = (0, r.useMemo)(
                () => (0, s.ip)("personalapps", "application_config") || [],
                []
              ),
              t = (0, r.useMemo)(
                () => (0, s.ip)("popularapps", "application_config") || [],
                []
              ),
              n = [...e, ...t];
            if (n.length)
              return {
                isLoading: 1 === (0, h.wZ)(n, { include_assets: !0 }),
                data: { personalAppIds: e, popularAppIds: t },
              };
            return {
              isLoading: !1,
              data: { personalAppIds: e, popularAppIds: t },
            };
          })();
        if (H.isLoading) return null;
        return r.createElement(
          "div",
          { className: m().CommunityHomeHeaderContent },
          r.createElement(
            C.s,
            { className: m().AppHubsCtn },
            r.createElement(A, {
              appShortcuts: H.data.personalAppIds,
              sectionTitle: (0, o.Xx)("#Community_Home_Header_GameHubs_ForYou"),
              withDivider: H.data.popularAppIds.length > 0,
            }),
            r.createElement(A, {
              appShortcuts: H.data.popularAppIds,
              sectionTitle: (0, o.Xx)(
                "#Community_Home_Header_GameHubs_Popular"
              ),
            })
          ),
          r.createElement(
            C.s,
            {
              onFocus: () => p(!0),
              onBlur: (e) => {
                e.currentTarget.contains(e.relatedTarget) || p(!1);
              },
              className: m().Search,
            },
            r.createElement(
              C.s,
              { className: m().SearchBar },
              r.createElement(
                "div",
                { className: m().InputContainer },
                r.createElement(u.II, {
                  onChange: (e) =>
                    (0, a.mG)(this, void 0, void 0, function* () {
                      t(e.target.value);
                      const n = yield (function (e) {
                        return (0, a.mG)(this, void 0, void 0, function* () {
                          const t = `${s.De.COMMUNITY_BASE_URL}actions/SearchApps/${e}`;
                          return (yield _().get(t)).data;
                        });
                      })(e.target.value);
                      i(n);
                    }),
                  value: e,
                  className: m().Input,
                  placeholder: (0, o.Xx)(
                    "#Community_Home_Header_FindGame_Placeholder"
                  ),
                })
              ),
              r.createElement(
                "div",
                { className: m().SearchIcon },
                r.createElement(l.YtI, null)
              )
            ),
            d &&
              r.createElement(
                C.s,
                { className: m().SearchResultsCtn },
                n.map((e) =>
                  r.createElement(
                    c.IS,
                    {
                      href: `${s.De.COMMUNITY_BASE_URL}app/${e.appid}`,
                      key: e.appid,
                      className: m().SearchResult,
                    },
                    e.name
                  )
                )
              )
          )
        );
      }
      function A(e) {
        const { appShortcuts: t, sectionTitle: n, withDivider: a } = e;
        return t && t.length
          ? r.createElement(
              "div",
              { className: m().AppHubShortcutsCtn },
              r.createElement("div", { className: m().AppHubTitle }, n),
              r.createElement(
                "div",
                {
                  "flow-children": "row",
                  className: (0, p.Z)(
                    m().AppHubShortcutLinks,
                    a ? m().Divider : null
                  ),
                },
                t.map((e, t) => r.createElement(I, { key: t, appId: e }))
              )
            )
          : null;
      }
      function I(e) {
        const t = H.Z.Get().GetApp(e.appId);
        return t
          ? r.createElement(
              c.IS,
              {
                className: m().ShortcutLink,
                href: `${s.De.COMMUNITY_BASE_URL}app/${e.appId}`,
              },
              r.createElement("img", {
                className: m().ShortcutImage,
                src: t.GetAssets().GetLibraryCapsuleURL(),
              })
            )
          : null;
      }
      const T = "subsection",
        g = "browsefilter";
      function N() {
        const e = (0, S.k6)(),
          t = (0, y.ks)(e, T),
          n = (0, y.ks)(e, g);
        return r.createElement(
          "div",
          null,
          r.createElement(w, { activeTab: t, activeSort: n }),
          r.createElement(k, { activeTab: t, activeSort: n })
        );
      }
      function w(e) {
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
          C.s,
          { "flow-children": "row", className: m().TabContainer, ref: a },
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
              l = e.id ? `${T}=${e.id}` : "",
              u = n ? `${g}=${n}` : "",
              d = `${s.De.COMMUNITY_BASE_URL}${u || l ? "?" : ""}${u}${
                l ? "&" : ""
              }${l}`;
            return r.createElement(
              c.IS,
              {
                id: e.id,
                href: d,
                key: e.id,
                className: (0, p.Z)(m().Tab, i ? m().ActiveTab : null),
              },
              (0, o.Xx)(e.label)
            );
          })
        );
      }
      function k(e) {
        const { activeTab: t, activeSort: n } = e;
        return r.createElement(
          C.s,
          { "flow-children": "row", className: m().SortContainer },
          r.createElement(
            "div",
            { className: m().SortIcon },
            r.createElement(l.iS8, null)
          ),
          [
            { label: "#Community_Home_Header_BrowseFilter_Popular", id: "" },
            {
              label: "#Community_Home_Header_BrowseFilter_Recent",
              id: "mostrecent",
            },
          ].map((e, a) => {
            const i = n ? n === e.id : 0 === a,
              l = t ? `${T}=${t}` : "",
              u = e.id ? `${g}=${e.id}` : "",
              d = `${s.De.COMMUNITY_BASE_URL}${u || l ? "?" : ""}${u}${
                l ? "&" : ""
              }${l}`;
            return r.createElement(
              c.IS,
              {
                href: d,
                key: e.id,
                className: (0, p.Z)(m().Sort, i ? m().ActiveSort : null),
              },
              (0, o.Xx)(e.label)
            );
          })
        );
      }
    },
  },
]);
