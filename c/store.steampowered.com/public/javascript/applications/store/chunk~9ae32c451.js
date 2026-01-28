"use strict";
(self.webpackChunkstore = self.webpackChunkstore || []).push([
  [351],
  {
    chunkid: (module, module_exports, __webpack_require__) => {
      function _(_) {
        switch (_) {
          case 0:
            return "game";
          case 6:
            return "software";
          case 1:
            return "demo";
          case 4:
            return "dlc";
          case 7:
          case 3:
            return "video";
          case 11:
            return "music";
          case 12:
            return "beta";
          case 2:
            return "mod";
        }
        return "invalid";
      }
      __webpack_require__._(module_exports, {
        _: () => _,
      });
    },
    chunkid: (module, module_exports, __webpack_require__) => {
      __webpack_require__._(module_exports, {
        _: () => _,
        _: () => _,
      });
      const _ = "terminal";
      var _;
      !(function (_) {
        (_[(_.TemplateFAQDisplayColumn = 1)] = "TemplateFAQDisplayColumn"),
          (_[(_.TemplateFAQDisplaySimpleRow = 2)] =
            "TemplateFAQDisplaySimpleRow");
      })(_ || (_ = {}));
    },
    chunkid: (module, module_exports, __webpack_require__) => {
      __webpack_require__._(module_exports, {
        _: () => _,
        _: () => _,
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
      class _ {
        m_mapBadgeInfo = new Map();
        m_mapBadgeLoadPromises = new Map();
        m_eventBadgehangeCallback = new Map();
        m_mapInitialBadgeInfo = new Map();
        GetBadgeInfo(_) {
          return this.m_mapBadgeInfo.get(_);
        }
        GetInitialBadgeInfo(_) {
          return this.m_mapInitialBadgeInfo.get(_);
        }
        GetBadgeInfoChangeCallback(_) {
          return (
            this.m_eventBadgehangeCallback.has(_) ||
              this.m_eventBadgehangeCallback.set(_, new _._()),
            this.m_eventBadgehangeCallback.get(_)
          );
        }
        Test_SetBadgeInfo(_) {
          _.badgeid &&
            (this.m_mapBadgeInfo.set(_.badgeid, _),
            this.GetBadgeInfoChangeCallback(_.badgeid).Dispatch(_));
        }
        async LoadBadgeInfo(_) {
          return this.m_mapBadgeInfo.has(_)
            ? this.m_mapBadgeInfo.get(_)
            : (this.m_mapBadgeLoadPromises.has(_) ||
                this.m_mapBadgeLoadPromises.set(
                  _,
                  this.InternalLoadBadgeInfo(_),
                ),
              this.m_mapBadgeLoadPromises.get(_));
        }
        async InternalLoadBadgeInfo(_) {
          if (!_ || !Number.isInteger(_))
            return {
              badgeid: _,
              level: 0,
            };
          let _ = null;
          try {
            const _ = (0, _._)();
            (0, _._)(
              _ == _._.STORE_BASE_URL || _ == _._.COMMUNITY_BASE_URL,
              "ajaxgetbadgeinfo called on wrong unsupported site: " + _,
            );
            const _ = _ + "actions/ajaxgetbadgeinfo",
              _ = {
                badgeid: _,
              },
              _ = await _().get(_, {
                params: _,
                withCredentials: !0,
              });
            if (
              200 == _.status &&
              (1 == _.data?.success || 42 == _.data?.success)
            ) {
              const _ = {
                badgeid: _.data.badgeid,
                level: _.data.level,
                _: _.data._,
                completion_time: _.data.completion_time,
              };
              return (
                this.m_mapBadgeInfo.set(_, _),
                this.m_mapInitialBadgeInfo.has(_) ||
                  this.m_mapInitialBadgeInfo.set(_, _),
                _
              );
            }
            _ = (0, _._)(_);
          } catch (_) {
            _ = (0, _._)(_);
          }
          console.error("useEventBadge: " + _?.strErrorMsg, _);
          const _ = {
            badgeid: _,
            level: 0,
          };
          return this.m_mapBadgeInfo.set(_, _), _;
        }
        static s_Singleton;
        static Get() {
          return (
            _.s_Singleton ||
              ((_.s_Singleton = new _()),
              "dev" == _._.WEB_UNIVERSE &&
                (window.g_UserBadgeForEventStore = _.s_Singleton)),
            _.s_Singleton
          );
        }
        constructor() {}
      }
      function _(_) {
        const [_, __webpack_require__] = (0, _.useState)(
          _ ? _.Get().GetBadgeInfo(_) : void 0,
        );
        return (
          (0, _.useEffect)(() => {
            !_ &&
              _ &&
              _.Get()
                .LoadBadgeInfo(_)
                .then((_) => __webpack_require__(_));
          }, [_, _]),
          (0, _._)(
            _ ? _.Get().GetBadgeInfoChangeCallback(_) : void 0,
            __webpack_require__,
          ),
          _
        );
      }
      function _(_) {
        _.Get().Test_SetBadgeInfo(_);
      }
      function _(_) {
        const [_, __webpack_require__] = (0, _.useState)(
          _ ? _.Get().GetInitialBadgeInfo(_) : void 0,
        );
        return (
          (0, _.useEffect)(() => {
            !_ && _ && _.Get().LoadBadgeInfo(_);
          }, [_, _]),
          (0, _._)(_ ? _.Get().GetBadgeInfoChangeCallback(_) : void 0, () =>
            __webpack_require__(_ ? _.Get().GetInitialBadgeInfo(_) : void 0),
          ),
          _
        );
      }
    },
    chunkid: (module, module_exports, __webpack_require__) => {
      __webpack_require__._(module_exports, {
        _: () => _,
      });
      var _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid");
      class _ {
        m_rgAnswerToCategoryID = Array();
        m_rgAnswerChosen = Array();
        SetAnswerCategory(_, _) {
          const _ = Math.min(_, 64);
          (this.m_rgAnswerToCategoryID = (0, _._)(
            this.m_rgAnswerToCategoryID,
            _ + 1,
            null,
          )),
            (this.m_rgAnswerToCategoryID[_] = _?.length > 0 ? _ : null);
        }
        GetAnswerCategoryForQuestion(_) {
          return this.BHasAnsweredQuestion(_)
            ? this.m_rgAnswerToCategoryID[_]
            : null;
        }
        SetAnswer(_, _) {
          const _ = Math.min(_, 64);
          (this.m_rgAnswerChosen = (0, _._)(
            this.m_rgAnswerChosen,
            _ + 1,
            null,
          )),
            (this.m_rgAnswerChosen[_] = _);
        }
        GetAnswer(_) {
          return this.BHasAnsweredQuestion(_) ? this.m_rgAnswerChosen[_] : null;
        }
        BHasAnsweredQuestion(_) {
          return (
            _ < this.m_rgAnswerChosen?.length &&
            Boolean(this.m_rgAnswerChosen[_])
          );
        }
        GetAnswerCategories() {
          const _ = new Array();
          return (
            this.m_rgAnswerToCategoryID.forEach((_) => {
              _?.length > 0 && _.filter(Boolean).forEach((_) => _.push(_));
            }),
            _
          );
        }
        GetAnswers() {
          return this.m_rgAnswerChosen;
        }
        GetLargestAnswerQuestion() {
          return this?.m_rgAnswerChosen.length || 0;
        }
        ClearAnswersAndCategories() {
          (this.m_rgAnswerToCategoryID = Array()),
            (this.m_rgAnswerChosen = Array());
        }
        BHasTerminalAnswerChosen() {
          return this.m_rgAnswerChosen.some((_) => _.reveal_question_id == _._);
        }
        static s_Singleton;
        static Get() {
          return (
            _.s_Singleton ||
              ((_.s_Singleton = new _()),
              "dev" == _._.WEB_UNIVERSE &&
                (window.g_SaleQuizAnswerStore = _.s_Singleton)),
            _.s_Singleton
          );
        }
        constructor() {
          (0, _._)(this);
        }
      }
      (0, _._)([_._], _.prototype, "m_rgAnswerToCategoryID", void 0),
        (0, _._)([_._], _.prototype, "m_rgAnswerChosen", void 0);
    },
    chunkid: (module, module_exports, __webpack_require__) => {
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
        _ = __webpack_require__._(_),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid");
      const _ = 7,
        _ = -1;
      class _ {
        m_userData;
        m_bLoadedDuringInit = !1;
        m_strLastDoorOpenKey = "video_noneset";
        m_bIsAnyDoorOpened = !1;
        m_nHighestDoorOpened = _;
        m_initialLoadPromise;
        m_mapDoorOpenPromise = new Map();
        m_mapChangeCallback = new Map();
        m_doorInitializedChangedCallback = new _._();
        m_largestDoorChangeCallback = new _._();
        m_bIsAnyDoorOpenChangeCallback = new _._();
        GetLastDoorOpen() {
          return this.m_strLastDoorOpenKey;
        }
        GetRawDoorData() {
          return this.m_userData;
        }
        BIsDoorOpened(_) {
          return (
            null != _ &&
            null != _ &&
            !!this.m_userData &&
            Boolean(_ < this.m_userData.length && this.m_userData[_].opened)
          );
        }
        BCanUserOpenDoor(_) {
          let _ = _._.GetTimeNowWithOverride();
          return (
            _._.logged_in &&
            this.m_userData &&
            _ < this.m_userData.length &&
            _ >= this.m_userData[_].rtime_start &&
            _ <= this.m_userData[_].rtime_end
          );
        }
        GetDoorCount() {
          return this.m_userData ? this.m_userData.length : 0;
        }
        BIsAnyDoorOpened() {
          return this.m_bIsAnyDoorOpened;
        }
        GetIsAnyDoorOpenChange() {
          return this.m_bIsAnyDoorOpenChangeCallback;
        }
        GetLargestDoorOpenIndex() {
          return this.m_nHighestDoorOpened;
        }
        GetLargestDoorIndexChange() {
          return this.m_largestDoorChangeCallback;
        }
        GetDoorStateChangeCallback(_) {
          return (
            this.m_mapChangeCallback.has(_) ||
              this.m_mapChangeCallback.set(_, new _._()),
            this.m_mapChangeCallback.get(_)
          );
        }
        GetDoorStateInitializedChangeCallback() {
          return this.m_doorInitializedChangedCallback;
        }
        BIsInitialized() {
          return this.m_bLoadedDuringInit;
        }
        GetMaxDoor() {
          return _;
        }
        SetInMemoryUpdateDoorOpenUpto(_) {
          for (let _ = 0; _ < _; ++_) {
            const _ = _ <= _;
            this.m_userData[_].opened != _ &&
              ((this.m_userData[_].opened = _),
              this.GetDoorStateChangeCallback(_).Dispatch(_));
          }
          this.RecomputeState();
        }
        SetInMemorySpecificDoorState(_, _) {
          _ < _
            ? this.m_userData[_].opened != _ &&
              ((this.m_userData[_].opened = _),
              this.GetDoorStateChangeCallback(_).Dispatch(_),
              this.RecomputeState())
            : console.error("CDoorStore: Wrong door being set " + _);
        }
        RecomputeState() {
          let _ = _;
          this.m_userData?.forEach((_) => {
            _.opened && _.day > _ && (_ = _.day);
          });
          const _ = _ != _;
          _ != this.m_bIsAnyDoorOpened &&
            ((this.m_bIsAnyDoorOpened = _),
            this.GetIsAnyDoorOpenChange().Dispatch(_)),
            _ != this.m_nHighestDoorOpened &&
              ((this.m_nHighestDoorOpened = _),
              this.GetLargestDoorIndexChange().Dispatch(_));
        }
        async OpenDoor(_, _ = !0, __webpack_require__ = "", _ = !1) {
          return !_._.logged_in ||
            !this.m_userData ||
            _ > this.m_userData.length ||
            _ < 0
            ? ("dev" == _._.WEB_UNIVERSE &&
                console.log(
                  "CDoorStore.OpenDoor Early fail settings:",
                  _._.logged_in,
                  this.m_userData,
                  _,
                  this.m_userData?.length,
                ),
              null)
            : this.m_mapDoorOpenPromise.has(_)
              ? this.m_mapDoorOpenPromise.get(_)
              : this.m_userData[_].opened == _
                ? {}
                : (this.m_mapDoorOpenPromise.has(_) ||
                    this.m_mapDoorOpenPromise.set(
                      _,
                      this.InternalOpenDoor(_, _, __webpack_require__, _),
                    ),
                  this.m_mapDoorOpenPromise.get(_));
        }
        async InternalOpenDoor(_, _ = !0, _, _ = !1) {
          let _ = _._.STORE_BASE_URL + "saleaction/ajaxopendoor";
          const _ = new FormData();
          _.append("sessionid", _._.SESSIONID),
            _ && _.append("datarecord", _),
            _ && _.append("fake_open", "" + _),
            _.append("door_index", "" + _),
            _.append("clan_accountid", "" + _._.CLANACCOUNTID),
            _ || _.append("open_door", "0");
          let _ = null;
          try {
            let _ = await _().post(_, _, {
              withCredentials: !0,
            });
            if (200 == _?.status && 1 == _?.data?.success)
              return (
                (this.m_userData[_].opened = _),
                (this.m_strLastDoorOpenKey = "door_" + (_ ? _ : _ - 1)),
                _.data.capsuleinsert && (0, _._)([_.data.capsuleinsert]),
                this.GetDoorStateChangeCallback(_).Dispatch(_),
                this.RecomputeState(),
                _.data
              );
            _ = (0, _._)(_);
          } catch (_) {
            _ = (0, _._)(_);
          }
          return (
            this.m_mapDoorOpenPromise.delete(_),
            console.error("OpenDoor hit error: " + _.strErrorMsg, _),
            null
          );
        }
        async LoadDoorData() {
          return this.m_bLoadedDuringInit
            ? this.m_userData
            : (this.m_initialLoadPromise ||
                (this.m_initialLoadPromise = this.InternalLoadDoorData()),
              this.m_initialLoadPromise);
        }
        async InternalLoadDoorData() {
          const _ = _._.STORE_BASE_URL + "saleaction/ajaxgetopendoor";
          let _ = null;
          try {
            const _ = await _().get(_, {
              withCredentials: !0,
            });
            if (200 == _.status && _.data?.doordata) {
              (this.m_userData = _.data.doordata),
                (this.m_bLoadedDuringInit = !0);
              for (let _ = 0; _ < _; ++_)
                this.GetDoorStateChangeCallback(_).Dispatch(
                  this.m_userData[_].opened,
                );
              return (
                this.GetDoorStateInitializedChangeCallback().Dispatch(
                  this.m_bLoadedDuringInit,
                ),
                this.RecomputeState(),
                this.m_userData
              );
            }
            _ = (0, _._)(_);
          } catch (_) {
            _ = (0, _._)(_);
          }
          return (
            console.error(
              "CDoorStore.LoadDoorData failed: " + _?.strErrorMsg,
              _,
            ),
            null
          );
        }
        async CloseAllDoors(_) {
          let _ = _._.STORE_BASE_URL + "saleaction/ajaxclosealldoor";
          const _ = new FormData();
          __webpack_require__.append("sessionid", _._.SESSIONID),
            __webpack_require__.append("clan_accountid", "" + _);
          let _ = null;
          try {
            let _ = await _().post(_, _, {
              withCredentials: !0,
            });
            if (200 == _.status && 1 == _?.data?.success) {
              console.log("CDoorStore - closed " + _.data.count);
              for (let _ = 0; _ < _; ++_)
                (this.m_userData[_].opened = !1),
                  this.GetDoorStateChangeCallback(_).Dispatch(
                    this.m_userData[_].opened,
                  );
              return this.RecomputeState(), !0;
            }
            _ = (0, _._)(_);
          } catch (_) {
            _ = (0, _._)(_);
          }
          return (
            console.error(
              "CDoorStore.CloseAllDoors failed: " + _?.strErrorMsg,
              _,
            ),
            null
          );
        }
        static s_Singleton;
        static Get() {
          return (
            _.s_Singleton ||
              ((_.s_Singleton = new _()),
              _.s_Singleton.Init(),
              "dev" == _._.WEB_UNIVERSE &&
                (window.g_EventDoorStore = _.s_Singleton)),
            _.s_Singleton
          );
        }
        constructor() {
          (0, _._)(this);
        }
        Init() {
          (this.m_userData = (0, _._)("doorinfo", "application_config")),
            this.m_userData &&
              ((this.m_bLoadedDuringInit = !0),
              this.RecomputeState(),
              "dev" == _._.WEB_UNIVERSE &&
                console.log("CDoorStore Loading - ", this.m_userData));
        }
      }
      function _() {
        return {
          fnOpenDoor: _.Get().OpenDoor,
        };
      }
      function _() {
        const [_, _] = (0, _.useState)(_.Get().BIsInitialized());
        return (
          (0, _.useEffect)(() => {
            _ || _.Get().LoadDoorData();
          }, [_]),
          (0, _._)(_.Get().GetDoorStateInitializedChangeCallback(), _),
          _
        );
      }
      function _(_) {
        const _ = _(),
          [__webpack_require__, _] = (0, _.useState)(
            _ ? _.Get().BIsDoorOpened(_) : void 0,
          );
        return (
          (0, _._)(_.Get().GetDoorStateChangeCallback(_), _),
          __webpack_require__
        );
      }
      function _() {
        const _ = _(),
          [_, __webpack_require__] = (0, _.useState)(
            _ ? _.Get().GetLargestDoorOpenIndex() : _,
          );
        return (
          (0, _._)(_.Get().GetLargestDoorIndexChange(), __webpack_require__), _
        );
      }
      function _() {
        const _ = _(),
          [_, __webpack_require__] = (0, _.useState)(
            !!_ && _.Get().BIsAnyDoorOpened(),
          );
        return (
          (0, _._)(_.Get().GetIsAnyDoorOpenChange(), __webpack_require__), _
        );
      }
      function _(_) {
        _.Get().SetInMemoryUpdateDoorOpenUpto(_);
      }
      function _(_, _) {
        _.Get().SetInMemorySpecificDoorState(_, _);
      }
      (0, _._)([_._], _.prototype, "m_bIsAnyDoorOpened", void 0),
        (0, _._)([_._], _.prototype, "m_nHighestDoorOpened", void 0),
        (0, _._)([_._], _.prototype, "BIsDoorOpened", null),
        (0, _._)([_._], _.prototype, "OpenDoor", null);
    },
    chunkid: (module, module_exports, __webpack_require__) => {
      __webpack_require__._(module_exports, {
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
        _ = (__webpack_require__("chunkid"), __webpack_require__("chunkid")),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid");
      !(function (_) {
        (_[(_.k_EDiscoveryAction_Invalid = 0)] = "k_EDiscoveryAction_Invalid"),
          (_[(_.k_EDiscoveryAction_OpenStorePage = 1)] =
            "k_EDiscoveryAction_OpenStorePage"),
          (_[(_.k_EDiscoveryAction_OpenDoor = 2)] =
            "k_EDiscoveryAction_OpenDoor");
      })(_ || (_ = {}));
      class _ {
        m_mapMaterializedInsertion = new Map();
        m_mapInsertCallback = new Map();
        m_rgFutureInsertions = new Array();
        GetMatchingInsertion(_, _) {
          return this.m_mapMaterializedInsertion.get(this.GetKeyFromID(_, _));
        }
        GetChangeCallback(_, _) {
          const _ = this.GetKey({
            sectionID: _,
            tabID: _,
          });
          return this.GetChangeCallbackByKey(_);
        }
        GetChangeCallbackByKey(_) {
          return (
            this.m_mapInsertCallback.has(_) ||
              this.m_mapInsertCallback.set(_, new _._()),
            this.m_mapInsertCallback.get(_)
          );
        }
        GetKey(_) {
          return _ ? _.sectionID + "_" + (_.tabID || "-1") : null;
        }
        GetKeyFromID(_, _) {
          return _ + "_" + (_ || "-1");
        }
        ReplaceInsertion(_) {
          _.forEach((_) => {
            const _ = this.GetKey(_);
            this.m_mapMaterializedInsertion.forEach((_) => {
              const _ = this.GetKey(_);
              _ && _ != _ && this.DispatchInsertion(_, !0);
            }),
              this.m_mapMaterializedInsertion.clear(),
              (this.m_rgFutureInsertions = Array()),
              this.AppendInsertion(_);
          });
        }
        AppendInsertion(_) {
          _?.sectionID
            ? (this.m_mapMaterializedInsertion.set(this.GetKey(_), _),
              this.DispatchInsertion(_))
            : this.m_rgFutureInsertions.push(_);
        }
        DispatchInsertion(_, _) {
          _.sectionID &&
            this.GetChangeCallback(_.sectionID, _.tabID).Dispatch(_ ? null : _);
        }
        AppCapsuleFound(_) {
          this.m_rgFutureInsertions = this.m_rgFutureInsertions.filter(
            (_) => !(!_.sectionID && _.insertion_requirement && _.appid == _),
          );
        }
        GetAnyNonMaterializedInsertionRequest() {
          const _ = this.m_rgFutureInsertions.length;
          return _ > 0
            ? this.m_rgFutureInsertions[Math.floor(_ * Math.random())]
            : null;
        }
        SaleInteractionCallback(_, _) {
          if (this.m_rgFutureInsertions.length > 0)
            for (let _ = 0; _ < this.m_rgFutureInsertions.length; ++_)
              if (this.AreWeAllowedToDeploy(this.m_rgFutureInsertions[_], _)) {
                const _ = this.DeployCapsuleIfPossible(
                  _,
                  this.m_rgFutureInsertions[_],
                );
                _ &&
                  ((0, _._)(
                    Boolean(_.sectionID),
                    "Expected to have a materialized insertion at this poiunt: " +
                      _.sectionID,
                  ),
                  this.AppendInsertion(_));
              }
        }
        AreWeAllowedToDeploy(_, _) {
          if (
            !_.sectionID &&
            _.insertion_requirement &&
            _.size >= _.insertion_requirement.min_interactions
          ) {
            if (_.size >= _.insertion_requirement.max_interactions) return !0;
            const _ =
              _.insertion_requirement.max_interactions -
              _.insertion_requirement.min_interactions;
            return 0 == Math.floor(_ * Math.random());
          }
          return !1;
        }
        BIsInsertableSectionType(_) {
          if (_) {
            if ("sale_item_browser" == _.section_type) return !0;
            if ((0, _._)(_.section_type))
              return (
                !(0, _._)(_) ||
                ("wishlist" != (0, _._)(_) && "wishlist_onsale" != (0, _._)(_))
              );
          }
          return !1;
        }
        BHasExistingInsertion(_) {
          return Boolean(this.GetMatchingInsertion(_.sectionid, _.tabid));
        }
        DeployCapsuleIfPossible(_, _) {
          if (this.BHasExistingInsertion(_)) return null;
          if (_._.ANNOUNCEMENT_GID) {
            const _ = _._.GetClanEventFromAnnouncementGID(_._.ANNOUNCEMENT_GID),
              _ = __webpack_require__?.GetSaleSectionByID(_.sectionid);
            if (this.BIsInsertableSectionType(_)) {
              if (
                _.insertion_requirement.additional_adds > 0 &&
                _.insertion_requirement.delta_interactions > 0
              ) {
                const _ = {
                  ..._,
                };
                (_.insertion_requirement = {
                  ..._.insertion_requirement,
                }),
                  (_.insertion_requirement.additional_adds -= 1),
                  (_.insertion_requirement.max_interactions +=
                    _.insertion_requirement.delta_interactions),
                  (_.insertion_requirement.min_interactions +=
                    _.insertion_requirement.delta_interactions),
                  this.AppendInsertion(_);
              }
              return (
                (_.sectionID = _.sectionid),
                (_.tabID = _.tabid),
                (_.insertionIndex = _.elementIndex),
                _
              );
            }
          }
          return null;
        }
        static s_Singleton;
        static Get() {
          return (
            _.s_Singleton ||
              ((_.s_Singleton = new _()),
              _.s_Singleton.Init(),
              "dev" == _._.WEB_UNIVERSE &&
                (window.g_DynamicCapsuleInsertStore = _.s_Singleton)),
            _.s_Singleton
          );
        }
        constructor() {
          (0, _._)(this);
        }
        Init() {
          const _ = (0, _._)("capsuleinsert", "application_config");
          _.ValidateData(_) &&
            (_.sectionID
              ? this.m_mapMaterializedInsertion.set(this.GetKey(_), _)
              : _.insertion_requirement
                ? (this.m_rgFutureInsertions.push(_),
                  _?.appid &&
                    _._.Get()
                      .QueueAppRequest(_.appid, {
                        include_assets: !0,
                        include_release: !0,
                        include_trailers: !0,
                      })
                      .then(() => {
                        const _ = _._.Get().GetApp(_.appid);
                        !_ ||
                          _.GetBestPurchaseOption()?.formatted_final_price
                            ?.length > 0 ||
                          _.ReplaceBestPurchaseOption({
                            packageid: 0,
                            bundleid: 0,
                            formatted_original_price: "CL.0R",
                            formatted_final_price: "TH.4X",
                            discount_pct: 50,
                          });
                      }))
                : "dev" == _._.WEB_UNIVERSE &&
                  console.error(
                    "CDynamicCapsuleInsertStore: Payload not material and missing instructions.",
                    _,
                  ),
            "dev" == _._.WEB_UNIVERSE &&
              console.log("CDynamicCapsuleInsertStore loaded ", _)),
            _._.Get()
              .GetNewInteractionCallback()
              .Register(this.SaleInteractionCallback);
        }
        static ValidateData(_) {
          const _ = _;
          return (
            _ &&
            ("number" == typeof _.sectionID ||
              "object" == typeof _.insertion_requirement) &&
            "number" == typeof _.appid &&
            "number" == typeof _.action
          );
        }
      }
      function _(_) {
        _.Get().ReplaceInsertion(_);
      }
      function _(_, _) {
        return _.Get().GetMatchingInsertion(_, _);
      }
      function _(_, _) {
        return _.Get().GetChangeCallback(_, _);
      }
      function _(_) {
        _.Get().AppCapsuleFound(_);
      }
      function _() {
        return _.Get().GetAnyNonMaterializedInsertionRequest();
      }
      function _(_) {
        return _.Get().BIsInsertableSectionType(_);
      }
      (0, _._)([_._], _.prototype, "SaleInteractionCallback", null),
        (0, _._)([_._], _.prototype, "DeployCapsuleIfPossible", null);
    },
    chunkid: (module, module_exports, __webpack_require__) => {
      __webpack_require__._(module_exports, {
        _: () => _,
      });
      var _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid");
      class _ {
        m_setInteractions = new Set();
        m_nActiveTabID = -1;
        m_interactionCallback = new _._();
        m_bDebugMode = !0;
        GetNewInteractionCallback() {
          return this.m_interactionCallback;
        }
        AddInteraction(_, _) {
          const _ = `${this.m_nActiveTabID}_${_}_${_}`,
            _ = !this.m_setInteractions.has(_);
          this.m_setInteractions.add(_),
            _ &&
              ("dev" == _._.WEB_UNIVERSE &&
                this.m_bDebugMode &&
                console.log(
                  "CSaleInteractionStore new: " +
                    _ +
                    " count: " +
                    this.m_setInteractions.size,
                ),
              this.m_interactionCallback.Dispatch(
                {
                  tabid: this.m_nActiveTabID,
                  sectionid: _,
                  elementIndex: _,
                },
                this.m_setInteractions,
              ));
        }
        SetActiveTab(_) {
          this.m_nActiveTabID = _;
        }
        static s_Singleton;
        static Get() {
          return (
            _.s_Singleton ||
              ((_.s_Singleton = new _()),
              _.s_Singleton.Init(),
              "dev" == _._.WEB_UNIVERSE &&
                (window.g_SaleInteractionStore = _.s_Singleton)),
            _.s_Singleton
          );
        }
        constructor() {}
        Init() {}
      }
    },
    chunkid: (module, module_exports, __webpack_require__) => {
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
            creatorID: _,
            bShowTagline: __webpack_require__,
            bHideCreatorType: _,
            bSmallFormat: _,
            bHideFollowButton: _,
            bAddLinkToMemberList: _,
            bMinimalDisplay: _,
          } = _,
          { creatorHome: _ } = (0, _._)(_.clan_account_id),
          [_] = (0, _._)();
        if (_ || !_)
          return _.createElement(
            "div",
            {
              className: _.DevSummaryWidgetCtn,
            },
            _.createElement(_._, {
              string: (0, _._)("#Loading"),
              size: "medium",
              position: "center",
            }),
          );
        const _ = _.type,
          _ =
            "developer" == _.type
              ? (0, _._)("#CreatorHome_DevelopedBy")
              : "publisher" == _.type
                ? (0, _._)("#CreatorHome_PublishedBy")
                : (0, _._)("#CreatorHome_InFranchise"),
          _ = _.GetCreatorHomeURL(_),
          _ = _.GetNumFollowers();
        return _.createElement(
          _._,
          null,
          _.createElement(
            _._,
            {
              feature: "salecreatorhome",
            },
            _.createElement(
              _._,
              {
                className: (0, _._)(
                  _.DevSummaryCtn,
                  _ ? _.SmallFormat : _.LargeFormat,
                  _ ? _.MinimalDisplay : "",
                ),
                "flow-children": "row",
              },
              !_ &&
                _.createElement(
                  "span",
                  {
                    className: _.Title,
                  },
                  _,
                ),
              _.createElement(
                "div",
                {
                  className: _.DevSummaryWidgetCtn,
                },
                _.createElement("div", {
                  className: _.DevSummaryBackground,
                  style: {
                    backgroundImage: `url(${_.GetAvatarURLFullSize()} )`,
                  },
                }),
                _.createElement(
                  "div",
                  {
                    className: (0, _._)(_.DevSummaryContent),
                  },
                  _.createElement(
                    "div",
                    {
                      className: _.FlexRowContainer,
                    },
                    _.createElement(
                      _._,
                      {
                        href: (0, _._)(_),
                        className: _.AvatarLink,
                        bAllowFocuseableAnchor: !0,
                      },
                      _.createElement("img", {
                        className: (0, _._)(_.Avatar, "Avatar_Trgt"),
                        src: _.GetAvatarURLFullSize(),
                      }),
                    ),
                    _.createElement(
                      "div",
                      {
                        className: (0, _._)(
                          _.FlexColumnContainer,
                          _.CreatorDescCtn,
                        ),
                      },
                      _.createElement(
                        "div",
                        {
                          className: (0, _._)(
                            _.CreatorTitleCtn,
                            _.FlexColumnContainer,
                          ),
                        },
                        _.createElement(
                          _._,
                          {
                            href: (0, _._)(_),
                            className: _.CreatorNameName,
                          },
                          _.GetName(),
                        ),
                        Boolean(__webpack_require__) &&
                          _.createElement(
                            "div",
                            {
                              className: (0, _._)(
                                _.FlexColumnContainer,
                                _.CreatorTagline,
                              ),
                            },
                            _.GetTagLine(),
                          ),
                      ),
                      _.createElement(
                        "div",
                        {
                          className: (0, _._)({
                            [_.FlexColumnContainer]: _,
                            [_.FlexRowContainer]: !_,
                            [_.SocialFollowersCtn]: !0,
                          }),
                        },
                        _.createElement(
                          "div",
                          {
                            className: (0, _._)(_.FollowBtnCtn),
                          },
                          Boolean(!_) &&
                            _.createElement(_._, {
                              clanAccountID: _.clan_account_id,
                              creatorID: _,
                            }),
                          _.createElement(
                            "div",
                            {
                              className: (0, _._)({
                                [_.Followers]: !0,
                              }),
                            },
                            _.createElement(
                              "span",
                              null,
                              (0, _._)("#CreatorHome_JustFollowers"),
                            ),
                            _.createElement(
                              "span",
                              {
                                className: _.FollowerCount,
                              },
                              (0, _._)(_),
                            ),
                          ),
                        ),
                      ),
                    ),
                  ),
                  Boolean(_) &&
                    _.createElement(
                      "a",
                      {
                        href:
                          _._.COMMUNITY_BASE_URL +
                          "gid/" +
                          _.GetClanSteamID().ConvertTo64BitString() +
                          "/members/",
                        target: "_blank",
                        className: _.MembersListLink,
                      },
                      (0, _._)("#ClanMembershipList"),
                    ),
                ),
              ),
            ),
          ),
        );
      }
      function _(_) {
        const { appid: _, bSmallFormat: __webpack_require__ } = _,
          [_] = (0, _._)(_, {
            include_basic_info: !0,
          });
        if (!_) return null;
        if (!_)
          return _.createElement(
            "div",
            {
              className: _.DevSummaryWidgetCtn,
            },
            _.createElement(_._, null),
          );
        let _;
        const _ = _.GetAllDeveloperCreatorClans();
        if (_?.length > 0)
          _ = {
            appid: _,
            name: "",
            clan_account_id: _[0],
            type: "developer",
          };
        else {
          const _ = _.GetAllPublisherCreatorClans();
          if (_?.length > 0)
            _ = {
              appid: _,
              name: "",
              clan_account_id: _[0],
              type: "publisher",
            };
          else {
            const _ = _.GetAllFranchiseCreatorClans();
            _?.length > 0 &&
              (_ = {
                appid: _,
                name: "",
                clan_account_id: _[0],
                type: "franchise",
              });
          }
        }
        return _
          ? _.createElement(
              _._,
              null,
              _.createElement(_, {
                creatorID: _,
                bSmallFormat: __webpack_require__,
              }),
            )
          : null;
      }
    },
    chunkid: (module, module_exports, __webpack_require__) => {
      __webpack_require__._(module_exports, {
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
        _ = __webpack_require__("chunkid");
      class _ {
        m_sParentOrigin;
        m_eventModelJson = void 0;
        m_setMouseOverSectionID = _._.set();
        m_setMouseOverSubsectionID = _._.set();
        m_jumpToSection = void 0;
        m_jumpToSubsection = void 0;
        static s_Singleton;
        static Get() {
          return (
            _.s_Singleton ||
              ((_.s_Singleton = new _()),
              "dev" == _._.WEB_UNIVERSE &&
                (window.g_PartnerSaleLivePreviewClient = _.s_Singleton)),
            _.s_Singleton
          );
        }
        constructor() {
          (0, _._)(this),
            window.opener &&
              ((this.m_sParentOrigin = (0, _._)(
                location.search,
                "parentOrigin",
              )),
              window.addEventListener("message", this.HandleMessage),
              window.addEventListener("beforeunload", () =>
                window.opener.postMessage(
                  {
                    message: "PartnerEventEditor_ClientUnready",
                  },
                  this.m_sParentOrigin,
                ),
              ),
              window.opener.postMessage(
                {
                  message: "PartnerEventEditor_ClientReady",
                },
                this.m_sParentOrigin,
              ));
        }
        BIsConnected() {
          return !(!window.opener || !this.m_eventModelJson);
        }
        GetEventModelJson() {
          return this.m_eventModelJson;
        }
        GetMouseOverSectionID() {
          return this.m_setMouseOverSectionID.size > 0
            ? this.m_setMouseOverSectionID.values().next().value
            : void 0;
        }
        GetMouseOverSubsectionID() {
          return this.m_setMouseOverSubsectionID.size > 0
            ? this.m_setMouseOverSubsectionID.values().next().value
            : void 0;
        }
        GetJumpToSectionID() {
          return this.m_jumpToSection;
        }
        GetJumpToSubsectionIDs() {
          return this.m_jumpToSubsection;
        }
        ClearJumpToSectionID() {
          (0, _._)(() => (this.m_jumpToSection = void 0));
        }
        ClearJumpToSubectionID() {
          (0, _._)(() => (this.m_jumpToSubsection = void 0));
        }
        PostMessage(_) {
          window.opener &&
            this.m_sParentOrigin &&
            window.opener.postMessage(_, this.m_sParentOrigin);
        }
        SetMouseOverSection(_, _) {
          if (!this.BIsConnected()) return;
          const _ = {
            message: "PartnerEventEditor_MouseOverViewSection",
            nSectionID: _,
            bMouseOver: _,
          };
          this.PostMessage(_);
        }
        SetMouseOverSubsection(_, _) {
          if (!this.BIsConnected()) return;
          const _ = {
            message: "PartnerEventEditor_MouseOverViewSubsection",
            strSubsectionID: _,
            bMouseOver: _,
          };
          this.PostMessage(_);
        }
        JumpToSection(_) {
          if (!this.BIsConnected()) return;
          const _ = {
            message: "PartnerEventEditor_JumpToViewSection",
            nSectionID: _,
          };
          this.PostMessage(_);
        }
        HandleMessage(_) {
          if (_.origin != this.m_sParentOrigin) return;
          const _ =
            _.data && "object" == typeof _.data && "message" in _.data
              ? _.data
              : null;
          if (_)
            switch (_.message) {
              case "PartnerEventEditor_Update":
                if ("eventModelJson" in _ && _.eventModelJson) {
                  const _ = _;
                  (0, _._)(() => (this.m_eventModelJson = _.eventModelJson));
                }
                break;
              case "PartnerEventEditor_MouseOverEditorSection":
                if ("nSectionID" in _) {
                  const _ = _;
                  (0, _._)(() => {
                    _.bMouseOver
                      ? this.m_setMouseOverSectionID.add(_.nSectionID)
                      : this.m_setMouseOverSectionID.delete(_.nSectionID);
                  });
                }
                break;
              case "PartnerEventEditor_MouseOverEditorSubsection":
                if ("strSubsectionID" in _) {
                  const _ = _;
                  (0, _._)(() => {
                    _.bMouseOver
                      ? this.m_setMouseOverSubsectionID.add(_.strSubsectionID)
                      : this.m_setMouseOverSubsectionID.delete(
                          _.strSubsectionID,
                        );
                  });
                }
                break;
              case "PartnerEventEditor_JumpToEditorSection":
                if ("nSectionID" in _) {
                  const _ = _;
                  (0, _._)(() => (this.m_jumpToSection = _.nSectionID));
                }
                break;
              case "PartnerEventEditor_JumpToEditorSubection":
                if ("strSubsectionID" in _) {
                  const _ = _;
                  (0, _._)(() => {
                    (this.m_jumpToSection = _.nSectionID),
                      (this.m_jumpToSubsection = {
                        nSectionID: _.nSectionID,
                        strSubsectionID: _.strSubsectionID,
                      });
                  });
                }
            }
        }
      }
      function _() {
        return (0, _._)(() => _.Get().BIsConnected());
      }
      function _(_) {
        const _ = (0, _._)(() => _.Get().GetJumpToSectionID());
        _.useEffect(() => {
          if (!_.Get().BIsConnected() || !_) return;
          _(_) && _.Get().ClearJumpToSectionID();
        }, [_, _]);
      }
      function _(_) {
        const _ = (0, _._)(() => _.Get().GetJumpToSubsectionIDs());
        _.useEffect(() => {
          if (!_.Get().BIsConnected() || !_) return;
          _(_.nSectionID, _.strSubsectionID) &&
            _.Get().ClearJumpToSubectionID();
        }, [_, _]);
      }
      (0, _._)([_._], _.prototype, "m_eventModelJson", void 0),
        (0, _._)([_._], _.prototype, "m_setMouseOverSectionID", void 0),
        (0, _._)([_._], _.prototype, "m_setMouseOverSubsectionID", void 0),
        (0, _._)([_._], _.prototype, "m_jumpToSection", void 0),
        (0, _._)([_._], _.prototype, "m_jumpToSubsection", void 0),
        (0, _._)([_._], _.prototype, "HandleMessage", null);
    },
    chunkid: (module, module_exports, __webpack_require__) => {
      __webpack_require__._(module_exports, {
        _: () => _,
      });
      var _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid");
      function _(_) {
        const {
          href: _,
          children: __webpack_require__,
          bAllowFocuseableAnchor: _,
          ..._
        } = _;
        return (0, _._)()
          ? _.createElement(
              "div",
              {
                ..._,
              },
              __webpack_require__,
            )
          : _
            ? _.createElement(
                _._,
                {
                  href: _,
                  ..._,
                },
                __webpack_require__,
              )
            : _.createElement(
                "a",
                {
                  href: _,
                  ..._,
                },
                __webpack_require__,
              );
      }
    },
  },
]);
