/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
  [349],
  {
    85427: (e) => {
      e.exports = {
        AppHeaderCtn: "_1E99FsAAFaUjsZvZ4P5Vzl",
        AppHeaderRow: "_90TlYhcg-nmOFhraNLUeZ",
        AppName: "o1m9BbS1X5-LqjZ8B1v64",
        PageName: "_1qzjiDNpGZYKIvwBx1el1t",
        PageSubTitle: "RrvoHJVvvZtgasOhRJTbT",
        PageSection: "_2j6xq7lPsl9WaiSWYe6FXz",
        BackgroundGradient: "_2Xm3_sNhoAPpV25YOHUm8A",
        Highlight: "YkEMN4dqPVdvdufkn7yLq",
        ItemSection: "_3p4EX6xLxF9ccx1Y_jNDCa",
        HowToGet: "_3Ivasew2xNa_b5CaL7a_In",
        FreeQuestCtn: "_1deYqyFU74gu0n6WzNrTmn",
        QuestInstructions: "_1G50d530t6b5H3PiVNOPBQ",
        QuestName: "kkqhGQQsuX6fr0UUwIxXg",
        ProgressBar: "_16EW5nb2jZ7nNNJtJknVYf",
        ItemCategoryCtn: "aaosYB-OO-EJn70ocmC-J",
        CategoryName: "_1FN5OnaWAzybq4J_ozBIsY",
        SectionLine: "KJMVW9vv7xeG9RxSrn1AZ",
        PointShopLink: "v75cc6-VG2tzRr_W4eQ12",
        ItemCtn: "_1QrzyWO-Wl--rxSjTbLz5p",
        ProgressIndicationCtn: "_15b3bAwBMv-0X3I6uaac6o",
        ProgressText: "HqRb17BK0zUwRPQXbHm9x",
        ItemBackground: "_1b-IbdTr9R3ZKUWl3WIZj5",
        ImgCtn: "_3i3mybB0zixbTQe_pqH6N2",
        ImgGrey: "_3n2Ur4vZ1ojk_YPqd7iZfq",
        PageBackground: "zZIkdIHeeChogTvItWGO2",
      };
    },
    49395: (e) => {
      e.exports = { ProfileSubPageContainer: "_1npy3GFjDHZPSB66m0_INb" };
    },
    56330: (e) => {
      e.exports = {
        ErrorStyles: "_2Sg7W8jsvFcXVuQ7fbhSLJ",
        ErrorStylesWithIcon: "Lc2PK-Vkkvr2TUS0TfCqq",
        ErrorIconLayout: "_42__6kBR5lkICeFfkFnwz",
        ErrorStylesBackground: "_3fVv6M5HyJXcQ6kNF1SvoH",
        ErrorFloatBelow: "_2aKylEXoZKcXuXfFcmcuQc",
        WarningStyles: "_3gxgE6PMPecWZDBSlGjMX_",
        WarningStylesWithIcon: "_1S_uSkD_E5ayHa48JzzE0E",
        WarningIconLayout: "_2jM80ZtA-oI5okavBZZqnF",
        WarningStylesBackground: "UYrHsewdjj7dSkpWGgikw",
        Stuck: "_2b5wWgFg1yvry3TDzRUfFt",
        WarningFloatBelow: "_3e0cNuLANduciMmeZz1dnk",
        InfoStyles: "_2lreMbIjEILzP1Eomy1QZM",
        InfoStylesWithIcon: "_1_-PibdcIVQzDZEP0_PeLV",
        InfoIconLayout: "_3kyPzolDIjhIh7zW0wA6fy",
        InfoStylesBackground: "_3gNTI5UYknHdJwDfou9Iih",
        Padding: "_36hmaGtzxNb1Pql2UhfM5Z",
        NotTooWideModal: "UfQcb76CCbHawnpQ9tbu3",
        ImageManageDialog: "Pl7AIUjh5siFakQJbPFO9",
        SuccessErrorDialog: "_1wBO1L1tT0f1wtl3CpBWbn",
      };
    },
    40594: (e) => {
      e.exports = {
        ProgressBar: "_3szjUMH5QeRwtXAsLRcWt9",
        AnimateProgress: "_3DjdoQj5NoknowwV5t5JPN",
        loadingBarAnim: "_2SA1xV5w3BGirkDWosGYoX",
        Indeterminate: "_3G7KLhFOuTiHW-fGxtWtRs",
        Circular: "_3wMS41OoTPnZyEddTVwzy_",
        Full: "_3t_UEZDy1QxxcYfn3TTvD2",
      };
    },
    36424: (e, t, n) => {
      "use strict";
      n.r(t), n.d(t, { default: () => L });
      var a = n(45699),
        r = n(75422),
        i = n(76217),
        s = n(37788),
        o = n(23310),
        m = n(8527),
        l = n(84518),
        c = n(60014),
        _ = n(90626),
        u = n(24484);
      var d = n(55263),
        p = n(25706),
        g = n(52038),
        f = n(40594);
      function I({ nPercent: e, indeterminate: t, animate: n, className: a }) {
        return _.createElement("div", {
          className: (0, g.A)(
            f.ProgressBar,
            n && f.AnimateProgress,
            t && f.Indeterminate,
            a,
          ),
          style: { "--percent": e / 100 },
        });
      }
      const E = ({ nPercent: e, size: t = 120, strokeWidth: n = 20 }) => {
        const a = (t - n) / 2,
          r = 2 * Math.PI * a,
          i = r - (e / 100) * r,
          s = 100 == e;
        return _.createElement(
          "div",
          { className: (0, g.A)({ [f.Circular]: !0, [f.Full]: s }) },
          _.createElement(
            "svg",
            { width: t, height: t, style: { transform: "rotate(-90deg)" } },
            _.createElement("circle", {
              cx: t / 2,
              cy: t / 2,
              r: a,
              stroke: "#0c131d",
              strokeWidth: n,
              fill: "none",
            }),
            _.createElement("circle", {
              cx: t / 2,
              cy: t / 2,
              r: a,
              stroke: "#1a9fff",
              strokeWidth: n,
              fill: "none",
              strokeDasharray: r,
              strokeDashoffset: i,
              style: { transition: "stroke-dashoffset 0.3s ease-in-out" },
            }),
          ),
        );
      };
      var v = n(61859),
        h = n(91675),
        y = n(73745),
        S = n(49395),
        w = n.n(S),
        C = n(85427),
        N = n.n(C),
        T = n(62490);
      function D(e) {
        const {
            oRewardDefinition: t,
            rgRewardItems: n,
            rgUserItemRewarded: r,
            rgCommunityItemDefs: l,
            bViewingOwnProfile: c,
          } = e,
          u = (0, _.useMemo)(() => {
            const e = new Set();
            null == r ||
              r.forEach((t) => {
                e.add(
                  `${t.item_definition.appid}_${t.item_definition.community_item_type}`,
                );
              });
            const t = new Set();
            n.forEach((e) => {
              t.add(`${e.appid}_${e.community_item_type}`);
            });
            const a = new Map();
            return (
              l
                .filter((e) => e.active)
                .filter((e) => t.has(`${e.appid}_${e.item_type}`))
                .sort((t, n) => {
                  const a = e.has(`${t.appid}_${t.item_type}`),
                    r = e.has(`${n.appid}_${n.item_type}`);
                  return (a && r) || (!a && !r)
                    ? n.item_type - t.item_type
                    : a
                      ? -1
                      : 1;
                })
                .forEach((t) => {
                  const n = e.has(`${t.appid}_${t.item_type}`);
                  a.has(t.item_class) || a.set(t.item_class, []),
                    a.get(t.item_class).push({ ...t, user_has_item: n });
                }),
              a
            );
          }, [n, r, l]);
        return _.createElement(
          s.YZ,
          {
            navEntryPreferPosition: o.iU.LAST,
            preferredFocus: !0,
            className: N().FreeQuestCtn,
          },
          _.createElement(
            "div",
            { className: N().HowToGet },
            (0, v.we)("#ItemCollection_ForFree_Title"),
          ),
          _.createElement(
            i.Z,
            null,
            _.createElement(
              "div",
              { className: N().QuestInstructions },
              _.createElement(
                "div",
                { className: N().QuestName },
                (0, v.we)("#ItemCollection_ForFree_Discovery"),
              ),
              _.createElement(
                "p",
                null,
                (0, h.nR)(t.rtime_start_time, t.rtime_end_time),
              ),
              _.createElement(
                "p",
                null,
                (0, v.we)("#ItemCollection_ForFree_Discovery_desc"),
                _.createElement("br", null),
                (0, v.oW)(
                  "#ItemCollection_ForFree_Discovery_desc2",
                  _.createElement(a.Ii, {
                    href: `${m.TS.STORE_BASE_URL}explore?dq=widget`,
                  }),
                ),
              ),
            ),
            Array.from(u.keys()).map((e) =>
              _.createElement(P, {
                key: "free_item_class_" + e,
                bViewingOwnProfile: c,
                nAppID: t.appid,
                itemClass: e,
                rgItems: u.get(e),
                bHideItemStore: !0,
              }),
            ),
          ),
        );
      }
      function P(e) {
        const {
            rgItems: t,
            itemClass: n,
            nAppID: a,
            bViewingOwnProfile: r,
          } = e,
          m = (0, _.useMemo)(
            () => t.filter((e) => e.user_has_item).length,
            [t],
          ),
          l = t.length ? Math.floor((100 * m) / t.length) : 0;
        return _.createElement(
          s.YZ,
          {
            navEntryPreferPosition: o.iU.LAST,
            preferredFocus: !0,
            className: (0, g.A)(N().ItemSection),
          },
          _.createElement(A, { ...e }),
          _.createElement(
            i.Z,
            { className: N().ItemCategoryCtn },
            _.createElement(
              i.Z,
              { className: N().CategoryName },
              (0, v.we)("#Sale_Section_PointShop_class_" + n),
            ),
            _.createElement("div", { className: N().SectionLine }),
            _.createElement(M, { ...e }),
          ),
          _.createElement(
            i.Z,
            { className: N().ItemCtn },
            _.createElement(
              i.Z,
              { className: N().ProgressIndicationCtn },
              _.createElement(E, { nPercent: l }),
              _.createElement(
                "div",
                { className: N().ProgressText },
                _.createElement(
                  "div",
                  null,
                  (0, v.we)("#ItemCollection_Collected_Item", m, t.length),
                ),
                _.createElement(
                  "div",
                  null,
                  (0, v.we)("#ItemCollection_Collected_Line"),
                ),
              ),
            ),
            t.map((e) =>
              _.createElement(b, { key: "item_" + e.item_type, item: e }),
            ),
          ),
        );
      }
      function A(e) {
        const { itemClass: t, nAppID: n } = e;
        return 2 !== t
          ? null
          : _.createElement(
              i.Z,
              { className: N().HowToGet },
              (0, v.we)("#ItemCollection_GameCards_Title"),
            );
      }
      function M(e) {
        const {
          itemClass: t,
          nAppID: n,
          bViewingOwnProfile: r,
          bHideItemStore: i,
        } = e;
        return 2 == t && r
          ? _.createElement(
              a.Ii,
              {
                href: `${m.TS.COMMUNITY_BASE_URL}my/gamecards/${n}`,
                className: N().PointShopLink,
              },
              (0, v.we)("#ItemCollection_Visit_Badge"),
            )
          : i
            ? null
            : _.createElement(
                a.Ii,
                {
                  href: `${m.TS.STORE_BASE_URL}points/shop/app/${n}`,
                  className: N().PointShopLink,
                },
                (0, v.we)("#ItemCollection_Visit"),
              );
      }
      function b(e) {
        const { item: t } = e,
          [n, a] = (0, y.OP)(),
          r = t.user_has_item || n,
          s = !r,
          o =
            (!r && 2 != t.item_class && 8 != t.item_class) || 4 == t.item_class
              ? void 0
              : t.item_image_small;
        return _.createElement(
          i.Z,
          {
            ...a,
            onFocus: a.onMouseEnter,
            onBlur: a.onMouseLeave,
            focusable: !0,
            className: N().ItemBackground,
          },
          _.createElement(p.Qc, {
            appid: t.appid,
            item_image_large: t.item_image_large,
            item_image_small: o,
            item_title: t.item_title,
            item_movie_mp4: r ? t.item_movie_mp4_small : void 0,
            item_movie_webm: r ? t.item_movie_webm_small : void 0,
            className: (0, g.A)({ [N().ImgCtn]: !0, [N().ImgGrey]: s }),
            videoClassName: N().ImgCtn,
          }),
        );
      }
      const k = { include_assets: !0 };
      function U(e) {
        const { nAppID: t } = e,
          [n] = (0, d.t7)(t, k);
        return n
          ? _.createElement(
              i.Z,
              { className: N().AppHeaderCtn },
              _.createElement(
                i.Z,
                null,
                _.createElement(
                  i.Z,
                  { className: N().AppHeaderRow },
                  _.createElement(i.Z, { className: N().AppName }, n.GetName()),
                  _.createElement(
                    i.Z,
                    { className: N().PageName },
                    (0, v.we)("#ItemCollection_Title"),
                  ),
                ),
                _.createElement(
                  i.Z,
                  null,
                  (0, v.we)("#ItemCollection_EventSubTitle"),
                ),
              ),
            )
          : null;
      }
      const L = function (e) {
        const {
            strProfileName: t,
            strSteamId: n,
            bViewingOwnProfile: a,
            rgCommunityItemDefs: s,
            rgUserCommunityItems: o,
            nAppID: d,
            rgRewardItems: p,
            rgUserItemRewarded: f,
            oRewardDefinition: E,
          } = (function () {
            const [e, t] = (0, _.useState)(() =>
              (0, u.Tc)("profile-itemcollection", "itemcollection_config"),
            );
            return e;
          })(),
          h = (0, _.useMemo)(() => {
            const e = new Set();
            o.forEach((t) => {
              e.add(`${t.appid}_${t.item_type}`);
            });
            const t = new Set();
            null == p ||
              p.forEach((e) => {
                t.add(e.community_item_type);
              });
            const n = new Map();
            return (
              s
                .filter(
                  (e) =>
                    e.active &&
                    !e.deleted &&
                    !t.has(e.item_type) &&
                    1 != e.item_class,
                )
                .sort((t, n) => {
                  const a = e.has(`${t.appid}_${t.item_type}`),
                    r = e.has(`${n.appid}_${n.item_type}`);
                  return (a && r) || (!a && !r)
                    ? n.item_type - t.item_type
                    : a
                      ? -1
                      : 1;
                })
                .forEach((t) => {
                  n.has(t.item_class) || n.set(t.item_class, []),
                    n
                      .get(t.item_class)
                      .push({
                        ...t,
                        user_has_item: e.has(`${t.appid}_${t.item_type}`),
                      });
                }),
              n
            );
          }, [s, p, o]),
          y = (0, _.useMemo)(() => {
            if (h.has(3)) {
              const e = h.get(3).filter((e) => {
                JSON.parse(e.item_key_values);
                return e.item_movie_webm && e.item_movie_mp4;
              });
              if (e.length) return (0, T.fW)(e), e[0];
            }
            return null;
          }, [h]),
          S = (0, _.useMemo)(() => {
            let e = new Map();
            return (
              s.forEach((t) => {
                e.set(t.item_type, t);
              }),
              e
            );
          }, [s]),
          C = (0, _.useMemo)(
            () => Array.from(h.keys()).sort((e, t) => t - e),
            [h],
          ),
          [A, M, b] = _.useMemo(() => {
            const e =
                null == o
                  ? void 0
                  : o.filter((e) => {
                      const t = S.get(e.item_type);
                      return !t || (2 != t.item_class && 1 != t.item_class);
                    }),
              t = s.filter((e) => 2 != e.item_class && 1 != e.item_class),
              n = e.length || 0,
              a = t.length || 0;
            return [a ? Math.floor((100 * n) / a) : 0, a, n];
          }, [S, s, o]);
        return _.createElement(
          r.u,
          { navID: "ItemCollection" },
          _.createElement(
            c.nn,
            { feature: "itemcollections" },
            _.createElement(
              l.A,
              { appID: d },
              _.createElement(
                i.Z,
                { className: w().ProfileSubPageContainer },
                y &&
                  _.createElement(
                    "div",
                    { className: N().PageBackground },
                    _.createElement(
                      "video",
                      {
                        preload: "auto",
                        playsInline: !0,
                        muted: !0,
                        autoPlay: !0,
                        loop: !0,
                        poster: `${m.TS.MEDIA_CDN_COMMUNITY_URL}images/items/${d}/${y.item_image_large}`,
                      },
                      _.createElement("source", {
                        src: `${m.TS.MEDIA_CDN_COMMUNITY_URL}images/items/${d}/${y.item_movie_webm}`,
                        type: "video/webm",
                      }),
                      Boolean(!m.TS.IN_CLIENT) &&
                        _.createElement("source", {
                          src: `${m.TS.MEDIA_CDN_COMMUNITY_URL}images/items/${d}/${y.item_movie_mp4}`,
                          type: "video/mp4",
                        }),
                    ),
                  ),
                _.createElement(U, { nAppID: d }),
                _.createElement(
                  "div",
                  { className: N().PageSection },
                  _.createElement(
                    "span",
                    null,
                    (0, v.we)("#ItemCollection_Collected", b, M),
                  ),
                  _.createElement(I, {
                    className: N().ProgressBar,
                    animate: !0,
                    nPercent: A,
                    indeterminate: !1,
                  }),
                ),
                Boolean(E) &&
                  _.createElement(
                    "div",
                    {
                      className: (0, g.A)(
                        N().PageSection,
                        N().BackgroundGradient,
                        N().Highlight,
                      ),
                    },
                    _.createElement(D, {
                      oRewardDefinition: E,
                      bViewingOwnProfile: a,
                      rgRewardItems: p,
                      rgUserItemRewarded: f,
                      rgCommunityItemDefs: s,
                    }),
                  ),
                _.createElement(
                  "div",
                  {
                    className: (0, g.A)(
                      N().PageSection,
                      N().BackgroundGradient,
                    ),
                  },
                  _.createElement(
                    "div",
                    { className: N().HowToGet },
                    (0, v.we)("#ItemCollection_ForPoints_Title"),
                  ),
                  C.map((e) =>
                    _.createElement(P, {
                      key: "item_class_" + e,
                      nAppID: d,
                      itemClass: e,
                      rgItems: h.get(e),
                      bViewingOwnProfile: a,
                      bHideItemStore: 2 == e,
                    }),
                  ),
                ),
              ),
            ),
          ),
        );
      };
    },
    75422: (e, t, n) => {
      "use strict";
      n.d(t, { u: () => I });
      var a = n(8871),
        r = n(90626),
        i = n(78327),
        s = n(85585),
        o = n(7445),
        m = n(87133),
        l = n(8527),
        c = n(92757),
        _ = n(39575),
        u = n(76217),
        d = n(60778);
      const p = "FocusNavHistoryID",
        g = new d.wd("FocusHistory").Debug;
      function f(e) {
        const { children: t, timeoutMS: n, ...a } = e,
          i = (function (e = 2) {
            const t = (0, c.W6)(),
              n = r.useRef(void 0),
              a = (0, c.zy)(),
              i = l.TS.IN_STEAMUI,
              s = (null == a ? void 0 : a.state) && a.state[p],
              o = r.useRef(void 0),
              [m, u] = r.useState(s);
            return (
              r.useLayoutEffect(() => {
                if (!n.current) return;
                const e = n.current;
                return e
                  .Node()
                  .Tree.WindowContext.FocusChangedCallbacks.Register(
                    (n, a, r) => {
                      const s = t.location;
                      let m = s.state && s.state[p];
                      m ||
                        ((m = i
                          ? `State_${s.key}`
                          : `State_${e.Node().Tree.id}`),
                        (o.current = m),
                        t.replace({ ...s, state: { ...s.state, [p]: m } })),
                        o.current == m &&
                          (i
                            ? e.SaveState(m)
                            : window.history.replaceState(
                                {
                                  ...window.history.state,
                                  [m]: (0, _.Ze)(e.Node()),
                                },
                                "",
                              ));
                    },
                  ).Unregister;
              }, [t, i]),
              r.useLayoutEffect(() => {
                if (n.current && o.current != s) {
                  if (!s) return void u(void 0);
                  const t = n.current.NavTree().DeferredFocus;
                  t.SuppressFocus(),
                    g(
                      `Start restoring history for ${s} in tree ${n.current.NavTree().id}, suppressing focus`,
                    );
                  const a = window.setTimeout(() => {
                    u(s);
                  }, e);
                  return () => {
                    window.clearTimeout(a), t.ExecuteQueuedFocus();
                  };
                }
              }, [s, e]),
              r.useEffect(() => {
                var e;
                if (!m || !n.current) return;
                const t = i
                    ? null
                    : null === (e = window.history.state) || void 0 === e
                      ? void 0
                      : e[m],
                  a = n.current.NavTree().DeferredFocus;
                let r = !1;
                i
                  ? (r = n.current.RestoreState(m, 1))
                  : t && ((0, _.LU)(n.current.Node(), t, 0), (r = !0)),
                  g(
                    `Completed restoring history for state ${m} - ${r ? "had history." : "no history for this state."}`,
                  ),
                  r ? a.Reset() : a.ExecuteQueuedFocus(),
                  (o.current = m);
              }, [m, t, i]),
              n
            );
          })(n);
        return r.createElement(u.Z, { ...a, navRef: i }, t);
      }
      const I = r.forwardRef(function (e, t) {
        const { children: n, navTreeRef: l, ...c } = e,
          _ = r.useRef(void 0),
          u = (0, a.Ue)(_, l),
          d = (0, i.Qn)(),
          p = (0, m.AO)("__nav_tree_root");
        return r.createElement(
          s.B2,
          {
            ...c,
            navTreeRef: u,
            ref: t,
            parentEmbeddedNavTree: p,
            disabledRoot: !d,
          },
          r.createElement(
            f,
            { style: { display: "contents" } },
            r.createElement(o.q, { disableFocusRing: !d }, n),
          ),
        );
      });
    },
    84518: (e, t, n) => {
      "use strict";
      n.d(t, { A: () => m });
      var a = n(60014),
        r = n(90626),
        i = n(62093),
        s = n(30600),
        o = n(8871);
      function m(e) {
        const { appID: t, feature: n, depth: m, children: l } = e,
          c = (0, a.ru)(n, m),
          _ = (0, i.b)(),
          [u, d] = r.useState(void 0),
          p = r.useCallback(
            (e) => {
              e.isIntersecting &&
                d((e) =>
                  (null == e ? void 0 : e.appID) == t &&
                  (null == e ? void 0 : e.snr) == c
                    ? e
                    : { appID: t, snr: c },
                );
            },
            [t, c],
          );
        (0, r.useEffect)(() => {
          u && null != u.appID && _.AddImpression(u.appID, u.snr);
        }, [_, u]);
        const g = (0, s.BL)(p),
          f = t && (!u || (u.appID != t && u.snr != c)),
          I = (0, o.Ue)(l.props.ref, f ? g : void 0);
        return r.cloneElement(l, { ref: I });
      }
    },
    62093: (e, t, n) => {
      "use strict";
      n.d(t, { b: () => i });
      var a = n(90626);
      const r = a.createContext({
        AddImpression: () => {
          console.log("Impression Tracking not enabled");
        },
        BIsValid: () => !1,
      });
      function i() {
        return a.useContext(r);
      }
    },
    24216: (e, t, n) => {
      "use strict";
      n.d(t, { d2: () => _ });
      var a = n(41735),
        r = n.n(a),
        i = n(90626),
        s = n(68797),
        o = n(6144),
        m = n(73745),
        l = n(78327);
      class c {
        GetItemDefForAppID(e) {
          return this.m_mapAppToDefs.get(e);
        }
        GetItemDefsChangeForEventID(e) {
          return (
            this.m_listChangeCallback.has(e) ||
              this.m_listChangeCallback.set(e, new o.lu()),
            this.m_listChangeCallback.get(e)
          );
        }
        BHasLoadedDef(e) {
          return this.m_mapPromises.has(e);
        }
        SetTestItemDefs(e, t) {
          this.m_mapAppToDefs.set(e, t),
            this.GetItemDefsChangeForEventID(e).Dispatch(t),
            this.m_mapPromises.set(e, Promise.resolve(1));
        }
        async LoadAppCommunityItems(e, t) {
          return e
            ? (this.m_mapPromises.has(e) ||
                this.m_mapPromises.set(
                  e,
                  this.InternalLoadAppCommunityItems(e, t),
                ),
              this.m_mapPromises.get(e))
            : 2;
        }
        async InternalLoadAppCommunityItems(e, t) {
          var n, a;
          let i = null;
          try {
            const o =
                l.TS.COMMUNITY_BASE_URL +
                (t
                  ? "minigame/ajaxgetgameitemdefsforeditor"
                  : "minigame/ajaxgetgameitemdefs"),
              m = {
                appid: e,
                origin: self.origin,
                l: l.TS.LANGUAGE,
                sessionid: t ? l.TS.SESSIONID : void 0,
              },
              c = await r().get(o, { params: m, withCredentials: t });
            if (
              200 == (null == c ? void 0 : c.status) &&
              1 ==
                (null === (n = null == c ? void 0 : c.data) || void 0 === n
                  ? void 0
                  : n.success) &&
              (null === (a = null == c ? void 0 : c.data) || void 0 === a
                ? void 0
                : a.item_definitions)
            )
              return (
                this.m_mapAppToDefs.set(e, c.data.item_definitions),
                this.GetItemDefsChangeForEventID(e).Dispatch(
                  c.data.item_definitions,
                ),
                1
              );
            i = (0, s.H)(c);
          } catch (e) {
            i = (0, s.H)(e);
          }
          return (
            console.error(
              "CSaleMiniGameItemDefStore.InternalLoadAppCommunityItems failed: on appid " +
                e +
                " edit? " +
                t +
                " error: " +
                (null == i ? void 0 : i.strErrorMsg),
              i,
            ),
            2
          );
        }
        static Get() {
          return (
            c.s_Singleton ||
              ((c.s_Singleton = new c()),
              c.s_Singleton.Init(),
              "dev" == l.TS.WEB_UNIVERSE &&
                (window.g_SaleMiniGameItemDefStore = c.s_Singleton)),
            c.s_Singleton
          );
        }
        constructor() {
          (this.m_mapAppToDefs = new Map()),
            (this.m_mapPromises = new Map()),
            (this.m_listChangeCallback = new Map());
        }
        Init() {}
      }
      function _(e, t, n) {
        const a = (function (e, t) {
            const [n, a] = (0, i.useState)(c.Get().GetItemDefForAppID(e));
            return (
              (0, i.useEffect)(() => {
                e &&
                  !c.Get().BHasLoadedDef(e) &&
                  c.Get().LoadAppCommunityItems(e, t);
              }, [e, t]),
              (0, m.hL)(c.Get().GetItemDefsChangeForEventID(e), a),
              n
            );
          })(e, n),
          [r, s] = (0, i.useState)(null);
        return (
          (0, i.useEffect)(() => {
            if (e && a && null == r) {
              const r = a.find(
                (a) => (n || a.active) && a.appid == e && a.item_type == t,
              );
              r && s(r);
            }
          }, [r, a, e, t, n]),
          r
        );
      }
    },
    25706: (e, t, n) => {
      "use strict";
      n.d(t, { Qc: () => c, Zx: () => u, f8: () => _ });
      var a = n(65946),
        r = n(90626),
        i = n(24216),
        s = n(22797),
        o = n(61859),
        m = n(78327),
        l = n(56330);
      function c(e) {
        const {
          appid: t,
          item_image_small: n,
          item_image_large: a,
          item_movie_mp4: i,
          item_movie_webm: s,
          item_title: o,
        } = e;
        if (
          (null == i ? void 0 : i.length) > 0 &&
          (null == s ? void 0 : s.length) > 0
        ) {
          const a = `${m.TS.MEDIA_CDN_COMMUNITY_URL}images/items/${t}/${n}`,
            o = `${m.TS.MEDIA_CDN_COMMUNITY_URL}images/items/${t}/${s}`,
            l = `${m.TS.MEDIA_CDN_COMMUNITY_URL}images/items/${t}/${i}`;
          return r.createElement(
            r.Fragment,
            null,
            r.createElement(
              "video",
              {
                muted: !0,
                controls: !1,
                autoPlay: !0,
                loop: !0,
                poster: a,
                playsInline: !0,
                className: e.videoClassName,
              },
              r.createElement("source", { src: o, type: "video/webm" }),
              Boolean(!m.TS.IN_CLIENT) &&
                r.createElement("source", { src: l, type: "video/mp4" }),
            ),
          );
        }
        {
          const i = `${m.TS.MEDIA_CDN_COMMUNITY_URL}images/items/${t}/${n || a}`;
          return r.createElement("img", {
            className: e.className,
            src: i,
            alt: o,
          });
        }
      }
      function _(e) {
        const { appid: t, community_item_type: n, bForEdit: a } = e,
          m = (0, i.d2)(t, n, a),
          _ =
            m && !m.active
              ? r.createElement(
                  "div",
                  { className: l.WarningStylesBackground },
                  (0, o.we)("#Sale_Section_RewardShelf_ItemInActiveWarning"),
                )
              : void 0;
        return m
          ? r.createElement(r.Fragment, null, r.createElement(c, { ...m }), _)
          : r.createElement(s.t, {
              size: "small",
              string: (0, o.we)("#Loading"),
            });
      }
      function u(e) {
        const { section: t, rewardDef: n, language: s } = e,
          o = (0, i.d2)(n.appid, n.community_item_type),
          [l] = (0, a.q3)(() => {
            var e;
            return [
              Boolean(
                null === (e = t.rewards) || void 0 === e
                  ? void 0
                  : e.show_reward_item_name,
              ),
            ];
          });
        let c;
        switch (n.community_class) {
          case 14:
          case 15:
            c = `${m.TS.COMMUNITY_BASE_URL}my/edit/avatar`;
            break;
          case 1:
            c = `${m.TS.COMMUNITY_BASE_URL}my/edit/favoritebadge`;
            break;
          case 3:
          case 8:
            c = `${m.TS.COMMUNITY_BASE_URL}my/edit/background`;
            break;
          case 13:
            c = `${m.TS.COMMUNITY_BASE_URL}my/edit/miniprofile`;
            break;
          case 11:
            c = `${m.TS.COMMUNITY_BASE_URL}chat`;
        }
        return r.createElement(
          "a",
          { href: c },
          r.createElement(_, {
            appid: null == n ? void 0 : n.appid,
            community_item_type: null == n ? void 0 : n.community_item_type,
          }),
          Boolean(l) &&
            r.createElement("span", null, null == o ? void 0 : o.item_name),
        );
      }
    },
  },
]);
