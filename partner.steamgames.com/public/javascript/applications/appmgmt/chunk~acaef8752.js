/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(() => {
  (self.webpackChunkappmgmt_storeadmin =
    self.webpackChunkappmgmt_storeadmin || []).push([
    [23506],
    {
      7742: (H, W, t) => {
        "use strict";
        t.d(W, { x0: () => l, yI: () => T });
        async function e(w) {
          try {
            return await w;
          } catch (C) {
            console.error(C);
            return;
          }
        }
        function l() {
          let w, C;
          return {
            promise: new Promise((y, M) => {
              (w = y), (C = M);
            }),
            resolve: w,
            reject: C,
          };
        }
        function T(w) {
          return new Promise((C) => setTimeout(C, w));
        }
      },
      28922: (H, W, t) => {
        "use strict";
        t.d(W, { s: () => E });
        var e = t(7850),
          l = t(39905),
          T = t(90626),
          w = t(43465),
          C = t(58534),
          L = t(249),
          y = t(71421),
          M = t(27828),
          P = t.n(M);
        function a(n) {
          return `rgba(${n.rgb.r}, ${n.rgb.g}, ${n.rgb.b}, ${n.rgb.a})`;
        }
        function d(n) {
          const o = parseInt(n.slice(1), 16),
            r = (o >> 16) & 255,
            u = (o >> 8) & 255,
            s = o & 255;
          return `rgba(${r}, ${u}, ${s}, 1)`;
        }
        function E(n) {
          const { color: o, onChange: r, strTitle: u, disableAlpha: s } = n,
            [p, _] = (0, T.useState)(() => o || "rgba(255, 255, 255, 1)"),
            b = (0, T.useCallback)(async () => {
              if (!("EyeDropper" in window)) {
                alert(l.Z.Localize("#Sale_EyeDropperError"));
                return;
              }
              try {
                const c = (await new window.EyeDropper().open()).sRGBHex,
                  h = d(c);
                _(h), r(h);
              } catch (g) {
                console.warn(l.Z.Localize("#Sale_EyeDropperFailed"), g);
              }
            }, [r]);
          return (0, e.jsxs)("div", {
            className: P().ColorPickerDialog,
            children: [
              !!u && (0, e.jsx)(C.JU, { children: u }),
              (0, e.jsx)(w.xk, {
                onChange: (g) => {
                  const i = a(g);
                  _(i), r(i);
                },
                color: p,
                disableAlpha: s,
                className: P().ColorPickerCtn,
              }),
              (0, e.jsx)("div", {
                className: P().EyeDropperCtn,
                children: (0, e.jsx)(y.Gq, {
                  toolTipContent: l.Z.Localize("#Sale_BackgroundColorPicker"),
                  children: (0, e.jsx)(C.$n, {
                    className: P().EyeDropperBtn,
                    onClick: b,
                    children: (0, e.jsx)(L.O7b, {}),
                  }),
                }),
              }),
            ],
          });
        }
      },
      76846: (H, W, t) => {
        "use strict";
        t.d(W, { p: () => y });
        var e = t(7850),
          l = t(39905),
          T = t(90626),
          w = t(16346),
          C = t(28922);
        function L(M) {
          const {
              color: P,
              onChange: a,
              onRequestClose: d,
              disableAlpha: E,
              strTitle: n,
            } = M,
            o = (0, T.useRef)(null);
          return (
            (0, T.useEffect)(() => {
              const r = o.current?.ownerDocument ?? document,
                u = (p) => {
                  o.current && !o.current.contains(p.target) && d();
                },
                s = (p) => {
                  p.key === "Escape" && d();
                };
              return (
                r.addEventListener("pointerdown", u, !0),
                r.addEventListener("keydown", s, !0),
                () => {
                  r.removeEventListener("pointerdown", u, !0),
                    r.removeEventListener("keydown", s, !0);
                }
              );
            }, [d]),
            (0, e.jsx)("div", {
              ref: o,
              children: (0, e.jsx)(C.s, {
                color: P,
                disableAlpha: E,
                strTitle: n ?? l.Z.Localize("#Button_Color"),
                onChange: a,
              }),
            })
          );
        }
        function y() {
          return {
            openColorPicker: (0, T.useCallback)((P, a) => {
              let d = null;
              const E = () => d?.Hide();
              d = (0, w.lX)(
                (0, e.jsx)(L, {
                  color: a.color,
                  disableAlpha: a.disableAlpha,
                  strTitle: a.strTitle,
                  onChange: a.onChange,
                  onRequestClose: E,
                }),
                P,
                { bDisablePopTop: !0 },
              );
            }, []),
          };
        }
      },
      25279: (H, W, t) => {
        "use strict";
        t.d(W, {
          Ek: () => K,
          FZ: () => s,
          Fj: () => N,
          Hj: () => _,
          Ho: () => k,
          Kf: () => A,
          N_: () => z,
          PL: () => i,
          XY: () => oe,
          Yw: () => u,
          _d: () => b,
          cV: () => c,
          dM: () => D,
          on: () => g,
          qj: () => m,
          s4: () => ee,
          tW: () => p,
          vz: () => se,
          x: () => j,
          yu: () => Y,
        });
        var e = t(72849);
        const l = 622,
          T = 1920,
          w = 450,
          C = 800,
          L = 460,
          y = 2108,
          M = 300,
          P = 800,
          a = 300,
          d = 644,
          E = 337,
          n = 155,
          o = 433,
          r = 199,
          u = ["app_header_capsule", "app_main_capsule"],
          s = [
            "sale_header",
            "sale_logo",
            "capsule",
            "product_banner",
            "product_mobile_banner",
            "localized_title_image",
          ],
          p = ["takeunder_art", "takeunder_mobile_art"],
          _ = [
            "takeover_art",
            "takeover_mobile_art",
            "takeover_webm_art",
            "takeover_mp4_art",
            "takeover_webm_mobile_art",
            "takeover_mp4_mobile_art",
          ],
          b = ["marketingmessage_art", "marketingmessage_art_2"],
          g = [
            "marketingmessage_art_eventcapsule",
            "marketingmessage_art_2_eventcapsule",
          ],
          i = ["spotlight_art_hero"],
          c = [...u, ...s, ...p, ..._, ...b, ...g, ...i],
          h = [
            "spotlight",
            "background",
            "hero",
            "email_full",
            "email_centered",
            "broadcast_left",
            "broadcast_right",
            "localized_image_group",
            "sale_section_background",
            "sale_section_title",
            "sale_overlay",
            "link_capsule",
            "product_banner_override",
            "product_mobile_banner_override",
            "schedule_track_art",
            "tab_bar_background",
            "bestofyear_banner",
            "bestofyear_banner_mobile",
            "localized_marketing_message",
            "localized_optin_banner",
            "old_spotlight_art",
            "user_poll_background",
            "localized_marketingmessage_webm",
            "localized_marketingmessage_mp4",
            "localized_subtitles",
            "localized_marketingmessage_poster",
            "localized_marketingmessage_background",
            "localized_store_app_spotlight",
            "localized_store_app_spotlight_mobile",
            "localized_email_image",
            "localized_background_art",
            "edition_comparison",
            "template_asset",
            "sale_store_capsule_header",
            "sale_store_capsule_small",
            "sale_store_capsule_main",
            "sale_store_capsule_vertical",
            ...c,
          ];
        function m(I) {
          return Array.isArray(I) ? I[0] : I;
        }
        function D(I) {
          const v = Array.isArray(I) ? I : [I];
          return Math.min(...v);
        }
        function A(I, v) {
          return v === void 0 ? m(I) : Array.isArray(I) ? I[v] : I;
        }
        const x = [e.bg.iS, e.bg.dU, e.bg.CK, e.bg.wD],
          O = [e.bg.iS, e.bg.dU, e.bg.CK],
          f = [e.bg.iS, e.bg.dU],
          k = [e.bg.pJ, e.bg.nn],
          j = [e.bg.pi, e.bg.k7],
          V = [e.bg.iS, e.bg.dU, e.bg.CK, e.bg.wD, e.bg.pJ, e.bg.nn],
          N = {
            capsule: { width: C, height: w, rgAcceptableTypes: f },
            marketingmessage_art_2_eventcapsule: {
              width: C,
              height: w,
              rgAcceptableTypes: f,
            },
            marketingmessage_art_eventcapsule: {
              width: C,
              height: w,
              rgAcceptableTypes: f,
            },
            spotlight: { width: y, height: L, rgAcceptableTypes: f },
            localized_store_app_spotlight: {
              width: 1200,
              height: 260,
              rgAcceptableTypes: f,
            },
            localized_store_app_spotlight_mobile: {
              width: 500,
              height: 160,
              rgAcceptableTypes: f,
            },
            localized_title_image: {
              width: T,
              height: l,
              rgAcceptableTypes: f,
            },
            background: { width: T, height: l, rgAcceptableTypes: f },
            hero: {
              width: 0,
              height: 0,
              bDisableEnforceDimensions: !0,
              rgAcceptableTypes: f,
            },
            email_full: { width: P, height: M, rgAcceptableTypes: f },
            email_centered: { width: d, height: a, rgAcceptableTypes: f },
            broadcast_left: {
              width: [r, n],
              height: [o, E],
              rgAcceptableTypes: f,
            },
            broadcast_right: {
              width: [r, n],
              height: [o, E],
              rgAcceptableTypes: f,
            },
            sale_header: {
              width: 0,
              height: 0,
              bDisableEnforceDimensions: !0,
              rgAcceptableTypes: O,
            },
            sale_overlay: {
              width: 0,
              height: 0,
              bDisableEnforceDimensions: !0,
              rgAcceptableTypes: O,
            },
            localized_image_group: {
              width: 0,
              height: 0,
              bDisableEnforceDimensions: !0,
              rgAcceptableTypes: f,
            },
            localized_background_art: {
              width: 0,
              height: 0,
              bDisableEnforceDimensions: !0,
              rgAcceptableTypes: f,
            },
            sale_section_background: {
              width: 0,
              height: 0,
              bDisableEnforceDimensions: !0,
              rgAcceptableTypes: O,
            },
            sale_section_title: {
              width: 0,
              height: 0,
              bDisableEnforceDimensions: !0,
              rgAcceptableTypes: O,
            },
            link_capsule: {
              width: 0,
              height: 0,
              bDisableEnforceDimensions: !0,
              rgAcceptableTypes: f,
            },
            product_banner: {
              width: [1200, 1100],
              height: [175, 160],
              rgAcceptableTypes: f,
            },
            product_mobile_banner: {
              width: 500,
              height: 160,
              rgAcceptableTypes: f,
            },
            product_banner_override: {
              width: [1200, 1100],
              height: [175, 160],
              rgAcceptableTypes: f,
            },
            product_mobile_banner_override: {
              width: 500,
              height: 160,
              rgAcceptableTypes: f,
            },
            schedule_track_art: {
              width: 196,
              height: 92,
              rgAcceptableTypes: f,
            },
            tab_bar_background: {
              width: 1500,
              height: 100,
              rgAcceptableTypes: f,
            },
            sale_logo: {
              width: [1200, 940],
              height: [460, 460],
              rgAcceptableTypes: f,
            },
            bestofyear_banner: {
              width: 1100,
              height: 160,
              rgAcceptableTypes: O,
            },
            bestofyear_banner_mobile: {
              width: 500,
              height: 160,
              rgAcceptableTypes: O,
            },
            localized_marketing_message: {
              width: 570,
              height: 600,
              rgAcceptableTypes: x,
            },
            localized_optin_banner: {
              width: 1e3,
              height: 150,
              rgAcceptableTypes: f,
            },
            localized_marketingmessage_webm: {
              width: 570,
              height: 600,
              rgAcceptableTypes: [e.bg.pJ],
            },
            localized_marketingmessage_mp4: {
              width: 570,
              height: 600,
              rgAcceptableTypes: [e.bg.nn],
            },
            localized_partnerevent_webm: {
              width: 800,
              height: 450,
              rgAcceptableTypes: [e.bg.pJ],
            },
            localized_partnerevent_mp4: {
              width: 800,
              height: 450,
              rgAcceptableTypes: [e.bg.nn],
            },
            localized_subtitles: {
              width: 0,
              height: 0,
              bDisableEnforceDimensions: !0,
              rgAcceptableTypes: [e.bg.k7, e.bg.pi],
            },
            localized_marketingmessage_poster: {
              width: 528,
              height: 297,
              rgAcceptableTypes: [e.bg.iS, e.bg.dU],
            },
            localized_marketingmessage_background: {
              width: 570,
              height: 600,
              rgAcceptableTypes: f,
            },
            localized_email_image: {
              width: 0,
              height: 0,
              bDisableEnforceDimensions: !0,
              rgAcceptableTypes: f,
            },
            template_asset: {
              width: 0,
              height: 0,
              bDisableEnforceDimensions: !0,
              rgAcceptableTypes: V,
            },
            user_poll_background: {
              width: 0,
              height: 0,
              bDisableEnforceDimensions: !0,
              rgAcceptableTypes: f,
            },
            sale_store_capsule_header: {
              width: 920,
              height: 430,
              rgAcceptableTypes: f,
            },
            sale_store_capsule_small: {
              width: 462,
              height: 174,
              rgAcceptableTypes: f,
            },
            sale_store_capsule_main: {
              width: 1232,
              height: 706,
              rgAcceptableTypes: f,
            },
            sale_store_capsule_vertical: {
              width: 748,
              height: 896,
              rgAcceptableTypes: f,
            },
            spotlight_art: { width: 306, height: 260, rgAcceptableTypes: O },
            spotlight_art_hero: {
              width: 748,
              height: 896,
              rgAcceptableTypes: f,
            },
            old_spotlight_art: {
              width: 306,
              height: 350,
              rgAcceptableTypes: O,
            },
            marketingmessage_art: {
              width: 570,
              height: 600,
              rgAcceptableTypes: O,
            },
            marketingmessage_art_2: {
              width: 570,
              height: 600,
              rgAcceptableTypes: O,
            },
            takeover_art: { width: 1850, height: 450, rgAcceptableTypes: O },
            takeover_webm_art: {
              width: 1850,
              height: 450,
              rgAcceptableTypes: [e.bg.pJ],
            },
            takeover_mp4_art: {
              width: 1850,
              height: 450,
              rgAcceptableTypes: [e.bg.nn],
            },
            takeover_mobile_art: {
              width: 500,
              height: 350,
              rgAcceptableTypes: O,
            },
            takeover_webm_mobile_art: {
              width: 500,
              height: 350,
              rgAcceptableTypes: [e.bg.pJ],
            },
            takeover_mp4_mobile_art: {
              width: 500,
              height: 350,
              rgAcceptableTypes: [e.bg.nn],
            },
            takeunder_art: { width: 1200, height: 190, rgAcceptableTypes: O },
            takeunder_mobile_art: {
              width: 500,
              height: 160,
              rgAcceptableTypes: O,
            },
            app_header_capsule: {
              width: 920,
              height: 430,
              rgAcceptableTypes: f,
            },
            app_main_capsule: {
              width: 1232,
              height: 706,
              rgAcceptableTypes: f,
            },
          };
        function K(I, v, S, B) {
          let U = null;
          if (Array.isArray(S)) {
            if (
              ((U = S.map((R, Z) => (I === R ? Z : void 0)).filter(
                (R) => R !== void 0,
              )),
              U.length <= 0)
            )
              return !1;
          } else if (I !== S) return !1;
          if (Array.isArray(B)) {
            const R = B.map((Z, $) => (v === Z ? $ : void 0)).filter(
              (Z) => Z !== void 0,
            );
            if (R.length <= 0 || (U?.length && !R.some((Z) => U.includes(Z))))
              return !1;
          } else if (v !== B) return !1;
          return !0;
        }
        function Y(I, v, S, B) {
          const U = N[S];
          return U
            ? U.bDisableEnforceDimensions
              ? !!B
              : K(I, v, U.width, U.height)
            : !1;
        }
        function ee(I, v, S) {
          const B = N[S];
          if (!B) return !1;
          if (B.bDisableEnforceDimensions) return !0;
          if (Array.isArray(B.width)) {
            if (B.width.filter((U) => I < U).length == B.width.length)
              return !1;
          } else if (I < B.width) return !1;
          if (Array.isArray(B.height)) {
            if (B.height.filter((U) => v < U).length == B.height.length)
              return !1;
          } else if (v < B.height) return !1;
          return !0;
        }
        function oe(I) {
          const v = N[I];
          return (
            v.rgAcceptableTypes.includes(e.bg.k7) ||
            v.rgAcceptableTypes.includes(e.bg.pi)
          );
        }
        function se(I, v) {
          return v.filter((S) => z(I, S));
        }
        function z(I, v) {
          return N[v].rgAcceptableTypes.includes(I);
        }
      },
      9472: (H, W, t) => {
        "use strict";
        t.d(W, { o: () => y, q: () => M });
        var e = t(14947),
          l = t(72849),
          T = t(6658),
          w = Object.defineProperty,
          C = Object.getOwnPropertyDescriptor,
          L = (P, a, d, E) => {
            for (
              var n = E > 1 ? void 0 : E ? C(a, d) : a, o = P.length - 1, r;
              o >= 0;
              o--
            )
              (r = P[o]) && (n = (E ? r(a, d, n) : r(n)) || n);
            return E && n && w(a, d, n), n;
          };
        function y(P) {
          return P == "waiting" || P == "uploading" || P == "processing";
        }
        class M {
          m_originalSize = { width: 0, height: 0 };
          m_originalDataUrl = "";
          dataUrl = void 0;
          width = 0;
          height = 0;
          status = "pending";
          message = "";
          language = void 0;
          file;
          filename;
          uploadTime;
          fileType;
          constructor(a, d, E, n, o) {
            (0, e.Gn)(this),
              (this.file = a),
              (this.filename = d),
              (this.fileType = (0, T.yh)(d) ?? l.bg.w3),
              (this.language = E),
              (this.uploadTime = Date.now()),
              (this.status = "pending"),
              (this.m_originalSize = o),
              (this.height = o.height),
              (this.width = o.width),
              (this.m_originalDataUrl = n),
              (this.dataUrl = n);
          }
          ResetImage() {
            (this.height = this.m_originalSize.height),
              (this.width = this.m_originalSize.width),
              (this.dataUrl = this.m_originalDataUrl);
          }
          GetImageOptionLabel() {}
        }
        L([e.sH], M.prototype, "dataUrl", 2),
          L([e.sH], M.prototype, "width", 2),
          L([e.sH], M.prototype, "height", 2),
          L([e.sH], M.prototype, "status", 2),
          L([e.sH.ref], M.prototype, "message", 2),
          L([e.sH], M.prototype, "language", 2);
      },
      64: (H, W, t) => {
        "use strict";
        t.d(W, { IS: () => r, M7: () => p, T2: () => u });
        var e = t(14947),
          l = t(25279),
          T = t(18210),
          w = t(9472),
          C = t(21254),
          L = t(51746),
          y = Object.defineProperty,
          M = Object.getOwnPropertyDescriptor,
          P = (g, i, c, h) => {
            for (
              var m = h > 1 ? void 0 : h ? M(i, c) : i, D = g.length - 1, A;
              D >= 0;
              D--
            )
              (A = g[D]) && (m = (h ? A(i, c, m) : A(m)) || m);
            return h && m && y(i, c, m), m;
          };
        const a = 960,
          d = 311,
          E = 480,
          n = 156;
        class o extends w.q {
          m_rgImageOptions;
          m_currentImageOption = void 0;
          m_currentImageOptionKey = void 0;
          constructor(i, c, h, m, D, A) {
            super(i, c, h, D, A), (0, e.Gn)(this), (this.m_rgImageOptions = m);
          }
          IsValidAssetType(i, c) {
            let h = 0,
              m = 0,
              D = !1,
              A =
                !this.m_rgImageOptions ||
                this.m_rgImageOptions.length === 0 ||
                this.m_rgImageOptions.some(
                  (Y) => Y.sKey == this.GetCurrentImageOption()?.sKey,
                );
            if (i) (h = i.width), (m = i.height), (D = !0);
            else if (this.GetCurrentImageOption()) {
              const Y = l.Fj[this.GetCurrentImageOption().artworkType];
              Y &&
                ((h = Y.width),
                (m = Y.height),
                (D = !Y.bDisableEnforceDimensions));
            }
            const x = this.width >= (0, l.dM)(h) && this.height >= (0, l.dM)(m),
              O = D ? (0, l.Ek)(this.width, this.height, h, m) : x,
              f = c && c != this.fileType,
              k =
                this.m_rgImageOptions && this.m_rgImageOptions.length > 0
                  ? (0, l.vz)(
                      this.fileType,
                      this.m_rgImageOptions?.map((Y) => Y.artworkType) || [],
                    ).length == 0
                  : !1,
              j = !!(0, C.t)(this.fileType);
            let V = "",
              N = !1,
              K;
            return (
              A
                ? k
                  ? (V = (0, T.we)("#ImageUpload_InvalidFileType"))
                  : f
                    ? (V = (0, T.we)(
                        "#ImageUpload_InvalidFormat",
                        (0, L.EG)(c) ?? "",
                      ))
                    : !O && !j
                      ? (V = (0, T.we)(
                          "#ImageUpload_InvalidResolution",
                          (0, l.qj)(h),
                          (0, l.qj)(m),
                        ))
                      : x
                        ? !O && j
                          ? ((V = (0, T.we)(
                              "#ImageUpload_InvalidDimensions",
                              (0, l.qj)(h),
                              (0, l.qj)(m),
                            )),
                            (N = !0))
                          : ((Array.isArray(h) && this.width != (0, l.qj)(h)) ||
                              (Array.isArray(m) &&
                                this.height != (0, l.qj)(m))) &&
                            ((K = K ?? []),
                            K.push(
                              (0, T.we)(
                                "#ImageUpload_PreferredDimension",
                                (0, l.qj)(h),
                                (0, l.qj)(m),
                              ),
                            ))
                        : (V = (0, T.we)(
                            "#ImageUpload_TooSmall",
                            (0, l.qj)(h),
                            (0, l.qj)(m),
                          ))
                : (V = (0, T.we)("#ImageUpload_InvalidFormatSelected")),
              {
                error: V,
                warnings: K,
                needsCrop: N,
                match: this.GetCurrentImageOption(),
              }
            );
          }
          BSupportsLanguages() {
            return !0;
          }
          ComputeDefaultImageOption() {
            if (!this.m_rgImageOptions || this.m_rgImageOptions.length == 0)
              return;
            const i = (0, l.vz)(
              this.fileType,
              this.m_rgImageOptions?.map((h) => h.artworkType),
            );
            let c = b(this.width, this.height, i, !1);
            if ((c === void 0 && (c = b(this.width, this.height, i, !0)), c)) {
              const h = this.m_rgImageOptions.find(
                (m) =>
                  m.artworkType == c &&
                  (!m.bEnforceDimensions ||
                    (m.width == this.width && m.height == this.height)),
              );
              if (h) return h;
            }
            return this.m_rgImageOptions[0];
          }
          get ImageOptions() {
            return this.m_rgImageOptions;
          }
          GetCurrentImageOptionKey() {
            return this.m_currentImageOptionKey;
          }
          GetCurrentImageOption() {
            return (
              this.m_currentImageOption ?? this.ComputeDefaultImageOption()
            );
          }
          SetCurrentImageOption(i) {
            (this.m_currentImageOption = i),
              (this.m_currentImageOptionKey = i?.sKey);
          }
        }
        P([e.sH], o.prototype, "m_currentImageOption", 2),
          P([e.sH], o.prototype, "m_currentImageOptionKey", 2);
        class r extends o {
          video;
          constructor(i, c, h, m, D, A, x) {
            super(i, c, h, m, D, A), (this.video = x);
          }
          BIsOriginalMinimumDimensions(i) {
            return (0, l.s4)(
              this.video.videoWidth,
              this.video.videoHeight,
              i.artworkType,
            );
          }
          FileTypeMatchesImageTypes(i) {
            return (0, l.N_)(this.fileType, i.artworkType);
          }
          BIsVideo() {
            return l.Ho.includes(this.fileType);
          }
          GetResizeDimension() {}
        }
        class u extends o {
          constructor(i, c, h, m) {
            super(i, c, h, m, URL.createObjectURL(i), { width: 0, height: 0 });
          }
          BIsOriginalMinimumDimensions(i) {
            return (0, l.XY)(i.artworkType);
          }
          FileTypeMatchesImageTypes(i) {
            return (0, l.N_)(this.fileType, i.artworkType);
          }
          BIsVideo() {
            return l.Ho.includes(this.fileType);
          }
          GetResizeDimension() {}
        }
        function s(g) {
          const i = g.split(".").pop()?.toLocaleLowerCase();
          return i == "webm" || i == "mp4";
        }
        class p extends o {
          bCropped = !1;
          localizedImageGroupPrimaryImage;
          media;
          constructor(i, c, h, m, D, A, x, O) {
            super(i, c, h, m, D, A),
              (0, e.Gn)(this),
              (this.media = x),
              (this.localizedImageGroupPrimaryImage = O);
          }
          IsValidAssetType(i, c) {
            return (
              (c = c ?? this.localizedImageGroupPrimaryImage?.file_type),
              super.IsValidAssetType(i, c)
            );
          }
          GetCanvasImageSource() {
            return this.media;
          }
          BIsOriginalMinimumDimensions(i) {
            return (0, l.s4)(
              this.media?.width ?? 0,
              this.media?.height ?? 0,
              i.artworkType,
            );
          }
          FileTypeMatchesImageTypes(i) {
            return (0, l.N_)(this.fileType, i.artworkType);
          }
          BIsVideo() {
            return l.Ho.includes(this.fileType);
          }
          GetResizeDimension() {
            return _(this.GetCurrentImageOption()?.artworkType);
          }
        }
        P([e.sH], p.prototype, "bCropped", 2);
        function _(g) {
          if (g === "background")
            return [
              { width: a, height: d },
              { width: E, height: n },
            ];
          if (g === "capsule")
            return [
              {
                width: (0, l.qj)(l.Fj[g].width) / 2,
                height: (0, l.qj)(l.Fj[g].height) / 2,
              },
            ];
          if (g === "spotlight")
            return [
              {
                width: (0, l.qj)(l.Fj[g].width) / 2,
                height: (0, l.qj)(l.Fj[g].height) / 2,
              },
            ];
        }
        function b(g, i, c, h = !1) {
          if (c) {
            for (let m of c)
              if (h ? (0, l.s4)(g, i, m) : (0, l.yu)(g, i, m)) return m;
          }
        }
      },
      38410: (H, W, t) => {
        "use strict";
        t.d(W, {
          $l: () => y,
          PD: () => d,
          Vr: () => a,
          jj: () => E,
          ss: () => L,
        });
        var e = t(32093),
          l = t(99412),
          T = t(18210),
          w = t(41735),
          C = t.n(w);
        class L {}
        function y(n, o, r) {
          const u = n.filter((s) => {
            const p = s.IsValidAssetType(o, r);
            return s.status === "pending" && !p.error && !p.needsCrop;
          });
          return (
            u.forEach((s) => {
              (s.status = "waiting"), (s.message = "");
            }),
            u
          );
        }
        async function M(n, o, r, u, s) {
          const p = y(n, r, u),
            _ = [];
          for (const b of p) {
            b.status = "uploading";
            const g = await o(b, b.filename, b.language ?? l.xPp, s);
            (b.status = g.bSuccess ? "success" : "failed"),
              (b.message =
                !g.bSuccess && g.elErrorMessage ? g.elErrorMessage : ""),
              _.push({
                bSuccess: g.bSuccess,
                image: b,
                uploadResult: g.result,
              });
          }
          return _;
        }
        async function P(n, o, r, u, s, p) {
          const _ = y(n, u, s),
            b = [];
          let g = 0;
          const i = async () => {
              for (; g < _.length; ) {
                const h = g++,
                  m = _[h];
                m.status = "uploading";
                const D = await r(m, m.filename, m.language ?? l.xPp, p);
                (m.status = D.bSuccess ? "success" : "failed"),
                  (m.message =
                    !D.bSuccess && D.elErrorMessage ? D.elErrorMessage : ""),
                  (b[h] = { image: m, uploadResult: D });
              }
            },
            c = Array.from({ length: Math.floor(o) }, () => i());
          return (
            await Promise.all(c),
            b.map((h) => ({
              bSuccess: h.uploadResult.bSuccess,
              image: h.image,
              uploadResult: h.uploadResult.result,
            }))
          );
        }
        class a extends L {
          m_cancel = void 0;
          async UploadAllImages(o, r) {
            this.m_cancel = C().CancelToken.source();
            const u = this.BGetUploadsAreInSerial() ? 1 : 4;
            let s;
            const p = this.UploadSingleImage.bind(this);
            return (
              u > 1
                ? (s = await P(
                    this.GetUploadImages(),
                    u,
                    p,
                    o,
                    r,
                    this.m_cancel.token,
                  ))
                : (s = await M(
                    this.GetUploadImages(),
                    p,
                    o,
                    r,
                    this.m_cancel.token,
                  )),
              s
            );
          }
          CancelAllUploads() {
            this.m_cancel?.cancel((0, T.we)("#ImageUpload_CancelRequest"));
          }
        }
        function d(n, o, r) {
          if (((n == null || n == null) && (n = o), !r || r.length === 0))
            return n;
          for (const u of r) if (T.A0.IsELanguageValidInRealm(n, u)) return n;
          for (const u of r) if (T.A0.IsELanguageValidInRealm(o, u)) return o;
          return r.includes(e.TU.k_ESteamRealmGlobal) ? l.Bhc : l.ZLm;
        }
        function E(n, o = l.Bhc) {
          let r = n.lastIndexOf(".");
          r != -1 && (n = n.slice(0, r).toLowerCase());
          let u = null,
            s = 0;
          n.endsWith("korean") && ((u = l.Pn1), (s = 6));
          for (let _ = l.Bhc; _ < l.bP9; ++_) {
            const b = (0, l.wwZ)(_);
            if (b.length <= s) continue;
            if (n.endsWith(b) && n.length > b.length + 2) {
              const i = n[n.length - b.length - 1];
              /\p{Alphabetic}|\p{Number}/u.test(i) || ((u = _), (s = b.length));
            }
            const g = (0, l.LgB)(_);
            g.length <= s || (n.endsWith(g) && ((u = _), (s = g.length)));
          }
          const p = (_) => _.replace(/[\s_-]+$/g, "");
          return {
            language: u ?? o,
            baseFilename: s > 0 ? p(n.substring(0, n.length - s)) : n,
          };
        }
      },
      6658: (H, W, t) => {
        "use strict";
        t.d(W, { yh: () => M });
        var e = t(90626),
          l = t(72849);
        function T(P, a, d = !0) {
          const E = new URLSearchParams({
            ima: "fit",
            impolicy: "Letterbox",
            imcolor: "#000000",
          });
          return (
            P && E.set("imw", Math.round(P).toString()),
            a && E.set("imh", Math.round(a).toString()),
            !P || !a || !d
              ? E.set("letterbox", "false")
              : E.set("letterbox", "true"),
            "?" + E.toString()
          );
        }
        const w = null;
        function C(P, a) {
          let d;
          for (let E of w)
            if (
              (d ? (d += ", ") : (d = ""),
              (d += `${P}${T(E, 0)} ${E}w`),
              E >= a)
            )
              break;
          return d;
        }
        function L(P) {
          let {
            src: a,
            orig_width: d,
            orig_height: E,
            sizes: n,
            default_width: o,
            ...r
          } = P;
          n || (n = "95vw"), o || (o = 1024);
          let u = `${a}${T(o, void 0)}`,
            s = C(a, d);
          return React.createElement("img", {
            src: u,
            srcSet: s,
            sizes: n,
            ...r,
          });
        }
        function y(P) {
          const {
            width: a,
            height: d,
            orig_width: E,
            orig_height: n,
            src: o,
            ...r
          } = P;
          let u = o + T(a, d),
            s,
            p = 6;
          if (
            (a && E && (p = Math.min(p, Math.ceil(E / a))),
            d && n && (p = Math.min(p, Math.ceil(n / d))),
            p)
          )
            for (let _ of [2, 4, 6]) {
              if (_ > p) break;
              s ? (s += ", ") : (s = ""),
                (s += `${o}${T(a && a * _, d && d * _)} ${_}x`);
            }
          return React.createElement("img", { ...r, src: u, srcSet: s });
        }
        function M(P) {
          if (
            (P.indexOf("?") > 0 && (P = P.split("?")[0]),
            P.endsWith(".jpg") || P.endsWith(".jpeg"))
          )
            return l.bg.iS;
          if (P.endsWith(".png")) return l.bg.dU;
          if (P.endsWith(".gif")) return l.bg.CK;
          if (P.endsWith(".mp4")) return l.bg.nn;
          if (P.endsWith(".webm")) return l.bg.pJ;
          if (P.endsWith(".vtt")) return l.bg.k7;
          if (P.endsWith(".srt")) return l.bg.pi;
          if (P.endsWith(".webp")) return l.bg.wD;
        }
      },
      50109: (H, W, t) => {
        "use strict";
        t.d(W, { E: () => n, O: () => E });
        var e = t(14947),
          l = t(65946),
          T = t(99412),
          w = t(41635),
          C = t(27066),
          L = t(3166),
          y = t(38585),
          M = Object.defineProperty,
          P = Object.getOwnPropertyDescriptor,
          a = (o, r, u, s) => {
            for (
              var p = s > 1 ? void 0 : s ? P(r, u) : r, _ = o.length - 1, b;
              _ >= 0;
              _--
            )
              (b = o[_]) && (p = (s ? b(r, u, p) : b(p)) || p);
            return s && p && M(r, u, p), p;
          };
        const d = class ge {
          m_eCurLang = (0, T.sfN)(L.TS.LANGUAGE);
          m_rgHasData = (0, w.$Y)([], T.bP9, !1);
          m_bHasLocalizationContext = !1;
          m_callback = new y.l();
          GetCallback() {
            return this.m_callback;
          }
          GetCurEditLanguage() {
            return this.m_eCurLang;
          }
          SetCurEditLanguage(r) {
            return this.m_eCurLang != r
              ? ((this.m_eCurLang = r), this.GetCallback().Dispatch(r), !0)
              : !1;
          }
          SetHasLanguage(r) {
            r.forEach((u, s) => {
              this.m_rgHasData[s] != u && (this.m_rgHasData[s] = u);
            });
          }
          BHasLanguageData(r) {
            return this.m_rgHasData[r];
          }
          GetHasLocalizationContext() {
            return this.m_bHasLocalizationContext;
          }
          SetHasLocalizationContext(r) {
            r != this.m_bHasLocalizationContext &&
              (this.m_bHasLocalizationContext = r);
          }
          static s_globalSingletonStore;
          static Get() {
            return (
              ge.s_globalSingletonStore ||
                (ge.s_globalSingletonStore = new ge()),
              ge.s_globalSingletonStore
            );
          }
          constructor() {
            (0, e.Gn)(this);
          }
        };
        a([e.sH], d.prototype, "m_eCurLang", 2),
          a([e.sH], d.prototype, "m_rgHasData", 2),
          a([e.sH], d.prototype, "m_bHasLocalizationContext", 2),
          a([C.o], d.prototype, "GetCurEditLanguage", 1),
          a([C.o], d.prototype, "SetCurEditLanguage", 1),
          a([e.XI.bound], d.prototype, "SetHasLanguage", 1),
          a([C.o], d.prototype, "BHasLanguageData", 1);
        let E = d;
        function n() {
          return (0, l.q3)(() => E.Get().GetCurEditLanguage());
        }
      },
      61266: (H, W, t) => {
        "use strict";
        t.d(W, { T: () => M, m: () => y });
        var e = t(90626),
          l = t(77008),
          T = t(60298),
          w = t(10142),
          C = t(3166),
          L = t(14616);
        function y(d) {
          const [E, n] = (0, e.useState)(!1),
            [o] = (0, e.useState)(() => P()),
            r = (0, e.useMemo)(
              () => ({
                country: C.TS.COUNTRY,
                language: C.TS.LANGUAGE,
                bUsePartnerAPI: !0,
              }),
              [],
            );
          return (
            (0, e.useEffect)(() => (n(!0), a(o)), [o]),
            E
              ? (0, e.createElement)(L.V3, {
                  context: r,
                  serviceTransportOverride: o.GetServiceTransport(),
                  children: d.children,
                })
              : null
          );
        }
        function M(d) {
          const [E] = (0, e.useState)(() => P()),
            n = (0, e.useMemo)(
              () => ({
                country: C.TS.COUNTRY,
                language: C.TS.LANGUAGE,
                bUsePartnerAPI: !0,
                bIncludeUnpublished: d.bIncludeUnpublished,
              }),
              [d.bIncludeUnpublished],
            );
          return (0, e.createElement)(L.V3, {
            context: n,
            serviceTransportOverride: E.GetServiceTransport(),
            children: d.children,
          });
        }
        function P() {
          const d = (0, C.Tc)(
            "partnerbrowse_webapi_token",
            "application_config",
          );
          return (0, T.p)(new l.D(C.TS.WEBAPI_BASE_URL, d));
        }
        function a(d) {
          return w.A.Initialize(
            d.GetServiceTransport(),
            C.iA.is_partner_member,
          );
        }
      },
      84676: (H, W, t) => {
        "use strict";
        t.d(W, {
          G6: () => E,
          Gg: () => r,
          MS: () => _,
          Ow: () => o,
          Sq: () => P,
          eR: () => a,
          gF: () => b,
          ik: () => d,
          t7: () => n,
          zX: () => p,
        });
        var e = t(41735),
          l = t.n(e),
          T = t(90626),
          w = t(72604),
          C = t(3367),
          L = t(54963),
          y = t(10142);
        function M(i, c, h = !0) {
          const m = h
              ? CStoreItemCache.k_DataRequest_BasicInfo
              : CStoreItemCache.k_DataRequest_CommonOnly,
            D = h || CStoreItemCache.Get().BHasStoreItem(i, c, m) ? i : null,
            [A, x] = E(D, c, m),
            [O, f] = useState(null),
            [k, j] = E(O, c, m);
          useEffect(() => {
            A?.GetAppType() === EStoreAppType.k_EStoreAppType_Demo &&
              f(A.GetParentAppID());
          }, [A]);
          let V = A?.GetShortDescription()
            ? StripBBCodeTags(A.GetShortDescription())
            : "";
          (!V || V.length === 0) &&
            k &&
            (V = k?.GetShortDescription()
              ? StripBBCodeTags(k.GetShortDescription())
              : "");
          const N = x == d && (!O || j == d);
          return [V, N];
        }
        const P = 1,
          a = 2,
          d = 3;
        function E(i, c, h, m) {
          const D = (0, T.useRef)(void 0),
            A = (0, T.useRef)(void 0),
            x = (0, L.CH)();
          D.current = i;
          const [O, f] = (0, T.useState)(void 0),
            {
              include_assets: k,
              include_release: j,
              include_platforms: V,
              include_all_purchase_options: N,
              include_screenshots: K,
              include_trailers: Y,
              include_ratings: ee,
              include_tag_count: oe,
              include_reviews: se,
              include_basic_info: z,
              include_supported_languages: I,
              include_full_description: v,
              include_included_items: S,
              include_assets_without_overrides: B,
              apply_user_filters: U,
              include_links: R,
              include_extra_details: Z,
              include_optin_registration_tags: $,
            } = h;
          if (
            ((0, T.useEffect)(() => {
              const J = {
                include_assets: k,
                include_release: j,
                include_platforms: V,
                include_all_purchase_options: N,
                include_screenshots: K,
                include_trailers: Y,
                include_ratings: ee,
                include_tag_count: oe,
                include_reviews: se,
                include_basic_info: z,
                include_supported_languages: I,
                include_full_description: v,
                include_included_items: S,
                include_assets_without_overrides: B,
                apply_user_filters: U,
                include_links: R,
                include_extra_details: Z,
                include_optin_registration_tags: $,
              };
              let te = null;
              return (
                !i ||
                  i < 0 ||
                  y.A.Get().BHasStoreItem(i, c, J) ||
                  (O !== void 0 && m && m == A.current) ||
                  (m !== A.current && (f(void 0), (A.current = m)),
                  (te = l().CancelToken.source()),
                  y.A.Get()
                    .QueueStoreItemRequest(i, c, J)
                    .then((X) => {
                      !te?.token.reason && D.current === i && f(X == w.R), x();
                    })),
                () => te?.cancel("useStoreItemCache: unmounting")
              );
            }, [
              i,
              c,
              m,
              O,
              k,
              j,
              V,
              N,
              K,
              Y,
              ee,
              oe,
              se,
              z,
              I,
              v,
              S,
              B,
              U,
              R,
              Z,
              $,
              x,
            ]),
            !i)
          )
            return [null, a];
          if (O === !1) return [void 0, a];
          if (y.A.Get().BIsStoreItemMissing(i, c)) return [void 0, a];
          if (!y.A.Get().BHasStoreItem(i, c, h)) return [void 0, P];
          const q = y.A.Get().GetStoreItemWithLegacyVisibilityCheck(i, c);
          return q ? [q, d] : [null, a];
        }
        function n(i, c, h) {
          return E(i, C.c6.qI, c, h);
        }
        function o(i, c, h) {
          return E(i, C.c6.xO, c, h);
        }
        function r(i, c, h) {
          return E(i, C.c6.RD, c, h);
        }
        function u(i, c, h) {
          const [m, D] = E(i, c, h);
          let A;
          m?.GetStoreItemType() == EStoreItemType.k_EStoreItemType_Package &&
            !m.GetAssets()?.GetHeaderURL() &&
            m?.GetIncludedAppIDs().length == 1 &&
            (A = m.GetIncludedAppIDs()[0]);
          const [x, O] = n(A, h);
          return A && x?.BIsVisible() ? [x, O] : [m, D];
        }
        function s(i, c, h, m) {
          const D = (0, L.CH)(),
            {
              include_assets: A,
              include_release: x,
              include_platforms: O,
              include_all_purchase_options: f,
              include_screenshots: k,
              include_trailers: j,
              include_ratings: V,
              include_tag_count: N,
              include_reviews: K,
              include_basic_info: Y,
              include_supported_languages: ee,
              include_full_description: oe,
              include_included_items: se,
              include_assets_without_overrides: z,
              apply_user_filters: I,
              include_links: v,
              include_extra_details: S,
              include_optin_registration_tags: B,
            } = h;
          return (
            (0, T.useEffect)(() => {
              if (!i || i.length == 0) return;
              const R = {
                  include_assets: A,
                  include_release: x,
                  include_platforms: O,
                  include_all_purchase_options: f,
                  include_screenshots: k,
                  include_trailers: j,
                  include_ratings: V,
                  include_tag_count: N,
                  include_reviews: K,
                  include_basic_info: Y,
                  include_supported_languages: ee,
                  include_full_description: oe,
                  include_included_items: se,
                  include_assets_without_overrides: z,
                  apply_user_filters: I,
                  include_links: v,
                  include_extra_details: S,
                  include_optin_registration_tags: B,
                },
                Z = i.filter(
                  (J) =>
                    !(
                      y.A.Get().BHasStoreItem(J, c, R) ||
                      y.A.Get().BIsStoreItemMissing(J, c)
                    ),
                );
              if (Z.length == 0) return;
              const $ = l().CancelToken.source(),
                q = Z.map((J) => y.A.Get().QueueStoreItemRequest(J, c, R));
              return (
                Promise.all(q).then(() => {
                  $.token.reason || D();
                }),
                () => $.cancel("useStoreItemCacheMultiplePackages: unmounting")
              );
            }, [
              i,
              c,
              m,
              D,
              A,
              x,
              O,
              f,
              k,
              j,
              V,
              N,
              K,
              Y,
              ee,
              oe,
              se,
              z,
              I,
              v,
              S,
              B,
            ]),
            i
              ? i.every(
                  (R) =>
                    y.A.Get().BHasStoreItem(R, c, h) ||
                    y.A.Get().BIsStoreItemMissing(R, c),
                )
                ? i.every((R) =>
                    y.A.Get().GetStoreItemWithLegacyVisibilityCheck(R, c),
                  )
                  ? d
                  : a
                : P
              : a
          );
        }
        function p(i, c, h) {
          return s(i, C.c6.qI, c, h);
        }
        function _(i, c, h) {
          return s(i, C.c6.xO, c, h);
        }
        function b(i, c, h) {
          return s(i, C.c6.RD, c, h);
        }
        function g() {
          React.useEffect(
            () => (
              CStoreItemCache.Get().SetReturnUnavailableItems(!0),
              () => CStoreItemCache.Get().SetReturnUnavailableItems(!1)
            ),
            [],
          );
        }
      },
      51746: (H, W, t) => {
        "use strict";
        t.d(W, {
          EG: () => C,
          II: () => E,
          N1: () => n,
          S2: () => a,
          Uz: () => P,
          aL: () => M,
          ab: () => T,
          qR: () => w,
          zB: () => d,
        });
        var e = t(7742),
          l = t(72849);
        function T(o) {
          const r = o.toLowerCase();
          if (r.endsWith(".jpg") || r.endsWith(".jpeg")) return "image/jpeg";
          if (r.endsWith(".png")) return "image/png";
          if (r.endsWith(".gif")) return "image/gif";
          if (r.endsWith(".mp4")) return "video/mp4";
          if (r.endsWith(".webm")) return "video/webm";
          if (r.endsWith(".srt")) return "text/srt";
          if (r.endsWith(".vtt")) return "text/vtt";
          if (r.endsWith(".webp")) return "image/webp";
        }
        function w(o) {
          switch (o) {
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
              o,
            ),
            ".jpg"
          );
        }
        function C(o) {
          switch (o) {
            case l.bg.iS:
              return ".jpg";
            case l.bg.CK:
              return ".gif";
            case l.bg.dU:
              return ".png";
            case l.bg.pJ:
              return ".webm";
            case l.bg.nn:
              return ".mp4";
            case l.bg.pi:
              return ".srt";
            case l.bg.k7:
              return ".vtt";
            case l.bg.wD:
              return ".webp";
          }
        }
        function L(o) {
          const r = (0, e.x0)(),
            u = new Image();
          return (
            (u.onload = () => r.resolve(u)),
            (u.onerror = (s) => {
              console.error("LoadImage failed to load the image, details", s),
                r.resolve(void 0);
            }),
            (u.src = o),
            r.promise
          );
        }
        function y(o) {
          const r = (0, e.x0)(),
            u = document.createElement("video");
          return (
            (u.preload = "metadata"),
            u.addEventListener("loadedmetadata", () => r.resolve(u)),
            (u.onerror = (s) => {
              console.error("LoadVideo failed to load the video, details", s),
                r.resolve(void 0);
            }),
            (u.src = o),
            r.promise
          );
        }
        function M(o) {
          return o.startsWith("image/");
        }
        function P(o) {
          return o.startsWith("video/");
        }
        function a(o, r) {
          return r ? y(o) : L(o);
        }
        async function d(o, r) {
          if (r) return y(URL.createObjectURL(o));
          {
            const u = (0, e.x0)(),
              s = new FileReader();
            (s.onload = () => u.resolve(s.result ?? void 0)),
              (s.onerror = () => {
                console.error(
                  "GetMediaElementFromFile failed to load the image, details",
                  s.error,
                ),
                  u.resolve(void 0);
              }),
              s.readAsDataURL(o);
            const p = await u.promise;
            return p ? L(p.toString()) : void 0;
          }
        }
        function E(o) {
          return o
            ? o instanceof HTMLVideoElement
              ? { width: o.videoWidth, height: o.videoHeight }
              : { width: o.width, height: o.height }
            : { width: 0, height: 0 };
        }
        function n(o, r) {
          if (!r) return o;
          const u = new Set([
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
          for (const s of r)
            u.has(s.name.toLowerCase()) || (o[s.name] = s.value);
          return o;
        }
      },
      48127: (H, W, t) => {
        "use strict";
        t.d(W, { Gr: () => se, O9: () => j });
        var e = t(7850),
          l = t(65946),
          T = t(75844),
          w = t(90626),
          C = t(99412),
          L = t(32093),
          y = t(72849),
          M = t(64),
          P = t(38410),
          a = t(50109),
          d = t(58534),
          E = t(36707),
          n = t(18210),
          o = t(95603),
          r = t(71647),
          u = t.n(r);
        function s(z) {
          const {
              onDropFiles: I,
              renderDesciption: v,
              elAdditonalButtons: S,
              elOverrideDragAndDropText: B,
            } = z,
            [U, R] = (0, o.hk)(I),
            [Z, $] = (0, o.Ss)(I, {
              accept: "image/png, image/jpeg, image/gif, image/webp",
              multiple: !0,
            });
          return (0, e.jsxs)("div", {
            ...U,
            className: (0, E.A)(
              R ? u().DragAndDropContainerDragging : u().DragAndDropContainer,
              "DragAndDropContainer",
            ),
            children: [
              !!v && v(),
              (0, e.jsx)("div", {
                children: B || (0, n.we)("#ImagePicker_DragAndDrop"),
              }),
              (0, e.jsxs)("div", {
                className: u().ImageUploadBar,
                children: [
                  Z,
                  (0, e.jsxs)("label", {
                    onClick: $,
                    children: [
                      (0, e.jsxs)("span", {
                        children: [(0, n.we)("#ImagePicker_OrBrowse"), " "],
                      }),
                      (0, e.jsx)("span", {
                        className: u().SelectImageButton,
                        children: (0, n.we)("#selectimage_select_file"),
                      }),
                    ],
                  }),
                ],
              }),
              S,
              z.children,
            ],
          });
        }
        var p = t(95695),
          _ = t.n(p),
          b = t(2801),
          g = t(88003),
          i = t(64641),
          c = t.n(i),
          h = t(36118),
          m = t(85599),
          D = t(34592),
          A = t(82734),
          x = t(21254),
          O = t(27344),
          f = t.n(O),
          k = t(9472);
        function j(z) {
          const {
              imageUploader: I,
              fnUploadComplete: v,
              elOverrideDragAndDropText: S,
              forceResolution: B,
              elAdditonalButtons: U,
              rgRealmList: R,
            } = z,
            [Z, $] = (0, l.q3)(() => [
              I.GetUploadImages(),
              a.O.Get().GetCurEditLanguage(),
            ]),
            q = w.useCallback(
              async (X) => {
                let F = Array.from(X),
                  Q = !0;
                for (let ie = 0; ie < F.length; ie++) {
                  const ne = F[ie],
                    { language: ce } = (0, P.jj)(ne?.name, $);
                  try {
                    const re = (0, P.PD)(ce, $, R);
                    (Q = await I.AddImageForLanguage(ne, re)),
                      Q ||
                        (console.error(
                          "ImageUploaderPanel.OnDropFiles: failed on i=" +
                            ie +
                            " file=" +
                            ne.name,
                        ),
                        (0, g.pg)(
                          (0, e.jsx)(b.KG, {
                            strDescription: (0, n.we)(
                              "#ImagePicker_Error",
                              ne.name,
                            ),
                          }),
                          window,
                        ));
                  } catch (re) {
                    let de = (0, D.H)(re);
                    console.error(
                      "ImageUploaderPanel.OnDropFiles: " + de.strErrorMsg,
                      de,
                    ),
                      (0, g.pg)(
                        (0, e.jsx)(b.KG, {
                          strDescription: (0, n.we)(
                            "#EventError_Code",
                            de.strErrorMsg ?? "",
                          ),
                        }),
                        window,
                      );
                  }
                }
                return Q;
              },
              [$, I, R],
            ),
            J = w.useMemo(
              () =>
                U instanceof Array
                  ? U
                  : [
                      (0, e.jsx)(
                        w.Fragment,
                        { children: U },
                        "elAdditonalButtons",
                      ),
                    ],
              [U],
            );
          (0, l.q3)(() =>
            Z.map((X) => ({ a: X.GetCurrentImageOption(), b: X.language })),
          );
          const te = async () => {
            const X = await I.UploadAllImages(B);
            v?.(X);
          };
          return (0, e.jsxs)(s, {
            onDropFiles: q,
            elAdditonalButtons: J,
            elOverrideDragAndDropText: S,
            children: [
              (0, e.jsx)(w.Fragment, {
                children: (0, e.jsx)("div", {
                  className: f().UploadPreviewCtn,
                  children: Z.map((X) =>
                    (0, e.jsx)(
                      K,
                      {
                        asset: X,
                        forceResolution: B,
                        fnOnRemove: () => I.DeleteUploadImage(X),
                        languageRealms: R,
                      },
                      "arttabupload_" + X.filename + "_" + X.uploadTime,
                    ),
                  ),
                }),
              }),
              (0, e.jsx)(V, { imageUploader: I, fnOnUploadImageRequested: te }),
            ],
          });
        }
        function V(z) {
          const { imageUploader: I, fnOnUploadImageRequested: v } = z,
            [S] = (0, l.q3)(() => [I.GetUploadImages()]),
            B = S.some((R) => R.status == "pending"),
            U = S.some(
              (R) =>
                R.status == "waiting" ||
                R.status == "uploading" ||
                R.status == "processing",
            );
          return (0, e.jsxs)("div", {
            style: { display: "flex" },
            className: f().UploadPreviewButtonsCtn,
            children: [
              !!S.length &&
                (0, e.jsx)(d.$n, {
                  style: { margin: "8px" },
                  onClick: v,
                  disabled: !B,
                  children: (0, n.we)("#ImageUpload_Upload"),
                }),
              !!S.length &&
                (0, e.jsx)(d.$n, {
                  style: { margin: "8px" },
                  onClick: I.ClearImages,
                  disabled: U,
                  children: (0, n.we)("#ImageUpload_Clear"),
                }),
            ],
          });
        }
        function N(z, I, v, S, B) {
          let U = new Array();
          return (
            z.GetUploadImages().forEach((R) => {
              U.push(
                jsx(
                  K,
                  {
                    asset: R,
                    forceResolution: v,
                    forceFileType: S,
                    fnOnRemove: () => z.DeleteUploadImage(R),
                    languageRealms: B,
                  },
                  I + R.file + "_" + R.uploadTime,
                ),
              );
            }),
            U
          );
        }
        const K = (0, T.PA)(Y);
        function Y(z) {
          const I = (F) => {
              if (F instanceof M.M7) {
                F.ResetImage();
                const Q = window,
                  ie = (0, e.jsx)(x.q, {
                    ownerWin: Q,
                    uploadFile: F,
                    forceResolution: z.forceResolution,
                    fileType: z.forceFileType || y.bg.dU,
                  });
                (0, g.HT)(ie, Q, "CropModal", {
                  strTitle: (0, n.we)("#ImageUpload_CropModalTitle"),
                });
              } else
                console.log(
                  "ImageUploadEmbeddedDialog trying to crop non image",
                  F.fileType,
                  JSON.stringify(F.GetCurrentImageOption()),
                );
            },
            { asset: v, fnOnRemove: S, languageRealms: B } = z,
            U = v.ImageOptions?.map((F) => {
              let Q = F?.fnGetLabelText(),
                ie;
              F.bEnforceDimensions && (Q += ` - ${F.width}x${F.height}`),
                F.bDeprecated &&
                  ((Q += ` ${(0, n.we)("#ImageUpload_Deprecated")}`),
                  (ie = (0, n.we)("#ImageUpload_Deprecated_ttip")));
              let ne;
              return (
                (v.BIsOriginalMinimumDimensions(F) &&
                  v.FileTypeMatchesImageTypes(F)) ||
                  (ne = f().ImageDimensionTooSmall),
                { label: Q, data: F, strOptionClass: ne, tooltip: ie }
              );
            }).filter((F) => !F.data.bHiddenFromDropdown),
            R = {
              pending: (0, n.we)("#ImageUpload_Pending"),
              waiting: (0, n.we)("#ImageUpload_Waiting"),
              uploading: (0, n.we)("#ImageUpload_Uploading"),
              processing: (0, n.we)("#ImageUpload_Processing"),
              success: (0, n.we)("#ImageUpload_SuccessCard"),
              failed: (0, n.we)("#ImageUpload_Failed"),
            },
            Z = v.BSupportsLanguages()
              ? se(
                  n.A0.GetLanguageListForRealms(
                    B ?? [L.TU.k_ESteamRealmGlobal],
                  ),
                )
              : null,
            $ = v.IsValidAssetType(z.forceResolution, z.forceFileType),
            q = v.status == "pending";
          let J = R[v.status];
          v.status == "pending" &&
            ($.needsCrop
              ? (J = (0, n.we)("#ImageUpload_NeedsCrop"))
              : $.error && (J = (0, n.we)("#ImageUpload_Invalid")));
          let te;
          const X = v.GetCurrentImageOption();
          return (
            X && (te = U?.find((F) => F.data.sKey == X.sKey)?.data),
            te || (te = U?.[0]?.data),
            (0, e.jsxs)("div", {
              className: f().UploadPreview,
              children: [
                (0, e.jsx)("div", {
                  className: f().UploadPreviewDelete,
                  onClick: () => S(v),
                  children: (0, e.jsx)(h.sED, {}),
                }),
                (0, e.jsx)(ee, { asset: v }),
                Z &&
                  (0, e.jsx)(d.m, {
                    strDropDownClassName: _().DropDownScroll,
                    rgOptions: Z,
                    selectedOption: v.language,
                    onChange: (F) => (v.language = F.data),
                    disabled: !q,
                  }),
                U &&
                  U?.length > 1 &&
                  (0, e.jsx)(d.m, {
                    label: v.GetImageOptionLabel(),
                    rgOptions: U,
                    selectedOption: te,
                    onChange: (F) => v.SetCurrentImageOption(F.data),
                    disabled: !q,
                  }),
                q &&
                  $.warnings?.map((F, Q) =>
                    (0, e.jsx)(
                      "div",
                      { className: f().UploadPreviewWarning, children: F },
                      `warning${Q}`,
                    ),
                  ),
                q &&
                  $.messages?.map((F, Q) =>
                    (0, e.jsx)(
                      "div",
                      { className: f().UploadPreviewMessage, children: F },
                      `message${Q}`,
                    ),
                  ),
                (0, e.jsxs)("div", {
                  className: (0, E.A)({
                    [_().FlexColumnContainer]: !0,
                    [f().UploadPreviewError]: v.status == "failed",
                  }),
                  children: [
                    J,
                    (0, k.o)(v.status) &&
                      (0, e.jsx)("div", {
                        className: c().FlexCenter,
                        children: (0, e.jsx)(m.t, { size: "small" }),
                      }),
                  ],
                }),
                (0, e.jsx)("div", {
                  className: f().UploadPreviewError,
                  children: v.message,
                }),
                q &&
                  $.error &&
                  (0, e.jsx)("div", {
                    className: f().UploadPreviewError,
                    children: $.error,
                  }),
                q &&
                  $.needsCrop &&
                  (0, e.jsx)(d.jn, {
                    onClick: () => I(v),
                    children: (0, n.we)("#ImageUpload_OpenEditor"),
                  }),
              ],
            })
          );
        }
        function ee(z) {
          const { asset: I } = z;
          return I.BIsVideo()
            ? (0, e.jsxs)("div", {
                className: f().PreviewImgCtn,
                onClick: (v) =>
                  (0, g.pg)((0, e.jsx)(oe, { asset: I }), (0, A.uX)(v)),
                children: [
                  (0, e.jsxs)("span", {
                    className: f().PreviewImgInfo,
                    children: [I.width, " x ", I.height],
                  }),
                  (0, e.jsx)("video", {
                    height: 120,
                    controls: !1,
                    autoPlay: !0,
                    loop: !0,
                    muted: !0,
                    children: (0, e.jsx)("source", { src: I.dataUrl }),
                  }),
                ],
              })
            : (0, e.jsx)("div", {
                className: f().PreviewImgCtn,
                style: { backgroundImage: `url(${I.dataUrl})` },
                children: (0, e.jsxs)("span", {
                  className: f().PreviewImgInfo,
                  children: [I.width, " x ", I.height],
                }),
              });
        }
        function oe(z) {
          const { asset: I, closeModal: v } = z;
          return (0, e.jsx)(b.o0, {
            bAlertDialog: !0,
            closeModal: v,
            bAllowFullSize: !0,
            children: (0, e.jsx)("video", {
              controls: !0,
              autoPlay: !0,
              loop: !0,
              muted: !0,
              children: (0, e.jsx)("source", { src: I.dataUrl }),
            }),
          });
        }
        function se(z) {
          const I = [],
            v = new Array();
          for (const S of z) {
            if (S == C.X51) continue;
            const B = (0, n.we)("#Language_" + (0, C.LgB)(S));
            v.push({ label: B, data: S });
          }
          return (
            v.sort((S, B) => S.label.localeCompare(B.label)),
            v.forEach((S) => I.push({ label: S.label, data: S.data })),
            v
          );
        }
      },
      43308: (H, W, t) => {
        "use strict";
        t.d(W, { K: () => p });
        var e = t(7850),
          l = t(90626),
          T = t(92298),
          w = t.n(T),
          C = t(44894),
          L = t(7582),
          y = t(95695),
          M = t.n(y),
          P = t(36707),
          a = t(18210),
          d = t(71421),
          E = t(12916),
          n = t.n(E),
          o = t(87937),
          r = t.n(o);
        const u = "hh:mm a",
          s = "HH:mm";
        function p(D) {
          const {
            nLatestTime: A,
            nEarliestTime: x,
            fnGetTimeToUpdate: O,
            onError: f,
            strAlsoShowTimeZone: k,
            disabled: j,
            bNoDefaultDate: V,
            className: N,
            strDescToolTip: K,
            strDescription: Y,
            bShowTimeZone: ee,
            strInvalidDateTimeLocalizedMsg: oe,
            fnIsValidDateTime: se,
            bWeekdaysOnly: z,
            fnSetTimeToUpdate: I,
            bForce24HourFormat: v,
            bAllowClear: S,
          } = D;
          let B = g() || v ? s : u;
          const U = O(),
            [R, Z] = l.useState(U > 0 ? r()(U * 1e3) : null),
            [$, q] = l.useState(0),
            [J, te] = l.useState(),
            [X, F] = l.useState(),
            Q = m(J, X, oe, se, f),
            ie = !f && Q;
          let ne;
          if (A && x && A == x && x > L.HD.GetTimeNowWithOverride()) {
            const G = r().unix(x);
            (ne = {
              hours: { max: G.hour(), min: G.hour(), step: 0 },
              minutes: { max: G.minute(), min: G.minute(), step: 0 },
              seconds: { max: G.seconds(), min: G.seconds(), step: 0 },
              milliseconds: { max: 0, min: 0, step: 0 },
            }),
              (B = s);
          }
          let ce;
          !U && x && !V && (ce = r().unix(x));
          const re = r().tz.guess(),
            de = r().unix(U).tz(re),
            le = !!k && re != k && r().unix(U).tz(k),
            pe = (G) => {
              if (j) return;
              F(null);
              const he = O(),
                ae = r().unix(he || L.HD.GetTimeNowWithOverride());
              (G = G.clone()),
                G.hour(ae.hour()),
                G.minute(ae.minute()),
                G.second(0),
                I(G.unix()),
                Z(G);
            },
            { fnOnInput: me, fnOnInputBlur: _e, fnOnChange: fe } = _(i, pe, F),
            Pe = (G) => {
              if (j) return;
              te(null);
              let he = O(),
                ae = 0;
              if (!he)
                ae =
                  r().unix(x).hour(0).second(0).minutes(0).unix() +
                  3600 * G.hour() +
                  60 * G.minutes();
              else {
                const ue = r().unix(he);
                (G = G.clone()),
                  G.year(ue.year()),
                  G.month(ue.month()),
                  G.date(ue.date()),
                  (ae = G.unix());
              }
              I(ae), Z(r().unix(ae));
            },
            { fnOnInput: Ee, fnOnInputBlur: De, fnOnChange: Ie } = _(c, Pe, te),
            ve = () => {
              j || (I(0), Z(null), F(null), te(null), q((G) => G + 1));
            },
            Te = S && !j && U > 0;
          return (0, e.jsxs)("div", {
            className: (0, P.A)(n().EventTimeSection, N),
            children: [
              (0, e.jsxs)("div", {
                className: (0, P.A)(n().EventTimeTitle, "DialogLabel"),
                children: [
                  (0, e.jsx)(d.he, {
                    toolTipContent: K,
                    direction: "top",
                    children: !!Y && (0, e.jsx)("span", { children: Y }),
                  }),
                  ie &&
                    (0, e.jsxs)("span", {
                      className: n().DateErrorCtn,
                      children: [(0, e.jsx)("img", { src: C.A }), ie],
                    }),
                ],
              }),
              (0, e.jsxs)("div", {
                className: M().FlexRowContainer,
                children: [
                  (0, e.jsxs)("div", {
                    className: (0, P.A)(M().InputBorder, n().TimeBlock),
                    children: [
                      (0, e.jsx)(
                        w(),
                        {
                          onChange: fe,
                          timeFormat: !1,
                          value: X ?? R,
                          isValidDate: (G) => !j && h(x, A, z, G),
                          initialValue: ce,
                          inputProps: {
                            placeholder: (0, a.we)(
                              "#DateTimePicker_Enter_Date",
                            ),
                            className: (0, P.A)(
                              n().DateWidth,
                              "DialogInput",
                              "DialogTextInputBase",
                            ),
                            disabled: j,
                            onChange: (G) => me(G.currentTarget.value),
                            onBlur: (G) => _e(G.currentTarget.value),
                          },
                        },
                        "date" + $,
                      ),
                      !!le &&
                        (0, e.jsx)("div", {
                          className: n().PacificTimeHint,
                          children: le.format("L"),
                        }),
                    ],
                  }),
                  (0, e.jsxs)("div", {
                    className: (0, P.A)(M().InputBorder, n().TimeBlock),
                    children: [
                      (0, e.jsx)(
                        w(),
                        {
                          onChange: Ie,
                          dateFormat: !1,
                          timeFormat: B,
                          timeConstraints: ne,
                          value: J ?? R,
                          inputProps: {
                            placeholder: (0, a.we)(
                              "#DateTimePicker_Enter_Time",
                            ),
                            className: (0, P.A)(
                              n().TimeWidth,
                              "DialogInput",
                              "DialogTextInputBase",
                            ),
                            disabled: j,
                            onChange: (G) => Ee(G.currentTarget.value),
                            onBlur: (G) => De(G.currentTarget.value),
                          },
                        },
                        "time" + $,
                      ),
                      !!le &&
                        (0, e.jsx)("div", {
                          className: n().PacificTimeHint,
                          children: le.format("LT"),
                        }),
                    ],
                  }),
                  ee &&
                    (0, e.jsxs)("div", {
                      children: [
                        (0, e.jsx)("div", {
                          className: n().TimeZone,
                          children: de.zoneAbbr(),
                        }),
                        !!le &&
                          (0, e.jsx)("div", {
                            className: n().TimeZone,
                            children: le.zoneAbbr(),
                          }),
                      ],
                    }),
                  Te &&
                    (0, e.jsx)("button", {
                      type: "button",
                      className: n().ClearButton,
                      onClick: ve,
                      children: (0, a.we)("#Button_Clear"),
                    }),
                ],
              }),
              !!ne &&
                (0, e.jsx)("div", {
                  children: (0, a.we)("#DateTimePicker_DateTime_Fixed"),
                }),
            ],
          });
        }
        function _(D, A, x) {
          const [O, f] = l.useState(!1);
          return {
            fnOnInput: (N) => {
              x(N), f(!0);
            },
            fnOnInputBlur: (N) => {
              if (O) {
                const K = D(N);
                K.isValid() && A(K);
              }
              f(!1);
            },
            fnOnChange: (N) => {
              if (!O)
                if (typeof N == "string") {
                  const K = D(N);
                  K.isValid() && A(K);
                } else A(N);
            },
          };
        }
        function b() {
          const A = r()("2025-01-14").format("L").split(/[-/.]/),
            x = A.indexOf("14");
          return A.indexOf("01") < x;
        }
        function g() {
          return r()("2025-01-14T13:00:00")
            .format("LT")
            .toLowerCase()
            .includes("13");
        }
        function i(D) {
          return r()(D, b() ? "M/D/YYYY" : "D/M/YYYY", !1);
        }
        function c(D) {
          return r()(D, [u, s], !1);
        }
        function h(D, A, x, O) {
          const f = r().unix(D).hour(0).seconds(0).minute(0);
          let k = O.unix() >= f.unix();
          if (k && A && A >= D) {
            const j = r().unix(A).hour(23).minute(59).seconds(59);
            k = O.unix() <= j.unix();
          }
          return (
            k && x && (O.weekday() == 0 || O.weekday() == 6) && (k = !1), k
          );
        }
        function m(D, A, x, O, f) {
          const k = O && O(),
            j = A && !i(A).isValid(),
            V = D && !c(D).isValid(),
            N = V || j || typeof k == "string" || k === !1;
          let K = null;
          return (
            N &&
              ((K = (0, a.we)(
                x || "#DateTimePicker_Fallback_Invalid_DateTime",
              )),
              V
                ? (K = (0, a.we)("#DateTimePicker_Time_CannotParse"))
                : j
                  ? (K = (0, a.we)("#DateTimePicker_Date_CannotParse"))
                  : typeof k == "string" && (K = k)),
            l.useEffect(() => {
              f && f(K);
            }, [K, f]),
            K
          );
        }
      },
      79167: (H, W, t) => {
        "use strict";
        t.d(W, { I: () => u });
        var e = t(7850),
          l = t(90626),
          T = t(54963),
          w = t(75844),
          C = t(8323),
          L = t(18210),
          y = t(58534),
          M = t(36118),
          P = t(81315),
          a = t.n(P),
          d = t(13854),
          E = Object.defineProperty,
          n = Object.getOwnPropertyDescriptor,
          o = (s, p, _, b) => {
            for (
              var g = b > 1 ? void 0 : b ? n(p, _) : p, i = s.length - 1, c;
              i >= 0;
              i--
            )
              (c = s[i]) && (g = (b ? c(p, _, g) : c(g)) || g);
            return b && g && E(p, _, g), g;
          },
          r = ((s) => (
            (s.topleft = "topleft"),
            (s.top = "top"),
            (s.topright = "topright"),
            (s.left = "left"),
            (s.middle = "middle"),
            (s.right = "right"),
            (s.bottomleft = "bottomleft"),
            (s.bottom = "bottom"),
            (s.bottomright = "bottomright"),
            s
          ))(r || {});
        let u = class extends l.Component {
          m_rectLinkRegion;
          m_elLinkRegionBox;
          m_nLocalOffsetXPct;
          m_nLocalOffsetYPct;
          m_fnMouseUp = null;
          m_fnMouseMove = null;
          m_listeners = new C.Ji();
          m_strDescription = "";
          m_aspectRatio = 1;
          componentWillUnmount() {
            this.m_listeners.Unregister();
          }
          constructor(s) {
            super(s),
              (this.state = {
                curLeftPosPct: this.props.xPosPct,
                curTopPosPct: this.props.yPosPct,
                curRightPosPct:
                  100 - (this.props.widthPct + this.props.xPosPct),
                curBottomPosPct:
                  100 - (this.props.yPosPct + this.props.heightPct),
                curWidthPct: this.props.widthPct,
                curHeightPct: this.props.heightPct,
                EdgeDown: void 0,
                text_link_url: this.props.link_url,
                text_link_description: this.props.link_description,
                bEditingLink: !1,
                valid_link: this.validateUrl(this.props.link_url),
              }),
              (this.m_strDescription = this.props.link_description ?? ""),
              (this.m_aspectRatio =
                this.props.heightPct > 0 && this.props.widthPct > 0
                  ? this.props.widthPct / this.props.heightPct
                  : 1);
          }
          LinkRegionBoxRef(s) {
            this.m_elLinkRegionBox = s;
          }
          OnMouseDown(s, p) {
            this.m_elLinkRegionBox?.parentElement &&
              this.m_elLinkRegionBox.ownerDocument.defaultView &&
              ((this.m_fnMouseUp = (_) => {
                this.OnMouseUp(_, p);
              }),
              (this.m_fnMouseMove = (_) => {
                this.OnMouseMove(_, p);
              }),
              this.setState({ EdgeDown: p }),
              (this.m_rectLinkRegion =
                this.m_elLinkRegionBox.parentElement.getBoundingClientRect()),
              (this.m_nLocalOffsetXPct =
                ((s.clientX - this.m_rectLinkRegion.left) /
                  (this.m_rectLinkRegion.right - this.m_rectLinkRegion.left)) *
                  100 -
                this.state.curLeftPosPct),
              (this.m_nLocalOffsetYPct =
                ((s.clientY - this.m_rectLinkRegion.top) /
                  (this.m_rectLinkRegion.bottom - this.m_rectLinkRegion.top)) *
                  100 -
                this.state.curTopPosPct),
              this.m_listeners.AddEventListener(
                this.m_elLinkRegionBox.ownerDocument.defaultView,
                "mousemove",
                this.m_fnMouseMove,
              ),
              this.m_listeners.AddEventListener(
                this.m_elLinkRegionBox.ownerDocument.defaultView,
                "mouseup",
                this.m_fnMouseUp,
              )),
              s.preventDefault(),
              s.stopPropagation();
          }
          OnMouseMove(s, p) {
            if (this.state.EdgeDown !== void 0) {
              switch ((s.shiftKey && this.m_fnMouseUp(), p)) {
                case "left": {
                  this.UpdateState({
                    curLeftPosPct: this.CalcLeftEdge(s.clientX),
                  });
                  break;
                }
                case "right": {
                  this.UpdateState({
                    curRightPosPct: this.CalcRightEdge(s.clientX),
                  });
                  break;
                }
                case "top": {
                  this.UpdateState({
                    curTopPosPct: this.CalcTopEdge(s.clientY),
                  });
                  break;
                }
                case "bottom": {
                  this.UpdateState({
                    curBottomPosPct: this.CalcBottomEdge(s.clientY),
                  });
                  break;
                }
                case "topleft": {
                  this.UpdateState({
                    curTopPosPct: this.CalcBottomEdge(s.clientY),
                    curLeftPosPct: this.CalcLeftEdge(s.clientX),
                  });
                  break;
                }
                case "topright": {
                  this.UpdateState({
                    curTopPosPct: this.CalcTopEdge(s.clientY),
                    curRightPosPct: this.CalcRightEdge(s.clientX),
                  });
                  break;
                }
                case "bottomleft": {
                  this.UpdateState({
                    curLeftPosPct: this.CalcLeftEdge(s.clientX),
                    curBottomPosPct: this.CalcBottomEdge(s.clientY),
                  });
                  break;
                }
                case "bottomright": {
                  this.UpdateState({
                    curRightPosPct: this.CalcRightEdge(s.clientX),
                    curBottomPosPct: this.CalcBottomEdge(s.clientY),
                  });
                  break;
                }
                case "middle": {
                  const _ = (0, d.OQ)(
                      this.CalcLeftEdge(s.clientX),
                      0,
                      100 - this.state.curWidthPct,
                    ),
                    b = 100 - (_ + this.state.curWidthPct),
                    g = (0, d.OQ)(
                      this.CalcTopEdge(s.clientY),
                      0,
                      100 - this.state.curHeightPct,
                    ),
                    i = 100 - (g + this.state.curHeightPct),
                    c = {
                      curLeftPosPct: _,
                      curRightPosPct: b,
                      curTopPosPct: g,
                      curBottomPosPct: i,
                    };
                  this.setState(c);
                  break;
                }
                default:
                  break;
              }
              s.preventDefault(), s.stopPropagation();
            }
          }
          IsValidPct(s) {
            return s >= 0 && s <= 100;
          }
          UpdateState(s) {
            let p =
                s.curTopPosPct !== void 0
                  ? s.curTopPosPct
                  : this.state.curTopPosPct,
              _ =
                s.curBottomPosPct !== void 0
                  ? s.curBottomPosPct
                  : this.state.curBottomPosPct,
              b =
                s.curLeftPosPct !== void 0
                  ? s.curLeftPosPct
                  : this.state.curLeftPosPct,
              g =
                s.curRightPosPct !== void 0
                  ? s.curRightPosPct
                  : this.state.curRightPosPct,
              i = (0, d.OQ)(
                100 - g - b,
                this.props.widthMinPct || 0,
                this.props.widthMaxPct || 100,
              ),
              c = (0, d.OQ)(
                100 - _ - p,
                this.props.heightMinPct || 0,
                this.props.heightMaxPct || 100,
              );
            this.props.bLockAspectRatio &&
              (s.curLeftPosPct !== void 0 || s.curRightPosPct !== void 0
                ? (c = i / this.m_aspectRatio)
                : (i = c * this.m_aspectRatio)),
              s.curLeftPosPct !== void 0
                ? (b = 100 - g - i)
                : (g = 100 - (b + i)),
              s.curTopPosPct !== void 0
                ? (p = 100 - _ - c)
                : (_ = 100 - (p + c));
            const h = 100 - g - b,
              m = 100 - _ - p;
            this.IsValidPct(b) &&
              this.IsValidPct(g) &&
              this.IsValidPct(p) &&
              this.IsValidPct(_) &&
              this.IsValidPct(h) &&
              this.IsValidPct(m) &&
              this.setState({
                curLeftPosPct: b,
                curRightPosPct: g,
                curTopPosPct: p,
                curBottomPosPct: _,
              });
          }
          GetXPercent(s) {
            return this.m_rectLinkRegion
              ? ((s - this.m_rectLinkRegion.left) /
                  (this.m_rectLinkRegion.right - this.m_rectLinkRegion.left)) *
                  100 -
                  (this.m_nLocalOffsetXPct ?? 0)
              : 0;
          }
          GetYPercent(s) {
            return this.m_rectLinkRegion
              ? ((s - this.m_rectLinkRegion.top) /
                  (this.m_rectLinkRegion.bottom - this.m_rectLinkRegion.top)) *
                  100 -
                  (this.m_nLocalOffsetYPct ?? 0)
              : 0;
          }
          CalcLeftEdge(s) {
            return (0, d.OQ)(this.GetXPercent(s), 0, 100);
          }
          CalcRightEdge(s) {
            return (0, d.OQ)(
              100 - (this.GetXPercent(s) + this.state.curWidthPct),
              0,
              100,
            );
          }
          CalcTopEdge(s) {
            return (0, d.OQ)(this.GetYPercent(s), 0, 100);
          }
          CalcBottomEdge(s) {
            return (0, d.OQ)(
              100 - (this.GetYPercent(s) + this.state.curHeightPct),
              0,
              100,
            );
          }
          OnMouseUp(s, p) {
            this.setState({
              curWidthPct:
                100 - this.state.curRightPosPct - this.state.curLeftPosPct,
            }),
              this.setState({
                curHeightPct:
                  100 - this.state.curBottomPosPct - this.state.curTopPosPct,
              }),
              this.setState({ EdgeDown: void 0 }),
              this.props.updateFn(this.props.index, {
                xPosPct: this.state.curLeftPosPct,
                yPosPct: this.state.curTopPosPct,
                widthPct: this.state.curWidthPct,
                heightPct: this.state.curHeightPct,
                link_url: this.state.text_link_url,
                link_description: this.state.text_link_description,
              }),
              this.m_listeners.Unregister();
          }
          async HandleDelete() {
            this.props.deleteFn && this.props.deleteFn(this.props.index);
          }
          OnSetLinkURLChange(s) {
            this.setState({
              text_link_url: s.target.value,
              valid_link: this.validateUrl(s.target.value),
            });
          }
          OnSetLinkDescriptionChange(s) {
            this.setState({ text_link_description: s.target.value });
          }
          validateUrl(s) {
            return s != null
              ? /^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/i.test(
                  s,
                )
              : !1;
          }
          OnSaveLink() {
            (this.m_strDescription = this.state.text_link_description ?? ""),
              this.setState({ bEditingLink: !this.state.bEditingLink }),
              this.props.updateFn(this.props.index, {
                xPosPct: this.state.curLeftPosPct,
                yPosPct: this.state.curTopPosPct,
                widthPct: this.state.curWidthPct,
                heightPct: this.state.curHeightPct,
                link_url: this.state.text_link_url,
                link_description: this.state.text_link_description,
              });
          }
          OnEditLink() {
            this.setState({ bEditingLink: !this.state.bEditingLink });
          }
          render() {
            let s = {
                left: this.state.curLeftPosPct + "%",
                top: this.state.curTopPosPct + "%",
                right: this.state.curRightPosPct + "%",
                bottom: this.state.curBottomPosPct + "%",
              },
              p = a().LinkRegionDragBox;
            return (
              this.state.EdgeDown != null &&
                (p += ` ${a().EdgeDown} ` + a()[this.state.EdgeDown]),
              (0, e.jsxs)("div", {
                className: p,
                style: s,
                ref: this.LinkRegionBoxRef,
                draggable: !1,
                children: [
                  (0, e.jsxs)("div", {
                    className: a().LinkRegionGridBox,
                    children: [
                      (0, e.jsx)("div", {
                        className: `${a().LinkRegionEdge} ${a().TopLeft}`,
                        onMouseDown: (_) => {
                          this.OnMouseDown(_, "topleft");
                        },
                        draggable: !1,
                      }),
                      (0, e.jsx)("div", {
                        className: `${a().LinkRegionEdge} ${a().Top}`,
                        onMouseDown: (_) => {
                          this.OnMouseDown(_, "top");
                        },
                      }),
                      (0, e.jsx)("div", {
                        className: `${a().LinkRegionEdge} ${a().TopRight}`,
                        onMouseDown: (_) => {
                          this.OnMouseDown(_, "topright");
                        },
                        draggable: !1,
                      }),
                      (0, e.jsx)("div", {
                        className: `${a().LinkRegionEdge} ${a().Left}`,
                        onMouseDown: (_) => {
                          this.OnMouseDown(_, "left");
                        },
                        draggable: !1,
                      }),
                      (0, e.jsxs)("div", {
                        className: `${a().LinkRegionEdge} ${a().Middle}`,
                        onMouseDown: (_) => {
                          this.OnMouseDown(_, "middle");
                        },
                        draggable: !1,
                        children: [
                          this.props.deleteFn &&
                            (0, e.jsx)("div", {
                              className: a().LinkRegionDelete,
                              onClick: this.HandleDelete,
                              children: (0, e.jsx)(M.sED, {}),
                            }),
                          !this.props.bDisableLink &&
                            (0, e.jsx)("div", {
                              className: a().LinkRegionSettings,
                              onClick: this.OnEditLink,
                              children: (0, e.jsx)(M.xv8, {}),
                            }),
                          (0, e.jsxs)("div", {
                            className: a().LinkText,
                            children: [" ", this.m_strDescription, " "],
                          }),
                        ],
                      }),
                      (0, e.jsx)("div", {
                        className: `${a().LinkRegionEdge} ${a().Right}`,
                        onMouseDown: (_) => {
                          this.OnMouseDown(_, "right");
                        },
                        draggable: !1,
                      }),
                      (0, e.jsx)("div", {
                        className: `${a().LinkRegionEdge} ${a().BottomLeft}`,
                        onMouseDown: (_) => {
                          this.OnMouseDown(_, "bottomleft");
                        },
                        draggable: !1,
                      }),
                      (0, e.jsx)("div", {
                        className: `${a().LinkRegionEdge} ${a().Bottom}`,
                        onMouseDown: (_) => {
                          this.OnMouseDown(_, "bottom");
                        },
                        draggable: !1,
                      }),
                      (0, e.jsx)("div", {
                        className: `${a().LinkRegionEdge} ${a().BottomRight}`,
                        onMouseDown: (_) => {
                          this.OnMouseDown(_, "bottomright");
                        },
                        draggable: !1,
                      }),
                    ],
                  }),
                  this.state.bEditingLink &&
                    (0, e.jsxs)("div", {
                      className: a().LinkRegionInfo,
                      children: [
                        (0, e.jsx)(y.pd, {
                          className: a().LinkRegionInput,
                          type: "text",
                          name: "link_url",
                          value: this.state.text_link_url,
                          label: (0, L.we)("#SteamTV_LinkURL"),
                          placeholder: "https://www.example.com",
                          onChange: this.OnSetLinkURLChange,
                          mustBeURL: !0,
                        }),
                        (0, e.jsx)(y.pd, {
                          className: a().LinkRegionInput,
                          type: "text",
                          name: "link_description",
                          value: this.state.text_link_description,
                          label: (0, L.we)("#SteamTV_LinkDescription"),
                          placeholder: (0, L.we)(
                            "#SteamTV_LinkDescription_Placeholder",
                          ),
                          onChange: this.OnSetLinkDescriptionChange,
                        }),
                        (0, e.jsxs)("div", {
                          className: a().LinkRegionButtonContainer,
                          children: [
                            (0, e.jsxs)(y.$n, {
                              disabled: !this.state.valid_link,
                              onClick: this.OnSaveLink,
                              children: [" ", (0, L.we)("#Button_OK"), " "],
                            }),
                            (0, e.jsxs)(y.$n, {
                              onClick: this.OnEditLink,
                              children: [" ", (0, L.we)("#Button_Cancel")],
                            }),
                          ],
                        }),
                      ],
                    }),
                ],
              })
            );
          }
        };
        o([T.oI], u.prototype, "LinkRegionBoxRef", 1),
          o([T.oI], u.prototype, "OnMouseDown", 1),
          o([T.oI], u.prototype, "OnMouseMove", 1),
          o([T.oI], u.prototype, "OnMouseUp", 1),
          o([T.oI], u.prototype, "HandleDelete", 1),
          o([T.oI], u.prototype, "OnSetLinkURLChange", 1),
          o([T.oI], u.prototype, "OnSetLinkDescriptionChange", 1),
          o([T.oI], u.prototype, "OnSaveLink", 1),
          o([T.oI], u.prototype, "OnEditLink", 1),
          (u = o([w.PA], u));
      },
      21254: (H, W, t) => {
        "use strict";
        t.d(W, { q: () => s, t: () => _ });
        var e = t(7850),
          l = t(90626),
          T = t(25279),
          w = t(72849),
          C = t(58534),
          L = t(79167),
          y = t(2801),
          M = t(36707),
          P = t(18210),
          a = t(54963),
          d = t(50666),
          E = t.n(d),
          n = t(82734),
          o = Object.defineProperty,
          r = Object.getOwnPropertyDescriptor,
          u = (b, g, i, c) => {
            for (
              var h = c > 1 ? void 0 : c ? r(g, i) : g, m = b.length - 1, D;
              m >= 0;
              m--
            )
              (D = b[m]) && (h = (c ? D(g, i, h) : D(h)) || h);
            return c && h && o(g, i, h), h;
          };
        class s extends l.Component {
          state = {
            region: {
              xPosPct: 0,
              yPosPct: 0,
              widthPct:
                (this.GetDestWidth() / this.props.uploadFile.width) * 100,
              heightPct:
                (this.GetDestHeight() / this.props.uploadFile.height) * 100,
            },
          };
          async OnCrop() {
            const g = this.props.uploadFile.GetCanvasImageSource();
            g &&
              (await p(
                this.props.uploadFile,
                g,
                (this.state.region.xPosPct / 100) * this.props.uploadFile.width,
                (this.state.region.yPosPct / 100) *
                  this.props.uploadFile.height,
                (this.state.region.widthPct / 100) *
                  this.props.uploadFile.width,
                (this.state.region.heightPct / 100) *
                  this.props.uploadFile.height,
                this.GetDestWidth(),
                this.GetDestHeight(),
                this.props.fileType,
              )),
              this.props.closeModal?.();
          }
          UpdateCrop(g, i) {
            this.setState({ region: i });
          }
          GetDestWidth() {
            const { uploadFile: g, forceResolution: i } = this.props;
            if (i) return i.width;
            const c = g.GetCurrentImageOption();
            if (!c) return 0;
            const h = T.Fj[c.artworkType].width;
            return c ? (0, T.qj)(h) : 0;
          }
          GetDestHeight() {
            const { uploadFile: g, forceResolution: i } = this.props;
            if (i) return i.width;
            const c = g.GetCurrentImageOption();
            if (!c) return 0;
            const h = T.Fj[c.artworkType].height;
            return c ? (0, T.qj)(h) : 0;
          }
          GetLargestBoxThatFits(g, i, c, h) {
            let m = c,
              D = (m * i) / Math.max(g, 1);
            return (
              D > h && ((D = h), (m = (D * g) / Math.max(i, 1))),
              { width: m, height: D }
            );
          }
          GetPreviewWindowStyle() {
            const { region: g } = this.state,
              i = this.GetLargestBoxThatFits(
                this.GetDestWidth(),
                this.GetDestHeight(),
                500,
                150,
              ),
              c = i.width,
              h = i.height,
              m = 1 / Math.max(g.widthPct / 100, 1e-4),
              D = 1 / Math.max(g.heightPct / 100, 1e-4),
              A = (this.props.uploadFile.width * g.xPosPct) / 100,
              x = (this.props.uploadFile.height * g.yPosPct) / 100,
              O = (c * m) / this.props.uploadFile.width,
              f = (h * D) / this.props.uploadFile.height,
              k = -A * O,
              j = -x * f;
            return {
              width: c,
              height: h,
              backgroundPosition: `${k}px ${j}px`,
              backgroundSize: `${100 * m}% ${100 * D}%`,
              backgroundImage: `url(${this.props.uploadFile.dataUrl})`,
            };
          }
          render() {
            const g = (this.GetDestWidth() / this.props.uploadFile.width) * 100,
              i = (this.GetDestHeight() / this.props.uploadFile.height) * 100,
              c = this.GetLargestBoxThatFits(
                this.props.uploadFile.width,
                this.props.uploadFile.height,
                800,
                500,
              );
            return (0, e.jsx)(y.x_, {
              onEscKeypress: this.props.closeModal,
              bDisableBackgroundDismiss: !0,
              children: (0, e.jsxs)("div", {
                className: (0, M.A)("DialogContent", "_DialogCenterVertically"),
                children: [
                  (0, e.jsx)(C.iK, {
                    children: (0, P.we)(
                      "#ImageUpload_CropModalTitleDims",
                      this.GetDestWidth(),
                      this.GetDestHeight(),
                    ),
                  }),
                  (0, e.jsx)("div", {
                    className: (0, M.A)("DialogBodyText"),
                    children: (0, P.we)("#ImageUpload_CropModalDescription"),
                  }),
                  (0, e.jsxs)("div", {
                    className: d.CropImage,
                    style: { width: c.width, height: c.height },
                    children: [
                      (0, e.jsx)("img", {
                        style: {
                          maxWidth: "100%",
                          maxHeight: "100%",
                          objectFit: "contain",
                        },
                        src: this.props.uploadFile.dataUrl,
                      }),
                      (0, e.jsx)(L.I, {
                        bLockAspectRatio: !0,
                        bDisableLink: !0,
                        index: 0,
                        updateFn: this.UpdateCrop,
                        xPosPct: 0,
                        yPosPct: 0,
                        widthMinPct: g,
                        heightMinPct: i,
                        widthPct: g,
                        heightPct: i,
                      }),
                    ],
                  }),
                  (0, e.jsxs)("div", {
                    className: d.CropPreviewGroup,
                    children: [
                      (0, e.jsx)("div", {
                        className: d.CropPreviewLabel,
                        children: (0, P.we)("#ImageUpload_CropPreview"),
                      }),
                      (0, e.jsx)("div", {
                        style: this.GetPreviewWindowStyle(),
                      }),
                    ],
                  }),
                  (0, e.jsx)(C.jn, {
                    onClick: this.OnCrop,
                    children: (0, P.we)("#ImageUpload_CropAndContinue"),
                  }),
                ],
              }),
            });
          }
        }
        u([a.oI], s.prototype, "OnCrop", 1),
          u([a.oI], s.prototype, "UpdateCrop", 1);
        async function p(b, g, i, c, h, m, D, A, x) {
          return new Promise((O, f) => {
            const k = _(x);
            if (!k) {
              f("Invalid format provided");
              return;
            }
            const j = document.createElement("canvas");
            (j.width = D),
              (j.height = A),
              j.getContext("2d")?.drawImage(g, i, c, h, m, 0, 0, D, A),
              j.toBlob((Y) => {
                const ee = j.toDataURL(k);
                if (x !== w.bg.dU && ee.startsWith("data:image/png")) {
                  f("Unable to encode into the requested file format");
                  return;
                }
                if (!Y) {
                  f("Unable to apply crop into image");
                  return;
                }
                (b.file = (0, n.pE)(Y, b.filename)),
                  (b.width = D),
                  (b.height = A),
                  (b.dataUrl = ee),
                  (b.uploadTime = Date.now()),
                  (b.bCropped = !0),
                  O();
              });
          });
        }
        function _(b) {
          switch (b) {
            case w.bg.dU:
              return "image/png";
            case w.bg.iS:
              return "image/jpeg";
          }
        }
      },
      95603: (H, W, t) => {
        "use strict";
        t.d(W, { Ss: () => C, hk: () => L });
        var e = t(7850),
          l = t(90626),
          T = t(72739),
          w = t(82734);
        function C(a, d) {
          const E = l.useRef(void 0),
            n = l.useCallback(
              (u) => {
                u.currentTarget.files.length > 0 &&
                  (a(u.currentTarget.files), (u.currentTarget.value = ""));
              },
              [a],
            ),
            o = l.useCallback(() => E.current.click(), []);
          return [
            T.createPortal(
              (0, e.jsx)("form", {
                onSubmit: M,
                style: { display: "none" },
                children: (0, e.jsx)("input", {
                  ...d,
                  type: "file",
                  ref: E,
                  onChange: n,
                }),
              }),
              window.document.body,
            ),
            o,
          ];
        }
        function L(a) {
          const [d, E] = l.useState(!1),
            n = l.useCallback((p) => {
              ((p.dataTransfer.files && p.dataTransfer.files[0]) ||
                (p.dataTransfer.types && p.dataTransfer.types[0] == "Files")) &&
                E(!0);
            }, []),
            o = l.useCallback((p) => {
              w.NO(p) && E(!1);
            }, []),
            r = l.useCallback(() => E(!1), []),
            u = d ? M : void 0,
            s = l.useCallback(
              (p) => {
                p.dataTransfer.files?.length &&
                  (a(p.dataTransfer.files, p),
                  p.preventDefault(),
                  p.stopPropagation()),
                  E(!1);
              },
              [a],
            );
          return [
            {
              onDragEnter: n,
              onDragLeave: o,
              onDragEnd: r,
              onDragOver: u,
              onDrop: s,
            },
            d,
          ];
        }
        async function y(a, d = 1e3) {
          return await new Promise((E, n) => {
            const o = new Image();
            (o.src = a),
              (o.onload = () => E("success")),
              (o.onerror = () => E("error")),
              d > 0 && window.setTimeout(() => E("timeout"), d);
          });
        }
        function M(a) {
          a.preventDefault();
        }
        function P(a) {
          switch (a.type) {
            case "image/jpeg":
              return "jpg";
            case "image/png":
              return "png";
            case "image/gif":
              return "gif";
            default:
              const d = a.name.match(/(?<=\.)[^.]+$/);
              return d ? d[0] : void 0;
          }
        }
      },
      27828: (H) => {
        H.exports = {
          EyeDropperCtn: "_5jKe2NV9CM3JA3hcMALLw",
          EyeDropperBtn: "_3afPQT_fEWmhHhFHS-WIk7",
          ColorPickerCtn: "Nn2-w0eqLuugAR-Udm--3",
          ColorPickerDialog: "_32PwNSgquR6tGAPIBcWgVq",
        };
      },
      71647: (H) => {
        H.exports = {
          DragAndDropContainer: "_2RL1a79W53-tCW7090DcUp",
          DragAndDropContainerDragging: "wn604fTvW5SH1o852jAnI",
          ImageUploadBar: "_2Zk7b2c_FLMvZPqYvzTzt5",
          SelectImageButton: "_3Cd9cpywFS-01PilCrgOQo",
        };
      },
      27344: (H) => {
        H.exports = {
          ImageDimensionTooSmall: "_1A6oRywbsuzGxawqTexX6G",
          UploadPreviewCtn: "_1x7wvgGW08t0c2auyfWyAs",
          UploadPreviewButtonsCtn: "_2Vsz0Teq375iSLvbdoaCw0",
          UploadPreviewDelete: "_1898rmbQKDsZukkFbEda-H",
          UploadPreviewButton: "wUyDKp6qikfxWISsHWYI5",
          UploadPreviewError: "_2sh7mSiQmyBdLyJPYPva2L",
          UploadPreviewWarning: "-khhIHR9pWYus_nTScWdO",
          UploadPreviewMessage: "_3kt_NxdtRh4OR_iFeApvM9",
          UploadPreview: "_3dSNtZdgIHIa6P9ZODRBJs",
          PreviewImgCtn: "a4db1xuziijkLJ6HQXeEs",
          PreviewImgInfo: "ddYEDOKiU6ZFhNI4sb_eQ",
        };
      },
      12916: (H) => {
        H.exports = {
          EventTimeSection: "_3HyTVTASSmLacvaM964sgu",
          EventTimeTitle: "_2lG5hFYhu9PGPn6RoFeQOL",
          EventVisibilityItem: "_1she-lvNiCP3ASjTnl4q7x",
          EventEditorInputPaneContainer: "_1fCy4cz5Hyj9wDivcVseuc",
          TimeWidth: "_3JGsBe8Ou5QGqfihv0OPed",
          EventPublishTimeCtn: "_2QIVvn2p9gUwsAlifi-nkM",
          DateWidth: "_2P2kw0vHZogg7Ny7cAjQBo",
          PacificTimeHint: "_18FxDrpsfO5Tt8EFui49hV",
          TimeZone: "-x3Rw6W2fJfWRMs7vKr1I",
          ClearButton: "TzhaDn0jN2ILks403xqXQ",
          InputBorder: "_1_H1sN2GVTzxSaz55gv03s",
          TimeBlock: "_2xLBsAMYVDoygyWbl2YIzI",
          TimeRowContainer: "BWmgg29ZeDbO6oj7Z1U7T",
          TimeRowDropDown: "_3ECiyuGLUqPzuS1hKCdfDm",
          EndDateAmountCtn: "_1BIlZEGSO_4tw5Lmc1Kkbf",
          EndRound: "jwuNowbLB28M6nkqFkF_C",
          VisibilityItemList: "_3B0QM3cOEqER2AD2Y85NFy",
          VisibilityItems: "_1WleIEEiF-9nJ57tLWkRmS",
          EventEditorVisibilityCtn: "_4gWwydbAbp2t1NCeW9LLV",
          DateErrorCtn: "_1Ao_g72kBAdoOo0lGUG7Mr",
        };
      },
      81315: (H) => {
        H.exports = {
          LinkRegionDragBox: "Rtlc-BB1aJFRIM1lH4zN1",
          EdgeDown: "i9zrHPy0-LgZONeZE4fgG",
          LinkRegionGridBox: "_1Ob4AvWwUMx67yR7owjqse",
          LinkRegionEdge: "_2stP4WlwIxd0-9GjYyI7vF",
          TopLeft: "Clgi---P85XXv25yLZwB0",
          Top: "_2Z9VyBAzofV3JvK__dECbX",
          TopRight: "_2-8DbI8PAEkk6i_0CoUeKM",
          Left: "_3ZwUw4ojIRguwHHAcn2Y4y",
          Middle: "_1HecozzoSZfUZSci9dLkxN",
          LinkRegionDelete: "_3Hb3w5_ECwPKcEr5QSAsNk",
          LinkRegionSettings: "VazMl4niFnodlVJhHIGlL",
          Right: "_3h5fKwHq9Uj2VGs8qxxtLl",
          BottomLeft: "_2CQe0cOBOLqq6y6KAUXqH3",
          Bottom: "sIHlK9sN2255-irERXD_V",
          BottomRight: "_3lnwjSWK9Gh1dFkD46NTpP",
          topleft: "_3W096h6Ka6U7sOZVa9lXQo",
          top: "_1iRW1Msfh60zHqD-xe4EAk",
          topright: "_1Yrl7AkNVVGwbM2vyL8yY1",
          left: "_2iBrmAEyXuaKAeZ-g-4CPF",
          right: "_15t6A4l27DY4KRL1aAUTTS",
          bottomleft: "_3SdBcnCBApw0fQ886qgsUx",
          bottom: "_2kzZ9Ilwo92sEI9LXTtZjN",
          bottomright: "_2AKXkFPsIBpG-HeeN58Rti",
          middle: "_1CS75ZrrDXna6xatw5ZvPR",
          LinkRegionButtonContainer: "_1ZJ42NPmBFvIcOai51ZKv3",
          DialogButton: "nN2Q1qGmO2BGMhVnIVMce",
          LinkRegionInfo: "_3TiV7d40PX30wy8UghFCaJ",
          LinkText: "_2TAc2iPcWUHTtwlg7urHv8",
        };
      },
      64641: (H) => {
        H.exports = {
          v6: "_2LxgdMcpWJRjkxZKbmeEEb",
          SubText: "vg0EOhKTLB3tLvshHMr7l",
          AvatarImageContainer: "_33hdFBTwBs64Fcp-bPdf4E",
          GameImageContainer: "_2OYADGuBPiyF7h50OJ0P1B",
          AvatarImage: "_2CQYcCggCXwVzZj2GWng5-",
          STV_HomeGridPreviewDetails: "Yncr-T63YFSJ46cq4Z2BJ",
          ChatAvatarImage: "_1cUR_vD8IvfJgOK1r89j4o",
          EditButton: "VsZ-bdWSNpnM9Vg6gkSyD",
          Small: "_3M4j828iWSVEZZAkypcBi1",
          FlexCenter: "_1R3ycnbAGUAy01o0TW7NNo",
          ThrobberCtn: "_3m7p67FD1Ynjm3BnyyjSSS",
          MarkdownLink: "_1WqumifyJucGDxm2oI6yRQ",
          SummaryTextArea: "cNMZ-dcMVhaQJFes_Ivwo",
          RemoveIcon: "_3NeLW5LAka4S9__PaMFE_J",
        };
      },
      50666: (H) => {
        H.exports = {
          CropImage: "_3qfqTaQ35U6AO3FNeijcFV",
          CropPreviewGroup: "_1RI-QM2ZjK9MaVjeCLE_LF",
          CropPreviewLabel: "_3_zyLDUyxZNyexfX3kNOPv",
        };
      },
      44894: (H, W, t) => {
        "use strict";
        t.d(W, { A: () => e });
        const e =
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAcJJREFUeNqkUz1PAkEQfStggjESejU0GozlGqn8SGywkYIYY0IsaLCwIBTQUN5fMLGm8S8QSWwslVAYjAlUBEJDhCgWwp3nzN6eHqIVl8zN7rx5b+dm9oRt25jlmcOMj59f10JAkPcBcXIGWdECyqYn6TfGdZ9S9d4K4gQYx4WCtJzE+G/sKJudwpQABUGnGSf5vKzX60jmctL8SYzz+iCdls1mEzuplMIsLSC4iSUh1ClUlpHIZGStVkM0GsVNqVRlIJZIyG63i1AohMdKpUrZRQqXz4j7LWA7VSiR/WRSNhsNRRgOh+i02wgGg3hrtRSZelLmI6cExs7nKJGVtTX50uupMn0+H157PUWmZpYDXLoWUFPo6MC87jivx4MBFtxOWZYS11VipNdT98DWDVsPh2XQNLFIMdc4xpg9OZ3JMdIpRowSXVKt36+yuXvGxn+N0XS+3zj0kG+JSPEi261H5FCLmN9lUyNWyZ+Qag54eA6Hbfa8j1A88g+2qrlqCkKIZdovbAG7m8D5E3B5D9xR7IPsk/u7DextABd14OrBwd6J23YFligQ0IPwXE7lbedXUAPya5yHMiLuq5j1d/4SYAAj3NATBGE4PgAAAABJRU5ErkJggg==";
      },
    },
  ]);
})();
