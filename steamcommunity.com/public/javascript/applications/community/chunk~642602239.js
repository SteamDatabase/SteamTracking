/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
  [9427],
  {
    75402: (e) => {
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
    59663: (e) => {
      e.exports = { Ctn: "cloudfileuploadbutton_Ctn_MKp7i" };
    },
    71654: (e) => {
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
    51989: (e) => {
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
    49245: (e) => {
      e.exports = { Ctn: "loyaltyrewarditemembed_Ctn_2di0m" };
    },
    34976: (e) => {
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
        InfoStyles: "partnereventdialog_InfoStyles_2Zq0U",
        InfoStylesWithIcon: "partnereventdialog_InfoStylesWithIcon_2TYAo",
        InfoIconLayout: "partnereventdialog_InfoIconLayout_qgVd4",
        InfoStylesBackground: "partnereventdialog_InfoStylesBackground_3YqPi",
        Padding: "partnereventdialog_Padding_2oWai",
        NotTooWideModal: "partnereventdialog_NotTooWideModal_3P6Se",
      };
    },
    7762: (e) => {
      e.exports = {
        CheckMark: "claimitemshared_CheckMark_3HeHP",
        DialogCtn: "claimitemshared_DialogCtn_ltlR6",
        EquipCtn: "claimitemshared_EquipCtn_2_8bZ",
      };
    },
    68309: (e) => {
      e.exports = {
        ScrollSnapCarousel: "scrollsnapcarousel_ScrollSnapCarousel_17m-P",
      };
    },
    83431: (e) => {
      e.exports = { BroadcastCtn: "vodplayer_BroadcastCtn_3YzMi" };
    },
    29667: (e, t, r) => {
      "use strict";
      r.d(t, { Ax: () => d, Zy: () => c, qL: () => m });
      var i = r(89526),
        n = (r(52502), r(90531)),
        a = (r(10412), r(50304)),
        s = r(207),
        o = (r(24174), r(4116)),
        l = r(84199);
      class m extends o.DX {
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
              n || super.AppendNode((0, l.hF)(i)),
                (r = e.input.substr(e.index + i.length)),
                (e = this.m_LinkFilter.exec(r));
            }
          }
          r.length > 0 && super.AppendText(r, t);
        }
      }
      class c extends o.DX {
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
    88337: (e, t, r) => {
      "use strict";
      r.d(t, { Q8: () => g, md: () => p });
      var i = r(33940),
        n = r(50265),
        a = r(46132),
        s = r(54856),
        o = r(57361),
        l = r(56373),
        m = (r(56020), r(53236)),
        c = r(23801),
        d = r(85246),
        u = r(32765);
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
              (0, c.X)(
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
            ((0, c.X)(
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
              let e = s.gA.Init(m.Fi);
              e.Body().set_language((0, a.jM)(u.De.LANGUAGE));
              const r = 50;
              for (; t.length > 0; ) {
                const i = Math.min(r, t.length),
                  n = t.slice(0, i);
                (t = t.slice(i)), e.Body().set_appids(n);
                const a = yield m.AE.GetApps(
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
            (0, c.X)(
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
              e.is_initialized && this.m_mapAppInfo.set(t.appid(), e);
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
                    (0, c.X)(
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
                  let t = s.gA.Init(m.tj);
                  return (
                    t.Body().set_appid(e.GetAppID()),
                    t.Body().set_language(u.De.LANGUAGE),
                    m.AE.GetAppRichPresenceLocalization(
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
    43658: (e, t, r) => {
      "use strict";
      r.d(t, { O: () => g, V: () => h });
      var i = r(33940),
        n = r(89526),
        a = (r(51637), r(54856)),
        s = r(36597),
        o = (r(3641), r(6681), r(16899)),
        l = r(23801),
        m = r(23217),
        c = r(85246),
        d = r(4306),
        u = r(32765);
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
              this.m_defChangeCallback.set(e, new c.pB()),
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
              this.m_defCategoryAndClassToChangeCallback.set(r, new c.pB()),
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
              s = (0, m.l)(a);
            } catch (e) {
              s = (0, m.l)(e);
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
              s = (0, m.l)(a);
            } catch (e) {
              s = (0, m.l)(e);
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
    20620: (e, t, r) => {
      "use strict";
      r.d(t, { v: () => p, x: () => u });
      var i = r(33940),
        n = r(52868),
        a = r.n(n),
        s = r(89526),
        o = (r(51637), r(63403), r(23217)),
        l = r(85246),
        m = r(4306),
        c = r(32765);
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
              const m =
                  c.De.STORE_BASE_URL +
                  "saleaction/ajaxgetusergiveawayregistration",
                d = { giveaway_name: e, sessionid: c.De.SESSIONID },
                u = yield a().get(m, { params: d, withCredentials: !0 });
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
              const m =
                  c.De.STORE_BASE_URL +
                  "saleaction/ajaxupdateusergiveawayregistration",
                d = { giveaway_name: e, sessionid: c.De.SESSIONID },
                u = yield a().get(m, { params: d, withCredentials: !0 });
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
              "dev" == c.De.WEB_UNIVERSE &&
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
          (0, m.Qg)(d.Get().GetRegistrationChangeCallback(e), r),
          t
        );
      }
      function p() {
        return { fnCreateRegistration: d.Get().CreateRegistration };
      }
      (0, i.gn)([m.ak], d.prototype, "CreateRegistration", null);
    },
    54124: (e, t, r) => {
      "use strict";
      r.d(t, { Hy: () => _, i8: () => g, mo: () => h });
      var i = r(33940),
        n = r(89526),
        a = (r(51637), r(54856)),
        s = r(36597),
        o = (r(3641), r(27143)),
        l = r(23801),
        m = r(23217),
        c = r(85246),
        d = r(4306),
        u = r(32765);
      class p {
        constructor() {
          (this.m_mapInventoryByApp = new Map()),
            (this.m_mapPromises = new Map()),
            (this.m_listChangeCallback = new Map()),
            (this.m_SteamInterface = null);
        }
        GetInventoryForApp(e) {
          return this.m_mapInventoryByApp.get(e);
        }
        GetItemDefsChangeForAppID(e) {
          return (
            this.m_listChangeCallback.has(e) ||
              this.m_listChangeCallback.set(e, new c.pB()),
            this.m_listChangeCallback.get(e)
          );
        }
        BHasLoadedDef(e) {
          return this.m_mapPromises.has(e);
        }
        SetTestAppCommunityItems(e, t) {
          this.m_mapInventoryByApp.set(e, t),
            this.GetItemDefsChangeForAppID(e).Dispatch(t),
            this.m_mapPromises.set(e, Promise.resolve(1));
        }
        LoadCommunityInventory(e) {
          return (0, i.mG)(this, void 0, void 0, function* () {
            return e
              ? (this.m_mapPromises.has(e) ||
                  this.m_mapPromises.set(
                    e,
                    this.InternalLoadCommunityInventory(e)
                  ),
                this.m_mapPromises.get(e))
              : 2;
          });
        }
        InternalLoadCommunityInventory(e) {
          return (0, i.mG)(this, void 0, void 0, function* () {
            const t = a.gA.Init(o.o0);
            t.Body().set_filter_appids([e]);
            let r = null;
            try {
              const i = yield o.Ts.GetCommunityInventory(
                this.m_SteamInterface.GetServiceTransport(),
                t
              );
              if (1 == i.GetEResult()) {
                const t = new Array();
                return (
                  i
                    .Body()
                    .items()
                    .forEach((e) => t.push(e.toObject())),
                  this.m_mapInventoryByApp.set(e, t),
                  this.GetItemDefsChangeForAppID(e).Dispatch(t),
                  1
                );
              }
              r = (0, m.l)(i);
            } catch (e) {
              r = (0, m.l)(e);
            }
            return (
              console.error(
                "CQuestCommunityInventoryStore.InternalLoadCommunityInventory failed: on appid " +
                  e +
                  " error: " +
                  (null == r ? void 0 : r.strErrorMsg),
                r
              ),
              2
            );
          });
        }
        static Get() {
          return (
            p.s_Singleton ||
              ((p.s_Singleton = new p()),
              p.s_Singleton.Init(),
              "dev" == u.De.WEB_UNIVERSE &&
                (window.g_QuestCommunityInventoryStore = p.s_Singleton)),
            p.s_Singleton
          );
        }
        Init() {
          const e = (0, u.kQ)("read_inventory_token", "application_config");
          (0, l.X)(
            e,
            "CQuestCommunityInventoryStore: missing read_inventory:steam oauth permission"
          ),
            (this.m_SteamInterface = new s.J(u.De.WEBAPI_BASE_URL, e));
        }
      }
      function g(e) {
        const [t, r] = (0, n.useState)(p.Get().GetInventoryForApp(e));
        return (
          (0, n.useEffect)(() => {
            e && !p.Get().BHasLoadedDef(e) && p.Get().LoadCommunityInventory(e);
          }, [e]),
          (0, d.Qg)(p.Get().GetItemDefsChangeForAppID(e), r),
          t
        );
      }
      function h(e, t) {
        const r = g(e),
          [i, a] = (0, n.useState)(null),
          [s, o] = (0, n.useState)(!1);
        return (
          (0, n.useEffect)(() => {
            if (e && r) {
              const n = r.find((r) => r.appid == e && r.item_type == t);
              i != n && a(n), o(!0);
            }
          }, [e, t, r, i]),
          { communityItem: i, bLoaded: s }
        );
      }
      function _(e, t) {
        p.Get().SetTestAppCommunityItems(e, t);
      }
      (0, i.gn)([d.ak], p.prototype, "SetTestAppCommunityItems", null);
    },
    21261: (e, t, r) => {
      "use strict";
      r.d(t, { Ax: () => _, jS: () => f, rW: () => y, sp: () => B });
      var i = r(33940),
        n = (r(51637), r(54856)),
        a = r(36597),
        s = r(16899),
        o = r(23801),
        l = r(32765),
        m = r(89526),
        c = (r(3641), r(23217)),
        d = r(85246),
        u = r(4306),
        p = r(50265),
        g = r(27143);
      class h {
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
        ActivateProfileModifier(e) {
          return (0, i.mG)(this, void 0, void 0, function* () {
            const t = n.gA.Init(g.yg);
            t.Body().set_communityitemid(e.communityitemid),
              t.Body().set_appid(e.appid),
              t.Body().set_activate(!0);
            const r = yield g.Ts.ActivateProfileModifierItem(
              this.m_SteamInterface.GetServiceTransport(),
              t
            );
            return (
              1 != r.GetEResult() &&
                console.error(
                  `Error when calling QuestService.ActivateProfileModifierItem: EResult=${r.GetEResult()}`
                ),
              r.GetEResult()
            );
          });
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
              a = (0, c.l)(n);
            } catch (e) {
              a = (0, c.l)(e);
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
              t = (0, c.l)(r);
            } catch (e) {
              t = (0, c.l)(e);
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
            h.s_Singleton ||
              ((h.s_Singleton = new h()),
              h.s_Singleton.Init(),
              "dev" == l.De.WEB_UNIVERSE &&
                (window.g_SaleItemClaimableRewardsStore = h.s_Singleton)),
            h.s_Singleton
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
      function _() {
        const [e, t] = (0, m.useState)(h.Get().GetClaimItemState()),
          [r, i] = (0, m.useState)(!0);
        return (
          (0, m.useEffect)(() => {
            h.Get()
              .LoadCanUserClaimItem()
              .then(t)
              .finally(() => i(!1));
          }, []),
          (0, u.Qg)(h.Get().GetClaimStateChangeCallback(), t),
          Object.assign(Object.assign({}, e), { bLoading: r })
        );
      }
      function f() {
        return { fnClaimItem: h.Get().UserClaimItem };
      }
      function y() {
        return { fnSetClaimState: h.Get().TEST_OverrideClaimState };
      }
      function B(e) {
        return (0, i.mG)(this, void 0, void 0, function* () {
          return h.Get().ActivateProfileModifier(e);
        });
      }
      (0, i.gn)([u.ak], h.prototype, "TEST_OverrideClaimState", null),
        (0, i.gn)([u.ak], h.prototype, "UserClaimItem", null);
    },
    53155: (e, t, r) => {
      "use strict";
      r.d(t, { mn: () => u });
      var i = r(33940),
        n = r(52868),
        a = r.n(n),
        s = r(89526),
        o = (r(51637), r(63403), r(23217)),
        l = r(85246),
        m = r(4306),
        c = r(32765);
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
                  c.De.COMMUNITY_BASE_URL +
                  (t
                    ? "minigame/ajaxgetgameitemdefsforeditor"
                    : "minigame/ajaxgetgameitemdefs"),
                l = {
                  appid: e,
                  origin: self.origin,
                  l: c.De.LANGUAGE,
                  sessionid: t ? c.De.SESSIONID : void 0,
                },
                m = yield a().get(s, { params: l, withCredentials: t });
              if (
                200 == (null == m ? void 0 : m.status) &&
                1 ==
                  (null === (r = null == m ? void 0 : m.data) || void 0 === r
                    ? void 0
                    : r.success) &&
                (null === (n = null == m ? void 0 : m.data) || void 0 === n
                  ? void 0
                  : n.item_definitions)
              )
                return (
                  this.m_mapAppToDefs.set(e, m.data.item_definitions),
                  this.GetItemDefsChangeForEventID(e).Dispatch(
                    m.data.item_definitions
                  ),
                  1
                );
              i = (0, o.l)(m);
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
              "dev" == c.De.WEB_UNIVERSE &&
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
              (0, m.Qg)(d.Get().GetItemDefsChangeForEventID(e), i),
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
    11491: (e, t, r) => {
      "use strict";
      r.d(t, { l: () => f });
      var i = r(58638),
        n = r(89526),
        a = r(31782),
        s = r(701),
        o = r(19304),
        l = r(26121),
        m = r(75402),
        c = r(46294),
        d = r(41576),
        u = r(32765),
        p = r(68309);
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
            c = 100 * (1 - Math.min(a + t, r) / r),
            d = l + (50 * t) / r,
            u = 100 - d;
          return n.createElement(
            "div",
            { className: m.pipScrollerContainer },
            e &&
              n.createElement(
                i.jp,
                {
                  className: (0, o.Z)(
                    m.pipScrollButton,
                    m.left,
                    m.carouselNavButton
                  ),
                },
                n.createElement(s.thP, null)
              ),
            n.createElement(
              "div",
              { className: m.pipScroller },
              n.createElement("div", { className: m.scrollBackground }),
              n.createElement("div", {
                className: m.scrollForeground,
                style: { left: l + "%", right: c + "%" },
              }),
              n.createElement(
                "div",
                {
                  className: m.scrollNavDiv,
                  style: { left: "0%", width: d + "%" },
                },
                n.createElement(
                  i.jp,
                  {
                    className: (0, o.Z)(m.carouselNavButton, m.scrollNavButton),
                  },
                  n.createElement("div", null)
                )
              ),
              n.createElement(
                "div",
                {
                  className: m.scrollNavDiv,
                  style: { right: "0%", width: u + "%" },
                },
                n.createElement(
                  i.P1,
                  {
                    className: (0, o.Z)(m.carouselNavButton, m.scrollNavButton),
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
                    m.pipScrollButton,
                    m.right,
                    m.carouselNavButton
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
            className: (0, o.Z)(m.carouselBody, e.className, B),
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
                      c.Y,
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
                  { className: m.innerSlide, key: "slide_" + r, index: r },
                  a
                );
              })
            ),
            !h &&
              (e.useTestScrollbar
                ? n.createElement(_, { showArrows: g, carouselStore: null })
                : n.createElement(
                    "div",
                    { className: m.breadcrumbContainer },
                    ((t) =>
                      n.Children.map(e.children, (e, r) =>
                        r % t != 0
                          ? null
                          : n.createElement(
                              i.oT,
                              { slide: r, className: m.pip },
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
          c = n.useContext(i.ro),
          u = n.useRef(c.state.currentSlide),
          [p, g] = n.useState(null),
          [h, _] = n.useState(!!r),
          f = n.useRef(null),
          y = n.useRef(null);
        n.useEffect(() => {
          const e = () => {
            f.current = window.setTimeout(() => {
              if (f.current) {
                B(f);
                const e = (c.state.currentSlide + 1) % c.state.totalSlides;
                c.setStoreState({ currentSlide: e });
              }
            }, 8e3);
          };
          h && e();
          const t = () => {
            const t = u.current,
              r = c.state.currentSlide;
            l && l(r), g(r > t ? "Right" : r < t ? "Left" : null), B(y);
            (y.current = window.setTimeout(() => {
              y.current && (g(null), B(y));
            }, 1e3)),
              (u.current = r),
              f.current ? (B(f), _(!1)) : h && e();
          };
          return (
            c.subscribe(t),
            () => {
              c.unsubscribe(t), B(f), B(y);
            }
          );
        }, [c, h]);
        const C = !!p && "CarouselSliding" + p;
        return n.createElement(
          "div",
          { className: (0, o.Z)(m.sliderBody, "SliderBody", C) },
          !t &&
            n.createElement(
              i.jp,
              {
                className: (0, o.Z)(
                  m.carouselBtnCtn,
                  m.left,
                  m.carouselNavButton,
                  "CarouselBtnLeft"
                ),
              },
              n.createElement(s.thP, null)
            ),
          n.createElement(
            i.iR,
            {
              className: d.U.GetScrollableClassname(),
              classNameTray: m.slideTrayCustomize,
              classNameAnimation: m.DisableSliderMotion,
            },
            a
          ),
          !t &&
            n.createElement(
              i.P1,
              {
                className: (0, o.Z)(
                  m.carouselBtnCtn,
                  m.right,
                  m.carouselNavButton,
                  "CarouselBtnRight"
                ),
              },
              n.createElement(s.thP, null)
            )
        );
      }
    },
    77557: (e, t, r) => {
      "use strict";
      r.d(t, { NT: () => c, T$: () => m, tx: () => l });
      var i = r(89526),
        n = r(99307),
        a = r(34976),
        s = r(14826),
        o = r(69338);
      r(46132);
      function l() {
        const [e, t] = (0, i.useState)(!1),
          [r, n] = (0, i.useState)(!1),
          [a, s] = (0, i.useState)(!1),
          [o, l] = (0, i.useState)(null),
          [m, c] = (0, i.useState)(null),
          [d, u] = (0, i.useState)(null);
        return {
          bLoading: e,
          bError: r,
          bSuccess: a,
          strError: o,
          strSuccess: m,
          elSuccess: d,
          fnSetLoading: t,
          fnSetError: n,
          fnSetSuccess: s,
          fnSetStrError: l,
          fnSetStrSuccess: c,
          fnSetElSuccess: u,
        };
      }
      function m(e, t) {
        1 != t ? e.fnSetError(!0) : e.fnSetSuccess(!0);
      }
      function c(e) {
        const {
            strDialogTitle: t,
            state: r,
            closeModal: l,
            strThrobber: m,
          } = e,
          {
            bLoading: c,
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
                string: m || (0, s.Xx)("#Loading"),
                size: "medium",
                position: "center",
              })
            );
      }
    },
    86531: (e, t, r) => {
      "use strict";
      r.d(t, { d: () => nr });
      var i = r(33940),
        n = r(89526),
        a = r(24174),
        s = r(4116),
        o = r(14288),
        l = r(29667),
        m = r(46132),
        c = r(52502),
        d = r(10412),
        u = r(4306),
        p = (r(51637), r(26412)),
        g = r(47165),
        h = r(50653),
        _ = r(4585),
        f = r.n(_),
        y = r(88464),
        B = r(14826),
        C = r(52868),
        b = r.n(C),
        S = r(32765),
        v = r(50265),
        w = r(69338),
        E = r(19002),
        I = r(23217);
      let R = class extends n.Component {
        constructor(e) {
          super(e),
            (this.m_cancelSignal = b().CancelToken.source()),
            (this.state = { bLoadedMetadata: !1 }),
            (this.m_sharedFileInfo = {
              sharedfileid: this.props.sharedFileID,
              title: (0, B.Xx)("#Loading"),
              description: "",
              type: "",
              previewurl: "",
              appid: 0,
              url:
                S.De.COMMUNITY_BASE_URL +
                "sharedfiles/filedetails/?id=" +
                this.props.sharedFileID,
            });
        }
        componentDidMount() {
          E.A.LoadSharedFileDynamicData(
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
              console.error("SharedFileSnippet: " + (0, I.l)(e).strErrorMsg)
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
              className: f().DynamicLinkBox,
              "data-modal-content-sizetofit":
                !!this.m_sharedFileInfo.bSizeToFit,
              "data-appid": this.m_sharedFileInfo.appid,
              "data-publishedfileid": this.props.sharedFileID,
            },
            n.createElement("img", {
              className: f().DynamicLink_Preview,
              src: this.m_sharedFileInfo.previewurl,
            }),
            n.createElement(
              "div",
              { className: f().DynamicLink_Content },
              n.createElement(
                "div",
                { className: f().DynamicLink_Name },
                this.m_sharedFileInfo.title
              ),
              n.createElement(
                "div",
                null,
                n.createElement(
                  "span",
                  { className: f().DynamicLink_Type },
                  this.m_sharedFileInfo.type
                )
              ),
              e &&
                n.createElement(
                  "div",
                  { className: f().DynamicLink_Author },
                  (0, B.kQ)(
                    "#EventEditor_Author",
                    n.createElement(
                      "span",
                      { className: f().DynamicLink_AuthorName },
                      this.m_sharedFileInfo.personnaname
                    )
                  )
                ),
              n.createElement(
                "div",
                { className: f().DynamicLink_Description },
                this.m_sharedFileInfo.description
              )
            )
          );
        }
      };
      (0, i.gn)([v.LO], R.prototype, "m_sharedFileInfo", void 0),
        (R = (0, i.gn)([y.Pi], R));
      var F = r(701),
        M = r(19304),
        A = r(207),
        D = r(1063),
        U = r(82079),
        z = r(57858),
        T = r(87178),
        N = r(84199),
        L = r(20790);
      let G = class extends n.Component {
        constructor() {
          super(...arguments),
            (this.state = {
              bLoading: this.props.announcementGID
                ? !d.j1.BHasClanAnnouncementGID(this.props.announcementGID)
                : !d.j1.BHasClanAnnouncementGID(this.props.eventGID),
              bFailedLoad: !1,
            }),
            (this.m_cancelSignal = b().CancelToken.source());
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
                  a = (yield U.sV.LoadOGGClanInfoForIdentifier(t)).clanSteamID;
                } else if (void 0 !== n) {
                  a = (yield U.sV.LoadOGGClanInfoForGroupVanity(n)).clanSteamID;
                }
                const s = d.j1.LoadPartnerEventGeneric(a, e, i, r, 0);
                let o = yield s;
                yield Promise.all([
                  z.Z.Get().QueueAppRequest(o.appid, {
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
          let t = (0, I.l)(e);
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
          if (this.state.bFailedLoad) return (0, N.hF)(a);
          if (this.state.bLoading) return n.createElement(w.V, null);
          let l =
            void 0 !== r
              ? d.j1.GetClanEventFromAnnouncementGID(r)
              : d.j1.GetClanEventModel(i);
          if (null == l) return (0, N.hF)(a);
          let c = (0, m.jM)(S.De.LANGUAGE),
            u = l.GetImageForSizeAsArrayWithFallback(
              "capsule",
              c,
              D.FN.capsule_main
            );
          s && (u = s(u));
          let p = l.GetNameWithFallback(c),
            g = l.GetSubTitleWithSummaryFallback(c),
            h =
              null === (e = z.Z.Get().GetApp(t)) || void 0 === e
                ? void 0
                : e.GetName(),
            _ = (0, B.$1)(l.GetStartTimeAndDateUnixSeconds());
          return n.createElement(
            L.JW,
            {
              eventModel: l,
              route: L.Ue.k_eView,
              className: f().DynamicLinkBox,
              "data-modal-content-sizetofit": !0,
              "data-appid": t,
            },
            n.createElement(T.j, {
              className: f().DynamicLink_Preview,
              rgSources: u,
              onIncrementalError: (e, t, r) => o && o(t),
            }),
            n.createElement(
              "div",
              { className: f().DynamicLink_Content },
              n.createElement(
                "div",
                { className: f().DynamicLink_Author },
                (0, B.Xx)(
                  28 == l.type
                    ? "#EventDisplay_Share_Announcement"
                    : "#EventDisplay_Share_Event",
                  h
                ),
                n.createElement("span", { className: f().DynamicLink_Date }, _)
              ),
              n.createElement(
                "div",
                { className: f().DynamicLink_Name },
                n.createElement("div", { className: f().DynamicLink_Type }, p)
              ),
              n.createElement(
                "div",
                { className: f().DynamicLink_Description },
                g
              )
            )
          );
        }
      };
      G = (0, i.gn)([y.Pi], G);
      var x = r(29054),
        P = r(51989),
        k = r.n(P);
      let O = class extends n.Component {
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
              let t = yield b().get(e);
              this.setState({ bLoadedMetaData: !0, data: t.data });
            } catch (e) {
              this.setState({ bError: !0 }),
                console.error(
                  "SketchFabEmbed failed to load: " + (0, I.l)(e).strErrorMsg
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
                  className: k().dynamiclink_box,
                  onClick: this.OnSketchFabClick,
                },
                n.createElement("span", null, e),
                n.createElement(
                  "span",
                  null,
                  (0, B.Xx)("#EventDisplay_SketchFab_Error_Network")
                )
              )
            : this.state.bSummaryMode
            ? n.createElement(
                "div",
                {
                  className: k().dynamiclink_box,
                  onClick: this.OnSketchFabClick,
                },
                Boolean(this.state.bLoadedMetaData)
                  ? n.createElement(
                      n.Fragment,
                      null,
                      n.createElement("img", {
                        className: k().dynamiclink_preview,
                        src: this.state.data.thumbnail_url,
                      }),
                      n.createElement("img", {
                        className: k().sketchfab_play_overlay_image,
                      }),
                      n.createElement(
                        "div",
                        { className: k().dynamiclink_content },
                        n.createElement(
                          "div",
                          { className: k().dynamiclink_name },
                          n.createElement(
                            "span",
                            { className: k().dynamiclink_type },
                            (0, B.Xx)("#EventDisplay_Sketchfab")
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
                          { className: k().dynamiclink_author },
                          this.state.data.author_name
                        )
                      )
                    )
                  : n.createElement(w.V, { size: "medium" })
              )
            : n.createElement(
                "div",
                { className: k().sketchfabmodelembedded },
                n.createElement("iframe", {
                  className: k().sketchfabmodelembedded,
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
      (0, i.gn)([u.ak], O.prototype, "OnSketchFabClick", null),
        (O = (0, i.gn)([y.Pi], O));
      var W = r(44421),
        j = r(43658),
        X = r(84343),
        V = r(49245),
        Z = r.n(V);
      function H(e) {
        const { defid: t, url: r } = e,
          i = (0, j.O)(t);
        if (!i || !i.community_item_data) return null;
        const a = i.appid,
          s = i.community_item_data.item_image_large,
          o = `${S.De.MEDIA_CDN_COMMUNITY_URL}images/items/${a}/${s}`;
        return (
          "dev" == S.De.WEB_UNIVERSE &&
            console.log("reward itemdef", (0, v.ZN)(i)),
          n.createElement(
            "div",
            { className: Z().Ctn },
            n.createElement(
              X.HP,
              { toolTipContent: i.community_item_data.item_description },
              n.createElement("img", {
                src: o,
                alt: i.community_item_data.item_title,
              })
            )
          )
        );
      }
      const Q =
          /(?:steampowered\.com|valve\.org\/store|steam\.dev\/store|store\.\S+\.steam\.dev|store\.steamchina\.com)\/(app|bundle|sub)\/(\d+)/i,
        q =
          /(?:steamcommunity\.com|valve\.org\/community|steam\.dev\/community|community\.\S+\.steam\.dev|my\.steamchina\.com)\/(games|app|ogg|gid|groups)\/(\w+)\/(?:announcements\/detail|partnerevents\/view_old_announcement)\/(\d+)/i,
        Y =
          /(?:steamcommunity\.com|valve\.org\/community|community\.\S+\.steam\.dev|steam\.dev\/community)\/(games|app|ogg|gid|groups)\/(\w+)\/partnerevents\/view\/(\d+)/i,
        $ =
          /(?:steampowered\.com|valve\.org\/store|store\.\S+\.steam\.dev|steam\.dev\/store|store\.steamchina\.com)\/(?:news|newshub)\/(group|app)\/(\w+)\/view\/(\d+)/i,
        K = /:\/\/medal.tv\/(?:clip|clips)\/([a-z0-9]+)/i,
        J = /sketchfab.com\/(?:models\/(?:[^\/\s]+-)?)([a-z0-9]{32})/i,
        ee = /twitter\.com\/(\w+)(\/?)$/i,
        te = /twitter\.com\/hashtag\/(\w+)(\/?)$/i,
        re = /twitch\.tv\/(\w+)(\/?)$/i,
        ie =
          /(?:steamcommunity\.com|valve\.org\/community|steam\.dev\/community|community\.\S+\.steam\.dev|my\.steamchina\.com)\/id\/(\w+)(\/?)$/i,
        ne =
          /(?:steampowered\.com|valve\.org\/store|steam\.dev\/store|store\.steamchina\.com)\/points\/shop\/.*reward\/(\d+)$/i;
      let ae = null;
      function se(e, t) {
        if ((0, S.h4)()) return null;
        const r = (0, p.S6)(e);
        return void 0 !== (null == r ? void 0 : r.strVideoID)
          ? n.createElement(h.O, {
              videoID: r.strVideoID,
              nStartSeconds: r.nStartSeconds,
              classNameAlign: "",
              classNameSize: f().sizeFull,
              bShowVideoImmediately: !1,
            })
          : (0, N.hF)(e, null == t ? void 0 : t.event);
      }
      function oe(e, t) {
        if ((0, S.h4)()) return null;
        const r = new RegExp(K).exec(e);
        if (r && r.length > 1) {
          const e = r[1];
          if ((null == e ? void 0 : e.length) > 0) {
            let r =
              "https://medal.tv/clip/" +
              e +
              "/?autoplay=0&donate=0" +
              (t && t.event ? "&steamappid=" + t.event.appid : "");
            return n.createElement("iframe", {
              className: x.MedalTVWidget,
              src: r,
              frameBorder: 0,
              allow: "autoplay",
            });
          }
        }
        return (0, N.hF)(e, null == t ? void 0 : t.event);
      }
      function le(e, t) {
        let r = new RegExp(J).exec(e);
        if (r && r.length > 1) {
          let e = r[1];
          if (e && e.length > 1) return n.createElement(O, { modelID: e });
        }
        return (0, N.hF)(e, null == t ? void 0 : t.event);
      }
      function me(e, t) {
        const r = e.split("?");
        let i;
        if (2 == r.length) {
          const e = new URLSearchParams(r[1]);
          e.has("id") && (i = e.get("id"));
        }
        return void 0 !== i
          ? n.createElement(R, { sharedFileID: i })
          : (0, N.hF)(e, null == t ? void 0 : t.event);
      }
      function ce(e) {
        let t = (0, A.FM)(e).toLocaleLowerCase(),
          r = (0, A.FM)(S.De.STORE_BASE_URL),
          i = (0, A.FM)(S.De.COMMUNITY_BASE_URL);
        return (
          t == r ||
          t == i ||
          ("dev" === S.De.WEB_UNIVERSE &&
            (t.includes("steampowered.com") ||
              t.includes("steamcommunity.com") ||
              t.includes("steamchina.com")))
        );
      }
      function de(e, t) {
        if (ce(e)) {
          let t = new RegExp(Q).exec(e);
          if (t && t.length > 2) {
            let e = t[1],
              r = Number(t[2]);
            if (r > 0) {
              let t = "bundle" == e ? "bundle" : "sub" == e ? "sub" : "game";
              return n.createElement(
                "div",
                {
                  className: (0, M.Z)(
                    x.AppSummaryWidgetCtn,
                    "AppSummaryWidgetCtn"
                  ),
                },
                n.createElement(W.ju, {
                  id: r,
                  type: t,
                  bAllowTwoLinesForHeader: !0,
                })
              );
            }
          }
        }
        return (0, N.hF)(e, null == t ? void 0 : t.event);
      }
      function ue(e, t) {
        if (ce(e)) {
          const t = new RegExp(ne).exec(e);
          if (t && t.length > 1) {
            const r = Number(t[1]);
            if (r > 0)
              return n.createElement(
                "div",
                { className: (0, M.Z)(x.LoyaltyRewardCtn) },
                n.createElement(H, { defid: r, url: e })
              );
          }
        }
        return (0, N.hF)(e, null == t ? void 0 : t.event);
      }
      function pe(e, t) {
        if (ce(e)) {
          let t = new RegExp(q).exec(e);
          if (t && t.length > 2) {
            let r, i, a, s;
            "gid" == t[1]
              ? (i = new g.K(t[2]))
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
        return (0, N.hF)(e, null == t ? void 0 : t.event);
      }
      function ge(e, t) {
        return be($, e, t);
      }
      function he(e, t) {
        return be(Y, e, t);
      }
      function _e(e, t) {
        return (0, S.h4)() ? null : Ce(e, n.createElement(F.tLe, null), "@", t);
      }
      function fe(e, t) {
        return (0, S.h4)() ? null : Ce(e, n.createElement(F.tLe, null), "#", t);
      }
      function ye(e, t) {
        return (0, S.h4)()
          ? null
          : Ce(e, n.createElement(F.Lk$, null), void 0, t);
      }
      function Be(e, t) {
        return Ce(e, n.createElement(F.ui7, null), void 0, t);
      }
      function Ce(e, t, r, i) {
        let a;
        const s = e.endsWith("/") ? e.length - 1 : e.length,
          o = e.lastIndexOf("/", s - 1);
        -1 != o && o + 1 < e.length && (a = e.substring(o + 1, s)),
          r && a && (a = r + a);
        const l = (0, N.hF)(e, null == i ? void 0 : i.event, null != a ? a : e);
        return n.createElement(
          "div",
          { className: x.SocialLink },
          n.createElement("div", { className: x.SocialIcon }, t),
          l
        );
      }
      function be(e, t, r) {
        if (ce(t)) {
          let r = new RegExp(e).exec(t);
          if (r && r.length > 2) {
            let e, i, a, s;
            "gid" == r[1]
              ? (i = new g.K(r[2]))
              : "group" == r[1]
              ? (i = g.K.InitFromClanID(Number.parseInt(r[2])))
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
        return (0, N.hF)(t, null == r ? void 0 : r.event);
      }
      r(53143);
      var Se = r(45878),
        ve = r(29063);
      r(6681);
      const we = Se.Message;
      class Ee extends we {
        constructor(e = null) {
          super(),
            Ee.prototype.operation || ve.aR(Ee.M()),
            we.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            Ee.sm_m ||
              (Ee.sm_m = {
                proto: Ee,
                fields: {
                  operation: { n: 1, br: ve.FE.readEnum, bw: ve.Xc.writeEnum },
                  machine_name: {
                    n: 2,
                    br: ve.FE.readString,
                    bw: ve.Xc.writeString,
                  },
                  client_id: {
                    n: 3,
                    br: ve.FE.readUint64String,
                    bw: ve.Xc.writeUint64String,
                  },
                  time_last_updated: {
                    n: 4,
                    br: ve.FE.readUint32,
                    bw: ve.Xc.writeUint32,
                  },
                },
              }),
            Ee.sm_m
          );
        }
        static MBF() {
          return Ee.sm_mbf || (Ee.sm_mbf = ve.Bh(Ee.M())), Ee.sm_mbf;
        }
        toObject(e = !1) {
          return Ee.toObject(e, this);
        }
        static toObject(e, t) {
          return ve.TA(Ee.M(), e, t);
        }
        static fromObject(e) {
          return ve.aD(Ee.M(), e);
        }
        static deserializeBinary(e) {
          let t = new Se.BinaryReader(e),
            r = new Ee();
          return Ee.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return ve.F(Ee.MBF(), e, t);
        }
        serializeBinary() {
          var e = new Se.BinaryWriter();
          return Ee.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          ve.l2(Ee.M(), e, t);
        }
        serializeBase64String() {
          var e = new Se.BinaryWriter();
          return Ee.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCloud_PendingRemoteOperation";
        }
      }
      const Ie = Se.Message;
      class Re extends Ie {
        constructor(e = null) {
          super(),
            Re.prototype.appid || ve.aR(Re.M()),
            Ie.initialize(this, e, 0, -1, [9], null);
        }
        static M() {
          return (
            Re.sm_m ||
              (Re.sm_m = {
                proto: Re,
                fields: {
                  appid: { n: 1, br: ve.FE.readUint32, bw: ve.Xc.writeUint32 },
                  ugcid: {
                    n: 2,
                    br: ve.FE.readUint64String,
                    bw: ve.Xc.writeUint64String,
                  },
                  filename: {
                    n: 3,
                    br: ve.FE.readString,
                    bw: ve.Xc.writeString,
                  },
                  timestamp: {
                    n: 4,
                    br: ve.FE.readUint64String,
                    bw: ve.Xc.writeUint64String,
                  },
                  file_size: {
                    n: 5,
                    br: ve.FE.readUint32,
                    bw: ve.Xc.writeUint32,
                  },
                  url: { n: 6, br: ve.FE.readString, bw: ve.Xc.writeString },
                  steamid_creator: {
                    n: 7,
                    br: ve.FE.readFixed64String,
                    bw: ve.Xc.writeFixed64String,
                  },
                  flags: { n: 8, br: ve.FE.readUint32, bw: ve.Xc.writeUint32 },
                  platforms_to_sync: {
                    n: 9,
                    r: !0,
                    q: !0,
                    br: ve.FE.readString,
                    bw: ve.Xc.writeRepeatedString,
                  },
                  file_sha: {
                    n: 10,
                    br: ve.FE.readString,
                    bw: ve.Xc.writeString,
                  },
                },
              }),
            Re.sm_m
          );
        }
        static MBF() {
          return Re.sm_mbf || (Re.sm_mbf = ve.Bh(Re.M())), Re.sm_mbf;
        }
        toObject(e = !1) {
          return Re.toObject(e, this);
        }
        static toObject(e, t) {
          return ve.TA(Re.M(), e, t);
        }
        static fromObject(e) {
          return ve.aD(Re.M(), e);
        }
        static deserializeBinary(e) {
          let t = new Se.BinaryReader(e),
            r = new Re();
          return Re.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return ve.F(Re.MBF(), e, t);
        }
        serializeBinary() {
          var e = new Se.BinaryWriter();
          return Re.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          ve.l2(Re.M(), e, t);
        }
        serializeBase64String() {
          var e = new Se.BinaryWriter();
          return Re.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCloud_UserFile";
        }
      }
      class Fe extends Ie {
        constructor(e = null) {
          super(),
            Fe.prototype.server_url || ve.aR(Fe.M()),
            Ie.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            Fe.sm_m ||
              (Fe.sm_m = {
                proto: Fe,
                fields: {
                  server_url: {
                    n: 1,
                    br: ve.FE.readString,
                    bw: ve.Xc.writeString,
                  },
                },
              }),
            Fe.sm_m
          );
        }
        static MBF() {
          return Fe.sm_mbf || (Fe.sm_mbf = ve.Bh(Fe.M())), Fe.sm_mbf;
        }
        toObject(e = !1) {
          return Fe.toObject(e, this);
        }
        static toObject(e, t) {
          return ve.TA(Fe.M(), e, t);
        }
        static fromObject(e) {
          return ve.aD(Fe.M(), e);
        }
        static deserializeBinary(e) {
          let t = new Se.BinaryReader(e),
            r = new Fe();
          return Fe.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return ve.F(Fe.MBF(), e, t);
        }
        serializeBinary() {
          var e = new Se.BinaryWriter();
          return Fe.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          ve.l2(Fe.M(), e, t);
        }
        serializeBase64String() {
          var e = new Se.BinaryWriter();
          return Fe.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCloud_GetUploadServerInfo_Response";
        }
      }
      class Me extends Ie {
        constructor(e = null) {
          super(),
            Me.prototype.ugcid || ve.aR(Me.M()),
            Ie.initialize(this, e, 0, -1, [6], null);
        }
        static M() {
          return (
            Me.sm_m ||
              (Me.sm_m = {
                proto: Me,
                fields: {
                  ugcid: {
                    n: 1,
                    br: ve.FE.readFixed64String,
                    bw: ve.Xc.writeFixed64String,
                  },
                  timestamp: {
                    n: 2,
                    br: ve.FE.readFixed32,
                    bw: ve.Xc.writeFixed32,
                  },
                  url_host: {
                    n: 3,
                    br: ve.FE.readString,
                    bw: ve.Xc.writeString,
                  },
                  url_path: {
                    n: 4,
                    br: ve.FE.readString,
                    bw: ve.Xc.writeString,
                  },
                  use_https: { n: 5, br: ve.FE.readBool, bw: ve.Xc.writeBool },
                  request_headers: { n: 6, c: Ae, r: !0, q: !0 },
                },
              }),
            Me.sm_m
          );
        }
        static MBF() {
          return Me.sm_mbf || (Me.sm_mbf = ve.Bh(Me.M())), Me.sm_mbf;
        }
        toObject(e = !1) {
          return Me.toObject(e, this);
        }
        static toObject(e, t) {
          return ve.TA(Me.M(), e, t);
        }
        static fromObject(e) {
          return ve.aD(Me.M(), e);
        }
        static deserializeBinary(e) {
          let t = new Se.BinaryReader(e),
            r = new Me();
          return Me.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return ve.F(Me.MBF(), e, t);
        }
        serializeBinary() {
          var e = new Se.BinaryWriter();
          return Me.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          ve.l2(Me.M(), e, t);
        }
        serializeBase64String() {
          var e = new Se.BinaryWriter();
          return Me.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCloud_BeginHTTPUpload_Response";
        }
      }
      class Ae extends Ie {
        constructor(e = null) {
          super(),
            Ae.prototype.name || ve.aR(Ae.M()),
            Ie.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            Ae.sm_m ||
              (Ae.sm_m = {
                proto: Ae,
                fields: {
                  name: { n: 1, br: ve.FE.readString, bw: ve.Xc.writeString },
                  value: { n: 2, br: ve.FE.readString, bw: ve.Xc.writeString },
                },
              }),
            Ae.sm_m
          );
        }
        static MBF() {
          return Ae.sm_mbf || (Ae.sm_mbf = ve.Bh(Ae.M())), Ae.sm_mbf;
        }
        toObject(e = !1) {
          return Ae.toObject(e, this);
        }
        static toObject(e, t) {
          return ve.TA(Ae.M(), e, t);
        }
        static fromObject(e) {
          return ve.aD(Ae.M(), e);
        }
        static deserializeBinary(e) {
          let t = new Se.BinaryReader(e),
            r = new Ae();
          return Ae.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return ve.F(Ae.MBF(), e, t);
        }
        serializeBinary() {
          var e = new Se.BinaryWriter();
          return Ae.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          ve.l2(Ae.M(), e, t);
        }
        serializeBase64String() {
          var e = new Se.BinaryWriter();
          return Ae.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCloud_BeginHTTPUpload_Response_HTTPHeaders";
        }
      }
      class De extends Ie {
        constructor(e = null) {
          super(),
            De.prototype.file_committed || ve.aR(De.M()),
            Ie.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            De.sm_m ||
              (De.sm_m = {
                proto: De,
                fields: {
                  file_committed: {
                    n: 1,
                    br: ve.FE.readBool,
                    bw: ve.Xc.writeBool,
                  },
                },
              }),
            De.sm_m
          );
        }
        static MBF() {
          return De.sm_mbf || (De.sm_mbf = ve.Bh(De.M())), De.sm_mbf;
        }
        toObject(e = !1) {
          return De.toObject(e, this);
        }
        static toObject(e, t) {
          return ve.TA(De.M(), e, t);
        }
        static fromObject(e) {
          return ve.aD(De.M(), e);
        }
        static deserializeBinary(e) {
          let t = new Se.BinaryReader(e),
            r = new De();
          return De.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return ve.F(De.MBF(), e, t);
        }
        serializeBinary() {
          var e = new Se.BinaryWriter();
          return De.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          ve.l2(De.M(), e, t);
        }
        serializeBase64String() {
          var e = new Se.BinaryWriter();
          return De.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCloud_CommitHTTPUpload_Response";
        }
      }
      class Ue extends Ie {
        constructor(e = null) {
          super(),
            Ue.prototype.storage_system || ve.aR(Ue.M()),
            Ie.initialize(this, e, 0, -1, [7], null);
        }
        static M() {
          return (
            Ue.sm_m ||
              (Ue.sm_m = {
                proto: Ue,
                fields: {
                  storage_system: {
                    n: 1,
                    br: ve.FE.readEnum,
                    bw: ve.Xc.writeEnum,
                  },
                  ugcid: {
                    n: 2,
                    br: ve.FE.readFixed64String,
                    bw: ve.Xc.writeFixed64String,
                  },
                  timestamp: {
                    n: 3,
                    br: ve.FE.readFixed32,
                    bw: ve.Xc.writeFixed32,
                  },
                  url_host: {
                    n: 4,
                    br: ve.FE.readString,
                    bw: ve.Xc.writeString,
                  },
                  url_path: {
                    n: 5,
                    br: ve.FE.readString,
                    bw: ve.Xc.writeString,
                  },
                  use_https: { n: 6, br: ve.FE.readBool, bw: ve.Xc.writeBool },
                  request_headers: { n: 7, c: ze, r: !0, q: !0 },
                },
              }),
            Ue.sm_m
          );
        }
        static MBF() {
          return Ue.sm_mbf || (Ue.sm_mbf = ve.Bh(Ue.M())), Ue.sm_mbf;
        }
        toObject(e = !1) {
          return Ue.toObject(e, this);
        }
        static toObject(e, t) {
          return ve.TA(Ue.M(), e, t);
        }
        static fromObject(e) {
          return ve.aD(Ue.M(), e);
        }
        static deserializeBinary(e) {
          let t = new Se.BinaryReader(e),
            r = new Ue();
          return Ue.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return ve.F(Ue.MBF(), e, t);
        }
        serializeBinary() {
          var e = new Se.BinaryWriter();
          return Ue.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          ve.l2(Ue.M(), e, t);
        }
        serializeBase64String() {
          var e = new Se.BinaryWriter();
          return Ue.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCloud_BeginUGCUpload_Response";
        }
      }
      class ze extends Ie {
        constructor(e = null) {
          super(),
            ze.prototype.name || ve.aR(ze.M()),
            Ie.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            ze.sm_m ||
              (ze.sm_m = {
                proto: ze,
                fields: {
                  name: { n: 1, br: ve.FE.readString, bw: ve.Xc.writeString },
                  value: { n: 2, br: ve.FE.readString, bw: ve.Xc.writeString },
                },
              }),
            ze.sm_m
          );
        }
        static MBF() {
          return ze.sm_mbf || (ze.sm_mbf = ve.Bh(ze.M())), ze.sm_mbf;
        }
        toObject(e = !1) {
          return ze.toObject(e, this);
        }
        static toObject(e, t) {
          return ve.TA(ze.M(), e, t);
        }
        static fromObject(e) {
          return ve.aD(ze.M(), e);
        }
        static deserializeBinary(e) {
          let t = new Se.BinaryReader(e),
            r = new ze();
          return ze.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return ve.F(ze.MBF(), e, t);
        }
        serializeBinary() {
          var e = new Se.BinaryWriter();
          return ze.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          ve.l2(ze.M(), e, t);
        }
        serializeBase64String() {
          var e = new Se.BinaryWriter();
          return ze.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCloud_BeginUGCUpload_Response_HTTPHeaders";
        }
      }
      class Te extends Ie {
        constructor(e = null) {
          super(),
            Te.prototype.file_committed || ve.aR(Te.M()),
            Ie.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            Te.sm_m ||
              (Te.sm_m = {
                proto: Te,
                fields: {
                  file_committed: {
                    n: 1,
                    br: ve.FE.readBool,
                    bw: ve.Xc.writeBool,
                  },
                },
              }),
            Te.sm_m
          );
        }
        static MBF() {
          return Te.sm_mbf || (Te.sm_mbf = ve.Bh(Te.M())), Te.sm_mbf;
        }
        toObject(e = !1) {
          return Te.toObject(e, this);
        }
        static toObject(e, t) {
          return ve.TA(Te.M(), e, t);
        }
        static fromObject(e) {
          return ve.aD(Te.M(), e);
        }
        static deserializeBinary(e) {
          let t = new Se.BinaryReader(e),
            r = new Te();
          return Te.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return ve.F(Te.MBF(), e, t);
        }
        serializeBinary() {
          var e = new Se.BinaryWriter();
          return Te.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          ve.l2(Te.M(), e, t);
        }
        serializeBase64String() {
          var e = new Se.BinaryWriter();
          return Te.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCloud_CommitUGCUpload_Response";
        }
      }
      class Ne extends Ie {
        constructor(e = null) {
          super(),
            Ne.prototype.details || ve.aR(Ne.M()),
            Ie.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            Ne.sm_m ||
              (Ne.sm_m = { proto: Ne, fields: { details: { n: 1, c: Re } } }),
            Ne.sm_m
          );
        }
        static MBF() {
          return Ne.sm_mbf || (Ne.sm_mbf = ve.Bh(Ne.M())), Ne.sm_mbf;
        }
        toObject(e = !1) {
          return Ne.toObject(e, this);
        }
        static toObject(e, t) {
          return ve.TA(Ne.M(), e, t);
        }
        static fromObject(e) {
          return ve.aD(Ne.M(), e);
        }
        static deserializeBinary(e) {
          let t = new Se.BinaryReader(e),
            r = new Ne();
          return Ne.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return ve.F(Ne.MBF(), e, t);
        }
        serializeBinary() {
          var e = new Se.BinaryWriter();
          return Ne.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          ve.l2(Ne.M(), e, t);
        }
        serializeBase64String() {
          var e = new Se.BinaryWriter();
          return Ne.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCloud_GetFileDetails_Response";
        }
      }
      class Le extends Ie {
        constructor(e = null) {
          super(),
            Le.prototype.files || ve.aR(Le.M()),
            Ie.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            Le.sm_m ||
              (Le.sm_m = {
                proto: Le,
                fields: {
                  files: { n: 1, c: Re, r: !0, q: !0 },
                  total_files: {
                    n: 2,
                    br: ve.FE.readUint32,
                    bw: ve.Xc.writeUint32,
                  },
                },
              }),
            Le.sm_m
          );
        }
        static MBF() {
          return Le.sm_mbf || (Le.sm_mbf = ve.Bh(Le.M())), Le.sm_mbf;
        }
        toObject(e = !1) {
          return Le.toObject(e, this);
        }
        static toObject(e, t) {
          return ve.TA(Le.M(), e, t);
        }
        static fromObject(e) {
          return ve.aD(Le.M(), e);
        }
        static deserializeBinary(e) {
          let t = new Se.BinaryReader(e),
            r = new Le();
          return Le.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return ve.F(Le.MBF(), e, t);
        }
        serializeBinary() {
          var e = new Se.BinaryWriter();
          return Le.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          ve.l2(Le.M(), e, t);
        }
        serializeBase64String() {
          var e = new Se.BinaryWriter();
          return Le.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCloud_EnumerateUserFiles_Response";
        }
      }
      class Ge extends Ie {
        constructor(e = null) {
          super(), Ie.initialize(this, e, 0, -1, void 0, null);
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
          let t = new Se.BinaryReader(e),
            r = new Ge();
          return Ge.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new Se.BinaryWriter();
          return Ge.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new Se.BinaryWriter();
          return Ge.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCloud_Delete_Response";
        }
      }
      class xe extends Ie {
        constructor(e = null) {
          super(),
            xe.prototype.key || ve.aR(xe.M()),
            Ie.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            xe.sm_m ||
              (xe.sm_m = {
                proto: xe,
                fields: {
                  key: { n: 1, br: ve.FE.readBytes, bw: ve.Xc.writeBytes },
                  crc: { n: 2, br: ve.FE.readInt32, bw: ve.Xc.writeInt32 },
                },
              }),
            xe.sm_m
          );
        }
        static MBF() {
          return xe.sm_mbf || (xe.sm_mbf = ve.Bh(xe.M())), xe.sm_mbf;
        }
        toObject(e = !1) {
          return xe.toObject(e, this);
        }
        static toObject(e, t) {
          return ve.TA(xe.M(), e, t);
        }
        static fromObject(e) {
          return ve.aD(xe.M(), e);
        }
        static deserializeBinary(e) {
          let t = new Se.BinaryReader(e),
            r = new xe();
          return xe.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return ve.F(xe.MBF(), e, t);
        }
        serializeBinary() {
          var e = new Se.BinaryWriter();
          return xe.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          ve.l2(xe.M(), e, t);
        }
        serializeBase64String() {
          var e = new Se.BinaryWriter();
          return xe.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCloud_GetClientEncryptionKey_Response";
        }
      }
      class Pe extends Ie {
        constructor(e = null) {
          super(),
            Pe.prototype.pending_remote_operations || ve.aR(Pe.M()),
            Ie.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            Pe.sm_m ||
              (Pe.sm_m = {
                proto: Pe,
                fields: {
                  pending_remote_operations: { n: 1, c: Ee, r: !0, q: !0 },
                },
              }),
            Pe.sm_m
          );
        }
        static MBF() {
          return Pe.sm_mbf || (Pe.sm_mbf = ve.Bh(Pe.M())), Pe.sm_mbf;
        }
        toObject(e = !1) {
          return Pe.toObject(e, this);
        }
        static toObject(e, t) {
          return ve.TA(Pe.M(), e, t);
        }
        static fromObject(e) {
          return ve.aD(Pe.M(), e);
        }
        static deserializeBinary(e) {
          let t = new Se.BinaryReader(e),
            r = new Pe();
          return Pe.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return ve.F(Pe.MBF(), e, t);
        }
        serializeBinary() {
          var e = new Se.BinaryWriter();
          return Pe.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          ve.l2(Pe.M(), e, t);
        }
        serializeBase64String() {
          var e = new Se.BinaryWriter();
          return Pe.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCloud_AppLaunchIntent_Response";
        }
      }
      class ke extends Ie {
        constructor(e = null) {
          super(),
            ke.prototype.existing_files || ve.aR(ke.M()),
            Ie.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            ke.sm_m ||
              (ke.sm_m = {
                proto: ke,
                fields: {
                  existing_files: {
                    n: 1,
                    br: ve.FE.readUint32,
                    bw: ve.Xc.writeUint32,
                  },
                  existing_bytes: {
                    n: 2,
                    br: ve.FE.readUint64String,
                    bw: ve.Xc.writeUint64String,
                  },
                  max_num_files: {
                    n: 3,
                    br: ve.FE.readUint32,
                    bw: ve.Xc.writeUint32,
                  },
                  max_num_bytes: {
                    n: 4,
                    br: ve.FE.readUint64String,
                    bw: ve.Xc.writeUint64String,
                  },
                },
              }),
            ke.sm_m
          );
        }
        static MBF() {
          return ke.sm_mbf || (ke.sm_mbf = ve.Bh(ke.M())), ke.sm_mbf;
        }
        toObject(e = !1) {
          return ke.toObject(e, this);
        }
        static toObject(e, t) {
          return ve.TA(ke.M(), e, t);
        }
        static fromObject(e) {
          return ve.aD(ke.M(), e);
        }
        static deserializeBinary(e) {
          let t = new Se.BinaryReader(e),
            r = new ke();
          return ke.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return ve.F(ke.MBF(), e, t);
        }
        serializeBinary() {
          var e = new Se.BinaryWriter();
          return ke.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          ve.l2(ke.M(), e, t);
        }
        serializeBase64String() {
          var e = new Se.BinaryWriter();
          return ke.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCloud_ClientGetAppQuotaUsage_Response";
        }
      }
      class Oe extends Ie {
        constructor(e = null) {
          super(),
            Oe.prototype.file_name || ve.aR(Oe.M()),
            Ie.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            Oe.sm_m ||
              (Oe.sm_m = {
                proto: Oe,
                fields: {
                  file_name: {
                    n: 1,
                    br: ve.FE.readString,
                    bw: ve.Xc.writeString,
                  },
                  sha_file: { n: 2, br: ve.FE.readBytes, bw: ve.Xc.writeBytes },
                  time_stamp: {
                    n: 3,
                    br: ve.FE.readUint64String,
                    bw: ve.Xc.writeUint64String,
                  },
                  raw_file_size: {
                    n: 4,
                    br: ve.FE.readUint32,
                    bw: ve.Xc.writeUint32,
                  },
                  persist_state: {
                    n: 5,
                    br: ve.FE.readEnum,
                    bw: ve.Xc.writeEnum,
                  },
                  platforms_to_sync: {
                    n: 6,
                    br: ve.FE.readUint32,
                    bw: ve.Xc.writeUint32,
                  },
                  path_prefix_index: {
                    n: 7,
                    br: ve.FE.readUint32,
                    bw: ve.Xc.writeUint32,
                  },
                  machine_name_index: {
                    n: 8,
                    br: ve.FE.readUint32,
                    bw: ve.Xc.writeUint32,
                  },
                },
              }),
            Oe.sm_m
          );
        }
        static MBF() {
          return Oe.sm_mbf || (Oe.sm_mbf = ve.Bh(Oe.M())), Oe.sm_mbf;
        }
        toObject(e = !1) {
          return Oe.toObject(e, this);
        }
        static toObject(e, t) {
          return ve.TA(Oe.M(), e, t);
        }
        static fromObject(e) {
          return ve.aD(Oe.M(), e);
        }
        static deserializeBinary(e) {
          let t = new Se.BinaryReader(e),
            r = new Oe();
          return Oe.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return ve.F(Oe.MBF(), e, t);
        }
        serializeBinary() {
          var e = new Se.BinaryWriter();
          return Oe.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          ve.l2(Oe.M(), e, t);
        }
        serializeBase64String() {
          var e = new Se.BinaryWriter();
          return Oe.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCloud_AppFileInfo";
        }
      }
      class We extends Ie {
        constructor(e = null) {
          super(),
            We.prototype.current_change_number || ve.aR(We.M()),
            Ie.initialize(this, e, 0, -1, [2, 4, 5], null);
        }
        static M() {
          return (
            We.sm_m ||
              (We.sm_m = {
                proto: We,
                fields: {
                  current_change_number: {
                    n: 1,
                    br: ve.FE.readUint64String,
                    bw: ve.Xc.writeUint64String,
                  },
                  files: { n: 2, c: Oe, r: !0, q: !0 },
                  is_only_delta: {
                    n: 3,
                    br: ve.FE.readBool,
                    bw: ve.Xc.writeBool,
                  },
                  path_prefixes: {
                    n: 4,
                    r: !0,
                    q: !0,
                    br: ve.FE.readString,
                    bw: ve.Xc.writeRepeatedString,
                  },
                  machine_names: {
                    n: 5,
                    r: !0,
                    q: !0,
                    br: ve.FE.readString,
                    bw: ve.Xc.writeRepeatedString,
                  },
                  app_buildid_hwm: {
                    n: 6,
                    br: ve.FE.readUint64String,
                    bw: ve.Xc.writeUint64String,
                  },
                },
              }),
            We.sm_m
          );
        }
        static MBF() {
          return We.sm_mbf || (We.sm_mbf = ve.Bh(We.M())), We.sm_mbf;
        }
        toObject(e = !1) {
          return We.toObject(e, this);
        }
        static toObject(e, t) {
          return ve.TA(We.M(), e, t);
        }
        static fromObject(e) {
          return ve.aD(We.M(), e);
        }
        static deserializeBinary(e) {
          let t = new Se.BinaryReader(e),
            r = new We();
          return We.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return ve.F(We.MBF(), e, t);
        }
        serializeBinary() {
          var e = new Se.BinaryWriter();
          return We.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          ve.l2(We.M(), e, t);
        }
        serializeBase64String() {
          var e = new Se.BinaryWriter();
          return We.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCloud_GetAppFileChangelist_Response";
        }
      }
      class je extends Ie {
        constructor(e = null) {
          super(),
            je.prototype.url_host || ve.aR(je.M()),
            Ie.initialize(this, e, 0, -1, [5], null);
        }
        static M() {
          return (
            je.sm_m ||
              (je.sm_m = {
                proto: je,
                fields: {
                  url_host: {
                    n: 1,
                    br: ve.FE.readString,
                    bw: ve.Xc.writeString,
                  },
                  url_path: {
                    n: 2,
                    br: ve.FE.readString,
                    bw: ve.Xc.writeString,
                  },
                  use_https: { n: 3, br: ve.FE.readBool, bw: ve.Xc.writeBool },
                  http_method: {
                    n: 4,
                    br: ve.FE.readInt32,
                    bw: ve.Xc.writeInt32,
                  },
                  request_headers: { n: 5, c: Xe, r: !0, q: !0 },
                  block_offset: {
                    n: 6,
                    br: ve.FE.readUint64String,
                    bw: ve.Xc.writeUint64String,
                  },
                  block_length: {
                    n: 7,
                    br: ve.FE.readUint32,
                    bw: ve.Xc.writeUint32,
                  },
                  explicit_body_data: {
                    n: 8,
                    br: ve.FE.readBytes,
                    bw: ve.Xc.writeBytes,
                  },
                  may_parallelize: {
                    n: 9,
                    br: ve.FE.readBool,
                    bw: ve.Xc.writeBool,
                  },
                },
              }),
            je.sm_m
          );
        }
        static MBF() {
          return je.sm_mbf || (je.sm_mbf = ve.Bh(je.M())), je.sm_mbf;
        }
        toObject(e = !1) {
          return je.toObject(e, this);
        }
        static toObject(e, t) {
          return ve.TA(je.M(), e, t);
        }
        static fromObject(e) {
          return ve.aD(je.M(), e);
        }
        static deserializeBinary(e) {
          let t = new Se.BinaryReader(e),
            r = new je();
          return je.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return ve.F(je.MBF(), e, t);
        }
        serializeBinary() {
          var e = new Se.BinaryWriter();
          return je.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          ve.l2(je.M(), e, t);
        }
        serializeBase64String() {
          var e = new Se.BinaryWriter();
          return je.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "ClientCloudFileUploadBlockDetails";
        }
      }
      class Xe extends Ie {
        constructor(e = null) {
          super(),
            Xe.prototype.name || ve.aR(Xe.M()),
            Ie.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            Xe.sm_m ||
              (Xe.sm_m = {
                proto: Xe,
                fields: {
                  name: { n: 1, br: ve.FE.readString, bw: ve.Xc.writeString },
                  value: { n: 2, br: ve.FE.readString, bw: ve.Xc.writeString },
                },
              }),
            Xe.sm_m
          );
        }
        static MBF() {
          return Xe.sm_mbf || (Xe.sm_mbf = ve.Bh(Xe.M())), Xe.sm_mbf;
        }
        toObject(e = !1) {
          return Xe.toObject(e, this);
        }
        static toObject(e, t) {
          return ve.TA(Xe.M(), e, t);
        }
        static fromObject(e) {
          return ve.aD(Xe.M(), e);
        }
        static deserializeBinary(e) {
          let t = new Se.BinaryReader(e),
            r = new Xe();
          return Xe.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return ve.F(Xe.MBF(), e, t);
        }
        serializeBinary() {
          var e = new Se.BinaryWriter();
          return Xe.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          ve.l2(Xe.M(), e, t);
        }
        serializeBase64String() {
          var e = new Se.BinaryWriter();
          return Xe.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "ClientCloudFileUploadBlockDetails_HTTPHeaders";
        }
      }
      class Ve extends Ie {
        constructor(e = null) {
          super(),
            Ve.prototype.batch_id || ve.aR(Ve.M()),
            Ie.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            Ve.sm_m ||
              (Ve.sm_m = {
                proto: Ve,
                fields: {
                  batch_id: {
                    n: 1,
                    br: ve.FE.readUint64String,
                    bw: ve.Xc.writeUint64String,
                  },
                  app_change_number: {
                    n: 4,
                    br: ve.FE.readUint64String,
                    bw: ve.Xc.writeUint64String,
                  },
                },
              }),
            Ve.sm_m
          );
        }
        static MBF() {
          return Ve.sm_mbf || (Ve.sm_mbf = ve.Bh(Ve.M())), Ve.sm_mbf;
        }
        toObject(e = !1) {
          return Ve.toObject(e, this);
        }
        static toObject(e, t) {
          return ve.TA(Ve.M(), e, t);
        }
        static fromObject(e) {
          return ve.aD(Ve.M(), e);
        }
        static deserializeBinary(e) {
          let t = new Se.BinaryReader(e),
            r = new Ve();
          return Ve.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return ve.F(Ve.MBF(), e, t);
        }
        serializeBinary() {
          var e = new Se.BinaryWriter();
          return Ve.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          ve.l2(Ve.M(), e, t);
        }
        serializeBase64String() {
          var e = new Se.BinaryWriter();
          return Ve.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCloud_BeginAppUploadBatch_Response";
        }
      }
      class Ze extends Ie {
        constructor(e = null) {
          super(), Ie.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return Ze.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new Ze();
        }
        static deserializeBinary(e) {
          let t = new Se.BinaryReader(e),
            r = new Ze();
          return Ze.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new Se.BinaryWriter();
          return Ze.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new Se.BinaryWriter();
          return Ze.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCloud_CompleteAppUploadBatch_Response";
        }
      }
      class He extends Ie {
        constructor(e = null) {
          super(),
            He.prototype.appid || ve.aR(He.M()),
            Ie.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            He.sm_m ||
              (He.sm_m = {
                proto: He,
                fields: {
                  appid: { n: 1, br: ve.FE.readUint32, bw: ve.Xc.writeUint32 },
                  app_change_number: {
                    n: 2,
                    br: ve.FE.readUint64String,
                    bw: ve.Xc.writeUint64String,
                  },
                },
              }),
            He.sm_m
          );
        }
        static MBF() {
          return He.sm_mbf || (He.sm_mbf = ve.Bh(He.M())), He.sm_mbf;
        }
        toObject(e = !1) {
          return He.toObject(e, this);
        }
        static toObject(e, t) {
          return ve.TA(He.M(), e, t);
        }
        static fromObject(e) {
          return ve.aD(He.M(), e);
        }
        static deserializeBinary(e) {
          let t = new Se.BinaryReader(e),
            r = new He();
          return He.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return ve.F(He.MBF(), e, t);
        }
        serializeBinary() {
          var e = new Se.BinaryWriter();
          return He.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          ve.l2(He.M(), e, t);
        }
        serializeBase64String() {
          var e = new Se.BinaryWriter();
          return He.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCloud_AppCloudStateChange_Notification";
        }
      }
      class Qe extends Ie {
        constructor(e = null) {
          super(),
            Qe.prototype.encrypt_file || ve.aR(Qe.M()),
            Ie.initialize(this, e, 0, -1, [2], null);
        }
        static M() {
          return (
            Qe.sm_m ||
              (Qe.sm_m = {
                proto: Qe,
                fields: {
                  encrypt_file: {
                    n: 1,
                    br: ve.FE.readBool,
                    bw: ve.Xc.writeBool,
                  },
                  block_requests: { n: 2, c: je, r: !0, q: !0 },
                },
              }),
            Qe.sm_m
          );
        }
        static MBF() {
          return Qe.sm_mbf || (Qe.sm_mbf = ve.Bh(Qe.M())), Qe.sm_mbf;
        }
        toObject(e = !1) {
          return Qe.toObject(e, this);
        }
        static toObject(e, t) {
          return ve.TA(Qe.M(), e, t);
        }
        static fromObject(e) {
          return ve.aD(Qe.M(), e);
        }
        static deserializeBinary(e) {
          let t = new Se.BinaryReader(e),
            r = new Qe();
          return Qe.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return ve.F(Qe.MBF(), e, t);
        }
        serializeBinary() {
          var e = new Se.BinaryWriter();
          return Qe.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          ve.l2(Qe.M(), e, t);
        }
        serializeBase64String() {
          var e = new Se.BinaryWriter();
          return Qe.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCloud_ClientBeginFileUpload_Response";
        }
      }
      class qe extends Ie {
        constructor(e = null) {
          super(),
            qe.prototype.file_committed || ve.aR(qe.M()),
            Ie.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            qe.sm_m ||
              (qe.sm_m = {
                proto: qe,
                fields: {
                  file_committed: {
                    n: 1,
                    br: ve.FE.readBool,
                    bw: ve.Xc.writeBool,
                  },
                },
              }),
            qe.sm_m
          );
        }
        static MBF() {
          return qe.sm_mbf || (qe.sm_mbf = ve.Bh(qe.M())), qe.sm_mbf;
        }
        toObject(e = !1) {
          return qe.toObject(e, this);
        }
        static toObject(e, t) {
          return ve.TA(qe.M(), e, t);
        }
        static fromObject(e) {
          return ve.aD(qe.M(), e);
        }
        static deserializeBinary(e) {
          let t = new Se.BinaryReader(e),
            r = new qe();
          return qe.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return ve.F(qe.MBF(), e, t);
        }
        serializeBinary() {
          var e = new Se.BinaryWriter();
          return qe.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          ve.l2(qe.M(), e, t);
        }
        serializeBase64String() {
          var e = new Se.BinaryWriter();
          return qe.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCloud_ClientCommitFileUpload_Response";
        }
      }
      class Ye extends Ie {
        constructor(e = null) {
          super(),
            Ye.prototype.appid || ve.aR(Ye.M()),
            Ie.initialize(this, e, 0, -1, [10], null);
        }
        static M() {
          return (
            Ye.sm_m ||
              (Ye.sm_m = {
                proto: Ye,
                fields: {
                  appid: { n: 1, br: ve.FE.readUint32, bw: ve.Xc.writeUint32 },
                  file_size: {
                    n: 2,
                    br: ve.FE.readUint32,
                    bw: ve.Xc.writeUint32,
                  },
                  raw_file_size: {
                    n: 3,
                    br: ve.FE.readUint32,
                    bw: ve.Xc.writeUint32,
                  },
                  sha_file: { n: 4, br: ve.FE.readBytes, bw: ve.Xc.writeBytes },
                  time_stamp: {
                    n: 5,
                    br: ve.FE.readUint64String,
                    bw: ve.Xc.writeUint64String,
                  },
                  is_explicit_delete: {
                    n: 6,
                    br: ve.FE.readBool,
                    bw: ve.Xc.writeBool,
                  },
                  url_host: {
                    n: 7,
                    br: ve.FE.readString,
                    bw: ve.Xc.writeString,
                  },
                  url_path: {
                    n: 8,
                    br: ve.FE.readString,
                    bw: ve.Xc.writeString,
                  },
                  use_https: { n: 9, br: ve.FE.readBool, bw: ve.Xc.writeBool },
                  request_headers: { n: 10, c: $e, r: !0, q: !0 },
                  encrypted: { n: 11, br: ve.FE.readBool, bw: ve.Xc.writeBool },
                },
              }),
            Ye.sm_m
          );
        }
        static MBF() {
          return Ye.sm_mbf || (Ye.sm_mbf = ve.Bh(Ye.M())), Ye.sm_mbf;
        }
        toObject(e = !1) {
          return Ye.toObject(e, this);
        }
        static toObject(e, t) {
          return ve.TA(Ye.M(), e, t);
        }
        static fromObject(e) {
          return ve.aD(Ye.M(), e);
        }
        static deserializeBinary(e) {
          let t = new Se.BinaryReader(e),
            r = new Ye();
          return Ye.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return ve.F(Ye.MBF(), e, t);
        }
        serializeBinary() {
          var e = new Se.BinaryWriter();
          return Ye.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          ve.l2(Ye.M(), e, t);
        }
        serializeBase64String() {
          var e = new Se.BinaryWriter();
          return Ye.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCloud_ClientFileDownload_Response";
        }
      }
      class $e extends Ie {
        constructor(e = null) {
          super(),
            $e.prototype.name || ve.aR($e.M()),
            Ie.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            $e.sm_m ||
              ($e.sm_m = {
                proto: $e,
                fields: {
                  name: { n: 1, br: ve.FE.readString, bw: ve.Xc.writeString },
                  value: { n: 2, br: ve.FE.readString, bw: ve.Xc.writeString },
                },
              }),
            $e.sm_m
          );
        }
        static MBF() {
          return $e.sm_mbf || ($e.sm_mbf = ve.Bh($e.M())), $e.sm_mbf;
        }
        toObject(e = !1) {
          return $e.toObject(e, this);
        }
        static toObject(e, t) {
          return ve.TA($e.M(), e, t);
        }
        static fromObject(e) {
          return ve.aD($e.M(), e);
        }
        static deserializeBinary(e) {
          let t = new Se.BinaryReader(e),
            r = new $e();
          return $e.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return ve.F($e.MBF(), e, t);
        }
        serializeBinary() {
          var e = new Se.BinaryWriter();
          return $e.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          ve.l2($e.M(), e, t);
        }
        serializeBase64String() {
          var e = new Se.BinaryWriter();
          return $e.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCloud_ClientFileDownload_Response_HTTPHeaders";
        }
      }
      class Ke extends Ie {
        constructor(e = null) {
          super(), Ie.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return Ke.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new Ke();
        }
        static deserializeBinary(e) {
          let t = new Se.BinaryReader(e),
            r = new Ke();
          return Ke.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new Se.BinaryWriter();
          return Ke.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new Se.BinaryWriter();
          return Ke.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCloud_ClientDeleteFile_Response";
        }
      }
      class Je extends Ie {
        constructor(e = null) {
          super(),
            Je.prototype.apps || ve.aR(Je.M()),
            Ie.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            Je.sm_m ||
              (Je.sm_m = {
                proto: Je,
                fields: { apps: { n: 1, c: et, r: !0, q: !0 } },
              }),
            Je.sm_m
          );
        }
        static MBF() {
          return Je.sm_mbf || (Je.sm_mbf = ve.Bh(Je.M())), Je.sm_mbf;
        }
        toObject(e = !1) {
          return Je.toObject(e, this);
        }
        static toObject(e, t) {
          return ve.TA(Je.M(), e, t);
        }
        static fromObject(e) {
          return ve.aD(Je.M(), e);
        }
        static deserializeBinary(e) {
          let t = new Se.BinaryReader(e),
            r = new Je();
          return Je.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return ve.F(Je.MBF(), e, t);
        }
        serializeBinary() {
          var e = new Se.BinaryWriter();
          return Je.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          ve.l2(Je.M(), e, t);
        }
        serializeBase64String() {
          var e = new Se.BinaryWriter();
          return Je.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCloud_EnumerateUserApps_Response";
        }
      }
      class et extends Ie {
        constructor(e = null) {
          super(),
            et.prototype.appid || ve.aR(et.M()),
            Ie.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            et.sm_m ||
              (et.sm_m = {
                proto: et,
                fields: {
                  appid: { n: 1, br: ve.FE.readUint32, bw: ve.Xc.writeUint32 },
                  totalcount: {
                    n: 2,
                    br: ve.FE.readInt32,
                    bw: ve.Xc.writeInt32,
                  },
                  totalsize: {
                    n: 3,
                    br: ve.FE.readInt64String,
                    bw: ve.Xc.writeInt64String,
                  },
                },
              }),
            et.sm_m
          );
        }
        static MBF() {
          return et.sm_mbf || (et.sm_mbf = ve.Bh(et.M())), et.sm_mbf;
        }
        toObject(e = !1) {
          return et.toObject(e, this);
        }
        static toObject(e, t) {
          return ve.TA(et.M(), e, t);
        }
        static fromObject(e) {
          return ve.aD(et.M(), e);
        }
        static deserializeBinary(e) {
          let t = new Se.BinaryReader(e),
            r = new et();
          return et.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return ve.F(et.MBF(), e, t);
        }
        serializeBinary() {
          var e = new Se.BinaryWriter();
          return et.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          ve.l2(et.M(), e, t);
        }
        serializeBase64String() {
          var e = new Se.BinaryWriter();
          return et.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCloud_EnumerateUserApps_Response_Apps";
        }
      }
      class tt extends Ie {
        constructor(e = null) {
          super(), Ie.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return tt.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new tt();
        }
        static deserializeBinary(e) {
          let t = new Se.BinaryReader(e),
            r = new tt();
          return tt.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new Se.BinaryWriter();
          return tt.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new Se.BinaryWriter();
          return tt.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCloud_AppSessionSuspend_Response";
        }
      }
      class rt extends Ie {
        constructor(e = null) {
          super(), Ie.initialize(this, e, 0, -1, void 0, null);
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
          let t = new Se.BinaryReader(e),
            r = new rt();
          return rt.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new Se.BinaryWriter();
          return rt.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new Se.BinaryWriter();
          return rt.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCloud_AppSessionResume_Response";
        }
      }
      class it extends Ie {
        constructor(e = null) {
          super(),
            it.prototype.request_id || ve.aR(it.M()),
            Ie.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            it.sm_m ||
              (it.sm_m = {
                proto: it,
                fields: {
                  request_id: {
                    n: 1,
                    br: ve.FE.readUint64String,
                    bw: ve.Xc.writeUint64String,
                  },
                },
              }),
            it.sm_m
          );
        }
        static MBF() {
          return it.sm_mbf || (it.sm_mbf = ve.Bh(it.M())), it.sm_mbf;
        }
        toObject(e = !1) {
          return it.toObject(e, this);
        }
        static toObject(e, t) {
          return ve.TA(it.M(), e, t);
        }
        static fromObject(e) {
          return ve.aD(it.M(), e);
        }
        static deserializeBinary(e) {
          let t = new Se.BinaryReader(e),
            r = new it();
          return it.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return ve.F(it.MBF(), e, t);
        }
        serializeBinary() {
          var e = new Se.BinaryWriter();
          return it.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          ve.l2(it.M(), e, t);
        }
        serializeBase64String() {
          var e = new Se.BinaryWriter();
          return it.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCloud_ClientLogUploadRequest_Notification";
        }
      }
      var nt, at;
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
            return e.SendMsg("Cloud.GetUploadServerInfo#1", t, Fe, {
              bConstMethod: !0,
              ePrivilege: 1,
            });
          }),
          (e.BeginHTTPUpload = function (e, t) {
            return e.SendMsg("Cloud.BeginHTTPUpload#1", t, Me, {
              ePrivilege: 1,
            });
          }),
          (e.CommitHTTPUpload = function (e, t) {
            return e.SendMsg("Cloud.CommitHTTPUpload#1", t, De, {
              ePrivilege: 1,
            });
          }),
          (e.BeginUGCUpload = function (e, t) {
            return e.SendMsg("Cloud.BeginUGCUpload#1", t, Ue, {
              ePrivilege: 1,
            });
          }),
          (e.CommitUGCUpload = function (e, t) {
            return e.SendMsg("Cloud.CommitUGCUpload#1", t, Te, {
              ePrivilege: 1,
            });
          }),
          (e.GetFileDetails = function (e, t) {
            return e.SendMsg("Cloud.GetFileDetails#1", t, Ne, {
              bConstMethod: !0,
              ePrivilege: 2,
              eWebAPIKeyRequirement: 2,
            });
          }),
          (e.EnumerateUserFiles = function (e, t) {
            return e.SendMsg("Cloud.EnumerateUserFiles#1", t, Le, {
              bConstMethod: !0,
              ePrivilege: 1,
            });
          }),
          (e.Delete = function (e, t) {
            return e.SendMsg("Cloud.Delete#1", t, Ge, { ePrivilege: 1 });
          }),
          (e.GetClientEncryptionKey = function (e, t) {
            return e.SendMsg("Cloud.GetClientEncryptionKey#1", t, xe, {
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
            return e.SendMsg("Cloud.BeginAppUploadBatch#1", t, Ve, {
              ePrivilege: 1,
            });
          }),
          (e.CompleteAppUploadBatch = function (e, t) {
            return e.SendNotification("Cloud.CompleteAppUploadBatch#1", t, {
              ePrivilege: 1,
            });
          }),
          (e.CompleteAppUploadBatchBlocking = function (e, t) {
            return e.SendMsg("Cloud.CompleteAppUploadBatchBlocking#1", t, Ze, {
              ePrivilege: 1,
            });
          }),
          (e.ClientBeginFileUpload = function (e, t) {
            return e.SendMsg("Cloud.ClientBeginFileUpload#1", t, Qe, {
              ePrivilege: 1,
            });
          }),
          (e.ClientCommitFileUpload = function (e, t) {
            return e.SendMsg("Cloud.ClientCommitFileUpload#1", t, qe, {
              ePrivilege: 1,
            });
          }),
          (e.ClientFileDownload = function (e, t) {
            return e.SendMsg("Cloud.ClientFileDownload#1", t, Ye, {
              ePrivilege: 1,
            });
          }),
          (e.ClientDeleteFile = function (e, t) {
            return e.SendMsg("Cloud.ClientDeleteFile#1", t, Ke, {
              ePrivilege: 1,
            });
          }),
          (e.ClientConflictResolution = function (e, t) {
            return e.SendNotification("Cloud.ClientConflictResolution#1", t, {
              ePrivilege: 1,
            });
          }),
          (e.EnumerateUserApps = function (e, t) {
            return e.SendMsg("Cloud.EnumerateUserApps#1", t, Je, {
              bConstMethod: !0,
              ePrivilege: 1,
            });
          }),
          (e.GetAppFileChangelist = function (e, t) {
            return e.SendMsg("Cloud.GetAppFileChangelist#1", t, We, {
              bConstMethod: !0,
              ePrivilege: 1,
            });
          }),
          (e.SuspendAppSession = function (e, t) {
            return e.SendMsg("Cloud.SuspendAppSession#1", t, tt, {
              ePrivilege: 1,
            });
          }),
          (e.ResumeAppSession = function (e, t) {
            return e.SendMsg("Cloud.ResumeAppSession#1", t, rt, {
              ePrivilege: 1,
            });
          }),
          (e.SignalAppLaunchIntent = function (e, t) {
            return e.SendMsg("Cloud.SignalAppLaunchIntent#1", t, Pe, {
              ePrivilege: 1,
            });
          }),
          (e.SignalAppExitSyncDone = function (e, t) {
            return e.SendNotification("Cloud.SignalAppExitSyncDone#1", t, {
              ePrivilege: 1,
            });
          }),
          (e.ClientGetAppQuotaUsage = function (e, t) {
            return e.SendMsg("Cloud.ClientGetAppQuotaUsage#1", t, ke, {
              bConstMethod: !0,
              ePrivilege: 1,
            });
          });
      })(nt || (nt = {})),
        (function (e) {
          (e.NotifyAppStateChangeHandler = {
            name: "CloudClient.NotifyAppStateChange#1",
            request: He,
          }),
            (e.ClientLogUploadRequestHandler = {
              name: "CloudClient.ClientLogUploadRequest#1",
              request: it,
            });
        })(at || (at = {}));
      var st = r(23801);
      class ot {
        constructor() {
          (this.timestamp = 0),
            (this.imageWidth = 0),
            (this.imageHeight = 0),
            (this.eUploadState = 0),
            (this.uploadProgress = 0);
        }
      }
      (0, i.gn)([v.LO], ot.prototype, "file", void 0),
        (0, i.gn)([v.LO], ot.prototype, "dataURL", void 0),
        (0, i.gn)([v.LO], ot.prototype, "imageWidth", void 0),
        (0, i.gn)([v.LO], ot.prototype, "imageHeight", void 0),
        (0, i.gn)([v.LO], ot.prototype, "eUploadState", void 0),
        (0, i.gn)([v.LO], ot.prototype, "uploadProgress", void 0),
        (0, i.gn)([v.LO], ot.prototype, "strErrorDescription", void 0);
      class lt {
        constructor(e) {
          (this.m_fileUploadProps = new ot()), (this.m_Callbacks = e);
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
                    (0, B.Xx)("#Chat_Settings_Error_ChatFileTooLarge", e.name)
                  )
                : this.SetUploadFileError(
                    4,
                    (0, B.Xx)(
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
                (0, B.Xx)(
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
                ((0, st.X)(
                  !1,
                  "Must SetImageFileToUpload before calling BeginFileUpload"
                ),
                new Error("Invalid State"))
              );
            (this.m_fileUploadProps.eUploadState = 2),
              (this.m_fileUploadProps.uploadProgress = 0),
              (this.m_fileUploadProps.additionalProps = e);
            let r = new FormData();
            r.append("sessionid", S.De.SESSIONID),
              r.append("l", S.De.LANGUAGE),
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
              let e = yield b().post(
                this.m_Callbacks.GetBeginFileUploadURL(),
                r,
                { params: { l: S.De.LANGUAGE } }
              );
              return (
                (this.m_fileUploadProps.timestamp = e.data.timestamp),
                (this.m_fileUploadProps.hmac = e.data.hmac),
                this.DoFileUpload(e.data.result)
              );
            } catch (e) {
              let t = null;
              throw (
                ((0, v.z)(() => {
                  if (
                    ((this.m_fileUploadProps.eUploadState = 3),
                    this.LogFileUploadMessage(e.response),
                    e.response)
                  ) {
                    let r = e.response.data;
                    e.response.status, r && r.success;
                    t = r.message
                      ? r.message
                      : (0, B.Xx)("#Chat_Settings_Error_ServerError");
                  } else t = (0, B.Xx)("#ConnectionTrouble_FailedToConnect");
                  this.m_fileUploadProps.strErrorDescription = (0, B.Xx)(
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
                  (0, v.z)(() => {
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
              return yield b().put(r, t, i), this.CommitFileUpload(!0, e.ugcid);
            } catch (t) {
              throw (
                (this.LogFileUploadMessage(t.response),
                (0, v.z)(() => {
                  (this.m_fileUploadProps.strErrorDescription = (0, B.Xx)(
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
            n.append("sessionid", S.De.SESSIONID),
              n.append("l", S.De.LANGUAGE),
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
              let t = yield b().post(
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
                ((0, v.z)(() => {
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
                      : (0, B.Xx)("#Chat_Settings_Error_ServerError");
                  } else r = (0, B.Xx)("#ConnectionTrouble_FailedToConnect");
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
      (0, i.gn)([v.aD], lt.prototype, "SetUploadFileError", null),
        (0, i.gn)([v.aD], lt.prototype, "SetImageFileToUpload", null),
        (0, i.gn)([v.aD], lt.prototype, "SetFileToUpload", null),
        (0, i.gn)([v.aD], lt.prototype, "RetryFileUpload", null),
        (0, i.gn)([v.aD], lt.prototype, "BeginFileUpload", null),
        (0, i.gn)([v.aD], lt.prototype, "DoFileUpload", null),
        (0, i.gn)([v.aD], lt.prototype, "CommitFileUpload", null),
        (0, i.gn)([v.aD], lt.prototype, "ClearFileUploadError", null),
        (0, i.gn)([v.aD], lt.prototype, "Reset", null);
      var ct = r(20620),
        dt = r(25871),
        ut = r(57605),
        pt = r(24591),
        gt = r(94843),
        ht = r(43682),
        _t = r.n(ht);
      const ft = (e) => {
        const [t, r] = (0, n.useState)(!0),
          [a, s] = (0, n.useState)(null);
        if (
          ((0, n.useEffect)(() => {
            if (0 == e.appid || 0 == e.trailerBaseID)
              return void s((0, B.Xx)("#TrailerPlayer_ID_NotProvided"));
            (0, i.mG)(void 0, void 0, void 0, function* () {
              yield z.Z.Get().QueueAppRequest(e.appid, {
                include_trailers: !0,
              }),
                z.Z.Get().BHasApp(e.appid)
                  ? (z.Z.Get()
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
                        (0, B.Xx)(
                          "#TrailerPlayer_CouldNotLoad",
                          e.appid,
                          e.trailerBaseID
                        )
                      )),
                    r(!1))
                  : s(
                      (0, B.Xx)(
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
            ? n.createElement("div", { className: _t().ErrorDiv }, a)
            : null;
        if (t)
          return n.createElement(w.V, {
            string: (0, B.Xx)("#Loading"),
            size: "small",
          });
        const o = z.Z.Get()
            .GetApp(e.appid)
            .GetAllTrailers()
            .GetTrailerByID(e.trailerBaseID),
          l = o.GetTrailerMax(),
          m = {
            sPoster: o.GetScreenshot(),
            rgVideoSources: [
              { sURL: l.strWebMURL, sFormat: "video/webm" },
              { sURL: l.strMP4URL, sFormat: "video/mp4" },
            ],
          };
        return n.createElement(gt.Y, {
          bControls: !0,
          bAutoPlay: !1,
          bLoop: !1,
          video: m,
        });
      };
      var yt = r(83431),
        Bt = r(32868),
        Ct = (r(89980), r(17547));
      const bt = n.lazy(() =>
          Promise.all([r.e(5119), r.e(2449), r.e(2832), r.e(4601)]).then(
            r.bind(r, 28388)
          )
        ),
        St = (e) => {
          const t = (0, n.useRef)(null),
            [r, a] = (0, n.useState)(Bt.D.Get().GetVODForAppID(e.appid)),
            [s, o] = (0, n.useState)(
              !Boolean(Bt.D.Get().GetVODForAppID(e.appid))
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
                  (n = Bt.D.Get().GetVODForAppID(e.appid)),
                !n)
              ) {
                const r = () =>
                  (0, i.mG)(void 0, void 0, void 0, function* () {
                    t.current && t.current();
                    const r = b().CancelToken.source();
                    (t.current = r.cancel),
                      (n = yield Bt.D.Get().LoadVODForAppID(e.appid)),
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
                  (0, B.Xx)(
                    s ? "#VODPlayer_Loading" : "#VODPlayer_ErrorLoading",
                    e.appid
                  )
                )
              : n.createElement(
                  "div",
                  { className: yt.BroadcastCtn },
                  n.createElement(
                    Ct.SV,
                    null,
                    n.createElement(
                      n.Suspense,
                      { fallback: n.createElement("div", null) },
                      n.createElement(bt, {
                        nAppIDVOD: e.appid,
                        watchLocation: 9,
                        bStartPaused: !0,
                      })
                    )
                  )
                )
          );
        };
      var vt = r(54297),
        wt = r(75962),
        Et = r(60161),
        It = r(5080),
        Rt = r(11491);
      function Ft(e) {
        const t = (0, S.id)(),
          r = (0, It.Zh)(It.H_),
          i = "true" === String((0, o.im)(e.args, "autoadvance")).toLowerCase();
        return n.createElement(
          Rt.l,
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
      var Mt = r(44026),
        At = r(59663);
      function Dt(e) {
        const { fileUploadManager: t } = e,
          r = (0, n.useRef)();
        return n.createElement(
          "div",
          { className: At.Ctn },
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
            Mt.wl,
            {
              type: "button",
              title: (0, B.Xx)("#Button_Upload"),
              onOKActionDescription: (0, B.Xx)("#Button_Upload"),
              onClick: () => r.current.click(),
            },
            n.createElement(F.pkz, null)
          )
        );
      }
      var Ut = r(25125),
        zt = r(71654);
      function Tt(e) {
        const { fileUploadManager: t } = e,
          r = (0, Ut.SZ)(() => t.file_upload_props.eUploadState);
        return 1 == r
          ? n.createElement(Nt, { fileUploadManager: t })
          : 3 == r || 5 == r || 4 == r
          ? n.createElement(Gt, { fileUploadManager: t })
          : 0 != r
          ? n.createElement(Lt, { fileUploadManager: t })
          : null;
      }
      function Nt(e) {
        const { fileUploadManager: t } = e,
          r = t.file;
        return n.createElement(
          "div",
          { className: zt.UploadPreviewContainer },
          Boolean(-1 != r.type.indexOf("image")) &&
            n.createElement("img", {
              className: zt.UploadPreview,
              src: t.file_upload_data_url,
            }),
          Boolean(-1 != r.type.indexOf("video")) &&
            n.createElement(F.nkn, null),
          n.createElement(
            "div",
            { className: zt.FileUploadFileName },
            "'",
            r.name,
            "'"
          ),
          n.createElement(
            "div",
            { className: zt.FileUploadCancel, onClick: () => t.Reset() },
            n.createElement(F.pVO, null)
          ),
          n.createElement(
            ut.KM,
            {
              className: zt.FileUploadBtn,
              onClick: () =>
                (0, i.mG)(this, void 0, void 0, function* () {
                  yield t.BeginFileUpload(), t.Reset();
                }),
            },
            (0, B.Xx)("#Button_Upload")
          )
        );
      }
      function Lt(e) {
        const { fileUploadManager: t } = e,
          [r, i, a] = (0, Ut.SZ)(() => [
            t.file_upload_props.file,
            t.file_upload_props.displayFileName,
            t.file_upload_props.uploadProgress,
          ]),
          s = r ? (0, B.Xx)("#Uploading_Item", i) : "",
          o = { width: a + "%" };
        return n.createElement(
          "div",
          { className: zt.FileUploadProgressContainer },
          n.createElement("div", { className: zt.FileUploadProgressName }, s),
          n.createElement(
            "div",
            {
              className: (0, M.Z)(
                zt.FileUploadProgressBarContainer,
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
          [r, a, s] = (0, Ut.SZ)(() => [
            t.file_upload_props.strErrorDescription,
            t.file_upload_props.displayFileName,
            t.file_upload_props.eUploadState,
          ]),
          o = a ? (0, B.Xx)("#Uploading_Item", a) : "",
          l = r || (0, B.Xx)("#Chat_Upload_ErrorCloud");
        return n.createElement(
          "div",
          { className: zt.FileUploadProgressContainer },
          n.createElement("div", { className: zt.FileUploadProgressName }, o),
          n.createElement(
            "div",
            { className: zt.FileUploadErrorDescription },
            l
          ),
          n.createElement(
            "div",
            { className: zt.FileUploadActions },
            n.createElement(
              ut.Uq,
              { className: "DialogLayout_NoMinWidth" },
              Boolean(3 == s) &&
                n.createElement(
                  ut.KM,
                  {
                    onClick: () =>
                      (0, i.mG)(this, void 0, void 0, function* () {
                        yield t.RetryFileUpload(), t.Reset();
                      }),
                  },
                  (0, B.Xx)("#Chat_Upload_ErrorAction_Retry")
                ),
              n.createElement(
                ut.zx,
                { onClick: () => t.ClearFileUploadError() },
                (0, B.Xx)("#Chat_Upload_ErrorAction_Close")
              )
            )
          )
        );
      }
      var xt = r(99307),
        Pt = r(57742),
        kt = r(32905),
        Ot = r(15715),
        Wt = r(82124);
      let jt = null;
      function Xt(e) {
        var t, r;
        let i = (0, o.im)(e.args);
        const a = (0, o.im)(e.args, "style"),
          s = (0, o.im)(e.args, "id"),
          l = (function (e) {
            return "button" === e
              ? (0, M.Z)(x.LinkButton, "LinkButton")
              : (0, M.Z)(x.Link, "Link");
          })(a),
          m = e.context.event;
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
          "dev" == S.De.WEB_UNIVERSE &&
            "store" == (0, S.Zv)() &&
            "store.steampowered.com" == (0, A.FM)(i) &&
            ((i = i.replace(
              "https://store.steampowered.com/",
              S.De.STORE_BASE_URL
            )),
            "clorthax_quest" ==
              (null === (r = null == m ? void 0 : m.jsondata) || void 0 === r
                ? void 0
                : r.sale_vanity_id) &&
              (-1 == i.indexOf("?")
                ? (i += "?t=2022-06-25")
                : (i += "&t=2022-06-25"))),
          "string" == typeof i && i.length > 0 && "#" == i[0]
            ? n.createElement("a", { className: l, href: i }, e.children)
            : "steam://settings/account" == i
            ? n.createElement(
                wt.ns,
                { className: l, href: "steam://settings/account" },
                e.children
              )
            : n.createElement(
                N.z,
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
          return n.createElement(n.Fragment, null);
        const a = o.vZ(
          i,
          e.language,
          null == r ? void 0 : r.rtime32_last_modified
        );
        if ("string" == typeof a) {
          let e;
          return (
            (i = a),
            (e = (!r || !r.BHasTag("auto_rssfeed")) && !(0, A.dK)(i)),
            t || (i = (0, A.et)(i)),
            t
              ? n.createElement(vt.e, {
                  src: i,
                  crossOrigin: e ? "anonymous" : void 0,
                })
              : n.createElement(Wt.l, {
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
            `${S.De.MEDIA_CDN_COMMUNITY_URL}images/steamworks_docs/${S.De.LANGUAGE}/${t}`
          ),
          "english" != S.De.LANGUAGE &&
            i.push(
              `${S.De.MEDIA_CDN_COMMUNITY_URL}images/steamworks_docs/english/${t}`
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
        return n.createElement(ft, {
          appid: t,
          trailerBaseID: r,
          bIsPreviewMode: e.context.showErrorInfo,
        });
      }
      function Qt(e) {
        const t = Yt(e.args, "appid", 0);
        return n.createElement(St, {
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
          ? n.createElement(pt.G$, {
              name: t,
              title: r,
              company: i,
              photo: a,
              bio: e.children,
            })
          : n.createElement(pt.qs, {
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
          i = (0, ct.x)(t);
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
        if (!S.L7.logged_in)
          return n.createElement(
            ut.zx,
            { onClick: kt.X, className: "CSSClaimItemLoginButton" },
            (0, B.Xx)("#Sale_ClaimableReward_Login")
          );
        const r = (0, o.im)(e.args, "type");
        let i;
        if (r)
          switch (r) {
            case "profilemodifier":
              i = 8;
              break;
            case "sticker":
              i = 11;
          }
        return n.createElement(Ot.w, { bPreviewMode: t, rewardType: i });
      }
      function Jt(e) {
        const t = Number.parseInt((0, o.im)(e.args, "id")) || 0,
          r =
            "true" === ((0, o.im)(e.args, "visible") || "false").toLowerCase(),
          i = e.context.showErrorInfo,
          [a, s] = (0, dt.ie)(t, {});
        if (!t || 1 == s)
          return !t && i
            ? n.createElement("div", null, "Error: PackageID Not Set")
            : null;
        let l = !1;
        return (
          (l = z.Z.Get().BHasStoreItem(t, 1)
            ? Boolean(a.GetBestPurchaseOption())
            : !z.Z.Get().BIsPackageUnavailableDueToCountryRestriction(t)),
          (!l && !r) || (l && r) ? e.children : null
        );
      }
      function er(e) {
        if ("GameAwardDrop2022" === e) {
          const t = (0, ct.x)(e),
            r = (0, ct.v)();
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
        return S.L7.logged_in
          ? n.createElement(
              ut.zx,
              {
                className: "CSSActionDialogButton",
                onClick: (s) => {
                  (0, Pt.AM)(
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
                    (0, Et.RA)(s)
                  );
                },
              },
              Boolean(s.bInitialState) && (0, B.Xx)(r),
              Boolean(s.bSuccessState) && (0, B.Xx)(i),
              Boolean(s.bFailedState) && (0, B.Xx)(a)
            )
          : n.createElement(
              ut.zx,
              { className: "CSSActionDialogButton", onClick: kt.X },
              (0, B.Xx)("#Login_SignIn")
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
          [m, c] = n.useState(Boolean(l.fnAction));
        return (
          n.useEffect(() => {
            l.fnAction && (c(!0), l.fnAction().finally(() => c(!1)));
          }, [l]),
          n.createElement(
            xt.RG,
            {
              bDisableBackgroundDismiss: !0,
              closeModal: i,
              onCancel: i,
              className: "CSSActionDialogDialog",
            },
            n.createElement(
              ut.h4,
              null,
              Boolean(l.bInitialState) && (0, B.Xx)(a),
              Boolean(l.bSuccessState) && (0, B.Xx)(s),
              Boolean(l.bFailedState) && (0, B.Xx)(o)
            ),
            n.createElement(
              ut.uT,
              null,
              n.createElement(
                ut.Ac,
                null,
                m
                  ? n.createElement(w.V, {
                      size: "medium",
                      position: "center",
                      string: (0, B.Xx)("#Loading"),
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
            new lt(
              (function (e) {
                const t = {
                  PopulateBeginFileUploadFormData: (t) => {
                    t.append("clan_account_id", "" + e);
                  },
                  PopulateCommitFileUploadFormData: (t) => {
                    t.append("clan_account_id", "" + e);
                  },
                  GetBeginFileUploadURL: () =>
                    S.De.STORE_BASE_URL + "saleaction/ajaxbeginfileupload",
                  GetCommitFileUploadURL: () =>
                    S.De.STORE_BASE_URL + "saleaction/ajaxcommitfileupload",
                  LogFileUploadMessage: (e) => {
                    console.log("UploadFileButton: ", e);
                  },
                  GetMaxFileSizeMB: () => 100,
                };
                return t;
              })(i)
            )
          );
        return i == c.sq ||
          i == c.RQ ||
          (2 == S.De.EUNIVERSE && i == c.$Y) ||
          (1 == S.De.EUNIVERSE && i == c._L)
          ? n.createElement(
              "div",
              null,
              n.createElement(Dt, { fileUploadManager: a }),
              n.createElement(Tt, { fileUploadManager: a })
            )
          : t
          ? n.createElement("div", null, (0, B.Xx)("#CloudUpload_NotSupport"))
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
                (null == ae &&
                  (ae = (0, S.h4)()
                    ? [
                        { urlRegExp: new RegExp(Q), fnBBComponent: de },
                        { urlRegExp: new RegExp(Y), fnBBComponent: he },
                        { urlRegExp: new RegExp($), fnBBComponent: ge },
                        { urlRegExp: new RegExp(q), fnBBComponent: pe },
                        { urlRegExp: new RegExp(ie), fnBBComponent: Be },
                      ]
                    : [
                        {
                          urlRegExp: new RegExp(/youtu.be|youtube.com/i),
                          fnBBComponent: se,
                        },
                        {
                          urlRegExp: new RegExp(
                            /community.+sharedfiles\/filedetails\/\?id=\d+/i
                          ),
                          fnBBComponent: me,
                        },
                        { urlRegExp: new RegExp(Q), fnBBComponent: de },
                        { urlRegExp: new RegExp(Y), fnBBComponent: he },
                        { urlRegExp: new RegExp($), fnBBComponent: ge },
                        { urlRegExp: new RegExp(q), fnBBComponent: pe },
                        { urlRegExp: new RegExp(K), fnBBComponent: oe },
                        { urlRegExp: new RegExp(J), fnBBComponent: le },
                        { urlRegExp: new RegExp(ee), fnBBComponent: _e },
                        { urlRegExp: new RegExp(te), fnBBComponent: fe },
                        { urlRegExp: new RegExp(re), fnBBComponent: ye },
                        { urlRegExp: new RegExp(ie), fnBBComponent: Be },
                        { urlRegExp: new RegExp(ne), fnBBComponent: ue },
                      ]),
                ae),
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
                  Constructor: o.LW(o.R6, x.Header1),
                  autocloses: !1,
                  skipFollowingNewline: !0,
                },
              ],
              [
                "h2",
                {
                  Constructor: o.LW(o.zV, x.Header2),
                  autocloses: !1,
                  skipFollowingNewline: !0,
                },
              ],
              [
                "h3",
                {
                  Constructor: o.LW(o.BB, x.Header3),
                  autocloses: !1,
                  skipFollowingNewline: !0,
                },
              ],
              [
                "quote",
                { Constructor: o.LW(o.pu, x.BlockQuote), autocloses: !1 },
              ],
              [
                "list",
                {
                  Constructor: o.LW(o.aV, x.UnorderedList),
                  autocloses: !1,
                  skipInternalNewline: !0,
                },
              ],
              [
                "olist",
                {
                  Constructor: o.LW(o.GS, x.OrderedList),
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
              ["carousel", { Constructor: Ft, autocloses: !1 }],
            ])),
          jt).entries()
        ),
      ])),
        (0, i.gn)([u.ak], nr.prototype, "ElementAccumulator", null);
    },
    15715: (e, t, r) => {
      "use strict";
      r.d(t, { w: () => B });
      var i = r(50265),
        n = r(89526),
        a = (r(51637), r(44026)),
        s = (r(6681), r(27143), r(54124)),
        o = r(21261),
        l = r(57605),
        m = r(77557),
        c = r(57742),
        d = r(701),
        u = r(69338),
        p = r(19304),
        g = r(60161),
        h = r(14826),
        _ = r(32765),
        f = r(7762),
        y = r(18845);
      function B(e) {
        const t = (0, o.Ax)(),
          { bLoading: r } = t,
          { className: a, bPreviewMode: s, rewardType: m } = e;
        return n.createElement(
          l.zx,
          {
            className: (0, p.Z)("CSSClaimItemButton", a),
            onClick: (e) => {
              t.bCanClaimNewItem
                ? (0, c.AM)(n.createElement(b, { rewardType: m }), (0, g.RA)(e))
                : ("dev" == _.De.WEB_UNIVERSE ||
                    "beta" == _.De.WEB_UNIVERSE ||
                    s) &&
                  ((0, c.AM)(
                    n.createElement(b, { rewardType: m }),
                    (0, g.RA)(e)
                  ),
                  console.log(
                    "Show dialog for debugging, since already claimed: ",
                    (0, i.ZN)(t)
                  ));
            },
            disabled: r,
          },
          Boolean(r)
            ? n.createElement(u.V, {
                string: (0, h.Xx)("#Loading"),
                size: "small",
              })
            : n.createElement(C, { claimState: t })
        );
      }
      function C(e) {
        const { claimState: t, strButtonOverride: r, rewardType: i } = e;
        if (t.bAlreadyClaimedCurrentItem)
          return n.createElement(
            "div",
            { className: (0, p.Z)(f.CheckMark, "CSSClaimedState") },
            n.createElement(d.JrY, null),
            n.createElement(
              "span",
              null,
              " ",
              (null == r ? void 0 : r.length) > 0
                ? r
                : (0, h.Xx)("#Sale_ClaimableReward_AlreadyClaimed")
            )
          );
        let a = (0, h.Xx)("#Sale_ClaimableReward_generic");
        switch (i) {
          case 11:
            a = (0, h.Xx)("#Sale_ClaimableReward_sticker");
            break;
          case 8:
            a = (0, h.Xx)("#Sale_ClaimableReward_profilemodifier");
        }
        return n.createElement("span", { className: "CSSUnclaimedState" }, a);
      }
      function b(e) {
        const { closeModal: t, rewardType: r } = e,
          { fnClaimItem: a } = (0, o.jS)(),
          s = (0, m.tx)();
        n.useEffect(() => {
          s.bLoading ||
            (s.fnSetLoading(!0),
            a()
              .then((e) => {
                if ((console.log("claim response", (0, i.ZN)(e)), e.appid)) {
                  let t = (0, h.Xx)("#Sale_ClaimableReward_completed_generic");
                  switch (r) {
                    case 11:
                      t = (0, h.Xx)("#Sale_ClaimableReward_completed_sticker");
                      break;
                    case 8:
                      t = (0, h.Xx)(
                        "#Sale_ClaimableReward_completed_profilemodifier"
                      );
                  }
                  s.fnSetStrSuccess("   "),
                    s.fnSetElSuccess(
                      n.createElement(
                        "div",
                        { className: f.DialogCtn },
                        n.createElement("span", null, t),
                        n.createElement(S, {
                          appid: e.appid,
                          community_item_type: e.community_item_type,
                          rewardType: r,
                        })
                      )
                    );
                } else s.fnSetStrError((0, h.Xx)("#Sale_ClaimableReward_Busy"));
              })
              .catch((e) =>
                s.fnSetStrError((0, h.Xx)("#Sale_ClaimableReward_Busy"))
              ));
        }, [s, a, r]);
        let l = (0, h.Xx)("#Sale_ClaimableReward_generic");
        switch (r) {
          case 11:
            l = (0, h.Xx)("#Sale_ClaimableReward_sticker");
            break;
          case 8:
            l = (0, h.Xx)("#Sale_ClaimableReward_profilemodifier");
        }
        return n.createElement(m.NT, {
          state: s,
          strDialogTitle: l,
          closeModal: t,
        });
      }
      function S(e) {
        const { appid: t, community_item_type: r, rewardType: i } = e;
        return t && r
          ? n.createElement(
              n.Fragment,
              null,
              n.createElement(y.x, { appid: t, community_item_type: r }),
              Boolean(8 == i) &&
                n.createElement(v, { appid: t, community_item_type: r })
            )
          : null;
      }
      function v(e) {
        const { appid: t, community_item_type: r } = e,
          i = (0, s.i8)(t),
          [m, c] = n.useState(!1);
        if (!i) return null;
        const d = i.find((e) => e.item_type == r);
        return d
          ? n.createElement(
              "div",
              { className: f.EquipCtn },
              Boolean(m)
                ? n.createElement(
                    "div",
                    null,
                    (0, h.Xx)(
                      "#Sale_ClaimableReward_profilemodifier_apply_success"
                    )
                  )
                : n.createElement(
                    l.zx,
                    {
                      onClick: (e) => {
                        (0, o.sp)(d).then((e) => {
                          1 == e && c(!0);
                        });
                      },
                    },
                    (0, h.Xx)("#Sale_ClaimableReward_profilemodifier_apply")
                  ),
              n.createElement(
                a.IS,
                { href: `${_.De.COMMUNITY_BASE_URL}profiles/${_.L7.steamid}` },
                (0, h.Xx)("#Sale_ClaimableReward_profilemodifier_view")
              )
            )
          : n.createElement(
              "div",
              null,
              n.createElement(
                a.IS,
                {
                  href: `${_.De.COMMUNITY_BASE_URL}profiles/${_.L7.steamid}/edit/goldenprofile`,
                },
                (0, h.Xx)("#Sale_ClaimableReward_profilemodifier_choose")
              ),
              n.createElement(
                a.IS,
                { href: `${_.De.COMMUNITY_BASE_URL}profiles/${_.L7.steamid}` },
                (0, h.Xx)("#Sale_ClaimableReward_profilemodifier_view")
              )
            );
      }
    },
    18845: (e, t, r) => {
      "use strict";
      r.d(t, { v: () => c, x: () => m });
      var i = r(25125),
        n = r(89526),
        a = (r(46132), r(51637), r(52502), r(41068), r(6681), r(53155)),
        s = r(69338),
        o = r(14826),
        l = r(32765);
      function m(e) {
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
      function c(e) {
        const { section: t, rewardDef: r, language: s } = e,
          o = (0, a.mn)(r.appid, r.community_item_type),
          [c] = (0, i.SZ)(() => {
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
          n.createElement(m, {
            appid: null == r ? void 0 : r.appid,
            community_item_type: null == r ? void 0 : r.community_item_type,
          }),
          Boolean(c) &&
            n.createElement("span", null, null == o ? void 0 : o.item_name)
        );
      }
    },
    87178: (e, t, r) => {
      "use strict";
      r.d(t, { j: () => s });
      var i = r(33940),
        n = r(89526),
        a = r(4306);
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
    26121: (e, t, r) => {
      "use strict";
      r.d(t, { Z: () => i });
      const i =
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QUQ5NEMwOTYzRDc4MTFFQUExREZEODRBMDBCNjdENTEiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QUQ5NEMwOTczRDc4MTFFQUExREZEODRBMDBCNjdENTEiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpBRDk0QzA5NDNENzgxMUVBQTFERkQ4NEEwMEI2N0Q1MSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpBRDk0QzA5NTNENzgxMUVBQTFERkQ4NEEwMEI2N0Q1MSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Po/TXacAAABMSURBVHjaYvz//z8DNQHjyDMQDICGJgDx3f/kA5DeBJhh8f+pB+JBXr4DNFeZSp69CzLwP7UjZdTAkWAgVdMh1XMK1fPyCCwPAQIMAKf/Y+3dveJlAAAAAElFTkSuQmCC";
    },
  },
]);
