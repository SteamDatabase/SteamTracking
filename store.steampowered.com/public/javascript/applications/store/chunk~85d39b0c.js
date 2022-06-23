/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(window.webpackJsonp = window.webpackJsonp || []).push([
  [15],
  {
    "/4gK": function (e, t, a) {
      "use strict";
      a.d(t, "a", function () {
        return r;
      }),
        a.d(t, "d", function () {
          return o;
        }),
        a.d(t, "b", function () {
          return l;
        }),
        a.d(t, "c", function () {
          return c;
        });
      var r,
        i = a("Ys0h"),
        n = (a("msu0"), a("Zdsb"), a("wijF")),
        s = a("GXif");
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
      })(r || (r = {}));
      class o {
        GetSource() {
          return this.appInfo ? this.appInfo.source : this.clanInfo.source;
        }
        static GetEntityNameForID(e, t) {
          var a;
          if (e)
            return null === (a = i.a.Get().GetApp(e)) || void 0 === a
              ? void 0
              : a.GetName();
          if (t) {
            const e = n.a.GetClanInfoByClanAccountID(t);
            if (e) return e.group_name;
          }
          return Object(s.g)("#EventCalendar_MuteApp_Unknown");
        }
        static BHasEntityNameForID(e, t) {
          var a, r;
          return e
            ? Boolean(
                null === (a = i.a.Get().GetApp(e)) || void 0 === a
                  ? void 0
                  : a.GetName()
              )
            : !!t &&
                !!(null === (r = n.a.GetClanInfoByClanAccountID(t)) ||
                void 0 === r
                  ? void 0
                  : r.group_name);
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
    "/MtM": function (e, t, a) {
      "use strict";
      a.d(t, "a", function () {
        return S;
      });
      var r,
        i = a("mrSG"),
        n = a("vDqi"),
        s = a.n(n),
        o = a("2vnA"),
        l = a("TyAF"),
        c = a("q1tI"),
        d = a("C2dt"),
        m = a("kWcV"),
        u = a("GbHM"),
        p = a("GXif"),
        _ = a("TqgT"),
        h = a("hCpY"),
        b = a("/Q1a"),
        g = a("2dJq"),
        f = a.n(g),
        v = a("r0f0");
      let S = (r = class extends c.Component {
        constructor(e) {
          super(e), (this.m_cancelSignal = s.a.CancelToken.source());
          let t = !this.props.bShowVideoImmediately;
          (this.state = { bSummaryMode: t, bLoadedMetaData: !1 }),
            (this.m_youtubeInfo = {
              title: Object(p.g)("#Loading"),
              description: "",
              videoid: e.videoID,
              views: "0",
            });
        }
        componentDidMount() {
          this.state.bSummaryMode && this.HintLoadMetadata();
        }
        componentWillUnmount() {
          this.m_cancelSignal.cancel(
            "YouTubeInlineSnippet component unmounted"
          );
        }
        HintLoadMetadata() {
          return Object(i.a)(this, void 0, void 0, function* () {
            d.a
              .LoadYouTubeDynamicData([this.props.videoID], this.m_cancelSignal)
              .then((e) => {
                !this.m_cancelSignal.token.reason &&
                  e.length > 0 &&
                  ((this.m_youtubeInfo = e[0]),
                  this.setState({ bLoadedMetaData: !0 }));
              })
              .catch((e) =>
                console.error(
                  "YouTubeInlineSnippet: " + Object(_.a)(e).strErrorMsg
                )
              );
          });
        }
        OnClick() {
          this.setState({ bSummaryMode: !1 });
        }
        render() {
          let e = this.props.videoID;
          if (this.state.bSummaryMode) {
            let t = this.m_youtubeInfo.title,
              a = this.m_youtubeInfo.views,
              r = this.m_youtubeInfo.description;
            return c.createElement(
              "div",
              { className: f.a.DynamicLinkBox, onClick: this.OnClick },
              c.createElement("img", {
                className: f.a.DynamicLink_Preview,
                src: "https://img.youtube.com/vi/" + e + "/0.jpg",
              }),
              c.createElement(
                "div",
                { className: f.a.DynamicLink_Content },
                c.createElement(
                  "div",
                  { className: f.a.DynamicLink_Name },
                  Object(p.g)("#EventEditor_YouTubeVideoTitle", t)
                ),
                c.createElement(
                  "div",
                  { className: f.a.DynamicLink_YoutubeViews },
                  Object(p.g)(
                    "#EventEditor_YouTubeVideoViews",
                    Object(v.a)(Number(a))
                  )
                ),
                c.createElement(
                  "div",
                  { className: f.a.Dynamiclink_Content },
                  this.state.bLoadedMetaData && r,
                  !this.state.bLoadedMetaData && c.createElement(m.a, null)
                )
              )
            );
          }
          {
            let t = this.props.classNameSize,
              a = this.props.classNameAlign;
            const i =
              "https://www.youtube.com/embed/" +
              e +
              r.m_strYouTubeOptions +
              (this.props.bAutoPlay ? "&autoplay=1" : "") +
              (this.props.nStartSeconds
                ? "&t=" + this.props.nStartSeconds
                : "");
            return c.createElement(
              "div",
              { className: Object(u.a)(f.a.PreviewYouTubeVideo, t, a), id: e },
              c.createElement("img", {
                src:
                  b.d.COMMUNITY_CDN_URL +
                  "public/shared/images/responsive/youtube_16x9_placeholder.gif",
              }),
              c.createElement("iframe", {
                className: Object(u.a)(f.a.PreviewYouTubeVideo, t, a),
                src: i,
                allowFullScreen: !0,
                frameBorder: 0,
              })
            );
          }
        }
      });
      (S.m_strYouTubeOptions = "?fs=1&modestbranding=1&rel=0"),
        Object(i.b)([o.C], S.prototype, "m_youtubeInfo", void 0),
        Object(i.b)([h.b], S.prototype, "OnClick", null),
        (S = r = Object(i.b)([l.a], S));
    },
    "/cMS": function (e, t, a) {
      "use strict";
      a.d(t, "a", function () {
        return p;
      }),
        a.d(t, "c", function () {
          return _;
        }),
        a.d(t, "b", function () {
          return h;
        });
      var r = a("mrSG"),
        i = a("q1tI"),
        n = a.n(i),
        s = (a("Zdsb"), a("9XWO")),
        o = (a("XThB"), a("WOjH")),
        l = a("2VXD"),
        c = a("f5iL"),
        d = a("TqgT"),
        m = a("hCpY"),
        u = a("/Q1a");
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
          return Object(r.a)(this, void 0, void 0, function* () {
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
          return Object(r.a)(this, void 0, void 0, function* () {
            e = this.FilterToUnprocessedTags(e);
            const t = (yield Promise.all(
              e.map((e) => this.QueueTagLoad(e))
            )).filter((e) => 1 != e);
            return t.length > 0 ? t[0] : 1;
          });
        }
        FlushPendingInfo() {
          return Object(r.a)(this, void 0, void 0, function* () {
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
          return Object(r.a)(this, void 0, void 0, function* () {
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
                const a = this.m_mapPromies.get(e);
                return !a || (t.add(a), !1);
              })).sort();
              e.length > 0;

            ) {
              const t = Math.min(this.k_nMaxBatchRequestSize, e.length),
                a = e.slice(0, t);
              e = e.slice(t);
              const r = s.b.Init(o.b);
              r.Body().set_language(u.d.LANGUAGE), r.Body().set_tagids(a);
              try {
                const e = yield o.d.GetLocalizedNameForTags(
                  this.m_SteamInterface.GetAnonymousServiceTransport(),
                  r
                );
                if (1 != e.GetEResult())
                  return (
                    a.forEach(this.m_setTagIDFailedToLoad.add),
                    console.error(
                      "CStoreTagCache::InternalLoadLocalizedTagNames failed with eResults: " +
                        e.GetEResult() +
                        " msg " +
                        e.GetEMsg(),
                      a
                    ),
                    e.GetEResult()
                  );
                e.Body()
                  .tags()
                  .forEach((e) => this.m_mapTagID.set(e.tagid(), e.toObject()));
              } catch (e) {
                a.forEach(this.m_setTagIDFailedToLoad.add);
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
            const a = (yield Promise.all(Array.from(t))).filter((e) => 1 != e);
            return a.length > 0 ? a[0] : 1;
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
        const [a, r] = n.a.useState(p.Get().GetTagID(e)),
          i = Object(l.a)("useSingleLocalizedTagName");
        return (
          n.a.useEffect(() => {
            (a && a.tagid == e) ||
              p
                .Get()
                .QueueTagLoad(e)
                .then(() => {
                  var t;
                  const a = p.Get().GetTagID(e);
                  a &&
                    ((null === (t = null == i ? void 0 : i.token) ||
                    void 0 === t
                      ? void 0
                      : t.reason) ||
                      r(a));
                });
          }, [
            e,
            a,
            null === (t = null == i ? void 0 : i.token) || void 0 === t
              ? void 0
              : t.reason,
          ]),
          a
        );
      }
      function h(e) {
        var t;
        const [a, r] = n.a.useState(p.Get().GetAllTagIDsWeHaveLoaded(e)),
          i = Object(l.a)("useLocalizeTagNames");
        return (
          n.a.useEffect(() => {
            p.Get()
              .QueueMultipleTagLoads(e)
              .then(() => {
                var t;
                (null === (t = null == i ? void 0 : i.token) || void 0 === t
                  ? void 0
                  : t.reason) || r(p.Get().GetAllTagIDsWeHaveLoaded(e));
              });
          }, [
            null === (t = null == i ? void 0 : i.token) || void 0 === t
              ? void 0
              : t.reason,
            e,
          ]),
          a
        );
      }
      Object(r.b)([m.b], p.prototype, "GetTagID", null),
        Object(r.b)([m.b], p.prototype, "QueueMultipleTagLoads", null);
    },
    "0JCO": function (e, t, a) {
      "use strict";
      a.d(t, "b", function () {
        return l;
      }),
        a.d(t, "a", function () {
          return c;
        }),
        a.d(t, "c", function () {
          return d;
        });
      var r = a("mrSG"),
        i = a("q1tI"),
        n = a("lfGQ"),
        s = a("/Q1a");
      const o = i.createContext({});
      function l(e) {
        const { children: t } = e,
          a = Object(r.c)(e, ["children"]),
          s = d();
        return i.createElement(
          o.Provider,
          {
            value: Object.assign(
              Object.assign(Object.assign({}, n.e.GetDefaultParams()), s),
              a
            ),
          },
          t
        );
      }
      function c(e) {
        const { children: t } = e,
          a = e.snr || s.d.SNR,
          r = n.e.ParseSNR(a);
        return i.createElement(
          o.Provider,
          {
            value: Object.assign(Object.assign({}, n.e.GetDefaultParams()), r),
          },
          t
        );
      }
      function d() {
        return i.useContext(o);
      }
    },
    "1QaA": function (e, t, a) {
      "use strict";
      a.d(t, "c", function () {
        return y;
      }),
        a.d(t, "b", function () {
          return w;
        }),
        a.d(t, "a", function () {
          return C;
        });
      var r = a("vDqi"),
        i = a.n(r),
        n = a("q1tI"),
        s = a.n(n),
        o = a("pQ8y"),
        l = a("Zdsb"),
        c = (a("MHzk"), a("yfxr"), a("44wC")),
        d = (a("X/lQ"), a("hAgw")),
        m = a("RrtU"),
        u = a("IYm0"),
        p = a("2fVn"),
        _ = a("KQHr"),
        h = a("4EJs"),
        b = a("zy5s"),
        g = a.n(b),
        f = a("hNBN"),
        v = a("GbHM"),
        S = a("GXif");
      function y(e) {
        const {
            info: t,
            bShowDemoButton: a,
            bShowPurchaseOptionsButton: r,
            fnOnPurchaseOptionsClick: o,
            bHidePrice: h,
            bHideWishlistButton: b,
            bShowDeckCompatibilityDialog: v,
          } = e,
          S = Object(n.useRef)({ include_release: !0 }),
          [y] = Object(m.a)(t.id, Object(d.d)(t.type), S.current),
          w = Object(l.c)(t.type),
          [E, I] = s.a.useState(a && w && c.a.Get().BHasDemoAppID(t.id));
        return (
          s.a.useEffect(() => {
            const e = i.a.CancelToken.source();
            return (
              a &&
                w &&
                c.a
                  .Get()
                  .LoadAppIDsBatch([t.id])
                  .then(() => {
                    e.token.reason || I(c.a.Get().BHasDemoAppID(t.id));
                  }),
              () =>
                null == e
                  ? void 0
                  : e.cancel("StoreSalePriceActionWidget: unmounting")
            );
          }, [a, w, t.id]),
          y
            ? s.a.createElement(
                "div",
                { className: g.a.StoreActionWidgetContainer },
                s.a.createElement(
                  "div",
                  { className: g.a.StoreSalePriceActionWidgetContainer },
                  Boolean(!b && Object(l.c)(t.type)) &&
                    s.a.createElement(f.a, {
                      appid: t.id,
                      bIsFree: y.BIsFree(),
                      bIsComingSoon: y.BIsComingSoon(),
                      className: "WishlistBtn",
                    }),
                  Boolean(E) &&
                    s.a.createElement(_.a, { info: t, className: g.a.Action }),
                  Boolean(!h) &&
                    (Boolean(r)
                      ? s.a.createElement(B, { fnOnPurchaseOptionsClick: o })
                      : s.a.createElement(p.a, {
                          info: t,
                          className: "CartBtn",
                        })),
                  Boolean(!h) && s.a.createElement(C, { info: t }),
                  Boolean(v) && s.a.createElement(u.b, { nAppID: t.id })
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
            Object(S.g)("#EventDisplay_CallToAction_ShowPurchaseOptions_Button")
          )
        );
      function w(e) {
        const {
            storeItem: t,
            bPurchaseOptionsExpanded: a,
            fnCollapseOptions: r,
          } = e,
          i = null == t ? void 0 : t.GetAllPurchaseOptions();
        return s.a.createElement(
          o.a,
          {
            in: a,
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
              { onClick: r, className: g.a.BundleShowButton },
              s.a.createElement(
                "button",
                { className: g.a.ShowContentsButton },
                Object(S.g)("#Button_Close")
              )
            )
          )
        );
      }
      function C(e) {
        var t, a;
        const { info: r, bSingleLineMode: i } = e,
          o = Object(n.useRef)({ include_release: !0 }),
          [l] = Object(m.a)(
            null == r ? void 0 : r.id,
            Object(d.d)(null == r ? void 0 : r.type),
            o.current
          );
        if (!l) return null;
        const c = Object(v.a)(
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
              Object(S.g)("#EventDisplay_CallToAction_InLibrary")
            )
          );
        if (
          l.BIsComingSoon() &&
          !(null === (a = l.GetBestPurchaseOption()) || void 0 === a
            ? void 0
            : a.packageid)
        )
          return s.a.createElement(
            "div",
            { className: c },
            s.a.createElement(
              "div",
              { className: g.a.StoreSalePriceBox },
              Object(S.g)("#EventDisplay_CallToAction_ComingSoon")
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
                  Object(S.g)("#EventDisplay_CallToAction_FreeDemo")
                )
              )
            : s.a.createElement(
                "div",
                { className: c },
                s.a.createElement(
                  "div",
                  { className: g.a.StoreSalePriceBox },
                  Object(S.g)("#EventDisplay_CallToAction_FreeToPlay")
                )
              );
        if (!l.GetBestPurchasePriceFormatted() || !l.GetBestPurchaseOption())
          return null;
        const p = l.GetBestPurchaseOption().discount_pct || u,
          _ = p && u && p > u && u,
          h = l.GetBestPurchaseOption().packageid;
        return s.a.createElement(
          "div",
          { className: Object(v.a)(c, p && g.a.Discounted) },
          Boolean(l.BIsComingSoon() && !!h) &&
            s.a.createElement(
              "div",
              {
                className: Object(v.a)(
                  g.a.StoreSalePriceBox,
                  g.a.StoreSalePrepurchaseLabel
                ),
              },
              Object(S.g)("#EventDisplay_CallToAction_Prepurchase_Short")
            ),
          Boolean(_) &&
            s.a.createElement(
              "span",
              { className: Object(v.a)(g.a.BaseDiscount) },
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
                { className: Object(v.a)(g.a.StoreSaleDiscountedPriceCtn) },
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
                    className: Object(v.a)(
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
    "1mk1": function (e, t, a) {
      "use strict";
      a.d(t, "b", function () {
        return c;
      }),
        a.d(t, "c", function () {
          return d;
        }),
        a.d(t, "a", function () {
          return m;
        });
      a("yfxr");
      var r = a("q1tI"),
        i = a.n(r),
        n = a("Zdsb"),
        s = a("lfGQ"),
        o = a("i5oW"),
        l = a("0JCO");
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
          a = Object(s.c)(t);
        return e.appid && a
          ? i.a.createElement(
              o.a,
              { appID: e.appid, snr: a },
              i.a.createElement(
                "div",
                { className: "ImpressionTrackedElement" },
                e.children
              )
            )
          : i.a.createElement(i.a.Fragment, null, e.children);
      };
    },
    "2+iD": function (e, t, a) {
      e.exports = {
        FlexColumnContainer: "eventreminder_FlexColumnContainer_1WvmG",
        FullStartTime: "eventreminder_FullStartTime_1gZlx",
        ReminderDialog: "eventreminder_ReminderDialog_2S_bd",
        ReminderOptions: "eventreminder_ReminderOptions_P5dFj",
        ReminderBackground: "eventreminder_ReminderBackground_GDF1p",
        ReminderExpandsLeft: "eventreminder_ReminderExpandsLeft_3RoUk",
        ReminderOption: "eventreminder_ReminderOption_RNhWc",
        Unverified: "eventreminder_Unverified_PNHvX",
        CheckboxWrapper: "eventreminder_CheckboxWrapper_1g3ts",
        ReminderOptionTooltip: "eventreminder_ReminderOptionTooltip_ZL-f2",
        ReminderCheckBox: "eventreminder_ReminderCheckBox_2bkmL",
        IconMode: "eventreminder_IconMode_3L1VN",
        RemindBell: "eventreminder_RemindBell_1MZ5h",
        RemindCheck: "eventreminder_RemindCheck_30e1o",
        ReminderDefault: "eventreminder_ReminderDefault_10z6n",
        TextMode: "eventreminder_TextMode_2CgU9",
        ReminderCheck: "eventreminder_ReminderCheck_FpEF0",
        ReminderOpennedOptions: "eventreminder_ReminderOpennedOptions_1Zj38",
        ReminderOptionsHeader: "eventreminder_ReminderOptionsHeader_1GBAq",
        ReminderCalendarOptions: "eventreminder_ReminderCalendarOptions_1GxfZ",
        ReminderSettings: "eventreminder_ReminderSettings_L3OIh",
        ReminderNotes: "eventreminder_ReminderNotes_1l8Na",
        RpcThrobber: "eventreminder_RpcThrobber_2f9gF",
      };
    },
    "2KLf": function (e, t, a) {
      "use strict";
      a.d(t, "a", function () {
        return c;
      });
      var r = a("mrSG"),
        i = a("FmLm"),
        n = a("/Q1a"),
        s = a("EuLa"),
        o = a("6MVd");
      class l {
        constructor() {
          (this.m_mapAppToSNRs = new Map()), (this.m_rgImpressionsToAdd = []);
        }
        AddImpression(e, t) {
          let a = !1;
          i.a.Get().BAppImpressionsAllowed()
            ? (this.m_mapAppToSNRs.has(e)
                ? -1 == this.m_mapAppToSNRs.get(e).indexOf(t) &&
                  (this.m_mapAppToSNRs.get(e).push(t), (a = !0))
                : (this.m_mapAppToSNRs.set(e, [t]), (a = !0)),
              a &&
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
      Object(r.b)([Object(o.a)(1e3)], l.prototype, "UpdateCookie", null);
      const c = new l();
      window.g_ImpressionTracker = c;
    },
    "2dJq": function (e, t, a) {
      e.exports = {
        DynamicLinkBox: "youtubeembed_DynamicLinkBox_5Ycv2",
        DynamicLink_Preview: "youtubeembed_DynamicLink_Preview_1SXvQ",
        DynamicLink_Author: "youtubeembed_DynamicLink_Author_3_zLB",
        DynamicLink_Description: "youtubeembed_DynamicLink_Description_2LLBo",
        DynamicLink_Content: "youtubeembed_DynamicLink_Content_30q6o",
        DynamicLink_Name: "youtubeembed_DynamicLink_Name_22TUb",
        DynamicLink_YoutubeViews: "youtubeembed_DynamicLink_YoutubeViews_3wb0B",
        Dynamiclink_Content: "youtubeembed_Dynamiclink_Content_91C09",
        DynamicLink_URL: "youtubeembed_DynamicLink_URL_2wwTh",
        DynamicLink_AuthorName: "youtubeembed_DynamicLink_AuthorName_1Thfl",
        DynamicLink_Date: "youtubeembed_DynamicLink_Date_3MAjB",
        PreviewYouTubeVideo: "youtubeembed_PreviewYouTubeVideo_2ydks",
        sizeThumb: "youtubeembed_sizeThumb_kQ_wg",
        sizeFull: "youtubeembed_sizeFull_2GDYx",
        floatLeft: "youtubeembed_floatLeft_3ZwVB",
        floatRight: "youtubeembed_floatRight_1VimJ",
      };
    },
    "2fVn": function (e, t, a) {
      "use strict";
      a.d(t, "a", function () {
        return b;
      });
      var r = a("q1tI"),
        i = a.n(r),
        n = (a("Zdsb"), a("lfGQ")),
        s = (a("yfxr"), a("FmLm")),
        o = a("hAgw"),
        l = a("RrtU"),
        c = a("tQrp"),
        d = a("GbHM"),
        m = a("GXif"),
        u = a("/Q1a"),
        p = a("0JCO"),
        _ = a("zy5s"),
        h = a.n(_);
      function b(e) {
        var t;
        const { info: a, className: _ } = e,
          b = Object(p.c)(),
          g = Object(r.useRef)({ include_release: !0 }),
          [f] = Object(l.a)(a.id, Object(o.d)(a.type), g.current);
        if (
          (Object(r.useEffect)(() => {
            s.a.Get().HintLoad();
          }, []),
          !f)
        )
          return null;
        const v = () => {
          Object(c.c)(window, "steam://run/" + f.GetAppIDToRun());
        };
        if (8 == f.GetAppType()) return null;
        const S =
          f.BIsFree() ||
          "0" == f.GetBestPurchasePriceFormatted() ||
          f.GetBestPurchaseOption().discount_pct >= 100;
        if (1 == f.GetStoreItemType() && S && f.GetIncludedAppIDs().length > 1)
          return null;
        if (0 == f.GetStoreItemType()) {
          if (
            f.BIsComingSoon() &&
            !(null === (t = f.GetBestPurchaseOption()) || void 0 === t
              ? void 0
              : t.packageid)
          )
            return null;
          const e = s.a.Get().BOwnsApp(f.GetAppID());
          if (e || S) {
            const t =
              (e && Object(m.g)("#EventDisplay_CallToAction_PlayNow")) ||
              Object(m.g)("#EventDisplay_CallToAction_PlayNowForFree");
            return i.a.createElement(
              "div",
              { className: Object(d.a)(h.a.Action, _), onClick: v },
              i.a.createElement("span", null, t)
            );
          }
          if ("" == f.GetBestPurchasePriceFormatted()) {
            const e = Object(n.b)(f.GetStorePageURL(), b);
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
                r = `${u.d.STORE_BASE_URL}cart/addtocart`,
                i = Object(n.c)(b);
              2 == f.GetStoreItemType()
                ? s.a.Get().AddToCart(e, null, r, t, i, a.id)
                : s.a
                    .Get()
                    .AddToCart(e, f.GetBestPurchaseOption().packageid, r, t, i);
            },
          },
          i.a.createElement("span", null, Object(m.g)("#Store_AddToCart"))
        );
      }
    },
    "2t98": function (e, t, a) {
      "use strict";
      a.d(t, "a", function () {
        return r;
      }),
        a.d(t, "b", function () {
          return l;
        });
      var r,
        i = a("j4v3"),
        n = a("GXif"),
        s = a("/Q1a");
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
      })(r || (r = {}));
      const o = new Map();
      function l(e) {
        return (
          0 == o.size &&
            (function () {
              const e = Object(i.f)();
              o.set(r.Default, {
                id: r.Default,
                strUrl: `${e}/`,
                strName: Object(n.g)("#EventCalendar_NewsChannel_YourNews"),
                strSubtitle: Object(n.g)(
                  "#EventCalendar_NewsChannel_Personalized"
                ),
                strHeaderTitle: Object(n.g)(
                  "#EventCalendar_NewsChannel_YourNews_HeaderTitle"
                ),
              }),
                o.set(r.Upcoming, {
                  id: r.Upcoming,
                  strUrl: `${e}/?upcoming=1`,
                  strName: Object(n.g)("#EventCalendar_NewsChannel_Upcoming"),
                  strShortName: Object(n.g)(
                    "#EventCalendar_NewsChannel_UpcomingShort"
                  ),
                  strSubtitle: Object(n.g)(
                    "#EventCalendar_NewsChannel_Personalized"
                  ),
                }),
                o.set(r.Featured, {
                  id: r.Featured,
                  strUrl: `${e}/collection/featured/`,
                  strName: Object(n.g)("#EventCalendar_NewsChannel_Featured"),
                  strSubtitle: Object(n.g)(
                    "#EventCalendar_NewsChannel_TopSellers"
                  ),
                  strHeaderTitle: Object(n.g)(
                    "#EventCalendar_NewsChannel_Featured_HeaderTitle"
                  ),
                }),
                o.set(r.Press, {
                  id: r.Press,
                  strUrl: `${e}/collection/press/`,
                  strName: Object(n.g)("#EventCalendar_NewsChannel_Press"),
                  strHeaderTitle: Object(n.g)(
                    "#EventCalendar_Collection_News_Title"
                  ),
                  strHeaderSubtitle: Object(n.g)(
                    "#EventCalendar_Collection_News_Subtitle"
                  ),
                }),
                o.set(r.Steam, {
                  id: r.Steam,
                  strUrl: `${e}/collection/steam/`,
                  strName: Object(n.g)("#EventCalendar_NewsChannel_Steam"),
                  strSubtitle: Object(n.g)(
                    "#EventCalendar_NewsChannel_SteamSubtitle"
                  ),
                  strHeaderTitle: Object(n.g)(
                    "#EventCalendar_NewsChannel_Steam_HeaderTitle"
                  ),
                }),
                o.set(r.Halloween, {
                  id: r.Halloween,
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
                  (o.set(r.Dev_All, {
                    id: r.Dev_All,
                    strUrl: `${e}/collection/all/`,
                    strName: Object(n.g)("#EventCalendar_NewsChannel_All"),
                    bIsValveOnly: !0,
                  }),
                  o.set(r.Dev_Sales, {
                    id: r.Dev_Sales,
                    strUrl: `${e}/collection/sales/`,
                    strName: Object(n.g)("#EventCalendar_NewsChannel_AllSales"),
                    bIsValveOnly: !0,
                  }),
                  o.set(r.Dev_AssociatedPress, {
                    id: r.Dev_AssociatedPress,
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
    "3XYX": function (e, t, a) {
      "use strict";
      a.d(t, "d", function () {
        return I;
      }),
        a.d(t, "b", function () {
          return O;
        }),
        a.d(t, "c", function () {
          return T;
        }),
        a.d(t, "a", function () {
          return N;
        });
      var r = a("mrSG"),
        i = a("vDqi"),
        n = a.n(i),
        s = a("2vnA"),
        o = a("JsFJ"),
        l = a("Tj6G"),
        c = a("hCpY");
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
          let a = [];
          if ("object" != typeof e || !Array.isArray(e))
            throw new d("expected array");
          let r = e.length;
          for (let i = 0; i < r; ++i)
            try {
              a.push(t(e[i]));
            } catch (e) {
              throw ((e.message += "\n...while parsing array element " + i), e);
            }
          return a;
        }
        parseDict(e, t) {
          let a = new Map();
          if ("object" != typeof e || Array.isArray(e))
            throw new d("expected object");
          for (let r in e)
            try {
              a.set(r, t(e[r]));
            } catch (e) {
              throw (
                ((e.message += "\n...while parsing dictionary element " + r), e)
              );
            }
          return a;
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
          let a = [],
            r = [];
          for (const i of e)
            i.persistent
              ? (r.length > 0 &&
                  (r[r.length - 1].nTimeEnd = this.convertTime(i.Timestamp, t)),
                i.name.length > 0 &&
                  r.push({
                    strTemplateName: i.name,
                    nTimeStart: this.convertTime(i.Timestamp, t),
                    nTimeEnd: -1,
                    color: Object(c.c)(i.color_r, i.color_g, i.color_b),
                  }))
              : a.push({
                  strTemplateName: i.name,
                  nTime: this.convertTime(i.Timestamp, t),
                  color: Object(c.c)(i.color_r, i.color_g, i.color_b),
                });
          return { rgMarkers: a, rgSegments: r };
        }
        UpdateRegions(e) {
          let t = [];
          for (const a of e)
            t.push({
              strTemplateName: a.name,
              min: { x: a.min_x, y: a.min_y },
              max: { x: a.max_x, y: a.max_y },
              behavior: a.behavior,
            });
          return t;
        }
        UpdateSoundtrack(e, t) {}
      }
      var u = a("VnJP"),
        p = a("Ru/g"),
        _ = (a("bFkU"), a("7VqR")),
        h = a("/Q1a"),
        b = a("vYsE"),
        g = a("pJv3"),
        f = a("3u1o");
      a("msu0"), a("xYro");
      class v {
        constructor(e) {
          (this.m_elVideo = null),
            (this.m_peerConnection = null),
            (this.m_schCandidateTimer = new f.b()),
            (this.m_listeners = new f.c()),
            (this.m_bFirstPlay = !0),
            (this.m_bStatsViewVisible = !1),
            (this.m_schCaptureDisplayStatsTrigger = new f.b()),
            (this.m_stats = new g.a()),
            (this.m_elVideo = e);
        }
        PlayMPD(e) {
          return Object(r.a)(this, void 0, void 0, function* () {});
        }
        PlayWebRTC(e, t, a, i, s) {
          return Object(r.a)(this, void 0, void 0, function* () {
            (this.m_strBroadcastSteamID = e),
              (this.m_ulWebRTCSessionID = a),
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
                { urls: ["turn:" + i], username: t, credential: a },
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
                  Object(r.a)(this, void 0, void 0, function* () {
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
          return Object(r.a)(this, void 0, void 0, function* () {
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
                    a = t.data;
                  if (!t.success || 1 != t.success)
                    throw new Error(String(t.success));
                  a.candidate_generation > this.m_nHostCandidateGeneration
                    ? (a.candidates.forEach((e) => {
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
                        a.candidate_generation))
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
          let a = new CustomEvent(e, {
            cancelable: !0,
            bubbles: !0,
            detail: t,
          });
          this.m_elVideo.dispatchEvent(a);
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
      Object(r.b)([b.a], v.prototype, "PlayWebRTC", null),
        Object(r.b)([s.k.bound], v.prototype, "CaptureStatsForDisplay", null),
        Object(r.b)([b.a], v.prototype, "OnVideoPause", null),
        Object(r.b)([b.a], v.prototype, "OnVideoResize", null);
      a("Zdsb"), a("ZBhF");
      var S = a("ApMK"),
        y = a("f5iL"),
        B = a("GXif"),
        w = a("TqgT"),
        C = a("wjSE"),
        E = a("hbtq");
      const I = 7;
      var O, T;
      !(function (e) {
        (e[(e.None = 0)] = "None"),
          (e[(e.Loading = 1)] = "Loading"),
          (e[(e.Ready = 2)] = "Ready"),
          (e[(e.Error = 3)] = "Error");
      })(O || (O = {}));
      class R {
        constructor() {
          (this.m_steamIDBroadcast = ""),
            (this.m_ulBroadcastID = ""),
            (this.m_ulViewerToken = ""),
            (this.m_strCDNAuthUrlParameters = void 0),
            (this.m_bWebRTC = !1),
            (this.m_eWatchState = O.None),
            (this.m_strStateDescription = ""),
            (this.m_rgVideos = []),
            (this.m_schManifestTimeout = new f.b()),
            (this.m_schHeartbeatTimeout = new f.b());
        }
        SetState(e, t = "") {
          (this.m_eWatchState = e),
            (this.m_strStateDescription = t),
            e == O.Error && console.log(this.m_strStateDescription);
        }
      }
      Object(r.b)([s.C], R.prototype, "m_ulBroadcastID", void 0),
        Object(r.b)([s.C], R.prototype, "m_eWatchState", void 0),
        Object(r.b)([s.C], R.prototype, "m_strStateDescription", void 0),
        Object(r.b)([s.k], R.prototype, "SetState", null);
      class D {
        constructor(e) {
          (this.m_steamIDBroadcast = ""),
            (this.m_strTitle = ""),
            (this.m_strAppId = "" + I),
            (this.m_nAppID = I),
            (this.m_strAppTitle = ""),
            (this.m_strThumbnailUrl = ""),
            (this.m_nViewerCount = 0),
            (this.m_bIsOnline = !1),
            (this.m_schUpdateTimeout = new f.b()),
            (this.m_nRefCount = 0),
            (this.m_steamIDBroadcast = e);
        }
      }
      Object(r.b)([s.C], D.prototype, "m_strTitle", void 0),
        Object(r.b)([s.C], D.prototype, "m_strAppId", void 0),
        Object(r.b)([s.C], D.prototype, "m_nAppID", void 0),
        Object(r.b)([s.C], D.prototype, "m_strAppTitle", void 0),
        Object(r.b)([s.C], D.prototype, "m_strThumbnailUrl", void 0),
        Object(r.b)([s.C], D.prototype, "m_nViewerCount", void 0),
        Object(r.b)([s.C], D.prototype, "m_bIsOnline", void 0);
      class G {
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
      Object(r.b)([s.C], G.prototype, "m_eWatchState", void 0),
        Object(r.b)([s.C], G.prototype, "m_strStateDescription", void 0),
        Object(r.b)([s.k], G.prototype, "SetState", null);
      class j extends G {}
      class A extends G {}
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
            (this.m_schSaveSettings = new f.b()),
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
        CreateBroadcastVideo(e, t, a, r) {
          let i = this.GetOrCreateBroadcast(t),
            { nVolume: n, bMuted: s } = this.m_broadcastSettings,
            o = new M(e, n, s, a);
          return (
            o.SetBroadcastSteamID(t),
            i.m_rgVideos.push(o),
            (i.m_bWebRTC = r),
            Object(u.a)() ||
              Object(u.b)() ||
              i.SetState(O.Error, Object(B.g)("#BroadcastWatch_MinBrowser")),
            o
          );
        }
        CreateClipVideo(e, t, a) {
          let r = this.GetOrCreateClip(t),
            { nVolume: i, bMuted: n } = this.m_broadcastSettings,
            s = new M(e, i, n, a);
          return (
            s.SetBroadcastClipID(t),
            r.m_rgVideos.push(s),
            Object(u.a)() ||
              Object(u.b)() ||
              r.SetState(O.Error, Object(B.g)("#BroadcastWatch_MinBrowser")),
            s
          );
        }
        CreateVODVideo(e, t, a) {
          let r = this.GetOrCreateVOD(t),
            { nVolume: i, bMuted: n } = this.m_broadcastSettings,
            s = new M(e, i, n, a);
          return (
            s.SetBroadcastAppIDVOD(t),
            r.m_rgVideos.push(s),
            Object(u.a)() ||
              Object(u.b)() ||
              r.SetState(O.Error, Object(B.g)("#BroadcastWatch_MinBrowser")),
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
            for (let a of t.m_rgVideos) a != e && a.StopPlaybackTillUserInput();
          }),
            this.m_mapClips.forEach((t) => {
              for (let a of t.m_rgVideos)
                a != e && a.StopPlaybackTillUserInput();
            }),
            (this.m_activeVideo = e);
        }
        PauseAllVideo() {
          this.m_mapBroadcasts.forEach((e) => {
            for (let t of e.m_rgVideos) t.StopPlaybackTillUserInput();
          });
        }
        StopVideo(e) {
          return Object(r.a)(this, void 0, void 0, function* () {
            let t = e.GetBroadcastSteamID(),
              a = this.m_mapBroadcasts.get(t);
            e.Stop(),
              a &&
                (a.m_ulBroadcastID &&
                  (function (e, t, a) {
                    Object(r.a)(this, void 0, void 0, function* () {
                      if (!t) return;
                      let r = new FormData();
                      r.append("steamid", e),
                        r.append("broadcastid", t),
                        r.append("viewertoken", a);
                      try {
                        yield n.a.post(
                          h.d.CHAT_BASE_URL + "broadcast/stopwatching",
                          r
                        );
                      } catch (e) {}
                    });
                  })(
                    t,
                    a.m_ulBroadcastID,
                    this.m_broadcastSettings.ulViewerToken
                  ),
                S.c(a.m_rgVideos, (t) => t == e),
                this.RemoveBroadcastIfUnused(a));
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
            return new D("");
          }
          if (!this.m_broadcastInfos[e]) {
            const t = Object(s.C)(new D(e));
            this.m_broadcastInfos[e] = t;
          }
          return this.m_broadcastInfos[e];
        }
        GetOrCreateBroadcast(e) {
          let t = this.m_mapBroadcasts.get(e);
          return (
            t ||
            ((t = new R()),
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
            ((t = new j()),
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
            ((t = new A()),
            (t.m_nAppIDVOD = e),
            (t.m_eWatchState = O.None),
            this.m_mapVODs.set(e, t),
            t)
          );
        }
        LoadBroadcastInfo(e) {
          return Object(r.a)(this, void 0, void 0, function* () {
            let t = "0",
              a = this.m_mapBroadcasts.get(e.m_steamIDBroadcast);
            a && (t = a.m_ulBroadcastID);
            const r = {
              steamid: e.m_steamIDBroadcast,
              broadcastid: t,
              location:
                a &&
                a.m_rgVideos &&
                a.m_rgVideos[0] &&
                a.m_rgVideos[0].GetWatchLocation(),
            };
            try {
              const t = yield n.a.get(
                `${h.d.CHAT_BASE_URL}broadcast/getbroadcastinfo/`,
                { params: r }
              );
              if (!t || !t.data) return;
              const a = t.data;
              Object(s.G)(() => {
                (e.m_strTitle = a.title),
                  (e.m_strAppId = a.appid),
                  (e.m_nAppID = Number.parseInt(a.appid)),
                  (e.m_strAppTitle = a.app_title),
                  (e.m_strThumbnailUrl = a.thumbnail_url),
                  (e.m_nViewerCount = a.viewer_count),
                  (e.m_bIsOnline = a.is_online),
                  !e.m_strTitle &&
                    o.a &&
                    ((e.m_strTitle = o.a.name),
                    (e.m_strAppTitle = o.a.appName || o.a.name));
                const t = a.update_interval;
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
        GetBroadcastManifest(e, t, a = Date.now()) {
          return Object(r.a)(this, void 0, void 0, function* () {
            e.SetState(O.Loading, "");
            let r = {
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
                { params: r, withCredentials: !0 }
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
              let r = Date.now() - a;
              if (r > 6e4)
                return void e.SetState(
                  O.Error,
                  Object(B.g)("#BroadcastWatch_NotAvailable")
                );
              let i = r > 3e4 ? s.retry : 5e3;
              e.m_schManifestTimeout.Schedule(i, () =>
                this.GetBroadcastManifest(e, t, a)
              );
            } else
              "waiting_for_start" == o
                ? (e.SetState(
                    O.Loading,
                    Object(B.g)("#BroadcastWatch_WaitingForStart")
                  ),
                  e.m_schManifestTimeout.Schedule(s.retry, () =>
                    this.GetBroadcastManifest(e, t, a)
                  ))
                : "waiting_for_reconnect" == o
                ? (e.SetState(
                    O.Loading,
                    Object(B.g)("#BroadcastWatch_WaitingForReconnect")
                  ),
                  e.m_schManifestTimeout.Schedule(s.retry, () =>
                    this.GetBroadcastManifest(e, t, a)
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
          return Object(r.a)(this, void 0, void 0, function* () {
            e.SetState(O.Loading, "");
            let a = {
                clipid: e.m_clipID,
                watchlocation: t,
                sessionid: h.d.SESSIONID,
              },
              r = null;
            try {
              r = yield n.a.get(
                h.d.CHAT_BASE_URL + "broadcast/getclipdetails",
                { params: a, withCredentials: !0 }
              );
            } catch (e) {
              console.error(e), console.log("Failed to get clip manifest!");
            }
            if (!r || 200 != r.status)
              return void e.SetState(
                O.Error,
                Object(B.g)("#BroadcastWatch_RequestFailed")
              );
            let i = r.data;
            1 == i.success
              ? (e.SetState(O.Ready), (e.m_data = i), this.LoadClip(e))
              : e.SetState(
                  O.Error,
                  Object(B.g)("#BroadcastWatch_RequestFailed")
                );
          });
        }
        GetVODManifest(e, t) {
          return Object(r.a)(this, void 0, void 0, function* () {
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
          return Object(r.a)(this, void 0, void 0, function* () {
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
          let a = this.m_mapBroadcasts.get(e.GetBroadcastSteamID());
          a &&
            a.m_eWatchState != O.Loading &&
            (a.m_bWebRTC && t && (a.m_bWebRTC = !1),
            this.GetBroadcastManifest(a, e.GetWatchLocation()));
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
          let a = this.m_broadcastSettings;
          (a.bMuted = !!a.bMuted),
            (a.nVolume = _.a(a.nVolume, 0, 1)),
            "string" != typeof a.ulViewerToken && (a.ulViewerToken = "0");
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
      Object(r.b)([s.C], k.prototype, "m_mapBroadcasts", void 0),
        (function (e) {
          (e[(e.Timeline = 1)] = "Timeline"), (e[(e.Minimap = 2)] = "Minimap");
        })(T || (T = {}));
      class M {
        constructor(e, t, a, r) {
          (this.m_elVideo = null),
            (this.m_player = null),
            (this.m_listeners = new f.c()),
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
            (this.m_bMuted = a),
            (this.m_eWatchLocation = r);
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
          return N.GetBroadcastState(this);
        }
        GetBroadcastStateDescription() {
          return N.GetBroadcastStateDescription(this);
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
              : ((this.m_player = new v(this.m_elVideo)),
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
            (this.m_BroadcastInfo = N.StartInfo(this.m_steamIDBroadcast));
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
              t.SetBookmarkAdapter(new E.a(e.m_nAppIDVOD)),
            this.m_player.PlayMPD(e.m_manifestURL, null),
            this.SetVolume(this.m_nVolume),
            this.m_player.SetMuted(this.m_bMuted);
        }
        Stop() {
          this.m_listeners.Unregister(),
            this.m_BroadcastInfo &&
              (N.StopInfo(this.m_BroadcastInfo), (this.m_BroadcastInfo = null)),
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
            ? N.StartVideo(this)
            : e == O.Ready &&
              (N.SetActiveVideo(this),
              this.m_player
                ? this.m_player.Play()
                : this.IsBroadcastVOD()
                ? this.StartVOD(N.GetBroadcastVOD(this.m_nBroadcastAppIDVOD))
                : this.StartBroadcast(N.GetBroadcast(this.m_steamIDBroadcast)));
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
            N.SaveVolumeChange(e, this.m_bMuted);
        }
        SetMute(e) {
          this.m_player && this.m_player.SetMuted(e),
            (this.m_bMuted = e),
            N.SaveVolumeChange(this.m_nVolume, e);
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
          const a = this.m_player.GetLiveContentStartTime().getTime();
          if ("timelinemarkers" in t.gamedata) {
            const e = this.m_gameDataParser.UpdateMarkers(
              t.gamedata.__timelinemarkers,
              a
            );
            e &&
              (this.m_rgMarkers.replace(e.rgMarkers || []),
              this.m_rgSegments.replace(e.rgSegments || []));
            const r = this.m_gameDataParser.UpdateRegions(t.gamedata.__regions);
            r && this.m_rgRegions.replace(r);
          } else
            "soundtrack" in t.gamedata &&
              this.m_gameDataParser.UpdateSoundtrack(
                this.m_steamIDBroadcast,
                t.gamedata.soundtrack
              );
        }
        OnDownloadFailed() {
          N.BroadcastDownloadFailed(this);
        }
        OnWebRTCRetry() {
          N.BroadcastDownloadFailed(this, !1);
        }
        OnWebRTCFailed() {
          N.BroadcastDownloadFailed(this, !0);
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
        GetTimeAtMousePosition(e, t, a, r) {
          let i = _.c(e, t.left, t.right, a, r);
          return Math.floor(i + 0.5);
        }
        GetPercentOffsetFromTime(e, t) {
          let a = 0,
            r = 0;
          return (
            t == T.Timeline
              ? ((r = this.m_nVideoEndPos), (a = r - this.m_nTimelineDuration))
              : ((a = 0), (r = 0)),
            _.c(e, a, r, 0, 100)
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
      Object(r.b)([s.C], M.prototype, "m_bPaused", void 0),
        Object(r.b)([s.C], M.prototype, "m_nPlaybackTime", void 0),
        Object(r.b)([s.C], M.prototype, "m_bBuffering", void 0),
        Object(r.b)([s.C], M.prototype, "m_bOnLiveEdge", void 0),
        Object(r.b)([s.C], M.prototype, "m_nVolume", void 0),
        Object(r.b)([s.C], M.prototype, "m_bMuted", void 0),
        Object(r.b)([s.C], M.prototype, "m_bUserInputNeeded", void 0),
        Object(r.b)([s.C], M.prototype, "m_bIsReplay", void 0),
        Object(r.b)([s.C], M.prototype, "m_nTimelineDuration", void 0),
        Object(r.b)([s.C], M.prototype, "m_nVideoStartPos", void 0),
        Object(r.b)([s.C], M.prototype, "m_nVideoEndPos", void 0),
        Object(r.b)([s.C], M.prototype, "m_editorStartTime", void 0),
        Object(r.b)([s.C], M.prototype, "m_editorEndTime", void 0),
        Object(r.b)([s.k.bound], M.prototype, "StartBroadcast", null),
        Object(r.b)([s.k.bound], M.prototype, "StartClip", null),
        Object(r.b)([s.k.bound], M.prototype, "StartVOD", null),
        Object(r.b)([b.a], M.prototype, "OnVideoPlaying", null),
        Object(r.b)([b.a], M.prototype, "OnVideoPause", null),
        Object(r.b)([s.k.bound], M.prototype, "OnVideoTimeUpdate", null),
        Object(r.b)([s.k.bound], M.prototype, "OnGameDataUpdate", null),
        Object(r.b)([b.a], M.prototype, "OnDownloadFailed", null),
        Object(r.b)([b.a], M.prototype, "OnWebRTCRetry", null),
        Object(r.b)([b.a], M.prototype, "OnWebRTCFailed", null),
        Object(r.b)([b.a], M.prototype, "OnUserInputNeeded", null);
      const N = new k();
      window.uiBroadcastWatchStore = N;
    },
    "3y2B": function (e, t, a) {
      "use strict";
      a.d(t, "a", function () {
        return s;
      });
      var r = a("mrSG"),
        i = (a("q1tI"), a("2vnA"));
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
        Object(r.b)([i.C], s.prototype, "m_rgRunningEffects", void 0);
    },
    "44wC": function (e, t, a) {
      "use strict";
      a.d(t, "a", function () {
        return d;
      }),
        a.d(t, "b", function () {
          return m;
        });
      var r = a("mrSG"),
        i = a("vDqi"),
        n = a.n(i),
        s = a("2vnA"),
        o = a("q1tI"),
        l = (a("msu0"), a("Zdsb"), a("d4Nf"), a("sTxY"), a("/Q1a"));
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
          return Object(r.a)(this, void 0, void 0, function* () {
            const a = new Array(),
              r = new Array();
            if (
              (e.forEach((e) => {
                this.m_mapAppIDToLoadPromise.has(e)
                  ? r.push(this.m_mapAppIDToLoadPromise.get(e))
                  : this.m_mapAppToDemoInfo.has(e) || a.push(e);
              }),
              a.length > 0)
            ) {
              const e = this.InternalLoadAppIDsBatch(a, t);
              a.forEach((t) => this.m_mapAppIDToLoadPromise.set(t, e)),
                r.push(e);
            }
            return (yield Promise.all(r)).every((e) => !!e);
          });
        }
        InternalLoadAppIDsBatch(e, t) {
          var a, i, o;
          return Object(r.a)(this, void 0, void 0, function* () {
            try {
              for (e = e.sort(); e.length > 0; ) {
                const r = 50,
                  d = Math.min(r, e.length),
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
                  (null === (a = null == p ? void 0 : p.data) || void 0 === a
                    ? void 0
                    : a.success) ||
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
        const [t, a] = Object(o.useState)(d.Get().GetDemoEventInfo(e));
        return (
          Object(o.useEffect)(() => {
            !t &&
              e &&
              d
                .Get()
                .LoadAppIDsBatch([e])
                .then(() => {
                  d.Get().BHasDemoEventInfo(e) &&
                    a(d.Get().GetDemoEventInfo(e));
                });
          }, [e, t]),
          t
        );
      }
      Object(r.b)([s.C.shallow], d.prototype, "m_mapAppToDemoInfo", void 0),
        Object(r.b)([s.k], d.prototype, "Init", null),
        Object(r.b)([s.k], d.prototype, "LoadAppIDsBatch", null);
    },
    "4EJs": function (e, t, a) {
      "use strict";
      a.d(t, "f", function () {
        return z;
      }),
        a.d(t, "e", function () {
          return V;
        }),
        a.d(t, "a", function () {
          return Y;
        }),
        a.d(t, "b", function () {
          return K;
        }),
        a.d(t, "c", function () {
          return X;
        }),
        a.d(t, "d", function () {
          return J;
        });
      var r = a("TyAF"),
        i = a("q1tI"),
        n = a.n(i),
        s = (a("msu0"), a("Zdsb"), a("fsrB")),
        o = a("Lsvi"),
        l = a("O8Yk"),
        c = (a("XrGS"), a("xH93")),
        d = a("lfGQ"),
        m = (a("yfxr"), a("wijF")),
        u = (a("X/lQ"), a("Ys0h")),
        p = a("hAgw"),
        _ = a("RrtU"),
        h = a("7YTu"),
        b = a.n(h),
        g = a("KXdY"),
        f = a("i1T+"),
        v = a("1QaA"),
        S = a("vx0u"),
        y = a("7yn2"),
        B = a("1mk1"),
        w = a("PlCS"),
        C = a("bCaE"),
        E = a("poS6"),
        I = a("aF8t"),
        O = a("GbHM"),
        T = a("GXif"),
        R = a("/Q1a"),
        D = a("0JCO"),
        G = a("oGLD"),
        j = a("O8IP"),
        A = a("oEKi"),
        k = a("zy5s"),
        M = a.n(k),
        N = a("j/dN");
      const L = (e) => {
        var t, a, r, s;
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
            displayStoreItem: v,
            baseGameStoreItem: S,
            baseGameInfo: w,
          } = Object(f.a)(e, { include_trailers: !0, include_screenshots: !0 }),
          E = Object(G.g)(),
          I = Object(i.useRef)(),
          M = Object(i.useCallback)(() => {
            var e;
            null === (e = null == I ? void 0 : I.current) ||
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
        const L = Object(D.c)();
        if (!v) return null;
        let F =
          (null === (t = v.GetAssets().GetLibraryHeroURL()) || void 0 === t
            ? void 0
            : t.trim().length) > 0
            ? v.GetAssets().GetLibraryHeroURL()
            : v.GetAssets().GetPageBackgroundURL();
        const P = v.GetOnlyAllAgesSafeScreenshots();
        null == P || P.length;
        let U = v.GetMicroTrailer();
        S &&
          ((F && 11 !== v.GetAppType()) ||
            (F =
              (null === (a = S.GetAssets().GetLibraryHeroURL()) || void 0 === a
                ? void 0
                : a.trim().length) > 0
                ? S.GetAssets().GetLibraryHeroURL()
                : S.GetAssets().GetPageBackgroundURL()),
          U || (U = null == S ? void 0 : S.GetMicroTrailer()));
        const W = Object(d.b)(v.GetStorePageURL(), L),
          z = Object(d.c)(L),
          V = 0 == v.GetStoreItemType();
        return n.a.createElement(
          B.a,
          { appid: V && v.GetAppID() },
          n.a.createElement(
            o.a,
            {
              focusable: !0,
              className: j.SuperCapsuleCtn,
              autoFocus: e.bAutoFocus,
              onMouseEnter: () => {
                var e;
                null === (e = null == I ? void 0 : I.current) ||
                  void 0 === e ||
                  e.play();
              },
            },
            !E &&
              n.a.createElement(
                "div",
                { className: Object(O.a)(j.BGGradientTwo) },
                " "
              ),
            n.a.createElement(
              "div",
              { className: Object(O.a)(j.BGGradient) },
              n.a.createElement(
                "div",
                {
                  className: Object(O.a)(j.BGImage),
                  style: { backgroundImage: `url("${F}")` },
                },
                " "
              ),
              U &&
                !E &&
                n.a.createElement(
                  "video",
                  {
                    ref: I,
                    className: Object(O.a)(j.BGVideo),
                    playsInline: !0,
                    autoPlay: !0,
                    muted: !0,
                    loop: !0,
                  },
                  n.a.createElement("source", {
                    src: U.strWebMURL,
                    type: "video/webm",
                  }),
                  Boolean(!R.d.IN_LIBRARY && !R.d.IN_GAMEPADUI) &&
                    n.a.createElement("source", {
                      src: U.strMP4URL,
                      type: "video/mp4",
                    })
                )
            ),
            n.a.createElement(
              "div",
              { className: Object(O.a)(j.FeatureCtn) },
              n.a.createElement(
                "a",
                { href: W, className: Object(O.a)(j.Artwork) },
                n.a.createElement(A.c, {
                  snr: z,
                  appID: b.id,
                  classOverride: Object(O.a)("WishlistButton"),
                }),
                n.a.createElement(g.c, { appids: v.GetIncludedAppIDsOrSelf() }),
                (!Boolean(null == v ? void 0 : v.GetParentAppID()) ||
                  Boolean(S)) &&
                  n.a.createElement(X, { info: Boolean(S) ? w : b }),
                n.a.createElement(C.a, {
                  eDeckCompatibilityCategory:
                    (null === (r = null == S ? void 0 : S.GetPlatforms()) ||
                    void 0 === r
                      ? void 0
                      : r.steam_deck_compat_category) ||
                    (null === (s = v.GetPlatforms()) || void 0 === s
                      ? void 0
                      : s.steam_deck_compat_category),
                  className: j.DeckCompatIconOverride,
                }),
                Boolean(p && V)
                  ? n.a.createElement(N.a, { appid: v.GetAppID(), bIsMuted: _ })
                  : n.a.createElement(Y, {
                      info: h,
                      bHidePlatforms: u,
                      bHidePrice: m,
                    })
              ),
              n.a.createElement(
                "div",
                { className: Object(O.a)(j.Info) },
                n.a.createElement(
                  "a",
                  { className: j.Title, href: W },
                  v.GetName()
                ),
                n.a.createElement("div", { className: j.Reason }, c),
                V &&
                  n.a.createElement(
                    "div",
                    { className: j.StoreSaleItemRelease },
                    Object(T.p)(
                      "#Sale_ReleaseDate",
                      n.a.createElement(
                        "span",
                        null,
                        v.GetFormattedSteamReleaseDate()
                      )
                    )
                  ),
                V &&
                  n.a.createElement(
                    "div",
                    {
                      className: Object(O.a)(
                        k.StoreSaleItemReview,
                        j.StoreSaleItemReview
                      ),
                    },
                    n.a.createElement(A.b, { appInfo: b })
                  ),
                n.a.createElement(y.b, {
                  rgTagIDs: v.BHasTags()
                    ? v.GetTagIDs()
                    : null == S
                    ? void 0
                    : S.GetTagIDs(),
                  instanceNum: l,
                })
              )
            )
          )
        );
      };
      var F = a("OXjc"),
        P = a("5ZQm"),
        U = a("qpfI"),
        W = a("zWNq");
      const z = (e) => {
          let { displayStyle: t } = e;
          if ("bundle" == e.type || "sub" == e.type)
            return n.a.createElement(V, Object.assign({}, e));
          if (R.d.IN_GAMEPADUI)
            return n.a.createElement(V, Object.assign({}, e));
          switch (
            (!Object(I.a)() ||
              ("library" != t && "animated" != t) ||
              (t = "bordered"),
            t)
          ) {
            case "library":
              return n.a.createElement(x, Object.assign({}, e));
            case "animated":
              return n.a.createElement(L, Object.assign({}, e));
            case "bordered":
            case "full":
            default:
              return n.a.createElement(V, Object.assign({}, e));
          }
        },
        V = Object(r.a)((e) => {
          var t;
          const {
              myInstance: a,
              bIsHovered: r,
              setIsHovered: i,
              displayStoreItem: c,
              baseGameStoreItem: m,
              displayInfo: u,
              purchaseInfo: p,
              hoverType: _,
              nHoverId: h,
              artworkInfo: w,
              artworkStoreItem: E,
            } = Object(f.a)(e),
            {
              bShowDemoButton: I,
              bHidePrice: G,
              bUseSubscriptionLayout: j,
              bHidePlatforms: k,
              bHideContainedApps: L,
              bShowReviewSummary: F,
              bShowDeckCompatibilityDialog: P,
              bAutoFocus: z,
              fnOnClickOverride: V,
            } = e,
            x = Object(D.c)(),
            q = n.a.useMemo(
              () => (null == c ? void 0 : c.GetIncludedAppIDsOrSelf()),
              [c]
            );
          if (!c) return null;
          const Y = c.GetBestPurchaseOption().discount_pct,
            Q = c.GetIncludedAppIDs().length;
          let Z = c.GetShortDescription();
          (2 != c.GetStoreItemType() && 1 != c.GetStoreItemType()) ||
            (Z = Y
              ? Object(T.g)("#Sale_BundleSave_WithDiscount", Y, Q)
              : Object(T.g)("#Sale_BundleSave", Q));
          const X = Object(d.c)(x),
            J = c.GetStorePageURL(),
            $ = Boolean(!L && Q > 0),
            ee = c.BHasTags()
              ? c.GetTagIDs()
              : (null == m ? void 0 : m.BHasTags())
              ? m.GetTagIDs()
              : [],
            te = 0 == c.GetStoreItemType(),
            ae = Object(d.b)(J, x);
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
                  Object(S.a)(c, x),
                  { preferredFocus: $ }
                ),
                n.a.createElement(
                  "div",
                  { className: Object(O.a)(M.a.StoreSaleWidgetHalfLeft) },
                  n.a.createElement(
                    "a",
                    {
                      href: V ? void 0 : ae,
                      target: R.d.IN_CLIENT || V ? void 0 : "_blank",
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
                      Boolean(u && r) && n.a.createElement(W.a, { appInfo: u })
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
                    n.a.createElement(A.c, {
                      appID: u.id,
                      classOverride: Object(O.a)(
                        b.a.WishlistButtonNotTop,
                        "WishlistButton"
                      ),
                      snr: X,
                    }),
                  n.a.createElement(
                    "div",
                    { className: M.a.TitleCtn },
                    n.a.createElement(
                      "a",
                      {
                        href: V ? void 0 : ae,
                        target: R.d.IN_CLIENT ? void 0 : "_blank",
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
                    F && n.a.createElement(A.b, { appInfo: u })
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
                        Boolean(j && te)
                          ? n.a.createElement(N.a, { appid: u.id, bIsMuted: r })
                          : n.a.createElement(v.c, {
                              info: p,
                              bShowDemoButton: I,
                              bHidePrice: G,
                              bHideWishlistButton: !(
                                !R.d.IN_GAMEPADUI && c.BIsComingSoon()
                              ),
                              bShowDeckCompatibilityDialog: P,
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
                          n.a.createElement(v.a, { info: p }),
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
        x = Object(r.a)((e) => {
          var t, a, r, i, s;
          const {
              myInstance: o,
              setIsHovered: l,
              displayInfo: c,
              displayStoreItem: m,
              hoverType: u,
              nHoverId: p,
              purchaseInfo: _,
            } = Object(f.a)(e, { include_all_purchase_options: !0 }),
            {
              bHidePrice: h,
              bShowDemoButton: S,
              bShowPurchaseOptionsButton: w,
            } = e,
            [E, I] = n.a.useState(!1),
            G = () => I(!E),
            j = Object(D.c)(),
            k = n.a.useMemo(
              () => (null == m ? void 0 : m.GetIncludedAppIDsOrSelf()),
              [m]
            );
          if (!m) return null;
          const N = Object(d.c)(j),
            L = m.GetStorePageURL(),
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
                    P.a,
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
                  n.a.createElement(A.c, {
                    appID: W && m.GetAppID(),
                    classOverride: Object(O.a)(
                      b.a.WishlistButtonNotTop,
                      "WishlistButton"
                    ),
                    snr: N,
                  }),
                  n.a.createElement(
                    "div",
                    { className: M.a.TitleCtn },
                    n.a.createElement(
                      "a",
                      {
                        href: Object(d.b)(L, j),
                        target: R.d.IN_CLIENT ? void 0 : "_blank",
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
                      (null === (a = m.GetShortDescription()) || void 0 === a
                        ? void 0
                        : a.length) > 0 &&
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
                          null === (r = m.GetDeveloperNames()) || void 0 === r
                            ? void 0
                            : r.length
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
                      n.a.createElement(F.a, {
                        info: c,
                        bPopOutTrailerPlayback: !0,
                      })
                    )
                  ),
                  n.a.createElement(
                    "div",
                    { className: M.a.StoreSaleItemReview },
                    n.a.createElement(A.b, { appInfo: c })
                  ),
                  n.a.createElement(
                    "div",
                    { className: M.a.CapsuleBottomBar },
                    n.a.createElement(U.a, { item: c }),
                    n.a.createElement(v.c, {
                      info: _,
                      bShowDemoButton: S,
                      bHidePrice: h,
                      bShowPurchaseOptionsButton: w,
                      fnOnPurchaseOptionsClick: G,
                      bHideWishlistButton: !0,
                    })
                  ),
                  n.a.createElement(
                    "div",
                    { className: M.a.StoreSaleWidgetBgTint },
                    n.a.createElement(X, { info: c }),
                    n.a.createElement(C.a, {
                      eDeckCompatibilityCategory:
                        null === (s = m.GetPlatforms()) || void 0 === s
                          ? void 0
                          : s.steam_deck_compat_category,
                    })
                  )
                )
              ),
              n.a.createElement(v.b, {
                storeItem: m,
                bPurchaseOptionsExpanded: E,
                fnCollapseOptions: G,
              })
            )
          );
        });
      function H(e) {
        const { info: t } = e,
          [a] = Object(_.a)(t.id, Object(p.d)(t.type), {}),
          [r, i] = n.a.useState(null);
        return (
          n.a.useEffect(() => {
            a &&
              (1 == a.GetStoreItemType() || 2 == a.GetStoreItemType()
                ? i(a.GetIncludedAppIDs().map((e) => ({ id: e, type: "game" })))
                : console.error(
                    "ContentsPreviewList unexpected store item type: ",
                    a.GetStoreItemType()
                  ));
          }, [a]),
          r
            ? n.a.createElement(
                "div",
                { className: M.a.BundleContentPreview },
                n.a.createElement(
                  "div",
                  { className: M.a.ContentsCount },
                  Object(T.o)("#Sale_ContentPreview", r.length)
                ),
                n.a.createElement(
                  "div",
                  { className: M.a.PreviewCtn },
                  r
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
          [a] = Object(_.c)(t.id, Object(p.d)(t.type), { include_assets: !0 }),
          r = null == a ? void 0 : a.GetAssets().GetSmallCapsuleURL();
        return n.a.createElement(
          P.a,
          {
            type: Object(B.b)(t.type),
            id: t.id,
            hoverClassName: M.a.PreviewItem,
          },
          n.a.createElement("img", {
            src: r,
            className: M.a.PreviewImg,
            loading: "lazy",
            alt: null == a ? void 0 : a.GetName(),
          })
        );
      }
      const Y = (e) => {
          const {
            info: t,
            bShowAsMuted: a,
            bHidePrice: r,
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
                  a && M.a.Muted,
                  o
                ),
              },
              !s && n.a.createElement(U.a, { item: t }),
              !r &&
                n.a.createElement(
                  "span",
                  { className: M.a.BottomBarPriceInfo },
                  n.a.createElement(v.a, { info: t, bShowInLibrary: i })
                )
            ),
            l && n.a.createElement(Q, Object.assign({ creatorAccountID: l }, e))
          );
        },
        Q = (e) => {
          const { creatorAccountID: t, bShowAsMuted: a, strClassName: r } = e,
            [i, s] = Object(m.b)(t);
          return n.a.createElement(
            "div",
            { className: Object(O.a)(M.a.BottomCreatorRow, a && M.a.Muted, r) },
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
      function Z(e, t, a) {
        var r;
        if (
          (t
            ? a.push(
                e.GetAssets().GetHeaderURL(),
                e.GetAssets().GetMainCapsuleURL()
              )
            : a.push(
                e.GetAssets().GetMainCapsuleURL(),
                e.GetAssets().GetHeaderURL()
              ),
          1 ==
            (null === (r = e.GetIncludedAppIDs()) || void 0 === r
              ? void 0
              : r.length))
        ) {
          const r = u.a.Get().GetApp(e.GetIncludedAppIDs()[0]);
          r
            ? t
              ? a.push(
                  r.GetAssets().GetHeaderURL(),
                  r.GetAssets().GetMainCapsuleURL()
                )
              : a.push(
                  r.GetAssets().GetMainCapsuleURL(),
                  r.GetAssets().GetHeaderURL()
                )
            : ("dev" != R.d.WEB_UNIVERSE && "beta" != R.d.WEB_UNIVERSE) ||
              console.log(
                "PushDefaultCapsuleImages single app in package/bundle missing:",
                e.GetIncludedAppIDs()[0]
              );
        }
      }
      function K(e) {
        const { info: t, imageType: a } = e,
          [r] = Object(_.a)(t.id, Object(p.d)(t.type), { include_assets: !0 });
        if ("library" === a) return n.a.createElement(X, { info: t });
        let i = new Array();
        Z(r, "header" === a, i), (i = i.filter((e) => Boolean(e) && "" !== e));
        let s,
          o,
          l = "";
        switch (a) {
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
          n.a.createElement(E.b, {
            lazyLoad: !0,
            srcs: i,
            className: Object(O.a)(M.a.CapsuleImage),
            width: s,
            height: o,
            alt: r.GetName(),
          })
        );
      }
      function X(e) {
        var t;
        const { info: a } = e,
          [r] = Object(_.a)(a.id, Object(p.d)(a.type), { include_assets: !0 }),
          i = new Array(),
          [s, o] = n.a.useState(null);
        if (
          (i.push(r.GetAssets().GetLibraryCapsuleURL() || ""),
          0 ==
            (null === (t = r.GetIncludedAppIDs()) || void 0 === t
              ? void 0
              : t.length))
        ) {
          const e = u.a.Get().GetApp(r.GetIncludedAppIDs()[0]);
          e &&
            i.push(null == e ? void 0 : e.GetAssets().GetLibraryCapsuleURL());
        }
        const l = i.length - 1;
        return (
          Z(r, !0, i),
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
            n.a.createElement(E.b, {
              lazyLoad: !0,
              srcs: i,
              className: M.a.CapsuleImage,
              width: M.a.libraryAssetImgWidth,
              height: M.a.libraryAssetImgHeight,
              alt: r.GetName(),
              onImageError: (e) => {
                const t = i.indexOf(e);
                t >= l && t < i.length - 1 && o(i[t + 1]);
              },
            })
          )
        );
      }
      const J = Object(r.a)((e) => {
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
                  R.d.MEDIA_CDN_COMMUNITY_URL +
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
    "5ZQm": function (e, t, a) {
      "use strict";
      a.d(t, "b", function () {
        return c;
      }),
        a.d(t, "a", function () {
          return d;
        });
      var r = a("q1tI"),
        i = a("lfGQ"),
        n = (a("hCpY"), a("/Q1a")),
        s = a("0JCO"),
        o = a("fsrB"),
        l = a("f5iL");
      function c(e) {
        const {
            type: t,
            id: a,
            hoverClassName: i,
            fnGetIDOverride: s,
            fnHoverState: o,
            children: c,
          } = e,
          d = r.useRef(null),
          m = r.useCallback(
            (e) => {
              "clan" != t &&
                (o && o(!0),
                window.GameHover &&
                  window.GameHover(s ? s() : d.current, e, "global_hover", {
                    type: t,
                    id: a,
                    v6: 1,
                  }));
            },
            [t, o, s, a]
          ),
          u = r.useCallback(
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
          r.createElement(
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
        const { id: t, type: a, strExtraParams: l } = e,
          d = Object(s.c)(),
          m =
            "clan" == a
              ? Object(i.b)(
                  `${n.d.STORE_BASE_URL}curator/${t}${l ? `?${l}` : ""}`,
                  d
                )
              : Object(i.b)(
                  `${n.d.STORE_BASE_URL}${a}/${t}${l ? `?${l}` : ""}`,
                  d
                );
        return r.createElement(
          c,
          Object.assign({}, e),
          r.createElement(
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
    "6ese": function (e, t, a) {
      "use strict";
      a.d(t, "c", function () {
        return D;
      }),
        a.d(t, "b", function () {
          return G;
        }),
        a.d(t, "a", function () {
          return j;
        });
      var r = a("mrSG"),
        i = a("vDqi"),
        n = a.n(i),
        s = a("2vnA"),
        o = a("wd/R"),
        l = (a("msu0"), a("Zdsb"), a("/4gK")),
        c = (a("XrGS"), a("oleE")),
        d = a("AM5O"),
        m = a("KVor"),
        u = a("Ys0h"),
        p = a("upZW"),
        _ = (a("sTxY"), a("f5iL")),
        h = a("TqgT"),
        b = a("vYsE"),
        g = a("GXif"),
        f = a("/Q1a"),
        v = a("FmLm"),
        S = a("VJsr"),
        y = a("MKRT"),
        B = a("2t98"),
        w = a("ue1x"),
        C = a("IEEs");
      function E(e, t, a, r) {
        return {
          strId: "section-" + t,
          strSectionLabel: t,
          rtSectionStart: a,
          rtSectionEnd: r,
          bIsFutureSection: a >= e,
          nRenderedHeight: 2500,
          nTopOffset: 0,
        };
      }
      class I {
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
            v.a.Get().HintLoad();
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
              (this.BIsGlobalCalendar() && !f.l.accountid)
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
          const a = this.m_currentView.get();
          a && a.dispose();
          const r = this.BIsSingleSourceMuted(),
            i = new O(
              () => this.m_rgSortedCalendarEvents,
              this.LoadAdditionalEvents,
              this.BHitEventHorizon,
              e,
              t,
              r
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
          const a = this.m_currentView.get();
          return a
            ? a.GetCalendarItemsInTimeRange(e, t)
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
          var a;
          return null === (a = this.m_currentView.get()) || void 0 === a
            ? void 0
            : a.GetCurrentlyLoadedEventCount(e, t);
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
            a = e.getTime() / 1e3;
          t.push(E(a, Object(g.g)("#EventCalendar_FutureEventsHeader"), a));
          const r = new Date(e);
          r.setHours(0, 0, 0, 1);
          let i = r.getTime() / 1e3;
          t.push(E(a, Object(g.g)("#Time_Today"), i, a)),
            r.setDate(r.getDate() - 1);
          let n = i;
          (i = r.getTime() / 1e3),
            t.push(E(a, Object(g.g)("#Time_Yesterday"), i, n));
          const s =
              this.m_rgSortedCalendarEvents[
                this.m_rgSortedCalendarEvents.length - 1
              ],
            o = s ? s.start_time : a;
          let l = o > i;
          for (let e = 0; e < 5 && !l; e++)
            r.setDate(r.getDate() - 1),
              (n = i),
              (i = r.getTime() / 1e3),
              t.push(E(a, Object(g.i)(r), i, n)),
              (l = o > i);
          const c = new Date(r);
          let d = i;
          for (; c.getMonth() == e.getMonth() && 1 != c.getDate() && !l; ) {
            c.setDate(c.getDate() - 7);
            const e = c.getTime() / 1e3;
            t.push(E(a, Object(g.h)(d - 1), e, d)), (l = o > e), (d = e);
          }
          const m = new Date(e);
          m.setHours(0, 0, 0, 1), m.setDate(1);
          let u = d;
          for (let r = 1; !l; r++) {
            const i = new Date(m);
            i.setMonth(e.getMonth() - r, 1);
            const n = i.getTime() / 1e3;
            t.push(E(a, Object(g.h)(n), n, u)), (l = o > n), (u = n);
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
          let a;
          this.m_key.rtCalendarEnd && (a = this.m_key.rtCalendarEnd);
          const r =
            this.m_rgSortedCalendarEvents.length > 0 &&
            this.m_rgSortedCalendarEvents[0];
          r && (a = r.start_time), a || (a = e.getTime() / 1e3);
          const i = e.getTime() / 1e3,
            n = new Date(e);
          n.setHours(24, 0, 0, 0);
          let s = n.getTime() / 1e3;
          t.push(
            E(
              i,
              Object(g.g)(
                this.m_key.bSectionByDay ? "#Time_UpNext" : "#Time_Today"
              ),
              i,
              s
            )
          );
          let l = a <= s,
            c = s;
          n.setDate(n.getDate() + 1),
            (s = n.getTime() / 1e3),
            l || t.push(E(i, Object(g.g)("#Time_Tomorrow"), c, s)),
            (l = a <= s);
          const d = 6 - o(e).weekday();
          for (let e = 2; e <= d && !l; e++) {
            c = s;
            const e = Object(g.i)(n);
            n.setDate(n.getDate() + 1),
              (s = n.getTime() / 1e3),
              t.push(E(i, e, c, s)),
              (l = a <= s);
          }
          if (this.m_key.bSectionByDay)
            for (; !l; ) {
              c = s;
              const e = Object(g.j)(n);
              n.setDate(n.getDate() + 1),
                (s = n.getTime() / 1e3),
                t.push(E(i, e, c, s)),
                (l = a <= s);
            }
          else {
            const r = new Date(n);
            let c = s;
            const d = o(e).daysInMonth();
            if (r.getMonth() == e.getMonth() && r.getDate() != d && !l) {
              r.setDate(r.getDate() + 7);
              const e = r.getTime() / 1e3;
              t.push(E(i, Object(g.g)("#EventCalendar_NextWeek"), c, e)),
                (l = a <= e),
                (c = e);
            }
            const m = new Date(e);
            let u;
            if (
              (m.setMonth(m.getMonth() + 1),
              m.setDate(1),
              m.setHours(0, 0, 0, 0),
              r < m && !l)
            ) {
              const e = m.getTime() / 1e3;
              t.push(E(i, Object(g.g)("#EventCalendar_LaterThisMonth"), c, e)),
                (l = a <= e),
                (u = e);
            } else u = c;
            for (let r = 2; !l; r++) {
              const n = new Date(m);
              n.setMonth(e.getMonth() + r);
              const s = n.getTime() / 1e3;
              t.push(E(i, Object(g.h)(u), u, s)), (l = a <= s), (u = s);
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
          return Object(r.a)(this, void 0, void 0, function* () {
            yield v.a.Get().HintLoad(),
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
          for (const a of e) t.SetEventAsRead(a);
        }
        RegisterEventVotes(e) {
          if (!e) return;
          const t = d.a.Get();
          for (const a of e) {
            const e = void 0 === a.vote ? void 0 : Boolean(a.vote);
            t.SetVote(a.id, e);
          }
        }
        RegisterCalendarEvents(e) {
          if (e) {
            let t = !1;
            for (const a of e)
              this.BInternalInsertCalendarEventItem(a) && (t = !0);
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
          const a =
              "forward" === e
                ? this.m_bFinishedSearchingForward
                : this.m_bFinishedSearchingBackward,
            r = this.GetTimeEdgeForDirection(e, void 0);
          return a || r !== t
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
          return Object(r.a)(this, void 0, void 0, function* () {
            if (this.BHitEventHorizon(e)) return 1;
            let a = this.GetRequestInFlight(e);
            if (a) return a;
            const i =
                f.d.STORE_BASE_URL + "events/ajaxgetusereventcalendarrange/",
              s =
                "forward" === e
                  ? this.m_nForwardStuckCount
                  : this.m_nBackwardStuckCount,
              o = s < 3 ? s : 0,
              l = s >= 3 ? 1 : 0,
              c = ("dev" === f.d.WEB_UNIVERSE ? 50 : 250) + 50 * o,
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
              (a = n.a
                .get(i, {
                  params: m,
                  cancelToken: t ? t.token : void 0,
                  withCredentials: !0,
                })
                .then((a) =>
                  Object(r.a)(this, void 0, void 0, function* () {
                    if (
                      (this.SetRequestInFlight(e, null), 1 == a.data.success)
                    ) {
                      if (
                        (yield this.RegisterCalendarEventsAndModels(a.data),
                        this.UpdateStuckCounters(e, d))
                      )
                        return this.LoadAdditionalEvents(e, t);
                    } else console.error("LoadAdditionalEvents was not successful: Msg" + a.data.msg);
                    return a.data.success;
                  })
                )
                .catch((t) => {
                  this.SetRequestInFlight(e, null);
                  let a = Object(h.a)(t);
                  return (
                    console.error(
                      "LoadAdditionalEvents hit error " + a.strErrorMsg,
                      a
                    ),
                    "forward" == e
                      ? (this.m_bFinishedSearchingForward = !0)
                      : (this.m_bFinishedSearchingBackward = !0),
                    2
                  );
                })),
              this.SetRequestInFlight(e, a),
              a
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
            a = this.m_mapCalendarClansByID.get(e.clanid);
          if (!t && !a)
            return console.log("No AppInfo or ClanInfo For: ", e), !1;
          const r = new l.d();
          return (
            (r.clanid = e.clanid),
            (r.unique_id = e.unique_id),
            (r.event_type = e.event_type),
            (r.appid = e.appid),
            (r.start_time = e.start_time),
            (r.score = e.score),
            (r.appInfo = t),
            (r.clanInfo = a),
            this.m_rgSortedCalendarEvents.push(r),
            this.m_mapCalendarEventsByGid.set(r.unique_id, r),
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
          return Object(r.a)(this, void 0, void 0, function* () {
            let a = e.appInfo ? e.appid : void 0,
              r = e.clanInfo ? e.clanInfo.clanid : void 0;
            null != a || null != r
              ? (yield C.a.Get().UpdateCommunitionSetting(t, a, r),
                S.b.RecordAppInteractionEvent(a, S.a.k_eMuted))
              : Object(_.a)(
                  !1,
                  "Both clan id and account id are missing, cannot change communication status"
                );
          });
        }
      }
      Object(r.b)([s.C], I.prototype, "m_mapCalendarEventsByGid", void 0),
        Object(r.b)([s.C], I.prototype, "m_rgSortedCalendarEvents", void 0),
        Object(r.b)([s.C], I.prototype, "m_bFinishedSearchingForward", void 0),
        Object(r.b)([s.C], I.prototype, "m_bFinishedSearchingBackward", void 0),
        Object(r.b)([s.C], I.prototype, "m_rgCalendarSections", void 0),
        Object(r.b)([s.C], I.prototype, "m_rgFutureSections", void 0),
        Object(r.b)([s.C], I.prototype, "m_collectionMetaData", void 0),
        Object(r.b)([s.k], I.prototype, "InitCalendarSections", null),
        Object(r.b)([s.k], I.prototype, "InitFutureCalendarSections", null),
        Object(r.b)(
          [s.k],
          I.prototype,
          "RegisterCalendarEventsAndModels",
          null
        ),
        Object(r.b)([s.k], I.prototype, "RegisterCalendarApps", null),
        Object(r.b)([s.k], I.prototype, "RegisterCalendarClans", null),
        Object(r.b)([s.k], I.prototype, "RegisterReadEvents", null),
        Object(r.b)([s.k], I.prototype, "RegisterEventVotes", null),
        Object(r.b)([s.k], I.prototype, "RegisterCalendarEvents", null),
        Object(r.b)([b.a], I.prototype, "BHitEventHorizon", null),
        Object(r.b)([s.k.bound], I.prototype, "LoadAdditionalEvents", null),
        Object(r.b)(
          [s.k],
          I.prototype,
          "UpdateEventBlockFromCalendarEvent",
          null
        );
      class O {
        constructor(e, t, a, i, n, o) {
          (this.m_rgLoadedEventsBox = s.C.box([])),
            (this.m_lastLoadLatch = null),
            (this.m_fnGetUnfilteredEvents = e),
            (this.m_fnLoadAdditionalEvents = t),
            (this.m_fnBHitEventHorizon = a),
            (this.m_fnBIsEventInView = i),
            (this.m_bSkipStorePreferenceCheck = n),
            (this.m_bAllowMutedAndIgnoredSources = o),
            (this.m_rgAutorunDisposer = Object(s.l)(() =>
              Object(r.a)(this, void 0, void 0, function* () {
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
                  v.a.Get().BIsGameIgnored(e.appid))
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
                v.a.Get().BIsIgnoringCurator(c.a.InitFromClanID(e.clanid)))
            )
              return !1;
            return !0;
          });
        }
        BIsCompleteThroughTime(e, t) {
          if (this.m_fnBHitEventHorizon(e)) return !0;
          const a = this.m_fnGetUnfilteredEvents();
          return "forward" === e
            ? t && a.length > 0 && a[0].start_time > t
            : a.length > 0 && a[a.length - 1].start_time < t;
        }
        EnsureRangeIsLoaded(e, t) {
          return Object(r.a)(this, void 0, void 0, function* () {
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
          const a = this.filteredAndCheckedEvents.filter(
              (a) => a.start_time >= e && (!t || a.start_time < t)
            ),
            r = this.BIsCompleteThroughTime("forward", t),
            i = this.BIsCompleteThroughTime("backward", e);
          return { rgCalendarItems: a, bIsComplete: r && i };
        }
        GetCurrentlyLoadedEvents() {
          return this.filteredAndCheckedEvents;
        }
        GetCurrentlyLoadedEventCount(e, t) {
          let a = 0;
          this.filteredAndCheckedEvents.forEach((r) => {
            r.start_time >= e && (!t || r.start_time < t) && a++;
          });
          const r = this.BIsCompleteThroughTime("forward", t),
            i = this.BIsCompleteThroughTime("backward", e);
          return { nCount: a, bIsComplete: r && i };
        }
        BIsViewEmpty() {
          return this.filteredAndCheckedEvents.length > 0;
        }
        GetActiveEventsAt(e) {
          return this.filteredAndCheckedEvents
            .map((e) => m.b.GetClanEventModel(e.unique_id))
            .filter((t) => {
              if (t) {
                const a = t.endTime || t.startTime + 3600;
                return e >= t.startTime && e < a;
              }
              return !1;
            });
        }
      }
      Object(r.b)([s.n.struct], O.prototype, "viewFilteredEvents", null),
        Object(r.b)(
          [s.n.struct],
          O.prototype,
          "filteredAndCheckedEvents",
          null
        );
      const T = s.C.box(null),
        R = new Map();
      function D(e) {
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
          T.get() !== t && (T.set(t), R.has(t) || R.set(t, new I(e))),
          t
        );
      }
      function G() {
        return null == T.get() && D({}), R.get(T.get());
      }
      function j() {
        return null !== T;
      }
      window.g_EventCalendarMap = R;
    },
    "6iBs": function (e, t, a) {
      "use strict";
      a.d(t, "a", function () {
        return n;
      });
      var r = a("/Q1a"),
        i = (a("msu0"), a("2vnA"));
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
          let a = r.d.LANGUAGE;
          return s(
            e,
            this.GetTokenList(a),
            "english" != a ? this.GetTokenList("english") : null,
            this.m_appid,
            t
          );
        }
        SubstituteParams(e, t) {
          let a = r.d.LANGUAGE;
          return o(
            e,
            this.GetTokenList(a),
            "english" != a ? this.GetTokenList("english") : null,
            this.m_appid,
            t
          );
        }
      }
      function s(e, t, a, i, n) {
        if (!e.startsWith("#"))
          return console.log("Token doesn't start with #:", e), "";
        let s = e;
        e = e.toLowerCase();
        let l = "";
        if (
          (t && t.has(e) && (l = t.get(e)),
          !l && a && a.has(e) && (l = a.get(e)),
          l)
        )
          l = o(l, t, a, i, n);
        else if (
          ((t || a) &&
            console.log(
              "No loc found for appid",
              i,
              s,
              "Tokens:",
              t,
              "Fallback:",
              a
            ),
          t && 1 != r.d.EUNIVERSE)
        )
          return e;
        return l;
      }
      function o(e, t, a, r, i) {
        let n = e.match(/{[A-za-z0-9_%#:]+}/g);
        if (n)
          for (let o of n) {
            let n = s(l(o.slice(1, -1), i), t, a, r, i);
            if (!n) return "";
            e = e.replace(o, n);
          }
        return (e = l(e, i));
      }
      function l(e, t) {
        let a = e.match(/%[A-Za-z0-9_:]+%/g);
        if (a)
          for (let r of a) {
            let a = r.slice(1, -1).toLowerCase(),
              i = t.get(a);
            null == i
              ? console.log("No rich presence found for", a)
              : (e = e.replace(r, i));
          }
        return e;
      }
    },
    "7YTu": function (e, t, a) {
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
    "7myZ": function (e, t, a) {
      "use strict";
      a.d(t, "a", function () {
        return p;
      });
      var r = a("mrSG"),
        i = a("q1tI"),
        n = a.n(i),
        s = a("msu0"),
        o = a("Zdsb"),
        l = a("GXif"),
        c = a("pSt8"),
        d = a("/Q1a"),
        m = a("hCpY");
      class u {
        constructor() {
          (this.m_bUserHasVolumePreference = !1),
            (this.m_flVolumePreference = 0);
        }
        BUserHasVolumePreference() {
          return this.m_bUserHasVolumePreference;
        }
        SetVolumePreference(e) {
          (this.m_flVolumePreference = e),
            (this.m_bUserHasVolumePreference = !0);
        }
        GetVolumePreference() {
          return this.m_flVolumePreference;
        }
        BVolumePreferenceMuted() {
          return this.m_flVolumePreference < 0.001;
        }
        static Get() {
          return u.s_Singleton || (u.s_Singleton = new u()), u.s_Singleton;
        }
      }
      Object(r.b)([m.b], u.prototype, "BUserHasVolumePreference", null),
        Object(r.b)([m.b], u.prototype, "SetVolumePreference", null);
      const p = (e) => {
        const { video: t, bAutoPlay: a, bControls: r, bLoop: m, bMuted: p } = e,
          _ = Object(i.useMemo)(() => {
            var e;
            return Boolean(
              null === (e = t.rgVideoTracks) || void 0 === e
                ? void 0
                : e.some((e) => "subtitles" == e.sKind || "captions" == e.sKind)
            );
          }, [t.rgVideoTracks]),
          [h, b] = n.a.useState(!1);
        if (!t.rgVideoSources || !t.rgVideoSources.length) return null;
        const g = (e) => {
            const t = new URL(e);
            return (
              (t.search =
                (t.search ? t.search + "&" : "?") + "origin=" + Object(d.f)()),
              t.toString()
            );
          },
          f = t.rgVideoSources
            .filter((e) => Boolean(e.sURL))
            .map((e) =>
              n.a.createElement("source", {
                key: e.sURL,
                src: g(e.sURL),
                type: e.sFormat,
              })
            ),
          v = t.rgVideoTracks
            ? t.rgVideoTracks.map((e) => {
                let a = e.eLanguage;
                if (d.d.EREALM === o.h.k_ESteamRealmChina)
                  if (l.b.IsELanguageValidInRealm(a, o.h.k_ESteamRealmChina))
                    a = l.b.GetELanguageFallback(a);
                  else {
                    if (6 !== a) return null;
                    if (
                      t.rgVideoTracks.find(
                        (e) => l.b.GetELanguageFallback(e.eLanguage) === a
                      )
                    )
                      return null;
                  }
                else if (
                  !l.b.IsELanguageValidInRealm(a, o.h.k_ESteamRealmGlobal)
                )
                  return null;
                return n.a.createElement("track", {
                  key: e.sURL + a,
                  src: g(e.sURL),
                  kind: e.sKind,
                  default: e.bDefault,
                  srcLang: Object(s.e)(a),
                  label: Object(l.g)("#language_selection_" + Object(s.d)(a)),
                });
              })
            : null;
        let S;
        (!(function (e) {
          return !(
            !Object(c.a)(e.sPoster) ||
            (e.rgVideoSources &&
              e.rgVideoSources.some((e) => !Object(c.a)(e.sURL))) ||
            (e.rgVideoTracks &&
              e.rgVideoTracks.some((e) => !Object(c.a)(e.sURL)))
          );
        })(t) ||
          (_ && "public" == d.d.WEB_UNIVERSE)) &&
          (S = "anonymous");
        const y = p || (a && u.Get().BVolumePreferenceMuted()),
          B = t.sPoster ? g(t.sPoster) : "";
        return n.a.createElement(
          "video",
          {
            width: "100%",
            height: "auto",
            autoPlay: a,
            muted: y,
            playsInline: !0,
            controls: r,
            poster: B,
            loop: m,
            crossOrigin: S,
            onVolumeChange: (e) => {
              const t = e.target,
                a = t.muted ? 0 : t.volume;
              h && u.Get().SetVolumePreference(a);
            },
            onPlay: (e) => {
              const t = e.target,
                r = 0 == t.currentTime,
                i = u.Get().BUserHasVolumePreference();
              if ((b(!0), r))
                if (i || a)
                  i &&
                    ((t.volume = u.Get().GetVolumePreference()),
                    (t.muted = u.Get().BVolumePreferenceMuted()));
                else {
                  const e = t.muted ? 0 : t.volume;
                  u.Get().SetVolumePreference(e);
                }
            },
          },
          f,
          v
        );
      };
    },
    "7yn2": function (e, t, a) {
      "use strict";
      a.d(t, "b", function () {
        return p;
      }),
        a.d(t, "a", function () {
          return _;
        });
      var r = a("q1tI"),
        i = a.n(r),
        n = a("msu0"),
        s = a("/cMS"),
        o = a("zy5s"),
        l = a.n(o),
        c = a("PlCS"),
        d = a("GbHM"),
        m = a("GXif"),
        u = a("/Q1a");
      const p = (e) => {
        const { rgTagIDs: t, instanceNum: a, bShowEvenIfNoTags: r } = e,
          n = Object(s.b)(t);
        return (null == n ? void 0 : n.length) > 0 || r
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
                        key: "tag_" + a + "_" + e.tagid,
                        tag: e,
                      })
                    )
                  )
                : i.a.createElement("div", null, Object(m.g)("#Broadcast_None"))
            )
          : null;
      };
      function _(e) {
        const { tagid: t, className: a } = e,
          r = Object(s.c)(t);
        if (!r) return null;
        const o = Object(n.e)(Object(n.g)(u.d.LANGUAGE)),
          m = `${u.d.STORE_BASE_URL}tags/${o}/${null == r ? void 0 : r.name}`;
        return i.a.createElement(
          c.b,
          { url: m, className: Object(d.a)(l.a.Tag, "WidgetTag", a) },
          r.name
        );
      }
      function h(e) {
        const { tag: t, className: a } = e,
          r = Object(n.e)(Object(n.g)(u.d.LANGUAGE)),
          s = `${u.d.STORE_BASE_URL}tags/${r}/${t.name}`;
        return i.a.createElement(
          c.b,
          { url: s, className: Object(d.a)(l.a.Tag, "WidgetTag", a) },
          t.name
        );
      }
    },
    "8r/D": function (e, t, a) {
      "use strict";
      a.d(t, "a", function () {
        return l;
      }),
        a.d(t, "b", function () {
          return c;
        });
      var r = a("mrSG"),
        i = a("QwK/"),
        n = a("/Q1a"),
        s = a("vDqi"),
        o = a.n(s);
      a("ztGc");
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
          return Object(r.a)(this, void 0, void 0, function* () {
            let e = [];
            try {
              let t = yield o.a.get(
                n.d.CHAT_BASE_URL + "actions/EmoticonData",
                { withCredentials: !0 }
              );
              if (t.data.emoticons)
                for (let a of t.data.emoticons) {
                  let t = a.name;
                  if (t.startsWith("^")) e.push({ name: t });
                  else {
                    let r = { name: t.substr(1, t.length - 2) },
                      i = r.name.toLowerCase();
                    i != r.name && (r.name_normalized = i),
                      a.time_last_used && (r.last_used = a.time_last_used),
                      a.use_count && (r.use_count = a.use_count),
                      a.time_received && (r.time_received = a.time_received),
                      a.appid && (r.appid = a.appid),
                      e.push(r);
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
    "9vnD": function (e, t, a) {
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
    AM5O: function (e, t, a) {
      "use strict";
      a.d(t, "b", function () {
        return _;
      }),
        a.d(t, "a", function () {
          return v;
        }),
        a.d(t, "c", function () {
          return S;
        });
      var r = a("mrSG"),
        i = a("vDqi"),
        n = a.n(i),
        s = a("2vnA"),
        o = (a("msu0"), a("Zdsb"), a("9XWO")),
        l = (a("XrGS"), a("KjDl")),
        c = a("3u1o"),
        d = a("vYsE"),
        m = a("/Q1a"),
        u = (a("sTxY"), a("TqgT"));
      a("XThB");
      class p {
        constructor(e) {
          (this.m_setShownEvents = new Set()),
            (this.m_setReadEvents = new Set()),
            (this.m_rgPendingUpload = []),
            (this.m_schUpload = new c.b()),
            (this.m_bUploading = !1),
            (this.m_CMInterface = e);
        }
        MarkEventShown(e, t, a) {
          let r = this.MakeKey(e, a);
          if (this.m_setShownEvents.has(r)) return !1;
          this.m_setShownEvents.add(r);
          let i = new l.e();
          return (
            i.set_event_gid(e),
            i.set_clanid(t),
            i.set_display_location(a),
            i.set_mark_shown(!0),
            this.QueueForUpload(i),
            !0
          );
        }
        MarkEventRead(e, t, a) {
          let r = this.MakeKey(e, a);
          if (this.m_setReadEvents.has(r)) return !1;
          this.m_setReadEvents.add(r);
          let i = new l.e();
          return (
            i.set_event_gid(e),
            i.set_clanid(t),
            i.set_display_location(a),
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
          return Object(r.a)(this, void 0, void 0, function* () {
            if (!this.m_bUploading) return this.UploadPendingData();
          });
        }
        UploadPendingData() {
          return Object(r.a)(this, void 0, void 0, function* () {
            if (this.m_bUploading) return;
            this.m_schUpload.Cancel();
            let e = this.m_rgPendingUpload.splice(0, 30);
            if (0 == e.length) return;
            let t = !1;
            if (this.m_CMInterface) {
              let a = o.b.Init(l.d);
              for (let t of e) a.Body().add_markings(t);
              this.m_bUploading = !0;
              let r = yield l.g.MarkPartnerEventsForUser(
                this.m_CMInterface.GetServiceTransport(),
                a
              );
              (this.m_bUploading = !1), (t = 1 == r.GetEResult());
            } else {
              if (!m.l.logged_in) return;
              let a = e.map((e) => e.toObject()),
                r = Object(m.f)() + "actions/ajaxmarkpartnerevents";
              const i = new FormData();
              i.append("sessionid", m.d.SESSIONID),
                i.append("request", JSON.stringify(a));
              try {
                t =
                  1 ==
                  (yield n.a.post(r, i, { withCredentials: !0 })).data.success;
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
      Object(r.b)([d.a], p.prototype, "UploadPendingData", null);
      var _,
        h = a("oleE"),
        b = a("f5iL"),
        g = a("q1tI");
      class f {
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
      Object(r.b)([s.C], f.prototype, "clanid", void 0),
        Object(r.b)([s.C], f.prototype, "appid", void 0),
        Object(r.b)([s.C], f.prototype, "can_edit", void 0),
        Object(r.b)([s.C], f.prototype, "owns_app", void 0),
        Object(r.b)([s.C], f.prototype, "follows_app", void 0),
        Object(r.b)([s.C], f.prototype, "support_user", void 0),
        Object(r.b)([s.C], f.prototype, "valve_admin", void 0),
        Object(r.b)([s.C], f.prototype, "limited_user", void 0),
        Object(r.b)([s.C], f.prototype, "event_ignored", void 0),
        Object(r.b)([s.C], f.prototype, "event_followed", void 0),
        Object(r.b)([s.C], f.prototype, "event_followed_flags", void 0),
        (function (e) {
          (e[(e.k_ENotifyFlagNone = 0)] = "k_ENotifyFlagNone"),
            (e[(e.k_ENotifyFlagByEmail = 1)] = "k_ENotifyFlagByEmail"),
            (e[(e.k_ENotifyFlagByPush = 2)] = "k_ENotifyFlagByPush");
        })(_ || (_ = {}));
      class v {
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
              !!v.s_EventUserStore,
              "Have not yet initialized global EventUserStore"
            ),
            v.s_EventUserStore
          );
        }
        static IsInitialized() {
          return !!v.s_EventUserStore;
        }
        static InitGlobal(e) {
          return Object(r.a)(this, void 0, void 0, function* () {
            if (!v.s_EventUserStore) {
              const t = new v();
              yield t.Init(e),
                (v.s_EventUserStore = t),
                "dev" == m.d.WEB_UNIVERSE && (window.g_EventUserStore = t);
            }
          });
        }
        Init(e) {
          return Object(r.a)(this, void 0, void 0, function* () {
            (this.m_cm = e), (this.m_tracker = new p(e));
            const t = Object(m.i)(
              "partnereventpermissions",
              "application_config"
            );
            this.ValidateStoreDefault(t) &&
              (Object(s.G)(() => {
                t.forEach((e) => {
                  let t = new f(e.clanid),
                    a = { result: t, promise: v.RemapToPromise(t) };
                  this.CopyFromResponseToTrack(a, e),
                    this.m_mapClanToUserPermissions.set(e.clanid, a);
                });
              }),
              ("dev" != m.d.WEB_UNIVERSE && "beta" != m.d.WEB_UNIVERSE) ||
                console.log(
                  "CEventUserStore has loaded",
                  this.m_mapClanToUserPermissions.size,
                  this.m_mapClanToUserPermissions
                ));
            let a = Object(m.i)("uservotes", "application_config");
            a &&
              Object(s.G)(() => {
                a.forEach((e) => {
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
          return Object(r.a)(this, void 0, void 0, function* () {
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
          if (!e || !e.BIsValid()) return new f(0);
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
        BFollowsEventAndNotifiedBy(e, t, a) {
          let r = this.GetPartnerEventPermissions(e),
            i = r.event_followed.indexOf(t);
          return -1 !== i && (r.event_followed_flags[i] & a) == a;
        }
        BIgnoresEvent(e, t) {
          return (
            -1 != this.GetPartnerEventPermissions(e).event_ignored.indexOf(t)
          );
        }
        LoadSingleAppEventPermissions(e) {
          return Object(r.a)(this, void 0, void 0, function* () {
            let t = e.GetAccountID(),
              a = this.m_mapClanToUserPermissions.get(t);
            return (
              a ||
                ((a = {
                  promise: this.InternalLoadSingleAppEventPermissions(e),
                  result: new f(t),
                }),
                this.m_mapClanToUserPermissions.set(t, a)),
              a.promise
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
          return Object(r.a)(this, void 0, void 0, function* () {
            let t = null,
              a = e.GetAccountID(),
              r = !Boolean(m.l.logged_in);
            if (!this.m_mapClanToUserPermissions.has(a)) {
              let t = new f(e.GetAccountID());
              this.m_mapClanToUserPermissions.set(a, {
                result: t,
                promise: v.RemapToPromise(t),
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
                    (r = !0);
                else {
                  let e = this.m_mapClanToUserPermissions.get(a);
                  this.CopyFromResponseToTrack(e, t.data);
                }
              }
            } catch (e) {
              if (
                ((t = e.response),
                (r = !0),
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
                    a +
                    ": " +
                    t.strErrorMsg,
                  t
                );
              }
            } finally {
              r &&
                Object(s.G)(() => {
                  let e = this.m_mapClanToUserPermissions.get(a);
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
            return this.m_mapClanToUserPermissions.get(a).result;
          });
        }
        SetFollowOrUnfollowEvent(e, t, a, i, o) {
          return Object(r.a)(this, void 0, void 0, function* () {
            let r = this.GetPartnerEventPermissions(a),
              l = r.event_followed.indexOf(i),
              c = 0;
            -1 !== l &&
              ((c = r.event_followed_flags[l]), e ? (o = c & ~o) : (o |= c));
            let d = 0 == o,
              u =
                (Object(m.f)() == m.d.STORE_BASE_URL
                  ? m.d.STORE_BASE_URL + "events"
                  : m.d.COMMUNITY_BASE_URL +
                    "/gid/" +
                    a.ConvertTo64BitString()) +
                (d ? "/unfolloworunignoreevent" : "/followorignoreevent"),
              p = new URLSearchParams();
            p.append("sessionid", m.d.SESSIONID),
              p.append("authwgtoken", m.l.authwgtoken),
              p.append("ignore", "" + t),
              p.append("gid", i),
              p.append("notification_flag", "" + o),
              p.append("clan_accountid", "" + a.GetAccountID());
            yield n.a.post(u, p, { withCredentials: !0 });
            Object(s.G)(() => {
              let e = this.m_mapClanToUserPermissions.get(a.GetAccountID()),
                r = null,
                n = null,
                s = null,
                l = null;
              d
                ? ((r = t ? e.result.event_ignored : e.result.event_followed),
                  (s = t ? null : e.result.event_followed_flags))
                : t
                ? ((r = e.result.event_followed),
                  (s = e.result.event_followed_flags),
                  (n = e.result.event_ignored))
                : ((r = e.result.event_ignored),
                  (n = e.result.event_followed),
                  (l = e.result.event_followed_flags));
              let c = r.indexOf(i);
              if ((c > -1 && (r.splice(c, 1), s && s.splice(c, 1)), n)) {
                let e = n.indexOf(i);
                -1 == e ? (n.push(i), l && l.push(o)) : (l[e] = o);
              }
            });
          });
        }
        Vote(e, t, a) {
          return Object(r.a)(this, void 0, void 0, function* () {
            if (!e || !e.AnnouncementGID) return !1;
            const r = this.m_mapAnnounceGIDToVote.get(e.AnnouncementGID);
            if (r === t) return !0;
            if (
              (this.m_mapAnnounceGIDToVote.set(e.AnnouncementGID, t),
              Object(s.G)(() => {
                !0 === r && e.UpdateVoteCount("up", -1),
                  !1 === r && e.UpdateVoteCount("down", -1),
                  !0 === t && e.UpdateVoteCount("up", 1),
                  !1 === t && e.UpdateVoteCount("down", 1);
              }),
              this.m_cm)
            ) {
              let a = o.b.Init(l.f);
              return (
                a.Body().set_announcementid(e.AnnouncementGID),
                a.Body().set_vote_up(!!t),
                a.Body().set_clan_accountid(e.clanSteamID.GetAccountID()),
                1 ==
                  (yield l.g.RateClanAnnouncement(
                    this.m_cm.GetServiceTransport(),
                    a
                  )).GetEResult()
              );
            }
            {
              let r =
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
              let s = { withCredentials: !0, cancelToken: a.token };
              return 1 == (yield n.a.post(r, i, s)).data.success;
            }
          });
        }
        LoadMyVote(e, t) {
          return Object(r.a)(this, void 0, void 0, function* () {
            if (null == e ? void 0 : e.AnnouncementGID) {
              if (this.m_mapAnnounceGIDToVote.has(e.AnnouncementGID))
                return this.m_mapAnnounceGIDToVote.get(e.AnnouncementGID);
              let a;
              if (this.m_cm) {
                let t = o.b.Init(l.c);
                t.Body().set_announcementid(e.AnnouncementGID);
                let r = yield l.g.GetClanAnnouncementVoteForUser(
                  this.m_cm.GetServiceTransport(),
                  t
                );
                1 == r.GetEResult() &&
                  (a =
                    !!r.Body().voted_up() ||
                    (!r.Body().voted_down() && void 0));
              } else {
                let r =
                    m.d.COMMUNITY_BASE_URL +
                    "ogg/" +
                    e.appid +
                    "/announcements/ajaxgetmyvote/" +
                    e.AnnouncementGID,
                  i = yield n.a.get(r, {
                    withCredentials: !0,
                    cancelToken: t.token,
                  });
                a = !!i.data.voted_up || (!i.data.voted_down && void 0);
              }
              return this.m_mapAnnounceGIDToVote.set(e.AnnouncementGID, a), a;
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
      function S(e) {
        const [t, a] = Object(g.useState)(
            v.Get().BIsPartnerEventPermissionsLoaded(e)
          ),
          r = h.a.InitFromClanID(e),
          [i, n] = Object(g.useState)(v.Get().GetPartnerEventPermissions(r));
        return (
          Object(g.useEffect)(() => {
            if (!t) {
              const t = h.a.InitFromClanID(e);
              v.Get()
                .LoadSingleAppEventPermissions(t)
                .then((e) => {
                  n(e), a(!0);
                });
            }
          }, [t, e]),
          i
        );
      }
      Object(r.b)([s.C], v.prototype, "m_mapClanToUserPermissions", void 0),
        Object(r.b)([s.C], v.prototype, "m_mapAnnounceGIDToVote", void 0),
        Object(r.b)([s.C], v.prototype, "m_setReadEventGIDs", void 0),
        Object(r.b)([s.k], v.prototype, "CopyFromResponseToTrack", null);
    },
    C2dt: function (e, t, a) {
      "use strict";
      a.d(t, "a", function () {
        return c;
      });
      var r = a("mrSG"),
        i = a("vDqi"),
        n = a.n(i),
        s = a("2vnA"),
        o = a("/Q1a");
      class l {
        constructor() {
          (this.m_mapYouTubeVideo = new Map()),
            (this.m_mapSharedFile = new Map());
        }
        LoadYouTubeDynamicData(e, t) {
          return Object(r.a)(this, void 0, void 0, function* () {
            let a = new Array(),
              r = "";
            if (
              (e.forEach((e, t) => {
                this.m_mapYouTubeVideo.has(e)
                  ? a.push(this.m_mapYouTubeVideo.get(e))
                  : (r.length > 0 && (r += ","), (r += e));
              }),
              0 == r.length)
            )
              return a;
            let i = { youtubevideoids: r },
              l = null;
            return (
              (l = yield n.a.get(
                o.d.STORE_BASE_URL + "/events/ajaxgetdynamiceventmetadata",
                { params: i, cancelToken: t.token }
              )),
              l &&
                l.data &&
                l.data.youtube &&
                Object(s.G)(() => {
                  l.data.youtube.forEach((e, t) => {
                    this.m_mapYouTubeVideo.set(e.videoid, e), a.push(e);
                  });
                }),
              a
            );
          });
        }
        LoadSharedFileDynamicData(e, t) {
          return Object(r.a)(this, void 0, void 0, function* () {
            let a = new Array(),
              r = "";
            if (
              (e.forEach((e, t) => {
                this.m_mapSharedFile.has(e)
                  ? a.push(this.m_mapSharedFile.get(e))
                  : (r.length > 0 && (r += ","), (r += e));
              }),
              0 == r.length)
            )
              return a;
            let i = { sharedfileids: r },
              l = null;
            return (
              (l = yield n.a.get(
                o.d.STORE_BASE_URL + "/events/ajaxgetdynamiceventmetadata",
                { params: i, cancelToken: t.token }
              )),
              l &&
                l.data &&
                l.data.sharedfiles &&
                Object(s.G)(() => {
                  l.data.sharedfiles.forEach((e, t) => {
                    this.m_mapSharedFile.set(e.sharedfileid, e), a.push(e);
                  });
                }),
              a
            );
          });
        }
      }
      Object(r.b)([s.C], l.prototype, "m_mapYouTubeVideo", void 0),
        Object(r.b)([s.C], l.prototype, "m_mapSharedFile", void 0);
      const c = new l();
    },
    GpIp: function (e, t, a) {
      "use strict";
      a.d(t, "e", function () {
        return l;
      }),
        a.d(t, "c", function () {
          return c;
        }),
        a.d(t, "a", function () {
          return d;
        }),
        a.d(t, "d", function () {
          return m;
        }),
        a.d(t, "b", function () {
          return u;
        });
      var r = a("Zdsb"),
        i = (a("yfxr"), a("jALh"), a("FmLm")),
        n = (a("X/lQ"), a("Ys0h")),
        s = a("hAgw"),
        o = a("/Q1a");
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
      function u(e, t, a, r, i) {
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
              const r = n.a.Get().GetPackage(e);
              if (
                1 !==
                (null === (o = null == r ? void 0 : r.GetIncludedAppIDs()) ||
                void 0 === o
                  ? void 0
                  : o.length)
              ) {
                m = f(e, t, a, !0);
                break;
              }
              e = r.GetIncludedAppIDs()[0];
            case "app":
              m = b(e, t, a, !0);
              break;
            case "bundle":
              m = v(e, t, a, !0);
          }
          if (
            (m == s.e.k_NotRejected
              ? ((i.rejected = s.e.k_NotRejected),
                l.push(Object.assign(Object.assign({}, i), { priority: 1 })))
              : _.includes(m)
              ? ((i.rejected = s.e.k_NotRejected), c.push(i))
              : ((i.rejected = m),
                m == s.e.k_RejectIgnoredGame ? d.push(i) : u.push(i)),
            l.length > r)
          )
            break;
        }
        return (
          l.length < r &&
            (p(l, c, i, 2),
            l.length < i &&
              t.enforce_minimum &&
              (p(l, d, i, 3), p(l, u, i, m))),
          l
        );
      }
      function p(e, t, a, r) {
        for (let i = 0; e.length < a && i < t.length; ++i)
          e.push(Object.assign(Object.assign({}, t[i]), { priority: r }));
      }
      function _(e, t) {
        var a, r, n, o, l;
        const c = i.a.Get();
        if (t.only_current_platform && c.BHasPlatformPreferenceSet()) {
          if (
            !(
              ((null === (a = e.GetPlatforms()) || void 0 === a
                ? void 0
                : a.windows) &&
                c.BIsPreferredPlatform("win")) ||
              ((null === (r = e.GetPlatforms()) || void 0 === r
                ? void 0
                : r.mac) &&
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
        var a;
        if (t.localized) {
          const t = Object(r.l)(o.d.LANGUAGE);
          if (
            !(null === (a = e.GetAllLanguagesWithSomeSupport()) || void 0 === a
              ? void 0
              : a.includes(t))
          )
            return s.e.k_RejectSupportedLanguage;
        }
        return s.e.k_NotRejected;
      }
      function b(e, t, a, r) {
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
              : r
              ? (1 == d && a.BHasAppID(o.GetParentAppID())) || a.BHasAppID(e)
                ? s.e.k_RejectAlreadyDisplayed
                : h(o, t)
              : s.e.k_NotRejected
            : s.e.k_RejectDLC
          : s.e.k_RejectSoftware;
      }
      function g(e, t) {
        const a = i.a.Get();
        let r = !1;
        for (let t of e) {
          if (a.BIsGameIgnored(t)) return s.e.k_RejectIgnoredGame;
          a.BIsGameOwned(t) && (r = !0);
        }
        return t.games_not_in_library && r
          ? s.e.k_RejectInLibrary
          : t.games_not_in_library && !r
          ? s.e.k_RejectNotInLibrary
          : s.e.k_NotRejected;
      }
      function f(e, t, a, r) {
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
          : r
          ? a.BHasPackageID(e)
            ? s.e.k_RejectAlreadyDisplayed
            : h(o, t)
          : s.e.k_NotRejected;
      }
      function v(e, t, a, r) {
        const i = n.a.Get().GetBundle(e);
        if (!i) return s.e.k_RejectNotLoaded;
        const o = _(i, t);
        if (o != s.e.k_NotRejected) return o;
        const l = g(i.GetIncludedAppIDs(), t);
        return l != s.e.k_NotRejected
          ? l
          : r
          ? a.BHasBundleID(e)
            ? s.e.k_RejectAlreadyDisplayed
            : h(i, t)
          : s.e.k_NotRejected;
      }
    },
    IEEs: function (e, t, a) {
      "use strict";
      a.d(t, "a", function () {
        return d;
      });
      var r = a("mrSG"),
        i = a("vDqi"),
        n = a.n(i),
        s = a("2vnA"),
        o = (a("msu0"), a("Zdsb"), a("/4gK"), a("sTxY"), a("f5iL")),
        l = a("TqgT"),
        c = a("/Q1a");
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
        UpdateCommunitionSetting(e, t, a) {
          return Object(r.a)(this, void 0, void 0, function* () {
            const r = c.d.STORE_BASE_URL + "account/optoutappcommunication/",
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
              if (!a)
                return (
                  Object(o.a)(
                    !1,
                    "BlockEventsFromCalenderEvent: Invalid AppID and ClanID"
                  ),
                  !1
                );
              if (
                (!e && this.m_mapBlockedClanIds.has(a)) ||
                (e && !this.m_mapBlockedClanIds.has(a))
              )
                return !0;
              e
                ? this.m_mapBlockedClanIds.delete(a)
                : this.m_mapBlockedClanIds.set(a, !0),
                i.append("clanId", a.toString());
            }
            try {
              return 1 == (yield n.a.post(r, i)).data.success;
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
      Object(r.b)([s.C], d.prototype, "m_mapBlockedAppIds", void 0),
        Object(r.b)([s.C], d.prototype, "m_mapBlockedClanIds", void 0);
    },
    Icdm: function (e, t, a) {
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
    JsFJ: function (e, t, a) {
      "use strict";
      a.d(t, "a", function () {
        return o;
      });
      var r = a("mrSG"),
        i = a("2vnA"),
        n = a("/Q1a");
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
      Object(r.b)([i.C], s.prototype, "bValid", void 0),
        Object(r.b)([i.C], s.prototype, "stream", void 0),
        Object(r.b)([i.C], s.prototype, "name", void 0),
        Object(r.b)([i.C], s.prototype, "appName", void 0),
        Object(r.b)([i.C], s.prototype, "appID", void 0),
        Object(r.b)([i.C], s.prototype, "link", void 0),
        Object(r.b)([i.C], s.prototype, "linkName", void 0),
        Object(r.b)([i.C], s.prototype, "tabIcon", void 0),
        Object(r.b)([i.C], s.prototype, "offlineImage", void 0),
        Object(r.b)([i.C], s.prototype, "gidEvent", void 0);
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
    KQHr: function (e, t, a) {
      "use strict";
      a.d(t, "a", function () {
        return h;
      });
      var r = a("q1tI"),
        i = a.n(r),
        n = (a("Zdsb"), a("wQEA")),
        s = (a("yfxr"), a("44wC")),
        o = a("hAgw"),
        l = a("RrtU"),
        c = a("xoHR"),
        d = a("GbHM"),
        m = a("GXif"),
        u = a("2fVn"),
        p = a("Q6q7"),
        _ = a.n(p);
      function h(e) {
        const { info: t, className: a } = e,
          p = Object(r.useRef)({ include_release: !0 }),
          [h] = Object(l.a)(
            null == t ? void 0 : t.id,
            Object(o.d)(null == t ? void 0 : t.type),
            p.current
          ),
          b = Object(s.b)(null == t ? void 0 : t.id),
          g = !!(null == b ? void 0 : b.demo_appid),
          f = g
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
          ? i.a.createElement(u.a, { info: t, className: a })
          : i.a.createElement(
              c.a,
              {
                toolTipContent: f,
                onClick: (e) => {
                  e.preventDefault(),
                    e.stopPropagation(),
                    g && Object(n.a)(b.demo_appid);
                },
                className: Object(d.a)(
                  a,
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
    KXdY: function (e, t, a) {
      "use strict";
      a.d(t, "c", function () {
        return b;
      }),
        a.d(t, "a", function () {
          return g;
        }),
        a.d(t, "b", function () {
          return f;
        });
      var r = a("q1tI"),
        i = a.n(r),
        n = a("N7Zi"),
        s = a.n(n),
        o = a("9d0v"),
        l = a.n(o),
        c = (a("Zdsb"), a("bmfB")),
        d = a("FmLm"),
        m = a("Ys0h"),
        u = a("zy5s"),
        p = a.n(u),
        _ = a("GbHM"),
        h = a("GXif");
      function b(e) {
        const { appids: t, hide_status_banners: a } = e,
          r = t.every((e) => d.a.Get().BOwnsApp(e)),
          n = t.every((e) => d.a.Get().BIsGameWishlisted(e)),
          o = t.some((e) => {
            const t = m.a.Get().GetApp(e);
            return t && g(e, null == t ? void 0 : t.GetParentAppID());
          }),
          c = r && !a,
          u = n && !a;
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
          o && i.a.createElement(f, null)
        );
      }
      function g(e, t) {
        if (t || e) {
          const a = t || e;
          return a && c.a.Get().BIsAppStreaming(a);
        }
        return !1;
      }
      const f = () =>
        i.a.createElement(
          "div",
          { className: p.a.bordered_live_stream_icon },
          Object(h.g)("#home_page_live_broadcast")
        );
    },
    MKRT: function (e, t, a) {
      "use strict";
      a.d(t, "c", function () {
        return r;
      }),
        a.d(t, "b", function () {
          return h;
        }),
        a.d(t, "a", function () {
          return v;
        });
      var r,
        i = a("mrSG"),
        n = a("2vnA"),
        s = (a("msu0"), a("Zdsb")),
        o = a("/4gK"),
        l = a("f5iL"),
        c = a("/Q1a"),
        d = a("VJsr"),
        m = a("ue1x");
      !(function (e) {
        (e.k_ERecent = "recent"),
          (e.k_ELibrary = "library"),
          (e.k_EWishlist = "wishlist"),
          (e.k_EFollowing = "following"),
          (e.k_ERecommended = "recommended"),
          (e.k_ESteam = "steam"),
          (e.k_EFeatured = "featured"),
          (e.k_ECurator = "curator");
      })(r || (r = {}));
      const u = [
          r.k_ELibrary,
          r.k_EWishlist,
          r.k_EFollowing,
          r.k_ERecommended,
          r.k_ESteam,
          r.k_ECurator,
        ],
        p = [...u, r.k_EFeatured],
        _ = [r.k_EFeatured];
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
      function f(e) {
        return new Map(e.map((e) => [e, !0]));
      }
      class v {
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
            g.forEach((a, r) => {
              -1 !== a.indexOf(e) && (t = r);
            }),
            t || h.k_EEvents
          );
        }
        InitDefaultCheckboxes(e, t, a) {
          (this.m_bInitializedForUpdatesOnly = t),
            (this.m_mapEventTypeGroupsAllowed = f(t ? [h.k_EUpdates] : b));
          const i = c.d.EREALM === s.h.k_ESteamRealmChina ? p : u;
          (this.m_mapGameSources = f(e ? i : _)),
            a && this.m_mapGameSources.set(r.k_EFeatured, !0);
        }
        Init(e, t, a, r, i) {
          (this.m_eStorageType = i), (this.m_strStorageKey = r);
          const n = this.GetStorageObject(),
            s = n ? n.getItem(this.GetPreferencesStorageKey()) : null;
          if (s) {
            const e = JSON.parse(s);
            if (e.rgEventTypeGroupsAllowed && e.rgGameSources) {
              const { rgEventTypeGroupsAllowed: t, rgGameSources: a } = e;
              return (
                (this.m_mapEventTypeGroupsAllowed = f(t)),
                (this.m_mapGameSources = f(a)),
                void (
                  void 0 !== e.bCuratorUnhideOnFollowDismissed &&
                  (this.m_bCuratorUnhideOnFollowDialogDismissed =
                    e.bCuratorUnhideOnFollowDismissed)
                )
              );
            }
          }
          this.InitDefaultCheckboxes(e, t, a);
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
            !(e === r.k_EFollowing && !m.a.bIsFollowingEnabled) &&
            !(e === r.k_ECurator && !m.a.bIsCuratorsEnabled) &&
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
              e == r.k_ERecent
                ? this.m_mapGameSources.delete(r.k_ELibrary)
                : e == r.k_ELibrary &&
                  (Object(l.a)(
                    !this.m_mapGameSources.has(r.k_ERecent),
                    "Setting Library although Recent already set - illusion was broken"
                  ),
                  this.m_mapGameSources.delete(r.k_ERecent)))
            : (this.m_mapGameSources.delete(e),
              e == r.k_ERecent
                ? this.m_mapGameSources.set(r.k_ELibrary, !0)
                : e == r.k_ELibrary &&
                  this.m_mapGameSources.delete(r.k_ERecent)),
            this.SaveFilterPreferences(),
            d.b.RecordFilterChangeEvent(this);
        }
        BShouldDisplayEvent(e) {
          const t = e.GetSource(),
            a = Boolean(
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
                (this.BIsGameSourceAllowed(r.k_ERecent) && a) ||
                  (this.BIsGameSourceAllowed(r.k_ELibrary) &&
                    t & o.a.k_eLibrary) ||
                  (this.BIsGameSourceAllowed(r.k_EWishlist) &&
                    t & o.a.k_eWishlist) ||
                  (this.BIsGameSourceAllowed(r.k_EFollowing) &&
                    t & o.a.k_eFollowing) ||
                  (this.BIsGameSourceAllowed(r.k_ERecommended) &&
                    t & o.a.k_eRecommended) ||
                  (this.BIsGameSourceAllowed(r.k_ESteam) && t & o.a.k_eSteam) ||
                  (this.BIsGameSourceAllowed(r.k_EFeatured) &&
                    t & o.a.k_eFeatured) ||
                  (this.BIsGameSourceAllowed(r.k_ECurator) &&
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
      Object(i.b)([n.C], v.prototype, "m_mapEventTypeGroupsAllowed", void 0),
        Object(i.b)([n.C], v.prototype, "m_mapGameSources", void 0),
        Object(i.b)(
          [n.C],
          v.prototype,
          "m_bCuratorUnhideOnFollowDialogDismissed",
          void 0
        ),
        Object(i.b)(
          [Object(n.n)({ keepAlive: !0, equals: n.m.structural })],
          v.prototype,
          "enabledEventTypeSet",
          null
        ),
        Object(i.b)([n.k], v.prototype, "SetEventTypeGroupAllowed", null),
        Object(i.b)([n.k], v.prototype, "SetGameSourceAllowed", null);
    },
    N7Zi: function (e, t) {
      e.exports =
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAAKCAYAAABi8KSDAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6OUNDNzBFNTUyMUM0MTFFNDk1REVFODRBNUU5RjA2MUYiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6OUNDNzBFNTYyMUM0MTFFNDk1REVFODRBNUU5RjA2MUYiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo5Q0M3MEU1MzIxQzQxMUU0OTVERUU4NEE1RTlGMDYxRiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo5Q0M3MEU1NDIxQzQxMUU0OTVERUU4NEE1RTlGMDYxRiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pv3vUKAAAAAlSURBVHjaYvz//z8DsYARpFhISAivjnfv3jGSp3jUGeQ4AyDAADZHNe2nyOBrAAAAAElFTkSuQmCC";
    },
    O8IP: function (e, t, a) {
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
    OXjc: function (e, t, a) {
      "use strict";
      a.d(t, "a", function () {
        return b;
      });
      var r = a("/Q1a"),
        i = a("hAgw"),
        n = a("RrtU"),
        s = a("q1tI"),
        o = (a("XrGS"), a("e356")),
        l = a("aF8t"),
        c = a("GbHM"),
        d = a("rSrx"),
        m = a("thkD"),
        u = a("jIgc"),
        p = a("kWcV"),
        _ = a("Icdm"),
        h = a.n(_);
      function b(e) {
        var t;
        const { info: a, bPopOutTrailerPlayback: _ } = e,
          [b] = Object(n.a)(a.id, Object(i.d)(a.type), {
            include_trailers: !0,
            include_screenshots: !0,
          }),
          [g, f] = s.useState(!1),
          [v, S] = s.useState(void 0),
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
                    a = (
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
                          Boolean(!r.d.IN_CLIENT) &&
                            s.createElement("source", {
                              src: a,
                              type: "video/mp4",
                            })
                        )
                      )
                    ),
                    Object(d.o)(e)
                  );
                } else f((e) => !e);
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
            ("dev" != r.d.WEB_UNIVERSE && "beta" != r.d.WEB_UNIVERSE) ||
              console.log(
                "appCapsule for appid: " + (null == b ? void 0 : b.GetAppID()),
                b.GetOnlyAllAgesSafeScreenshots()
              ),
            null
          );
        const C = B || (void 0 !== v && -1 !== v) ? v : 0,
          E = new Array(),
          I = b.GetOnlyAllAgesSafeScreenshots();
        return (
          I.forEach((e, t) => {
            if ((B || t > 0) && E.length < 3) {
              const a = (function (e, t) {
                const a = e.replace(/\.[^\.]+$/g, "");
                return a + t + e.slice(a.length);
              })(e, ".116x65").replace("http://", "https://");
              E.push(
                s.createElement("img", {
                  key: t + "_" + a,
                  className: h.a.ScreenshotThumbnail,
                  src: a,
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
                  onMouseEnter: () => S(t),
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
                    : s.createElement("img", { src: I[C] })
                ),
              Boolean(!B) && s.createElement("img", { src: I[C] })
            ),
            Boolean(E.length > 0) &&
              s.createElement(
                "div",
                { className: h.a.Screenshot, onMouseLeave: () => S(-1) },
                E
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
                  Boolean(!r.d.IN_CLIENT) &&
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
    PlCS: function (e, t, a) {
      "use strict";
      a.d(t, "b", function () {
        return u;
      }),
        a.d(t, "a", function () {
          return p;
        });
      var r = a("q1tI"),
        i = a("GXif"),
        n = a("fsrB"),
        s = (a("XrGS"), a("lfGQ")),
        o = a("0JCO"),
        l = a("pSt8"),
        c = a("/Q1a"),
        d = a("Uqeb"),
        m = a.n(d);
      const u = (e) => {
        const t = Object(o.c)(),
          a = Object(l.c)(e.url, c.d.STORE_BASE_URL);
        if (a) {
          const i = Object(s.b)(a, t);
          return r.createElement(
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
        return r.createElement(r.Fragment, null, e.children);
      };
      function p(e) {
        const { section: t } = e;
        return t.label_link && !t.label_link_style
          ? r.createElement(
              "div",
              { className: m.a.SaleViewAll },
              r.createElement(
                u,
                { url: t.label_link },
                Object(i.g)("#btn_live_streams_all")
              )
            )
          : null;
      }
    },
    Q6q7: function (e, t, a) {
      e.exports = {
        DemoButton: "demobutton_DemoButton_1GAs9",
        DisabledButton: "demobutton_DisabledButton_2TQ4l",
      };
    },
    "QwK/": function (e, t, a) {
      "use strict";
      a.d(t, "a", function () {
        return o;
      });
      var r = a("mrSG"),
        i = a("/Q1a"),
        n = a("2vnA");
      a("3y2B");
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
        SearchEmoticons(e, t = 25, a = !0) {
          function r(e) {
            return e.name_normalized || e.name;
          }
          this.UpdateEmoticonList(), (e = e.toLocaleLowerCase());
          let i = this.recent_emoticons.filter((t) => !e || r(t).startsWith(e)),
            n = this.recent_emoticons.filter(
              (t) => !a && -1 !== r(t).indexOf(e)
            ),
            s = this.m_rgEmoticons.filter((t) => !e || r(t).startsWith(e)),
            o = this.m_rgEmoticons.filter((t) => !a && -1 !== r(t).indexOf(e)),
            l = new Set(),
            c = [];
          function d(e, a, i) {
            return (
              !(c.length >= t) &&
              (l.has(e) ||
                (l.add(e), c.push({ name: r(e), recent: a, new: i })),
              !0)
            );
          }
          function m(e, t, a) {
            for (let r of e) if (!d(r, t, a(r))) break;
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
          let a,
            r = new Map(),
            i = /\[emoticon\]([^[]*)/g;
          for (; (a = i.exec(e)); ) {
            let e = r.get(a[1]) || 0;
            r.set(a[1], e + 1);
          }
          let n = !1;
          if (r.size) {
            if (void 0 !== this.m_rgRecentEmoticons)
              for (let e of this.m_rgRecentEmoticons)
                r.has(e.name) &&
                  ((e.last_used = t),
                  (e.use_count += r.get(e.name)),
                  r.delete(e.name),
                  e.time_received && ((n = !0), delete e.time_received));
            if (r.size)
              for (let e of this.m_rgEmoticons)
                r.has(e.name) &&
                  ((e.last_used = t),
                  (e.use_count += r.get(e.name)),
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
          const a = this.m_rgStickers.find(({ name: t }) => t === e);
          (a.last_used = t),
            (a.use_count += 1),
            delete a.time_received,
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
            a = e.filter(
              ({ last_used: e, time_received: a }) => e || (a && a > t)
            );
          return (
            a.sort(
              (e, t) =>
                (t.last_used || t.time_received) -
                (e.last_used || e.time_received)
            ),
            a.slice(0, 50)
          );
        }
        OnEmoticonListReceived(e) {
          (this.m_rgFlairs = []),
            (this.m_rgEmoticons = []),
            (this.m_rgRecentEmoticons = void 0),
            (this.m_rtMostRecentEmoticon = void 0);
          let t = this.GetServerTime() - s;
          for (let a of e) {
            let e = a.name;
            e.startsWith("^")
              ? this.m_rgFlairs.push({
                  name: e.match(new RegExp(/:(.*):/))[1],
                  flairGroupID: e.match(new RegExp(/\^(.*)\^/))[1],
                })
              : (!a.last_used && a.time_received > t
                  ? (!this.m_rtMostRecentEmoticon ||
                      a.time_received > this.m_rtMostRecentEmoticon) &&
                    (this.m_rtMostRecentEmoticon = a.time_received)
                  : delete a.time_received,
                this.m_rgEmoticons.push(a));
          }
          (this.m_bInitialized = !0), (this.m_bEmoticonListRequested = !1);
        }
      }
      (o.sm_EmoticonRegex = new RegExp("ː([a-zA-Z0-9_\\-]+)ː", "g")),
        Object(r.b)([n.C], o.prototype, "m_bInitialized", void 0),
        Object(r.b)([n.C], o.prototype, "m_rtMostRecentEmoticon", void 0),
        Object(r.b)([n.C], o.prototype, "m_rtLastStickerOrEffect", void 0),
        Object(r.b)([n.k], o.prototype, "TrackEmoticonUsage", null);
    },
    Tj6G: function (e, t, a) {
      "use strict";
      var r, i;
      a.d(t, "a", function () {
        return i;
      }),
        a.d(t, "b", function () {
          return n;
        }),
        (function (e) {
          (e[(e.Hover = 0)] = "Hover"),
            (e[(e.ClickPopup = 1)] = "ClickPopup"),
            (e[(e.ClickSurroundingRegion = 2)] = "ClickSurroundingRegion");
        })(r || (r = {})),
        (function (e) {
          (e[(e.Chat = 0)] = "Chat"),
            (e[(e.Notification = 1)] = "Notification"),
            (e[(e.Error = 2)] = "Error");
        })(i || (i = {}));
      class n {}
    },
    Uqeb: function (e, t, a) {
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
        ShowContentsContainer: "partnersaledisplay_ShowContentsContainer_J6xi7",
        ShowContentsButton: "partnersaledisplay_ShowContentsButton_3JcBK",
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
        FacetedBrowseLoadThrobber:
          "partnersaledisplay_FacetedBrowseLoadThrobber_82-AT",
        DefaultCreatorCtn: "partnersaledisplay_DefaultCreatorCtn_1TAEj",
        SalePageLogoCtn: "partnersaledisplay_SalePageLogoCtn_1S49a",
        EventSectionViewAllCtn:
          "partnersaledisplay_EventSectionViewAllCtn_3RuY2",
      };
    },
    VJsr: function (e, t, a) {
      "use strict";
      a.d(t, "a", function () {
        return r;
      }),
        a.d(t, "b", function () {
          return c;
        });
      var r,
        i = a("vDqi"),
        n = a.n(i),
        s = (a("uLSr"), a("/Q1a")),
        o = (a("Zdsb"), a("6ese"), a("/4gK"), a("3u1o")),
        l = a("MKRT");
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
      })(r || (r = {}));
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
          const a = e.GetStoreInitializationTimestamp().getTime() / 1e3;
          this.m_nFutureViewableEvents = 0;
          let r,
            i = 0,
            n = null;
          const s = e.GetCurrentlyLoadedItemsForStats();
          for (const e of s) {
            const s = e.start_time > a;
            if ((e.unique_id == t && ((r = i), (n = e)), s))
              this.m_nFutureViewableEvents++;
            else if (void 0 !== r) break;
            i++;
          }
          if (void 0 !== r)
            if (r < this.m_nFutureViewableEvents) {
              const t = this.m_nFutureViewableEvents - r;
              if (this.m_nFutureViewedIndex < t) {
                this.m_nFutureViewedIndex = t;
                const a = () => {
                    const t =
                      Math.min(this.m_nFutureViewedIndex, 4095) |
                      (Math.min(this.m_nFutureViewableEvents, 255) << 12) |
                      (Math.min(this.GetTimeSpentOnPageS(e), 2047) << 20);
                    c.SendExperimentEventToSteam(18, t);
                  },
                  r = 500;
                this.m_scheduledFutureStats.Schedule(r, a);
              }
            } else {
              const t = r - this.m_nFutureViewableEvents;
              if (this.m_nPastViewedIndex < t) {
                (this.m_nPastViewedIndex = t),
                  (this.m_nPastViewedDays = Math.floor(
                    (a - n.start_time) / 86400
                  ));
                const r = () => {
                    const t =
                      Math.min(this.m_nPastViewedIndex, 4095) |
                      (Math.min(this.m_nPastViewedDays, 255) << 12) |
                      (Math.min(this.GetTimeSpentOnPageS(e), 2047) << 20);
                    c.SendExperimentEventToSteam(17, t);
                  },
                  i = 500;
                this.m_scheduledPastStats.Schedule(i, r);
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
            a = new Date();
          return Math.max(0, Math.floor((a.getTime() - t.getTime()) / 1e3));
        }
        RecordAppInteractionEvent(e, t) {
          this.SendExperimentEventToSteam(19, t);
        }
        SendExperimentEventToSteam(e, t) {
          this.InitBrowserID();
          const a = s.d.STORE_BASE_URL + "events/ajaxreportnewshubstats/",
            r = new URLSearchParams();
          r.append("page_action", "" + e),
            r.append("snr", s.d.SNR),
            r.append("uint_data", "" + t),
            r.append("str_data", this.m_sBrowserID),
            n.a.post(a, r);
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
    VVjd: function (e, t, a) {
      e.exports = { strMaxMobileWidth: "700px" };
    },
    Wtw7: function (e, t, a) {
      "use strict";
      a("XrGS"), a("bmfB"), a("HGFm"), a("msu0"), a("sTxY");
    },
    Y3DF: function (e, t, a) {
      e.exports = { CompatIcon: "deckcompaticons_CompatIcon_25ILU" };
    },
    ZBhF: function (e, t, a) {
      "use strict";
      a.d(t, "c", function () {
        return C;
      }),
        a.d(t, "e", function () {
          return I;
        }),
        a.d(t, "b", function () {
          return T;
        }),
        a.d(t, "d", function () {
          return D;
        }),
        a.d(t, "a", function () {
          return re;
        });
      var r = a("hRO2"),
        i = a("3dpo");
      const n = r.Message;
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
          let t = new r.BinaryReader(e),
            a = new s();
          return s.deserializeBinaryFromReader(a, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.b(s.MBF(), e, t);
        }
        serializeBinary() {
          var e = new r.BinaryWriter();
          return s.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.f(s.M(), e, t);
        }
        serializeBase64String() {
          var e = new r.BinaryWriter();
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
          let t = new r.BinaryReader(e),
            a = new o();
          return o.deserializeBinaryFromReader(a, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new r.BinaryWriter();
          return o.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new r.BinaryWriter();
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
          let t = new r.BinaryReader(e),
            a = new l();
          return l.deserializeBinaryFromReader(a, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.b(l.MBF(), e, t);
        }
        serializeBinary() {
          var e = new r.BinaryWriter();
          return l.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.f(l.M(), e, t);
        }
        serializeBase64String() {
          var e = new r.BinaryWriter();
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
          let t = new r.BinaryReader(e),
            a = new c();
          return c.deserializeBinaryFromReader(a, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.b(c.MBF(), e, t);
        }
        serializeBinary() {
          var e = new r.BinaryWriter();
          return c.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.f(c.M(), e, t);
        }
        serializeBase64String() {
          var e = new r.BinaryWriter();
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
          let t = new r.BinaryReader(e),
            a = new d();
          return d.deserializeBinaryFromReader(a, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.b(d.MBF(), e, t);
        }
        serializeBinary() {
          var e = new r.BinaryWriter();
          return d.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.f(d.M(), e, t);
        }
        serializeBase64String() {
          var e = new r.BinaryWriter();
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
          let t = new r.BinaryReader(e),
            a = new m();
          return m.deserializeBinaryFromReader(a, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.b(m.MBF(), e, t);
        }
        serializeBinary() {
          var e = new r.BinaryWriter();
          return m.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.f(m.M(), e, t);
        }
        serializeBase64String() {
          var e = new r.BinaryWriter();
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
          let t = new r.BinaryReader(e),
            a = new u();
          return u.deserializeBinaryFromReader(a, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.b(u.MBF(), e, t);
        }
        serializeBinary() {
          var e = new r.BinaryWriter();
          return u.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.f(u.M(), e, t);
        }
        serializeBase64String() {
          var e = new r.BinaryWriter();
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
          let t = new r.BinaryReader(e),
            a = new p();
          return p.deserializeBinaryFromReader(a, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.b(p.MBF(), e, t);
        }
        serializeBinary() {
          var e = new r.BinaryWriter();
          return p.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.f(p.M(), e, t);
        }
        serializeBase64String() {
          var e = new r.BinaryWriter();
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
          let t = new r.BinaryReader(e),
            a = new _();
          return _.deserializeBinaryFromReader(a, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new r.BinaryWriter();
          return _.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new r.BinaryWriter();
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
          let t = new r.BinaryReader(e),
            a = new h();
          return h.deserializeBinaryFromReader(a, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.b(h.MBF(), e, t);
        }
        serializeBinary() {
          var e = new r.BinaryWriter();
          return h.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.f(h.M(), e, t);
        }
        serializeBase64String() {
          var e = new r.BinaryWriter();
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
          let t = new r.BinaryReader(e),
            a = new b();
          return b.deserializeBinaryFromReader(a, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.b(b.MBF(), e, t);
        }
        serializeBinary() {
          var e = new r.BinaryWriter();
          return b.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.f(b.M(), e, t);
        }
        serializeBase64String() {
          var e = new r.BinaryWriter();
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
          let t = new r.BinaryReader(e),
            a = new g();
          return g.deserializeBinaryFromReader(a, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.b(g.MBF(), e, t);
        }
        serializeBinary() {
          var e = new r.BinaryWriter();
          return g.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.f(g.M(), e, t);
        }
        serializeBase64String() {
          var e = new r.BinaryWriter();
          return g.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CBroadcast_StopBroadcastUpload_Notification";
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
          let t = new r.BinaryReader(e),
            a = new f();
          return f.deserializeBinaryFromReader(a, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.b(f.MBF(), e, t);
        }
        serializeBinary() {
          var e = new r.BinaryWriter();
          return f.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.f(f.M(), e, t);
        }
        serializeBase64String() {
          var e = new r.BinaryWriter();
          return f.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CBroadcast_SessionClosed_Notification";
        }
      }
      class v extends n {
        constructor(e = null) {
          super(),
            v.prototype.broadcast_id || i.a(v.M()),
            n.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            v.sm_m ||
              (v.sm_m = {
                proto: v,
                fields: {
                  broadcast_id: {
                    n: 1,
                    br: i.d.readFixed64String,
                    bw: i.h.writeFixed64String,
                  },
                  num_viewers: { n: 2, br: i.d.readInt32, bw: i.h.writeInt32 },
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
          let t = new r.BinaryReader(e),
            a = new v();
          return v.deserializeBinaryFromReader(a, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.b(v.MBF(), e, t);
        }
        serializeBinary() {
          var e = new r.BinaryWriter();
          return v.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.f(v.M(), e, t);
        }
        serializeBase64String() {
          var e = new r.BinaryWriter();
          return v.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CBroadcast_BroadcastStatus_Notification";
        }
      }
      class S extends n {
        constructor(e = null) {
          super(),
            S.prototype.broadcast_channel_id || i.a(S.M()),
            n.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            S.sm_m ||
              (S.sm_m = {
                proto: S,
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
          let t = new r.BinaryReader(e),
            a = new S();
          return S.deserializeBinaryFromReader(a, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.b(S.MBF(), e, t);
        }
        serializeBinary() {
          var e = new r.BinaryWriter();
          return S.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.f(S.M(), e, t);
        }
        serializeBase64String() {
          var e = new r.BinaryWriter();
          return S.serializeBinaryToWriter(this, e), e.getResultBase64String();
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
          let t = new r.BinaryReader(e),
            a = new y();
          return y.deserializeBinaryFromReader(a, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.b(y.MBF(), e, t);
        }
        serializeBinary() {
          var e = new r.BinaryWriter();
          return y.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.f(y.M(), e, t);
        }
        serializeBase64String() {
          var e = new r.BinaryWriter();
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
          let t = new r.BinaryReader(e),
            a = new B();
          return B.deserializeBinaryFromReader(a, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.b(B.MBF(), e, t);
        }
        serializeBinary() {
          var e = new r.BinaryWriter();
          return B.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.f(B.M(), e, t);
        }
        serializeBase64String() {
          var e = new r.BinaryWriter();
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
          let t = new r.BinaryReader(e),
            a = new w();
          return w.deserializeBinaryFromReader(a, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.b(w.MBF(), e, t);
        }
        serializeBinary() {
          var e = new r.BinaryWriter();
          return w.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.f(w.M(), e, t);
        }
        serializeBase64String() {
          var e = new r.BinaryWriter();
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
          let t = new r.BinaryReader(e),
            a = new C();
          return C.deserializeBinaryFromReader(a, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.b(C.MBF(), e, t);
        }
        serializeBinary() {
          var e = new r.BinaryWriter();
          return C.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.f(C.M(), e, t);
        }
        serializeBase64String() {
          var e = new r.BinaryWriter();
          return C.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CBroadcast_PostChatMessage_Request";
        }
      }
      class E extends n {
        constructor(e = null) {
          super(),
            E.prototype.persona_name || i.a(E.M()),
            n.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            E.sm_m ||
              (E.sm_m = {
                proto: E,
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
          let t = new r.BinaryReader(e),
            a = new E();
          return E.deserializeBinaryFromReader(a, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.b(E.MBF(), e, t);
        }
        serializeBinary() {
          var e = new r.BinaryWriter();
          return E.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.f(E.M(), e, t);
        }
        serializeBase64String() {
          var e = new r.BinaryWriter();
          return E.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CBroadcast_PostChatMessage_Response";
        }
      }
      class I extends n {
        constructor(e = null) {
          super(),
            I.prototype.chat_id || i.a(I.M()),
            n.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            I.sm_m ||
              (I.sm_m = {
                proto: I,
                fields: {
                  chat_id: {
                    n: 1,
                    br: i.d.readFixed64String,
                    bw: i.h.writeFixed64String,
                  },
                  flair: { n: 2, br: i.d.readString, bw: i.h.writeString },
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
          let t = new r.BinaryReader(e),
            a = new I();
          return I.deserializeBinaryFromReader(a, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.b(I.MBF(), e, t);
        }
        serializeBinary() {
          var e = new r.BinaryWriter();
          return I.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.f(I.M(), e, t);
        }
        serializeBase64String() {
          var e = new r.BinaryWriter();
          return I.serializeBinaryToWriter(this, e), e.getResultBase64String();
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
          let t = new r.BinaryReader(e),
            a = new O();
          return O.deserializeBinaryFromReader(a, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.b(O.MBF(), e, t);
        }
        serializeBinary() {
          var e = new r.BinaryWriter();
          return O.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.f(O.M(), e, t);
        }
        serializeBase64String() {
          var e = new r.BinaryWriter();
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
          let t = new r.BinaryReader(e),
            a = new T();
          return T.deserializeBinaryFromReader(a, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.b(T.MBF(), e, t);
        }
        serializeBinary() {
          var e = new r.BinaryWriter();
          return T.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.f(T.M(), e, t);
        }
        serializeBase64String() {
          var e = new r.BinaryWriter();
          return T.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CBroadcast_MuteBroadcastChatUser_Request";
        }
      }
      class R extends n {
        constructor(e = null) {
          super(), n.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return R.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new R();
        }
        static deserializeBinary(e) {
          let t = new r.BinaryReader(e),
            a = new R();
          return R.deserializeBinaryFromReader(a, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new r.BinaryWriter();
          return R.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new r.BinaryWriter();
          return R.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CBroadcast_MuteBroadcastChatUser_Response";
        }
      }
      class D extends n {
        constructor(e = null) {
          super(),
            D.prototype.chat_id || i.a(D.M()),
            n.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            D.sm_m ||
              (D.sm_m = {
                proto: D,
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
            D.sm_m
          );
        }
        static MBF() {
          return D.sm_mbf || (D.sm_mbf = i.e(D.M())), D.sm_mbf;
        }
        toObject(e = !1) {
          return D.toObject(e, this);
        }
        static toObject(e, t) {
          return i.g(D.M(), e, t);
        }
        static fromObject(e) {
          return i.c(D.M(), e);
        }
        static deserializeBinary(e) {
          let t = new r.BinaryReader(e),
            a = new D();
          return D.deserializeBinaryFromReader(a, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.b(D.MBF(), e, t);
        }
        serializeBinary() {
          var e = new r.BinaryWriter();
          return D.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.f(D.M(), e, t);
        }
        serializeBase64String() {
          var e = new r.BinaryWriter();
          return D.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CBroadcast_RemoveUserChatText_Request";
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
          let t = new r.BinaryReader(e),
            a = new G();
          return G.deserializeBinaryFromReader(a, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new r.BinaryWriter();
          return G.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new r.BinaryWriter();
          return G.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CBroadcast_RemoveUserChatText_Response";
        }
      }
      class j extends n {
        constructor(e = null) {
          super(),
            j.prototype.persona_names || i.a(j.M()),
            n.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            j.sm_m ||
              (j.sm_m = {
                proto: j,
                fields: { persona_names: { n: 1, c: A, r: !0, q: !0 } },
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
          let t = new r.BinaryReader(e),
            a = new j();
          return j.deserializeBinaryFromReader(a, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.b(j.MBF(), e, t);
        }
        serializeBinary() {
          var e = new r.BinaryWriter();
          return j.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.f(j.M(), e, t);
        }
        serializeBase64String() {
          var e = new r.BinaryWriter();
          return j.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CBroadcast_GetBroadcastChatUserNames_Response";
        }
      }
      class A extends n {
        constructor(e = null) {
          super(),
            A.prototype.steam_id || i.a(A.M()),
            n.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            A.sm_m ||
              (A.sm_m = {
                proto: A,
                fields: {
                  steam_id: {
                    n: 1,
                    br: i.d.readFixed64String,
                    bw: i.h.writeFixed64String,
                  },
                  persona: { n: 2, br: i.d.readString, bw: i.h.writeString },
                },
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
          let t = new r.BinaryReader(e),
            a = new A();
          return A.deserializeBinaryFromReader(a, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.b(A.MBF(), e, t);
        }
        serializeBinary() {
          var e = new r.BinaryWriter();
          return A.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.f(A.M(), e, t);
        }
        serializeBase64String() {
          var e = new r.BinaryWriter();
          return A.serializeBinaryToWriter(this, e), e.getResultBase64String();
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
          let t = new r.BinaryReader(e),
            a = new k();
          return k.deserializeBinaryFromReader(a, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.b(k.MBF(), e, t);
        }
        serializeBinary() {
          var e = new r.BinaryWriter();
          return k.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.f(k.M(), e, t);
        }
        serializeBase64String() {
          var e = new r.BinaryWriter();
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
          let t = new r.BinaryReader(e),
            a = new M();
          return M.deserializeBinaryFromReader(a, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new r.BinaryWriter();
          return M.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new r.BinaryWriter();
          return M.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CBroadcast_GetBuildClipStatus_Response";
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
          let t = new r.BinaryReader(e),
            a = new N();
          return N.deserializeBinaryFromReader(a, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new r.BinaryWriter();
          return N.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new r.BinaryWriter();
          return N.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CBroadcast_SetClipDetails_Response";
        }
      }
      class L extends n {
        constructor(e = null) {
          super(),
            L.prototype.broadcast_clip_id || i.a(L.M()),
            n.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            L.sm_m ||
              (L.sm_m = {
                proto: L,
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
          let t = new r.BinaryReader(e),
            a = new L();
          return L.deserializeBinaryFromReader(a, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.b(L.MBF(), e, t);
        }
        serializeBinary() {
          var e = new r.BinaryWriter();
          return L.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.f(L.M(), e, t);
        }
        serializeBase64String() {
          var e = new r.BinaryWriter();
          return L.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CBroadcast_GetClipDetails_Response";
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
          let t = new r.BinaryReader(e),
            a = new F();
          return F.deserializeBinaryFromReader(a, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new r.BinaryWriter();
          return F.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new r.BinaryWriter();
          return F.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CBroadcast_SetRTMPInfo_Response";
        }
      }
      class P extends n {
        constructor(e = null) {
          super(),
            P.prototype.broadcast_permission || i.a(P.M()),
            n.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            P.sm_m ||
              (P.sm_m = {
                proto: P,
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
          let t = new r.BinaryReader(e),
            a = new P();
          return P.deserializeBinaryFromReader(a, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.b(P.MBF(), e, t);
        }
        serializeBinary() {
          var e = new r.BinaryWriter();
          return P.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.f(P.M(), e, t);
        }
        serializeBase64String() {
          var e = new r.BinaryWriter();
          return P.serializeBinaryToWriter(this, e), e.getResultBase64String();
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
          let t = new r.BinaryReader(e),
            a = new U();
          return U.deserializeBinaryFromReader(a, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.b(U.MBF(), e, t);
        }
        serializeBinary() {
          var e = new r.BinaryWriter();
          return U.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.f(U.M(), e, t);
        }
        serializeBase64String() {
          var e = new r.BinaryWriter();
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
          let t = new r.BinaryReader(e),
            a = new W();
          return W.deserializeBinaryFromReader(a, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.b(W.MBF(), e, t);
        }
        serializeBinary() {
          var e = new r.BinaryWriter();
          return W.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.f(W.M(), e, t);
        }
        serializeBase64String() {
          var e = new r.BinaryWriter();
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
          let t = new r.BinaryReader(e),
            a = new z();
          return z.deserializeBinaryFromReader(a, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.b(z.MBF(), e, t);
        }
        serializeBinary() {
          var e = new r.BinaryWriter();
          return z.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.f(z.M(), e, t);
        }
        serializeBase64String() {
          var e = new r.BinaryWriter();
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
          let t = new r.BinaryReader(e),
            a = new V();
          return V.deserializeBinaryFromReader(a, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.b(V.MBF(), e, t);
        }
        serializeBinary() {
          var e = new r.BinaryWriter();
          return V.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.f(V.M(), e, t);
        }
        serializeBase64String() {
          var e = new r.BinaryWriter();
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
          let t = new r.BinaryReader(e),
            a = new x();
          return x.deserializeBinaryFromReader(a, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.b(x.MBF(), e, t);
        }
        serializeBinary() {
          var e = new r.BinaryWriter();
          return x.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.f(x.M(), e, t);
        }
        serializeBase64String() {
          var e = new r.BinaryWriter();
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
          let t = new r.BinaryReader(e),
            a = new H();
          return H.deserializeBinaryFromReader(a, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new r.BinaryWriter();
          return H.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new r.BinaryWriter();
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
          let t = new r.BinaryReader(e),
            a = new q();
          return q.deserializeBinaryFromReader(a, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new r.BinaryWriter();
          return q.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new r.BinaryWriter();
          return q.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CBroadcast_WebRTCStopped_Response";
        }
      }
      class Y extends n {
        constructor(e = null) {
          super(), n.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return Y.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new Y();
        }
        static deserializeBinary(e) {
          let t = new r.BinaryReader(e),
            a = new Y();
          return Y.deserializeBinaryFromReader(a, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new r.BinaryWriter();
          return Y.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new r.BinaryWriter();
          return Y.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CBroadcast_WebRTCSetAnswer_Response";
        }
      }
      class Q extends n {
        constructor(e = null) {
          super(),
            Q.prototype.sdp_mid || i.a(Q.M()),
            n.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            Q.sm_m ||
              (Q.sm_m = {
                proto: Q,
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
            Q.sm_m
          );
        }
        static MBF() {
          return Q.sm_mbf || (Q.sm_mbf = i.e(Q.M())), Q.sm_mbf;
        }
        toObject(e = !1) {
          return Q.toObject(e, this);
        }
        static toObject(e, t) {
          return i.g(Q.M(), e, t);
        }
        static fromObject(e) {
          return i.c(Q.M(), e);
        }
        static deserializeBinary(e) {
          let t = new r.BinaryReader(e),
            a = new Q();
          return Q.deserializeBinaryFromReader(a, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.b(Q.MBF(), e, t);
        }
        serializeBinary() {
          var e = new r.BinaryWriter();
          return Q.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.f(Q.M(), e, t);
        }
        serializeBase64String() {
          var e = new r.BinaryWriter();
          return Q.serializeBinaryToWriter(this, e), e.getResultBase64String();
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
          let t = new r.BinaryReader(e),
            a = new Z();
          return Z.deserializeBinaryFromReader(a, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new r.BinaryWriter();
          return Z.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new r.BinaryWriter();
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
          let t = new r.BinaryReader(e),
            a = new K();
          return K.deserializeBinaryFromReader(a, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new r.BinaryWriter();
          return K.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new r.BinaryWriter();
          return K.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CBroadcast_WebRTCAddViewerCandidate_Response";
        }
      }
      class X extends n {
        constructor(e = null) {
          super(),
            X.prototype.candidate_generation || i.a(X.M()),
            n.initialize(this, e, 0, -1, [2], null);
        }
        static M() {
          return (
            X.sm_m ||
              (X.sm_m = {
                proto: X,
                fields: {
                  candidate_generation: {
                    n: 1,
                    br: i.d.readUint32,
                    bw: i.h.writeUint32,
                  },
                  candidates: { n: 2, c: Q, r: !0, q: !0 },
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
          let t = new r.BinaryReader(e),
            a = new X();
          return X.deserializeBinaryFromReader(a, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.b(X.MBF(), e, t);
        }
        serializeBinary() {
          var e = new r.BinaryWriter();
          return X.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.f(X.M(), e, t);
        }
        serializeBase64String() {
          var e = new r.BinaryWriter();
          return X.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CBroadcast_WebRTCGetHostCandidates_Response";
        }
      }
      class J extends n {
        constructor(e = null) {
          super(),
            J.prototype.broadcast_session_id || i.a(J.M()),
            n.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            J.sm_m ||
              (J.sm_m = {
                proto: J,
                fields: {
                  broadcast_session_id: {
                    n: 1,
                    br: i.d.readFixed64String,
                    bw: i.h.writeFixed64String,
                  },
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
          let t = new r.BinaryReader(e),
            a = new J();
          return J.deserializeBinaryFromReader(a, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.b(J.MBF(), e, t);
        }
        serializeBinary() {
          var e = new r.BinaryWriter();
          return J.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.f(J.M(), e, t);
        }
        serializeBase64String() {
          var e = new r.BinaryWriter();
          return J.serializeBinaryToWriter(this, e), e.getResultBase64String();
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
          let t = new r.BinaryReader(e),
            a = new $();
          return $.deserializeBinaryFromReader(a, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.b($.MBF(), e, t);
        }
        serializeBinary() {
          var e = new r.BinaryWriter();
          return $.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.f($.M(), e, t);
        }
        serializeBase64String() {
          var e = new r.BinaryWriter();
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
          let t = new r.BinaryReader(e),
            a = new ee();
          return ee.deserializeBinaryFromReader(a, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.b(ee.MBF(), e, t);
        }
        serializeBinary() {
          var e = new r.BinaryWriter();
          return ee.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.f(ee.M(), e, t);
        }
        serializeBase64String() {
          var e = new r.BinaryWriter();
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
          let t = new r.BinaryReader(e),
            a = new te();
          return te.deserializeBinaryFromReader(a, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.b(te.MBF(), e, t);
        }
        serializeBinary() {
          var e = new r.BinaryWriter();
          return te.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.f(te.M(), e, t);
        }
        serializeBase64String() {
          var e = new r.BinaryWriter();
          return te.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CBroadcast_WebRTCSetAnswer_Notification";
        }
      }
      class ae extends n {
        constructor(e = null) {
          super(),
            ae.prototype.broadcast_session_id || i.a(ae.M()),
            n.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            ae.sm_m ||
              (ae.sm_m = {
                proto: ae,
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
                  candidate: { n: 3, c: Q },
                },
              }),
            ae.sm_m
          );
        }
        static MBF() {
          return ae.sm_mbf || (ae.sm_mbf = i.e(ae.M())), ae.sm_mbf;
        }
        toObject(e = !1) {
          return ae.toObject(e, this);
        }
        static toObject(e, t) {
          return i.g(ae.M(), e, t);
        }
        static fromObject(e) {
          return i.c(ae.M(), e);
        }
        static deserializeBinary(e) {
          let t = new r.BinaryReader(e),
            a = new ae();
          return ae.deserializeBinaryFromReader(a, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.b(ae.MBF(), e, t);
        }
        serializeBinary() {
          var e = new r.BinaryWriter();
          return ae.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.f(ae.M(), e, t);
        }
        serializeBase64String() {
          var e = new r.BinaryWriter();
          return ae.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CBroadcast_WebRTCAddViewerCandidate_Notification";
        }
      }
      var re, ie;
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
            return e.SendMsg("Broadcast.PostChatMessage#1", t, E, {
              ePrivilege: 3,
            });
          }),
          (e.UpdateChatMessageFlair = function (e, t) {
            return e.SendMsg("Broadcast.UpdateChatMessageFlair#1", t, O, {
              ePrivilege: 1,
            });
          }),
          (e.MuteBroadcastChatUser = function (e, t) {
            return e.SendMsg("Broadcast.MuteBroadcastChatUser#1", t, R, {
              ePrivilege: 3,
            });
          }),
          (e.RemoveUserChatText = function (e, t) {
            return e.SendMsg("Broadcast.RemoveUserChatText#1", t, G, {
              ePrivilege: 3,
            });
          }),
          (e.GetBroadcastChatUserNames = function (e, t) {
            return e.SendMsg("Broadcast.GetBroadcastChatUserNames#1", t, j, {
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
            return e.SendMsg("Broadcast.SetClipDetails#1", t, N, {
              ePrivilege: 1,
              eWebAPIKeyRequirement: 2,
            });
          }),
          (e.GetClipDetails = function (e, t) {
            return e.SendMsg("Broadcast.GetClipDetails#1", t, L, {
              bConstMethod: !0,
              ePrivilege: 0,
              eWebAPIKeyRequirement: 2,
            });
          }),
          (e.SetRTMPInfo = function (e, t) {
            return e.SendMsg("Broadcast.SetRTMPInfo#1", t, F, {
              ePrivilege: 1,
            });
          }),
          (e.GetRTMPInfo = function (e, t) {
            return e.SendMsg("Broadcast.GetRTMPInfo#1", t, P, {
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
            return e.SendMsg("Broadcast.WebRTCSetAnswer#1", t, Y, {
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
            return e.SendMsg("Broadcast.WebRTCGetHostCandidates#1", t, X, {
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
      })(re || (re = {})),
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
              request: f,
            }),
            (e.NotifyViewerBroadcastInviteHandler = {
              name: "BroadcastClient.NotifyViewerBroadcastInvite#1",
              request: B,
            }),
            (e.NotifyBroadcastStatusHandler = {
              name: "BroadcastClient.NotifyBroadcastStatus#1",
              request: v,
            }),
            (e.NotifyBroadcastChannelLiveHandler = {
              name: "BroadcastClient.NotifyBroadcastChannelLive#1",
              request: S,
            }),
            (e.SendThumbnailToRelayHandler = {
              name: "BroadcastClient.SendThumbnailToRelay#1",
              request: y,
            }),
            (e.NotifyWebRTCNeedTURNServerHandler = {
              name: "BroadcastClient.NotifyWebRTCNeedTURNServer#1",
              request: J,
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
              request: ae,
            });
        })(ie || (ie = {}));
    },
    aF8t: function (e, t, a) {
      "use strict";
      a.d(t, "a", function () {
        return n;
      });
      var r = a("VVjd"),
        i = a.n(r);
      function n() {
        return window.innerWidth < parseInt(i.a.strMaxMobileWidth);
      }
    },
    bCaE: function (e, t, a) {
      "use strict";
      a.d(t, "a", function () {
        return l;
      });
      var r = a("q1tI"),
        i = a.n(r),
        n = a("/Q1a"),
        s = (a("Nr4G"), a("GbHM")),
        o = a("Y3DF");
      function l(e) {
        const { bAllowOutsideOfDeck: t } = e;
        if (!n.d.IN_GAMEPADUI && !t) return null;
        let a = "unknown";
        switch (e.eDeckCompatibilityCategory) {
          case 3:
            a = "verified";
            break;
          case 2:
            a = "playable";
            break;
          case 1:
            a = "unsupported";
        }
        return i.a.createElement("div", {
          className: Object(s.a)(
            o.CompatIcon,
            "ds_steam_deck_compat",
            a,
            e.className
          ),
        });
      }
    },
    bmfB: function (e, t, a) {
      "use strict";
      a.d(t, "d", function () {
        return _;
      }),
        a.d(t, "a", function () {
          return h;
        }),
        a.d(t, "b", function () {
          return b;
        }),
        a.d(t, "c", function () {
          return f;
        }),
        a.d(t, "f", function () {
          return v;
        }),
        a.d(t, "e", function () {
          return S;
        }),
        a.d(t, "g", function () {
          return y;
        });
      var r = a("mrSG"),
        i = a("Ys0h"),
        n = a("vDqi"),
        s = a.n(n),
        o = a("2vnA"),
        l = (a("msu0"), a("HGFm"), a("XrGS"), a("oleE")),
        c = (a("uLSr"), a("3XYX")),
        d = a("ue1x"),
        m = a("8r/D"),
        u = a("TqgT"),
        p = a("/Q1a");
      a("Wtw7");
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
            this.m_lookupStreams.forEach((a) => {
              t ||
                (t =
                  Boolean(a) &&
                  a.some(
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
            this.m_lookupStreams.forEach((a) => {
              null == a ||
                a.forEach((a) => {
                  c.a.GetOrCreateBroadcastInfo(a.steamid).m_nAppID === e &&
                    t.push(a);
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
          return Object(r.a)(this, void 0, void 0, function* () {
            if (void 0 === this.m_bUserPreferenceHideBroadcastByDefault) {
              let t = Object(p.h)("broadcastuser", "application_config");
              if (!t)
                try {
                  let a =
                      p.d.STORE_BASE_URL +
                      "broadcast/ajaxgetuserbroadcastpreferences",
                    r = yield s.a.get(a, { params: {}, cancelToken: e.token });
                  t = r.data;
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
          return Object(r.a)(this, void 0, void 0, function* () {
            (this.m_bUseFakeData = !1),
              (this.m_streamChatStatus = "remove"),
              yield i.a
                .Get()
                .QueueAppRequest(e.nAppIDVOD, {
                  include_assets: !0,
                  include_trailers: !0,
                });
            const a = i.a.Get().GetApp(e.nAppIDVOD),
              r = new g();
            if (
              ((r.accountid = 0),
              (r.nAppIDVOD = e.nAppIDVOD),
              (r.default_selection_priority = b.k_ePrimary),
              (r.current_selection_priority = b.k_ePrimary),
              (r.thumbnail_http_address =
                (null == a ? void 0 : a.GetAssets().GetHeaderURL()) || ""),
              (r.title = (null == a ? void 0 : a.GetName()) || ""),
              this.GetStreams(e).unshift(r),
              t)
            ) {
              const t = this.GetStreamsLookupKeyFromDef(e);
              this.m_playReadyStream.set(t, r);
            }
          });
        }
        HintLoadEmbeddablePreviewStreams(e) {
          return Object(r.a)(this, void 0, void 0, function* () {
            let t = null,
              a = {
                eventid: e.event ? e.event.GID : void 0,
                previewAccounts: Boolean(e.bIsPreview && e.accountIDs)
                  ? e.accountIDs.slice().sort().join(",")
                  : void 0,
              };
            try {
              return (
                (t = yield s.a.get(
                  p.d.STORE_BASE_URL + "broadcast/ajaxgetstreamersforpreview",
                  { params: a }
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
          return Object(r.a)(this, void 0, void 0, function* () {
            let t = this.MapEmbeddableStreamToRequest(e),
              a = this.GetStreamsLookupKeyFromParam(t);
            if (!this.m_inFlightRequests.has(a)) {
              this.m_lookupKeyToEmbedStreamDef.set(a, e);
              const r = this.InternalHintLoadEmbeddableStreams(e, t);
              this.m_inFlightRequests.set(a, r);
            }
            return this.m_inFlightRequests.get(a);
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
          return Object(r.a)(this, void 0, void 0, function* () {
            let a = Object(p.h)(
              "broadcast_available_for_page",
              "application_config"
            );
            if (this.ValidateBroadcastPageStreamers(a))
              return this.HandleHintLoadBroadcastResponse(e, a);
            try {
              let a = null;
              return (
                (a = yield s.a.get(
                  p.d.STORE_BASE_URL + "broadcast/ajaxgetstreamersforpage",
                  { params: t }
                )),
                this.HandleHintLoadBroadcastResponse(e, a.data)
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
          var a;
          return Object(r.a)(this, void 0, void 0, function* () {
            (this.m_bUseFakeData = !1),
              e.bIsPreview &&
                ((null === (a = null == t ? void 0 : t.filtered) || void 0 === a
                  ? void 0
                  : a.length) > 0
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
            const r = new Array();
            Object(o.G)(() => {
              t.filtered.forEach((e) => {
                if (!e.steamid) {
                  const t = l.a.InitFromAccountID(e.accountid);
                  e.steamid = t.ConvertTo64BitString();
                }
                const t = c.a.GetOrCreateBroadcastInfo(e.steamid),
                  a = e.appid ? Number(e.appid) : c.d;
                (t.m_nAppID = a),
                  (t.m_strAppId = "" + a),
                  void 0 === e.current_selection_priority &&
                    (e.current_selection_priority =
                      e.default_selection_priority),
                  a != c.d && r.push(a);
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
          var a, r;
          const i = Array.from(
              null !== (a = e.jsondata.broadcast_whitelist) && void 0 !== a
                ? a
                : []
            ),
            n = Array.from(
              null !== (r = e.jsondata.broadcast_priority) && void 0 !== r
                ? r
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
          return Object(r.a)(this, void 0, void 0, function* () {
            let a = this.GetStreamsLookupKeyFromDef(e);
            if (this.m_bMapHasStartedVideo.get(a)) return null;
            if (this.m_bUseFakeData) {
              if (!this.m_playReadyStream.get(a)) {
                const e = {
                  accountid: 0,
                  thumbnail_http_address: "",
                  default_selection_priority: b.k_eGeneral,
                  current_selection_priority: b.k_eGeneral,
                };
                this.m_playReadyStream.set(a, e);
              }
              return this.m_playReadyStream;
            }
            const r = new Set();
            for (;;) {
              const a = t.filter((e) => !r.has(e)),
                i = this.GetAutoStartStream(a);
              if (!i) return null;
              if (yield this.AttemptToPlayStream(e, i)) return i;
              r.add(i);
            }
          });
        }
        AttemptToPlayStream(e, t) {
          return Object(r.a)(this, void 0, void 0, function* () {
            let a = this.GetStreamsLookupKeyFromDef(e);
            if (
              (this.m_bMapHasStartedVideo.set(a, !0),
              this.m_mapBroadcastChecked.has(t.accountid) ||
                this.m_mapBroadcastChecked.set(
                  t.accountid,
                  this.InternalAttemptToPlayStream(e, t)
                ),
              t.nAppIDVOD)
            )
              this.m_playReadyStream.set(a, t);
            else {
              const r = yield this.m_mapBroadcastChecked.get(t.accountid);
              if (1 != (null == r ? void 0 : r.success)) return null;
              (t.steamid = r.steamid),
                this.m_playReadyStream.set(a, t),
                this.GetConcurrentStreams(e) > 1
                  ? (this.m_streamChatStatus = "hide")
                  : (this.m_streamChatStatus = t.broadcast_chat_visibility),
                this.m_setStreamChangedListeners.forEach((e) => e(t));
              S(c.a.GetOrCreateBroadcastInfo(t.steamid).m_nAppID, 1, t.snr);
            }
            return t;
          });
        }
        InternalAttemptToPlayStream(e, t) {
          return Object(r.a)(this, void 0, void 0, function* () {
            this.GetStreamsLookupKeyFromDef(e);
            let a = null;
            try {
              const e = p.d.STORE_BASE_URL + "broadcast/ajaxcheckbroadcast";
              let r = {
                broadcastaccountid: t.accountid,
                viewer_token: c.a.GetViewerToken(),
                origin: self.origin,
              };
              return (a = yield s.a.get(e, { params: r })), a.data;
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
            a = t.reduce((e, t) => Math.max(e, f(t)), 0),
            r = t.filter((e) => f(e) === a);
          if (0 === r.length) return null;
          return r[Math.floor(Math.random() * r.length)];
        }
        MapEmbeddableStreamToRequest(e) {
          var t, a, r;
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
              null === (a = e.event) || void 0 === a
                ? void 0
                : a.GetContentHubCategory(),
            hubtagid:
              null === (r = e.event) || void 0 === r
                ? void 0
                : r.GetContentHubTag(),
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
      Object(r.b)([o.C], h.prototype, "m_lookupStreams", void 0),
        Object(r.b)([o.C], h.prototype, "m_playReadyStream", void 0),
        Object(r.b)([o.C], h.prototype, "m_pageChatStatus", void 0),
        Object(r.b)([o.C], h.prototype, "m_streamChatStatus", void 0),
        Object(r.b)([o.C], h.prototype, "m_bUserChatExpanded", void 0),
        Object(r.b)(
          [o.C],
          h.prototype,
          "m_bUserPreferenceHideBroadcastByDefault",
          void 0
        ),
        Object(r.b)([o.C], h.prototype, "m_bCollapsed", void 0),
        Object(r.b)(
          [o.k],
          h.prototype,
          "HintLoadEmbeddablePreviewStreams",
          null
        ),
        Object(r.b)([o.k], h.prototype, "AttemptToPlayStream", null),
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
      function f(e) {
        return e.current_selection_priority || b.k_eGeneral;
      }
      function v(e) {
        e.sort((e, t) =>
          f(e) != f(t)
            ? f(t) - f(e)
            : e.viewer_count != t.viewer_count
            ? t.viewer_count - e.viewer_count
            : t.accountid - e.accountid
        );
      }
      function S(e, t, a) {
        return Object(r.a)(this, void 0, void 0, function* () {
          if (e > 0 && 7 != e && a) {
            let r = new URLSearchParams();
            r.append("page_action", "" + t),
              r.append("snr", a),
              s.a.post(
                p.d.STORE_BASE_URL + "ajaxreportproductaction/" + e + "/",
                r
              );
          }
        });
      }
      Object(r.b)([o.C], g.prototype, "title", void 0),
        Object(r.b)([o.C], g.prototype, "viewer_count", void 0),
        Object(r.b)([o.C], g.prototype, "gamedata_subtitle", void 0),
        Object(r.b)([o.C], g.prototype, "current_selection_priority", void 0);
      const y = new m.a();
    },
    d4Nf: function (e, t, a) {
      "use strict";
      a.d(t, "b", function () {
        return o;
      }),
        a.d(t, "a", function () {
          return l;
        });
      var r = a("/Q1a"),
        i = (a("2vnA"), a("6iBs"), a("xH93")),
        n = (a("QAsS"), a("8G9o"), a("f5iL"));
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
          return r.d.MEDIA_CDN_URL + `steam/apps/${this.m_unAppID}/header.jpg`;
        }
        get icon_url_no_default() {
          return this.m_strIconURL && this.BuildAppURL(this.m_strIconURL, s);
        }
        get icon_url() {
          return this.BuildAppURL(this.m_strIconURL, s);
        }
        get logo_url() {
          return (
            r.d.MEDIA_CDN_URL +
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
            ? r.d.MEDIA_CDN_COMMUNITY_URL +
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
    fmsa: function (e, t, a) {
      "use strict";
      a.d(t, "e", function () {
        return _;
      }),
        a.d(t, "d", function () {
          return h;
        }),
        a.d(t, "a", function () {
          return b;
        }),
        a.d(t, "f", function () {
          return g;
        }),
        a.d(t, "b", function () {
          return f;
        }),
        a.d(t, "c", function () {
          return v;
        });
      var r = a("mrSG"),
        i = a("q1tI"),
        n = a("xoHR"),
        s = a("GXif"),
        o = a("TyAF"),
        l = a("GbHM"),
        c = a("Nt3m"),
        d = a("ox7B"),
        m = a.n(d),
        u = a("ue1x");
      const p = a("f0Wu");
      function _(e) {
        const t = p.tz.guess(),
          a = p.unix(e).tz(t),
          r = Object(s.c)();
        return r && a.locale(r), a.format("LT");
      }
      function h(e, t) {
        const a = p.tz.guess(),
          r = p.unix(e).tz(a),
          n = Object(s.c)();
        return (
          n && r.locale(n),
          i.createElement(
            i.Fragment,
            null,
            r.format("LT"),
            t
              ? i.createElement(
                  "span",
                  { "data-tooltip-text": r.format("Z") + ", " + a },
                  " ",
                  r.zoneAbbr()
                )
              : null
          )
        );
      }
      const b = Object(o.a)((e) => {
          const {
              dateAndTime: t,
              bSingleLine: a,
              bOnlyTime: r,
              bOnlyDate: n,
            } = e,
            o = !r && Boolean(t),
            l = !n && Boolean(t),
            c = o && Object(s.l)(t),
            d = e.stylesmodule
              ? Object.assign(Object.assign({}, m.a), e.stylesmodule)
              : m.a;
          return a
            ? i.createElement(
                "span",
                { className: r || n ? d.DateAndTimeInline : d.DateAndTime },
                o && c,
                i.createElement("span", null, " "),
                Boolean(t && l) && h(t, !0)
              )
            : i.createElement(
                "div",
                { className: d.DateAndTime },
                o &&
                  i.createElement(
                    i.Fragment,
                    null,
                    i.createElement("div", { className: d.LocalizedDate }, c),
                    " ",
                    i.createElement("span", { className: d.At }, "@")
                  ),
                i.createElement(
                  "div",
                  { className: d.LocalizedTime },
                  Boolean(t && l) && h(t, !0)
                )
              );
        }),
        g = (e) => {
          var t;
          const a = i.createElement(b, {
            dateAndTime: e.rtFullDate,
            bSingleLine: !0,
            stylesmodule: e.stylesmodule,
          });
          return i.createElement(
            n.a,
            {
              toolTipContent: a,
              direction: "top",
              className: e.className,
              strTooltipClassname:
                null === (t = e.stylesmodule) || void 0 === t
                  ? void 0
                  : t.DateToolTip,
            },
            e.children
          );
        };
      let f = class extends i.Component {
        render() {
          const { startDateAndTime: e, endDateAndTime: t } = this.props,
            a = this.props.stylesmodule
              ? Object.assign(Object.assign({}, m.a), this.props.stylesmodule)
              : m.a;
          let r =
            this.props.bHideEndTime ||
            null == this.props.endDateAndTime ||
            this.props.endDateAndTime < 1;
          if (null == e || 0 == e)
            return i.createElement(
              "div",
              { className: a.DateAndTime },
              i.createElement(
                "span",
                { className: a.RightSideTitles },
                Object(s.g)("#EventDisplay_TimeRange")
              ),
              Object(s.g)("#EventDisplay_TimeDisplayNone")
            );
          let n = u.a.GetTimeNowWithOverride();
          if (r)
            return i.createElement(
              "div",
              { className: a.StartDate },
              i.createElement(
                "div",
                { className: a.RightSideTitles },
                Object(s.g)(
                  e < n
                    ? "#EventDisplay_TimeInPast"
                    : "#EventDisplay_TimeUpcoming"
                ),
                " "
              ),
              i.createElement(b, { stylesmodule: a, dateAndTime: e })
            );
          let o = e <= n && n <= t;
          const d = Object(c.a)(new Date(1e3 * e), new Date(1e3 * t));
          return i.createElement(
            "div",
            { className: a.MultiDateAndTime },
            i.createElement(
              "div",
              { className: a.StartDate },
              i.createElement(
                "span",
                { className: a.RightSideTitles },
                Object(s.g)(
                  e >= n
                    ? "#EventDisplay_TimeBeginsOn"
                    : t >= n
                    ? "#EventDisplay_TimeBeginsOn_Past"
                    : "#EventDisplay_TimeBeginsOn_StartAndEnd_Past"
                )
              ),
              i.createElement(b, {
                stylesmodule: a,
                bSingleLine: !0,
                dateAndTime: e,
              })
            ),
            i.createElement(
              "div",
              { className: a.EndDate },
              i.createElement(
                "span",
                { className: a.RightSideTitles },
                Object(s.g)(
                  t < n
                    ? "#EventDisplay_TimeEndsOn_Past"
                    : "#EventDisplay_TimeEndsOn"
                )
              ),
              i.createElement(b, {
                stylesmodule: a,
                bSingleLine: !0,
                bOnlyTime: d,
                dateAndTime: t,
              })
            ),
            o &&
              i.createElement(
                "span",
                { className: a.ActiveEvent },
                i.createElement(
                  "span",
                  {
                    className: Object(l.a)(
                      a.RightSideTitles,
                      a.ActiveEventCallOut
                    ),
                  },
                  Object(s.g)("#Time_Now")
                )
              )
          );
        }
      };
      f = Object(r.b)([o.a], f);
      let v = class extends i.Component {
        render() {
          const {
              startDateAndTime: e,
              endDateAndTime: t,
              bHideEndTime: a,
            } = this.props,
            r = this.props.stylesmodule
              ? Object.assign(Object.assign({}, m.a), this.props.stylesmodule)
              : m.a;
          if (null == e || 0 == e)
            return i.createElement(
              "div",
              { className: r.DateAndTime },
              i.createElement(
                "span",
                { className: r.RightSideTitles },
                Object(s.g)("#EventDisplay_TimeRange")
              ),
              Object(s.g)("#EventDisplay_TimeDisplayNone")
            );
          const n = u.a.GetTimeNowWithOverrideAsDate(),
            o = u.a.GetTimeNowWithOverride(),
            l = Object(c.b)(new Date(1e3 * e), n),
            d = i.createElement(
              "div",
              { className: r.ShortDateAndTime },
              Object(s.l)(e, l)
            );
          let p = i.createElement(
            g,
            { rtFullDate: e, stylesmodule: r },
            i.createElement(
              "div",
              { className: r.RightSideTitles },
              Object(s.g)(
                e < o
                  ? "#EventDisplay_TimeInPast"
                  : "#EventDisplay_TimeUpcoming"
              )
            ),
            d
          );
          if (
            (o < e &&
              e < o + c.e.PerWeek &&
              (p = i.createElement(
                g,
                { rtFullDate: e, stylesmodule: r },
                i.createElement(
                  "div",
                  { className: r.RightSideTitles },
                  Object(s.p)(
                    "#EventDisplay_EventUpcoming_WithDateAndTime",
                    d,
                    i.createElement(
                      "div",
                      { className: r.ShortDateAndTime },
                      h(e),
                      " "
                    )
                  )
                )
              )),
            a || null == t || t < 1)
          )
            return p;
          const _ = e <= o && o <= t;
          _ &&
            (p = i.createElement(
              g,
              { rtFullDate: e, className: r.ActiveEvent, stylesmodule: r },
              i.createElement(
                "span",
                { className: r.ActiveEventCallOut },
                Object(s.g)("#Time_Now")
              )
            ));
          let b = null;
          const f = _ ? t - o : t - e;
          if (f <= c.e.PerDay) {
            const e = i.createElement(
              "div",
              { className: r.ShortDateAndTime },
              Object(s.s)(f, !0)
            );
            b =
              t < o
                ? i.createElement(
                    "div",
                    { className: r.RightSideTitles },
                    Object(s.g)("#EventDisplay_TimeEndsOn_Ran"),
                    e
                  )
                : i.createElement(
                    "div",
                    { className: r.RightSideTitles },
                    Object(s.p)(
                      _
                        ? "#EventDisplay_TimeLeft"
                        : "#EventDisplay_RunsForDuration",
                      e
                    )
                  );
          } else {
            const e = n.getFullYear() == new Date(1e3 * t).getFullYear();
            b = i.createElement(
              i.Fragment,
              null,
              i.createElement(
                "div",
                { className: r.RightSideTitles },
                Object(s.g)(
                  t < o
                    ? "#EventDisplay_TimeEndsOn_Past"
                    : "#EventDisplay_TimeEndsOn"
                )
              ),
              i.createElement(
                "div",
                { className: r.ShortDateAndTime },
                Object(s.l)(t, e)
              )
            );
          }
          const v = i.createElement(g, { rtFullDate: t, stylesmodule: r }, b);
          return i.createElement("div", { className: r.ShortDateRange }, p, v);
        }
      };
      v = Object(r.b)([o.a], v);
    },
    hNBN: function (e, t, a) {
      "use strict";
      a.d(t, "a", function () {
        return C;
      });
      var r = a("mrSG"),
        i = a("aoTL"),
        n = a("q1tI"),
        s = a.n(n),
        o = (a("Zdsb"), a("lfGQ")),
        l = a("FmLm"),
        c = a("zy5s"),
        d = a.n(c),
        m = a("+VGL"),
        u = a.n(m),
        p = a("tXj3"),
        _ = a("thkD"),
        h = a("jIgc"),
        b = a("e356"),
        g = a("0JCO"),
        f = a("kWcV"),
        v = a("TqgT"),
        S = a("GbHM"),
        y = a("GXif"),
        B = a("/Q1a");
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
        const [t, a] = s.a.useState(!1),
          [n, c] = s.a.useState(!l.a.Get().BIsLoaded()),
          m = Object(g.c)(),
          { appid: _, bIsFree: h, bIsComingSoon: C, className: E } = e,
          [I, O] = Object(i.d)(() => [
            l.a.Get().BIsGameWishlisted(_),
            l.a.Get().BOwnsApp(_),
          ]);
        s.a.useEffect(() => {
          (() => {
            Object(r.a)(this, void 0, void 0, function* () {
              yield l.a.Get().HintLoad(), c(!1);
            });
          })();
        }, []);
        return O || (!C && h)
          ? null
          : s.a.createElement(
              "div",
              {
                className: Object(S.a)(d.a.WishList, u.a.FlexRowContainer, E),
                onClick: () =>
                  Object(r.a)(this, void 0, void 0, function* () {
                    if (B.l.logged_in) {
                      if (!t) {
                        a(!0);
                        const e = !I;
                        try {
                          const t = yield l.a
                            .Get()
                            .UpdateGameWishlist(_, e, Object(o.c)(m));
                          a(!1),
                            1 != t.success && w(Object(v.a)(t).strErrorMsg);
                        } catch (e) {
                          a(!1), w(Object(v.a)(e).strErrorMsg);
                        }
                      }
                    } else Object(p.a)();
                  }),
                "data-tooltip-text": Object(y.g)("#AddToWishlist_ttip"),
              },
              s.a.createElement(
                "span",
                null,
                (n || t) && s.a.createElement(f.a, { size: "small" })
              ),
              !t && I && s.a.createElement(b.q, null),
              s.a.createElement(
                "span",
                null,
                Object(y.g)(
                  t
                    ? "#Updating"
                    : n
                    ? "#Loading"
                    : I
                    ? "#Wishlisted_short"
                    : "#AddToWishlist_short"
                )
              )
            );
      }
    },
    "i1T+": function (e, t, a) {
      "use strict";
      a.d(t, "a", function () {
        return u;
      });
      var r = a("vDqi"),
        i = a.n(r),
        n = a("q1tI"),
        s = a("GpIp"),
        o = (a("XrGS"), a("yfxr"), a("FmLm")),
        l = (a("X/lQ"), a("hAgw")),
        c = a("RrtU"),
        d = (a("4EJs"), a("1mk1"));
      class m {}
      function u(e, t) {
        const a = Object(n.useRef)(i.a.CancelToken.source()),
          { id: r, type: u } = e,
          p = t ? Object.assign(Object.assign({}, s.e), t) : s.e,
          _ = Object(n.useMemo)(() => ({ id: r, type: u }), [r, u]),
          [h] = Object(c.a)(_.id, Object(l.d)(_.type), p),
          [b, g] = Object(n.useState)({ id: r, type: u }),
          [f] = Object(c.a)(
            null == b ? void 0 : b.id,
            Object(l.d)(null == b ? void 0 : b.type),
            p
          ),
          v = Object(n.useMemo)(() => {
            var e;
            return (null === (e = null == f ? void 0 : f.GetIncludedAppIDs()) ||
            void 0 === e
              ? void 0
              : e.length) > 1 &&
              null ==
                (null == f ? void 0 : f.GetAssets().GetMainCapsuleURL()) &&
              null == (null == f ? void 0 : f.GetAssets().GetHeaderURL())
              ? { id: f.GetIncludedAppIDs()[0], type: "game" }
              : b;
          }, [b, f]),
          [S] = Object(c.b)(null == v ? void 0 : v.id, p),
          y = Object(n.useMemo)(
            () => ({
              id:
                (null == f ? void 0 : f.GetParentAppID()) !=
                (null == f ? void 0 : f.GetID())
                  ? null == f
                    ? void 0
                    : f.GetParentAppID()
                  : void 0,
              type: "game",
            }),
            [f]
          ),
          [B] = Object(c.b)(y.id, p),
          [w] = Object(n.useState)(++m.instance_count),
          [C, E] = Object(n.useState)(!1),
          [I, O] = Object(n.useState)(Object(d.b)(u)),
          [T, R] = Object(n.useState)(r);
        return (
          Object(n.useEffect)(() => {
            if (
              (o.a.Get().HintLoad(),
              1 == (null == h ? void 0 : h.GetStoreItemType()) &&
                1 == h.GetIncludedAppIDs().length &&
                (b.id != h.GetIncludedAppIDs()[0] || "game" != b.type) &&
                !(null == a ? void 0 : a.current.token.reason))
            ) {
              const e = h.GetIncludedAppIDs()[0];
              g({ id: e, type: "game" }), O("app"), R(e);
            }
          }, [b.id, b.type, h]),
          Object(n.useEffect)(
            () => () =>
              null == a
                ? void 0
                : a.current.cancel("StoreSalePreviewWidget: unmounting"),
            []
          ),
          {
            myInstance: w,
            bIsHovered: C,
            setIsHovered: E,
            purchaseInfo: _,
            displayInfo: b,
            displayStoreItem: f,
            baseGameStoreItem: B,
            baseGameInfo: y,
            hoverType: I,
            nHoverId: T,
            artworkInfo: v,
            artworkStoreItem: S,
          }
        );
      }
      m.instance_count = 0;
    },
    i5oW: function (e, t, a) {
      "use strict";
      a.d(t, "a", function () {
        return c;
      });
      var r = a("mrSG"),
        i = a("q1tI"),
        n = a.n(i),
        s = a("2KLf"),
        o = a("uuth"),
        l = a("hCpY");
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
      Object(r.b)([l.b], c.prototype, "OnEnter", null);
    },
    "j/dN": function (e, t, a) {
      "use strict";
      a.d(t, "a", function () {
        return u;
      });
      var r = a("TyAF"),
        i = a("q1tI"),
        n = a.n(i),
        s = (a("Zdsb"), a("wQEA")),
        o = a("FmLm"),
        l = a("GbHM"),
        c = a("GXif"),
        d = a("zy5s"),
        m = a.n(d);
      const u = Object(r.a)((e) => {
        const { appid: t, bIsMuted: a } = e,
          r = o.a.Get().BOwnsApp(t),
          i = Object(l.a)(
            m.a.CapsuleBottomBar,
            a && m.a.Muted,
            r ? m.a.PlayNowButton : m.a.AddToLibraryButton
          );
        return n.a.createElement(
          "div",
          {
            onClick: (e) => {
              e.preventDefault(),
                r ? Object(s.a)(t) : o.a.Get().AddLicenseForFreeGame(t);
            },
            className: i,
          },
          Object(c.g)(r ? "#Sale_PlayNow" : "#Sale_AddToLibrary")
        );
      });
    },
    j4v3: function (e, t, a) {
      "use strict";
      a.d(t, "a", function () {
        return r;
      }),
        a.d(t, "b", function () {
          return i;
        }),
        a.d(t, "g", function () {
          return p;
        }),
        a.d(t, "h", function () {
          return _;
        }),
        a.d(t, "f", function () {
          return b;
        }),
        a.d(t, "d", function () {
          return f;
        }),
        a.d(t, "i", function () {
          return v;
        }),
        a.d(t, "e", function () {
          return S;
        }),
        a.d(t, "c", function () {
          return y;
        });
      var r,
        i,
        n = a("q1tI"),
        s = a("EC67"),
        o = (a("XrGS"), a("oleE"), a("fsrB")),
        l = a("f5iL"),
        c = a("/Q1a"),
        d = a("vEiK");
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
      })(r || (r = {})),
        (function (e) {
          (e.k_eFacebook = "facebook"),
            (e.k_eTwitter = "twitter"),
            (e.k_eReddit = "reddit");
        })(i || (i = {}));
      const m =
        /(?:steampowered\.com|valve\.org\/store|\.steamchina\.com|steamcommunity\.com|valve\.org\/community)\/(\w+)(\/|$)/i;
      function u(e, t) {
        const a = "store" === Object(c.g)(),
          i = (function (e) {
            const t = e.match(m);
            return null == t ? void 0 : t[1];
          })(window.location.href),
          n = a && "news" == i,
          s = "community" === Object(c.g)(),
          o = t.appid ? "games" : "groups",
          d =
            s &&
            o == i &&
            ((t.appid && t.appid === c.c.APPID) ||
              (!t.appid && t.clanSteamID.GetAccountID() === c.c.CLANACCOUNTID));
        switch (e) {
          case r.k_eView:
            return d || n;
          case r.k_eCommunityView:
          case r.k_eCommunityEdit:
          case r.k_eCommunityEditBroadcast:
          case r.k_eCommunityAdminPage:
          case r.k_eCommunityPublish:
          case r.k_eCommunityMigrate:
          case r.k_eCommunityPreview:
          case r.k_eCommunityPreviewSale:
          case r.k_eCommunityAnnouncementHub:
            return d;
          case r.k_eViewWebSiteHub:
            return d || n;
          case r.k_eStoreView:
          case r.k_eStoreNewsHub:
          case r.k_eStoreOwnerPage:
          case r.k_eStoreUsersNewsHub:
            return n;
          case r.k_eStoreSalePage:
            return !1;
          default:
            return (
              Object(l.a)(!1, "Unknown route specified for link: " + e), !1
            );
        }
      }
      function p(e, t) {
        const a =
          c.d.COMMUNITY_BASE_URL +
          "gid/" +
          e.clanSteamID.ConvertTo64BitString() +
          "/announcements/share/" +
          e.AnnouncementGID +
          "?site=" +
          t;
        return t === i.k_eFacebook ? a + "&t=" + Math.random() : a;
      }
      function _(e) {
        return g(e, r.k_eStoreView, "absolute");
      }
      function h(e, t, a) {
        if (a)
          return (
            (e ? "/games/" + c.c.VANITY_ID : "/groups/" + c.c.VANITY_ID) + "/"
          );
        const r = e ? "ogg/" + e : "gid/" + t.ConvertTo64BitString();
        return c.d.COMMUNITY_BASE_URL + r + "/";
      }
      function b() {
        return "news";
      }
      function g(e, t, a) {
        const i = "relative" === a,
          n = "community" === Object(c.g)(),
          s = i ? "/" : c.d.STORE_BASE_URL,
          o = h(e.appid, e.clanSteamID, i);
        t === r.k_eView
          ? (t = n ? r.k_eCommunityView : r.k_eStoreView)
          : t === r.k_eViewWebSiteHub &&
            (t = n ? r.k_eCommunityAnnouncementHub : r.k_eStoreNewsHub);
        const d = e.GID ? e.GID : "",
          m = e.AnnouncementGID ? e.AnnouncementGID : "";
        switch (t) {
          case r.k_eCommunityPublish:
            return (
              o +
              (e.bOldAnnouncement
                ? "partnerevents/migrate_announcement/" + m
                : "partnerevents/publish/" + d + "?tab=publishing")
            );
          case r.k_eCommunityEdit:
            return (
              o +
              (e.bOldAnnouncement
                ? "partnerevents/migrate_announcement/" + m
                : "partnerevents/edit/" + d)
            );
          case r.k_eCommunityEditBroadcast:
            return (
              o +
              (e.bOldAnnouncement
                ? "partnerevents/migrate_announcement/" + m
                : "partnerevents/edit/" + d) +
              "?tab=broadcast"
            );
          case r.k_eCommunityMigrate:
            return o + "partnerevents/migrate_announcement/" + m;
          case r.k_eCommunityPreview:
            return (
              o +
              (e.bOldAnnouncement
                ? "partnerevents/preview_old_announcement/" + m
                : "partnerevents/preview/" + d)
            );
          case r.k_eCommunityPreviewSale:
            return o + "partnerevents/previewsale/" + d;
          case r.k_eCommunityAdminPage:
            return o + "partnerevents";
          case r.k_eCommunityAnnouncementHub:
            return o + "announcements";
          case r.k_eStoreNewsHub:
            return (
              s +
              `news/${
                e.appid
                  ? `app/${e.appid}`
                  : `group/${e.clanSteamID.GetAccountID()}`
              }`
            );
          case r.k_eStoreOwnerPage:
            return (
              s +
              (e.appid
                ? "app/" + e.appid
                : "curator/" + e.clanSteamID.GetAccountID())
            );
          case r.k_eStoreSalePage:
            return e.jsondata.bSaleEnabled
              ? s +
                  (e.jsondata.sale_vanity_id_valve_approved_for_sale_subpath
                    ? "sale/"
                    : "curator/" + e.clanSteamID.GetAccountID() + "/sale/") +
                  e.jsondata.sale_vanity_id
              : s;
          case r.k_eCommunityView:
            return o + "announcements/detail/" + m;
          case r.k_eStoreView:
            return `${s}news/${
              e.appid
                ? `app/${e.appid}`
                : `group/${e.clanSteamID.GetAccountID()}`
            }/${e.bOldAnnouncement ? `old_view/${m}` : `view/${d}`}`;
          case r.k_eStoreUsersNewsHub:
            return `${s}news/`;
          default:
            return Object(l.a)(!1, "Unknown route specified for link"), "";
        }
      }
      function f(e, t, a) {
        return g(
          e,
          t,
          "forceAbsolute" === a || !u(t, e) ? "absolute" : "relative"
        );
      }
      function v(e, t) {
        const a = u(t, e),
          r = g(e, t, a ? "relative" : "absolute");
        return a
          ? n.createElement(s.a, { push: !0, to: r })
          : (window.open(r), null);
      }
      function S(e, t, a) {
        const r = h(e, t, !1);
        switch (a) {
          case "admin":
            return r + "partnerevents";
          default:
            return "";
        }
      }
      function y(e) {
        const { preferredFocus: t } = e,
          { bCanUseLink: a } = n.useContext(d.a),
          r = Object(s.g)();
        if (!e.eventModel) return null;
        const i = a && u(e.route, e.eventModel),
          l = g(e.eventModel, e.route, i ? "relative" : "absolute");
        return i
          ? n.createElement(
              o.e,
              {
                style: e.style,
                className: e.className,
                onClick: (t) => {
                  var a;
                  null === (a = e.onClick) || void 0 === a || a.call(e, t),
                    r.push(l);
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
    jALh: function (e, t, a) {
      "use strict";
      a.d(t, "a", function () {
        return i;
      });
      var r = a("/Q1a");
      class i {
        constructor() {
          "dev" === r.d.WEB_UNIVERSE && (window.g_HomeViewStore = this);
          const e = Object(r.h)("home_view_setting", "application_config");
          this.ValidateHomeViewData(e) && this.SetHomeViewSetting(e);
          const t = Object(r.h)(
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
          return this.m_HomeView.home;
        }
        static Get() {
          return (
            i.s_globalSingletonStore ||
              ((i.s_globalSingletonStore = new i()),
              "dev" == r.d.WEB_UNIVERSE &&
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
    "jU/+": function (e, t, a) {
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
    lfGQ: function (e, t, a) {
      "use strict";
      a.d(t, "a", function () {
        return o;
      }),
        a.d(t, "d", function () {
          return l;
        }),
        a.d(t, "b", function () {
          return c;
        }),
        a.d(t, "c", function () {
          return d;
        }),
        a.d(t, "e", function () {
          return m;
        });
      var r = a("f5iL"),
        i = a("pSt8"),
        n = a("/Q1a"),
        s = a("q9Z8");
      function o(e, t = "", a = null) {
        return m.InstrumentLink(e, t, a);
      }
      function l(e, t, a = null) {
        const r = Object(i.f)(e).toLowerCase(),
          s = Object(i.f)(n.d.COMMUNITY_BASE_URL).toLowerCase(),
          o = Object(i.f)(n.d.STORE_BASE_URL).toLowerCase();
        return r === s || r === o ? c(e, t, a) : e;
      }
      function c(e, t, a = null) {
        const r = d(t, a);
        return m.AddNavParamToURL(e, r);
      }
      function d(e, t = null) {
        return (null == e ? void 0 : e.domain) ? m.GetLinkParam(e, t) : n.d.SNR;
      }
      class m {
        static SetNavEventParams(e, t, a = null, r = null) {
          (m.sm_strDomain = e),
            (m.sm_strController = t),
            (m.sm_strMethod = a),
            (m.sm_strSubmethod = r),
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
        static InstrumentLink(e, t, a = null) {
          const r = m.GetLinkParam(t, a);
          return m.AddNavParamToURL(e, r);
        }
        static GetLinkParam(e, t = null) {
          let a, r;
          if (
            ("string" == typeof e || e.domain || (e = e.feature),
            "string" != typeof e && e.domain)
          )
            (a = m.ComputeLinkPrefix(
              e.domain,
              e.controller,
              e.method,
              e.submethod
            )),
              (r = e.feature),
              (t = null != t ? t : e.depth);
          else {
            if (!m.sm_strComputedLinkPrefix && !m.ComputeStaticLinkPrefix())
              return null;
            (a = m.sm_strComputedLinkPrefix),
              (r = "string" == typeof e ? e : e.feature);
          }
          let i = m.EncodeEventComponent(r);
          return i && ((a += "_" + i), t && (a += "_" + t)), a;
        }
        static AddNavParamToURL(e, t) {
          try {
            const a = new URL(Object(i.b)(e)),
              r = new URLSearchParams(a.search);
            return (
              r.set("snr", encodeURIComponent(t)),
              a.origin + a.pathname + "?" + r.toString() + a.hash
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
            : (Object(r.a)(
                !1,
                "CStoreNavEvents::SetNavEventParams was not called before calling InstrumentLink!"
              ),
              !1);
        }
        static ComputeLinkPrefix(e, t, a, r) {
          let i = "";
          return (
            (i += m.EncodeEventComponent(e)),
            (i += "_"),
            (i += m.EncodeEventComponent(t)),
            (i += "_"),
            (i += m.EncodeEventComponent(a)),
            (i += "_"),
            (i += m.EncodeEventComponent(r)),
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
    mc3D: function (e, t, a) {
      e.exports = {
        Header1: "eventbbcodeparser_Header1_15FlI",
        Header2: "eventbbcodeparser_Header2_1SWg2",
        Header3: "eventbbcodeparser_Header3_AX80F",
        Link: "eventbbcodeparser_Link_3I3zk",
        LinkHost: "eventbbcodeparser_LinkHost_3jOM4",
        LinkButton: "eventbbcodeparser_LinkButton_1PfAd",
        UnorderedList: "eventbbcodeparser_UnorderedList_3sYJ7",
        OrderedList: "eventbbcodeparser_OrderedList_60l9Y",
        StoreWidget: "eventbbcodeparser_StoreWidget_3TYlQ",
        MedalTVWidget: "eventbbcodeparser_MedalTVWidget_1Ysh1",
        AppSummaryWidgetCtn: "eventbbcodeparser_AppSummaryWidgetCtn_3Mdza",
        LoyaltyRewardCtn: "eventbbcodeparser_LoyaltyRewardCtn_2SGke",
        SaleSectionCtn: "eventbbcodeparser_SaleSectionCtn_2Xrw_",
        ReminderCtn: "eventbbcodeparser_ReminderCtn_1dtL2",
        BlockQuote: "eventbbcodeparser_BlockQuote_2mfpG",
        SocialLink: "eventbbcodeparser_SocialLink_wn4Fw",
        SocialIcon: "eventbbcodeparser_SocialIcon_1wyn6",
        LocalizeBlock: "eventbbcodeparser_LocalizeBlock_hXuYi",
      };
    },
    "nWW+": function (e, t, a) {
      "use strict";
      a.d(t, "b", function () {
        return W;
      }),
        a.d(t, "a", function () {
          return z;
        });
      var r = a("mrSG"),
        i = a("TyAF"),
        n = a("wd/R"),
        s = a("q1tI"),
        o = a("msu0"),
        l = (a("Zdsb"), a("pC2t")),
        c = a("/4gK"),
        d = a("rB+X"),
        m = (a("XrGS"), a("wijF")),
        u = a("VJsr"),
        p = a("ue1x"),
        _ = a("AM5O"),
        h = a("2vnA"),
        b = a("/Q1a"),
        g = (a("sTxY"), a("vDqi")),
        f = a.n(g);
      class v {
        constructor() {
          (this.m_bValidatedEmail = !1),
            (this.m_nMobileDeviceCount = 0),
            (this.m_bIsLoaded = !1),
            (this.m_bLoadedFromConfig = !1);
        }
        LazyInit() {
          if (!this.m_bLoadedFromConfig) {
            let e = Object(b.i)("notificationstore", "application_config");
            this.ValidateStoreDefault(e) &&
              Object(h.G)(() => {
                (this.m_bIsLoaded = !0),
                  (this.m_bValidatedEmail = e.email_validated),
                  (this.m_nMobileDeviceCount = e.mobile_device_count);
              }),
              (this.m_bLoadedFromConfig = !0);
          }
        }
        ValidateStoreDefault(e) {
          return (
            e &&
            "object" == typeof e &&
            "number" == typeof e.mobile_device_count
          );
        }
        BIsLoaded() {
          return this.m_bIsLoaded;
        }
        BHasValidatedEmail() {
          return this.m_bValidatedEmail;
        }
        BHasPushNotification() {
          return this.m_nMobileDeviceCount > 0;
        }
        HintLoad() {
          return Object(r.a)(this, void 0, void 0, function* () {
            return (
              this.LazyInit(),
              this.m_bIsLoaded
                ? 1
                : b.l.logged_in
                ? (this.m_promise || (this.m_promise = this.InternalLoad()),
                  this.m_promise)
                : 1
            );
          });
        }
        InternalLoad() {
          return Object(r.a)(this, void 0, void 0, function* () {
            const e = b.d.STORE_BASE_URL + "notification/ajaxusersettings",
              t = { authwgtoken: b.l.authwgtoken },
              a = yield f.a.get(e, { params: t, withCredentials: !0 });
            return (
              1 == a.data.success &&
                Object(h.G)(() => {
                  (this.m_bIsLoaded = !0),
                    (this.m_bValidatedEmail = a.data.email_validated),
                    (this.m_nMobileDeviceCount = a.data.mobile_device_count);
                }),
              a.data.success
            );
          });
        }
      }
      Object(r.b)([h.C], v.prototype, "m_bValidatedEmail", void 0),
        Object(r.b)([h.C], v.prototype, "m_nMobileDeviceCount", void 0);
      let S = new v();
      var y = a("RLZf"),
        B = a("7ast"),
        w = a("fmsa"),
        C = a("thkD"),
        E = a("jIgc"),
        I = a("e356"),
        O = a("kWcV"),
        T = a("xoHR"),
        R = a("TqgT"),
        D = a("GbHM"),
        G = a("GXif"),
        j = a("hCpY"),
        A = a("Nt3m"),
        k = a("pSt8"),
        M = a("mc3D"),
        N = a.n(M),
        L = a("j4v3"),
        F = a("2+iD"),
        P = a("+VGL"),
        U = a("tXj3");
      let W = class extends s.Component {
        constructor() {
          super(...arguments),
            (this.m_elDropDownRef = s.createRef()),
            (this.m_bLoadWasCancelled = !1),
            (this.state = {
              bIsOpen: !1,
              bIsLoadingNotificationSettings: !S.BIsLoaded(),
            });
        }
        componentDidMount() {
          this.state.bIsLoadingNotificationSettings &&
            S.HintLoad()
              .catch(
                (e) => (
                  console.error(
                    "EventReminderWidget load fail: " +
                      Object(R.a)(e).strErrorMsg
                  ),
                  2
                )
              )
              .then((e) => {
                1 != e ||
                  this.m_bLoadWasCancelled ||
                  this.setState({ bIsLoadingNotificationSettings: !1 });
              }),
            !this.props.eventModel.appid &&
              this.props.eventModel.clanSteamID &&
              m.a.LoadClanInfoForClanSteamID(this.props.eventModel.clanSteamID);
        }
        componentWillUnmount() {
          this.m_bLoadWasCancelled = !0;
        }
        ToggleMenu(e) {
          const t = _.a.Get().BIsUserLoggedIn();
          t || b.d.IN_CLIENT
            ? (!t &&
                b.d.IN_CLIENT &&
                console.log(
                  "EventReminderWidget: In Client: Cannot use login widget. We expect to be already logged in."
                ),
              this.state.bIsOpen ? this.HideMenu() : this.ShowMenu(),
              e.stopPropagation(),
              e.preventDefault())
            : Object(E.d)(
                s.createElement(C.e, {
                  strTitle: Object(G.g)("#EventDisplay_Share_NotLoggedIn"),
                  strDescription: Object(G.g)(
                    "#EventDisplay_Share_NotLoggedIn_Description"
                  ),
                  strOKButtonText: Object(G.g)("#MobileLogin_SignIn"),
                  onOK: () => Object(U.a)(),
                }),
                window
              );
        }
        ShowMenu() {
          if (this.m_iMenuInstance) this.m_iMenuInstance.Show();
          else {
            let e = s.createElement(
                x,
                Object.assign({}, this.props, {
                  fnHasReminderSet: () => this.BHasSomeNotificationSetting(),
                  fnHidePanel: this.HideMenu,
                })
              ),
              t = {
                bOverlapHorizontal: !0,
                bOverlapVertical: !0,
                bDisablePopTop: !0,
                bMatchWidth: !0,
                strClassName: Object(D.a)(
                  F.ReminderDialog,
                  F.ReminderOptions,
                  y.contextMenu
                ),
              };
            (this.m_iMenuInstance = Object(l.a)(
              e,
              this.m_elDropDownRef.current,
              t
            )),
              this.m_iMenuInstance.SetOnHideCallback(this.HideMenu);
          }
          this.setState({ bIsOpen: !0 }),
            u.b.RecordAppInteractionEvent(
              this.props.eventModel.appid,
              u.a.k_eReminder_Opened
            );
        }
        HideMenu() {
          this.m_iMenuInstance && this.m_iMenuInstance.Hide(),
            this.setState({ bIsOpen: !1 });
        }
        BHasSomeNotificationSetting() {
          const { eventModel: e } = this.props,
            t = e.GID;
          return (
            (S.BHasValidatedEmail() &&
              _.a
                .Get()
                .BFollowsEventAndNotifiedBy(
                  e.clanSteamID,
                  t,
                  _.b.k_ENotifyFlagByEmail
                )) ||
            (S.BHasPushNotification() &&
              _.a
                .Get()
                .BFollowsEventAndNotifiedBy(
                  e.clanSteamID,
                  t,
                  _.b.k_ENotifyFlagByPush
                ))
          );
        }
        render() {
          const e = this.props.bOnlyShowIcon && !this.state.bIsOpen,
            t = this.BHasSomeNotificationSetting();
          return s.createElement(
            "div",
            {
              className: Object(D.a)({
                [F.ReminderCheckBox]: !0,
                [N.a.ReminderCtn]: !0,
                [F.IconMode]: e,
                [F.TextMode]: !e,
                ReminderSet: t,
                RemindMeWidget: !0,
              }),
              onClick: this.ToggleMenu,
              ref: this.m_elDropDownRef,
            },
            t &&
              s.createElement(
                "div",
                { className: F.RemindCheck },
                s.createElement(I.q, null)
              ),
            e &&
              s.createElement(
                "div",
                { className: F.RemindBell },
                s.createElement(I.g, null)
              ),
            s.createElement(
              "div",
              { className: F.ReminderDefault },
              Object(G.g)("#EventDisplay_Reminder_SetReminder")
            ),
            s.createElement("div", { className: F.ReminderOptions })
          );
        }
      };
      function z(e) {
        const { eventGID: t } = e,
          a = Object(r.c)(e, ["eventGID"]),
          i = Object(d.b)(t);
        if (!i) return null;
        const n = Object(o.g)(b.d.LANGUAGE);
        return s.createElement(
          W,
          Object.assign({ lang: n }, a, { eventModel: i })
        );
      }
      function V(e) {
        return n.unix(e).utc().format("YYYYMMDD[T]HHmmss[Z]");
      }
      Object(r.b)([j.b], W.prototype, "ToggleMenu", null),
        Object(r.b)([j.b], W.prototype, "ShowMenu", null),
        Object(r.b)([j.b], W.prototype, "HideMenu", null),
        (W = Object(r.b)([i.a], W));
      let x = class extends s.Component {
        constructor() {
          super(...arguments), (this.state = { bIsRequestInFlight: !1 });
        }
        OnChangeFollowOrIgnore(e, t, a) {
          return Object(r.a)(this, void 0, void 0, function* () {
            const { eventModel: r } = this.props,
              i = null == r ? void 0 : r.GID;
            if (i && i != o.h) {
              this.setState({ bIsRequestInFlight: !0 });
              try {
                yield _.a
                  .Get()
                  .SetFollowOrUnfollowEvent(!e, t, r.clanSteamID, i, a),
                  e &&
                    (a === _.b.k_ENotifyFlagByEmail
                      ? this.TrackEventAction(u.a.k_eReminder_Email)
                      : a === _.b.k_ENotifyFlagByPush &&
                        this.TrackEventAction(u.a.k_eReminder_MobilePush));
              } catch (e) {
                Object(E.c)(
                  s.createElement(
                    C.g,
                    {
                      strTitle: Object(G.g)(
                        t
                          ? "#EventDisplay_Reminder_IgnoreEvent_Error"
                          : "#EventDisplay_Reminder_FollowEvent_Error"
                      ),
                      strDescription: Object(G.g)(
                        t
                          ? "#EventDisplay_Reminder_IgnoreEvent_ErrorDesc"
                          : "#EventDisplay_Reminder_FollowEvent_ErrorDesc"
                      ),
                    },
                    Object(R.a)(e).strErrorMsg
                  ),
                  window
                );
              }
              this.setState({ bIsRequestInFlight: !1 });
            }
          });
        }
        OnChangeFollowByEmail(e) {
          this.OnChangeFollowOrIgnore(e, !1, _.b.k_ENotifyFlagByEmail);
        }
        OnChangeFollowByPush(e) {
          this.OnChangeFollowOrIgnore(e, !1, _.b.k_ENotifyFlagByPush);
        }
        GetExternalCalendarEventTitle() {
          const { eventModel: e, lang: t } = this.props,
            a = e.GetNameWithFallback(t);
          if (c.d.BHasEntityNameForID(e.appid, e.clanSteamID.GetAccountID())) {
            return `${c.d.GetEntityNameForID(
              e.appid,
              e.clanSteamID.GetAccountID()
            )}: ${a}`;
          }
          return a;
        }
        TrackEventAction(e) {
          const { eventModel: t } = this.props;
          u.b.RecordAppInteractionEvent(t.appid, e);
        }
        GetExternalCalendarEventBody() {
          const { eventModel: e, lang: t } = this.props;
          let a = e.GetSubTitleWithLanguageFallback(t);
          a = a ? `${a}\n\n\n` : "";
          const r = e.GetSummaryWithFallback(t),
            i = e.jsondata.bSaleEnabled
              ? L.a.k_eStoreSalePage
              : L.a.k_eStoreView;
          return `${a}${r}\n\n${Object(L.d)(e, i, "forceAbsolute")}`;
        }
        GetGoogleCalendarLink() {
          const { eventModel: e } = this.props,
            t = encodeURIComponent(this.GetExternalCalendarEventTitle()),
            a = encodeURIComponent(this.GetExternalCalendarEventBody()),
            r = e.GetStartTimeAndDateUnixSeconds(),
            i = V(r),
            n = V(e.GetEndTimeAndDateUnixSeconds() || r + A.e.PerHour),
            s =
              (b.d.IN_CLIENT ? "steam://openurl_external/" : "") +
              `https://calendar.google.com/calendar/r/eventedit?text=${t}&details=${a}&dates=${i}/${n}`;
          return Object(k.h)(s);
        }
        GetICSDownloadLink(e) {
          const { eventModel: t, lang: a } = this.props,
            r = t.appid
              ? "app/" + t.appid
              : "group/" + t.clanSteamID.GetAccountID(),
            i = "l=" + Object(o.d)(a);
          return `${b.d.STORE_BASE_URL}${Object(L.f)()}/download/${r}/${e}/${
            t.GID
          }?${i}`;
        }
        render() {
          const {
              eventModel: e,
              bShowStartTime: t,
              bExpandLeft: a,
              bOnlyShowIcon: r,
              fnHasReminderSet: i,
              fnHidePanel: n,
            } = this.props,
            o = S.BHasValidatedEmail(),
            l = S.BHasPushNotification(),
            c = t && e.GetStartTimeAndDateUnixSeconds();
          return s.createElement(
            "div",
            null,
            s.createElement(
              "div",
              {
                className: Object(D.a)(
                  F.ReminderCheckBox,
                  r ? F.IconMode : F.TextMode,
                  "RemindMeWidget"
                ),
                onClick: n,
              },
              i() &&
                s.createElement(
                  "div",
                  { className: F.RemindCheck },
                  s.createElement(I.q, null)
                ),
              r &&
                s.createElement(
                  "div",
                  { className: F.RemindBell },
                  s.createElement(I.g, null)
                ),
              s.createElement(
                "div",
                { className: F.ReminderDefault },
                Object(G.g)("#EventDisplay_Reminder_SetReminder")
              ),
              s.createElement("div", { className: F.ReminderOpennedOptions })
            ),
            s.createElement(
              "div",
              {
                className: Object(D.a)(
                  F.FlexColumnContainer,
                  F.ReminderBackground,
                  a && F.ReminderExpandsLeft
                ),
              },
              this.state.bIsRequestInFlight &&
                s.createElement(O.a, {
                  className: F.RpcThrobber,
                  size: "xlarge",
                  position: "center",
                }),
              c &&
                s.createElement(
                  "div",
                  { className: F.FullStartTime },
                  Object(G.p)(
                    "#EventDisplay_EventUpcoming_WithDateAndTime",
                    Object(G.l)(
                      c,
                      Object(A.b)(
                        new Date(1e3 * c),
                        p.a.GetTimeNowWithOverrideAsDate()
                      )
                    ),
                    Object(w.d)(c, !0)
                  )
                ),
              s.createElement(
                "div",
                { className: F.ReminderOptionsHeader },
                Object(G.g)("#EventDisplay_Reminder_GetNotification_Via")
              ),
              s.createElement(
                "div",
                {
                  className: Object(D.a)(F.ReminderOption, !o && F.Unverified),
                },
                s.createElement(
                  T.a,
                  {
                    className: F.CheckboxWrapper,
                    strTooltipClassname: F.ReminderOptionTooltip,
                    toolTipContent: Object(G.g)(
                      o
                        ? "#EventReminder_NotifyByEmail_ttip"
                        : "#EventReminder_NotifyByEmail_Missing"
                    ),
                  },
                  s.createElement(B.f, {
                    label: Object(G.g)("#EventDisplay_Reminder_ViaEmail"),
                    disabled: !o,
                    checked: _.a
                      .Get()
                      .BFollowsEventAndNotifiedBy(
                        e.clanSteamID,
                        e.GID,
                        _.b.k_ENotifyFlagByEmail
                      ),
                    onChange: this.OnChangeFollowByEmail,
                  })
                ),
                !o &&
                  s.createElement(
                    "div",
                    { className: P.FlexColumnContainer },
                    s.createElement(
                      "a",
                      {
                        href: b.d.STORE_BASE_URL + "account/",
                        target: b.d.IN_CLIENT ? void 0 : "_blank",
                        onClick: () =>
                          this.TrackEventAction(
                            u.a.k_eReminder_EmailUnverified
                          ),
                      },
                      Object(G.g)("#EventReminder_NotifyByEmail_Missing_Add")
                    )
                  )
              ),
              s.createElement(
                "div",
                {
                  className: Object(D.a)(F.ReminderOption, !l && F.Unverified),
                },
                s.createElement(
                  T.a,
                  {
                    className: F.CheckboxWrapper,
                    strTooltipClassname: F.ReminderOptionTooltip,
                    toolTipContent: Object(G.g)(
                      l
                        ? "#EventReminder_NotifyByMobile_ttip"
                        : "#EventReminder_NotifyByMobile_Missing"
                    ),
                  },
                  s.createElement(B.f, {
                    label: Object(G.g)("#EventDisplay_Reminder_ViaMobileApp"),
                    disabled: !l,
                    checked: _.a
                      .Get()
                      .BFollowsEventAndNotifiedBy(
                        e.clanSteamID,
                        e.GID,
                        _.b.k_ENotifyFlagByPush
                      ),
                    onChange: this.OnChangeFollowByPush,
                  })
                ),
                !l &&
                  s.createElement(
                    "div",
                    { className: P.FlexColumnContainer },
                    s.createElement(
                      "a",
                      {
                        href: b.d.STORE_BASE_URL + "mobile/?show=steamapp",
                        target: b.d.IN_CLIENT ? void 0 : "_blank",
                        onClick: () =>
                          this.TrackEventAction(
                            u.a.k_eReminder_MobilePushMissing
                          ),
                      },
                      Object(G.g)("#EventReminder_NotifyByMobile_Install")
                    )
                  )
              ),
              s.createElement(
                s.Fragment,
                null,
                s.createElement(
                  "div",
                  { className: F.ReminderOptionsHeader },
                  Object(G.g)("#EventDisplay_Reminder_AddToCalendar")
                ),
                s.createElement(
                  "div",
                  { className: F.ReminderCalendarOptions },
                  s.createElement(
                    "a",
                    {
                      className: F.ReminderOption,
                      href: this.GetICSDownloadLink("ics"),
                      onClick: () =>
                        this.TrackEventAction(u.a.k_eReminder_CalendarApple),
                    },
                    Object(G.g)("#EventDisplay_Reminder_AppleCalendar_Short")
                  ),
                  s.createElement(
                    "a",
                    {
                      className: F.ReminderOption,
                      target: b.d.IN_CLIENT ? void 0 : "_blank",
                      href: this.GetGoogleCalendarLink(),
                      onClick: () =>
                        this.TrackEventAction(u.a.k_eReminder_CalendarGoogle),
                    },
                    Object(G.g)("#EventDisplay_Reminder_GoogleCalendar_Short")
                  ),
                  s.createElement(
                    "a",
                    {
                      className: F.ReminderOption,
                      href: this.GetICSDownloadLink("outlook"),
                      onClick: () =>
                        this.TrackEventAction(u.a.k_eReminder_CalendarOutlook),
                    },
                    Object(G.g)("#EventDisplay_Reminder_OutlookCalendar_Short")
                  )
                )
              ),
              !1
            )
          );
        }
      };
      Object(r.b)([j.b], x.prototype, "OnChangeFollowByEmail", null),
        Object(r.b)([j.b], x.prototype, "OnChangeFollowByPush", null),
        Object(r.b)([j.b], x.prototype, "TrackEventAction", null),
        (x = Object(r.b)([i.a], x));
    },
    oEKi: function (e, t, a) {
      "use strict";
      a.d(t, "a", function () {
        return Y;
      }),
        a.d(t, "b", function () {
          return X;
        }),
        a.d(t, "c", function () {
          return J;
        }),
        a.d(t, "d", function () {
          return ae;
        });
      var r = a("mrSG"),
        i = a("vDqi"),
        n = a.n(i),
        s = a("2vnA"),
        o = a("TyAF"),
        l = a("q1tI"),
        c = a.n(l),
        d = a("pQ8y"),
        m = (a("Zdsb"), a("/0nC"), a("iRfV")),
        u = (a("XrGS"), a("G7ky")),
        p = a("xH93"),
        _ = a("lfGQ"),
        h = (a("yfxr"), a("wijF")),
        b = a("10xk"),
        g = a("FmLm"),
        f = a("Ys0h"),
        v = a("hAgw"),
        S = a("RrtU"),
        y = a("IYm0"),
        B = a("+aRA"),
        w = a("vUNY"),
        C = a("zWNq"),
        E = a("qpfI"),
        I = a("1QaA"),
        O = a("7yn2"),
        T = a("PlCS"),
        R = a("j/dN"),
        D = a("e356"),
        G = (a("xoHR"), a("f5iL")),
        j = a("3u1o"),
        A = a("GbHM"),
        k = a("rSrx"),
        M = a("GXif"),
        N = a("hCpY"),
        L = a("/Q1a"),
        F = a("0JCO"),
        P = a("KQHr"),
        U = a("7YTu"),
        W = a.n(U),
        z = a("tXj3"),
        V = a("zy5s"),
        x = a.n(V),
        H = a("5ZQm");
      const q = "DEBUG_UseNewGameHover";
      function Y() {
        return "none" !== Q();
      }
      function Q() {
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
          a = Object(l.useRef)({
            include_assets: !0,
            include_trailers: !0,
            include_screenshots: !0,
          }),
          [r] = Object(S.a)(t.id, Object(v.d)(t.type), a.current),
          [i, n] = Object(l.useState)([]),
          o = Object(l.useRef)(0),
          d = Object(N.f)(),
          [m] = c.a.useState(new j.b()),
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
              var a;
              const r = [];
              if (1 == e.length) {
                const t = f.a.Get().GetApp(e[0]);
                t.GetMicroTrailer() &&
                  r.push({
                    rctImage: c.a.createElement(C.a, {
                      appInfo: { id: t.GetID(), type: "game" },
                    }),
                    nDurationMs: 5500,
                  }),
                  t
                    .GetOnlyAllAgesSafeScreenshots()
                    .slice(0, 10)
                    .forEach((e, t) => {
                      r.push({
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
              if (0 == r.length)
                for (const t of e) {
                  const e = f.a.Get().GetApp(t),
                    i =
                      null === (a = null == e ? void 0 : e.GetAssets()) ||
                      void 0 === a
                        ? void 0
                        : a.GetMainCapsuleURL();
                  i &&
                    r.push({
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
              r.length > 0
                ? (n(r), (o.current = 0), u())
                : ("dev" != L.d.WEB_UNIVERSE && "beta" != L.d.WEB_UNIVERSE) ||
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
              !r || (i && 0 != i.length)
                ? (null == i ? void 0 : i.length) && u()
                : 2 == r.GetStoreItemType() || 1 == r.GetStoreItemType()
                ? (Object(G.a)(
                    r.GetIncludedAppIDs().length > 0,
                    "expected included apps " +
                      r.GetID() +
                      " " +
                      r.GetStoreItemType()
                  ),
                  f.a
                    .Get()
                    .QueueMultipleAppRequests(r.GetIncludedAppIDs(), {
                      include_assets: !0,
                    })
                    .then(() => p(r.GetIncludedAppIDs())))
                : p([r.GetID()]),
              () => m.Cancel()
            ),
            [p, i, r, m, u]
          ),
          c.a.createElement(
            "div",
            { className: W.a.TrailerCtn },
            null == i
              ? void 0
              : i.map((e, a) =>
                  c.a.createElement(
                    "div",
                    {
                      key: "e-" + a + "-" + t.id + "_" + t.type,
                      className: Object(A.a)(
                        W.a.FullDivImage,
                        a != o.current && W.a.Transparent
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
      function X(e) {
        const { appInfo: t, bTruncateTotalReviews: a } = e,
          [r] = Object(S.a)(
            null == t ? void 0 : t.id,
            Object(v.d)(null == t ? void 0 : t.type),
            { include_reviews: !0 }
          );
        if (!r) return null;
        const i = g.a.Get().BShowFilteredUserReviewScores()
          ? r.GetFilteredReviewSummary()
          : r.GetUnfilteredReviewSummary();
        if (!i || 0 == i.review_score) return null;
        const n =
            i.review_score < 5
              ? W.a.ReviewScoreLow
              : 5 == i.review_score
              ? W.a.ReviewScoreMixed
              : W.a.ReviewScoreHigh,
          s = `${L.d.STORE_BASE_URL}app/${t.id}/#app_reviews_hash`;
        return c.a.createElement(
          T.b,
          { url: s, className: Object(A.a)(W.a.ReviewScore, "ReviewScore") },
          c.a.createElement(
            "div",
            { className: Object(A.a)(W.a.ReviewScoreValue, n) },
            c.a.createElement(
              "div",
              { className: W.a.ReviewScoreLabel },
              i.review_score_label
            ),
            c.a.createElement(
              "div",
              { className: W.a.ReviewScoreCount },
              a
                ? "(" + i.review_count.toLocaleString() + ")"
                : Object(M.g)(
                    "#GameHover_UserReviewCount",
                    i.review_count.toLocaleString()
                  )
            ),
            !a &&
              c.a.createElement(
                "div",
                { className: W.a.ReviewScoreHeader },
                " ",
                Object(M.g)("#GameHover_UserReviewsHeader")
              )
          )
        );
      }
      const J = Object(o.a)((e) => {
          const { appID: t, snr: a, classOverride: i } = e,
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
              className: Object(A.a)(W.a.WishlistButton, i),
              onClick: (e) =>
                Object(r.a)(void 0, void 0, void 0, function* () {
                  e.preventDefault(),
                    e.stopPropagation(),
                    L.l.logged_in
                      ? (m(!0),
                        yield g.a.Get().UpdateGameWishlist(t, !s, a),
                        u.current.token.reason || m(!1))
                      : Object(z.a)();
                }),
            },
            c.a.createElement(D.Eb, null),
            c.a.createElement(
              "div",
              {
                className: Object(A.a)(
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
            [a, r] = Object(h.b)(t),
            i = Object(b.b)(t);
          return c.a.createElement(
            "div",
            { className: W.a.GameHoverCreatorFollowButtonCtn },
            c.a.createElement(
              "a",
              { href: null == i ? void 0 : i.GetCreatorHomeURL("developer") },
              c.a.createElement("img", {
                src: a ? Object(p.a)(null, "medium") : r.avatar_medium_url,
              })
            ),
            c.a.createElement(w.b, { clanAccountID: t })
          );
        },
        ee = Object(o.a)((e) => {
          const {
              info: t,
              strStoreUrl: a,
              elElementToAppend: r,
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
            [g] = Object(S.a)(t.id, Object(v.d)(t.type), {
              include_assets: !0,
              include_release: !0,
              include_platforms: !0,
              include_tag_count: 20,
            }),
            f = !d && !i && !r,
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
                href: u ? null : a,
                target: L.d.IN_CLIENT ? void 0 : "_blank",
                className: W.a.Midline,
              },
              c.a.createElement(
                "div",
                { className: W.a.CapsuleImageAnchorPoint },
                c.a.createElement(
                  "div",
                  {
                    className: Object(A.a)(
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
                  c.a.createElement(I.a, { info: t })
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
                    href: u ? null : a,
                    target: L.d.IN_CLIENT ? void 0 : "_blank",
                  },
                  c.a.createElement(
                    "div",
                    { className: W.a.GameTitle },
                    null == g ? void 0 : g.GetName()
                  )
                ),
                Boolean(g) && c.a.createElement(K, { rgTagIDs: g.GetTagIDs() }),
                Boolean(!o && g) && c.a.createElement(X, { appInfo: t }),
                Boolean(!o && f) &&
                  c.a.createElement(
                    "div",
                    { className: W.a.ReviewsAndRelease },
                    c.a.createElement(E.a, {
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
                  c.a.createElement(P.a, {
                    info: t,
                    className: W.a.DemoButton,
                  }),
                Boolean(o && B) && c.a.createElement(y.b, { nAppID: t.id }),
                Boolean(r) && r,
                Boolean(d && B) &&
                  c.a.createElement(R.a, { appid: t.id, bIsMuted: !1 }),
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
            strStoreUrl: a,
            bHideBottomHalf: r,
            bShowDeckCompatibilityDialog: i,
          } = e;
          let n;
          return (
            "overrideNavigation" in t && (n = () => t.overrideNavigation()),
            c.a.createElement(
              "div",
              {
                className: Object(A.a)(
                  W.a.GameHoverCapsuleCtn,
                  x.a.InGameHover,
                  r && W.a.UseHidingBottomHalf
                ),
                onClick: n,
              },
              c.a.createElement(
                "a",
                {
                  href: n ? null : a,
                  target: L.d.IN_CLIENT ? void 0 : "_blank",
                  className: W.a.TrailerAnchorStoreLink,
                },
                Boolean(!i && !n) &&
                  c.a.createElement(J, { appID: t.id, snr: e.strSNR }),
                c.a.createElement(Z, { info: t })
              ),
              c.a.createElement(
                ee,
                Object.assign({}, e, { bPreventNavigation: Boolean(n) })
              )
            )
          );
        });
      function ae(e) {
        const { item: t } = e,
          [a] = Object(S.a)(t.id, Object(v.d)(t.type), {});
        if (!a) return null;
        if (1 == a.GetStoreItemType() && 1 == a.GetIncludedAppIDs().length) {
          const t = { id: a.GetIncludedAppIDs()[0], type: "game" };
          return c.a.createElement(re, Object.assign({}, e, { item: t }));
        }
        return c.a.createElement(re, Object.assign({}, e));
      }
      function re(e) {
        const {
            item: t,
            elElementToAppend: a,
            bShowDemoButton: i,
            bHidePrice: n,
            bUseSubscriptionLayout: s,
            strExtraParams: o,
            fnOnHoverStateChange: l,
            nCreatorAccountID: d,
            bShowDeckCompatibilityDialog: m,
          } = e,
          u = Object(r.c)(e, [
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
          [p] = Object(S.a)(t.id, Object(v.d)(t.type), {}),
          h = Object(F.c)(),
          b = Object(_.c)(h);
        if (!p) return null;
        if (L.d.IN_GAMEPADUI)
          return c.a.createElement(c.a.Fragment, null, e.children);
        if (!Y())
          return c.a.createElement(
            H.a,
            {
              type: Object(v.b)(p.GetStoreItemType()),
              id: t.id,
              fnHoverState: l,
              hoverClassName: e.className,
              strExtraParams: o,
            },
            e.children
          );
        const g = "hiding" == Q(),
          f = Object(_.b)(`${p.GetStorePageURL()}${o ? `?${o}` : ""}`, h),
          y = c.a.createElement(
            te,
            Object.assign(
              {},
              {
                info: t,
                strStoreUrl: f,
                elElementToAppend: a,
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
          Object.assign({ hoverContent: y, strClickUrl: f }, u),
          e.children
        );
      }
      const ie = (e) => {
        const { fnClose: t, hoverProps: a } = e;
        return c.a.createElement(
          u.a,
          Object.assign({}, a),
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
          return Object(r.a)(this, void 0, void 0, function* () {
            const e = this.props,
              {
                hoverContent: t,
                hoverProps: a,
                nDelayShowMs: i,
                strClickUrl: n,
                children: s,
              } = e,
              o =
                (Object(r.c)(e, [
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
                  a
                ),
                {
                  style: Object.assign(
                    {
                      zIndex: 98,
                      width: 1.15 * o.clientWidth,
                      fontSize: l,
                      minHeight: "hiding" == Q() ? void 0 : 300,
                      height:
                        "hiding" == Q()
                          ? 1.15 * o.clientWidth * (125 / 184)
                          : void 0,
                    },
                    null == a ? void 0 : a.style
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
              hoverProps: a,
              nDelayShowMs: i,
              strClickUrl: n,
              children: s,
            } = e,
            o = Object(r.c)(e, [
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
          const d = !!L.d.IN_GAMEPADUI;
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
        Object(r.b)([N.b], ne.prototype, "ClosePopup", null),
        Object(r.b)([N.b], ne.prototype, "OnUnhover", null),
        Object(r.b)([N.b], ne.prototype, "OnScroll", null),
        Object(r.b)([N.b], ne.prototype, "OnHover", null);
    },
    oGLD: function (e, t, a) {
      "use strict";
      a.d(t, "e", function () {
        return r;
      }),
        a.d(t, "d", function () {
          return i;
        }),
        a.d(t, "f", function () {
          return y;
        }),
        a.d(t, "b", function () {
          return B;
        }),
        a.d(t, "a", function () {
          return w;
        }),
        a.d(t, "g", function () {
          return C;
        }),
        a.d(t, "c", function () {
          return E;
        });
      var r,
        i,
        n = a("mrSG"),
        s = a("vDqi"),
        o = a.n(s),
        l = a("q1tI"),
        c = (a("Zdsb"), a("GpIp")),
        d = (a("XrGS"), a("FmLm")),
        m = (a("X/lQ"), a("Ys0h")),
        u = a("hAgw"),
        p = a("/cMS"),
        _ = a("upZW"),
        h = (a("sTxY"), a("ApMK")),
        b = a("TqgT"),
        g = a("3u1o"),
        f = a("hCpY"),
        v = a("/Q1a"),
        S = a("jALh");
      !(function (e) {
        (e[(e.k_EStatusString = 0)] = "k_EStatusString"),
          (e[(e.k_ECreator = 1)] = "k_ECreator"),
          (e[(e.k_ECurator = 2)] = "k_ECurator"),
          (e[(e.k_ETags = 3)] = "k_ETags"),
          (e[(e.k_EDisplayList = 4)] = "k_EDisplayList");
      })(r || (r = {})),
        (function (e) {
          (e[(e.k_EUnknown = 0)] = "k_EUnknown"),
            (e[(e.k_EPublisher = 1)] = "k_EPublisher"),
            (e[(e.k_EDeveloper = 2)] = "k_EDeveloper"),
            (e[(e.k_EPublisherDeveloper = 3)] = "k_EPublisherDeveloper"),
            (e[(e.k_EMacPortDeveloper = 4)] = "k_EMacPortDeveloper"),
            (e[(e.k_ELinuxPortDeveloper = 5)] = "k_ELinuxPortDeveloper"),
            (e[(e.k_EFranchise = 6)] = "k_EFranchise");
        })(i || (i = {}));
      function y(e, t, a, r) {
        let i = e;
        return (
          "category" === e && (i += "_" + t),
          "tags" === e && (i += "_" + a),
          r && (i += "_" + r),
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
            (this.m_searchPreferences = Object(v.h)(
              "search_preferences",
              "application_config"
            ));
          const e = Object(v.h)("ch_hub_data", "application_config");
          if (e) {
            const t = e.strHubType || void 0,
              a = "category" === t ? e.strCategory || "" : void 0,
              r = ("tags" === t && Number(e.nTagID)) || void 0;
            this.LoadContentHubDataFromConfig(t, a, r);
          }
        }
        BHasDefinition(e, t, a) {
          return this.m_mapDefinition.has(y(e, t, a));
        }
        BHasTitle(e, t, a) {
          return this.m_mapTitle.has(y(e, t, a));
        }
        BHasMainCarousel(e, t, a) {
          var r;
          return Boolean(
            null === (r = this.m_mapMainCarousel.get(y(e, t, a))) ||
              void 0 === r
              ? void 0
              : r.rgMainCapsule
          );
        }
        BHasSections(e, t, a, r) {
          var i;
          return Boolean(
            null === (i = this.m_mapSections.get(y(e, t, a, r))) || void 0 === i
              ? void 0
              : i.mapOtherCarousels
          );
        }
        BHasPartnerTakeover(e, t, a) {
          return this.m_mapPartnerTakeover.has(y(e, t, a));
        }
        BHasBroadcasts(e, t, a, r) {
          return this.m_mapBroadcasts.has(y(e, t, a, r));
        }
        GetDefinition(e, t, a) {
          return this.m_mapDefinition.get(y(e, t, a));
        }
        GetTitle(e, t, a) {
          return this.m_mapTitle.get(y(e, t, a));
        }
        GetMainCarousel(e, t, a) {
          return this.m_mapMainCarousel.get(y(e, t, a));
        }
        GetSections(e, t, a, r) {
          return this.m_mapSections.get(y(e, t, a, r));
        }
        GetPartnerTakeover(e, t, a) {
          return this.m_mapPartnerTakeover.get(y(e, t, a));
        }
        GetBroadcasts(e, t, a, r) {
          return this.m_mapBroadcasts.get(y(e, t, a, r));
        }
        LoadDefinition(e, t, a, r, i, s, o) {
          return Object(n.a)(this, void 0, void 0, function* () {
            const n = y(e, t, a);
            if (!this.BHasDefinition(e, t, a))
              return (
                this.m_mapPromiseForHub.has(n) ||
                  this.m_mapPromiseForHub.set(
                    n,
                    this.InternalLoadContentHubData(e, t, a, r, i, s, o)
                  ),
                this.m_mapPromiseForHub.get(n)
              );
          });
        }
        LoadTitle(e, t, a, r, i, s, o) {
          return Object(n.a)(this, void 0, void 0, function* () {
            const n = y(e, t, a);
            if (!this.BHasTitle(e, t, a))
              return (
                this.m_mapPromiseForHub.has(n) ||
                  this.m_mapPromiseForHub.set(
                    n,
                    this.InternalLoadContentHubData(e, t, a, r, i, s, o)
                  ),
                this.m_mapPromiseForHub.get(n)
              );
          });
        }
        LoadMainCarousel(e, t, a, r, i, s, o) {
          return Object(n.a)(this, void 0, void 0, function* () {
            const n = y(e, t, a);
            if (!this.BHasMainCarousel(e, t, a))
              return (
                this.m_mapPromiseForHub.has(n) ||
                  this.m_mapPromiseForHub.set(
                    n,
                    this.InternalLoadContentHubData(e, t, a, r, i, s, o)
                  ),
                this.m_mapPromiseForHub.get(n)
              );
          });
        }
        LoadSections(e, t, a, r, i, s, o, l, c) {
          return Object(n.a)(this, void 0, void 0, function* () {
            const n = y(e, t, a, r);
            if (!this.BHasSections(e, t, a, r))
              return (
                this.m_mapPromiseForHub.has(n) ||
                  this.m_mapPromiseForHub.set(
                    n,
                    this.InternalLoadContentHubData(e, t, a, s, o, l, c, r, i)
                  ),
                this.m_mapPromiseForHub.get(n)
              );
          });
        }
        LoadPartnerTakeover(e, t, a, r, i, s, o) {
          return Object(n.a)(this, void 0, void 0, function* () {
            const n = y(e, t, a);
            if (!this.BHasPartnerTakeover(e, t, a))
              return (
                this.m_mapPromiseForHub.has(n) ||
                  this.m_mapPromiseForHub.set(
                    n,
                    this.InternalLoadContentHubData(e, t, a, r, i, s, o)
                  ),
                this.m_mapPromiseForHub.get(n)
              );
          });
        }
        LoadBroadcasts(e, t, a, r, i, s, o, l, c) {
          return Object(n.a)(this, void 0, void 0, function* () {
            const n = y(e, t, a, r);
            if (!this.BHasBroadcasts(e, t, a, r))
              return (
                this.m_mapPromiseForHub.has(n) ||
                  this.m_mapPromiseForHub.set(
                    n,
                    this.InternalLoadContentHubData(e, t, a, s, o, l, c, r, i)
                  ),
                this.m_mapPromiseForHub.get(n)
              );
          });
        }
        BIsPartnerTakeoverActive(e, t, a) {
          var r;
          return (
            this.BHasPartnerTakeover(e, t, a) &&
            Boolean(
              null === (r = this.GetPartnerTakeover(e, t, a)) || void 0 === r
                ? void 0
                : r.strPageBackgroundURL
            )
          );
        }
        InternalLoadContentHubData(e, t, a, r, i, s, l, d, m) {
          var u, p;
          return Object(n.a)(this, void 0, void 0, function* () {
            const n = y(e, t, a),
              h = y(e, t, a, d);
            if (
              (this.LoadContentHubDataFromConfig(e, t, a, d),
              !(
                this.m_mapTitle.has(n) &&
                this.m_mapMainCarousel.has(n) &&
                this.m_mapSections.has(h) &&
                this.m_mapPartnerTakeover.has(n) &&
                this.m_mapBroadcasts.has(h)
              ))
            ) {
              const r = v.d.STORE_BASE_URL + "contenthub/ajaxgetcontenthubdata",
                c = {
                  hubtype: e,
                  category: t,
                  tagid: a,
                  prune_list_optin_name: i || void 0,
                  optin_tagid: s || void 0,
                  optin_prune_tagid: l || void 0,
                  tabuniqueid: d,
                  tabfilter: m,
                },
                _ = yield o.a.get(r, { params: c, withCredentials: !0 });
              if (
                1 ===
                (null === (u = null == _ ? void 0 : _.data) || void 0 === u
                  ? void 0
                  : u.success)
              ) {
                if (
                  (S.a.Get().SetHomeViewSetting(_.data.homeViewSetting),
                  S.a
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
              yield this.ApplyUserAndHomeViewFilters(n, h, r),
              yield this.UpdateRecommendationReasons(n);
          });
        }
        ApplyUserAndHomeViewFilters(e, t, a) {
          return Object(n.a)(this, void 0, void 0, function* () {
            const r = new c.a(),
              i = Object.assign(Object.assign({}, S.a.Get().GetHomeView()), {
                only_current_platform: !0,
                games_already_in_library: this.m_searchPreferences.hide_owned,
                enforce_minimum: !1,
              });
            yield this.BuildFeaturedCarouselContent(e, r, i, a),
              yield this.BuildAllOtherCarouselContent(t, r, i);
          });
        }
        ReplaceSingleAppPackagesWithApps(e, t) {
          this.m_mapMainCarousel.get(e).mapAppLists.forEach((t, a) => {
            this.m_mapMainCarousel
              .get(e)
              .mapAppLists.set(
                a,
                this.ReplaceSingleAppPackagesWithAppsForList(t)
              );
          }),
            this.m_mapSections.get(t).mapAppLists.forEach((e, a) => {
              this.m_mapSections
                .get(t)
                .mapAppLists.set(
                  a,
                  this.ReplaceSingleAppPackagesWithAppsForList(e)
                );
            });
        }
        ReplaceSingleAppPackagesWithAppsForList(e) {
          const t = e.apps.map((e) => {
            var t;
            if ("sub" === e.item_type) {
              const a = m.a.Get().GetPackage(e.id);
              if (
                1 ===
                (null === (t = null == a ? void 0 : a.GetIncludedAppIDs()) ||
                void 0 === t
                  ? void 0
                  : t.length)
              ) {
                return Object.assign(Object.assign({}, e), {
                  item_type: "app",
                  id: a.GetIncludedAppIDs()[0],
                });
              }
            }
            return e;
          });
          return Object.assign(Object.assign({}, e), { apps: t });
        }
        UpdateRecommendationReasons(e, t, a) {
          return Object(n.a)(this, void 0, void 0, function* () {
            const r = y(e, t, a),
              i = this.m_mapMainCarousel
                .get(r)
                .rgMainCapsule.map((r) =>
                  this.UpdateRecommendationReasonForCapsule(r, e, t, a)
                );
            yield Promise.all(i);
          });
        }
        BuildAllOtherCarouselContent(e, t, a) {
          var r;
          return Object(n.a)(this, void 0, void 0, function* () {
            this.m_mapSections.get(e).mapOtherCarousels = new Map();
            for (const i of this.m_mapSections.get(e).rgSections) {
              const n = this.m_mapSections.get(e).mapAppLists.get(i.id);
              if (
                (null === (r = null == n ? void 0 : n.apps) || void 0 === r
                  ? void 0
                  : r.length) > 0
              ) {
                let r = Object(c.b)(n.apps, a, t, 40, 4);
                this.m_mapSections.get(e).mapOtherCarousels.set(i.id, r);
              }
            }
          });
        }
        static ZipperMerge(e, t) {
          for (const t of e) Object(h.f)(t);
          const a = new Array();
          e.forEach((e) => a.push(0));
          const r = [];
          let i = 1;
          for (; r.length < 12 && i <= c.d; ) {
            let n = !1;
            for (let s = 0; s < e.length; ++s) {
              const o = e[s],
                l = a[s];
              if (l < o.length && o[l].priority <= i) {
                (n = !0), (a[s] += 1);
                const e = o[l];
                if (
                  (t.BHasStoreItemKey(e) || (r.push(e), t.AddStoreItemKey(e)),
                  r.length >= 12)
                )
                  break;
              }
            }
            n || (i += 1);
          }
          return r;
        }
        BuildFeaturedCarouselContent(e, t, a, r) {
          var i, s;
          return Object(n.a)(this, void 0, void 0, function* () {
            let n = Object(c.b)(
              null ===
                (i = this.m_mapMainCarousel
                  .get(e)
                  .mapAppLists.get("featured")) || void 0 === i
                ? void 0
                : i.apps,
              a,
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
                (e.apps = Object(c.b)(e.apps || [], a, t, 12, 4)));
            if (
              ((this.m_mapMainCarousel.get(e).rgMainCapsule =
                this.m_mapMainCarousel.get(e).rgMainCapsule.concat(
                  B.ZipperMerge(
                    l.map((e) => e.apps),
                    t
                  )
                )),
              Object(h.f)(this.m_mapMainCarousel.get(e).rgMainCapsule),
              r)
            ) {
              const t = [],
                a = [];
              for (const r of this.m_mapMainCarousel.get(e).rgMainCapsule)
                Object(_.c)(B.SaleCapsuleFromContentHubCapsule(r))
                  ? t.push(r)
                  : a.push(r);
              this.m_mapMainCarousel.get(e).rgMainCapsule = t.concat(a);
            }
          });
        }
        UpdateRecommendationReasonForCapsule(e, t, a, s) {
          return Object(n.a)(this, void 0, void 0, function* () {
            const n = y(t, a, s),
              o = yield Object(_.g)(
                [B.SaleCapsuleFromContentHubCapsule(e)],
                c.e
              ),
              l = m.a.Get().GetStoreItem(e.id, Object(u.d)(e.item_type)),
              h = null == l ? void 0 : l.GetCapsuleHeadline();
            if (h)
              return void (e.recommendation = {
                reason: r.k_EStatusString,
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
            let f = b
              .map((e) => p.a.Get().GetTagID(e))
              .filter(Boolean)
              .map((e) => ({ tagid: e.tagid, name: e.name }));
            const v = [];
            for (const e of f) {
              if (v.length > B.k_nMaxMatchingRecommendedTags) break;
              ("tags" === t && s === e.tagid) ||
                (d.a.Get().GetRecommendedTags().has(e.tagid) && v.push(e));
            }
            if (v.length < B.k_nMaxMatchingRecommendedTags) {
              const t = (function (e) {
                const t = new Map(),
                  a = e.GetAllDeveloperCreatorClans(),
                  r = e.GetAllPublisherCreatorClans(),
                  n = e.GetAllFranchiseCreatorClans();
                for (const e of n) t.set(e, i.k_EFranchise);
                for (const e of r) t.set(e, i.k_EPublisher);
                for (const e of a) t.set(e, i.k_EDeveloper);
                return t;
              })(l);
              if (t)
                for (const a of t.keys())
                  if (d.a.Get().BIsFollowingCurator(a))
                    return void (e.recommendation = {
                      reason: r.k_ECreator,
                      creator: { creator: a, relationship: t.get(a) },
                    });
              if (
                "app" === e.item_type &&
                e.id &&
                d.a.Get().BIsAppRecommendedBySomeCurator(e.id)
              ) {
                const t = d.a.Get().GetRecommendingCuratorsForApp(e.id);
                return void (e.recommendation = {
                  reason: r.k_ECurator,
                  curator: t[Math.floor(Math.random() * t.length)],
                });
              }
            }
            if (v.length > 0)
              return void (e.recommendation = {
                reason: r.k_ETags,
                tags: v,
                appType: g,
              });
            let S = [
              "top_sellers",
              "popular_new",
              "specials",
              "concurrent",
              "featured",
            ];
            S = S.filter((e) =>
              this.m_mapMainCarousel.get(n).mapAppLists.has(e)
            );
            const w = new Map();
            S.forEach((e) => {
              w.set(
                e,
                this.m_mapMainCarousel.get(n).mapAppLists.get(e).apps || []
              );
            });
            for (const t of S)
              for (const a of w.get(t))
                if (e.item_type === a.item_type && e.id === a.id)
                  return void (e.recommendation = {
                    reason: r.k_EDisplayList,
                    displayListName: t,
                  });
            e.recommendation = { reason: r.k_EStatusString, statusString: "" };
          });
        }
        static SaleCapsuleFromContentHubCapsule(e) {
          let t,
            a = e.id;
          return (
            (t =
              "bundle" === e.item_type
                ? "bundle"
                : "sub" === e.item_type
                ? "sub"
                : "game"),
            { id: a, type: t }
          );
        }
        static Get() {
          return (
            B.s_globalSingletonStore ||
              ((B.s_globalSingletonStore = new B()),
              "dev" == v.d.WEB_UNIVERSE &&
                (window.g_ContentHubStore = B.s_globalSingletonStore)),
            B.s_globalSingletonStore
          );
        }
        LoadContentHubDataFromConfig(e, t, a, r) {
          const i = y(e, t, a),
            n = null != r ? y(e, t, a, r) : i,
            s = "_" + (null != r ? r : "*");
          if (!this.m_mapDefinition.has(i)) {
            const e = Object(v.h)("ch_static_data", "application_config");
            e && this.m_mapDefinition.set(i, e);
          }
          if (!this.m_mapTitle.has(i)) {
            const e = Object(v.h)("ch_title_data", "application_config");
            e && this.m_mapTitle.set(i, e);
          }
          if (!this.m_mapMainCarousel.has(i)) {
            const e = Object(v.h)("ch_main_list_data", "application_config");
            if (this.ValidateAppListData(e)) {
              const t = { mapAppLists: new Map() };
              this.SetAppListData(t.mapAppLists, e),
                this.m_mapMainCarousel.set(i, t);
            }
          }
          if (!this.m_mapSections.has(n)) {
            const e = Object(v.h)(
                "ch_section_list_data" + s,
                "application_config"
              ),
              t = Object(v.h)("ch_section_data" + s, "application_config");
            if (this.ValidateAppListData(e) && this.ValidateSectionData(t)) {
              const a = {
                mapAppLists: new Map(),
                rgSections: t,
                mapSectionsID: new Map(),
              };
              this.SetAppListData(a.mapAppLists, e),
                this.SetSectionData(a.mapSectionsID, t),
                this.m_mapSections.set(n, a);
            }
          }
          if (!this.m_mapPartnerTakeover.has(i)) {
            const e = Object(v.h)(
              "ch_partner_takeover_data",
              "application_config"
            );
            e && this.m_mapPartnerTakeover.set(i, e);
          }
          if (!this.m_mapBroadcasts.has(n)) {
            const e = Object(v.h)(
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
              "dev" == v.d.WEB_UNIVERSE &&
                (window.g_ContentHubSettingsStore = w.s_singleton)),
            w.s_singleton
          );
        }
      }
      function C() {
        const [e, t] = Object(l.useState)(w.Get().GetReduceMotion());
        return Object(f.e)(w.Get().GetReduceMotionCallbackList(), t), e;
      }
      class E {
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
            const a =
                v.d.STORE_BASE_URL +
                "contenthub/ajaxgetsalepagediscountsummary",
              r = { vanity_url: e },
              i = {};
            let n = null;
            try {
              const s = yield o.a.get(a, { params: r, withCredentials: !0 });
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
            E.s_singleton ||
              ((E.s_singleton = new E()),
              "dev" === v.d.WEB_UNIVERSE &&
                (window.g_SalePageDiscountSummaryStore = E.s_singleton)),
            E.s_singleton
          );
        }
      }
    },
    ox7B: function (e, t, a) {
      e.exports = {
        DateAndTime: "localdateandtime_DateAndTime_1miMh",
        DateAndTimeInline: "localdateandtime_DateAndTimeInline_1jG_-",
        At: "localdateandtime_At_3D4jI",
        ActiveEvent: "localdateandtime_ActiveEvent_2ZcVE",
        ActiveEventCallOut: "localdateandtime_ActiveEventCallOut__y2DQ",
        RightSideTitles: "localdateandtime_RightSideTitles_3sPON",
        DateToolTip: "localdateandtime_DateToolTip_3zhja",
        ShortDateAndTime: "localdateandtime_ShortDateAndTime_4K3Bl",
        ShortDateRange: "localdateandtime_ShortDateRange_3sqcQ",
      };
    },
    poS6: function (e, t, a) {
      "use strict";
      a.d(t, "b", function () {
        return l;
      }),
        a.d(t, "a", function () {
          return c;
        });
      var r = a("mrSG"),
        i = a("q1tI"),
        n = a("hCpY"),
        s = a("vhlw"),
        o = a("GXif");
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
            lazyLoad: a,
            width: r,
            height: n,
            alt: s,
            crossOrigin: o,
          } = this.props;
          return i.createElement("img", {
            className: e,
            src: t[this.state.index],
            crossOrigin: o,
            onError: this.OnError,
            loading: a ? "lazy" : void 0,
            width: r,
            height: n,
            alt: s,
          });
        }
      }
      Object(r.b)([n.b], l.prototype, "OnError", null);
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
            lazyLoad: a,
            width: r,
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
                loading: a ? "lazy" : void 0,
                width: r,
                height: n,
                alt: l,
              });
        }
      }
      Object(r.b)([n.b], c.prototype, "OnError", null);
    },
    q9Z8: function (e) {
      e.exports = JSON.parse(
        '{"store.steampowered.com":1,"steamtv":2200,"steamclient":5000,"library":5100,"friendsui":5200,"friendcontextmenu":5201,"topsellers":7000,"steamcharts":7001,"weeklytopsellers":7002,"topchartlist":7003,"overview":7004,"mostplayed":7005,"salecreatorhome":100700,"saleitembrowse":100701,"salefacetbrowse":100702,"salesection":100703,"saletabsection":100704,"salebroadcast":100705,"salecuratorrec":100706,"saleeventsched":100707,"salesubscription":100708,"saleitemsearch":100709,"salesmartwishlist":100710,"salesmartir":100711,"salesmartdlc":100712,"salesmarttagrec":100713,"salebrowsetopwishlisted":100714,"salebrowsetrendingwishlisted":100715,"salebrowsepopularcomingsoon":100716,"salebrowsemostplayeddemo":100717,"salebrowsedailyactiveuserdemo":100718,"salebrowseplayednowdemo":100719,"salebrowserecentlyreleased":100720,"salebrowsepopularpurchased":100721,"salebrowsepopularpurchaseddiscounted":100722,"salebrowsediscounted":100723,"salebrowseprice":100724,"salebrowsenewandtrending":100725,"salebrowsetopsellers":100726,"salebrowsetoprated":100727,"spotlight":40,"daily-deal":43,"promo-takeover":118,"live-broadcast":143,"large-cluster":201}'
      );
    },
    qMjo: function (e, t, a) {
      e.exports = {
        Bold: "bbcodes_Bold_1opdq",
        Italic: "bbcodes_Italic_3PSCE",
        Header1: "bbcodes_Header1_38GFQ",
        Header2: "bbcodes_Header2_2ZqUv",
        Header3: "bbcodes_Header3_KePJs",
        Header4: "bbcodes_Header4_12a97",
        Header5: "bbcodes_Header5_4GmIV",
        SmallText: "bbcodes_SmallText_UvZC_",
        Underline: "bbcodes_Underline_3vpZi",
        Strike: "bbcodes_Strike_3dQvq",
        Spoiler: "bbcodes_Spoiler_3Caxn",
        SpoilerText: "bbcodes_SpoilerText_1owPz",
        DisabledMouseEvents: "bbcodes_DisabledMouseEvents_3QOEi",
        BlockQuote: "bbcodes_BlockQuote_2sfht",
        QuoteAuthor: "bbcodes_QuoteAuthor_2CMyS",
        PullQuote: "bbcodes_PullQuote_3DRIe",
        Code: "bbcodes_Code_1Aels",
        List: "bbcodes_List_tfM5V",
        OrderedList: "bbcodes_OrderedList_3Ve1E",
        ListItem: "bbcodes_ListItem_3DlO0",
        HR: "bbcodes_HR_26oRB",
        Table: "bbcodes_Table_2Z51g",
        NoBorder: "bbcodes_NoBorder_3aoME",
        TableRow: "bbcodes_TableRow_Ms77J",
        TableData: "bbcodes_TableData_2t3YC",
        TableHeader: "bbcodes_TableHeader_1vvfx",
        EqualCells: "bbcodes_EqualCells_5b-QB",
        ExpandSectionBlock: "bbcodes_ExpandSectionBlock_YvEQh",
        ExpandSectionHeader: "bbcodes_ExpandSectionHeader_3OxxM",
        EmbedArrow: "bbcodes_EmbedArrow_WXJl-",
        ExpandSectionBody: "bbcodes_ExpandSectionBody_2sCNL",
        ExpandSection_WithTitle: "bbcodes_ExpandSection_WithTitle_22nl0",
        LinkButton: "bbcodes_LinkButton_lMVeY",
      };
    },
    qpfI: function (e, t, a) {
      "use strict";
      a.d(t, "a", function () {
        return m;
      });
      var r = a("q1tI"),
        i = a.n(r),
        n = (a("XrGS"), a("hAgw")),
        s = a("RrtU"),
        o = a("e356"),
        l = a("GbHM"),
        c = a("zy5s"),
        d = a.n(c);
      function m(e) {
        var t;
        const { item: a, strClassName: r } = e,
          [c] = Object(s.a)(
            null == a ? void 0 : a.id,
            Object(n.d)(null == a ? void 0 : a.type),
            { include_platforms: !0 }
          );
        if (!c) return null;
        const m = c.GetPlatforms();
        return i.a.createElement(
          "span",
          { className: Object(l.a)(d.a.CapsulePlatform, r) },
          m.windows && i.a.createElement(o.Db, null),
          m.mac && i.a.createElement(o.b, null),
          m.linux && i.a.createElement(o.ob, null),
          (null === (t = m.vr_support) || void 0 === t ? void 0 : t.vrhmd) &&
            i.a.createElement(o.zb, null)
        );
      }
    },
    "rB+X": function (e, t, a) {
      "use strict";
      a.d(t, "b", function () {
        return o;
      }),
        a.d(t, "a", function () {
          return l;
        });
      a("aoTL");
      var r = a("q1tI"),
        i = (a("Zdsb"), a("XrGS"), a("KVor")),
        n = a("2VXD"),
        s = a("oleE");
      function o(e) {
        const [t, a] = Object(r.useState)(i.b.GetClanEventModel(e)),
          s = Object(n.a)("usePartnerEventByEventGID");
        return (
          Object(r.useEffect)(() => {
            (null == t ? void 0 : t.GID) != e &&
              (i.b.Init(),
              i.b
                .LoadBatchPartnerEventsByEventGIDsOrAnnouncementGIDs([e], [], s)
                .then((t) => {
                  1 != (null == t ? void 0 : t.length) ||
                    t[0].GID != e ||
                    s.token.reason ||
                    a(t[0]);
                }));
          }, [e, t, s]),
          t
        );
      }
      function l(e, t, a) {
        const [o, l] = Object(r.useState)(i.b.GetClanEventModel(t)),
          c = Object(n.a)("usePartnerEventByClanAccountAndEventGID");
        return (
          Object(r.useEffect)(() => {
            if ((null == o ? void 0 : o.GID) != t) {
              i.b.Init();
              const r = s.a.InitFromClanID(e);
              i.b
                .LoadPartnerEventFromClanEventGIDAndClanSteamID(r, t, 0, a)
                .then((e) => {
                  c.token.reason || l(e);
                });
            }
          }, [e, t, o, c]),
          o
        );
      }
    },
    uLSr: function (e, t, a) {
      "use strict";
      var r = a("hRO2");
      a("3dpo");
      r.Message;
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
    upZW: function (e, t, a) {
      "use strict";
      a.d(t, "d", function () {
        return d;
      }),
        a.d(t, "f", function () {
          return m;
        }),
        a.d(t, "c", function () {
          return u;
        }),
        a.d(t, "g", function () {
          return p;
        }),
        a.d(t, "h", function () {
          return _;
        }),
        a.d(t, "i", function () {
          return h;
        }),
        a.d(t, "e", function () {
          return b;
        }),
        a.d(t, "a", function () {
          return g;
        }),
        a.d(t, "b", function () {
          return f;
        });
      var r = a("mrSG"),
        i = a("GpIp"),
        n = a("hAgw"),
        s = a("Zdsb"),
        o = (a("XrGS"), a("yfxr"), a("FmLm")),
        l = (a("X/lQ"), a("Ys0h")),
        c = a("/cMS");
      function d(e) {
        return l.a.Get().BIsStoreItemMissing(e.id, Object(n.d)(e.type));
      }
      function m(e, t, a) {
        const r = new Array();
        return (
          null == e || e.forEach((e) => r.push({ id: e, type: "game" })),
          null == t || t.forEach((e) => r.push({ id: e, type: "sub" })),
          null == a || a.forEach((e) => r.push({ id: e, type: "bundle" })),
          r
        );
      }
      function u(e) {
        var t;
        const a = l.a.Get().GetStoreItem(e.id, Object(n.d)(e.type));
        return (
          (null === (t = null == a ? void 0 : a.GetBestPurchaseOption()) ||
          void 0 === t
            ? void 0
            : t.discount_pct) > 0
        );
      }
      function p(e, t, a) {
        return Object(r.a)(this, void 0, void 0, function* () {
          if (!e || 0 == e.length) return [];
          const r = e.filter((e) => Object(s.c)(e.type)).map((e) => e.id),
            i = e.filter((e) => "sub" === e.type).map((e) => e.id),
            n = e.filter((e) => "bundle" === e.type).map((e) => e.id);
          yield Promise.all([
            l.a.Get().QueueMultipleAppRequests(r, t),
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
            r.forEach((e) => o.add(e)),
            a)
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
      function _(e) {
        return Object(r.a)(this, void 0, void 0, function* () {
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
      const h = { include_tag_count: 20, include_basic_info: !0 };
      function b(e) {
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
      function g(e, t, a, s) {
        return Object(r.a)(this, void 0, void 0, function* () {
          const r = [];
          yield p(e, i.e, t);
          for (const i of e) {
            const e = l.a.Get().GetStoreItem(i.id, Object(n.d)(i.type));
            if (!e) continue;
            const o = e
              .GetIncludedAppIDs()
              .map((e) => l.a.Get().GetApp(e))
              .filter(Boolean);
            if ((o.push(e), t)) {
              const e = new Set(
                  o.map((e) => e.GetParentAppID()).filter(Boolean)
                ),
                t = Array.from(e)
                  .map((e) => l.a.Get().GetApp(e))
                  .filter(Boolean);
              t && o.push(...t);
            }
            o.some(s || b) ? a && a.push(i) : r.push(i);
          }
          return r;
        });
      }
      function f(e, t, a, i, s, c, d) {
        return Object(r.a)(this, void 0, void 0, function* () {
          let r = yield g(
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
              : b
          );
          const m = [];
          for (const e of r) {
            const t = l.a.Get().GetStoreItem(e.id, Object(n.d)(e.type));
            if (!t) continue;
            const r = null == t ? void 0 : t.GetIncludedAppIDsOrSelf();
            let s = !1;
            a && (s = s || r.every((e) => o.a.Get().BIsGameOwned(e))),
              i && (s = s || r.every((e) => o.a.Get().BIsGameWishlisted(e))),
              c && (s = s || r.every((e) => o.a.Get().BIsGameIgnored(e))),
              s ? d && d.push(e) : m.push(e);
          }
          return m;
        });
      }
    },
    uzoi: function (e, t, a) {
      "use strict";
      a.d(t, "c", function () {
        return w;
      }),
        a.d(t, "d", function () {
          return C;
        }),
        a.d(t, "b", function () {
          return E;
        }),
        a.d(t, "e", function () {
          return I;
        }),
        a.d(t, "a", function () {
          return O;
        }),
        a.d(t, "f", function () {
          return R;
        }),
        a.d(t, "g", function () {
          return D;
        }),
        a.d(t, "h", function () {
          return G;
        }),
        a.d(t, "n", function () {
          return A;
        }),
        a.d(t, "i", function () {
          return k;
        }),
        a.d(t, "l", function () {
          return M;
        }),
        a.d(t, "j", function () {
          return N;
        }),
        a.d(t, "m", function () {
          return L;
        }),
        a.d(t, "k", function () {
          return P;
        }),
        a.d(t, "o", function () {
          return U;
        }),
        a.d(t, "p", function () {
          return W;
        });
      var r = a("mrSG"),
        i = a("q1tI"),
        n = a("msu0"),
        s = a("Zdsb"),
        o = a("fsrB"),
        l = (a("Ao8p"), a("XrGS"), a("lfGQ")),
        c = a("JUQq"),
        d = a("/MtM"),
        m = a("2dJq"),
        u = a("nWW+"),
        p = a("7myZ"),
        _ = a("e356"),
        h = a("0JCO"),
        b = a("GbHM"),
        g = a("GXif"),
        f = a("pSt8"),
        v = a("/Q1a"),
        S = a("pY4P"),
        y = a("qMjo"),
        B = a.n(y);
      const w = new Map([
        [
          "b",
          {
            Constructor: function (e) {
              return i.createElement(
                "div",
                { className: B.a.Bold },
                e.children
              );
            },
            autocloses: !1,
          },
        ],
        [
          "i",
          {
            Constructor: function (e) {
              return i.createElement(
                "div",
                { className: Object(b.a)(B.a.Italic, "BB_Italic") },
                e.children
              );
            },
            autocloses: !1,
          },
        ],
        ["h1", { Constructor: R, autocloses: !1, skipFollowingNewline: !0 }],
        ["h2", { Constructor: D, autocloses: !1, skipFollowingNewline: !0 }],
        ["h3", { Constructor: G, autocloses: !1, skipFollowingNewline: !0 }],
        [
          "h4",
          {
            Constructor: function (e) {
              return T(e, Object(b.a)(B.a.Header4, "BB_Header4"));
            },
            autocloses: !1,
            skipFollowingNewline: !0,
          },
        ],
        [
          "h5",
          {
            Constructor: function (e) {
              return T(e, Object(b.a)(B.a.Header5, "BB_Header5"));
            },
            autocloses: !1,
            skipFollowingNewline: !0,
          },
        ],
        [
          "smalltext",
          {
            Constructor: function (e) {
              return T(e, Object(b.a)(B.a.SmallText, "BB_SmallText"));
            },
            autocloses: !1,
            skipFollowingNewline: !0,
          },
        ],
        [
          "u",
          {
            Constructor: function (e) {
              return i.createElement(
                "div",
                { className: B.a.Underline },
                e.children
              );
            },
            autocloses: !1,
          },
        ],
        [
          "strike",
          {
            Constructor: function (e) {
              return i.createElement(
                "div",
                { className: B.a.Strike },
                e.children
              );
            },
            autocloses: !1,
          },
        ],
        [
          "spoiler",
          {
            Constructor: function (e) {
              return i.createElement(
                "span",
                { className: B.a.Spoiler },
                i.createElement(
                  "span",
                  { className: B.a.SpoilerText },
                  e.children
                )
              );
            },
            autocloses: !1,
          },
        ],
        [
          "hr",
          {
            Constructor: function (e) {
              return i.createElement("div", { className: B.a.HR });
            },
            autocloses: !1,
          },
        ],
        [
          "noparse",
          {
            Constructor: function (e) {
              return e.children;
            },
            autocloses: !1,
          },
        ],
        [
          "url",
          {
            Constructor: function (e) {
              const t = I(e.args),
                a = "button" == I(e.args, "style") ? B.a.LinkButton : null;
              let r = I(e.args, "id");
              r &&
                "string" == typeof r &&
                r.length > 0 &&
                "#" === r[0] &&
                (r = r.substring(1));
              if (void 0 === t && !r) return e.children || "";
              if (
                void 0 === t ||
                ("string" == typeof t && t.length > 0 && "#" == t[0])
              )
                return i.createElement(
                  "a",
                  { href: null != t ? t : null, id: r },
                  e.children
                );
              return i.createElement(
                j,
                { className: a, href: t, id: r },
                e.children
              );
            },
            autocloses: !1,
          },
        ],
        ["quote", { Constructor: A, autocloses: !1 }],
        [
          "pullquote",
          {
            Constructor: function (e) {
              return i.createElement(
                "div",
                { className: B.a.PullQuote },
                e.children
              );
            },
            autocloses: !1,
          },
        ],
        [
          "code",
          {
            Constructor: function (e) {
              return i.createElement(
                "div",
                { className: B.a.Code },
                e.children
              );
            },
            autocloses: !1,
          },
        ],
        ["list", { Constructor: k, autocloses: !1, skipInternalNewline: !0 }],
        ["olist", { Constructor: M, autocloses: !1, skipInternalNewline: !0 }],
        ["*", { Constructor: N, autocloses: !0, skipInternalNewline: !0 }],
        [
          "table",
          {
            Constructor: function (e) {
              const t = I(e.args, "noborder"),
                a = I(e.args, "equalcells");
              return i.createElement(
                "div",
                {
                  className: Object(b.a)(
                    B.a.Table,
                    "BB_Table",
                    t && B.a.NoBorder,
                    a && B.a.EqualCells
                  ),
                },
                e.children
              );
            },
            autocloses: !1,
            skipInternalNewline: !0,
          },
        ],
        [
          "tr",
          {
            Constructor: function (e) {
              return i.createElement(
                "div",
                { className: Object(b.a)(B.a.TableRow, "BB_TableRow") },
                e.children
              );
            },
            autocloses: !1,
            skipInternalNewline: !0,
            skipFollowingNewline: !0,
          },
        ],
        [
          "th",
          {
            Constructor: function (e) {
              return i.createElement(
                "div",
                { className: B.a.TableHeader },
                e.children
              );
            },
            autocloses: !1,
            skipInternalNewline: !0,
            skipFollowingNewline: !0,
          },
        ],
        [
          "td",
          {
            Constructor: function (e) {
              const t = I(e.args, "width");
              return i.createElement(
                "div",
                {
                  className: Object(b.a)(B.a.TableData, "BB_TableData"),
                  style: t && { width: t },
                },
                e.children
              );
            },
            autocloses: !1,
            skipInternalNewline: !0,
            skipFollowingNewline: !0,
          },
        ],
        [
          "expand",
          {
            Constructor: function (e) {
              const t = Boolean(I(e.args, "expanded")),
                [a, r] = i.useState(t),
                n = (function (e, t) {
                  switch (e) {
                    case "details":
                      return {
                        collapsed: "#Bbcode_Expand_Details_Collapsed",
                        expanded: "#Bbcode_Expand_Details_Expanded",
                        style: B.a.ExpandSection_Details,
                      };
                    case "spoiler":
                      return {
                        collapsed: "#Bbcode_Expand_Spoiler_Collapsed",
                        expanded: "#Bbcode_Expand_Spoiler_Expanded",
                        style: B.a.ExpandSection_Spoiler,
                      };
                    case "title":
                      return {
                        collapsed: t || "#Bbcode_Expand_ShowMore_Collapsed",
                        expanded: t || "#Bbcode_Expand_ShowMore_Expanded",
                        style: B.a.ExpandSection_WithTitle,
                      };
                    default:
                    case "showmore":
                      return {
                        collapsed: "#Bbcode_Expand_ShowMore_Collapsed",
                        expanded: "#Bbcode_Expand_ShowMore_Expanded",
                        style: B.a.ExpandSection_ShowMore,
                      };
                  }
                })(I(e.args, "type"), I(e.args, "title"));
              return i.createElement(
                "div",
                {
                  className: Object(b.a)(
                    B.a.ExpandSectionBlock,
                    n.style,
                    a ? B.a.ExpandSectionExpanded : B.a.ExpandSectionCollapsed
                  ),
                },
                i.createElement(
                  "div",
                  { className: B.a.ExpandSectionHeader, onClick: () => r(!a) },
                  Object(g.g)(a ? n.expanded : n.collapsed),
                  i.createElement(
                    "div",
                    { className: B.a.EmbedArrow },
                    i.createElement(_.E, { angle: a ? 180 : 0 })
                  )
                ),
                a &&
                  i.createElement(
                    "div",
                    { className: B.a.ExpandSectionBody },
                    e.children
                  )
              );
            },
            autocloses: !1,
            skipInternalNewline: !0,
            allowWrapTextForCopying: !0,
          },
        ],
        [
          "remindme",
          {
            Constructor: function (e) {
              const { event: t } = e.context,
                a = I(e.args);
              if (a) return i.createElement(u.a, { eventGID: a });
              if (t) {
                const e = Object(n.g)(v.d.LANGUAGE);
                return i.createElement(u.b, { eventModel: t, lang: e });
              }
              return null;
            },
            autocloses: !1,
          },
        ],
        [
          "doclink",
          {
            Constructor: function (e) {
              const t = I(e.args),
                a = "button" == I(e.args, "style") ? B.a.LinkButton : null;
              return i.createElement(
                j,
                { className: a, href: `${v.d.PARTNER_BASE_URL}doc/${t}` },
                e.children
              );
            },
            autocloses: !1,
          },
        ],
      ]);
      new Map([
        ["looping_media", { Constructor: P, autocloses: !1 }],
        ["video", { Constructor: U, autocloses: !1 }],
        ["youtubeorvideo", { Constructor: W, autocloses: !1 }],
        ["previewyoutube", { Constructor: L, autocloses: !1 }],
      ]);
      function C(e, t, a = 0) {
        const r = v.d.MEDIA_CDN_COMMUNITY_URL + "images/clans/";
        if (void 0 !== e && e.startsWith(S.e))
          return r + e.substring(S.e.length + 1);
        if (void 0 !== e && e.startsWith(S.d)) {
          const i = new Array(),
            n = e.substr(S.d.length + 1),
            o = c.a.GetHashFromHashAndExt(n),
            l = c.a.GetExtensionStringFromHashAndExt(n);
          if (null != t) {
            let e = Object(s.f)(t);
            i.push(r + o + "/" + e + l + "?t=" + a),
              4 == t &&
                ((e = Object(s.k)(Object(s.f)(t))),
                i.push(r + o + "/" + e + l + "?t=" + a));
          }
          return i.push(r + n), i;
        }
        return e;
      }
      function E(e, t) {
        if (e.startsWith("steam://")) return !1;
        if (e.startsWith("/")) return !1;
        const a = Object(f.f)(e).toLowerCase(),
          r = Object(f.f)(v.d.COMMUNITY_BASE_URL).toLowerCase(),
          i = Object(f.f)(v.d.STORE_BASE_URL).toLowerCase(),
          n = Object(f.f)(v.d.HELP_BASE_URL).toLowerCase(),
          s = Object(f.f)(v.d.PARTNER_BASE_URL || "").toLowerCase();
        return (
          a !== r &&
          a !== i &&
          a !== n &&
          "support.steampowered.com" !== a &&
          a !== s &&
          (!t || 0 == t.filter((e) => a == e).length)
        );
      }
      function I(e, t) {
        return void 0 === t ? e[""] : e[t];
      }
      function O(e, t) {
        return (a) =>
          e(
            Object.assign(Object.assign({}, a), {
              className: Object(b.a)(a.className, t),
            })
          );
      }
      function T(e, t) {
        let a = I(e.args, "id");
        return (
          a &&
            "string" == typeof a &&
            a.length > 0 &&
            "#" === a[0] &&
            (a = a.substring(1)),
          i.createElement(
            "div",
            { id: a || void 0, className: Object(b.a)(t, e.className) },
            e.children
          )
        );
      }
      function R(e) {
        return T(e, Object(b.a)(B.a.Header1, "BB_Header1"));
      }
      function D(e) {
        return T(e, Object(b.a)(B.a.Header2, "BB_Header2"));
      }
      function G(e) {
        return T(e, Object(b.a)(B.a.Header3, "BB_Header3"));
      }
      const j = (e) => {
        const { href: t } = e,
          a = Object(r.c)(e, ["href"]),
          n = Object(h.c)();
        let s,
          c = Object(l.d)(t, n);
        E(c) &&
          ((c =
            (v.d.IN_CLIENT ? "steam://openurl_external/" : "") +
            v.d.COMMUNITY_BASE_URL +
            "linkfilter/?url=" +
            c),
          (s = "noopener nofollow"));
        const d =
          "string" == typeof e.children &&
          e.children.length > 0 &&
          t &&
          !t.startsWith("steam://")
            ? Object(f.g)(t)
            : void 0;
        return i.createElement(
          o.c,
          Object.assign({}, a, { href: c, rel: s }),
          i.createElement("span", { "data-tooltip-text": d }, e.children)
        );
      };
      function A(e) {
        const t = I(e.args, "author");
        return i.createElement(
          "blockquote",
          { className: Object(b.a)(B.a.BlockQuote, e.className) },
          !!t &&
            i.createElement(
              "div",
              { className: B.a.QuoteAuthor },
              Object(g.g)("#Bbcode_Originally_Posted_By") + " ",
              " ",
              i.createElement("b", null, t + ":")
            ),
          e.children
        );
      }
      function k(e) {
        return i.createElement("ul", { className: B.a.List }, e.children);
      }
      function M(e) {
        return i.createElement(
          "ol",
          { className: B.a.OrderedList },
          e.children
        );
      }
      function N(e) {
        let t = I(e.args, "id");
        return (
          t &&
            "string" == typeof t &&
            t.length > 0 &&
            "#" === t[0] &&
            (t = t.substring(1)),
          i.createElement(
            "li",
            { className: B.a.ListItem, id: t || void 0 },
            e.children
          )
        );
      }
      function L(e) {
        if (v.d.EREALM === s.h.k_ESteamRealmChina) return null;
        let t = I(e.args);
        if (t) {
          let e = t.split(";");
          if (2 == e.length) {
            let t = e[0],
              a = e[1].toLocaleLowerCase(),
              r = "full" == a ? m.sizeFull : m.sizeThumb,
              n =
                "full" == a
                  ? ""
                  : "leftthumb" == a
                  ? m.floatLeft
                  : m.floatRight;
            return i.createElement(d.a, {
              videoID: t,
              classNameAlign: n,
              classNameSize: r,
              bShowVideoImmediately: !0,
            });
          }
        }
        return i.createElement(i.Fragment, null);
      }
      function F(e) {
        let t = I(e.args, "poster");
        t && (t = Object(f.i)(t));
        const a = new Array();
        {
          const t = I(e.args, "mp4");
          t && a.push({ sURL: Object(f.i)(t), sFormat: "video/mp4" });
          const r = I(e.args, "webm");
          r && a.push({ sURL: Object(f.i)(r), sFormat: "video/webm" });
        }
        const r = Object(n.g)(v.d.LANGUAGE),
          i = 0 != r,
          o = new Array();
        for (let t = 0; t < 30; t++) {
          const a = I(e.args, "sub_" + Object(s.g)(t));
          a &&
            o.push({
              sURL: Object(f.i)(a),
              eLanguage: t,
              sKind: "subtitles",
              bDefault: i && t == r,
            });
          const n = I(e.args, "cap_" + Object(s.g)(t));
          n &&
            o.push({
              sURL: Object(f.i)(n),
              eLanguage: t,
              sKind: "captions",
              bDefault: i && t == r,
            });
        }
        return { sPoster: t, rgVideoSources: a, rgVideoTracks: o };
      }
      function P(e) {
        const t = F(e);
        return i.createElement(p.a, {
          video: t,
          bAutoPlay: !0,
          bControls: !1,
          bLoop: !0,
        });
      }
      function U(e) {
        const t = F(e),
          a = e.children ? e.children.toString() : void 0;
        a &&
          a.startsWith("http") &&
          t.rgVideoSources.push({
            sURL: Object(f.i)(a),
            sFormat: "video/webm",
          });
        const r = I(e.args, "autoplay"),
          n = "0" !== r && "off" !== r && "false" !== r,
          s = I(e.args, "controls"),
          o = "0" !== s && "off" !== s && "false" !== s;
        return i.createElement(p.a, {
          video: t,
          bAutoPlay: n,
          bControls: o,
          bLoop: n,
        });
      }
      function W(e) {
        if (
          v.d.EREALM === s.h.k_ESteamRealmChina ||
          "CN" == v.d.COUNTRY.toLocaleUpperCase()
        )
          return U(e);
        const t = I(e.args, "youtubeid"),
          a = I(e.args, "size"),
          r = I(e.args, "seconds");
        let n = "full" == a ? m.sizeFull : m.sizeThumb,
          o = "full" == a ? "" : "leftthumb" == a ? m.floatLeft : m.floatRight;
        return i.createElement(d.a, {
          videoID: t,
          nStartSeconds: r ? Number.parseInt(r) : void 0,
          classNameAlign: o,
          classNameSize: n,
          bShowVideoImmediately: !0,
        });
      }
    },
    vUNY: function (e, t, a) {
      "use strict";
      a.d(t, "c", function () {
        return R;
      }),
        a.d(t, "b", function () {
          return G;
        }),
        a.d(t, "a", function () {
          return j;
        });
      var r = a("mrSG"),
        i = a("TyAF"),
        n = a("q1tI"),
        s = (a("Zdsb"), a("jrt+"), a("oleE")),
        o = a("10xk"),
        l = a("FmLm"),
        c = a("6ese"),
        d = a("MKRT"),
        m = a("ue1x"),
        u = a("AM5O"),
        p = (a("sTxY"), a("GbHM")),
        _ = a("GXif"),
        h = a("TqgT"),
        b = a("/Q1a"),
        g = a("thkD"),
        f = a("jIgc"),
        v = a("kWcV"),
        S = a("9vnD"),
        y = a("iCjI"),
        B = a("+VGL"),
        w = a("tXj3"),
        C = a("fsrB");
      const E = Object(i.a)((e) => {
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
      function I(e) {
        e ||
          (Object(c.a)() &&
            (Object(
              c.b
            )().m_visibilityStore.BCuratorUnhideOnFollowDialogDismissed() ||
              Object(c.b)().m_visibilityStore.BIsGameSourceAllowed(
                d.c.k_ECurator
              ) ||
              Object(f.d)(n.createElement(E, null), window)));
      }
      function O() {
        return (
          !!u.a.Get().BIsUserLoggedIn() ||
          (Object(f.d)(
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
          a = u.a.Get().GetPartnerEventPermissions(t);
        return (
          !a ||
          !a.limited_user ||
          (Object(f.d)(n.createElement(y.a, null), window), !1)
        );
      }
      function R(e) {
        return Object(r.a)(this, void 0, void 0, function* () {
          if (O() && T(e)) {
            let t = s.a.InitFromClanID(e),
              a = l.a.Get().BIsFollowingCurator(t);
            yield l.a.Get().UpdateFollowOrIgnoreCurator(t, !0, !a), I(a);
          }
        });
      }
      const D = (e) => {
          const {
            className: t,
            bIgnored: a,
            bApplyingFollowing: r,
            bFollowing: i,
            onFollowClick: s,
          } = e;
          return m.a.bIsFollowingEnabled
            ? n.createElement(
                C.e,
                {
                  className: Object(p.a)(
                    B.Button,
                    S.FollowButton,
                    t,
                    i ? "Followed" : ""
                  ),
                  onClick: s,
                },
                r && n.createElement(v.a, { size: "small" }),
                !r &&
                  (i || a) &&
                  n.createElement("img", {
                    style: { height: "16px" },
                    src:
                      b.d.STORE_CDN_URL +
                      "public/images/v6/ico/ico_selected.png",
                  }),
                n.createElement(
                  "div",
                  { className: S.FollowBtnText },
                  !r &&
                    (i
                      ? Object(_.g)("#Button_Followed")
                      : a
                      ? Object(_.g)("#Button_Ignored")
                      : Object(_.g)("#Button_Follow"))
                )
              )
            : null;
        },
        G = (e) => {
          const [t, a] = n.useState(!1),
            { clanAccountID: r, className: i } = e,
            c = s.a.InitFromClanID(r),
            d = l.a.Get().BIsFollowingCurator(c),
            m = !d && l.a.Get().BIsIgnoringCurator(c);
          return n.createElement(D, {
            className: i,
            bIgnored: m,
            bFollowing: d,
            bApplyingFollowing: t,
            onFollowClick: () => {
              const { clanAccountID: t } = e;
              O() &&
                T(t) &&
                (a(!0),
                (() => {
                  const { clanAccountID: t, creatorID: r } = e,
                    i = s.a.InitFromClanID(t),
                    n = l.a.Get().BIsFollowingCurator(i),
                    c = !n && l.a.Get().BIsIgnoringCurator(i);
                  l.a
                    .Get()
                    .UpdateFollowOrIgnoreCurator(i, !c, !(c || n))
                    .then((e) => {
                      if (r) {
                        let e = o.a.GetCreatorHomeByID(r);
                        c || e.AdjustFollower(n ? -1 : 1);
                      }
                      a(!1);
                    })
                    .then(() => {
                      I(n);
                    })
                    .catch((e) => {
                      a(!1);
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
        j = (e) => {
          const [t, a] = n.useState(!1),
            { appid: r, className: i } = e,
            s = l.a.Get().BFollowsApp(r),
            o = !s && l.a.Get().BIsGameIgnored(r);
          return n.createElement(D, {
            className: i,
            bIgnored: o,
            bFollowing: s,
            bApplyingFollowing: t,
            onFollowClick: () => {
              O() &&
                (a(!0),
                (() => {
                  const { appid: t } = e,
                    r = l.a.Get().BFollowsApp(t),
                    i = !r && l.a.Get().BIsGameIgnored(t);
                  l.a
                    .Get()
                    .UpdateFollowingApp(t, !(i || r))
                    .then(() => {
                      a(!1);
                    })
                    .catch((e) => {
                      a(!1);
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
    vhlw: function (e, t, a) {
      e.exports = { ErrorDiv: "image_ErrorDiv_vIfbI" };
    },
    vx0u: function (e, t, a) {
      "use strict";
      a.d(t, "a", function () {
        return l;
      });
      a("nDaX");
      var r = a("lfGQ"),
        i = (a("X/lQ"), a("1mk1")),
        n = a("f5iL"),
        s = a("GXif"),
        o = a("/Q1a");
      function l(e, t, a) {
        if (!o.d.IN_GAMEPADUI) return;
        if (!Object(i.c)(e.GetStoreItemType()))
          return void Object(n.a)(
            !1,
            "StoreItemWidgetSalePageAction: unexpected type: " +
              e.GetStoreItemType()
          );
        const l = Object(r.b)(`${e.GetStorePageURL()}${a ? `?${a}` : ""}`, t);
        return {
          onOKButton: () => {
            window.location.href = l;
          },
          onOKActionDescription: Object(s.g)("#Sale_Gamepad_Action_Select"),
        };
      }
    },
    wQEA: function (e, t, a) {
      "use strict";
      a.d(t, "a", function () {
        return h;
      });
      var r = a("mrSG"),
        i = a("q1tI"),
        n = (a("Zdsb"), a("Ys0h")),
        s = a("7ast"),
        o = a("thkD"),
        l = a("jIgc"),
        c = a("e356"),
        d = a("GbHM"),
        m = a("GXif"),
        u = a("/Q1a"),
        p = a("jU/+"),
        _ = a.n(p);
      function h(e) {
        return Object(r.a)(this, void 0, void 0, function* () {
          u.d.IN_CLIENT
            ? (console.log(`Running game ${e} locally.`),
              (window.location.href = "steam://run/" + e))
            : (console.log(
                `Cannot identify local client. Prompting user to launch ${e}.`
              ),
              (function (e) {
                Object(r.a)(this, void 0, void 0, function* () {
                  yield n.a.Get().QueueAppRequest(e, {});
                  const t = n.a.Get().GetApp(e),
                    a = (null == t ? void 0 : t.GetName()) || "";
                  console.log("prompting for", a);
                  const r = u.d.STORE_BASE_URL + "about/";
                  Object(l.b)(
                    i.createElement(b, {
                      appid: e,
                      strGameName: a,
                      strDownloadSteamUrl: r,
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
    wjSE: function (e, t, a) {
      "use strict";
      a.d(t, "a", function () {
        return d;
      });
      var r = a("mrSG"),
        i = a("vDqi"),
        n = a.n(i),
        s = a("2vnA"),
        o = (a("msu0"), a("Zdsb"), a("wgTw"), a("TqgT")),
        l = a("/Q1a"),
        c = a("hbtq");
      class d {
        constructor() {
          this.m_mapAppToVOD = new Map();
        }
        GetVODForAppID(e) {
          return this.m_mapAppToVOD.get(e);
        }
        LoadVODForAppID(e, t) {
          return Object(r.a)(this, void 0, void 0, function* () {
            if (this.m_mapAppToVOD.has(e)) return this.m_mapAppToVOD.get(e);
            const a = l.d.STORE_BASE_URL + "video/details/" + e + "/0",
              r = {};
            try {
              let i = yield n.a.get(a, {
                params: r,
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
    xH93: function (e, t, a) {
      "use strict";
      a.d(t, "b", function () {
        return i;
      }),
        a.d(t, "a", function () {
          return n;
        });
      var r = a("/Q1a");
      const i = "fef49e7fa7e1997310d705b2a6158ff8dc1cdfeb";
      function n(e, t) {
        let a = ".jpg";
        (e && "0000000000000000000000000000000000000000" !== e) || (e = i),
          44 == e.length && ((a = e.substr(-4)), (e = e.substr(0, 40)));
        let n = r.d.AVATAR_BASE_URL;
        return (
          n ||
            ((n = r.d.MEDIA_CDN_COMMUNITY_URL + "images/avatars/"),
            (n += e.substr(0, 2) + "/")),
          (n += e),
          t && "small" != t && (n += "_" + t),
          (n += a),
          n
        );
      }
    },
    zWNq: function (e, t, a) {
      "use strict";
      a.d(t, "a", function () {
        return d;
      });
      var r = a("q1tI"),
        i = a.n(r),
        n = (a("XrGS"), a("yfxr"), a("hAgw")),
        s = a("RrtU"),
        o = a("/Q1a"),
        l = a("zy5s"),
        c = a.n(l);
      function d(e) {
        const { appInfo: t } = e,
          a = Object(r.useRef)({ include_trailers: !0 }),
          [l] = Object(s.a)(
            null == t ? void 0 : t.id,
            Object(n.d)(null == t ? void 0 : t.type),
            a.current
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
    zy5s: function (e, t, a) {
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
