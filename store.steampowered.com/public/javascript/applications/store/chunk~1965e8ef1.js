/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(() => {
  (self.webpackChunkstore = self.webpackChunkstore || []).push([
    [98028],
    {
      87498: (H, z, l) => {
        "use strict";
        l.d(z, {
          Fj: () => v,
          Ek: () => U,
          yu: () => K,
          s4: () => j,
          XY: () => Y,
          N_: () => X,
          vz: () => V,
          Kf: () => M,
          dM: () => m,
          qj: () => r,
          Ho: () => D,
        });
        var n = l(72849);
        const h = ["app_header_capsule", "app_main_capsule"],
          C = [
            "sale_header",
            "sale_logo",
            "capsule",
            "product_banner",
            "product_mobile_banner",
            "localized_title_image",
          ],
          R = ["takeunder_art", "takeunder_mobile_art"],
          B = [
            "takeover_art",
            "takeover_mobile_art",
            "takeover_webm_art",
            "takeover_mp4_art",
            "takeover_webm_mobile_art",
            "takeover_mp4_mobile_art",
          ],
          L = ["marketingmessage_art", "marketingmessage_art_2"],
          G = [
            "marketingmessage_art_eventcapsule",
            "marketingmessage_art_2_eventcapsule",
          ],
          w = ["spotlight_art_hero"],
          P = [...h, ...C, ...R, ...B, ...L, ...G, ...w],
          g = 622,
          u = 1920,
          T = 450,
          d = 800,
          _ = 460,
          y = 2108,
          I = 300,
          s = 800,
          f = 300,
          c = 644,
          p = 337,
          t = 155,
          e = 433,
          o = 199,
          i = [
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
            "sale_cross_promo_background",
            ...P,
          ];
        function r(O) {
          return Array.isArray(O) ? O[0] : O;
        }
        function m(O) {
          const k = Array.isArray(O) ? O : [O];
          return Math.min(...k);
        }
        function M(O, k) {
          return k === void 0 ? r(O) : Array.isArray(O) ? O[k] : O;
        }
        const S = [n.bg.iS, n.bg.dU, n.bg.CK, n.bg.wD],
          b = [n.bg.iS, n.bg.dU, n.bg.CK],
          a = [n.bg.iS, n.bg.dU],
          D = [n.bg.pJ, n.bg.nn],
          E = [n.bg.pi, n.bg.k7],
          A = [n.bg.iS, n.bg.dU, n.bg.CK, n.bg.wD, n.bg.pJ, n.bg.nn],
          v = {
            capsule: { width: d, height: T, rgAcceptableTypes: a },
            marketingmessage_art_2_eventcapsule: {
              width: d,
              height: T,
              rgAcceptableTypes: a,
            },
            marketingmessage_art_eventcapsule: {
              width: d,
              height: T,
              rgAcceptableTypes: a,
            },
            spotlight: { width: y, height: _, rgAcceptableTypes: a },
            localized_store_app_spotlight: {
              width: 1200,
              height: 260,
              rgAcceptableTypes: a,
            },
            localized_store_app_spotlight_mobile: {
              width: 500,
              height: 160,
              rgAcceptableTypes: a,
            },
            localized_title_image: {
              width: u,
              height: g,
              rgAcceptableTypes: a,
            },
            background: { width: u, height: g, rgAcceptableTypes: a },
            hero: {
              width: 0,
              height: 0,
              bDisableEnforceDimensions: !0,
              rgAcceptableTypes: a,
            },
            email_full: { width: s, height: I, rgAcceptableTypes: a },
            email_centered: { width: c, height: f, rgAcceptableTypes: a },
            broadcast_left: {
              width: [o, t],
              height: [e, p],
              rgAcceptableTypes: a,
            },
            broadcast_right: {
              width: [o, t],
              height: [e, p],
              rgAcceptableTypes: a,
            },
            sale_header: {
              width: 0,
              height: 0,
              bDisableEnforceDimensions: !0,
              rgAcceptableTypes: b,
            },
            sale_overlay: {
              width: 0,
              height: 0,
              bDisableEnforceDimensions: !0,
              rgAcceptableTypes: b,
            },
            localized_image_group: {
              width: 0,
              height: 0,
              bDisableEnforceDimensions: !0,
              rgAcceptableTypes: a,
            },
            localized_background_art: {
              width: 0,
              height: 0,
              bDisableEnforceDimensions: !0,
              rgAcceptableTypes: a,
            },
            sale_section_background: {
              width: 0,
              height: 0,
              bDisableEnforceDimensions: !0,
              rgAcceptableTypes: b,
            },
            sale_section_title: {
              width: 0,
              height: 0,
              bDisableEnforceDimensions: !0,
              rgAcceptableTypes: b,
            },
            link_capsule: {
              width: 0,
              height: 0,
              bDisableEnforceDimensions: !0,
              rgAcceptableTypes: a,
            },
            product_banner: {
              width: [1200, 1100],
              height: [175, 160],
              rgAcceptableTypes: a,
            },
            product_mobile_banner: {
              width: 500,
              height: 160,
              rgAcceptableTypes: a,
            },
            product_banner_override: {
              width: [1200, 1100],
              height: [175, 160],
              rgAcceptableTypes: a,
            },
            product_mobile_banner_override: {
              width: 500,
              height: 160,
              rgAcceptableTypes: a,
            },
            schedule_track_art: {
              width: 196,
              height: 92,
              rgAcceptableTypes: a,
            },
            tab_bar_background: {
              width: 1500,
              height: 100,
              rgAcceptableTypes: a,
            },
            sale_logo: {
              width: [1200, 940],
              height: [460, 460],
              rgAcceptableTypes: a,
            },
            bestofyear_banner: {
              width: 1100,
              height: 160,
              rgAcceptableTypes: b,
            },
            bestofyear_banner_mobile: {
              width: 500,
              height: 160,
              rgAcceptableTypes: b,
            },
            localized_marketing_message: {
              width: 570,
              height: 600,
              rgAcceptableTypes: S,
            },
            localized_optin_banner: {
              width: 1e3,
              height: 150,
              rgAcceptableTypes: a,
            },
            localized_marketingmessage_webm: {
              width: 570,
              height: 600,
              rgAcceptableTypes: [n.bg.pJ],
            },
            localized_marketingmessage_mp4: {
              width: 570,
              height: 600,
              rgAcceptableTypes: [n.bg.nn],
            },
            localized_partnerevent_webm: {
              width: 800,
              height: 450,
              rgAcceptableTypes: [n.bg.pJ],
            },
            localized_partnerevent_mp4: {
              width: 800,
              height: 450,
              rgAcceptableTypes: [n.bg.nn],
            },
            localized_subtitles: {
              width: 0,
              height: 0,
              bDisableEnforceDimensions: !0,
              rgAcceptableTypes: [n.bg.k7, n.bg.pi],
            },
            localized_marketingmessage_poster: {
              width: 528,
              height: 297,
              rgAcceptableTypes: [n.bg.iS, n.bg.dU],
            },
            localized_marketingmessage_background: {
              width: 570,
              height: 600,
              rgAcceptableTypes: a,
            },
            localized_email_image: {
              width: 0,
              height: 0,
              bDisableEnforceDimensions: !0,
              rgAcceptableTypes: a,
            },
            template_asset: {
              width: 0,
              height: 0,
              bDisableEnforceDimensions: !0,
              rgAcceptableTypes: A,
            },
            user_poll_background: {
              width: 0,
              height: 0,
              bDisableEnforceDimensions: !0,
              rgAcceptableTypes: a,
            },
            sale_store_capsule_header: {
              width: 920,
              height: 430,
              rgAcceptableTypes: a,
            },
            sale_store_capsule_small: {
              width: 462,
              height: 174,
              rgAcceptableTypes: a,
            },
            sale_store_capsule_main: {
              width: 1232,
              height: 706,
              rgAcceptableTypes: a,
            },
            sale_store_capsule_vertical: {
              width: 748,
              height: 896,
              rgAcceptableTypes: a,
            },
            sale_cross_promo_background: {
              width: 940,
              height: 400,
              bDisableEnforceDimensions: !0,
              rgAcceptableTypes: a,
            },
            spotlight_art: { width: 306, height: 260, rgAcceptableTypes: b },
            spotlight_art_hero: {
              width: 748,
              height: 896,
              rgAcceptableTypes: a,
            },
            old_spotlight_art: {
              width: 306,
              height: 350,
              rgAcceptableTypes: b,
            },
            marketingmessage_art: {
              width: 570,
              height: 600,
              rgAcceptableTypes: b,
            },
            marketingmessage_art_2: {
              width: 570,
              height: 600,
              rgAcceptableTypes: b,
            },
            takeover_art: { width: 1850, height: 450, rgAcceptableTypes: b },
            takeover_webm_art: {
              width: 1850,
              height: 450,
              rgAcceptableTypes: [n.bg.pJ],
            },
            takeover_mp4_art: {
              width: 1850,
              height: 450,
              rgAcceptableTypes: [n.bg.nn],
            },
            takeover_mobile_art: {
              width: 500,
              height: 350,
              rgAcceptableTypes: b,
            },
            takeover_webm_mobile_art: {
              width: 500,
              height: 350,
              rgAcceptableTypes: [n.bg.pJ],
            },
            takeover_mp4_mobile_art: {
              width: 500,
              height: 350,
              rgAcceptableTypes: [n.bg.nn],
            },
            takeunder_art: { width: 1200, height: 190, rgAcceptableTypes: b },
            takeunder_mobile_art: {
              width: 500,
              height: 160,
              rgAcceptableTypes: b,
            },
            app_header_capsule: {
              width: 920,
              height: 430,
              rgAcceptableTypes: a,
            },
            app_main_capsule: {
              width: 1232,
              height: 706,
              rgAcceptableTypes: a,
            },
          };
        function U(O, k, F, W) {
          let x = null;
          if (Array.isArray(F)) {
            if (
              ((x = F.map(($, N) => (O === $ ? N : void 0)).filter(
                ($) => $ !== void 0,
              )),
              x.length <= 0)
            )
              return !1;
          } else if (O !== F) return !1;
          if (Array.isArray(W)) {
            const $ = W.map((N, Z) => (k === N ? Z : void 0)).filter(
              (N) => N !== void 0,
            );
            if ($.length <= 0 || (x?.length && !$.some((N) => x.includes(N))))
              return !1;
          } else if (k !== W) return !1;
          return !0;
        }
        function K(O, k, F, W) {
          const x = v[F];
          return x
            ? x.bDisableEnforceDimensions
              ? !!W
              : U(O, k, x.width, x.height)
            : !1;
        }
        function j(O, k, F) {
          const W = v[F];
          if (!W) return !1;
          if (W.bDisableEnforceDimensions) return !0;
          if (Array.isArray(W.width)) {
            if (W.width.filter((x) => O < x).length == W.width.length)
              return !1;
          } else if (O < W.width) return !1;
          if (Array.isArray(W.height)) {
            if (W.height.filter((x) => k < x).length == W.height.length)
              return !1;
          } else if (k < W.height) return !1;
          return !0;
        }
        function Y(O) {
          const k = v[O];
          return (
            k.rgAcceptableTypes.includes(n.bg.k7) ||
            k.rgAcceptableTypes.includes(n.bg.pi)
          );
        }
        function V(O, k) {
          return k.filter((F) => X(O, F));
        }
        function X(O, k) {
          return v[k].rgAcceptableTypes.includes(O);
        }
      },
      9472: (H, z, l) => {
        "use strict";
        l.d(z, { o: () => G, q: () => w });
        var n = l(14947),
          h = l(72849),
          C = l(6658),
          R = Object.defineProperty,
          B = Object.getOwnPropertyDescriptor,
          L = (P, g, u, T) => {
            for (
              var d = T > 1 ? void 0 : T ? B(g, u) : g, _ = P.length - 1, y;
              _ >= 0;
              _--
            )
              (y = P[_]) && (d = (T ? y(g, u, d) : y(d)) || d);
            return T && d && R(g, u, d), d;
          };
        function G(P) {
          return P == "waiting" || P == "uploading" || P == "processing";
        }
        class w {
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
          constructor(g, u, T, d, _) {
            (0, n.Gn)(this),
              (this.file = g),
              (this.filename = u),
              (this.fileType = (0, C.yh)(u) ?? h.bg.w3),
              (this.language = T),
              (this.uploadTime = Date.now()),
              (this.status = "pending"),
              (this.m_originalSize = _),
              (this.height = _.height),
              (this.width = _.width),
              (this.m_originalDataUrl = d),
              (this.dataUrl = d);
          }
          ResetImage() {
            (this.height = this.m_originalSize.height),
              (this.width = this.m_originalSize.width),
              (this.dataUrl = this.m_originalDataUrl);
          }
          GetImageOptionLabel() {}
        }
        L([n.sH], w.prototype, "dataUrl", 2),
          L([n.sH], w.prototype, "width", 2),
          L([n.sH], w.prototype, "height", 2),
          L([n.sH], w.prototype, "status", 2),
          L([n.sH.ref], w.prototype, "message", 2),
          L([n.sH], w.prototype, "language", 2);
      },
      75909: (H, z, l) => {
        "use strict";
        l.d(z, { bT: () => M, zO: () => S });
        var n = l(99412),
          h = l(71742),
          C = l(64868),
          R = l(41735),
          B = l.n(R),
          L = l(14947),
          G = l(90626),
          w = l(87498),
          P = l(53424),
          g = l(34592),
          u = l(27066),
          T = l(82734),
          d = l(18210),
          _ = l(3166),
          y = l(51746),
          I = l(29630),
          s = l(64),
          f = l(38410),
          c = Object.defineProperty,
          p = Object.getOwnPropertyDescriptor,
          t = (b, a, D, E) => {
            for (
              var A = E > 1 ? void 0 : E ? p(a, D) : a, v = b.length - 1, U;
              v >= 0;
              v--
            )
              (U = b[v]) && (A = (E ? U(a, D, A) : U(A)) || A);
            return E && A && c(a, D, A), A;
          };
        function e(b, a, D) {
          const E = (0, w.Kf)(a.width, D),
            A = (0, w.Kf)(a.height, D);
          return {
            sKey: `${b}_${E}x${A}`,
            width: E,
            height: A,
            bEnforceDimensions: !a.bDisableEnforceDimensions,
            artworkType: b,
            bHiddenFromDropdown: b === "hero",
            bDeprecated: (D ?? 0) >= 1,
            fnGetLabelText() {
              return this.artworkType == "spotlight"
                ? (0, d.we)("#EventEditor_ArtworkType_store_spotlight")
                : (0, d.we)("#EventEditor_ArtworkType_" + this.artworkType);
            },
          };
        }
        function o(b) {
          return b?.flatMap((a) => {
            const D = w.Fj[a];
            if (
              ((0, h.wT)(!!D, `Artwork Type not in Map ${a}`),
              typeof D.width == "number" && typeof D.height == "number")
            )
              return [e(a, D)];
            {
              let E = Math.max(
                Array.isArray(D.width) ? D.width.length : 1,
                Array.isArray(D.height) ? D.height.length : 1,
              );
              return Array.from({ length: E }, (A, v) => e(a, D, v));
            }
          });
        }
        class i extends f.Vr {
          m_filesToUpload = L.sH.array();
          m_filesCompleted = L.sH.array();
          m_clanImagesV2;
          m_clanSteamID;
          m_rgImageOptions;
          m_localizedImageGroupPrimaryImage;
          m_lastError = void 0;
          constructor(a, D, E, A) {
            super(),
              (0, L.Gn)(this),
              (this.m_clanSteamID = a),
              (this.m_rgImageOptions = o(D)),
              (this.m_localizedImageGroupPrimaryImage = E),
              (this.m_clanImagesV2 = A ?? !1);
          }
          GetClanSteamID() {
            return this.m_clanSteamID;
          }
          async AddImage(a, D = n.Bhc) {
            const { language: E } = (0, f.jj)(a.name, D);
            return this.AddImageForLanguage(a, E);
          }
          async AddImageForLanguage(a, D) {
            if (!(0, y.aL)(a.type) && !(_.iA.is_support && (0, y.Uz)(a.type)))
              return !1;
            const E = await (0, y.zB)(a, (0, y.Uz)(a.type));
            if (!E) return !1;
            const A = new s.M7(
              a,
              a.name,
              D,
              this.m_rgImageOptions,
              E.src,
              (0, y.II)(E),
              E,
              this.m_localizedImageGroupPrimaryImage,
            );
            return (this.m_filesToUpload = [...this.m_filesToUpload, A]), !0;
          }
          async AddExistingClanImage(a, D = n.Bhc) {
            const E = I.zU.GetHashAndExt(a);
            if (!E) return !1;
            const A = I.zU.GenerateEditableURLFromHashAndExt(
                this.m_clanSteamID,
                E,
              ),
              v = await B()({ url: A, method: "GET", responseType: "blob" }),
              U = (0, T.pE)(v.data, a.file_name);
            return await this.AddImage(U, D);
          }
          DeleteUploadImageByIndex(a) {
            this.m_filesToUpload.splice(a, 1),
              (this.m_filesToUpload = [...this.m_filesToUpload]);
          }
          DeleteUploadImage(a) {
            let D = this.m_filesToUpload.findIndex(
              (E) => a.file == E.file && a.uploadTime == E.uploadTime,
            );
            D >= 0 && this.DeleteUploadImageByIndex(D);
          }
          ClearImages() {
            this.m_filesToUpload = L.sH.array();
          }
          GetFilesUploaded() {
            return this.m_filesCompleted;
          }
          GetLastErrorFile() {
            return this.m_lastError;
          }
          GetCompletedFiles() {
            return this.m_filesCompleted.length;
          }
          GetTotalFiles() {
            return this.m_filesToUpload.length;
          }
          GetFilesToUpload() {
            return this.m_filesToUpload.map((a) => a.file);
          }
          GetUploadImages() {
            return this.m_filesToUpload;
          }
          BHasError() {
            return this.m_lastError != null;
          }
          BAllDone() {
            return (
              this.m_filesCompleted.length > 0 &&
              this.m_filesCompleted.length == this.m_filesToUpload.length
            );
          }
          BIsFileCompleted(a) {
            return this.m_filesCompleted.indexOf(a) != -1;
          }
          RetryAllFailedUploads() {
            this.CancelAllUploads(), this.UploadAllImages();
          }
          async handleUploadRefresh(a) {
            await P.pU.LoadClanImages(this.m_clanSteamID, !0, a);
          }
          BGetUploadsAreInSerial() {
            return !1;
          }
          async UploadSingleImage(a, D, E, A) {
            const v = a.file,
              U = a.GetCurrentImageOption(),
              K = a.GetResizeDimension(),
              j = new FormData();
            j.append("clanimage", v, D),
              j.append("sessionid", (0, _.KC)()),
              this.m_clanImagesV2 && j.append("clan_images_v2", "1"),
              U?.artworkType && j.append("arttype", U.artworkType),
              K &&
                K.length > 0 &&
                j.append(
                  "resize",
                  K.map((x) => x.width + "x" + x.height).join(","),
                );
            let Y = "/uploadimage/";
            const V = this.m_localizedImageGroupPrimaryImage;
            V &&
              ((Y = "/ajaxuploadlocalizedimage/"),
              j.append("origimagehash", V.image_hash),
              V.thumbnail_hash && j.append("thumbhash", V.thumbnail_hash),
              j.append("extension", "" + V.file_type),
              j.append("language", "" + E));
            const X = D.split(".").pop()?.toLocaleLowerCase();
            (X == "webm" || X == "mp4") &&
              (j.append("video_width", "" + a.width),
              j.append("video_height", "" + a.height));
            let O =
                _.TS.COMMUNITY_BASE_URL +
                "/gid/" +
                this.m_clanSteamID.ConvertTo64BitString() +
                Y,
              k = {
                cancelToken: A,
                withCredentials: !0,
                headers: { "Content-Type": "multipart/form-data" },
              },
              F,
              W = !0;
            try {
              (F = await B().post(O, j, k)), this.m_filesCompleted.push(v);
            } catch (x) {
              (W = !1),
                (this.m_lastError = {
                  file: v,
                  status: x.response ? x.response.status : 500,
                  message: (0, g.H)(x).strErrorMsg,
                }),
                (F = x.response);
            }
            return (
              V || (await this.handleUploadRefresh(A)),
              { bSuccess: W, result: F.data }
            );
          }
        }
        t([L.sH], i.prototype, "m_filesToUpload", 2),
          t([L.sH], i.prototype, "m_filesCompleted", 2),
          t([L.sH], i.prototype, "m_lastError", 2),
          t([u.o], i.prototype, "AddImage", 1),
          t([u.o], i.prototype, "AddExistingClanImage", 1),
          t([u.o], i.prototype, "DeleteUploadImageByIndex", 1),
          t([u.o], i.prototype, "DeleteUploadImage", 1),
          t([u.o], i.prototype, "ClearImages", 1);
        class r extends i {
          constructor(a, D, E) {
            super(a, D, E, !1);
          }
        }
        class m extends i {
          constructor(a, D, E) {
            super(a, D, E, !0);
          }
        }
        async function M(b, a, D, E, A) {
          let v =
              _.TS.COMMUNITY_BASE_URL +
              "/gid/" +
              a.ConvertTo64BitString() +
              "/resizeimage/",
            U = new FormData();
          return (
            U.append("imagehash", D),
            U.append("extension", E),
            U.append(
              "resize",
              A.map((j) => j.width + "x" + j.height).join(","),
            ),
            U.append("sessionid", (0, _.KC)()),
            (await B().post(v, U, { cancelToken: b })).data.count
          );
        }
        function S(b, a, D) {
          const E = (0, C.wm)(a instanceof Array ? a : [a]),
            A = b.ConvertTo64BitString();
          return G.useMemo(() => new r(b, E, D), [A, E]);
        }
      },
      64: (H, z, l) => {
        "use strict";
        l.d(z, { K_: () => c, M7: () => f });
        var n = l(14947),
          h = l(87498),
          C = l(18210),
          R = l(9472),
          B = l(21254),
          L = l(51746),
          G = Object.defineProperty,
          w = Object.getOwnPropertyDescriptor,
          P = (t, e, o, i) => {
            for (
              var r = i > 1 ? void 0 : i ? w(e, o) : e, m = t.length - 1, M;
              m >= 0;
              m--
            )
              (M = t[m]) && (r = (i ? M(e, o, r) : M(r)) || r);
            return i && r && G(e, o, r), r;
          };
        const g = 960,
          u = 311,
          T = 480,
          d = 156;
        class _ extends R.q {
          m_rgImageOptions;
          m_currentImageOption = void 0;
          m_currentImageOptionKey = void 0;
          constructor(e, o, i, r, m, M) {
            super(e, o, i, m, M), (0, n.Gn)(this), (this.m_rgImageOptions = r);
          }
          IsValidAssetType(e, o) {
            let i = 0,
              r = 0,
              m = !1,
              M =
                !this.m_rgImageOptions ||
                this.m_rgImageOptions.length === 0 ||
                this.m_rgImageOptions.some(
                  (K) => K.sKey == this.GetCurrentImageOption()?.sKey,
                );
            if (e) (i = e.width), (r = e.height), (m = !0);
            else if (this.GetCurrentImageOption()) {
              const K = h.Fj[this.GetCurrentImageOption().artworkType];
              K &&
                ((i = K.width),
                (r = K.height),
                (m = !K.bDisableEnforceDimensions));
            }
            const S = this.width >= (0, h.dM)(i) && this.height >= (0, h.dM)(r),
              b = m ? (0, h.Ek)(this.width, this.height, i, r) : S,
              a = o && o != this.fileType,
              D =
                this.m_rgImageOptions && this.m_rgImageOptions.length > 0
                  ? (0, h.vz)(
                      this.fileType,
                      this.m_rgImageOptions?.map((K) => K.artworkType) || [],
                    ).length == 0
                  : !1,
              E = !!(0, B.t)(this.fileType);
            let A = "",
              v = !1,
              U;
            return (
              M
                ? D
                  ? (A = (0, C.we)("#ImageUpload_InvalidFileType"))
                  : a
                    ? (A = (0, C.we)(
                        "#ImageUpload_InvalidFormat",
                        (0, L.EG)(o) ?? "",
                      ))
                    : !b && !E
                      ? (A = (0, C.we)(
                          "#ImageUpload_InvalidResolution",
                          (0, h.qj)(i),
                          (0, h.qj)(r),
                        ))
                      : S
                        ? !b && E
                          ? ((A = (0, C.we)(
                              "#ImageUpload_InvalidDimensions",
                              (0, h.qj)(i),
                              (0, h.qj)(r),
                            )),
                            (v = !0))
                          : ((Array.isArray(i) && this.width != (0, h.qj)(i)) ||
                              (Array.isArray(r) &&
                                this.height != (0, h.qj)(r))) &&
                            ((U = U ?? []),
                            U.push(
                              (0, C.we)(
                                "#ImageUpload_PreferredDimension",
                                (0, h.qj)(i),
                                (0, h.qj)(r),
                              ),
                            ))
                        : (A = (0, C.we)(
                            "#ImageUpload_TooSmall",
                            (0, h.qj)(i),
                            (0, h.qj)(r),
                          ))
                : (A = (0, C.we)("#ImageUpload_InvalidFormatSelected")),
              {
                error: A,
                warnings: U,
                needsCrop: v,
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
            const e = (0, h.vz)(
              this.fileType,
              this.m_rgImageOptions?.map((i) => i.artworkType),
            );
            let o = p(this.width, this.height, e, !1);
            if ((o === void 0 && (o = p(this.width, this.height, e, !0)), o)) {
              const i = this.m_rgImageOptions.find(
                (r) =>
                  r.artworkType == o &&
                  (!r.bEnforceDimensions ||
                    (r.width == this.width && r.height == this.height)),
              );
              if (i) return i;
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
          SetCurrentImageOption(e) {
            (this.m_currentImageOption = e),
              (this.m_currentImageOptionKey = e?.sKey);
          }
        }
        P([n.sH], _.prototype, "m_currentImageOption", 2),
          P([n.sH], _.prototype, "m_currentImageOptionKey", 2);
        class y extends _ {
          video;
          constructor(e, o, i, r, m, M, S) {
            super(e, o, i, r, m, M), (this.video = S);
          }
          BIsOriginalMinimumDimensions(e) {
            return (0, h.s4)(
              this.video.videoWidth,
              this.video.videoHeight,
              e.artworkType,
            );
          }
          FileTypeMatchesImageTypes(e) {
            return (0, h.N_)(this.fileType, e.artworkType);
          }
          BIsVideo() {
            return h.Ho.includes(this.fileType);
          }
          GetResizeDimension() {}
        }
        class I extends _ {
          constructor(e, o, i, r) {
            super(e, o, i, r, URL.createObjectURL(e), { width: 0, height: 0 });
          }
          BIsOriginalMinimumDimensions(e) {
            return (0, h.XY)(e.artworkType);
          }
          FileTypeMatchesImageTypes(e) {
            return (0, h.N_)(this.fileType, e.artworkType);
          }
          BIsVideo() {
            return h.Ho.includes(this.fileType);
          }
          GetResizeDimension() {}
        }
        function s(t) {
          const e = t.split(".").pop()?.toLocaleLowerCase();
          return e == "webm" || e == "mp4";
        }
        class f extends _ {
          bCropped = !1;
          localizedImageGroupPrimaryImage;
          media;
          constructor(e, o, i, r, m, M, S, b) {
            super(e, o, i, r, m, M),
              (0, n.Gn)(this),
              (this.media = S),
              (this.localizedImageGroupPrimaryImage = b);
          }
          IsValidAssetType(e, o) {
            return (
              (o = o ?? this.localizedImageGroupPrimaryImage?.file_type),
              super.IsValidAssetType(e, o)
            );
          }
          GetCanvasImageSource() {
            return this.media;
          }
          BIsOriginalMinimumDimensions(e) {
            return (0, h.s4)(
              this.media?.width ?? 0,
              this.media?.height ?? 0,
              e.artworkType,
            );
          }
          FileTypeMatchesImageTypes(e) {
            return (0, h.N_)(this.fileType, e.artworkType);
          }
          BIsVideo() {
            return h.Ho.includes(this.fileType);
          }
          GetResizeDimension() {
            return c(this.GetCurrentImageOption()?.artworkType);
          }
        }
        P([n.sH], f.prototype, "bCropped", 2);
        function c(t) {
          if (t === "background")
            return [
              { width: g, height: u },
              { width: T, height: d },
            ];
          if (t === "capsule")
            return [
              {
                width: (0, h.qj)(h.Fj[t].width) / 2,
                height: (0, h.qj)(h.Fj[t].height) / 2,
              },
            ];
          if (t === "spotlight")
            return [
              {
                width: (0, h.qj)(h.Fj[t].width) / 2,
                height: (0, h.qj)(h.Fj[t].height) / 2,
              },
            ];
        }
        function p(t, e, o, i = !1) {
          if (o) {
            for (let r of o)
              if (i ? (0, h.s4)(t, e, r) : (0, h.yu)(t, e, r)) return r;
          }
        }
      },
      38410: (H, z, l) => {
        "use strict";
        l.d(z, { PD: () => u, Vr: () => g, jj: () => T });
        var n = l(32093),
          h = l(99412),
          C = l(18210),
          R = l(41735),
          B = l.n(R);
        class L {}
        function G(d, _, y) {
          const I = d.filter((s) => {
            const f = s.IsValidAssetType(_, y);
            return s.status === "pending" && !f.error && !f.needsCrop;
          });
          return (
            I.forEach((s) => {
              (s.status = "waiting"), (s.message = "");
            }),
            I
          );
        }
        async function w(d, _, y, I, s) {
          const f = G(d, y, I),
            c = [];
          for (const p of f) {
            p.status = "uploading";
            const t = await _(p, p.filename, p.language ?? h.xPp, s);
            (p.status = t.bSuccess ? "success" : "failed"),
              (p.message =
                !t.bSuccess && t.elErrorMessage ? t.elErrorMessage : ""),
              c.push({
                bSuccess: t.bSuccess,
                image: p,
                uploadResult: t.result,
              });
          }
          return c;
        }
        async function P(d, _, y, I, s, f) {
          const c = G(d, I, s),
            p = [];
          let t = 0;
          const e = async () => {
              for (; t < c.length; ) {
                const i = t++,
                  r = c[i];
                r.status = "uploading";
                const m = await y(r, r.filename, r.language ?? h.xPp, f);
                (r.status = m.bSuccess ? "success" : "failed"),
                  (r.message =
                    !m.bSuccess && m.elErrorMessage ? m.elErrorMessage : ""),
                  (p[i] = { image: r, uploadResult: m });
              }
            },
            o = Array.from({ length: Math.floor(_) }, () => e());
          return (
            await Promise.all(o),
            p.map((i) => ({
              bSuccess: i.uploadResult.bSuccess,
              image: i.image,
              uploadResult: i.uploadResult.result,
            }))
          );
        }
        class g extends L {
          m_cancel = void 0;
          async UploadAllImages(_, y) {
            this.m_cancel = B().CancelToken.source();
            const I = this.BGetUploadsAreInSerial() ? 1 : 4;
            let s;
            const f = this.UploadSingleImage.bind(this);
            return (
              I > 1
                ? (s = await P(
                    this.GetUploadImages(),
                    I,
                    f,
                    _,
                    y,
                    this.m_cancel.token,
                  ))
                : (s = await w(
                    this.GetUploadImages(),
                    f,
                    _,
                    y,
                    this.m_cancel.token,
                  )),
              s
            );
          }
          CancelAllUploads() {
            this.m_cancel?.cancel((0, C.we)("#ImageUpload_CancelRequest"));
          }
        }
        function u(d, _, y) {
          if (((d == null || d == null) && (d = _), !y || y.length === 0))
            return d;
          for (const I of y) if (C.A0.IsELanguageValidInRealm(d, I)) return d;
          for (const I of y) if (C.A0.IsELanguageValidInRealm(_, I)) return _;
          return y.includes(n.TU.k_ESteamRealmGlobal) ? h.Bhc : h.ZLm;
        }
        function T(d, _ = h.Bhc) {
          let y = d.lastIndexOf(".");
          y != -1 && (d = d.slice(0, y).toLowerCase());
          let I = null,
            s = 0;
          d.endsWith("korean") && ((I = h.Pn1), (s = 6));
          for (let c = h.Bhc; c < h.bP9; ++c) {
            const p = (0, h.wwZ)(c);
            if (p.length <= s) continue;
            if (d.endsWith(p) && d.length > p.length + 2) {
              const e = d[d.length - p.length - 1];
              /\p{Alphabetic}|\p{Number}/u.test(e) || ((I = c), (s = p.length));
            }
            const t = (0, h.LgB)(c);
            t.length <= s || (d.endsWith(t) && ((I = c), (s = t.length)));
          }
          const f = (c) => c.replace(/[\s_-]+$/g, "");
          return {
            language: I ?? _,
            baseFilename: s > 0 ? f(d.substring(0, d.length - s)) : d,
          };
        }
      },
      53424: (H, z, l) => {
        "use strict";
        l.d(z, { mr: () => c, n9: () => f, pU: () => s });
        var n = l(72604),
          h = l(41735),
          C = l.n(h),
          R = l(14947),
          B = l(90626),
          L = l(76559),
          G = l(47689),
          w = l(71742),
          P = l(8323),
          g = l(30096),
          u = l(3166),
          T = Object.defineProperty,
          d = Object.getOwnPropertyDescriptor,
          _ = (p, t, e, o) => {
            for (
              var i = o > 1 ? void 0 : o ? d(t, e) : t, r = p.length - 1, m;
              r >= 0;
              r--
            )
              (m = p[r]) && (i = (o ? m(t, e, i) : m(i)) || i);
            return o && i && T(t, e, i), i;
          };
        class y {
          success;
          images;
        }
        class I {
          constructor() {
            (0, R.Gn)(this);
          }
          m_mapClanToImages = new Map();
          m_mapClanImageLoadPromises = new Map();
          m_imageListChangeCallback = new Map();
          m_mapClanImageLoadState = new Map();
          m_mapImageIDToResolution = new Map();
          BHasImageResolution(t) {
            return this.m_mapImageIDToResolution.has(t.imageid);
          }
          GetImageResolution(t) {
            return this.m_mapImageIDToResolution.get(t.imageid);
          }
          SetImageResolution(t, e) {
            this.m_mapImageIDToResolution.set(t.imageid, e);
          }
          GetImageListCallbackForClanAccountIDInternal(t) {
            return (
              this.m_imageListChangeCallback.has(t) ||
                this.m_imageListChangeCallback.set(t, new P.lu()),
              this.m_imageListChangeCallback.get(t)
            );
          }
          GetImageListCallbackForClanAccountID(t) {
            return this.GetImageListCallbackForClanAccountIDInternal(t);
          }
          m_vecClanImageDragListener = new Array();
          AddClanImageDragListener(t) {
            this.m_vecClanImageDragListener.indexOf(t) == -1 &&
              this.m_vecClanImageDragListener.push(t);
          }
          RemoveClanImageDragListener(t) {
            let e = this.m_vecClanImageDragListener.indexOf(t);
            e != -1 && this.m_vecClanImageDragListener.splice(e, 1);
          }
          GetClanImageDragListener() {
            return this.m_vecClanImageDragListener;
          }
          BHasLoadedClanImages(t) {
            return this.m_mapClanToImages.has(t.GetAccountID());
          }
          async LoadClanImages(t, e, o) {
            const i = t.GetAccountID();
            if (e || !this.m_mapClanImageLoadPromises.has(i)) {
              const r = this.InternalLoadClanImages(t, e, o);
              this.m_mapClanImageLoadPromises.set(i, r);
            }
            return this.m_mapClanImageLoadPromises.get(i);
          }
          async InternalLoadClanImages(t, e, o) {
            let i = t.GetAccountID();
            if (
              ((0, w.wT)(t && i != 0, "ClanSteamID missing:" + t),
              t && (!this.m_mapClanToImages.has(i) || e))
            ) {
              let r = {},
                m;
              const M =
                u.TS.COMMUNITY_BASE_URL +
                "/gid/" +
                t.ConvertTo64BitString() +
                "/getimages/";
              if (
                ((m = await C().get(M, {
                  params: r,
                  withCredentials: !0,
                  cancelToken: o,
                })),
                m)
              ) {
                for (let S of m.data.images) S.clanAccountID = i;
                (0, R.h5)(() => {
                  this.m_mapClanImageLoadState.set(i, { loaded: !0 }),
                    this.m_mapClanToImages.set(i, m.data.images),
                    this.GetImageListCallbackForClanAccountIDInternal(
                      i,
                    ).Dispatch(m.data.images);
                });
              }
            }
            return this.m_mapClanToImages.get(i);
          }
          GetLoadState(t) {
            return this.m_mapClanImageLoadState.get(t.GetAccountID());
          }
          GetClanImages(t) {
            return this.GetClanImagesByAccount(t.GetAccountID());
          }
          GetClanImagesByAccount(t) {
            let e = this.m_mapClanToImages.get(t);
            return e || new Array();
          }
          GetFilteredClanImages(t, e) {
            let o = s.GetClanImages(t);
            return this.GetFilteredClanImagesList(o, e);
          }
          GetFilteredClanImagesList(t, e) {
            if (e && e.trim().length > 0) {
              e = e.trim().toLowerCase();
              let o = new Array();
              for (let i of t)
                i.file_name &&
                  i.file_name.toLowerCase().indexOf(e) >= 0 &&
                  o.push(i);
              return o;
            }
            return t;
          }
          GetClanImageByID(t, e) {
            let o = t.GetAccountID(),
              i = this.m_mapClanToImages.get(o);
            return i ? i.find((r) => r.imageid == e) : void 0;
          }
          GetClanImageByURL(t, e) {
            let o = t.GetAccountID(),
              i = this.m_mapClanToImages.get(o);
            return i ? i.find((r) => r.thumb_url == e || r.url == e) : void 0;
          }
          GetClanImageByFile(t, e) {
            let o = t.GetAccountID(),
              i = this.m_mapClanToImages.get(o);
            return i ? i.find((r) => r.file_name == e.name) : void 0;
          }
          GetClanImageByImageHash(t, e) {
            let o = t.GetAccountID(),
              i = this.m_mapClanToImages.get(o);
            return i ? i.find((r) => r.image_hash == e) : void 0;
          }
          async DeleteClanImageByID(t, e) {
            let o = { sessionid: (0, u.KC)(), imageid: e },
              i = t.GetAccountID(),
              r = await C().get(
                u.TS.COMMUNITY_BASE_URL +
                  "/gid/" +
                  t.ConvertTo64BitString() +
                  "/deleteimage/",
                { params: o },
              );
            if (!r || r.status != 200 || r.data.success != n.R) return r.data;
            let m = this.m_mapClanToImages.get(i);
            if (m) {
              let M = m.findIndex((S, b, a) => S.imageid == e);
              M >= 0 &&
                (m.splice(M, 1),
                this.GetImageListCallbackForClanAccountIDInternal(i).Dispatch([
                  ...m,
                ]));
            }
            return r.data;
          }
          async DeleteClanImage(t, e) {
            return this.DeleteClanImageByID(t, e.imageid);
          }
        }
        _([R.sH], I.prototype, "m_mapClanToImages", 2),
          _([R.sH], I.prototype, "m_mapClanImageLoadState", 2);
        const s = new I();
        function f(p) {
          const [t, e] = (0, B.useState)(s.GetClanImagesByAccount(p));
          return (0, g.hL)(s.GetImageListCallbackForClanAccountID(p), e), t;
        }
        function c(p) {
          const t = L.b.InitFromClanID(p),
            e = (0, G.m)("useLoadClanImages"),
            [o, i] = (0, B.useState)(() => s.BHasLoadedClanImages(t));
          return (
            (0, B.useEffect)(() => {
              const r = L.b.InitFromClanID(p);
              return (
                s.BHasLoadedClanImages(r) ||
                  s.LoadClanImages(r, !1, e.token).then(() => i(!0)),
                () => e.cancel()
              );
            }, [p, e]),
            o
          );
        }
      },
      6658: (H, z, l) => {
        "use strict";
        l.d(z, { yh: () => w });
        var n = l(90626),
          h = l(72849);
        function C(P, g, u = !0) {
          const T = new URLSearchParams({
            ima: "fit",
            impolicy: "Letterbox",
            imcolor: "#000000",
          });
          return (
            P && T.set("imw", Math.round(P).toString()),
            g && T.set("imh", Math.round(g).toString()),
            !P || !g || !u
              ? T.set("letterbox", "false")
              : T.set("letterbox", "true"),
            "?" + T.toString()
          );
        }
        const R = null;
        function B(P, g) {
          let u;
          for (let T of R)
            if (
              (u ? (u += ", ") : (u = ""),
              (u += `${P}${C(T, 0)} ${T}w`),
              T >= g)
            )
              break;
          return u;
        }
        function L(P) {
          let {
            src: g,
            orig_width: u,
            orig_height: T,
            sizes: d,
            default_width: _,
            ...y
          } = P;
          d || (d = "95vw"), _ || (_ = 1024);
          let I = `${g}${C(_, void 0)}`,
            s = B(g, u);
          return React.createElement("img", {
            src: I,
            srcSet: s,
            sizes: d,
            ...y,
          });
        }
        function G(P) {
          const {
            width: g,
            height: u,
            orig_width: T,
            orig_height: d,
            src: _,
            ...y
          } = P;
          let I = _ + C(g, u),
            s,
            f = 6;
          if (
            (g && T && (f = Math.min(f, Math.ceil(T / g))),
            u && d && (f = Math.min(f, Math.ceil(d / u))),
            f)
          )
            for (let c of [2, 4, 6]) {
              if (c > f) break;
              s ? (s += ", ") : (s = ""),
                (s += `${_}${C(g && g * c, u && u * c)} ${c}x`);
            }
          return React.createElement("img", { ...y, src: I, srcSet: s });
        }
        function w(P) {
          if (
            (P.indexOf("?") > 0 && (P = P.split("?")[0]),
            P.endsWith(".jpg") || P.endsWith(".jpeg"))
          )
            return h.bg.iS;
          if (P.endsWith(".png")) return h.bg.dU;
          if (P.endsWith(".gif")) return h.bg.CK;
          if (P.endsWith(".mp4")) return h.bg.nn;
          if (P.endsWith(".webm")) return h.bg.pJ;
          if (P.endsWith(".vtt")) return h.bg.k7;
          if (P.endsWith(".srt")) return h.bg.pi;
          if (P.endsWith(".webp")) return h.bg.wD;
        }
      },
      79167: (H, z, l) => {
        "use strict";
        l.d(z, { I: () => I });
        var n = l(7850),
          h = l(90626),
          C = l(30096),
          R = l(75844),
          B = l(8323),
          L = l(18210),
          G = l(16412),
          w = l(36118),
          P = l(81315),
          g = l.n(P),
          u = l(13854),
          T = Object.defineProperty,
          d = Object.getOwnPropertyDescriptor,
          _ = (s, f, c, p) => {
            for (
              var t = p > 1 ? void 0 : p ? d(f, c) : f, e = s.length - 1, o;
              e >= 0;
              e--
            )
              (o = s[e]) && (t = (p ? o(f, c, t) : o(t)) || t);
            return p && t && T(f, c, t), t;
          },
          y = ((s) => (
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
          ))(y || {});
        let I = class extends h.Component {
          m_rectLinkRegion;
          m_elLinkRegionBox;
          m_nLocalOffsetXPct;
          m_nLocalOffsetYPct;
          m_fnMouseUp = null;
          m_fnMouseMove = null;
          m_listeners = new B.Ji();
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
          OnMouseDown(s, f) {
            this.m_elLinkRegionBox?.parentElement &&
              this.m_elLinkRegionBox.ownerDocument.defaultView &&
              ((this.m_fnMouseUp = (c) => {
                this.OnMouseUp(c, f);
              }),
              (this.m_fnMouseMove = (c) => {
                this.OnMouseMove(c, f);
              }),
              this.setState({ EdgeDown: f }),
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
          OnMouseMove(s, f) {
            if (this.state.EdgeDown !== void 0) {
              switch ((s.shiftKey && this.m_fnMouseUp(), f)) {
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
                  const c = (0, u.OQ)(
                      this.CalcLeftEdge(s.clientX),
                      0,
                      100 - this.state.curWidthPct,
                    ),
                    p = 100 - (c + this.state.curWidthPct),
                    t = (0, u.OQ)(
                      this.CalcTopEdge(s.clientY),
                      0,
                      100 - this.state.curHeightPct,
                    ),
                    e = 100 - (t + this.state.curHeightPct),
                    o = {
                      curLeftPosPct: c,
                      curRightPosPct: p,
                      curTopPosPct: t,
                      curBottomPosPct: e,
                    };
                  this.setState(o);
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
            let f =
                s.curTopPosPct !== void 0
                  ? s.curTopPosPct
                  : this.state.curTopPosPct,
              c =
                s.curBottomPosPct !== void 0
                  ? s.curBottomPosPct
                  : this.state.curBottomPosPct,
              p =
                s.curLeftPosPct !== void 0
                  ? s.curLeftPosPct
                  : this.state.curLeftPosPct,
              t =
                s.curRightPosPct !== void 0
                  ? s.curRightPosPct
                  : this.state.curRightPosPct,
              e = (0, u.OQ)(
                100 - t - p,
                this.props.widthMinPct || 0,
                this.props.widthMaxPct || 100,
              ),
              o = (0, u.OQ)(
                100 - c - f,
                this.props.heightMinPct || 0,
                this.props.heightMaxPct || 100,
              );
            this.props.bLockAspectRatio &&
              (s.curLeftPosPct !== void 0 || s.curRightPosPct !== void 0
                ? (o = e / this.m_aspectRatio)
                : (e = o * this.m_aspectRatio)),
              s.curLeftPosPct !== void 0
                ? (p = 100 - t - e)
                : (t = 100 - (p + e)),
              s.curTopPosPct !== void 0
                ? (f = 100 - c - o)
                : (c = 100 - (f + o));
            const i = 100 - t - p,
              r = 100 - c - f;
            this.IsValidPct(p) &&
              this.IsValidPct(t) &&
              this.IsValidPct(f) &&
              this.IsValidPct(c) &&
              this.IsValidPct(i) &&
              this.IsValidPct(r) &&
              this.setState({
                curLeftPosPct: p,
                curRightPosPct: t,
                curTopPosPct: f,
                curBottomPosPct: c,
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
            return (0, u.OQ)(this.GetXPercent(s), 0, 100);
          }
          CalcRightEdge(s) {
            return (0, u.OQ)(
              100 - (this.GetXPercent(s) + this.state.curWidthPct),
              0,
              100,
            );
          }
          CalcTopEdge(s) {
            return (0, u.OQ)(this.GetYPercent(s), 0, 100);
          }
          CalcBottomEdge(s) {
            return (0, u.OQ)(
              100 - (this.GetYPercent(s) + this.state.curHeightPct),
              0,
              100,
            );
          }
          OnMouseUp(s, f) {
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
              f = g().LinkRegionDragBox;
            return (
              this.state.EdgeDown != null &&
                (f += ` ${g().EdgeDown} ` + g()[this.state.EdgeDown]),
              (0, n.jsxs)("div", {
                className: f,
                style: s,
                ref: this.LinkRegionBoxRef,
                draggable: !1,
                children: [
                  (0, n.jsxs)("div", {
                    className: g().LinkRegionGridBox,
                    children: [
                      (0, n.jsx)("div", {
                        className: `${g().LinkRegionEdge} ${g().TopLeft}`,
                        onMouseDown: (c) => {
                          this.OnMouseDown(c, "topleft");
                        },
                        draggable: !1,
                      }),
                      (0, n.jsx)("div", {
                        className: `${g().LinkRegionEdge} ${g().Top}`,
                        onMouseDown: (c) => {
                          this.OnMouseDown(c, "top");
                        },
                      }),
                      (0, n.jsx)("div", {
                        className: `${g().LinkRegionEdge} ${g().TopRight}`,
                        onMouseDown: (c) => {
                          this.OnMouseDown(c, "topright");
                        },
                        draggable: !1,
                      }),
                      (0, n.jsx)("div", {
                        className: `${g().LinkRegionEdge} ${g().Left}`,
                        onMouseDown: (c) => {
                          this.OnMouseDown(c, "left");
                        },
                        draggable: !1,
                      }),
                      (0, n.jsxs)("div", {
                        className: `${g().LinkRegionEdge} ${g().Middle}`,
                        onMouseDown: (c) => {
                          this.OnMouseDown(c, "middle");
                        },
                        draggable: !1,
                        children: [
                          this.props.deleteFn &&
                            (0, n.jsx)("div", {
                              className: g().LinkRegionDelete,
                              onClick: this.HandleDelete,
                              children: (0, n.jsx)(w.sED, {}),
                            }),
                          !this.props.bDisableLink &&
                            (0, n.jsx)("div", {
                              className: g().LinkRegionSettings,
                              onClick: this.OnEditLink,
                              children: (0, n.jsx)(w.xv8, {}),
                            }),
                          (0, n.jsxs)("div", {
                            className: g().LinkText,
                            children: [" ", this.m_strDescription, " "],
                          }),
                        ],
                      }),
                      (0, n.jsx)("div", {
                        className: `${g().LinkRegionEdge} ${g().Right}`,
                        onMouseDown: (c) => {
                          this.OnMouseDown(c, "right");
                        },
                        draggable: !1,
                      }),
                      (0, n.jsx)("div", {
                        className: `${g().LinkRegionEdge} ${g().BottomLeft}`,
                        onMouseDown: (c) => {
                          this.OnMouseDown(c, "bottomleft");
                        },
                        draggable: !1,
                      }),
                      (0, n.jsx)("div", {
                        className: `${g().LinkRegionEdge} ${g().Bottom}`,
                        onMouseDown: (c) => {
                          this.OnMouseDown(c, "bottom");
                        },
                        draggable: !1,
                      }),
                      (0, n.jsx)("div", {
                        className: `${g().LinkRegionEdge} ${g().BottomRight}`,
                        onMouseDown: (c) => {
                          this.OnMouseDown(c, "bottomright");
                        },
                        draggable: !1,
                      }),
                    ],
                  }),
                  this.state.bEditingLink &&
                    (0, n.jsxs)("div", {
                      className: g().LinkRegionInfo,
                      children: [
                        (0, n.jsx)(G.pd, {
                          className: g().LinkRegionInput,
                          type: "text",
                          name: "link_url",
                          value: this.state.text_link_url,
                          label: (0, L.we)("#SteamTV_LinkURL"),
                          placeholder: "https://www.example.com",
                          onChange: this.OnSetLinkURLChange,
                          mustBeURL: !0,
                        }),
                        (0, n.jsx)(G.pd, {
                          className: g().LinkRegionInput,
                          type: "text",
                          name: "link_description",
                          value: this.state.text_link_description,
                          label: (0, L.we)("#SteamTV_LinkDescription"),
                          placeholder: (0, L.we)(
                            "#SteamTV_LinkDescription_Placeholder",
                          ),
                          onChange: this.OnSetLinkDescriptionChange,
                        }),
                        (0, n.jsxs)("div", {
                          className: g().LinkRegionButtonContainer,
                          children: [
                            (0, n.jsxs)(G.$n, {
                              disabled: !this.state.valid_link,
                              onClick: this.OnSaveLink,
                              children: [" ", (0, L.we)("#Button_OK"), " "],
                            }),
                            (0, n.jsxs)(G.$n, {
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
        _([C.oI], I.prototype, "LinkRegionBoxRef", 1),
          _([C.oI], I.prototype, "OnMouseDown", 1),
          _([C.oI], I.prototype, "OnMouseMove", 1),
          _([C.oI], I.prototype, "OnMouseUp", 1),
          _([C.oI], I.prototype, "HandleDelete", 1),
          _([C.oI], I.prototype, "OnSetLinkURLChange", 1),
          _([C.oI], I.prototype, "OnSetLinkDescriptionChange", 1),
          _([C.oI], I.prototype, "OnSaveLink", 1),
          _([C.oI], I.prototype, "OnEditLink", 1),
          (I = _([R.PA], I));
      },
      21254: (H, z, l) => {
        "use strict";
        l.d(z, { q: () => s, t: () => c });
        var n = l(7850),
          h = l(90626),
          C = l(87498),
          R = l(72849),
          B = l(16412),
          L = l(79167),
          G = l(96538),
          w = l(36707),
          P = l(18210),
          g = l(30096),
          u = l(50666),
          T = l.n(u),
          d = l(82734),
          _ = Object.defineProperty,
          y = Object.getOwnPropertyDescriptor,
          I = (p, t, e, o) => {
            for (
              var i = o > 1 ? void 0 : o ? y(t, e) : t, r = p.length - 1, m;
              r >= 0;
              r--
            )
              (m = p[r]) && (i = (o ? m(t, e, i) : m(i)) || i);
            return o && i && _(t, e, i), i;
          };
        class s extends h.Component {
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
            const t = this.props.uploadFile.GetCanvasImageSource();
            t &&
              (await f(
                this.props.uploadFile,
                t,
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
          UpdateCrop(t, e) {
            this.setState({ region: e });
          }
          GetDestWidth() {
            const { uploadFile: t, forceResolution: e } = this.props;
            if (e) return e.width;
            const o = t.GetCurrentImageOption();
            if (!o) return 0;
            const i = C.Fj[o.artworkType].width;
            return o ? (0, C.qj)(i) : 0;
          }
          GetDestHeight() {
            const { uploadFile: t, forceResolution: e } = this.props;
            if (e) return e.width;
            const o = t.GetCurrentImageOption();
            if (!o) return 0;
            const i = C.Fj[o.artworkType].height;
            return o ? (0, C.qj)(i) : 0;
          }
          GetLargestBoxThatFits(t, e, o, i) {
            let r = o,
              m = (r * e) / Math.max(t, 1);
            return (
              m > i && ((m = i), (r = (m * t) / Math.max(e, 1))),
              { width: r, height: m }
            );
          }
          GetPreviewWindowStyle() {
            const { region: t } = this.state,
              e = this.GetLargestBoxThatFits(
                this.GetDestWidth(),
                this.GetDestHeight(),
                500,
                150,
              ),
              o = e.width,
              i = e.height,
              r = 1 / Math.max(t.widthPct / 100, 1e-4),
              m = 1 / Math.max(t.heightPct / 100, 1e-4),
              M = (this.props.uploadFile.width * t.xPosPct) / 100,
              S = (this.props.uploadFile.height * t.yPosPct) / 100,
              b = (o * r) / this.props.uploadFile.width,
              a = (i * m) / this.props.uploadFile.height,
              D = -M * b,
              E = -S * a;
            return {
              width: o,
              height: i,
              backgroundPosition: `${D}px ${E}px`,
              backgroundSize: `${100 * r}% ${100 * m}%`,
              backgroundImage: `url(${this.props.uploadFile.dataUrl})`,
            };
          }
          render() {
            const t = (this.GetDestWidth() / this.props.uploadFile.width) * 100,
              e = (this.GetDestHeight() / this.props.uploadFile.height) * 100,
              o = this.GetLargestBoxThatFits(
                this.props.uploadFile.width,
                this.props.uploadFile.height,
                800,
                500,
              );
            return (0, n.jsx)(G.x_, {
              onEscKeypress: this.props.closeModal,
              bDisableBackgroundDismiss: !0,
              children: (0, n.jsxs)("div", {
                className: (0, w.A)("DialogContent", "_DialogCenterVertically"),
                children: [
                  (0, n.jsx)(B.iK, {
                    children: (0, P.we)(
                      "#ImageUpload_CropModalTitleDims",
                      this.GetDestWidth(),
                      this.GetDestHeight(),
                    ),
                  }),
                  (0, n.jsx)("div", {
                    className: (0, w.A)("DialogBodyText"),
                    children: (0, P.we)("#ImageUpload_CropModalDescription"),
                  }),
                  (0, n.jsxs)("div", {
                    className: u.CropImage,
                    style: { width: o.width, height: o.height },
                    children: [
                      (0, n.jsx)("img", {
                        style: {
                          maxWidth: "100%",
                          maxHeight: "100%",
                          objectFit: "contain",
                        },
                        src: this.props.uploadFile.dataUrl,
                      }),
                      (0, n.jsx)(L.I, {
                        bLockAspectRatio: !0,
                        bDisableLink: !0,
                        index: 0,
                        updateFn: this.UpdateCrop,
                        xPosPct: 0,
                        yPosPct: 0,
                        widthMinPct: t,
                        heightMinPct: e,
                        widthPct: t,
                        heightPct: e,
                      }),
                    ],
                  }),
                  (0, n.jsxs)("div", {
                    className: u.CropPreviewGroup,
                    children: [
                      (0, n.jsx)("div", {
                        className: u.CropPreviewLabel,
                        children: (0, P.we)("#ImageUpload_CropPreview"),
                      }),
                      (0, n.jsx)("div", {
                        style: this.GetPreviewWindowStyle(),
                      }),
                    ],
                  }),
                  (0, n.jsx)(B.jn, {
                    onClick: this.OnCrop,
                    children: (0, P.we)("#ImageUpload_CropAndContinue"),
                  }),
                ],
              }),
            });
          }
        }
        I([g.oI], s.prototype, "OnCrop", 1),
          I([g.oI], s.prototype, "UpdateCrop", 1);
        async function f(p, t, e, o, i, r, m, M, S) {
          return new Promise((b, a) => {
            const D = c(S);
            if (!D) {
              a("Invalid format provided");
              return;
            }
            const E = document.createElement("canvas");
            (E.width = m),
              (E.height = M),
              E.getContext("2d")?.drawImage(t, e, o, i, r, 0, 0, m, M),
              E.toBlob((K) => {
                const j = E.toDataURL(D);
                if (S !== R.bg.dU && j.startsWith("data:image/png")) {
                  a("Unable to encode into the requested file format");
                  return;
                }
                if (!K) {
                  a("Unable to apply crop into image");
                  return;
                }
                (p.file = (0, d.pE)(K, p.filename)),
                  (p.width = m),
                  (p.height = M),
                  (p.dataUrl = j),
                  (p.uploadTime = Date.now()),
                  (p.bCropped = !0),
                  b();
              });
          });
        }
        function c(p) {
          switch (p) {
            case R.bg.dU:
              return "image/png";
            case R.bg.iS:
              return "image/jpeg";
          }
        }
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
      50666: (H) => {
        H.exports = {
          CropImage: "_3qfqTaQ35U6AO3FNeijcFV",
          CropPreviewGroup: "_1RI-QM2ZjK9MaVjeCLE_LF",
          CropPreviewLabel: "_3_zyLDUyxZNyexfX3kNOPv",
        };
      },
    },
  ]);
})();
