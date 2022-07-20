/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(window.webpackJsonp = window.webpackJsonp || []).push([
  [14],
  {
    "/4gK": function (e, t, r) {
      "use strict";
      r.d(t, "a", function () {
        return a;
      }),
        r.d(t, "d", function () {
          return o;
        }),
        r.d(t, "b", function () {
          return l;
        }),
        r.d(t, "c", function () {
          return c;
        });
      var a,
        i = r("Ys0h"),
        n = (r("msu0"), r("Zdsb"), r("wijF")),
        s = r("GXif");
      !(function (e) {
        (e[(e.k_eLibrary = 1)] = "k_eLibrary"),
          (e[(e.k_eWishlist = 2)] = "k_eWishlist"),
          (e[(e.k_eFollowing = 4)] = "k_eFollowing"),
          (e[(e.k_eRecommended = 8)] = "k_eRecommended"),
          (e[(e.k_eSteam = 16)] = "k_eSteam"),
          (e[(e.k_eRequired = 32)] = "k_eRequired"),
          (e[(e.k_eFeatured = 64)] = "k_eFeatured"),
          (e[(e.k_eCurator = 128)] = "k_eCurator"),
          (e[(e.k_eReposted = 256)] = "k_eReposted");
      })(a || (a = {}));
      class o {
        GetSource() {
          return this.appInfo ? this.appInfo.source : this.clanInfo.source;
        }
        static GetEntityNameForID(e, t) {
          var r;
          if (e)
            return null === (r = i.a.Get().GetApp(e)) || void 0 === r
              ? void 0
              : r.GetName();
          if (t) {
            const e = n.a.GetClanInfoByClanAccountID(t);
            if (e) return e.group_name;
          }
          return Object(s.g)("#EventCalendar_MuteApp_Unknown");
        }
        static BHasEntityNameForID(e, t) {
          var r, a;
          return e
            ? Boolean(
                null === (r = i.a.Get().GetApp(e)) || void 0 === r
                  ? void 0
                  : r.GetName()
              )
            : !!t &&
                !!(null === (a = n.a.GetClanInfoByClanAccountID(t)) ||
                void 0 === a
                  ? void 0
                  : a.group_name);
        }
        GetEntityName() {
          return o.GetEntityNameForID(this.appid, this.clanid);
        }
        GetGameCapsule() {
          var e, t;
          if (this.appInfo)
            return null ===
              (t =
                null === (e = i.a.Get().GetApp(this.appInfo.appid)) ||
                void 0 === e
                  ? void 0
                  : e.GetAssets()) || void 0 === t
              ? void 0
              : t.GetMainCapsuleURL();
          if (this.clanInfo) {
            let e = n.a.GetClanInfoByClanAccountID(this.clanInfo.clanid);
            if (e) return e.avatar_full_url;
          }
          return Object(s.g)("#EventCalendar_MuteApp_Unknown");
        }
        GetGameIcon() {
          var e, t;
          if (this.appInfo)
            return null ===
              (t =
                null === (e = i.a.Get().GetApp(this.appInfo.appid)) ||
                void 0 === e
                  ? void 0
                  : e.GetAssets()) || void 0 === t
              ? void 0
              : t.GetCommunityIconURL();
          if (this.clanInfo) {
            let e = n.a.GetClanInfoByClanAccountID(this.clanInfo.clanid);
            if (e) return e.avatar_full_url;
          }
          return Object(s.g)("#EventCalendar_MuteApp_Unknown");
        }
      }
      class l {}
      class c {}
    },
    "/cMS": function (e, t, r) {
      "use strict";
      r.d(t, "a", function () {
        return p;
      }),
        r.d(t, "c", function () {
          return _;
        }),
        r.d(t, "b", function () {
          return h;
        });
      var a = r("mrSG"),
        i = r("q1tI"),
        n = r.n(i),
        s = (r("Zdsb"), r("9XWO")),
        o = (r("XThB"), r("WOjH")),
        l = r("2VXD"),
        c = r("f5iL"),
        d = r("TqgT"),
        m = r("hCpY"),
        u = r("/Q1a");
      class p {
        constructor() {
          (this.m_mapTagID = new Map()),
            (this.m_setTagIDFailedToLoad = new Set()),
            (this.m_mapPromies = new Map()),
            (this.m_SteamInterface = null),
            (this.m_setPendingTagRequest = new Set()),
            (this.m_PendingTimer = void 0),
            (this.k_nMaxBatchRequestSize = 100),
            (this.k_nMaxQueueSize = 100),
            (this.k_nQueueWaitUntilRequestMS = 40);
        }
        BHasTagID(e) {
          return this.m_mapTagID.has(e);
        }
        GetTagID(e) {
          return this.m_mapTagID.get(e);
        }
        GetAllTagIDsWeHaveLoaded(e) {
          return e ? e.map((e) => this.m_mapTagID.get(e)).filter(Boolean) : [];
        }
        FilterToUnprocessedTags(e) {
          return e
            ? e.filter(
                (e) =>
                  !this.m_mapTagID.has(e) && !this.m_setTagIDFailedToLoad.has(e)
              )
            : [];
        }
        QueueTagLoad(e) {
          return Object(a.a)(this, void 0, void 0, function* () {
            if (this.BHasTagID(e)) return Promise.resolve(1);
            if (this.m_setTagIDFailedToLoad.has(e)) return Promise.resolve(42);
            this.m_PendingInfoPromise ||
              ((this.m_PendingInfoPromise = new Promise(
                (e) => (this.m_PendingInfoResolve = e)
              )),
              (this.m_PendingTimer = window.setTimeout(
                () => this.FlushPendingInfo(),
                this.k_nQueueWaitUntilRequestMS
              ))),
              this.m_setPendingTagRequest.add(e);
            const t = this.m_PendingInfoPromise;
            return (
              this.m_setPendingTagRequest.size >= this.k_nMaxQueueSize &&
                (this.m_PendingTimer &&
                  window.clearTimeout(this.m_PendingTimer),
                this.FlushPendingInfo()),
              t
            );
          });
        }
        QueueMultipleTagLoads(e) {
          return Object(a.a)(this, void 0, void 0, function* () {
            e = this.FilterToUnprocessedTags(e);
            const t = (yield Promise.all(
              e.map((e) => this.QueueTagLoad(e))
            )).filter((e) => 1 != e);
            return t.length > 0 ? t[0] : 1;
          });
        }
        FlushPendingInfo() {
          return Object(a.a)(this, void 0, void 0, function* () {
            const e = this.m_PendingInfoResolve,
              t = Array.from(this.m_setPendingTagRequest);
            (this.m_PendingInfoPromise = void 0),
              (this.m_PendingInfoResolve = void 0),
              this.m_setPendingTagRequest.clear(),
              (this.m_PendingTimer = void 0),
              this.InternalLoadLocalizedTagNames(t).then((t) => e(t));
          });
        }
        InternalLoadLocalizedTagNames(e) {
          return Object(a.a)(this, void 0, void 0, function* () {
            if (
              (Object(c.a)(
                Boolean(this.m_SteamInterface),
                "CStoreTagCache being used without being initialized."
              ),
              !this.m_SteamInterface)
            )
              return 11;
            e = e.filter((e) => !this.BHasTagID(e));
            const t = new Set();
            for (
              (e = e.filter((e) => {
                const r = this.m_mapPromies.get(e);
                return !r || (t.add(r), !1);
              })).sort();
              e.length > 0;

            ) {
              const t = Math.min(this.k_nMaxBatchRequestSize, e.length),
                r = e.slice(0, t);
              e = e.slice(t);
              const a = s.b.Init(o.b);
              a.Body().set_language(u.d.LANGUAGE), a.Body().set_tagids(r);
              try {
                const e = yield o.d.GetLocalizedNameForTags(
                  this.m_SteamInterface.GetAnonymousServiceTransport(),
                  a
                );
                if (1 != e.GetEResult())
                  return (
                    r.forEach(this.m_setTagIDFailedToLoad.add),
                    console.error(
                      "CStoreTagCache::InternalLoadLocalizedTagNames failed with eResults: " +
                        e.GetEResult() +
                        " msg " +
                        e.GetEMsg(),
                      r
                    ),
                    e.GetEResult()
                  );
                e.Body()
                  .tags()
                  .forEach((e) => this.m_mapTagID.set(e.tagid(), e.toObject()));
              } catch (e) {
                r.forEach(this.m_setTagIDFailedToLoad.add);
                const t = Object(d.a)(e);
                return (
                  console.error(
                    "CStoreTagCache::InternalLoadLocalizedTagNames failed: " +
                      t.strErrorMsg,
                    t
                  ),
                  79
                );
              }
            }
            const r = (yield Promise.all(Array.from(t))).filter((e) => 1 != e);
            return r.length > 0 ? r[0] : 1;
          });
        }
        static Get() {
          return (
            p.s_Singleton ||
              ((p.s_Singleton = new p()),
              p.s_Singleton.Init(),
              "dev" == u.d.WEB_UNIVERSE &&
                (window.g_StoreTagCache = p.s_Singleton)),
            p.s_Singleton
          );
        }
        Init() {
          let e = Object(u.i)("localizedstoretag", "application_config");
          this.ValidateStoreDefault(e) &&
            e.forEach((e) => this.m_mapTagID.set(e.tagid, e));
        }
        ValidateStoreDefault(e) {
          const t = e;
          return (
            !!(
              t &&
              Array.isArray(t) &&
              t.length > 0 &&
              "object" == typeof t[0]
            ) &&
            "string" == typeof t[0].name &&
            "number" == typeof t[0].tagid
          );
        }
        static Initialize(e) {
          p.Get().m_SteamInterface = e;
        }
        static BIsInitialized() {
          return Boolean(p.Get().m_SteamInterface);
        }
      }
      function _(e) {
        var t;
        const [r, a] = n.a.useState(p.Get().GetTagID(e)),
          i = Object(l.a)("useSingleLocalizedTagName");
        return (
          n.a.useEffect(() => {
            (r && r.tagid == e) ||
              p
                .Get()
                .QueueTagLoad(e)
                .then(() => {
                  var t;
                  const r = p.Get().GetTagID(e);
                  r &&
                    ((null === (t = null == i ? void 0 : i.token) ||
                    void 0 === t
                      ? void 0
                      : t.reason) ||
                      a(r));
                });
          }, [
            e,
            r,
            null === (t = null == i ? void 0 : i.token) || void 0 === t
              ? void 0
              : t.reason,
          ]),
          r
        );
      }
      function h(e) {
        var t;
        const [r, a] = n.a.useState(p.Get().GetAllTagIDsWeHaveLoaded(e)),
          i = Object(l.a)("useLocalizeTagNames");
        return (
          n.a.useEffect(() => {
            p.Get()
              .QueueMultipleTagLoads(e)
              .then(() => {
                var t;
                (null === (t = null == i ? void 0 : i.token) || void 0 === t
                  ? void 0
                  : t.reason) || a(p.Get().GetAllTagIDsWeHaveLoaded(e));
              });
          }, [
            null === (t = null == i ? void 0 : i.token) || void 0 === t
              ? void 0
              : t.reason,
            e,
          ]),
          r
        );
      }
      Object(a.b)([m.b], p.prototype, "GetTagID", null),
        Object(a.b)([m.b], p.prototype, "QueueMultipleTagLoads", null);
    },
    "0JCO": function (e, t, r) {
      "use strict";
      r.d(t, "b", function () {
        return l;
      }),
        r.d(t, "a", function () {
          return c;
        }),
        r.d(t, "c", function () {
          return d;
        });
      var a = r("mrSG"),
        i = r("q1tI"),
        n = r("lfGQ"),
        s = r("/Q1a");
      const o = i.createContext({});
      function l(e) {
        const { children: t } = e,
          r = Object(a.c)(e, ["children"]),
          s = d();
        return i.createElement(
          o.Provider,
          {
            value: Object.assign(
              Object.assign(Object.assign({}, n.e.GetDefaultParams()), s),
              r
            ),
          },
          t
        );
      }
      function c(e) {
        const { children: t } = e,
          r = e.snr || s.d.SNR,
          a = n.e.ParseSNR(r);
        return i.createElement(
          o.Provider,
          {
            value: Object.assign(Object.assign({}, n.e.GetDefaultParams()), a),
          },
          t
        );
      }
      function d() {
        return i.useContext(o);
      }
    },
    "1QaA": function (e, t, r) {
      "use strict";
      r.d(t, "c", function () {
        return y;
      }),
        r.d(t, "b", function () {
          return w;
        }),
        r.d(t, "a", function () {
          return C;
        });
      var a = r("vDqi"),
        i = r.n(a),
        n = r("q1tI"),
        s = r.n(n),
        o = r("pQ8y"),
        l = r("Zdsb"),
        c = (r("MHzk"), r("yfxr"), r("44wC")),
        d = (r("X/lQ"), r("hAgw")),
        m = r("RrtU"),
        u = r("IYm0"),
        p = r("2fVn"),
        _ = r("KQHr"),
        h = r("4EJs"),
        b = r("zy5s"),
        g = r.n(b),
        S = r("hNBN"),
        f = r("GbHM"),
        v = r("GXif");
      function y(e) {
        const {
            info: t,
            bShowDemoButton: r,
            bShowPurchaseOptionsButton: a,
            fnOnPurchaseOptionsClick: o,
            bHidePrice: h,
            bHideWishlistButton: b,
            bShowDeckCompatibilityDialog: f,
          } = e,
          v = Object(n.useRef)({ include_release: !0 }),
          [y] = Object(m.a)(t.id, Object(d.d)(t.type), v.current),
          w = Object(l.c)(t.type),
          [I, E] = s.a.useState(r && w && c.a.Get().BHasDemoAppID(t.id));
        return (
          s.a.useEffect(() => {
            const e = i.a.CancelToken.source();
            return (
              r &&
                w &&
                c.a
                  .Get()
                  .LoadAppIDsBatch([t.id])
                  .then(() => {
                    e.token.reason || E(c.a.Get().BHasDemoAppID(t.id));
                  }),
              () =>
                null == e
                  ? void 0
                  : e.cancel("StoreSalePriceActionWidget: unmounting")
            );
          }, [r, w, t.id]),
          y
            ? s.a.createElement(
                "div",
                { className: g.a.StoreActionWidgetContainer },
                s.a.createElement(
                  "div",
                  { className: g.a.StoreSalePriceActionWidgetContainer },
                  Boolean(!b && Object(l.c)(t.type)) &&
                    s.a.createElement(S.a, {
                      appid: t.id,
                      bIsFree: y.BIsFree(),
                      bIsComingSoon: y.BIsComingSoon(),
                      className: "WishlistBtn",
                    }),
                  Boolean(I) &&
                    s.a.createElement(_.a, { info: t, className: g.a.Action }),
                  Boolean(!h) &&
                    (Boolean(a)
                      ? s.a.createElement(B, { fnOnPurchaseOptionsClick: o })
                      : s.a.createElement(p.a, {
                          info: t,
                          className: "CartBtn",
                        })),
                  Boolean(!h) && s.a.createElement(C, { info: t }),
                  Boolean(f) && s.a.createElement(u.b, { nAppID: t.id })
                )
              )
            : null
        );
      }
      const B = (e) =>
        s.a.createElement(
          "div",
          { className: g.a.Action, onClick: e.fnOnPurchaseOptionsClick },
          s.a.createElement(
            "span",
            null,
            Object(v.g)("#EventDisplay_CallToAction_ShowPurchaseOptions_Button")
          )
        );
      function w(e) {
        const {
            storeItem: t,
            bPurchaseOptionsExpanded: r,
            fnCollapseOptions: a,
          } = e,
          i = null == t ? void 0 : t.GetAllPurchaseOptions();
        return s.a.createElement(
          o.a,
          {
            in: r,
            mountOnEnter: !0,
            unmountOnExit: !0,
            timeout: 2e3,
            classNames: {
              enterActive: g.a.Expanding,
              enterDone: g.a.Expanded,
              exit: g.a.Expanded,
              exitActive: g.a.Collapsing,
            },
          },
          s.a.createElement(
            "div",
            { className: g.a.BundleContentsCtnTransition },
            s.a.createElement(
              "div",
              { className: g.a.BundleContentsCtn },
              null == i
                ? void 0
                : i.map((e) =>
                    s.a.createElement(
                      "div",
                      {
                        key:
                          "purchaseitem_" +
                          (null == t ? void 0 : t.GetID()) +
                          "_" +
                          e.packageid,
                        className: g.a.BundleContentItem,
                      },
                      s.a.createElement(h.e, {
                        id: e.packageid,
                        type: "sub",
                        bForceSmallCapsuleArt: !0,
                      })
                    )
                  )
            ),
            s.a.createElement(
              "div",
              { onClick: a, className: g.a.BundleShowButton },
              s.a.createElement(
                "button",
                { className: g.a.ShowContentsButton },
                Object(v.g)("#Button_Close")
              )
            )
          )
        );
      }
      function C(e) {
        var t, r;
        const { info: a, bSingleLineMode: i } = e,
          o = Object(n.useRef)({ include_release: !0 }),
          [l] = Object(m.a)(
            null == a ? void 0 : a.id,
            Object(d.d)(null == a ? void 0 : a.type),
            o.current
          );
        if (!l) return null;
        const c = Object(f.a)(
            g.a.StoreSalePriceWidgetContainer,
            i && g.a.SingleLineMode
          ),
          u =
            2 == l.GetStoreItemType() &&
            (null === (t = l.GetBestPurchaseOption()) || void 0 === t
              ? void 0
              : t.bundle_discount_pct);
        if (e.bShowInLibrary)
          return s.a.createElement(
            "div",
            { className: c },
            s.a.createElement(
              "div",
              { className: g.a.StoreSalePriceBox },
              Object(v.g)("#EventDisplay_CallToAction_InLibrary")
            )
          );
        if (
          l.BIsComingSoon() &&
          !(null === (r = l.GetBestPurchaseOption()) || void 0 === r
            ? void 0
            : r.packageid)
        )
          return s.a.createElement(
            "div",
            { className: c },
            s.a.createElement(
              "div",
              { className: g.a.StoreSalePriceBox },
              Object(v.g)("#EventDisplay_CallToAction_ComingSoon")
            )
          );
        if (l.BIsFree())
          return 0 == l.GetStoreItemType() &&
            4 != l.GetAppType() &&
            11 != l.GetAppType() &&
            l.GetParentAppID()
            ? s.a.createElement(
                "div",
                { className: c },
                s.a.createElement(
                  "div",
                  { className: g.a.StoreSalePriceBox },
                  Object(v.g)("#EventDisplay_CallToAction_FreeDemo")
                )
              )
            : s.a.createElement(
                "div",
                { className: c },
                s.a.createElement(
                  "div",
                  { className: g.a.StoreSalePriceBox },
                  Object(v.g)("#EventDisplay_CallToAction_FreeToPlay")
                )
              );
        if (!l.GetBestPurchasePriceFormatted() || !l.GetBestPurchaseOption())
          return null;
        const p = l.GetBestPurchaseOption().discount_pct || u,
          _ = p && u && p > u && u,
          h = l.GetBestPurchaseOption().packageid;
        return s.a.createElement(
          "div",
          {
            className: Object(f.a)(
              c,
              p && g.a.Discounted,
              "StoreSalePriceWidgetContainer"
            ),
          },
          Boolean(l.BIsComingSoon() && !!h) &&
            s.a.createElement(
              "div",
              {
                className: Object(f.a)(
                  g.a.StoreSalePriceBox,
                  g.a.StoreSalePrepurchaseLabel
                ),
              },
              Object(v.g)("#EventDisplay_CallToAction_Prepurchase_Short")
            ),
          Boolean(_) &&
            s.a.createElement(
              "span",
              { className: Object(f.a)(g.a.BaseDiscount) },
              `-${_}%`
            ),
          Boolean(p) &&
            s.a.createElement(
              "div",
              { className: g.a.StoreSaleDiscountBox },
              `-${p}%`
            ),
          p && l.GetBestPurchaseOriginalPriceFormatted()
            ? s.a.createElement(
                "div",
                { className: Object(f.a)(g.a.StoreSaleDiscountedPriceCtn) },
                s.a.createElement(
                  "div",
                  {
                    className: i
                      ? g.a.SingleLineOriginalPrice
                      : g.a.StoreOriginalPrice,
                  },
                  l.GetBestPurchaseOriginalPriceFormatted()
                ),
                s.a.createElement(
                  "div",
                  {
                    className: Object(f.a)(
                      g.a.StoreSalePriceBox,
                      i && g.a.SingleLineMode
                    ),
                  },
                  l.GetBestPurchasePriceFormatted()
                )
              )
            : s.a.createElement(
                "div",
                { className: g.a.StoreSalePriceBox },
                l.GetBestPurchasePriceFormatted()
              )
        );
      }
    },
    "1mk1": function (e, t, r) {
      "use strict";
      r.d(t, "b", function () {
        return c;
      }),
        r.d(t, "c", function () {
          return d;
        }),
        r.d(t, "a", function () {
          return m;
        });
      r("yfxr");
      var a = r("q1tI"),
        i = r.n(a),
        n = r("Zdsb"),
        s = r("lfGQ"),
        o = r("i5oW"),
        l = r("0JCO");
      function c(e) {
        return "bundle" == e
          ? "bundle"
          : "sub" == e
          ? "sub"
          : Object(n.c)(e)
          ? "app"
          : null;
      }
      function d(e) {
        return 2 == e ? "bundle" : 1 == e ? "sub" : 0 == e ? "app" : null;
      }
      const m = (e) => {
        const t = Object(l.c)(),
          r = Object(s.c)(t);
        return e.appid && r
          ? i.a.createElement(
              o.a,
              { appID: e.appid, snr: r },
              i.a.createElement(
                "div",
                { className: "ImpressionTrackedElement" },
                e.children
              )
            )
          : i.a.createElement(i.a.Fragment, null, e.children);
      };
    },
    "2KLf": function (e, t, r) {
      "use strict";
      r.d(t, "a", function () {
        return c;
      });
      var a = r("mrSG"),
        i = r("FmLm"),
        n = r("/Q1a"),
        s = r("EuLa"),
        o = r("6MVd");
      class l {
        constructor() {
          (this.m_mapAppToSNRs = new Map()), (this.m_rgImpressionsToAdd = []);
        }
        AddImpression(e, t) {
          let r = !1;
          i.a.Get().BAppImpressionsAllowed()
            ? (this.m_mapAppToSNRs.has(e)
                ? -1 == this.m_mapAppToSNRs.get(e).indexOf(t) &&
                  (this.m_mapAppToSNRs.get(e).push(t), (r = !0))
                : (this.m_mapAppToSNRs.set(e, [t]), (r = !0)),
              r &&
                (this.m_rgImpressionsToAdd.push(`${e}@${t}`),
                this.UpdateCookie()))
            : "dev" === n.d.WEB_UNIVERSE &&
              console.log("Cookie Prefs: Not allowing App Impressions");
        }
        UpdateCookie() {
          const e = [
            Object(s.b)("app_impressions") || "",
            ...this.m_rgImpressionsToAdd,
          ].join("|");
          this.m_rgImpressionsToAdd = [];
          encodeURIComponent(e).length <= 3200 &&
            Object(s.c)("app_impressions", e);
        }
      }
      Object(a.b)([Object(o.a)(1e3)], l.prototype, "UpdateCookie", null);
      const c = new l();
      window.g_ImpressionTracker = c;
    },
    "2fVn": function (e, t, r) {
      "use strict";
      r.d(t, "a", function () {
        return b;
      });
      var a = r("q1tI"),
        i = r.n(a),
        n = (r("Zdsb"), r("lfGQ")),
        s = (r("yfxr"), r("FmLm")),
        o = r("hAgw"),
        l = r("RrtU"),
        c = r("tQrp"),
        d = r("GbHM"),
        m = r("GXif"),
        u = r("/Q1a"),
        p = r("0JCO"),
        _ = r("zy5s"),
        h = r.n(_);
      function b(e) {
        var t;
        const { info: r, className: _ } = e,
          b = Object(p.c)(),
          g = Object(a.useRef)({ include_release: !0 }),
          [S] = Object(l.a)(r.id, Object(o.d)(r.type), g.current);
        if (
          (Object(a.useEffect)(() => {
            s.a.Get().HintLoad();
          }, []),
          !S)
        )
          return null;
        const f = () => {
          Object(c.c)(window, "steam://run/" + S.GetAppIDToRun());
        };
        if (8 == S.GetAppType()) return null;
        const v =
          S.BIsFree() ||
          "0" == S.GetBestPurchasePriceFormatted() ||
          S.GetBestPurchaseOption().discount_pct >= 100;
        if (1 == S.GetStoreItemType() && v && S.GetIncludedAppIDs().length > 1)
          return null;
        if (0 == S.GetStoreItemType()) {
          if (
            S.BIsComingSoon() &&
            !(null === (t = S.GetBestPurchaseOption()) || void 0 === t
              ? void 0
              : t.packageid)
          )
            return null;
          const e = s.a.Get().BOwnsApp(S.GetAppID());
          if (e && 10 === S.GetAppType()) return null;
          if (e || v) {
            const t =
              (e && Object(m.g)("#EventDisplay_CallToAction_PlayNow")) ||
              Object(m.g)("#EventDisplay_CallToAction_PlayNowForFree");
            return i.a.createElement(
              "div",
              { className: Object(d.a)(h.a.Action, _), onClick: f },
              i.a.createElement("span", null, t)
            );
          }
          if ("" == S.GetBestPurchasePriceFormatted()) {
            const e = Object(n.b)(S.GetStorePageURL(), b);
            return i.a.createElement(
              "a",
              { href: e, className: Object(d.a)(h.a.Action, _) },
              Object(m.g)("#EventDisplay_CallToAction_VisitStore")
            );
          }
        }
        return i.a.createElement(
          "div",
          {
            className: Object(d.a)(h.a.Action, _),
            onClick: (e) => {
              const t = `${u.d.STORE_BASE_URL}cart`,
                a = `${u.d.STORE_BASE_URL}cart/addtocart`,
                i = Object(n.c)(b);
              if (
                2 == S.GetStoreItemType() ||
                S.GetBestPurchaseOption().bundleid
              ) {
                const n =
                  2 == S.GetStoreItemType()
                    ? r.id
                    : S.GetBestPurchaseOption().bundleid;
                s.a.Get().AddToCart(e, null, a, t, i, n);
              } else
                s.a
                  .Get()
                  .AddToCart(e, S.GetBestPurchaseOption().packageid, a, t, i);
            },
          },
          i.a.createElement("span", null, Object(m.g)("#Store_AddToCart"))
        );
      }
    },
    "2t98": function (e, t, r) {
      "use strict";
      r.d(t, "a", function () {
        return a;
      }),
        r.d(t, "b", function () {
          return l;
        });
      var a,
        i = r("j4v3"),
        n = r("GXif"),
        s = r("/Q1a");
      !(function (e) {
        (e.Default = "default"),
          (e.Upcoming = "upcoming"),
          (e.Featured = "featured"),
          (e.Press = "press"),
          (e.Steam = "steam"),
          (e.Halloween = "halloween"),
          (e.Dev_All = "all"),
          (e.Dev_AssociatedPress = "associated_press"),
          (e.Dev_Sales = "associated_sales");
      })(a || (a = {}));
      const o = new Map();
      function l(e) {
        return (
          0 == o.size &&
            (function () {
              const e = Object(i.f)();
              o.set(a.Default, {
                id: a.Default,
                strUrl: `${e}/`,
                strName: Object(n.g)("#EventCalendar_NewsChannel_YourNews"),
                strSubtitle: Object(n.g)(
                  "#EventCalendar_NewsChannel_Personalized"
                ),
                strHeaderTitle: Object(n.g)(
                  "#EventCalendar_NewsChannel_YourNews_HeaderTitle"
                ),
              }),
                o.set(a.Upcoming, {
                  id: a.Upcoming,
                  strUrl: `${e}/?upcoming=1`,
                  strName: Object(n.g)("#EventCalendar_NewsChannel_Upcoming"),
                  strShortName: Object(n.g)(
                    "#EventCalendar_NewsChannel_UpcomingShort"
                  ),
                  strSubtitle: Object(n.g)(
                    "#EventCalendar_NewsChannel_Personalized"
                  ),
                }),
                o.set(a.Featured, {
                  id: a.Featured,
                  strUrl: `${e}/collection/featured/`,
                  strName: Object(n.g)("#EventCalendar_NewsChannel_Featured"),
                  strSubtitle: Object(n.g)(
                    "#EventCalendar_NewsChannel_TopSellers"
                  ),
                  strHeaderTitle: Object(n.g)(
                    "#EventCalendar_NewsChannel_Featured_HeaderTitle"
                  ),
                }),
                o.set(a.Press, {
                  id: a.Press,
                  strUrl: `${e}/collection/press/`,
                  strName: Object(n.g)("#EventCalendar_NewsChannel_Press"),
                  strHeaderTitle: Object(n.g)(
                    "#EventCalendar_Collection_News_Title"
                  ),
                  strHeaderSubtitle: Object(n.g)(
                    "#EventCalendar_Collection_News_Subtitle"
                  ),
                }),
                o.set(a.Steam, {
                  id: a.Steam,
                  strUrl: `${e}/collection/steam/`,
                  strName: Object(n.g)("#EventCalendar_NewsChannel_Steam"),
                  strSubtitle: Object(n.g)(
                    "#EventCalendar_NewsChannel_SteamSubtitle"
                  ),
                  strHeaderTitle: Object(n.g)(
                    "#EventCalendar_NewsChannel_Steam_HeaderTitle"
                  ),
                }),
                o.set(a.Halloween, {
                  id: a.Halloween,
                  strUrl: `${e}/collection/halloween/`,
                  strName: Object(n.g)("#EventCalendar_NewsChannel_Halloween"),
                  strSubtitle: Object(n.g)(
                    "#EventCalendar_NewsChannel_HalloweenSubtitle"
                  ),
                  strHeaderTitle: Object(n.g)(
                    "#EventCalendar_Collection_Halloween_Title"
                  ),
                  strHeaderSubtitle: Object(n.g)(
                    "#EventCalendar_Collection_Halloween_Subtitle"
                  ),
                }),
                s.l.is_support &&
                  (o.set(a.Dev_All, {
                    id: a.Dev_All,
                    strUrl: `${e}/collection/all/`,
                    strName: Object(n.g)("#EventCalendar_NewsChannel_All"),
                    bIsValveOnly: !0,
                  }),
                  o.set(a.Dev_Sales, {
                    id: a.Dev_Sales,
                    strUrl: `${e}/collection/sales/`,
                    strName: Object(n.g)("#EventCalendar_NewsChannel_AllSales"),
                    bIsValveOnly: !0,
                  }),
                  o.set(a.Dev_AssociatedPress, {
                    id: a.Dev_AssociatedPress,
                    strUrl: `${e}/collection/associated_press/`,
                    strName: Object(n.g)(
                      "#EventCalendar_NewsChannel_AssociatedPress"
                    ),
                    bIsValveOnly: !0,
                  }));
            })(),
          o.get(e)
        );
      }
    },
    "3XYX": function (e, t, r) {
      "use strict";
      r.d(t, "d", function () {
        return E;
      }),
        r.d(t, "b", function () {
          return O;
        }),
        r.d(t, "c", function () {
          return T;
        }),
        r.d(t, "a", function () {
          return F;
        });
      var a = r("mrSG"),
        i = r("vDqi"),
        n = r.n(i),
        s = r("2vnA"),
        o = r("JsFJ"),
        l = r("Tj6G"),
        c = r("hCpY");
      class d extends Error {}
      class m extends l.b {
        constructor(e) {
          super(), (this.m_appid = e || 0);
        }
        GetAppID() {
          return this.m_appid;
        }
        parseColor(e) {
          if ("string" != typeof e || !e.match(/^#[0-9a-fA-F]{6}$/))
            throw new d("expected color string");
          return [
            parseInt(e.substring(1, 3), 16),
            parseInt(e.substring(3, 5), 16),
            parseInt(e.substring(5, 7), 16),
          ];
        }
        parseString(e) {
          if ("string" == typeof e) return e;
          throw new d("expected string");
        }
        parseNumber(e) {
          if ("number" == typeof e) return e;
          throw new d("expected number");
        }
        parseDate(e) {
          if ("number" == typeof e) return new Date(e);
          throw new d("expected timestamp");
        }
        parseArray(e, t) {
          let r = [];
          if ("object" != typeof e || !Array.isArray(e))
            throw new d("expected array");
          let a = e.length;
          for (let i = 0; i < a; ++i)
            try {
              r.push(t(e[i]));
            } catch (e) {
              throw ((e.message += "\n...while parsing array element " + i), e);
            }
          return r;
        }
        parseDict(e, t) {
          let r = new Map();
          if ("object" != typeof e || Array.isArray(e))
            throw new d("expected object");
          for (let a in e)
            try {
              r.set(a, t(e[a]));
            } catch (e) {
              throw (
                ((e.message += "\n...while parsing dictionary element " + a), e)
              );
            }
          return r;
        }
        parseBracket(e) {
          let t = {
            name: this.parseString(e.name),
            start: this.parseDate(e.start),
            color: [255, 0, 255],
          };
          return (
            "params" in e &&
              (t.params = this.parseDict(
                e.params,
                this.parseString.bind(this)
              )),
            "end" in e && (t.end = this.parseDate(e.end)),
            "color" in e && (t.color = this.parseColor(e.color)),
            t
          );
        }
        parseMarker(e) {
          let t = { time: this.parseDate(e.time), color: [0, 255, 255] };
          return (
            "name" in e && (t.name = this.parseString(e.name)),
            "params" in e &&
              (t.params = this.parseDict(
                e.params,
                this.parseString.bind(this)
              )),
            "color" in e && (t.color = this.parseColor(e.color)),
            t
          );
        }
        parseSoundTrack(e) {
          let t = {};
          return (
            "song_title" in e &&
              (t.song_title = this.parseString(e.song_title)),
            "appid" in e && (t.appid = this.parseNumber(e.appid)),
            "song_index" in e &&
              (t.song_index = this.parseNumber(e.song_index)),
            t
          );
        }
        parseBroadcastGameData(e) {
          let t = { appid: 0, brackets: [], markers: [] };
          return (
            "appid" in e && (t.appid = this.parseNumber(e.appid)),
            "brackets" in e &&
              (t.brackets = this.parseArray(
                e.brackets,
                this.parseBracket.bind(this)
              )),
            "markers" in e &&
              (t.markers = this.parseArray(
                e.markers,
                this.parseMarker.bind(this)
              )),
            "soundtrack" in e &&
              (t.soundtrack = this.parseSoundTrack(e.soundtrack)),
            t
          );
        }
        convertTime(e, t) {
          return e - t / 1e3;
        }
        UpdateMarkers(e, t) {
          let r = [],
            a = [];
          for (const i of e)
            i.persistent
              ? (a.length > 0 &&
                  (a[a.length - 1].nTimeEnd = this.convertTime(i.Timestamp, t)),
                i.name.length > 0 &&
                  a.push({
                    strTemplateName: i.name,
                    nTimeStart: this.convertTime(i.Timestamp, t),
                    nTimeEnd: -1,
                    color: Object(c.c)(i.color_r, i.color_g, i.color_b),
                  }))
              : r.push({
                  strTemplateName: i.name,
                  nTime: this.convertTime(i.Timestamp, t),
                  color: Object(c.c)(i.color_r, i.color_g, i.color_b),
                });
          return { rgMarkers: r, rgSegments: a };
        }
        UpdateRegions(e) {
          let t = [];
          for (const r of e)
            t.push({
              strTemplateName: r.name,
              min: { x: r.min_x, y: r.min_y },
              max: { x: r.max_x, y: r.max_y },
              behavior: r.behavior,
            });
          return t;
        }
        UpdateSoundtrack(e, t) {}
      }
      var u = r("VnJP"),
        p = r("Ru/g"),
        _ = (r("bFkU"), r("7VqR")),
        h = r("/Q1a"),
        b = r("vYsE"),
        g = r("pJv3"),
        S = r("3u1o");
      r("msu0"), r("xYro");
      class f {
        constructor(e) {
          (this.m_elVideo = null),
            (this.m_peerConnection = null),
            (this.m_schCandidateTimer = new S.b()),
            (this.m_listeners = new S.c()),
            (this.m_bFirstPlay = !0),
            (this.m_bStatsViewVisible = !1),
            (this.m_schCaptureDisplayStatsTrigger = new S.b()),
            (this.m_stats = new g.a()),
            (this.m_elVideo = e);
        }
        PlayMPD(e) {
          return Object(a.a)(this, void 0, void 0, function* () {});
        }
        PlayWebRTC(e, t, r, i, s) {
          return Object(a.a)(this, void 0, void 0, function* () {
            (this.m_strBroadcastSteamID = e),
              (this.m_ulWebRTCSessionID = r),
              (this.m_nHostCandidateGeneration = 0),
              this.m_listeners.AddEventListener(
                this.m_elVideo,
                "pause",
                this.OnVideoPause
              ),
              this.m_listeners.AddEventListener(
                this.m_elVideo,
                "resize",
                this.OnVideoResize
              );
            let o = {
              iceServers: [
                { urls: ["stun:" + i] },
                { urls: ["turn:" + i], username: t, credential: r },
              ],
              iceTransportPolicy: "relay",
            };
            (this.m_peerConnection = new RTCPeerConnection(o)),
              (this.m_peerConnection.oniceconnectionstatechange = ((e) => {
                this.m_peerConnection &&
                  (console.log(
                    "BroadcastWebRTC: ICE connection state changed to " +
                      this.m_peerConnection.iceConnectionState
                  ),
                  "failed" === this.m_peerConnection.iceConnectionState
                    ? this.OnWebRTCConnectionFailed()
                    : "disconnected" ===
                        this.m_peerConnection.iceConnectionState &&
                      this.OnWebRTCConnectionRetry());
              }).bind(this)),
              (this.m_peerConnection.onicecandidate = ((e) => {
                if (e.candidate) {
                  const t = new FormData();
                  t.append("broadcaststeamid", this.m_strBroadcastSteamID),
                    t.append("webrtc_session_id", this.m_ulWebRTCSessionID),
                    t.append("sdp_mid", e.candidate.sdpMid),
                    t.append(
                      "sdp_mline_index",
                      String(e.candidate.sdpMLineIndex)
                    ),
                    t.append("candidate", e.candidate.candidate),
                    n.a
                      .post(
                        `${h.d.CHAT_BASE_URL}broadcast/addbroadcastwebrtccandidate`,
                        t
                      )
                      .then((e) => {
                        const t = e.data;
                        (t.success && 1 == t.success) ||
                          console.log(
                            "Failed to add a WebRTC session ICE candidate: " +
                              String(t.success)
                          );
                      })
                      .catch((e) =>
                        console.log(
                          "Failed to add a WebRTC session ICE candidate" + e
                        )
                      );
                }
              }).bind(this)),
              (this.m_peerConnection.ontrack = ((e) => {
                "video" === e.track.kind &&
                  ((this.m_elVideo.src = null),
                  (this.m_elVideo.srcObject = e.streams[0]),
                  this.Play());
              }).bind(this)),
              this.m_peerConnection
                .setRemoteDescription({ type: "offer", sdp: s })
                .then(() =>
                  Object(a.a)(this, void 0, void 0, function* () {
                    yield this.m_peerConnection.setLocalDescription(
                      yield this.m_peerConnection.createAnswer()
                    );
                    const e = new FormData();
                    e.append("broadcaststeamid", this.m_strBroadcastSteamID),
                      e.append("webrtc_session_id", this.m_ulWebRTCSessionID),
                      e.append(
                        "answer",
                        this.m_peerConnection.localDescription.sdp
                      );
                    try {
                      yield n.a
                        .post(
                          `${h.d.CHAT_BASE_URL}broadcast/setbroadcastwebrtcanswer`,
                          e
                        )
                        .then((e) => {
                          const t = e.data;
                          if (!t.success || 1 != t.success)
                            throw new Error(String(t.success));
                        });
                    } catch (e) {
                      return (
                        console.log(
                          "Failed to set the WebRTC session answer: " + e
                        ),
                        void this.OnWebRTCConnectionRetry()
                      );
                    }
                    (this.m_nCandidateUpdateIntervalMS = 250),
                      this.m_schCandidateTimer.Schedule(
                        this.m_nCandidateUpdateIntervalMS,
                        () => this.GetHostCandidates()
                      );
                  })
                );
          });
        }
        GetHostCandidates() {
          return Object(a.a)(this, void 0, void 0, function* () {
            const e = new FormData();
            e.append("broadcaststeamid", this.m_strBroadcastSteamID),
              e.append("webrtc_session_id", this.m_ulWebRTCSessionID),
              e.append(
                "candidate_generation",
                String(this.m_nHostCandidateGeneration)
              );
            try {
              yield n.a
                .post(
                  `${h.d.CHAT_BASE_URL}broadcast/getbroadcastwebrtccandidates`,
                  e
                )
                .then((e) => {
                  const t = e.data,
                    r = t.data;
                  if (!t.success || 1 != t.success)
                    throw new Error(String(t.success));
                  r.candidate_generation > this.m_nHostCandidateGeneration
                    ? (r.candidates.forEach((e) => {
                        const t = new RTCIceCandidate({
                          sdpMid: e.sdp_mid,
                          sdpMLineIndex: e.sdp_mline_index,
                          candidate: e.candidate,
                        });
                        this.m_peerConnection
                          .addIceCandidate(t)
                          .catch((e) => console.error(e));
                      }),
                      (this.m_nHostCandidateGeneration =
                        r.candidate_generation))
                    : this.m_nHostCandidateGeneration > 0 &&
                      (this.m_nCandidateUpdateIntervalMS *= 2);
                });
            } catch (e) {
              return (
                console.log("Failed to get WebRTC session ICE candidates" + e),
                void this.OnWebRTCConnectionRetry()
              );
            }
            this.m_schCandidateTimer.Schedule(
              this.m_nCandidateUpdateIntervalMS,
              () => this.GetHostCandidates()
            );
          });
        }
        DispatchEvent(e, t = null) {
          let r = new CustomEvent(e, {
            cancelable: !0,
            bubbles: !0,
            detail: t,
          });
          this.m_elVideo.dispatchEvent(r);
        }
        OnWebRTCConnectionRetry() {
          this.DispatchEvent("valve-webrtcretry");
        }
        OnWebRTCConnectionFailed() {
          this.DispatchEvent("valve-webrtcfailed");
        }
        Close() {
          this.m_listeners.Unregister(),
            this.m_schCandidateTimer.Cancel(),
            this.m_schCaptureDisplayStatsTrigger.Cancel(),
            this.m_peerConnection &&
              (this.m_peerConnection.close(), (this.m_peerConnection = null)),
            this.m_elVideo.pause(),
            (this.m_elVideo.srcObject = null),
            this.m_stats &&
              (this.m_stats.GetFPSMonitor().Close(), (this.m_stats = null)),
            (this.m_bFirstPlay = !0);
        }
        IsBuffering() {
          return !1;
        }
        GetCurrentPlayTime() {
          return 0;
        }
        GetLiveContentStartTime() {
          return null;
        }
        GetAvailableVideoStartTime() {
          return 0;
        }
        GetBufferedLiveEdgeTime() {
          return 0;
        }
        IsPaused() {
          return this.m_elVideo.paused;
        }
        Play() {
          let e = this.m_bFirstPlay;
          this.m_bFirstPlay = !1;
          let t = this.m_elVideo.play();
          t
            ? t
                .then(() => {
                  this.m_stats
                    .GetFPSMonitor()
                    .StartTracking(() =>
                      this.m_stats.ExtractFrameInfo(this.m_elVideo)
                    );
                })
                .catch((t) => {
                  e && this.DispatchEvent("valve-userinputneeded");
                })
            : this.m_stats
                .GetFPSMonitor()
                .StartTracking(() =>
                  this.m_stats.ExtractFrameInfo(this.m_elVideo)
                );
        }
        Pause() {
          this.m_elVideo.pause();
        }
        CanSeek() {
          return !1;
        }
        SeekAndPlay(e) {
          return this.Play(), 0;
        }
        Seek(e) {
          return 0;
        }
        JumpTime(e) {
          return 0;
        }
        IsMuted() {
          return this.m_elVideo.muted;
        }
        SetMuted(e) {
          this.m_elVideo.muted = e;
        }
        SetVolume(e) {
          (e = _.a(e, 0, 1)), (this.m_elVideo.volume = e);
        }
        GetVolume() {
          return this.m_elVideo.volume;
        }
        GetDASHPlayerStats() {
          return this.m_stats;
        }
        SetStatsViewIsVisible(e) {
          e && !this.m_bStatsViewVisible
            ? (this.CaptureStatsForDisplay(),
              this.m_schCaptureDisplayStatsTrigger.Schedule(
                250,
                this.CaptureStatsForDisplay
              ))
            : !e &&
              this.m_bStatsViewVisible &&
              this.m_schCaptureDisplayStatsTrigger.Cancel(),
            (this.m_bStatsViewVisible = e);
        }
        CaptureStatsForDisplay() {
          this.m_stats.SetHTMLVideoPlayerDisplay(
            this.m_elVideo.videoWidth,
            this.m_elVideo.videoHeight,
            this.m_elVideo.clientWidth,
            this.m_elVideo.clientHeight
          ),
            this.m_schCaptureDisplayStatsTrigger.Schedule(
              250,
              this.CaptureStatsForDisplay
            );
        }
        OnVideoPause(e) {
          this.m_stats.GetFPSMonitor().Close();
        }
        OnVideoResize(e) {
          this.m_stats.GetFPSMonitor().SetWindowResized();
        }
        GetVideoRepresentations() {
          let e = [];
          return e.push({ id: "auto", displayName: "Auto", selected: !0 }), e;
        }
        SetVideoRepresentation(e) {}
        IsLiveContent() {
          return !0;
        }
        GetThumbnailForTimestamp(e) {
          return "";
        }
      }
      Object(a.b)([b.a], f.prototype, "PlayWebRTC", null),
        Object(a.b)([s.k.bound], f.prototype, "CaptureStatsForDisplay", null),
        Object(a.b)([b.a], f.prototype, "OnVideoPause", null),
        Object(a.b)([b.a], f.prototype, "OnVideoResize", null);
      r("Zdsb"), r("ZBhF");
      var v = r("ApMK"),
        y = r("f5iL"),
        B = r("GXif"),
        w = r("TqgT"),
        C = r("wjSE"),
        I = r("hbtq");
      const E = 7;
      var O, T;
      !(function (e) {
        (e[(e.None = 0)] = "None"),
          (e[(e.Loading = 1)] = "Loading"),
          (e[(e.Ready = 2)] = "Ready"),
          (e[(e.Error = 3)] = "Error");
      })(O || (O = {}));
      class G {
        constructor() {
          (this.m_steamIDBroadcast = ""),
            (this.m_ulBroadcastID = ""),
            (this.m_ulViewerToken = ""),
            (this.m_strCDNAuthUrlParameters = void 0),
            (this.m_bWebRTC = !1),
            (this.m_eWatchState = O.None),
            (this.m_strStateDescription = ""),
            (this.m_rgVideos = []),
            (this.m_schManifestTimeout = new S.b()),
            (this.m_schHeartbeatTimeout = new S.b());
        }
        SetState(e, t = "") {
          (this.m_eWatchState = e),
            (this.m_strStateDescription = t),
            e == O.Error && console.log(this.m_strStateDescription);
        }
      }
      Object(a.b)([s.C], G.prototype, "m_ulBroadcastID", void 0),
        Object(a.b)([s.C], G.prototype, "m_eWatchState", void 0),
        Object(a.b)([s.C], G.prototype, "m_strStateDescription", void 0),
        Object(a.b)([s.k], G.prototype, "SetState", null);
      class R {
        constructor(e) {
          (this.m_steamIDBroadcast = ""),
            (this.m_strTitle = ""),
            (this.m_strAppId = "" + E),
            (this.m_nAppID = E),
            (this.m_strAppTitle = ""),
            (this.m_strThumbnailUrl = ""),
            (this.m_nViewerCount = 0),
            (this.m_bIsOnline = !1),
            (this.m_schUpdateTimeout = new S.b()),
            (this.m_nRefCount = 0),
            (this.m_steamIDBroadcast = e);
        }
      }
      Object(a.b)([s.C], R.prototype, "m_strTitle", void 0),
        Object(a.b)([s.C], R.prototype, "m_strAppId", void 0),
        Object(a.b)([s.C], R.prototype, "m_nAppID", void 0),
        Object(a.b)([s.C], R.prototype, "m_strAppTitle", void 0),
        Object(a.b)([s.C], R.prototype, "m_strThumbnailUrl", void 0),
        Object(a.b)([s.C], R.prototype, "m_nViewerCount", void 0),
        Object(a.b)([s.C], R.prototype, "m_bIsOnline", void 0);
      class D {
        constructor() {
          (this.m_eWatchState = O.None),
            (this.m_strStateDescription = ""),
            (this.m_rgVideos = []);
        }
        SetState(e, t = "") {
          (this.m_eWatchState = e),
            (this.m_strStateDescription = t),
            e == O.Error && console.log(this.m_strStateDescription);
        }
      }
      Object(a.b)([s.C], D.prototype, "m_eWatchState", void 0),
        Object(a.b)([s.C], D.prototype, "m_strStateDescription", void 0),
        Object(a.b)([s.k], D.prototype, "SetState", null);
      class A extends D {}
      class j extends D {}
      class k {
        constructor() {
          (this.m_mapBroadcasts = new Map()),
            (this.m_mapClips = new Map()),
            (this.m_mapVODs = new Map()),
            (this.m_activeVideo = null),
            (this.m_broadcastSettings = {
              nVolume: 1,
              bMuted: !1,
              ulViewerToken: "0",
            }),
            (this.m_schSaveSettings = new S.b()),
            (this.m_broadcastInfos = {}),
            this.LoadBroadcastSettings();
        }
        GetBroadcastState(e) {
          if (e.IsBroadcastClip()) {
            let t = this.m_mapClips.get(e.GetBroadcastClipID());
            return t ? t.m_eWatchState : O.None;
          }
          if (e.IsBroadcastVOD()) {
            const t = this.m_mapVODs.get(e.GetBroadcastAppIDVOD());
            return t ? t.m_eWatchState : O.None;
          }
          {
            let t = this.m_mapBroadcasts.get(e.GetBroadcastSteamID());
            return t ? t.m_eWatchState : O.None;
          }
        }
        GetBroadcastStateDescription(e) {
          if (e.IsBroadcastClip()) {
            let t = this.m_mapClips.get(e.GetBroadcastClipID());
            return t ? t.m_strStateDescription : "";
          }
          if (e.IsBroadcastVOD()) {
            const t = this.m_mapVODs.get(e.GetBroadcastAppIDVOD());
            return t ? t.m_strStateDescription : "";
          }
          {
            let t = this.m_mapBroadcasts.get(e.GetBroadcastSteamID());
            return t ? t.m_strStateDescription : "";
          }
        }
        CreateBroadcastVideo(e, t, r, a) {
          let i = this.GetOrCreateBroadcast(t),
            { nVolume: n, bMuted: s } = this.m_broadcastSettings,
            o = new M(e, n, s, r);
          return (
            o.SetBroadcastSteamID(t),
            i.m_rgVideos.push(o),
            (i.m_bWebRTC = a),
            Object(u.a)() ||
              Object(u.b)() ||
              i.SetState(O.Error, Object(B.g)("#BroadcastWatch_MinBrowser")),
            o
          );
        }
        CreateClipVideo(e, t, r) {
          let a = this.GetOrCreateClip(t),
            { nVolume: i, bMuted: n } = this.m_broadcastSettings,
            s = new M(e, i, n, r);
          return (
            s.SetBroadcastClipID(t),
            a.m_rgVideos.push(s),
            Object(u.a)() ||
              Object(u.b)() ||
              a.SetState(O.Error, Object(B.g)("#BroadcastWatch_MinBrowser")),
            s
          );
        }
        CreateVODVideo(e, t, r) {
          let a = this.GetOrCreateVOD(t),
            { nVolume: i, bMuted: n } = this.m_broadcastSettings,
            s = new M(e, i, n, r);
          return (
            s.SetBroadcastAppIDVOD(t),
            a.m_rgVideos.push(s),
            Object(u.a)() ||
              Object(u.b)() ||
              a.SetState(O.Error, Object(B.g)("#BroadcastWatch_MinBrowser")),
            s
          );
        }
        StartVideo(e) {
          if (e.IsBroadcastClip()) {
            console.log(`Starting clip for ${e.GetBroadcastClipID()}`);
            let t = this.m_mapClips.get(e.GetBroadcastClipID());
            if (!t) return;
            this.SetActiveVideo(e),
              t.m_eWatchState == O.None
                ? this.GetClipManifest(t, e.GetWatchLocation())
                : t.m_eWatchState == O.Ready && e.StartClip(t);
          } else if (e.IsBroadcastVOD()) {
            console.log(`Starting VOD for ${e.GetBroadcastAppIDVOD()}`);
            let t = this.m_mapVODs.get(e.GetBroadcastAppIDVOD());
            if (!t) return;
            this.SetActiveVideo(e),
              t.m_eWatchState == O.None
                ? this.GetVODManifest(t, e.GetWatchLocation())
                : t.m_eWatchState == O.Ready && e.StartVOD(t);
          } else {
            let t = this.m_mapBroadcasts.get(e.GetBroadcastSteamID());
            if (!t) return;
            this.SetActiveVideo(e),
              t.m_eWatchState == O.None
                ? this.GetBroadcastManifest(t, e.GetWatchLocation())
                : t.m_eWatchState == O.Ready && e.StartBroadcast(t);
          }
        }
        SetActiveVideo(e) {
          this.m_mapBroadcasts.forEach((t) => {
            for (let r of t.m_rgVideos) r != e && r.StopPlaybackTillUserInput();
          }),
            this.m_mapClips.forEach((t) => {
              for (let r of t.m_rgVideos)
                r != e && r.StopPlaybackTillUserInput();
            }),
            (this.m_activeVideo = e);
        }
        PauseAllVideo() {
          this.m_mapBroadcasts.forEach((e) => {
            for (let t of e.m_rgVideos) t.StopPlaybackTillUserInput();
          });
        }
        StopVideo(e) {
          return Object(a.a)(this, void 0, void 0, function* () {
            let t = e.GetBroadcastSteamID(),
              r = this.m_mapBroadcasts.get(t);
            e.Stop(),
              r &&
                (r.m_ulBroadcastID &&
                  (function (e, t, r) {
                    Object(a.a)(this, void 0, void 0, function* () {
                      if (!t) return;
                      let a = new FormData();
                      a.append("steamid", e),
                        a.append("broadcastid", t),
                        a.append("viewertoken", r);
                      try {
                        yield n.a.post(
                          h.d.CHAT_BASE_URL + "broadcast/stopwatching",
                          a
                        );
                      } catch (e) {}
                    });
                  })(
                    t,
                    r.m_ulBroadcastID,
                    this.m_broadcastSettings.ulViewerToken
                  ),
                v.c(r.m_rgVideos, (t) => t == e),
                this.RemoveBroadcastIfUnused(r));
          });
        }
        StartInfo(e) {
          const t = this.GetOrCreateBroadcastInfo(e);
          return (
            t.m_nRefCount++, 1 === t.m_nRefCount && this.LoadBroadcastInfo(t), t
          );
        }
        StopInfo(e) {
          e.m_nRefCount--, 0 === e.m_nRefCount && e.m_schUpdateTimeout.Cancel();
        }
        GetOrCreateBroadcastInfo(e) {
          if (!e) {
            return new R("");
          }
          if (!this.m_broadcastInfos[e]) {
            const t = Object(s.C)(new R(e));
            this.m_broadcastInfos[e] = t;
          }
          return this.m_broadcastInfos[e];
        }
        GetOrCreateBroadcast(e) {
          let t = this.m_mapBroadcasts.get(e);
          return (
            t ||
            ((t = new G()),
            (t.m_steamIDBroadcast = e),
            (t.m_eWatchState = O.None),
            this.m_mapBroadcasts.set(e, t),
            t)
          );
        }
        GetBroadcast(e) {
          return this.m_mapBroadcasts.get(e);
        }
        GetBroadcastClip(e) {
          return this.m_mapClips.get(e);
        }
        GetBroadcastVOD(e) {
          return this.m_mapVODs.get(e);
        }
        RemoveBroadcastIfUnused(e) {
          e.m_rgVideos.length ||
            (e.m_schHeartbeatTimeout.Cancel(),
            e.m_schManifestTimeout.Cancel(),
            this.m_mapBroadcasts.delete(e.m_steamIDBroadcast));
        }
        GetOrCreateClip(e) {
          let t = this.m_mapClips.get(e);
          return (
            t ||
            ((t = new A()),
            (t.m_clipID = e),
            (t.m_eWatchState = O.None),
            this.m_mapClips.set(e, t),
            t)
          );
        }
        GetOrCreateVOD(e) {
          let t = this.m_mapVODs.get(e);
          return (
            t ||
            ((t = new j()),
            (t.m_nAppIDVOD = e),
            (t.m_eWatchState = O.None),
            this.m_mapVODs.set(e, t),
            t)
          );
        }
        LoadBroadcastInfo(e) {
          return Object(a.a)(this, void 0, void 0, function* () {
            let t = "0",
              r = this.m_mapBroadcasts.get(e.m_steamIDBroadcast);
            r && (t = r.m_ulBroadcastID);
            const a = {
              steamid: e.m_steamIDBroadcast,
              broadcastid: t,
              location:
                r &&
                r.m_rgVideos &&
                r.m_rgVideos[0] &&
                r.m_rgVideos[0].GetWatchLocation(),
            };
            try {
              const t = yield n.a.get(
                `${h.d.CHAT_BASE_URL}broadcast/getbroadcastinfo/`,
                { params: a }
              );
              if (!t || !t.data) return;
              const r = t.data;
              Object(s.G)(() => {
                (e.m_strTitle = r.title),
                  (e.m_strAppId = r.appid),
                  (e.m_nAppID = Number.parseInt(r.appid)),
                  (e.m_strAppTitle = r.app_title),
                  (e.m_strThumbnailUrl = r.thumbnail_url),
                  (e.m_nViewerCount = r.viewer_count),
                  (e.m_bIsOnline = r.is_online),
                  !e.m_strTitle &&
                    o.a &&
                    ((e.m_strTitle = o.a.name),
                    (e.m_strAppTitle = o.a.appName || o.a.name));
                const t = r.update_interval;
                t &&
                  "number" == typeof t &&
                  e.m_schUpdateTimeout.Schedule(1e3 * t, () =>
                    this.LoadBroadcastInfo(e)
                  );
              });
            } catch (e) {
              console.error(e);
            }
          });
        }
        GetBroadcastManifest(e, t, r = Date.now()) {
          return Object(a.a)(this, void 0, void 0, function* () {
            e.SetState(O.Loading, "");
            let a = {
                steamid: e.m_steamIDBroadcast,
                broadcastid: 0,
                viewertoken: this.m_broadcastSettings.ulViewerToken,
                watchlocation: t,
                sessionid: h.d.SESSIONID,
                is_webrtc: e.m_bWebRTC,
              },
              i = null;
            try {
              i = yield n.a.get(
                h.d.CHAT_BASE_URL + "broadcast/getbroadcastmpd/",
                { params: a, withCredentials: !0 }
              );
            } catch (e) {
              let t = Object(w.a)(e);
              console.error(
                "Failed to get broadcast manifest!" + t.strErrorMsg,
                t
              );
            }
            if (!i || 200 != i.status)
              return void e.SetState(
                O.Error,
                Object(B.g)("#BroadcastWatch_RequestFailed")
              );
            let s = i.data;
            s.viewertoken && this.SetViewerToken(s.viewertoken);
            let o = s.success;
            if ("ready" == o)
              e.SetState(O.Ready),
                (e.m_ulBroadcastID = s.broadcastid),
                (e.m_ulViewerToken = this.m_broadcastSettings.ulViewerToken),
                (e.m_strCDNAuthUrlParameters = s.cdn_auth_url_parameters),
                (e.m_bWebRTC = s.is_webrtc),
                (e.m_data = s),
                this.LoadBroadcast(e),
                setTimeout(() => {
                  e.m_schHeartbeatTimeout.Schedule(
                    1e3 * e.m_data.heartbeat_interval,
                    () => this.HeartbeatBroadcast(e)
                  );
                }, 3e4 * Math.random());
            else if ("waiting" == o) {
              e.SetState(
                O.Loading,
                Object(B.g)("#BroadcastWatch_WaitingForResponse")
              );
              let a = Date.now() - r;
              if (a > 6e4)
                return void e.SetState(
                  O.Error,
                  Object(B.g)("#BroadcastWatch_NotAvailable")
                );
              let i = a > 3e4 ? s.retry : 5e3;
              e.m_schManifestTimeout.Schedule(i, () =>
                this.GetBroadcastManifest(e, t, r)
              );
            } else
              "waiting_for_start" == o
                ? (e.SetState(
                    O.Loading,
                    Object(B.g)("#BroadcastWatch_WaitingForStart")
                  ),
                  e.m_schManifestTimeout.Schedule(s.retry, () =>
                    this.GetBroadcastManifest(e, t, r)
                  ))
                : "waiting_for_reconnect" == o
                ? (e.SetState(
                    O.Loading,
                    Object(B.g)("#BroadcastWatch_WaitingForReconnect")
                  ),
                  e.m_schManifestTimeout.Schedule(s.retry, () =>
                    this.GetBroadcastManifest(e, t, r)
                  ))
                : "end" == o
                ? e.SetState(
                    O.Error,
                    Object(B.g)("#BroadcastWatch_NotAvailable")
                  )
                : "noservers" == o
                ? e.SetState(O.Error, Object(B.g)("#BroadcastWatch_ServerLoad"))
                : "system_not_supported" == o
                ? e.SetState(
                    O.Error,
                    Object(B.g)("#BroadcastWatch_SystemNotSupported")
                  )
                : "user_restricted" == o
                ? e.SetState(
                    O.Error,
                    Object(B.g)("#BroadcastWatch_UserRestricted")
                  )
                : "poor_upload_quality" == o
                ? e.SetState(
                    O.Error,
                    Object(B.g)("#BroadcastWatch_PoorUploadQuality")
                  )
                : "request_failed" == o
                ? e.SetState(
                    O.Error,
                    Object(B.g)("#BroadcastWatch_RequestFailed")
                  )
                : e.SetState(
                    O.Error,
                    Object(B.g)("#BroadcastWatch_NotAvailable")
                  );
          });
        }
        GetClipManifest(e, t) {
          return Object(a.a)(this, void 0, void 0, function* () {
            e.SetState(O.Loading, "");
            let r = {
                clipid: e.m_clipID,
                watchlocation: t,
                sessionid: h.d.SESSIONID,
              },
              a = null;
            try {
              a = yield n.a.get(
                h.d.CHAT_BASE_URL + "broadcast/getclipdetails",
                { params: r, withCredentials: !0 }
              );
            } catch (e) {
              console.error(e), console.log("Failed to get clip manifest!");
            }
            if (!a || 200 != a.status)
              return void e.SetState(
                O.Error,
                Object(B.g)("#BroadcastWatch_RequestFailed")
              );
            let i = a.data;
            1 == i.success
              ? (e.SetState(O.Ready), (e.m_data = i), this.LoadClip(e))
              : e.SetState(
                  O.Error,
                  Object(B.g)("#BroadcastWatch_RequestFailed")
                );
          });
        }
        GetVODManifest(e, t) {
          return Object(a.a)(this, void 0, void 0, function* () {
            e.SetState(O.Loading, "");
            let t = yield C.a.Get().LoadVODForAppID(e.m_nAppIDVOD);
            t
              ? (e.SetState(O.Ready),
                (e.m_manifestURL = t.video_url),
                this.LoadVOD(e))
              : e.SetState(
                  O.Error,
                  Object(B.g)("#BroadcastWatch_RequestFailed")
                );
          });
        }
        HeartbeatBroadcast(e) {
          return Object(a.a)(this, void 0, void 0, function* () {
            let t = new FormData();
            t.append("steamid", e.m_steamIDBroadcast),
              t.append("broadcastid", e.m_ulBroadcastID),
              t.append("viewertoken", this.m_broadcastSettings.ulViewerToken),
              n.a.post(h.d.CHAT_BASE_URL + "broadcast/heartbeat/", t),
              e.m_schHeartbeatTimeout.Schedule(
                1e3 * e.m_data.heartbeat_interval,
                () => this.HeartbeatBroadcast(e)
              );
          });
        }
        LoadBroadcast(e) {
          e.m_rgVideos.findIndex((e) => e == this.m_activeVideo) >= 0 &&
            this.m_activeVideo.StartBroadcast(e);
        }
        LoadClip(e) {
          e.m_rgVideos.findIndex((e) => e == this.m_activeVideo) >= 0 &&
            this.m_activeVideo.StartClip(e);
        }
        LoadVOD(e) {
          e.m_rgVideos.findIndex((e) => e == this.m_activeVideo) >= 0 &&
            this.m_activeVideo.StartVOD(e);
        }
        BroadcastDownloadFailed(e, t = !0) {
          e.Stop();
          let r = this.m_mapBroadcasts.get(e.GetBroadcastSteamID());
          r &&
            r.m_eWatchState != O.Loading &&
            (r.m_bWebRTC && t && (r.m_bWebRTC = !1),
            this.GetBroadcastManifest(r, e.GetWatchLocation()));
        }
        UserInputClickVideo(e) {
          if (
            this.m_activeVideo != e &&
            (this.PauseAllVideo(),
            (this.m_activeVideo = e),
            !e.IsBroadcastClip() && !e.IsBroadcastVOD())
          ) {
            let t = this.m_mapBroadcasts.get(e.GetBroadcastSteamID());
            this.GetBroadcastManifest(t, e.GetWatchLocation());
          }
          e.UserInputClick();
        }
        LoadBroadcastSettings() {
          if (!window.localStorage) return;
          let e = window.localStorage.getItem("broadcastSettings");
          if (!e) return;
          let t = JSON.parse(e);
          if (!t) return;
          Object.assign(this.m_broadcastSettings, t);
          let r = this.m_broadcastSettings;
          (r.bMuted = !!r.bMuted),
            (r.nVolume = _.a(r.nVolume, 0, 1)),
            "string" != typeof r.ulViewerToken && (r.ulViewerToken = "0");
        }
        SaveBroadcastSettings() {
          window.localStorage &&
            this.m_schSaveSettings.Schedule(1e3, () => {
              try {
                window.localStorage.setItem(
                  "broadcastSettings",
                  JSON.stringify(this.m_broadcastSettings)
                );
              } catch (e) {}
            });
        }
        SetViewerToken(e) {
          this.m_broadcastSettings.ulViewerToken != e &&
            ((this.m_broadcastSettings.ulViewerToken = e),
            this.SaveBroadcastSettings());
        }
        GetViewerToken() {
          return this.m_broadcastSettings.ulViewerToken;
        }
        SaveVolumeChange(e, t) {
          (this.m_broadcastSettings.nVolume == e &&
            this.m_broadcastSettings.bMuted == t) ||
            ((this.m_broadcastSettings.nVolume = e),
            (this.m_broadcastSettings.bMuted = t),
            this.SaveBroadcastSettings());
        }
      }
      Object(a.b)([s.C], k.prototype, "m_mapBroadcasts", void 0),
        (function (e) {
          (e[(e.Timeline = 1)] = "Timeline"), (e[(e.Minimap = 2)] = "Minimap");
        })(T || (T = {}));
      class M {
        constructor(e, t, r, a) {
          (this.m_elVideo = null),
            (this.m_player = null),
            (this.m_listeners = new S.c()),
            (this.m_gameDataParser = null),
            (this.m_eWatchLocation = 0),
            (this.m_rgSubtitles = []),
            (this.m_steamIDBroadcast = null),
            (this.m_BroadcastInfo = null),
            (this.m_broadcastClipID = null),
            (this.m_nBroadcastAppIDVOD = null),
            (this.m_bPaused = !1),
            (this.m_nPlaybackTime = 0),
            (this.m_bBuffering = !1),
            (this.m_bOnLiveEdge = !1),
            (this.m_nVolume = 0),
            (this.m_bMuted = !1),
            (this.m_bUserInputNeeded = !1),
            (this.m_bIsReplay = !1),
            (this.m_nTimelineDuration = 1800),
            (this.m_nVideoStartPos = 0),
            (this.m_nVideoEndPos = 0),
            (this.m_editorStartTime = 0),
            (this.m_editorEndTime = 0),
            (this.m_rgMarkers = s.C.array()),
            (this.m_rgSegments = s.C.array()),
            (this.m_rgRegions = s.C.array()),
            (this.m_elVideo = e),
            (this.m_nVolume = t),
            (this.m_bMuted = r),
            (this.m_eWatchLocation = a);
        }
        SetBroadcastSteamID(e) {
          this.m_steamIDBroadcast = e;
        }
        GetBroadcastSteamID() {
          return this.m_steamIDBroadcast;
        }
        GetWatchLocation() {
          return this.m_eWatchLocation;
        }
        IsPaused() {
          return this.m_bPaused;
        }
        GetPlaybackTime() {
          return this.m_nPlaybackTime;
        }
        SetStatsViewIsVisible(e) {
          this.m_player && this.m_player.SetStatsViewIsVisible(e);
        }
        GetDASHPlayerStats() {
          return this.m_player.GetDASHPlayerStats();
        }
        BHasDASHStats() {
          return null != this.m_player;
        }
        IsTimelineMapActive() {
          return !1;
        }
        CanSeek() {
          return this.m_player && this.m_player.CanSeek();
        }
        IsBuffering() {
          return this.m_bBuffering;
        }
        IsOnLiveEdge() {
          return this.m_bOnLiveEdge;
        }
        GetVideoAvailableStartTime() {
          return this.m_nVideoStartPos;
        }
        GetVolume() {
          return this.m_nVolume;
        }
        GetUserInputNeeded() {
          return this.m_bUserInputNeeded;
        }
        IsReplay() {
          return this.m_bIsReplay;
        }
        IsBroadcastClip() {
          return null != this.m_broadcastClipID;
        }
        SetBroadcastClipID(e) {
          this.m_broadcastClipID = e;
        }
        GetBroadcastClipID() {
          return this.m_broadcastClipID;
        }
        IsBroadcastVOD() {
          return null != this.m_nBroadcastAppIDVOD;
        }
        SetBroadcastAppIDVOD(e) {
          this.m_nBroadcastAppIDVOD = e;
        }
        GetBroadcastAppIDVOD() {
          return this.m_nBroadcastAppIDVOD;
        }
        GetVideoRepresentations() {
          return this.m_player ? this.m_player.GetVideoRepresentations() : [];
        }
        SetVideoRepresentation(e) {
          this.m_player.SetVideoRepresentation(e);
        }
        GetBroadcastInfo() {
          return this.m_BroadcastInfo;
        }
        ListSubtitles() {
          return this.m_elVideo.textTracks;
        }
        GetSubtitles() {
          for (let e = 0; e < this.m_elVideo.textTracks.length; e++) {
            const t = this.m_elVideo.textTracks[e];
            if ("showing" === t.mode) return t;
          }
          return null;
        }
        SetSubtitles(e) {
          let t = e ? B.e[e] : -1;
          this.m_player.SetSubtitles(t);
        }
        GetBroadcastState() {
          return F.GetBroadcastState(this);
        }
        GetBroadcastStateDescription() {
          return F.GetBroadcastStateDescription(this);
        }
        SetOnVideoCallback(e) {
          this.m_fnOnVideoEnd = e;
        }
        InitPlayer() {
          Object(y.a)(!this.m_player, "Initialized twice?"),
            this.m_listeners.AddEventListener(
              this.m_elVideo,
              "playing",
              this.OnVideoPlaying
            ),
            this.m_listeners.AddEventListener(
              this.m_elVideo,
              "pause",
              this.OnVideoPause
            ),
            this.m_listeners.AddEventListener(
              this.m_elVideo,
              "timeupdate",
              this.OnVideoTimeUpdate
            ),
            this.m_listeners.AddEventListener(
              this.m_elVideo,
              "valve-bufferupdate",
              this.OnVideoTimeUpdate
            ),
            this.m_listeners.AddEventListener(
              this.m_elVideo,
              "valve-gamedataupdate",
              this.OnGameDataUpdate
            ),
            this.m_listeners.AddEventListener(
              this.m_elVideo,
              "valve-downloadfailed",
              this.OnDownloadFailed
            ),
            this.m_listeners.AddEventListener(
              this.m_elVideo,
              "valve-webrtcretry",
              this.OnWebRTCRetry
            ),
            this.m_listeners.AddEventListener(
              this.m_elVideo,
              "valve-webrtcfailed",
              this.OnWebRTCFailed
            ),
            this.m_listeners.AddEventListener(
              this.m_elVideo,
              "valve-userinputneeded",
              this.OnUserInputNeeded
            ),
            (this.m_bPaused = !1),
            (this.m_nPlaybackTime = 0),
            (this.m_bBuffering = !1),
            (this.m_nTimelineDuration = 1800),
            (this.m_nVideoStartPos = 0),
            (this.m_nVideoEndPos = 0),
            this.m_rgMarkers.clear(),
            this.m_rgSegments.clear(),
            (this.m_bUserInputNeeded = !1),
            (this.m_bIsReplay = !1);
        }
        StartBroadcast(e) {
          this.InitPlayer(),
            e.m_data.url
              ? ((this.m_player = new p.a(
                  this.m_elVideo,
                  !Object(u.a)() && Object(u.b)()
                )),
                this.m_player.PlayMPD(
                  e.m_data.url,
                  e.m_strCDNAuthUrlParameters,
                  e.m_data.hls_url
                ))
              : ((this.m_player = new f(this.m_elVideo)),
                this.m_player.PlayWebRTC(
                  this.m_steamIDBroadcast,
                  e.m_ulViewerToken,
                  e.m_data.webrtc_session_id,
                  e.m_data.webrtc_turn_server,
                  e.m_data.webrtc_offer_sdp
                )),
            this.SetVolume(this.m_nVolume),
            this.m_player.SetMuted(this.m_bMuted);
          let t = this.m_player.GetDASHPlayerStats();
          t &&
            t.SetBroadcasterAndViewerInfo(
              this.m_steamIDBroadcast,
              h.l.steamid,
              e.m_ulBroadcastID,
              e.m_ulViewerToken,
              e.m_strCDNAuthUrlParameters
            ),
            (this.m_BroadcastInfo = F.StartInfo(this.m_steamIDBroadcast));
        }
        StartClip(e) {
          this.InitPlayer(),
            (this.m_player = new p.a(this.m_elVideo)),
            this.m_player.PlayMPD(e.m_data.clip_url, null),
            this.SetVolume(this.m_nVolume),
            this.m_player.SetMuted(this.m_bMuted);
        }
        StartVOD(e) {
          this.InitPlayer();
          let t = new p.a(this.m_elVideo);
          (this.m_player = t),
            h.l.logged_in &&
              e.m_nAppIDVOD &&
              t.SetBookmarkAdapter(new I.a(e.m_nAppIDVOD)),
            this.m_player.PlayMPD(e.m_manifestURL, null),
            this.SetVolume(this.m_nVolume),
            this.m_player.SetMuted(this.m_bMuted);
        }
        Stop() {
          this.m_listeners.Unregister(),
            this.m_BroadcastInfo &&
              (F.StopInfo(this.m_BroadcastInfo), (this.m_BroadcastInfo = null)),
            (this.m_gameDataParser = null),
            this.m_player && (this.m_player.Close(), (this.m_player = null));
        }
        TogglePlayPause() {
          !this.m_player || this.m_player.IsPaused()
            ? this.Play()
            : this.Pause();
        }
        Play() {
          const e = this.GetBroadcastState();
          e == O.None || this.IsBroadcastClip()
            ? F.StartVideo(this)
            : e == O.Ready &&
              (F.SetActiveVideo(this),
              this.m_player
                ? this.m_player.Play()
                : this.IsBroadcastVOD()
                ? this.StartVOD(F.GetBroadcastVOD(this.m_nBroadcastAppIDVOD))
                : this.StartBroadcast(F.GetBroadcast(this.m_steamIDBroadcast)));
        }
        Pause() {
          console.log(
            "Pause ",
            this.m_steamIDBroadcast,
            this.m_nBroadcastAppIDVOD,
            this.m_broadcastClipID
          ),
            this.m_player && this.m_player.Pause();
        }
        JumpTime(e) {
          this.m_player.JumpTime(e);
        }
        Seek(e) {
          this.m_player.Seek(e);
        }
        SeekAndPlay(e) {
          this.m_player.SeekAndPlay(e);
        }
        JumpToLiveEdge() {
          this.m_player.IsLiveContent()
            ? this.SeekAndPlay(this.m_player.GetBufferedLiveEdgeTime())
            : this.SeekAndPlay(this.m_player.GetAvailableVideoStartTime());
        }
        SetVolume(e) {
          this.m_player && this.m_player.SetVolume(e),
            (this.m_nVolume = this.m_player.GetVolume()),
            F.SaveVolumeChange(e, this.m_bMuted);
        }
        SetMute(e) {
          this.m_player && this.m_player.SetMuted(e),
            (this.m_bMuted = e),
            F.SaveVolumeChange(this.m_nVolume, e);
        }
        IsMuted() {
          return this.m_bMuted;
        }
        OnVideoPlaying() {
          (this.m_bPaused = !1),
            0 === this.m_editorStartTime &&
              0 === this.m_editorEndTime &&
              ((this.m_editorStartTime = this.GetVideoAvailableStartTime()),
              (this.m_editorEndTime =
                this.GetVideoAvailableStartTime() +
                this.GetTimelineDuration()));
        }
        OnVideoPause() {
          this.m_bPaused = !0;
        }
        OnVideoTimeUpdate() {
          if (
            (window.clearTimeout(this.m_videoEndingTimer),
            this.IsBroadcastClip())
          )
            (this.m_nPlaybackTime = this.m_player.GetCurrentPlayTime()),
              (this.m_nVideoStartPos =
                this.m_player.GetAvailableVideoStartTime()),
              (this.m_nVideoEndPos = this.m_player.GetBufferedLiveEdgeTime()),
              (this.m_nTimelineDuration =
                this.m_nVideoEndPos - this.m_nVideoStartPos),
              (this.m_bOnLiveEdge = !1),
              (this.m_bBuffering = this.m_player.IsBuffering());
          else {
            if (
              ((this.m_nPlaybackTime = this.m_player.GetCurrentPlayTime()),
              (this.m_nVideoStartPos =
                this.m_player.GetAvailableVideoStartTime()),
              (this.m_nVideoEndPos = Math.max(
                this.m_player.GetBufferedLiveEdgeTime(),
                this.m_nPlaybackTime
              )),
              this.IsBroadcastVOD() &&
                ((this.m_nTimelineDuration = this.m_nVideoEndPos),
                this.m_fnOnVideoEnd &&
                  this.m_nVideoEndPos - this.m_nPlaybackTime < p.b))
            ) {
              const e = 400;
              this.m_videoEndingTimer = window.setTimeout(() => {
                this.m_fnOnVideoEnd();
              }, e);
            }
            (this.m_bBuffering = this.m_player.IsBuffering()),
              (this.m_bOnLiveEdge =
                this.m_nVideoEndPos - this.m_nPlaybackTime < p.b),
              this.m_player.IsPaused() && (this.m_bOnLiveEdge = !1);
          }
        }
        OnGameDataUpdate(e) {
          let t = e.detail;
          if (!t || "object" != typeof t.gamedata) return;
          (this.m_gameDataParser &&
            this.m_gameDataParser.GetAppID() == t.gamedata.__appid) ||
            (this.m_gameDataParser = new m(t.gamedata.__appid));
          const r = this.m_player.GetLiveContentStartTime().getTime();
          if ("timelinemarkers" in t.gamedata) {
            const e = this.m_gameDataParser.UpdateMarkers(
              t.gamedata.__timelinemarkers,
              r
            );
            e &&
              (this.m_rgMarkers.replace(e.rgMarkers || []),
              this.m_rgSegments.replace(e.rgSegments || []));
            const a = this.m_gameDataParser.UpdateRegions(t.gamedata.__regions);
            a && this.m_rgRegions.replace(a);
          } else
            "soundtrack" in t.gamedata &&
              this.m_gameDataParser.UpdateSoundtrack(
                this.m_steamIDBroadcast,
                t.gamedata.soundtrack
              );
        }
        OnDownloadFailed() {
          F.BroadcastDownloadFailed(this);
        }
        OnWebRTCRetry() {
          F.BroadcastDownloadFailed(this, !1);
        }
        OnWebRTCFailed() {
          F.BroadcastDownloadFailed(this, !0);
        }
        OnUserInputNeeded() {
          this.m_bUserInputNeeded = !0;
        }
        UserInputClick() {
          (this.m_bUserInputNeeded = !1),
            this.m_player ? this.JumpToLiveEdge() : this.Play();
        }
        StopPlaybackTillUserInput() {
          this.Stop(), this.OnUserInputNeeded();
        }
        GetTimelineStartPos() {
          return this.m_nVideoEndPos - this.m_nTimelineDuration;
        }
        GetTimelineDuration() {
          return this.m_nTimelineDuration;
        }
        GetTimeAtMousePosition(e, t, r, a) {
          let i = _.c(e, t.left, t.right, r, a);
          return Math.floor(i + 0.5);
        }
        GetPercentOffsetFromTime(e, t) {
          let r = 0,
            a = 0;
          return (
            t == T.Timeline
              ? ((a = this.m_nVideoEndPos), (r = a - this.m_nTimelineDuration))
              : ((r = 0), (a = 0)),
            _.c(e, r, a, 0, 100)
          );
        }
        GetTimelineMarkers() {
          return this.m_rgMarkers;
        }
        GetTimelineSegments() {
          return this.m_rgSegments;
        }
        GetGameDataRegions() {
          return this.m_rgRegions;
        }
        BHasMarkersOrSegments() {
          return this.has_segments || this.has_markers;
        }
        GetThumbnailForTimestamp(e) {
          return this.m_player.GetThumbnailForTimestamp(e);
        }
        get has_markers() {
          return this.m_rgMarkers.length > 0;
        }
        get has_segments() {
          return this.m_rgSegments.length > 0;
        }
      }
      Object(a.b)([s.C], M.prototype, "m_bPaused", void 0),
        Object(a.b)([s.C], M.prototype, "m_nPlaybackTime", void 0),
        Object(a.b)([s.C], M.prototype, "m_bBuffering", void 0),
        Object(a.b)([s.C], M.prototype, "m_bOnLiveEdge", void 0),
        Object(a.b)([s.C], M.prototype, "m_nVolume", void 0),
        Object(a.b)([s.C], M.prototype, "m_bMuted", void 0),
        Object(a.b)([s.C], M.prototype, "m_bUserInputNeeded", void 0),
        Object(a.b)([s.C], M.prototype, "m_bIsReplay", void 0),
        Object(a.b)([s.C], M.prototype, "m_nTimelineDuration", void 0),
        Object(a.b)([s.C], M.prototype, "m_nVideoStartPos", void 0),
        Object(a.b)([s.C], M.prototype, "m_nVideoEndPos", void 0),
        Object(a.b)([s.C], M.prototype, "m_editorStartTime", void 0),
        Object(a.b)([s.C], M.prototype, "m_editorEndTime", void 0),
        Object(a.b)([s.k.bound], M.prototype, "StartBroadcast", null),
        Object(a.b)([s.k.bound], M.prototype, "StartClip", null),
        Object(a.b)([s.k.bound], M.prototype, "StartVOD", null),
        Object(a.b)([b.a], M.prototype, "OnVideoPlaying", null),
        Object(a.b)([b.a], M.prototype, "OnVideoPause", null),
        Object(a.b)([s.k.bound], M.prototype, "OnVideoTimeUpdate", null),
        Object(a.b)([s.k.bound], M.prototype, "OnGameDataUpdate", null),
        Object(a.b)([b.a], M.prototype, "OnDownloadFailed", null),
        Object(a.b)([b.a], M.prototype, "OnWebRTCRetry", null),
        Object(a.b)([b.a], M.prototype, "OnWebRTCFailed", null),
        Object(a.b)([b.a], M.prototype, "OnUserInputNeeded", null);
      const F = new k();
      window.uiBroadcastWatchStore = F;
    },
    "3y2B": function (e, t, r) {
      "use strict";
      r.d(t, "a", function () {
        return s;
      });
      var a = r("mrSG"),
        i = (r("q1tI"), r("2vnA"));
      class n {
        constructor(e, t) {
          if (!t.hasOwnProperty(e))
            throw new Error("Room effect " + e + " is not defined.");
          (this.name = e),
            (this.timestamp = Date.now()),
            (this.settings = t[e]),
            (this.expires = this.timestamp + this.settings.timeout);
        }
        static QueueFor(e) {
          return n.k_QueueForEffect[e];
        }
        Queue() {
          return n.k_QueueForEffect[this.name];
        }
        bIsExpired() {
          return Date.now() > this.expires;
        }
        bIsActive() {
          const e = Date.now();
          return this.timestamp <= e && this.expires > e;
        }
        iTimeToExpiry() {
          return this.expires - Date.now();
        }
        render() {
          return this.bIsActive() ? this.settings.render(this) : null;
        }
      }
      n.k_QueueForEffect = {
        snowball: "snowball",
        snow: "confetti_snow",
        confetti: "confetti_snow",
        goldfetti: "confetti_snow",
        firework: "festive",
        balloons: "festive",
        lny2020_lanterns: "festive",
        lny2020_firework: "festive",
        lny2020_confetti: "confetti_snow",
      };
      class s {
        constructor(e) {
          (this.m_mapRoomEffectQueue = {
            default: [],
            snowball: [],
            confetti_snow: [],
            festive: [],
          }),
            (this.m_rgRunningEffects = []),
            (this.m_effectSettings = e);
        }
        AddRoomEffect(e) {
          this.QueueRoomEffect(e), this.UpdateRunningRoomEffects();
        }
        QueueRoomEffect(e) {
          this.m_mapRoomEffectQueue[n.QueueFor(e)].push(e);
        }
        ActivateRoomEffect(e) {
          try {
            const t = new n(e, this.m_effectSettings);
            this.m_rgRunningEffects.push(t),
              window.setTimeout(() => {
                this.UpdateRunningRoomEffects();
              }, t.iTimeToExpiry() + 100);
          } catch (e) {
            console.log(e);
          }
        }
        BIsQueueFull(e) {
          return (
            this.m_rgRunningEffects.filter((t) => t.Queue() == e).length >=
            s.k_MaxRoomEffectRunning[e]
          );
        }
        UpdateRunningRoomEffects() {
          this.m_rgRunningEffects = this.m_rgRunningEffects.filter(
            (e) => !e.bIsExpired()
          );
          for (let e in this.m_mapRoomEffectQueue) {
            const t = e;
            for (
              ;
              this.m_mapRoomEffectQueue[t].length > 0 && !this.BIsQueueFull(t);

            )
              this.ActivateRoomEffect(this.m_mapRoomEffectQueue[t].shift());
          }
        }
      }
      (s.k_MaxRoomEffectRunning = {
        default: 1,
        snowball: 10,
        confetti_snow: 3,
        festive: 10,
      }),
        Object(a.b)([i.C], s.prototype, "m_rgRunningEffects", void 0);
    },
    "44wC": function (e, t, r) {
      "use strict";
      r.d(t, "a", function () {
        return d;
      }),
        r.d(t, "b", function () {
          return m;
        });
      var a = r("mrSG"),
        i = r("vDqi"),
        n = r.n(i),
        s = r("2vnA"),
        o = r("q1tI"),
        l = (r("msu0"), r("Zdsb"), r("d4Nf"), r("sTxY"), r("/Q1a"));
      class c {
        constructor(e) {
          (this.appid = e.appid),
            (this.demo_appid = e.demo_appid),
            (this.demo_package_id = 0);
        }
      }
      class d {
        constructor() {
          (this.m_mapAppToDemoInfo = new Map()),
            (this.m_mapAppIDToLoadPromise = new Map());
        }
        static Get() {
          return (
            d.s_DemoEventStore ||
              ((d.s_DemoEventStore = new d()), d.s_DemoEventStore.Init()),
            d.s_DemoEventStore
          );
        }
        BHasDemoEventInfo(e) {
          return this.m_mapAppToDemoInfo.has(e);
        }
        GetDemoEventInfo(e) {
          return this.m_mapAppToDemoInfo.get(e);
        }
        GetAllDemoInfo() {
          return this.m_mapAppToDemoInfo;
        }
        BHasDemoAppID(e) {
          var t;
          return Boolean(
            null === (t = this.m_mapAppToDemoInfo.get(e)) || void 0 === t
              ? void 0
              : t.demo_appid
          );
        }
        GetNumDemos() {
          let e = 0;
          return (
            this.m_mapAppToDemoInfo.forEach((t) => {
              t.demo_appid > 0 && (e += 1);
            }),
            e
          );
        }
        Init() {
          let e = Object(l.h)("demoeventstore", "application_config");
          this.ValidateStoreDefault(e) &&
            e.forEach((e) => {
              this.m_mapAppToDemoInfo.set(e.appid, new c(e));
            });
        }
        ValidateStoreDefault(e) {
          const t = e;
          return (
            !!(
              t &&
              Array.isArray(t) &&
              t.length > 0 &&
              "object" == typeof t[0]
            ) && "number" == typeof t[0].appid
          );
        }
        LoadAppIDsBatch(e, t) {
          return Object(a.a)(this, void 0, void 0, function* () {
            const r = new Array(),
              a = new Array();
            if (
              (e.forEach((e) => {
                this.m_mapAppIDToLoadPromise.has(e)
                  ? a.push(this.m_mapAppIDToLoadPromise.get(e))
                  : this.m_mapAppToDemoInfo.has(e) || r.push(e);
              }),
              r.length > 0)
            ) {
              const e = this.InternalLoadAppIDsBatch(r, t);
              r.forEach((t) => this.m_mapAppIDToLoadPromise.set(t, e)),
                a.push(e);
            }
            return (yield Promise.all(a)).every((e) => !!e);
          });
        }
        InternalLoadAppIDsBatch(e, t) {
          var r, i, o;
          return Object(a.a)(this, void 0, void 0, function* () {
            try {
              for (e = e.sort(); e.length > 0; ) {
                const a = 50,
                  d = Math.min(a, e.length),
                  m = e.slice(0, d);
                e = e.slice(d);
                const u = l.d.STORE_BASE_URL + "saleaction/ajaxgetdemoevents",
                  p = yield n.a.get(u, {
                    params: {
                      appids: m,
                      cc: l.d.COUNTRY || "US",
                      origin: self.origin,
                    },
                    cancelToken: t ? t.token : void 0,
                  });
                1 ===
                  (null === (r = null == p ? void 0 : p.data) || void 0 === r
                    ? void 0
                    : r.success) ||
                42 ===
                  (null === (i = null == p ? void 0 : p.data) || void 0 === i
                    ? void 0
                    : i.success)
                  ? Object(s.G)(() => {
                      var e, t;
                      (null ===
                        (t =
                          null === (e = null == p ? void 0 : p.data) ||
                          void 0 === e
                            ? void 0
                            : e.info) || void 0 === t
                        ? void 0
                        : t.length) &&
                        p.data.info.forEach((e) => {
                          this.m_mapAppToDemoInfo.set(e.appid, new c(e));
                        });
                      for (const e of m)
                        this.m_mapAppToDemoInfo.has(e) ||
                          this.m_mapAppToDemoInfo.set(e, new c({ appid: e })),
                          this.m_mapAppIDToLoadPromise.delete(e);
                    })
                  : console.log(
                      "Failed to call ajaxgetdemoevents with response:" +
                        (null === (o = null == p ? void 0 : p.data) ||
                        void 0 === o
                          ? void 0
                          : o.err_msg)
                    );
              }
              return !0;
            } catch (e) {
              console.log("Failed to call ajaxgetdemoevents:" + e);
            }
            return !1;
          });
        }
      }
      function m(e) {
        const [t, r] = Object(o.useState)(d.Get().GetDemoEventInfo(e));
        return (
          Object(o.useEffect)(() => {
            !t &&
              e &&
              d
                .Get()
                .LoadAppIDsBatch([e])
                .then(() => {
                  d.Get().BHasDemoEventInfo(e) &&
                    r(d.Get().GetDemoEventInfo(e));
                });
          }, [e, t]),
          t
        );
      }
      Object(a.b)([s.C.shallow], d.prototype, "m_mapAppToDemoInfo", void 0),
        Object(a.b)([s.k], d.prototype, "Init", null),
        Object(a.b)([s.k], d.prototype, "LoadAppIDsBatch", null);
    },
    "4EJs": function (e, t, r) {
      "use strict";
      r.d(t, "f", function () {
        return z;
      }),
        r.d(t, "e", function () {
          return V;
        }),
        r.d(t, "a", function () {
          return Q;
        }),
        r.d(t, "b", function () {
          return K;
        }),
        r.d(t, "c", function () {
          return J;
        }),
        r.d(t, "d", function () {
          return X;
        });
      var a = r("TyAF"),
        i = r("q1tI"),
        n = r.n(i),
        s = (r("msu0"), r("Zdsb"), r("fsrB")),
        o = r("Lsvi"),
        l = r("O8Yk"),
        c = (r("XrGS"), r("xH93")),
        d = r("lfGQ"),
        m = (r("yfxr"), r("wijF")),
        u = (r("X/lQ"), r("Ys0h")),
        p = r("hAgw"),
        _ = r("RrtU"),
        h = r("7YTu"),
        b = r.n(h),
        g = r("KXdY"),
        S = r("i1T+"),
        f = r("1QaA"),
        v = r("vx0u"),
        y = r("7yn2"),
        B = r("1mk1"),
        w = r("PlCS"),
        C = r("bCaE"),
        I = r("poS6"),
        E = r("aF8t"),
        O = r("GbHM"),
        T = r("GXif"),
        G = r("/Q1a"),
        R = r("0JCO"),
        D = r("oGLD"),
        A = r("O8IP"),
        j = r("oEKi"),
        k = r("zy5s"),
        M = r.n(k),
        F = r("j/dN");
      const P = (e) => {
        var t, r, a, s;
        const {
            id: l,
            strReason: c,
            bHidePrice: m,
            bHidePlatforms: u,
            bUseSubscriptionLayout: p,
          } = e,
          {
            bIsHovered: _,
            purchaseInfo: h,
            displayInfo: b,
            displayStoreItem: f,
            baseGameStoreItem: v,
            baseGameInfo: w,
          } = Object(S.a)(e, { include_trailers: !0, include_screenshots: !0 }),
          I = Object(D.g)(),
          E = Object(i.useRef)(),
          M = Object(i.useCallback)(() => {
            var e;
            null === (e = null == E ? void 0 : E.current) ||
              void 0 === e ||
              e.pause();
          }, []);
        Object(i.useEffect)(
          () => (
            window.addEventListener("scroll", M),
            () => {
              window.removeEventListener("scroll", M);
            }
          ),
          [M]
        );
        const P = Object(R.c)();
        if (!f) return null;
        let N =
          (null === (t = f.GetAssets().GetLibraryHeroURL()) || void 0 === t
            ? void 0
            : t.trim().length) > 0
            ? f.GetAssets().GetLibraryHeroURL()
            : f.GetAssets().GetPageBackgroundURL();
        const L = f.GetOnlyAllAgesSafeScreenshots();
        null == L || L.length;
        let U = f.GetMicroTrailer();
        v &&
          ((N && 11 !== f.GetAppType()) ||
            (N =
              (null === (r = v.GetAssets().GetLibraryHeroURL()) || void 0 === r
                ? void 0
                : r.trim().length) > 0
                ? v.GetAssets().GetLibraryHeroURL()
                : v.GetAssets().GetPageBackgroundURL()),
          U || (U = null == v ? void 0 : v.GetMicroTrailer()));
        const W = Object(d.b)(f.GetStorePageURL(), P),
          z = Object(d.c)(P),
          V = 0 == f.GetStoreItemType();
        return n.a.createElement(
          B.a,
          { appid: V && f.GetAppID() },
          n.a.createElement(
            o.a,
            {
              focusable: !0,
              className: A.SuperCapsuleCtn,
              autoFocus: e.bAutoFocus,
              onMouseEnter: () => {
                var e;
                null === (e = null == E ? void 0 : E.current) ||
                  void 0 === e ||
                  e.play();
              },
            },
            !I &&
              n.a.createElement(
                "div",
                { className: Object(O.a)(A.BGGradientTwo) },
                " "
              ),
            n.a.createElement(
              "div",
              { className: Object(O.a)(A.BGGradient) },
              n.a.createElement(
                "div",
                {
                  className: Object(O.a)(A.BGImage),
                  style: { backgroundImage: `url("${N}")` },
                },
                " "
              ),
              U &&
                !I &&
                n.a.createElement(
                  "video",
                  {
                    ref: E,
                    className: Object(O.a)(A.BGVideo),
                    playsInline: !0,
                    autoPlay: !0,
                    muted: !0,
                    loop: !0,
                  },
                  n.a.createElement("source", {
                    src: U.strWebMURL,
                    type: "video/webm",
                  }),
                  Boolean(!G.d.IN_LIBRARY && !G.d.IN_GAMEPADUI) &&
                    n.a.createElement("source", {
                      src: U.strMP4URL,
                      type: "video/mp4",
                    })
                )
            ),
            n.a.createElement(
              "div",
              { className: Object(O.a)(A.FeatureCtn) },
              n.a.createElement(
                "a",
                { href: W, className: Object(O.a)(A.Artwork) },
                n.a.createElement(j.c, {
                  snr: z,
                  appID: b.id,
                  classOverride: Object(O.a)("WishlistButton"),
                }),
                n.a.createElement(g.c, { appids: f.GetIncludedAppIDsOrSelf() }),
                (!Boolean(null == f ? void 0 : f.GetParentAppID()) ||
                  Boolean(v)) &&
                  n.a.createElement(J, { info: Boolean(v) ? w : b }),
                n.a.createElement(C.a, {
                  eDeckCompatibilityCategory:
                    (null === (a = null == v ? void 0 : v.GetPlatforms()) ||
                    void 0 === a
                      ? void 0
                      : a.steam_deck_compat_category) ||
                    (null === (s = f.GetPlatforms()) || void 0 === s
                      ? void 0
                      : s.steam_deck_compat_category),
                  className: A.DeckCompatIconOverride,
                }),
                Boolean(p && V)
                  ? n.a.createElement(F.a, { appid: f.GetAppID(), bIsMuted: _ })
                  : n.a.createElement(Q, {
                      info: h,
                      bHidePlatforms: u,
                      bHidePrice: m,
                    })
              ),
              n.a.createElement(
                "div",
                { className: Object(O.a)(A.Info) },
                n.a.createElement(
                  "a",
                  { className: A.Title, href: W },
                  f.GetName()
                ),
                n.a.createElement("div", { className: A.Reason }, c),
                V &&
                  n.a.createElement(
                    "div",
                    { className: A.StoreSaleItemRelease },
                    Object(T.p)(
                      "#Sale_ReleaseDate",
                      n.a.createElement(
                        "span",
                        null,
                        f.GetFormattedSteamReleaseDate()
                      )
                    )
                  ),
                V &&
                  n.a.createElement(
                    "div",
                    {
                      className: Object(O.a)(
                        k.StoreSaleItemReview,
                        A.StoreSaleItemReview
                      ),
                    },
                    n.a.createElement(j.b, { appInfo: b })
                  ),
                n.a.createElement(y.b, {
                  rgTagIDs: f.BHasTags()
                    ? f.GetTagIDs()
                    : null == v
                    ? void 0
                    : v.GetTagIDs(),
                  instanceNum: l,
                })
              )
            )
          )
        );
      };
      var N = r("OXjc"),
        L = r("5ZQm"),
        U = r("qpfI"),
        W = r("zWNq");
      const z = (e) => {
          let { displayStyle: t } = e;
          if ("bundle" == e.type || "sub" == e.type)
            return n.a.createElement(V, Object.assign({}, e));
          if (G.d.IN_GAMEPADUI)
            return n.a.createElement(V, Object.assign({}, e));
          switch (
            (!Object(E.a)() ||
              ("library" != t && "animated" != t) ||
              (t = "bordered"),
            t)
          ) {
            case "library":
              return n.a.createElement(x, Object.assign({}, e));
            case "animated":
              return n.a.createElement(P, Object.assign({}, e));
            case "bordered":
            case "full":
            default:
              return n.a.createElement(V, Object.assign({}, e));
          }
        },
        V = Object(a.a)((e) => {
          var t;
          const {
              myInstance: r,
              bIsHovered: a,
              setIsHovered: i,
              displayStoreItem: c,
              baseGameStoreItem: m,
              displayInfo: u,
              purchaseInfo: p,
              hoverType: _,
              nHoverId: h,
              artworkInfo: w,
              artworkStoreItem: I,
            } = Object(S.a)(e),
            {
              bShowDemoButton: E,
              bHidePrice: D,
              bUseSubscriptionLayout: A,
              bHidePlatforms: k,
              bHideContainedApps: P,
              bShowReviewSummary: N,
              bShowDeckCompatibilityDialog: L,
              bAutoFocus: z,
              fnOnClickOverride: V,
            } = e,
            x = Object(R.c)(),
            q = n.a.useMemo(
              () => (null == c ? void 0 : c.GetIncludedAppIDsOrSelf()),
              [c]
            );
          if (!c) return null;
          const Q = c.GetBestPurchaseOption().discount_pct,
            Y = c.GetIncludedAppIDs().length;
          let Z = c.GetShortDescription();
          (2 != c.GetStoreItemType() && 1 != c.GetStoreItemType()) ||
            (Z = Q
              ? Object(T.g)("#Sale_BundleSave_WithDiscount", Q, Y)
              : Object(T.g)("#Sale_BundleSave", Y));
          const J = Object(d.c)(x),
            X = c.GetStorePageURL(),
            $ = Boolean(!P && Y > 0),
            ee = c.BHasTags()
              ? c.GetTagIDs()
              : (null == m ? void 0 : m.BHasTags())
              ? m.GetTagIDs()
              : [],
            te = 0 == c.GetStoreItemType(),
            re = Object(d.b)(X, x);
          return n.a.createElement(
            B.a,
            { appid: te ? c.GetAppID() : void 0 },
            n.a.createElement(
              o.a,
              {
                className: M.a.StoreSaleWidgetOuterContainer,
                onMouseEnter: () => i(!0),
                onMouseLeave: () => i(!1),
                "flow-children": "grid",
                navEntryPreferPosition: l.d.PREFERRED_CHILD,
                autoFocus: z,
              },
              n.a.createElement(
                s.e,
                Object.assign(
                  {
                    className: Object(O.a)(
                      M.a.StoreSaleWidgetContainer,
                      M.a.SaleItemDefaultCapsuleDisplay
                    ),
                  },
                  Object(v.a)(c, x, void 0, V),
                  { preferredFocus: $ }
                ),
                n.a.createElement(
                  "div",
                  { className: Object(O.a)(M.a.StoreSaleWidgetHalfLeft) },
                  n.a.createElement(
                    "a",
                    {
                      href: V ? void 0 : re,
                      target: G.d.IN_CLIENT || V ? void 0 : "_blank",
                      onClick: V,
                    },
                    n.a.createElement(
                      "div",
                      { className: M.a.StoreSaleWidgetImage },
                      n.a.createElement(g.c, { appids: q }),
                      n.a.createElement(K, { info: w, imageType: "header" }),
                      n.a.createElement(C.a, {
                        eDeckCompatibilityCategory:
                          null === (t = c.GetPlatforms()) || void 0 === t
                            ? void 0
                            : t.steam_deck_compat_category,
                      }),
                      Boolean(u && a) && n.a.createElement(W.a, { appInfo: u })
                    )
                  )
                ),
                n.a.createElement(
                  "div",
                  {
                    className: Object(O.a)(
                      M.a.StoreSaleWidgetRight,
                      $ ? M.a.Bundle : ""
                    ),
                  },
                  Boolean(te && !V) &&
                    n.a.createElement(j.c, {
                      appID: u.id,
                      classOverride: Object(O.a)(
                        b.a.WishlistButtonNotTop,
                        "WishlistButton"
                      ),
                      snr: J,
                    }),
                  n.a.createElement(
                    "div",
                    { className: M.a.TitleCtn },
                    n.a.createElement(
                      "a",
                      {
                        href: V ? void 0 : re,
                        target: G.d.IN_CLIENT ? void 0 : "_blank",
                        onClick: V,
                      },
                      n.a.createElement(
                        "div",
                        { className: M.a.StoreSaleWidgetTitle },
                        c.GetName()
                      )
                    )
                  ),
                  n.a.createElement(
                    "div",
                    { className: M.a.StoreSaleWidgetReleaseAndTags },
                    ee &&
                      n.a.createElement(
                        "div",
                        { className: M.a.StoreSaleWidgetTags },
                        ee.map((e) =>
                          n.a.createElement(y.a, {
                            key: "tag_" + e,
                            tagid: e,
                            className: M.a.AppTag,
                          })
                        )
                      ),
                    n.a.createElement(
                      "div",
                      { className: M.a.WidgetReleaseDateAndPlatformCtn },
                      te &&
                        n.a.createElement(
                          "div",
                          { className: M.a.StoreSaleWidgetRelease },
                          c.GetFormattedSteamReleaseDate()
                        ),
                      !k && n.a.createElement(U.a, { item: u })
                    ),
                    N && n.a.createElement(j.b, { appInfo: u })
                  ),
                  $ && n.a.createElement(H, { info: p }),
                  Boolean(te && Z) &&
                    n.a.createElement(
                      "div",
                      {
                        className: Object(O.a)(
                          M.a.StoreSaleWidgetShortDesc,
                          "StoreSaleWidgetShortDesc"
                        ),
                      },
                      Boolean(Z.startsWith("#") && -1 == Z.indexOf(" "))
                        ? n.a.createElement(
                            "span",
                            { className: M.a.LocalizationSpan },
                            Object(T.m)(
                              Z,
                              n.a.createElement("i", null),
                              n.a.createElement("i", null),
                              n.a.createElement("i", null),
                              n.a.createElement("i", null)
                            )
                          )
                        : Z
                    ),
                  Boolean(!V)
                    ? n.a.createElement(
                        n.a.Fragment,
                        null,
                        Boolean(A && te)
                          ? n.a.createElement(F.a, { appid: u.id, bIsMuted: a })
                          : n.a.createElement(f.c, {
                              info: p,
                              bShowDemoButton: E,
                              bHidePrice: D,
                              bHideWishlistButton: !(
                                !G.d.IN_GAMEPADUI && c.BIsComingSoon()
                              ),
                              bShowDeckCompatibilityDialog: L,
                            })
                      )
                    : n.a.createElement(
                        "div",
                        { className: M.a.StoreActionWidgetContainer },
                        n.a.createElement(
                          "div",
                          {
                            className: M.a.StoreSalePriceActionWidgetContainer,
                          },
                          n.a.createElement(f.a, { info: p }),
                          n.a.createElement(
                            "a",
                            {
                              className: Object(O.a)(M.a.Action, "CartBtn"),
                              onClick: V,
                            },
                            Object(T.g)("#Summer2022_opt_in_button")
                          )
                        )
                      ),
                  n.a.createElement(
                    "div",
                    { className: M.a.StoreSaleWidgetBgTint },
                    n.a.createElement(K, { info: u, imageType: "header" })
                  )
                )
              )
            ),
            Boolean(e.strReason) &&
              e.strReason.length > 0 &&
              n.a.createElement(
                "div",
                { className: M.a.RecommendationReason },
                e.strReason
              )
          );
        }),
        x = Object(a.a)((e) => {
          var t, r, a, i, s;
          const {
              myInstance: o,
              setIsHovered: l,
              displayInfo: c,
              displayStoreItem: m,
              hoverType: u,
              nHoverId: p,
              purchaseInfo: _,
            } = Object(S.a)(e, { include_all_purchase_options: !0 }),
            {
              bHidePrice: h,
              bShowDemoButton: v,
              bShowPurchaseOptionsButton: w,
            } = e,
            [I, E] = n.a.useState(!1),
            D = () => E(!I),
            A = Object(R.c)(),
            k = n.a.useMemo(
              () => (null == m ? void 0 : m.GetIncludedAppIDsOrSelf()),
              [m]
            );
          if (!m) return null;
          const F = Object(d.c)(A),
            P = m.GetStorePageURL(),
            W = 0 == m.GetStoreItemType();
          return n.a.createElement(
            B.a,
            { appid: W && m.GetAppID() },
            n.a.createElement(
              "div",
              {
                className: Object(O.a)(
                  M.a.StoreSaleWidgetContainer,
                  M.a.LibraryAssetExpandedDisplay,
                  "LibraryAssetExpandedDisplay"
                ),
              },
              n.a.createElement(
                "div",
                { className: M.a.StoreSaleWidgetLibraryAssetExtendedTop },
                n.a.createElement(
                  "div",
                  { className: Object(O.a)(M.a.StoreSaleWidgetLeft) },
                  n.a.createElement(
                    L.a,
                    { type: u, id: p, fnHoverState: l },
                    n.a.createElement(
                      "div",
                      { className: M.a.StoreSaleWidgetImage },
                      n.a.createElement(g.c, { appids: k }),
                      n.a.createElement(K, { info: c, imageType: "library" }),
                      n.a.createElement(C.a, {
                        eDeckCompatibilityCategory:
                          null === (t = m.GetPlatforms()) || void 0 === t
                            ? void 0
                            : t.steam_deck_compat_category,
                      })
                    )
                  )
                ),
                n.a.createElement(
                  "div",
                  { className: M.a.StoreSaleWidgetCrossCenterRight },
                  n.a.createElement(j.c, {
                    appID: W && m.GetAppID(),
                    classOverride: Object(O.a)(
                      b.a.WishlistButtonNotTop,
                      "WishlistButton"
                    ),
                    snr: F,
                  }),
                  n.a.createElement(
                    "div",
                    { className: M.a.TitleCtn },
                    n.a.createElement(
                      "a",
                      {
                        href: Object(d.b)(P, A),
                        target: G.d.IN_CLIENT ? void 0 : "_blank",
                      },
                      n.a.createElement(
                        "div",
                        { className: M.a.StoreSaleWidgetTitle },
                        m.GetName()
                      )
                    )
                  ),
                  n.a.createElement(
                    "div",
                    { className: M.a.StoreSaleWidgetContents },
                    n.a.createElement(
                      "div",
                      { className: M.a.StoreSaleWidgetCenter },
                      (null === (r = m.GetShortDescription()) || void 0 === r
                        ? void 0
                        : r.length) > 0 &&
                        n.a.createElement(
                          "div",
                          {
                            className: Object(O.a)(
                              M.a.StoreSaleWidgetShortDesc,
                              "StoreSaleWidgetShortDesc"
                            ),
                          },
                          m.GetShortDescription()
                        ),
                      n.a.createElement(y.b, {
                        rgTagIDs: m.GetTagIDs(),
                        instanceNum: o,
                      }),
                      n.a.createElement(
                        "div",
                        { className: M.a.StoreMetaDataCtn },
                        n.a.createElement(
                          "div",
                          { className: M.a.StoreSaleItemRelease },
                          Object(T.p)(
                            "#Sale_ReleaseDate",
                            n.a.createElement(
                              "span",
                              null,
                              m.GetFormattedSteamReleaseDate()
                            )
                          )
                        ),
                        Boolean(
                          null === (a = m.GetDeveloperNames()) || void 0 === a
                            ? void 0
                            : a.length
                        ) &&
                          n.a.createElement(
                            "div",
                            { className: M.a.StoreSaleItemDev },
                            Object(T.g)("#CreatorHome_DevelopedBy"),
                            n.a.createElement(
                              "span",
                              null,
                              m.GetDeveloperNames()[0]
                            )
                          ),
                        Boolean(
                          null === (i = m.GetPublisherNames()) || void 0 === i
                            ? void 0
                            : i.length
                        ) &&
                          n.a.createElement(
                            "div",
                            { className: M.a.StoreSaleItemDev },
                            Object(T.g)("#CreatorHome_PublishedBy"),
                            n.a.createElement(
                              "span",
                              null,
                              m.GetPublisherNames()[0]
                            )
                          )
                      )
                    ),
                    n.a.createElement(
                      "div",
                      { className: M.a.StoreSaleWidgetRight },
                      n.a.createElement(N.a, {
                        info: c,
                        bPopOutTrailerPlayback: !0,
                      })
                    )
                  ),
                  n.a.createElement(
                    "div",
                    { className: M.a.StoreSaleItemReview },
                    n.a.createElement(j.b, { appInfo: c })
                  ),
                  n.a.createElement(
                    "div",
                    { className: M.a.CapsuleBottomBar },
                    n.a.createElement(U.a, { item: c }),
                    n.a.createElement(f.c, {
                      info: _,
                      bShowDemoButton: v,
                      bHidePrice: h,
                      bShowPurchaseOptionsButton: w,
                      fnOnPurchaseOptionsClick: D,
                      bHideWishlistButton: !0,
                    })
                  ),
                  n.a.createElement(
                    "div",
                    { className: M.a.StoreSaleWidgetBgTint },
                    n.a.createElement(J, { info: c }),
                    n.a.createElement(C.a, {
                      eDeckCompatibilityCategory:
                        null === (s = m.GetPlatforms()) || void 0 === s
                          ? void 0
                          : s.steam_deck_compat_category,
                    })
                  )
                )
              ),
              n.a.createElement(f.b, {
                storeItem: m,
                bPurchaseOptionsExpanded: I,
                fnCollapseOptions: D,
              })
            )
          );
        });
      function H(e) {
        const { info: t } = e,
          [r] = Object(_.a)(t.id, Object(p.d)(t.type), {}),
          [a, i] = n.a.useState(null);
        return (
          n.a.useEffect(() => {
            r &&
              (1 == r.GetStoreItemType() || 2 == r.GetStoreItemType()
                ? i(r.GetIncludedAppIDs().map((e) => ({ id: e, type: "game" })))
                : console.error(
                    "ContentsPreviewList unexpected store item type: ",
                    r.GetStoreItemType()
                  ));
          }, [r]),
          a
            ? n.a.createElement(
                "div",
                { className: M.a.BundleContentPreview },
                n.a.createElement(
                  "div",
                  { className: M.a.ContentsCount },
                  Object(T.o)("#Sale_ContentPreview", a.length)
                ),
                n.a.createElement(
                  "div",
                  { className: M.a.PreviewCtn },
                  a
                    .slice(0, 6)
                    .map((e) =>
                      n.a.createElement(q, {
                        key: `preview${e.id}_${e.type}`,
                        info: e,
                      })
                    )
                )
              )
            : null
        );
      }
      function q(e) {
        const { info: t } = e,
          [r] = Object(_.c)(t.id, Object(p.d)(t.type), { include_assets: !0 }),
          a = null == r ? void 0 : r.GetAssets().GetSmallCapsuleURL();
        return n.a.createElement(
          L.a,
          {
            type: Object(B.b)(t.type),
            id: t.id,
            hoverClassName: M.a.PreviewItem,
          },
          n.a.createElement("img", {
            src: a,
            className: M.a.PreviewImg,
            loading: "lazy",
            alt: null == r ? void 0 : r.GetName(),
          })
        );
      }
      const Q = (e) => {
          const {
            info: t,
            bShowAsMuted: r,
            bHidePrice: a,
            bShowInLibraryInsteadOfPrice: i,
            bHidePlatforms: s,
            strClassName: o,
            creatorAccountID: l,
          } = e;
          return n.a.createElement(
            n.a.Fragment,
            null,
            n.a.createElement(
              "div",
              {
                className: Object(O.a)(
                  M.a.CapsuleBottomBar,
                  "CapsuleBottomBar",
                  r && M.a.Muted,
                  o
                ),
              },
              !s && n.a.createElement(U.a, { item: t }),
              !a &&
                n.a.createElement(
                  "span",
                  { className: M.a.BottomBarPriceInfo },
                  n.a.createElement(f.a, { info: t, bShowInLibrary: i })
                )
            ),
            l && n.a.createElement(Y, Object.assign({ creatorAccountID: l }, e))
          );
        },
        Y = (e) => {
          const { creatorAccountID: t, bShowAsMuted: r, strClassName: a } = e,
            [i, s] = Object(m.b)(t);
          return n.a.createElement(
            "div",
            { className: Object(O.a)(M.a.BottomCreatorRow, r && M.a.Muted, a) },
            n.a.createElement("img", {
              className: Object(O.a)(M.a.CreatorLogo),
              src: i ? Object(c.a)(null, "medium") : s.avatar_medium_url,
            }),
            n.a.createElement(
              "span",
              { className: M.a.CreatorName },
              !i && s && s.group_name
            )
          );
        };
      function Z(e, t, r) {
        var a;
        if (
          (t
            ? r.push(
                e.GetAssets().GetHeaderURL(),
                e.GetAssets().GetMainCapsuleURL()
              )
            : r.push(
                e.GetAssets().GetMainCapsuleURL(),
                e.GetAssets().GetHeaderURL()
              ),
          1 ==
            (null === (a = e.GetIncludedAppIDs()) || void 0 === a
              ? void 0
              : a.length))
        ) {
          const a = u.a.Get().GetApp(e.GetIncludedAppIDs()[0]);
          a
            ? t
              ? r.push(
                  a.GetAssets().GetHeaderURL(),
                  a.GetAssets().GetMainCapsuleURL()
                )
              : r.push(
                  a.GetAssets().GetMainCapsuleURL(),
                  a.GetAssets().GetHeaderURL()
                )
            : ("dev" != G.d.WEB_UNIVERSE && "beta" != G.d.WEB_UNIVERSE) ||
              console.log(
                "PushDefaultCapsuleImages single app in package/bundle missing:",
                e.GetIncludedAppIDs()[0]
              );
        }
      }
      function K(e) {
        const { info: t, imageType: r } = e,
          [a] = Object(_.a)(t.id, Object(p.d)(t.type), { include_assets: !0 });
        if ("library" === r) return n.a.createElement(J, { info: t });
        let i = new Array();
        Z(a, "header" === r, i), (i = i.filter((e) => Boolean(e) && "" !== e));
        let s,
          o,
          l = "";
        switch (r) {
          case "main":
            (s = M.a.mainCapsuleImgWidth),
              (o = M.a.mainCapsuleImgHeight),
              (l = M.a.MainCapsuleImageContainer);
            break;
          case "header":
          default:
            (s = M.a.headerCapsuleImgWidth),
              (o = M.a.headerCapsuleImgHeight),
              (l = M.a.HeaderCapsuleImageContainer);
        }
        return n.a.createElement(
          "div",
          { className: l },
          n.a.createElement(I.b, {
            lazyLoad: !0,
            srcs: i,
            className: Object(O.a)(M.a.CapsuleImage),
            width: s,
            height: o,
            alt: a.GetName(),
          })
        );
      }
      function J(e) {
        var t;
        const { info: r } = e,
          [a] = Object(_.a)(r.id, Object(p.d)(r.type), { include_assets: !0 }),
          i = new Array(),
          [s, o] = n.a.useState(null);
        if (
          (i.push(a.GetAssets().GetLibraryCapsuleURL() || ""),
          0 ==
            (null === (t = a.GetIncludedAppIDs()) || void 0 === t
              ? void 0
              : t.length))
        ) {
          const e = u.a.Get().GetApp(a.GetIncludedAppIDs()[0]);
          e &&
            i.push(null == e ? void 0 : e.GetAssets().GetLibraryCapsuleURL());
        }
        const l = i.length - 1;
        return (
          Z(a, !0, i),
          n.a.createElement(
            "div",
            {
              className: s
                ? M.a.LibraryFallbackAssetImageContainer
                : M.a.LibraryAssetImageContainer,
            },
            s &&
              n.a.createElement("div", {
                className: M.a.FallbackBackground,
                style: { backgroundImage: `url(${s})` },
              }),
            n.a.createElement(I.b, {
              lazyLoad: !0,
              srcs: i,
              className: M.a.CapsuleImage,
              width: M.a.libraryAssetImgWidth,
              height: M.a.libraryAssetImgHeight,
              alt: a.GetName(),
              onImageError: (e) => {
                const t = i.indexOf(e);
                t >= l && t < i.length - 1 && o(i[t + 1]);
              },
            })
          )
        );
      }
      const X = Object(a.a)((e) => {
        const t = T.a.GetWithFallback(
          e.link.localized_link_capsule,
          e.language
        );
        return n.a.createElement(
          w.b,
          {
            url: e.link.url,
            className: e.strClassName ? e.strClassName : void 0,
          },
          n.a.createElement(
            "div",
            { className: M.a.CapsuleContainer },
            Boolean(e.link.localized_link_capsule) &&
              n.a.createElement("img", {
                className: M.a.LinkCapsuleImage,
                src:
                  G.d.MEDIA_CDN_COMMUNITY_URL +
                  `images/clans/${e.clanAccountID}/${t}`,
              }),
            Boolean(e.link.materialized_link_capsule) &&
              n.a.createElement("img", {
                className: M.a.LinkCapsuleImage,
                src: e.link.materialized_link_capsule,
              })
          )
        );
      });
    },
    "5ZQm": function (e, t, r) {
      "use strict";
      r.d(t, "b", function () {
        return c;
      }),
        r.d(t, "a", function () {
          return d;
        });
      var a = r("q1tI"),
        i = r("lfGQ"),
        n = (r("hCpY"), r("/Q1a")),
        s = r("0JCO"),
        o = r("fsrB"),
        l = r("f5iL");
      function c(e) {
        const {
            type: t,
            id: r,
            hoverClassName: i,
            fnGetIDOverride: s,
            fnHoverState: o,
            children: c,
          } = e,
          d = a.useRef(null),
          m = a.useCallback(
            (e) => {
              "clan" != t &&
                (o && o(!0),
                window.GameHover &&
                  window.GameHover(s ? s() : d.current, e, "global_hover", {
                    type: t,
                    id: r,
                    v6: 1,
                  }));
            },
            [t, o, s, r]
          ),
          u = a.useCallback(
            (e) => {
              "clan" != t &&
                (o && e.relatedTarget && o(!1),
                window.HideGameHover &&
                  window.HideGameHover(s ? s() : d.current, e, "global_hover"));
            },
            [t, o, s]
          );
        return (
          "dev" == n.d.WEB_UNIVERSE &&
            Object(l.a)(
              "store" == Object(n.g)(),
              "StoreGameHoverAnchorSource only works on Store web properties"
            ),
          a.createElement(
            "div",
            {
              ref: d,
              className: i,
              onMouseEnter: m,
              onMouseLeave: u,
              onFocus: m,
              onBlur: u,
            },
            c
          )
        );
      }
      function d(e) {
        const { id: t, type: r, strExtraParams: l } = e,
          d = Object(s.c)(),
          m =
            "clan" == r
              ? Object(i.b)(
                  `${n.d.STORE_BASE_URL}curator/${t}${l ? `?${l}` : ""}`,
                  d
                )
              : Object(i.b)(
                  `${n.d.STORE_BASE_URL}${r}/${t}${l ? `?${l}` : ""}`,
                  d
                );
        return a.createElement(
          c,
          Object.assign({}, e),
          a.createElement(
            o.c,
            {
              className: e.className,
              href: m,
              target: n.d.IN_CLIENT ? void 0 : "_blank",
              rel: "noopener noreferrer",
            },
            e.children
          )
        );
      }
    },
    "6ese": function (e, t, r) {
      "use strict";
      r.d(t, "c", function () {
        return R;
      }),
        r.d(t, "b", function () {
          return D;
        }),
        r.d(t, "a", function () {
          return A;
        });
      var a = r("mrSG"),
        i = r("vDqi"),
        n = r.n(i),
        s = r("2vnA"),
        o = r("wd/R"),
        l = (r("msu0"), r("Zdsb"), r("/4gK")),
        c = (r("XrGS"), r("oleE")),
        d = r("AM5O"),
        m = r("KVor"),
        u = r("Ys0h"),
        p = r("upZW"),
        _ = (r("sTxY"), r("f5iL")),
        h = r("TqgT"),
        b = r("vYsE"),
        g = r("GXif"),
        S = r("/Q1a"),
        f = r("FmLm"),
        v = r("VJsr"),
        y = r("MKRT"),
        B = r("2t98"),
        w = r("ue1x"),
        C = r("IEEs");
      function I(e, t, r, a) {
        return {
          strId: "section-" + t,
          strSectionLabel: t,
          rtSectionStart: r,
          rtSectionEnd: a,
          bIsFutureSection: r >= e,
          nRenderedHeight: 2500,
          nTopOffset: 0,
        };
      }
      class E {
        constructor(e) {
          (this.m_nForwardStuckCount = 0),
            (this.m_nBackwardStuckCount = 0),
            (this.m_mapCalendarAppsByID = new Map()),
            (this.m_mapCalendarClansByID = new Map()),
            (this.m_mapCalendarEventsByGid = new Map()),
            (this.m_rgSortedCalendarEvents = new Array()),
            (this.m_visibilityStore = new y.a()),
            (this.m_currentView = s.C.box(null)),
            (this.m_bFinishedSearchingForward = !1),
            (this.m_bFinishedSearchingBackward = !1),
            (this.m_rgCalendarSections = []),
            (this.m_rgFutureSections = []),
            (this.m_collectionMetaData = void 0),
            (this.m_key = e),
            f.a.Get().HintLoad();
        }
        GetNumEventsLoaded() {
          return this.m_mapCalendarEventsByGid.size;
        }
        BIsGlobalCalendar() {
          return !(
            this.m_key.appids ||
            this.m_key.clanaccountids ||
            this.m_key.collectionid ||
            this.m_key.saleid
          );
        }
        BIsShowingFeaturedFeed() {
          return Boolean(
            this.GetCollectionID() === B.a.Featured ||
              (this.BIsGlobalCalendar() && !S.l.accountid)
          );
        }
        BIsSingleSourceCalendar() {
          return Boolean(
            this.BIsSingleGroupCalendar()
              ? !this.BIsSingleAppCalendar()
              : this.BIsSingleAppCalendar()
          );
        }
        GetKey() {
          return this.m_key;
        }
        BEventMatchCalendarSingleSource(e) {
          return (
            (this.BIsSingleAppCalendar() && this.m_key.appids[0] == e.appid) ||
            (this.BIsSingleGroupCalendar() &&
              this.m_key.clanaccountids[0] == e.clanid)
          );
        }
        BIsSingleSourceMuted() {
          return (
            !!this.BIsSingleSourceCalendar() &&
            (this.BIsSingleAppCalendar()
              ? C.a.Get().BIsMutedAppID(this.GetSingleAppID())
              : C.a.Get().BIsMutedClanID(this.GetSingleGroupID()))
          );
        }
        BIsSingleGroupCalendar() {
          return Boolean(
            this.m_key.clanaccountids && 1 == this.m_key.clanaccountids.length
          );
        }
        GetSingleGroupID() {
          return this.m_key.clanaccountids[0];
        }
        BIsSingleAppCalendar() {
          return Boolean(this.m_key.appids && 1 == this.m_key.appids.length);
        }
        GetSingleAppID() {
          return this.m_key.appids[0];
        }
        BIsCollectionCalendar() {
          return !!this.m_key.collectionid;
        }
        GetCollectionID() {
          return this.m_key.collectionid;
        }
        BIsSaleCalendar() {
          return !!this.m_key.saleid;
        }
        GetSaleID() {
          return this.m_key.saleid;
        }
        BIsCalendarEndTimeSet() {
          return !!this.m_key.rtCalendarEnd;
        }
        GetCalendarEndTime() {
          return this.m_key.rtCalendarEnd;
        }
        SetCollectionMetaData(e) {
          this.m_collectionMetaData = e;
        }
        GetCollectionMetaData() {
          return this.m_collectionMetaData;
        }
        BHasCollectionMetaData() {
          return Boolean(this.m_collectionMetaData);
        }
        ValidateCollectionMetadata(e) {
          const t = e;
          return (
            t &&
            "object" == typeof t &&
            t.clanid &&
            "number" == typeof t.clanid &&
            t.clan_event_gid &&
            "string" == typeof t.clan_event_gid
          );
        }
        SetFilteredView(e, t) {
          const r = this.m_currentView.get();
          r && r.dispose();
          const a = this.BIsSingleSourceMuted(),
            i = new O(
              () => this.m_rgSortedCalendarEvents,
              this.LoadAdditionalEvents,
              this.BHitEventHorizon,
              e,
              t,
              a
            );
          this.m_currentView.set(i);
        }
        BIsFilteredViewEmpty() {
          var e;
          return !!(null === (e = this.m_currentView.get()) || void 0 === e
            ? void 0
            : e.BIsViewEmpty());
        }
        GetCalendarItemsInTimeRange(e, t) {
          const r = this.m_currentView.get();
          return r
            ? r.GetCalendarItemsInTimeRange(e, t)
            : (console.error("calendar view not yet initialized"),
              { rgCalendarItems: [], bIsComplete: !1 });
        }
        GetActiveEventsAt(e) {
          const t = this.m_currentView.get();
          return t
            ? t.GetActiveEventsAt(e)
            : (console.error("calendar view not yet initialized"), []);
        }
        GetCurrentlyLoadedEventCount(e, t) {
          var r;
          return null === (r = this.m_currentView.get()) || void 0 === r
            ? void 0
            : r.GetCurrentlyLoadedEventCount(e, t);
        }
        GetCurrentlyLoadedItemsForStats() {
          var e;
          return (
            (null === (e = this.m_currentView.get()) || void 0 === e
              ? void 0
              : e.GetCurrentlyLoadedEvents()) || []
          );
        }
        GetCalendarSections(e) {
          return e ? this.m_rgFutureSections : this.m_rgCalendarSections;
        }
        GetStoreInitializationTimestamp() {
          return (
            this.m_dtInitTime ||
              (this.m_dtInitTime = w.a.GetTimeNowWithOverrideAsDate()),
            this.m_dtInitTime
          );
        }
        InitCalendarSections() {
          const e = this.GetStoreInitializationTimestamp(),
            t = [],
            r = e.getTime() / 1e3;
          t.push(I(r, Object(g.g)("#EventCalendar_FutureEventsHeader"), r));
          const a = new Date(e);
          a.setHours(0, 0, 0, 1);
          let i = a.getTime() / 1e3;
          t.push(I(r, Object(g.g)("#Time_Today"), i, r)),
            a.setDate(a.getDate() - 1);
          let n = i;
          (i = a.getTime() / 1e3),
            t.push(I(r, Object(g.g)("#Time_Yesterday"), i, n));
          const s =
              this.m_rgSortedCalendarEvents[
                this.m_rgSortedCalendarEvents.length - 1
              ],
            o = s ? s.start_time : r;
          let l = o > i;
          for (let e = 0; e < 5 && !l; e++)
            a.setDate(a.getDate() - 1),
              (n = i),
              (i = a.getTime() / 1e3),
              t.push(I(r, Object(g.i)(a), i, n)),
              (l = o > i);
          const c = new Date(a);
          let d = i;
          for (; c.getMonth() == e.getMonth() && 1 != c.getDate() && !l; ) {
            c.setDate(c.getDate() - 7);
            const e = c.getTime() / 1e3;
            t.push(I(r, Object(g.h)(d - 1), e, d)), (l = o > e), (d = e);
          }
          const m = new Date(e);
          m.setHours(0, 0, 0, 1), m.setDate(1);
          let u = d;
          for (let a = 1; !l; a++) {
            const i = new Date(m);
            i.setMonth(e.getMonth() - a, 1);
            const n = i.getTime() / 1e3;
            t.push(I(r, Object(g.h)(n), n, u)), (l = o > n), (u = n);
          }
          this.m_rgCalendarSections.length > t.length
            ? this.m_rgCalendarSections.splice(
                t.length,
                this.m_rgCalendarSections.length
              )
            : t
                .splice(this.m_rgCalendarSections.length, t.length)
                .forEach((e) => this.m_rgCalendarSections.push(e));
        }
        InitFutureCalendarSections() {
          const e = this.GetStoreInitializationTimestamp(),
            t = [];
          let r;
          this.m_key.rtCalendarEnd && (r = this.m_key.rtCalendarEnd);
          const a =
            this.m_rgSortedCalendarEvents.length > 0 &&
            this.m_rgSortedCalendarEvents[0];
          a && (r = a.start_time), r || (r = e.getTime() / 1e3);
          const i = e.getTime() / 1e3,
            n = new Date(e);
          n.setHours(24, 0, 0, 0);
          let s = n.getTime() / 1e3;
          t.push(
            I(
              i,
              Object(g.g)(
                this.m_key.bSectionByDay ? "#Time_UpNext" : "#Time_Today"
              ),
              i,
              s
            )
          );
          let l = r <= s,
            c = s;
          n.setDate(n.getDate() + 1),
            (s = n.getTime() / 1e3),
            l || t.push(I(i, Object(g.g)("#Time_Tomorrow"), c, s)),
            (l = r <= s);
          const d = 6 - o(e).weekday();
          for (let e = 2; e <= d && !l; e++) {
            c = s;
            const e = Object(g.i)(n);
            n.setDate(n.getDate() + 1),
              (s = n.getTime() / 1e3),
              t.push(I(i, e, c, s)),
              (l = r <= s);
          }
          if (this.m_key.bSectionByDay)
            for (; !l; ) {
              c = s;
              const e = Object(g.j)(n);
              n.setDate(n.getDate() + 1),
                (s = n.getTime() / 1e3),
                t.push(I(i, e, c, s)),
                (l = r <= s);
            }
          else {
            const a = new Date(n);
            let c = s;
            const d = o(e).daysInMonth();
            if (a.getMonth() == e.getMonth() && a.getDate() != d && !l) {
              a.setDate(a.getDate() + 7);
              const e = a.getTime() / 1e3;
              t.push(I(i, Object(g.g)("#EventCalendar_NextWeek"), c, e)),
                (l = r <= e),
                (c = e);
            }
            const m = new Date(e);
            let u;
            if (
              (m.setMonth(m.getMonth() + 1),
              m.setDate(1),
              m.setHours(0, 0, 0, 0),
              a < m && !l)
            ) {
              const e = m.getTime() / 1e3;
              t.push(I(i, Object(g.g)("#EventCalendar_LaterThisMonth"), c, e)),
                (l = r <= e),
                (u = e);
            } else u = c;
            for (let a = 2; !l; a++) {
              const n = new Date(m);
              n.setMonth(e.getMonth() + a);
              const s = n.getTime() / 1e3;
              t.push(I(i, Object(g.h)(u), u, s)), (l = r <= s), (u = s);
            }
          }
          this.m_rgFutureSections.length > t.length
            ? this.m_rgFutureSections.splice(
                t.length,
                this.m_rgFutureSections.length
              )
            : t
                .splice(this.m_rgFutureSections.length, t.length)
                .forEach((e) => this.m_rgFutureSections.push(e));
        }
        RegisterCalendarEventsAndModels(e) {
          return Object(a.a)(this, void 0, void 0, function* () {
            yield f.a.Get().HintLoad(),
              Object(s.G)(() => {
                this.RegisterCalendarApps(e.apps),
                  this.RegisterCalendarClans(e.clans),
                  this.RegisterCalendarEvents(e.documents),
                  m.b.RegisterClanEvents(e.events),
                  this.RegisterReadEvents(e.events_read),
                  this.RegisterEventVotes(e.event_votes),
                  e.forwardComplete && (this.m_bFinishedSearchingForward = !0),
                  e.backwardComplete &&
                    (this.m_bFinishedSearchingBackward = !0),
                  this.InitCalendarSections(),
                  this.InitFutureCalendarSections(),
                  this.SetCollectionMetaData(
                    this.ValidateCollectionMetadata(e.metadatainfo)
                      ? e.metadatainfo
                      : null
                  );
              });
          });
        }
        RegisterCalendarApps(e) {
          if (e)
            for (const t of e) {
              if (this.m_mapCalendarAppsByID.has(t.appid)) continue;
              const e = new l.b();
              (e.appid = t.appid),
                (e.source = t.source),
                (e.playtime = t.playtime),
                (e.last_played = t.last_played),
                (e.wishlist_added = t.wishlist_added),
                this.m_mapCalendarAppsByID.set(t.appid, e);
            }
        }
        RegisterCalendarClans(e) {
          if (e)
            for (const t of e)
              if (!this.m_mapCalendarClansByID.has(t.clanid)) {
                const e = new l.c();
                (e.clanid = t.clanid),
                  (e.source = t.source),
                  this.m_mapCalendarClansByID.set(t.clanid, e);
              }
        }
        RegisterReadEvents(e) {
          if (!e) return;
          const t = d.a.Get();
          for (const r of e) t.SetEventAsRead(r);
        }
        RegisterEventVotes(e) {
          if (!e) return;
          const t = d.a.Get();
          for (const r of e) {
            const e = void 0 === r.vote ? void 0 : Boolean(r.vote);
            t.SetVote(r.id, e);
          }
        }
        RegisterCalendarEvents(e) {
          if (e) {
            let t = !1;
            for (const r of e)
              this.BInternalInsertCalendarEventItem(r) && (t = !0);
            t && this.RebuildSortedCalendarEventList();
          }
        }
        BHitEventHorizon(e) {
          return "forward" == e
            ? this.m_bFinishedSearchingForward
            : this.m_bFinishedSearchingBackward;
        }
        GetTimeEdgeForDirection(e, t) {
          return "forward" === e
            ? this.m_rgSortedCalendarEvents.length > 0
              ? this.m_rgSortedCalendarEvents[0].start_time
              : t
            : this.m_rgSortedCalendarEvents.length > 0
            ? this.m_rgSortedCalendarEvents[
                this.m_rgSortedCalendarEvents.length - 1
              ].start_time
            : t;
        }
        UpdateStuckCounters(e, t) {
          const r =
              "forward" === e
                ? this.m_bFinishedSearchingForward
                : this.m_bFinishedSearchingBackward,
            a = this.GetTimeEdgeForDirection(e, void 0);
          return r || a !== t
            ? ("forward" == e
                ? (this.m_nForwardStuckCount = 0)
                : (this.m_nBackwardStuckCount = 0),
              !1)
            : ("forward" == e
                ? this.m_nForwardStuckCount++
                : this.m_nBackwardStuckCount++,
              !0);
        }
        GetRequestInFlight(e) {
          return "forward" === e
            ? this.m_forwardRequestInFlight
            : this.m_backwardRequestInFlight;
        }
        SetRequestInFlight(e, t) {
          Object(_.a)(
            !t || !this.GetRequestInFlight(e),
            "Already have a request in flight for",
            e
          ),
            "forward" === e
              ? (this.m_forwardRequestInFlight = t)
              : (this.m_backwardRequestInFlight = t);
        }
        LoadAdditionalEvents(e, t) {
          return Object(a.a)(this, void 0, void 0, function* () {
            if (this.BHitEventHorizon(e)) return 1;
            let r = this.GetRequestInFlight(e);
            if (r) return r;
            const i =
                S.d.STORE_BASE_URL + "events/ajaxgetusereventcalendarrange/",
              s =
                "forward" === e
                  ? this.m_nForwardStuckCount
                  : this.m_nBackwardStuckCount,
              o = s < 3 ? s : 0,
              l = s >= 3 ? 1 : 0,
              c = ("dev" === S.d.WEB_UNIVERSE ? 50 : 250) + 50 * o,
              d = this.GetTimeEdgeForDirection(e, w.a.GetTimeNowWithOverride()),
              m = {
                minTime: 0,
                maxTime: 0,
                ascending: !0,
                maxResults: c,
                populateEvents: 15,
                appTypes: this.m_visibilityStore.GetGameSources().join(","),
                eventTypes: Array.from(
                  this.m_visibilityStore.enabledEventTypeSet
                ).join(","),
                appIdFilter: Boolean(
                  this.m_key.appids && this.m_key.appids.length > 0
                )
                  ? this.m_key.appids.sort().join(",")
                  : void 0,
                clanIdFilter: Boolean(
                  this.m_key.clanaccountids &&
                    this.m_key.clanaccountids.length > 0
                )
                  ? this.m_key.clanaccountids.sort().join(",")
                  : void 0,
                collectionID: this.m_key.collectionid,
                saleID: this.m_key.saleid,
                hubtype: this.m_key.hubtype,
                category_or_language: this.m_key.category_or_language,
                tag_name: this.m_key.tag_name,
                tags: this.m_key.rgTags
                  ? this.m_key.rgTags.sort().join(",")
                  : void 0,
              };
            "forward" === e
              ? ((m.minTime = Math.floor(d + l)), (m.ascending = !0))
              : ((m.maxTime = Math.floor(d - l)), (m.ascending = !1));
            return (
              (r = n.a
                .get(i, {
                  params: m,
                  cancelToken: t ? t.token : void 0,
                  withCredentials: !0,
                })
                .then((r) =>
                  Object(a.a)(this, void 0, void 0, function* () {
                    if (
                      (this.SetRequestInFlight(e, null), 1 == r.data.success)
                    ) {
                      if (
                        (yield this.RegisterCalendarEventsAndModels(r.data),
                        this.UpdateStuckCounters(e, d))
                      )
                        return this.LoadAdditionalEvents(e, t);
                    } else console.error("LoadAdditionalEvents was not successful: Msg" + r.data.msg);
                    return r.data.success;
                  })
                )
                .catch((t) => {
                  this.SetRequestInFlight(e, null);
                  let r = Object(h.a)(t);
                  return (
                    console.error(
                      "LoadAdditionalEvents hit error " + r.strErrorMsg,
                      r
                    ),
                    "forward" == e
                      ? (this.m_bFinishedSearchingForward = !0)
                      : (this.m_bFinishedSearchingBackward = !0),
                    2
                  );
                })),
              this.SetRequestInFlight(e, r),
              r
            );
          });
        }
        BInternalInsertCalendarEventItem(e) {
          if (!e.unique_id)
            return (
              Object(_.a)(
                !1,
                "Attmpted to register a calendar event item with an invalid unique id!"
              ),
              !1
            );
          if (this.m_mapCalendarEventsByGid.has(e.unique_id)) return !1;
          const t = this.m_mapCalendarAppsByID.get(e.appid),
            r = this.m_mapCalendarClansByID.get(e.clanid);
          if (!t && !r)
            return console.log("No AppInfo or ClanInfo For: ", e), !1;
          const a = new l.d();
          return (
            (a.clanid = e.clanid),
            (a.unique_id = e.unique_id),
            (a.event_type = e.event_type),
            (a.appid = e.appid),
            (a.start_time = e.start_time),
            (a.score = e.score),
            (a.appInfo = t),
            (a.clanInfo = r),
            this.m_rgSortedCalendarEvents.push(a),
            this.m_mapCalendarEventsByGid.set(a.unique_id, a),
            !0
          );
        }
        GetCalendarAppInfoForAppID(e) {
          return this.m_mapCalendarAppsByID.get(e);
        }
        RebuildSortedCalendarEventList() {
          const e = this.m_rgSortedCalendarEvents.slice();
          this.m_rgSortedCalendarEvents = e.sort(
            (e, t) => t.start_time - e.start_time
          );
        }
        UpdateEventBlockFromCalendarEvent(e, t) {
          return Object(a.a)(this, void 0, void 0, function* () {
            let r = e.appInfo ? e.appid : void 0,
              a = e.clanInfo ? e.clanInfo.clanid : void 0;
            null != r || null != a
              ? (yield C.a.Get().UpdateCommunitionSetting(t, r, a),
                v.b.RecordAppInteractionEvent(r, v.a.k_eMuted))
              : Object(_.a)(
                  !1,
                  "Both clan id and account id are missing, cannot change communication status"
                );
          });
        }
      }
      Object(a.b)([s.C], E.prototype, "m_mapCalendarEventsByGid", void 0),
        Object(a.b)([s.C], E.prototype, "m_rgSortedCalendarEvents", void 0),
        Object(a.b)([s.C], E.prototype, "m_bFinishedSearchingForward", void 0),
        Object(a.b)([s.C], E.prototype, "m_bFinishedSearchingBackward", void 0),
        Object(a.b)([s.C], E.prototype, "m_rgCalendarSections", void 0),
        Object(a.b)([s.C], E.prototype, "m_rgFutureSections", void 0),
        Object(a.b)([s.C], E.prototype, "m_collectionMetaData", void 0),
        Object(a.b)([s.k], E.prototype, "InitCalendarSections", null),
        Object(a.b)([s.k], E.prototype, "InitFutureCalendarSections", null),
        Object(a.b)(
          [s.k],
          E.prototype,
          "RegisterCalendarEventsAndModels",
          null
        ),
        Object(a.b)([s.k], E.prototype, "RegisterCalendarApps", null),
        Object(a.b)([s.k], E.prototype, "RegisterCalendarClans", null),
        Object(a.b)([s.k], E.prototype, "RegisterReadEvents", null),
        Object(a.b)([s.k], E.prototype, "RegisterEventVotes", null),
        Object(a.b)([s.k], E.prototype, "RegisterCalendarEvents", null),
        Object(a.b)([b.a], E.prototype, "BHitEventHorizon", null),
        Object(a.b)([s.k.bound], E.prototype, "LoadAdditionalEvents", null),
        Object(a.b)(
          [s.k],
          E.prototype,
          "UpdateEventBlockFromCalendarEvent",
          null
        );
      class O {
        constructor(e, t, r, i, n, o) {
          (this.m_rgLoadedEventsBox = s.C.box([])),
            (this.m_lastLoadLatch = null),
            (this.m_fnGetUnfilteredEvents = e),
            (this.m_fnLoadAdditionalEvents = t),
            (this.m_fnBHitEventHorizon = r),
            (this.m_fnBIsEventInView = i),
            (this.m_bSkipStorePreferenceCheck = n),
            (this.m_bAllowMutedAndIgnoredSources = o),
            (this.m_rgAutorunDisposer = Object(s.l)(() =>
              Object(a.a)(this, void 0, void 0, function* () {
                const e = this.viewFilteredEvents.slice();
                if (!this.m_bSkipStorePreferenceCheck) {
                  const t = Array.from(
                    new Set(e.map((e) => e.appid).filter(Boolean))
                  ).sort();
                  if (
                    ((this.m_lastLoadLatch = e),
                    yield u.a
                      .Get()
                      .QueueMultipleAppRequests(
                        t,
                        Object.assign(Object.assign({}, p.i), {
                          include_assets: !0,
                        })
                      ),
                    this.m_lastLoadLatch != e)
                  )
                    return;
                  this.m_lastLoadLatch = null;
                }
                this.m_rgLoadedEventsBox.set(e);
              })
            ));
        }
        dispose() {
          this.m_rgAutorunDisposer();
        }
        get viewFilteredEvents() {
          return this.m_fnGetUnfilteredEvents().filter((e) =>
            this.m_fnBIsEventInView(e)
          );
        }
        get filteredAndCheckedEvents() {
          return this.m_rgLoadedEventsBox.get().filter((e) => {
            if (e.appid) {
              if (
                !this.m_bAllowMutedAndIgnoredSources &&
                (C.a.Get().BIsMutedAppID(e.appid) ||
                  f.a.Get().BIsGameIgnored(e.appid))
              )
                return !1;
              if (
                !this.m_bSkipStorePreferenceCheck &&
                Object(p.e)(u.a.Get().GetApp(e.appid))
              )
                return !1;
            } else if (
              !this.m_bAllowMutedAndIgnoredSources &&
              (C.a.Get().BIsMutedClanID(e.clanid) ||
                f.a.Get().BIsIgnoringCurator(c.a.InitFromClanID(e.clanid)))
            )
              return !1;
            return !0;
          });
        }
        BIsCompleteThroughTime(e, t) {
          if (this.m_fnBHitEventHorizon(e)) return !0;
          const r = this.m_fnGetUnfilteredEvents();
          return "forward" === e
            ? t && r.length > 0 && r[0].start_time > t
            : r.length > 0 && r[r.length - 1].start_time < t;
        }
        EnsureRangeIsLoaded(e, t) {
          return Object(a.a)(this, void 0, void 0, function* () {
            for (
              let e = 0;
              e < 100 && !this.BIsCompleteThroughTime("forward", t);
              e++
            )
              yield this.m_fnLoadAdditionalEvents("forward");
            for (
              let t = 0;
              t < 100 && !this.BIsCompleteThroughTime("backward", e);
              t++
            )
              yield this.m_fnLoadAdditionalEvents("backward");
          });
        }
        GetCalendarItemsInTimeRange(e, t) {
          this.EnsureRangeIsLoaded(e, t);
          const r = this.filteredAndCheckedEvents.filter(
              (r) => r.start_time >= e && (!t || r.start_time < t)
            ),
            a = this.BIsCompleteThroughTime("forward", t),
            i = this.BIsCompleteThroughTime("backward", e);
          return { rgCalendarItems: r, bIsComplete: a && i };
        }
        GetCurrentlyLoadedEvents() {
          return this.filteredAndCheckedEvents;
        }
        GetCurrentlyLoadedEventCount(e, t) {
          let r = 0;
          this.filteredAndCheckedEvents.forEach((a) => {
            a.start_time >= e && (!t || a.start_time < t) && r++;
          });
          const a = this.BIsCompleteThroughTime("forward", t),
            i = this.BIsCompleteThroughTime("backward", e);
          return { nCount: r, bIsComplete: a && i };
        }
        BIsViewEmpty() {
          return this.filteredAndCheckedEvents.length > 0;
        }
        GetActiveEventsAt(e) {
          return this.filteredAndCheckedEvents
            .map((e) => m.b.GetClanEventModel(e.unique_id))
            .filter((t) => {
              if (t) {
                const r = t.endTime || t.startTime + 3600;
                return e >= t.startTime && e < r;
              }
              return !1;
            });
        }
      }
      Object(a.b)([s.n.struct], O.prototype, "viewFilteredEvents", null),
        Object(a.b)(
          [s.n.struct],
          O.prototype,
          "filteredAndCheckedEvents",
          null
        );
      const T = s.C.box(null),
        G = new Map();
      function R(e) {
        let t = "";
        return (
          e.appids &&
            e.appids.length > 0 &&
            (t += "appids:" + e.appids.sort().join(",")),
          e.clanaccountids &&
            e.clanaccountids.length > 0 &&
            (t += "clanids:" + e.clanaccountids.sort().join(",")),
          e.collectionid && (t += "collection:" + e.collectionid),
          e.saleid && (t += "sale:" + e.saleid),
          e.bSectionByDay && (t += "_sectionbyday"),
          e.rtCalendarEnd && (t += "_end:" + e.rtCalendarEnd),
          e.rgTags &&
            e.rgTags.length > 0 &&
            (t += "_tags:" + e.rgTags.sort().join(",")),
          e.hubtype &&
            (t +=
              "_hubtype:" +
              e.hubtype +
              "_" +
              e.category_or_language +
              "_" +
              e.tag_name),
          T.get() !== t && (T.set(t), G.has(t) || G.set(t, new E(e))),
          t
        );
      }
      function D() {
        return null == T.get() && R({}), G.get(T.get());
      }
      function A() {
        return null !== T;
      }
      window.g_EventCalendarMap = G;
    },
    "6iBs": function (e, t, r) {
      "use strict";
      r.d(t, "a", function () {
        return n;
      });
      var a = r("/Q1a"),
        i = (r("msu0"), r("2vnA"));
      class n {
        constructor(e) {
          (this.m_nLastUpdated = 0),
            (this.m_mapLanguages = i.C.map()),
            (this.m_fetching = null),
            (this.m_appid = e);
        }
        GetAppID() {
          return this.m_appid;
        }
        GetTokenList(e) {
          return this.m_mapLanguages.has(e) ? this.m_mapLanguages.get(e) : null;
        }
        Localize(e, t) {
          let r = a.d.LANGUAGE;
          return s(
            e,
            this.GetTokenList(r),
            "english" != r ? this.GetTokenList("english") : null,
            this.m_appid,
            t
          );
        }
        SubstituteParams(e, t) {
          let r = a.d.LANGUAGE;
          return o(
            e,
            this.GetTokenList(r),
            "english" != r ? this.GetTokenList("english") : null,
            this.m_appid,
            t
          );
        }
      }
      function s(e, t, r, i, n) {
        if (!e.startsWith("#"))
          return console.log("Token doesn't start with #:", e), "";
        let s = e;
        e = e.toLowerCase();
        let l = "";
        if (
          (t && t.has(e) && (l = t.get(e)),
          !l && r && r.has(e) && (l = r.get(e)),
          l)
        )
          l = o(l, t, r, i, n);
        else if (
          ((t || r) &&
            console.log(
              "No loc found for appid",
              i,
              s,
              "Tokens:",
              t,
              "Fallback:",
              r
            ),
          t && 1 != a.d.EUNIVERSE)
        )
          return e;
        return l;
      }
      function o(e, t, r, a, i) {
        let n = e.match(/{[A-za-z0-9_%#:]+}/g);
        if (n)
          for (let o of n) {
            let n = s(l(o.slice(1, -1), i), t, r, a, i);
            if (!n) return "";
            e = e.replace(o, n);
          }
        return (e = l(e, i));
      }
      function l(e, t) {
        let r = e.match(/%[A-Za-z0-9_:]+%/g);
        if (r)
          for (let a of r) {
            let r = a.slice(1, -1).toLowerCase(),
              i = t.get(r);
            null == i
              ? console.log("No rich presence found for", r)
              : (e = e.replace(a, i));
          }
        return e;
      }
    },
    "7YTu": function (e, t, r) {
      e.exports = {
        "duration-app-launch": "800ms",
        HoverContentTransition: "gamehover_HoverContentTransition_bHRhS",
        Opening: "gamehover_Opening_2PI0b",
        Open: "gamehover_Open_3mLjE",
        GameHoverCapsuleCtn: "gamehover_GameHoverCapsuleCtn_2li11",
        UseHidingBottomHalf: "gamehover_UseHidingBottomHalf_1rrny",
        TrailerAnchorStoreLink: "gamehover_TrailerAnchorStoreLink_3g5H8",
        TrailerCtn: "gamehover_TrailerCtn_cod6x",
        FullDivImage: "gamehover_FullDivImage_21bQ8",
        Transparent: "gamehover_Transparent_It975",
        Midline: "gamehover_Midline_FsH84",
        Price: "gamehover_Price_2vwJC",
        CapsuleImageAnchorPoint: "gamehover_CapsuleImageAnchorPoint_vz3R8",
        CapsuleImageCtn: "gamehover_CapsuleImageCtn_24k9v",
        WithCornerShine: "gamehover_WithCornerShine_FyIWp",
        DemoButton: "gamehover_DemoButton_3c60u",
        WishlistButton: "gamehover_WishlistButton_1l89v",
        WishlistButtonText: "gamehover_WishlistButtonText_-ne-j",
        WishlistLoadingText: "gamehover_WishlistLoadingText_3XYZ8",
        WishlistButtonNotTop: "gamehover_WishlistButtonNotTop_2onG_",
        BottomShelf: "gamehover_BottomShelf_2tBkj",
        BottomShelfOffScreen: "gamehover_BottomShelfOffScreen_Vseoa",
        TextContent: "gamehover_TextContent_2ghgg",
        GameTitle: "gamehover_GameTitle_mrkD1",
        TagRow: "gamehover_TagRow_1BII7",
        Tags: "gamehover_Tags_391na",
        Tag: "gamehover_Tag_3p0BT",
        PlatformDisplay: "gamehover_PlatformDisplay_3zRPV",
        ReviewsAndRelease: "gamehover_ReviewsAndRelease_PbxRe",
        ReleaseDate: "gamehover_ReleaseDate_LKDVV",
        ReleasePrefix: "gamehover_ReleasePrefix_Ziapj",
        ReviewScore: "gamehover_ReviewScore_24NyY",
        ReviewScoreHeader: "gamehover_ReviewScoreHeader_2SFxx",
        ReviewScoreCount: "gamehover_ReviewScoreCount_1Deyv",
        ReviewScoreValue: "gamehover_ReviewScoreValue_2SbZz",
        ReviewScoreLow: "gamehover_ReviewScoreLow_3Eeb4",
        ReviewScoreMixed: "gamehover_ReviewScoreMixed_2BVpb",
        ReviewScoreHigh: "gamehover_ReviewScoreHigh_1Emes",
        ReviewScorePercentage: "gamehover_ReviewScorePercentage_28Zbk",
        GameHoverCreatorFollowButtonCtn:
          "gamehover_GameHoverCreatorFollowButtonCtn_O8IT4",
      };
    },
    "7yn2": function (e, t, r) {
      "use strict";
      r.d(t, "b", function () {
        return p;
      }),
        r.d(t, "a", function () {
          return _;
        });
      var a = r("q1tI"),
        i = r.n(a),
        n = r("msu0"),
        s = r("/cMS"),
        o = r("zy5s"),
        l = r.n(o),
        c = r("PlCS"),
        d = r("GbHM"),
        m = r("GXif"),
        u = r("/Q1a");
      const p = (e) => {
        const { rgTagIDs: t, instanceNum: r, bShowEvenIfNoTags: a } = e,
          n = Object(s.b)(t);
        return (null == n ? void 0 : n.length) > 0 || a
          ? i.a.createElement(
              "div",
              {
                className: Object(d.a)(l.a.SaleTagBlockCtn, "SaleTagBlockCtn"),
              },
              i.a.createElement(
                "div",
                { className: Object(d.a)(l.a.TagTitle, "WidgetTagTitle") },
                Object(m.g)("#GameHover_Tags")
              ),
              Boolean((null == n ? void 0 : n.length) > 0)
                ? i.a.createElement(
                    "div",
                    { className: Object(d.a)(l.a.TagBox, "TagBox") },
                    n.map((e) =>
                      i.a.createElement(h, {
                        key: "tag_" + r + "_" + e.tagid,
                        tag: e,
                      })
                    )
                  )
                : i.a.createElement("div", null, Object(m.g)("#Broadcast_None"))
            )
          : null;
      };
      function _(e) {
        const { tagid: t, className: r } = e,
          a = Object(s.c)(t);
        if (!a) return null;
        const o = Object(n.e)(Object(n.g)(u.d.LANGUAGE)),
          m = `${u.d.STORE_BASE_URL}tags/${o}/${null == a ? void 0 : a.name}`;
        return i.a.createElement(
          c.b,
          { url: m, className: Object(d.a)(l.a.Tag, "WidgetTag", r) },
          a.name
        );
      }
      function h(e) {
        const { tag: t, className: r } = e,
          a = Object(n.e)(Object(n.g)(u.d.LANGUAGE)),
          s = `${u.d.STORE_BASE_URL}tags/${a}/${t.name}`;
        return i.a.createElement(
          c.b,
          { url: s, className: Object(d.a)(l.a.Tag, "WidgetTag", r) },
          t.name
        );
      }
    },
    "8r/D": function (e, t, r) {
      "use strict";
      r.d(t, "a", function () {
        return l;
      }),
        r.d(t, "b", function () {
          return c;
        });
      var a = r("mrSG"),
        i = r("QwK/"),
        n = r("/Q1a"),
        s = r("vDqi"),
        o = r.n(s);
      r("ztGc");
      class l extends i.a {
        constructor() {
          super();
        }
        BInitialized() {
          return !0;
        }
        GetServerTime() {
          return n.d.PAGE_TIMESTAMP + Math.floor(performance.now() / 1e3);
        }
        RequestEmoticonListInternal() {
          return Object(a.a)(this, void 0, void 0, function* () {
            let e = [];
            try {
              let t = yield o.a.get(
                n.d.CHAT_BASE_URL + "actions/EmoticonData",
                { withCredentials: !0 }
              );
              if (t.data.emoticons)
                for (let r of t.data.emoticons) {
                  let t = r.name;
                  if (t.startsWith("^")) e.push({ name: t });
                  else {
                    let a = { name: t.substr(1, t.length - 2) },
                      i = a.name.toLowerCase();
                    i != a.name && (a.name_normalized = i),
                      r.time_last_used && (a.last_used = r.time_last_used),
                      r.use_count && (a.use_count = r.use_count),
                      r.time_received && (a.time_received = r.time_received),
                      r.appid && (a.appid = r.appid),
                      e.push(a);
                  }
                }
            } catch (e) {
              console.error("error loading emoticon list", e);
            }
            this.OnEmoticonListReceived(e);
          });
        }
      }
      const c = new l();
    },
    "9d0v": function (e, t) {
      e.exports =
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAAKCAYAAABi8KSDAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QTM3OEVDNTUyMUM0MTFFNDgxN0ZEN0MzNjYzNzcxOTYiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QTM3OEVDNTYyMUM0MTFFNDgxN0ZEN0MzNjYzNzcxOTYiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpBMzc4RUM1MzIxQzQxMUU0ODE3RkQ3QzM2NjM3NzE5NiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpBMzc4RUM1NDIxQzQxMUU0ODE3RkQ3QzM2NjM3NzE5NiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Ps9jzFQAAACPSURBVHjaYvz//z+DkJDQdQYGhpsMCMAKxMZAHPXu3bt9cFGQYkFBwQ0gGoaBfAEgzgfibUDsBxNnYsAOfgKxJBBvAeIZMEEWZBVA52xA5gOdUAEUc8NQDBTkBEoGMOAByCYLAjUsRzM5AKtioMQzIEW0ydjcHIBTMSE3M0Ij5RKQfQ6HGiOgIXogBkCAAQDGVT+0v+n6EQAAAABJRU5ErkJggg==";
    },
    "9vnD": function (e, t, r) {
      e.exports = {
        DevSummaryCtn: "creatorhomeembed_DevSummaryCtn_ekp1E",
        LargeFormat: "creatorhomeembed_LargeFormat_2FqNe",
        CreatorDescCtn: "creatorhomeembed_CreatorDescCtn_17dKo",
        SmallFormat: "creatorhomeembed_SmallFormat_1l0bo",
        DevSummaryWidgetCtn: "creatorhomeembed_DevSummaryWidgetCtn_3H9Na",
        DevSummaryBackground: "creatorhomeembed_DevSummaryBackground_3yYqt",
        DevSummaryContent: "creatorhomeembed_DevSummaryContent_2gHGJ",
        Avatar: "creatorhomeembed_Avatar_3Y9sN",
        CreatorTitleCtn: "creatorhomeembed_CreatorTitleCtn_kKdLE",
        CreatorNameName: "creatorhomeembed_CreatorNameName_3ptup",
        CreatorTagline: "creatorhomeembed_CreatorTagline_24YIA",
        Title: "creatorhomeembed_Title_3ujwL",
        Followers: "creatorhomeembed_Followers_c7leV",
        SocialFollowersCtn: "creatorhomeembed_SocialFollowersCtn_2uSZB",
        FollowBtnCtn: "creatorhomeembed_FollowBtnCtn_jv7PR",
        FollowButton: "creatorhomeembed_FollowButton_3sfAn",
        FollowBtnText: "creatorhomeembed_FollowBtnText_2WeRR",
        SocialContainer: "creatorhomeembed_SocialContainer_1MvXz",
        SocialImg: "creatorhomeembed_SocialImg_l-kxz",
        SocialLink: "creatorhomeembed_SocialLink_3bB-H",
        CuratorHoverCtn: "creatorhomeembed_CuratorHoverCtn_97kwy",
        AvatarLink: "creatorhomeembed_AvatarLink_2-ZIR",
        MembersListLink: "creatorhomeembed_MembersListLink_Dh7u9",
      };
    },
    AM5O: function (e, t, r) {
      "use strict";
      r.d(t, "b", function () {
        return _;
      }),
        r.d(t, "a", function () {
          return f;
        }),
        r.d(t, "c", function () {
          return v;
        });
      var a = r("mrSG"),
        i = r("vDqi"),
        n = r.n(i),
        s = r("2vnA"),
        o = (r("msu0"), r("Zdsb"), r("9XWO")),
        l = (r("XrGS"), r("KjDl")),
        c = r("3u1o"),
        d = r("vYsE"),
        m = r("/Q1a"),
        u = (r("sTxY"), r("TqgT"));
      r("XThB");
      class p {
        constructor(e) {
          (this.m_setShownEvents = new Set()),
            (this.m_setReadEvents = new Set()),
            (this.m_rgPendingUpload = []),
            (this.m_schUpload = new c.b()),
            (this.m_bUploading = !1),
            (this.m_CMInterface = e);
        }
        MarkEventShown(e, t, r) {
          let a = this.MakeKey(e, r);
          if (this.m_setShownEvents.has(a)) return !1;
          this.m_setShownEvents.add(a);
          let i = new l.e();
          return (
            i.set_event_gid(e),
            i.set_clanid(t),
            i.set_display_location(r),
            i.set_mark_shown(!0),
            this.QueueForUpload(i),
            !0
          );
        }
        MarkEventRead(e, t, r) {
          let a = this.MakeKey(e, r);
          if (this.m_setReadEvents.has(a)) return !1;
          this.m_setReadEvents.add(a);
          let i = new l.e();
          return (
            i.set_event_gid(e),
            i.set_clanid(t),
            i.set_display_location(r),
            i.set_mark_read(!0),
            this.QueueForUpload(i),
            !0
          );
        }
        MakeKey(e, t) {
          return `${e}_${t}`;
        }
        QueueForUpload(e) {
          this.m_rgPendingUpload.push(e), this.ScheduleUpload();
        }
        ScheduleUpload() {
          this.m_bUploading ||
            (this.m_rgPendingUpload.length >= 30
              ? this.UploadPendingData()
              : this.m_schUpload.IsScheduled() ||
                this.m_schUpload.Schedule(6e4, this.UploadPendingData));
        }
        Flush() {
          return Object(a.a)(this, void 0, void 0, function* () {
            if (!this.m_bUploading) return this.UploadPendingData();
          });
        }
        UploadPendingData() {
          return Object(a.a)(this, void 0, void 0, function* () {
            if (this.m_bUploading) return;
            this.m_schUpload.Cancel();
            let e = this.m_rgPendingUpload.splice(0, 30);
            if (0 == e.length) return;
            let t = !1;
            if (this.m_CMInterface) {
              let r = o.b.Init(l.d);
              for (let t of e) r.Body().add_markings(t);
              this.m_bUploading = !0;
              let a = yield l.g.MarkPartnerEventsForUser(
                this.m_CMInterface.GetServiceTransport(),
                r
              );
              (this.m_bUploading = !1), (t = 1 == a.GetEResult());
            } else {
              if (!m.l.logged_in) return;
              let r = e.map((e) => e.toObject()),
                a = Object(m.f)() + "actions/ajaxmarkpartnerevents";
              const i = new FormData();
              i.append("sessionid", m.d.SESSIONID),
                i.append("request", JSON.stringify(r));
              try {
                t =
                  1 ==
                  (yield n.a.post(a, i, { withCredentials: !0 })).data.success;
              } catch (e) {
                let t = Object(u.a)(e);
                console.error(
                  "CPartnerEventUserTracking.UploadPendingData error " +
                    t.strErrorMsg,
                  t
                );
              }
            }
            t
              ? this.m_rgPendingUpload.length > 0 && this.ScheduleUpload()
              : (console.log(
                  "Saving news event state failed. Will try again soon!"
                ),
                (this.m_rgPendingUpload = this.m_rgPendingUpload.concat(e)),
                this.m_schUpload.Schedule(6e4, this.UploadPendingData));
          });
        }
      }
      Object(a.b)([d.a], p.prototype, "UploadPendingData", null);
      var _,
        h = r("oleE"),
        b = r("f5iL"),
        g = r("q1tI");
      class S {
        constructor(e) {
          (this.appid = 0),
            (this.can_edit = !1),
            (this.owns_app = !1),
            (this.follows_app = !1),
            (this.support_user = !1),
            (this.valve_admin = !1),
            (this.limited_user = !1),
            (this.event_ignored = new Array()),
            (this.event_followed = new Array()),
            (this.event_followed_flags = new Array()),
            (this.clanid = e);
        }
      }
      Object(a.b)([s.C], S.prototype, "clanid", void 0),
        Object(a.b)([s.C], S.prototype, "appid", void 0),
        Object(a.b)([s.C], S.prototype, "can_edit", void 0),
        Object(a.b)([s.C], S.prototype, "owns_app", void 0),
        Object(a.b)([s.C], S.prototype, "follows_app", void 0),
        Object(a.b)([s.C], S.prototype, "support_user", void 0),
        Object(a.b)([s.C], S.prototype, "valve_admin", void 0),
        Object(a.b)([s.C], S.prototype, "limited_user", void 0),
        Object(a.b)([s.C], S.prototype, "event_ignored", void 0),
        Object(a.b)([s.C], S.prototype, "event_followed", void 0),
        Object(a.b)([s.C], S.prototype, "event_followed_flags", void 0),
        (function (e) {
          (e[(e.k_ENotifyFlagNone = 0)] = "k_ENotifyFlagNone"),
            (e[(e.k_ENotifyFlagByEmail = 1)] = "k_ENotifyFlagByEmail"),
            (e[(e.k_ENotifyFlagByPush = 2)] = "k_ENotifyFlagByPush");
        })(_ || (_ = {}));
      class f {
        constructor() {
          (this.m_mapClanToUserPermissions = new Map()),
            (this.m_mapAnnounceGIDToVote = new Map()),
            (this.m_setReadEventGIDs = new Set()),
            (this.m_cm = void 0),
            (this.m_bIsPresentationMode = Object(m.a)());
        }
        static Get() {
          return (
            Object(b.a)(
              !!f.s_EventUserStore,
              "Have not yet initialized global EventUserStore"
            ),
            f.s_EventUserStore
          );
        }
        static IsInitialized() {
          return !!f.s_EventUserStore;
        }
        static InitGlobal(e) {
          return Object(a.a)(this, void 0, void 0, function* () {
            if (!f.s_EventUserStore) {
              const t = new f();
              yield t.Init(e),
                (f.s_EventUserStore = t),
                "dev" == m.d.WEB_UNIVERSE && (window.g_EventUserStore = t);
            }
          });
        }
        Init(e) {
          return Object(a.a)(this, void 0, void 0, function* () {
            (this.m_cm = e), (this.m_tracker = new p(e));
            const t = Object(m.i)(
              "partnereventpermissions",
              "application_config"
            );
            this.ValidateStoreDefault(t) &&
              (Object(s.G)(() => {
                t.forEach((e) => {
                  let t = new S(e.clanid),
                    r = { result: t, promise: f.RemapToPromise(t) };
                  this.CopyFromResponseToTrack(r, e),
                    this.m_mapClanToUserPermissions.set(e.clanid, r);
                });
              }),
              ("dev" != m.d.WEB_UNIVERSE && "beta" != m.d.WEB_UNIVERSE) ||
                console.log(
                  "CEventUserStore has loaded",
                  this.m_mapClanToUserPermissions.size,
                  this.m_mapClanToUserPermissions
                ));
            let r = Object(m.i)("uservotes", "application_config");
            r &&
              Object(s.G)(() => {
                r.forEach((e) => {
                  let t = !!e.voted_up || (!e.voted_down && void 0);
                  this.m_mapAnnounceGIDToVote.set(e.clanAnnouncementGID, t);
                });
              });
          });
        }
        GetTracker() {
          return this.m_tracker;
        }
        ValidateStoreDefault(e) {
          const t = e;
          return (
            !!(
              t &&
              Array.isArray(t) &&
              t.length > 0 &&
              "object" == typeof t[0]
            ) &&
            "number" == typeof t[0].clanid &&
            "number" == typeof t[0].appid
          );
        }
        RecordEventShown(e, t) {
          e &&
            !e.bOldAnnouncement &&
            this.m_tracker.MarkEventShown(
              e.GID,
              e.clanSteamID.GetAccountID(),
              t
            );
        }
        RecordEventRead(e, t) {
          e &&
            !e.bOldAnnouncement &&
            (this.HasEventBeenRead(e.GID) ||
              (this.SetEventAsRead(e.GID),
              this.m_tracker.MarkEventRead(
                e.GID,
                e.clanSteamID.GetAccountID(),
                t
              )));
        }
        SetEventAsRead(e) {
          this.m_setReadEventGIDs.add(e);
        }
        HasEventBeenRead(e) {
          return this.m_setReadEventGIDs.has(e);
        }
        static RemapToPromise(e) {
          return Object(a.a)(this, void 0, void 0, function* () {
            return e;
          });
        }
        BIsUserLoggedIn() {
          return m.l.logged_in;
        }
        BIsPartnerEventPermissionsLoaded(e) {
          return this.m_mapClanToUserPermissions.has(e);
        }
        GetPartnerEventPermissions(e) {
          if (!e || !e.BIsValid()) return new S(0);
          const t = e.GetAccountID();
          this.m_mapClanToUserPermissions.has(t) ||
            this.LoadSingleAppEventPermissions(e);
          return this.m_mapClanToUserPermissions.get(t).result;
        }
        BFollowsEvent(e, t) {
          return (
            -1 != this.GetPartnerEventPermissions(e).event_followed.indexOf(t)
          );
        }
        BFollowsEventAndNotifiedBy(e, t, r) {
          let a = this.GetPartnerEventPermissions(e),
            i = a.event_followed.indexOf(t);
          return -1 !== i && (a.event_followed_flags[i] & r) == r;
        }
        BIgnoresEvent(e, t) {
          return (
            -1 != this.GetPartnerEventPermissions(e).event_ignored.indexOf(t)
          );
        }
        LoadSingleAppEventPermissions(e) {
          return Object(a.a)(this, void 0, void 0, function* () {
            let t = e.GetAccountID(),
              r = this.m_mapClanToUserPermissions.get(t);
            return (
              r ||
                ((r = {
                  promise: this.InternalLoadSingleAppEventPermissions(e),
                  result: new S(t),
                }),
                this.m_mapClanToUserPermissions.set(t, r)),
              r.promise
            );
          });
        }
        CopyFromResponseToTrack(e, t) {
          (e.result.appid = t.appid),
            (e.result.can_edit = t.can_edit),
            (e.result.clanid = t.appid),
            (e.result.event_followed = t.event_followed),
            (e.result.event_ignored = t.event_ignored),
            (e.result.event_followed_flags = t.event_followed_flags),
            (e.result.follows_app = t.follows_app),
            (e.result.owns_app = t.owns_app),
            (e.result.limited_user = t.limited_user),
            (t.support_user || t.valve_admin) && this.m_bIsPresentationMode
              ? ((e.result.can_edit = !0),
                (e.result.support_user = !1),
                (e.result.valve_admin = !1))
              : ((e.result.support_user = t.support_user),
                (e.result.valve_admin = t.valve_admin));
        }
        InternalLoadSingleAppEventPermissions(e) {
          return Object(a.a)(this, void 0, void 0, function* () {
            let t = null,
              r = e.GetAccountID(),
              a = !Boolean(m.l.logged_in);
            if (!this.m_mapClanToUserPermissions.has(r)) {
              let t = new S(e.GetAccountID());
              this.m_mapClanToUserPermissions.set(r, {
                result: t,
                promise: f.RemapToPromise(t),
              });
            }
            try {
              if (Boolean(m.l.logged_in)) {
                let i =
                    m.d.COMMUNITY_BASE_URL +
                    "gid/" +
                    e.ConvertTo64BitString() +
                    "/ajaxgetpartnereventpermissions/",
                  s = {};
                if (
                  ("partnerweb" == Object(m.g)() &&
                    ((i =
                      m.d.PARTNER_BASE_URL +
                      "partnerevents/ajaxgetpartnereventpermissions"),
                    (s = { clanaccountid: e.GetAccountID() })),
                  (t = yield n.a.get(i, { params: s, withCredentials: !0 })),
                  1 != t.data.success)
                )
                  console.error(
                    "Partner Events Failed Load:" +
                      Object(u.a)(t.data).strErrorMsg
                  ),
                    (a = !0);
                else {
                  let e = this.m_mapClanToUserPermissions.get(r);
                  this.CopyFromResponseToTrack(e, t.data);
                }
              }
            } catch (e) {
              if (
                ((t = e.response),
                (a = !0),
                e &&
                  void 0 !== e.response &&
                  void 0 !== e.response.data &&
                  void 0 !== e.response.data.success &&
                  21 == e.response.data.success)
              );
              else {
                const t = Object(u.a)(e);
                console.error(
                  "InternalLoadSingleAppEventPermissions account: " +
                    r +
                    ": " +
                    t.strErrorMsg,
                  t
                );
              }
            } finally {
              a &&
                Object(s.G)(() => {
                  let e = this.m_mapClanToUserPermissions.get(r);
                  (e.result.appid = t && t.data ? t.data.appid : 0),
                    (e.result.can_edit = !1),
                    (e.result.clanid = t && t.data ? t.data.clanid : 0),
                    (e.result.event_followed = new Array()),
                    (e.result.event_ignored = new Array()),
                    (e.result.event_followed_flags = new Array()),
                    (e.result.follows_app = !1),
                    (e.result.owns_app = !1),
                    (e.result.support_user = !1),
                    (e.result.valve_admin = !1),
                    (e.result.limited_user = !1);
                });
            }
            return this.m_mapClanToUserPermissions.get(r).result;
          });
        }
        SetFollowOrUnfollowEvent(e, t, r, i, o) {
          return Object(a.a)(this, void 0, void 0, function* () {
            let a = this.GetPartnerEventPermissions(r),
              l = a.event_followed.indexOf(i),
              c = 0;
            -1 !== l &&
              ((c = a.event_followed_flags[l]), e ? (o = c & ~o) : (o |= c));
            let d = 0 == o,
              u =
                (Object(m.f)() == m.d.STORE_BASE_URL
                  ? m.d.STORE_BASE_URL + "events"
                  : m.d.COMMUNITY_BASE_URL +
                    "/gid/" +
                    r.ConvertTo64BitString()) +
                (d ? "/unfolloworunignoreevent" : "/followorignoreevent"),
              p = new URLSearchParams();
            p.append("sessionid", m.d.SESSIONID),
              p.append("authwgtoken", m.l.authwgtoken),
              p.append("ignore", "" + t),
              p.append("gid", i),
              p.append("notification_flag", "" + o),
              p.append("clan_accountid", "" + r.GetAccountID());
            yield n.a.post(u, p, { withCredentials: !0 });
            Object(s.G)(() => {
              let e = this.m_mapClanToUserPermissions.get(r.GetAccountID()),
                a = null,
                n = null,
                s = null,
                l = null;
              d
                ? ((a = t ? e.result.event_ignored : e.result.event_followed),
                  (s = t ? null : e.result.event_followed_flags))
                : t
                ? ((a = e.result.event_followed),
                  (s = e.result.event_followed_flags),
                  (n = e.result.event_ignored))
                : ((a = e.result.event_ignored),
                  (n = e.result.event_followed),
                  (l = e.result.event_followed_flags));
              let c = a.indexOf(i);
              if ((c > -1 && (a.splice(c, 1), s && s.splice(c, 1)), n)) {
                let e = n.indexOf(i);
                -1 == e ? (n.push(i), l && l.push(o)) : (l[e] = o);
              }
            });
          });
        }
        Vote(e, t, r) {
          return Object(a.a)(this, void 0, void 0, function* () {
            if (!e || !e.AnnouncementGID) return !1;
            const a = this.m_mapAnnounceGIDToVote.get(e.AnnouncementGID);
            if (a === t) return !0;
            if (
              (this.m_mapAnnounceGIDToVote.set(e.AnnouncementGID, t),
              Object(s.G)(() => {
                !0 === a && e.UpdateVoteCount("up", -1),
                  !1 === a && e.UpdateVoteCount("down", -1),
                  !0 === t && e.UpdateVoteCount("up", 1),
                  !1 === t && e.UpdateVoteCount("down", 1);
              }),
              this.m_cm)
            ) {
              let r = o.b.Init(l.f);
              return (
                r.Body().set_announcementid(e.AnnouncementGID),
                r.Body().set_vote_up(!!t),
                r.Body().set_clan_accountid(e.clanSteamID.GetAccountID()),
                1 ==
                  (yield l.g.RateClanAnnouncement(
                    this.m_cm.GetServiceTransport(),
                    r
                  )).GetEResult()
              );
            }
            {
              let a =
                window.location.href.indexOf(m.d.COMMUNITY_BASE_URL) >= 0
                  ? m.d.COMMUNITY_BASE_URL +
                    "gid/" +
                    e.clanSteamID.ConvertTo64BitString() +
                    "/announcements/rate/" +
                    e.AnnouncementGID
                  : m.d.STORE_BASE_URL +
                    "updated/ajaxrateupdate/" +
                    e.AnnouncementGID;
              const i = new URLSearchParams();
              i.append("sessionid", m.d.SESSIONID),
                i.append("authwgtoken", m.l.authwgtoken),
                i.append("voteup", t ? "1" : "0"),
                i.append("clanid", "" + e.clanSteamID.GetAccountID()),
                i.append("ajax", "1");
              let s = { withCredentials: !0, cancelToken: r.token };
              return 1 == (yield n.a.post(a, i, s)).data.success;
            }
          });
        }
        LoadMyVote(e, t) {
          return Object(a.a)(this, void 0, void 0, function* () {
            if (null == e ? void 0 : e.AnnouncementGID) {
              if (this.m_mapAnnounceGIDToVote.has(e.AnnouncementGID))
                return this.m_mapAnnounceGIDToVote.get(e.AnnouncementGID);
              let r;
              if (this.m_cm) {
                let t = o.b.Init(l.c);
                t.Body().set_announcementid(e.AnnouncementGID);
                let a = yield l.g.GetClanAnnouncementVoteForUser(
                  this.m_cm.GetServiceTransport(),
                  t
                );
                1 == a.GetEResult() &&
                  (r =
                    !!a.Body().voted_up() ||
                    (!a.Body().voted_down() && void 0));
              } else {
                let a =
                    m.d.COMMUNITY_BASE_URL +
                    "ogg/" +
                    e.appid +
                    "/announcements/ajaxgetmyvote/" +
                    e.AnnouncementGID,
                  i = yield n.a.get(a, {
                    withCredentials: !0,
                    cancelToken: t.token,
                  });
                r = !!i.data.voted_up || (!i.data.voted_down && void 0);
              }
              return this.m_mapAnnounceGIDToVote.set(e.AnnouncementGID, r), r;
            }
          });
        }
        SetVote(e, t) {
          this.m_mapAnnounceGIDToVote.set(e, t);
        }
        BHasMyVote(e) {
          return (
            !!e.AnnouncementGID &&
            this.m_mapAnnounceGIDToVote.has(e.AnnouncementGID)
          );
        }
        GetPreviouslyLoadedVote(e) {
          return e.AnnouncementGID
            ? this.m_mapAnnounceGIDToVote.get(e.AnnouncementGID)
            : void 0;
        }
        BShowEmailEditorTab(e) {
          if (e.BHasEmailEnabled()) return !0;
          let t = this.GetPartnerEventPermissions(e.clanSteamID);
          return (m.c.IS_OGG || m.c.IS_VALVE_GROUP) && t.valve_admin;
        }
        BShowSaleEditorTab(e) {
          if (e.BHasSaleEnabled()) return !0;
          let t = this.GetPartnerEventPermissions(e.clanSteamID);
          return (
            !m.c.IS_OGG &&
            (t.valve_admin ||
              (e.jsondata.clone_from_event_gid &&
                e.jsondata.clone_from_sale_enabled))
          );
        }
      }
      function v(e) {
        const [t, r] = Object(g.useState)(
            f.Get().BIsPartnerEventPermissionsLoaded(e)
          ),
          a = h.a.InitFromClanID(e),
          [i, n] = Object(g.useState)(f.Get().GetPartnerEventPermissions(a));
        return (
          Object(g.useEffect)(() => {
            if (!t) {
              const t = h.a.InitFromClanID(e);
              f.Get()
                .LoadSingleAppEventPermissions(t)
                .then((e) => {
                  n(e), r(!0);
                });
            }
          }, [t, e]),
          i
        );
      }
      Object(a.b)([s.C], f.prototype, "m_mapClanToUserPermissions", void 0),
        Object(a.b)([s.C], f.prototype, "m_mapAnnounceGIDToVote", void 0),
        Object(a.b)([s.C], f.prototype, "m_setReadEventGIDs", void 0),
        Object(a.b)([s.k], f.prototype, "CopyFromResponseToTrack", null);
    },
    GpIp: function (e, t, r) {
      "use strict";
      r.d(t, "e", function () {
        return l;
      }),
        r.d(t, "c", function () {
          return c;
        }),
        r.d(t, "a", function () {
          return d;
        }),
        r.d(t, "d", function () {
          return m;
        }),
        r.d(t, "b", function () {
          return u;
        });
      var a = r("Zdsb"),
        i = (r("yfxr"), r("jALh"), r("FmLm")),
        n = (r("X/lQ"), r("Ys0h")),
        s = r("hAgw"),
        o = r("/Q1a");
      const l = {
        include_assets: !0,
        include_release: !0,
        include_platforms: !0,
        include_tag_count: 20,
        include_basic_info: !0,
        include_trailers: !0,
        include_reviews: !0,
        include_screenshots: !0,
      };
      function c() {
        return { width: 231, height: 87 };
      }
      class d {
        constructor() {
          this.m_setAlreadyAdded = new Set();
        }
        Reset() {
          this.m_setAlreadyAdded = new Set();
        }
        BHasAppID(e) {
          return this.m_setAlreadyAdded.has("a" + e);
        }
        BHasPackageID(e) {
          return this.m_setAlreadyAdded.has("s" + e);
        }
        BHasBundleID(e) {
          return this.m_setAlreadyAdded.has("b" + e);
        }
        BHasStoreItemKey(e) {
          return this.m_setAlreadyAdded.has(
            this.ConvertStoreItemKeyToUniqueKey(e)
          );
        }
        AddStoreItemKey(e) {
          this.m_setAlreadyAdded.add(this.ConvertStoreItemKeyToUniqueKey(e));
        }
        ConvertStoreItemKeyToUniqueKey(e) {
          switch (e.item_type) {
            default:
            case "app":
              return "a" + e.id;
            case "sub":
              return "s" + e.id;
            case "bundle":
              return "b" + e.id;
          }
        }
      }
      const m = 4;
      function u(e, t, r, a, i) {
        var o;
        const l = new Array(),
          c = new Array(),
          d = new Array(),
          u = new Array();
        if (!e || 0 == e.length) return l;
        const _ = [s.e.k_RejectSupportedLanguage, s.e.k_RejectAlreadyDisplayed];
        for (let i of e) {
          let e = i.id,
            m = s.e.k_NotRejected;
          switch (i.item_type) {
            case "sub":
              const a = n.a.Get().GetPackage(e);
              if (
                1 !==
                (null === (o = null == a ? void 0 : a.GetIncludedAppIDs()) ||
                void 0 === o
                  ? void 0
                  : o.length)
              ) {
                m = S(e, t, r, !0);
                break;
              }
              e = a.GetIncludedAppIDs()[0];
            case "app":
              m = b(e, t, r, !0);
              break;
            case "bundle":
              m = f(e, t, r, !0);
          }
          if (
            (m == s.e.k_NotRejected
              ? ((i.rejected = s.e.k_NotRejected),
                l.push(Object.assign(Object.assign({}, i), { priority: 1 })))
              : _.includes(m)
              ? ((i.rejected = s.e.k_NotRejected), c.push(i))
              : ((i.rejected = m),
                m == s.e.k_RejectIgnoredGame ? d.push(i) : u.push(i)),
            l.length > a)
          )
            break;
        }
        return (
          l.length < a &&
            (p(l, c, i, 2),
            l.length < i &&
              t.enforce_minimum &&
              (p(l, d, i, 3), p(l, u, i, m))),
          l
        );
      }
      function p(e, t, r, a) {
        for (let i = 0; e.length < r && i < t.length; ++i)
          e.push(Object.assign(Object.assign({}, t[i]), { priority: a }));
      }
      function _(e, t) {
        var r, a, n, o, l;
        const c = i.a.Get();
        if (t.only_current_platform && c.BHasPlatformPreferenceSet()) {
          if (
            !(
              ((null === (r = e.GetPlatforms()) || void 0 === r
                ? void 0
                : r.windows) &&
                c.BIsPreferredPlatform("win")) ||
              ((null === (a = e.GetPlatforms()) || void 0 === a
                ? void 0
                : a.mac) &&
                c.BIsPreferredPlatform("mac")) ||
              ((null === (n = e.GetPlatforms()) || void 0 === n
                ? void 0
                : n.linux) &&
                c.BIsPreferredPlatform("linux"))
            )
          )
            return s.e.k_RejectWrongPlatform;
        }
        return !t.prepurchase && e.BIsComingSoon()
          ? s.e.k_RejectNoComingSoon
          : !t.virtual_reality &&
            (null === (o = e.GetPlatforms()) || void 0 === o
              ? void 0
              : o.vr_support.vrhmd_only)
          ? s.e.k_RejectNoVR
          : (
              null === (l = e.GetAllCreatorClanIDs()) || void 0 === l
                ? void 0
                : l.some((e) => c.BIsIgnoringCurator(e))
            )
          ? s.e.k_RejectCreatorClan
          : s.e.k_NotRejected;
      }
      function h(e, t) {
        var r;
        if (t.localized) {
          const t = Object(a.l)(o.d.LANGUAGE);
          if (
            !(null === (r = e.GetAllLanguagesWithSomeSupport()) || void 0 === r
              ? void 0
              : r.includes(t))
          )
            return s.e.k_RejectSupportedLanguage;
        }
        return s.e.k_NotRejected;
      }
      function b(e, t, r, a) {
        const o = n.a.Get().GetApp(e);
        if (!o) return s.e.k_RejectNotLoaded;
        const l = _(o, t);
        if (l != s.e.k_NotRejected) return l;
        const c = i.a.Get();
        if (c.BIsGameIgnored(e)) return s.e.k_RejectIgnoredGame;
        if (c.BExcludeTagIDs(o.GetTagIDs())) return s.e.k_RejectIgnoreGameTags;
        if (c.BExcludesContentDescriptor(o.GetContentDescriptorIDs()))
          return s.e.k_RejectIgnoreContentDescriptors;
        if (!t.early_access && o.BIsEarlyAccess())
          return s.e.k_RejectEarlyAccess;
        const d = o.GetAppType();
        return t.software || 6 != d
          ? (4 != d && 11 != d) ||
            (t.dlc && (!t.dlc_for_you || c.BIsGameOwned(o.GetParentAppID())))
            ? t.games_already_in_library && c.BIsGameOwned(e)
              ? s.e.k_RejectInLibrary
              : t.games_not_in_library && !c.BIsGameOwned(e)
              ? s.e.k_RejectNotInLibrary
              : !t.video && [7, 8, 9].includes(d)
              ? s.e.k_RejectVideo
              : t.has_discount && !o.GetBestPurchaseOption().discount_pct
              ? s.e.k_RejectNoDiscount
              : 1 == d &&
                t.games_already_in_library &&
                c.BIsGameOwned(o.GetParentAppID())
              ? s.e.k_RejectInLibrary
              : a
              ? (1 == d && r.BHasAppID(o.GetParentAppID())) || r.BHasAppID(e)
                ? s.e.k_RejectAlreadyDisplayed
                : h(o, t)
              : s.e.k_NotRejected
            : s.e.k_RejectDLC
          : s.e.k_RejectSoftware;
      }
      function g(e, t) {
        const r = i.a.Get();
        let a = !1;
        for (let t of e) {
          if (r.BIsGameIgnored(t)) return s.e.k_RejectIgnoredGame;
          r.BIsGameOwned(t) && (a = !0);
        }
        return t.games_not_in_library && a
          ? s.e.k_RejectInLibrary
          : t.games_not_in_library && !a
          ? s.e.k_RejectNotInLibrary
          : s.e.k_NotRejected;
      }
      function S(e, t, r, a) {
        const o = n.a.Get().GetPackage(e);
        if (!o) return s.e.k_RejectNotLoaded;
        const l = _(o, t);
        if (l != s.e.k_NotRejected) return l;
        const c = g(o.GetIncludedAppIDs(), t);
        if (c != s.e.k_NotRejected) return c;
        const d = i.a.Get();
        return t.games_already_in_library && d.BOwnsPackage(e)
          ? s.e.k_RejectInLibrary
          : d.BIsPackageIgnored(e)
          ? s.e.k_RejectIgnoredGame
          : a
          ? r.BHasPackageID(e)
            ? s.e.k_RejectAlreadyDisplayed
            : h(o, t)
          : s.e.k_NotRejected;
      }
      function f(e, t, r, a) {
        const i = n.a.Get().GetBundle(e);
        if (!i) return s.e.k_RejectNotLoaded;
        const o = _(i, t);
        if (o != s.e.k_NotRejected) return o;
        const l = g(i.GetIncludedAppIDs(), t);
        return l != s.e.k_NotRejected
          ? l
          : a
          ? r.BHasBundleID(e)
            ? s.e.k_RejectAlreadyDisplayed
            : h(i, t)
          : s.e.k_NotRejected;
      }
    },
    IEEs: function (e, t, r) {
      "use strict";
      r.d(t, "a", function () {
        return d;
      });
      var a = r("mrSG"),
        i = r("vDqi"),
        n = r.n(i),
        s = r("2vnA"),
        o = (r("msu0"), r("Zdsb"), r("/4gK"), r("sTxY"), r("f5iL")),
        l = r("TqgT"),
        c = r("/Q1a");
      class d {
        constructor() {
          (this.m_mapBlockedAppIds = new Map()),
            (this.m_mapBlockedClanIds = new Map());
        }
        static Get() {
          return (
            d.s_globalSingletonStore ||
              ((d.s_globalSingletonStore = new d()),
              d.s_globalSingletonStore.Init()),
            d.s_globalSingletonStore
          );
        }
        GetMutedSourceCount() {
          return this.m_mapBlockedAppIds.size + this.m_mapBlockedClanIds.size;
        }
        Init() {
          const e = Object(c.h)("mutedcomminfo", "application_config");
          this.ValidateStoreDefault(e) &&
            (("dev" != c.d.WEB_UNIVERSE && "beta" != c.d.WEB_UNIVERSE) ||
              console.log(
                "DEV_DEBUG: CMutedCommunicationStore loading bundles payload: " +
                  JSON.stringify(e)
              ),
            e.appids &&
              e.appids.forEach((e) => this.m_mapBlockedAppIds.set(e, !0)),
            e.clanids &&
              e.clanids.forEach((e) => this.m_mapBlockedClanIds.set(e, !0)));
        }
        ValidateStoreDefault(e) {
          const t = e;
          return (
            !(!t || "object" != typeof t) &&
            ((Array.isArray(t.appids) && t.appids.length > 0) ||
              (Array.isArray(t.clanids) && t.clanids.length > 0))
          );
        }
        BIsEventBlocked(e) {
          return e.appid
            ? this.m_mapBlockedAppIds.has(e.appid)
            : !!e.clanInfo && this.m_mapBlockedClanIds.has(e.clanInfo.clanid);
        }
        BIsMutedAppID(e) {
          return this.m_mapBlockedAppIds.has(e);
        }
        BIsMutedClanID(e) {
          return this.m_mapBlockedClanIds.has(e);
        }
        UpdateCommunitionSetting(e, t, r) {
          return Object(a.a)(this, void 0, void 0, function* () {
            const a = c.d.STORE_BASE_URL + "account/optoutappcommunication/",
              i = new FormData();
            if (
              (i.append("sessionid", c.d.SESSIONID),
              i.append("allowCommunication", e ? "1" : "0"),
              t)
            ) {
              if (
                (!e && this.m_mapBlockedAppIds.has(t)) ||
                (e && !this.m_mapBlockedAppIds.has(t))
              )
                return !0;
              e
                ? this.m_mapBlockedAppIds.delete(t)
                : this.m_mapBlockedAppIds.set(t, !0),
                i.append("appId", t.toString());
            } else {
              if (!r)
                return (
                  Object(o.a)(
                    !1,
                    "BlockEventsFromCalenderEvent: Invalid AppID and ClanID"
                  ),
                  !1
                );
              if (
                (!e && this.m_mapBlockedClanIds.has(r)) ||
                (e && !this.m_mapBlockedClanIds.has(r))
              )
                return !0;
              e
                ? this.m_mapBlockedClanIds.delete(r)
                : this.m_mapBlockedClanIds.set(r, !0),
                i.append("clanId", r.toString());
            }
            try {
              return 1 == (yield n.a.post(a, i)).data.success;
            } catch (e) {
              return (
                console.error(
                  "Blocking app id hit error " + Object(l.a)(e).strErrorMsg
                ),
                !1
              );
            }
          });
        }
      }
      Object(a.b)([s.C], d.prototype, "m_mapBlockedAppIds", void 0),
        Object(a.b)([s.C], d.prototype, "m_mapBlockedClanIds", void 0);
    },
    Icdm: function (e, t, r) {
      e.exports = {
        "duration-app-launch": "800ms",
        strMediumWidth: "800px",
        strMaxMobileWidth: "600px",
        MediaContainer: "salehilightplayerembed_MediaContainer_1o87v",
        MainMediaCtn: "salehilightplayerembed_MainMediaCtn_vCF98",
        VideoThumbnail: "salehilightplayerembed_VideoThumbnail_1FttB",
        Screenshot: "salehilightplayerembed_Screenshot_t0xHb",
        PresenterEventScreenshot:
          "salehilightplayerembed_PresenterEventScreenshot_11bUj",
        ScreenshotThumbnail: "salehilightplayerembed_ScreenshotThumbnail_1ZOtW",
        PresenterEventScreenshotThumbnail:
          "salehilightplayerembed_PresenterEventScreenshotThumbnail_2kvxa",
        videoPlaying: "salehilightplayerembed_videoPlaying_FACmL",
        VideoPlayButton: "salehilightplayerembed_VideoPlayButton_3hAfy",
        VideoLargeContainer: "salehilightplayerembed_VideoLargeContainer_2nPVw",
        VideoPopupContainers:
          "salehilightplayerembed_VideoPopupContainers_1MNC_",
        VideoLarge: "salehilightplayerembed_VideoLarge_2b5SY",
        PopupScreenshotContainer:
          "salehilightplayerembed_PopupScreenshotContainer_2Qa8J",
        PopupScreenshot: "salehilightplayerembed_PopupScreenshot_1-fbw",
      };
    },
    JsFJ: function (e, t, r) {
      "use strict";
      r.d(t, "a", function () {
        return o;
      });
      var a = r("mrSG"),
        i = r("2vnA"),
        n = r("/Q1a");
      n.d.CHAT_BASE_URL, n.d.CHAT_BASE_URL, n.d.CHAT_BASE_URL;
      class s {
        constructor(e) {
          this.init(e);
        }
        init(e) {
          (this.bValid = e.bValid),
            (this.stream = e.stream),
            (this.name = e.name),
            (this.appName = e.appName),
            (this.appID = e.appID),
            (this.link = e.link),
            (this.linkName = e.linkName),
            (this.tabIcon = e.tabIcon),
            (this.offlineImage = e.offlineImage),
            (this.gidEvent = e.gidEvent);
        }
      }
      Object(a.b)([i.C], s.prototype, "bValid", void 0),
        Object(a.b)([i.C], s.prototype, "stream", void 0),
        Object(a.b)([i.C], s.prototype, "name", void 0),
        Object(a.b)([i.C], s.prototype, "appName", void 0),
        Object(a.b)([i.C], s.prototype, "appID", void 0),
        Object(a.b)([i.C], s.prototype, "link", void 0),
        Object(a.b)([i.C], s.prototype, "linkName", void 0),
        Object(a.b)([i.C], s.prototype, "tabIcon", void 0),
        Object(a.b)([i.C], s.prototype, "offlineImage", void 0),
        Object(a.b)([i.C], s.prototype, "gidEvent", void 0);
      let o = new s({
        bValid: !1,
        stream: { 0: "#Broadcast_EnglishMain" },
        name: "",
        appName: "",
        appID: 0,
        link: "",
        linkName: "",
        tabIcon: "",
        offlineImage: "",
      });
    },
    KQHr: function (e, t, r) {
      "use strict";
      r.d(t, "a", function () {
        return h;
      });
      var a = r("q1tI"),
        i = r.n(a),
        n = (r("Zdsb"), r("wQEA")),
        s = (r("yfxr"), r("44wC")),
        o = r("hAgw"),
        l = r("RrtU"),
        c = r("xoHR"),
        d = r("GbHM"),
        m = r("GXif"),
        u = r("2fVn"),
        p = r("Q6q7"),
        _ = r.n(p);
      function h(e) {
        const { info: t, className: r } = e,
          p = Object(a.useRef)({ include_release: !0 }),
          [h] = Object(l.a)(
            null == t ? void 0 : t.id,
            Object(o.d)(null == t ? void 0 : t.type),
            p.current
          ),
          b = Object(s.b)(null == t ? void 0 : t.id),
          g = !!(null == b ? void 0 : b.demo_appid),
          S = g
            ? Object(m.g)(
                "#Sale_InstallDemo_ttip",
                null == h ? void 0 : h.GetName()
              )
            : b
            ? Object(m.g)(
                "#Sale_CannotInstallDemo_ttip",
                null == h ? void 0 : h.GetName()
              )
            : Object(m.g)("#Loading");
        return !g && b && (null == h ? void 0 : h.BIsFree())
          ? i.a.createElement(u.a, { info: t, className: r })
          : i.a.createElement(
              c.a,
              {
                toolTipContent: S,
                onClick: (e) => {
                  e.preventDefault(),
                    e.stopPropagation(),
                    g && Object(n.a)(b.demo_appid);
                },
                className: Object(d.a)(
                  r,
                  _.a.DemoButton,
                  !g && _.a.DisabledButton
                ),
              },
              g
                ? Object(m.g)("#Sale_InstallDemo")
                : Object(m.g)("#Sale_DemoNotFound")
            );
      }
    },
    KXdY: function (e, t, r) {
      "use strict";
      r.d(t, "c", function () {
        return b;
      }),
        r.d(t, "a", function () {
          return g;
        }),
        r.d(t, "b", function () {
          return S;
        });
      var a = r("q1tI"),
        i = r.n(a),
        n = r("N7Zi"),
        s = r.n(n),
        o = r("9d0v"),
        l = r.n(o),
        c = (r("Zdsb"), r("bmfB")),
        d = r("FmLm"),
        m = r("Ys0h"),
        u = r("zy5s"),
        p = r.n(u),
        _ = r("GbHM"),
        h = r("GXif");
      function b(e) {
        const { appids: t, hide_status_banners: r } = e,
          a = t.every((e) => d.a.Get().BOwnsApp(e)),
          n = t.every((e) => d.a.Get().BIsGameWishlisted(e)),
          o = t.some((e) => {
            const t = m.a.Get().GetApp(e);
            return t && g(e, null == t ? void 0 : t.GetParentAppID());
          }),
          c = a && !r,
          u = n && !r;
        return i.a.createElement(
          "div",
          {
            className: Object(_.a)(p.a.CapsuleDecorators, "CapsuleDecorators"),
          },
          c &&
            i.a.createElement(
              "span",
              { className: Object(_.a)(p.a.Banner, p.a.Blue) },
              i.a.createElement("img", { src: s.a, className: p.a.LinesImg }),
              Object(h.g)("#Sale_InLibrary")
            ),
          u &&
            i.a.createElement(
              "span",
              { className: p.a.Banner },
              i.a.createElement("img", { src: l.a, className: p.a.LinesImg }),
              Object(h.g)("#Sale_OnWishlist")
            ),
          o && i.a.createElement(S, null)
        );
      }
      function g(e, t) {
        if (t || e) {
          const r = t || e;
          return r && c.a.Get().BIsAppStreaming(r);
        }
        return !1;
      }
      const S = () =>
        i.a.createElement(
          "div",
          { className: p.a.bordered_live_stream_icon },
          Object(h.g)("#home_page_live_broadcast")
        );
    },
    MKRT: function (e, t, r) {
      "use strict";
      r.d(t, "c", function () {
        return a;
      }),
        r.d(t, "b", function () {
          return h;
        }),
        r.d(t, "a", function () {
          return f;
        });
      var a,
        i = r("mrSG"),
        n = r("2vnA"),
        s = (r("msu0"), r("Zdsb")),
        o = r("/4gK"),
        l = r("f5iL"),
        c = r("/Q1a"),
        d = r("VJsr"),
        m = r("ue1x");
      !(function (e) {
        (e.k_ERecent = "recent"),
          (e.k_ELibrary = "library"),
          (e.k_EWishlist = "wishlist"),
          (e.k_EFollowing = "following"),
          (e.k_ERecommended = "recommended"),
          (e.k_ESteam = "steam"),
          (e.k_EFeatured = "featured"),
          (e.k_ECurator = "curator");
      })(a || (a = {}));
      const u = [
          a.k_ELibrary,
          a.k_EWishlist,
          a.k_EFollowing,
          a.k_ERecommended,
          a.k_ESteam,
          a.k_ECurator,
        ],
        p = [...u, a.k_EFeatured],
        _ = [a.k_EFeatured];
      var h;
      !(function (e) {
        (e.k_ENews = "news"),
          (e.k_EEvents = "events"),
          (e.k_EStreaming = "streaming"),
          (e.k_EUpdates = "updates"),
          (e.k_EReleases = "releases"),
          (e.k_ESales = "sales");
      })(h || (h = {}));
      const b = [
          h.k_ENews,
          h.k_EEvents,
          h.k_EStreaming,
          h.k_EUpdates,
          h.k_EReleases,
          h.k_ESales,
        ],
        g = new Map([
          [h.k_ENews, [28]],
          [h.k_EEvents, [9, 27, 22, 23, 24, 35, 25, 26]],
          [h.k_EStreaming, [11]],
          [h.k_EUpdates, [12, 13, 14]],
          [h.k_EReleases, [10, 29, 16, 15, 32]],
          [h.k_ESales, [20, 21, 31, 34]],
        ]);
      function S(e) {
        return new Map(e.map((e) => [e, !0]));
      }
      class f {
        constructor() {
          (this.m_mapEventTypeGroupsAllowed = new Map()),
            (this.m_mapGameSources = new Map()),
            (this.m_bCuratorUnhideOnFollowDialogDismissed = !1),
            (this.m_eStorageType = "session");
        }
        GetGameSources() {
          return Array.from(this.m_mapGameSources.keys());
        }
        GetStorageObject() {
          return this.m_strStorageKey
            ? "session" === this.m_eStorageType
              ? window.sessionStorage
              : window.localStorage
            : null;
        }
        GetPreferencesStorageKey() {
          return `${this.m_strStorageKey}-event-calendar-prefs`;
        }
        get enabledEventTypeSet() {
          const e = new Set();
          for (const t of Array.from(this.m_mapEventTypeGroupsAllowed.keys()))
            g.get(t).forEach((t) => e.add(t));
          return e;
        }
        MapClanEventTypeToGroup(e) {
          let t = null;
          return (
            g.forEach((r, a) => {
              -1 !== r.indexOf(e) && (t = a);
            }),
            t || h.k_EEvents
          );
        }
        InitDefaultCheckboxes(e, t, r) {
          (this.m_bInitializedForUpdatesOnly = t),
            (this.m_mapEventTypeGroupsAllowed = S(t ? [h.k_EUpdates] : b));
          const i = c.d.EREALM === s.h.k_ESteamRealmChina ? p : u;
          (this.m_mapGameSources = S(e ? i : _)),
            r && this.m_mapGameSources.set(a.k_EFeatured, !0);
        }
        Init(e, t, r, a, i) {
          (this.m_eStorageType = i), (this.m_strStorageKey = a);
          const n = this.GetStorageObject(),
            s = n ? n.getItem(this.GetPreferencesStorageKey()) : null;
          if (s) {
            const e = JSON.parse(s);
            if (e.rgEventTypeGroupsAllowed && e.rgGameSources) {
              const { rgEventTypeGroupsAllowed: t, rgGameSources: r } = e;
              return (
                (this.m_mapEventTypeGroupsAllowed = S(t)),
                (this.m_mapGameSources = S(r)),
                void (
                  void 0 !== e.bCuratorUnhideOnFollowDismissed &&
                  (this.m_bCuratorUnhideOnFollowDialogDismissed =
                    e.bCuratorUnhideOnFollowDismissed)
                )
              );
            }
          }
          this.InitDefaultCheckboxes(e, t, r);
        }
        SaveFilterPreferences() {
          const e = this.GetStorageObject();
          if (!e) return;
          const t = {
            rgEventTypeGroupsAllowed: Array.from(
              this.m_mapEventTypeGroupsAllowed.keys()
            ),
            rgGameSources: Array.from(this.m_mapGameSources.keys()),
            bCuratorUnhideOnFollowDismissed:
              this.m_bCuratorUnhideOnFollowDialogDismissed,
          };
          e.setItem(this.GetPreferencesStorageKey(), JSON.stringify(t));
        }
        BCuratorUnhideOnFollowDialogDismissed() {
          return this.m_bCuratorUnhideOnFollowDialogDismissed;
        }
        SetCuratorUnhideOnFollowDialogDismissed(e) {
          (this.m_bCuratorUnhideOnFollowDialogDismissed = e),
            this.SaveFilterPreferences();
        }
        BIsEventTypeGroupAllowed(e) {
          return this.m_mapEventTypeGroupsAllowed.has(e);
        }
        BIsGameSourceAllowed(e) {
          return (
            !(e === a.k_EFollowing && !m.a.bIsFollowingEnabled) &&
            !(e === a.k_ECurator && !m.a.bIsCuratorsEnabled) &&
            this.m_mapGameSources.has(e)
          );
        }
        SetEventTypeGroupAllowed(e, t) {
          t
            ? this.m_mapEventTypeGroupsAllowed.set(e, !0)
            : this.m_mapEventTypeGroupsAllowed.delete(e),
            this.SaveFilterPreferences(),
            d.b.RecordFilterChangeEvent(this);
        }
        SetGameSourceAllowed(e, t) {
          t
            ? (this.m_mapGameSources.set(e, !0),
              e == a.k_ERecent
                ? this.m_mapGameSources.delete(a.k_ELibrary)
                : e == a.k_ELibrary &&
                  (Object(l.a)(
                    !this.m_mapGameSources.has(a.k_ERecent),
                    "Setting Library although Recent already set - illusion was broken"
                  ),
                  this.m_mapGameSources.delete(a.k_ERecent)))
            : (this.m_mapGameSources.delete(e),
              e == a.k_ERecent
                ? this.m_mapGameSources.set(a.k_ELibrary, !0)
                : e == a.k_ELibrary &&
                  this.m_mapGameSources.delete(a.k_ERecent)),
            this.SaveFilterPreferences(),
            d.b.RecordFilterChangeEvent(this);
        }
        BShouldDisplayEvent(e) {
          const t = e.GetSource(),
            r = Boolean(
              e.appInfo &&
                e.appInfo.last_played &&
                e.appInfo.last_played + 15552e3 >= m.a.GetTimeNowWithOverride()
            );
          return (
            !!(
              this.enabledEventTypeSet.has(e.event_type) ||
              (this.m_bInitializedForUpdatesOnly &&
                this.BIsEventTypeGroupAllowed(h.k_EUpdates) &&
                28 == e.event_type &&
                e.start_time < 1599202800)
            ) &&
            (!!(t & o.a.k_eRequired || t & o.a.k_eReposted) ||
              Boolean(
                (this.BIsGameSourceAllowed(a.k_ERecent) && r) ||
                  (this.BIsGameSourceAllowed(a.k_ELibrary) &&
                    t & o.a.k_eLibrary) ||
                  (this.BIsGameSourceAllowed(a.k_EWishlist) &&
                    t & o.a.k_eWishlist) ||
                  (this.BIsGameSourceAllowed(a.k_EFollowing) &&
                    t & o.a.k_eFollowing) ||
                  (this.BIsGameSourceAllowed(a.k_ERecommended) &&
                    t & o.a.k_eRecommended) ||
                  (this.BIsGameSourceAllowed(a.k_ESteam) && t & o.a.k_eSteam) ||
                  (this.BIsGameSourceAllowed(a.k_EFeatured) &&
                    t & o.a.k_eFeatured) ||
                  (this.BIsGameSourceAllowed(a.k_ECurator) &&
                    t & o.a.k_eCurator)
              ))
          );
        }
        BAreAllEventsHidden() {
          return (
            0 == this.m_mapEventTypeGroupsAllowed.size ||
            0 == this.m_mapGameSources.size
          );
        }
        BAreAnyEventsFiltered(e) {
          const t = c.d.EREALM === s.h.k_ESteamRealmChina ? p : u;
          return (
            (e ? t : _).some((e) => !this.BIsGameSourceAllowed(e)) ||
            b.some((e) => !this.BIsEventTypeGroupAllowed(e))
          );
        }
      }
      Object(i.b)([n.C], f.prototype, "m_mapEventTypeGroupsAllowed", void 0),
        Object(i.b)([n.C], f.prototype, "m_mapGameSources", void 0),
        Object(i.b)(
          [n.C],
          f.prototype,
          "m_bCuratorUnhideOnFollowDialogDismissed",
          void 0
        ),
        Object(i.b)(
          [Object(n.n)({ keepAlive: !0, equals: n.m.structural })],
          f.prototype,
          "enabledEventTypeSet",
          null
        ),
        Object(i.b)([n.k], f.prototype, "SetEventTypeGroupAllowed", null),
        Object(i.b)([n.k], f.prototype, "SetGameSourceAllowed", null);
    },
    N7Zi: function (e, t) {
      e.exports =
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAAKCAYAAABi8KSDAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6OUNDNzBFNTUyMUM0MTFFNDk1REVFODRBNUU5RjA2MUYiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6OUNDNzBFNTYyMUM0MTFFNDk1REVFODRBNUU5RjA2MUYiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo5Q0M3MEU1MzIxQzQxMUU0OTVERUU4NEE1RTlGMDYxRiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo5Q0M3MEU1NDIxQzQxMUU0OTVERUU4NEE1RTlGMDYxRiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pv3vUKAAAAAlSURBVHjaYvz//z8DsYARpFhISAivjnfv3jGSp3jUGeQ4AyDAADZHNe2nyOBrAAAAAElFTkSuQmCC";
    },
    O8IP: function (e, t, r) {
      e.exports = {
        "duration-app-launch": "800ms",
        FeatureCtn: "animated_featured_capsule_FeatureCtn_1No48",
        SuperCapsuleCtn: "animated_featured_capsule_SuperCapsuleCtn_1n268",
        BGVideo: "animated_featured_capsule_BGVideo_1gjo2",
        BGImage: "animated_featured_capsule_BGImage_3GMV1",
        BGGradient: "animated_featured_capsule_BGGradient_22sjU",
        BGGradientTwo: "animated_featured_capsule_BGGradientTwo_2x7zp",
        CapsuleDecorators: "animated_featured_capsule_CapsuleDecorators_1jkwC",
        Artwork: "animated_featured_capsule_Artwork_3UsQc",
        Info: "animated_featured_capsule_Info_2mUNQ",
        StoreSaleItemRelease:
          "animated_featured_capsule_StoreSaleItemRelease_WG2rh",
        StoreSaleItemReview:
          "animated_featured_capsule_StoreSaleItemReview_10l86",
        animated_featured_capsule_Title:
          "animated_featured_capsule_animated_featured_capsule_Title_1Egj0",
        Title: "animated_featured_capsule_Title_3vZJE",
        Reason: "animated_featured_capsule_Reason_3k8oI",
        InfoSlideRight: "animated_featured_capsule_InfoSlideRight_3UkkZ",
        ArtworkSlideRight: "animated_featured_capsule_ArtworkSlideRight_2tHiE",
        InfoSlideLeft: "animated_featured_capsule_InfoSlideLeft_fDVDJ",
        ArtworkSlideLeft: "animated_featured_capsule_ArtworkSlideLeft_1ns6T",
        BgImageFade: "animated_featured_capsule_BgImageFade_1zsKk",
        BgVidShow: "animated_featured_capsule_BgVidShow_1IDdl",
        DeckCompatIconOverride:
          "animated_featured_capsule_DeckCompatIconOverride_on2Le",
      };
    },
    OXjc: function (e, t, r) {
      "use strict";
      r.d(t, "a", function () {
        return b;
      });
      var a = r("/Q1a"),
        i = r("hAgw"),
        n = r("RrtU"),
        s = r("q1tI"),
        o = (r("XrGS"), r("e356")),
        l = r("aF8t"),
        c = r("GbHM"),
        d = r("rSrx"),
        m = r("thkD"),
        u = r("jIgc"),
        p = r("kWcV"),
        _ = r("Icdm"),
        h = r.n(_);
      function b(e) {
        var t;
        const { info: r, bPopOutTrailerPlayback: _ } = e,
          [b] = Object(n.a)(r.id, Object(i.d)(r.type), {
            include_trailers: !0,
            include_screenshots: !0,
          }),
          [g, S] = s.useState(!1),
          [f, v] = s.useState(void 0),
          y = null == b ? void 0 : b.GetAllTrailers().GetHighlightTrailers(),
          B = (null == y ? void 0 : y.length) > 0 && y[0],
          w = s.useCallback(
            (e) => {
              if (B)
                if (_) {
                  const t = (
                      Object(l.a)()
                        ? B.GetTrailer480p().strWebMURL
                        : B.GetTrailerMax().strWebMURL
                    ).replace("http://", "https://"),
                    r = (
                      Object(l.a)()
                        ? B.GetTrailer480p().strMP4URL
                        : B.GetTrailerMax().strMP4URL
                    ).replace("http://", "https://");
                  Object(u.b)(
                    s.createElement(
                      m.f,
                      { bAllowFullSize: !0, bOKDisabled: !0 },
                      s.createElement(
                        "div",
                        { className: h.a.VideoPopupContainers },
                        s.createElement(
                          "video",
                          {
                            className: h.a.VideoLarge,
                            controls: !0,
                            autoPlay: !0,
                            poster: B.GetScreenshot(),
                          },
                          s.createElement("source", {
                            src: t,
                            type: "video/webm",
                          }),
                          Boolean(!a.d.IN_CLIENT) &&
                            s.createElement("source", {
                              src: r,
                              type: "video/mp4",
                            })
                        )
                      )
                    ),
                    Object(d.o)(e)
                  );
                } else S((e) => !e);
            },
            [B, _]
          );
        if (!b)
          return s.createElement(
            "div",
            { className: h.a.MediaContainer },
            s.createElement(p.a, { size: "medium" })
          );
        if (
          !B &&
          0 ===
            (null === (t = b.GetOnlyAllAgesSafeScreenshots()) || void 0 === t
              ? void 0
              : t.length)
        )
          return (
            ("dev" != a.d.WEB_UNIVERSE && "beta" != a.d.WEB_UNIVERSE) ||
              console.log(
                "appCapsule for appid: " + (null == b ? void 0 : b.GetAppID()),
                b.GetOnlyAllAgesSafeScreenshots()
              ),
            null
          );
        const C = B || (void 0 !== f && -1 !== f) ? f : 0,
          I = new Array(),
          E = b.GetOnlyAllAgesSafeScreenshots();
        return (
          E.forEach((e, t) => {
            if ((B || t > 0) && I.length < 3) {
              const r = (function (e, t) {
                const r = e.replace(/\.[^\.]+$/g, "");
                return r + t + e.slice(r.length);
              })(e, ".116x65").replace("http://", "https://");
              I.push(
                s.createElement("img", {
                  key: t + "_" + r,
                  className: h.a.ScreenshotThumbnail,
                  src: r,
                  onClick: () => {
                    return (
                      (t = e),
                      void Object(u.b)(
                        s.createElement(
                          m.f,
                          { bAllowFullSize: !0, bOKDisabled: !0 },
                          s.createElement(
                            "div",
                            { className: h.a.PopupScreenshotContainer },
                            s.createElement("img", {
                              className: h.a.PopupScreenshot,
                              src: t,
                            })
                          )
                        ),
                        window
                      )
                    );
                    var t;
                  },
                  onMouseEnter: () => v(t),
                })
              );
            }
          }),
          s.createElement(
            "div",
            { className: h.a.MediaContainer },
            s.createElement(
              "div",
              { className: h.a.MainMediaCtn },
              Boolean(B) &&
                s.createElement(
                  "div",
                  {
                    className: Object(c.a)(
                      h.a.VideoThumbnail,
                      g ? h.a.videoPlaying : null
                    ),
                    onClick: w,
                  },
                  Boolean(-1 === C || void 0 === C)
                    ? s.createElement(
                        s.Fragment,
                        null,
                        s.createElement("img", { src: B.GetScreenshot() }),
                        s.createElement(
                          "div",
                          { className: h.a.VideoPlayButton },
                          s.createElement(o.Z, null)
                        )
                      )
                    : s.createElement("img", { src: E[C] })
                ),
              Boolean(!B) && s.createElement("img", { src: E[C] })
            ),
            Boolean(I.length > 0) &&
              s.createElement(
                "div",
                { className: h.a.Screenshot, onMouseLeave: () => v(-1) },
                I
              ),
            s.createElement(
              "div",
              {
                className: Object(c.a)(
                  h.a.VideoLargeContainer,
                  g ? h.a.videoPlaying : null
                ),
                onClick: w,
              },
              Boolean(g) &&
                s.createElement(
                  "video",
                  {
                    className: h.a.VideoLarge,
                    controls: !0,
                    autoPlay: !0,
                    poster: B.GetScreenshot(),
                  },
                  s.createElement("source", {
                    src: Object(l.a)()
                      ? B.GetTrailer480p().strWebMURL
                      : B.GetTrailerMax().strWebMURL,
                    type: "video/webm",
                  }),
                  Boolean(!a.d.IN_CLIENT) &&
                    s.createElement("source", {
                      src: Object(l.a)()
                        ? B.GetTrailer480p().strMP4URL
                        : B.GetTrailerMax().strMP4URL,
                      type: "video/mp4",
                    })
                ),
              s.createElement(
                "div",
                { onClick: w },
                s.createElement(o.Gb, null)
              )
            )
          )
        );
      }
    },
    PlCS: function (e, t, r) {
      "use strict";
      r.d(t, "b", function () {
        return u;
      }),
        r.d(t, "a", function () {
          return p;
        });
      var a = r("q1tI"),
        i = r("GXif"),
        n = r("fsrB"),
        s = (r("XrGS"), r("lfGQ")),
        o = r("0JCO"),
        l = r("pSt8"),
        c = r("/Q1a"),
        d = r("Uqeb"),
        m = r.n(d);
      const u = (e) => {
        const t = Object(o.c)(),
          r = Object(l.c)(e.url, c.d.STORE_BASE_URL);
        if (r) {
          const i = Object(s.b)(r, t);
          return a.createElement(
            n.c,
            {
              href: i,
              target: c.d.IN_CLIENT ? void 0 : "_blank",
              className: e.className,
              style: e.style,
            },
            e.children
          );
        }
        return a.createElement(a.Fragment, null, e.children);
      };
      function p(e) {
        const { section: t } = e;
        return t.label_link && !t.label_link_style
          ? a.createElement(
              "div",
              { className: m.a.SaleViewAll },
              a.createElement(
                u,
                { url: t.label_link },
                Object(i.g)("#btn_live_streams_all")
              )
            )
          : null;
      }
    },
    Q6q7: function (e, t, r) {
      e.exports = {
        DemoButton: "demobutton_DemoButton_1GAs9",
        DisabledButton: "demobutton_DisabledButton_2TQ4l",
      };
    },
    "QwK/": function (e, t, r) {
      "use strict";
      r.d(t, "a", function () {
        return o;
      });
      var a = r("mrSG"),
        i = r("/Q1a"),
        n = r("2vnA");
      r("3y2B");
      const s = 604800;
      class o {
        constructor() {
          (this.m_bEmoticonListRequested = !1),
            (this.m_bInitialized = !1),
            (this.m_rgEmoticons = []),
            (this.m_rgFlairs = []),
            (this.m_rgStickers = []),
            (this.m_rgEffects = []),
            (this.m_rtLastStickerOrEffect = Number.MIN_SAFE_INTEGER),
            (this.m_emoticonTrackerCallback = null),
            (this.m_stickerTrackerCallback = null);
        }
        static GetEmoticonURL(e, t) {
          return t
            ? i.d.COMMUNITY_CDN_URL + "economy/emoticonlarge/" + e
            : i.d.COMMUNITY_CDN_URL + "economy/emoticon/" + e;
        }
        static GetEmoticonReplaceRegex() {
          return o.sm_EmoticonRegex;
        }
        static BEmoticonFilterMatch(e, t) {
          return (
            -1 !== `:${e.name_normalized || e.name}:`.indexOf(t.toLowerCase())
          );
        }
        static FilterEmoticons(e, t) {
          return t && ":" !== t
            ? e.filter((e) => o.BEmoticonFilterMatch(e, t))
            : e;
        }
        static BStickerFilterMatch(e, t) {
          return e.name.toLowerCase().indexOf(t.toLowerCase()) > -1;
        }
        static FilterStickers(e, t) {
          return t ? e.filter((e) => o.BStickerFilterMatch(e, t)) : e;
        }
        SearchEmoticons(e, t = 25, r = !0) {
          function a(e) {
            return e.name_normalized || e.name;
          }
          this.UpdateEmoticonList(), (e = e.toLocaleLowerCase());
          let i = this.recent_emoticons.filter((t) => !e || a(t).startsWith(e)),
            n = this.recent_emoticons.filter(
              (t) => !r && -1 !== a(t).indexOf(e)
            ),
            s = this.m_rgEmoticons.filter((t) => !e || a(t).startsWith(e)),
            o = this.m_rgEmoticons.filter((t) => !r && -1 !== a(t).indexOf(e)),
            l = new Set(),
            c = [];
          function d(e, r, i) {
            return (
              !(c.length >= t) &&
              (l.has(e) ||
                (l.add(e), c.push({ name: a(e), recent: r, new: i })),
              !0)
            );
          }
          function m(e, t, r) {
            for (let a of e) if (!d(a, t, r(a))) break;
          }
          return (
            m(i, !0, (e) => !(e.last_used || !e.time_received)),
            m(s, !1, () => !1),
            m(n, !0, (e) => !(e.last_used || !e.time_received)),
            m(o, !1, () => !1),
            c
          );
        }
        get is_initialized() {
          return this.m_bInitialized;
        }
        GetTimeReceivedNewestEmoticon() {
          return this.UpdateEmoticonList(), this.m_rtMostRecentEmoticon;
        }
        GetTimeReceivedForStickerOrEffect() {
          return this.m_rtLastStickerOrEffect;
        }
        UpdateEmoticonList() {
          this.m_bInitialized || this.RequestEmoticonList();
        }
        get emoticon_list() {
          return this.UpdateEmoticonList(), this.m_rgEmoticons;
        }
        get flair_list() {
          return this.UpdateEmoticonList(), this.m_rgFlairs;
        }
        GetStickerList() {
          return this.m_rgStickers;
        }
        GetEffectList() {
          return this.m_rgEffects;
        }
        GetFlairListByGroupID(e) {
          return this.m_rgFlairs.filter((t) => t.flairGroupID === e);
        }
        get recent_emoticons() {
          return (
            this.m_rgRecentEmoticons || this.BuildRecentEmoticonList(),
            this.m_rgRecentEmoticons
          );
        }
        get recent_stickers() {
          return (
            this.m_rgRecentStickers || this.BuildRecentStickerList(),
            this.m_rgRecentStickers
          );
        }
        SetEmoticonTrackerCallback(e) {
          this.m_emoticonTrackerCallback = e;
        }
        SetStickerTrackerCallback(e) {
          this.m_stickerTrackerCallback = e;
        }
        TrackEmoticonUsage(e, t) {
          if (!this.m_bInitialized) return;
          this.m_emoticonTrackerCallback &&
            this.m_emoticonTrackerCallback(e, t);
          let r,
            a = new Map(),
            i = /\[emoticon\]([^[]*)/g;
          for (; (r = i.exec(e)); ) {
            let e = a.get(r[1]) || 0;
            a.set(r[1], e + 1);
          }
          let n = !1;
          if (a.size) {
            if (void 0 !== this.m_rgRecentEmoticons)
              for (let e of this.m_rgRecentEmoticons)
                a.has(e.name) &&
                  ((e.last_used = t),
                  (e.use_count += a.get(e.name)),
                  a.delete(e.name),
                  e.time_received && ((n = !0), delete e.time_received));
            if (a.size)
              for (let e of this.m_rgEmoticons)
                a.has(e.name) &&
                  ((e.last_used = t),
                  (e.use_count += a.get(e.name)),
                  delete e.time_received,
                  void 0 !== this.m_rgRecentEmoticons &&
                    this.m_rgRecentEmoticons.push(e));
            if (
              void 0 !== this.m_rgRecentEmoticons &&
              (this.BuildRecentEmoticonList(), n)
            ) {
              this.m_rtMostRecentEmoticon = void 0;
              for (let e of this.m_rgRecentEmoticons)
                !e.last_used &&
                  e.time_received &&
                  (!this.m_rtMostRecentEmoticon ||
                    e.time_received > this.m_rtMostRecentEmoticon) &&
                  (this.m_rtMostRecentEmoticon = e.time_received);
            }
          }
        }
        TrackStickerUsage(e, t) {
          if (!this.m_bInitialized) return;
          this.m_stickerTrackerCallback && this.m_stickerTrackerCallback(e, t);
          const r = this.m_rgStickers.find(({ name: t }) => t === e);
          (r.last_used = t),
            (r.use_count += 1),
            delete r.time_received,
            this.BuildRecentStickerList();
        }
        RequestEmoticonList() {
          !this.m_bEmoticonListRequested &&
            this.BInitialized() &&
            ((this.m_bEmoticonListRequested = !0),
            this.RequestEmoticonListInternal());
        }
        BuildRecentEmoticonList() {
          this.m_rgRecentEmoticons = this.BuildRecentList(this.m_rgEmoticons);
        }
        BuildRecentStickerList() {
          this.m_rgRecentStickers = this.BuildRecentList(this.m_rgStickers);
        }
        BuildRecentList(e) {
          const t = this.GetServerTime() - s,
            r = e.filter(
              ({ last_used: e, time_received: r }) => e || (r && r > t)
            );
          return (
            r.sort(
              (e, t) =>
                (t.last_used || t.time_received) -
                (e.last_used || e.time_received)
            ),
            r.slice(0, 50)
          );
        }
        OnEmoticonListReceived(e) {
          (this.m_rgFlairs = []),
            (this.m_rgEmoticons = []),
            (this.m_rgRecentEmoticons = void 0),
            (this.m_rtMostRecentEmoticon = void 0);
          let t = this.GetServerTime() - s;
          for (let r of e) {
            let e = r.name;
            e.startsWith("^")
              ? this.m_rgFlairs.push({
                  name: e.match(new RegExp(/:(.*):/))[1],
                  flairGroupID: e.match(new RegExp(/\^(.*)\^/))[1],
                })
              : (!r.last_used && r.time_received > t
                  ? (!this.m_rtMostRecentEmoticon ||
                      r.time_received > this.m_rtMostRecentEmoticon) &&
                    (this.m_rtMostRecentEmoticon = r.time_received)
                  : delete r.time_received,
                this.m_rgEmoticons.push(r));
          }
          (this.m_bInitialized = !0), (this.m_bEmoticonListRequested = !1);
        }
      }
      (o.sm_EmoticonRegex = new RegExp("ː([a-zA-Z0-9_\\-]+)ː", "g")),
        Object(a.b)([n.C], o.prototype, "m_bInitialized", void 0),
        Object(a.b)([n.C], o.prototype, "m_rtMostRecentEmoticon", void 0),
        Object(a.b)([n.C], o.prototype, "m_rtLastStickerOrEffect", void 0),
        Object(a.b)([n.k], o.prototype, "TrackEmoticonUsage", null);
    },
    Tj6G: function (e, t, r) {
      "use strict";
      var a, i;
      r.d(t, "a", function () {
        return i;
      }),
        r.d(t, "b", function () {
          return n;
        }),
        (function (e) {
          (e[(e.Hover = 0)] = "Hover"),
            (e[(e.ClickPopup = 1)] = "ClickPopup"),
            (e[(e.ClickSurroundingRegion = 2)] = "ClickSurroundingRegion");
        })(a || (a = {})),
        (function (e) {
          (e[(e.Chat = 0)] = "Chat"),
            (e[(e.Notification = 1)] = "Notification"),
            (e[(e.Error = 2)] = "Error");
        })(i || (i = {}));
      class n {}
    },
    Uqeb: function (e, t, r) {
      e.exports = {
        "duration-app-launch": "800ms",
        SaleSection: "partnersaledisplay_SaleSection_2NfLq",
        CarouselDisplay: "partnersaledisplay_CarouselDisplay_3ez1r",
        SaleHeaderContainer: "partnersaledisplay_SaleHeaderContainer_ETZ4z",
        SaleViewAll: "partnersaledisplay_SaleViewAll_38YHb",
        SaleSectionLoginPrompt:
          "partnersaledisplay_SaleSectionLoginPrompt_3JoLJ",
        LoginButton: "partnersaledisplay_LoginButton_1wBKC",
        SaleOverlayCtn: "partnersaledisplay_SaleOverlayCtn_2xKaE",
        SaleOverlay: "partnersaledisplay_SaleOverlay_3Ae58",
        AppSummaryWidgetCtn: "partnersaledisplay_AppSummaryWidgetCtn_1q54W",
        SaleBroadcastCtn: "partnersaledisplay_SaleBroadcastCtn_kBxKM",
        SaleOuterContainer: "partnersaledisplay_SaleOuterContainer_3FwA4",
        CustomStyle_together: "partnersaledisplay_CustomStyle_together_uGPz3",
        SaleBackground: "partnersaledisplay_SaleBackground_dmyDb",
        SaleSectionTitleCtn: "partnersaledisplay_SaleSectionTitleCtn_15zSJ",
        SaleSectionSubtext: "partnersaledisplay_SaleSectionSubtext_1BNUj",
        SaleSectionContainer: "partnersaledisplay_SaleSectionContainer_2IK75",
        vr_supported: "partnersaledisplay_vr_supported_2m9mT",
        vr_required: "partnersaledisplay_vr_required_1KRF9",
        preview_placeholder_section:
          "partnersaledisplay_preview_placeholder_section_38fsw",
        LinkCapsule: "partnersaledisplay_LinkCapsule_1RNIS",
        fullscreen_bg: "partnersaledisplay_fullscreen_bg_gxZ-I",
        fullscreen_bg_video: "partnersaledisplay_fullscreen_bg_video_2iQk_",
        SalePageBroadcastContextHover:
          "partnersaledisplay_SalePageBroadcastContextHover_2FnvM",
        AlbumCoverImage: "partnersaledisplay_AlbumCoverImage_3tXaB",
        AlbumTitle: "partnersaledisplay_AlbumTitle_1Izji",
        PreviewSalesPageContainer:
          "partnersaledisplay_PreviewSalesPageContainer_1hdiV",
        SaleSectionTabs: "partnersaledisplay_SaleSectionTabs_2xKqp",
        DesktopTabs: "partnersaledisplay_DesktopTabs_3ZE2w",
        SaleSectionTabsTab: "partnersaledisplay_SaleSectionTabsTab_tm6Kr",
        SaleSectionTabContainer:
          "partnersaledisplay_SaleSectionTabContainer_2jFfU",
        SaleSectionTabsRow: "partnersaledisplay_SaleSectionTabsRow_2Zyym",
        SaleTab: "partnersaledisplay_SaleTab_3jWYu",
        SaleTabLabel: "partnersaledisplay_SaleTabLabel_1mvCC",
        SaleSectionTabListContainer:
          "partnersaledisplay_SaleSectionTabListContainer_2JpdO",
        MobileTabSelector: "partnersaledisplay_MobileTabSelector___-ej",
        Visible: "partnersaledisplay_Visible_1qbyF",
        MobileTabSelectorButton:
          "partnersaledisplay_MobileTabSelectorButton_3JQSU",
        MobileTabSelectorShortcut:
          "partnersaledisplay_MobileTabSelectorShortcut_2X2N0",
        MobileTabSelectorDropDown:
          "partnersaledisplay_MobileTabSelectorDropDown_3NkOH",
        MobileTabSelectorOption:
          "partnersaledisplay_MobileTabSelectorOption_q1PYm",
        TabContentsContainer: "partnersaledisplay_TabContentsContainer_eXY8b",
        HorizontalScrollInDragForceCursor:
          "partnersaledisplay_HorizontalScrollInDragForceCursor_2NQZ0",
        SaleBroadcastSection: "partnersaledisplay_SaleBroadcastSection_1pEDH",
        CarouselPage: "partnersaledisplay_CarouselPage_1_ViR",
        TabButtonsCtn: "partnersaledisplay_TabButtonsCtn_2jMTe",
        TabButton: "partnersaledisplay_TabButton_3ZFfZ",
        DefaultCreatorCtn: "partnersaledisplay_DefaultCreatorCtn_1TAEj",
        EventSectionViewAllCtn:
          "partnersaledisplay_EventSectionViewAllCtn_3RuY2",
      };
    },
    VJsr: function (e, t, r) {
      "use strict";
      r.d(t, "a", function () {
        return a;
      }),
        r.d(t, "b", function () {
          return c;
        });
      var a,
        i = r("vDqi"),
        n = r.n(i),
        s = (r("uLSr"), r("/Q1a")),
        o = (r("Zdsb"), r("6ese"), r("/4gK"), r("3u1o")),
        l = r("MKRT");
      !(function (e) {
        (e[(e.k_eDiscussions = 0)] = "k_eDiscussions"),
          (e[(e.k_eThumbsUp = 1)] = "k_eThumbsUp"),
          (e[(e.k_eClickThrough = 2)] = "k_eClickThrough"),
          (e[(e.k_eMuted = 3)] = "k_eMuted"),
          (e[(e.k_ePlayedVideo = 4)] = "k_ePlayedVideo"),
          (e[(e.k_eReminder_Opened = 5)] = "k_eReminder_Opened"),
          (e[(e.k_eReminder_MobilePush = 6)] = "k_eReminder_MobilePush"),
          (e[(e.k_eReminder_Email = 7)] = "k_eReminder_Email"),
          (e[(e.k_eReminder_CalendarApple = 8)] = "k_eReminder_CalendarApple"),
          (e[(e.k_eReminder_CalendarGoogle = 9)] =
            "k_eReminder_CalendarGoogle"),
          (e[(e.k_eReminder_CalendarOutlook = 10)] =
            "k_eReminder_CalendarOutlook"),
          (e[(e.k_eReminder_EmailUnverified = 11)] =
            "k_eReminder_EmailUnverified"),
          (e[(e.k_eReminder_MobilePushMissing = 12)] =
            "k_eReminder_MobilePushMissing");
      })(a || (a = {}));
      const c = new (class {
        constructor() {
          (this.m_nPastViewedIndex = 0),
            (this.m_nPastViewedDays = 0),
            (this.m_nFutureViewedIndex = 0),
            (this.m_nFutureViewableEvents = 0),
            (this.m_nLastRecordedFilter = 0),
            (this.m_sBrowserID = void 0),
            (this.m_scheduledFilterChange = new o.b()),
            (this.m_scheduledFutureStats = new o.b()),
            (this.m_scheduledPastStats = new o.b());
        }
        RecordViewedEvent(e, t) {
          const r = e.GetStoreInitializationTimestamp().getTime() / 1e3;
          this.m_nFutureViewableEvents = 0;
          let a,
            i = 0,
            n = null;
          const s = e.GetCurrentlyLoadedItemsForStats();
          for (const e of s) {
            const s = e.start_time > r;
            if ((e.unique_id == t && ((a = i), (n = e)), s))
              this.m_nFutureViewableEvents++;
            else if (void 0 !== a) break;
            i++;
          }
          if (void 0 !== a)
            if (a < this.m_nFutureViewableEvents) {
              const t = this.m_nFutureViewableEvents - a;
              if (this.m_nFutureViewedIndex < t) {
                this.m_nFutureViewedIndex = t;
                const r = () => {
                    const t =
                      Math.min(this.m_nFutureViewedIndex, 4095) |
                      (Math.min(this.m_nFutureViewableEvents, 255) << 12) |
                      (Math.min(this.GetTimeSpentOnPageS(e), 2047) << 20);
                    c.SendExperimentEventToSteam(18, t);
                  },
                  a = 500;
                this.m_scheduledFutureStats.Schedule(a, r);
              }
            } else {
              const t = a - this.m_nFutureViewableEvents;
              if (this.m_nPastViewedIndex < t) {
                (this.m_nPastViewedIndex = t),
                  (this.m_nPastViewedDays = Math.floor(
                    (r - n.start_time) / 86400
                  ));
                const a = () => {
                    const t =
                      Math.min(this.m_nPastViewedIndex, 4095) |
                      (Math.min(this.m_nPastViewedDays, 255) << 12) |
                      (Math.min(this.GetTimeSpentOnPageS(e), 2047) << 20);
                    c.SendExperimentEventToSteam(17, t);
                  },
                  i = 500;
                this.m_scheduledPastStats.Schedule(i, a);
              }
            }
        }
        RecordFilterChangeEvent(e) {
          this.m_scheduledFilterChange.Schedule(1e3, () => {
            let t = 0;
            e.BIsGameSourceAllowed(l.c.k_ELibrary) && (t |= 1),
              e.BIsGameSourceAllowed(l.c.k_EWishlist) && (t |= 2),
              e.BIsGameSourceAllowed(l.c.k_EFollowing) && (t |= 4),
              e.BIsGameSourceAllowed(l.c.k_ERecommended) && (t |= 8),
              e.BIsGameSourceAllowed(l.c.k_ESteam) && (t |= 16),
              e.BIsGameSourceAllowed(l.c.k_EFeatured) && (t |= 32),
              e.BIsGameSourceAllowed(l.c.k_ERecent) && (t |= 64),
              e.BIsEventTypeGroupAllowed(l.b.k_ENews) && (t |= 1024),
              e.BIsEventTypeGroupAllowed(l.b.k_EEvents) && (t |= 2048),
              e.BIsEventTypeGroupAllowed(l.b.k_EStreaming) && (t |= 4096),
              e.BIsEventTypeGroupAllowed(l.b.k_EUpdates) && (t |= 8192),
              e.BIsEventTypeGroupAllowed(l.b.k_EReleases) && (t |= 16384),
              e.BIsEventTypeGroupAllowed(l.b.k_ESales) && (t |= 32768),
              t != this.m_nLastRecordedFilter &&
                ((this.m_nLastRecordedFilter = t),
                this.SendExperimentEventToSteam(16, t));
          });
        }
        GetTimeSpentOnPageS(e) {
          const t = e.GetStoreInitializationTimestamp(),
            r = new Date();
          return Math.max(0, Math.floor((r.getTime() - t.getTime()) / 1e3));
        }
        RecordAppInteractionEvent(e, t) {
          this.SendExperimentEventToSteam(19, t);
        }
        SendExperimentEventToSteam(e, t) {
          this.InitBrowserID();
          const r = s.d.STORE_BASE_URL + "events/ajaxreportnewshubstats/",
            a = new URLSearchParams();
          a.append("page_action", "" + e),
            a.append("snr", s.d.SNR),
            a.append("uint_data", "" + t),
            a.append("str_data", this.m_sBrowserID),
            n.a.post(r, a);
        }
        InitBrowserID() {
          if (void 0 === this.m_sBrowserID)
            if (s.d.IN_CLIENT) this.m_sBrowserID = "steam";
            else {
              const e = navigator.userAgent;
              /iPhone|iPad|iPod/i.test(e) ||
              (/Macintosh/i.test(e) && /Safari/i.test(e))
                ? (this.m_sBrowserID = "ios")
                : /Android/i.test(e)
                ? (this.m_sBrowserID = "android")
                : (this.m_sBrowserID = "");
            }
        }
      })();
      window.g_EventCalendarTrackingStore = c;
    },
    VVjd: function (e, t, r) {
      e.exports = { strMaxMobileWidth: "700px" };
    },
    Wtw7: function (e, t, r) {
      "use strict";
      r("XrGS"), r("bmfB"), r("HGFm"), r("msu0"), r("sTxY");
    },
    Y3DF: function (e, t, r) {
      e.exports = { CompatIcon: "deckcompaticons_CompatIcon_25ILU" };
    },
    ZBhF: function (e, t, r) {
      "use strict";
      r.d(t, "c", function () {
        return C;
      }),
        r.d(t, "e", function () {
          return E;
        }),
        r.d(t, "b", function () {
          return T;
        }),
        r.d(t, "d", function () {
          return R;
        }),
        r.d(t, "a", function () {
          return ae;
        });
      var a = r("hRO2"),
        i = r("3dpo");
      const n = a.Message;
      class s extends n {
        constructor(e = null) {
          super(),
            s.prototype.broadcast_id || i.a(s.M()),
            n.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            s.sm_m ||
              (s.sm_m = {
                proto: s,
                fields: {
                  broadcast_id: {
                    n: 1,
                    br: i.d.readFixed64String,
                    bw: i.h.writeFixed64String,
                  },
                  thumbnail_upload_address: {
                    n: 2,
                    br: i.d.readString,
                    bw: i.h.writeString,
                  },
                  thumbnail_upload_token: {
                    n: 3,
                    br: i.d.readString,
                    bw: i.h.writeString,
                  },
                  thumbnail_interval_seconds: {
                    n: 4,
                    br: i.d.readUint32,
                    bw: i.h.writeUint32,
                  },
                  heartbeat_interval_seconds: {
                    n: 5,
                    br: i.d.readUint32,
                    bw: i.h.writeUint32,
                  },
                },
              }),
            s.sm_m
          );
        }
        static MBF() {
          return s.sm_mbf || (s.sm_mbf = i.e(s.M())), s.sm_mbf;
        }
        toObject(e = !1) {
          return s.toObject(e, this);
        }
        static toObject(e, t) {
          return i.g(s.M(), e, t);
        }
        static fromObject(e) {
          return i.c(s.M(), e);
        }
        static deserializeBinary(e) {
          let t = new a.BinaryReader(e),
            r = new s();
          return s.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.b(s.MBF(), e, t);
        }
        serializeBinary() {
          var e = new a.BinaryWriter();
          return s.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.f(s.M(), e, t);
        }
        serializeBase64String() {
          var e = new a.BinaryWriter();
          return s.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CBroadcast_BeginBroadcastSession_Response";
        }
      }
      class o extends n {
        constructor(e = null) {
          super(), n.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return o.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new o();
        }
        static deserializeBinary(e) {
          let t = new a.BinaryReader(e),
            r = new o();
          return o.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new a.BinaryWriter();
          return o.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new a.BinaryWriter();
          return o.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CBroadcast_EndBroadcastSession_Response";
        }
      }
      class l extends n {
        constructor(e = null) {
          super(),
            l.prototype.upload_token || i.a(l.M()),
            n.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            l.sm_m ||
              (l.sm_m = {
                proto: l,
                fields: {
                  upload_token: {
                    n: 1,
                    br: i.d.readString,
                    bw: i.h.writeString,
                  },
                  upload_address: {
                    n: 2,
                    br: i.d.readString,
                    bw: i.h.writeString,
                  },
                  broadcast_upload_id: {
                    n: 3,
                    br: i.d.readFixed64String,
                    bw: i.h.writeFixed64String,
                  },
                  enable_replay: { n: 6, br: i.d.readBool, bw: i.h.writeBool },
                  http_address: {
                    n: 7,
                    br: i.d.readString,
                    bw: i.h.writeString,
                  },
                },
              }),
            l.sm_m
          );
        }
        static MBF() {
          return l.sm_mbf || (l.sm_mbf = i.e(l.M())), l.sm_mbf;
        }
        toObject(e = !1) {
          return l.toObject(e, this);
        }
        static toObject(e, t) {
          return i.g(l.M(), e, t);
        }
        static fromObject(e) {
          return i.c(l.M(), e);
        }
        static deserializeBinary(e) {
          let t = new a.BinaryReader(e),
            r = new l();
          return l.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.b(l.MBF(), e, t);
        }
        serializeBinary() {
          var e = new a.BinaryWriter();
          return l.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.f(l.M(), e, t);
        }
        serializeBase64String() {
          var e = new a.BinaryWriter();
          return l.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CBroadcast_StartBroadcastUpload_Response";
        }
      }
      class c extends n {
        constructor(e = null) {
          super(),
            c.prototype.broadcast_id || i.a(c.M()),
            n.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            c.sm_m ||
              (c.sm_m = {
                proto: c,
                fields: {
                  broadcast_id: {
                    n: 1,
                    br: i.d.readFixed64String,
                    bw: i.h.writeFixed64String,
                  },
                  upload_token: {
                    n: 2,
                    br: i.d.readString,
                    bw: i.h.writeString,
                  },
                  upload_address: {
                    n: 3,
                    br: i.d.readString,
                    bw: i.h.writeString,
                  },
                  http_address: {
                    n: 4,
                    br: i.d.readString,
                    bw: i.h.writeString,
                  },
                  broadcast_upload_id: {
                    n: 5,
                    br: i.d.readFixed64String,
                    bw: i.h.writeFixed64String,
                  },
                  heartbeat_interval_seconds: {
                    n: 6,
                    br: i.d.readUint32,
                    bw: i.h.writeUint32,
                  },
                  is_rtmp: { n: 7, br: i.d.readBool, bw: i.h.writeBool },
                },
              }),
            c.sm_m
          );
        }
        static MBF() {
          return c.sm_mbf || (c.sm_mbf = i.e(c.M())), c.sm_mbf;
        }
        toObject(e = !1) {
          return c.toObject(e, this);
        }
        static toObject(e, t) {
          return i.g(c.M(), e, t);
        }
        static fromObject(e) {
          return i.c(c.M(), e);
        }
        static deserializeBinary(e) {
          let t = new a.BinaryReader(e),
            r = new c();
          return c.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.b(c.MBF(), e, t);
        }
        serializeBinary() {
          var e = new a.BinaryWriter();
          return c.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.f(c.M(), e, t);
        }
        serializeBase64String() {
          var e = new a.BinaryWriter();
          return c.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CBroadcast_BroadcastUploadStarted_Notification";
        }
      }
      class d extends n {
        constructor(e = null) {
          super(),
            d.prototype.gameid || i.a(d.M()),
            n.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            d.sm_m ||
              (d.sm_m = {
                proto: d,
                fields: {
                  gameid: {
                    n: 1,
                    br: i.d.readUint64String,
                    bw: i.h.writeUint64String,
                  },
                  title: { n: 2, br: i.d.readString, bw: i.h.writeString },
                  num_viewers: {
                    n: 3,
                    br: i.d.readUint32,
                    bw: i.h.writeUint32,
                  },
                  permission: { n: 4, br: i.d.readInt32, bw: i.h.writeInt32 },
                  is_rtmp: { n: 5, br: i.d.readBool, bw: i.h.writeBool },
                  seconds_delay: {
                    n: 6,
                    br: i.d.readInt32,
                    bw: i.h.writeInt32,
                  },
                  is_publisher: { n: 7, br: i.d.readBool, bw: i.h.writeBool },
                  thumbnail_url: {
                    n: 8,
                    br: i.d.readString,
                    bw: i.h.writeString,
                  },
                  update_interval: {
                    n: 9,
                    br: i.d.readInt32,
                    bw: i.h.writeInt32,
                  },
                  is_uploading: { n: 10, br: i.d.readBool, bw: i.h.writeBool },
                  duration: { n: 11, br: i.d.readUint32, bw: i.h.writeUint32 },
                  is_replay: { n: 12, br: i.d.readBool, bw: i.h.writeBool },
                  is_capturing_vod: {
                    n: 13,
                    br: i.d.readBool,
                    bw: i.h.writeBool,
                  },
                  is_store_whitelisted: {
                    n: 14,
                    br: i.d.readBool,
                    bw: i.h.writeBool,
                  },
                },
              }),
            d.sm_m
          );
        }
        static MBF() {
          return d.sm_mbf || (d.sm_mbf = i.e(d.M())), d.sm_mbf;
        }
        toObject(e = !1) {
          return d.toObject(e, this);
        }
        static toObject(e, t) {
          return i.g(d.M(), e, t);
        }
        static fromObject(e) {
          return i.c(d.M(), e);
        }
        static deserializeBinary(e) {
          let t = new a.BinaryReader(e),
            r = new d();
          return d.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.b(d.MBF(), e, t);
        }
        serializeBinary() {
          var e = new a.BinaryWriter();
          return d.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.f(d.M(), e, t);
        }
        serializeBase64String() {
          var e = new a.BinaryWriter();
          return d.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CBroadcast_GetBroadcastStatus_Response";
        }
      }
      class m extends n {
        constructor(e = null) {
          super(),
            m.prototype.thumbnail_url || i.a(m.M()),
            n.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            m.sm_m ||
              (m.sm_m = {
                proto: m,
                fields: {
                  thumbnail_url: {
                    n: 1,
                    br: i.d.readString,
                    bw: i.h.writeString,
                  },
                  update_interval: {
                    n: 2,
                    br: i.d.readInt32,
                    bw: i.h.writeInt32,
                  },
                  num_viewers: { n: 3, br: i.d.readInt32, bw: i.h.writeInt32 },
                  duration: { n: 4, br: i.d.readInt32, bw: i.h.writeInt32 },
                },
              }),
            m.sm_m
          );
        }
        static MBF() {
          return m.sm_mbf || (m.sm_mbf = i.e(m.M())), m.sm_mbf;
        }
        toObject(e = !1) {
          return m.toObject(e, this);
        }
        static toObject(e, t) {
          return i.g(m.M(), e, t);
        }
        static fromObject(e) {
          return i.c(m.M(), e);
        }
        static deserializeBinary(e) {
          let t = new a.BinaryReader(e),
            r = new m();
          return m.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.b(m.MBF(), e, t);
        }
        serializeBinary() {
          var e = new a.BinaryWriter();
          return m.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.f(m.M(), e, t);
        }
        serializeBase64String() {
          var e = new a.BinaryWriter();
          return m.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CBroadcast_GetBroadcastThumbnail_Response";
        }
      }
      class u extends n {
        constructor(e = null) {
          super(),
            u.prototype.response || i.a(u.M()),
            n.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            u.sm_m ||
              (u.sm_m = {
                proto: u,
                fields: {
                  response: { n: 1, br: i.d.readEnum, bw: i.h.writeEnum },
                  mpd_url: { n: 2, br: i.d.readString, bw: i.h.writeString },
                  broadcast_id: {
                    n: 3,
                    br: i.d.readFixed64String,
                    bw: i.h.writeFixed64String,
                  },
                  gameid: {
                    n: 4,
                    br: i.d.readUint64String,
                    bw: i.h.writeUint64String,
                  },
                  title: { n: 5, br: i.d.readString, bw: i.h.writeString },
                  num_viewers: {
                    n: 6,
                    br: i.d.readUint32,
                    bw: i.h.writeUint32,
                  },
                  permission: { n: 7, br: i.d.readInt32, bw: i.h.writeInt32 },
                  is_rtmp: { n: 8, br: i.d.readBool, bw: i.h.writeBool },
                  seconds_delay: {
                    n: 9,
                    br: i.d.readInt32,
                    bw: i.h.writeInt32,
                  },
                  viewer_token: {
                    n: 10,
                    br: i.d.readFixed64String,
                    bw: i.h.writeFixed64String,
                  },
                  hls_m3u8_master_url: {
                    n: 11,
                    br: i.d.readString,
                    bw: i.h.writeString,
                  },
                  heartbeat_interval: {
                    n: 12,
                    br: i.d.readInt32,
                    bw: i.h.writeInt32,
                  },
                  thumbnail_url: {
                    n: 13,
                    br: i.d.readString,
                    bw: i.h.writeString,
                  },
                  is_webrtc: { n: 14, br: i.d.readBool, bw: i.h.writeBool },
                  webrtc_session_id: {
                    n: 15,
                    br: i.d.readFixed64String,
                    bw: i.h.writeFixed64String,
                  },
                  webrtc_offer_sdp: {
                    n: 16,
                    br: i.d.readString,
                    bw: i.h.writeString,
                  },
                  webrtc_turn_server: {
                    n: 17,
                    br: i.d.readString,
                    bw: i.h.writeString,
                  },
                  is_replay: { n: 18, br: i.d.readBool, bw: i.h.writeBool },
                  duration: { n: 19, br: i.d.readInt32, bw: i.h.writeInt32 },
                  cdn_auth_url_parameters: {
                    n: 20,
                    br: i.d.readString,
                    bw: i.h.writeString,
                  },
                },
              }),
            u.sm_m
          );
        }
        static MBF() {
          return u.sm_mbf || (u.sm_mbf = i.e(u.M())), u.sm_mbf;
        }
        toObject(e = !1) {
          return u.toObject(e, this);
        }
        static toObject(e, t) {
          return i.g(u.M(), e, t);
        }
        static fromObject(e) {
          return i.c(u.M(), e);
        }
        static deserializeBinary(e) {
          let t = new a.BinaryReader(e),
            r = new u();
          return u.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.b(u.MBF(), e, t);
        }
        serializeBinary() {
          var e = new a.BinaryWriter();
          return u.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.f(u.M(), e, t);
        }
        serializeBase64String() {
          var e = new a.BinaryWriter();
          return u.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CBroadcast_WatchBroadcast_Response";
        }
      }
      class p extends n {
        constructor(e = null) {
          super(),
            p.prototype.success || i.a(p.M()),
            n.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            p.sm_m ||
              (p.sm_m = {
                proto: p,
                fields: {
                  success: { n: 1, br: i.d.readBool, bw: i.h.writeBool },
                },
              }),
            p.sm_m
          );
        }
        static MBF() {
          return p.sm_mbf || (p.sm_mbf = i.e(p.M())), p.sm_mbf;
        }
        toObject(e = !1) {
          return p.toObject(e, this);
        }
        static toObject(e, t) {
          return i.g(p.M(), e, t);
        }
        static fromObject(e) {
          return i.c(p.M(), e);
        }
        static deserializeBinary(e) {
          let t = new a.BinaryReader(e),
            r = new p();
          return p.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.b(p.MBF(), e, t);
        }
        serializeBinary() {
          var e = new a.BinaryWriter();
          return p.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.f(p.M(), e, t);
        }
        serializeBase64String() {
          var e = new a.BinaryWriter();
          return p.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CBroadcast_InviteToBroadcast_Response";
        }
      }
      class _ extends n {
        constructor(e = null) {
          super(), n.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return _.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new _();
        }
        static deserializeBinary(e) {
          let t = new a.BinaryReader(e),
            r = new _();
          return _.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new a.BinaryWriter();
          return _.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new a.BinaryWriter();
          return _.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CBroadcast_SendBroadcastStateToServer_Response";
        }
      }
      class h extends n {
        constructor(e = null) {
          super(),
            h.prototype.steamid || i.a(h.M()),
            n.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            h.sm_m ||
              (h.sm_m = {
                proto: h,
                fields: {
                  steamid: {
                    n: 1,
                    br: i.d.readFixed64String,
                    bw: i.h.writeFixed64String,
                  },
                  state: { n: 2, br: i.d.readEnum, bw: i.h.writeEnum },
                },
              }),
            h.sm_m
          );
        }
        static MBF() {
          return h.sm_mbf || (h.sm_mbf = i.e(h.M())), h.sm_mbf;
        }
        toObject(e = !1) {
          return h.toObject(e, this);
        }
        static toObject(e, t) {
          return i.g(h.M(), e, t);
        }
        static fromObject(e) {
          return i.c(h.M(), e);
        }
        static deserializeBinary(e) {
          let t = new a.BinaryReader(e),
            r = new h();
          return h.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.b(h.MBF(), e, t);
        }
        serializeBinary() {
          var e = new a.BinaryWriter();
          return h.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.f(h.M(), e, t);
        }
        serializeBase64String() {
          var e = new a.BinaryWriter();
          return h.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CBroadcast_BroadcastViewerState_Notification";
        }
      }
      class b extends n {
        constructor(e = null) {
          super(),
            b.prototype.broadcast_id || i.a(b.M()),
            n.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            b.sm_m ||
              (b.sm_m = {
                proto: b,
                fields: {
                  broadcast_id: {
                    n: 1,
                    br: i.d.readFixed64String,
                    bw: i.h.writeFixed64String,
                  },
                },
              }),
            b.sm_m
          );
        }
        static MBF() {
          return b.sm_mbf || (b.sm_mbf = i.e(b.M())), b.sm_mbf;
        }
        toObject(e = !1) {
          return b.toObject(e, this);
        }
        static toObject(e, t) {
          return i.g(b.M(), e, t);
        }
        static fromObject(e) {
          return i.c(b.M(), e);
        }
        static deserializeBinary(e) {
          let t = new a.BinaryReader(e),
            r = new b();
          return b.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.b(b.MBF(), e, t);
        }
        serializeBinary() {
          var e = new a.BinaryWriter();
          return b.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.f(b.M(), e, t);
        }
        serializeBase64String() {
          var e = new a.BinaryWriter();
          return b.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CBroadcast_WaitingBroadcastViewer_Notification";
        }
      }
      class g extends n {
        constructor(e = null) {
          super(),
            g.prototype.broadcast_id || i.a(g.M()),
            n.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            g.sm_m ||
              (g.sm_m = {
                proto: g,
                fields: {
                  broadcast_id: {
                    n: 1,
                    br: i.d.readFixed64String,
                    bw: i.h.writeFixed64String,
                  },
                  broadcast_relay_id: {
                    n: 2,
                    br: i.d.readFixed64String,
                    bw: i.h.writeFixed64String,
                  },
                  upload_result: {
                    n: 3,
                    br: i.d.readUint32,
                    bw: i.h.writeUint32,
                  },
                  too_many_poor_uploads: {
                    n: 4,
                    br: i.d.readBool,
                    bw: i.h.writeBool,
                  },
                },
              }),
            g.sm_m
          );
        }
        static MBF() {
          return g.sm_mbf || (g.sm_mbf = i.e(g.M())), g.sm_mbf;
        }
        toObject(e = !1) {
          return g.toObject(e, this);
        }
        static toObject(e, t) {
          return i.g(g.M(), e, t);
        }
        static fromObject(e) {
          return i.c(g.M(), e);
        }
        static deserializeBinary(e) {
          let t = new a.BinaryReader(e),
            r = new g();
          return g.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.b(g.MBF(), e, t);
        }
        serializeBinary() {
          var e = new a.BinaryWriter();
          return g.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.f(g.M(), e, t);
        }
        serializeBase64String() {
          var e = new a.BinaryWriter();
          return g.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CBroadcast_StopBroadcastUpload_Notification";
        }
      }
      class S extends n {
        constructor(e = null) {
          super(),
            S.prototype.broadcast_id || i.a(S.M()),
            n.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            S.sm_m ||
              (S.sm_m = {
                proto: S,
                fields: {
                  broadcast_id: {
                    n: 1,
                    br: i.d.readFixed64String,
                    bw: i.h.writeFixed64String,
                  },
                },
              }),
            S.sm_m
          );
        }
        static MBF() {
          return S.sm_mbf || (S.sm_mbf = i.e(S.M())), S.sm_mbf;
        }
        toObject(e = !1) {
          return S.toObject(e, this);
        }
        static toObject(e, t) {
          return i.g(S.M(), e, t);
        }
        static fromObject(e) {
          return i.c(S.M(), e);
        }
        static deserializeBinary(e) {
          let t = new a.BinaryReader(e),
            r = new S();
          return S.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.b(S.MBF(), e, t);
        }
        serializeBinary() {
          var e = new a.BinaryWriter();
          return S.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.f(S.M(), e, t);
        }
        serializeBase64String() {
          var e = new a.BinaryWriter();
          return S.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CBroadcast_SessionClosed_Notification";
        }
      }
      class f extends n {
        constructor(e = null) {
          super(),
            f.prototype.broadcast_id || i.a(f.M()),
            n.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            f.sm_m ||
              (f.sm_m = {
                proto: f,
                fields: {
                  broadcast_id: {
                    n: 1,
                    br: i.d.readFixed64String,
                    bw: i.h.writeFixed64String,
                  },
                  num_viewers: { n: 2, br: i.d.readInt32, bw: i.h.writeInt32 },
                },
              }),
            f.sm_m
          );
        }
        static MBF() {
          return f.sm_mbf || (f.sm_mbf = i.e(f.M())), f.sm_mbf;
        }
        toObject(e = !1) {
          return f.toObject(e, this);
        }
        static toObject(e, t) {
          return i.g(f.M(), e, t);
        }
        static fromObject(e) {
          return i.c(f.M(), e);
        }
        static deserializeBinary(e) {
          let t = new a.BinaryReader(e),
            r = new f();
          return f.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.b(f.MBF(), e, t);
        }
        serializeBinary() {
          var e = new a.BinaryWriter();
          return f.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.f(f.M(), e, t);
        }
        serializeBase64String() {
          var e = new a.BinaryWriter();
          return f.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CBroadcast_BroadcastStatus_Notification";
        }
      }
      class v extends n {
        constructor(e = null) {
          super(),
            v.prototype.broadcast_channel_id || i.a(v.M()),
            n.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            v.sm_m ||
              (v.sm_m = {
                proto: v,
                fields: {
                  broadcast_channel_id: {
                    n: 1,
                    br: i.d.readFixed64String,
                    bw: i.h.writeFixed64String,
                  },
                  broadcast_channel_name: {
                    n: 2,
                    br: i.d.readString,
                    bw: i.h.writeString,
                  },
                  broadcast_channel_avatar: {
                    n: 3,
                    br: i.d.readString,
                    bw: i.h.writeString,
                  },
                },
              }),
            v.sm_m
          );
        }
        static MBF() {
          return v.sm_mbf || (v.sm_mbf = i.e(v.M())), v.sm_mbf;
        }
        toObject(e = !1) {
          return v.toObject(e, this);
        }
        static toObject(e, t) {
          return i.g(v.M(), e, t);
        }
        static fromObject(e) {
          return i.c(v.M(), e);
        }
        static deserializeBinary(e) {
          let t = new a.BinaryReader(e),
            r = new v();
          return v.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.b(v.MBF(), e, t);
        }
        serializeBinary() {
          var e = new a.BinaryWriter();
          return v.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.f(v.M(), e, t);
        }
        serializeBase64String() {
          var e = new a.BinaryWriter();
          return v.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CBroadcast_BroadcastChannelLive_Notification";
        }
      }
      class y extends n {
        constructor(e = null) {
          super(),
            y.prototype.thumbnail_upload_token || i.a(y.M()),
            n.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            y.sm_m ||
              (y.sm_m = {
                proto: y,
                fields: {
                  thumbnail_upload_token: {
                    n: 1,
                    br: i.d.readString,
                    bw: i.h.writeString,
                  },
                  thumbnail_broadcast_session_id: {
                    n: 2,
                    br: i.d.readFixed64String,
                    bw: i.h.writeFixed64String,
                  },
                  thumbnail_data: {
                    n: 3,
                    br: i.d.readBytes,
                    bw: i.h.writeBytes,
                  },
                  thumbnail_width: {
                    n: 4,
                    br: i.d.readUint32,
                    bw: i.h.writeUint32,
                  },
                  thumbnail_height: {
                    n: 5,
                    br: i.d.readUint32,
                    bw: i.h.writeUint32,
                  },
                },
              }),
            y.sm_m
          );
        }
        static MBF() {
          return y.sm_mbf || (y.sm_mbf = i.e(y.M())), y.sm_mbf;
        }
        toObject(e = !1) {
          return y.toObject(e, this);
        }
        static toObject(e, t) {
          return i.g(y.M(), e, t);
        }
        static fromObject(e) {
          return i.c(y.M(), e);
        }
        static deserializeBinary(e) {
          let t = new a.BinaryReader(e),
            r = new y();
          return y.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.b(y.MBF(), e, t);
        }
        serializeBinary() {
          var e = new a.BinaryWriter();
          return y.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.f(y.M(), e, t);
        }
        serializeBase64String() {
          var e = new a.BinaryWriter();
          return y.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CBroadcast_SendThumbnailToRelay_Notification";
        }
      }
      class B extends n {
        constructor(e = null) {
          super(),
            B.prototype.broadcaster_steamid || i.a(B.M()),
            n.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            B.sm_m ||
              (B.sm_m = {
                proto: B,
                fields: {
                  broadcaster_steamid: {
                    n: 1,
                    br: i.d.readFixed64String,
                    bw: i.h.writeFixed64String,
                  },
                },
              }),
            B.sm_m
          );
        }
        static MBF() {
          return B.sm_mbf || (B.sm_mbf = i.e(B.M())), B.sm_mbf;
        }
        toObject(e = !1) {
          return B.toObject(e, this);
        }
        static toObject(e, t) {
          return i.g(B.M(), e, t);
        }
        static fromObject(e) {
          return i.c(B.M(), e);
        }
        static deserializeBinary(e) {
          let t = new a.BinaryReader(e),
            r = new B();
          return B.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.b(B.MBF(), e, t);
        }
        serializeBinary() {
          var e = new a.BinaryWriter();
          return B.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.f(B.M(), e, t);
        }
        serializeBase64String() {
          var e = new a.BinaryWriter();
          return B.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CBroadcast_ViewerBroadcastInvite_Notification";
        }
      }
      class w extends n {
        constructor(e = null) {
          super(),
            w.prototype.chat_id || i.a(w.M()),
            n.initialize(this, e, 0, -1, [4], null);
        }
        static M() {
          return (
            w.sm_m ||
              (w.sm_m = {
                proto: w,
                fields: {
                  chat_id: {
                    n: 1,
                    br: i.d.readFixed64String,
                    bw: i.h.writeFixed64String,
                  },
                  view_url_template: {
                    n: 3,
                    br: i.d.readString,
                    bw: i.h.writeString,
                  },
                  flair_group_ids: {
                    n: 4,
                    r: !0,
                    q: !0,
                    br: i.d.readUint32,
                    bw: i.h.writeRepeatedUint32,
                  },
                },
              }),
            w.sm_m
          );
        }
        static MBF() {
          return w.sm_mbf || (w.sm_mbf = i.e(w.M())), w.sm_mbf;
        }
        toObject(e = !1) {
          return w.toObject(e, this);
        }
        static toObject(e, t) {
          return i.g(w.M(), e, t);
        }
        static fromObject(e) {
          return i.c(w.M(), e);
        }
        static deserializeBinary(e) {
          let t = new a.BinaryReader(e),
            r = new w();
          return w.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.b(w.MBF(), e, t);
        }
        serializeBinary() {
          var e = new a.BinaryWriter();
          return w.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.f(w.M(), e, t);
        }
        serializeBase64String() {
          var e = new a.BinaryWriter();
          return w.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CBroadcast_GetBroadcastChatInfo_Response";
        }
      }
      class C extends n {
        constructor(e = null) {
          super(),
            C.prototype.chat_id || i.a(C.M()),
            n.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            C.sm_m ||
              (C.sm_m = {
                proto: C,
                fields: {
                  chat_id: {
                    n: 1,
                    br: i.d.readFixed64String,
                    bw: i.h.writeFixed64String,
                  },
                  message: { n: 2, br: i.d.readString, bw: i.h.writeString },
                  instance_id: {
                    n: 3,
                    br: i.d.readUint32,
                    bw: i.h.writeUint32,
                  },
                  language: {
                    n: 4,
                    d: 0,
                    br: i.d.readUint32,
                    bw: i.h.writeUint32,
                  },
                  country_code: {
                    n: 5,
                    br: i.d.readString,
                    bw: i.h.writeString,
                  },
                },
              }),
            C.sm_m
          );
        }
        static MBF() {
          return C.sm_mbf || (C.sm_mbf = i.e(C.M())), C.sm_mbf;
        }
        toObject(e = !1) {
          return C.toObject(e, this);
        }
        static toObject(e, t) {
          return i.g(C.M(), e, t);
        }
        static fromObject(e) {
          return i.c(C.M(), e);
        }
        static deserializeBinary(e) {
          let t = new a.BinaryReader(e),
            r = new C();
          return C.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.b(C.MBF(), e, t);
        }
        serializeBinary() {
          var e = new a.BinaryWriter();
          return C.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.f(C.M(), e, t);
        }
        serializeBase64String() {
          var e = new a.BinaryWriter();
          return C.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CBroadcast_PostChatMessage_Request";
        }
      }
      class I extends n {
        constructor(e = null) {
          super(),
            I.prototype.persona_name || i.a(I.M()),
            n.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            I.sm_m ||
              (I.sm_m = {
                proto: I,
                fields: {
                  persona_name: {
                    n: 1,
                    br: i.d.readString,
                    bw: i.h.writeString,
                  },
                  in_game: { n: 2, br: i.d.readBool, bw: i.h.writeBool },
                  result: { n: 3, br: i.d.readInt32, bw: i.h.writeInt32 },
                  cooldown_time_seconds: {
                    n: 4,
                    br: i.d.readInt32,
                    bw: i.h.writeInt32,
                  },
                },
              }),
            I.sm_m
          );
        }
        static MBF() {
          return I.sm_mbf || (I.sm_mbf = i.e(I.M())), I.sm_mbf;
        }
        toObject(e = !1) {
          return I.toObject(e, this);
        }
        static toObject(e, t) {
          return i.g(I.M(), e, t);
        }
        static fromObject(e) {
          return i.c(I.M(), e);
        }
        static deserializeBinary(e) {
          let t = new a.BinaryReader(e),
            r = new I();
          return I.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.b(I.MBF(), e, t);
        }
        serializeBinary() {
          var e = new a.BinaryWriter();
          return I.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.f(I.M(), e, t);
        }
        serializeBase64String() {
          var e = new a.BinaryWriter();
          return I.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CBroadcast_PostChatMessage_Response";
        }
      }
      class E extends n {
        constructor(e = null) {
          super(),
            E.prototype.chat_id || i.a(E.M()),
            n.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            E.sm_m ||
              (E.sm_m = {
                proto: E,
                fields: {
                  chat_id: {
                    n: 1,
                    br: i.d.readFixed64String,
                    bw: i.h.writeFixed64String,
                  },
                  flair: { n: 2, br: i.d.readString, bw: i.h.writeString },
                },
              }),
            E.sm_m
          );
        }
        static MBF() {
          return E.sm_mbf || (E.sm_mbf = i.e(E.M())), E.sm_mbf;
        }
        toObject(e = !1) {
          return E.toObject(e, this);
        }
        static toObject(e, t) {
          return i.g(E.M(), e, t);
        }
        static fromObject(e) {
          return i.c(E.M(), e);
        }
        static deserializeBinary(e) {
          let t = new a.BinaryReader(e),
            r = new E();
          return E.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.b(E.MBF(), e, t);
        }
        serializeBinary() {
          var e = new a.BinaryWriter();
          return E.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.f(E.M(), e, t);
        }
        serializeBase64String() {
          var e = new a.BinaryWriter();
          return E.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CBroadcast_UpdateChatMessageFlair_Request";
        }
      }
      class O extends n {
        constructor(e = null) {
          super(),
            O.prototype.result || i.a(O.M()),
            n.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            O.sm_m ||
              (O.sm_m = {
                proto: O,
                fields: {
                  result: { n: 1, br: i.d.readInt32, bw: i.h.writeInt32 },
                  chat_id: {
                    n: 2,
                    br: i.d.readFixed64String,
                    bw: i.h.writeFixed64String,
                  },
                  flair: { n: 3, br: i.d.readString, bw: i.h.writeString },
                },
              }),
            O.sm_m
          );
        }
        static MBF() {
          return O.sm_mbf || (O.sm_mbf = i.e(O.M())), O.sm_mbf;
        }
        toObject(e = !1) {
          return O.toObject(e, this);
        }
        static toObject(e, t) {
          return i.g(O.M(), e, t);
        }
        static fromObject(e) {
          return i.c(O.M(), e);
        }
        static deserializeBinary(e) {
          let t = new a.BinaryReader(e),
            r = new O();
          return O.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.b(O.MBF(), e, t);
        }
        serializeBinary() {
          var e = new a.BinaryWriter();
          return O.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.f(O.M(), e, t);
        }
        serializeBase64String() {
          var e = new a.BinaryWriter();
          return O.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CBroadcast_UpdateChatMessageFlair_Response";
        }
      }
      class T extends n {
        constructor(e = null) {
          super(),
            T.prototype.chat_id || i.a(T.M()),
            n.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            T.sm_m ||
              (T.sm_m = {
                proto: T,
                fields: {
                  chat_id: {
                    n: 1,
                    br: i.d.readFixed64String,
                    bw: i.h.writeFixed64String,
                  },
                  user_steamid: {
                    n: 2,
                    br: i.d.readFixed64String,
                    bw: i.h.writeFixed64String,
                  },
                  muted: { n: 3, br: i.d.readBool, bw: i.h.writeBool },
                },
              }),
            T.sm_m
          );
        }
        static MBF() {
          return T.sm_mbf || (T.sm_mbf = i.e(T.M())), T.sm_mbf;
        }
        toObject(e = !1) {
          return T.toObject(e, this);
        }
        static toObject(e, t) {
          return i.g(T.M(), e, t);
        }
        static fromObject(e) {
          return i.c(T.M(), e);
        }
        static deserializeBinary(e) {
          let t = new a.BinaryReader(e),
            r = new T();
          return T.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.b(T.MBF(), e, t);
        }
        serializeBinary() {
          var e = new a.BinaryWriter();
          return T.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.f(T.M(), e, t);
        }
        serializeBase64String() {
          var e = new a.BinaryWriter();
          return T.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CBroadcast_MuteBroadcastChatUser_Request";
        }
      }
      class G extends n {
        constructor(e = null) {
          super(), n.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return G.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new G();
        }
        static deserializeBinary(e) {
          let t = new a.BinaryReader(e),
            r = new G();
          return G.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new a.BinaryWriter();
          return G.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new a.BinaryWriter();
          return G.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CBroadcast_MuteBroadcastChatUser_Response";
        }
      }
      class R extends n {
        constructor(e = null) {
          super(),
            R.prototype.chat_id || i.a(R.M()),
            n.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            R.sm_m ||
              (R.sm_m = {
                proto: R,
                fields: {
                  chat_id: {
                    n: 1,
                    br: i.d.readFixed64String,
                    bw: i.h.writeFixed64String,
                  },
                  user_steamid: {
                    n: 2,
                    br: i.d.readFixed64String,
                    bw: i.h.writeFixed64String,
                  },
                },
              }),
            R.sm_m
          );
        }
        static MBF() {
          return R.sm_mbf || (R.sm_mbf = i.e(R.M())), R.sm_mbf;
        }
        toObject(e = !1) {
          return R.toObject(e, this);
        }
        static toObject(e, t) {
          return i.g(R.M(), e, t);
        }
        static fromObject(e) {
          return i.c(R.M(), e);
        }
        static deserializeBinary(e) {
          let t = new a.BinaryReader(e),
            r = new R();
          return R.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.b(R.MBF(), e, t);
        }
        serializeBinary() {
          var e = new a.BinaryWriter();
          return R.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.f(R.M(), e, t);
        }
        serializeBase64String() {
          var e = new a.BinaryWriter();
          return R.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CBroadcast_RemoveUserChatText_Request";
        }
      }
      class D extends n {
        constructor(e = null) {
          super(), n.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return D.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new D();
        }
        static deserializeBinary(e) {
          let t = new a.BinaryReader(e),
            r = new D();
          return D.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new a.BinaryWriter();
          return D.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new a.BinaryWriter();
          return D.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CBroadcast_RemoveUserChatText_Response";
        }
      }
      class A extends n {
        constructor(e = null) {
          super(),
            A.prototype.persona_names || i.a(A.M()),
            n.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            A.sm_m ||
              (A.sm_m = {
                proto: A,
                fields: { persona_names: { n: 1, c: j, r: !0, q: !0 } },
              }),
            A.sm_m
          );
        }
        static MBF() {
          return A.sm_mbf || (A.sm_mbf = i.e(A.M())), A.sm_mbf;
        }
        toObject(e = !1) {
          return A.toObject(e, this);
        }
        static toObject(e, t) {
          return i.g(A.M(), e, t);
        }
        static fromObject(e) {
          return i.c(A.M(), e);
        }
        static deserializeBinary(e) {
          let t = new a.BinaryReader(e),
            r = new A();
          return A.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.b(A.MBF(), e, t);
        }
        serializeBinary() {
          var e = new a.BinaryWriter();
          return A.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.f(A.M(), e, t);
        }
        serializeBase64String() {
          var e = new a.BinaryWriter();
          return A.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CBroadcast_GetBroadcastChatUserNames_Response";
        }
      }
      class j extends n {
        constructor(e = null) {
          super(),
            j.prototype.steam_id || i.a(j.M()),
            n.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            j.sm_m ||
              (j.sm_m = {
                proto: j,
                fields: {
                  steam_id: {
                    n: 1,
                    br: i.d.readFixed64String,
                    bw: i.h.writeFixed64String,
                  },
                  persona: { n: 2, br: i.d.readString, bw: i.h.writeString },
                },
              }),
            j.sm_m
          );
        }
        static MBF() {
          return j.sm_mbf || (j.sm_mbf = i.e(j.M())), j.sm_mbf;
        }
        toObject(e = !1) {
          return j.toObject(e, this);
        }
        static toObject(e, t) {
          return i.g(j.M(), e, t);
        }
        static fromObject(e) {
          return i.c(j.M(), e);
        }
        static deserializeBinary(e) {
          let t = new a.BinaryReader(e),
            r = new j();
          return j.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.b(j.MBF(), e, t);
        }
        serializeBinary() {
          var e = new a.BinaryWriter();
          return j.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.f(j.M(), e, t);
        }
        serializeBase64String() {
          var e = new a.BinaryWriter();
          return j.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CBroadcast_GetBroadcastChatUserNames_Response_PersonaName";
        }
      }
      class k extends n {
        constructor(e = null) {
          super(),
            k.prototype.broadcast_clip_id || i.a(k.M()),
            n.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            k.sm_m ||
              (k.sm_m = {
                proto: k,
                fields: {
                  broadcast_clip_id: {
                    n: 1,
                    br: i.d.readFixed64String,
                    bw: i.h.writeFixed64String,
                  },
                },
              }),
            k.sm_m
          );
        }
        static MBF() {
          return k.sm_mbf || (k.sm_mbf = i.e(k.M())), k.sm_mbf;
        }
        toObject(e = !1) {
          return k.toObject(e, this);
        }
        static toObject(e, t) {
          return i.g(k.M(), e, t);
        }
        static fromObject(e) {
          return i.c(k.M(), e);
        }
        static deserializeBinary(e) {
          let t = new a.BinaryReader(e),
            r = new k();
          return k.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.b(k.MBF(), e, t);
        }
        serializeBinary() {
          var e = new a.BinaryWriter();
          return k.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.f(k.M(), e, t);
        }
        serializeBase64String() {
          var e = new a.BinaryWriter();
          return k.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CBroadcast_StartBuildClip_Response";
        }
      }
      class M extends n {
        constructor(e = null) {
          super(), n.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return M.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new M();
        }
        static deserializeBinary(e) {
          let t = new a.BinaryReader(e),
            r = new M();
          return M.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new a.BinaryWriter();
          return M.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new a.BinaryWriter();
          return M.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CBroadcast_GetBuildClipStatus_Response";
        }
      }
      class F extends n {
        constructor(e = null) {
          super(), n.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return F.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new F();
        }
        static deserializeBinary(e) {
          let t = new a.BinaryReader(e),
            r = new F();
          return F.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new a.BinaryWriter();
          return F.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new a.BinaryWriter();
          return F.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CBroadcast_SetClipDetails_Response";
        }
      }
      class P extends n {
        constructor(e = null) {
          super(),
            P.prototype.broadcast_clip_id || i.a(P.M()),
            n.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            P.sm_m ||
              (P.sm_m = {
                proto: P,
                fields: {
                  broadcast_clip_id: {
                    n: 1,
                    br: i.d.readUint64String,
                    bw: i.h.writeUint64String,
                  },
                  video_id: {
                    n: 2,
                    br: i.d.readUint64String,
                    bw: i.h.writeUint64String,
                  },
                  channel_id: {
                    n: 3,
                    br: i.d.readUint64String,
                    bw: i.h.writeUint64String,
                  },
                  app_id: { n: 4, br: i.d.readUint32, bw: i.h.writeUint32 },
                  accountid_broadcaster: {
                    n: 5,
                    br: i.d.readUint32,
                    bw: i.h.writeUint32,
                  },
                  accountid_clipmaker: {
                    n: 6,
                    br: i.d.readUint32,
                    bw: i.h.writeUint32,
                  },
                  video_description: {
                    n: 7,
                    br: i.d.readString,
                    bw: i.h.writeString,
                  },
                  start_time: { n: 8, br: i.d.readUint32, bw: i.h.writeUint32 },
                  length_milliseconds: {
                    n: 9,
                    br: i.d.readUint32,
                    bw: i.h.writeUint32,
                  },
                  thumbnail_path: {
                    n: 10,
                    br: i.d.readString,
                    bw: i.h.writeString,
                  },
                },
              }),
            P.sm_m
          );
        }
        static MBF() {
          return P.sm_mbf || (P.sm_mbf = i.e(P.M())), P.sm_mbf;
        }
        toObject(e = !1) {
          return P.toObject(e, this);
        }
        static toObject(e, t) {
          return i.g(P.M(), e, t);
        }
        static fromObject(e) {
          return i.c(P.M(), e);
        }
        static deserializeBinary(e) {
          let t = new a.BinaryReader(e),
            r = new P();
          return P.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.b(P.MBF(), e, t);
        }
        serializeBinary() {
          var e = new a.BinaryWriter();
          return P.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.f(P.M(), e, t);
        }
        serializeBase64String() {
          var e = new a.BinaryWriter();
          return P.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CBroadcast_GetClipDetails_Response";
        }
      }
      class N extends n {
        constructor(e = null) {
          super(), n.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return N.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new N();
        }
        static deserializeBinary(e) {
          let t = new a.BinaryReader(e),
            r = new N();
          return N.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new a.BinaryWriter();
          return N.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new a.BinaryWriter();
          return N.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CBroadcast_SetRTMPInfo_Response";
        }
      }
      class L extends n {
        constructor(e = null) {
          super(),
            L.prototype.broadcast_permission || i.a(L.M()),
            n.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            L.sm_m ||
              (L.sm_m = {
                proto: L,
                fields: {
                  broadcast_permission: {
                    n: 1,
                    br: i.d.readInt32,
                    bw: i.h.writeInt32,
                  },
                  rtmp_host: { n: 2, br: i.d.readString, bw: i.h.writeString },
                  rtmp_token: { n: 3, br: i.d.readString, bw: i.h.writeString },
                  broadcast_delay: {
                    n: 4,
                    br: i.d.readInt32,
                    bw: i.h.writeInt32,
                  },
                  app_id: { n: 5, br: i.d.readUint32, bw: i.h.writeUint32 },
                  required_app_id: {
                    n: 6,
                    br: i.d.readUint32,
                    bw: i.h.writeUint32,
                  },
                  broadcast_chat_permission: {
                    n: 7,
                    br: i.d.readEnum,
                    bw: i.h.writeEnum,
                  },
                  broadcast_buffer: {
                    n: 8,
                    br: i.d.readInt32,
                    bw: i.h.writeInt32,
                  },
                  steamid: {
                    n: 9,
                    br: i.d.readFixed64String,
                    bw: i.h.writeFixed64String,
                  },
                  chat_rate_limit: {
                    n: 10,
                    br: i.d.readUint32,
                    bw: i.h.writeUint32,
                  },
                  enable_replay: { n: 11, br: i.d.readBool, bw: i.h.writeBool },
                  is_partner_chat_only: {
                    n: 12,
                    br: i.d.readBool,
                    bw: i.h.writeBool,
                  },
                },
              }),
            L.sm_m
          );
        }
        static MBF() {
          return L.sm_mbf || (L.sm_mbf = i.e(L.M())), L.sm_mbf;
        }
        toObject(e = !1) {
          return L.toObject(e, this);
        }
        static toObject(e, t) {
          return i.g(L.M(), e, t);
        }
        static fromObject(e) {
          return i.c(L.M(), e);
        }
        static deserializeBinary(e) {
          let t = new a.BinaryReader(e),
            r = new L();
          return L.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.b(L.MBF(), e, t);
        }
        serializeBinary() {
          var e = new a.BinaryWriter();
          return L.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.f(L.M(), e, t);
        }
        serializeBase64String() {
          var e = new a.BinaryWriter();
          return L.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CBroadcast_GetRTMPInfo_Response";
        }
      }
      class U extends n {
        constructor(e = null) {
          super(),
            U.prototype.upload_stats || i.a(U.M()),
            n.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            U.sm_m ||
              (U.sm_m = {
                proto: U,
                fields: { upload_stats: { n: 1, c: W, r: !0, q: !0 } },
              }),
            U.sm_m
          );
        }
        static MBF() {
          return U.sm_mbf || (U.sm_mbf = i.e(U.M())), U.sm_mbf;
        }
        toObject(e = !1) {
          return U.toObject(e, this);
        }
        static toObject(e, t) {
          return i.g(U.M(), e, t);
        }
        static fromObject(e) {
          return i.c(U.M(), e);
        }
        static deserializeBinary(e) {
          let t = new a.BinaryReader(e),
            r = new U();
          return U.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.b(U.MBF(), e, t);
        }
        serializeBinary() {
          var e = new a.BinaryWriter();
          return U.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.f(U.M(), e, t);
        }
        serializeBase64String() {
          var e = new a.BinaryWriter();
          return U.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CBroadcast_GetBroadcastUploadStats_Response";
        }
      }
      class W extends n {
        constructor(e = null) {
          super(),
            W.prototype.upload_result || i.a(W.M()),
            n.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            W.sm_m ||
              (W.sm_m = {
                proto: W,
                fields: {
                  upload_result: {
                    n: 1,
                    br: i.d.readUint32,
                    bw: i.h.writeUint32,
                  },
                  time_stopped: {
                    n: 2,
                    br: i.d.readUint32,
                    bw: i.h.writeUint32,
                  },
                  seconds_uploaded: {
                    n: 3,
                    br: i.d.readUint32,
                    bw: i.h.writeUint32,
                  },
                  max_viewers: {
                    n: 4,
                    br: i.d.readUint32,
                    bw: i.h.writeUint32,
                  },
                  resolution_x: {
                    n: 5,
                    br: i.d.readUint32,
                    bw: i.h.writeUint32,
                  },
                  resolution_y: {
                    n: 6,
                    br: i.d.readUint32,
                    bw: i.h.writeUint32,
                  },
                  avg_bandwidth: {
                    n: 7,
                    br: i.d.readUint32,
                    bw: i.h.writeUint32,
                  },
                  total_bytes: {
                    n: 8,
                    br: i.d.readUint64String,
                    bw: i.h.writeUint64String,
                  },
                  app_id: { n: 9, br: i.d.readUint32, bw: i.h.writeUint32 },
                  total_unique_viewers: {
                    n: 10,
                    br: i.d.readUint32,
                    bw: i.h.writeUint32,
                  },
                  total_seconds_watched: {
                    n: 11,
                    br: i.d.readUint64String,
                    bw: i.h.writeUint64String,
                  },
                  time_started: {
                    n: 12,
                    br: i.d.readUint32,
                    bw: i.h.writeUint32,
                  },
                  upload_id: {
                    n: 13,
                    br: i.d.readUint64String,
                    bw: i.h.writeUint64String,
                  },
                  local_address: {
                    n: 14,
                    br: i.d.readString,
                    bw: i.h.writeString,
                  },
                  remote_address: {
                    n: 15,
                    br: i.d.readString,
                    bw: i.h.writeString,
                  },
                  frames_per_second: {
                    n: 16,
                    br: i.d.readUint32,
                    bw: i.h.writeUint32,
                  },
                  num_representations: {
                    n: 17,
                    br: i.d.readUint32,
                    bw: i.h.writeUint32,
                  },
                  app_name: { n: 18, br: i.d.readString, bw: i.h.writeString },
                  is_replay: { n: 19, br: i.d.readBool, bw: i.h.writeBool },
                  session_id: {
                    n: 20,
                    br: i.d.readUint64String,
                    bw: i.h.writeUint64String,
                  },
                },
              }),
            W.sm_m
          );
        }
        static MBF() {
          return W.sm_mbf || (W.sm_mbf = i.e(W.M())), W.sm_mbf;
        }
        toObject(e = !1) {
          return W.toObject(e, this);
        }
        static toObject(e, t) {
          return i.g(W.M(), e, t);
        }
        static fromObject(e) {
          return i.c(W.M(), e);
        }
        static deserializeBinary(e) {
          let t = new a.BinaryReader(e),
            r = new W();
          return W.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.b(W.MBF(), e, t);
        }
        serializeBinary() {
          var e = new a.BinaryWriter();
          return W.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.f(W.M(), e, t);
        }
        serializeBase64String() {
          var e = new a.BinaryWriter();
          return W.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CBroadcast_GetBroadcastUploadStats_Response_UploadStats";
        }
      }
      class z extends n {
        constructor(e = null) {
          super(),
            z.prototype.viewer_stats || i.a(z.M()),
            n.initialize(this, e, 0, -1, [1, 2], null);
        }
        static M() {
          return (
            z.sm_m ||
              (z.sm_m = {
                proto: z,
                fields: {
                  viewer_stats: { n: 1, c: V, r: !0, q: !0 },
                  country_stats: { n: 2, c: x, r: !0, q: !0 },
                },
              }),
            z.sm_m
          );
        }
        static MBF() {
          return z.sm_mbf || (z.sm_mbf = i.e(z.M())), z.sm_mbf;
        }
        toObject(e = !1) {
          return z.toObject(e, this);
        }
        static toObject(e, t) {
          return i.g(z.M(), e, t);
        }
        static fromObject(e) {
          return i.c(z.M(), e);
        }
        static deserializeBinary(e) {
          let t = new a.BinaryReader(e),
            r = new z();
          return z.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.b(z.MBF(), e, t);
        }
        serializeBinary() {
          var e = new a.BinaryWriter();
          return z.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.f(z.M(), e, t);
        }
        serializeBase64String() {
          var e = new a.BinaryWriter();
          return z.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CBroadcast_GetBroadcastViewerStats_Response";
        }
      }
      class V extends n {
        constructor(e = null) {
          super(),
            V.prototype.time || i.a(V.M()),
            n.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            V.sm_m ||
              (V.sm_m = {
                proto: V,
                fields: {
                  time: { n: 1, br: i.d.readUint32, bw: i.h.writeUint32 },
                  num_viewers: {
                    n: 2,
                    br: i.d.readUint32,
                    bw: i.h.writeUint32,
                  },
                },
              }),
            V.sm_m
          );
        }
        static MBF() {
          return V.sm_mbf || (V.sm_mbf = i.e(V.M())), V.sm_mbf;
        }
        toObject(e = !1) {
          return V.toObject(e, this);
        }
        static toObject(e, t) {
          return i.g(V.M(), e, t);
        }
        static fromObject(e) {
          return i.c(V.M(), e);
        }
        static deserializeBinary(e) {
          let t = new a.BinaryReader(e),
            r = new V();
          return V.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.b(V.MBF(), e, t);
        }
        serializeBinary() {
          var e = new a.BinaryWriter();
          return V.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.f(V.M(), e, t);
        }
        serializeBase64String() {
          var e = new a.BinaryWriter();
          return V.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CBroadcast_GetBroadcastViewerStats_Response_ViewerStats";
        }
      }
      class x extends n {
        constructor(e = null) {
          super(),
            x.prototype.country_code || i.a(x.M()),
            n.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            x.sm_m ||
              (x.sm_m = {
                proto: x,
                fields: {
                  country_code: {
                    n: 1,
                    br: i.d.readString,
                    bw: i.h.writeString,
                  },
                  num_viewers: {
                    n: 2,
                    br: i.d.readUint32,
                    bw: i.h.writeUint32,
                  },
                },
              }),
            x.sm_m
          );
        }
        static MBF() {
          return x.sm_mbf || (x.sm_mbf = i.e(x.M())), x.sm_mbf;
        }
        toObject(e = !1) {
          return x.toObject(e, this);
        }
        static toObject(e, t) {
          return i.g(x.M(), e, t);
        }
        static fromObject(e) {
          return i.c(x.M(), e);
        }
        static deserializeBinary(e) {
          let t = new a.BinaryReader(e),
            r = new x();
          return x.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.b(x.MBF(), e, t);
        }
        serializeBinary() {
          var e = new a.BinaryWriter();
          return x.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.f(x.M(), e, t);
        }
        serializeBase64String() {
          var e = new a.BinaryWriter();
          return x.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CBroadcast_GetBroadcastViewerStats_Response_CountryStats";
        }
      }
      class H extends n {
        constructor(e = null) {
          super(), n.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return H.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new H();
        }
        static deserializeBinary(e) {
          let t = new a.BinaryReader(e),
            r = new H();
          return H.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new a.BinaryWriter();
          return H.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new a.BinaryWriter();
          return H.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CBroadcast_WebRTCStartResult_Response";
        }
      }
      class q extends n {
        constructor(e = null) {
          super(), n.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return q.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new q();
        }
        static deserializeBinary(e) {
          let t = new a.BinaryReader(e),
            r = new q();
          return q.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new a.BinaryWriter();
          return q.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new a.BinaryWriter();
          return q.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CBroadcast_WebRTCStopped_Response";
        }
      }
      class Q extends n {
        constructor(e = null) {
          super(), n.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return Q.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new Q();
        }
        static deserializeBinary(e) {
          let t = new a.BinaryReader(e),
            r = new Q();
          return Q.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new a.BinaryWriter();
          return Q.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new a.BinaryWriter();
          return Q.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CBroadcast_WebRTCSetAnswer_Response";
        }
      }
      class Y extends n {
        constructor(e = null) {
          super(),
            Y.prototype.sdp_mid || i.a(Y.M()),
            n.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            Y.sm_m ||
              (Y.sm_m = {
                proto: Y,
                fields: {
                  sdp_mid: { n: 1, br: i.d.readString, bw: i.h.writeString },
                  sdp_mline_index: {
                    n: 2,
                    br: i.d.readInt32,
                    bw: i.h.writeInt32,
                  },
                  candidate: { n: 3, br: i.d.readString, bw: i.h.writeString },
                },
              }),
            Y.sm_m
          );
        }
        static MBF() {
          return Y.sm_mbf || (Y.sm_mbf = i.e(Y.M())), Y.sm_mbf;
        }
        toObject(e = !1) {
          return Y.toObject(e, this);
        }
        static toObject(e, t) {
          return i.g(Y.M(), e, t);
        }
        static fromObject(e) {
          return i.c(Y.M(), e);
        }
        static deserializeBinary(e) {
          let t = new a.BinaryReader(e),
            r = new Y();
          return Y.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.b(Y.MBF(), e, t);
        }
        serializeBinary() {
          var e = new a.BinaryWriter();
          return Y.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.f(Y.M(), e, t);
        }
        serializeBase64String() {
          var e = new a.BinaryWriter();
          return Y.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CBroadcast_WebRTC_Candidate";
        }
      }
      class Z extends n {
        constructor(e = null) {
          super(), n.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return Z.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new Z();
        }
        static deserializeBinary(e) {
          let t = new a.BinaryReader(e),
            r = new Z();
          return Z.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new a.BinaryWriter();
          return Z.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new a.BinaryWriter();
          return Z.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CBroadcast_WebRTCAddHostCandidate_Response";
        }
      }
      class K extends n {
        constructor(e = null) {
          super(), n.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return K.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new K();
        }
        static deserializeBinary(e) {
          let t = new a.BinaryReader(e),
            r = new K();
          return K.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new a.BinaryWriter();
          return K.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new a.BinaryWriter();
          return K.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CBroadcast_WebRTCAddViewerCandidate_Response";
        }
      }
      class J extends n {
        constructor(e = null) {
          super(),
            J.prototype.candidate_generation || i.a(J.M()),
            n.initialize(this, e, 0, -1, [2], null);
        }
        static M() {
          return (
            J.sm_m ||
              (J.sm_m = {
                proto: J,
                fields: {
                  candidate_generation: {
                    n: 1,
                    br: i.d.readUint32,
                    bw: i.h.writeUint32,
                  },
                  candidates: { n: 2, c: Y, r: !0, q: !0 },
                },
              }),
            J.sm_m
          );
        }
        static MBF() {
          return J.sm_mbf || (J.sm_mbf = i.e(J.M())), J.sm_mbf;
        }
        toObject(e = !1) {
          return J.toObject(e, this);
        }
        static toObject(e, t) {
          return i.g(J.M(), e, t);
        }
        static fromObject(e) {
          return i.c(J.M(), e);
        }
        static deserializeBinary(e) {
          let t = new a.BinaryReader(e),
            r = new J();
          return J.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.b(J.MBF(), e, t);
        }
        serializeBinary() {
          var e = new a.BinaryWriter();
          return J.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.f(J.M(), e, t);
        }
        serializeBase64String() {
          var e = new a.BinaryWriter();
          return J.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CBroadcast_WebRTCGetHostCandidates_Response";
        }
      }
      class X extends n {
        constructor(e = null) {
          super(),
            X.prototype.broadcast_session_id || i.a(X.M()),
            n.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            X.sm_m ||
              (X.sm_m = {
                proto: X,
                fields: {
                  broadcast_session_id: {
                    n: 1,
                    br: i.d.readFixed64String,
                    bw: i.h.writeFixed64String,
                  },
                },
              }),
            X.sm_m
          );
        }
        static MBF() {
          return X.sm_mbf || (X.sm_mbf = i.e(X.M())), X.sm_mbf;
        }
        toObject(e = !1) {
          return X.toObject(e, this);
        }
        static toObject(e, t) {
          return i.g(X.M(), e, t);
        }
        static fromObject(e) {
          return i.c(X.M(), e);
        }
        static deserializeBinary(e) {
          let t = new a.BinaryReader(e),
            r = new X();
          return X.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.b(X.MBF(), e, t);
        }
        serializeBinary() {
          var e = new a.BinaryWriter();
          return X.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.f(X.M(), e, t);
        }
        serializeBase64String() {
          var e = new a.BinaryWriter();
          return X.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CBroadcast_WebRTCNeedTURNServer_Notification";
        }
      }
      class $ extends n {
        constructor(e = null) {
          super(),
            $.prototype.turn_server || i.a($.M()),
            n.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            $.sm_m ||
              ($.sm_m = {
                proto: $,
                fields: {
                  turn_server: {
                    n: 1,
                    br: i.d.readString,
                    bw: i.h.writeString,
                  },
                },
              }),
            $.sm_m
          );
        }
        static MBF() {
          return $.sm_mbf || ($.sm_mbf = i.e($.M())), $.sm_mbf;
        }
        toObject(e = !1) {
          return $.toObject(e, this);
        }
        static toObject(e, t) {
          return i.g($.M(), e, t);
        }
        static fromObject(e) {
          return i.c($.M(), e);
        }
        static deserializeBinary(e) {
          let t = new a.BinaryReader(e),
            r = new $();
          return $.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.b($.MBF(), e, t);
        }
        serializeBinary() {
          var e = new a.BinaryWriter();
          return $.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.f($.M(), e, t);
        }
        serializeBase64String() {
          var e = new a.BinaryWriter();
          return $.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CBroadcast_WebRTCLookupTURNServer_Response";
        }
      }
      class ee extends n {
        constructor(e = null) {
          super(),
            ee.prototype.broadcast_session_id || i.a(ee.M()),
            n.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            ee.sm_m ||
              (ee.sm_m = {
                proto: ee,
                fields: {
                  broadcast_session_id: {
                    n: 1,
                    br: i.d.readFixed64String,
                    bw: i.h.writeFixed64String,
                  },
                  webrtc_session_id: {
                    n: 2,
                    br: i.d.readFixed64String,
                    bw: i.h.writeFixed64String,
                  },
                  viewer_steamid: {
                    n: 3,
                    br: i.d.readFixed64String,
                    bw: i.h.writeFixed64String,
                  },
                  viewer_token: {
                    n: 4,
                    br: i.d.readFixed64String,
                    bw: i.h.writeFixed64String,
                  },
                },
              }),
            ee.sm_m
          );
        }
        static MBF() {
          return ee.sm_mbf || (ee.sm_mbf = i.e(ee.M())), ee.sm_mbf;
        }
        toObject(e = !1) {
          return ee.toObject(e, this);
        }
        static toObject(e, t) {
          return i.g(ee.M(), e, t);
        }
        static fromObject(e) {
          return i.c(ee.M(), e);
        }
        static deserializeBinary(e) {
          let t = new a.BinaryReader(e),
            r = new ee();
          return ee.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.b(ee.MBF(), e, t);
        }
        serializeBinary() {
          var e = new a.BinaryWriter();
          return ee.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.f(ee.M(), e, t);
        }
        serializeBase64String() {
          var e = new a.BinaryWriter();
          return ee.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CBroadcast_WebRTCStart_Notification";
        }
      }
      class te extends n {
        constructor(e = null) {
          super(),
            te.prototype.broadcast_session_id || i.a(te.M()),
            n.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            te.sm_m ||
              (te.sm_m = {
                proto: te,
                fields: {
                  broadcast_session_id: {
                    n: 1,
                    br: i.d.readFixed64String,
                    bw: i.h.writeFixed64String,
                  },
                  webrtc_session_id: {
                    n: 2,
                    br: i.d.readFixed64String,
                    bw: i.h.writeFixed64String,
                  },
                  answer: { n: 3, br: i.d.readString, bw: i.h.writeString },
                },
              }),
            te.sm_m
          );
        }
        static MBF() {
          return te.sm_mbf || (te.sm_mbf = i.e(te.M())), te.sm_mbf;
        }
        toObject(e = !1) {
          return te.toObject(e, this);
        }
        static toObject(e, t) {
          return i.g(te.M(), e, t);
        }
        static fromObject(e) {
          return i.c(te.M(), e);
        }
        static deserializeBinary(e) {
          let t = new a.BinaryReader(e),
            r = new te();
          return te.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.b(te.MBF(), e, t);
        }
        serializeBinary() {
          var e = new a.BinaryWriter();
          return te.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.f(te.M(), e, t);
        }
        serializeBase64String() {
          var e = new a.BinaryWriter();
          return te.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CBroadcast_WebRTCSetAnswer_Notification";
        }
      }
      class re extends n {
        constructor(e = null) {
          super(),
            re.prototype.broadcast_session_id || i.a(re.M()),
            n.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            re.sm_m ||
              (re.sm_m = {
                proto: re,
                fields: {
                  broadcast_session_id: {
                    n: 1,
                    br: i.d.readFixed64String,
                    bw: i.h.writeFixed64String,
                  },
                  webrtc_session_id: {
                    n: 2,
                    br: i.d.readFixed64String,
                    bw: i.h.writeFixed64String,
                  },
                  candidate: { n: 3, c: Y },
                },
              }),
            re.sm_m
          );
        }
        static MBF() {
          return re.sm_mbf || (re.sm_mbf = i.e(re.M())), re.sm_mbf;
        }
        toObject(e = !1) {
          return re.toObject(e, this);
        }
        static toObject(e, t) {
          return i.g(re.M(), e, t);
        }
        static fromObject(e) {
          return i.c(re.M(), e);
        }
        static deserializeBinary(e) {
          let t = new a.BinaryReader(e),
            r = new re();
          return re.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.b(re.MBF(), e, t);
        }
        serializeBinary() {
          var e = new a.BinaryWriter();
          return re.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.f(re.M(), e, t);
        }
        serializeBase64String() {
          var e = new a.BinaryWriter();
          return re.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CBroadcast_WebRTCAddViewerCandidate_Notification";
        }
      }
      var ae, ie;
      !(function (e) {
        (e.BeginBroadcastSession = function (e, t) {
          return e.SendMsg("Broadcast.BeginBroadcastSession#1", t, s, {
            ePrivilege: 1,
          });
        }),
          (e.EndBroadcastSession = function (e, t) {
            return e.SendMsg("Broadcast.EndBroadcastSession#1", t, o, {
              ePrivilege: 1,
            });
          }),
          (e.StartBroadcastUpload = function (e, t) {
            return e.SendMsg("Broadcast.StartBroadcastUpload#1", t, l, {
              ePrivilege: 1,
            });
          }),
          (e.NotifyBroadcastUploadStop = function (e, t) {
            return e.SendNotification(
              "Broadcast.NotifyBroadcastUploadStop#1",
              t,
              { ePrivilege: 1 }
            );
          }),
          (e.WatchBroadcast = function (e, t) {
            return e.SendMsg("Broadcast.WatchBroadcast#1", t, u, {
              ePrivilege: 2,
            });
          }),
          (e.HeartbeatBroadcast = function (e, t) {
            return e.SendNotification("Broadcast.HeartbeatBroadcast#1", t, {
              ePrivilege: 2,
            });
          }),
          (e.StopWatchingBroadcast = function (e, t) {
            return e.SendNotification("Broadcast.StopWatchingBroadcast#1", t, {
              ePrivilege: 2,
            });
          }),
          (e.GetBroadcastStatus = function (e, t) {
            return e.SendMsg("Broadcast.GetBroadcastStatus#1", t, d, {
              ePrivilege: 2,
            });
          }),
          (e.GetBroadcastThumbnail = function (e, t) {
            return e.SendMsg("Broadcast.GetBroadcastThumbnail#1", t, m, {
              ePrivilege: 2,
            });
          }),
          (e.InviteToBroadcast = function (e, t) {
            return e.SendMsg("Broadcast.InviteToBroadcast#1", t, p, {
              ePrivilege: 1,
            });
          }),
          (e.SendBroadcastStateToServer = function (e, t) {
            return e.SendMsg("Broadcast.SendBroadcastStateToServer#1", t, _, {
              ePrivilege: 1,
            });
          }),
          (e.NotifyBroadcastSessionHeartbeat = function (e, t) {
            return e.SendNotification(
              "Broadcast.NotifyBroadcastSessionHeartbeat#1",
              t,
              { ePrivilege: 1 }
            );
          }),
          (e.GetBroadcastChatInfo = function (e, t) {
            return e.SendMsg("Broadcast.GetBroadcastChatInfo#1", t, w, {
              ePrivilege: 2,
            });
          }),
          (e.PostChatMessage = function (e, t) {
            return e.SendMsg("Broadcast.PostChatMessage#1", t, I, {
              ePrivilege: 3,
            });
          }),
          (e.UpdateChatMessageFlair = function (e, t) {
            return e.SendMsg("Broadcast.UpdateChatMessageFlair#1", t, O, {
              ePrivilege: 1,
            });
          }),
          (e.MuteBroadcastChatUser = function (e, t) {
            return e.SendMsg("Broadcast.MuteBroadcastChatUser#1", t, G, {
              ePrivilege: 3,
            });
          }),
          (e.RemoveUserChatText = function (e, t) {
            return e.SendMsg("Broadcast.RemoveUserChatText#1", t, D, {
              ePrivilege: 3,
            });
          }),
          (e.GetBroadcastChatUserNames = function (e, t) {
            return e.SendMsg("Broadcast.GetBroadcastChatUserNames#1", t, A, {
              ePrivilege: 1,
            });
          }),
          (e.StartBuildClip = function (e, t) {
            return e.SendMsg("Broadcast.StartBuildClip#1", t, k, {
              ePrivilege: 1,
              eWebAPIKeyRequirement: 2,
            });
          }),
          (e.GetBuildClipStatus = function (e, t) {
            return e.SendMsg("Broadcast.GetBuildClipStatus#1", t, M, {
              bConstMethod: !0,
              ePrivilege: 1,
              eWebAPIKeyRequirement: 2,
            });
          }),
          (e.SetClipDetails = function (e, t) {
            return e.SendMsg("Broadcast.SetClipDetails#1", t, F, {
              ePrivilege: 1,
              eWebAPIKeyRequirement: 2,
            });
          }),
          (e.GetClipDetails = function (e, t) {
            return e.SendMsg("Broadcast.GetClipDetails#1", t, P, {
              bConstMethod: !0,
              ePrivilege: 0,
              eWebAPIKeyRequirement: 2,
            });
          }),
          (e.SetRTMPInfo = function (e, t) {
            return e.SendMsg("Broadcast.SetRTMPInfo#1", t, N, {
              ePrivilege: 1,
            });
          }),
          (e.GetRTMPInfo = function (e, t) {
            return e.SendMsg("Broadcast.GetRTMPInfo#1", t, L, {
              bConstMethod: !0,
              ePrivilege: 1,
            });
          }),
          (e.NotifyWebRTCHaveTURNServer = function (e, t) {
            return e.SendNotification(
              "Broadcast.NotifyWebRTCHaveTURNServer#1",
              t,
              { ePrivilege: 1 }
            );
          }),
          (e.WebRTCStartResult = function (e, t) {
            return e.SendMsg("Broadcast.WebRTCStartResult#1", t, H, {
              ePrivilege: 1,
            });
          }),
          (e.WebRTCStopped = function (e, t) {
            return e.SendMsg("Broadcast.WebRTCStopped#1", t, q, {
              ePrivilege: 1,
            });
          }),
          (e.WebRTCSetAnswer = function (e, t) {
            return e.SendMsg("Broadcast.WebRTCSetAnswer#1", t, Q, {
              ePrivilege: 1,
            });
          }),
          (e.WebRTCLookupTURNServer = function (e, t) {
            return e.SendMsg("Broadcast.WebRTCLookupTURNServer#1", t, $, {
              ePrivilege: 1,
            });
          }),
          (e.WebRTCAddHostCandidate = function (e, t) {
            return e.SendMsg("Broadcast.WebRTCAddHostCandidate#1", t, Z, {
              ePrivilege: 1,
            });
          }),
          (e.WebRTCAddViewerCandidate = function (e, t) {
            return e.SendMsg("Broadcast.WebRTCAddViewerCandidate#1", t, K, {
              ePrivilege: 1,
            });
          }),
          (e.WebRTCGetHostCandidates = function (e, t) {
            return e.SendMsg("Broadcast.WebRTCGetHostCandidates#1", t, J, {
              ePrivilege: 1,
            });
          }),
          (e.GetBroadcastUploadStats = function (e, t) {
            return e.SendMsg("Broadcast.GetBroadcastUploadStats#1", t, U, {
              bConstMethod: !0,
              ePrivilege: 1,
              eWebAPIKeyRequirement: 2,
            });
          }),
          (e.GetBroadcastViewerStats = function (e, t) {
            return e.SendMsg("Broadcast.GetBroadcastViewerStats#1", t, z, {
              bConstMethod: !0,
              ePrivilege: 1,
              eWebAPIKeyRequirement: 2,
            });
          });
      })(ae || (ae = {})),
        (function (e) {
          (e.NotifyBroadcastViewerStateHandler = {
            name: "BroadcastClient.NotifyBroadcastViewerState#1",
            request: h,
          }),
            (e.NotifyWaitingBroadcastViewerHandler = {
              name: "BroadcastClient.NotifyWaitingBroadcastViewer#1",
              request: b,
            }),
            (e.NotifyBroadcastUploadStartedHandler = {
              name: "BroadcastClient.NotifyBroadcastUploadStarted#1",
              request: c,
            }),
            (e.NotifyStopBroadcastUploadHandler = {
              name: "BroadcastClient.NotifyStopBroadcastUpload#1",
              request: g,
            }),
            (e.NotifySessionClosedHandler = {
              name: "BroadcastClient.NotifySessionClosed#1",
              request: S,
            }),
            (e.NotifyViewerBroadcastInviteHandler = {
              name: "BroadcastClient.NotifyViewerBroadcastInvite#1",
              request: B,
            }),
            (e.NotifyBroadcastStatusHandler = {
              name: "BroadcastClient.NotifyBroadcastStatus#1",
              request: f,
            }),
            (e.NotifyBroadcastChannelLiveHandler = {
              name: "BroadcastClient.NotifyBroadcastChannelLive#1",
              request: v,
            }),
            (e.SendThumbnailToRelayHandler = {
              name: "BroadcastClient.SendThumbnailToRelay#1",
              request: y,
            }),
            (e.NotifyWebRTCNeedTURNServerHandler = {
              name: "BroadcastClient.NotifyWebRTCNeedTURNServer#1",
              request: X,
            }),
            (e.NotifyWebRTCStartHandler = {
              name: "BroadcastClient.NotifyWebRTCStart#1",
              request: ee,
            }),
            (e.NotifyWebRTCSetAnswerHandler = {
              name: "BroadcastClient.NotifyWebRTCSetAnswer#1",
              request: te,
            }),
            (e.NotifyWebRTCAddViewerCandidateHandler = {
              name: "BroadcastClient.NotifyWebRTCAddViewerCandidate#1",
              request: re,
            });
        })(ie || (ie = {}));
    },
    aF8t: function (e, t, r) {
      "use strict";
      r.d(t, "a", function () {
        return n;
      });
      var a = r("VVjd"),
        i = r.n(a);
      function n() {
        return window.innerWidth < parseInt(i.a.strMaxMobileWidth);
      }
    },
    bCaE: function (e, t, r) {
      "use strict";
      r.d(t, "a", function () {
        return l;
      });
      var a = r("q1tI"),
        i = r.n(a),
        n = r("/Q1a"),
        s = (r("Nr4G"), r("GbHM")),
        o = r("Y3DF");
      function l(e) {
        const { bAllowOutsideOfDeck: t } = e;
        if (!n.d.IN_GAMEPADUI && !t) return null;
        let r = "unknown";
        switch (e.eDeckCompatibilityCategory) {
          case 3:
            r = "verified";
            break;
          case 2:
            r = "playable";
            break;
          case 1:
            r = "unsupported";
        }
        return i.a.createElement("div", {
          className: Object(s.a)(
            o.CompatIcon,
            "ds_steam_deck_compat",
            r,
            e.className
          ),
        });
      }
    },
    bmfB: function (e, t, r) {
      "use strict";
      r.d(t, "d", function () {
        return _;
      }),
        r.d(t, "a", function () {
          return h;
        }),
        r.d(t, "b", function () {
          return b;
        }),
        r.d(t, "c", function () {
          return S;
        }),
        r.d(t, "f", function () {
          return f;
        }),
        r.d(t, "e", function () {
          return v;
        }),
        r.d(t, "g", function () {
          return y;
        });
      var a = r("mrSG"),
        i = r("Ys0h"),
        n = r("vDqi"),
        s = r.n(n),
        o = r("2vnA"),
        l = (r("msu0"), r("HGFm"), r("XrGS"), r("oleE")),
        c = (r("uLSr"), r("3XYX")),
        d = r("ue1x"),
        m = r("8r/D"),
        u = r("TqgT"),
        p = r("/Q1a");
      r("Wtw7");
      function _(e) {
        return Boolean(e && e.thumbnail_http_address);
      }
      class h {
        constructor() {
          (this.m_inFlightRequests = new Map()),
            (this.m_lookupKeyToEmbedStreamDef = new Map()),
            (this.m_lookupStreams = new Map()),
            (this.m_playReadyStream = new Map()),
            (this.m_bMapHasStartedVideo = new Map()),
            (this.m_mapBroadcastChecked = new Map()),
            (this.m_pageChatStatus = "hide"),
            (this.m_streamChatStatus = "hide"),
            (this.m_bUserChatExpanded = void 0),
            (this.m_bUserPreferenceHideBroadcastByDefault = void 0),
            (this.m_bCollapsed = void 0),
            (this.m_setStreamChangedListeners = new Set()),
            (this.m_bUseFakeData = !1);
        }
        BHasStreams(e) {
          const t = this.GetStreams(e);
          return Boolean(t && t.length > 0);
        }
        GetPlayReadyStream(e) {
          let t = this.GetStreamsLookupKeyFromDef(e);
          return this.m_playReadyStream.get(t);
        }
        BIsEmbeddedBroadcastHiddenByDefaultUserSettings() {
          return Boolean(this.m_bUserPreferenceHideBroadcastByDefault);
        }
        BIsEmbeddedStreamCollapsed() {
          return Boolean(this.m_bCollapsed);
        }
        SetEmbeddedStreamCollapsed(e) {
          this.m_bCollapsed != e && (this.m_bCollapsed = e);
        }
        GetConcurrentStreams(e) {
          const t = this.GetStreams(e);
          return t ? t.filter((e) => _(e)).length : 0;
        }
        GetChatVisibility() {
          return "remove" === this.m_pageChatStatus ||
            "remove" === this.m_streamChatStatus
            ? "remove"
            : void 0 !== this.m_bUserChatExpanded
            ? this.m_bUserChatExpanded
              ? "show"
              : "hide"
            : "show" === this.m_pageChatStatus
            ? "show"
            : "hide" === this.m_pageChatStatus ||
              "hide" === this.m_streamChatStatus
            ? "hide"
            : "show";
        }
        ToggleChatVisibility() {
          const e = this.GetChatVisibility();
          "remove" !== e && (this.m_bUserChatExpanded = "hide" === e);
        }
        GetStreams(e) {
          const t = this.GetStreamsLookupKeyFromDef(e);
          return this.m_lookupStreams.get(t);
        }
        GetBroadcastURL(e) {
          let t = null;
          return (
            (t = e.steamid
              ? new l.a(e.steamid)
              : l.a.InitFromAccountID(e.accountid)),
            p.d.COMMUNITY_BASE_URL +
              "broadcast/watch/" +
              t.ConvertTo64BitString()
          );
        }
        BIsAppStreaming(e) {
          let t = !1;
          return (
            this.m_lookupStreams.forEach((r) => {
              t ||
                (t =
                  Boolean(r) &&
                  r.some(
                    (t) =>
                      c.a.GetOrCreateBroadcastInfo(t.steamid).m_nAppID === e
                  ));
            }),
            t
          );
        }
        GetStreamsForAppID(e) {
          const t = new Array();
          return (
            this.m_lookupStreams.forEach((r) => {
              null == r ||
                r.forEach((r) => {
                  c.a.GetOrCreateBroadcastInfo(r.steamid).m_nAppID === e &&
                    t.push(r);
                });
            }),
            t
          );
        }
        AddStreamChangedListener(e) {
          this.m_setStreamChangedListeners.add(e);
        }
        RemoveStreamChangedListener(e) {
          this.m_setStreamChangedListeners.delete(e);
        }
        LoadBIsEmbeddedBroadcastHidden(e) {
          return Object(a.a)(this, void 0, void 0, function* () {
            if (void 0 === this.m_bUserPreferenceHideBroadcastByDefault) {
              let t = Object(p.h)("broadcastuser", "application_config");
              if (!t)
                try {
                  let r =
                      p.d.STORE_BASE_URL +
                      "broadcast/ajaxgetuserbroadcastpreferences",
                    a = yield s.a.get(r, { params: {}, cancelToken: e.token });
                  t = a.data;
                } catch (e) {
                  console.log(
                    "LoadBIsEmbeddedBroadcastHidden: " +
                      Object(u.a)(e).strErrorMsg
                  ),
                    (t = { bHideStoreBroadcast: !1 });
                }
              Object(o.G)(() => {
                (this.m_bUserPreferenceHideBroadcastByDefault =
                  t.bHideStoreBroadcast),
                  (this.m_bCollapsed = t.bHideStoreBroadcast);
              });
            }
            return this.m_bUserPreferenceHideBroadcastByDefault;
          });
        }
        SetupEmbeddableVOD(e, t) {
          return Object(a.a)(this, void 0, void 0, function* () {
            (this.m_bUseFakeData = !1),
              (this.m_streamChatStatus = "remove"),
              yield i.a
                .Get()
                .QueueAppRequest(e.nAppIDVOD, {
                  include_assets: !0,
                  include_trailers: !0,
                });
            const r = i.a.Get().GetApp(e.nAppIDVOD),
              a = new g();
            if (
              ((a.accountid = 0),
              (a.nAppIDVOD = e.nAppIDVOD),
              (a.default_selection_priority = b.k_ePrimary),
              (a.current_selection_priority = b.k_ePrimary),
              (a.thumbnail_http_address =
                (null == r ? void 0 : r.GetAssets().GetHeaderURL()) || ""),
              (a.title = (null == r ? void 0 : r.GetName()) || ""),
              this.GetStreams(e).unshift(a),
              t)
            ) {
              const t = this.GetStreamsLookupKeyFromDef(e);
              this.m_playReadyStream.set(t, a);
            }
          });
        }
        HintLoadEmbeddablePreviewStreams(e) {
          return Object(a.a)(this, void 0, void 0, function* () {
            let t = null,
              r = {
                eventid: e.event ? e.event.GID : void 0,
                previewAccounts: Boolean(e.bIsPreview && e.accountIDs)
                  ? e.accountIDs.slice().sort().join(",")
                  : void 0,
              };
            try {
              return (
                (t = yield s.a.get(
                  p.d.STORE_BASE_URL + "broadcast/ajaxgetstreamersforpreview",
                  { params: r }
                )),
                this.HandleHintLoadBroadcastResponse(e, t.data)
              );
            } catch (e) {
              let t = Object(u.a)(e);
              console.error(
                "HintLoadEmbeddablePreviewStreams hit error loading: " +
                  t.strErrorMsg,
                t
              );
            }
            return [];
          });
        }
        HintLoadEmbeddableStreams(e) {
          return Object(a.a)(this, void 0, void 0, function* () {
            let t = this.MapEmbeddableStreamToRequest(e),
              r = this.GetStreamsLookupKeyFromParam(t);
            if (!this.m_inFlightRequests.has(r)) {
              this.m_lookupKeyToEmbedStreamDef.set(r, e);
              const a = this.InternalHintLoadEmbeddableStreams(e, t);
              this.m_inFlightRequests.set(r, a);
            }
            return this.m_inFlightRequests.get(r);
          });
        }
        ValidateBroadcastPageStreamers(e) {
          const t = e;
          return (
            !!(
              t &&
              "number" == typeof t.success &&
              t.filtered &&
              Array.isArray(t.filtered) &&
              t.broadcast_chat_visibility
            ) &&
            (0 == t.filtered.length ||
              "string" == typeof t.filtered[0].accountid)
          );
        }
        InternalHintLoadEmbeddableStreams(e, t) {
          return Object(a.a)(this, void 0, void 0, function* () {
            let r = Object(p.h)(
              "broadcast_available_for_page",
              "application_config"
            );
            if (this.ValidateBroadcastPageStreamers(r))
              return this.HandleHintLoadBroadcastResponse(e, r);
            try {
              let r = null;
              return (
                (r = yield s.a.get(
                  p.d.STORE_BASE_URL + "broadcast/ajaxgetstreamersforpage",
                  { params: t }
                )),
                this.HandleHintLoadBroadcastResponse(e, r.data)
              );
            } catch (e) {
              let t = Object(u.a)(e);
              console.error(
                "HintLoadEmbeddableStreams hit error loading: " + t.strErrorMsg,
                t
              );
            }
            return [];
          });
        }
        HandleHintLoadBroadcastResponse(e, t) {
          var r;
          return Object(a.a)(this, void 0, void 0, function* () {
            (this.m_bUseFakeData = !1),
              e.bIsPreview &&
                ((null === (r = null == t ? void 0 : t.filtered) || void 0 === r
                  ? void 0
                  : r.length) > 0
                  ? this.ExtractBroadcastPrioritiesFromPartnerEventForPreview(
                      e.event,
                      t.filtered
                    )
                  : ((t = {
                      filtered: [{}],
                      success: 1,
                      total_count: 1,
                      err_msg: "",
                      broadcast_chat_visibility: "hide",
                    }),
                    (this.m_bUseFakeData = !0))),
              t.broadcast_chat_visibility &&
                (this.m_pageChatStatus = t.broadcast_chat_visibility);
            const a = new Array();
            Object(o.G)(() => {
              t.filtered.forEach((e) => {
                if (!e.steamid) {
                  const t = l.a.InitFromAccountID(e.accountid);
                  e.steamid = t.ConvertTo64BitString();
                }
                const t = c.a.GetOrCreateBroadcastInfo(e.steamid),
                  r = e.appid ? Number(e.appid) : c.d;
                (t.m_nAppID = r),
                  (t.m_strAppId = "" + r),
                  void 0 === e.current_selection_priority &&
                    (e.current_selection_priority =
                      e.default_selection_priority),
                  r != c.d && a.push(r);
              });
            }),
              this.m_lookupStreams.set(
                this.GetStreamsLookupKeyFromDef(e),
                t.filtered
              );
            const i = this.GetStreams(e);
            return yield this.AutoStartVideoStream(e, i), i;
          });
        }
        ExtractBroadcastPrioritiesFromPartnerEventForPreview(e, t) {
          var r, a;
          const i = Array.from(
              null !== (r = e.jsondata.broadcast_whitelist) && void 0 !== r
                ? r
                : []
            ),
            n = Array.from(
              null !== (a = e.jsondata.broadcast_priority) && void 0 !== a
                ? a
                : []
            ),
            s = new Map();
          for (let e = 0; e < i.length && !(e >= n.length); e++)
            switch (n[e]) {
              case "primary":
                s.set(i[e], b.k_ePrimary);
                break;
              case "featured":
                s.set(i[e], b.k_eFeatured);
                break;
              case "default_featured":
                s.set(i[e], b.k_eDefaultFeatured);
                break;
              default:
              case "general":
                s.set(i[e], b.k_eGeneral);
            }
          t.forEach((e) => {
            const t = Number(e.accountid);
            s.has(t) && (e.current_selection_priority = s.get(t));
          });
        }
        AutoStartVideoStream(e, t) {
          return Object(a.a)(this, void 0, void 0, function* () {
            let r = this.GetStreamsLookupKeyFromDef(e);
            if (this.m_bMapHasStartedVideo.get(r)) return null;
            if (this.m_bUseFakeData) {
              if (!this.m_playReadyStream.get(r)) {
                const e = {
                  accountid: 0,
                  thumbnail_http_address: "",
                  default_selection_priority: b.k_eGeneral,
                  current_selection_priority: b.k_eGeneral,
                };
                this.m_playReadyStream.set(r, e);
              }
              return this.m_playReadyStream;
            }
            const a = new Set();
            for (;;) {
              const r = t.filter((e) => !a.has(e)),
                i = this.GetAutoStartStream(r);
              if (!i) return null;
              if (yield this.AttemptToPlayStream(e, i)) return i;
              a.add(i);
            }
          });
        }
        AttemptToPlayStream(e, t) {
          return Object(a.a)(this, void 0, void 0, function* () {
            let r = this.GetStreamsLookupKeyFromDef(e);
            if (
              (this.m_bMapHasStartedVideo.set(r, !0),
              this.m_mapBroadcastChecked.has(t.accountid) ||
                this.m_mapBroadcastChecked.set(
                  t.accountid,
                  this.InternalAttemptToPlayStream(e, t)
                ),
              t.nAppIDVOD)
            )
              this.m_playReadyStream.set(r, t);
            else {
              const a = yield this.m_mapBroadcastChecked.get(t.accountid);
              if (1 != (null == a ? void 0 : a.success)) return null;
              (t.steamid = a.steamid),
                this.m_playReadyStream.set(r, t),
                this.GetConcurrentStreams(e) > 1
                  ? (this.m_streamChatStatus = "hide")
                  : (this.m_streamChatStatus = t.broadcast_chat_visibility),
                this.m_setStreamChangedListeners.forEach((e) => e(t));
              v(c.a.GetOrCreateBroadcastInfo(t.steamid).m_nAppID, 1, t.snr);
            }
            return t;
          });
        }
        InternalAttemptToPlayStream(e, t) {
          return Object(a.a)(this, void 0, void 0, function* () {
            this.GetStreamsLookupKeyFromDef(e);
            let r = null;
            try {
              const e = p.d.STORE_BASE_URL + "broadcast/ajaxcheckbroadcast";
              let a = {
                broadcastaccountid: t.accountid,
                viewer_token: c.a.GetViewerToken(),
                origin: self.origin,
              };
              return (r = yield s.a.get(e, { params: a })), r.data;
            } catch (e) {
              let t = Object(u.a)(e);
              console.error(
                "Broadcast.AttemptToPlayStream: " + t.strErrorMsg,
                t
              );
            }
            return null;
          });
        }
        GetAutoStartStream(e) {
          if (!e) return null;
          const t = e.filter((e) => _(e)),
            r = t.reduce((e, t) => Math.max(e, S(t)), 0),
            a = t.filter((e) => S(e) === r);
          if (0 === a.length) return null;
          return a[Math.floor(Math.random() * a.length)];
        }
        MapEmbeddableStreamToRequest(e) {
          var t, r, a;
          return {
            appid: e.appid,
            promotionName: e.bIsPreview ? "preview" : e.promotionName,
            clanid: e.clanid
              ? e.clanid
              : e.event
              ? e.event.clanSteamID.GetAccountID()
              : void 0,
            listid: e.listid,
            subid: e.subid,
            bundleid: e.bundleid,
            eventid: e.event ? e.event.GID : void 0,
            previewAccounts: Boolean(e.bIsPreview && e.accountIDs)
              ? e.accountIDs.slice().sort().join(",")
              : void 0,
            test: false,
            cc: p.d.COUNTRY,
            l: p.d.LANGUAGE,
            hubtype:
              null === (t = e.event) || void 0 === t
                ? void 0
                : t.GetContentHubType(),
            hubcategory:
              null === (r = e.event) || void 0 === r
                ? void 0
                : r.GetContentHubCategory(),
            hubtagid:
              null === (a = e.event) || void 0 === a
                ? void 0
                : a.GetContentHubTag(),
            tabuniqueid: e.tabuniqueid,
            tabfilter: e.tabfilter,
            rt_now_override_test: d.a.BHasTimeOverride()
              ? d.a.GetTimeNowWithOverride()
              : void 0,
          };
        }
        GetStreamsLookupKeyFromDef(e) {
          return this.GetStreamsLookupKeyFromParam(
            this.MapEmbeddableStreamToRequest(e)
          );
        }
        GetStreamsLookupKeyFromParam(e) {
          return JSON.stringify(e);
        }
        static Get() {
          return (
            h.s_GlobalStore ||
              ((h.s_GlobalStore = new h()),
              "dev" == p.d.WEB_UNIVERSE &&
                (window.g_BroadcastEmbeddableStore = h.s_GlobalStore),
              h.s_GlobalStore.Init()),
            h.s_GlobalStore
          );
        }
        Init() {}
      }
      var b;
      Object(a.b)([o.C], h.prototype, "m_lookupStreams", void 0),
        Object(a.b)([o.C], h.prototype, "m_playReadyStream", void 0),
        Object(a.b)([o.C], h.prototype, "m_pageChatStatus", void 0),
        Object(a.b)([o.C], h.prototype, "m_streamChatStatus", void 0),
        Object(a.b)([o.C], h.prototype, "m_bUserChatExpanded", void 0),
        Object(a.b)(
          [o.C],
          h.prototype,
          "m_bUserPreferenceHideBroadcastByDefault",
          void 0
        ),
        Object(a.b)([o.C], h.prototype, "m_bCollapsed", void 0),
        Object(a.b)(
          [o.k],
          h.prototype,
          "HintLoadEmbeddablePreviewStreams",
          null
        ),
        Object(a.b)([o.k], h.prototype, "AttemptToPlayStream", null),
        (function (e) {
          (e[(e.k_ePrimary = 3)] = "k_ePrimary"),
            (e[(e.k_eFeatured = 2)] = "k_eFeatured"),
            (e[(e.k_eDefaultFeatured = 1)] = "k_eDefaultFeatured"),
            (e[(e.k_eGeneral = 0)] = "k_eGeneral");
        })(b || (b = {}));
      class g {
        constructor() {
          (this.default_selection_priority = b.k_eGeneral),
            (this.current_selection_priority = b.k_eGeneral);
        }
      }
      function S(e) {
        return e.current_selection_priority || b.k_eGeneral;
      }
      function f(e) {
        e.sort((e, t) =>
          S(e) != S(t)
            ? S(t) - S(e)
            : e.viewer_count != t.viewer_count
            ? t.viewer_count - e.viewer_count
            : t.accountid - e.accountid
        );
      }
      function v(e, t, r) {
        return Object(a.a)(this, void 0, void 0, function* () {
          if (e > 0 && 7 != e && r) {
            let a = new URLSearchParams();
            a.append("page_action", "" + t),
              a.append("snr", r),
              s.a.post(
                p.d.STORE_BASE_URL + "ajaxreportproductaction/" + e + "/",
                a
              );
          }
        });
      }
      Object(a.b)([o.C], g.prototype, "title", void 0),
        Object(a.b)([o.C], g.prototype, "viewer_count", void 0),
        Object(a.b)([o.C], g.prototype, "gamedata_subtitle", void 0),
        Object(a.b)([o.C], g.prototype, "current_selection_priority", void 0);
      const y = new m.a();
    },
    d4Nf: function (e, t, r) {
      "use strict";
      r.d(t, "b", function () {
        return o;
      }),
        r.d(t, "a", function () {
          return l;
        });
      var a = r("/Q1a"),
        i = (r("2vnA"), r("6iBs"), r("xH93")),
        n = (r("QAsS"), r("8G9o"), r("f5iL"));
      const s = "061818254b2c99ac49e6626adb128ed1282a392f",
        o = 120;
      class l {
        constructor(e) {
          (this.m_bInitialized = !1), (this.m_unAppID = e);
        }
        get appid() {
          return this.m_unAppID;
        }
        get is_initialized() {
          return this.m_bInitialized;
        }
        get is_valid() {
          return this.m_bInitialized && !!this.m_strName;
        }
        get name() {
          return this.m_strName;
        }
        get header_image_url() {
          return a.d.MEDIA_CDN_URL + `steam/apps/${this.m_unAppID}/header.jpg`;
        }
        get icon_url_no_default() {
          return this.m_strIconURL && this.BuildAppURL(this.m_strIconURL, s);
        }
        get icon_url() {
          return this.BuildAppURL(this.m_strIconURL, s);
        }
        get logo_url() {
          return (
            a.d.MEDIA_CDN_URL +
            `steam/apps/${this.m_unAppID}/capsule_231x87.jpg`
          );
        }
        get time_updated_from_server() {
          return this.m_dtUpdatedFromServer;
        }
        get apptype() {
          return this.m_eAppType;
        }
        BIsApplicationOrTool() {
          return 4 == this.apptype || 2 == this.apptype;
        }
        BuildAppURL(e, t) {
          return e
            ? a.d.MEDIA_CDN_COMMUNITY_URL +
                "images/apps/" +
                this.appid +
                "/" +
                e +
                ".jpg"
            : Object(i.a)(t);
        }
        DeserializeFromMessage(e) {
          (this.m_bInitialized = !0),
            (this.m_strName = e.name()),
            (this.m_strIconURL = e.icon()),
            (this.m_dtUpdatedFromServer = new Date()),
            (this.m_eAppType = e.app_type());
        }
        DeserializeFromAppOverview(e) {
          e.icon_hash() && 1073741824 != e.app_type()
            ? ((this.m_bInitialized = !0),
              (this.m_strName = e.display_name()),
              (this.m_strIconURL = e.icon_hash()),
              (this.m_dtUpdatedFromServer = new Date()),
              (this.m_eAppType = e.app_type()))
            : (this.m_bInitialized = !1);
        }
        DeserializeFromCacheObject(e) {
          try {
            (this.m_strName = e.strName),
              (this.m_strIconURL = e.strIconURL),
              (this.m_dtUpdatedFromServer = new Date(e.strUpdatedFromServer)),
              (this.m_eAppType = e.eAppType),
              (this.m_bInitialized = !0);
          } catch (e) {}
        }
        SerializeToCacheObject() {
          return (
            Object(n.a)(
              this.m_bInitialized,
              "Attempting to serialize an uninitialized AppInfo object for caching!"
            ),
            this.m_bInitialized
              ? {
                  strName: this.m_strName,
                  strIconURL: this.m_strIconURL,
                  strUpdatedFromServer: this.m_dtUpdatedFromServer.toJSON(),
                  eAppType: this.m_eAppType,
                }
              : null
          );
        }
      }
    },
    hNBN: function (e, t, r) {
      "use strict";
      r.d(t, "a", function () {
        return C;
      });
      var a = r("mrSG"),
        i = r("aoTL"),
        n = r("q1tI"),
        s = r.n(n),
        o = (r("Zdsb"), r("lfGQ")),
        l = r("FmLm"),
        c = r("zy5s"),
        d = r.n(c),
        m = r("+VGL"),
        u = r.n(m),
        p = r("tXj3"),
        _ = r("thkD"),
        h = r("jIgc"),
        b = r("e356"),
        g = r("0JCO"),
        S = r("kWcV"),
        f = r("TqgT"),
        v = r("GbHM"),
        y = r("GXif"),
        B = r("/Q1a");
      function w(e) {
        Object(h.d)(
          s.a.createElement(
            _.g,
            {
              strTitle: Object(y.g)("#Wishlist_Error"),
              strDescription: Object(y.g)("#Wishlist_Error_Desc"),
            },
            s.a.createElement("br", null),
            s.a.createElement("br", null),
            e
          ),
          window
        );
      }
      function C(e) {
        const [t, r] = s.a.useState(!1),
          [n, c] = s.a.useState(!l.a.Get().BIsLoaded()),
          m = Object(g.c)(),
          { appid: _, bIsFree: h, bIsComingSoon: C, className: I } = e,
          [E, O] = Object(i.d)(() => [
            l.a.Get().BIsGameWishlisted(_),
            l.a.Get().BOwnsApp(_),
          ]);
        s.a.useEffect(() => {
          (() => {
            Object(a.a)(this, void 0, void 0, function* () {
              yield l.a.Get().HintLoad(), c(!1);
            });
          })();
        }, []);
        return O || (!C && h)
          ? null
          : s.a.createElement(
              "div",
              {
                className: Object(v.a)(d.a.WishList, u.a.FlexRowContainer, I),
                onClick: () =>
                  Object(a.a)(this, void 0, void 0, function* () {
                    if (B.l.logged_in) {
                      if (!t) {
                        r(!0);
                        const e = !E;
                        try {
                          const t = yield l.a
                            .Get()
                            .UpdateGameWishlist(_, e, Object(o.c)(m));
                          r(!1),
                            1 != t.success && w(Object(f.a)(t).strErrorMsg);
                        } catch (e) {
                          r(!1), w(Object(f.a)(e).strErrorMsg);
                        }
                      }
                    } else Object(p.a)();
                  }),
                "data-tooltip-text": Object(y.g)("#AddToWishlist_ttip"),
              },
              s.a.createElement(
                "span",
                null,
                (n || t) && s.a.createElement(S.a, { size: "small" })
              ),
              !t && E && s.a.createElement(b.q, null),
              s.a.createElement(
                "span",
                null,
                Object(y.g)(
                  t
                    ? "#Updating"
                    : n
                    ? "#Loading"
                    : E
                    ? "#Wishlisted_short"
                    : "#AddToWishlist_short"
                )
              )
            );
      }
    },
    "i1T+": function (e, t, r) {
      "use strict";
      r.d(t, "a", function () {
        return u;
      });
      var a = r("vDqi"),
        i = r.n(a),
        n = r("q1tI"),
        s = r("GpIp"),
        o = (r("XrGS"), r("yfxr"), r("FmLm")),
        l = (r("X/lQ"), r("hAgw")),
        c = r("RrtU"),
        d = (r("4EJs"), r("1mk1"));
      class m {}
      function u(e, t) {
        const r = Object(n.useRef)(i.a.CancelToken.source()),
          { id: a, type: u } = e,
          p = t ? Object.assign(Object.assign({}, s.e), t) : s.e,
          _ = Object(n.useMemo)(() => ({ id: a, type: u }), [a, u]),
          [h] = Object(c.a)(_.id, Object(l.d)(_.type), p),
          [b, g] = Object(n.useState)({ id: a, type: u }),
          [S] = Object(c.a)(
            null == b ? void 0 : b.id,
            Object(l.d)(null == b ? void 0 : b.type),
            p
          ),
          f = Object(n.useMemo)(() => {
            var e;
            return (null === (e = null == S ? void 0 : S.GetIncludedAppIDs()) ||
            void 0 === e
              ? void 0
              : e.length) > 1 &&
              null ==
                (null == S ? void 0 : S.GetAssets().GetMainCapsuleURL()) &&
              null == (null == S ? void 0 : S.GetAssets().GetHeaderURL())
              ? { id: S.GetIncludedAppIDs()[0], type: "game" }
              : b;
          }, [b, S]),
          [v] = Object(c.b)(null == f ? void 0 : f.id, p),
          y = Object(n.useMemo)(
            () => ({
              id:
                (null == S ? void 0 : S.GetParentAppID()) !=
                (null == S ? void 0 : S.GetID())
                  ? null == S
                    ? void 0
                    : S.GetParentAppID()
                  : void 0,
              type: "game",
            }),
            [S]
          ),
          [B] = Object(c.b)(y.id, p),
          [w] = Object(n.useState)(++m.instance_count),
          [C, I] = Object(n.useState)(!1),
          [E, O] = Object(n.useState)(Object(d.b)(u)),
          [T, G] = Object(n.useState)(a);
        return (
          Object(n.useEffect)(() => {
            if (
              (o.a.Get().HintLoad(),
              1 == (null == h ? void 0 : h.GetStoreItemType()) &&
                1 == h.GetIncludedAppIDs().length &&
                (b.id != h.GetIncludedAppIDs()[0] || "game" != b.type) &&
                !(null == r ? void 0 : r.current.token.reason))
            ) {
              const e = h.GetIncludedAppIDs()[0];
              g({ id: e, type: "game" }), O("app"), G(e);
            }
          }, [b.id, b.type, h]),
          Object(n.useEffect)(
            () => () =>
              null == r
                ? void 0
                : r.current.cancel("StoreSalePreviewWidget: unmounting"),
            []
          ),
          {
            myInstance: w,
            bIsHovered: C,
            setIsHovered: I,
            purchaseInfo: _,
            displayInfo: b,
            displayStoreItem: S,
            baseGameStoreItem: B,
            baseGameInfo: y,
            hoverType: E,
            nHoverId: T,
            artworkInfo: f,
            artworkStoreItem: v,
          }
        );
      }
      m.instance_count = 0;
    },
    i5oW: function (e, t, r) {
      "use strict";
      r.d(t, "a", function () {
        return c;
      });
      var a = r("mrSG"),
        i = r("q1tI"),
        n = r.n(i),
        s = r("2KLf"),
        o = r("uuth"),
        l = r("hCpY");
      class c extends n.a.Component {
        OnEnter() {
          s.a.AddImpression(this.props.appID, this.props.snr);
        }
        render() {
          return n.a.createElement(
            o.a,
            { onEnter: this.OnEnter },
            this.props.children
          );
        }
      }
      Object(a.b)([l.b], c.prototype, "OnEnter", null);
    },
    "j/dN": function (e, t, r) {
      "use strict";
      r.d(t, "a", function () {
        return u;
      });
      var a = r("TyAF"),
        i = r("q1tI"),
        n = r.n(i),
        s = (r("Zdsb"), r("wQEA")),
        o = r("FmLm"),
        l = r("GbHM"),
        c = r("GXif"),
        d = r("zy5s"),
        m = r.n(d);
      const u = Object(a.a)((e) => {
        const { appid: t, bIsMuted: r } = e,
          a = o.a.Get().BOwnsApp(t),
          i = Object(l.a)(
            m.a.CapsuleBottomBar,
            r && m.a.Muted,
            a ? m.a.PlayNowButton : m.a.AddToLibraryButton
          );
        return n.a.createElement(
          "div",
          {
            onClick: (e) => {
              e.preventDefault(),
                a ? Object(s.a)(t) : o.a.Get().AddLicenseForFreeGame(t);
            },
            className: i,
          },
          Object(c.g)(a ? "#Sale_PlayNow" : "#Sale_AddToLibrary")
        );
      });
    },
    j4v3: function (e, t, r) {
      "use strict";
      r.d(t, "a", function () {
        return a;
      }),
        r.d(t, "b", function () {
          return i;
        }),
        r.d(t, "g", function () {
          return p;
        }),
        r.d(t, "h", function () {
          return _;
        }),
        r.d(t, "f", function () {
          return b;
        }),
        r.d(t, "d", function () {
          return S;
        }),
        r.d(t, "i", function () {
          return f;
        }),
        r.d(t, "e", function () {
          return v;
        }),
        r.d(t, "c", function () {
          return y;
        });
      var a,
        i,
        n = r("q1tI"),
        s = r("EC67"),
        o = (r("XrGS"), r("oleE"), r("fsrB")),
        l = r("f5iL"),
        c = r("/Q1a"),
        d = r("vEiK");
      !(function (e) {
        (e.k_eView = "view"),
          (e.k_eViewWebSiteHub = "websitehub"),
          (e.k_eCommunityView = "communityview"),
          (e.k_eCommunityEdit = "edit"),
          (e.k_eCommunityEditBroadcast = "editBroadcast"),
          (e.k_eCommunityAdminPage = "admin"),
          (e.k_eCommunityPublish = "publish"),
          (e.k_eCommunityMigrate = "migrate"),
          (e.k_eCommunityPreview = "preview"),
          (e.k_eCommunityPreviewSale = "previewsale"),
          (e.k_eCommunityAnnouncementHub = "community_announcehub"),
          (e.k_eStoreView = "storeview"),
          (e.k_eStoreNewsHub = "newshub"),
          (e.k_eStoreOwnerPage = "store"),
          (e.k_eStoreSalePage = "sale"),
          (e.k_eStoreUsersNewsHub = "usernewshub");
      })(a || (a = {})),
        (function (e) {
          (e.k_eFacebook = "facebook"),
            (e.k_eTwitter = "twitter"),
            (e.k_eReddit = "reddit");
        })(i || (i = {}));
      const m =
        /(?:steampowered\.com|valve\.org\/store|\.steamchina\.com|steamcommunity\.com|valve\.org\/community)\/(\w+)(\/|$)/i;
      function u(e, t) {
        const r = "store" === Object(c.g)(),
          i = (function (e) {
            const t = e.match(m);
            return null == t ? void 0 : t[1];
          })(window.location.href),
          n = r && "news" == i,
          s = "community" === Object(c.g)(),
          o = t.appid ? "games" : "groups",
          d =
            s &&
            o == i &&
            ((t.appid && t.appid === c.c.APPID) ||
              (!t.appid && t.clanSteamID.GetAccountID() === c.c.CLANACCOUNTID));
        switch (e) {
          case a.k_eView:
            return d || n;
          case a.k_eCommunityView:
          case a.k_eCommunityEdit:
          case a.k_eCommunityEditBroadcast:
          case a.k_eCommunityAdminPage:
          case a.k_eCommunityPublish:
          case a.k_eCommunityMigrate:
          case a.k_eCommunityPreview:
          case a.k_eCommunityPreviewSale:
          case a.k_eCommunityAnnouncementHub:
            return d;
          case a.k_eViewWebSiteHub:
            return d || n;
          case a.k_eStoreView:
          case a.k_eStoreNewsHub:
          case a.k_eStoreOwnerPage:
          case a.k_eStoreUsersNewsHub:
            return n;
          case a.k_eStoreSalePage:
            return !1;
          default:
            return (
              Object(l.a)(!1, "Unknown route specified for link: " + e), !1
            );
        }
      }
      function p(e, t) {
        const r =
          c.d.COMMUNITY_BASE_URL +
          "gid/" +
          e.clanSteamID.ConvertTo64BitString() +
          "/announcements/share/" +
          e.AnnouncementGID +
          "?site=" +
          t;
        return t === i.k_eFacebook ? r + "&t=" + Math.random() : r;
      }
      function _(e) {
        return g(e, a.k_eStoreView, "absolute");
      }
      function h(e, t, r) {
        if (r)
          return (
            (e ? "/games/" + c.c.VANITY_ID : "/groups/" + c.c.VANITY_ID) + "/"
          );
        const a = e ? "ogg/" + e : "gid/" + t.ConvertTo64BitString();
        return c.d.COMMUNITY_BASE_URL + a + "/";
      }
      function b() {
        return "news";
      }
      function g(e, t, r) {
        const i = "relative" === r,
          n = "community" === Object(c.g)(),
          s = i ? "/" : c.d.STORE_BASE_URL,
          o = h(e.appid, e.clanSteamID, i);
        t === a.k_eView
          ? (t = n ? a.k_eCommunityView : a.k_eStoreView)
          : t === a.k_eViewWebSiteHub &&
            (t = n ? a.k_eCommunityAnnouncementHub : a.k_eStoreNewsHub);
        const d = e.GID ? e.GID : "",
          m = e.AnnouncementGID ? e.AnnouncementGID : "";
        switch (t) {
          case a.k_eCommunityPublish:
            return (
              o +
              (e.bOldAnnouncement
                ? "partnerevents/migrate_announcement/" + m
                : "partnerevents/publish/" + d + "?tab=publishing")
            );
          case a.k_eCommunityEdit:
            return (
              o +
              (e.bOldAnnouncement
                ? "partnerevents/migrate_announcement/" + m
                : "partnerevents/edit/" + d)
            );
          case a.k_eCommunityEditBroadcast:
            return (
              o +
              (e.bOldAnnouncement
                ? "partnerevents/migrate_announcement/" + m
                : "partnerevents/edit/" + d) +
              "?tab=broadcast"
            );
          case a.k_eCommunityMigrate:
            return o + "partnerevents/migrate_announcement/" + m;
          case a.k_eCommunityPreview:
            return (
              o +
              (e.bOldAnnouncement
                ? "partnerevents/preview_old_announcement/" + m
                : "partnerevents/preview/" + d)
            );
          case a.k_eCommunityPreviewSale:
            return o + "partnerevents/previewsale/" + d;
          case a.k_eCommunityAdminPage:
            return o + "partnerevents";
          case a.k_eCommunityAnnouncementHub:
            return o + "announcements";
          case a.k_eStoreNewsHub:
            return (
              s +
              `news/${
                e.appid
                  ? `app/${e.appid}`
                  : `group/${e.clanSteamID.GetAccountID()}`
              }`
            );
          case a.k_eStoreOwnerPage:
            return (
              s +
              (e.appid
                ? "app/" + e.appid
                : "curator/" + e.clanSteamID.GetAccountID())
            );
          case a.k_eStoreSalePage:
            return e.jsondata.bSaleEnabled
              ? s +
                  (e.jsondata.sale_vanity_id_valve_approved_for_sale_subpath
                    ? "sale/"
                    : "curator/" + e.clanSteamID.GetAccountID() + "/sale/") +
                  e.jsondata.sale_vanity_id
              : s;
          case a.k_eCommunityView:
            return o + "announcements/detail/" + m;
          case a.k_eStoreView:
            return `${s}news/${
              e.appid
                ? `app/${e.appid}`
                : `group/${e.clanSteamID.GetAccountID()}`
            }/${e.bOldAnnouncement ? `old_view/${m}` : `view/${d}`}`;
          case a.k_eStoreUsersNewsHub:
            return `${s}news/`;
          default:
            return Object(l.a)(!1, "Unknown route specified for link"), "";
        }
      }
      function S(e, t, r) {
        return g(
          e,
          t,
          "forceAbsolute" === r || !u(t, e) ? "absolute" : "relative"
        );
      }
      function f(e, t) {
        const r = u(t, e),
          a = g(e, t, r ? "relative" : "absolute");
        return r
          ? n.createElement(s.a, { push: !0, to: a })
          : (window.open(a), null);
      }
      function v(e, t, r) {
        const a = h(e, t, !1);
        switch (r) {
          case "admin":
            return a + "partnerevents";
          default:
            return "";
        }
      }
      function y(e) {
        const { preferredFocus: t } = e,
          { bCanUseLink: r } = n.useContext(d.a),
          a = Object(s.g)();
        if (!e.eventModel) return null;
        const i = r && u(e.route, e.eventModel),
          l = g(e.eventModel, e.route, i ? "relative" : "absolute");
        return i
          ? n.createElement(
              o.c,
              {
                style: e.style,
                className: e.className,
                href: a.createHref({ pathname: l }),
                onClick: (t) => {
                  var r;
                  null === (r = e.onClick) || void 0 === r || r.call(e, t),
                    a.push(l);
                },
                preferredFocus: t,
              },
              e.children
            )
          : n.createElement(
              o.c,
              {
                href: l,
                style: e.style,
                className: e.className,
                onClick: e.onClick,
                preferredFocus: t,
              },
              e.children
            );
      }
    },
    jALh: function (e, t, r) {
      "use strict";
      r.d(t, "a", function () {
        return i;
      });
      var a = r("/Q1a");
      class i {
        constructor() {
          "dev" === a.d.WEB_UNIVERSE && (window.g_HomeViewStore = this);
          const e = Object(a.h)("home_view_setting", "application_config");
          this.ValidateHomeViewData(e) && this.SetHomeViewSetting(e);
          const t = Object(a.h)(
            "home_view_setting_override",
            "application_config"
          );
          this.ValidateHomeViewDataOverride(t) &&
            this.SetHomeViewSettingOverride(t);
        }
        BHasHomeView() {
          return Boolean(this.m_HomeView);
        }
        GetHomeView() {
          var e;
          return null === (e = this.m_HomeView) || void 0 === e
            ? void 0
            : e.home;
        }
        static Get() {
          return (
            i.s_globalSingletonStore ||
              ((i.s_globalSingletonStore = new i()),
              "dev" == a.d.WEB_UNIVERSE &&
                (window.g_HomeViewSetting = i.s_globalSingletonStore)),
            i.s_globalSingletonStore
          );
        }
        ValidateHomeViewData(e) {
          const t = e;
          return (
            t && "object" == typeof t.home && "object" == typeof t.main_cluster
          );
        }
        SetHomeViewSetting(e) {
          this.m_HomeView = e;
        }
        ValidateHomeViewDataOverride(e) {
          const t = e;
          return (
            t &&
            (!t.all || "object" == typeof t.all) &&
            (!t.maincap || "object" == typeof t.maincap)
          );
        }
        SetHomeViewSettingOverride(e) {
          this.m_HomeView.home = Object.assign(
            Object.assign(
              Object.assign({}, this.m_HomeView.home),
              null == e ? void 0 : e.all
            ),
            null == e ? void 0 : e.maincap
          );
        }
      }
    },
    "jU/+": function (e, t, r) {
      e.exports = {
        GotSteamDialog: "gameactions_GotSteamDialog_3omvM",
        DownloadSteamUrl: "gameactions_DownloadSteamUrl_Glr7k",
        GameName: "gameactions_GameName_255On",
        Buttons: "gameactions_Buttons_2zw5J",
        Button: "gameactions_Button_dbZlJ",
        LeftButton: "gameactions_LeftButton_3SS71",
        AnswerText: "gameactions_AnswerText_25aqm",
        ActionText: "gameactions_ActionText_1FxxO",
        Footer: "gameactions_Footer_G3DY5",
        Logo: "gameactions_Logo_18ytK",
      };
    },
    lfGQ: function (e, t, r) {
      "use strict";
      r.d(t, "a", function () {
        return o;
      }),
        r.d(t, "d", function () {
          return l;
        }),
        r.d(t, "b", function () {
          return c;
        }),
        r.d(t, "c", function () {
          return d;
        }),
        r.d(t, "e", function () {
          return m;
        });
      var a = r("f5iL"),
        i = r("pSt8"),
        n = r("/Q1a"),
        s = r("q9Z8");
      function o(e, t = "", r = null) {
        return m.InstrumentLink(e, t, r);
      }
      function l(e, t, r = null) {
        const a = Object(i.f)(e).toLowerCase(),
          s = Object(i.f)(n.d.COMMUNITY_BASE_URL).toLowerCase(),
          o = Object(i.f)(n.d.STORE_BASE_URL).toLowerCase();
        return a === s || a === o ? c(e, t, r) : e;
      }
      function c(e, t, r = null) {
        const a = d(t, r);
        return m.AddNavParamToURL(e, a);
      }
      function d(e, t = null) {
        return (null == e ? void 0 : e.domain) ? m.GetLinkParam(e, t) : n.d.SNR;
      }
      class m {
        static SetNavEventParams(e, t, r = null, a = null) {
          (m.sm_strDomain = e),
            (m.sm_strController = t),
            (m.sm_strMethod = r),
            (m.sm_strSubmethod = a),
            (m.sm_strComputedLinkPrefix = null);
        }
        static GetDefaultParams() {
          let e = { domain: m.sm_strDomain, controller: m.sm_strController };
          return (
            m.sm_strMethod && (e.method = m.sm_strMethod),
            m.sm_strSubmethod && (e.submethod = m.sm_strSubmethod),
            e
          );
        }
        static ParseSNR(e) {
          const t = e.split("_") || [];
          return {
            domain: t[0],
            controller: t[1],
            method: t[2],
            submethod: t[3],
            feature: t[4],
            depth: t[5] ? Number(t[5]) : void 0,
          };
        }
        static InstrumentLink(e, t, r = null) {
          const a = m.GetLinkParam(t, r);
          return m.AddNavParamToURL(e, a);
        }
        static GetLinkParam(e, t = null) {
          let r, a;
          if (
            ("string" == typeof e || e.domain || (e = e.feature),
            "string" != typeof e && e.domain)
          )
            (r = m.ComputeLinkPrefix(
              e.domain,
              e.controller,
              e.method,
              e.submethod
            )),
              (a = e.feature),
              (t = null != t ? t : e.depth);
          else {
            if (!m.sm_strComputedLinkPrefix && !m.ComputeStaticLinkPrefix())
              return null;
            (r = m.sm_strComputedLinkPrefix),
              (a = "string" == typeof e ? e : e.feature);
          }
          let i = m.EncodeEventComponent(a);
          return i && ((r += "_" + i), t && (r += "_" + t)), r;
        }
        static AddNavParamToURL(e, t) {
          try {
            const r = new URL(Object(i.b)(e)),
              a = new URLSearchParams(r.search);
            return (
              a.set("snr", encodeURIComponent(t)),
              r.origin + r.pathname + "?" + a.toString() + r.hash
            );
          } catch (t) {
            return console.error(e, t), e;
          }
        }
        static ComputeStaticLinkPrefix() {
          return m.sm_strDomain
            ? ((m.sm_strComputedLinkPrefix = m.ComputeLinkPrefix(
                m.sm_strDomain,
                m.sm_strController,
                m.sm_strMethod,
                m.sm_strSubmethod
              )),
              !0)
            : (Object(a.a)(
                !1,
                "CStoreNavEvents::SetNavEventParams was not called before calling InstrumentLink!"
              ),
              !1);
        }
        static ComputeLinkPrefix(e, t, r, a) {
          let i = "";
          return (
            (i += m.EncodeEventComponent(e)),
            (i += "_"),
            (i += m.EncodeEventComponent(t)),
            (i += "_"),
            (i += m.EncodeEventComponent(r)),
            (i += "_"),
            (i += m.EncodeEventComponent(a)),
            i
          );
        }
        static EncodeEventComponent(e) {
          if (!e) return "";
          return e in s
            ? "" + s[e]
            : (e.match(/^[0-9]+$/) || (e = e.replace(/^[0-9]+/, "")),
              e.replace(/[^a-zA-Z0-9\- ]+/g, ""));
        }
      }
    },
    oEKi: function (e, t, r) {
      "use strict";
      r.d(t, "a", function () {
        return Q;
      }),
        r.d(t, "b", function () {
          return J;
        }),
        r.d(t, "c", function () {
          return X;
        }),
        r.d(t, "d", function () {
          return re;
        });
      var a = r("mrSG"),
        i = r("vDqi"),
        n = r.n(i),
        s = r("2vnA"),
        o = r("TyAF"),
        l = r("q1tI"),
        c = r.n(l),
        d = r("pQ8y"),
        m = (r("Zdsb"), r("/0nC"), r("iRfV")),
        u = (r("XrGS"), r("G7ky")),
        p = r("xH93"),
        _ = r("lfGQ"),
        h = (r("yfxr"), r("wijF")),
        b = r("10xk"),
        g = r("FmLm"),
        S = r("Ys0h"),
        f = r("hAgw"),
        v = r("RrtU"),
        y = r("IYm0"),
        B = r("+aRA"),
        w = r("vUNY"),
        C = r("zWNq"),
        I = r("qpfI"),
        E = r("1QaA"),
        O = r("7yn2"),
        T = r("PlCS"),
        G = r("j/dN"),
        R = r("e356"),
        D = (r("xoHR"), r("f5iL")),
        A = r("3u1o"),
        j = r("GbHM"),
        k = r("rSrx"),
        M = r("GXif"),
        F = r("hCpY"),
        P = r("/Q1a"),
        N = r("0JCO"),
        L = r("KQHr"),
        U = r("7YTu"),
        W = r.n(U),
        z = r("tXj3"),
        V = r("zy5s"),
        x = r.n(V),
        H = r("5ZQm");
      const q = "DEBUG_UseNewGameHover";
      function Q() {
        return "none" !== Y();
      }
      function Y() {
        var e;
        return (
          (null === (e = window.sessionStorage) || void 0 === e
            ? void 0
            : e.getItem(q)) || "default"
        );
      }
      window.SetHoverPresentation = function (e) {
        window.sessionStorage.setItem(q, e);
      };
      function Z(e) {
        const { info: t } = e,
          r = Object(l.useRef)({
            include_assets: !0,
            include_trailers: !0,
            include_screenshots: !0,
          }),
          [a] = Object(v.a)(t.id, Object(f.d)(t.type), r.current),
          [i, n] = Object(l.useState)([]),
          o = Object(l.useRef)(0),
          d = Object(F.f)(),
          [m] = c.a.useState(new A.b()),
          u = Object(l.useCallback)(() => {
            if ((null == i ? void 0 : i.length) > 0) {
              const e = i[o.current].nDurationMs;
              m.Schedule(e, () => {
                const e = o.current;
                (o.current = (o.current + 1) % i.length),
                  e != o.current && (u(), d());
              });
            }
          }, [i, m, d]),
          p = Object(l.useCallback)(
            (e) => {
              var r;
              const a = [];
              if (1 == e.length) {
                const t = S.a.Get().GetApp(e[0]);
                t.GetMicroTrailer() &&
                  a.push({
                    rctImage: c.a.createElement(C.a, {
                      appInfo: { id: t.GetID(), type: "game" },
                    }),
                    nDurationMs: 5500,
                  }),
                  t
                    .GetOnlyAllAgesSafeScreenshots()
                    .slice(0, 10)
                    .forEach((e, t) => {
                      a.push({
                        rctImage: c.a.createElement("img", {
                          key: e,
                          className: W.a.FullDivImage,
                          loading: "lazy",
                          src: e,
                          alt: "screenshot " + (t + 1),
                        }),
                        nDurationMs: 2e3,
                      });
                    });
              }
              if (0 == a.length)
                for (const t of e) {
                  const e = S.a.Get().GetApp(t),
                    i =
                      null === (r = null == e ? void 0 : e.GetAssets()) ||
                      void 0 === r
                        ? void 0
                        : r.GetMainCapsuleURL();
                  i &&
                    a.push({
                      rctImage: c.a.createElement("img", {
                        key: "fallback",
                        className: W.a.FullDivImage,
                        loading: "lazy",
                        src: i,
                        alt: e.GetName(),
                      }),
                      nDurationMs: 2e3,
                    });
                }
              a.length > 0
                ? (n(a), (o.current = 0), u())
                : ("dev" != P.d.WEB_UNIVERSE && "beta" != P.d.WEB_UNIVERSE) ||
                  console.error(
                    "DEV ONLY OUTPUT: GameHoverImages for id/type no images: (might be not age safe screenshots)",
                    Object(s.I)(e),
                    Object(s.I)(t)
                  );
            },
            [u]
          );
        return (
          Object(l.useEffect)(
            () => (
              !a || (i && 0 != i.length)
                ? (null == i ? void 0 : i.length) && u()
                : 2 == a.GetStoreItemType() || 1 == a.GetStoreItemType()
                ? (Object(D.a)(
                    a.GetIncludedAppIDs().length > 0,
                    "expected included apps " +
                      a.GetID() +
                      " " +
                      a.GetStoreItemType()
                  ),
                  S.a
                    .Get()
                    .QueueMultipleAppRequests(a.GetIncludedAppIDs(), {
                      include_assets: !0,
                    })
                    .then(() => p(a.GetIncludedAppIDs())))
                : p([a.GetID()]),
              () => m.Cancel()
            ),
            [p, i, a, m, u]
          ),
          c.a.createElement(
            "div",
            { className: W.a.TrailerCtn },
            null == i
              ? void 0
              : i.map((e, r) =>
                  c.a.createElement(
                    "div",
                    {
                      key: "e-" + r + "-" + t.id + "_" + t.type,
                      className: Object(j.a)(
                        W.a.FullDivImage,
                        r != o.current && W.a.Transparent
                      ),
                    },
                    e.rctImage
                  )
                )
          )
        );
      }
      function K(e) {
        const { rgTagIDs: t } = e;
        return c.a.createElement(
          "div",
          { className: W.a.TagRow },
          c.a.createElement(
            "div",
            { className: W.a.Tags },
            t.map((e) =>
              c.a.createElement(O.a, {
                key: "tag_" + e,
                tagid: e,
                className: W.a.Tag,
              })
            )
          )
        );
      }
      function J(e) {
        const { appInfo: t, bTruncateTotalReviews: r } = e,
          [a] = Object(v.a)(
            null == t ? void 0 : t.id,
            Object(f.d)(null == t ? void 0 : t.type),
            { include_reviews: !0 }
          );
        if (!a) return null;
        const i = g.a.Get().BShowFilteredUserReviewScores()
          ? a.GetFilteredReviewSummary()
          : a.GetUnfilteredReviewSummary();
        if (!i || 0 == i.review_score) return null;
        const n =
            i.review_score < 5
              ? W.a.ReviewScoreLow
              : 5 == i.review_score
              ? W.a.ReviewScoreMixed
              : W.a.ReviewScoreHigh,
          s = `${P.d.STORE_BASE_URL}app/${t.id}/#app_reviews_hash`;
        return c.a.createElement(
          T.b,
          { url: s, className: Object(j.a)(W.a.ReviewScore, "ReviewScore") },
          c.a.createElement(
            "div",
            { className: Object(j.a)(W.a.ReviewScoreValue, n) },
            c.a.createElement(
              "div",
              { className: W.a.ReviewScoreLabel },
              i.review_score_label
            ),
            c.a.createElement(
              "div",
              { className: W.a.ReviewScoreCount },
              r
                ? "(" + i.review_count.toLocaleString() + ")"
                : Object(M.g)(
                    "#GameHover_UserReviewCount",
                    i.review_count.toLocaleString()
                  )
            ),
            !r &&
              c.a.createElement(
                "div",
                { className: W.a.ReviewScoreHeader },
                " ",
                Object(M.g)("#GameHover_UserReviewsHeader")
              )
          )
        );
      }
      const X = Object(o.a)((e) => {
          const { appID: t, snr: r, classOverride: i } = e,
            s = t && g.a.Get().BIsGameWishlisted(t),
            o = t && g.a.Get().BOwnsApp(t),
            [d, m] = Object(l.useState)(!1),
            u = c.a.useRef(n.a.CancelToken.source());
          if (
            (c.a.useEffect(() => {
              const e = u;
              return () => {
                var t;
                return null === (t = e.current) || void 0 === t
                  ? void 0
                  : t.cancel("GameHoverWishlistButton unmounted");
              };
            }, []),
            o)
          )
            return null;
          return c.a.createElement(
            "div",
            {
              className: Object(j.a)(W.a.WishlistButton, i),
              onClick: (e) =>
                Object(a.a)(void 0, void 0, void 0, function* () {
                  e.preventDefault(),
                    e.stopPropagation(),
                    P.l.logged_in
                      ? (m(!0),
                        yield g.a.Get().UpdateGameWishlist(t, !s, r),
                        u.current.token.reason || m(!1))
                      : Object(z.a)();
                }),
            },
            c.a.createElement(R.Eb, null),
            c.a.createElement(
              "div",
              {
                className: Object(j.a)(
                  W.a.WishlistButtonText,
                  d && W.a.WishlistLoadingText
                ),
              },
              Object(M.g)(
                s ? "#Sale_RemoveFromWishlist" : "#Sale_AddToWishlist"
              )
            )
          );
        }),
        $ = (e) => {
          const { nCreatorAccountID: t } = e,
            [r, a] = Object(h.b)(t),
            i = Object(b.b)(t);
          return c.a.createElement(
            "div",
            { className: W.a.GameHoverCreatorFollowButtonCtn },
            c.a.createElement(
              "a",
              { href: null == i ? void 0 : i.GetCreatorHomeURL("developer") },
              c.a.createElement("img", {
                src: r ? Object(p.a)(null, "medium") : a.avatar_medium_url,
              })
            ),
            c.a.createElement(w.b, { clanAccountID: t })
          );
        },
        ee = Object(o.a)((e) => {
          const {
              info: t,
              strStoreUrl: r,
              elElementToAppend: a,
              bShowDemoButton: i,
              bHideBottomHalf: n,
              bHidePrice: s,
              bShowDeckCompatibilityDialog: o,
              bUseSubscriptionLayout: d,
              nCreatorAccountID: m,
              bPreventNavigation: u,
            } = e,
            [p, _] = Object(l.useState)(!1),
            [h, b] = Object(l.useState)(""),
            [g] = Object(v.a)(t.id, Object(f.d)(t.type), {
              include_assets: !0,
              include_release: !0,
              include_platforms: !0,
              include_tag_count: 20,
            }),
            S = !d && !i && !a,
            B = 0 == (null == g ? void 0 : g.GetStoreItemType());
          return c.a.createElement(
            "div",
            {
              className: W.a.BottomShelf,
              style: { transform: n && p ? h : "" },
              onMouseEnter: () => _(!0),
              onFocus: () => _(!0),
              onMouseLeave: () => _(!1),
              onBlur: () => _(!1),
            },
            c.a.createElement(
              "a",
              {
                href: u ? null : r,
                target: P.d.IN_CLIENT ? void 0 : "_blank",
                className: W.a.Midline,
              },
              c.a.createElement(
                "div",
                { className: W.a.CapsuleImageAnchorPoint },
                c.a.createElement(
                  "div",
                  {
                    className: Object(j.a)(
                      W.a.CapsuleImageCtn,
                      W.a.WithCornerShine
                    ),
                  },
                  c.a.createElement("img", {
                    loading: "lazy",
                    src: null == g ? void 0 : g.GetAssets().GetHeaderURL(),
                    alt: null == g ? void 0 : g.GetName(),
                  })
                )
              ),
              Boolean(!s && !d) &&
                c.a.createElement(
                  "div",
                  { className: W.a.Price },
                  c.a.createElement(E.a, { info: t })
                )
            ),
            c.a.createElement(
              "div",
              {
                className: W.a.BottomShelfOffScreen,
                ref: (e) =>
                  b(
                    `translateY( -${
                      (null == e ? void 0 : e.clientHeight) || 0
                    }px )`
                  ),
              },
              c.a.createElement(
                "div",
                { className: W.a.TextContent },
                c.a.createElement(
                  "a",
                  {
                    href: u ? null : r,
                    target: P.d.IN_CLIENT ? void 0 : "_blank",
                  },
                  c.a.createElement(
                    "div",
                    { className: W.a.GameTitle },
                    null == g ? void 0 : g.GetName()
                  )
                ),
                Boolean(g) && c.a.createElement(K, { rgTagIDs: g.GetTagIDs() }),
                Boolean(!o && g) && c.a.createElement(J, { appInfo: t }),
                Boolean(!o && S) &&
                  c.a.createElement(
                    "div",
                    { className: W.a.ReviewsAndRelease },
                    c.a.createElement(I.a, {
                      item: t,
                      strClassName: W.a.PlatformDisplay,
                    }),
                    Boolean(
                      null == g ? void 0 : g.GetFormattedSteamReleaseDate()
                    ) &&
                      c.a.createElement(
                        "div",
                        { className: W.a.ReleaseDate },
                        null == g ? void 0 : g.GetFormattedSteamReleaseDate()
                      )
                  ),
                i &&
                  c.a.createElement(L.a, {
                    info: t,
                    className: W.a.DemoButton,
                  }),
                Boolean(o && B) && c.a.createElement(y.b, { nAppID: t.id }),
                Boolean(a) && a,
                Boolean(d && B) &&
                  c.a.createElement(G.a, { appid: t.id, bIsMuted: !1 }),
                m && c.a.createElement($, { nCreatorAccountID: m })
              )
            )
          );
        }),
        te = Object(o.a)((e) => {
          c.a.useEffect(() => {
            g.a.Get().HintLoad();
          }, []);
          const {
            info: t,
            strStoreUrl: r,
            bHideBottomHalf: a,
            bShowDeckCompatibilityDialog: i,
          } = e;
          let n;
          return (
            "overrideNavigation" in t && (n = () => t.overrideNavigation()),
            c.a.createElement(
              "div",
              {
                className: Object(j.a)(
                  W.a.GameHoverCapsuleCtn,
                  x.a.InGameHover,
                  a && W.a.UseHidingBottomHalf
                ),
                onClick: n,
              },
              c.a.createElement(
                "a",
                {
                  href: n ? null : r,
                  target: P.d.IN_CLIENT ? void 0 : "_blank",
                  className: W.a.TrailerAnchorStoreLink,
                },
                Boolean(!i && !n) &&
                  c.a.createElement(X, { appID: t.id, snr: e.strSNR }),
                c.a.createElement(Z, { info: t })
              ),
              c.a.createElement(
                ee,
                Object.assign({}, e, { bPreventNavigation: Boolean(n) })
              )
            )
          );
        });
      function re(e) {
        const { item: t } = e,
          [r] = Object(v.a)(t.id, Object(f.d)(t.type), {});
        if (!r) return null;
        if (1 == r.GetStoreItemType() && 1 == r.GetIncludedAppIDs().length) {
          const t = { id: r.GetIncludedAppIDs()[0], type: "game" };
          return c.a.createElement(ae, Object.assign({}, e, { item: t }));
        }
        return c.a.createElement(ae, Object.assign({}, e));
      }
      function ae(e) {
        const {
            item: t,
            elElementToAppend: r,
            bShowDemoButton: i,
            bHidePrice: n,
            bUseSubscriptionLayout: s,
            strExtraParams: o,
            fnOnHoverStateChange: l,
            nCreatorAccountID: d,
            bShowDeckCompatibilityDialog: m,
          } = e,
          u = Object(a.c)(e, [
            "item",
            "elElementToAppend",
            "bShowDemoButton",
            "bHidePrice",
            "bUseSubscriptionLayout",
            "strExtraParams",
            "fnOnHoverStateChange",
            "nCreatorAccountID",
            "bShowDeckCompatibilityDialog",
          ]),
          [p] = Object(v.a)(t.id, Object(f.d)(t.type), {}),
          h = Object(N.c)(),
          b = Object(_.c)(h);
        if (!p) return null;
        if (P.d.IN_GAMEPADUI)
          return c.a.createElement(c.a.Fragment, null, e.children);
        if (!Q())
          return c.a.createElement(
            H.a,
            {
              type: Object(f.b)(p.GetStoreItemType()),
              id: t.id,
              fnHoverState: l,
              hoverClassName: e.className,
              strExtraParams: o,
            },
            e.children
          );
        const g = "hiding" == Y(),
          S = Object(_.b)(`${p.GetStorePageURL()}${o ? `?${o}` : ""}`, h),
          y = c.a.createElement(
            te,
            Object.assign(
              {},
              {
                info: t,
                strStoreUrl: S,
                elElementToAppend: r,
                bShowDemoButton: i,
                bShowDeckCompatibilityDialog: m,
                bHideBottomHalf: g,
                bHidePrice: n,
                bUseSubscriptionLayout: s,
                strSNR: b,
                nCreatorAccountID: d,
              }
            )
          );
        return c.a.createElement(
          ne,
          Object.assign({ hoverContent: y, strClickUrl: S }, u),
          e.children
        );
      }
      const ie = (e) => {
        const { fnClose: t, hoverProps: r } = e;
        return c.a.createElement(
          u.a,
          Object.assign({}, r),
          c.a.createElement(
            d.a,
            {
              timeout: 500,
              in: !0,
              appear: !0,
              classNames: { appearActive: W.a.Opening, enterDone: W.a.Open },
            },
            c.a.createElement(
              "div",
              {
                ref: (e) => (null == e ? void 0 : e.focus()),
                className: W.a.HoverContentTransition,
                tabIndex: -1,
                onMouseLeave: t,
                onBlur: (e) => {
                  (e.relatedTarget && k.e(e.currentTarget, e.relatedTarget)) ||
                    t();
                },
                onKeyDown: (e) => {
                  27 == e.keyCode &&
                    (t(), e.preventDefault(), e.stopPropagation());
                },
              },
              e.children
            )
          )
        );
      };
      class ne extends c.a.Component {
        constructor() {
          super(...arguments),
            (this.m_refHoverSourceDiv = c.a.createRef()),
            (this.m_bPopupShowPending = !1),
            (this.m_bHoversEnabled = !0);
        }
        ClosePopup() {
          this.m_fnHidePopup &&
            (this.m_fnHidePopup(),
            (this.m_fnHidePopup = null),
            window.removeEventListener("scroll", this.OnScroll));
        }
        OnUnhover() {
          this.m_bPopupShowPending &&
            (this.ClosePopup(), (this.m_bPopupShowPending = !1));
        }
        componentWillUnmount() {
          this.ClosePopup();
        }
        OnScroll() {
          Math.abs(window.scrollY - this.m_nScrollYAtHoverStart) > 50 &&
            this.ClosePopup();
        }
        OnHover(e) {
          return Object(a.a)(this, void 0, void 0, function* () {
            const e = this.props,
              {
                hoverContent: t,
                hoverProps: r,
                nDelayShowMs: i,
                strClickUrl: n,
                children: s,
              } = e,
              o =
                (Object(a.c)(e, [
                  "hoverContent",
                  "hoverProps",
                  "nDelayShowMs",
                  "strClickUrl",
                  "children",
                ]),
                this.m_refHoverSourceDiv.current);
            if (!o || !t || !this.m_bHoversEnabled) return;
            const l = o.clientWidth < 200 ? "8px" : "10px",
              d = Object.assign(
                Object.assign(
                  { direction: "overlay-center", bEnablePointerEvents: !0 },
                  r
                ),
                {
                  style: Object.assign(
                    {
                      zIndex: 98,
                      width: 1.15 * o.clientWidth,
                      fontSize: l,
                      minHeight: "hiding" == Y() ? void 0 : 300,
                      height:
                        "hiding" == Y()
                          ? 1.15 * o.clientWidth * (125 / 184)
                          : void 0,
                    },
                    null == r ? void 0 : r.style
                  ),
                  target: o,
                }
              ),
              m = "game-hover-" + Math.floor(1e8 * Math.random());
            (this.m_fnHidePopup = () =>
              ne.sm_embeddedElements.HideElement(o.ownerDocument, m)),
              (this.m_nScrollYAtHoverStart = window.scrollY),
              window.addEventListener("scroll", this.OnScroll);
            const u = null != i ? i : 150;
            (this.m_bPopupShowPending = !0),
              yield ne.sm_embeddedElements.ShowElementDelayed(
                o.ownerDocument,
                u,
                c.a.createElement(
                  ie,
                  { hoverProps: d, fnClose: this.ClosePopup },
                  c.a.createElement(B.a, null, t)
                ),
                m
              ),
              (this.m_bPopupShowPending = !1);
          });
        }
        render() {
          const e = this.props,
            {
              hoverContent: t,
              hoverProps: r,
              nDelayShowMs: i,
              strClickUrl: n,
              children: s,
            } = e,
            o = Object(a.c)(e, [
              "hoverContent",
              "hoverProps",
              "nDelayShowMs",
              "strClickUrl",
              "children",
            ]);
          let l;
          n &&
            (l = (e) => {
              (this.m_bHoversEnabled = !1), (window.location.href = n);
            });
          const d = !!P.d.IN_GAMEPADUI;
          return c.a.createElement(
            "div",
            Object.assign({ ref: this.m_refHoverSourceDiv }, o, {
              onMouseEnter: d ? null : this.OnHover,
              onMouseLeave: d ? null : this.OnUnhover,
              onFocus: this.OnHover,
              onBlur: this.OnUnhover,
              onClick: l,
              onTouchStart: (e) => {
                this.m_bHoversEnabled = !1;
              },
            }),
            c.a.createElement(B.a, null, s)
          );
        }
      }
      (ne.sm_embeddedElements = new m.a("item-hover-source-elements")),
        Object(a.b)([F.b], ne.prototype, "ClosePopup", null),
        Object(a.b)([F.b], ne.prototype, "OnUnhover", null),
        Object(a.b)([F.b], ne.prototype, "OnScroll", null),
        Object(a.b)([F.b], ne.prototype, "OnHover", null);
    },
    oGLD: function (e, t, r) {
      "use strict";
      r.d(t, "e", function () {
        return a;
      }),
        r.d(t, "d", function () {
          return i;
        }),
        r.d(t, "f", function () {
          return y;
        }),
        r.d(t, "b", function () {
          return B;
        }),
        r.d(t, "a", function () {
          return w;
        }),
        r.d(t, "g", function () {
          return C;
        }),
        r.d(t, "c", function () {
          return I;
        });
      var a,
        i,
        n = r("mrSG"),
        s = r("vDqi"),
        o = r.n(s),
        l = r("q1tI"),
        c = (r("Zdsb"), r("GpIp")),
        d = (r("XrGS"), r("FmLm")),
        m = (r("X/lQ"), r("Ys0h")),
        u = r("hAgw"),
        p = r("/cMS"),
        _ = r("upZW"),
        h = (r("sTxY"), r("ApMK")),
        b = r("TqgT"),
        g = r("3u1o"),
        S = r("hCpY"),
        f = r("/Q1a"),
        v = r("jALh");
      !(function (e) {
        (e[(e.k_EStatusString = 0)] = "k_EStatusString"),
          (e[(e.k_ECreator = 1)] = "k_ECreator"),
          (e[(e.k_ECurator = 2)] = "k_ECurator"),
          (e[(e.k_ETags = 3)] = "k_ETags"),
          (e[(e.k_EDisplayList = 4)] = "k_EDisplayList");
      })(a || (a = {})),
        (function (e) {
          (e[(e.k_EUnknown = 0)] = "k_EUnknown"),
            (e[(e.k_EPublisher = 1)] = "k_EPublisher"),
            (e[(e.k_EDeveloper = 2)] = "k_EDeveloper"),
            (e[(e.k_EPublisherDeveloper = 3)] = "k_EPublisherDeveloper"),
            (e[(e.k_EMacPortDeveloper = 4)] = "k_EMacPortDeveloper"),
            (e[(e.k_ELinuxPortDeveloper = 5)] = "k_ELinuxPortDeveloper"),
            (e[(e.k_EFranchise = 6)] = "k_EFranchise");
        })(i || (i = {}));
      function y(e, t, r, a) {
        let i = e;
        return (
          "category" === e && (i += "_" + t),
          "tags" === e && (i += "_" + r),
          a && (i += "_" + a),
          i
        );
      }
      class B {
        constructor() {
          (this.m_mapDefinition = new Map()),
            (this.m_mapTitle = new Map()),
            (this.m_mapMainCarousel = new Map()),
            (this.m_mapSections = new Map()),
            (this.m_mapPartnerTakeover = new Map()),
            (this.m_mapBroadcasts = new Map()),
            (this.m_mapPromiseForHub = new Map()),
            (this.m_searchPreferences = Object(f.h)(
              "search_preferences",
              "application_config"
            ));
          const e = Object(f.h)("ch_hub_data", "application_config");
          if (e) {
            const t = e.strHubType || void 0,
              r = "category" === t ? e.strCategory || "" : void 0,
              a = ("tags" === t && Number(e.nTagID)) || void 0;
            this.LoadContentHubDataFromConfig(t, r, a);
          }
        }
        BHasDefinition(e, t, r) {
          return this.m_mapDefinition.has(y(e, t, r));
        }
        BHasTitle(e, t, r) {
          return this.m_mapTitle.has(y(e, t, r));
        }
        BHasMainCarousel(e, t, r) {
          var a;
          return Boolean(
            null === (a = this.m_mapMainCarousel.get(y(e, t, r))) ||
              void 0 === a
              ? void 0
              : a.rgMainCapsule
          );
        }
        BHasSections(e, t, r, a) {
          var i;
          return Boolean(
            null === (i = this.m_mapSections.get(y(e, t, r, a))) || void 0 === i
              ? void 0
              : i.mapOtherCarousels
          );
        }
        BHasPartnerTakeover(e, t, r) {
          return this.m_mapPartnerTakeover.has(y(e, t, r));
        }
        BHasBroadcasts(e, t, r, a) {
          return this.m_mapBroadcasts.has(y(e, t, r, a));
        }
        GetDefinition(e, t, r) {
          return this.m_mapDefinition.get(y(e, t, r));
        }
        GetTitle(e, t, r) {
          return this.m_mapTitle.get(y(e, t, r));
        }
        GetMainCarousel(e, t, r) {
          return this.m_mapMainCarousel.get(y(e, t, r));
        }
        GetSections(e, t, r, a) {
          return this.m_mapSections.get(y(e, t, r, a));
        }
        GetPartnerTakeover(e, t, r) {
          return this.m_mapPartnerTakeover.get(y(e, t, r));
        }
        GetBroadcasts(e, t, r, a) {
          return this.m_mapBroadcasts.get(y(e, t, r, a));
        }
        LoadDefinition(e, t, r, a, i, s, o) {
          return Object(n.a)(this, void 0, void 0, function* () {
            const n = y(e, t, r);
            if (!this.BHasDefinition(e, t, r))
              return (
                this.m_mapPromiseForHub.has(n) ||
                  this.m_mapPromiseForHub.set(
                    n,
                    this.InternalLoadContentHubData(e, t, r, a, i, s, o)
                  ),
                this.m_mapPromiseForHub.get(n)
              );
          });
        }
        LoadTitle(e, t, r, a, i, s, o) {
          return Object(n.a)(this, void 0, void 0, function* () {
            const n = y(e, t, r);
            if (!this.BHasTitle(e, t, r))
              return (
                this.m_mapPromiseForHub.has(n) ||
                  this.m_mapPromiseForHub.set(
                    n,
                    this.InternalLoadContentHubData(e, t, r, a, i, s, o)
                  ),
                this.m_mapPromiseForHub.get(n)
              );
          });
        }
        LoadMainCarousel(e, t, r, a, i, s, o) {
          return Object(n.a)(this, void 0, void 0, function* () {
            const n = y(e, t, r);
            if (!this.BHasMainCarousel(e, t, r))
              return (
                this.m_mapPromiseForHub.has(n) ||
                  this.m_mapPromiseForHub.set(
                    n,
                    this.InternalLoadContentHubData(e, t, r, a, i, s, o)
                  ),
                this.m_mapPromiseForHub.get(n)
              );
          });
        }
        LoadSections(e, t, r, a, i, s, o, l, c) {
          return Object(n.a)(this, void 0, void 0, function* () {
            const n = y(e, t, r, a);
            if (!this.BHasSections(e, t, r, a))
              return (
                this.m_mapPromiseForHub.has(n) ||
                  this.m_mapPromiseForHub.set(
                    n,
                    this.InternalLoadContentHubData(e, t, r, s, o, l, c, a, i)
                  ),
                this.m_mapPromiseForHub.get(n)
              );
          });
        }
        LoadPartnerTakeover(e, t, r, a, i, s, o) {
          return Object(n.a)(this, void 0, void 0, function* () {
            const n = y(e, t, r);
            if (!this.BHasPartnerTakeover(e, t, r))
              return (
                this.m_mapPromiseForHub.has(n) ||
                  this.m_mapPromiseForHub.set(
                    n,
                    this.InternalLoadContentHubData(e, t, r, a, i, s, o)
                  ),
                this.m_mapPromiseForHub.get(n)
              );
          });
        }
        LoadBroadcasts(e, t, r, a, i, s, o, l, c) {
          return Object(n.a)(this, void 0, void 0, function* () {
            const n = y(e, t, r, a);
            if (!this.BHasBroadcasts(e, t, r, a))
              return (
                this.m_mapPromiseForHub.has(n) ||
                  this.m_mapPromiseForHub.set(
                    n,
                    this.InternalLoadContentHubData(e, t, r, s, o, l, c, a, i)
                  ),
                this.m_mapPromiseForHub.get(n)
              );
          });
        }
        BIsPartnerTakeoverActive(e, t, r) {
          var a;
          return (
            this.BHasPartnerTakeover(e, t, r) &&
            Boolean(
              null === (a = this.GetPartnerTakeover(e, t, r)) || void 0 === a
                ? void 0
                : a.strPageBackgroundURL
            )
          );
        }
        InternalLoadContentHubData(e, t, r, a, i, s, l, d, m) {
          var u, p;
          return Object(n.a)(this, void 0, void 0, function* () {
            const n = y(e, t, r),
              h = y(e, t, r, d);
            if (
              (this.LoadContentHubDataFromConfig(e, t, r, d),
              !(
                this.m_mapTitle.has(n) &&
                this.m_mapMainCarousel.has(n) &&
                this.m_mapSections.has(h) &&
                this.m_mapPartnerTakeover.has(n) &&
                this.m_mapBroadcasts.has(h)
              ))
            ) {
              const a = f.d.STORE_BASE_URL + "contenthub/ajaxgetcontenthubdata",
                c = {
                  hubtype: e,
                  category: t,
                  tagid: r,
                  prune_list_optin_name: i || void 0,
                  optin_tagid: s || void 0,
                  optin_prune_tagid: l || void 0,
                  tabuniqueid: d,
                  tabfilter: m,
                },
                _ = yield o.a.get(a, { params: c, withCredentials: !0 });
              if (
                1 ===
                (null === (u = null == _ ? void 0 : _.data) || void 0 === u
                  ? void 0
                  : u.success)
              ) {
                if (
                  (v.a.Get().SetHomeViewSetting(_.data.homeViewSetting),
                  v.a
                    .Get()
                    .SetHomeViewSettingOverride(_.data.homeViewSettingOverride),
                  (this.m_searchPreferences = _.data.searchPreferences),
                  !this.m_mapTitle.has(n))
                ) {
                  const e = {
                    strTitle: _.data.title,
                    strSubtitle: _.data.subtitle,
                  };
                  this.m_mapTitle.set(n, e);
                }
                if (!this.m_mapMainCarousel.has(n)) {
                  const e = { mapAppLists: new Map() };
                  this.SetAppListData(e.mapAppLists, _.data.mainListData),
                    this.m_mapMainCarousel.set(n, e);
                }
                if (!this.m_mapSections.has(h)) {
                  const e = {
                    mapAppLists: new Map(),
                    rgSections: _.data.sectionData,
                    mapSectionsID: new Map(),
                  };
                  this.SetAppListData(e.mapAppLists, _.data.sectionListData),
                    this.SetSectionData(e.mapSectionsID, _.data.sectionData),
                    this.m_mapSections.set(h, e);
                }
                this.m_mapPartnerTakeover.has(n) ||
                  this.m_mapPartnerTakeover.set(n, _.data.partnerTakeover),
                  this.m_mapBroadcasts.has(h) ||
                    this.m_mapBroadcasts.set(
                      h,
                      null === (p = _.data.broadcasts) || void 0 === p
                        ? void 0
                        : p.filtered
                    );
              }
            }
            const b = [];
            for (const e of Array.from(
              this.m_mapMainCarousel.get(n).mapAppLists.keys()
            ))
              for (const t of this.m_mapMainCarousel.get(n).mapAppLists.get(e)
                .apps)
                b.push(B.SaleCapsuleFromContentHubCapsule(t));
            for (const e of Array.from(
              this.m_mapSections.get(h).mapAppLists.keys()
            ))
              for (const t of this.m_mapSections.get(h).mapAppLists.get(e).apps)
                b.push(B.SaleCapsuleFromContentHubCapsule(t));
            yield Object(_.g)(b, c.e),
              this.ReplaceSingleAppPackagesWithApps(n, h),
              yield this.ApplyUserAndHomeViewFilters(n, h, a),
              yield this.UpdateRecommendationReasons(n);
          });
        }
        ApplyUserAndHomeViewFilters(e, t, r) {
          return Object(n.a)(this, void 0, void 0, function* () {
            const a = new c.a(),
              i = Object.assign(Object.assign({}, v.a.Get().GetHomeView()), {
                only_current_platform: !0,
                games_already_in_library: this.m_searchPreferences.hide_owned,
                enforce_minimum: !1,
              });
            yield this.BuildFeaturedCarouselContent(e, a, i, r),
              yield this.BuildAllOtherCarouselContent(t, a, i);
          });
        }
        ReplaceSingleAppPackagesWithApps(e, t) {
          this.m_mapMainCarousel.get(e).mapAppLists.forEach((t, r) => {
            this.m_mapMainCarousel
              .get(e)
              .mapAppLists.set(
                r,
                this.ReplaceSingleAppPackagesWithAppsForList(t)
              );
          }),
            this.m_mapSections.get(t).mapAppLists.forEach((e, r) => {
              this.m_mapSections
                .get(t)
                .mapAppLists.set(
                  r,
                  this.ReplaceSingleAppPackagesWithAppsForList(e)
                );
            });
        }
        ReplaceSingleAppPackagesWithAppsForList(e) {
          const t = e.apps.map((e) => {
            var t;
            if ("sub" === e.item_type) {
              const r = m.a.Get().GetPackage(e.id);
              if (
                1 ===
                (null === (t = null == r ? void 0 : r.GetIncludedAppIDs()) ||
                void 0 === t
                  ? void 0
                  : t.length)
              ) {
                return Object.assign(Object.assign({}, e), {
                  item_type: "app",
                  id: r.GetIncludedAppIDs()[0],
                });
              }
            }
            return e;
          });
          return Object.assign(Object.assign({}, e), { apps: t });
        }
        UpdateRecommendationReasons(e, t, r) {
          return Object(n.a)(this, void 0, void 0, function* () {
            const a = y(e, t, r),
              i = this.m_mapMainCarousel
                .get(a)
                .rgMainCapsule.map((a) =>
                  this.UpdateRecommendationReasonForCapsule(a, e, t, r)
                );
            yield Promise.all(i);
          });
        }
        BuildAllOtherCarouselContent(e, t, r) {
          var a;
          return Object(n.a)(this, void 0, void 0, function* () {
            this.m_mapSections.get(e).mapOtherCarousels = new Map();
            for (const i of this.m_mapSections.get(e).rgSections) {
              const n = this.m_mapSections.get(e).mapAppLists.get(i.id);
              if (
                (null === (a = null == n ? void 0 : n.apps) || void 0 === a
                  ? void 0
                  : a.length) > 0
              ) {
                let a = Object(c.b)(n.apps, r, t, 40, 4);
                this.m_mapSections.get(e).mapOtherCarousels.set(i.id, a);
              }
            }
          });
        }
        static ZipperMerge(e, t) {
          for (const t of e) Object(h.f)(t);
          const r = new Array();
          e.forEach((e) => r.push(0));
          const a = [];
          let i = 1;
          for (; a.length < 12 && i <= c.d; ) {
            let n = !1;
            for (let s = 0; s < e.length; ++s) {
              const o = e[s],
                l = r[s];
              if (l < o.length && o[l].priority <= i) {
                (n = !0), (r[s] += 1);
                const e = o[l];
                if (
                  (t.BHasStoreItemKey(e) || (a.push(e), t.AddStoreItemKey(e)),
                  a.length >= 12)
                )
                  break;
              }
            }
            n || (i += 1);
          }
          return a;
        }
        BuildFeaturedCarouselContent(e, t, r, a) {
          var i, s;
          return Object(n.a)(this, void 0, void 0, function* () {
            let n = Object(c.b)(
              null ===
                (i = this.m_mapMainCarousel
                  .get(e)
                  .mapAppLists.get("featured")) || void 0 === i
                ? void 0
                : i.apps,
              r,
              t,
              12,
              4
            );
            (n =
              null == n
                ? void 0
                : n.filter(
                    (e) => "bundle" !== e.item_type && "sub" !== e.item_type
                  )),
              (this.m_mapMainCarousel.get(e).rgMainCapsule = B.ZipperMerge(
                [n],
                t
              ));
            let o = [
              "featured_recommended",
              "top_sellers",
              "specials",
              "concurrent",
            ];
            o = o.filter((t) =>
              this.m_mapMainCarousel.get(e).mapAppLists.has(t)
            );
            const l = o.map((t) =>
              this.m_mapMainCarousel.get(e).mapAppLists.get(t)
            );
            for (const e of l)
              e &&
                ((e.apps =
                  null === (s = e.apps) || void 0 === s
                    ? void 0
                    : s.filter(
                        (e) => "bundle" !== e.item_type && "sub" !== e.item_type
                      )),
                (e.apps = Object(c.b)(e.apps || [], r, t, 12, 4)));
            if (
              ((this.m_mapMainCarousel.get(e).rgMainCapsule =
                this.m_mapMainCarousel.get(e).rgMainCapsule.concat(
                  B.ZipperMerge(
                    l.map((e) => e.apps),
                    t
                  )
                )),
              Object(h.f)(this.m_mapMainCarousel.get(e).rgMainCapsule),
              a)
            ) {
              const t = [],
                r = [];
              for (const a of this.m_mapMainCarousel.get(e).rgMainCapsule)
                Object(_.c)(B.SaleCapsuleFromContentHubCapsule(a))
                  ? t.push(a)
                  : r.push(a);
              this.m_mapMainCarousel.get(e).rgMainCapsule = t.concat(r);
            }
          });
        }
        UpdateRecommendationReasonForCapsule(e, t, r, s) {
          return Object(n.a)(this, void 0, void 0, function* () {
            const n = y(t, r, s),
              o = yield Object(_.g)(
                [B.SaleCapsuleFromContentHubCapsule(e)],
                c.e
              ),
              l = m.a.Get().GetStoreItem(e.id, Object(u.d)(e.item_type)),
              h = null == l ? void 0 : l.GetCapsuleHeadline();
            if (h)
              return void (e.recommendation = {
                reason: a.k_EStatusString,
                statusString: h,
              });
            let b = new Array(),
              g = "game";
            for (const e of o) {
              const t = m.a.Get().GetApp(e);
              if (t) {
                b = b.concat(t.GetTagIDs());
                const e = Object(u.a)(t.GetStoreItemType(), t.GetAppType());
                ("software" !== e && "video" !== e) || (g = e);
              }
            }
            yield p.a.Get().QueueMultipleTagLoads(b);
            let S = b
              .map((e) => p.a.Get().GetTagID(e))
              .filter(Boolean)
              .map((e) => ({ tagid: e.tagid, name: e.name }));
            const f = [];
            for (const e of S) {
              if (f.length > B.k_nMaxMatchingRecommendedTags) break;
              ("tags" === t && s === e.tagid) ||
                (d.a.Get().GetRecommendedTags().has(e.tagid) && f.push(e));
            }
            if (f.length < B.k_nMaxMatchingRecommendedTags) {
              const t = (function (e) {
                const t = new Map(),
                  r = e.GetAllDeveloperCreatorClans(),
                  a = e.GetAllPublisherCreatorClans(),
                  n = e.GetAllFranchiseCreatorClans();
                for (const e of n) t.set(e, i.k_EFranchise);
                for (const e of a) t.set(e, i.k_EPublisher);
                for (const e of r) t.set(e, i.k_EDeveloper);
                return t;
              })(l);
              if (t)
                for (const r of t.keys())
                  if (d.a.Get().BIsFollowingCurator(r))
                    return void (e.recommendation = {
                      reason: a.k_ECreator,
                      creator: { creator: r, relationship: t.get(r) },
                    });
              if (
                "app" === e.item_type &&
                e.id &&
                d.a.Get().BIsAppRecommendedBySomeCurator(e.id)
              ) {
                const t = d.a.Get().GetRecommendingCuratorsForApp(e.id);
                return void (e.recommendation = {
                  reason: a.k_ECurator,
                  curator: t[Math.floor(Math.random() * t.length)],
                });
              }
            }
            if (f.length > 0)
              return void (e.recommendation = {
                reason: a.k_ETags,
                tags: f,
                appType: g,
              });
            let v = [
              "top_sellers",
              "popular_new",
              "specials",
              "concurrent",
              "featured",
            ];
            v = v.filter((e) =>
              this.m_mapMainCarousel.get(n).mapAppLists.has(e)
            );
            const w = new Map();
            v.forEach((e) => {
              w.set(
                e,
                this.m_mapMainCarousel.get(n).mapAppLists.get(e).apps || []
              );
            });
            for (const t of v)
              for (const r of w.get(t))
                if (e.item_type === r.item_type && e.id === r.id)
                  return void (e.recommendation = {
                    reason: a.k_EDisplayList,
                    displayListName: t,
                  });
            e.recommendation = { reason: a.k_EStatusString, statusString: "" };
          });
        }
        static SaleCapsuleFromContentHubCapsule(e) {
          let t,
            r = e.id;
          return (
            (t =
              "bundle" === e.item_type
                ? "bundle"
                : "sub" === e.item_type
                ? "sub"
                : "game"),
            { id: r, type: t }
          );
        }
        static Get() {
          return (
            B.s_globalSingletonStore ||
              ((B.s_globalSingletonStore = new B()),
              "dev" == f.d.WEB_UNIVERSE &&
                (window.g_ContentHubStore = B.s_globalSingletonStore)),
            B.s_globalSingletonStore
          );
        }
        LoadContentHubDataFromConfig(e, t, r, a) {
          const i = y(e, t, r),
            n = null != a ? y(e, t, r, a) : i,
            s = "_" + (null != a ? a : "*");
          if (!this.m_mapDefinition.has(i)) {
            const e = Object(f.h)("ch_static_data", "application_config");
            e && this.m_mapDefinition.set(i, e);
          }
          if (!this.m_mapTitle.has(i)) {
            const e = Object(f.h)("ch_title_data", "application_config");
            e && this.m_mapTitle.set(i, e);
          }
          if (!this.m_mapMainCarousel.has(i)) {
            const e = Object(f.h)("ch_main_list_data", "application_config");
            if (this.ValidateAppListData(e)) {
              const t = { mapAppLists: new Map() };
              this.SetAppListData(t.mapAppLists, e),
                this.m_mapMainCarousel.set(i, t);
            }
          }
          if (!this.m_mapSections.has(n)) {
            const e = Object(f.h)(
                "ch_section_list_data" + s,
                "application_config"
              ),
              t = Object(f.h)("ch_section_data" + s, "application_config");
            if (this.ValidateAppListData(e) && this.ValidateSectionData(t)) {
              const r = {
                mapAppLists: new Map(),
                rgSections: t,
                mapSectionsID: new Map(),
              };
              this.SetAppListData(r.mapAppLists, e),
                this.SetSectionData(r.mapSectionsID, t),
                this.m_mapSections.set(n, r);
            }
          }
          if (!this.m_mapPartnerTakeover.has(i)) {
            const e = Object(f.h)(
              "ch_partner_takeover_data",
              "application_config"
            );
            e && this.m_mapPartnerTakeover.set(i, e);
          }
          if (!this.m_mapBroadcasts.has(n)) {
            const e = Object(f.h)(
              "ch_broadcasts_data" + s,
              "application_config"
            );
            e && this.m_mapBroadcasts.set(n, e);
          }
        }
        ValidateSectionData(e) {
          const t = e;
          return (
            !!(
              t &&
              Array.isArray(t) &&
              t.length > 0 &&
              "object" == typeof t[0]
            ) &&
            "string" == typeof t[0].title &&
            "string" == typeof t[0].id &&
            "string" == typeof t[0].type
          );
        }
        SetSectionData(e, t) {
          t.forEach((t) => e.set(t.id, t));
        }
        ValidateAppListData(e) {
          const t = e;
          return (
            !!(
              t &&
              Array.isArray(t) &&
              t.length > 0 &&
              "object" == typeof t[0]
            ) &&
            "string" == typeof t[0].id &&
            Array.isArray(t[0].apps)
          );
        }
        SetAppListData(e, t) {
          t.forEach((t) => {
            e.set(t.id, t);
          });
        }
      }
      B.k_nMaxMatchingRecommendedTags = 4;
      class w {
        constructor() {
          (this.m_reduceMotionCallbacks = new g.a()),
            (this.m_bReduceMotion = !0);
        }
        GetReduceMotion() {
          return this.m_bReduceMotion;
        }
        SetReduceMotion(e) {
          window.localStorage.setItem(
            "contenthub_reducemotion",
            e ? "true" : "false"
          ),
            (this.m_bReduceMotion = e),
            this.m_reduceMotionCallbacks.Dispatch(this.m_bReduceMotion);
        }
        GetReduceMotionCallbackList() {
          return this.m_reduceMotionCallbacks;
        }
        static Get() {
          return (
            w.s_singleton ||
              ((w.s_singleton = new w()),
              "dev" == f.d.WEB_UNIVERSE &&
                (window.g_ContentHubSettingsStore = w.s_singleton)),
            w.s_singleton
          );
        }
      }
      function C() {
        const [e, t] = Object(l.useState)(w.Get().GetReduceMotion());
        return Object(S.e)(w.Get().GetReduceMotionCallbackList(), t), e;
      }
      class I {
        constructor() {
          (this.m_mapDiscountRangeForVanityURL = new Map()),
            (this.m_mapPromiseForVanityURL = new Map());
        }
        BHasDiscountRange(e) {
          return this.m_mapDiscountRangeForVanityURL.has(e);
        }
        GetDiscountRange(e) {
          return this.m_mapDiscountRangeForVanityURL.get(e);
        }
        LoadDiscountRange(e) {
          return Object(n.a)(this, void 0, void 0, function* () {
            return this.BHasDiscountRange(e)
              ? this.GetDiscountRange(e)
              : (this.m_mapPromiseForVanityURL.has(e) ||
                  this.m_mapPromiseForVanityURL.set(
                    e,
                    this.InternalLoadDiscountRange(e)
                  ),
                this.m_mapPromiseForVanityURL.get(e));
          });
        }
        InternalLoadDiscountRange(e) {
          var t;
          return Object(n.a)(this, void 0, void 0, function* () {
            const r =
                f.d.STORE_BASE_URL +
                "contenthub/ajaxgetsalepagediscountsummary",
              a = { vanity_url: e },
              i = {};
            let n = null;
            try {
              const s = yield o.a.get(r, { params: a, withCredentials: !0 });
              if (
                1 ===
                (null === (t = null == s ? void 0 : s.data) || void 0 === t
                  ? void 0
                  : t.success)
              )
                return (
                  (i.discount_min = s.data.discount_min),
                  (i.discount_max = s.data.discount_max),
                  this.m_mapDiscountRangeForVanityURL.set(e, i),
                  i
                );
              n = Object(b.a)(s);
            } catch (e) {
              n = Object(b.a)(e);
            }
            return (
              console.error(
                "CSalePageDiscountSummaryStore.InternalLoadDiscountRange failed: " +
                  (null == n ? void 0 : n.strErrorMsg),
                n
              ),
              i
            );
          });
        }
        static Get() {
          return (
            I.s_singleton ||
              ((I.s_singleton = new I()),
              "dev" === f.d.WEB_UNIVERSE &&
                (window.g_SalePageDiscountSummaryStore = I.s_singleton)),
            I.s_singleton
          );
        }
      }
    },
    poS6: function (e, t, r) {
      "use strict";
      r.d(t, "b", function () {
        return l;
      }),
        r.d(t, "a", function () {
          return c;
        });
      var a = r("mrSG"),
        i = r("q1tI"),
        n = r("hCpY"),
        s = r("vhlw"),
        o = r("GXif");
      class l extends i.Component {
        constructor(e) {
          super(e), (this.state = { index: 0 });
        }
        componentDidUpdate(e) {
          e.srcs.length != this.props.srcs.length &&
            this.setState({ index: 0 });
        }
        OnError() {
          this.props.onImageError &&
            this.props.onImageError(this.props.srcs[this.state.index]),
            this.state.index + 1 < this.props.srcs.length &&
              this.setState({ index: this.state.index + 1 });
        }
        render() {
          const {
            className: e,
            srcs: t,
            lazyLoad: r,
            width: a,
            height: n,
            alt: s,
            crossOrigin: o,
          } = this.props;
          return i.createElement("img", {
            className: e,
            src: t[this.state.index],
            crossOrigin: o,
            onError: this.OnError,
            loading: r ? "lazy" : void 0,
            width: a,
            height: n,
            alt: s,
          });
        }
      }
      Object(a.b)([n.b], l.prototype, "OnError", null);
      class c extends i.Component {
        constructor() {
          super(...arguments), (this.state = { error: !1 });
        }
        OnError() {
          this.setState({ error: !0 });
        }
        render() {
          const {
            className: e,
            src: t,
            lazyLoad: r,
            width: a,
            height: n,
            alt: l,
            crossOrigin: c,
          } = this.props;
          return this.state.error
            ? i.createElement(
                "div",
                { className: s.ErrorDiv },
                i.createElement(
                  "p",
                  null,
                  Object(o.g)("#Image_ErrorTitle", this.props.src)
                ),
                i.createElement(
                  "ul",
                  null,
                  i.createElement("li", null, Object(o.g)("#Image_Error_msg1")),
                  i.createElement("li", null, Object(o.g)("#Image_Error_msg2")),
                  i.createElement("li", null, Object(o.g)("#Image_Error_msg3"))
                ),
                i.createElement(
                  "p",
                  null,
                  Object(o.g)("#Image_Error_suggestion")
                )
              )
            : i.createElement("img", {
                className: e,
                src: t,
                onError: this.OnError,
                crossOrigin: c,
                loading: r ? "lazy" : void 0,
                width: a,
                height: n,
                alt: l,
              });
        }
      }
      Object(a.b)([n.b], c.prototype, "OnError", null);
    },
    q9Z8: function (e) {
      e.exports = JSON.parse(
        '{"store.steampowered.com":1,"steamtv":2200,"steamclient":5000,"library":5100,"friendsui":5200,"friendcontextmenu":5201,"topsellers":7000,"steamcharts":7001,"weeklytopsellers":7002,"topchartlist":7003,"overview":7004,"mostplayed":7005,"salecreatorhome":100700,"saleitembrowse":100701,"salefacetbrowse":100702,"salesection":100703,"saletabsection":100704,"salebroadcast":100705,"salecuratorrec":100706,"saleeventsched":100707,"salesubscription":100708,"saleitemsearch":100709,"salesmartwishlist":100710,"salesmartir":100711,"salesmartdlc":100712,"salesmarttagrec":100713,"salebrowsetopwishlisted":100714,"salebrowsetrendingwishlisted":100715,"salebrowsepopularcomingsoon":100716,"salebrowsemostplayeddemo":100717,"salebrowsedailyactiveuserdemo":100718,"salebrowseplayednowdemo":100719,"salebrowserecentlyreleased":100720,"salebrowsepopularpurchased":100721,"salebrowsepopularpurchaseddiscounted":100722,"salebrowsediscounted":100723,"salebrowseprice":100724,"salebrowsenewandtrending":100725,"salebrowsetopsellers":100726,"salebrowsetoprated":100727,"spotlight":40,"daily-deal":43,"promo-takeover":118,"live-broadcast":143,"large-cluster":201}'
      );
    },
    qpfI: function (e, t, r) {
      "use strict";
      r.d(t, "a", function () {
        return m;
      });
      var a = r("q1tI"),
        i = r.n(a),
        n = (r("XrGS"), r("hAgw")),
        s = r("RrtU"),
        o = r("e356"),
        l = r("GbHM"),
        c = r("zy5s"),
        d = r.n(c);
      function m(e) {
        var t;
        const { item: r, strClassName: a } = e,
          [c] = Object(s.a)(
            null == r ? void 0 : r.id,
            Object(n.d)(null == r ? void 0 : r.type),
            { include_platforms: !0 }
          );
        if (!c) return null;
        const m = c.GetPlatforms();
        return i.a.createElement(
          "span",
          { className: Object(l.a)(d.a.CapsulePlatform, a) },
          m.windows && i.a.createElement(o.Db, null),
          m.mac && i.a.createElement(o.b, null),
          m.linux && i.a.createElement(o.ob, null),
          (null === (t = m.vr_support) || void 0 === t ? void 0 : t.vrhmd) &&
            i.a.createElement(o.zb, null)
        );
      }
    },
    uLSr: function (e, t, r) {
      "use strict";
      var a = r("hRO2");
      r("3dpo");
      a.Message;
      var i;
      !(function (e) {
        e.ReportProductImpressionsFromClient = function (e, t) {
          return e.SendNotification(
            "ExperimentService.ReportProductImpressionsFromClient#1",
            t,
            { ePrivilege: 1 }
          );
        };
      })(i || (i = {}));
    },
    upZW: function (e, t, r) {
      "use strict";
      r.d(t, "d", function () {
        return m;
      }),
        r.d(t, "f", function () {
          return u;
        }),
        r.d(t, "c", function () {
          return p;
        }),
        r.d(t, "g", function () {
          return _;
        }),
        r.d(t, "h", function () {
          return h;
        }),
        r.d(t, "i", function () {
          return b;
        }),
        r.d(t, "e", function () {
          return g;
        }),
        r.d(t, "a", function () {
          return S;
        }),
        r.d(t, "b", function () {
          return f;
        });
      var a = r("mrSG"),
        i = r("GpIp"),
        n = r("hAgw"),
        s = r("Zdsb"),
        o = (r("XrGS"), r("yfxr"), r("FmLm")),
        l = (r("X/lQ"), r("Ys0h")),
        c = r("/cMS"),
        d = r("/Q1a");
      function m(e) {
        return l.a.Get().BIsStoreItemMissing(e.id, Object(n.d)(e.type));
      }
      function u(e, t, r) {
        const a = new Array();
        return (
          null == e || e.forEach((e) => a.push({ id: e, type: "game" })),
          null == t || t.forEach((e) => a.push({ id: e, type: "sub" })),
          null == r || r.forEach((e) => a.push({ id: e, type: "bundle" })),
          a
        );
      }
      function p(e) {
        var t;
        const r = l.a.Get().GetStoreItem(e.id, Object(n.d)(e.type));
        return (
          (null === (t = null == r ? void 0 : r.GetBestPurchaseOption()) ||
          void 0 === t
            ? void 0
            : t.discount_pct) > 0
        );
      }
      function _(e, t, r) {
        return Object(a.a)(this, void 0, void 0, function* () {
          if (!e || 0 == e.length) return [];
          const a = e.filter((e) => Object(s.c)(e.type)).map((e) => e.id),
            i = e.filter((e) => "sub" === e.type).map((e) => e.id),
            n = e.filter((e) => "bundle" === e.type).map((e) => e.id);
          yield Promise.all([
            l.a.Get().QueueMultipleAppRequests(a, t),
            l.a.Get().QueueMultiplePackageRequests(i, t),
            l.a.Get().QueueMultipleBundleRequests(n, t),
          ]);
          const o = new Set();
          if (
            (null == n ||
              n.map((e) => {
                const t = l.a.Get().GetBundle(e);
                null == t || t.GetIncludedAppIDs().forEach((e) => o.add(e));
              }),
            null == i ||
              i.map((e) => {
                const t = l.a.Get().GetPackage(e);
                null == t || t.GetIncludedAppIDs().forEach((e) => o.add(e));
              }),
            yield l.a.Get().QueueMultipleAppRequests(Array.from(o), t),
            a.forEach((e) => o.add(e)),
            r)
          ) {
            const e = Array.from(o)
              .map((e) => {
                const t = l.a.Get().GetApp(e);
                return (null == t ? void 0 : t.GetParentAppID())
                  ? (o.add(t.GetParentAppID()), t.GetParentAppID())
                  : null;
              })
              .filter(Boolean);
            yield l.a.Get().QueueMultipleAppRequests(e, t);
          }
          return Array.from(o).filter((e) => {
            const t = l.a.Get().GetApp(e);
            return t && !t.GetParentAppID();
          });
        });
      }
      function h(e) {
        return Object(a.a)(this, void 0, void 0, function* () {
          const t = new Set();
          e
            .map((e) => l.a.Get().GetApp(e))
            .filter(Boolean)
            .forEach((e) => {
              e.GetTags().forEach((e) => t.add(e.tagid));
            }),
            yield c.a.Get().QueueMultipleTagLoads(Array.from(t));
        });
      }
      const b = { include_tag_count: 20, include_basic_info: !0 };
      function g(e) {
        const t = o.a.Get();
        return (
          !e ||
          (0 == e.GetStoreItemType() &&
            (t.BIsGameIgnored(e.GetAppID()) ||
              t.BIsGameIgnored(e.GetParentAppID()))) ||
          t.BExcludesContentDescriptor(e.GetContentDescriptorIDs()) ||
          t.BExcludeTagIDs(e.GetTagIDs()) ||
          e.GetAllCreatorClanIDs().some((e) => t.BIsIgnoringCurator(e))
        );
      }
      function S(e, t, r, s) {
        return Object(a.a)(this, void 0, void 0, function* () {
          let a = 0,
            o = 0;
          const c = [];
          yield _(e, i.e, t);
          for (const i of e) {
            const e = l.a.Get().GetStoreItem(i.id, Object(n.d)(i.type));
            if (!e) {
              a++;
              continue;
            }
            const d = e
              .GetIncludedAppIDs()
              .map((e) => l.a.Get().GetApp(e))
              .filter(Boolean);
            if ((d.push(e), t)) {
              const e = new Set(
                  d.map((e) => e.GetParentAppID()).filter(Boolean)
                ),
                t = Array.from(e)
                  .map((e) => l.a.Get().GetApp(e))
                  .filter(Boolean);
              t && d.push(...t);
            }
            d.some(s || g) ? (o++, r && r.push(i)) : c.push(i);
          }
          return (
            "dev" === d.d.WEB_UNIVERSE &&
              0 === c.length &&
              console.log(
                "ApplyStorePreferenceFilters: " +
                  a +
                  " failed to load, " +
                  o +
                  " hidden by user filter."
              ),
            c
          );
        });
      }
      function f(e, t, r, i, s, c, d) {
        return Object(a.a)(this, void 0, void 0, function* () {
          let a = yield S(
            e,
            t,
            d,
            s
              ? (e) =>
                  !e ||
                  o.a
                    .Get()
                    .BExcludesContentDescriptor(e.GetContentDescriptorIDs()) ||
                  o.a.Get().BExcludeTagIDs(e.GetTagIDs())
              : g
          );
          const m = [];
          for (const e of a) {
            const t = l.a.Get().GetStoreItem(e.id, Object(n.d)(e.type));
            if (!t) continue;
            const a = null == t ? void 0 : t.GetIncludedAppIDsOrSelf();
            let s = !1;
            r && (s = s || a.every((e) => o.a.Get().BIsGameOwned(e))),
              i && (s = s || a.every((e) => o.a.Get().BIsGameWishlisted(e))),
              c && (s = s || a.every((e) => o.a.Get().BIsGameIgnored(e))),
              s ? d && d.push(e) : m.push(e);
          }
          return m;
        });
      }
    },
    vUNY: function (e, t, r) {
      "use strict";
      r.d(t, "c", function () {
        return G;
      }),
        r.d(t, "b", function () {
          return D;
        }),
        r.d(t, "a", function () {
          return A;
        });
      var a = r("mrSG"),
        i = r("TyAF"),
        n = r("q1tI"),
        s = (r("Zdsb"), r("jrt+"), r("oleE")),
        o = r("10xk"),
        l = r("FmLm"),
        c = r("6ese"),
        d = r("MKRT"),
        m = r("ue1x"),
        u = r("AM5O"),
        p = (r("sTxY"), r("GbHM")),
        _ = r("GXif"),
        h = r("TqgT"),
        b = r("/Q1a"),
        g = r("thkD"),
        S = r("jIgc"),
        f = r("kWcV"),
        v = r("9vnD"),
        y = r("iCjI"),
        B = r("+VGL"),
        w = r("tXj3"),
        C = r("fsrB");
      const I = Object(i.a)((e) => {
        const { closeModal: t } = e;
        return n.createElement(g.e, {
          strTitle: Object(_.g)(
            "#EventCalendar_GameSource_UnhideCuratorsDialog_Title"
          ),
          strDescription: Object(_.g)(
            "#EventCalendar_GameSource_UnhideCuratorsDialog_Description"
          ),
          strOKButtonText: Object(_.g)(
            "#EventCalendar_GameSource_UnhideCuratorsDialog_OKButton"
          ),
          strCancelButtonText: Object(_.g)(
            "#EventCalendar_GameSource_UnhideCuratorsDialog_CancelButton"
          ),
          onOK: () => {
            Object(c.b)().m_visibilityStore.SetGameSourceAllowed(
              d.c.k_ECurator,
              !0
            ),
              t();
          },
          onCancel: () => {
            Object(
              c.b
            )().m_visibilityStore.SetCuratorUnhideOnFollowDialogDismissed(!0),
              t();
          },
        });
      });
      function E(e) {
        e ||
          (Object(c.a)() &&
            (Object(
              c.b
            )().m_visibilityStore.BCuratorUnhideOnFollowDialogDismissed() ||
              Object(c.b)().m_visibilityStore.BIsGameSourceAllowed(
                d.c.k_ECurator
              ) ||
              Object(S.d)(n.createElement(I, null), window)));
      }
      function O() {
        return (
          !!u.a.Get().BIsUserLoggedIn() ||
          (Object(S.d)(
            n.createElement(g.e, {
              strTitle: Object(_.g)("#EventDisplay_Share_NotLoggedIn"),
              strDescription: Object(_.g)(
                "#EventDisplay_Share_NotLoggedIn_Description"
              ),
              strOKButtonText: Object(_.g)("#MobileLogin_SignIn"),
              onOK: () => Object(w.a)(),
            }),
            window
          ),
          !1)
        );
      }
      function T(e) {
        const t = s.a.InitFromClanID(e),
          r = u.a.Get().GetPartnerEventPermissions(t);
        return (
          !r ||
          !r.limited_user ||
          (Object(S.d)(n.createElement(y.a, null), window), !1)
        );
      }
      function G(e) {
        return Object(a.a)(this, void 0, void 0, function* () {
          if (O() && T(e)) {
            let t = s.a.InitFromClanID(e),
              r = l.a.Get().BIsFollowingCurator(t);
            yield l.a.Get().UpdateFollowOrIgnoreCurator(t, !0, !r), E(r);
          }
        });
      }
      const R = (e) => {
          const {
            className: t,
            bIgnored: r,
            bApplyingFollowing: a,
            bFollowing: i,
            onFollowClick: s,
          } = e;
          return m.a.bIsFollowingEnabled
            ? n.createElement(
                C.e,
                {
                  className: Object(p.a)(
                    B.Button,
                    v.FollowButton,
                    t,
                    i ? "Followed" : ""
                  ),
                  onClick: s,
                },
                a && n.createElement(f.a, { size: "small" }),
                !a &&
                  (i || r) &&
                  n.createElement("img", {
                    style: { height: "16px" },
                    src:
                      b.d.STORE_CDN_URL +
                      "public/images/v6/ico/ico_selected.png",
                  }),
                n.createElement(
                  "div",
                  { className: v.FollowBtnText },
                  !a &&
                    (i
                      ? Object(_.g)("#Button_Followed")
                      : r
                      ? Object(_.g)("#Button_Ignored")
                      : Object(_.g)("#Button_Follow"))
                )
              )
            : null;
        },
        D = (e) => {
          const [t, r] = n.useState(!1),
            { clanAccountID: a, className: i } = e,
            c = s.a.InitFromClanID(a),
            d = l.a.Get().BIsFollowingCurator(c),
            m = !d && l.a.Get().BIsIgnoringCurator(c);
          return n.createElement(R, {
            className: i,
            bIgnored: m,
            bFollowing: d,
            bApplyingFollowing: t,
            onFollowClick: () => {
              const { clanAccountID: t } = e;
              O() &&
                T(t) &&
                (r(!0),
                (() => {
                  const { clanAccountID: t, creatorID: a } = e,
                    i = s.a.InitFromClanID(t),
                    n = l.a.Get().BIsFollowingCurator(i),
                    c = !n && l.a.Get().BIsIgnoringCurator(i);
                  l.a
                    .Get()
                    .UpdateFollowOrIgnoreCurator(i, !c, !(c || n))
                    .then((e) => {
                      if (a) {
                        let e = o.a.GetCreatorHomeByID(a);
                        c || e.AdjustFollower(n ? -1 : 1);
                      }
                      r(!1);
                    })
                    .then(() => {
                      E(n);
                    })
                    .catch((e) => {
                      r(!1);
                      let t = Object(h.a)(e);
                      console.error(
                        "CuratorFollowButton hit error: " + t.strErrorMsg,
                        t
                      );
                    });
                })());
            },
          });
        },
        A = (e) => {
          const [t, r] = n.useState(!1),
            { appid: a, className: i } = e,
            s = l.a.Get().BFollowsApp(a),
            o = !s && l.a.Get().BIsGameIgnored(a);
          return n.createElement(R, {
            className: i,
            bIgnored: o,
            bFollowing: s,
            bApplyingFollowing: t,
            onFollowClick: () => {
              O() &&
                (r(!0),
                (() => {
                  const { appid: t } = e,
                    a = l.a.Get().BFollowsApp(t),
                    i = !a && l.a.Get().BIsGameIgnored(t);
                  l.a
                    .Get()
                    .UpdateFollowingApp(t, !(i || a))
                    .then(() => {
                      r(!1);
                    })
                    .catch((e) => {
                      r(!1);
                      const t = Object(h.a)(e);
                      console.error(
                        "AppFollowButton hit error: " + t.strErrorMsg,
                        t
                      );
                    });
                })());
            },
          });
        };
    },
    vhlw: function (e, t, r) {
      e.exports = { ErrorDiv: "image_ErrorDiv_vIfbI" };
    },
    vx0u: function (e, t, r) {
      "use strict";
      r.d(t, "a", function () {
        return l;
      });
      r("nDaX");
      var a = r("lfGQ"),
        i = (r("X/lQ"), r("1mk1")),
        n = r("f5iL"),
        s = r("GXif"),
        o = r("/Q1a");
      function l(e, t, r, l) {
        if (!o.d.IN_GAMEPADUI) return;
        if (!Object(i.c)(e.GetStoreItemType()))
          return void Object(n.a)(
            !1,
            "StoreItemWidgetSalePageAction: unexpected type: " +
              e.GetStoreItemType()
          );
        const c = Object(a.b)(`${e.GetStorePageURL()}${r ? `?${r}` : ""}`, t);
        return {
          onOKButton: () => {
            l ? l(void 0) : (window.location.href = c);
          },
          onOKActionDescription: Object(s.g)("#Sale_Gamepad_Action_Select"),
        };
      }
    },
    wQEA: function (e, t, r) {
      "use strict";
      r.d(t, "a", function () {
        return h;
      });
      var a = r("mrSG"),
        i = r("q1tI"),
        n = (r("Zdsb"), r("Ys0h")),
        s = r("7ast"),
        o = r("thkD"),
        l = r("jIgc"),
        c = r("e356"),
        d = r("GbHM"),
        m = r("GXif"),
        u = r("/Q1a"),
        p = r("jU/+"),
        _ = r.n(p);
      function h(e) {
        return Object(a.a)(this, void 0, void 0, function* () {
          u.d.IN_CLIENT
            ? (console.log(`Running game ${e} locally.`),
              (window.location.href = "steam://run/" + e))
            : (console.log(
                `Cannot identify local client. Prompting user to launch ${e}.`
              ),
              (function (e) {
                Object(a.a)(this, void 0, void 0, function* () {
                  yield n.a.Get().QueueAppRequest(e, {});
                  const t = n.a.Get().GetApp(e),
                    r = (null == t ? void 0 : t.GetName()) || "";
                  console.log("prompting for", r);
                  const a = u.d.STORE_BASE_URL + "about/";
                  Object(l.b)(
                    i.createElement(b, {
                      appid: e,
                      strGameName: r,
                      strDownloadSteamUrl: a,
                    }),
                    window
                  );
                });
              })(e));
        });
      }
      const b = (e) => {
        const t = () => e.closeModal && e.closeModal();
        return i.createElement(
          o.i,
          { onEscKeypress: t, className: _.a.GotSteamDialog },
          i.createElement(
            s.g,
            null,
            i.createElement(
              s.y,
              null,
              " ",
              Object(m.g)("#GotSteam_Title"),
              " "
            ),
            i.createElement(
              s.c,
              null,
              i.createElement(
                s.d,
                null,
                Object(m.p)(
                  "#GotSteam_PromptWithDownloadLink",
                  i.createElement(
                    "a",
                    {
                      href: e.strDownloadSteamUrl,
                      className: _.a.DownloadSteamUrl,
                    },
                    Object(m.g)("#GotSteam_DownloadLinkText")
                  ),
                  i.createElement(
                    "span",
                    { className: _.a.GameName },
                    e.strGameName
                  )
                )
              ),
              i.createElement(
                "div",
                { className: _.a.Buttons },
                i.createElement(
                  "a",
                  {
                    href: "steam://run/" + e.appid,
                    onClick: t,
                    className: Object(d.a)(_.a.Button, _.a.LeftButton),
                  },
                  i.createElement(
                    "div",
                    { className: _.a.AnswerText },
                    " ",
                    Object(m.g)("#GotSteam_Yes"),
                    " "
                  ),
                  i.createElement(
                    "div",
                    { className: _.a.ActionText },
                    " ",
                    Object(m.g)("#GotSteam_Yes_Play"),
                    " "
                  )
                ),
                i.createElement(
                  "a",
                  {
                    href: e.strDownloadSteamUrl,
                    onClick: t,
                    className: _.a.Button,
                  },
                  i.createElement(
                    "div",
                    { className: _.a.AnswerText },
                    " ",
                    Object(m.g)("#GotSteam_No"),
                    " "
                  ),
                  i.createElement(
                    "div",
                    { className: _.a.ActionText },
                    " ",
                    Object(m.g)("#GotSteam_No_Download"),
                    " "
                  )
                )
              ),
              i.createElement(
                "div",
                { className: _.a.Footer },
                i.createElement(c.ob, { className: _.a.Logo }),
                Object(m.g)("#GotSteam_Blurb")
              )
            )
          )
        );
      };
    },
    wjSE: function (e, t, r) {
      "use strict";
      r.d(t, "a", function () {
        return d;
      });
      var a = r("mrSG"),
        i = r("vDqi"),
        n = r.n(i),
        s = r("2vnA"),
        o = (r("msu0"), r("Zdsb"), r("wgTw"), r("TqgT")),
        l = r("/Q1a"),
        c = r("hbtq");
      class d {
        constructor() {
          this.m_mapAppToVOD = new Map();
        }
        GetVODForAppID(e) {
          return this.m_mapAppToVOD.get(e);
        }
        LoadVODForAppID(e, t) {
          return Object(a.a)(this, void 0, void 0, function* () {
            if (this.m_mapAppToVOD.has(e)) return this.m_mapAppToVOD.get(e);
            const r = l.d.STORE_BASE_URL + "video/details/" + e + "/0",
              a = {};
            try {
              let i = yield n.a.get(r, {
                params: a,
                withCredentials: !0,
                cancelToken: t ? t.token : void 0,
              });
              if (t && t.token.reason) return null;
              if (
                i &&
                200 == i.status &&
                i.data &&
                (1 == i.data.success || "ready" == i.data.success)
              ) {
                let t = Object(s.C)({
                  appid: e,
                  video_url: i.data.video_url,
                  bookmark: i.data.bookmark,
                });
                return (
                  i.data.bookmark
                    ? c.b.Get().SetBookmarkForApp(e, i.data.bookmark)
                    : c.b.Get().InitializeBookmarkForApp(e),
                  this.m_mapAppToVOD.set(e, t),
                  t
                );
              }
            } catch (e) {
              let t = Object(o.a)(e);
              console.error(
                "CVideoOnDemandStore:LoadVODForAppID: Failed " + t.strErrorMsg,
                t
              );
            }
            return null;
          });
        }
        static Get() {
          return (
            d.s_VODStore || ((d.s_VODStore = new d()), d.s_VODStore.Init()),
            d.s_VODStore
          );
        }
        Init() {}
      }
    },
    xH93: function (e, t, r) {
      "use strict";
      r.d(t, "b", function () {
        return i;
      }),
        r.d(t, "a", function () {
          return n;
        });
      var a = r("/Q1a");
      const i = "fef49e7fa7e1997310d705b2a6158ff8dc1cdfeb";
      function n(e, t) {
        let r = ".jpg";
        (e && "0000000000000000000000000000000000000000" !== e) || (e = i),
          44 == e.length && ((r = e.substr(-4)), (e = e.substr(0, 40)));
        let n = a.d.AVATAR_BASE_URL;
        return (
          n ||
            ((n = a.d.MEDIA_CDN_COMMUNITY_URL + "images/avatars/"),
            (n += e.substr(0, 2) + "/")),
          (n += e),
          t && "small" != t && (n += "_" + t),
          (n += r),
          n
        );
      }
    },
    zWNq: function (e, t, r) {
      "use strict";
      r.d(t, "a", function () {
        return d;
      });
      var a = r("q1tI"),
        i = r.n(a),
        n = (r("XrGS"), r("yfxr"), r("hAgw")),
        s = r("RrtU"),
        o = r("/Q1a"),
        l = r("zy5s"),
        c = r.n(l);
      function d(e) {
        const { appInfo: t } = e,
          r = Object(a.useRef)({ include_trailers: !0 }),
          [l] = Object(s.a)(
            null == t ? void 0 : t.id,
            Object(n.d)(null == t ? void 0 : t.type),
            r.current
          );
        if (!l) return null;
        const d = l.GetMicroTrailer();
        return d
          ? i.a.createElement(
              "video",
              {
                className: c.a.CapsuleMicroTrailer,
                loop: !0,
                muted: !0,
                autoPlay: !0,
                key: "mtv-" + d.strMP4URL,
              },
              i.a.createElement("source", {
                src: d.strWebMURL,
                type: "video/webm",
              }),
              !o.d.IN_CLIENT &&
                i.a.createElement("source", {
                  src: d.strMP4URL,
                  type: "video/mp4",
                })
            )
          : null;
      }
    },
    zy5s: function (e, t, r) {
      e.exports = {
        "duration-app-launch": "800ms",
        headerCapsuleImgWidth: "460",
        headerCapsuleImgHeight: "215",
        mainCapsuleImgWidth: "616",
        mainCapsuleImgHeight: "353",
        libraryAssetImgWidth: "300",
        libraryAssetImgHeight: "450",
        StoreSaleWidgetContainer:
          "salepreviewwidgets_StoreSaleWidgetContainer_UlvFk",
        LibraryAssetExpandedDisplay:
          "salepreviewwidgets_LibraryAssetExpandedDisplay_3b-fA",
        SaleItemDefaultCapsuleDisplay:
          "salepreviewwidgets_SaleItemDefaultCapsuleDisplay_34o91",
        StoreSaleWidgetHalfLeft:
          "salepreviewwidgets_StoreSaleWidgetHalfLeft_2Va3O",
        StoreSaleWidgetRight: "salepreviewwidgets_StoreSaleWidgetRight_1lRFu",
        StoreSaleDiscountBox: "salepreviewwidgets_StoreSaleDiscountBox_2fpFv",
        StoreSaleWidgetLibraryAssetExtendedTop:
          "salepreviewwidgets_StoreSaleWidgetLibraryAssetExtendedTop_3z02e",
        StoreSaleWidgetImage: "salepreviewwidgets_StoreSaleWidgetImage_21N0p",
        CapsuleMicroTrailer: "salepreviewwidgets_CapsuleMicroTrailer_1oq5U",
        StoreSaleWidgetTitle: "salepreviewwidgets_StoreSaleWidgetTitle_3jI46",
        CapsulePlatform: "salepreviewwidgets_CapsulePlatform_3vzWb",
        StoreSaleWidgetContents:
          "salepreviewwidgets_StoreSaleWidgetContents_2YlSb",
        StoreMetaDataCtn: "salepreviewwidgets_StoreMetaDataCtn_2ttUd",
        StoreSaleItemRelease: "salepreviewwidgets_StoreSaleItemRelease_1K-YK",
        StoreSaleItemDev: "salepreviewwidgets_StoreSaleItemDev_3wE5O",
        StoreSaleItemReview: "salepreviewwidgets_StoreSaleItemReview_kdyER",
        StoreSaleWidgetLeft: "salepreviewwidgets_StoreSaleWidgetLeft_w77ms",
        TitleCtn: "salepreviewwidgets_TitleCtn_1F4bc",
        StoreSaleWidgetCrossCenterRight:
          "salepreviewwidgets_StoreSaleWidgetCrossCenterRight_grKiy",
        CapsuleBottomBar: "salepreviewwidgets_CapsuleBottomBar_6IVLn",
        StoreActionWidgetContainer:
          "salepreviewwidgets_StoreActionWidgetContainer_1gO7r",
        StoreSalePriceWidgetContainer:
          "salepreviewwidgets_StoreSalePriceWidgetContainer_tqNH0",
        StoreSaleWidgetBgTint: "salepreviewwidgets_StoreSaleWidgetBgTint_1yLV1",
        LibraryFallbackAssetImageContainer:
          "salepreviewwidgets_LibraryFallbackAssetImageContainer_2emWW",
        FallbackBackground: "salepreviewwidgets_FallbackBackground_3yvCs",
        SaleTagBlockCtn: "salepreviewwidgets_SaleTagBlockCtn_1ZSqg",
        StoreSaleWidgetCenter: "salepreviewwidgets_StoreSaleWidgetCenter_2hSAg",
        StoreSaleWidgetReleaseAndTags:
          "salepreviewwidgets_StoreSaleWidgetReleaseAndTags_3sBHX",
        Bundle: "salepreviewwidgets_Bundle_1k4up",
        WidgetReleaseDateAndPlatformCtn:
          "salepreviewwidgets_WidgetReleaseDateAndPlatformCtn_2vdJg",
        SaleItemBrowserRow: "salepreviewwidgets_SaleItemBrowserRow_y9MSd",
        StoreSaleWidgetRelease:
          "salepreviewwidgets_StoreSaleWidgetRelease_3eOdk",
        StoreSaleWidgetTags: "salepreviewwidgets_StoreSaleWidgetTags_3OSJs",
        AppTag: "salepreviewwidgets_AppTag_1IS0w",
        StoreSaleWidgetShortDesc:
          "salepreviewwidgets_StoreSaleWidgetShortDesc_VvP06",
        TagTitle: "salepreviewwidgets_TagTitle_3cjIa",
        TagBox: "salepreviewwidgets_TagBox_3isHA",
        SaleItemFullCapsuleDisplay:
          "salepreviewwidgets_SaleItemFullCapsuleDisplay_BBioJ",
        Tag: "salepreviewwidgets_Tag_172zD",
        StoreSaleBroadcastWidgetRight:
          "salepreviewwidgets_StoreSaleBroadcastWidgetRight_nkwT1",
        StoreSalePriceActionWidgetContainer:
          "salepreviewwidgets_StoreSalePriceActionWidgetContainer_ztiNw",
        Discounted: "salepreviewwidgets_Discounted_35-Ub",
        WishList: "salepreviewwidgets_WishList_3LOWb",
        Action: "salepreviewwidgets_Action_3Af0S",
        SingleLineMode: "salepreviewwidgets_SingleLineMode_31Sy5",
        StoreSaleDiscountedPriceCtn:
          "salepreviewwidgets_StoreSaleDiscountedPriceCtn_3GLeQ",
        StoreSalePriceBox: "salepreviewwidgets_StoreSalePriceBox_Wh0L8",
        StoreOriginalPrice: "salepreviewwidgets_StoreOriginalPrice_1EKGZ",
        InGameHover: "salepreviewwidgets_InGameHover_2uFQ-",
        StoreSalePrepurchaseLabel:
          "salepreviewwidgets_StoreSalePrepurchaseLabel_Wxeyn",
        SingleLineOriginalPrice:
          "salepreviewwidgets_SingleLineOriginalPrice_1_ZF5",
        BaseDiscount: "salepreviewwidgets_BaseDiscount_Kxr-3",
        StoreSalePriceButton: "salepreviewwidgets_StoreSalePriceButton_3CDKJ",
        OuterCapsuleContainer: "salepreviewwidgets_OuterCapsuleContainer_Btar9",
        CapsuleContainer: "salepreviewwidgets_CapsuleContainer_1-sO3",
        EventRow: "salepreviewwidgets_EventRow_3tDFI",
        Muted: "salepreviewwidgets_Muted_33Uk9",
        BottomCreatorRow: "salepreviewwidgets_BottomCreatorRow_3Y7Lk",
        CreatorLogo: "salepreviewwidgets_CreatorLogo_2242O",
        CreatorName: "salepreviewwidgets_CreatorName_w6y0J",
        BottomBarPriceInfo: "salepreviewwidgets_BottomBarPriceInfo_2F4qi",
        PlayNowButton: "salepreviewwidgets_PlayNowButton_PEl6X",
        AddToLibraryButton: "salepreviewwidgets_AddToLibraryButton_3Sy6v",
        HeaderCapsuleImageContainer:
          "salepreviewwidgets_HeaderCapsuleImageContainer_Cqh49",
        MainCapsuleImageContainer:
          "salepreviewwidgets_MainCapsuleImageContainer_31Zak",
        LibraryAssetImageContainer:
          "salepreviewwidgets_LibraryAssetImageContainer_3FUhi",
        CapsuleImage: "salepreviewwidgets_CapsuleImage_cODQh",
        LinkCapsuleImage: "salepreviewwidgets_LinkCapsuleImage_1LoJN",
        CapsuleParentInfo: "salepreviewwidgets_CapsuleParentInfo_1OdCe",
        ParentType: "salepreviewwidgets_ParentType_7-srt",
        Banner: "salepreviewwidgets_Banner_1Kvcf",
        Blue: "salepreviewwidgets_Blue_kdPTO",
        LinesImg: "salepreviewwidgets_LinesImg_CpwCn",
        CapsuleDecorators: "salepreviewwidgets_CapsuleDecorators_3BjPC",
        BundleContentsCtnTransition:
          "salepreviewwidgets_BundleContentsCtnTransition_m_79N",
        Expanding: "salepreviewwidgets_Expanding_1501H",
        Expanded: "salepreviewwidgets_Expanded_3ocE7",
        Collapsing: "salepreviewwidgets_Collapsing__ZXLI",
        BundleContentsCtn: "salepreviewwidgets_BundleContentsCtn_yDcfh",
        BundleContentsTitle: "salepreviewwidgets_BundleContentsTitle_j9wMU",
        BundleShowButton: "salepreviewwidgets_BundleShowButton_1Fi9u",
        ShowContentsButton: "salepreviewwidgets_ShowContentsButton_DwWQq",
        ShowContentsSection: "salepreviewwidgets_ShowContentsSection_2cdrh",
        BundleContentItem: "salepreviewwidgets_BundleContentItem_tXp5G",
        BundleContentPreview: "salepreviewwidgets_BundleContentPreview_1mH6d",
        StoreSaleWidgetOuterContainer:
          "salepreviewwidgets_StoreSaleWidgetOuterContainer_38DqR",
        ContentsCount: "salepreviewwidgets_ContentsCount_1SkQs",
        PreviewCtn: "salepreviewwidgets_PreviewCtn_1R5gp",
        PreviewItem: "salepreviewwidgets_PreviewItem_2-qCG",
        PreviewImg: "salepreviewwidgets_PreviewImg_3sPmB",
        bordered_live_stream_icon:
          "salepreviewwidgets_bordered_live_stream_icon_FYzAY",
        DemoLayoutPopup: "salepreviewwidgets_DemoLayoutPopup_21bkM",
        FreeWeekendBar: "salepreviewwidgets_FreeWeekendBar_3jk3Q",
        FreeWeekendLabel: "salepreviewwidgets_FreeWeekendLabel_2lfCI",
        RecommendationReason: "salepreviewwidgets_RecommendationReason_2bjeP",
        LocalizationSpan: "salepreviewwidgets_LocalizationSpan_3WrJ4",
      };
    },
  },
]);
