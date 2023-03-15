/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
  [9427],
  {
    62631: (e) => {
      e.exports = {
        "duration-app-launch": "800ms",
        carouselNavButton: "carousel_carouselNavButton_1KK5N",
        left: "carousel_left_gLIfz",
        carouselBtnCtn: "carousel_carouselBtnCtn_aqswv",
        right: "carousel_right_1qWih",
        carouselBody: "carousel_carouselBody_2M7XO",
        sliderBody: "carousel_sliderBody_gtnxY",
        slideTrayCustomize: "carousel_slideTrayCustomize_2rRBe",
        breadcrumbContainer: "carousel_breadcrumbContainer_1nhaj",
        pipList: "carousel_pipList_3oTuB",
        pipScrollerContainer: "carousel_pipScrollerContainer_1C-B8",
        pipScrollButton: "carousel_pipScrollButton_vy7Kr",
        scrollNavDiv: "carousel_scrollNavDiv_13TQ_",
        scrollNavButton: "carousel_scrollNavButton_1GLi1",
        pipScroller: "carousel_pipScroller_GXWYa",
        scrollBackground: "carousel_scrollBackground_3-RYo",
        scrollForeground: "carousel_scrollForeground_yJM1K",
        pipContainer: "carousel_pipContainer_373Zi",
        pip: "carousel_pip_3Bznr",
        pipNumber: "carousel_pipNumber_2_JtJ",
        innerSlide: "carousel_innerSlide_Kx5A5",
        DisableSliderMotion: "carousel_DisableSliderMotion_3la_1",
      };
    },
    59665: (e) => {
      e.exports = { Ctn: "cloudfileuploadbutton_Ctn_MKp7i" };
    },
    29005: (e) => {
      e.exports = {
        UploadPreviewContainer:
          "cloudfileuploadprogress_UploadPreviewContainer_2IhGM",
        SVGIcon_Video: "cloudfileuploadprogress_SVGIcon_Video_2TqYK",
        UploadPreview: "cloudfileuploadprogress_UploadPreview_120Qu",
        FileUploadFileName: "cloudfileuploadprogress_FileUploadFileName_2bbAV",
        FileUploadCancel: "cloudfileuploadprogress_FileUploadCancel_2MPbU",
        SVGIcon_X_Line: "cloudfileuploadprogress_SVGIcon_X_Line_3ad65",
        FileUploadBtn: "cloudfileuploadprogress_FileUploadBtn_3gPV-",
        FileUploadProgressContainer:
          "cloudfileuploadprogress_FileUploadProgressContainer_ZZt3E",
        FileUploadProgressBarContainer:
          "cloudfileuploadprogress_FileUploadProgressBarContainer_1J8k7",
        FileUploadProgressName:
          "cloudfileuploadprogress_FileUploadProgressName_1c12o",
      };
    },
    89159: (e) => {
      e.exports = {
        sketchfab_play_overlay_image:
          "eventbbcodesketchfab_sketchfab_play_overlay_image_3MwaE",
        sketchfabmodelembedded:
          "eventbbcodesketchfab_sketchfabmodelembedded_2_Smm",
        dynamiclink_box: "eventbbcodesketchfab_dynamiclink_box_2-x_d",
        dynamiclink_preview: "eventbbcodesketchfab_dynamiclink_preview_3d1cc",
        dynamiclink_content: "eventbbcodesketchfab_dynamiclink_content_1HFFK",
        dynamiclink_name: "eventbbcodesketchfab_dynamiclink_name_2NgPQ",
        dynamiclink_type: "eventbbcodesketchfab_dynamiclink_type_t-mzc",
        dynamiclink_author: "eventbbcodesketchfab_dynamiclink_author_e66Tt",
      };
    },
    70493: (e) => {
      e.exports = { Ctn: "loyaltyrewarditemembed_Ctn_2di0m" };
    },
    70403: (e) => {
      e.exports = {
        ErrorStyles: "partnereventdialog_ErrorStyles_2TszC",
        ErrorStylesWithIcon: "partnereventdialog_ErrorStylesWithIcon_1mcSA",
        ErrorIconLayout: "partnereventdialog_ErrorIconLayout_15HwA",
        ErrorStylesBackground: "partnereventdialog_ErrorStylesBackground_3Ht2e",
        WarningStyles: "partnereventdialog_WarningStyles_1C_Im",
        WarningStylesWithIcon: "partnereventdialog_WarningStylesWithIcon_3p5KO",
        WarningIconLayout: "partnereventdialog_WarningIconLayout_3POKG",
        WarningStylesBackground:
          "partnereventdialog_WarningStylesBackground_2MAql",
        Stuck: "partnereventdialog_Stuck_2JqXL",
        Padding: "partnereventdialog_Padding_2oWai",
        NotTooWideModal: "partnereventdialog_NotTooWideModal_3P6Se",
      };
    },
    76795: (e) => {
      e.exports = { CheckMark: "claimitemshared_CheckMark_3HeHP" };
    },
    20873: (e) => {
      e.exports = {
        ScrollSnapCarousel: "scrollsnapcarousel_ScrollSnapCarousel_17m-P",
      };
    },
    91753: (e) => {
      e.exports = { BroadcastCtn: "vodplayer_BroadcastCtn_3YzMi" };
    },
    577: (e, t, r) => {
      "use strict";
      r.d(t, { Ax: () => d, Zy: () => m, qL: () => c });
      var i = r(89526),
        n = (r(50567), r(68041)),
        a = (r(70756), r(46722)),
        s = r(98197),
        o = (r(44229), r(26371)),
        l = r(93373);
      class c extends o.DX {
        constructor(e, t, r, i) {
          super(e),
            (this.m_LinkFilter = s.H7),
            (this.m_parentNode = void 0),
            (this.m_parentNode = t),
            (this.m_mapHostToComponent = r),
            (this.m_globalStoreLink = i);
        }
        AppendText(e, t = !1) {
          let r = e;
          if (
            t &&
            (null == this.m_parentNode || "img" != this.m_parentNode.tag)
          ) {
            let e = this.m_LinkFilter.exec(r);
            for (; e; ) {
              if (e.index > 0) {
                let r = e.input.substr(0, e.index);
                super.AppendText(r, t);
              }
              let i = e[0],
                n = !1;
              if (this.m_mapHostToComponent)
                for (let e = 0; e < this.m_mapHostToComponent.length; ++e)
                  if (this.m_mapHostToComponent[e].urlRegExp.exec(i)) {
                    (n = !0),
                      super.AppendNode(
                        this.m_mapHostToComponent[e].fnBBComponent(
                          i,
                          this.m_globalStoreLink
                        )
                      );
                    break;
                  }
              n || super.AppendNode((0, l.h)(i)),
                (r = e.input.substr(e.index + i.length)),
                (e = this.m_LinkFilter.exec(r));
            }
          }
          r.length > 0 && super.AppendText(r, t);
        }
      }
      class m extends o.DX {
        constructor() {
          super(...arguments),
            (this.m_EmoteRegex = new RegExp("[ː:]([a-zA-Z0-9_]+)[ː:]"));
        }
        AppendText(e, t = !1) {
          let r = e;
          if (e.length >= 3) {
            let e = this.m_EmoteRegex.exec(r);
            for (; e; ) {
              if (e.index > 0) {
                let r = e.input.substr(0, e.index);
                super.AppendText(r, t);
              }
              let s = e[1];
              super.AppendNode(
                i.createElement(
                  a.tk,
                  { emoticonHoverStore: n.$, emoticon: s },
                  []
                )
              ),
                (r = e.input.substr(e.index + s.length + 2)),
                (e = this.m_EmoteRegex.exec(r));
            }
          }
          r.length > 0 && super.AppendText(r, t);
        }
      }
      class d extends o.DX {
        constructor(e, t) {
          super(e), (this.m_parentNode = void 0), (this.m_parentNode = t);
        }
        AppendText(e, t = !1) {
          let r = e;
          this.m_parentNode &&
            "img" == this.m_parentNode.tag &&
            (r = (0, s.et)(r)),
            super.AppendText(r, t);
        }
      }
    },
    93373: (e, t, r) => {
      "use strict";
      r.d(t, { h: () => c, z: () => m });
      var i = r(89526),
        n = r(83799),
        a = (r(50567), r(12568)),
        s = r(98197),
        o = r(70983);
      function l(e, t) {
        return (0, n.Ah)(
          e,
          (function (e) {
            var t;
            return [
              (
                null === (t = null == e ? void 0 : e.jsondata) || void 0 === t
                  ? void 0
                  : t.read_more_link
              )
                ? (0, s.FM)(e.jsondata.read_more_link).toLocaleLowerCase()
                : void 0,
            ];
          })(t)
        );
      }
      function c(e, t, r) {
        let n = e;
        return (
          n.toLowerCase().startsWith("http") || (n = "http://" + n),
          i.createElement(m, { url: n, event: t }, r || e)
        );
      }
      const m = (e) => {
        const { url: t, event: r, className: c } = e;
        let m,
          d = (0, a.B1)(t);
        l(d, r) &&
          (d =
            (o.De.IN_CLIENT ? "steam://openurl_external/" : "") +
            o.De.COMMUNITY_BASE_URL +
            "linkfilter/?url=" +
            d),
          (0, n.Ah)(d) && (m = "noopener nofollow");
        const u =
          "string" == typeof e.children &&
          e.children.length > 0 &&
          t &&
          !t.startsWith("steam://")
            ? (0, s.XW)(t)
            : void 0;
        return i.createElement(
          "a",
          { className: c, href: d, rel: m, id: e.id },
          i.createElement("span", { "data-tooltip-text": u }, e.children)
        );
      };
    },
    10726: (e, t, r) => {
      "use strict";
      r.d(t, { Q8: () => g, md: () => p });
      var i = r(33940),
        n = r(50265),
        a = r(6960),
        s = r(17922),
        o = r(15781),
        l = r(17339),
        c = (r(20870), r(67237)),
        m = r(32338),
        d = r(23213),
        u = r(70983);
      class p {
        constructor() {
          (this.m_mapAppInfo = n.LO.map()),
            (this.m_mapRichPresenceLoc = n.LO.map()),
            (this.m_cAppInfoRequestsInFlight = 0),
            (this.m_setPendingAppInfo = new Set()),
            (this.m_CacheStorage = null),
            (this.m_fnCallbackOnAppInfoLoaded = new d.pB());
        }
        Init(e) {
          this.m_CMInterface = e;
        }
        BHavePendingAppInfoRequests() {
          return (
            this.m_setPendingAppInfo.size > 0 ||
            this.m_cAppInfoRequestsInFlight > 0
          );
        }
        get CMInterface() {
          return this.m_CMInterface;
        }
        RegisterCallbackOnLoad(e) {
          if (!this.BHavePendingAppInfoRequests())
            return (
              (0, m.X)(
                !1,
                "Registering for callback on appinfo load, but nothing queued"
              ),
              void e()
            );
          this.m_fnCallbackOnAppInfoLoaded.Register(e);
        }
        IsLoadingAppID(e) {
          return this.m_setPendingAppInfo.has(e);
        }
        GetAppInfo(e) {
          if (
            ((0, m.X)(
              this.m_CMInterface,
              "CAppInfoStore.GetAppInfo called before Init"
            ),
            !this.m_mapAppInfo.has(e))
          ) {
            let t = new o.Am(e);
            this.m_mapAppInfo.set(e, t), this.QueueAppInfoRequest(e);
          }
          return this.m_mapAppInfo.get(e);
        }
        QueueAppInfoRequest(e) {
          return e
            ? (this.m_setPendingAppInfo.size ||
                ((this.m_PendingAppInfoPromise = new Promise(
                  (e) => (this.m_PendingAppInfoResolve = e)
                )),
                window.setTimeout(() => this.FlushPendingAppInfo(), 25)),
              this.m_setPendingAppInfo.add(e),
              this.m_PendingAppInfoPromise)
            : Promise.resolve();
        }
        FlushPendingAppInfo() {
          return (0, i.mG)(this, void 0, void 0, function* () {
            const e = this.m_PendingAppInfoResolve,
              t = Array.from(this.m_setPendingAppInfo);
            (this.m_PendingAppInfoPromise = void 0),
              (this.m_PendingAppInfoResolve = void 0),
              this.m_setPendingAppInfo.clear(),
              yield this.LoadAppInfoBatch(t),
              e();
          });
        }
        LoadAppInfoBatch(e) {
          return (0, i.mG)(this, void 0, void 0, function* () {
            this.m_cAppInfoRequestsInFlight++;
            let t = yield this.LoadAppInfoBatchFromLocalCache(e);
            if (t.length) {
              console.log("Loading batch of App Info from Steam: ", t),
                yield this.m_CMInterface.WaitUntilLoggedOn();
              let e = s.gA.Init(c.Fi);
              e.Body().set_language((0, a.jM)(u.De.LANGUAGE));
              const r = 50;
              for (; t.length > 0; ) {
                const i = Math.min(r, t.length),
                  n = t.slice(0, i);
                (t = t.slice(i)), e.Body().set_appids(n);
                const a = yield c.AE.GetApps(
                  this.m_CMInterface.GetServiceTransport(),
                  e
                );
                1 == a.GetEResult()
                  ? this.OnGetAppsResponse(a)
                  : console.error(
                      `Error when calling CommunityService.GetApps: EResult=${a.GetEResult()}, AppIDs:`,
                      n
                    );
              }
            }
            0 == --this.m_cAppInfoRequestsInFlight &&
              0 == this.m_setPendingAppInfo.size &&
              (this.m_fnCallbackOnAppInfoLoaded.Dispatch(),
              this.m_fnCallbackOnAppInfoLoaded.ClearAllCallbacks());
          });
        }
        OnGetAppsResponse(e) {
          let t = [];
          for (let r of e.Body().apps()) {
            let e = this.m_mapAppInfo.get(r.appid());
            (0, m.X)(
              e,
              `Got AppInfo response for unrequested AppID: ${r.appid()}`
            ),
              e &&
                ((e = new o.Am(r.appid())),
                e.DeserializeFromMessage(r),
                this.m_mapAppInfo.set(r.appid(), e),
                t.push(e));
          }
          this.SaveAppInfoBatchToLocalCache(t);
        }
        OnAppOverviewChange(e) {
          for (let t of e) {
            const e = new o.Am(t.appid());
            e.DeserializeFromAppOverview(t),
              this.m_mapAppInfo.set(t.appid(), e);
          }
        }
        EnsureAppInfoForAppIDs(e) {
          return (0, i.mG)(this, void 0, void 0, function* () {
            let t = !1;
            return (
              e.forEach((e) => {
                let r = this.m_mapAppInfo.get(e);
                r
                  ? r.is_valid || (t = !0)
                  : ((r = new o.Am(e)),
                    this.m_mapAppInfo.set(e, r),
                    this.QueueAppInfoRequest(e),
                    (t = !0));
              }),
              t && void 0 !== this.m_PendingAppInfoPromise
                ? this.m_PendingAppInfoPromise
                : Promise.resolve()
            );
          });
        }
        SetCacheStorage(e) {
          this.m_CacheStorage = e;
        }
        GetCacheKeyForAppID(e) {
          return "APPINFO_" + e;
        }
        LoadAppInfoBatchFromLocalCache(e) {
          return (0, i.mG)(this, void 0, void 0, function* () {
            if (!this.m_CacheStorage) return e;
            console.log("Loading batch of App Info from Local Cache: ", e);
            const t = new Date(new Date().getTime() - 12096e5),
              r = (e) =>
                (0, i.mG)(this, void 0, void 0, function* () {
                  const r = yield this.m_CacheStorage.GetObject(
                    this.GetCacheKeyForAppID(e)
                  );
                  if (!r) return e;
                  let i = this.m_mapAppInfo.get(e);
                  return (
                    (0, m.X)(
                      i,
                      "Didn't find AppInfo in our map when loading from cache but it should've been there?"
                    ),
                    i
                      ? ((i = new o.Am(e)),
                        i.DeserializeFromCacheObject(r),
                        i.is_initialized
                          ? (this.m_mapAppInfo.set(e, i),
                            i.time_updated_from_server < t ? e : null)
                          : (console.warn(
                              "Failed to deserialize cached App Info: ",
                              e,
                              r
                            ),
                            e))
                      : e
                  );
                });
            let n = e.map((e) => r(e));
            return (yield Promise.all(n)).filter((e) => null !== e);
          });
        }
        SaveAppInfoBatchToLocalCache(e) {
          return (0, i.mG)(this, void 0, void 0, function* () {
            if (this.m_CacheStorage) {
              console.log(
                "Saving batch of App Info to Local Cache: ",
                e.map((e) => e.appid)
              );
              for (const t of e) {
                const e = t.SerializeToCacheObject();
                e &&
                  this.m_CacheStorage.StoreObject(
                    this.GetCacheKeyForAppID(t.appid),
                    e
                  );
              }
            }
          });
        }
        Localize(e, t, r) {
          const i = this.GetRichPresenceLoc(e);
          return i
            ? i.Localize(t, r)
            : 1 != u.De.EUNIVERSE
            ? (console.log(
                `Unable to find app localization information for app ${e} token ${t}, this may not have had a chance to load yet`
              ),
              t)
            : "";
        }
        GetRichPresenceLoc(e) {
          if (this.m_mapRichPresenceLoc.has(e.toString())) {
            let t = this.m_mapRichPresenceLoc.get(e.toString());
            return (
              t.m_nLastUpdated + 6e4 * o.x3 < Date.now() &&
                this.QueueRichPresenceLocRequest(t),
              t
            );
          }
          let t = new l.v(e);
          return (
            this.m_mapRichPresenceLoc.set(e.toString(), t),
            this.QueueRichPresenceLocRequest(t),
            t
          );
        }
        GetRichPresenceLocAsync(e) {
          let t = this.GetRichPresenceLoc(e);
          return t.m_nLastUpdated ? Promise.resolve(t) : t.m_fetching;
        }
        OnRichPresenceLocUpdate(e, t) {
          e.m_nLastUpdated = Date.now();
          for (let r of t) {
            let t = r.language(),
              i = e.m_mapLanguages.get(t);
            i
              ? i.clear()
              : (e.m_mapLanguages.set(t, new Map()),
                (i = e.m_mapLanguages.get(t)));
            for (let e of r.tokens()) i.set(e.name().toLowerCase(), e.value());
          }
        }
        QueueRichPresenceLocRequest(e) {
          return (
            e.m_fetching ||
              ((e.m_fetching = this.m_CMInterface
                .WaitUntilLoggedOn()
                .then(() => {
                  let t = s.gA.Init(c.tj);
                  return (
                    t.Body().set_appid(e.GetAppID()),
                    t.Body().set_language(u.De.LANGUAGE),
                    c.AE.GetAppRichPresenceLocalization(
                      this.m_CMInterface.GetServiceTransport(),
                      t
                    )
                  );
                })
                .then(
                  (t) => (
                    (e.m_fetching = null),
                    1 != t.GetEResult()
                      ? Promise.reject()
                      : (this.OnRichPresenceLocUpdate(
                          e,
                          t.Body().token_lists()
                        ),
                        Promise.resolve(e))
                  )
                )),
              e.m_fetching.catch(() => {
                e.m_fetching = null;
              })),
            e.m_fetching
          );
        }
      }
      (0, i.gn)([n.aD], p.prototype, "OnGetAppsResponse", null),
        (0, i.gn)([n.aD], p.prototype, "OnRichPresenceLocUpdate", null);
      const g = new p();
    },
    66236: (e, t, r) => {
      "use strict";
      r.d(t, { O: () => g, V: () => h });
      var i = r(33940),
        n = r(89526),
        a = (r(38800), r(17922)),
        s = r(70657),
        o = (r(89252), r(82633), r(33787)),
        l = r(32338),
        c = r(47330),
        m = r(23213),
        d = r(31621),
        u = r(70983);
      class p {
        constructor() {
          (this.m_mapDefIDtoDefinition = new Map()),
            (this.m_mapDefIDToPromise = new Map()),
            (this.m_defChangeCallback = new Map()),
            (this.m_mapCategoryAndClassToItems = new Map()),
            (this.m_mapCategoryAndClassToPromise = new Map()),
            (this.m_defCategoryAndClassToChangeCallback = new Map()),
            (this.m_SteamInterface = null);
        }
        GetItem(e) {
          return this.m_mapDefIDtoDefinition.get(e);
        }
        GetItemChangeCallback(e) {
          return (
            this.m_defChangeCallback.has(e) ||
              this.m_defChangeCallback.set(e, new m.pB()),
            this.m_defChangeCallback.get(e)
          );
        }
        GetKeyCategoryAndClass(e, t) {
          return e + "_" + t;
        }
        GetItemsByCategoryAndClass(e, t) {
          const r = this.GetKeyCategoryAndClass(e, t);
          return this.m_mapCategoryAndClassToItems.get(r);
        }
        GetItemsByCategoryAndClassCallback(e, t) {
          const r = this.GetKeyCategoryAndClass(e, t);
          return (
            this.m_defCategoryAndClassToChangeCallback.has(r) ||
              this.m_defCategoryAndClassToChangeCallback.set(r, new m.pB()),
            this.m_defCategoryAndClassToChangeCallback.get(r)
          );
        }
        LoadRewardDefinition(e) {
          return (0, i.mG)(this, void 0, void 0, function* () {
            return (
              this.m_mapDefIDToPromise.has(e) ||
                this.m_mapDefIDToPromise.set(
                  e,
                  this.InternalLoadRewardDefinition(e)
                ),
              this.m_mapDefIDToPromise.get(e)
            );
          });
        }
        InternalLoadRewardDefinition(e) {
          var t, r, n;
          return (0, i.mG)(this, void 0, void 0, function* () {
            if (this.m_mapDefIDtoDefinition.has(e))
              return this.m_mapDefIDtoDefinition.get(e);
            const i = a.gA.Init(o.eQ);
            i.Body().set_definitionids([e]);
            let s = null;
            try {
              const a = yield o.pQ.QueryRewardItems(
                this.m_SteamInterface.GetServiceTransport(),
                i
              );
              if (
                1 == a.GetEResult() &&
                (null === (t = a.Body().definitions()) || void 0 === t
                  ? void 0
                  : t.length) > 0
              ) {
                (0, l.X)(
                  1 ==
                    (null === (r = a.Body().definitions()) || void 0 === r
                      ? void 0
                      : r.length),
                  `Requested definition ID ${e} and receive # ${
                    null === (n = a.Body().definitions()) || void 0 === n
                      ? void 0
                      : n.length
                  }, expecting exactly one.`
                );
                const t = a.Body().definitions()[0].toObject();
                return (
                  this.m_mapDefIDtoDefinition.set(e, t),
                  this.GetItemChangeCallback(e).Dispatch(t),
                  t
                );
              }
              s = (0, c.l)(a);
            } catch (e) {
              s = (0, c.l)(e);
            }
            return (
              console.error(
                "CLoyaltyRewardDefinitionStore.LoadRewardDefinition failed: " +
                  (null == s ? void 0 : s.strErrorMsg),
                s
              ),
              null
            );
          });
        }
        LoadRewardDefinitionByCategoryAndClass(e, t) {
          return (0, i.mG)(this, void 0, void 0, function* () {
            const r = this.GetKeyCategoryAndClass(e, t);
            return (
              this.m_mapCategoryAndClassToPromise.has(r) ||
                this.m_mapCategoryAndClassToPromise.set(
                  r,
                  this.InternalLoadRewardDefinitionByCategoryAndClass(e, t)
                ),
              this.m_mapCategoryAndClassToPromise.get(r)
            );
          });
        }
        InternalLoadRewardDefinitionByCategoryAndClass(e, t) {
          var r;
          return (0, i.mG)(this, void 0, void 0, function* () {
            const i = this.GetKeyCategoryAndClass(e, t);
            if (this.m_mapCategoryAndClassToItems.has(i))
              return this.m_mapCategoryAndClassToItems.get(i);
            const n = a.gA.Init(o.eQ);
            n.Body().set_community_item_classes([t]),
              n.Body().set_filter_match_any_category_tags([e]);
            let s = null;
            try {
              const a = yield o.pQ.QueryRewardItems(
                this.m_SteamInterface.GetServiceTransport(),
                n
              );
              if (
                1 == a.GetEResult() &&
                (null === (r = a.Body().definitions()) || void 0 === r
                  ? void 0
                  : r.length) > 0
              ) {
                const r = a
                  .Body()
                  .definitions()
                  .map((e) => e.toObject());
                return (
                  r.forEach((e) => {
                    this.m_mapDefIDtoDefinition.has(e.defid) ||
                      (this.m_mapDefIDtoDefinition.set(e.defid, e),
                      this.GetItemChangeCallback(e.defid).Dispatch(e));
                  }),
                  this.m_mapCategoryAndClassToItems.set(i, r),
                  this.GetItemsByCategoryAndClassCallback(e, t).Dispatch(r),
                  ("dev" != u.De.WEB_UNIVERSE && "beta" != u.De.WEB_UNIVERSE) ||
                    console.log(
                      "CLoyaltyRewardDefinitionStore.LoadRewardDefinitionByCategoryAndClass loaded " +
                        r.length
                    ),
                  r
                );
              }
              s = (0, c.l)(a);
            } catch (e) {
              s = (0, c.l)(e);
            }
            return (
              console.error(
                "CLoyaltyRewardDefinitionStore.LoadRewardDefinitionByCategoryAndClass failed: " +
                  (null == s ? void 0 : s.strErrorMsg),
                s
              ),
              null
            );
          });
        }
        static Get() {
          return (
            p.s_Singleton ||
              ((p.s_Singleton = new p()),
              p.s_Singleton.Init(),
              "dev" == u.De.WEB_UNIVERSE &&
                (window.g_LoyaltyRewardDefinitionStore = p.s_Singleton)),
            p.s_Singleton
          );
        }
        Init() {
          this.m_SteamInterface = new s.J(u.De.WEBAPI_BASE_URL);
        }
      }
      function g(e) {
        const [t, r] = (0, n.useState)(p.Get().GetItem(e));
        return (
          (0, n.useEffect)(() => {
            t || p.Get().LoadRewardDefinition(e);
          }, [e, t]),
          (0, d.Qg)(p.Get().GetItemChangeCallback(e), r),
          t
        );
      }
      function h(e, t) {
        const [r, i] = (0, n.useState)(
          p.Get().GetItemsByCategoryAndClass(e, t)
        );
        return (
          (0, n.useEffect)(() => {
            r || p.Get().LoadRewardDefinitionByCategoryAndClass(e, t).then(i);
          }, [e, t, r]),
          (0, d.Qg)(p.Get().GetItemsByCategoryAndClassCallback(e, t), i),
          r
        );
      }
    },
    29818: (e, t, r) => {
      "use strict";
      r.d(t, { v: () => p, x: () => u });
      var i = r(33940),
        n = r(52868),
        a = r.n(n),
        s = r(89526),
        o = (r(38800), r(96158), r(47330)),
        l = r(23213),
        c = r(31621),
        m = r(70983);
      class d {
        constructor() {
          (this.m_mapRegistrations = new Map()),
            (this.m_mapLoadPromises = new Map()),
            (this.m_mapCreatePromises = new Map()),
            (this.m_listChangeCallback = new Map());
        }
        GetRegistration(e) {
          return this.m_mapRegistrations.get(e);
        }
        GetRegistrationChangeCallback(e) {
          return (
            this.m_listChangeCallback.has(e) ||
              this.m_listChangeCallback.set(e, new l.pB()),
            this.m_listChangeCallback.get(e)
          );
        }
        LoadRegistration(e) {
          return (0, i.mG)(this, void 0, void 0, function* () {
            return (
              this.m_mapLoadPromises.has(e) ||
                this.m_mapLoadPromises.set(e, this.InternalLoadRegistration(e)),
              this.m_mapLoadPromises.get(e)
            );
          });
        }
        InternalLoadRegistration(e) {
          var t, r, n, s, l;
          return (0, i.mG)(this, void 0, void 0, function* () {
            let i = null;
            try {
              const c =
                  m.De.STORE_BASE_URL +
                  "saleaction/ajaxgetusergiveawayregistration",
                d = { giveaway_name: e, sessionid: m.De.SESSIONID },
                u = yield a().get(c, { params: d, withCredentials: !0 });
              if (
                200 == (null == u ? void 0 : u.status) &&
                1 ==
                  (null === (t = null == u ? void 0 : u.data) || void 0 === t
                    ? void 0
                    : t.success) &&
                (null === (r = null == u ? void 0 : u.data) || void 0 === r
                  ? void 0
                  : r.registration)
              )
                return (
                  this.m_mapRegistrations.set(
                    e,
                    null === (n = null == u ? void 0 : u.data) || void 0 === n
                      ? void 0
                      : n.registration
                  ),
                  this.GetRegistrationChangeCallback(e).Dispatch(
                    null === (s = null == u ? void 0 : u.data) || void 0 === s
                      ? void 0
                      : s.registration
                  ),
                  null === (l = null == u ? void 0 : u.data) || void 0 === l
                    ? void 0
                    : l.registration
                );
              i = (0, o.l)(u);
            } catch (e) {
              i = (0, o.l)(e);
            }
            return (
              console.error(
                "CGiveawayRegistrationStore.InternalLoadRegistration failed: on giveawayName " +
                  e +
                  " error: " +
                  (null == i ? void 0 : i.strErrorMsg),
                i
              ),
              { registered: !1 }
            );
          });
        }
        CreateRegistration(e) {
          return (
            this.m_mapCreatePromises.has(e) ||
              this.m_mapCreatePromises.set(
                e,
                this.InternalCreateRegistration(e)
              ),
            this.m_mapCreatePromises.get(e)
          );
        }
        InternalCreateRegistration(e) {
          var t, r, n, s, l;
          return (0, i.mG)(this, void 0, void 0, function* () {
            let i = null;
            try {
              const c =
                  m.De.STORE_BASE_URL +
                  "saleaction/ajaxupdateusergiveawayregistration",
                d = { giveaway_name: e, sessionid: m.De.SESSIONID },
                u = yield a().get(c, { params: d, withCredentials: !0 });
              if (
                200 == (null == u ? void 0 : u.status) &&
                1 ==
                  (null === (t = null == u ? void 0 : u.data) || void 0 === t
                    ? void 0
                    : t.success) &&
                (null === (r = null == u ? void 0 : u.data) || void 0 === r
                  ? void 0
                  : r.registration)
              )
                return (
                  this.m_mapRegistrations.set(
                    e,
                    null === (n = null == u ? void 0 : u.data) || void 0 === n
                      ? void 0
                      : n.registration
                  ),
                  this.GetRegistrationChangeCallback(e).Dispatch(
                    null === (s = null == u ? void 0 : u.data) || void 0 === s
                      ? void 0
                      : s.registration
                  ),
                  null === (l = null == u ? void 0 : u.data) || void 0 === l
                    ? void 0
                    : l.registration
                );
              i = (0, o.l)(u);
            } catch (e) {
              i = (0, o.l)(e);
            }
            return (
              console.error(
                "CGiveawayRegistrationStore.InternalCreateRegistration failed: on giveawayName " +
                  e +
                  " error: " +
                  (null == i ? void 0 : i.strErrorMsg),
                i
              ),
              { registered: !1 }
            );
          });
        }
        static Get() {
          return (
            d.s_Singleton ||
              ((d.s_Singleton = new d()),
              d.s_Singleton.Init(),
              "dev" == m.De.WEB_UNIVERSE &&
                (window.g_SaleMiniGameItemDefStore = d.s_Singleton)),
            d.s_Singleton
          );
        }
        Init() {}
      }
      function u(e) {
        const [t, r] = (0, s.useState)(d.Get().GetRegistration(e));
        return (
          (0, s.useEffect)(() => {
            void 0 === t && d.Get().LoadRegistration(e).then(r);
          }, [e, t]),
          (0, c.Qg)(d.Get().GetRegistrationChangeCallback(e), r),
          t
        );
      }
      function p() {
        return { fnCreateRegistration: d.Get().CreateRegistration };
      }
      (0, i.gn)([c.ak], d.prototype, "CreateRegistration", null);
    },
    26095: (e, t, r) => {
      "use strict";
      r.d(t, { Ax: () => h, jS: () => _, rW: () => f });
      var i = r(33940),
        n = (r(38800), r(17922)),
        a = r(70657),
        s = r(33787),
        o = r(32338),
        l = r(70983),
        c = r(89526),
        m = (r(89252), r(47330)),
        d = r(23213),
        u = r(31621),
        p = r(50265);
      class g {
        constructor() {
          (this.m_claimState = {
            bCanClaimNewItem: !1,
            bAlreadyClaimedCurrentItem: !1,
          }),
            (this.m_SteamInterface = null),
            (this.m_canClaimPromise = null),
            (this.m_claimPromise = null),
            (this.m_claimStateChangeCallback = new d.pB()),
            (this.m_testNextClaimFakeResponse = null),
            (this.m_bInTestMode = !1);
        }
        GetClaimItemState() {
          return this.m_claimState;
        }
        GetClaimStateChangeCallback() {
          return this.m_claimStateChangeCallback;
        }
        GetClaimedSaleRewardItemDef() {
          return this.m_claimedFreeItemDef;
        }
        GetNextClaimTime() {
          if (!this.m_rtNextClaimTime) return null;
          return new Date(1e3 * this.m_rtNextClaimTime);
        }
        TEST_OverrideClaimState(e) {
          (this.m_bInTestMode = !0),
            (this.m_canClaimPromise = null),
            (this.m_claimPromise = null),
            e.bCanClaimNewItem
              ? (this.m_testNextClaimFakeResponse = {
                  bAlreadyClaimedCurrentItem: !0,
                  bCanClaimNewItem: !1,
                  rtNextClaimTime: Math.floor(Date.now() / 1e3) + 3600,
                  appid: 2243810,
                  community_item_type: 2,
                })
              : (this.m_testNextClaimFakeResponse = null),
            (this.m_claimState = e),
            this.GetClaimStateChangeCallback().Dispatch(this.m_claimState);
        }
        LoadCanUserClaimItem() {
          return (0, i.mG)(this, void 0, void 0, function* () {
            return this.m_bInTestMode
              ? this.m_claimState
              : (this.m_canClaimPromise ||
                  (this.m_canClaimPromise =
                    this.InternalLoadCanUserClaimItem()),
                this.m_canClaimPromise);
          });
        }
        InternalLoadCanUserClaimItem() {
          var e, t, r;
          return (0, i.mG)(this, void 0, void 0, function* () {
            (0,
            o.X)(l.L7.logged_in, "User must be logged to use CSaleItemClaimableRewardsStore");
            const i = n.gA.Init(s.FE);
            i.Body().set_language(l.De.LANGUAGE);
            let a = null;
            try {
              const n = yield s.tE.CanClaimItem(
                this.m_SteamInterface.GetServiceTransport(),
                i
              );
              if (1 == n.GetEResult())
                return (
                  (this.m_claimedFreeItemDef = Boolean(
                    null === (e = n.Body().reward_item()) || void 0 === e
                      ? void 0
                      : e.defid()
                  )
                    ? n.Body().reward_item().toObject()
                    : null),
                  (this.m_claimState = {
                    bCanClaimNewItem: n.Body().can_claim(),
                    bAlreadyClaimedCurrentItem: Boolean(
                      this.m_claimedFreeItemDef
                    ),
                    appid:
                      null === (t = this.m_claimedFreeItemDef) || void 0 === t
                        ? void 0
                        : t.appid,
                    community_item_type:
                      null === (r = this.m_claimedFreeItemDef) || void 0 === r
                        ? void 0
                        : r.community_item_type,
                    rtNextClaimTime:
                      n.Body().next_claim_time() > 0
                        ? n.Body().next_claim_time()
                        : void 0,
                  }),
                  (this.m_rtNextClaimTime = n.Body().next_claim_time()),
                  this.SetClaimTimer(),
                  this.GetClaimStateChangeCallback().Dispatch(
                    this.m_claimState
                  ),
                  this.m_claimState
                );
              a = (0, m.l)(n);
            } catch (e) {
              a = (0, m.l)(e);
            }
            return (
              console.error(
                "CSaleItemClaimableRewardsStore.InternalLoadCanUserClaimItem failed: error: " +
                  (null == a ? void 0 : a.strErrorMsg),
                a
              ),
              { bCanClaimNewItem: !1, bAlreadyClaimedCurrentItem: !1 }
            );
          });
        }
        UserClaimItem() {
          return (0, i.mG)(this, void 0, void 0, function* () {
            return (
              this.m_testNextClaimFakeResponse &&
                (console.log(
                  "CSaleItemClaimableRewardsStore - testing, pretending claim action succeeded",
                  (0, p.ZN)(this.m_testNextClaimFakeResponse)
                ),
                (this.m_claimState = this.m_testNextClaimFakeResponse),
                this.GetClaimStateChangeCallback().Dispatch(this.m_claimState),
                (this.m_rtNextClaimTime = this.m_claimState.rtNextClaimTime),
                this.SetClaimTimer(),
                (this.m_testNextClaimFakeResponse = null)),
              this.m_bInTestMode
                ? this.m_claimState
                : (this.m_claimPromise ||
                    (this.m_claimPromise = this.InternalUserClaimItem()),
                  this.m_claimPromise)
            );
          });
        }
        InternalUserClaimItem() {
          return (0, i.mG)(this, void 0, void 0, function* () {
            (0, o.X)(
              l.L7.logged_in,
              "User must be logged to use CSaleItemClaimableRewardsStore"
            ),
              (0, o.X)(
                this.m_claimState.bCanClaimNewItem,
                "Only should be called when we previously verified you can claim something. "
              );
            const e = n.gA.Init(s.xs);
            e.Body().set_language(l.De.LANGUAGE);
            let t = null;
            try {
              const r = yield s.tE.ClaimItem(
                this.m_SteamInterface.GetServiceTransport(),
                e
              );
              if (1 == r.GetEResult())
                return (
                  (this.m_claimedFreeItemDef = r
                    .Body()
                    .reward_item()
                    .toObject()),
                  (this.m_claimState = {
                    bCanClaimNewItem: !1,
                    bAlreadyClaimedCurrentItem: Boolean(
                      this.m_claimedFreeItemDef
                    ),
                    appid: this.m_claimedFreeItemDef.appid,
                    community_item_type:
                      this.m_claimedFreeItemDef.community_item_type,
                    rtNextClaimTime:
                      r.Body().next_claim_time() > 0
                        ? r.Body().next_claim_time()
                        : void 0,
                  }),
                  this.GetClaimStateChangeCallback().Dispatch(
                    this.m_claimState
                  ),
                  (this.m_rtNextClaimTime = r.Body().next_claim_time()),
                  this.SetClaimTimer(),
                  this.m_claimState
                );
              if (29 == r.GetEResult())
                return (
                  (this.m_canClaimPromise =
                    this.InternalLoadCanUserClaimItem()),
                  this.m_canClaimPromise
                );
              t = (0, m.l)(r);
            } catch (e) {
              t = (0, m.l)(e);
            }
            return (
              console.error(
                "CSaleItemClaimableRewardsStore.InternalUserClaimItem failed: error: " +
                  (null == t ? void 0 : t.strErrorMsg),
                t
              ),
              { bCanClaimNewItem: !1, bAlreadyClaimedCurrentItem: !1 }
            );
          });
        }
        SetClaimTimer() {
          if (this.m_claimTimer) return;
          if (!this.m_rtNextClaimTime) return;
          const e = Date.now();
          let t = new Date(1e3 * this.m_rtNextClaimTime);
          const r = Math.max(0, Math.min(1, t.getTime() - e));
          this.m_claimTimer = window.setTimeout(
            () => {
              (this.m_claimTimer = void 0),
                Date.now() > t.getTime()
                  ? ((this.m_canClaimPromise = null),
                    (this.m_claimPromise = null),
                    (this.m_claimedFreeItemDef = null),
                    (this.m_claimState = {
                      bCanClaimNewItem: !0,
                      bAlreadyClaimedCurrentItem: !1,
                      rtNextClaimTime: void 0,
                    }),
                    this.GetClaimStateChangeCallback().Dispatch(
                      this.m_claimState
                    ))
                  : this.SetClaimTimer();
            },
            r > 3e5 ? r / 2 : r
          );
        }
        static Get() {
          return (
            g.s_Singleton ||
              ((g.s_Singleton = new g()),
              g.s_Singleton.Init(),
              "dev" == l.De.WEB_UNIVERSE &&
                (window.g_QuestCommunityInventoryStore = g.s_Singleton)),
            g.s_Singleton
          );
        }
        Init() {
          const e = (0, l.kQ)("loyalty_webapi_token", "application_config");
          (0, o.X)(
            e,
            "CQuestCommunityInventoryStore: missing loyalty_webapi_token oauth permission"
          ),
            (this.m_SteamInterface = new a.J(l.De.WEBAPI_BASE_URL, e));
        }
      }
      function h() {
        const [e, t] = (0, c.useState)(g.Get().GetClaimItemState()),
          [r, i] = (0, c.useState)(!0);
        return (
          (0, c.useEffect)(() => {
            g.Get()
              .LoadCanUserClaimItem()
              .then(t)
              .finally(() => i(!1));
          }, []),
          (0, u.Qg)(g.Get().GetClaimStateChangeCallback(), t),
          Object.assign(Object.assign({}, e), { bLoading: r })
        );
      }
      function _() {
        return { fnClaimItem: g.Get().UserClaimItem };
      }
      function f() {
        return { fnSetClaimState: g.Get().TEST_OverrideClaimState };
      }
      (0, i.gn)([u.ak], g.prototype, "TEST_OverrideClaimState", null),
        (0, i.gn)([u.ak], g.prototype, "UserClaimItem", null);
    },
    22271: (e, t, r) => {
      "use strict";
      r.d(t, { mn: () => u });
      var i = r(33940),
        n = r(52868),
        a = r.n(n),
        s = r(89526),
        o = (r(38800), r(96158), r(47330)),
        l = r(23213),
        c = r(31621),
        m = r(70983);
      class d {
        constructor() {
          (this.m_mapAppToDefs = new Map()),
            (this.m_mapPromises = new Map()),
            (this.m_listChangeCallback = new Map());
        }
        GetItemDefForAppID(e) {
          return this.m_mapAppToDefs.get(e);
        }
        GetItemDefsChangeForEventID(e) {
          return (
            this.m_listChangeCallback.has(e) ||
              this.m_listChangeCallback.set(e, new l.pB()),
            this.m_listChangeCallback.get(e)
          );
        }
        BHasLoadedDef(e) {
          return this.m_mapPromises.has(e);
        }
        SetTestItemDefs(e, t) {
          this.m_mapAppToDefs.set(e, t),
            this.GetItemDefsChangeForEventID(e).Dispatch(t),
            this.m_mapPromises.set(e, Promise.resolve(1));
        }
        LoadAppCommunityItems(e, t) {
          return (0, i.mG)(this, void 0, void 0, function* () {
            return e
              ? (this.m_mapPromises.has(e) ||
                  this.m_mapPromises.set(
                    e,
                    this.InternalLoadAppCommunityItems(e, t)
                  ),
                this.m_mapPromises.get(e))
              : 2;
          });
        }
        InternalLoadAppCommunityItems(e, t) {
          var r, n;
          return (0, i.mG)(this, void 0, void 0, function* () {
            let i = null;
            try {
              const s =
                  m.De.COMMUNITY_BASE_URL +
                  (t
                    ? "minigame/ajaxgetgameitemdefsforeditor"
                    : "minigame/ajaxgetgameitemdefs"),
                l = {
                  appid: e,
                  origin: self.origin,
                  l: m.De.LANGUAGE,
                  sessionid: t ? m.De.SESSIONID : void 0,
                },
                c = yield a().get(s, { params: l, withCredentials: t });
              if (
                200 == (null == c ? void 0 : c.status) &&
                1 ==
                  (null === (r = null == c ? void 0 : c.data) || void 0 === r
                    ? void 0
                    : r.success) &&
                (null === (n = null == c ? void 0 : c.data) || void 0 === n
                  ? void 0
                  : n.item_definitions)
              )
                return (
                  this.m_mapAppToDefs.set(e, c.data.item_definitions),
                  this.GetItemDefsChangeForEventID(e).Dispatch(
                    c.data.item_definitions
                  ),
                  1
                );
              i = (0, o.l)(c);
            } catch (e) {
              i = (0, o.l)(e);
            }
            return (
              console.error(
                "CSaleMiniGameItemDefStore.InternalLoadAppCommunityItems failed: on appid " +
                  e +
                  " edit? " +
                  t +
                  " error: " +
                  (null == i ? void 0 : i.strErrorMsg),
                i
              ),
              2
            );
          });
        }
        static Get() {
          return (
            d.s_Singleton ||
              ((d.s_Singleton = new d()),
              d.s_Singleton.Init(),
              "dev" == m.De.WEB_UNIVERSE &&
                (window.g_SaleMiniGameItemDefStore = d.s_Singleton)),
            d.s_Singleton
          );
        }
        Init() {}
      }
      function u(e, t, r) {
        const i = (function (e, t) {
            const [r, i] = (0, s.useState)(d.Get().GetItemDefForAppID(e));
            return (
              (0, s.useEffect)(() => {
                e &&
                  !d.Get().BHasLoadedDef(e) &&
                  d.Get().LoadAppCommunityItems(e, t);
              }, [e, t]),
              (0, c.Qg)(d.Get().GetItemDefsChangeForEventID(e), i),
              r
            );
          })(e, r),
          [n, a] = (0, s.useState)(null);
        return (
          (0, s.useEffect)(() => {
            if (e && i && null == n) {
              const r = i.find(
                (r) => r.active && r.appid == e && r.item_type == t
              );
              r && a(r);
            }
          }, [n, i, e, t]),
          n
        );
      }
    },
    45647: (e, t, r) => {
      "use strict";
      r.d(t, { l: () => f });
      var i = r(58638),
        n = r(89526),
        a = r(23907),
        s = r(86701),
        o = r(13806),
        l = r(36465),
        c = r(62631),
        m = r(3660),
        d = r(85446),
        u = r(70983),
        p = r(20873);
      function g(e) {
        const { padded: t, gap: r, children: i } = e;
        return n.createElement(
          "div",
          {
            style: { gap: r ? r + "px" : "unset" },
            className: (0, o.Z)({
              [p.ScrollSnapCarousel]: !0,
              SaleSectionCarousel: !0,
              SaleSectionCarouselPadding: t,
              [e.className]: !0,
            }),
          },
          i
        );
      }
      class h extends n.Component {
        render() {
          const { showArrows: e } = this.props,
            t = this.props.visibleSlides,
            r = this.props.totalSlides,
            a = this.props.currentSlide;
          if (t >= r) return null;
          const l = (100 * a) / r,
            m = 100 * (1 - Math.min(a + t, r) / r),
            d = l + (50 * t) / r,
            u = 100 - d;
          return n.createElement(
            "div",
            { className: c.pipScrollerContainer },
            e &&
              n.createElement(
                i.jp,
                {
                  className: (0, o.Z)(
                    c.pipScrollButton,
                    c.left,
                    c.carouselNavButton
                  ),
                },
                n.createElement(s.thP, null)
              ),
            n.createElement(
              "div",
              { className: c.pipScroller },
              n.createElement("div", { className: c.scrollBackground }),
              n.createElement("div", {
                className: c.scrollForeground,
                style: { left: l + "%", right: m + "%" },
              }),
              n.createElement(
                "div",
                {
                  className: c.scrollNavDiv,
                  style: { left: "0%", width: d + "%" },
                },
                n.createElement(
                  i.jp,
                  {
                    className: (0, o.Z)(c.carouselNavButton, c.scrollNavButton),
                  },
                  n.createElement("div", null)
                )
              ),
              n.createElement(
                "div",
                {
                  className: c.scrollNavDiv,
                  style: { right: "0%", width: u + "%" },
                },
                n.createElement(
                  i.P1,
                  {
                    className: (0, o.Z)(c.carouselNavButton, c.scrollNavButton),
                  },
                  n.createElement("div", null)
                )
              )
            ),
            e &&
              n.createElement(
                i.P1,
                {
                  className: (0, o.Z)(
                    c.pipScrollButton,
                    c.right,
                    c.carouselNavButton
                  ),
                },
                n.createElement(s.thP, null)
              )
          );
        }
      }
      const _ = (0, i.Rq)(h, (e) => ({
        currentSlide: e.currentSlide,
        totalSlides: e.totalSlides,
        visibleSlides: e.visibleSlides,
      }));
      function f(e) {
        const t = (0, u.id)();
        return e.screenIsWide || t
          ? n.createElement(y, Object.assign({}, e), e.children)
          : n.createElement(g, Object.assign({}, e), e.children);
      }
      function y(e) {
        const t = (0, u.id)(),
          r = () => n.Children.count(e.children),
          s = r(),
          d = Math.min(r(), e.visibleElements);
        if (!s || !d) return null;
        const p = d < s,
          g = e.hideArrows || !p,
          h = !p || e.hidePips;
        let f = 4 / 3,
          y = !0;
        e.slideAspectRatio && ((f = e.slideAspectRatio), (y = !1));
        const B = `items_in_row_${e.visibleElements}`;
        return n.createElement(
          a.s,
          {
            "flow-children": "row",
            className: (0, o.Z)(c.carouselBody, e.className, B),
            navKey: e.navKey,
          },
          n.createElement(
            i.sj,
            {
              visibleSlides: e.visibleElements,
              totalSlides: r(),
              naturalSlideWidth: 100 * f,
              naturalSlideHeight: 100,
              step: e.visibleElements,
              infinite: !e.disableEdgeWrap,
              isIntrinsicHeight: y,
              touchEnabled: !0,
              lockOnWindowScroll: !0,
              orientation: "horizontal",
              disableKeyboard: !0,
            },
            n.createElement(
              C,
              {
                bHideArrows: g,
                bAutoAdvance: e.bAutoAdvance && !t,
                onSlide: e.onSlide,
              },
              n.Children.map(e.children, (t, r) => {
                const a = e.bLazyRenderChildren
                  ? n.createElement(
                      m.Y,
                      {
                        rootMargin: "0px 100% 0px 100%",
                        bHorizontal: !0,
                        placeholderWidth: 1,
                        placeholderHeight: 1,
                      },
                      t
                    )
                  : t;
                return n.createElement(
                  i.Mi,
                  { className: c.innerSlide, key: "slide_" + r, index: r },
                  a
                );
              })
            ),
            !h &&
              (e.useTestScrollbar
                ? n.createElement(_, { showArrows: g, carouselStore: null })
                : n.createElement(
                    "div",
                    { className: c.breadcrumbContainer },
                    ((t) =>
                      n.Children.map(e.children, (e, r) =>
                        r % t != 0
                          ? null
                          : n.createElement(
                              i.oT,
                              { slide: r, className: c.pip },
                              n.createElement("img", { src: l.Z })
                            )
                      ))(d)
                  ))
          )
        );
      }
      function B(e) {
        e && (window.clearTimeout(e.current), (e.current = null));
      }
      function C(e) {
        const { bHideArrows: t, bAutoAdvance: r, children: a, onSlide: l } = e,
          m = n.useContext(i.ro),
          u = n.useRef(m.state.currentSlide),
          [p, g] = n.useState(null),
          [h, _] = n.useState(!!r),
          f = n.useRef(null),
          y = n.useRef(null);
        n.useEffect(() => {
          const e = () => {
            f.current = window.setTimeout(() => {
              if (f.current) {
                B(f);
                const e = (m.state.currentSlide + 1) % m.state.totalSlides;
                m.setStoreState({ currentSlide: e });
              }
            }, 8e3);
          };
          h && e();
          const t = () => {
            const t = u.current,
              r = m.state.currentSlide;
            l && l(r), g(r > t ? "Right" : r < t ? "Left" : null), B(y);
            (y.current = window.setTimeout(() => {
              y.current && (g(null), B(y));
            }, 1e3)),
              (u.current = r),
              f.current ? (B(f), _(!1)) : h && e();
          };
          return (
            m.subscribe(t),
            () => {
              m.unsubscribe(t), B(f), B(y);
            }
          );
        }, [m, h]);
        const C = !!p && "CarouselSliding" + p;
        return n.createElement(
          "div",
          { className: (0, o.Z)(c.sliderBody, "SliderBody", C) },
          !t &&
            n.createElement(
              i.jp,
              {
                className: (0, o.Z)(
                  c.carouselBtnCtn,
                  c.left,
                  c.carouselNavButton,
                  "CarouselBtnLeft"
                ),
              },
              n.createElement(s.thP, null)
            ),
          n.createElement(
            i.iR,
            {
              className: d.U.GetScrollableClassname(),
              classNameTray: c.slideTrayCustomize,
              classNameAnimation: c.DisableSliderMotion,
            },
            a
          ),
          !t &&
            n.createElement(
              i.P1,
              {
                className: (0, o.Z)(
                  c.carouselBtnCtn,
                  c.right,
                  c.carouselNavButton,
                  "CarouselBtnRight"
                ),
              },
              n.createElement(s.thP, null)
            )
        );
      }
    },
    18817: (e, t, r) => {
      "use strict";
      r.d(t, { NT: () => m, T$: () => c, tx: () => l });
      var i = r(89526),
        n = r(46723),
        a = r(70403),
        s = r(31587),
        o = r(15642);
      r(6960);
      function l() {
        const [e, t] = (0, i.useState)(!1),
          [r, n] = (0, i.useState)(!1),
          [a, s] = (0, i.useState)(!1),
          [o, l] = (0, i.useState)(null),
          [c, m] = (0, i.useState)(null),
          [d, u] = (0, i.useState)(null);
        return {
          bLoading: e,
          bError: r,
          bSuccess: a,
          strError: o,
          strSuccess: c,
          elSuccess: d,
          fnSetLoading: t,
          fnSetError: n,
          fnSetSuccess: s,
          fnSetStrError: l,
          fnSetStrSuccess: m,
          fnSetElSuccess: u,
        };
      }
      function c(e, t) {
        1 != t ? e.fnSetError(!0) : e.fnSetSuccess(!0);
      }
      function m(e) {
        const {
            strDialogTitle: t,
            state: r,
            closeModal: l,
            strThrobber: c,
          } = e,
          {
            bLoading: m,
            bError: d,
            bSuccess: u,
            strError: p,
            strSuccess: g,
            elSuccess: h,
          } = r;
        return d || p
          ? i.createElement(
              n.uH,
              { strTitle: t, bAlertDialog: !0, closeModal: l },
              i.createElement(
                "div",
                { className: a.ErrorStylesWithIcon },
                p || (0, s.Xx)("#Error_ErrorCommunicatingWithNetwork")
              )
            )
          : u || g || h
          ? i.createElement(
              n.uH,
              {
                strTitle: t,
                strDescription: g || (0, s.Xx)("#EventDisplay_Share_Success"),
                bAlertDialog: !0,
                closeModal: l,
              },
              i.createElement(i.Fragment, null, Boolean(h) && h)
            )
          : i.createElement(
              n.uH,
              { strTitle: t, closeModal: () => {} },
              i.createElement(o.V, {
                string: c || (0, s.Xx)("#Loading"),
                size: "medium",
                position: "center",
              })
            );
      }
    },
    39598: (e, t, r) => {
      "use strict";
      r.d(t, { d: () => nr });
      var i = r(33940),
        n = r(89526),
        a = r(44229),
        s = r(26371),
        o = r(83799),
        l = r(577),
        c = r(6960),
        m = r(50567),
        d = r(70756),
        u = r(31621),
        p = r(38800),
        g = r(66729),
        h = r(82569),
        _ = r(33920),
        f = r(55863),
        y = r.n(f),
        B = r(88464),
        C = r(31587),
        b = r(52868),
        S = r.n(b),
        v = r(70983),
        w = r(50265),
        E = r(15642),
        R = r(62114),
        F = r(47330);
      let I = class extends n.Component {
        constructor(e) {
          super(e),
            (this.m_cancelSignal = S().CancelToken.source()),
            (this.state = { bLoadedMetadata: !1 }),
            (this.m_sharedFileInfo = {
              sharedfileid: this.props.sharedFileID,
              title: (0, C.Xx)("#Loading"),
              description: "",
              type: "",
              previewurl: "",
              appid: 0,
              url:
                v.De.COMMUNITY_BASE_URL +
                "sharedfiles/filedetails/?id=" +
                this.props.sharedFileID,
            });
        }
        componentDidMount() {
          R.A.LoadSharedFileDynamicData(
            [this.props.sharedFileID],
            this.m_cancelSignal
          )
            .then((e) => {
              !this.m_cancelSignal.token.reason &&
                e.length > 0 &&
                ((this.m_sharedFileInfo = e[0]),
                this.setState({ bLoadedMetadata: !0 }));
            })
            .catch((e) =>
              console.error("SharedFileSnippet: " + (0, F.l)(e).strErrorMsg)
            );
        }
        componentWillUnmount() {
          this.m_cancelSignal.cancel("SharedFileSnippet component unmounted");
        }
        render() {
          let e =
            void 0 !== this.m_sharedFileInfo.personnaname &&
            this.m_sharedFileInfo.personnaname.length > 0;
          return n.createElement(
            "a",
            {
              href: this.m_sharedFileInfo.url,
              className: y().DynamicLinkBox,
              "data-modal-content-sizetofit":
                !!this.m_sharedFileInfo.bSizeToFit,
              "data-appid": this.m_sharedFileInfo.appid,
              "data-publishedfileid": this.props.sharedFileID,
            },
            n.createElement("img", {
              className: y().DynamicLink_Preview,
              src: this.m_sharedFileInfo.previewurl,
            }),
            n.createElement(
              "div",
              { className: y().DynamicLink_Content },
              n.createElement(
                "div",
                { className: y().DynamicLink_Name },
                this.m_sharedFileInfo.title
              ),
              n.createElement(
                "div",
                null,
                n.createElement(
                  "span",
                  { className: y().DynamicLink_Type },
                  this.m_sharedFileInfo.type
                )
              ),
              e &&
                n.createElement(
                  "div",
                  { className: y().DynamicLink_Author },
                  (0, C.kQ)(
                    "#EventEditor_Author",
                    n.createElement(
                      "span",
                      { className: y().DynamicLink_AuthorName },
                      this.m_sharedFileInfo.personnaname
                    )
                  )
                ),
              n.createElement(
                "div",
                { className: y().DynamicLink_Description },
                this.m_sharedFileInfo.description
              )
            )
          );
        }
      };
      (0, i.gn)([w.LO], I.prototype, "m_sharedFileInfo", void 0),
        (I = (0, i.gn)([B.Pi], I));
      var M = r(86701),
        U = r(13806),
        D = r(98197),
        A = r(36764),
        z = r(29760),
        N = r(63154),
        T = r(1633),
        L = r(93373),
        x = r(91965);
      let G = class extends n.Component {
        constructor() {
          super(...arguments),
            (this.state = {
              bLoading: this.props.announcementGID
                ? !d.j1.BHasClanAnnouncementGID(this.props.announcementGID)
                : !d.j1.BHasClanAnnouncementGID(this.props.eventGID),
              bFailedLoad: !1,
            }),
            (this.m_cancelSignal = S().CancelToken.source());
        }
        componentDidMount() {
          this.HandleLoadEventInfo();
        }
        HandleLoadEventInfo() {
          return (0, i.mG)(this, void 0, void 0, function* () {
            const {
              appid: e,
              strVanity: t,
              announcementGID: r,
              eventGID: i,
              strGroupVanity: n,
            } = this.props;
            let a = this.props.clanSteamID;
            try {
              if (this.state.bLoading) {
                if (void 0 !== t) {
                  a = (yield z.sV.LoadOGGClanInfoForIdentifier(t)).clanSteamID;
                } else if (void 0 !== n) {
                  a = (yield z.sV.LoadOGGClanInfoForGroupVanity(n)).clanSteamID;
                }
                const s = d.j1.LoadPartnerEventGeneric(a, e, i, r, 0);
                let o = yield s;
                yield Promise.all([
                  N.Z.Get().QueueAppRequest(o.appid, {
                    include_assets: !0,
                    include_basic_info: !0,
                    include_release: !0,
                  }),
                ]),
                  this.setState({ bFailedLoad: !1, bLoading: !1 });
              }
            } catch (e) {
              this.HandleError(e);
            }
          });
        }
        HandleError(e) {
          let t = (0, F.l)(e);
          const {
            eventGID: r,
            announcementGID: i,
            strGroupVanity: n,
            strVanity: a,
          } = this.props;
          console.error(
            "EventSnippet hit error on announceGID " +
              i +
              " eventGID " +
              r +
              " strVanity " +
              a +
              " strGroupVanity " +
              n +
              " error: " +
              t.strErrorMsg
          ),
            this.setState({ bFailedLoad: !0 });
        }
        componentWillUnmount() {
          this.m_cancelSignal.cancel("component unmounted");
        }
        render() {
          var e;
          const {
            appid: t,
            announcementGID: r,
            eventGID: i,
            strURL: a,
            fnFilterImageURLsForKnownFailures: s,
            fnImageFailureCallback: o,
          } = this.props;
          if (this.state.bFailedLoad) return (0, L.h)(a);
          if (this.state.bLoading) return n.createElement(E.V, null);
          let l =
            void 0 !== r
              ? d.j1.GetClanEventFromAnnouncementGID(r)
              : d.j1.GetClanEventModel(i);
          if (null == l) return (0, L.h)(a);
          let m = (0, c.jM)(v.De.LANGUAGE),
            u = l.GetImageForSizeAsArrayWithFallback(
              "capsule",
              m,
              A.FN.capsule_main
            );
          s && (u = s(u));
          let p = l.GetNameWithFallback(m),
            g = l.GetSubTitleWithSummaryFallback(m),
            h =
              null === (e = N.Z.Get().GetApp(t)) || void 0 === e
                ? void 0
                : e.GetName(),
            _ = (0, C.$1)(l.GetStartTimeAndDateUnixSeconds());
          return n.createElement(
            x.JW,
            {
              eventModel: l,
              route: x.Ue.k_eView,
              className: y().DynamicLinkBox,
              "data-modal-content-sizetofit": !0,
              "data-appid": t,
            },
            n.createElement(T.j, {
              className: y().DynamicLink_Preview,
              rgSources: u,
              onIncrementalError: (e, t, r) => o && o(t),
            }),
            n.createElement(
              "div",
              { className: y().DynamicLink_Content },
              n.createElement(
                "div",
                { className: y().DynamicLink_Author },
                (0, C.Xx)(
                  28 == l.type
                    ? "#EventDisplay_Share_Announcement"
                    : "#EventDisplay_Share_Event",
                  h
                ),
                n.createElement("span", { className: y().DynamicLink_Date }, _)
              ),
              n.createElement(
                "div",
                { className: y().DynamicLink_Name },
                n.createElement("div", { className: y().DynamicLink_Type }, p)
              ),
              n.createElement(
                "div",
                { className: y().DynamicLink_Description },
                g
              )
            )
          );
        }
      };
      G = (0, i.gn)([B.Pi], G);
      var P = r(60832),
        k = r(89159),
        O = r.n(k);
      let W = class extends n.Component {
        constructor() {
          super(...arguments),
            (this.state = { bSummaryMode: !0, bLoadedMetaData: !1 });
        }
        componentDidMount() {
          return (0, i.mG)(this, void 0, void 0, function* () {
            let e =
              "https://sketchfab.com/oembed?url=https://sketchfab.com/models/" +
              this.props.modelID;
            try {
              let t = yield S().get(e);
              this.setState({ bLoadedMetaData: !0, data: t.data });
            } catch (e) {
              this.setState({ bError: !0 }),
                console.error(
                  "SketchFabEmbed failed to load: " + (0, F.l)(e).strErrorMsg
                );
            }
          });
        }
        OnSketchFabClick() {
          this.state.bLoadedMetaData && this.setState({ bSummaryMode: !1 });
        }
        render() {
          const { modelID: e } = this.props;
          return this.state.bError
            ? n.createElement(
                "div",
                {
                  className: O().dynamiclink_box,
                  onClick: this.OnSketchFabClick,
                },
                n.createElement("span", null, e),
                n.createElement(
                  "span",
                  null,
                  (0, C.Xx)("#EventDisplay_SketchFab_Error_Network")
                )
              )
            : this.state.bSummaryMode
            ? n.createElement(
                "div",
                {
                  className: O().dynamiclink_box,
                  onClick: this.OnSketchFabClick,
                },
                Boolean(this.state.bLoadedMetaData)
                  ? n.createElement(
                      n.Fragment,
                      null,
                      n.createElement("img", {
                        className: O().dynamiclink_preview,
                        src: this.state.data.thumbnail_url,
                      }),
                      n.createElement("img", {
                        className: O().sketchfab_play_overlay_image,
                      }),
                      n.createElement(
                        "div",
                        { className: O().dynamiclink_content },
                        n.createElement(
                          "div",
                          { className: O().dynamiclink_name },
                          n.createElement(
                            "span",
                            { className: O().dynamiclink_type },
                            (0, C.Xx)("#EventDisplay_Sketchfab")
                          ),
                          n.createElement(
                            "div",
                            null,
                            this.state.data.title,
                            " "
                          )
                        ),
                        n.createElement(
                          "div",
                          { className: O().dynamiclink_author },
                          this.state.data.author_name
                        )
                      )
                    )
                  : n.createElement(E.V, { size: "medium" })
              )
            : n.createElement(
                "div",
                { className: O().sketchfabmodelembedded },
                n.createElement("iframe", {
                  className: O().sketchfabmodelembedded,
                  src:
                    "https://sketchfab.com/models/" +
                    this.props.modelID +
                    "/embed?autostart=1",
                  frameBorder: 0,
                  allowFullScreen: !0,
                })
              );
        }
      };
      (0, i.gn)([u.ak], W.prototype, "OnSketchFabClick", null),
        (W = (0, i.gn)([B.Pi], W));
      var j = r(20186),
        X = r(66236),
        V = r(40108),
        Z = r(70493),
        H = r.n(Z);
      function Q(e) {
        const { defid: t, url: r } = e,
          i = (0, X.O)(t);
        if (!i || !i.community_item_data) return null;
        const a = i.appid,
          s = i.community_item_data.item_image_large,
          o = `${v.De.MEDIA_CDN_COMMUNITY_URL}images/items/${a}/${s}`;
        return (
          "dev" == v.De.WEB_UNIVERSE &&
            console.log("reward itemdef", (0, w.ZN)(i)),
          n.createElement(
            "div",
            { className: H().Ctn },
            n.createElement(
              V.HP,
              { toolTipContent: i.community_item_data.item_description },
              n.createElement("img", {
                src: o,
                alt: i.community_item_data.item_title,
              })
            )
          )
        );
      }
      const q =
          /(?:steampowered\.com|valve\.org\/store|steam\.dev\/store|store\.\S+\.steam\.dev|store\.steamchina\.com)\/(app|bundle|sub)\/(\d+)/i,
        Y =
          /(?:steamcommunity\.com|valve\.org\/community|steam\.dev\/community|community\.\S+\.steam\.dev|my\.steamchina\.com)\/(games|app|ogg|gid|groups)\/(\w+)\/(?:announcements\/detail|partnerevents\/view_old_announcement)\/(\d+)/i,
        $ =
          /(?:steamcommunity\.com|valve\.org\/community|community\.\S+\.steam\.dev|steam\.dev\/community)\/(games|app|ogg|gid|groups)\/(\w+)\/partnerevents\/view\/(\d+)/i,
        K =
          /(?:steampowered\.com|valve\.org\/store|store\.\S+\.steam\.dev|steam\.dev\/store|store\.steamchina\.com)\/(?:news|newshub)\/(group|app)\/(\w+)\/view\/(\d+)/i,
        J = /:\/\/medal.tv\/(?:clip|clips)\/([a-z0-9]+)/i,
        ee = /sketchfab.com\/(?:models\/(?:[^\/\s]+-)?)([a-z0-9]{32})/i,
        te = /twitter\.com\/(\w+)(\/?)$/i,
        re = /twitter\.com\/hashtag\/(\w+)(\/?)$/i,
        ie = /twitch\.tv\/(\w+)(\/?)$/i,
        ne =
          /(?:steamcommunity\.com|valve\.org\/community|steam\.dev\/community|community\.\S+\.steam\.dev|my\.steamchina\.com)\/id\/(\w+)(\/?)$/i,
        ae =
          /(?:steampowered\.com|valve\.org\/store|steam\.dev\/store|store\.steamchina\.com)\/points\/shop\/.*reward\/(\d+)$/i;
      let se = null;
      function oe(e, t) {
        if (v.De.EREALM === p.IN.k_ESteamRealmChina) return null;
        const r = (0, g.S6)(e);
        return void 0 !== (null == r ? void 0 : r.strVideoID)
          ? n.createElement(_.O, {
              videoID: r.strVideoID,
              nStartSeconds: r.nStartSeconds,
              classNameAlign: "",
              classNameSize: y().sizeFull,
              bShowVideoImmediately: !1,
            })
          : (0, L.h)(e, null == t ? void 0 : t.event);
      }
      function le(e, t) {
        if (v.De.EREALM === p.IN.k_ESteamRealmChina) return null;
        const r = new RegExp(J).exec(e);
        if (r && r.length > 1) {
          const e = r[1];
          if ((null == e ? void 0 : e.length) > 0) {
            let r =
              "https://medal.tv/clip/" +
              e +
              "/?autoplay=0&donate=0" +
              (t && t.event ? "&steamappid=" + t.event.appid : "");
            return n.createElement("iframe", {
              className: P.MedalTVWidget,
              src: r,
              frameBorder: 0,
              allow: "autoplay",
            });
          }
        }
        return (0, L.h)(e, null == t ? void 0 : t.event);
      }
      function ce(e, t) {
        let r = new RegExp(ee).exec(e);
        if (r && r.length > 1) {
          let e = r[1];
          if (e && e.length > 1) return n.createElement(W, { modelID: e });
        }
        return (0, L.h)(e, null == t ? void 0 : t.event);
      }
      function me(e, t) {
        const r = e.split("?");
        let i;
        if (2 == r.length) {
          const e = new URLSearchParams(r[1]);
          e.has("id") && (i = e.get("id"));
        }
        return void 0 !== i
          ? n.createElement(I, { sharedFileID: i })
          : (0, L.h)(e, null == t ? void 0 : t.event);
      }
      function de(e) {
        let t = (0, D.FM)(e).toLocaleLowerCase(),
          r = (0, D.FM)(v.De.STORE_BASE_URL),
          i = (0, D.FM)(v.De.COMMUNITY_BASE_URL);
        return (
          t == r ||
          t == i ||
          ("dev" === v.De.WEB_UNIVERSE &&
            (t.includes("steampowered.com") ||
              t.includes("steamcommunity.com") ||
              t.includes("steamchina.com")))
        );
      }
      function ue(e, t) {
        if (de(e)) {
          let t = new RegExp(q).exec(e);
          if (t && t.length > 2) {
            let e = t[1],
              r = Number(t[2]);
            if (r > 0) {
              let t = "bundle" == e ? "bundle" : "sub" == e ? "sub" : "game";
              return n.createElement(
                "div",
                {
                  className: (0, U.Z)(
                    P.AppSummaryWidgetCtn,
                    "AppSummaryWidgetCtn"
                  ),
                },
                n.createElement(j.ju, {
                  id: r,
                  type: t,
                  bAllowTwoLinesForHeader: !0,
                })
              );
            }
          }
        }
        return (0, L.h)(e, null == t ? void 0 : t.event);
      }
      function pe(e, t) {
        if (de(e)) {
          const t = new RegExp(ae).exec(e);
          if (t && t.length > 1) {
            const r = Number(t[1]);
            if (r > 0)
              return n.createElement(
                "div",
                { className: (0, U.Z)(P.LoyaltyRewardCtn) },
                n.createElement(Q, { defid: r, url: e })
              );
          }
        }
        return (0, L.h)(e, null == t ? void 0 : t.event);
      }
      function ge(e, t) {
        if (de(e)) {
          let t = new RegExp(Y).exec(e);
          if (t && t.length > 2) {
            let r, i, a, s;
            "gid" == t[1]
              ? (i = new h.K(t[2]))
              : "groups" == t[1]
              ? (s = t[2])
              : isNaN(+t[2])
              ? (a = t[2])
              : (r = Number(t[2]));
            let o = t[3];
            if (
              ((void 0 !== r && r > 0) ||
                void 0 !== a ||
                void 0 !== s ||
                void 0 !== i) &&
              null != o &&
              o.length > 0
            )
              return n.createElement(G, {
                appid: r,
                clanSteamID: i,
                strVanity: a,
                strGroupVanity: s,
                announcementGID: o,
                strURL: e,
              });
          }
        }
        return (0, L.h)(e, null == t ? void 0 : t.event);
      }
      function he(e, t) {
        return Se(K, e, t);
      }
      function _e(e, t) {
        return Se($, e, t);
      }
      function fe(e, t) {
        return v.De.EREALM === p.IN.k_ESteamRealmChina
          ? null
          : be(e, n.createElement(M.tLe, null), "@", t);
      }
      function ye(e, t) {
        return v.De.EREALM === p.IN.k_ESteamRealmChina
          ? null
          : be(e, n.createElement(M.tLe, null), "#", t);
      }
      function Be(e, t) {
        return v.De.EREALM === p.IN.k_ESteamRealmChina
          ? null
          : be(e, n.createElement(M.Lk$, null), void 0, t);
      }
      function Ce(e, t) {
        return be(e, n.createElement(M.ui7, null), void 0, t);
      }
      function be(e, t, r, i) {
        let a;
        const s = e.endsWith("/") ? e.length - 1 : e.length,
          o = e.lastIndexOf("/", s - 1);
        -1 != o && o + 1 < e.length && (a = e.substring(o + 1, s)),
          r && a && (a = r + a);
        const l = (0, L.h)(e, null == i ? void 0 : i.event, null != a ? a : e);
        return n.createElement(
          "div",
          { className: P.SocialLink },
          n.createElement("div", { className: P.SocialIcon }, t),
          l
        );
      }
      function Se(e, t, r) {
        if (de(t)) {
          let r = new RegExp(e).exec(t);
          if (r && r.length > 2) {
            let e, i, a, s;
            "gid" == r[1]
              ? (i = new h.K(r[2]))
              : "group" == r[1]
              ? (i = h.K.InitFromClanID(Number.parseInt(r[2])))
              : "groups" == r[1]
              ? (s = r[2])
              : isNaN(+r[2])
              ? (a = r[2])
              : (e = Number(r[2]));
            const o = r[3];
            if (
              ((void 0 !== e && e > 0) ||
                void 0 !== a ||
                void 0 !== s ||
                void 0 !== i) &&
              null != o &&
              o.length > 0
            )
              return n.createElement(G, {
                appid: e,
                clanSteamID: i,
                strVanity: a,
                strGroupVanity: s,
                eventGID: o,
                strURL: t,
              });
          }
        }
        return (0, L.h)(t, null == r ? void 0 : r.event);
      }
      r(82702);
      var ve = r(45878),
        we = r(19320);
      r(82633);
      const Ee = ve.Message;
      class Re extends Ee {
        constructor(e = null) {
          super(),
            Re.prototype.operation || we.aR(Re.M()),
            Ee.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            Re.sm_m ||
              (Re.sm_m = {
                proto: Re,
                fields: {
                  operation: { n: 1, br: we.FE.readEnum, bw: we.Xc.writeEnum },
                  machine_name: {
                    n: 2,
                    br: we.FE.readString,
                    bw: we.Xc.writeString,
                  },
                  client_id: {
                    n: 3,
                    br: we.FE.readUint64String,
                    bw: we.Xc.writeUint64String,
                  },
                  time_last_updated: {
                    n: 4,
                    br: we.FE.readUint32,
                    bw: we.Xc.writeUint32,
                  },
                },
              }),
            Re.sm_m
          );
        }
        static MBF() {
          return Re.sm_mbf || (Re.sm_mbf = we.Bh(Re.M())), Re.sm_mbf;
        }
        toObject(e = !1) {
          return Re.toObject(e, this);
        }
        static toObject(e, t) {
          return we.TA(Re.M(), e, t);
        }
        static fromObject(e) {
          return we.aD(Re.M(), e);
        }
        static deserializeBinary(e) {
          let t = new ve.BinaryReader(e),
            r = new Re();
          return Re.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return we.F(Re.MBF(), e, t);
        }
        serializeBinary() {
          var e = new ve.BinaryWriter();
          return Re.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          we.l2(Re.M(), e, t);
        }
        serializeBase64String() {
          var e = new ve.BinaryWriter();
          return Re.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCloud_PendingRemoteOperation";
        }
      }
      const Fe = ve.Message;
      class Ie extends Fe {
        constructor(e = null) {
          super(),
            Ie.prototype.appid || we.aR(Ie.M()),
            Fe.initialize(this, e, 0, -1, [9], null);
        }
        static M() {
          return (
            Ie.sm_m ||
              (Ie.sm_m = {
                proto: Ie,
                fields: {
                  appid: { n: 1, br: we.FE.readUint32, bw: we.Xc.writeUint32 },
                  ugcid: {
                    n: 2,
                    br: we.FE.readUint64String,
                    bw: we.Xc.writeUint64String,
                  },
                  filename: {
                    n: 3,
                    br: we.FE.readString,
                    bw: we.Xc.writeString,
                  },
                  timestamp: {
                    n: 4,
                    br: we.FE.readUint64String,
                    bw: we.Xc.writeUint64String,
                  },
                  file_size: {
                    n: 5,
                    br: we.FE.readUint32,
                    bw: we.Xc.writeUint32,
                  },
                  url: { n: 6, br: we.FE.readString, bw: we.Xc.writeString },
                  steamid_creator: {
                    n: 7,
                    br: we.FE.readFixed64String,
                    bw: we.Xc.writeFixed64String,
                  },
                  flags: { n: 8, br: we.FE.readUint32, bw: we.Xc.writeUint32 },
                  platforms_to_sync: {
                    n: 9,
                    r: !0,
                    q: !0,
                    br: we.FE.readString,
                    bw: we.Xc.writeRepeatedString,
                  },
                  file_sha: {
                    n: 10,
                    br: we.FE.readString,
                    bw: we.Xc.writeString,
                  },
                },
              }),
            Ie.sm_m
          );
        }
        static MBF() {
          return Ie.sm_mbf || (Ie.sm_mbf = we.Bh(Ie.M())), Ie.sm_mbf;
        }
        toObject(e = !1) {
          return Ie.toObject(e, this);
        }
        static toObject(e, t) {
          return we.TA(Ie.M(), e, t);
        }
        static fromObject(e) {
          return we.aD(Ie.M(), e);
        }
        static deserializeBinary(e) {
          let t = new ve.BinaryReader(e),
            r = new Ie();
          return Ie.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return we.F(Ie.MBF(), e, t);
        }
        serializeBinary() {
          var e = new ve.BinaryWriter();
          return Ie.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          we.l2(Ie.M(), e, t);
        }
        serializeBase64String() {
          var e = new ve.BinaryWriter();
          return Ie.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCloud_UserFile";
        }
      }
      class Me extends Fe {
        constructor(e = null) {
          super(),
            Me.prototype.server_url || we.aR(Me.M()),
            Fe.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            Me.sm_m ||
              (Me.sm_m = {
                proto: Me,
                fields: {
                  server_url: {
                    n: 1,
                    br: we.FE.readString,
                    bw: we.Xc.writeString,
                  },
                },
              }),
            Me.sm_m
          );
        }
        static MBF() {
          return Me.sm_mbf || (Me.sm_mbf = we.Bh(Me.M())), Me.sm_mbf;
        }
        toObject(e = !1) {
          return Me.toObject(e, this);
        }
        static toObject(e, t) {
          return we.TA(Me.M(), e, t);
        }
        static fromObject(e) {
          return we.aD(Me.M(), e);
        }
        static deserializeBinary(e) {
          let t = new ve.BinaryReader(e),
            r = new Me();
          return Me.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return we.F(Me.MBF(), e, t);
        }
        serializeBinary() {
          var e = new ve.BinaryWriter();
          return Me.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          we.l2(Me.M(), e, t);
        }
        serializeBase64String() {
          var e = new ve.BinaryWriter();
          return Me.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCloud_GetUploadServerInfo_Response";
        }
      }
      class Ue extends Fe {
        constructor(e = null) {
          super(),
            Ue.prototype.ugcid || we.aR(Ue.M()),
            Fe.initialize(this, e, 0, -1, [6], null);
        }
        static M() {
          return (
            Ue.sm_m ||
              (Ue.sm_m = {
                proto: Ue,
                fields: {
                  ugcid: {
                    n: 1,
                    br: we.FE.readFixed64String,
                    bw: we.Xc.writeFixed64String,
                  },
                  timestamp: {
                    n: 2,
                    br: we.FE.readFixed32,
                    bw: we.Xc.writeFixed32,
                  },
                  url_host: {
                    n: 3,
                    br: we.FE.readString,
                    bw: we.Xc.writeString,
                  },
                  url_path: {
                    n: 4,
                    br: we.FE.readString,
                    bw: we.Xc.writeString,
                  },
                  use_https: { n: 5, br: we.FE.readBool, bw: we.Xc.writeBool },
                  request_headers: { n: 6, c: De, r: !0, q: !0 },
                },
              }),
            Ue.sm_m
          );
        }
        static MBF() {
          return Ue.sm_mbf || (Ue.sm_mbf = we.Bh(Ue.M())), Ue.sm_mbf;
        }
        toObject(e = !1) {
          return Ue.toObject(e, this);
        }
        static toObject(e, t) {
          return we.TA(Ue.M(), e, t);
        }
        static fromObject(e) {
          return we.aD(Ue.M(), e);
        }
        static deserializeBinary(e) {
          let t = new ve.BinaryReader(e),
            r = new Ue();
          return Ue.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return we.F(Ue.MBF(), e, t);
        }
        serializeBinary() {
          var e = new ve.BinaryWriter();
          return Ue.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          we.l2(Ue.M(), e, t);
        }
        serializeBase64String() {
          var e = new ve.BinaryWriter();
          return Ue.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCloud_BeginHTTPUpload_Response";
        }
      }
      class De extends Fe {
        constructor(e = null) {
          super(),
            De.prototype.name || we.aR(De.M()),
            Fe.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            De.sm_m ||
              (De.sm_m = {
                proto: De,
                fields: {
                  name: { n: 1, br: we.FE.readString, bw: we.Xc.writeString },
                  value: { n: 2, br: we.FE.readString, bw: we.Xc.writeString },
                },
              }),
            De.sm_m
          );
        }
        static MBF() {
          return De.sm_mbf || (De.sm_mbf = we.Bh(De.M())), De.sm_mbf;
        }
        toObject(e = !1) {
          return De.toObject(e, this);
        }
        static toObject(e, t) {
          return we.TA(De.M(), e, t);
        }
        static fromObject(e) {
          return we.aD(De.M(), e);
        }
        static deserializeBinary(e) {
          let t = new ve.BinaryReader(e),
            r = new De();
          return De.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return we.F(De.MBF(), e, t);
        }
        serializeBinary() {
          var e = new ve.BinaryWriter();
          return De.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          we.l2(De.M(), e, t);
        }
        serializeBase64String() {
          var e = new ve.BinaryWriter();
          return De.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCloud_BeginHTTPUpload_Response_HTTPHeaders";
        }
      }
      class Ae extends Fe {
        constructor(e = null) {
          super(),
            Ae.prototype.file_committed || we.aR(Ae.M()),
            Fe.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            Ae.sm_m ||
              (Ae.sm_m = {
                proto: Ae,
                fields: {
                  file_committed: {
                    n: 1,
                    br: we.FE.readBool,
                    bw: we.Xc.writeBool,
                  },
                },
              }),
            Ae.sm_m
          );
        }
        static MBF() {
          return Ae.sm_mbf || (Ae.sm_mbf = we.Bh(Ae.M())), Ae.sm_mbf;
        }
        toObject(e = !1) {
          return Ae.toObject(e, this);
        }
        static toObject(e, t) {
          return we.TA(Ae.M(), e, t);
        }
        static fromObject(e) {
          return we.aD(Ae.M(), e);
        }
        static deserializeBinary(e) {
          let t = new ve.BinaryReader(e),
            r = new Ae();
          return Ae.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return we.F(Ae.MBF(), e, t);
        }
        serializeBinary() {
          var e = new ve.BinaryWriter();
          return Ae.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          we.l2(Ae.M(), e, t);
        }
        serializeBase64String() {
          var e = new ve.BinaryWriter();
          return Ae.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCloud_CommitHTTPUpload_Response";
        }
      }
      class ze extends Fe {
        constructor(e = null) {
          super(),
            ze.prototype.storage_system || we.aR(ze.M()),
            Fe.initialize(this, e, 0, -1, [7], null);
        }
        static M() {
          return (
            ze.sm_m ||
              (ze.sm_m = {
                proto: ze,
                fields: {
                  storage_system: {
                    n: 1,
                    br: we.FE.readEnum,
                    bw: we.Xc.writeEnum,
                  },
                  ugcid: {
                    n: 2,
                    br: we.FE.readFixed64String,
                    bw: we.Xc.writeFixed64String,
                  },
                  timestamp: {
                    n: 3,
                    br: we.FE.readFixed32,
                    bw: we.Xc.writeFixed32,
                  },
                  url_host: {
                    n: 4,
                    br: we.FE.readString,
                    bw: we.Xc.writeString,
                  },
                  url_path: {
                    n: 5,
                    br: we.FE.readString,
                    bw: we.Xc.writeString,
                  },
                  use_https: { n: 6, br: we.FE.readBool, bw: we.Xc.writeBool },
                  request_headers: { n: 7, c: Ne, r: !0, q: !0 },
                },
              }),
            ze.sm_m
          );
        }
        static MBF() {
          return ze.sm_mbf || (ze.sm_mbf = we.Bh(ze.M())), ze.sm_mbf;
        }
        toObject(e = !1) {
          return ze.toObject(e, this);
        }
        static toObject(e, t) {
          return we.TA(ze.M(), e, t);
        }
        static fromObject(e) {
          return we.aD(ze.M(), e);
        }
        static deserializeBinary(e) {
          let t = new ve.BinaryReader(e),
            r = new ze();
          return ze.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return we.F(ze.MBF(), e, t);
        }
        serializeBinary() {
          var e = new ve.BinaryWriter();
          return ze.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          we.l2(ze.M(), e, t);
        }
        serializeBase64String() {
          var e = new ve.BinaryWriter();
          return ze.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCloud_BeginUGCUpload_Response";
        }
      }
      class Ne extends Fe {
        constructor(e = null) {
          super(),
            Ne.prototype.name || we.aR(Ne.M()),
            Fe.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            Ne.sm_m ||
              (Ne.sm_m = {
                proto: Ne,
                fields: {
                  name: { n: 1, br: we.FE.readString, bw: we.Xc.writeString },
                  value: { n: 2, br: we.FE.readString, bw: we.Xc.writeString },
                },
              }),
            Ne.sm_m
          );
        }
        static MBF() {
          return Ne.sm_mbf || (Ne.sm_mbf = we.Bh(Ne.M())), Ne.sm_mbf;
        }
        toObject(e = !1) {
          return Ne.toObject(e, this);
        }
        static toObject(e, t) {
          return we.TA(Ne.M(), e, t);
        }
        static fromObject(e) {
          return we.aD(Ne.M(), e);
        }
        static deserializeBinary(e) {
          let t = new ve.BinaryReader(e),
            r = new Ne();
          return Ne.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return we.F(Ne.MBF(), e, t);
        }
        serializeBinary() {
          var e = new ve.BinaryWriter();
          return Ne.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          we.l2(Ne.M(), e, t);
        }
        serializeBase64String() {
          var e = new ve.BinaryWriter();
          return Ne.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCloud_BeginUGCUpload_Response_HTTPHeaders";
        }
      }
      class Te extends Fe {
        constructor(e = null) {
          super(),
            Te.prototype.file_committed || we.aR(Te.M()),
            Fe.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            Te.sm_m ||
              (Te.sm_m = {
                proto: Te,
                fields: {
                  file_committed: {
                    n: 1,
                    br: we.FE.readBool,
                    bw: we.Xc.writeBool,
                  },
                },
              }),
            Te.sm_m
          );
        }
        static MBF() {
          return Te.sm_mbf || (Te.sm_mbf = we.Bh(Te.M())), Te.sm_mbf;
        }
        toObject(e = !1) {
          return Te.toObject(e, this);
        }
        static toObject(e, t) {
          return we.TA(Te.M(), e, t);
        }
        static fromObject(e) {
          return we.aD(Te.M(), e);
        }
        static deserializeBinary(e) {
          let t = new ve.BinaryReader(e),
            r = new Te();
          return Te.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return we.F(Te.MBF(), e, t);
        }
        serializeBinary() {
          var e = new ve.BinaryWriter();
          return Te.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          we.l2(Te.M(), e, t);
        }
        serializeBase64String() {
          var e = new ve.BinaryWriter();
          return Te.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCloud_CommitUGCUpload_Response";
        }
      }
      class Le extends Fe {
        constructor(e = null) {
          super(),
            Le.prototype.details || we.aR(Le.M()),
            Fe.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            Le.sm_m ||
              (Le.sm_m = { proto: Le, fields: { details: { n: 1, c: Ie } } }),
            Le.sm_m
          );
        }
        static MBF() {
          return Le.sm_mbf || (Le.sm_mbf = we.Bh(Le.M())), Le.sm_mbf;
        }
        toObject(e = !1) {
          return Le.toObject(e, this);
        }
        static toObject(e, t) {
          return we.TA(Le.M(), e, t);
        }
        static fromObject(e) {
          return we.aD(Le.M(), e);
        }
        static deserializeBinary(e) {
          let t = new ve.BinaryReader(e),
            r = new Le();
          return Le.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return we.F(Le.MBF(), e, t);
        }
        serializeBinary() {
          var e = new ve.BinaryWriter();
          return Le.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          we.l2(Le.M(), e, t);
        }
        serializeBase64String() {
          var e = new ve.BinaryWriter();
          return Le.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCloud_GetFileDetails_Response";
        }
      }
      class xe extends Fe {
        constructor(e = null) {
          super(),
            xe.prototype.files || we.aR(xe.M()),
            Fe.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            xe.sm_m ||
              (xe.sm_m = {
                proto: xe,
                fields: {
                  files: { n: 1, c: Ie, r: !0, q: !0 },
                  total_files: {
                    n: 2,
                    br: we.FE.readUint32,
                    bw: we.Xc.writeUint32,
                  },
                },
              }),
            xe.sm_m
          );
        }
        static MBF() {
          return xe.sm_mbf || (xe.sm_mbf = we.Bh(xe.M())), xe.sm_mbf;
        }
        toObject(e = !1) {
          return xe.toObject(e, this);
        }
        static toObject(e, t) {
          return we.TA(xe.M(), e, t);
        }
        static fromObject(e) {
          return we.aD(xe.M(), e);
        }
        static deserializeBinary(e) {
          let t = new ve.BinaryReader(e),
            r = new xe();
          return xe.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return we.F(xe.MBF(), e, t);
        }
        serializeBinary() {
          var e = new ve.BinaryWriter();
          return xe.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          we.l2(xe.M(), e, t);
        }
        serializeBase64String() {
          var e = new ve.BinaryWriter();
          return xe.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCloud_EnumerateUserFiles_Response";
        }
      }
      class Ge extends Fe {
        constructor(e = null) {
          super(), Fe.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return Ge.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new Ge();
        }
        static deserializeBinary(e) {
          let t = new ve.BinaryReader(e),
            r = new Ge();
          return Ge.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new ve.BinaryWriter();
          return Ge.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new ve.BinaryWriter();
          return Ge.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCloud_Delete_Response";
        }
      }
      class Pe extends Fe {
        constructor(e = null) {
          super(),
            Pe.prototype.key || we.aR(Pe.M()),
            Fe.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            Pe.sm_m ||
              (Pe.sm_m = {
                proto: Pe,
                fields: {
                  key: { n: 1, br: we.FE.readBytes, bw: we.Xc.writeBytes },
                  crc: { n: 2, br: we.FE.readInt32, bw: we.Xc.writeInt32 },
                },
              }),
            Pe.sm_m
          );
        }
        static MBF() {
          return Pe.sm_mbf || (Pe.sm_mbf = we.Bh(Pe.M())), Pe.sm_mbf;
        }
        toObject(e = !1) {
          return Pe.toObject(e, this);
        }
        static toObject(e, t) {
          return we.TA(Pe.M(), e, t);
        }
        static fromObject(e) {
          return we.aD(Pe.M(), e);
        }
        static deserializeBinary(e) {
          let t = new ve.BinaryReader(e),
            r = new Pe();
          return Pe.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return we.F(Pe.MBF(), e, t);
        }
        serializeBinary() {
          var e = new ve.BinaryWriter();
          return Pe.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          we.l2(Pe.M(), e, t);
        }
        serializeBase64String() {
          var e = new ve.BinaryWriter();
          return Pe.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCloud_GetClientEncryptionKey_Response";
        }
      }
      class ke extends Fe {
        constructor(e = null) {
          super(),
            ke.prototype.pending_remote_operations || we.aR(ke.M()),
            Fe.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            ke.sm_m ||
              (ke.sm_m = {
                proto: ke,
                fields: {
                  pending_remote_operations: { n: 1, c: Re, r: !0, q: !0 },
                },
              }),
            ke.sm_m
          );
        }
        static MBF() {
          return ke.sm_mbf || (ke.sm_mbf = we.Bh(ke.M())), ke.sm_mbf;
        }
        toObject(e = !1) {
          return ke.toObject(e, this);
        }
        static toObject(e, t) {
          return we.TA(ke.M(), e, t);
        }
        static fromObject(e) {
          return we.aD(ke.M(), e);
        }
        static deserializeBinary(e) {
          let t = new ve.BinaryReader(e),
            r = new ke();
          return ke.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return we.F(ke.MBF(), e, t);
        }
        serializeBinary() {
          var e = new ve.BinaryWriter();
          return ke.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          we.l2(ke.M(), e, t);
        }
        serializeBase64String() {
          var e = new ve.BinaryWriter();
          return ke.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCloud_AppLaunchIntent_Response";
        }
      }
      class Oe extends Fe {
        constructor(e = null) {
          super(),
            Oe.prototype.existing_files || we.aR(Oe.M()),
            Fe.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            Oe.sm_m ||
              (Oe.sm_m = {
                proto: Oe,
                fields: {
                  existing_files: {
                    n: 1,
                    br: we.FE.readUint32,
                    bw: we.Xc.writeUint32,
                  },
                  existing_bytes: {
                    n: 2,
                    br: we.FE.readUint64String,
                    bw: we.Xc.writeUint64String,
                  },
                  max_num_files: {
                    n: 3,
                    br: we.FE.readUint32,
                    bw: we.Xc.writeUint32,
                  },
                  max_num_bytes: {
                    n: 4,
                    br: we.FE.readUint64String,
                    bw: we.Xc.writeUint64String,
                  },
                },
              }),
            Oe.sm_m
          );
        }
        static MBF() {
          return Oe.sm_mbf || (Oe.sm_mbf = we.Bh(Oe.M())), Oe.sm_mbf;
        }
        toObject(e = !1) {
          return Oe.toObject(e, this);
        }
        static toObject(e, t) {
          return we.TA(Oe.M(), e, t);
        }
        static fromObject(e) {
          return we.aD(Oe.M(), e);
        }
        static deserializeBinary(e) {
          let t = new ve.BinaryReader(e),
            r = new Oe();
          return Oe.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return we.F(Oe.MBF(), e, t);
        }
        serializeBinary() {
          var e = new ve.BinaryWriter();
          return Oe.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          we.l2(Oe.M(), e, t);
        }
        serializeBase64String() {
          var e = new ve.BinaryWriter();
          return Oe.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCloud_ClientGetAppQuotaUsage_Response";
        }
      }
      class We extends Fe {
        constructor(e = null) {
          super(),
            We.prototype.file_name || we.aR(We.M()),
            Fe.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            We.sm_m ||
              (We.sm_m = {
                proto: We,
                fields: {
                  file_name: {
                    n: 1,
                    br: we.FE.readString,
                    bw: we.Xc.writeString,
                  },
                  sha_file: { n: 2, br: we.FE.readBytes, bw: we.Xc.writeBytes },
                  time_stamp: {
                    n: 3,
                    br: we.FE.readUint64String,
                    bw: we.Xc.writeUint64String,
                  },
                  raw_file_size: {
                    n: 4,
                    br: we.FE.readUint32,
                    bw: we.Xc.writeUint32,
                  },
                  persist_state: {
                    n: 5,
                    br: we.FE.readEnum,
                    bw: we.Xc.writeEnum,
                  },
                  platforms_to_sync: {
                    n: 6,
                    br: we.FE.readUint32,
                    bw: we.Xc.writeUint32,
                  },
                  path_prefix_index: {
                    n: 7,
                    br: we.FE.readUint32,
                    bw: we.Xc.writeUint32,
                  },
                  machine_name_index: {
                    n: 8,
                    br: we.FE.readUint32,
                    bw: we.Xc.writeUint32,
                  },
                },
              }),
            We.sm_m
          );
        }
        static MBF() {
          return We.sm_mbf || (We.sm_mbf = we.Bh(We.M())), We.sm_mbf;
        }
        toObject(e = !1) {
          return We.toObject(e, this);
        }
        static toObject(e, t) {
          return we.TA(We.M(), e, t);
        }
        static fromObject(e) {
          return we.aD(We.M(), e);
        }
        static deserializeBinary(e) {
          let t = new ve.BinaryReader(e),
            r = new We();
          return We.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return we.F(We.MBF(), e, t);
        }
        serializeBinary() {
          var e = new ve.BinaryWriter();
          return We.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          we.l2(We.M(), e, t);
        }
        serializeBase64String() {
          var e = new ve.BinaryWriter();
          return We.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCloud_AppFileInfo";
        }
      }
      class je extends Fe {
        constructor(e = null) {
          super(),
            je.prototype.current_change_number || we.aR(je.M()),
            Fe.initialize(this, e, 0, -1, [2, 4, 5], null);
        }
        static M() {
          return (
            je.sm_m ||
              (je.sm_m = {
                proto: je,
                fields: {
                  current_change_number: {
                    n: 1,
                    br: we.FE.readUint64String,
                    bw: we.Xc.writeUint64String,
                  },
                  files: { n: 2, c: We, r: !0, q: !0 },
                  is_only_delta: {
                    n: 3,
                    br: we.FE.readBool,
                    bw: we.Xc.writeBool,
                  },
                  path_prefixes: {
                    n: 4,
                    r: !0,
                    q: !0,
                    br: we.FE.readString,
                    bw: we.Xc.writeRepeatedString,
                  },
                  machine_names: {
                    n: 5,
                    r: !0,
                    q: !0,
                    br: we.FE.readString,
                    bw: we.Xc.writeRepeatedString,
                  },
                  app_buildid_hwm: {
                    n: 6,
                    br: we.FE.readUint64String,
                    bw: we.Xc.writeUint64String,
                  },
                },
              }),
            je.sm_m
          );
        }
        static MBF() {
          return je.sm_mbf || (je.sm_mbf = we.Bh(je.M())), je.sm_mbf;
        }
        toObject(e = !1) {
          return je.toObject(e, this);
        }
        static toObject(e, t) {
          return we.TA(je.M(), e, t);
        }
        static fromObject(e) {
          return we.aD(je.M(), e);
        }
        static deserializeBinary(e) {
          let t = new ve.BinaryReader(e),
            r = new je();
          return je.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return we.F(je.MBF(), e, t);
        }
        serializeBinary() {
          var e = new ve.BinaryWriter();
          return je.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          we.l2(je.M(), e, t);
        }
        serializeBase64String() {
          var e = new ve.BinaryWriter();
          return je.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCloud_GetAppFileChangelist_Response";
        }
      }
      class Xe extends Fe {
        constructor(e = null) {
          super(),
            Xe.prototype.url_host || we.aR(Xe.M()),
            Fe.initialize(this, e, 0, -1, [5], null);
        }
        static M() {
          return (
            Xe.sm_m ||
              (Xe.sm_m = {
                proto: Xe,
                fields: {
                  url_host: {
                    n: 1,
                    br: we.FE.readString,
                    bw: we.Xc.writeString,
                  },
                  url_path: {
                    n: 2,
                    br: we.FE.readString,
                    bw: we.Xc.writeString,
                  },
                  use_https: { n: 3, br: we.FE.readBool, bw: we.Xc.writeBool },
                  http_method: {
                    n: 4,
                    br: we.FE.readInt32,
                    bw: we.Xc.writeInt32,
                  },
                  request_headers: { n: 5, c: Ve, r: !0, q: !0 },
                  block_offset: {
                    n: 6,
                    br: we.FE.readUint64String,
                    bw: we.Xc.writeUint64String,
                  },
                  block_length: {
                    n: 7,
                    br: we.FE.readUint32,
                    bw: we.Xc.writeUint32,
                  },
                  explicit_body_data: {
                    n: 8,
                    br: we.FE.readBytes,
                    bw: we.Xc.writeBytes,
                  },
                  may_parallelize: {
                    n: 9,
                    br: we.FE.readBool,
                    bw: we.Xc.writeBool,
                  },
                },
              }),
            Xe.sm_m
          );
        }
        static MBF() {
          return Xe.sm_mbf || (Xe.sm_mbf = we.Bh(Xe.M())), Xe.sm_mbf;
        }
        toObject(e = !1) {
          return Xe.toObject(e, this);
        }
        static toObject(e, t) {
          return we.TA(Xe.M(), e, t);
        }
        static fromObject(e) {
          return we.aD(Xe.M(), e);
        }
        static deserializeBinary(e) {
          let t = new ve.BinaryReader(e),
            r = new Xe();
          return Xe.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return we.F(Xe.MBF(), e, t);
        }
        serializeBinary() {
          var e = new ve.BinaryWriter();
          return Xe.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          we.l2(Xe.M(), e, t);
        }
        serializeBase64String() {
          var e = new ve.BinaryWriter();
          return Xe.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "ClientCloudFileUploadBlockDetails";
        }
      }
      class Ve extends Fe {
        constructor(e = null) {
          super(),
            Ve.prototype.name || we.aR(Ve.M()),
            Fe.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            Ve.sm_m ||
              (Ve.sm_m = {
                proto: Ve,
                fields: {
                  name: { n: 1, br: we.FE.readString, bw: we.Xc.writeString },
                  value: { n: 2, br: we.FE.readString, bw: we.Xc.writeString },
                },
              }),
            Ve.sm_m
          );
        }
        static MBF() {
          return Ve.sm_mbf || (Ve.sm_mbf = we.Bh(Ve.M())), Ve.sm_mbf;
        }
        toObject(e = !1) {
          return Ve.toObject(e, this);
        }
        static toObject(e, t) {
          return we.TA(Ve.M(), e, t);
        }
        static fromObject(e) {
          return we.aD(Ve.M(), e);
        }
        static deserializeBinary(e) {
          let t = new ve.BinaryReader(e),
            r = new Ve();
          return Ve.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return we.F(Ve.MBF(), e, t);
        }
        serializeBinary() {
          var e = new ve.BinaryWriter();
          return Ve.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          we.l2(Ve.M(), e, t);
        }
        serializeBase64String() {
          var e = new ve.BinaryWriter();
          return Ve.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "ClientCloudFileUploadBlockDetails_HTTPHeaders";
        }
      }
      class Ze extends Fe {
        constructor(e = null) {
          super(),
            Ze.prototype.batch_id || we.aR(Ze.M()),
            Fe.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            Ze.sm_m ||
              (Ze.sm_m = {
                proto: Ze,
                fields: {
                  batch_id: {
                    n: 1,
                    br: we.FE.readUint64String,
                    bw: we.Xc.writeUint64String,
                  },
                  app_change_number: {
                    n: 4,
                    br: we.FE.readUint64String,
                    bw: we.Xc.writeUint64String,
                  },
                },
              }),
            Ze.sm_m
          );
        }
        static MBF() {
          return Ze.sm_mbf || (Ze.sm_mbf = we.Bh(Ze.M())), Ze.sm_mbf;
        }
        toObject(e = !1) {
          return Ze.toObject(e, this);
        }
        static toObject(e, t) {
          return we.TA(Ze.M(), e, t);
        }
        static fromObject(e) {
          return we.aD(Ze.M(), e);
        }
        static deserializeBinary(e) {
          let t = new ve.BinaryReader(e),
            r = new Ze();
          return Ze.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return we.F(Ze.MBF(), e, t);
        }
        serializeBinary() {
          var e = new ve.BinaryWriter();
          return Ze.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          we.l2(Ze.M(), e, t);
        }
        serializeBase64String() {
          var e = new ve.BinaryWriter();
          return Ze.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCloud_BeginAppUploadBatch_Response";
        }
      }
      class He extends Fe {
        constructor(e = null) {
          super(), Fe.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return He.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new He();
        }
        static deserializeBinary(e) {
          let t = new ve.BinaryReader(e),
            r = new He();
          return He.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new ve.BinaryWriter();
          return He.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new ve.BinaryWriter();
          return He.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCloud_CompleteAppUploadBatch_Response";
        }
      }
      class Qe extends Fe {
        constructor(e = null) {
          super(),
            Qe.prototype.appid || we.aR(Qe.M()),
            Fe.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            Qe.sm_m ||
              (Qe.sm_m = {
                proto: Qe,
                fields: {
                  appid: { n: 1, br: we.FE.readUint32, bw: we.Xc.writeUint32 },
                  app_change_number: {
                    n: 2,
                    br: we.FE.readUint64String,
                    bw: we.Xc.writeUint64String,
                  },
                },
              }),
            Qe.sm_m
          );
        }
        static MBF() {
          return Qe.sm_mbf || (Qe.sm_mbf = we.Bh(Qe.M())), Qe.sm_mbf;
        }
        toObject(e = !1) {
          return Qe.toObject(e, this);
        }
        static toObject(e, t) {
          return we.TA(Qe.M(), e, t);
        }
        static fromObject(e) {
          return we.aD(Qe.M(), e);
        }
        static deserializeBinary(e) {
          let t = new ve.BinaryReader(e),
            r = new Qe();
          return Qe.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return we.F(Qe.MBF(), e, t);
        }
        serializeBinary() {
          var e = new ve.BinaryWriter();
          return Qe.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          we.l2(Qe.M(), e, t);
        }
        serializeBase64String() {
          var e = new ve.BinaryWriter();
          return Qe.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCloud_AppCloudStateChange_Notification";
        }
      }
      class qe extends Fe {
        constructor(e = null) {
          super(),
            qe.prototype.encrypt_file || we.aR(qe.M()),
            Fe.initialize(this, e, 0, -1, [2], null);
        }
        static M() {
          return (
            qe.sm_m ||
              (qe.sm_m = {
                proto: qe,
                fields: {
                  encrypt_file: {
                    n: 1,
                    br: we.FE.readBool,
                    bw: we.Xc.writeBool,
                  },
                  block_requests: { n: 2, c: Xe, r: !0, q: !0 },
                },
              }),
            qe.sm_m
          );
        }
        static MBF() {
          return qe.sm_mbf || (qe.sm_mbf = we.Bh(qe.M())), qe.sm_mbf;
        }
        toObject(e = !1) {
          return qe.toObject(e, this);
        }
        static toObject(e, t) {
          return we.TA(qe.M(), e, t);
        }
        static fromObject(e) {
          return we.aD(qe.M(), e);
        }
        static deserializeBinary(e) {
          let t = new ve.BinaryReader(e),
            r = new qe();
          return qe.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return we.F(qe.MBF(), e, t);
        }
        serializeBinary() {
          var e = new ve.BinaryWriter();
          return qe.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          we.l2(qe.M(), e, t);
        }
        serializeBase64String() {
          var e = new ve.BinaryWriter();
          return qe.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCloud_ClientBeginFileUpload_Response";
        }
      }
      class Ye extends Fe {
        constructor(e = null) {
          super(),
            Ye.prototype.file_committed || we.aR(Ye.M()),
            Fe.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            Ye.sm_m ||
              (Ye.sm_m = {
                proto: Ye,
                fields: {
                  file_committed: {
                    n: 1,
                    br: we.FE.readBool,
                    bw: we.Xc.writeBool,
                  },
                },
              }),
            Ye.sm_m
          );
        }
        static MBF() {
          return Ye.sm_mbf || (Ye.sm_mbf = we.Bh(Ye.M())), Ye.sm_mbf;
        }
        toObject(e = !1) {
          return Ye.toObject(e, this);
        }
        static toObject(e, t) {
          return we.TA(Ye.M(), e, t);
        }
        static fromObject(e) {
          return we.aD(Ye.M(), e);
        }
        static deserializeBinary(e) {
          let t = new ve.BinaryReader(e),
            r = new Ye();
          return Ye.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return we.F(Ye.MBF(), e, t);
        }
        serializeBinary() {
          var e = new ve.BinaryWriter();
          return Ye.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          we.l2(Ye.M(), e, t);
        }
        serializeBase64String() {
          var e = new ve.BinaryWriter();
          return Ye.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCloud_ClientCommitFileUpload_Response";
        }
      }
      class $e extends Fe {
        constructor(e = null) {
          super(),
            $e.prototype.appid || we.aR($e.M()),
            Fe.initialize(this, e, 0, -1, [10], null);
        }
        static M() {
          return (
            $e.sm_m ||
              ($e.sm_m = {
                proto: $e,
                fields: {
                  appid: { n: 1, br: we.FE.readUint32, bw: we.Xc.writeUint32 },
                  file_size: {
                    n: 2,
                    br: we.FE.readUint32,
                    bw: we.Xc.writeUint32,
                  },
                  raw_file_size: {
                    n: 3,
                    br: we.FE.readUint32,
                    bw: we.Xc.writeUint32,
                  },
                  sha_file: { n: 4, br: we.FE.readBytes, bw: we.Xc.writeBytes },
                  time_stamp: {
                    n: 5,
                    br: we.FE.readUint64String,
                    bw: we.Xc.writeUint64String,
                  },
                  is_explicit_delete: {
                    n: 6,
                    br: we.FE.readBool,
                    bw: we.Xc.writeBool,
                  },
                  url_host: {
                    n: 7,
                    br: we.FE.readString,
                    bw: we.Xc.writeString,
                  },
                  url_path: {
                    n: 8,
                    br: we.FE.readString,
                    bw: we.Xc.writeString,
                  },
                  use_https: { n: 9, br: we.FE.readBool, bw: we.Xc.writeBool },
                  request_headers: { n: 10, c: Ke, r: !0, q: !0 },
                  encrypted: { n: 11, br: we.FE.readBool, bw: we.Xc.writeBool },
                },
              }),
            $e.sm_m
          );
        }
        static MBF() {
          return $e.sm_mbf || ($e.sm_mbf = we.Bh($e.M())), $e.sm_mbf;
        }
        toObject(e = !1) {
          return $e.toObject(e, this);
        }
        static toObject(e, t) {
          return we.TA($e.M(), e, t);
        }
        static fromObject(e) {
          return we.aD($e.M(), e);
        }
        static deserializeBinary(e) {
          let t = new ve.BinaryReader(e),
            r = new $e();
          return $e.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return we.F($e.MBF(), e, t);
        }
        serializeBinary() {
          var e = new ve.BinaryWriter();
          return $e.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          we.l2($e.M(), e, t);
        }
        serializeBase64String() {
          var e = new ve.BinaryWriter();
          return $e.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCloud_ClientFileDownload_Response";
        }
      }
      class Ke extends Fe {
        constructor(e = null) {
          super(),
            Ke.prototype.name || we.aR(Ke.M()),
            Fe.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            Ke.sm_m ||
              (Ke.sm_m = {
                proto: Ke,
                fields: {
                  name: { n: 1, br: we.FE.readString, bw: we.Xc.writeString },
                  value: { n: 2, br: we.FE.readString, bw: we.Xc.writeString },
                },
              }),
            Ke.sm_m
          );
        }
        static MBF() {
          return Ke.sm_mbf || (Ke.sm_mbf = we.Bh(Ke.M())), Ke.sm_mbf;
        }
        toObject(e = !1) {
          return Ke.toObject(e, this);
        }
        static toObject(e, t) {
          return we.TA(Ke.M(), e, t);
        }
        static fromObject(e) {
          return we.aD(Ke.M(), e);
        }
        static deserializeBinary(e) {
          let t = new ve.BinaryReader(e),
            r = new Ke();
          return Ke.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return we.F(Ke.MBF(), e, t);
        }
        serializeBinary() {
          var e = new ve.BinaryWriter();
          return Ke.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          we.l2(Ke.M(), e, t);
        }
        serializeBase64String() {
          var e = new ve.BinaryWriter();
          return Ke.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCloud_ClientFileDownload_Response_HTTPHeaders";
        }
      }
      class Je extends Fe {
        constructor(e = null) {
          super(), Fe.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return Je.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new Je();
        }
        static deserializeBinary(e) {
          let t = new ve.BinaryReader(e),
            r = new Je();
          return Je.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new ve.BinaryWriter();
          return Je.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new ve.BinaryWriter();
          return Je.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCloud_ClientDeleteFile_Response";
        }
      }
      class et extends Fe {
        constructor(e = null) {
          super(),
            et.prototype.apps || we.aR(et.M()),
            Fe.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            et.sm_m ||
              (et.sm_m = {
                proto: et,
                fields: { apps: { n: 1, c: tt, r: !0, q: !0 } },
              }),
            et.sm_m
          );
        }
        static MBF() {
          return et.sm_mbf || (et.sm_mbf = we.Bh(et.M())), et.sm_mbf;
        }
        toObject(e = !1) {
          return et.toObject(e, this);
        }
        static toObject(e, t) {
          return we.TA(et.M(), e, t);
        }
        static fromObject(e) {
          return we.aD(et.M(), e);
        }
        static deserializeBinary(e) {
          let t = new ve.BinaryReader(e),
            r = new et();
          return et.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return we.F(et.MBF(), e, t);
        }
        serializeBinary() {
          var e = new ve.BinaryWriter();
          return et.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          we.l2(et.M(), e, t);
        }
        serializeBase64String() {
          var e = new ve.BinaryWriter();
          return et.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCloud_EnumerateUserApps_Response";
        }
      }
      class tt extends Fe {
        constructor(e = null) {
          super(),
            tt.prototype.appid || we.aR(tt.M()),
            Fe.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            tt.sm_m ||
              (tt.sm_m = {
                proto: tt,
                fields: {
                  appid: { n: 1, br: we.FE.readUint32, bw: we.Xc.writeUint32 },
                  totalcount: {
                    n: 2,
                    br: we.FE.readInt32,
                    bw: we.Xc.writeInt32,
                  },
                  totalsize: {
                    n: 3,
                    br: we.FE.readInt64String,
                    bw: we.Xc.writeInt64String,
                  },
                },
              }),
            tt.sm_m
          );
        }
        static MBF() {
          return tt.sm_mbf || (tt.sm_mbf = we.Bh(tt.M())), tt.sm_mbf;
        }
        toObject(e = !1) {
          return tt.toObject(e, this);
        }
        static toObject(e, t) {
          return we.TA(tt.M(), e, t);
        }
        static fromObject(e) {
          return we.aD(tt.M(), e);
        }
        static deserializeBinary(e) {
          let t = new ve.BinaryReader(e),
            r = new tt();
          return tt.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return we.F(tt.MBF(), e, t);
        }
        serializeBinary() {
          var e = new ve.BinaryWriter();
          return tt.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          we.l2(tt.M(), e, t);
        }
        serializeBase64String() {
          var e = new ve.BinaryWriter();
          return tt.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCloud_EnumerateUserApps_Response_Apps";
        }
      }
      class rt extends Fe {
        constructor(e = null) {
          super(), Fe.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return rt.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new rt();
        }
        static deserializeBinary(e) {
          let t = new ve.BinaryReader(e),
            r = new rt();
          return rt.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new ve.BinaryWriter();
          return rt.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new ve.BinaryWriter();
          return rt.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCloud_AppSessionSuspend_Response";
        }
      }
      class it extends Fe {
        constructor(e = null) {
          super(), Fe.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return it.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new it();
        }
        static deserializeBinary(e) {
          let t = new ve.BinaryReader(e),
            r = new it();
          return it.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new ve.BinaryWriter();
          return it.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new ve.BinaryWriter();
          return it.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCloud_AppSessionResume_Response";
        }
      }
      class nt extends Fe {
        constructor(e = null) {
          super(),
            nt.prototype.request_id || we.aR(nt.M()),
            Fe.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            nt.sm_m ||
              (nt.sm_m = {
                proto: nt,
                fields: {
                  request_id: {
                    n: 1,
                    br: we.FE.readUint64String,
                    bw: we.Xc.writeUint64String,
                  },
                },
              }),
            nt.sm_m
          );
        }
        static MBF() {
          return nt.sm_mbf || (nt.sm_mbf = we.Bh(nt.M())), nt.sm_mbf;
        }
        toObject(e = !1) {
          return nt.toObject(e, this);
        }
        static toObject(e, t) {
          return we.TA(nt.M(), e, t);
        }
        static fromObject(e) {
          return we.aD(nt.M(), e);
        }
        static deserializeBinary(e) {
          let t = new ve.BinaryReader(e),
            r = new nt();
          return nt.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return we.F(nt.MBF(), e, t);
        }
        serializeBinary() {
          var e = new ve.BinaryWriter();
          return nt.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          we.l2(nt.M(), e, t);
        }
        serializeBase64String() {
          var e = new ve.BinaryWriter();
          return nt.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCloud_ClientLogUploadRequest_Notification";
        }
      }
      var at, st;
      !(function (e) {
        (e.ClientLogUploadCheck = function (e, t) {
          return e.SendNotification("Cloud.ClientLogUploadCheck#1", t, {
            ePrivilege: 1,
          });
        }),
          (e.ClientLogUploadComplete = function (e, t) {
            return e.SendNotification("Cloud.ClientLogUploadComplete#1", t, {
              ePrivilege: 1,
            });
          }),
          (e.GetUploadServerInfo = function (e, t) {
            return e.SendMsg("Cloud.GetUploadServerInfo#1", t, Me, {
              bConstMethod: !0,
              ePrivilege: 1,
            });
          }),
          (e.BeginHTTPUpload = function (e, t) {
            return e.SendMsg("Cloud.BeginHTTPUpload#1", t, Ue, {
              ePrivilege: 1,
            });
          }),
          (e.CommitHTTPUpload = function (e, t) {
            return e.SendMsg("Cloud.CommitHTTPUpload#1", t, Ae, {
              ePrivilege: 1,
            });
          }),
          (e.BeginUGCUpload = function (e, t) {
            return e.SendMsg("Cloud.BeginUGCUpload#1", t, ze, {
              ePrivilege: 1,
            });
          }),
          (e.CommitUGCUpload = function (e, t) {
            return e.SendMsg("Cloud.CommitUGCUpload#1", t, Te, {
              ePrivilege: 1,
            });
          }),
          (e.GetFileDetails = function (e, t) {
            return e.SendMsg("Cloud.GetFileDetails#1", t, Le, {
              bConstMethod: !0,
              ePrivilege: 2,
              eWebAPIKeyRequirement: 2,
            });
          }),
          (e.EnumerateUserFiles = function (e, t) {
            return e.SendMsg("Cloud.EnumerateUserFiles#1", t, xe, {
              bConstMethod: !0,
              ePrivilege: 1,
            });
          }),
          (e.Delete = function (e, t) {
            return e.SendMsg("Cloud.Delete#1", t, Ge, { ePrivilege: 1 });
          }),
          (e.GetClientEncryptionKey = function (e, t) {
            return e.SendMsg("Cloud.GetClientEncryptionKey#1", t, Pe, {
              ePrivilege: 1,
            });
          }),
          (e.CDNReport = function (e, t) {
            return e.SendNotification("Cloud.CDNReport#1", t, {
              ePrivilege: 1,
            });
          }),
          (e.ExternalStorageTransferReport = function (e, t) {
            return e.SendNotification(
              "Cloud.ExternalStorageTransferReport#1",
              t,
              { ePrivilege: 1 }
            );
          }),
          (e.BeginAppUploadBatch = function (e, t) {
            return e.SendMsg("Cloud.BeginAppUploadBatch#1", t, Ze, {
              ePrivilege: 1,
            });
          }),
          (e.CompleteAppUploadBatch = function (e, t) {
            return e.SendNotification("Cloud.CompleteAppUploadBatch#1", t, {
              ePrivilege: 1,
            });
          }),
          (e.CompleteAppUploadBatchBlocking = function (e, t) {
            return e.SendMsg("Cloud.CompleteAppUploadBatchBlocking#1", t, He, {
              ePrivilege: 1,
            });
          }),
          (e.ClientBeginFileUpload = function (e, t) {
            return e.SendMsg("Cloud.ClientBeginFileUpload#1", t, qe, {
              ePrivilege: 1,
            });
          }),
          (e.ClientCommitFileUpload = function (e, t) {
            return e.SendMsg("Cloud.ClientCommitFileUpload#1", t, Ye, {
              ePrivilege: 1,
            });
          }),
          (e.ClientFileDownload = function (e, t) {
            return e.SendMsg("Cloud.ClientFileDownload#1", t, $e, {
              ePrivilege: 1,
            });
          }),
          (e.ClientDeleteFile = function (e, t) {
            return e.SendMsg("Cloud.ClientDeleteFile#1", t, Je, {
              ePrivilege: 1,
            });
          }),
          (e.ClientConflictResolution = function (e, t) {
            return e.SendNotification("Cloud.ClientConflictResolution#1", t, {
              ePrivilege: 1,
            });
          }),
          (e.EnumerateUserApps = function (e, t) {
            return e.SendMsg("Cloud.EnumerateUserApps#1", t, et, {
              bConstMethod: !0,
              ePrivilege: 1,
            });
          }),
          (e.GetAppFileChangelist = function (e, t) {
            return e.SendMsg("Cloud.GetAppFileChangelist#1", t, je, {
              bConstMethod: !0,
              ePrivilege: 1,
            });
          }),
          (e.SuspendAppSession = function (e, t) {
            return e.SendMsg("Cloud.SuspendAppSession#1", t, rt, {
              ePrivilege: 1,
            });
          }),
          (e.ResumeAppSession = function (e, t) {
            return e.SendMsg("Cloud.ResumeAppSession#1", t, it, {
              ePrivilege: 1,
            });
          }),
          (e.SignalAppLaunchIntent = function (e, t) {
            return e.SendMsg("Cloud.SignalAppLaunchIntent#1", t, ke, {
              ePrivilege: 1,
            });
          }),
          (e.SignalAppExitSyncDone = function (e, t) {
            return e.SendNotification("Cloud.SignalAppExitSyncDone#1", t, {
              ePrivilege: 1,
            });
          }),
          (e.ClientGetAppQuotaUsage = function (e, t) {
            return e.SendMsg("Cloud.ClientGetAppQuotaUsage#1", t, Oe, {
              bConstMethod: !0,
              ePrivilege: 1,
            });
          });
      })(at || (at = {})),
        (function (e) {
          (e.NotifyAppStateChangeHandler = {
            name: "CloudClient.NotifyAppStateChange#1",
            request: Qe,
          }),
            (e.ClientLogUploadRequestHandler = {
              name: "CloudClient.ClientLogUploadRequest#1",
              request: nt,
            });
        })(st || (st = {}));
      var ot = r(32338);
      class lt {
        constructor() {
          (this.timestamp = 0),
            (this.imageWidth = 0),
            (this.imageHeight = 0),
            (this.eUploadState = 0),
            (this.uploadProgress = 0);
        }
      }
      (0, i.gn)([w.LO], lt.prototype, "file", void 0),
        (0, i.gn)([w.LO], lt.prototype, "dataURL", void 0),
        (0, i.gn)([w.LO], lt.prototype, "imageWidth", void 0),
        (0, i.gn)([w.LO], lt.prototype, "imageHeight", void 0),
        (0, i.gn)([w.LO], lt.prototype, "eUploadState", void 0),
        (0, i.gn)([w.LO], lt.prototype, "uploadProgress", void 0),
        (0, i.gn)([w.LO], lt.prototype, "strErrorDescription", void 0);
      class ct {
        constructor(e) {
          (this.m_fileUploadProps = new lt()), (this.m_Callbacks = e);
        }
        get file_upload_props() {
          return this.m_fileUploadProps;
        }
        get file_upload_data_url() {
          return this.m_fileUploadProps.dataURL;
        }
        get file() {
          return this.m_fileUploadProps.file;
        }
        LogFileUploadMessage(e) {
          this.m_Callbacks.LogFileUploadMessage &&
            this.m_Callbacks.LogFileUploadMessage(e);
        }
        SetUploadFileError(e, t) {
          (this.m_fileUploadProps.eUploadState = e),
            (this.m_fileUploadProps.strErrorDescription = t),
            (this.m_fileUploadProps.displayFileName = null);
        }
        SetImageFileToUpload(e, t = mt) {
          return (0, i.mG)(this, void 0, void 0, function* () {
            if (!e) return void this.SetFileToUpload(null);
            if (e.size > 1024 * this.m_Callbacks.GetMaxFileSizeMB() * 1024)
              return void (10 == this.m_Callbacks.GetMaxFileSizeMB()
                ? this.SetUploadFileError(
                    4,
                    (0, C.Xx)("#Chat_Settings_Error_ChatFileTooLarge", e.name)
                  )
                : this.SetUploadFileError(
                    4,
                    (0, C.Xx)(
                      "#Chat_Settings_Error_ChatFileTooLarge_dynamic",
                      e.name,
                      this.m_Callbacks.GetMaxFileSizeMB()
                    )
                  ));
            let r = e.name.split(".").pop().toLowerCase();
            if (
              -1 ==
              [
                "jpg",
                "jpeg",
                "png",
                "gif",
                "webm",
                "mpg",
                "mp4",
                "mpeg",
                "ogv",
              ].indexOf(r)
            )
              return void this.SetUploadFileError(
                5,
                (0, C.Xx)(
                  "#Chat_Settings_Error_ChatFileTypeNotSupported",
                  e.name
                )
              );
            const i = yield t(e);
            this.SetFileToUpload(i.file),
              (this.m_fileUploadProps.imageHeight = i.height),
              (this.m_fileUploadProps.imageWidth = i.width);
          });
        }
        SetFileToUpload(e) {
          if (
            (console.log("SetFileToUpload()"),
            (this.m_fileUploadProps.file = e),
            (this.m_fileUploadProps.dataURL = null),
            (this.m_fileUploadProps.hmac = null),
            (this.m_fileUploadProps.sha1 = null),
            (this.m_fileUploadProps.imageWidth = 0),
            (this.m_fileUploadProps.imageHeight = 0),
            !e)
          )
            return void (this.m_fileUploadProps.eUploadState = 0);
          this.m_fileUploadProps.eUploadState = 1;
          let t = "";
          for (; t.length < 40; )
            t += Math.floor(16 * Math.random()).toString(16);
          let r = "";
          try {
            r = URL.createObjectURL(e);
          } catch (e) {
            console.error(`Failed to created object URL from file: ${e}`);
          }
          (this.m_fileUploadProps.dataURL = r),
            (this.m_fileUploadProps.displayFileName = e.name),
            (this.m_fileUploadProps.uploadFileName =
              window.performance.now() + "_" + e.name),
            (this.m_fileUploadProps.sha1 = t),
            (this.m_fileUploadProps.hmac = ""),
            (this.m_fileUploadProps.timestamp = 0);
        }
        RetryFileUpload() {
          return (0, i.mG)(this, void 0, void 0, function* () {
            return this.BeginFileUpload(this.m_fileUploadProps.additionalProps);
          });
        }
        BeginFileUpload(e) {
          return (0, i.mG)(this, void 0, void 0, function* () {
            let t = this.m_fileUploadProps.file;
            if (!t)
              throw (
                ((0, ot.X)(
                  !1,
                  "Must SetImageFileToUpload before calling BeginFileUpload"
                ),
                new Error("Invalid State"))
              );
            (this.m_fileUploadProps.eUploadState = 2),
              (this.m_fileUploadProps.uploadProgress = 0),
              (this.m_fileUploadProps.additionalProps = e);
            let r = new FormData();
            r.append("sessionid", v.De.SESSIONID),
              r.append("l", v.De.LANGUAGE),
              r.append("file_size", t.size.toString()),
              r.append("file_name", this.m_fileUploadProps.uploadFileName),
              r.append("file_sha", this.m_fileUploadProps.sha1),
              r.append(
                "file_image_width",
                this.m_fileUploadProps.imageWidth.toString()
              ),
              r.append(
                "file_image_height",
                this.m_fileUploadProps.imageHeight.toString()
              ),
              r.append("file_type", t.type),
              this.m_Callbacks.PopulateBeginFileUploadFormData &&
                this.m_Callbacks.PopulateBeginFileUploadFormData(
                  r,
                  this.file_upload_props.additionalProps
                );
            try {
              let e = yield S().post(
                this.m_Callbacks.GetBeginFileUploadURL(),
                r,
                { params: { l: v.De.LANGUAGE } }
              );
              return (
                (this.m_fileUploadProps.timestamp = e.data.timestamp),
                (this.m_fileUploadProps.hmac = e.data.hmac),
                this.DoFileUpload(e.data.result)
              );
            } catch (e) {
              let t = null;
              throw (
                ((0, w.z)(() => {
                  if (
                    ((this.m_fileUploadProps.eUploadState = 3),
                    this.LogFileUploadMessage(e.response),
                    e.response)
                  ) {
                    let r = e.response.data;
                    e.response.status, r && r.success;
                    t = r.message
                      ? r.message
                      : (0, C.Xx)("#Chat_Settings_Error_ServerError");
                  } else t = (0, C.Xx)("#ConnectionTrouble_FailedToConnect");
                  this.m_fileUploadProps.strErrorDescription = (0, C.Xx)(
                    "#Chat_Upload_ErrorStart",
                    t
                  );
                }),
                t)
              );
            }
          });
        }
        DoFileUpload(e) {
          return (0, i.mG)(this, void 0, void 0, function* () {
            let t = this.m_fileUploadProps.file,
              r = e.use_https ? "https://" : "http://";
            r += e.url_host + e.url_path;
            let i = {
              onUploadProgress: (e) => {
                let t = (e.loaded / e.total) * 100;
                t > this.m_fileUploadProps.uploadProgress &&
                  (0, w.z)(() => {
                    this.m_fileUploadProps.uploadProgress = t;
                  });
              },
              headers: {},
              transformRequest: [(e) => e],
            };
            for (let t = 0; t < e.request_headers.length; ++t) {
              let r = e.request_headers[t];
              "Content-Length" != r.name &&
                "Host" != r.name &&
                (i.headers[r.name] = r.value);
            }
            try {
              return yield S().put(r, t, i), this.CommitFileUpload(!0, e.ugcid);
            } catch (t) {
              throw (
                (this.LogFileUploadMessage(t.response),
                (0, w.z)(() => {
                  (this.m_fileUploadProps.strErrorDescription = (0, C.Xx)(
                    "#Chat_Upload_ErrorCloud"
                  )),
                    (this.m_fileUploadProps.eUploadState = 3),
                    (this.m_fileUploadProps.uploadProgress = 0);
                }),
                this.CommitFileUpload(!1, e.ugcid),
                this.m_fileUploadProps.strErrorDescription)
              );
            }
          });
        }
        CommitFileUpload(e, t) {
          return (0, i.mG)(this, void 0, void 0, function* () {
            let r = this.m_fileUploadProps.file,
              i = this.m_fileUploadProps.sha1,
              n = new FormData();
            n.append("sessionid", v.De.SESSIONID),
              n.append("l", v.De.LANGUAGE),
              n.append("file_name", this.m_fileUploadProps.uploadFileName),
              n.append("file_sha", i),
              n.append("success", e ? "1" : "0"),
              n.append("ugcid", t),
              n.append("file_type", r.type),
              n.append(
                "file_image_width",
                this.m_fileUploadProps.imageWidth.toString()
              ),
              n.append(
                "file_image_height",
                this.m_fileUploadProps.imageHeight.toString()
              ),
              n.append(
                "timestamp",
                this.m_fileUploadProps.timestamp.toString()
              ),
              n.append("hmac", this.m_fileUploadProps.hmac),
              this.m_Callbacks.PopulateCommitFileUploadFormData(
                n,
                this.file_upload_props.additionalProps
              );
            try {
              let t = yield S().post(
                this.m_Callbacks.GetCommitFileUploadURL(),
                n
              );
              return (
                e
                  ? ((this.m_fileUploadProps.uploadProgress = 0),
                    (this.m_fileUploadProps.eUploadState = 6))
                  : (this.m_fileUploadProps.eUploadState = 3),
                t
              );
            } catch (t) {
              if (!e) return null;
              let r = null;
              throw (
                ((0, w.z)(() => {
                  if (
                    (this.LogFileUploadMessage(t),
                    (this.m_fileUploadProps.uploadProgress = 0),
                    (this.m_fileUploadProps.eUploadState = 3),
                    t.response)
                  ) {
                    let e = t.response.data;
                    t.response.status, e && e.success;
                    r = e.message
                      ? e.message
                      : (0, C.Xx)("#Chat_Settings_Error_ServerError");
                  } else r = (0, C.Xx)("#ConnectionTrouble_FailedToConnect");
                  this.m_fileUploadProps.strErrorDescription = `Failed to commit upload: ${r}`;
                }),
                r)
              );
            }
          });
        }
        ClearFileUploadError() {
          (3 != this.m_fileUploadProps.eUploadState &&
            4 != this.m_fileUploadProps.eUploadState &&
            5 != this.m_fileUploadProps.eUploadState) ||
            this.Reset();
        }
        Reset() {
          this.SetFileToUpload(null);
        }
      }
      function mt(e) {
        return new Promise((t) => {
          let r = new FileReader();
          (r.onload = () => {
            let i = e,
              n = (function (e) {
                let t = new DataView(e),
                  r = 0,
                  i = 0,
                  n = [],
                  a = 0;
                if (65496 == t.getUint16(r)) {
                  r += 2;
                  let s = t.getUint16(r);
                  for (r += 2; r < t.byteLength && r < 131072; ) {
                    if (65505 == s)
                      (n[a] = { recess: i, offset: r - 2 }),
                        (i = r + t.getUint16(r)),
                        a++;
                    else if (65498 == s) break;
                    (r += t.getUint16(r)), (s = t.getUint16(r)), (r += 2);
                  }
                  let o = e.byteLength - i;
                  if (
                    (n.forEach((e) => {
                      o += e.offset - e.recess;
                    }),
                    o === e.byteLength)
                  )
                    return e;
                  const l = new Uint8Array(o);
                  if (n.length > 0) {
                    let t = 0;
                    n.forEach((r) => {
                      let i = r.offset - r.recess;
                      l.set(new Uint8Array(e.slice(r.recess, r.offset)), t),
                        (t += i);
                    }),
                      l.set(new Uint8Array(e.slice(i)), t);
                  }
                  return l.buffer;
                }
                return e;
              })(r.result),
              a = new Blob([n], { type: e.type });
            if (a) {
              let t = a;
              (t.lastModifiedDate = new Date(e.lastModified)),
                (t.name = e.name),
                (i = t);
            }
            if (0 == e.type.indexOf("image")) {
              let r = new Image();
              (r.src = URL.createObjectURL(e)),
                (r.onload = (e) => {
                  t({ file: i, width: r.width, height: r.height });
                });
            } else t({ file: i, width: 0, height: 0 });
          }),
            r.readAsArrayBuffer(e);
        });
      }
      (0, i.gn)([w.aD], ct.prototype, "SetUploadFileError", null),
        (0, i.gn)([w.aD], ct.prototype, "SetImageFileToUpload", null),
        (0, i.gn)([w.aD], ct.prototype, "SetFileToUpload", null),
        (0, i.gn)([w.aD], ct.prototype, "RetryFileUpload", null),
        (0, i.gn)([w.aD], ct.prototype, "BeginFileUpload", null),
        (0, i.gn)([w.aD], ct.prototype, "DoFileUpload", null),
        (0, i.gn)([w.aD], ct.prototype, "CommitFileUpload", null),
        (0, i.gn)([w.aD], ct.prototype, "ClearFileUploadError", null),
        (0, i.gn)([w.aD], ct.prototype, "Reset", null);
      var dt = r(29818),
        ut = r(23708),
        pt = r(57255),
        gt = r(83878),
        ht = r(43540),
        _t = r(19143),
        ft = r.n(_t);
      const yt = (e) => {
        const [t, r] = (0, n.useState)(!0),
          [a, s] = (0, n.useState)(null);
        if (
          ((0, n.useEffect)(() => {
            if (0 == e.appid || 0 == e.trailerBaseID)
              return void s((0, C.Xx)("#TrailerPlayer_ID_NotProvided"));
            (0, i.mG)(void 0, void 0, void 0, function* () {
              yield N.Z.Get().QueueAppRequest(e.appid, {
                include_trailers: !0,
              }),
                N.Z.Get().BHasApp(e.appid)
                  ? (N.Z.Get()
                      .GetApp(e.appid)
                      .GetAllTrailers()
                      .GetTrailerByID(e.trailerBaseID) ||
                      (console.error(
                        "Trailer " +
                          e.trailerBaseID +
                          " doesn't existed within appid " +
                          e.appid
                      ),
                      s(
                        (0, C.Xx)(
                          "#TrailerPlayer_CouldNotLoad",
                          e.appid,
                          e.trailerBaseID
                        )
                      )),
                    r(!1))
                  : s(
                      (0, C.Xx)(
                        "#TrailerPlayer_CouldNotLoad",
                        e.appid,
                        e.trailerBaseID
                      )
                    );
            });
          }, [e.appid, e.trailerBaseID]),
          a)
        )
          return e.bIsPreviewMode
            ? n.createElement("div", { className: ft().ErrorDiv }, a)
            : null;
        if (t)
          return n.createElement(E.V, {
            string: (0, C.Xx)("#Loading"),
            size: "small",
          });
        const o = N.Z.Get()
            .GetApp(e.appid)
            .GetAllTrailers()
            .GetTrailerByID(e.trailerBaseID),
          l = o.GetTrailerMax(),
          c = {
            sPoster: o.GetScreenshot(),
            rgVideoSources: [
              { sURL: l.strWebMURL, sFormat: "video/webm" },
              { sURL: l.strMP4URL, sFormat: "video/mp4" },
            ],
          };
        return n.createElement(ht.Y, {
          bControls: !0,
          bAutoPlay: !1,
          bLoop: !1,
          video: c,
        });
      };
      var Bt = r(91753),
        Ct = r(4083),
        bt = (r(87487), r(22840));
      const St = n.lazy(() =>
          Promise.all([r.e(5119), r.e(2449), r.e(2832), r.e(4601)]).then(
            r.bind(r, 75467)
          )
        ),
        vt = (e) => {
          const t = (0, n.useRef)(null),
            [r, a] = (0, n.useState)(Ct.D.Get().GetVODForAppID(e.appid)),
            [s, o] = (0, n.useState)(
              !Boolean(Ct.D.Get().GetVODForAppID(e.appid))
            );
          return (
            (0, n.useEffect)(
              () => () => t.current && t.current("VODPlayer: unmounting")
            ),
            (0, n.useEffect)(() => {
              let n = r;
              if (
                (r &&
                  r.appid != e.appid &&
                  (n = Ct.D.Get().GetVODForAppID(e.appid)),
                !n)
              ) {
                const r = () =>
                  (0, i.mG)(void 0, void 0, void 0, function* () {
                    t.current && t.current();
                    const r = S().CancelToken.source();
                    (t.current = r.cancel),
                      (n = yield Ct.D.Get().LoadVODForAppID(e.appid)),
                      r.token.reason || a(n),
                      o(!1);
                  });
                o(!0), r();
              }
              r != n && a(n);
            }, [e.appid, r]),
            !r && e.bPreviewMode
              ? n.createElement(
                  "div",
                  null,
                  (0, C.Xx)(
                    s ? "#VODPlayer_Loading" : "#VODPlayer_ErrorLoading",
                    e.appid
                  )
                )
              : n.createElement(
                  "div",
                  { className: Bt.BroadcastCtn },
                  n.createElement(
                    bt.SV,
                    null,
                    n.createElement(
                      n.Suspense,
                      { fallback: n.createElement("div", null) },
                      n.createElement(St, {
                        nAppIDVOD: e.appid,
                        watchLocation: 9,
                        bStartPaused: !0,
                      })
                    )
                  )
                )
          );
        };
      var wt = r(90043),
        Et = r(72745),
        Rt = r(81052),
        Ft = r(35177),
        It = r(45647);
      function Mt(e) {
        const t = (0, v.id)(),
          r = (0, Ft.Zh)(Ft.H_),
          i = "true" === String((0, o.im)(e.args, "autoadvance")).toLowerCase();
        return n.createElement(
          It.l,
          {
            hideArrows: !r,
            hidePips: t,
            visibleElements: 1,
            useTestScrollbar: !1,
            bLazyRenderChildren: !0,
            screenIsWide: r,
            bAutoAdvance: i,
          },
          e.children
        );
      }
      var Ut = r(49194),
        Dt = r(59665);
      function At(e) {
        const { fileUploadManager: t } = e,
          r = (0, n.useRef)();
        return n.createElement(
          "div",
          { className: Dt.Ctn },
          n.createElement("input", {
            type: "file",
            accept: ".jpg,.jpeg,.png,.gif,.webm,.mpg,.mpeg,.ogv,.mp4",
            style: { display: "none" },
            name: "fileupload",
            ref: r,
            onChange: (e) => {
              var r, i;
              (null ===
                (i =
                  null === (r = e.currentTarget) || void 0 === r
                    ? void 0
                    : r.files) || void 0 === i
                ? void 0
                : i.length) > 0 &&
                (t.SetImageFileToUpload(e.currentTarget.files[0]),
                (e.currentTarget.value = ""));
            },
          }),
          n.createElement(
            Ut.wl,
            {
              type: "button",
              title: (0, C.Xx)("#Button_Upload"),
              onOKActionDescription: (0, C.Xx)("#Button_Upload"),
              onClick: () => r.current.click(),
            },
            n.createElement(M.pkz, null)
          )
        );
      }
      var zt = r(25125),
        Nt = r(29005);
      function Tt(e) {
        const { fileUploadManager: t } = e,
          r = (0, zt.SZ)(() => t.file_upload_props.eUploadState);
        return 1 == r
          ? n.createElement(Lt, { fileUploadManager: t })
          : 3 == r || 5 == r || 4 == r
          ? n.createElement(Gt, { fileUploadManager: t })
          : 0 != r
          ? n.createElement(xt, { fileUploadManager: t })
          : null;
      }
      function Lt(e) {
        const { fileUploadManager: t } = e,
          r = t.file;
        return n.createElement(
          "div",
          { className: Nt.UploadPreviewContainer },
          Boolean(-1 != r.type.indexOf("image")) &&
            n.createElement("img", {
              className: Nt.UploadPreview,
              src: t.file_upload_data_url,
            }),
          Boolean(-1 != r.type.indexOf("video")) &&
            n.createElement(M.nkn, null),
          n.createElement(
            "div",
            { className: Nt.FileUploadFileName },
            "'",
            r.name,
            "'"
          ),
          n.createElement(
            "div",
            { className: Nt.FileUploadCancel, onClick: () => t.Reset() },
            n.createElement(M.pVO, null)
          ),
          n.createElement(
            pt.KM,
            {
              className: Nt.FileUploadBtn,
              onClick: () =>
                (0, i.mG)(this, void 0, void 0, function* () {
                  yield t.BeginFileUpload(), t.Reset();
                }),
            },
            (0, C.Xx)("#Button_Upload")
          )
        );
      }
      function xt(e) {
        const { fileUploadManager: t } = e,
          [r, i, a] = (0, zt.SZ)(() => [
            t.file_upload_props.file,
            t.file_upload_props.displayFileName,
            t.file_upload_props.uploadProgress,
          ]),
          s = r ? (0, C.Xx)("#Uploading_Item", i) : "",
          o = { width: a + "%" };
        return n.createElement(
          "div",
          { className: Nt.FileUploadProgressContainer },
          n.createElement("div", { className: Nt.FileUploadProgressName }, s),
          n.createElement(
            "div",
            {
              className: (0, U.Z)(
                Nt.FileUploadProgressBarContainer,
                "DialogProgressBar_ProgressBarContainer"
              ),
            },
            n.createElement("div", {
              className: "DialogProgressBar_Value",
              style: o,
            })
          )
        );
      }
      function Gt(e) {
        const { fileUploadManager: t } = e,
          [r, a, s] = (0, zt.SZ)(() => [
            t.file_upload_props.strErrorDescription,
            t.file_upload_props.displayFileName,
            t.file_upload_props.eUploadState,
          ]),
          o = a ? (0, C.Xx)("#Uploading_Item", a) : "",
          l = r || (0, C.Xx)("#Chat_Upload_ErrorCloud");
        return n.createElement(
          "div",
          { className: Nt.FileUploadProgressContainer },
          n.createElement("div", { className: Nt.FileUploadProgressName }, o),
          n.createElement(
            "div",
            { className: Nt.FileUploadErrorDescription },
            l
          ),
          n.createElement(
            "div",
            { className: Nt.FileUploadActions },
            n.createElement(
              pt.Uq,
              { className: "DialogLayout_NoMinWidth" },
              Boolean(3 == s) &&
                n.createElement(
                  pt.KM,
                  {
                    onClick: () =>
                      (0, i.mG)(this, void 0, void 0, function* () {
                        yield t.RetryFileUpload(), t.Reset();
                      }),
                  },
                  (0, C.Xx)("#Chat_Upload_ErrorAction_Retry")
                ),
              n.createElement(
                pt.zx,
                { onClick: () => t.ClearFileUploadError() },
                (0, C.Xx)("#Chat_Upload_ErrorAction_Close")
              )
            )
          )
        );
      }
      var Pt = r(46723),
        kt = r(24868),
        Ot = r(76478),
        Wt = r(19464);
      let jt = null;
      function Xt(e) {
        var t, r;
        let i = (0, o.im)(e.args);
        const a = (0, o.im)(e.args, "style"),
          s = (0, o.im)(e.args, "id"),
          l = (function (e) {
            return "button" === e
              ? (0, U.Z)(P.LinkButton, "LinkButton")
              : (0, U.Z)(P.Link, "Link");
          })(a),
          c = e.context.event;
        if (void 0 === i) return e.children || "";
        if ("string" == typeof i && i.length > 0) {
          const r = o.vZ(
            i,
            e.language,
            null === (t = e.context.event) || void 0 === t
              ? void 0
              : t.rtime32_last_modified
          );
          i = "string" == typeof r ? r : r[1];
        }
        return (
          "dev" == v.De.WEB_UNIVERSE &&
            "store" == (0, v.Zv)() &&
            "store.steampowered.com" == (0, D.FM)(i) &&
            ((i = i.replace(
              "https://store.steampowered.com/",
              v.De.STORE_BASE_URL
            )),
            "clorthax_quest" ==
              (null === (r = null == c ? void 0 : c.jsondata) || void 0 === r
                ? void 0
                : r.sale_vanity_id) &&
              (-1 == i.indexOf("?")
                ? (i += "?t=2022-06-25")
                : (i += "&t=2022-06-25"))),
          "string" == typeof i && i.length > 0 && "#" == i[0]
            ? n.createElement("a", { className: l, href: i }, e.children)
            : "steam://settings/account" == i
            ? n.createElement(
                Et.ns,
                { className: l, href: "steam://settings/account" },
                e.children
              )
            : n.createElement(
                L.z,
                { className: l, url: i, event: e.context.event, id: s },
                e.children
              )
        );
      }
      function Vt(e) {
        const { showErrorInfo: t, event: r } = e.context;
        let i = e && e.children && e.children.toString();
        if (
          (null == i || null == i || 0 == i.length) &&
          ((i = e && e.args && e.args[""]),
          null == i || null == i || 0 == i.length)
        )
          return "";
        const a = o.vZ(
          i,
          e.language,
          null == r ? void 0 : r.rtime32_last_modified
        );
        if ("string" == typeof a) {
          let e;
          return (
            (i = a),
            (e = (!r || !r.BHasTag("auto_rssfeed")) && !(0, D.dK)(i)),
            t || (i = (0, D.et)(i)),
            t
              ? n.createElement(wt.e, {
                  src: i,
                  crossOrigin: e ? "anonymous" : void 0,
                })
              : n.createElement("img", {
                  src: i,
                  crossOrigin: e ? "anonymous" : void 0,
                })
          );
        }
        return n.createElement(T.j, { rgSources: a });
      }
      function Zt(e) {
        const t = (0, o.im)(e.args);
        if (null == t || null == t || 0 == t.length) return "";
        const r = e && e.children && e.children.toString(),
          i = new Array();
        return (
          i.push(
            `${v.De.MEDIA_CDN_COMMUNITY_URL}images/steamworks_docs/${v.De.LANGUAGE}/${t}`
          ),
          "english" != v.De.LANGUAGE &&
            i.push(
              `${v.De.MEDIA_CDN_COMMUNITY_URL}images/steamworks_docs/english/${t}`
            ),
          n.createElement(T.j, { rgSources: i, alt: r })
        );
      }
      function Ht(e) {
        const t = Yt(
            e.args,
            "appid",
            e.context.event.appid ? e.context.event.appid : 0
          ),
          r = Yt(e.args, "trailerid", 0);
        return n.createElement(yt, {
          appid: t,
          trailerBaseID: r,
          bIsPreviewMode: e.context.showErrorInfo,
        });
      }
      function Qt(e) {
        const t = Yt(e.args, "appid", 0);
        return n.createElement(vt, {
          appid: t,
          bPreviewMode: e.context.showErrorInfo,
        });
      }
      function qt(e) {
        const t = (0, o.im)(e.args, "name"),
          r = (0, o.im)(e.args, "title"),
          i = (0, o.im)(e.args, "company"),
          a = (0, o.im)(e.args, "photo");
        return e.context.bShowShortSpeakerInfo
          ? n.createElement(gt.G$, {
              name: t,
              title: r,
              company: i,
              photo: a,
              bio: e.children,
            })
          : n.createElement(gt.qs, {
              name: t,
              title: r,
              company: i,
              photo: a,
              bio: e.children,
            });
      }
      function Yt(e, t, r) {
        const i = (0, o.im)(e, t);
        return void 0 === i || null == i ? r : Number.parseInt(i);
      }
      function $t(e) {
        const t = (0, o.im)(e.args, "name"),
          r =
            "true" === ((0, o.im)(e.args, "visible") || "false").toLowerCase(),
          i = (0, dt.x)(t);
        if (!t) {
          return e.context.showErrorInfo
            ? n.createElement("div", null, "Failed to provide giveaway name")
            : null;
        }
        return i && i.registered && ((i.eligible && r) || (!i.eligible && !r))
          ? e.children
          : null;
      }
      function Kt(e) {
        const t = e.context.showErrorInfo;
        return v.L7.logged_in
          ? n.createElement(Wt.w, { bPreviewMode: t })
          : n.createElement(
              pt.zx,
              { onClick: Ot.X, className: "CSSClaimItemLoginButton" },
              (0, C.Xx)("#Sale_ClaimableReward_Login")
            );
      }
      function Jt(e) {
        const t = Number.parseInt((0, o.im)(e.args, "id")) || 0,
          r =
            "true" === ((0, o.im)(e.args, "visible") || "false").toLowerCase(),
          i = e.context.showErrorInfo,
          [a, s] = (0, ut.ie)(t, {});
        if (!t || 1 == s)
          return !t && i
            ? n.createElement("div", null, "Error: PackageID Not Set")
            : null;
        let l = !1;
        return (
          (l = N.Z.Get().BHasStoreItem(t, 1)
            ? Boolean(a.GetBestPurchaseOption())
            : !N.Z.Get().BIsPackageUnavailableDueToCountryRestriction(t)),
          (!l && !r) || (l && r) ? e.children : null
        );
      }
      function er(e) {
        if ("GameAwardDrop2022" === e) {
          const t = (0, dt.x)(e),
            r = (0, dt.v)();
          return t
            ? t.registered
              ? {
                  bInitialState: !1,
                  bSuccessState: t.eligible,
                  bFailedState: !t.eligible,
                  fnAction: t.eligible
                    ? void 0
                    : () =>
                        (0, i.mG)(this, void 0, void 0, function* () {
                          yield r.fnCreateRegistration(e);
                        }),
                }
              : {
                  bInitialState: !0,
                  fnAction: () =>
                    (0, i.mG)(this, void 0, void 0, function* () {
                      yield r.fnCreateRegistration(e);
                    }),
                }
            : { bInitialState: !0 };
        }
        return { bInitialState: !0 };
      }
      function tr(e) {
        const t = (0, o.im)(e.args, "action"),
          r = (0, o.im)(e.args, "initialToken"),
          i = (0, o.im)(e.args, "successToken"),
          a = (0, o.im)(e.args, "failToken"),
          s = er(t);
        if (!(t && r && i && a)) {
          return e.context.showErrorInfo
            ? n.createElement(
                "div",
                null,
                "Failed to provide all tokens. Dialog will not appear"
              )
            : null;
        }
        return v.L7.logged_in
          ? n.createElement(
              pt.zx,
              {
                className: "CSSActionDialogButton",
                onClick: (s) => {
                  (0, kt.AM)(
                    n.createElement(
                      rr,
                      {
                        strAction: t,
                        strInitialToken: r,
                        strSuccessToken: i,
                        strFailToken: a,
                      },
                      e.children
                    ),
                    (0, Rt.RA)(s)
                  );
                },
              },
              Boolean(s.bInitialState) && (0, C.Xx)(r),
              Boolean(s.bSuccessState) && (0, C.Xx)(i),
              Boolean(s.bFailedState) && (0, C.Xx)(a)
            )
          : n.createElement(
              pt.zx,
              { className: "CSSActionDialogButton", onClick: Ot.X },
              (0, C.Xx)("#Login_SignIn")
            );
      }
      function rr(e) {
        const {
            strAction: t,
            children: r,
            closeModal: i,
            strInitialToken: a,
            strSuccessToken: s,
            strFailToken: o,
          } = e,
          l = er(t),
          [c, m] = n.useState(Boolean(l.fnAction));
        return (
          n.useEffect(() => {
            l.fnAction && (m(!0), l.fnAction().finally(() => m(!1)));
          }, [l]),
          n.createElement(
            Pt.RG,
            {
              bDisableBackgroundDismiss: !0,
              closeModal: i,
              onCancel: i,
              className: "CSSActionDialogDialog",
            },
            n.createElement(
              pt.h4,
              null,
              Boolean(l.bInitialState) && (0, C.Xx)(a),
              Boolean(l.bSuccessState) && (0, C.Xx)(s),
              Boolean(l.bFailedState) && (0, C.Xx)(o)
            ),
            n.createElement(
              pt.uT,
              null,
              n.createElement(
                pt.Ac,
                null,
                c
                  ? n.createElement(E.V, {
                      size: "medium",
                      position: "center",
                      string: (0, C.Xx)("#Loading"),
                    })
                  : r
              )
            )
          )
        );
      }
      function ir(e) {
        const { showErrorInfo: t, event: r } = e.context,
          i = r.clanSteamID.GetAccountID(),
          [a] = n.useState(
            new ct(
              (function (e) {
                const t = {
                  PopulateBeginFileUploadFormData: (t) => {
                    t.append("clan_account_id", "" + e);
                  },
                  PopulateCommitFileUploadFormData: (t) => {
                    t.append("clan_account_id", "" + e);
                  },
                  GetBeginFileUploadURL: () =>
                    v.De.STORE_BASE_URL + "saleaction/ajaxbeginfileupload",
                  GetCommitFileUploadURL: () =>
                    v.De.STORE_BASE_URL + "saleaction/ajaxcommitfileupload",
                  LogFileUploadMessage: (e) => {
                    console.log("UploadFileButton: ", e);
                  },
                  GetMaxFileSizeMB: () => 100,
                };
                return t;
              })(i)
            )
          );
        return i == m.sq ||
          i == m.RQ ||
          (2 == v.De.EUNIVERSE && i == m.$Y) ||
          (1 == v.De.EUNIVERSE && i == m._L)
          ? n.createElement(
              "div",
              null,
              n.createElement(At, { fileUploadManager: a }),
              n.createElement(Tt, { fileUploadManager: a })
            )
          : t
          ? n.createElement("div", null, (0, C.Xx)("#CloudUpload_NotSupport"))
          : null;
      }
      class nr extends n.Component {
        constructor(e) {
          super(e),
            (this.m_parser = new a.Z6(
              nr.sm_BBCodeDictionary,
              this.ElementAccumulator,
              e.languageOverride
            ));
        }
        ElementAccumulator(e) {
          return new l.Ax(
            new l.Zy(
              new l.qL(
                new s.So(new s.LT(), 0),
                e,
                (null == se &&
                  (se =
                    v.De.EREALM == p.IN.k_ESteamRealmChina
                      ? [
                          { urlRegExp: new RegExp(q), fnBBComponent: ue },
                          { urlRegExp: new RegExp($), fnBBComponent: _e },
                          { urlRegExp: new RegExp(K), fnBBComponent: he },
                          { urlRegExp: new RegExp(Y), fnBBComponent: ge },
                          { urlRegExp: new RegExp(ne), fnBBComponent: Ce },
                        ]
                      : [
                          {
                            urlRegExp: new RegExp(/youtu.be|youtube.com/i),
                            fnBBComponent: oe,
                          },
                          {
                            urlRegExp: new RegExp(
                              /community.+sharedfiles\/filedetails\/\?id=\d+/i
                            ),
                            fnBBComponent: me,
                          },
                          { urlRegExp: new RegExp(q), fnBBComponent: ue },
                          { urlRegExp: new RegExp($), fnBBComponent: _e },
                          { urlRegExp: new RegExp(K), fnBBComponent: he },
                          { urlRegExp: new RegExp(Y), fnBBComponent: ge },
                          { urlRegExp: new RegExp(J), fnBBComponent: le },
                          { urlRegExp: new RegExp(ee), fnBBComponent: ce },
                          { urlRegExp: new RegExp(te), fnBBComponent: fe },
                          { urlRegExp: new RegExp(re), fnBBComponent: ye },
                          { urlRegExp: new RegExp(ie), fnBBComponent: Be },
                          { urlRegExp: new RegExp(ne), fnBBComponent: Ce },
                          { urlRegExp: new RegExp(ae), fnBBComponent: pe },
                        ]),
                se),
                {
                  partnerEventStore: this.props.partnerEventStore,
                  event: this.props.event,
                }
              )
            ),
            e
          );
        }
        static AddDictionary(e) {
          nr.sm_BBCodeDictionary = new Map([
            ...Array.from(nr.sm_BBCodeDictionary.entries()),
            ...Array.from(e.entries()),
          ]);
        }
        render() {
          return (
            this.m_parser.UpdateOverrideLanguage(this.props.languageOverride),
            this.m_parser.ParseBBCode(this.props.text, {
              showErrorInfo: this.props.showErrorInfo,
              event: this.props.event,
              bShowShortSpeakerInfo: this.props.bShowShortSpeakerInfo,
            })
          );
        }
      }
      (nr.sm_BBCodeDictionary = new Map([
        ...Array.from(o.Be.entries()),
        ...Array.from(
          (null == jt &&
            (jt = new Map([
              ["url", { Constructor: Xt, autocloses: !1 }],
              [
                "h1",
                {
                  Constructor: o.LW(o.R6, P.Header1),
                  autocloses: !1,
                  skipFollowingNewline: !0,
                },
              ],
              [
                "h2",
                {
                  Constructor: o.LW(o.zV, P.Header2),
                  autocloses: !1,
                  skipFollowingNewline: !0,
                },
              ],
              [
                "h3",
                {
                  Constructor: o.LW(o.BB, P.Header3),
                  autocloses: !1,
                  skipFollowingNewline: !0,
                },
              ],
              [
                "quote",
                { Constructor: o.LW(o.pu, P.BlockQuote), autocloses: !1 },
              ],
              [
                "list",
                {
                  Constructor: o.LW(o.aV, P.UnorderedList),
                  autocloses: !1,
                  skipInternalNewline: !0,
                },
              ],
              [
                "olist",
                {
                  Constructor: o.LW(o.GS, P.OrderedList),
                  autocloses: !1,
                  skipInternalNewline: !0,
                },
              ],
              [
                "*",
                { Constructor: o.HC, autocloses: !0, skipInternalNewline: !0 },
              ],
              ["img", { Constructor: Vt, autocloses: !1 }],
              ["previewyoutube", { Constructor: o.MJ, autocloses: !1 }],
              ["looping_media", { Constructor: o.jj, autocloses: !1 }],
              ["video", { Constructor: o.qy, autocloses: !1 }],
              ["youtubeorvideo", { Constructor: o.YC, autocloses: !1 }],
              ["trailer", { Constructor: Ht, autocloses: !0 }],
              ["vod", { Constructor: Qt, autocloses: !1 }],
              [
                "speaker",
                {
                  Constructor: qt,
                  autocloses: !1,
                  skipInternalNewline: !0,
                  allowWrapTextForCopying: !0,
                },
              ],
              ["giveawayeligible", { Constructor: $t, autocloses: !1 }],
              ["claimitem", { Constructor: Kt, autocloses: !0 }],
              ["packagepurchaseable", { Constructor: Jt, autocloses: !1 }],
              ["actiondialog", { Constructor: tr, autocloses: !1 }],
              ["uploadfilebutton", { Constructor: ir, autocloses: !0 }],
              ["docimg", { Constructor: Zt, autocloses: !1 }],
              ["carousel", { Constructor: Mt, autocloses: !1 }],
            ])),
          jt).entries()
        ),
      ])),
        (0, i.gn)([u.ak], nr.prototype, "ElementAccumulator", null);
    },
    19464: (e, t, r) => {
      "use strict";
      r.d(t, { w: () => f });
      var i = r(50265),
        n = r(89526),
        a = r(26095),
        s = r(57255),
        o = r(18817),
        l = r(24868),
        c = r(86701),
        m = r(15642),
        d = r(13806),
        u = r(81052),
        p = r(31587),
        g = r(70983),
        h = r(76795),
        _ = r(2584);
      function f(e) {
        const t = (0, a.Ax)(),
          { bLoading: r } = t,
          { className: o } = e;
        return n.createElement(
          s.zx,
          {
            className: (0, d.Z)("CSSClaimItemButton", o),
            onClick: (e) => {
              t.bCanClaimNewItem
                ? (0, l.AM)(n.createElement(B, null), (0, u.RA)(e))
                : "dev" == g.De.WEB_UNIVERSE &&
                  console.log("ClaimItemButton: invalid state, ", (0, i.ZN)(t));
            },
            disabled: r,
          },
          Boolean(r)
            ? n.createElement(m.V, {
                string: (0, p.Xx)("#Loading"),
                size: "small",
              })
            : n.createElement(y, { claimState: t })
        );
      }
      function y(e) {
        const { claimState: t, strButtonOverride: r } = e;
        return t.bAlreadyClaimedCurrentItem
          ? n.createElement(
              "div",
              { className: (0, d.Z)(h.CheckMark, "CSSClaimedState") },
              n.createElement(c.JrY, null),
              n.createElement(
                "span",
                null,
                " ",
                (null == r ? void 0 : r.length) > 0
                  ? r
                  : (0, p.Xx)("#Sale_ClaimableReward_AlreadyClaimed")
              )
            )
          : n.createElement(
              "span",
              { className: "CSSUnclaimedState" },
              (0, p.Xx)("#Sale_ClaimableReward_sticker")
            );
      }
      function B(e) {
        const { closeModal: t } = e,
          { fnClaimItem: r } = (0, a.jS)(),
          s = (0, o.tx)();
        return (
          n.useEffect(() => {
            s.bLoading ||
              (s.fnSetLoading(!0),
              r()
                .then((e) => {
                  console.log("claim response", (0, i.ZN)(e)),
                    e.appid
                      ? (s.fnSetStrSuccess(
                          (0, p.Xx)("#Sale_ClaimableReward_completed_sticker")
                        ),
                        e.appid &&
                          e.community_item_type &&
                          s.fnSetElSuccess(
                            n.createElement(_.x, {
                              appid: e.appid,
                              community_item_type: e.community_item_type,
                            })
                          ))
                      : s.fnSetStrError(
                          (0, p.Xx)("#Sale_ClaimableReward_Busy")
                        );
                })
                .catch((e) =>
                  s.fnSetStrError((0, p.Xx)("#Sale_ClaimableReward_Busy"))
                ));
          }, [s, r]),
          n.createElement(o.NT, {
            state: s,
            strDialogTitle: (0, p.Xx)("#Sale_ClaimableReward_sticker"),
            closeModal: t,
          })
        );
      }
    },
    2584: (e, t, r) => {
      "use strict";
      r.d(t, { v: () => m, x: () => c });
      var i = r(25125),
        n = r(89526),
        a = (r(6960), r(38800), r(50567), r(40590), r(82633), r(22271)),
        s = r(15642),
        o = r(31587),
        l = r(70983);
      function c(e) {
        const { appid: t, community_item_type: r } = e,
          i = (0, a.mn)(t, r);
        if (
          (null == i ? void 0 : i.item_movie_mp4) &&
          (null == i ? void 0 : i.item_movie_webm)
        ) {
          const e = `${l.De.MEDIA_CDN_COMMUNITY_URL}images/items/${t}/${
              null == i ? void 0 : i.item_image_large
            }`,
            r = `${l.De.MEDIA_CDN_COMMUNITY_URL}images/items/${t}/${
              null == i ? void 0 : i.item_movie_webm
            }`,
            a = `${l.De.MEDIA_CDN_COMMUNITY_URL}images/items/${t}/${
              null == i ? void 0 : i.item_movie_mp4
            }`;
          return n.createElement(
            "video",
            { muted: !0, controls: !1, autoPlay: !0, loop: !0, poster: e },
            n.createElement("source", { src: r, type: "video/webm" }),
            Boolean(!l.De.IN_CLIENT) &&
              n.createElement("source", { src: a, type: "video/mp4" })
          );
        }
        if (i) {
          const r = `${l.De.MEDIA_CDN_COMMUNITY_URL}images/items/${t}/${
            (null == i ? void 0 : i.item_image_small) ||
            (null == i ? void 0 : i.item_image_large)
          }`;
          return n.createElement("img", {
            className: e.className,
            src: r,
            alt: null == i ? void 0 : i.item_name,
          });
        }
        return n.createElement(s.V, {
          size: "small",
          string: (0, o.Xx)("#Loading"),
        });
      }
      function m(e) {
        const { section: t, rewardDef: r, language: s } = e,
          o = (0, a.mn)(r.appid, r.community_item_type),
          [m] = (0, i.SZ)(() => {
            var e;
            return [
              Boolean(
                null === (e = t.rewards) || void 0 === e
                  ? void 0
                  : e.show_reward_item_name
              ),
            ];
          });
        let d;
        switch (r.community_class) {
          case 14:
          case 15:
            d = `${l.De.COMMUNITY_BASE_URL}my/edit/avatar`;
            break;
          case 1:
            d = `${l.De.COMMUNITY_BASE_URL}my/edit/favoritebadge`;
            break;
          case 3:
          case 8:
            d = `${l.De.COMMUNITY_BASE_URL}my/edit/background`;
            break;
          case 13:
            d = `${l.De.COMMUNITY_BASE_URL}my/edit/miniprofile`;
            break;
          case 11:
            d = `${l.De.COMMUNITY_BASE_URL}chat`;
        }
        return n.createElement(
          "a",
          { href: d },
          n.createElement(c, {
            appid: null == r ? void 0 : r.appid,
            community_item_type: null == r ? void 0 : r.community_item_type,
          }),
          Boolean(m) &&
            n.createElement("span", null, null == o ? void 0 : o.item_name)
        );
      }
    },
    1633: (e, t, r) => {
      "use strict";
      r.d(t, { j: () => s });
      var i = r(33940),
        n = r(89526),
        a = r(31621);
      class s extends n.Component {
        constructor(e) {
          super(e),
            (this.m_refImage = n.createRef()),
            (this.state = { nImage: 0 });
        }
        componentDidUpdate(e) {
          JSON.stringify(this.props.rgSources) != JSON.stringify(e.rgSources) &&
            this.setState({ nImage: 0 });
        }
        get src() {
          let e = "";
          return (
            this.props.rgSources &&
              this.props.rgSources.length > this.state.nImage &&
              (e = this.props.rgSources[this.state.nImage]),
            e ||
              (console.warn(
                "MultiSourceImage created with no image src",
                this.props,
                this.state.nImage
              ),
              (e =
                "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=")),
            e
          );
        }
        get imgRef() {
          return this.m_refImage;
        }
        OnImageError(e) {
          this.props.onIncrementalError &&
            this.props.onIncrementalError(
              e,
              this.props.rgSources[this.state.nImage],
              this.state.nImage
            );
          let t = this.state.nImage + 1;
          t >= this.props.rgSources.length &&
            this.props.onError &&
            this.props.onError(e),
            t < this.props.rgSources.length && this.setState({ nImage: t });
        }
        render() {
          const e = this.props,
            { src: t, rgSources: r, onIncrementalError: a, onError: s } = e,
            o = (0, i._T)(e, [
              "src",
              "rgSources",
              "onIncrementalError",
              "onError",
            ]),
            l = this.src;
          return n.createElement(
            "img",
            Object.assign({ src: l, ref: this.m_refImage }, o, {
              onError: this.OnImageError,
            })
          );
        }
      }
      (0, i.gn)([a.ak], s.prototype, "OnImageError", null);
    },
    36465: (e, t, r) => {
      "use strict";
      r.d(t, { Z: () => i });
      const i =
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QUQ5NEMwOTYzRDc4MTFFQUExREZEODRBMDBCNjdENTEiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QUQ5NEMwOTczRDc4MTFFQUExREZEODRBMDBCNjdENTEiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpBRDk0QzA5NDNENzgxMUVBQTFERkQ4NEEwMEI2N0Q1MSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpBRDk0QzA5NTNENzgxMUVBQTFERkQ4NEEwMEI2N0Q1MSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Po/TXacAAABMSURBVHjaYvz//z8DNQHjyDMQDICGJgDx3f/kA5DeBJhh8f+pB+JBXr4DNFeZSp69CzLwP7UjZdTAkWAgVdMh1XMK1fPyCCwPAQIMAKf/Y+3dveJlAAAAAElFTkSuQmCC";
    },
  },
]);
