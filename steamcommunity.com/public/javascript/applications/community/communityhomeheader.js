/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
  [312],
  {
    9033: (e) => {
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
    34425: (e, t, r) => {
      "use strict";
      r.d(t, { p: () => c });
      var n = r(70655),
        a = r(67294),
        o = r(7707),
        i = r(27745),
        s = r(64839),
        m = r(90666);
      function c(e) {
        const { children: t, navTreeRef: r } = e,
          c = (0, n._T)(e, ["children", "navTreeRef"]),
          l = a.useRef(),
          u = (0, s.BE)(l, r);
        if (m.De.IN_GAMEPADUI) {
          const e = window.__nav_tree_root;
          return a.createElement(
            o.Fe,
            Object.assign({}, c, {
              navTreeRef: u,
              secondary: !0,
              parentEmbeddedNavTree: e,
            }),
            a.createElement(i.O, null, t)
          );
        }
        return a.createElement(a.Fragment, null, t);
      }
    },
    31933: (e, t, r) => {
      "use strict";
      r.d(t, { Ar: () => m, Wo: () => c, i9: () => s, ks: () => o });
      var n = r(67294),
        a = r(78587);
      function o(e, t) {
        let r;
        "string" == typeof e
          ? (r = e)
          : "location" in e
          ? (r = e.location.search)
          : "search" in e && (r = e.search);
        const n = new URLSearchParams(r.substring(1));
        if (n.has(t)) {
          const e = n.getAll(t);
          return e[e.length - 1];
        }
      }
      const i = (e) => null != e;
      function s(e, t, r) {
        const n = new URLSearchParams(e.location.search.substring(1));
        n.delete(t), i(r) && n.append(t, r), e.push(`?${n.toString()}`);
      }
      function m(e, t) {
        const r = (0, a.k6)(),
          m = (0, a.TH)(),
          c = (0, n.useMemo)(() => {
            const r = o(m.search, e);
            return i(r)
              ? i(t)
                ? "boolean" == typeof t
                  ? t.constructor("false" !== r)
                  : t.constructor(r)
                : r
              : t;
          }, [m.search, e, t]),
          l = (0, n.useCallback)(
            (t) => {
              s(r, e, i(t) ? String(t) : null);
            },
            [r, e]
          );
        return [c, l];
      }
      function c(e, t) {
        const r = new URLSearchParams(e.location.search.substring(1));
        for (const e in t)
          if (t.hasOwnProperty(e)) {
            const n = t[e];
            r.delete(e), i(n) && r.append(e, n);
          }
        e.push(`?${r.toString()}`);
      }
    },
    13596: (e, t, r) => {
      "use strict";
      r.d(t, { V: () => s });
      var n = r(67294),
        a = r(95598),
        o = r(50732),
        i = r.n(o);
      class s extends n.PureComponent {
        constructor(e) {
          super(e);
        }
        AddSizeClass(e) {
          "small" == this.props.size
            ? e.push(i().throbber_small)
            : "medium" == this.props.size
            ? e.push(i().throbber_medium)
            : "xlarge" == this.props.size
            ? e.push(i().throbber_xlarge)
            : "xxlarge" == this.props.size
            ? e.push(i().throbber_xxlarge)
            : e.push(i().throbber_large);
        }
        render() {
          let e = [i().LoadingWrapper, "SteamLogoThrobber"];
          this.AddSizeClass(e),
            void 0 === this.props.string && e.push(i().noString),
            this.props.className && e.push(this.props.className),
            this.props.static && e.push(i().Static);
          let t = n.createElement(
            "div",
            { className: e.join(" ") },
            n.createElement(
              "div",
              { className: i().Throbber },
              n.createElement(a.wUs, { className: i().base }),
              n.createElement(a.wUs, { className: i().blur })
            )
          );
          return n.createElement(
            "div",
            {
              className:
                "center" == this.props.position
                  ? i().throbber_center_wrapper
                  : "",
            },
            t,
            Boolean(this.props.string) &&
              n.createElement(
                "div",
                { className: i().ThrobberText },
                this.props.string
              )
          );
        }
      }
    },
    2840: (e, t, r) => {
      "use strict";
      r.r(t), r.d(t, { default: () => E });
      var n = r(70655),
        a = r(67294),
        o = r(41311),
        i = r(9033),
        s = r.n(i),
        m = r(7707),
        c = r(90666),
        l = r(95598),
        u = r(48341),
        d = r(13596),
        h = r(9669),
        p = r.n(h),
        _ = r(52114);
      var b = r(7573),
        H = r(159),
        S = r(31933),
        y = r(78587),
        C = r(35921),
        v = r(34425),
        f = r(71174);
      r(17010);
      function E() {
        const e = (0, f.L)(),
          t = (0, a.useRef)();
        return (
          (0, a.useEffect)(() => {
            t.current && t.current.TakeFocus();
          }, []),
          a.createElement(
            v.p,
            { navID: "CommunityHomeHeader", NavigationManager: e },
            a.createElement(
              C.s,
              { navRef: t, className: s().CommunityHomeHeader },
              a.createElement(
                "div",
                { className: s().CommunityHomeHeaderTitleSection },
                a.createElement(
                  "div",
                  null,
                  a.createElement(
                    "div",
                    { className: s().CommunityHomeHeaderTitle },
                    (0, o.Xx)("#Community_Home_Header_Title")
                  ),
                  a.createElement(
                    "div",
                    { className: s().CommunityHomeHeaderSubtitle },
                    (0, o.Xx)("#Community_Home_Header_Subtitle")
                  )
                ),
                a.createElement(
                  m.IS,
                  {
                    className: s().AddFriendBtn,
                    href: `${c.De.COMMUNITY_BASE_URL}search/users/`,
                  },
                  (0, o.Xx)("#Community_Home_Header_AddFriend_Button")
                )
              ),
              a.createElement(g, null),
              a.createElement(w, null)
            )
          )
        );
      }
      function g() {
        const [e, t] = (0, a.useState)(""),
          [r, i] = (0, a.useState)([]),
          [h, b] = (0, a.useState)(!1),
          H = (function () {
            const e = (0, a.useMemo)(
                () => (0, c.ip)("personalapps", "application_config") || [],
                []
              ),
              t = (0, a.useMemo)(
                () => (0, c.ip)("popularapps", "application_config") || [],
                []
              ),
              r = [...e, ...t];
            if (r.length)
              return {
                isLoading: 1 === (0, _.wZ)(r, { include_assets: !0 }),
                data: { personalAppIds: e, popularAppIds: t },
              };
            return {
              isLoading: !1,
              data: { personalAppIds: e, popularAppIds: t },
            };
          })();
        if (H.isLoading) return a.createElement(d.V, { position: "center" });
        return a.createElement(
          "div",
          { className: s().CommunityHomeHeaderContent },
          a.createElement(
            C.s,
            { className: s().AppHubsCtn },
            a.createElement(A, {
              appShortcuts: H.data.personalAppIds,
              sectionTitle: (0, o.Xx)("#Community_Home_Header_GameHubs_ForYou"),
              withDivider: H.data.popularAppIds.length > 0,
            }),
            a.createElement(A, {
              appShortcuts: H.data.popularAppIds,
              sectionTitle: (0, o.Xx)(
                "#Community_Home_Header_GameHubs_Popular"
              ),
            })
          ),
          a.createElement(
            C.s,
            {
              onFocus: () => b(!0),
              onBlur: (e) => {
                e.currentTarget.contains(e.relatedTarget) || b(!1);
              },
              className: s().Search,
            },
            a.createElement(
              C.s,
              { className: s().SearchBar },
              a.createElement(
                "div",
                { className: s().InputContainer },
                a.createElement(u.II, {
                  onChange: (e) =>
                    (0, n.mG)(this, void 0, void 0, function* () {
                      t(e.target.value);
                      const r = yield (function (e) {
                        return (0, n.mG)(this, void 0, void 0, function* () {
                          const t = `${c.De.COMMUNITY_BASE_URL}actions/SearchApps/${e}`;
                          return (yield p().get(t)).data;
                        });
                      })(e.target.value);
                      i(r);
                    }),
                  value: e,
                  className: s().Input,
                  placeholder: (0, o.Xx)(
                    "#Community_Home_Header_FindGame_Placeholder"
                  ),
                })
              ),
              a.createElement(
                "div",
                { className: s().SearchIcon },
                a.createElement(l.YtI, null)
              )
            ),
            h &&
              a.createElement(
                C.s,
                { className: s().SearchResultsCtn },
                r.map((e) =>
                  a.createElement(
                    m.IS,
                    {
                      href: `${c.De.COMMUNITY_BASE_URL}app/${e.appid}`,
                      key: e.appid,
                      className: s().SearchResult,
                    },
                    e.name
                  )
                )
              )
          )
        );
      }
      function A(e) {
        const { appShortcuts: t, sectionTitle: r, withDivider: n } = e;
        return t && t.length
          ? a.createElement(
              "div",
              { className: s().AppHubShortcutsCtn },
              a.createElement("div", { className: s().AppHubTitle }, r),
              a.createElement(
                "div",
                {
                  "flow-children": "row",
                  className: (0, b.Z)(
                    s().AppHubShortcutLinks,
                    n ? s().Divider : null
                  ),
                },
                t.map((e, t) => a.createElement(T, { key: t, appId: e }))
              )
            )
          : null;
      }
      function T(e) {
        const t = H.Z.Get().GetApp(e.appId);
        return t
          ? a.createElement(
              m.IS,
              {
                className: s().ShortcutLink,
                href: `${c.De.COMMUNITY_BASE_URL}app/${e.appId}`,
              },
              a.createElement("img", {
                className: s().ShortcutImage,
                src: t.GetAssets().GetLibraryCapsuleURL(),
              })
            )
          : null;
      }
      const I = "subsection",
        N = "browsefilter";
      function w() {
        const e = (0, y.k6)(),
          t = (0, S.ks)(e, I),
          r = (0, S.ks)(e, N);
        return a.createElement(
          "div",
          null,
          a.createElement(k, { activeTab: t, activeSort: r }),
          a.createElement(L, { activeTab: t, activeSort: r })
        );
      }
      function k(e) {
        const { activeTab: t, activeSort: r } = e,
          n = a.useRef();
        a.useEffect(() => {
          const e = document.getElementById(t);
          if (e && (null == n ? void 0 : n.current)) {
            const t = e.offsetLeft + e.clientWidth;
            t > window.innerWidth &&
              n.current.scrollBy(t - window.innerWidth, 0);
          }
        }, [null == n ? void 0 : n.current]);
        return a.createElement(
          C.s,
          { "flow-children": "row", className: s().TabContainer, ref: n },
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
          ].map((e, n) => {
            const i = t ? t === e.id : 0 === n,
              l = e.id ? `subsection=${e.id}` : "",
              u = r ? `browsefilter=${r}` : "",
              d = `${c.De.COMMUNITY_BASE_URL}${u || l ? "?" : ""}${u}${
                l ? "&" : ""
              }${l}`;
            return a.createElement(
              m.IS,
              {
                id: e.id,
                href: d,
                key: e.id,
                className: (0, b.Z)(s().Tab, i ? s().ActiveTab : null),
              },
              (0, o.Xx)(e.label)
            );
          })
        );
      }
      function L(e) {
        const { activeTab: t, activeSort: r } = e;
        return a.createElement(
          C.s,
          { "flow-children": "row", className: s().SortContainer },
          a.createElement(
            "div",
            { className: s().SortIcon },
            a.createElement(l.iS8, null)
          ),
          [
            { label: "#Community_Home_Header_BrowseFilter_Popular", id: "" },
            {
              label: "#Community_Home_Header_BrowseFilter_Recent",
              id: "mostrecent",
            },
          ].map((e, n) => {
            const i = r ? r === e.id : 0 === n,
              l = t ? `subsection=${t}` : "",
              u = e.id ? `browsefilter=${e.id}` : "",
              d = `${c.De.COMMUNITY_BASE_URL}${u || l ? "?" : ""}${u}${
                l ? "&" : ""
              }${l}`;
            return a.createElement(
              m.IS,
              {
                href: d,
                key: e.id,
                className: (0, b.Z)(s().Sort, i ? s().ActiveSort : null),
              },
              (0, o.Xx)(e.label)
            );
          })
        );
      }
    },
  },
]);
