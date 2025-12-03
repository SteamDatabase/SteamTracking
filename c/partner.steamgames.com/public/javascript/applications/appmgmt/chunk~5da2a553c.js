(self.webpackChunkappmgmt_storeadmin =
  self.webpackChunkappmgmt_storeadmin || []).push([
  [8995],
  {
    chunkid: (module) => {
      module.exports = {
        DashboardPage: "_353rnPLVzyQBQhakxhkl7u",
        DashTitleBar: "_2m-_VofgoRb-uGQMrewYq3",
        DashTitle: "_1FK58fndqHlADYEX-58V0C",
        ConfidentialBanner: "_2H9KzQ8SQGvqGhbWidWzf4",
        Throbber: "_21EsxksQjCwl-Xz3TNuoPc",
        ErrorMessage: "_190uxu3FVS6Fx-IbDsfCyd",
        ButtonGroup: "_2peTiEFo27_zkZA0TzjnD4",
      };
    },
    chunkid: (module) => {
      module.exports = {
        EventDetails: "_3LMXjfy-EuA2ZWoW660vuc",
        Active: "_2BLece8YI3va6GD9JEUxjL",
        RestrictedEligibility: "_2lxTisamKtJUowDlNKSrzG",
        CollisionFreeDiscountEvent: "_15fBcZwmM-nap1QbkpRc2G",
        EventName: "_2bJFFj7RfHL_P4P-MJlzK4",
        EditEventLink: "_1XHd3t0XU1SfpsraST5Ovy",
        EventDates: "_2kY09NU8R-tjOVYmIwZ98B",
        EventDateRange: "_312igBJXB0MifodN4IBq1i",
        EventNumDays: "OAAVWKvssJLy0QM6mVcw6",
        EventLink: "VZ3pVxXbvFNzdGOkOrNGU",
        EventParticipationCtn: "_2iuUu1K5b1e71DnJKkBtHH",
        ParticipationDetails: "_2tr5XTQIvHNQiu4IZKMi7Z",
        Title: "_3mO71T0Q_migmtLfYRFb-6",
        Count: "_1pDZ1lHiN5RohGZxcDAyCK",
        Selected: "_36G76FOe3fZ8csab26PcL8",
        ParticipationToolTip: "_36hxaHrRvc7ct9bb0Aeza3",
        AppLink: "_3RF-6YnSS_2OpJmOo0BV6_",
        BasePrice: "_1a_LwvXaB11PNusz9GPz98",
        RelatedDiscount: "_12zwKFzckK0AkG-lS95iTK",
        DiscountGridDataColumn: "_1yW70vcAdwnrMIrVE8y03S",
        GridRowLoadingThrobber: "r2FLR3ukmK3cVbBV-j8Aa",
        CurrencyPicker: "_2Z65Kc_3FxlP0E15rMFuVC",
        RelatedInfoPicker: "O-95g3EzyTgFwNJ8ATC-e",
        RelatedInfoPickerCtn: "_2nnB1eMYflFLLmMAi7_jJV",
        CurrencyDropDown: "_2gGuz_TA8axLQOqAtwurFU",
        RelatedInfoDropDown: "_1jj2uEuCns_K_cIfGZcKl6",
        CurrencyDropDownItem: "_3wPHxQWhohHATqjvN6B2l3",
        RelatedInfoDropDownItem: "_1ORamDcYtEN8wS1voTsWE",
      };
    },
    chunkid: (module) => {
      module.exports = {
        UnknownValue: "_3ovtfYPeggcsA44NZPuTAh",
        PackageNameColumn: "_2pjx8S7EGnMJcmc9CzX9UK",
        PackagePricesBelowMin: "_2x4be2ySvHHrfL_FaOtZPm",
        PackageNameHeader: "_3nw5HtkrUNuyUyfkPUToSG",
        AppCount: "_2J3kNbz7o9Fd161kGxFARG",
        PackageID: "_1E3TVBOn6hjLXBLwqCPV4J",
        PackageName: "t8fSjo20nSXqky8aCgQwm",
        PackageType: "_3LZvjdGD8NF2mke6oav-MK",
        RowItemCount: "_1r2Rcks7aQ0Yf7SLUPQrGn",
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
      });
      const _ = "1",
        _ = "SaleEvent_DurationDiscount_Tooltip",
        _ = "discount";
      var _, _;
      !(function (_) {
        (_.k_EDiscountCollisionType_Normal = "proximity"),
          (_.k_EDiscountCollisionType_MajorSales = "unique");
      })(_ || (_ = {})),
        (function (_) {
          (_.k_EDiscountPreventWeeklong_Normal = ""),
            (_.k_EDiscountPreventWeeklong_MajorSales = "on");
        })(_ || (_ = {}));
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
        _ = __webpack_require__._(_),
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
        m_mapDiscountEvents = new Map();
        m_discountEventsListCallback = new _._();
        m_mapDiscountEventCallback = new Map();
        m_mapAppList = new Map();
        m_mapAppListCallback = new Map();
        m_bLoadedViaInitOrFullLoad = !1;
        m_bLoadEventsRequestInFlight = !1;
        m_mapInflightDiscountLoadRequest = new Map();
        m_mapInflightDiscountAndAppListLoadRequest = new Map();
        GetFutureDiscountEvents() {
          const _ = (0, _._)();
          return Array.from(_.Get().m_mapDiscountEvents.values()).filter(
            (_) => _.end_date > _,
          );
        }
        GetAllDiscountEvents() {
          return Array.from(_.Get().m_mapDiscountEvents.values());
        }
        GetDiscountEventListCallback() {
          return this.m_discountEventsListCallback;
        }
        BLoadedViaInitOrFullLoad() {
          return this.m_bLoadedViaInitOrFullLoad;
        }
        GetDiscountEvent(_) {
          return this.m_mapDiscountEvents.get(_);
        }
        GetAppList(_) {
          return this.m_mapAppList.get(_);
        }
        GetDiscountEventCallback(_) {
          return (
            this.m_mapDiscountEventCallback.has(_) ||
              this.m_mapDiscountEventCallback.set(_, new _._()),
            this.m_mapDiscountEventCallback.get(_)
          );
        }
        GetAppListCallback(_) {
          return (
            this.m_mapAppListCallback.has(_) ||
              this.m_mapAppListCallback.set(_, new _._()),
            this.m_mapAppListCallback.get(_)
          );
        }
        async LoadAllDiscountEvents(_, _) {
          if (this.m_bLoadEventsRequestInFlight)
            return _._.k_EResultDuplicateRequest;
          const _ =
              _._.PARTNER_BASE_URL +
              "promotion/discounts/ajaxgetalldiscountevents/" +
              _,
            _ = {};
          let _ = null;
          try {
            this.m_bLoadEventsRequestInFlight = !0;
            const _ = await _().get(_, {
              params: _,
              cancelToken: _?.token,
            });
            if (
              ((this.m_bLoadEventsRequestInFlight = !1),
              200 == _?.status &&
                _.data?.success == _._.k_EResultOK &&
                _.data.events)
            ) {
              for (const _ of _.data.events)
                this.m_mapDiscountEvents.set(_._, _);
              return (
                (this.m_bLoadedViaInitOrFullLoad = !0),
                this.m_discountEventsListCallback.Dispatch(
                  this.GetAllDiscountEvents(),
                ),
                _._.k_EResultOK
              );
            }
            _ = {
              response: _,
            };
          } catch (_) {
            _ = _;
          }
          const _ = (0, _._)(_);
          return (
            console.error("Could not load Discount Events", _.strErrorMsg, _),
            _?.response?.data?.success ?? _._.k_EResultFail
          );
        }
        async CreateDiscountEvent(_, _, _, _, _, _, _, _) {
          const _ =
              _._.PARTNER_BASE_URL +
              "promotion/discounts/ajaxupdatediscountevent",
            _ = new FormData();
          _.append("sessionid", _._.SESSIONID),
            _.append("name", _),
            _.append("start_time", _.toString()),
            _.append("end_time", _.toString()),
            _.append("strJSONDiscountInfo", _(_, _, _, _, _));
          let _ = null;
          try {
            const _ = await _().post(_, _, {
              withCredentials: !0,
              cancelToken: _?.token,
            });
            if (
              200 == _?.status &&
              _.data?.success == _._.k_EResultOK &&
              _.data.eventid
            ) {
              const _ = {
                _: _.data.eventid,
                name: _,
                start_date: _,
                end_date: _,
                appids: _,
                publisherids: _,
                description: _,
                collision_type: _._.k_EDiscountCollisionType_Normal,
                event: _._,
                header: _,
                tooltip: _._,
                type: _._,
                prevent_weeklong: _._.k_EDiscountPreventWeeklong_Normal,
              };
              return (
                this.m_mapDiscountEvents.set(_._, _),
                this.m_discountEventsListCallback.Dispatch(
                  this.GetAllDiscountEvents(),
                ),
                _
              );
            }
            _ = {
              response: _,
            };
          } catch (_) {
            _ = _;
          }
          const _ = (0, _._)(_);
          return (
            console.error(
              "CDiscountEventStore.CreateDiscountEvent: failed",
              _.strErrorMsg,
              _,
            ),
            null
          );
        }
        async UpdateDiscountEventPublisherAndAppList(_, _, _, _) {
          const _ = this.m_mapDiscountEvents.get(_);
          if (!_)
            return (
              console.error(
                "UpdateDiscountEventPublisherAndAppList: updating discount event that we have not loaded",
                _,
              ),
              null
            );
          const _ =
              _._.PARTNER_BASE_URL +
              "promotion/discounts/ajaxupdatediscountevent",
            _ = new FormData();
          _.append("sessionid", _._.SESSIONID),
            _.append("start_time", _.start_date.toString()),
            _.append("end_time", _.end_date.toString()),
            _.append(
              "strJSONDiscountInfo",
              (function (_, _, _, _) {
                return JSON.stringify({
                  discount_event: {
                    eventid: _,
                    name: _.name,
                    header: _.header,
                    allowed_appids: _.join(","),
                    allowed_publisherids: __webpack_require__.join(","),
                    description: _.description,
                    collision_type: _.collision_type,
                    event: _.event,
                    tooltip: _.tooltip,
                    type: _.type,
                    prevent_weeklong: _.prevent_weeklong,
                  },
                });
              })(_, _, _, _),
            );
          let _ = null;
          try {
            const _ = await _().post(_, _, {
              withCredentials: !0,
              cancelToken: _?.token,
            });
            if (
              200 == _?.status &&
              _.data?.success == _._.k_EResultOK &&
              _.data.eventid
            ) {
              const _ = {
                ..._,
                appids: _,
                publisherids: _,
              };
              return (
                this.m_mapDiscountEvents.set(_._, _),
                this.m_discountEventsListCallback.Dispatch(
                  this.GetAllDiscountEvents(),
                ),
                _
              );
            }
            _ = {
              response: _,
            };
          } catch (_) {
            _ = _;
          }
          const _ = (0, _._)(_);
          return (
            console.error(
              "CDiscountEventStore.UpdateDiscountEventPublisherAndAppList: failed",
              _.strErrorMsg,
              _,
            ),
            null
          );
        }
        async LoadSingleDiscountEvent(_) {
          return this.m_mapDiscountEvents.has(_)
            ? this.m_mapDiscountEvents.get(_)
            : (this.m_mapInflightDiscountLoadRequest.has(_) ||
                this.m_mapInflightDiscountLoadRequest.set(
                  _,
                  this.InternalLoadSingleDiscountEvent(_),
                ),
              this.m_mapInflightDiscountLoadRequest.get(_));
        }
        async InternalLoadSingleDiscountEvent(_) {
          let _ = null;
          if (!_ || 0 == _.length || "0" == _) return null;
          try {
            const _ =
                _._.PARTNER_BASE_URL +
                "promotion/discounts/ajaxgetdiscounteventbyid",
              _ = {
                sessionid: _._.SESSIONID,
                discountid: _,
              },
              _ = await _().get(_, {
                params: _,
                withCredentials: !0,
              });
            if (
              200 == _?.status &&
              _?.data?.success == _._.k_EResultOK &&
              _?.data?.discount_event
            )
              return (
                this.m_mapDiscountEvents.set(_, _.data.discount_event),
                this.GetDiscountEventCallback(_).Dispatch(
                  _.data.discount_event,
                ),
                _.data.discount_event
              );
            _ = (0, _._)(_);
          } catch (_) {
            _ = (0, _._)(_);
          }
          return (
            console.error(
              "CDiscountEventStore.InternalLoadSingleDiscountEvent failed: " +
                _?.strErrorMsg,
              _,
            ),
            null
          );
        }
        async LoadSingleDiscountEventsAppList(_) {
          return this.m_mapAppList.has(_)
            ? {
                oDiscountEvent: this.m_mapDiscountEvents.get(_),
                rgAppList: this.m_mapAppList.get(_),
              }
            : (this.m_mapInflightDiscountAndAppListLoadRequest.has(_) ||
                this.m_mapInflightDiscountAndAppListLoadRequest.set(
                  _,
                  this.InternalLoadSingleDiscountEventsAppList(_),
                ),
              this.m_mapInflightDiscountAndAppListLoadRequest.get(_));
        }
        async InternalLoadSingleDiscountEventsAppList(_) {
          let _ = null;
          if (!_ || 0 == _.length) return null;
          try {
            const _ =
                _._.PARTNER_BASE_URL +
                "promotion/discounts/ajaxgetdiscounteventapplist",
              _ = {
                sessionid: _._.SESSIONID,
                discountid: _,
              },
              _ = await _().get(_, {
                params: _,
                withCredentials: !0,
              });
            if (
              200 == _?.status &&
              _?.data?.success == _._.k_EResultOK &&
              _?.data?.discount_event
            )
              return (
                this.m_mapDiscountEvents.set(_, _.data.discount_event),
                this.m_mapAppList.set(_, _.data.appid_list),
                this.GetDiscountEventCallback(_).Dispatch(
                  _.data.discount_event,
                ),
                this.GetAppListCallback(_).Dispatch(_.data.appid_list),
                {
                  oDiscountEvent: _.data.discount_event,
                  rgAppList: _.data.appid_list,
                }
              );
            _ = (0, _._)(_);
          } catch (_) {
            _ = (0, _._)(_);
          }
          return (
            console.error(
              "CDiscountEventStore.InternalLoadSingleDiscountEventsAppList failed: " +
                _?.strErrorMsg,
              _,
            ),
            null
          );
        }
        static s_Singleton;
        static Get() {
          return (
            _.s_Singleton || ((_.s_Singleton = new _()), _.s_Singleton.Init()),
            _.s_Singleton
          );
        }
        constructor() {
          "dev" == _._.WEB_UNIVERSE && (window.g_DiscountEventStore = this);
        }
        Init() {
          const _ = (0, _._)("discount_events", "application_config");
          if (
            (("dev" != _._.WEB_UNIVERSE && "beta" != _._.WEB_UNIVERSE) ||
              console.log(
                "DEV_DEBUG: CDiscountEventStore loading payload: ",
                _,
              ),
            this.BIsConfigValid(_))
          ) {
            for (const _ of _) this.m_mapDiscountEvents.set(_._, _);
            this.m_bLoadedViaInitOrFullLoad = !0;
          } else
            "dev" == _._.WEB_UNIVERSE &&
              _ &&
              console.error("CDiscountEventStore Invalid payload");
        }
        BIsConfigValid(_) {
          const _ = _;
          return !(!_ || !Array.isArray(_));
        }
      }
      function _() {
        return _.Get().GetFutureDiscountEvents();
      }
      function _() {
        return _.Get().GetDiscountEventListCallback();
      }
      function _(_) {
        const { rgDiscountEvents: _, eResult: __webpack_require__ } = _(0, _);
        let _ = [];
        return (
          _?.forEach((_) => {
            _.collision_type == _._.k_EDiscountCollisionType_MajorSales &&
              (_ = _.concat(_));
          }),
          {
            rgMajorSaleDiscountEvents: _,
            eResult: __webpack_require__,
          }
        );
      }
      function _(_, _) {
        const _ = _.Get().BLoadedViaInitOrFullLoad(),
          [_, _] = _.useState(_ ? _.Get().GetAllDiscountEvents() : null),
          [_, _] = _.useState(null),
          _ =
            _ || Number.parseInt((0, _._)("publisherid", "application_config"));
        (0, _._)(_.Get().GetDiscountEventListCallback(), _),
          _.useEffect(() => {
            _.Get().BLoadedViaInitOrFullLoad() ||
              _.Get().LoadAllDiscountEvents(_).then(_);
          }, [_, _]);
        const _ = _ ?? (_?.length ? _._.k_EResultOK : null);
        return _.useMemo(
          () => ({
            rgDiscountEvents: _ ? _ : _.Get().GetFutureDiscountEvents(),
            eResult: _,
          }),
          [_, _, _],
        );
      }
      function _(_) {
        return _.Get().GetDiscountEvent(_);
      }
      function _(_) {
        const { data: _ } = (function (_) {
          const [_, __webpack_require__] = (0, _.useState)(
              _.Get().GetDiscountEvent(_),
            ),
            [_, _] = _.useState(!!_);
          return (
            _.useEffect(() => {
              if ((!_ && _) || (_?._ != _ && _)) {
                (async () => {
                  try {
                    const _ = await _.Get().LoadSingleDiscountEvent(_);
                    _ && __webpack_require__(_);
                  } finally {
                    _(!1);
                  }
                })();
              } else _(!1);
            }, [_, _]),
            (0, _._)(_.Get().GetDiscountEventCallback(_), __webpack_require__),
            {
              data: _,
              isLoading: _,
            }
          );
        })(_);
        return _;
      }
      function _(_) {
        const [_, __webpack_require__] = (0, _.useState)(
            _.Get().GetDiscountEvent(_),
          ),
          [_, _] = (0, _.useState)(_.Get().GetAppList(_));
        return (
          (0, _.useEffect)(() => {
            ((!_ && _) || (_?._ != _ && _)) &&
              _.Get()
                .LoadSingleDiscountEventsAppList(_)
                .then((_) => {
                  _ && (__webpack_require__(_.oDiscountEvent), _(_.rgAppList));
                });
          }, [_?._, _, _]),
          (0, _._)(_.Get().GetDiscountEventCallback(_), __webpack_require__),
          (0, _._)(_.Get().GetAppListCallback(_), _),
          _
            ? {
                oDiscountEvent: _,
                rgAppList: _,
              }
            : null
        );
      }
      function _(_, _, _, _, _) {
        return JSON.stringify({
          discount_event: {
            name: _,
            publisherids: _?.join(","),
            appids: _?.join(","),
            description: _,
            event: _._,
            collision_type: _._.k_EDiscountCollisionType_Normal,
            header: _,
            tooltip: _._,
            type: _._,
          },
        });
      }
      function _() {
        return {
          fnCreateDiscountEvent: _.Get().CreateDiscountEvent,
        };
      }
      function _() {
        return {
          fnUpdateDiscountEventAppAndPublisherList:
            _.Get().UpdateDiscountEventPublisherAndAppList,
        };
      }
      (0, _._)([_._], _.prototype, "GetDiscountEvent", null),
        (0, _._)([_._], _.prototype, "GetAppList", null),
        (0, _._)([_._], _.prototype, "CreateDiscountEvent", null),
        (0, _._)(
          [_._],
          _.prototype,
          "UpdateDiscountEventPublisherAndAppList",
          null,
        );
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
        _ = __webpack_require__("chunkid");
      class _ {
        constructor() {
          (0, _._)(this);
        }
        static s_OptInRegs;
        m_mapRegistrations = new Map();
        m_mapRequestedAppIDs = new Map();
        m_mapOptInNameCallback = new Map();
        m_mapSingleAppRegistrationChange = new Map();
        m_loadCountChangeCallback = new _._();
        BHasOptInRegistration(_, _) {
          return Boolean(this.m_mapRegistrations.get(_)?.has(_));
        }
        GetOptInRegistrationPromise(_, _) {
          return this.m_mapRequestedAppIDs.get(_)?.get(_);
        }
        GetOptInRegistrationAndEligibilityForApp(_) {
          return this.m_mapRegistrations.get(_);
        }
        GetSingleAppRegistrationKey(_, _) {
          return `single_${_}_${_}`;
        }
        GetSingleAppRegistrationChange(_, _) {
          const _ = this.GetSingleAppRegistrationKey(_, _);
          return (
            this.m_mapSingleAppRegistrationChange.has(_) ||
              this.m_mapSingleAppRegistrationChange.set(_, new _._()),
            this.m_mapSingleAppRegistrationChange.get(_)
          );
        }
        GetExistingOptInRegistartion(_, _) {
          return this.m_mapRegistrations.has(_)
            ? this.m_mapRegistrations.get(_).get(_)
            : null;
        }
        GetLoadCountChange() {
          return this.m_loadCountChangeCallback;
        }
        GetLoadCount() {
          return this.m_mapRegistrations.size;
        }
        GetOptInRegistrationAndEligibilityForApps(_) {
          if (0 == _.length) return null;
          let _ = new Map();
          for (let _ of _) {
            let _ = this.m_mapRegistrations.get(_);
            if (_)
              for (let _ of _.keys()) {
                let _ = _.get(_);
                _ || (_ = 0), _.set(_, _ + 1);
              }
          }
          let _ = new Map(),
            _ = _[0];
          return (
            _.forEach((_, _) => {
              if (_ == _.length) {
                let _ = this.m_mapRegistrations.get(_).get(_);
                (0, _._)(_, "Missing OptIn Restration"),
                  __webpack_require__.set(_, _);
              }
            }),
            _.size > 0 ? _ : null
          );
        }
        BHasOptionOnRegistration(_, _, _) {
          const _ = this.GetRegistration(_, _);
          return (
            !(!_ || !_.opt_in) &&
            (!_ ||
              _?.jsondata?.dynamic_selection?.some(
                (_) =>
                  _ &&
                  _.section_id == _.section_id &&
                  _.list_selection?.some(
                    (_) =>
                      _ &&
                      _.list_id == _.list_id &&
                      _.selected_item_id?.includes(_.option_id),
                  ),
              ))
          );
        }
        BHasOptInTrailer(_, _) {
          const _ = this.GetRegistration(_, _);
          return Boolean(
            _ &&
              _.opt_in &&
              _.jsondata?.trailer_permission &&
              _.jsondata.rtime_granting_trailer,
          );
        }
        BHasOptInDemo(_, _) {
          const _ = this.GetRegistration(_, _);
          return Boolean(
            _ &&
              _.opt_in &&
              _.jsondata?.demo_permission &&
              _.jsondata.rtime_granting_demo,
          );
        }
        BHasOptInGameProfile(_, _) {
          const _ = this.GetRegistration(_, _);
          return Boolean(
            _ &&
              _.opt_in &&
              _.jsondata?.game_profile_intent &&
              _.jsondata.rtime_granting_profile,
          );
        }
        CreateRegistrationNotSaved(_, _) {
          console.log("CreateOrGetRegistration: Creating new registration");
          return {
            opt_in_name: _,
            opt_in: !1,
            appid: _,
            jsondata: {
              opt_in_name: _,
              opt_in: !1,
            },
          };
        }
        CreateOrGetRegistration(_, _) {
          let _ = this.m_mapRegistrations.get(_);
          _ ||
            ((_ = new Map()),
            this.m_mapRegistrations.set(_, _),
            this.GetLoadCountChange().Dispatch(this.m_mapRegistrations.size));
          let _ = __webpack_require__.get(_);
          return (
            _
              ? console.log(
                  "CreateOrGetRegistration: Re-using Previous Registration:",
                  _,
                )
              : (_ = this.CreateRegistrationNotSaved(_, _)),
            _
          );
        }
        GetOptInRegistrationAndEligibilityForAppOrCreate(_, _) {
          let _ = this.m_mapRegistrations.get(_);
          _ ||
            ((_ = new Map()),
            this.m_mapRegistrations.set(_, _),
            this.GetLoadCountChange().Dispatch(this.m_mapRegistrations.size));
          let _ = __webpack_require__.get(_);
          return (
            _
              ? console.log(
                  "CreateOrGetRegistration: Re-using Previous Registration:",
                  _,
                )
              : ((_ = this.CreateRegistrationNotSaved(_, _)),
                __webpack_require__.set(_, _)),
            _
          );
        }
        GetRegistration(_, _) {
          return this.m_mapRegistrations.has(_) &&
            this.m_mapRegistrations.get(_).has(_)
            ? this.m_mapRegistrations.get(_).get(_)
            : null;
        }
        GetAllOptInRegistrations(_) {
          const _ = this.m_mapRequestedAppIDs.get(_) || new Map();
          return Array.from(_.keys())
            .map((_) => this.m_mapRegistrations.get(_)?.get(_))
            .filter(Boolean);
        }
        GetOptInNameRegistrationsCallbackList(_) {
          return _
            ? (this.m_mapOptInNameCallback.has(_) ||
                this.m_mapOptInNameCallback.set(_, new _._()),
              this.m_mapOptInNameCallback.get(_))
            : null;
        }
        UpdateRegAndTrackInStore(_, _) {
          const _ = _.map((_) =>
            _.jsondata && "" !== _.jsondata
              ? {
                  ..._,
                  jsondata: JSON.parse(_.jsondata),
                }
              : {
                  ..._,
                  jsondata: {
                    opt_in_name: _,
                  },
                },
          );
          return (
            __webpack_require__.forEach((_) => {
              this.m_mapRegistrations.has(_.appid) ||
                (this.m_mapRegistrations.set(_.appid, new Map()),
                this.GetLoadCountChange().Dispatch(
                  this.m_mapRegistrations.size,
                )),
                this.m_mapRegistrations.get(_.appid).set(_, _);
            }),
            _
          );
        }
        async FetchOptInRegistrationForOptIn(_, _) {
          const _ = _._.PARTNER_BASE_URL + "optin/ajaxgetalloptinregistrations",
            _ = {
              sessionid: _._.SESSIONID,
              opt_in_name: _,
              opt_in_only: _,
            },
            _ = await _().get(_, {
              params: _,
              withCredentials: !0,
            });
          return _?.data?.data
            ? this.UpdateRegAndTrackInStore(_, _.data.data)
            : _?.data?.data;
        }
        async FetchPendingReviewOptInRegistrationn(_) {
          const _ =
              _._.PARTNER_BASE_URL + "optin/ajaxgetpendingreviewregistrations",
            _ = {
              sessionid: _._.SESSIONID,
              opt_in_name: _,
            },
            _ = await _().get(_, {
              params: _,
              withCredentials: !0,
            });
          return _?.data?.data
            ? this.UpdateRegAndTrackInStore(_, _.data.data)
            : _?.data?.data;
        }
        async LoadOptInRegistration(_, _, _) {
          if (this.GetRegistration(_, _)) return !0;
          const _ = this.m_mapRequestedAppIDs.get(_)?.get(_);
          if (_) return _;
          try {
            const _ = _._.PARTNER_BASE_URL + "optin/ajaxgetoptinregistation",
              _ = {
                sessionid: _._.SESSIONID,
                appid: _,
                opt_in_name: _,
              },
              _ = await _().get(_, {
                params: _,
                withCredentials: !0,
                cancelToken: _?.token,
              });
            if (
              _?.data?.success == _._.k_EResultOK &&
              _.data.optin_registration
            ) {
              if (
                ("string" == typeof _.data.optin_registration.jsondata &&
                  (_.data.optin_registration.jsondata = JSON.parse(
                    _.data.optin_registration.jsondata,
                  )),
                this.m_mapRegistrations.has(_))
              )
                this.m_mapRegistrations
                  .get(_)
                  .set(_, _.data.optin_registration);
              else {
                const _ = new Map();
                __webpack_require__.set(_, _.data.optin_registration),
                  this.m_mapRegistrations.set(_, _),
                  this.GetLoadCountChange().Dispatch(
                    this.m_mapRegistrations.size,
                  );
              }
              return !0;
            }
            {
              const _ = (0, _._)(_);
              console.error(
                "LoadOptInRegistration : failed with a response and: " +
                  _.strErrorMsg,
                _,
              );
            }
          } catch (_) {
            const _ = (0, _._)(_);
            console.error(
              "LoadOptInRegistration : failed with " + _.strErrorMsg,
              _,
            );
          }
          return !1;
        }
        async LoadMultiOptInRegistration(_, _, _, _) {
          if (0 == _.length || 0 == _.length) return !1;
          let _ = null;
          const _ = new Promise((_, _) => {
            _ = _;
          });
          (_ = _._(_).sort()),
            (_ = _._(_).sort()),
            _.forEach((_) => {
              this.m_mapRequestedAppIDs.has(_) ||
                this.m_mapRequestedAppIDs.set(_, new Map());
            });
          let _ = new Array();
          if (
            (_.forEach((_) => {
              _.some(
                (_) =>
                  !this.BHasOptInRegistration(_, _) &&
                  !this.GetOptInRegistrationPromise(_, _),
              ) &&
                (_.push(_),
                _.forEach((_) => this.m_mapRequestedAppIDs.get(_).set(_, _)));
            }),
            0 == _.length)
          )
            return !0;
          const _ = _._.PARTNER_BASE_URL + "optin/ajaxbatchgetoptinregistation";
          let _ = null;
          try {
            for (; _.length > 0; ) {
              let _ = 0;
              const _ = [];
              for (; _.length > 0 && _ < 5; ) {
                const _ = _.splice(0, 50),
                  _ = {
                    rgOptInNames: _.join(","),
                    rgAppIDs: _.join(","),
                    origin: self.origin,
                  };
                _.push(
                  _().get(_, {
                    params: _,
                    withCredentials: !0,
                    cancelToken: _?.token,
                  }),
                ),
                  (_ += 1);
              }
              const _ = await Promise.all(_);
              for (const _ of _) {
                if (
                  200 != _?.status ||
                  _.data?.success != _._.k_EResultOK ||
                  !_.data.optin_registrations?.length
                ) {
                  _ = {
                    response: _,
                  };
                  break;
                }
                this.InternalAddRegistrations(_.data.optin_registrations, _);
              }
              this.GetLoadCountChange().Dispatch(this.m_mapRegistrations.size);
            }
          } catch (_) {
            _ = _;
          }
          if (null == _) _(!0);
          else {
            const _ = (0, _._)(_);
            console.error(
              "Could not load OptIn for Apps",
              _,
              _,
              _.strErrorMsg,
              _,
            ),
              _(!1);
          }
          return _;
        }
        async RegisterAppForOptIn(_, _) {
          const _ = {
            opt_in_name: _.startsWith("sale_") ? _ : "sale_" + _,
            opt_in: !0,
          };
          return this.UpdateOptInRegistration(_, _);
        }
        async UpdateOptInRegistration(_, _) {
          let _ = null;
          try {
            const _ = new FormData();
            _.append("sessionid", _._.SESSIONID),
              Object.keys(_).forEach((_) => _.append(_, _[_]));
            const _ =
                _._.PARTNER_BASE_URL + "optin/ajaxupdateoptinregistration/" + _,
              _ = await _().post(_, _, {
                withCredentials: !0,
              });
            if (200 == _?.status && _.data?.success == _._.k_EResultOK)
              return null;
            _ = (0, _._)(_);
          } catch (_) {
            _ = (0, _._)(_);
          }
          return (
            console.error(
              "COptInRegistrations::UpdateOptInRegistration error " +
                _.strErrorMsg,
              _,
            ),
            _.strErrorMsg
          );
        }
        async UpdateOptInRegistrationJson(_, _, __webpack_require__ = !1) {
          let _ = null;
          try {
            const _ = new FormData();
            _.append("sessionid", _._.SESSIONID),
              _.append("appid", "" + _),
              _.append("opt_in_name", _.opt_in_name),
              _.append("jsondata", JSON.stringify(_)),
              __webpack_require__ && _.append("bCreatePendingInvite", "true");
            const _ =
                _._.PARTNER_BASE_URL +
                "optin/ajaxupdateoptinregistrationpayload/" +
                _,
              _ = await _().post(_, _, {
                withCredentials: !0,
              });
            if (200 == _?.status && _.data?.success == _._.k_EResultOK) {
              const _ = _.opt_in_name.startsWith("sale_")
                  ? _.opt_in_name
                  : "sale_" + _.opt_in_name,
                _ = this.m_mapRegistrations.get(_).get(_);
              _.jsondata = _;
              const _ = {
                ..._,
              };
              return (
                this.m_mapRegistrations.get(_).set(_.opt_in_name, _),
                this.GetSingleAppRegistrationChange(_, _.opt_in_name).Dispatch(
                  _,
                ),
                null
              );
            }
            _ = (0, _._)(_);
          } catch (_) {
            _ = (0, _._)(_);
          }
          return (
            console.error(
              "COptInRegistrations::UpdateOptInRegistrationJson error " +
                _.strErrorMsg,
              _,
            ),
            _.strErrorMsg
          );
        }
        async UpdateAppealState(_, _, _) {
          let _ = null;
          try {
            const _ = _.opt_in_name || _.jsondata.opt_in_name,
              _ = new FormData();
            _.append("sessionid", _._.SESSIONID),
              _.append("appid", "" + _),
              _.append("opt_in_name", _),
              _.append("approved", "" + _);
            const _ =
                _._.PARTNER_BASE_URL + "optin/ajaxsetappealsdecision/" + _,
              _ = await _().post(_, _, {
                withCredentials: !0,
              });
            if (200 == _?.status && _.data?.success == _._.k_EResultOK) {
              const _ = {
                ...this.m_mapRegistrations.get(_).get(_),
              };
              return (
                (_.accountid_appeal = _._.accountid),
                (_.appeal_state = _
                  ? _._.k_EPartnerAppOptInAppealState_Approved
                  : _._.k_EPartnerAppOptInAppealState_Denied),
                this.m_mapRegistrations.get(_).set(_, _),
                this.GetSingleAppRegistrationChange(_, _).Dispatch(_),
                !0
              );
            }
            _ = (0, _._)(_);
          } catch (_) {
            _ = (0, _._)(_);
          }
          return (
            console.error(
              "COptInRegistrations::UpdateAppealState error " + _.strErrorMsg,
              _,
            ),
            !1
          );
        }
        static Get() {
          return (
            _.s_OptInRegs ||
              ((_.s_OptInRegs = new _()),
              (window.COptInRegistrations = _.s_OptInRegs),
              _.s_OptInRegs.Init()),
            _.s_OptInRegs
          );
        }
        InternalAddRegistrations(_, _) {
          const _ = new Set();
          _.forEach((_) => {
            if (!Number.isNaN(_.appid)) {
              let _ = this.m_mapRegistrations.get(_.appid);
              if (
                (_ ||
                  ((_ = new Map()), this.m_mapRegistrations.set(_.appid, _)),
                _.jsondata && "string" == typeof _.jsondata)
              ) {
                const _ = _.jsondata;
                0 == _.trim().length
                  ? (_.jsondata = {})
                  : (_.jsondata = JSON.parse(_));
              }
              _.set(_.opt_in_name, _),
                _ && _.Increment(),
                __webpack_require__.add(_.opt_in_name);
            }
          }),
            Array.from(_).forEach((_) => {
              this.GetOptInNameRegistrationsCallbackList(_).Dispatch(
                this.GetAllOptInRegistrations(_),
              );
            });
        }
        Init() {
          let _ = JSON.parse(
            JSON.stringify(
              (0, _._)("optin_registrations", "application_config"),
            ),
          );
          this.ValidateStoreDefault(_) &&
            (this.InternalAddRegistrations(_),
            "dev" == _._.WEB_UNIVERSE &&
              console.log("COptInRegistrations: " + _.length, _));
        }
        ValidateStoreDefault(_) {
          const _ = _;
          return (
            !!(
              _ &&
              Array.isArray(_) &&
              _.length > 0 &&
              "object" == typeof _[0]
            ) &&
            "number" == typeof _[0].appid &&
            "string" == typeof _[0].opt_in_name
          );
        }
      }
      function _(_, _) {
        const _ = _.jsondata?.dynamic_selection;
        try {
          if (_) {
            const _ = __webpack_require__
              .filter((_) => _.section_id == _.section_id)
              .map((_) => _.list_selection);
            if (_.length > 0 && _[0]) {
              const _ = _[0]
                .filter((_) => _.list_id == _.list_id)
                .map((_) => _.selected_item_id);
              if (_.length > 0) return _[0];
            }
          }
        } catch (_) {
          console.log("error: dynamic section", _, _, _);
        }
        return [];
      }
      function _() {
        return _.useMemo(
          () => ({
            fnLoadMultiOptInRegistration: _.Get().LoadMultiOptInRegistration,
          }),
          [],
        );
      }
      function _(_, _, _) {
        const [_, _] = _.useState(null),
          _ = (0, _._)("useMultiLoadOptInAppReg");
        return (
          (0, _.useEffect)(() => {
            const _ = _?.filter(Boolean);
            _?.length > 0 && _?.length > 0
              ? _.Get()
                  .LoadMultiOptInRegistration(
                    _.map(() => _),
                    _,
                    _,
                    _,
                  )
                  .then(() => {
                    const _ = new Map();
                    _.forEach((_) => {
                      const _ = _.Get().GetRegistration(_, _);
                      _ && _.set(_, _);
                    }),
                      _(_);
                  })
              : _(new Map());
          }, [_, _, _, _]),
          _
        );
      }
      function _(_) {
        const [_, __webpack_require__] = _.useState(
          _.Get().GetAllOptInRegistrations(_),
        );
        return (
          (0, _._)(
            _.Get().GetOptInNameRegistrationsCallbackList(_),
            __webpack_require__,
          ),
          _
        );
      }
      function _(_) {
        const _ = _(_),
          [__webpack_require__, _] = _.useState({
            nAppOptedIn: 0,
            nAppEligible: 0,
            nAppOptedOut: 0,
            nAppIneligible: 0,
          });
        return (
          _.useEffect(() => {
            if (_?.length > 0) {
              const _ = {
                nAppOptedIn: 0,
                nAppEligible: 0,
                nAppOptedOut: 0,
                nAppIneligible: 0,
              };
              _.forEach((_) => {
                _.restricted || _.pruned
                  ? (_.nAppIneligible += 1)
                  : _.opt_in
                    ? ((_.nAppOptedIn += 1), (_.nAppEligible += 1))
                    : !_.time_opted_in || _.invited
                      ? (_.nAppEligible += 1)
                      : (_.nAppOptedOut += 1);
              }),
                JSON.stringify(_) != JSON.stringify(__webpack_require__) &&
                  _(_);
            }
          }, [_, __webpack_require__]),
          __webpack_require__
        );
      }
      function _(_, _) {
        const _ = (0, _._)({
          queryKey: ["useAllOptInRegistrationByName", _, Boolean(_)],
          queryFn: () => _.Get().FetchOptInRegistrationForOptIn(_, _),
          staleTime: 36e5,
        });
        return _.isLoading ? null : _.data;
      }
      function _(_) {
        const _ = (0, _._)({
          queryKey: ["useAllPendingReviewOptInRegistrationByName", _],
          queryFn: () => _.Get().FetchPendingReviewOptInRegistrationn(_),
          retry: !1,
          staleTime: 36e5,
          enabled: _?.length > 0,
        });
        return {
          rgPendingReviewRegistrations: _.isLoading ? null : _.data,
          bIsInError: _.isError,
        };
      }
      function _(_, _) {
        const _ = _(_, !1),
          [_, _] = (0, _.useState)(
            __webpack_require__?.find((_) => _.appid == _),
          );
        return (0, _._)(_.Get().GetSingleAppRegistrationChange(_, _), _), _;
      }
      function _(_, _) {
        const [__webpack_require__, _] = (0, _.useState)(
          _.Get().GetOptInRegistrationAndEligibilityForAppOrCreate(_, _),
        );
        return (
          (0, _._)(_.Get().GetSingleAppRegistrationChange(_, _), _),
          __webpack_require__
        );
      }
      function _(_, _) {
        const [__webpack_require__, _] = (0, _.useState)(
          _.Get().GetExistingOptInRegistartion(_, _),
        );
        return (
          (0, _._)(_.Get().GetSingleAppRegistrationChange(_, _), _),
          __webpack_require__
        );
      }
      function _() {
        return {
          fnUpdateOptInRegistrationJson: _.Get().UpdateOptInRegistrationJson,
        };
      }
      function _() {
        return {
          fnUpdateAppealState: _.Get().UpdateAppealState,
        };
      }
      function _() {
        const [_, _] = (0, _.useState)(_.Get().GetLoadCount());
        return (
          (0, _._)(_.Get().GetLoadCountChange(), _), _.Get().GetLoadCount()
        );
      }
      (0, _._)(
        [_._],
        _.prototype,
        "GetOptInRegistrationAndEligibilityForApp",
        null,
      ),
        (0, _._)(
          [_._],
          _.prototype,
          "GetOptInRegistrationAndEligibilityForApps",
          null,
        ),
        (0, _._)([_._], _.prototype, "LoadMultiOptInRegistration", null),
        (0, _._)([_._], _.prototype, "UpdateOptInRegistrationJson", null),
        (0, _._)([_._], _.prototype, "UpdateAppealState", null),
        (0, _._)([_._], _.prototype, "Init", null);
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
      });
      var _ = __webpack_require__("chunkid"),
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
      const _ = 95,
        _ = 10;
      class _ {
        m_mapPackageDiscountsById = new Map();
        m_mapDiscountCallbackList = new Map();
        m_mapPackageDiscountsByPackageId = new Map();
        m_mapPackageCallbackList = new Map();
        m_mapPackageDiscountsByDiscountEventId = new Map();
        m_mapDiscountEventCallbackList = new Map();
        m_allDiscountCallbackList = new _._();
        m_mapMaxDiscountPercentageByPackageId = new Map();
        m_mapExistingPackageRequests = new Map();
        static s_Singleton;
        static Get() {
          return (
            _.s_Singleton || ((_.s_Singleton = new _()), _.s_Singleton.Init()),
            _.s_Singleton
          );
        }
        constructor() {
          "dev" == _._.WEB_UNIVERSE && (window.g_PackageDiscountStore = this);
        }
        Init() {
          const _ = (0, _._)("package_discounts", "application_config");
          ("dev" != _._.WEB_UNIVERSE && "beta" != _._.WEB_UNIVERSE) ||
            console.log(
              "DEV_DEBUG: CPackageDiscountStore loading discount payload: ",
              _,
            ),
            this.BIsDiscountPayloadValid(_)
              ? this.InternalAddDiscounts(_)
              : "dev" == _._.WEB_UNIVERSE &&
                _ &&
                console.error("Invalid discount payload");
          const _ = (0, _._)("max_discount_percentages", "application_config");
          if (
            (("dev" != _._.WEB_UNIVERSE && "beta" != _._.WEB_UNIVERSE) ||
              console.log(
                "DEV_DEBUG: CDiscountGridStore loading max-discount-% payload: ",
                _,
              ),
            this.BIsMaxDiscountPayloadValid(_))
          )
            for (let _ in _)
              this.m_mapMaxDiscountPercentageByPackageId.set(Number(_), _[_]);
          else
            "dev" == _._.WEB_UNIVERSE &&
              _ &&
              console.error("Invalid max-discount-% payload");
        }
        InternalAddDiscounts(_, _) {
          const _ = new Set(),
            _ = new Set();
          for (const _ of _)
            _.discountEventID?.length || (_.discountEventID = _(_)),
              this.m_mapPackageDiscountsById.set(_.nDiscountID, _),
              this.GetCallbackListForDiscount(_.nDiscountID).Dispatch(_),
              this.m_mapPackageDiscountsByPackageId.has(_.packageID) ||
                this.m_mapPackageDiscountsByPackageId.set(
                  _.packageID,
                  new Map(),
                ),
              this.m_mapPackageDiscountsByPackageId
                .get(_.packageID)
                .set(_.nDiscountID, _),
              __webpack_require__.add(_.packageID),
              this.m_mapPackageDiscountsByDiscountEventId.has(
                _.discountEventID,
              ) ||
                this.m_mapPackageDiscountsByDiscountEventId.set(
                  _.discountEventID,
                  new Map(),
                ),
              this.m_mapPackageDiscountsByDiscountEventId
                .get(_.discountEventID)
                .set(_.nDiscountID, _),
              _.add(_.discountEventID);
          for (const _ of _ ?? [])
            this.m_mapPackageDiscountsByPackageId.has(_) ||
              this.m_mapPackageDiscountsByPackageId.set(_, new Map()),
              __webpack_require__.add(_);
          __webpack_require__.forEach((_) =>
            this.GetCallbackListForPackage(_).Dispatch(
              this.GetAllDiscountsForPackage(_),
            ),
          ),
            _.forEach((_) =>
              this.GetCallbackListForDiscountEvent(_).Dispatch(
                this.GetAllDiscountsForDiscountEvent(_),
              ),
            ),
            this.GetGlobalCallbackList().Dispatch(
              this.GetAllDiscountsForAllPackages(),
            );
        }
        InternalDeleteDiscount(_, _, _) {
          this.m_mapPackageDiscountsById.delete(_),
            this.m_mapPackageDiscountsByPackageId.get(_)?.delete(_),
            this.m_mapPackageDiscountsByDiscountEventId.get(_)?.delete(_),
            this.GetCallbackListForDiscount(_).Dispatch(null),
            this.GetCallbackListForPackage(_).Dispatch(
              this.GetAllDiscountsForPackage(_),
            ),
            this.GetCallbackListForDiscountEvent(_).Dispatch(
              this.GetAllDiscountsForDiscountEvent(_),
            ),
            this.GetGlobalCallbackList().Dispatch(
              this.GetAllDiscountsForAllPackages(),
            );
        }
        BIsDiscountPayloadValid(_) {
          const _ = _;
          if (_ && Array.isArray(_)) {
            if (0 == _.length) return !0;
            const _ = _[0];
            if (
              _.nDiscountID &&
              "number" == typeof _.nDiscountID &&
              _.packageID &&
              "number" == typeof _.packageID
            )
              return !0;
          }
          return !1;
        }
        BIsMaxDiscountPayloadValid(_) {
          const _ = _;
          if (_ && "object" == typeof _) {
            for (let _ in _)
              if (
                isNaN(parseInt(_)) ||
                (null !== _[_] && "number" != typeof _[_])
              )
                return !1;
            return !0;
          }
          return !1;
        }
        async LoadPackageDiscounts(_, _, __webpack_require__ = 0) {
          const _ = _._(_).sort().join(",");
          return (
            this.m_mapExistingPackageRequests.has(_) ||
              this.m_mapExistingPackageRequests.set(
                _,
                this.InternalLoadPackageDiscounts(_, _, __webpack_require__),
              ),
            this.m_mapExistingPackageRequests.get(_)
          );
        }
        async InternalLoadPackageDiscounts(_, _, __webpack_require__ = 0) {
          const _ = new Set();
          for (const _ of _)
            this.m_mapPackageDiscountsByPackageId.has(_) || 0 == _ || _.add(_);
          const _ = Array.from(_).sort();
          if (0 == _.length) return _._.k_EResultOK;
          let _ = null;
          const _ = new Promise((_, _) => {
              _ = _;
            }),
            _ = (0, _._)("publisherid", "application_config");
          let _ = null,
            _ = null;
          try {
            const _ = [],
              _ = new Array();
            for (; _.length > 0; ) {
              const _ = _.splice(0, 50);
              _.push(_),
                _.push(
                  this.LoadPackageDiscountsFromPHP(
                    _,
                    _,
                    _,
                    __webpack_require__,
                  ),
                );
            }
            const _ = await Promise.all(_),
              _ = [];
            for (const _ of _) {
              if (
                ((_ = _.unshift()),
                200 != _?.status ||
                  _.data?.success != _._.k_EResultOK ||
                  !_.data.discounts)
              ) {
                _ = {
                  response: _,
                };
                break;
              }
              _.data.discounts.forEach((_) => _.push(_));
            }
            null == _ && this.InternalAddDiscounts(_, Array.from(_));
          } catch (_) {
            _ = _;
          }
          if (null == _) _(_._.k_EResultOK);
          else {
            const _ = (0, _._)(_);
            console.error(
              "Could not load Discounts for packages",
              _,
              _.strErrorMsg,
              _,
            ),
              _(_?.response?.data?.success ?? _._.k_EResultFail);
          }
          return _;
        }
        async LoadPackageDiscountsFromPHP(_, _, _, _ = 0) {
          const _ = {
              packageids: _.join(","),
              origin: self.origin,
            },
            _ =
              _._.PARTNER_BASE_URL +
              "promotion/discounts/ajaxgetpackagediscounts/" +
              _;
          let _,
            _ = 3;
          for (; _-- > 0; )
            try {
              if (
                ((_ = await _().get(_, {
                  params: _,
                  withCredentials: !0,
                  cancelToken: _?.token,
                  timeout: _,
                })),
                200 == _?.status &&
                  _.data?.success == _._.k_EResultOK &&
                  _.data.discounts)
              )
                return _;
            } catch (_) {
              if (0 == _) throw _;
              console.error(_);
            }
          return _;
        }
        async SaveDiscountToServer(_, _) {
          const _ =
              _._.PARTNER_BASE_URL +
              "packages/createoreditdiscount/" +
              _.packageID,
            _ = new FormData();
          _.append("sessionid", _._.SESSIONID),
            _.nDiscountID && _.append("id", _.nDiscountID.toString()),
            _.append("name", _.strDiscountName),
            _.append("description", _.strDiscountDescription),
            _.discountEventID &&
              !_(_.discountEventID) &&
              _.append("type", _.discountEventID),
            _.append("percent", _.nDiscountPct.toString()),
            _.append("start_date", new Date(1e3 * _.rtStartDate).toISOString()),
            _.append("end_date", new Date(1e3 * _.rtEndDate).toISOString());
          let _ = null;
          try {
            const _ = await _().post(_, _, {
              withCredentials: !0,
              cancelToken: _?.token,
            });
            if (
              ((_.data.msg = _.data.msg ?? _.data.message),
              200 == _?.status &&
                _.data?.success == _._.k_EResultOK &&
                _.data.discountid)
            )
              return (
                (_.bChangedLocally = !1),
                (_.nDiscountID = _.data.discountid),
                (_.nDiscountPct = _.data.percentage),
                this.InternalAddDiscounts([_]),
                _.data
              );
            _ = {
              response: _,
            };
          } catch (_) {
            _ = _;
          }
          const _ = (0, _._)(_);
          return (
            console.error(
              "CPackageDiscountStore.SaveDiscountToServer: failed",
              _.strErrorMsg,
              _,
            ),
            _?.response?.data ?? {
              success: _._.k_EResultFail,
            }
          );
        }
        async DeleteDiscountOnServer(_, _, _, _) {
          const _ =
              _._.PARTNER_BASE_URL + "packages/removepackagediscount/" + _,
            _ = new FormData();
          _.append("sessionid", _._.SESSIONID),
            _.append("discountid", _.toString());
          let _ = null;
          try {
            const _ = await _().post(_, _, {
              withCredentials: !0,
              cancelToken: _?.token,
            });
            if (200 == _?.status && _.data?.success == _._.k_EResultOK)
              return this.InternalDeleteDiscount(_, _, _), _.data;
            _ = {
              response: _,
            };
          } catch (_) {
            _ = _;
          }
          const _ = (0, _._)(_);
          return (
            console.error(
              "CPackageDiscountStore.DeleteDiscountOnServer: failed",
              _.strErrorMsg,
              _,
            ),
            _?.response?.data ?? {
              success: _._.k_EResultFail,
            }
          );
        }
        GetCallbackListForDiscount(_) {
          return (
            this.m_mapDiscountCallbackList.has(_) ||
              this.m_mapDiscountCallbackList.set(_, new _._()),
            this.m_mapDiscountCallbackList.get(_)
          );
        }
        GetCallbackListForPackage(_) {
          return (
            this.m_mapPackageCallbackList.has(_) ||
              this.m_mapPackageCallbackList.set(_, new _._()),
            this.m_mapPackageCallbackList.get(_)
          );
        }
        GetCallbackListForDiscountEvent(_) {
          return (
            this.m_mapDiscountEventCallbackList.has(_) ||
              this.m_mapDiscountEventCallbackList.set(_, new _._()),
            this.m_mapDiscountEventCallbackList.get(_)
          );
        }
        GetGlobalCallbackList() {
          return this.m_allDiscountCallbackList;
        }
        GetDiscountByID(_) {
          return this.m_mapPackageDiscountsById.get(_);
        }
        GetAllDiscountsForPackage(_) {
          return this.m_mapPackageDiscountsByPackageId.has(_)
            ? Array.from(
                this.m_mapPackageDiscountsByPackageId.get(_)?.values() ?? [],
              )
            : null;
        }
        GetAllDiscountsForAllPackages() {
          return Array.from(this.m_mapPackageDiscountsById.values());
        }
        GetAllDiscountsForDiscountEvent(_) {
          return Array.from(
            this.m_mapPackageDiscountsByDiscountEventId.get(_)?.values() ?? [],
          );
        }
        GetMaxDiscountPercentage(_) {
          const _ = _;
          return this.m_mapMaxDiscountPercentageByPackageId.get(_) ?? _;
        }
        GetMaxDiscountPercentageForGroup(_) {
          const _ = _.map((_) => this.GetMaxDiscountPercentage(_));
          return Math.min(..._);
        }
      }
      function _(_) {
        return `custom-event-${_.rtStartDate}-${_.rtEndDate}-${(0, _._)(_.strDiscountName)}`;
      }
      function _(_) {
        return _.startsWith("custom-event-");
      }
      function _(_) {
        return _.Get().GetDiscountByID(_);
      }
      function _(_) {
        return _.Get().GetAllDiscountsForDiscountEvent(_);
      }
      function _(_) {
        return _.Get().GetAllDiscountsForPackage(_);
      }
      function _(_) {
        return _.Get().GetCallbackListForPackage(_);
      }
      function _() {
        return _.Get().GetAllDiscountsForAllPackages();
      }
      function _() {
        return _.Get().GetGlobalCallbackList();
      }
      function _() {
        return _.useCallback(
          (_, _, _) => _.Get().LoadPackageDiscounts(_, _, _),
          [],
        );
      }
      function _() {
        const _ = (_) => _.Get().SaveDiscountToServer(_),
          _ = (_, _, _) => _.Get().DeleteDiscountOnServer(_, _, _);
        return _.useMemo(
          () => ({
            fnSaveDiscount: _,
            fnDeleteDiscount: _,
          }),
          [],
        );
      }
      function _(_) {
        return new Map(
          Array.from(_.map((_) => [_, _.Get().GetDiscountByID(_)])),
        );
      }
      function _(_) {
        const _ = (0, _._)(),
          [__webpack_require__, _] = _.useState(
            _.Get().GetAllDiscountsForPackage(_),
          );
        return (
          (0, _._)(_.Get().GetCallbackListForPackage(_), _),
          _.useMemo(() => {
            let _ = null;
            if (null == __webpack_require__)
              return {
                deepestDiscount: _,
                bLoading: !0,
              };
            if (__webpack_require__?.length > 0)
              for (const _ of __webpack_require__)
                _.rtEndDate > _ ||
                  _.nDiscountPct <= 0 ||
                  ((null == _ ||
                    _.nDiscountPct > _.nDiscountPct ||
                    (_.nDiscountPct == _.nDiscountPct &&
                      _.rtEndDate > _.rtEndDate)) &&
                    (_ = _));
            return {
              deepestDiscount: _,
              bLoading: !1,
            };
          }, [_, _, __webpack_require__])
        );
      }
      function _(_) {
        const _ = (0, _._)();
        if (!_) return null;
        let _ = null;
        return (
          _.forEach((_) => {
            const _ = _.Get().GetAllDiscountsForPackage(_);
            if (_?.length > 0)
              for (const _ of _)
                _.rtEndDate > _ ||
                  _.nDiscountPct <= 0 ||
                  ((null == _ ||
                    _.nDiscountPct > _.nDiscountPct ||
                    (_.nDiscountPct == _.nDiscountPct &&
                      _.rtEndDate > _.rtEndDate)) &&
                    (_ = _));
          }),
          _
        );
      }
      function _(_, _, _) {
        const [_, _] = (0, _.useState)(),
          [_, _] = (0, _.useState)([]);
        return (
          (0, _.useEffect)(() => {
            if (_ < _ && _?.length > 0) {
              let _ = new Array(),
                _ = new Array(),
                _ = new Array();
              for (let _ = _; _ < _; _ += _._.PerDay) _.push(_), _.push(!1);
              _.forEach((_) => {
                const _ = _.Get().GetAllDiscountsForPackage(_);
                if (_?.length > 0)
                  for (const _ of _)
                    _.rtStartDate > _ ||
                      _.rtEndDate < _ ||
                      (_.push(_),
                      _.forEach((_, _) => {
                        _ < _.rtEndDate &&
                          _.rtStartDate < _ + _._.PerDay &&
                          (_[_] = !0);
                      }));
              }),
                _(_),
                _(_.filter((_) => !0 === _).length);
            } else _(0);
          }, [_, _, _]),
          {
            nDaysInDiscount: _,
            rgDiscountWithOverlap: _,
          }
        );
      }
      function _(_) {
        const _ = (0, _._)(),
          [__webpack_require__, _] = _.useState(
            _.Get().GetAllDiscountsForAllPackages(),
          );
        return (
          (0, _._)(_.Get().GetGlobalCallbackList(), _),
          _.useMemo(() => {
            let _ = null;
            if (null == __webpack_require__)
              return {
                mostRecentDiscount: _,
                bLoading: !0,
              };
            for (const _ of _) {
              const _ = _.Get().GetAllDiscountsForPackage(_) ?? [];
              for (const _ of _)
                _.rtStartDate &&
                  _.rtEndDate &&
                  _.nDiscountPct &&
                  _.rtStartDate < _ &&
                  (!_ || _.rtEndDate < _.rtEndDate) &&
                  (_ = _);
            }
            return {
              mostRecentDiscount: _,
              bLoading: !1,
            };
          }, [_, _, __webpack_require__])
        );
      }
      function _(_) {
        const [_, __webpack_require__] = _.useState(
          _.Get().GetAllDiscountsForDiscountEvent(_),
        );
        return (
          (0, _._)(
            _.Get().GetCallbackListForDiscountEvent(_),
            __webpack_require__,
          ),
          _
        );
      }
      function _(_) {
        const [_, __webpack_require__] = _.useState(
          _.Get().GetAllDiscountsForPackage(_),
        );
        (0, _._)(_.Get().GetCallbackListForPackage(_), __webpack_require__);
        const [_, _] = _.useState(!1),
          _ = _();
        return (
          _.useEffect(() => {
            if (!_ && _) {
              if (!_ && _) {
                const _ = _().CancelToken.source();
                _([_]).then(() => {
                  _.token.reason || _(!0);
                });
              }
            } else _ || _(!0);
          }, [_, _, _, _, _]),
          _
        );
      }
      function _(_) {
        return _.Get().GetMaxDiscountPercentage(_);
      }
      function _(_) {
        return _.some(
          (_) => _.nDiscountPct > _.Get().GetMaxDiscountPercentage(_.packageID),
        );
      }
      function _(_) {
        return _.Get().GetMaxDiscountPercentageForGroup(_);
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
      });
      var _,
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
      function _(_, _) {
        return (
          (!_ && 0 == (_?.nDiscountPct ?? 0)) ||
          (!!_ && _.nDiscountPct == _?.nDiscountPct)
        );
      }
      !(function (_) {
        (_[(_.k_ELoading = 0)] = "k_ELoading"),
          (_[(_.k_EOkToDiscount = 1)] = "k_EOkToDiscount"),
          (_[(_.k_ENeedsOptIn = 2)] = "k_ENeedsOptIn"),
          (_[(_.k_EOptInOptedOut = 3)] = "k_EOptInOptedOut"),
          (_[(_.k_EOptInRestricted = 4)] = "k_EOptInRestricted"),
          (_[(_.k_EOptInNoBaseAppToRegister = 5)] =
            "k_EOptInNoBaseAppToRegister"),
          (_[(_.k_EJustReleased = 6)] = "k_EJustReleased"),
          (_[(_.k_EPriceIncreased = 7)] = "k_EPriceIncreased"),
          (_[(_.k_ECooldownWindow = 8)] = "k_ECooldownWindow"),
          (_[(_.k_EOverlapsExisting = 9)] = "k_EOverlapsExisting"),
          (_[(_.k_ENoAppInRequiredList = 10)] = "k_ENoAppInRequiredList"),
          (_[(_.k_EOptInMultiAppPackageRegisterSomeGame = 11)] =
            "k_EOptInMultiAppPackageRegisterSomeGame");
      })(_ || (_ = {}));
      const _ = 30,
        _ = _ * _._.PerDay - 1.5 * _._.PerHour,
        _ = 10 * _._.PerMinute;
      class _ {
        m_mapPackageStateForDiscountEvents = new Map();
        m_mapLocalPackageDiscountOverrides = new Map();
        m_mapDiscountPackageCallbackList = new Map();
        m_mapDiscountGridCellCallbackList = new Map();
        m_mapDiscountEventColumnCallbackList = new Map();
        m_localPackageDiscountOverrideCallbackList = new _._();
        static s_Singleton;
        static s_initializationCallbackList = new _._();
        static Get() {
          return (
            _.s_Singleton || ((_.s_Singleton = new _()), _.s_Singleton.Init()),
            _.s_Singleton
          );
        }
        static IsInitialized() {
          return !!_.s_Singleton;
        }
        constructor() {
          "dev" == _._.WEB_UNIVERSE && (window.g_DiscountGridEditStore = this);
        }
        Init() {
          for (const _ of (0, _._)())
            _.Get().ComputePackageState(_),
              (0, _._)(_).Register(() => {
                _.Get().ComputePackageState(_);
              });
          (0, _._)().Register(() => {
            for (const _ of (0, _._)()) _.Get().ComputePackageState(_, !0);
          }),
            _.s_initializationCallbackList.Dispatch(!0);
        }
        OverridePackageDiscountPct(_, _, _) {
          const _ = _.Get().m_mapPackageStateForDiscountEvents.get(_)?.get(_);
          if (_?.eState != _.k_EOkToDiscount)
            return (
              console.error(
                "Cannot change discount in current state:",
                _.eState,
              ),
              null
            );
          const _ = _.discount,
            _ = (0, _._)(_),
            _ = {
              nDiscountID: _?.nDiscountID,
              packageID: _,
              nDiscountPct: _,
              strDiscountName: _.name,
              strDiscountDescription: _.description,
              rtStartDate: _.start_date,
              rtEndDate: _.end_date,
              discountEventID: _._,
              bChangedLocally: !0,
            };
          return _(_, _)
            ? null
            : (this.m_mapLocalPackageDiscountOverrides.has(_) ||
                this.m_mapLocalPackageDiscountOverrides.set(_, new Map()),
              this.m_mapLocalPackageDiscountOverrides.get(_).set(_, _),
              this.ComputePackageState(_),
              this.GetLocalPackageDiscountOverrideCallbackList().Dispatch(
                this.GetLocalPackageDiscountOverrides(),
              ),
              _);
        }
        GetHighestPackageDiscount(_) {
          let _ = this.m_mapPackageStateForDiscountEvents.get(_);
          if (!_) return 0;
          let _ = 0;
          return (
            _.forEach((_, _) => {
              _.eState == _.k_EOkToDiscount &&
                (_ = Math.max(_, _.discount?.nDiscountPct || 0));
            }),
            _
          );
        }
        GetLocalPackageDiscountOverrides() {
          const _ = [];
          return (
            this.m_mapLocalPackageDiscountOverrides.forEach((_) =>
              _.forEach((_) => {
                _(_, _.nDiscountID && (0, _._)(_.nDiscountID)) || _.push(_);
              }),
            ),
            _.sort(_),
            _
          );
        }
        DiscardAllLocalPackageDiscountOverrides(_) {
          this.m_mapLocalPackageDiscountOverrides.clear();
          for (const _ of _) this.ComputePackageState(_);
          this.GetLocalPackageDiscountOverrideCallbackList().Dispatch([]);
        }
        DiscardLocalPackageDiscountOverride(_, _) {
          this.m_mapLocalPackageDiscountOverrides.get(_)?.delete(_),
            this.ComputePackageState(_),
            this.GetLocalPackageDiscountOverrideCallbackList().Dispatch(
              this.GetLocalPackageDiscountOverrides(),
            );
        }
        OptInRegistrationUpdatedForApp(_, _) {
          const _ = Array.from(this.m_mapPackageStateForDiscountEvents.values())
            .map((_) => _.get(_))
            .filter((_) => _?.nBaseAppID == _)
            .map((_) => _.packageID);
          __webpack_require__?.forEach((_) => this.ComputePackageState(_));
        }
        GetPackageDiscountsIncludingOverrides(_) {
          const _ = (0, _._)() - _,
            _ = (0, _._)(_);
          if (!_) return null;
          const _ = new Map(
            __webpack_require__
              .filter((_) => _.rtEndDate > _)
              .map((_) => [_.discountEventID, _]),
          );
          return (
            this.m_mapLocalPackageDiscountOverrides.get(_)?.forEach((_, _) => {
              _(_, _.get(_)) || _.set(_, _);
            }),
            _
          );
        }
        GetDiscountGridCellCallbackList(_, _) {
          if (!_ || !_) return null;
          this.m_mapDiscountGridCellCallbackList.has(_) ||
            this.m_mapDiscountGridCellCallbackList.set(_, new Map());
          const _ = this.m_mapDiscountGridCellCallbackList.get(_);
          return (
            __webpack_require__.has(_) || __webpack_require__.set(_, new _._()),
            __webpack_require__.get(_)
          );
        }
        GetDiscountPackageCallbackList(_) {
          if (!_) return null;
          let _ = this.m_mapDiscountPackageCallbackList.get(_);
          return (
            _ ||
              ((_ = new _._()),
              this.m_mapDiscountPackageCallbackList.set(_, _)),
            _
          );
        }
        GetDiscountEventColumnCallbackList(_) {
          return _
            ? (this.m_mapDiscountEventColumnCallbackList.has(_) ||
                this.m_mapDiscountEventColumnCallbackList.set(_, new _._()),
              this.m_mapDiscountEventColumnCallbackList.get(_))
            : null;
        }
        GetLocalPackageDiscountOverrideCallbackList() {
          return this.m_localPackageDiscountOverrideCallbackList;
        }
        GetAllPackageStatesForDiscountEvent(_) {
          const _ = [];
          return (
            _.Get().m_mapPackageStateForDiscountEvents.forEach((_, _) =>
              _.push(__webpack_require__.get(_)),
            ),
            _
          );
        }
        ComputePackageState(_, _) {
          const _ = _._.Get().GetPackage(_);
          if (!_) return;
          const _ = (0, _._)(),
            _ = (0, _._)(_),
            _ = _.nBaseAppID;
          let _ = _ && _._.Get().GetOptInRegistrationAndEligibilityForApp(_);
          _ ||
            _ ||
            (_ = _._.Get().GetOptInRegistrationAndEligibilityForApps(
              __webpack_require__.GetIncludedAppIDs(),
            ));
          const _ = this.GetPackageDiscountsIncludingOverrides(_),
            _ = !_,
            _ = _
              ? null
              : Array.from(_.values()).sort(
                  (_, _) => _.rtStartDate - _.rtStartDate,
                );
          this.m_mapPackageStateForDiscountEvents.has(_) ||
            this.m_mapPackageStateForDiscountEvents.set(_, new Map());
          const _ = this.m_mapPackageStateForDiscountEvents.get(_);
          for (const _ of _) {
            if (_ && _.has(_._)) continue;
            const _ = {
              packageID: _,
              discountEventID: _._,
              nBaseAppID: _,
            };
            if (
              ((_.discount = _?.get(_._)),
              (_.bChangedLocally = !!_.discount?.bChangedLocally),
              _)
            )
              _.eState = _.k_ELoading;
            else if (_.discount?.nDiscountPct > 0) {
              _.eState = _.k_EOkToDiscount;
              const _ = _.opt_in_name && _?.get(_.opt_in_name);
              _ && (_.optInReg = _);
            } else {
              if (((_.eState = _.k_EOkToDiscount), _(_, _)))
                _.eState = _.k_ENoAppInRequiredList;
              else if (_.opt_in_name) {
                const { ePackageDiscountState: _, optInRegistration: _ } = _(
                  _.opt_in_name,
                  _,
                  _,
                  _,
                  _,
                );
                (_.eState = _), (_.optInReg = _);
              }
              if (
                _.eState != _.k_ENoAppInRequiredList &&
                _.eState != _.k_EOptInRestricted &&
                _.eState != _.k_EOptInNoBaseAppToRegister
              ) {
                const _ = _(_, _, _);
                _.ePackageDiscountState != _.k_EOkToDiscount &&
                  ((_.eState = _.ePackageDiscountState),
                  (_.rgConflictDetails = _.rgConflictingDiscounts.map(
                    (_) =>
                      (0, _._)(_.discountEventID)?.name ?? _.strDiscountName,
                  )));
              }
            }
            (_ = _),
              (_ = _.get(_._)),
              (!!_ == !!_ &&
                _?.packageID == _?.packageID &&
                _?.discountEventID == _?.discountEventID &&
                _?.eState == _?.eState &&
                _?.rgConflictDetails?.length == _?.rgConflictDetails?.length &&
                _?.optInReg == _?.optInReg &&
                _(_?.discount, _?.discount) &&
                _?.nBaseAppID == _?.nBaseAppID &&
                _?.bChangedLocally == _?.bChangedLocally) ||
                (_.set(_._, _),
                this.GetDiscountPackageCallbackList(_).Dispatch(),
                this.GetDiscountGridCellCallbackList(_, _._).Dispatch(_),
                this.GetDiscountEventColumnCallbackList(_._).Dispatch(
                  this.GetAllPackageStatesForDiscountEvent(_._),
                ));
          }
          var _, _;
        }
        GetAvailableDiscountEventsInRange(_, _, _) {
          const _ = this.m_mapPackageStateForDiscountEvents.get(_),
            _ = new Set([
              _.k_EOkToDiscount,
              _.k_EOptInMultiAppPackageRegisterSomeGame,
              _.k_ENeedsOptIn,
              _.k_EOptInOptedOut,
            ]);
          return (0, _._)()
            .filter(
              (_) =>
                _ <= _.start_date &&
                _.end_date <= _ &&
                _.has(_.get(_._).eState),
            )
            .map((_) => _._);
        }
        GetFurthestCooldownFromPastDiscounts(_) {
          const _ = (0, _._)();
          let _ = _;
          return (
            _.filter((_) => _.rtStartDate < _)
              .filter((_) => {
                const _ = (0, _._)(_.discountEventID);
                return (
                  _?.collision_type != _._.k_EDiscountCollisionType_MajorSales
                );
              })
              .forEach((_) => {
                _.rtEndDate + _ < _ && (_ = _.rtEndDate + _);
              }),
            _
          );
        }
        GetFutureDiscountRanges(_) {
          const _ = _._.Get().GetPackage(_),
            _ = this.GetPackageDiscountsIncludingOverrides(_);
          if (!_ || !_) return [];
          const _ = Array.from(__webpack_require__.values()).sort(
              (_, _) => _.rtStartDate - _.rtStartDate,
            ),
            _ = (0, _._)(),
            _ = Math.max(
              _,
              _.GetReleaseDateRTime() + _,
              (0, _._)(_) + _,
              this.GetFurthestCooldownFromPastDiscounts(_),
            ),
            _ = [],
            _ = new Set();
          let _ = _;
          for (let _ = 0; _ < _.length; _++) {
            const _ = _[_];
            if (0 == _.nDiscountPct) continue;
            if (_.rtStartDate < _) continue;
            const _ = (0, _._)(_.discountEventID);
            let _ = _.rtStartDate - _;
            const _ =
              _?.collision_type == _._.k_EDiscountCollisionType_MajorSales;
            if (_ && ((_ = _.rtStartDate + _), _ + 1 < _.length)) {
              const _ = _[_ + 1],
                _ = (0, _._)(_.discountEventID);
              _?.collision_type != _._.k_EDiscountCollisionType_MajorSales &&
                (_ = Math.min(_, _.rtStartDate - _));
            }
            if (_ + _._.PerDay < _) {
              const _ = {
                bIsAvailable: !0,
                rtStartDate: _,
                rtEndDate: _,
                rgDiscountEventIDs: this.GetAvailableDiscountEventsInRange(
                  _,
                  _,
                  _,
                ),
              };
              _.push(_), _.rgDiscountEventIDs.forEach((_) => _.add(_));
            }
            const _ = {
              bIsAvailable: !1,
              rtStartDate: _.rtStartDate,
              rtEndDate: _.rtEndDate,
              discount: _,
              rgDiscountEventIDs: [_.discountEventID],
            };
            if (
              (_.push(_),
              _.add(_.discountEventID),
              (_ = _.rtEndDate + _),
              _ && ((_ = _.rtEndDate - _), _ - 1 >= 0))
            ) {
              const _ = _[_ - 1],
                _ = (0, _._)(_.discountEventID);
              _?.collision_type != _._.k_EDiscountCollisionType_MajorSales &&
                (_ = Math.max(_, _.rtEndDate + _));
            }
            const _ = (0, _._)(_);
            _ - _ <= 2 * _._.PerHour && (_ = _);
          }
          const _ = (0, _._)(_ + _._.PerYear / 2);
          if (_ + _._.PerDay < _) {
            const _ = {
              bIsAvailable: !0,
              rtStartDate: _,
              rtEndDate: _,
              rgDiscountEventIDs: this.GetAvailableDiscountEventsInRange(
                _,
                _,
                _,
              ),
            };
            _.push(_), _.rgDiscountEventIDs.forEach((_) => _.add(_));
          }
          const _ = (0, _._)().filter(
            (_) =>
              _.collision_type == _._.k_EDiscountCollisionType_MajorSales &&
              !_.has(_._) &&
              this.m_mapPackageStateForDiscountEvents.get(_).get(_._).eState ==
                _.k_EOkToDiscount,
          );
          for (const _ of _)
            for (let _ = 0; _ < _.length; _++)
              if (
                _[_].rtStartDate <= _.start_date &&
                (_ == _.length - 1 || _.start_date < _[_ + 1].rtStartDate)
              ) {
                const _ = {
                  bIsAvailable: !0,
                  bMajorSaleOnly: !0,
                  rtStartDate: _.start_date,
                  rtEndDate: _.end_date,
                  rgDiscountEventIDs: [_._],
                };
                _.splice(_ + 1, 0, _);
                break;
              }
          return _;
        }
      }
      function _(_, _, _) {
        let _ = _.k_EOkToDiscount;
        const _ = [];
        let _ = !1;
        const _ = _._.Get().GetPackage(_);
        if (_?.GetReleaseDateRTime() > _.start_date - _)
          return (
            (_ = _.k_EJustReleased),
            {
              ePackageDiscountState: _,
              rgConflictingDiscounts: _,
              bChangedLocally: _,
            }
          );
        if ((0, _._)(_) > _.start_date - _)
          return (
            (_ = _.k_EPriceIncreased),
            {
              ePackageDiscountState: _,
              rgConflictingDiscounts: _,
              bChangedLocally: _,
            }
          );
        for (const _ of _) {
          if (_._ == _.discountEventID) continue;
          const _ = (0, _._)(_.discountEventID),
            _ =
              _.collision_type == _._.k_EDiscountCollisionType_MajorSales ||
              _?.collision_type == _._.k_EDiscountCollisionType_MajorSales,
            _ = _ ? _.start_date + _ : _.start_date - _,
            _ = _ ? _.end_date - _ : _.end_date + _;
          if (_.rtEndDate > _ && _ > _.rtStartDate) {
            if (((_ = _ || _.bChangedLocally), 0 == _.nDiscountPct)) continue;
            _.push(_), (_ = _ ? _.k_EOverlapsExisting : _.k_ECooldownWindow);
          }
        }
        return {
          ePackageDiscountState: _,
          rgConflictingDiscounts: _,
          bChangedLocally: _,
        };
      }
      function _(_, _, _, _, _) {
        let _,
          _ = _.k_EOptInNoBaseAppToRegister;
        if (_)
          (_ = _.get(_)),
            !_ || _.restricted || _.pruned
              ? ((_ = _.k_EOptInRestricted),
                (_ = {
                  restricted: !0,
                }))
              : (_ = _.opt_in
                  ? _.k_EOkToDiscount
                  : _.invited || !_.time_opted_in
                    ? _.k_ENeedsOptIn
                    : _.k_EOptInOptedOut);
        else if (!_.nBaseAppID) {
          const _ = __webpack_require__
            .GetIncludedAppIDs()
            .map((_) =>
              _._.Get()
                .GetOptInRegistrationAndEligibilityForApp(_)
                ?.get(_.opt_in_name),
            )
            .filter(Boolean);
          _.some((_) => _.opt_in)
            ? (_ = _.k_EOkToDiscount)
            : _.some((_) => !_.restricted && !_.pruned) &&
              (_ = _.k_EOptInMultiAppPackageRegisterSomeGame);
        }
        return {
          ePackageDiscountState: _,
          optInRegistration: _,
        };
      }
      function _(_, _) {
        if (_.appids?.length > 0) {
          if (_?.GetIncludedAppIDs()?.length) {
            const _ = new Set(_.appids);
            for (const _ of _.GetIncludedAppIDs()) {
              if (__webpack_require__.has(_)) return !1;
              const _ = _._.Get().GetApp(_)?.GetParentAppID();
              if (_ && __webpack_require__.has(_)) return !1;
            }
          }
          return !0;
        }
        return !1;
      }
      function _(_, _) {
        if (_.packageID != _.packageID) {
          const _ = _._.Get().GetPackage(_.packageID)?.GetName(),
            _ = _._.Get().GetPackage(_.packageID)?.GetName();
          return (0, _._)(_, _);
        }
        {
          const _ = 0 == _.nDiscountPct;
          return _ != (0 == _.nDiscountPct)
            ? _
              ? -1
              : 1
            : _.rtStartDate - _.rtStartDate;
        }
      }
      function _() {
        return _.useCallback(() => {
          _.Get();
        }, []);
      }
      function _() {
        const [_, _] = _.useState(_.Get().GetLocalPackageDiscountOverrides());
        return (
          (0, _._)(_.Get().GetLocalPackageDiscountOverrideCallbackList(), _), _
        );
      }
      function _() {
        return _.useCallback(
          () => _.Get().GetLocalPackageDiscountOverrides()?.length > 0,
          [],
        );
      }
      function _() {
        return _.useCallback(
          (_) => _.Get().DiscardAllLocalPackageDiscountOverrides(_),
          [],
        );
      }
      function _() {
        return _.useCallback(
          (_, _) => _.Get().OptInRegistrationUpdatedForApp(_, _),
          [],
        );
      }
      function _() {
        return _.useCallback(
          (_, _) => _.Get().DiscardLocalPackageDiscountOverride(_, _),
          [],
        );
      }
      function _(_, _) {
        const _ = _.Get().m_mapPackageStateForDiscountEvents.get(_)?.get(_);
        return _?.eState == _.k_EOkToDiscount
          ? (_?.discount?.nDiscountPct ?? 0)
          : null;
      }
      function _(_, _) {
        const [__webpack_require__, _] = _.useState(() =>
          _.Get().m_mapPackageStateForDiscountEvents.get(_)?.get(_),
        );
        (0, _._)(_.Get().GetDiscountGridCellCallbackList(_, _), _);
        return {
          packageState: __webpack_require__,
          fnSetDiscountPct: _.useCallback(
            (_) => {
              _.Get().OverridePackageDiscountPct(_, _, _);
            },
            [_, _],
          ),
        };
      }
      function _() {
        return _.useCallback((_, _, _) => {
          const _ = [];
          for (const _ of _) {
            const _ = _.Get().OverridePackageDiscountPct(_, _, _);
            _ && _.push(_);
          }
          return _;
        }, []);
      }
      function _(_) {
        const _ = _(_);
        return _.useMemo(
          () => ({
            nAlreadySet: _.alreadySet.size,
            nAvailable: _.available.size,
            nConflicts: _.conflicts.size,
            nNeedRegistration: _.needRegistration.size,
            nIneligibile: _.ineligibile.size,
          }),
          [_],
        );
      }
      function _(_) {
        const [_, __webpack_require__] = _.useState(() => _(_)),
          _ = _.useCallback(() => {
            __webpack_require__(_(_));
          }, [_]);
        return (
          _.useEffect(_, [_, _]),
          (0, _._)(_.Get().GetDiscountEventColumnCallbackList(_), _),
          _
        );
      }
      function _(_) {
        const _ = _.Get().GetAllPackageStatesForDiscountEvent(_),
          _ = {
            alreadySet: new Set(),
            available: new Set(),
            conflicts: new Set(),
            needRegistration: new Set(),
            ineligibile: new Set(),
          };
        for (const _ of _)
          switch (_?.eState) {
            case _.k_ELoading:
              break;
            case _.k_EOkToDiscount:
              (_.discount?.nDiscountPct ?? 0) > 0
                ? _.alreadySet.add(_.packageID)
                : _.available.add(_.packageID);
              break;
            case _.k_EJustReleased:
            case _.k_EPriceIncreased:
            case _.k_ECooldownWindow:
            case _.k_EOverlapsExisting:
              _.conflicts.add(_.packageID);
              break;
            case _.k_ENeedsOptIn:
            case _.k_EOptInOptedOut:
              _.needRegistration.add(_.packageID);
              break;
            case _.k_EOptInRestricted:
            case _.k_EOptInNoBaseAppToRegister:
            case _.k_ENoAppInRequiredList:
              _.ineligibile.add(_.packageID);
          }
        return _;
      }
      function _(_) {
        return (
          !!(0, _._)(_).some((_) => _.nDiscountPct > 0) ||
          !(
            !_.IsInitialized() ||
            !_.Get()
              .GetAllPackageStatesForDiscountEvent(_)
              .some((_) => (_.discount?.nDiscountPct ?? 0) > 0)
          )
        );
      }
      function _(_, _ = !0) {
        if ((0, _._)(_)) return !0;
        if (!_ && _.startsWith("weeklongdeal_")) return !1;
        const _ = (0, _._)(_);
        if (!_?.opt_in_name) return !0;
        const _ = _._.Get().GetAllOptInRegistrations(_.opt_in_name);
        return !!_?.length && _.some((_) => !_.restricted && !_.pruned);
      }
      function _(_) {
        const _ = (function () {
            const [_, _] = _.useState(_.IsInitialized());
            return (0, _._)(_.s_initializationCallbackList, _), _;
          })(),
          [__webpack_require__, _] = _.useState(
            _ ? _.Get().GetFutureDiscountRanges(_) : [],
          ),
          _ = _.useCallback(
            () => _(_ ? _.Get().GetFutureDiscountRanges(_) : []),
            [_, _],
          );
        return (
          (0, _._)(
            _ && _.Get().GetLocalPackageDiscountOverrideCallbackList(),
            _,
          ),
          (0, _._)(_ && (0, _._)(_), _),
          _.useEffect(_, [_, _, _]),
          __webpack_require__
        );
      }
      function _(_) {
        let [_, __webpack_require__] = _.useState(() =>
            _.Get().GetHighestPackageDiscount(_),
          ),
          _ = _.useCallback(() => {
            __webpack_require__(_.Get().GetHighestPackageDiscount(_));
          }, [_, __webpack_require__]);
        return (0, _._)(_.Get().GetDiscountPackageCallbackList(_), _), _;
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
      });
      var _,
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid");
      !(function (_) {
        (_.k_OptionDeepest = "deepest-past"),
          (_.k_OptionMostRecent = "most-recent"),
          (_.k_OptionNextAvailable = "next-available");
      })(_ || (_ = {}));
      const _ = "related-discount-view";
      class _ {
        m_rgDiscountEvents;
        m_mapDiscountEventsByID = new Map();
        m_discountEventsCallbackList = new _._();
        m_mapLastTimeRaisedPrices = new Map();
        m_strSelectedDiscountEventID = null;
        m_bIncludeWeeklongEvents = !1;
        m_bIncludeCustomEvents = !0;
        m_bIncludeIneligibleEvents = !1;
        m_bIncludeConflictsInSingleEventView = !0;
        m_bEditingDailyDealDiscount = !1;
        m_eRelatedDiscountView = _.k_OptionDeepest;
        m_RelatedDiscountViewCallbackList = new _._();
        m_gridEventSelectionParametersCallbackList = new _._();
        m_setVisibleDiscountEventIDs = new Set();
        m_visibleDiscountEventIDsCallbackList = new _._();
        static s_Singleton;
        static Get() {
          return (
            _.s_Singleton || ((_.s_Singleton = new _()), _.s_Singleton.Init()),
            _.s_Singleton
          );
        }
        constructor() {
          "dev" == _._.WEB_UNIVERSE && (window.g_DiscountGridStore = this);
        }
        Init() {
          const _ = (0, _._)("price_increase_times", "application_config");
          if (
            (("dev" != _._.WEB_UNIVERSE && "beta" != _._.WEB_UNIVERSE) ||
              console.log("DEV_DEBUG: CDiscountGridStore loading payload: ", _),
            this.BIsPriceIncreasePayloadValid(_))
          )
            for (let _ in _)
              this.m_mapLastTimeRaisedPrices.set(Number(_), _[_]);
          else
            "dev" == _._.WEB_UNIVERSE &&
              console.error("CDiscountGridStore Invalid payload");
          (this.m_eRelatedDiscountView =
            window.localStorage.getItem(_) ?? _.k_OptionDeepest),
            this.UpdateDiscountEventsForGrid(),
            (0, _._)().Register(() => this.UpdateDiscountEventsForGrid()),
            (0, _._)().Register(() => this.UpdateDiscountEventsForGrid()),
            this.SetEventSelectionParametersFromURL(),
            this.UpdateVisibleDiscountEventIDs();
        }
        UpdateDiscountEventsForGrid() {
          const _ = (0, _._)(),
            _ = (0, _._)(),
            _ = new Set(_.map((_) => _._)),
            _ = [],
            _ = (0, _._)();
          for (const _ of _)
            _.rtEndDate > _ &&
              (__webpack_require__.has(_.discountEventID) ||
                (_.push({
                  _: _.discountEventID,
                  name: _.strDiscountName,
                  start_date: _.rtStartDate,
                  end_date: _.rtEndDate,
                  description: _.strDiscountDescription,
                }),
                __webpack_require__.add(_.discountEventID)));
          (this.m_rgDiscountEvents &&
            _.size == this.m_rgDiscountEvents.length &&
            !this.m_rgDiscountEvents.some(
              (_) => !__webpack_require__.has(_._),
            )) ||
            ((this.m_rgDiscountEvents = _.concat(_)),
            this.m_rgDiscountEvents.sort((_, _) =>
              _.start_date == _.start_date
                ? _.end_date - _.end_date
                : _.start_date - _.start_date,
            ),
            (this.m_mapDiscountEventsByID = new Map(
              this.m_rgDiscountEvents.map((_) => [_._, _]),
            )),
            this.UpdateVisibleDiscountEventIDs(),
            this.m_discountEventsCallbackList.Dispatch(
              this.m_rgDiscountEvents,
            ));
        }
        UpdateVisibleDiscountEventIDs() {
          this.SetEventSelectionParametersFromURL(),
            (this.m_setVisibleDiscountEventIDs = new Set());
          for (const _ of this.m_rgDiscountEvents) {
            let _ = null == this.m_strSelectedDiscountEventID;
            _ && !this.m_bIncludeCustomEvents && (0, _._)(_._) && (_ = !1),
              _ &&
                !this.m_bIncludeWeeklongEvents &&
                _._.startsWith("weeklongdeal_") &&
                !(0, _._)(_._) &&
                (_ = !1),
              !_ ||
                this.m_bIncludeIneligibleEvents ||
                (0, _._)(_._) ||
                (_ = !1),
              this.m_strSelectedDiscountEventID == _._ && (_ = !0),
              _ && this.m_setVisibleDiscountEventIDs.add(_._);
          }
          this.m_visibleDiscountEventIDsCallbackList.Dispatch(
            this.m_setVisibleDiscountEventIDs,
          );
        }
        BIsPriceIncreasePayloadValid(_) {
          const _ = _;
          if (_ && "object" == typeof _) {
            for (let _ in _)
              if (isNaN(parseInt(_)) || "number" != typeof _[_]) return !1;
            return !0;
          }
          return !1;
        }
        SetEventSelectionParametersFromURL() {
          const _ = new URLSearchParams(window.location.search);
          if (_.has("de")) {
            const _ = decodeURIComponent(_.get("de"));
            this.m_mapDiscountEventsByID.has(_) &&
              (this.m_strSelectedDiscountEventID = _);
          }
          if (_.has("wd")) {
            const _ = _.get("wd");
            this.m_bIncludeWeeklongEvents = "0" != _;
          }
          if (_.has("cd")) {
            const _ = _.get("cd");
            this.m_bIncludeCustomEvents = "0" != _;
          }
          if (_.has("cf")) {
            const _ = _.get("cf");
            this.m_bIncludeConflictsInSingleEventView = "0" != _;
          }
          if (_.has("dd")) {
            const _ = _.get("dd");
            this.m_bEditingDailyDealDiscount = "0" != _;
          }
        }
        HandleEventSelectionChangeAndNotifyListeners() {
          const _ = new URL(window.location.href);
          this.m_strSelectedDiscountEventID
            ? _.searchParams.set(
                "de",
                encodeURIComponent(this.m_strSelectedDiscountEventID),
              )
            : _.searchParams.delete("de"),
            this.m_bIncludeWeeklongEvents
              ? _.searchParams.set("wd", "1")
              : _.searchParams.delete("wd"),
            this.m_bIncludeCustomEvents
              ? _.searchParams.delete("cd")
              : _.searchParams.set("cd", "0"),
            this.m_bIncludeConflictsInSingleEventView
              ? _.searchParams.delete("cf")
              : _.searchParams.set("cf", "0"),
            this.m_bEditingDailyDealDiscount &&
              ((this.m_bEditingDailyDealDiscount = !1),
              _.searchParams.delete("dd")),
            window.history.replaceState({}, "", _.toString()),
            this.UpdateVisibleDiscountEventIDs(),
            this.m_gridEventSelectionParametersCallbackList.Dispatch(
              this.GetEventSelectionParameters(),
            );
        }
        GetEventSelectionParameters() {
          return {
            bSingleDiscountEventView: null != this.m_strSelectedDiscountEventID,
            strSelectedEvent: this.m_strSelectedDiscountEventID,
            bEditingDailyDealDiscount: this.m_bEditingDailyDealDiscount,
            fnSelectEvent: (_) => {
              (this.m_strSelectedDiscountEventID = _),
                this.HandleEventSelectionChangeAndNotifyListeners();
            },
            bIncludeWeeklongEvents: this.m_bIncludeWeeklongEvents,
            fnSetIncludeWeeklongEvents: (_) => {
              (this.m_bIncludeWeeklongEvents = _),
                this.HandleEventSelectionChangeAndNotifyListeners();
            },
            bIncludeCustomEvents: this.m_bIncludeCustomEvents,
            fnSetIncludeCustomEvents: (_) => {
              (this.m_bIncludeCustomEvents = _),
                this.HandleEventSelectionChangeAndNotifyListeners();
            },
            bIncludeConflictsInSingleEventView:
              this.m_bIncludeConflictsInSingleEventView,
            fnSetIncludeConflictsInSingleEventView: (_) => {
              (this.m_bIncludeConflictsInSingleEventView = _),
                this.HandleEventSelectionChangeAndNotifyListeners();
            },
          };
        }
      }
      function _(_) {
        return _.Get().m_mapLastTimeRaisedPrices.get(_) ?? 0;
      }
      function _() {
        return _.Get().m_rgDiscountEvents;
      }
      function _(_) {
        return _.Get().m_mapDiscountEventsByID.get(_);
      }
      function _() {
        return _.Get().m_discountEventsCallbackList;
      }
      function _() {
        const [_, _] = _.useState(_.Get().m_rgDiscountEvents);
        return (0, _._)(_.Get().m_discountEventsCallbackList, _), _;
      }
      function _() {
        const [_, _] = _.useState(_.Get().m_setVisibleDiscountEventIDs);
        return (0, _._)(_.Get().m_visibleDiscountEventIDsCallbackList, _), _;
      }
      function _(_) {
        const [_, __webpack_require__] = _.useState(
            _.Get().m_mapDiscountEventsByID.get(_),
          ),
          _ = _.useCallback(
            () => __webpack_require__(_.Get().m_mapDiscountEventsByID.get(_)),
            [_],
          );
        return (
          (0, _._)(_.Get().m_discountEventsCallbackList, _),
          _.useEffect(_, [_, _]),
          _
        );
      }
      function _(_ = !0) {
        const [_, __webpack_require__] = _.useState(
            _.Get().GetEventSelectionParameters(),
          ),
          _ = _ ? _.Get().m_gridEventSelectionParametersCallbackList : null;
        return (0, _._)(_, __webpack_require__), _;
      }
      function _() {
        const [_, _] = _.useState(_.Get().m_eRelatedDiscountView);
        (0, _._)(_.Get().m_RelatedDiscountViewCallbackList, _);
        return [
          _,
          _.useCallback((_) => {
            (_.Get().m_eRelatedDiscountView = _),
              window.localStorage.setItem(_, _),
              _.Get().m_RelatedDiscountViewCallbackList.Dispatch(_);
          }, []),
        ];
      }
      function _() {
        return _.useCallback(() => {
          _.Get().UpdateVisibleDiscountEventIDs();
        }, []);
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
      });
      var _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__._(_),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__._(_),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid");
      const _ = (0, _.createContext)(void 0);
      function _() {
        const _ = (0, _.useContext)(_);
        if (!_) throw new Error("Missing GridRowContextProvider");
        return _;
      }
      function _(_) {
        const {
            children: _,
            fnBLocalChangesExist: __webpack_require__,
            fnWarnUser: _,
          } = _,
          _ = (0, _._)(),
          _ = _.useMemo(
            () => ({
              client: _,
              fnBLocalChangesExist: __webpack_require__,
              fnWarnUser: _,
            }),
            [__webpack_require__, _, _],
          );
        return _.createElement(
          _.Provider,
          {
            value: _,
          },
          _,
        );
      }
      function _(_) {
        const { row: _ } = _,
          _ = _.original.packageID || 0,
          _ = (0, _._)(_);
        let _ = (0, _._)(_) < _,
          _ = _()(
            _().PackageNameColumn,
            _ && _().PackagePricesBelowMin,
            _.original.packageType,
          ),
          _ = _
            ? (0, _._)("#PackageGrid_VisitPackageDiscount_Tooltip_Error")
            : (0, _._)("#PackageGrid_VisitPackagePricing_Tooltip");
        return _.createElement(_, {
          className: _,
          toolTip: _,
          ..._,
        });
      }
      function _(_) {
        const { row: _ } = _,
          _ = _.original.packageID || 0,
          _ = (0, _._)(_);
        let _ = _()(
            _().PackageNameColumn,
            _ && _().PackagePricesBelowMin,
            _.original.packageType,
          ),
          _ = _
            ? (0, _._)("#PackageGrid_VisitPackagePricing_Tooltip_Error")
            : (0, _._)("#PackageGrid_VisitPackagePricing_Tooltip");
        return _.createElement(_, {
          className: _,
          toolTip: _,
          showUnreleased: !0,
          ..._,
        });
      }
      function _(_) {
        const { column: _ } = _,
          [__webpack_require__, _] = (0, _.useState)(_.getFilterValue() ?? "");
        return _.createElement(
          "div",
          {
            className: _().PackageNameHeader,
          },
          (0, _._)("#PackageGrid_Column_PackageName"),
          _.createElement("input", {
            placeholder: (0, _._)("#PackageGrid_PackageNameFilterInputPrompt"),
            value: __webpack_require__,
            onChange: (_) => {
              _(_.target.value.toString()),
                (0, _.startTransition)(() =>
                  _.column.setFilterValue(_.target.value.toString()),
                );
            },
          }),
        );
      }
      function _(_) {
        const { fnBLocalChangesExist: _, fnWarnUser: __webpack_require__ } =
            _(),
          { cell: _, row: _, className: _, toolTip: _ } = _,
          _ = _.original.packageID,
          _ =
            _.getValue() ??
            _.createElement(
              "span",
              {
                className: _().UnknownValue,
              },
              " ",
              (0, _._)("#PackageGrid_PackageID", _),
            );
        return _.createElement(
          _,
          {
            fnBLocalChangesExist: _,
            fnWarnUser: __webpack_require__,
            href: `${_._.PARTNER_BASE_URL}store/packagelanding/${_}`,
            strToolTip: _,
            strClassName: _,
          },
          _.showUnreleased &&
            !("released" in _.original && _.original.released) &&
            _.createElement(
              _.Fragment,
              null,
              _.createElement(
                _._,
                {
                  toolTipContent: (0, _._)(
                    "#PackageGrid_PackageUnpublishedTooltip",
                  ),
                },
                _.createElement(_.ZyV, {
                  width: "14px",
                  height: "14px",
                }),
              ),
              "  ",
            ),
          " ",
          _,
        );
      }
      function _() {
        return _.useMemo(
          () => ({
            accessorKey: "packageID",
            header: (0, _._)("#PackageGrid_Column_PackageID"),
            enableSorting: !1,
            size: 90,
            cell: (_) =>
              _.createElement(_, {
                ..._,
                toolTip: (0, _._)("#PackageGrid_Column_PackageID_ttip"),
              }),
            meta: {
              cellClassname: _().PackageID,
            },
          }),
          [],
        );
      }
      function _(_, _, _) {
        let _ = /^\d+$/.test(_);
        const _ = _.original.packageID;
        return (
          !!(_ && _ && _.toString().startsWith(_)) ||
          _.getValue(_)
            .toLowerCase()
            .includes(__webpack_require__.toLowerCase())
        );
      }
      function _(_) {
        return _.useMemo(
          () => ({
            accessorKey: "packageName",
            header: _,
            enableSorting: !1,
            meta: {
              strHeaderTooltip: (0, _._)(
                "#PackageGrid_Column_PackageName_ttip",
              ),
              cellClassname: _().PackageName,
            },
            filterFn: _,
            cell: _ ? _ : _,
            size: 300,
          }),
          [_],
        );
      }
      function _() {
        return _.useMemo(
          () => ({
            accessorKey: "appids",
          }),
          [],
        );
      }
      function _() {
        return _.useMemo(
          () => ({
            accessorKey: "packageType",
            header: (0, _._)("#PackageGrid_Column_PackageType"),
            enableSorting: !1,
            meta: {
              strHeaderTooltip: (0, _._)(
                "#PackageGrid_Column_PackageType_ttip",
              ),
              cellClassname: _().PackageType,
            },
          }),
          [],
        );
      }
      function _(_) {
        const { row: _ } = _,
          { fnBLocalChangesExist: __webpack_require__, fnWarnUser: _ } = _(),
          _ = _.original.appids,
          _ = _?.length ?? 0,
          _ = _.original.packageID;
        return _.createElement(
          _,
          {
            fnBLocalChangesExist: __webpack_require__,
            fnWarnUser: _,
            href: `${_._.PARTNER_BASE_URL}store/packagelanding/${_}`,
            strToolTip: (0, _._)("#PackageGrid_VisitPackagePricing_Tooltip"),
          },
          1 == _ ? "1 appid" : _ + " appids",
        );
      }
      function _() {
        return _.useMemo(
          () => ({
            accessorKey: "appName",
            header: (0, _._)("#PackageGrid_Column_AppName"),
            cell: _,
            size: 80,
            sortingFn: _._,
            meta: {
              strHeaderTooltip: (0, _._)("#PackageGrid_Column_AppName_ttip"),
              bDisableSortButton: !0,
              cellClassname: _().AppCount,
            },
          }),
          [],
        );
      }
      function _(_) {
        const _ = _.groupingValue,
          _ = (0, _._)("#PackageGrid_NoBaseGameFoundForPackage");
        return _.createElement(
          _.Fragment,
          null,
          _ === _
            ? _.createElement(
                "span",
                {
                  title: (0, _._)("#PackageGrid_NoBaseGameExplanation"),
                },
                _,
                " (?)",
              )
            : _,
          _.createElement(
            "span",
            {
              className: _().RowItemCount,
            },
            "(",
            (0, _._)("#PackageGrid_PackageCount", _.subRows.length),
            ")",
          ),
        );
      }
      function _(_) {
        const {
          fnBLocalChangesExist: _,
          fnWarnUser: __webpack_require__,
          href: _,
          children: _,
          strToolTip: _,
          strClassName: _,
        } = _;
        return _.createElement(
          _._,
          {
            toolTipContent: _,
            className: _,
          },
          _.createElement(
            "a",
            {
              onClick: (_) => {
                _() && (_.preventDefault(), __webpack_require__(_, _));
              },
              href: _,
            },
            _,
          ),
        );
      }
    },
    chunkid: (module, module_exports, __webpack_require__) => {
      "use strict";
      __webpack_require__._(module_exports, {
        _: () => _,
      });
      var _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid");
      function _(_) {
        const _ = _.useCallback(
          (_) => {
            if (_())
              return (
                _.preventDefault(),
                (_.returnValue = (0, _._)(
                  "#PackageGrid_NavigationWarning_Title",
                )),
                _.returnValue
              );
          },
          [_],
        );
        _.useEffect(
          () => (
            window.addEventListener("beforeunload", _),
            () => window.removeEventListener("beforeunload", _)
          ),
          [_],
        );
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
      const _ = new Set([
          _._.k_EStoreAppType_Game,
          _._.k_EStoreAppType_Mod,
          _._.k_EStoreAppType_Software,
          _._.k_EStoreAppType_Tool,
        ]),
        _ = new Set([
          _._.k_EStoreAppType_DLC,
          _._.k_EStoreAppType_Video,
          _._.k_EStoreAppType_Music,
        ]);
      function _(_) {
        let _,
          _ = !1,
          _ = !1;
        const _ = new Set();
        for (const _ of _?.GetIncludedAppIDs() ?? []) {
          const _ = _._.Get().GetApp(_);
          if (_ && _.has(_.GetAppType())) (_ = !0), _.add(_.GetID());
          else if (_ && _.has(_.GetAppType())) {
            _ = !0;
            const _ = _.GetParentAppID();
            _ && _.add(_);
          }
        }
        let _ = null;
        1 == _.size
          ? ((_ = Array.from(_)[0]), (_ = _._.Get().GetApp(_)?.GetName()))
          : _.size > 1 &&
            (_ = (0, _._)("#PackageGrid_MultipleBaseGamesFoundForPackage")),
          _ || (_ = (0, _._)("#PackageGrid_NoBaseGameFoundForPackage"));
        return {
          baseAppName: _,
          contents: _ && _ ? "BOTH" : _ ? "GAME" : _ ? "DLC" : null,
          nBaseAppID: _,
        };
      }
      const _ = {
        include_release: !0,
      };
      async function _(_, _) {
        if (
          (await _._.Get().HintLoadStorePackages(_, _)) != _._.k_EResultOK ||
          _.token.reason
        )
          return null;
        const _ = [];
        _.map((_) => _._.Get().GetPackage(_))
          .filter((_) => !!_)
          .forEach((_) => __webpack_require__.push(..._.GetIncludedAppIDs()));
        const _ = Array.from(new Set(_));
        if (
          (await _._.Get().HintLoadStoreApps(_, _)) != _._.k_EResultOK ||
          _.token.reason
        )
          return null;
        const _ = _.map((_) => _._.Get().GetApp(_))
            .filter((_) => !!_?.GetParentAppID())
            .map((_) => _.GetParentAppID()),
          _ = Array.from(new Set(_));
        if (
          (await _._.Get().HintLoadStoreApps(_, _)) != _._.k_EResultOK ||
          _.token.reason
        )
          return null;
        return Array.from(new Set(_.concat(_)));
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
      });
      var _,
        _,
        _,
        _,
        _,
        _,
        _,
        _,
        _,
        _,
        _,
        _,
        _,
        _,
        _,
        _,
        _,
        _,
        _,
        _,
        _,
        _,
        _,
        _,
        _,
        _,
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__._(_),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid");
      !(function (_) {
        (_[(_.k_EPartnerEmailNotifcationType_Invalid = 0)] =
          "k_EPartnerEmailNotifcationType_Invalid"),
          (_[(_.k_EPartnerEmailNotifcationType_PartnerReminderPreRelease = 1)] =
            "k_EPartnerEmailNotifcationType_PartnerReminderPreRelease");
      })(_ || (_ = {})),
        (function (_) {
          (_[(_.k_EMembershipEvent_Invalid = 0)] =
            "k_EMembershipEvent_Invalid"),
            (_[(_.k_EMembershipEvent_AccountAddedToPartner = 1)] =
              "k_EMembershipEvent_AccountAddedToPartner"),
            (_[(_.k_EMembershipEvent_AccountRemovedFromPartner = 2)] =
              "k_EMembershipEvent_AccountRemovedFromPartner"),
            (_[(_.k_EMembershipEvent_GroupRightsModified = 3)] =
              "k_EMembershipEvent_GroupRightsModified"),
            (_[(_.k_EMembershipEvent_AddedToGroup = 4)] =
              "k_EMembershipEvent_AddedToGroup"),
            (_[(_.k_EMembershipEvent_RemovedFromGroup = 5)] =
              "k_EMembershipEvent_RemovedFromGroup"),
            (_[(_.k_EMembershipEvent_PublisherRightsModified = 6)] =
              "k_EMembershipEvent_PublisherRightsModified");
        })(_ || (_ = {})),
        (function (_) {
          (_[(_.k_EBetaProgram_Invalid = 0)] = "k_EBetaProgram_Invalid"),
            (_[(_.k_EBetaProgram_PartnerUTMStats = 1)] =
              "k_EBetaProgram_PartnerUTMStats"),
            (_[(_.k_EBetaProgram_SteamStatsAPI = 2)] =
              "k_EBetaProgram_SteamStatsAPI"),
            (_[(_.k_EBetaProgram_SteamLearn = 3)] =
              "k_EBetaProgram_SteamLearn");
        })(_ || (_ = {})),
        (function (_) {
          (_[(_.k_ENavigationDeviceType_Unknown = 0)] =
            "k_ENavigationDeviceType_Unknown"),
            (_[(_.k_ENavigationDeviceType_PC = 1)] =
              "k_ENavigationDeviceType_PC"),
            (_[(_.k_ENavigationDeviceType_Mobile = 2)] =
              "k_ENavigationDeviceType_Mobile");
        })(_ || (_ = {})),
        (function (_) {
          (_[(_.k_EAppCreationCreditStatus_Available = 0)] =
            "k_EAppCreationCreditStatus_Available"),
            (_[(_.k_EAppCreationCreditStatus_Redeemed = 1)] =
              "k_EAppCreationCreditStatus_Redeemed"),
            (_[(_.k_EAppCreationCreditStatus_Revoked = 2)] =
              "k_EAppCreationCreditStatus_Revoked"),
            (_[(_.k_EAppCreationCreditStatus_Pending = 3)] =
              "k_EAppCreationCreditStatus_Pending");
        })(_ || (_ = {})),
        (function (_) {
          (_[(_.k_EAppCreationCreditType_Standard = 0)] =
            "k_EAppCreationCreditType_Standard"),
            (_[(_.k_EAppCreationCreditType_Granted = 1)] =
              "k_EAppCreationCreditType_Granted"),
            (_[(_.k_EAppCreationCreditType_Complimentary = 2)] =
              "k_EAppCreationCreditType_Complimentary");
        })(_ || (_ = {})),
        (function (_) {
          (_[(_.k_EAppReportingPlatform_All = 0)] =
            "k_EAppReportingPlatform_All"),
            (_[(_.k_EAppReportingPlatform_Windows = 1)] =
              "k_EAppReportingPlatform_Windows"),
            (_[(_.k_EAppReportingPlatform_Mac = 2)] =
              "k_EAppReportingPlatform_Mac"),
            (_[(_.k_EAppReportingPlatform_Linux = 4)] =
              "k_EAppReportingPlatform_Linux");
        })(_ || (_ = {})),
        (function (_) {
          (_[(_.k_EReleaseRequestStateAny = 0)] = "k_EReleaseRequestStateAny"),
            (_[(_.k_EReleaseRequestStateNotReady = 1)] =
              "k_EReleaseRequestStateNotReady"),
            (_[(_.k_EReleaseRequestStatePending = 2)] =
              "k_EReleaseRequestStatePending"),
            (_[(_.k_EReleaseRequestStateApproved = 3)] =
              "k_EReleaseRequestStateApproved");
        })(_ || (_ = {})),
        (function (_) {
          (_[(_.k_EPartnerNotesType_Misc = 0)] = "k_EPartnerNotesType_Misc"),
            (_[(_.k_EPartnerNotesType_SetStatus_Active = 1)] =
              "k_EPartnerNotesType_SetStatus_Active"),
            (_[(_.k_EPartnerNotesType_SetStatus_Archived = 2)] =
              "k_EPartnerNotesType_SetStatus_Archived"),
            (_[(_.k_EPartnerNotesType_SetStatus_Banned = 3)] =
              "k_EPartnerNotesType_SetStatus_Banned"),
            (_[(_.k_EPartnerNotesType_Warning = 4)] =
              "k_EPartnerNotesType_Warning"),
            (_[(_.k_EPartnerNotesType_Legacy = 5)] =
              "k_EPartnerNotesType_Legacy"),
            (_[(_.k_EPartnerNotesType_SetStatus_Retired = 6)] =
              "k_EPartnerNotesType_SetStatus_Retired");
        })(_ || (_ = {})),
        (function (_) {
          (_[(_.k_EDocumentationFileType_Invalid = 0)] =
            "k_EDocumentationFileType_Invalid"),
            (_[(_.k_EDocumentationFileType_Download = 1)] =
              "k_EDocumentationFileType_Download"),
            (_[(_.k_EDocumentationFileType_Image = 2)] =
              "k_EDocumentationFileType_Image");
        })(_ || (_ = {})),
        (function (_) {
          _[(_.k_EPartnerProjectSurveyType_SteamClientDistribution = 1)] =
            "k_EPartnerProjectSurveyType_SteamClientDistribution";
        })(_ || (_ = {})),
        (function (_) {
          (_[(_.k_EAppCapabilityNone = 0)] = "k_EAppCapabilityNone"),
            (_[(_.k_EAppCapabilityCommunityItems = 1)] =
              "k_EAppCapabilityCommunityItems"),
            (_[(_.k_EAppCapabilityJumboKeyRequests = 2)] =
              "k_EAppCapabilityJumboKeyRequests"),
            (_[(_.k_EAppCapabilityKeyRequests = 3)] =
              "k_EAppCapabilityKeyRequests"),
            (_[(_.k_EAppCapabilityVetted = 4)] = "k_EAppCapabilityVetted"),
            (_[(_.k_EAppCapabilityEligibleForUpcomingList = 5)] =
              "k_EAppCapabilityEligibleForUpcomingList"),
            (_[(_.k_EAppCapabilityVettedForShowcaseItems = 6)] =
              "k_EAppCapabilityVettedForShowcaseItems"),
            (_[(_.k_EAppCapabilityFishy = 7)] = "k_EAppCapabilityFishy");
        })(_ || (_ = {})),
        (function (_) {
          (_[(_.k_EAppTransferState_Invalid = 0)] =
            "k_EAppTransferState_Invalid"),
            (_[(_.k_EAppTransferState_PendingConfirmationFrom_Receiver = 1)] =
              "k_EAppTransferState_PendingConfirmationFrom_Receiver"),
            (_[(_.k_EAppTransferState_PendingConfirmationFrom_Sender = 2)] =
              "k_EAppTransferState_PendingConfirmationFrom_Sender"),
            (_[(_.k_EAppTransferState_PendingApproval = 3)] =
              "k_EAppTransferState_PendingApproval"),
            (_[(_.k_EAppTransferState_Approved = 4)] =
              "k_EAppTransferState_Approved"),
            (_[(_.k_EAppTransferState_CanceledByReceiver = 5)] =
              "k_EAppTransferState_CanceledByReceiver"),
            (_[(_.k_EAppTransferState_CanceledBySender = 6)] =
              "k_EAppTransferState_CanceledBySender"),
            (_[(_.k_EAppTransferState_Declined = 7)] =
              "k_EAppTransferState_Declined"),
            (_[(_.k_EAppTransferState_RequiresEscalation = 8)] =
              "k_EAppTransferState_RequiresEscalation"),
            (_[(_.k_EAppTransferState_ApprovedPendingScheduledTransfer = 9)] =
              "k_EAppTransferState_ApprovedPendingScheduledTransfer"),
            (_[(_.k_EAppTransferState_Expired = 10)] =
              "k_EAppTransferState_Expired");
        })(_ || (_ = {})),
        (function (_) {
          (_[(_.k_ETF2BlogPostType_Blog = 0)] = "k_ETF2BlogPostType_Blog"),
            (_[(_.k_ETF2BlogPostType_News = 1)] = "k_ETF2BlogPostType_News"),
            (_[(_.k_ETF2BlogPostType_Updates = 2)] =
              "k_ETF2BlogPostType_Updates"),
            (_[(_.k_ETF2BlogPostType_PostID = 3)] =
              "k_ETF2BlogPostType_PostID"),
            (_[(_.k_ETF2BlogPostType_RSS = 4)] = "k_ETF2BlogPostType_RSS");
        })(_ || (_ = {})),
        (function (_) {
          (_[(_.k_EPartnerAppOptInType_PartnerEvent = 0)] =
            "k_EPartnerAppOptInType_PartnerEvent"),
            (_[(_.k_EPartnerAppOptInType_FeatureAccess = 1)] =
              "k_EPartnerAppOptInType_FeatureAccess");
        })(_ || (_ = {})),
        (function (_) {
          (_[(_.k_EPartnerOptInVisibility_Public = 0)] =
            "k_EPartnerOptInVisibility_Public"),
            (_[(_.k_EPartnerOptInVisibility_InviteOnly = 1)] =
              "k_EPartnerOptInVisibility_InviteOnly");
        })(_ || (_ = {})),
        (function (_) {
          (_[(_.k_EPartnerAppOptInAppealState_Invalid = 0)] =
            "k_EPartnerAppOptInAppealState_Invalid"),
            (_[(_.k_EPartnerAppOptInAppealState_Approved = 1)] =
              "k_EPartnerAppOptInAppealState_Approved"),
            (_[(_.k_EPartnerAppOptInAppealState_Denied = 2)] =
              "k_EPartnerAppOptInAppealState_Denied");
        })(_ || (_ = {})),
        (function (_) {
          (_[(_.k_EOptInEmailTarget_ActivatingUser = 1)] =
            "k_EOptInEmailTarget_ActivatingUser"),
            (_[(_.k_EOptInEmailTarget_DemoNotLive = 2)] =
              "k_EOptInEmailTarget_DemoNotLive"),
            (_[(_.k_EOptInEmailTarget_DiscountMissing = 4)] =
              "k_EOptInEmailTarget_DiscountMissing"),
            (_[(_.k_EOptInEmailTarget_DEPRECATED_InvitedPartners = 8)] =
              "k_EOptInEmailTarget_DEPRECATED_InvitedPartners"),
            (_[(_.k_EOptInEmailTarget_InvitedApps = 16)] =
              "k_EOptInEmailTarget_InvitedApps"),
            (_[(_.k_EOptInEmailTarget_EligibleApps = 32)] =
              "k_EOptInEmailTarget_EligibleApps"),
            (_[(_.k_EOptInEmailTarget_FeaturedApps = 64)] =
              "k_EOptInEmailTarget_FeaturedApps"),
            (_[(_.k_EOptInEmailTarget_FeaturedAppsMissingDate = 128)] =
              "k_EOptInEmailTarget_FeaturedAppsMissingDate"),
            (_[(_.k_EOptInEmailTarget_FeaturedAppsNotContacted = 256)] =
              "k_EOptInEmailTarget_FeaturedAppsNotContacted"),
            (_[(_.k_EOptInEmailTarget_CustomAppList = 512)] =
              "k_EOptInEmailTarget_CustomAppList");
        })(_ || (_ = {})),
        (function (_) {
          (_[(_.k_EOptInEmailSetting_None = 0)] = "k_EOptInEmailSetting_None"),
            (_[(_.k_EOptInEmailSetting_AssetKit = 1)] =
              "k_EOptInEmailSetting_AssetKit"),
            (_[(_.k_EOptInEmailSetting_PressPreview = 2)] =
              "k_EOptInEmailSetting_PressPreview"),
            (_[(_.k_EOptInEmailSetting_ScheduleWidget = 4)] =
              "k_EOptInEmailSetting_ScheduleWidget"),
            (_[(_.k_EOptInEmailSetting_OptOut = 8)] =
              "k_EOptInEmailSetting_OptOut"),
            (_[(_.k_EOptInEmailSetting_OptOutDemo = 16)] =
              "k_EOptInEmailSetting_OptOutDemo"),
            (_[(_.k_EOptInEmailSetting_EnterDiscount = 32)] =
              "k_EOptInEmailSetting_EnterDiscount"),
            (_[(_.k_EOptInEmailSetting_ActivateDemo = 64)] =
              "k_EOptInEmailSetting_ActivateDemo"),
            (_[(_.k_EOptInEmailSetting_ReviewCategorization = 128)] =
              "k_EOptInEmailSetting_ReviewCategorization"),
            (_[(_.k_EOptInEmailSetting_DemoReview = 256)] =
              "k_EOptInEmailSetting_DemoReview"),
            (_[(_.k_EOptInEmailSetting_PressPreviewDetails = 512)] =
              "k_EOptInEmailSetting_PressPreviewDetails"),
            (_[(_.k_EOptInEmailSetting_StatsSummary = 1024)] =
              "k_EOptInEmailSetting_StatsSummary"),
            (_[(_.k_EOptInEmailSetting_SurveyButton = 2048)] =
              "k_EOptInEmailSetting_SurveyButton"),
            (_[(_.k_EOptInEmailSetting_DemoLaunch = 4096)] =
              "k_EOptInEmailSetting_DemoLaunch"),
            (_[(_.k_EOptInEmailSetting_CallForRegistration = 8192)] =
              "k_EOptInEmailSetting_CallForRegistration"),
            (_[(_.k_EOptInEmailSetting_SteamAwardCategories = 16384)] =
              "k_EOptInEmailSetting_SteamAwardCategories"),
            (_[(_.k_EOptInEmailSetting_SeasonalFeatureRequest = 32768)] =
              "k_EOptInEmailSetting_SeasonalFeatureRequest");
        })(_ || (_ = {})),
        (function (_) {
          (_[(_.k_EAppTestType_BuildReview = 0)] =
            "k_EAppTestType_BuildReview"),
            (_[(_.k_EAppTestType_StorePageReview = 1)] =
              "k_EAppTestType_StorePageReview"),
            (_[(_.k_EAppTestType_SteamChina_BuildReview = 2)] =
              "k_EAppTestType_SteamChina_BuildReview"),
            (_[(_.k_EAppTestType_SteamChina_StorePageReview = 3)] =
              "k_EAppTestType_SteamChina_StorePageReview"),
            (_[
              (_.k_EAppTestType_SteamChinaPlatformOperator_StorePageReview = 4)
            ] = "k_EAppTestType_SteamChinaPlatformOperator_StorePageReview"),
            (_[(_.k_EAppTestType_SteamChinaPlatformOperator_BuildReview = 5)] =
              "k_EAppTestType_SteamChinaPlatformOperator_BuildReview"),
            (_[(_.k_EAppTestType_SteamDeckCompatibilityReview = 6)] =
              "k_EAppTestType_SteamDeckCompatibilityReview");
        })(_ || (_ = {})),
        (function (_) {
          (_[(_.k_EAppTrafficStatAttribution_Store = 0)] =
            "k_EAppTrafficStatAttribution_Store"),
            (_[(_.k_EAppTrafficStatAttribution_SteamPlatform = 1)] =
              "k_EAppTrafficStatAttribution_SteamPlatform"),
            (_[(_.k_EAppTrafficStatAttribution_External = 2)] =
              "k_EAppTrafficStatAttribution_External");
        })(_ || (_ = {})),
        (function (_) {
          (_[(_.k_EPartnerMembershipInviteState_Invalid = 0)] =
            "k_EPartnerMembershipInviteState_Invalid"),
            (_[(_.k_EPartnerMembershipInviteState_Sent = 1)] =
              "k_EPartnerMembershipInviteState_Sent"),
            (_[(_.k_EPartnerMembershipInviteState_ReceiverAccepted = 2)] =
              "k_EPartnerMembershipInviteState_ReceiverAccepted"),
            (_[(_.k_EPartnerMembershipInviteState_ReceiverDeclined = 3)] =
              "k_EPartnerMembershipInviteState_ReceiverDeclined"),
            (_[(_.k_EPartnerMembershipInviteState_PartnerAccepted = 4)] =
              "k_EPartnerMembershipInviteState_PartnerAccepted"),
            (_[(_.k_EPartnerMembershipInviteState_PartnerDeclined = 5)] =
              "k_EPartnerMembershipInviteState_PartnerDeclined"),
            (_[(_.k_EPartnerMembershipInviteState_Canceled = 6)] =
              "k_EPartnerMembershipInviteState_Canceled"),
            (_[(_.k_EPartnerMembershipInviteState_Expired = 7)] =
              "k_EPartnerMembershipInviteState_Expired"),
            (_[(_.k_EPartnerMembershipInviteState_MAX = 8)] =
              "k_EPartnerMembershipInviteState_MAX");
        })(_ || (_ = {})),
        (function (_) {
          (_[(_.k_EAppShareState_Invalid = 0)] = "k_EAppShareState_Invalid"),
            (_[(_.k_EAppShareState_Created = 1)] = "k_EAppShareState_Created"),
            (_[(_.k_EAppShareState_AwaitingConfirmation = 2)] =
              "k_EAppShareState_AwaitingConfirmation"),
            (_[(_.k_EAppShareState_Declined = 3)] =
              "k_EAppShareState_Declined"),
            (_[(_.k_EAppShareState_Active = 4)] = "k_EAppShareState_Active"),
            (_[(_.k_EAppShareState_Canceled = 5)] =
              "k_EAppShareState_Canceled"),
            (_[(_.k_EAppShareState_Expired = 6)] = "k_EAppShareState_Expired"),
            (_[(_.k_EAppShareState_Revoked = 7)] = "k_EAppShareState_Revoked"),
            (_[(_.k_EAppShareState_CanceledForAppTransfer = 8)] =
              "k_EAppShareState_CanceledForAppTransfer"),
            (_[(_.k_EAppShareState_MAX = 9)] = "k_EAppShareState_MAX");
        })(_ || (_ = {})),
        (function (_) {
          (_[(_.k_ECommunicationInviteState_Invalid = 0)] =
            "k_ECommunicationInviteState_Invalid"),
            (_[(_.k_ECommunicationInviteState_Pending = 1)] =
              "k_ECommunicationInviteState_Pending"),
            (_[(_.k_ECommunicationInviteState_Accepted = 2)] =
              "k_ECommunicationInviteState_Accepted"),
            (_[(_.k_ECommunicationInviteState_Removed = 4)] =
              "k_ECommunicationInviteState_Removed");
        })(_ || (_ = {}));
      class _ extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(_ = null) {
          super(),
            _.prototype.packageids || _._(_._()),
            _.Message.initialize(this, _, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            _.sm_m ||
              (_.sm_m = {
                proto: _,
                fields: {
                  packageids: {
                    _: 1,
                    _: !0,
                    _: !0,
                    _: _._.readUint32,
                    pbr: _._.readPackedUint32,
                    _: _._.writeRepeatedUint32,
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
          return "CPublishing_GetPartnerPaidGivenPackageList_Request";
        }
      }
      class _ extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(_ = null) {
          super(),
            _.prototype.paid || _._(_._()),
            _.Message.initialize(this, _, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            _.sm_m ||
              (_.sm_m = {
                proto: _,
                fields: {
                  paid: {
                    _: 1,
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
          return "CPublishing_GetPartnerPaidGivenPackageList_Response";
        }
      }
      class _ extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(_ = null) {
          super(),
            _.prototype.partnerid || _._(_._()),
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
                  partnerid: {
                    _: 1,
                    _: _._.readUint32,
                    _: _._.writeUint32,
                  },
                  packageid: {
                    _: 2,
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
          return "CPublishing_GetPartnerPaidGivenPackageList_Response_CPackageAndPartnerPair";
        }
      }
      class _ extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(_ = null) {
          super(),
            _.prototype.opt_in_name || _._(_._()),
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
                  opt_in_name: {
                    _: 1,
                    _: _._.readString,
                    _: _._.writeString,
                  },
                  targeting_flag: {
                    _: 2,
                    _: _._.readFixed64String,
                    _: _._.writeFixed64String,
                  },
                  settings_flag: {
                    _: 3,
                    _: _._.readFixed64String,
                    _: _._.writeFixed64String,
                  },
                  email_templates: {
                    _: 4,
                    _: _._.readString,
                    _: _._.writeString,
                  },
                  start_rtime: {
                    _: 5,
                    _: 0,
                    _: _._.readUint32,
                    _: _._.writeUint32,
                  },
                  end_rtime: {
                    _: 6,
                    _: 0,
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
          return "CPublishing_CreatePartnerAppOptInEmail_Request";
        }
      }
      class _ extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(_ = null) {
          super(),
            _.prototype.email_def_id || _._(_._()),
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
                  email_def_id: {
                    _: 1,
                    _: _._.readFixed64String,
                    _: _._.writeFixed64String,
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
          return "CPublishing_CreatePartnerAppOptInEmail_Response";
        }
      }
      class _ extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(_ = null) {
          super(),
            _.prototype.email_def_id || _._(_._()),
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
                  email_def_id: {
                    _: 1,
                    _: _._.readFixed64String,
                    _: _._.writeFixed64String,
                  },
                  targeting_flag: {
                    _: 2,
                    _: _._.readFixed64String,
                    _: _._.writeFixed64String,
                  },
                  settings_flag: {
                    _: 3,
                    _: _._.readFixed64String,
                    _: _._.writeFixed64String,
                  },
                  email_templates: {
                    _: 4,
                    _: _._.readString,
                    _: _._.writeString,
                  },
                  start_rtime: {
                    _: 5,
                    _: 0,
                    _: _._.readUint32,
                    _: _._.writeUint32,
                  },
                  end_rtime: {
                    _: 6,
                    _: 0,
                    _: _._.readUint32,
                    _: _._.writeUint32,
                  },
                  reviewed: {
                    _: 7,
                    _: !1,
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
          return "CPublishing_UpdatePartnerAppOptInEmail_Request";
        }
      }
      class _ extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(_ = null) {
          super(), _.Message.initialize(this, _, 0, -1, void 0, null);
        }
        toObject(_ = !1) {
          return _.toObject(_, this);
        }
        static toObject(_, _) {
          return _
            ? {
                $jspbMessageInstance: _,
              }
            : {};
        }
        static fromObject(_) {
          return new _();
        }
        static deserializeBinary(_) {
          let _ = new (_().BinaryReader)(_),
            _ = new _();
          return _.deserializeBinaryFromReader(_, _);
        }
        static deserializeBinaryFromReader(_, _) {
          return _;
        }
        serializeBinary() {
          var _ = new (_().BinaryWriter)();
          return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
        }
        static serializeBinaryToWriter(_, _) {}
        serializeBase64String() {
          var _ = new (_().BinaryWriter)();
          return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
        }
        getClassName() {
          return "CPublishing_UpdatePartnerAppOptInEmail_Response";
        }
      }
      class _ extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(_ = null) {
          super(),
            _.prototype.accounts_examined || _._(_._()),
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
                  accounts_examined: {
                    _: 1,
                    _: _._.readUint32,
                    _: _._.writeUint32,
                  },
                  accounts_emailed: {
                    _: 2,
                    _: _._.readUint32,
                    _: _._.writeUint32,
                  },
                  accounts_not_emailed_opted_out: {
                    _: 3,
                    _: _._.readUint32,
                    _: _._.writeUint32,
                  },
                  accounts_email_failed: {
                    _: 4,
                    _: _._.readUint32,
                    _: _._.writeUint32,
                  },
                  completed: {
                    _: 5,
                    _: _._.readBool,
                    _: _._.writeBool,
                  },
                  rt_last_updated: {
                    _: 6,
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
          return "CPartnerAppOptInEmailStats";
        }
      }
      class _ extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(_ = null) {
          super(),
            _.prototype.email_def_id || _._(_._()),
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
                  email_def_id: {
                    _: 1,
                    _: _._.readFixed64String,
                    _: _._.writeFixed64String,
                  },
                  force_resend: {
                    _: 2,
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
          return "CPublishing_SendPartnerAppOptInEmailAndWait_Request";
        }
      }
      class _ extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(_ = null) {
          super(),
            _.prototype.results || _._(_._()),
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
                  results: {
                    _: 1,
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
          return "CPublishing_SendPartnerAppOptInEmailAndWait_Response";
        }
      }
      class _ extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(_ = null) {
          super(),
            _.prototype.opt_in_name || _._(_._()),
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
                  opt_in_name: {
                    _: 1,
                    _: _._.readString,
                    _: _._.writeString,
                  },
                  targeting_flag: {
                    _: 2,
                    _: _._.readFixed64String,
                    _: _._.writeFixed64String,
                  },
                  settings_flag: {
                    _: 3,
                    _: _._.readFixed64String,
                    _: _._.writeFixed64String,
                  },
                  email_templates: {
                    _: 4,
                    _: _._.readString,
                    _: _._.writeString,
                  },
                  start_rtime: {
                    _: 5,
                    _: _._.readUint32,
                    _: _._.writeUint32,
                  },
                  end_rtime: {
                    _: 6,
                    _: _._.readUint32,
                    _: _._.writeUint32,
                  },
                  stats: {
                    _: 7,
                    _: _,
                  },
                  creator_accountid: {
                    _: 8,
                    _: _._.readUint32,
                    _: _._.writeUint32,
                  },
                  create_time: {
                    _: 9,
                    _: _._.readUint32,
                    _: _._.writeUint32,
                  },
                  last_update_time: {
                    _: 10,
                    _: _._.readUint32,
                    _: _._.writeUint32,
                  },
                  email_def_id: {
                    _: 11,
                    _: _._.readFixed64String,
                    _: _._.writeFixed64String,
                  },
                  completed: {
                    _: 12,
                    _: _._.readBool,
                    _: _._.writeBool,
                  },
                  aborted: {
                    _: 13,
                    _: _._.readBool,
                    _: _._.writeBool,
                  },
                  deleted: {
                    _: 14,
                    _: _._.readBool,
                    _: _._.writeBool,
                  },
                  reviewed: {
                    _: 15,
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
          return "CPartnerAppOptInEmailDef";
        }
      }
      class _ extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(_ = null) {
          super(),
            _.prototype.opt_in_name || _._(_._()),
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
                  opt_in_name: {
                    _: 1,
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
          return "CPublishing_GetPartnerAppOptInEmailDefAndStats_Request";
        }
      }
      class _ extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(_ = null) {
          super(),
            _.prototype.defs || _._(_._()),
            _.Message.initialize(this, _, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            _.sm_m ||
              (_.sm_m = {
                proto: _,
                fields: {
                  defs: {
                    _: 1,
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
          return "CPublishing_GetPartnerAppOptInEmailDefAndStats_Response";
        }
      }
      class _ extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(_ = null) {
          super(),
            _.prototype.email_def_id || _._(_._()),
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
                  email_def_id: {
                    _: 1,
                    _: _._.readFixed64String,
                    _: _._.writeFixed64String,
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
          return "CPublishing_GetEstimatePartnerAppOptInEmail_Request";
        }
      }
      class _ extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(_ = null) {
          super(),
            _.prototype.stats || _._(_._()),
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
                  stats: {
                    _: 1,
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
          return "CPublishing_GetEstimatePartnerAppOptInEmail_Response";
        }
      }
      class _ extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(_ = null) {
          super(),
            _.prototype.email_def_id || _._(_._()),
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
                  email_def_id: {
                    _: 1,
                    _: _._.readFixed64String,
                    _: _._.writeFixed64String,
                  },
                  appid: {
                    _: 2,
                    _: _._.readUint32,
                    _: _._.writeUint32,
                  },
                  partnerid: {
                    _: 3,
                    _: _._.readUint32,
                    _: _._.writeUint32,
                  },
                  language_override: {
                    _: 4,
                    _: 0,
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
          return "CPublishing_TestFirePartnerAppOptInEmail_Request";
        }
      }
      class _ extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(_ = null) {
          super(), _.Message.initialize(this, _, 0, -1, void 0, null);
        }
        toObject(_ = !1) {
          return _.toObject(_, this);
        }
        static toObject(_, _) {
          return _
            ? {
                $jspbMessageInstance: _,
              }
            : {};
        }
        static fromObject(_) {
          return new _();
        }
        static deserializeBinary(_) {
          let _ = new (_().BinaryReader)(_),
            _ = new _();
          return _.deserializeBinaryFromReader(_, _);
        }
        static deserializeBinaryFromReader(_, _) {
          return _;
        }
        serializeBinary() {
          var _ = new (_().BinaryWriter)();
          return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
        }
        static serializeBinaryToWriter(_, _) {}
        serializeBase64String() {
          var _ = new (_().BinaryWriter)();
          return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
        }
        getClassName() {
          return "CPublishing_TestFirePartnerAppOptInEmail_Response";
        }
      }
      class _ extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(_ = null) {
          super(),
            _.prototype.accountid || _._(_._()),
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
                  accountid: {
                    _: 1,
                    _: _._.readUint32,
                    _: _._.writeUint32,
                  },
                  appid: {
                    _: 2,
                    _: _._.readUint32,
                    _: _._.writeUint32,
                  },
                  partnerid: {
                    _: 3,
                    _: _._.readUint32,
                    _: _._.writeUint32,
                  },
                  rtime_notified: {
                    _: 4,
                    _: _._.readUint32,
                    _: _._.writeUint32,
                  },
                  ignored_unverified_email: {
                    _: 5,
                    _: _._.readBool,
                    _: _._.writeBool,
                  },
                  ignored_email_optout: {
                    _: 6,
                    _: _._.readBool,
                    _: _._.writeBool,
                  },
                  status: {
                    _: 7,
                    _: _._.readUint32,
                    _: _._.writeUint32,
                  },
                  send_rtime: {
                    _: 8,
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
          return "CPartnerOptInEmailTracking";
        }
      }
      class _ extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(_ = null) {
          super(),
            _.prototype.email_def_id || _._(_._()),
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
                  email_def_id: {
                    _: 1,
                    _: _._.readFixed64String,
                    _: _._.writeFixed64String,
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
          return "CPublishing_GetOptInEmailTracking_Request";
        }
      }
      class _ extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(_ = null) {
          super(),
            _.prototype.email_def_id || _._(_._()),
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
                  email_def_id: {
                    _: 1,
                    _: _._.readFixed64String,
                    _: _._.writeFixed64String,
                  },
                  results: {
                    _: 2,
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
          return "CPublishing_GetOptInEmailTracking_Response";
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
                  opt_in: {
                    _: 2,
                    _: _._.readBool,
                    _: _._.writeBool,
                  },
                  opt_in_name: {
                    _: 3,
                    _: _._.readString,
                    _: _._.writeString,
                  },
                  jsondata: {
                    _: 4,
                    _: _._.readString,
                    _: _._.writeString,
                  },
                  type: {
                    _: 5,
                    _: _._.readEnum,
                    _: _._.writeEnum,
                  },
                  accountid_add: {
                    _: 6,
                    _: _._.readUint32,
                    _: _._.writeUint32,
                  },
                  time_opted_in: {
                    _: 7,
                    _: _._.readUint32,
                    _: _._.writeUint32,
                  },
                  time_updated: {
                    _: 8,
                    _: _._.readUint32,
                    _: _._.writeUint32,
                  },
                  accountid_lastmod: {
                    _: 9,
                    _: _._.readUint32,
                    _: _._.writeUint32,
                  },
                  invited: {
                    _: 10,
                    _: _._.readBool,
                    _: _._.writeBool,
                  },
                  accountid_remove: {
                    _: 11,
                    _: _._.readUint32,
                    _: _._.writeUint32,
                  },
                  time_opted_out: {
                    _: 12,
                    _: _._.readUint32,
                    _: _._.writeUint32,
                  },
                  pruned: {
                    _: 13,
                    _: _._.readBool,
                    _: _._.writeBool,
                  },
                  accountid_prune: {
                    _: 14,
                    _: _._.readUint32,
                    _: _._.writeUint32,
                  },
                  time_pruned: {
                    _: 15,
                    _: _._.readUint32,
                    _: _._.writeUint32,
                  },
                  additional_featuring: {
                    _: 16,
                    _: _._.readBool,
                    _: _._.writeBool,
                  },
                  feature_day: {
                    _: 17,
                    _: _._.readUint32,
                    _: _._.writeUint32,
                  },
                  accountid_invited: {
                    _: 18,
                    _: _._.readUint32,
                    _: _._.writeUint32,
                  },
                  no_planned_discount: {
                    _: 19,
                    _: _._.readBool,
                    _: _._.writeBool,
                  },
                  pending_review: {
                    _: 20,
                    _: _._.readUint32,
                    _: _._.writeUint32,
                  },
                  appeal_state: {
                    _: 21,
                    _: _._.readEnum,
                    _: _._.writeEnum,
                  },
                  accountid_appeal: {
                    _: 22,
                    _: _._.readUint32,
                    _: _._.writeUint32,
                  },
                  time_appeal_decision: {
                    _: 23,
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
          return "CPartnerAppOptInData";
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
                  opt_in_name: {
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
          return "CPublishing_GetSinglePartnerAppOptIns_Request";
        }
      }
      class _ extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(_ = null) {
          super(),
            _.prototype.data || _._(_._()),
            _.Message.initialize(this, _, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            _.sm_m ||
              (_.sm_m = {
                proto: _,
                fields: {
                  data: {
                    _: 1,
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
          return "CPublishing_GetSinglePartnerAppOptIns_Response";
        }
      }
      class _ extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(_ = null) {
          super(),
            _.prototype.appids || _._(_._()),
            _.Message.initialize(this, _, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            _.sm_m ||
              (_.sm_m = {
                proto: _,
                fields: {
                  appids: {
                    _: 1,
                    _: !0,
                    _: !0,
                    _: _._.readUint32,
                    pbr: _._.readPackedUint32,
                    _: _._.writeRepeatedUint32,
                  },
                  additional_featuring: {
                    _: 2,
                    _: !0,
                    _: _._.readBool,
                    _: _._.writeBool,
                  },
                  opt_in_name: {
                    _: 3,
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
          return "CPublishing_SetFeaturingOnPartnerAppOptIn_Request";
        }
      }
      class _ extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(_ = null) {
          super(),
            _.prototype.appids || _._(_._()),
            _.Message.initialize(this, _, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            _.sm_m ||
              (_.sm_m = {
                proto: _,
                fields: {
                  appids: {
                    _: 1,
                    _: !0,
                    _: !0,
                    _: _._.readUint32,
                    pbr: _._.readPackedUint32,
                    _: _._.writeRepeatedUint32,
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
          return "CPublishing_SetFeaturingOnPartnerAppOptIn_Response";
        }
      }
      class _ extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(_ = null) {
          super(),
            _.prototype.opt_in_id || _._(_._()),
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
                  opt_in_id: {
                    _: 7,
                    _: _._.readUint32,
                    _: _._.writeUint32,
                  },
                  opt_in_name: {
                    _: 1,
                    _: _._.readString,
                    _: _._.writeString,
                  },
                  type: {
                    _: 2,
                    _: _._.readEnum,
                    _: _._.writeEnum,
                  },
                  active: {
                    _: 3,
                    _: _._.readBool,
                    _: _._.writeBool,
                  },
                  start_date: {
                    _: 4,
                    _: _._.readUint32,
                    _: _._.writeUint32,
                  },
                  end_date: {
                    _: 5,
                    _: _._.readUint32,
                    _: _._.writeUint32,
                  },
                  jsondata: {
                    _: 6,
                    _: _._.readString,
                    _: _._.writeString,
                  },
                  last_modified_time: {
                    _: 8,
                    _: _._.readUint32,
                    _: _._.writeUint32,
                  },
                  last_modifier_accountid: {
                    _: 9,
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
          return "COptInDef";
        }
      }
      class _ extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(_ = null) {
          super(),
            _.prototype.opt_in_name || _._(_._()),
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
                  opt_in_name: {
                    _: 1,
                    _: _._.readString,
                    _: _._.writeString,
                  },
                  start: {
                    _: 2,
                    _: 0,
                    _: _._.readUint32,
                    _: _._.writeUint32,
                  },
                  count: {
                    _: 3,
                    _: 20,
                    _: _._.readUint32,
                    _: _._.writeUint32,
                  },
                  include_json: {
                    _: 4,
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
          return "CPublishing_GetOptInHistoryInternal_Request";
        }
      }
      class _ extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(_ = null) {
          super(),
            _.prototype.opt_ins || _._(_._()),
            _.Message.initialize(this, _, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            _.sm_m ||
              (_.sm_m = {
                proto: _,
                fields: {
                  opt_ins: {
                    _: 1,
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
          return "CPublishing_GetOptInHistoryInternal_Response";
        }
      }
      class _ extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(_ = null) {
          super(),
            _.prototype.opt_in_name || _._(_._()),
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
                  opt_in_name: {
                    _: 1,
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
          return "CPublishing_GetPartnerAppOptInsIDs_Request";
        }
      }
      class _ extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(_ = null) {
          super(),
            _.prototype.opted_in_appids || _._(_._()),
            _.Message.initialize(this, _, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            _.sm_m ||
              (_.sm_m = {
                proto: _,
                fields: {
                  opted_in_appids: {
                    _: 1,
                    _: !0,
                    _: !0,
                    _: _._.readUint32,
                    pbr: _._.readPackedUint32,
                    _: _._.writeRepeatedUint32,
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
          return "CPublishing_GetPartnerAppOptInsIDs_Response";
        }
      }
      class _ extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(_ = null) {
          super(),
            _.prototype.opt_in_names || _._(_._()),
            _.Message.initialize(this, _, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            _.sm_m ||
              (_.sm_m = {
                proto: _,
                fields: {
                  opt_in_names: {
                    _: 1,
                    _: !0,
                    _: !0,
                    _: _._.readString,
                    _: _._.writeRepeatedString,
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
          return "CPublishing_GetOptInAppealsSummaryStats_Request";
        }
      }
      class _ extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(_ = null) {
          super(),
            _.prototype.summary || _._(_._()),
            _.Message.initialize(this, _, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            _.sm_m ||
              (_.sm_m = {
                proto: _,
                fields: {
                  summary: {
                    _: 1,
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
          return "CPublishing_GetOptInAppealsSummaryStats_Response";
        }
      }
      class _ extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(_ = null) {
          super(),
            _.prototype.opt_in_name || _._(_._()),
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
                  opt_in_name: {
                    _: 1,
                    _: _._.readString,
                    _: _._.writeString,
                  },
                  open_appeals: {
                    _: 2,
                    _: _._.readUint32,
                    _: _._.writeUint32,
                  },
                  reject_appeals: {
                    _: 3,
                    _: _._.readUint32,
                    _: _._.writeUint32,
                  },
                  accepted_appeals: {
                    _: 4,
                    _: _._.readUint32,
                    _: _._.writeUint32,
                  },
                  appeal_account_id: {
                    _: 5,
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
          return "CPublishing_GetOptInAppealsSummaryStats_Response_CSummary";
        }
      }
      class _ extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(_ = null) {
          super(),
            _.prototype.inviteid || _._(_._()),
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
                  inviteid: {
                    _: 1,
                    _: _._.readUint64String,
                    _: _._.writeUint64String,
                  },
                  accountid_sender: {
                    _: 2,
                    _: _._.readUint32,
                    _: _._.writeUint32,
                  },
                  email: {
                    _: 3,
                    _: _._.readString,
                    _: _._.writeString,
                  },
                  real_name: {
                    _: 4,
                    _: _._.readString,
                    _: _._.writeString,
                  },
                  note: {
                    _: 5,
                    _: _._.readString,
                    _: _._.writeString,
                  },
                  time_sent: {
                    _: 6,
                    _: _._.readUint32,
                    _: _._.writeUint32,
                  },
                  current_state: {
                    _: 7,
                    _: _._.readEnum,
                    _: _._.writeEnum,
                  },
                  pub_rights: {
                    _: 8,
                    _: _._.readUint64String,
                    _: _._.writeUint64String,
                  },
                  app_rights: {
                    _: 9,
                    _: _._.readUint64String,
                    _: _._.writeUint64String,
                  },
                  time_receiver_responded: {
                    _: 10,
                    _: _._.readUint32,
                    _: _._.writeUint32,
                  },
                  accountid: {
                    _: 11,
                    _: _._.readUint32,
                    _: _._.writeUint32,
                  },
                  time_partner_responded: {
                    _: 12,
                    _: _._.readUint32,
                    _: _._.writeUint32,
                  },
                  accountid_partner: {
                    _: 13,
                    _: _._.readUint32,
                    _: _._.writeUint32,
                  },
                  partnerid: {
                    _: 14,
                    _: _._.readUint32,
                    _: _._.writeUint32,
                  },
                  time_last_updated: {
                    _: 15,
                    _: _._.readUint32,
                    _: _._.writeUint32,
                  },
                  sender_ip: {
                    _: 16,
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
          return "MembershipInvite";
        }
      }
      class _ extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(_ = null) {
          super(),
            _.prototype.partnerid || _._(_._()),
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
                  partnerid: {
                    _: 1,
                    _: _._.readUint32,
                    _: _._.writeUint32,
                  },
                  filter_states: {
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
          return "CPartnerMembershipInvite_GetInvites_Request";
        }
      }
      class _ extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(_ = null) {
          super(),
            _.prototype.invites || _._(_._()),
            _.Message.initialize(this, _, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            _.sm_m ||
              (_.sm_m = {
                proto: _,
                fields: {
                  invites: {
                    _: 1,
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
          return "CPartnerMembershipInvite_GetInvites_Response";
        }
      }
      !(function (_) {
        (_.GetSinglePartnerAppOptIn = function (_, _) {
          return _.SendMsg(
            "Publishing.GetSinglePartnerAppOptIn#1",
            (0, _._)(_, _),
            _,
            {
              bConstMethod: !0,
              ePrivilege: 1,
            },
          );
        }),
          (_.SetFeaturingOnPartnerAppOptIn = function (_, _) {
            return _.SendMsg(
              "Publishing.SetFeaturingOnPartnerAppOptIn#1",
              (0, _._)(_, _),
              _,
              {
                ePrivilege: 1,
              },
            );
          }),
          (_.GetOptInHistoryInternal = function (_, _) {
            return _.SendMsg(
              "Publishing.GetOptInHistoryInternal#1",
              (0, _._)(_, _),
              _,
              {
                ePrivilege: 4,
              },
            );
          }),
          (_.GetPartnerAppOptInsIDs = function (_, _) {
            return _.SendMsg(
              "Publishing.GetPartnerAppOptInsIDs#1",
              (0, _._)(_, _),
              _,
              {
                bConstMethod: !0,
                ePrivilege: 1,
              },
            );
          }),
          (_.GetOptInAppealsSummaryStats = function (_, _) {
            return _.SendMsg(
              "Publishing.GetOptInAppealsSummaryStats#1",
              (0, _._)(_, _),
              _,
              {
                bConstMethod: !0,
                ePrivilege: 1,
              },
            );
          }),
          (_.CreatePartnerAppOptInEmails = function (_, _) {
            return _.SendMsg(
              "Publishing.CreatePartnerAppOptInEmails#1",
              (0, _._)(_, _),
              _,
              {
                ePrivilege: 1,
              },
            );
          }),
          (_.UpdatePartnerAppOptInEmails = function (_, _) {
            return _.SendMsg(
              "Publishing.UpdatePartnerAppOptInEmails#1",
              (0, _._)(_, _),
              _,
              {
                ePrivilege: 1,
              },
            );
          }),
          (_.SendPartnerOptInEmailAndWait = function (_, _) {
            return _.SendMsg(
              "Publishing.SendPartnerOptInEmailAndWait#1",
              (0, _._)(_, _),
              _,
              {
                ePrivilege: 1,
              },
            );
          }),
          (_.GetPartnerAppOptInEmailDefAndStats = function (_, _) {
            return _.SendMsg(
              "Publishing.GetPartnerAppOptInEmailDefAndStats#1",
              (0, _._)(_, _),
              _,
              {
                ePrivilege: 1,
              },
            );
          }),
          (_.GetEstimatePartnerAppOptInEmail = function (_, _) {
            return _.SendMsg(
              "Publishing.GetEstimatePartnerAppOptInEmail#1",
              (0, _._)(_, _),
              _,
              {
                ePrivilege: 1,
              },
            );
          }),
          (_.TestFirePartnerAppOptInEmail = function (_, _) {
            return _.SendMsg(
              "Publishing.TestFirePartnerAppOptInEmail#1",
              (0, _._)(_, _),
              _,
              {
                ePrivilege: 1,
              },
            );
          }),
          (_.GetOptInEmailTracking = function (_, _) {
            return _.SendMsg(
              "Publishing.GetOptInEmailTracking#1",
              (0, _._)(_, _),
              _,
              {
                ePrivilege: 1,
              },
            );
          }),
          (_.GetPartnerPaidGivenPackageList = function (_, _) {
            return _.SendMsg(
              "Publishing.GetPartnerPaidGivenPackageList#1",
              (0, _._)(_, _),
              _,
              {
                bConstMethod: !0,
                ePrivilege: 4,
              },
            );
          });
      })(_ || (_ = {})),
        (function (_) {
          _.GetInvites = function (_, _) {
            return _.SendMsg(
              "PartnerMembershipInvite.GetInvites#1",
              (0, _._)(_, _),
              _,
              {
                bConstMethod: !0,
                ePrivilege: 11,
              },
            );
          };
        })(_ || (_ = {}));
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
        _ = __webpack_require__("chunkid");
      class _ {
        constructor() {
          (0, _._)(this);
        }
        m_mapProfiles = new Map();
        m_mapProfilesLoading = new Map();
        async LoadProfiles(_, _) {
          (0, _._)(
            _.length <= 500,
            "Check LoadProfiles, requesting too many steam IDs",
          );
          let _ = _.filter(
            (_) =>
              !this.m_mapProfiles.has(_) && !this.m_mapProfilesLoading.has(_),
          );
          if (0 == _.length) return this.m_mapProfilesLoading.get(_[0]);
          let _ = _._.COMMUNITY_BASE_URL + "actions/ajaxresolveusers",
            _ = _().get(_, {
              params: {
                steamids: __webpack_require__.join(","),
              },
              withCredentials: !0,
              cancelToken: _?.token,
            });
          __webpack_require__.forEach((_) =>
            this.m_mapProfilesLoading.set(_, _),
          );
          let _ = await _;
          _.data &&
            200 == _.status &&
            _.data.forEach((_) => {
              (_.avatar_hash = _.avatar_url),
                (_.avatar_url_medium = (0, _._)(_.avatar_url, "medium")),
                (_.avatar_url_full = (0, _._)(_.avatar_url, "full")),
                (_.avatar_url = (0, _._)(_.avatar_url)),
                this.m_mapProfiles.set(_.steamid, _),
                this.m_mapProfilesLoading.delete(_.steamid);
            });
        }
        GetProfile(_) {
          return this.m_mapProfiles.get(_);
        }
        GetProfileByAccountID(_) {
          return this.m_mapProfiles.get(
            _._.InitFromAccountID(_).ConvertTo64BitString(),
          );
        }
        GetProfileBySteamID(_) {
          return this.m_mapProfiles.get(_.ConvertTo64BitString());
        }
        BHasProfile(_) {
          return this.m_mapProfiles.has(_);
        }
        BHasProfileByAccountID(_) {
          return this.m_mapProfiles.has(
            _._.InitFromAccountID(_).ConvertTo64BitString(),
          );
        }
        BHasProfileBySteamID(_) {
          return this.m_mapProfiles.has(_.ConvertTo64BitString());
        }
        BHasAllProfilesBySteamID(_) {
          return !_.some((_) => !this.BHasProfileBySteamID(_));
        }
        GetProfileURLBySteamID(_) {
          const _ = this.GetProfileBySteamID(_);
          return _ && _.profile_url
            ? _._.COMMUNITY_BASE_URL + "id/" + _.profile_url
            : _._.COMMUNITY_BASE_URL + "profiles/" + _.ConvertTo64BitString();
        }
        GetPersonaNameBySteamID(_) {
          const _ = this.GetProfileBySteamID(_);
          return _ && _.persona_name ? _.persona_name : "";
        }
      }
      (0, _._)([_._], _.prototype, "m_mapProfiles", void 0);
      const _ = new _();
      function _(_) {
        return (function (_) {
          const _ = _.useMemo(
              () => (_ ? ("string" == typeof _ ? new _._(_) : _) : null),
              [_],
            ),
            [__webpack_require__, _] = (0, _.useState)(
              !!_ && !_.BHasProfileBySteamID(_),
            );
          return (
            (0, _.useEffect)(() => {
              const _ = _().CancelToken.source();
              return (
                _ &&
                  !_.BHasProfileBySteamID(_) &&
                  _.LoadProfiles([_.ConvertTo64BitString()])
                    .catch((_) => {
                      const _ = (0, _._)(_);
                      console.error(
                        "useUserProfile failed to load profile for " +
                          _.ConvertTo64BitString() +
                          ": " +
                          _.strErrorMsg,
                        _,
                      );
                    })
                    .finally(() => {
                      _.token.reason || _(!1);
                    }),
                () => _.cancel("unmounting useUserProfile")
              );
            }, [_]),
            [__webpack_require__, !!_ && _.GetProfileBySteamID(_)]
          );
        })(_.useMemo(() => (_ ? _._.InitFromAccountID(_) : null), [_]));
      }
    },
  },
]);
