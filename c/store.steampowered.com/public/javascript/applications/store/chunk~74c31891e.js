(self.webpackChunkstore = self.webpackChunkstore || []).push([
  [2287],
  {
    chunkid: (module) => {
      module.exports = {
        BBCodeFollowButton: "NVuxjpTCUClP-4RsNDDvk",
      };
    },
    chunkid: (module) => {
      module.exports = {
        BBCodeFollowButton: "BwHJdoHlv8wy5OypqL_b7",
        isHovered: "_2EcgCb9lHfl7I_MlirYLZL",
      };
    },
    chunkid: (module) => {
      module.exports = {
        countdownCtn: "GWWacIf04lQysYMFJma0A",
        Closed: "ATX_xEE69rX8wVxQvONEx",
        CountDownCtn: "_11RwPICMOmmvNXkOq9bjPc",
        CountDownTime: "eh0pMnSr-nk203Ealq_Rq",
        CountDownText: "_3VKQ3h7Z4wO_U-Z_vXUZkk",
        LearnMore: "_1q98mjxkCUwQuFALsiNtD7",
        Throbber: "bEkRtFmRUW_smWksM-k9g",
        WinnerInfo: "_2LTFl4ZFuL1BeNbqYPExWv",
        WinnerCount: "Z7ScP-i1XHPQn4eeFdJ3g",
        WinnerText: "chkuqox_QD6U5ID_AHTLk",
      };
    },
    chunkid: (module) => {
      module.exports = {
        "duration-app-launch": "800ms",
        storeMenuResponsiveModeWidth: "730px",
        narrowWidth: "500px",
        SuppressScrollOnBody: "_1FFwlWIoDrtb0qdN9YUwHs",
        WishlistHoverCtn: "GXjJQihysg6S5INBKClED",
        BBCodeWishlistButton: "_1dm-6uzq_x5Gqo421G3a1r",
      };
    },
    chunkid: (module, module_exports, __webpack_require__) => {
      "use strict";
      __webpack_require__._(module_exports, {
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
        giveaway_id = void 0;
        seconds_until_drawing = void 0;
        rtime_start = void 0;
        rtime_end = void 0;
        closed = void 0;
        winner_count = void 0;
        BIsValid() {
          return void 0 !== this.giveaway_id && null !== this.giveaway_id;
        }
        BStarted() {
          return (
            this.BIsValid() &&
            (this.seconds_until_drawing >= 0 || this.winner_count > 0)
          );
        }
        clone() {
          const _ = new _();
          return (
            (_.giveaway_id = this.giveaway_id),
            (_.seconds_until_drawing = this.seconds_until_drawing),
            (_.rtime_start = this.rtime_start),
            (_.rtime_end = this.rtime_end),
            (_.closed = this.closed),
            (_.winner_count = this.winner_count),
            _
          );
        }
      }
      (0, _._)([_._], _.prototype, "giveaway_id", void 0),
        (0, _._)([_._], _.prototype, "seconds_until_drawing", void 0),
        (0, _._)([_._], _.prototype, "rtime_start", void 0),
        (0, _._)([_._], _.prototype, "rtime_end", void 0),
        (0, _._)([_._], _.prototype, "closed", void 0),
        (0, _._)([_._], _.prototype, "winner_count", void 0);
      class _ {
        constructor() {
          (0, _._)(this);
        }
        m_mapGiveawayIDToNextDrawInfo = new Map();
        m_mapGiveawayIDAndInstanceToNextDrawInfo = new Map();
        m_bLoadedFromConfig = !1;
        m_mapNextDrawChangeCallback = new Map();
        GetKey(_, _) {
          return _ + "_" + _;
        }
        GetInfoByInstance(_, _) {
          return this.m_mapGiveawayIDAndInstanceToNextDrawInfo.get(
            this.GetKey(_, _),
          );
        }
        GetNextDrawChangeCallback(_) {
          return (
            this.m_mapNextDrawChangeCallback.has(_) ||
              this.m_mapNextDrawChangeCallback.set(_, new _._()),
            this.m_mapNextDrawChangeCallback.get(_)
          );
        }
        CopyToGiveaway(_, _) {
          _.closed != _.closed && (_.closed = _.closed),
            _.giveaway_id != _.giveaway_id && (_.giveaway_id = _.giveaway_id),
            _.rtime_start != _.rtime_start && (_.rtime_start = _.rtime_start),
            _.rtime_end != _.rtime_end && (_.rtime_end = _.rtime_end),
            _.winner_count != _.winner_count &&
              (_.winner_count = _.winner_count),
            _.seconds_until_drawing != _.seconds_until_drawing &&
              (_.seconds_until_drawing = _.seconds_until_drawing);
        }
        async ReloadGiveaway(_, _) {
          if (!_) return null;
          let _ = _._.STORE_BASE_URL + "prizes/nextdraw/" + _,
            _ = null,
            _ = {
              origin: self.origin,
            };
          return (
            (_ = await _().get(_, {
              params: _,
            })),
            (0, _._)(() => {
              if (
                (this.m_mapGiveawayIDToNextDrawInfo.has(_) ||
                  this.m_mapGiveawayIDToNextDrawInfo.set(_, new _()),
                this.CopyToGiveaway(
                  _.data,
                  this.m_mapGiveawayIDToNextDrawInfo.get(_),
                ),
                void 0 !== _)
              ) {
                const _ = this.GetKey(_, _);
                this.m_mapGiveawayIDAndInstanceToNextDrawInfo.has(_) ||
                  this.m_mapGiveawayIDAndInstanceToNextDrawInfo.set(_, new _()),
                  this.CopyToGiveaway(
                    _.data,
                    this.m_mapGiveawayIDAndInstanceToNextDrawInfo.get(_),
                  );
              }
            }),
            this.GetNextDrawChangeCallback(_).Dispatch(
              this.m_mapGiveawayIDToNextDrawInfo.get(_),
            ),
            this.m_mapGiveawayIDToNextDrawInfo.get(_)
          );
        }
        static s_Singleton;
        static Get() {
          return (
            _.s_Singleton ||
              ((_.s_Singleton = new _()),
              _.s_Singleton.Init(),
              "dev" == _._.WEB_UNIVERSE &&
                (window.g_GiveawayStore = _.s_Singleton)),
            _.s_Singleton
          );
        }
        Init() {
          if (!this.m_bLoadedFromConfig) {
            let _ = (0, _._)("giveawaynextdraw", "application_config");
            if (_ && _.giveaway_id) {
              let _ = new _();
              this.CopyToGiveaway(_, _),
                this.m_mapGiveawayIDToNextDrawInfo.set(_.giveaway_id, _);
            }
            this.m_bLoadedFromConfig = !0;
          }
        }
      }
      (0, _._)([_._], _.prototype, "m_mapGiveawayIDToNextDrawInfo", void 0),
        (0, _._)([_._], _.prototype, "CopyToGiveaway", null);
      class _ {
        m_intervalID;
        m_intervalCountDownID;
        static s_GlobalInstance = 0;
        m_myInstanceNumber = 0;
        constructor() {
          (this.m_myInstanceNumber = _.s_GlobalInstance),
            (_.s_GlobalInstance += 1);
        }
        ClearRefreshInterval() {
          this.m_intervalID &&
            (window.clearInterval(this.m_intervalID),
            (this.m_intervalID = void 0));
        }
        ClearCountDown() {
          this.m_intervalCountDownID &&
            (window.clearInterval(this.m_intervalCountDownID),
            (this.m_intervalCountDownID = void 0));
        }
        SetupRefreshDataInterval(_, _) {
          if ((this.ClearRefreshInterval(), !_.closed)) {
            let _ =
              _.seconds_until_drawing <= 0 && 0 == _.winner_count ? 6e4 : 5e3;
            this.m_intervalID = window.setInterval(_, _);
          }
        }
        SetupCountDown(_, _) {
          _ > 0 && (this.m_intervalCountDownID = window.setInterval(_, 1e3));
        }
      }
      function _(_, _) {
        const _ = _.Get().GetInfoByInstance(_, _.m_myInstanceNumber);
        (_.seconds_until_drawing -= 1),
          0 == _.seconds_until_drawing && _.ClearCountDown();
      }
      function _(_) {
        const [_] = (0, _.useState)(new _()),
          _ = (0, _._)();
        (0, _.useEffect)(
          () => (
            _.Get()
              .ReloadGiveaway(_, _.m_myInstanceNumber)
              .then((_) => {
                _.SetupRefreshDataInterval(_, () =>
                  (function (_, _) {
                    const _ = _.Get().GetInfoByInstance(
                      _,
                      _.m_myInstanceNumber,
                    );
                    _ &&
                      __webpack_require__.BIsValid() &&
                      _.seconds_until_drawing <= 0 &&
                      !_.closed &&
                      (_.ClearCountDown(),
                      _.Get()
                        .ReloadGiveaway(_, _.m_myInstanceNumber)
                        .then((_) => {
                          _.SetupCountDown(_.seconds_until_drawing, () =>
                            _(_, _),
                          );
                        }));
                  })(_, _),
                ),
                  _.SetupCountDown(_.seconds_until_drawing, () => _(_, _)),
                  __webpack_require__();
              }),
            () => {
              _.ClearRefreshInterval(), _.ClearCountDown();
            }
          ),
          [_, _, _],
        );
        const _ = _.Get().GetInfoByInstance(_, _.m_myInstanceNumber),
          [_, _, _] = (0, _._)(() => [
            _?.winner_count,
            _?.closed,
            _?.seconds_until_drawing,
          ]);
        return {
          bLoadingGiveawayInfo:
            !_ || null == _.giveaway_id || !_.BStarted() || void 0 === _,
          winner_count: _,
          closed: _,
          seconds_until_drawing: _,
        };
      }
      (0, _._)([_._], _.prototype, "ClearRefreshInterval", null),
        (0, _._)([_._], _.prototype, "ClearCountDown", null),
        (0, _._)([_._], _.prototype, "SetupRefreshDataInterval", null),
        (0, _._)([_._], _.prototype, "SetupCountDown", null);
    },
    chunkid: (module, module_exports, __webpack_require__) => {
      "use strict";
      __webpack_require__._(module_exports, {
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
        _ = __webpack_require__._(_),
        _ = __webpack_require__("chunkid");
      class _ {
        m_counts = null;
        m_promise;
        GetCounts() {
          return this.m_counts;
        }
        async LoadCounts() {
          return Boolean(this.m_counts)
            ? this.m_counts
            : (this.m_promise || (this.m_promise = this.LoadInternalCount()),
              this.m_promise);
        }
        async LoadInternalCount() {
          let _ = null;
          try {
            const _ =
                _._.STORE_BASE_URL + "saleaction/ajaxgetuserdeckcompatcounts",
              _ = await _().get(_, {});
            if (200 == _?.status && 1 == _.data?.success && _.data?.counts)
              return (this.m_counts = _.data.counts), this.m_counts;
            _ = (0, _._)(_);
          } catch (_) {
            _ = (0, _._)(_);
          }
          return (
            console.error(
              "CDeckCompCountStore.LoadInternalCount failed: " + _?.strErrorMsg,
              _,
            ),
            null
          );
        }
        static s_globalSingletonStore;
        static Get() {
          return (
            _.s_globalSingletonStore ||
              ((_.s_globalSingletonStore = new _()),
              ("dev" != _._.WEB_UNIVERSE && "beta" != _._.WEB_UNIVERSE) ||
                (window.g_DeckCompatCountStores = _.s_globalSingletonStore)),
            _.s_globalSingletonStore
          );
        }
        constructor() {
          if (document.getElementById("application_config")) {
            let _ = (0, _._)("deckcompatcount", "application_config");
            _.ValidateListCompat(_) && (this.m_counts = _);
          }
        }
        static ValidateListCompat(_) {
          const _ = _;
          return (
            _ &&
            "number" == typeof _.verified &&
            "number" == typeof _.unsupported &&
            "number" == typeof _.playable
          );
        }
      }
      var _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid");
      const _ = _.Fragment;
      function _(_) {
        const {
            reservationPackageID: _,
            event: __webpack_require__,
            depositPackageID: _,
            bIsPreview: _,
            psuLessPackageID: _,
            strOutOfStockOverride: _,
            strDeliveryOverride: _,
            bDeliveryOverrideOnlyIfOutOfStock: _,
          } = _,
          _ = (0, _._)(_),
          _ = (0, _._)(_),
          _ = (0, _.useMemo)(
            () => [
              {
                unique_id: "reservation_bbcode_" + _,
                reservation_package: _,
                deposit_package: _,
                localized_reservation_desc: (0, _._)([], 31, null),
                localized_out_of_stock_override: (0, _._)(
                  [_ || null],
                  31,
                  null,
                ),
                localized_delivery_override_desc: (0, _._)(
                  [_ || null],
                  31,
                  null,
                ),
                override_delivery_only_out_of_stock: Boolean(_),
                psu_less_package: _,
              },
            ],
            [_, _, _, _, _, _],
          );
        if (!_ || (_ && !_))
          return _.createElement(_._, {
            string: (0, _._)("#Loading"),
            size: "small",
            position: "center",
          });
        const _ = !_._.logged_in || !_.account_restricted_from_purchasing;
        return _.createElement(
          _._,
          null,
          _.createElement(
            _.Suspense,
            {
              fallback: null,
            },
            _.createElement(_, {
              bIsPreview: _,
              rgReservationDef: _,
            }),
          ),
          Boolean(_.allow_purchase_in_country) &&
            _.createElement(
              "div",
              {
                className: _[0].unique_id,
              },
              _.createElement(_._, {
                reservationDef: _[0],
                hardwareDetail: _,
                bPSULessModel: !1,
              }),
              _ &&
                _.createElement(_._, {
                  event: __webpack_require__,
                  reservationDef: _[0],
                  hardwareDetail: _,
                }),
              Boolean(_?.allow_purchase_in_country) &&
                _.createElement(_._, {
                  reservationDef: _[0],
                  hardwareDetail: _,
                  bPSULessModel: !0,
                }),
            ),
        );
      }
      var _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__._(_),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__._(_),
        _ = __webpack_require__("chunkid");
      function _(_) {
        const { appid: _, color: __webpack_require__, bgcolor: _ } = _,
          _ = (0, _._)(),
          _ = (0, _._)(_),
          _ = (0, _._)(_);
        return _.createElement(
          "div",
          {
            className: _().WishlistHoverCtn,
          },
          _.createElement(_._, {
            snr: _,
            _: _,
            classOverride: (0, _._)(
              _().WishlistButtonNotTop,
              _().BBCodeWishlistButton,
              "WishlistButton",
            ),
            styleOverride: {
              color: __webpack_require__,
              backgroundColor: _,
            },
          }),
        );
      }
      function _(_) {
        const _ = Number(_.args.appid);
        if (!_) return null;
        const _ = (0, _._)(_.args.color, "black"),
          _ = (0, _._)(_.args.bgcolor, "white");
        return _.createElement(_, {
          appid: _,
          color: _,
          bgcolor: _,
        });
      }
      var _ = __webpack_require__("chunkid"),
        _ = __webpack_require__._(_);
      function _(_) {
        const { appid: _, color: __webpack_require__, bgcolor: _ } = _;
        (0, _._)();
        return _.createElement(_._, {
          appID: _,
          classOverride: (0, _._)(
            _().FollowGameButtonNotTop,
            _().BBCodeFollowButton,
          ),
          styleOverride: {
            color: __webpack_require__,
            backgroundColor: _,
          },
        });
      }
      function _(_) {
        const _ = Number(_.args.appid);
        if (!_) return null;
        const _ = (0, _._)(_.args.color, "black"),
          _ = (0, _._)(_.args.bgcolor, "white");
        return _.createElement(_, {
          appid: _,
          color: _,
          bgcolor: _,
        });
      }
      var _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid");
      function _(_) {
        return _ < 10 ? "0" + _ : _;
      }
      function _(_) {
        const { giveawayid: _ } = _,
          _ = (0, _._)(_),
          {
            bLoadingGiveawayInfo: _,
            winner_count: _,
            closed: _,
            seconds_until_drawing: _,
          } = _;
        return _
          ? null
          : _.createElement(
              "div",
              {
                className: _.countdownCtn,
              },
              Boolean(_) &&
                _.createElement(
                  "div",
                  {
                    className: _.Closed,
                  },
                  _ > 0
                    ? (0, _._)("#Giveaway_Closed", (0, _._)(_))
                    : (0, _._)("#Giveaway_Closed_NoWinnerInfo"),
                ),
              Boolean(!_) &&
                _.createElement(
                  _.Fragment,
                  null,
                  Boolean(_ <= 0)
                    ? _.createElement(
                        "div",
                        {
                          className: _.Throbber,
                        },
                        _.createElement(_._, {
                          size: "small",
                        }),
                        _.createElement(
                          "div",
                          null,
                          (0, _._)("#Giveaway_RandomDraw"),
                        ),
                      )
                    : _.createElement(
                        "div",
                        {
                          className: _.CountDownCtn,
                        },
                        _.createElement(
                          "div",
                          {
                            className: _.CountDownTime,
                          },
                          _(Math.floor(_ / 60)) + ":" + _(_ % 60),
                        ),
                        _.createElement(
                          "div",
                          {
                            className: _.CountDownText,
                          },
                          (0, _._)("#Giveaway_CountDown2"),
                          " ",
                          (0, _._)("#Giveaway_KeepWatching"),
                        ),
                      ),
                  Boolean(_ > 0) &&
                    _.createElement(
                      "div",
                      {
                        className: _.WinnerInfo,
                      },
                      _.createElement(
                        "div",
                        {
                          className: _.WinnerCount,
                        },
                        (0, _._)(_),
                      ),
                      _.createElement(
                        "div",
                        {
                          className: _.WinnerText,
                        },
                        (0, _._)("#Giveaway_Congratulation"),
                      ),
                    ),
                ),
            );
      }
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
        _ = __webpack_require__("chunkid");
      function _(_) {
        const { eventModel: _, nEventBadgeID: __webpack_require__ } = _,
          _ = (0, _._)(__webpack_require__);
        if (_?.level > 0) {
          let _ = _.level;
          if (_?.BHasSaleEnabled()) {
            const _ = _.GetSaleSectionsByType("badge_progress");
            if (1 == _?.length) {
              const _ = _[0].badge_progress;
              if (
                _?.event_badgeid == __webpack_require__ &&
                _?.granted_by_discovery_queue
              ) {
                const _ = _.levels[_.levels.length - 1].level;
                return _.createElement(_, {
                  eventModel: _,
                  nBadgeLevel: _,
                  nMaxLevel: _,
                });
              }
            }
          }
          return _.createElement(
            "span",
            {
              className: "DisplayBadgeProgress",
            },
            (0, _._)(_),
          );
        }
        return null;
      }
      function _(_) {
        const {
            eventModel: _,
            nBadgeLevel: __webpack_require__,
            nMaxLevel: _,
          } = _,
          _ = _.useMemo(() => {
            const _ = _.GetSaleSections().filter(
              (_) => "discoveryqueue" == _.section_type,
            );
            return _?.length > 0 ? _[0] : null;
          }, [_]),
          { storePageFilter: _, eStoreDiscoveryQueueType: _ } = _.useMemo(
            () => (0, _._)(_, _),
            [_, _],
          ),
          _ = (0, _._)(_, _),
          _ = Math.min(__webpack_require__ + _, _);
        return _.createElement(
          "span",
          {
            className: "DisplayBadgeProgress",
          },
          (0, _._)(_),
        );
      }
      function _(_) {
        const { event: _ } = _.context,
          _ = Number.parseInt((0, _._)(_.args, "eventid"));
        return _._.logged_in && _
          ? _.createElement(_, {
              nEventBadgeID: _,
              eventModel: _,
            })
          : null;
      }
      function _(_) {
        const { nDoorIndex: _, children: __webpack_require__ } = _,
          _ = (0, _._)(_),
          { fnOpenDoor: _ } = (0, _._)(),
          [_, _] = _.useState(!1),
          [_, _] = _.useState(!1);
        return _.createElement(
          _._,
          {
            disabled: _,
            onClick: (_) => {
              _ ||
                (_._.logged_in
                  ? (_(!0),
                    _(_, !0, null, !1)
                      .then((_) => {
                        _ || _(!0), _(!1);
                      })
                      .catch(() => {
                        _(!0), _(!1);
                      }))
                  : (0, _._)());
            },
          },
          Boolean(_)
            ? _.createElement("div", null, (0, _._)("#GrantAwardError_Busy"))
            : _.createElement(
                _.Fragment,
                null,
                Boolean(_) &&
                  _.createElement(_._, {
                    size: "small",
                  }),
                Boolean(_) && _.createElement(_.Jlk, null),
                __webpack_require__,
              ),
        );
      }
      function _(_) {
        const _ = Number.parseInt((0, _._)(_.args)) || 0;
        return _ >= 0 && _ < 32
          ? _.createElement(
              _,
              {
                nDoorIndex: _,
              },
              _.children,
            )
          : null;
      }
      const _ = (0, _._)(_._);
      function _(_) {
        const _ = Number.parseInt((0, _._)(_.args)),
          { event: __webpack_require__, showErrorInfo: _ } = _.context;
        if (_) {
          const _ = __webpack_require__?.jsondata?.sale_sections?.findIndex(
            (_) => _.unique_id == _,
          );
          if (_ >= 0) {
            const _ = __webpack_require__.GetDayIndexFromEventStart();
            return _.createElement(
              _._,
              {
                location: _ ? 2 : 0,
              },
              _.createElement(_, {
                event: __webpack_require__,
                section: __webpack_require__.jsondata.sale_sections[_],
                activeTab: new _._(null, _),
                language: _.language,
                nSaleDayIndex: _,
                promotionName: "",
                appVisibilityTracker: null,
                ePreviewMode: _
                  ? _._.EPreviewMode_Enabled
                  : _._.EPreviewMode_Disabled,
              }),
            );
          }
          if (_)
            return _.createElement(
              "div",
              {
                className: _.ErrorDiv,
              },
              "Error could not find sale section ",
              _,
            );
        }
        return null;
      }
      var _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__._(_);
      function _(_) {
        const { clanAccountID: _, color: __webpack_require__, bgcolor: _ } = _;
        (0, _._)();
        const [_, _] = _.useState(!1);
        return _.createElement(
          "div",
          {
            className: (0, _._)(_().BBCodeFollowButton, _ && _().isHovered),
            onMouseEnter: () => _(!0),
            onMouseLeave: () => _(!1),
          },
          _.createElement(_._, {
            nCreatorAccountID: _,
            classOverride: _().FollowGameButtonNotTop,
            styleOverride: {
              color: __webpack_require__,
              backgroundColor: _,
            },
            followType: "group",
          }),
        );
      }
      function _(_) {
        const { event: _ } = _.context,
          _ = Number(_.args.groupid) || _.clanSteamID.GetAccountID();
        if (!_) return null;
        const _ = (0, _._)(_.args.color, "black"),
          _ = (0, _._)(_.args.bgcolor, "white");
        return _.createElement(_, {
          clanAccountID: _,
          color: _,
          bgcolor: _,
        });
      }
      let _ = null;
      function _(_) {
        const { event: _ } = _.context,
          _ = Number.parseInt((0, _._)(_.args, "appid")),
          _ = Number.parseInt((0, _._)(_.args, "itemdefid")),
          _ = Number.parseInt((0, _._)(_.args, "maxquantity")),
          _ = (0, _._)(_.args, "calltoaction");
        return (0, _._)(_, _)
          ? _.createElement(_._, {
              language: _.language,
              clanAccountID: _.clanSteamID.GetAccountID(),
              itemDefSetting: {
                nAppID: _,
                nItemDefID: _,
                max_quantity: _,
              },
              strCallToAction: _,
            })
          : _.createElement(_._, {
              size: "small",
              position: "center",
              string: (0, _._)("#Loading"),
            });
      }
      function _(_) {
        const _ = (function () {
          const [_, _] = _.useState(_.Get().GetCounts());
          return (
            _.useEffect(() => {
              _ || _.Get().LoadCounts().then(_);
            }, []),
            _
          );
        })();
        if (!_)
          return _.createElement(_._, {
            size: "small",
          });
        const _ = Number.parseInt((0, _._)(_.args));
        let _ = _.verified;
        switch (_) {
          case 2:
            _ = _.playable;
            break;
          case 1:
            _ = _.unsupported;
        }
        return _.createElement("span", null, (0, _._)(Number(_)));
      }
      function _(_) {
        const _ = (0, _._)("library");
        if (!_)
          return _.createElement(_._, {
            size: "small",
          });
        const _ = Number.parseInt((0, _._)(_.args));
        let _ = _.verifiedList?.length || 0;
        switch (_) {
          case 2:
            _ = _.playableList?.length || 0;
            break;
          case 1:
            _ = _.unsupportedList?.length || 0;
            break;
          case 0:
            _ = _.unknownList?.length || 0;
        }
        return _.createElement("span", null, (0, _._)(Number(_)));
      }
      function _(_) {
        const _ = Number.parseInt((0, _._)(_.args)),
          _ =
            "hide" in _.args &&
            Boolean(Number.parseInt((0, _._)(_.args, "hide")));
        return _ >= 0
          ? _.createElement(
              _,
              {
                nDoorIndex: _,
                bHide: _,
              },
              _.children,
            )
          : null;
      }
      function _(_) {
        const { nDoorIndex: _, bHide: __webpack_require__, children: _ } = _,
          _ = (0, _._)(_);
        return null == _
          ? null
          : (_ && !__webpack_require__) || (!_ && __webpack_require__)
            ? _.createElement(_.Fragment, null, _.children)
            : null;
      }
      function _(_) {
        if (_._.logged_in) {
          const _ = Number.parseInt((0, _._)(_.args)),
            _ = Number.parseInt((0, _._)(_.args, "mod"));
          if (_ > 0 && _ < _ && _._.accountid % _ == _) return _.children;
        }
        return null;
      }
      function _(_) {
        const _ = (0, _._)(_.args);
        return _?.trim().length > 0
          ? _.createElement(
              "div",
              {
                className: _.trim(),
              },
              _.children,
            )
          : _.createElement(_.Fragment, null, _.children);
      }
      function _(_) {
        return _.createElement(
          "span",
          {
            className: _.LocalizeBlock,
          },
          (0, _._)(
            _.children,
            _.createElement("b", null),
            _.createElement("b", null),
            _.createElement("b", null),
            _.createElement("b", null),
          ),
        );
      }
      function _(_) {
        let _ = (0, _._)(_.args);
        return _
          ? _.createElement(_, {
              giveawayid: _,
            })
          : _.createElement(_.Fragment, null);
      }
      function _(_) {
        const { event: _, showErrorInfo: __webpack_require__ } = _.context,
          _ = Number.parseInt((0, _._)(_.args));
        if (_) {
          const _ = Number.parseInt((0, _._)(_.args, "depositpackageid")),
            _ = Number.parseInt((0, _._)(_.args, "psulesspackageid")),
            _ = (0, _._)(_.args, "out_of_stock_override"),
            _ = (0, _._)(_.args, "delivery_override"),
            _ = (0, _._)(_.args, "delivery_override_out_of_stock");
          return _.createElement(_, {
            reservationPackageID: _,
            event: _,
            depositPackageID: _,
            psuLessPackageID: _,
            strOutOfStockOverride: _,
            strDeliveryOverride: _ || _,
            bDeliveryOverrideOnlyIfOutOfStock: Boolean(_),
          });
        }
        return _.createElement(_.Fragment, null);
      }
      var _ = __webpack_require__("chunkid");
      function _(_) {
        const { bSalePage: _ } = _,
          [__webpack_require__, _] = _.useState(_._.IsInitialized());
        return (
          _.useEffect(() => {
            _._.Init(new _._(_._.WEBAPI_BASE_URL)),
              _._.Init(),
              _ &&
                _._.AddDictionary(
                  (null == _ &&
                    (_ = new Map([
                      [
                        "itemdef",
                        {
                          Constructor: _,
                          autocloses: !1,
                          skipInternalNewline: !0,
                          allowWrapTextForCopying: !0,
                        },
                      ],
                      [
                        "wishlist",
                        {
                          Constructor: _,
                          autocloses: !1,
                        },
                      ],
                      [
                        "followgame",
                        {
                          Constructor: _,
                          autocloses: !1,
                        },
                      ],
                      [
                        "followgroup",
                        {
                          Constructor: _,
                          autocloses: !1,
                        },
                      ],
                      [
                        "deckcompatcount",
                        {
                          Constructor: _,
                          autocloses: !1,
                        },
                      ],
                      [
                        "deckcompatuserlibrarycount",
                        {
                          Constructor: _,
                          autocloses: !1,
                        },
                      ],
                      [
                        "giveawayinfo",
                        {
                          Constructor: _,
                          autocloses: !1,
                        },
                      ],
                      [
                        "price",
                        {
                          Constructor: _._,
                          autocloses: !1,
                        },
                      ],
                      [
                        "pricesavings",
                        {
                          Constructor: _._,
                          autocloses: !1,
                        },
                      ],
                      [
                        "eventdoorvisibility",
                        {
                          Constructor: _,
                          autocloses: !1,
                        },
                      ],
                      [
                        "chooseaccount",
                        {
                          Constructor: _,
                          autocloses: !1,
                        },
                      ],
                      [
                        "badgecurrentlevel",
                        {
                          Constructor: _,
                          autocloses: !1,
                        },
                      ],
                      [
                        "optindoorquest",
                        {
                          Constructor: _,
                          autocloses: !1,
                        },
                      ],
                      [
                        "classname",
                        {
                          Constructor: _,
                          autocloses: !1,
                        },
                      ],
                      [
                        "localize",
                        {
                          Constructor: _,
                          autocloses: !1,
                        },
                      ],
                      [
                        "salesection",
                        {
                          Constructor: _,
                          autocloses: !1,
                        },
                      ],
                      [
                        "reservationbutton",
                        {
                          Constructor: _,
                          autocloses: !1,
                        },
                      ],
                    ])),
                  _),
                ),
              _._.InitGlobal().then(() => _(!0));
          }, [_]),
          _.useEffect(() => {
            const _ = (0, _._)();
            _ && _.locale(_);
          }, []),
          __webpack_require__ ? _.children : null
        );
      }
    },
  },
]);
