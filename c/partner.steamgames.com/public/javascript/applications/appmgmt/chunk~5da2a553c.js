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
        _ = __webpack_require__("chunkid");
      const _ = "1",
        _ = "SaleEvent_DurationDiscount_Tooltip",
        _ = "discount";
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
          if (this.m_bLoadEventsRequestInFlight) return 29;
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
              200 == _?.status && 1 == _.data?.success && _.data.events)
            ) {
              for (const _ of _.data.events)
                this.m_mapDiscountEvents.set(_._, _);
              return (
                (this.m_bLoadedViaInitOrFullLoad = !0),
                this.m_discountEventsListCallback.Dispatch(
                  this.GetAllDiscountEvents(),
                ),
                1
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
            _?.response?.data?.success ?? 2
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
            if (200 == _?.status && 1 == _.data?.success && _.data.eventid) {
              const _ = {
                _: _.data.eventid,
                name: _,
                start_date: _,
                end_date: _,
                appids: _,
                publisherids: _,
                description: _,
                collision_type: "proximity",
                event: _,
                header: _,
                tooltip: _,
                type: _,
                prevent_weeklong: "",
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
            if (200 == _?.status && 1 == _.data?.success && _.data.eventid) {
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
              1 == _?.data?.success &&
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
              1 == _?.data?.success &&
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
            "unique" == _.collision_type && (_ = _.concat(_));
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
        const _ = _ ?? (_?.length ? 1 : null);
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
            event: _,
            collision_type: "proximity",
            header: _,
            tooltip: _,
            type: _,
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
            if (1 == _?.data?.success && _.data.optin_registration) {
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
                  1 != _.data?.success ||
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
            if (200 == _?.status && 1 == _.data?.success) return null;
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
            if (200 == _?.status && 1 == _.data?.success) {
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
            if (200 == _?.status && 1 == _.data?.success) {
              const _ = {
                ...this.m_mapRegistrations.get(_).get(_),
              };
              return (
                (_.accountid_appeal = _._.accountid),
                (_.appeal_state = _ ? 1 : 2),
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
          if (0 == _.length) return 1;
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
                200 != _?.status || 1 != _.data?.success || !_.data.discounts)
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
          if (null == _) _(1);
          else {
            const _ = (0, _._)(_);
            console.error(
              "Could not load Discounts for packages",
              _,
              _.strErrorMsg,
              _,
            ),
              _(_?.response?.data?.success ?? 2);
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
                200 == _?.status && 1 == _.data?.success && _.data.discounts)
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
              200 == _?.status && 1 == _.data?.success && _.data.discountid)
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
              success: 2,
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
            if (200 == _?.status && 1 == _.data?.success)
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
              success: 2,
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
      });
      var _ = __webpack_require__("chunkid"),
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
          if (1 != _?.eState)
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
              1 == _.eState && (_ = Math.max(_, _.discount?.nDiscountPct || 0));
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
              _.eState = 0;
            else if (_.discount?.nDiscountPct > 0) {
              _.eState = 1;
              const _ = _.opt_in_name && _?.get(_.opt_in_name);
              _ && (_.optInReg = _);
            } else {
              if (((_.eState = 1), _(_, _))) _.eState = 10;
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
              if (10 != _.eState && 4 != _.eState && 5 != _.eState) {
                const _ = _(_, _, _);
                1 != _.ePackageDiscountState &&
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
            _ = new Set([1, 11, 2, 3]);
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
                return "unique" != _?.collision_type;
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
            const _ = "unique" == _?.collision_type;
            if (_ && ((_ = _.rtStartDate + _), _ + 1 < _.length)) {
              const _ = _[_ + 1],
                _ = (0, _._)(_.discountEventID);
              "unique" != _?.collision_type &&
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
              "unique" != _?.collision_type &&
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
              "unique" == _.collision_type &&
              !_.has(_._) &&
              1 ==
                this.m_mapPackageStateForDiscountEvents.get(_).get(_._).eState,
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
        let _ = 1;
        const _ = [];
        let _ = !1;
        const _ = _._.Get().GetPackage(_);
        if (_?.GetReleaseDateRTime() > _.start_date - _)
          return (
            (_ = 6),
            {
              ePackageDiscountState: _,
              rgConflictingDiscounts: _,
              bChangedLocally: _,
            }
          );
        if ((0, _._)(_) > _.start_date - _)
          return (
            (_ = 7),
            {
              ePackageDiscountState: _,
              rgConflictingDiscounts: _,
              bChangedLocally: _,
            }
          );
        for (const _ of _) {
          if (_._ == _.discountEventID) continue;
          const _ = (0, _._)(_.discountEventID),
            _ = "unique" == _.collision_type || "unique" == _?.collision_type,
            _ = _ ? _.start_date + _ : _.start_date - _,
            _ = _ ? _.end_date - _ : _.end_date + _;
          if (_.rtEndDate > _ && _ > _.rtStartDate) {
            if (((_ = _ || _.bChangedLocally), 0 == _.nDiscountPct)) continue;
            _.push(_), (_ = _ ? 9 : 8);
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
          _ = 5;
        if (_)
          (_ = _.get(_)),
            !_ || _.restricted || _.pruned
              ? ((_ = 4),
                (_ = {
                  restricted: !0,
                }))
              : (_ = _.opt_in ? 1 : _.invited || !_.time_opted_in ? 2 : 3);
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
            ? (_ = 1)
            : _.some((_) => !_.restricted && !_.pruned) && (_ = 11);
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
        return 1 == _?.eState ? (_?.discount?.nDiscountPct ?? 0) : null;
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
            case 0:
              break;
            case 1:
              (_.discount?.nDiscountPct ?? 0) > 0
                ? _.alreadySet.add(_.packageID)
                : _.available.add(_.packageID);
              break;
            case 6:
            case 7:
            case 8:
            case 9:
              _.conflicts.add(_.packageID);
              break;
            case 2:
            case 3:
              _.needRegistration.add(_.packageID);
              break;
            case 4:
            case 5:
            case 10:
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
      });
      var _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid");
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
        m_eRelatedDiscountView = "deepest-past";
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
            window.localStorage.getItem(_) ?? "deepest-past"),
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
        _ = __webpack_require__("chunkid");
      const _ = new Set([0, 2, 6, 13]),
        _ = new Set([4, 7, 11]);
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
          1 != (await _._.Get().HintLoadStorePackages(_, _)) ||
          _.token.reason
        )
          return null;
        const _ = [];
        _.map((_) => _._.Get().GetPackage(_))
          .filter((_) => !!_)
          .forEach((_) => __webpack_require__.push(..._.GetIncludedAppIDs()));
        const _ = Array.from(new Set(_));
        if (1 != (await _._.Get().HintLoadStoreApps(_, _)) || _.token.reason)
          return null;
        const _ = _.map((_) => _._.Get().GetApp(_))
            .filter((_) => !!_?.GetParentAppID())
            .map((_) => _.GetParentAppID()),
          _ = Array.from(new Set(_));
        if (1 != (await _._.Get().HintLoadStoreApps(_, _)) || _.token.reason)
          return null;
        return Array.from(new Set(_.concat(_)));
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
