(self.webpackChunkappmgmt_storeadmin =
  self.webpackChunkappmgmt_storeadmin || []).push([
  [9246],
  {
    chunkid: (module) => {
      module.exports = {
        Button: "_0BH1ydyFmSnUvoVK2hIc",
        "Size-1": "_3QKUrmKA1DptBhihc8GSAF",
        Icon: "_2_fy3SzcKa1xbrgpG7JsW1",
        "Size-2": "_2rbqjlRz2ShvIiYodebfc2",
        "Size-3": "_2WV0DrM2sIAtg0N1lOU26f",
        "Variant-basic": "AjHMNGqS56A5oRpfyYhEz",
        "Variant-dark": "_29OIX_G3reF-rRPFaaV2mW",
        "Variant-inverted": "RmQIHBmo3QqjBtWih540t",
        "Variant-outline": "_3Ivla_Ow2vkS32o8Ih_PeA",
        "Variant-ghost": "_2oeLjYS5GL7cq3t8V_fC-8",
        "Variant-vibrant": "HpR1uGt2MH6wMkWZz8XTQ",
        Width: "_3sJrbUPuxxtvf7RM9OYpwU",
        MinWidth: "_1SOkb8NGXTctRFJs2fKHh-",
      };
    },
    chunkid: (module) => {
      module.exports = {
        Spinner: "_2DCKU_4nS3RTO87T3YPOx_",
        LoadingSpinnerAmin: "_1SGyFmFKc3sUwmfqrrtxxJ",
        "Size-1": "_1Vxi9jNBkNCJzht7q4pUcZ",
        "Size-2": "_4YMNfb67K5DdLQo1iUILX",
        "Size-3": "_389OPmdZoebw42_AlsUFxi",
        "Size-4": "_2_bEJtUl18pDhzOGeCFemg",
        "Size-5": "_1XSG-5xKQMEoGjfZTMCTke",
        "Variant-solid": "lQP4sfWThY4O0ZGRwTFFo",
        "Variant-bright": "_3Jl5ljGbdHy_fzyOpYdWpB",
        ChildContainer: "_3drTSOAFK4l1BW7WUUbGvs",
      };
    },
    chunkid: (module) => {
      module.exports = {
        Option: "_3a3fNdwhCItYEc1SsUNP",
        Disabled: "_21NiFCkZFlTZ8WrrrxX0BX",
        RadioCircle: "_13ZbEe1M2PJ-21o9RTar64",
      };
    },
    chunkid: (module) => {
      module.exports = {
        Box: "_2YzOLNBx6TonKU0Zmp20l4",
      };
    },
    chunkid: (module) => {
      module.exports = {
        Flex: "_3nHL7awgK1Qei1XivGvHMK",
        Direction: "_3JCkAyd9cnB90tRcDLPp4W",
        Justify: "_12ampOcrpRamy1y301kEaK",
        Align: "_1SxQuUnaM-MXeF5UfssWve",
        Gap: "ja5o2GZTopxfGJArsZgFh",
        GapX: "_3KiTPfFvdkPH6ixij56nVM",
        GapY: "_38cfDT7owcq-7PHlx-Bx2j",
        Wrap: "dB7ipW28YN-_GytLR4EuE",
        Inline: "LOeaKjPDMbdcAB54IFgyX",
      };
    },
    chunkid: (module) => {
      module.exports = {
        Reset: "_3A_c3YHYd4YIjA8Y-olnPl",
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
          0;
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
              (this.m_mapPackageData = new Map()));
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
        SetVisiblePackageList(_) {
          (this.m_rgVisiblePackageIDs = [..._]),
            this.m_visiblePackageIDsCallbackList.Dispatch(
              this.m_rgVisiblePackageIDs,
            );
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
      function _(_) {
        let _ = _.Get().m_mapPackageData.get(_);
        return !_ || !!_.released;
      }
      function _() {
        return _.useCallback((_) => _.Get().UpdateVisiblePackageList(_), []);
      }
      function _(_) {
        _.Get().SetVisiblePackageList(_);
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
        m_mapPackageCountryOverridePrice = new Map();
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
          (0, _._)(this);
        }
        Init() {
          const _ = (0, _._)("base_prices", "application_config");
          if (_)
            if (this.BIsPricePayloadValid(_))
              for (let _ in _) {
                const _ = _[_],
                  _ = parseInt(_),
                  _ = new Map();
                this.m_mapPackagePrice.set(_, _);
                for (let _ in _)
                  (0, _._)(_)
                    ? (this.m_mapPackageCountryOverridePrice.has(_) ||
                        this.m_mapPackageCountryOverridePrice.set(_, new Map()),
                      this.m_mapPackageCountryOverridePrice
                        .get(_)
                        .set(_.toUpperCase(), _[_]))
                    : _.set(_, _[_]);
              }
            else 0;
          const _ = (0, _._)("recurring_subs", "application_config");
          if (_)
            if (Array.isArray(_))
              for (const _ of _) this.m_setRecurringSubscriptions.add(_);
            else 0;
          const _ = (0, _._)("pending_proposals", "application_config");
          if (_)
            if (this.BIsPendingPricePayloadValid(_))
              for (let _ in _) {
                const _ = _[_],
                  _ = parseInt(_);
                this.m_mapPriceProposals.set(_, _);
              }
            else 0;
          const _ = (0, _._)("valid_price_keys", "application_config");
          _ &&
            this.BIsPriceKeyValid(_) &&
            (this.m_rgKnownPriceKeys = _.sort((_, _) => (0, _._)(_(_), _(_))));
          const _ = (0, _._)("currency_data", "application_config");
          if (_)
            if (this.BIsCurrencyPayloadValid(_))
              for (let _ in _) {
                const _ = _[_];
                this.m_mapCurrencyData.set(_, _);
              }
            else 0;
          const _ = (0, _._)("currency_descriptions", "application_config");
          if (_)
            if (this.BIsCurrencyDescriptionPayloadValid(_))
              for (let _ in _) {
                const _ = _[_];
                this.m_mapPriceKeyDescriptions.set(_, _);
              }
            else 0;
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
        BIsCurrencyPayloadValid(_) {
          const _ = _;
          if (!_ || "object" != typeof _) return !1;
          for (let _ in _) {
            const _ = _[_];
            if (!_ || "object" != typeof _ || _.strCode != _) return !1;
          }
          return !0;
        }
        BIsPriceKeyValid(_) {
          const _ = _;
          if (!_ || !Array.isArray(_)) return !1;
          for (let _ in _) if ("string" != typeof _) return !1;
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
        GetPublishedCountryOverrides(_) {
          return this.m_mapPackageCountryOverridePrice.has(_)
            ? Array.from(this.m_mapPackageCountryOverridePrice.get(_).keys())
            : [];
        }
        GetPublishedPriceCountryOverride(_, _) {
          return this.m_mapPackageCountryOverridePrice.get(_).get(_);
        }
        GetPublishedPrice(_, _) {
          return (0, _._)(_)
            ? this.m_mapPackageCountryOverridePrice.get(_)?.get(_)
            : this.m_mapPackagePrice.get(_)?.get(_);
        }
        GetProposedPrice(_, _) {
          return this.m_mapPriceProposals.get(_)?.prices[_];
        }
        GetSavedPrice(_, _) {
          return this.GetProposedPrice(_, _) ?? this.GetPublishedPrice(_, _);
        }
        GetPrice(_, _) {
          return this.GetLocalOverridePrice(_, _) ?? this.GetSavedPrice(_, _);
        }
        GetLocalOverridePrice(_, _) {
          return this.m_mapLocalPackagePriceOverrides.get(_)?.get(_);
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
            eState: _._,
            bPartnerWillPublish: _,
          };
          for (const _ of this.m_rgKnownPriceKeys)
            _.prices[_] = this.GetPrice(_, _);
          const _ = this.m_mapPackageCountryOverridePrice.get(_);
          if (_) for (const _ of _.keys()) _.prices[_] = this.GetPrice(_, _);
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
          _.append("sessionid", (0, _._)()),
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
              _.data?.success == _._ &&
              _.data.eState != _._
            ) {
              if (_.data.eState == _._) {
                this.m_mapPriceProposals.delete(_);
                for (const _ of this.m_rgKnownPriceKeys)
                  this.m_mapPackagePrice.has(_) ||
                    this.m_mapPackagePrice.set(_, new Map()),
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
              success: _._,
            }
          );
        }
        async PublishApprovedProposal(_, _, _ = 0) {
          const _ = this.m_mapPriceProposals.get(_);
          if (_?.eState != _._ || !_?.proposalKey)
            return {
              success: _._,
            };
          const _ = (0, _._)("publisherid", "application_config"),
            _ =
              _._.PARTNER_BASE_URL +
              "pricing/ajaxpublishproposal/" +
              _ +
              "/" +
              _,
            _ = new FormData();
          _.append("sessionid", (0, _._)()),
            _.append("proposal_key", _.proposalKey);
          let _ = null;
          try {
            const _ = await _().post(_, _, {
              withCredentials: !0,
              cancelToken: _?.token,
              timeout: _,
            });
            if (200 == _?.status && _.data?.success == _._) {
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
              success: _._,
            }
          );
        }
        async CancelProposal(_, _) {
          const _ = this.m_mapPriceProposals.get(_);
          if (!_?.proposalKey)
            return {
              success: _._,
            };
          const _ = (0, _._)("publisherid", "application_config"),
            _ =
              _._.PARTNER_BASE_URL +
              "pricing/ajaxcancelproposal/" +
              _ +
              "/" +
              _,
            _ = new FormData();
          _.append("sessionid", (0, _._)()),
            _.append("proposal_key", _.proposalKey);
          let _ = null;
          try {
            const _ = await _().post(_, _, {
              withCredentials: !0,
              cancelToken: _?.token,
            });
            if (200 == _?.status && _.data?.success == _._) {
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
              success: _._,
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
        (0, _._)([_._], _.prototype, "OverridePrice", null),
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
        return _.Get().GetPublishedCountryOverrides(_);
      }
      function _(_, _) {
        return _.Get().GetPublishedPriceCountryOverride(_, _);
      }
      function _(_, _) {
        return _.Get().GetPublishedPrice(_, _);
      }
      function _(_, _) {
        return _.Get().GetProposedPrice(_, _);
      }
      function _(_, _) {
        return _.Get().GetLocalOverridePrice(_, _);
      }
      function _(_) {
        const _ = _.Get().m_strDisplayPriceKey;
        return _(_.Get().GetPrice(_, _), _).join("");
      }
      function _(_) {
        const [_, _] = _.useState(_.Get().m_strDisplayPriceKey);
        return (
          (0, _._)(_.Get().m_displayPriceKeyCallbackList, _),
          (function (_, _) {
            const [_, _] = _.useState(_.Get().GetPrice(_, _));
            return (
              (0, _._)(_.Get().GetPriceGridCellCallbackList(_, _), _),
              _.useEffect(() => _(_.Get().GetPrice(_, _)), [_, _]),
              _(_, _).join("")
            );
          })(_, _)
        );
      }
      function _() {
        const _ = (0, _._)(),
          _ = (0, _._)(),
          _ = (0, _._)();
        return _.useCallback(
          () =>
            (function (_, _, _) {
              let _ = 0;
              for (const _ of _) {
                const _ = new Array(),
                  _ = new Array(),
                  _ = _.Get().GetPrice(_, "USD");
                if (_ && !(_ <= 0)) {
                  for (const _ of _.Get().m_rgKnownPriceKeys) {
                    if ("USD" == _) continue;
                    const _ = _.Get().GetPrice(_, "USD"),
                      { nSuggestedPriceInCents: _, nGuidelinesLevel: _ } = (0,
                      _._)(_, _, _, (0, _._)(_), (0, _._)(_));
                    null !== _ &&
                      _.Get().GetPrice(_, _) != _ &&
                      (_.push(_), _.push(_));
                  }
                  _.length > 0 &&
                    (_.Get().OverridePricesForPackage(_, _, _), (_ += 1));
                }
              }
              _ > 0 && _.Get().DispatchPriceOverridesCallbacks();
            })(_, _, _),
          [_, _, _],
        );
      }
      function _(_, _) {
        const _ = (0, _._)();
        (0, _._)(_.Get().GetPriceGridCellCallbackList(_, _), _);
        const _ = _.Get().GetPrice(_, _),
          _ = (0, _._)(),
          _ = (0, _._)();
        (0, _._)(_.Get().GetPriceGridCellCallbackList(_, "USD"), _);
        const _ = _.Get().GetPrice(_, "USD"),
          { nSuggestedPriceInCents: _, nGuidelinesLevel: _ } = (0, _._)(
            _,
            _,
            _,
            (0, _._)(_),
            (0, _._)(_),
          ),
          _ = _.useCallback((_) => _.Get().OverridePrice(_, _, _), [_, _]),
          _ = _.Get().GetPublishedPrice(_, _),
          _ = _.Get().GetProposedPrice(_, _),
          { nMinPriceInCents: _, nMaxPriceInCents: _ } = _(_, _),
          _ = _(_, _, _);
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
      const _ = 90,
        _ = 10;
      function _(_, _, _, _) {
        const _ = _.Get().GetMinimumDiscountPrice(_),
          _ = _ ? Math.floor((100 * (_ - _)) / _) : _,
          _ = Math.min(_, Math.floor((100 * (_ - 50)) / _));
        if (_) return _ < _ || _ < _ ? null : Math.max(Math.min(_, _), 0);
        return _ < _ ? _ : null;
      }
      function _(_) {
        let [_, _] = _.useState(() => _.Get().BAnyPackagePriceBelowMin(_)),
          _ = _.useCallback(() => {
            let _ = _.Get().BAnyPackagePriceBelowMin(_);
            __webpack_require__(_);
          }, [_, _]);
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
        const _ = (0, _._)();
        return (
          (0, _._)(_.Get().GetPriceGridCellCallbackList(_, "USD"), _),
          _.Get().m_mapPriceProposals.get(_)
        );
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
        return _.Get().OverridePrice;
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
        _ = __webpack_require__("chunkid"),
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
          [_._, (_) => _(_, _)],
          [_._, _],
          [_._, (_) => _(_, _)],
          [_._, _],
          [_._, (_) => _(_, _)],
          [_._, (_) => _(_, _)],
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
        if ((_.keyCode === _._ && _.shiftKey && (_ = (_) => _(_, _)), !_))
          return;
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
    chunkid: (module, module_exports, __webpack_require__) => {
      "use strict";
      __webpack_require__._(module_exports, {
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
        _ = __webpack_require__("chunkid");
      function _(_) {
        const {
            size: _ = "3",
            loading: _ = !0,
            children: _,
            color: _,
            variant: _,
            ..._
          } = _,
          _ = (0, _._)("LoadingSpinner", _);
        return _ || !_
          ? (0, _.jsxs)(_._, {
              position: "relative",
              ..._,
              width: "fit-content",
              children: [
                (0, _.jsx)("div", {
                  "data-visibility": !_,
                  className: _.ChildContainer,
                  children: _,
                }),
                _ &&
                  (0, _.jsx)(_._, {
                    position: "absolute",
                    inset: "0",
                    justify: "center",
                    align: "center",
                    children: (0, _.jsx)(_, {
                      size: _,
                      color: _,
                      variant: _,
                    }),
                  }),
              ],
            })
          : (0, _.jsx)(_, {
              size: _,
              color: _,
              variant: _,
              ..._,
            });
      }
      function _(_) {
        const { className: _, color: _, ..._ } = (0, _._)(_, _);
        return (0, _.jsx)("div", {
          "data-accent-color": _,
          className: _()(_, _.Spinner),
          ..._,
        });
      }
      const _ = [
        ..._._,
        {
          prop: "size",
          responsive: !0,
          className: (_) => _[`Size-${_}`],
        },
        {
          prop: "variant",
          className: (_) => _[`Variant-${_}`],
        },
      ];
      var _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid");
      function _(_) {
        _.preventDefault();
      }
      const _ = [
          ..._._,
          {
            prop: "size",
            responsive: !0,
            className: (_) => _[`Size-${_}`],
          },
          {
            prop: "variant",
            className: (_) => _[`Variant-${_}`],
          },
          {
            prop: "color",
            dataProperty: (_) => ["accent-color", `${_}`],
          },
          {
            prop: "width",
            className: _.Width,
            cssProperty: "--width",
            responsive: !0,
          },
          {
            prop: "minWidth",
            className: _.MinWidth,
            cssProperty: "--min-width",
            responsive: !0,
          },
        ],
        _ = function (_) {
          const {
              variant: _,
              size: _ = "2",
              minWidth: _ = "fit-content",
              color: _,
              loading: _,
              children: _,
              onClick: _,
              icon: _,
              focusable: _,
              navProps: _,
              ..._
            } = _,
            _ = (0, _._)(),
            _ = _
              ? (0, _.jsx)(_, {
                  size: _,
                  color: _,
                  variant: "bright",
                  children: _,
                })
              : _,
            _ = _ ? void 0 : _,
            _ = _ ?? _?.focusable ?? !!_,
            _ = (0, _._)("Button", _),
            _ = {
              type: "button",
              ...(0, _._)(
                {
                  ..._,
                  variant: _,
                  size: _,
                  minWidth: _,
                  color: _,
                  className: _()(_.Button, _ && _.Icon),
                  onClick: _,
                },
                _,
              ),
              children: _,
            };
          return _ && (_ || _)
            ? (0, _.jsx)(_._, {
                ..._,
                ...(_ || {}),
                focusable: _,
              })
            : (0, _.jsx)("button", {
                ..._,
              });
        },
        _ = function (_) {
          const {
              variant: _,
              size: _ = "2",
              minWidth: _ = "fit-content",
              disabled: _,
              icon: _,
              focusable: _,
              navProps: _,
              ..._
            } = _,
            _ = (0, _._)(),
            _ = (0, _._)("Button", _),
            _ = _ ? _ : void 0,
            _ = (0, _._)(
              {
                onClick: _,
                "aria-disabled": _,
                ..._,
                variant: _,
                size: _,
                minWidth: _,
                className: _()(_.Button, _ && _.Icon, (0, _._)()),
              },
              _,
            );
          return _ && (_ || _)
            ? (0, _.jsx)(_._, {
                ..._,
                ...(_ || {}),
                focusable: _,
              })
            : (0, _.jsx)("a", {
                ..._,
              });
        };
    },
    chunkid: (module, module_exports, __webpack_require__) => {
      "use strict";
      __webpack_require__._(module_exports, {
        _: () => _,
      });
      var _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__._(_),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid");
      function _(_) {
        const { children: _, className: _, bDisabled: _, ..._ } = _;
        return (0, _.jsxs)(_._, {
          cursor: "default",
          gap: "2",
          className: _()(_.Option, _ && _.Disabled),
          ..._,
          children: [
            (0, _.jsx)("div", {
              className: _.RadioCircle,
            }),
            (0, _.jsx)(_._, {
              children: _,
            }),
          ],
        });
      }
      const _ = Object.assign(
          function (_) {
            const {
              value: _,
              onValueChange: _,
              options: _,
              getOptionLabel: _,
              disabled: _,
              ..._
            } = _;
            return (0, _.jsx)(_.Root, {
              value: _,
              onValueChange: _,
              disabled: _,
              ..._,
              children: _.map((_) => {
                const _ = _ ? _(_) : _;
                return (0, _.jsx)(
                  _.Option,
                  {
                    value: _,
                    children: _,
                  },
                  _,
                );
              }),
            });
          },
          {
            Root: function (_) {
              const {
                  value: _,
                  onValueChange: _,
                  disabled: _,
                  render: _,
                  ..._
                } = _,
                _ = (0, _.useRef)(null),
                _ = (0, _.useCallback)((_, _) => {
                  if (!_.current) return;
                  const _ = [..._.current.querySelectorAll("[data-radio-id]")];
                  if (0 !== _.length)
                    for (let _ = 0; _ < _.length; _++) {
                      const _ = _[_];
                      if (!_.dataset.radioId) continue;
                      if (_.dataset.radioId === _) {
                        const _ = _[(_ + _ + _.length) % _.length];
                        _.click(), _.focus();
                      }
                    }
                }, []),
                _ = (0, _.useCallback)((_) => _(_, 1), [_]),
                _ = (0, _.useCallback)((_) => _(_, -1), [_]),
                _ = (0, _.useMemo)(
                  () => ({
                    value: _,
                    onValueChange: _,
                    bDisabled: _,
                    onSelectNext: _,
                    onSelectPrev: _,
                  }),
                  [_, _, _, _, _],
                ),
                _ = {
                  role: "radiogroup",
                  "aria-disabled": _,
                  ref: _,
                  ..._,
                },
                _ = (0, _.jsx)(_._, {
                  direction: "column",
                  gap: "2",
                  role: "radiogroup",
                  "aria-disabled": _,
                  ..._,
                }),
                _ = (0, _._)(_, _, _);
              return (0, _.jsx)(_, {
                value: _,
                children: _,
              });
            },
            Option: function (_) {
              const { value: _, ref: _, children: _, render: _ } = _,
                _ = (0, _.useContext)(_),
                _ = (0, _.useId)();
              if (!_)
                return (
                  console.error(
                    "<RadioGroup.Option> must be rendered within a <RadioGroup.Root>",
                  ),
                  null
                );
              const {
                  value: _,
                  onValueChange: _,
                  bDisabled: _,
                  onSelectNext: _,
                  onSelectPrev: _,
                } = _,
                _ = _ === _,
                _ = () => {
                  _ || _ || _(_);
                },
                _ = {
                  role: "radio",
                  "aria-checked": _,
                  "aria-disabled": _,
                  "data-radio-id": _,
                  onClick: _,
                  onKeyDown: (_) => {
                    if (!_)
                      switch (_.key) {
                        case " ":
                          _(), _.preventDefault(), _.stopPropagation();
                          break;
                        case "ArrowRight":
                        case "ArrowDown":
                          _(_), _.preventDefault(), _.stopPropagation();
                          break;
                        case "ArrowLeft":
                        case "ArrowUp":
                          _(_), _.preventDefault(), _.stopPropagation();
                      }
                  },
                  tabIndex: _ ? 0 : -1,
                  ref: _,
                  children: _,
                },
                _ = (0, _.jsx)(_, {
                  bDisabled: _,
                });
              return (0, _._)(_, _, _, {
                bSelected: _,
                bDisabled: _,
              });
            },
          },
        ),
        _ = (0, _.createContext)(null);
    },
    chunkid: (module, module_exports, __webpack_require__) => {
      "use strict";
      __webpack_require__._(module_exports, {
        _: () => _,
        _: () => _,
      });
      var _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__._(_),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid");
      function _(_) {
        const { _: _ = "div", focusable: _, navProps: _, ref: _, ..._ } = _,
          _ = (0, _._)(),
          _ = (0, _._)(
            {
              ..._,
              className: _()(_.Box, (0, _._)(), _.className),
            },
            _,
          ),
          _ = _ ?? _?.focusable ?? !!_.onClick,
          _ = (0, _.jsx)(_, {
            ref: _,
            ..._,
          });
        return _ && (_ || _)
          ? (0, _.jsx)(_._, {
              ...(_ || {}),
              focusable: _,
              children: _,
            })
          : _;
      }
      const _ = _._;
      function _(_) {
        return (0, _._)(_, _._);
      }
    },
    chunkid: (module, module_exports, __webpack_require__) => {
      "use strict";
      __webpack_require__._(module_exports, {
        _: () => _,
      });
      var _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__._(_),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid");
      function _(_) {
        const { _: _ = "div", focusable: _, navProps: _, ref: _, ..._ } = _,
          _ = (0, _._)(),
          _ = (0, _._)(
            {
              ..._,
              className: _()(_.className, _.Flex),
            },
            _,
          ),
          _ = _ ?? _?.focusable ?? !!_.onClick,
          _ = (0, _.jsx)(_, {
            ref: _,
            ..._,
          }),
          _ = (0, _._)(_.direction ?? "row");
        return _
          ? (0, _.jsx)(_._, {
              ...(_ || {}),
              focusable: _,
              "flow-children": _,
              children: _,
            })
          : _;
      }
      const _ = [
        ..._._,
        {
          prop: "direction",
          responsive: !0,
          className: _.Direction,
          cssProperty: "--direction",
        },
        {
          prop: "justify",
          responsive: !0,
          className: _.Justify,
          cssProperty: (_) => ["--justify", _(_)],
        },
        {
          prop: "align",
          responsive: !0,
          className: _.Align,
          cssProperty: "--align",
        },
        {
          prop: "gap",
          responsive: !0,
          className: _.Gap,
          cssProperty: (_) => ["--gap", `var(--spacing-${_})`],
        },
        {
          prop: "gapX",
          responsive: !0,
          className: _.GapX,
          cssProperty: (_) => ["--gap-x", `var(--spacing-${_})`],
        },
        {
          prop: "gapY",
          responsive: !0,
          className: _.GapY,
          cssProperty: (_) => ["--gap-y", `var(--spacing-${_})`],
        },
        {
          prop: "wrap",
          responsive: !0,
          className: _.Wrap,
          cssProperty: "--wrap",
        },
        {
          prop: "inline",
          responsive: !0,
          className: _.Inline,
        },
      ];
      function _(_) {
        return /^(between|around|evenly)$/.test(_) ? `space-${_}` : _;
      }
    },
    chunkid: (module, module_exports, __webpack_require__) => {
      "use strict";
      __webpack_require__._(module_exports, {
        _: () => _,
      });
      var _ = __webpack_require__("chunkid");
      function _(_, _, _) {
        return "function" == typeof _ ? _(_, _) : _.cloneElement(_, _);
      }
      function _(_, _, _, _) {
        return _(_ || _, _, _);
      }
    },
    chunkid: (module, module_exports, __webpack_require__) => {
      "use strict";
      __webpack_require__._(module_exports, {
        _: () => _,
      });
      var _ = __webpack_require__("chunkid");
      function _() {
        return _.Reset;
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
      });
      var _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid");
      function _(_) {
        return _._;
      }
      function _(_) {
        switch (_) {
          case _._:
            return "usd_cis";
          case _._:
            return "usd_sasia";
          case _._:
            return "usd_latam";
          case _._:
            return "usd_mena";
          default:
            return "usd_invalid";
        }
      }
      function _(_) {
        switch (_) {
          case _._:
            return "CIS";
          case _._:
            return "SASIA";
          case _._:
            return "LATAM";
          case _._:
            return "MENA";
          default:
            return "Invalid Region";
        }
      }
      function _(_) {
        switch (_) {
          case "CIS":
            return _._;
          case "SASIA":
            return _._;
          case "LATAM":
            return _._;
          case "MENA":
            return _._;
          default:
            return _._;
        }
      }
      function _(_) {
        switch (_) {
          case _._:
            return "The Commonwealth of Independent Stats";
          case _._:
            return "South Asia";
          case _._:
            return "Latin America";
          case _._:
            return "Middle East and North Africa";
          default:
            return "Invalid Region";
        }
      }
      function _(_) {
        switch (_?.toLowerCase()) {
          case "usd_cis":
            return _._;
          case "usd_sasia":
            return _._;
          case "usd_latam":
            return _._;
          case "usd_mena":
            return _._;
          default:
            return _._;
        }
      }
    },
    chunkid: (module, module_exports, __webpack_require__) => {
      "use strict";
      __webpack_require__._(module_exports, {
        _: () => _,
        _: () => _,
        _: () => _,
      });
      var _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid");
      const _ = _.createContext({
        eConversionMethod: _._._,
        setConversionMethod: (_) => {},
        rgAvailableConversionMethods: [],
      });
      function _(_) {
        const { eInitialConversionMethod: _ } = _,
          _ = (0, _._)(),
          [_, _] = _.useState(_ || _._._),
          _ = _.useMemo(() => {
            const _ = _
              ? __webpack_require__.GetAvailableConversionMethods()
              : [];
            return {
              eConversionMethod: _,
              setConversionMethod: _,
              rgAvailableConversionMethods: _,
            };
          }, [_, _, _]);
        return (0, _.jsx)(_.Provider, {
          value: _,
          children: _.children,
        });
      }
      function _() {
        return _.useContext(_);
      }
      function _() {
        return _.useContext(_).eConversionMethod;
      }
    },
    chunkid: (module, module_exports, __webpack_require__) => {
      "use strict";
      __webpack_require__._(module_exports, {
        _: () => _,
      });
      var _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid");
      function _(_, _, _, _, _) {
        if (!_)
          return {
            nSuggestedPriceInCents: null,
            nGuidelinesLevel: null,
          };
        let _ = null;
        for (let _ of _.GetUSDPricePointsInCents())
          if (_ >= _) {
            _ = _;
            break;
          }
        const _ = _ && _ < _._;
        if ((_ == _._ && !_) || !_)
          return {
            nSuggestedPriceInCents: null,
            nGuidelinesLevel: null,
          };
        const _ = _.GetRecommendPrice(_, _, _, _),
          _ = _.GetRecommendPrice(_, _._, void 0, _);
        if (
          ((0, _._)(
            _,
            `Missing requested currency guide for  ${_}/${_}/${_}/${_}`,
          ),
          (0, _._)(_, `Missing usd guide for  ${_}/${_}/${_}`),
          !_ || !_)
        )
          return {
            nSuggestedPriceInCents: null,
            nGuidelinesLevel: null,
          };
        let _ = _.price;
        const _ = _.price;
        if (_ != _) {
          const _ = _ / _;
          (_ *= _), (_ = Math.ceil(_ * _));
        }
        return {
          nSuggestedPriceInCents: _,
          nGuidelinesLevel: _,
        };
      }
    },
    chunkid: (module, module_exports, __webpack_require__) => {
      "use strict";
      __webpack_require__._(module_exports, {
        _: () => _,
        _: () => _,
        _: () => _,
      });
      var _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid");
      const _ = _._._;
      class _ {
        m_mapUSDPrice = new Map();
        m_mapKeyToGuidePrice = new Map();
        m_rgUSDPricePointInCents = [];
        m_setConversionMethod = new Set();
        m_setSupportedCurrencies = new Set();
        m_setSupportedRegions = new Set();
        GetKey(_, _, _, _ = _) {
          return `${_}_${_}_${_ || _._}_${_}`;
        }
        GetAvailableConversionMethods() {
          return Array.from(this.m_setConversionMethod).sort();
        }
        GetAnyPricePoint() {
          return Array.from(this.m_mapUSDPrice.get(_._._)?.values() || [])[0];
        }
        BIsSupportCurrencyAndOrRegion(_, _) {
          return _
            ? _ == _._ && this.m_setSupportedRegions.has(_)
            : this.m_setSupportedCurrencies.has(_);
        }
        GetRecommendPrice(_, _, _, _ = _) {
          const _ = this.GetKey(_, _, _, _);
          return this.m_mapKeyToGuidePrice.get(_);
        }
        GetScaledRecommendedPrice(_, _, _, _ = _) {
          let _ = -1,
            _ = -1;
          for (const _ of this.m_mapUSDPrice.get(_).keys()) {
            const _ = Math.abs(_ - _);
            (-1 == _ || _ < _) && ((_ = _), (_ = _));
          }
          const _ = this.m_mapUSDPrice.get(_).get(_),
            _ = _
              ? _.region_prices.find((_) => _.region_code == _)
              : _.currency_prices.find((_) => _.currency_code == _),
            _ = _ / _;
          return {
            currency_code: _?.currency_code,
            region_code: _?.region_code,
            price: Math.ceil((_?.price || 0) * _),
          };
        }
        GetUSDPricePointsInCents() {
          return this.m_rgUSDPricePointInCents;
        }
        constructor(_) {
          let _ = new Set();
          _.forEach((_) => {
            const _ = _.convert_method ?? _;
            this.m_setConversionMethod.add(_),
              this.m_mapUSDPrice.has(_) || this.m_mapUSDPrice.set(_, new Map());
            this.m_mapUSDPrice.get(_).set(_.usd_price, _),
              _.add(_.usd_price),
              _.currency_prices.forEach((_) => {
                const _ = this.GetKey(
                  _.usd_price,
                  _.currency_code,
                  _._,
                  _.convert_method || _,
                );
                this.m_mapKeyToGuidePrice.set(_, _),
                  this.m_setSupportedCurrencies.add(_.currency_code);
              }),
              _.region_prices.forEach((_) => {
                const _ = this.GetKey(
                  _.usd_price,
                  _.currency_code,
                  _.region_code,
                  _.convert_method || _,
                );
                if (
                  (this.m_mapKeyToGuidePrice.set(_, _),
                  this.m_setSupportedRegions.add(_.region_code),
                  this.m_setConversionMethod.has(_._._))
                ) {
                  const _ = {
                      currency_code: _._,
                      price: _.usd_price,
                      region_code: _.region_code,
                    },
                    _ = this.GetKey(_.usd_price, _._, _.region_code, _._._);
                  this.m_mapKeyToGuidePrice.set(_, _);
                }
              });
          }),
            (this.m_rgUSDPricePointInCents = Array.from(_.keys()));
        }
      }
      var _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid");
      var _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid");
      function _() {
        const _ = (0, _._)({
          queryKey: ["PricingGuideline"],
          queryFn: async () =>
            await (function () {
              let _ = (0, _._)("pricing_guideline", "application_config");
              if (_) return Promise.resolve(_);
              {
                const _ = _._.getQueryData(["PricingGuideline"]);
                return Promise.resolve(_ ?? null);
              }
            })(),
        });
        return (0, _.useMemo)(() => (_.data ? new _(_.data) : null), [_.data]);
      }
      function _() {
        return ["PricingGuideline"];
      }
      function _(_) {
        const _ = _(),
          _ = (0, _._)();
        return {
          fnApplyGuidelines: (0, _.useCallback)(
            (_, _, _) => {
              if (
                ((0, _._)(
                  _,
                  "Pricing Guideline Not Initialized by time conversion being triggered",
                ),
                _)
              ) {
                for (let _ = _._; _ < _._; ++_) {
                  const _ = _.GetRecommendPrice(_, _, void 0, _ ?? _)?.price;
                  if (_ && _ > 0) {
                    const _ = (0, _._)(_);
                    _(_, _, _);
                  }
                }
                for (let _ = _._; _ < _._; ++_) {
                  const _ = _._,
                    _ = _.GetRecommendPrice(_, _, _, _ ?? _)?.price;
                  if (_ && _ > 0) {
                    const _ = (0, _._)(_, _).toUpperCase();
                    _(_, _, _);
                  }
                }
              }
            },
            [_, _, _],
          ),
        };
      }
    },
    chunkid: (module, module_exports, __webpack_require__) => {
      "use strict";
      __webpack_require__._(module_exports, {
        _: () => _,
        _: () => _,
        _: () => _,
        _: () => _,
      });
      const _ = 0,
        _ = 1,
        _ = 3,
        _ = 4;
    },
    chunkid: (module, module_exports, __webpack_require__) => {
      "use strict";
      __webpack_require__._(module_exports, {
        _: () => _,
      });
      var _ = {};
      __webpack_require__._(_),
        __webpack_require__._(_, {
          _: () => _,
          _: () => _,
          _: () => _,
        });
      var _ = __webpack_require__("chunkid"),
        _ = __webpack_require__._(_),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid");
      class _ extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(_ = null) {
          super(),
            _.prototype.descriptors || _._(_._()),
            _.Message.initialize(this, _, 0, -1, [1, 2], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            _.sm_m ||
              (_.sm_m = {
                proto: _,
                fields: {
                  descriptors: {
                    _: 1,
                    _: !0,
                    _: !0,
                    _: _._.readString,
                    _: _._.writeRepeatedString,
                  },
                  interactive_elements: {
                    _: 2,
                    _: !0,
                    _: !0,
                    _: _._.readString,
                    _: _._.writeRepeatedString,
                  },
                  official_id: {
                    _: 3,
                    _: _._.readString,
                    _: _._.writeString,
                  },
                  esrb_online_music_not_rated: {
                    _: 4,
                    _: _._.readBool,
                    _: _._.writeBool,
                  },
                  esrb_online_interactions_not_rated: {
                    _: 5,
                    _: _._.readBool,
                    _: _._.writeBool,
                  },
                },
              }),
            _.sm_m
          );
        }
        static MBF() {
          return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
        }
        toObject(_ = !1) {
          return _.toObject(_, this);
        }
        static toObject(_, _) {
          return _._(_._(), _, _);
        }
        static fromObject(_) {
          return _._(_._(), _);
        }
        static deserializeBinary(_) {
          let _ = new (_().BinaryReader)(_),
            _ = new _();
          return _.deserializeBinaryFromReader(_, _);
        }
        static deserializeBinaryFromReader(_, _) {
          return _._(_.MBF(), _, _);
        }
        serializeBinary() {
          var _ = new (_().BinaryWriter)();
          return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
        }
        static serializeBinaryToWriter(_, _) {
          _._(_._(), _, _);
        }
        serializeBase64String() {
          var _ = new (_().BinaryWriter)();
          return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
        }
        getClassName() {
          return "AppRatingAuxData";
        }
      }
      class _ extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(_ = null) {
          super(),
            _.prototype.rating_agency || _._(_._()),
            _.Message.initialize(this, _, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            _.sm_m ||
              (_.sm_m = {
                proto: _,
                fields: {
                  rating_agency: {
                    _: 1,
                    _: _._.readEnum,
                    _: _._.writeEnum,
                  },
                  rating: {
                    _: 2,
                    _: _._.readString,
                    _: _._.writeString,
                  },
                  source: {
                    _: 3,
                    _: _._.readEnum,
                    _: _._.writeEnum,
                  },
                  banned: {
                    _: 4,
                    _: _._.readBool,
                    _: _._.writeBool,
                  },
                  required_age: {
                    _: 5,
                    _: _._.readUint32,
                    _: _._.writeUint32,
                  },
                  use_age_gate: {
                    _: 6,
                    _: _._.readBool,
                    _: _._.writeBool,
                  },
                  aux_data: {
                    _: 7,
                    _: _,
                  },
                },
              }),
            _.sm_m
          );
        }
        static MBF() {
          return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
        }
        toObject(_ = !1) {
          return _.toObject(_, this);
        }
        static toObject(_, _) {
          return _._(_._(), _, _);
        }
        static fromObject(_) {
          return _._(_._(), _);
        }
        static deserializeBinary(_) {
          let _ = new (_().BinaryReader)(_),
            _ = new _();
          return _.deserializeBinaryFromReader(_, _);
        }
        static deserializeBinaryFromReader(_, _) {
          return _._(_.MBF(), _, _);
        }
        serializeBinary() {
          var _ = new (_().BinaryWriter)();
          return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
        }
        static serializeBinaryToWriter(_, _) {
          _._(_._(), _, _);
        }
        serializeBase64String() {
          var _ = new (_().BinaryWriter)();
          return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
        }
        getClassName() {
          return "AppRating";
        }
      }
      class _ extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(_ = null) {
          super(),
            _.prototype.elanguage || _._(_._()),
            _.Message.initialize(this, _, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            _.sm_m ||
              (_.sm_m = {
                proto: _,
                fields: {
                  elanguage: {
                    _: 1,
                    _: _._.readInt32,
                    _: _._.writeInt32,
                  },
                  text: {
                    _: 2,
                    _: _._.readString,
                    _: _._.writeString,
                  },
                },
              }),
            _.sm_m
          );
        }
        static MBF() {
          return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
        }
        toObject(_ = !1) {
          return _.toObject(_, this);
        }
        static toObject(_, _) {
          return _._(_._(), _, _);
        }
        static fromObject(_) {
          return _._(_._(), _);
        }
        static deserializeBinary(_) {
          let _ = new (_().BinaryReader)(_),
            _ = new _();
          return _.deserializeBinaryFromReader(_, _);
        }
        static deserializeBinaryFromReader(_, _) {
          return _._(_.MBF(), _, _);
        }
        serializeBinary() {
          var _ = new (_().BinaryWriter)();
          return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
        }
        static serializeBinaryToWriter(_, _) {
          _._(_._(), _, _);
        }
        serializeBase64String() {
          var _ = new (_().BinaryWriter)();
          return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
        }
        getClassName() {
          return "ContentSurveyLocalizedText";
        }
      }
      class _ extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(_ = null) {
          super(),
            _.prototype.customer_notes || _._(_._()),
            _.Message.initialize(this, _, 0, -1, [1, 2, 3], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            _.sm_m ||
              (_.sm_m = {
                proto: _,
                fields: {
                  customer_notes: {
                    _: 1,
                    _: _,
                    _: !0,
                    _: !0,
                  },
                  customer_notes_ai: {
                    _: 2,
                    _: _,
                    _: !0,
                    _: !0,
                  },
                  mature_tags: {
                    _: 3,
                    _: !0,
                    _: !0,
                    _: _._.readEnum,
                    pbr: _._.readPackedEnum,
                    _: _._.writeRepeatedEnum,
                  },
                  has_mature_content: {
                    _: 4,
                    _: _._.readBool,
                    _: _._.writeBool,
                  },
                  ai_external_service_name: {
                    _: 5,
                    _: _._.readString,
                    _: _._.writeString,
                  },
                  ai_external_service_url: {
                    _: 6,
                    _: _._.readString,
                    _: _._.writeString,
                  },
                },
              }),
            _.sm_m
          );
        }
        static MBF() {
          return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
        }
        toObject(_ = !1) {
          return _.toObject(_, this);
        }
        static toObject(_, _) {
          return _._(_._(), _, _);
        }
        static fromObject(_) {
          return _._(_._(), _);
        }
        static deserializeBinary(_) {
          let _ = new (_().BinaryReader)(_),
            _ = new _();
          return _.deserializeBinaryFromReader(_, _);
        }
        static deserializeBinaryFromReader(_, _) {
          return _._(_.MBF(), _, _);
        }
        serializeBinary() {
          var _ = new (_().BinaryWriter)();
          return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
        }
        static serializeBinaryToWriter(_, _) {
          _._(_._(), _, _);
        }
        serializeBase64String() {
          var _ = new (_().BinaryWriter)();
          return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
        }
        getClassName() {
          return "ContentSurveyDisclosure";
        }
      }
      const _ = 1,
        _ = 2,
        _ = 3;
      _.Message;
      class _ extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(_ = null) {
          super(),
            _.prototype.survey_section || _._(_._()),
            _.Message.initialize(this, _, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            _.sm_m ||
              (_.sm_m = {
                proto: _,
                fields: {
                  survey_section: {
                    _: 1,
                    _: _._.readEnum,
                    _: _._.writeEnum,
                  },
                  time_reviewed: {
                    _: 2,
                    _: _._.readUint32,
                    _: _._.writeUint32,
                  },
                  accountid_reviewer: {
                    _: 3,
                    _: _._.readUint32,
                    _: _._.writeUint32,
                  },
                },
              }),
            _.sm_m
          );
        }
        static MBF() {
          return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
        }
        toObject(_ = !1) {
          return _.toObject(_, this);
        }
        static toObject(_, _) {
          return _._(_._(), _, _);
        }
        static fromObject(_) {
          return _._(_._(), _);
        }
        static deserializeBinary(_) {
          let _ = new (_().BinaryReader)(_),
            _ = new _();
          return _.deserializeBinaryFromReader(_, _);
        }
        static deserializeBinaryFromReader(_, _) {
          return _._(_.MBF(), _, _);
        }
        serializeBinary() {
          var _ = new (_().BinaryWriter)();
          return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
        }
        static serializeBinaryToWriter(_, _) {
          _._(_._(), _, _);
        }
        serializeBase64String() {
          var _ = new (_().BinaryWriter)();
          return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
        }
        getClassName() {
          return "SurveySectionReviewed";
        }
      }
      class _ extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(_ = null) {
          super(),
            _.prototype.content_category || _._(_._()),
            _.Message.initialize(this, _, 0, -1, [2], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            _.sm_m ||
              (_.sm_m = {
                proto: _,
                fields: {
                  content_category: {
                    _: 1,
                    _: _._.readEnum,
                    _: _._.writeEnum,
                  },
                  questionaire_categories: {
                    _: 2,
                    _: !0,
                    _: !0,
                    _: _._.readEnum,
                    pbr: _._.readPackedEnum,
                    _: _._.writeRepeatedEnum,
                  },
                },
              }),
            _.sm_m
          );
        }
        static MBF() {
          return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
        }
        toObject(_ = !1) {
          return _.toObject(_, this);
        }
        static toObject(_, _) {
          return _._(_._(), _, _);
        }
        static fromObject(_) {
          return _._(_._(), _);
        }
        static deserializeBinary(_) {
          let _ = new (_().BinaryReader)(_),
            _ = new _();
          return _.deserializeBinaryFromReader(_, _);
        }
        static deserializeBinaryFromReader(_, _) {
          return _._(_.MBF(), _, _);
        }
        serializeBinary() {
          var _ = new (_().BinaryWriter)();
          return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
        }
        static serializeBinaryToWriter(_, _) {
          _._(_._(), _, _);
        }
        serializeBase64String() {
          var _ = new (_().BinaryWriter)();
          return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
        }
        getClassName() {
          return "GeneratedGameContent";
        }
      }
      class _ extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(_ = null) {
          super(),
            _.prototype.rating_agency || _._(_._()),
            _.Message.initialize(this, _, 0, -1, [4], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            _.sm_m ||
              (_.sm_m = {
                proto: _,
                fields: {
                  rating_agency: {
                    _: 1,
                    _: _._.readString,
                    _: _._.writeString,
                  },
                  rating: {
                    _: 2,
                    _: _._.readString,
                    _: _._.writeString,
                  },
                  required_age: {
                    _: 3,
                    _: _._.readUint32,
                    _: _._.writeUint32,
                  },
                  descriptors: {
                    _: 4,
                    _: !0,
                    _: !0,
                    _: _._.readString,
                    _: _._.writeRepeatedString,
                  },
                  banned: {
                    _: 5,
                    _: _._.readBool,
                    _: _._.writeBool,
                  },
                },
              }),
            _.sm_m
          );
        }
        static MBF() {
          return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
        }
        toObject(_ = !1) {
          return _.toObject(_, this);
        }
        static toObject(_, _) {
          return _._(_._(), _, _);
        }
        static fromObject(_) {
          return _._(_._(), _);
        }
        static deserializeBinary(_) {
          let _ = new (_().BinaryReader)(_),
            _ = new _();
          return _.deserializeBinaryFromReader(_, _);
        }
        static deserializeBinaryFromReader(_, _) {
          return _._(_.MBF(), _, _);
        }
        serializeBinary() {
          var _ = new (_().BinaryWriter)();
          return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
        }
        static serializeBinaryToWriter(_, _) {
          _._(_._(), _, _);
        }
        serializeBase64String() {
          var _ = new (_().BinaryWriter)();
          return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
        }
        getClassName() {
          return "GeneratedGameRating";
        }
      }
      class _ extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(_ = null) {
          super(),
            _.prototype.timestamp_generated || _._(_._()),
            _.Message.initialize(this, _, 0, -1, [3, 4], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            _.sm_m ||
              (_.sm_m = {
                proto: _,
                fields: {
                  timestamp_generated: {
                    _: 1,
                    _: _._.readUint32,
                    _: _._.writeUint32,
                  },
                  generated_version: {
                    _: 2,
                    _: _._.readUint32,
                    _: _._.writeUint32,
                  },
                  ratings: {
                    _: 3,
                    _: _,
                    _: !0,
                    _: !0,
                  },
                  content_categories: {
                    _: 4,
                    _: _,
                    _: !0,
                    _: !0,
                  },
                },
              }),
            _.sm_m
          );
        }
        static MBF() {
          return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
        }
        toObject(_ = !1) {
          return _.toObject(_, this);
        }
        static toObject(_, _) {
          return _._(_._(), _, _);
        }
        static fromObject(_) {
          return _._(_._(), _);
        }
        static deserializeBinary(_) {
          let _ = new (_().BinaryReader)(_),
            _ = new _();
          return _.deserializeBinaryFromReader(_, _);
        }
        static deserializeBinaryFromReader(_, _) {
          return _._(_.MBF(), _, _);
        }
        serializeBinary() {
          var _ = new (_().BinaryWriter)();
          return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
        }
        static serializeBinaryToWriter(_, _) {
          _._(_._(), _, _);
        }
        serializeBase64String() {
          var _ = new (_().BinaryWriter)();
          return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
        }
        getClassName() {
          return "GeneratedGameRatings";
        }
      }
      class _ extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(_ = null) {
          super(),
            _.prototype.desc_code_generated || _._(_._()),
            _.Message.initialize(this, _, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            _.sm_m ||
              (_.sm_m = {
                proto: _,
                fields: {
                  desc_code_generated: {
                    _: 1,
                    _: _._.readString,
                    _: _._.writeString,
                  },
                  desc_copyright_infringement_guarantee: {
                    _: 2,
                    _: _._.readString,
                    _: _._.writeString,
                  },
                  desc_content_moderation_strategy: {
                    _: 3,
                    _: _._.readString,
                    _: _._.writeString,
                  },
                  external_service_name: {
                    _: 4,
                    _: _._.readString,
                    _: _._.writeString,
                  },
                  external_service_url: {
                    _: 5,
                    _: _._.readString,
                    _: _._.writeString,
                  },
                  desc_external_service_how_content_available_to_players: {
                    _: 6,
                    _: _._.readString,
                    _: _._.writeString,
                  },
                  desc_external_service_monetization: {
                    _: 7,
                    _: _._.readString,
                    _: _._.writeString,
                  },
                },
              }),
            _.sm_m
          );
        }
        static MBF() {
          return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
        }
        toObject(_ = !1) {
          return _.toObject(_, this);
        }
        static toObject(_, _) {
          return _._(_._(), _, _);
        }
        static fromObject(_) {
          return _._(_._(), _);
        }
        static deserializeBinary(_) {
          let _ = new (_().BinaryReader)(_),
            _ = new _();
          return _.deserializeBinaryFromReader(_, _);
        }
        static deserializeBinaryFromReader(_, _) {
          return _._(_.MBF(), _, _);
        }
        serializeBinary() {
          var _ = new (_().BinaryWriter)();
          return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
        }
        static serializeBinaryToWriter(_, _) {
          _._(_._(), _, _);
        }
        serializeBase64String() {
          var _ = new (_().BinaryWriter)();
          return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
        }
        getClassName() {
          return "AIContentSurvey";
        }
      }
      class _ extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(_ = null) {
          super(),
            _.prototype.disclosure || _._(_._()),
            _.Message.initialize(this, _, 0, -1, [2], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            _.sm_m ||
              (_.sm_m = {
                proto: _,
                fields: {
                  disclosure: {
                    _: 1,
                    _: _,
                  },
                  interactive_elements: {
                    _: 2,
                    _: !0,
                    _: !0,
                    _: _._.readEnum,
                    pbr: _._.readPackedEnum,
                    _: _._.writeRepeatedEnum,
                  },
                },
              }),
            _.sm_m
          );
        }
        static MBF() {
          return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
        }
        toObject(_ = !1) {
          return _.toObject(_, this);
        }
        static toObject(_, _) {
          return _._(_._(), _, _);
        }
        static fromObject(_) {
          return _._(_._(), _);
        }
        static deserializeBinary(_) {
          let _ = new (_().BinaryReader)(_),
            _ = new _();
          return _.deserializeBinaryFromReader(_, _);
        }
        static deserializeBinaryFromReader(_, _) {
          return _._(_.MBF(), _, _);
        }
        serializeBinary() {
          var _ = new (_().BinaryWriter)();
          return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
        }
        static serializeBinaryToWriter(_, _) {
          _._(_._(), _, _);
        }
        serializeBase64String() {
          var _ = new (_().BinaryWriter)();
          return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
        }
        getClassName() {
          return "ContentSurveyAuxData";
        }
      }
      class _ extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(_ = null) {
          super(),
            _.prototype._ || _._(_._()),
            _.Message.initialize(this, _, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            _.sm_m ||
              (_.sm_m = {
                proto: _,
                fields: {
                  _: {
                    _: 1,
                    _: _._.readUint32,
                    _: _._.writeUint32,
                  },
                },
              }),
            _.sm_m
          );
        }
        static MBF() {
          return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
        }
        toObject(_ = !1) {
          return _.toObject(_, this);
        }
        static toObject(_, _) {
          return _._(_._(), _, _);
        }
        static fromObject(_) {
          return _._(_._(), _);
        }
        static deserializeBinary(_) {
          let _ = new (_().BinaryReader)(_),
            _ = new _();
          return _.deserializeBinaryFromReader(_, _);
        }
        static deserializeBinaryFromReader(_, _) {
          return _._(_.MBF(), _, _);
        }
        serializeBinary() {
          var _ = new (_().BinaryWriter)();
          return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
        }
        static serializeBinaryToWriter(_, _) {
          _._(_._(), _, _);
        }
        serializeBase64String() {
          var _ = new (_().BinaryWriter)();
          return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
        }
        getClassName() {
          return "ContentDescriptor";
        }
      }
      class _ extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(_ = null) {
          super(),
            _.prototype.surveyid || _._(_._()),
            _.Message.initialize(this, _, 0, -1, [3, 11, 14, 15], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            _.sm_m ||
              (_.sm_m = {
                proto: _,
                fields: {
                  surveyid: {
                    _: 1,
                    _: _._.readUint64String,
                    _: _._.writeUint64String,
                  },
                  state: {
                    _: 2,
                    _: _._.readEnum,
                    _: _._.writeEnum,
                  },
                  descriptors: {
                    _: 3,
                    _: _,
                    _: !0,
                    _: !0,
                  },
                  timestamp_started: {
                    _: 4,
                    _: _._.readUint32,
                    _: _._.writeUint32,
                  },
                  timestamp_updated: {
                    _: 5,
                    _: _._.readUint32,
                    _: _._.writeUint32,
                  },
                  timestamp_finished: {
                    _: 6,
                    _: _._.readUint32,
                    _: _._.writeUint32,
                  },
                  accountid: {
                    _: 7,
                    _: _._.readUint32,
                    _: _._.writeUint32,
                  },
                  developer_notes: {
                    _: 8,
                    _: _._.readString,
                    _: _._.writeString,
                  },
                  keyvalues: {
                    _: 9,
                    _: _._.readString,
                    _: _._.writeString,
                  },
                  ratings: {
                    _: 10,
                    _: _,
                  },
                  categories: {
                    _: 11,
                    _: !0,
                    _: !0,
                    _: _._.readEnum,
                    pbr: _._.readPackedEnum,
                    _: _._.writeRepeatedEnum,
                  },
                  ai_survey: {
                    _: 12,
                    _: _,
                  },
                  internal_notes: {
                    _: 13,
                    _: _._.readString,
                    _: _._.writeString,
                  },
                  all_ratings: {
                    _: 14,
                    _: _,
                    _: !0,
                    _: !0,
                  },
                  sections_reviewed: {
                    _: 15,
                    _: _,
                    _: !0,
                    _: !0,
                  },
                  disclosure: {
                    _: 16,
                    _: _,
                  },
                  inherited_surveyid: {
                    _: 17,
                    _: _._.readUint64String,
                    _: _._.writeUint64String,
                  },
                  started_from_scratch: {
                    _: 18,
                    _: _._.readBool,
                    _: _._.writeBool,
                  },
                  survey_aux_data: {
                    _: 19,
                    _: _,
                  },
                  source: {
                    _: 20,
                    _: _._.readEnum,
                    _: _._.writeEnum,
                  },
                  flags: {
                    _: 21,
                    _: _._.readUint64String,
                    _: _._.writeUint64String,
                  },
                },
              }),
            _.sm_m
          );
        }
        static MBF() {
          return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
        }
        toObject(_ = !1) {
          return _.toObject(_, this);
        }
        static toObject(_, _) {
          return _._(_._(), _, _);
        }
        static fromObject(_) {
          return _._(_._(), _);
        }
        static deserializeBinary(_) {
          let _ = new (_().BinaryReader)(_),
            _ = new _();
          return _.deserializeBinaryFromReader(_, _);
        }
        static deserializeBinaryFromReader(_, _) {
          return _._(_.MBF(), _, _);
        }
        serializeBinary() {
          var _ = new (_().BinaryWriter)();
          return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
        }
        static serializeBinaryToWriter(_, _) {
          _._(_._(), _, _);
        }
        serializeBase64String() {
          var _ = new (_().BinaryWriter)();
          return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
        }
        getClassName() {
          return "ContentDescriptorSurvey";
        }
      }
      class _ extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(_ = null) {
          super(),
            _.prototype.appid || _._(_._()),
            _.Message.initialize(this, _, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            _.sm_m ||
              (_.sm_m = {
                proto: _,
                fields: {
                  appid: {
                    _: 1,
                    _: _._.readUint32,
                    _: _._.writeUint32,
                  },
                  include_descriptors: {
                    _: 2,
                    _: _._.readBool,
                    _: _._.writeBool,
                  },
                  include_keyvalues: {
                    _: 3,
                    _: _._.readBool,
                    _: _._.writeBool,
                  },
                  include_categories: {
                    _: 4,
                    _: _._.readBool,
                    _: _._.writeBool,
                  },
                  include_ai_survey: {
                    _: 5,
                    _: _._.readBool,
                    _: _._.writeBool,
                  },
                  include_all_ratings: {
                    _: 6,
                    _: _._.readBool,
                    _: _._.writeBool,
                  },
                },
              }),
            _.sm_m
          );
        }
        static MBF() {
          return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
        }
        toObject(_ = !1) {
          return _.toObject(_, this);
        }
        static toObject(_, _) {
          return _._(_._(), _, _);
        }
        static fromObject(_) {
          return _._(_._(), _);
        }
        static deserializeBinary(_) {
          let _ = new (_().BinaryReader)(_),
            _ = new _();
          return _.deserializeBinaryFromReader(_, _);
        }
        static deserializeBinaryFromReader(_, _) {
          return _._(_.MBF(), _, _);
        }
        serializeBinary() {
          var _ = new (_().BinaryWriter)();
          return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
        }
        static serializeBinaryToWriter(_, _) {
          _._(_._(), _, _);
        }
        serializeBase64String() {
          var _ = new (_().BinaryWriter)();
          return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
        }
        getClassName() {
          return "CAppContentDescriptors_GetActiveSurvey_Request";
        }
      }
      class _ extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(_ = null) {
          super(),
            _.prototype.appid || _._(_._()),
            _.Message.initialize(this, _, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            _.sm_m ||
              (_.sm_m = {
                proto: _,
                fields: {
                  appid: {
                    _: 1,
                    _: _._.readUint32,
                    _: _._.writeUint32,
                  },
                  include_descriptors: {
                    _: 2,
                    _: _._.readBool,
                    _: _._.writeBool,
                  },
                  include_keyvalues: {
                    _: 3,
                    _: _._.readBool,
                    _: _._.writeBool,
                  },
                  include_categories: {
                    _: 4,
                    _: _._.readBool,
                    _: _._.writeBool,
                  },
                  include_ai_survey: {
                    _: 5,
                    _: _._.readBool,
                    _: _._.writeBool,
                  },
                  include_all_ratings: {
                    _: 6,
                    _: _._.readBool,
                    _: _._.writeBool,
                  },
                },
              }),
            _.sm_m
          );
        }
        static MBF() {
          return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
        }
        toObject(_ = !1) {
          return _.toObject(_, this);
        }
        static toObject(_, _) {
          return _._(_._(), _, _);
        }
        static fromObject(_) {
          return _._(_._(), _);
        }
        static deserializeBinary(_) {
          let _ = new (_().BinaryReader)(_),
            _ = new _();
          return _.deserializeBinaryFromReader(_, _);
        }
        static deserializeBinaryFromReader(_, _) {
          return _._(_.MBF(), _, _);
        }
        serializeBinary() {
          var _ = new (_().BinaryWriter)();
          return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
        }
        static serializeBinaryToWriter(_, _) {
          _._(_._(), _, _);
        }
        serializeBase64String() {
          var _ = new (_().BinaryWriter)();
          return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
        }
        getClassName() {
          return "CAppContentDescriptors_GetWorkingSurvey_Request";
        }
      }
      class _ extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(_ = null) {
          super(),
            _.prototype.surveyid || _._(_._()),
            _.Message.initialize(this, _, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            _.sm_m ||
              (_.sm_m = {
                proto: _,
                fields: {
                  surveyid: {
                    _: 1,
                    _: _._.readUint64String,
                    _: _._.writeUint64String,
                  },
                  survey: {
                    _: 2,
                    _: _,
                  },
                },
              }),
            _.sm_m
          );
        }
        static MBF() {
          return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
        }
        toObject(_ = !1) {
          return _.toObject(_, this);
        }
        static toObject(_, _) {
          return _._(_._(), _, _);
        }
        static fromObject(_) {
          return _._(_._(), _);
        }
        static deserializeBinary(_) {
          let _ = new (_().BinaryReader)(_),
            _ = new _();
          return _.deserializeBinaryFromReader(_, _);
        }
        static deserializeBinaryFromReader(_, _) {
          return _._(_.MBF(), _, _);
        }
        serializeBinary() {
          var _ = new (_().BinaryWriter)();
          return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
        }
        static serializeBinaryToWriter(_, _) {
          _._(_._(), _, _);
        }
        serializeBase64String() {
          var _ = new (_().BinaryWriter)();
          return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
        }
        getClassName() {
          return "CAppContentDescriptors_GetSurvey_Response";
        }
      }
      var _;
      !(function (_) {
        (_.GetActiveSurvey = function (_, _, _) {
          return _.SendMsg(
            "AppContentDescriptor.GetActiveSurvey#1",
            (0, _._)(_, _, _),
            _,
            {
              bConstMethod: !0,
              ePrivilege: 7,
            },
          );
        }),
          (_.GetWorkingSurvey = function (_, _, _) {
            return _.SendMsg(
              "AppContentDescriptor.GetWorkingSurvey#1",
              (0, _._)(_, _, _),
              _,
              {
                bConstMethod: !0,
                ePrivilege: 7,
              },
            );
          });
      })(_ || (_ = {}));
    },
  },
]);
