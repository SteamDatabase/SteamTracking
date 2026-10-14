/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(() => {
  (self.webpackChunkstore = self.webpackChunkstore || []).push([
    [86991],
    {
      93256: (W, D, t) => {
        "use strict";
        t.d(D, { u: () => d });
        var e = t(7850),
          u = t(29630),
          T = t(13465);
        function d(h) {
          const { strImageToken: M, language: P, strAltText: B } = h,
            R = (0, u.z5)(M, P);
          return R
            ? typeof R == "string"
              ? (0, e.jsx)("img", { src: R, alt: B })
              : (0, e.jsx)(T.c, { rgSources: R, strAltText: B })
            : null;
        }
      },
      29630: (W, D, t) => {
        "use strict";
        t.d(D, { zU: () => i, z5: () => U });
        var e = t(38340),
          u = t(9046),
          T = t(99412),
          d = t(72604),
          h = t(7742),
          M = t(72849),
          P = t(76559),
          B = t(71742),
          R = t(34592),
          G = t(51746),
          g = t(72609),
          b = t(7850),
          O = t(90626);
        function n(s, c) {
          return `${s}/${c}`;
        }
        const a = {},
          x = O.createContext(a);
        function A(s) {
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
        function F(s) {
          const c = [],
            l = new Set();
          for (const o of s.matchAll(L)) {
            const v = Number.parseInt(o[1]),
              f = o[2],
              C = n(v, f);
            v > 0 &&
              !l.has(C) &&
              (l.add(C), c.push({ clanAccountID: v, hashAndExt: f }));
          }
          return c;
        }
        function U(s, c, l = 0) {
          const o = m();
          return K(s, c, l, o);
        }
        async function z(s, c, l = 0) {
          return K(s, c, l);
        }
        function K(s, c, l = 0, o) {
          if (!s || s.length == 0) return null;
          if (s?.startsWith(e.lw)) return i.ReplacementTokenToClanImageURL(s);
          if (s?.startsWith(e.eg)) {
            const v = i.GetBaseURL(),
              f = s.substring(e.eg.length + 1),
              C = parseInt(f.substring(0, f.indexOf("/"))),
              S = f.substring(f.indexOf("/") + 1),
              j = i.GenerateURLFromHashAndExt(C, S);
            if (o?.[n(C, S)] === !1) return j;
            const r = i
              .GetLocalizedClanImageFileNames(S, c)
              .map((p) => v + C + "/" + p + "?t=" + l);
            return r.push(j), r;
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
              (s.file_type != null ? (0, G.EG)(s.file_type) : null) ?? ".jpg"
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
              v = [l + "/" + (0, T.LgB)(c) + o];
            return (
              c == T.Pn1 && v.push(l + "/" + (0, T.x6o)((0, T.LgB)(c)) + o), v
            );
          },
          GenerateURLFromHashAndExt(s, c, l = u.wI.full) {
            return this.GenerateURLFromHashAndExtAndLang(
              s,
              c,
              l,
              T.xPp,
              void 0,
            );
          },
          GenerateURLFromHashAndExtAndLang(s, c, l = u.wI.full, o, v) {
            s instanceof P.b && (s = s.GetAccountID());
            let f = this.GetBaseURL();
            const C = o != null && o != T.xPp;
            if (l == u.wI.full && !C) return f + s + "/" + c;
            {
              let S = c.substring(c.lastIndexOf(".")),
                j = c.substring(0, c.length - S.length);
              return !C || o == T.Bhc || v != "localized_image_group"
                ? f + s + "/" + j + l + S
                : f + s + "/" + j + "/" + (0, T.x6o)((0, T.LgB)(o)) + S;
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
            return (0, G.ab)(s);
          },
          async AsyncGetImageResolution(s, c, l, o, v) {
            const f = c + this.GetExtensionString({ file_type: l }),
              C = this.GenerateEditableURLFromHashAndExt(s, f);
            return await this.AsyncGetImageResolutionInternal(C, o, v);
          },
          async AsyncGetImageResolutionInternal(s, c, l) {
            const o = (0, h.x0)();
            let v = new Image();
            (v.crossOrigin = "anonymous"),
              (v.onerror = (j) => {
                const r = { success: d.zi };
                l ||
                  ((r.err_msg =
                    "Load fail on url " +
                    s +
                    " with error: " +
                    (0, R.H)(j).strErrorMsg),
                  console.error(r.err_msg)),
                  (r.success = d.zi),
                  o.resolve(r);
              }),
              (v.onload = () => {
                const j = { success: d.zi };
                if (
                  ((j.width = v.width),
                  (j.height = v.height),
                  !(v.width > 0) || !(v.height > 0))
                ) {
                  (0, B.wT)(
                    !1,
                    "unexpected image resolution discovered for strURL: " + s,
                  ),
                    (j.err_msg = "No resolution reported for url " + s),
                    o.resolve(j);
                  return;
                }
                (j.success = d.R), o.resolve(j);
              }),
              (v.src = s),
              c.token.promise.catch(() => {
                (v.onload = () => {}),
                  (v.onerror = () => {}),
                  o.resolve({ success: d.e9 });
              });
            let f;
            const C = new Promise((j, r) => {
              f = setTimeout(() => r(), 1e4);
            });
            let S;
            try {
              S = await Promise.race([C, o.promise]);
            } catch {
              S = { success: d._3, err_msg: "We timed out processing images" };
            } finally {
              clearTimeout(f);
            }
            return S;
          },
          BIsClanImageVideo(s) {
            return s.file_type == M.bg.nn || s.file_type == M.bg.pJ;
          },
        };
      },
      9046: (W, D, t) => {
        "use strict";
        t.d(D, { pb: () => T, wI: () => u });
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
        var u = ((d) => (
          (d.full = ""),
          (d.background_main = "_960x311"),
          (d.background_mini = "_480x156"),
          (d.capsule_main = "_400x225"),
          (d.spotlight_main = "_1054x230"),
          d
        ))(u || {});
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
      7742: (W, D, t) => {
        "use strict";
        t.d(D, { x0: () => u });
        async function e(d) {
          try {
            return await d;
          } catch (h) {
            console.error(h);
            return;
          }
        }
        function u() {
          let d, h;
          return {
            promise: new Promise((P, B) => {
              (d = P), (h = B);
            }),
            resolve: d,
            reject: h,
          };
        }
        function T(d) {
          return new Promise((h) => setTimeout(h, d));
        }
      },
      95414: (W, D, t) => {
        "use strict";
        t.d(D, { j: () => b, u: () => O });
        var e = t(7850),
          u = t(90626),
          T = t(24660),
          d = t(83482),
          h = t(72865),
          M = t(77200),
          P = t(53113),
          B = t(68094),
          R = t(72609),
          G = t(3166);
        function g(n) {
          if (n) {
            if ("appid" in n) return "app";
            if ("bundleid" in n) return "bundle";
            if ("packageid" in n) return "sub";
          }
        }
        function b(n) {
          const {
              id: a,
              hoverClassName: x,
              fnGetIDOverride: A,
              fnHoverState: m,
              disableScreenshots: L,
              children: F,
            } = n,
            U = u.useRef(null),
            z = u.useCallback(
              (i) => {
                const s = g(a);
                s &&
                  (m && m(!0),
                  window.GameHover &&
                    (U.current &&
                      L &&
                      (U.current.dataset.hoverDisableScreenshots = "true"),
                    window.GameHover(A ? A() : U.current, i, "global_hover", {
                      type: s,
                      id: (0, B.G$)(a).id,
                      v6: 1,
                    })));
              },
              [m, A, L, a],
            ),
            K = u.useCallback(
              (i) => {
                g(a) &&
                  (m && i.relatedTarget && m(!1),
                  window.HideGameHover &&
                    window.HideGameHover(
                      A ? A() : U.current,
                      i,
                      "global_hover",
                    ));
              },
              [a, m, A],
            );
          return (0, e.jsx)("div", {
            ref: U,
            className: x,
            onMouseEnter: z,
            onMouseLeave: K,
            onFocus: z,
            onBlur: K,
            children: F,
          });
        }
        function O(n) {
          const {
              id: a,
              strExtraParams: x,
              fnOnClickOverride: A,
              strOverrideURL: m,
            } = n,
            L = (0, h.n9)(),
            F = (0, M.w)(),
            U = (0, P.NT)(
              m ||
                (a && "creatorid" in a
                  ? (0, d.It)(
                      `${R.TS.STORE_BASE_URL}curator/${((0, B.G$))(a).id}${x ? `?${x}` : ""}`,
                      L,
                      F,
                    )
                  : (0, d.It)(
                      `${R.TS.STORE_BASE_URL}${g(a)}/${((0, B.G$))(a).id}${x ? `?${x}` : ""}`,
                      L,
                      F,
                    )),
            );
          return (0, e.jsx)(b, {
            ...n,
            children: (0, e.jsx)(T.Ii, {
              className: n.className,
              href: A ? void 0 : U,
              target: R.TS.IN_CLIENT || A ? void 0 : "_blank",
              rel: "noopener noreferrer",
              onClick: A,
              children: n.children,
            }),
          });
        }
      },
      63639: (W, D, t) => {
        "use strict";
        t.d(D, { S: () => G });
        var e = t(7850),
          u = t(12997),
          T = t(90626),
          d = t(52438);
        const h = {
            name: "trailerPrefs",
            options: { path: "/", secure: !0, maxAge: 720 * 60 * 60 * 1e3 },
            preferenceControls: { isTechnicallyNecessary: !0 },
          },
          M = { flVolume: 0.8, bMuted: !0 };
        function P(g) {
          return g.flVolume === M.flVolume && g.bMuted === M.bMuted;
        }
        function B() {
          try {
            const g = (0, d.j_)(h);
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
        function R(g) {
          P(g) || Object.keys(g).length == 0
            ? (0, d.Y1)(h)
            : (0, d.eV)(h, JSON.stringify(g));
        }
        function G(g) {
          let { children: b } = g;
          const [O, n] = (0, T.useState)(() => B());
          return (
            (0, T.useEffect)(() => {
              R(O);
            }, [O]),
            (0, e.jsx)(u.v, {
              playerVolume: O.flVolume,
              setPlayerVolume: (a) => n((x) => ({ ...x, flVolume: a })),
              audioMuted: O.bMuted,
              setAudioMuted: (a) => n((x) => ({ ...x, bMuted: a })),
              children: b,
            })
          );
        }
      },
      64457: (W, D, t) => {
        "use strict";
        t.d(D, { PE: () => K, Yg: () => F, _t: () => U, gO: () => s });
        var e = t(7850),
          u = t(21721),
          T = t(25046),
          d = t(40358),
          h = t(68094),
          M = t(41032),
          P = t(90626),
          B = t(62571),
          R = t(40426),
          G = t(36118),
          g = t(36707),
          b = t(18210),
          O = t(72609),
          n = t(96538),
          a = t(85599),
          x = t(64271),
          A = t(48963),
          m = t.n(A),
          L = t(50573);
        function F(l) {
          const { id: o, bPopOutTrailerPlayback: v } = l,
            { data: f } = (0, d.Yo)(o),
            { data: C } = (0, d.j4)(o),
            { data: S } = (0, d.J$)(o),
            [j, r] = (0, P.useState)(!1),
            [p, E] = (0, P.useState)(!1),
            y = (0, M.dy)(),
            _ = f?.highlights?.filter((V) => !y || V.all_ages),
            I = _ && _?.length > 0 ? _[0] : void 0,
            J = P.useCallback(() => {
              I && (v ? E(!0) : r((V) => !V));
            }, [I, v]);
          if (!S)
            return (0, e.jsx)("div", {
              className: (0, g.A)(m().HilightGrid, m().MediaContainer),
              children: (0, e.jsx)(a.t, { size: "medium" }),
            });
          const H = I
            ? (0, e.jsx)(c, {
                trailer: I,
                bPlayVideo: j,
                fnTogglePlayTrailer: J,
              })
            : null;
          return !I &&
            !(C && C.all_ages_screenshots && C.all_ages_screenshots.length > 0)
            ? null
            : (0, e.jsxs)("div", {
                className: (0, g.A)(m().HilightGrid, m().MediaContainer),
                children: [
                  (0, e.jsx)(U, {
                    elFeaturedInCenter: H,
                    storeItemScreenshots: C,
                    trailer: I,
                    id: o,
                    name: S.name || "",
                  }),
                  v
                    ? (0, e.jsx)(K, {
                        id: o,
                        bShowModal: p,
                        hideModal: () => E(!1),
                      })
                    : (0, e.jsx)(z, {
                        name: S.name || "",
                        trailer: I,
                        bPlayVideo: j,
                        fnTogglePlayTrailer: J,
                        bControls: !0,
                      }),
                ],
              });
        }
        function U(l) {
          const {
              elFeaturedInCenter: o,
              id: v,
              name: f,
              trailer: C,
              storeItemScreenshots: S,
              featureElementclassName: j,
              bUseTrailerAsFirstThumb: r,
              bNoScreenShotModals: p,
            } = l,
            [E, y] = P.useState(void 0),
            [_, I] = (0, R.XC)(),
            J = (0, M.dy)(),
            H = (0, P.useRef)(null),
            [V, q] = (0, P.useState)(0);
          if (!v) return null;
          const $ = o || (E !== void 0 && E !== -1) ? E : 0,
            w = new Array(),
            Y = new Array();
          r &&
            C &&
            (w.push(
              (0, e.jsx)(
                c,
                {
                  trailer: C,
                  bPlayVideo: !1,
                  fnTogglePlayTrailer: () => {},
                  onMouseEnter: () => y(0),
                  onMouseLeave: () => {
                    const N = H.current;
                    N && q(N.currentTime);
                  },
                },
                "trail_thumb_",
              ),
            ),
            Y.push(
              (0, e.jsx)(
                z,
                {
                  ref: H,
                  name: f,
                  trailer: C,
                  bControls: !1,
                  bPlayVideo: !0,
                  startTime: V,
                  fnTogglePlayTrailer: () => {},
                },
                "trail_inline",
              ),
            ));
          const se = (
            J ? S?.all_ages_screenshots : S?.mature_content_screenshots
          )?.filter(Boolean);
          if (
            (se?.forEach((N, Q) => {
              if ((o || Q > 0) && w.length < 3) {
                const k = (0, u.bu)(N, "thumb"),
                  re = (0, u.bu)(N, "600x338"),
                  ae = w.length;
                w.push(
                  (0, e.jsx)(
                    "div",
                    {
                      className: (0, g.A)({
                        [m().ThumbnailCtn]: !0,
                        [m().ThumbnialClickable]: !p,
                      }),
                      onMouseEnter: () => y(ae),
                      children: p
                        ? (0, e.jsx)("img", { src: k, alt: f })
                        : (0, e.jsx)("button", {
                            type: "button",
                            className: m().ThumbnailButton,
                            onClick: () => {
                              const te = [...(se || [])];
                              if (te.length > 0) {
                                for (let Z = 0; Z < Q; ++Z) {
                                  const ne = te.shift();
                                  ne && te.push(ne);
                                }
                                _(te.map((Z) => (0, u.bu)(Z, "full")));
                              }
                            },
                            children: (0, e.jsx)("img", { src: k, alt: f }),
                          }),
                    },
                    Q + "_small_" + k,
                  ),
                ),
                  Y.push(
                    (0, e.jsx)(
                      "div",
                      {
                        className: m().ScreenshotDisplayCtn,
                        children: (0, e.jsx)("img", { src: re, alt: f }),
                      },
                      Q + "_big_" + k,
                    ),
                  );
              }
            }),
            !o && (!Y || Y.length == 0))
          )
            return null;
          const ee = w.slice(0, 3),
            X = Array.from({ length: Math.max(0, 3 - ee.length) });
          return (0, e.jsxs)(e.Fragment, {
            children: [
              I,
              (0, e.jsx)("div", {
                className: j || m().MainMediaCtn,
                children:
                  o && ($ === -1 || $ === void 0)
                    ? (0, e.jsx)(e.Fragment, { children: o })
                    : (0, e.jsx)(e.Fragment, {
                        children: $ !== void 0 && Y[$],
                      }),
              }),
              ee.length > 0 &&
                (0, e.jsxs)("div", {
                  className: m().ScreenshotThumbnailRow,
                  onMouseLeave: () => y(-1),
                  children: [
                    ee,
                    X.map((N, Q) =>
                      (0, e.jsx)(
                        "div",
                        { className: m().ThumbnailCtn },
                        `app_${(0, h.ER)(v)}_${Q}`,
                      ),
                    ),
                  ],
                }),
            ],
          });
        }
        function z(l) {
          const {
            ref: o,
            name: v,
            trailer: f,
            bControls: C,
            bPlayVideo: S,
            fnTogglePlayTrailer: j,
            startTime: r,
          } = l;
          if (
            ((0, P.useEffect)(() => {
              const E = o?.current;
              if (r != null && r > 0 && E) {
                const y = () => {
                  E.currentTime = r || 0;
                };
                return (
                  E.addEventListener("loadedmetadata", y),
                  () => {
                    E.removeEventListener("loadedmetadata", y);
                  }
                );
              }
            }, [o, r]),
            !f)
          )
            return null;
          let p = (0, g.A)(m().VideoLargeContainer, S && m().videoPlaying);
          return (0, e.jsxs)("div", {
            className: p,
            onClick: j,
            role: "presentation",
            children: [
              (0, e.jsx)(L.hj, {
                name: v,
                trailerCategory: f.trailer_category,
                trailerDisplay: L.g,
                mouseOver: !1,
              }),
              !!(S && f.microtrailer) &&
                (0, e.jsx)("video", {
                  className: m().VideoLarge,
                  ref: o,
                  controls: C,
                  autoPlay: !0,
                  loop: !0,
                  muted: !0,
                  poster: r != null && r > 0 ? void 0 : f.screenshot_full,
                  children: f.microtrailer?.map((E) =>
                    O.TS.IN_CLIENT && E.type == "video/mp4"
                      ? null
                      : (0, e.jsx)(
                          "source",
                          { src: (0, T.M4)(f, E.filename || ""), type: E.type },
                          E.filename,
                        ),
                  ),
                }),
              C &&
                (0, e.jsx)("button", {
                  type: "button",
                  className: m().CloseButton,
                  "aria-label": (0, b.we)("#Button_Close"),
                  children: (0, e.jsx)(G.sED, {}),
                }),
            ],
          });
        }
        function K(l) {
          return l.bShowModal ? (0, e.jsx)(i, { ...l }) : null;
        }
        function i(l) {
          const { id: o, bShowModal: v, trailerBaseID: f, hideModal: C } = l,
            { data: S } = (0, d.J$)(o),
            j = (0, T.kB)(o),
            r = (0, P.useMemo)(() => {
              if (!(!j || j.length == 0)) {
                if (f) {
                  const H = j.find((V) => V.trailer_base_id == f);
                  if (H) return H;
                }
                return j[0];
              }
            }, [j, f]),
            p = P.useId(),
            E = P.useId(),
            {
              rgDashTrailers: y,
              rgHlsTrailers: _,
              strCaptionManufest: I,
              strScreenshot: J,
            } = (0, P.useMemo)(() => {
              if (!r)
                return {
                  rgDashTrailers: [],
                  rgHlsTrailers: [],
                  strCaptionManufest: "",
                  strScreenshot: "",
                };
              const { rgDashTrailers: H, rgHlsTrailers: V } = (0, T.hg)(r);
              return {
                rgDashTrailers: H,
                rgHlsTrailers: V,
                strCaptionManufest: (0, T.Wv)(r),
                strScreenshot: (0, T.hl)(r),
              };
            }, [r]);
          return !r || !r.adaptive_trailers || y.length == 0
            ? null
            : (0, e.jsx)(n.EN, {
                active: v,
                children: (0, e.jsxs)(n.eV, {
                  "aria-labelledby": (0, B.q)(p, E),
                  bAllowFullSize: !0,
                  bOKDisabled: !0,
                  closeModal: C,
                  children: [
                    (0, e.jsx)("div", {
                      className: m().VideoPopupContainers,
                      children: (0, e.jsx)(x.P, {
                        dashManifests: y,
                        hlsManifest: _[0] || "",
                        screenshot: J,
                        altText: r.trailer_name,
                        muteWhenAutoplayBlocked: !0,
                        captionManifest: I,
                      }),
                    }),
                    (0, e.jsx)("div", {
                      id: p,
                      style: { display: "none" },
                      children: S?.name || "",
                    }),
                    (0, e.jsx)("div", {
                      id: E,
                      style: { display: "none" },
                      children: r.trailer_name,
                    }),
                  ],
                }),
              });
        }
        function s(l) {
          const { appid: o, trailerBaseID: v, bShowModal: f, hideModal: C } = l,
            S = (0, P.useMemo)(() => ({ appid: o }), [o]);
          return (0, e.jsx)(K, {
            id: S,
            trailerBaseID: v,
            bShowModal: f,
            hideModal: C,
          });
        }
        function c(l) {
          const {
            trailer: o,
            fnTogglePlayTrailer: v,
            bPlayVideo: f,
            onMouseEnter: C,
            onMouseLeave: S,
          } = l;
          return (0, e.jsxs)("div", {
            className: (0, g.A)({
              [m().VideoThumbnail]: !f,
              [m().videoPlaying]: f,
              [m().ThumbnailCtn]: !0,
            }),
            onClick: v,
            onMouseEnter: C,
            onMouseLeave: S,
            role: "presentation",
            children: [
              (0, e.jsx)("img", { src: (0, T.hl)(o), alt: o.trailer_name }),
              (0, e.jsx)("button", {
                type: "button",
                className: m().VideoPlayButton,
                "aria-label": (0, b.we)("#Playback_Play_Tooltip"),
                children: (0, e.jsx)(G.jGG, {}),
              }),
            ],
          });
        }
      },
      85491: (W, D, t) => {
        "use strict";
        t.d(D, { T: () => p });
        var e = t(7850),
          u = t(48156),
          T = t(96378),
          d = t(95414),
          h = t(46727),
          M = t(84607),
          P = t(44267),
          B = t(41188),
          R = t(80104),
          G = t(77459),
          g = t(29245),
          b = t(72838),
          O = t(39905),
          n = t(3348),
          a = t(40358),
          x = t(29522),
          A = t(72865),
          m = t(75844),
          L = t(90626),
          F = t(88743),
          U = t(83482),
          z = t(64457),
          K = t(76532),
          i = t.n(K),
          s = t(68094),
          c = t(90740),
          l = t(61431);
        function o(E) {
          const {
              id: y,
              bPurchaseOptionsExpanded: _,
              fnCollapseOptions: I,
              bPreferAssetWithoutOverride: J,
            } = E,
            { data: H } = (0, a.is)(y),
            V = (0, L.useRef)(null);
          if (!H) return null;
          const q = H.purchase_options;
          return q
            ? (0, e.jsx)(c.A, {
                nodeRef: V,
                in: _,
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
                  ref: V,
                  className: i().BundleContentsCtnTransition,
                  children: [
                    (0, e.jsx)("div", {
                      className: i().BundleContentsCtn,
                      children: q
                        .filter(($) => !!$.packageid)
                        .map(($) =>
                          (0, e.jsx)(
                            "div",
                            {
                              className: i().BundleContentItem,
                              children: (0, e.jsx)(l.p, {
                                id: $.packageid || 0,
                                type: "sub",
                                bForceSmallCapsuleArt: !0,
                                bPreferAssetWithoutOverride: J,
                              }),
                            },
                            "purchaseitem_" + (0, s.ER)(y) + "_" + $.packageid,
                          ),
                        ),
                    }),
                    (0, e.jsx)("div", {
                      onClick: I,
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
        var v = t(4705),
          f = t(6698),
          C = t(38081),
          S = t.n(C),
          j = t(96155),
          r = t(36707);
        const p = (0, m.PA)((E) => {
          const { id: y, type: _ } = E,
            I = (0, F.zl)(y, _),
            {
              bHidePrice: J,
              bShowDemoButton: H,
              bPreferDemoStorePage: V,
              bShowPurchaseOptionsButton: q,
              bUseSubscriptionLayout: $,
              bPreferAssetWithoutOverride: w,
            } = E,
            [Y, se] = L.useState(!1),
            ee = () => se(!Y),
            { data: X } = (0, a.U2)(I),
            { data: N } = (0, a.wl)(I),
            { data: Q } = (0, a.by)(I),
            { data: k } = (0, a.xz)(I),
            re = (0, x._Z)(I),
            ae = (0, A.n9)();
          if (!X || !N)
            return (0, e.jsx)(T.h, {
              capsules_per_row: [1],
              is_expanded_display: !0,
            });
          const te = (0, U.L3)(ae),
            Z = X.item_type == u.c6.qI;
          return (0, e.jsx)("div", {
            className: (0, r.A)(
              i().StoreSaleWidgetContainer,
              i().LibraryAssetExpandedDisplay,
              "LibraryAssetExpandedDisplay",
            ),
            children: (0, e.jsxs)(f.oj, {
              appid: Z ? X.appid : void 0,
              children: [
                (0, e.jsxs)("div", {
                  className: i().StoreSaleWidgetLibraryAssetExtendedTop,
                  children: [
                    (0, e.jsx)("div", {
                      className: (0, r.A)(i().StoreSaleWidgetLeft),
                      children: (0, e.jsx)(d.u, {
                        id: I,
                        bPreferDemoStorePage: V,
                        children: (0, e.jsxs)("div", {
                          className: i().StoreSaleWidgetImage,
                          children: [
                            (0, e.jsx)(h.V, { appids: re }),
                            (0, e.jsx)(M.a, {
                              id: I,
                              imageType: "library",
                              bPreferAssetWithoutOverride: w,
                            }),
                            (0, e.jsx)(j.J, { id: I }),
                          ],
                        }),
                      }),
                    }),
                    (0, e.jsxs)("div", {
                      className: i().StoreSaleWidgetCrossCenterRight,
                      children: [
                        Z &&
                          (0, e.jsx)(P.E, {
                            id: I,
                            classOverride: (0, r.A)(
                              S().WishlistButtonNotTop,
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
                                N.short_description &&
                                  N.short_description.length > 0 &&
                                  (0, e.jsx)("div", {
                                    className: (0, r.A)(
                                      i().StoreSaleWidgetShortDesc,
                                      "StoreSaleWidgetShortDesc",
                                    ),
                                    children: N.short_description,
                                  }),
                                (0, e.jsx)(B.n, {
                                  rgTagIDs: k
                                    ? k.slice(0, 10).map((ne) => ne.tagid || 0)
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
                                          children: (0, n.CC)(Q),
                                        }),
                                      ),
                                    }),
                                    N.developers &&
                                      N.developers.length > 0 &&
                                      (0, e.jsxs)("div", {
                                        className: i().StoreSaleItemDev,
                                        children: [
                                          O.Z.Localize(
                                            "#CreatorHome_DevelopedBy",
                                          ),
                                          (0, e.jsx)("span", {
                                            children: N.developers[0].name,
                                          }),
                                        ],
                                      }),
                                    N.publishers &&
                                      N.publishers.length > 0 &&
                                      (0, e.jsxs)("div", {
                                        className: i().StoreSaleItemDev,
                                        children: [
                                          O.Z.Localize(
                                            "#CreatorHome_PublishedBy",
                                          ),
                                          (0, e.jsx)("span", {
                                            children: N.publishers[0].name,
                                          }),
                                        ],
                                      }),
                                  ],
                                }),
                              ],
                            }),
                            (0, e.jsx)("div", {
                              className: i().StoreSaleLibraryAssetWidgetRight,
                              children: (0, e.jsx)(z.Yg, {
                                id: I,
                                bPopOutTrailerPlayback: !0,
                              }),
                            }),
                          ],
                        }),
                        (0, e.jsx)("div", {
                          className: i().StoreSaleItemReview,
                          children: (0, e.jsx)(R.J, { id: I }),
                        }),
                        (0, e.jsx)("div", {
                          className: i().CapsuleBottomBar,
                          children:
                            $ && Z
                              ? (0, e.jsx)(G.E, {
                                  appid: X.appid,
                                  bIsMuted: !1,
                                })
                              : (0, e.jsxs)(e.Fragment, {
                                  children: [
                                    (0, e.jsx)(g.Q, { id: I }),
                                    (0, e.jsx)(v.w, {
                                      id: I,
                                      bShowDemoButton: H,
                                      bHidePrice: J,
                                      bShowPurchaseOptionsButton: q,
                                      fnOnPurchaseOptionsClick: ee,
                                      bHideWishlistButton: X.is_coming_soon,
                                    }),
                                  ],
                                }),
                        }),
                        (0, e.jsxs)("div", {
                          className: i().StoreSaleWidgetBgTint,
                          children: [
                            (0, e.jsx)(b.G, {
                              id: I,
                              bPreferAssetWithoutOverride: w,
                            }),
                            (0, e.jsx)(j.J, { id: I }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
                (0, e.jsx)(o, {
                  id: I,
                  bPurchaseOptionsExpanded: Y,
                  fnCollapseOptions: ee,
                  bPreferAssetWithoutOverride: w,
                }),
              ],
            }),
          });
        });
      },
      38340: (W, D, t) => {
        "use strict";
        t.d(D, { eg: () => u, lw: () => e, qR: () => T });
        const e = "{STEAM_CLAN_IMAGE}",
          u = "{STEAM_CLAN_LOC_IMAGE}",
          T = "{STEAM_APP_IMAGE}";
      },
      51746: (W, D, t) => {
        "use strict";
        t.d(D, {
          EG: () => h,
          II: () => b,
          Uz: () => R,
          aL: () => B,
          ab: () => T,
          zB: () => g,
        });
        var e = t(7742),
          u = t(72849);
        function T(n) {
          const a = n.toLowerCase();
          if (a.endsWith(".jpg") || a.endsWith(".jpeg")) return "image/jpeg";
          if (a.endsWith(".png")) return "image/png";
          if (a.endsWith(".gif")) return "image/gif";
          if (a.endsWith(".mp4")) return "video/mp4";
          if (a.endsWith(".webm")) return "video/webm";
          if (a.endsWith(".srt")) return "text/srt";
          if (a.endsWith(".vtt")) return "text/vtt";
          if (a.endsWith(".webp")) return "image/webp";
        }
        function d(n) {
          switch (n) {
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
              n,
            ),
            ".jpg"
          );
        }
        function h(n) {
          switch (n) {
            case u.bg.iS:
              return ".jpg";
            case u.bg.CK:
              return ".gif";
            case u.bg.dU:
              return ".png";
            case u.bg.pJ:
              return ".webm";
            case u.bg.nn:
              return ".mp4";
            case u.bg.pi:
              return ".srt";
            case u.bg.k7:
              return ".vtt";
            case u.bg.wD:
              return ".webp";
          }
        }
        function M(n) {
          const a = (0, e.x0)(),
            x = new Image();
          return (
            (x.onload = () => a.resolve(x)),
            (x.onerror = (A) => {
              console.error("LoadImage failed to load the image, details", A),
                a.resolve(void 0);
            }),
            (x.src = n),
            a.promise
          );
        }
        function P(n) {
          const a = (0, e.x0)(),
            x = document.createElement("video");
          return (
            (x.preload = "metadata"),
            x.addEventListener("loadedmetadata", () => a.resolve(x)),
            (x.onerror = (A) => {
              console.error("LoadVideo failed to load the video, details", A),
                a.resolve(void 0);
            }),
            (x.src = n),
            a.promise
          );
        }
        function B(n) {
          return n.startsWith("image/");
        }
        function R(n) {
          return n.startsWith("video/");
        }
        function G(n, a) {
          return a ? P(n) : M(n);
        }
        async function g(n, a) {
          if (a) return P(URL.createObjectURL(n));
          {
            const x = (0, e.x0)(),
              A = new FileReader();
            (A.onload = () => x.resolve(A.result ?? void 0)),
              (A.onerror = () => {
                console.error(
                  "GetMediaElementFromFile failed to load the image, details",
                  A.error,
                ),
                  x.resolve(void 0);
              }),
              A.readAsDataURL(n);
            const m = await x.promise;
            return m ? M(m.toString()) : void 0;
          }
        }
        function b(n) {
          return n
            ? n instanceof HTMLVideoElement
              ? { width: n.videoWidth, height: n.videoHeight }
              : { width: n.width, height: n.height }
            : { width: 0, height: 0 };
        }
        function O(n, a) {
          if (!a) return n;
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
          for (const A of a)
            x.has(A.name.toLowerCase()) || (n[A.name] = A.value);
          return n;
        }
      },
      13465: (W, D, t) => {
        "use strict";
        t.d(D, { c: () => T });
        var e = t(7850),
          u = t(90626);
        function T(d) {
          const {
              rgSources: h,
              onIncrementalError: M,
              onError: P,
              strAltText: B,
              ref: R,
              ...G
            } = d,
            [g, b] = u.useState(0),
            O = u.useMemo(() => JSON.stringify(h), [h]),
            [n, a] = u.useState(O);
          n != O && (a(O), b(0));
          const x = u.useMemo(() => {
              let L = "";
              return (
                h && h.length > g && (L = h[g]),
                L ||
                  (console.warn(
                    "MultiSourceImage created with no image src",
                    d,
                    g,
                  ),
                  (L =
                    "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=")),
                L
              );
            }, [h, g, d]),
            A = u.useCallback(
              (L) => {
                M?.(L, h[g], g);
                const F = g + 1;
                F >= h.length && P && P(L), F < h.length && b(F);
              },
              [g, P, M, h],
            ),
            m = u.useRef(null);
          return (
            u.useImperativeHandle(
              R,
              () => ({ imgRef: m, nSourceIndex: g, nSourceLength: h.length }),
              [m, g, h],
            ),
            u.useEffect(() => {
              const L = m.current;
              L?.complete && L.naturalWidth == 0 && (L.src = L.src);
            }, []),
            (0, e.jsx)("img", { ref: m, ...G, src: x, onError: A, alt: B }, n)
          );
        }
      },
      27068: (W, D, t) => {
        "use strict";
        t.r(D), t.d(D, { default: () => j });
        var e = t(7850),
          u = t(93256),
          T = t(99412),
          d = t(24660),
          h = t(72609),
          M = t(74107),
          P = t(61431),
          B = t(21659),
          R = t(3166),
          G = t(85491);
        function g(r) {
          return (0, R.Qn)()
            ? (0, e.jsx)(P.p, { ...r })
            : (0, B.c5)()
              ? (0, e.jsx)(P.p, { ...r, bShowReviewSummary: !0 })
              : (0, e.jsx)(G.T, { ...r });
        }
        var b = t(63639),
          O = t(21721),
          n = t(25046),
          a = t(29522),
          x = t(40358),
          A = t(72865),
          m = t(64271),
          L = t(90626),
          F = t(25792),
          U = t(51079),
          z = t(36707),
          K = t(37882),
          i = t.n(K);
        function s(r) {
          const { appid: p, strUrlOverride: E } = r,
            y = (0, a.$5)(p),
            { data: _ } = (0, x.J$)(y);
          return (
            (0, L.useEffect)(() => {
              if (_) {
                const I = `${h.TS.STORE_BASE_URL}${_.store_url_path}`.replace(
                  "/app/",
                  E ?? "/verified/",
                );
                I != window.location.href &&
                  window.history.replaceState({}, "", I);
              }
            }, [_, E]),
            !_ || !y
              ? null
              : (0, e.jsx)(U.Ay, {
                  method: "verifiedprogram",
                  children: (0, e.jsx)(F.tH, {
                    children: (0, e.jsx)(l, { id: y }),
                  }),
                })
          );
        }
        function c(r) {
          const { id: p } = r,
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
                  (0, e.jsx)(d.Ii, {
                    className: i().Link,
                    href: `${h.TS.STORE_BASE_URL}greatondeck`,
                    children: M.F5.Localize("#VerifiedProgram_GreatOnDeck"),
                  }),
                ),
              }),
            ],
          });
        }
        function l(r) {
          const { id: p } = r;
          return (0, e.jsxs)("div", {
            className: i().Ctn,
            children: [
              (0, e.jsx)(o, { id: p }),
              (0, e.jsxs)("div", {
                className: (0, z.A)("page_content"),
                children: [
                  (0, e.jsx)(c, { id: p }),
                  (0, e.jsx)(C, { id: p }),
                  (0, e.jsx)(v, { id: p }),
                  (0, e.jsx)(f, {}),
                ],
              }),
            ],
          });
        }
        function o(r) {
          const { id: p } = r,
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
        function v(r) {
          const { id: p } = r;
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
        function f(r) {
          const p = (0, A.aL)(
            `${h.TS.STORE_BASE_URL}steamdeck?utm_source=verifiedpage`,
            "banner",
          );
          return (0, e.jsx)(d.Ii, {
            href: p,
            className: (0, z.A)(i().HardwareBannerCtn),
            children: (0, e.jsx)(S, {}),
          });
        }
        function C(r) {
          const { id: p } = r,
            { data: E } = (0, x.J$)(p),
            y = (0, n.TH)(p);
          if (!y) return null;
          const _ = `${h.TS.CLAN_CDN_ASSET_URL}images/39049601/8f21143ba4f6331e117568740aa286e975a5afb1.png`,
            { rgDashTrailers: I, rgHlsTrailers: J } = (0, n.hg)(y);
          return (0, e.jsxs)("div", {
            className: i().DeviceFullWidthShadow,
            children: [
              (0, e.jsxs)("div", {
                className: (0, z.A)(i().DeviceWrapper),
                children: [
                  (0, e.jsx)(b.S, {
                    children: (0, e.jsx)("div", {
                      className: i().TrailerCtn,
                      children: (0, e.jsx)(m.P, {
                        dashManifests: I,
                        hlsManifest: J[0],
                        screenshot:
                          y.screenshot_full ?? y.screenshot_medium ?? "",
                        altText: E?.name ?? "",
                        muteWhenAutoplayBlocked: !0,
                      }),
                    }),
                  }),
                  (0, e.jsx)("img", {
                    src: _,
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
        function S(r) {
          const p = (0, B.zI)(),
            E = (0, T.sfN)(h.TS.LANGUAGE);
          return (0, e.jsx)(u.u, {
            language: E,
            strAltText: M.F5.Localize("#VerifiedProgram_DeckShopBannerAlt"),
            strImageToken: p
              ? "{STEAM_CLAN_LOC_IMAGE}/39049601/6e0ec24257ee5ada6e922c2130eaa75ce83747e8.jpg"
              : "{STEAM_CLAN_LOC_IMAGE}/39049601/c18308dc60fd94678bb348608ddc0d6b8fdb11ab.jpg",
          });
        }
        function j(r) {
          const {
            match: {
              params: { appid: p },
            },
          } = r;
          return (0, e.jsx)(s, { appid: Number.parseInt(p) });
        }
      },
      37882: (W) => {
        W.exports = {
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
      48963: (W) => {
        W.exports = {
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
          BackgroundAnimation: "_2YqbTh9tmcEZ5Jnz39bkD9",
          "ItemFocusAnim-darkerGrey-nocolor": "_2Z_byUU724LC7VmBpwzXvB",
          "ItemFocusAnim-darkerGrey": "_79YB3jhA36yeyMiLstJi",
          "ItemFocusAnim-darkGreySettings": "_1lSn5OE1oc5-oQjPkjBIYj",
          "ItemFocusAnim-darkGrey": "CFIUukdHjcI69ga9Z8nTA",
          "ItemFocusAnim-grey": "_3rAbB1f0HQs0x4Hqa5CdEA",
          "ItemFocusAnim-translucent-white-10": "_9gKqKsdvXOoawIPGtFkRF",
          "ItemFocusAnim-translucent-white-20": "_3zG2IKWY48X67SEt1vSIhf",
          "ItemFocusAnimBorder-darkGrey": "_1etJfunIGxvr5ni3LVgo74",
          "ItemFocusAnim-green": "_2y66jXVD5R6zd5LqMTWYVl",
          focusAnimation: "rfbikUhNdMJp8YaaOMaCW",
          hoverAnimation: "_2kGcR5txA30fIqTtD8sBNS",
        };
      },
    },
  ]);
})();
