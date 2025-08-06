/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkappmgmt_storeadmin =
  self.webpackChunkappmgmt_storeadmin || []).push([
  [8758],
  {
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
    8743: (e) => {
      e.exports = {
        ArtPreview: "_3793xvP87t1rZYbAQDC1pG",
        ArtNoArt: "_3WxfzmFYwb-rh8sn5VMFMl",
      };
    },
    48576: (e) => {
      e.exports = {
        StatusLineItemCtn: "V5SWm2fiBKJqCbPn7bpC0",
        StatusIcon: "_1DFlt9vB8DfZc84ZeQcrgT",
        StatusIconDone: "K_JWTc7pXC9lechbL_JMT",
        StatusNotDone: "zl6s26pUkMfMXmoMlJstY",
      };
    },
    15736: (e) => {
      e.exports = { SmallAvatar: "_2cuu0nLVc4medg6FpU6PQl" };
    },
    23910: (e, t, a) => {
      "use strict";
      a.d(t, {
        DU: () => i,
        I8: () => r,
        Rw: () => s,
        Sy: () => c,
        e5: () => u,
        k: () => l,
        nY: () => o,
        rz: () => d,
        s8: () => m,
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
      const l = [1, 2, 3, 4, 5, 6, 8, 7, 9, 10];
      function o(e) {
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
      var m;
      function u(e, t) {
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
      })(m || (m = {}));
      const d = {
        include_assets: !0,
        include_basic_info: !0,
        include_release: !0,
      };
    },
    64177: (e, t, a) => {
      "use strict";
      a.d(t, { Dn: () => d, O4: () => m, Ut: () => u, p0: () => p });
      var n = a(41735),
        r = a.n(n),
        s = a(90626),
        l = a(68797),
        o = a(78327),
        i = a(62792);
      class c {
        m_mapAppIDToPaymentPartners = new Map();
        m_mapAppIDToPromise = new Map();
        m_mapPackageIDToPaymentPartners = new Map();
        m_mapPackageIDToPromise = new Map();
        m_mapBundleIDToPaymentPartners = new Map();
        m_mapBundleIDToPromise = new Map();
        GetInfoForApp(e) {
          return this.m_mapAppIDToPaymentPartners.get(e);
        }
        BHasInfoForApp(e) {
          return this.m_mapAppIDToPaymentPartners.has(e);
        }
        GetInfoForPackage(e) {
          return this.m_mapPackageIDToPaymentPartners.get(e);
        }
        BHasInfoForPackage(e) {
          return this.m_mapPackageIDToPaymentPartners.has(e);
        }
        GetInfoForBundle(e) {
          return this.m_mapBundleIDToPaymentPartners.get(e);
        }
        BHasInfoForBundle(e) {
          return this.m_mapBundleIDToPaymentPartners.has(e);
        }
        GetInfoForStoreItem(e, t) {
          switch (t) {
            case 0:
              return this.GetInfoForApp(e);
            case 1:
              return this.GetInfoForPackage(e);
            case 2:
              return this.GetInfoForBundle(e);
            default:
              return null;
          }
        }
        BHasInfoForStoreItem(e, t) {
          switch (t) {
            case 0:
              return this.BHasInfoForApp(e);
            case 1:
              return this.BHasInfoForPackage(e);
            case 2:
              return this.BHasInfoForBundle(e);
            default:
              return !1;
          }
        }
        async LoadAppPartnerInfo(e) {
          return (
            this.m_mapAppIDToPromise.has(e) ||
              this.m_mapAppIDToPromise.set(
                e,
                this.InternalLoadAppPartnerInfo(e, null, null),
              ),
            this.m_mapAppIDToPromise.get(e)
          );
        }
        async LoadPackagePartnerInfo(e) {
          return (
            this.m_mapPackageIDToPromise.has(e) ||
              this.m_mapPackageIDToPromise.set(
                e,
                this.InternalLoadAppPartnerInfo(null, e, null),
              ),
            this.m_mapPackageIDToPromise.get(e)
          );
        }
        async LoadBundlePartnerInfo(e) {
          return (
            this.m_mapBundleIDToPromise.has(e) ||
              this.m_mapBundleIDToPromise.set(
                e,
                this.InternalLoadAppPartnerInfo(null, null, e),
              ),
            this.m_mapBundleIDToPromise.get(e)
          );
        }
        async LoadStoreItemPartnerInfo(e, t) {
          switch (t) {
            case 0:
              return this.LoadAppPartnerInfo(e);
            case 1:
              return this.LoadPackagePartnerInfo(e);
            case 2:
              return this.LoadBundlePartnerInfo(e);
            default:
              return null;
          }
        }
        async InternalLoadAppPartnerInfo(e, t, a) {
          let n = null;
          try {
            const s = { appid: e, packageid: t, bundleid: a },
              i = o.TS.PARTNER_BASE_URL + "promotion/dailydeals/ajaxgetpartner",
              c = await r().get(i, { params: s, withCredentials: !0 });
            if (200 == c?.status && 1 == c.data?.success)
              return e
                ? (this.m_mapAppIDToPaymentPartners.set(e, c.data.partnerinfo),
                  this.m_mapAppIDToPaymentPartners.get(e))
                : t
                  ? (this.m_mapPackageIDToPaymentPartners.set(
                      t,
                      c.data.partnerinfo,
                    ),
                    this.m_mapPackageIDToPaymentPartners.get(t))
                  : (this.m_mapBundleIDToPaymentPartners.set(
                      a,
                      c.data.partnerinfo,
                    ),
                    this.m_mapBundleIDToPaymentPartners.get(a));
            n = (0, l.H)(c);
          } catch (e) {
            n = (0, l.H)(e);
          }
          return (
            console.error(
              "CPartnerPaymentStore.LoadAppPartnerInfo failed: " +
                n?.strErrorMsg,
              n,
            ),
            null
          );
        }
        static s_Singleton;
        static Get() {
          return (
            c.s_Singleton ||
              ((c.s_Singleton = new c()),
              "dev" == o.TS.WEB_UNIVERSE &&
                (window.g_DailyDealEditStore = c.s_Singleton)),
            c.s_Singleton
          );
        }
        constructor() {}
      }
      function m(e) {
        return d(e, 0);
      }
      function u(e) {
        return d(e.id, (0, i.gy)(e));
      }
      function d(e, t) {
        const [a, n] = s.useState(() => c.Get().GetInfoForStoreItem(e, t));
        return (
          s.useEffect(() => {
            e
              ? c.Get().BHasInfoForStoreItem(e, t) && null != a
                ? c.Get().BHasInfoForStoreItem(e, t) &&
                  a != c.Get().GetInfoForStoreItem(e, t) &&
                  n(c.Get().GetInfoForStoreItem(e, t))
                : c.Get().LoadStoreItemPartnerInfo(e, t).then(n)
              : n(null);
          }, [e, t, a]),
          a
        );
      }
      function p(e) {
        const [t, a] = (0, s.useState)(null);
        return (
          (0, s.useEffect)(() => {
            if (e?.length > 0) {
              const t = e.map((e) => c.Get().LoadStoreItemPartnerInfo(e, 0));
              Promise.all(t).then(() => {
                const t = new Map();
                e.forEach((e) => {
                  c.Get().BHasInfoForApp(e) &&
                    t.set(e, c.Get().GetInfoForApp(e));
                }),
                  a(t);
              });
            }
          }, [e]),
          t
        );
      }
    },
    59403: (e, t, a) => {
      "use strict";
      a.d(t, {
        Gx: () => o,
        _w: () => u,
        ap: () => s,
        cG: () => m,
        iN: () => i,
        pc: () => c,
        sq: () => l,
      });
      var n = a(90626),
        r = a(61859);
      function s(e) {
        if (!e || 0 == e.trim().length) return null;
        try {
          return JSON.parse(e);
        } catch {
          return null;
        }
      }
      function l(e, t) {
        const a = new Set();
        return e.filter((e) => {
          const n = t(e);
          return !a.has(n) && (a.add(n), !0);
        });
      }
      function o(...e) {
        return [...new Set(e.flat())];
      }
      function i(e) {
        const { href: t, children: a } = e;
        return t
          ? n.createElement("a", { ...e }, a)
          : n.createElement(n.Fragment, null, a);
      }
      function c(e, t) {
        const a = {
            sText: (0, r.we)(
              "#Dashboard_UpcomingEvents_AppReleaseState_unavailable",
            ),
            sTooltip: (0, r.we)(
              "#Dashboard_UpcomingEvents_AppReleaseState_unavailable_Description",
            ),
            bPrereleaseOrReleased: !1,
          },
          n = {
            sText: (0, r.we)(
              "#Dashboard_UpcomingEvents_AppReleaseState_storepagenotlive",
            ),
            sTooltip: void 0,
            bPrereleaseOrReleased: !1,
          },
          s = {
            released: {
              sText: (0, r.we)(
                "#Dashboard_UpcomingEvents_AppReleaseState_released",
              ),
              sTooltip: (0, r.we)(
                "#Dashboard_UpcomingEvents_AppReleaseState_released_Description",
              ),
              bPrereleaseOrReleased: !0,
            },
            prerelease: {
              sText: (0, r.we)(
                "#Dashboard_UpcomingEvents_AppReleaseState_prerelease",
              ),
              sTooltip: (0, r.we)(
                "#Dashboard_UpcomingEvents_AppReleaseState_prerelease_Description",
              ),
              bPrereleaseOrReleased: !0,
            },
            ownersonly: {
              sText: (0, r.we)(
                "#Dashboard_UpcomingEvents_AppReleaseState_ownersonly",
              ),
              sTooltip: (0, r.we)(
                "#Dashboard_UpcomingEvents_AppReleaseState_ownersonly_Description",
              ),
              bPrereleaseOrReleased: !1,
            },
            preloadonly: {
              sText: (0, r.we)(
                "#Dashboard_UpcomingEvents_AppReleaseState_preloadonly",
              ),
              sTooltip: (0, r.we)(
                "#Dashboard_UpcomingEvents_AppReleaseState_preloadonly_Description",
              ),
              bPrereleaseOrReleased: !1,
            },
            disabled: {
              sText: (0, r.we)(
                "#Dashboard_UpcomingEvents_AppReleaseState_disabled",
              ),
              sTooltip: (0, r.we)(
                "#Dashboard_UpcomingEvents_AppReleaseState_disabled_Description",
              ),
              bPrereleaseOrReleased: !1,
            },
          };
        let l = a;
        return e in s ? (l = s[e]) : t || (l = n), l;
      }
      function m(e) {
        if ("seasonalsale" == e.type) {
          const t = e.name.toLowerCase();
          if (t.includes("spring")) return "#dd71d4";
          if (t.includes("summer")) return "#29c6ec";
          if (t.includes("autumn")) return "#ac240c";
          if (t.includes("winter")) return "#01704f";
        }
      }
      function u(e) {
        let t = 0;
        for (let a = 0; a < e.length; a++) t = e.charCodeAt(a) + ((t << 5) - t);
        return `hsl(${t % 360}, ${50 + (t % 50)}%, ${40 + (t % 30)}%, 0.25)`;
      }
    },
    13549: (e, t, a) => {
      "use strict";
      a.d(t, { i: () => A, q: () => w });
      var n = a(23910),
        r = a(65946),
        s = a(90626),
        l = a(17720),
        o = a(4796),
        i = a(31540),
        c = a(96001),
        m = a(56545),
        u = a(20194);
      var d = a(44165),
        p = a(62792),
        g = a(55263),
        _ = a(52038),
        f = a(16676),
        h = a(56330),
        E = a(22797),
        I = a(61859),
        D = a(30470),
        v = a(26408);
      function A(e) {
        const { oEditableMessage: t } = e,
          [a] = (0, r.q3)(() => [t.GetStoreItemKey()]);
        return a && "app" == a.item_type
          ? s.createElement(b, { oEditableMessage: t, idKey: a })
          : s.createElement(
              "div",
              { className: h.ErrorStylesWithIcon },
              "Error: Major Update does not support anything but targeting app",
            );
      }
      function b(e) {
        const { oEditableMessage: t, idKey: a } = e,
          [o, i] = (0, r.q3)(() => [
            t.GetUpdateEventClanAccountID(),
            t.GetUpdateEventGID(),
          ]),
          [c] = (0, g.G6)(a?.id, (0, p.JK)(a?.item_type), n.rz),
          m = (0, s.useMemo)(() => l.b.InitFromClanID(o), [o]),
          u = 12 != c?.GetAppType() ? c?.GetParentAppID() : void 0;
        return s.createElement(
          "div",
          null,
          s.createElement(w, {
            appid: u || a.id,
            selectedEventGID: i,
            fnSetUpdateEvent: t.SetUpdateEvent,
            label: (0, I.we)("#EventDropDown_MM_FeaturedEvent"),
            tooltip: (0, I.we)("#EventDropDown_MM_FeaturedEvent_ttip"),
            strUrlLearnMore:
              "https://confluence.valve.org/display/SteamBiz/Steam+Promotions+Assets+Guide#SteamPromotionsAssetsGuide-MarketingMessageforUpdates",
          }),
          Boolean(o) &&
            s.createElement(
              s.Fragment,
              null,
              s.createElement(
                "a",
                {
                  href: `${D.TS.COMMUNITY_BASE_URL}gid/${m.ConvertTo64BitString()}/partnerevents/edit/${i}`,
                  target: "_blank",
                },
                "open event for edit",
              ),
              s.createElement("br", null),
              s.createElement("br", null),
            ),
        );
      }
      function w(e) {
        const {
            appid: t,
            selectedEventGID: a,
            fnSetUpdateEvent: n,
            label: r,
            tooltip: p,
            strUrlLearnMore: g,
            bFilterOutDrafts: A,
          } = e,
          b = (0, d.f1)(),
          { clanInfo: w, bLoadingClanInfo: S } = (0, o.vF)(t),
          P = (function (e, t) {
            const a = (0, c.a)(),
              n = (0, s.useMemo)(() => l.b.InitFromClanID(e), [e]),
              r = (0, u.I)({
                queryKey: ["eventdraftrecent", e, t],
                queryFn: async () => {
                  const e = m.w.Init(i.FF);
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
          })(w?.clanAccountID, b - 2592e3),
          y = (0, s.useMemo)(
            () => (A ? P?.filter((e) => !e.hidden) : P),
            [P, A],
          ),
          C = (0, s.useMemo)(
            () =>
              y
                ? y.map((e) => {
                    const t = e.hidden
                      ? e.published
                        ? "#EventDropDown_HiddenPublish"
                        : "#EventDropDown_Hidden"
                      : "#EventDropDown_Visible";
                    return {
                      label: (0, I.we)(
                        t,
                        (0, I.TW)(e.rtime32_start_time),
                        e.event_name,
                      ),
                      data: e,
                    };
                  })
                : [],
            [y],
          ),
          L = y?.find((e) => e.gid === a);
        return (
          "dev" == D.TS.WEB_UNIVERSE &&
            console.log(
              `AssetRequestSelectPartnerEvent: selectedEventGID=${a} === selected?.gid=${L?.gid}`,
              a,
              L,
              L?.gid,
            ),
          y || (!S && !w?.appid)
            ? y && 0 != y.length
              ? s.createElement(
                  s.Fragment,
                  null,
                  Boolean(g) &&
                    s.createElement(
                      "a",
                      { href: g, target: "_blank", style: { float: "right" } },
                      (0, I.we)(
                        "#DiscountDashboard_DetailView_BatchDiscount_MaxDiscountDocumentationLink",
                      ),
                    ),
                  s.createElement(f.m, {
                    label: r,
                    tooltip: p,
                    selectedOption: L,
                    onChange: (e) => n(w.clanAccountID, e.data.gid),
                    rgOptions: C,
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
                    s.createElement(v.o, { tooltip: p }),
                  ),
                  s.createElement(
                    "div",
                    { className: (0, _.A)(h.ErrorStylesWithIcon, "ErrorCtn") },
                    (0, I.oW)(
                      "#EventDropDown_NoEventFound",
                      s.createElement("a", {
                        href: `${D.TS.COMMUNITY_BASE_URL}ogg/${t}/partnerevents`,
                        target: "_blank",
                      }),
                    ),
                  ),
                )
            : s.createElement(E.t, {
                string: (0, I.we)("#Loading"),
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
        l = a(55263),
        o = a(16676),
        i = a(6144),
        c = a(52038),
        m = a(61859),
        u = a(78327),
        d = a(52249),
        p = a(39700);
      function g(e) {
        const {
            fnSetItemID: t,
            strLabel: a,
            itemType: n,
            fnFilterID: l,
            className: c,
            tooltip: g,
            autoFocus: f,
            bIncludeRetired: h,
            bShowDLCToggle: E,
            bOnlyDLC: I,
            bRunQueryOnLoad: D,
            rgParentAppIDs: v,
          } = e,
          [A, b] = s.useState(""),
          [w, S] = s.useState(!1),
          [P, y] = s.useState(!1),
          [C] = s.useState(new i.LU()),
          [L, k] = s.useState(new Array()),
          [T, M] = s.useState(new Array()),
          [N, F] = s.useState(new Array()),
          B = s.createRef(),
          R = s.createRef();
        const U = (0, s.useCallback)(
            async (e, t) => {
              y(!0);
              let a = { json: 1, term: e, bexcluderetired: !h },
                s = `${u.TS.PARTNER_BASE_URL}appsearch/suggestapps`;
              switch (n) {
                case 1:
                  s = `${u.TS.PARTNER_BASE_URL}admin/store/suggestpackage`;
                  break;
                case 2:
                  s = `${u.TS.PARTNER_BASE_URL}bundles/suggestbundle`;
                  break;
                default:
                  I ? (a.includedlc = !0) : !1 === t && (a.includedlc = !1),
                    v &&
                      ((a.bfilterappids = !0),
                      (a.rgParentAppIds = JSON.stringify(v)));
              }
              const o = await r().get(s, { params: a, withCredentials: !0 });
              200 == o?.status && 1 == o.data?.success
                ? l
                  ? (k(o.data.matches?.filter((e) => l(e.id)) || []),
                    M(
                      o.data.package_matches?.filter((e) => l(e.packageid)) ||
                        [],
                    ),
                    F(
                      o.data.bundle_matches?.filter((e) => l(e.bundleid)) || [],
                    ))
                  : (k(o.data.matches || []),
                    M(o.data.package_matches || []),
                    F(o.data.bundle_matches || []))
                : (k([]), M([]), F([])),
                y(!1);
            },
            [l, n, h, I, v],
          ),
          G = (0, s.useCallback)(
            (e) => {
              S(e), U(B.current?.value, e);
            },
            [U, B],
          ),
          x = (0, s.useCallback)(
            (e) => {
              const t = e?.target?.value?.toLocaleLowerCase() ?? "";
              b(t);
              const a = R.current?.checked;
              C.Schedule(1e3, () => U(t, a));
            },
            [U, C, R],
          );
        let H;
        switch (
          (s.useEffect(() => {
            D && U(A);
          }, []),
          n)
        ) {
          case 1:
            H = (0, m.we)("#StoreAdmin_Search_Placeholder_package");
            break;
          case 2:
            H = (0, m.we)("#StoreAdmin_Search_Placeholder_bundle");
            break;
          default:
            H = (0, m.we)("#StoreAdmin_Search_Placeholder");
        }
        const O = E && !I && 0 == n;
        return s.createElement(
          "div",
          { className: c },
          s.createElement(
            "div",
            { className: d.AppSearchInputContainer },
            s.createElement(o.pd, {
              type: "text",
              ref: B,
              className: d.SearchInput,
              label: a,
              tooltip: g,
              placeholder: H,
              onChange: x,
              value: A,
              bAlwaysShowClearAction: A.length > 0,
              focusOnMount: f,
            }),
            O &&
              s.createElement(o.Yh, {
                ref: R,
                checked: w,
                onChange: G,
                className: d.AppSearchDLCCheckbox,
                label: (0, m.we)("#StoreAdmin_Search_IncludeDLC"),
              }),
          ),
          s.createElement(
            "div",
            { className: d.Results },
            P &&
              s.createElement(
                "div",
                { className: d.LoadingContainer },
                s.createElement(p.k, { size: "small" }),
              ),
            Boolean(L?.length > 0) &&
              L.map((e) =>
                s.createElement(_, {
                  key: e.id,
                  name: e.match,
                  id: e.id,
                  is_visible: !0,
                  type: 0,
                  fnSetItemID: () => {
                    k([]), t(e.id, e.itemid);
                  },
                }),
              ),
            Boolean(T?.length > 0) &&
              T.map((e) =>
                s.createElement(_, {
                  key: e.packageid,
                  name: e.name,
                  id: e.packageid,
                  type: 1,
                  is_visible: e.is_visible,
                  fnSetItemID: () => {
                    M([]), t(e.packageid);
                  },
                }),
              ),
            Boolean(N?.length > 0) &&
              N.map((e) =>
                s.createElement(_, {
                  key: e.bundleid,
                  name: e.name,
                  id: e.bundleid,
                  type: 2,
                  is_visible: e.is_visible,
                  fnSetItemID: () => {
                    F([]), t(e.bundleid);
                  },
                }),
              ),
          ),
        );
      }
      function _(e) {
        const { name: t, id: a, type: n, is_visible: r, fnSetItemID: o } = e,
          [i] = (0, l.G6)(a, n, { include_assets: !0 });
        let u = "#DailyDeals_HeaderArtMissing";
        switch (n) {
          case 1:
            u = "#DailyDeals_PackageHeaderArtMissing";
            break;
          case 2:
            u = "#DailyDeals_BundleHeaderArtMissing";
        }
        return s.createElement(
          "div",
          { className: d.ResultRow, onClick: () => o() },
          s.createElement(
            "div",
            { className: (0, c.A)(d.AvatarImageCtn, "AvatarImageCtn") },
            s.createElement("img", {
              src: i?.GetAssets()?.GetHeaderURL(),
              className: d.AvatarImage,
              alt: (0, m.we)(u),
            }),
          ),
          s.createElement(
            "div",
            { className: d.GameName },
            Boolean(!r) &&
              s.createElement(
                "span",
                null,
                (0, m.we)("#Sale_FeaturingHidden"),
                " ",
              ),
            t,
            1 == n ? ` (${a})` : "",
          ),
        );
      }
    },
    4544: (e, t, a) => {
      "use strict";
      a.d(t, {
        Uh: () => o,
        VX: () => r,
        mn: () => i,
        nU: () => l,
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
      function l(e, t) {
        const a = (0, n.Lg)(t);
        return Boolean(e?.[a]);
      }
      function o(e) {
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
    71725: (e, t, a) => {
      "use strict";
      a.d(t, { z: () => v });
      var n = a(41735),
        r = a.n(n),
        s = a(90626),
        l = a(22837),
        o = a(73744),
        i = a(82705),
        c = a(63556),
        m = a(45737),
        u = a.n(m),
        d = a(12155),
        p = a(61859),
        g = a(8743),
        _ = a.n(g),
        f = a(22797),
        h = a(28865);
      function E(e) {
        const { rgAssetURL: t, rgLang: a, bIsImage: n } = e,
          [r, o] = (0, s.useState)([]);
        if (
          ((0, s.useEffect)(() => {
            let e = !1;
            const a = n ? I : D;
            return (
              Promise.all(t.map((e) => a(e))).then((t) => {
                e || o(t);
              }),
              () => {
                e = !0;
              }
            );
          }, [t, n]),
          !r)
        )
          return s.createElement(f.t, {
            size: "small",
            string: "Checking Assets...",
          });
        const i = r.map((e, t) => (e ? -1 : t)).filter((e) => -1 !== e);
        return 0 === i.length
          ? s.createElement(h._, {
              bDone: !0,
              name: "Uploaded assets verified",
              tooltip:
                "In the background we verified the assets by downloading from the CDN to verify they are present",
            })
          : s.createElement(
              s.Fragment,
              null,
              s.createElement(h._, {
                bDone: !1,
                name: `${i.length} Asset(s) uploaded failed to fetch`,
              }),
              i
                .map((e) => ({ url: t[e], lang: a[e] }))
                .map((e) =>
                  s.createElement(h._, {
                    key: e.url,
                    bDone: !1,
                    name: `${(0, l.Lg)(e.lang)} - Not found`,
                    tooltip: `${e.url} not downloadable from the CDN`,
                  }),
                ),
            );
      }
      function I(e) {
        return new Promise((t) => {
          const a = new Image();
          (a.onload = () => t(!0)), (a.onerror = () => t(!1)), (a.src = e);
        });
      }
      function D(e) {
        return new Promise((t) => {
          const a = document.createElement("video");
          (a.preload = "metadata"),
            (a.onloadedmetadata = () => t(!0)),
            (a.onerror = () => t(!1)),
            (a.src = e);
        });
      }
      function v(e) {
        const {
            rgAssetLangs: t,
            initialLang: a,
            fnGetAssetUrl: n,
            fnDeletAssetLang: r,
            imageClassname: l,
            fnDeleteAllAssets: o,
            showDeleteAll: i = !0,
            bVerifyAssets: m,
            bVideoAsset: d,
          } = e,
          [g, _] = s.useState(a ?? c.O.Get().GetCurEditLanguage() ?? t[0]),
          [f, h] = s.useState(n(g)),
          I = s.useMemo(() => [...t].sort(), [t]);
        s.useEffect(() => {
          const e = n(g);
          e ? h(e) : I.length > 0 ? _(I[0]) : h(null);
        }, [g, n, I]);
        const D = (0, s.useMemo)(() => t.map((e) => n(e)), [n, t]);
        return s.createElement(
          "div",
          { className: u().UploadedImageDisplayCtn },
          s.createElement(
            "div",
            { className: u().UploaderLeftCol },
            s.createElement(b, { curAssetURL: f, imageClassname: l }),
          ),
          s.createElement(
            "div",
            { className: u().UploaderRightCol },
            s.createElement(
              "div",
              { className: u().SectionCtn },
              s.createElement(
                "div",
                { className: u().LangCountTitle },
                (0, p.we)("#ImageUpload_LocalizedAssets"),
              ),
              s.createElement(
                "div",
                { className: u().LangSelectCtn },
                I.map((e) =>
                  s.createElement(A, {
                    key: e,
                    language: e,
                    selectedLanguage: g,
                    setSelectedLanguage: _,
                    deleteLanguage: r,
                  }),
                ),
              ),
              i &&
                Boolean(I.length) &&
                s.createElement(
                  "a",
                  {
                    href: "#",
                    className: u().DeleteAll,
                    onClick: (e) => {
                      o ? o() : I.forEach((e) => r(e)), e.preventDefault();
                    },
                  },
                  (0, p.we)("#Button_DeleteAll"),
                ),
              Boolean(m) &&
                s.createElement(E, { rgAssetURL: D, rgLang: t, bIsImage: !d }),
            ),
          ),
        );
      }
      function A(e) {
        const {
            language: t,
            selectedLanguage: a,
            setSelectedLanguage: n,
            deleteLanguage: r,
          } = e,
          o = (0, l.Lg)(t);
        return s.createElement(
          "div",
          { className: u().UploaderImgLang, key: "image" + o },
          s.createElement(
            "a",
            {
              href: "#",
              onClick: (e) => {
                e.preventDefault(), n(t);
              },
            },
            t === a
              ? s.createElement("span", { className: u().LangSelected }, "" + o)
              : s.createElement("span", null, "" + o),
          ),
          s.createElement(
            "a",
            {
              href: "#",
              onClick: (e) => {
                e.preventDefault(), r(t);
              },
            },
            s.createElement(d.X, null),
          ),
        );
      }
      function b(e) {
        const { curAssetURL: t, imageClassname: a } = e;
        if (!t)
          return s.createElement(
            "div",
            { className: _().ArtNoArt },
            (0, p.we)("#ImageDisplay_NoAssetUploaded"),
          );
        const n = (0, i.yh)(t);
        return o.Ho.includes(n)
          ? s.createElement(w, { ...e })
          : o.x.includes(n)
            ? s.createElement(S, {
                className: a || _().ArtPreview,
                strTextURL: t,
              })
            : s.createElement("img", {
                className: a || _().ArtPreview,
                src: t,
              });
      }
      function w(e) {
        const { curAssetURL: t, imageClassname: a } = e,
          n = s.useRef(void 0);
        return (
          s.useEffect(() => {
            n.current && (n.current.load(), n.current.play());
          }, [t]),
          s.createElement(
            "video",
            {
              ref: n,
              className: a || _().ArtPreview,
              autoPlay: !0,
              loop: !0,
              controls: !0,
              muted: !0,
            },
            s.createElement("source", { src: t }),
          )
        );
      }
      function S(e) {
        const { strTextURL: t, className: a } = e,
          [n, l] = s.useState("");
        return (
          s.useEffect(() => {
            r()
              .get(t)
              .then((e) => {
                l(e.data);
              })
              .catch((e) => {
                console.error(e);
              });
          }, [t]),
          s.createElement("textarea", {
            className: a,
            value: n,
            readOnly: !0,
            rows: 20,
          })
        );
      }
    },
    28865: (e, t, a) => {
      "use strict";
      a.d(t, { _: () => c });
      var n = a(90626),
        r = a(32754),
        s = a(48576),
        l = a.n(s),
        o = a(52038),
        i = a(12155);
      function c(e) {
        const { bDone: t, name: a, tooltip: s } = e;
        return n.createElement(
          "div",
          { className: l().StatusLineItemCtn },
          n.createElement(
            "span",
            {
              className: (0, o.A)(
                l().StatusIcon,
                t ? l().StatusIconDone : l().StatusNotDone,
              ),
            },
            t ? n.createElement(i.Jlk, null) : n.createElement(i.X, null),
          ),
          n.createElement(r.he, { toolTipContent: s }, a),
        );
      }
    },
    24655: (e, t, a) => {
      "use strict";
      a.d(t, { hA: () => v, ux: () => A });
      var n = a(90626),
        r = a(76217),
        s = a(12493),
        l = a(30894),
        o = (a(55263), a(45699)),
        i = a(78327);
      function c(e) {
        const { href: t, children: a, bAllowFocuseableAnchor: r, ...s } = e;
        return (0, i.Y2)()
          ? n.createElement("div", { ...s }, a)
          : r
            ? n.createElement(o.Ii, { href: t, ...s }, a)
            : n.createElement("a", { href: t, ...s }, a);
      }
      var m = a(81393),
        u = a(52038),
        d = a(61859),
        p = a(82227),
        g = a(61336),
        _ = a(84811),
        f = a(32630),
        h = a(22797),
        E = a(56524),
        I = a(2193),
        D = a(95695);
      function v(e) {
        const {
            creatorID: t,
            bShowTagline: a,
            bHideCreatorType: o,
            bSmallFormat: m,
            bHideFollowButton: v,
            bAddLinkToMemberList: A,
            bMinimalDisplay: b,
          } = e,
          w = (0, s.FV)(t.clan_account_id),
          [S] = (0, l.L2)();
        if (S || !w)
          return n.createElement(
            "div",
            { className: E.DevSummaryWidgetCtn },
            n.createElement(h.t, {
              string: (0, d.we)("#Loading"),
              size: "medium",
              position: "center",
            }),
          );
        const P = t.type,
          y =
            "developer" == t.type
              ? (0, d.we)("#CreatorHome_DevelopedBy")
              : "publisher" == t.type
                ? (0, d.we)("#CreatorHome_PublishedBy")
                : (0, d.we)("#CreatorHome_InFranchise"),
          C = w.GetCreatorHomeURL(P),
          L = w.GetNumFollowers();
        return n.createElement(
          _.tH,
          null,
          n.createElement(
            f.Ay,
            { feature: "salecreatorhome" },
            n.createElement(
              r.Z,
              {
                className: (0, u.A)(
                  E.DevSummaryCtn,
                  m ? E.SmallFormat : E.LargeFormat,
                  b ? E.MinimalDisplay : "",
                ),
                "flow-children": "row",
              },
              !o && n.createElement("span", { className: E.Title }, y),
              n.createElement(
                "div",
                { className: E.DevSummaryWidgetCtn },
                n.createElement("div", {
                  className: E.DevSummaryBackground,
                  style: {
                    backgroundImage: `url(${w.GetAvatarURLFullSize()} )`,
                  },
                }),
                n.createElement(
                  "div",
                  { className: (0, u.A)(E.DevSummaryContent) },
                  n.createElement(
                    "div",
                    { className: D.FlexRowContainer },
                    n.createElement(
                      c,
                      {
                        href: (0, g.k2)(C),
                        className: E.AvatarLink,
                        bAllowFocuseableAnchor: !0,
                      },
                      n.createElement("img", {
                        className: (0, u.A)(E.Avatar, "Avatar_Trgt"),
                        src: w.GetAvatarURLFullSize(),
                      }),
                    ),
                    n.createElement(
                      "div",
                      {
                        className: (0, u.A)(
                          D.FlexColumnContainer,
                          E.CreatorDescCtn,
                        ),
                      },
                      n.createElement(
                        "div",
                        {
                          className: (0, u.A)(
                            E.CreatorTitleCtn,
                            D.FlexColumnContainer,
                          ),
                        },
                        n.createElement(
                          c,
                          { href: (0, g.k2)(C), className: E.CreatorNameName },
                          w.GetName(),
                        ),
                        Boolean(a) &&
                          n.createElement(
                            "div",
                            {
                              className: (0, u.A)(
                                D.FlexColumnContainer,
                                E.CreatorTagline,
                              ),
                            },
                            w.GetTagLine(),
                          ),
                      ),
                      n.createElement(
                        "div",
                        {
                          className: (0, u.A)({
                            [D.FlexColumnContainer]: m,
                            [D.FlexRowContainer]: !m,
                            [E.SocialFollowersCtn]: !0,
                          }),
                        },
                        n.createElement(
                          "div",
                          { className: (0, u.A)(E.FollowBtnCtn) },
                          Boolean(!v) &&
                            n.createElement(I.of, {
                              clanAccountID: t.clan_account_id,
                              creatorID: t,
                            }),
                          n.createElement(
                            "div",
                            { className: (0, u.A)({ [E.Followers]: !0 }) },
                            n.createElement("span", null, (0, p.Dq)(L)),
                            n.createElement("br", null),
                            (0, d.we)("#CreatorHome_JustFollowers"),
                          ),
                        ),
                      ),
                    ),
                  ),
                  Boolean(A) &&
                    n.createElement(
                      "a",
                      {
                        href:
                          i.TS.COMMUNITY_BASE_URL +
                          "gid/" +
                          w.GetClanSteamID().ConvertTo64BitString() +
                          "/members/",
                        target: "_blank",
                        className: E.MembersListLink,
                      },
                      (0, d.we)("#ClanMembershipList"),
                    ),
                ),
              ),
            ),
          ),
        );
      }
      function A(e) {
        const { clanInfo: t, bAddLinkToMemberList: a } = e;
        if (
          ((0, m.wT)(
            t && t.clanAccountID,
            "CuratorHoverContent expect clanInfo, not supplied",
          ),
          !t)
        )
          return null;
        const r = {
          clan_account_id: t.clanAccountID,
          name: t.group_name,
          type: "developer",
        };
        return n.createElement(
          "div",
          { className: E.CuratorHoverCtn },
          n.createElement(v, {
            creatorID: r,
            bSmallFormat: !0,
            bShowTagline: !0,
            bHideCreatorType: !0,
            bAddLinkToMemberList: a,
          }),
        );
      }
    },
    8905: (e, t, a) => {
      "use strict";
      a.d(t, { p: () => i });
      var n = a(90626),
        r = a(17720),
        s = a(27144),
        l = a(15736),
        o = a(78327);
      function i(e) {
        const { accountID: t, bHideWhenNotAvailable: a, bHideName: i } = e,
          [c] = (0, s.KT)(t),
          m = (0, s.KM)(t),
          u = n.useMemo(() => r.b.InitFromAccountID(t), [t]),
          d = `${o.TS.COMMUNITY_BASE_URL}profiles/${u.ConvertTo64BitString()}`;
        return n.createElement(
          n.Fragment,
          null,
          Boolean(!c)
            ? n.createElement(
                n.Fragment,
                null,
                Boolean(!a) && n.createElement("span", null, t),
              )
            : n.createElement(
                "a",
                { href: d },
                n.createElement("img", {
                  className: l.SmallAvatar,
                  src: c.avatar_url,
                  "data-miniprofile": "s" + u.ConvertTo64BitString(),
                }),
                Boolean(!i) &&
                  n.createElement(
                    "span",
                    null,
                    m ? `${m} (${c.persona_name})` : c.persona_name,
                  ),
              ),
        );
      }
    },
    32630: (e, t, a) => {
      "use strict";
      a.d(t, { Ay: () => l });
      var n = a(90626),
        r = a(55963),
        s = (a(78327), a(60014));
      a(49411);
      function l(e) {
        const { children: t, ...a } = e,
          l = (0, s.n9)(),
          o = n.useMemo(
            () => ({ ...r.Ay.GetDefaultParams(), ...l, ...a }),
            [
              l,
              a.domain,
              a.controller,
              a.method,
              a.submethod,
              a.feature,
              a.depth,
            ],
          );
        return n.createElement(s.nn, { ...o }, t);
      }
    },
  },
]);
