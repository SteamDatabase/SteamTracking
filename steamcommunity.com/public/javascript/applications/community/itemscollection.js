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
    85215: (e, t, a) => {
      "use strict";
      a.r(t), a.d(t, { default: () => k });
      var n = a(45699),
        i = a(12447),
        r = a(76217),
        s = a(37788),
        o = a(89350),
        m = a(8527),
        l = a(84518),
        c = a(60014),
        _ = a(90626),
        d = a(24484);
      var u = a(91336),
        p = a(55263),
        g = a(25706),
        I = a(31011),
        f = a(52038),
        E = a(61859),
        v = a(91675),
        h = a(73745),
        y = a(49395),
        S = a.n(y),
        C = a(85427),
        N = a.n(C),
        w = a(62490);
      function D(e) {
        const {
            oRewardDefinition: t,
            rgRewardItems: a,
            rgUserItemRewarded: i,
            rgCommunityItemDefs: l,
          } = e,
          c = (0, _.useMemo)(() => {
            const e = new Set();
            null == i ||
              i.forEach((t) => {
                e.add(
                  `${t.item_definition.appid}_${t.item_definition.community_item_type}`,
                );
              });
            const t = new Set();
            a.forEach((e) => {
              t.add(`${e.appid}_${e.community_item_type}`);
            });
            const n = new Map();
            return (
              l
                .filter((e) => e.active)
                .filter((e) => t.has(`${e.appid}_${e.item_type}`))
                .sort((t, a) => {
                  const n = e.has(`${t.appid}_${t.item_type}`),
                    i = e.has(`${a.appid}_${a.item_type}`);
                  return (n && i) || (!n && !i)
                    ? a.item_type - t.item_type
                    : n
                      ? -1
                      : 1;
                })
                .forEach((t) => {
                  const a = e.has(`${t.appid}_${t.item_type}`);
                  n.has(t.item_class) || n.set(t.item_class, []),
                    n.get(t.item_class).push({ ...t, user_has_item: a });
                }),
              n
            );
          }, [a, i, l]);
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
            (0, E.we)("#ItemCollection_ForFree_Title"),
          ),
          _.createElement(
            r.Z,
            null,
            _.createElement(
              "div",
              { className: N().QuestInstructions },
              _.createElement(
                "div",
                { className: N().QuestName },
                (0, E.we)("#ItemCollection_ForFree_Discovery"),
              ),
              _.createElement(
                "p",
                null,
                (0, v.nR)(t.rtime_start_time, t.rtime_end_time),
              ),
              _.createElement(
                "p",
                null,
                (0, E.we)("#ItemCollection_ForFree_Discovery_desc"),
                _.createElement("br", null),
                (0, E.oW)(
                  "#ItemCollection_ForFree_Discovery_desc2",
                  _.createElement(n.Ii, {
                    href: `${m.TS.STORE_BASE_URL}explore?dq=widget`,
                  }),
                ),
              ),
            ),
            Array.from(c.keys()).map((e) =>
              _.createElement(T, {
                key: "free_item_class_" + e,
                nAppID: t.appid,
                itemClass: e,
                rgItems: c.get(e),
                bHideItemStore: !0,
              }),
            ),
          ),
        );
      }
      function T(e) {
        const { rgItems: t, itemClass: a, nAppID: i, bHideItemStore: l } = e,
          c = (0, _.useMemo)(
            () => t.filter((e) => e.user_has_item).length,
            [t],
          ),
          d = t.length ? Math.floor((100 * c) / t.length) : 0;
        return _.createElement(
          s.YZ,
          {
            navEntryPreferPosition: o.iU.LAST,
            preferredFocus: !0,
            className: (0, f.A)(N().ItemSection),
          },
          _.createElement(
            r.Z,
            { className: N().ItemCategoryCtn },
            _.createElement(
              r.Z,
              { className: N().CategoryName },
              (0, E.we)("#Sale_Section_PointShop_class_" + a),
            ),
            _.createElement("div", { className: N().SectionLine }),
            !l &&
              _.createElement(
                n.Ii,
                {
                  href: `${m.TS.STORE_BASE_URL}points/shop/app/${i}`,
                  className: N().PointShopLink,
                },
                (0, E.we)("#ItemCollection_Visit"),
              ),
          ),
          _.createElement(
            r.Z,
            { className: N().ItemCtn },
            _.createElement(
              r.Z,
              { className: N().ProgressIndicationCtn },
              _.createElement(I.A, { nPercent: d }),
              _.createElement(
                "div",
                { className: N().ProgressText },
                _.createElement(
                  "div",
                  null,
                  (0, E.we)("#ItemCollection_Collected_Item", c, t.length),
                ),
                _.createElement(
                  "div",
                  null,
                  (0, E.we)("#ItemCollection_Collected_Line"),
                ),
              ),
            ),
            t.map((e) =>
              _.createElement(A, { key: "item_" + e.item_type, item: e }),
            ),
          ),
        );
      }
      function A(e) {
        const { item: t } = e,
          [a, n] = (0, h.OP)(),
          i = t.user_has_item || a,
          s = !i,
          o =
            (!i && 2 != t.item_class && 8 != t.item_class) || 4 == t.item_class
              ? void 0
              : t.item_image_small;
        return _.createElement(
          r.Z,
          {
            ...n,
            onFocus: n.onMouseEnter,
            onBlur: n.onMouseLeave,
            focusable: !0,
            className: N().ItemBackground,
          },
          _.createElement(g.Qc, {
            appid: t.appid,
            item_image_large: t.item_image_large,
            item_image_small: o,
            item_title: t.item_title,
            item_movie_mp4: i ? t.item_movie_mp4_small : void 0,
            item_movie_webm: i ? t.item_movie_webm_small : void 0,
            className: (0, f.A)({ [N().ImgCtn]: !0, [N().ImgGrey]: s }),
            videoClassName: N().ImgCtn,
          }),
        );
      }
      const P = { include_assets: !0 };
      function M(e) {
        const { nAppID: t } = e,
          [a] = (0, p.t7)(t, P);
        return a
          ? _.createElement(
              r.Z,
              { className: N().AppHeaderCtn },
              _.createElement(
                r.Z,
                null,
                _.createElement(
                  r.Z,
                  { className: N().AppHeaderRow },
                  _.createElement(r.Z, { className: N().AppName }, a.GetName()),
                  _.createElement(
                    r.Z,
                    { className: N().PageName },
                    (0, E.we)("#ItemCollection_Title"),
                  ),
                ),
                _.createElement(
                  r.Z,
                  null,
                  (0, E.we)("#ItemCollection_EventSubTitle"),
                ),
              ),
            )
          : null;
      }
      const k = function (e) {
        var t;
        const {
            strProfileName: a,
            strSteamId: n,
            bViewingOwnProfile: s,
            rgCommunityItemDefs: o,
            rgUserCommunityItems: p,
            nAppID: g,
            rgRewardItems: v,
            rgUserItemRewarded: h,
            oRewardDefinition: y,
          } = (function () {
            const [e, t] = (0, _.useState)(() =>
              (0, d.Tc)("profile-itemcollection", "itemcollection_config"),
            );
            return e;
          })(),
          C = (0, u.A)(),
          A =
            null !== (t = null == o ? void 0 : o.length) && void 0 !== t
              ? t
              : 0,
          P = (0, _.useMemo)(() => {
            const e = new Set();
            p.forEach((t) => {
              e.add(`${t.appid}_${t.item_type}`);
            });
            const t = new Set();
            null == v ||
              v.forEach((e) => {
                t.add(e.community_item_type);
              });
            const a = new Map();
            return (
              o
                .filter((e) => e.active && !e.deleted && !t.has(e.item_type))
                .sort((t, a) => {
                  const n = e.has(`${t.appid}_${t.item_type}`),
                    i = e.has(`${a.appid}_${a.item_type}`);
                  return (n && i) || (!n && !i)
                    ? a.item_type - t.item_type
                    : n
                      ? -1
                      : 1;
                })
                .forEach((t) => {
                  a.has(t.item_class) || a.set(t.item_class, []),
                    a
                      .get(t.item_class)
                      .push({
                        ...t,
                        user_has_item: e.has(`${t.appid}_${t.item_type}`),
                      });
                }),
              a
            );
          }, [o, v, p]),
          k = (0, _.useMemo)(() => {
            if (P.has(3)) {
              const e = P.get(3).filter((e) => {
                const t = JSON.parse(e.item_key_values);
                return (
                  e.item_movie_webm && e.item_movie_mp4 && !t.parent_bundle_type
                );
              });
              if (e.length) return (0, w.fW)(e), e[0];
            }
            return null;
          }, [P]),
          b = (null == p ? void 0 : p.length) || 0,
          U = A ? Math.floor((100 * b) / A) : 0;
        return _.createElement(
          i.u,
          { navID: "ItemCollection", NavigationManager: C },
          _.createElement(
            c.nn,
            { feature: "itemcollections" },
            _.createElement(
              l.A,
              { appID: g },
              _.createElement(
                r.Z,
                { className: S().ProfileSubPageContainer },
                k &&
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
                        poster: `${m.TS.MEDIA_CDN_COMMUNITY_URL}images/items/${g}/${k.item_image_large}`,
                      },
                      _.createElement("source", {
                        src: `${m.TS.MEDIA_CDN_COMMUNITY_URL}images/items/${g}/${k.item_movie_webm}`,
                        type: "video/webm",
                      }),
                      Boolean(!m.TS.IN_CLIENT) &&
                        _.createElement("source", {
                          src: `${m.TS.MEDIA_CDN_COMMUNITY_URL}images/items/${g}/${k.item_movie_mp4}`,
                          type: "video/mp4",
                        }),
                    ),
                  ),
                _.createElement(M, { nAppID: g }),
                _.createElement(
                  "div",
                  { className: N().PageSection },
                  _.createElement(
                    "span",
                    null,
                    (0, E.we)("#ItemCollection_Collected", b, A),
                  ),
                  _.createElement(I.z, {
                    className: N().ProgressBar,
                    animate: !0,
                    nPercent: U,
                    indeterminate: !1,
                  }),
                ),
                Boolean(y) &&
                  _.createElement(
                    "div",
                    {
                      className: (0, f.A)(
                        N().PageSection,
                        N().BackgroundGradient,
                        N().Highlight,
                      ),
                    },
                    _.createElement(D, {
                      oRewardDefinition: y,
                      rgRewardItems: v,
                      rgUserItemRewarded: h,
                      rgCommunityItemDefs: o,
                    }),
                  ),
                _.createElement(
                  "div",
                  {
                    className: (0, f.A)(
                      N().PageSection,
                      N().BackgroundGradient,
                    ),
                  },
                  _.createElement(
                    "div",
                    { className: N().HowToGet },
                    (0, E.we)("#ItemCollection_ForPoints_Title"),
                  ),
                  Array.from(P.keys()).map((e) =>
                    _.createElement(T, {
                      key: "item_class_" + e,
                      nAppID: g,
                      itemClass: e,
                      rgItems: P.get(e),
                    }),
                  ),
                ),
              ),
            ),
          ),
        );
      };
    },
    12447: (e, t, a) => {
      "use strict";
      a.d(t, { u: () => m });
      var n = a(8871),
        i = a(90626),
        r = a(78327),
        s = a(85585),
        o = a(7445);
      function m(e) {
        const { children: t, navTreeRef: a, NavigationManager: m, ...l } = e,
          c = i.useRef(),
          _ = (0, n.Ue)(c, a);
        if ((0, r.Qn)()) {
          const e = window.__nav_tree_root;
          return i.createElement(
            s.B2,
            { ...l, navTreeRef: _, parentEmbeddedNavTree: e },
            i.createElement(o.q, null, t),
          );
        }
        return i.createElement(i.Fragment, null, t);
      }
    },
    84518: (e, t, a) => {
      "use strict";
      a.d(t, { A: () => m });
      var n = a(60014),
        i = a(90626),
        r = a(62093),
        s = a(30600),
        o = a(8871);
      function m(e) {
        const { appID: t, feature: a, depth: m, children: l } = e,
          c = (0, n.ru)(a, m),
          _ = (0, r.b)(),
          [d, u] = i.useState(void 0),
          p = i.useCallback(
            (e) => {
              e.isIntersecting &&
                u((e) =>
                  (null == e ? void 0 : e.appID) == t && e.snr == c
                    ? e
                    : { appID: t, snr: c },
                );
            },
            [t, c],
          );
        (0, i.useEffect)(() => {
          d && _.AddImpression(d.appID, d.snr);
        }, [_, d]);
        const g = (0, s.BL)(p),
          I = t && (!d || (d.appID != t && d.snr != c)),
          f = (0, o.Ue)(l.ref, I ? g : void 0);
        return i.cloneElement(l, { ref: f });
      }
    },
    62093: (e, t, a) => {
      "use strict";
      a.d(t, { b: () => r });
      var n = a(90626);
      const i = n.createContext({
        AddImpression: () => {
          console.log("Impression Tracking not enabled");
        },
        BIsValid: () => !1,
      });
      function r() {
        return n.useContext(i);
      }
    },
    24216: (e, t, a) => {
      "use strict";
      a.d(t, { d2: () => _ });
      var n = a(41735),
        i = a.n(n),
        r = a(90626),
        s = a(68797),
        o = a(6144),
        m = a(73745),
        l = a(78327);
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
          var a, n;
          let r = null;
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
              c = await i().get(o, { params: m, withCredentials: t });
            if (
              200 == (null == c ? void 0 : c.status) &&
              1 ==
                (null === (a = null == c ? void 0 : c.data) || void 0 === a
                  ? void 0
                  : a.success) &&
              (null === (n = null == c ? void 0 : c.data) || void 0 === n
                ? void 0
                : n.item_definitions)
            )
              return (
                this.m_mapAppToDefs.set(e, c.data.item_definitions),
                this.GetItemDefsChangeForEventID(e).Dispatch(
                  c.data.item_definitions,
                ),
                1
              );
            r = (0, s.H)(c);
          } catch (e) {
            r = (0, s.H)(e);
          }
          return (
            console.error(
              "CSaleMiniGameItemDefStore.InternalLoadAppCommunityItems failed: on appid " +
                e +
                " edit? " +
                t +
                " error: " +
                (null == r ? void 0 : r.strErrorMsg),
              r,
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
      function _(e, t, a) {
        const n = (function (e, t) {
            const [a, n] = (0, r.useState)(c.Get().GetItemDefForAppID(e));
            return (
              (0, r.useEffect)(() => {
                e &&
                  !c.Get().BHasLoadedDef(e) &&
                  c.Get().LoadAppCommunityItems(e, t);
              }, [e, t]),
              (0, m.hL)(c.Get().GetItemDefsChangeForEventID(e), n),
              a
            );
          })(e, a),
          [i, s] = (0, r.useState)(null);
        return (
          (0, r.useEffect)(() => {
            if (e && n && null == i) {
              const i = n.find(
                (n) => (a || n.active) && n.appid == e && n.item_type == t,
              );
              i && s(i);
            }
          }, [i, n, e, t, a]),
          i
        );
      }
    },
    25706: (e, t, a) => {
      "use strict";
      a.d(t, { Qc: () => c, Zx: () => d, f8: () => _ });
      var n = a(65946),
        i = a(90626),
        r = a(24216),
        s = a(22797),
        o = a(61859),
        m = a(78327),
        l = a(56330);
      function c(e) {
        const {
          appid: t,
          item_image_small: a,
          item_image_large: n,
          item_movie_mp4: r,
          item_movie_webm: s,
          item_title: o,
        } = e;
        if (
          (null == r ? void 0 : r.length) > 0 &&
          (null == s ? void 0 : s.length) > 0
        ) {
          const n = `${m.TS.MEDIA_CDN_COMMUNITY_URL}images/items/${t}/${a}`,
            o = `${m.TS.MEDIA_CDN_COMMUNITY_URL}images/items/${t}/${s}`,
            l = `${m.TS.MEDIA_CDN_COMMUNITY_URL}images/items/${t}/${r}`;
          return i.createElement(
            i.Fragment,
            null,
            i.createElement(
              "video",
              {
                muted: !0,
                controls: !1,
                autoPlay: !0,
                loop: !0,
                poster: n,
                className: e.videoClassName,
              },
              i.createElement("source", { src: o, type: "video/webm" }),
              Boolean(!m.TS.IN_CLIENT) &&
                i.createElement("source", { src: l, type: "video/mp4" }),
            ),
          );
        }
        {
          const r = `${m.TS.MEDIA_CDN_COMMUNITY_URL}images/items/${t}/${a || n}`;
          return i.createElement("img", {
            className: e.className,
            src: r,
            alt: o,
          });
        }
      }
      function _(e) {
        const { appid: t, community_item_type: a, bForEdit: n } = e,
          m = (0, r.d2)(t, a, n),
          _ =
            m && !m.active
              ? i.createElement(
                  "div",
                  { className: l.WarningStylesBackground },
                  (0, o.we)("#Sale_Section_RewardShelf_ItemInActiveWarning"),
                )
              : void 0;
        return m
          ? i.createElement(i.Fragment, null, i.createElement(c, { ...m }), _)
          : i.createElement(s.t, {
              size: "small",
              string: (0, o.we)("#Loading"),
            });
      }
      function d(e) {
        const { section: t, rewardDef: a, language: s } = e,
          o = (0, r.d2)(a.appid, a.community_item_type),
          [l] = (0, n.q3)(() => {
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
        switch (a.community_class) {
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
        return i.createElement(
          "a",
          { href: c },
          i.createElement(_, {
            appid: null == a ? void 0 : a.appid,
            community_item_type: null == a ? void 0 : a.community_item_type,
          }),
          Boolean(l) &&
            i.createElement("span", null, null == o ? void 0 : o.item_name),
        );
      }
    },
    31011: (e, t, a) => {
      "use strict";
      a.d(t, { A: () => o, z: () => s });
      var n = a(90626),
        i = a(52038),
        r = a(40594);
      function s({ nPercent: e, indeterminate: t, animate: a, className: s }) {
        return n.createElement("div", {
          className: (0, i.A)(
            r.ProgressBar,
            a && r.AnimateProgress,
            t && r.Indeterminate,
            s,
          ),
          style: { "--percent": e / 100 },
        });
      }
      const o = ({ nPercent: e, size: t = 120, strokeWidth: a = 20 }) => {
        const s = (t - a) / 2,
          o = 2 * Math.PI * s,
          m = o - (e / 100) * o,
          l = 100 == e;
        return n.createElement(
          "div",
          { className: (0, i.A)({ [r.Circular]: !0, [r.Full]: l }) },
          n.createElement(
            "svg",
            { width: t, height: t, style: { transform: "rotate(-90deg)" } },
            n.createElement("circle", {
              cx: t / 2,
              cy: t / 2,
              r: s,
              stroke: "#0c131d",
              strokeWidth: a,
              fill: "none",
            }),
            n.createElement("circle", {
              cx: t / 2,
              cy: t / 2,
              r: s,
              stroke: "#1a9fff",
              strokeWidth: a,
              fill: "none",
              strokeDasharray: o,
              strokeDashoffset: m,
              style: { transition: "stroke-dashoffset 0.3s ease-in-out" },
            }),
          ),
        );
      };
    },
  },
]);
