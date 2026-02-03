(self.webpackChunkappmgmt_storeadmin =
  self.webpackChunkappmgmt_storeadmin || []).push([
  [4160],
  {
    chunkid: (module) => {
      module.exports = {
        _: "_2LxgdMcpWJRjkxZKbmeEEb",
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
    chunkid: (module, module_exports, __webpack_require__) => {
      "use strict";
      __webpack_require__._(module_exports, {
        _: () => _,
        _: () => _,
        _: () => _,
        _: () => _,
        _: () => _,
        _: () => _,
        _: () => _,
        _: () => _,
      });
      var _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid");
      const _ = "pn";
      class _ {
        m_rgPackageIDs;
        m_rgPackageData;
        m_mapPackageData;
        m_rgVisiblePackageIDs = [];
        m_visiblePackageIDsCallbackList = new _._();
        static s_Singleton;
        static Get() {
          return (
            _.s_Singleton || ((_.s_Singleton = new _()), _.s_Singleton.Init()),
            _.s_Singleton
          );
        }
        constructor() {
          "dev" == _._.WEB_UNIVERSE && (window.g_PackageGridStore = this);
        }
        Init() {
          let _ = (0, _._)("package_data", "application_config");
          _
            ? ((this.m_rgPackageIDs = _.map((_) => _.packageid)),
              (this.m_rgPackageData = _),
              (this.m_mapPackageData = new Map(_.map((_) => [_.packageid, _]))))
            : ((this.m_rgPackageIDs = (0, _._)(
                "package_ids",
                "application_config",
              )),
              (this.m_mapPackageData = new Map())),
            ("dev" != _._.WEB_UNIVERSE && "beta" != _._.WEB_UNIVERSE) ||
              console.log(
                "DEV_DEBUG: CPackageGridStore loading payload: ",
                this.m_rgPackageIDs,
              ),
            "dev" != _._.WEB_UNIVERSE ||
              Array.isArray(this.m_rgPackageIDs) ||
              console.error("CPackageGridStore Invalid payload");
        }
        UpdatePackageNameSearchState(_) {
          const _ = _.getState().columnFilters.find(
              (_) => "packageName" === _._,
            )?.value,
            _ = new URL(window.location.href);
          _ != decodeURIComponent(_.searchParams.get(_)) &&
            (_
              ? _.searchParams.set(_, encodeURIComponent(_))
              : _.searchParams.delete(_),
            window.history.replaceState(
              {},
              "",
              __webpack_require__.toString(),
            ));
        }
        UpdateVisiblePackageList(_) {
          const _ = _.getVisibleRows().filter((_) => !_.getCanExpand());
          (this.m_rgVisiblePackageIDs = []),
            _.forEach((_) =>
              this.m_rgVisiblePackageIDs.push(_.original.packageID),
            ),
            this.m_visiblePackageIDsCallbackList.Dispatch(
              this.m_rgVisiblePackageIDs,
            ),
            this.UpdatePackageNameSearchState(_);
        }
      }
      function _() {
        return _.Get().m_rgPackageIDs;
      }
      function _() {
        return _.Get().m_rgPackageIDs;
      }
      function _() {
        return _.Get().m_rgPackageData;
      }
      function _(_) {
        let _ = _.Get().m_mapPackageData.get(_);
        return _ ? _.package_name : _.toString();
      }
      function _() {
        return _.useCallback((_) => _.Get().UpdateVisiblePackageList(_), []);
      }
      function _() {
        const [_, _] = _.useState(_.Get().m_rgVisiblePackageIDs);
        return (0, _._)(_.Get().m_visiblePackageIDsCallbackList, _), _;
      }
      function _() {
        return _.useMemo(
          () => (0, _._)("publisherid", "application_config"),
          [],
        );
      }
    },
    chunkid: (module, module_exports, __webpack_require__) => {
      "use strict";
      __webpack_require__._(module_exports, {
        _: () => _,
        _: () => _,
        _: () => _,
        _: () => _,
        _: () => _,
        _: () => _,
        _: () => _,
        _: () => _,
        _: () => _,
        _: () => _,
        _: () => _,
        _: () => _,
        _: () => _,
        _: () => _,
        _: () => _,
        _: () => _,
        _: () => _,
        _: () => _,
        _: () => _,
        _: () => _,
        _: () => _,
        _: () => _,
        _: () => _,
        _: () => _,
        _: () => _,
        _: () => _,
        _: () => _,
        _: () => _,
        _: () => _,
        _: () => _,
        _: () => _,
      });
      var _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__._(_),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid");
      class _ {
        m_mapPackagePrice = new Map();
        m_setRecurringSubscriptions = new Set();
        m_mapPriceProposals = new Map();
        m_mapLocalPackagePriceOverrides = new Map();
        m_mapPriceGridCellCallbackList = new Map();
        m_mapPackageOverridesCallbackList = new Map();
        m_allPriceOverridesCallbackList = new _._();
        m_mapOverridesPerPriceKey = new Map();
        m_mapCurrencyData = new Map();
        m_mapPriceKeyDescriptions = new Map();
        m_rgKnownPriceKeys;
        m_mapPriceGuidelines = new Map();
        m_rgPriceLevels = [];
        m_strDisplayPriceKey = "USD";
        m_displayPriceKeyCallbackList = new _._();
        static s_Singleton;
        static Get() {
          return (
            _.s_Singleton || ((_.s_Singleton = new _()), _.s_Singleton.Init()),
            _.s_Singleton
          );
        }
        constructor() {
          (0, _._)(this),
            "dev" == _._.WEB_UNIVERSE && (window.g_PackagePricingStore = this);
        }
        Init() {
          const _ = new Set(),
            _ = (0, _._)("base_prices", "application_config");
          if (
            (("dev" != _._.WEB_UNIVERSE && "beta" != _._.WEB_UNIVERSE) ||
              console.log(
                "DEV_DEBUG: CPackagePricingStore loading base price payload: ",
                _,
              ),
            _)
          )
            if (this.BIsPricePayloadValid(_))
              for (let _ in _) {
                const _ = _[_],
                  _ = parseInt(_),
                  _ = new Map();
                this.m_mapPackagePrice.set(_, _);
                for (let _ in _) _.add(_.toUpperCase()), _.set(_, _[_]);
              }
            else
              "dev" == _._.WEB_UNIVERSE &&
                console.error("Invalid base price payload");
          const _ = (0, _._)("recurring_subs", "application_config");
          if (
            (("dev" != _._.WEB_UNIVERSE && "beta" != _._.WEB_UNIVERSE) ||
              console.log(
                "DEV_DEBUG: CPackagePricingStore loading recurring subscriptions payload: ",
                _,
              ),
            _)
          )
            if (Array.isArray(_))
              for (const _ of _) this.m_setRecurringSubscriptions.add(_);
            else
              "dev" == _._.WEB_UNIVERSE &&
                console.error("Invalid recurring subscriptions payload");
          const _ = (0, _._)("pending_proposals", "application_config");
          if (
            (("dev" != _._.WEB_UNIVERSE && "beta" != _._.WEB_UNIVERSE) ||
              console.log(
                "DEV_DEBUG: CPackagePricingStore loading pending price proposal payload: ",
                _,
              ),
            _)
          )
            if (this.BIsPendingPricePayloadValid(_))
              for (let _ in _) {
                const _ = _[_],
                  _ = parseInt(_);
                this.m_mapPriceProposals.set(_, _);
              }
            else
              "dev" == _._.WEB_UNIVERSE &&
                console.error("Invalid pending price proposal payload");
          const _ = (0, _._)("pricing_guidelines", "application_config");
          if (
            (("dev" != _._.WEB_UNIVERSE && "beta" != _._.WEB_UNIVERSE) ||
              console.log(
                "DEV_DEBUG: CPackagePricingStore loading pricing guidelines payload: ",
                _,
              ),
            _)
          )
            if (this.BIsGuidelinesPayloadValid(_)) {
              for (let _ in _) {
                const _ = _[_],
                  _ = new Map(),
                  _ = 100 * parseInt(_.substring(3));
                this.m_rgPriceLevels.push(_),
                  this.m_mapPriceGuidelines.set(_, _);
                for (let _ in _)
                  _.add(_.toUpperCase()),
                    _.set(_.toUpperCase(), parseInt(_[_]));
              }
              this.m_rgPriceLevels.sort((_, _) => _ - _);
            } else
              "dev" == _._.WEB_UNIVERSE &&
                console.error("Invalid pricing guidelines payload");
          this.m_rgKnownPriceKeys = Array.from(_).sort((_, _) =>
            (0, _._)(_(_), _(_)),
          );
          const _ = (0, _._)("currency_data", "application_config");
          if (
            (("dev" != _._.WEB_UNIVERSE && "beta" != _._.WEB_UNIVERSE) ||
              console.log(
                "DEV_DEBUG: CPackagePricingStore loading currency payload: ",
                _,
              ),
            _)
          )
            if (this.BIsCurrencyPayloadValid(_))
              for (let _ in _) {
                const _ = _[_];
                this.m_mapCurrencyData.set(_, _);
              }
            else
              "dev" == _._.WEB_UNIVERSE &&
                console.error("Invalid currency payload");
          const _ = (0, _._)("currency_descriptions", "application_config");
          if (
            (("dev" != _._.WEB_UNIVERSE && "beta" != _._.WEB_UNIVERSE) ||
              console.log(
                "DEV_DEBUG: CPackagePricingStore loading currency descriptions: ",
                _,
              ),
            _)
          )
            if (this.BIsCurrencyDescriptionPayloadValid(_))
              for (let _ in _) {
                const _ = _[_];
                this.m_mapPriceKeyDescriptions.set(_, _);
              }
            else
              "dev" == _._.WEB_UNIVERSE &&
                console.error("Invalid currency description payload");
        }
        BIsPricePayloadValid(_) {
          const _ = _;
          if (!_ || "object" != typeof _) return !1;
          for (let _ in _) {
            if (isNaN(parseInt(_))) return !1;
            const _ = _[_];
            if (!_ || "object" != typeof _) return !1;
            for (let _ in _)
              if ("string" != typeof _ || "number" != typeof _[_]) return !1;
          }
          return !0;
        }
        BIsPendingPricePayloadValid(_) {
          const _ = _;
          if (!_ || "object" != typeof _) return !1;
          for (let _ in _) {
            if (isNaN(parseInt(_))) return !1;
            const _ = _[_];
            if (
              !_ ||
              "object" != typeof _ ||
              _.packageID !== parseInt(_) ||
              "object" != typeof _.prices
            )
              return !1;
          }
          return !0;
        }
        BIsGuidelinesPayloadValid(_) {
          const _ = _;
          if (!_ || "object" != typeof _) return !1;
          for (let _ in _) {
            const _ = _[_];
            if (!_ || "object" != typeof _) return !1;
            for (let _ in _)
              if ("string" != typeof _ || isNaN(parseInt(_[_]))) return !1;
          }
          return !0;
        }
        BIsCurrencyPayloadValid(_) {
          const _ = _;
          if (!_ || "object" != typeof _) return !1;
          for (let _ in _) {
            const _ = _[_];
            if (!_ || "object" != typeof _ || _.strCode != _) return !1;
          }
          return !0;
        }
        BIsCurrencyDescriptionPayloadValid(_) {
          const _ = _;
          if (!_ || "object" != typeof _) return !1;
          for (let _ in _) {
            const _ = _[_];
            if (
              !_ ||
              "object" != typeof _ ||
              void 0 === _.bRequired ||
              void 0 === _.strDescription
            )
              return !1;
          }
          return !0;
        }
        BPriceKeyRequired(_) {
          return this.m_mapPriceKeyDescriptions.get(_)?.bRequired ?? !1;
        }
        GetMinimumBasePrice(_) {
          return this.m_mapPriceKeyDescriptions.get(_)?.nLowestBase || 0;
        }
        GetMinimumDiscountPrice(_) {
          return this.m_mapPriceKeyDescriptions.get(_)?.nLowestDiscount || 0;
        }
        GetPublishedPrice(_, _) {
          return this.m_mapPackagePrice.get(_)?.get(_);
        }
        GetProposedPrice(_, _) {
          return this.m_mapPriceProposals.get(_)?.prices[_];
        }
        GetSavedPrice(_, _) {
          return this.GetProposedPrice(_, _) ?? this.GetPublishedPrice(_, _);
        }
        GetPrice(_, _) {
          return (
            this.m_mapLocalPackagePriceOverrides.get(_)?.get(_) ??
            this.GetSavedPrice(_, _)
          );
        }
        GetPriceGridCellCallbackList(_, _) {
          if (!_ || !_) return null;
          this.m_mapPriceGridCellCallbackList.has(_) ||
            this.m_mapPriceGridCellCallbackList.set(_, new Map());
          const _ = this.m_mapPriceGridCellCallbackList.get(_);
          return (
            __webpack_require__.has(_) || __webpack_require__.set(_, new _._()),
            __webpack_require__.get(_)
          );
        }
        GetPackageOverridesCallbackList(_) {
          if (!_) return null;
          let _ = this.m_mapPackageOverridesCallbackList.get(_);
          return (
            _ ||
              ((_ = new _._()),
              this.m_mapPackageOverridesCallbackList.set(_, _)),
            _
          );
        }
        OverridePrice(_, _, _) {
          _ != this.GetPrice(_, _) &&
            (this.m_mapLocalPackagePriceOverrides.has(_) ||
              this.m_mapLocalPackagePriceOverrides.set(_, new Map()),
            _ == this.GetSavedPrice(_, _)
              ? this.m_mapLocalPackagePriceOverrides.get(_).delete(_)
              : this.m_mapLocalPackagePriceOverrides.get(_).set(_, _),
            this.GetPriceGridCellCallbackList(_, _).Dispatch(_),
            this.GetPackageOverridesCallbackList(_).Dispatch(),
            this.DispatchPriceOverridesCallbacks());
        }
        OverridePricesForPackage(_, _, _, _) {
          (0, _._)(
            _.length == _.length,
            `price list size doesn't match ${_.length} != ${_.length}`,
          );
          for (let _ = 0; _ < _.length; ++_) {
            const _ = _[_],
              _ = _[_];
            this.m_mapLocalPackagePriceOverrides.has(_) ||
              this.m_mapLocalPackagePriceOverrides.set(_, new Map()),
              _ == this.GetSavedPrice(_, _)
                ? this.m_mapLocalPackagePriceOverrides.get(_).delete(_)
                : this.m_mapLocalPackagePriceOverrides.get(_).set(_, _),
              this.GetPriceGridCellCallbackList(_, _).Dispatch(_);
          }
          this.GetPackageOverridesCallbackList(_).Dispatch(),
            _ && this.DispatchPriceOverridesCallbacks();
        }
        DispatchPriceOverridesCallbacks() {
          this.m_allPriceOverridesCallbackList.Dispatch(
            this.GetAllLocalPriceOverrides(),
          ),
            this.UpdateOverridesPerPriceKey();
        }
        BHasLocalPriceOverrides(_) {
          return this.m_mapLocalPackagePriceOverrides.get(_)?.size > 0;
        }
        GetAllLocalPriceOverrides() {
          const _ = [];
          return (
            this.m_mapLocalPackagePriceOverrides.forEach((_, _) =>
              _.forEach((_, _) => {
                const _ = this.GetSavedPrice(_, _);
                _.push({
                  packageID: _,
                  strPriceKey: _,
                  nPriceInCents: _,
                  nOldPriceInCents: _,
                });
              }),
            ),
            _.sort(_),
            _
          );
        }
        BHasLocalPriceOverride(_, _) {
          let _ = this.m_mapLocalPackagePriceOverrides.get(_);
          return !!_ && __webpack_require__.has(_);
        }
        UpdateOverridesPerPriceKey() {
          this.m_mapOverridesPerPriceKey.clear(),
            this.m_mapLocalPackagePriceOverrides.forEach((_, _) => {
              _.forEach((_, _) => {
                let _ = this.m_mapOverridesPerPriceKey.get(_);
                _ || (_ = 0), _++, this.m_mapOverridesPerPriceKey.set(_, _);
              });
            });
        }
        DiscardAllLocalPriceOverrides() {
          const _ = this.GetAllLocalPriceOverrides();
          this.m_mapLocalPackagePriceOverrides.clear();
          let _ = new Set();
          for (const _ of _) {
            const { packageID: _, strPriceKey: _ } = _;
            this.GetPriceGridCellCallbackList(_, _).Dispatch(
              this.GetPrice(_, _),
            ),
              _.add(_);
          }
          for (const _ of _) this.GetPackageOverridesCallbackList(_).Dispatch();
          this.DispatchPriceOverridesCallbacks();
        }
        DiscardAllLocalPriceOverridesForKey(_) {
          let _ = !1,
            _ = new Set();
          this.m_mapLocalPackagePriceOverrides.forEach((_, _) => {
            this.m_mapPriceKeyDescriptions.has(_) &&
              ((_ = !0),
              this.m_mapLocalPackagePriceOverrides.get(_).delete(_),
              this.GetPriceGridCellCallbackList(_, _).Dispatch(
                this.GetPrice(_, _),
              ),
              __webpack_require__.add(_));
          });
          for (const _ of _) this.GetPackageOverridesCallbackList(_).Dispatch();
          _ && this.DispatchPriceOverridesCallbacks();
        }
        DiscardLocalPriceOverridesForPackage(_) {
          this.m_mapLocalPackagePriceOverrides.get(_)?.forEach((_, _) => {
            this.GetPriceGridCellCallbackList(_, _).Dispatch(
              this.GetSavedPrice(_, _),
            );
          }),
            this.m_mapLocalPackagePriceOverrides.delete(_),
            this.GetPackageOverridesCallbackList(_).Dispatch(),
            this.DispatchPriceOverridesCallbacks();
        }
        BuildNewPricingProposal(_, _) {
          const _ = {
            packageID: _,
            rtSubmitted: Math.floor(Date.now() / 1e3),
            submitterID: _._.accountid,
            prices: {},
            eState: 1,
            bPartnerWillPublish: _,
          };
          for (const _ of this.m_rgKnownPriceKeys)
            _.prices[_] = this.GetPrice(_, _);
          return _;
        }
        async SubmitProposalToServer(_, _, _) {
          const _ = this.BuildNewPricingProposal(_, _),
            _ = JSON.stringify(_.prices),
            _ = (0, _._)("publisherid", "application_config"),
            _ =
              _._.PARTNER_BASE_URL +
              "pricing/ajaxsubmitproposal/" +
              _ +
              "/" +
              _,
            _ = new FormData();
          _.append("sessionid", _._.SESSIONID),
            _.append("partner_will_publish", _ ? "1" : "0"),
            _.append("prices", _);
          let _ = null;
          try {
            const _ = await _().post(_, _, {
              withCredentials: !0,
              cancelToken: _?.token,
            });
            if (
              200 == _?.status &&
              1 == _.data?.success &&
              0 != _.data.eState
            ) {
              if (3 == _.data.eState) {
                this.m_mapPriceProposals.delete(_);
                for (const _ of this.m_rgKnownPriceKeys)
                  this.m_mapPackagePrice.get(_).set(_, _.prices[_]);
              } else
                (_.eState = _.data.eState),
                  (_.proposalKey = _.data.proposalKey),
                  this.m_mapPriceProposals.set(_, _);
              return this.DiscardLocalPriceOverridesForPackage(_), _.data;
            }
          } catch (_) {
            _ = _;
          }
          const _ = (0, _._)(_);
          return (
            console.error(
              "CPackagePricingStore.SubmitProposalToServer: failed",
              _.strErrorMsg,
              _,
            ),
            _?.response?.data ?? {
              success: 2,
            }
          );
        }
        async PublishApprovedProposal(_, _, __webpack_require__ = 0) {
          const _ = this.m_mapPriceProposals.get(_);
          if (4 != _?.eState || !_?.proposalKey)
            return {
              success: 8,
            };
          const _ = (0, _._)("publisherid", "application_config"),
            _ =
              _._.PARTNER_BASE_URL +
              "pricing/ajaxpublishproposal/" +
              _ +
              "/" +
              _,
            _ = new FormData();
          _.append("sessionid", _._.SESSIONID),
            _.append("proposal_key", _.proposalKey);
          let _ = null;
          try {
            const _ = await _().post(_, _, {
              withCredentials: !0,
              cancelToken: _?.token,
              timeout: __webpack_require__,
            });
            if (200 == _?.status && 1 == _.data?.success) {
              this.m_mapPriceProposals.delete(_);
              for (const _ of this.m_rgKnownPriceKeys)
                this.m_mapPackagePrice.get(_).set(_, _.prices[_]),
                  this.GetPriceGridCellCallbackList(_, _).Dispatch(
                    this.GetSavedPrice(_, _),
                  );
              return (
                this.GetPackageOverridesCallbackList(_).Dispatch(),
                this.DispatchPriceOverridesCallbacks(),
                _.data
              );
            }
          } catch (_) {
            _ = _;
          }
          const _ = (0, _._)(_);
          return (
            console.error(
              "CPackagePricingStore.PublishApprovedProposal: failed",
              _.strErrorMsg,
              _,
            ),
            _?.response?.data ?? {
              success: 2,
            }
          );
        }
        async CancelProposal(_, _) {
          const _ = this.m_mapPriceProposals.get(_);
          if (!_?.proposalKey)
            return {
              success: 8,
            };
          const _ = (0, _._)("publisherid", "application_config"),
            _ =
              _._.PARTNER_BASE_URL +
              "pricing/ajaxcancelproposal/" +
              _ +
              "/" +
              _,
            _ = new FormData();
          _.append("sessionid", _._.SESSIONID),
            _.append("proposal_key", _.proposalKey);
          let _ = null;
          try {
            const _ = await _().post(_, _, {
              withCredentials: !0,
              cancelToken: _?.token,
            });
            if (200 == _?.status && 1 == _.data?.success) {
              this.m_mapPriceProposals.delete(_);
              for (const _ of this.m_rgKnownPriceKeys)
                this.GetPriceGridCellCallbackList(_, _).Dispatch(
                  this.GetSavedPrice(_, _),
                );
              return (
                this.GetPackageOverridesCallbackList(_).Dispatch(),
                this.DispatchPriceOverridesCallbacks(),
                _.data
              );
            }
          } catch (_) {
            _ = _;
          }
          const _ = (0, _._)(_);
          return (
            console.error(
              "CPackagePricingStore.CancelProposal: failed",
              _.strErrorMsg,
              _,
            ),
            _?.response?.data ?? {
              success: 2,
            }
          );
        }
        GetLocalOverrideCountForPriceKey(_) {
          return this.m_mapOverridesPerPriceKey.get(_) ?? 0;
        }
        BAnyPackagePriceBelowMin(_) {
          if (!_) return !1;
          for (let _ of this.m_rgKnownPriceKeys) {
            let _ = this.GetPrice(_, _);
            if (void 0 === _) continue;
            let { nMinPriceInCents: _, nMaxPriceInCents: _ } = _(_, _);
            if (_ < _) return !0;
          }
          return !1;
        }
      }
      function _(_, _) {
        if (_.strPriceKey == _.strPriceKey) {
          const _ = (0, _._)(_.packageID),
            _ = (0, _._)(_.packageID);
          return (0, _._)(_, _);
        }
        return (0, _._)(_(_.strPriceKey), _(_.strPriceKey));
      }
      function _(_) {
        const _ = _.split("_")[0];
        return _.Get().m_mapCurrencyData.get(_);
      }
      function _(_, _) {
        if (void 0 === _) return ["", "", ""];
        const _ = _(_) ?? _("USD");
        let _ = "";
        if ("number" == typeof _) {
          let _ = _.toString();
          _.length < 3 && (_ = (1 == _.length ? "0" : "") + "0" + _);
          const _ = _.length - 2;
          for (let _ = 0; _ < _; _++) {
            const _ = _.charAt(_);
            (_ += _),
              _ < _ - 1 &&
                (_ - _ - 1) % 3 == 0 &&
                "-" != _ &&
                (_ += _.strThousandsSeparator);
          }
          _.bWholeUnitsOnly ||
            ((_ += _.strDecimalSymbol), (_ += _.substr(_.length - 2)));
        }
        return _.bSymbolIsPrefix
          ? [_.strSymbol + _.strSymbolAndNumberSeparator, _, ""]
          : ["", _, _.strSymbolAndNumberSeparator + _.strSymbol];
      }
      (0, _._)([_._], _.prototype, "m_mapOverridesPerPriceKey", void 0),
        (0, _._)([_._], _.prototype, "UpdateOverridesPerPriceKey", null);
      const _ = new Map([
        ["USD", "@1"],
        ["CNY", "@2"],
        ["EUR", "@3"],
        ["GBP", "@4"],
        ["CAD", "@5"],
        ["AUD", "@6"],
        ["JPY", "@7"],
        ["KRW", "@8"],
        ["RUB", "@9"],
      ]);
      function _(_) {
        return _.has(_) ? _.get(_) : _.indexOf("_") > 0 ? "ZZZ" + _ : _;
      }
      function _(_, _) {
        return _.Get().GetPrice(_, _);
      }
      function _(_) {
        const _ = _.Get().m_strDisplayPriceKey;
        return _(_.Get().GetPrice(_, _), _).join("");
      }
      function _(_) {
        const [_, __webpack_require__] = _.useState(
          _.Get().m_strDisplayPriceKey,
        );
        return (
          (0, _._)(_.Get().m_displayPriceKeyCallbackList, __webpack_require__),
          (function (_, _) {
            const [__webpack_require__, _] = _.useState(_.Get().GetPrice(_, _));
            return (
              (0, _._)(_.Get().GetPriceGridCellCallbackList(_, _), _),
              _.useEffect(() => _(_.Get().GetPrice(_, _)), [_, _]),
              _(__webpack_require__, _).join("")
            );
          })(_, _)
        );
      }
      function _(_, _) {
        const _ = _.Get().GetPrice(_, "USD");
        let _ = null;
        for (let _ of _.Get().m_rgPriceLevels)
          if (_ > _) {
            _ = _;
            break;
          }
        if ("USD" == _ || !_)
          return {
            nSuggestedPriceInCents: null,
            nGuidelinesLevel: null,
          };
        let _ = _.Get().m_mapPriceGuidelines.get(_).get(_);
        const _ = _.Get().m_mapPriceGuidelines.get(_).get("USD");
        if (_ != _) {
          const _ = _ / _;
          (_ *= _), (_ = Math.ceil(_ * _));
        }
        return {
          nSuggestedPriceInCents: _,
          nGuidelinesLevel: _,
        };
      }
      function _() {
        const _ = (0, _._)();
        return _.useCallback(
          () =>
            (function (_) {
              let _ = 0;
              for (const _ of _) {
                const _ = new Array(),
                  _ = new Array(),
                  _ = _.Get().GetPrice(_, "USD");
                if (_ && !(_ <= 0)) {
                  for (const _ of _.Get().m_rgKnownPriceKeys) {
                    if ("USD" == _) continue;
                    const { nSuggestedPriceInCents: _, nGuidelinesLevel: _ } =
                      _(_, _);
                    null !== _ &&
                      _.Get().GetPrice(_, _) != _ &&
                      (_.push(_), _.push(_));
                  }
                  _.length > 0 &&
                    (_.Get().OverridePricesForPackage(_, _, _), (_ += 1));
                }
              }
              _ > 0 && _.Get().DispatchPriceOverridesCallbacks();
            })(_),
          [_],
        );
      }
      function _(_, _) {
        const _ = (0, _._)();
        (0, _._)(_.Get().GetPriceGridCellCallbackList(_, _), _);
        const _ = _.Get().GetPrice(_, _);
        (0, _._)(_.Get().GetPriceGridCellCallbackList(_, "USD"), _);
        const { nSuggestedPriceInCents: _, nGuidelinesLevel: _ } = _(_, _),
          _ = _.useCallback((_) => _.Get().OverridePrice(_, _, _), [_, _]),
          _ = _.Get().GetPublishedPrice(_, _),
          _ = _.Get().GetProposedPrice(_, _),
          { nMinPriceInCents: _, nMaxPriceInCents: _ } = _(_, _),
          _ = _.Get().GetMinimumDiscountPrice(_),
          _ = _ ? Math.floor((100 * (_ - _)) / _) : 90,
          _ = _ < Math.min(90, Math.floor((100 * (_ - 50)) / _)) ? _ : null;
        return _.useMemo(
          () => ({
            nPriceInCents: _,
            nProposedPriceInCents: _,
            nPublishedPriceInCents: _,
            nMinPriceInCents: _,
            nMaxPriceInCents: _,
            nMaxDiscountPercentage: _,
            nSuggestedPriceInCents: _,
            fnSetPrice: _,
          }),
          [_, _, _, _, _, _, _, _],
        );
      }
      function _(_) {
        let [_, __webpack_require__] = _.useState(() =>
            _.Get().BAnyPackagePriceBelowMin(_),
          ),
          _ = _.useCallback(() => {
            let _ = _.Get().BAnyPackagePriceBelowMin(_);
            __webpack_require__(_);
          }, [_, __webpack_require__]);
        return (0, _._)(_.Get().GetPackageOverridesCallbackList(_), _), _;
      }
      function _(_) {
        return _.Get().BAnyPackagePriceBelowMin(_);
      }
      function _(_, _) {
        let _ = _.Get();
        return {
          nMinPriceInCents: __webpack_require__.GetMinimumBasePrice(_),
          nMaxPriceInCents: _.m_setRecurringSubscriptions.has(_)
            ? __webpack_require__.GetPublishedPrice(_, _)
            : null,
        };
      }
      function _() {
        return _.useCallback((_, _, _) => {
          const _ = _.Get().GetPrice(_, _);
          return (
            _.Get().OverridePrice(_, _, _),
            _ == _
              ? null
              : {
                  packageID: _,
                  strPriceKey: _,
                  nPriceInCents: _,
                  nOldPriceInCents: _,
                }
          );
        }, []);
      }
      function _(_) {
        return _.Get().m_mapPriceProposals.get(_);
      }
      function _() {
        return Array.from(_.Get().m_mapPriceProposals.values());
      }
      function _(_) {
        return _.Get().m_mapPriceProposals.get(_);
      }
      function _(_) {
        let _ = !1;
        for (const _ of _.Get().m_rgKnownPriceKeys) {
          let _ = _.Get().GetPublishedPrice(_, _);
          _ = _ || (0 != _ && void 0 !== _);
        }
        return _;
      }
      function _(_) {
        const _ = _(_),
          _ = [];
        for (const _ of _.Get().m_rgKnownPriceKeys) {
          const _ = _.prices[_],
            _ = _.Get().GetPublishedPrice(_, _);
          _ != _ &&
            __webpack_require__.push({
              packageID: _,
              strPriceKey: _,
              nPriceInCents: _,
              nOldPriceInCents: _,
            });
        }
        return _;
      }
      function _() {
        return _.Get().m_rgKnownPriceKeys;
      }
      function _(_) {
        let _ = _.Get().m_mapPriceKeyDescriptions.get(_);
        return _ ? _.strDescription : "";
      }
      function _(_) {
        return _.useCallback(() => {
          _.Get().DiscardAllLocalPriceOverridesForKey(_);
        }, [_]);
      }
      function _(_) {
        return _.useCallback(() => {
          _.Get().DiscardLocalPriceOverridesForPackage(_);
        }, [_]);
      }
      function _(_) {
        return _.useCallback(() => {
          _.Get().CancelProposal(_);
        }, [_]);
      }
      function _() {
        const [_, _] = _.useState(_.Get().m_strDisplayPriceKey),
          _ = _.Get().m_rgKnownPriceKeys,
          _ = _.useCallback((_) => {
            _(_),
              (_.Get().m_strDisplayPriceKey = _),
              _.Get().m_displayPriceKeyCallbackList.Dispatch(_);
          }, []);
        return {
          strPriceKey: _,
          rgSupportedPriceKeys: _,
          fnSetPriceKey: _,
        };
      }
      function _(_) {
        const _ = (0, _._)();
        return (
          (0, _._)(_.Get().m_allPriceOverridesCallbackList, _),
          _.Get().BHasLocalPriceOverrides(_)
        );
      }
      function _(_) {
        return _.Get().BHasLocalPriceOverrides(_);
      }
      function _() {
        const [_, _] = _.useState(() => _.Get().GetAllLocalPriceOverrides());
        return (0, _._)(_.Get().m_allPriceOverridesCallbackList, _), _;
      }
      function _(_) {
        return (0, _._)(() => _.Get().GetLocalOverrideCountForPriceKey(_));
      }
      function _() {
        return _.useCallback(
          () => _.Get().GetAllLocalPriceOverrides()?.length > 0,
          [],
        );
      }
      function _() {
        return _.useCallback(() => _.Get().DiscardAllLocalPriceOverrides(), []);
      }
      function _() {
        const _ = [],
          _ = _.useRef(new Map());
        _.Get().m_mapPriceGuidelines.forEach((_, _) => {
          const _ = __webpack_require__.get("USD");
          _.push(_), _.current.set(_, _);
        }),
          _.sort((_, _) => _ - _);
        const _ = _.useCallback((_, _) => {
          const _ = _.current.get(_);
          _.Get()
            .m_mapPriceGuidelines.get(_)
            .forEach((_, _) => _.Get().OverridePrice(_, _, _));
        }, []);
        return {
          rgUSDPricesInCents: _,
          fnApplyGuidelines: _,
        };
      }
      function _() {
        return _.useCallback(
          (_, _, _) => _.Get().SubmitProposalToServer(_, _, _),
          [],
        );
      }
      function _() {
        return _.useCallback(
          (_, _) => _.Get().PublishApprovedProposal(_, _, 6e4),
          [],
        );
      }
      function _(_) {
        let _ = [];
        const _ = _.Get().m_rgKnownPriceKeys;
        for (let _ of _) {
          if (_(_)) continue;
          let _ = !1;
          for (const _ of _) {
            if (!_.Get().BPriceKeyRequired(_)) continue;
            if (!_.Get().GetPrice(_, _)) {
              _ = !0;
              break;
            }
          }
          _ && _.push(_);
        }
        return _;
      }
    },
    chunkid: (module, module_exports, __webpack_require__) => {
      "use strict";
      __webpack_require__._(module_exports, {
        _: () => _,
        _: () => _,
      });
      var _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid");
      function _(_, _) {
        const _ = (0, _._)("#PackageGrid_MultipleBaseGamesFoundForPackage"),
          _ = (0, _._)("#PackageGrid_NoBaseGameFoundForPackage"),
          _ = _.original.appName,
          _ = _.original.appName,
          _ = _ == _,
          _ = _ == _,
          _ = !_ && !_,
          _ = _ == _,
          _ = _ == _,
          _ = !_ && !_;
        if (_ && _) return _.localeCompare(_);
        if (_ || _) return _ ? -1 : 1;
        if (_ == _ && _ == _) {
          const _ = _.original.packageName,
            _ = _.original.packageName;
          return _ && _
            ? __webpack_require__.localeCompare(_)
            : _ || _
              ? _
                ? -1
                : 1
              : _.original.packageID - _.original.packageID;
        }
        return _ ? -1 : 1;
      }
      const _ = (_) => _.nextElementSibling,
        _ = (_) => _.previousElementSibling,
        _ = (_, _) => {
          const _ = _.getAttribute("data-table-column-id"),
            _ = _.parentElement;
          let _ = _ && _(_);
          for (; _ && _; ) {
            for (const _ of Array.from(_.children))
              if (_ == _.getAttribute("data-table-column-id")) return _;
            _ = _(_);
          }
          return null;
        },
        _ = new Map([
          [38, (_) => _(_, _)],
          [39, _],
          [40, (_) => _(_, _)],
          [37, _],
          [9, (_) => _(_, _)],
          [13, (_) => _(_, _)],
        ]);
      function _(_) {
        const _ = Array.prototype.slice.call(_.children).reverse();
        for (; _.length > 0; ) {
          const _ = _.pop();
          if ("input" === _.tagName.toLowerCase()) return _;
          _.push(...Array.prototype.slice.call(_.children).reverse());
        }
        return null;
      }
      function _(_) {
        let _ = _.get(_.keyCode);
        if ((9 === _.keyCode && _.shiftKey && (_ = (_) => _(_, _)), !_)) return;
        var _;
        let _ = _(
          ((_ = _.currentTarget),
          (0, _._)(_, (_) => null != _.getAttribute("data-table-column-id"))),
        );
        for (; _; ) {
          const _ = _(_);
          if (_) return __webpack_require__.focus(), void _.preventDefault();
          _ = _(_);
        }
      }
    },
    chunkid: (module, module_exports, __webpack_require__) => {
      "use strict";
      __webpack_require__._(module_exports, {
        _: () => _,
        _: () => _,
      });
      const _ = "America/Los_Angeles";
      function _(_) {
        const _ = __webpack_require__("chunkid").unix(_)._(_);
        return (
          _.seconds(0),
          _.minutes(0),
          _.hours(10),
          _.unix() < _ && _.hours(34),
          _.unix()
        );
      }
    },
  },
]);
