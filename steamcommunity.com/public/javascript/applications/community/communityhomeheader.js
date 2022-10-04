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
      var a = r(70655),
        n = r(67294),
        o = r(7707),
        i = r(27745),
        m = r(64839),
        s = r(90666);
      function c(e) {
        const { children: t, navTreeRef: r } = e,
          c = (0, a._T)(e, ["children", "navTreeRef"]),
          l = n.useRef(),
          u = (0, m.BE)(l, r);
        if (s.De.IN_GAMEPADUI) {
          const e = window.__nav_tree_root;
          return n.createElement(
            o.Fe,
            Object.assign({}, c, {
              navTreeRef: u,
              secondary: !0,
              parentEmbeddedNavTree: e,
            }),
            n.createElement(i.O, null, t)
          );
        }
        return n.createElement(n.Fragment, null, t);
      }
    },
    31933: (e, t, r) => {
      "use strict";
      r.d(t, { Ar: () => s, Wo: () => c, i9: () => m, ks: () => o });
      var a = r(67294),
        n = r(78587);
      function o(e, t) {
        let r;
        "string" == typeof e
          ? (r = e)
          : "location" in e
          ? (r = e.location.search)
          : "search" in e && (r = e.search);
        const a = new URLSearchParams(r.substring(1));
        if (a.has(t)) {
          const e = a.getAll(t);
          return e[e.length - 1];
        }
      }
      const i = (e) => null != e;
      function m(e, t, r) {
        const a = new URLSearchParams(e.location.search.substring(1));
        a.delete(t), i(r) && a.append(t, r), e.push(`?${a.toString()}`);
      }
      function s(e, t) {
        const r = (0, n.k6)(),
          s = (0, n.TH)(),
          c = (0, a.useMemo)(() => {
            const r = o(s.search, e);
            return i(r)
              ? i(t)
                ? "boolean" == typeof t
                  ? t.constructor("false" !== r)
                  : t.constructor(r)
                : r
              : t;
          }, [s.search, e, t]),
          l = (0, a.useCallback)(
            (t) => {
              m(r, e, i(t) ? String(t) : null);
            },
            [r, e]
          );
        return [c, l];
      }
      function c(e, t) {
        const r = new URLSearchParams(e.location.search.substring(1));
        for (const e in t)
          if (t.hasOwnProperty(e)) {
            const a = t[e];
            r.delete(e), i(a) && r.append(e, a);
          }
        e.push(`?${r.toString()}`);
      }
    },
    13596: (e, t, r) => {
      "use strict";
      r.d(t, { V: () => m });
      var a = r(67294),
        n = r(95598),
        o = r(50732),
        i = r.n(o);
      class m extends a.PureComponent {
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
          let t = a.createElement(
            "div",
            { className: e.join(" ") },
            a.createElement(
              "div",
              { className: i().Throbber },
              a.createElement(n.wUs, { className: i().base }),
              a.createElement(n.wUs, { className: i().blur })
            )
          );
          return a.createElement(
            "div",
            {
              className:
                "center" == this.props.position
                  ? i().throbber_center_wrapper
                  : "",
            },
            t,
            Boolean(this.props.string) &&
              a.createElement(
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
      r.r(t), r.d(t, { default: () => f });
      var a = r(70655),
        n = r(67294),
        o = r(41311),
        i = r(9033),
        m = r.n(i),
        s = r(7707),
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
        E = r(71174);
      r(17010);
      function f() {
        const e = (0, E.L)(),
          t = (0, n.useRef)();
        return (
          (0, n.useEffect)(() => {
            t.current && t.current.TakeFocus();
          }, []),
          n.createElement(
            v.p,
            { navID: "CommunityHomeHeader", NavigationManager: e },
            n.createElement(
              C.s,
              { navRef: t, className: m().CommunityHomeHeader },
              n.createElement(
                "div",
                { className: m().CommunityHomeHeaderTitleSection },
                n.createElement(
                  "div",
                  null,
                  n.createElement(
                    "div",
                    { className: m().CommunityHomeHeaderTitle },
                    (0, o.Xx)("#Community_Home_Header_Title")
                  ),
                  n.createElement(
                    "div",
                    { className: m().CommunityHomeHeaderSubtitle },
                    (0, o.Xx)("#Community_Home_Header_Subtitle")
                  )
                ),
                n.createElement(
                  s.IS,
                  {
                    className: m().AddFriendBtn,
                    href: `${c.De.COMMUNITY_BASE_URL}search/users/`,
                  },
                  (0, o.Xx)("#Community_Home_Header_AddFriend_Button")
                )
              ),
              n.createElement(g, null),
              n.createElement(w, null)
            )
          )
        );
      }
      function g() {
        const [e, t] = (0, n.useState)(""),
          [r, i] = (0, n.useState)([]),
          [h, b] = (0, n.useState)(!1),
          H = (function () {
            const e = (0, n.useMemo)(
                () => (0, c.ip)("personalapps", "application_config") || [],
                []
              ),
              t = (0, n.useMemo)(
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
        if (H.isLoading) return n.createElement(d.V, { position: "center" });
        return n.createElement(
          "div",
          { className: m().CommunityHomeHeaderContent },
          n.createElement(
            C.s,
            { className: m().AppHubsCtn },
            n.createElement(A, {
              appShortcuts: H.data.personalAppIds,
              sectionTitle: (0, o.Xx)("#Community_Home_Header_GameHubs_ForYou"),
              withDivider: H.data.popularAppIds.length > 0,
            }),
            n.createElement(A, {
              appShortcuts: H.data.popularAppIds,
              sectionTitle: (0, o.Xx)(
                "#Community_Home_Header_GameHubs_Popular"
              ),
            })
          ),
          n.createElement(
            C.s,
            {
              onFocus: () => b(!0),
              onBlur: (e) => {
                e.currentTarget.contains(e.relatedTarget) || b(!1);
              },
              className: m().Search,
            },
            n.createElement(
              C.s,
              { className: m().SearchBar },
              n.createElement(
                "div",
                { className: m().InputContainer },
                n.createElement(u.II, {
                  onChange: (e) =>
                    (0, a.mG)(this, void 0, void 0, function* () {
                      t(e.target.value);
                      const r = yield (function (e) {
                        return (0, a.mG)(this, void 0, void 0, function* () {
                          const t = `${c.De.COMMUNITY_BASE_URL}actions/SearchApps/${e}`;
                          return (yield p().get(t)).data;
                        });
                      })(e.target.value);
                      i(r);
                    }),
                  value: e,
                  className: m().Input,
                  placeholder: (0, o.Xx)(
                    "#Community_Home_Header_FindGame_Placeholder"
                  ),
                })
              ),
              n.createElement(
                "div",
                { className: m().SearchIcon },
                n.createElement(l.YtI, null)
              )
            ),
            h &&
              n.createElement(
                C.s,
                { className: m().SearchResultsCtn },
                r.map((e) =>
                  n.createElement(
                    s.IS,
                    {
                      href: `${c.De.COMMUNITY_BASE_URL}app/${e.appid}`,
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
        const { appShortcuts: t, sectionTitle: r, withDivider: a } = e;
        return t && t.length
          ? n.createElement(
              "div",
              { className: m().AppHubShortcutsCtn },
              n.createElement("div", { className: m().AppHubTitle }, r),
              n.createElement(
                "div",
                {
                  "flow-children": "row",
                  className: (0, b.Z)(
                    m().AppHubShortcutLinks,
                    a ? m().Divider : null
                  ),
                },
                t.map((e, t) => n.createElement(I, { key: t, appId: e }))
              )
            )
          : null;
      }
      function I(e) {
        const t = H.Z.Get().GetApp(e.appId);
        return t
          ? n.createElement(
              s.IS,
              {
                className: m().ShortcutLink,
                href: `${c.De.COMMUNITY_BASE_URL}app/${e.appId}`,
              },
              n.createElement("img", {
                className: m().ShortcutImage,
                src: t.GetAssets().GetLibraryCapsuleURL(),
              })
            )
          : null;
      }
      const T = "subsection",
        N = "browsefilter";
      function w() {
        const e = (0, y.k6)(),
          t = (0, S.ks)(e, T),
          r = (0, S.ks)(e, N);
        return n.createElement(
          "div",
          null,
          n.createElement(k, { activeTab: t, activeSort: r }),
          n.createElement(L, { activeTab: t, activeSort: r })
        );
      }
      function k(e) {
        const { activeTab: t, activeSort: r } = e;
        (0, n.useEffect)(() => {
          document.getElementById(t) &&
            document.getElementById(t).scrollIntoView({ behavior: "smooth" });
        }, [t]);
        return n.createElement(
          C.s,
          { "flow-children": "row", className: m().TabContainer },
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
              l = e.id ? `subsection=${e.id}` : "",
              u = r ? `browsefilter=${r}` : "",
              d = `${c.De.COMMUNITY_BASE_URL}${u || l ? "?" : ""}${u}${
                l ? "&" : ""
              }${l}`;
            return n.createElement(
              s.IS,
              {
                id: e.id,
                href: d,
                key: e.id,
                className: (0, b.Z)(m().Tab, i ? m().ActiveTab : null),
              },
              (0, o.Xx)(e.label)
            );
          })
        );
      }
      function L(e) {
        const { activeTab: t, activeSort: r } = e;
        return n.createElement(
          C.s,
          { "flow-children": "row", className: m().SortContainer },
          n.createElement(
            "div",
            { className: m().SortIcon },
            n.createElement(l.iS8, null)
          ),
          [
            { label: "#Community_Home_Header_BrowseFilter_Popular", id: "" },
            {
              label: "#Community_Home_Header_BrowseFilter_Recent",
              id: "mostrecent",
            },
          ].map((e, a) => {
            const i = r ? r === e.id : 0 === a,
              l = t ? `subsection=${t}` : "",
              u = e.id ? `browsefilter=${e.id}` : "",
              d = `${c.De.COMMUNITY_BASE_URL}${u || l ? "?" : ""}${u}${
                l ? "&" : ""
              }${l}`;
            return n.createElement(
              s.IS,
              {
                href: d,
                key: e.id,
                className: (0, b.Z)(m().Sort, i ? m().ActiveSort : null),
              },
              (0, o.Xx)(e.label)
            );
          })
        );
      }
    },
  },
]);
