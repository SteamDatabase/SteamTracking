/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkstore = self.webpackChunkstore || []).push([
  [16015],
  {
    83164: (e) => {
      e.exports = { CornerSash: "_1tKrXofY3mdVjHya13I1Ks" };
    },
    34713: (e) => {
      e.exports = {
        SupportedPlatforms: "_33rQKLUJRiKbr34oQgUJSd",
        PlatformIndicator: "_1POD5IsW1vYfv9B_TuSiBd",
        Windows: "_3xTrz2wDDtzNFR58CQfSNa",
        SteamOS: "_1z6ASwnrVeCtYcPfPjiZZd",
        Mac: "_1FiaJi5I3_8ky2ppYqGqfr",
        DeckCompat: "GFz2Vhq20J9x6lqpaKy2G",
        Fill: "_39zOL0i8BdQ_RV-xE0zXDz",
        SteamDeckCompatLogo: "_2xju2qqP5744ItNt2uvbdT",
        SteamDeckCompatIcon: "_28xj3TU4bHvjyeVhlzCmRV",
        SteamDeckCompatVerified: "_3-OPVQMD-qkvAyt3Jntn9t",
        SteamDeckCompatPlayable: "_1EMxxDePjZh_-E7AH0yDym",
        SteamDeckCompatUnsupported: "_2qziiy9xhD4mLc1OgxQAAy",
        SteamDeckCompatUnknown: "I6YFAbL_5IYOTtedVwwPV",
        SteamOSCompatCompatible: "_2fVV0WviM21gsBt1Iz-Htx",
      };
    },
    35050: (e) => {
      e.exports = { bordered_live_stream_icon: "_2R1rYdwKuMFLsEb4WvJYdD" };
    },
    39449: (e) => {
      e.exports = {
        PopupScreenshotModal: "yloqxGhIEzvGIwbQbo6KP",
        PopupScreenshotContainer: "_1wwvw8QMJqug_-ioZdRJTC",
        PopupScreenshot: "_31XZuVC3l846TjPDScscaS",
        ButtonCtn: "_3MyspS-H5SnsUnKa3yhdtJ",
        ButtonIcon: "_1tCO1rmBfntUI0TlpTly1F",
        Disabled: "_1a_f8VY56CtjgePDRTaC-W",
      };
    },
    58855: (e) => {
      e.exports = {
        CompatIcon: "_3cEK5JKL6FSqY5FgD_4hFA",
        CompatIconFrame: "_3E70dZ6hSfFCmskaIzbgJp",
      };
    },
    67523: (e) => {
      e.exports = { ErrorDiv: "_2FXMECiK-1oag3HieTiKJW" };
    },
    21038: (e) => {
      e.exports = {
        PreviewCtn: "_16SknI_KfMn45zQAvi-Xrs",
        SVG: "_3Mns5ZEBThi10kv9zwdCRr",
      };
    },
    78588: (e, t, a) => {
      "use strict";
      a.d(t, { a: () => u });
      var r = a(7850),
        s = a(74812),
        n = a(8893),
        i = a(90717),
        l = a(26296),
        c = a(52038),
        o = a(18654),
        d = a.n(o);
      function u(e) {
        const {
            id: t,
            imageType: a,
            bPreferAssetWithoutOverride: o,
            strAdditionalClassName: u,
          } = e,
          { storeItemAsset: p, storeItemDefaultInfo: m } = (0, s.q)(t, a, o);
        if ("library" === a || "vertical" == a)
          return (0, r.jsx)(n.G, { id: t, bPreferAssetWithoutOverride: o });
        let C = "";
        if ("main" === a) C = d().MainCapsuleImageContainer;
        else C = d().HeaderCapsuleImageContainer;
        if (void 0 === p || !m)
          return (0, r.jsx)("div", {
            className: (0, c.A)(C, "CapsuleImageCtn", u),
          });
        if (null == p) return null;
        let h = (0, i.N)(p, "header" === a);
        return (0, r.jsx)("div", {
          className: (0, c.A)(C, "CapsuleImageCtn", u),
          children: (0, r.jsx)(l.o, {
            lazyLoad: !0,
            srcs: h,
            className: (0, c.A)(d().CapsuleImage),
            alt: m.name,
          }),
        });
      }
    },
    90717: (e, t, a) => {
      "use strict";
      a.d(t, { M: () => n, N: () => s });
      var r = a(42834);
      function s(e, t) {
        let a = [];
        return (
          e &&
            (function (e, t, a) {
              const s = (0, r.b0)(t, "header_2x") ?? (0, r.b0)(t, "header"),
                n =
                  (0, r.b0)(t, "main_capsule_2x") ??
                  (0, r.b0)(t, "main_capsule");
              a ? e.push(s, n) : e.push(n, s);
            })(a, e, t),
          a.filter((e) => !!e)
        );
      }
      function n(e, t) {
        return {
          strStoreVerticalURL: (0, r.b0)(e, "hero_capsule"),
          strLibraryVerticalURL: (0, r.b0)(e, "library_capsule"),
        };
      }
    },
    8893: (e, t, a) => {
      "use strict";
      a.d(t, { G: () => h });
      var r = a(7850),
        s = a(95578),
        n = a(74812),
        i = a(90626),
        l = a(18654),
        c = a.n(l),
        o = a(26296),
        d = a(52038),
        u = a(78327),
        p = a(90717),
        m = a(83164),
        C = a.n(m);
      function h(e) {
        const { id: t, bPreferLibrary: a, bPreferAssetWithoutOverride: l } = e,
          { storeItemDefaultInfo: m, storeItemAsset: h } = (0, n.q)(
            t,
            "vertical",
            l,
          ),
          [f, g] = i.useState(0);
        if (!m || !h)
          return (0, r.jsx)("div", {
            className: c().HeroCapsuleImageContainer,
          });
        const { strStoreVerticalURL: x, strLibraryVerticalURL: _ } = (0, p.M)(
          h,
          m,
        );
        if (x && (!a || !_))
          return (0, r.jsxs)("div", {
            className: (0, d.A)(
              c().HeroCapsuleImageContainer,
              "HeroCapsuleImageContainer",
            ),
            children: [
              (0, r.jsx)("img", {
                src: x,
                className: c().CapsuleImage,
                alt: m.name,
              }),
              Boolean(m.type == s.uE._i) &&
                (0, r.jsx)("img", {
                  className: C().CornerSash,
                  src: `${u.TS.MEDIA_CDN_URL}appmgmt/artassets/capsule_dlc.png`,
                  alt: "DLC",
                }),
            ],
          });
        if (_)
          return (0, r.jsxs)("div", {
            className: (0, d.A)(
              c().LibraryFallbackAssetImageContainer,
              c().VerticalCapsule,
              a ? c().ForceLibrarySizing : "",
            ),
            children: [
              (0, r.jsx)("div", {
                className: c().FallbackBackground,
                style: { backgroundImage: `url(${_})` },
              }),
              (0, r.jsx)("img", {
                src: _,
                className: c().CapsuleImage,
                alt: m.name,
              }),
            ],
          });
        const v = (0, p.N)(h, !0),
          w = v.length - 1,
          j = (e) => {
            const t = v.indexOf(e);
            t >= w && t < v.length - 1 && g(t + 1);
          };
        if (f < v.length) {
          const e = v[f];
          return (0, r.jsxs)("div", {
            className: c().LibraryFallbackAssetImageContainer,
            children: [
              (0, r.jsx)("div", {
                className: c().FallbackBackground,
                style: { backgroundImage: `url(${e})` },
              }),
              (0, r.jsx)(o.o, {
                lazyLoad: !0,
                srcs: v,
                className: c().CapsuleImage,
                alt: m.name,
                onImageError: j,
              }),
            ],
          });
        }
        return (0, r.jsx)("div", { className: c().HeroCapsuleImageContainer });
      }
    },
    76682: (e, t, a) => {
      "use strict";
      a.d(t, { dE: () => i, rt: () => s, zl: () => n });
      var r = a(90626);
      a(95578);
      function s(e) {
        return (0, r.useMemo)(
          () =>
            (function (e) {
              if (!e || !e.id) return;
              if (!e.type) return { appid: e.id };
              switch (e.type) {
                case "sub":
                  return { packageid: e.id };
                case "bundle":
                  return { bundleid: e.id };
                default:
                  return { appid: e.id };
              }
            })(e),
          [e?.id, e?.type],
        );
      }
      function n(e, t) {
        return (0, r.useMemo)(
          () =>
            (function (e, t) {
              switch (t) {
                case "sub":
                  return { packageid: e };
                case "bundle":
                  return { bundleid: e };
                default:
                  return { appid: e };
              }
            })(e, t),
          [e, t],
        );
      }
      function i(e, t) {
        return (0, r.useMemo)(() => l(e, t), [e, t]);
      }
      function l(e, t) {
        switch (t) {
          case "sub":
            return { packageid: e };
          case "bundle":
            return { bundleid: e };
          default:
            return { appid: e };
        }
      }
    },
    94191: (e, t, a) => {
      "use strict";
      a.d(t, { V: () => j });
      var r = a(7850),
        s = a(66418),
        n = a(78686),
        i = a(80902),
        l = a(75233),
        c = a(24484),
        o = a(75515);
      var d = a(9006),
        u = a(39777),
        p = a(90626);
      function m() {
        return (0, i.I)({
          queryKey: ["BroadcastApps"],
          queryFn: async () => {
            const e = await (async function () {
              let e = (0, c.Fd)(
                "broadcast_available_for_page",
                "application_config",
              );
              if ((0, o.h7)(e)) {
                const t = new Set();
                return (
                  e.filtered.forEach((e) => {
                    e.appid && t.add(e.appid);
                  }),
                  Array.from(t)
                );
              }
              return [];
            })();
            return new Set(e);
          },
        });
      }
      var C = a(58918),
        h = a(17376);
      const f =
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAAKCAYAAABi8KSDAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6OUNDNzBFNTUyMUM0MTFFNDk1REVFODRBNUU5RjA2MUYiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6OUNDNzBFNTYyMUM0MTFFNDk1REVFODRBNUU5RjA2MUYiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo5Q0M3MEU1MzIxQzQxMUU0OTVERUU4NEE1RTlGMDYxRiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo5Q0M3MEU1NDIxQzQxMUU0OTVERUU4NEE1RTlGMDYxRiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pv3vUKAAAAAlSURBVHjaYvz//z8DsYARpFhISAivjnfv3jGSp3jUGeQ4AyDAADZHNe2nyOBrAAAAAElFTkSuQmCC";
      var g = a(18654),
        x = a.n(g),
        _ = a(12155),
        v = a(52038),
        w = a(94011);
      function j(e) {
        const { appids: t, hide_status_banners: a, show_early_access: i } = e,
          { data: c } = (0, C.$Y)(),
          { data: o } = (0, h.F0)(),
          g = t.length > 0 && t.every((e) => c && c.has(e)),
          j = t.length > 0 && t.every((e) => o && o.has(e)),
          b = (function (e) {
            const { data: t } = m(),
              [a, r] = (0, p.useState)(!1),
              s = (0, l.jE)(),
              n = (0, d.eG)();
            return (
              (0, p.useEffect)(() => {
                if (!e || 0 == e.length || !t) return r(!1);
                (async () => {
                  const a = await Promise.all(
                    e
                      .filter((e) => !!e)
                      .map((e) => s.fetchQuery((0, u.us)(n, { appid: e }))),
                  );
                  r(
                    a.some(
                      (e) =>
                        (e && e.appid && t.has(e.appid)) ||
                        (e?.related_items?.parent_appid &&
                          t.has(e.related_items.parent_appid)),
                    ),
                  );
                })();
              }, [e, n, s, t]),
              a
            );
          })(t),
          S = g && !a,
          L = j && !a,
          I = !a && i;
        return (0, r.jsxs)("div", {
          className: (0, v.A)(x().CapsuleDecorators, "CapsuleDecorators"),
          children: [
            S &&
              (0, r.jsxs)("span", {
                className: (0, v.A)(x().Banner, x().Blue),
                children: [
                  (0, r.jsx)("img", {
                    src: (0, s.YJ)(f),
                    className: x().LinesImg,
                    alt: n.Z.Localize("#Sale_InLibrary"),
                  }),
                  n.Z.Localize("#Sale_InLibrary"),
                ],
              }),
            L &&
              (0, r.jsxs)("span", {
                className: x().Banner,
                children: [
                  (0, r.jsx)(_.qnF, { className: x().LinesImg }),
                  n.Z.Localize("#Sale_OnWishlist"),
                ],
              }),
            I && !S && !L && (0, r.jsx)(y, { appids: t }),
            b && (0, r.jsx)(w.K, {}),
          ],
        });
      }
      function y(e) {
        const { appids: t } = e,
          a = (function (e) {
            const [t, a] = (0, p.useState)(!1),
              r = (0, l.jE)(),
              s = (0, d.eG)();
            return (
              (0, p.useEffect)(() => {
                if (!e || 0 == e.length) return a(!1);
                (async () => {
                  const t = await Promise.all(
                    e.map((e) => r.fetchQuery((0, u.us)(s, { appid: e }))),
                  );
                  a(t.some((e) => e && e.is_early_access));
                })();
              }, [e, s, r]),
              t
            );
          })(t);
        return a
          ? (0, r.jsx)("span", {
              className: (0, v.A)(x().Banner, x().EarlyAccessGradient),
              children: n.Z.Localize("#Sale_EarlyAccess"),
            })
          : null;
      }
    },
    74812: (e, t, a) => {
      "use strict";
      a.d(t, { q: () => i });
      var r = a(81393),
        s = a(95578),
        n = a(39777);
      function i(e, t, a = !1) {
        const { data: i } = (0, n.J$)(e),
          { data: l } = (0, n.lv)(e, a);
        let c;
        i &&
          1 == i.included_appids?.length &&
          !(function (e, t) {
            if (!e) return !1;
            switch (t) {
              case "header":
                return !!e.header;
              case "main":
                return !!e.main_capsule;
              case "vertical":
              case "library":
                return !!e.hero_capsule || !!e.library_capsule;
              default:
                return (0, r.z_)(t, `Unhandled imageType: ${t}`), !1;
            }
          })(l, t) &&
          i.item_type &&
          [s.c6.RD, s.c6.xO].includes(i.item_type) &&
          (c = { appid: i.included_appids[0] });
        const { data: o } = (0, n.J$)(c),
          { data: d } = (0, n.lv)(c, a),
          u = o?.visible ? o : i;
        return { storeItemAsset: o?.visible ? d : l, storeItemDefaultInfo: u };
      }
    },
    75515: (e, t, a) => {
      "use strict";
      a.d(t, { PH: () => d, TT: () => n, h7: () => u, mY: () => o });
      var r = a(34629),
        s = a(14947);
      class n {
        constructor() {
          (0, s.Gn)(this);
        }
        accountid;
        steamid;
        appid;
        hub_popular;
        popular;
        relay_broadcast_id;
        rowversion;
        thumbnail_http_address;
        nAppIDVOD;
        title = void 0;
        viewer_count = void 0;
        whitelist_rank;
        gamedata_subtitle = void 0;
        store_title;
        left_panel;
        right_panel;
        snr;
        broadcast_chat_visibility;
        default_selection_priority = o.k_eGeneral;
        current_selection_priority = o.k_eGeneral;
      }
      (0, r.Cg)([s.sH], n.prototype, "title", void 0),
        (0, r.Cg)([s.sH], n.prototype, "viewer_count", void 0),
        (0, r.Cg)([s.sH], n.prototype, "gamedata_subtitle", void 0),
        (0, r.Cg)([s.sH], n.prototype, "current_selection_priority", void 0);
      const i = "primary",
        l = "featured",
        c = "default_featured";
      var o;
      function d(e) {
        switch (e) {
          case i:
            return o.k_ePrimary;
          case l:
            return o.k_eFeatured;
          case c:
            return o.k_eDefaultFeatured;
          default:
            return o.k_eGeneral;
        }
      }
      function u(e) {
        const t = e;
        return (
          !!(
            t &&
            "number" == typeof t.success &&
            t.filtered &&
            Array.isArray(t.filtered) &&
            t.broadcast_chat_visibility
          ) &&
          (0 == t.filtered.length || "string" == typeof t.filtered[0].accountid)
        );
      }
      !(function (e) {
        (e[(e.k_ePrimary = 3)] = "k_ePrimary"),
          (e[(e.k_eFeatured = 2)] = "k_eFeatured"),
          (e[(e.k_eDefaultFeatured = 1)] = "k_eDefaultFeatured"),
          (e[(e.k_eGeneral = 0)] = "k_eGeneral");
      })(o || (o = {}));
    },
    51622: (e, t, a) => {
      "use strict";
      a.d(t, { Dm: () => h, SC: () => f });
      var r = a(7850),
        s = a(78686),
        n = a(39777),
        i = a(64238),
        l = a.n(i),
        c = a(90626),
        o = a(34713),
        d = a.n(o),
        u = a(72737),
        p = a(34104),
        m = a(81393),
        C = a(53305);
      function h(e) {
        const { data: t } = (0, n.qI)(e.id);
        return (0, r.jsx)(g, { platforms: t });
      }
      function f(e) {
        const { id: t, ...a } = e,
          { data: s } = (0, n.qI)(t);
        return (0, r.jsx)(x, { ...a, platforms: s });
      }
      const g = c.memo(function (e) {
          const { platforms: t } = e;
          if (!t) return null;
          const { windows: a, mac: s, steamos_linux: n, vr_support: i } = t;
          return (0, r.jsxs)("span", {
            className: d().SupportedPlatforms,
            children: [
              a && (0, r.jsx)(_, {}),
              s && (0, r.jsx)(v, {}),
              n && (0, r.jsx)(w, {}),
              i?.vrhmd && (0, r.jsx)(j, {}),
            ],
          });
        }),
        x = c.memo(function (e) {
          const { platforms: t, eHWCompat: a, size: s = "small" } = e;
          let n;
          if (a == C.iA)
            return (
              (0, m.wT)(
                !1,
                "SteamHWCompatIndicator called for k_ESteamHWCompatibility_None",
              ),
              null
            );
          if (a == C.c9) {
            const e = t?.steam_os_compat_category;
            if (void 0 === e) return null;
            switch (e) {
              case u.Hi:
                n = V;
                break;
              case u.u_:
                n = Z;
                break;
              case u.xs:
                n = D;
                break;
              default:
                return (0, m.z_)(e, `Unhandled steam os category: ${e}`), null;
            }
          } else {
            let e;
            if (
              ((e =
                a == C.JR
                  ? t?.steam_machine_compat_category
                  : a == C.bY
                    ? t?.steam_frame_compat_category
                    : t?.steam_deck_compat_category),
              void 0 === e)
            )
              return null;
            switch (e) {
              case p.I2:
                n = N;
                break;
              case p.sd:
                n = M;
                break;
              case p.V8:
                n = Z;
                break;
              case p.YX:
                n = D;
                break;
              default:
                return (
                  (0, m.z_)(e, `Unhandled deck compat category: ${e}`), null
                );
            }
          }
          return (0, r.jsxs)("span", {
            className: l()(
              d().DeckCompat,
              "small" == s && d().Small,
              "fill" == s && d().Fill,
            ),
            children: [
              Boolean(a == C.ZJ) && (0, r.jsx)(I, {}),
              Boolean(a == C.JR) && (0, r.jsx)(A, {}),
              Boolean(a == C.bY) && (0, r.jsx)(k, {}),
              (0, r.jsx)(n, {}),
            ],
          });
        });
      function _() {
        return (0, r.jsx)("span", {
          className: l()(d().PlatformIndicator, d().Windows),
          title: s.Z.Localize("#Platform_Windows"),
          children: (0, r.jsx)(y, {}),
        });
      }
      function v() {
        return (0, r.jsx)("span", {
          className: l()(d().PlatformIndicator, d().Mac),
          title: s.Z.Localize("#Platform_Mac"),
          children: (0, r.jsx)(b, {}),
        });
      }
      function w() {
        return (0, r.jsx)("span", {
          className: l()(d().PlatformIndicator, d().SteamOS),
          title: s.Z.Localize("#Platform_Linux"),
          children: (0, r.jsx)(S, {}),
        });
      }
      function j() {
        return (0, r.jsx)("span", {
          className: d().PlatformIndicator,
          title: s.Z.Localize("#Platform_VR"),
          children: (0, r.jsx)(L, {}),
        });
      }
      function y() {
        return (0, r.jsxs)("svg", {
          version: "1.1",
          xmlns: "http://www.w3.org/2000/svg",
          x: "0px",
          y: "0px",
          className: "SVGIcon_Button SVGIcon_WindowsLogo",
          width: "100%",
          height: "100%",
          viewBox: "0 0 128 128",
          enableBackground: "new 0 0 128 128",
          children: [
            (0, r.jsx)("rect", {
              fill: "currentColor",
              width: "60.834",
              height: "60.835",
            }),
            (0, r.jsx)("rect", {
              x: "67.165",
              fill: "currentColor",
              width: "60.835",
              height: "60.835",
            }),
            (0, r.jsx)("rect", {
              y: "67.164",
              fill: "currentColor",
              width: "60.834",
              height: "60.836",
            }),
            (0, r.jsx)("rect", {
              x: "67.165",
              y: "67.164",
              fill: "currentColor",
              width: "60.835",
              height: "60.836",
            }),
          ],
        });
      }
      function b() {
        return (0, r.jsxs)("svg", {
          version: "1.1",
          id: "base",
          xmlns: "http://www.w3.org/2000/svg",
          x: "0px",
          y: "0px",
          width: "256px",
          height: "256px",
          viewBox: "0 0 256 256",
          children: [
            (0, r.jsx)("path", {
              d: "M138.365,26.557c16.139-21.272,38.578-21.376,38.578-21.376s3.336,19.999-12.696,39.266 c-17.12,20.572-36.58,17.206-36.58,17.206S124.012,45.473,138.365,26.557z",
            }),
            (0, r.jsx)("path", {
              d: "M129.719,75.662c8.305,0,23.713-11.413,43.771-11.413c34.527,0,48.109,24.566,48.109,24.566s-26.565,13.583-26.565,46.54 c0,37.179,33.093,49.991,33.093,49.991s-23.134,65.112-54.38,65.112c-14.353,0-25.509-9.672-40.631-9.672 c-15.41,0-30.702,10.032-40.662,10.032c-28.533,0-64.581-61.765-64.581-111.414c0-48.849,30.512-74.474,59.13-74.474 C105.61,64.933,120.047,75.662,129.719,75.662z",
            }),
          ],
        });
      }
      function S() {
        return (0, r.jsxs)("svg", {
          version: "1.1",
          id: "Layer_1",
          xmlns: "http://www.w3.org/2000/svg",
          fill: "#FFFFFF",
          x: "0px",
          y: "0px",
          viewBox: "0 0 256 256",
          children: [
            (0, r.jsx)("path", {
              fill: "currentColor",
              d: "M127.374,5.355c-64.404,0-117.167,49.661-122.18,112.77l65.712,27.171 c5.567-3.808,12.293-6.032,19.53-6.032c0.649,0,1.294,0.017,1.934,0.051l29.226-42.354c0-0.202-0.005-0.399-0.005-0.598 c0-25.496,20.74-46.241,46.237-46.241c25.498,0,46.238,20.745,46.238,46.241c0,25.494-20.74,46.242-46.238,46.242 c-0.352,0-0.698-0.011-1.047-0.021l-41.68,29.741c0.022,0.546,0.041,1.095,0.041,1.644c0,19.141-15.569,34.707-34.706,34.707 c-16.796,0-30.843-11.99-34.026-27.869l-46.993-19.43c14.55,51.464,61.831,89.189,117.957,89.189 c67.713,0,122.604-54.893,122.604-122.604C249.979,60.244,195.086,5.355,127.374,5.355",
            }),
            (0, r.jsx)("path", {
              fill: "currentColor",
              d: "M82.026,191.387l-15.061-6.22c2.67,5.56,7.285,10.208,13.418,12.767 c13.25,5.521,28.531-0.771,34.054-14.027c2.674-6.416,2.694-13.5,0.04-19.93c-2.646-6.431-7.64-11.451-14.063-14.129 c-6.371-2.647-13.196-2.552-19.198-0.291l15.561,6.437c9.776,4.073,14.396,15.299,10.324,25.071 C103.031,190.841,91.801,195.464,82.026,191.387",
            }),
            (0, r.jsx)("path", {
              fill: "currentColor",
              d: "M198.639,96.359c0-16.987-13.82-30.809-30.809-30.809c-16.987,0-30.813,13.821-30.813,30.809 c0,16.988,13.824,30.806,30.813,30.806S198.639,113.347,198.639,96.359 M144.736,96.306c0-12.783,10.363-23.142,23.145-23.142 c12.783,0,23.145,10.359,23.145,23.142c0,12.783-10.36,23.142-23.145,23.142C155.1,119.447,144.736,109.089,144.736,96.306",
            }),
          ],
        });
      }
      function L() {
        return (0, r.jsxs)("svg", {
          width: "36",
          height: "36",
          viewBox: "0 0 36 36",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: [
            (0, r.jsx)("path", {
              d: "M11.45 26.5H7.625L1 9H5.025L9.625 22.325L14.1 9H18.125L11.45 26.5Z",
              fill: "currentColor",
            }),
            (0, r.jsx)("path", {
              d: "M34.552 26.5H30.477L26.952 20.6H26.527H23.927V26.5H20.252V9H26.802C29.202 9 30.9686 9.48333 32.102 10.45C33.2353 11.4 33.802 12.7333 33.802 14.45C33.802 15.8 33.502 16.925 32.902 17.825C32.3186 18.725 31.4936 19.4083 30.427 19.875L34.552 26.5ZM23.927 12.125V17.45H26.802C27.7686 17.45 28.5186 17.2083 29.052 16.725C29.602 16.225 29.877 15.5417 29.877 14.675C29.877 13.825 29.6103 13.1917 29.077 12.775C28.5603 12.3417 27.727 12.125 26.577 12.125H23.927Z",
              fill: "currentColor",
            }),
          ],
        });
      }
      function I() {
        return (0, r.jsx)("span", {
          title: s.Z.Localize(
            "#SteamDeckVerified_Store_CompatSectionHeader_Desktop",
          ),
          className: l()(d().SteamDeckCompatLogo),
          children: (0, r.jsx)("svg", {
            viewBox: "0 0 20 20",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: (0, r.jsx)("path", {
              opacity: "0.84",
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M7.77715 4.30197C10.9241 4.30197 13.4752 6.85305 13.4752 9.99997C13.4752 13.1469 10.9241 15.698 7.77715 15.698V18.8889C12.6864 18.8889 16.666 14.9092 16.666 9.99997C16.666 5.09078 12.6864 1.11108 7.77715 1.11108V4.30197ZM7.77756 13.8889C9.92533 13.8889 11.6664 12.1477 11.6664 9.99997C11.6664 7.8522 9.92533 6.11108 7.77756 6.11108C5.62979 6.11108 3.88867 7.8522 3.88867 9.99997C3.88867 12.1477 5.62979 13.8889 7.77756 13.8889Z",
              fill: "white",
            }),
          }),
        });
      }
      function A() {
        return (0, r.jsx)("span", {
          title: s.Z.Localize(
            "#SteamMachineCompatibility_Store_CompatSectionHeader_GamepadUI",
          ),
          className: l()(d().SteamDeckCompatLogo),
          children: (0, r.jsxs)("svg", {
            viewBox: "0 0 20 20",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: [
              (0, r.jsx)("path", {
                opacity: "0.84",
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M12.9072 9.9993C12.9072 8.39355 11.6052 7.0918 9.99936 7.0918C8.39358 7.09184 7.09186 8.39358 7.0918 9.9993C7.0918 11.555 8.31347 12.8254 9.84978 12.9034L9.99936 12.9072C11.5551 12.9072 12.8256 11.6852 12.9034 10.1489L12.9072 9.9993Z",
                fill: "white",
              }),
              (0, r.jsx)("path", {
                opacity: "0.84",
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M16.7002 3C16.8658 3.00006 16.9999 3.13429 17 3.2998V16.7002C16.9999 16.8658 16.8658 16.9999 16.7002 17H3.2998C3.13431 16.9999 3.0001 16.8657 3 16.7002V3.2998C3.00014 3.13435 3.13435 3.00014 3.2998 3H16.7002ZM10 5.51953C7.52551 5.51953 5.51953 7.52551 5.51953 10C5.51953 12.4745 7.52551 14.4805 10 14.4805C12.4745 14.4805 14.4805 12.4745 14.4805 10C14.4805 7.52551 12.4745 5.51953 10 5.51953Z",
                fill: "white",
              }),
            ],
          }),
        });
      }
      function k() {
        return (0, r.jsx)("span", {
          title: s.Z.Localize(
            "#SteamFrameCompatibility_Store_CompatSectionHeader_GamepadUI",
          ),
          className: l()(d().SteamDeckCompatLogo),
          children: (0, r.jsxs)("svg", {
            viewBox: "0 0 20 20",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: [
              (0, r.jsx)("path", {
                opacity: "0.84",
                d: "M16.9997 7.85352C11.9484 7.85352 7.85352 11.9484 7.85352 16.9997H16.9997V7.85352Z",
                fill: "white",
              }),
              (0, r.jsx)("path", {
                opacity: "0.84",
                "fill-rule": "evenodd",
                "clip-rule": "evenodd",
                d: "M3 3.30201C3 3.13522 3.13522 3 3.30201 3H17V6.02012H6.02012V17H3V3.30201Z",
                fill: "white",
              }),
            ],
          }),
        });
      }
      function N() {
        return (0, r.jsx)("span", {
          title: s.Z.Localize("#SteamDeckVerified_Category_Verified"),
          className: d().SteamDeckCompatIcon,
          children: (0, r.jsx)("svg", {
            className: l()(d().SteamDeckCompatVerified),
            viewBox: "0 0 20 20",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: (0, r.jsx)("path", {
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M10 19C14.9706 19 19 14.9706 19 10C19 5.02944 14.9706 1 10 1C5.02944 1 1 5.02944 1 10C1 14.9706 5.02944 19 10 19ZM8.33342 11.9222L14.4945 5.76667L16.4556 7.72779L8.33342 15.8556L3.26675 10.7833L5.22786 8.82223L8.33342 11.9222Z",
              fill: "currentColor",
            }),
          }),
        });
      }
      function M() {
        return (0, r.jsx)("span", {
          title: s.Z.Localize("#SteamDeckVerified_Category_Playable"),
          className: d().SteamDeckCompatIcon,
          children: (0, r.jsx)("svg", {
            className: l()(d().SteamDeckCompatPlayable),
            viewBox: "0 0 20 20",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: (0, r.jsx)("path", {
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M10 19C14.9706 19 19 14.9706 19 10C19 5.02944 14.9706 1 10 1C5.02944 1 1 5.02944 1 10C1 14.9706 5.02944 19 10 19ZM8.61079 9.44444V15H11.3886V9.44444H8.61079ZM9.07372 8.05245C9.34781 8.23558 9.67004 8.33333 9.99967 8.33333C10.4417 8.33333 10.8656 8.15774 11.1782 7.84518C11.4907 7.53262 11.6663 7.10869 11.6663 6.66667C11.6663 6.33703 11.5686 6.0148 11.3855 5.74072C11.2023 5.46663 10.942 5.25301 10.6375 5.12687C10.3329 5.00072 9.99783 4.96771 9.67452 5.03202C9.35122 5.09633 9.05425 5.25507 8.82116 5.48815C8.58808 5.72124 8.42934 6.01821 8.36503 6.34152C8.30072 6.66482 8.33373 6.99993 8.45988 7.30447C8.58602 7.60902 8.79964 7.86931 9.07372 8.05245Z",
              fill: "currentColor",
            }),
          }),
        });
      }
      function Z() {
        return (0, r.jsx)("span", {
          title: s.Z.Localize("#SteamDeckVerified_Category_Unsupported"),
          className: d().SteamDeckCompatIcon,
          children: (0, r.jsx)("svg", {
            className: l()(d().SteamDeckCompatUnsupported),
            viewBox: "0 0 20 20",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: (0, r.jsx)("path", {
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M14.1931 15.6064C13.0246 16.4816 11.5733 17 10.001 17C6.13498 17 3.00098 13.866 3.00098 10C3.00098 8.42766 3.51938 6.97641 4.39459 5.80783L14.1931 15.6064ZM15.6074 14.1922C16.4826 13.0236 17.001 11.5723 17.001 10C17.001 6.13401 13.867 3 10.001 3C8.42864 3 6.97739 3.5184 5.80881 4.39362L15.6074 14.1922ZM19.001 10C19.001 14.9706 14.9715 19 10.001 19C5.03041 19 1.00098 14.9706 1.00098 10C1.00098 5.02944 5.03041 1 10.001 1C14.9715 1 19.001 5.02944 19.001 10Z",
              fill: "currentColor",
            }),
          }),
        });
      }
      function D() {
        return (0, r.jsx)("span", {
          title: s.Z.Localize("#SteamDeckVerified_Category_Unknown"),
          className: d().SteamDeckCompatIcon,
          children: (0, r.jsx)("svg", {
            className: l()(d().SteamDeckCompatUnknown),
            viewBox: "0 0 20 20",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: (0, r.jsx)("path", {
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M17.3972 11.2461L18.8767 11.4932C18.9578 11.0075 19 10.5087 19 10C19 9.49131 18.9578 8.99248 18.8767 8.50682L17.3972 8.75386C17.4647 9.15821 17.5 9.57442 17.5 10C17.5 10.4256 17.4647 10.8418 17.3972 11.2461ZM17.0295 7.3783L18.4348 6.8539C18.0814 5.90668 17.5729 5.03501 16.9403 4.26971L15.7842 5.22538C16.3119 5.86387 16.7354 6.59021 17.0295 7.3783ZM14.7746 4.21582L15.7303 3.05967C14.965 2.42708 14.0933 1.91864 13.1461 1.56519L12.6217 2.97054C13.4098 3.26461 14.1361 3.68805 14.7746 4.21582ZM11.2461 2.60281L11.4932 1.1233C11.0075 1.0422 10.5087 1 10 1C9.49131 1 8.99248 1.0422 8.50682 1.1233L8.75386 2.60281C9.15821 2.5353 9.57442 2.5 10 2.5C10.4256 2.5 10.8418 2.5353 11.2461 2.60281ZM7.3783 2.97054L6.8539 1.56519C5.90668 1.91864 5.03501 2.42708 4.26971 3.05967L5.22538 4.21582C5.86387 3.68805 6.59021 3.26461 7.3783 2.97054ZM4.21582 5.22538L3.05967 4.26971C2.42708 5.03501 1.91864 5.90668 1.56519 6.8539L2.97054 7.3783C3.26461 6.59022 3.68805 5.86387 4.21582 5.22538ZM1 10C1 9.49131 1.0422 8.99248 1.1233 8.50682L2.60281 8.75386C2.5353 9.15821 2.5 9.57442 2.5 10C2.5 10.4256 2.5353 10.8418 2.60281 11.2461L1.1233 11.4932C1.0422 11.0075 1 10.5087 1 10ZM2.97054 12.6217L1.56519 13.1461C1.91864 14.0933 2.42708 14.965 3.05967 15.7303L4.21582 14.7746C3.68805 14.1361 3.26461 13.4098 2.97054 12.6217ZM5.22538 15.7842L4.26971 16.9403C5.03501 17.5729 5.90668 18.0814 6.8539 18.4348L7.3783 17.0295C6.59022 16.7354 5.86387 16.3119 5.22538 15.7842ZM8.75386 17.3972L8.50682 18.8767C8.99248 18.9578 9.49131 19 10 19C10.5087 19 11.0075 18.9578 11.4932 18.8767L11.2461 17.3972C10.8418 17.4647 10.4256 17.5 10 17.5C9.57442 17.5 9.15821 17.4647 8.75386 17.3972ZM12.6217 17.0295L13.1461 18.4348C14.0933 18.0814 14.965 17.5729 15.7303 16.9403L14.7746 15.7842C14.1361 16.3119 13.4098 16.7354 12.6217 17.0295ZM15.7842 14.7746L16.9403 15.7303C17.5729 14.965 18.0814 14.0933 18.4348 13.1461L17.0295 12.6217C16.7354 13.4098 16.3119 14.1361 15.7842 14.7746ZM9.2425 14.7702C9.46679 14.92 9.73048 15 10.0002 15C10.362 15 10.7089 14.8563 10.9646 14.6006C11.2204 14.3448 11.3641 13.998 11.3641 13.6363C11.3641 13.3666 11.2841 13.1029 11.1343 12.8787C10.9844 12.6544 10.7714 12.4796 10.5222 12.3764C10.2729 12.2732 9.99872 12.2462 9.73415 12.2988C9.46958 12.3514 9.22656 12.4813 9.03582 12.672C8.84508 12.8628 8.71518 13.1057 8.66255 13.3703C8.60993 13.6348 8.63694 13.909 8.74016 14.1582C8.84339 14.4074 9.01821 14.6203 9.2425 14.7702ZM11.0981 10.3552C11.1722 10.2348 11.2765 10.1358 11.4005 10.068C11.8099 9.82315 12.1479 9.47526 12.3808 9.05903C12.6137 8.64279 12.7333 8.17276 12.7278 7.69584C12.7223 7.21892 12.5918 6.75179 12.3493 6.34105C12.1069 5.93031 11.7609 5.59033 11.346 5.35502C10.9311 5.11972 10.4617 4.99732 9.98466 5.00004C9.50764 5.00277 9.03969 5.13052 8.62748 5.37054C8.21527 5.61057 7.87321 5.95448 7.63545 6.36796C7.39769 6.78144 7.27253 7.25004 7.27246 7.72699H9.23191C9.23191 7.6261 9.25178 7.52621 9.29039 7.43301C9.32901 7.3398 9.3856 7.25511 9.45694 7.18378C9.52829 7.11244 9.61299 7.05586 9.70621 7.01725C9.79942 6.97865 9.89933 6.95878 10.0002 6.95878C10.1659 6.96387 10.3255 7.02207 10.4556 7.12479C10.5856 7.22751 10.6792 7.3693 10.7225 7.52925C10.7658 7.6892 10.7565 7.85883 10.6961 8.01311C10.6356 8.16739 10.5271 8.29816 10.3867 8.3861C9.97322 8.62846 9.63003 8.97429 9.39088 9.38955C9.15173 9.80482 9.02487 10.2752 9.02278 10.7544V11.3635H10.9777V10.7544C10.9825 10.6131 11.024 10.4755 11.0981 10.3552Z",
              fill: "currentColor",
            }),
          }),
        });
      }
      function V() {
        return (0, r.jsx)("span", {
          title: s.Z.Localize("#SteamOSCompatibility_Category_Compatible"),
          className: d().SteamDeckCompatIcon,
          children: (0, r.jsx)("svg", {
            className: l()(d().SteamOSCompatCompatible),
            viewBox: "0 0 20 20",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: (0, r.jsx)("path", {
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M10 19C14.9706 19 19 14.9706 19 10C19 5.02944 14.9706 1 10 1C5.02944 1 1 5.02944 1 10C1 14.9706 5.02944 19 10 19ZM8.33342 11.9222L14.4945 5.76667L16.4556 7.72779L8.33342 15.8556L3.26675 10.7833L5.22786 8.82223L8.33342 11.9222Z",
              fill: "currentColor",
            }),
          }),
        });
      }
    },
    94011: (e, t, a) => {
      "use strict";
      a.d(t, { K: () => i });
      var r = a(7850),
        s = a(61859),
        n = a(35050);
      function i() {
        return (0, r.jsx)("div", {
          className: n.bordered_live_stream_icon,
          children: (0, s.we)("#home_page_live_broadcast"),
        });
      }
    },
    72860: (e, t, a) => {
      "use strict";
      a.d(t, { S: () => d });
      var r = a(78686),
        s = a(71420),
        n = a(55963),
        i = a(70300),
        l = a(81393),
        c = a(56011),
        o = a(61336);
      function d(e, t, a, d, u, p) {
        if (!a) return;
        if (!(0, i.nz)(e.item_type))
          return void (0, l.wT)(
            !1,
            "StoreItemWidgetSalePageAction: unexpected type: " + e.item_type,
          );
        const m = (0, n.wJ)(`${(0, s._)(e, d)}${u ? `?${u}` : ""}`, t);
        return {
          onClick: (e) => {
            let t = (0, c.uX)(e) || window;
            p
              ? p(e)
              : m.startsWith("steam://") || (t.location.href = (0, o.NT)(m));
          },
          onOKActionDescription: r.Z.Localize("#Sale_Gamepad_Action_Select"),
        };
      }
    },
    70300: (e, t, a) => {
      "use strict";
      a.d(t, { nz: () => i, oj: () => l });
      var r = a(7850),
        s = a(95578),
        n = a(84518);
      function i(e) {
        return e == s.c6.xO
          ? "bundle"
          : e == s.c6.RD
            ? "sub"
            : (s.c6.qI, "app");
      }
      const l = (e) => {
        const { appid: t } = e,
          a = (0, r.jsx)("div", {
            className: "ImpressionTrackedElement",
            children: e.children,
          });
        return t ? (0, r.jsx)(n.A, { appID: t, children: a }) : a;
      };
    },
    1078: (e, t, a) => {
      "use strict";
      a.d(t, { XC: () => p, _G: () => C });
      var r = a(7850),
        s = a(90626),
        n = a(12155),
        i = a(52038),
        l = a(44691),
        c = a(74568),
        o = a(39449),
        d = a.n(o),
        u = a(61859);
      function p() {
        const [e, t] = s.useState(void 0),
          a = s.useCallback(() => t(void 0), []),
          n = (0, r.jsx)(c.EN, {
            active: void 0 !== e,
            children: (0, r.jsx)(m, { closeModal: a, rgImageURL: e }),
          });
        return [t, n];
      }
      function m(e) {
        const { closeModal: t, rgImageURL: a } = e,
          [n, i] = s.useState(0),
          l = a?.length ?? 0,
          o = s.useCallback(() => {
            i(0 == n ? l - 1 : n - 1);
          }, [n, l]),
          p = s.useCallback(() => {
            i(a && n + 1 >= l ? 0 : n + 1);
          }, [n, a, l]);
        return (0, r.jsxs)(c.eV, {
          title: (0, u.we)("#SaleTech_Screenshot_Viewer"),
          bAllowFullSize: !0,
          bOKDisabled: !0,
          closeModal: t,
          bHideCloseIcon: !0,
          modalClassName: d().PopupScreenshotModal,
          children: [
            (0, r.jsx)(C, {
              index: n,
              numElements: a?.length || 0,
              fnForward: p,
              fnBackwards: o,
              fnClose: t,
              bCircular: !0,
            }),
            (0, r.jsx)("div", {
              className: d().PopupScreenshotContainer,
              children: (0, r.jsx)("img", {
                className: d().PopupScreenshot,
                src: a?.[n],
              }),
            }),
          ],
        });
      }
      function C(e) {
        const {
          index: t,
          numElements: a,
          fnForward: s,
          fnBackwards: c,
          fnClose: o,
          bCircular: u,
        } = e;
        (0, l.E)("ArrowLeft", () => c?.(), !0, !0),
          (0, l.E)("Left", () => c?.(), !0, !0),
          (0, l.E)("ArrowRight", () => s?.(), !0, !0),
          (0, l.E)("Right", () => s?.(), !0, !0),
          (0, l.E)("Escape", () => o && o(), !0, !0),
          (0, l.E)("Esc", () => o && o(), !0, !0);
        let p = a > 1;
        return (0, r.jsxs)("div", {
          className: d().ButtonCtn,
          children: [
            p &&
              (0, r.jsxs)(r.Fragment, {
                children: [
                  (0, r.jsx)("div", {
                    className: (0, i.A)(
                      d().ButtonIcon,
                      0 !== t || u ? null : d().Disabled,
                    ),
                    onClick: c,
                    children: (0, r.jsx)(n.V5W, { angle: 270 }),
                  }),
                  (0, r.jsx)("div", {
                    className: (0, i.A)(
                      d().ButtonIcon,
                      t !== a - 1 || u ? null : d().Disabled,
                    ),
                    onClick: s,
                    children: (0, r.jsx)(n.V5W, { angle: 90 }),
                  }),
                ],
              }),
            (0, r.jsx)("div", {
              className: d().ButtonIcon,
              onClick: o,
              children: (0, r.jsx)(n.X, {}),
            }),
          ],
        });
      }
    },
    54492: (e, t, a) => {
      "use strict";
      a.d(t, { J: () => d });
      var r = a(7850),
        s = a(93341),
        n = a(52038),
        i = a(78327),
        l = a(58855),
        c = a(51622),
        o = a(53305);
      function d(e) {
        const { bAllowOutsideOfDeck: t } = e;
        return (0, i.Qn)() || t ? (0, r.jsx)(u, { ...e }) : null;
      }
      function u(e) {
        const { className: t, id: a } = e,
          [i, d] = (0, s.FD)();
        let u,
          p = d;
        return (
          d == o.iA && (p = o.ZJ),
          a
            ? (d == o.bY && (u = l.CompatIconFrame),
              (0, r.jsx)("div", {
                className: (0, n.A)(l.CompatIcon, u, t),
                children: (0, r.jsx)(c.SC, { id: a, eHWCompat: p }),
              }))
            : null
        );
      }
    },
    26296: (e, t, a) => {
      "use strict";
      a.d(t, { i: () => o, o: () => c });
      var r = a(7850),
        s = a(90626),
        n = a(61859),
        i = a(67523),
        l = a(41951);
      function c(e) {
        const {
            className: t,
            srcs: a,
            lazyLoad: n,
            width: i,
            height: l,
            alt: c,
            crossOrigin: o,
          } = e,
          [d, u] = s.useState(a.length),
          [p, m] = s.useState(0);
        s.useEffect(() => {
          d != a.length && (u(a.length), m(0));
        }, [d, a.length]);
        const C = s.useCallback(() => {
          e.onImageError && e.onImageError(e.srcs[p]),
            p + 1 < e.srcs.length && m(p + 1);
        }, [p, e]);
        return 0 == a.length
          ? null
          : (0, r.jsx)("img", {
              className: t,
              src: a[p],
              crossOrigin: o,
              onError: C,
              loading: n ? "lazy" : void 0,
              width: i,
              height: l,
              alt: c,
            });
      }
      function o(e) {
        const [t, a] = s.useState(!1),
          {
            className: c,
            src: o,
            lazyLoad: d,
            width: u,
            height: p,
            alt: m,
            crossOrigin: C,
          } = e;
        return t
          ? (0, r.jsxs)("div", {
              className: i.ErrorDiv,
              children: [
                (0, r.jsx)("p", {
                  children: (0, n.we)("#Image_ErrorTitle", o),
                }),
                (0, r.jsx)("ul", {
                  children: (0, r.jsx)("li", {
                    children: (0, n.we)("#Image_Error_msg1"),
                  }),
                }),
                (0, r.jsx)("p", {
                  children: (0, n.we)("#Image_Error_suggestion"),
                }),
              ],
            })
          : (0, r.jsx)(l.o, {
              className: c,
              src: o,
              onError: () => a(!0),
              crossOrigin: C,
              loading: d ? "lazy" : void 0,
              width: u,
              height: p,
              alt: m,
            });
      }
    },
    41951: (e, t, a) => {
      "use strict";
      a.d(t, { o: () => m });
      var r = a(7850),
        s = a(90626),
        n = a(12155),
        i = a(52038),
        l = a(1078),
        c = a(10224),
        o = a(21038);
      const d = 1.3,
        u = 3,
        p = 256;
      function m(e) {
        const [t, a] = (0, s.useState)(!1),
          [m, C] = (0, s.useState)({
            naturalWidth: 0,
            naturalHeight: 0,
            displayWidth: 0,
            displayHeight: 0,
          }),
          h = (0, s.useRef)(null),
          [f, g] = (0, l.XC)();
        return (
          (0, s.useEffect)(() => {
            if (
              m.naturalWidth > m.displayWidth * d &&
              m.naturalHeight > m.displayHeight * d &&
              m.naturalWidth > p
            ) {
              m.naturalWidth / m.naturalHeight < u && a(!0);
            }
          }, [m]),
          t
            ? (0, r.jsxs)("span", {
                className: o.PreviewCtn,
                children: [
                  g,
                  (0, r.jsx)("span", {
                    className: o.SVG,
                    children: (0, r.jsx)(n.YNO, {}),
                  }),
                  (0, r.jsx)("img", {
                    ...e,
                    className: (0, i.A)({
                      ...(e.className && { [e.className]: !0 }),
                    }),
                    onClick: (t) => {
                      e.src && f([e.src]);
                    },
                  }),
                ],
              })
            : (0, r.jsx)("img", {
                ...e,
                ref: h,
                onLoad: (e) => {
                  if (!e.currentTarget.closest("a") && !(0, c.c5)()) {
                    const {
                      naturalWidth: t,
                      naturalHeight: a,
                      width: r,
                      height: s,
                    } = e.currentTarget;
                    C({
                      naturalWidth: t,
                      naturalHeight: a,
                      displayWidth: r,
                      displayHeight: s,
                    });
                  }
                },
              })
        );
      }
    },
  },
]);
