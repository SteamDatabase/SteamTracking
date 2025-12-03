/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkappmgmt_storeadmin =
  self.webpackChunkappmgmt_storeadmin || []).push([
  [7267],
  {
    81315: (e) => {
      e.exports = {
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
    50666: (e) => {
      e.exports = {
        CropImage: "_3qfqTaQ35U6AO3FNeijcFV",
        CropPreviewGroup: "_1RI-QM2ZjK9MaVjeCLE_LF",
        CropPreviewLabel: "_3_zyLDUyxZNyexfX3kNOPv",
      };
    },
    3577: (e, t, i) => {
      "use strict";
      function s() {
        let e, t;
        return {
          promise: new Promise((i, s) => {
            (e = i), (t = s);
          }),
          resolve: e,
          reject: t,
        };
      }
      function n(e) {
        return new Promise((t) => setTimeout(t, e));
      }
      i.d(t, { x0: () => s, yI: () => n });
    },
    73744: (e, t, i) => {
      "use strict";
      i.d(t, {
        Ek: () => P,
        FZ: () => a,
        Fj: () => y,
        Hj: () => r,
        Ho: () => k,
        Kf: () => u,
        N_: () => C,
        PL: () => h,
        XY: () => T,
        Yw: () => n,
        _d: () => l,
        cV: () => g,
        dM: () => d,
        on: () => c,
        qj: () => p,
        s4: () => E,
        tW: () => o,
        vz: () => v,
        x: () => f,
        yu: () => I,
      });
      var s = i(37403);
      const n = ["app_header_capsule", "app_main_capsule"],
        a = [
          "sale_header",
          "sale_logo",
          "capsule",
          "product_banner",
          "product_mobile_banner",
          "localized_title_image",
        ],
        o = ["takeunder_art", "takeunder_mobile_art"],
        r = [
          "takeover_art",
          "takeover_mobile_art",
          "takeover_webm_art",
          "takeover_mp4_art",
          "takeover_webm_mobile_art",
          "takeover_mp4_mobile_art",
        ],
        l = ["marketingmessage_art", "marketingmessage_art_2"],
        c = [
          "marketingmessage_art_eventcapsule",
          "marketingmessage_art_2_eventcapsule",
        ],
        h = ["spotlight_art"],
        g = [...n, ...a, ...o, ...r, ...l, ...c, ...h];
      function p(e) {
        return Array.isArray(e) ? e[0] : e;
      }
      function d(e) {
        const t = Array.isArray(e) ? e : [e];
        return Math.min(...t);
      }
      function u(e, t) {
        return void 0 === t ? p(e) : Array.isArray(e) ? e[t] : e;
      }
      const m = [
          s.bg.k_EClanImageFileType_JPEG,
          s.bg.k_EClanImageFileType_PNG,
          s.bg.k_EClanImageFileType_GIF,
          s.bg.k_EClanImageFileType_WEBP,
        ],
        _ = [
          s.bg.k_EClanImageFileType_JPEG,
          s.bg.k_EClanImageFileType_PNG,
          s.bg.k_EClanImageFileType_GIF,
        ],
        b = [s.bg.k_EClanImageFileType_JPEG, s.bg.k_EClanImageFileType_PNG],
        k = [s.bg.k_EClanImageFileType_WEBM, s.bg.k_EClanImageFileType_MP4],
        f = [s.bg.k_EClanImageFileType_SRT, s.bg.k_EClanImageFileType_VTT],
        w = [
          s.bg.k_EClanImageFileType_JPEG,
          s.bg.k_EClanImageFileType_PNG,
          s.bg.k_EClanImageFileType_GIF,
          s.bg.k_EClanImageFileType_WEBP,
          s.bg.k_EClanImageFileType_WEBM,
          s.bg.k_EClanImageFileType_MP4,
        ],
        y = {
          capsule: { width: 800, height: 450, rgAcceptableTypes: b },
          marketingmessage_art_2_eventcapsule: {
            width: 800,
            height: 450,
            rgAcceptableTypes: b,
          },
          marketingmessage_art_eventcapsule: {
            width: 800,
            height: 450,
            rgAcceptableTypes: b,
          },
          spotlight: { width: 2108, height: 460, rgAcceptableTypes: b },
          localized_store_app_spotlight: {
            width: 1200,
            height: 260,
            rgAcceptableTypes: b,
          },
          localized_store_app_spotlight_mobile: {
            width: 500,
            height: 160,
            rgAcceptableTypes: b,
          },
          localized_title_image: {
            width: 1920,
            height: 622,
            rgAcceptableTypes: b,
          },
          background: { width: 1920, height: 622, rgAcceptableTypes: b },
          hero: {
            width: 0,
            height: 0,
            bDisableEnforceDimensions: !0,
            rgAcceptableTypes: b,
          },
          email_full: { width: 800, height: 300, rgAcceptableTypes: b },
          email_centered: { width: 644, height: 300, rgAcceptableTypes: b },
          broadcast_left: {
            width: [199, 155],
            height: [433, 337],
            rgAcceptableTypes: b,
          },
          broadcast_right: {
            width: [199, 155],
            height: [433, 337],
            rgAcceptableTypes: b,
          },
          sale_header: {
            width: 0,
            height: 0,
            bDisableEnforceDimensions: !0,
            rgAcceptableTypes: _,
          },
          sale_overlay: {
            width: 0,
            height: 0,
            bDisableEnforceDimensions: !0,
            rgAcceptableTypes: _,
          },
          localized_image_group: {
            width: 0,
            height: 0,
            bDisableEnforceDimensions: !0,
            rgAcceptableTypes: b,
          },
          localized_background_art: {
            width: 0,
            height: 0,
            bDisableEnforceDimensions: !0,
            rgAcceptableTypes: b,
          },
          sale_section_background: {
            width: 0,
            height: 0,
            bDisableEnforceDimensions: !0,
            rgAcceptableTypes: _,
          },
          sale_section_title: {
            width: 0,
            height: 0,
            bDisableEnforceDimensions: !0,
            rgAcceptableTypes: _,
          },
          link_capsule: {
            width: 0,
            height: 0,
            bDisableEnforceDimensions: !0,
            rgAcceptableTypes: b,
          },
          product_banner: {
            width: [1200, 1100],
            height: [175, 160],
            rgAcceptableTypes: b,
          },
          product_mobile_banner: {
            width: 500,
            height: 160,
            rgAcceptableTypes: b,
          },
          product_banner_override: {
            width: [1200, 1100],
            height: [175, 160],
            rgAcceptableTypes: b,
          },
          product_mobile_banner_override: {
            width: 500,
            height: 160,
            rgAcceptableTypes: b,
          },
          schedule_track_art: { width: 196, height: 92, rgAcceptableTypes: b },
          tab_bar_background: {
            width: 1500,
            height: 100,
            rgAcceptableTypes: b,
          },
          sale_logo: {
            width: [1200, 940],
            height: [460, 460],
            rgAcceptableTypes: b,
          },
          bestofyear_banner: { width: 1100, height: 160, rgAcceptableTypes: _ },
          bestofyear_banner_mobile: {
            width: 500,
            height: 160,
            rgAcceptableTypes: _,
          },
          localized_marketing_message: {
            width: 570,
            height: 600,
            rgAcceptableTypes: m,
          },
          localized_optin_banner: {
            width: 1e3,
            height: 150,
            rgAcceptableTypes: b,
          },
          localized_marketingmessage_webm: {
            width: 570,
            height: 600,
            rgAcceptableTypes: [s.bg.k_EClanImageFileType_WEBM],
          },
          localized_marketingmessage_mp4: {
            width: 570,
            height: 600,
            rgAcceptableTypes: [s.bg.k_EClanImageFileType_MP4],
          },
          localized_partnerevent_webm: {
            width: 800,
            height: 450,
            rgAcceptableTypes: [s.bg.k_EClanImageFileType_WEBM],
          },
          localized_partnerevent_mp4: {
            width: 800,
            height: 450,
            rgAcceptableTypes: [s.bg.k_EClanImageFileType_MP4],
          },
          localized_subtitles: {
            width: 0,
            height: 0,
            bDisableEnforceDimensions: !0,
            rgAcceptableTypes: [
              s.bg.k_EClanImageFileType_VTT,
              s.bg.k_EClanImageFileType_SRT,
            ],
          },
          localized_marketingmessage_poster: {
            width: 528,
            height: 297,
            rgAcceptableTypes: [
              s.bg.k_EClanImageFileType_JPEG,
              s.bg.k_EClanImageFileType_PNG,
            ],
          },
          localized_marketingmessage_background: {
            width: 570,
            height: 600,
            rgAcceptableTypes: b,
          },
          localized_email_image: {
            width: 0,
            height: 0,
            bDisableEnforceDimensions: !0,
            rgAcceptableTypes: b,
          },
          template_asset: {
            width: 0,
            height: 0,
            bDisableEnforceDimensions: !0,
            rgAcceptableTypes: w,
          },
          user_poll_background: {
            width: 0,
            height: 0,
            bDisableEnforceDimensions: !0,
            rgAcceptableTypes: b,
          },
          spotlight_art: {
            width: [306, 374],
            height: [260, 448],
            rgAcceptableTypes: _,
          },
          old_spotlight_art: { width: 306, height: 350, rgAcceptableTypes: _ },
          marketingmessage_art: {
            width: 570,
            height: 600,
            rgAcceptableTypes: _,
          },
          marketingmessage_art_2: {
            width: 570,
            height: 600,
            rgAcceptableTypes: _,
          },
          takeover_art: { width: 1850, height: 450, rgAcceptableTypes: _ },
          takeover_webm_art: {
            width: 1850,
            height: 450,
            rgAcceptableTypes: [s.bg.k_EClanImageFileType_WEBM],
          },
          takeover_mp4_art: {
            width: 1850,
            height: 450,
            rgAcceptableTypes: [s.bg.k_EClanImageFileType_MP4],
          },
          takeover_mobile_art: {
            width: 500,
            height: 350,
            rgAcceptableTypes: _,
          },
          takeover_webm_mobile_art: {
            width: 500,
            height: 350,
            rgAcceptableTypes: [s.bg.k_EClanImageFileType_WEBM],
          },
          takeover_mp4_mobile_art: {
            width: 500,
            height: 350,
            rgAcceptableTypes: [s.bg.k_EClanImageFileType_MP4],
          },
          takeunder_art: { width: 940, height: 150, rgAcceptableTypes: _ },
          takeunder_mobile_art: {
            width: 500,
            height: 160,
            rgAcceptableTypes: _,
          },
          app_header_capsule: { width: 920, height: 430, rgAcceptableTypes: b },
          app_main_capsule: { width: 1232, height: 706, rgAcceptableTypes: b },
        };
      function P(e, t, i, s) {
        let n = null;
        if (Array.isArray(i)) {
          if (
            ((n = i
              .map((t, i) => (e === t ? i : void 0))
              .filter((e) => void 0 !== e)),
            n.length <= 0)
          )
            return !1;
        } else if (e !== i) return !1;
        if (Array.isArray(s)) {
          const e = s
            .map((e, i) => (t === e ? i : void 0))
            .filter((e) => void 0 !== e);
          if (e.length <= 0) return !1;
          if (n?.length && !e.some((e) => n.includes(e))) return !1;
        } else if (t !== s) return !1;
        return !0;
      }
      function I(e, t, i, s) {
        const n = y[i];
        return (
          !!n &&
          (n.bDisableEnforceDimensions ? !!s : P(e, t, n.width, n.height))
        );
      }
      function E(e, t, i) {
        const s = y[i];
        if (!s) return !1;
        if (s.bDisableEnforceDimensions) return !0;
        if (Array.isArray(s.width)) {
          if (s.width.filter((t) => e < t).length == s.width.length) return !1;
        } else if (e < s.width) return !1;
        if (Array.isArray(s.height)) {
          if (s.height.filter((e) => t < e).length == s.height.length)
            return !1;
        } else if (t < s.height) return !1;
        return !0;
      }
      function T(e) {
        const t = y[e];
        return (
          t.rgAcceptableTypes.includes(s.bg.k_EClanImageFileType_VTT) ||
          t.rgAcceptableTypes.includes(s.bg.k_EClanImageFileType_SRT)
        );
      }
      function v(e, t) {
        return t.filter((t) => C(e, t));
      }
      function C(e, t) {
        return y[t].rgAcceptableTypes.includes(e);
      }
    },
    78511: (e, t, i) => {
      "use strict";
      i.d(t, { o: () => r, q: () => l });
      var s = i(34629),
        n = i(14947),
        a = i(37403),
        o = i(82705);
      function r(e) {
        return "waiting" == e || "uploading" == e || "processing" == e;
      }
      class l {
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
        constructor(e, t, i, s, r) {
          (0, n.Gn)(this),
            (this.file = e),
            (this.filename = t),
            (this.fileType = (0, o.yh)(t) ?? a.bg.k_EClanImageFileType_Unknown),
            (this.language = i),
            (this.uploadTime = Date.now()),
            (this.status = "pending"),
            (this.m_originalSize = r),
            (this.height = r.height),
            (this.width = r.width),
            (this.m_originalDataUrl = s),
            (this.dataUrl = s);
        }
        ResetImage() {
          (this.height = this.m_originalSize.height),
            (this.width = this.m_originalSize.width),
            (this.dataUrl = this.m_originalDataUrl);
        }
        GetImageOptionLabel() {}
      }
      (0, s.Cg)([n.sH], l.prototype, "dataUrl", void 0),
        (0, s.Cg)([n.sH], l.prototype, "width", void 0),
        (0, s.Cg)([n.sH], l.prototype, "height", void 0),
        (0, s.Cg)([n.sH], l.prototype, "status", void 0),
        (0, s.Cg)([n.sH.ref], l.prototype, "message", void 0),
        (0, s.Cg)([n.sH], l.prototype, "language", void 0);
    },
    64953: (e, t, i) => {
      "use strict";
      i.d(t, { IS: () => g, M7: () => d, T2: () => p });
      var s = i(34629),
        n = i(14947),
        a = i(73744),
        o = i(61859),
        r = i(78511),
        l = i(66331),
        c = i(82817);
      class h extends r.q {
        m_rgImageOptions;
        m_currentImageOption = void 0;
        m_currentImageOptionKey = void 0;
        constructor(e, t, i, s, a, o) {
          super(e, t, i, a, o), (0, n.Gn)(this), (this.m_rgImageOptions = s);
        }
        IsValidAssetType(e, t) {
          let i = 0,
            s = 0,
            n = !1,
            r =
              !this.m_rgImageOptions ||
              0 === this.m_rgImageOptions.length ||
              this.m_rgImageOptions.some(
                (e) => e.sKey == this.GetCurrentImageOption()?.sKey,
              );
          if (e) (i = e.width), (s = e.height), (n = !0);
          else if (this.GetCurrentImageOption()) {
            const e = a.Fj[this.GetCurrentImageOption().artworkType];
            e &&
              ((i = e.width),
              (s = e.height),
              (n = !e.bDisableEnforceDimensions));
          }
          const h = this.width >= (0, a.dM)(i) && this.height >= (0, a.dM)(s),
            g = n ? (0, a.Ek)(this.width, this.height, i, s) : h,
            p = t && t != this.fileType,
            d =
              !!(this.m_rgImageOptions && this.m_rgImageOptions.length > 0) &&
              0 ==
                (0, a.vz)(
                  this.fileType,
                  this.m_rgImageOptions?.map((e) => e.artworkType) || [],
                ).length,
            u = Boolean((0, l.t)(this.fileType));
          let m,
            _ = "",
            b = !1;
          return (
            r
              ? d
                ? (_ = (0, o.we)("#ImageUpload_InvalidFileType"))
                : p
                  ? (_ = (0, o.we)(
                      "#ImageUpload_InvalidFormat",
                      (0, c.EG)(t) ?? "",
                    ))
                  : g || u
                    ? h
                      ? !g && u
                        ? ((_ = (0, o.we)(
                            "#ImageUpload_InvalidDimensions",
                            (0, a.qj)(i),
                            (0, a.qj)(s),
                          )),
                          (b = !0))
                        : ((Array.isArray(i) && this.width != (0, a.qj)(i)) ||
                            (Array.isArray(s) &&
                              this.height != (0, a.qj)(s))) &&
                          ((m = m ?? []),
                          m.push(
                            (0, o.we)(
                              "#ImageUpload_PreferredDimension",
                              (0, a.qj)(i),
                              (0, a.qj)(s),
                            ),
                          ))
                      : (_ = (0, o.we)(
                          "#ImageUpload_TooSmall",
                          (0, a.qj)(i),
                          (0, a.qj)(s),
                        ))
                    : (_ = (0, o.we)(
                        "#ImageUpload_InvalidResolution",
                        (0, a.qj)(i),
                        (0, a.qj)(s),
                      ))
              : (_ = (0, o.we)("#ImageUpload_InvalidFormatSelected")),
            {
              error: _,
              warnings: m,
              needsCrop: b,
              match: this.GetCurrentImageOption(),
            }
          );
        }
        BSupportsLanguages() {
          return !0;
        }
        ComputeDefaultImageOption() {
          if (!this.m_rgImageOptions || 0 == this.m_rgImageOptions.length)
            return;
          const e = (0, a.vz)(
            this.fileType,
            this.m_rgImageOptions?.map((e) => e.artworkType),
          );
          let t = u(this.width, this.height, e, !1);
          if ((void 0 === t && (t = u(this.width, this.height, e, !0)), t)) {
            const e = this.m_rgImageOptions.find(
              (e) =>
                e.artworkType == t &&
                (!e.bEnforceDimensions ||
                  (e.width == this.width && e.height == this.height)),
            );
            if (e) return e;
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
          return this.m_currentImageOption ?? this.ComputeDefaultImageOption();
        }
        SetCurrentImageOption(e) {
          (this.m_currentImageOption = e),
            (this.m_currentImageOptionKey = e?.sKey);
        }
      }
      (0, s.Cg)([n.sH], h.prototype, "m_currentImageOption", void 0),
        (0, s.Cg)([n.sH], h.prototype, "m_currentImageOptionKey", void 0);
      class g extends h {
        video;
        constructor(e, t, i, s, n, a, o) {
          super(e, t, i, s, n, a), (this.video = o);
        }
        BIsOriginalMinimumDimensions(e) {
          return (0, a.s4)(
            this.video.videoWidth,
            this.video.videoHeight,
            e.artworkType,
          );
        }
        FileTypeMatchesImageTypes(e) {
          return (0, a.N_)(this.fileType, e.artworkType);
        }
        BIsVideo() {
          return a.Ho.includes(this.fileType);
        }
        GetResizeDimension() {}
      }
      class p extends h {
        constructor(e, t, i, s) {
          super(e, t, i, s, URL.createObjectURL(e), { width: 0, height: 0 });
        }
        BIsOriginalMinimumDimensions(e) {
          return (0, a.XY)(e.artworkType);
        }
        FileTypeMatchesImageTypes(e) {
          return (0, a.N_)(this.fileType, e.artworkType);
        }
        BIsVideo() {
          return a.Ho.includes(this.fileType);
        }
        GetResizeDimension() {}
      }
      class d extends h {
        bCropped = !1;
        localizedImageGroupPrimaryImage;
        media;
        constructor(e, t, i, s, a, o, r, l) {
          super(e, t, i, s, a, o),
            (0, n.Gn)(this),
            (this.media = r),
            (this.localizedImageGroupPrimaryImage = l);
        }
        IsValidAssetType(e, t) {
          return (
            (t = t ?? this.localizedImageGroupPrimaryImage?.file_type),
            super.IsValidAssetType(e, t)
          );
        }
        GetCanvasImageSource() {
          return this.media;
        }
        BIsOriginalMinimumDimensions(e) {
          return (0, a.s4)(
            this.media?.width ?? 0,
            this.media?.height ?? 0,
            e.artworkType,
          );
        }
        FileTypeMatchesImageTypes(e) {
          return (0, a.N_)(this.fileType, e.artworkType);
        }
        BIsVideo() {
          return a.Ho.includes(this.fileType);
        }
        GetResizeDimension() {
          return (function (e) {
            if ("background" === e)
              return [
                { width: 960, height: 311 },
                { width: 480, height: 156 },
              ];
            if ("capsule" === e)
              return [
                {
                  width: (0, a.qj)(a.Fj[e].width) / 2,
                  height: (0, a.qj)(a.Fj[e].height) / 2,
                },
              ];
            if ("spotlight" === e)
              return [
                {
                  width: (0, a.qj)(a.Fj[e].width) / 2,
                  height: (0, a.qj)(a.Fj[e].height) / 2,
                },
              ];
            return;
          })(this.GetCurrentImageOption()?.artworkType);
        }
      }
      function u(e, t, i, s = !1) {
        if (i)
          for (let n of i) {
            if (s ? (0, a.s4)(e, t, n) : (0, a.yu)(e, t, n)) return n;
          }
      }
      (0, s.Cg)([n.sH], d.prototype, "bCropped", void 0);
    },
    69343: (e, t, i) => {
      "use strict";
      i.d(t, {
        $l: () => c,
        PD: () => p,
        Vr: () => g,
        jj: () => d,
        ss: () => l,
      });
      var s = i(2160),
        n = i(22837),
        a = i(61859),
        o = i(41735),
        r = i.n(o);
      class l {}
      function c(e, t, i) {
        const s = e.filter((e) => {
          const s = e.IsValidAssetType(t, i);
          return "pending" === e.status && !s.error && !s.needsCrop;
        });
        return (
          s.forEach((e) => {
            (e.status = "waiting"), (e.message = "");
          }),
          s
        );
      }
      async function h(e, t, i, s, a, o) {
        const r = c(e, s, a),
          l = [];
        let h = 0;
        const g = Array.from({ length: Math.floor(t) }, () =>
          (async () => {
            for (; h < r.length; ) {
              const e = h++,
                t = r[e];
              t.status = "uploading";
              const s = await i(
                t,
                t.filename,
                t.language ?? n.gS.k_Lang_None,
                o,
              );
              (t.status = s.bSuccess ? "success" : "failed"),
                (t.message =
                  !s.bSuccess && s.elErrorMessage ? s.elErrorMessage : ""),
                (l[e] = { image: t, uploadResult: s });
            }
          })(),
        );
        return (
          await Promise.all(g),
          l.map((e) => ({
            bSuccess: e.uploadResult.bSuccess,
            image: e.image,
            uploadResult: e.uploadResult.result,
          }))
        );
      }
      class g extends l {
        m_cancel = void 0;
        async UploadAllImages(e, t) {
          this.m_cancel = r().CancelToken.source();
          const i = this.BGetUploadsAreInSerial() ? 1 : 4;
          let s;
          const a = this.UploadSingleImage.bind(this);
          return (
            (s =
              i > 1
                ? await h(
                    this.GetUploadImages(),
                    i,
                    a,
                    e,
                    t,
                    this.m_cancel.token,
                  )
                : await (async function (e, t, i, s, a) {
                    const o = c(e, i, s),
                      r = [];
                    for (const e of o) {
                      e.status = "uploading";
                      const i = await t(
                        e,
                        e.filename,
                        e.language ?? n.gS.k_Lang_None,
                        a,
                      );
                      (e.status = i.bSuccess ? "success" : "failed"),
                        (e.message =
                          !i.bSuccess && i.elErrorMessage
                            ? i.elErrorMessage
                            : ""),
                        r.push({
                          bSuccess: i.bSuccess,
                          image: e,
                          uploadResult: i.result,
                        });
                    }
                    return r;
                  })(this.GetUploadImages(), a, e, t, this.m_cancel.token)),
            s
          );
        }
        CancelAllUploads() {
          this.m_cancel?.cancel((0, a.we)("#ImageUpload_CancelRequest"));
        }
      }
      function p(e, t, i) {
        if (((null != e && null != e) || (e = t), !i || 0 === i.length))
          return e;
        for (const t of i) if (a.A0.IsELanguageValidInRealm(e, t)) return e;
        for (const e of i) if (a.A0.IsELanguageValidInRealm(t, e)) return t;
        return i.includes(s.TU.k_ESteamRealmGlobal)
          ? n.gS.k_Lang_English
          : n.gS.k_Lang_SteamChina_SChinese;
      }
      function d(e, t = n.gS.k_Lang_English) {
        let i = e.lastIndexOf(".");
        -1 != i && (e = e.slice(0, i).toLowerCase());
        let s = null,
          a = 0;
        e.endsWith("korean") && ((s = n.gS.k_Lang_Korean), (a = 6));
        for (let t = n.gS.k_Lang_English; t < n.gS.k_Lang_MAX; ++t) {
          const i = (0, n.ww)(t);
          if (i.length <= a) continue;
          if (e.endsWith(i) && e.length > i.length + 2) {
            const n = e[e.length - i.length - 1];
            /\p{Alphabetic}|\p{Number}/u.test(n) || ((s = t), (a = i.length));
          }
          const o = (0, n.Lg)(t);
          o.length <= a || (e.endsWith(o) && ((s = t), (a = o.length)));
        }
        return {
          language: s ?? t,
          baseFilename:
            a > 0
              ? ((o = e.substring(0, e.length - a)), o.replace(/[\s_-]+$/g, ""))
              : e,
        };
        var o;
      }
    },
    82705: (e, t, i) => {
      "use strict";
      i.d(t, { yh: () => n });
      i(90626);
      var s = i(37403);
      function n(e) {
        return (
          e.indexOf("?") > 0 && (e = e.split("?")[0]),
          e.endsWith(".jpg") || e.endsWith(".jpeg")
            ? s.bg.k_EClanImageFileType_JPEG
            : e.endsWith(".png")
              ? s.bg.k_EClanImageFileType_PNG
              : e.endsWith(".gif")
                ? s.bg.k_EClanImageFileType_GIF
                : e.endsWith(".mp4")
                  ? s.bg.k_EClanImageFileType_MP4
                  : e.endsWith(".webm")
                    ? s.bg.k_EClanImageFileType_WEBM
                    : e.endsWith(".vtt")
                      ? s.bg.k_EClanImageFileType_VTT
                      : e.endsWith(".srt")
                        ? s.bg.k_EClanImageFileType_SRT
                        : e.endsWith(".webp")
                          ? s.bg.k_EClanImageFileType_WEBP
                          : void 0
        );
      }
    },
    55263: (e, t, i) => {
      "use strict";
      i.d(t, {
        G6: () => g,
        Gg: () => u,
        MS: () => k,
        N4: () => s,
        Ow: () => d,
        gF: () => f,
        mZ: () => m,
        t7: () => p,
        zX: () => b,
      });
      var s,
        n = i(41735),
        a = i.n(n),
        o = i(90626),
        r = i(37085),
        l = i(15161),
        c = i(73745),
        h = i(82097);
      function g(e, t, i, n) {
        const l = (0, o.useRef)(void 0),
          g = (0, o.useRef)(void 0),
          p = (0, c.CH)();
        l.current = e;
        const [d, u] = (0, o.useState)(void 0),
          {
            include_assets: m,
            include_release: _,
            include_platforms: b,
            include_all_purchase_options: k,
            include_screenshots: f,
            include_trailers: w,
            include_ratings: y,
            include_tag_count: P,
            include_reviews: I,
            include_basic_info: E,
            include_supported_languages: T,
            include_full_description: v,
            include_included_items: C,
            include_assets_without_overrides: L,
            apply_user_filters: S,
            include_links: R,
          } = i;
        if (
          ((0, o.useEffect)(() => {
            const i = {
              include_assets: m,
              include_release: _,
              include_platforms: b,
              include_all_purchase_options: k,
              include_screenshots: f,
              include_trailers: w,
              include_ratings: y,
              include_tag_count: P,
              include_reviews: I,
              include_basic_info: E,
              include_supported_languages: T,
              include_full_description: v,
              include_included_items: C,
              include_assets_without_overrides: L,
              apply_user_filters: S,
              include_links: R,
            };
            let s = null;
            return (
              !e ||
                e < 0 ||
                h.A.Get().BHasStoreItem(e, t, i) ||
                (void 0 !== d && n && n == g.current) ||
                (n !== g.current && (u(void 0), (g.current = n)),
                (s = a().CancelToken.source()),
                h.A.Get()
                  .QueueStoreItemRequest(e, t, i)
                  .then((t) => {
                    s?.token.reason ||
                      l.current !== e ||
                      u(t == r.d.k_EResultOK),
                      p();
                  })),
              () => s?.cancel("useStoreItemCache: unmounting")
            );
          }, [e, t, n, d, m, _, b, k, f, w, y, P, I, E, T, v, C, L, S, R, p]),
          !e)
        )
          return [null, s.k_EStoreItemCacheState_Unavailable];
        if (!1 === d) return [void 0, s.k_EStoreItemCacheState_Unavailable];
        if (h.A.Get().BIsStoreItemMissing(e, t))
          return [void 0, s.k_EStoreItemCacheState_Unavailable];
        if (!h.A.Get().BHasStoreItem(e, t, i))
          return [void 0, s.k_EStoreItemCacheState_Loading];
        const A = h.A.Get().GetStoreItemWithLegacyVisibilityCheck(e, t);
        return A
          ? [A, s.k_EStoreItemCacheState_Found]
          : [null, s.k_EStoreItemCacheState_Unavailable];
      }
      function p(e, t, i) {
        return g(e, l.c6.k_EStoreItemType_App, t, i);
      }
      function d(e, t, i) {
        return g(e, l.c6.k_EStoreItemType_Bundle, t, i);
      }
      function u(e, t, i) {
        return g(e, l.c6.k_EStoreItemType_Package, t, i);
      }
      function m(e, t, i) {
        const [s, n] = g(e, t, i);
        let a;
        s?.GetStoreItemType() != l.c6.k_EStoreItemType_Package ||
          s.GetAssets()?.GetHeaderURL() ||
          1 != s?.GetIncludedAppIDs().length ||
          (a = s.GetIncludedAppIDs()[0]);
        const [o, r] = p(a, i);
        return a && o?.BIsVisible() ? [o, r] : [s, n];
      }
      function _(e, t, i, n) {
        const r = (0, c.CH)(),
          {
            include_assets: l,
            include_release: g,
            include_platforms: p,
            include_all_purchase_options: d,
            include_screenshots: u,
            include_trailers: m,
            include_ratings: _,
            include_tag_count: b,
            include_reviews: k,
            include_basic_info: f,
            include_supported_languages: w,
            include_full_description: y,
            include_included_items: P,
            include_assets_without_overrides: I,
            apply_user_filters: E,
            include_links: T,
          } = i;
        if (
          ((0, o.useEffect)(() => {
            if (!e || 0 == e.length) return;
            const i = {
                include_assets: l,
                include_release: g,
                include_platforms: p,
                include_all_purchase_options: d,
                include_screenshots: u,
                include_trailers: m,
                include_ratings: _,
                include_tag_count: b,
                include_reviews: k,
                include_basic_info: f,
                include_supported_languages: w,
                include_full_description: y,
                include_included_items: P,
                include_assets_without_overrides: I,
                apply_user_filters: E,
                include_links: T,
              },
              s = e.filter(
                (e) =>
                  !(
                    h.A.Get().BHasStoreItem(e, t, i) ||
                    h.A.Get().BIsStoreItemMissing(e, t)
                  ),
              );
            if (0 == s.length) return;
            const n = a().CancelToken.source(),
              o = s.map((e) => h.A.Get().QueueStoreItemRequest(e, t, i));
            return (
              Promise.all(o).then(() => {
                n.token.reason || r();
              }),
              () => n.cancel("useStoreItemCacheMultiplePackages: unmounting")
            );
          }, [e, t, n, r, l, g, p, d, u, m, _, b, k, f, w, y, P, I, E, T]),
          !e)
        )
          return s.k_EStoreItemCacheState_Unavailable;
        if (
          !e.every(
            (e) =>
              h.A.Get().BHasStoreItem(e, t, i) ||
              h.A.Get().BIsStoreItemMissing(e, t),
          )
        )
          return s.k_EStoreItemCacheState_Loading;
        return e.every((e) =>
          h.A.Get().GetStoreItemWithLegacyVisibilityCheck(e, t),
        )
          ? s.k_EStoreItemCacheState_Found
          : s.k_EStoreItemCacheState_Unavailable;
      }
      function b(e, t, i) {
        return _(e, l.c6.k_EStoreItemType_App, t, i);
      }
      function k(e, t, i) {
        return _(e, l.c6.k_EStoreItemType_Bundle, t, i);
      }
      function f(e, t, i) {
        return _(e, l.c6.k_EStoreItemType_Package, t, i);
      }
      !(function (e) {
        (e[(e.k_EStoreItemCacheState_Loading = 1)] =
          "k_EStoreItemCacheState_Loading"),
          (e[(e.k_EStoreItemCacheState_Unavailable = 2)] =
            "k_EStoreItemCacheState_Unavailable"),
          (e[(e.k_EStoreItemCacheState_Found = 3)] =
            "k_EStoreItemCacheState_Found");
      })(s || (s = {}));
    },
    82817: (e, t, i) => {
      "use strict";
      i.d(t, {
        EG: () => r,
        II: () => u,
        N1: () => m,
        S2: () => p,
        Uz: () => g,
        aL: () => h,
        ab: () => a,
        qR: () => o,
        zB: () => d,
      });
      var s = i(3577),
        n = i(37403);
      function a(e) {
        const t = e.toLowerCase();
        return t.endsWith(".jpg") || t.endsWith(".jpeg")
          ? "image/jpeg"
          : t.endsWith(".png")
            ? "image/png"
            : t.endsWith(".gif")
              ? "image/gif"
              : t.endsWith(".mp4")
                ? "video/mp4"
                : t.endsWith(".webm")
                  ? "video/webm"
                  : t.endsWith(".srt")
                    ? "text/srt"
                    : t.endsWith(".vtt")
                      ? "text/vtt"
                      : t.endsWith(".webp")
                        ? "image/webp"
                        : void 0;
      }
      function o(e) {
        switch (e) {
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
          console.error("ConvertMimeTypeToExtension:Unexepected mime type ", e),
          ".jpg"
        );
      }
      function r(e) {
        switch (e) {
          case n.bg.k_EClanImageFileType_JPEG:
            return ".jpg";
          case n.bg.k_EClanImageFileType_GIF:
            return ".gif";
          case n.bg.k_EClanImageFileType_PNG:
            return ".png";
          case n.bg.k_EClanImageFileType_WEBM:
            return ".webm";
          case n.bg.k_EClanImageFileType_MP4:
            return ".mp4";
          case n.bg.k_EClanImageFileType_SRT:
            return ".srt";
          case n.bg.k_EClanImageFileType_VTT:
            return ".vtt";
          case n.bg.k_EClanImageFileType_WEBP:
            return ".webp";
        }
      }
      function l(e) {
        const t = (0, s.x0)(),
          i = new Image();
        return (
          (i.onload = () => t.resolve(i)),
          (i.onerror = (e) => {
            console.error("LoadImage failed to load the image, details", e),
              t.resolve(void 0);
          }),
          (i.src = e),
          t.promise
        );
      }
      function c(e) {
        const t = (0, s.x0)(),
          i = document.createElement("video");
        return (
          (i.preload = "metadata"),
          i.addEventListener("loadedmetadata", () => t.resolve(i)),
          (i.onerror = (e) => {
            console.error("LoadVideo failed to load the video, details", e),
              t.resolve(void 0);
          }),
          (i.src = e),
          t.promise
        );
      }
      function h(e) {
        return e.startsWith("image/");
      }
      function g(e) {
        return e.startsWith("video/");
      }
      function p(e, t) {
        return t ? c(e) : l(e);
      }
      async function d(e, t) {
        if (t) return c(URL.createObjectURL(e));
        {
          const t = (0, s.x0)(),
            i = new FileReader();
          (i.onload = () => t.resolve(i.result ?? void 0)),
            (i.onerror = () => {
              console.error(
                "GetMediaElementFromFile failed to load the image, details",
                i.error,
              ),
                t.resolve(void 0);
            }),
            i.readAsDataURL(e);
          const n = await t.promise;
          if (!n) return;
          return l(n.toString());
        }
      }
      function u(e) {
        return e
          ? e instanceof HTMLVideoElement
            ? { width: e.videoWidth, height: e.videoHeight }
            : { width: e.width, height: e.height }
          : { width: 0, height: 0 };
      }
      function m(e, t) {
        if (!t) return e;
        const i = new Set([
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
        for (const s of t) i.has(s.name.toLowerCase()) || (e[s.name] = s.value);
        return e;
      }
    },
    81416: (e, t, i) => {
      "use strict";
      i.d(t, { I: () => m });
      var s,
        n = i(34629),
        a = i(90626),
        o = i(73745),
        r = i(75844),
        l = i(6144),
        c = i(61859),
        h = i(16676),
        g = i(12155),
        p = i(81315),
        d = i.n(p),
        u = i(25489);
      !(function (e) {
        (e.topleft = "topleft"),
          (e.top = "top"),
          (e.topright = "topright"),
          (e.left = "left"),
          (e.middle = "middle"),
          (e.right = "right"),
          (e.bottomleft = "bottomleft"),
          (e.bottom = "bottom"),
          (e.bottomright = "bottomright");
      })(s || (s = {}));
      let m = class extends a.Component {
        m_rectLinkRegion;
        m_elLinkRegionBox;
        m_nLocalOffsetXPct;
        m_nLocalOffsetYPct;
        m_fnMouseUp = null;
        m_fnMouseMove = null;
        m_listeners = new l.Ji();
        m_strDescription = "";
        m_aspectRatio = 1;
        componentWillUnmount() {
          this.m_listeners.Unregister();
        }
        constructor(e) {
          super(e),
            (this.state = {
              curLeftPosPct: this.props.xPosPct,
              curTopPosPct: this.props.yPosPct,
              curRightPosPct: 100 - (this.props.widthPct + this.props.xPosPct),
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
        LinkRegionBoxRef(e) {
          this.m_elLinkRegionBox = e;
        }
        OnMouseDown(e, t) {
          this.m_elLinkRegionBox?.parentElement &&
            this.m_elLinkRegionBox.ownerDocument.defaultView &&
            ((this.m_fnMouseUp = (e) => {
              this.OnMouseUp(e, t);
            }),
            (this.m_fnMouseMove = (e) => {
              this.OnMouseMove(e, t);
            }),
            this.setState({ EdgeDown: t }),
            (this.m_rectLinkRegion =
              this.m_elLinkRegionBox.parentElement.getBoundingClientRect()),
            (this.m_nLocalOffsetXPct =
              ((e.clientX - this.m_rectLinkRegion.left) /
                (this.m_rectLinkRegion.right - this.m_rectLinkRegion.left)) *
                100 -
              this.state.curLeftPosPct),
            (this.m_nLocalOffsetYPct =
              ((e.clientY - this.m_rectLinkRegion.top) /
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
            e.preventDefault(),
            e.stopPropagation();
        }
        OnMouseMove(e, t) {
          if (void 0 !== this.state.EdgeDown) {
            switch ((e.shiftKey && this.m_fnMouseUp(), t)) {
              case s.left:
                this.UpdateState({
                  curLeftPosPct: this.CalcLeftEdge(e.clientX),
                });
                break;
              case s.right:
                this.UpdateState({
                  curRightPosPct: this.CalcRightEdge(e.clientX),
                });
                break;
              case s.top:
                this.UpdateState({ curTopPosPct: this.CalcTopEdge(e.clientY) });
                break;
              case s.bottom:
                this.UpdateState({
                  curBottomPosPct: this.CalcBottomEdge(e.clientY),
                });
                break;
              case s.topleft:
                this.UpdateState({
                  curTopPosPct: this.CalcBottomEdge(e.clientY),
                  curLeftPosPct: this.CalcLeftEdge(e.clientX),
                });
                break;
              case s.topright:
                this.UpdateState({
                  curTopPosPct: this.CalcTopEdge(e.clientY),
                  curRightPosPct: this.CalcRightEdge(e.clientX),
                });
                break;
              case s.bottomleft:
                this.UpdateState({
                  curLeftPosPct: this.CalcLeftEdge(e.clientX),
                  curBottomPosPct: this.CalcBottomEdge(e.clientY),
                });
                break;
              case s.bottomright:
                this.UpdateState({
                  curRightPosPct: this.CalcRightEdge(e.clientX),
                  curBottomPosPct: this.CalcBottomEdge(e.clientY),
                });
                break;
              case s.middle: {
                const t = (0, u.OQ)(
                    this.CalcLeftEdge(e.clientX),
                    0,
                    100 - this.state.curWidthPct,
                  ),
                  i = 100 - (t + this.state.curWidthPct),
                  s = (0, u.OQ)(
                    this.CalcTopEdge(e.clientY),
                    0,
                    100 - this.state.curHeightPct,
                  ),
                  n = {
                    curLeftPosPct: t,
                    curRightPosPct: i,
                    curTopPosPct: s,
                    curBottomPosPct: 100 - (s + this.state.curHeightPct),
                  };
                this.setState(n);
                break;
              }
            }
            e.preventDefault(), e.stopPropagation();
          }
        }
        IsValidPct(e) {
          return e >= 0 && e <= 100;
        }
        UpdateState(e) {
          let t =
              void 0 !== e.curTopPosPct
                ? e.curTopPosPct
                : this.state.curTopPosPct,
            i =
              void 0 !== e.curBottomPosPct
                ? e.curBottomPosPct
                : this.state.curBottomPosPct,
            s =
              void 0 !== e.curLeftPosPct
                ? e.curLeftPosPct
                : this.state.curLeftPosPct,
            n =
              void 0 !== e.curRightPosPct
                ? e.curRightPosPct
                : this.state.curRightPosPct,
            a = (0, u.OQ)(
              100 - n - s,
              this.props.widthMinPct || 0,
              this.props.widthMaxPct || 100,
            ),
            o = (0, u.OQ)(
              100 - i - t,
              this.props.heightMinPct || 0,
              this.props.heightMaxPct || 100,
            );
          this.props.bLockAspectRatio &&
            (void 0 !== e.curLeftPosPct || void 0 !== e.curRightPosPct
              ? (o = a / this.m_aspectRatio)
              : (a = o * this.m_aspectRatio)),
            void 0 !== e.curLeftPosPct
              ? (s = 100 - n - a)
              : (n = 100 - (s + a)),
            void 0 !== e.curTopPosPct ? (t = 100 - i - o) : (i = 100 - (t + o));
          const r = 100 - n - s,
            l = 100 - i - t;
          this.IsValidPct(s) &&
            this.IsValidPct(n) &&
            this.IsValidPct(t) &&
            this.IsValidPct(i) &&
            this.IsValidPct(r) &&
            this.IsValidPct(l) &&
            this.setState({
              curLeftPosPct: s,
              curRightPosPct: n,
              curTopPosPct: t,
              curBottomPosPct: i,
            });
        }
        GetXPercent(e) {
          return this.m_rectLinkRegion
            ? ((e - this.m_rectLinkRegion.left) /
                (this.m_rectLinkRegion.right - this.m_rectLinkRegion.left)) *
                100 -
                (this.m_nLocalOffsetXPct ?? 0)
            : 0;
        }
        GetYPercent(e) {
          return this.m_rectLinkRegion
            ? ((e - this.m_rectLinkRegion.top) /
                (this.m_rectLinkRegion.bottom - this.m_rectLinkRegion.top)) *
                100 -
                (this.m_nLocalOffsetYPct ?? 0)
            : 0;
        }
        CalcLeftEdge(e) {
          return (0, u.OQ)(this.GetXPercent(e), 0, 100);
        }
        CalcRightEdge(e) {
          return (0, u.OQ)(
            100 - (this.GetXPercent(e) + this.state.curWidthPct),
            0,
            100,
          );
        }
        CalcTopEdge(e) {
          return (0, u.OQ)(this.GetYPercent(e), 0, 100);
        }
        CalcBottomEdge(e) {
          return (0, u.OQ)(
            100 - (this.GetYPercent(e) + this.state.curHeightPct),
            0,
            100,
          );
        }
        OnMouseUp(e, t) {
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
        OnSetLinkURLChange(e) {
          this.setState({
            text_link_url: e.target.value,
            valid_link: this.validateUrl(e.target.value),
          });
        }
        OnSetLinkDescriptionChange(e) {
          this.setState({ text_link_description: e.target.value });
        }
        validateUrl(e) {
          return (
            null != e &&
            /^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/i.test(
              e,
            )
          );
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
          let e = {
              left: this.state.curLeftPosPct + "%",
              top: this.state.curTopPosPct + "%",
              right: this.state.curRightPosPct + "%",
              bottom: this.state.curBottomPosPct + "%",
            },
            t = d().LinkRegionDragBox;
          return (
            null != this.state.EdgeDown &&
              (t += ` ${d().EdgeDown} ` + d()[this.state.EdgeDown]),
            a.createElement(
              "div",
              {
                className: t,
                style: e,
                ref: this.LinkRegionBoxRef,
                draggable: !1,
              },
              a.createElement(
                "div",
                { className: d().LinkRegionGridBox },
                a.createElement("div", {
                  className: `${d().LinkRegionEdge} ${d().TopLeft}`,
                  onMouseDown: (e) => {
                    this.OnMouseDown(e, s.topleft);
                  },
                  draggable: !1,
                }),
                a.createElement("div", {
                  className: `${d().LinkRegionEdge} ${d().Top}`,
                  onMouseDown: (e) => {
                    this.OnMouseDown(e, s.top);
                  },
                }),
                a.createElement("div", {
                  className: `${d().LinkRegionEdge} ${d().TopRight}`,
                  onMouseDown: (e) => {
                    this.OnMouseDown(e, s.topright);
                  },
                  draggable: !1,
                }),
                a.createElement("div", {
                  className: `${d().LinkRegionEdge} ${d().Left}`,
                  onMouseDown: (e) => {
                    this.OnMouseDown(e, s.left);
                  },
                  draggable: !1,
                }),
                a.createElement(
                  "div",
                  {
                    className: `${d().LinkRegionEdge} ${d().Middle}`,
                    onMouseDown: (e) => {
                      this.OnMouseDown(e, s.middle);
                    },
                    draggable: !1,
                  },
                  this.props.deleteFn &&
                    a.createElement(
                      "div",
                      {
                        className: d().LinkRegionDelete,
                        onClick: this.HandleDelete,
                      },
                      a.createElement(g.sED, null),
                    ),
                  !this.props.bDisableLink &&
                    a.createElement(
                      "div",
                      {
                        className: d().LinkRegionSettings,
                        onClick: this.OnEditLink,
                      },
                      a.createElement(g.xv8, null),
                    ),
                  a.createElement(
                    "div",
                    { className: d().LinkText },
                    " ",
                    this.m_strDescription,
                    " ",
                  ),
                ),
                a.createElement("div", {
                  className: `${d().LinkRegionEdge} ${d().Right}`,
                  onMouseDown: (e) => {
                    this.OnMouseDown(e, s.right);
                  },
                  draggable: !1,
                }),
                a.createElement("div", {
                  className: `${d().LinkRegionEdge} ${d().BottomLeft}`,
                  onMouseDown: (e) => {
                    this.OnMouseDown(e, s.bottomleft);
                  },
                  draggable: !1,
                }),
                a.createElement("div", {
                  className: `${d().LinkRegionEdge} ${d().Bottom}`,
                  onMouseDown: (e) => {
                    this.OnMouseDown(e, s.bottom);
                  },
                  draggable: !1,
                }),
                a.createElement("div", {
                  className: `${d().LinkRegionEdge} ${d().BottomRight}`,
                  onMouseDown: (e) => {
                    this.OnMouseDown(e, s.bottomright);
                  },
                  draggable: !1,
                }),
              ),
              this.state.bEditingLink &&
                a.createElement(
                  "div",
                  { className: d().LinkRegionInfo },
                  a.createElement(h.pd, {
                    className: d().LinkRegionInput,
                    type: "text",
                    name: "link_url",
                    value: this.state.text_link_url,
                    label: (0, c.we)("#SteamTV_LinkURL"),
                    placeholder: "https://www.example.com",
                    onChange: this.OnSetLinkURLChange,
                    mustBeURL: !0,
                  }),
                  a.createElement(h.pd, {
                    className: d().LinkRegionInput,
                    type: "text",
                    name: "link_description",
                    value: this.state.text_link_description,
                    label: (0, c.we)("#SteamTV_LinkDescription"),
                    placeholder: (0, c.we)(
                      "#SteamTV_LinkDescription_Placeholder",
                    ),
                    onChange: this.OnSetLinkDescriptionChange,
                  }),
                  a.createElement(
                    "div",
                    { className: d().LinkRegionButtonContainer },
                    a.createElement(
                      h.$n,
                      {
                        disabled: !this.state.valid_link,
                        onClick: this.OnSaveLink,
                      },
                      " ",
                      (0, c.we)("#Button_OK"),
                      " ",
                    ),
                    a.createElement(
                      h.$n,
                      { onClick: this.OnEditLink },
                      " ",
                      (0, c.we)("#Button_Cancel"),
                    ),
                  ),
                ),
            )
          );
        }
      };
      (0, n.Cg)([o.oI], m.prototype, "LinkRegionBoxRef", null),
        (0, n.Cg)([o.oI], m.prototype, "OnMouseDown", null),
        (0, n.Cg)([o.oI], m.prototype, "OnMouseMove", null),
        (0, n.Cg)([o.oI], m.prototype, "OnMouseUp", null),
        (0, n.Cg)([o.oI], m.prototype, "HandleDelete", null),
        (0, n.Cg)([o.oI], m.prototype, "OnSetLinkURLChange", null),
        (0, n.Cg)([o.oI], m.prototype, "OnSetLinkDescriptionChange", null),
        (0, n.Cg)([o.oI], m.prototype, "OnSaveLink", null),
        (0, n.Cg)([o.oI], m.prototype, "OnEditLink", null),
        (m = (0, n.Cg)([r.PA], m));
    },
    66331: (e, t, i) => {
      "use strict";
      i.d(t, { q: () => m, t: () => _ });
      var s = i(34629),
        n = i(90626),
        a = i(73744),
        o = i(37403),
        r = i(16676),
        l = i(81416),
        c = i(9154),
        h = i(52038),
        g = i(61859),
        p = i(73745),
        d = i(50666),
        u = i(56011);
      class m extends n.Component {
        state = {
          region: {
            xPosPct: 0,
            yPosPct: 0,
            widthPct: (this.GetDestWidth() / this.props.uploadFile.width) * 100,
            heightPct:
              (this.GetDestHeight() / this.props.uploadFile.height) * 100,
          },
        };
        async OnCrop() {
          const e = this.props.uploadFile.GetCanvasImageSource();
          e &&
            (await (async function (e, t, i, s, n, a, r, l, c) {
              return new Promise((h, g) => {
                const p = _(c);
                if (!p) return void g("Invalid format provided");
                const d = document.createElement("canvas");
                (d.width = r), (d.height = l);
                const m = 0,
                  b = 0,
                  k = d.getContext("2d");
                k?.drawImage(t, i, s, n, a, m, b, r, l),
                  d.toBlob((t) => {
                    const i = d.toDataURL(p);
                    c !== o.bg.k_EClanImageFileType_PNG &&
                    i.startsWith("data:image/png")
                      ? g("Unable to encode into the requested file format")
                      : t
                        ? ((e.file = (0, u.pE)(t, e.filename)),
                          (e.width = r),
                          (e.height = l),
                          (e.dataUrl = i),
                          (e.uploadTime = Date.now()),
                          (e.bCropped = !0),
                          h())
                        : g("Unable to apply crop into image");
                  });
              });
            })(
              this.props.uploadFile,
              e,
              (this.state.region.xPosPct / 100) * this.props.uploadFile.width,
              (this.state.region.yPosPct / 100) * this.props.uploadFile.height,
              (this.state.region.widthPct / 100) * this.props.uploadFile.width,
              (this.state.region.heightPct / 100) *
                this.props.uploadFile.height,
              this.GetDestWidth(),
              this.GetDestHeight(),
              this.props.fileType,
            )),
            this.props.closeModal?.();
        }
        UpdateCrop(e, t) {
          this.setState({ region: t });
        }
        GetDestWidth() {
          const { uploadFile: e, forceResolution: t } = this.props;
          if (t) return t.width;
          const i = e.GetCurrentImageOption();
          if (!i) return 0;
          const s = a.Fj[i.artworkType].width;
          return i ? (0, a.qj)(s) : 0;
        }
        GetDestHeight() {
          const { uploadFile: e, forceResolution: t } = this.props;
          if (t) return t.width;
          const i = e.GetCurrentImageOption();
          if (!i) return 0;
          const s = a.Fj[i.artworkType].height;
          return i ? (0, a.qj)(s) : 0;
        }
        GetLargestBoxThatFits(e, t, i, s) {
          let n = i,
            a = (n * t) / Math.max(e, 1);
          return (
            a > s && ((a = s), (n = (a * e) / Math.max(t, 1))),
            { width: n, height: a }
          );
        }
        GetPreviewWindowStyle() {
          const { region: e } = this.state,
            t = this.GetLargestBoxThatFits(
              this.GetDestWidth(),
              this.GetDestHeight(),
              500,
              150,
            ),
            i = t.width,
            s = t.height,
            n = 1 / Math.max(e.widthPct / 100, 1e-4),
            a = 1 / Math.max(e.heightPct / 100, 1e-4),
            o = (this.props.uploadFile.width * e.xPosPct) / 100,
            r = (this.props.uploadFile.height * e.yPosPct) / 100;
          return {
            width: i,
            height: s,
            backgroundPosition: `${-o * ((i * n) / this.props.uploadFile.width)}px ${-r * ((s * a) / this.props.uploadFile.height)}px`,
            backgroundSize: `${100 * n}% ${100 * a}%`,
            backgroundImage: `url(${this.props.uploadFile.dataUrl})`,
          };
        }
        render() {
          const e = (this.GetDestWidth() / this.props.uploadFile.width) * 100,
            t = (this.GetDestHeight() / this.props.uploadFile.height) * 100,
            i = this.GetLargestBoxThatFits(
              this.props.uploadFile.width,
              this.props.uploadFile.height,
              800,
              500,
            );
          return n.createElement(
            c.x_,
            {
              onEscKeypress: this.props.closeModal,
              bDisableBackgroundDismiss: !0,
            },
            n.createElement(
              "div",
              {
                className: (0, h.A)("DialogContent", "_DialogCenterVertically"),
              },
              n.createElement(
                r.iK,
                null,
                (0, g.we)(
                  "#ImageUpload_CropModalTitleDims",
                  this.GetDestWidth(),
                  this.GetDestHeight(),
                ),
              ),
              n.createElement(
                "div",
                { className: (0, h.A)("DialogBodyText") },
                (0, g.we)("#ImageUpload_CropModalDescription"),
              ),
              n.createElement(
                "div",
                {
                  className: d.CropImage,
                  style: { width: i.width, height: i.height },
                },
                n.createElement("img", {
                  style: {
                    maxWidth: "100%",
                    maxHeight: "100%",
                    objectFit: "contain",
                  },
                  src: this.props.uploadFile.dataUrl,
                }),
                n.createElement(l.I, {
                  bLockAspectRatio: !0,
                  bDisableLink: !0,
                  index: 0,
                  updateFn: this.UpdateCrop,
                  xPosPct: 0,
                  yPosPct: 0,
                  widthMinPct: e,
                  heightMinPct: t,
                  widthPct: e,
                  heightPct: t,
                }),
              ),
              n.createElement(
                "div",
                { className: d.CropPreviewGroup },
                n.createElement(
                  "div",
                  { className: d.CropPreviewLabel },
                  (0, g.we)("#ImageUpload_CropPreview"),
                ),
                n.createElement("div", { style: this.GetPreviewWindowStyle() }),
              ),
              n.createElement(
                r.jn,
                { onClick: this.OnCrop },
                (0, g.we)("#ImageUpload_CropAndContinue"),
              ),
            ),
          );
        }
      }
      function _(e) {
        switch (e) {
          case o.bg.k_EClanImageFileType_PNG:
            return "image/png";
          case o.bg.k_EClanImageFileType_JPEG:
            return "image/jpeg";
        }
      }
      (0, s.Cg)([p.oI], m.prototype, "OnCrop", null),
        (0, s.Cg)([p.oI], m.prototype, "UpdateCrop", null);
    },
  },
]);
