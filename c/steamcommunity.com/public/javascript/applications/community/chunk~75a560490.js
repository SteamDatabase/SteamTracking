(() => {
  (self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
    [52959],
    {
      chunkid: (module, module_exports, __webpack_require__) => {
        "use strict";
        __webpack_require__._(module_exports, {
          _: () => _,
          _: () => _,
          _: () => _,
          _: () => _,
        });
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = Object.defineProperty,
          _ = (_, _, _) =>
            _ in _
              ? _(_, _, {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: _,
                })
              : (_[_] = _),
          _ = (_, _, _) => _(_, typeof _ != "symbol" ? _ + "" : _, _),
          _ = ((_) => (
            (_[(_.k_eLibrary = 1)] = "k_eLibrary"),
            (_[(_.k_eWishlist = 2)] = "k_eWishlist"),
            (_[(_.k_eFollowing = 4)] = "k_eFollowing"),
            (_[(_.k_eRecommended = 8)] = "k_eRecommended"),
            (_[(_.k_eSteam = 16)] = "k_eSteam"),
            (_[(_.k_eRequired = 32)] = "k_eRequired"),
            (_[(_.k_eFeatured = 64)] = "k_eFeatured"),
            (_[(_.k_eCurator = 128)] = "k_eCurator"),
            (_[(_.k_eReposted = 256)] = "k_eReposted"),
            _
          ))(_ || {});
        class _ {
          constructor() {
            _(this, "clanid"),
              _(this, "unique_id"),
              _(this, "event_type"),
              _(this, "appid"),
              _(this, "start_time"),
              _(this, "appInfo"),
              _(this, "clanInfo"),
              _(this, "score");
          }
          GetSource() {
            var _, _;
            return this.appInfo
              ? this.appInfo.source
              : (_ = (_ = this.clanInfo) == null ? void 0 : _.source) != null
                ? _
                : 0;
          }
          static GetEntityNameForID(_, _) {
            var _, _;
            if (_)
              return (_ =
                (_ = _._.Get().GetApp(_)) == null ? void 0 : _.GetName()) !=
                null
                ? _
                : (0, _._)("#EventCalendar_MuteApp_Unknown");
            if (_) {
              const _ = _._.GetClanInfoByClanAccountID(_);
              if (_ != null && _.group_name) return _.group_name;
            }
            return (0, _._)("#EventCalendar_MuteApp_Unknown");
          }
          static BHasEntityNameForID(_, _) {
            var _, _;
            return _
              ? !!((_ = _._.Get().GetApp(_)) != null && _.GetName())
              : _
                ? !!(
                    (_ = _._.GetClanInfoByClanAccountID(_)) != null &&
                    _.group_name
                  )
                : !1;
          }
          GetEntityName() {
            return _.GetEntityNameForID(this.appid, this.clanid);
          }
          GetGameCapsule() {
            var _, _;
            if (this.appInfo)
              return (_ =
                (_ = _._.Get().GetApp(this.appInfo.appid)) == null
                  ? void 0
                  : _.GetAssets()) == null
                ? void 0
                : _.GetMainCapsuleURL();
            if (this.clanInfo) {
              let _ = _._.GetClanInfoByClanAccountID(this.clanInfo.clanid);
              if (_) return _.avatar_full_url;
            }
            return (0, _._)("#EventCalendar_MuteApp_Unknown");
          }
          GetGameIcon() {
            var _, _;
            if (this.appInfo)
              return (_ =
                (_ = _._.Get().GetApp(this.appInfo.appid)) == null
                  ? void 0
                  : _.GetAssets()) == null
                ? void 0
                : _.GetCommunityIconURL();
            if (this.clanInfo) {
              let _ = _._.GetClanInfoByClanAccountID(this.clanInfo.clanid);
              if (_) return _.avatar_full_url;
            }
            return (0, _._)("#EventCalendar_MuteApp_Unknown");
          }
        }
        class _ {
          constructor() {
            _(this, "appid"),
              _(this, "source"),
              _(this, "playtime"),
              _(this, "last_played"),
              _(this, "wishlist_added");
          }
        }
        class _ {
          constructor() {
            _(this, "clanid"), _(this, "source");
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
          _ = __webpack_require__._(_),
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
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = ((_) => (
            (_.Default = "default"),
            (_.Upcoming = "upcoming"),
            (_.Featured = "featured"),
            (_.Press = "press"),
            (_.Steam = "steam"),
            (_.Halloween = "halloween"),
            (_.Dev_Sales = "sales"),
            (_.Dev_All = "all"),
            (_.Dev_AssociatedPress = "associated_press"),
            _
          ))(_ || {});
        const _ = new Map();
        function _(_) {
          return _.size == 0 && _(), _.get(_);
        }
        function _() {
          const _ = GetNewsHubBasePath();
          _.set("default", {
            _: "default",
            strUrl: `${_}/`,
            strName: Localize("#EventCalendar_NewsChannel_YourNews"),
            strSubtitle: Localize("#EventCalendar_NewsChannel_Personalized"),
            strHeaderTitle: Localize(
              "#EventCalendar_NewsChannel_YourNews_HeaderTitle",
            ),
          }),
            _.set("upcoming", {
              _: "upcoming",
              strUrl: `${_}/?upcoming=1`,
              strName: Localize("#EventCalendar_NewsChannel_Upcoming"),
              strShortName: Localize(
                "#EventCalendar_NewsChannel_UpcomingShort",
              ),
              strSubtitle: Localize("#EventCalendar_NewsChannel_Personalized"),
            }),
            _.set("featured", {
              _: "featured",
              strUrl: `${_}/collection/featured/`,
              strName: Localize("#EventCalendar_NewsChannel_Featured"),
              strSubtitle: Localize("#EventCalendar_NewsChannel_TopSellers"),
              strHeaderTitle: Localize(
                "#EventCalendar_NewsChannel_Featured_HeaderTitle",
              ),
            }),
            _.set("press", {
              _: "press",
              strUrl: `${_}/collection/press/`,
              strName: Localize("#EventCalendar_NewsChannel_Press"),
              strHeaderTitle: Localize("#EventCalendar_Collection_News_Title"),
              strHeaderSubtitle: Localize(
                "#EventCalendar_Collection_News_Subtitle",
              ),
            }),
            _.set("steam", {
              _: "steam",
              strUrl: `${_}/collection/steam/`,
              strName: Localize("#EventCalendar_NewsChannel_Steam"),
              strSubtitle: Localize("#EventCalendar_NewsChannel_SteamSubtitle"),
              strHeaderTitle: Localize(
                "#EventCalendar_NewsChannel_Steam_HeaderTitle",
              ),
            }),
            _.set("halloween", {
              _: "halloween",
              strUrl: `${_}/collection/halloween/`,
              strName: Localize("#EventCalendar_NewsChannel_Halloween"),
              strSubtitle: Localize(
                "#EventCalendar_NewsChannel_HalloweenSubtitle",
              ),
              strHeaderTitle: Localize(
                "#EventCalendar_Collection_Halloween_Title",
              ),
              strHeaderSubtitle: Localize(
                "#EventCalendar_Collection_Halloween_Subtitle",
              ),
            }),
            _.set("sales", {
              _: "sales",
              strUrl: `${_}/collection/sales/`,
              strName: Localize("#EventCalendar_NewsChannel_AllSales"),
            }),
            UserConfig.is_support &&
              (_.set("all", {
                _: "all",
                strUrl: `${_}/collection/all/`,
                strName: Localize("#EventCalendar_NewsChannel_All"),
                bIsValveOnly: !0,
              }),
              _.set("associated_press", {
                _: "associated_press",
                strUrl: `${_}/collection/associated_press/`,
                strName: Localize("#EventCalendar_NewsChannel_AssociatedPress"),
                bIsValveOnly: !0,
              }));
        }
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = Object.defineProperty,
          _ = Object.getOwnPropertyDescriptor,
          _ = (_, _, _) =>
            _ in _
              ? _(_, _, {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: _,
                })
              : (_[_] = _),
          _ = (_, _, _, _) => {
            for (
              var _ = _ > 1 ? void 0 : _ ? _(_, _) : _, _ = _.length - 1, _;
              _ >= 0;
              _--
            )
              (_ = _[_]) && (_ = (_ ? _(_, _, _) : _(_)) || _);
            return _ && _ && _(_, _, _), _;
          },
          _ = (_, _, _) => _(_, typeof _ != "symbol" ? _ + "" : _, _);
        const _ = 2500;
        function _(_, _, _, _) {
          const _ = "section-" + _,
            _ = _ >= _;
          return {
            strId: _,
            strSectionLabel: _,
            rtSectionStart: _,
            rtSectionEnd: _,
            bIsFutureSection: _,
            nRenderedHeight: _,
            nTopOffset: 0,
          };
        }
        class _ {
          constructor(_, _) {
            _(this, "m_nForwardStuckCount", 0),
              _(this, "m_nBackwardStuckCount", 0),
              _(this, "m_mapCalendarAppsByID", new Map()),
              _(this, "m_mapCalendarClansByID", new Map()),
              _(this, "m_mapCalendarEventsByGid", new Map()),
              _(this, "m_rgSortedCalendarEvents", new Array()),
              _(this, "m_visibilityStore"),
              _(this, "m_currentView", _._.box(void 0)),
              _(this, "m_bFinishedSearchingForward", !1),
              _(this, "m_bFinishedSearchingBackward", !1),
              _(this, "m_rgCalendarSections", []),
              _(this, "m_rgFutureSections", []),
              _(this, "m_dtInitTime"),
              _(this, "m_forwardRequestInFlight", null),
              _(this, "m_backwardRequestInFlight", null),
              _(this, "m_key"),
              _(this, "m_collectionMetaData"),
              (0, _._)(this),
              (this.m_key = _),
              (this.m_visibilityStore = new _._(_)),
              _._.Get().HintLoad();
          }
          GetNumEventsLoaded() {
            return this.m_mapCalendarEventsByGid.size;
          }
          BIsGlobalCalendar() {
            return (
              !this.m_key.appids &&
              !this.m_key.clanaccountids &&
              !this.m_key.collectionid &&
              !this.m_key.saleid
            );
          }
          BIsShowingFeaturedFeed() {
            return !!(
              this.GetCollectionID() === _.Featured ||
              (this.BIsGlobalCalendar() && !_._.accountid)
            );
          }
          BIsSingleSourceCalendar() {
            return !!(this.BIsSingleGroupCalendar()
              ? !this.BIsSingleAppCalendar()
              : this.BIsSingleAppCalendar());
          }
          GetKey() {
            return this.m_key;
          }
          BEventMatchCalendarSingleSource(_) {
            var _, _;
            return (
              (this.BIsSingleAppCalendar() &&
                ((_ = this.m_key.appids) == null ? void 0 : _[0]) == _.appid) ||
              (this.BIsSingleGroupCalendar() &&
                ((_ = this.m_key.clanaccountids) == null ? void 0 : _[0]) ==
                  _.clanid)
            );
          }
          BIsSingleSourceMuted() {
            if (!this.BIsSingleSourceCalendar()) return !1;
            if (this.BIsSingleAppCalendar()) {
              const _ = this.GetSingleAppID();
              return _ !== void 0 && _._.Get().BIsMutedAppID(_);
            }
            const _ = this.GetSingleGroupID();
            return _ !== void 0 && _._.Get().BIsMutedClanID(_);
          }
          BIsSingleGroupCalendar() {
            return !!(
              this.m_key.clanaccountids && this.m_key.clanaccountids.length == 1
            );
          }
          GetSingleGroupID() {
            var _;
            return (_ = this.m_key.clanaccountids) == null ? void 0 : _[0];
          }
          BIsSingleAppCalendar() {
            return !!(this.m_key.appids && this.m_key.appids.length == 1);
          }
          GetSingleAppID() {
            var _;
            return (_ = this.m_key.appids) == null ? void 0 : _[0];
          }
          BIsCollectionCalendar() {
            return !!this.m_key.collectionid;
          }
          GetCollectionID() {
            return this.m_key.collectionid;
          }
          BIsSaleCalendar() {
            return !!this.m_key.saleid;
          }
          GetSaleID() {
            return this.m_key.saleid;
          }
          BIsCalendarEndTimeSet() {
            return !!this.m_key.rtCalendarEnd;
          }
          GetCalendarEndTime() {
            return this.m_key.rtCalendarEnd;
          }
          SetCollectionMetaData(_) {
            this.m_collectionMetaData = _;
          }
          GetCollectionMetaData() {
            return this.m_collectionMetaData;
          }
          BHasCollectionMetaData() {
            return !!this.m_collectionMetaData;
          }
          ValidateCollectionMetadata(_) {
            const _ = _;
            return !!(
              _ &&
              typeof _ == "object" &&
              _.clanid &&
              typeof _.clanid == "number" &&
              _.clan_event_gid &&
              typeof _.clan_event_gid == "string"
            );
          }
          SetFilteredView(_, _) {
            const _ = this.m_currentView.get();
            _ && _.dispose();
            const _ = () => this.m_rgSortedCalendarEvents,
              _ = this.BIsSingleSourceMuted(),
              _ = new _(
                _,
                this.LoadAdditionalEvents,
                this.BHitEventHorizon,
                _,
                !!_,
                _,
              );
            this.m_currentView.set(_);
          }
          BIsFilteredViewEmpty() {
            var _;
            return !!(
              (_ = this.m_currentView.get()) != null && _.BIsViewEmpty()
            );
          }
          GetCalendarItemsInTimeRange(_, _) {
            const _ = this.m_currentView.get();
            return _
              ? _.GetCalendarItemsInTimeRange(_, _)
              : (console.error("calendar view not yet initialized"),
                {
                  rgCalendarItems: [],
                  bIsComplete: !1,
                });
          }
          GetActiveEventsAt(_) {
            const _ = this.m_currentView.get();
            return _
              ? _.GetActiveEventsAt(_)
              : (console.error("calendar view not yet initialized"), []);
          }
          GetCurrentlyLoadedEventCount(_, _) {
            var _, _;
            return (_ =
              (_ = this.m_currentView.get()) == null
                ? void 0
                : _.GetCurrentlyLoadedEventCount(_, _)) != null
              ? _
              : {
                  nCount: 0,
                  bIsComplete: !1,
                };
          }
          GetCurrentlyLoadedItemsForStats() {
            var _;
            return (
              ((_ = this.m_currentView.get()) == null
                ? void 0
                : _.GetCurrentlyLoadedEvents()) || []
            );
          }
          GetCalendarSections(_) {
            return _ ? this.m_rgFutureSections : this.m_rgCalendarSections;
          }
          GetStoreInitializationTimestamp() {
            return (
              this.m_dtInitTime ||
                (this.m_dtInitTime = _._.GetTimeNowWithOverrideAsDate()),
              this.m_dtInitTime
            );
          }
          InitCalendarSections() {
            const _ = this.GetStoreInitializationTimestamp(),
              _ = [],
              _ = _.getTime() / 1e3;
            _.push(_(_, (0, _._)("#EventCalendar_FutureEventsHeader"), _));
            const _ = new Date(_);
            _.setHours(0, 0, 0, 1);
            let _ = _.getTime() / 1e3;
            _.push(_(_, (0, _._)("#Time_Today"), _, _)),
              _.setDate(_.getDate() - 1);
            let _ = _;
            (_ = _.getTime() / 1e3),
              _.push(_(_, (0, _._)("#Time_Yesterday"), _, _));
            const _ =
                this.m_rgSortedCalendarEvents[
                  this.m_rgSortedCalendarEvents.length - 1
                ],
              _ = _ ? _.start_time : _;
            let _ = _ > _;
            for (let _ = 0; _ < 5 && !_; _++)
              _.setDate(_.getDate() - 1),
                (_ = _),
                (_ = _.getTime() / 1e3),
                _.push(_(_, (0, _._)(_), _, _)),
                (_ = _ > _);
            const _ = new Date(_);
            let _ = _;
            for (; _.getMonth() == _.getMonth() && _.getDate() != 1 && !_; ) {
              _.setDate(_.getDate() - 7);
              const _ = _.getTime() / 1e3;
              _.push(_(_, (0, _._)(_ - 1), _, _)), (_ = _ > _), (_ = _);
            }
            const _ = new Date(_);
            _.setHours(0, 0, 0, 1), _.setDate(1);
            let _ = _;
            for (let _ = 1; !_; _++) {
              const _ = new Date(_);
              _.setMonth(_.getMonth() - _, 1);
              const _ = _.getTime() / 1e3;
              _.push(_(_, (0, _._)(_), _, _)), (_ = _ > _), (_ = _);
            }
            this.m_rgCalendarSections.length > _.length
              ? this.m_rgCalendarSections.splice(
                  _.length,
                  this.m_rgCalendarSections.length,
                )
              : _.splice(this.m_rgCalendarSections.length, _.length).forEach(
                  (_) => this.m_rgCalendarSections.push(_),
                );
          }
          InitFutureCalendarSections() {
            const _ = this.GetStoreInitializationTimestamp(),
              _ = [];
            let _;
            this.m_key.rtCalendarEnd && (_ = this.m_key.rtCalendarEnd);
            const _ = this.m_rgSortedCalendarEvents[0];
            _ && (_ = _.start_time), _ || (_ = _.getTime() / 1e3);
            const _ = _.getTime() / 1e3,
              _ = new Date(_);
            _.setHours(24, 0, 0, 0);
            let _ = _.getTime() / 1e3;
            _.push(
              _(
                _,
                (0, _._)(
                  this.m_key.bSectionByDay ? "#Time_UpNext" : "#Time_Today",
                ),
                _,
                _,
              ),
            );
            let _ = _ <= _,
              _ = _;
            _.setDate(_.getDate() + 1),
              (_ = _.getTime() / 1e3),
              _ || _.push(_(_, (0, _._)("#Time_Tomorrow"), _, _)),
              (_ = _ <= _);
            const _ = 6 - _()(_).weekday();
            for (let _ = 2; _ <= _ && !_; _++) {
              _ = _;
              const _ = (0, _._)(_);
              _.setDate(_.getDate() + 1),
                (_ = _.getTime() / 1e3),
                _.push(_(_, _, _, _)),
                (_ = _ <= _);
            }
            if (this.m_key.bSectionByDay)
              for (; !_; ) {
                _ = _;
                const _ = (0, _._)(_);
                _.setDate(_.getDate() + 1),
                  (_ = _.getTime() / 1e3),
                  _.push(_(_, _, _, _)),
                  (_ = _ <= _);
              }
            else {
              const _ = new Date(_);
              let _ = _;
              const _ = _()(_).daysInMonth();
              if (_.getMonth() == _.getMonth() && _.getDate() != _ && !_) {
                _.setDate(_.getDate() + 7);
                const _ = _.getTime() / 1e3;
                _.push(_(_, (0, _._)("#EventCalendar_NextWeek"), _, _)),
                  (_ = _ <= _),
                  (_ = _);
              }
              const _ = new Date(_);
              _.setMonth(_.getMonth() + 1),
                _.setDate(1),
                _.setHours(0, 0, 0, 0);
              let _;
              if (_ < _ && !_) {
                const _ = _.getTime() / 1e3;
                _.push(_(_, (0, _._)("#EventCalendar_LaterThisMonth"), _, _)),
                  (_ = _ <= _),
                  (_ = _);
              } else _ = _;
              for (let _ = 2; !_; _++) {
                const _ = new Date(_);
                _.setMonth(_.getMonth() + _);
                const _ = _.getTime() / 1e3;
                _.push(_(_, (0, _._)(_), _, _)), (_ = _ <= _), (_ = _);
              }
            }
            this.m_rgFutureSections.length > _.length
              ? this.m_rgFutureSections.splice(
                  _.length,
                  this.m_rgFutureSections.length,
                )
              : _.splice(this.m_rgFutureSections.length, _.length).forEach(
                  (_) => this.m_rgFutureSections.push(_),
                );
          }
          async RegisterCalendarEventsAndModels(_) {
            await _._.Get().HintLoad(),
              (0, _._)(() => {
                var _, _, _, _, _, _;
                this.RegisterCalendarApps((_ = _.apps) != null ? _ : []),
                  this.RegisterCalendarClans((_ = _.clans) != null ? _ : []),
                  this.RegisterCalendarEvents(
                    (_ = _.documents) != null ? _ : [],
                  ),
                  _._.RegisterClanEvents((_ = _.events) != null ? _ : []),
                  this.RegisterReadEvents((_ = _.events_read) != null ? _ : []),
                  this.RegisterEventVotes((_ = _.event_votes) != null ? _ : []),
                  _.forwardComplete && (this.m_bFinishedSearchingForward = !0),
                  _.backwardComplete &&
                    (this.m_bFinishedSearchingBackward = !0),
                  this.InitCalendarSections(),
                  this.InitFutureCalendarSections(),
                  this.SetCollectionMetaData(
                    this.ValidateCollectionMetadata(_.metadatainfo)
                      ? _.metadatainfo
                      : void 0,
                  );
              });
          }
          RegisterCalendarApps(_) {
            if (_)
              for (const _ of _) {
                if (this.m_mapCalendarAppsByID.has(_.appid)) continue;
                const _ = new _._();
                (_.appid = _.appid),
                  (_.source = _.source),
                  (_.playtime = _.playtime),
                  (_.last_played = _.last_played),
                  (_.wishlist_added = _.wishlist_added),
                  this.m_mapCalendarAppsByID.set(_.appid, _),
                  _.hidden &&
                    this.m_visibilityStore.SetAppVisibility(_.appid, !1);
              }
          }
          RegisterCalendarClans(_) {
            if (_) {
              for (const _ of _)
                if (!this.m_mapCalendarClansByID.has(_.clanid)) {
                  const _ = new _._();
                  (_.clanid = _.clanid),
                    (_.source = _.source),
                    this.m_mapCalendarClansByID.set(_.clanid, _),
                    _.hidden &&
                      this.m_visibilityStore.SetClanVisibility(_.clanid, !1);
                }
            }
          }
          RegisterReadEvents(_) {
            _ && (0, _._)(_);
          }
          RegisterEventVotes(_) {
            _ &&
              (0, _._)(
                _.map((_) => ({
                  gidAnnouncement: _._,
                  vote: _.vote === void 0 ? null : _.vote ? "up" : "down",
                })),
              );
          }
          RegisterCalendarEvents(_) {
            if (_) {
              let _ = !1;
              for (const _ of _)
                this.BInternalInsertCalendarEventItem(_) && (_ = !0);
              _ && this.RebuildSortedCalendarEventList();
            }
          }
          BHitEventHorizon(_) {
            return _ == "forward"
              ? this.m_bFinishedSearchingForward
              : this.m_bFinishedSearchingBackward;
          }
          GetTimeEdgeForDirection(_, _ = void 0) {
            return _ === "forward"
              ? this.m_rgSortedCalendarEvents.length > 0
                ? this.m_rgSortedCalendarEvents[0].start_time
                : _
              : this.m_rgSortedCalendarEvents.length > 0
                ? this.m_rgSortedCalendarEvents[
                    this.m_rgSortedCalendarEvents.length - 1
                  ].start_time
                : _;
          }
          UpdateStuckCounters(_, _) {
            const _ =
                _ === "forward"
                  ? this.m_bFinishedSearchingForward
                  : this.m_bFinishedSearchingBackward,
              _ = this.GetTimeEdgeForDirection(_, void 0);
            return !_ && _ === _
              ? (_ == "forward"
                  ? this.m_nForwardStuckCount++
                  : this.m_nBackwardStuckCount++,
                !0)
              : (_ == "forward"
                  ? (this.m_nForwardStuckCount = 0)
                  : (this.m_nBackwardStuckCount = 0),
                !1);
          }
          GetRequestInFlight(_) {
            return _ === "forward"
              ? this.m_forwardRequestInFlight
              : this.m_backwardRequestInFlight;
          }
          SetRequestInFlight(_, _) {
            (0, _._)(
              !_ || !this.GetRequestInFlight(_),
              "Already have a request in flight for",
              _,
            ),
              _ === "forward"
                ? (this.m_forwardRequestInFlight = _)
                : (this.m_backwardRequestInFlight = _);
          }
          async LoadAdditionalEvents(_, _) {
            var _, _, _;
            if (this.BHitEventHorizon(_)) return _._;
            let _ = this.GetRequestInFlight(_);
            if (_) return _;
            const _ =
                _._.STORE_BASE_URL + "events/ajaxgetusereventcalendarrange/",
              _ =
                _ === "forward"
                  ? this.m_nForwardStuckCount
                  : this.m_nBackwardStuckCount,
              _ = _ < 3 ? _ : 0,
              _ = _ >= 3 ? 1 : 0,
              _ = 250 + 50 * _,
              _ = 15,
              _ = _._.GetTimeNowWithOverride(),
              _ = (_ = this.GetTimeEdgeForDirection(_, _)) != null ? _ : _,
              _ = {
                minTime: 0,
                maxTime: 0,
                ascending: !0,
                maxResults: _,
                populateEvents: _,
                appTypes: this.m_visibilityStore.GetGameSources().join(","),
                eventTypes: Array.from(
                  this.m_visibilityStore.enabledEventTypeSet,
                ).join(","),
                appIdFilter:
                  (_ = this.m_key.appids) != null && _.length
                    ? this.m_key.appids.sort().join(",")
                    : void 0,
                clanIdFilter:
                  (_ = this.m_key.clanaccountids) != null && _.length
                    ? this.m_key.clanaccountids.sort().join(",")
                    : void 0,
                collectionID: this.m_key.collectionid,
                saleID: this.m_key.saleid,
                hubtype: this.m_key.hubtype,
                category_or_language: this.m_key.category_or_language,
                tag_name: this.m_key.tag_name,
                tags: this.m_key.rgTags
                  ? this.m_key.rgTags.slice().sort().join(",")
                  : void 0,
              };
            return (
              _ === "forward"
                ? ((_.minTime = Math.floor(_ + _)), (_.ascending = !0))
                : ((_.maxTime = Math.floor(_ - _)), (_.ascending = !1)),
              (_ = _()
                .get(_, {
                  params: _,
                  cancelToken: _ ? _.token : void 0,
                  withCredentials: !0,
                })
                .then(async (_) => {
                  if (
                    (this.SetRequestInFlight(_, null), _.data.success == _._)
                  ) {
                    if (
                      (await this.RegisterCalendarEventsAndModels(_.data),
                      this.UpdateStuckCounters(_, _))
                    )
                      return this.LoadAdditionalEvents(_, _);
                  } else
                    console.error(
                      "LoadAdditionalEvents was not successful: Msg" +
                        _.data.msg,
                    );
                  return _.data.success;
                })
                .catch((_) => {
                  this.SetRequestInFlight(_, null);
                  let _ = (0, _._)(_);
                  return (
                    console.error(
                      "LoadAdditionalEvents hit error " + _.strErrorMsg,
                      _,
                    ),
                    _ == "forward"
                      ? (this.m_bFinishedSearchingForward = !0)
                      : (this.m_bFinishedSearchingBackward = !0),
                    _._
                  );
                })),
              this.SetRequestInFlight(_, _),
              _
            );
          }
          BInternalInsertCalendarEventItem(_) {
            if (!_.unique_id)
              return (
                (0, _._)(
                  !1,
                  "Attmpted to register a calendar event item with an invalid unique id!",
                ),
                !1
              );
            if (this.m_mapCalendarEventsByGid.has(_.unique_id)) return !1;
            const _ = this.m_mapCalendarAppsByID.get(_.appid),
              _ = this.m_mapCalendarClansByID.get(_.clanid);
            if (!_ && !_)
              return console.log("No AppInfo or ClanInfo For: ", _), !1;
            const _ = new _._();
            return (
              (_.clanid = _.clanid),
              (_.unique_id = _.unique_id),
              (_.event_type = _.event_type),
              (_.appid = _.appid),
              (_.start_time = _.start_time),
              (_.score = _.score),
              (_.appInfo = _),
              (_.clanInfo = _),
              this.m_rgSortedCalendarEvents.push(_),
              this.m_mapCalendarEventsByGid.set(_.unique_id, _),
              !0
            );
          }
          GetCalendarAppInfoForAppID(_) {
            return this.m_mapCalendarAppsByID.get(_);
          }
          RebuildSortedCalendarEventList() {
            const _ = this.m_rgSortedCalendarEvents.slice();
            this.m_rgSortedCalendarEvents = _.sort(
              (_, _) => _.start_time - _.start_time,
            );
          }
          async UpdateEventBlockFromCalendarEvent(_, _) {
            const _ = _.appid || void 0,
              _ = _.clanInfo ? _.clanInfo.clanid : void 0;
            if (_ == null && _ == null) {
              (0, _._)(
                !1,
                "Both clan id and account id are missing, cannot change communication status",
              );
              return;
            }
            await _._.Get().UpdateCommunicationSetting(_, _, _),
              (0, _._)(_._.k_eMuted);
          }
          GetAllClans() {
            return Array.from(this.m_mapCalendarClansByID.keys());
          }
          GetAllApps() {
            return Array.from(this.m_mapCalendarAppsByID.keys());
          }
        }
        _([_._], _.prototype, "m_mapCalendarAppsByID", 2),
          _([_._], _.prototype, "m_mapCalendarClansByID", 2),
          _([_._], _.prototype, "m_mapCalendarEventsByGid", 2),
          _([_._], _.prototype, "m_rgSortedCalendarEvents", 2),
          _([_._], _.prototype, "m_bFinishedSearchingForward", 2),
          _([_._], _.prototype, "m_bFinishedSearchingBackward", 2),
          _([_._], _.prototype, "m_rgCalendarSections", 2),
          _([_._], _.prototype, "m_rgFutureSections", 2),
          _([_._], _.prototype, "m_collectionMetaData", 2),
          _([_._], _.prototype, "InitCalendarSections", 1),
          _([_._], _.prototype, "InitFutureCalendarSections", 1),
          _([_._], _.prototype, "RegisterCalendarEventsAndModels", 1),
          _([_._], _.prototype, "RegisterCalendarApps", 1),
          _([_._], _.prototype, "RegisterCalendarClans", 1),
          _([_._], _.prototype, "RegisterCalendarEvents", 1),
          _([_._], _.prototype, "BHitEventHorizon", 1),
          _([_._.bound], _.prototype, "LoadAdditionalEvents", 1),
          _([_._], _.prototype, "UpdateEventBlockFromCalendarEvent", 1);
        class _ {
          constructor(_, _, _, _, _, _) {
            _(this, "m_rgLoadedEventsBox", _._.box([])),
              _(this, "m_lastLoadLatch", null),
              _(this, "m_fnGetUnfilteredEvents"),
              _(this, "m_fnLoadAdditionalEvents"),
              _(this, "m_fnBHitEventHorizon"),
              _(this, "m_fnBIsEventInView"),
              _(this, "m_bSkipStorePreferenceCheck"),
              _(this, "m_bAllowMutedAndIgnoredSources"),
              _(this, "m_rgAutorunDisposer"),
              (0, _._)(this),
              (this.m_fnGetUnfilteredEvents = _),
              (this.m_fnLoadAdditionalEvents = _),
              (this.m_fnBHitEventHorizon = _),
              (this.m_fnBIsEventInView = _),
              (this.m_bSkipStorePreferenceCheck = _),
              (this.m_bAllowMutedAndIgnoredSources = _),
              (this.m_rgAutorunDisposer = (0, _._)(async () => {
                const _ = this.viewFilteredEvents.slice();
                if (!this.m_bSkipStorePreferenceCheck) {
                  const _ = Array.from(
                    new Set(_.map((_) => _.appid).filter(Boolean)),
                  ).sort();
                  if (
                    ((this.m_lastLoadLatch = _),
                    await _._.Get().QueueMultipleAppRequests(_, {
                      ..._._,
                      include_assets: !0,
                    }),
                    this.m_lastLoadLatch != _)
                  )
                    return;
                  this.m_lastLoadLatch = null;
                }
                this.m_rgLoadedEventsBox.set(_);
              }));
          }
          dispose() {
            this.m_rgAutorunDisposer();
          }
          get viewFilteredEvents() {
            return this.m_fnGetUnfilteredEvents().filter((_) =>
              this.m_fnBIsEventInView(_),
            );
          }
          get filteredAndCheckedEvents() {
            return this.m_rgLoadedEventsBox.get().filter((_) => {
              if (_.appid) {
                if (
                  (!this.m_bAllowMutedAndIgnoredSources &&
                    (_._.Get().BIsMutedAppID(_.appid) ||
                      _._.Get().BIsGameIgnored(_.appid))) ||
                  (!this.m_bSkipStorePreferenceCheck &&
                    (0, _._)(_._.Get().GetApp(_.appid)))
                )
                  return !1;
              } else if (
                !this.m_bAllowMutedAndIgnoredSources &&
                (_._.Get().BIsMutedClanID(_.clanid) ||
                  _._.Get().BIsIgnoringCurator(_._.InitFromClanID(_.clanid)))
              )
                return !1;
              return !0;
            });
          }
          BIsCompleteThroughTime(_, _) {
            if (this.m_fnBHitEventHorizon(_)) return !0;
            const _ = this.m_fnGetUnfilteredEvents();
            return _ === "forward"
              ? !!_ && _.length > 0 && _[0].start_time > _
              : _ !== void 0 && _.length > 0 && _[_.length - 1].start_time < _;
          }
          async EnsureRangeIsLoaded(_, _) {
            for (
              let _ = 0;
              _ < 100 && !this.BIsCompleteThroughTime("forward", _);
              _++
            )
              await this.m_fnLoadAdditionalEvents("forward");
            for (
              let _ = 0;
              _ < 100 && !this.BIsCompleteThroughTime("backward", _);
              _++
            )
              await this.m_fnLoadAdditionalEvents("backward");
          }
          GetCalendarItemsInTimeRange(_, _) {
            this.EnsureRangeIsLoaded(_, _);
            const _ = this.filteredAndCheckedEvents.filter(
                (_) => _.start_time >= _ && (!_ || _.start_time < _),
              ),
              _ = this.BIsCompleteThroughTime("forward", _),
              _ = this.BIsCompleteThroughTime("backward", _);
            return {
              rgCalendarItems: _,
              bIsComplete: _ && _,
            };
          }
          GetCurrentlyLoadedEvents() {
            return this.filteredAndCheckedEvents;
          }
          GetCurrentlyLoadedEventCount(_, _) {
            let _ = 0;
            this.filteredAndCheckedEvents.forEach((_) => {
              _.start_time >= _ && (!_ || _.start_time < _) && _++;
            });
            const _ = this.BIsCompleteThroughTime("forward", _),
              _ = this.BIsCompleteThroughTime("backward", _);
            return {
              nCount: _,
              bIsComplete: _ && _,
            };
          }
          BIsViewEmpty() {
            return this.filteredAndCheckedEvents.length > 0;
          }
          GetActiveEventsAt(_) {
            return this.filteredAndCheckedEvents
              .map((_) => _._.GetClanEventModel(_.unique_id))
              .filter((_) => {
                if (!_ || _.startTime === void 0) return !1;
                const _ = _.endTime || _.startTime + 3600;
                return _ >= _.startTime && _ < _;
              });
          }
        }
        _([_._.struct], _.prototype, "viewFilteredEvents", 1),
          _([_._.struct], _.prototype, "filteredAndCheckedEvents", 1);
        const _ = _._.box(null),
          _ = new Map();
        window.g_EventCalendarMap = _;
        function _(_, _) {
          let _ = "";
          return (
            _.appids &&
              _.appids.length > 0 &&
              (_ += "appids:" + _.appids.sort().join(",")),
            _.clanaccountids &&
              _.clanaccountids.length > 0 &&
              (_ += "clanids:" + _.clanaccountids.sort().join(",")),
            _.collectionid && (_ += "collection:" + _.collectionid),
            _.saleid && (_ += "sale:" + _.saleid),
            _.bSectionByDay && (_ += "_sectionbyday"),
            _.rtCalendarEnd && (_ += "_end:" + _.rtCalendarEnd),
            _.rgTags &&
              _.rgTags.length > 0 &&
              (_ += "_tags:" + _.rgTags.slice().sort().join(",")),
            _.hubtype &&
              (_ +=
                "_hubtype:" +
                _.hubtype +
                "_" +
                _.category_or_language +
                "_" +
                _.tag_name),
            _.get() !== _ && (_.set(_), _.has(_) || _.set(_, new _(_, _))),
            _
          );
        }
        function _() {
          let _ = _.get();
          return _ == null && (_ = _({})), _.get(_);
        }
        function _() {
          return _.get() !== null;
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
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = Object.defineProperty,
          _ = Object.getOwnPropertyDescriptor,
          _ = (_, _, _) =>
            _ in _
              ? _(_, _, {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: _,
                })
              : (_[_] = _),
          _ = (_, _, _, _) => {
            for (
              var _ = _ > 1 ? void 0 : _ ? _(_, _) : _, _ = _.length - 1, _;
              _ >= 0;
              _--
            )
              (_ = _[_]) && (_ = (_ ? _(_, _, _) : _(_)) || _);
            return _ && _ && _(_, _, _), _;
          },
          _ = (_, _, _) => _(_, typeof _ != "symbol" ? _ + "" : _, _),
          _ = ((_) => (
            (_.k_ERecent = "recent"),
            (_.k_ELibrary = "library"),
            (_.k_EWishlist = "wishlist"),
            (_.k_EFollowing = "following"),
            (_.k_ERecommended = "recommended"),
            (_.k_ESteam = "steam"),
            (_.k_EFeatured = "featured"),
            (_.k_ECurator = "curator"),
            _
          ))(_ || {});
        const _ = [
            "library",
            "wishlist",
            "following",
            "recommended",
            "steam",
            "curator",
          ],
          _ = [..._, "featured"],
          _ = ["featured"];
        var _ = ((_) => (
          (_.k_ENews = "news"),
          (_.k_EEvents = "events"),
          (_.k_EStreaming = "streaming"),
          (_.k_EUpdates = "updates"),
          (_.k_EReleases = "releases"),
          (_.k_ESales = "sales"),
          _
        ))(_ || {});
        const _ = [
            "news",
            "events",
            "streaming",
            "updates",
            "releases",
            "sales",
          ],
          _ = new Map([
            ["news", [_.uYK]],
            ["events", [_.L0X, _.I5b, _._, _._, _.hGl, _.WNR, _.pIh, _.izQ]],
            ["streaming", [_.KDJ]],
            ["updates", [_.Fwr, _._, _.zeJ]],
            ["releases", [_.yhO, _.Aqr, _.DEQ, _.f4X, _.zcX]],
            ["sales", [_.HRy, _.C$4, _.LOv, _.HFK]],
          ]),
          _ = 1599202800;
        function _(_) {
          return new Map(_.map((_) => [_, !0]));
        }
        class _ {
          constructor(_) {
            _(this, "m_mapEventTypeGroupsAllowed", new Map()),
              _(this, "m_mapGameSources", new Map()),
              _(this, "m_bCuratorUnhideOnFollowDialogDismissed", !1),
              _(this, "m_mapHiddenApps", new Map()),
              _(this, "m_mapHiddenClans", new Map()),
              _(this, "m_bInitializedForUpdatesOnly", !1),
              _(this, "m_eStorageType", "session"),
              _(this, "m_strStorageKey"),
              (0, _._)(this),
              (0, _._)(() => {
                _ != null &&
                  _.rgHiddenApps &&
                  _.rgHiddenApps.forEach((_) =>
                    this.m_mapHiddenApps.set(_, !0),
                  ),
                  _ != null &&
                    _.rgHiddenClans &&
                    _.rgHiddenClans.forEach((_) =>
                      this.m_mapHiddenClans.set(_, !0),
                    );
              });
          }
          GetGameSources() {
            return Array.from(this.m_mapGameSources.keys());
          }
          GetStorageObject() {
            return this.m_strStorageKey
              ? this.m_eStorageType === "session"
                ? window.sessionStorage
                : window.localStorage
              : null;
          }
          GetPreferencesStorageKey() {
            return `${this.m_strStorageKey}-event-calendar-prefs`;
          }
          get enabledEventTypeSet() {
            var _;
            const _ = new Set();
            for (const _ of Array.from(this.m_mapEventTypeGroupsAllowed.keys()))
              (_ = _.get(_)) == null || _.forEach((_) => _.add(_));
            return _;
          }
          MapClanEventTypeToGroup(_) {
            let _;
            return (
              _.forEach((_, _) => {
                _.indexOf(_) !== -1 && (_ = _);
              }),
              _ || "events"
            );
          }
          InitDefaultCheckboxes(_, _, _) {
            (this.m_bInitializedForUpdatesOnly = _),
              (this.m_mapEventTypeGroupsAllowed = _(_ ? ["updates"] : _));
            const _ = (0, _._)() ? _ : _;
            (this.m_mapGameSources = _(_ ? _ : _)),
              _ && this.m_mapGameSources.set("featured", !0);
          }
          Init(_, _, _, _, _) {
            (this.m_eStorageType = _), (this.m_strStorageKey = _);
            const _ = this.GetStorageObject(),
              _ = _ ? _.getItem(this.GetPreferencesStorageKey()) : null;
            if (_) {
              const _ = JSON.parse(_);
              if (_.rgEventTypeGroupsAllowed && _.rgGameSources) {
                const { rgEventTypeGroupsAllowed: _, rgGameSources: _ } = _;
                (this.m_mapEventTypeGroupsAllowed = _(_)),
                  (this.m_mapGameSources = _(_)),
                  _.bCuratorUnhideOnFollowDismissed !== void 0 &&
                    (this.m_bCuratorUnhideOnFollowDialogDismissed =
                      _.bCuratorUnhideOnFollowDismissed);
                return;
              }
            }
            this.InitDefaultCheckboxes(_, _, _);
          }
          SaveFilterPreferences() {
            const _ = this.GetStorageObject();
            if (!_) return;
            const _ = {
              rgEventTypeGroupsAllowed: Array.from(
                this.m_mapEventTypeGroupsAllowed.keys(),
              ),
              rgGameSources: Array.from(this.m_mapGameSources.keys()),
              bCuratorUnhideOnFollowDismissed:
                this.m_bCuratorUnhideOnFollowDialogDismissed,
            };
            _.setItem(this.GetPreferencesStorageKey(), JSON.stringify(_));
          }
          RecordFilterChange() {
            let _ = 0;
            this.BIsGameSourceAllowed("library") && (_ |= 1),
              this.BIsGameSourceAllowed("wishlist") && (_ |= 2),
              this.BIsGameSourceAllowed("following") && (_ |= 4),
              this.BIsGameSourceAllowed("recommended") && (_ |= 8),
              this.BIsGameSourceAllowed("steam") && (_ |= 16),
              this.BIsGameSourceAllowed("featured") && (_ |= 32),
              this.BIsGameSourceAllowed("recent") && (_ |= 64),
              this.BIsEventTypeGroupAllowed("news") && (_ |= 1024),
              this.BIsEventTypeGroupAllowed("events") && (_ |= 2048),
              this.BIsEventTypeGroupAllowed("streaming") && (_ |= 4096),
              this.BIsEventTypeGroupAllowed("updates") && (_ |= 8192),
              this.BIsEventTypeGroupAllowed("releases") && (_ |= 16384),
              this.BIsEventTypeGroupAllowed("sales") && (_ |= 32768),
              (0, _._)(_._, _);
          }
          BCuratorUnhideOnFollowDialogDismissed() {
            return this.m_bCuratorUnhideOnFollowDialogDismissed;
          }
          SetCuratorUnhideOnFollowDialogDismissed(_) {
            (this.m_bCuratorUnhideOnFollowDialogDismissed = _),
              this.SaveFilterPreferences();
          }
          BIsEventTypeGroupAllowed(_) {
            return this.m_mapEventTypeGroupsAllowed.has(_);
          }
          BIsGameSourceAllowed(_) {
            return (_ === "following" && !(0, _._)()) ||
              (_ === "curator" && !(0, _._)())
              ? !1
              : this.m_mapGameSources.has(_);
          }
          SetEventTypeGroupAllowed(_, _) {
            _
              ? this.m_mapEventTypeGroupsAllowed.set(_, !0)
              : this.m_mapEventTypeGroupsAllowed.delete(_),
              this.SaveFilterPreferences(),
              this.RecordFilterChange();
          }
          SetGameSourceAllowed(_, _) {
            _
              ? (this.m_mapGameSources.set(_, !0),
                _ == "recent"
                  ? this.m_mapGameSources.delete("library")
                  : _ == "library" &&
                    ((0, _._)(
                      !this.m_mapGameSources.has("recent"),
                      "Setting Library although Recent already set - illusion was broken",
                    ),
                    this.m_mapGameSources.delete("recent")))
              : (this.m_mapGameSources.delete(_),
                _ == "recent"
                  ? this.m_mapGameSources.set("library", !0)
                  : _ == "library" && this.m_mapGameSources.delete("recent")),
              this.SaveFilterPreferences(),
              this.RecordFilterChange();
          }
          BShouldDisplayEvent(_) {
            const _ = _.GetSource(),
              _ = 4320 * 3600,
              _ = !!(
                _.appInfo &&
                _.appInfo.last_played &&
                _.appInfo.last_played + _ >= _._.GetTimeNowWithOverride()
              );
            return (!this.enabledEventTypeSet.has(_.event_type) &&
              !(
                this.m_bInitializedForUpdatesOnly &&
                this.BIsEventTypeGroupAllowed("updates") &&
                _.event_type == _.uYK &&
                _.start_time < _
              )) ||
              this.m_mapHiddenApps.has(_.appid) ||
              this.m_mapHiddenClans.has(_.clanid)
              ? !1
              : _ & _._.k_eRequired || _ & _._.k_eReposted
                ? !0
                : !!(
                    (this.BIsGameSourceAllowed("recent") && _) ||
                    (this.BIsGameSourceAllowed("library") &&
                      _ & _._.k_eLibrary) ||
                    (this.BIsGameSourceAllowed("wishlist") &&
                      _ & _._.k_eWishlist) ||
                    (this.BIsGameSourceAllowed("following") &&
                      _ & _._.k_eFollowing) ||
                    (this.BIsGameSourceAllowed("recommended") &&
                      _ & _._.k_eRecommended) ||
                    (this.BIsGameSourceAllowed("steam") && _ & _._.k_eSteam) ||
                    (this.BIsGameSourceAllowed("featured") &&
                      _ & _._.k_eFeatured) ||
                    (this.BIsGameSourceAllowed("curator") && _ & _._.k_eCurator)
                  );
          }
          BAreAllEventsHidden() {
            return (
              this.m_mapEventTypeGroupsAllowed.size == 0 ||
              this.m_mapGameSources.size == 0
            );
          }
          BAreAnyEventsFiltered(_) {
            const _ = (0, _._)() ? _ : _;
            return (
              (_ ? _ : _).some((_) => !this.BIsGameSourceAllowed(_)) ||
              _.some((_) => !this.BIsEventTypeGroupAllowed(_))
            );
          }
          BIsClanVisible(_) {
            return !this.m_mapHiddenClans.has(_);
          }
          SetClanVisibility(_, _) {
            _
              ? this.m_mapHiddenClans.has(_) && this.m_mapHiddenClans.delete(_)
              : this.m_mapHiddenClans.has(_) ||
                this.m_mapHiddenClans.set(_, !0);
          }
          BIsAppVisible(_) {
            return !this.m_mapHiddenApps.has(_);
          }
          SetAppVisibility(_, _) {
            _
              ? this.m_mapHiddenApps.has(_) && this.m_mapHiddenApps.delete(_)
              : this.m_mapHiddenApps.has(_) || this.m_mapHiddenApps.set(_, !0);
          }
        }
        _([_._], _.prototype, "m_mapEventTypeGroupsAllowed", 2),
          _([_._], _.prototype, "m_mapGameSources", 2),
          _([_._], _.prototype, "m_bCuratorUnhideOnFollowDialogDismissed", 2),
          _([_._], _.prototype, "m_mapHiddenApps", 2),
          _([_._], _.prototype, "m_mapHiddenClans", 2),
          _(
            [
              (0, _._)({
                keepAlive: !0,
                equals: _._.structural,
              }),
            ],
            _.prototype,
            "enabledEventTypeSet",
            1,
          ),
          _([_._], _.prototype, "SetEventTypeGroupAllowed", 1),
          _([_._], _.prototype, "SetGameSourceAllowed", 1);
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
          _ = Object.defineProperty,
          _ = Object.getOwnPropertyDescriptor,
          _ = (_, _, _) =>
            _ in _
              ? _(_, _, {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: _,
                })
              : (_[_] = _),
          _ = (_, _, _, _) => {
            for (
              var _ = _ > 1 ? void 0 : _ ? _(_, _) : _, _ = _.length - 1, _;
              _ >= 0;
              _--
            )
              (_ = _[_]) && (_ = (_ ? _(_, _, _) : _(_)) || _);
            return _ && _ && _(_, _, _), _;
          },
          _ = (_, _, _) => _(_, typeof _ != "symbol" ? _ + "" : _, _);
        const _ = class _ {
          constructor() {
            _(this, "m_mapBlockedAppIds", new Map()),
              _(this, "m_mapBlockedClanIds", new Map()),
              (0, _._)(this);
          }
          static Get() {
            return (
              _.s_globalSingletonStore ||
                ((_.s_globalSingletonStore = new _()),
                _.s_globalSingletonStore.Init()),
              _.s_globalSingletonStore
            );
          }
          GetMutedSourceCount() {
            return this.m_mapBlockedAppIds.size + this.m_mapBlockedClanIds.size;
          }
          Init() {
            const _ = (0, _._)("mutedcomminfo", "application_config");
            this.ValidateStoreDefault(_) &&
              (_.appids &&
                _.appids.forEach((_) => this.m_mapBlockedAppIds.set(_, !0)),
              _.clanids &&
                _.clanids.forEach((_) => this.m_mapBlockedClanIds.set(_, !0)));
          }
          ValidateStoreDefault(_) {
            const _ = _;
            return _ && typeof _ == "object"
              ? (Array.isArray(_.appids) && _.appids.length > 0) ||
                  (Array.isArray(_.clanids) && _.clanids.length > 0)
              : !1;
          }
          BIsEventBlocked(_) {
            return _.appid
              ? this.m_mapBlockedAppIds.has(_.appid)
              : _.clanInfo
                ? this.m_mapBlockedClanIds.has(_.clanInfo.clanid)
                : !1;
          }
          BIsMutedAppID(_) {
            return this.m_mapBlockedAppIds.has(_);
          }
          BIsMutedClanID(_) {
            return this.m_mapBlockedClanIds.has(_);
          }
          async UpdateCommunicationSetting(_, _, _) {
            const _ = _._.STORE_BASE_URL + "account/optoutappcommunication/",
              _ = new FormData();
            if (
              (_.append("sessionid", (0, _._)()),
              _.append("allowCommunication", _ ? "1" : "0"),
              _)
            ) {
              if (
                (!_ && this.m_mapBlockedAppIds.has(_)) ||
                (_ && !this.m_mapBlockedAppIds.has(_))
              )
                return !0;
              _
                ? this.m_mapBlockedAppIds.delete(_)
                : this.m_mapBlockedAppIds.set(_, !0),
                _.append("appId", _.toString());
            } else if (_) {
              if (
                (!_ && this.m_mapBlockedClanIds.has(_)) ||
                (_ && !this.m_mapBlockedClanIds.has(_))
              )
                return !0;
              _
                ? this.m_mapBlockedClanIds.delete(_)
                : this.m_mapBlockedClanIds.set(_, !0),
                _.append("clanId", _.toString());
            } else
              return (
                (0, _._)(
                  !1,
                  "BlockEventsFromCalenderEvent: Invalid AppID and ClanID",
                ),
                !1
              );
            try {
              return (await _().post(_, _)).data.success == _._;
            } catch (_) {
              return (
                console.error(
                  "Blocking app id hit error " + (0, _._)(_).strErrorMsg,
                ),
                !1
              );
            }
          }
        };
        _(_, "s_globalSingletonStore"),
          _([_._], _.prototype, "m_mapBlockedAppIds", 2),
          _([_._], _.prototype, "m_mapBlockedClanIds", 2);
        let _ = _;
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
          _ = Object.defineProperty,
          _ = Object.getOwnPropertyDescriptor,
          _ = (_, _, _) =>
            _ in _
              ? _(_, _, {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: _,
                })
              : (_[_] = _),
          _ = (_, _, _, _) => {
            for (
              var _ = _ > 1 ? void 0 : _ ? _(_, _) : _, _ = _.length - 1, _;
              _ >= 0;
              _--
            )
              (_ = _[_]) && (_ = (_ ? _(_, _, _) : _(_)) || _);
            return _ && _ && _(_, _, _), _;
          },
          _ = (_, _, _) => _(_, typeof _ != "symbol" ? _ + "" : _, _);
        function _(_) {
          const { event: _, closeModal: _ } = _,
            _ = (0, _._)();
          return (0, _.jsx)(_._, {
            initialEvent: _,
            bShowOnlyInitialEvent: !0,
            partnerEventStore: _._,
            emoticonStore: _,
            showAppHeader: !0,
            closeModal: _,
          });
        }
        function _(_, _) {
          (0, _._)(
            (0, _.jsx)(_, {
              event: _,
            }),
            _,
          );
        }
        let _ = class extends _.Component {
          constructor() {
            super(...arguments), _(this, "m_refFocus", _.createRef());
          }
          componentDidMount() {
            this.props.fnClose &&
              (document.addEventListener("keydown", this.escFunction, !1),
              this.m_refFocus.current && this.m_refFocus.current.focus());
          }
          componentWillUnmount() {
            this.props.fnClose &&
              document.removeEventListener("keydown", this.escFunction, !1);
          }
          escFunction(_) {
            const { fnClose: _ } = this.props;
            _.keyCode === 27 && _ && _();
          }
          OnBackgroundClick(_) {
            _.currentTarget == _.target && this.props.fnClose();
          }
          render() {
            const { event: _, langOverride: _, isPreview: _ } = this.props;
            return (0, _.jsx)("div", {
              ref: this.m_refFocus,
              className: _.Main,
              onClick: this.OnBackgroundClick,
              children: (0, _.jsx)(_._, {
                children: (_) =>
                  (0, _.jsx)(
                    _._,
                    {
                      event: _,
                      emoticonStore: _,
                      partnerEventStore: _._.Get(),
                      langOverride: _,
                      isPreview: _,
                      bDisableBroadcastPlayer: !1,
                    },
                    _.GID,
                  ),
              }),
            });
          }
        };
        _([_._], _.prototype, "escFunction", 1),
          _([_._], _.prototype, "OnBackgroundClick", 1),
          (_ = _([_._], _));
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
          _ = Object.defineProperty,
          _ = (_, _, _) =>
            _ in _
              ? _(_, _, {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: _,
                })
              : (_[_] = _),
          _ = (_, _, _) => _(_, typeof _ != "symbol" ? _ + "" : _, _);
        class _ {
          constructor() {
            _(this, "m_bHasBeenTracked", !1), _(this, "m_fnSubmit", null);
          }
        }
        class _ {
          constructor() {
            _(this, "m_nImpressionDelayMS", 500),
              _(this, "m_mapEvents", new Map());
          }
          ShouldTrack(_) {
            if (_.bOldAnnouncement) return !1;
            const _ = this.m_mapEvents.get(_.GID);
            return !_ || !_.m_bHasBeenTracked;
          }
          StartTracking(_, _, _) {
            if (_.bOldAnnouncement) return;
            let _ = this.m_mapEvents.get(_.GID);
            _ || ((_ = new _()), this.m_mapEvents.set(_.GID, _)),
              !_.m_bHasBeenTracked &&
                (_.m_fnSubmit ||
                  ((_.m_fnSubmit = new _._()),
                  _.m_fnSubmit.Schedule(
                    this.m_nImpressionDelayMS,
                    this.ReportImpression.bind(this, _, _, _),
                  )));
          }
          StopTracking(_) {
            const _ = this.m_mapEvents.get(_.GID);
            _ && _.m_fnSubmit && (_.m_fnSubmit.Cancel(), (_.m_fnSubmit = null));
          }
          ReportImpression(_, _, _) {
            if ((_.RecordEventShown(_, _._._), _)) {
              const _ = (0, _._)();
              _.RecordEventViewed(
                _.GID,
                _.GetCurrentlyLoadedItemsForStats(),
                _.GetStoreInitializationTimestamp().getTime() / 1e3,
              );
            }
            const _ = this.m_mapEvents.get(_.GID);
            _ &&
              ((_.m_bHasBeenTracked = !0),
              _.m_fnSubmit.Cancel(),
              (_.m_fnSubmit = null));
          }
        }
        const _ = new _(),
          _ = (_) => {
            const { event: _ } = _,
              _ = (0, _._)(),
              _ = (0, _._)();
            if (_.ShouldTrack(_)) {
              const _ = () =>
                  _.StartTracking(_, _.recordNewsHubStats ? _ : void 0, _),
                _ = () => _.StopTracking(_);
              return (0, _.jsx)(_._, {
                onEnter: _,
                onLeave: _,
              });
            } else return null;
          };
      },
      chunkid: (module) => {
        module.exports = {
          Main: "_1Zn_5pvuMbqr57ws1eJKe",
        };
      },
      chunkid: (module, module_exports, __webpack_require__) => {
        "use strict";
        __webpack_require__._(module_exports, {
          _: () => _,
        });
        const _ =
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAc9JREFUeNrsmz1Lw1AUhnP8qB+Qkk0pItbVxcX/IM6Cky7iFH+Jk79BwclBB3+AszgUwdVNBxFaCw1E7fW9cAep5pa0NiT3vgdeLjRJm/Ocm/NRiCilAp9tKvDcCIAACIAAsiyEzqAepCqqnvEhzHJSLGVQX7jvSKDPoYO8ADS9BUcAJNBiXgCudUjCJEgABPDLZip2v12obwIXur4DdBK+MeVrHaqJSB2KzKqT2izUgLZd2wH30CF8bFnTusgnlhdUsjmXAFxBe3Au9TEJ3hXpfNkA9M22T4v80TIBuIbzDz73ARe+9wG31pqo1DSWGNqBlgcO16oO4A3b/3XIOafQ8b9PSCWZBh8BYMMSfd3wvEPzrk6DH0OON8Z0vvLDkHAaJAACIICJJJeCy+Aa1Pnj8y+Uwa6lDOpA1S3fewSdjJJIi26EOnC0nTtKInpQalsALfn+CDQJgAA8BYDnP8IS+bwDmuNcXHQVWDURG7QUmf7ZEmV9nysZh7dcGIdbALBpAaD7h6dJDFRshQmAAAiAAAiAAAiAAAiAAAiAAAiAAAjgpyUO+ZmMAuDSIQCZvtj+E4zNuhtU98WJxDgfZ50gfHOUSZAACIAAPLZvAQYAZ32YkpymkAcAAAAASUVORK5CYII=";
      },
      chunkid: (module, module_exports, __webpack_require__) => {
        "use strict";
        __webpack_require__._(module_exports, {
          _: () => _,
        });
        const _ =
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAABApJREFUeNrsm2tIFUEUx2evRl5ISnugZuULIwoVtIykIIkgowdmERERUh9CqQ/Rh+gFCX4oKCIjyi8VQtETsoLoARViJEokRYlako9Iy4JKfLX9hz2CwXrv7t6ZvbvcPfDjwr3uzJ7/npk5c3ZUVFVlkWw+FuHmCeAJ4AngCeAJ4AkQwRbtgnucBzJALPgNPoJ28FdI6zwTdCDp4DToUvWtF1SDHIPtFUz0m5GLp9noeAw4BYZV43YFxOm05QNF4DmosirADNABMm1wPgE0qdasHWSAKJALKkAr/TYIUq0KcIAa4Y0lS3Q+HjSroVk/+Knz/eFAfQe7sfpxDckU4bYqx2opKsb6UcwIMElnLPLhsECw8xskOc9F9RPFoIaGyX/9B8oDknSWybmgHhQJXOaOSlg634AP4AH4Dm6Bh6DVzDKYE0ThSoqSUJ5+lmqPVUx0D4EioDeIygdBA8gL4UmtsiGROhcoygIJ8AUMBGk8G7wC1SDRws1lSXb+OCjngW5FgFHw0kAnCthF6ekZkGLiBhMlOT4ENoNjoW6GrpvoNAbsBW3gLtgKpgS5ZkCSAD3gpojdYA34ZmGHuQ5cpWtrSZilJNJ46w/3TksxUBbfDS4K6m+ElqdO0A3mg2WSlsFsUQLwMX4DbHLRNr/eqLCBhkAm2EgC7ABPXCRAr9E/DFQQ8YM7FK61FAUJYKELBGgTIUA3fSaDPS6rdBkWIFgm+M6lpb4mUUXRey50fhA0ihLgLBh2mQANlAkKEaCTNhNusvuiEyE/7QmyXCJAhqhJcHy+vtZMo2G0RrP3afTNEB8KBeCpwwUwnbIrJo/I8KxwJzgCUh3mfD/lLH9kRAC3eLCIabW1FWA/bTudYufNOm82AuJAF02KzIFPPw38MHuhz2Qnlxw69iutOG9lDuDDoAVMd5Dzb0EuZYBMZgRw4zV2XuoadYjz/BV5qVXnrQjA7THY7pAU+STTqtKWTQnhpCjPCy6D9DA5/wIUMq3MFhYBxtJkXncvY9pJDrusAywBX0NtSBF0VthHe4Xl9FnK5J0/6qPoaxF146Imo9dUQFkj2flCUc6LFIDvwK7RBDlbYtjzCGsW2Wiop8TyafxvA1ESx3wdKGHa+0oWTgGmgsVgNVjPtBcbMo1PUCdo8yVl2dUTYBY4BOYw7VxeLGWAKbTbUmya6d8z7aVrnVyJ9Q8ORINy0KPab31gn4DDF4YItgz66SmU2RDun0AVuAB+2ZVQGM0DeNivBFtAMZgpcBvLi5j8LfQjJur4q+REiM/2eSRIPiU+aQZzhc+UL/DS9TOmFVtHWBhNVCY4mWmnypJo2IwdjBikp8xTVl5XHGIOM8X7t7kIN08ATwBPAE8ATwBPgAi2fwIMABJGc33swO3GAAAAAElFTkSuQmCC";
      },
    },
  ]);
})();
