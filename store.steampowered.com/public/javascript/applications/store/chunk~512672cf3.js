/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkstore = self.webpackChunkstore || []).push([
  [385],
  {
    91970: (e) => {
      e.exports = {
        "duration-app-launch": "800ms",
        strMediumWidth: "800px",
        strMaxMobileWidth: "600px",
        MediaContainer: "-ap7mXqcxyhrxn5-5EaM8",
        MediaContainerMM: "_1XVJzaNLt0tgl6Pq5QI2tK",
        ScreenshotThumbnailRow: "COp9MkmgXCc5Y3ytJM70W",
        HilightGrid: "_28DkEkOjvTWfq0sU8m_i32",
        MainMediaCtn: "FATLceF4ncP8L8QnrQTXV",
        VideoThumbnail: "h0pphNa_Fdu4JUevL5V9y",
        ScreenshotDisplayCtn: "_20YpaGv3V_QArQyy15zAJc",
        MainCapsuleWithHover: "_30BxsjSFrUWCBKntWK9hPg",
        MainCapsule: "_2UuNsdHxhT9la27J_j3BFs",
        AppDetails: "ETHkFxrlPF1znTFXFtjtK",
        GameName: "udhKC-bUdlotRKphK3Fn2",
        ShortDesc: "_2e5PhNJqb68XISttHxdVF2",
        ThumbnialClickable: "_3B8X2c5pBF96hapgz03tC4",
        ThumbnailCtn: "rE40TQ86G7cjVETvUYZm3",
        videoPlaying: "_3D99vg3-OLr6XsvxrtzhZa",
        VideoPlayButton: "_2sJlIVAVWZ2I2iA6IO4pOv",
        VideoLargeContainer: "_3mzKCP4FLx7fUVeKrhZ1nn",
        VideoPopupContainers: "_2LqAoKcZgpOtpoj5_URVNJ",
        VideoLarge: "_3zPl6O67BYIiFOlq7FxlJP",
      };
    },
    2921: (e, t, a) => {
      "use strict";
      a.d(t, { PE: () => U, qP: () => L, Yg: () => F });
      var n = a(76217),
        r = a(86927),
        l = a(90626),
        i = a(62792),
        s = a(55263),
        o = a(1078),
        c = a(12155),
        m = a(52038),
        u = a(78327),
        d = a(51706),
        h = a(22797),
        g = a(91970),
        p = a.n(g),
        E = a(18654),
        C = a.n(E),
        T = a(61859),
        v = a(30470),
        _ = a(32754),
        b = a(24484);
      function f(e) {
        const { storeItem: t } = e,
          a = (0, l.useMemo)(() => {
            if (!t) return [];
            const e = t.GetStoreCategories_SupportedPlayers().slice(0, 1);
            return (
              t.GetStoreCategories_Features().forEach((t) => e.push(t)),
              t.GetStoreCategories_Controller().forEach((t) => e.push(t)),
              t
                .GetStoreCategories_SupportedPlayers()
                .slice(1)
                .forEach((t) => e.push(t)),
              e
            );
          }, [t]);
        return a && 0 != a.length
          ? l.createElement(
              "div",
              { className: (0, m.A)(C().SaleTagBlockCtn, "SaleTagBlockCtn") },
              Boolean(a?.length > 0)
                ? l.createElement(
                    "div",
                    { className: (0, m.A)(C().TagBox, C().Categories) },
                    a.map((e) =>
                      l.createElement(M, { key: "cat_" + e, categoryID: e }),
                    ),
                  )
                : l.createElement("div", null, (0, T.we)("#Broadcast_None")),
            )
          : null;
      }
      class y {
        m_rgCategories;
        constructor() {
          this.m_rgCategories = (0, b.Tc)(
            "feature_categories",
            "application_config",
          );
        }
        static g_Self = null;
        static Get() {
          return y.g_Self || (y.g_Self = new y()), y.g_Self;
        }
      }
      function M(e) {
        const { categoryID: t } = e,
          a = y.Get().m_rgCategories.find((e) => e.categoryid == t);
        return a
          ? l.createElement(
              "div",
              { className: C().Category },
              l.createElement(
                _.he,
                { toolTipContent: a.name },
                l.createElement("div", {
                  className: C().CategoryIcon,
                  style: {
                    background: `url(${v.TS.STORE_CDN_URL}/public/images/${a.image_path}) no-repeat center center/cover`,
                  },
                }),
              ),
            )
          : null;
      }
      var N = a(99956),
        G = a(46253),
        S = a(38535),
        P = a(92834),
        A = a(54096);
      const I = { include_trailers: !0, include_screenshots: !0 },
        k = {
          include_trailers: !0,
          include_screenshots: !0,
          include_basic_info: !0,
          include_tag_count: 10,
        },
        V = {
          include_trailers: !0,
          include_screenshots: !0,
          include_basic_info: !0,
          include_tag_count: 10,
          include_assets_without_overrides: !0,
        };
      function F(e) {
        const { info: t, bPopOutTrailerPlayback: a } = e,
          [n] = (0, s.G6)(t.id, (0, i.SW)(t.type), I),
          [r, o] = (0, l.useState)(!1),
          [c, d] = (0, l.useState)(!1),
          g = (0, S.dy)(),
          E = n?.GetAllTrailers().GetHighlightTrailers(g),
          C = E?.length > 0 && E[0],
          T = l.useCallback(() => {
            C && (a ? d(!0) : o((e) => !e));
          }, [C, a]),
          v = C
            ? l.createElement(x, {
                trailer: C,
                bPlayVideo: r,
                fnTogglePlayTrailer: T,
              })
            : null;
        return n
          ? C || 0 !== n.GetScreenshots(g)?.length
            ? l.createElement(
                "div",
                { className: (0, m.A)(p().HilightGrid, p().MediaContainer) },
                l.createElement(B, { elFeaturedInCenter: v, storeItem: n }),
                Boolean(a)
                  ? l.createElement(U, {
                      storeItem: n,
                      bShowModal: c,
                      hideModal: () => d(!1),
                    })
                  : l.createElement(D, {
                      name: n.GetName(),
                      trailer: C,
                      bPlayVideo: r,
                      fnTogglePlayTrailer: T,
                      bControls: !0,
                    }),
              )
            : (("dev" != u.TS.WEB_UNIVERSE && "beta" != u.TS.WEB_UNIVERSE) ||
                console.log(
                  "appCapsule for appid: " + n?.GetAppID(),
                  n.GetScreenshots(g),
                ),
              null)
          : l.createElement(
              "div",
              { className: (0, m.A)(p().HilightGrid, p().MediaContainer) },
              l.createElement(h.t, { size: "medium" }),
            );
      }
      function L(e) {
        const {
            info: t,
            fnOnClickButton: a,
            bLowBandwidthMode: n,
            bUseAssetWithoutOverride: r,
          } = e,
          [o] = (0, s.G6)(t.id, (0, i.SW)(t.type), r ? V : k);
        return o
          ? l.createElement(
              "div",
              { className: (0, m.A)(p().HilightGrid, p().MediaContainerMM) },
              l.createElement(B, {
                elFeaturedInCenter: l.createElement(W, {
                  storeItem: o,
                  bUseAssetWithoutOverride: r,
                  fnOnClickButton: a,
                }),
                storeItem: o,
                featureElementclassName: p().MainImage,
                bUseTrailerAsFirstThumb: !n,
                bNoScreenShotModals: !0,
              }),
            )
          : l.createElement(
              "div",
              { className: (0, m.A)(p().HilightGrid, p().MediaContainerMM) },
              l.createElement(h.t, { size: "medium" }),
            );
      }
      function B(e) {
        const {
            elFeaturedInCenter: t,
            storeItem: a,
            featureElementclassName: n,
            bUseTrailerAsFirstThumb: r,
            bNoScreenShotModals: i,
          } = e,
          [s, c] = l.useState(void 0),
          [u, d] = (0, o.XC)(),
          h = (0, S.dy)(),
          g = (0, l.useRef)(null),
          [E, C] = (0, l.useState)(0),
          T = t || (void 0 !== s && -1 !== s) ? s : 0,
          v = new Array(),
          _ = new Array();
        if (r) {
          const e = a?.GetAllTrailers().GetHighlightTrailers(h),
            t = e?.length > 0 && e[0];
          t &&
            (v.push(
              l.createElement(x, {
                key: "trail_thumb_",
                trailer: t,
                bPlayVideo: !1,
                fnTogglePlayTrailer: () => {},
                onMouseEnter: () => c(0),
                onMouseLeave: () => {
                  const e = g.current;
                  e && C(e.currentTime);
                },
              }),
            ),
            _.push(
              l.createElement(D, {
                key: "trail_inline",
                ref: g,
                name: a.GetName(),
                trailer: t,
                bControls: !1,
                bPlayVideo: !0,
                startTime: E,
                fnTogglePlayTrailer: () => {},
              }),
            ));
        }
        const b = a.GetScreenshots(h);
        if (
          (b.forEach((e, a) => {
            if ((t || a > 0) && v.length < 3) {
              const t = O(e, ".600x338").replace("http://", "https://"),
                n = O(e, ".800x600").replace("http://", "https://"),
                r = v.length;
              v.push(
                l.createElement(
                  "div",
                  {
                    key: a + "_small_" + t,
                    className: (0, m.A)({
                      [p().ThumbnailCtn]: !0,
                      [p().ThumbnialClickable]: !i,
                    }),
                  },
                  l.createElement("img", {
                    src: t,
                    onClick: i
                      ? void 0
                      : () => {
                          const e = [...b];
                          for (let t = 0; t < a; ++t) e.push(e.shift());
                          u(e);
                        },
                    onMouseEnter: () => c(r),
                  }),
                ),
              ),
                _.push(
                  l.createElement(
                    "div",
                    {
                      key: a + "_big_" + t,
                      className: p().ScreenshotDisplayCtn,
                    },
                    l.createElement("img", { src: n }),
                  ),
                );
            }
          }),
          !(t || (_ && 0 != _.length)))
        )
          return null;
        const f = v.slice(0, 3),
          y = Array.from({ length: Math.max(0, 3 - f.length) });
        return l.createElement(
          l.Fragment,
          null,
          d,
          l.createElement(
            "div",
            { className: n || p().MainMediaCtn },
            Boolean(t && (-1 === T || void 0 === T))
              ? l.createElement(l.Fragment, null, t)
              : l.createElement(l.Fragment, null, _[T]),
          ),
          Boolean(f.length > 0) &&
            l.createElement(
              "div",
              {
                className: p().ScreenshotThumbnailRow,
                onMouseLeave: () => c(-1),
              },
              f,
              y.map((e, t) =>
                l.createElement("div", {
                  key: `app_${a?.GetAppID()}_${t}`,
                  className: p().ThumbnailCtn,
                }),
              ),
            ),
        );
      }
      function D(e) {
        const {
          ref: t,
          name: a,
          trailer: n,
          bControls: r,
          bPlayVideo: i,
          fnTogglePlayTrailer: s,
          startTime: o,
        } = e;
        let d = n.GetMicroTrailer();
        (0, l.useEffect)(() => {
          const e = t?.current;
          if (o > 0 && e) {
            const t = () => {
              e.currentTime = o;
            };
            return (
              e.addEventListener("loadedmetadata", t),
              () => {
                e.removeEventListener("loadedmetadata", t);
              }
            );
          }
        }, [t, o]);
        let h = (0, m.A)(p().VideoLargeContainer, i && p().videoPlaying);
        return l.createElement(
          "div",
          { className: h, onClick: s },
          l.createElement(G.h, {
            name: a,
            trailerCategory: n.GetTrailerCategory(),
            trailerDisplay: 1,
            mouseOver: !1,
          }),
          Boolean(i) &&
            l.createElement(
              "video",
              {
                className: p().VideoLarge,
                ref: t,
                controls: r,
                autoPlay: !0,
                loop: !0,
                muted: !0,
                poster: o > 0 ? void 0 : n.GetScreenshot(),
              },
              l.createElement("source", {
                src: d.strWebMURL,
                type: "video/webm",
              }),
              Boolean(!u.TS.IN_CLIENT) &&
                l.createElement("source", {
                  src: d.strMP4URL,
                  type: "video/mp4",
                }),
            ),
          r &&
            l.createElement(
              "div",
              { onClick: s },
              l.createElement(c.sED, null),
            ),
        );
      }
      function O(e, t) {
        const a = e.replace(/\.[^\.]+$/g, "");
        return a + t + e.slice(a.length);
      }
      function U(e) {
        const { storeItem: t, bShowModal: a, hideModal: n } = e,
          r = (0, S.dy)(),
          i = t?.GetAllTrailers()?.GetHighlightTrailers(r),
          s = i && i.length > 0 ? i[0] : void 0,
          o = l.useId(),
          c = l.useId();
        if (!s) return null;
        const m = s.GetTrailersDash(),
          u = s.GetTrailerHls();
        return 0 == m?.length
          ? null
          : l.createElement(
              d.EN,
              { active: a },
              l.createElement(
                d.eV,
                {
                  "aria-labelledby": (0, P.q)(o, c),
                  bAllowFullSize: !0,
                  bOKDisabled: !0,
                  closeModal: n,
                },
                l.createElement(
                  "div",
                  { className: p().VideoPopupContainers },
                  l.createElement(A.P, {
                    dashManifests: m || [],
                    hlsManifest: u || "",
                    screenshot: "",
                    altText: "",
                    muteWhenAutoplayBlocked: !0,
                  }),
                ),
                l.createElement(
                  "div",
                  { id: o, style: { display: "none" } },
                  t.GetName(),
                ),
                l.createElement(
                  "div",
                  { id: c, style: { display: "none" } },
                  s.GetName(),
                ),
              ),
            );
      }
      function x(e) {
        const {
          trailer: t,
          fnTogglePlayTrailer: a,
          bPlayVideo: n,
          onMouseEnter: r,
          onMouseLeave: i,
        } = e;
        return l.createElement(
          "div",
          {
            className: (0, m.A)({
              [p().VideoThumbnail]: !n,
              [p().videoPlaying]: n,
              [p().ThumbnailCtn]: !0,
            }),
            onClick: a,
            onMouseEnter: r,
            onMouseLeave: i,
          },
          l.createElement("img", { src: t.GetScreenshot() }),
          l.createElement(
            "div",
            { className: p().VideoPlayButton },
            l.createElement(c.jGG, null),
          ),
        );
      }
      function W(e) {
        const {
            storeItem: t,
            fnOnClickButton: a,
            bUseAssetWithoutOverride: i,
          } = e,
          [s, o] = (0, r.OP)(),
          c = i
            ? t.GetAssetsWithoutOverrides()?.GetMainCapsuleURL()
            : t.GetAssets()?.GetMainCapsuleURL();
        return l.createElement(
          n.Z,
          {
            focusable: !0,
            noFocusRing: !0,
            className: p().MainCapsuleWithHover,
            ...o,
            onActivate: a,
          },
          l.createElement("img", { className: p().MainCapsule, src: c }),
          l.createElement(
            "div",
            { className: p().AppDetails },
            l.createElement(
              "div",
              { className: (0, m.A)(p().GameName) },
              t.GetName(),
            ),
            l.createElement(
              "div",
              { className: p().ShortDesc },
              t.GetShortDescription(),
              " ",
            ),
            l.createElement(N.n, {
              rgTagIDs: t.GetTagIDs(),
              instanceNum: 0,
              bLargeText: !0,
              bHideTitle: !0,
              bNoStoreLinks: !0,
            }),
            l.createElement(f, { storeItem: t }),
          ),
        );
      }
    },
  },
]);
