(self.webpackChunkstore = self.webpackChunkstore || []).push([
  [8620],
  {
    chunkid: (module) => {
      module.exports = {
        Link: "-HlDBB290kjpl61uUmRed",
        Banner: "_2bT8irkKNnA5sxFG3MUXzH",
        Big: "sGy-bB7uqEt4Hoe7U5iA1",
        Mobile: "mhii5hgMCQvO2tXOUdWPQ",
      };
    },
    chunkid: (module) => {
      module.exports = {
        SmallAvatar: "_2cuu0nLVc4medg6FpU6PQl",
      };
    },
    chunkid: (module) => {
      module.exports = {
        SectionTitleHeader: "_2g5oNomwd2lv8wL2qlsLVA",
        SectionTitleButtons: "RGHKm1_KeaBjdzuvisfYN",
        required_title: "_3yDPZjnsoLc2FkrAH2UOEd",
      };
    },
    chunkid: (module) => {
      module.exports = {
        Ctn: "_35KiKa7cq-3mn4lChNW67c",
        EventName: "e-36dCsEtoK52wg6Qx1iq",
        AtendeeSearchRow: "_1KbfPGq52sl-NB4ku90gN3",
        AttendeeRow: "_35gHo_M6tBBUOL8PWGEmA9",
        DisplaySessionCtn: "_1Wizm765ubdl9a--uQOfaH",
        DisplaySessionTitle: "_3G3wSJfgZHDXiuHWWc9ioy",
        DisplaySessionRow: "w4AXxxc4vt_ojFLD9z6Wl",
        DisplaySession: "_27ybiS1mMlsYotyoQGVmI_",
        DisplaySessionTime: "_2TlbPEaCKSbIwsmzTxvbJR",
      };
    },
    chunkid: (module) => {
      module.exports = {
        Ctn: "_3cmUbcgdPxM7o5hl986RgB",
        User: "_3E6Usl36asxUFK3vPKa7Us",
        EventName: "_2GHTaky49GZrPLyiOgKWB7",
        SessionInfo: "Kk38rrvnYm3-E2jJMahSH",
        SessionName: "_2uJvCA4FncHONmSI37VVyw",
        SessionTime: "_2vYmHfXJIHj2eCv8NsiqZv",
        RegisteredUsers: "HLiipgmnfEQ2O-9WritfU",
        CheckedIn: "_17S0ayInAou4_ptPoMguR0",
        DescriptionWrapper: "_17o_wRtaDyujn3Bx4gGiu5",
        Expanded: "mJXTRr0gd2yNafeFp9NOr",
      };
    },
    chunkid: (module, module_exports, __webpack_require__) => {
      "use strict";
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
      "use strict";
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
      "use strict";
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
          this.m_mapBadgeInfo.set(_.badgeid, _),
            this.GetBadgeInfoChangeCallback(_.badgeid).Dispatch(_);
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
          _.Get().GetBadgeInfo(_),
        );
        return (
          (0, _.useEffect)(() => {
            !_ &&
              _ &&
              _.Get()
                .LoadBadgeInfo(_)
                .then((_) => __webpack_require__(_));
          }, [_, _]),
          (0, _._)(_.Get().GetBadgeInfoChangeCallback(_), __webpack_require__),
          _
        );
      }
      function _(_) {
        _.Get().Test_SetBadgeInfo(_);
      }
      function _(_) {
        const [_, __webpack_require__] = (0, _.useState)(
          _.Get().GetInitialBadgeInfo(_),
        );
        return (
          (0, _.useEffect)(() => {
            !_ && _ && _.Get().LoadBadgeInfo(_);
          }, [_, _]),
          (0, _._)(_.Get().GetBadgeInfoChangeCallback(_), () =>
            __webpack_require__(_.Get().GetInitialBadgeInfo(_)),
          ),
          _
        );
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
      "use strict";
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
                !_.smart_section ||
                ("wishlist" != _.smart_section_type &&
                  "wishlist_onsale" != _.smart_section_type)
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
      "use strict";
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
      "use strict";
      __webpack_require__._(module_exports, {
        _: () => _,
        _: () => _,
        _: () => _,
      });
      var _ = __webpack_require__("chunkid"),
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
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid");
      const _ = "nicknames";
      function _(_) {
        const _ = (0, _._)(),
          { data: __webpack_require__, isLoading: _ } = (0, _._)({
            queryKey: [_],
            queryFn: async () => {
              const _ = new Map();
              if (_._.logged_in) {
                const _ = _._.Init(_._),
                  _ = (await _._.GetNicknameList(_, _)).Body().toObject();
                _?.nicknames &&
                  _.nicknames.length > 0 &&
                  _.nicknames.forEach((_) => {
                    _.set(_.accountid, _.nickname);
                  });
              }
              return _;
            },
          });
        return __webpack_require__ ? __webpack_require__.get(_) : null;
      }
      const _ = new (_())(
          (_) =>
            (async function (_) {
              if (!_ || 0 == _.length) return [];
              const _ =
                "community" == (0, _._)()
                  ? _._.COMMUNITY_BASE_URL
                  : _._.STORE_BASE_URL;
              if (1 == _.length) {
                const _ = {
                    accountid: _[0],
                    origin: self.origin,
                  },
                  _ = await _().get(`${_}actions/ajaxgetavatarpersona`, {
                    params: _,
                  });
                if (
                  !_ ||
                  200 != _.status ||
                  1 != _.data?.success ||
                  !_.data?.userinfo
                )
                  throw `Load single avatar/persona failed ${((0, _._))(_).strErrorMsg}`;
                return [_.data.userinfo];
              }
              {
                const _ = {
                    accountids: _.join(","),
                    origin: self.origin,
                  },
                  _ = await _().get(`${_}actions/ajaxgetmultiavatarpersona`, {
                    params: _,
                  });
                if (
                  !_ ||
                  200 != _.status ||
                  1 != _.data?.success ||
                  !_.data?.userinfos
                )
                  throw `Load single avatar/persona failed ${((0, _._))(_).strErrorMsg}`;
                const _ = new Map();
                return (
                  _.data.userinfos.forEach((_) =>
                    _.set(new _._(_.steamid).GetAccountID(), _),
                  ),
                  _.map((_) => _.get(_))
                );
              }
            })(_),
          {
            cache: !1,
          },
        ),
        _ = "avatarandpersonas";
      function _(_) {
        const { data: _, isLoading: __webpack_require__ } = (0, _._)({
          queryKey: [_, _],
          queryFn: () => _.load(_),
        });
        return [_, __webpack_require__];
      }
      function _(_) {
        const _ = (0, _._)(),
          { data: __webpack_require__, isLoading: _ } = (0, _._)({
            queryKey: [_, _],
            queryFn: async () => {
              const _ = await _.loadMany(_);
              return (
                __webpack_require__.forEach((_) => {
                  const _ = [_, new _._(_.steamid).GetAccountID()];
                  _.setQueryData(_, _);
                }),
                _
              );
            },
            enabled: _?.length > 0,
          }),
          _ = (0, _.useMemo)(() => {
            const _ = new Array();
            return (
              __webpack_require__?.forEach((_) => {
                _ instanceof Error || _.push(_);
              }),
              _
            );
          }, [__webpack_require__]);
        return _ ? null : _;
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
          return !!window.opener && this.m_eventModelJson;
        }
        GetEventModel() {
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
        _ = __webpack_require__("chunkid");
      function _(_) {
        const { gidEvent: _ } = _,
          _ = (0, _._)(_),
          [_, _] = (0, _.useMemo)(() => {
            if (
              _?.jsondata?.localized_sale_product_banner?.length > 0 &&
              _?.jsondata?.localized_sale_product_mobile_banner?.length > 0
            ) {
              const _ = (0, _._)(_._.LANGUAGE),
                _ = _._.GetWithFallback(
                  _.jsondata.localized_sale_product_banner,
                  _,
                ),
                _ = _._.GetWithFallback(
                  _.jsondata.localized_sale_product_mobile_banner,
                  _,
                );
              if (_?.length > 0 && _?.length > 0)
                return [
                  _._.GenerateURLFromHashAndExt(_.clanSteamID, _),
                  _._.GenerateURLFromHashAndExt(_.clanSteamID, _),
                ];
            }
            return [null, null];
          }, [_]);
        return _?.length > 0 && _?.length > 0
          ? _.createElement(
              "a",
              {
                href: (0, _._)(__webpack_require__.GetSaleURL()),
                className: _.Link,
              },
              _.createElement("img", {
                src: _,
                className: (0, _._)(_.Banner, _.Big),
              }),
              _.createElement("img", {
                src: _,
                className: (0, _._)(_.Banner, _.Mobile),
              }),
            )
          : null;
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
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid");
      function _(_) {
        const {
            accountID: _,
            bHideWhenNotAvailable: __webpack_require__,
            bHideName: _,
          } = _,
          [_] = (0, _._)(_),
          _ = (0, _._)(_),
          _ = _.useMemo(() => _._.InitFromAccountID(_), [_]),
          _ = `${_._.COMMUNITY_BASE_URL}profiles/${_.ConvertTo64BitString()}`;
        return _.createElement(
          _.Fragment,
          null,
          Boolean(!_)
            ? _.createElement(
                _.Fragment,
                null,
                Boolean(!__webpack_require__) &&
                  _.createElement("span", null, _),
              )
            : _.createElement(
                "a",
                {
                  href: _,
                },
                _.createElement("img", {
                  className: _.SmallAvatar,
                  src: _.avatar_url,
                  "data-miniprofile": "s" + _.ConvertTo64BitString(),
                }),
                Boolean(!_) &&
                  _.createElement(
                    "span",
                    null,
                    _ ? `${_} (${_.persona_name})` : _.persona_name,
                  ),
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
            title: _,
            tooltip: __webpack_require__,
            getMinimized: _,
            toggleMinimized: _,
            className: _,
            children: _,
            elAdditionalButtons: _,
          } = _,
          _ = (0, _._)(() => _());
        return _.createElement(
          _.Fragment,
          null,
          _.createElement(
            "div",
            {
              className: (0, _._)(
                _,
                _.SectionTitleHeader,
                _.required_title,
                "SectionTitleHeader",
              ),
            },
            _.createElement(
              "div",
              {
                className: (0, _._)(
                  _.CollapsableSectionTitle,
                  "EventEditorTextTitle",
                ),
              },
              _,
              Boolean(__webpack_require__) &&
                _.createElement(_._, {
                  tooltip: __webpack_require__,
                }),
            ),
            _.createElement(
              "div",
              {
                className: _.SectionTitleButtons,
              },
              _,
              _.createElement(_, {
                bIsMinimized: _,
                fnToggleMinimize: _,
              }),
            ),
          ),
          !_ && _.createElement(_._, null, _),
        );
      }
      function _(_) {
        const [_, __webpack_require__] = _.useState(Boolean(_.bStartMinimized));
        return _.createElement(
          _,
          {
            ..._,
            getMinimized: () => _,
            toggleMinimized: () => __webpack_require__(!_),
          },
          _.children,
        );
      }
      function _(_) {
        const { bIsMinimized: _, fnToggleMinimize: __webpack_require__ } = _,
          _ = _ ? "#Section_Maximize_Tooltip" : "#Section_Minimize_Tooltip";
        return _.createElement(
          _._,
          {
            "data-tooltip-text": (0, _._)(_),
            onClick: __webpack_require__,
          },
          _.bIsMinimized
            ? _.createElement(_.hz4, null)
            : _.createElement(_.Xjb, null),
        );
      }
    },
    chunkid: (module, module_exports, __webpack_require__) => {
      "use strict";
      __webpack_require__._(module_exports),
        __webpack_require__._(module_exports, {
          MeetSteamRoutes: () => _,
          default: () => _,
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
        _ = __webpack_require__("chunkid");
      function _(_) {
        const { gid: _ } = (0, _._)(),
          [__webpack_require__, _] = (0, _.useState)(!0);
        if (
          (_.useEffect(() => {
            __webpack_require__ &&
              (_._.Init(), Promise.all([_._.InitGlobal()]).then(() => _(!1)));
          }, [__webpack_require__]),
          __webpack_require__)
        )
          return _.createElement(_._, {
            string: (0, _._)("#Loading"),
            position: "center",
          });
        const _ = _._.GetClanEventModel(_);
        return _
          ? _.createElement(
              _._,
              null,
              !_.BIsUnlistedEvent() &&
                _.createElement(
                  "div",
                  null,
                  "NOTE: Event needs to be published in unlisted mode for Steam partners to see it. Admin account bypass this check",
                ),
              _.createElement(_._, {
                lang: (0, _._)(_._.LANGUAGE),
                event: _,
                adminPanel:
                  _._.EREALM === _._.k_ESteamRealmChina
                    ? _.createElement(_._, {
                        eventModel: _,
                      })
                    : _.createElement(_._, {
                        eventModel: _,
                        bSupportsSticky: !0,
                      }),
              }),
            )
          : null;
      }
      var _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__._(_),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid");
      function _(_, _, _) {
        for (const _ of _)
          if (_.group_id === _) {
            const _ = _.sessions.find((_) => _._ === _);
            if (_)
              return {
                group: _,
                session: _,
              };
          }
        return {
          group: null,
          session: null,
        };
      }
      function _(_, _) {
        const _ = (0, _._)(),
          [_] = (0, _.useState)(() =>
            (0, _._)("registrations", "application_config")
              .map((_) => ((_.userReg = JSON.parse(_.jsondata)), _))
              .sort((_, _) => {
                const _ = _(
                    _.jsondata.meet_steam_groups,
                    _.group_id,
                    _.session_id,
                  ),
                  _ = _(_.jsondata.meet_steam_groups, _.group_id, _.session_id);
                return (
                  (_?.session?.rtime_start || 0) -
                  (_?.session?.rtime_start || 0)
                );
              })
              .map((_) => {
                const _ = _(
                  _.jsondata.meet_steam_groups,
                  _.group_id,
                  _.session_id,
                );
                return (
                  (_.relativeToToday = (function (_, _) {
                    if (!_) return "past";
                    const { sDisplayTimeZone: _, rtime_start: _ } = (0, _._)(_),
                      _ = (0, _._)(_, _),
                      _ = void 0 !== _ ? new Date(1e3 * _) : new Date(),
                      _ = new Date(_.getFullYear(), _.getMonth(), _.getDate()),
                      _ = new Date(
                        _.getFullYear(),
                        _.getMonth(),
                        _.getDate() + 1,
                      );
                    return _ >= _ && _ < _
                      ? "today"
                      : _ < _
                        ? "past"
                        : "future";
                  })(_?.session, _)),
                  (_.rtSesssionTime = _.session.rtime_start),
                  _
                );
              }),
          ),
          _ = _?.trim().toLowerCase() || "";
        return (0, _.useMemo)(
          () =>
            _.filter(
              (_) =>
                !_.length ||
                _.userReg.name?.toLowerCase().includes(_) ||
                _.userReg.company?.toLowerCase().includes(_) ||
                _.userReg.guest_names?.find((_) =>
                  _.toLowerCase().includes(_),
                ) ||
                _.userReg.email_override?.toLowerCase().includes(_),
            ),
          [_, _],
        );
      }
      function _(_, _) {
        return (0, _.useMemo)(
          () =>
            _.reduce(
              (_, _) => (
                _[_.relativeToToday] || (_[_.relativeToToday] = []),
                _[_.relativeToToday].push(_),
                _
              ),
              {
                today: [],
                past: [],
                future: [],
              },
            ),
          [_, _],
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
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__._(_);
      function _(_) {
        const [_] = (0, _._)("gid"),
          _ = (0, _._)(_),
          _ = (0, _._)(_._.LANGUAGE);
        return _
          ? _.createElement(
              "div",
              {
                className: _().Ctn,
              },
              _.createElement(
                "div",
                {
                  className: _().EventName,
                },
                _.createElement(
                  "h2",
                  null,
                  __webpack_require__.GetNameWithFallback(_),
                ),
                _.createElement(
                  "a",
                  {
                    href: `${_._.STORE_BASE_URL}meetsteam/${_}`,
                    target: "_blank",
                  },
                  "See Event Details",
                ),
              ),
              _.createElement(_, {
                eventModel: _,
              }),
            )
          : _.createElement(_._, {
              string: (0, _._)("#Loading"),
            });
      }
      function _(_) {
        const { eventModel: _ } = _,
          _ = _(_(_)),
          [_] = (0, _._)("accountid"),
          _ = (0, _._)();
        return _.createElement(
          "div",
          null,
          _.createElement(
            "div",
            {
              className: _().User,
            },
            _.createElement(_._, {
              accountID: _,
            }),
          ),
          _.createElement(_, {
            eventModel: _,
            rgUserRegs: _.today,
            strTitle: "Today " + (0, _._)(_),
          }),
          _.createElement(_, {
            eventModel: _,
            rgUserRegs: _.future,
            bHideIfEmpty: !0,
            strTitle: "Future",
          }),
          _.createElement(_, {
            eventModel: _,
            rgUserRegs: _.past,
            bHideIfEmpty: !0,
            strTitle: "Past",
          }),
        );
      }
      function _(_) {
        const {
          eventModel: _,
          rgUserRegs: __webpack_require__,
          bHideIfEmpty: _,
          strTitle: _,
        } = _;
        return 0 == __webpack_require__.length && _
          ? null
          : _.createElement(
              _._,
              {
                title: `${_} (${__webpack_require__.length})`,
                bStartMinimized: _,
              },
              Boolean(!__webpack_require__ || 0 == __webpack_require__.length)
                ? _.createElement("div", null, _ ? "" : "No registrations")
                : _.createElement(
                    "div",
                    null,
                    __webpack_require__
                      .sort((_, _) => _.rtSesssionTime - _.rtSesssionTime)
                      .map((_) =>
                        _.createElement(_, {
                          key: `${_.group_id}_${_.session_id}`,
                          eventModel: _,
                          reg: _,
                        }),
                      ),
                  ),
            );
      }
      function _(_) {
        const { desc: _ } = _,
          [__webpack_require__, _] = (0, _.useState)(!1),
          _ = (0, _.useCallback)(() => _((_) => !_), []);
        return _.createElement(
          "div",
          {
            className: (0, _._)({
              [_().DescriptionWrapper]: !0,
              [_().Expanded]: __webpack_require__,
            }),
            onClick: _,
            onMouseEnter: () => _(!0),
            onMouseLeave: () => _(!1),
          },
          _,
        );
      }
      function _(_) {
        const { reg: _, eventModel: __webpack_require__ } = _,
          [_] = (0, _._)("accountid"),
          [_] = (0, _._)(_),
          [_, _] = (0, _.useState)([]),
          [_, _] = (0, _.useState)(!1),
          _ = _.userReg,
          { group: _, session: _ } = _(
            __webpack_require__.jsondata.meet_steam_groups,
            _.group_id,
            _.session_id,
          ),
          [_, _, _] = (0, _._)(),
          _ =
            ((_ = __webpack_require__.GID),
            (_ = _),
            (_ = _.group_id),
            (_ = _.session_id),
            (0, _._)({
              mutationFn: async ({ rgGuests: _ }) => {
                const _ = new FormData();
                _.append("sessionid", _._.SESSIONID),
                  _.append("gid", _),
                  _.append("accountid", "" + _),
                  _.append("meetsteam_group_id", "" + _),
                  _.append("meetsteam_session_id", "" + _),
                  _?.length && _.append("guests", _.join("|"));
                const _ = `${_._.STORE_BASE_URL}meetsteam/ajaxupdateattendance`,
                  _ = await _().post(_, _, {
                    withCredentials: !0,
                  });
                return 1 == _?.data?.success;
              },
            }));
        var _, _, _, _;
        return _.createElement(
          "div",
          null,
          _.createElement(_, {
            group: _,
            session: _,
          }),
          Boolean(_)
            ? _.createElement(
                "div",
                {
                  className: _().CheckedIn,
                },
                "Attendee has been checked in",
              )
            : _.createElement(
                "div",
                {
                  className: _().RegisteredUsers,
                },
                _.createElement(_._, {
                  label: "Attendee: " + _.name || 0,
                  checked: Boolean(_),
                  onChange: (_) => {},
                }),
                Boolean(_.guest_names?.length > 0) &&
                  _.createElement(
                    _.Fragment,
                    null,
                    _.guest_names.map((_) =>
                      _.createElement(_._, {
                        key: _.group_id + "_" + _.session_id + "_" + _,
                        label: "Guest Name: " + _,
                        checked: _.includes(_),
                        onChange: (_) => {
                          _((_) =>
                            _
                              ? __webpack_require__.includes(_)
                                ? _
                                : [..._, _]
                              : __webpack_require__.filter((_) => _ !== _),
                          );
                        },
                      }),
                    ),
                  ),
                _.createElement(
                  _._,
                  {
                    onClick: _,
                  },
                  "Check in selected people",
                ),
              ),
          _.createElement(
            _._,
            {
              active: _,
            },
            _.createElement(
              _._,
              null,
              _.createElement(_, {
                closeModal: _,
                rgGuestsAttending: _,
                fnMarkAttendance: _,
                fnOnSuccess: () => _(!0),
              }),
            ),
          ),
        );
      }
      function _(_) {
        const {
            closeModal: _,
            rgGuestsAttending: __webpack_require__,
            fnMarkAttendance: _,
            fnOnSuccess: _,
          } = _,
          _ = (0, _._)();
        return _.bLoading
          ? _.createElement(_._, {
              state: _,
              strDialogTitle: (0, _._)("#Saving"),
              closeModal: _,
            })
          : _.createElement(
              _._,
              {
                onCancel: _,
                strTitle: (0, _._)("#Button_Submit"),
                bAllowFullSize: !0,
                onOK: async () => {
                  _.fnSetLoading(!0),
                    _.mutateAsync({
                      rgGuests: __webpack_require__,
                    })
                      .then((_) => {
                        _
                          ? (_(),
                            _.fnSetStrSuccess(
                              "Success! This person has been checked in.",
                            ))
                          : _.fnSetStrError(
                              (0, _._)("#Login_Error_Network_Description"),
                            );
                      })
                      .catch(() =>
                        _.fnSetStrError(
                          (0, _._)("#Login_Error_Network_Description"),
                        ),
                      );
                },
              },
              "Mark as checked in?",
            );
      }
      function _(_) {
        const { session: _, group: __webpack_require__ } = _;
        return _ && __webpack_require__
          ? _.createElement(
              "div",
              {
                className: _().SessionInfo,
              },
              _.createElement(
                "div",
                {
                  className: _().SessionName,
                },
                __webpack_require__.localized_session_title[0],
              ),
              _.createElement(
                "div",
                {
                  className: _().SessionTime,
                },
                (0, _._)(_.rtime_start, !1, !0),
                " @",
                _.createElement(
                  "b",
                  null,
                  (0, _._)(_.rtime_start, _.rtime_end, !0),
                ),
              ),
              _.createElement(
                "div",
                null,
                _.createElement(_, {
                  desc: `Description: ${__webpack_require__.localized_session_description[0] || ""}`,
                }),
              ),
              "dev" == _._.WEB_UNIVERSE &&
                _.createElement(
                  "div",
                  null,
                  "Rtime Start (Dev only): ",
                  _.rtime_start,
                ),
            )
          : _.createElement("div", null, "Session Infomrmation Missing");
      }
      var _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__._(_),
        _ = __webpack_require__("chunkid");
      function _(_) {
        const [_] = (0, _._)("gid"),
          _ = (0, _._)(_),
          _ = (0, _._)(_._.LANGUAGE),
          [_, _] = (0, _.useState)("");
        return _
          ? _.createElement(
              "div",
              {
                className: _().Ctn,
              },
              _.createElement(
                "div",
                {
                  className: _().EventName,
                },
                _.createElement(
                  "h1",
                  null,
                  __webpack_require__.GetNameWithFallback(_),
                ),
                _.createElement(
                  "a",
                  {
                    href: `${_._.STORE_BASE_URL}meetsteam/${_}`,
                    target: "_blank",
                  },
                  "See Event Details",
                ),
              ),
              _.createElement(_, {
                eventModel: _,
              }),
              _.createElement(
                "div",
                {
                  className: _().AtendeeSearchRow,
                },
                _.createElement(_._, {
                  type: "text",
                  label: "Search for an attendee",
                  value: _,
                  onChange: (_) => _(_.currentTarget.value || ""),
                  placeholder: "Type name or partner or email address",
                }),
              ),
              _.createElement(_, {
                eventModel: _,
                strSearch: _.toLowerCase(),
              }),
            )
          : _.createElement(_._, {
              string: (0, _._)("#Loading"),
            });
      }
      function _(_) {
        const { eventModel: _, strSearch: __webpack_require__ } = _,
          _ = _(_, __webpack_require__),
          [_, _] = (0, _.useState)(null),
          [_, _] = (0, _.useMemo)(() => {
            const _ = new Map();
            return (
              _.forEach((_) => {
                [_.userReg.name, ...(_.userReg.guest_names || [])].forEach(
                  (_) => {
                    const _ = __webpack_require__.toLowerCase();
                    _.has(_) ? _.get(_).push(_) : _.set(_, [_]);
                  },
                );
              }),
              [_, Array.from(_.keys()).sort()]
            );
          }, [_]);
        return _.createElement(
          "div",
          null,
          _.createElement("h3", null, "Attendees"),
          Boolean(_)
            ? _.createElement(_, {
                eventModel: _,
                rgSelected: _,
                strSearch: __webpack_require__,
                onCleanSelection: () => _(null),
              })
            : _.createElement(
                _.Fragment,
                null,
                _.filter(
                  (_) =>
                    !__webpack_require__ || _.includes(__webpack_require__),
                ).map((_) =>
                  _.createElement(
                    "div",
                    {
                      key: _,
                      className: _().AttendeeRow,
                    },
                    _.createElement(
                      _._,
                      {
                        onClick: () => {
                          _(_.get(_.toLowerCase()));
                        },
                      },
                      _,
                    ),
                  ),
                ),
              ),
        );
      }
      function _(_) {
        const {
            eventModel: _,
            rgSelected: __webpack_require__,
            strSearch: _,
            onCleanSelection: _,
          } = _,
          _ = (0, _._)(),
          _ = _(__webpack_require__, _);
        return _.createElement(
          "div",
          null,
          _.createElement(
            _._,
            {
              onClick: _,
            },
            "Clear Selection",
          ),
          _.createElement(_, {
            eventModel: _,
            rgUserRegs: _.today,
            strTitle: "Today " + (0, _._)(_),
          }),
          _.createElement(_, {
            eventModel: _,
            rgUserRegs: _.future,
            bHideIfEmpty: !0,
            strTitle: "Future",
          }),
          _.createElement(_, {
            eventModel: _,
            rgUserRegs: _.past,
            bHideIfEmpty: !0,
            strTitle: "Past",
          }),
        );
      }
      function _(_) {
        const { eventModel: _ } = _,
          _ = (0, _._)(),
          _ = _.useMemo(
            () =>
              _?.jsondata?.meet_steam_groups?.flatMap((_) =>
                _.sessions.map((_) => {
                  const { sDisplayTimeZone: _, rtime_start: _ } = (0, _._)(_),
                    _ = (0, _._)(_, _);
                  return {
                    group: _,
                    session: _,
                    displayDate: _,
                  };
                }),
              ),
            [_?.jsondata?.meet_steam_groups],
          ),
          _ = _?.reduce(
            (_, _) => (null == _ || _.displayDate < _ ? _.displayDate : _),
            void 0,
          ),
          _ = _.some((_) => (0, _._)(_, _.displayDate)),
          _ = _.useMemo(
            () => _?.filter((_) => (0, _._)(_ ? _ : _, _.displayDate)),
            [_, _, _, _],
          );
        if (_ && 0 != _.length)
          return _.createElement(
            "div",
            {
              className: _().DisplaySessionCtn,
            },
            _.createElement(
              "div",
              {
                className: _().DisplaySessionTitle,
              },
              _ ? "Today's Sessions" : "Upcoming Sessions",
            ),
            _.createElement(
              "div",
              {
                className: _().DisplaySessionRow,
              },
              _.map((_) =>
                _.createElement(_, {
                  key: `${_.group.group_id}_${_.session._}`,
                  group: _.group,
                  session: _.session,
                }),
              ),
            ),
          );
      }
      function _(_) {
        const { group: _, session: __webpack_require__ } = _,
          _ = (0, _._)(_._.LANGUAGE),
          { sDisplayTimeZone: _, rtime_start: _ } = (0, _._)(
            __webpack_require__,
          ),
          _ = (0, _._)(_, _);
        return _.createElement(
          "div",
          {
            className: _().DisplaySession,
          },
          _.createElement(
            "div",
            {
              className: _().DisplaySessionTitle,
            },
            _.localized_session_title[_] ?? _.localized_session_title[0],
          ),
          _.createElement(
            "div",
            {
              className: _().DisplaySessionTime,
            },
            _,
          ),
        );
      }
      const _ = {
        MeetSteamAttendance: () => `${_._.MeetSteamRoute()}attendance`,
        MeetSteamEvent: () => `${_._.MeetSteamRoute()}:gid(\\d+)`,
        MeetSteamAttendeeList: () => `${_._.MeetSteamRoute()}attendeelist`,
      };
      function _(_) {
        return _.createElement(
          _._,
          null,
          _.createElement(_._, {
            path: _.MeetSteamAttendance(),
            render: (_) =>
              _.createElement(_, {
                ..._,
              }),
          }),
          _.createElement(_._, {
            path: _.MeetSteamAttendeeList(),
            render: (_) =>
              _.createElement(_, {
                ..._,
              }),
          }),
          _.createElement(_._, {
            path: _.MeetSteamEvent(),
            render: (_) =>
              _.createElement(_, {
                ..._,
              }),
          }),
          _.createElement(_._, null, _.createElement(_._, null)),
        );
      }
    },
  },
]);
