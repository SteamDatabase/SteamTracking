/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkappmgmt_storeadmin =
  self.webpackChunkappmgmt_storeadmin || []).push([
  [8758],
  {
    19976: (e) => {
      e.exports = {
        DashStatsContainerPlaceholder: "_2BvHwqhjDNBILY7HxYZ5fA",
        DashStatsContainer: "_2pZUWz9doUUVgJTIiA_5qb",
        Chart: "_2z00NeTIYdtaDdJPVZrLm2",
        Stats: "_2jxzC1AyBA_xxpsnV5l1uW",
        StatsTitle: "UzSNxw8oOZZcgW8SXBp54",
        StatSubtitle: "_24k9yBmCwJ4zrfjtg4_A3D",
        Concurrent: "_3W_8ES3hX7fVooWDlaL9Q-",
        Now: "_2QJ6AbiOJ3XddtA1cOYnCp",
        CurrentStats: "_4ImisFVqyptwO9u0G6-0g",
        TooltipPartnerSummary: "_2WuiD5rL3fQXyAI5CXaOiX",
        LineItemsCtn: "_2Vj424_xUjyMnNmBpDenLi",
        ToolTipTable: "_1CBlLckQLSqavhG2S5qNYb",
        ToolTipTableRow: "_1hcQcqAFKPCYQUGtHIcGn4",
        TotalRow: "_1esRSJn8rPckHux_JS4iQg",
        ToolTipTableCell: "iIyyn73ITYmBOzqghT5NY",
        ModuleCtn: "_2jVePp7nya3Nj-SFteMHaj",
        LeftAlign: "mgkgnb7LlDnVJwX6L29YM",
        ModuleTitle: "_1_qWSYHWj0MC9ivPG5LNEJ",
        ViewDetailLink: "_3LC92YRlgqBty5woF3CakT",
        HeaderCtn: "-BcZBPWZjsiRyi3CtgICp",
        StatGroup: "_2H61dmCW7zg12hj9OKWviV",
        Header: "gpt4bNGeQpWFC9R3TR6gU",
        Numerals: "_1aa9BSk_Qolo1ZpNuEGUqD",
      };
    },
    52249: (e) => {
      e.exports = {
        Results: "_3mK1PrFPrbrn2M-BbAWsmL",
        LoadingContainer: "K7yNfrxTJs0QuoFtUfy0z",
        ResultRow: "_1QyQulOsH0dGeFUVgSa9ki",
        GameName: "_353QhAGCSYbIguu7o4DJgs",
        Label: "_3MUfh3QKRNr6qY0vEz3p04",
        AvatarImageCtn: "_3h9l9X-3dBSAhMflfovg2K",
        AvatarImage: "PBBKP18ULuCWFwYcEIOdW",
        AppSearchInputContainer: "oxxmBMFO82IJEm1H341Wd",
        AppSearchDLCCheckbox: "_1aduni8VCqZVqqDxyXb-pY",
      };
    },
    23910: (e, t, a) => {
      "use strict";
      a.d(t, {
        DU: () => i,
        I8: () => r,
        Rw: () => s,
        Sy: () => c,
        e5: () => d,
        k: () => o,
        nY: () => l,
        rz: () => m,
        s8: () => u,
        uu: () => n,
      });
      const n = [1, 2, 11, 3, 4, 10, 5, 6, 13, 14, 15, 16],
        r = [
          "#msg_action_details",
          "#msg_preload_now",
          "#msg_preload_now_for_free",
          "#msg_prepurchase_now",
          "#msg_play_now",
          "#msg_play_it_now",
          "#msg_weekend_play_free",
          "#msg_action_buy",
          "#msg_action_info",
          "#Library_Update_TryItNow2",
        ];
      function s(e) {
        switch (e) {
          case 1:
            return "Now Available";
          case 2:
            return "Weekend Deal";
          case 3:
            return "Pre-Purchase";
          case 4:
            return "Play Now";
          case 6:
            return "General";
          case 7:
            return "on Demo Quit";
          case 9:
            return "EJ's Korner";
          case 5:
            return "Pre-Load Now";
          case 8:
            return "Gifting Message";
          case 10:
            return "Major Update";
          case 11:
            return "Midweek Deal";
          case 12:
            return "Daily Deal";
          case 13:
            return "New DLC";
          case 14:
            return "Free Weekend";
          case 15:
            return "Sale Page";
          case 16:
            return "Play Test";
          default:
            return "--------------------";
        }
      }
      const o = [1, 2, 3, 4, 5, 6, 8, 7, 9, 10];
      function l(e) {
        switch (e) {
          case 0:
            return "Invalid type";
          case 1:
            return "Owns apps";
          case 2:
            return "Does not own apps";
          case 3:
            return "Owns packages";
          case 4:
            return "Does not own packages";
          case 5:
            return "Wishlists apps";
          case 6:
            return "Follows apps";
          case 8:
            return "Launched apps";
          case 7:
            return "Played apps a lot";
          case 9:
            return "Recently played apps";
          case 10:
            return "Lapsed players for apps";
        }
        return "Unknown Type";
      }
      function i(e) {
        switch (e) {
          case 8:
            return "Just launched the app just once";
          case 7:
            return "Minimum of 4 hours of playtime";
          case 9:
            return "Played the app within the last year";
          case 10:
            return "Played the app within the last year but not in the last three months";
        }
      }
      function c(e) {
        switch (e) {
          case 3:
          case 4:
            return !0;
        }
        return !1;
      }
      var u;
      function d(e, t) {
        let a = !0;
        return (
          1 == e
            ? (a = t?.startsWith("https://store.steamchina.com/"))
            : 2 == e && (a = t?.startsWith("https://store.steampowered.com/")),
          a
        );
      }
      !(function (e) {
        (e[(e.k_EMarketingMessageFlagsNone = 0)] =
          "k_EMarketingMessageFlagsNone"),
          (e[(e.k_EMarketingMessageFlagsHighPriority = 1)] =
            "k_EMarketingMessageFlagsHighPriority"),
          (e[(e.k_EMarketingMessageFlagsPlatformWindows = 2)] =
            "k_EMarketingMessageFlagsPlatformWindows"),
          (e[(e.k_EMarketingMessageFlagsPlatformMac = 4)] =
            "k_EMarketingMessageFlagsPlatformMac"),
          (e[(e.k_EMarketingMessageFlagsPlatformLinux = 8)] =
            "k_EMarketingMessageFlagsPlatformLinux"),
          (e[(e.k_EMarketingMessageFlagsPlatformRestrictions = 14)] =
            "k_EMarketingMessageFlagsPlatformRestrictions");
      })(u || (u = {}));
      const m = {
        include_assets: !0,
        include_basic_info: !0,
        include_release: !0,
      };
    },
    82829: (e, t, a) => {
      "use strict";
      a.d(t, { y5: () => y, c2: () => _ });
      var n = a(56545),
        r = a(59411),
        s = a(15161),
        o = a(58632),
        l = a.n(o),
        i = a(90626),
        c = a(20194),
        u = a(62792),
        d = a(72963),
        m = a(81393),
        p = a(96059),
        g = a(30470),
        h = a(24484);
      class f {
        m_steamInterface;
        GetPromotionTransport() {
          return this.m_steamInterface;
        }
        static s_Singleton;
        static Get() {
          return (
            f.s_Singleton || ((f.s_Singleton = new f()), f.s_Singleton.Init()),
            f.s_Singleton
          );
        }
        Init() {
          const e = (0, h.Tc)(
            "partnerbrowse_webapi_token",
            "application_config",
          );
          (0, m.w)(Boolean(e), "require partnerbrowse_webapi_token"),
            (this.m_steamInterface = new p.D(g.TS.WEBAPI_BASE_URL, e));
        }
      }
      function _(e) {
        const t = f.Get().GetPromotionTransport().GetServiceTransport(),
          a = i.useContext(C);
        return (0, c.I)(b(a, t, e));
      }
      function y(e) {
        return d.L.getQueryData(["StoreItemCountryRestriction", (0, u.wD)(e)]);
      }
      const C = i.createContext({
        loadStoreItemCountryRestriction: async (e, t) =>
          await (function (e) {
            E ||
              (E = new (l())(
                async (t) => {
                  const a = n.w.Init(r.zo);
                  a.Body().set_ids(t.map((e) => s.O4.fromObject(e)));
                  const o = await r.BT.GetCountryRestrictions(e, a);
                  if (!o.BSuccess())
                    throw `Failed to call store Item Country Restriction with details: ${o.GetErrorMessage()}`;
                  const l = new Map();
                  return (
                    o
                      .Body()
                      .results()
                      .forEach((e) => {
                        const t = e.toObject();
                        l.set((0, u.wD)(t.id), t);
                      }),
                    t.map((e) => l.get((0, u.wD)(e)) ?? null)
                  );
                },
                { maxBatchSize: 100, cache: !1 },
              ));
            return E;
          })(t).load(e),
      });
      function b(e, t, a) {
        return {
          queryKey: ["StoreItemCountryRestriction", (0, u.wD)(a)],
          queryFn: () => e.loadStoreItemCountryRestriction(a, t),
          enabled: !!a,
        };
      }
      let E;
    },
    27429: (e, t, a) => {
      "use strict";
      function n(e, t) {
        const a = new Date(1e3 * e),
          n = t ? new Date(1e3 * t) : new Date(a);
        t || n.setDate(a.getDate() + 6);
        const r = a.toLocaleString("en-US", { month: "short" }),
          s = a.getDate(),
          o = n.toLocaleString("en-US", { month: "short" }),
          l = n.getDate();
        return r === o ? `${r} ${s} - ${l}` : `${r} ${s} - ${o} ${l}`;
      }
      function r(e) {
        let t = s(e);
        return t.endsWith("M") || t.endsWith("K")
          ? `$${t}`
          : new Intl.NumberFormat("en-US", {
              style: "currency",
              currency: "USD",
            }).format(Number(t));
      }
      function s(e) {
        let t;
        return (
          (t =
            Math.abs(e) >= 1e6
              ? (e / 1e6).toFixed(1) + "M"
              : Math.abs(e) >= 1e3
                ? (e / 1e3).toFixed(1) + "K"
                : e.toFixed(2)),
          t
        );
      }
      a.d(t, { E8: () => n, Z2: () => r, ct: () => s });
    },
    13549: (e, t, a) => {
      "use strict";
      a.d(t, { i: () => w, q: () => v });
      var n = a(23910),
        r = a(65946),
        s = a(90626),
        o = a(17720),
        l = a(4796),
        i = a(31540),
        c = a(96001),
        u = a(56545),
        d = a(20194);
      var m = a(44165),
        p = a(62792),
        g = a(55263),
        h = a(52038),
        f = a(71541),
        _ = a(56330),
        y = a(22797),
        C = a(61859),
        b = a(30470),
        E = a(26408);
      function w(e) {
        const { oEditableMessage: t } = e,
          [a] = (0, r.q3)(() => [t.GetStoreItemKey()]);
        return a && "app" == a.item_type
          ? s.createElement(S, { oEditableMessage: t, idKey: a })
          : s.createElement(
              "div",
              { className: _.ErrorStylesWithIcon },
              "Error: Major Update does not support anything but targeting app",
            );
      }
      function S(e) {
        const { oEditableMessage: t, idKey: a } = e,
          [l, i] = (0, r.q3)(() => [
            t.GetUpdateEventClanAccountID(),
            t.GetUpdateEventGID(),
          ]),
          [c] = (0, g.G6)(a?.id, (0, p.JK)(a?.item_type), n.rz),
          u = (0, s.useMemo)(() => o.b.InitFromClanID(l), [l]),
          d = 12 != c?.GetAppType() ? c?.GetParentAppID() : void 0;
        return s.createElement(
          "div",
          null,
          s.createElement(v, {
            appid: d || a.id,
            selectedEventGID: i,
            fnSetUpdateEvent: t.SetUpdateEvent,
            label: (0, C.we)("#EventDropDown_MM_FeaturedEvent"),
            tooltip: (0, C.we)("#EventDropDown_MM_FeaturedEvent_ttip"),
            strUrlLearnMore:
              "https://confluence.valve.org/display/SteamBiz/Steam+Promotions+Assets+Guide#SteamPromotionsAssetsGuide-MarketingMessageforUpdates",
          }),
          Boolean(l) &&
            s.createElement(
              s.Fragment,
              null,
              s.createElement(
                "a",
                {
                  href: `${b.TS.COMMUNITY_BASE_URL}gid/${u.ConvertTo64BitString()}/partnerevents/edit/${i}`,
                  target: "_blank",
                },
                "open event for edit",
              ),
              s.createElement("br", null),
              s.createElement("br", null),
            ),
        );
      }
      function v(e) {
        const {
            appid: t,
            selectedEventGID: a,
            fnSetUpdateEvent: n,
            label: r,
            tooltip: p,
            strUrlLearnMore: g,
            bFilterOutDrafts: w,
          } = e,
          S = (0, m.f1)(),
          { clanInfo: v, bLoadingClanInfo: D } = (0, l.vF)(t),
          k = (function (e, t) {
            const a = (0, c.a)(),
              n = (0, s.useMemo)(() => o.b.InitFromClanID(e), [e]),
              r = (0, d.I)({
                queryKey: ["eventdraftrecent", e, t],
                queryFn: async () => {
                  const e = u.w.Init(i.FF);
                  return (
                    e.Body().set_steamid(n.ConvertTo64BitString()),
                    t && e.Body().set_rtime_oldest_date(t),
                    (await i.oH.GetDraftAndRecentPartnerEventSnippet(a, e))
                      .Body()
                      .toObject().snippets
                  );
                },
                enabled: Boolean(e),
              });
            return (0, s.useMemo)(
              () =>
                r.isLoading || !r.data
                  ? null
                  : r.data.sort((e, t) =>
                      e.hidden && t.hidden
                        ? e.published && !t.published
                          ? -1
                          : t.published && !e.published
                            ? 1
                            : (t.rtime32_start_time ?? 0) -
                              (e.rtime32_start_time ?? 0)
                        : e.hidden
                          ? -1
                          : t.hidden
                            ? 1
                            : t.rtime32_start_time - e.rtime32_start_time,
                    ),
              [r.data, r.isLoading],
            );
          })(v?.clanAccountID, S - 2592e3),
          A = (0, s.useMemo)(
            () => (w ? k?.filter((e) => !e.hidden) : k),
            [k, w],
          ),
          I = (0, s.useMemo)(
            () =>
              A
                ? A.map((e) => {
                    const t = e.hidden
                      ? e.published
                        ? "#EventDropDown_HiddenPublish"
                        : "#EventDropDown_Hidden"
                      : "#EventDropDown_Visible";
                    return {
                      label: (0, C.we)(
                        t,
                        (0, C.TW)(e.rtime32_start_time),
                        e.event_name,
                      ),
                      data: e,
                    };
                  })
                : [],
            [A],
          ),
          T = A?.find((e) => e.gid === a);
        return (
          "dev" == b.TS.WEB_UNIVERSE &&
            console.log(
              `AssetRequestSelectPartnerEvent: selectedEventGID=${a} === selected?.gid=${T?.gid}`,
              a,
              T,
              T?.gid,
            ),
          A || (!D && !v?.appid)
            ? A && 0 != A.length
              ? s.createElement(
                  s.Fragment,
                  null,
                  Boolean(g) &&
                    s.createElement(
                      "a",
                      { href: g, target: "_blank", style: { float: "right" } },
                      (0, C.we)(
                        "#DiscountDashboard_DetailView_BatchDiscount_MaxDiscountDocumentationLink",
                      ),
                    ),
                  s.createElement(f.m, {
                    label: r,
                    tooltip: p,
                    selectedOption: T,
                    onChange: (e) => n(v.clanAccountID, e.data.gid),
                    rgOptions: I,
                  }),
                )
              : s.createElement(
                  s.Fragment,
                  null,
                  s.createElement(
                    f.JU,
                    null,
                    r,
                    " ",
                    s.createElement(E.o, { tooltip: p }),
                  ),
                  s.createElement(
                    "div",
                    { className: (0, h.A)(_.ErrorStylesWithIcon, "ErrorCtn") },
                    (0, C.oW)(
                      "#EventDropDown_NoEventFound",
                      s.createElement("a", {
                        href: `${b.TS.COMMUNITY_BASE_URL}ogg/${t}/partnerevents`,
                        target: "_blank",
                      }),
                    ),
                  ),
                )
            : s.createElement(y.t, {
                string: (0, C.we)("#Loading"),
                size: "small",
                position: "center",
              })
        );
      }
    },
    90710: (e, t, a) => {
      "use strict";
      a.d(t, { h: () => g });
      var n = a(41735),
        r = a.n(n),
        s = a(90626),
        o = a(55263),
        l = a(71541),
        i = a(6144),
        c = a(52038),
        u = a(61859),
        d = a(78327),
        m = a(52249),
        p = a(39700);
      function g(e) {
        const {
            fnSetItemID: t,
            strLabel: a,
            itemType: n,
            fnFilterID: o,
            className: c,
            tooltip: g,
            autoFocus: f,
            bIncludeRetired: _,
            bShowDLCToggle: y,
            bOnlyDLC: C,
            bRunQueryOnLoad: b,
            rgParentAppIDs: E,
          } = e,
          [w, S] = s.useState(""),
          [v, D] = s.useState(!1),
          [k, A] = s.useState(!1),
          [I] = s.useState(new i.LU()),
          [T, M] = s.useState(new Array()),
          [L, x] = s.useState(new Array()),
          [F, N] = s.useState(new Array()),
          B = s.createRef(),
          P = s.createRef();
        const R = (0, s.useCallback)(
            async (e, t) => {
              A(!0);
              let a = { json: 1, term: e, bexcluderetired: !_ },
                s = `${d.TS.PARTNER_BASE_URL}appsearch/suggestapps`;
              switch (n) {
                case 1:
                  s = `${d.TS.PARTNER_BASE_URL}admin/store/suggestpackage`;
                  break;
                case 2:
                  s = `${d.TS.PARTNER_BASE_URL}bundles/suggestbundle`;
                  break;
                default:
                  C ? (a.includedlc = !0) : !1 === t && (a.includedlc = !1),
                    E &&
                      ((a.bfilterappids = !0),
                      (a.rgParentAppIds = JSON.stringify(E)));
              }
              const l = await r().get(s, { params: a, withCredentials: !0 });
              200 == l?.status && 1 == l.data?.success
                ? o
                  ? (M(l.data.matches?.filter((e) => o(e.id)) || []),
                    x(
                      l.data.package_matches?.filter((e) => o(e.packageid)) ||
                        [],
                    ),
                    N(
                      l.data.bundle_matches?.filter((e) => o(e.bundleid)) || [],
                    ))
                  : (M(l.data.matches || []),
                    x(l.data.package_matches || []),
                    N(l.data.bundle_matches || []))
                : (M([]), x([]), N([])),
                A(!1);
            },
            [o, n, _, C, E],
          ),
          G = (0, s.useCallback)(
            (e) => {
              D(e), R(B.current?.value, e);
            },
            [R, B],
          ),
          U = (0, s.useCallback)(
            (e) => {
              const t = e?.target?.value?.toLocaleLowerCase() ?? "";
              S(t);
              const a = P.current?.checked;
              I.Schedule(1e3, () => R(t, a));
            },
            [R, I, P],
          );
        let W;
        switch (
          (s.useEffect(() => {
            b && R(w);
          }, []),
          n)
        ) {
          case 1:
            W = (0, u.we)("#StoreAdmin_Search_Placeholder_package");
            break;
          case 2:
            W = (0, u.we)("#StoreAdmin_Search_Placeholder_bundle");
            break;
          default:
            W = (0, u.we)("#StoreAdmin_Search_Placeholder");
        }
        const $ = y && !C && 0 == n;
        return s.createElement(
          "div",
          { className: c },
          s.createElement(
            "div",
            { className: m.AppSearchInputContainer },
            s.createElement(l.pd, {
              type: "text",
              ref: B,
              className: m.SearchInput,
              label: a,
              tooltip: g,
              placeholder: W,
              onChange: U,
              value: w,
              bAlwaysShowClearAction: w.length > 0,
              focusOnMount: f,
            }),
            $ &&
              s.createElement(l.Yh, {
                ref: P,
                checked: v,
                onChange: G,
                className: m.AppSearchDLCCheckbox,
                label: (0, u.we)("#StoreAdmin_Search_IncludeDLC"),
              }),
          ),
          s.createElement(
            "div",
            { className: m.Results },
            k &&
              s.createElement(
                "div",
                { className: m.LoadingContainer },
                s.createElement(p.k, { size: "small" }),
              ),
            Boolean(T?.length > 0) &&
              T.map((e) =>
                s.createElement(h, {
                  key: e.id,
                  name: e.match,
                  id: e.id,
                  is_visible: !0,
                  type: 0,
                  fnSetItemID: () => {
                    M([]), t(e.id, e.itemid);
                  },
                }),
              ),
            Boolean(L?.length > 0) &&
              L.map((e) =>
                s.createElement(h, {
                  key: e.packageid,
                  name: e.name,
                  id: e.packageid,
                  type: 1,
                  is_visible: e.is_visible,
                  fnSetItemID: () => {
                    x([]), t(e.packageid);
                  },
                }),
              ),
            Boolean(F?.length > 0) &&
              F.map((e) =>
                s.createElement(h, {
                  key: e.bundleid,
                  name: e.name,
                  id: e.bundleid,
                  type: 2,
                  is_visible: e.is_visible,
                  fnSetItemID: () => {
                    N([]), t(e.bundleid);
                  },
                }),
              ),
          ),
        );
      }
      function h(e) {
        const { name: t, id: a, type: n, is_visible: r, fnSetItemID: l } = e,
          [i] = (0, o.G6)(a, n, { include_assets: !0 });
        let d = "#DailyDeals_HeaderArtMissing";
        switch (n) {
          case 1:
            d = "#DailyDeals_PackageHeaderArtMissing";
            break;
          case 2:
            d = "#DailyDeals_BundleHeaderArtMissing";
        }
        return s.createElement(
          "div",
          { className: m.ResultRow, onClick: () => l() },
          s.createElement(
            "div",
            { className: (0, c.A)(m.AvatarImageCtn, "AvatarImageCtn") },
            s.createElement("img", {
              src: i?.GetAssets()?.GetHeaderURL(),
              className: m.AvatarImage,
              alt: (0, u.we)(d),
            }),
          ),
          s.createElement(
            "div",
            { className: m.GameName },
            Boolean(!r) &&
              s.createElement(
                "span",
                null,
                (0, u.we)("#Sale_FeaturingHidden"),
                " ",
              ),
            t,
            1 == n ? ` (${a})` : "",
          ),
        );
      }
    },
    49693: (e, t, a) => {
      "use strict";
      a.d(t, { op: () => l, CS: () => s, vE: () => i, Al: () => r });
      class n {
        type = 0;
        text = "";
        tag;
        args;
        ConvertMalformedNodeToText() {
          3 == this.type
            ? (this.text = "[/" + this.text)
            : 2 == this.type && (this.text = "[" + this.text),
            (this.type = 1);
        }
      }
      class r {
        m_fnAccumulatorFactory;
        m_dictComponents;
        constructor(e, t) {
          (this.m_dictComponents = e), (this.m_fnAccumulatorFactory = t);
        }
        Parse(e, t, a = !1) {
          const r = (function (e, t) {
            const a = [];
            let r = new n(),
              s = !1,
              o = !1,
              l = !1;
            for (let n = 0; n < e.length; n++) {
              const i = e[n];
              switch (r.type) {
                case 0:
                  "[" == i
                    ? ((r.type = 2), (o = !0))
                    : ((r.type = 1), "\\" == i && t ? (s = !s) : (r.text += i));
                  break;
                case 2:
                case 3:
                  if ("/" == i && o) (r.type = 3), (r.text = ""), (o = !1);
                  else if ("[" != i || s)
                    if ("]" != i || s)
                      "\\" == i && t
                        ? ((r.text += i), (s = !s), (o = !1))
                        : ((r.text += i), (s = !1), (o = !1));
                    else {
                      const e =
                          2 == r.type &&
                          "noparse" == r.text.toLocaleLowerCase(),
                        t =
                          3 == r.type &&
                          "noparse" == r.text.toLocaleLowerCase();
                      o || (l && !t)
                        ? (r.ConvertMalformedNodeToText(), (r.text += i))
                        : e
                          ? (l = !0)
                          : t && (l = !1),
                        (r = c(a, r)),
                        (o = !1);
                    }
                  else
                    r.ConvertMalformedNodeToText(), (r = c(a, r, 2)), (o = !0);
                  break;
                case 1:
                  "[" != i || s
                    ? "\\" == i && t
                      ? (s && (r.text += i), (s = !s))
                      : ((r.text += i), (s = !1))
                    : ((r = c(a, r, 2)), (o = !0));
              }
            }
            0 != r.type &&
              ((2 != r.type && 3 != r.type) || r.ConvertMalformedNodeToText(),
              a.push(r));
            return a;
          })(e || "", a);
          return this.Parse_BuildElements(r, t);
        }
        Parse_BuildElements(e, t) {
          let a = this.m_fnAccumulatorFactory(void 0);
          const n = [],
            r = () => (n.length < 1 ? void 0 : n[n.length - 1]),
            s = this.m_dictComponents,
            o = (e) => !(!e.tag || !s.get(e.tag)?.autocloses);
          let l = !1,
            i = !0;
          const c = (e, r) => {
            if (e && e.node.tag === r.text && s.get(e.node.tag)) {
              const r = s.get(e.node.tag),
                o = n.map((e) => e.node.tag),
                c = { parentTags: o, tagname: e.node.tag, args: e.node.args },
                u = t(r.Constructor, c, ...a.GetElements());
              (a = e.accumulator),
                Array.isArray(u)
                  ? u.forEach((e) => a.AppendNode(e))
                  : a.AppendNode(u),
                (l = !!r.skipFollowingNewline),
                (i = e.bWrapTextForCopying);
            } else if (e) {
              const t = e.accumulator;
              t.AppendText("[" + e.node.text + "]", !1),
                a.GetElements().forEach((e) => t.AppendNode(e)),
                t.AppendText("[/" + r.text + "]", !1),
                (a = t),
                (i = e.bWrapTextForCopying);
            }
          };
          for (
            e.forEach((e, t) => {
              if (1 == e.type) {
                const t = l ? e.text.replace(/^[\t\r ]*\n/g, "") : e.text;
                a.AppendText(t, i), (l = !1);
              } else if (2 == e.type) {
                const t = s.get(e.tag);
                if (t) {
                  const o = r();
                  if (void 0 !== o) {
                    const t = s.get(o.node.tag);
                    t &&
                      t.autocloses &&
                      e.tag === o.node.tag &&
                      c(n.pop(), o.node);
                  }
                  n.push({ accumulator: a, node: e, bWrapTextForCopying: i }),
                    (a = this.m_fnAccumulatorFactory(e)),
                    (l = !!t.skipInternalNewline),
                    (i = t.allowWrapTextForCopying ?? !1);
                } else a.AppendText("[" + e.text + "]", 0 == n.length);
              } else if (3 == e.type) {
                for (; r() && r().node.tag !== e.text && o(r().node); ) {
                  const e = n.pop();
                  c(e, e.node);
                }
                if (r()?.node.tag == e.text) {
                  const t = n.pop();
                  c(t, e);
                } else a.AppendText("[/" + e.text + "]", 0 == n.length);
              }
            });
            n.length > 0;
          ) {
            const e = n.pop();
            c(e, e.node);
          }
          return a.GetElements();
        }
      }
      function s(e, t) {
        let a = "[" + e;
        t?.[""] && (a += `=${o("" + t[""])}`);
        for (const e in t)
          "" !== e &&
            (a += ` ${((n = e), n.replace(/(\\| |\])/g, "\\$1"))}=${o("" + t[e])}`);
        var n;
        return (a += "]"), a;
      }
      function o(e) {
        return `"${e.replace(/(\\|"|\])/g, "\\$1")}"`;
      }
      function l(e) {
        return `[/${e}]`;
      }
      function i(e) {
        return e.replace(/(\\|\[)/g, "\\$1");
      }
      function c(e, t, a = 0) {
        if (2 == t.type) {
          let e = t.text.indexOf("=");
          const a = t.text.indexOf(" ");
          if ((-1 != a && (-1 == e || a < e) && (e = a), e > 0)) {
            t.tag = t.text.substr(0, e).toLocaleLowerCase();
            const a = t.text.substr(e);
            t.args = (function (e) {
              if (!e || e.length < 1) return {};
              const t = {};
              let a = "",
                n = "",
                r = 0,
                s = 0;
              "=" == e[0] && (r = 2);
              let o = !1;
              for (s++; s < e.length; s++) {
                const l = e[s];
                let i = !0,
                  c = !1;
                switch (r) {
                  case 0:
                    if ("=" == l) return {};
                    if (" " == l) continue;
                    r = 1;
                    break;
                  case 1:
                    ("=" != l && " " != l) ||
                      o ||
                      (" " == l ? ((r = 0), (c = !0)) : (r = 2), (i = !1));
                    break;
                  case 2:
                    " " == l
                      ? ((r = 0), (i = !1), (c = !0))
                      : '"' == l
                        ? ((r = 4), (i = !1))
                        : (r = 3);
                    break;
                  case 3:
                  case 4:
                    ((" " == l && 4 != r && !o) ||
                      ('"' == l && 4 == r && !o)) &&
                      ((r = 0), (i = !1), (c = !0));
                }
                if (i)
                  if ("\\" != l || o)
                    if (((o = !1), 1 == r)) a += l;
                    else {
                      if (3 != r && 4 != r)
                        throw new Error(
                          "Not expecting to accumulate buffer in state " + r,
                        );
                      n += l;
                    }
                  else o = !0;
                c && ((t[a] = n), (a = ""), (n = ""));
              }
              0 != r && (t[a] = n);
              return t;
            })(a);
          } else (t.args = {}), (t.tag = t.text.toLocaleLowerCase());
        }
        e.push(t);
        const r = new n();
        return (r.type = a), r;
      }
    },
    4544: (e, t, a) => {
      "use strict";
      a.d(t, {
        Uh: () => l,
        VX: () => r,
        mn: () => i,
        nU: () => o,
        pV: () => s,
      });
      var n = a(22837);
      function r(e, t) {
        const a = (0, n.Lg)(t);
        return e ? e[a] : "";
      }
      function s(e, t, a) {
        const r = (0, n.Lg)(t);
        return e[r] != a && ((e[r] = a), !0);
      }
      function o(e, t) {
        const a = (0, n.Lg)(t);
        return Boolean(e?.[a]);
      }
      function l(e) {
        if (!e) return 0;
        let t = 0;
        for (let a = 0; a < 31; ++a) {
          e[(0, n.Lg)(a)] && (t += 1);
        }
        return t;
      }
      function i(e) {
        const t = new Array();
        for (let a = 0; a < 31; ++a) {
          const r = (0, n.Lg)(a);
          e[r] && t.push([r, e[r]]);
        }
        return t;
      }
    },
    64046: (e, t, a) => {
      "use strict";
      a.d(t, { s: () => l });
      var n = a(34629),
        r = a(90626),
        s = a(43465),
        o = a(73745);
      class l extends r.Component {
        state = { color: this.props.color || "rgba(1.0,1.0,1.0,1.0)" };
        static GetColorString(e) {
          return `rgba(${e.rgb.r}, ${e.rgb.g}, ${e.rgb.b}, ${e.rgb.a})`;
        }
        OnColorChange(e) {
          const t = l.GetColorString(e);
          this.setState({ color: t }), this.props.onChange(t);
        }
        render() {
          return r.createElement(s.xk, {
            onChange: this.OnColorChange,
            color: this.state.color,
          });
        }
      }
      (0, n.Cg)([o.oI], l.prototype, "OnColorChange", null);
    },
    24655: (e, t, a) => {
      "use strict";
      a.d(t, { hA: () => b });
      var n = a(90626),
        r = a(76217),
        s = a(67165),
        o = a(30894),
        l = (a(55263), a(45699)),
        i = a(78327);
      function c(e) {
        const { href: t, children: a, bAllowFocuseableAnchor: r, ...s } = e;
        return (0, i.Y2)()
          ? n.createElement("div", { ...s }, a)
          : r
            ? n.createElement(l.Ii, { href: t, ...s }, a)
            : n.createElement("a", { href: t, ...s }, a);
      }
      var u = a(52038),
        d = a(61859),
        m = a(82227),
        p = a(61336),
        g = a(84811),
        h = a(32630),
        f = a(22797),
        _ = a(56524),
        y = a(2193),
        C = a(95695);
      function b(e) {
        const {
            creatorID: t,
            bShowTagline: a,
            bHideCreatorType: l,
            bSmallFormat: b,
            bHideFollowButton: E,
            bAddLinkToMemberList: w,
          } = e,
          S = (0, s.FV)(t.clan_account_id),
          [v] = (0, o.L2)();
        if (v || !S)
          return n.createElement(
            "div",
            { className: _.DevSummaryWidgetCtn },
            n.createElement(f.t, {
              string: (0, d.we)("#Loading"),
              size: "medium",
              position: "center",
            }),
          );
        const D = t.type,
          k =
            "developer" == t.type
              ? (0, d.we)("#CreatorHome_DevelopedBy")
              : "publisher" == t.type
                ? (0, d.we)("#CreatorHome_PublishedBy")
                : (0, d.we)("#CreatorHome_InFranchise"),
          A = S.GetCreatorHomeURL(D),
          I = S.GetNumFollowers();
        return n.createElement(
          g.tH,
          null,
          n.createElement(
            h.A,
            { feature: "salecreatorhome" },
            n.createElement(
              r.Z,
              {
                className: (0, u.A)(
                  _.DevSummaryCtn,
                  b ? _.SmallFormat : _.LargeFormat,
                ),
                "flow-children": "row",
              },
              !l && n.createElement("span", { className: _.Title }, k),
              n.createElement(
                "div",
                { className: _.DevSummaryWidgetCtn },
                n.createElement("div", {
                  className: _.DevSummaryBackground,
                  style: {
                    backgroundImage: `url(${S.GetAvatarURLFullSize()} )`,
                  },
                }),
                n.createElement(
                  "div",
                  {
                    className: (0, u.A)(
                      _.DevSummaryContent,
                      C.FlexColumnContainer,
                      C.FlexContainSpaceBetween,
                    ),
                  },
                  n.createElement(
                    "div",
                    { className: C.FlexRowContainer },
                    n.createElement(
                      c,
                      {
                        href: (0, p.k2)(A),
                        className: _.AvatarLink,
                        bAllowFocuseableAnchor: !0,
                      },
                      n.createElement("img", {
                        className: (0, u.A)(_.Avatar, "Avatar_Trgt"),
                        src: S.GetAvatarURLFullSize(),
                      }),
                    ),
                    n.createElement(
                      "div",
                      {
                        className: (0, u.A)(
                          C.FlexColumnContainer,
                          _.CreatorDescCtn,
                        ),
                      },
                      n.createElement(
                        "div",
                        {
                          className: (0, u.A)(
                            _.CreatorTitleCtn,
                            C.FlexColumnContainer,
                          ),
                        },
                        n.createElement(
                          c,
                          { href: (0, p.k2)(A), className: _.CreatorNameName },
                          S.GetName(),
                        ),
                        Boolean(a) &&
                          n.createElement(
                            "div",
                            {
                              className: (0, u.A)(
                                C.FlexColumnContainer,
                                _.CreatorTagline,
                              ),
                            },
                            S.GetTagLine(),
                          ),
                      ),
                      n.createElement(
                        "div",
                        {
                          className: (0, u.A)(
                            b ? C.FlexColumnContainer : C.FlexRowContainer,
                            _.SocialFollowersCtn,
                          ),
                        },
                        n.createElement(
                          "div",
                          { className: _.FollowBtnCtn },
                          Boolean(!E) &&
                            n.createElement(y.of, {
                              clanAccountID: t.clan_account_id,
                              creatorID: t,
                            }),
                          n.createElement(
                            "div",
                            { className: _.Followers },
                            n.createElement("span", null, (0, m.Dq)(I)),
                            n.createElement("br", null),
                            (0, d.we)("#CreatorHome_JustFollowers"),
                          ),
                        ),
                      ),
                    ),
                  ),
                  Boolean(w) &&
                    n.createElement(
                      "a",
                      {
                        href:
                          i.TS.COMMUNITY_BASE_URL +
                          "gid/" +
                          S.GetClanSteamID().ConvertTo64BitString() +
                          "/members/",
                        target: "_blank",
                        className: _.MembersListLink,
                      },
                      (0, d.we)("#ClanMembershipList"),
                    ),
                ),
              ),
            ),
          ),
        );
      }
    },
    32630: (e, t, a) => {
      "use strict";
      a.d(t, { A: () => o });
      var n = a(90626),
        r = a(55963),
        s = (a(78327), a(60014));
      function o(e) {
        const { children: t, ...a } = e,
          o = (0, s.n9)(),
          l = n.useMemo(
            () => ({ ...r.Ay.GetDefaultParams(), ...o, ...a }),
            [
              o,
              a.domain,
              a.controller,
              a.method,
              a.submethod,
              a.feature,
              a.depth,
            ],
          );
        return n.createElement(s.nn, { ...l }, t);
      }
    },
    27650: (e, t, a) => {
      "use strict";
      a.d(t, { Ss: () => o, hk: () => l });
      var n = a(90626),
        r = a(72739),
        s = a(56011);
      function o(e, t) {
        const a = n.useRef(),
          s = n.useCallback(
            (t) => {
              t.currentTarget.files.length > 0 &&
                (e(t.currentTarget.files), (t.currentTarget.value = ""));
            },
            [e],
          ),
          o = n.useCallback(() => a.current.click(), []);
        return [
          r.createPortal(
            n.createElement(
              "form",
              { onSubmit: i, style: { display: "none" } },
              n.createElement("input", {
                ...t,
                type: "file",
                ref: a,
                onChange: s,
              }),
            ),
            window.document.body,
          ),
          o,
        ];
      }
      function l(e) {
        const [t, a] = n.useState(!1);
        return [
          {
            onDragEnter: n.useCallback((e) => {
              ((e.dataTransfer.files && e.dataTransfer.files[0]) ||
                (e.dataTransfer.types && "Files" == e.dataTransfer.types[0])) &&
                a(!0);
            }, []),
            onDragLeave: n.useCallback((e) => {
              s.NO(e) && a(!1);
            }, []),
            onDragEnd: n.useCallback(() => a(!1), []),
            onDragOver: t ? i : void 0,
            onDrop: n.useCallback(
              (t) => {
                t.dataTransfer.files?.length &&
                  (e(t.dataTransfer.files, t), t.preventDefault()),
                  a(!1);
              },
              [e],
            ),
          },
          t,
        ];
      }
      function i(e) {
        e.preventDefault();
      }
    },
  },
]);
