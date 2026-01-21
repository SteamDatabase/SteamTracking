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
        Ek: () => b,
        FZ: () => n,
        Fj: () => w,
        Hj: () => o,
        Ho: () => _,
        Kf: () => d,
        N_: () => L,
        PL: () => l,
        XY: () => k,
        Yw: () => s,
        _d: () => a,
        cV: () => h,
        dM: () => g,
        on: () => c,
        qj: () => p,
        s4: () => y,
        tW: () => r,
        vz: () => v,
        x: () => f,
        yu: () => P,
      });
      const s = ["app_header_capsule", "app_main_capsule"],
        n = [
          "sale_header",
          "sale_logo",
          "capsule",
          "product_banner",
          "product_mobile_banner",
          "localized_title_image",
        ],
        r = ["takeunder_art", "takeunder_mobile_art"],
        o = [
          "takeover_art",
          "takeover_mobile_art",
          "takeover_webm_art",
          "takeover_mp4_art",
          "takeover_webm_mobile_art",
          "takeover_mp4_mobile_art",
        ],
        a = ["marketingmessage_art", "marketingmessage_art_2"],
        c = [
          "marketingmessage_art_eventcapsule",
          "marketingmessage_art_2_eventcapsule",
        ],
        l = ["spotlight_art"],
        h = [...s, ...n, ...r, ...o, ...a, ...c, ...l];
      function p(e) {
        return Array.isArray(e) ? e[0] : e;
      }
      function g(e) {
        const t = Array.isArray(e) ? e : [e];
        return Math.min(...t);
      }
      function d(e, t) {
        return void 0 === t ? p(e) : Array.isArray(e) ? e[t] : e;
      }
      const u = [1, 3, 2],
        m = [1, 3],
        _ = [5, 4],
        f = [7, 6],
        w = {
          capsule: { width: 800, height: 450, rgAcceptableTypes: m },
          marketingmessage_art_2_eventcapsule: {
            width: 800,
            height: 450,
            rgAcceptableTypes: m,
          },
          marketingmessage_art_eventcapsule: {
            width: 800,
            height: 450,
            rgAcceptableTypes: m,
          },
          spotlight: { width: 2108, height: 460, rgAcceptableTypes: m },
          localized_store_app_spotlight: {
            width: 1200,
            height: 260,
            rgAcceptableTypes: m,
          },
          localized_store_app_spotlight_mobile: {
            width: 500,
            height: 160,
            rgAcceptableTypes: m,
          },
          localized_title_image: {
            width: 1920,
            height: 622,
            rgAcceptableTypes: m,
          },
          background: { width: 1920, height: 622, rgAcceptableTypes: m },
          hero: {
            width: 0,
            height: 0,
            bDisableEnforceDimensions: !0,
            rgAcceptableTypes: m,
          },
          email_full: { width: 800, height: 300, rgAcceptableTypes: m },
          email_centered: { width: 644, height: 300, rgAcceptableTypes: m },
          broadcast_left: {
            width: [199, 155],
            height: [433, 337],
            rgAcceptableTypes: m,
          },
          broadcast_right: {
            width: [199, 155],
            height: [433, 337],
            rgAcceptableTypes: m,
          },
          sale_header: {
            width: 0,
            height: 0,
            bDisableEnforceDimensions: !0,
            rgAcceptableTypes: u,
          },
          sale_overlay: {
            width: 0,
            height: 0,
            bDisableEnforceDimensions: !0,
            rgAcceptableTypes: u,
          },
          localized_image_group: {
            width: 0,
            height: 0,
            bDisableEnforceDimensions: !0,
            rgAcceptableTypes: m,
          },
          localized_background_art: {
            width: 0,
            height: 0,
            bDisableEnforceDimensions: !0,
            rgAcceptableTypes: m,
          },
          sale_section_background: {
            width: 0,
            height: 0,
            bDisableEnforceDimensions: !0,
            rgAcceptableTypes: u,
          },
          sale_section_title: {
            width: 0,
            height: 0,
            bDisableEnforceDimensions: !0,
            rgAcceptableTypes: u,
          },
          link_capsule: {
            width: 0,
            height: 0,
            bDisableEnforceDimensions: !0,
            rgAcceptableTypes: m,
          },
          product_banner: {
            width: [1200, 1100],
            height: [175, 160],
            rgAcceptableTypes: m,
          },
          product_mobile_banner: {
            width: 500,
            height: 160,
            rgAcceptableTypes: m,
          },
          product_banner_override: {
            width: [1200, 1100],
            height: [175, 160],
            rgAcceptableTypes: m,
          },
          product_mobile_banner_override: {
            width: 500,
            height: 160,
            rgAcceptableTypes: m,
          },
          schedule_track_art: { width: 196, height: 92, rgAcceptableTypes: m },
          tab_bar_background: {
            width: 1500,
            height: 100,
            rgAcceptableTypes: m,
          },
          sale_logo: {
            width: [1200, 940],
            height: [460, 460],
            rgAcceptableTypes: m,
          },
          bestofyear_banner: { width: 1100, height: 160, rgAcceptableTypes: u },
          bestofyear_banner_mobile: {
            width: 500,
            height: 160,
            rgAcceptableTypes: u,
          },
          localized_marketing_message: {
            width: 570,
            height: 600,
            rgAcceptableTypes: [1, 3, 2, 10],
          },
          localized_optin_banner: {
            width: 1e3,
            height: 150,
            rgAcceptableTypes: m,
          },
          localized_marketingmessage_webm: {
            width: 570,
            height: 600,
            rgAcceptableTypes: [5],
          },
          localized_marketingmessage_mp4: {
            width: 570,
            height: 600,
            rgAcceptableTypes: [4],
          },
          localized_partnerevent_webm: {
            width: 800,
            height: 450,
            rgAcceptableTypes: [5],
          },
          localized_partnerevent_mp4: {
            width: 800,
            height: 450,
            rgAcceptableTypes: [4],
          },
          localized_subtitles: {
            width: 0,
            height: 0,
            bDisableEnforceDimensions: !0,
            rgAcceptableTypes: [6, 7],
          },
          localized_marketingmessage_poster: {
            width: 528,
            height: 297,
            rgAcceptableTypes: [1, 3],
          },
          localized_marketingmessage_background: {
            width: 570,
            height: 600,
            rgAcceptableTypes: m,
          },
          localized_email_image: {
            width: 0,
            height: 0,
            bDisableEnforceDimensions: !0,
            rgAcceptableTypes: m,
          },
          template_asset: {
            width: 0,
            height: 0,
            bDisableEnforceDimensions: !0,
            rgAcceptableTypes: [1, 3, 2, 10, 5, 4],
          },
          user_poll_background: {
            width: 0,
            height: 0,
            bDisableEnforceDimensions: !0,
            rgAcceptableTypes: m,
          },
          spotlight_art: {
            width: [306, 374],
            height: [260, 448],
            rgAcceptableTypes: u,
          },
          old_spotlight_art: { width: 306, height: 350, rgAcceptableTypes: u },
          marketingmessage_art: {
            width: 570,
            height: 600,
            rgAcceptableTypes: u,
          },
          marketingmessage_art_2: {
            width: 570,
            height: 600,
            rgAcceptableTypes: u,
          },
          takeover_art: { width: 1850, height: 450, rgAcceptableTypes: u },
          takeover_webm_art: {
            width: 1850,
            height: 450,
            rgAcceptableTypes: [5],
          },
          takeover_mp4_art: {
            width: 1850,
            height: 450,
            rgAcceptableTypes: [4],
          },
          takeover_mobile_art: {
            width: 500,
            height: 350,
            rgAcceptableTypes: u,
          },
          takeover_webm_mobile_art: {
            width: 500,
            height: 350,
            rgAcceptableTypes: [5],
          },
          takeover_mp4_mobile_art: {
            width: 500,
            height: 350,
            rgAcceptableTypes: [4],
          },
          takeunder_art: { width: 940, height: 150, rgAcceptableTypes: u },
          takeunder_mobile_art: {
            width: 500,
            height: 160,
            rgAcceptableTypes: u,
          },
          app_header_capsule: { width: 920, height: 430, rgAcceptableTypes: m },
          app_main_capsule: { width: 1232, height: 706, rgAcceptableTypes: m },
        };
      function b(e, t, i, s) {
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
      function P(e, t, i, s) {
        const n = w[i];
        return (
          !!n &&
          (n.bDisableEnforceDimensions ? !!s : b(e, t, n.width, n.height))
        );
      }
      function y(e, t, i) {
        const s = w[i];
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
      function k(e) {
        const t = w[e];
        return (
          t.rgAcceptableTypes.includes(6) || t.rgAcceptableTypes.includes(7)
        );
      }
      function v(e, t) {
        return t.filter((t) => L(e, t));
      }
      function L(e, t) {
        return w[t].rgAcceptableTypes.includes(e);
      }
    },
    78511: (e, t, i) => {
      "use strict";
      i.d(t, { o: () => o, q: () => a });
      var s = i(34629),
        n = i(14947),
        r = i(82705);
      function o(e) {
        return "waiting" == e || "uploading" == e || "processing" == e;
      }
      class a {
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
        constructor(e, t, i, s, o) {
          (0, n.Gn)(this),
            (this.file = e),
            (this.filename = t),
            (this.fileType = (0, r.yh)(t) ?? 0),
            (this.language = i),
            (this.uploadTime = Date.now()),
            (this.status = "pending"),
            (this.m_originalSize = o),
            (this.height = o.height),
            (this.width = o.width),
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
      (0, s.Cg)([n.sH], a.prototype, "dataUrl", void 0),
        (0, s.Cg)([n.sH], a.prototype, "width", void 0),
        (0, s.Cg)([n.sH], a.prototype, "height", void 0),
        (0, s.Cg)([n.sH], a.prototype, "status", void 0),
        (0, s.Cg)([n.sH.ref], a.prototype, "message", void 0),
        (0, s.Cg)([n.sH], a.prototype, "language", void 0);
    },
    64953: (e, t, i) => {
      "use strict";
      i.d(t, { IS: () => p, M7: () => d, T2: () => g });
      var s = i(34629),
        n = i(14947),
        r = i(73744),
        o = i(61859),
        a = i(78511),
        c = i(66331),
        l = i(82817);
      class h extends a.q {
        m_rgImageOptions;
        m_currentImageOption = void 0;
        m_currentImageOptionKey = void 0;
        constructor(e, t, i, s, r, o) {
          super(e, t, i, r, o), (0, n.Gn)(this), (this.m_rgImageOptions = s);
        }
        IsValidAssetType(e, t) {
          let i = 0,
            s = 0,
            n = !1,
            a =
              !this.m_rgImageOptions ||
              0 === this.m_rgImageOptions.length ||
              this.m_rgImageOptions.some(
                (e) => e.sKey == this.GetCurrentImageOption()?.sKey,
              );
          if (e) (i = e.width), (s = e.height), (n = !0);
          else if (this.GetCurrentImageOption()) {
            const e = r.Fj[this.GetCurrentImageOption().artworkType];
            e &&
              ((i = e.width),
              (s = e.height),
              (n = !e.bDisableEnforceDimensions));
          }
          const h = this.width >= (0, r.dM)(i) && this.height >= (0, r.dM)(s),
            p = n ? (0, r.Ek)(this.width, this.height, i, s) : h,
            g = t && t != this.fileType,
            d =
              !!(this.m_rgImageOptions && this.m_rgImageOptions.length > 0) &&
              0 ==
                (0, r.vz)(
                  this.fileType,
                  this.m_rgImageOptions?.map((e) => e.artworkType) || [],
                ).length,
            u = Boolean((0, c.t)(this.fileType));
          let m,
            _ = "",
            f = !1;
          return (
            a
              ? d
                ? (_ = (0, o.we)("#ImageUpload_InvalidFileType"))
                : g
                  ? (_ = (0, o.we)(
                      "#ImageUpload_InvalidFormat",
                      (0, l.EG)(t) ?? "",
                    ))
                  : p || u
                    ? h
                      ? !p && u
                        ? ((_ = (0, o.we)(
                            "#ImageUpload_InvalidDimensions",
                            (0, r.qj)(i),
                            (0, r.qj)(s),
                          )),
                          (f = !0))
                        : ((Array.isArray(i) && this.width != (0, r.qj)(i)) ||
                            (Array.isArray(s) &&
                              this.height != (0, r.qj)(s))) &&
                          ((m = m ?? []),
                          m.push(
                            (0, o.we)(
                              "#ImageUpload_PreferredDimension",
                              (0, r.qj)(i),
                              (0, r.qj)(s),
                            ),
                          ))
                      : (_ = (0, o.we)(
                          "#ImageUpload_TooSmall",
                          (0, r.qj)(i),
                          (0, r.qj)(s),
                        ))
                    : (_ = (0, o.we)(
                        "#ImageUpload_InvalidResolution",
                        (0, r.qj)(i),
                        (0, r.qj)(s),
                      ))
              : (_ = (0, o.we)("#ImageUpload_InvalidFormatSelected")),
            {
              error: _,
              warnings: m,
              needsCrop: f,
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
          const e = (0, r.vz)(
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
      class p extends h {
        video;
        constructor(e, t, i, s, n, r, o) {
          super(e, t, i, s, n, r), (this.video = o);
        }
        BIsOriginalMinimumDimensions(e) {
          return (0, r.s4)(
            this.video.videoWidth,
            this.video.videoHeight,
            e.artworkType,
          );
        }
        FileTypeMatchesImageTypes(e) {
          return (0, r.N_)(this.fileType, e.artworkType);
        }
        BIsVideo() {
          return r.Ho.includes(this.fileType);
        }
        GetResizeDimension() {}
      }
      class g extends h {
        constructor(e, t, i, s) {
          super(e, t, i, s, URL.createObjectURL(e), { width: 0, height: 0 });
        }
        BIsOriginalMinimumDimensions(e) {
          return (0, r.XY)(e.artworkType);
        }
        FileTypeMatchesImageTypes(e) {
          return (0, r.N_)(this.fileType, e.artworkType);
        }
        BIsVideo() {
          return r.Ho.includes(this.fileType);
        }
        GetResizeDimension() {}
      }
      class d extends h {
        bCropped = !1;
        localizedImageGroupPrimaryImage;
        media;
        constructor(e, t, i, s, r, o, a, c) {
          super(e, t, i, s, r, o),
            (0, n.Gn)(this),
            (this.media = a),
            (this.localizedImageGroupPrimaryImage = c);
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
          return (0, r.s4)(
            this.media?.width ?? 0,
            this.media?.height ?? 0,
            e.artworkType,
          );
        }
        FileTypeMatchesImageTypes(e) {
          return (0, r.N_)(this.fileType, e.artworkType);
        }
        BIsVideo() {
          return r.Ho.includes(this.fileType);
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
                  width: (0, r.qj)(r.Fj[e].width) / 2,
                  height: (0, r.qj)(r.Fj[e].height) / 2,
                },
              ];
            if ("spotlight" === e)
              return [
                {
                  width: (0, r.qj)(r.Fj[e].width) / 2,
                  height: (0, r.qj)(r.Fj[e].height) / 2,
                },
              ];
            return;
          })(this.GetCurrentImageOption()?.artworkType);
        }
      }
      function u(e, t, i, s = !1) {
        if (i)
          for (let n of i) {
            if (s ? (0, r.s4)(e, t, n) : (0, r.yu)(e, t, n)) return n;
          }
      }
      (0, s.Cg)([n.sH], d.prototype, "bCropped", void 0);
    },
    69343: (e, t, i) => {
      "use strict";
      i.d(t, {
        $l: () => l,
        PD: () => g,
        Vr: () => p,
        jj: () => d,
        ss: () => c,
      });
      var s = i(2160),
        n = i(22837),
        r = i(61859),
        o = i(41735),
        a = i.n(o);
      class c {}
      function l(e, t, i) {
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
      async function h(e, t, i, s, n, r) {
        const o = l(e, s, n),
          a = [];
        let c = 0;
        const h = Array.from({ length: Math.floor(t) }, () =>
          (async () => {
            for (; c < o.length; ) {
              const e = c++,
                t = o[e];
              t.status = "uploading";
              const s = await i(t, t.filename, t.language ?? -1, r);
              (t.status = s.bSuccess ? "success" : "failed"),
                (t.message =
                  !s.bSuccess && s.elErrorMessage ? s.elErrorMessage : ""),
                (a[e] = { image: t, uploadResult: s });
            }
          })(),
        );
        return (
          await Promise.all(h),
          a.map((e) => ({
            bSuccess: e.uploadResult.bSuccess,
            image: e.image,
            uploadResult: e.uploadResult.result,
          }))
        );
      }
      class p extends c {
        m_cancel = void 0;
        async UploadAllImages(e, t) {
          this.m_cancel = a().CancelToken.source();
          const i = this.BGetUploadsAreInSerial() ? 1 : 4;
          let s;
          const n = this.UploadSingleImage.bind(this);
          return (
            (s =
              i > 1
                ? await h(
                    this.GetUploadImages(),
                    i,
                    n,
                    e,
                    t,
                    this.m_cancel.token,
                  )
                : await (async function (e, t, i, s, n) {
                    const r = l(e, i, s),
                      o = [];
                    for (const e of r) {
                      e.status = "uploading";
                      const i = await t(e, e.filename, e.language ?? -1, n);
                      (e.status = i.bSuccess ? "success" : "failed"),
                        (e.message =
                          !i.bSuccess && i.elErrorMessage
                            ? i.elErrorMessage
                            : ""),
                        o.push({
                          bSuccess: i.bSuccess,
                          image: e,
                          uploadResult: i.result,
                        });
                    }
                    return o;
                  })(this.GetUploadImages(), n, e, t, this.m_cancel.token)),
            s
          );
        }
        CancelAllUploads() {
          this.m_cancel?.cancel((0, r.we)("#ImageUpload_CancelRequest"));
        }
      }
      function g(e, t, i) {
        if (((null != e && null != e) || (e = t), !i || 0 === i.length))
          return e;
        for (const t of i) if (r.A0.IsELanguageValidInRealm(e, t)) return e;
        for (const e of i) if (r.A0.IsELanguageValidInRealm(t, e)) return t;
        return i.includes(s.TU.k_ESteamRealmGlobal) ? 0 : 29;
      }
      function d(e, t = 0) {
        let i = e.lastIndexOf(".");
        -1 != i && (e = e.slice(0, i).toLowerCase());
        let s = null,
          r = 0;
        e.endsWith("korean") && ((s = 4), (r = 6));
        for (let t = 0; t < 31; ++t) {
          const i = (0, n.ww)(t);
          if (i.length <= r) continue;
          if (e.endsWith(i) && e.length > i.length + 2) {
            const n = e[e.length - i.length - 1];
            /\p{Alphabetic}|\p{Number}/u.test(n) || ((s = t), (r = i.length));
          }
          const o = (0, n.Lg)(t);
          o.length <= r || (e.endsWith(o) && ((s = t), (r = o.length)));
        }
        return {
          language: s ?? t,
          baseFilename:
            r > 0
              ? ((o = e.substring(0, e.length - r)), o.replace(/[\s_-]+$/g, ""))
              : e,
        };
        var o;
      }
    },
    82705: (e, t, i) => {
      "use strict";
      i.d(t, { yh: () => s });
      i(90626);
      function s(e) {
        return (
          e.indexOf("?") > 0 && (e = e.split("?")[0]),
          e.endsWith(".jpg") || e.endsWith(".jpeg")
            ? 1
            : e.endsWith(".png")
              ? 3
              : e.endsWith(".gif")
                ? 2
                : e.endsWith(".mp4")
                  ? 4
                  : e.endsWith(".webm")
                    ? 5
                    : e.endsWith(".vtt")
                      ? 6
                      : e.endsWith(".srt")
                        ? 7
                        : e.endsWith(".webp")
                          ? 10
                          : void 0
        );
      }
    },
    55263: (e, t, i) => {
      "use strict";
      i.d(t, {
        G6: () => c,
        Gg: () => p,
        MS: () => u,
        Ow: () => h,
        gF: () => m,
        t7: () => l,
        zX: () => d,
      });
      var s = i(41735),
        n = i.n(s),
        r = i(90626),
        o = i(73745),
        a = i(16021);
      function c(e, t, i, s) {
        const c = (0, r.useRef)(void 0),
          l = (0, r.useRef)(void 0),
          h = (0, o.CH)();
        c.current = e;
        const [p, g] = (0, r.useState)(void 0),
          {
            include_assets: d,
            include_release: u,
            include_platforms: m,
            include_all_purchase_options: _,
            include_screenshots: f,
            include_trailers: w,
            include_ratings: b,
            include_tag_count: P,
            include_reviews: y,
            include_basic_info: k,
            include_supported_languages: v,
            include_full_description: L,
            include_included_items: T,
            include_assets_without_overrides: I,
            apply_user_filters: E,
            include_links: D,
          } = i;
        if (
          ((0, r.useEffect)(() => {
            const i = {
              include_assets: d,
              include_release: u,
              include_platforms: m,
              include_all_purchase_options: _,
              include_screenshots: f,
              include_trailers: w,
              include_ratings: b,
              include_tag_count: P,
              include_reviews: y,
              include_basic_info: k,
              include_supported_languages: v,
              include_full_description: L,
              include_included_items: T,
              include_assets_without_overrides: I,
              apply_user_filters: E,
              include_links: D,
            };
            let r = null;
            return (
              !e ||
                e < 0 ||
                a.A.Get().BHasStoreItem(e, t, i) ||
                (void 0 !== p && s && s == l.current) ||
                (s !== l.current && (g(void 0), (l.current = s)),
                (r = n().CancelToken.source()),
                a.A.Get()
                  .QueueStoreItemRequest(e, t, i)
                  .then((t) => {
                    r?.token.reason || c.current !== e || g(1 == t), h();
                  })),
              () => r?.cancel("useStoreItemCache: unmounting")
            );
          }, [e, t, s, p, d, u, m, _, f, w, b, P, y, k, v, L, T, I, E, D, h]),
          !e)
        )
          return [null, 2];
        if (!1 === p) return [void 0, 2];
        if (a.A.Get().BIsStoreItemMissing(e, t)) return [void 0, 2];
        if (!a.A.Get().BHasStoreItem(e, t, i)) return [void 0, 1];
        const A = a.A.Get().GetStoreItemWithLegacyVisibilityCheck(e, t);
        return A ? [A, 3] : [null, 2];
      }
      function l(e, t, i) {
        return c(e, 0, t, i);
      }
      function h(e, t, i) {
        return c(e, 2, t, i);
      }
      function p(e, t, i) {
        return c(e, 1, t, i);
      }
      function g(e, t, i, s) {
        const c = (0, o.CH)(),
          {
            include_assets: l,
            include_release: h,
            include_platforms: p,
            include_all_purchase_options: g,
            include_screenshots: d,
            include_trailers: u,
            include_ratings: m,
            include_tag_count: _,
            include_reviews: f,
            include_basic_info: w,
            include_supported_languages: b,
            include_full_description: P,
            include_included_items: y,
            include_assets_without_overrides: k,
            apply_user_filters: v,
            include_links: L,
          } = i;
        if (
          ((0, r.useEffect)(() => {
            if (!e || 0 == e.length) return;
            const i = {
                include_assets: l,
                include_release: h,
                include_platforms: p,
                include_all_purchase_options: g,
                include_screenshots: d,
                include_trailers: u,
                include_ratings: m,
                include_tag_count: _,
                include_reviews: f,
                include_basic_info: w,
                include_supported_languages: b,
                include_full_description: P,
                include_included_items: y,
                include_assets_without_overrides: k,
                apply_user_filters: v,
                include_links: L,
              },
              s = e.filter(
                (e) =>
                  !(
                    a.A.Get().BHasStoreItem(e, t, i) ||
                    a.A.Get().BIsStoreItemMissing(e, t)
                  ),
              );
            if (0 == s.length) return;
            const r = n().CancelToken.source(),
              o = s.map((e) => a.A.Get().QueueStoreItemRequest(e, t, i));
            return (
              Promise.all(o).then(() => {
                r.token.reason || c();
              }),
              () => r.cancel("useStoreItemCacheMultiplePackages: unmounting")
            );
          }, [e, t, s, c, l, h, p, g, d, u, m, _, f, w, b, P, y, k, v, L]),
          !e)
        )
          return 2;
        if (
          !e.every(
            (e) =>
              a.A.Get().BHasStoreItem(e, t, i) ||
              a.A.Get().BIsStoreItemMissing(e, t),
          )
        )
          return 1;
        return e.every((e) =>
          a.A.Get().GetStoreItemWithLegacyVisibilityCheck(e, t),
        )
          ? 3
          : 2;
      }
      function d(e, t, i) {
        return g(e, 0, t, i);
      }
      function u(e, t, i) {
        return g(e, 2, t, i);
      }
      function m(e, t, i) {
        return g(e, 1, t, i);
      }
    },
    82817: (e, t, i) => {
      "use strict";
      i.d(t, {
        EG: () => o,
        II: () => d,
        N1: () => u,
        S2: () => p,
        Uz: () => h,
        aL: () => l,
        ab: () => n,
        qR: () => r,
        zB: () => g,
      });
      var s = i(3577);
      function n(e) {
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
      function r(e) {
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
      function o(e) {
        switch (e) {
          case 1:
            return ".jpg";
          case 2:
            return ".gif";
          case 3:
            return ".png";
          case 5:
            return ".webm";
          case 4:
            return ".mp4";
          case 7:
            return ".srt";
          case 6:
            return ".vtt";
          case 10:
            return ".webp";
        }
      }
      function a(e) {
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
      function l(e) {
        return e.startsWith("image/");
      }
      function h(e) {
        return e.startsWith("video/");
      }
      function p(e, t) {
        return t ? c(e) : a(e);
      }
      async function g(e, t) {
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
          return a(n.toString());
        }
      }
      function d(e) {
        return e
          ? e instanceof HTMLVideoElement
            ? { width: e.videoWidth, height: e.videoHeight }
            : { width: e.width, height: e.height }
          : { width: 0, height: 0 };
      }
      function u(e, t) {
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
        r = i(90626),
        o = i(73745),
        a = i(75844),
        c = i(6144),
        l = i(61859),
        h = i(16676),
        p = i(12155),
        g = i(81315),
        d = i.n(g),
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
      let m = class extends r.Component {
        m_rectLinkRegion;
        m_elLinkRegionBox;
        m_nLocalOffsetXPct;
        m_nLocalOffsetYPct;
        m_fnMouseUp = null;
        m_fnMouseMove = null;
        m_listeners = new c.Ji();
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
            r = (0, u.OQ)(
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
              ? (o = r / this.m_aspectRatio)
              : (r = o * this.m_aspectRatio)),
            void 0 !== e.curLeftPosPct
              ? (s = 100 - n - r)
              : (n = 100 - (s + r)),
            void 0 !== e.curTopPosPct ? (t = 100 - i - o) : (i = 100 - (t + o));
          const a = 100 - n - s,
            c = 100 - i - t;
          this.IsValidPct(s) &&
            this.IsValidPct(n) &&
            this.IsValidPct(t) &&
            this.IsValidPct(i) &&
            this.IsValidPct(a) &&
            this.IsValidPct(c) &&
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
            r.createElement(
              "div",
              {
                className: t,
                style: e,
                ref: this.LinkRegionBoxRef,
                draggable: !1,
              },
              r.createElement(
                "div",
                { className: d().LinkRegionGridBox },
                r.createElement("div", {
                  className: `${d().LinkRegionEdge} ${d().TopLeft}`,
                  onMouseDown: (e) => {
                    this.OnMouseDown(e, s.topleft);
                  },
                  draggable: !1,
                }),
                r.createElement("div", {
                  className: `${d().LinkRegionEdge} ${d().Top}`,
                  onMouseDown: (e) => {
                    this.OnMouseDown(e, s.top);
                  },
                }),
                r.createElement("div", {
                  className: `${d().LinkRegionEdge} ${d().TopRight}`,
                  onMouseDown: (e) => {
                    this.OnMouseDown(e, s.topright);
                  },
                  draggable: !1,
                }),
                r.createElement("div", {
                  className: `${d().LinkRegionEdge} ${d().Left}`,
                  onMouseDown: (e) => {
                    this.OnMouseDown(e, s.left);
                  },
                  draggable: !1,
                }),
                r.createElement(
                  "div",
                  {
                    className: `${d().LinkRegionEdge} ${d().Middle}`,
                    onMouseDown: (e) => {
                      this.OnMouseDown(e, s.middle);
                    },
                    draggable: !1,
                  },
                  this.props.deleteFn &&
                    r.createElement(
                      "div",
                      {
                        className: d().LinkRegionDelete,
                        onClick: this.HandleDelete,
                      },
                      r.createElement(p.sED, null),
                    ),
                  !this.props.bDisableLink &&
                    r.createElement(
                      "div",
                      {
                        className: d().LinkRegionSettings,
                        onClick: this.OnEditLink,
                      },
                      r.createElement(p.xv8, null),
                    ),
                  r.createElement(
                    "div",
                    { className: d().LinkText },
                    " ",
                    this.m_strDescription,
                    " ",
                  ),
                ),
                r.createElement("div", {
                  className: `${d().LinkRegionEdge} ${d().Right}`,
                  onMouseDown: (e) => {
                    this.OnMouseDown(e, s.right);
                  },
                  draggable: !1,
                }),
                r.createElement("div", {
                  className: `${d().LinkRegionEdge} ${d().BottomLeft}`,
                  onMouseDown: (e) => {
                    this.OnMouseDown(e, s.bottomleft);
                  },
                  draggable: !1,
                }),
                r.createElement("div", {
                  className: `${d().LinkRegionEdge} ${d().Bottom}`,
                  onMouseDown: (e) => {
                    this.OnMouseDown(e, s.bottom);
                  },
                  draggable: !1,
                }),
                r.createElement("div", {
                  className: `${d().LinkRegionEdge} ${d().BottomRight}`,
                  onMouseDown: (e) => {
                    this.OnMouseDown(e, s.bottomright);
                  },
                  draggable: !1,
                }),
              ),
              this.state.bEditingLink &&
                r.createElement(
                  "div",
                  { className: d().LinkRegionInfo },
                  r.createElement(h.pd, {
                    className: d().LinkRegionInput,
                    type: "text",
                    name: "link_url",
                    value: this.state.text_link_url,
                    label: (0, l.we)("#SteamTV_LinkURL"),
                    placeholder: "https://www.example.com",
                    onChange: this.OnSetLinkURLChange,
                    mustBeURL: !0,
                  }),
                  r.createElement(h.pd, {
                    className: d().LinkRegionInput,
                    type: "text",
                    name: "link_description",
                    value: this.state.text_link_description,
                    label: (0, l.we)("#SteamTV_LinkDescription"),
                    placeholder: (0, l.we)(
                      "#SteamTV_LinkDescription_Placeholder",
                    ),
                    onChange: this.OnSetLinkDescriptionChange,
                  }),
                  r.createElement(
                    "div",
                    { className: d().LinkRegionButtonContainer },
                    r.createElement(
                      h.$n,
                      {
                        disabled: !this.state.valid_link,
                        onClick: this.OnSaveLink,
                      },
                      " ",
                      (0, l.we)("#Button_OK"),
                      " ",
                    ),
                    r.createElement(
                      h.$n,
                      { onClick: this.OnEditLink },
                      " ",
                      (0, l.we)("#Button_Cancel"),
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
        (m = (0, n.Cg)([a.PA], m));
    },
    66331: (e, t, i) => {
      "use strict";
      i.d(t, { q: () => u, t: () => m });
      var s = i(34629),
        n = i(90626),
        r = i(73744),
        o = i(16676),
        a = i(81416),
        c = i(9154),
        l = i(52038),
        h = i(61859),
        p = i(73745),
        g = i(50666),
        d = i(56011);
      class u extends n.Component {
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
            (await (async function (e, t, i, s, n, r, o, a, c) {
              return new Promise((l, h) => {
                const p = m(c);
                if (!p) return void h("Invalid format provided");
                const g = document.createElement("canvas");
                (g.width = o), (g.height = a);
                const u = 0,
                  _ = 0,
                  f = g.getContext("2d");
                f?.drawImage(t, i, s, n, r, u, _, o, a),
                  g.toBlob((t) => {
                    const i = g.toDataURL(p);
                    3 !== c && i.startsWith("data:image/png")
                      ? h("Unable to encode into the requested file format")
                      : t
                        ? ((e.file = (0, d.pE)(t, e.filename)),
                          (e.width = o),
                          (e.height = a),
                          (e.dataUrl = i),
                          (e.uploadTime = Date.now()),
                          (e.bCropped = !0),
                          l())
                        : h("Unable to apply crop into image");
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
          const s = r.Fj[i.artworkType].width;
          return i ? (0, r.qj)(s) : 0;
        }
        GetDestHeight() {
          const { uploadFile: e, forceResolution: t } = this.props;
          if (t) return t.width;
          const i = e.GetCurrentImageOption();
          if (!i) return 0;
          const s = r.Fj[i.artworkType].height;
          return i ? (0, r.qj)(s) : 0;
        }
        GetLargestBoxThatFits(e, t, i, s) {
          let n = i,
            r = (n * t) / Math.max(e, 1);
          return (
            r > s && ((r = s), (n = (r * e) / Math.max(t, 1))),
            { width: n, height: r }
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
            r = 1 / Math.max(e.heightPct / 100, 1e-4),
            o = (this.props.uploadFile.width * e.xPosPct) / 100,
            a = (this.props.uploadFile.height * e.yPosPct) / 100;
          return {
            width: i,
            height: s,
            backgroundPosition: `${-o * ((i * n) / this.props.uploadFile.width)}px ${-a * ((s * r) / this.props.uploadFile.height)}px`,
            backgroundSize: `${100 * n}% ${100 * r}%`,
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
                className: (0, l.A)("DialogContent", "_DialogCenterVertically"),
              },
              n.createElement(
                o.iK,
                null,
                (0, h.we)(
                  "#ImageUpload_CropModalTitleDims",
                  this.GetDestWidth(),
                  this.GetDestHeight(),
                ),
              ),
              n.createElement(
                "div",
                { className: (0, l.A)("DialogBodyText") },
                (0, h.we)("#ImageUpload_CropModalDescription"),
              ),
              n.createElement(
                "div",
                {
                  className: g.CropImage,
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
                n.createElement(a.I, {
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
                { className: g.CropPreviewGroup },
                n.createElement(
                  "div",
                  { className: g.CropPreviewLabel },
                  (0, h.we)("#ImageUpload_CropPreview"),
                ),
                n.createElement("div", { style: this.GetPreviewWindowStyle() }),
              ),
              n.createElement(
                o.jn,
                { onClick: this.OnCrop },
                (0, h.we)("#ImageUpload_CropAndContinue"),
              ),
            ),
          );
        }
      }
      function m(e) {
        switch (e) {
          case 3:
            return "image/png";
          case 1:
            return "image/jpeg";
        }
      }
      (0, s.Cg)([p.oI], u.prototype, "OnCrop", null),
        (0, s.Cg)([p.oI], u.prototype, "UpdateCrop", null);
    },
  },
]);
