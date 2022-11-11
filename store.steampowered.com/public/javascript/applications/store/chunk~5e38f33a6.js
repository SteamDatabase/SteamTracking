/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
"use strict";
(self.webpackChunkstore = self.webpackChunkstore || []).push([
  [4233],
  {
    77636: (e, t, s) => {
      s.d(t, { LA: () => u, jg: () => l });
      var r = s(70655),
        n = s(9669),
        o = s.n(n),
        i = s(22188),
        a = (s(26149), s(92398), s(3389), s(82946), s(93976)),
        d = s(90666),
        p = s(67294);
      const m = "unUserdataVersion";
      class l {
        constructor() {
          (this.m_setWishList = new Set()),
            (this.m_wishlistInOrder = Array()),
            (this.m_setOwnedPackages = new Set()),
            (this.m_setOwnedApps = new Set()),
            (this.m_setFollowedApps = new Set()),
            (this.m_setExcludedTagsIds = new Set()),
            (this.m_setExcludedContentDescriptors = new Set()),
            (this.m_setRecommendedApps = new Set()),
            (this.m_recAppInOrder = new Array()),
            (this.m_mapIgnoredApps = new Map()),
            (this.m_mapIgnoredPackages = new Map()),
            (this.m_setCuratorsFollowed = new Set()),
            (this.m_setCuratorsIgnored = new Set()),
            (this.m_bShowFilteredUserReviewScores = !0),
            (this.m_setPreferredPlatforms = new Set()),
            (this.m_bAllowAppImpressions = !1),
            (this.m_primaryLanguage = -1),
            (this.m_secondaryLanguages = new Set()),
            (this.m_setRecommendedTags = new Set()),
            (this.m_mapRecommendingCuratorsForApp = new Map()),
            (this.m_setPackagesInCart = new Set()),
            (this.m_setAppsInCart = new Set()),
            (this.m_nCartLineItemCount = 0),
            (this.m_bIsLoaded = !1),
            (this.m_bAjaxInFlight = !1);
        }
        BIsLoaded() {
          return this.m_bIsLoaded;
        }
        GetWishlistGamesInUserOrder() {
          return this.m_wishlistInOrder;
        }
        GetWishlistGameCount() {
          return this.m_setWishList.size;
        }
        GetRecommendedGamesInIRPriorityOrder() {
          return this.m_recAppInOrder;
        }
        GetFollowedCuratorCount() {
          return this.m_setCuratorsFollowed.size;
        }
        GetFollowedCuratorsAccountID() {
          return Array.from(this.m_setCuratorsFollowed);
        }
        GetPackagesInCartCount() {
          return this.m_setPackagesInCart.size;
        }
        GetAppInCartCount() {
          return this.m_setAppsInCart.size;
        }
        GetCartLineItemCount() {
          return this.m_nCartLineItemCount;
        }
        GetIgnoredAppsCount() {
          return this.m_mapIgnoredApps.size;
        }
        BIsFollowingCurator(e) {
          const t =
            "object" == typeof e && "GetAccountID" in e ? e.GetAccountID() : e;
          return this.m_setCuratorsFollowed.has(t);
        }
        BIsFollowingCreator(e) {
          return this.BIsFollowingCurator(e);
        }
        BIsIgnoringCurator(e) {
          const t =
            "object" == typeof e && "GetAccountID" in e ? e.GetAccountID() : e;
          return this.m_setCuratorsIgnored.has(t);
        }
        get ExcludedContentDescriptor() {
          return Array.from(this.m_setExcludedContentDescriptors);
        }
        BExcludesTag(e) {
          return e.some((e) => this.m_setExcludedTagsIds.has(Number(e.tagid)));
        }
        BExcludeTagIDs(e) {
          return e.some((e) => this.m_setExcludedTagsIds.has(e));
        }
        GetExcludedTagsSortedByID() {
          return Array.from(this.m_setExcludedTagsIds).sort();
        }
        BExcludesContentDescriptor(e) {
          return e.some((e) => this.m_setExcludedContentDescriptors.has(e));
        }
        BIncludesContentDescriptor(e) {
          return !this.m_setExcludedContentDescriptors.has(e);
        }
        BIsGameWishlisted(e) {
          return this.m_setWishList.has(Number(e));
        }
        BIsGameRecommended(e) {
          return this.m_setRecommendedApps.has(Number(e));
        }
        BIsGameIgnored(e) {
          return this.m_mapIgnoredApps && this.m_mapIgnoredApps.has(e);
        }
        BIsPackageIgnored(e) {
          var t;
          return null === (t = this.m_mapIgnoredPackages) || void 0 === t
            ? void 0
            : t.has(e);
        }
        BIsGameOwned(e) {
          return this.m_setOwnedApps.has(Number(e));
        }
        BOwnsApp(e) {
          return this.m_setOwnedApps.has(Number(e));
        }
        BFollowsApp(e) {
          return this.m_setFollowedApps.has(Number(e));
        }
        BOwnsPackage(e) {
          return this.m_setOwnedPackages.has(Number(e));
        }
        BShowFilteredUserReviewScores() {
          return this.m_bShowFilteredUserReviewScores;
        }
        BAppImpressionsAllowed() {
          return this.m_bAllowAppImpressions;
        }
        GetPrimaryLanguage() {
          return this.m_primaryLanguage;
        }
        GetSecondaryLanguages() {
          return this.m_secondaryLanguages;
        }
        BIsAnyLanguageEnabled(e) {
          return (
            null == this.m_primaryLanguage ||
            this.m_primaryLanguage <= -1 ||
            30 <= this.m_primaryLanguage ||
            e.some(
              (e) =>
                this.m_primaryLanguage === e || this.m_secondaryLanguages.has(e)
            )
          );
        }
        GetRecommendedTags() {
          return this.m_setRecommendedTags;
        }
        BIsAjaxInFlight() {
          return this.m_bAjaxInFlight;
        }
        BIsAppRecommendedBySomeCurator(e) {
          return this.m_mapRecommendingCuratorsForApp.has(e);
        }
        GetRecommendingCuratorsForApp(e) {
          return this.m_mapRecommendingCuratorsForApp.get(e);
        }
        HintLoad() {
          return (0, r.mG)(this, void 0, void 0, function* () {
            return (
              this.m_promise || (this.m_promise = this.InternalLoad()),
              this.m_promise
            );
          });
        }
        InternalLoad() {
          return (0, r.mG)(this, void 0, void 0, function* () {
            let e = window.localStorage.getItem(m) || "0",
              t = {
                v: "0" == e ? void 0 : e,
                id: "" + d.L7.accountid,
                cc: "" + d.De.COUNTRY,
                origin: self.origin,
              },
              s = d.De.STORE_BASE_URL + "dynamicstore/userdata/";
            try {
              let e = yield o().get(s, { params: t, withCredentials: !0 });
              e &&
                200 == e.status &&
                (0, i.z)(() => {
                  if (((this.m_bIsLoaded = !0), e.data.rgCurators)) {
                    this.m_setCuratorsFollowed = new Set();
                    for (const t in e.data.rgCurators)
                      this.m_setCuratorsFollowed.add(Number(t));
                  }
                  if (
                    (e.data.rgCuratorsIgnored &&
                      (this.m_setCuratorsIgnored = new Set(
                        e.data.rgCuratorsIgnored.map((e) => Number(e))
                      )),
                    e.data.rgWishlist &&
                      ((this.m_wishlistInOrder = e.data.rgWishlist.map((e) =>
                        Number(e)
                      )),
                      (this.m_setWishList = new Set(
                        e.data.rgWishlist.map((e) => Number(e))
                      ))),
                    e.data.rgFollowedApps &&
                      (this.m_setFollowedApps = new Set(
                        e.data.rgFollowedApps.map((e) => Number(e))
                      )),
                    e.data.rgOwnedApps &&
                      (this.m_setOwnedApps = new Set(
                        e.data.rgOwnedApps.map((e) => Number(e))
                      )),
                    e.data.rgOwnedPackages &&
                      (this.m_setOwnedPackages = new Set(
                        e.data.rgOwnedPackages.map((e) => Number(e))
                      )),
                    e.data.rgIgnoredApps)
                  ) {
                    const t = e.data.rgIgnoredApps;
                    this.m_mapIgnoredApps = new Map();
                    for (const e in t)
                      this.m_mapIgnoredApps.set(Number(e), Number(t[e]));
                  }
                  if (e.data.rgIgnoredPackages) {
                    const t = e.data.rgIgnoredPackages;
                    this.m_mapIgnoredPackages = new Map();
                    for (const e in t)
                      this.m_mapIgnoredPackages.set(Number(e), Number(t[e]));
                  }
                  if (
                    (e.data.rgExcludedTags &&
                      (this.m_setExcludedTagsIds = new Set(
                        e.data.rgExcludedTags.map((e) => Number(e.tagid))
                      )),
                    e.data.rgExcludedContentDescriptorIDs &&
                      (this.m_setExcludedContentDescriptors = new Set(
                        e.data.rgExcludedContentDescriptorIDs.map((e) =>
                          Number(e)
                        )
                      )),
                    e.data.rgRecommendedApps &&
                      ((this.m_recAppInOrder = e.data.rgRecommendedApps.map(
                        (e) => Number(e)
                      )),
                      (this.m_setRecommendedApps = new Set(
                        e.data.rgRecommendedApps.map((e) => Number(e))
                      ))),
                    e.data.rgPreferredPlatforms &&
                      (this.m_setPreferredPlatforms = new Set(
                        e.data.rgPreferredPlatforms
                      )),
                    e.data.bAllowAppImpressions &&
                      (this.m_bAllowAppImpressions =
                        e.data.bAllowAppImpressions),
                    (this.m_bShowFilteredUserReviewScores =
                      !!e.data.bShowFilteredUserReviewScores),
                    void 0 !== e.data.rgPrimaryLanguage &&
                      (this.m_primaryLanguage = e.data.rgPrimaryLanguage),
                    e.data.rgSecondaryLanguages &&
                      (this.m_secondaryLanguages = new Set(
                        e.data.rgSecondaryLanguages
                      )),
                    e.data.rgRecommendedTags &&
                      (this.m_setRecommendedTags = new Set(
                        e.data.rgRecommendedTags.map((e) => e.tagid)
                      )),
                    e.data.rgAppsInCart &&
                      (this.m_setAppsInCart = new Set(e.data.rgAppsInCart)),
                    e.data.rgPackagesInCart &&
                      (this.m_setPackagesInCart = new Set(
                        e.data.rgPackagesInCart
                      )),
                    e.data.nCartLineItemCount &&
                      (this.m_nCartLineItemCount = e.data.nCartLineItemCount),
                    e.data.rgCurations)
                  )
                    for (const t of Object.keys(e.data.rgCurations)) {
                      const s = [];
                      for (const r of Object.keys(e.data.rgCurations[t]))
                        0 === e.data.rgCurations[t][r] && s.push(Number(r));
                      this.m_mapRecommendingCuratorsForApp.set(Number(t), s);
                    }
                });
            } catch (e) {
              let t = (0, a.l)(e);
              console.error("CDynamicStore.InternalLoad", t.strErrorMsg, t);
            }
            return this;
          });
        }
        UpdateFollowOrIgnoreCurator(e, t, s) {
          return (0, r.mG)(this, void 0, void 0, function* () {
            let r =
              d.De.STORE_BASE_URL +
              "curators/" +
              (t ? "ajaxfollow/" : "ajaxignore/");
            const n = e.GetAccountID(),
              i = new FormData();
            i.append("clanid", "" + n),
              i.append("sessionid", d.De.SESSIONID),
              i.append(t ? "follow" : "ignore", s ? "1" : "0");
            let a = yield o().post(r, i, { withCredentials: !0 });
            if (a && 200 == a.status) {
              this.InvalidateCache();
              const e = t
                ? this.m_setCuratorsFollowed
                : this.m_setCuratorsIgnored;
              s ? e.add(n) : e.delete(n);
            }
            return a.data;
          });
        }
        UpdateAppIgnore(e, t, s = 0) {
          return (0, r.mG)(this, void 0, void 0, function* () {
            let r = d.De.STORE_BASE_URL + "recommended/ignorerecommendation";
            const n = new FormData();
            n.append("sessionid", d.De.SESSIONID),
              n.append("appid", "" + e),
              n.append("remove", t ? "0" : "1"),
              n.append("snr", d.De.SNR),
              n.append("ignore_reason", "" + s);
            try {
              this.m_bAjaxInFlight = !0;
              let a = yield o().post(r, n, { withCredentials: !0 });
              return (
                a &&
                  200 == a.status &&
                  (0, i.z)(() => {
                    this.InvalidateCache(),
                      t
                        ? this.m_mapIgnoredApps.set(e, s)
                        : this.m_mapIgnoredApps.delete(e);
                  }),
                (this.m_bAjaxInFlight = !1),
                a.data
              );
            } catch (e) {
              let t = (0, a.l)(e);
              console.error("UpdateAppIgnore", t.strErrorMsg, t);
            }
            return (this.m_bAjaxInFlight = !1), { success: 2 };
          });
        }
        UpdateGameWishlist(e, t, s, n) {
          return (0, r.mG)(this, void 0, void 0, function* () {
            let r =
              d.De.STORE_BASE_URL +
              "api/" +
              (t ? "addtowishlist" : "removefromwishlist");
            const i = new FormData();
            i.append("appid", "" + e),
              i.append("sessionid", d.De.SESSIONID),
              s && i.append("snr", s),
              (this.m_bAjaxInFlight = !0);
            let a = yield o().post(r, i, {
              withCredentials: !0,
              cancelToken: n ? n.token : void 0,
            });
            if (((this.m_bAjaxInFlight = !1), n && n.token.reason))
              return { success: 52 };
            if (
              ((a.data.success = 1 == a.data.success ? 1 : 2),
              1 == a.data.success)
            )
              if ((this.InvalidateCache(), (e = Number(e)), t))
                this.m_setWishList.has(e) || this.m_wishlistInOrder.push(e),
                  this.m_setWishList.add(e);
              else {
                if (this.m_setWishList.has(e)) {
                  const t = this.m_wishlistInOrder.findIndex((t) => t == e);
                  -1 != t && this.m_wishlistInOrder.splice(t, 1);
                }
                this.m_setWishList.delete(e);
              }
            return a.data;
          });
        }
        AddToCart(e, t, s, n, i, a) {
          return (0, r.mG)(this, void 0, void 0, function* () {
            const r = new FormData();
            r.append("action", "add_to_cart"),
              a
                ? r.append("bundleid", a.toString())
                : r.append("subid", "" + t),
              i && r.append("snr", i),
              r.append("sessionid", d.De.SESSIONID),
              r.append("quantity", "1");
            try {
              yield o().post(s, r, { withCredentials: !0 });
              let t = d.De.IN_CLIENT ? "steam://url/StoreCart" : n;
              e.preventDefault(),
                this.InvalidateCache(),
                (window.location.href = t);
            } catch (e) {
              console.log("HandleOnAddToCart"), console.log(e);
            }
          });
        }
        AddLicenseForFreeGame(e) {
          return (0, r.mG)(this, void 0, void 0, function* () {
            if (this.BOwnsApp(e)) return 1;
            try {
              const t = new FormData();
              t.append("sessionid", d.De.SESSIONID),
                t.append("appid", "" + e),
                t.append("cc", d.De.COUNTRY);
              let s =
                  d.De.STORE_BASE_URL + "actions/addappformastersubscription",
                r = yield o().post(s, t, { withCredentials: !0 });
              if (
                (this.InvalidateCache(),
                !r.data.success || 1 !== r.data.success)
              )
                return r.data.success ? r.data.success : 2;
              this.m_setOwnedApps.add(Number(e));
            } catch (e) {
              let t = (0, a.l)(e);
              return (
                console.log("AddLicense request failed:", t.strErrorMsg, t), 2
              );
            }
            return 1;
          });
        }
        UpdateFollowingApp(e, t) {
          return (0, r.mG)(this, void 0, void 0, function* () {
            try {
              const s = d.De.STORE_BASE_URL + "explore/followgame",
                r = new FormData();
              r.append("appid", "" + e),
                r.append("sessionid", d.De.SESSIONID),
                t || r.append("unfollow", "1");
              const n = yield o().post(s, r, { withCredentials: !0 });
              if (!n.data) return 2;
              this.InvalidateCache(),
                t
                  ? this.m_setFollowedApps.add(Number(e))
                  : this.m_setFollowedApps.delete(Number(e));
            } catch (e) {
              return console.log("Follow game request failed"), 2;
            }
            return 1;
          });
        }
        BHasPlatformPreferenceSet() {
          return (
            this.m_setPreferredPlatforms.size > 0 &&
            this.m_setPreferredPlatforms.size < 3
          );
        }
        BIsPreferredPlatform(e) {
          return this.m_setPreferredPlatforms.has(e);
        }
        InvalidateCache() {
          window.localStorage.setItem(
            m,
            (
              Number.parseInt(window.localStorage.getItem(m) || "0") + 1
            ).toString()
          );
        }
        static Get() {
          return (
            l.s_globalSingletonStore ||
              ((l.s_globalSingletonStore = new l()),
              "dev" == d.De.WEB_UNIVERSE &&
                (window.DUS = l.s_globalSingletonStore)),
            l.s_globalSingletonStore
          );
        }
      }
      function u() {
        const [e, t] = (0, p.useState)(!l.Get().BIsLoaded());
        return (
          (0, p.useEffect)(() => {
            e &&
              l
                .Get()
                .HintLoad()
                .finally(() => t(!l.Get().BIsLoaded()));
          }, [e]),
          [e, l.Get()]
        );
      }
      (0, r.gn)([i.LO], l.prototype, "m_setWishList", void 0),
        (0, r.gn)([i.LO], l.prototype, "m_setOwnedPackages", void 0),
        (0, r.gn)([i.LO], l.prototype, "m_setOwnedApps", void 0),
        (0, r.gn)([i.LO], l.prototype, "m_setFollowedApps", void 0),
        (0, r.gn)([i.LO], l.prototype, "m_setExcludedTagsIds", void 0),
        (0, r.gn)(
          [i.LO],
          l.prototype,
          "m_setExcludedContentDescriptors",
          void 0
        ),
        (0, r.gn)([i.LO], l.prototype, "m_setRecommendedApps", void 0),
        (0, r.gn)([i.LO], l.prototype, "m_mapIgnoredApps", void 0),
        (0, r.gn)([i.LO], l.prototype, "m_mapIgnoredPackages", void 0),
        (0, r.gn)([i.LO], l.prototype, "m_setCuratorsFollowed", void 0),
        (0, r.gn)([i.LO], l.prototype, "m_setCuratorsIgnored", void 0),
        (0, r.gn)(
          [i.LO],
          l.prototype,
          "m_bShowFilteredUserReviewScores",
          void 0
        ),
        (0, r.gn)([i.LO], l.prototype, "m_primaryLanguage", void 0),
        (0, r.gn)([i.LO], l.prototype, "m_secondaryLanguages", void 0),
        (0, r.gn)([i.LO], l.prototype, "m_setRecommendedTags", void 0),
        (0, r.gn)(
          [i.LO],
          l.prototype,
          "m_mapRecommendingCuratorsForApp",
          void 0
        ),
        (0, r.gn)([i.LO], l.prototype, "m_setPackagesInCart", void 0),
        (0, r.gn)([i.LO], l.prototype, "m_setAppsInCart", void 0),
        (0, r.gn)([i.LO], l.prototype, "m_nCartLineItemCount", void 0),
        (0, r.gn)([i.LO], l.prototype, "m_bAjaxInFlight", void 0),
        (0, r.gn)([i.Fl], l.prototype, "ExcludedContentDescriptor", null),
        (0, r.gn)([i.aD], l.prototype, "UpdateAppIgnore", null);
    },
    23211: (e, t, s) => {
      s.d(t, { X: () => u, _: () => c });
      var r = s(67294),
        n = s(41414),
        o = s(41311),
        i = s(90666),
        a = s(51167),
        d = (s(88514), s(65902)),
        p = s(92742),
        m = s(92398);
      function l(e) {
        return r.createElement(
          n.e1,
          { onEscKeypress: e.closeModal, bDisableBackgroundDismiss: !0 },
          r.createElement(h, { redirectURL: e.redirectURL })
        );
      }
      function u() {
        (0, n.AM)(
          r.createElement(l, {
            ownerWin: window,
            redirectURL: window.location.href,
          }),
          window,
          { strTitle: (0, o.Xx)("#Login_SignIn") }
        );
      }
      function c(e) {
        (0, n.AM)(
          r.createElement(l, { ownerWin: window, redirectURL: e }),
          window,
          { strTitle: (0, o.Xx)("#Login_SignIn") }
        );
      }
      function h(e) {
        const { redirectURL: t } = e,
          [s] = (0, r.useState)(
            new d.J(i.De.WEBAPI_BASE_URL).GetAnonymousServiceTransport()
          ),
          [n, o] = (0, r.useState)(!1);
        return r.createElement(
          "div",
          null,
          n
            ? r.createElement(a.pT, null)
            : r.createElement(a.wK, {
                autoFocus: !0,
                transport: s,
                platform: 2,
                onComplete: (e) => {
                  e == p.TG.k_PrimaryDomainFail
                    ? o(!0)
                    : window.location.assign(t);
                },
                redirectUrl: t,
                theme: "modal",
                disableQR: i.De.EREALM === m.IN.k_ESteamRealmChina,
              })
        );
      }
    },
    41414: (e, t, s) => {
      s.d(t, { AM: () => h, BR: () => g, e1: () => d.e1, x1: () => c });
      var r = s(70655),
        n = s(67294),
        o = s(73935),
        i = s(53157),
        a = s(10847),
        d = s(22119),
        p = s(28609),
        m = s(77520),
        l = s(41311),
        u = s(90666);
      function c(e, t, s) {
        return (0, r.mG)(this, void 0, void 0, function* () {
          const n = !0 === (null == s ? void 0 : s.bNeverPopOut),
            i = !n && _(null, t),
            a =
              (null == s ? void 0 : s.bForcePopOut) &&
              (null == s ? void 0 : s.popupWidth) &&
              (null == s ? void 0 : s.popupHeight),
            d =
              i &&
              !a &&
              (yield (function (e, t, s) {
                return (0, r.mG)(this, void 0, void 0, function* () {
                  const r = t.document.createElement("div");
                  (r.style.position = "absolute"),
                    (r.style.visibility = "hidden"),
                    t.document.body.appendChild(r),
                    o.render(e, r),
                    yield s;
                  let n = document;
                  u.De.IN_STEAMUI && n.fonts && (yield n.fonts.ready);
                  const i = r.getBoundingClientRect(),
                    a = Math.ceil(i.height),
                    d = Math.ceil(i.width);
                  return (
                    o.unmountComponentAtNode(r),
                    t.document.body.removeChild(r),
                    { height: a, width: d }
                  );
                });
              })(e, t, null == s ? void 0 : s.promiseRenderComplete)),
            p =
              d &&
              d.height / t.innerHeight < 0.9 &&
              d.width / t.innerWidth < 0.8;
          if (n || (!(null == s ? void 0 : s.bForcePopOut) && p))
            return g(e, t);
          const m = {
              strTitle:
                (null == s ? void 0 : s.strTitle) ||
                (0, l.Xx)("#Dialog_DefaultWindowTitle"),
              fnOnClose: null == s ? void 0 : s.fnOnClose,
              popupWidth:
                (null == s ? void 0 : s.popupWidth) ||
                (null == d ? void 0 : d.width),
              popupHeight:
                (null == s ? void 0 : s.popupHeight) ||
                (null == d ? void 0 : d.height),
              bHideMainWindowForPopouts:
                null == s ? void 0 : s.bHideMainWindowForPopouts,
            },
            c = { bHideActions: null == s ? void 0 : s.bHideActionIcons };
          return g(
            e,
            t,
            m.strTitle,
            m,
            null == s ? void 0 : s.browserContext,
            c
          );
        });
      }
      function h(e, t, s) {
        return (0, r.mG)(this, void 0, void 0, function* () {
          return c(e, t, Object.assign({ bHideMainWindowForPopouts: !0 }, s));
        });
      }
      function g(e, t, s, r, o, i, a) {
        let p, m;
        const l = e.props.closeModal,
          u = () => {
            m && m.Close(),
              l && l(),
              (null == r ? void 0 : r.fnOnClose) && r.fnOnClose();
          },
          c = () => {
            p && p.Close(), u();
          },
          h = n.cloneElement(e, { closeModal: c });
        if (_((a = a || (0, d.BL)(t)), t) && r && s) {
          if (r.bHideMainWindowForPopouts) {
            const e = n.createElement(
              d.e1,
              {
                className: "Hidden",
                onEscKeypress: !h.props.bDisableBackgroundDismiss && c,
              },
              n.createElement("div", null)
            );
            m = a.ShowModal(e);
          }
          const e = Object.assign(Object.assign({}, r), { fnOnClose: u }),
            l = new w(t, s, e, h, o, i);
          l.Show(), (p = l);
        } else p = a.ShowModal(h);
        return p;
      }
      function _(e, t) {
        return (
          (e = e || (0, d.BL)(t || window)), u.De.USE_POPUPS && e.BUsePopups()
        );
      }
      class w extends i.K3 {
        constructor(e, t, s, r, n, o) {
          super(t, {
            title: s.strTitle,
            html_class: "client_chat_frame fullheight ModalDialogPopup",
            body_class: "fullheight ModalDialogBody",
            owner_window: void 0,
            replace_existing_popup: !0,
            target_browser: n,
            availscreenwidth: e.screen.availWidth,
            availscreenheight: e.screen.availHeight,
          }),
            (this.m_windowOpener = e),
            (this.m_modalProps = s),
            (this.m_modalElement = r),
            (this.m_options = o);
        }
        Update(e) {
          (0, m.X)(!1, "NYI");
        }
        UpdateParamsBeforeShow(e) {
          var t, s, r;
          let n,
            o,
            i,
            a = this.m_modalProps.popupWidth || 500,
            d = this.m_modalProps.popupHeight || 400;
          if (
            u.De.IN_CLIENT &&
            (null ===
              (r =
                null ===
                  (s =
                    null === (t = this.m_windowOpener) || void 0 === t
                      ? void 0
                      : t.SteamClient) || void 0 === s
                  ? void 0
                  : s.Window) || void 0 === r
              ? void 0
              : r.GetBrowserID)
          )
            i = this.m_windowOpener.SteamClient.Window.GetBrowserID();
          else {
            let e = this.m_windowOpener.screen;
            (n = (e.availWidth - a) / 2), (o = (e.availHeight - d) / 2);
            let t = e;
            void 0 !== t.availLeft &&
              void 0 !== t.availTop &&
              ((n += t.availLeft), (o += t.availTop));
          }
          return Object.assign(Object.assign({}, e), {
            dimensions: { width: a, height: d, left: n, top: o },
            window_opener_id: i,
          });
        }
        OnLoad() {}
        OnResize() {}
        OnClose() {
          this.m_modalProps.fnOnClose && this.m_modalProps.fnOnClose(),
            o.unmountComponentAtNode(this.m_element);
        }
        Render(e, t) {
          if (
            (t.setAttribute("class", "fullheight popup_chat_frame"),
            this.m_modalElement)
          ) {
            const s = this.m_options ? this.m_options.bHideActions : void 0,
              r =
                this.m_options &&
                "number" == typeof this.m_options.nDragAreaHeight
                  ? { height: this.m_options.nDragAreaHeight }
                  : void 0;
            o.render(
              n.createElement(
                "div",
                { className: "PopupFullWindow", onContextMenu: a.T },
                n.createElement(p.T, {
                  hideMinMax: !0,
                  popup: e,
                  hideActions: s,
                  style: r,
                }),
                n.createElement(d.t9, { ModalManager: (0, d.BL)(e) }),
                this.m_modalElement
              ),
              t
            );
          }
        }
      }
    },
  },
]);
