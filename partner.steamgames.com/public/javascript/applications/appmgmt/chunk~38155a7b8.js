/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
"use strict";
(self.webpackChunkappmgmt_storeadmin =
  self.webpackChunkappmgmt_storeadmin || []).push([
  [7485],
  {
    29292: (e, a, t) => {
      t.d(a, { Mx: () => u, XC: () => _ });
      var n = t(85556),
        o = t(47427),
        r = t(44174),
        i = t(29480),
        s = t(35427);
      t(37563), t(22520);
      function _(e) {
        const [a, t] = (0, o.useState)(r.j1.GetClanEventModel(e)),
          n = (0, i.T)("usePartnerEventByEventGID");
        return (
          (0, o.useEffect)(() => {
            (null == a ? void 0 : a.GID) != e &&
              (r.j1.Init(),
              r.j1
                .LoadBatchPartnerEventsByEventGIDsOrAnnouncementGIDs([e], [], n)
                .then((a) => {
                  1 != (null == a ? void 0 : a.length) ||
                    a[0].GID != e ||
                    n.token.reason ||
                    t(a[0]);
                }));
          }, [e, a, n]),
          a
        );
      }
      function u(e, a, t) {
        const [_, u] = (0, o.useState)(r.j1.GetClanEventModel(a)),
          [l, c] = (0, o.useState)(!!e && !!a),
          [d, g] = (0, o.useState)(),
          k = (0, i.T)("usePartnerEventByClanAccountAndEventGID");
        return (
          (0, o.useEffect)(() => {
            (() => {
              (0, n.mG)(this, void 0, void 0, function* () {
                var n, o;
                try {
                  if ((null == _ ? void 0 : _.GID) != a) {
                    r.j1.Init();
                    const i = s.K.InitFromClanID(e);
                    let _;
                    try {
                      _ =
                        yield r.j1.LoadPartnerEventFromClanEventGIDAndClanSteamID(
                          i,
                          a,
                          0,
                          t,
                        );
                    } catch (e) {
                      g(
                        null ===
                          (o =
                            null === (n = null == e ? void 0 : e.response) ||
                            void 0 === n
                              ? void 0
                              : n.data) || void 0 === o
                          ? void 0
                          : o.err_msg,
                      );
                    }
                    k.token.reason || u(_);
                  }
                } finally {
                  c(!1);
                }
              });
            })();
          }, [e, a, _, t, k]),
          { eventModel: _, bLoading: l, sErrorMessage: d }
        );
      }
    },
    4618: (e, a, t) => {
      var n;
      function o(e) {
        switch (e) {
          case n.k_ConfigPage_Takeover:
            return "frontpage";
          case n.k_ConfigPage_Takeunder:
            return "takeunder";
          case n.k_ConfigPage_TakeoverSteamChina:
            return "frontpage_china";
          case n.k_ConfigPage_Spotlight:
            return "spotlights";
          case n.k_ConfigPage_EarlyAccess_Takeover:
            return "content_hub_earlyaccess";
          case n.k_ConfigPage_FreeToPlay_Takeover:
            return "content_hub_freetoplay";
          case n.k_ConfigPage_GreatOnDeck_Takeover:
            return "content_hub_greatondeck";
          case n.k_ConfigPage_Category_Action_Takeover:
            return "content_hub_category_action";
          case n.k_ConfigPage_Category_Multiplayer_Takeover:
            return "content_hub_category_multiplayer";
          case n.k_ConfigPage_Demo_Hub_Takeover:
            return "content_hub_demos";
          case n.k_ConfigPage_RPG_Tag_Hub_Takeover:
            return "content_hub_tags_122";
          case n.k_ConfigPage_Racing_Tag_Hub_Takeover:
            return "content_hub_tags_699";
          case n.k_ConfigPage_VR_Hub_Takeover:
            return "content_hub_vr";
          case n.k_ConfigPage_Casual_Tag_Hub_Takeover:
            return "content_hub_tags_599";
        }
      }
      function r(e) {
        switch (e) {
          case n.k_ConfigPage_Takeover:
            return "Front Page Takeover";
          case n.k_ConfigPage_Takeunder:
            return "Takeunder";
          case n.k_ConfigPage_TakeoverSteamChina:
            return "Steam China Frontpage Takeover";
          case n.k_ConfigPage_Spotlight:
            return "Front Page Spotlight";
          case n.k_ConfigPage_EarlyAccess_Takeover:
            return "Early Access Content Hub Takeover";
          case n.k_ConfigPage_FreeToPlay_Takeover:
            return "Free to Play Content Hub Takeover";
          case n.k_ConfigPage_GreatOnDeck_Takeover:
            return "Great on Deck Hub Takeover";
          case n.k_ConfigPage_Category_Action_Takeover:
            return "Category Action Hub Takeover";
          case n.k_ConfigPage_Category_Multiplayer_Takeover:
            return "Category Multiplayer Hub Takeover";
          case n.k_ConfigPage_Demo_Hub_Takeover:
            return "Demo Hub Takeover";
          case n.k_ConfigPage_RPG_Tag_Hub_Takeover:
            return "RPG Tag Hub Takeover";
          case n.k_ConfigPage_Racing_Tag_Hub_Takeover:
            return "Racing Tag Hub Takeover";
          case n.k_ConfigPage_VR_Hub_Takeover:
            return "VR Content Hub Takeover";
          case n.k_ConfigPage_Casual_Tag_Hub_Takeover:
            return "Casual Tag Hub Takeover";
        }
      }
      function i(e) {
        switch (e) {
          case n.k_ConfigPage_Takeover:
            return "defcon1";
          case n.k_ConfigPage_Takeunder:
            return "takeunder";
          case n.k_ConfigPage_TakeoverSteamChina:
            return "defcon1_china";
          case n.k_ConfigPage_Spotlight:
            return null;
          case n.k_ConfigPage_EarlyAccess_Takeover:
          case n.k_ConfigPage_FreeToPlay_Takeover:
          case n.k_ConfigPage_GreatOnDeck_Takeover:
          case n.k_ConfigPage_Category_Action_Takeover:
          case n.k_ConfigPage_Category_Multiplayer_Takeover:
          case n.k_ConfigPage_Demo_Hub_Takeover:
          case n.k_ConfigPage_RPG_Tag_Hub_Takeover:
          case n.k_ConfigPage_Racing_Tag_Hub_Takeover:
          case n.k_ConfigPage_VR_Hub_Takeover:
          case n.k_ConfigPage_Casual_Tag_Hub_Takeover:
            return "content_hub";
        }
        return null;
      }
      function s(e) {
        return `/admin/store/pageclusteredit/${o(e)}/<grab this ID>`;
      }
      t.d(a, {
        D9: () => o,
        He: () => i,
        II: () => r,
        R6: () => n,
        bG: () => s,
      }),
        (function (e) {
          (e[(e.k_ConfigPage_Takeover = 1)] = "k_ConfigPage_Takeover"),
            (e[(e.k_ConfigPage_Takeunder = 2)] = "k_ConfigPage_Takeunder"),
            (e[(e.k_ConfigPage_TakeoverSteamChina = 3)] =
              "k_ConfigPage_TakeoverSteamChina"),
            (e[(e.k_ConfigPage_Spotlight = 4)] = "k_ConfigPage_Spotlight"),
            (e[(e.k_ConfigPage_EarlyAccess_Takeover = 5)] =
              "k_ConfigPage_EarlyAccess_Takeover"),
            (e[(e.k_ConfigPage_FreeToPlay_Takeover = 6)] =
              "k_ConfigPage_FreeToPlay_Takeover"),
            (e[(e.k_ConfigPage_GreatOnDeck_Takeover = 7)] =
              "k_ConfigPage_GreatOnDeck_Takeover"),
            (e[(e.k_ConfigPage_Category_Action_Takeover = 8)] =
              "k_ConfigPage_Category_Action_Takeover"),
            (e[(e.k_ConfigPage_Category_Multiplayer_Takeover = 9)] =
              "k_ConfigPage_Category_Multiplayer_Takeover"),
            (e[(e.k_ConfigPage_Demo_Hub_Takeover = 10)] =
              "k_ConfigPage_Demo_Hub_Takeover"),
            (e[(e.k_ConfigPage_RPG_Tag_Hub_Takeover = 11)] =
              "k_ConfigPage_RPG_Tag_Hub_Takeover"),
            (e[(e.k_ConfigPage_Racing_Tag_Hub_Takeover = 12)] =
              "k_ConfigPage_Racing_Tag_Hub_Takeover"),
            (e[(e.k_ConfigPage_VR_Hub_Takeover = 13)] =
              "k_ConfigPage_VR_Hub_Takeover"),
            (e[(e.k_ConfigPage_Casual_Tag_Hub_Takeover = 14)] =
              "k_ConfigPage_Casual_Tag_Hub_Takeover");
        })(n || (n = {}));
    },
    1698: (e, a, t) => {
      t.d(a, {
        FF: () => f,
        Ii: () => R,
        R7: () => p,
        Rg: () => l,
        Vd: () => C,
        b5: () => D,
        ex: () => T,
        gl: () => P,
        hZ: () => d,
        j: () => g,
        kj: () => k,
        nR: () => u,
        pk: () => v,
        tA: () => m,
        ti: () => c,
      });
      var n = t(35427),
        o = t(31846),
        r = t(12251),
        i = t(46984),
        s = t(37563),
        _ = t(4618);
      const u = [
          "midweek",
          "weekenddeal",
          "saleevent",
          "themesale",
          "nextfest",
          "seasonalsale",
          "informational",
          "dailydeal",
          "vacation",
          "important",
          "preload",
          "assetrequest",
        ],
        l =
          (new Set(u),
          new Set([
            "midweek",
            "weekenddeal",
            "saleevent",
            "informational",
            "vacation",
            "important",
            "preload",
            "themesale",
            "nextfest",
            "seasonalsale",
          ])),
        c = new Set(["dailydeal", "assetrequest"]),
        d = 604800,
        g = new Map();
      g.set("midweek", "Midweek Deal"),
        g.set("weekenddeal", "Weekend Deal"),
        g.set("saleevent", "Sale Event"),
        g.set("themesale", "Theme Sale"),
        g.set("nextfest", "Next Fests"),
        g.set("seasonalsale", "Seasonal Sale"),
        g.set("informational", "Informational"),
        g.set("dailydeal", "Daily Deal"),
        g.set("vacation", "Vacation/PTO"),
        g.set("important", "Takeover / Takeunder [DON'T USE]"),
        g.set("preload", "Pre-load"),
        g.set("assetrequest", "Asset Request Only");
      const k = new Set();
      k.add("seasonalsale"), k.add("themesale"), k.add("nextfest");
      new Set().add("vacation");
      const v = new Map();
      v.set("midweek", "#254069"),
        v.set("weekenddeal", "#254069"),
        v.set("saleevent", "#819c8a"),
        v.set("themesale", "#819c8a"),
        v.set("nextfest", "#819c8a"),
        v.set("seasonalsale", "#819c8a"),
        v.set("informational", "#474747"),
        v.set("dailydeal", "#80275D"),
        v.set("vacation", "#6f7485"),
        v.set("important", "#40ccfd"),
        v.set("preload", "#A47332"),
        v.set("assetrequest", "#80875D");
      const f = new Map();
      f.set("midweek", "#discount_desc_preset_midweek"),
        f.set("weekenddeal", "#discount_desc_preset_weekend"),
        f.set("saleevent", "#discount_desc_preset_special"),
        f.set("themesale", "#discount_desc_preset_special"),
        f.set("nextfest", "#discount_desc_preset_special"),
        f.set("seasonalsale", "#discount_desc_preset_special"),
        f.set("informational", "#discount_desc_limited_time_date"),
        f.set("dailydeal", "#discount_desc_preset_daily"),
        f.set("vacation", "#discount_desc_limited_time_date"),
        f.set("important", "#discount_desc_limited_time_date"),
        f.set("preload", "#discount_desc_limited_time_date");
      const T = new Map();
      T.set("midweek", ["Midweek", "Midweek Deal"]),
        T.set("weekenddeal", ["Weekend", "Weekend Deal"]);
      const p = new Map();
      p.set("none", ""),
        p.set("takeover", "Takeover"),
        p.set("takeunder", "Takeunder"),
        p.set("hub_takeover", "Hub takeover"),
        p.set("steamchina_takeover", "SC Takeover"),
        p.set("steamchina_only", "SC");
      const C = [
        "spotlight_art",
        "marketingmessage_art",
        "marketingmessage_art_2",
        "takeover_art",
        "takeover_mobile_art",
        "takeunder_art",
        "takeunder_mobile_art",
        "sale_header",
        "sale_logo",
        "capsule",
        "product_banner",
        "product_mobile_banner",
      ];
      function P(e) {
        switch (e) {
          case "marketingmessage_art":
            return "Marketing Message Banner";
          case "marketingmessage_art_2":
            return "Marketing Message Banner 2";
          case "spotlight_art":
            return "Spotlight Banner";
          case "takeover_art":
            return "Takeover Banner";
          case "takeunder_art":
            return "Takeunder Banner";
          case "takeover_mobile_art":
            return "Takeover Mobile Banner";
          case "takeunder_mobile_art":
            return "Takeunder Mobile Banner";
          case "sale_header":
            return "Sale Page Background";
          case "sale_logo":
            return "Sale Logo Image";
          case "capsule":
            return "Event Cover Image";
          case "product_banner":
            return "Sale's Store Page Banner";
          case "product_mobile_banner":
            return "Sale's Store Page Mobile Banner";
          default:
            return "Unknown Promo Art Request";
        }
      }
      class m {
        static GetSpotlightEditURL(e) {
          return s.De.PARTNER_BASE_URL + "admin/store/spotlight/" + e;
        }
        static GetMarketingMesssageEditURL(e) {
          return (
            s.De.PARTNER_BASE_URL + "promotion/marketingmessages/edit/" + e
          );
        }
        static GetClusterEditURL(e, a) {
          switch (e) {
            case _.R6.k_ConfigPage_Takeover:
              return m.GetTakeoverEditURL(a);
            case _.R6.k_ConfigPage_Takeunder:
              return m.GetTakeunderEditURL(a);
            case _.R6.k_ConfigPage_TakeoverSteamChina:
              return m.GetSteamChinaTakeoverEditURL(a);
            default:
              return m.GetContentHubTakeoverEditURL(e, a);
          }
        }
        static GetTakeoverEditURL(e) {
          return (
            s.De.PARTNER_BASE_URL + "admin/store/pageclusteredit/frontpage/" + e
          );
        }
        static GetContentHubTakeoverEditURL(e, a) {
          return `${s.De.PARTNER_BASE_URL}admin/store/pageclusteredit/${(0,
          _.D9)(e)}/${a}`;
        }
        static GetTakeunderEditURL(e) {
          return (
            s.De.PARTNER_BASE_URL + "admin/store/pageclusteredit/takeunder/" + e
          );
        }
        static GetMainCapsuleEditURL(e) {
          return (
            s.De.PARTNER_BASE_URL +
            "admin/store/pageclusteredit/frontpage/" +
            e +
            "?activetab=tab_capsules"
          );
        }
        static GetSteamChinaTakeoverEditURL(e) {
          return (
            s.De.PARTNER_BASE_URL +
            "admin/store/pageclusteredit/frontpage_china/" +
            e
          );
        }
        static GetOptInEditURL(e) {
          return s.De.PARTNER_BASE_URL + "optin/admin/edit/" + e;
        }
        static GetGiveawayControlsURL(e) {
          return s.De.PARTNER_BASE_URL + "giveaways/control/" + e;
        }
        static GetDiscountEditURL(e) {
          return s.De.PARTNER_BASE_URL + "admin/editdiscountevent/" + e;
        }
        static GetGiveawayEditURL(e) {
          return s.De.PARTNER_BASE_URL + "giveaways/control/" + e;
        }
        static GetSalePageClanEditURL(e, a) {
          const t = n.K.InitFromClanID(e);
          return (
            s.De.COMMUNITY_BASE_URL +
            "/gid/" +
            t.ConvertTo64BitString() +
            "/partnerevents/edit/" +
            a
          );
        }
        static GetAdvertingAppLandingURL(e) {
          return s.De.PARTNER_BASE_URL + "apps/landing/" + e;
        }
      }
      const R = new Map();
      R.set("midweek", {
        nMaxSlots: 6,
        rtStartModifier: 10 * i._H.PerHour,
        rtEndModifier: 3 * i._H.PerDay + 10 * i._H.PerHour,
        fnRenderWeekDisplayForSelection: (e, a) => {
          const t = new Date(1e3 * (e + 10800));
          t.setHours(10);
          const n = Math.floor(t.getTime() / 1e3);
          return (
            "Starting " +
            (0, o.$1)(n) +
            " @ " +
            (0, r.Sc)(n) +
            ": " +
            a +
            (1 == a ? " slot" : " slots")
          );
        },
        nDaysDiscountEvent: 7,
        rtDays: 3,
      }),
        R.set("weekenddeal", {
          nMaxSlots: 6,
          rtStartModifier: 3 * i._H.PerDay + 10 * i._H.PerHour,
          rtEndModifier: 7 * i._H.PerDay + 10 * i._H.PerHour,
          fnRenderWeekDisplayForSelection: (e, a) => {
            const t = new Date(1e3 * (e + 259200 + 10800));
            t.setHours(10);
            const n = Math.floor(t.getTime() / 1e3);
            return (
              "Starting " +
              (0, o.$1)(n) +
              " @ " +
              (0, r.Sc)(n) +
              ": " +
              a +
              (1 == a ? " slot" : " slots")
            );
          },
          nDaysDiscountEvent: 7,
          rtDays: 4,
        });
      const D = ["midweek", "weekenddeal"];
      new Set(D);
    },
    33687: (e, a, t) => {
      t.d(a, {
        HN: () => k,
        Lr: () => v,
        o6: () => g,
        oC: () => c,
        og: () => d,
      });
      var n = t(85556),
        o = t(80751),
        r = t.n(o),
        i = t(42718),
        s = t(31846),
        _ = t(37563),
        u = t(47427);
      function l(e, a = !0, t) {
        return (0, n.mG)(this, void 0, void 0, function* () {
          const n = _.De.PARTNER_BASE_URL + "discounts/ajaxgetdiscountbyapp",
            o = new Map();
          if (!e || 0 == e.length) return o;
          const i = [...e],
            s = [];
          for (; i.length > 0; ) {
            const e = i.splice(0, 250),
              o = new FormData();
            o.append("sessionid", _.De.SESSIONID),
              o.append("rgAppIDs", e.join(",")),
              o.append("bExcludeExpired", a ? "1" : "0"),
              t && o.append("publisherid", t.toString()),
              s.push(r().post(n, o, { withCredentials: !0 }));
          }
          return (
            (yield Promise.all(s)).forEach((e) => {
              var a, t, n;
              if (
                200 == (null == e ? void 0 : e.status) &&
                1 ==
                  (null === (a = null == e ? void 0 : e.data) || void 0 === a
                    ? void 0
                    : a.success) &&
                (null === (t = null == e ? void 0 : e.data) || void 0 === t
                  ? void 0
                  : t.map)
              )
                for (let a in e.data.map) {
                  const t = Number.parseInt(a);
                  t && o.set(t, e.data.map[t]);
                }
              else
                console.log(
                  "Error: Failed on FetchDiscountByApp request " +
                    (null == e ? void 0 : e.status) +
                    " " +
                    (null == e ? void 0 : e.statusText) +
                    " " +
                    (null === (n = null == e ? void 0 : e.data) || void 0 === n
                      ? void 0
                      : n.success),
                );
            }),
            o
          );
        });
      }
      function c(e, a, t) {
        const { isLoading: n, data: o } = (0, i.useQuery)(
          ["useOptedInAppWithDiscounts", e, a.join(","), t],
          () => l(a),
          { enabled: (null == a ? void 0 : a.length) > 0 },
        );
        return n ? null : o;
      }
      function d(e, a = !0, t) {
        const { isLoading: n, data: o } = (0, i.useQuery)(
          ["useAppWithDiscounts", e.join(","), a, t],
          () => l(e, a, t),
          { enabled: (null == e ? void 0 : e.length) > 0 },
        );
        return n ? null : o;
      }
      function g(e, a = !0, t) {
        const { isLoading: o, data: s } = (0, i.useQuery)(
          ["useBundleWithDiscounts", e.join(","), a, t],
          () =>
            (function (e, a = !0, t) {
              return (0, n.mG)(this, void 0, void 0, function* () {
                const n =
                    _.De.PARTNER_BASE_URL + "discounts/ajaxgetdiscountbybundle",
                  o = new Map();
                if (!e || 0 == e.length) return o;
                const i = [...e],
                  s = [];
                for (; i.length > 0; ) {
                  const e = i.splice(0, 100),
                    o = new FormData();
                  o.append("sessionid", _.De.SESSIONID),
                    o.append("rgBundleIDs", e.join(",")),
                    o.append("bExcludeExpired", a ? "1" : "0"),
                    t && o.append("publisherid", t.toString()),
                    s.push(r().post(n, o, { withCredentials: !0 }));
                }
                return (
                  (yield Promise.all(s)).forEach((e) => {
                    var a, t, n;
                    if (
                      200 == (null == e ? void 0 : e.status) &&
                      1 ==
                        (null === (a = null == e ? void 0 : e.data) ||
                        void 0 === a
                          ? void 0
                          : a.success) &&
                      (null === (t = null == e ? void 0 : e.data) ||
                      void 0 === t
                        ? void 0
                        : t.map)
                    )
                      for (let a in e.data.map) {
                        const t = Number.parseInt(a);
                        t && o.set(t, e.data.map[t]);
                      }
                    else
                      console.log(
                        "Error: Failed on FetchDiscountByBundle request " +
                          (null == e ? void 0 : e.status) +
                          " " +
                          (null == e ? void 0 : e.statusText) +
                          " " +
                          (null === (n = null == e ? void 0 : e.data) ||
                          void 0 === n
                            ? void 0
                            : n.success),
                      );
                  }),
                  o
                );
              });
            })(e, a, t),
          { enabled: (null == e ? void 0 : e.length) > 0 },
        );
        return o ? null : s;
      }
      function k() {
        return (0, u.useMemo)(
          () =>
            (0, _.kQ)("bundle_discount_conflict_dates", "application_config"),
          [],
        );
      }
      function v(e, a, t, n, o) {
        var r, i;
        const _ = null == a ? void 0 : a.get(e);
        if (_) {
          if (_.is_coming_soon) return (0, s.Xx)("#DiscountEvent_ComingSoon");
          if (_.is_free) return (0, s.Xx)("#DiscountEvent_Free");
          if (
            null === (r = _.discounts) || void 0 === r
              ? void 0
              : r.some((e) => e.discountEventID == o)
          )
            return (0, s.Xx)("#DiscountEvent_Official");
          const e =
            null === (i = _.discounts) || void 0 === i
              ? void 0
              : i.filter((e) => e.rtStartDate < n && e.rtEndDate > t);
          if ((null == e ? void 0 : e.length) > 0)
            return e
              .map(
                (e) =>
                  `${e.nDiscountPct}% - ${(0, s.m9)(e.rtStartDate)} to ${(0,
                  s.m9)(e.rtEndDate)} (package id:${e.packageID})`,
              )
              .join("\n");
        }
        return "";
      }
    },
    4942: (e, a, t) => {
      t.d(a, { I: () => r, f: () => i });
      var n = t(77936),
        o = t(65255);
      function r(e, a, t) {
        return `${o.De.BASE_URL_SHARED_CDN}store_item_assets/optin/${e}/${a}/${t}`;
      }
      function i(e) {
        var a, t;
        const i = o.De.LANGUAGE;
        return (
          null === (a = e.localized_optin_banner) || void 0 === a
            ? void 0
            : a[i]
        )
          ? r(e.pageid, (0, n.jM)(i), e.localized_optin_banner[i])
          : (
              null === (t = e.localized_optin_banner) || void 0 === t
                ? void 0
                : t.english
            )
          ? r(e.pageid, 0, e.localized_optin_banner.english)
          : null;
      }
    },
  },
]);
