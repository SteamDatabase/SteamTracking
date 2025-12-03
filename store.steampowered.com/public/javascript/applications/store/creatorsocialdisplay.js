/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkstore = self.webpackChunkstore || []).push([
  [1402],
  {
    12443: (e) => {
      e.exports = {
        AppSocialLinksCtn: "_1wKUEA0cYqeUELXMe3Tp6T",
        AppSocialLinks: "YMmXzjieZthpAehitId4M",
        AppSocialLinkIcon: "OlwlyAPTdpJ7OieZmqzhc",
        AppSocialLinkWithText: "_3BKcmMK-HSkKmQqRCx9HdA",
        AppSocialText: "bJf5nxr6o9SG4mWXm7qz-",
      };
    },
    28194: (e) => {
      e.exports = { Ctn: "_2ZSkHhlXwxpsIInroemxBn" };
    },
    55263: (e, t, n) => {
      "use strict";
      n.d(t, {
        G6: () => u,
        Gg: () => p,
        MS: () => m,
        N4: () => r,
        Ow: () => d,
        YM: () => T,
        mZ: () => S,
        t7: () => k,
        zX: () => L,
      });
      var r,
        i = n(41735),
        a = n.n(i),
        c = n(90626),
        l = n(37085),
        o = n(15161),
        _ = n(84933),
        s = n(82097);
      function u(e, t, n, i) {
        const o = (0, c.useRef)(void 0),
          u = (0, c.useRef)(void 0),
          k = (0, _.CH)();
        o.current = e;
        const [d, p] = (0, c.useState)(void 0),
          {
            include_assets: S,
            include_release: E,
            include_platforms: L,
            include_all_purchase_options: m,
            include_screenshots: T,
            include_trailers: y,
            include_ratings: h,
            include_tag_count: f,
            include_reviews: I,
            include_basic_info: j,
            include_supported_languages: g,
            include_full_description: v,
            include_included_items: b,
            include_assets_without_overrides: C,
            apply_user_filters: A,
            include_links: w,
          } = n;
        if (
          ((0, c.useEffect)(() => {
            const n = {
              include_assets: S,
              include_release: E,
              include_platforms: L,
              include_all_purchase_options: m,
              include_screenshots: T,
              include_trailers: y,
              include_ratings: h,
              include_tag_count: f,
              include_reviews: I,
              include_basic_info: j,
              include_supported_languages: g,
              include_full_description: v,
              include_included_items: b,
              include_assets_without_overrides: C,
              apply_user_filters: A,
              include_links: w,
            };
            let r = null;
            return (
              !e ||
                e < 0 ||
                s.A.Get().BHasStoreItem(e, t, n) ||
                (void 0 !== d && i && i == u.current) ||
                (i !== u.current && (p(void 0), (u.current = i)),
                (r = a().CancelToken.source()),
                s.A.Get()
                  .QueueStoreItemRequest(e, t, n)
                  .then((t) => {
                    r?.token.reason ||
                      o.current !== e ||
                      p(t == l.d.k_EResultOK),
                      k();
                  })),
              () => r?.cancel("useStoreItemCache: unmounting")
            );
          }, [e, t, i, d, S, E, L, m, T, y, h, f, I, j, g, v, b, C, A, w, k]),
          !e)
        )
          return [null, r.k_EStoreItemCacheState_Unavailable];
        if (!1 === d) return [void 0, r.k_EStoreItemCacheState_Unavailable];
        if (s.A.Get().BIsStoreItemMissing(e, t))
          return [void 0, r.k_EStoreItemCacheState_Unavailable];
        if (!s.A.Get().BHasStoreItem(e, t, n))
          return [void 0, r.k_EStoreItemCacheState_Loading];
        const G = s.A.Get().GetStoreItemWithLegacyVisibilityCheck(e, t);
        return G
          ? [G, r.k_EStoreItemCacheState_Found]
          : [null, r.k_EStoreItemCacheState_Unavailable];
      }
      function k(e, t, n) {
        return u(e, o.c6.k_EStoreItemType_App, t, n);
      }
      function d(e, t, n) {
        return u(e, o.c6.k_EStoreItemType_Bundle, t, n);
      }
      function p(e, t, n) {
        return u(e, o.c6.k_EStoreItemType_Package, t, n);
      }
      function S(e, t, n) {
        const [r, i] = u(e, t, n);
        let a;
        r?.GetStoreItemType() != o.c6.k_EStoreItemType_Package ||
          r.GetAssets()?.GetHeaderURL() ||
          1 != r?.GetIncludedAppIDs().length ||
          (a = r.GetIncludedAppIDs()[0]);
        const [c, l] = k(a, n);
        return a && c?.BIsVisible() ? [c, l] : [r, i];
      }
      function E(e, t, n, i) {
        const l = (0, _.CH)(),
          {
            include_assets: o,
            include_release: u,
            include_platforms: k,
            include_all_purchase_options: d,
            include_screenshots: p,
            include_trailers: S,
            include_ratings: E,
            include_tag_count: L,
            include_reviews: m,
            include_basic_info: T,
            include_supported_languages: y,
            include_full_description: h,
            include_included_items: f,
            include_assets_without_overrides: I,
            apply_user_filters: j,
            include_links: g,
          } = n;
        if (
          ((0, c.useEffect)(() => {
            if (!e || 0 == e.length) return;
            const n = {
                include_assets: o,
                include_release: u,
                include_platforms: k,
                include_all_purchase_options: d,
                include_screenshots: p,
                include_trailers: S,
                include_ratings: E,
                include_tag_count: L,
                include_reviews: m,
                include_basic_info: T,
                include_supported_languages: y,
                include_full_description: h,
                include_included_items: f,
                include_assets_without_overrides: I,
                apply_user_filters: j,
                include_links: g,
              },
              r = e.filter(
                (e) =>
                  !(
                    s.A.Get().BHasStoreItem(e, t, n) ||
                    s.A.Get().BIsStoreItemMissing(e, t)
                  ),
              );
            if (0 == r.length) return;
            const i = a().CancelToken.source(),
              c = r.map((e) => s.A.Get().QueueStoreItemRequest(e, t, n));
            return (
              Promise.all(c).then(() => {
                i.token.reason || l();
              }),
              () => i.cancel("useStoreItemCacheMultiplePackages: unmounting")
            );
          }, [e, t, i, l, o, u, k, d, p, S, E, L, m, T, y, h, f, I, j, g]),
          !e)
        )
          return r.k_EStoreItemCacheState_Unavailable;
        if (
          !e.every(
            (e) =>
              s.A.Get().BHasStoreItem(e, t, n) ||
              s.A.Get().BIsStoreItemMissing(e, t),
          )
        )
          return r.k_EStoreItemCacheState_Loading;
        return e.every((e) =>
          s.A.Get().GetStoreItemWithLegacyVisibilityCheck(e, t),
        )
          ? r.k_EStoreItemCacheState_Found
          : r.k_EStoreItemCacheState_Unavailable;
      }
      function L(e, t, n) {
        return E(e, o.c6.k_EStoreItemType_App, t, n);
      }
      function m(e, t, n) {
        return E(e, o.c6.k_EStoreItemType_Bundle, t, n);
      }
      function T() {
        c.useEffect(
          () => (
            s.A.Get().SetReturnUnavailableItems(!0),
            () => s.A.Get().SetReturnUnavailableItems(!1)
          ),
          [],
        );
      }
      !(function (e) {
        (e[(e.k_EStoreItemCacheState_Loading = 1)] =
          "k_EStoreItemCacheState_Loading"),
          (e[(e.k_EStoreItemCacheState_Unavailable = 2)] =
            "k_EStoreItemCacheState_Unavailable"),
          (e[(e.k_EStoreItemCacheState_Found = 3)] =
            "k_EStoreItemCacheState_Found");
      })(r || (r = {}));
    },
    18663: (e, t, n) => {
      "use strict";
      n.d(t, { D1: () => h, lS: () => L, lz: () => y, nK: () => T });
      var r = n(15161),
        i = n(90626),
        a = n(55263),
        c = n(95695),
        l = n.n(c),
        o = n(12155),
        _ = n(52038),
        s = n(61859),
        u = n(61336),
        k = n(78327),
        d = n(32754),
        p = n(12443),
        S = n.n(p);
      function E(e) {
        switch (e) {
          case "discord_server":
            return r.jL.k_EStoreLinkType_Discord;
          case "youtube":
            return r.jL.k_EStoreLinkType_YouTube;
          case "facebook":
            return r.jL.k_EStoreLinkType_Facebook;
          case "twitter":
            return r.jL.k_EStoreLinkType_Twitter;
          case "twitch":
            return r.jL.k_EStoreLinkType_Twitch;
          case "reddit":
            return r.jL.k_EStoreLinkType_Reddit;
          case "instagram":
            return r.jL.k_EStoreLinkType_Instagram;
          case "tumblr":
            return r.jL.k_EStoreLinkType_Tumblr;
          case "qq":
            return r.jL.k_EStoreLinkType_QQ;
          case "qqlink":
            return r.jL.k_EStoreLinkType_QQLink;
          case "qqchannel":
            return r.jL.k_EStoreLinkType_QQChannel;
          case "bilibili":
            return r.jL.k_EStoreLinkType_Bilibili;
          case "weibo":
            return r.jL.k_EStoreLinkType_Weibo;
          case "wechat":
            return r.jL.k_EStoreLinkType_WeChat;
          case "tieba":
            return r.jL.k_EStoreLinkType_Tieba;
          case "tiktok":
            return r.jL.k_EStoreLinkType_Tiktok;
          case "douyin":
            return r.jL.k_EStoreLinkType_Douyin;
          case "bluesky":
            return r.jL.k_EStoreLinkType_Bluesky;
          case "mastodon":
            return r.jL.k_EStoreLinkType_Mastodon;
          case "threads":
            return r.jL.k_EStoreLinkType_Threads;
          case "vk":
            return r.jL.k_EStoreLinkType_VK;
          case "telegram":
            return r.jL.k_EStoreLinkType_Telegram;
          case "linkedin":
            return r.jL.k_EStoreLinkType_LinkedIn;
          case "rednote":
            return r.jL.k_EStoreLinkType_RedNote;
        }
        return r.jL.k_EStoreLinkType_None;
      }
      function L(e) {
        const { appid: t } = e;
        return i.createElement(
          "div",
          { className: S().AppSocialLinksCtn },
          i.createElement(m, { appid: t }),
        );
      }
      function m(e) {
        const { appid: t } = e,
          [n] = (0, a.t7)(t, { include_basic_info: !0, include_links: !0 });
        if (!n) return null;
        const r = n.GetLinks();
        return r && 0 != r.length && k.TS.IMG_URL
          ? i.createElement(
              i.Fragment,
              null,
              i.createElement(
                "div",
                {
                  className: (0, _.A)(
                    l().EventEditorTextTitle,
                    "EventEditorTextTitle",
                  ),
                },
                (0, s.we)("#EventDisplay_SocialTitle"),
              ),
              i.createElement(h, { id: "" + t, rgSocialMedia: r }),
            )
          : null;
      }
      function T(e) {
        return (0, i.useMemo)(
          () =>
            e
              ? e.map((e) => {
                  const t = { link_type: E(e.type) };
                  return (
                    t.link_type == r.jL.k_EStoreLinkType_QQ ||
                    t.link_type == r.jL.k_EStoreLinkType_WeChat
                      ? (t.text = e.link)
                      : (t.url = e.link),
                    t
                  );
                })
              : [],
          [e],
        );
      }
      function y(e) {
        const { gidClanEvent: t, rgSocial: n } = e,
          r = T(n);
        return r && 0 != r.length && k.TS.IMG_URL
          ? i.createElement(
              i.Fragment,
              null,
              i.createElement(
                "div",
                {
                  className: (0, _.A)(
                    l().EventEditorTextTitle,
                    "EventEditorTextTitle",
                  ),
                },
                (0, s.we)("#EventDisplay_Sale_SocialTitle"),
              ),
              i.createElement(h, { id: t, rgSocialMedia: r }),
            )
          : null;
      }
      function h(e) {
        const { id: t, rgSocialMedia: n, className: r } = e;
        return i.createElement(
          "div",
          { className: (0, _.A)(S().AppSocialLinks, r) },
          n.map((e) =>
            e.url
              ? i.createElement(f, {
                  key: "app_social_link_" + t + "_" + e.link_type,
                  social: e,
                })
              : i.createElement(I, {
                  key:
                    "app_social_text_" + t + "_" + e.link_type + "_" + e.text,
                  social: e,
                }),
          ),
        );
      }
      function f(e) {
        const { social: t } = e;
        return i.createElement(
          "a",
          {
            href: (0, u.NT)(t.url),
            target: k.TS.IN_CLIENT ? void 0 : "_blank",
            rel: "noopener noreferrer",
          },
          i.createElement(
            d.he,
            { toolTipContent: t.url },
            i.createElement(j, { social: t }),
          ),
        );
      }
      function I(e) {
        const { social: t } = e;
        return i.createElement(
          "div",
          { className: S().AppSocialLinkWithText },
          i.createElement(
            d.he,
            { toolTipContent: t.text },
            i.createElement(j, { social: t }),
          ),
          i.createElement("div", { className: S().AppSocialText }, t.text),
        );
      }
      function j(e) {
        const { social: t } = e;
        return i.createElement(g, {
          linkType: t.link_type,
          className: S().AppSocialLinkIcon,
        });
      }
      function g(e) {
        const { linkType: t, ...n } = e;
        switch (t) {
          case r.jL.k_EStoreLinkType_YouTube:
            return i.createElement(o.agV, { ...n });
          case r.jL.k_EStoreLinkType_Facebook:
            return i.createElement(o.ZnA, { ...n });
          case r.jL.k_EStoreLinkType_Twitter:
            return i.createElement(o.oy, { ...n });
          case r.jL.k_EStoreLinkType_Twitch:
            return i.createElement(o.ofN, { ...n });
          case r.jL.k_EStoreLinkType_Discord:
            return i.createElement(o.Bki, { ...n });
          case r.jL.k_EStoreLinkType_QQ:
          case r.jL.k_EStoreLinkType_QQLink:
          case r.jL.k_EStoreLinkType_QQChannel:
            return i.createElement(o.$vK, { ...n });
          case r.jL.k_EStoreLinkType_VK:
            return i.createElement(o.OSJ, { ...n });
          case r.jL.k_EStoreLinkType_Bilibili:
            return i.createElement(o.nm_, { ...n });
          case r.jL.k_EStoreLinkType_Weibo:
            return i.createElement(o.tIO, { ...n });
          case r.jL.k_EStoreLinkType_Reddit:
            return i.createElement(o.Vt2, { ...n });
          case r.jL.k_EStoreLinkType_Instagram:
            return i.createElement(o.Vgk, { ...n });
          case r.jL.k_EStoreLinkType_Tumblr:
            return i.createElement(o.VSd, { ...n });
          case r.jL.k_EStoreLinkType_Tieba:
            return i.createElement(o.ccb, { ...n });
          case r.jL.k_EStoreLinkType_Tiktok:
            return i.createElement(o.rNt, { ...n });
          case r.jL.k_EStoreLinkType_Telegram:
            return i.createElement(o.g$j, { ...n });
          case r.jL.k_EStoreLinkType_LinkedIn:
            return i.createElement(o.BQz, { ...n });
          case r.jL.k_EStoreLinkType_WeChat:
            return i.createElement(o.jdP, { ...n });
          case r.jL.k_EStoreLinkType_Douyin:
            return i.createElement(o.bKN, { ...n });
          case r.jL.k_EStoreLinkType_Bluesky:
            return i.createElement(o.sDU, { ...n });
          case r.jL.k_EStoreLinkType_Mastodon:
            return i.createElement(o.MbF, { ...n });
          case r.jL.k_EStoreLinkType_Threads:
            return i.createElement(o.emH, { ...n });
          case r.jL.k_EStoreLinkType_RedNote:
            return i.createElement(o.Yoo, { ...n });
          case r.jL.k_EStoreLinkType_MAX:
          case r.jL.k_EStoreLinkType_None:
            return "invalid social media type";
        }
      }
    },
    44899: (e, t, n) => {
      "use strict";
      n.r(t), n.d(t, { default: () => l });
      var r = n(90626),
        i = n(18663),
        a = n(28194),
        c = n.n(a);
      function l(e) {
        const { clanAccountID: t, items: n } = e,
          a = (0, i.nK)(n);
        return a
          ? r.createElement(i.D1, {
              id: "social_" + t,
              rgSocialMedia: a,
              className: c().Ctn,
            })
          : null;
      }
    },
  },
]);
