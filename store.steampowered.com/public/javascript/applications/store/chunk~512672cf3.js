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
      a.d(t, { PE: () => x, qP: () => I, Yg: () => F });
      var n = a(76217),
        l = a(86927),
        r = a(42834),
        i = a(39777),
        s = a(52541),
        o = a(38535),
        c = a(90626),
        m = a(92834),
        d = a(1078),
        u = a(12155),
        h = a(52038),
        g = a(78327),
        p = a(51706),
        E = a(46253),
        _ = a(22797),
        f = a(54096),
        v = a(91970),
        y = a.n(v),
        b = a(18654),
        C = a.n(b),
        T = a(32754),
        M = a(61859),
        N = a(30470),
        P = a(24484);
      function S(e) {
        const { id: t } = e,
          { data: a } = (0, i.J$)(t),
          n = (0, c.useMemo)(() => {
            if (!a) return [];
            const e =
              a.categories?.supported_player_categoryids?.slice(0, 1) || [];
            return (
              a.categories?.feature_categoryids?.forEach((t) => e.push(t)),
              a.categories?.controller_categoryids?.forEach((t) => e.push(t)),
              a.categories?.supported_player_categoryids
                ?.slice(1)
                .forEach((t) => e.push(t)),
              e
            );
          }, [a]);
        return n && 0 != n.length
          ? c.createElement(
              "div",
              { className: (0, h.A)(C().SaleTagBlockCtn, "SaleTagBlockCtn") },
              Boolean(n?.length > 0)
                ? c.createElement(
                    "div",
                    { className: (0, h.A)(C().TagBox, C().Categories) },
                    n.map((e) =>
                      c.createElement(A, { key: "cat_" + e, categoryID: e }),
                    ),
                  )
                : c.createElement("div", null, (0, M.we)("#Broadcast_None")),
            )
          : null;
      }
      class k {
        m_rgCategories;
        constructor() {
          this.m_rgCategories = (0, P.Tc)(
            "feature_categories",
            "application_config",
          );
        }
        static g_Self = null;
        static Get() {
          return k.g_Self || (k.g_Self = new k()), k.g_Self;
        }
      }
      function A(e) {
        const { categoryID: t } = e,
          a = k.Get().m_rgCategories.find((e) => e.categoryid == t);
        return a
          ? c.createElement(
              "div",
              { className: C().Category },
              c.createElement(
                T.he,
                { toolTipContent: a.name },
                c.createElement("div", {
                  className: C().CategoryIcon,
                  style: {
                    background: `url(${N.TS.STORE_CDN_URL}/public/images/${a.image_path}) no-repeat center center/cover`,
                  },
                }),
              ),
            )
          : null;
      }
      var B = a(99956),
        V = a(52471);
      function F(e) {
        const { id: t, bPopOutTrailerPlayback: a } = e,
          { data: n } = (0, i.Yo)(t),
          { data: l } = (0, i.j4)(t),
          { data: r } = (0, i.J$)(t),
          [s, m] = (0, c.useState)(!1),
          [d, u] = (0, c.useState)(!1),
          g = (0, o.dy)(),
          p = n?.highlights?.filter((e) => !g || e.all_ages),
          E = p && p?.length > 0 ? p[0] : void 0,
          f = c.useCallback(() => {
            E && (a ? u(!0) : m((e) => !e));
          }, [E, a]);
        if (!r)
          return c.createElement(
            "div",
            { className: (0, h.A)(y().HilightGrid, y().MediaContainer) },
            c.createElement(_.t, { size: "medium" }),
          );
        const v = E
          ? c.createElement(D, {
              trailer: E,
              bPlayVideo: s,
              fnTogglePlayTrailer: f,
            })
          : null;
        return E ||
          (l && l.all_ages_screenshots && l.all_ages_screenshots.length > 0)
          ? c.createElement(
              "div",
              { className: (0, h.A)(y().HilightGrid, y().MediaContainer) },
              c.createElement(L, {
                elFeaturedInCenter: v,
                storeItemScreenshots: l,
                trailer: E,
                id: t,
                name: r.name || "",
              }),
              Boolean(a)
                ? c.createElement(x, {
                    id: t,
                    bShowModal: d,
                    hideModal: () => u(!1),
                  })
                : c.createElement(O, {
                    name: r.name || "",
                    trailer: E,
                    bPlayVideo: s,
                    fnTogglePlayTrailer: f,
                    bControls: !0,
                  }),
            )
          : null;
      }
      function I(e) {
        const {
            id: t,
            fnOnClickButton: a,
            bLowBandwidthMode: n,
            bUseAssetWithoutOverride: l,
          } = e,
          { data: r } = (0, i.Yo)(t),
          { data: s } = (0, i.j4)(t),
          { data: o } = (0, i.J$)(t);
        return r && s && o
          ? c.createElement(
              "div",
              { className: (0, h.A)(y().HilightGrid, y().MediaContainerMM) },
              c.createElement(L, {
                id: t,
                elFeaturedInCenter: c.createElement(w, {
                  id: t,
                  bUseAssetWithoutOverride: Boolean(l),
                  fnOnClickButton: a,
                }),
                storeItemScreenshots: s,
                featureElementclassName: y().MainImage,
                bUseTrailerAsFirstThumb: !n,
                bNoScreenShotModals: !0,
                name: o.name || "",
              }),
            )
          : c.createElement(
              "div",
              { className: (0, h.A)(y().HilightGrid, y().MediaContainerMM) },
              c.createElement(_.t, { size: "medium" }),
            );
      }
      function L(e) {
        const {
            elFeaturedInCenter: t,
            id: a,
            name: n,
            trailer: l,
            storeItemScreenshots: i,
            featureElementclassName: m,
            bUseTrailerAsFirstThumb: u,
            bNoScreenShotModals: g,
          } = e,
          [p, E] = c.useState(void 0),
          [_, f] = (0, d.XC)(),
          v = (0, o.dy)(),
          b = (0, c.useRef)(null),
          [C, T] = (0, c.useState)(0);
        if (!a) return null;
        const M = t || (void 0 !== p && -1 !== p) ? p : 0,
          N = new Array(),
          P = new Array();
        u &&
          l &&
          (N.push(
            c.createElement(D, {
              key: "trail_thumb_",
              trailer: l,
              bPlayVideo: !1,
              fnTogglePlayTrailer: () => {},
              onMouseEnter: () => E(0),
              onMouseLeave: () => {
                const e = b.current;
                e && T(e.currentTime);
              },
            }),
          ),
          P.push(
            c.createElement(O, {
              key: "trail_inline",
              ref: b,
              name: n,
              trailer: l,
              bControls: !1,
              bPlayVideo: !0,
              startTime: C,
              fnTogglePlayTrailer: () => {},
            }),
          ));
        const S = (
          v ? i?.all_ages_screenshots : i?.mature_content_screenshots
        )?.filter(Boolean);
        if (
          (S?.forEach((e, a) => {
            if ((t || a > 0) && N.length < 3) {
              const t = (0, r.bu)(e, "thumb"),
                n = (0, r.bu)(e, "full"),
                l = N.length;
              N.push(
                c.createElement(
                  "div",
                  {
                    key: a + "_small_" + t,
                    className: (0, h.A)({
                      [y().ThumbnailCtn]: !0,
                      [y().ThumbnialClickable]: !g,
                    }),
                  },
                  c.createElement("img", {
                    src: t,
                    onClick: g
                      ? void 0
                      : () => {
                          const e = [...(S || [])];
                          if (e.length > 0) {
                            for (let t = 0; t < a; ++t) {
                              const t = e.shift();
                              t && e.push(t);
                            }
                            _(e.map((e) => (0, r.bu)(e, "full")));
                          }
                        },
                    onMouseEnter: () => E(l),
                  }),
                ),
              ),
                P.push(
                  c.createElement(
                    "div",
                    {
                      key: a + "_big_" + t,
                      className: y().ScreenshotDisplayCtn,
                    },
                    c.createElement("img", { src: n }),
                  ),
                );
            }
          }),
          !(t || (P && 0 != P.length)))
        )
          return null;
        const k = N.slice(0, 3),
          A = Array.from({ length: Math.max(0, 3 - k.length) });
        return c.createElement(
          c.Fragment,
          null,
          f,
          c.createElement(
            "div",
            { className: m || y().MainMediaCtn },
            Boolean(t && (-1 === M || void 0 === M))
              ? c.createElement(c.Fragment, null, t)
              : c.createElement(c.Fragment, null, void 0 !== M && P[M]),
          ),
          Boolean(k.length > 0) &&
            c.createElement(
              "div",
              {
                className: y().ScreenshotThumbnailRow,
                onMouseLeave: () => E(-1),
              },
              k,
              A.map((e, t) =>
                c.createElement("div", {
                  key: `app_${(0, s.ER)(a)}_${t}`,
                  className: y().ThumbnailCtn,
                }),
              ),
            ),
        );
      }
      function O(e) {
        const {
          ref: t,
          name: a,
          trailer: n,
          bControls: l,
          bPlayVideo: r,
          fnTogglePlayTrailer: i,
          startTime: s,
        } = e;
        if (
          ((0, c.useEffect)(() => {
            const e = t?.current;
            if (null != s && s > 0 && e) {
              const t = () => {
                e.currentTime = s || 0;
              };
              return (
                e.addEventListener("loadedmetadata", t),
                () => {
                  e.removeEventListener("loadedmetadata", t);
                }
              );
            }
          }, [t, s]),
          !n)
        )
          return null;
        let o = (0, h.A)(y().VideoLargeContainer, r && y().videoPlaying);
        return c.createElement(
          "div",
          { className: o, onClick: i },
          c.createElement(E.h, {
            name: a,
            trailerCategory: n.trailer_category,
            trailerDisplay: 1,
            mouseOver: !1,
          }),
          Boolean(r && n.microtrailer) &&
            c.createElement(
              "video",
              {
                className: y().VideoLarge,
                ref: t,
                controls: l,
                autoPlay: !0,
                loop: !0,
                muted: !0,
                poster: null != s && s > 0 ? void 0 : n.screenshot_full,
              },
              n.microtrailer?.map((e) =>
                g.TS.IN_CLIENT && "video/mp4" == e.type
                  ? null
                  : c.createElement("source", {
                      key: e.filename,
                      src: (0, V.M4)(n, e.filename || ""),
                      type: e.type,
                    }),
              ),
            ),
          l &&
            c.createElement(
              "div",
              { onClick: i },
              c.createElement(u.sED, null),
            ),
        );
      }
      function x(e) {
        const { id: t, bShowModal: a, trailerBaseID: n, hideModal: l } = e,
          { data: r } = (0, i.Yo)(t),
          { data: s } = (0, i.J$)(t),
          d = (0, o.dy)(),
          u = (0, c.useMemo)(() => {
            if (!r) return;
            if (n) {
              const e = [...(r.highlights || []), ...(r.other_trailers || [])]
                .filter(Boolean)
                .filter((e) => !d || e.all_ages)
                .find((e) => e.trailer_base_id == n);
              if (e) return e;
            }
            const e = (r.highlights || [])
              .filter(Boolean)
              .filter((e) => !d || e.all_ages);
            return e && e.length > 0 ? e[0] : void 0;
          }, [d, r, n]),
          h = c.useId(),
          g = c.useId();
        if (!u || !u.adaptive_trailers) return null;
        const E = u.adaptive_trailers
            .filter(
              (e) =>
                ("dash_h264" == e.encoding || "dash_av1" == e.encoding) &&
                e.cdn_path,
            )
            .map((e) => (0, V.q1)(u, e.cdn_path || "")),
          _ = u.adaptive_trailers
            .filter((e) => "hls_h264" == e.encoding && e.cdn_path)
            .map((e) => (0, V.q1)(u, e.cdn_path || ""));
        return 0 == E?.length
          ? null
          : c.createElement(
              p.EN,
              { active: a },
              c.createElement(
                p.eV,
                {
                  "aria-labelledby": (0, m.q)(h, g),
                  bAllowFullSize: !0,
                  bOKDisabled: !0,
                  closeModal: l,
                },
                c.createElement(
                  "div",
                  { className: y().VideoPopupContainers },
                  c.createElement(f.P, {
                    dashManifests: E || [],
                    hlsManifest: (_.length > 0 && _?.[0]) || "",
                    screenshot: (0, V.hl)(u),
                    altText: u.trailer_name,
                    muteWhenAutoplayBlocked: !0,
                  }),
                ),
                c.createElement(
                  "div",
                  { id: h, style: { display: "none" } },
                  s?.name || "",
                ),
                c.createElement(
                  "div",
                  { id: g, style: { display: "none" } },
                  u.trailer_name,
                ),
              ),
            );
      }
      function D(e) {
        const {
          trailer: t,
          fnTogglePlayTrailer: a,
          bPlayVideo: n,
          onMouseEnter: l,
          onMouseLeave: r,
        } = e;
        return c.createElement(
          "div",
          {
            className: (0, h.A)({
              [y().VideoThumbnail]: !n,
              [y().videoPlaying]: n,
              [y().ThumbnailCtn]: !0,
            }),
            onClick: a,
            onMouseEnter: l,
            onMouseLeave: r,
          },
          c.createElement("img", { src: (0, V.hl)(t) }),
          c.createElement(
            "div",
            { className: y().VideoPlayButton },
            c.createElement(u.jGG, null),
          ),
        );
      }
      function w(e) {
        const { id: t, fnOnClickButton: a, bUseAssetWithoutOverride: s } = e,
          [o, m] = (0, l.OP)(),
          { data: d } = (0, i.lv)(t, s),
          { data: u } = (0, i.J$)(t),
          { data: g } = (0, i.wl)(t),
          { data: p } = (0, i.xz)(t);
        if (!d || !g || !u) return null;
        const E = (0, r.b0)(d, "main_capsule");
        return c.createElement(
          n.Z,
          {
            focusable: !0,
            noFocusRing: !0,
            className: y().MainCapsuleWithHover,
            ...m,
            onActivate: a,
          },
          c.createElement("img", { className: y().MainCapsule, src: E }),
          c.createElement(
            "div",
            { className: y().AppDetails },
            c.createElement(
              "div",
              { className: (0, h.A)(y().GameName) },
              u.name || "",
            ),
            c.createElement(
              "div",
              { className: y().ShortDesc },
              g.short_description,
              " ",
            ),
            c.createElement(B.n, {
              rgTagIDs: p ? p.map((e) => e.tagid || 0) : [],
              instanceNum: 0,
              bLargeText: !0,
              bHideTitle: !0,
              bNoStoreLinks: !0,
            }),
            c.createElement(S, { id: t }),
          ),
        );
      }
    },
  },
]);
