/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkstore = self.webpackChunkstore || []).push([
  [8489],
  {
    10860: (e) => {
      e.exports = { Ctn: "cloudfileuploadbutton_Ctn_MKp7i" };
    },
    20636: (e) => {
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
    13096: (e) => {
      e.exports = { BroadcastCtn: "VODPlayer_BroadcastCtn_KL2t9" };
    },
    15057: (e) => {
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
    35789: (e) => {
      e.exports = { Ctn: "loyaltyrewarditemembed_Ctn_2di0m" };
    },
    21735: (e) => {
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
    79438: (e) => {
      e.exports = { CheckMark: "claimitemshared_CheckMark_3HeHP" };
    },
    10881: (e) => {
      e.exports = {
        PopupScreenshotContainer:
          "screenshotpopout_PopupScreenshotContainer_2mYDh",
        PopupScreenshot: "screenshotpopout_PopupScreenshot_1q7Ow",
        ButtonCtn: "screenshotpopout_ButtonCtn_1Wwsx",
        ButtonIcon: "screenshotpopout_ButtonIcon_2gBfU",
        Disabled: "screenshotpopout_Disabled_1M3_p",
      };
    },
    21461: (e) => {
      e.exports = {
        Container: "sharewithfriends_Container_8f6EQ",
        SmallAvatar: "sharewithfriends_SmallAvatar_kzjfl",
        ShareDescription: "sharewithfriends_ShareDescription_mhpsV",
        ShareLink: "sharewithfriends_ShareLink_2DzSq",
      };
    },
    97141: (e, t, r) => {
      "use strict";
      r.d(t, { O: () => g, V: () => _ });
      var i = r(70655),
        n = r(67294),
        a = (r(76796), r(58114)),
        s = r(73812),
        o = (r(46321), r(21205), r(14974)),
        l = r(77520),
        m = r(93976),
        c = r(99533),
        d = r(64839),
        u = r(90666);
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
      function _(e, t) {
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
    75320: (e, t, r) => {
      "use strict";
      r.d(t, { v: () => p, x: () => u });
      var i = r(70655),
        n = r(9669),
        a = r.n(n),
        s = r(67294),
        o = (r(76796), r(82946), r(93976)),
        l = r(99533),
        m = r(64839),
        c = r(90666);
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
    21213: (e, t, r) => {
      "use strict";
      r.d(t, { Ax: () => _, jS: () => h, rW: () => f });
      var i = r(70655),
        n = (r(76796), r(58114)),
        a = r(73812),
        s = r(14974),
        o = r(77520),
        l = r(90666),
        m = r(67294),
        c = (r(46321), r(93976)),
        d = r(99533),
        u = r(64839),
        p = r(22188);
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
      function _() {
        const [e, t] = (0, m.useState)(g.Get().GetClaimItemState()),
          [r, i] = (0, m.useState)(!0);
        return (
          (0, m.useEffect)(() => {
            g.Get()
              .LoadCanUserClaimItem()
              .then(t)
              .finally(() => i(!1));
          }, []),
          (0, u.Qg)(g.Get().GetClaimStateChangeCallback(), t),
          Object.assign(Object.assign({}, e), { bLoading: r })
        );
      }
      function h() {
        return { fnClaimItem: g.Get().UserClaimItem };
      }
      function f() {
        return { fnSetClaimState: g.Get().TEST_OverrideClaimState };
      }
      (0, i.gn)([u.ak], g.prototype, "TEST_OverrideClaimState", null),
        (0, i.gn)([u.ak], g.prototype, "UserClaimItem", null);
    },
    27991: (e, t, r) => {
      "use strict";
      r.d(t, { NX: () => d, nf: () => u, ue: () => p });
      var i = r(70655),
        n = r(37694),
        a = r(67294),
        s = r(73812),
        o = r(159),
        l = r(74163),
        m = r(77520),
        c = r(90666);
      function d() {
        const e = (0, l.T)("usePartnerStoreBrowseAPI"),
          [t, r] = (0, a.useState)(!1);
        return (
          (0, a.useEffect)(() => {
            (function (e = !1) {
              return (0, i.mG)(this, void 0, void 0, function* () {
                if (e && o.Z.BIsInitialized()) return;
                const t = (0, c.kQ)(
                  "partnerbrowse_webapi_token",
                  "application_config"
                );
                (0, m.X)(Boolean(t), "require partnerbrowse_webapi_token");
                const r = new s.J(c.De.WEBAPI_BASE_URL, t);
                return (
                  ("dev" != c.De.WEB_UNIVERSE && "beta" != c.De.WEB_UNIVERSE) ||
                    console.log(
                      "DEV_DEBUG: Initializing CStoreItemCache with access token",
                      t
                    ),
                  u(t),
                  o.Z.Initialize(r, c.L7.is_partner_member)
                );
              });
            })().then(() => {
              var t;
              (null === (t = null == e ? void 0 : e.token) || void 0 === t
                ? void 0
                : t.reason) || r(!0);
            });
          }, []),
          t
        );
      }
      function u(e) {
        n.OT.BIsInitialized() ||
          n.OT.Initialize(new s.J(c.De.WEBAPI_BASE_URL, e));
      }
      function p(e) {
        return n.OT.BIsInitialized() || u(e || null), !0;
      }
    },
    60419: (e, t, r) => {
      "use strict";
      r.d(t, { NT: () => m, tx: () => l });
      var i = r(67294),
        n = r(37699),
        a = r(21735),
        s = r(41311),
        o = r(13596);
      r(26149);
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
      function m(e) {
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
            elSuccess: _,
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
          : u || g || _
          ? i.createElement(
              n.uH,
              {
                strTitle: t,
                strDescription: g || (0, s.Xx)("#EventDisplay_Share_Success"),
                bAlertDialog: !0,
                closeModal: l,
              },
              i.createElement(i.Fragment, null, Boolean(_) && _)
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
    14778: (e, t, r) => {
      "use strict";
      r.d(t, { d: () => lr });
      var i = r(70655),
        n = r(67294),
        a = r(49727),
        s = r(99663),
        o = r(63473),
        l = r(37662),
        m = r(21927),
        c = r(7200),
        d = r(83997),
        u = r(35092),
        p = r(67833),
        g = r(90666);
      function _(e, t) {
        return (0, o.Ah)(
          e,
          (function (e) {
            var t;
            return [
              (
                null === (t = null == e ? void 0 : e.jsondata) || void 0 === t
                  ? void 0
                  : t.read_more_link
              )
                ? (0, u.FM)(e.jsondata.read_more_link).toLocaleLowerCase()
                : void 0,
            ];
          })(t)
        );
      }
      function h(e, t, r) {
        let i = e;
        return (
          i.toLowerCase().startsWith("http") || (i = "http://" + i),
          n.createElement(f, { url: i, event: t }, r || e)
        );
      }
      const f = (e) => {
        const { url: t, event: r, className: i } = e;
        let a,
          s = (0, p.B1)(t);
        _(s, r) &&
          (s =
            (g.De.IN_CLIENT ? "steam://openurl_external/" : "") +
            g.De.COMMUNITY_BASE_URL +
            "linkfilter/?url=" +
            s),
          (0, o.Ah)(s) && (a = "noopener nofollow");
        const l =
          "string" == typeof e.children &&
          e.children.length > 0 &&
          t &&
          !t.startsWith("steam://")
            ? (0, u.XW)(t)
            : void 0;
        return n.createElement(
          "a",
          { className: i, href: s, rel: a, id: e.id },
          n.createElement("span", { "data-tooltip-text": l }, e.children)
        );
      };
      class B extends s.DX {
        constructor(e, t, r, i) {
          super(e),
            (this.m_LinkFilter = new RegExp(
              '((?:(?:https?:)|(?:www[.,])|(?:[!#-;=?-Z\\\\^-~]+[\\.,](?:(?:[a-zA-Z]{2,4}[\\.?]*[/\\\\?#])|(?:(?:biz|com|gallery|in|name|net|online|org|tech|trade|xyz)(?=\\W|$)))))(?:[^ː\\s"<>\\[\\]]*[^\\s"<>\\[\\],.ː:])?)'
            )),
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
              n || super.AppendNode(h(i)),
                (r = e.input.substr(e.index + i.length)),
                (e = this.m_LinkFilter.exec(r));
            }
          }
          r.length > 0 && super.AppendText(r, t);
        }
      }
      class y extends s.DX {
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
              let i = e[1];
              super.AppendNode(
                n.createElement(
                  d.tk,
                  { emoticonHoverStore: m.$, emoticon: i },
                  []
                )
              ),
                (r = e.input.substr(e.index + i.length + 2)),
                (e = this.m_EmoteRegex.exec(r));
            }
          }
          r.length > 0 && super.AppendText(r, t);
        }
      }
      class C extends s.DX {
        constructor(e, t) {
          super(e), (this.m_parentNode = void 0), (this.m_parentNode = t);
        }
        AppendText(e, t = !1) {
          let r = e;
          this.m_parentNode &&
            "img" == this.m_parentNode.tag &&
            (r = (0, u.et)(r)),
            super.AppendText(r, t);
        }
      }
      var b = r(26149),
        S = r(64839),
        v = r(76796),
        w = r(4224),
        E = r(3389),
        F = r(77765),
        R = r(8456),
        U = r.n(R),
        D = r(29323),
        M = r(41311),
        I = r(9669),
        A = r.n(I),
        T = r(22188),
        z = r(13596),
        x = r(63315),
        N = r(93976);
      let L = class extends n.Component {
        constructor(e) {
          super(e),
            (this.m_cancelSignal = A().CancelToken.source()),
            (this.state = { bLoadedMetadata: !1 }),
            (this.m_sharedFileInfo = {
              sharedfileid: this.props.sharedFileID,
              title: (0, M.Xx)("#Loading"),
              description: "",
              type: "",
              previewurl: "",
              appid: 0,
              url:
                g.De.COMMUNITY_BASE_URL +
                "sharedfiles/filedetails/?id=" +
                this.props.sharedFileID,
            });
        }
        componentDidMount() {
          x.A.LoadSharedFileDynamicData(
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
              console.error("SharedFileSnippet: " + (0, N.l)(e).strErrorMsg)
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
              className: U().DynamicLinkBox,
              "data-modal-content-sizetofit":
                !!this.m_sharedFileInfo.bSizeToFit,
              "data-appid": this.m_sharedFileInfo.appid,
              "data-publishedfileid": this.props.sharedFileID,
            },
            n.createElement("img", {
              className: U().DynamicLink_Preview,
              src: this.m_sharedFileInfo.previewurl,
            }),
            n.createElement(
              "div",
              { className: U().DynamicLink_Content },
              n.createElement(
                "div",
                { className: U().DynamicLink_Name },
                this.m_sharedFileInfo.title
              ),
              n.createElement(
                "div",
                null,
                n.createElement(
                  "span",
                  { className: U().DynamicLink_Type },
                  this.m_sharedFileInfo.type
                )
              ),
              e &&
                n.createElement(
                  "div",
                  { className: U().DynamicLink_Author },
                  (0, M.kQ)(
                    "#EventEditor_Author",
                    n.createElement(
                      "span",
                      { className: U().DynamicLink_AuthorName },
                      this.m_sharedFileInfo.personnaname
                    )
                  )
                ),
              n.createElement(
                "div",
                { className: U().DynamicLink_Description },
                this.m_sharedFileInfo.description
              )
            )
          );
        }
      };
      (0, i.gn)([T.LO], L.prototype, "m_sharedFileInfo", void 0),
        (L = (0, i.gn)([D.Pi], L));
      var k = r(95598),
        P = r(7573),
        G = r(24399),
        O = r(76776),
        W = r(159),
        j = r(60501),
        X = r(38600);
      let V = class extends n.Component {
        constructor() {
          super(...arguments),
            (this.state = {
              bLoading: this.props.announcementGID
                ? !c.j1.BHasClanAnnouncementGID(this.props.announcementGID)
                : !c.j1.BHasClanAnnouncementGID(this.props.eventGID),
              bFailedLoad: !1,
            }),
            (this.m_cancelSignal = A().CancelToken.source());
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
                  a = (yield O.sV.LoadOGGClanInfoForIdentifier(t)).clanSteamID;
                } else if (void 0 !== n) {
                  a = (yield O.sV.LoadOGGClanInfoForGroupVanity(n)).clanSteamID;
                }
                const s = c.j1.LoadPartnerEventGeneric(a, e, i, r, 0);
                let o = yield s;
                yield Promise.all([
                  W.Z.Get().QueueAppRequest(o.appid, {
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
          let t = (0, N.l)(e);
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
          if (this.state.bFailedLoad) return h(a);
          if (this.state.bLoading) return n.createElement(z.V, null);
          let l =
            void 0 !== r
              ? c.j1.GetClanEventFromAnnouncementGID(r)
              : c.j1.GetClanEventModel(i);
          if (null == l) return h(a);
          let m = (0, b.jM)(g.De.LANGUAGE),
            d = l.GetImageForSizeAsArrayWithFallback(
              "capsule",
              m,
              G.FN.capsule_main
            );
          s && (d = s(d));
          let u = l.GetNameWithFallback(m),
            p = l.GetSubTitleWithSummaryFallback(m),
            _ =
              null === (e = W.Z.Get().GetApp(t)) || void 0 === e
                ? void 0
                : e.GetName(),
            f = (0, M.$1)(l.GetStartTimeAndDateUnixSeconds());
          return n.createElement(
            X.JW,
            {
              eventModel: l,
              route: X.Ue.k_eView,
              className: U().DynamicLinkBox,
              "data-modal-content-sizetofit": !0,
              "data-appid": t,
            },
            n.createElement(j.j, {
              className: U().DynamicLink_Preview,
              rgSources: d,
              onIncrementalError: (e, t, r) => o && o(t),
            }),
            n.createElement(
              "div",
              { className: U().DynamicLink_Content },
              n.createElement(
                "div",
                { className: U().DynamicLink_Author },
                (0, M.Xx)(
                  28 == l.type
                    ? "#EventDisplay_Share_Announcement"
                    : "#EventDisplay_Share_Event",
                  _
                ),
                n.createElement("span", { className: U().DynamicLink_Date }, f)
              ),
              n.createElement(
                "div",
                { className: U().DynamicLink_Name },
                n.createElement("div", { className: U().DynamicLink_Type }, u)
              ),
              n.createElement(
                "div",
                { className: U().DynamicLink_Description },
                p
              )
            )
          );
        }
      };
      V = (0, i.gn)([D.Pi], V);
      var H = r(77569),
        Z = r(15057),
        q = r.n(Z);
      let Q = class extends n.Component {
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
              let t = yield A().get(e);
              this.setState({ bLoadedMetaData: !0, data: t.data });
            } catch (e) {
              this.setState({ bError: !0 }),
                console.error(
                  "SketchFabEmbed failed to load: " + (0, N.l)(e).strErrorMsg
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
                  className: q().dynamiclink_box,
                  onClick: this.OnSketchFabClick,
                },
                n.createElement("span", null, e),
                n.createElement(
                  "span",
                  null,
                  (0, M.Xx)("#EventDisplay_SketchFab_Error_Network")
                )
              )
            : this.state.bSummaryMode
            ? n.createElement(
                "div",
                {
                  className: q().dynamiclink_box,
                  onClick: this.OnSketchFabClick,
                },
                Boolean(this.state.bLoadedMetaData)
                  ? n.createElement(
                      n.Fragment,
                      null,
                      n.createElement("img", {
                        className: q().dynamiclink_preview,
                        src: this.state.data.thumbnail_url,
                      }),
                      n.createElement("img", {
                        className: q().sketchfab_play_overlay_image,
                      }),
                      n.createElement(
                        "div",
                        { className: q().dynamiclink_content },
                        n.createElement(
                          "div",
                          { className: q().dynamiclink_name },
                          n.createElement(
                            "span",
                            { className: q().dynamiclink_type },
                            (0, M.Xx)("#EventDisplay_Sketchfab")
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
                          { className: q().dynamiclink_author },
                          this.state.data.author_name
                        )
                      )
                    )
                  : n.createElement(z.V, { size: "medium" })
              )
            : n.createElement(
                "div",
                { className: q().sketchfabmodelembedded },
                n.createElement("iframe", {
                  className: q().sketchfabmodelembedded,
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
      (0, i.gn)([S.ak], Q.prototype, "OnSketchFabClick", null),
        (Q = (0, i.gn)([D.Pi], Q));
      var K = r(85732),
        J = r(97141),
        Y = r(28268),
        $ = r(35789),
        ee = r.n($);
      function te(e) {
        const { defid: t, url: r } = e,
          i = (0, J.O)(t);
        if (!i || !i.community_item_data) return null;
        const a = i.appid,
          s = i.community_item_data.item_image_large,
          o = `${g.De.MEDIA_CDN_COMMUNITY_URL}images/items/${a}/${s}`;
        return (
          "dev" == g.De.WEB_UNIVERSE &&
            console.log("reward itemdef", (0, T.ZN)(i)),
          n.createElement(
            "div",
            { className: ee().Ctn },
            n.createElement(
              Y.HP,
              { toolTipContent: i.community_item_data.item_description },
              n.createElement("img", {
                src: o,
                alt: i.community_item_data.item_title,
              })
            )
          )
        );
      }
      const re =
          /(?:steampowered\.com|valve\.org\/store|steam\.dev\/store|store\.steamchina\.com)\/(app|bundle|sub)\/(\d+)/i,
        ie =
          /(?:steamcommunity\.com|valve\.org\/community|steam\.dev\/community|my\.steamchina\.com)\/(games|app|ogg|gid|groups)\/(\w+)\/(?:announcements\/detail|partnerevents\/view_old_announcement)\/(\d+)/i,
        ne =
          /(?:steamcommunity\.com|valve\.org\/community|steam\.dev\/community)\/(games|app|ogg|gid|groups)\/(\w+)\/partnerevents\/view\/(\d+)/i,
        ae =
          /(?:steampowered\.com|valve\.org\/store|steam\.dev\/store|store\.steamchina\.com)\/(?:news|newshub)\/(group|app)\/(\w+)\/view\/(\d+)/i,
        se = /:\/\/medal.tv\/(?:clip|clips)\/([a-z0-9]+)/i,
        oe = /sketchfab.com\/(?:models\/(?:[^\/\s]+-)?)([a-z0-9]{32})/i,
        le = /twitter\.com\/(\w+)(\/?)$/i,
        me = /twitter\.com\/hashtag\/(\w+)(\/?)$/i,
        ce = /twitch\.tv\/(\w+)(\/?)$/i,
        de =
          /(?:steamcommunity\.com|valve\.org\/community|steam\.dev\/community|my\.steamchina\.com)\/id\/(\w+)(\/?)$/i,
        ue =
          /(?:steampowered\.com|valve\.org\/store|steam\.dev\/store|store\.steamchina\.com)\/points\/shop\/.*reward\/(\d+)$/i;
      let pe = null;
      function ge(e, t) {
        if (g.De.EREALM === v.IN.k_ESteamRealmChina) return null;
        const r = (0, w.S6)(e);
        return void 0 !== (null == r ? void 0 : r.strVideoID)
          ? n.createElement(F.O, {
              videoID: r.strVideoID,
              nStartSeconds: r.nStartSeconds,
              classNameAlign: "",
              classNameSize: U().sizeFull,
              bShowVideoImmediately: !1,
            })
          : h(e, null == t ? void 0 : t.event);
      }
      function _e(e, t) {
        if (g.De.EREALM === v.IN.k_ESteamRealmChina) return null;
        const r = new RegExp(se).exec(e);
        if (r && r.length > 1) {
          const e = r[1];
          if ((null == e ? void 0 : e.length) > 0) {
            let r =
              "https://medal.tv/clip/" +
              e +
              "/?autoplay=0&donate=0" +
              (t && t.event ? "&steamappid=" + t.event.appid : "");
            return n.createElement("iframe", {
              className: H.MedalTVWidget,
              src: r,
              frameBorder: 0,
              allow: "autoplay",
            });
          }
        }
        return h(e, null == t ? void 0 : t.event);
      }
      function he(e, t) {
        let r = new RegExp(oe).exec(e);
        if (r && r.length > 1) {
          let e = r[1];
          if (e && e.length > 1) return n.createElement(Q, { modelID: e });
        }
        return h(e, null == t ? void 0 : t.event);
      }
      function fe(e, t) {
        const r = e.split("?");
        let i;
        if (2 == r.length) {
          const e = new URLSearchParams(r[1]);
          e.has("id") && (i = e.get("id"));
        }
        return void 0 !== i
          ? n.createElement(L, { sharedFileID: i })
          : h(e, null == t ? void 0 : t.event);
      }
      function Be(e) {
        let t = (0, u.FM)(e).toLocaleLowerCase(),
          r = (0, u.FM)(g.De.STORE_BASE_URL),
          i = (0, u.FM)(g.De.COMMUNITY_BASE_URL);
        return (
          t == r ||
          t == i ||
          ("dev" === g.De.WEB_UNIVERSE &&
            (t.includes("steampowered.com") ||
              t.includes("steamcommunity.com") ||
              t.includes("steamchina.com")))
        );
      }
      function ye(e, t) {
        if (Be(e)) {
          let t = new RegExp(re).exec(e);
          if (t && t.length > 2) {
            let e = t[1],
              r = Number(t[2]);
            if (r > 0) {
              let t = "bundle" == e ? "bundle" : "sub" == e ? "sub" : "game";
              return n.createElement(
                "div",
                {
                  className: (0, P.Z)(
                    H.AppSummaryWidgetCtn,
                    "AppSummaryWidgetCtn"
                  ),
                },
                n.createElement(K.ju, {
                  id: r,
                  type: t,
                  bAllowTwoLinesForHeader: !0,
                })
              );
            }
          }
        }
        return h(e, null == t ? void 0 : t.event);
      }
      function Ce(e, t) {
        if (Be(e)) {
          const t = new RegExp(ue).exec(e);
          if (t && t.length > 1) {
            const r = Number(t[1]);
            if (r > 0)
              return n.createElement(
                "div",
                { className: (0, P.Z)(H.LoyaltyRewardCtn) },
                n.createElement(te, { defid: r, url: e })
              );
          }
        }
        return h(e, null == t ? void 0 : t.event);
      }
      function be(e, t) {
        if (Be(e)) {
          let t = new RegExp(ie).exec(e);
          if (t && t.length > 2) {
            let r, i, a, s;
            "gid" == t[1]
              ? (i = new E.K(t[2]))
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
              return n.createElement(V, {
                appid: r,
                clanSteamID: i,
                strVanity: a,
                strGroupVanity: s,
                announcementGID: o,
                strURL: e,
              });
          }
        }
        return h(e, null == t ? void 0 : t.event);
      }
      function Se(e, t) {
        return De(ae, e, t);
      }
      function ve(e, t) {
        return De(ne, e, t);
      }
      function we(e, t) {
        return g.De.EREALM === v.IN.k_ESteamRealmChina
          ? null
          : Ue(e, n.createElement(k.tLe, null), "@", t);
      }
      function Ee(e, t) {
        return g.De.EREALM === v.IN.k_ESteamRealmChina
          ? null
          : Ue(e, n.createElement(k.tLe, null), "#", t);
      }
      function Fe(e, t) {
        return g.De.EREALM === v.IN.k_ESteamRealmChina
          ? null
          : Ue(e, n.createElement(k.Lk$, null), void 0, t);
      }
      function Re(e, t) {
        return Ue(e, n.createElement(k.ui7, null), void 0, t);
      }
      function Ue(e, t, r, i) {
        let a;
        const s = e.endsWith("/") ? e.length - 1 : e.length,
          o = e.lastIndexOf("/", s - 1);
        -1 != o && o + 1 < e.length && (a = e.substring(o + 1, s)),
          r && a && (a = r + a);
        const l = h(e, null == i ? void 0 : i.event, null != a ? a : e);
        return n.createElement(
          "div",
          { className: H.SocialLink },
          n.createElement("div", { className: H.SocialIcon }, t),
          l
        );
      }
      function De(e, t, r) {
        if (Be(t)) {
          let r = new RegExp(e).exec(t);
          if (r && r.length > 2) {
            let e, i, a, s;
            "gid" == r[1]
              ? (i = new E.K(r[2]))
              : "group" == r[1]
              ? (i = E.K.InitFromClanID(Number.parseInt(r[2])))
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
              return n.createElement(V, {
                appid: e,
                clanSteamID: i,
                strVanity: a,
                strGroupVanity: s,
                eventGID: o,
                strURL: t,
              });
          }
        }
        return h(t, null == r ? void 0 : r.event);
      }
      r(990);
      var Me = r(33019),
        Ie = r(40110);
      r(21205);
      const Ae = Me.Message;
      class Te extends Ae {
        constructor(e = null) {
          super(),
            Te.prototype.operation || Ie.aR(Te.M()),
            Ae.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            Te.sm_m ||
              (Te.sm_m = {
                proto: Te,
                fields: {
                  operation: { n: 1, br: Ie.FE.readEnum, bw: Ie.Xc.writeEnum },
                  machine_name: {
                    n: 2,
                    br: Ie.FE.readString,
                    bw: Ie.Xc.writeString,
                  },
                  client_id: {
                    n: 3,
                    br: Ie.FE.readUint64String,
                    bw: Ie.Xc.writeUint64String,
                  },
                  time_last_updated: {
                    n: 4,
                    br: Ie.FE.readUint32,
                    bw: Ie.Xc.writeUint32,
                  },
                },
              }),
            Te.sm_m
          );
        }
        static MBF() {
          return Te.sm_mbf || (Te.sm_mbf = Ie.Bh(Te.M())), Te.sm_mbf;
        }
        toObject(e = !1) {
          return Te.toObject(e, this);
        }
        static toObject(e, t) {
          return Ie.TA(Te.M(), e, t);
        }
        static fromObject(e) {
          return Ie.aD(Te.M(), e);
        }
        static deserializeBinary(e) {
          let t = new Me.BinaryReader(e),
            r = new Te();
          return Te.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return Ie.F(Te.MBF(), e, t);
        }
        serializeBinary() {
          var e = new Me.BinaryWriter();
          return Te.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          Ie.l2(Te.M(), e, t);
        }
        serializeBase64String() {
          var e = new Me.BinaryWriter();
          return Te.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCloud_PendingRemoteOperation";
        }
      }
      const ze = Me.Message;
      class xe extends ze {
        constructor(e = null) {
          super(),
            xe.prototype.appid || Ie.aR(xe.M()),
            ze.initialize(this, e, 0, -1, [9], null);
        }
        static M() {
          return (
            xe.sm_m ||
              (xe.sm_m = {
                proto: xe,
                fields: {
                  appid: { n: 1, br: Ie.FE.readUint32, bw: Ie.Xc.writeUint32 },
                  ugcid: {
                    n: 2,
                    br: Ie.FE.readUint64String,
                    bw: Ie.Xc.writeUint64String,
                  },
                  filename: {
                    n: 3,
                    br: Ie.FE.readString,
                    bw: Ie.Xc.writeString,
                  },
                  timestamp: {
                    n: 4,
                    br: Ie.FE.readUint64String,
                    bw: Ie.Xc.writeUint64String,
                  },
                  file_size: {
                    n: 5,
                    br: Ie.FE.readUint32,
                    bw: Ie.Xc.writeUint32,
                  },
                  url: { n: 6, br: Ie.FE.readString, bw: Ie.Xc.writeString },
                  steamid_creator: {
                    n: 7,
                    br: Ie.FE.readFixed64String,
                    bw: Ie.Xc.writeFixed64String,
                  },
                  flags: { n: 8, br: Ie.FE.readUint32, bw: Ie.Xc.writeUint32 },
                  platforms_to_sync: {
                    n: 9,
                    r: !0,
                    q: !0,
                    br: Ie.FE.readString,
                    bw: Ie.Xc.writeRepeatedString,
                  },
                  file_sha: {
                    n: 10,
                    br: Ie.FE.readString,
                    bw: Ie.Xc.writeString,
                  },
                },
              }),
            xe.sm_m
          );
        }
        static MBF() {
          return xe.sm_mbf || (xe.sm_mbf = Ie.Bh(xe.M())), xe.sm_mbf;
        }
        toObject(e = !1) {
          return xe.toObject(e, this);
        }
        static toObject(e, t) {
          return Ie.TA(xe.M(), e, t);
        }
        static fromObject(e) {
          return Ie.aD(xe.M(), e);
        }
        static deserializeBinary(e) {
          let t = new Me.BinaryReader(e),
            r = new xe();
          return xe.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return Ie.F(xe.MBF(), e, t);
        }
        serializeBinary() {
          var e = new Me.BinaryWriter();
          return xe.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          Ie.l2(xe.M(), e, t);
        }
        serializeBase64String() {
          var e = new Me.BinaryWriter();
          return xe.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCloud_UserFile";
        }
      }
      class Ne extends ze {
        constructor(e = null) {
          super(),
            Ne.prototype.server_url || Ie.aR(Ne.M()),
            ze.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            Ne.sm_m ||
              (Ne.sm_m = {
                proto: Ne,
                fields: {
                  server_url: {
                    n: 1,
                    br: Ie.FE.readString,
                    bw: Ie.Xc.writeString,
                  },
                },
              }),
            Ne.sm_m
          );
        }
        static MBF() {
          return Ne.sm_mbf || (Ne.sm_mbf = Ie.Bh(Ne.M())), Ne.sm_mbf;
        }
        toObject(e = !1) {
          return Ne.toObject(e, this);
        }
        static toObject(e, t) {
          return Ie.TA(Ne.M(), e, t);
        }
        static fromObject(e) {
          return Ie.aD(Ne.M(), e);
        }
        static deserializeBinary(e) {
          let t = new Me.BinaryReader(e),
            r = new Ne();
          return Ne.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return Ie.F(Ne.MBF(), e, t);
        }
        serializeBinary() {
          var e = new Me.BinaryWriter();
          return Ne.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          Ie.l2(Ne.M(), e, t);
        }
        serializeBase64String() {
          var e = new Me.BinaryWriter();
          return Ne.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCloud_GetUploadServerInfo_Response";
        }
      }
      class Le extends ze {
        constructor(e = null) {
          super(),
            Le.prototype.ugcid || Ie.aR(Le.M()),
            ze.initialize(this, e, 0, -1, [6], null);
        }
        static M() {
          return (
            Le.sm_m ||
              (Le.sm_m = {
                proto: Le,
                fields: {
                  ugcid: {
                    n: 1,
                    br: Ie.FE.readFixed64String,
                    bw: Ie.Xc.writeFixed64String,
                  },
                  timestamp: {
                    n: 2,
                    br: Ie.FE.readFixed32,
                    bw: Ie.Xc.writeFixed32,
                  },
                  url_host: {
                    n: 3,
                    br: Ie.FE.readString,
                    bw: Ie.Xc.writeString,
                  },
                  url_path: {
                    n: 4,
                    br: Ie.FE.readString,
                    bw: Ie.Xc.writeString,
                  },
                  use_https: { n: 5, br: Ie.FE.readBool, bw: Ie.Xc.writeBool },
                  request_headers: { n: 6, c: ke, r: !0, q: !0 },
                },
              }),
            Le.sm_m
          );
        }
        static MBF() {
          return Le.sm_mbf || (Le.sm_mbf = Ie.Bh(Le.M())), Le.sm_mbf;
        }
        toObject(e = !1) {
          return Le.toObject(e, this);
        }
        static toObject(e, t) {
          return Ie.TA(Le.M(), e, t);
        }
        static fromObject(e) {
          return Ie.aD(Le.M(), e);
        }
        static deserializeBinary(e) {
          let t = new Me.BinaryReader(e),
            r = new Le();
          return Le.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return Ie.F(Le.MBF(), e, t);
        }
        serializeBinary() {
          var e = new Me.BinaryWriter();
          return Le.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          Ie.l2(Le.M(), e, t);
        }
        serializeBase64String() {
          var e = new Me.BinaryWriter();
          return Le.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCloud_BeginHTTPUpload_Response";
        }
      }
      class ke extends ze {
        constructor(e = null) {
          super(),
            ke.prototype.name || Ie.aR(ke.M()),
            ze.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            ke.sm_m ||
              (ke.sm_m = {
                proto: ke,
                fields: {
                  name: { n: 1, br: Ie.FE.readString, bw: Ie.Xc.writeString },
                  value: { n: 2, br: Ie.FE.readString, bw: Ie.Xc.writeString },
                },
              }),
            ke.sm_m
          );
        }
        static MBF() {
          return ke.sm_mbf || (ke.sm_mbf = Ie.Bh(ke.M())), ke.sm_mbf;
        }
        toObject(e = !1) {
          return ke.toObject(e, this);
        }
        static toObject(e, t) {
          return Ie.TA(ke.M(), e, t);
        }
        static fromObject(e) {
          return Ie.aD(ke.M(), e);
        }
        static deserializeBinary(e) {
          let t = new Me.BinaryReader(e),
            r = new ke();
          return ke.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return Ie.F(ke.MBF(), e, t);
        }
        serializeBinary() {
          var e = new Me.BinaryWriter();
          return ke.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          Ie.l2(ke.M(), e, t);
        }
        serializeBase64String() {
          var e = new Me.BinaryWriter();
          return ke.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCloud_BeginHTTPUpload_Response_HTTPHeaders";
        }
      }
      class Pe extends ze {
        constructor(e = null) {
          super(),
            Pe.prototype.file_committed || Ie.aR(Pe.M()),
            ze.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            Pe.sm_m ||
              (Pe.sm_m = {
                proto: Pe,
                fields: {
                  file_committed: {
                    n: 1,
                    br: Ie.FE.readBool,
                    bw: Ie.Xc.writeBool,
                  },
                },
              }),
            Pe.sm_m
          );
        }
        static MBF() {
          return Pe.sm_mbf || (Pe.sm_mbf = Ie.Bh(Pe.M())), Pe.sm_mbf;
        }
        toObject(e = !1) {
          return Pe.toObject(e, this);
        }
        static toObject(e, t) {
          return Ie.TA(Pe.M(), e, t);
        }
        static fromObject(e) {
          return Ie.aD(Pe.M(), e);
        }
        static deserializeBinary(e) {
          let t = new Me.BinaryReader(e),
            r = new Pe();
          return Pe.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return Ie.F(Pe.MBF(), e, t);
        }
        serializeBinary() {
          var e = new Me.BinaryWriter();
          return Pe.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          Ie.l2(Pe.M(), e, t);
        }
        serializeBase64String() {
          var e = new Me.BinaryWriter();
          return Pe.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCloud_CommitHTTPUpload_Response";
        }
      }
      class Ge extends ze {
        constructor(e = null) {
          super(),
            Ge.prototype.storage_system || Ie.aR(Ge.M()),
            ze.initialize(this, e, 0, -1, [7], null);
        }
        static M() {
          return (
            Ge.sm_m ||
              (Ge.sm_m = {
                proto: Ge,
                fields: {
                  storage_system: {
                    n: 1,
                    br: Ie.FE.readEnum,
                    bw: Ie.Xc.writeEnum,
                  },
                  ugcid: {
                    n: 2,
                    br: Ie.FE.readFixed64String,
                    bw: Ie.Xc.writeFixed64String,
                  },
                  timestamp: {
                    n: 3,
                    br: Ie.FE.readFixed32,
                    bw: Ie.Xc.writeFixed32,
                  },
                  url_host: {
                    n: 4,
                    br: Ie.FE.readString,
                    bw: Ie.Xc.writeString,
                  },
                  url_path: {
                    n: 5,
                    br: Ie.FE.readString,
                    bw: Ie.Xc.writeString,
                  },
                  use_https: { n: 6, br: Ie.FE.readBool, bw: Ie.Xc.writeBool },
                  request_headers: { n: 7, c: Oe, r: !0, q: !0 },
                },
              }),
            Ge.sm_m
          );
        }
        static MBF() {
          return Ge.sm_mbf || (Ge.sm_mbf = Ie.Bh(Ge.M())), Ge.sm_mbf;
        }
        toObject(e = !1) {
          return Ge.toObject(e, this);
        }
        static toObject(e, t) {
          return Ie.TA(Ge.M(), e, t);
        }
        static fromObject(e) {
          return Ie.aD(Ge.M(), e);
        }
        static deserializeBinary(e) {
          let t = new Me.BinaryReader(e),
            r = new Ge();
          return Ge.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return Ie.F(Ge.MBF(), e, t);
        }
        serializeBinary() {
          var e = new Me.BinaryWriter();
          return Ge.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          Ie.l2(Ge.M(), e, t);
        }
        serializeBase64String() {
          var e = new Me.BinaryWriter();
          return Ge.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCloud_BeginUGCUpload_Response";
        }
      }
      class Oe extends ze {
        constructor(e = null) {
          super(),
            Oe.prototype.name || Ie.aR(Oe.M()),
            ze.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            Oe.sm_m ||
              (Oe.sm_m = {
                proto: Oe,
                fields: {
                  name: { n: 1, br: Ie.FE.readString, bw: Ie.Xc.writeString },
                  value: { n: 2, br: Ie.FE.readString, bw: Ie.Xc.writeString },
                },
              }),
            Oe.sm_m
          );
        }
        static MBF() {
          return Oe.sm_mbf || (Oe.sm_mbf = Ie.Bh(Oe.M())), Oe.sm_mbf;
        }
        toObject(e = !1) {
          return Oe.toObject(e, this);
        }
        static toObject(e, t) {
          return Ie.TA(Oe.M(), e, t);
        }
        static fromObject(e) {
          return Ie.aD(Oe.M(), e);
        }
        static deserializeBinary(e) {
          let t = new Me.BinaryReader(e),
            r = new Oe();
          return Oe.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return Ie.F(Oe.MBF(), e, t);
        }
        serializeBinary() {
          var e = new Me.BinaryWriter();
          return Oe.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          Ie.l2(Oe.M(), e, t);
        }
        serializeBase64String() {
          var e = new Me.BinaryWriter();
          return Oe.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCloud_BeginUGCUpload_Response_HTTPHeaders";
        }
      }
      class We extends ze {
        constructor(e = null) {
          super(),
            We.prototype.file_committed || Ie.aR(We.M()),
            ze.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            We.sm_m ||
              (We.sm_m = {
                proto: We,
                fields: {
                  file_committed: {
                    n: 1,
                    br: Ie.FE.readBool,
                    bw: Ie.Xc.writeBool,
                  },
                },
              }),
            We.sm_m
          );
        }
        static MBF() {
          return We.sm_mbf || (We.sm_mbf = Ie.Bh(We.M())), We.sm_mbf;
        }
        toObject(e = !1) {
          return We.toObject(e, this);
        }
        static toObject(e, t) {
          return Ie.TA(We.M(), e, t);
        }
        static fromObject(e) {
          return Ie.aD(We.M(), e);
        }
        static deserializeBinary(e) {
          let t = new Me.BinaryReader(e),
            r = new We();
          return We.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return Ie.F(We.MBF(), e, t);
        }
        serializeBinary() {
          var e = new Me.BinaryWriter();
          return We.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          Ie.l2(We.M(), e, t);
        }
        serializeBase64String() {
          var e = new Me.BinaryWriter();
          return We.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCloud_CommitUGCUpload_Response";
        }
      }
      class je extends ze {
        constructor(e = null) {
          super(),
            je.prototype.details || Ie.aR(je.M()),
            ze.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            je.sm_m ||
              (je.sm_m = { proto: je, fields: { details: { n: 1, c: xe } } }),
            je.sm_m
          );
        }
        static MBF() {
          return je.sm_mbf || (je.sm_mbf = Ie.Bh(je.M())), je.sm_mbf;
        }
        toObject(e = !1) {
          return je.toObject(e, this);
        }
        static toObject(e, t) {
          return Ie.TA(je.M(), e, t);
        }
        static fromObject(e) {
          return Ie.aD(je.M(), e);
        }
        static deserializeBinary(e) {
          let t = new Me.BinaryReader(e),
            r = new je();
          return je.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return Ie.F(je.MBF(), e, t);
        }
        serializeBinary() {
          var e = new Me.BinaryWriter();
          return je.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          Ie.l2(je.M(), e, t);
        }
        serializeBase64String() {
          var e = new Me.BinaryWriter();
          return je.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCloud_GetFileDetails_Response";
        }
      }
      class Xe extends ze {
        constructor(e = null) {
          super(),
            Xe.prototype.files || Ie.aR(Xe.M()),
            ze.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            Xe.sm_m ||
              (Xe.sm_m = {
                proto: Xe,
                fields: {
                  files: { n: 1, c: xe, r: !0, q: !0 },
                  total_files: {
                    n: 2,
                    br: Ie.FE.readUint32,
                    bw: Ie.Xc.writeUint32,
                  },
                },
              }),
            Xe.sm_m
          );
        }
        static MBF() {
          return Xe.sm_mbf || (Xe.sm_mbf = Ie.Bh(Xe.M())), Xe.sm_mbf;
        }
        toObject(e = !1) {
          return Xe.toObject(e, this);
        }
        static toObject(e, t) {
          return Ie.TA(Xe.M(), e, t);
        }
        static fromObject(e) {
          return Ie.aD(Xe.M(), e);
        }
        static deserializeBinary(e) {
          let t = new Me.BinaryReader(e),
            r = new Xe();
          return Xe.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return Ie.F(Xe.MBF(), e, t);
        }
        serializeBinary() {
          var e = new Me.BinaryWriter();
          return Xe.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          Ie.l2(Xe.M(), e, t);
        }
        serializeBase64String() {
          var e = new Me.BinaryWriter();
          return Xe.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCloud_EnumerateUserFiles_Response";
        }
      }
      class Ve extends ze {
        constructor(e = null) {
          super(), ze.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return Ve.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new Ve();
        }
        static deserializeBinary(e) {
          let t = new Me.BinaryReader(e),
            r = new Ve();
          return Ve.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new Me.BinaryWriter();
          return Ve.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new Me.BinaryWriter();
          return Ve.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCloud_Delete_Response";
        }
      }
      class He extends ze {
        constructor(e = null) {
          super(),
            He.prototype.key || Ie.aR(He.M()),
            ze.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            He.sm_m ||
              (He.sm_m = {
                proto: He,
                fields: {
                  key: { n: 1, br: Ie.FE.readBytes, bw: Ie.Xc.writeBytes },
                  crc: { n: 2, br: Ie.FE.readInt32, bw: Ie.Xc.writeInt32 },
                },
              }),
            He.sm_m
          );
        }
        static MBF() {
          return He.sm_mbf || (He.sm_mbf = Ie.Bh(He.M())), He.sm_mbf;
        }
        toObject(e = !1) {
          return He.toObject(e, this);
        }
        static toObject(e, t) {
          return Ie.TA(He.M(), e, t);
        }
        static fromObject(e) {
          return Ie.aD(He.M(), e);
        }
        static deserializeBinary(e) {
          let t = new Me.BinaryReader(e),
            r = new He();
          return He.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return Ie.F(He.MBF(), e, t);
        }
        serializeBinary() {
          var e = new Me.BinaryWriter();
          return He.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          Ie.l2(He.M(), e, t);
        }
        serializeBase64String() {
          var e = new Me.BinaryWriter();
          return He.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCloud_GetClientEncryptionKey_Response";
        }
      }
      class Ze extends ze {
        constructor(e = null) {
          super(),
            Ze.prototype.pending_remote_operations || Ie.aR(Ze.M()),
            ze.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            Ze.sm_m ||
              (Ze.sm_m = {
                proto: Ze,
                fields: {
                  pending_remote_operations: { n: 1, c: Te, r: !0, q: !0 },
                },
              }),
            Ze.sm_m
          );
        }
        static MBF() {
          return Ze.sm_mbf || (Ze.sm_mbf = Ie.Bh(Ze.M())), Ze.sm_mbf;
        }
        toObject(e = !1) {
          return Ze.toObject(e, this);
        }
        static toObject(e, t) {
          return Ie.TA(Ze.M(), e, t);
        }
        static fromObject(e) {
          return Ie.aD(Ze.M(), e);
        }
        static deserializeBinary(e) {
          let t = new Me.BinaryReader(e),
            r = new Ze();
          return Ze.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return Ie.F(Ze.MBF(), e, t);
        }
        serializeBinary() {
          var e = new Me.BinaryWriter();
          return Ze.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          Ie.l2(Ze.M(), e, t);
        }
        serializeBase64String() {
          var e = new Me.BinaryWriter();
          return Ze.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCloud_AppLaunchIntent_Response";
        }
      }
      class qe extends ze {
        constructor(e = null) {
          super(),
            qe.prototype.existing_files || Ie.aR(qe.M()),
            ze.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            qe.sm_m ||
              (qe.sm_m = {
                proto: qe,
                fields: {
                  existing_files: {
                    n: 1,
                    br: Ie.FE.readUint32,
                    bw: Ie.Xc.writeUint32,
                  },
                  existing_bytes: {
                    n: 2,
                    br: Ie.FE.readUint64String,
                    bw: Ie.Xc.writeUint64String,
                  },
                  max_num_files: {
                    n: 3,
                    br: Ie.FE.readUint32,
                    bw: Ie.Xc.writeUint32,
                  },
                  max_num_bytes: {
                    n: 4,
                    br: Ie.FE.readUint64String,
                    bw: Ie.Xc.writeUint64String,
                  },
                },
              }),
            qe.sm_m
          );
        }
        static MBF() {
          return qe.sm_mbf || (qe.sm_mbf = Ie.Bh(qe.M())), qe.sm_mbf;
        }
        toObject(e = !1) {
          return qe.toObject(e, this);
        }
        static toObject(e, t) {
          return Ie.TA(qe.M(), e, t);
        }
        static fromObject(e) {
          return Ie.aD(qe.M(), e);
        }
        static deserializeBinary(e) {
          let t = new Me.BinaryReader(e),
            r = new qe();
          return qe.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return Ie.F(qe.MBF(), e, t);
        }
        serializeBinary() {
          var e = new Me.BinaryWriter();
          return qe.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          Ie.l2(qe.M(), e, t);
        }
        serializeBase64String() {
          var e = new Me.BinaryWriter();
          return qe.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCloud_ClientGetAppQuotaUsage_Response";
        }
      }
      class Qe extends ze {
        constructor(e = null) {
          super(),
            Qe.prototype.file_name || Ie.aR(Qe.M()),
            ze.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            Qe.sm_m ||
              (Qe.sm_m = {
                proto: Qe,
                fields: {
                  file_name: {
                    n: 1,
                    br: Ie.FE.readString,
                    bw: Ie.Xc.writeString,
                  },
                  sha_file: { n: 2, br: Ie.FE.readBytes, bw: Ie.Xc.writeBytes },
                  time_stamp: {
                    n: 3,
                    br: Ie.FE.readUint64String,
                    bw: Ie.Xc.writeUint64String,
                  },
                  raw_file_size: {
                    n: 4,
                    br: Ie.FE.readUint32,
                    bw: Ie.Xc.writeUint32,
                  },
                  persist_state: {
                    n: 5,
                    br: Ie.FE.readEnum,
                    bw: Ie.Xc.writeEnum,
                  },
                  platforms_to_sync: {
                    n: 6,
                    br: Ie.FE.readUint32,
                    bw: Ie.Xc.writeUint32,
                  },
                  path_prefix_index: {
                    n: 7,
                    br: Ie.FE.readUint32,
                    bw: Ie.Xc.writeUint32,
                  },
                  machine_name_index: {
                    n: 8,
                    br: Ie.FE.readUint32,
                    bw: Ie.Xc.writeUint32,
                  },
                },
              }),
            Qe.sm_m
          );
        }
        static MBF() {
          return Qe.sm_mbf || (Qe.sm_mbf = Ie.Bh(Qe.M())), Qe.sm_mbf;
        }
        toObject(e = !1) {
          return Qe.toObject(e, this);
        }
        static toObject(e, t) {
          return Ie.TA(Qe.M(), e, t);
        }
        static fromObject(e) {
          return Ie.aD(Qe.M(), e);
        }
        static deserializeBinary(e) {
          let t = new Me.BinaryReader(e),
            r = new Qe();
          return Qe.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return Ie.F(Qe.MBF(), e, t);
        }
        serializeBinary() {
          var e = new Me.BinaryWriter();
          return Qe.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          Ie.l2(Qe.M(), e, t);
        }
        serializeBase64String() {
          var e = new Me.BinaryWriter();
          return Qe.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCloud_AppFileInfo";
        }
      }
      class Ke extends ze {
        constructor(e = null) {
          super(),
            Ke.prototype.current_change_number || Ie.aR(Ke.M()),
            ze.initialize(this, e, 0, -1, [2, 4, 5], null);
        }
        static M() {
          return (
            Ke.sm_m ||
              (Ke.sm_m = {
                proto: Ke,
                fields: {
                  current_change_number: {
                    n: 1,
                    br: Ie.FE.readUint64String,
                    bw: Ie.Xc.writeUint64String,
                  },
                  files: { n: 2, c: Qe, r: !0, q: !0 },
                  is_only_delta: {
                    n: 3,
                    br: Ie.FE.readBool,
                    bw: Ie.Xc.writeBool,
                  },
                  path_prefixes: {
                    n: 4,
                    r: !0,
                    q: !0,
                    br: Ie.FE.readString,
                    bw: Ie.Xc.writeRepeatedString,
                  },
                  machine_names: {
                    n: 5,
                    r: !0,
                    q: !0,
                    br: Ie.FE.readString,
                    bw: Ie.Xc.writeRepeatedString,
                  },
                  app_buildid_hwm: {
                    n: 6,
                    br: Ie.FE.readUint64String,
                    bw: Ie.Xc.writeUint64String,
                  },
                },
              }),
            Ke.sm_m
          );
        }
        static MBF() {
          return Ke.sm_mbf || (Ke.sm_mbf = Ie.Bh(Ke.M())), Ke.sm_mbf;
        }
        toObject(e = !1) {
          return Ke.toObject(e, this);
        }
        static toObject(e, t) {
          return Ie.TA(Ke.M(), e, t);
        }
        static fromObject(e) {
          return Ie.aD(Ke.M(), e);
        }
        static deserializeBinary(e) {
          let t = new Me.BinaryReader(e),
            r = new Ke();
          return Ke.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return Ie.F(Ke.MBF(), e, t);
        }
        serializeBinary() {
          var e = new Me.BinaryWriter();
          return Ke.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          Ie.l2(Ke.M(), e, t);
        }
        serializeBase64String() {
          var e = new Me.BinaryWriter();
          return Ke.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCloud_GetAppFileChangelist_Response";
        }
      }
      class Je extends ze {
        constructor(e = null) {
          super(),
            Je.prototype.url_host || Ie.aR(Je.M()),
            ze.initialize(this, e, 0, -1, [5], null);
        }
        static M() {
          return (
            Je.sm_m ||
              (Je.sm_m = {
                proto: Je,
                fields: {
                  url_host: {
                    n: 1,
                    br: Ie.FE.readString,
                    bw: Ie.Xc.writeString,
                  },
                  url_path: {
                    n: 2,
                    br: Ie.FE.readString,
                    bw: Ie.Xc.writeString,
                  },
                  use_https: { n: 3, br: Ie.FE.readBool, bw: Ie.Xc.writeBool },
                  http_method: {
                    n: 4,
                    br: Ie.FE.readInt32,
                    bw: Ie.Xc.writeInt32,
                  },
                  request_headers: { n: 5, c: Ye, r: !0, q: !0 },
                  block_offset: {
                    n: 6,
                    br: Ie.FE.readUint64String,
                    bw: Ie.Xc.writeUint64String,
                  },
                  block_length: {
                    n: 7,
                    br: Ie.FE.readUint32,
                    bw: Ie.Xc.writeUint32,
                  },
                  explicit_body_data: {
                    n: 8,
                    br: Ie.FE.readBytes,
                    bw: Ie.Xc.writeBytes,
                  },
                  may_parallelize: {
                    n: 9,
                    br: Ie.FE.readBool,
                    bw: Ie.Xc.writeBool,
                  },
                },
              }),
            Je.sm_m
          );
        }
        static MBF() {
          return Je.sm_mbf || (Je.sm_mbf = Ie.Bh(Je.M())), Je.sm_mbf;
        }
        toObject(e = !1) {
          return Je.toObject(e, this);
        }
        static toObject(e, t) {
          return Ie.TA(Je.M(), e, t);
        }
        static fromObject(e) {
          return Ie.aD(Je.M(), e);
        }
        static deserializeBinary(e) {
          let t = new Me.BinaryReader(e),
            r = new Je();
          return Je.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return Ie.F(Je.MBF(), e, t);
        }
        serializeBinary() {
          var e = new Me.BinaryWriter();
          return Je.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          Ie.l2(Je.M(), e, t);
        }
        serializeBase64String() {
          var e = new Me.BinaryWriter();
          return Je.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "ClientCloudFileUploadBlockDetails";
        }
      }
      class Ye extends ze {
        constructor(e = null) {
          super(),
            Ye.prototype.name || Ie.aR(Ye.M()),
            ze.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            Ye.sm_m ||
              (Ye.sm_m = {
                proto: Ye,
                fields: {
                  name: { n: 1, br: Ie.FE.readString, bw: Ie.Xc.writeString },
                  value: { n: 2, br: Ie.FE.readString, bw: Ie.Xc.writeString },
                },
              }),
            Ye.sm_m
          );
        }
        static MBF() {
          return Ye.sm_mbf || (Ye.sm_mbf = Ie.Bh(Ye.M())), Ye.sm_mbf;
        }
        toObject(e = !1) {
          return Ye.toObject(e, this);
        }
        static toObject(e, t) {
          return Ie.TA(Ye.M(), e, t);
        }
        static fromObject(e) {
          return Ie.aD(Ye.M(), e);
        }
        static deserializeBinary(e) {
          let t = new Me.BinaryReader(e),
            r = new Ye();
          return Ye.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return Ie.F(Ye.MBF(), e, t);
        }
        serializeBinary() {
          var e = new Me.BinaryWriter();
          return Ye.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          Ie.l2(Ye.M(), e, t);
        }
        serializeBase64String() {
          var e = new Me.BinaryWriter();
          return Ye.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "ClientCloudFileUploadBlockDetails_HTTPHeaders";
        }
      }
      class $e extends ze {
        constructor(e = null) {
          super(),
            $e.prototype.batch_id || Ie.aR($e.M()),
            ze.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            $e.sm_m ||
              ($e.sm_m = {
                proto: $e,
                fields: {
                  batch_id: {
                    n: 1,
                    br: Ie.FE.readUint64String,
                    bw: Ie.Xc.writeUint64String,
                  },
                  app_change_number: {
                    n: 4,
                    br: Ie.FE.readUint64String,
                    bw: Ie.Xc.writeUint64String,
                  },
                },
              }),
            $e.sm_m
          );
        }
        static MBF() {
          return $e.sm_mbf || ($e.sm_mbf = Ie.Bh($e.M())), $e.sm_mbf;
        }
        toObject(e = !1) {
          return $e.toObject(e, this);
        }
        static toObject(e, t) {
          return Ie.TA($e.M(), e, t);
        }
        static fromObject(e) {
          return Ie.aD($e.M(), e);
        }
        static deserializeBinary(e) {
          let t = new Me.BinaryReader(e),
            r = new $e();
          return $e.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return Ie.F($e.MBF(), e, t);
        }
        serializeBinary() {
          var e = new Me.BinaryWriter();
          return $e.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          Ie.l2($e.M(), e, t);
        }
        serializeBase64String() {
          var e = new Me.BinaryWriter();
          return $e.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCloud_BeginAppUploadBatch_Response";
        }
      }
      class et extends ze {
        constructor(e = null) {
          super(), ze.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return et.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new et();
        }
        static deserializeBinary(e) {
          let t = new Me.BinaryReader(e),
            r = new et();
          return et.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new Me.BinaryWriter();
          return et.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new Me.BinaryWriter();
          return et.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCloud_CompleteAppUploadBatch_Response";
        }
      }
      class tt extends ze {
        constructor(e = null) {
          super(),
            tt.prototype.appid || Ie.aR(tt.M()),
            ze.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            tt.sm_m ||
              (tt.sm_m = {
                proto: tt,
                fields: {
                  appid: { n: 1, br: Ie.FE.readUint32, bw: Ie.Xc.writeUint32 },
                  app_change_number: {
                    n: 2,
                    br: Ie.FE.readUint64String,
                    bw: Ie.Xc.writeUint64String,
                  },
                },
              }),
            tt.sm_m
          );
        }
        static MBF() {
          return tt.sm_mbf || (tt.sm_mbf = Ie.Bh(tt.M())), tt.sm_mbf;
        }
        toObject(e = !1) {
          return tt.toObject(e, this);
        }
        static toObject(e, t) {
          return Ie.TA(tt.M(), e, t);
        }
        static fromObject(e) {
          return Ie.aD(tt.M(), e);
        }
        static deserializeBinary(e) {
          let t = new Me.BinaryReader(e),
            r = new tt();
          return tt.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return Ie.F(tt.MBF(), e, t);
        }
        serializeBinary() {
          var e = new Me.BinaryWriter();
          return tt.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          Ie.l2(tt.M(), e, t);
        }
        serializeBase64String() {
          var e = new Me.BinaryWriter();
          return tt.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCloud_AppCloudStateChange_Notification";
        }
      }
      class rt extends ze {
        constructor(e = null) {
          super(),
            rt.prototype.encrypt_file || Ie.aR(rt.M()),
            ze.initialize(this, e, 0, -1, [2], null);
        }
        static M() {
          return (
            rt.sm_m ||
              (rt.sm_m = {
                proto: rt,
                fields: {
                  encrypt_file: {
                    n: 1,
                    br: Ie.FE.readBool,
                    bw: Ie.Xc.writeBool,
                  },
                  block_requests: { n: 2, c: Je, r: !0, q: !0 },
                },
              }),
            rt.sm_m
          );
        }
        static MBF() {
          return rt.sm_mbf || (rt.sm_mbf = Ie.Bh(rt.M())), rt.sm_mbf;
        }
        toObject(e = !1) {
          return rt.toObject(e, this);
        }
        static toObject(e, t) {
          return Ie.TA(rt.M(), e, t);
        }
        static fromObject(e) {
          return Ie.aD(rt.M(), e);
        }
        static deserializeBinary(e) {
          let t = new Me.BinaryReader(e),
            r = new rt();
          return rt.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return Ie.F(rt.MBF(), e, t);
        }
        serializeBinary() {
          var e = new Me.BinaryWriter();
          return rt.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          Ie.l2(rt.M(), e, t);
        }
        serializeBase64String() {
          var e = new Me.BinaryWriter();
          return rt.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCloud_ClientBeginFileUpload_Response";
        }
      }
      class it extends ze {
        constructor(e = null) {
          super(),
            it.prototype.file_committed || Ie.aR(it.M()),
            ze.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            it.sm_m ||
              (it.sm_m = {
                proto: it,
                fields: {
                  file_committed: {
                    n: 1,
                    br: Ie.FE.readBool,
                    bw: Ie.Xc.writeBool,
                  },
                },
              }),
            it.sm_m
          );
        }
        static MBF() {
          return it.sm_mbf || (it.sm_mbf = Ie.Bh(it.M())), it.sm_mbf;
        }
        toObject(e = !1) {
          return it.toObject(e, this);
        }
        static toObject(e, t) {
          return Ie.TA(it.M(), e, t);
        }
        static fromObject(e) {
          return Ie.aD(it.M(), e);
        }
        static deserializeBinary(e) {
          let t = new Me.BinaryReader(e),
            r = new it();
          return it.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return Ie.F(it.MBF(), e, t);
        }
        serializeBinary() {
          var e = new Me.BinaryWriter();
          return it.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          Ie.l2(it.M(), e, t);
        }
        serializeBase64String() {
          var e = new Me.BinaryWriter();
          return it.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCloud_ClientCommitFileUpload_Response";
        }
      }
      class nt extends ze {
        constructor(e = null) {
          super(),
            nt.prototype.appid || Ie.aR(nt.M()),
            ze.initialize(this, e, 0, -1, [10], null);
        }
        static M() {
          return (
            nt.sm_m ||
              (nt.sm_m = {
                proto: nt,
                fields: {
                  appid: { n: 1, br: Ie.FE.readUint32, bw: Ie.Xc.writeUint32 },
                  file_size: {
                    n: 2,
                    br: Ie.FE.readUint32,
                    bw: Ie.Xc.writeUint32,
                  },
                  raw_file_size: {
                    n: 3,
                    br: Ie.FE.readUint32,
                    bw: Ie.Xc.writeUint32,
                  },
                  sha_file: { n: 4, br: Ie.FE.readBytes, bw: Ie.Xc.writeBytes },
                  time_stamp: {
                    n: 5,
                    br: Ie.FE.readUint64String,
                    bw: Ie.Xc.writeUint64String,
                  },
                  is_explicit_delete: {
                    n: 6,
                    br: Ie.FE.readBool,
                    bw: Ie.Xc.writeBool,
                  },
                  url_host: {
                    n: 7,
                    br: Ie.FE.readString,
                    bw: Ie.Xc.writeString,
                  },
                  url_path: {
                    n: 8,
                    br: Ie.FE.readString,
                    bw: Ie.Xc.writeString,
                  },
                  use_https: { n: 9, br: Ie.FE.readBool, bw: Ie.Xc.writeBool },
                  request_headers: { n: 10, c: at, r: !0, q: !0 },
                  encrypted: { n: 11, br: Ie.FE.readBool, bw: Ie.Xc.writeBool },
                },
              }),
            nt.sm_m
          );
        }
        static MBF() {
          return nt.sm_mbf || (nt.sm_mbf = Ie.Bh(nt.M())), nt.sm_mbf;
        }
        toObject(e = !1) {
          return nt.toObject(e, this);
        }
        static toObject(e, t) {
          return Ie.TA(nt.M(), e, t);
        }
        static fromObject(e) {
          return Ie.aD(nt.M(), e);
        }
        static deserializeBinary(e) {
          let t = new Me.BinaryReader(e),
            r = new nt();
          return nt.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return Ie.F(nt.MBF(), e, t);
        }
        serializeBinary() {
          var e = new Me.BinaryWriter();
          return nt.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          Ie.l2(nt.M(), e, t);
        }
        serializeBase64String() {
          var e = new Me.BinaryWriter();
          return nt.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCloud_ClientFileDownload_Response";
        }
      }
      class at extends ze {
        constructor(e = null) {
          super(),
            at.prototype.name || Ie.aR(at.M()),
            ze.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            at.sm_m ||
              (at.sm_m = {
                proto: at,
                fields: {
                  name: { n: 1, br: Ie.FE.readString, bw: Ie.Xc.writeString },
                  value: { n: 2, br: Ie.FE.readString, bw: Ie.Xc.writeString },
                },
              }),
            at.sm_m
          );
        }
        static MBF() {
          return at.sm_mbf || (at.sm_mbf = Ie.Bh(at.M())), at.sm_mbf;
        }
        toObject(e = !1) {
          return at.toObject(e, this);
        }
        static toObject(e, t) {
          return Ie.TA(at.M(), e, t);
        }
        static fromObject(e) {
          return Ie.aD(at.M(), e);
        }
        static deserializeBinary(e) {
          let t = new Me.BinaryReader(e),
            r = new at();
          return at.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return Ie.F(at.MBF(), e, t);
        }
        serializeBinary() {
          var e = new Me.BinaryWriter();
          return at.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          Ie.l2(at.M(), e, t);
        }
        serializeBase64String() {
          var e = new Me.BinaryWriter();
          return at.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCloud_ClientFileDownload_Response_HTTPHeaders";
        }
      }
      class st extends ze {
        constructor(e = null) {
          super(), ze.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return st.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new st();
        }
        static deserializeBinary(e) {
          let t = new Me.BinaryReader(e),
            r = new st();
          return st.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new Me.BinaryWriter();
          return st.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new Me.BinaryWriter();
          return st.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCloud_ClientDeleteFile_Response";
        }
      }
      class ot extends ze {
        constructor(e = null) {
          super(),
            ot.prototype.apps || Ie.aR(ot.M()),
            ze.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            ot.sm_m ||
              (ot.sm_m = {
                proto: ot,
                fields: { apps: { n: 1, c: lt, r: !0, q: !0 } },
              }),
            ot.sm_m
          );
        }
        static MBF() {
          return ot.sm_mbf || (ot.sm_mbf = Ie.Bh(ot.M())), ot.sm_mbf;
        }
        toObject(e = !1) {
          return ot.toObject(e, this);
        }
        static toObject(e, t) {
          return Ie.TA(ot.M(), e, t);
        }
        static fromObject(e) {
          return Ie.aD(ot.M(), e);
        }
        static deserializeBinary(e) {
          let t = new Me.BinaryReader(e),
            r = new ot();
          return ot.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return Ie.F(ot.MBF(), e, t);
        }
        serializeBinary() {
          var e = new Me.BinaryWriter();
          return ot.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          Ie.l2(ot.M(), e, t);
        }
        serializeBase64String() {
          var e = new Me.BinaryWriter();
          return ot.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCloud_EnumerateUserApps_Response";
        }
      }
      class lt extends ze {
        constructor(e = null) {
          super(),
            lt.prototype.appid || Ie.aR(lt.M()),
            ze.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            lt.sm_m ||
              (lt.sm_m = {
                proto: lt,
                fields: {
                  appid: { n: 1, br: Ie.FE.readUint32, bw: Ie.Xc.writeUint32 },
                  totalcount: {
                    n: 2,
                    br: Ie.FE.readInt32,
                    bw: Ie.Xc.writeInt32,
                  },
                  totalsize: {
                    n: 3,
                    br: Ie.FE.readInt64String,
                    bw: Ie.Xc.writeInt64String,
                  },
                },
              }),
            lt.sm_m
          );
        }
        static MBF() {
          return lt.sm_mbf || (lt.sm_mbf = Ie.Bh(lt.M())), lt.sm_mbf;
        }
        toObject(e = !1) {
          return lt.toObject(e, this);
        }
        static toObject(e, t) {
          return Ie.TA(lt.M(), e, t);
        }
        static fromObject(e) {
          return Ie.aD(lt.M(), e);
        }
        static deserializeBinary(e) {
          let t = new Me.BinaryReader(e),
            r = new lt();
          return lt.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return Ie.F(lt.MBF(), e, t);
        }
        serializeBinary() {
          var e = new Me.BinaryWriter();
          return lt.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          Ie.l2(lt.M(), e, t);
        }
        serializeBase64String() {
          var e = new Me.BinaryWriter();
          return lt.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCloud_EnumerateUserApps_Response_Apps";
        }
      }
      class mt extends ze {
        constructor(e = null) {
          super(), ze.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return mt.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new mt();
        }
        static deserializeBinary(e) {
          let t = new Me.BinaryReader(e),
            r = new mt();
          return mt.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new Me.BinaryWriter();
          return mt.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new Me.BinaryWriter();
          return mt.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCloud_AppSessionSuspend_Response";
        }
      }
      class ct extends ze {
        constructor(e = null) {
          super(), ze.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return ct.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new ct();
        }
        static deserializeBinary(e) {
          let t = new Me.BinaryReader(e),
            r = new ct();
          return ct.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new Me.BinaryWriter();
          return ct.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new Me.BinaryWriter();
          return ct.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCloud_AppSessionResume_Response";
        }
      }
      class dt extends ze {
        constructor(e = null) {
          super(),
            dt.prototype.request_id || Ie.aR(dt.M()),
            ze.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            dt.sm_m ||
              (dt.sm_m = {
                proto: dt,
                fields: {
                  request_id: {
                    n: 1,
                    br: Ie.FE.readUint64String,
                    bw: Ie.Xc.writeUint64String,
                  },
                },
              }),
            dt.sm_m
          );
        }
        static MBF() {
          return dt.sm_mbf || (dt.sm_mbf = Ie.Bh(dt.M())), dt.sm_mbf;
        }
        toObject(e = !1) {
          return dt.toObject(e, this);
        }
        static toObject(e, t) {
          return Ie.TA(dt.M(), e, t);
        }
        static fromObject(e) {
          return Ie.aD(dt.M(), e);
        }
        static deserializeBinary(e) {
          let t = new Me.BinaryReader(e),
            r = new dt();
          return dt.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return Ie.F(dt.MBF(), e, t);
        }
        serializeBinary() {
          var e = new Me.BinaryWriter();
          return dt.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          Ie.l2(dt.M(), e, t);
        }
        serializeBase64String() {
          var e = new Me.BinaryWriter();
          return dt.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCloud_ClientLogUploadRequest_Notification";
        }
      }
      var ut, pt;
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
            return e.SendMsg("Cloud.GetUploadServerInfo#1", t, Ne, {
              bConstMethod: !0,
              ePrivilege: 1,
            });
          }),
          (e.BeginHTTPUpload = function (e, t) {
            return e.SendMsg("Cloud.BeginHTTPUpload#1", t, Le, {
              ePrivilege: 1,
            });
          }),
          (e.CommitHTTPUpload = function (e, t) {
            return e.SendMsg("Cloud.CommitHTTPUpload#1", t, Pe, {
              ePrivilege: 1,
            });
          }),
          (e.BeginUGCUpload = function (e, t) {
            return e.SendMsg("Cloud.BeginUGCUpload#1", t, Ge, {
              ePrivilege: 1,
            });
          }),
          (e.CommitUGCUpload = function (e, t) {
            return e.SendMsg("Cloud.CommitUGCUpload#1", t, We, {
              ePrivilege: 1,
            });
          }),
          (e.GetFileDetails = function (e, t) {
            return e.SendMsg("Cloud.GetFileDetails#1", t, je, {
              bConstMethod: !0,
              ePrivilege: 2,
              eWebAPIKeyRequirement: 2,
            });
          }),
          (e.EnumerateUserFiles = function (e, t) {
            return e.SendMsg("Cloud.EnumerateUserFiles#1", t, Xe, {
              bConstMethod: !0,
              ePrivilege: 1,
            });
          }),
          (e.Delete = function (e, t) {
            return e.SendMsg("Cloud.Delete#1", t, Ve, { ePrivilege: 1 });
          }),
          (e.GetClientEncryptionKey = function (e, t) {
            return e.SendMsg("Cloud.GetClientEncryptionKey#1", t, He, {
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
            return e.SendMsg("Cloud.BeginAppUploadBatch#1", t, $e, {
              ePrivilege: 1,
            });
          }),
          (e.CompleteAppUploadBatch = function (e, t) {
            return e.SendNotification("Cloud.CompleteAppUploadBatch#1", t, {
              ePrivilege: 1,
            });
          }),
          (e.CompleteAppUploadBatchBlocking = function (e, t) {
            return e.SendMsg("Cloud.CompleteAppUploadBatchBlocking#1", t, et, {
              ePrivilege: 1,
            });
          }),
          (e.ClientBeginFileUpload = function (e, t) {
            return e.SendMsg("Cloud.ClientBeginFileUpload#1", t, rt, {
              ePrivilege: 1,
            });
          }),
          (e.ClientCommitFileUpload = function (e, t) {
            return e.SendMsg("Cloud.ClientCommitFileUpload#1", t, it, {
              ePrivilege: 1,
            });
          }),
          (e.ClientFileDownload = function (e, t) {
            return e.SendMsg("Cloud.ClientFileDownload#1", t, nt, {
              ePrivilege: 1,
            });
          }),
          (e.ClientDeleteFile = function (e, t) {
            return e.SendMsg("Cloud.ClientDeleteFile#1", t, st, {
              ePrivilege: 1,
            });
          }),
          (e.ClientConflictResolution = function (e, t) {
            return e.SendNotification("Cloud.ClientConflictResolution#1", t, {
              ePrivilege: 1,
            });
          }),
          (e.EnumerateUserApps = function (e, t) {
            return e.SendMsg("Cloud.EnumerateUserApps#1", t, ot, {
              bConstMethod: !0,
              ePrivilege: 1,
            });
          }),
          (e.GetAppFileChangelist = function (e, t) {
            return e.SendMsg("Cloud.GetAppFileChangelist#1", t, Ke, {
              bConstMethod: !0,
              ePrivilege: 1,
            });
          }),
          (e.SuspendAppSession = function (e, t) {
            return e.SendMsg("Cloud.SuspendAppSession#1", t, mt, {
              ePrivilege: 1,
            });
          }),
          (e.ResumeAppSession = function (e, t) {
            return e.SendMsg("Cloud.ResumeAppSession#1", t, ct, {
              ePrivilege: 1,
            });
          }),
          (e.SignalAppLaunchIntent = function (e, t) {
            return e.SendMsg("Cloud.SignalAppLaunchIntent#1", t, Ze, {
              ePrivilege: 1,
            });
          }),
          (e.SignalAppExitSyncDone = function (e, t) {
            return e.SendNotification("Cloud.SignalAppExitSyncDone#1", t, {
              ePrivilege: 1,
            });
          }),
          (e.ClientGetAppQuotaUsage = function (e, t) {
            return e.SendMsg("Cloud.ClientGetAppQuotaUsage#1", t, qe, {
              bConstMethod: !0,
              ePrivilege: 1,
            });
          });
      })(ut || (ut = {})),
        (function (e) {
          (e.NotifyAppStateChangeHandler = {
            name: "CloudClient.NotifyAppStateChange#1",
            request: tt,
          }),
            (e.ClientLogUploadRequestHandler = {
              name: "CloudClient.ClientLogUploadRequest#1",
              request: dt,
            });
        })(pt || (pt = {}));
      var gt = r(77520);
      class _t {
        constructor() {
          (this.timestamp = 0),
            (this.imageWidth = 0),
            (this.imageHeight = 0),
            (this.eUploadState = 0),
            (this.uploadProgress = 0);
        }
      }
      (0, i.gn)([T.LO], _t.prototype, "file", void 0),
        (0, i.gn)([T.LO], _t.prototype, "dataURL", void 0),
        (0, i.gn)([T.LO], _t.prototype, "imageWidth", void 0),
        (0, i.gn)([T.LO], _t.prototype, "imageHeight", void 0),
        (0, i.gn)([T.LO], _t.prototype, "eUploadState", void 0),
        (0, i.gn)([T.LO], _t.prototype, "uploadProgress", void 0),
        (0, i.gn)([T.LO], _t.prototype, "strErrorDescription", void 0);
      class ht {
        constructor(e) {
          (this.m_fileUploadProps = new _t()), (this.m_Callbacks = e);
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
        SetImageFileToUpload(e, t = ft) {
          return (0, i.mG)(this, void 0, void 0, function* () {
            if (!e) return void this.SetFileToUpload(null);
            if (e.size > 1024 * this.m_Callbacks.GetMaxFileSizeMB() * 1024)
              return void (10 == this.m_Callbacks.GetMaxFileSizeMB()
                ? this.SetUploadFileError(
                    4,
                    (0, M.Xx)("#Chat_Settings_Error_ChatFileTooLarge", e.name)
                  )
                : this.SetUploadFileError(
                    4,
                    (0, M.Xx)(
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
                (0, M.Xx)(
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
                ((0, gt.X)(
                  !1,
                  "Must SetImageFileToUpload before calling BeginFileUpload"
                ),
                new Error("Invalid State"))
              );
            (this.m_fileUploadProps.eUploadState = 2),
              (this.m_fileUploadProps.uploadProgress = 0),
              (this.m_fileUploadProps.additionalProps = e);
            let r = new FormData();
            r.append("sessionid", g.De.SESSIONID),
              r.append("l", g.De.LANGUAGE),
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
              let e = yield A().post(
                this.m_Callbacks.GetBeginFileUploadURL(),
                r,
                { params: { l: g.De.LANGUAGE } }
              );
              return (
                (this.m_fileUploadProps.timestamp = e.data.timestamp),
                (this.m_fileUploadProps.hmac = e.data.hmac),
                this.DoFileUpload(e.data.result)
              );
            } catch (e) {
              let t = null;
              throw (
                ((0, T.z)(() => {
                  if (
                    ((this.m_fileUploadProps.eUploadState = 3),
                    this.LogFileUploadMessage(e.response),
                    e.response)
                  ) {
                    let r = e.response.data;
                    e.response.status, r && r.success;
                    t = r.message
                      ? r.message
                      : (0, M.Xx)("#Chat_Settings_Error_ServerError");
                  } else t = (0, M.Xx)("#ConnectionTrouble_FailedToConnect");
                  this.m_fileUploadProps.strErrorDescription = (0, M.Xx)(
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
                  (0, T.z)(() => {
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
              return yield A().put(r, t, i), this.CommitFileUpload(!0, e.ugcid);
            } catch (t) {
              throw (
                (this.LogFileUploadMessage(t.response),
                (0, T.z)(() => {
                  (this.m_fileUploadProps.strErrorDescription = (0, M.Xx)(
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
            n.append("sessionid", g.De.SESSIONID),
              n.append("l", g.De.LANGUAGE),
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
              let t = yield A().post(
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
                ((0, T.z)(() => {
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
                      : (0, M.Xx)("#Chat_Settings_Error_ServerError");
                  } else r = (0, M.Xx)("#ConnectionTrouble_FailedToConnect");
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
      function ft(e) {
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
      (0, i.gn)([T.aD], ht.prototype, "SetUploadFileError", null),
        (0, i.gn)([T.aD], ht.prototype, "SetImageFileToUpload", null),
        (0, i.gn)([T.aD], ht.prototype, "SetFileToUpload", null),
        (0, i.gn)([T.aD], ht.prototype, "RetryFileUpload", null),
        (0, i.gn)([T.aD], ht.prototype, "BeginFileUpload", null),
        (0, i.gn)([T.aD], ht.prototype, "DoFileUpload", null),
        (0, i.gn)([T.aD], ht.prototype, "CommitFileUpload", null),
        (0, i.gn)([T.aD], ht.prototype, "ClearFileUploadError", null),
        (0, i.gn)([T.aD], ht.prototype, "Reset", null);
      var Bt = r(75320),
        yt = r(52114),
        Ct = r(48341),
        bt = r(88883),
        St = r(35841),
        vt = r(52519),
        wt = r.n(vt);
      const Et = (e) => {
        const [t, r] = (0, n.useState)(!0),
          [a, s] = (0, n.useState)(null);
        if (
          ((0, n.useEffect)(() => {
            if (0 == e.appid || 0 == e.trailerBaseID)
              return void s((0, M.Xx)("#TrailerPlayer_ID_NotProvided"));
            (0, i.mG)(void 0, void 0, void 0, function* () {
              yield W.Z.Get().QueueAppRequest(e.appid, {
                include_trailers: !0,
              }),
                W.Z.Get().BHasApp(e.appid)
                  ? (W.Z.Get()
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
                        (0, M.Xx)(
                          "#TrailerPlayer_CouldNotLoad",
                          e.appid,
                          e.trailerBaseID
                        )
                      )),
                    r(!1))
                  : s(
                      (0, M.Xx)(
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
            ? n.createElement("div", { className: wt().ErrorDiv }, a)
            : null;
        if (t)
          return n.createElement(z.V, {
            string: (0, M.Xx)("#Loading"),
            size: "small",
          });
        const o = W.Z.Get()
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
        return n.createElement(St.Y, {
          bControls: !0,
          bAutoPlay: !1,
          bLoop: !1,
          video: m,
        });
      };
      var Ft = r(13096),
        Rt = r(50498),
        Ut = (r(69765), r(32548));
      const Dt = n.lazy(() =>
          Promise.all([
            r.e(6499),
            r.e(2189),
            r.e(731),
            r.e(6364),
            r.e(4134),
            r.e(4605),
            r.e(9886),
            r.e(4881),
            r.e(2529),
            r.e(5300),
            r.e(8878),
            r.e(5938),
            r.e(1614),
            r.e(4193),
            r.e(1979),
            r.e(4601),
          ]).then(r.bind(r, 63405))
        ),
        Mt = (e) => {
          const t = (0, n.useRef)(null),
            [r, a] = (0, n.useState)(Rt.D.Get().GetVODForAppID(e.appid)),
            [s, o] = (0, n.useState)(
              !Boolean(Rt.D.Get().GetVODForAppID(e.appid))
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
                  (n = Rt.D.Get().GetVODForAppID(e.appid)),
                !n)
              ) {
                const r = () =>
                  (0, i.mG)(void 0, void 0, void 0, function* () {
                    t.current && t.current();
                    const r = A().CancelToken.source();
                    (t.current = r.cancel),
                      (n = yield Rt.D.Get().LoadVODForAppID(e.appid)),
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
                  (0, M.Xx)(
                    s ? "#VODPlayer_Loading" : "#VODPlayer_ErrorLoading",
                    e.appid
                  )
                )
              : n.createElement(
                  "div",
                  { className: Ft.BroadcastCtn },
                  n.createElement(
                    Ut.SV,
                    null,
                    n.createElement(
                      n.Suspense,
                      { fallback: n.createElement("div", null) },
                      n.createElement(Dt, {
                        nAppIDVOD: e.appid,
                        watchLocation: 9,
                        bStartPaused: !0,
                      })
                    )
                  )
                )
          );
        };
      var It = r(96187),
        At = r(72258),
        Tt = r(53622),
        zt = r(7707),
        xt = r(10860);
      function Nt(e) {
        const { fileUploadManager: t } = e,
          r = (0, n.useRef)();
        return n.createElement(
          "div",
          { className: xt.Ctn },
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
            zt.wl,
            {
              type: "button",
              title: (0, M.Xx)("#Button_Upload"),
              onOKActionDescription: (0, M.Xx)("#Button_Upload"),
              onClick: () => r.current.click(),
            },
            n.createElement(k.pkz, null)
          )
        );
      }
      var Lt = r(13271),
        kt = r(20636);
      function Pt(e) {
        const { fileUploadManager: t } = e,
          r = (0, Lt.SZ)(() => t.file_upload_props.eUploadState);
        return 1 == r
          ? n.createElement(Gt, { fileUploadManager: t })
          : 3 == r || 5 == r || 4 == r
          ? n.createElement(Wt, { fileUploadManager: t })
          : 0 != r
          ? n.createElement(Ot, { fileUploadManager: t })
          : null;
      }
      function Gt(e) {
        const { fileUploadManager: t } = e,
          r = t.file;
        return n.createElement(
          "div",
          { className: kt.UploadPreviewContainer },
          Boolean(-1 != r.type.indexOf("image")) &&
            n.createElement("img", {
              className: kt.UploadPreview,
              src: t.file_upload_data_url,
            }),
          Boolean(-1 != r.type.indexOf("video")) &&
            n.createElement(k.nkn, null),
          n.createElement(
            "div",
            { className: kt.FileUploadFileName },
            "'",
            r.name,
            "'"
          ),
          n.createElement(
            "div",
            { className: kt.FileUploadCancel, onClick: () => t.Reset() },
            n.createElement(k.pVO, null)
          ),
          n.createElement(
            Ct.KM,
            {
              className: kt.FileUploadBtn,
              onClick: () =>
                (0, i.mG)(this, void 0, void 0, function* () {
                  yield t.BeginFileUpload(), t.Reset();
                }),
            },
            (0, M.Xx)("#Button_Upload")
          )
        );
      }
      function Ot(e) {
        const { fileUploadManager: t } = e,
          [r, i, a] = (0, Lt.SZ)(() => [
            t.file_upload_props.file,
            t.file_upload_props.displayFileName,
            t.file_upload_props.uploadProgress,
          ]),
          s = r ? (0, M.Xx)("#Uploading_Item", i) : "",
          o = { width: a + "%" };
        return n.createElement(
          "div",
          { className: kt.FileUploadProgressContainer },
          n.createElement("div", { className: kt.FileUploadProgressName }, s),
          n.createElement(
            "div",
            {
              className: (0, P.Z)(
                kt.FileUploadProgressBarContainer,
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
      function Wt(e) {
        const { fileUploadManager: t } = e,
          [r, a, s] = (0, Lt.SZ)(() => [
            t.file_upload_props.strErrorDescription,
            t.file_upload_props.displayFileName,
            t.file_upload_props.eUploadState,
          ]),
          o = a ? (0, M.Xx)("#Uploading_Item", a) : "",
          l = r || (0, M.Xx)("#Chat_Upload_ErrorCloud");
        return n.createElement(
          "div",
          { className: kt.FileUploadProgressContainer },
          n.createElement("div", { className: kt.FileUploadProgressName }, o),
          n.createElement(
            "div",
            { className: kt.FileUploadErrorDescription },
            l
          ),
          n.createElement(
            "div",
            { className: kt.FileUploadActions },
            n.createElement(
              Ct.Uq,
              { className: "DialogLayout_NoMinWidth" },
              Boolean(3 == s) &&
                n.createElement(
                  Ct.KM,
                  {
                    onClick: () =>
                      (0, i.mG)(this, void 0, void 0, function* () {
                        yield t.RetryFileUpload(), t.Reset();
                      }),
                  },
                  (0, M.Xx)("#Chat_Upload_ErrorAction_Retry")
                ),
              n.createElement(
                Ct.zx,
                { onClick: () => t.ClearFileUploadError() },
                (0, M.Xx)("#Chat_Upload_ErrorAction_Close")
              )
            )
          )
        );
      }
      var jt = r(37699),
        Xt = r(41414),
        Vt = r(23211),
        Ht = r(51254);
      let Zt = null;
      function qt(e) {
        var t, r;
        let i = (0, o.im)(e.args);
        const a = (0, o.im)(e.args, "style"),
          s = (0, o.im)(e.args, "id"),
          l = (function (e) {
            return "button" === e
              ? (0, P.Z)(H.LinkButton, "LinkButton")
              : (0, P.Z)(H.Link, "Link");
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
          "dev" == g.De.WEB_UNIVERSE &&
            "store" == (0, g.Zv)() &&
            "store.steampowered.com" == (0, u.FM)(i) &&
            ((i = i.replace(
              "https://store.steampowered.com/",
              g.De.STORE_BASE_URL
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
                At.ns,
                { className: l, href: "steam://settings/account" },
                e.children
              )
            : n.createElement(
                f,
                { className: l, url: i, event: e.context.event, id: s },
                e.children
              )
        );
      }
      function Qt(e) {
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
            (e = (!r || !r.BHasTag("auto_rssfeed")) && !(0, u.dK)(i)),
            t || (i = (0, u.et)(i)),
            t
              ? n.createElement(It.e, {
                  src: i,
                  crossOrigin: e ? "anonymous" : void 0,
                })
              : n.createElement("img", {
                  src: i,
                  crossOrigin: e ? "anonymous" : void 0,
                })
          );
        }
        return n.createElement(j.j, { rgSources: a });
      }
      function Kt(e) {
        const t = (0, o.im)(e.args);
        if (null == t || null == t || 0 == t.length) return "";
        const r = e && e.children && e.children.toString(),
          i = new Array();
        return (
          i.push(
            `${g.De.MEDIA_CDN_COMMUNITY_URL}images/steamworks_docs/${g.De.LANGUAGE}/${t}`
          ),
          "english" != g.De.LANGUAGE &&
            i.push(
              `${g.De.MEDIA_CDN_COMMUNITY_URL}images/steamworks_docs/english/${t}`
            ),
          n.createElement(j.j, { rgSources: i, alt: r })
        );
      }
      function Jt(e) {
        const t = er(
            e.args,
            "appid",
            e.context.event.appid ? e.context.event.appid : 0
          ),
          r = er(e.args, "trailerid", 0);
        return n.createElement(Et, {
          appid: t,
          trailerBaseID: r,
          bIsPreviewMode: e.context.showErrorInfo,
        });
      }
      function Yt(e) {
        const t = er(e.args, "appid", 0);
        return n.createElement(Mt, {
          appid: t,
          bPreviewMode: e.context.showErrorInfo,
        });
      }
      function $t(e) {
        const t = (0, o.im)(e.args, "name"),
          r = (0, o.im)(e.args, "title"),
          i = (0, o.im)(e.args, "company"),
          a = (0, o.im)(e.args, "photo");
        return e.context.bShowShortSpeakerInfo
          ? n.createElement(bt.G$, {
              name: t,
              title: r,
              company: i,
              photo: a,
              bio: e.children,
            })
          : n.createElement(bt.qs, {
              name: t,
              title: r,
              company: i,
              photo: a,
              bio: e.children,
            });
      }
      function er(e, t, r) {
        const i = (0, o.im)(e, t);
        return void 0 === i || null == i ? r : Number.parseInt(i);
      }
      function tr(e) {
        const t = (0, o.im)(e.args, "name"),
          r =
            "true" === ((0, o.im)(e.args, "visible") || "false").toLowerCase(),
          i = (0, Bt.x)(t);
        if (!t) {
          return e.context.showErrorInfo
            ? n.createElement("div", null, "Failed to provide giveaway name")
            : null;
        }
        return i && i.registered && ((i.eligible && r) || (!i.eligible && !r))
          ? e.children
          : null;
      }
      function rr(e) {
        const t = e.context.showErrorInfo;
        return g.L7.logged_in
          ? n.createElement(Ht.w, { bPreviewMode: t })
          : n.createElement(
              Ct.zx,
              { onClick: Vt.X, className: "CSSClaimItemLoginButton" },
              (0, M.Xx)("#Sale_ClaimableReward_Login")
            );
      }
      function ir(e) {
        const t = Number.parseInt((0, o.im)(e.args, "id")) || 0,
          r =
            "true" === ((0, o.im)(e.args, "visible") || "false").toLowerCase(),
          i = e.context.showErrorInfo,
          [a, s] = (0, yt.ie)(t, {});
        if (!t || 1 == s)
          return !t && i
            ? n.createElement("div", null, "Error: PackageID Not Set")
            : null;
        let l = !1;
        return (
          (l = W.Z.Get().BHasStoreItem(t, 1)
            ? Boolean(a.GetBestPurchaseOption())
            : !W.Z.Get().BIsPackageUnavailableDueToCountryRestriction(t)),
          (!l && !r) || (l && r) ? e.children : null
        );
      }
      function nr(e) {
        if ("GameAwardDrop2022" === e) {
          const t = (0, Bt.x)(e),
            r = (0, Bt.v)();
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
      function ar(e) {
        const t = (0, o.im)(e.args, "action"),
          r = (0, o.im)(e.args, "initialToken"),
          i = (0, o.im)(e.args, "successToken"),
          a = (0, o.im)(e.args, "failToken"),
          s = nr(t);
        if (!(t && r && i && a)) {
          return e.context.showErrorInfo
            ? n.createElement(
                "div",
                null,
                "Failed to provide all tokens. Dialog will not appear"
              )
            : null;
        }
        return g.L7.logged_in
          ? n.createElement(
              Ct.zx,
              {
                className: "CSSActionDialogButton",
                onClick: (s) => {
                  (0, Xt.AM)(
                    n.createElement(
                      sr,
                      {
                        strAction: t,
                        strInitialToken: r,
                        strSuccessToken: i,
                        strFailToken: a,
                      },
                      e.children
                    ),
                    (0, Tt.RA)(s)
                  );
                },
              },
              Boolean(s.bInitialState) && (0, M.Xx)(r),
              Boolean(s.bSuccessState) && (0, M.Xx)(i),
              Boolean(s.bFailedState) && (0, M.Xx)(a)
            )
          : n.createElement(
              Ct.zx,
              { className: "CSSActionDialogButton", onClick: Vt.X },
              (0, M.Xx)("#Login_SignIn")
            );
      }
      function sr(e) {
        const {
            strAction: t,
            children: r,
            closeModal: i,
            strInitialToken: a,
            strSuccessToken: s,
            strFailToken: o,
          } = e,
          l = nr(t),
          [m, c] = n.useState(Boolean(l.fnAction));
        return (
          n.useEffect(() => {
            l.fnAction && (c(!0), l.fnAction().finally(() => c(!1)));
          }, [l]),
          n.createElement(
            jt.RG,
            {
              bDisableBackgroundDismiss: !0,
              closeModal: i,
              onCancel: i,
              className: "CSSActionDialogDialog",
            },
            n.createElement(
              Ct.h4,
              null,
              Boolean(l.bInitialState) && (0, M.Xx)(a),
              Boolean(l.bSuccessState) && (0, M.Xx)(s),
              Boolean(l.bFailedState) && (0, M.Xx)(o)
            ),
            n.createElement(
              Ct.uT,
              null,
              n.createElement(
                Ct.Ac,
                null,
                m
                  ? n.createElement(z.V, {
                      size: "medium",
                      position: "center",
                      string: (0, M.Xx)("#Loading"),
                    })
                  : r
              )
            )
          )
        );
      }
      function or(e) {
        const { showErrorInfo: t, event: r } = e.context,
          i = r.clanSteamID.GetAccountID(),
          [a] = n.useState(
            new ht(
              (function (e) {
                const t = {
                  PopulateBeginFileUploadFormData: (t) => {
                    t.append("clan_account_id", "" + e);
                  },
                  PopulateCommitFileUploadFormData: (t) => {
                    t.append("clan_account_id", "" + e);
                  },
                  GetBeginFileUploadURL: () =>
                    g.De.STORE_BASE_URL + "saleaction/ajaxbeginfileupload",
                  GetCommitFileUploadURL: () =>
                    g.De.STORE_BASE_URL + "saleaction/ajaxcommitfileupload",
                  LogFileUploadMessage: (e) => {
                    console.log("UploadFileButton: ", e);
                  },
                  GetMaxFileSizeMB: () => 100,
                };
                return t;
              })(i)
            )
          );
        return i == l.sq ||
          i == l.RQ ||
          (2 == g.De.EUNIVERSE && i == l.$Y) ||
          (1 == g.De.EUNIVERSE && i == l._L)
          ? n.createElement(
              "div",
              null,
              n.createElement(Nt, { fileUploadManager: a }),
              n.createElement(Pt, { fileUploadManager: a })
            )
          : t
          ? n.createElement("div", null, (0, M.Xx)("#CloudUpload_NotSupport"))
          : null;
      }
      class lr extends n.Component {
        constructor(e) {
          super(e),
            (this.m_parser = new a.Z6(
              lr.sm_BBCodeDictionary,
              this.ElementAccumulator,
              e.languageOverride
            ));
        }
        ElementAccumulator(e) {
          return new C(
            new y(
              new B(
                new s.So(new s.LT(), 0),
                e,
                (null == pe &&
                  (pe =
                    g.De.EREALM == v.IN.k_ESteamRealmChina
                      ? [
                          { urlRegExp: new RegExp(re), fnBBComponent: ye },
                          { urlRegExp: new RegExp(ne), fnBBComponent: ve },
                          { urlRegExp: new RegExp(ae), fnBBComponent: Se },
                          { urlRegExp: new RegExp(ie), fnBBComponent: be },
                          { urlRegExp: new RegExp(de), fnBBComponent: Re },
                        ]
                      : [
                          {
                            urlRegExp: new RegExp(/youtu.be|youtube.com/i),
                            fnBBComponent: ge,
                          },
                          {
                            urlRegExp: new RegExp(
                              /community.+sharedfiles\/filedetails\/\?id=\d+/i
                            ),
                            fnBBComponent: fe,
                          },
                          { urlRegExp: new RegExp(re), fnBBComponent: ye },
                          { urlRegExp: new RegExp(ne), fnBBComponent: ve },
                          { urlRegExp: new RegExp(ae), fnBBComponent: Se },
                          { urlRegExp: new RegExp(ie), fnBBComponent: be },
                          { urlRegExp: new RegExp(se), fnBBComponent: _e },
                          { urlRegExp: new RegExp(oe), fnBBComponent: he },
                          { urlRegExp: new RegExp(le), fnBBComponent: we },
                          { urlRegExp: new RegExp(me), fnBBComponent: Ee },
                          { urlRegExp: new RegExp(ce), fnBBComponent: Fe },
                          { urlRegExp: new RegExp(de), fnBBComponent: Re },
                          { urlRegExp: new RegExp(ue), fnBBComponent: Ce },
                        ]),
                pe),
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
          lr.sm_BBCodeDictionary = new Map([
            ...Array.from(lr.sm_BBCodeDictionary.entries()),
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
      (lr.sm_BBCodeDictionary = new Map([
        ...Array.from(o.Be.entries()),
        ...Array.from(
          (null == Zt &&
            (Zt = new Map([
              ["url", { Constructor: qt, autocloses: !1 }],
              [
                "h1",
                {
                  Constructor: o.LW(o.R6, H.Header1),
                  autocloses: !1,
                  skipFollowingNewline: !0,
                },
              ],
              [
                "h2",
                {
                  Constructor: o.LW(o.zV, H.Header2),
                  autocloses: !1,
                  skipFollowingNewline: !0,
                },
              ],
              [
                "h3",
                {
                  Constructor: o.LW(o.BB, H.Header3),
                  autocloses: !1,
                  skipFollowingNewline: !0,
                },
              ],
              [
                "quote",
                { Constructor: o.LW(o.pu, H.BlockQuote), autocloses: !1 },
              ],
              [
                "list",
                {
                  Constructor: o.LW(o.aV, H.UnorderedList),
                  autocloses: !1,
                  skipInternalNewline: !0,
                },
              ],
              [
                "olist",
                {
                  Constructor: o.LW(o.GS, H.OrderedList),
                  autocloses: !1,
                  skipInternalNewline: !0,
                },
              ],
              [
                "*",
                { Constructor: o.HC, autocloses: !0, skipInternalNewline: !0 },
              ],
              ["img", { Constructor: Qt, autocloses: !1 }],
              ["previewyoutube", { Constructor: o.MJ, autocloses: !1 }],
              ["looping_media", { Constructor: o.jj, autocloses: !1 }],
              ["video", { Constructor: o.qy, autocloses: !1 }],
              ["youtubeorvideo", { Constructor: o.YC, autocloses: !1 }],
              ["trailer", { Constructor: Jt, autocloses: !0 }],
              ["vod", { Constructor: Yt, autocloses: !1 }],
              [
                "speaker",
                {
                  Constructor: $t,
                  autocloses: !1,
                  skipInternalNewline: !0,
                  allowWrapTextForCopying: !0,
                },
              ],
              ["giveawayeligible", { Constructor: tr, autocloses: !1 }],
              ["claimitem", { Constructor: rr, autocloses: !0 }],
              ["packagepurchaseable", { Constructor: ir, autocloses: !1 }],
              ["actiondialog", { Constructor: ar, autocloses: !1 }],
              ["uploadfilebutton", { Constructor: or, autocloses: !0 }],
              ["docimg", { Constructor: Kt, autocloses: !1 }],
            ])),
          Zt).entries()
        ),
      ])),
        (0, i.gn)([S.ak], lr.prototype, "ElementAccumulator", null);
    },
    31933: (e, t, r) => {
      "use strict";
      r.d(t, { Ar: () => l, Wo: () => m, i9: () => o, ks: () => a });
      var i = r(67294),
        n = r(16550);
      function a(e, t) {
        let r;
        "string" == typeof e
          ? (r = e)
          : "location" in e
          ? (r = e.location.search)
          : "search" in e && (r = e.search);
        const i = new URLSearchParams(r.substring(1));
        if (i.has(t)) {
          const e = i.getAll(t);
          return e[e.length - 1];
        }
      }
      const s = (e) => null != e;
      function o(e, t, r) {
        const i = new URLSearchParams(e.location.search.substring(1));
        i.delete(t), s(r) && i.append(t, r), e.push(`?${i.toString()}`);
      }
      function l(e, t) {
        const r = (0, n.k6)(),
          l = (0, n.TH)(),
          m = (0, i.useMemo)(() => {
            const r = a(l.search, e);
            return s(r)
              ? s(t)
                ? "boolean" == typeof t
                  ? t.constructor("false" !== r)
                  : t.constructor(r)
                : r
              : t;
          }, [l.search, e, t]),
          c = (0, i.useCallback)(
            (t) => {
              o(r, e, s(t) ? String(t) : null);
            },
            [r, e]
          );
        return [m, c];
      }
      function m(e, t) {
        const r = new URLSearchParams(e.location.search.substring(1));
        for (const e in t)
          if (t.hasOwnProperty(e)) {
            const i = t[e];
            r.delete(e), s(i) && r.append(e, i);
          }
        e.push(`?${r.toString()}`);
      }
    },
    79281: (e, t, r) => {
      "use strict";
      r.d(t, { uW: () => _ });
      var i = r(70655),
        n = r(29323),
        a = r(67294),
        s = r(26149),
        o = r(76796),
        l = (r(78468), r(34133)),
        m = r.n(l),
        c = r(7573),
        d = r(41311),
        u = r(74891),
        p = r(64839),
        g = r(28268);
      let _ = class extends a.Component {
        GenerateLanguageOptions() {
          let e = [];
          const {
            fnFilterLanguage: t,
            fnLangHasData: r,
            fnLastUpdateRTime: i,
            fnIsLangSupported: n,
          } = this.props;
          this.props.bAllowUnsetOption &&
            e.push(
              a.createElement(
                "option",
                { key: "langpicker_unset", value: -1 },
                (0, d.Xx)("#language_selection_none")
              )
            );
          let l = new Array();
          const p = this.props.realms || [o.IN.k_ESteamRealmGlobal];
          for (const e of d.LJ.GetLanguageListForRealms(p)) {
            if (t && !t(e)) continue;
            const r = (0, s.j_)(e),
              i = (0, d.Xx)("#Language_" + r),
              a = Boolean(n) && n(e);
            l.push({ eLang: e, sLocName: i, bSupported: a });
          }
          l.sort((e, t) =>
            e.bSupported != t.bSupported
              ? e.bSupported
                ? -1
                : 1
              : e.sLocName.localeCompare(t.sLocName)
          );
          let g = !1;
          for (const t of l) {
            t.bSupported != g &&
              (e.push(
                a.createElement(
                  "option",
                  {
                    key: t.bSupported ? "SupportedGroup" : "UnsupportedGroup",
                    className: m().SupportedGroupLabel,
                    disabled: !0,
                  },
                  (0, d.Xx)(
                    t.bSupported
                      ? "#LanguageGroup_Supported"
                      : "#LanguageGroup_Unsupported"
                  )
                )
              ),
              (g = t.bSupported));
            const n = r && r(t.eLang),
              s = i && i(t.eLang);
            let o = t.sLocName;
            s &&
              0 !== s &&
              ((o += " "),
              (o += (0, d.Xx)(
                "#Language_Last_Update",
                (0, d.vX)(s) + " @ " + (0, u.Sc)(s, { bForce24HourClock: !1 })
              ))),
              e.push(
                a.createElement(
                  "option",
                  {
                    key: "langpicker" + t.eLang + (n ? "_hasdata" : ""),
                    value: t.eLang,
                    className: (0, c.Z)(
                      { [m().LanguageWithContent]: n },
                      t.bSupported
                        ? m().SupportedLanguage
                        : m().UnsupportedLanguage
                    ),
                  },
                  o
                )
              );
          }
          return e;
        }
        OnLanguageChange(e) {
          const { fnOnLanguageChanged: t, selectedLang: r } = this.props;
          let i = Number.parseInt(e.currentTarget.value);
          i != r && t && t(i);
        }
        render() {
          const { selectedLang: e, bDisabled: t, strTooltip: r } = this.props;
          let i = this.GenerateLanguageOptions();
          return a.createElement(
            g.HP,
            { toolTipContent: r },
            a.createElement(
              "select",
              { value: e, onChange: this.OnLanguageChange, disabled: t },
              i
            )
          );
        }
      };
      (0, i.gn)([p.ak], _.prototype, "OnLanguageChange", null),
        (_ = (0, i.gn)([n.Pi], _));
    },
    51254: (e, t, r) => {
      "use strict";
      r.d(t, { w: () => f });
      var i = r(22188),
        n = r(67294),
        a = r(21213),
        s = r(48341),
        o = r(60419),
        l = r(41414),
        m = r(95598),
        c = r(13596),
        d = r(7573),
        u = r(53622),
        p = r(41311),
        g = r(90666),
        _ = r(79438),
        h = r(86770);
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
                ? (0, l.AM)(n.createElement(y, null), (0, u.RA)(e))
                : "dev" == g.De.WEB_UNIVERSE &&
                  console.log("ClaimItemButton: invalid state, ", (0, i.ZN)(t));
            },
            disabled: r,
          },
          Boolean(r)
            ? n.createElement(c.V, {
                string: (0, p.Xx)("#Loading"),
                size: "small",
              })
            : n.createElement(B, { claimState: t })
        );
      }
      function B(e) {
        const { claimState: t, strButtonOverride: r } = e;
        return t.bAlreadyClaimedCurrentItem
          ? n.createElement(
              "div",
              { className: (0, d.Z)(_.CheckMark, "CSSClaimedState") },
              n.createElement(m.JrY, null),
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
      function y(e) {
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
                            n.createElement(h.x, {
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
    86770: (e, t, r) => {
      "use strict";
      r.d(t, { v: () => f, x: () => h });
      var i = r(13271),
        n = r(67294),
        a = (r(26149), r(76796), r(37662), r(85121), r(21205), r(70655)),
        s = r(9669),
        o = r.n(s),
        l = (r(82946), r(93976)),
        m = r(99533),
        c = r(64839),
        d = r(90666);
      class u {
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
              this.m_listChangeCallback.set(e, new m.pB()),
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
          return (0, a.mG)(this, void 0, void 0, function* () {
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
          var r, i;
          return (0, a.mG)(this, void 0, void 0, function* () {
            let n = null;
            try {
              const a =
                  d.De.COMMUNITY_BASE_URL +
                  (t
                    ? "minigame/ajaxgetgameitemdefsforeditor"
                    : "minigame/ajaxgetgameitemdefs"),
                s = {
                  appid: e,
                  origin: self.origin,
                  l: d.De.LANGUAGE,
                  sessionid: t ? d.De.SESSIONID : void 0,
                },
                m = yield o().get(a, { params: s, withCredentials: t });
              if (
                200 == (null == m ? void 0 : m.status) &&
                1 ==
                  (null === (r = null == m ? void 0 : m.data) || void 0 === r
                    ? void 0
                    : r.success) &&
                (null === (i = null == m ? void 0 : m.data) || void 0 === i
                  ? void 0
                  : i.item_definitions)
              )
                return (
                  this.m_mapAppToDefs.set(e, m.data.item_definitions),
                  this.GetItemDefsChangeForEventID(e).Dispatch(
                    m.data.item_definitions
                  ),
                  1
                );
              n = (0, l.l)(m);
            } catch (e) {
              n = (0, l.l)(e);
            }
            return (
              console.error(
                "CSaleMiniGameItemDefStore.InternalLoadAppCommunityItems failed: on appid " +
                  e +
                  " edit? " +
                  t +
                  " error: " +
                  (null == n ? void 0 : n.strErrorMsg),
                n
              ),
              2
            );
          });
        }
        static Get() {
          return (
            u.s_Singleton ||
              ((u.s_Singleton = new u()),
              u.s_Singleton.Init(),
              "dev" == d.De.WEB_UNIVERSE &&
                (window.g_SaleMiniGameItemDefStore = u.s_Singleton)),
            u.s_Singleton
          );
        }
        Init() {}
      }
      function p(e, t, r) {
        const i = (function (e, t) {
            const [r, i] = (0, n.useState)(u.Get().GetItemDefForAppID(e));
            return (
              (0, n.useEffect)(() => {
                e &&
                  !u.Get().BHasLoadedDef(e) &&
                  u.Get().LoadAppCommunityItems(e, t);
              }, [e, t]),
              (0, c.Qg)(u.Get().GetItemDefsChangeForEventID(e), i),
              r
            );
          })(e, r),
          [a, s] = (0, n.useState)(null);
        return (
          (0, n.useEffect)(() => {
            if (e && i && null == a) {
              const r = i.find(
                (r) => r.active && r.appid == e && r.item_type == t
              );
              r && s(r);
            }
          }, [a, i, e, t]),
          a
        );
      }
      var g = r(13596),
        _ = r(41311);
      function h(e) {
        const { appid: t, community_item_type: r } = e,
          i = p(t, r);
        if (
          (null == i ? void 0 : i.item_movie_mp4) &&
          (null == i ? void 0 : i.item_movie_webm)
        ) {
          const e = `${d.De.MEDIA_CDN_COMMUNITY_URL}images/items/${t}/${
              null == i ? void 0 : i.item_image_large
            }`,
            r = `${d.De.MEDIA_CDN_COMMUNITY_URL}images/items/${t}/${
              null == i ? void 0 : i.item_movie_webm
            }`,
            a = `${d.De.MEDIA_CDN_COMMUNITY_URL}images/items/${t}/${
              null == i ? void 0 : i.item_movie_mp4
            }`;
          return n.createElement(
            "video",
            { muted: !0, controls: !1, autoPlay: !0, loop: !0, poster: e },
            n.createElement("source", { src: r, type: "video/webm" }),
            Boolean(!d.De.IN_CLIENT) &&
              n.createElement("source", { src: a, type: "video/mp4" })
          );
        }
        if (i) {
          const r = `${d.De.MEDIA_CDN_COMMUNITY_URL}images/items/${t}/${
            (null == i ? void 0 : i.item_image_small) ||
            (null == i ? void 0 : i.item_image_large)
          }`;
          return n.createElement("img", {
            className: e.className,
            src: r,
            alt: null == i ? void 0 : i.item_name,
          });
        }
        return n.createElement(g.V, {
          size: "small",
          string: (0, _.Xx)("#Loading"),
        });
      }
      function f(e) {
        const { section: t, rewardDef: r, language: a } = e,
          s = p(r.appid, r.community_item_type),
          [o] = (0, i.SZ)(() => {
            var e;
            return [
              Boolean(
                null === (e = t.rewards) || void 0 === e
                  ? void 0
                  : e.show_reward_item_name
              ),
            ];
          });
        let l;
        switch (r.community_class) {
          case 14:
          case 15:
            l = `${d.De.COMMUNITY_BASE_URL}my/edit/avatar`;
            break;
          case 1:
            l = `${d.De.COMMUNITY_BASE_URL}my/edit/favoritebadge`;
            break;
          case 3:
          case 8:
            l = `${d.De.COMMUNITY_BASE_URL}my/edit/background`;
            break;
          case 13:
            l = `${d.De.COMMUNITY_BASE_URL}my/edit/miniprofile`;
            break;
          case 11:
            l = `${d.De.COMMUNITY_BASE_URL}chat`;
        }
        return n.createElement(
          "a",
          { href: l },
          n.createElement(h, {
            appid: null == r ? void 0 : r.appid,
            community_item_type: null == r ? void 0 : r.community_item_type,
          }),
          Boolean(o) &&
            n.createElement("span", null, null == s ? void 0 : s.item_name)
        );
      }
    },
    42055: (e, t, r) => {
      "use strict";
      r.d(t, { TZ: () => p, t0: () => d });
      var i = r(67294),
        n = r(7573),
        a = r(22745),
        s = r(37699),
        o = r(41414),
        l = r(10881),
        m = r.n(l),
        c = r(95598);
      function d(e) {
        (0, o.x1)(i.createElement(u, { rgImageURL: e }), window);
      }
      function u(e) {
        const { closeModal: t, rgImageURL: r } = e,
          [n, a] = i.useState(0),
          o = i.useCallback(() => {
            a(0 == n ? r.length - 1 : n - 1);
          }, [n, r.length]),
          l = i.useCallback(() => {
            n + 1 >= r.length ? a(0) : a(n + 1);
          }, [n, r.length]);
        return i.createElement(
          s.RG,
          {
            bAllowFullSize: !0,
            bOKDisabled: !0,
            closeModal: t,
            bHideCloseIcon: !0,
          },
          i.createElement(p, {
            index: n,
            numElements: r.length,
            fnForward: l,
            fnBackwards: o,
            fnClose: t,
            bCircular: !0,
          }),
          i.createElement(
            "div",
            { className: m().PopupScreenshotContainer },
            i.createElement("img", {
              className: m().PopupScreenshot,
              src: r[n],
            })
          )
        );
      }
      function p(e) {
        const {
          index: t,
          numElements: r,
          fnForward: s,
          fnBackwards: o,
          fnClose: l,
          bCircular: d,
        } = e;
        (0, a.P)("ArrowLeft", o),
          (0, a.P)("Left", o),
          (0, a.P)("ArrowRight", s),
          (0, a.P)("Right", s),
          (0, a.P)("Escape", () => l && l()),
          (0, a.P)("Esc", () => l && l());
        let u = r > 1;
        return i.createElement(
          "div",
          { className: m().ButtonCtn },
          u &&
            i.createElement(
              i.Fragment,
              null,
              i.createElement(
                "div",
                {
                  className: (0, n.Z)(
                    m().ButtonIcon,
                    0 !== t || d ? null : m().Disabled
                  ),
                  onClick: o,
                },
                i.createElement(c.V7n, { angle: 270 })
              ),
              i.createElement(
                "div",
                {
                  className: (0, n.Z)(
                    m().ButtonIcon,
                    t !== r - 1 || d ? null : m().Disabled
                  ),
                  onClick: s,
                },
                i.createElement(c.V7n, { angle: 90 })
              )
            ),
          i.createElement(
            "div",
            { className: m().ButtonIcon, onClick: l },
            i.createElement(c.X, null)
          )
        );
      }
    },
    12264: (e, t, r) => {
      "use strict";
      r.d(t, { D: () => F });
      var i = r(70655),
        n = r(9669),
        a = r.n(n),
        s = r(29323),
        o = r(67294),
        l = r(49727),
        m = (r(26149), r(58114)),
        c = r(86605),
        d = r(3389),
        u = r(18330),
        p = (r(29139), r(7200), r(2388)),
        g = r(91279),
        _ = r(34133),
        h = r.n(_),
        f = r(7573),
        B = r(41311),
        y = r(93976),
        C = r(90666),
        b = r(37699),
        S = r(13596),
        v = r(14778),
        w = r(21461),
        E = r.n(w);
      const F = (0, s.Pi)((e) => {
        const { appid: t, eventLink: r } = e,
          n = o.useRef(null),
          [s, _] = (0, p.Gr)(C.L7.steamid),
          [w, F] = o.useState(""),
          [R, U] = o.useState(!1),
          [D, M] = o.useState(""),
          [I, A] = o.useState(!1);
        o.useEffect(
          () => () =>
            n.current &&
            n.current("ShareEventOnFriendsActivityFeed: unmounting"),
          []
        );
        const T = _ ? _.avatar_url : null,
          z = d.K.InitFromAccountID(C.L7.accountid),
          x = () =>
            (0, i.mG)(void 0, void 0, void 0, function* () {
              var e, i;
              n.current &&
                n.current(
                  "ShareEventOnFriendsActivityFeed: cancel previous..."
                );
              const s = a().CancelToken.source();
              (n.current = s.cancel), U(!0);
              let o = w;
              0 != o.trim().length && (o += "\n\n"), (o += r);
              const l =
                C.De.COMMUNITY_BASE_URL +
                "profiles/" +
                z.ConvertTo64BitString() +
                "/ajaxpostuserstatus";
              try {
                if (C.De.IN_STEAMUI) {
                  let e = m.gA.Init(u.Sv);
                  e.Body().set_appid(t), e.Body().set_status_text(o);
                  let r = yield u.lk.PostStatusToFriends(
                    c.Q8.CMInterface.GetServiceTransport(),
                    e
                  );
                  if (1 != r.GetEResult()) {
                    const e =
                      (0, B.Xx)("#EventDisplay_Share_Failure") +
                      "\n\n" +
                      r.GetEResult();
                    return (
                      console.error(e, !s.token.reason),
                      void (s.token.reason || M(e))
                    );
                  }
                } else {
                  const r = new FormData();
                  r.append("appid", "" + t),
                    r.append("status_text", o),
                    r.append("sessionid", C.De.SESSIONID);
                  const n = yield a().post(l, r, { withCredentials: !0 });
                  if (
                    200 != n.status ||
                    1 !=
                      (null === (e = null == n ? void 0 : n.data) ||
                      void 0 === e
                        ? void 0
                        : e.success)
                  ) {
                    const e =
                      (0, B.Xx)("#EventDisplay_Share_Failure") +
                      "\n\n" +
                      (null === (i = null == n ? void 0 : n.data) ||
                      void 0 === i
                        ? void 0
                        : i.message);
                    return console.error(e), void (s.token.reason || M(e));
                  }
                }
                s.token.reason ||
                  (A(!0), M((0, B.Xx)("#EventDisplay_Share_Success")));
              } catch (e) {
                const t = (0, y.l)(e),
                  r =
                    (0, B.Xx)("#EventDisplay_Share_Failure") +
                    "\n\n" +
                    t.strErrorMsg;
                s.token.reason || M(r), console.error(r);
              }
            });
        return R
          ? o.createElement(
              b.uH,
              {
                strDescription: "",
                strTitle: (0, B.Xx)("#Button_Share"),
                onCancel: e.closeModal,
                onOK: e.closeModal,
                bAlertDialog: !0,
              },
              o.createElement(
                "div",
                { className: h().FlexColumnContainer },
                o.createElement(
                  "div",
                  null,
                  (0, B.Xx)("#EventDisplay_Share_OnMyStatus_Details")
                ),
                o.createElement(
                  "div",
                  { className: E().Container },
                  0 == (null == D ? void 0 : D.length)
                    ? o.createElement(S.V, { position: "center" })
                    : o.createElement("div", null, D),
                  Boolean(I) &&
                    o.createElement(
                      "a",
                      {
                        href:
                          C.De.COMMUNITY_BASE_URL +
                          "profiles/" +
                          z.ConvertTo64BitString() +
                          "/home",
                        target: C.De.IN_CLIENT ? void 0 : "_blank",
                      },
                      (0, B.Xx)("#EventDisplay_Share_OpenActivityFeed")
                    )
                )
              )
            )
          : o.createElement(
              b.uH,
              {
                strDescription: "",
                strTitle: (0, B.Xx)("#Button_Share"),
                onCancel: e.closeModal,
                onOK: x,
                strOKButtonText: (0, B.Xx)("#Button_Post"),
              },
              o.createElement(
                "div",
                { className: h().FlexColumnContainer },
                o.createElement(
                  "div",
                  null,
                  (0, B.Xx)("#EventDisplay_Share_OnMyStatus_Details")
                ),
                o.createElement(
                  "div",
                  {
                    className: (0, f.Z)(E().Container, h().FlexColumnContainer),
                  },
                  o.createElement(
                    "div",
                    null,
                    o.createElement("img", {
                      className: E().SmallAvatar,
                      src: T,
                      "data-miniprofile": "s" + C.L7.steamid,
                    }),
                    o.createElement(
                      "div",
                      { className: (0, f.Z)(h().FlexColumnContainer) },
                      o.createElement(g.R, {
                        strPlaceholder: (0, B.Xx)(
                          "#EventDisplay_Share_OnMyStatus_Placeholder"
                        ),
                        fnGetCurText: () => w,
                        fnOnTextChange: (e) => F(e.currentTarget.value),
                        fnSetText: F,
                        emoticonStore: e.emoticonStore,
                        bSupportHTMLImport: !1,
                        showFormatHelp: "UserStatusPublished",
                        limitBBCode: l.iP,
                        classNameForTextArea: E().ShareDescription,
                        bEmbeddedInDialog: !0,
                      })
                    )
                  ),
                  o.createElement(
                    "div",
                    { className: E().ShareLink },
                    o.createElement(v.d, {
                      text: r,
                      partnerEventStore: e.partnerEventStore,
                    })
                  )
                )
              )
            );
      });
    },
    22745: (e, t, r) => {
      "use strict";
      r.d(t, { P: () => n });
      var i = r(67294);
      function n(e, t) {
        i.useEffect(() => {
          const r = (r) => {
            r.key === e && t(r);
          };
          return (
            document.addEventListener("keydown", r),
            () => document.removeEventListener("keydown", r)
          );
        }, [e, t]);
      }
    },
    56175: (e, t, r) => {
      "use strict";
      r.d(t, { Z: () => i });
      const i =
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAc9JREFUeNrsmz1Lw1AUhnP8qB+Qkk0pItbVxcX/IM6Cky7iFH+Jk79BwclBB3+AszgUwdVNBxFaCw1E7fW9cAep5pa0NiT3vgdeLjRJm/Ocm/NRiCilAp9tKvDcCIAACIAAsiyEzqAepCqqnvEhzHJSLGVQX7jvSKDPoYO8ADS9BUcAJNBiXgCudUjCJEgABPDLZip2v12obwIXur4DdBK+MeVrHaqJSB2KzKqT2izUgLZd2wH30CF8bFnTusgnlhdUsjmXAFxBe3Au9TEJ3hXpfNkA9M22T4v80TIBuIbzDz73ARe+9wG31pqo1DSWGNqBlgcO16oO4A3b/3XIOafQ8b9PSCWZBh8BYMMSfd3wvEPzrk6DH0OON8Z0vvLDkHAaJAACIICJJJeCy+Aa1Pnj8y+Uwa6lDOpA1S3fewSdjJJIi26EOnC0nTtKInpQalsALfn+CDQJgAA8BYDnP8IS+bwDmuNcXHQVWDURG7QUmf7ZEmV9nysZh7dcGIdbALBpAaD7h6dJDFRshQmAAAiAAAiAAAiAAAiAAAiAAAiAAAjgpyUO+ZmMAuDSIQCZvtj+E4zNuhtU98WJxDgfZ50gfHOUSZAACIAAPLZvAQYAZ32YkpymkAcAAAAASUVORK5CYII=";
    },
    47077: (e, t, r) => {
      "use strict";
      r.d(t, { Z: () => i });
      const i =
        r.p +
        "images/applications/store/reddit_large.png?v=valveisgoodatcaching";
    },
    78853: (e, t, r) => {
      "use strict";
      r.d(t, { Z: () => i });
      const i =
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAABApJREFUeNrsm2tIFUEUx2evRl5ISnugZuULIwoVtIykIIkgowdmERERUh9CqQ/Rh+gFCX4oKCIjyi8VQtETsoLoARViJEokRYlako9Iy4JKfLX9hz2CwXrv7t6ZvbvcPfDjwr3uzJ7/npk5c3ZUVFVlkWw+FuHmCeAJ4AngCeAJ4AkQwRbtgnucBzJALPgNPoJ28FdI6zwTdCDp4DToUvWtF1SDHIPtFUz0m5GLp9noeAw4BYZV43YFxOm05QNF4DmosirADNABMm1wPgE0qdasHWSAKJALKkAr/TYIUq0KcIAa4Y0lS3Q+HjSroVk/+Knz/eFAfQe7sfpxDckU4bYqx2opKsb6UcwIMElnLPLhsECw8xskOc9F9RPFoIaGyX/9B8oDknSWybmgHhQJXOaOSlg634AP4AH4Dm6Bh6DVzDKYE0ThSoqSUJ5+lmqPVUx0D4EioDeIygdBA8gL4UmtsiGROhcoygIJ8AUMBGk8G7wC1SDRws1lSXb+OCjngW5FgFHw0kAnCthF6ekZkGLiBhMlOT4ENoNjoW6GrpvoNAbsBW3gLtgKpgS5ZkCSAD3gpojdYA34ZmGHuQ5cpWtrSZilJNJ46w/3TksxUBbfDS4K6m+ElqdO0A3mg2WSlsFsUQLwMX4DbHLRNr/eqLCBhkAm2EgC7ABPXCRAr9E/DFQQ8YM7FK61FAUJYKELBGgTIUA3fSaDPS6rdBkWIFgm+M6lpb4mUUXRey50fhA0ihLgLBh2mQANlAkKEaCTNhNusvuiEyE/7QmyXCJAhqhJcHy+vtZMo2G0RrP3afTNEB8KBeCpwwUwnbIrJo/I8KxwJzgCUh3mfD/lLH9kRAC3eLCIabW1FWA/bTudYufNOm82AuJAF02KzIFPPw38MHuhz2Qnlxw69iutOG9lDuDDoAVMd5Dzb0EuZYBMZgRw4zV2XuoadYjz/BV5qVXnrQjA7THY7pAU+STTqtKWTQnhpCjPCy6D9DA5/wIUMq3MFhYBxtJkXncvY9pJDrusAywBX0NtSBF0VthHe4Xl9FnK5J0/6qPoaxF146Imo9dUQFkj2flCUc6LFIDvwK7RBDlbYtjzCGsW2Wiop8TyafxvA1ESx3wdKGHa+0oWTgGmgsVgNVjPtBcbMo1PUCdo8yVl2dUTYBY4BOYw7VxeLGWAKbTbUmya6d8z7aVrnVyJ9Q8ORINy0KPab31gn4DDF4YItgz66SmU2RDun0AVuAB+2ZVQGM0DeNivBFtAMZgpcBvLi5j8LfQjJur4q+REiM/2eSRIPiU+aQZzhc+UL/DS9TOmFVtHWBhNVCY4mWmnypJo2IwdjBikp8xTVl5XHGIOM8X7t7kIN08ATwBPAE8ATwBPgAi2fwIMABJGc33swO3GAAAAAElFTkSuQmCC";
    },
  },
]);
