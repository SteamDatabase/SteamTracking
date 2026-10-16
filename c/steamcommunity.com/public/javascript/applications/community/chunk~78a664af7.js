(() => {
  (self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
    [78010],
    {
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
          _ = __webpack_require__._(_),
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
        function _(_) {
          return "unknown EHelpRequestType ( " + _ + " )";
        }
        function _(_) {
          return "unknown EHelpRequestState ( " + _ + " )";
        }
        function _(_) {
          return "unknown EHelpRequestReviewState ( " + _ + " )";
        }
        function _(_) {
          return "unknown EHelpRequestStatsRollupInterval ( " + _ + " )";
        }
        function _(_) {
          return "unknown EHelpRequestStatsResponderType ( " + _ + " )";
        }
        function _(_) {
          return "unknown EHelpIssue ( " + _ + " )";
        }
        function _(_) {
          return "unknown EHelpRequestEscalationLevel ( " + _ + " )";
        }
        function _(_) {
          return "unknown EHelpRequestMsgType ( " + _ + " )";
        }
        function _(_) {
          return "unknown EHelpRequestAction ( " + _ + " )";
        }
        function _(_) {
          return "unknown EHelpRequestSortOrder ( " + _ + " )";
        }
        function _(_) {
          return "unknown EHelpRequestPOPType ( " + _ + " )";
        }
        function _(_) {
          return "unknown EAnnouncementPlacement ( " + _ + " )";
        }
        function _(_) {
          return "unknown ETickerCategoryLanguageRule ( " + _ + " )";
        }
        function _(_) {
          return "unknown EPreapprovalResolution ( " + _ + " )";
        }
        function _(_) {
          return "unknown EHelpRequestFeedbackCategory ( " + _ + " )";
        }
        function _(_) {
          return "unknown EHelpRequestFeedbackTargetType ( " + _ + " )";
        }
        function _(_) {
          return "unknown EFeedbackState ( " + _ + " )";
        }
        function _(_) {
          return "unknown ESupportActionSource ( " + _ + " )";
        }
        function _(_) {
          return "unknown ERefundSupportAction ( " + _ + " )";
        }
        const _ = class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.quicktext_id || _._(_._()),
              _.Message.initialize(this, _, 0, -1, [6, 10, 11], null);
          }
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    quicktext_id: {
                      _: 1,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    requires_update: {
                      _: 2,
                      _: _._.readBool,
                      _: _._.writeBool,
                    },
                    title: {
                      _: 3,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    hidden: {
                      _: 4,
                      _: _._.readBool,
                      _: _._.writeBool,
                    },
                    approved: {
                      _: 5,
                      _: _._.readBool,
                      _: _._.writeBool,
                    },
                    help_request_types: {
                      _: 6,
                      _: !0,
                      _: !0,
                      _: _._.readUint32,
                      pbr: _._.readPackedUint32,
                      _: _._.writeRepeatedUint32,
                    },
                    content: {
                      _: 7,
                      _: _,
                    },
                    button_text: {
                      _: 8,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    replacement: {
                      _: 9,
                      _: _._.readBool,
                      _: _._.writeBool,
                    },
                    payment_methods: {
                      _: 10,
                      _: !0,
                      _: !0,
                      _: _._.readUint32,
                      pbr: _._.readPackedUint32,
                      _: _._.writeRepeatedUint32,
                    },
                    appids: {
                      _: 11,
                      _: !0,
                      _: !0,
                      _: _._.readUint32,
                      pbr: _._.readPackedUint32,
                      _: _._.writeRepeatedUint32,
                    },
                    escalation_level: {
                      _: 12,
                      _: _._.readEnum,
                      _: _._.writeEnum,
                    },
                    partner_only: {
                      _: 13,
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
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CSupportData_QuickText";
          }
        };
        _(_, "sm_m"), _(_, "sm_mbf");
        let _ = _;
        const _ = class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.content || _._(_._()),
              _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    content: {
                      _: 1,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    major_revision: {
                      _: 2,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    minor_revision: {
                      _: 3,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    author: {
                      _: 4,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    last_update: {
                      _: 5,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    language: {
                      _: 6,
                      _: _._.readInt32,
                      _: _._.writeInt32,
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
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CSupportData_QuickTextContent";
          }
        };
        _(_, "sm_m"), _(_, "sm_mbf");
        let _ = _;
        const _ = class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.quicktext_id || _._(_._()),
              _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    quicktext_id: {
                      _: 1,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    language: {
                      _: 2,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    from_sql: {
                      _: 3,
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
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CSupportAgents_GetQuickText_Request";
          }
        };
        _(_, "sm_m"), _(_, "sm_mbf");
        let _ = _;
        const _ = class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.quicktext || _._(_._()),
              _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    quicktext: {
                      _: 1,
                      _: _,
                    },
                    english_reference: {
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
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CSupportAgents_GetQuickText_Response";
          }
        };
        _(_, "sm_m"), _(_, "sm_mbf");
        let _ = _;
        const _ = class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.appid || _._(_._()),
              _.Message.initialize(this, _, 0, -1, void 0, null);
          }
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
                    log_type: {
                      _: 2,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    version_string: {
                      _: 3,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    log_contents: {
                      _: 4,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    request_id: {
                      _: 5,
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
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CHelpRequestLogs_UploadUserApplicationLog_Request";
          }
        };
        _(_, "sm_m"), _(_, "sm_mbf");
        let _ = _;
        const _ = class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype._ || _._(_._()),
              _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    _: {
                      _: 1,
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
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CHelpRequestLogs_UploadUserApplicationLog_Response";
          }
        };
        _(_, "sm_m"), _(_, "sm_mbf");
        let _ = _;
        const _ = class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.appid || _._(_._()),
              _.Message.initialize(this, _, 0, -1, void 0, null);
          }
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
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CHelpRequestLogs_GetApplicationLogDemand_Request";
          }
        };
        _(_, "sm_m"), _(_, "sm_mbf");
        let _ = _;
        const _ = class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.request_id || _._(_._()),
              _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    request_id: {
                      _: 1,
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
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CHelpRequestLogs_GetApplicationLogDemand_Response";
          }
        };
        _(_, "sm_m"), _(_, "sm_mbf");
        let _ = _;
        var _;
        ((_) => {
          function _(_, _, _) {
            return _.SendMsg(
              "SupportAgents.GetQuickText#1",
              (0, _._)(_, _, _),
              _,
              {
                bConstMethod: !0,
                ePrivilege: 5,
              },
            );
          }
          _.GetQuickText = _;
        })(_ || (_ = {}));
        var _;
        ((_) => {
          function _(_, _, _) {
            return _.SendMsg(
              "HelpRequestLogs.UploadUserApplicationLog#1",
              (0, _._)(_, _, _),
              _,
              {
                ePrivilege: 1,
              },
            );
          }
          _.UploadUserApplicationLog = _;
          function _(_, _, _) {
            return _.SendMsg(
              "HelpRequestLogs.GetApplicationLogDemand#1",
              (0, _._)(_, _, _),
              _,
              {
                ePrivilege: 1,
              },
            );
          }
          _.GetApplicationLogDemand = _;
        })(_ || (_ = {}));
        var _ = __webpack_require__("chunkid"),
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
        const _ = {
          [_._]: [_._, _._, _._, _._, _._],
          [_._]: [_._, _._, _._, _._, _._],
        };
        function _(_) {
          var _;
          const [_, _] = (0, _.useState)(null),
            [_, _] = (0, _.useState)("main"),
            [_, _] = (0, _.useState)(!1),
            [_, _] = (0, _.useState)(!1),
            [_, _] = (0, _.useState)(null),
            [_, _] = (0, _.useState)(null),
            [_, _] = (0, _.useState)(null),
            [_, _] = (0, _.useState)(!1),
            [_, _] = (0, _.useState)(!1),
            [_, _] = (0, _.useState)(_._),
            [_, _] = (0, _.useState)(""),
            _ =
              _.rtContentCreatedAt !== void 0
                ? (Date.now() / 1e3 - _.rtContentCreatedAt) / (30 * 86400)
                : !1,
            _ =
              (_ = _.subject.subject_type
                ? _[_.subject.subject_type]
                : void 0) != null
                ? _
                : [],
            _ = _ || _ || _ || _ || _ || _ || _,
            _ = _(_.authorSteamID);
          let _ = _.Bhc;
          if (_.isSuccess) {
            const _ = _.data;
            _.pref_primary_language !== void 0 && _.pref_primary_language !== -1
              ? (_ = _.pref_primary_language)
              : _.last_logon_langauge !== void 0 &&
                _.last_logon_langauge !== -1 &&
                (_ = _.last_logon_langauge);
          }
          const _ = (0, _._)(_),
            _ = _(_, _);
          (0, _.useEffect)(() => {
            var _, _, _, _, _, _, _;
            _(
              (_ =
                (_ =
                  (_ =
                    (_ = (_ = _.data) == null ? void 0 : _.quicktext) == null
                      ? void 0
                      : _.content) == null
                    ? void 0
                    : _.content) != null
                  ? _
                  : (_ = (_ = _.data) == null ? void 0 : _.english_reference) ==
                      null
                    ? void 0
                    : _.content) != null
                ? _
                : "",
            );
          }, [_.data, _.data]);
          const _ = !1,
            _ = !1,
            _ = !1,
            _ = async () => {
              (0, _._)(_ !== null, "eReason must be non-null to sanction");
              const _ = [];
              _ &&
                _.push({
                  sanction: _._,
                }),
                _ &&
                  _.push({
                    sanction: _._,
                  }),
                _ &&
                  _.push({
                    sanction: _._,
                    days: _,
                  }),
                _ &&
                  _.push({
                    sanction: _._,
                    days: _,
                  }),
                _ &&
                  _.push({
                    sanction: _._,
                    days: _,
                  }),
                _ &&
                  _.push({
                    sanction: _._,
                    days: -1,
                  }),
                _ &&
                  _.push({
                    sanction: _._,
                  }),
                _ === _._
                  ? _.push({
                      sanction: _._,
                      escalate_to: _._,
                    })
                  : _ === _._ &&
                    _.push({
                      sanction: _._,
                      escalate_to: _._,
                    }),
                await _.sanctionMutation.mutateAsync({
                  sanctions: _,
                  message: _.trim(),
                  reason: _,
                }),
                _.onSanction();
            },
            _ = (_) => {
              _(_), _("main");
            },
            _ = (_) => {
              _ ? (_(!0), _(7), _(_._)) : (_(!1), _(-1));
            };
          return (0, _.jsxs)(_.Fragment, {
            children: [
              _ === "reason" &&
                (0, _.jsx)(_._, {
                  reasons: _._,
                  onSelect: _,
                }),
              _ === "main" &&
                (0, _.jsxs)(_._, {
                  children: [
                    (0, _.jsxs)(_._, {
                      className: _().SanctionForm,
                      children: [
                        _.sanctionMutation.isError &&
                          (0, _.jsxs)("div", {
                            className: (0, _._)(
                              _().OneColumn,
                              _().ErrorMessage,
                            ),
                            children: [
                              (0, _.jsx)(_.Q9b, {}),
                              " Error: ",
                              _.sanctionMutation.error.message,
                            ],
                          }),
                        (0, _.jsx)("label", {
                          htmlFor: "reason",
                          children: "Reason:",
                        }),
                        (0, _.jsx)("button", {
                          _: "reason",
                          className: _().ClickableText,
                          onClick: () => _("reason"),
                          children:
                            _ === null
                              ? _._.Localize(
                                  "#commentsanctiondialog_selectreason",
                                )
                              : (0, _._)(_),
                        }),
                        _.length > 0 &&
                          (0, _.jsx)("div", {
                            className: _().QuickReasons,
                            children: _.map((_) =>
                              (0, _.jsx)(
                                _._,
                                {
                                  onClick: () => _(_ === _ ? null : _),
                                  size: "1",
                                  variant: _ === _ ? "basic" : "dark",
                                  children: (0, _._)(_),
                                },
                                _,
                              ),
                            ),
                          }),
                        (0, _.jsxs)("label", {
                          className: _().OneColumn,
                          children: [
                            (0, _.jsx)("input", {
                              type: "checkbox",
                              checked: _,
                              onChange: (_) => _(_.target.checked),
                            }),
                            " Delete",
                          ],
                        }),
                        (0, _.jsxs)("label", {
                          className: _().OneColumn,
                          children: [
                            (0, _.jsx)("input", {
                              type: "checkbox",
                              checked: _,
                              onChange: (_) => _(_.target.checked),
                            }),
                            " Issue Warning",
                          ],
                        }),
                        _ &&
                          !!_ &&
                          (0, _.jsxs)("div", {
                            className: (0, _._)(
                              _().OneColumn,
                              _().ErrorMessage,
                            ),
                            children: [
                              (0, _.jsx)(_.Q9b, {}),
                              " Content is older than 30 days. Are you sure you want to ban?",
                            ],
                          }),
                        _.clanSteamID &&
                          (0, _.jsxs)(_.Fragment, {
                            children: [
                              (0, _.jsx)("label", {
                                htmlFor: "hubban",
                                children: "Ban from hub:",
                              }),
                              !_ &&
                                (0, _.jsxs)("select", {
                                  _: "hubban",
                                  onChange: (_) =>
                                    _(
                                      _.target.value === "0"
                                        ? null
                                        : parseInt(_.target.value),
                                    ),
                                  value: _ != null ? _ : 0,
                                  children: [
                                    (0, _.jsx)("option", {
                                      value: "0",
                                      children: "Do not ban",
                                    }),
                                    (0, _.jsx)("option", {
                                      value: "1",
                                      children: "1 day",
                                    }),
                                    (0, _.jsx)("option", {
                                      value: "3",
                                      children: "3 days",
                                    }),
                                    (0, _.jsx)("option", {
                                      value: "7",
                                      children: "7 days",
                                    }),
                                    (0, _.jsx)("option", {
                                      value: "14",
                                      children: "14 days",
                                    }),
                                    (0, _.jsx)("option", {
                                      value: "30",
                                      children: "30 days",
                                    }),
                                    (0, _.jsx)("option", {
                                      value: "90",
                                      children: "3 months",
                                    }),
                                    (0, _.jsx)("option", {
                                      value: "365",
                                      children: "1 year",
                                    }),
                                    (0, _.jsx)("option", {
                                      value: "-1",
                                      children: "Permanent",
                                    }),
                                  ],
                                }),
                              _ &&
                                (0, _.jsx)("div", {
                                  _: "hubban",
                                  children: "Already banned from hub",
                                }),
                            ],
                          }),
                        _ &&
                          !!_ &&
                          (0, _.jsxs)("div", {
                            className: (0, _._)(
                              _().OneColumn,
                              _().ErrorMessage,
                            ),
                            children: [
                              (0, _.jsx)(_.Q9b, {}),
                              " Content is older than 30 days. Are you sure you want to ban?",
                            ],
                          }),
                        (0, _.jsx)("label", {
                          htmlFor: "communityban",
                          children: "Ban from community:",
                        }),
                        !_ &&
                          (0, _.jsxs)("select", {
                            _: "communityban",
                            onChange: (_) =>
                              _(
                                _.target.value === "0"
                                  ? null
                                  : parseInt(_.target.value),
                              ),
                            value: _ != null ? _ : 0,
                            children: [
                              (0, _.jsx)("option", {
                                value: "0",
                                children: "Do not ban",
                              }),
                              (0, _.jsx)("option", {
                                value: "1",
                                children: "1 day",
                              }),
                              (0, _.jsx)("option", {
                                value: "3",
                                children: "3 days",
                              }),
                              (0, _.jsx)("option", {
                                value: "7",
                                children: "7 days",
                              }),
                              (0, _.jsx)("option", {
                                value: "14",
                                children: "14 days",
                              }),
                              (0, _.jsx)("option", {
                                value: "30",
                                children: "30 days",
                              }),
                              (0, _.jsx)("option", {
                                value: "90",
                                children: "3 months",
                              }),
                              (0, _.jsx)("option", {
                                value: "365",
                                children: "1 year",
                              }),
                              (0, _.jsx)("option", {
                                value: "-1",
                                children: "Permanent",
                              }),
                            ],
                          }),
                        _ &&
                          (0, _.jsx)("div", {
                            _: "communityban",
                            children: "Already community banned.",
                          }),
                        (0, _.jsx)("label", {
                          htmlFor: "deletecomments",
                          children: "Delete comments since:",
                        }),
                        (0, _.jsxs)("select", {
                          _: "deletecomments",
                          disabled: _,
                          onChange: (_) =>
                            _(
                              _.target.value === "-1"
                                ? null
                                : parseInt(_.target.value),
                            ),
                          value: _ != null ? _ : -1,
                          children: [
                            (0, _.jsx)("option", {
                              value: "-1",
                              children: "Do not delete",
                            }),
                            (0, _.jsx)("option", {
                              value: "1",
                              children: "1 day",
                            }),
                            (0, _.jsx)("option", {
                              value: "7",
                              children: "7 days",
                            }),
                            (0, _.jsx)("option", {
                              value: "14",
                              children: "14 days",
                            }),
                            (0, _.jsx)("option", {
                              value: "30",
                              children: "30 days",
                            }),
                            (0, _.jsx)("option", {
                              value: "0",
                              children: "All comments",
                            }),
                          ],
                        }),
                        !_ &&
                          (0, _.jsxs)("span", {
                            className: _().OneColumn,
                            children: [
                              (0, _.jsx)("input", {
                                type: "checkbox",
                                checked: _,
                                onChange: (_) => _(_.target.checked),
                              }),
                              "\xA0Permanent trade ban",
                            ],
                          }),
                        _ &&
                          (0, _.jsx)("div", {
                            children: "Already trade banned.",
                          }),
                        (0, _.jsxs)("span", {
                          className: _().OneColumn,
                          children: [
                            (0, _.jsx)("input", {
                              type: "checkbox",
                              checked: _,
                              onChange: (_) => _(_.target.checked),
                            }),
                            "\xA0Mark as suspicious",
                          ],
                        }),
                        (0, _.jsx)("label", {
                          htmlFor: "escalateto",
                          children: "Escalate to",
                        }),
                        (0, _.jsxs)("select", {
                          _: "escalateto",
                          onChange: (_) => _(parseInt(_.target.value)),
                          value: _,
                          children: [
                            (0, _.jsx)("option", {
                              value: _._,
                              children: "Do not escalate",
                            }),
                            (0, _.jsx)("option", {
                              value: _._,
                              children: "Supervisor",
                            }),
                            (0, _.jsx)("option", {
                              value: _._,
                              children: "Valve",
                            }),
                          ],
                        }),
                        (0, _.jsx)("textarea", {
                          className: (0, _._)(
                            _().OneColumn,
                            _().MessageTextArea,
                          ),
                          placeholder: "Message to send (required)",
                          value: _,
                          onChange: (_) => _(_.target.value),
                        }),
                      ],
                    }),
                    (0, _.jsxs)(_._, {
                      className: _().BottomButtons,
                      children: [
                        _.sanctionMutation.isPending &&
                          (0, _.jsx)(_._, {
                            size: "small",
                          }),
                        !_.sanctionMutation.isPending &&
                          (0, _.jsxs)(_.Fragment, {
                            children: [
                              (0, _.jsx)(_._, {
                                onClick: _.onCancel,
                                children: "Cancel",
                              }),
                              (0, _.jsx)(_._, {
                                onClick: _,
                                disabled:
                                  _ === null || !_ || _.trim().length === 0,
                                children: "Sanction",
                              }),
                            ],
                          }),
                      ],
                    }),
                  ],
                }),
            ],
          });
        }
        function _(_, _) {
          const _ = (0, _._)();
          return (0, _._)({
            queryKey: ["get_quick_text", _, _],
            queryFn: async () => {
              if (_ == null || _ === void 0) return null;
              const _ = _._.Init(_);
              _.Body().set_quicktext_id(_),
                _.Body().set_language((0, _.LgB)(_));
              const _ = await _.GetQuickText(_, _);
              if (_.GetEResult() !== _._)
                throw new Error(
                  "useQuickText failed with EResult " + _.GetEResult(),
                );
              return _.Body().toObject();
            },
            enabled: _ !== void 0,
          });
        }
        function _(_) {
          return (0, _._)({
            queryKey: ["get_primary_language_for_user", _],
            queryFn: async () => {
              if (_ === "0" || !_) throw new Error("Invalid steamid");
              const _ = await (
                await fetch(
                  `${_._.COMMUNITY_BASE_URL}profiles/${_}/ajaxlanguagepreferences`,
                )
              ).json();
              if (_.success === _._) return _.preferences;
              throw new Error(
                "Failed GetPrimaryLanguageForUser. EResult: " + _.success,
              );
            },
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
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__._(_);
        function _(_) {
          const { subject: _ } = _,
            [_, _] = (0, _.useState)(!1),
            _ =
              _ &&
              (_.unresolved_report_count > 0 || _.unresolved_dispute_count > 0),
            _ = (0, _.jsx)(_._, {
              onClick: () => _(!0),
              children: (0, _.jsxs)(_._, {
                direction: "row",
                justify: "between",
                align: "baseline",
                gap: "1",
                children: [
                  _ &&
                    (0, _.jsx)("img", {
                      className: _().Flag,
                      src: `${_._.COMMUNITY_BASE_URL}public/images/skin_1/notification_icon_flag.png`,
                    }),
                  _._.Localize("#commentsanctiondialog_moderate"),
                  _ &&
                    _.required_moderator_level === _._ &&
                    (0, _.jsx)("span", {
                      className: _().ValveOnly,
                      children: "(VO)",
                    }),
                  _ &&
                    _.required_moderator_level === _._ &&
                    (0, _.jsx)("span", {
                      className: _().SupervisorOnly,
                      children: "(Supervisor)",
                    }),
                ],
              }),
            });
          return (0, _.jsxs)(_.Fragment, {
            children: [
              _ &&
                (0, _.jsx)(_, {
                  onClose: () => _(!1),
                  ..._,
                }),
              _ &&
                (0, _.jsx)(_._, {
                  toolTipContent: (0, _.jsx)(_, {
                    subject: _,
                  }),
                  direction: "bottom",
                  nDelayShowMS: 0,
                  children: _,
                }),
              !_ && _,
            ],
          });
        }
        function _(_) {
          const { subject: _ } = _,
            _ = (0, _.useMemo)(() => {
              var _;
              const _ = (0, _._)(
                (_ = _ == null ? void 0 : _.reports) != null ? _ : [],
                (_) => _.report_reason,
              );
              return _.sort((_, _) => _[1] - _[1]), _;
            }, [_.reports]);
          return _.length === 0
            ? null
            : (0, _.jsxs)(_.Fragment, {
                children: [
                  (0, _.jsx)("div", {
                    children: _._.Localize("#reasonlist_title"),
                  }),
                  _.map(([_, _]) =>
                    (0, _.jsx)(
                      "div",
                      {
                        children: _._.Localize(
                          "#reasonlist_reasonwithcount",
                          (0, _._)(_),
                          _,
                        ),
                      },
                      _,
                    ),
                  ),
                ],
              });
        }
        function _(_) {
          var _, _, _;
          const {
              sanctionMutation: _,
              acquitMutation: _,
              subject: _,
              eSubjectType: _,
              gidComment: _,
              clanSteamID: _,
              authorSteamID: _,
              onClose: _,
            } = _,
            _ = _ == null ? void 0 : _.reported_content_id,
            [_, _] = (0, _.useState)("main"),
            _ = [
              {
                name: "Reports",
                key: "reports",
                contents: (0, _.jsx)(_._, {
                  children: (0, _.jsx)(_._, {
                    subject: _,
                  }),
                }),
              },
              {
                name: "History",
                key: "history",
                contents: (0, _.jsx)(_._, {
                  children: (0, _.jsx)(_._, {
                    reportedContentID: _,
                  }),
                }),
              },
              {
                name: "Details",
                key: "details",
                contents: (0, _.jsx)(_._, {
                  children: _.children,
                }),
              },
            ],
            _ = () => {
              _.onClose(),
                window.location.href.split("#").length === 1 &&
                  _ !== _._ &&
                  (window.location.href += "#c" + _),
                window.location.reload();
            };
          let _ = 0,
            _ = 0;
          if (_)
            for (const _ of _.reports)
              _.time_resolved && !_.time_disputed && _++,
                _.time_dispute_resolved && _++;
          const _ =
              !!(_ != null && _.reported_content_id) &&
              !_.owner_dispute_time &&
              _.resolved === _._,
            _ = _ !== void 0 && !!_.owner_dispute_time;
          return (0, _.jsx)(_._, {
            onlyPopoutIfNeeded: !0,
            popupHeight: 340,
            popupWidth: 640,
            strTitle: "Moderate subject",
            children: (0, _.jsx)(_._, {
              bAllowFullSize: !0,
              title: "Moderate",
              "aria-describedby": "moderate",
              onCancel: _.onClose,
              className: _().ModerateDialog,
              children: (0, _.jsx)(_._, {
                children: (0, _.jsx)(_._, {
                  children: (0, _.jsxs)("div", {
                    className: _().ModerateDialogCtn,
                    children: [
                      _ === "main" &&
                        (0, _.jsxs)("div", {
                          className: _().ModerateCtn,
                          children: [
                            (0, _.jsxs)("div", {
                              className: _().ModerationData,
                              children: [
                                (0, _.jsxs)(_._, {
                                  _: "div",
                                  size: "3",
                                  contrast: "description",
                                  children: [
                                    (_ =
                                      _ == null
                                        ? void 0
                                        : _.unresolved_report_count) != null
                                      ? _
                                      : 0,
                                    " unresolved / ",
                                    _,
                                    " resolved / ",
                                    (_ =
                                      _ == null
                                        ? void 0
                                        : _.unresolved_dispute_count) != null
                                      ? _
                                      : 0,
                                    " disputed / ",
                                    _,
                                    " disputes resolved",
                                  ],
                                }),
                                (0, _.jsx)(_._, {
                                  tabs: _,
                                  bDisableRouting: !0,
                                }),
                              ],
                            }),
                            (0, _.jsxs)("div", {
                              className: _().ModerationActionButtons,
                              children: [
                                (0, _.jsx)("button", {
                                  onClick: () => _("sanction"),
                                  children: (0, _.jsxs)(_._, {
                                    direction: "row",
                                    justify: "center",
                                    align: "center",
                                    children: [
                                      (0, _.jsx)(_._, {
                                        className: _().SanctionIcon,
                                      }),
                                      " Sanction",
                                    ],
                                  }),
                                }),
                                (0, _.jsx)(_, {
                                  subject: _,
                                  acquitMutation: _,
                                  onClose: _,
                                }),
                                (0, _.jsx)(_, {
                                  subject: _,
                                  onClose: _,
                                }),
                                (0, _._)(_) &&
                                  (0, _.jsx)(_._, {
                                    disabled: !_,
                                    onClick: () => _("escalate"),
                                    children: _._.Localize(
                                      "#moderation_escalation_escalate",
                                    ),
                                  }),
                                !_ &&
                                  (0, _.jsx)("button", {
                                    disabled: !_,
                                    onClick: () => _("ownerdispute"),
                                    children: "Owner Dispute",
                                  }),
                                _ &&
                                  (0, _.jsxs)("span", {
                                    children: [
                                      (0, _.jsx)("a", {
                                        href: `${_._.HELP_BASE_URL}tickermaster/ticket/${_.owner_dispute_details}`,
                                        children: (0, _.jsx)(_._, {
                                          size: "2",
                                          children: _._.Localize(
                                            "#moderation_already_owner_disputed",
                                          ),
                                        }),
                                      }),
                                      (0, _.jsx)("button", {
                                        disabled: !_,
                                        onClick: () =>
                                          _("editownerdisputedetails"),
                                        className: _().EditButton,
                                        children: (0, _.jsx)(_.ffu, {}),
                                      }),
                                    ],
                                  }),
                              ],
                            }),
                          ],
                        }),
                      _ === "escalate" &&
                        !!_ &&
                        (0, _.jsx)(_._, {
                          reportedContentID: _,
                          eCurrentLevel:
                            _ == null ? void 0 : _.required_moderator_level,
                          onClose: () => _("main"),
                        }),
                      _ === "sanction" &&
                        (0, _.jsx)(_, {
                          subject:
                            _ != null
                              ? _
                              : {
                                  subject_type: _,
                                },
                          clanSteamID: _,
                          authorSteamID: _,
                          sanctionMutation: _,
                          onSanction: _,
                          onCancel: () => _("main"),
                        }),
                      _ === "ownerdispute" &&
                        !!_ &&
                        (0, _.jsx)(_, {
                          reportedContentID: _,
                          onClose: () => _("main"),
                        }),
                      _ === "editownerdisputedetails" &&
                        !!_ &&
                        (0, _.jsx)(_, {
                          reportedContentID: _,
                          onClose: () => _("main"),
                          currentDetails:
                            (_ =
                              _ == null ? void 0 : _.owner_dispute_details) !=
                            null
                              ? _
                              : "",
                        }),
                    ],
                  }),
                }),
              }),
            }),
          });
        }
        function _(_) {
          const { reportedContentID: _, onClose: _, currentDetails: _ } = _,
            [_, _] = (0, _.useState)(_),
            _ = (0, _._)(_, _),
            _ = async () => {
              await _.mutateAsync(), _();
            };
          return (0, _.jsxs)(_.Fragment, {
            children: [
              (0, _.jsxs)("label", {
                children: [
                  (0, _.jsx)(_._, {
                    size: "2",
                    children: _._.Localize(
                      "#moderation_editownerdisputedetails_label",
                    ),
                  }),
                  (0, _.jsx)("input", {
                    type: "text",
                    value: _,
                    onChange: (_) => _(_.target.value),
                  }),
                ],
              }),
              (0, _.jsxs)(_._, {
                justify: "between",
                direction: "row",
                children: [
                  (0, _.jsx)(_._, {
                    onClick: _,
                    children: _._.Localize(
                      "#moderation_editownerdisputedetails_save",
                    ),
                  }),
                  (0, _.jsx)(_._, {
                    onClick: _,
                    loading: _.isPending,
                    children: _._.Localize("#moderation_ownerdispute_cancel"),
                  }),
                ],
              }),
            ],
          });
        }
        function _(_) {
          const { reportedContentID: _, onClose: _ } = _,
            [_, _] = (0, _.useState)(""),
            _ = (0, _._)(_, _),
            _ = async () => {
              await _.mutateAsync(), _();
            };
          return (0, _.jsxs)(_._, {
            className: _().OwnerDisputeCtn,
            children: [
              (0, _.jsx)(_._, {
                _: "div",
                size: "2",
                children: _._.Localize("#moderation_ownerdispute_description"),
              }),
              (0, _.jsxs)("label", {
                children: [
                  (0, _.jsx)(_._, {
                    size: "2",
                    children: _._.Localize(
                      "#moderation_ownerdispute_ticketmastercode",
                    ),
                  }),
                  " ",
                  (0, _.jsx)("input", {
                    type: "text",
                    value: _,
                    onChange: (_) => _(_.target.value),
                  }),
                ],
              }),
              (0, _.jsxs)(_._, {
                justify: "between",
                direction: "row",
                children: [
                  (0, _.jsx)(_._, {
                    onClick: _,
                    children: _._.Localize("#moderation_ownerdispute_dispute"),
                  }),
                  (0, _.jsx)(_._, {
                    onClick: _,
                    children: _._.Localize("#moderation_ownerdispute_cancel"),
                  }),
                ],
              }),
            ],
          });
        }
        function _(_) {
          const { acquitMutation: _, onClose: _, subject: _ } = _,
            _ =
              _ &&
              (_.unresolved_report_count > 0 || _.unresolved_dispute_count > 0),
            _ = async () => {
              await _.mutateAsync(void 0), _();
            };
          return (0, _.jsx)("button", {
            onClick: _,
            disabled: !_,
            children: (0, _.jsxs)(_._, {
              direction: "row",
              justify: "center",
              align: "center",
              children: [
                (0, _.jsx)(_.jlt, {
                  className: _().AcquitIcon,
                }),
                " ",
                _._.Localize("#moderation_actions_acquit"),
              ],
            }),
          });
        }
        function _(_) {
          const { subject: _, onClose: _ } = _,
            _ =
              !!(_ != null && _.reported_content_id) &&
              _.resolved !== _._ &&
              (_.unresolved_dispute_count > 0 || _.unresolved_report_count > 0),
            _ = (0, _._)(),
            _ = async () => {
              _ != null &&
                _.reported_content_id &&
                (await _.mutateAsync({
                  reportedContentID: _.reported_content_id,
                }),
                _());
            };
          return (0, _.jsx)("button", {
            onClick: _,
            disabled: !_,
            children: _._.Localize("#moderation_actions_sustain"),
          });
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
          _ = __webpack_require__._(_),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        function _(_) {
          const {
              children: _,
              beforeContent: _,
              afterContent: _,
              hasValue: _,
              ..._
            } = _,
            _ = _(_);
          return (0, _.jsxs)(_._, {
            ..._,
            align: "center",
            "data-has-value": !!_,
            minWidth: "0",
            children: [
              _ &&
                (0, _.jsx)(_._, {
                  paddingRight: "2",
                  children: _,
                }),
              (0, _.jsx)(_._, {
                flexGrow: "1",
                minWidth: "0",
                children: _,
              }),
              _ &&
                (0, _.jsx)(_._, {
                  paddingLeft: "2",
                  children: _,
                }),
            ],
          });
        }
        function _(_) {
          const {
              variant: _ = "basic",
              size: _ = "2",
              radius: _,
              focusable: _ = !0,
              hoverable: _ = !0,
              clickable: _ = !0,
              disabled: _,
              className: _,
              status: _,
              color: _,
              ..._
            } = _,
            _ = _ === "underline" ? "none" : _;
          return (0, _._)(
            {
              ..._,
              radius: _,
              "data-status": _,
              "data-dull-color": _ && _ !== "dull" ? _ : void 0,
              className: _()(
                _.ControlBox,
                _ && !_ && _.Focusable,
                _ && !_ && _.Hoverable,
                _ && !_ && _.Clickable,
                _ && _.Disabled,
                _[`Variant-${_}`],
                _[`Size-${_}`],
                _,
              ),
            },
            _._,
          );
        }
      },
      chunkid: (module, module_exports, __webpack_require__) => {
        "use strict";
        __webpack_require__._(module_exports, {
          _: () => _,
        });
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__._(_);
        function _() {
          return _.TextEntry;
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
        function _(_, _) {
          let _;
          if (typeof _ == "string") _ = _;
          else if ("location" in _) _ = _.location.search;
          else if ("search" in _) _ = _.search;
          else return;
          const _ = new URLSearchParams(_.substring(1));
          if (_.has(_)) {
            const _ = _.getAll(_);
            return _[_.length - 1];
          }
        }
        function _(_, _, _, _ = !1) {
          const _ = new URLSearchParams(_.location.search.substring(1));
          if (_ != null && _ != null) {
            if (_.get(_) == _) return;
            _.set(_, _);
          } else {
            if (!_.has(_)) return;
            _.delete(_);
          }
          _
            ? _.replace(`?${_.toString()}`, {
                ..._.location.state,
              })
            : _.push(`?${_.toString()}`);
        }
        function _(_, _, _) {
          _(_, _, _, !0);
        }
        function _(_, _) {
          const _ = (0, _._)(),
            _ = (0, _._)(),
            _ = (0, _.useMemo)(() => {
              const _ = _(_.search, _);
              return _ != null && _ != null
                ? _ != null && _ != null
                  ? typeof _ == "boolean"
                    ? _.constructor(_ !== "false")
                    : _.constructor(_)
                  : _
                : _;
            }, [_.search, _, _]),
            _ = (0, _.useCallback)(
              (_, _ = !1) => {
                _(_, _, _ != null && _ != null ? String(_) : null, _);
              },
              [_, _],
            );
          return [_, _];
        }
        function _(_, _, _ = !1) {
          const _ = new URLSearchParams(_.location.search.substring(1));
          for (const _ in _)
            if (_.hasOwnProperty(_)) {
              const _ = _[_];
              _.delete(_), _ != null && _ != null && _.append(_, _);
            }
          _
            ? _.replace(`?${_.toString()}`, {
                ..._.location.state,
              })
            : _.push(`?${_.toString()}`);
        }
        function _(_, _) {
          _(_, _, !0);
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
          _ = __webpack_require__._(_),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        function _(_) {
          const {
              tabs: _,
              bDisableRouting: _,
              startingTab: _,
              controlledTab: _,
              OnTabChanged: _,
              classNameCtn: _,
              classNameTab: _,
              focusRingHasBorderRadius: _,
              classNameTabContent: _,
              preferredFocus: _,
              bVerticalTabs: _,
              bSticky: _,
              bChecklistMode: _,
            } = _,
            _ = (0, _._)(),
            _ = (0, _._)(),
            [_, _] = (0, _.useState)(() => {
              var _;
              return (
                _ ||
                (!_ && (0, _._)(_, "tab") && (_ = (0, _._)(_, "tab")) != null
                  ? _
                  : "")
              );
            });
          (0, _.useEffect)(() => {
            if (!_.bDisableRouting && _) {
              const _ = (0, _._)(_, "tab");
              _ && _(_);
            }
          }, [_, _.key, _.bDisableRouting, _]);
          const _ = _.useCallback(
              (_) => {
                _(_.key),
                  _ || (0, _._)(_, "tab", _.key),
                  _ == null || _(_.key),
                  _.onClick && _.onClick(_);
              },
              [_, _, _],
            ),
            _ = _.filter((_) => !_.hidden);
          if (!_.length) return null;
          const _ = _ != null ? _ : _,
            _ = _.find((_) => _.key === _) || _[0],
            _ = _ ? (_ != null ? _ : _[0].key) : void 0,
            _ = (0, _.jsxs)(_.Fragment, {
              children: [
                (0, _.jsx)(_._, {
                  className: (0, _._)(
                    _().GraphicalAssetsTabs,
                    _ && _().GraphicalAssetsTabsVertical,
                    _ && _().ChecklistMode,
                    _ && _().Sticky,
                    _,
                  ),
                  navEntryPreferPosition: _ ? _._.PREFERRED_CHILD : _._.FIRST,
                  children: _.map((_, _) =>
                    (0, _.jsx)(
                      _,
                      {
                        tab: _,
                        OnTabClick: _,
                        classNameTab: _,
                        focusRingHasBorderRadius: _,
                        active: _.key === _.key,
                        preferredFocus: _ === _.key,
                      },
                      _.key,
                    ),
                  ),
                }),
                _ &&
                  (0, _.jsx)(_._, {
                    className: _,
                    children: _.contents,
                  }),
              ],
            });
          return _
            ? (0, _.jsx)(_._, {
                className: (0, _._)(_().GraphicalAssetsTabsLayoutVertical),
                children: _,
              })
            : _;
        }
        function _(_) {
          const {
            statusType: _ = "success",
            bShowStatusBox: _,
            children: _,
          } = _;
          let _ = "";
          return (
            _ === "success"
              ? (_ = _().StatusSuccess)
              : _ === "danger"
                ? (_ = _().StatusDanger)
                : _ === "caution"
                  ? (_ = _().StatusCaution)
                  : _ === "info"
                    ? (_ = _().StatusInfo)
                    : _ === "incomplete" && (_ = _().StatusIncomplete),
            (0, _.jsx)("div", {
              className: (0, _._)(
                _().GraphicalAssetStatus,
                _,
                _ ? _().checklistBox : "",
              ),
              children: _,
            })
          );
        }
        function _(_) {
          const {
            tab: _,
            OnTabClick: _,
            classNameTab: _,
            focusRingHasBorderRadius: _,
            active: _,
            preferredFocus: _,
          } = _;
          return (0, _.jsx)(_._, {
            condition: !!(_.statusToolTip || _.tooltip),
            wrap: (_) =>
              (0, _.jsx)(_._, {
                toolTipContent: _.statusToolTip || _.tooltip,
                children: _,
              }),
            children: (0, _.jsxs)(_._, {
              className: (0, _._)(
                _().GraphicalAssetsTab,
                _ && _().Active,
                _ && "ActiveTab",
                _,
              ),
              onActivate: () => _(_),
              preferredFocus: _,
              focusRingHasBorderRadius: _,
              children: [
                !!_.vo_warning &&
                  (0, _.jsx)(_._, {
                    toolTipContent: _.vo_warning,
                    children: (0, _.jsx)("div", {
                      className: _().VOWarning,
                      children: (0, _._)("#EventEditor_VOWarning"),
                    }),
                  }),
                _.status,
                _.name,
              ],
            }),
          });
        }
      },
      chunkid: (module) => {
        module.exports = {
          ModerateDialogCtn: "_1JFB_3Ek9uIS-ml-7C1V3",
          Flag: "_24i0Jj7bXsdJSJdDY0a4e9",
          ModerateCtn: "_2f8lQGhpOdBN1nDokNV-_v",
          ModerationActionButtons: "_3vIg4OosURoc-guanZbMot",
          OwnerDisputeCtn: "_3o0wdHIoLEIVk2tOl2OyB1",
          EditButton: "MtttYfwYqnHlqj832CGXL",
          ValveOnly: "_1mtaTCIJfR1JZhSZpaPzUo",
          SupervisorOnly: "_2dWYzwO95xQRO7W66aSsH7",
          AcquitIcon: "HA6Hw6Hc332GoPbma_9sZ",
          SanctionIcon: "_3WS1gYqe89ISF4mi7dvtBU",
        };
      },
      chunkid: (module) => {
        module.exports = {
          "Variant-basic": "xqG5GdDEeYauX2ots2DLl",
          "Size-3": "_1K_Ve980-qBq8l1-cZJdw1",
          "Variant-inset": "_2Z-Zr4UW8-jHrU5olM_rpn",
          "Variant-inset-focus": "_2RYWJyn7v0tvoY5cR63QuI",
          Focusable: "_1cd-wdIp5lIWsydAxII-vY",
          "Variant-inset-glass": "_32JdL4FubsmwHfHXm6OB9I",
          "Variant-underline": "yV_Aq5WutzzittgbOJ1R-",
          "Variant-dim": "_2qQgKJgeeqc9lEI-i7HdsM",
          "Variant-highlight": "EFvA4gLIikUE06LDGCqg5",
          "Variant-bare": "_3vxqpebgJYIYNTcigTXx21",
          ControlBox: "_2gL71Yq-HzVI9oOGyWu3jH",
          Hoverable: "_8JNTStqpIYaMWQJx6g6hK",
          Clickable: "_1KONo9A0HE0_NOK2F6uvXy",
          Disabled: "_2I6xXve3oCxh8fra7SWTnq",
          "Size-1": "_2e1xlPghh48rkP13ydQOPb",
          "Size-2": "B7HtDxiiORArIRcBR9kVB",
        };
      },
      chunkid: (module) => {
        module.exports = {
          TextEntry: "_1vE-LsK6l_D_5yjbywZV1p",
        };
      },
      chunkid: (module) => {
        module.exports = {
          BottomButtons: "mdeaaJPcT9kJyTGau_Zr7",
          SanctionForm: "_33cLeNjYsBEX2T0-B9gc5G",
          OneColumn: "_2LTDR9F3yb80ONcUPcDxo1",
          QuickReasons: "_1VdNqwseupCqI68H-YwwZO",
          MessageTextArea: "_3IWpl3mfH9OFkiqMIh7WtY",
          ErrorMessage: "_3_dhawEOV-fztaXEftlfxJ",
        };
      },
      chunkid: (module) => {
        module.exports = {
          narrowWidth: "500px",
          GraphicalAssetsTabs: "_3oSHTIvUhbK90D9Uvj438V",
          GraphicalAssetsTab: "_3lJb_YN8uykqLcm4eG1jRF",
          Active: "_8XjrTFzaSA8ubHvHCu44L",
          Sticky: "_3dlxz6KBJpvmA-qsVAzxs8",
          GraphicalAssetsTabsLayoutVertical: "_1ZIVlOM_Qz4wInwwXzUHTR",
          GraphicalAssetsTabsVertical: "_3hS8NFdPTrUehJGNVT0PtV",
          ChecklistMode: "_3blAkLFfSQrJjGklUKOP7e",
          GraphicalAssetStatus: "_25U4FBOpeZQAX-v-f9Yosb",
          checklistBox: "_1idkU7IA8dDPOIbsU-dRkJ",
          StatusSuccess: "_1iIRVlPDTEUMMEFuHgLGlq",
          VOWarning: "_3LaJynPDFfccGWUEtdltlt",
          StatusDanger: "UxdQKun4GcZ-B1NJwHevX",
          StatusCaution: "E9t9jUT0k_0xGdy7HbJfd",
          StatusInfo: "_38gm-PDPbi6lw1-aiH81HR",
          StatusIncomplete: "ZGxYVjsUSjHLRHIWkx4-L",
        };
      },
    },
  ]);
})();
