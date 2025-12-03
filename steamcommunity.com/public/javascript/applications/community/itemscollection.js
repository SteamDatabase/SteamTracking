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
    36424: (e, t, a) => {
      "use strict";
      a.r(t), a.d(t, { default: () => U });
      var n = a(45699),
        i = a(12447),
        s = a(76217),
        r = a(37788),
        m = a(23310),
        o = a(95679),
        l = a(8527),
        c = a(84518),
        _ = a(60014),
        d = a(90626),
        u = a(24484);
      var p = a(55263),
        I = a(25706),
        g = a(52038),
        E = a(40594);
      function f({ nPercent: e, indeterminate: t, animate: a, className: n }) {
        return d.createElement("div", {
          className: (0, g.A)(
            E.ProgressBar,
            a && E.AnimateProgress,
            t && E.Indeterminate,
            n,
          ),
          style: { "--percent": e / 100 },
        });
      }
      const C = ({ nPercent: e, size: t = 120, strokeWidth: a = 20 }) => {
        const n = (t - a) / 2,
          i = 2 * Math.PI * n,
          s = i - (e / 100) * i,
          r = 100 == e;
        return d.createElement(
          "div",
          { className: (0, g.A)({ [E.Circular]: !0, [E.Full]: r }) },
          d.createElement(
            "svg",
            { width: t, height: t, style: { transform: "rotate(-90deg)" } },
            d.createElement("circle", {
              cx: t / 2,
              cy: t / 2,
              r: n,
              stroke: "#0c131d",
              strokeWidth: a,
              fill: "none",
            }),
            d.createElement("circle", {
              cx: t / 2,
              cy: t / 2,
              r: n,
              stroke: "#1a9fff",
              strokeWidth: a,
              fill: "none",
              strokeDasharray: i,
              strokeDashoffset: s,
              style: { transition: "stroke-dashoffset 0.3s ease-in-out" },
            }),
          ),
        );
      };
      var y = a(61859),
        v = a(91675),
        h = a(73745),
        S = a(49395),
        w = a.n(S),
        k = a(85427),
        N = a.n(k),
        B = a(62490);
      function P(e) {
        const {
            oRewardDefinition: t,
            rgRewardItems: a,
            rgUserItemRewarded: i,
            rgCommunityItemDefs: o,
            bViewingOwnProfile: c,
          } = e,
          _ = (0, d.useMemo)(() => {
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
              o
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
          }, [a, i, o]);
        return d.createElement(
          r.YZ,
          {
            navEntryPreferPosition: m.iU.LAST,
            preferredFocus: !0,
            className: N().FreeQuestCtn,
          },
          d.createElement(
            "div",
            { className: N().HowToGet },
            (0, y.we)("#ItemCollection_ForFree_Title"),
          ),
          d.createElement(
            s.Z,
            null,
            d.createElement(
              "div",
              { className: N().QuestInstructions },
              d.createElement(
                "div",
                { className: N().QuestName },
                (0, y.we)("#ItemCollection_ForFree_Discovery"),
              ),
              d.createElement(
                "p",
                null,
                (0, v.nR)(t.rtime_start_time, t.rtime_end_time),
              ),
              d.createElement(
                "p",
                null,
                (0, y.we)("#ItemCollection_ForFree_Discovery_desc"),
                d.createElement("br", null),
                (0, y.oW)(
                  "#ItemCollection_ForFree_Discovery_desc2",
                  d.createElement(n.Ii, {
                    href: `${l.TS.STORE_BASE_URL}explore?dq=widget`,
                  }),
                ),
              ),
            ),
            Array.from(_.keys()).map((e) =>
              d.createElement(T, {
                key: "free_item_class_" + e,
                bViewingOwnProfile: c,
                nAppID: t.appid,
                itemClass: e,
                rgItems: _.get(e),
                bHideItemStore: !0,
              }),
            ),
          ),
        );
      }
      function T(e) {
        const {
            rgItems: t,
            itemClass: a,
            nAppID: n,
            bViewingOwnProfile: i,
          } = e,
          o = (0, d.useMemo)(
            () => t.filter((e) => e.user_has_item).length,
            [t],
          ),
          l = t.length ? Math.floor((100 * o) / t.length) : 0;
        return d.createElement(
          r.YZ,
          {
            navEntryPreferPosition: m.iU.LAST,
            preferredFocus: !0,
            className: (0, g.A)(N().ItemSection),
          },
          d.createElement(D, { ...e }),
          d.createElement(
            s.Z,
            { className: N().ItemCategoryCtn },
            d.createElement(
              s.Z,
              { className: N().CategoryName },
              (0, y.we)("#Sale_Section_PointShop_class_" + a),
            ),
            d.createElement("div", { className: N().SectionLine }),
            d.createElement(A, { ...e }),
          ),
          d.createElement(
            s.Z,
            { className: N().ItemCtn },
            d.createElement(
              s.Z,
              { className: N().ProgressIndicationCtn },
              d.createElement(C, { nPercent: l }),
              d.createElement(
                "div",
                { className: N().ProgressText },
                d.createElement(
                  "div",
                  null,
                  (0, y.we)("#ItemCollection_Collected_Item", o, t.length),
                ),
                d.createElement(
                  "div",
                  null,
                  (0, y.we)("#ItemCollection_Collected_Line"),
                ),
              ),
            ),
            t.map((e) =>
              d.createElement(M, { key: "item_" + e.item_type, item: e }),
            ),
          ),
        );
      }
      function D(e) {
        const { itemClass: t, nAppID: a } = e;
        return t !== o.WB.k_ECommunityItemClass_GameCard
          ? null
          : d.createElement(
              s.Z,
              { className: N().HowToGet },
              (0, y.we)("#ItemCollection_GameCards_Title"),
            );
      }
      function A(e) {
        const {
          itemClass: t,
          nAppID: a,
          bViewingOwnProfile: i,
          bHideItemStore: s,
        } = e;
        return t == o.WB.k_ECommunityItemClass_GameCard && i
          ? d.createElement(
              n.Ii,
              {
                href: `${l.TS.COMMUNITY_BASE_URL}my/gamecards/${a}`,
                className: N().PointShopLink,
              },
              (0, y.we)("#ItemCollection_Visit_Badge"),
            )
          : s
            ? null
            : d.createElement(
                n.Ii,
                {
                  href: `${l.TS.STORE_BASE_URL}points/shop/app/${a}`,
                  className: N().PointShopLink,
                },
                (0, y.we)("#ItemCollection_Visit"),
              );
      }
      function M(e) {
        const { item: t } = e,
          [a, n] = (0, h.OP)(),
          i = t.user_has_item || a,
          r = !i,
          m =
            (!i &&
              t.item_class != o.WB.k_ECommunityItemClass_GameCard &&
              t.item_class != o.WB.k_ECommunityItemClass_ProfileModifier) ||
            t.item_class == o.WB.k_ECommunityItemClass_Emoticon
              ? void 0
              : t.item_image_small;
        return d.createElement(
          s.Z,
          {
            ...n,
            onFocus: n.onMouseEnter,
            onBlur: n.onMouseLeave,
            focusable: !0,
            className: N().ItemBackground,
          },
          d.createElement(I.Qc, {
            appid: t.appid,
            item_image_large: t.item_image_large,
            item_image_small: m,
            item_title: t.item_title,
            item_movie_mp4: i ? t.item_movie_mp4_small : void 0,
            item_movie_webm: i ? t.item_movie_webm_small : void 0,
            className: (0, g.A)({ [N().ImgCtn]: !0, [N().ImgGrey]: r }),
            videoClassName: N().ImgCtn,
          }),
        );
      }
      const b = { include_assets: !0 };
      function W(e) {
        const { nAppID: t } = e,
          [a] = (0, p.t7)(t, b);
        return a
          ? d.createElement(
              s.Z,
              { className: N().AppHeaderCtn },
              d.createElement(
                s.Z,
                null,
                d.createElement(
                  s.Z,
                  { className: N().AppHeaderRow },
                  d.createElement(s.Z, { className: N().AppName }, a.GetName()),
                  d.createElement(
                    s.Z,
                    { className: N().PageName },
                    (0, y.we)("#ItemCollection_Title"),
                  ),
                ),
                d.createElement(
                  s.Z,
                  null,
                  (0, y.we)("#ItemCollection_EventSubTitle"),
                ),
              ),
            )
          : null;
      }
      const U = function (e) {
        const {
            strProfileName: t,
            strSteamId: a,
            bViewingOwnProfile: n,
            rgCommunityItemDefs: r,
            rgUserCommunityItems: m,
            nAppID: p,
            rgRewardItems: I,
            rgUserItemRewarded: E,
            oRewardDefinition: C,
          } = (function () {
            const [e, t] = (0, d.useState)(() =>
              (0, u.Tc)("profile-itemcollection", "itemcollection_config"),
            );
            return e;
          })(),
          v = (0, d.useMemo)(() => {
            const e = new Set();
            m.forEach((t) => {
              e.add(`${t.appid}_${t.item_type}`);
            });
            const t = new Set();
            null == I ||
              I.forEach((e) => {
                t.add(e.community_item_type);
              });
            const a = new Map();
            return (
              r
                .filter(
                  (e) =>
                    e.active &&
                    !e.deleted &&
                    !t.has(e.item_type) &&
                    e.item_class != o.WB.k_ECommunityItemClass_Badge,
                )
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
          }, [r, I, m]),
          h = (0, d.useMemo)(() => {
            if (v.has(o.WB.k_ECommunityItemClass_ProfileBackground)) {
              const e = v
                .get(o.WB.k_ECommunityItemClass_ProfileBackground)
                .filter((e) => {
                  JSON.parse(e.item_key_values);
                  return e.item_movie_webm && e.item_movie_mp4;
                });
              if (e.length) return (0, B.fW)(e), e[0];
            }
            return null;
          }, [v]),
          S = (0, d.useMemo)(() => {
            let e = new Map();
            return (
              r.forEach((t) => {
                e.set(t.item_type, t);
              }),
              e
            );
          }, [r]),
          k = (0, d.useMemo)(
            () => Array.from(v.keys()).sort((e, t) => t - e),
            [v],
          ),
          [D, A, M] = d.useMemo(() => {
            const e =
                null == m
                  ? void 0
                  : m.filter((e) => {
                      const t = S.get(e.item_type);
                      return (
                        !t ||
                        (t.item_class != o.WB.k_ECommunityItemClass_GameCard &&
                          t.item_class != o.WB.k_ECommunityItemClass_Badge)
                      );
                    }),
              t = r.filter(
                (e) =>
                  e.item_class != o.WB.k_ECommunityItemClass_GameCard &&
                  e.item_class != o.WB.k_ECommunityItemClass_Badge,
              ),
              a = e.length || 0,
              n = t.length || 0;
            return [n ? Math.floor((100 * a) / n) : 0, n, a];
          }, [S, r, m]);
        return d.createElement(
          i.u,
          { navID: "ItemCollection" },
          d.createElement(
            _.nn,
            { feature: "itemcollections" },
            d.createElement(
              c.A,
              { appID: p },
              d.createElement(
                s.Z,
                { className: w().ProfileSubPageContainer },
                h &&
                  d.createElement(
                    "div",
                    { className: N().PageBackground },
                    d.createElement(
                      "video",
                      {
                        preload: "auto",
                        playsInline: !0,
                        muted: !0,
                        autoPlay: !0,
                        loop: !0,
                        poster: `${l.TS.MEDIA_CDN_COMMUNITY_URL}images/items/${p}/${h.item_image_large}`,
                      },
                      d.createElement("source", {
                        src: `${l.TS.MEDIA_CDN_COMMUNITY_URL}images/items/${p}/${h.item_movie_webm}`,
                        type: "video/webm",
                      }),
                      Boolean(!l.TS.IN_CLIENT) &&
                        d.createElement("source", {
                          src: `${l.TS.MEDIA_CDN_COMMUNITY_URL}images/items/${p}/${h.item_movie_mp4}`,
                          type: "video/mp4",
                        }),
                    ),
                  ),
                d.createElement(W, { nAppID: p }),
                d.createElement(
                  "div",
                  { className: N().PageSection },
                  d.createElement(
                    "span",
                    null,
                    (0, y.we)("#ItemCollection_Collected", M, A),
                  ),
                  d.createElement(f, {
                    className: N().ProgressBar,
                    animate: !0,
                    nPercent: D,
                    indeterminate: !1,
                  }),
                ),
                Boolean(C) &&
                  d.createElement(
                    "div",
                    {
                      className: (0, g.A)(
                        N().PageSection,
                        N().BackgroundGradient,
                        N().Highlight,
                      ),
                    },
                    d.createElement(P, {
                      oRewardDefinition: C,
                      bViewingOwnProfile: n,
                      rgRewardItems: I,
                      rgUserItemRewarded: E,
                      rgCommunityItemDefs: r,
                    }),
                  ),
                d.createElement(
                  "div",
                  {
                    className: (0, g.A)(
                      N().PageSection,
                      N().BackgroundGradient,
                    ),
                  },
                  d.createElement(
                    "div",
                    { className: N().HowToGet },
                    (0, y.we)("#ItemCollection_ForPoints_Title"),
                  ),
                  k.map((e) =>
                    d.createElement(T, {
                      key: "item_class_" + e,
                      nAppID: p,
                      itemClass: e,
                      rgItems: v.get(e),
                      bViewingOwnProfile: n,
                      bHideItemStore: e == o.WB.k_ECommunityItemClass_GameCard,
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
      a.d(t, { u: () => l });
      var n = a(8871),
        i = a(90626),
        s = a(78327),
        r = a(85585),
        m = a(7445),
        o = a(43899);
      const l = i.forwardRef(function (e, t) {
        const { children: a, navTreeRef: l, ...c } = e,
          _ = i.useRef(void 0),
          d = (0, n.Ue)(_, l),
          u = (0, s.Qn)(),
          p = (0, o.AO)("__nav_tree_root");
        return i.createElement(
          r.B2,
          {
            ...c,
            navTreeRef: d,
            ref: t,
            parentEmbeddedNavTree: p,
            disabledRoot: !u,
          },
          i.createElement(m.q, { disableFocusRing: !u }, a),
        );
      });
    },
    84518: (e, t, a) => {
      "use strict";
      a.d(t, { A: () => o });
      var n = a(60014),
        i = a(90626),
        s = a(62093),
        r = a(30600),
        m = a(8871);
      function o(e) {
        const { appID: t, feature: a, depth: o, children: l } = e,
          c = (0, n.ru)(a, o),
          _ = (0, s.b)(),
          [d, u] = i.useState(void 0),
          p = i.useCallback(
            (e) => {
              e.isIntersecting &&
                u((e) =>
                  (null == e ? void 0 : e.appID) == t &&
                  (null == e ? void 0 : e.snr) == c
                    ? e
                    : { appID: t, snr: c },
                );
            },
            [t, c],
          );
        (0, i.useEffect)(() => {
          d && null != d.appID && _.AddImpression(d.appID, d.snr);
        }, [_, d]);
        const I = (0, r.BL)(p),
          g = t && (!d || (d.appID != t && d.snr != c)),
          E = (0, m.Ue)(l.props.ref, g ? I : void 0);
        return i.cloneElement(l, { ref: E });
      }
    },
    62093: (e, t, a) => {
      "use strict";
      a.d(t, { b: () => s });
      var n = a(90626);
      const i = n.createContext({
        AddImpression: () => {
          console.log("Impression Tracking not enabled");
        },
        BIsValid: () => !1,
      });
      function s() {
        return n.useContext(i);
      }
    },
    24216: (e, t, a) => {
      "use strict";
      a.d(t, { d2: () => d });
      var n = a(41735),
        i = a.n(n),
        s = a(90626),
        r = a(37085),
        m = a(68797),
        o = a(6144),
        l = a(73745),
        c = a(78327);
      class _ {
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
            this.m_mapPromises.set(e, Promise.resolve(r.d.k_EResultOK));
        }
        async LoadAppCommunityItems(e, t) {
          return e
            ? (this.m_mapPromises.has(e) ||
                this.m_mapPromises.set(
                  e,
                  this.InternalLoadAppCommunityItems(e, t),
                ),
              this.m_mapPromises.get(e))
            : r.d.k_EResultFail;
        }
        async InternalLoadAppCommunityItems(e, t) {
          var a, n;
          let s = null;
          try {
            const o =
                c.TS.COMMUNITY_BASE_URL +
                (t
                  ? "minigame/ajaxgetgameitemdefsforeditor"
                  : "minigame/ajaxgetgameitemdefs"),
              l = {
                appid: e,
                origin: self.origin,
                l: c.TS.LANGUAGE,
                sessionid: t ? c.TS.SESSIONID : void 0,
              },
              _ = await i().get(o, { params: l, withCredentials: t });
            if (
              200 == (null == _ ? void 0 : _.status) &&
              (null === (a = null == _ ? void 0 : _.data) || void 0 === a
                ? void 0
                : a.success) == r.d.k_EResultOK &&
              (null === (n = null == _ ? void 0 : _.data) || void 0 === n
                ? void 0
                : n.item_definitions)
            )
              return (
                this.m_mapAppToDefs.set(e, _.data.item_definitions),
                this.GetItemDefsChangeForEventID(e).Dispatch(
                  _.data.item_definitions,
                ),
                r.d.k_EResultOK
              );
            s = (0, m.H)(_);
          } catch (e) {
            s = (0, m.H)(e);
          }
          return (
            console.error(
              "CSaleMiniGameItemDefStore.InternalLoadAppCommunityItems failed: on appid " +
                e +
                " edit? " +
                t +
                " error: " +
                (null == s ? void 0 : s.strErrorMsg),
              s,
            ),
            r.d.k_EResultFail
          );
        }
        static Get() {
          return (
            _.s_Singleton ||
              ((_.s_Singleton = new _()),
              _.s_Singleton.Init(),
              "dev" == c.TS.WEB_UNIVERSE &&
                (window.g_SaleMiniGameItemDefStore = _.s_Singleton)),
            _.s_Singleton
          );
        }
        constructor() {
          (this.m_mapAppToDefs = new Map()),
            (this.m_mapPromises = new Map()),
            (this.m_listChangeCallback = new Map());
        }
        Init() {}
      }
      function d(e, t, a) {
        const n = (function (e, t) {
            const [a, n] = (0, s.useState)(_.Get().GetItemDefForAppID(e));
            return (
              (0, s.useEffect)(() => {
                e &&
                  !_.Get().BHasLoadedDef(e) &&
                  _.Get().LoadAppCommunityItems(e, t);
              }, [e, t]),
              (0, l.hL)(_.Get().GetItemDefsChangeForEventID(e), n),
              a
            );
          })(e, a),
          [i, r] = (0, s.useState)(null);
        return (
          (0, s.useEffect)(() => {
            if (e && n && null == i) {
              const i = n.find(
                (n) => (a || n.active) && n.appid == e && n.item_type == t,
              );
              i && r(i);
            }
          }, [i, n, e, t, a]),
          i
        );
      }
    },
    25706: (e, t, a) => {
      "use strict";
      a.d(t, { Qc: () => _, Zx: () => u, f8: () => d });
      var n = a(65946),
        i = a(90626),
        s = a(95679),
        r = a(24216),
        m = a(22797),
        o = a(61859),
        l = a(78327),
        c = a(56330);
      function _(e) {
        const {
          appid: t,
          item_image_small: a,
          item_image_large: n,
          item_movie_mp4: s,
          item_movie_webm: r,
          item_title: m,
        } = e;
        if (
          (null == s ? void 0 : s.length) > 0 &&
          (null == r ? void 0 : r.length) > 0
        ) {
          const n = `${l.TS.MEDIA_CDN_COMMUNITY_URL}images/items/${t}/${a}`,
            m = `${l.TS.MEDIA_CDN_COMMUNITY_URL}images/items/${t}/${r}`,
            o = `${l.TS.MEDIA_CDN_COMMUNITY_URL}images/items/${t}/${s}`;
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
              i.createElement("source", { src: m, type: "video/webm" }),
              Boolean(!l.TS.IN_CLIENT) &&
                i.createElement("source", { src: o, type: "video/mp4" }),
            ),
          );
        }
        {
          const s = `${l.TS.MEDIA_CDN_COMMUNITY_URL}images/items/${t}/${a || n}`;
          return i.createElement("img", {
            className: e.className,
            src: s,
            alt: m,
          });
        }
      }
      function d(e) {
        const { appid: t, community_item_type: a, bForEdit: n } = e,
          s = (0, r.d2)(t, a, n),
          l =
            s && !s.active
              ? i.createElement(
                  "div",
                  { className: c.WarningStylesBackground },
                  (0, o.we)("#Sale_Section_RewardShelf_ItemInActiveWarning"),
                )
              : void 0;
        return s
          ? i.createElement(i.Fragment, null, i.createElement(_, { ...s }), l)
          : i.createElement(m.t, {
              size: "small",
              string: (0, o.we)("#Loading"),
            });
      }
      function u(e) {
        const { section: t, rewardDef: a, language: m } = e,
          o = (0, r.d2)(a.appid, a.community_item_type),
          [c] = (0, n.q3)(() => {
            var e;
            return [
              Boolean(
                null === (e = t.rewards) || void 0 === e
                  ? void 0
                  : e.show_reward_item_name,
              ),
            ];
          });
        let _;
        switch (a.community_class) {
          case s.WB.k_ECommunityItemClass_AvatarFrame:
          case s.WB.k_ECommunityItemClass_AnimatedAvatar:
            _ = `${l.TS.COMMUNITY_BASE_URL}my/edit/avatar`;
            break;
          case s.WB.k_ECommunityItemClass_Badge:
            _ = `${l.TS.COMMUNITY_BASE_URL}my/edit/favoritebadge`;
            break;
          case s.WB.k_ECommunityItemClass_ProfileBackground:
          case s.WB.k_ECommunityItemClass_ProfileModifier:
            _ = `${l.TS.COMMUNITY_BASE_URL}my/edit/background`;
            break;
          case s.WB.k_ECommunityItemClass_MiniProfileBackground:
            _ = `${l.TS.COMMUNITY_BASE_URL}my/edit/miniprofile`;
            break;
          case s.WB.k_ECommunityItemClass_Sticker:
            _ = `${l.TS.COMMUNITY_BASE_URL}chat`;
        }
        return i.createElement(
          "a",
          { href: _ },
          i.createElement(d, {
            appid: null == a ? void 0 : a.appid,
            community_item_type: null == a ? void 0 : a.community_item_type,
          }),
          Boolean(c) &&
            i.createElement("span", null, null == o ? void 0 : o.item_name),
        );
      }
    },
  },
]);
