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
      a.d(t, { PE: () => U, qP: () => F, Yg: () => B });
      var r = a(76217),
        n = a(86927),
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
        f = a(24484);
      function b(e) {
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
          this.m_rgCategories = (0, f.Tc)(
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
      var G = a(99956),
        N = a(46253),
        S = a(38535),
        A = a(92834),
        P = a(54096);
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
      function B(e) {
        const { info: t, bPopOutTrailerPlayback: a } = e,
          [r] = (0, s.G6)(t.id, (0, i.SW)(t.type), I),
          [n, o] = (0, l.useState)(!1),
          [c, d] = (0, l.useState)(!1),
          g = (0, S.dy)(),
          E = r?.GetAllTrailers().GetHighlightTrailers(g),
          C = E?.length > 0 && E[0],
          T = l.useCallback(() => {
            C && (a ? d(!0) : o((e) => !e));
          }, [C, a]),
          v = C
            ? l.createElement(x, {
                trailer: C,
                bPlayVideo: n,
                fnTogglePlayTrailer: T,
              })
            : null;
        return r
          ? C || 0 !== r.GetScreenshots(g)?.length
            ? l.createElement(
                "div",
                { className: (0, m.A)(p().HilightGrid, p().MediaContainer) },
                l.createElement(L, { elFeaturedInCenter: v, storeItem: r }),
                Boolean(a)
                  ? l.createElement(U, {
                      storeItem: r,
                      bShowModal: c,
                      hideModal: () => d(!1),
                    })
                  : l.createElement(D, {
                      name: r.GetName(),
                      trailer: C,
                      bPlayVideo: n,
                      fnTogglePlayTrailer: T,
                      bControls: !0,
                    }),
              )
            : (("dev" != u.TS.WEB_UNIVERSE && "beta" != u.TS.WEB_UNIVERSE) ||
                console.log(
                  "appCapsule for appid: " + r?.GetAppID(),
                  r.GetScreenshots(g),
                ),
              null)
          : l.createElement(
              "div",
              { className: (0, m.A)(p().HilightGrid, p().MediaContainer) },
              l.createElement(h.t, { size: "medium" }),
            );
      }
      function F(e) {
        const {
            info: t,
            fnOnClickButton: a,
            bLowBandwidthMode: r,
            bUseAssetWithoutOverride: n,
          } = e,
          [o] = (0, s.G6)(t.id, (0, i.SW)(t.type), n ? V : k);
        return o
          ? l.createElement(
              "div",
              { className: (0, m.A)(p().HilightGrid, p().MediaContainerMM) },
              l.createElement(L, {
                elFeaturedInCenter: l.createElement(W, {
                  storeItem: o,
                  bUseAssetWithoutOverride: n,
                  fnOnClickButton: a,
                }),
                storeItem: o,
                featureElementclassName: p().MainImage,
                bUseTrailerAsFirstThumb: !r,
                bNoScreenShotModals: !0,
              }),
            )
          : l.createElement(
              "div",
              { className: (0, m.A)(p().HilightGrid, p().MediaContainerMM) },
              l.createElement(h.t, { size: "medium" }),
            );
      }
      function L(e) {
        const {
            elFeaturedInCenter: t,
            storeItem: a,
            featureElementclassName: r,
            bUseTrailerAsFirstThumb: n,
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
        if (n) {
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
        const f = a.GetScreenshots(h);
        if (
          (f.forEach((e, a) => {
            if ((t || a > 0) && v.length < 3) {
              const t = O(e, ".600x338").replace("http://", "https://"),
                r = O(e, ".800x600").replace("http://", "https://"),
                n = v.length;
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
                          const e = [...f];
                          for (let t = 0; t < a; ++t) e.push(e.shift());
                          u(e);
                        },
                    onMouseEnter: () => c(n),
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
                    l.createElement("img", { src: r }),
                  ),
                );
            }
          }),
          !(t || (_ && 0 != _.length)))
        )
          return null;
        const b = v.slice(0, 3),
          y = Array.from({ length: Math.max(0, 3 - b.length) });
        return l.createElement(
          l.Fragment,
          null,
          d,
          l.createElement(
            "div",
            { className: r || p().MainMediaCtn },
            Boolean(t && (-1 === T || void 0 === T))
              ? l.createElement(l.Fragment, null, t)
              : l.createElement(l.Fragment, null, _[T]),
          ),
          Boolean(b.length > 0) &&
            l.createElement(
              "div",
              {
                className: p().ScreenshotThumbnailRow,
                onMouseLeave: () => c(-1),
              },
              b,
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
          trailer: r,
          bControls: n,
          bPlayVideo: i,
          fnTogglePlayTrailer: s,
          startTime: o,
        } = e;
        let d = r.GetMicroTrailer();
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
          l.createElement(N.h, {
            name: a,
            trailerCategory: r.GetTrailerCategory(),
            trailerDisplay: 1,
            mouseOver: !1,
          }),
          Boolean(i) &&
            l.createElement(
              "video",
              {
                className: p().VideoLarge,
                ref: t,
                controls: n,
                autoPlay: !0,
                loop: !0,
                muted: !0,
                poster: o > 0 ? void 0 : r.GetScreenshot(),
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
          n &&
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
        const {
            storeItem: t,
            bShowModal: a,
            trailerBaseID: r,
            hideModal: n,
          } = e,
          i = (0, S.dy)(),
          s = (0, l.useMemo)(() => {
            if (r) {
              const e = t
                ?.GetAllTrailers()
                ?.GetAllTrailers(i)
                .find((e) => e.GetTrailerID() == r);
              if (e) return e;
            }
            const e = t?.GetAllTrailers()?.GetHighlightTrailers(i);
            return e && e.length > 0 ? e[0] : void 0;
          }, [i, t, r]),
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
                  "aria-labelledby": (0, A.q)(o, c),
                  bAllowFullSize: !0,
                  bOKDisabled: !0,
                  closeModal: n,
                },
                l.createElement(
                  "div",
                  { className: p().VideoPopupContainers },
                  l.createElement(P.P, {
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
          bPlayVideo: r,
          onMouseEnter: n,
          onMouseLeave: i,
        } = e;
        return l.createElement(
          "div",
          {
            className: (0, m.A)({
              [p().VideoThumbnail]: !r,
              [p().videoPlaying]: r,
              [p().ThumbnailCtn]: !0,
            }),
            onClick: a,
            onMouseEnter: n,
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
          [s, o] = (0, n.OP)(),
          c = i
            ? t.GetAssetsWithoutOverrides()?.GetMainCapsuleURL()
            : t.GetAssets()?.GetMainCapsuleURL();
        return l.createElement(
          r.Z,
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
            l.createElement(G.n, {
              rgTagIDs: t.GetTagIDs(),
              instanceNum: 0,
              bLargeText: !0,
              bHideTitle: !0,
              bNoStoreLinks: !0,
            }),
            l.createElement(b, { storeItem: t }),
          ),
        );
      }
    },
  },
]);
