/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(() => {
  (self.webpackChunkstore = self.webpackChunkstore || []).push([
    [86991],
    {
      93256: (_, A, t) => {
        "use strict";
        t.d(A, { u: () => u });
        var e = t(7850),
          d = t(29630),
          T = t(13465);
        function u(h) {
          const { strImageToken: M, language: I, strAltText: R } = h,
            B = (0, d.z5)(M, I);
          return B
            ? typeof B == "string"
              ? (0, e.jsx)("img", { src: B, alt: R })
              : (0, e.jsx)(T.c, { rgSources: B, strAltText: R })
            : null;
        }
      },
      29630: (_, A, t) => {
        "use strict";
        t.d(A, { zU: () => i, z5: () => U });
        var e = t(38340),
          d = t(9046),
          T = t(99412),
          u = t(72604),
          h = t(7742),
          M = t(72849),
          I = t(76559),
          R = t(71742),
          B = t(34592),
          W = t(51746),
          g = t(72609),
          b = t(7850),
          O = t(90626);
        function r(s, c) {
          return `${s}/${c}`;
        }
        const a = {},
          x = O.createContext(a);
        function P(s) {
          const { resolutions: c, children: l } = s;
          return jsx(x.Provider, { value: c, children: l });
        }
        function m() {
          return O.useContext(x);
        }
        const L = new RegExp(
          `${e.eg.replace(/[{}]/g, "\\$&")}/(\\d+)/([0-9a-f]+\\.[a-z0-9]+)`,
          "gi",
        );
        function G(s) {
          const c = [],
            l = new Set();
          for (const o of s.matchAll(L)) {
            const f = Number.parseInt(o[1]),
              v = o[2],
              j = r(f, v);
            f > 0 &&
              !l.has(j) &&
              (l.add(j), c.push({ clanAccountID: f, hashAndExt: v }));
          }
          return c;
        }
        function U(s, c, l = 0) {
          const o = m();
          return V(s, c, l, o);
        }
        async function $(s, c, l = 0) {
          return V(s, c, l);
        }
        function V(s, c, l = 0, o) {
          if (!s || s.length == 0) return null;
          if (s?.startsWith(e.lw)) return i.ReplacementTokenToClanImageURL(s);
          if (s?.startsWith(e.eg)) {
            const f = i.GetBaseURL(),
              v = s.substring(e.eg.length + 1),
              j = parseInt(v.substring(0, v.indexOf("/"))),
              D = v.substring(v.indexOf("/") + 1),
              S = i.GenerateURLFromHashAndExt(j, D);
            if (o?.[r(j, D)] === !1) return S;
            const n = i
              .GetLocalizedClanImageFileNames(D, c)
              .map((p) => f + j + "/" + p + "?t=" + l);
            return n.push(S), n;
          }
          return s;
        }
        const i = {
          GetBaseURL() {
            return `${g.TS.CLAN_CDN_ASSET_URL}images/`;
          },
          GetBaseURLV2() {
            return `${g.TS.CLAN_CDN_ASSET_URL}locimages/`;
          },
          ReplacementTokenToClanImageURL(s) {
            return (
              (s = s.replace(e.lw, this.GetBaseURL())),
              s.replace("http://", "https://")
            );
          },
          ExtractHashFromBBCodeURL(s) {
            const l =
              /\/(?<clanid>[0-9]+)\/(?<filename>[0-9a-f]*)(?<extension>\.[^.]*)$/.exec(
                s,
              );
            return l?.groups
              ? [l.groups.filename, parseInt(l.groups.clanid)]
              : [void 0, void 0];
          },
          GetExtensionString(s) {
            return (
              (s.file_type != null ? (0, W.EG)(s.file_type) : null) ?? ".jpg"
            );
          },
          GetHashAndExt(s) {
            return s ? s.image_hash + this.GetExtensionString(s) : null;
          },
          GetThumbHashAndExt(s) {
            return s ? s.thumbnail_hash + this.GetExtensionString(s) : null;
          },
          GetHashFromHashAndExt(s) {
            let c = s.substring(s.lastIndexOf("."));
            return s.substring(0, s.length - c.length);
          },
          GetExtStringFromHashAndExt(s) {
            return s.substring(s.lastIndexOf("."));
          },
          GetLocalizedClanImageFileNames(s, c) {
            if (c == null) return [];
            const l = this.GetHashFromHashAndExt(s),
              o = this.GetExtStringFromHashAndExt(s),
              f = [l + "/" + (0, T.LgB)(c) + o];
            return (
              c == T.Pn1 && f.push(l + "/" + (0, T.x6o)((0, T.LgB)(c)) + o), f
            );
          },
          GenerateURLFromHashAndExt(s, c, l = d.wI.full) {
            return this.GenerateURLFromHashAndExtAndLang(
              s,
              c,
              l,
              T.xPp,
              void 0,
            );
          },
          GenerateURLFromHashAndExtAndLang(s, c, l = d.wI.full, o, f) {
            s instanceof I.b && (s = s.GetAccountID());
            let v = this.GetBaseURL();
            const j = o != null && o != T.xPp;
            if (l == d.wI.full && !j) return v + s + "/" + c;
            {
              let D = c.substring(c.lastIndexOf(".")),
                S = c.substring(0, c.length - D.length);
              return !j || o == T.Bhc || f != "localized_image_group"
                ? v + s + "/" + S + l + D
                : v + s + "/" + S + "/" + (0, T.x6o)((0, T.LgB)(o)) + D;
            }
          },
          GetHashAndExtFromURL(s) {
            let c = this.GetBaseURL();
            return !s?.startsWith(c) ||
              ((s = s.substring(c.length)), s.indexOf("/") == -1)
              ? null
              : ((s = s.substring(s.indexOf("/") + 1)), s);
          },
          GenerateEditableURLFromHashAndExt(s, c, l) {
            let o =
              g.TS.COMMUNITY_BASE_URL +
              "gid/" +
              s.ConvertTo64BitString() +
              "/showclanimage/?image_hash_and_ext=" +
              c;
            return l && (o += "&lang=" + l), o;
          },
          GetMimeType(s) {
            return (0, W.ab)(s);
          },
          async AsyncGetImageResolution(s, c, l, o, f) {
            const v = c + this.GetExtensionString({ file_type: l }),
              j = this.GenerateEditableURLFromHashAndExt(s, v);
            return await this.AsyncGetImageResolutionInternal(j, o, f);
          },
          async AsyncGetImageResolutionInternal(s, c, l) {
            const o = (0, h.x0)();
            let f = new Image();
            (f.crossOrigin = "anonymous"),
              (f.onerror = (S) => {
                const n = { success: u.zi };
                l ||
                  ((n.err_msg =
                    "Load fail on url " +
                    s +
                    " with error: " +
                    (0, B.H)(S).strErrorMsg),
                  console.error(n.err_msg)),
                  (n.success = u.zi),
                  o.resolve(n);
              }),
              (f.onload = () => {
                const S = { success: u.zi };
                if (
                  ((S.width = f.width),
                  (S.height = f.height),
                  !(f.width > 0) || !(f.height > 0))
                ) {
                  (0, R.wT)(
                    !1,
                    "unexpected image resolution discovered for strURL: " + s,
                  ),
                    (S.err_msg = "No resolution reported for url " + s),
                    o.resolve(S);
                  return;
                }
                (S.success = u.R), o.resolve(S);
              }),
              (f.src = s),
              c.token.promise.catch(() => {
                (f.onload = () => {}),
                  (f.onerror = () => {}),
                  o.resolve({ success: u.e9 });
              });
            let v;
            const j = new Promise((S, n) => {
              v = setTimeout(() => n(), 1e4);
            });
            let D;
            try {
              D = await Promise.race([j, o.promise]);
            } catch {
              D = { success: u._3, err_msg: "We timed out processing images" };
            } finally {
              clearTimeout(v);
            }
            return D;
          },
          BIsClanImageVideo(s) {
            return s.file_type == M.bg.nn || s.file_type == M.bg.pJ;
          },
        };
      },
      9046: (_, A, t) => {
        "use strict";
        t.d(A, { pb: () => T, wI: () => d });
        class e {
          imageid;
          image_hash;
          thumbnail_hash;
          file_type;
          file_name;
          clanAccountID;
          url;
          thumb_url;
          uploaded_time;
          loc_group_id;
        }
        var d = ((u) => (
          (u.full = ""),
          (u.background_main = "_960x311"),
          (u.background_mini = "_480x156"),
          (u.capsule_main = "_400x225"),
          (u.spotlight_main = "_1054x230"),
          u
        ))(d || {});
        const T = [
          "localized_image_group",
          "link_capsule",
          "product_mobile_banner_override",
          "product_banner_override",
          "sale_section_title",
          "schedule_track_art",
          "localized_background_art",
        ];
      },
      7742: (_, A, t) => {
        "use strict";
        t.d(A, { x0: () => d });
        async function e(u) {
          try {
            return await u;
          } catch (h) {
            console.error(h);
            return;
          }
        }
        function d() {
          let u, h;
          return {
            promise: new Promise((I, R) => {
              (u = I), (h = R);
            }),
            resolve: u,
            reject: h,
          };
        }
        function T(u) {
          return new Promise((h) => setTimeout(h, u));
        }
      },
      95414: (_, A, t) => {
        "use strict";
        t.d(A, { j: () => b, u: () => O });
        var e = t(7850),
          d = t(90626),
          T = t(24660),
          u = t(83482),
          h = t(72865),
          M = t(77200),
          I = t(53113),
          R = t(68094),
          B = t(72609),
          W = t(3166);
        function g(r) {
          if (r) {
            if ("appid" in r) return "app";
            if ("bundleid" in r) return "bundle";
            if ("packageid" in r) return "sub";
          }
        }
        function b(r) {
          const {
              id: a,
              hoverClassName: x,
              fnGetIDOverride: P,
              fnHoverState: m,
              disableScreenshots: L,
              children: G,
            } = r,
            U = d.useRef(null),
            $ = d.useCallback(
              (i) => {
                const s = g(a);
                s &&
                  (m && m(!0),
                  window.GameHover &&
                    (U.current &&
                      L &&
                      (U.current.dataset.hoverDisableScreenshots = "true"),
                    window.GameHover(P ? P() : U.current, i, "global_hover", {
                      type: s,
                      id: (0, R.G$)(a).id,
                      v6: 1,
                    })));
              },
              [m, P, L, a],
            ),
            V = d.useCallback(
              (i) => {
                g(a) &&
                  (m && i.relatedTarget && m(!1),
                  window.HideGameHover &&
                    window.HideGameHover(
                      P ? P() : U.current,
                      i,
                      "global_hover",
                    ));
              },
              [a, m, P],
            );
          return (0, e.jsx)("div", {
            ref: U,
            className: x,
            onMouseEnter: $,
            onMouseLeave: V,
            onFocus: $,
            onBlur: V,
            children: G,
          });
        }
        function O(r) {
          const {
              id: a,
              strExtraParams: x,
              fnOnClickOverride: P,
              strOverrideURL: m,
            } = r,
            L = (0, h.n9)(),
            G = (0, M.w)(),
            U = (0, I.NT)(
              m ||
                (a && "creatorid" in a
                  ? (0, u.It)(
                      `${B.TS.STORE_BASE_URL}curator/${((0, R.G$))(a).id}${x ? `?${x}` : ""}`,
                      L,
                      G,
                    )
                  : (0, u.It)(
                      `${B.TS.STORE_BASE_URL}${g(a)}/${((0, R.G$))(a).id}${x ? `?${x}` : ""}`,
                      L,
                      G,
                    )),
            );
          return (0, e.jsx)(b, {
            ...r,
            children: (0, e.jsx)(T.Ii, {
              className: r.className,
              href: P ? void 0 : U,
              target: B.TS.IN_CLIENT || P ? void 0 : "_blank",
              rel: "noopener noreferrer",
              onClick: P,
              children: r.children,
            }),
          });
        }
      },
      63639: (_, A, t) => {
        "use strict";
        t.d(A, { S: () => W });
        var e = t(7850),
          d = t(12997),
          T = t(90626),
          u = t(52438);
        const h = {
            name: "trailerPrefs",
            options: { path: "/", secure: !0, maxAge: 720 * 60 * 60 * 1e3 },
            preferenceControls: { isTechnicallyNecessary: !0 },
          },
          M = { flVolume: 0.8, bMuted: !0 };
        function I(g) {
          return g.flVolume === M.flVolume && g.bMuted === M.bMuted;
        }
        function R() {
          try {
            const g = (0, u.j_)(h);
            if (!g) return M;
            const b = JSON.parse(g);
            return {
              flVolume: typeof b.flVolume == "number" ? b.flVolume : M.flVolume,
              bMuted: typeof b.bMuted == "boolean" ? b.bMuted : M.bMuted,
            };
          } catch {
            return M;
          }
        }
        function B(g) {
          I(g) || Object.keys(g).length == 0
            ? (0, u.Y1)(h)
            : (0, u.eV)(h, JSON.stringify(g));
        }
        function W(g) {
          let { children: b } = g;
          const [O, r] = (0, T.useState)(() => R());
          return (
            (0, T.useEffect)(() => {
              B(O);
            }, [O]),
            (0, e.jsx)(d.v, {
              playerVolume: O.flVolume,
              setPlayerVolume: (a) => r((x) => ({ ...x, flVolume: a })),
              audioMuted: O.bMuted,
              setAudioMuted: (a) => r((x) => ({ ...x, bMuted: a })),
              children: b,
            })
          );
        }
      },
      64457: (_, A, t) => {
        "use strict";
        t.d(A, { PE: () => V, Yg: () => G, _t: () => U, gO: () => s });
        var e = t(7850),
          d = t(21721),
          T = t(25046),
          u = t(40358),
          h = t(68094),
          M = t(41032),
          I = t(90626),
          R = t(62571),
          B = t(40426),
          W = t(36118),
          g = t(36707),
          b = t(18210),
          O = t(72609),
          r = t(96538),
          a = t(85599),
          x = t(64271),
          P = t(48963),
          m = t.n(P),
          L = t(50573);
        function G(l) {
          const { id: o, bPopOutTrailerPlayback: f } = l,
            { data: v } = (0, u.Yo)(o),
            j = (0, d.DT)(o),
            { data: D } = (0, u.J$)(o),
            [S, n] = (0, I.useState)(!1),
            [p, E] = (0, I.useState)(!1),
            y = (0, M.dy)(),
            N = v?.highlights?.filter((K) => !y || K.all_ages),
            C = N && N?.length > 0 ? N[0] : void 0,
            F = I.useCallback(() => {
              C && (f ? E(!0) : n((K) => !K));
            }, [C, f]);
          if (!D)
            return (0, e.jsx)("div", {
              className: (0, g.A)(m().HilightGrid, m().MediaContainer),
              children: (0, e.jsx)(a.t, { size: "medium" }),
            });
          const z = C
            ? (0, e.jsx)(c, {
                trailer: C,
                bPlayVideo: S,
                fnTogglePlayTrailer: F,
              })
            : null;
          return !C && !j?.length
            ? null
            : (0, e.jsxs)("div", {
                className: (0, g.A)(m().HilightGrid, m().MediaContainer),
                children: [
                  (0, e.jsx)(U, {
                    elFeaturedInCenter: z,
                    trailer: C,
                    id: o,
                    name: D.name || "",
                  }),
                  f
                    ? (0, e.jsx)(V, {
                        id: o,
                        bShowModal: p,
                        hideModal: () => E(!1),
                      })
                    : (0, e.jsx)($, {
                        name: D.name || "",
                        trailer: C,
                        bPlayVideo: S,
                        fnTogglePlayTrailer: F,
                        bControls: !0,
                      }),
                ],
              });
        }
        function U(l) {
          const {
              elFeaturedInCenter: o,
              id: f,
              name: v,
              trailer: j,
              featureElementclassName: D,
              bUseTrailerAsFirstThumb: S,
              bNoScreenShotModals: n,
            } = l,
            [p, E] = I.useState(void 0),
            [y, N] = (0, B.XC)(),
            C = (0, d.DT)(f),
            F = (0, I.useRef)(null),
            [z, K] = (0, I.useState)(0);
          if (!f) return null;
          const Q = o || (p !== void 0 && p !== -1) ? p : 0,
            J = new Array(),
            Y = new Array();
          if (
            (S &&
              j &&
              (J.push(
                (0, e.jsx)(
                  c,
                  {
                    trailer: j,
                    bPlayVideo: !1,
                    fnTogglePlayTrailer: () => {},
                    onMouseEnter: () => E(0),
                    onMouseLeave: () => {
                      const Z = F.current;
                      Z && K(Z.currentTime);
                    },
                  },
                  "trail_thumb_",
                ),
              ),
              Y.push(
                (0, e.jsx)(
                  $,
                  {
                    ref: F,
                    name: v,
                    trailer: j,
                    bControls: !1,
                    bPlayVideo: !0,
                    startTime: z,
                    fnTogglePlayTrailer: () => {},
                  },
                  "trail_inline",
                ),
              )),
            C?.forEach((Z, w) => {
              if ((o || w > 0) && J.length < 3) {
                const H = (0, d.bu)(Z, "thumb"),
                  re = (0, d.bu)(Z, "600x338"),
                  ee = J.length;
                J.push(
                  (0, e.jsx)(
                    "div",
                    {
                      className: (0, g.A)({
                        [m().ThumbnailCtn]: !0,
                        [m().ThumbnialClickable]: !n,
                      }),
                      onMouseEnter: () => E(ee),
                      children: n
                        ? (0, e.jsx)("img", { src: H, alt: v })
                        : (0, e.jsx)("button", {
                            type: "button",
                            className: m().ThumbnailButton,
                            onClick: () => {
                              const k = [...(C || [])];
                              if (k.length > 0) {
                                for (let q = 0; q < w; ++q) {
                                  const te = k.shift();
                                  te && k.push(te);
                                }
                                y(k.map((q) => (0, d.bu)(q, "full")));
                              }
                            },
                            children: (0, e.jsx)("img", { src: H, alt: v }),
                          }),
                    },
                    w + "_small_" + H,
                  ),
                ),
                  Y.push(
                    (0, e.jsx)(
                      "div",
                      {
                        className: m().ScreenshotDisplayCtn,
                        children: (0, e.jsx)("img", { src: re, alt: v }),
                      },
                      w + "_big_" + H,
                    ),
                  );
              }
            }),
            !o && (!Y || Y.length == 0))
          )
            return null;
          const X = J.slice(0, 3),
            se = Array.from({ length: Math.max(0, 3 - X.length) });
          return (0, e.jsxs)(e.Fragment, {
            children: [
              N,
              (0, e.jsx)("div", {
                className: D || m().MainMediaCtn,
                children:
                  o && (Q === -1 || Q === void 0)
                    ? (0, e.jsx)(e.Fragment, { children: o })
                    : (0, e.jsx)(e.Fragment, {
                        children: Q !== void 0 && Y[Q],
                      }),
              }),
              X.length > 0 &&
                (0, e.jsxs)("div", {
                  className: m().ScreenshotThumbnailRow,
                  onMouseLeave: () => E(-1),
                  children: [
                    X,
                    se.map((Z, w) =>
                      (0, e.jsx)(
                        "div",
                        { className: m().ThumbnailCtn },
                        `app_${(0, h.ER)(f)}_${w}`,
                      ),
                    ),
                  ],
                }),
            ],
          });
        }
        function $(l) {
          const {
            ref: o,
            name: f,
            trailer: v,
            bControls: j,
            bPlayVideo: D,
            fnTogglePlayTrailer: S,
            startTime: n,
          } = l;
          if (
            ((0, I.useEffect)(() => {
              const E = o?.current;
              if (n != null && n > 0 && E) {
                const y = () => {
                  E.currentTime = n || 0;
                };
                return (
                  E.addEventListener("loadedmetadata", y),
                  () => {
                    E.removeEventListener("loadedmetadata", y);
                  }
                );
              }
            }, [o, n]),
            !v)
          )
            return null;
          let p = (0, g.A)(m().VideoLargeContainer, D && m().videoPlaying);
          return (0, e.jsxs)("div", {
            className: p,
            onClick: S,
            role: "presentation",
            children: [
              (0, e.jsx)(L.hj, {
                name: f,
                trailerCategory: v.trailer_category,
                trailerDisplay: L.g,
                mouseOver: !1,
              }),
              !!(D && v.microtrailer) &&
                (0, e.jsx)("video", {
                  className: m().VideoLarge,
                  ref: o,
                  controls: j,
                  autoPlay: !0,
                  loop: !0,
                  muted: !0,
                  poster: n != null && n > 0 ? void 0 : v.screenshot_full,
                  children: v.microtrailer?.map((E) =>
                    O.TS.IN_CLIENT && E.type == "video/mp4"
                      ? null
                      : (0, e.jsx)(
                          "source",
                          { src: (0, T.M4)(v, E.filename || ""), type: E.type },
                          E.filename,
                        ),
                  ),
                }),
              j &&
                (0, e.jsx)("button", {
                  type: "button",
                  className: m().CloseButton,
                  "aria-label": (0, b.we)("#Button_Close"),
                  children: (0, e.jsx)(W.sED, {}),
                }),
            ],
          });
        }
        function V(l) {
          return l.bShowModal ? (0, e.jsx)(i, { ...l }) : null;
        }
        function i(l) {
          const { id: o, bShowModal: f, trailerBaseID: v, hideModal: j } = l,
            { data: D } = (0, u.J$)(o),
            S = (0, T.kB)(o),
            n = (0, I.useMemo)(() => {
              if (!(!S || S.length == 0)) {
                if (v) {
                  const z = S.find((K) => K.trailer_base_id == v);
                  if (z) return z;
                }
                return S[0];
              }
            }, [S, v]),
            p = I.useId(),
            E = I.useId(),
            {
              rgDashTrailers: y,
              rgHlsTrailers: N,
              strCaptionManufest: C,
              strScreenshot: F,
            } = (0, I.useMemo)(() => {
              if (!n)
                return {
                  rgDashTrailers: [],
                  rgHlsTrailers: [],
                  strCaptionManufest: "",
                  strScreenshot: "",
                };
              const { rgDashTrailers: z, rgHlsTrailers: K } = (0, T.hg)(n);
              return {
                rgDashTrailers: z,
                rgHlsTrailers: K,
                strCaptionManufest: (0, T.Wv)(n),
                strScreenshot: (0, T.hl)(n),
              };
            }, [n]);
          return !n || !n.adaptive_trailers || y.length == 0
            ? null
            : (0, e.jsx)(r.EN, {
                active: f,
                children: (0, e.jsxs)(r.eV, {
                  "aria-labelledby": (0, R.q)(p, E),
                  bAllowFullSize: !0,
                  bOKDisabled: !0,
                  closeModal: j,
                  children: [
                    (0, e.jsx)("div", {
                      className: m().VideoPopupContainers,
                      children: (0, e.jsx)(x.P, {
                        dashManifests: y,
                        hlsManifest: N[0] || "",
                        screenshot: F,
                        altText: n.trailer_name,
                        muteWhenAutoplayBlocked: !0,
                        captionManifest: C,
                      }),
                    }),
                    (0, e.jsx)("div", {
                      id: p,
                      style: { display: "none" },
                      children: D?.name || "",
                    }),
                    (0, e.jsx)("div", {
                      id: E,
                      style: { display: "none" },
                      children: n.trailer_name,
                    }),
                  ],
                }),
              });
        }
        function s(l) {
          const { appid: o, trailerBaseID: f, bShowModal: v, hideModal: j } = l,
            D = (0, I.useMemo)(() => ({ appid: o }), [o]);
          return (0, e.jsx)(V, {
            id: D,
            trailerBaseID: f,
            bShowModal: v,
            hideModal: j,
          });
        }
        function c(l) {
          const {
            trailer: o,
            fnTogglePlayTrailer: f,
            bPlayVideo: v,
            onMouseEnter: j,
            onMouseLeave: D,
          } = l;
          return (0, e.jsxs)("div", {
            className: (0, g.A)({
              [m().VideoThumbnail]: !v,
              [m().videoPlaying]: v,
              [m().ThumbnailCtn]: !0,
            }),
            onClick: f,
            onMouseEnter: j,
            onMouseLeave: D,
            role: "presentation",
            children: [
              (0, e.jsx)("img", { src: (0, T.hl)(o), alt: o.trailer_name }),
              (0, e.jsx)("button", {
                type: "button",
                className: m().VideoPlayButton,
                "aria-label": (0, b.we)("#Playback_Play_Tooltip"),
                children: (0, e.jsx)(W.jGG, {}),
              }),
            ],
          });
        }
      },
      85491: (_, A, t) => {
        "use strict";
        t.d(A, { T: () => p });
        var e = t(7850),
          d = t(48156),
          T = t(96378),
          u = t(95414),
          h = t(46727),
          M = t(84607),
          I = t(44267),
          R = t(41188),
          B = t(80104),
          W = t(77459),
          g = t(29245),
          b = t(72838),
          O = t(39905),
          r = t(3348),
          a = t(40358),
          x = t(29522),
          P = t(72865),
          m = t(75844),
          L = t(90626),
          G = t(88743),
          U = t(83482),
          $ = t(64457),
          V = t(76532),
          i = t.n(V),
          s = t(68094),
          c = t(90740),
          l = t(61431);
        function o(E) {
          const {
              id: y,
              bPurchaseOptionsExpanded: N,
              fnCollapseOptions: C,
              bPreferAssetWithoutOverride: F,
            } = E,
            { data: z } = (0, a.is)(y),
            K = (0, L.useRef)(null);
          if (!z) return null;
          const Q = z.purchase_options;
          return Q
            ? (0, e.jsx)(c.A, {
                nodeRef: K,
                in: N,
                mountOnEnter: !0,
                unmountOnExit: !0,
                timeout: 2e3,
                classNames: {
                  enterActive: i().Expanding,
                  enterDone: i().Expanded,
                  exit: i().Expanded,
                  exitActive: i().Collapsing,
                },
                children: (0, e.jsxs)("div", {
                  ref: K,
                  className: i().BundleContentsCtnTransition,
                  children: [
                    (0, e.jsx)("div", {
                      className: i().BundleContentsCtn,
                      children: Q.filter((J) => !!J.packageid).map((J) =>
                        (0, e.jsx)(
                          "div",
                          {
                            className: i().BundleContentItem,
                            children: (0, e.jsx)(l.p, {
                              id: J.packageid || 0,
                              type: "sub",
                              bForceSmallCapsuleArt: !0,
                              bPreferAssetWithoutOverride: F,
                            }),
                          },
                          "purchaseitem_" + (0, s.ER)(y) + "_" + J.packageid,
                        ),
                      ),
                    }),
                    (0, e.jsx)("div", {
                      onClick: C,
                      className: i().BundleShowButton,
                      children: (0, e.jsx)("button", {
                        className: i().ShowContentsButton,
                        children: O.Z.Localize("#Button_Close"),
                      }),
                    }),
                  ],
                }),
              })
            : null;
        }
        var f = t(4705),
          v = t(6698),
          j = t(38081),
          D = t.n(j),
          S = t(96155),
          n = t(36707);
        const p = (0, m.PA)((E) => {
          const { id: y, type: N } = E,
            C = (0, G.zl)(y, N),
            {
              bHidePrice: F,
              bShowDemoButton: z,
              bPreferDemoStorePage: K,
              bShowPurchaseOptionsButton: Q,
              bUseSubscriptionLayout: J,
              bPreferAssetWithoutOverride: Y,
            } = E,
            [X, se] = L.useState(!1),
            Z = () => se(!X),
            { data: w } = (0, a.U2)(C),
            { data: H } = (0, a.wl)(C),
            { data: re } = (0, a.by)(C),
            { data: ee } = (0, a.xz)(C),
            k = (0, x._Z)(C),
            q = (0, P.n9)();
          if (!w || !H)
            return (0, e.jsx)(T.h, {
              capsules_per_row: [1],
              is_expanded_display: !0,
            });
          const te = (0, U.L3)(q),
            ne = w.item_type == d.c6.qI;
          return (0, e.jsx)("div", {
            className: (0, n.A)(
              i().StoreSaleWidgetContainer,
              i().LibraryAssetExpandedDisplay,
              "LibraryAssetExpandedDisplay",
            ),
            children: (0, e.jsxs)(v.oj, {
              appid: ne ? w.appid : void 0,
              children: [
                (0, e.jsxs)("div", {
                  className: i().StoreSaleWidgetLibraryAssetExtendedTop,
                  children: [
                    (0, e.jsx)("div", {
                      className: (0, n.A)(i().StoreSaleWidgetLeft),
                      children: (0, e.jsx)(u.u, {
                        id: C,
                        bPreferDemoStorePage: K,
                        children: (0, e.jsxs)("div", {
                          className: i().StoreSaleWidgetImage,
                          children: [
                            (0, e.jsx)(h.V, { appids: k }),
                            (0, e.jsx)(M.a, {
                              id: C,
                              imageType: "library",
                              bPreferAssetWithoutOverride: Y,
                            }),
                            (0, e.jsx)(S.J, { id: C }),
                          ],
                        }),
                      }),
                    }),
                    (0, e.jsxs)("div", {
                      className: i().StoreSaleWidgetCrossCenterRight,
                      children: [
                        ne &&
                          (0, e.jsx)(I.E, {
                            id: C,
                            classOverride: (0, n.A)(
                              D().WishlistButtonNotTop,
                              "WishlistButton",
                            ),
                            snr: te,
                          }),
                        (0, e.jsxs)("div", {
                          className: i().StoreSaleWidgetContents,
                          children: [
                            (0, e.jsxs)("div", {
                              className: i().StoreSaleWidgetCenter,
                              children: [
                                H.short_description &&
                                  H.short_description.length > 0 &&
                                  (0, e.jsx)("div", {
                                    className: (0, n.A)(
                                      i().StoreSaleWidgetShortDesc,
                                      "StoreSaleWidgetShortDesc",
                                    ),
                                    children: H.short_description,
                                  }),
                                (0, e.jsx)(R.n, {
                                  rgTagIDs: ee
                                    ? ee.slice(0, 10).map((ae) => ae.tagid || 0)
                                    : [],
                                  instanceNum: 0,
                                  bNoStoreLinks: !1,
                                }),
                                (0, e.jsxs)("div", {
                                  className: i().StoreMetaDataCtn,
                                  children: [
                                    (0, e.jsx)("div", {
                                      className: i().StoreSaleItemRelease,
                                      children: O.Z.LocalizeReact(
                                        "#Sale_ReleaseDate",
                                        (0, e.jsx)("span", {
                                          children: (0, r.CC)(re),
                                        }),
                                      ),
                                    }),
                                    H.developers &&
                                      H.developers.length > 0 &&
                                      (0, e.jsxs)("div", {
                                        className: i().StoreSaleItemDev,
                                        children: [
                                          O.Z.Localize(
                                            "#CreatorHome_DevelopedBy",
                                          ),
                                          (0, e.jsx)("span", {
                                            children: H.developers[0].name,
                                          }),
                                        ],
                                      }),
                                    H.publishers &&
                                      H.publishers.length > 0 &&
                                      (0, e.jsxs)("div", {
                                        className: i().StoreSaleItemDev,
                                        children: [
                                          O.Z.Localize(
                                            "#CreatorHome_PublishedBy",
                                          ),
                                          (0, e.jsx)("span", {
                                            children: H.publishers[0].name,
                                          }),
                                        ],
                                      }),
                                  ],
                                }),
                              ],
                            }),
                            (0, e.jsx)("div", {
                              className: i().StoreSaleLibraryAssetWidgetRight,
                              children: (0, e.jsx)($.Yg, {
                                id: C,
                                bPopOutTrailerPlayback: !0,
                              }),
                            }),
                          ],
                        }),
                        (0, e.jsx)("div", {
                          className: i().StoreSaleItemReview,
                          children: (0, e.jsx)(B.J, { id: C }),
                        }),
                        (0, e.jsx)("div", {
                          className: i().CapsuleBottomBar,
                          children:
                            J && ne
                              ? (0, e.jsx)(W.E, {
                                  appid: w.appid,
                                  bIsMuted: !1,
                                })
                              : (0, e.jsxs)(e.Fragment, {
                                  children: [
                                    (0, e.jsx)(g.Q, { id: C }),
                                    (0, e.jsx)(f.w, {
                                      id: C,
                                      bShowDemoButton: z,
                                      bHidePrice: F,
                                      bShowPurchaseOptionsButton: Q,
                                      fnOnPurchaseOptionsClick: Z,
                                      bHideWishlistButton: w.is_coming_soon,
                                    }),
                                  ],
                                }),
                        }),
                        (0, e.jsxs)("div", {
                          className: i().StoreSaleWidgetBgTint,
                          children: [
                            (0, e.jsx)(b.G, {
                              id: C,
                              bPreferAssetWithoutOverride: Y,
                            }),
                            (0, e.jsx)(S.J, { id: C }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
                (0, e.jsx)(o, {
                  id: C,
                  bPurchaseOptionsExpanded: X,
                  fnCollapseOptions: Z,
                  bPreferAssetWithoutOverride: Y,
                }),
              ],
            }),
          });
        });
      },
      38340: (_, A, t) => {
        "use strict";
        t.d(A, { eg: () => d, lw: () => e, qR: () => T });
        const e = "{STEAM_CLAN_IMAGE}",
          d = "{STEAM_CLAN_LOC_IMAGE}",
          T = "{STEAM_APP_IMAGE}";
      },
      51746: (_, A, t) => {
        "use strict";
        t.d(A, {
          EG: () => h,
          II: () => b,
          Uz: () => B,
          aL: () => R,
          ab: () => T,
          zB: () => g,
        });
        var e = t(7742),
          d = t(72849);
        function T(r) {
          const a = r.toLowerCase();
          if (a.endsWith(".jpg") || a.endsWith(".jpeg")) return "image/jpeg";
          if (a.endsWith(".png")) return "image/png";
          if (a.endsWith(".gif")) return "image/gif";
          if (a.endsWith(".mp4")) return "video/mp4";
          if (a.endsWith(".webm")) return "video/webm";
          if (a.endsWith(".srt")) return "text/srt";
          if (a.endsWith(".vtt")) return "text/vtt";
          if (a.endsWith(".webp")) return "image/webp";
        }
        function u(r) {
          switch (r) {
            case "image/jpeg":
              return ".jpg";
            case "image/png":
              return ".png";
            case "image/gif":
              return ".gif";
            case "video/mp4":
              return ".mp4";
            case "video/webm":
              return ".webm";
            case "text/vtt":
              return ".vtt";
            case "text/srt":
              return ".srt";
            case "image/webp":
              return ".webp";
          }
          return (
            console.error(
              "ConvertMimeTypeToExtension:Unexepected mime type ",
              r,
            ),
            ".jpg"
          );
        }
        function h(r) {
          switch (r) {
            case d.bg.iS:
              return ".jpg";
            case d.bg.CK:
              return ".gif";
            case d.bg.dU:
              return ".png";
            case d.bg.pJ:
              return ".webm";
            case d.bg.nn:
              return ".mp4";
            case d.bg.pi:
              return ".srt";
            case d.bg.k7:
              return ".vtt";
            case d.bg.wD:
              return ".webp";
          }
        }
        function M(r) {
          const a = (0, e.x0)(),
            x = new Image();
          return (
            (x.onload = () => a.resolve(x)),
            (x.onerror = (P) => {
              console.error("LoadImage failed to load the image, details", P),
                a.resolve(void 0);
            }),
            (x.src = r),
            a.promise
          );
        }
        function I(r) {
          const a = (0, e.x0)(),
            x = document.createElement("video");
          return (
            (x.preload = "metadata"),
            x.addEventListener("loadedmetadata", () => a.resolve(x)),
            (x.onerror = (P) => {
              console.error("LoadVideo failed to load the video, details", P),
                a.resolve(void 0);
            }),
            (x.src = r),
            a.promise
          );
        }
        function R(r) {
          return r.startsWith("image/");
        }
        function B(r) {
          return r.startsWith("video/");
        }
        function W(r, a) {
          return a ? I(r) : M(r);
        }
        async function g(r, a) {
          if (a) return I(URL.createObjectURL(r));
          {
            const x = (0, e.x0)(),
              P = new FileReader();
            (P.onload = () => x.resolve(P.result ?? void 0)),
              (P.onerror = () => {
                console.error(
                  "GetMediaElementFromFile failed to load the image, details",
                  P.error,
                ),
                  x.resolve(void 0);
              }),
              P.readAsDataURL(r);
            const m = await x.promise;
            return m ? M(m.toString()) : void 0;
          }
        }
        function b(r) {
          return r
            ? r instanceof HTMLVideoElement
              ? { width: r.videoWidth, height: r.videoHeight }
              : { width: r.width, height: r.height }
            : { width: 0, height: 0 };
        }
        function O(r, a) {
          if (!a) return r;
          const x = new Set([
            "content-length",
            "host",
            "origin",
            "referer",
            "user-agent",
            "cookie",
            "set-cookie",
            "connection",
            "upgrade",
          ]);
          for (const P of a)
            x.has(P.name.toLowerCase()) || (r[P.name] = P.value);
          return r;
        }
      },
      13465: (_, A, t) => {
        "use strict";
        t.d(A, { c: () => T });
        var e = t(7850),
          d = t(90626);
        function T(u) {
          const {
              rgSources: h,
              onIncrementalError: M,
              onError: I,
              strAltText: R,
              ref: B,
              ...W
            } = u,
            [g, b] = d.useState(0),
            O = d.useMemo(() => JSON.stringify(h), [h]),
            [r, a] = d.useState(O);
          r != O && (a(O), b(0));
          const x = d.useMemo(() => {
              let L = "";
              return (
                h && h.length > g && (L = h[g]),
                L ||
                  (console.warn(
                    "MultiSourceImage created with no image src",
                    u,
                    g,
                  ),
                  (L =
                    "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=")),
                L
              );
            }, [h, g, u]),
            P = d.useCallback(
              (L) => {
                M?.(L, h[g], g);
                const G = g + 1;
                G >= h.length && I && I(L), G < h.length && b(G);
              },
              [g, I, M, h],
            ),
            m = d.useRef(null);
          return (
            d.useImperativeHandle(
              B,
              () => ({ imgRef: m, nSourceIndex: g, nSourceLength: h.length }),
              [m, g, h],
            ),
            d.useEffect(() => {
              const L = m.current;
              L?.complete && L.naturalWidth == 0 && (L.src = L.src);
            }, []),
            (0, e.jsx)("img", { ref: m, ...W, src: x, onError: P, alt: R }, r)
          );
        }
      },
      27068: (_, A, t) => {
        "use strict";
        t.r(A), t.d(A, { default: () => S });
        var e = t(7850),
          d = t(93256),
          T = t(99412),
          u = t(24660),
          h = t(72609),
          M = t(74107),
          I = t(61431),
          R = t(21659),
          B = t(3166),
          W = t(85491);
        function g(n) {
          return (0, B.Qn)()
            ? (0, e.jsx)(I.p, { ...n })
            : (0, R.c5)()
              ? (0, e.jsx)(I.p, { ...n, bShowReviewSummary: !0 })
              : (0, e.jsx)(W.T, { ...n });
        }
        var b = t(63639),
          O = t(21721),
          r = t(25046),
          a = t(29522),
          x = t(40358),
          P = t(72865),
          m = t(64271),
          L = t(90626),
          G = t(25792),
          U = t(51079),
          $ = t(36707),
          V = t(37882),
          i = t.n(V);
        function s(n) {
          const { appid: p, strUrlOverride: E } = n,
            y = (0, a.$5)(p),
            { data: N } = (0, x.J$)(y);
          return (
            (0, L.useEffect)(() => {
              if (N) {
                const C = `${h.TS.STORE_BASE_URL}${N.store_url_path}`.replace(
                  "/app/",
                  E ?? "/verified/",
                );
                C != window.location.href &&
                  window.history.replaceState({}, "", C);
              }
            }, [N, E]),
            !N || !y
              ? null
              : (0, e.jsx)(U.Ay, {
                  method: "verifiedprogram",
                  children: (0, e.jsx)(G.tH, {
                    children: (0, e.jsx)(l, { id: y }),
                  }),
                })
          );
        }
        function c(n) {
          const { id: p } = n,
            { data: E } = (0, x.J$)(p),
            y = `${h.TS.CLAN_CDN_ASSET_URL}images/41316928/846f603df6057b070667f2741730c2038648955d.png`;
          return (0, e.jsxs)(e.Fragment, {
            children: [
              (0, e.jsx)("div", {
                className: i().Headline,
                children: M.F5.LocalizeReact(
                  "#VerifiedProgram_DeckTitle",
                  E?.name,
                  (0, e.jsxs)("span", {
                    className: i().Verified,
                    children: [
                      (0, e.jsx)("img", {
                        src: y,
                        alt: M.F5.Localize("#VerifiedProgram_DeckAlt"),
                      }),
                      M.F5.Localize("#VerifiedProgram_DeckTitle_Verified"),
                    ],
                  }),
                ),
              }),
              (0, e.jsx)("div", {
                className: i().Subtitle,
                children: M.F5.LocalizeReact(
                  "#VerifiedProgram_DeckSubTitle",
                  (0, e.jsx)(u.Ii, {
                    className: i().Link,
                    href: `${h.TS.STORE_BASE_URL}greatondeck`,
                    children: M.F5.Localize("#VerifiedProgram_GreatOnDeck"),
                  }),
                ),
              }),
            ],
          });
        }
        function l(n) {
          const { id: p } = n;
          return (0, e.jsxs)("div", {
            className: i().Ctn,
            children: [
              (0, e.jsx)(o, { id: p }),
              (0, e.jsxs)("div", {
                className: (0, $.A)("page_content"),
                children: [
                  (0, e.jsx)(c, { id: p }),
                  (0, e.jsx)(j, { id: p }),
                  (0, e.jsx)(f, { id: p }),
                  (0, e.jsx)(v, {}),
                ],
              }),
            ],
          });
        }
        function o(n) {
          const { id: p } = n,
            { data: E } = (0, x.lv)(p);
          if (!E) return null;
          const y =
            (0, O.b0)(E, "library_hero_2x") ?? (0, O.b0)(E, "library_hero");
          return (0, e.jsxs)(e.Fragment, {
            children: [
              (0, e.jsx)("div", {
                className: i().BackgroundImageCtn,
                children: (0, e.jsx)("img", { src: y, alt: "" }),
              }),
              (0, e.jsx)("div", {
                className: i().BackgroundImageBlurCtn,
                children: (0, e.jsx)("img", { src: y, alt: "" }),
              }),
            ],
          });
        }
        function f(n) {
          const { id: p } = n;
          return (0, e.jsx)("div", {
            className: i().CapsuleWrapper,
            children: (0, e.jsx)(g, {
              id: "appid" in p ? p.appid : 0,
              type: "game",
              bShowDeckCompatibilityDialog: !1,
              bShowDemoButton: !0,
              bAutoFocus: !0,
              bPreferAssetWithoutOverride: !1,
            }),
          });
        }
        function v(n) {
          const p = (0, P.aL)(
            `${h.TS.STORE_BASE_URL}steamdeck?utm_source=verifiedpage`,
            "banner",
          );
          return (0, e.jsx)(u.Ii, {
            href: p,
            className: (0, $.A)(i().HardwareBannerCtn),
            children: (0, e.jsx)(D, {}),
          });
        }
        function j(n) {
          const { id: p } = n,
            { data: E } = (0, x.J$)(p),
            y = (0, r.TH)(p);
          if (!y) return null;
          const N = `${h.TS.CLAN_CDN_ASSET_URL}images/39049601/8f21143ba4f6331e117568740aa286e975a5afb1.png`,
            { rgDashTrailers: C, rgHlsTrailers: F } = (0, r.hg)(y);
          return (0, e.jsxs)("div", {
            className: i().DeviceFullWidthShadow,
            children: [
              (0, e.jsxs)("div", {
                className: (0, $.A)(i().DeviceWrapper),
                children: [
                  (0, e.jsx)(b.S, {
                    children: (0, e.jsx)("div", {
                      className: i().TrailerCtn,
                      children: (0, e.jsx)(m.P, {
                        dashManifests: C,
                        hlsManifest: F[0],
                        screenshot:
                          y.screenshot_full ?? y.screenshot_medium ?? "",
                        altText: E?.name ?? "",
                        muteWhenAutoplayBlocked: !0,
                      }),
                    }),
                  }),
                  (0, e.jsx)("img", {
                    src: N,
                    alt: M.F5.Localize("#VerifiedProgram_DeckDeviceAlt"),
                  }),
                ],
              }),
              (0, e.jsx)("div", {
                className: i().VideoDisclaimer,
                children: M.F5.Localize("#VerifiedProgram_DeckDisclaimer"),
              }),
            ],
          });
        }
        function D(n) {
          const p = (0, R.zI)(),
            E = (0, T.sfN)(h.TS.LANGUAGE);
          return (0, e.jsx)(d.u, {
            language: E,
            strAltText: M.F5.Localize("#VerifiedProgram_DeckShopBannerAlt"),
            strImageToken: p
              ? "{STEAM_CLAN_LOC_IMAGE}/39049601/6e0ec24257ee5ada6e922c2130eaa75ce83747e8.jpg"
              : "{STEAM_CLAN_LOC_IMAGE}/39049601/c18308dc60fd94678bb348608ddc0d6b8fdb11ab.jpg",
          });
        }
        function S(n) {
          const {
            match: {
              params: { appid: p },
            },
          } = n;
          return (0, e.jsx)(s, { appid: Number.parseInt(p) });
        }
      },
      37882: (_) => {
        _.exports = {
          Ctn: "_3sPRGG8vL4sM6N-8FZo5fT",
          Link: "-YNVdnBAoV2HQCkuR8C1h",
          BackgroundImageCtn: "_31Bm2h6tK_J4K2yYHTtttM",
          BackgroundImageBlurCtn: "_1LzeWsFv8n7BMFyJ1c0bF",
          Headline: "qQs0819GK5nJMJhEfDfqO",
          Verified: "_1DN1jmbJKCQol4bLgow8xK",
          Subtitle: "_2Tf8QYNJrsywiXvKyV2Sm6",
          DeviceFullWidthShadow: "_33ittd22VgVN6fUvIAgkqu",
          VideoDisclaimer: "_2FW4jsZDS7ltbcDrOQStiW",
          DeviceWrapper: "_3DCMQY1PEeYS2E7r8NJXKQ",
          CapsuleWrapper: "_1JhQMb3X6rKYyPqZWOZG5w",
          HardwareBannerCtn: "_2L4eqs1UZ1QEjRC1S8qiJA",
          TrailerCtn: "_3LbKJsBRhn7hEnOSlKZd64",
        };
      },
      48963: (_) => {
        _.exports = {
          "duration-app-launch": "800ms",
          strMediumWidth: "800px",
          strMaxMobileWidth: "600px",
          MediaContainer: "_17AnAUol6F9ESSlAVOkOR-",
          MediaContainerMM: "_1Tu2CrBa6Z3v2u5ysIVCgY",
          ScreenshotThumbnailRow: "_3wPvOiq2zq3UJa_V5yq1BU",
          HilightGrid: "afMTFv3mQcpX11KsRQBFe",
          MainMediaCtn: "_2aKn0S9zGN4Xj9bwODcL4q",
          VideoThumbnail: "_2GhyyIvyUNXt2pBSQ23xKP",
          ScreenshotDisplayCtn: "_2syrNfuweRm7tMaHtnsLIS",
          MainCapsuleWithHover: "_20P19pxcCCC_Er1aQHk0wG",
          MainCapsule: "_27-W3skVjYBfNp6t1cTtnj",
          AppDetails: "_3YbIHh6FwfB9zQVNU18OSy",
          GameName: "_2aMRa54ScYF_qLXc6-dsRN",
          ShortDesc: "_10C6v9rot6kwBCcXpZVENg",
          ThumbnialClickable: "_1RTH8HUO6crMdjXdJjz_-U",
          ThumbnailCtn: "_2s3nR6hnRPmnLN1kr5khr-",
          ThumbnailButton: "_1WQUuWkffHs6P77xq6DMhs",
          videoPlaying: "_1_yxluHJLi2TiNbG5b2KYk",
          VideoPlayButton: "KqB15I24fyQtJzf6XANUI",
          VideoLargeContainer: "_3n_2JdJT5wZ8s9KG2vtLYz",
          CloseButton: "_2dgOJd4j8-hJA92PrLWqZT",
          VideoPopupContainers: "_1_L84gO810flUzqiuUkG7H",
          VideoLarge: "_3AL75Io6tlvBgexvKuaPG0",
        };
      },
    },
  ]);
})();
