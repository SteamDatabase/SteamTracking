(() => {
  (self.webpackChunkstore = self.webpackChunkstore || []).push([
    [61975],
    {
      chunkid: (module, module_exports, __webpack_require__) => {
        "use strict";
        __webpack_require__._(module_exports, {
          _: () => _,
          _: () => _,
        });
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        let _ = 0;
        function _(_, _) {
          (0, _.useEffect)(() => {
            if (!(_ || _))
              return (
                _++,
                () => {
                  --_ == 0 && (0, _._)();
                }
              );
          }, [_, _]);
        }
        function _(_) {
          const [_, _] = (0, _.useState)(!1);
          (0, _.useEffect)(() => {
            const _ = window.setTimeout(() => _(!0), _);
            return () => window.clearTimeout(_);
          }, [_]),
            _(_);
        }
      },
      chunkid: (module, module_exports, __webpack_require__) => {
        "use strict";
        __webpack_require__._(module_exports, {
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
          _ = Object.defineProperty,
          _ = Object.getOwnPropertyDescriptor,
          _ = (_, _, _, _) => {
            for (
              var _ = _ > 1 ? void 0 : _ ? _(_, _) : _, _ = _.length - 1, _;
              _ >= 0;
              _--
            )
              (_ = _[_]) && (_ = (_ ? _(_, _, _) : _(_)) || _);
            return _ && _ && _(_, _, _), _;
          };
        const _ = class _ {
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
            return this.giveaway_id !== void 0 && this.giveaway_id !== null;
          }
          BStarted() {
            return this.BIsValid()
              ? this.seconds_until_drawing !== void 0 &&
                this.seconds_until_drawing >= 0
                ? !0
                : this.winner_count !== void 0 && this.winner_count > 0
              : !1;
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
        };
        _([_._], _.prototype, "giveaway_id", 2),
          _([_._], _.prototype, "seconds_until_drawing", 2),
          _([_._], _.prototype, "rtime_start", 2),
          _([_._], _.prototype, "rtime_end", 2),
          _([_._], _.prototype, "closed", 2),
          _([_._], _.prototype, "winner_count", 2);
        let _ = _;
        const _ = class _ {
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
            let _ = this.m_mapNextDrawChangeCallback.get(_);
            return (
              _ ||
                ((_ = new _._()), this.m_mapNextDrawChangeCallback.set(_, _)),
              _
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
              _ = {
                origin: self.origin,
              };
            const _ = await _().get(_, {
                params: _,
              }),
              _ = (0, _._)(() => {
                let _ = this.m_mapGiveawayIDToNextDrawInfo.get(_);
                if (
                  (_ ||
                    ((_ = new _()),
                    this.m_mapGiveawayIDToNextDrawInfo.set(_, _)),
                  this.CopyToGiveaway(_.data, _),
                  _ !== void 0)
                ) {
                  const _ = this.GetKey(_, _);
                  let _ = this.m_mapGiveawayIDAndInstanceToNextDrawInfo.get(_);
                  _ ||
                    ((_ = new _()),
                    this.m_mapGiveawayIDAndInstanceToNextDrawInfo.set(_, _)),
                    this.CopyToGiveaway(_.data, _);
                }
                return _;
              });
            return this.GetNextDrawChangeCallback(_).Dispatch(_), _;
          }
          static s_Singleton;
          static Get() {
            return (
              _.s_Singleton ||
                ((_.s_Singleton = new _()), _.s_Singleton.Init()),
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
        };
        _([_._], _.prototype, "m_mapGiveawayIDToNextDrawInfo", 2),
          _([_._], _.prototype, "CopyToGiveaway", 1);
        let _ = _;
        const _ = class _ {
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
                _.seconds_until_drawing !== void 0 &&
                _.seconds_until_drawing <= 0 &&
                _.winner_count == 0
                  ? 60 * 1e3
                  : 5 * 1e3;
              this.m_intervalID = window.setInterval(_, _);
            }
          }
          SetupCountDown(_, _) {
            _ !== void 0 &&
              _ > 0 &&
              (this.m_intervalCountDownID = window.setInterval(_, 1e3));
          }
        };
        _([_._], _.prototype, "ClearRefreshInterval", 1),
          _([_._], _.prototype, "ClearCountDown", 1),
          _([_._], _.prototype, "SetupRefreshDataInterval", 1),
          _([_._], _.prototype, "SetupCountDown", 1);
        let _ = _;
        function _(_, _) {
          const _ = _.Get().GetInfoByInstance(_, _.m_myInstanceNumber);
          !_ ||
            _.seconds_until_drawing === void 0 ||
            ((_.seconds_until_drawing -= 1),
            _.seconds_until_drawing == 0 && _.ClearCountDown());
        }
        function _(_, _) {
          const _ = _.Get().GetInfoByInstance(_, _.m_myInstanceNumber);
          _ &&
            _.BIsValid() &&
            _.seconds_until_drawing !== void 0 &&
            _.seconds_until_drawing <= 0 &&
            !_.closed &&
            (_.ClearCountDown(),
            _.Get()
              .ReloadGiveaway(_, _.m_myInstanceNumber)
              .then((_) => {
                _ && _.SetupCountDown(_.seconds_until_drawing, () => _(_, _));
              }));
        }
        function _(_) {
          const [_] = (0, _.useState)(new _()),
            _ = (0, _._)();
          (0, _.useEffect)(
            () => (
              _.Get()
                .ReloadGiveaway(_, _.m_myInstanceNumber)
                .then((_) => {
                  _ &&
                    (_.SetupRefreshDataInterval(_, () => _(_, _)),
                    _.SetupCountDown(_.seconds_until_drawing, () => _(_, _)),
                    _());
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
              !_ || _.giveaway_id == null || !_.BStarted() || _ === void 0,
            winner_count: _,
            closed: _,
            seconds_until_drawing: _,
          };
        }
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
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__._(_),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__._(_),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = Object.defineProperty,
          _ = Object.getOwnPropertyDescriptor,
          _ = (_, _, _, _) => {
            for (
              var _ = _ > 1 ? void 0 : _ ? _(_, _) : _, _ = _.length - 1, _;
              _ >= 0;
              _--
            )
              (_ = _[_]) && (_ = (_ ? _(_, _, _) : _(_)) || _);
            return _ && _ && _(_, _, _), _;
          };
        const _ = (_) => {
          let { bShowOnlyInitialEvent: _ } = _;
          const _ = (0, _._)(),
            _ = (0, _._)();
          return (0, _.jsx)(_._, {
            children: (0, _.jsx)(_, {
              ..._,
              bShowOnlyInitialEvent: _ || _,
              tracker: _,
            }),
          });
        };
        let _ = class extends _.Component {
          state = {
            bLoading: !1,
            eventModel: this.props.eventModel,
          };
          m_refParent = _.createRef();
          m_cancelSignal = _().CancelToken.source();
          componentDidMount() {
            this.state.eventModel ||
              this.setState(
                {
                  bLoading: !0,
                },
                this.LoadEvent,
              );
            let _ = this.GetBodyElement();
            _ &&
              this.props.bPrimaryPageFeature &&
              _.classList.add(_.BodyNoScroll);
          }
          componentWillUnmount() {
            this.m_cancelSignal.cancel("EventInfiniteScrollModal unmounting");
            let _ = this.GetBodyElement();
            _ &&
              this.props.bPrimaryPageFeature &&
              _.classList.remove(_.BodyNoScroll);
          }
          GetBodyElement() {
            return this.m_refParent.current
              ? this.m_refParent.current.closest("body")
              : null;
          }
          async LoadEvent() {
            const {
              appid: _,
              clanSteamID: _,
              announcementGID: _,
              partnerEventStore: _,
              additionalParams: _,
            } = this.props;
            _.LoadAdjacentPartnerEventsByAnnouncement(
              _,
              _,
              _,
              0,
              3,
              _,
              this.m_cancelSignal,
            )
              .then((_) => {
                _.length > 0
                  ? this.setState(
                      {
                        bLoading: !1,
                        eventModel: _[0],
                      },
                      this.HandleReadEvent,
                    )
                  : (this.props.onEventNotFound && this.props.onEventNotFound(),
                    this.setState({
                      bLoading: !1,
                    }));
              })
              .catch((_) => {
                let _ = (0, _._)(_);
                console.error(
                  "EventInfiniteScrollModal failed " + _.strErrorMsg,
                  _,
                ),
                  this.setState({
                    bLoading: !1,
                  });
              });
          }
          async HandleReadEvent() {
            const { eventModel: _ } = this.state,
              { trackingLocation: _, tracker: _ } = this.props;
            _ &&
              _.BIsPartnerEvent() &&
              (_.RecordEventRead(_, _ ?? _._._), _.Flush());
          }
          render() {
            const { bShowOnlyInitialEvent: _ } = this.props,
              { bLoading: _, eventModel: _ } = this.state;
            if (_)
              return (0, _.jsx)(_._, {
                active: !0,
                children: (0, _.jsx)("div", {
                  className: _().FlexCenter,
                  style: {
                    height: "400px",
                  },
                  children: (0, _.jsx)(_._, {}),
                }),
              });
            const {
              closeModal: _,
              appid: _,
              clanSteamID: _,
              className: _,
              partnerEventStore: _,
              showAppHeader: _,
              bPrimaryPageFeature: _,
              additionalParams: _,
              eventClassName: _,
            } = this.props;
            let _;
            _._.IN_CLIENT &&
              _?.appid &&
              (_._.Get().HintLoad(),
              _._.Get().BOwnsApp(_.appid) &&
                (_ = (_) =>
                  (0, _._)(_, "steam://nav/games/details/" + _.appid)));
            const _ = (0, _.jsx)(_._, {
              children: (_) =>
                (0, _.jsx)(_._, {
                  initialEvent: _,
                  appid: _,
                  clanSteamID: _,
                  partnerEventStore: _,
                  emoticonStore: _,
                  closeModal: _ ? void 0 : _,
                  showAppHeader: _,
                  bShowOnlyInitialEvent: _,
                  additionalParams: _,
                  eventClassName: _,
                  onAppIconClick: _,
                }),
            });
            return _
              ? _
              : (0, _.jsx)(_._, {
                  active: !0,
                  children: (0, _.jsx)("div", {
                    className: _,
                    children: _,
                  }),
                });
          }
        };
        _ = _([_._], _);
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
          _ = __webpack_require__("chunkid");
        async function _() {
          const _ = await (0, _._)(
            "ajaxgetuserdeckcompatcounts",
            new URLSearchParams(),
          );
          if (!_.counts)
            throw new Error(
              "ajaxgetuserdeckcompatcounts answered without counts",
            );
          return _.counts;
        }
        const _ = 300 * 1e3;
        function _() {
          return ["DeckCompatCounts"];
        }
        function _() {
          return {
            queryKey: _(),
            queryFn: () => _(),
            staleTime: _,
            retry: !1,
          };
        }
        function _() {
          const { data: _ } = (0, _._)(_());
          return _;
        }
        function _(_, _) {
          switch (_) {
            case _._:
              return _?.playable;
            case _._:
              return _?.unsupported;
            default:
              return _?.verified;
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
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        function _(_) {
          const { event: _ } = _.context,
            _ = Number.parseInt((0, _._)(_.args)),
            _ = _.useMemo(() => {
              if (_)
                return _.jsondata.sale_sections?.find(
                  (_) =>
                    _.section_type == "vo_internal" &&
                    (_.internal_section_data?.internal_type ==
                      "reservation_widget" ||
                      _.internal_section_data?.internal_type ==
                        "while_supplies_last"),
                );
            }, [_]);
          if (_ && _) {
            const _ = Number.parseInt((0, _._)(_.args, "depositpackageid")),
              _ = Number.parseInt((0, _._)(_.args, "psulesspackageid")),
              _ = (0, _._)(_.args, "out_of_stock_override"),
              _ = (0, _._)(_.args, "delivery_override"),
              _ = (0, _._)(_.args, "delivery_override_out_of_stock");
            return (0, _.jsx)(_, {
              section: _,
              reservationPackageID: _,
              depositPackageID: _,
              psuLessPackageID: _,
              strOutOfStockOverride: _,
              strDeliveryOverride: _ || _,
              bDeliveryOverrideOnlyIfOutOfStock: !!_,
              PreviewActions: _.PreviewActions,
            });
          }
          return (0, _.jsx)(_.Fragment, {});
        }
        function _(_) {
          const {
              reservationPackageID: _,
              depositPackageID: _,
              bIsPreview: _,
              psuLessPackageID: _,
              strOutOfStockOverride: _,
              strDeliveryOverride: _,
              bDeliveryOverrideOnlyIfOutOfStock: _,
              section: _,
              PreviewActions: _,
            } = _,
            { data: _ } = (0, _._)(_),
            { data: _ } = (0, _._)(_),
            _ = (0, _.useMemo)(
              () => [
                {
                  unique_id: "reservation_bbcode_" + _,
                  reservation_package: _,
                  deposit_package: _,
                  localized_reservation_desc: (0, _._)([], _.bP9, null),
                  localized_out_of_stock_override: (0, _._)(
                    [_ || null],
                    _.bP9,
                    null,
                  ),
                  localized_delivery_override_desc: (0, _._)(
                    [_ || null],
                    _.bP9,
                    null,
                  ),
                  override_delivery_only_out_of_stock: !!_,
                  psu_less_package: _,
                },
              ],
              [_, _, _, _, _, _],
            );
          if (!_ || (_ && !_))
            return (0, _.jsx)(_._, {
              string: (0, _._)("#Loading"),
              size: "small",
              position: "center",
            });
          const _ = !_._.logged_in || !_.account_restricted_from_purchasing,
            _ =
              _.reservation_state == _._.k_EPurchaseReservationState_Reserved
                ? _
                : void 0;
          return (0, _.jsxs)(_._, {
            children: [
              _ &&
                (0, _.jsx)(_.Suspense, {
                  fallback: null,
                  children: (0, _.jsx)(_, {
                    bIsPreview: !!_,
                    rgReservationDef: _,
                  }),
                }),
              !!_.allow_purchase_in_country &&
                (0, _.jsxs)("div", {
                  className: _[0].unique_id,
                  children: [
                    (0, _.jsx)(_._, {
                      reservationDef: _[0],
                      hardwareDetail: _,
                      bPSULessModel: !1,
                      reservedHardwareDetail: _,
                    }),
                    _ &&
                      (0, _.jsx)(_._, {
                        section: _,
                        reservationDef: _[0],
                        hardwareDetail: _,
                        reservedHardwareDetail: _,
                      }),
                    _ &&
                      _?.allow_purchase_in_country &&
                      (0, _.jsx)(_._, {
                        reservationDef: _[0],
                        hardwareDetail: _,
                        bPSULessModel: !0,
                        reservedHardwareDetail: void 0,
                      }),
                  ],
                }),
            ],
          });
        }
        var _ = __webpack_require__("chunkid"),
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
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__._(_);
        function _(_) {
          const { appID: _, classOverride: _, styleOverride: _ } = _,
            [_, _] = (0, _.useState)(!1),
            _ = (0, _._)("GameHoverFollowButton"),
            { elDialogElement: _, fnShowLogonDialog: _ } = (0, _._)(),
            _ = (0, _._)(_),
            { mutateAsync: _ } = (0, _._)(_, !_, void 0),
            _ = async (_) => {
              _.preventDefault(),
                _.stopPropagation(),
                _._.logged_in
                  ? (_(!0), await _(), _.token.reason || _(!1))
                  : _();
            };
          return (0, _.jsxs)(_._, {
            className: (0, _._)(_().FollowButton, _),
            onClick: _,
            style: _,
            children: [
              _ ? (0, _.jsx)(_.pPV, {}) : (0, _.jsx)(_.c9e, {}),
              (0, _.jsx)("div", {
                className: (0, _._)(
                  _().FollowButtonText,
                  _ && _().FollowLoadingText,
                  "FollowGameButton",
                ),
                children: (0, _._)(
                  _ ? "#Sale_StopFollowingGame" : "#Sale_FollowGame",
                ),
              }),
              _,
            ],
          });
        }
        function _(_) {
          const { appid: _, color: _, bgcolor: _ } = _,
            _ = (0, _._)();
          return (0, _.jsx)(_, {
            appID: _,
            classOverride: (0, _._)(
              _().FollowGameButtonNotTop,
              _().BBCodeFollowButton,
            ),
            styleOverride: {
              color: _,
              backgroundColor: _,
            },
          });
        }
        function _(_) {
          const _ = Number(_.args.appid);
          if (!_) return null;
          const _ = (0, _._)(_.args.color, "black"),
            _ = (0, _._)(_.args.bgcolor, "white");
          return (0, _.jsx)(_, {
            appid: _,
            color: _,
            bgcolor: _,
          });
        }
        var _ = __webpack_require__("chunkid");
        function _(_) {
          const _ = Number(_.args.packageid);
          return _
            ? (0, _.jsx)(_._, {
                packageID: _,
                display_style: (0, _._)(_.args.display),
              })
            : null;
        }
        function _(_) {
          const _ = Number(_.args.packageid),
            _ = Number(_.args.compareid);
          return !_ || !_
            ? null
            : (0, _.jsx)(_._, {
                packageID: _,
                compareID: _,
              });
        }
        function _(_) {
          const _ = _.args[""]?.trim();
          return _
            ? (0, _.jsx)("div", {
                className: _,
                children: _.children,
              })
            : (0, _.jsx)(_.Fragment, {
                children: _.children,
              });
        }
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__._(_),
          _ = __webpack_require__("chunkid");
        function _(_) {
          const { clanAccountID: _, color: _, bgcolor: _ } = _,
            [_, _] = _.useState(!1);
          return (0, _.jsx)("div", {
            className: (0, _._)(_().BBCodeFollowButton, _ && _().isHovered),
            onMouseEnter: () => _(!0),
            onMouseLeave: () => _(!1),
            children: (0, _.jsx)(_._, {
              nCreatorAccountID: _,
              classOverride: _().FollowGameButtonNotTop,
              styleOverride: {
                color: _,
                backgroundColor: _,
              },
              followType: "group",
            }),
          });
        }
        function _(_) {
          const { event: _ } = _.context,
            _ = Number(_.args.groupid) || _?.clanSteamID.GetAccountID();
          if (!_) return null;
          const _ = (0, _._)(_.args.color, "black"),
            _ = (0, _._)(_.args.bgcolor, "white");
          return (0, _.jsx)(_, {
            clanAccountID: _,
            color: _,
            bgcolor: _,
          });
        }
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__._(_),
          _ = __webpack_require__("chunkid");
        function _(_) {
          const { appid: _, color: _, bgcolor: _ } = _,
            _ = (0, _._)(),
            _ = (0, _._)(_),
            _ = (0, _._)(_);
          return (0, _.jsx)("div", {
            className: _().WishlistHoverCtn,
            children: (0, _.jsx)(_._, {
              snr: _,
              _: _,
              classOverride: (0, _._)(
                _().WishlistButtonNotTop,
                _().BBCodeWishlistButton,
                "WishlistButton",
              ),
              styleOverride: {
                color: _,
                backgroundColor: _,
              },
              bShowInGamepadUI: !0,
            }),
          });
        }
        function _(_) {
          const _ = Number(_.args.appid);
          if (!_) return null;
          const _ = (0, _._)(_.args.color, "black"),
            _ = (0, _._)(_.args.bgcolor, "white");
          return (0, _.jsx)(_, {
            appid: _,
            color: _,
            bgcolor: _,
          });
        }
        let _ = null;
        function _() {
          return (
            _ == null &&
              (_ = new Map([
                [
                  "wishlist",
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
                  "classname",
                  {
                    Constructor: _,
                    autocloses: !1,
                  },
                ],
                [
                  "price",
                  {
                    Constructor: _,
                    autocloses: !1,
                  },
                ],
                [
                  "pricesavings",
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
            _
          );
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
            : (0, _.jsxs)("div", {
                className: _.countdownCtn,
                children: [
                  !!_ &&
                    (0, _.jsx)("div", {
                      className: _.Closed,
                      children:
                        _ > 0
                          ? (0, _._)("#Giveaway_Closed", (0, _._)(_))
                          : (0, _._)("#Giveaway_Closed_NoWinnerInfo"),
                    }),
                  !_ &&
                    (0, _.jsxs)(_.Fragment, {
                      children: [
                        _ <= 0
                          ? (0, _.jsxs)("div", {
                              className: _.Throbber,
                              children: [
                                (0, _.jsx)(_._, {
                                  size: "small",
                                }),
                                (0, _.jsx)("div", {
                                  children: (0, _._)("#Giveaway_RandomDraw"),
                                }),
                              ],
                            })
                          : (0, _.jsxs)("div", {
                              className: _.CountDownCtn,
                              children: [
                                (0, _.jsx)("div", {
                                  className: _.CountDownTime,
                                  children:
                                    _(Math.floor(_ / 60)) + ":" + _(_ % 60),
                                }),
                                (0, _.jsxs)("div", {
                                  className: _.CountDownText,
                                  children: [
                                    (0, _._)("#Giveaway_CountDown2"),
                                    " ",
                                    (0, _._)("#Giveaway_KeepWatching"),
                                  ],
                                }),
                              ],
                            }),
                        _ > 0 &&
                          (0, _.jsxs)("div", {
                            className: _.WinnerInfo,
                            children: [
                              (0, _.jsx)("div", {
                                className: _.WinnerCount,
                                children: (0, _._)(_),
                              }),
                              (0, _.jsx)("div", {
                                className: _.WinnerText,
                                children: (0, _._)("#Giveaway_Congratulation"),
                              }),
                            ],
                          }),
                      ],
                    }),
                ],
              });
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
          _ = __webpack_require__("chunkid");
        function _(_) {
          const { eventModel: _, nEventBadgeID: _ } = _,
            _ = (0, _._)(_);
          if (_?.level > 0) {
            let _ = _.level;
            if (_?.BHasSaleEnabled()) {
              const _ = _.GetSaleSectionsByType("badge_progress");
              if (_?.length == 1) {
                const _ = _[0].badge_progress;
                if (_?.event_badgeid == _ && _?.granted_by_discovery_queue) {
                  const _ = _.levels[_.levels.length - 1].level;
                  return (0, _.jsx)(_, {
                    eventModel: _,
                    nBadgeLevel: _,
                    nMaxLevel: _,
                  });
                }
              }
            }
            return (0, _.jsx)("span", {
              className: "DisplayBadgeProgress",
              children: (0, _._)(_),
            });
          }
          return null;
        }
        function _(_) {
          const { eventModel: _, nBadgeLevel: _, nMaxLevel: _ } = _,
            _ = _.useMemo(() => {
              const _ = _.GetSaleSections().filter(
                (_) => _.section_type == "discoveryqueue",
              );
              return _?.length > 0 ? _[0] : null;
            }, [_]),
            { storePageFilter: _, eStoreDiscoveryQueueType: _ } = _.useMemo(
              () => (0, _._)(_, _),
              [_, _],
            ),
            _ = (0, _._)(_, _),
            _ = Math.min(_ + _, _);
          return (0, _.jsx)("span", {
            className: "DisplayBadgeProgress",
            children: (0, _._)(_),
          });
        }
        function _(_) {
          const { event: _ } = _.context,
            _ = Number.parseInt((0, _._)(_.args, "eventid"));
          return _._.logged_in && _
            ? (0, _.jsx)(_, {
                nEventBadgeID: _,
                eventModel: _,
              })
            : null;
        }
        function _(_) {
          const { nDoorIndex: _, children: _ } = _,
            _ = (0, _._)(_),
            _ = (0, _._)(),
            [_, _] = _.useState(!1),
            [_, _] = _.useState(!1),
            { elDialogElement: _, fnShowLogonDialog: _ } = (0, _._)();
          return (0, _.jsxs)(_.Fragment, {
            children: [
              (0, _.jsx)(_._, {
                disabled: _,
                onClick: (_) => {
                  _ ||
                    (_._.logged_in
                      ? (_(!0),
                        _({
                          iDoorIndex: _,
                        })
                          .then((_) => {
                            _ || _(!0), _(!1);
                          })
                          .catch(() => {
                            _(!0), _(!1);
                          }))
                      : _());
                },
                children: _
                  ? (0, _.jsx)("div", {
                      children: (0, _._)("#GrantAwardError_Busy"),
                    })
                  : (0, _.jsxs)(_.Fragment, {
                      children: [
                        !!_ &&
                          (0, _.jsx)(_._, {
                            size: "small",
                          }),
                        !!_ && (0, _.jsx)(_.Jlk, {}),
                        _,
                      ],
                    }),
              }),
              _,
            ],
          });
        }
        function _(_) {
          const _ = Number.parseInt((0, _._)(_.args)) || 0;
          return _ >= 0 && _ < 32
            ? (0, _.jsx)(_, {
                nDoorIndex: _,
                children: _.children,
              })
            : null;
        }
        const _ = (0, _._)(_._);
        function _(_) {
          const _ = Number.parseInt((0, _._)(_.args)),
            { event: _, showErrorInfo: _ } = _.context;
          if (_) {
            const _ = _?.jsondata?.sale_sections?.findIndex(
              (_) => _.unique_id == _,
            );
            if (_ >= 0) {
              const _ = _.GetDayIndexFromEventStart();
              return (0, _.jsx)(_._, {
                location: _ ? _._ : _._,
                children: (0, _.jsx)(_, {
                  event: _,
                  section: _.jsondata.sale_sections[_],
                  activeTab: new _._(null, _),
                  language: _.language,
                  nSaleDayIndex: _,
                  promotionName: "",
                  appVisibilityTracker: null,
                  ePreviewMode: _
                    ? _._.EPreviewMode_Enabled
                    : _._.EPreviewMode_Disabled,
                }),
              });
            } else if (_)
              return (0, _.jsxs)("div", {
                className: _.ErrorDiv,
                children: ["Error could not find sale section ", _],
              });
          }
          return null;
        }
        let _ = null;
        function _() {
          return (
            _ == null &&
              (_ = new Map([
                ...Array.from(_().entries()),
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
                  "followgame",
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
                  "eventdoorvisibility",
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
            _
          );
        }
        function _(_) {
          const { event: _ } = _.context,
            _ = Number.parseInt((0, _._)(_.args, "appid")),
            _ = Number.parseInt((0, _._)(_.args, "itemdefid")),
            _ = Number.parseInt((0, _._)(_.args, "maxquantity")),
            _ = (0, _._)(_.args, "calltoaction");
          return !(0, _._)(_, _, !1) || !_
            ? (0, _.jsx)(_._, {
                size: "small",
                position: "center",
                string: (0, _._)("#Loading"),
              })
            : (0, _.jsx)(_._, {
                language: _.language,
                clanAccountID: _.clanSteamID.GetAccountID(),
                itemDefSetting: {
                  nAppID: _,
                  nItemDefID: _,
                  max_quantity: _,
                },
                strCallToAction: _,
              });
        }
        function _(_) {
          const _ = _();
          if (!_)
            return (0, _.jsx)(_._, {
              size: "small",
            });
          const _ = Number.parseInt((0, _._)(_.args));
          return (0, _.jsx)("span", {
            children: (0, _._)(Number(_(_, _))),
          });
        }
        function _(_) {
          const _ = (0, _._)(_._.accountid, "library");
          if (!_)
            return (0, _.jsx)(_._, {
              size: "small",
            });
          const _ = Number.parseInt((0, _._)(_.args));
          let _ = _.verifiedList?.length || 0;
          switch (_) {
            case _._:
              _ = _.playableList?.length || 0;
              break;
            case _._:
              _ = _.unsupportedList?.length || 0;
              break;
            case _._:
              _ = _.unknownList?.length || 0;
              break;
          }
          return (0, _.jsx)("span", {
            children: (0, _._)(Number(_)),
          });
        }
        function _(_) {
          const _ = Number.parseInt((0, _._)(_.args)),
            _ = "hide" in _.args && !!Number.parseInt((0, _._)(_.args, "hide"));
          return _ >= 0
            ? (0, _.jsx)(_, {
                nDoorIndex: _,
                bHide: _,
                children: _.children,
              })
            : null;
        }
        function _(_) {
          const { nDoorIndex: _, bHide: _, children: _ } = _,
            _ = (0, _._)(_);
          return _ == null
            ? null
            : (_ && !_) || (!_ && _)
              ? (0, _.jsx)(_.Fragment, {
                  children: _.children,
                })
              : null;
        }
        function _(_) {
          return (0, _.jsx)("span", {
            className: _.LocalizeBlock,
            children: (0, _._)(
              _.children,
              (0, _.jsx)("b", {}),
              (0, _.jsx)("b", {}),
              (0, _.jsx)("b", {}),
              (0, _.jsx)("b", {}),
            ),
          });
        }
        function _(_) {
          let _ = (0, _._)(_.args);
          return _
            ? (0, _.jsx)(_, {
                giveawayid: _,
              })
            : (0, _.jsx)(_.Fragment, {});
        }
        const _ = void 0;
        function _(_) {
          return (0, _.jsx)(_, {
            ..._,
            PreviewActions: _,
          });
        }
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        function _(_) {
          const { bSalePage: _ } = _,
            [_, _] = _.useState(!1);
          return (
            (0, _._)(_, _),
            _.useEffect(() => {
              _._.Init(new _._(_._.WEBAPI_BASE_URL)), _._.Init(), _(!0);
            }, []),
            _.useEffect(() => {
              const _ = (0, _._)();
              _ && _.locale(_);
            }, []),
            _
              ? _
                ? (0, _.jsx)(_._, {
                    dictionary: _(),
                    children: _.children,
                  })
                : _.children
              : null
          );
        }
      },
      chunkid: (module) => {
        module.exports = {
          "duration-app-launch": "800ms",
          FollowButton: "c-TDTqD2D5mBLfTqn3fSV",
          FollowButtonText: "_2PmgMkPwEgmuCJVZLTGSPi",
          FollowLoadingText: "_2XN3sBlgsLE3n5WrKOkWxi",
        };
      },
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
          SuppressScrollOnBody: "_1FFwlWIoDrtb0qdN9YUwHs",
          WishlistHoverCtn: "GXjJQihysg6S5INBKClED",
          BBCodeWishlistButton: "_1dm-6uzq_x5Gqo421G3a1r",
        };
      },
    },
  ]);
})();
