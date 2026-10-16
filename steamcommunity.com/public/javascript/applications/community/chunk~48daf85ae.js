/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(() => {
  (self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
    [63354],
    {
      25279: (J, te, n) => {
        "use strict";
        n.d(te, {
          Ek: () => Y,
          Fj: () => l,
          Ho: () => W,
          Kf: () => _,
          N_: () => Z,
          XY: () => ye,
          dM: () => d,
          qj: () => c,
          s4: () => X,
          vz: () => q,
          x: () => v,
          yu: () => se,
        });
        var s = n(98112);
        const I = 622,
          R = 1920,
          K = 450,
          D = 800,
          k = 460,
          $ = 2108,
          G = 300,
          j = 800,
          x = 300,
          b = 644,
          u = 337,
          B = 155,
          U = 433,
          P = 199,
          g = ["app_header_capsule", "app_main_capsule"],
          p = [
            "sale_header",
            "sale_logo",
            "capsule",
            "product_banner",
            "product_mobile_banner",
            "localized_title_image",
          ],
          C = ["takeunder_art", "takeunder_mobile_art"],
          S = [
            "takeover_art",
            "takeover_mobile_art",
            "takeover_webm_art",
            "takeover_mp4_art",
            "takeover_webm_mobile_art",
            "takeover_mp4_mobile_art",
          ],
          y = ["marketingmessage_art", "marketingmessage_art_2"],
          L = [
            "marketingmessage_art_eventcapsule",
            "marketingmessage_art_2_eventcapsule",
          ],
          m = ["spotlight_art_hero"],
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
            ...[...g, ...p, ...C, ...S, ...y, ...L, ...m],
          ];
        function c(z) {
          return Array.isArray(z) ? z[0] : z;
        }
        function d(z) {
          const N = Array.isArray(z) ? z : [z];
          return Math.min(...N);
        }
        function _(z, N) {
          return N === void 0 ? c(z) : Array.isArray(z) ? z[N] : z;
        }
        const f = [s.bg.iS, s.bg.dU, s.bg.CK, s.bg.wD],
          M = [s.bg.iS, s.bg.dU, s.bg.CK],
          E = [s.bg.iS, s.bg.dU],
          W = [s.bg.pJ, s.bg.nn],
          v = [s.bg.pi, s.bg.k7],
          O = [s.bg.iS, s.bg.dU, s.bg.CK, s.bg.wD, s.bg.pJ, s.bg.nn],
          l = {
            capsule: { width: D, height: K, rgAcceptableTypes: E },
            marketingmessage_art_2_eventcapsule: {
              width: D,
              height: K,
              rgAcceptableTypes: E,
            },
            marketingmessage_art_eventcapsule: {
              width: D,
              height: K,
              rgAcceptableTypes: E,
            },
            spotlight: { width: $, height: k, rgAcceptableTypes: E },
            localized_store_app_spotlight: {
              width: 1200,
              height: 260,
              rgAcceptableTypes: E,
            },
            localized_store_app_spotlight_mobile: {
              width: 500,
              height: 160,
              rgAcceptableTypes: E,
            },
            localized_title_image: {
              width: R,
              height: I,
              rgAcceptableTypes: E,
            },
            background: { width: R, height: I, rgAcceptableTypes: E },
            hero: {
              width: 0,
              height: 0,
              bDisableEnforceDimensions: !0,
              rgAcceptableTypes: E,
            },
            email_full: { width: j, height: G, rgAcceptableTypes: E },
            email_centered: { width: b, height: x, rgAcceptableTypes: E },
            broadcast_left: {
              width: [P, B],
              height: [U, u],
              rgAcceptableTypes: E,
            },
            broadcast_right: {
              width: [P, B],
              height: [U, u],
              rgAcceptableTypes: E,
            },
            sale_header: {
              width: 0,
              height: 0,
              bDisableEnforceDimensions: !0,
              rgAcceptableTypes: M,
            },
            sale_overlay: {
              width: 0,
              height: 0,
              bDisableEnforceDimensions: !0,
              rgAcceptableTypes: M,
            },
            localized_image_group: {
              width: 0,
              height: 0,
              bDisableEnforceDimensions: !0,
              rgAcceptableTypes: E,
            },
            localized_background_art: {
              width: 0,
              height: 0,
              bDisableEnforceDimensions: !0,
              rgAcceptableTypes: E,
            },
            sale_section_background: {
              width: 0,
              height: 0,
              bDisableEnforceDimensions: !0,
              rgAcceptableTypes: M,
            },
            sale_section_title: {
              width: 0,
              height: 0,
              bDisableEnforceDimensions: !0,
              rgAcceptableTypes: M,
            },
            link_capsule: {
              width: 0,
              height: 0,
              bDisableEnforceDimensions: !0,
              rgAcceptableTypes: E,
            },
            product_banner: {
              width: [1200, 1100],
              height: [175, 160],
              rgAcceptableTypes: E,
            },
            product_mobile_banner: {
              width: 500,
              height: 160,
              rgAcceptableTypes: E,
            },
            product_banner_override: {
              width: [1200, 1100],
              height: [175, 160],
              rgAcceptableTypes: E,
            },
            product_mobile_banner_override: {
              width: 500,
              height: 160,
              rgAcceptableTypes: E,
            },
            schedule_track_art: {
              width: 196,
              height: 92,
              rgAcceptableTypes: E,
            },
            tab_bar_background: {
              width: 1500,
              height: 100,
              rgAcceptableTypes: E,
            },
            sale_logo: {
              width: [1200, 940],
              height: [460, 460],
              rgAcceptableTypes: E,
            },
            bestofyear_banner: {
              width: 1100,
              height: 160,
              rgAcceptableTypes: M,
            },
            bestofyear_banner_mobile: {
              width: 500,
              height: 160,
              rgAcceptableTypes: M,
            },
            localized_marketing_message: {
              width: 570,
              height: 600,
              rgAcceptableTypes: f,
            },
            localized_optin_banner: {
              width: 1e3,
              height: 150,
              rgAcceptableTypes: E,
            },
            localized_marketingmessage_webm: {
              width: 570,
              height: 600,
              rgAcceptableTypes: [s.bg.pJ],
            },
            localized_marketingmessage_mp4: {
              width: 570,
              height: 600,
              rgAcceptableTypes: [s.bg.nn],
            },
            localized_partnerevent_webm: {
              width: 800,
              height: 450,
              rgAcceptableTypes: [s.bg.pJ],
            },
            localized_partnerevent_mp4: {
              width: 800,
              height: 450,
              rgAcceptableTypes: [s.bg.nn],
            },
            localized_subtitles: {
              width: 0,
              height: 0,
              bDisableEnforceDimensions: !0,
              rgAcceptableTypes: [s.bg.k7, s.bg.pi],
            },
            localized_marketingmessage_poster: {
              width: 528,
              height: 297,
              rgAcceptableTypes: [s.bg.iS, s.bg.dU],
            },
            localized_marketingmessage_background: {
              width: 570,
              height: 600,
              rgAcceptableTypes: E,
            },
            localized_email_image: {
              width: 0,
              height: 0,
              bDisableEnforceDimensions: !0,
              rgAcceptableTypes: E,
            },
            template_asset: {
              width: 0,
              height: 0,
              bDisableEnforceDimensions: !0,
              rgAcceptableTypes: O,
            },
            user_poll_background: {
              width: 0,
              height: 0,
              bDisableEnforceDimensions: !0,
              rgAcceptableTypes: E,
            },
            sale_store_capsule_header: {
              width: 920,
              height: 430,
              rgAcceptableTypes: E,
            },
            sale_store_capsule_small: {
              width: 462,
              height: 174,
              rgAcceptableTypes: E,
            },
            sale_store_capsule_main: {
              width: 1232,
              height: 706,
              rgAcceptableTypes: E,
            },
            sale_store_capsule_vertical: {
              width: 748,
              height: 896,
              rgAcceptableTypes: E,
            },
            spotlight_art: { width: 306, height: 260, rgAcceptableTypes: M },
            spotlight_art_hero: {
              width: 748,
              height: 896,
              rgAcceptableTypes: E,
            },
            old_spotlight_art: {
              width: 306,
              height: 350,
              rgAcceptableTypes: M,
            },
            marketingmessage_art: {
              width: 570,
              height: 600,
              rgAcceptableTypes: M,
            },
            marketingmessage_art_2: {
              width: 570,
              height: 600,
              rgAcceptableTypes: M,
            },
            takeover_art: { width: 1850, height: 450, rgAcceptableTypes: M },
            takeover_webm_art: {
              width: 1850,
              height: 450,
              rgAcceptableTypes: [s.bg.pJ],
            },
            takeover_mp4_art: {
              width: 1850,
              height: 450,
              rgAcceptableTypes: [s.bg.nn],
            },
            takeover_mobile_art: {
              width: 500,
              height: 350,
              rgAcceptableTypes: M,
            },
            takeover_webm_mobile_art: {
              width: 500,
              height: 350,
              rgAcceptableTypes: [s.bg.pJ],
            },
            takeover_mp4_mobile_art: {
              width: 500,
              height: 350,
              rgAcceptableTypes: [s.bg.nn],
            },
            takeunder_art: { width: 1200, height: 190, rgAcceptableTypes: M },
            takeunder_mobile_art: {
              width: 500,
              height: 160,
              rgAcceptableTypes: M,
            },
            app_header_capsule: {
              width: 920,
              height: 430,
              rgAcceptableTypes: E,
            },
            app_main_capsule: {
              width: 1232,
              height: 706,
              rgAcceptableTypes: E,
            },
          };
        function Y(z, N, Ce, pe) {
          let fe = null;
          if (Array.isArray(Ce)) {
            if (
              ((fe = Ce.map((ge, me) => (z === ge ? me : void 0)).filter(
                (ge) => ge !== void 0,
              )),
              fe.length <= 0)
            )
              return !1;
          } else if (z !== Ce) return !1;
          if (Array.isArray(pe)) {
            const ge = pe
              .map((me, Oe) => (N === me ? Oe : void 0))
              .filter((me) => me !== void 0);
            if (
              ge.length <= 0 ||
              (fe != null && fe.length && !ge.some((me) => fe.includes(me)))
            )
              return !1;
          } else if (N !== pe) return !1;
          return !0;
        }
        function se(z, N, Ce, pe) {
          const fe = l[Ce];
          return fe
            ? fe.bDisableEnforceDimensions
              ? !!pe
              : Y(z, N, fe.width, fe.height)
            : !1;
        }
        function X(z, N, Ce) {
          const pe = l[Ce];
          if (!pe) return !1;
          if (pe.bDisableEnforceDimensions) return !0;
          if (Array.isArray(pe.width)) {
            if (pe.width.filter((fe) => z < fe).length == pe.width.length)
              return !1;
          } else if (z < pe.width) return !1;
          if (Array.isArray(pe.height)) {
            if (pe.height.filter((fe) => N < fe).length == pe.height.length)
              return !1;
          } else if (N < pe.height) return !1;
          return !0;
        }
        function ye(z) {
          const N = l[z];
          return (
            N.rgAcceptableTypes.includes(s.bg.k7) ||
            N.rgAcceptableTypes.includes(s.bg.pi)
          );
        }
        function q(z, N) {
          return N.filter((Ce) => Z(z, Ce));
        }
        function Z(z, N) {
          return l[N].rgAcceptableTypes.includes(z);
        }
      },
      9472: (J, te, n) => {
        "use strict";
        n.d(te, { o: () => j, q: () => x });
        var s = n(14947),
          I = n(98112),
          R = n(6658),
          K = Object.defineProperty,
          D = Object.getOwnPropertyDescriptor,
          k = (b, u, B) =>
            u in b
              ? K(b, u, {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: B,
                })
              : (b[u] = B),
          $ = (b, u, B, U) => {
            for (
              var P = U > 1 ? void 0 : U ? D(u, B) : u, g = b.length - 1, p;
              g >= 0;
              g--
            )
              (p = b[g]) && (P = (U ? p(u, B, P) : p(P)) || P);
            return U && P && K(u, B, P), P;
          },
          G = (b, u, B) => k(b, typeof u != "symbol" ? u + "" : u, B);
        function j(b) {
          return b == "waiting" || b == "uploading" || b == "processing";
        }
        class x {
          constructor(u, B, U, P, g) {
            G(this, "m_originalSize", { width: 0, height: 0 }),
              G(this, "m_originalDataUrl", ""),
              G(this, "dataUrl"),
              G(this, "width", 0),
              G(this, "height", 0),
              G(this, "status", "pending"),
              G(this, "message", ""),
              G(this, "language"),
              G(this, "file"),
              G(this, "filename"),
              G(this, "uploadTime"),
              G(this, "fileType");
            var p;
            (0, s.Gn)(this),
              (this.file = u),
              (this.filename = B),
              (this.fileType = (p = (0, R.yh)(B)) != null ? p : I.bg.w3),
              (this.language = U),
              (this.uploadTime = Date.now()),
              (this.status = "pending"),
              (this.m_originalSize = g),
              (this.height = g.height),
              (this.width = g.width),
              (this.m_originalDataUrl = P),
              (this.dataUrl = P);
          }
          ResetImage() {
            (this.height = this.m_originalSize.height),
              (this.width = this.m_originalSize.width),
              (this.dataUrl = this.m_originalDataUrl);
          }
          GetImageOptionLabel() {}
        }
        $([s.sH], x.prototype, "dataUrl", 2),
          $([s.sH], x.prototype, "width", 2),
          $([s.sH], x.prototype, "height", 2),
          $([s.sH], x.prototype, "status", 2),
          $([s.sH.ref], x.prototype, "message", 2),
          $([s.sH], x.prototype, "language", 2);
      },
      75909: (J, te, n) => {
        "use strict";
        n.d(te, { M0: () => c, VE: () => _, vN: () => f, zO: () => E });
        var s = n(99412),
          I = n(71742),
          R = n(64868),
          K = n(41735),
          D = n.n(K),
          k = n(14947),
          $ = n(90626),
          G = n(25279),
          j = n(53424),
          x = n(34592),
          b = n(27066),
          u = n(82734),
          B = n(18210),
          U = n(3166),
          P = n(51746),
          g = n(29630),
          p = n(64),
          C = n(38410),
          S = Object.defineProperty,
          y = Object.getOwnPropertyDescriptor,
          L = (W, v, O) =>
            v in W
              ? S(W, v, {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: O,
                })
              : (W[v] = O),
          m = (W, v, O, l) => {
            for (
              var Y = l > 1 ? void 0 : l ? y(v, O) : v, se = W.length - 1, X;
              se >= 0;
              se--
            )
              (X = W[se]) && (Y = (l ? X(v, O, Y) : X(Y)) || Y);
            return l && Y && S(v, O, Y), Y;
          },
          a = (W, v, O) => L(W, typeof v != "symbol" ? v + "" : v, O);
        function i(W, v, O) {
          const l = (0, G.Kf)(v.width, O),
            Y = (0, G.Kf)(v.height, O);
          return {
            sKey: `${W}_${l}x${Y}`,
            width: l,
            height: Y,
            bEnforceDimensions: !v.bDisableEnforceDimensions,
            artworkType: W,
            bHiddenFromDropdown: W === "hero",
            bDeprecated: (O != null ? O : 0) >= 1,
            fnGetLabelText() {
              return this.artworkType == "spotlight"
                ? (0, B.we)("#EventEditor_ArtworkType_store_spotlight")
                : (0, B.we)("#EventEditor_ArtworkType_" + this.artworkType);
            },
          };
        }
        function c(W) {
          return W == null
            ? void 0
            : W.flatMap((v) => {
                const O = G.Fj[v];
                if (
                  ((0, I.wT)(!!O, `Artwork Type not in Map ${v}`),
                  typeof O.width == "number" && typeof O.height == "number")
                )
                  return [i(v, O)];
                {
                  let l = Math.max(
                    Array.isArray(O.width) ? O.width.length : 1,
                    Array.isArray(O.height) ? O.height.length : 1,
                  );
                  return Array.from({ length: l }, (Y, se) => i(v, O, se));
                }
              });
        }
        class d extends C.Vr {
          constructor(v, O, l, Y) {
            super(),
              a(this, "m_filesToUpload", k.sH.array()),
              a(this, "m_filesCompleted", k.sH.array()),
              a(this, "m_clanImagesV2"),
              a(this, "m_clanSteamID"),
              a(this, "m_rgImageOptions"),
              a(this, "m_localizedImageGroupPrimaryImage"),
              a(this, "m_lastError"),
              (0, k.Gn)(this),
              (this.m_clanSteamID = v),
              (this.m_rgImageOptions = c(O)),
              (this.m_localizedImageGroupPrimaryImage = l),
              (this.m_clanImagesV2 = Y != null ? Y : !1);
          }
          GetClanSteamID() {
            return this.m_clanSteamID;
          }
          async AddImage(v, O = s.Bhc) {
            const { language: l } = (0, C.jj)(v.name, O);
            return this.AddImageForLanguage(v, l);
          }
          async AddImageForLanguage(v, O) {
            if (!(0, P.aL)(v.type) && !(U.iA.is_support && (0, P.Uz)(v.type)))
              return !1;
            const l = await (0, P.zB)(v, (0, P.Uz)(v.type));
            if (!l) return !1;
            const Y = new p.M7(
              v,
              v.name,
              O,
              this.m_rgImageOptions,
              l.src,
              (0, P.II)(l),
              l,
              this.m_localizedImageGroupPrimaryImage,
            );
            return (this.m_filesToUpload = [...this.m_filesToUpload, Y]), !0;
          }
          async AddExistingClanImage(v, O = s.Bhc) {
            const l = g.zU.GetHashAndExt(v);
            if (!l) return !1;
            const Y = g.zU.GenerateEditableURLFromHashAndExt(
                this.m_clanSteamID,
                l,
              ),
              se = await D()({ url: Y, method: "GET", responseType: "blob" }),
              X = (0, u.pE)(se.data, v.file_name);
            return await this.AddImage(X, O);
          }
          DeleteUploadImageByIndex(v) {
            this.m_filesToUpload.splice(v, 1),
              (this.m_filesToUpload = [...this.m_filesToUpload]);
          }
          DeleteUploadImage(v) {
            let O = this.m_filesToUpload.findIndex(
              (l) => v.file == l.file && v.uploadTime == l.uploadTime,
            );
            O >= 0 && this.DeleteUploadImageByIndex(O);
          }
          ClearImages() {
            this.m_filesToUpload = k.sH.array();
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
            return this.m_filesToUpload.map((v) => v.file);
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
          BIsFileCompleted(v) {
            return this.m_filesCompleted.indexOf(v) != -1;
          }
          RetryAllFailedUploads() {
            this.CancelAllUploads(), this.UploadAllImages();
          }
          async handleUploadRefresh(v) {
            await j.pU.LoadClanImages(this.m_clanSteamID, !0, v);
          }
          BGetUploadsAreInSerial() {
            return !1;
          }
          async UploadSingleImage(v, O, l, Y) {
            var se;
            const X = v.file,
              ye = v.GetCurrentImageOption(),
              q = v.GetResizeDimension(),
              Z = new FormData();
            Z.append("clanimage", X, O),
              Z.append("sessionid", (0, U.KC)()),
              this.m_clanImagesV2 && Z.append("clan_images_v2", "1"),
              ye != null &&
                ye.artworkType &&
                Z.append("arttype", ye.artworkType),
              q &&
                q.length > 0 &&
                Z.append(
                  "resize",
                  q.map((Oe) => Oe.width + "x" + Oe.height).join(","),
                );
            let z = "/uploadimage/";
            const N = this.m_localizedImageGroupPrimaryImage;
            N &&
              ((z = "/ajaxuploadlocalizedimage/"),
              Z.append("origimagehash", N.image_hash),
              N.thumbnail_hash && Z.append("thumbhash", N.thumbnail_hash),
              Z.append("extension", "" + N.file_type),
              Z.append("language", "" + l));
            const Ce =
              (se = O.split(".").pop()) == null
                ? void 0
                : se.toLocaleLowerCase();
            (Ce == "webm" || Ce == "mp4") &&
              (Z.append("video_width", "" + v.width),
              Z.append("video_height", "" + v.height));
            let pe =
                U.TS.COMMUNITY_BASE_URL +
                "/gid/" +
                this.m_clanSteamID.ConvertTo64BitString() +
                z,
              fe = {
                cancelToken: Y,
                withCredentials: !0,
                headers: { "Content-Type": "multipart/form-data" },
              },
              ge,
              me = !0;
            try {
              (ge = await D().post(pe, Z, fe)), this.m_filesCompleted.push(X);
            } catch (Oe) {
              (me = !1),
                (this.m_lastError = {
                  file: X,
                  status: Oe.response ? Oe.response.status : 500,
                  message: (0, x.H)(Oe).strErrorMsg,
                }),
                (ge = Oe.response);
            }
            return (
              N || (await this.handleUploadRefresh(Y)),
              { bSuccess: me, result: ge.data }
            );
          }
        }
        m([k.sH], d.prototype, "m_filesToUpload", 2),
          m([k.sH], d.prototype, "m_filesCompleted", 2),
          m([k.sH], d.prototype, "m_lastError", 2),
          m([b.o], d.prototype, "AddImage", 1),
          m([b.o], d.prototype, "AddExistingClanImage", 1),
          m([b.o], d.prototype, "DeleteUploadImageByIndex", 1),
          m([b.o], d.prototype, "DeleteUploadImage", 1),
          m([b.o], d.prototype, "ClearImages", 1);
        class _ extends d {
          constructor(v, O, l) {
            super(v, O, l, !1);
          }
        }
        class f extends d {
          constructor(v, O, l) {
            super(v, O, l, !0);
          }
        }
        async function M(W, v, O, l, Y) {
          let se =
              Config.COMMUNITY_BASE_URL +
              "/gid/" +
              v.ConvertTo64BitString() +
              "/resizeimage/",
            X = new FormData();
          return (
            X.append("imagehash", O),
            X.append("extension", l),
            X.append(
              "resize",
              Y.map((q) => q.width + "x" + q.height).join(","),
            ),
            X.append("sessionid", GetSessionID()),
            (await axios.post(se, X, { cancelToken: W })).data.count
          );
        }
        function E(W, v, O) {
          const l = (0, R.wm)(v instanceof Array ? v : [v]),
            Y = W.ConvertTo64BitString();
          return $.useMemo(() => new _(W, l, O), [Y, l]);
        }
      },
      64: (J, te, n) => {
        "use strict";
        n.d(te, { IS: () => p, M7: () => y, T2: () => C });
        var s = n(14947),
          I = n(25279),
          R = n(18210),
          K = n(9472),
          D = n(21254),
          k = n(51746),
          $ = Object.defineProperty,
          G = Object.getOwnPropertyDescriptor,
          j = (a, i, c) =>
            i in a
              ? $(a, i, {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: c,
                })
              : (a[i] = c),
          x = (a, i, c, d) => {
            for (
              var _ = d > 1 ? void 0 : d ? G(i, c) : i, f = a.length - 1, M;
              f >= 0;
              f--
            )
              (M = a[f]) && (_ = (d ? M(i, c, _) : M(_)) || _);
            return d && _ && $(i, c, _), _;
          },
          b = (a, i, c) => j(a, typeof i != "symbol" ? i + "" : i, c);
        const u = 960,
          B = 311,
          U = 480,
          P = 156;
        class g extends K.q {
          constructor(i, c, d, _, f, M) {
            super(i, c, d, f, M),
              b(this, "m_rgImageOptions"),
              b(this, "m_currentImageOption"),
              b(this, "m_currentImageOptionKey"),
              (0, s.Gn)(this),
              (this.m_rgImageOptions = _);
          }
          IsValidAssetType(i, c) {
            var d, _;
            let f = 0,
              M = 0,
              E = !1,
              W =
                !this.m_rgImageOptions ||
                this.m_rgImageOptions.length === 0 ||
                this.m_rgImageOptions.some((Z) => {
                  var z;
                  return (
                    Z.sKey ==
                    ((z = this.GetCurrentImageOption()) == null
                      ? void 0
                      : z.sKey)
                  );
                });
            if (i) (f = i.width), (M = i.height), (E = !0);
            else if (this.GetCurrentImageOption()) {
              const Z = I.Fj[this.GetCurrentImageOption().artworkType];
              Z &&
                ((f = Z.width),
                (M = Z.height),
                (E = !Z.bDisableEnforceDimensions));
            }
            const v = this.width >= (0, I.dM)(f) && this.height >= (0, I.dM)(M),
              O = E ? (0, I.Ek)(this.width, this.height, f, M) : v,
              l = c && c != this.fileType,
              Y =
                this.m_rgImageOptions && this.m_rgImageOptions.length > 0
                  ? (0, I.vz)(
                      this.fileType,
                      ((d = this.m_rgImageOptions) == null
                        ? void 0
                        : d.map((Z) => Z.artworkType)) || [],
                    ).length == 0
                  : !1,
              se = !!(0, D.t)(this.fileType);
            let X = "",
              ye = !1,
              q;
            return (
              W
                ? Y
                  ? (X = (0, R.we)("#ImageUpload_InvalidFileType"))
                  : l
                    ? (X = (0, R.we)(
                        "#ImageUpload_InvalidFormat",
                        (_ = (0, k.EG)(c)) != null ? _ : "",
                      ))
                    : !O && !se
                      ? (X = (0, R.we)(
                          "#ImageUpload_InvalidResolution",
                          (0, I.qj)(f),
                          (0, I.qj)(M),
                        ))
                      : v
                        ? !O && se
                          ? ((X = (0, R.we)(
                              "#ImageUpload_InvalidDimensions",
                              (0, I.qj)(f),
                              (0, I.qj)(M),
                            )),
                            (ye = !0))
                          : ((Array.isArray(f) && this.width != (0, I.qj)(f)) ||
                              (Array.isArray(M) &&
                                this.height != (0, I.qj)(M))) &&
                            ((q = q != null ? q : []),
                            q.push(
                              (0, R.we)(
                                "#ImageUpload_PreferredDimension",
                                (0, I.qj)(f),
                                (0, I.qj)(M),
                              ),
                            ))
                        : (X = (0, R.we)(
                            "#ImageUpload_TooSmall",
                            (0, I.qj)(f),
                            (0, I.qj)(M),
                          ))
                : (X = (0, R.we)("#ImageUpload_InvalidFormatSelected")),
              {
                error: X,
                warnings: q,
                needsCrop: ye,
                match: this.GetCurrentImageOption(),
              }
            );
          }
          BSupportsLanguages() {
            return !0;
          }
          ComputeDefaultImageOption() {
            var i;
            if (!this.m_rgImageOptions || this.m_rgImageOptions.length == 0)
              return;
            const c = (0, I.vz)(
              this.fileType,
              (i = this.m_rgImageOptions) == null
                ? void 0
                : i.map((_) => _.artworkType),
            );
            let d = m(this.width, this.height, c, !1);
            if ((d === void 0 && (d = m(this.width, this.height, c, !0)), d)) {
              const _ = this.m_rgImageOptions.find(
                (f) =>
                  f.artworkType == d &&
                  (!f.bEnforceDimensions ||
                    (f.width == this.width && f.height == this.height)),
              );
              if (_) return _;
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
            var i;
            return (i = this.m_currentImageOption) != null
              ? i
              : this.ComputeDefaultImageOption();
          }
          SetCurrentImageOption(i) {
            (this.m_currentImageOption = i),
              (this.m_currentImageOptionKey = i == null ? void 0 : i.sKey);
          }
        }
        x([s.sH], g.prototype, "m_currentImageOption", 2),
          x([s.sH], g.prototype, "m_currentImageOptionKey", 2);
        class p extends g {
          constructor(i, c, d, _, f, M, E) {
            super(i, c, d, _, f, M), b(this, "video"), (this.video = E);
          }
          BIsOriginalMinimumDimensions(i) {
            return (0, I.s4)(
              this.video.videoWidth,
              this.video.videoHeight,
              i.artworkType,
            );
          }
          FileTypeMatchesImageTypes(i) {
            return (0, I.N_)(this.fileType, i.artworkType);
          }
          BIsVideo() {
            return I.Ho.includes(this.fileType);
          }
          GetResizeDimension() {}
        }
        class C extends g {
          constructor(i, c, d, _) {
            super(i, c, d, _, URL.createObjectURL(i), { width: 0, height: 0 });
          }
          BIsOriginalMinimumDimensions(i) {
            return (0, I.XY)(i.artworkType);
          }
          FileTypeMatchesImageTypes(i) {
            return (0, I.N_)(this.fileType, i.artworkType);
          }
          BIsVideo() {
            return I.Ho.includes(this.fileType);
          }
          GetResizeDimension() {}
        }
        function S(a) {
          var i;
          const c =
            (i = a.split(".").pop()) == null ? void 0 : i.toLocaleLowerCase();
          return c == "webm" || c == "mp4";
        }
        class y extends g {
          constructor(i, c, d, _, f, M, E, W) {
            super(i, c, d, _, f, M),
              b(this, "bCropped", !1),
              b(this, "localizedImageGroupPrimaryImage"),
              b(this, "media"),
              (0, s.Gn)(this),
              (this.media = E),
              (this.localizedImageGroupPrimaryImage = W);
          }
          IsValidAssetType(i, c) {
            var d;
            return (
              (c =
                c != null
                  ? c
                  : (d = this.localizedImageGroupPrimaryImage) == null
                    ? void 0
                    : d.file_type),
              super.IsValidAssetType(i, c)
            );
          }
          GetCanvasImageSource() {
            return this.media;
          }
          BIsOriginalMinimumDimensions(i) {
            var c, d, _, f;
            return (0, I.s4)(
              (d = (c = this.media) == null ? void 0 : c.width) != null ? d : 0,
              (f = (_ = this.media) == null ? void 0 : _.height) != null
                ? f
                : 0,
              i.artworkType,
            );
          }
          FileTypeMatchesImageTypes(i) {
            return (0, I.N_)(this.fileType, i.artworkType);
          }
          BIsVideo() {
            return I.Ho.includes(this.fileType);
          }
          GetResizeDimension() {
            var i;
            return L(
              (i = this.GetCurrentImageOption()) == null
                ? void 0
                : i.artworkType,
            );
          }
        }
        x([s.sH], y.prototype, "bCropped", 2);
        function L(a) {
          if (a === "background")
            return [
              { width: u, height: B },
              { width: U, height: P },
            ];
          if (a === "capsule")
            return [
              {
                width: (0, I.qj)(I.Fj[a].width) / 2,
                height: (0, I.qj)(I.Fj[a].height) / 2,
              },
            ];
          if (a === "spotlight")
            return [
              {
                width: (0, I.qj)(I.Fj[a].width) / 2,
                height: (0, I.qj)(I.Fj[a].height) / 2,
              },
            ];
        }
        function m(a, i, c, d = !1) {
          if (c) {
            for (let _ of c)
              if (d ? (0, I.s4)(a, i, _) : (0, I.yu)(a, i, _)) return _;
          }
        }
      },
      38410: (J, te, n) => {
        "use strict";
        n.d(te, { PD: () => U, Vr: () => B, jj: () => P });
        var s = n(32093),
          I = n(99412),
          R = n(18210),
          K = n(41735),
          D = n.n(K),
          k = Object.defineProperty,
          $ = (g, p, C) =>
            p in g
              ? k(g, p, {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: C,
                })
              : (g[p] = C),
          G = (g, p, C) => $(g, typeof p != "symbol" ? p + "" : p, C);
        class j {}
        function x(g, p, C) {
          const S = g.filter((y) => {
            const L = y.IsValidAssetType(p, C);
            return y.status === "pending" && !L.error && !L.needsCrop;
          });
          return (
            S.forEach((y) => {
              (y.status = "waiting"), (y.message = "");
            }),
            S
          );
        }
        async function b(g, p, C, S, y) {
          var L;
          const m = x(g, C, S),
            a = [];
          for (const i of m) {
            i.status = "uploading";
            const c = await p(
              i,
              i.filename,
              (L = i.language) != null ? L : I.xPp,
              y,
            );
            (i.status = c.bSuccess ? "success" : "failed"),
              (i.message =
                !c.bSuccess && c.elErrorMessage ? c.elErrorMessage : ""),
              a.push({
                bSuccess: c.bSuccess,
                image: i,
                uploadResult: c.result,
              });
          }
          return a;
        }
        async function u(g, p, C, S, y, L) {
          const m = x(g, S, y),
            a = [];
          let i = 0;
          const c = async () => {
              for (var _; i < m.length; ) {
                const f = i++,
                  M = m[f];
                M.status = "uploading";
                const E = await C(
                  M,
                  M.filename,
                  (_ = M.language) != null ? _ : I.xPp,
                  L,
                );
                (M.status = E.bSuccess ? "success" : "failed"),
                  (M.message =
                    !E.bSuccess && E.elErrorMessage ? E.elErrorMessage : ""),
                  (a[f] = { image: M, uploadResult: E });
              }
            },
            d = Array.from({ length: Math.floor(p) }, () => c());
          return (
            await Promise.all(d),
            a.map((_) => ({
              bSuccess: _.uploadResult.bSuccess,
              image: _.image,
              uploadResult: _.uploadResult.result,
            }))
          );
        }
        class B extends j {
          constructor() {
            super(...arguments), G(this, "m_cancel");
          }
          async UploadAllImages(p, C) {
            this.m_cancel = D().CancelToken.source();
            const S = this.BGetUploadsAreInSerial() ? 1 : 4;
            let y;
            const L = this.UploadSingleImage.bind(this);
            return (
              S > 1
                ? (y = await u(
                    this.GetUploadImages(),
                    S,
                    L,
                    p,
                    C,
                    this.m_cancel.token,
                  ))
                : (y = await b(
                    this.GetUploadImages(),
                    L,
                    p,
                    C,
                    this.m_cancel.token,
                  )),
              y
            );
          }
          CancelAllUploads() {
            var p;
            (p = this.m_cancel) == null ||
              p.cancel((0, R.we)("#ImageUpload_CancelRequest"));
          }
        }
        function U(g, p, C) {
          if (((g == null || g == null) && (g = p), !C || C.length === 0))
            return g;
          for (const S of C) if (R.A0.IsELanguageValidInRealm(g, S)) return g;
          for (const S of C) if (R.A0.IsELanguageValidInRealm(p, S)) return p;
          return C.includes(s.TU.k_ESteamRealmGlobal) ? I.Bhc : I.ZLm;
        }
        function P(g, p = I.Bhc) {
          let C = g.lastIndexOf(".");
          C != -1 && (g = g.slice(0, C).toLowerCase());
          let S = null,
            y = 0;
          g.endsWith("korean") && ((S = I.Pn1), (y = 6));
          for (let m = I.Bhc; m < I.bP9; ++m) {
            const a = (0, I.wwZ)(m);
            if (a.length <= y) continue;
            if (g.endsWith(a) && g.length > a.length + 2) {
              const c = g[g.length - a.length - 1];
              /\p{Alphabetic}|\p{Number}/u.test(c) || ((S = m), (y = a.length));
            }
            const i = (0, I.LgB)(m);
            i.length <= y || (g.endsWith(i) && ((S = m), (y = i.length)));
          }
          const L = (m) => m.replace(/[\s_-]+$/g, "");
          return {
            language: S != null ? S : p,
            baseFilename: y > 0 ? L(g.substring(0, g.length - y)) : g,
          };
        }
      },
      53424: (J, te, n) => {
        "use strict";
        n.d(te, { mr: () => L, n9: () => y, pU: () => S });
        var s = n(72604),
          I = n(41735),
          R = n.n(I),
          K = n(14947),
          D = n(90626),
          k = n(76559),
          $ = n(47689),
          G = n(71742),
          j = n(8323),
          x = n(54963),
          b = n(3166),
          u = Object.defineProperty,
          B = Object.getOwnPropertyDescriptor,
          U = (m, a, i) =>
            a in m
              ? u(m, a, {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: i,
                })
              : (m[a] = i),
          P = (m, a, i, c) => {
            for (
              var d = c > 1 ? void 0 : c ? B(a, i) : a, _ = m.length - 1, f;
              _ >= 0;
              _--
            )
              (f = m[_]) && (d = (c ? f(a, i, d) : f(d)) || d);
            return c && d && u(a, i, d), d;
          },
          g = (m, a, i) => U(m, typeof a != "symbol" ? a + "" : a, i);
        class p {
          constructor() {
            g(this, "success"), g(this, "images");
          }
        }
        class C {
          constructor() {
            g(this, "m_mapClanToImages", new Map()),
              g(this, "m_mapClanImageLoadPromises", new Map()),
              g(this, "m_imageListChangeCallback", new Map()),
              g(this, "m_mapClanImageLoadState", new Map()),
              g(this, "m_mapImageIDToResolution", new Map()),
              g(this, "m_vecClanImageDragListener", new Array()),
              (0, K.Gn)(this);
          }
          BHasImageResolution(a) {
            return this.m_mapImageIDToResolution.has(a.imageid);
          }
          GetImageResolution(a) {
            return this.m_mapImageIDToResolution.get(a.imageid);
          }
          SetImageResolution(a, i) {
            this.m_mapImageIDToResolution.set(a.imageid, i);
          }
          GetImageListCallbackForClanAccountIDInternal(a) {
            return (
              this.m_imageListChangeCallback.has(a) ||
                this.m_imageListChangeCallback.set(a, new j.lu()),
              this.m_imageListChangeCallback.get(a)
            );
          }
          GetImageListCallbackForClanAccountID(a) {
            return this.GetImageListCallbackForClanAccountIDInternal(a);
          }
          AddClanImageDragListener(a) {
            this.m_vecClanImageDragListener.indexOf(a) == -1 &&
              this.m_vecClanImageDragListener.push(a);
          }
          RemoveClanImageDragListener(a) {
            let i = this.m_vecClanImageDragListener.indexOf(a);
            i != -1 && this.m_vecClanImageDragListener.splice(i, 1);
          }
          GetClanImageDragListener() {
            return this.m_vecClanImageDragListener;
          }
          BHasLoadedClanImages(a) {
            return this.m_mapClanToImages.has(a.GetAccountID());
          }
          async LoadClanImages(a, i, c) {
            const d = a.GetAccountID();
            if (i || !this.m_mapClanImageLoadPromises.has(d)) {
              const _ = this.InternalLoadClanImages(a, i, c);
              this.m_mapClanImageLoadPromises.set(d, _);
            }
            return this.m_mapClanImageLoadPromises.get(d);
          }
          async InternalLoadClanImages(a, i, c) {
            let d = a.GetAccountID();
            if (
              ((0, G.wT)(a && d != 0, "ClanSteamID missing:" + a),
              a && (!this.m_mapClanToImages.has(d) || i))
            ) {
              let _ = {},
                f;
              const M =
                b.TS.COMMUNITY_BASE_URL +
                "/gid/" +
                a.ConvertTo64BitString() +
                "/getimages/";
              if (
                ((f = await R().get(M, {
                  params: _,
                  withCredentials: !0,
                  cancelToken: c,
                })),
                f)
              ) {
                for (let E of f.data.images) E.clanAccountID = d;
                (0, K.h5)(() => {
                  this.m_mapClanImageLoadState.set(d, { loaded: !0 }),
                    this.m_mapClanToImages.set(d, f.data.images),
                    this.GetImageListCallbackForClanAccountIDInternal(
                      d,
                    ).Dispatch(f.data.images);
                });
              }
            }
            return this.m_mapClanToImages.get(d);
          }
          GetLoadState(a) {
            return this.m_mapClanImageLoadState.get(a.GetAccountID());
          }
          GetClanImages(a) {
            return this.GetClanImagesByAccount(a.GetAccountID());
          }
          GetClanImagesByAccount(a) {
            let i = this.m_mapClanToImages.get(a);
            return i || new Array();
          }
          GetFilteredClanImages(a, i) {
            let c = S.GetClanImages(a);
            return this.GetFilteredClanImagesList(c, i);
          }
          GetFilteredClanImagesList(a, i) {
            if (i && i.trim().length > 0) {
              i = i.trim().toLowerCase();
              let c = new Array();
              for (let d of a)
                d.file_name &&
                  d.file_name.toLowerCase().indexOf(i) >= 0 &&
                  c.push(d);
              return c;
            }
            return a;
          }
          GetClanImageByID(a, i) {
            let c = a.GetAccountID(),
              d = this.m_mapClanToImages.get(c);
            return d ? d.find((_) => _.imageid == i) : void 0;
          }
          GetClanImageByURL(a, i) {
            let c = a.GetAccountID(),
              d = this.m_mapClanToImages.get(c);
            return d ? d.find((_) => _.thumb_url == i || _.url == i) : void 0;
          }
          GetClanImageByFile(a, i) {
            let c = a.GetAccountID(),
              d = this.m_mapClanToImages.get(c);
            return d ? d.find((_) => _.file_name == i.name) : void 0;
          }
          GetClanImageByImageHash(a, i) {
            let c = a.GetAccountID(),
              d = this.m_mapClanToImages.get(c);
            return d ? d.find((_) => _.image_hash == i) : void 0;
          }
          async DeleteClanImageByID(a, i) {
            let c = { sessionid: (0, b.KC)(), imageid: i },
              d = a.GetAccountID(),
              _ = await R().get(
                b.TS.COMMUNITY_BASE_URL +
                  "/gid/" +
                  a.ConvertTo64BitString() +
                  "/deleteimage/",
                { params: c },
              );
            if (!_ || _.status != 200 || _.data.success != s.R) return _.data;
            let f = this.m_mapClanToImages.get(d);
            if (f) {
              let M = f.findIndex((E, W, v) => E.imageid == i);
              M >= 0 &&
                (f.splice(M, 1),
                this.GetImageListCallbackForClanAccountIDInternal(d).Dispatch([
                  ...f,
                ]));
            }
            return _.data;
          }
          async DeleteClanImage(a, i) {
            return this.DeleteClanImageByID(a, i.imageid);
          }
        }
        P([K.sH], C.prototype, "m_mapClanToImages", 2),
          P([K.sH], C.prototype, "m_mapClanImageLoadState", 2);
        const S = new C();
        function y(m) {
          const [a, i] = (0, D.useState)(S.GetClanImagesByAccount(m));
          return (0, x.hL)(S.GetImageListCallbackForClanAccountID(m), i), a;
        }
        function L(m) {
          const a = k.b.InitFromClanID(m),
            i = (0, $.m)("useLoadClanImages"),
            [c, d] = (0, D.useState)(() => S.BHasLoadedClanImages(a));
          return (
            (0, D.useEffect)(() => {
              const _ = k.b.InitFromClanID(m);
              return (
                S.BHasLoadedClanImages(_) ||
                  S.LoadClanImages(_, !1, i.token).then(() => d(!0)),
                () => i.cancel()
              );
            }, [m, i]),
            c
          );
        }
      },
      6658: (J, te, n) => {
        "use strict";
        n.d(te, { yh: () => G });
        var s = n(90626),
          I = n(98112);
        function R(j, x, b = !0) {
          const u = new URLSearchParams({
            ima: "fit",
            impolicy: "Letterbox",
            imcolor: "#000000",
          });
          return (
            j && u.set("imw", Math.round(j).toString()),
            x && u.set("imh", Math.round(x).toString()),
            !j || !x || !b
              ? u.set("letterbox", "false")
              : u.set("letterbox", "true"),
            "?" + u.toString()
          );
        }
        const K = null;
        function D(j, x) {
          let b;
          for (let u of K)
            if (
              (b ? (b += ", ") : (b = ""),
              (b += `${j}${R(u, 0)} ${u}w`),
              u >= x)
            )
              break;
          return b;
        }
        function k(j) {
          let {
            src: x,
            orig_width: b,
            orig_height: u,
            sizes: B,
            default_width: U,
            ...P
          } = j;
          B || (B = "95vw"), U || (U = 1024);
          let g = `${x}${R(U, void 0)}`,
            p = D(x, b);
          return React.createElement("img", {
            src: g,
            srcSet: p,
            sizes: B,
            ...P,
          });
        }
        function $(j) {
          const {
            width: x,
            height: b,
            orig_width: u,
            orig_height: B,
            src: U,
            ...P
          } = j;
          let g = U + R(x, b),
            p,
            C = 6;
          if (
            (x && u && (C = Math.min(C, Math.ceil(u / x))),
            b && B && (C = Math.min(C, Math.ceil(B / b))),
            C)
          )
            for (let S of [2, 4, 6]) {
              if (S > C) break;
              p ? (p += ", ") : (p = ""),
                (p += `${U}${R(x && x * S, b && b * S)} ${S}x`);
            }
          return React.createElement("img", { ...P, src: g, srcSet: p });
        }
        function G(j) {
          if (
            (j.indexOf("?") > 0 && (j = j.split("?")[0]),
            j.endsWith(".jpg") || j.endsWith(".jpeg"))
          )
            return I.bg.iS;
          if (j.endsWith(".png")) return I.bg.dU;
          if (j.endsWith(".gif")) return I.bg.CK;
          if (j.endsWith(".mp4")) return I.bg.nn;
          if (j.endsWith(".webm")) return I.bg.pJ;
          if (j.endsWith(".vtt")) return I.bg.k7;
          if (j.endsWith(".srt")) return I.bg.pi;
          if (j.endsWith(".webp")) return I.bg.wD;
        }
      },
      50109: (J, te, n) => {
        "use strict";
        n.d(te, { E: () => P, O: () => U });
        var s = n(14947),
          I = n(65946),
          R = n(99412),
          K = n(41635),
          D = n(27066),
          k = n(3166),
          $ = n(38585),
          G = Object.defineProperty,
          j = Object.getOwnPropertyDescriptor,
          x = (g, p, C) =>
            p in g
              ? G(g, p, {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: C,
                })
              : (g[p] = C),
          b = (g, p, C, S) => {
            for (
              var y = S > 1 ? void 0 : S ? j(p, C) : p, L = g.length - 1, m;
              L >= 0;
              L--
            )
              (m = g[L]) && (y = (S ? m(p, C, y) : m(y)) || y);
            return S && y && G(p, C, y), y;
          },
          u = (g, p, C) => x(g, typeof p != "symbol" ? p + "" : p, C);
        const B = class tt {
          constructor() {
            u(this, "m_eCurLang", (0, R.sfN)(k.TS.LANGUAGE)),
              u(this, "m_rgHasData", (0, K.$Y)([], R.bP9, !1)),
              u(this, "m_bHasLocalizationContext", !1),
              u(this, "m_callback", new $.l()),
              (0, s.Gn)(this);
          }
          GetCallback() {
            return this.m_callback;
          }
          GetCurEditLanguage() {
            return this.m_eCurLang;
          }
          SetCurEditLanguage(p) {
            return this.m_eCurLang != p
              ? ((this.m_eCurLang = p), this.GetCallback().Dispatch(p), !0)
              : !1;
          }
          SetHasLanguage(p) {
            p.forEach((C, S) => {
              this.m_rgHasData[S] != C && (this.m_rgHasData[S] = C);
            });
          }
          BHasLanguageData(p) {
            return this.m_rgHasData[p];
          }
          GetHasLocalizationContext() {
            return this.m_bHasLocalizationContext;
          }
          SetHasLocalizationContext(p) {
            p != this.m_bHasLocalizationContext &&
              (this.m_bHasLocalizationContext = p);
          }
          static Get() {
            return (
              tt.s_globalSingletonStore ||
                (tt.s_globalSingletonStore = new tt()),
              tt.s_globalSingletonStore
            );
          }
        };
        u(B, "s_globalSingletonStore"),
          b([s.sH], B.prototype, "m_eCurLang", 2),
          b([s.sH], B.prototype, "m_rgHasData", 2),
          b([s.sH], B.prototype, "m_bHasLocalizationContext", 2),
          b([D.o], B.prototype, "GetCurEditLanguage", 1),
          b([D.o], B.prototype, "SetCurEditLanguage", 1),
          b([s.XI.bound], B.prototype, "SetHasLanguage", 1),
          b([D.o], B.prototype, "BHasLanguageData", 1);
        let U = B;
        function P() {
          return (0, I.q3)(() => U.Get().GetCurEditLanguage());
        }
      },
      45638: (J, te, n) => {
        "use strict";
        n.d(te, { I: () => Ke });
        var s = n(7850),
          I = n(41735),
          R = n.n(I),
          K = n(75844),
          D = n(90626),
          k = n(25518),
          $ = n(16346),
          G = n(43458),
          j = n(76559),
          x = n(29630),
          b = n(53424),
          u = n(54963),
          B = n(41301),
          U = n(96197),
          P = n(38655),
          g = n(14947),
          p = n(77700),
          C = n.n(p),
          S = n(36707),
          y = Object.defineProperty,
          L = Object.getOwnPropertyDescriptor,
          m = (r, e, t) =>
            e in r
              ? y(r, e, {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: t,
                })
              : (r[e] = t),
          a = (r, e, t, o) => {
            for (
              var h = o > 1 ? void 0 : o ? L(e, t) : e, T = r.length - 1, A;
              T >= 0;
              T--
            )
              (A = r[T]) && (h = (o ? A(e, t, h) : A(h)) || h);
            return o && h && y(e, t, h), h;
          },
          i = (r, e, t) => m(r, typeof e != "symbol" ? e + "" : e, t);
        class c extends D.Component {
          constructor(e) {
            super(e),
              i(this, "m_strLastSearch"),
              i(this, "m_rgCurrentMatches", []),
              i(this, "m_mapMatchByKey", new Map()),
              i(this, "containerRef", D.createRef()),
              i(this, "m_hMobxSearchDisposer"),
              (this.m_hMobxSearchDisposer = (0, g.fm)(async () => {
                await this.UpdateSearchResults(this.props.strSearch),
                  this.forceUpdate();
              })),
              (this.state = { selectedIndex: void 0 });
          }
          OnKeyDown(e) {
            if (this.BHandleKeyPress(e.keyCode)) {
              e.preventDefault();
              return;
            }
          }
          BHandleKeyPress(e) {
            switch (e) {
              case B.Oy:
                this.SetSelectedIndexDelta(-1);
                break;
              case B.BH:
                this.SetSelectedIndexDelta(1);
                break;
              case B.po:
                this.SetSelectedIndex(0);
                break;
              case B.o7:
                this.SetSelectedIndexDelta(-this.GetPageSize());
                break;
              case B.xF:
                this.SetSelectedIndex(-1);
                break;
              case B.v3:
                this.SetSelectedIndexDelta(this.GetPageSize());
                break;
              case B.wd:
              case B.$R:
                if (this.state.selectedIndex !== void 0)
                  this.ChooseSuggestion(
                    this.m_rgCurrentMatches[this.state.selectedIndex],
                  );
                else
                  return (
                    this.props.onSuggestionSelected(this.props.strSearch), !1
                  );
                break;
              case B.zV:
                this.props.onSuggestionSelected(this.props.strSearch);
                break;
              default:
                return !1;
            }
            return !0;
          }
          GetPageSize() {
            let e = this.containerRef.current,
              t = e && e.firstElementChild,
              o = this.m_rgCurrentMatches.length;
            if (
              (o > this.getMaxMatches() && (o = this.getMaxMatches()), t && o)
            ) {
              let h = t.scrollHeight / o,
                T = t.clientHeight / h;
              return Math.max(1, Math.floor(T));
            }
            return 5;
          }
          ChooseSuggestion(e) {
            this.props.onSuggestionSelected(
              this.props.strSearch,
              e ? this.getSelection(e) : void 0,
            );
          }
          SetSelectedIndexDelta(e) {
            this.state.selectedIndex !== void 0
              ? this.SetSelectedIndex(this.state.selectedIndex + e)
              : this.SetSelectedIndex(e === 1 ? 0 : e);
          }
          SetSelectedIndex(e) {
            if (!this.m_rgCurrentMatches.length) return;
            let t = this.m_rgCurrentMatches.length;
            t > this.getMaxMatches() && (t = this.getMaxMatches()),
              (e = e % t),
              e < 0 && (e += t),
              this.setState({ selectedIndex: e });
          }
          FindKeyIndex(e) {
            if (!this.m_mapMatchByKey.size && this.m_rgCurrentMatches.length)
              for (let t = 0; t < this.m_rgCurrentMatches.length; t++)
                this.m_mapMatchByKey.set(
                  this.getKey(this.m_rgCurrentMatches[t]),
                  t,
                );
            return this.m_mapMatchByKey.get(e);
          }
          OnClickSuggestion(e) {
            let t = this.FindKeyIndex(e);
            t !== void 0 && this.ChooseSuggestion(this.m_rgCurrentMatches[t]);
          }
          OnMouseOverSuggestion(e) {
            let t = this.FindKeyIndex(e);
            t !== void 0 && this.SetSelectedIndex(t);
          }
          BindSelectedElement(e) {
            if (!e) return;
            let t = this.containerRef.current,
              o = e.containerRef.current,
              h = t && t.firstElementChild;
            !o ||
              !h ||
              ((h.scrollTop + h.clientHeight < o.offsetTop ||
                o.offsetTop < h.scrollTop) &&
                o.scrollIntoView());
          }
          async UpdateSearchResults(e) {
            (this.m_rgCurrentMatches = await this.performSearch(e)),
              (this.m_strLastSearch = e),
              this.m_mapMatchByKey.clear(),
              this.m_rgCurrentMatches.length
                ? !this.state || this.state.selectedIndex === void 0
                  ? (this.props.nMinimumSearchLengthBeforeAutoSelection ===
                      void 0 ||
                      e.length >=
                        this.props.nMinimumSearchLengthBeforeAutoSelection) &&
                    this.setState({ selectedIndex: 0 })
                  : this.state.selectedIndex >=
                      this.m_rgCurrentMatches.length &&
                    this.setState({ selectedIndex: 0 })
                : this.state &&
                  this.state.selectedIndex !== void 0 &&
                  this.setState({ selectedIndex: void 0 });
          }
          componentWillUnmount() {
            this.m_hMobxSearchDisposer &&
              (this.m_hMobxSearchDisposer(),
              (this.m_hMobxSearchDisposer = void 0));
          }
          async componentDidUpdate(e) {
            this.m_strLastSearch != this.props.strSearch &&
              (await this.UpdateSearchResults(this.props.strSearch),
              this.forceUpdate());
          }
          render() {
            let e = [];
            if (this.m_rgCurrentMatches.length) {
              let t = this.getMaxMatches();
              for (
                let o = 0;
                o < Math.min(t, this.m_rgCurrentMatches.length);
                o++
              ) {
                let h = this.m_rgCurrentMatches[o],
                  T = this.getKey(h),
                  A = o === this.state.selectedIndex;
                e.push(
                  (0, s.jsx)(
                    d,
                    {
                      matchKey: T,
                      fnOnClick: this.OnClickSuggestion,
                      fnOnMouseOver: this.OnMouseOverSuggestion,
                      bIsSelected: A,
                      ref: A ? this.BindSelectedElement : void 0,
                      children: this.renderMatch(h),
                    },
                    T,
                  ),
                );
              }
              this.m_rgCurrentMatches.length > t &&
                e.push(
                  this.renderTooManyMatchesMessage(
                    this.m_rgCurrentMatches.length - t,
                  ),
                );
            } else {
              let t = this.renderNoMatchMessage();
              if (!t) return null;
              e.push(t);
            }
            return (0, s.jsx)("div", {
              className: C().mentionDialogPosition,
              ref: this.containerRef,
              children: (0, s.jsxs)("div", {
                className: C().mentionDialog,
                tabIndex: 0,
                onKeyDown: this.OnKeyDown,
                children: [this.renderHeader(), e],
              }),
            });
          }
        }
        a([u.oI], c.prototype, "OnKeyDown", 1),
          a([u.oI], c.prototype, "OnClickSuggestion", 1),
          a([u.oI], c.prototype, "OnMouseOverSuggestion", 1),
          a([u.oI], c.prototype, "BindSelectedElement", 1);
        class d extends D.PureComponent {
          constructor() {
            super(...arguments), i(this, "containerRef", D.createRef());
          }
          OnMouseOver(e) {
            this.props.fnOnMouseOver(this.props.matchKey);
          }
          OnClick(e) {
            this.props.fnOnClick(this.props.matchKey);
          }
          render() {
            return (0, s.jsx)("div", {
              className: (0, S.A)(
                C().suggestOption,
                C().mentionSearchOption,
                this.props.bIsSelected ? C().selected : "",
              ),
              onMouseEnter: this.OnMouseOver,
              onClick: this.OnClick,
              ref: this.containerRef,
              children: this.props.children,
            });
          }
        }
        a([u.oI], d.prototype, "OnMouseOver", 1),
          a([u.oI], d.prototype, "OnClick", 1);
        const _ = c;
        var f = n(79786),
          M = n.n(f);
        class E extends _ {
          performSearch(e) {
            return this.props.emoticonStore.SearchEmoticons(e, 10, !1);
          }
          getSelection(e) {
            return e.name;
          }
          getKey(e) {
            return e.name;
          }
          renderMatch(e) {
            return (0, s.jsxs)("div", {
              className: (0, S.A)(
                M().EmoticonSuggestion,
                e.recent ? "Recent" : "",
              ),
              children: [
                (0, s.jsxs)("div", {
                  className: M().Emoticon,
                  children: [
                    (0, s.jsx)(U.n, { emoticon: e.name }),
                    e.new && (0, s.jsx)(P.iD, {}),
                  ],
                }),
                ":",
                e.name,
                ":",
              ],
            });
          }
          renderNoMatchMessage() {
            return null;
          }
          renderTooManyMatchesMessage(e) {
            return null;
          }
          renderHeader() {
            return null;
          }
          getMaxMatches() {
            return Number.MAX_VALUE;
          }
        }
        const W = E;
        var v = n(34510),
          O = n.n(v),
          l = n(18210);
        class Y extends _ {
          performSearch(e) {
            let t = Array();
            return (
              this.props.supportBBCodes.forEach((o) => {
                o.indexOf(e) >= 0 && t.push({ name: o });
              }),
              t
            );
          }
          getSelection(e) {
            return "[" + e.name + "][/" + e.name + "]";
          }
          getKey(e) {
            return e.name;
          }
          renderMatch(e) {
            return (0, s.jsxs)(
              "div",
              {
                className: (0, S.A)(O().BBCodeSuggestion),
                children: [
                  (0, s.jsx)("div", {
                    className: O().BBCode,
                    children: e.name,
                  }),
                  "[",
                  e.name,
                  "]...[/",
                  e.name,
                  "]",
                ],
              },
              e.name,
            );
          }
          renderNoMatchMessage() {
            return (0, s.jsx)(
              "div",
              {
                className: (0, S.A)(C().mentionSearchOption, C().noMatches),
                children: (0, l.we)("#Bbcode_No_Match"),
              },
              "nomatches",
            );
          }
          renderTooManyMatchesMessage(e) {
            return null;
          }
          renderHeader() {
            return null;
          }
          getMaxMatches() {
            return Number.MAX_VALUE;
          }
        }
        var se = Object.defineProperty,
          X = Object.getOwnPropertyDescriptor,
          ye = (r, e, t) =>
            e in r
              ? se(r, e, {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: t,
                })
              : (r[e] = t),
          q = (r, e, t, o) => {
            for (
              var h = o > 1 ? void 0 : o ? X(e, t) : e, T = r.length - 1, A;
              T >= 0;
              T--
            )
              (A = r[T]) && (h = (o ? A(e, t, h) : A(h)) || h);
            return o && h && se(e, t, h), h;
          },
          Z = (r, e, t) => ye(r, typeof e != "symbol" ? e + "" : e, t);
        class z extends D.Component {
          constructor(e) {
            super(e),
              Z(this, "descTextAreaRef", D.createRef()),
              Z(this, "m_MentionDialog"),
              Z(this, "m_bDisabled", !0),
              Z(this, "m_iMentionSearchStartOffset"),
              Z(this, "m_iMentionSearchCancelledOffset"),
              (this.state = {
                mentionSearch: void 0,
                activeSuggestSearchType: void 0,
              });
          }
          BindMentionDialog(e) {
            this.m_MentionDialog = e != null ? e : void 0;
          }
          OnKeyDown(e) {
            if (
              this.state.activeSuggestSearchType &&
              this.m_MentionDialog &&
              !e.shiftKey &&
              !e.ctrlKey &&
              this.m_MentionDialog.BHandleKeyPress(e.keyCode)
            ) {
              e.preventDefault();
              return;
            }
            (e.keyCode == B.Dh || e.keyCode == B.jt) &&
              (this.m_iMentionSearchCancelledOffset = void 0);
          }
          FindMatchOpener(e, t, o) {
            for (let h = o - 1; h >= 0; h--) {
              if (t[h] == e) return h;
              if (
                t[h] == " " ||
                t[h] ==
                  `
`
              )
                break;
            }
          }
          ReplaceSuggestedText(e, t) {
            const o = this.descTextAreaRef.current;
            if (!o) return;
            let h = o.selectionStart,
              T = o.value,
              A = this.FindMatchOpener(e, T, h);
            if (
              (A === void 0 &&
                e == "@" &&
                (A = this.FindMatchOpener("\uFF20", T, h)),
              A !== void 0)
            ) {
              let F = T.substr(0, A);
              (F += t), (h >= T.length || T[h] != " ") && (F += " ");
              let ae = F.length;
              (F += T.substr(h)),
                (o.value = F),
                (o.selectionStart = o.selectionEnd = ae),
                this.props.fnSetText(F),
                this.FocusTextInput();
            }
          }
          OnFocus(e) {
            this.UpdateAutoSearchState();
          }
          OnKeyPress(e) {
            this.UpdateAutoSearchState();
          }
          OnClick(e) {
            this.UpdateAutoSearchState();
          }
          ClearMentionSearchState() {
            (this.m_iMentionSearchStartOffset = void 0),
              this.state.activeSuggestSearchType &&
                this.setState({
                  activeSuggestSearchType: void 0,
                  mentionSearch: void 0,
                });
          }
          OnEmoticonSuggestionSelected(e, t) {
            if (!t) {
              (this.m_iMentionSearchCancelledOffset =
                this.m_iMentionSearchStartOffset),
                this.ClearMentionSearchState();
              return;
            }
            this.ReplaceSuggestedText(":", ":" + t + ":"),
              this.ClearMentionSearchState();
          }
          OnBBCodeSuggestionSelected(e, t) {
            if (!t) {
              (this.m_iMentionSearchCancelledOffset =
                this.m_iMentionSearchStartOffset),
                this.ClearMentionSearchState();
              return;
            }
            this.ReplaceSuggestedText("[", t), this.ClearMentionSearchState();
          }
          FocusTextInput() {
            this.descTextAreaRef.current &&
              this.descTextAreaRef.current.focus();
          }
          UpdateAutoSearchState() {
            let e = this.descTextAreaRef.current;
            if (!e || this.m_bDisabled) return;
            if (e.selectionStart != e.selectionEnd || !e.selectionStart) {
              this.ClearMentionSearchState();
              return;
            }
            let t = e.selectionStart,
              o = e.value,
              h,
              T;
            for (let F = t - 1; F >= 0; F--) {
              let ae = F > 0 ? o[F - 1] : void 0;
              if (this.props.emoticonStore && o[F] == ":" && o.length > 2) {
                (!ae ||
                  ae == " " ||
                  ae ==
                    `
` ||
                  ae == ":") &&
                  ((h = F), (T = "Emoticon"));
                break;
              } else if (o[F] == "[" && (F + 1 > o.length || o[F + 1] != "/")) {
                (!ae ||
                  ae == " " ||
                  ae ==
                    `
` ||
                  ae == "]") &&
                  ((h = F), (T = "BBCode"));
                break;
              } else if (
                o[F] == " " ||
                o[F] ==
                  `
`
              )
                break;
            }
            if (h === void 0 || h === this.m_iMentionSearchCancelledOffset) {
              this.ClearMentionSearchState();
              return;
            }
            let A = o.substr(h + 1, t - h - 1);
            (this.m_iMentionSearchStartOffset = h),
              this.setState({ activeSuggestSearchType: T, mentionSearch: A });
          }
          GetTextAreaRef() {
            return this.descTextAreaRef;
          }
          GetTextAreaCurrent() {
            return this.descTextAreaRef.current;
          }
          render() {
            let {
                emoticonStore: e,
                supportBBCodes: t,
                fnSetText: o,
                ...h
              } = this.props,
              T;
            switch (this.state.activeSuggestSearchType) {
              case "Emoticon":
                e &&
                  (T = (0, s.jsx)(W, {
                    emoticonStore: e,
                    strSearch: this.state.mentionSearch,
                    nMinimumSearchLengthBeforeAutoSelection: 2,
                    onSuggestionSelected: this.OnEmoticonSuggestionSelected,
                    ref: this.BindMentionDialog,
                  }));
                break;
              case "BBCode":
                T = (0, s.jsx)(Y, {
                  supportBBCodes: t,
                  strSearch: this.state.mentionSearch,
                  nMinimumSearchLengthBeforeAutoSelection: 2,
                  onSuggestionSelected: this.OnBBCodeSuggestionSelected,
                  ref: this.BindMentionDialog,
                });
                break;
            }
            return (0, s.jsxs)(D.Fragment, {
              children: [
                T,
                (0, s.jsx)("textarea", {
                  ...h,
                  ref: this.descTextAreaRef,
                  onKeyDown: this.OnKeyDown,
                  onKeyUp: this.OnKeyPress,
                  onFocus: this.OnFocus,
                  onClick: this.OnClick,
                }),
              ],
            });
          }
        }
        q([u.oI], z.prototype, "BindMentionDialog", 1),
          q([u.oI], z.prototype, "OnKeyDown", 1),
          q([u.oI], z.prototype, "OnFocus", 1),
          q([u.oI], z.prototype, "OnKeyPress", 1),
          q([u.oI], z.prototype, "OnClick", 1),
          q([u.oI], z.prototype, "OnEmoticonSuggestionSelected", 1),
          q([u.oI], z.prototype, "OnBBCodeSuggestionSelected", 1),
          q([u.oI], z.prototype, "FocusTextInput", 1),
          q([u.oI], z.prototype, "GetTextAreaRef", 1),
          q([u.oI], z.prototype, "GetTextAreaCurrent", 1);
        var N = n(19316),
          Ce = n(22714),
          pe = n(95695),
          fe = n.n(pe),
          ge = n(2801),
          me = n(88003),
          Oe = n(41609),
          Et = n.n(Oe),
          ze = n(82734),
          Le = n(3166),
          Mt = n(44483),
          Dt = n(42993),
          Bt = n(68312),
          xt = n(88942),
          $e = n(35038),
          re = n(80613),
          V = n.n(re),
          w = n(75245),
          Ot = n(92281),
          Lt = Object.defineProperty,
          At = (r, e, t) =>
            e in r
              ? Lt(r, e, {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: t,
                })
              : (r[e] = t),
          Te = (r, e, t) => At(r, typeof e != "symbol" ? e + "" : e, t);
        const st = class ne extends re.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              ne.prototype.groupid || w.Sg(ne.M()),
              re.Message.initialize(this, e, 0, -1, [3], null);
          }
          static M() {
            return (
              ne.sm_m ||
                (ne.sm_m = {
                  proto: ne,
                  fields: {
                    groupid: {
                      n: 1,
                      br: w.qM.readUint32,
                      bw: w.gp.writeUint32,
                    },
                    name: { n: 2, br: w.qM.readString, bw: w.gp.writeString },
                    accountid_members: {
                      n: 3,
                      r: !0,
                      q: !0,
                      br: w.qM.readUint32,
                      pbr: w.qM.readPackedUint32,
                      bw: w.gp.writeRepeatedUint32,
                    },
                  },
                }),
              ne.sm_m
            );
          }
          static MBF() {
            return ne.sm_mbf || (ne.sm_mbf = w.w0(ne.M())), ne.sm_mbf;
          }
          toObject(e = !1) {
            return ne.toObject(e, this);
          }
          static toObject(e, t) {
            return w.BT(ne.M(), e, t);
          }
          static fromObject(e) {
            return w.Uq(ne.M(), e);
          }
          static deserializeBinary(e) {
            let t = new (V().BinaryReader)(e),
              o = new ne();
            return ne.deserializeBinaryFromReader(o, t);
          }
          static deserializeBinaryFromReader(e, t) {
            return w.zj(ne.MBF(), e, t);
          }
          serializeBinary() {
            var e = new (V().BinaryWriter)();
            return ne.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, t) {
            w.i0(ne.M(), e, t);
          }
          serializeBase64String() {
            var e = new (V().BinaryWriter)();
            return (
              ne.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CFriendsListCategory";
          }
        };
        Te(st, "sm_m"), Te(st, "sm_mbf");
        let wt = st;
        class je extends re.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(), re.Message.initialize(this, e, 0, -1, void 0, null);
          }
          toObject(e = !1) {
            return je.toObject(e, this);
          }
          static toObject(e, t) {
            return e ? { $jspbMessageInstance: t } : {};
          }
          static fromObject(e) {
            return new je();
          }
          static deserializeBinary(e) {
            let t = new (V().BinaryReader)(e),
              o = new je();
            return je.deserializeBinaryFromReader(o, t);
          }
          static deserializeBinaryFromReader(e, t) {
            return e;
          }
          serializeBinary() {
            var e = new (V().BinaryWriter)();
            return je.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, t) {}
          serializeBase64String() {
            var e = new (V().BinaryWriter)();
            return (
              je.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CFriendsList_GetCategories_Request";
          }
        }
        const rt = class oe extends re.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              oe.prototype.categories || w.Sg(oe.M()),
              re.Message.initialize(this, e, 0, -1, [1], null);
          }
          static M() {
            return (
              oe.sm_m ||
                (oe.sm_m = {
                  proto: oe,
                  fields: { categories: { n: 1, c: wt, r: !0, q: !0 } },
                }),
              oe.sm_m
            );
          }
          static MBF() {
            return oe.sm_mbf || (oe.sm_mbf = w.w0(oe.M())), oe.sm_mbf;
          }
          toObject(e = !1) {
            return oe.toObject(e, this);
          }
          static toObject(e, t) {
            return w.BT(oe.M(), e, t);
          }
          static fromObject(e) {
            return w.Uq(oe.M(), e);
          }
          static deserializeBinary(e) {
            let t = new (V().BinaryReader)(e),
              o = new oe();
            return oe.deserializeBinaryFromReader(o, t);
          }
          static deserializeBinaryFromReader(e, t) {
            return w.zj(oe.MBF(), e, t);
          }
          serializeBinary() {
            var e = new (V().BinaryWriter)();
            return oe.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, t) {
            w.i0(oe.M(), e, t);
          }
          serializeBase64String() {
            var e = new (V().BinaryWriter)();
            return (
              oe.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CFriendsList_GetCategories_Response";
          }
        };
        Te(rt, "sm_m"), Te(rt, "sm_mbf");
        let Pt = rt;
        const it = class le extends re.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              le.prototype.accountid || w.Sg(le.M()),
              re.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              le.sm_m ||
                (le.sm_m = {
                  proto: le,
                  fields: {
                    accountid: {
                      n: 1,
                      br: w.qM.readUint32,
                      bw: w.gp.writeUint32,
                    },
                    clanid: { n: 2, br: w.qM.readUint32, bw: w.gp.writeUint32 },
                    chat_group_id: {
                      n: 3,
                      br: w.qM.readUint64String,
                      bw: w.gp.writeUint64String,
                    },
                  },
                }),
              le.sm_m
            );
          }
          static MBF() {
            return le.sm_mbf || (le.sm_mbf = w.w0(le.M())), le.sm_mbf;
          }
          toObject(e = !1) {
            return le.toObject(e, this);
          }
          static toObject(e, t) {
            return w.BT(le.M(), e, t);
          }
          static fromObject(e) {
            return w.Uq(le.M(), e);
          }
          static deserializeBinary(e) {
            let t = new (V().BinaryReader)(e),
              o = new le();
            return le.deserializeBinaryFromReader(o, t);
          }
          static deserializeBinaryFromReader(e, t) {
            return w.zj(le.MBF(), e, t);
          }
          serializeBinary() {
            var e = new (V().BinaryWriter)();
            return le.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, t) {
            w.i0(le.M(), e, t);
          }
          serializeBase64String() {
            var e = new (V().BinaryWriter)();
            return (
              le.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CFriendsListFavoriteEntry";
          }
        };
        Te(it, "sm_m"), Te(it, "sm_mbf");
        let at = it;
        class Re extends re.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(), re.Message.initialize(this, e, 0, -1, void 0, null);
          }
          toObject(e = !1) {
            return Re.toObject(e, this);
          }
          static toObject(e, t) {
            return e ? { $jspbMessageInstance: t } : {};
          }
          static fromObject(e) {
            return new Re();
          }
          static deserializeBinary(e) {
            let t = new (V().BinaryReader)(e),
              o = new Re();
            return Re.deserializeBinaryFromReader(o, t);
          }
          static deserializeBinaryFromReader(e, t) {
            return e;
          }
          serializeBinary() {
            var e = new (V().BinaryWriter)();
            return Re.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, t) {}
          serializeBase64String() {
            var e = new (V().BinaryWriter)();
            return (
              Re.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CFriendsList_GetFavorites_Request";
          }
        }
        const nt = class ce extends re.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              ce.prototype.favorites || w.Sg(ce.M()),
              re.Message.initialize(this, e, 0, -1, [1], null);
          }
          static M() {
            return (
              ce.sm_m ||
                (ce.sm_m = {
                  proto: ce,
                  fields: { favorites: { n: 1, c: at, r: !0, q: !0 } },
                }),
              ce.sm_m
            );
          }
          static MBF() {
            return ce.sm_mbf || (ce.sm_mbf = w.w0(ce.M())), ce.sm_mbf;
          }
          toObject(e = !1) {
            return ce.toObject(e, this);
          }
          static toObject(e, t) {
            return w.BT(ce.M(), e, t);
          }
          static fromObject(e) {
            return w.Uq(ce.M(), e);
          }
          static deserializeBinary(e) {
            let t = new (V().BinaryReader)(e),
              o = new ce();
            return ce.deserializeBinaryFromReader(o, t);
          }
          static deserializeBinaryFromReader(e, t) {
            return w.zj(ce.MBF(), e, t);
          }
          serializeBinary() {
            var e = new (V().BinaryWriter)();
            return ce.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, t) {
            w.i0(ce.M(), e, t);
          }
          serializeBase64String() {
            var e = new (V().BinaryWriter)();
            return (
              ce.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CFriendsList_GetFavorites_Response";
          }
        };
        Te(nt, "sm_m"), Te(nt, "sm_mbf");
        let jt = nt;
        const ot = class de extends re.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              de.prototype.favorites || w.Sg(de.M()),
              re.Message.initialize(this, e, 0, -1, [1], null);
          }
          static M() {
            return (
              de.sm_m ||
                (de.sm_m = {
                  proto: de,
                  fields: { favorites: { n: 1, c: at, r: !0, q: !0 } },
                }),
              de.sm_m
            );
          }
          static MBF() {
            return de.sm_mbf || (de.sm_mbf = w.w0(de.M())), de.sm_mbf;
          }
          toObject(e = !1) {
            return de.toObject(e, this);
          }
          static toObject(e, t) {
            return w.BT(de.M(), e, t);
          }
          static fromObject(e) {
            return w.Uq(de.M(), e);
          }
          static deserializeBinary(e) {
            let t = new (V().BinaryReader)(e),
              o = new de();
            return de.deserializeBinaryFromReader(o, t);
          }
          static deserializeBinaryFromReader(e, t) {
            return w.zj(de.MBF(), e, t);
          }
          serializeBinary() {
            var e = new (V().BinaryWriter)();
            return de.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, t) {
            w.i0(de.M(), e, t);
          }
          serializeBase64String() {
            var e = new (V().BinaryWriter)();
            return (
              de.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CFriendsList_SetFavorites_Request";
          }
        };
        Te(ot, "sm_m"), Te(ot, "sm_mbf");
        let Rt = ot;
        class Ue extends re.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(), re.Message.initialize(this, e, 0, -1, void 0, null);
          }
          toObject(e = !1) {
            return Ue.toObject(e, this);
          }
          static toObject(e, t) {
            return e ? { $jspbMessageInstance: t } : {};
          }
          static fromObject(e) {
            return new Ue();
          }
          static deserializeBinary(e) {
            let t = new (V().BinaryReader)(e),
              o = new Ue();
            return Ue.deserializeBinaryFromReader(o, t);
          }
          static deserializeBinaryFromReader(e, t) {
            return e;
          }
          serializeBinary() {
            var e = new (V().BinaryWriter)();
            return Ue.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, t) {}
          serializeBase64String() {
            var e = new (V().BinaryWriter)();
            return (
              Ue.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CFriendsList_SetFavorites_Response";
          }
        }
        const lt = class he extends re.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              he.prototype.favorites || w.Sg(he.M()),
              re.Message.initialize(this, e, 0, -1, [1], null);
          }
          static M() {
            return (
              he.sm_m ||
                (he.sm_m = {
                  proto: he,
                  fields: { favorites: { n: 1, c: at, r: !0, q: !0 } },
                }),
              he.sm_m
            );
          }
          static MBF() {
            return he.sm_mbf || (he.sm_mbf = w.w0(he.M())), he.sm_mbf;
          }
          toObject(e = !1) {
            return he.toObject(e, this);
          }
          static toObject(e, t) {
            return w.BT(he.M(), e, t);
          }
          static fromObject(e) {
            return w.Uq(he.M(), e);
          }
          static deserializeBinary(e) {
            let t = new (V().BinaryReader)(e),
              o = new he();
            return he.deserializeBinaryFromReader(o, t);
          }
          static deserializeBinaryFromReader(e, t) {
            return w.zj(he.MBF(), e, t);
          }
          serializeBinary() {
            var e = new (V().BinaryWriter)();
            return he.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, t) {
            w.i0(he.M(), e, t);
          }
          serializeBase64String() {
            var e = new (V().BinaryWriter)();
            return (
              he.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CFriendsList_FavoritesChanged_Notification";
          }
        };
        Te(lt, "sm_m"), Te(lt, "sm_mbf");
        let Ut = lt;
        class we extends re.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(), re.Message.initialize(this, e, 0, -1, void 0, null);
          }
          toObject(e = !1) {
            return we.toObject(e, this);
          }
          static toObject(e, t) {
            return e ? { $jspbMessageInstance: t } : {};
          }
          static fromObject(e) {
            return new we();
          }
          static deserializeBinary(e) {
            let t = new (V().BinaryReader)(e),
              o = new we();
            return we.deserializeBinaryFromReader(o, t);
          }
          static deserializeBinaryFromReader(e, t) {
            return e;
          }
          serializeBinary() {
            var e = new (V().BinaryWriter)();
            return we.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, t) {}
          serializeBase64String() {
            var e = new (V().BinaryWriter)();
            return (
              we.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CFriendsList_GetFriendsList_Request";
          }
        }
        const ct = class ue extends re.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              ue.prototype.friendslist || w.Sg(ue.M()),
              re.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              ue.sm_m ||
                (ue.sm_m = {
                  proto: ue,
                  fields: { friendslist: { n: 1, c: Ot.py } },
                }),
              ue.sm_m
            );
          }
          static MBF() {
            return ue.sm_mbf || (ue.sm_mbf = w.w0(ue.M())), ue.sm_mbf;
          }
          toObject(e = !1) {
            return ue.toObject(e, this);
          }
          static toObject(e, t) {
            return w.BT(ue.M(), e, t);
          }
          static fromObject(e) {
            return w.Uq(ue.M(), e);
          }
          static deserializeBinary(e) {
            let t = new (V().BinaryReader)(e),
              o = new ue();
            return ue.deserializeBinaryFromReader(o, t);
          }
          static deserializeBinaryFromReader(e, t) {
            return w.zj(ue.MBF(), e, t);
          }
          serializeBinary() {
            var e = new (V().BinaryWriter)();
            return ue.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, t) {
            w.i0(ue.M(), e, t);
          }
          serializeBase64String() {
            var e = new (V().BinaryWriter)();
            return (
              ue.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CFriendsList_GetFriendsList_Response";
          }
        };
        Te(ct, "sm_m"), Te(ct, "sm_mbf");
        let Ft = ct;
        var dt;
        ((r) => {
          function e(T, A, F) {
            return T.SendMsg(
              "FriendsList.GetCategories#1",
              (0, $e.I8)(je, A, F),
              Pt,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }
          r.GetCategories = e;
          function t(T, A, F) {
            return T.SendMsg(
              "FriendsList.GetFriendsList#1",
              (0, $e.I8)(we, A, F),
              Ft,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }
          r.GetFriendsList = t;
          function o(T, A, F) {
            return T.SendMsg(
              "FriendsList.GetFavorites#1",
              (0, $e.I8)(Re, A, F),
              jt,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }
          r.GetFavorites = o;
          function h(T, A, F) {
            return T.SendMsg(
              "FriendsList.SetFavorites#1",
              (0, $e.I8)(Rt, A, F),
              Ue,
              { ePrivilege: 1 },
            );
          }
          r.SetFavorites = h;
        })(dt || (dt = {}));
        var ut;
        ((r) => {
          r.FavoritesChangedHandler = {
            name: "FriendsListClient.FavoritesChanged#1",
            request: Ut,
          };
        })(ut || (ut = {}));
        var cs = n(75916),
          ht = n(99412),
          pt = n(35098);
        function ds(r) {
          const e = useActiveServiceTransport(),
            t = useActiveAccount(),
            o = usePlayerSummaryFactory(),
            h = useQueryClient();
          let T = { loadNicknames: !1, loadFavorites: !1, ...r };
          return useQuery({
            queryKey: ["FriendsList", t, T],
            queryFn: async () => {
              const A = h.fetchQuery(gt(e, t)),
                F = T.loadNicknames ? h.fetchQuery(mt(e, t)) : void 0,
                ae = T.loadFavorites ? h.fetchQuery(_t(e, t)) : void 0,
                Ae = await A,
                Qe = new Map(
                  Ae.map((De) => [
                    De,
                    h.fetchQuery(PlayerSummaryQuery(o, e, De)),
                  ]),
                );
              let Ee;
              F && (Ee = ft((await F).nicknames));
              const Ne = new Set(await (ae != null ? ae : Promise.resolve([])));
              return (
                await Promise.all(
                  Ae.map(async (De) => {
                    const xe = new CSteamID(De).GetAccountID(),
                      Xe = await Qe.get(De);
                    if (!Xe) return;
                    const Ye = { accountid: xe, persona: Xe };
                    return (
                      Ne.has(xe) && (Ye.is_favorite = !0),
                      Ee && Ee.has(xe) && (Ye.nickname = Ee.get(xe)),
                      Ye
                    );
                  }),
                )
              ).filter((De) => De !== void 0);
            },
            staleTime: 120 * 1e3,
          });
        }
        function Gt() {
          const r = (0, Bt.KV)(),
            e = (0, Dt.LH)();
          return (0, xt.I)(gt(r, e));
        }
        function gt(r, e) {
          return {
            queryKey: ["GetFriendsList", e],
            queryFn: async () => {
              var t, o;
              const h = $e.w.Init(we),
                T = await dt.GetFriendsList(r, h),
                A = [];
              for (const F of (o =
                (t = T.Body().friendslist()) == null ? void 0 : t.friends()) !=
              null
                ? o
                : []) {
                const ae = F.ulfriendid();
                ae &&
                  (F.efriendrelationship() == ht._UC ||
                    F.efriendrelationship() == ht.Ec7) &&
                  new j.b(ae).BIsIndividualAccount() &&
                  A.push(ae);
              }
              return A;
            },
          };
        }
        function hs() {
          const r = useActiveServiceTransport(),
            e = useActiveAccount();
          return useQuery({
            queryKey: ["GetIgnoredAccounts", e],
            queryFn: async () => {
              var t, o;
              const h = CProtoBufMsg.Init(CFriendsList_GetFriendsList_Request);
              return (o =
                (t = (await FriendsListService.GetFriendsList(r, h))
                  .Body()
                  .friendslist()) == null
                  ? void 0
                  : t.friends()) == null
                ? void 0
                : o
                    .filter((A) => {
                      const F = new CSteamID(A.ulfriendid());
                      return (
                        (A.efriendrelationship() ==
                          k_EFriendRelationshipIgnored ||
                          A.efriendrelationship() ==
                            k_EFriendRelationshipIgnoredFriend) &&
                        F.BIsIndividualAccount()
                      );
                    })
                    .map((A) => A.ulfriendid());
            },
          });
        }
        function zt(r = {}) {
          const e = useActiveServiceTransport(),
            t = useActiveAccount();
          return useQuery({ ...mt(e, t), ...r });
        }
        function mt(r, e) {
          return {
            queryKey: ["GetFriendNicknameList", e],
            queryFn: async () => {
              const t = CProtoBufMsg.Init(CPlayer_GetNicknameList_Request);
              return (await PlayerService.GetNicknameList(r, t))
                .Body()
                .toObject();
            },
          };
        }
        function us(r = {}) {
          return zt({ ...r, select: (e) => ft(e.nicknames) });
        }
        function ft(r) {
          const e = new Map();
          for (const t of r != null ? r : [])
            t.accountid !== void 0 &&
              t.nickname !== void 0 &&
              e.set(t.accountid, t.nickname);
          return e;
        }
        function ps(r = {}) {
          const e = useActiveServiceTransport(),
            t = useActiveAccount();
          return useQuery({ ..._t(e, t), ...r });
        }
        function _t(r, e) {
          return {
            queryKey: ["GetFriendFavorites", e],
            queryFn: async () => {
              var t;
              const o = CProtoBufMsg.Init(CFriendsList_GetFavorites_Request),
                h = await FriendsListService.GetFavorites(r, o),
                T = [];
              for (const A of (t = h.Body().toObject().favorites) != null
                ? t
                : [])
                A.accountid && T.push(A.accountid);
              return T;
            },
          };
        }
        async function vt(r, e) {
          const t = CProtoBufMsg.Init(CPlayer_GetFriendsGameplayInfo_Request);
          t.Body().set_appid(e);
          const o = await PlayerService.GetFriendsGameplayInfo(r, t);
          return (
            o.BSuccess() ||
              console.warn(`Failed to get gameplay info: ${o.GetEResult()}`),
            o.Body().toObject()
          );
        }
        function gs(r, e = {}) {
          const t = useActiveServiceTransport(),
            o = useActiveAccount();
          return useQueries({
            queries: r.map((h) => ({
              queryKey: [`GameplayInfo_${o}_${h}`],
              queryFn: () => vt(t, h),
              ...e,
            })),
          });
        }
        function ms(r, e = {}) {
          const t = useActiveServiceTransport(),
            o = useActiveAccount();
          return useQuery({
            queryKey: [`GameplayInfo_${o}_${r}`],
            queryFn: async () => await vt(t, r),
            ...e,
          });
        }
        var Ht = n(34360),
          Wt = n(34736),
          qe = n(85599),
          et = n(71421),
          Nt = n(99312),
          Q = n.n(Nt),
          Kt = n(98112),
          kt = n(71742),
          Yt = n(21254),
          Vt = n(55436),
          Qt = n(64233),
          Xt = n(75909);
        const Zt = (0, K.PA)((r) => {
          const {
              clanSteamID: e,
              inputClanImage: t,
              nWidth: o,
              nHeight: h,
              setImage: T,
            } = r,
            A = D.useMemo(() => ({ width: o, height: h }), [o, h]),
            [F, ae] = D.useState(void 0),
            [Ae, Qe] = D.useState(!!t),
            [Ee, Ne] = D.useState(!1),
            Me = (0, Xt.zO)(e, "dummy"),
            De = D.useCallback(
              async (Se) => {
                if (
                  (Me.ClearImages(),
                  Se && (Qe(!0), await Me.AddExistingClanImage(Se, ht.Bhc)))
                ) {
                  ae(Se);
                  const Ie = Me.GetUploadImages()[0].IsValidAssetType(A);
                  Ie.error.length == 0 &&
                    !Ie.needsCrop &&
                    (!t || t.image_hash != Se.image_hash) &&
                    T(Se);
                }
                Qe(!1);
              },
              [Me, t, T, A],
            );
          D.useEffect(() => {
            De(t);
          }, [De, t]);
          const xe = (Se) => {
              var Be;
              const Ie = new j.b(Le.UF.CLANSTEAMID);
              (0, me.pg)(
                (0, s.jsx)(Vt.z, {
                  clanSteamID: Ie,
                  fnImageSelectCallBack: (Je) => De(Je),
                }),
                (Be = (0, ze.uX)(Se)) != null ? Be : window,
              );
            },
            Xe = (Se) => {
              var Be;
              const Ie = (Be = (0, ze.uX)(Se)) != null ? Be : window;
              let Je = Me.GetUploadImages()[0];
              (0, me.pg)(
                (0, s.jsx)(Yt.q, {
                  ownerWin: Ie,
                  uploadFile: Je,
                  forceResolution: { width: o, height: h },
                  fileType: Kt.bg.dU,
                }),
                Ie,
              );
            },
            Ye = async () => {
              Ne(!0);
              try {
                const Se = await Me.UploadAllImages(A),
                  Be = Object.values(Se);
                if (Be && Be.length > 0) {
                  (0, kt.wT)(
                    Be.length == 1,
                    "ClanImagePickForCertainSize expected size 1, got " +
                      Be.length,
                  );
                  const Ie = Be[0].bSuccess ? Be[0].uploadResult : void 0,
                    Je = x.zU.GetHashAndExt(Ie != null ? Ie : null),
                    bt = x.zU.GetThumbHashAndExt(Ie != null ? Ie : null);
                  if (
                    Ie != null &&
                    Ie.image_hash &&
                    Ie.file_type !== void 0 &&
                    Je &&
                    bt
                  ) {
                    const os = x.zU.GenerateURLFromHashAndExt(e, Je),
                      ls = x.zU.GenerateURLFromHashAndExt(e, bt),
                      St = {
                        imageid: -11231412,
                        image_hash: Ie.image_hash,
                        thumbnail_hash: Ie.thumbnail_hash,
                        file_type: Ie.file_type,
                        file_name: Ie.file_name,
                        clanAccountID: e.GetAccountID(),
                        url: os,
                        thumb_url: ls,
                        uploaded_time: Date.now() / 1e3,
                      };
                    ae(St), T(St);
                  }
                }
              } finally {
                Ne(!1);
              }
            };
          let Ze = "",
            ve = !1,
            Ge;
          if (Me && Me.GetFilesToUpload().length > 0) {
            Ge = Me.GetUploadImages()[0];
            const Se = Ge.IsValidAssetType(A);
            (Ze = Se.error), (ve = Se.needsCrop);
          }
          return (0, s.jsxs)(s.Fragment, {
            children: [
              Ae
                ? (0, s.jsx)(qe.t, {
                    size: "medium",
                    string: (0, l.we)("#Loading"),
                  })
                : F &&
                  (0, s.jsx)("div", {
                    className: Qt.Image,
                    style: {
                      backgroundImage: `url( '${Ge ? Ge.dataUrl : F.url}' )`,
                      height: `${h}px`,
                      width: `${o}px`,
                    },
                  }),
              !!Ze && (0, s.jsx)("p", { children: Ze }),
              ve &&
                (0, s.jsx)(N.$n, {
                  onClick: Xe,
                  children: (0, l.we)("#BBCode_ResizeImage"),
                }),
              Ge &&
                Ge.bCropped &&
                (0, s.jsxs)(s.Fragment, {
                  children: [
                    (0, s.jsx)("div", {
                      children: (0, l.we)(
                        "#ClanImagePickAndResize_UploadStatus",
                        Ge.status,
                      ),
                    }),
                    Ee
                      ? (0, s.jsx)(qe.t, {
                          string: (0, l.we)("#Uploading"),
                          size: "small",
                        })
                      : (0, s.jsx)(N.$n, {
                          onClick: Ye,
                          children: (0, l.we)(
                            "#ClanImagePickAndResize_UploadImage",
                          ),
                        }),
                  ],
                }),
              (0, s.jsx)(N.$n, {
                onClick: xe,
                children: (0, l.we)("#BBCode_ChooseImage", o, h),
              }),
            ],
          });
        });
        var Jt = n(34592),
          It = Object.defineProperty,
          $t = Object.getOwnPropertyDescriptor,
          qt = (r, e, t) =>
            e in r
              ? It(r, e, {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: t,
                })
              : (r[e] = t),
          es = (r, e, t, o) => {
            for (
              var h = o > 1 ? void 0 : o ? $t(e, t) : e, T = r.length - 1, A;
              T >= 0;
              T--
            )
              (A = r[T]) && (h = (o ? A(e, t, h) : A(h)) || h);
            return o && h && It(e, t, h), h;
          },
          Ct = (r, e, t) => qt(r, typeof e != "symbol" ? e + "" : e, t);
        let He = class extends D.Component {
          constructor(r) {
            var e;
            super(r),
              Ct(this, "m_cancelSignal", R().CancelToken.source()),
              (this.state = {
                formattingHelp: {
                  __html:
                    (e = He.s_formattingHelp.get(r.formatType)) != null
                      ? e
                      : "",
                },
              });
          }
          componentDidMount() {
            this.AjaxGetFormattingHelp().catch((r) => {
              this.setState((0, Jt.H)(r));
            });
          }
          componentWillUnmount() {
            this.m_cancelSignal.cancel(
              "FormattingHelpWidget component unmounted",
            );
          }
          static GetHelpURL(r, e) {
            return (
              Le.TS.COMMUNITY_BASE_URL +
              "comment/" +
              r +
              "/formattinghelp" +
              (e ? "?ajax=1" : "")
            );
          }
          async AjaxGetFormattingHelp() {
            if (this.state.formattingHelp.__html == "") {
              let r = { sessionid: (0, Le.KC)() },
                e;
              (e = await R().get(He.GetHelpURL(this.props.formatType, !0), {
                params: r,
                cancelToken: this.m_cancelSignal.token,
              })),
                He.s_formattingHelp.set(this.props.formatType, e.data),
                this.setState({ formattingHelp: { __html: e.data } });
            }
          }
          render() {
            return this.state.strErrorMsg
              ? (0, s.jsxs)("div", {
                  children: [
                    this.state.strErrorMsg,
                    (0, s.jsx)("br", {}),
                    this.state.errorCode,
                  ],
                })
              : this.state.formattingHelp.__html == ""
                ? (0, s.jsx)(qe.t, {})
                : (0, s.jsx)(ge.o0, {
                    strTitle: (0, l.we)(
                      "#EventEditor_FormattingHelp_GetHelpLink",
                    ),
                    strDescription: "",
                    closeModal: this.props.closeModal,
                    onOK: this.props.closeModal,
                    onCancel: this.props.closeModal,
                    bAlertDialog: !0,
                    className: "ModernBBStyles",
                    children: (0, s.jsx)("div", {
                      dangerouslySetInnerHTML: this.state.formattingHelp,
                    }),
                  });
          }
        };
        Ct(He, "s_formattingHelp", new Map()), (He = es([K.PA], He));
        var yt = n(38340),
          ie = n(1917),
          ts = n(11243),
          Tt = Object.defineProperty,
          ss = Object.getOwnPropertyDescriptor,
          rs = (r, e, t) =>
            e in r
              ? Tt(r, e, {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: t,
                })
              : (r[e] = t),
          H = (r, e, t, o) => {
            for (
              var h = o > 1 ? void 0 : o ? ss(e, t) : e, T = r.length - 1, A;
              T >= 0;
              T--
            )
              (A = r[T]) && (h = (o ? A(e, t, h) : A(h)) || h);
            return o && h && Tt(e, t, h), h;
          },
          Fe = (r, e, t) => rs(r, typeof e != "symbol" ? e + "" : e, t);
        let Ke = class extends D.Component {
          constructor(r) {
            super(r),
              Fe(this, "descAutoTextAreaRef", D.createRef()),
              (this.state = { bShowDragTarget: !1 });
          }
          componentDidMount() {
            b.pU.AddClanImageDragListener(this.ClanImageDragListener);
          }
          componentWillUnmount() {
            b.pU.RemoveClanImageDragListener(this.ClanImageDragListener);
          }
          ClanImageDragListener(r, e) {
            this.state.bShowDragTarget != e &&
              this.setState({ bShowDragTarget: e });
          }
          onFocus(r) {
            r && r.target.select();
          }
          InsertText(r) {
            var e;
            ee.replaceSelection(
              (e = this.GetTextAreaRef()) == null ? void 0 : e.current,
              r,
            );
          }
          OnTextAreaDropListener(r) {
            var e;
            if (
              (r.preventDefault(),
              r.stopPropagation(),
              r.dataTransfer.items && r.dataTransfer.items[0])
            ) {
              let t = r.dataTransfer.getData("text");
              if (t && t.length > 0) {
                for (let o of [x.zU.GetBaseURL(), x.zU.GetBaseURLV2()])
                  if (t.startsWith(o)) {
                    let h =
                      "[img]" + yt.lw + "/" + t.substr(o.length) + "[/img]";
                    ee.replaceSelection(
                      (e = this.GetTextAreaRef()) == null ? void 0 : e.current,
                      h,
                    );
                    break;
                  }
              }
            }
          }
          GetTextAreaRef() {
            var r;
            return (r = this.descAutoTextAreaRef.current) == null
              ? void 0
              : r.GetTextAreaRef();
          }
          render() {
            return (0, s.jsxs)(D.Fragment, {
              children: [
                (0, s.jsx)(_e, {
                  pathToImages:
                    Le.TS.COMMUNITY_CDN_URL +
                    "public/images/sharedfiles/guides/",
                  fnTextareaRef: this.GetTextAreaRef,
                  emoticonStore: this.props.emoticonStore,
                  supportBBCodes: this.props.limitBBCode
                    ? this.props.limitBBCode
                    : k.Kl,
                  bSupportHTMLImport: this.props.bSupportHTMLImport,
                  showFormatHelp: this.props.showFormatHelp,
                  bEmbeddedInDialog: this.props.bEmbeddedInDialog,
                  clanSteamID: this.props.clanSteamID,
                }),
                (0, s.jsx)("div", {
                  className: (0, S.A)(
                    Q().DescriptionCtn,
                    Q().BBCodeEditorInputStyles,
                    this.state.bShowDragTarget ? Q().DragTarget : "",
                    this.props.className ? this.props.className : "",
                  ),
                  children: (0, s.jsx)(z, {
                    cols: 90,
                    rows: this.props.nOverridesRows || 22,
                    maxLength: 64e3,
                    className: (0, S.A)(
                      Q().DefaultEditor,
                      this.props.classNameForTextArea
                        ? this.props.classNameForTextArea
                        : "",
                    ),
                    placeholder: this.props.strPlaceholder,
                    ref: this.descAutoTextAreaRef,
                    value: this.props.fnGetCurText(),
                    onChange: this.props.fnOnTextChange,
                    onDrop: this.OnTextAreaDropListener,
                    emoticonStore: this.props.emoticonStore,
                    fnSetText: this.props.fnSetText,
                    supportBBCodes: this.props.limitBBCode
                      ? this.props.limitBBCode
                      : k.Kl,
                  }),
                }),
              ],
            });
          }
        };
        H([u.oI], Ke.prototype, "ClanImageDragListener", 1),
          H([u.oI], Ke.prototype, "onFocus", 1),
          H([u.oI], Ke.prototype, "OnTextAreaDropListener", 1),
          H([u.oI], Ke.prototype, "GetTextAreaRef", 1),
          (Ke = H([K.PA], Ke));
        class ee {
          static BIsFireFox() {
            return !!new RegExp(/Firefox\/([0-9\.]+)(?:\s|$)/i).exec(
              navigator.userAgent,
            );
          }
          static replaceSelection(e, t) {
            if (!e) return;
            let o = e.selectionStart;
            e.focus(),
              ee.InsertTextAtSelect(t, e),
              e.setSelectionRange(o, o + t.length);
          }
          static getSelectedString(e) {
            return e
              ? e.value.substr(
                  e.selectionStart,
                  e.selectionEnd - e.selectionStart,
                )
              : "";
          }
          static wrapBBCode(e, t, o) {
            if (!o) return;
            let h = ee.getSelectedString(o),
              T = "";
            h.indexOf(e) == 0 && h.lastIndexOf(t) == h.length - t.length
              ? (T = h.substr(e.length, h.length - e.length - t.length))
              : (T = e + h + t),
              ee.replaceSelection(o, T);
          }
          static append(e, t) {
            t &&
              (t.focus(),
              t.setSelectionRange(t.value.length, t.value.length),
              ee.InsertTextAtSelect(e, t));
          }
          static ClearTextArea(e) {
            if (e) {
              e.focus();
              const t = 0,
                o = e.value.length;
              if (t !== o) {
                e.setRangeText
                  ? e.setRangeText("", t, o, "preserve")
                  : (e.value = "");
                const h = new Event("input", { bubbles: !0 });
                e.dispatchEvent(h);
              }
              e.focus();
            }
          }
          static overwrite(e, t) {
            t && (ee.ClearTextArea(t), ee.InsertTextAtSelect(e, t));
          }
          static InsertTextAtSelect(e, t) {
            const o = t.selectionStart,
              h = t.selectionEnd;
            if (o !== null && h !== null) {
              t.setRangeText
                ? t.setRangeText(e, o, h, "preserve")
                : (t.value = t.value.slice(0, o) + e + t.value.slice(h));
              const T = new Event("input", { bubbles: !0 });
              t.dispatchEvent(T),
                (t.selectionStart = t.selectionEnd = o + e.length);
            }
            t.focus();
          }
        }
        let _e = class extends D.Component {
          constructor() {
            super(...arguments), Fe(this, "m_linkPopupRef", D.createRef());
          }
          onBold() {
            var r;
            ee.wrapBBCode(
              "[b]",
              "[/b]",
              (r = this.props.fnTextareaRef()) == null ? void 0 : r.current,
            );
          }
          onItalics() {
            var r;
            ee.wrapBBCode(
              "[i]",
              "[/i]",
              (r = this.props.fnTextareaRef()) == null ? void 0 : r.current,
            );
          }
          onUnderline() {
            var r;
            ee.wrapBBCode(
              "[u]",
              "[/u]",
              (r = this.props.fnTextareaRef()) == null ? void 0 : r.current,
            );
          }
          onStrikeThrough() {
            var r;
            ee.wrapBBCode(
              "[strike]",
              "[/strike]",
              (r = this.props.fnTextareaRef()) == null ? void 0 : r.current,
            );
          }
          onHeader() {
            var r;
            ee.wrapBBCode(
              "[h1]",
              "[/h1]",
              (r = this.props.fnTextareaRef()) == null ? void 0 : r.current,
            );
          }
          onHeader2() {
            var r;
            ee.wrapBBCode(
              "[h2]",
              "[/h2]",
              (r = this.props.fnTextareaRef()) == null ? void 0 : r.current,
            );
          }
          onHeader3() {
            var r;
            ee.wrapBBCode(
              "[h3]",
              "[/h3]",
              (r = this.props.fnTextareaRef()) == null ? void 0 : r.current,
            );
          }
          onUnorderedList() {
            this.handleList("list");
          }
          onOrderedList() {
            this.handleList("olist");
          }
          handleList(r) {
            var e;
            let t =
              (e = this.props.fnTextareaRef()) == null ? void 0 : e.current;
            if (!t) return;
            let o =
                "[" +
                r +
                `]
`,
              h = "[/" + r + "]";
            if (t.selectionStart == t.selectionEnd)
              ee.wrapBBCode(
                o + "[*]",
                `
` + h,
                t,
              );
            else {
              let T = ee.getSelectedString(t),
                A =
                  o +
                  T.split(`
`)
                    .map((F) => (F.match(/\*+\s/) ? "[*]" : "[*] ") + F)
                    .join(`
`) +
                  `
` +
                  h;
              ee.replaceSelection(t, A);
            }
          }
          OnAddLink(r) {
            var e;
            const t = this.props.fnTextareaRef();
            t &&
              (0, me.HT)(
                (0, s.jsx)(We, { textareaRef: t }),
                (e = (0, ze.uX)(r)) != null ? e : window,
              );
          }
          ShowHelpDialog(r) {
            var e;
            this.props.showFormatHelp &&
              (0, me.HT)(
                (0, s.jsx)(He, { formatType: this.props.showFormatHelp }),
                (e = (0, ze.uX)(r)) != null ? e : window,
              );
          }
          OnConvertHTMLToBBCodeDialog(r) {
            var e;
            const t = this.props.fnTextareaRef();
            if (!t) return;
            const o = (e = (0, ze.uX)(r)) != null ? e : window;
            (0, me.HT)((0, s.jsx)(ke, { ownerWindow: o, textareaRef: t }), o);
          }
          OnOpenYoutubeDialog(r) {
            var e;
            const t = this.props.fnTextareaRef();
            if (!t) return;
            let o = Le.TS.IMG_URL + "applications/community/";
            (0, me.HT)(
              (0, s.jsx)(Pe, { textareaRef: t, pathToImages: o }),
              (e = (0, ze.uX)(r)) != null ? e : window,
            );
          }
          OnOpenImageDialog(r) {
            var e;
            const t = this.props.fnTextareaRef();
            t &&
              (0, me.HT)(
                (0, s.jsx)(Ve, { textareaRef: t }),
                (e = (0, ze.uX)(r)) != null ? e : window,
              );
          }
          OnOpenSpeakerDialog(r) {
            var e;
            const t = this.props.fnTextareaRef(),
              o = this.props.clanSteamID;
            !t ||
              !o ||
              (0, me.pg)(
                (0, s.jsx)(is, { clanSteamID: o, textareaRef: t }),
                (e = (0, ze.uX)(r)) != null ? e : window,
              );
          }
          OnEmoticonSelected(r, e = !1) {
            var t, o, h;
            let T = `\u02D0${r}\u02D0`;
            ee.replaceSelection(
              (t = this.props.fnTextareaRef()) == null ? void 0 : t.current,
              T,
            ),
              (h =
                (o = this.props.fnTextareaRef()) == null
                  ? void 0
                  : o.current) == null || h.focus();
          }
          BSupports(r) {
            return this.props.supportBBCodes.findIndex((e) => e == r) >= 0;
          }
          render() {
            const {
              showFormatHelp: r,
              bEmbeddedInDialog: e,
              bSupportHTMLImport: t,
              pathToImages: o,
            } = this.props;
            let h;
            return (
              r &&
                (e
                  ? (h = (0, s.jsx)("span", {
                      className: (0, S.A)("ttip", Q().ActionGetHelp),
                      children: (0, s.jsx)(et.he, {
                        toolTipContent: (0, l.we)(
                          "#EventEditor_FormattingHelp_GetHelpLink",
                        ),
                        children: (0, s.jsxs)("a", {
                          href: He.GetHelpURL(r, !1),
                          target: Le.TS.IN_CLIENT ? void 0 : "_blank",
                          children: [
                            (0, s.jsx)("img", { src: o + "/action_help.png" }),
                            " ",
                            (0, l.we)(
                              "#EventEditor_FormattingHelp_GetHelpLink",
                            ),
                          ],
                        }),
                      }),
                    }))
                  : (h = (0, s.jsx)("span", {
                      onClick: this.ShowHelpDialog,
                      className: (0, S.A)("ttip", Q().ActionGetHelp),
                      children: (0, s.jsxs)(et.he, {
                        toolTipContent: (0, l.we)(
                          "#EventEditor_FormattingHelp_GetHelpLink",
                        ),
                        children: [
                          (0, s.jsx)("img", { src: o + "/action_help.png" }),
                          " ",
                          (0, l.we)("#EventEditor_FormattingHelp_GetHelpLink"),
                        ],
                      }),
                    }))),
              (0, s.jsxs)("div", {
                className: Q().TextEditorToolBarContainer,
                children: [
                  this.BSupports("b") &&
                    (0, s.jsx)(be, {
                      onClick: this.onBold,
                      tooltip: (0, l.we)("#Editor_Bold"),
                      imgURL: this.props.pathToImages + "/format_bold.png",
                    }),
                  this.BSupports("u") &&
                    (0, s.jsx)(be, {
                      onClick: this.onUnderline,
                      tooltip: (0, l.we)("#Editor_Underline"),
                      imgURL: this.props.pathToImages + "/format_underline.png",
                    }),
                  this.BSupports("i") &&
                    (0, s.jsx)(be, {
                      onClick: this.onItalics,
                      tooltip: (0, l.we)("#Editor_Italics"),
                      imgURL: this.props.pathToImages + "/format_italic.png",
                    }),
                  this.BSupports("strike") &&
                    (0, s.jsx)(be, {
                      onClick: this.onStrikeThrough,
                      tooltip: (0, l.we)("#Editor_StrikeThrough"),
                      imgURL: this.props.pathToImages + "/format_strike.png",
                    }),
                  !!(this.BSupports("url") && !e) &&
                    (0, s.jsx)(be, {
                      onClick: this.OnAddLink,
                      tooltip: (0, l.we)("#Editor_Link"),
                      imgURL: this.props.pathToImages + "/format_link.png",
                    }),
                  this.BSupports("list") &&
                    (0, s.jsx)(be, {
                      onClick: this.onUnorderedList,
                      tooltip: (0, l.we)("#Editor_Unordered"),
                      imgURL: this.props.pathToImages + "/format_bullet.png",
                    }),
                  this.BSupports("olist") &&
                    (0, s.jsx)(be, {
                      onClick: this.onOrderedList,
                      tooltip: (0, l.we)("#Editor_Ordered"),
                      imgURL: this.props.pathToImages + "/format_numbered.png",
                    }),
                  this.BSupports("h1") &&
                    (0, s.jsx)(be, {
                      onClick: this.onHeader,
                      tooltip: (0, l.we)("#Editor_Header"),
                      imgURL: this.props.pathToImages + "/format_header1.png",
                    }),
                  this.BSupports("h2") &&
                    (0, s.jsx)(be, {
                      onClick: this.onHeader2,
                      tooltip: (0, l.we)("#Editor_Header2"),
                      imgURL: this.props.pathToImages + "/format_header2.png",
                    }),
                  this.BSupports("h3") &&
                    (0, s.jsx)(be, {
                      onClick: this.onHeader3,
                      tooltip: (0, l.we)("#Editor_Header3"),
                      imgURL: this.props.pathToImages + "/format_header3.png",
                    }),
                  this.BSupports("previewyoutube") &&
                    (0, s.jsx)(be, {
                      onClick: this.OnOpenYoutubeDialog,
                      tooltip: (0, l.we)("#EventEditor_InsertYouTube"),
                      imgURL: Mt.A,
                    }),
                  (0, s.jsx)("span", {
                    className: "ttip",
                    children:
                      this.props.emoticonStore &&
                      (0, s.jsx)(et.he, {
                        toolTipContent: (0, l.we)("#Editor_Emoticon"),
                        children: (0, s.jsx)(Ce.A, {
                          title: " ",
                          className: (0, S.A)(Q().EmoteOuter),
                          disabled: !1,
                          OnEmoticonSelected: this.OnEmoticonSelected,
                          rtLastAckedNewEmoticons: Number.MAX_VALUE,
                          emoticonStore: this.props.emoticonStore,
                          useImg: this.props.pathToImages + "/format_emote.png",
                          contextOptions: {
                            bOverlapHorizontal: !0,
                            bDisablePopTop: !0,
                          },
                        }),
                      }),
                  }),
                  !!(this.BSupports("img") && !e) &&
                    (0, s.jsx)(be, {
                      onClick: this.OnOpenImageDialog,
                      tooltip: (0, l.we)("#EventEditor_InsertImage"),
                      imgURL: this.props.pathToImages + "/insert_img.png",
                    }),
                  !!(
                    Le.iA.is_support &&
                    this.props.clanSteamID &&
                    this.BSupports("speaker")
                  ) &&
                    (0, s.jsx)(be, {
                      onClick: this.OnOpenSpeakerDialog,
                      tooltip: (0, l.we)("#EventEditor_AddSpeaker"),
                      imgURL: this.props.pathToImages + "/insert_img.png",
                    }),
                  !!(t && !e) &&
                    (0, s.jsx)(be, {
                      onClick: this.OnConvertHTMLToBBCodeDialog,
                      className: Q().ActionImportHTML,
                      tooltip: (0, l.we)("#EventEditor_ImportFromHTML_ttip"),
                      children: (0, l.we)("#EventEditor_ImportHTML"),
                    }),
                  h,
                ],
              })
            );
          }
        };
        H([u.oI], _e.prototype, "onBold", 1),
          H([u.oI], _e.prototype, "onItalics", 1),
          H([u.oI], _e.prototype, "onUnderline", 1),
          H([u.oI], _e.prototype, "onStrikeThrough", 1),
          H([u.oI], _e.prototype, "onHeader", 1),
          H([u.oI], _e.prototype, "onHeader2", 1),
          H([u.oI], _e.prototype, "onHeader3", 1),
          H([u.oI], _e.prototype, "onUnorderedList", 1),
          H([u.oI], _e.prototype, "onOrderedList", 1),
          H([u.oI], _e.prototype, "OnAddLink", 1),
          H([u.oI], _e.prototype, "ShowHelpDialog", 1),
          H([u.oI], _e.prototype, "OnConvertHTMLToBBCodeDialog", 1),
          H([u.oI], _e.prototype, "OnOpenYoutubeDialog", 1),
          H([u.oI], _e.prototype, "OnOpenImageDialog", 1),
          H([u.oI], _e.prototype, "OnOpenSpeakerDialog", 1),
          H([u.oI], _e.prototype, "OnEmoticonSelected", 1),
          (_e = H([K.PA], _e));
        function be(r) {
          return (0, s.jsx)("span", {
            onClick: r.onClick,
            className: r.className,
            children: (0, s.jsxs)(et.he, {
              toolTipContent: r.tooltip,
              className: "ttip",
              children: [
                !!r.imgURL && (0, s.jsx)("img", { src: r.imgURL }),
                r.children,
              ],
            }),
          });
        }
        let Pe = class extends D.Component {
          constructor() {
            super(...arguments),
              Fe(this, "state", { youtubeInput: "", alignment: ie.V2.left });
          }
          OnYoutubeInsertLink() {
            const r =
              this.state.youtubeInput && (0, G.XU)(this.state.youtubeInput);
            if (!r) {
              alert((0, l.we)("#EventEditor_InsertYouTube_NoURL"));
              return;
            }
            if (this.state.alignment == ie.V2.summary) {
              const e =
                "https://www.youtube.com/watch?v=" +
                r.strVideoID +
                (r.nStartSeconds ? "&t=" + r.nStartSeconds : "");
              ee.wrapBBCode(e, "", this.props.textareaRef.current);
            } else {
              let e =
                "[previewyoutube=" +
                r.strVideoID +
                ";" +
                this.state.alignment +
                "]";
              ee.wrapBBCode(
                e,
                "[/previewyoutube]",
                this.props.textareaRef.current,
              );
            }
            this.setState({ youtubeInput: "", alignment: ie.V2.left });
          }
          OnUrlChange(r) {
            this.state.youtubeInput != r.target.value &&
              this.setState({ youtubeInput: r.target.value });
          }
          OnLeftSelected() {
            this.setState({ alignment: ie.V2.left });
          }
          OnRightSelected() {
            this.setState({ alignment: ie.V2.right });
          }
          OnFullSelected() {
            this.setState({ alignment: ie.V2.full });
          }
          OnSummarySelected() {
            this.setState({ alignment: ie.V2.summary });
          }
          OnOuterDivClickPassDown(r) {}
          render() {
            return (0, s.jsx)(ge.o0, {
              strTitle: (0, l.we)("#EventEditor_InsertYouTube"),
              strDescription: "",
              closeModal: this.props.closeModal,
              onCancel: this.props.closeModal,
              onOK: this.OnYoutubeInsertLink,
              strOKButtonText: (0, l.we)("#EventEditor_InsertYouTube"),
              className: Q().BBCodeEditorInputStyles,
              children: (0, s.jsxs)("div", {
                className: Q().YouTubeInput,
                children: [
                  (0, s.jsx)("div", {
                    className: "DialogInputLabelGroup",
                    children: (0, s.jsxs)("label", {
                      children: [
                        (0, s.jsx)("div", {
                          className: "DialogLabel",
                          children: (0, l.we)("#EventEditor_InsertYouTube_URL"),
                        }),
                        (0, s.jsx)("div", {
                          className: "DialogInput_Wrapper",
                          children: (0, s.jsx)("input", {
                            className: "DialogInput DialogTextInputBase",
                            ref: (r) => {
                              r == null || r.focus();
                            },
                            type: "text",
                            value: this.state.youtubeInput,
                            onChange: this.OnUrlChange,
                            placeholder: (0, l.we)(
                              "#EventEditor_InsertYouTube_Placholder",
                            ),
                          }),
                        }),
                      ],
                    }),
                  }),
                  (0, s.jsxs)("div", {
                    className: "DialogInputLabelGroup",
                    children: [
                      (0, s.jsx)("div", {
                        className: "DialogLabel",
                        children: (0, l.we)(
                          "#EventEditor_InsertYouTube_Position",
                        ),
                      }),
                      (0, s.jsxs)("div", {
                        className: Q().YouTubePreviewInsertOption,
                        onClick: this.OnOuterDivClickPassDown,
                        children: [
                          (0, s.jsx)("input", {
                            type: "radio",
                            name: "YouTubePreviewInsertType",
                            id: ie.V2.left,
                            value: ie.V2.left,
                            checked: this.state.alignment == ie.V2.left,
                            onChange: this.OnLeftSelected,
                          }),
                          (0, s.jsx)("label", {
                            htmlFor: ie.V2.left,
                            children: (0, s.jsx)("span", {
                              children: (0, l.we)(
                                "#EventEditor_InsertYouTube_Left",
                              ),
                            }),
                          }),
                        ],
                      }),
                      (0, s.jsxs)("div", {
                        className: Q().YouTubePreviewInsertOption,
                        onClick: this.OnOuterDivClickPassDown,
                        children: [
                          (0, s.jsx)("input", {
                            type: "radio",
                            name: "YouTubePreviewInsertType",
                            id: ie.V2.right,
                            value: ie.V2.right,
                            checked: this.state.alignment == ie.V2.right,
                            onChange: this.OnRightSelected,
                          }),
                          (0, s.jsx)("label", {
                            htmlFor: ie.V2.right,
                            children: (0, s.jsx)("span", {
                              children: (0, l.we)(
                                "#EventEditor_InsertYouTube_Right",
                              ),
                            }),
                          }),
                        ],
                      }),
                      (0, s.jsxs)("div", {
                        className: Q().YouTubePreviewInsertOption,
                        onClick: this.OnOuterDivClickPassDown,
                        children: [
                          (0, s.jsx)("input", {
                            type: "radio",
                            name: "YouTubePreviewInsertType",
                            id: ie.V2.full,
                            value: ie.V2.full,
                            checked: this.state.alignment == ie.V2.full,
                            onChange: this.OnFullSelected,
                          }),
                          (0, s.jsx)("label", {
                            htmlFor: ie.V2.full,
                            children: (0, s.jsx)("span", {
                              children: (0, l.we)(
                                "#EventEditor_InsertYouTube_Full",
                              ),
                            }),
                          }),
                        ],
                      }),
                      (0, s.jsxs)("div", {
                        className: Q().YouTubePreviewInsertOption,
                        onClick: this.OnOuterDivClickPassDown,
                        children: [
                          (0, s.jsx)("input", {
                            type: "radio",
                            name: "YouTubePreviewInsertType",
                            id: ie.V2.summary,
                            value: ie.V2.summary,
                            checked: this.state.alignment == ie.V2.summary,
                            onChange: this.OnSummarySelected,
                          }),
                          (0, s.jsx)("label", {
                            htmlFor: ie.V2.summary,
                            children: (0, s.jsx)("span", {
                              children: (0, l.we)(
                                "#EventEditor_InsertYouTube_Summary",
                              ),
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            });
          }
        };
        H([u.oI], Pe.prototype, "OnYoutubeInsertLink", 1),
          H([u.oI], Pe.prototype, "OnUrlChange", 1),
          H([u.oI], Pe.prototype, "OnLeftSelected", 1),
          H([u.oI], Pe.prototype, "OnRightSelected", 1),
          H([u.oI], Pe.prototype, "OnFullSelected", 1),
          H([u.oI], Pe.prototype, "OnSummarySelected", 1),
          H([u.oI], Pe.prototype, "OnOuterDivClickPassDown", 1),
          (Pe = H([K.PA], Pe));
        let We = class extends D.Component {
          constructor() {
            super(...arguments),
              Fe(this, "state", { textToDisplay: "", strURL: "" });
          }
          LoadFromTextArea() {
            const { textareaRef: r } = this.props;
            if (r && r.current) {
              let e = ee.getSelectedString(r.current),
                t = We.m_regExp.exec(e);
              t
                ? this.setState({ strURL: t[1], textToDisplay: t[2] })
                : this.setState({ textToDisplay: e });
            }
          }
          componentDidMount() {
            this.LoadFromTextArea();
          }
          onLinkTitleUpdate(r) {
            this.setState({ textToDisplay: r.target.value });
          }
          onLinkURLUpdate(r) {
            this.setState({ strURL: r.target.value });
          }
          onInsertLink() {
            const { strURL: r, textToDisplay: e } = this.state;
            let t = "[url=" + r + "]" + e + "[/url]";
            ee.replaceSelection(this.props.textareaRef.current, t);
          }
          render() {
            return (0, s.jsx)(ge.o0, {
              strTitle: (0, l.we)("#Editor_Link"),
              strDescription: "",
              closeModal: this.props.closeModal,
              onOK: this.onInsertLink,
              onCancel: this.props.closeModal,
              strOKButtonText: (0, l.we)("#EventEditor_InsertLinkURL"),
              className: Q().BBCodeEditorInputStyles,
              children: (0, s.jsxs)("div", {
                className: Q().EventEditorLinkInput,
                children: [
                  (0, s.jsx)("div", {
                    className: "DialogInputLabelGroup",
                    children: (0, s.jsxs)("label", {
                      children: [
                        (0, s.jsx)("div", {
                          className: "DialogLabel",
                          children: (0, l.we)("#EventEditor_LinkDescription"),
                        }),
                        (0, s.jsx)("div", {
                          className: "DialogInput_Wrapper",
                          children: (0, s.jsx)("input", {
                            type: "text",
                            onChange: this.onLinkTitleUpdate,
                            value: this.state.textToDisplay,
                            className: "DialogInput DialogTextInputBase",
                          }),
                        }),
                      ],
                    }),
                  }),
                  (0, s.jsx)("div", {
                    className: "DialogInputLabelGroup",
                    children: (0, s.jsxs)("label", {
                      children: [
                        (0, s.jsx)("div", {
                          className: "DialogLabel",
                          children: (0, l.we)("#EventEditor_LinkURL"),
                        }),
                        (0, s.jsx)("div", {
                          className: "DialogInput_Wrapper",
                          children: (0, s.jsx)("input", {
                            type: "text",
                            onChange: this.onLinkURLUpdate,
                            value: this.state.strURL,
                            className: "DialogInput DialogTextInputBase",
                          }),
                        }),
                      ],
                    }),
                  }),
                ],
              }),
            });
          }
        };
        Fe(We, "m_regExp", new RegExp(/\[url=([^\]]*)\]([^\[\]]+)\[\/url\]/i)),
          H([u.oI], We.prototype, "onLinkTitleUpdate", 1),
          H([u.oI], We.prototype, "onLinkURLUpdate", 1),
          H([u.oI], We.prototype, "onInsertLink", 1),
          (We = H([K.PA], We));
        let Ve = class extends D.Component {
          constructor() {
            super(...arguments),
              Fe(this, "refFirstInput", D.createRef()),
              Fe(this, "state", { imgURL: "", anchorURL: "" });
          }
          componentDidMount() {
            var r;
            (r = this.refFirstInput.current) == null || r.focus();
          }
          OnImageInsert() {
            const { anchorURL: r, imgURL: e } = this.state;
            let t = "",
              o = "";
            r && r.length > 0 && ((t += "[url=" + r + "]"), (o = "[/url]" + o)),
              (t += "[img]" + e),
              (o = "[/img]" + o),
              ee.wrapBBCode(t, o, this.props.textareaRef.current);
          }
          OnImageURLChange(r) {
            this.state.imgURL != r.target.value &&
              this.setState({ imgURL: r.target.value });
          }
          OnAnchorURLChange(r) {
            this.state.anchorURL != r.target.value &&
              this.setState({ anchorURL: r.target.value });
          }
          render() {
            const { imgURL: r, anchorURL: e } = this.state;
            return (0, s.jsx)(ge.o0, {
              strTitle: (0, l.we)("#EventEditor_InsertImage_Title"),
              strDescription: "",
              closeModal: this.props.closeModal,
              onCancel: this.props.closeModal,
              onOK: this.OnImageInsert,
              strOKButtonText: (0, l.we)("#EventEditor_InsertImage_Title"),
              className: Q().BBCodeEditorInputStyles,
              children: (0, s.jsxs)("div", {
                className: Q().EventEditorLinkInput,
                children: [
                  (0, s.jsx)("p", {
                    children: (0, l.we)("#EventEditor_InsertImage_Desc"),
                  }),
                  (0, s.jsx)("div", {
                    className: "DialogInputLabelGroup",
                    children: (0, s.jsxs)("label", {
                      children: [
                        (0, s.jsx)("div", {
                          className: "DialogLabel",
                          children: (0, l.we)("#EventEditor_InsertImage_URL"),
                        }),
                        (0, s.jsx)("div", {
                          className: "DialogInput_Wrapper",
                          children: (0, s.jsx)("input", {
                            className: "DialogInput DialogTextInputBase",
                            type: "text",
                            value: r,
                            onChange: this.OnImageURLChange,
                            placeholder: (0, l.we)(
                              "#EventEditor_InsertImage_Placeholder",
                            ),
                            ref: this.refFirstInput,
                          }),
                        }),
                      ],
                    }),
                  }),
                  (0, s.jsx)("div", {
                    className: "DialogInputLabelGroup",
                    children: (0, s.jsxs)("label", {
                      children: [
                        (0, s.jsx)("div", {
                          className: "DialogLabel",
                          children: (0, l.we)(
                            "#EventEditor_InsertImage_Anchor",
                          ),
                        }),
                        (0, s.jsx)("div", {
                          className: "DialogInput_Wrapper",
                          children: (0, s.jsx)("input", {
                            className: "DialogInput DialogTextInputBase",
                            type: "text",
                            value: e,
                            onChange: this.OnAnchorURLChange,
                            placeholder: (0, l.we)(
                              "#EventEditor_InsertImage_Placeholder",
                            ),
                          }),
                        }),
                      ],
                    }),
                  }),
                ],
              }),
            });
          }
        };
        H([u.oI], Ve.prototype, "OnImageInsert", 1),
          H([u.oI], Ve.prototype, "OnImageURLChange", 1),
          H([u.oI], Ve.prototype, "OnAnchorURLChange", 1),
          (Ve = H([K.PA], Ve));
        const is = (r) => {
          const [e, t] = D.useState(""),
            [o, h] = D.useState(""),
            [T, A] = D.useState(""),
            [F, ae] = D.useState(""),
            [Ae, Qe] = D.useState(void 0),
            [Ee, Ne] = D.useState(void 0),
            { data: Me } = Gt(),
            { isLoading: De, data: xe } = (0, pt.js)(
              Ee == null ? void 0 : Ee.GetAccountID(),
            ),
            Xe = () => {
              let ve = `[speaker name="${e.trim()}"`;
              if (
                (o.trim().length > 0 && (ve += ` title="${o}"`),
                T.trim().length > 0 && (ve += ` company="${T}"`),
                Ae)
              ) {
                const Ge =
                  yt.lw + "/" + Ae.clanAccountID + "/" + x.zU.GetHashAndExt(Ae);
                ve += ` photo="${Ge}"`;
              }
              Ee && (ve += ` steamid="${Ee.ConvertTo64BitString()}"`),
                (ve += `]${F}[/speaker]`),
                ee.replaceSelection(r.textareaRef.current, ve);
            },
            Ye = e.trim().length != 0 && F.trim().length != 0,
            Ze = 184;
          return (0, s.jsx)(ge.o0, {
            strTitle: (0, l.we)("#EventEditor_AddSpeaker"),
            strDescription: (0, l.we)("#EventEditor_AddSpeaker_Desc"),
            closeModal: r.closeModal,
            onCancel: r.closeModal,
            bOKDisabled: !Ye,
            onOK: Xe,
            className: Q().BBCodeEditorInputStyles,
            children: (0, s.jsxs)("div", {
              className: Q().InsertSpeakerCtn,
              children: [
                (0, s.jsx)(N.pd, {
                  type: "text",
                  label: (0, l.we)("#EventEditor_AddSpeaker_Name"),
                  value: e,
                  onChange: (ve) => t(ve.target.value),
                  focusOnMount: !0,
                }),
                (0, s.jsxs)("div", {
                  className: Q().TitleGroup,
                  children: [
                    (0, s.jsx)(N.pd, {
                      type: "text",
                      label: (0, l.we)("#EventEditor_AddSpeaker_Title"),
                      value: o,
                      onChange: (ve) => h(ve.target.value),
                    }),
                    (0, s.jsx)(N.pd, {
                      type: "text",
                      label: (0, l.we)("#EventEditor_AddSpeaker_Company"),
                      value: T,
                      onChange: (ve) => A(ve.target.value),
                    }),
                  ],
                }),
                (0, s.jsx)(et.he, {
                  toolTipContent: (0, l.we)(
                    "#EventEditor_AssociateSteamAccount_ttip",
                  ),
                  children: (0, s.jsxs)("div", {
                    className: "DialogLabel",
                    children: [
                      (0, l.we)("#EventEditor_AssociateSteamAccount"),
                      " (?)",
                    ],
                  }),
                }),
                (0, s.jsxs)("div", {
                  children: [
                    De &&
                      (0, s.jsx)(qe.t, {
                        string: (0, l.we)("#Loading"),
                        size: "small",
                      }),
                    Ee &&
                      xe &&
                      (0, s.jsxs)("a", {
                        href:
                          Le.TS.COMMUNITY_BASE_URL +
                          "profiles/" +
                          Ee.ConvertTo64BitString(),
                        target: "_blank",
                        children: [
                          xe
                            ? (0, s.jsx)("img", {
                                style: { marginRight: "8px" },
                                src: xe.avatar_url,
                              })
                            : null,
                          xe ? xe.m_strPlayerName : null,
                        ],
                      }),
                    (0, s.jsxs)("div", {
                      className: Q().AssociateRowCtn,
                      children: [
                        (0, s.jsx)(N.$n, {
                          onClick: () => Ne(new j.b(Le.iA.steamid)),
                          children: (0, l.we)(
                            "#EventEditor_SteamAccount_addme",
                          ),
                        }),
                        (0, s.jsx)(N.$n, {
                          onClick: (ve) =>
                            (0, $.lX)(
                              (0, s.jsx)(as, {
                                friends: Me != null ? Me : [],
                                setSteamID: Ne,
                              }),
                              ve,
                            ),
                          children: (0, l.we)(
                            "#EventEditor_SteamAccount_addfriend",
                          ),
                        }),
                        (0, s.jsx)(N.$n, {
                          onClick: () => Ne(void 0),
                          children: (0, l.we)(
                            "#EventEditor_SteamAccount_clear",
                          ),
                        }),
                      ],
                    }),
                  ],
                }),
                (0, s.jsxs)("div", {
                  className: Q().PhotoCtn,
                  children: [
                    (0, s.jsx)("div", {
                      className: "DialogLabel",
                      children: (0, l.we)("#EventEditor_ChoosePhoto"),
                    }),
                    (0, s.jsx)(Zt, {
                      clanSteamID: r.clanSteamID,
                      inputClanImage: Ae,
                      setImage: Qe,
                      nWidth: Ze,
                      nHeight: Ze,
                    }),
                  ],
                }),
                (0, s.jsxs)("div", {
                  className: Q().AboutCtn,
                  children: [
                    (0, s.jsx)("div", {
                      className: "DialogLabel",
                      children: (0, l.we)("#EventEditor_AddSpeaker_About"),
                    }),
                    (0, s.jsx)(N.Cl, {
                      value: F,
                      onChange: (ve) => ae(ve.target.value),
                      rows: 8,
                      cols: 80,
                      nMinHeight: 40,
                      placeholder: (0, l.we)(
                        "#EventEditor_AddSpeaker_About_Placeholder",
                      ),
                    }),
                  ],
                }),
                (0, s.jsxs)("div", {
                  className: Q().PreviewCtn,
                  children: [
                    (0, s.jsx)("div", {
                      className: "DialogLabel",
                      children: (0, l.we)("#Button_Preview"),
                    }),
                    (0, s.jsx)(Wt.$k, {
                      company: T,
                      name: e,
                      title: o,
                      bioString: F,
                      photo: Ae ? Ae.url : void 0,
                    }),
                  ],
                }),
              ],
            }),
          });
        };
        function as(r) {
          const { friends: e, setSteamID: t } = r;
          return (0, s.jsx)("div", {
            className: Q().DropDownScroll,
            children: e.map((o) =>
              (0, s.jsx)(ns, { steamid: o, setSteamID: t }, o),
            ),
          });
        }
        function ns(r) {
          const { steamid: e, setSteamID: t } = r,
            { data: o } = (0, pt.js)(e);
          return (0, s.jsx)(Ht.kt, {
            onSelected: () => t(new j.b(e)),
            children: (0, s.jsxs)("div", {
              style: { display: "flex", alignItems: "center" },
              children: [
                o &&
                  (0, s.jsx)("img", {
                    className: Et().WhitelistAvatar,
                    src: o.avatar_url,
                  }),
                o == null ? void 0 : o.m_strPlayerName,
              ],
            }),
          });
        }
        let ke = class extends D.Component {
          constructor(r) {
            super(r),
              Fe(this, "m_isMounted", !1),
              Fe(this, "m_bAppend", !1),
              (this.state = { bPreserveNewLines: !1, strHTMLData: "" });
          }
          componentDidMount() {
            this.m_isMounted = !0;
          }
          componentWillUnmount() {
            this.m_isMounted = !1;
          }
          OnConvertAndOverriteHTML() {
            (this.m_bAppend = !1), this.ConvertBBCode();
          }
          OnConvertAndAppendHTML() {
            (this.m_bAppend = !0), this.ConvertBBCode();
          }
          async ConvertHtmlToBBCode(r, e) {
            let t = new URLSearchParams();
            return (
              t.append("content", r),
              t.append("preserve_newlines", e ? "1" : "0"),
              (
                await R().post(
                  Le.TS.COMMUNITY_BASE_URL + "/actions/ConvertHTMLToBBCode",
                  t,
                )
              ).data.content
            );
          }
          ConvertBBCode() {
            this.setState({ bConverting: !0 }),
              this.ConvertHtmlToBBCode(
                this.state.strHTMLData,
                this.state.bPreserveNewLines,
              )
                .then((r) => {
                  this.m_isMounted &&
                    (this.m_bAppend
                      ? ee.append(r, this.props.textareaRef.current)
                      : ee.overwrite(r, this.props.textareaRef.current),
                    this.setState({
                      bConverting: !1,
                      bFinishedConverting: !0,
                    }));
                })
                .catch((r) => {
                  (0, me.pg)(
                    (0, s.jsx)(ge.KG, {
                      strTitle: (0, l.we)("#EventEditor_ConvertHTML_Error"),
                      strDescription: (0, l.we)(
                        "#EventEditor_ConvertHTML_Error_Desc",
                        r.response && r.response.data ? r.response.data.msg : r,
                      ),
                      bAlertDialog: !0,
                      bDestructiveWarning: !0,
                    }),
                    this.props.ownerWindow,
                    { strTitle: (0, l.we)("#EventEditor_ConvertHTML_Error") },
                  );
                });
          }
          OnCheckboxChange(r) {
            let e = r.target.checked;
            e != this.state.bPreserveNewLines &&
              this.setState({ bPreserveNewLines: e });
          }
          OnTextAreaChange(r) {
            this.setState({ strHTMLData: r.currentTarget.value });
          }
          render() {
            const { closeModal: r } = this.props;
            return this.state.bConverting
              ? (0, s.jsx)(ge.o0, {
                  strTitle: (0, l.we)("#EventEditor_ImportFromHTML"),
                  strDescription: (0, l.we)(
                    "#EventEditor_ImportFromHTML_ConversionInProgress",
                  ),
                  closeModal: r,
                  bAlertDialog: !0,
                  onOK: r,
                  onCancel: r,
                  children: (0, s.jsx)(qe.t, {}),
                })
              : this.state.bFinishedConverting
                ? (0, s.jsx)(ge.o0, {
                    strTitle: (0, l.we)("#EventEditor_ImportFromHTML"),
                    strDescription: (0, l.we)(
                      "#EventEditor_ImportFromHTML_ConvertFinished",
                    ),
                    closeModal: r,
                    bAlertDialog: !0,
                    onOK: r,
                    onCancel: r,
                  })
                : (0, s.jsx)(ge.eV, {
                    title: (0, l.we)("#EventEditor_ImportFromHTML"),
                    onOK: this.OnConvertAndOverriteHTML,
                    onCancel: r,
                    className: Q().BBCodeEditorInputStyles,
                    children: (0, s.jsxs)(N.nB, {
                      children: [
                        (0, s.jsx)(N.a3, {
                          children: (0, s.jsxs)("div", {
                            className: (0, S.A)(
                              fe().FlexColumnContainer,
                              Q().ImportHTMLCtn,
                            ),
                            children: [
                              (0, s.jsx)("div", {
                                className: fe().FlexColumnContainer,
                                children: (0, l.PP)(
                                  "#EventEditor_ImportFromHTML_ConvertDescription",
                                  (0, s.jsx)("a", {
                                    target: Le.TS.IN_CLIENT ? void 0 : "_blank",
                                    href: "https://partner.steamgames.com/doc/marketing/event_tools/import",
                                    children: (0, l.we)(
                                      "#EventEditor_ImportFromHTML_ConvertLearn",
                                    ),
                                  }),
                                ),
                              }),
                              (0, s.jsx)("textarea", {
                                value: this.state.strHTMLData,
                                placeholder: (0, l.we)(
                                  "#EventEditor_ImportFromHTML_Instruction",
                                ),
                                className: Q().ImportHTMLTextArea,
                                onChange: this.OnTextAreaChange,
                                ref: (e) => {
                                  e == null || e.focus();
                                },
                              }),
                              (0, s.jsxs)("div", {
                                className: Q().ImportHTMLCheckBoxLine,
                                children: [
                                  (0, s.jsx)("input", {
                                    id: "ImportFromHTMLNewLines",
                                    type: "checkbox",
                                    checked: this.state.bPreserveNewLines,
                                    onChange: this.OnCheckboxChange,
                                  }),
                                  (0, s.jsxs)("label", {
                                    htmlFor: "ImportFromHTMLNewLines",
                                    children: [
                                      (0, l.we)(
                                        "#EventEditor_ImportFromHTML_PreserveNewlines",
                                      ),
                                      (0, s.jsx)(ts.o, {
                                        tooltip: (0, l.we)(
                                          "#EventEditor_ImportFromHTML_PreserveNewlines_Hint",
                                        ),
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              (0, s.jsx)("div", {
                                children: (0, l.we)(
                                  "#EventEditor_ImportFromHTML_ConvertToBBCode",
                                ),
                              }),
                            ],
                          }),
                        }),
                        (0, s.jsx)(N.wi, {
                          children: (0, s.jsx)(N.VQ, {
                            onCancel: () => (r == null ? void 0 : r()),
                            strOKText: (0, l.we)("#Button_Overwrite"),
                            onUpdate: this.OnConvertAndAppendHTML,
                            strUpdateText: (0, l.we)("#Button_Append"),
                          }),
                        }),
                      ],
                    }),
                  });
          }
        };
        H([u.oI], ke.prototype, "OnConvertAndOverriteHTML", 1),
          H([u.oI], ke.prototype, "OnConvertAndAppendHTML", 1),
          H([u.oI], ke.prototype, "OnCheckboxChange", 1),
          H([u.oI], ke.prototype, "OnTextAreaChange", 1),
          (ke = H([K.PA], ke));
      },
      55436: (J, te, n) => {
        "use strict";
        n.d(te, { r: () => B, z: () => b });
        var s = n(7850),
          I = n(90626),
          R = n(19316),
          K = n(25792),
          D = n(2801),
          k = n(18210),
          $ = n(85599),
          G = n(17618),
          j = n.n(G),
          x = n(53424);
        const b = (U) => {
            const { clanSteamID: P, fnImageSelectCallBack: g } = U,
              [p, C] = (0, I.useState)(""),
              S = (0, x.mr)(U.clanSteamID.GetAccountID()),
              y = () => U.closeModal && U.closeModal(),
              L = x.pU.GetFilteredClanImages(P, p),
              m = (a) => {
                g(a), y();
              };
            return (0, s.jsx)(K.tH, {
              children: (0, s.jsx)(D.x_, {
                onEscKeypress: y,
                children: (0, s.jsxs)(R.UC, {
                  children: [
                    (0, s.jsx)(R.Y9, {
                      children: (0, k.we)("#ClanImageChooser_Title"),
                    }),
                    (0, s.jsx)(R.nB, {
                      children: (0, s.jsxs)(R.a3, {
                        children: [
                          (0, s.jsx)("p", {
                            children: (0, k.we)("#ClanImageChooser_Desc"),
                          }),
                          (0, s.jsx)(R.pd, {
                            placeholder: (0, k.we)("#ClanImageChooser_Search"),
                            value: p,
                            onChange: (a) => C(a.currentTarget.value),
                          }),
                          (0, s.jsx)("div", {
                            className: G.ImagesOuterContainer,
                            children: S
                              ? (0, s.jsx)($.t, {
                                  size: "medium",
                                  string: (0, k.we)("#Loading"),
                                })
                              : L.length > 0
                                ? L.map((a) =>
                                    (0, s.jsx)(
                                      u,
                                      {
                                        clanImage: a,
                                        searchStringHilight: p,
                                        fnImageClick: m,
                                      },
                                      "ci" + a.image_hash,
                                    ),
                                  )
                                : p.trim().length == 0
                                  ? (0, s.jsx)("div", {
                                      children: (0, k.we)(
                                        "#ClanImageChooser_None",
                                      ),
                                    })
                                  : (0, s.jsx)("div", {
                                      children: (0, k.we)(
                                        "#EventCalendar_GameSearch_NoneFound",
                                      ),
                                    }),
                          }),
                        ],
                      }),
                    }),
                    (0, s.jsx)(R.wi, {
                      children: (0, s.jsx)(R.$n, {
                        onClick: y,
                        children: (0, k.we)("#Button_Cancel"),
                      }),
                    }),
                  ],
                }),
              }),
            });
          },
          u = (U) => {
            const { clanImage: P, searchStringHilight: g, fnImageClick: p } = U;
            let C = P.file_name ? P.file_name : "",
              S = B(g, C, String(P.imageid), G.Hilight);
            return (0, s.jsxs)("div", {
              className: G.ImageContainer,
              children: [
                (0, s.jsx)("div", {
                  className: G.Image,
                  style: { backgroundImage: `url( '${P.thumb_url}' )` },
                  onDoubleClick: () => p(P),
                }),
                (0, s.jsx)("div", {
                  className: G.ImageFilename,
                  title: C,
                  children: S,
                }),
              ],
            });
          };
        function B(U, P, g, p) {
          let C = [];
          if (U.length > 0) {
            let S = P.toLocaleLowerCase();
            for (let y = 0; y < P.length; ) {
              let L = S.indexOf(U, y);
              if (L < 0) {
                C.push(
                  (0, s.jsx)(
                    "span",
                    { children: P.substring(y) },
                    g + "_" + String(y),
                  ),
                );
                break;
              } else
                y < L &&
                  C.push(
                    (0, s.jsx)(
                      "span",
                      { children: P.substring(y, L) },
                      g + "_" + String(y),
                    ),
                  ),
                  C.push(
                    (0, s.jsx)(
                      "span",
                      { className: p, children: P.substr(L, U.length) },
                      g + "_" + String(y),
                    ),
                  ),
                  (y = L + U.length);
            }
          } else C.push((0, s.jsx)("span", { children: P }, g + "_null"));
          return C;
        }
      },
      24806: (J, te, n) => {
        "use strict";
        n.d(te, { Ng: () => p });
        var s = n(7850),
          I = n(75844),
          R = n(90626),
          K = n(99412),
          D = n(32093),
          k = n(50109),
          $ = n(95695),
          G = n.n($),
          j = n(36707),
          x = n(18210),
          b = n(92264),
          u = n(54963),
          B = n(71421),
          U = Object.defineProperty,
          P = Object.getOwnPropertyDescriptor,
          g = (y, L, m, a) => {
            for (
              var i = a > 1 ? void 0 : a ? P(L, m) : L, c = y.length - 1, d;
              c >= 0;
              c--
            )
              (d = y[c]) && (i = (a ? d(L, m, i) : d(i)) || i);
            return a && i && U(L, m, i), i;
          };
        let p = class extends R.Component {
          GenerateLanguageOptions() {
            let y = [];
            const {
              fnFilterLanguage: L,
              fnLangHasData: m,
              fnLastUpdateRTime: a,
              fnIsLangSupported: i,
            } = this.props;
            this.props.bAllowUnsetOption &&
              y.push(
                (0, s.jsx)(
                  "option",
                  {
                    value: K.xPp,
                    children: (0, x.we)("#language_selection_none"),
                  },
                  "langpicker_unset",
                ),
              );
            let c = new Array();
            const d = this.props.realms || [D.TU.k_ESteamRealmGlobal];
            for (const f of x.A0.GetLanguageListForRealms(d)) {
              if (L && !L(f)) continue;
              const M = (0, K.LgB)(f),
                E = (0, x.we)("#Language_" + M),
                W = !!(i && i(f));
              c.push({ eLang: f, sLocName: E, bSupported: W });
            }
            c.sort((f, M) =>
              f.bSupported != M.bSupported
                ? f.bSupported
                  ? -1
                  : 1
                : f.sLocName.localeCompare(M.sLocName),
            );
            let _ = !1;
            for (const f of c) {
              f.bSupported != _ &&
                (y.push(
                  (0, s.jsx)(
                    "option",
                    {
                      className: G().SupportedGroupLabel,
                      disabled: !0,
                      children: (0, x.we)(
                        f.bSupported
                          ? "#LanguageGroup_Supported"
                          : "#LanguageGroup_Unsupported",
                      ),
                    },
                    f.bSupported ? "SupportedGroup" : "UnsupportedGroup",
                  ),
                ),
                (_ = f.bSupported));
              const M = m && m(f.eLang),
                E = a && a(f.eLang);
              let W = f.sLocName;
              E &&
                E !== 0 &&
                ((W += " "),
                (W += (0, x.we)(
                  "#Language_Last_Update",
                  (0, x.$z)(E) +
                    " @ " +
                    (0, b.KC)(E, { bForce24HourClock: !1 }),
                ))),
                y.push(
                  (0, s.jsx)(
                    "option",
                    {
                      value: f.eLang,
                      className: (0, j.A)(
                        { [G().LanguageWithContent]: M },
                        f.bSupported
                          ? G().SupportedLanguage
                          : G().UnsupportedLanguage,
                      ),
                      children: W,
                    },
                    "langpicker" + f.eLang + (M ? "_hasdata" : ""),
                  ),
                );
            }
            return y;
          }
          OnLanguageChange(y) {
            const { fnOnLanguageChanged: L, selectedLang: m } = this.props;
            let a = Number.parseInt(y.currentTarget.value);
            a != m && L && L(a);
          }
          render() {
            const { selectedLang: y, bDisabled: L, strTooltip: m } = this.props;
            let a = this.GenerateLanguageOptions();
            return (0, s.jsx)(B.he, {
              toolTipContent: m,
              children: (0, s.jsx)("select", {
                value: y,
                onChange: this.OnLanguageChange,
                disabled: L,
                children: a,
              }),
            });
          }
        };
        g([u.oI], p.prototype, "OnLanguageChange", 1), (p = g([I.PA], p));
        function C(y) {
          const [L, m] = useObserver(() => [
            CEditorLocStore.Get().GetHasLocalizationContext(),
            CEditorLocStore.Get().GetCurEditLanguage(),
          ]);
          return jsx(p, {
            selectedLang: m,
            fnLangHasData: CEditorLocStore.Get().BHasLanguageData,
            fnOnLanguageChanged: CEditorLocStore.Get().SetCurEditLanguage,
            bDisabled: !L,
            strTooltip: L ? void 0 : Localize("#Localization_EditorNotInFocus"),
          });
        }
        function S(y) {
          const { fnLangHasData: L } = y;
          React.useEffect(
            () => (
              CEditorLocStore.Get().SetHasLocalizationContext(!0),
              () => CEditorLocStore.Get().SetHasLocalizationContext(!1)
            ),
            [],
          );
          const m = useObserver(() => {
            const a = [];
            for (let i = k_ELanguage_English; i < k_ELanguage_MAX; ++i)
              a[i] = !!(L && L(i));
            return a;
          });
          return (
            React.useEffect(() => CEditorLocStore.Get().SetHasLanguage(m), [m]),
            jsx(Fragment, {})
          );
        }
      },
      21254: (J, te, n) => {
        "use strict";
        n.d(te, { q: () => S, t: () => L });
        var s = n(7850),
          I = n(90626),
          R = n(25279),
          K = n(98112),
          D = n(19316),
          k = n(79167),
          $ = n(2801),
          G = n(36707),
          j = n(18210),
          x = n(54963),
          b = n(50666),
          u = n.n(b),
          B = n(82734),
          U = Object.defineProperty,
          P = Object.getOwnPropertyDescriptor,
          g = (m, a, i) =>
            a in m
              ? U(m, a, {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: i,
                })
              : (m[a] = i),
          p = (m, a, i, c) => {
            for (
              var d = c > 1 ? void 0 : c ? P(a, i) : a, _ = m.length - 1, f;
              _ >= 0;
              _--
            )
              (f = m[_]) && (d = (c ? f(a, i, d) : f(d)) || d);
            return c && d && U(a, i, d), d;
          },
          C = (m, a, i) => g(m, typeof a != "symbol" ? a + "" : a, i);
        class S extends I.Component {
          constructor() {
            super(...arguments),
              C(this, "state", {
                region: {
                  xPosPct: 0,
                  yPosPct: 0,
                  widthPct:
                    (this.GetDestWidth() / this.props.uploadFile.width) * 100,
                  heightPct:
                    (this.GetDestHeight() / this.props.uploadFile.height) * 100,
                },
              });
          }
          async OnCrop() {
            var a, i;
            const c = this.props.uploadFile.GetCanvasImageSource();
            c &&
              (await y(
                this.props.uploadFile,
                c,
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
              (i = (a = this.props).closeModal) == null || i.call(a);
          }
          UpdateCrop(a, i) {
            this.setState({ region: i });
          }
          GetDestWidth() {
            const { uploadFile: a, forceResolution: i } = this.props;
            if (i) return i.width;
            const c = a.GetCurrentImageOption();
            if (!c) return 0;
            const d = R.Fj[c.artworkType].width;
            return c ? (0, R.qj)(d) : 0;
          }
          GetDestHeight() {
            const { uploadFile: a, forceResolution: i } = this.props;
            if (i) return i.width;
            const c = a.GetCurrentImageOption();
            if (!c) return 0;
            const d = R.Fj[c.artworkType].height;
            return c ? (0, R.qj)(d) : 0;
          }
          GetLargestBoxThatFits(a, i, c, d) {
            let _ = c,
              f = (_ * i) / Math.max(a, 1);
            return (
              f > d && ((f = d), (_ = (f * a) / Math.max(i, 1))),
              { width: _, height: f }
            );
          }
          GetPreviewWindowStyle() {
            const { region: a } = this.state,
              i = this.GetLargestBoxThatFits(
                this.GetDestWidth(),
                this.GetDestHeight(),
                500,
                150,
              ),
              c = i.width,
              d = i.height,
              _ = 1 / Math.max(a.widthPct / 100, 1e-4),
              f = 1 / Math.max(a.heightPct / 100, 1e-4),
              M = (this.props.uploadFile.width * a.xPosPct) / 100,
              E = (this.props.uploadFile.height * a.yPosPct) / 100,
              W = (c * _) / this.props.uploadFile.width,
              v = (d * f) / this.props.uploadFile.height,
              O = -M * W,
              l = -E * v;
            return {
              width: c,
              height: d,
              backgroundPosition: `${O}px ${l}px`,
              backgroundSize: `${100 * _}% ${100 * f}%`,
              backgroundImage: `url(${this.props.uploadFile.dataUrl})`,
            };
          }
          render() {
            const a = (this.GetDestWidth() / this.props.uploadFile.width) * 100,
              i = (this.GetDestHeight() / this.props.uploadFile.height) * 100,
              c = this.GetLargestBoxThatFits(
                this.props.uploadFile.width,
                this.props.uploadFile.height,
                800,
                500,
              );
            return (0, s.jsx)($.x_, {
              onEscKeypress: this.props.closeModal,
              bDisableBackgroundDismiss: !0,
              children: (0, s.jsxs)("div", {
                className: (0, G.A)("DialogContent", "_DialogCenterVertically"),
                children: [
                  (0, s.jsx)(D.iK, {
                    children: (0, j.we)(
                      "#ImageUpload_CropModalTitleDims",
                      this.GetDestWidth(),
                      this.GetDestHeight(),
                    ),
                  }),
                  (0, s.jsx)("div", {
                    className: (0, G.A)("DialogBodyText"),
                    children: (0, j.we)("#ImageUpload_CropModalDescription"),
                  }),
                  (0, s.jsxs)("div", {
                    className: b.CropImage,
                    style: { width: c.width, height: c.height },
                    children: [
                      (0, s.jsx)("img", {
                        style: {
                          maxWidth: "100%",
                          maxHeight: "100%",
                          objectFit: "contain",
                        },
                        src: this.props.uploadFile.dataUrl,
                      }),
                      (0, s.jsx)(k.I, {
                        bLockAspectRatio: !0,
                        bDisableLink: !0,
                        index: 0,
                        updateFn: this.UpdateCrop,
                        xPosPct: 0,
                        yPosPct: 0,
                        widthMinPct: a,
                        heightMinPct: i,
                        widthPct: a,
                        heightPct: i,
                      }),
                    ],
                  }),
                  (0, s.jsxs)("div", {
                    className: b.CropPreviewGroup,
                    children: [
                      (0, s.jsx)("div", {
                        className: b.CropPreviewLabel,
                        children: (0, j.we)("#ImageUpload_CropPreview"),
                      }),
                      (0, s.jsx)("div", {
                        style: this.GetPreviewWindowStyle(),
                      }),
                    ],
                  }),
                  (0, s.jsx)(D.jn, {
                    onClick: this.OnCrop,
                    children: (0, j.we)("#ImageUpload_CropAndContinue"),
                  }),
                ],
              }),
            });
          }
        }
        p([x.oI], S.prototype, "OnCrop", 1),
          p([x.oI], S.prototype, "UpdateCrop", 1);
        async function y(m, a, i, c, d, _, f, M, E) {
          return new Promise((W, v) => {
            const O = L(E);
            if (!O) {
              v("Invalid format provided");
              return;
            }
            const l = document.createElement("canvas");
            (l.width = f), (l.height = M);
            const Y = 0,
              se = 0,
              X = l.getContext("2d");
            X == null || X.drawImage(a, i, c, d, _, Y, se, f, M),
              l.toBlob((ye) => {
                const q = l.toDataURL(O);
                if (E !== K.bg.dU && q.startsWith("data:image/png")) {
                  v("Unable to encode into the requested file format");
                  return;
                }
                if (!ye) {
                  v("Unable to apply crop into image");
                  return;
                }
                (m.file = (0, B.pE)(ye, m.filename)),
                  (m.width = f),
                  (m.height = M),
                  (m.dataUrl = q),
                  (m.uploadTime = Date.now()),
                  (m.bCropped = !0),
                  W();
              });
          });
        }
        function L(m) {
          switch (m) {
            case K.bg.dU:
              return "image/png";
            case K.bg.iS:
              return "image/jpeg";
          }
        }
      },
      99312: (J) => {
        J.exports = {
          DragTarget: "_2sUvh2ZpsDAw1xNqgRBELg",
          DragOnTopOfMe: "_1mvpIyLL0-Pd4QMIoRXHtu",
          DescriptionCtn: "_3DQEBNkYGY3hyLFAjhtq7V",
          EventEditorLinkInput: "_25nbuIEmk-BBWxsSvWGG1n",
          DefaultEditor: "NENu2K19GJmLf1Asga-WF",
          ImportHTMLCtn: "_3sVZHF23hli8ijIwtMs8oU",
          ImportHTMLTextArea: "DHbRFUDVAeXGluFH-smoE",
          ImportHTMLConvertButtons: "lnyZaHhcGtBzDU0SMlFd1",
          ImportHTMLCheckBoxLine: "_3R3FNRLSeiOwBgELGjSPbz",
          OptionRow: "_2Y3MLEmGvWMI8BoNZgCllJ",
          TextEditorToolBarContainer: "_2bOpQtX5QAuQxfGhEJ_iYg",
          EmoteOuter: "_1x3UOXJkizqKhkssRfFjSS",
          YouTubeInput: "_3WXTC22teDkm8BMc01ZTLA",
          YouTubePreviewInsertOption: "_6ocliVvrdQxHPu-upv6-s",
          DropDownScroll: "P0-tbY3743fHY8SAzfF6b",
          InsertSpeakerCtn: "_2f-6Yv5h7xjUcZCrepnQhg",
          TitleGroup: "_1ddLhT39tQNuR4ljq6Nfg5",
          AssociateRowCtn: "_2HeY5m9J-kxRVzGn8dAwv5",
          PhotoCtn: "_2-f4CX_EyXfhRUmPdIey4w",
          AboutCtn: "_3hF9cNUOsfV0BkzEaWn7FM",
          PreviewCtn: "_VCRyh7nyN-2xDV6yH6Sg",
          BBCodeEditorInputStyles: "F506h2OVFDcZeXFtyqthY",
        };
      },
      34510: (J) => {
        J.exports = {
          BBCode_Toggle: "_3dX8-PpYvSNsGv4k5lvP-R",
          Active: "_2vTzhbuJFb9_vHvquo2L-L",
          BBCode: "_1pH9CKzm5VpicOgzyWpsy_",
        };
      },
      64233: (J) => {
        J.exports = { Image: "_1po_jxHTSix3Li3w5ZnMBB" };
      },
      79786: (J) => {
        J.exports = {
          Emoticon_Toggle: "Y5J3nttqNZsLax6MbnH-L",
          Active: "YCbwLzK9cJ7QissjKq11n",
          Emoticon: "_2o57_fRPxv5_x6BkjL_cgc",
        };
      },
      17618: (J) => {
        J.exports = {
          ImagesOuterContainer: "_3A8RGZO2pwg1yKDAdFqp9r",
          Hilight: "_1v_zQLXgFsvon1SwxrWjE-",
          ImageContainer: "_2ti3yMwzfkGoiW68FuNjTG",
          Image: "y902_9A0Wj5bTshbt4xRb",
          ImageFilename: "_2jzLZXXxgDMMcA9X0QDSdg",
        };
      },
      41609: (J) => {
        J.exports = {
          WhitelistCtn: "_1UhmxrINvvaNnHzhCPoill",
          WhitelistRow: "_28TC1EYm0jlWPjyk89xXCL",
          WhitelistNumber: "IY3dF3eWXX1OmE8oYcQKp",
          Disabled: "_2VzE-3UQEHXyAext8t7gLW",
          Grabbing: "_1vSZ5gJndAOamRhVGni8HG",
          DragActive: "_31uDZXKZQlYMd8FK9xdaJb",
          Dropped: "_3bfDVSvzMDkk4s1j0Vw8jI",
          JumpToSection: "oABTo2lkoYYI5YMYaeq_Q",
          BeingDragged: "_3y7I4DL9Hua5OhZ4HgcBB5",
          DragGhost: "_61nYWo98IhSjR8PWtQX9O",
          Grabbable: "riuelIz655g_IBddWfLQ-",
          DisabledGrab: "_2K0C_m1AZvB6yeNaEXXjDD",
          WhitelistAvatar: "_3DGjmH9KW9BAXsEYwH1WpE",
          ButtonCtn: "_1hSqlvDTyj9P6eWTHXutUt",
          DragHighlightContainer: "_2jRMC5JVSK6dsktYus9Gjf",
          DragHighlight: "Y9ryg1Npznt3dpkr7BGp1",
        };
      },
      77700: (J) => {
        J.exports = {
          narrowWidth: "500px",
          mentionDialogPosition: "_3isL0ZmZcmPqrXDdNiNSsm",
          mentionDialog: "_1QU3cLCGXCmYTUvjYiqqz6",
          mentionSearchText: "_1xVcZo7UqD1Idiz3hcGoHg",
          suggestOption: "vquL9mspYzz2tBtxrzqw9",
          mentionSearchOption: "_3O0sMruBIaruOmKJLJre-J",
          manyMatches: "_1cweL4uxVeoeKoymO9IuaT",
          selected: "boNOGnexLhWO9Nd0e6-0A",
          nickname: "_2dKJqMZUnKQIInZReBkcRI",
          mentionSearchMatch: "_2_0t_pDYqkDefMC0gDZV8G",
        };
      },
      50666: (J) => {
        J.exports = {
          CropImage: "_3qfqTaQ35U6AO3FNeijcFV",
          CropPreviewGroup: "_1RI-QM2ZjK9MaVjeCLE_LF",
          CropPreviewLabel: "_3_zyLDUyxZNyexfX3kNOPv",
        };
      },
      44483: (J, te, n) => {
        "use strict";
        n.d(te, { A: () => s });
        const s =
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyBpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYwIDYxLjEzNDc3NywgMjAxMC8wMi8xMi0xNzozMjowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNSBXaW5kb3dzIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkYyNjlFOEM1MjJEMzExRTJCNTVBQkZGOUQyOTI0ODU5IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkYyNjlFOEM2MjJEMzExRTJCNTVBQkZGOUQyOTI0ODU5Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6RjI2OUU4QzMyMkQzMTFFMkI1NUFCRkY5RDI5MjQ4NTkiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6RjI2OUU4QzQyMkQzMTFFMkI1NUFCRkY5RDI5MjQ4NTkiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4IrEPeAAABJ0lEQVR42mL8//8/AzmABUScEOZJI1HfLBaoppmk2sh4Ql/r/69HD0jSxCanwMD07eVzhl9ADgz/ZmJikMjOY2CUlEIRR8YgPYzbBLhQQoeJl4/B7uY9hv9//jC8XLWc4UFfD8OPZ08xbGX6CSSQ8XdgKH/79o3h+69fDHwBwQy6ew8ySOYXMfxiZERRx/ILPTqA/K9fv8K5f4EG3Pn5i+EfSB2SWpaf6G6A2vgP6NSrWzYz3J8zk0Hk9SsGVka0ePzLxs7w9ydC+3+gpn29PQzv9uxiEHz7mkEY6ESQPb+QHMbMwcHAwiotw/Dj3h2E6L+/DIyrljKIgCMLGMoMmCmLQ0qagdnh66fn/xgYfP+B9BCJv79/lw5KcrPISKqzGMlN5AABBgBSmY83jVsiQAAAAABJRU5ErkJggg==";
      },
    },
  ]);
})();
