/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkstore = self.webpackChunkstore || []).push([
  [7660],
  {
    83164: (e) => {
      e.exports = { CornerSash: "_1tKrXofY3mdVjHya13I1Ks" };
    },
    35050: (e) => {
      e.exports = { bordered_live_stream_icon: "_2R1rYdwKuMFLsEb4WvJYdD" };
    },
    58855: (e) => {
      e.exports = { CompatIcon: "_3cEK5JKL6FSqY5FgD_4hFA" };
    },
    78588: (e, t, a) => {
      "use strict";
      a.d(t, { a: () => p });
      var r = a(74812),
        n = a(90626),
        s = a(8893),
        i = a(90717),
        c = a(26296),
        l = a(52038),
        o = a(61859),
        u = a(22797),
        d = a(18654),
        m = a.n(d);
      function p(e) {
        const { id: t, imageType: a, bPreferAssetWithoutOverride: d } = e,
          { storeItemAsset: p, storeItemDefaultInfo: _ } = (0, r.q)(t, a, d);
        if (void 0 === p || !_)
          return n.createElement(u.t, {
            size: "small",
            position: "center",
            string: (0, o.we)("#Loading"),
          });
        if (null == p) return null;
        if ("library" === a || "vertical" == a)
          return n.createElement(s.G, {
            id: t,
            bPreferAssetWithoutOverride: d,
          });
        let f,
          v,
          b = (0, i.N)(p, "header" === a),
          A = "";
        if ("main" === a)
          (f = m().mainCapsuleImgWidth),
            (v = m().mainCapsuleImgHeight),
            (A = m().MainCapsuleImageContainer);
        else
          (f = m().headerCapsuleImgWidth),
            (v = m().headerCapsuleImgHeight),
            (A = m().HeaderCapsuleImageContainer);
        return n.createElement(
          "div",
          { className: (0, l.A)(A, "CapsuleImageCtn") },
          n.createElement(c.o, {
            lazyLoad: !0,
            srcs: b,
            className: (0, l.A)(m().CapsuleImage),
            width: f,
            height: v,
            alt: _.name,
          }),
        );
      }
    },
    90717: (e, t, a) => {
      "use strict";
      a.d(t, { M: () => s, N: () => n });
      var r = a(42834);
      function n(e, t) {
        let a = [];
        return (
          e &&
            (function (e, t, a) {
              a
                ? e.push((0, r.b0)(t, "header"), (0, r.b0)(t, "main_capsule"))
                : e.push((0, r.b0)(t, "main_capsule"), (0, r.b0)(t, "header"));
            })(a, e, t),
          a.filter((e) => !!e)
        );
      }
      function s(e, t) {
        return {
          strStoreVerticalURL: (0, r.b0)(e, "hero_capsule"),
          strLibraryVerticalURL: (0, r.b0)(e, "library_capsule"),
        };
      }
    },
    8893: (e, t, a) => {
      "use strict";
      a.d(t, { G: () => p });
      var r = a(74812),
        n = a(90626),
        s = a(18654),
        i = a.n(s),
        c = a(26296),
        l = a(52038),
        o = a(78327),
        u = a(90717),
        d = a(83164),
        m = a.n(d);
      function p(e) {
        const { id: t, bPreferLibrary: a, bPreferAssetWithoutOverride: s } = e,
          { storeItemDefaultInfo: d, storeItemAsset: p } = (0, r.q)(
            t,
            "vertical",
            s,
          ),
          [_, f] = n.useState(0);
        if (!d || !p)
          return n.createElement("div", {
            className: i().HeroCapsuleImageContainer,
          });
        const { strStoreVerticalURL: v, strLibraryVerticalURL: b } = (0, u.M)(
          p,
          d,
        );
        if (v && (!a || !b))
          return n.createElement(
            "div",
            {
              className: (0, l.A)(
                i().HeroCapsuleImageContainer,
                "HeroCapsuleImageContainer",
              ),
            },
            n.createElement("img", {
              src: v,
              className: i().CapsuleImage,
              alt: d.name,
            }),
            Boolean(4 == d.type) &&
              n.createElement("img", {
                className: m().CornerSash,
                src: `${o.TS.MEDIA_CDN_URL}appmgmt/artassets/capsule_dlc.png`,
                alt: "DLC",
              }),
          );
        if (b)
          return n.createElement(
            "div",
            {
              className: (0, l.A)(
                i().LibraryFallbackAssetImageContainer,
                i().VerticalCapsule,
                a ? i().ForceLibrarySizing : "",
              ),
            },
            n.createElement("div", {
              className: i().FallbackBackground,
              style: { backgroundImage: `url(${b})` },
            }),
            n.createElement("img", {
              src: b,
              className: i().CapsuleImage,
              alt: d.name,
            }),
          );
        const A = (0, u.N)(p, !0),
          g = A.length - 1,
          h = (e) => {
            const t = A.indexOf(e);
            t >= g && t < A.length - 1 && f(t + 1);
          };
        if (_ < A.length) {
          const e = A[_];
          return n.createElement(
            "div",
            { className: i().LibraryFallbackAssetImageContainer },
            n.createElement("div", {
              className: i().FallbackBackground,
              style: { backgroundImage: `url(${e})` },
            }),
            n.createElement(c.o, {
              lazyLoad: !0,
              srcs: A,
              className: i().CapsuleImage,
              alt: d.name,
              onImageError: h,
            }),
          );
        }
        return n.createElement("div", {
          className: i().HeroCapsuleImageContainer,
        });
      }
    },
    20433: (e, t, a) => {
      "use strict";
      a.d(t, { j: () => m, u: () => p });
      var r = a(90626),
        n = a(45699),
        s = a(55963),
        i = a(60014),
        c = a(49411),
        l = a(61336),
        o = a(52541),
        u = a(8527);
      a(78327);
      function d(e) {
        if (e) {
          if ("appid" in e) return "app";
          if ("bundleid" in e) return "bundle";
          if ("packageid" in e) return "sub";
        }
      }
      function m(e) {
        const {
            id: t,
            hoverClassName: a,
            fnGetIDOverride: n,
            fnHoverState: s,
            children: i,
          } = e,
          c = r.useRef(null),
          l = r.useCallback(
            (e) => {
              const a = d(t);
              a &&
                (s && s(!0),
                window.GameHover &&
                  window.GameHover(n ? n() : c.current, e, "global_hover", {
                    type: a,
                    id: (0, o.G$)(t).id,
                    v6: 1,
                  }));
            },
            [s, n, t],
          ),
          u = r.useCallback(
            (e) => {
              d(t) &&
                (s && e.relatedTarget && s(!1),
                window.HideGameHover &&
                  window.HideGameHover(n ? n() : c.current, e, "global_hover"));
            },
            [t, s, n],
          );
        return r.createElement(
          "div",
          {
            ref: c,
            className: a,
            onMouseEnter: l,
            onMouseLeave: u,
            onFocus: l,
            onBlur: u,
          },
          i,
        );
      }
      function p(e) {
        const {
            id: t,
            strExtraParams: a,
            fnOnClickOverride: p,
            strOverrideURL: _,
          } = e,
          f = (0, i.n9)(),
          v = (0, c.w)(),
          b = (0, l.NT)(
            _ ||
              (t && "creatorid" in t
                ? (0, s.It)(
                    `${u.TS.STORE_BASE_URL}curator/${((0, o.G$))(t).id}${a ? `?${a}` : ""}`,
                    f,
                    v,
                  )
                : (0, s.It)(
                    `${u.TS.STORE_BASE_URL}${d(t)}/${((0, o.G$))(t).id}${a ? `?${a}` : ""}`,
                    f,
                    v,
                  )),
          );
        return r.createElement(
          m,
          { ...e },
          r.createElement(
            n.Ii,
            {
              className: e.className,
              href: p ? void 0 : b,
              target: u.TS.IN_CLIENT || p ? void 0 : "_blank",
              rel: "noopener noreferrer",
              onClick: p,
            },
            e.children,
          ),
        );
      }
    },
    74812: (e, t, a) => {
      "use strict";
      a.d(t, { q: () => s });
      var r = a(81393),
        n = a(39777);
      function s(e, t, a = !1) {
        const { data: s } = (0, n.J$)(e),
          { data: i } = (0, n.lv)(e, a);
        let c;
        s &&
          1 == s.included_appids?.length &&
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
          })(i, t) &&
          s.item_type &&
          [1, 2].includes(s.item_type) &&
          (c = { appid: s.included_appids[0] });
        const { data: l } = (0, n.J$)(c),
          { data: o } = (0, n.lv)(c, a),
          u = l?.visible ? l : s;
        return { storeItemAsset: l?.visible ? o : i, storeItemDefaultInfo: u };
      }
    },
    75515: (e, t, a) => {
      "use strict";
      a.d(t, { PH: () => u, TT: () => s, h7: () => d, mY: () => o });
      var r = a(34629),
        n = a(14947);
      class s {
        constructor() {
          (0, n.Gn)(this);
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
      (0, r.Cg)([n.sH], s.prototype, "title", void 0),
        (0, r.Cg)([n.sH], s.prototype, "viewer_count", void 0),
        (0, r.Cg)([n.sH], s.prototype, "gamedata_subtitle", void 0),
        (0, r.Cg)([n.sH], s.prototype, "current_selection_priority", void 0);
      const i = "primary",
        c = "featured",
        l = "default_featured";
      var o;
      function u(e) {
        switch (e) {
          case i:
            return o.k_ePrimary;
          case c:
            return o.k_eFeatured;
          case l:
            return o.k_eDefaultFeatured;
          default:
            return o.k_eGeneral;
        }
      }
      function d(e) {
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
    71420: (e, t, a) => {
      "use strict";
      a.d(t, { _: () => s });
      var r = a(8527),
        n = a(62349);
      function s(e, t = !1) {
        if (e)
          return t && (0, n.J)(e)
            ? `${r.TS.STORE_BASE_URL}app/${((0, n.S))(e)[0]}`
            : `${r.TS.STORE_BASE_URL}${e.store_url_path}`;
      }
    },
    94011: (e, t, a) => {
      "use strict";
      a.d(t, { K: () => i });
      var r = a(90626),
        n = a(61859),
        s = a(35050);
      function i() {
        return r.createElement(
          "div",
          { className: s.bordered_live_stream_icon },
          (0, n.we)("#home_page_live_broadcast"),
        );
      }
    },
    88961: (e, t, a) => {
      "use strict";
      a.d(t, { V: () => y });
      var r = a(8527),
        n = a(20194),
        s = a(75233),
        i = a(24484),
        c = a(75515);
      var l = a(7338),
        o = a(39777),
        u = (a(35380), a(90626));
      function d() {
        return (0, n.I)({
          queryKey: ["BroadcastApps"],
          queryFn: async () => {
            const e = await (async function () {
              let e = (0, i.Tc)(
                "broadcast_available_for_page",
                "application_config",
              );
              if ((0, c.h7)(e)) {
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
      var m = a(58918),
        p = a(17376);
      const _ =
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAAKCAYAAABi8KSDAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6OUNDNzBFNTUyMUM0MTFFNDk1REVFODRBNUU5RjA2MUYiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6OUNDNzBFNTYyMUM0MTFFNDk1REVFODRBNUU5RjA2MUYiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo5Q0M3MEU1MzIxQzQxMUU0OTVERUU4NEE1RTlGMDYxRiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo5Q0M3MEU1NDIxQzQxMUU0OTVERUU4NEE1RTlGMDYxRiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pv3vUKAAAAAlSURBVHjaYvz//z8DsYARpFhISAivjnfv3jGSp3jUGeQ4AyDAADZHNe2nyOBrAAAAAElFTkSuQmCC";
      var f = a(18654),
        v = a.n(f),
        b = a(12155),
        A = a(52038),
        g = a(61859),
        h = a(94011);
      function y(e) {
        const { appids: t, hide_status_banners: a, show_early_access: n } = e,
          { data: i } = (0, m.$Y)(),
          { data: c } = (0, p.F0)(),
          f = t.length > 0 && t.every((e) => i && i.has(e)),
          y = t.length > 0 && t.every((e) => c && c.has(e)),
          I = (function (e) {
            const { data: t } = d(),
              [a, r] = (0, u.useState)(!1),
              n = (0, s.jE)(),
              i = (0, l.eG)();
            return (
              (0, u.useEffect)(() => {
                if (!e || 0 == e.length || !t) return r(!1);
                (async () => {
                  const a = await Promise.all(
                    e.map((e) => n.fetchQuery((0, o.us)(i, { appid: e }))),
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
              }, [e, i, n, t]),
              a
            );
          })(t),
          N = f && !a,
          k = y && !a,
          w = !a && n;
        return u.createElement(
          "div",
          { className: (0, A.A)(v().CapsuleDecorators, "CapsuleDecorators") },
          N &&
            u.createElement(
              "span",
              { className: (0, A.A)(v().Banner, v().Blue) },
              u.createElement("img", {
                src: (0, r.YJ)(_),
                className: v().LinesImg,
              }),
              (0, g.we)("#Sale_InLibrary"),
            ),
          k &&
            u.createElement(
              "span",
              { className: v().Banner },
              u.createElement(b.qnF, { className: v().LinesImg }),
              (0, g.we)("#Sale_OnWishlist"),
            ),
          w && !N && !k && u.createElement(E, { appids: t }),
          I && u.createElement(h.K, null),
        );
      }
      function E(e) {
        const { appids: t } = e,
          a = (function (e) {
            const [t, a] = (0, u.useState)(!1),
              r = (0, s.jE)(),
              n = (0, l.eG)();
            return (
              (0, u.useEffect)(() => {
                if (!e || 0 == e.length) return a(!1);
                (async () => {
                  const t = await Promise.all(
                    e.map((e) => r.fetchQuery((0, o.us)(n, { appid: e }))),
                  );
                  a(t.some((e) => e && e.is_early_access));
                })();
              }, [e, n, r]),
              t
            );
          })(t);
        return a
          ? u.createElement(
              "span",
              { className: (0, A.A)(v().Banner, v().EarlyAccessGradient) },
              (0, g.we)("#Sale_EarlyAccess"),
            )
          : null;
      }
    },
    72860: (e, t, a) => {
      "use strict";
      a.d(t, { S: () => u });
      var r = a(71420),
        n = a(55963),
        s = a(70300),
        i = a(81393),
        c = a(56011),
        l = a(61859),
        o = a(61336);
      function u(e, t, a, u, d, m) {
        if (!a) return;
        if (!(0, s.nz)(e.item_type))
          return void (0, i.wT)(
            !1,
            "StoreItemWidgetSalePageAction: unexpected type: " + e.item_type,
          );
        const p = (0, n.wJ)(`${(0, r._)(e, u)}${d ? `?${d}` : ""}`, t);
        return {
          onClick: (e) => {
            let t = (0, c.uX)(e) || window;
            m
              ? m(e)
              : p.startsWith("steam://") || (t.location.href = (0, o.NT)(p));
          },
          onOKActionDescription: (0, l.we)("#Sale_Gamepad_Action_Select"),
        };
      }
    },
    70300: (e, t, a) => {
      "use strict";
      a.d(t, { nz: () => c, oj: () => l, qr: () => i });
      var r = a(90626),
        n = a(81886),
        s = a(84518);
      function i(e) {
        return "bundle" == e
          ? "bundle"
          : "sub" == e
            ? "sub"
            : ((0, n.fp)(e), "app");
      }
      function c(e) {
        return 2 == e ? "bundle" : 1 == e ? "sub" : "app";
      }
      const l = (e) => {
        const { appid: t } = e,
          a = r.createElement(
            "div",
            { className: "ImpressionTrackedElement" },
            e.children,
          );
        return t ? r.createElement(s.A, { appID: t }, a) : a;
      };
    },
    54492: (e, t, a) => {
      "use strict";
      a.d(t, { J: () => o });
      var r = a(39777),
        n = a(90626),
        s = a(91822),
        i = a(52038),
        c = a(78327),
        l = a(58855);
      function o(e) {
        const { bAllowOutsideOfDeck: t } = e;
        return (0, c.Qn)() || t ? n.createElement(u, { ...e }) : null;
      }
      function u(e) {
        const { className: t, id: a } = e,
          c = (0, r.qI)(a),
          [o, u] = (0, s.FD)();
        let d = "unknown";
        if (2 == u)
          switch (c.data?.steam_os_compat_category) {
            case 2:
              d = "steamoscompatible";
              break;
            case 1:
              d = "steamosunsupported";
              break;
            case 0:
              d = "steamosunknown";
          }
        else
          switch (c.data?.steam_deck_compat_category) {
            case 3:
              d = "verified";
              break;
            case 2:
              d = "playable";
              break;
            case 1:
              d = "unsupported";
          }
        return n.createElement("div", {
          className: (0, i.A)(l.CompatIcon, "ds_steam_deck_compat", d, t),
        });
      }
    },
  },
]);
