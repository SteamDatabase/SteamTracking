/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(() => {
  (self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
    [63354],
    {
      87498: (X, $, a) => {
        "use strict";
        a.d($, {
          Fj: () => J,
          Ek: () => q,
          yu: () => F,
          s4: () => N,
          XY: () => ge,
          N_: () => ze,
          vz: () => xe,
          Kf: () => K,
          dM: () => S,
          qj: () => g,
          x: () => c,
          Ho: () => O,
        });
        var t = a(98112);
        const I = ["app_header_capsule", "app_main_capsule"],
          P = [
            "sale_header",
            "sale_logo",
            "capsule",
            "product_banner",
            "product_mobile_banner",
            "localized_title_image",
          ],
          G = ["takeunder_art", "takeunder_mobile_art"],
          D = [
            "takeover_art",
            "takeover_mobile_art",
            "takeover_webm_art",
            "takeover_mp4_art",
            "takeover_webm_mobile_art",
            "takeover_mp4_mobile_art",
          ],
          R = ["marketingmessage_art", "marketingmessage_art_2"],
          re = [
            "marketingmessage_art_eventcapsule",
            "marketingmessage_art_2_eventcapsule",
          ],
          z = ["spotlight_art_hero"],
          B = [...I, ...P, ...G, ...D, ...R, ...re, ...z],
          b = 622,
          M = 1920,
          m = 450,
          f = 800,
          _ = 460,
          v = 2108,
          x = 300,
          T = 800,
          E = 300,
          A = 644,
          u = 337,
          n = 155,
          i = 433,
          h = 199,
          l = [
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
            ...B,
          ];
        function g(Y) {
          return Array.isArray(Y) ? Y[0] : Y;
        }
        function S(Y) {
          const V = Array.isArray(Y) ? Y : [Y];
          return Math.min(...V);
        }
        function K(Y, V) {
          return V === void 0 ? g(Y) : Array.isArray(Y) ? Y[V] : Y;
        }
        const L = [t.bg.iS, t.bg.dU, t.bg.CK, t.bg.wD],
          w = [t.bg.iS, t.bg.dU, t.bg.CK],
          p = [t.bg.iS, t.bg.dU],
          O = [t.bg.pJ, t.bg.nn],
          c = [t.bg.pi, t.bg.k7],
          W = [t.bg.iS, t.bg.dU, t.bg.CK, t.bg.wD, t.bg.pJ, t.bg.nn],
          J = {
            capsule: { width: f, height: m, rgAcceptableTypes: p },
            marketingmessage_art_2_eventcapsule: {
              width: f,
              height: m,
              rgAcceptableTypes: p,
            },
            marketingmessage_art_eventcapsule: {
              width: f,
              height: m,
              rgAcceptableTypes: p,
            },
            spotlight: { width: v, height: _, rgAcceptableTypes: p },
            localized_store_app_spotlight: {
              width: 1200,
              height: 260,
              rgAcceptableTypes: p,
            },
            localized_store_app_spotlight_mobile: {
              width: 500,
              height: 160,
              rgAcceptableTypes: p,
            },
            localized_title_image: {
              width: M,
              height: b,
              rgAcceptableTypes: p,
            },
            background: { width: M, height: b, rgAcceptableTypes: p },
            hero: {
              width: 0,
              height: 0,
              bDisableEnforceDimensions: !0,
              rgAcceptableTypes: p,
            },
            email_full: { width: T, height: x, rgAcceptableTypes: p },
            email_centered: { width: A, height: E, rgAcceptableTypes: p },
            broadcast_left: {
              width: [h, n],
              height: [i, u],
              rgAcceptableTypes: p,
            },
            broadcast_right: {
              width: [h, n],
              height: [i, u],
              rgAcceptableTypes: p,
            },
            sale_header: {
              width: 0,
              height: 0,
              bDisableEnforceDimensions: !0,
              rgAcceptableTypes: w,
            },
            sale_overlay: {
              width: 0,
              height: 0,
              bDisableEnforceDimensions: !0,
              rgAcceptableTypes: w,
            },
            localized_image_group: {
              width: 0,
              height: 0,
              bDisableEnforceDimensions: !0,
              rgAcceptableTypes: p,
            },
            localized_background_art: {
              width: 0,
              height: 0,
              bDisableEnforceDimensions: !0,
              rgAcceptableTypes: p,
            },
            sale_section_background: {
              width: 0,
              height: 0,
              bDisableEnforceDimensions: !0,
              rgAcceptableTypes: w,
            },
            sale_section_title: {
              width: 0,
              height: 0,
              bDisableEnforceDimensions: !0,
              rgAcceptableTypes: w,
            },
            link_capsule: {
              width: 0,
              height: 0,
              bDisableEnforceDimensions: !0,
              rgAcceptableTypes: p,
            },
            product_banner: {
              width: [1200, 1100],
              height: [175, 160],
              rgAcceptableTypes: p,
            },
            product_mobile_banner: {
              width: 500,
              height: 160,
              rgAcceptableTypes: p,
            },
            product_banner_override: {
              width: [1200, 1100],
              height: [175, 160],
              rgAcceptableTypes: p,
            },
            product_mobile_banner_override: {
              width: 500,
              height: 160,
              rgAcceptableTypes: p,
            },
            schedule_track_art: {
              width: 196,
              height: 92,
              rgAcceptableTypes: p,
            },
            tab_bar_background: {
              width: 1500,
              height: 100,
              rgAcceptableTypes: p,
            },
            sale_logo: {
              width: [1200, 940],
              height: [460, 460],
              rgAcceptableTypes: p,
            },
            bestofyear_banner: {
              width: 1100,
              height: 160,
              rgAcceptableTypes: w,
            },
            bestofyear_banner_mobile: {
              width: 500,
              height: 160,
              rgAcceptableTypes: w,
            },
            localized_marketing_message: {
              width: 570,
              height: 600,
              rgAcceptableTypes: L,
            },
            localized_optin_banner: {
              width: 1e3,
              height: 150,
              rgAcceptableTypes: p,
            },
            localized_marketingmessage_webm: {
              width: 570,
              height: 600,
              rgAcceptableTypes: [t.bg.pJ],
            },
            localized_marketingmessage_mp4: {
              width: 570,
              height: 600,
              rgAcceptableTypes: [t.bg.nn],
            },
            localized_partnerevent_webm: {
              width: 800,
              height: 450,
              rgAcceptableTypes: [t.bg.pJ],
            },
            localized_partnerevent_mp4: {
              width: 800,
              height: 450,
              rgAcceptableTypes: [t.bg.nn],
            },
            localized_subtitles: {
              width: 0,
              height: 0,
              bDisableEnforceDimensions: !0,
              rgAcceptableTypes: [t.bg.k7, t.bg.pi],
            },
            localized_marketingmessage_poster: {
              width: 528,
              height: 297,
              rgAcceptableTypes: [t.bg.iS, t.bg.dU],
            },
            localized_marketingmessage_background: {
              width: 570,
              height: 600,
              rgAcceptableTypes: p,
            },
            localized_email_image: {
              width: 0,
              height: 0,
              bDisableEnforceDimensions: !0,
              rgAcceptableTypes: p,
            },
            template_asset: {
              width: 0,
              height: 0,
              bDisableEnforceDimensions: !0,
              rgAcceptableTypes: W,
            },
            user_poll_background: {
              width: 0,
              height: 0,
              bDisableEnforceDimensions: !0,
              rgAcceptableTypes: p,
            },
            sale_store_capsule_header: {
              width: 920,
              height: 430,
              rgAcceptableTypes: p,
            },
            sale_store_capsule_small: {
              width: 462,
              height: 174,
              rgAcceptableTypes: p,
            },
            sale_store_capsule_main: {
              width: 1232,
              height: 706,
              rgAcceptableTypes: p,
            },
            sale_store_capsule_vertical: {
              width: 748,
              height: 896,
              rgAcceptableTypes: p,
            },
            sale_cross_promo_background: {
              width: 940,
              height: 400,
              bDisableEnforceDimensions: !0,
              rgAcceptableTypes: p,
            },
            spotlight_art: { width: 306, height: 260, rgAcceptableTypes: w },
            spotlight_art_hero: {
              width: 748,
              height: 896,
              rgAcceptableTypes: p,
            },
            old_spotlight_art: {
              width: 306,
              height: 350,
              rgAcceptableTypes: w,
            },
            marketingmessage_art: {
              width: 570,
              height: 600,
              rgAcceptableTypes: w,
            },
            marketingmessage_art_2: {
              width: 570,
              height: 600,
              rgAcceptableTypes: w,
            },
            takeover_art: { width: 1850, height: 450, rgAcceptableTypes: w },
            takeover_webm_art: {
              width: 1850,
              height: 450,
              rgAcceptableTypes: [t.bg.pJ],
            },
            takeover_mp4_art: {
              width: 1850,
              height: 450,
              rgAcceptableTypes: [t.bg.nn],
            },
            takeover_mobile_art: {
              width: 500,
              height: 350,
              rgAcceptableTypes: w,
            },
            takeover_webm_mobile_art: {
              width: 500,
              height: 350,
              rgAcceptableTypes: [t.bg.pJ],
            },
            takeover_mp4_mobile_art: {
              width: 500,
              height: 350,
              rgAcceptableTypes: [t.bg.nn],
            },
            takeunder_art: { width: 1200, height: 190, rgAcceptableTypes: w },
            takeunder_mobile_art: {
              width: 500,
              height: 160,
              rgAcceptableTypes: w,
            },
            app_header_capsule: {
              width: 920,
              height: 430,
              rgAcceptableTypes: p,
            },
            app_main_capsule: {
              width: 1232,
              height: 706,
              rgAcceptableTypes: p,
            },
          };
        function q(Y, V, ee, pe) {
          let se = null;
          if (Array.isArray(ee)) {
            if (
              ((se = ee
                .map((ve, me) => (Y === ve ? me : void 0))
                .filter((ve) => ve !== void 0)),
              se.length <= 0)
            )
              return !1;
          } else if (Y !== ee) return !1;
          if (Array.isArray(pe)) {
            const ve = pe
              .map((me, Ze) => (V === me ? Ze : void 0))
              .filter((me) => me !== void 0);
            if (
              ve.length <= 0 ||
              (se?.length && !ve.some((me) => se.includes(me)))
            )
              return !1;
          } else if (V !== pe) return !1;
          return !0;
        }
        function F(Y, V, ee, pe) {
          const se = J[ee];
          return se
            ? se.bDisableEnforceDimensions
              ? !!pe
              : q(Y, V, se.width, se.height)
            : !1;
        }
        function N(Y, V, ee) {
          const pe = J[ee];
          if (!pe) return !1;
          if (pe.bDisableEnforceDimensions) return !0;
          if (Array.isArray(pe.width)) {
            if (pe.width.filter((se) => Y < se).length == pe.width.length)
              return !1;
          } else if (Y < pe.width) return !1;
          if (Array.isArray(pe.height)) {
            if (pe.height.filter((se) => V < se).length == pe.height.length)
              return !1;
          } else if (V < pe.height) return !1;
          return !0;
        }
        function ge(Y) {
          const V = J[Y];
          return (
            V.rgAcceptableTypes.includes(t.bg.k7) ||
            V.rgAcceptableTypes.includes(t.bg.pi)
          );
        }
        function xe(Y, V) {
          return V.filter((ee) => ze(Y, ee));
        }
        function ze(Y, V) {
          return J[V].rgAcceptableTypes.includes(Y);
        }
      },
      9472: (X, $, a) => {
        "use strict";
        a.d($, { o: () => re, q: () => z });
        var t = a(14947),
          I = a(98112),
          P = a(6658),
          G = Object.defineProperty,
          D = Object.getOwnPropertyDescriptor,
          R = (B, b, M, m) => {
            for (
              var f = m > 1 ? void 0 : m ? D(b, M) : b, _ = B.length - 1, v;
              _ >= 0;
              _--
            )
              (v = B[_]) && (f = (m ? v(b, M, f) : v(f)) || f);
            return m && f && G(b, M, f), f;
          };
        function re(B) {
          return B == "waiting" || B == "uploading" || B == "processing";
        }
        class z {
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
          constructor(b, M, m, f, _) {
            (0, t.Gn)(this),
              (this.file = b),
              (this.filename = M),
              (this.fileType = (0, P.yh)(M) ?? I.bg.w3),
              (this.language = m),
              (this.uploadTime = Date.now()),
              (this.status = "pending"),
              (this.m_originalSize = _),
              (this.height = _.height),
              (this.width = _.width),
              (this.m_originalDataUrl = f),
              (this.dataUrl = f);
          }
          ResetImage() {
            (this.height = this.m_originalSize.height),
              (this.width = this.m_originalSize.width),
              (this.dataUrl = this.m_originalDataUrl);
          }
          GetImageOptionLabel() {}
        }
        R([t.sH], z.prototype, "dataUrl", 2),
          R([t.sH], z.prototype, "width", 2),
          R([t.sH], z.prototype, "height", 2),
          R([t.sH], z.prototype, "status", 2),
          R([t.sH.ref], z.prototype, "message", 2),
          R([t.sH], z.prototype, "language", 2);
      },
      75909: (X, $, a) => {
        "use strict";
        a.d($, { M0: () => h, VE: () => g, vN: () => S, zO: () => L });
        var t = a(99412),
          I = a(71742),
          P = a(64868),
          G = a(41735),
          D = a.n(G),
          R = a(14947),
          re = a(90626),
          z = a(87498),
          B = a(53424),
          b = a(34592),
          M = a(27066),
          m = a(82734),
          f = a(18210),
          _ = a(3166),
          v = a(51746),
          x = a(29630),
          T = a(64),
          E = a(38410),
          A = Object.defineProperty,
          u = Object.getOwnPropertyDescriptor,
          n = (w, p, O, c) => {
            for (
              var W = c > 1 ? void 0 : c ? u(p, O) : p, J = w.length - 1, q;
              J >= 0;
              J--
            )
              (q = w[J]) && (W = (c ? q(p, O, W) : q(W)) || W);
            return c && W && A(p, O, W), W;
          };
        function i(w, p, O) {
          const c = (0, z.Kf)(p.width, O),
            W = (0, z.Kf)(p.height, O);
          return {
            sKey: `${w}_${c}x${W}`,
            width: c,
            height: W,
            bEnforceDimensions: !p.bDisableEnforceDimensions,
            artworkType: w,
            bHiddenFromDropdown: w === "hero",
            bDeprecated: (O ?? 0) >= 1,
            fnGetLabelText() {
              return this.artworkType == "spotlight"
                ? (0, f.we)("#EventEditor_ArtworkType_store_spotlight")
                : (0, f.we)("#EventEditor_ArtworkType_" + this.artworkType);
            },
          };
        }
        function h(w) {
          return w?.flatMap((p) => {
            const O = z.Fj[p];
            if (
              ((0, I.wT)(!!O, `Artwork Type not in Map ${p}`),
              typeof O.width == "number" && typeof O.height == "number")
            )
              return [i(p, O)];
            {
              let c = Math.max(
                Array.isArray(O.width) ? O.width.length : 1,
                Array.isArray(O.height) ? O.height.length : 1,
              );
              return Array.from({ length: c }, (W, J) => i(p, O, J));
            }
          });
        }
        class l extends E.Vr {
          m_filesToUpload = R.sH.array();
          m_filesCompleted = R.sH.array();
          m_clanImagesV2;
          m_clanSteamID;
          m_rgImageOptions;
          m_localizedImageGroupPrimaryImage;
          m_lastError = void 0;
          constructor(p, O, c, W) {
            super(),
              (0, R.Gn)(this),
              (this.m_clanSteamID = p),
              (this.m_rgImageOptions = h(O)),
              (this.m_localizedImageGroupPrimaryImage = c),
              (this.m_clanImagesV2 = W ?? !1);
          }
          GetClanSteamID() {
            return this.m_clanSteamID;
          }
          async AddImage(p, O = t.Bhc) {
            const { language: c } = (0, E.jj)(p.name, O);
            return this.AddImageForLanguage(p, c);
          }
          async AddImageForLanguage(p, O) {
            if (!(0, v.aL)(p.type) && !(_.iA.is_support && (0, v.Uz)(p.type)))
              return !1;
            const c = await (0, v.zB)(p, (0, v.Uz)(p.type));
            if (!c) return !1;
            const W = new T.M7(
              p,
              p.name,
              O,
              this.m_rgImageOptions,
              c.src,
              (0, v.II)(c),
              c,
              this.m_localizedImageGroupPrimaryImage,
            );
            return (this.m_filesToUpload = [...this.m_filesToUpload, W]), !0;
          }
          async AddExistingClanImage(p, O = t.Bhc) {
            const c = x.zU.GetHashAndExt(p);
            if (!c) return !1;
            const W = x.zU.GenerateEditableURLFromHashAndExt(
                this.m_clanSteamID,
                c,
              ),
              J = await D()({ url: W, method: "GET", responseType: "blob" }),
              q = (0, m.pE)(J.data, p.file_name);
            return await this.AddImage(q, O);
          }
          DeleteUploadImageByIndex(p) {
            this.m_filesToUpload.splice(p, 1),
              (this.m_filesToUpload = [...this.m_filesToUpload]);
          }
          DeleteUploadImage(p) {
            let O = this.m_filesToUpload.findIndex(
              (c) => p.file == c.file && p.uploadTime == c.uploadTime,
            );
            O >= 0 && this.DeleteUploadImageByIndex(O);
          }
          ClearImages() {
            this.m_filesToUpload = R.sH.array();
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
            return this.m_filesToUpload.map((p) => p.file);
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
          BIsFileCompleted(p) {
            return this.m_filesCompleted.indexOf(p) != -1;
          }
          RetryAllFailedUploads() {
            this.CancelAllUploads(), this.UploadAllImages();
          }
          async handleUploadRefresh(p) {
            await B.pU.LoadClanImages(this.m_clanSteamID, !0, p);
          }
          BGetUploadsAreInSerial() {
            return !1;
          }
          async UploadSingleImage(p, O, c, W) {
            const J = p.file,
              q = p.GetCurrentImageOption(),
              F = p.GetResizeDimension(),
              N = new FormData();
            N.append("clanimage", J, O),
              N.append("sessionid", (0, _.KC)()),
              this.m_clanImagesV2 && N.append("clan_images_v2", "1"),
              q?.artworkType && N.append("arttype", q.artworkType),
              F &&
                F.length > 0 &&
                N.append(
                  "resize",
                  F.map((se) => se.width + "x" + se.height).join(","),
                );
            let ge = "/uploadimage/";
            const xe = this.m_localizedImageGroupPrimaryImage;
            xe &&
              ((ge = "/ajaxuploadlocalizedimage/"),
              N.append("origimagehash", xe.image_hash),
              xe.thumbnail_hash && N.append("thumbhash", xe.thumbnail_hash),
              N.append("extension", "" + xe.file_type),
              N.append("language", "" + c));
            const ze = O.split(".").pop()?.toLocaleLowerCase();
            (ze == "webm" || ze == "mp4") &&
              (N.append("video_width", "" + p.width),
              N.append("video_height", "" + p.height));
            let Y =
                _.TS.COMMUNITY_BASE_URL +
                "/gid/" +
                this.m_clanSteamID.ConvertTo64BitString() +
                ge,
              V = {
                cancelToken: W,
                withCredentials: !0,
                headers: { "Content-Type": "multipart/form-data" },
              },
              ee,
              pe = !0;
            try {
              (ee = await D().post(Y, N, V)), this.m_filesCompleted.push(J);
            } catch (se) {
              (pe = !1),
                (this.m_lastError = {
                  file: J,
                  status: se.response ? se.response.status : 500,
                  message: (0, b.H)(se).strErrorMsg,
                }),
                (ee = se.response);
            }
            return (
              xe || (await this.handleUploadRefresh(W)),
              { bSuccess: pe, result: ee.data }
            );
          }
        }
        n([R.sH], l.prototype, "m_filesToUpload", 2),
          n([R.sH], l.prototype, "m_filesCompleted", 2),
          n([R.sH], l.prototype, "m_lastError", 2),
          n([M.o], l.prototype, "AddImage", 1),
          n([M.o], l.prototype, "AddExistingClanImage", 1),
          n([M.o], l.prototype, "DeleteUploadImageByIndex", 1),
          n([M.o], l.prototype, "DeleteUploadImage", 1),
          n([M.o], l.prototype, "ClearImages", 1);
        class g extends l {
          constructor(p, O, c) {
            super(p, O, c, !1);
          }
        }
        class S extends l {
          constructor(p, O, c) {
            super(p, O, c, !0);
          }
        }
        async function K(w, p, O, c, W) {
          let J =
              Config.COMMUNITY_BASE_URL +
              "/gid/" +
              p.ConvertTo64BitString() +
              "/resizeimage/",
            q = new FormData();
          return (
            q.append("imagehash", O),
            q.append("extension", c),
            q.append(
              "resize",
              W.map((N) => N.width + "x" + N.height).join(","),
            ),
            q.append("sessionid", GetSessionID()),
            (await axios.post(J, q, { cancelToken: w })).data.count
          );
        }
        function L(w, p, O) {
          const c = (0, P.wm)(p instanceof Array ? p : [p]),
            W = w.ConvertTo64BitString();
          return re.useMemo(() => new g(w, c, O), [W, c]);
        }
      },
      64: (X, $, a) => {
        "use strict";
        a.d($, { IS: () => v, M7: () => E, T2: () => x });
        var t = a(14947),
          I = a(87498),
          P = a(18210),
          G = a(9472),
          D = a(21254),
          R = a(51746),
          re = Object.defineProperty,
          z = Object.getOwnPropertyDescriptor,
          B = (n, i, h, l) => {
            for (
              var g = l > 1 ? void 0 : l ? z(i, h) : i, S = n.length - 1, K;
              S >= 0;
              S--
            )
              (K = n[S]) && (g = (l ? K(i, h, g) : K(g)) || g);
            return l && g && re(i, h, g), g;
          };
        const b = 960,
          M = 311,
          m = 480,
          f = 156;
        class _ extends G.q {
          m_rgImageOptions;
          m_currentImageOption = void 0;
          m_currentImageOptionKey = void 0;
          constructor(i, h, l, g, S, K) {
            super(i, h, l, S, K), (0, t.Gn)(this), (this.m_rgImageOptions = g);
          }
          IsValidAssetType(i, h) {
            let l = 0,
              g = 0,
              S = !1,
              K =
                !this.m_rgImageOptions ||
                this.m_rgImageOptions.length === 0 ||
                this.m_rgImageOptions.some(
                  (F) => F.sKey == this.GetCurrentImageOption()?.sKey,
                );
            if (i) (l = i.width), (g = i.height), (S = !0);
            else if (this.GetCurrentImageOption()) {
              const F = I.Fj[this.GetCurrentImageOption().artworkType];
              F &&
                ((l = F.width),
                (g = F.height),
                (S = !F.bDisableEnforceDimensions));
            }
            const L = this.width >= (0, I.dM)(l) && this.height >= (0, I.dM)(g),
              w = S ? (0, I.Ek)(this.width, this.height, l, g) : L,
              p = h && h != this.fileType,
              O =
                this.m_rgImageOptions && this.m_rgImageOptions.length > 0
                  ? (0, I.vz)(
                      this.fileType,
                      this.m_rgImageOptions?.map((F) => F.artworkType) || [],
                    ).length == 0
                  : !1,
              c = !!(0, D.t)(this.fileType);
            let W = "",
              J = !1,
              q;
            return (
              K
                ? O
                  ? (W = (0, P.we)("#ImageUpload_InvalidFileType"))
                  : p
                    ? (W = (0, P.we)(
                        "#ImageUpload_InvalidFormat",
                        (0, R.EG)(h) ?? "",
                      ))
                    : !w && !c
                      ? (W = (0, P.we)(
                          "#ImageUpload_InvalidResolution",
                          (0, I.qj)(l),
                          (0, I.qj)(g),
                        ))
                      : L
                        ? !w && c
                          ? ((W = (0, P.we)(
                              "#ImageUpload_InvalidDimensions",
                              (0, I.qj)(l),
                              (0, I.qj)(g),
                            )),
                            (J = !0))
                          : ((Array.isArray(l) && this.width != (0, I.qj)(l)) ||
                              (Array.isArray(g) &&
                                this.height != (0, I.qj)(g))) &&
                            ((q = q ?? []),
                            q.push(
                              (0, P.we)(
                                "#ImageUpload_PreferredDimension",
                                (0, I.qj)(l),
                                (0, I.qj)(g),
                              ),
                            ))
                        : (W = (0, P.we)(
                            "#ImageUpload_TooSmall",
                            (0, I.qj)(l),
                            (0, I.qj)(g),
                          ))
                : (W = (0, P.we)("#ImageUpload_InvalidFormatSelected")),
              {
                error: W,
                warnings: q,
                needsCrop: J,
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
            const i = (0, I.vz)(
              this.fileType,
              this.m_rgImageOptions?.map((l) => l.artworkType),
            );
            let h = u(this.width, this.height, i, !1);
            if ((h === void 0 && (h = u(this.width, this.height, i, !0)), h)) {
              const l = this.m_rgImageOptions.find(
                (g) =>
                  g.artworkType == h &&
                  (!g.bEnforceDimensions ||
                    (g.width == this.width && g.height == this.height)),
              );
              if (l) return l;
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
        B([t.sH], _.prototype, "m_currentImageOption", 2),
          B([t.sH], _.prototype, "m_currentImageOptionKey", 2);
        class v extends _ {
          video;
          constructor(i, h, l, g, S, K, L) {
            super(i, h, l, g, S, K), (this.video = L);
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
        class x extends _ {
          constructor(i, h, l, g) {
            super(i, h, l, g, URL.createObjectURL(i), { width: 0, height: 0 });
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
        function T(n) {
          const i = n.split(".").pop()?.toLocaleLowerCase();
          return i == "webm" || i == "mp4";
        }
        class E extends _ {
          bCropped = !1;
          localizedImageGroupPrimaryImage;
          media;
          constructor(i, h, l, g, S, K, L, w) {
            super(i, h, l, g, S, K),
              (0, t.Gn)(this),
              (this.media = L),
              (this.localizedImageGroupPrimaryImage = w);
          }
          IsValidAssetType(i, h) {
            return (
              (h = h ?? this.localizedImageGroupPrimaryImage?.file_type),
              super.IsValidAssetType(i, h)
            );
          }
          GetCanvasImageSource() {
            return this.media;
          }
          BIsOriginalMinimumDimensions(i) {
            return (0, I.s4)(
              this.media?.width ?? 0,
              this.media?.height ?? 0,
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
            return A(this.GetCurrentImageOption()?.artworkType);
          }
        }
        B([t.sH], E.prototype, "bCropped", 2);
        function A(n) {
          if (n === "background")
            return [
              { width: b, height: M },
              { width: m, height: f },
            ];
          if (n === "capsule")
            return [
              {
                width: (0, I.qj)(I.Fj[n].width) / 2,
                height: (0, I.qj)(I.Fj[n].height) / 2,
              },
            ];
          if (n === "spotlight")
            return [
              {
                width: (0, I.qj)(I.Fj[n].width) / 2,
                height: (0, I.qj)(I.Fj[n].height) / 2,
              },
            ];
        }
        function u(n, i, h, l = !1) {
          if (h) {
            for (let g of h)
              if (l ? (0, I.s4)(n, i, g) : (0, I.yu)(n, i, g)) return g;
          }
        }
      },
      38410: (X, $, a) => {
        "use strict";
        a.d($, { PD: () => M, Vr: () => b, jj: () => m });
        var t = a(32093),
          I = a(99412),
          P = a(18210),
          G = a(41735),
          D = a.n(G);
        class R {}
        function re(f, _, v) {
          const x = f.filter((T) => {
            const E = T.IsValidAssetType(_, v);
            return T.status === "pending" && !E.error && !E.needsCrop;
          });
          return (
            x.forEach((T) => {
              (T.status = "waiting"), (T.message = "");
            }),
            x
          );
        }
        async function z(f, _, v, x, T) {
          const E = re(f, v, x),
            A = [];
          for (const u of E) {
            u.status = "uploading";
            const n = await _(u, u.filename, u.language ?? I.xPp, T);
            (u.status = n.bSuccess ? "success" : "failed"),
              (u.message =
                !n.bSuccess && n.elErrorMessage ? n.elErrorMessage : ""),
              A.push({
                bSuccess: n.bSuccess,
                image: u,
                uploadResult: n.result,
              });
          }
          return A;
        }
        async function B(f, _, v, x, T, E) {
          const A = re(f, x, T),
            u = [];
          let n = 0;
          const i = async () => {
              for (; n < A.length; ) {
                const l = n++,
                  g = A[l];
                g.status = "uploading";
                const S = await v(g, g.filename, g.language ?? I.xPp, E);
                (g.status = S.bSuccess ? "success" : "failed"),
                  (g.message =
                    !S.bSuccess && S.elErrorMessage ? S.elErrorMessage : ""),
                  (u[l] = { image: g, uploadResult: S });
              }
            },
            h = Array.from({ length: Math.floor(_) }, () => i());
          return (
            await Promise.all(h),
            u.map((l) => ({
              bSuccess: l.uploadResult.bSuccess,
              image: l.image,
              uploadResult: l.uploadResult.result,
            }))
          );
        }
        class b extends R {
          m_cancel = void 0;
          async UploadAllImages(_, v) {
            this.m_cancel = D().CancelToken.source();
            const x = this.BGetUploadsAreInSerial() ? 1 : 4;
            let T;
            const E = this.UploadSingleImage.bind(this);
            return (
              x > 1
                ? (T = await B(
                    this.GetUploadImages(),
                    x,
                    E,
                    _,
                    v,
                    this.m_cancel.token,
                  ))
                : (T = await z(
                    this.GetUploadImages(),
                    E,
                    _,
                    v,
                    this.m_cancel.token,
                  )),
              T
            );
          }
          CancelAllUploads() {
            this.m_cancel?.cancel((0, P.we)("#ImageUpload_CancelRequest"));
          }
        }
        function M(f, _, v) {
          if (((f == null || f == null) && (f = _), !v || v.length === 0))
            return f;
          for (const x of v) if (P.A0.IsELanguageValidInRealm(f, x)) return f;
          for (const x of v) if (P.A0.IsELanguageValidInRealm(_, x)) return _;
          return v.includes(t.TU.k_ESteamRealmGlobal) ? I.Bhc : I.ZLm;
        }
        function m(f, _ = I.Bhc) {
          let v = f.lastIndexOf(".");
          v != -1 && (f = f.slice(0, v).toLowerCase());
          let x = null,
            T = 0;
          f.endsWith("korean") && ((x = I.Pn1), (T = 6));
          for (let A = I.Bhc; A < I.bP9; ++A) {
            const u = (0, I.wwZ)(A);
            if (u.length <= T) continue;
            if (f.endsWith(u) && f.length > u.length + 2) {
              const i = f[f.length - u.length - 1];
              /\p{Alphabetic}|\p{Number}/u.test(i) || ((x = A), (T = u.length));
            }
            const n = (0, I.LgB)(A);
            n.length <= T || (f.endsWith(n) && ((x = A), (T = n.length)));
          }
          const E = (A) => A.replace(/[\s_-]+$/g, "");
          return {
            language: x ?? _,
            baseFilename: T > 0 ? E(f.substring(0, f.length - T)) : f,
          };
        }
      },
      53424: (X, $, a) => {
        "use strict";
        a.d($, { mr: () => A, n9: () => E, pU: () => T });
        var t = a(72604),
          I = a(41735),
          P = a.n(I),
          G = a(14947),
          D = a(90626),
          R = a(76559),
          re = a(47689),
          z = a(71742),
          B = a(8323),
          b = a(54963),
          M = a(3166),
          m = Object.defineProperty,
          f = Object.getOwnPropertyDescriptor,
          _ = (u, n, i, h) => {
            for (
              var l = h > 1 ? void 0 : h ? f(n, i) : n, g = u.length - 1, S;
              g >= 0;
              g--
            )
              (S = u[g]) && (l = (h ? S(n, i, l) : S(l)) || l);
            return h && l && m(n, i, l), l;
          };
        class v {
          success;
          images;
        }
        class x {
          constructor() {
            (0, G.Gn)(this);
          }
          m_mapClanToImages = new Map();
          m_mapClanImageLoadPromises = new Map();
          m_imageListChangeCallback = new Map();
          m_mapClanImageLoadState = new Map();
          m_mapImageIDToResolution = new Map();
          BHasImageResolution(n) {
            return this.m_mapImageIDToResolution.has(n.imageid);
          }
          GetImageResolution(n) {
            return this.m_mapImageIDToResolution.get(n.imageid);
          }
          SetImageResolution(n, i) {
            this.m_mapImageIDToResolution.set(n.imageid, i);
          }
          GetImageListCallbackForClanAccountIDInternal(n) {
            return (
              this.m_imageListChangeCallback.has(n) ||
                this.m_imageListChangeCallback.set(n, new B.lu()),
              this.m_imageListChangeCallback.get(n)
            );
          }
          GetImageListCallbackForClanAccountID(n) {
            return this.GetImageListCallbackForClanAccountIDInternal(n);
          }
          m_vecClanImageDragListener = new Array();
          AddClanImageDragListener(n) {
            this.m_vecClanImageDragListener.indexOf(n) == -1 &&
              this.m_vecClanImageDragListener.push(n);
          }
          RemoveClanImageDragListener(n) {
            let i = this.m_vecClanImageDragListener.indexOf(n);
            i != -1 && this.m_vecClanImageDragListener.splice(i, 1);
          }
          GetClanImageDragListener() {
            return this.m_vecClanImageDragListener;
          }
          BHasLoadedClanImages(n) {
            return this.m_mapClanToImages.has(n.GetAccountID());
          }
          async LoadClanImages(n, i, h) {
            const l = n.GetAccountID();
            if (i || !this.m_mapClanImageLoadPromises.has(l)) {
              const g = this.InternalLoadClanImages(n, i, h);
              this.m_mapClanImageLoadPromises.set(l, g);
            }
            return this.m_mapClanImageLoadPromises.get(l);
          }
          async InternalLoadClanImages(n, i, h) {
            let l = n.GetAccountID();
            if (
              ((0, z.wT)(n && l != 0, "ClanSteamID missing:" + n),
              n && (!this.m_mapClanToImages.has(l) || i))
            ) {
              let g = {},
                S;
              const K =
                M.TS.COMMUNITY_BASE_URL +
                "/gid/" +
                n.ConvertTo64BitString() +
                "/getimages/";
              if (
                ((S = await P().get(K, {
                  params: g,
                  withCredentials: !0,
                  cancelToken: h,
                })),
                S)
              ) {
                for (let L of S.data.images) L.clanAccountID = l;
                (0, G.h5)(() => {
                  this.m_mapClanImageLoadState.set(l, { loaded: !0 }),
                    this.m_mapClanToImages.set(l, S.data.images),
                    this.GetImageListCallbackForClanAccountIDInternal(
                      l,
                    ).Dispatch(S.data.images);
                });
              }
            }
            return this.m_mapClanToImages.get(l);
          }
          GetLoadState(n) {
            return this.m_mapClanImageLoadState.get(n.GetAccountID());
          }
          GetClanImages(n) {
            return this.GetClanImagesByAccount(n.GetAccountID());
          }
          GetClanImagesByAccount(n) {
            let i = this.m_mapClanToImages.get(n);
            return i || new Array();
          }
          GetFilteredClanImages(n, i) {
            let h = T.GetClanImages(n);
            return this.GetFilteredClanImagesList(h, i);
          }
          GetFilteredClanImagesList(n, i) {
            if (i && i.trim().length > 0) {
              i = i.trim().toLowerCase();
              let h = new Array();
              for (let l of n)
                l.file_name &&
                  l.file_name.toLowerCase().indexOf(i) >= 0 &&
                  h.push(l);
              return h;
            }
            return n;
          }
          GetClanImageByID(n, i) {
            let h = n.GetAccountID(),
              l = this.m_mapClanToImages.get(h);
            return l ? l.find((g) => g.imageid == i) : void 0;
          }
          GetClanImageByURL(n, i) {
            let h = n.GetAccountID(),
              l = this.m_mapClanToImages.get(h);
            return l ? l.find((g) => g.thumb_url == i || g.url == i) : void 0;
          }
          GetClanImageByFile(n, i) {
            let h = n.GetAccountID(),
              l = this.m_mapClanToImages.get(h);
            return l ? l.find((g) => g.file_name == i.name) : void 0;
          }
          GetClanImageByImageHash(n, i) {
            let h = n.GetAccountID(),
              l = this.m_mapClanToImages.get(h);
            return l ? l.find((g) => g.image_hash == i) : void 0;
          }
          async DeleteClanImageByID(n, i) {
            let h = { sessionid: (0, M.KC)(), imageid: i },
              l = n.GetAccountID(),
              g = await P().get(
                M.TS.COMMUNITY_BASE_URL +
                  "/gid/" +
                  n.ConvertTo64BitString() +
                  "/deleteimage/",
                { params: h },
              );
            if (!g || g.status != 200 || g.data.success != t.R) return g.data;
            let S = this.m_mapClanToImages.get(l);
            if (S) {
              let K = S.findIndex((L, w, p) => L.imageid == i);
              K >= 0 &&
                (S.splice(K, 1),
                this.GetImageListCallbackForClanAccountIDInternal(l).Dispatch([
                  ...S,
                ]));
            }
            return g.data;
          }
          async DeleteClanImage(n, i) {
            return this.DeleteClanImageByID(n, i.imageid);
          }
        }
        _([G.sH], x.prototype, "m_mapClanToImages", 2),
          _([G.sH], x.prototype, "m_mapClanImageLoadState", 2);
        const T = new x();
        function E(u) {
          const [n, i] = (0, D.useState)(T.GetClanImagesByAccount(u));
          return (0, b.hL)(T.GetImageListCallbackForClanAccountID(u), i), n;
        }
        function A(u) {
          const n = R.b.InitFromClanID(u),
            i = (0, re.m)("useLoadClanImages"),
            [h, l] = (0, D.useState)(() => T.BHasLoadedClanImages(n));
          return (
            (0, D.useEffect)(() => {
              const g = R.b.InitFromClanID(u);
              return (
                T.BHasLoadedClanImages(g) ||
                  T.LoadClanImages(g, !1, i.token).then(() => l(!0)),
                () => i.cancel()
              );
            }, [u, i]),
            h
          );
        }
      },
      6658: (X, $, a) => {
        "use strict";
        a.d($, { yh: () => z });
        var t = a(90626),
          I = a(98112);
        function P(B, b, M = !0) {
          const m = new URLSearchParams({
            ima: "fit",
            impolicy: "Letterbox",
            imcolor: "#000000",
          });
          return (
            B && m.set("imw", Math.round(B).toString()),
            b && m.set("imh", Math.round(b).toString()),
            !B || !b || !M
              ? m.set("letterbox", "false")
              : m.set("letterbox", "true"),
            "?" + m.toString()
          );
        }
        const G = null;
        function D(B, b) {
          let M;
          for (let m of G)
            if (
              (M ? (M += ", ") : (M = ""),
              (M += `${B}${P(m, 0)} ${m}w`),
              m >= b)
            )
              break;
          return M;
        }
        function R(B) {
          let {
            src: b,
            orig_width: M,
            orig_height: m,
            sizes: f,
            default_width: _,
            ...v
          } = B;
          f || (f = "95vw"), _ || (_ = 1024);
          let x = `${b}${P(_, void 0)}`,
            T = D(b, M);
          return React.createElement("img", {
            src: x,
            srcSet: T,
            sizes: f,
            ...v,
          });
        }
        function re(B) {
          const {
            width: b,
            height: M,
            orig_width: m,
            orig_height: f,
            src: _,
            ...v
          } = B;
          let x = _ + P(b, M),
            T,
            E = 6;
          if (
            (b && m && (E = Math.min(E, Math.ceil(m / b))),
            M && f && (E = Math.min(E, Math.ceil(f / M))),
            E)
          )
            for (let A of [2, 4, 6]) {
              if (A > E) break;
              T ? (T += ", ") : (T = ""),
                (T += `${_}${P(b && b * A, M && M * A)} ${A}x`);
            }
          return React.createElement("img", { ...v, src: x, srcSet: T });
        }
        function z(B) {
          if (
            (B.indexOf("?") > 0 && (B = B.split("?")[0]),
            B.endsWith(".jpg") || B.endsWith(".jpeg"))
          )
            return I.bg.iS;
          if (B.endsWith(".png")) return I.bg.dU;
          if (B.endsWith(".gif")) return I.bg.CK;
          if (B.endsWith(".mp4")) return I.bg.nn;
          if (B.endsWith(".webm")) return I.bg.pJ;
          if (B.endsWith(".vtt")) return I.bg.k7;
          if (B.endsWith(".srt")) return I.bg.pi;
          if (B.endsWith(".webp")) return I.bg.wD;
        }
      },
      50109: (X, $, a) => {
        "use strict";
        a.d($, { E: () => f, O: () => m });
        var t = a(14947),
          I = a(65946),
          P = a(99412),
          G = a(41635),
          D = a(27066),
          R = a(3166),
          re = a(38585),
          z = Object.defineProperty,
          B = Object.getOwnPropertyDescriptor,
          b = (_, v, x, T) => {
            for (
              var E = T > 1 ? void 0 : T ? B(v, x) : v, A = _.length - 1, u;
              A >= 0;
              A--
            )
              (u = _[A]) && (E = (T ? u(v, x, E) : u(E)) || E);
            return T && E && z(v, x, E), E;
          };
        const M = class Xe {
          m_eCurLang = (0, P.sfN)(R.TS.LANGUAGE);
          m_rgHasData = (0, G.$Y)([], P.bP9, !1);
          m_bHasLocalizationContext = !1;
          m_callback = new re.l();
          GetCallback() {
            return this.m_callback;
          }
          GetCurEditLanguage() {
            return this.m_eCurLang;
          }
          SetCurEditLanguage(v) {
            return this.m_eCurLang != v
              ? ((this.m_eCurLang = v), this.GetCallback().Dispatch(v), !0)
              : !1;
          }
          SetHasLanguage(v) {
            v.forEach((x, T) => {
              this.m_rgHasData[T] != x && (this.m_rgHasData[T] = x);
            });
          }
          BHasLanguageData(v) {
            return this.m_rgHasData[v];
          }
          GetHasLocalizationContext() {
            return this.m_bHasLocalizationContext;
          }
          SetHasLocalizationContext(v) {
            v != this.m_bHasLocalizationContext &&
              (this.m_bHasLocalizationContext = v);
          }
          static s_globalSingletonStore;
          static Get() {
            return (
              Xe.s_globalSingletonStore ||
                (Xe.s_globalSingletonStore = new Xe()),
              Xe.s_globalSingletonStore
            );
          }
          constructor() {
            (0, t.Gn)(this);
          }
        };
        b([t.sH], M.prototype, "m_eCurLang", 2),
          b([t.sH], M.prototype, "m_rgHasData", 2),
          b([t.sH], M.prototype, "m_bHasLocalizationContext", 2),
          b([D.o], M.prototype, "GetCurEditLanguage", 1),
          b([D.o], M.prototype, "SetCurEditLanguage", 1),
          b([t.XI.bound], M.prototype, "SetHasLanguage", 1),
          b([D.o], M.prototype, "BHasLanguageData", 1);
        let m = M;
        function f() {
          return (0, I.q3)(() => m.Get().GetCurEditLanguage());
        }
      },
      45638: (X, $, a) => {
        "use strict";
        a.d($, { I: () => He });
        var t = a(7850),
          I = a(41735),
          P = a.n(I),
          G = a(75844),
          D = a(90626),
          R = a(25518),
          re = a(16346),
          z = a(43458),
          B = a(76559),
          b = a(29630),
          M = a(53424),
          m = a(54963),
          f = a(41301),
          _ = a(96197),
          v = a(38655),
          x = a(14947),
          T = a(77700),
          E = a.n(T),
          A = a(36707),
          u = Object.defineProperty,
          n = Object.getOwnPropertyDescriptor,
          i = (s, e, r, o) => {
            for (
              var d = o > 1 ? void 0 : o ? n(e, r) : e, y = s.length - 1, j;
              y >= 0;
              y--
            )
              (j = s[y]) && (d = (o ? j(e, r, d) : j(d)) || d);
            return o && d && u(e, r, d), d;
          };
        class h extends D.Component {
          m_strLastSearch;
          m_rgCurrentMatches = [];
          m_mapMatchByKey = new Map();
          containerRef = D.createRef();
          constructor(e) {
            super(e),
              (this.m_hMobxSearchDisposer = (0, x.fm)(async () => {
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
              case f.Oy:
                this.SetSelectedIndexDelta(-1);
                break;
              case f.BH:
                this.SetSelectedIndexDelta(1);
                break;
              case f.po:
                this.SetSelectedIndex(0);
                break;
              case f.o7:
                this.SetSelectedIndexDelta(-this.GetPageSize());
                break;
              case f.xF:
                this.SetSelectedIndex(-1);
                break;
              case f.v3:
                this.SetSelectedIndexDelta(this.GetPageSize());
                break;
              case f.wd:
              case f.$R:
                if (this.state.selectedIndex !== void 0)
                  this.ChooseSuggestion(
                    this.m_rgCurrentMatches[this.state.selectedIndex],
                  );
                else
                  return (
                    this.props.onSuggestionSelected(this.props.strSearch), !1
                  );
                break;
              case f.zV:
                this.props.onSuggestionSelected(this.props.strSearch);
                break;
              default:
                return !1;
            }
            return !0;
          }
          GetPageSize() {
            let e = this.containerRef.current,
              r = e && e.firstElementChild,
              o = this.m_rgCurrentMatches.length;
            if (
              (o > this.getMaxMatches() && (o = this.getMaxMatches()), r && o)
            ) {
              let d = r.scrollHeight / o,
                y = r.clientHeight / d;
              return Math.max(1, Math.floor(y));
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
            let r = this.m_rgCurrentMatches.length;
            r > this.getMaxMatches() && (r = this.getMaxMatches()),
              (e = e % r),
              e < 0 && (e += r),
              this.setState({ selectedIndex: e });
          }
          FindKeyIndex(e) {
            if (!this.m_mapMatchByKey.size && this.m_rgCurrentMatches.length)
              for (let r = 0; r < this.m_rgCurrentMatches.length; r++)
                this.m_mapMatchByKey.set(
                  this.getKey(this.m_rgCurrentMatches[r]),
                  r,
                );
            return this.m_mapMatchByKey.get(e);
          }
          OnClickSuggestion(e) {
            let r = this.FindKeyIndex(e);
            r !== void 0 && this.ChooseSuggestion(this.m_rgCurrentMatches[r]);
          }
          OnMouseOverSuggestion(e) {
            let r = this.FindKeyIndex(e);
            r !== void 0 && this.SetSelectedIndex(r);
          }
          BindSelectedElement(e) {
            if (!e) return;
            let r = this.containerRef.current,
              o = e.containerRef.current,
              d = r && r.firstElementChild;
            !o ||
              !d ||
              ((d.scrollTop + d.clientHeight < o.offsetTop ||
                o.offsetTop < d.scrollTop) &&
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
          m_hMobxSearchDisposer;
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
              let r = this.getMaxMatches();
              for (
                let o = 0;
                o < Math.min(r, this.m_rgCurrentMatches.length);
                o++
              ) {
                let d = this.m_rgCurrentMatches[o],
                  y = this.getKey(d),
                  j = o === this.state.selectedIndex;
                e.push(
                  (0, t.jsx)(
                    l,
                    {
                      matchKey: y,
                      fnOnClick: this.OnClickSuggestion,
                      fnOnMouseOver: this.OnMouseOverSuggestion,
                      bIsSelected: j,
                      ref: j ? this.BindSelectedElement : void 0,
                      children: this.renderMatch(d),
                    },
                    y,
                  ),
                );
              }
              this.m_rgCurrentMatches.length > r &&
                e.push(
                  this.renderTooManyMatchesMessage(
                    this.m_rgCurrentMatches.length - r,
                  ),
                );
            } else {
              let r = this.renderNoMatchMessage();
              if (!r) return null;
              e.push(r);
            }
            return (0, t.jsx)("div", {
              className: E().mentionDialogPosition,
              ref: this.containerRef,
              children: (0, t.jsxs)("div", {
                className: E().mentionDialog,
                tabIndex: 0,
                onKeyDown: this.OnKeyDown,
                children: [this.renderHeader(), e],
              }),
            });
          }
        }
        i([m.oI], h.prototype, "OnKeyDown", 1),
          i([m.oI], h.prototype, "OnClickSuggestion", 1),
          i([m.oI], h.prototype, "OnMouseOverSuggestion", 1),
          i([m.oI], h.prototype, "BindSelectedElement", 1);
        class l extends D.PureComponent {
          containerRef = D.createRef();
          OnMouseOver(e) {
            this.props.fnOnMouseOver(this.props.matchKey);
          }
          OnClick(e) {
            this.props.fnOnClick(this.props.matchKey);
          }
          render() {
            return (0, t.jsx)("div", {
              className: (0, A.A)(
                E().suggestOption,
                E().mentionSearchOption,
                this.props.bIsSelected ? E().selected : "",
              ),
              onMouseEnter: this.OnMouseOver,
              onClick: this.OnClick,
              ref: this.containerRef,
              children: this.props.children,
            });
          }
        }
        i([m.oI], l.prototype, "OnMouseOver", 1),
          i([m.oI], l.prototype, "OnClick", 1);
        const g = h;
        var S = a(79786),
          K = a.n(S);
        class L extends g {
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
            return (0, t.jsxs)("div", {
              className: (0, A.A)(
                K().EmoticonSuggestion,
                e.recent ? "Recent" : "",
              ),
              children: [
                (0, t.jsxs)("div", {
                  className: K().Emoticon,
                  children: [
                    (0, t.jsx)(_.n, { emoticon: e.name }),
                    e.new && (0, t.jsx)(v.iD, {}),
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
        const w = L;
        var p = a(34510),
          O = a.n(p),
          c = a(18210);
        class W extends g {
          performSearch(e) {
            let r = Array();
            return (
              this.props.supportBBCodes.forEach((o) => {
                o.indexOf(e) >= 0 && r.push({ name: o });
              }),
              r
            );
          }
          getSelection(e) {
            return "[" + e.name + "][/" + e.name + "]";
          }
          getKey(e) {
            return e.name;
          }
          renderMatch(e) {
            return (0, t.jsxs)(
              "div",
              {
                className: (0, A.A)(O().BBCodeSuggestion),
                children: [
                  (0, t.jsx)("div", {
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
            return (0, t.jsx)(
              "div",
              {
                className: (0, A.A)(E().mentionSearchOption, E().noMatches),
                children: (0, c.we)("#Bbcode_No_Match"),
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
        var J = Object.defineProperty,
          q = Object.getOwnPropertyDescriptor,
          F = (s, e, r, o) => {
            for (
              var d = o > 1 ? void 0 : o ? q(e, r) : e, y = s.length - 1, j;
              y >= 0;
              y--
            )
              (j = s[y]) && (d = (o ? j(e, r, d) : j(d)) || d);
            return o && d && J(e, r, d), d;
          };
        class N extends D.Component {
          descTextAreaRef = D.createRef();
          m_MentionDialog;
          m_bDisabled = !0;
          m_iMentionSearchStartOffset;
          m_iMentionSearchCancelledOffset;
          constructor(e) {
            super(e),
              (this.state = {
                mentionSearch: void 0,
                activeSuggestSearchType: void 0,
              });
          }
          BindMentionDialog(e) {
            this.m_MentionDialog = e ?? void 0;
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
            (e.keyCode == f.Dh || e.keyCode == f.jt) &&
              (this.m_iMentionSearchCancelledOffset = void 0);
          }
          FindMatchOpener(e, r, o) {
            for (let d = o - 1; d >= 0; d--) {
              if (r[d] == e) return d;
              if (
                r[d] == " " ||
                r[d] ==
                  `
`
              )
                break;
            }
          }
          ReplaceSuggestedText(e, r) {
            const o = this.descTextAreaRef.current;
            if (!o) return;
            let d = o.selectionStart,
              y = o.value,
              j = this.FindMatchOpener(e, y, d);
            if (
              (j === void 0 &&
                e == "@" &&
                (j = this.FindMatchOpener("\uFF20", y, d)),
              j !== void 0)
            ) {
              let H = y.substr(0, j);
              (H += r), (d >= y.length || y[d] != " ") && (H += " ");
              let Ie = H.length;
              (H += y.substr(d)),
                (o.value = H),
                (o.selectionStart = o.selectionEnd = Ie),
                this.props.fnSetText(H),
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
          OnEmoticonSuggestionSelected(e, r) {
            if (!r) {
              (this.m_iMentionSearchCancelledOffset =
                this.m_iMentionSearchStartOffset),
                this.ClearMentionSearchState();
              return;
            }
            this.ReplaceSuggestedText(":", ":" + r + ":"),
              this.ClearMentionSearchState();
          }
          OnBBCodeSuggestionSelected(e, r) {
            if (!r) {
              (this.m_iMentionSearchCancelledOffset =
                this.m_iMentionSearchStartOffset),
                this.ClearMentionSearchState();
              return;
            }
            this.ReplaceSuggestedText("[", r), this.ClearMentionSearchState();
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
            let r = e.selectionStart,
              o = e.value,
              d,
              y;
            for (let H = r - 1; H >= 0; H--) {
              let Ie = H > 0 ? o[H - 1] : void 0;
              if (this.props.emoticonStore && o[H] == ":" && o.length > 2) {
                (!Ie ||
                  Ie == " " ||
                  Ie ==
                    `
` ||
                  Ie == ":") &&
                  ((d = H), (y = "Emoticon"));
                break;
              } else if (o[H] == "[" && (H + 1 > o.length || o[H + 1] != "/")) {
                (!Ie ||
                  Ie == " " ||
                  Ie ==
                    `
` ||
                  Ie == "]") &&
                  ((d = H), (y = "BBCode"));
                break;
              } else if (
                o[H] == " " ||
                o[H] ==
                  `
`
              )
                break;
            }
            if (d === void 0 || d === this.m_iMentionSearchCancelledOffset) {
              this.ClearMentionSearchState();
              return;
            }
            let j = o.substr(d + 1, r - d - 1);
            (this.m_iMentionSearchStartOffset = d),
              this.setState({ activeSuggestSearchType: y, mentionSearch: j });
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
                supportBBCodes: r,
                fnSetText: o,
                ...d
              } = this.props,
              y;
            switch (this.state.activeSuggestSearchType) {
              case "Emoticon":
                e &&
                  (y = (0, t.jsx)(w, {
                    emoticonStore: e,
                    strSearch: this.state.mentionSearch,
                    nMinimumSearchLengthBeforeAutoSelection: 2,
                    onSuggestionSelected: this.OnEmoticonSuggestionSelected,
                    ref: this.BindMentionDialog,
                  }));
                break;
              case "BBCode":
                y = (0, t.jsx)(W, {
                  supportBBCodes: r,
                  strSearch: this.state.mentionSearch,
                  nMinimumSearchLengthBeforeAutoSelection: 2,
                  onSuggestionSelected: this.OnBBCodeSuggestionSelected,
                  ref: this.BindMentionDialog,
                });
                break;
            }
            return (0, t.jsxs)(D.Fragment, {
              children: [
                y,
                (0, t.jsx)("textarea", {
                  ...d,
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
        F([m.oI], N.prototype, "BindMentionDialog", 1),
          F([m.oI], N.prototype, "OnKeyDown", 1),
          F([m.oI], N.prototype, "OnFocus", 1),
          F([m.oI], N.prototype, "OnKeyPress", 1),
          F([m.oI], N.prototype, "OnClick", 1),
          F([m.oI], N.prototype, "OnEmoticonSuggestionSelected", 1),
          F([m.oI], N.prototype, "OnBBCodeSuggestionSelected", 1),
          F([m.oI], N.prototype, "FocusTextInput", 1),
          F([m.oI], N.prototype, "GetTextAreaRef", 1),
          F([m.oI], N.prototype, "GetTextAreaCurrent", 1);
        var ge = a(19316),
          xe = a(22714),
          ze = a(95695),
          Y = a.n(ze),
          V = a(2801),
          ee = a(88003),
          pe = a(41609),
          se = a.n(pe),
          ve = a(82734),
          me = a(3166),
          Ze = a(44483),
          pt = a(42993),
          gt = a(68312),
          mt = a(88942),
          Ve = a(35038),
          ae = a(80613),
          k = a.n(ae),
          C = a(75245),
          ut = a(92281);
        class ie extends ae.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              ie.prototype.groupid || C.Sg(ie.M()),
              ae.Message.initialize(this, e, 0, -1, [3], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              ie.sm_m ||
                (ie.sm_m = {
                  proto: ie,
                  fields: {
                    groupid: {
                      n: 1,
                      br: C.qM.readUint32,
                      bw: C.gp.writeUint32,
                    },
                    name: { n: 2, br: C.qM.readString, bw: C.gp.writeString },
                    accountid_members: {
                      n: 3,
                      r: !0,
                      q: !0,
                      br: C.qM.readUint32,
                      pbr: C.qM.readPackedUint32,
                      bw: C.gp.writeRepeatedUint32,
                    },
                  },
                }),
              ie.sm_m
            );
          }
          static MBF() {
            return ie.sm_mbf || (ie.sm_mbf = C.w0(ie.M())), ie.sm_mbf;
          }
          toObject(e = !1) {
            return ie.toObject(e, this);
          }
          static toObject(e, r) {
            return C.BT(ie.M(), e, r);
          }
          static fromObject(e) {
            return C.Uq(ie.M(), e);
          }
          static deserializeBinary(e) {
            let r = new (k().BinaryReader)(e),
              o = new ie();
            return ie.deserializeBinaryFromReader(o, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return C.zj(ie.MBF(), e, r);
          }
          serializeBinary() {
            var e = new (k().BinaryWriter)();
            return ie.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {
            C.i0(ie.M(), e, r);
          }
          serializeBase64String() {
            var e = new (k().BinaryWriter)();
            return (
              ie.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CFriendsListCategory";
          }
        }
        class Ae extends ae.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(), ae.Message.initialize(this, e, 0, -1, void 0, null);
          }
          toObject(e = !1) {
            return Ae.toObject(e, this);
          }
          static toObject(e, r) {
            return e ? { $jspbMessageInstance: r } : {};
          }
          static fromObject(e) {
            return new Ae();
          }
          static deserializeBinary(e) {
            let r = new (k().BinaryReader)(e),
              o = new Ae();
            return Ae.deserializeBinaryFromReader(o, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return e;
          }
          serializeBinary() {
            var e = new (k().BinaryWriter)();
            return Ae.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {}
          serializeBase64String() {
            var e = new (k().BinaryWriter)();
            return (
              Ae.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CFriendsList_GetCategories_Request";
          }
        }
        class oe extends ae.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              oe.prototype.categories || C.Sg(oe.M()),
              ae.Message.initialize(this, e, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              oe.sm_m ||
                (oe.sm_m = {
                  proto: oe,
                  fields: { categories: { n: 1, c: ie, r: !0, q: !0 } },
                }),
              oe.sm_m
            );
          }
          static MBF() {
            return oe.sm_mbf || (oe.sm_mbf = C.w0(oe.M())), oe.sm_mbf;
          }
          toObject(e = !1) {
            return oe.toObject(e, this);
          }
          static toObject(e, r) {
            return C.BT(oe.M(), e, r);
          }
          static fromObject(e) {
            return C.Uq(oe.M(), e);
          }
          static deserializeBinary(e) {
            let r = new (k().BinaryReader)(e),
              o = new oe();
            return oe.deserializeBinaryFromReader(o, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return C.zj(oe.MBF(), e, r);
          }
          serializeBinary() {
            var e = new (k().BinaryWriter)();
            return oe.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {
            C.i0(oe.M(), e, r);
          }
          serializeBase64String() {
            var e = new (k().BinaryWriter)();
            return (
              oe.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CFriendsList_GetCategories_Response";
          }
        }
        class te extends ae.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              te.prototype.accountid || C.Sg(te.M()),
              ae.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              te.sm_m ||
                (te.sm_m = {
                  proto: te,
                  fields: {
                    accountid: {
                      n: 1,
                      br: C.qM.readUint32,
                      bw: C.gp.writeUint32,
                    },
                    clanid: { n: 2, br: C.qM.readUint32, bw: C.gp.writeUint32 },
                    chat_group_id: {
                      n: 3,
                      br: C.qM.readUint64String,
                      bw: C.gp.writeUint64String,
                    },
                  },
                }),
              te.sm_m
            );
          }
          static MBF() {
            return te.sm_mbf || (te.sm_mbf = C.w0(te.M())), te.sm_mbf;
          }
          toObject(e = !1) {
            return te.toObject(e, this);
          }
          static toObject(e, r) {
            return C.BT(te.M(), e, r);
          }
          static fromObject(e) {
            return C.Uq(te.M(), e);
          }
          static deserializeBinary(e) {
            let r = new (k().BinaryReader)(e),
              o = new te();
            return te.deserializeBinaryFromReader(o, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return C.zj(te.MBF(), e, r);
          }
          serializeBinary() {
            var e = new (k().BinaryWriter)();
            return te.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {
            C.i0(te.M(), e, r);
          }
          serializeBase64String() {
            var e = new (k().BinaryWriter)();
            return (
              te.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CFriendsListFavoriteEntry";
          }
        }
        class we extends ae.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(), ae.Message.initialize(this, e, 0, -1, void 0, null);
          }
          toObject(e = !1) {
            return we.toObject(e, this);
          }
          static toObject(e, r) {
            return e ? { $jspbMessageInstance: r } : {};
          }
          static fromObject(e) {
            return new we();
          }
          static deserializeBinary(e) {
            let r = new (k().BinaryReader)(e),
              o = new we();
            return we.deserializeBinaryFromReader(o, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return e;
          }
          serializeBinary() {
            var e = new (k().BinaryWriter)();
            return we.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {}
          serializeBase64String() {
            var e = new (k().BinaryWriter)();
            return (
              we.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CFriendsList_GetFavorites_Request";
          }
        }
        class le extends ae.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              le.prototype.favorites || C.Sg(le.M()),
              ae.Message.initialize(this, e, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              le.sm_m ||
                (le.sm_m = {
                  proto: le,
                  fields: { favorites: { n: 1, c: te, r: !0, q: !0 } },
                }),
              le.sm_m
            );
          }
          static MBF() {
            return le.sm_mbf || (le.sm_mbf = C.w0(le.M())), le.sm_mbf;
          }
          toObject(e = !1) {
            return le.toObject(e, this);
          }
          static toObject(e, r) {
            return C.BT(le.M(), e, r);
          }
          static fromObject(e) {
            return C.Uq(le.M(), e);
          }
          static deserializeBinary(e) {
            let r = new (k().BinaryReader)(e),
              o = new le();
            return le.deserializeBinaryFromReader(o, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return C.zj(le.MBF(), e, r);
          }
          serializeBinary() {
            var e = new (k().BinaryWriter)();
            return le.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {
            C.i0(le.M(), e, r);
          }
          serializeBase64String() {
            var e = new (k().BinaryWriter)();
            return (
              le.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CFriendsList_GetFavorites_Response";
          }
        }
        class ce extends ae.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              ce.prototype.favorites || C.Sg(ce.M()),
              ae.Message.initialize(this, e, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              ce.sm_m ||
                (ce.sm_m = {
                  proto: ce,
                  fields: { favorites: { n: 1, c: te, r: !0, q: !0 } },
                }),
              ce.sm_m
            );
          }
          static MBF() {
            return ce.sm_mbf || (ce.sm_mbf = C.w0(ce.M())), ce.sm_mbf;
          }
          toObject(e = !1) {
            return ce.toObject(e, this);
          }
          static toObject(e, r) {
            return C.BT(ce.M(), e, r);
          }
          static fromObject(e) {
            return C.Uq(ce.M(), e);
          }
          static deserializeBinary(e) {
            let r = new (k().BinaryReader)(e),
              o = new ce();
            return ce.deserializeBinaryFromReader(o, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return C.zj(ce.MBF(), e, r);
          }
          serializeBinary() {
            var e = new (k().BinaryWriter)();
            return ce.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {
            C.i0(ce.M(), e, r);
          }
          serializeBase64String() {
            var e = new (k().BinaryWriter)();
            return (
              ce.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CFriendsList_SetFavorites_Request";
          }
        }
        class je extends ae.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(), ae.Message.initialize(this, e, 0, -1, void 0, null);
          }
          toObject(e = !1) {
            return je.toObject(e, this);
          }
          static toObject(e, r) {
            return e ? { $jspbMessageInstance: r } : {};
          }
          static fromObject(e) {
            return new je();
          }
          static deserializeBinary(e) {
            let r = new (k().BinaryReader)(e),
              o = new je();
            return je.deserializeBinaryFromReader(o, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return e;
          }
          serializeBinary() {
            var e = new (k().BinaryWriter)();
            return je.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {}
          serializeBase64String() {
            var e = new (k().BinaryWriter)();
            return (
              je.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CFriendsList_SetFavorites_Response";
          }
        }
        class he extends ae.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              he.prototype.favorites || C.Sg(he.M()),
              ae.Message.initialize(this, e, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              he.sm_m ||
                (he.sm_m = {
                  proto: he,
                  fields: { favorites: { n: 1, c: te, r: !0, q: !0 } },
                }),
              he.sm_m
            );
          }
          static MBF() {
            return he.sm_mbf || (he.sm_mbf = C.w0(he.M())), he.sm_mbf;
          }
          toObject(e = !1) {
            return he.toObject(e, this);
          }
          static toObject(e, r) {
            return C.BT(he.M(), e, r);
          }
          static fromObject(e) {
            return C.Uq(he.M(), e);
          }
          static deserializeBinary(e) {
            let r = new (k().BinaryReader)(e),
              o = new he();
            return he.deserializeBinaryFromReader(o, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return C.zj(he.MBF(), e, r);
          }
          serializeBinary() {
            var e = new (k().BinaryWriter)();
            return he.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {
            C.i0(he.M(), e, r);
          }
          serializeBase64String() {
            var e = new (k().BinaryWriter)();
            return (
              he.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CFriendsList_FavoritesChanged_Notification";
          }
        }
        class Oe extends ae.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(), ae.Message.initialize(this, e, 0, -1, void 0, null);
          }
          toObject(e = !1) {
            return Oe.toObject(e, this);
          }
          static toObject(e, r) {
            return e ? { $jspbMessageInstance: r } : {};
          }
          static fromObject(e) {
            return new Oe();
          }
          static deserializeBinary(e) {
            let r = new (k().BinaryReader)(e),
              o = new Oe();
            return Oe.deserializeBinaryFromReader(o, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return e;
          }
          serializeBinary() {
            var e = new (k().BinaryWriter)();
            return Oe.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {}
          serializeBase64String() {
            var e = new (k().BinaryWriter)();
            return (
              Oe.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CFriendsList_GetFriendsList_Request";
          }
        }
        class de extends ae.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              de.prototype.friendslist || C.Sg(de.M()),
              ae.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              de.sm_m ||
                (de.sm_m = {
                  proto: de,
                  fields: { friendslist: { n: 1, c: ut.py } },
                }),
              de.sm_m
            );
          }
          static MBF() {
            return de.sm_mbf || (de.sm_mbf = C.w0(de.M())), de.sm_mbf;
          }
          toObject(e = !1) {
            return de.toObject(e, this);
          }
          static toObject(e, r) {
            return C.BT(de.M(), e, r);
          }
          static fromObject(e) {
            return C.Uq(de.M(), e);
          }
          static deserializeBinary(e) {
            let r = new (k().BinaryReader)(e),
              o = new de();
            return de.deserializeBinaryFromReader(o, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return C.zj(de.MBF(), e, r);
          }
          serializeBinary() {
            var e = new (k().BinaryWriter)();
            return de.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {
            C.i0(de.M(), e, r);
          }
          serializeBase64String() {
            var e = new (k().BinaryWriter)();
            return (
              de.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CFriendsList_GetFriendsList_Response";
          }
        }
        var Je;
        ((s) => {
          function e(y, j, H) {
            return y.SendMsg(
              "FriendsList.GetCategories#1",
              (0, Ve.I8)(Ae, j, H),
              oe,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }
          s.GetCategories = e;
          function r(y, j, H) {
            return y.SendMsg(
              "FriendsList.GetFriendsList#1",
              (0, Ve.I8)(Oe, j, H),
              de,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }
          s.GetFriendsList = r;
          function o(y, j, H) {
            return y.SendMsg(
              "FriendsList.GetFavorites#1",
              (0, Ve.I8)(we, j, H),
              le,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }
          s.GetFavorites = o;
          function d(y, j, H) {
            return y.SendMsg(
              "FriendsList.SetFavorites#1",
              (0, Ve.I8)(ce, j, H),
              je,
              { ePrivilege: 1 },
            );
          }
          s.SetFavorites = d;
        })(Je || (Je = {}));
        var qe;
        ((s) => {
          s.FavoritesChangedHandler = {
            name: "FriendsListClient.FavoritesChanged#1",
            request: he,
          };
        })(qe || (qe = {}));
        var kt = a(75916),
          $e = a(99412),
          et = a(35098);
        function Nt(s) {
          const e = useActiveServiceTransport(),
            r = useActiveAccount(),
            o = usePlayerSummaryFactory(),
            d = useQueryClient();
          let y = { loadNicknames: !1, loadFavorites: !1, ...s };
          return useQuery({
            queryKey: ["FriendsList", r, y],
            queryFn: async () => {
              const j = d.fetchQuery(tt(e, r)),
                H = y.loadNicknames ? d.fetchQuery(rt(e, r)) : void 0,
                Ie = y.loadFavorites ? d.fetchQuery(at(e, r)) : void 0,
                Be = await j,
                Ne = new Map(
                  Be.map((Se) => [
                    Se,
                    d.fetchQuery(PlayerSummaryQuery(o, e, Se)),
                  ]),
                );
              let be;
              H && (be = st((await H).nicknames));
              const Re = new Set(await (Ie ?? Promise.resolve([])));
              return (
                await Promise.all(
                  Be.map(async (Se) => {
                    const De = new CSteamID(Se).GetAccountID(),
                      Ke = await Ne.get(Se);
                    if (!Ke) return;
                    const Ge = { accountid: De, persona: Ke };
                    return (
                      Re.has(De) && (Ge.is_favorite = !0),
                      be && be.has(De) && (Ge.nickname = be.get(De)),
                      Ge
                    );
                  }),
                )
              ).filter((Se) => Se !== void 0);
            },
            staleTime: 120 * 1e3,
          });
        }
        function ft() {
          const s = (0, gt.KV)(),
            e = (0, pt.LH)();
          return (0, mt.I)(tt(s, e));
        }
        function tt(s, e) {
          return {
            queryKey: ["GetFriendsList", e],
            queryFn: async () => {
              const r = Ve.w.Init(Oe),
                o = await Je.GetFriendsList(s, r),
                d = [];
              for (const y of o.Body().friendslist()?.friends() ?? []) {
                const j = y.ulfriendid();
                j &&
                  (y.efriendrelationship() == $e._UC ||
                    y.efriendrelationship() == $e.Ec7) &&
                  new B.b(j).BIsIndividualAccount() &&
                  d.push(j);
              }
              return d;
            },
          };
        }
        function Kt() {
          const s = useActiveServiceTransport(),
            e = useActiveAccount();
          return useQuery({
            queryKey: ["GetIgnoredAccounts", e],
            queryFn: async () => {
              const r = CProtoBufMsg.Init(CFriendsList_GetFriendsList_Request);
              return (await FriendsListService.GetFriendsList(s, r))
                .Body()
                .friendslist()
                ?.friends()
                ?.filter((d) => {
                  const y = new CSteamID(d.ulfriendid());
                  return (
                    (d.efriendrelationship() == k_EFriendRelationshipIgnored ||
                      d.efriendrelationship() ==
                        k_EFriendRelationshipIgnoredFriend) &&
                    y.BIsIndividualAccount()
                  );
                })
                .map((d) => d.ulfriendid());
            },
          });
        }
        function It(s = {}) {
          const e = useActiveServiceTransport(),
            r = useActiveAccount();
          return useQuery({ ...rt(e, r), ...s });
        }
        function rt(s, e) {
          return {
            queryKey: ["GetFriendNicknameList", e],
            queryFn: async () => {
              const r = CProtoBufMsg.Init(CPlayer_GetNicknameList_Request);
              return (await PlayerService.GetNicknameList(s, r))
                .Body()
                .toObject();
            },
          };
        }
        function Yt(s = {}) {
          return It({ ...s, select: (e) => st(e.nicknames) });
        }
        function st(s) {
          const e = new Map();
          for (const r of s ?? [])
            r.accountid !== void 0 &&
              r.nickname !== void 0 &&
              e.set(r.accountid, r.nickname);
          return e;
        }
        function Vt(s = {}) {
          const e = useActiveServiceTransport(),
            r = useActiveAccount();
          return useQuery({ ...at(e, r), ...s });
        }
        function at(s, e) {
          return {
            queryKey: ["GetFriendFavorites", e],
            queryFn: async () => {
              const r = CProtoBufMsg.Init(CFriendsList_GetFavorites_Request),
                o = await FriendsListService.GetFavorites(s, r),
                d = [];
              for (const y of o.Body().toObject().favorites ?? [])
                y.accountid && d.push(y.accountid);
              return d;
            },
          };
        }
        async function nt(s, e) {
          const r = CProtoBufMsg.Init(CPlayer_GetFriendsGameplayInfo_Request);
          r.Body().set_appid(e);
          const o = await PlayerService.GetFriendsGameplayInfo(s, r);
          return (
            o.BSuccess() ||
              console.warn(`Failed to get gameplay info: ${o.GetEResult()}`),
            o.Body().toObject()
          );
        }
        function Qt(s, e = {}) {
          const r = useActiveServiceTransport(),
            o = useActiveAccount();
          return useQueries({
            queries: s.map((d) => ({
              queryKey: [`GameplayInfo_${o}_${d}`],
              queryFn: () => nt(r, d),
              ...e,
            })),
          });
        }
        function Ft(s, e = {}) {
          const r = useActiveServiceTransport(),
            o = useActiveAccount();
          return useQuery({
            queryKey: [`GameplayInfo_${o}_${s}`],
            queryFn: async () => await nt(r, s),
            ...e,
          });
        }
        var vt = a(34360),
          yt = a(34736),
          Qe = a(85599),
          Fe = a(71421),
          Tt = a(99312),
          Q = a.n(Tt),
          _t = a(98112),
          St = a(71742),
          bt = a(21254),
          Mt = a(55436),
          Dt = a(64233),
          Et = a(75909);
        const Bt = (0, G.PA)((s) => {
          const {
              clanSteamID: e,
              inputClanImage: r,
              nWidth: o,
              nHeight: d,
              setImage: y,
            } = s,
            j = D.useMemo(() => ({ width: o, height: d }), [o, d]),
            [H, Ie] = D.useState(void 0),
            [Be, Ne] = D.useState(!!r),
            [be, Re] = D.useState(!1),
            Me = (0, Et.zO)(e, "dummy"),
            Se = D.useCallback(
              async (_e) => {
                if (
                  (Me.ClearImages(),
                  _e && (Ne(!0), await Me.AddExistingClanImage(_e, $e.Bhc)))
                ) {
                  Ie(_e);
                  const ye = Me.GetUploadImages()[0].IsValidAssetType(j);
                  ye.error.length == 0 &&
                    !ye.needsCrop &&
                    (!r || r.image_hash != _e.image_hash) &&
                    y(_e);
                }
                Ne(!1);
              },
              [Me, r, y, j],
            );
          D.useEffect(() => {
            Se(r);
          }, [Se, r]);
          const De = (_e) => {
              const Ee = new B.b(me.UF.CLANSTEAMID);
              (0, ee.pg)(
                (0, t.jsx)(Mt.z, {
                  clanSteamID: Ee,
                  fnImageSelectCallBack: (ye) => Se(ye),
                }),
                (0, ve.uX)(_e) ?? window,
              );
            },
            Ke = (_e) => {
              const Ee = (0, ve.uX)(_e) ?? window;
              let ye = Me.GetUploadImages()[0];
              (0, ee.pg)(
                (0, t.jsx)(bt.q, {
                  ownerWin: Ee,
                  uploadFile: ye,
                  forceResolution: { width: o, height: d },
                  fileType: _t.bg.dU,
                }),
                Ee,
              );
            },
            Ge = async () => {
              Re(!0);
              try {
                const _e = await Me.UploadAllImages(j),
                  Ee = Object.values(_e);
                if (Ee && Ee.length > 0) {
                  (0, St.wT)(
                    Ee.length == 1,
                    "ClanImagePickForCertainSize expected size 1, got " +
                      Ee.length,
                  );
                  const ye = Ee[0].bSuccess ? Ee[0].uploadResult : void 0,
                    ct = b.zU.GetHashAndExt(ye ?? null),
                    ht = b.zU.GetThumbHashAndExt(ye ?? null);
                  if (ye?.image_hash && ye.file_type !== void 0 && ct && ht) {
                    const Wt = b.zU.GenerateURLFromHashAndExt(e, ct),
                      Gt = b.zU.GenerateURLFromHashAndExt(e, ht),
                      dt = {
                        imageid: -11231412,
                        image_hash: ye.image_hash,
                        thumbnail_hash: ye.thumbnail_hash,
                        file_type: ye.file_type,
                        file_name: ye.file_name,
                        clanAccountID: e.GetAccountID(),
                        url: Wt,
                        thumb_url: Gt,
                        uploaded_time: Date.now() / 1e3,
                      };
                    Ie(dt), y(dt);
                  }
                }
              } finally {
                Re(!1);
              }
            };
          let Ye = "",
            fe = !1,
            Pe;
          if (Me && Me.GetFilesToUpload().length > 0) {
            Pe = Me.GetUploadImages()[0];
            const _e = Pe.IsValidAssetType(j);
            (Ye = _e.error), (fe = _e.needsCrop);
          }
          return (0, t.jsxs)(t.Fragment, {
            children: [
              Be
                ? (0, t.jsx)(Qe.t, {
                    size: "medium",
                    string: (0, c.we)("#Loading"),
                  })
                : H &&
                  (0, t.jsx)("div", {
                    className: Dt.Image,
                    style: {
                      backgroundImage: `url( '${Pe ? Pe.dataUrl : H.url}' )`,
                      height: `${d}px`,
                      width: `${o}px`,
                    },
                  }),
              !!Ye && (0, t.jsx)("p", { children: Ye }),
              fe &&
                (0, t.jsx)(ge.$n, {
                  onClick: Ke,
                  children: (0, c.we)("#BBCode_ResizeImage"),
                }),
              Pe &&
                Pe.bCropped &&
                (0, t.jsxs)(t.Fragment, {
                  children: [
                    (0, t.jsx)("div", {
                      children: (0, c.we)(
                        "#ClanImagePickAndResize_UploadStatus",
                        Pe.status,
                      ),
                    }),
                    be
                      ? (0, t.jsx)(Qe.t, {
                          string: (0, c.we)("#Uploading"),
                          size: "small",
                        })
                      : (0, t.jsx)(ge.$n, {
                          onClick: Ge,
                          children: (0, c.we)(
                            "#ClanImagePickAndResize_UploadImage",
                          ),
                        }),
                  ],
                }),
              (0, t.jsx)(ge.$n, {
                onClick: De,
                children: (0, c.we)("#BBCode_ChooseImage", o, d),
              }),
            ],
          });
        });
        var xt = a(34592),
          it = Object.defineProperty,
          Ot = Object.getOwnPropertyDescriptor,
          Ct = (s, e, r) =>
            e in s
              ? it(s, e, {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: r,
                })
              : (s[e] = r),
          At = (s, e, r, o) => {
            for (
              var d = o > 1 ? void 0 : o ? Ot(e, r) : e, y = s.length - 1, j;
              y >= 0;
              y--
            )
              (j = s[y]) && (d = (o ? j(e, r, d) : j(d)) || d);
            return o && d && it(e, r, d), d;
          },
          wt = (s, e, r) => Ct(s, typeof e != "symbol" ? e + "" : e, r);
        let Ue = class extends D.Component {
          m_cancelSignal = P().CancelToken.source();
          constructor(s) {
            super(s),
              (this.state = {
                formattingHelp: {
                  __html: Ue.s_formattingHelp.get(s.formatType) ?? "",
                },
              });
          }
          componentDidMount() {
            this.AjaxGetFormattingHelp().catch((s) => {
              this.setState((0, xt.H)(s));
            });
          }
          componentWillUnmount() {
            this.m_cancelSignal.cancel(
              "FormattingHelpWidget component unmounted",
            );
          }
          static GetHelpURL(s, e) {
            return (
              me.TS.COMMUNITY_BASE_URL +
              "comment/" +
              s +
              "/formattinghelp" +
              (e ? "?ajax=1" : "")
            );
          }
          async AjaxGetFormattingHelp() {
            if (this.state.formattingHelp.__html == "") {
              let s = { sessionid: (0, me.KC)() },
                e;
              (e = await P().get(Ue.GetHelpURL(this.props.formatType, !0), {
                params: s,
                cancelToken: this.m_cancelSignal.token,
              })),
                Ue.s_formattingHelp.set(this.props.formatType, e.data),
                this.setState({ formattingHelp: { __html: e.data } });
            }
          }
          render() {
            return this.state.strErrorMsg
              ? (0, t.jsxs)("div", {
                  children: [
                    this.state.strErrorMsg,
                    (0, t.jsx)("br", {}),
                    this.state.errorCode,
                  ],
                })
              : this.state.formattingHelp.__html == ""
                ? (0, t.jsx)(Qe.t, {})
                : (0, t.jsx)(V.o0, {
                    strTitle: (0, c.we)(
                      "#EventEditor_FormattingHelp_GetHelpLink",
                    ),
                    strDescription: "",
                    closeModal: this.props.closeModal,
                    onOK: this.props.closeModal,
                    onCancel: this.props.closeModal,
                    bAlertDialog: !0,
                    className: "ModernBBStyles",
                    children: (0, t.jsx)("div", {
                      dangerouslySetInnerHTML: this.state.formattingHelp,
                    }),
                  });
          }
        };
        wt(Ue, "s_formattingHelp", new Map()), (Ue = At([G.PA], Ue));
        var ot = a(38340),
          ne = a(1917),
          jt = a(11243),
          lt = Object.defineProperty,
          Pt = Object.getOwnPropertyDescriptor,
          Ut = (s, e, r) =>
            e in s
              ? lt(s, e, {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: r,
                })
              : (s[e] = r),
          U = (s, e, r, o) => {
            for (
              var d = o > 1 ? void 0 : o ? Pt(e, r) : e, y = s.length - 1, j;
              y >= 0;
              y--
            )
              (j = s[y]) && (d = (o ? j(e, r, d) : j(d)) || d);
            return o && d && lt(e, r, d), d;
          },
          Lt = (s, e, r) => Ut(s, typeof e != "symbol" ? e + "" : e, r);
        let He = class extends D.Component {
          descAutoTextAreaRef = D.createRef();
          constructor(s) {
            super(s), (this.state = { bShowDragTarget: !1 });
          }
          componentDidMount() {
            M.pU.AddClanImageDragListener(this.ClanImageDragListener);
          }
          componentWillUnmount() {
            M.pU.RemoveClanImageDragListener(this.ClanImageDragListener);
          }
          ClanImageDragListener(s, e) {
            this.state.bShowDragTarget != e &&
              this.setState({ bShowDragTarget: e });
          }
          onFocus(s) {
            s && s.target.select();
          }
          InsertText(s) {
            Z.replaceSelection(this.GetTextAreaRef()?.current, s);
          }
          OnTextAreaDropListener(s) {
            if (
              (s.preventDefault(),
              s.stopPropagation(),
              s.dataTransfer.items && s.dataTransfer.items[0])
            ) {
              let e = s.dataTransfer.getData("text");
              if (e && e.length > 0) {
                for (let r of [b.zU.GetBaseURL(), b.zU.GetBaseURLV2()])
                  if (e.startsWith(r)) {
                    let o =
                      "[img]" + ot.lw + "/" + e.substr(r.length) + "[/img]";
                    Z.replaceSelection(this.GetTextAreaRef()?.current, o);
                    break;
                  }
              }
            }
          }
          GetTextAreaRef() {
            return this.descAutoTextAreaRef.current?.GetTextAreaRef();
          }
          render() {
            return (0, t.jsxs)(D.Fragment, {
              children: [
                (0, t.jsx)(ue, {
                  pathToImages:
                    me.TS.COMMUNITY_CDN_URL +
                    "public/images/sharedfiles/guides/",
                  fnTextareaRef: this.GetTextAreaRef,
                  emoticonStore: this.props.emoticonStore,
                  supportBBCodes: this.props.limitBBCode
                    ? this.props.limitBBCode
                    : R.Kl,
                  bSupportHTMLImport: this.props.bSupportHTMLImport,
                  showFormatHelp: this.props.showFormatHelp,
                  bEmbeddedInDialog: this.props.bEmbeddedInDialog,
                  clanSteamID: this.props.clanSteamID,
                }),
                (0, t.jsx)("div", {
                  className: (0, A.A)(
                    Q().DescriptionCtn,
                    Q().BBCodeEditorInputStyles,
                    this.state.bShowDragTarget ? Q().DragTarget : "",
                    this.props.className ? this.props.className : "",
                  ),
                  children: (0, t.jsx)(N, {
                    cols: 90,
                    rows: this.props.nOverridesRows || 22,
                    maxLength: 64e3,
                    className: (0, A.A)(
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
                      : R.Kl,
                  }),
                }),
              ],
            });
          }
        };
        U([m.oI], He.prototype, "ClanImageDragListener", 1),
          U([m.oI], He.prototype, "onFocus", 1),
          U([m.oI], He.prototype, "OnTextAreaDropListener", 1),
          U([m.oI], He.prototype, "GetTextAreaRef", 1),
          (He = U([G.PA], He));
        class Z {
          static BIsFireFox() {
            return !!new RegExp(/Firefox\/([0-9\.]+)(?:\s|$)/i).exec(
              navigator.userAgent,
            );
          }
          static replaceSelection(e, r) {
            if (!e) return;
            let o = e.selectionStart;
            e.focus(),
              Z.InsertTextAtSelect(r, e),
              e.setSelectionRange(o, o + r.length);
          }
          static getSelectedString(e) {
            return e
              ? e.value.substr(
                  e.selectionStart,
                  e.selectionEnd - e.selectionStart,
                )
              : "";
          }
          static wrapBBCode(e, r, o) {
            if (!o) return;
            let d = Z.getSelectedString(o),
              y = "";
            d.indexOf(e) == 0 && d.lastIndexOf(r) == d.length - r.length
              ? (y = d.substr(e.length, d.length - e.length - r.length))
              : (y = e + d + r),
              Z.replaceSelection(o, y);
          }
          static append(e, r) {
            r &&
              (r.focus(),
              r.setSelectionRange(r.value.length, r.value.length),
              Z.InsertTextAtSelect(e, r));
          }
          static ClearTextArea(e) {
            if (e) {
              e.focus();
              const r = 0,
                o = e.value.length;
              if (r !== o) {
                e.setRangeText
                  ? e.setRangeText("", r, o, "preserve")
                  : (e.value = "");
                const d = new Event("input", { bubbles: !0 });
                e.dispatchEvent(d);
              }
              e.focus();
            }
          }
          static overwrite(e, r) {
            r && (Z.ClearTextArea(r), Z.InsertTextAtSelect(e, r));
          }
          static InsertTextAtSelect(e, r) {
            const o = r.selectionStart,
              d = r.selectionEnd;
            if (o !== null && d !== null) {
              r.setRangeText
                ? r.setRangeText(e, o, d, "preserve")
                : (r.value = r.value.slice(0, o) + e + r.value.slice(d));
              const y = new Event("input", { bubbles: !0 });
              r.dispatchEvent(y),
                (r.selectionStart = r.selectionEnd = o + e.length);
            }
            r.focus();
          }
        }
        let ue = class extends D.Component {
          m_linkPopupRef = D.createRef();
          onBold() {
            Z.wrapBBCode("[b]", "[/b]", this.props.fnTextareaRef()?.current);
          }
          onItalics() {
            Z.wrapBBCode("[i]", "[/i]", this.props.fnTextareaRef()?.current);
          }
          onUnderline() {
            Z.wrapBBCode("[u]", "[/u]", this.props.fnTextareaRef()?.current);
          }
          onStrikeThrough() {
            Z.wrapBBCode(
              "[strike]",
              "[/strike]",
              this.props.fnTextareaRef()?.current,
            );
          }
          onHeader() {
            Z.wrapBBCode("[h1]", "[/h1]", this.props.fnTextareaRef()?.current);
          }
          onHeader2() {
            Z.wrapBBCode("[h2]", "[/h2]", this.props.fnTextareaRef()?.current);
          }
          onHeader3() {
            Z.wrapBBCode("[h3]", "[/h3]", this.props.fnTextareaRef()?.current);
          }
          onUnorderedList() {
            this.handleList("list");
          }
          onOrderedList() {
            this.handleList("olist");
          }
          handleList(s) {
            let e = this.props.fnTextareaRef()?.current;
            if (!e) return;
            let r =
                "[" +
                s +
                `]
`,
              o = "[/" + s + "]";
            if (e.selectionStart == e.selectionEnd)
              Z.wrapBBCode(
                r + "[*]",
                `
` + o,
                e,
              );
            else {
              let d = Z.getSelectedString(e),
                y =
                  r +
                  d
                    .split(`
`)
                    .map((j) => (j.match(/\*+\s/) ? "[*]" : "[*] ") + j)
                    .join(`
`) +
                  `
` +
                  o;
              Z.replaceSelection(e, y);
            }
          }
          OnAddLink(s) {
            const e = this.props.fnTextareaRef();
            e &&
              (0, ee.HT)(
                (0, t.jsx)(Le, { textareaRef: e }),
                (0, ve.uX)(s) ?? window,
              );
          }
          ShowHelpDialog(s) {
            this.props.showFormatHelp &&
              (0, ee.HT)(
                (0, t.jsx)(Ue, { formatType: this.props.showFormatHelp }),
                (0, ve.uX)(s) ?? window,
              );
          }
          OnConvertHTMLToBBCodeDialog(s) {
            const e = this.props.fnTextareaRef();
            if (!e) return;
            const r = (0, ve.uX)(s) ?? window;
            (0, ee.HT)((0, t.jsx)(We, { ownerWindow: r, textareaRef: e }), r);
          }
          OnOpenYoutubeDialog(s) {
            const e = this.props.fnTextareaRef();
            if (!e) return;
            let r = me.TS.IMG_URL + "applications/community/";
            (0, ee.HT)(
              (0, t.jsx)(Ce, { textareaRef: e, pathToImages: r }),
              (0, ve.uX)(s) ?? window,
            );
          }
          OnOpenImageDialog(s) {
            const e = this.props.fnTextareaRef();
            e &&
              (0, ee.HT)(
                (0, t.jsx)(ke, { textareaRef: e }),
                (0, ve.uX)(s) ?? window,
              );
          }
          OnOpenSpeakerDialog(s) {
            const e = this.props.fnTextareaRef(),
              r = this.props.clanSteamID;
            !e ||
              !r ||
              (0, ee.pg)(
                (0, t.jsx)(Rt, { clanSteamID: r, textareaRef: e }),
                (0, ve.uX)(s) ?? window,
              );
          }
          OnEmoticonSelected(s, e = !1) {
            let r = `\u02D0${s}\u02D0`;
            Z.replaceSelection(this.props.fnTextareaRef()?.current, r),
              this.props.fnTextareaRef()?.current?.focus();
          }
          BSupports(s) {
            return this.props.supportBBCodes.findIndex((e) => e == s) >= 0;
          }
          render() {
            const {
              showFormatHelp: s,
              bEmbeddedInDialog: e,
              bSupportHTMLImport: r,
              pathToImages: o,
            } = this.props;
            let d;
            return (
              s &&
                (e
                  ? (d = (0, t.jsx)("span", {
                      className: (0, A.A)("ttip", Q().ActionGetHelp),
                      children: (0, t.jsx)(Fe.he, {
                        toolTipContent: (0, c.we)(
                          "#EventEditor_FormattingHelp_GetHelpLink",
                        ),
                        children: (0, t.jsxs)("a", {
                          href: Ue.GetHelpURL(s, !1),
                          target: me.TS.IN_CLIENT ? void 0 : "_blank",
                          children: [
                            (0, t.jsx)("img", { src: o + "/action_help.png" }),
                            " ",
                            (0, c.we)(
                              "#EventEditor_FormattingHelp_GetHelpLink",
                            ),
                          ],
                        }),
                      }),
                    }))
                  : (d = (0, t.jsx)("span", {
                      onClick: this.ShowHelpDialog,
                      className: (0, A.A)("ttip", Q().ActionGetHelp),
                      children: (0, t.jsxs)(Fe.he, {
                        toolTipContent: (0, c.we)(
                          "#EventEditor_FormattingHelp_GetHelpLink",
                        ),
                        children: [
                          (0, t.jsx)("img", { src: o + "/action_help.png" }),
                          " ",
                          (0, c.we)("#EventEditor_FormattingHelp_GetHelpLink"),
                        ],
                      }),
                    }))),
              (0, t.jsxs)("div", {
                className: Q().TextEditorToolBarContainer,
                children: [
                  this.BSupports("b") &&
                    (0, t.jsx)(Te, {
                      onClick: this.onBold,
                      tooltip: (0, c.we)("#Editor_Bold"),
                      imgURL: this.props.pathToImages + "/format_bold.png",
                    }),
                  this.BSupports("u") &&
                    (0, t.jsx)(Te, {
                      onClick: this.onUnderline,
                      tooltip: (0, c.we)("#Editor_Underline"),
                      imgURL: this.props.pathToImages + "/format_underline.png",
                    }),
                  this.BSupports("i") &&
                    (0, t.jsx)(Te, {
                      onClick: this.onItalics,
                      tooltip: (0, c.we)("#Editor_Italics"),
                      imgURL: this.props.pathToImages + "/format_italic.png",
                    }),
                  this.BSupports("strike") &&
                    (0, t.jsx)(Te, {
                      onClick: this.onStrikeThrough,
                      tooltip: (0, c.we)("#Editor_StrikeThrough"),
                      imgURL: this.props.pathToImages + "/format_strike.png",
                    }),
                  !!(this.BSupports("url") && !e) &&
                    (0, t.jsx)(Te, {
                      onClick: this.OnAddLink,
                      tooltip: (0, c.we)("#Editor_Link"),
                      imgURL: this.props.pathToImages + "/format_link.png",
                    }),
                  this.BSupports("list") &&
                    (0, t.jsx)(Te, {
                      onClick: this.onUnorderedList,
                      tooltip: (0, c.we)("#Editor_Unordered"),
                      imgURL: this.props.pathToImages + "/format_bullet.png",
                    }),
                  this.BSupports("olist") &&
                    (0, t.jsx)(Te, {
                      onClick: this.onOrderedList,
                      tooltip: (0, c.we)("#Editor_Ordered"),
                      imgURL: this.props.pathToImages + "/format_numbered.png",
                    }),
                  this.BSupports("h1") &&
                    (0, t.jsx)(Te, {
                      onClick: this.onHeader,
                      tooltip: (0, c.we)("#Editor_Header"),
                      imgURL: this.props.pathToImages + "/format_header1.png",
                    }),
                  this.BSupports("h2") &&
                    (0, t.jsx)(Te, {
                      onClick: this.onHeader2,
                      tooltip: (0, c.we)("#Editor_Header2"),
                      imgURL: this.props.pathToImages + "/format_header2.png",
                    }),
                  this.BSupports("h3") &&
                    (0, t.jsx)(Te, {
                      onClick: this.onHeader3,
                      tooltip: (0, c.we)("#Editor_Header3"),
                      imgURL: this.props.pathToImages + "/format_header3.png",
                    }),
                  this.BSupports("previewyoutube") &&
                    (0, t.jsx)(Te, {
                      onClick: this.OnOpenYoutubeDialog,
                      tooltip: (0, c.we)("#EventEditor_InsertYouTube"),
                      imgURL: Ze.A,
                    }),
                  (0, t.jsx)("span", {
                    className: "ttip",
                    children:
                      this.props.emoticonStore &&
                      (0, t.jsx)(Fe.he, {
                        toolTipContent: (0, c.we)("#Editor_Emoticon"),
                        children: (0, t.jsx)(xe.A, {
                          title: " ",
                          className: (0, A.A)(Q().EmoteOuter),
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
                    (0, t.jsx)(Te, {
                      onClick: this.OnOpenImageDialog,
                      tooltip: (0, c.we)("#EventEditor_InsertImage"),
                      imgURL: this.props.pathToImages + "/insert_img.png",
                    }),
                  !!(
                    me.iA.is_support &&
                    this.props.clanSteamID &&
                    this.BSupports("speaker")
                  ) &&
                    (0, t.jsx)(Te, {
                      onClick: this.OnOpenSpeakerDialog,
                      tooltip: (0, c.we)("#EventEditor_AddSpeaker"),
                      imgURL: this.props.pathToImages + "/insert_img.png",
                    }),
                  !!(r && !e) &&
                    (0, t.jsx)(Te, {
                      onClick: this.OnConvertHTMLToBBCodeDialog,
                      className: Q().ActionImportHTML,
                      tooltip: (0, c.we)("#EventEditor_ImportFromHTML_ttip"),
                      children: (0, c.we)("#EventEditor_ImportHTML"),
                    }),
                  d,
                ],
              })
            );
          }
        };
        U([m.oI], ue.prototype, "onBold", 1),
          U([m.oI], ue.prototype, "onItalics", 1),
          U([m.oI], ue.prototype, "onUnderline", 1),
          U([m.oI], ue.prototype, "onStrikeThrough", 1),
          U([m.oI], ue.prototype, "onHeader", 1),
          U([m.oI], ue.prototype, "onHeader2", 1),
          U([m.oI], ue.prototype, "onHeader3", 1),
          U([m.oI], ue.prototype, "onUnorderedList", 1),
          U([m.oI], ue.prototype, "onOrderedList", 1),
          U([m.oI], ue.prototype, "OnAddLink", 1),
          U([m.oI], ue.prototype, "ShowHelpDialog", 1),
          U([m.oI], ue.prototype, "OnConvertHTMLToBBCodeDialog", 1),
          U([m.oI], ue.prototype, "OnOpenYoutubeDialog", 1),
          U([m.oI], ue.prototype, "OnOpenImageDialog", 1),
          U([m.oI], ue.prototype, "OnOpenSpeakerDialog", 1),
          U([m.oI], ue.prototype, "OnEmoticonSelected", 1),
          (ue = U([G.PA], ue));
        function Te(s) {
          return (0, t.jsx)("span", {
            onClick: s.onClick,
            className: s.className,
            children: (0, t.jsxs)(Fe.he, {
              toolTipContent: s.tooltip,
              className: "ttip",
              children: [
                !!s.imgURL && (0, t.jsx)("img", { src: s.imgURL }),
                s.children,
              ],
            }),
          });
        }
        let Ce = class extends D.Component {
          state = { youtubeInput: "", alignment: ne.V2.left };
          OnYoutubeInsertLink() {
            const s =
              this.state.youtubeInput && (0, z.XU)(this.state.youtubeInput);
            if (!s) {
              alert((0, c.we)("#EventEditor_InsertYouTube_NoURL"));
              return;
            }
            if (this.state.alignment == ne.V2.summary) {
              const e =
                "https://www.youtube.com/watch?v=" +
                s.strVideoID +
                (s.nStartSeconds ? "&t=" + s.nStartSeconds : "");
              Z.wrapBBCode(e, "", this.props.textareaRef.current);
            } else {
              let e =
                "[previewyoutube=" +
                s.strVideoID +
                ";" +
                this.state.alignment +
                "]";
              Z.wrapBBCode(
                e,
                "[/previewyoutube]",
                this.props.textareaRef.current,
              );
            }
            this.setState({ youtubeInput: "", alignment: ne.V2.left });
          }
          OnUrlChange(s) {
            this.state.youtubeInput != s.target.value &&
              this.setState({ youtubeInput: s.target.value });
          }
          OnLeftSelected() {
            this.setState({ alignment: ne.V2.left });
          }
          OnRightSelected() {
            this.setState({ alignment: ne.V2.right });
          }
          OnFullSelected() {
            this.setState({ alignment: ne.V2.full });
          }
          OnSummarySelected() {
            this.setState({ alignment: ne.V2.summary });
          }
          OnOuterDivClickPassDown(s) {}
          render() {
            return (0, t.jsx)(V.o0, {
              strTitle: (0, c.we)("#EventEditor_InsertYouTube"),
              strDescription: "",
              closeModal: this.props.closeModal,
              onCancel: this.props.closeModal,
              onOK: this.OnYoutubeInsertLink,
              strOKButtonText: (0, c.we)("#EventEditor_InsertYouTube"),
              className: Q().BBCodeEditorInputStyles,
              children: (0, t.jsxs)("div", {
                className: Q().YouTubeInput,
                children: [
                  (0, t.jsx)("div", {
                    className: "DialogInputLabelGroup",
                    children: (0, t.jsxs)("label", {
                      children: [
                        (0, t.jsx)("div", {
                          className: "DialogLabel",
                          children: (0, c.we)("#EventEditor_InsertYouTube_URL"),
                        }),
                        (0, t.jsx)("div", {
                          className: "DialogInput_Wrapper",
                          children: (0, t.jsx)("input", {
                            className: "DialogInput DialogTextInputBase",
                            ref: (s) => {
                              s?.focus();
                            },
                            type: "text",
                            value: this.state.youtubeInput,
                            onChange: this.OnUrlChange,
                            placeholder: (0, c.we)(
                              "#EventEditor_InsertYouTube_Placholder",
                            ),
                          }),
                        }),
                      ],
                    }),
                  }),
                  (0, t.jsxs)("div", {
                    className: "DialogInputLabelGroup",
                    children: [
                      (0, t.jsx)("div", {
                        className: "DialogLabel",
                        children: (0, c.we)(
                          "#EventEditor_InsertYouTube_Position",
                        ),
                      }),
                      (0, t.jsxs)("div", {
                        className: Q().YouTubePreviewInsertOption,
                        onClick: this.OnOuterDivClickPassDown,
                        children: [
                          (0, t.jsx)("input", {
                            type: "radio",
                            name: "YouTubePreviewInsertType",
                            id: ne.V2.left,
                            value: ne.V2.left,
                            checked: this.state.alignment == ne.V2.left,
                            onChange: this.OnLeftSelected,
                          }),
                          (0, t.jsx)("label", {
                            htmlFor: ne.V2.left,
                            children: (0, t.jsx)("span", {
                              children: (0, c.we)(
                                "#EventEditor_InsertYouTube_Left",
                              ),
                            }),
                          }),
                        ],
                      }),
                      (0, t.jsxs)("div", {
                        className: Q().YouTubePreviewInsertOption,
                        onClick: this.OnOuterDivClickPassDown,
                        children: [
                          (0, t.jsx)("input", {
                            type: "radio",
                            name: "YouTubePreviewInsertType",
                            id: ne.V2.right,
                            value: ne.V2.right,
                            checked: this.state.alignment == ne.V2.right,
                            onChange: this.OnRightSelected,
                          }),
                          (0, t.jsx)("label", {
                            htmlFor: ne.V2.right,
                            children: (0, t.jsx)("span", {
                              children: (0, c.we)(
                                "#EventEditor_InsertYouTube_Right",
                              ),
                            }),
                          }),
                        ],
                      }),
                      (0, t.jsxs)("div", {
                        className: Q().YouTubePreviewInsertOption,
                        onClick: this.OnOuterDivClickPassDown,
                        children: [
                          (0, t.jsx)("input", {
                            type: "radio",
                            name: "YouTubePreviewInsertType",
                            id: ne.V2.full,
                            value: ne.V2.full,
                            checked: this.state.alignment == ne.V2.full,
                            onChange: this.OnFullSelected,
                          }),
                          (0, t.jsx)("label", {
                            htmlFor: ne.V2.full,
                            children: (0, t.jsx)("span", {
                              children: (0, c.we)(
                                "#EventEditor_InsertYouTube_Full",
                              ),
                            }),
                          }),
                        ],
                      }),
                      (0, t.jsxs)("div", {
                        className: Q().YouTubePreviewInsertOption,
                        onClick: this.OnOuterDivClickPassDown,
                        children: [
                          (0, t.jsx)("input", {
                            type: "radio",
                            name: "YouTubePreviewInsertType",
                            id: ne.V2.summary,
                            value: ne.V2.summary,
                            checked: this.state.alignment == ne.V2.summary,
                            onChange: this.OnSummarySelected,
                          }),
                          (0, t.jsx)("label", {
                            htmlFor: ne.V2.summary,
                            children: (0, t.jsx)("span", {
                              children: (0, c.we)(
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
        U([m.oI], Ce.prototype, "OnYoutubeInsertLink", 1),
          U([m.oI], Ce.prototype, "OnUrlChange", 1),
          U([m.oI], Ce.prototype, "OnLeftSelected", 1),
          U([m.oI], Ce.prototype, "OnRightSelected", 1),
          U([m.oI], Ce.prototype, "OnFullSelected", 1),
          U([m.oI], Ce.prototype, "OnSummarySelected", 1),
          U([m.oI], Ce.prototype, "OnOuterDivClickPassDown", 1),
          (Ce = U([G.PA], Ce));
        let Le = class extends D.Component {
          state = { textToDisplay: "", strURL: "" };
          LoadFromTextArea() {
            const { textareaRef: s } = this.props;
            if (s && s.current) {
              let e = Z.getSelectedString(s.current),
                r = Le.m_regExp.exec(e);
              r
                ? this.setState({ strURL: r[1], textToDisplay: r[2] })
                : this.setState({ textToDisplay: e });
            }
          }
          componentDidMount() {
            this.LoadFromTextArea();
          }
          onLinkTitleUpdate(s) {
            this.setState({ textToDisplay: s.target.value });
          }
          onLinkURLUpdate(s) {
            this.setState({ strURL: s.target.value });
          }
          onInsertLink() {
            const { strURL: s, textToDisplay: e } = this.state;
            let r = "[url=" + s + "]" + e + "[/url]";
            Z.replaceSelection(this.props.textareaRef.current, r);
          }
          render() {
            return (0, t.jsx)(V.o0, {
              strTitle: (0, c.we)("#Editor_Link"),
              strDescription: "",
              closeModal: this.props.closeModal,
              onOK: this.onInsertLink,
              onCancel: this.props.closeModal,
              strOKButtonText: (0, c.we)("#EventEditor_InsertLinkURL"),
              className: Q().BBCodeEditorInputStyles,
              children: (0, t.jsxs)("div", {
                className: Q().EventEditorLinkInput,
                children: [
                  (0, t.jsx)("div", {
                    className: "DialogInputLabelGroup",
                    children: (0, t.jsxs)("label", {
                      children: [
                        (0, t.jsx)("div", {
                          className: "DialogLabel",
                          children: (0, c.we)("#EventEditor_LinkDescription"),
                        }),
                        (0, t.jsx)("div", {
                          className: "DialogInput_Wrapper",
                          children: (0, t.jsx)("input", {
                            type: "text",
                            onChange: this.onLinkTitleUpdate,
                            value: this.state.textToDisplay,
                            className: "DialogInput DialogTextInputBase",
                          }),
                        }),
                      ],
                    }),
                  }),
                  (0, t.jsx)("div", {
                    className: "DialogInputLabelGroup",
                    children: (0, t.jsxs)("label", {
                      children: [
                        (0, t.jsx)("div", {
                          className: "DialogLabel",
                          children: (0, c.we)("#EventEditor_LinkURL"),
                        }),
                        (0, t.jsx)("div", {
                          className: "DialogInput_Wrapper",
                          children: (0, t.jsx)("input", {
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
        Lt(Le, "m_regExp", new RegExp(/\[url=([^\]]*)\]([^\[\]]+)\[\/url\]/i)),
          U([m.oI], Le.prototype, "onLinkTitleUpdate", 1),
          U([m.oI], Le.prototype, "onLinkURLUpdate", 1),
          U([m.oI], Le.prototype, "onInsertLink", 1),
          (Le = U([G.PA], Le));
        let ke = class extends D.Component {
          refFirstInput = D.createRef();
          state = { imgURL: "", anchorURL: "" };
          componentDidMount() {
            this.refFirstInput.current?.focus();
          }
          OnImageInsert() {
            const { anchorURL: s, imgURL: e } = this.state;
            let r = "",
              o = "";
            s && s.length > 0 && ((r += "[url=" + s + "]"), (o = "[/url]" + o)),
              (r += "[img]" + e),
              (o = "[/img]" + o),
              Z.wrapBBCode(r, o, this.props.textareaRef.current);
          }
          OnImageURLChange(s) {
            this.state.imgURL != s.target.value &&
              this.setState({ imgURL: s.target.value });
          }
          OnAnchorURLChange(s) {
            this.state.anchorURL != s.target.value &&
              this.setState({ anchorURL: s.target.value });
          }
          render() {
            const { imgURL: s, anchorURL: e } = this.state;
            return (0, t.jsx)(V.o0, {
              strTitle: (0, c.we)("#EventEditor_InsertImage_Title"),
              strDescription: "",
              closeModal: this.props.closeModal,
              onCancel: this.props.closeModal,
              onOK: this.OnImageInsert,
              strOKButtonText: (0, c.we)("#EventEditor_InsertImage_Title"),
              className: Q().BBCodeEditorInputStyles,
              children: (0, t.jsxs)("div", {
                className: Q().EventEditorLinkInput,
                children: [
                  (0, t.jsx)("p", {
                    children: (0, c.we)("#EventEditor_InsertImage_Desc"),
                  }),
                  (0, t.jsx)("div", {
                    className: "DialogInputLabelGroup",
                    children: (0, t.jsxs)("label", {
                      children: [
                        (0, t.jsx)("div", {
                          className: "DialogLabel",
                          children: (0, c.we)("#EventEditor_InsertImage_URL"),
                        }),
                        (0, t.jsx)("div", {
                          className: "DialogInput_Wrapper",
                          children: (0, t.jsx)("input", {
                            className: "DialogInput DialogTextInputBase",
                            type: "text",
                            value: s,
                            onChange: this.OnImageURLChange,
                            placeholder: (0, c.we)(
                              "#EventEditor_InsertImage_Placeholder",
                            ),
                            ref: this.refFirstInput,
                          }),
                        }),
                      ],
                    }),
                  }),
                  (0, t.jsx)("div", {
                    className: "DialogInputLabelGroup",
                    children: (0, t.jsxs)("label", {
                      children: [
                        (0, t.jsx)("div", {
                          className: "DialogLabel",
                          children: (0, c.we)(
                            "#EventEditor_InsertImage_Anchor",
                          ),
                        }),
                        (0, t.jsx)("div", {
                          className: "DialogInput_Wrapper",
                          children: (0, t.jsx)("input", {
                            className: "DialogInput DialogTextInputBase",
                            type: "text",
                            value: e,
                            onChange: this.OnAnchorURLChange,
                            placeholder: (0, c.we)(
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
        U([m.oI], ke.prototype, "OnImageInsert", 1),
          U([m.oI], ke.prototype, "OnImageURLChange", 1),
          U([m.oI], ke.prototype, "OnAnchorURLChange", 1),
          (ke = U([G.PA], ke));
        const Rt = (s) => {
          const [e, r] = D.useState(""),
            [o, d] = D.useState(""),
            [y, j] = D.useState(""),
            [H, Ie] = D.useState(""),
            [Be, Ne] = D.useState(void 0),
            [be, Re] = D.useState(void 0),
            { data: Me } = ft(),
            { isLoading: Se, data: De } = (0, et.js)(be?.GetAccountID()),
            Ke = () => {
              let fe = `[speaker name="${e.trim()}"`;
              if (
                (o.trim().length > 0 && (fe += ` title="${o}"`),
                y.trim().length > 0 && (fe += ` company="${y}"`),
                Be)
              ) {
                const Pe =
                  ot.lw + "/" + Be.clanAccountID + "/" + b.zU.GetHashAndExt(Be);
                fe += ` photo="${Pe}"`;
              }
              be && (fe += ` steamid="${be.ConvertTo64BitString()}"`),
                (fe += `]${H}[/speaker]`),
                Z.replaceSelection(s.textareaRef.current, fe);
            },
            Ge = e.trim().length != 0 && H.trim().length != 0,
            Ye = 184;
          return (0, t.jsx)(V.o0, {
            strTitle: (0, c.we)("#EventEditor_AddSpeaker"),
            strDescription: (0, c.we)("#EventEditor_AddSpeaker_Desc"),
            closeModal: s.closeModal,
            onCancel: s.closeModal,
            bOKDisabled: !Ge,
            onOK: Ke,
            className: Q().BBCodeEditorInputStyles,
            children: (0, t.jsxs)("div", {
              className: Q().InsertSpeakerCtn,
              children: [
                (0, t.jsx)(ge.pd, {
                  type: "text",
                  label: (0, c.we)("#EventEditor_AddSpeaker_Name"),
                  value: e,
                  onChange: (fe) => r(fe.target.value),
                  focusOnMount: !0,
                }),
                (0, t.jsxs)("div", {
                  className: Q().TitleGroup,
                  children: [
                    (0, t.jsx)(ge.pd, {
                      type: "text",
                      label: (0, c.we)("#EventEditor_AddSpeaker_Title"),
                      value: o,
                      onChange: (fe) => d(fe.target.value),
                    }),
                    (0, t.jsx)(ge.pd, {
                      type: "text",
                      label: (0, c.we)("#EventEditor_AddSpeaker_Company"),
                      value: y,
                      onChange: (fe) => j(fe.target.value),
                    }),
                  ],
                }),
                (0, t.jsx)(Fe.he, {
                  toolTipContent: (0, c.we)(
                    "#EventEditor_AssociateSteamAccount_ttip",
                  ),
                  children: (0, t.jsxs)("div", {
                    className: "DialogLabel",
                    children: [
                      (0, c.we)("#EventEditor_AssociateSteamAccount"),
                      " (?)",
                    ],
                  }),
                }),
                (0, t.jsxs)("div", {
                  children: [
                    Se &&
                      (0, t.jsx)(Qe.t, {
                        string: (0, c.we)("#Loading"),
                        size: "small",
                      }),
                    be &&
                      De &&
                      (0, t.jsxs)("a", {
                        href:
                          me.TS.COMMUNITY_BASE_URL +
                          "profiles/" +
                          be.ConvertTo64BitString(),
                        target: "_blank",
                        children: [
                          De
                            ? (0, t.jsx)("img", {
                                style: { marginRight: "8px" },
                                src: De.avatar_url,
                              })
                            : null,
                          De ? De.m_strPlayerName : null,
                        ],
                      }),
                    (0, t.jsxs)("div", {
                      className: Q().AssociateRowCtn,
                      children: [
                        (0, t.jsx)(ge.$n, {
                          onClick: () => Re(new B.b(me.iA.steamid)),
                          children: (0, c.we)(
                            "#EventEditor_SteamAccount_addme",
                          ),
                        }),
                        (0, t.jsx)(ge.$n, {
                          onClick: (fe) =>
                            (0, re.lX)(
                              (0, t.jsx)(zt, {
                                friends: Me ?? [],
                                setSteamID: Re,
                              }),
                              fe,
                            ),
                          children: (0, c.we)(
                            "#EventEditor_SteamAccount_addfriend",
                          ),
                        }),
                        (0, t.jsx)(ge.$n, {
                          onClick: () => Re(void 0),
                          children: (0, c.we)(
                            "#EventEditor_SteamAccount_clear",
                          ),
                        }),
                      ],
                    }),
                  ],
                }),
                (0, t.jsxs)("div", {
                  className: Q().PhotoCtn,
                  children: [
                    (0, t.jsx)("div", {
                      className: "DialogLabel",
                      children: (0, c.we)("#EventEditor_ChoosePhoto"),
                    }),
                    (0, t.jsx)(Bt, {
                      clanSteamID: s.clanSteamID,
                      inputClanImage: Be,
                      setImage: Ne,
                      nWidth: Ye,
                      nHeight: Ye,
                    }),
                  ],
                }),
                (0, t.jsxs)("div", {
                  className: Q().AboutCtn,
                  children: [
                    (0, t.jsx)("div", {
                      className: "DialogLabel",
                      children: (0, c.we)("#EventEditor_AddSpeaker_About"),
                    }),
                    (0, t.jsx)(ge.Cl, {
                      value: H,
                      onChange: (fe) => Ie(fe.target.value),
                      rows: 8,
                      cols: 80,
                      nMinHeight: 40,
                      placeholder: (0, c.we)(
                        "#EventEditor_AddSpeaker_About_Placeholder",
                      ),
                    }),
                  ],
                }),
                (0, t.jsxs)("div", {
                  className: Q().PreviewCtn,
                  children: [
                    (0, t.jsx)("div", {
                      className: "DialogLabel",
                      children: (0, c.we)("#Button_Preview"),
                    }),
                    (0, t.jsx)(yt.$k, {
                      company: y,
                      name: e,
                      title: o,
                      bioString: H,
                      photo: Be ? Be.url : void 0,
                    }),
                  ],
                }),
              ],
            }),
          });
        };
        function zt(s) {
          const { friends: e, setSteamID: r } = s;
          return (0, t.jsx)("div", {
            className: Q().DropDownScroll,
            children: e.map((o) =>
              (0, t.jsx)(Ht, { steamid: o, setSteamID: r }, o),
            ),
          });
        }
        function Ht(s) {
          const { steamid: e, setSteamID: r } = s,
            { data: o } = (0, et.js)(e);
          return (0, t.jsx)(vt.kt, {
            onSelected: () => r(new B.b(e)),
            children: (0, t.jsxs)("div", {
              style: { display: "flex", alignItems: "center" },
              children: [
                o &&
                  (0, t.jsx)("img", {
                    className: se().WhitelistAvatar,
                    src: o.avatar_url,
                  }),
                o?.m_strPlayerName,
              ],
            }),
          });
        }
        let We = class extends D.Component {
          m_isMounted = !1;
          m_bAppend = !1;
          constructor(s) {
            super(s), (this.state = { bPreserveNewLines: !1, strHTMLData: "" });
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
          async ConvertHtmlToBBCode(s, e) {
            let r = new URLSearchParams();
            return (
              r.append("content", s),
              r.append("preserve_newlines", e ? "1" : "0"),
              (
                await P().post(
                  me.TS.COMMUNITY_BASE_URL + "/actions/ConvertHTMLToBBCode",
                  r,
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
                .then((s) => {
                  this.m_isMounted &&
                    (this.m_bAppend
                      ? Z.append(s, this.props.textareaRef.current)
                      : Z.overwrite(s, this.props.textareaRef.current),
                    this.setState({
                      bConverting: !1,
                      bFinishedConverting: !0,
                    }));
                })
                .catch((s) => {
                  (0, ee.pg)(
                    (0, t.jsx)(V.KG, {
                      strTitle: (0, c.we)("#EventEditor_ConvertHTML_Error"),
                      strDescription: (0, c.we)(
                        "#EventEditor_ConvertHTML_Error_Desc",
                        s.response && s.response.data ? s.response.data.msg : s,
                      ),
                      bAlertDialog: !0,
                      bDestructiveWarning: !0,
                    }),
                    this.props.ownerWindow,
                    { strTitle: (0, c.we)("#EventEditor_ConvertHTML_Error") },
                  );
                });
          }
          OnCheckboxChange(s) {
            let e = s.target.checked;
            e != this.state.bPreserveNewLines &&
              this.setState({ bPreserveNewLines: e });
          }
          OnTextAreaChange(s) {
            this.setState({ strHTMLData: s.currentTarget.value });
          }
          render() {
            const { closeModal: s } = this.props;
            return this.state.bConverting
              ? (0, t.jsx)(V.o0, {
                  strTitle: (0, c.we)("#EventEditor_ImportFromHTML"),
                  strDescription: (0, c.we)(
                    "#EventEditor_ImportFromHTML_ConversionInProgress",
                  ),
                  closeModal: s,
                  bAlertDialog: !0,
                  onOK: s,
                  onCancel: s,
                  children: (0, t.jsx)(Qe.t, {}),
                })
              : this.state.bFinishedConverting
                ? (0, t.jsx)(V.o0, {
                    strTitle: (0, c.we)("#EventEditor_ImportFromHTML"),
                    strDescription: (0, c.we)(
                      "#EventEditor_ImportFromHTML_ConvertFinished",
                    ),
                    closeModal: s,
                    bAlertDialog: !0,
                    onOK: s,
                    onCancel: s,
                  })
                : (0, t.jsx)(V.eV, {
                    title: (0, c.we)("#EventEditor_ImportFromHTML"),
                    onOK: this.OnConvertAndOverriteHTML,
                    onCancel: s,
                    className: Q().BBCodeEditorInputStyles,
                    children: (0, t.jsxs)(ge.nB, {
                      children: [
                        (0, t.jsx)(ge.a3, {
                          children: (0, t.jsxs)("div", {
                            className: (0, A.A)(
                              Y().FlexColumnContainer,
                              Q().ImportHTMLCtn,
                            ),
                            children: [
                              (0, t.jsx)("div", {
                                className: Y().FlexColumnContainer,
                                children: (0, c.PP)(
                                  "#EventEditor_ImportFromHTML_ConvertDescription",
                                  (0, t.jsx)("a", {
                                    target: me.TS.IN_CLIENT ? void 0 : "_blank",
                                    href: "https://partner.steamgames.com/doc/marketing/event_tools/import",
                                    children: (0, c.we)(
                                      "#EventEditor_ImportFromHTML_ConvertLearn",
                                    ),
                                  }),
                                ),
                              }),
                              (0, t.jsx)("textarea", {
                                value: this.state.strHTMLData,
                                placeholder: (0, c.we)(
                                  "#EventEditor_ImportFromHTML_Instruction",
                                ),
                                className: Q().ImportHTMLTextArea,
                                onChange: this.OnTextAreaChange,
                                ref: (e) => {
                                  e?.focus();
                                },
                              }),
                              (0, t.jsxs)("div", {
                                className: Q().ImportHTMLCheckBoxLine,
                                children: [
                                  (0, t.jsx)("input", {
                                    id: "ImportFromHTMLNewLines",
                                    type: "checkbox",
                                    checked: this.state.bPreserveNewLines,
                                    onChange: this.OnCheckboxChange,
                                  }),
                                  (0, t.jsxs)("label", {
                                    htmlFor: "ImportFromHTMLNewLines",
                                    children: [
                                      (0, c.we)(
                                        "#EventEditor_ImportFromHTML_PreserveNewlines",
                                      ),
                                      (0, t.jsx)(jt.o, {
                                        tooltip: (0, c.we)(
                                          "#EventEditor_ImportFromHTML_PreserveNewlines_Hint",
                                        ),
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              (0, t.jsx)("div", {
                                children: (0, c.we)(
                                  "#EventEditor_ImportFromHTML_ConvertToBBCode",
                                ),
                              }),
                            ],
                          }),
                        }),
                        (0, t.jsx)(ge.wi, {
                          children: (0, t.jsx)(ge.VQ, {
                            onCancel: () => s?.(),
                            strOKText: (0, c.we)("#Button_Overwrite"),
                            onUpdate: this.OnConvertAndAppendHTML,
                            strUpdateText: (0, c.we)("#Button_Append"),
                          }),
                        }),
                      ],
                    }),
                  });
          }
        };
        U([m.oI], We.prototype, "OnConvertAndOverriteHTML", 1),
          U([m.oI], We.prototype, "OnConvertAndAppendHTML", 1),
          U([m.oI], We.prototype, "OnCheckboxChange", 1),
          U([m.oI], We.prototype, "OnTextAreaChange", 1),
          (We = U([G.PA], We));
      },
      55436: (X, $, a) => {
        "use strict";
        a.d($, { r: () => f, z: () => M });
        var t = a(7850),
          I = a(90626),
          P = a(19316),
          G = a(25792),
          D = a(2801),
          R = a(18210),
          re = a(85599),
          z = a(17618),
          B = a.n(z),
          b = a(53424);
        const M = (_) => {
            const { clanSteamID: v, fnImageSelectCallBack: x } = _,
              [T, E] = (0, I.useState)(""),
              A = (0, b.mr)(_.clanSteamID.GetAccountID()),
              u = () => _.closeModal && _.closeModal(),
              n = b.pU.GetFilteredClanImages(v, T),
              i = (h) => {
                x(h), u();
              };
            return (0, t.jsx)(G.tH, {
              children: (0, t.jsx)(D.x_, {
                onEscKeypress: u,
                children: (0, t.jsxs)(P.UC, {
                  children: [
                    (0, t.jsx)(P.Y9, {
                      children: (0, R.we)("#ClanImageChooser_Title"),
                    }),
                    (0, t.jsx)(P.nB, {
                      children: (0, t.jsxs)(P.a3, {
                        children: [
                          (0, t.jsx)("p", {
                            children: (0, R.we)("#ClanImageChooser_Desc"),
                          }),
                          (0, t.jsx)(P.pd, {
                            placeholder: (0, R.we)("#ClanImageChooser_Search"),
                            value: T,
                            onChange: (h) => E(h.currentTarget.value),
                          }),
                          (0, t.jsx)("div", {
                            className: z.ImagesOuterContainer,
                            children: A
                              ? (0, t.jsx)(re.t, {
                                  size: "medium",
                                  string: (0, R.we)("#Loading"),
                                })
                              : n.length > 0
                                ? n.map((h) =>
                                    (0, t.jsx)(
                                      m,
                                      {
                                        clanImage: h,
                                        searchStringHilight: T,
                                        fnImageClick: i,
                                      },
                                      "ci" + h.image_hash,
                                    ),
                                  )
                                : T.trim().length == 0
                                  ? (0, t.jsx)("div", {
                                      children: (0, R.we)(
                                        "#ClanImageChooser_None",
                                      ),
                                    })
                                  : (0, t.jsx)("div", {
                                      children: (0, R.we)(
                                        "#EventCalendar_GameSearch_NoneFound",
                                      ),
                                    }),
                          }),
                        ],
                      }),
                    }),
                    (0, t.jsx)(P.wi, {
                      children: (0, t.jsx)(P.$n, {
                        onClick: u,
                        children: (0, R.we)("#Button_Cancel"),
                      }),
                    }),
                  ],
                }),
              }),
            });
          },
          m = (_) => {
            const { clanImage: v, searchStringHilight: x, fnImageClick: T } = _;
            let E = v.file_name ? v.file_name : "",
              A = f(x, E, String(v.imageid), z.Hilight);
            return (0, t.jsxs)("div", {
              className: z.ImageContainer,
              children: [
                (0, t.jsx)("div", {
                  className: z.Image,
                  style: { backgroundImage: `url( '${v.thumb_url}' )` },
                  onDoubleClick: () => T(v),
                }),
                (0, t.jsx)("div", {
                  className: z.ImageFilename,
                  title: E,
                  children: A,
                }),
              ],
            });
          };
        function f(_, v, x, T) {
          let E = [];
          if (_.length > 0) {
            let A = v.toLocaleLowerCase();
            for (let u = 0; u < v.length; ) {
              let n = A.indexOf(_, u);
              if (n < 0) {
                E.push(
                  (0, t.jsx)(
                    "span",
                    { children: v.substring(u) },
                    x + "_" + String(u),
                  ),
                );
                break;
              } else
                u < n &&
                  E.push(
                    (0, t.jsx)(
                      "span",
                      { children: v.substring(u, n) },
                      x + "_" + String(u),
                    ),
                  ),
                  E.push(
                    (0, t.jsx)(
                      "span",
                      { className: T, children: v.substr(n, _.length) },
                      x + "_" + String(u),
                    ),
                  ),
                  (u = n + _.length);
            }
          } else E.push((0, t.jsx)("span", { children: v }, x + "_null"));
          return E;
        }
      },
      24806: (X, $, a) => {
        "use strict";
        a.d($, { Ng: () => T });
        var t = a(7850),
          I = a(75844),
          P = a(90626),
          G = a(99412),
          D = a(32093),
          R = a(50109),
          re = a(95695),
          z = a.n(re),
          B = a(36707),
          b = a(18210),
          M = a(92264),
          m = a(54963),
          f = a(71421),
          _ = Object.defineProperty,
          v = Object.getOwnPropertyDescriptor,
          x = (u, n, i, h) => {
            for (
              var l = h > 1 ? void 0 : h ? v(n, i) : n, g = u.length - 1, S;
              g >= 0;
              g--
            )
              (S = u[g]) && (l = (h ? S(n, i, l) : S(l)) || l);
            return h && l && _(n, i, l), l;
          };
        let T = class extends P.Component {
          GenerateLanguageOptions() {
            let u = [];
            const {
              fnFilterLanguage: n,
              fnLangHasData: i,
              fnLastUpdateRTime: h,
              fnIsLangSupported: l,
            } = this.props;
            this.props.bAllowUnsetOption &&
              u.push(
                (0, t.jsx)(
                  "option",
                  {
                    value: G.xPp,
                    children: (0, b.we)("#language_selection_none"),
                  },
                  "langpicker_unset",
                ),
              );
            let g = new Array();
            const S = this.props.realms || [D.TU.k_ESteamRealmGlobal];
            for (const L of b.A0.GetLanguageListForRealms(S)) {
              if (n && !n(L)) continue;
              const w = (0, G.LgB)(L),
                p = (0, b.we)("#Language_" + w),
                O = !!(l && l(L));
              g.push({ eLang: L, sLocName: p, bSupported: O });
            }
            g.sort((L, w) =>
              L.bSupported != w.bSupported
                ? L.bSupported
                  ? -1
                  : 1
                : L.sLocName.localeCompare(w.sLocName),
            );
            let K = !1;
            for (const L of g) {
              L.bSupported != K &&
                (u.push(
                  (0, t.jsx)(
                    "option",
                    {
                      className: z().SupportedGroupLabel,
                      disabled: !0,
                      children: (0, b.we)(
                        L.bSupported
                          ? "#LanguageGroup_Supported"
                          : "#LanguageGroup_Unsupported",
                      ),
                    },
                    L.bSupported ? "SupportedGroup" : "UnsupportedGroup",
                  ),
                ),
                (K = L.bSupported));
              const w = i && i(L.eLang),
                p = h && h(L.eLang);
              let O = L.sLocName;
              p &&
                p !== 0 &&
                ((O += " "),
                (O += (0, b.we)(
                  "#Language_Last_Update",
                  (0, b.$z)(p) +
                    " @ " +
                    (0, M.KC)(p, { bForce24HourClock: !1 }),
                ))),
                u.push(
                  (0, t.jsx)(
                    "option",
                    {
                      value: L.eLang,
                      className: (0, B.A)(
                        { [z().LanguageWithContent]: w },
                        L.bSupported
                          ? z().SupportedLanguage
                          : z().UnsupportedLanguage,
                      ),
                      children: O,
                    },
                    "langpicker" + L.eLang + (w ? "_hasdata" : ""),
                  ),
                );
            }
            return u;
          }
          OnLanguageChange(u) {
            const { fnOnLanguageChanged: n, selectedLang: i } = this.props;
            let h = Number.parseInt(u.currentTarget.value);
            h != i && n && n(h);
          }
          render() {
            const { selectedLang: u, bDisabled: n, strTooltip: i } = this.props;
            let h = this.GenerateLanguageOptions();
            return (0, t.jsx)(f.he, {
              toolTipContent: i,
              children: (0, t.jsx)("select", {
                value: u,
                onChange: this.OnLanguageChange,
                disabled: n,
                children: h,
              }),
            });
          }
        };
        x([m.oI], T.prototype, "OnLanguageChange", 1), (T = x([I.PA], T));
        function E(u) {
          const [n, i] = useObserver(() => [
            CEditorLocStore.Get().GetHasLocalizationContext(),
            CEditorLocStore.Get().GetCurEditLanguage(),
          ]);
          return jsx(T, {
            selectedLang: i,
            fnLangHasData: CEditorLocStore.Get().BHasLanguageData,
            fnOnLanguageChanged: CEditorLocStore.Get().SetCurEditLanguage,
            bDisabled: !n,
            strTooltip: n ? void 0 : Localize("#Localization_EditorNotInFocus"),
          });
        }
        function A(u) {
          const { fnLangHasData: n } = u;
          React.useEffect(
            () => (
              CEditorLocStore.Get().SetHasLocalizationContext(!0),
              () => CEditorLocStore.Get().SetHasLocalizationContext(!1)
            ),
            [],
          );
          const i = useObserver(() => {
            const h = [];
            for (let l = k_ELanguage_English; l < k_ELanguage_MAX; ++l)
              h[l] = !!(n && n(l));
            return h;
          });
          return (
            React.useEffect(() => CEditorLocStore.Get().SetHasLanguage(i), [i]),
            jsx(Fragment, {})
          );
        }
      },
      21254: (X, $, a) => {
        "use strict";
        a.d($, { q: () => T, t: () => A });
        var t = a(7850),
          I = a(90626),
          P = a(87498),
          G = a(98112),
          D = a(19316),
          R = a(79167),
          re = a(2801),
          z = a(36707),
          B = a(18210),
          b = a(54963),
          M = a(50666),
          m = a.n(M),
          f = a(82734),
          _ = Object.defineProperty,
          v = Object.getOwnPropertyDescriptor,
          x = (u, n, i, h) => {
            for (
              var l = h > 1 ? void 0 : h ? v(n, i) : n, g = u.length - 1, S;
              g >= 0;
              g--
            )
              (S = u[g]) && (l = (h ? S(n, i, l) : S(l)) || l);
            return h && l && _(n, i, l), l;
          };
        class T extends I.Component {
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
            const n = this.props.uploadFile.GetCanvasImageSource();
            n &&
              (await E(
                this.props.uploadFile,
                n,
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
          UpdateCrop(n, i) {
            this.setState({ region: i });
          }
          GetDestWidth() {
            const { uploadFile: n, forceResolution: i } = this.props;
            if (i) return i.width;
            const h = n.GetCurrentImageOption();
            if (!h) return 0;
            const l = P.Fj[h.artworkType].width;
            return h ? (0, P.qj)(l) : 0;
          }
          GetDestHeight() {
            const { uploadFile: n, forceResolution: i } = this.props;
            if (i) return i.width;
            const h = n.GetCurrentImageOption();
            if (!h) return 0;
            const l = P.Fj[h.artworkType].height;
            return h ? (0, P.qj)(l) : 0;
          }
          GetLargestBoxThatFits(n, i, h, l) {
            let g = h,
              S = (g * i) / Math.max(n, 1);
            return (
              S > l && ((S = l), (g = (S * n) / Math.max(i, 1))),
              { width: g, height: S }
            );
          }
          GetPreviewWindowStyle() {
            const { region: n } = this.state,
              i = this.GetLargestBoxThatFits(
                this.GetDestWidth(),
                this.GetDestHeight(),
                500,
                150,
              ),
              h = i.width,
              l = i.height,
              g = 1 / Math.max(n.widthPct / 100, 1e-4),
              S = 1 / Math.max(n.heightPct / 100, 1e-4),
              K = (this.props.uploadFile.width * n.xPosPct) / 100,
              L = (this.props.uploadFile.height * n.yPosPct) / 100,
              w = (h * g) / this.props.uploadFile.width,
              p = (l * S) / this.props.uploadFile.height,
              O = -K * w,
              c = -L * p;
            return {
              width: h,
              height: l,
              backgroundPosition: `${O}px ${c}px`,
              backgroundSize: `${100 * g}% ${100 * S}%`,
              backgroundImage: `url(${this.props.uploadFile.dataUrl})`,
            };
          }
          render() {
            const n = (this.GetDestWidth() / this.props.uploadFile.width) * 100,
              i = (this.GetDestHeight() / this.props.uploadFile.height) * 100,
              h = this.GetLargestBoxThatFits(
                this.props.uploadFile.width,
                this.props.uploadFile.height,
                800,
                500,
              );
            return (0, t.jsx)(re.x_, {
              onEscKeypress: this.props.closeModal,
              bDisableBackgroundDismiss: !0,
              children: (0, t.jsxs)("div", {
                className: (0, z.A)("DialogContent", "_DialogCenterVertically"),
                children: [
                  (0, t.jsx)(D.iK, {
                    children: (0, B.we)(
                      "#ImageUpload_CropModalTitleDims",
                      this.GetDestWidth(),
                      this.GetDestHeight(),
                    ),
                  }),
                  (0, t.jsx)("div", {
                    className: (0, z.A)("DialogBodyText"),
                    children: (0, B.we)("#ImageUpload_CropModalDescription"),
                  }),
                  (0, t.jsxs)("div", {
                    className: M.CropImage,
                    style: { width: h.width, height: h.height },
                    children: [
                      (0, t.jsx)("img", {
                        style: {
                          maxWidth: "100%",
                          maxHeight: "100%",
                          objectFit: "contain",
                        },
                        src: this.props.uploadFile.dataUrl,
                      }),
                      (0, t.jsx)(R.I, {
                        bLockAspectRatio: !0,
                        bDisableLink: !0,
                        index: 0,
                        updateFn: this.UpdateCrop,
                        xPosPct: 0,
                        yPosPct: 0,
                        widthMinPct: n,
                        heightMinPct: i,
                        widthPct: n,
                        heightPct: i,
                      }),
                    ],
                  }),
                  (0, t.jsxs)("div", {
                    className: M.CropPreviewGroup,
                    children: [
                      (0, t.jsx)("div", {
                        className: M.CropPreviewLabel,
                        children: (0, B.we)("#ImageUpload_CropPreview"),
                      }),
                      (0, t.jsx)("div", {
                        style: this.GetPreviewWindowStyle(),
                      }),
                    ],
                  }),
                  (0, t.jsx)(D.jn, {
                    onClick: this.OnCrop,
                    children: (0, B.we)("#ImageUpload_CropAndContinue"),
                  }),
                ],
              }),
            });
          }
        }
        x([b.oI], T.prototype, "OnCrop", 1),
          x([b.oI], T.prototype, "UpdateCrop", 1);
        async function E(u, n, i, h, l, g, S, K, L) {
          return new Promise((w, p) => {
            const O = A(L);
            if (!O) {
              p("Invalid format provided");
              return;
            }
            const c = document.createElement("canvas");
            (c.width = S),
              (c.height = K),
              c.getContext("2d")?.drawImage(n, i, h, l, g, 0, 0, S, K),
              c.toBlob((F) => {
                const N = c.toDataURL(O);
                if (L !== G.bg.dU && N.startsWith("data:image/png")) {
                  p("Unable to encode into the requested file format");
                  return;
                }
                if (!F) {
                  p("Unable to apply crop into image");
                  return;
                }
                (u.file = (0, f.pE)(F, u.filename)),
                  (u.width = S),
                  (u.height = K),
                  (u.dataUrl = N),
                  (u.uploadTime = Date.now()),
                  (u.bCropped = !0),
                  w();
              });
          });
        }
        function A(u) {
          switch (u) {
            case G.bg.dU:
              return "image/png";
            case G.bg.iS:
              return "image/jpeg";
          }
        }
      },
      99312: (X) => {
        X.exports = {
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
      34510: (X) => {
        X.exports = {
          BBCode_Toggle: "_3dX8-PpYvSNsGv4k5lvP-R",
          Active: "_2vTzhbuJFb9_vHvquo2L-L",
          BBCode: "_1pH9CKzm5VpicOgzyWpsy_",
        };
      },
      64233: (X) => {
        X.exports = { Image: "_1po_jxHTSix3Li3w5ZnMBB" };
      },
      79786: (X) => {
        X.exports = {
          Emoticon_Toggle: "Y5J3nttqNZsLax6MbnH-L",
          Active: "YCbwLzK9cJ7QissjKq11n",
          Emoticon: "_2o57_fRPxv5_x6BkjL_cgc",
        };
      },
      17618: (X) => {
        X.exports = {
          ImagesOuterContainer: "_3A8RGZO2pwg1yKDAdFqp9r",
          Hilight: "_1v_zQLXgFsvon1SwxrWjE-",
          ImageContainer: "_2ti3yMwzfkGoiW68FuNjTG",
          Image: "y902_9A0Wj5bTshbt4xRb",
          ImageFilename: "_2jzLZXXxgDMMcA9X0QDSdg",
        };
      },
      41609: (X) => {
        X.exports = {
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
      77700: (X) => {
        X.exports = {
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
      50666: (X) => {
        X.exports = {
          CropImage: "_3qfqTaQ35U6AO3FNeijcFV",
          CropPreviewGroup: "_1RI-QM2ZjK9MaVjeCLE_LF",
          CropPreviewLabel: "_3_zyLDUyxZNyexfX3kNOPv",
        };
      },
      44483: (X, $, a) => {
        "use strict";
        a.d($, { A: () => t });
        const t =
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyBpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYwIDYxLjEzNDc3NywgMjAxMC8wMi8xMi0xNzozMjowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNSBXaW5kb3dzIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkYyNjlFOEM1MjJEMzExRTJCNTVBQkZGOUQyOTI0ODU5IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkYyNjlFOEM2MjJEMzExRTJCNTVBQkZGOUQyOTI0ODU5Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6RjI2OUU4QzMyMkQzMTFFMkI1NUFCRkY5RDI5MjQ4NTkiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6RjI2OUU4QzQyMkQzMTFFMkI1NUFCRkY5RDI5MjQ4NTkiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4IrEPeAAABJ0lEQVR42mL8//8/AzmABUScEOZJI1HfLBaoppmk2sh4Ql/r/69HD0jSxCanwMD07eVzhl9ADgz/ZmJikMjOY2CUlEIRR8YgPYzbBLhQQoeJl4/B7uY9hv9//jC8XLWc4UFfD8OPZ08xbGX6CSSQ8XdgKH/79o3h+69fDHwBwQy6ew8ySOYXMfxiZERRx/ILPTqA/K9fv8K5f4EG3Pn5i+EfSB2SWpaf6G6A2vgP6NSrWzYz3J8zk0Hk9SsGVka0ePzLxs7w9ydC+3+gpn29PQzv9uxiEHz7mkEY6ESQPb+QHMbMwcHAwiotw/Dj3h2E6L+/DIyrljKIgCMLGMoMmCmLQ0qagdnh66fn/xgYfP+B9BCJv79/lw5KcrPISKqzGMlN5AABBgBSmY83jVsiQAAAAABJRU5ErkJggg==";
      },
    },
  ]);
})();
