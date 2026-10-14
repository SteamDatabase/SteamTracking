(() => {
  (self.webpackChunkappmgmt_storeadmin =
    self.webpackChunkappmgmt_storeadmin || []).push([
    [86762],
    {
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
          _ = __webpack_require__._(_),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__._(_),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__._(_),
          _ = __webpack_require__("chunkid");
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.clan_event_gid || _._(_._()),
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
                    clan_event_gid: {
                      _: 1,
                      _: _._.readFixed64String,
                      _: _._.writeFixed64String,
                    },
                    steamid: {
                      _: 2,
                      _: _._.readFixed64String,
                      _: _._.writeFixed64String,
                    },
                    registration_group_id: {
                      _: 3,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    registration_session_id: {
                      _: 4,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    guest_count: {
                      _: 5,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    jsondata: {
                      _: 7,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    skip_email: {
                      _: 8,
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
            return "CPartnerMeetSteam_UpdateRegistration_Request";
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
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CPartnerMeetSteam_UpdateRegistration_Response";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.clan_event_gid || _._(_._()),
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
                    clan_event_gid: {
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
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CPartnerMeetSteam_GetAvailability_Request";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.availability || _._(_._()),
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
                    availability: {
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
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CPartnerMeetSteam_GetAvailability_Response";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.group_id || _._(_._()),
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
                    group_id: {
                      _: 1,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    session_id: {
                      _: 2,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    guest_count: {
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
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CPartnerMeetSteam_GetAvailability_Response_Session";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.clan_event_gid || _._(_._()),
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
                    clan_event_gid: {
                      _: 1,
                      _: _._.readFixed64String,
                      _: _._.writeFixed64String,
                    },
                    steamid: {
                      _: 2,
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
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CPartnerMeetSteam_GetRegistrations_Request";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.registrations || _._(_._()),
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
                    registrations: {
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
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CPartnerMeetSteam_GetRegistrations_Response";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.group_id || _._(_._()),
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
                    group_id: {
                      _: 1,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    session_id: {
                      _: 2,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    steamid: {
                      _: 3,
                      _: _._.readFixed64String,
                      _: _._.writeFixed64String,
                    },
                    guests_registered: {
                      _: 4,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    jsondata: {
                      _: 5,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    rt_attendance_marked: {
                      _: 6,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    attendance_count: {
                      _: 7,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    guests_attendance: {
                      _: 8,
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
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CPartnerMeetSteam_GetRegistrations_Response_Registration";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.clan_event_gid || _._(_._()),
              _.Message.initialize(this, _, 0, -1, [3], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    clan_event_gid: {
                      _: 1,
                      _: _._.readFixed64String,
                      _: _._.writeFixed64String,
                    },
                    steamid: {
                      _: 2,
                      _: _._.readFixed64String,
                      _: _._.writeFixed64String,
                    },
                    accountids: {
                      _: 3,
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
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CPartnerMeetSteam_EmailInvitees_Request";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.num_emailed || _._(_._()),
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
                    num_emailed: {
                      _: 1,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    num_skipped: {
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
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CPartnerMeetSteam_EmailInvitees_Response";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.clan_event_gid || _._(_._()),
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
                    clan_event_gid: {
                      _: 1,
                      _: _._.readFixed64String,
                      _: _._.writeFixed64String,
                    },
                    steamid: {
                      _: 2,
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
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CParterMeetSteam_TestFireEmails_Request";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.sessionids || _._(_._()),
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
                    sessionids: {
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
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CParterMeetSteam_TestFireEmails_Response";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.rt_oldest_date || _._(_._()),
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
                    rt_oldest_date: {
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
            return "CPartnerMeetSteam_GetSaleEventOrganizers_Request";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.accountid || _._(_._()),
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
                    accountid: {
                      _: 1,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    clan_event_gids: {
                      _: 2,
                      _: !0,
                      _: !0,
                      _: _._.readFixed64String,
                      pbr: _._.readPackedFixed64String,
                      _: _._.writeRepeatedFixed64String,
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
            return "CSaleEventOrganizerInfo";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.info || _._(_._()),
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
                    info: {
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
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CPartnerMeetSteam_GetSaleEventOrganizers_Response";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.accountids || _._(_._()),
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
                    accountids: {
                      _: 1,
                      _: !0,
                      _: !0,
                      _: _._.readUint32,
                      pbr: _._.readPackedUint32,
                      _: _._.writeRepeatedUint32,
                    },
                    partnerids: {
                      _: 2,
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
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CPartnerMeetSteam_GetBatchPartnerEmailAndName_Request";
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
                    partnerid: {
                      _: 2,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    realname: {
                      _: 3,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    email: {
                      _: 4,
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
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CPartnerEmailAndName";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.info || _._(_._()),
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
                    info: {
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
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CPartnerMeetSteam_GetBatchPartnerEmailAndName_Response";
          }
        }
        var _;
        ((_) => {
          function _(_, _, _) {
            return _.SendMsg(
              "PartnerMeetSteam.UpdateRegistration#1",
              (0, _._)(_, _, _),
              _,
              {
                bConstMethod: !0,
                ePrivilege: 1,
              },
            );
          }
          _.UpdateRegistration = _;
          function _(_, _, _) {
            return _.SendMsg(
              "PartnerMeetSteam.GetAvailability#1",
              (0, _._)(_, _, _),
              _,
              {
                bConstMethod: !0,
                ePrivilege: 0,
                eWebAPIKeyRequirement: 1,
              },
            );
          }
          _.GetAvailability = _;
          function _(_, _, _) {
            return _.SendMsg(
              "PartnerMeetSteam.GetRegistrations#1",
              (0, _._)(_, _, _),
              _,
              {
                bConstMethod: !0,
                ePrivilege: 1,
                rgBrowserAPISites: ["partner"],
              },
            );
          }
          _.GetRegistrations = _;
          function _(_, _, _) {
            return _.SendMsg(
              "PartnerMeetSteam.EmailInvitees#1",
              (0, _._)(_, _, _),
              _,
              {
                ePrivilege: 4,
              },
            );
          }
          _.EmailInvitees = _;
          function _(_, _, _) {
            return _.SendMsg(
              "PartnerMeetSteam.TestFireEmails#1",
              (0, _._)(_, _, _),
              _,
              {
                ePrivilege: 4,
                rgBrowserAPISites: ["partner"],
              },
            );
          }
          _.TestFireEmails = _;
          function _(_, _, _) {
            return _.SendMsg(
              "PartnerMeetSteam.GetSaleEventOrganizers#1",
              (0, _._)(_, _, _),
              _,
              {
                bConstMethod: !0,
                ePrivilege: 4,
                rgBrowserAPISites: ["partner"],
              },
            );
          }
          _.GetSaleEventOrganizers = _;
          function _(_, _, _) {
            return _.SendMsg(
              "PartnerMeetSteam.GetBatchPartnerEmailAndName#1",
              (0, _._)(_, _, _),
              _,
              {
                bConstMethod: !0,
                ePrivilege: 1,
                rgBrowserAPISites: ["partner"],
              },
            );
          }
          _.GetBatchPartnerEmailAndName = _;
        })(_ || (_ = {}));
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__._(_),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        function _(_, _ = !1) {
          const [_, _ = "00:00:00"] = _.trim().split(/\s+/),
            [_, _, _] = _.split("-").map(Number),
            [_, _, _] = _.split(":").map(Number),
            _ = _
              ? Date.UTC(_, _ - 1, _, _, _, _ ?? 0)
              : new Date(_, _ - 1, _, _, _, _ ?? 0).getTime();
          return Math.floor(_ / 1e3);
        }
        function _() {
          const [_] = _.useState(() =>
              (0, _._)("events_list", "application_config"),
            ),
            [_] = (0, _._)("filter"),
            _ = (0, _._)(),
            [_, _] = _.useMemo(() => {
              let _ = new Array(),
                _ = new Array();
              return (
                _.forEach((_) => {
                  _.endtime && _(_.endtime) < _ ? _.push(_) : _.push(_);
                }),
                [_, _]
              );
            }, [_, _]),
            _ = (0, _.useMemo)(
              () => _.find((_) => _._ === _?.toLocaleLowerCase()),
              [_, _],
            );
          return {
            rgOldEvents: _,
            rgEvents: _,
            selectConference: _,
          };
        }
        function _(_) {
          return ["usePartnerRevAndBestAppSlow", _];
        }
        async function _(_) {
          const _ = `${_._.PARTNER_BASE_URL}/meetsteam/ajaxfetchpartnerdetails`,
            _ = {
              sessionid: (0, _._)(),
              partnerid: _,
            };
          return (
            await _().get(_, {
              params: _,
            })
          )?.data?.data;
        }
        function _(_) {
          const _ = (0, _._)({
            queryKey: _(_),
            queryFn: async () => _(_),
            enabled: !!_,
          });
          return _.isLoading ? null : _.data;
        }
        function _(_, _) {
          return _.getQueryData(["usePartnerRevAndBestAppSlow", _]);
        }
        function _(_, _, _) {
          return (0, _._)({
            queryKey: ["useMeetSteamGetAllRegistration", _, _],
            queryFn: async () => {
              const _ = _._.Init(_);
              _.Body().set_clan_event_gid(_);
              const _ = await _.GetRegistrations(_, _);
              return _.BSuccess()
                ? _.Body()
                    .registrations()
                    .map((_) => _.toObject())
                : [];
            },
            enabled: _ != null && _ != 0,
          });
        }
        function _(_) {
          const _ = (0, _._)({
            queryKey: ["useMeetSteamSaleOperators"],
            queryFn: async () => {
              const _ = _._.Init(_),
                _ = new Date();
              _.setFullYear(_.getFullYear() - 2),
                _.Body().set_rt_oldest_date(0);
              const _ = await _.GetSaleEventOrganizers(_, _);
              return _.BSuccess()
                ? _.Body()
                    .info()
                    .map((_) => _.toObject())
                : [];
            },
          });
          return _.isLoading ? null : _.data;
        }
        function _(_) {
          const [_, _] = (0, _.useState)(!1),
            [_, _] = (0, _.useState)(0),
            _ = (0, _._)();
          return (
            (0, _.useEffect)(() => {
              (async () => {
                let _ = 0;
                for (const _ of _) {
                  const _ = _.results.partner_id,
                    _ = new _._(_.steamid).GetAccountID();
                  await Promise.all([
                    (0, _._)(_),
                    _.prefetchQuery({
                      queryKey: _(_),
                      queryFn: async () => _(_),
                    }),
                    (0, _._)(_, _),
                  ]),
                    ++_,
                    _(_);
                }
                _(!0);
              })();
            }, [_, _]),
            {
              bComplete: _,
              nCount: _,
            }
          );
        }
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
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__._(_);
        function _(_) {
          const _ = _();
          return (0, _.jsx)("div", {
            children: (0, _.jsx)("ol", {
              children: Array.from(_.entries()).map(([_, _]) =>
                (0, _.jsx)(
                  "li",
                  {
                    children: (0, _.jsx)("a", {
                      href: `${_._.PARTNER_BASE_URL}meetsteam/surveyresults/${_}`,
                      target: "_blank",
                      children: _,
                    }),
                  },
                  _,
                ),
              ),
            }),
          });
        }
        function _() {
          const [_] = (0, _.useState)(() => {
            const _ = (0, _._)("survey_list", "application_config") || {},
              _ = new Map();
            for (const _ of Object.keys(_)) _.set(_, _[_]);
            return _;
          });
          return _;
        }
        const _ = new Set();
        function _() {
          for (const _ of _) _(location.search);
        }
        function _() {
          const [_, _] = (0, _.useState)(location.search);
          return (
            (0, _.useEffect)(() => {
              function _() {
                _(location.search);
              }
              return (
                _.add(_),
                window.addEventListener("popstate", _),
                _(location.search),
                () => {
                  _.delete(_), window.removeEventListener("popstate", _);
                }
              );
            }, []),
            _
          );
        }
        function _(_, _) {
          const _ = _(),
            _ = (0, _.useMemo)(() => {
              const _ = new URLSearchParams(_.substring(1)).get(_);
              return _ != null
                ? _ != null
                  ? typeof _ == "boolean"
                    ? _.constructor(_ !== "false")
                    : _.constructor(_)
                  : _
                : _;
            }, [_, _, _]),
            _ = _.useCallback(
              (_, _ = !1) => {
                const _ = new URLSearchParams(location.search.substring(1));
                if (_ != null) {
                  if (_.get(_) == _) return;
                  _.set(_, String(_));
                } else {
                  if (!_.has(_)) return;
                  _.delete(_);
                }
                _
                  ? history.replaceState(
                      history.state,
                      "",
                      decodeURIComponent(`${window.location.pathname}?${_}`),
                    )
                  : history.pushState(
                      history.state,
                      "",
                      decodeURIComponent(`${window.location.pathname}?${_}`),
                    ),
                  (0, _.startTransition)(_);
              },
              [_],
            );
          return [_, _];
        }
        const _ = _.createContext(void 0);
        function _(_) {
          const { children: _ } = _,
            [_, _] = _("showpastevents", !1);
          return (0, _.jsx)(_.Provider, {
            value: {
              bShowArchived: _,
              setShowArchived: _,
            },
            children: _,
          });
        }
        const _ = () => {
          const _ = (0, _.useContext)(_);
          if (!_)
            throw new Error(
              "useMeetSteamArchived must be used within MeetSteamArchivedProvider",
            );
          return _;
        };
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__._(_),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        class _ {
          m_steamInterface;
          GetSaleFeatureTransport() {
            return this.m_steamInterface;
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
            this.m_steamInterface = (0, _._)(new _._(_._.WEBAPI_BASE_URL));
          }
        }
        function _() {
          return _.Get().GetSaleFeatureTransport().GetServiceTransport();
        }
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        async function _(_) {
          const _ = `${_._.PARTNER_BASE_URL}meetsteam/admin/ajaxgetpartnersforaccount?accountid=${_}`,
            _ = await fetch(_);
          if (!_._)
            throw new Error(`Failed to read the partner list for account ${_}`);
          const _ = await _.json();
          if (_.success != _._)
            throw new Error(
              `Failed to read the partner list for account ${_}: ${_.msg}`,
            );
          return _.partners ?? [];
        }
        function _(_) {
          return (0, _._)({
            queryKey: ["MeetSteamPartnersForAccount", _],
            queryFn: () => _(_),
            enabled: _ > 0,
          });
        }
        function _(_, _) {
          const [_, _] = useState(_),
            _ = _(_, {
              nTimeoutMS: _,
              nTimeoutExtensionMS: _,
              nMaxTimeoutExtensions: 1 / 0,
            });
          return [_, _, _];
        }
        function _(_, _ = {}) {
          const {
              nTimeoutMS: _ = 350,
              nTimeoutExtensionMS: _ = 125,
              nMaxTimeoutExtensions: _ = 3,
            } = _,
            [_, _] = _.useState(_),
            _ = _.useRef(void 0);
          return (
            _.useEffect(() => {
              const _ = performance.now();
              _.current
                ? _ - _.current.tsLastChange < _ * _ &&
                  (_.current.tsScheduledTimeout = Math.max(
                    performance.now() + _,
                    _.current.tsScheduledTimeout,
                  ))
                : (_.current = {
                    tsLastChange: _,
                    tsScheduledTimeout: performance.now() + _,
                  });
              const _ = _.current.tsScheduledTimeout - performance.now(),
                _ = window.setTimeout(() => {
                  (_.current = void 0), _(_);
                }, _);
              return () => window.clearTimeout(_);
            }, [_, _, _, _]),
            _
          );
        }
        function _(_) {
          const _ = _.trim();
          if (!/^\d+$/.test(_)) return 0;
          if (Number(_) > 4294967295) {
            const _ = new _._(_);
            return _.BIsValid() && _.BIsIndividualAccount()
              ? _.GetAccountID()
              : 0;
          }
          return Number(_);
        }
        function _(_) {
          const { hideModal: _, gid: _ } = _,
            [_, _] = (0, _.useState)(!1),
            [_, _] = (0, _.useState)(null),
            [_, _] = _.useState(""),
            [_, _] = _.useState(""),
            [_, _] = _.useState(""),
            [_, _] = _.useState(!1),
            _ = _(_),
            _ = _(_),
            _ = !!_.trim() && !_,
            _ = _(),
            _ = _(_),
            _ = _.data,
            _ = (0, _._)({
              queryKey: ["MeetSteamInviteDirectDialog", _, _],
              queryFn: async () => {
                const _ = {
                    steamid: _._.InitFromAccountID(_).ConvertTo64BitString(),
                    gid: _,
                    type: _._._,
                  },
                  _ = await _._.GetUserActionData(_, _);
                return _.BSuccess() && _.Body().jsondata()
                  ? JSON.parse(_.Body().jsondata())
                  : {};
              },
              enabled: !!_ && _ > 0,
            });
          _.useEffect(() => {
            if (!_.isLoading && _.isSuccess) {
              const _ = _?.length == 1 ? _[0].partnerid.toString() : "";
              _(_.data.partner_id ? _.data.partner_id.toString() : _),
                _(_.data.email_override ?? ""),
                _(_.data.allow_registration_if_full ?? !1);
            }
          }, [_.isLoading, _.isSuccess, _.data, _]);
          const _ = async () => {
            _(!0);
            const _ = Number.parseInt(_) > 0 ? Number.parseInt(_) : 0,
              _ = await _(
                _,
                [
                  {
                    nAccountID: _,
                    nPartnerID: _,
                    strEmailOverride: _,
                    bAllowRegistrationIfFull: _,
                  },
                ],
                !0,
              ),
              _ = _ && _.success == _._;
            _ || _("We hit error during invite, check console: " + _?.msg),
              _(!1),
              _.refetch(),
              _ && _();
          };
          return (0, _.jsxs)(_._, {
            strTitle: "Invite User",
            bOKDisabled: !_ || _ || _.isLoading,
            onOK: _,
            onCancel: _,
            children: [
              !!_ &&
                (0, _.jsx)("div", {
                  className: _.ErrorStylesWithIcon,
                  children: _,
                }),
              !_ &&
                (0, _.jsxs)(_.Fragment, {
                  children: [
                    (0, _.jsx)("div", {
                      children:
                        "Saving sends an invitation email to this account only, and only if it has not been sent one for this event already. It does not send the invitation emails queued for anyone else. Use the Invitation And Registration Status dialog for those.",
                    }),
                    (0, _.jsx)(_._, {
                      type: "text",
                      label: "Account ID or Steam ID",
                      description:
                        "Accepts either the 32-bit account id or the 64-bit steam id",
                      onChange: (_) => _(_.currentTarget.value),
                      value: _,
                    }),
                    _ &&
                      (0, _.jsx)("div", {
                        className: _.ErrorStylesWithIcon,
                        children: "That is not a valid account id or steam id.",
                      }),
                    _ != 0 &&
                      (0, _.jsx)(_, {
                        nAccountID: _,
                      }),
                    _ != 0 &&
                      !_.isLoading &&
                      (0, _.jsxs)(_.Fragment, {
                        children: [
                          (0, _.jsx)(_._, {
                            type: "number",
                            label: "Partner ID (optional)",
                            onChange: (_) => _(_.currentTarget.value),
                            value: _,
                          }),
                          (0, _.jsx)(_, {
                            rgPartners: _,
                            bLoading: _.isLoading,
                            bFailed: _.isError,
                            strPartnerID: _,
                            SetPartnerID: _,
                          }),
                          (0, _.jsx)(_._, {
                            type: "text",
                            label: "Email override (optional)",
                            onChange: (_) => _(_.currentTarget.value.trim()),
                            value: _,
                          }),
                          (0, _.jsx)(_._, {
                            controlled: !0,
                            checked: _,
                            onChange: _,
                            label: "Allow if registration is full",
                          }),
                        ],
                      }),
                  ],
                }),
              _ &&
                (0, _.jsx)(_._, {
                  size: "small",
                  position: "center",
                  string: (0, _._)("#Saving"),
                }),
              _.isLoading &&
                (0, _.jsx)(_._, {
                  size: "small",
                  position: "center",
                  string: (0, _._)("#Loading"),
                }),
            ],
          });
        }
        function _(_) {
          const { nAccountID: _ } = _,
            [_, _] = (0, _._)(_);
          if (_)
            return (0, _.jsx)(_._, {
              size: "small",
              position: "center",
              string: (0, _._)("#Loading"),
            });
          if (!_)
            return (0, _.jsx)("div", {
              className: _.ErrorStylesWithIcon,
              children: `We could not find an account for ${_}.`,
            });
          const _ = _._.InitFromAccountID(_).ConvertTo64BitString();
          return (0, _.jsxs)("div", {
            className: _().AccountSummary,
            children: [
              (0, _.jsx)("img", {
                className: _().AccountAvatar,
                src: _.avatar_url?.replace(/\.jpg$/, "_medium.jpg"),
              }),
              (0, _.jsxs)("div", {
                children: [
                  (0, _.jsx)("div", {
                    className: _().AccountPersonaName,
                    children: _.persona_name,
                  }),
                  (0, _.jsx)("a", {
                    href: `${_._.SUPPORT_BASE_URL}account/overview/${_}`,
                    target: "_blank",
                    rel: "noopener noreferrer",
                    children: `Account ${_} / SteamID ${_}`,
                  }),
                ],
              }),
            ],
          });
        }
        function _(_) {
          const {
            rgPartners: _,
            bLoading: _,
            bFailed: _,
            strPartnerID: _,
            SetPartnerID: _,
          } = _;
          return _
            ? (0, _.jsx)(_._, {
                size: "small",
                position: "center",
                string: "Looking up partner membership",
              })
            : _
              ? (0, _.jsx)("div", {
                  className: _().PartnerListHeader,
                  children:
                    "We could not look up partner membership, enter the partner id above.",
                })
              : !_ || _.length == 0
                ? (0, _.jsx)("div", {
                    className: _().PartnerListHeader,
                    children: "This account is not a member of any partner.",
                  })
                : (0, _.jsxs)("div", {
                    className: _().PartnerList,
                    children: [
                      (0, _.jsx)("div", {
                        className: _().PartnerListHeader,
                        children: "Member of, click to use:",
                      }),
                      _.map((_) =>
                        (0, _.jsxs)(
                          "a",
                          {
                            href: "#",
                            className: (0, _._)(
                              _().PartnerListRow,
                              _.partnerid.toString() == _
                                ? _().PartnerListRowSelected
                                : "",
                            ),
                            onClick: (_) => {
                              _.preventDefault(), _(_.partnerid.toString());
                            },
                            children: [_.partner_name, " (", _.partnerid, ")"],
                          },
                          _.partnerid,
                        ),
                      ),
                    ],
                  });
        }
        function _(_) {
          const { hideModal: _, gid: _ } = _,
            [_, _] = (0, _.useState)(null),
            [_, _] = (0, _.useState)(!1),
            [_, _] = (0, _.useState)(null),
            [_, _] = (0, _.useState)(null),
            [_, _] = (0, _.useState)(null),
            _ = async () => {
              _(!0);
              const _ = await _(_, _, !1);
              _?.success == _._
                ? (_(_.rgInvitedAccounts.length), _(_.rgSkippedAccounts.length))
                : _("We hit error during invite, check console: " + _?.msg),
                _(!1);
            },
            _ = () => {
              _(null), _(null), _(!1), _(null), _();
            };
          return (0, _.jsxs)(_._, {
            strTitle: "Invite Users",
            bOKDisabled: !_ || _.length == 0 || _ != null,
            strCancelButtonText: _ !== null ? "Close" : "Cancel",
            onOK: _,
            onCancel: _,
            children: [
              !!_ &&
                (0, _.jsx)("div", {
                  className: _.ErrorStylesWithIcon,
                  children: _,
                }),
              _ != null &&
                (0, _.jsxs)("div", {
                  children: [
                    "Invited ",
                    (0, _._)(_),
                    " accounts, skipped previously invited ",
                    (0, _._)(_),
                  ],
                }),
              _ &&
                (0, _.jsx)(_._, {
                  size: "small",
                  position: "center",
                  string: (0, _._)("#Saving"),
                }),
              (0, _.jsx)("div", {
                children:
                  "Saving sends an invitation email to the accounts imported here that have not been sent one for this event already. It does not send the invitation emails queued for anyone else on the event.",
              }),
              _ == null
                ? (0, _.jsx)(_, {
                    setInvites: _,
                  })
                : (0, _.jsx)(_, {
                    rgInvites: _,
                  }),
            ],
          });
        }
        function _(_) {
          const { rgInvites: _ } = _;
          return (0, _.jsxs)(_.Fragment, {
            children: [
              (0, _.jsxs)("div", {
                children: ["Total Invites Parsed: ", _.length, " "],
              }),
              (0, _.jsxs)("table", {
                children: [
                  (0, _.jsx)("thead", {
                    children: (0, _.jsxs)("tr", {
                      children: [
                        (0, _.jsx)("th", {
                          children: "AccountID",
                        }),
                        (0, _.jsx)("th", {
                          children: "PartnerID",
                        }),
                        (0, _.jsx)("th", {
                          children: "Email Override",
                        }),
                      ],
                    }),
                  }),
                  (0, _.jsx)("tbody", {
                    children: _.map((_, _) =>
                      (0, _.jsxs)(
                        "tr",
                        {
                          children: [
                            (0, _.jsx)("td", {
                              children: _.nAccountID,
                            }),
                            (0, _.jsx)("td", {
                              children: _.nPartnerID,
                            }),
                            (0, _.jsx)("td", {
                              children: _.strEmailOverride,
                            }),
                          ],
                        },
                        "invite" + _.nAccountID + "_" + _,
                      ),
                    ),
                  }),
                ],
              }),
            ],
          });
        }
        function _(_) {
          const { setInvites: _ } = _;
          return (0, _.jsxs)(_.Fragment, {
            children: [
              (0, _.jsx)("div", {
                children: "Format for CSV File, please use the template below:",
              }),
              (0, _.jsxs)("ul", {
                children: [
                  (0, _.jsxs)("li", {
                    children: [
                      (0, _.jsx)("b", {
                        children: "nAccountID",
                      }),
                      " - required, 32-bit integer value, not the 64-bit steam id",
                    ],
                  }),
                  (0, _.jsxs)("li", {
                    children: [
                      (0, _.jsx)("b", {
                        children: "nPartnerID",
                      }),
                      " - (preferred for biz contact)",
                    ],
                  }),
                  (0, _.jsxs)("li", {
                    children: [
                      (0, _.jsx)("b", {
                        children: "strOverrideEmail",
                      }),
                      " - (optional, we wil use the email associated with the account and partner or the steamid itself)",
                    ],
                  }),
                ],
              }),
              (0, _.jsx)("br", {}),
              (0, _.jsx)("a", {
                href: "#",
                onClick: async (_) => {
                  _.preventDefault(), _.stopPropagation();
                  const _ = [];
                  _.push(["nAccountID", "nPartnerID", "strEmailOverride"]),
                    _.push(["388445686", "1", "adils@valvesoftware.com"]),
                    _._.WriteCSVToFile(_, "invite_template.csv");
                },
                children: "Download Template Example",
              }),
              (0, _.jsx)("br", {}),
              (0, _.jsx)("br", {}),
              (0, _.jsx)(_._, {
                children: (0, _.jsxs)("label", {
                  className: _().ImportButtonLabel,
                  htmlFor: "import-discount-input",
                  children: [
                    "Choose CSV File",
                    (0, _.jsx)("input", {
                      _: "import-discount-input",
                      type: "file",
                      style: {
                        display: "none",
                      },
                      onChange: async (_) => {
                        if (_.target.files.length >= 1) {
                          const _ = _.target.files[0],
                            _ = await _._.ParseCSVFile(_);
                          if (_?.data) {
                            const _ = new Array();
                            _.data.forEach((_) => {
                              if (_.nAccountID) {
                                const _ = {
                                  nAccountID: Number.parseInt(_.nAccountID),
                                };
                                _.nPartnerID &&
                                  (_.nPartnerID = Number.parseInt(
                                    _.nPartnerID,
                                  )),
                                  _.strEmailOverride &&
                                    (_.strEmailOverride = _.strEmailOverride),
                                  _.push(_);
                              }
                            }),
                              _(_);
                          }
                        }
                      },
                    }),
                  ],
                }),
              }),
            ],
          });
        }
        async function _(_, _, _) {
          const _ = _.map((_) => _.nAccountID).join(","),
            _ = _.map((_) => _.nPartnerID).join(","),
            _ = _.map((_) => _.strEmailOverride).join(","),
            _ = _.map((_) => (_.bAllowRegistrationIfFull ? "1" : "0")).join(
              ",",
            );
          let _ = new FormData();
          _.append("sessionid", (0, _._)()),
            _.append("gid", _),
            _.append("accounts", _),
            _.append("partnerids", _),
            _.append("emailoverride", _),
            _.append("allowregistrationiffull", _),
            _.append("forceupdate", _ ? "1" : "0");
          const _ = `${_._.PARTNER_BASE_URL}/meetsteam/ajaxinviteusers`;
          try {
            const _ = await _().post(_, _, {
              withCredentials: !0,
            });
            if (_?.data?.success != _._) {
              let _ = (0, _._)(_);
              console.error(
                "DisplayPartnerEventRow error: " + _.strErrorMsg,
                _,
              );
            }
            return _?.data;
          } catch (_) {
            let _ = (0, _._)(_);
            console.error("DisplayPartnerEventRow error: " + _.strErrorMsg, _);
          }
          return null;
        }
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__._(_);
        function _(_) {
          const _ = _(),
            _ = _.useContext(_),
            _ = (0, _._)(_(_, _, _));
          return _.isLoading ? null : _.data;
        }
        function _(_) {
          const _ = _(),
            _ = _.useContext(_);
          return (0, _._)({
            queries: _.map((_) => _(_, _, _)),
          });
        }
        function _(_) {
          return ReactQueryClient.getQueryData([
            "MeetSteamAllRegistrationStatus",
            _,
          ]);
        }
        function _(_) {
          const { loadMeetSteamAllRegistration: _, children: _ } = _,
            _ = React.useMemo(
              () => ({
                loadMeetSteamAllRegistration: _,
              }),
              [_],
            );
          return React.createElement(
            _.Provider,
            {
              value: _,
            },
            _,
          );
        }
        const _ = _.createContext({
          loadMeetSteamAllRegistration: async (_, _) => await _(_).load(_),
        });
        function _(_, _, _) {
          return {
            queryKey: ["MeetSteamAllRegistrationStatus", _],
            queryFn: () => _.loadMeetSteamAllRegistration(_, _),
            enabled: !!_,
          };
        }
        let _;
        function _(_) {
          return (
            _ ||
              (_ = new (_())(
                async (_) => {
                  const _ = _._.Init(_._);
                  _.Body().set_gids([..._]), _.Body().set_type(_._._);
                  const _ = await _._.GetMultipleUserActionData(_, _);
                  if (!_.BSuccess())
                    throw `Failed to call GetMultipleUserActionData with details: ${_.GetErrorMessage()}`;
                  const _ = new Map();
                  return (
                    _.Body()
                      .entries()
                      .forEach((_) => {
                        try {
                          const _ = JSON.parse(_.jsondata());
                          if (!("steamid" in _) || !_.steamid) {
                            _.steamid = _.steamid();
                            const _ = new _._(_.steamid);
                            _.accountid = _.GetAccountID();
                          }
                          const _ = _.gid();
                          return (
                            _.has(_) ? _.get(_).push(_) : _.set(_, [_]), [_]
                          );
                        } catch {
                          throw `Failed to parse GetMultipleUserActionData with details: ${_.steamid()}`;
                        }
                      }),
                    _.map((_) => _.get(_) ?? null)
                  );
                },
                {
                  maxBatchSize: 5,
                },
              )),
            _
          );
        }
        var _ = __webpack_require__("chunkid");
        function _(_, _) {
          const _ = (0, _._)(),
            _ = _.useContext(_),
            _ = (0, _._)(_(_, _, _, _));
          return _.isLoading ? null : _.data;
        }
        function _(_, _) {
          const _ = (0, _._)(),
            _ = _.useContext(_);
          return (0, _._)({
            queries: _.map((_, _) => _(_, _, _, _[_])),
          });
        }
        function _(_, _) {
          return _._.getQueryData(["PartnerEmailAndName", _, _]);
        }
        function _(_) {
          const { loadPartnerEmailAndName: _, children: _ } = _,
            _ = React.useMemo(
              () => ({
                loadPartnerEmailAndName: _,
              }),
              [_],
            );
          return React.createElement(
            _.Provider,
            {
              value: _,
            },
            _,
          );
        }
        const _ = _.createContext({
          loadPartnerEmailAndName: async (_, _, _) =>
            await _(_).load({
              accountID: _,
              partnerID: _,
            }),
        });
        function _(_, _, _, _) {
          return {
            queryKey: ["PartnerEmailAndName", _, _],
            queryFn: () => _.loadPartnerEmailAndName(_, _, _),
            enabled: !!_ || !!_,
          };
        }
        let _;
        function _(_) {
          return (
            _ ||
              (_ = new (_())(
                async (_) => {
                  const _ = _._.Init(_);
                  _.Body().set_accountids(_.map((_) => _.accountID)),
                    _.Body().set_partnerids(_.map((_) => _.partnerID));
                  const _ = await _.GetBatchPartnerEmailAndName(_, _);
                  if (!_.BSuccess())
                    throw `Failed to call GetBatchPartnerEmailAndName with details: ${_.GetErrorMessage()}`;
                  const _ = new Map();
                  return (
                    _.Body()
                      .info()
                      .forEach((_) => {
                        _.set(
                          "" + _.accountid() + "_" + _.partnerid(),
                          _.toObject(),
                        );
                      }),
                    _.map(
                      (_) =>
                        _.get("" + _.accountID + "_" + _.partnerID) ?? null,
                    )
                  );
                },
                {
                  maxBatchSize: 100,
                },
              )),
            _
          );
        }
        function _(_) {
          const { rgEventGIDs: _ } = _,
            [_, _, _] = (0, _._)(),
            [_, _] = (0, _.useState)(null);
          return (0, _.jsxs)(_.Fragment, {
            children: [
              (0, _.jsx)("span", {
                children: " | ",
              }),
              (0, _.jsx)("a", {
                href: "#",
                onClick: (_) => {
                  _.preventDefault(), _.stopPropagation(), _();
                },
                children: "Analyse Top Partner Coverage",
              }),
              (0, _.jsx)(_._, {
                active: _,
                children: (0, _.jsx)(_._, {
                  children: (0, _.jsx)(_._, {
                    closeModal: _,
                    bAllowFullSize: !0,
                    bDisableBackgroundDismiss: !0,
                    children:
                      _ == null
                        ? (0, _.jsx)(_, {
                            rgEventGIDs: _,
                            fnSelectedEvents: _,
                          })
                        : (0, _.jsxs)(_.Fragment, {
                            children: [
                              (0, _.jsx)(_, {
                                rgGidMeetSteamEvents: _,
                              }),
                              (0, _.jsx)(_._, {
                                onClick: () => _(null),
                                children: "Reset Selection",
                              }),
                            ],
                          }),
                  }),
                }),
              }),
            ],
          });
        }
        const _ = (0, _._)();
        function _(_) {
          return (
            (_ = _?.filter(
              (_, _) =>
                _ == 0 ||
                !_.slice(0, _).some((_) => _.accountid == _.accountid),
            )),
            _?.map(
              (_) =>
                _.name || _(_.accountid, _.partner_id)?.realname || _.accountid,
            ).join(",") || ""
          );
        }
        function _(_) {
          return _(_.cell.getValue());
        }
        function _(_, _) {
          const _ = _(_),
            [_, _, _] = (0, _.useMemo)(() => {
              if (_.filter((_) => !_.isLoading).length != _.length)
                return [null, [], []];
              const _ = new Map(),
                _ = new Set(_),
                _ = new Map();
              _.forEach((_) =>
                _.data.forEach((_) => {
                  if (
                    _.has(_.partner_id) &&
                    (_.has(_.partner_id)
                      ? _.get(_.partner_id).push(_)
                      : _.set(_.partner_id, [_]),
                    !_.name)
                  ) {
                    const _ = _.accountid;
                    _.set(`${_}_${_.partner_id}`, {
                      accountID: _,
                      partnerID: _.partner_id,
                    });
                  }
                }),
              );
              const _ = Array.from(_.values());
              return [_, _.map((_) => _.accountID), _.map((_) => _.partnerID)];
            }, [_, _]),
            _ = _(_, _);
          return _.filter((_) => !_.isLoading).length == _.length ? _ : null;
        }
        function _(_) {
          const { rgGidMeetSteamEvents: _ } = _,
            _ = _(),
            _ = (0, _._)(_),
            _ = _(_, _),
            _ = (0, _.useMemo)(() => {
              if (!_ || !_) return null;
              const _ = [];
              return (
                _.forEach((_) => {
                  const _ = _.get(_);
                  _.push({
                    partner_id: _,
                    partner_name: (0, _._)(_)?.name || "Unknown",
                    invitations:
                      _?.filter(
                        (_) =>
                          _.invited &&
                          !Object.keys(_).some((_) =>
                            _.startsWith("registration_emailed"),
                          ),
                      ) || [],
                    registrations:
                      _?.filter((_) =>
                        Object.keys(_).some((_) =>
                          _.startsWith("registration_emailed"),
                        ),
                      ) || [],
                  });
                }),
                _
              );
            }, [_, _, _]),
            _ = (0, _.useMemo)(
              () => [
                _.accessor("partner_id", {
                  header: "Partner ID",
                  size: 100,
                }),
                _.accessor("partner_name", {
                  header: "Partner Name",
                  size: 300,
                }),
                _.accessor("invitations", {
                  header: "Invitations",
                  cell: _,
                  size: 300,
                }),
                _.accessor("registrations", {
                  header: "Registered to Attend",
                  cell: _,
                  size: 300,
                }),
              ],
              [],
            );
          function _() {
            const _ = [],
              _ = [];
            for (const _ of _) _.push(_.header);
            _.push(_);
            for (const _ of _) {
              const _ = [];
              for (const _ of _) {
                const _ = _[_.accessorKey];
                _.push(
                  _.accessorKey == "invitations" ||
                    _.accessorKey == "registrations"
                    ? _(_)
                    : _.toString(),
                );
              }
              _.push(_);
            }
            _._.WriteCSVToFile(_, "partneranalysis.csv");
          }
          return (0, _.jsxs)(_.Fragment, {
            children: [
              (0, _.jsx)(_._, {
                children: "Partner Analysis",
              }),
              _
                ? (0, _.jsxs)(_._, {
                    children: [
                      (0, _.jsx)(_._, {
                        _: "download-csv",
                        onClick: _,
                        style: {
                          width: "120px",
                        },
                        children: "Download CSV",
                      }),
                      (0, _.jsx)(_._, {
                        columns: _,
                        data: _,
                        getRowKey: (_) => _,
                        stickyHeader: !0,
                        nItemHeight: 28,
                        overscan: _.length,
                      }),
                      (0, _.jsx)("br", {}),
                      (0, _.jsx)(_._, {
                        _: "download-csv",
                        onClick: _,
                        style: {
                          width: "120px",
                        },
                        children: "Download CSV",
                      }),
                    ],
                  })
                : (0, _.jsx)(_._, {
                    string: (0, _._)("#Loading"),
                    position: "center",
                  }),
            ],
          });
        }
        function _(_) {
          const { rgEventGIDs: _, fnSelectedEvents: _ } = _,
            [_, _] = (0, _.useState)([]),
            { bShowArchived: _, setShowArchived: _ } = _(),
            { bIsLoading: _, events: _ } = (0, _._)(_),
            _ = (0, _.useMemo)(() => {
              const _ = Math.floor(new Date().getTime() / 1e3);
              return _ && _ ? [..._] : _?.filter((_) => _.endTime >= _);
            }, [_, _]);
          return _
            ? (0, _.jsx)(_._, {
                string: "Loading...",
              })
            : (0, _.jsxs)(_.Fragment, {
                children: [
                  (0, _.jsx)(_._, {
                    checked: _,
                    onChange: _,
                    label: "Show Past Events",
                  }),
                  (0, _.jsx)(_._, {
                    children: "Choose Events",
                  }),
                  _.map((_) =>
                    (0, _.jsx)(
                      _,
                      {
                        gidClanEvent: _.GID,
                        rgSelected: _,
                        fnSetSelected: _,
                      },
                      _.GID,
                    ),
                  ),
                  (0, _.jsx)(_._, {
                    disabled: _.length == 0,
                    onClick: () => _(_),
                    children: "Continue",
                  }),
                ],
              });
        }
        function _(_) {
          const { gidClanEvent: _, rgSelected: _, fnSetSelected: _ } = _,
            _ = (0, _._)(_).GetNameWithFallback(_.Bhc);
          return (0, _.jsx)(_._, {
            label: _,
            checked: _.includes(_),
            onChange: (_) => {
              const _ = _.indexOf(_),
                _ = _ >= 0;
              _ && !_
                ? _([..._, _])
                : !_ && _ && _([..._.slice(0, _), ..._.slice(_ + 1)]);
            },
          });
        }
        function _() {
          const [_] = (0, _.useState)(() =>
            (0, _._)("partners_to_verify", "application_config"),
          );
          return _;
        }
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__._(_);
        function _(_) {
          const { hideModal: _, gid: _ } = _,
            _ = _(_),
            _ = (0, _._)(),
            [_, _] = (0, _.useMemo)(
              () =>
                _
                  ? [
                      _.length,
                      _.filter(
                        (_) =>
                          !_.invitation_emailed &&
                          !_.invite_registration_auto_create,
                      ).length,
                    ]
                  : [0, 0],
              [_],
            );
          return (0, _.jsxs)(_._, {
            bAlertDialog: !0,
            bAllowFullSize: !0,
            bDisableBackgroundDismiss: !0,
            closeModal: _,
            strDescription:
              "Every account with an invitation or a registration on this event, and where each one is. Rows with no invite are people who registered themselves from the registration link; they are never sent an invitation email.",
            strTitle: "Invitation And Registration Status",
            children: [
              !_ &&
                (0, _.jsx)(_._, {
                  size: "medium",
                  position: "center",
                  string: (0, _._)("#Loading"),
                }),
              _ &&
                (0, _.jsxs)(_.Fragment, {
                  children: [
                    (0, _.jsxs)("div", {
                      children: [
                        "There are ",
                        _,
                        " invitation/registration records.",
                      ],
                    }),
                    _ > 0 &&
                      (0, _.jsxs)(_._, {
                        onClick: async () => {
                          await _(_, _);
                        },
                        children: [
                          _,
                          " invitation emails are queued for this event. Send them all now?",
                        ],
                      }),
                    (0, _.jsxs)("table", {
                      children: [
                        (0, _.jsx)("thead", {
                          children: (0, _.jsxs)("tr", {
                            children: [
                              (0, _.jsx)("th", {
                                children: "SteamID",
                              }),
                              (0, _.jsx)("th", {
                                children: "Name",
                              }),
                              (0, _.jsx)("th", {
                                children: "invited",
                              }),
                              (0, _.jsx)("th", {
                                children: "Invite Emailed",
                              }),
                              (0, _.jsx)("th", {
                                children: "Partner",
                              }),
                              (0, _.jsx)("th", {
                                children: "Email Override",
                              }),
                            ],
                          }),
                        }),
                        (0, _.jsx)("tbody", {
                          children: _?.map((_) =>
                            (0, _.jsx)(
                              _,
                              {
                                reg: _,
                              },
                              "regentry_" + _.steamid,
                            ),
                          ),
                        }),
                      ],
                    }),
                  ],
                }),
            ],
          });
        }
        function _(_) {
          const { reg: _ } = _,
            [_] = (0, _._)(_.partner_id);
          return (0, _.jsxs)("tr", {
            children: [
              (0, _.jsx)("td", {
                children: _.steamid,
              }),
              (0, _.jsx)("td", {
                children: _.name,
              }),
              (0, _.jsx)("td", {
                children: _.invited ? "YES" : "",
              }),
              (0, _.jsx)("td", {
                children: _.invitation_emailed ? "YES" : "",
              }),
              (0, _.jsxs)("td", {
                children: [_?.name, " (", _.partner_id, ")"],
              }),
              (0, _.jsx)("td", {
                children: _.email_override,
              }),
            ],
          });
        }
        function _(_) {
          const { hideModal: _, gid: _, title: _, group: _, session: _ } = _,
            _ = (0, _._)(),
            _ = _(_),
            _ = _(_, _, _?.group_id),
            [_, _] = (0, _.useMemo)(() => {
              const _ = _?.data?.filter((_) => _.session_id == _._),
                _ = new Map(),
                _ = new Map();
              return (
                _?.forEach((_) => {
                  const _ = new _._(_.steamid).GetAccountID();
                  if ((_.set(_, _), _.jsondata)) {
                    const _ = JSON.parse(_.jsondata);
                    _.pre_event_partner_questions &&
                      _.set(_, _.pre_event_partner_questions);
                  }
                }),
                [_, _]
              );
            }, [_, _]),
            _ = _?.filter((_) => _.has(new _._(_.steamid).GetAccountID()));
          return (0, _.jsxs)(_._, {
            bAlertDialog: !0,
            bAllowFullSize: !0,
            bDisableBackgroundDismiss: !0,
            closeModal: _,
            strDescription: "Show who is registered for this session",
            strTitle: "Session Registration",
            children: [
              (0, _.jsx)("div", {
                className: _().ExportToCSV,
                children: (0, _.jsx)("a", {
                  onClick: () => _(_, _, _, _, _, _),
                  children: "Export to CSV",
                }),
              }),
              (0, _.jsxs)("table", {
                className: _().Table,
                children: [
                  (0, _.jsx)("thead", {
                    children: (0, _.jsxs)("tr", {
                      children: [
                        (0, _.jsx)("th", {
                          children: "SteamID",
                        }),
                        (0, _.jsx)("th", {
                          children: "Name",
                        }),
                        (0, _.jsx)("th", {
                          children: "Invited",
                        }),
                        (0, _.jsx)("th", {
                          children: "Partner",
                        }),
                        (0, _.jsx)("th", {
                          children: "Game",
                        }),
                        (0, _.jsx)("th", {
                          children: "Email Override",
                        }),
                        (0, _.jsxs)("th", {
                          children: [
                            "Guest Count ",
                            (0, _.jsx)(_._, {
                              tooltip:
                                "Additional guests, doesn't include main registrant",
                            }),
                          ],
                        }),
                        (0, _.jsx)("th", {
                          children: "Reg Confirm Email Sent",
                        }),
                        _.ask_registration_question &&
                          (0, _.jsx)("th", {
                            children: "Answer",
                          }),
                      ],
                    }),
                  }),
                  (0, _.jsx)("tbody", {
                    children: _?.flatMap((_) => {
                      const _ = new _._(_.steamid).GetAccountID(),
                        _ = [
                          (0, _.jsx)(
                            _,
                            {
                              group: _,
                              regInfo: _.get(_),
                              inviteInfo: _,
                              preRegQuestions: _.get(_),
                            },
                            "regrow" + _.steamid,
                          ),
                        ];
                      for (let _ = 0; _ < _.guest_names?.length; _++)
                        _.push(
                          (0, _.jsx)(
                            _,
                            {
                              guestName: _.guest_names[_],
                            },
                            "regguestrow" + _.steamid + "_" + _,
                          ),
                        );
                      return _;
                    }),
                  }),
                ],
              }),
            ],
          });
        }
        function _(_, _, _, _, _, _) {
          const _ = [],
            _ = [
              "SteamID",
              "Name",
              "Invited",
              "Partner",
              "Game",
              "Email Override",
              "Guest Count",
              "Reg Confirmation Email Sent",
            ];
          _.ask_registration_question && _.push("Pre Reg Answer"),
            _.push(_),
            _.forEach((_) => {
              const _ = [],
                _ = _.partner_id ? (0, _._)(_.partner_id) : void 0;
              _.push("" + _.steamid),
                _.push(_.name),
                _.push(_.invited ? "YES" : ""),
                _.push(_ ? `${_?.name} (${_.partner_id})` : ""),
                _.push(_.game ? `Game: ${_.game}` : ""),
                _.push(_.email_override),
                _.push(
                  "" + (_.guests_registered ? _.guests_registered - 1 : 0),
                );
              const _ = new _._(_.steamid);
              if (_.has(_.GetAccountID())) {
                const _ = _.get(_.GetAccountID()),
                  _ = _(_, _);
                if (_) {
                  const _ = new Date(_ * 1e3)
                    .toISOString()
                    .replace("T", " ")
                    .split(".")[0];
                  _.push(_);
                } else _.push("");
              } else _.push("");
              if (_.ask_registration_question) {
                const _ = _.get(_.GetAccountID())?.find(
                  (_) => _.group_id == _.group_id,
                );
                _ && _.push(_.question);
              }
              _.push(_);
              for (let _ = 0; _ < _.guest_names?.length; _++) {
                const _ = [];
                _.push("(guest)"), _.push(_.guest_names[_]), _.push(_);
              }
            });
          const _ =
            `meetsteam_${_}_${(0, _._)(_.rtime_start)}_at_${(0, _._)(_.rtime_start)}.csv`.replace(
              /[ <>:"/\\|?*\x00-\x1F]/g,
              "_",
            );
          _._.WriteCSVToFile(_, _);
        }
        function _(_, _) {
          const _ = `registration_emailed_${_.group_id}_${_.session_id}`;
          let _ = null;
          return _ in _ && (_ = _[_]), _;
        }
        function _(_) {
          const { inviteInfo: _, regInfo: _, group: _, preRegQuestions: _ } = _,
            [_] = (0, _._)(_.partner_id),
            _ = _(_, _);
          return (0, _.jsxs)("tr", {
            children: [
              (0, _.jsx)("td", {
                children: _.steamid,
              }),
              (0, _.jsx)("td", {
                children: _.name,
              }),
              (0, _.jsx)("td", {
                children: _.invited ? "YES" : "",
              }),
              (0, _.jsx)("td", {
                children: _?.name ?? `(${_.partner_id})`,
              }),
              (0, _.jsx)("td", {
                children: _.game ? `Game: ${_.game}` : "",
              }),
              (0, _.jsx)("td", {
                children: _.email_override,
              }),
              (0, _.jsx)("td", {
                children: _.guests_registered ? _.guests_registered - 1 : 0,
              }),
              (0, _.jsx)("td", {
                children: _ ? (0, _._)(_) : "",
              }),
              _.ask_registration_question &&
                (0, _.jsx)("td", {
                  children:
                    _?.find((_) => _.group_id == _.group_id)?.question || "",
                }),
            ],
          });
        }
        function _(_) {
          const { guestName: _ } = _;
          return (0, _.jsxs)("tr", {
            children: [
              (0, _.jsx)("td", {
                children: "(guest)",
              }),
              (0, _.jsx)("td", {
                children: _,
              }),
            ],
          });
        }
        async function _(_, _) {
          let _ = new FormData();
          _.append("sessionid", (0, _._)()), _.append("gid", _);
          const _ = `${_._.PARTNER_BASE_URL}/meetsteam/ajaxsendinviteemails`;
          try {
            const _ = await _().post(_, _, {
              withCredentials: !0,
            });
            if (_?.data?.success != _._) {
              let _ = (0, _._)(_);
              console.error("AsyncSendInviteEmails error: " + _.strErrorMsg, _);
            }
            return (
              _.invalidateQueries({
                queryKey: ["useMeetSteamAllRegistrationStatus", _],
              }),
              _?.data
            );
          } catch (_) {
            let _ = (0, _._)(_);
            console.error("AsyncSendInviteEmails error: " + _.strErrorMsg, _);
          }
          return null;
        }
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        async function _(_) {
          const _ = {
              sessionid: (0, _._)(),
              gids: _,
            },
            _ = `${_._.PARTNER_BASE_URL}meetsteam/admin/ajaxgetregistrations`,
            _ = await fetch(_, {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(_),
            });
          if (!_._)
            throw new Error(
              `Failed to read registrations for gids ${_.join(",")}`,
            );
          const _ = await _.json();
          if (_.success != _._)
            throw new Error(
              `Failed to read registrations for gids ${_.join(",")}: ${_.msg}`,
            );
          return _.lists ?? [];
        }
        function _(_) {
          return (0, _._)({
            queryKey: [],
            queryFn: async () => await _(_),
            enabled: _ && _.length > 0,
          });
        }
        function _(_) {
          return ["MeetSteamGetRegistration", ...(_ || []).sort()];
        }
        function _(_) {
          const { rgEventGIDs: _ } = _,
            [_, _, _] = (0, _._)(),
            [_, _] = (0, _.useState)(null);
          return (0, _.jsxs)(_.Fragment, {
            children: [
              (0, _.jsx)("span", {
                children: " | ",
              }),
              (0, _.jsx)("a", {
                href: "#",
                onClick: (_) => {
                  _.preventDefault(), _.stopPropagation(), _();
                },
                children: "Show Registration Across Events",
              }),
              (0, _.jsx)(_._, {
                active: _,
                children: (0, _.jsx)(_._, {
                  children: (0, _.jsx)(_._, {
                    closeModal: _,
                    bAllowFullSize: !0,
                    bDisableBackgroundDismiss: !0,
                    children:
                      _ == null
                        ? (0, _.jsx)(_, {
                            rgEventGIDs: _,
                            fnSelectedEvents: _,
                          })
                        : (0, _.jsxs)(_.Fragment, {
                            children: [
                              (0, _.jsx)(_, {
                                rgGidMeetSteamEvents: _,
                              }),
                              (0, _.jsx)(_._, {
                                onClick: () => _(null),
                                children: "Reset Selection",
                              }),
                            ],
                          }),
                  }),
                }),
              }),
            ],
          });
        }
        function _(_) {
          const _ = _(_),
            _ = (0, _._)(),
            { bIsLoading: _, events: _ } = (0, _._)(_),
            { data: _ } = _(_),
            [_, _, _] = (0, _.useMemo)(() => {
              if (
                _ ||
                !_ ||
                _.length == 0 ||
                _.filter((_) => !_.isLoading).length != _.length
              )
                return [null, null, null];
              const _ = new Array(),
                _ = new Set(),
                _ = new Map();
              _.forEach((_) => {
                _.data.forEach((_) => {
                  _.guests_registered > 0 &&
                    (_.push(_), _.partner_id && _.add(_.partner_id));
                });
              });
              const _ = new Map();
              return (
                _.forEach((_) => {
                  _.jsondata.meet_steam_groups?.forEach((_) => {
                    _.sessions?.forEach((_) => {
                      _.set(
                        `${_.GID}_${_.group_id}_${_._}`,
                        `${_.localized_session_title[_.Bhc]}@${(0, _._)(_.rtime_start)} ${(0, _._)(_.rtime_start)}`,
                      );
                    });
                  });
                }),
                _.forEach((_) => {
                  _.rgRegistrations.forEach((_) => {
                    const _ = new _._(_.steamid).GetAccountID(),
                      _ =
                        _.get(`${_.gid}_${_.group_id}_${_.session_id}`) ||
                        `${_.group_id}:${_.session_id}`;
                    _.has(_) ? _.set(_, _.get(_) + `,${_}`) : _.set(_, _);
                  });
                }),
                [Array.from(_), _, _]
              );
            }, [_, _, _, _]);
          return (0, _._)(_)
            ? {
                rgAllRegistrations: _,
                rgPartnerIDs: _,
                rgValveAccounts: _,
                rgMapAccountToSessionTimes: _,
              }
            : {
                rgAllRegistrations: void 0,
                rgPartnerIDs: void 0,
                rgValveAccounts: void 0,
                rgMapAccountToSessionTimes: void 0,
              };
        }
        const _ = (0, _._)();
        function _(_) {
          const { rgGidMeetSteamEvents: _ } = _,
            {
              rgAllRegistrations: _,
              rgPartnerIDs: _,
              rgValveAccounts: _,
              rgMapAccountToSessionTimes: _,
            } = _(_),
            _ = (0, _._)(_),
            _ = (0, _.useMemo)(() => {
              if (!_ || !_ || !_ || !_) return null;
              const _ = new Map();
              _.forEach((_) => _.set(_._, _));
              const _ = [];
              return (
                _.forEach((_) => {
                  const _ = (0, _._)(_.partner_id),
                    _ = (0, _._)(_.partner_id);
                  _.push({
                    partner_id: _.partner_id ? "" + _.partner_id : "",
                    partner_name: _?.name || "Unknown",
                    name: _.name,
                    game: _.game || "",
                    accountid: _.accountid,
                    email: _.email_override,
                    guest_registrated: _.guests_registered - 1,
                    guest_names:
                      _.guest_names?.length > 0 ? _.guest_names.join(",") : "",
                    business_contact:
                      _ && _.length > 0
                        ? _.filter((_) => _.is_business_contact)
                            .map((_) => {
                              const _ = new _._(_.steamid);
                              return (
                                _.get(_.GetAccountID())?.displayName ||
                                _.steamid
                              );
                            })
                            .join(",")
                        : "",
                    sessions: _.get(_.accountid) || "missing data",
                  });
                }),
                _
              );
            }, [_, _, _, _]),
            _ = _();
          return !_ || !_ || !_
            ? (0, _.jsx)(_._, {
                string: (0, _._)("#Loading"),
              })
            : (0, _.jsxs)(_.Fragment, {
                children: [
                  (0, _.jsx)(_._, {
                    children: "Registations",
                  }),
                  _
                    ? (0, _.jsxs)(_._, {
                        children: [
                          (0, _.jsx)(_, {
                            rgData: _,
                          }),
                          (0, _.jsx)(_._, {
                            columns: _,
                            data: _,
                            getRowKey: (_) => _,
                            stickyHeader: !0,
                            nItemHeight: 28,
                            overscan: _.length,
                          }),
                          (0, _.jsx)("br", {}),
                          (0, _.jsx)(_, {
                            rgData: _,
                          }),
                        ],
                      })
                    : (0, _.jsx)(_._, {
                        string: (0, _._)("#Loading"),
                        position: "center",
                      }),
                ],
              });
        }
        function _() {
          return (0, _.useMemo)(
            () => [
              _.accessor("name", {
                header: "Name",
                size: 200,
              }),
              _.accessor("accountid", {
                header: "Account ID",
                size: 150,
              }),
              _.accessor("email", {
                header: "Email",
                size: 150,
              }),
              _.accessor("guest_registrated", {
                header: "Guest Count",
                size: 100,
              }),
              _.accessor("guest_names", {
                header: "Guest's Names",
                size: 100,
              }),
              _.accessor("partner_id", {
                header: "Partner ID",
                size: 100,
              }),
              _.accessor("partner_name", {
                header: "Partner Name",
                size: 300,
              }),
              _.accessor("game", {
                header: "Game Name",
                size: 150,
              }),
              _.accessor("business_contact", {
                header: "Business Contact",
                size: 150,
              }),
              _.accessor("sessions", {
                header: "Sessions",
                size: 150,
              }),
            ],
            [],
          );
        }
        function _(_) {
          const { rgData: _ } = _,
            _ = _();
          return (0, _.jsx)(_._, {
            _: "download-csv",
            onClick: () =>
              (0, _._)(
                "registrationdump.csv",
                _,
                _.map((_) => ({
                  accessorKey: _.accessorKey,
                  header:
                    typeof _.header == "string"
                      ? _.header
                      : (_.accessorKey ?? ""),
                })),
              ),
            style: {
              width: "120px",
            },
            children: "Download CSV",
          });
        }
        const _ = _.createContext(void 0);
        function _(_) {
          const { children: _ } = _,
            [_, _] = _("search", ""),
            [_, _] = (0, _.useState)(() => _ || ""),
            _ = (0, _.useCallback)(
              (_) => {
                _(_), _(_ || void 0, !0);
              },
              [_],
            ),
            _ = (0, _.useMemo)(
              () => ({
                strSearch: _,
                setSearch: _,
              }),
              [_, _],
            );
          return (0, _.jsx)(_.Provider, {
            value: _,
            children: _,
          });
        }
        const _ = () => {
          const _ = (0, _.useContext)(_);
          if (!_)
            throw new Error(
              "useMeetSteamSearch must be used within MeetSteamSearchProvider",
            );
          return _;
        };
        function _(_, _) {
          const _ = _?.trim().toLowerCase();
          return _ ? !!_ && _.toLowerCase().includes(_) : !0;
        }
        function _(_, _) {
          const _ = _?.trim().toLowerCase();
          if (!_ || !_)
            return [
              {
                strText: _ || "",
                bMatch: !1,
              },
            ];
          const _ = new Array(),
            _ = _.toLowerCase();
          let _ = 0;
          for (let _ = _.indexOf(_); _ >= 0; _ = _.indexOf(_, _))
            _ > _ &&
              _.push({
                strText: _.slice(_, _),
                bMatch: !1,
              }),
              _.push({
                strText: _.slice(_, _ + _.length),
                bMatch: !0,
              }),
              (_ = _ + _.length);
          return (
            _ < _.length &&
              _.push({
                strText: _.slice(_),
                bMatch: !1,
              }),
            _
          );
        }
        function _(_) {
          const { text: _ } = _,
            { strSearch: _ } = _(),
            _ = (0, _.useMemo)(() => _(_, _), [_, _]);
          return (0, _.jsx)(_.Fragment, {
            children: _.map((_, _) =>
              _.bMatch
                ? (0, _.jsx)(
                    "span",
                    {
                      className: _().SearchMatch,
                      children: _.strText,
                    },
                    _,
                  )
                : (0, _.jsx)(
                    _.Fragment,
                    {
                      children: _.strText,
                    },
                    _,
                  ),
            ),
          });
        }
        function _(_) {
          const _ = _._.InitFromClanID((0, _._)()),
            _ = _(),
            { bShowArchived: _, setShowArchived: _ } = _(),
            { strSearch: _, setSearch: _ } = _(),
            { bIsLoading: _, events: _ } = (0, _._)(_),
            {
              rgEventsByMonth: _,
              cEvents: _,
              cMatchingEvents: _,
            } = _.useMemo(() => {
              if (!_)
                return {
                  rgEventsByMonth: null,
                  cEvents: 0,
                  cMatchingEvents: 0,
                };
              const _ =
                  _ && _
                    ? [..._]
                    : _?.filter((_) => _.endTime >= new Date().getTime() / 1e3),
                _ = _.filter((_) => _(_, _)),
                _ = Array.from(
                  (0, _._)(_, (_) => (0, _._)(new Date(_.startTime * 1e3))),
                );
              return (
                _?.sort((_) => -_[0]),
                {
                  rgEventsByMonth: _,
                  cEvents: _.length,
                  cMatchingEvents: _.length,
                }
              );
            }, [_, _, _]);
          return _
            ? (0, _.jsx)(_._, {})
            : _
              ? (0, _.jsxs)("div", {
                  children: [
                    (0, _.jsxs)("div", {
                      children: [
                        (0, _.jsx)("a", {
                          href: `${_._.COMMUNITY_BASE_URL}gid/${_.ConvertTo64BitString()}/partnerevents/`,
                          children: "Open Meet Steam Event Dashboard",
                        }),
                        (0, _.jsx)(_, {
                          rgEventGIDs: _,
                        }),
                        (0, _.jsx)(_, {
                          rgEventGIDs: _,
                        }),
                      ],
                    }),
                    (0, _.jsx)(_._, {
                      checked: _,
                      onChange: _,
                      label: "Show Past Events",
                    }),
                    (0, _.jsxs)("div", {
                      className: _().SearchLine,
                      children: [
                        (0, _.jsx)(_._, {
                          type: "text",
                          placeholder: "Search events",
                          tooltip:
                            "In-memory search of the event id, title and description, and of the session group titles, descriptions and intended audience",
                          value: _,
                          onChange: (_) => _(_?.currentTarget?.value || ""),
                        }),
                        !!_.trim() &&
                          (0, _.jsxs)("div", {
                            className: _().SearchSummary,
                            children: [
                              "Showing ",
                              _,
                              " of ",
                              _,
                              " events \xA0",
                              (0, _.jsx)("a", {
                                href: "#",
                                onClick: (_) => {
                                  _.preventDefault(), _("");
                                },
                                children: "Clear",
                              }),
                            ],
                          }),
                      ],
                    }),
                    (0, _.jsx)("hr", {}),
                    _.map((_) =>
                      (0, _.jsx)(
                        _,
                        {
                          month: new Date(_[0] * 1e3),
                          events: _[1],
                        },
                        _[0],
                      ),
                    ),
                  ],
                })
              : null;
        }
        function _(_, _) {
          if (!_?.trim()) return !0;
          const _ = [
            _.GID,
            _.GetNameWithFallback(_.Bhc),
            _.GetDescriptionWithFallback(_.Bhc),
          ];
          return (
            _.jsondata.meet_steam_groups?.forEach((_) => {
              _.push(_._.GetWithFallback(_.localized_session_title, _.Bhc)),
                _.push(
                  _._.GetWithFallback(_.localized_session_description, _.Bhc),
                ),
                _.push(
                  _._.GetWithFallback(_.localized_intended_audience, _.Bhc),
                ),
                _.push(_._.GetWithFallback(_.localized_sesssion_faq, _.Bhc));
            }),
            _.some((_) => _(_, _))
          );
        }
        function _(_) {
          const { month: _, events: _ } = _,
            _ = _.useMemo(() => [..._].sort((_) => -_.startTime), [_]),
            _ = {
              year: "numeric",
              month: "long",
            },
            _ = new Intl.DateTimeFormat(navigator.language, _).format(_);
          return (0, _.jsxs)("div", {
            children: [
              (0, _.jsx)("div", {
                className: _().MonthTitle,
                children: _,
              }),
              (0, _.jsx)("div", {
                className: _().MonthEvents,
                children: _.map((_) =>
                  (0, _.jsx)(
                    _,
                    {
                      oEvent: _,
                    },
                    _.GID,
                  ),
                ),
              }),
            ],
          });
        }
        function _(_) {
          const { oEvent: _ } = _,
            _ = _.GID,
            _ = _._.InitFromClanID((0, _._)()),
            _ = (0, _._)((0, _._)(), _),
            _ = _.isSuccess ? _.data : null,
            _ = _.GetNameWithFallback(_.Bhc),
            _ = (0, _.useMemo)(() => {
              const _ = new Array();
              return (
                _.jsondata.meet_steam_groups?.forEach((_) => {
                  _.sessions.forEach((_, _) => {
                    _.push({
                      group: _,
                      session: _,
                      firstSession: _ == 0,
                    });
                  });
                }),
                _
              );
            }, [_.jsondata.meet_steam_groups]);
          return (0, _.jsxs)("div", {
            className: _().EventRow,
            children: [
              (0, _.jsxs)("div", {
                className: _().EventMainDetails,
                children: [
                  (0, _.jsxs)("div", {
                    className: _().TitleLine,
                    children: [
                      (0, _.jsx)("div", {
                        className: _().Title,
                        children: (0, _.jsx)(_, {
                          text: _,
                        }),
                      }),
                      (0, _.jsx)("div", {
                        className: _().StartDate,
                        children: (0, _._)(_?.startTime),
                      }),
                    ],
                  }),
                  (0, _.jsxs)("div", {
                    className: _().ActionLine,
                    children: [
                      (0, _.jsx)("div", {
                        children: (0, _.jsx)("a", {
                          href: `${_._.COMMUNITY_BASE_URL}gid/${_.ConvertTo64BitString()}/partnerevents/edit/${_}`,
                          children: "Edit",
                        }),
                      }),
                      (0, _.jsxs)("div", {
                        children: [
                          "\xA0|\xA0",
                          (0, _.jsx)("a", {
                            href: `${_._.STORE_BASE_URL}meetsteam/${_}`,
                            children: "View",
                          }),
                        ],
                      }),
                      !!(
                        _.BIsUnlistedEvent() &&
                        _.jsondata.meet_steam_groups?.length > 0
                      ) &&
                        (0, _.jsxs)(_.Fragment, {
                          children: [
                            (0, _.jsx)(_, {
                              gid: _,
                            }),
                            "\xA0|\xA0",
                            (0, _.jsx)("a", {
                              href: `${_._.STORE_BASE_URL}meetsteam/attendance?gid=${_}&accountid=${_._.accountid}`,
                              children: "QR Page",
                            }),
                            "\xA0|\xA0",
                            (0, _.jsx)("a", {
                              href: `${_._.STORE_BASE_URL}meetsteam/attendeelist?gid=${_}`,
                              children: "Attendance List",
                            }),
                            (0, _.jsx)(_, {
                              gid: _,
                            }),
                            (0, _.jsx)(_, {
                              gid: _,
                            }),
                            (0, _.jsx)(_, {
                              gid: _,
                            }),
                            (0, _.jsx)(_, {
                              gid: _,
                            }),
                          ],
                        }),
                    ],
                  }),
                ],
              }),
              (0, _.jsx)("div", {
                children: (0, _.jsxs)("table", {
                  className: "landingTable",
                  children: [
                    (0, _.jsx)("thead", {
                      children: (0, _.jsxs)("tr", {
                        children: [
                          (0, _.jsx)("th", {
                            children: "Group",
                          }),
                          (0, _.jsx)("th", {
                            children: "Session Start",
                          }),
                          (0, _.jsx)("th", {
                            children: "Session Duration",
                          }),
                          (0, _.jsx)("th", {
                            children: "Seats",
                          }),
                          (0, _.jsx)("th", {
                            style: {
                              width: "50px",
                            },
                            children: "Registered",
                          }),
                          (0, _.jsx)("th", {
                            style: {
                              width: "50px",
                            },
                            children: "Guests",
                          }),
                          (0, _.jsx)("th", {
                            style: {
                              width: "100px",
                            },
                            children: "Details",
                          }),
                        ],
                      }),
                    }),
                    (0, _.jsxs)("tbody", {
                      children: [
                        (0, _.jsxs)("tr", {
                          children: [
                            _.length > 0
                              ? (0, _.jsx)(
                                  _,
                                  {
                                    gid: _,
                                    group: _[0].group,
                                    session: _[0].session,
                                    rgAvailability: _,
                                  },
                                  _[0].session._,
                                )
                              : (0, _.jsxs)(_.Fragment, {
                                  children: [
                                    (0, _.jsx)("td", {
                                      children: "None",
                                    }),
                                    (0, _.jsx)("td", {}),
                                    (0, _.jsx)("td", {}),
                                    (0, _.jsx)("td", {}),
                                    (0, _.jsx)("td", {}),
                                    (0, _.jsx)("td", {}),
                                  ],
                                }),
                            (0, _.jsx)("td", {
                              children:
                                !(
                                  _?.BIsUnlistedEvent() &&
                                  _.jsondata.meet_steam_groups?.length > 0
                                ) &&
                                (0, _.jsx)("div", {
                                  children:
                                    "Invite Disabled. Event need to publish into Unlisted State",
                                }),
                            }),
                          ],
                        }),
                        _.filter((_, _) => _ > 0).map((_) =>
                          (0, _.jsx)(
                            "tr",
                            {
                              children: (0, _.jsx)(_, {
                                group: _.group,
                                gid: _,
                                session: _.session,
                                rgAvailability: _,
                                firstSession: _.firstSession,
                              }),
                            },
                            _.session._,
                          ),
                        ),
                      ],
                    }),
                  ],
                }),
              }),
            ],
          });
        }
        function _(_) {
          const { gid: _ } = _,
            _ = _();
          return Array.from(_.keys()).includes(_)
            ? (0, _.jsxs)(_.Fragment, {
                children: [
                  "\xA0|\xA0",
                  (0, _.jsx)("a", {
                    href: `${_._.PARTNER_BASE_URL}meetsteam/survey/${_}`,
                    children: "Survey",
                  }),
                ],
              })
            : null;
        }
        function _(_) {
          const { gid: _ } = _,
            [_, _, _] = (0, _._)();
          return (0, _.jsxs)("div", {
            children: [
              "\xA0|\xA0",
              (0, _.jsxs)("a", {
                href: "#",
                onClick: (_) => {
                  _.preventDefault(), _.stopPropagation(), _();
                },
                children: [
                  "Invite via CSV",
                  (0, _.jsx)(_._, {
                    tooltip:
                      "This will email invitee and show the users on the dashboard (if not already invited).  We need csv with accountid,partnerid,email_override (optional)",
                  }),
                ],
              }),
              (0, _.jsx)(_._, {
                children: (0, _.jsx)(_._, {
                  active: _,
                  children: (0, _.jsx)(_, {
                    hideModal: _,
                    gid: _,
                  }),
                }),
              }),
            ],
          });
        }
        function _(_) {
          const { gid: _ } = _,
            [_, _, _] = (0, _._)();
          return (0, _.jsxs)("div", {
            children: [
              "\xA0|\xA0",
              (0, _.jsx)("a", {
                href: "#",
                onClick: (_) => {
                  _.preventDefault(), _.stopPropagation(), _();
                },
                children: "Invite",
              }),
              (0, _.jsx)(_._, {
                children: (0, _.jsx)(_._, {
                  active: _,
                  children: (0, _.jsx)(_, {
                    hideModal: _,
                    gid: _,
                  }),
                }),
              }),
            ],
          });
        }
        function _(_) {
          const { gid: _ } = _,
            [_, _, _] = (0, _._)();
          return (0, _.jsxs)("div", {
            children: [
              "\xA0|\xA0",
              (0, _.jsx)("a", {
                href: "#",
                onClick: (_) => {
                  _.preventDefault(), _.stopPropagation(), _();
                },
                children: "Show Invites",
              }),
              (0, _.jsx)(_._, {
                children: (0, _.jsx)(_._, {
                  active: _,
                  children: (0, _.jsx)(_, {
                    hideModal: _,
                    gid: _,
                  }),
                }),
              }),
            ],
          });
        }
        function _(_) {
          const { gid: _ } = _,
            _ = (0, _._)(),
            [_, _] = (0, _.useState)(!1),
            [_, _] = (0, _.useState)(null);
          return (0, _.jsxs)("div", {
            children: [
              (0, _.jsx)("a", {
                href: "#",
                onClick: async (_) => {
                  _.preventDefault(), _.stopPropagation(), _(!0);
                  const _ = await _(_, _);
                  _(_);
                },
                children: "Email Self",
              }),
              (0, _.jsx)(_._, {
                active: _,
                children: (0, _.jsxs)(_._, {
                  bAlertDialog: !0,
                  strTitle: "Test Emails",
                  closeModal: () => {
                    _(!1), _(null);
                  },
                  onOK: () => {},
                  children: [
                    (0, _.jsx)("div", {
                      children:
                        "This will temporarily register and then de-register you from the event as a way to test the email sending code.",
                    }),
                    _ == null &&
                      (0, _.jsx)(_._, {
                        string: (0, _._)("#Loading"),
                      }),
                    _ == _._ &&
                      (0, _.jsx)("div", {
                        children: "Test Emails Sent",
                      }),
                    !!(_ && _ != _._) &&
                      (0, _.jsx)("div", {
                        children: "Email Failed to Send. Check console",
                      }),
                  ],
                }),
              }),
            ],
          });
        }
        async function _(_, _) {
          const _ = _._.Init(_),
            _ = _._.InitFromClanID((0, _._)());
          _.Body().set_clan_event_gid(_),
            _.Body().set_steamid(_.ConvertTo64BitString());
          const _ = await _.TestFireEmails(_, _);
          return console.log("test fire", _), _.GetEResult();
        }
        function _(_, _) {
          const _ = _().unix(_),
            _ = _().unix(_)._(_),
            _ = _.utcOffset() - _.utcOffset(),
            _ = new Date((_ + _ * 60) * 1e3),
            _ = new Date(),
            _ =
              _.getFullYear() == _.getFullYear()
                ? (0, _._)(_, !1, !1)
                : (0, _._)(_, !1, !1),
            _ = (0, _._)(_ + _ * 60);
          return `${_} ${_} ${_.format("z")}`;
        }
        function _(_) {
          const {
              gid: _,
              group: _,
              rgAvailability: _,
              session: _,
              firstSession: _ = !0,
            } = _,
            _ = _._.GetWithFallback(_?.localized_session_title, _.Bhc),
            _ = _._.GetWithFallback(_?.localized_session_description, _.Bhc),
            _ = _._.GetWithFallback(_?.localized_intended_audience, _.Bhc),
            _ = _?.find((_) => _.group_id == _.group_id && _.session_id == _._),
            [_, _, _] = (0, _._)(),
            _ = (0, _._)(),
            _ = _(_, _, _?.group_id);
          let _ = Math.min((_?.guest_count / _.max_capacity) * 100, 100),
            _ = _?.guest_count > 0 ? `${_}%` : "0%",
            _ = _?.guest_count >= _.max_capacity;
          const _ = Intl.DateTimeFormat().resolvedOptions().timeZone,
            _ =
              _.location_type === "in_person"
                ? (_.in_person_time_zone ?? _._)
                : _;
          return (0, _.jsxs)(_.Fragment, {
            children: [
              _ && _
                ? (0, _.jsxs)("td", {
                    children: [
                      (0, _.jsx)(_, {
                        text: _,
                      }),
                      (0, _.jsx)(_._, {
                        tooltip: _,
                      }),
                      !!_ &&
                        (0, _.jsx)("div", {
                          children: (0, _.jsx)(_, {
                            text: _,
                          }),
                        }),
                    ],
                  })
                : (0, _.jsx)("td", {}),
              (0, _.jsx)("td", {
                children: (0, _.jsx)("span", {
                  children: _(_.rtime_start, _),
                }),
              }),
              (0, _.jsx)("td", {
                children: (0, _._)(_.rtime_end - _.rtime_start),
              }),
              (0, _.jsxs)("td", {
                children: [
                  _?.guest_count || 0,
                  " / ",
                  _.max_capacity,
                  (0, _.jsx)("br", {}),
                  (0, _.jsx)("div", {
                    className: _().CapacityBarMax,
                    children: (0, _.jsx)("div", {
                      className: (0, _._)(
                        _().CapacityBarCurrent,
                        _ ? _().Full : "",
                      ),
                      style: {
                        width: _,
                      },
                    }),
                  }),
                ],
              }),
              (0, _.jsx)("td", {
                children:
                  _.isSuccess &&
                  (0, _.jsx)(_.Fragment, {
                    children: _.data?.filter((_) => _.session_id == _._).length,
                  }),
              }),
              (0, _.jsx)("td", {
                children:
                  _.isSuccess &&
                  (0, _.jsx)(_.Fragment, {
                    children: _.data
                      ?.filter((_) => _.session_id == _._)
                      .reduce((_, _) => _ + _.guests_registered - 1, 0),
                  }),
              }),
              (0, _.jsxs)("td", {
                children: [
                  (0, _.jsx)(_._, {
                    onClick: _,
                    children: "Details",
                  }),
                  (0, _.jsx)(_._, {
                    children: (0, _.jsx)(_._, {
                      active: _,
                      children: (0, _.jsx)(_, {
                        gid: _,
                        title: _,
                        group: _,
                        session: _,
                        hideModal: _,
                      }),
                    }),
                  }),
                ],
              }),
            ],
          });
        }
        function _() {
          const [_] = (0, _.useState)(() =>
            (0, _._)("event_gids", "application_config"),
          );
          return _;
        }
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        function _(_) {
          const { rgEvents: _ } = _(),
            _ = _(),
            [_, _] = (0, _.useState)(""),
            _ = _._.PARTNER_BASE_URL + "meetsteam",
            _ = (0, _.useMemo)(() => {
              const _ = new Map();
              return (
                _.forEach((_) => {
                  _.results?.attending?.forEach((_) => {
                    _.has(_) ? _.set(_, _.get(_) + 1) : _.set(_, 1);
                  });
                }),
                _
              );
            }, [_]);
          return (0, _.jsxs)("div", {
            className: _().EventList,
            children: [
              (0, _.jsx)(_._, {
                type: "text",
                value: _,
                onChange: (_) => _(_.currentTarget.value.trim()),
                label: "Filter",
              }),
              (0, _.jsxs)("div", {
                children: [
                  "Total Survey Responses: ",
                  (0, _._)(_?.length || 0),
                ],
              }),
              (0, _.jsxs)("div", {
                children: [
                  "Link to partner-facing survey: ",
                  (0, _.jsx)("a", {
                    href: _,
                    children: _,
                  }),
                ],
              }),
              _.filter(
                (_) => _.length == 0 || _.name.includes(_) || _._.includes(_),
              ).map((_) =>
                (0, _.jsx)(
                  _,
                  {
                    conf: _,
                    nInterestCount: _.get(_._) ?? 0,
                    rgSurveyInterest: _,
                  },
                  _._,
                ),
              ),
              (0, _.jsx)(_, {
                rgSurveyInterest: _,
              }),
            ],
          });
        }
        function _(_) {
          const { conf: _, nInterestCount: _, rgSurveyInterest: _ } = _;
          return (0, _.jsx)(_._, {
            title: `${_.name} in ${_.place} around ${_.time}: Interest: ${(0, _._)(_)}`,
            bStartMinimized: !0,
            children: (0, _.jsx)(_, {
              conf: _,
              rgSurveyInterest: _,
            }),
          });
        }
        function _(_) {
          if (typeof _ == "number") return _;
          const _ = _.slice(-1).toUpperCase(),
            _ = parseFloat(_.slice(0, -1));
          switch (_) {
            case "K":
              return _ * 1e3;
            case "M":
              return _ * 1e6;
            case "B":
              return _ * 1e9;
            default:
              return parseFloat(_);
          }
        }
        function _(_) {
          const { conf: _, rgSurveyInterest: _ } = _,
            _ = (0, _.useMemo)(
              () => _.filter((_) => _.results?.attending?.includes(_._)),
              [_, _],
            ),
            _ = (0, _._)(),
            { bComplete: _, nCount: _ } = _(_);
          return _
            ? _?.length
              ? !_ || _.length == 0
                ? (0, _.jsx)("div", {
                    children: "No users with interest",
                  })
                : (0, _.jsx)(_, {
                    conf: _,
                    rgSurveyInterest: _,
                  })
              : (0, _.jsx)(_._, {
                  position: "center",
                  string:
                    "Loading Valve Account info (this shouldn't take long)",
                })
            : (0, _.jsx)(_._, {
                position: "center",
                string: `Loading ${_} of ${_.length}`,
              });
        }
        function _(_) {
          const { conf: _, rgSurveyInterest: _ } = _,
            _ = (0, _._)();
          return (0, _.jsxs)("div", {
            children: [
              (0, _.jsx)(_._, {
                onClick: () => {
                  const _ = [];
                  _.push([
                    "AccountID",
                    "Partner ID",
                    "Valve Partner Contacts",
                    "Email Override",
                    "Account Name",
                    "Name",
                    "Have you met steam",
                    "Survey Time",
                    "Attending Other Event Count",
                    "Country",
                    "Alt Language",
                    "Partner Name",
                    "Gross USD",
                    "Best AppID",
                    "Best AppID Name",
                    "Long Term Sales Rank",
                  ]),
                    _.forEach((_) => {
                      const _ = [],
                        _ = new _._(_.steamid);
                      _.push("" + _.GetAccountID());
                      const _ = (0, _._)(_.GetAccountID()),
                        _ = _.results.partner_id;
                      _.push("" + _);
                      const _ = (0, _._)(_).map(
                        (_) => (0, _._)(_, _)?.displayName || "" + _,
                      );
                      _.push(_.join("|"));
                      const _ = _.results.email_override || "";
                      _.push("" + _),
                        _.push(_?.m_strPlayerName ? _.m_strPlayerName : "");
                      const _ = _(_.GetAccountID(), _);
                      if (
                        (_.push(_ ? _.realname : ""),
                        _.push(_.results.have_you_met_steam ? "yes" : "no"),
                        _.results.submit_time)
                      ) {
                        const _ = _.results.submit_time,
                          _ = new Date(_ * 1e3)
                            .toISOString()
                            .replace("T", " ")
                            .split(".")[0];
                        _.push(_);
                      } else _.push("");
                      _.push("" + _.results.attending?.length),
                        _.push(_.results.country_code),
                        _.push(
                          _.results.preferred_language
                            ? (0, _.LgB)(_.results.preferred_language)
                            : "",
                        );
                      const _ = (0, _._)(_);
                      _.push(_ ? _.name : "");
                      const _ = _(_, _);
                      _
                        ? (_.push("" + _(_.strGrossUSD)),
                          _.push("" + _.nBestAppID),
                          _.push(_._.Get().GetApp(_.nBestAppID)?.GetName()),
                          _.push("" + _.nBestAppLongTermSalesRank))
                        : (_.push(""), _.push(""), _.push(""), _.push("")),
                        _.push(_);
                    });
                  const _ =
                    _.name.replace(" ", "_") + "_conference_interest.csv";
                  _._.WriteCSVToFile(_, _);
                },
                children: "Export to CSV",
              }),
              (0, _.jsxs)("table", {
                className: "landingTable",
                children: [
                  (0, _.jsx)("thead", {
                    children: (0, _.jsxs)("tr", {
                      children: [
                        (0, _.jsx)("th", {
                          children: "Name and Email",
                        }),
                        (0, _.jsx)("th", {
                          children: "Have you met steam?",
                        }),
                        (0, _.jsx)("th", {
                          children: "Partner",
                        }),
                        (0, _.jsx)("th", {
                          children: "Valve Contacts",
                        }),
                        (0, _.jsx)("th", {
                          children: "Partner Revenue",
                        }),
                        (0, _.jsx)("th", {
                          children: "Biggest Game",
                        }),
                        (0, _.jsx)("th", {
                          children: "Long Term Sales Rank",
                        }),
                        (0, _.jsx)("th", {
                          children: "Attending count?",
                        }),
                        (0, _.jsx)("th", {
                          children: "Alt Language",
                        }),
                        (0, _.jsx)("th", {
                          children: "Country",
                        }),
                        (0, _.jsx)("th", {
                          children: "Submit Survey Time",
                        }),
                      ],
                    }),
                  }),
                  (0, _.jsx)("tbody", {
                    children: _.map((_) =>
                      (0, _.jsx)(
                        _,
                        {
                          strsteamid: _.steamid,
                          partnerID: _.results.partner_id,
                          registration: _.results,
                        },
                        _._ + "_" + _.steamid,
                      ),
                    ),
                  }),
                ],
              }),
            ],
          });
        }
        function _(_) {
          const { partnerID: _, registration: _ } = _;
          return (0, _.jsxs)("tr", {
            children: [
              (0, _.jsx)("td", {
                children: (0, _.jsx)(_, {
                  ..._,
                }),
              }),
              (0, _.jsx)("td", {
                children: _.have_you_met_steam ? "" : "NO",
              }),
              (0, _.jsx)(_, {
                nPartnerID: _,
              }),
              (0, _.jsx)("td", {
                children: _.attending.length,
              }),
              (0, _.jsx)("td", {
                children:
                  _.english_not_good && _.preferred_language
                    ? (0, _.LgB)(_.preferred_language)
                    : "",
              }),
              (0, _.jsx)("td", {
                children: _.country_code,
              }),
              (0, _.jsx)("td", {
                children: (0, _._)(_.submit_time),
              }),
            ],
          });
        }
        function _(_) {
          const { strsteamid: _, partnerID: _, registration: _ } = _,
            _ = (0, _._)(_),
            _ = new _._(_),
            _ = _(_.GetAccountID(), _),
            _ = _?.realname || _.data?.m_strPlayerName;
          return (0, _.jsxs)(_.Fragment, {
            children: [
              (0, _.jsx)("span", {
                children: _,
              }),
              (0, _.jsx)("br", {}),
              (0, _.jsx)("span", {
                children: _.email_override || _?.email,
              }),
            ],
          });
        }
        function _(_) {
          const { nPartnerID: _ } = _,
            [_] = (0, _._)(_),
            _ = _(_),
            _ = (0, _._)(_),
            _ = (0, _._)();
          return (0, _.jsxs)(_.Fragment, {
            children: [
              (0, _.jsx)("td", {
                children: _ ? _?.name + ` (${_})` : _,
              }),
              (0, _.jsx)("td", {
                children: _?.map(
                  (_) => (0, _._)(_, _)?.displayName || "" + _,
                ).join(","),
              }),
              (0, _.jsxs)("td", {
                children: ["$", _?.strGrossUSD],
              }),
              (0, _.jsx)("td", {
                children:
                  _?.nBestAppID > 0
                    ? (0, _.jsx)(_, {
                        appid: _?.nBestAppID,
                      })
                    : "N/A",
              }),
              (0, _.jsx)("td", {
                children: _?.nBestAppLongTermSalesRank,
              }),
            ],
          });
        }
        const _ = {};
        function _(_) {
          const { appid: _ } = _,
            _ = (0, _._)(_),
            { data: _ } = (0, _._)(_);
          return (0, _.jsx)(_._, {
            _: _,
            children: (0, _.jsx)("span", {
              children: _?.name || _,
            }),
          });
        }
        function _() {
          const [_] = (0, _.useState)(() =>
            (0, _._)("interest_results", "application_config"),
          );
          return (0, _.useMemo)(
            () => _.map((_) => ((_.results = JSON.parse(_.jsondata)), _)),
            [_],
          );
        }
        function _(_) {
          const { rgSurveyInterest: _ } = _,
            _ = (0, _._)(),
            _ = (0, _._)(),
            _ = (0, _.useMemo)(
              () => _.filter((_) => _.results?.suggestion?.trim().length > 0),
              [_],
            );
          return (0, _.jsxs)(_._, {
            title: `Alternative Suggestions (${_.length})`,
            bStartMinimized: !0,
            children: [
              (0, _.jsx)(_._, {
                onClick: () => {
                  const _ = [];
                  _.push([
                    "AccountID",
                    "Partner ID",
                    "Email Override",
                    "Account Name",
                    "name",
                    "Attending Other Event Count",
                    "Country",
                    "Alt Language",
                    "Partner Name",
                    "Gross USD",
                    "Best AppID",
                    "Long Term Sales Rank",
                    "Suggestion",
                  ]),
                    _.forEach((_) => {
                      const _ = [],
                        _ = new _._(_.steamid);
                      _.push("" + _.GetAccountID());
                      const _ = (0, _._)(_.GetAccountID()),
                        _ = _.results.partner_id;
                      _.push("" + _);
                      const _ = _.results.email_override || "";
                      _.push("" + _),
                        _.push(_?.m_strPlayerName ? _.m_strPlayerName : "");
                      const _ = _(_.GetAccountID(), _);
                      _.push(_ ? _.realname : ""),
                        _.push("" + _.results.attending?.length),
                        _.push(_.results.country_code),
                        _.push(
                          _.results.preferred_language
                            ? (0, _.LgB)(_.results.preferred_language)
                            : "",
                        );
                      const _ = (0, _._)(_);
                      _.push(_ ? _.name : "");
                      const _ = _(_, _);
                      _
                        ? (_.push("" + _(_.strGrossUSD)),
                          _.push("" + _.nBestAppID),
                          _.push("" + _.nBestAppLongTermSalesRank))
                        : (_.push(""), _.push(""), _.push("")),
                        _.push(_.results.suggestion),
                        _.push(_);
                    }),
                    _._.WriteCSVToFile(_, "suggestsion.csv");
                },
                children:
                  "Export to CSV (wait until the table populates fully)",
              }),
              (0, _.jsxs)("table", {
                className: "landingTable",
                children: [
                  (0, _.jsx)("thead", {
                    children: (0, _.jsxs)("tr", {
                      children: [
                        (0, _.jsx)("th", {
                          children: "Name and Email",
                        }),
                        (0, _.jsx)("th", {
                          children: "Partner",
                        }),
                        (0, _.jsx)("th", {
                          children: "Valve Contacts",
                        }),
                        (0, _.jsx)("th", {
                          children: "Partner Revenue",
                        }),
                        (0, _.jsx)("th", {
                          children: "Biggest Game",
                        }),
                        (0, _.jsx)("th", {
                          children: "Long Term Sales Rank",
                        }),
                        (0, _.jsx)("th", {
                          children: "Suggestions",
                        }),
                      ],
                    }),
                  }),
                  (0, _.jsx)("tbody", {
                    children: _.map((_) =>
                      (0, _.jsx)(
                        _,
                        {
                          survey: _,
                        },
                        "suggested" + _.steamid,
                      ),
                    ),
                  }),
                ],
              }),
            ],
          });
        }
        function _(_) {
          const { survey: _ } = _,
            _ = new _._(_.steamid);
          return (0, _.jsxs)("tr", {
            children: [
              (0, _.jsx)("td", {
                children: (0, _.jsx)(_, {
                  strsteamid: _.steamid,
                  partnerID: _.results.partner_id,
                  registration: _.results,
                }),
              }),
              (0, _.jsx)(_, {
                nPartnerID: _.results.partner_id,
              }),
              (0, _.jsx)("td", {
                children: _.results.suggestion.trim(),
              }),
            ],
          });
        }
        function _(_) {
          const _ = _.useContext(_);
          return (0, _._)(_(_, _));
        }
        function _(_) {
          const _ = React.useContext(_);
          return useQueries({
            queries: _.map((_) => _(_, _)),
          });
        }
        function _(_) {
          return _._.getQueryData(["UserEmailAndLangs", _]);
        }
        function _(_) {
          const { loadUserEmailAndLangs: _, children: _ } = _,
            _ = React.useMemo(
              () => ({
                loadUserEmailAndLangs: _,
              }),
              [_],
            );
          return React.createElement(
            _.Provider,
            {
              value: _,
            },
            _,
          );
        }
        const _ = _.createContext({
          loadUserEmailAndLangs: async (_) => await _().load(_),
        });
        function _(_, _) {
          return {
            queryKey: ["UserEmailAndLangs", _],
            queryFn: () => _.loadUserEmailAndLangs(_),
            enabled: !!_,
          };
        }
        let _;
        function _() {
          return (
            _ ||
              (_ = new (_())(
                async (_) => {
                  const _ = `${_._.PARTNER_BASE_URL}meetsteam/ajaxbatchgetuseremails`,
                    _ = {
                      sessionid: (0, _._)(),
                      strAccountIDs: _.join(","),
                    },
                    _ = await _().get(_, {
                      params: _,
                      withCredentials: !0,
                    });
                  if (!_ || _?.status != 200 || _?.data?.success != _._)
                    throw `Failed to load app to user email and langs: ${((0, _._))(_).strErrorMsg}`;
                  const _ = new Map();
                  return (
                    _.data.users.forEach((_) => {
                      const _ = new _._(_.steamid);
                      _.set(_.GetAccountID(), _);
                    }),
                    _.map((_) => _.get(_) ?? null)
                  );
                },
                {
                  maxBatchSize: 100,
                },
              )),
            _
          );
        }
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        function _(_) {
          const _ = (0, _._)(),
            _ = (0, _._)(),
            _ = _(_),
            _ = (0, _.useMemo)(() => {
              if (!_ || !_) return null;
              const _ = new Set(_.map((_) => _._));
              return _.filter((_) => !_.has(_.accountid)).sort(
                (_, _) => _.clan_event_gids?.length - _.clan_event_gids.length,
              );
            }, [_, _]);
          return _
            ? (0, _.jsxs)("div", {
                children: [
                  (0, _.jsxs)(_._, {
                    onClick: () => {
                      const _ = [];
                      _.push([
                        "User Name",
                        "account id",
                        "Email",
                        "Event Count",
                      ]),
                        _.forEach((_) => {
                          const _ = (0, _._)(_.accountid),
                            _ = _(_.accountid);
                          _.push([
                            _?.m_strPlayerName || "",
                            "" + _.accountid,
                            _?.email_address || "",
                            _.clan_event_gids?.length.toLocaleString(
                              (0, _._)(),
                            ),
                          ]);
                        }),
                        _._.WriteCSVToFile(_, "sale_operators.csv");
                    },
                    children: [
                      "CSV Export",
                      (0, _.jsx)(_._, {
                        tooltip:
                          "Wait until the page finishes loading before export",
                      }),
                    ],
                  }),
                  (0, _.jsxs)("table", {
                    children: [
                      (0, _.jsx)("thead", {
                        children: (0, _.jsxs)("tr", {
                          children: [
                            (0, _.jsx)("th", {
                              children: "User",
                            }),
                            (0, _.jsx)("th", {
                              children: "Email",
                            }),
                            (0, _.jsx)("th", {
                              children: "Events",
                            }),
                          ],
                        }),
                      }),
                      (0, _.jsx)("tbody", {
                        children: _.map((_) =>
                          (0, _.jsx)(
                            _,
                            {
                              organizer: _,
                            },
                            _.accountid,
                          ),
                        ),
                      }),
                    ],
                  }),
                ],
              })
            : (0, _.jsx)(_._, {
                string: (0, _._)("#Loading"),
                size: "medium",
              });
        }
        function _(_) {
          const { organizer: _ } = _,
            _ = (0, _.useMemo)(
              () => _._.InitFromAccountID(_.accountid).ConvertTo64BitString(),
              [_],
            ),
            _ = (0, _._)(_),
            _ = _(_.accountid),
            _ = _.data?.m_strPlayerName || "";
          return (0, _.jsxs)("tr", {
            children: [
              (0, _.jsxs)("td", {
                children: [_, " (", _.accountid, ")"],
              }),
              (0, _.jsx)("td", {
                children: _?.data?.email_address,
              }),
              (0, _.jsx)("td", {
                children: (0, _.jsx)(_, {
                  name: _,
                  rgClanEventGIDs: _.clan_event_gids,
                }),
              }),
            ],
          });
        }
        function _(_) {
          const { name: _, rgClanEventGIDs: _ } = _,
            [_, _, _] = (0, _._)();
          return (0, _.jsxs)(_.Fragment, {
            children: [
              (0, _.jsxs)(_._, {
                onClick: _,
                children: ["See ", (0, _._)(_.length), " Events"],
              }),
              (0, _.jsx)(_._, {
                active: _,
                children: (0, _.jsx)(_._, {
                  bAlertDialog: !0,
                  closeModal: _,
                  strTitle: `${_}'s Events`,
                  children: _.map((_) =>
                    (0, _.jsx)(
                      _,
                      {
                        gid: _,
                      },
                      _,
                    ),
                  ),
                }),
              }),
            ],
          });
        }
        function _(_) {
          const { gid: _ } = _,
            _ = (0, _._)(_);
          return _
            ? (0, _.jsxs)("a", {
                href: `${_._.COMMUNITY_BASE_URL}gid/${_.clanSteamID.ConvertTo64BitString()}/partnerevents/edit/${_}`,
                target: "_blank",
                children: [
                  (0, _.jsx)("div", {
                    children: _.GetNameWithFallback(_.Bhc),
                  }),
                  (0, _.jsx)("img", {
                    src: _.GetImageURL("capsule", _.Bhc),
                  }),
                ],
              })
            : (0, _.jsxs)("div", {
                children: ["Loading ", _],
              });
        }
        function _(_) {
          const _ = (_) =>
              window.sessionStorage.setItem("meetsteamadmin", `?tab=${_.key}`),
            _ = [
              {
                name: "Interest Survey Results",
                key: "survey",
                contents: (0, _.jsx)(_._, {
                  children: (0, _.jsx)(_, {}),
                }),
                onClick: _,
              },
              {
                name: "Event Management",
                key: "event",
                contents: (0, _.jsx)(_._, {
                  children: (0, _.jsx)(_, {}),
                }),
                onClick: _,
              },
              {
                name: "Sale Operators",
                key: "saleops",
                contents: (0, _.jsx)(_._, {
                  children: (0, _.jsx)(_, {}),
                }),
                onClick: _,
              },
              {
                name: "Post Event Surveys",
                key: "postsurvey",
                contents: (0, _.jsx)(_._, {
                  children: (0, _.jsx)(_, {}),
                }),
                onClick: _,
              },
            ];
          return (0, _.jsx)(_, {
            children: (0, _.jsx)(_, {
              children: (0, _.jsxs)("div", {
                className: _().AdminPageCtn,
                children: [
                  (0, _.jsxs)("div", {
                    className: _().PageTitle,
                    children: [
                      "Meet Steam Admin Dashboard ",
                      (0, _._)("current_year", "application_config"),
                    ],
                  }),
                  (0, _.jsx)("hr", {}),
                  (0, _.jsx)(_._, {
                    tabs: _,
                  }),
                  (0, _.jsx)("div", {
                    className: _().ClearThings,
                  }),
                  (0, _.jsx)("br", {}),
                ],
              }),
            }),
          });
        }
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__._(_);
        function _(_) {
          const _ = _(),
            _ = _(),
            { data: _ } = (0, _._)(_._.accountid),
            [_, _] = (0, _.useState)(!1),
            [_, _] = (0, _.useState)(!1),
            [_, _] = (0, _.useState)(!1),
            [_, _] = (0, _.useState)(() => JSON.parse(JSON.stringify(_)));
          return _
            ? !_ || _.m_bPlayerNamePending
              ? (0, _.jsx)(_._, {
                  size: "medium",
                  position: "center",
                  string: (0, _._)("#Loading"),
                })
              : (0, _.jsxs)("div", {
                  className: (0, _._)(_().AdminPageCtn, _().Ctn),
                  children: [
                    (0, _.jsx)("div", {
                      className: _().PageTitle,
                      children: (0, _._)("#MeetSteam_MainTitle"),
                    }),
                    (0, _.jsx)("hr", {}),
                    (0, _.jsx)("div", {
                      className: _().ColumnCtn,
                      children: (0, _.jsxs)("div", {
                        className: _().LeftCol,
                        children: [
                          (0, _.jsxs)("div", {
                            className: _().SectionCtn,
                            children: [
                              (0, _.jsxs)("h1", {
                                children: [
                                  " ",
                                  (0, _._)(
                                    "#MeetSteam_Intro",
                                    _.m_strPlayerName,
                                    (0, _.jsx)("br", {}),
                                  ),
                                ],
                              }),
                              (0, _.jsx)("p", {
                                className: _().IntroText,
                                children: (0, _._)("#MeetSteam_Desc1"),
                              }),
                            ],
                          }),
                          (0, _.jsx)("div", {
                            className: _().SectionCtn,
                            children: (0, _.jsx)(_, {
                              oRegistration: _,
                              fnSetRegistration: _,
                            }),
                          }),
                          (0, _.jsx)("div", {
                            className: _().SectionCtn,
                            children: (0, _.jsx)(_, {
                              oRegistration: _,
                              fnSetRegistration: _,
                            }),
                          }),
                          (0, _.jsxs)("div", {
                            className: (0, _._)(_().SectionCtn, _().ActionBar),
                            children: [
                              (0, _.jsx)(_._, {
                                onClick: async () => {
                                  _(!0), _(!1), _(!1);
                                  const _ = `${_._.PARTNER_BASE_URL}meetsteam/ajaxregisterinterest`,
                                    _ = new FormData();
                                  _.append("sessionid", (0, _._)()),
                                    _.append(
                                      "registrationJson",
                                      JSON.stringify(_),
                                    );
                                  try {
                                    const _ = await _().post(_, _, {
                                      withCredentials: !0,
                                    });
                                    _.data.success != _._
                                      ? (console.error(
                                          "MeetSteamLanding failed " +
                                            _.data.success,
                                        ),
                                        _(!0))
                                      : _(!0);
                                  } catch (_) {
                                    console.error(
                                      "MeetSteamLanding failed caught",
                                      _,
                                    );
                                  }
                                  _(!1);
                                },
                                children: (0, _._)("#Button_Submit"),
                              }),
                              _ &&
                                (0, _.jsx)(_._, {
                                  size: "medium",
                                  position: "center",
                                  string: (0, _._)("#Saving"),
                                }),
                              _ &&
                                (0, _.jsx)("div", {
                                  children: (0, _._)("#Button_Saved"),
                                }),
                              _ &&
                                (0, _.jsx)("div", {
                                  className: _.ErrorStylesWithIcon,
                                  children: (0, _._)(
                                    "#Error_ErrorCommunicatingWithNetwork",
                                  ),
                                }),
                            ],
                          }),
                        ],
                      }),
                    }),
                  ],
                })
            : (0, _.jsx)("div", {
                className: _().Ctn,
                children: (0, _._)("#MeetSteam_closed"),
              });
        }
        function _(_) {
          const { oRegistration: _, fnSetRegistration: _ } = _,
            { rgEvents: _, rgOldEvents: _, selectConference: _ } = _();
          return (0, _.jsxs)(_.Fragment, {
            children: [
              (0, _.jsx)("h1", {
                children: (0, _._)("#MeetSteam_Events_Interest"),
              }),
              (0, _.jsx)("p", {
                children: (0, _._)(
                  "#MeetSteam_Events_title",
                  (0, _._)("meet_steam_year", "application_config") || "2025",
                ),
              }),
              (0, _.jsxs)("p", {
                children: [
                  (0, _.jsx)("span", {
                    className: _().Indicator,
                    children: "*",
                  }),
                  " ",
                  (0, _._)("#MeetSteam_Events_desc"),
                ],
              }),
              !!_ &&
                (0, _.jsxs)(_.Fragment, {
                  children: [
                    (0, _.jsx)("hr", {}),
                    (0, _.jsx)("p", {
                      children: (0, _._)("#MeetSteam_ConferenceOrg"),
                    }),
                    (0, _.jsx)(_, {
                      ..._,
                      rgConference: [_],
                    }),
                    (0, _.jsx)("br", {}),
                    (0, _.jsx)("br", {}),
                    (0, _.jsx)("hr", {}),
                    (0, _.jsx)("h2", {
                      children: (0, _._)("#MeetSteam_OtherConference"),
                    }),
                  ],
                }),
              (0, _.jsx)(_, {
                ..._,
                rgConference: _,
              }),
              (0, _.jsx)("br", {}),
              (0, _.jsx)(_._, {
                type: "text",
                value: _.suggestion || "",
                onChange: (_) =>
                  _({
                    ..._,
                    suggestion: _.currentTarget.value,
                  }),
                label: (0, _._)("#MeetSteam_others"),
              }),
              _?.length > 0 &&
                (0, _.jsx)(_._, {
                  bStartMinimized: !0,
                  title: (0, _._)("#MeetSteam_PastEvents", _.length),
                  children: (0, _.jsx)(_, {
                    ..._,
                    rgConference: _,
                  }),
                }),
            ],
          });
        }
        function _(_) {
          const { rgConference: _ } = _;
          return (0, _.jsxs)("table", {
            children: [
              (0, _.jsx)("thead", {
                children: (0, _.jsxs)("tr", {
                  children: [
                    (0, _.jsx)("th", {}),
                    (0, _.jsx)("th", {}),
                    (0, _.jsx)("th", {}),
                    (0, _.jsx)("th", {}),
                  ],
                }),
              }),
              (0, _.jsx)("tbody", {
                children: _.map((_) =>
                  (0, _.jsxs)(
                    "tr",
                    {
                      children: [
                        (0, _.jsx)("td", {
                          children: _.attending
                            ? (0, _.jsx)("span", {
                                className: _().Indicator,
                                children: "*",
                              })
                            : "",
                        }),
                        (0, _.jsxs)("td", {
                          children: [
                            (0, _.jsx)("div", {
                              children: _.name,
                            }),
                            (0, _.jsx)("div", {
                              children: _.place,
                            }),
                          ],
                        }),
                        (0, _.jsx)("td", {
                          children: (0, _.jsx)("div", {
                            children: _.time,
                          }),
                        }),
                        (0, _.jsx)("td", {
                          children: (0, _.jsx)(_, {
                            ..._,
                            conf: _,
                          }),
                        }),
                      ],
                    },
                    _._,
                  ),
                ),
              }),
            ],
          });
        }
        function _(_) {
          const { oRegistration: _, fnSetRegistration: _, conf: _ } = _;
          return (0, _.jsx)(_._, {
            checked: _.attending?.includes(_._),
            onChange: (_) => {
              let _ = _.attending ? [..._.attending] : [];
              _ && !_.includes(_._)
                ? (_.push(_._),
                  _({
                    ..._,
                    attending: _,
                  }))
                : !_ &&
                  _.includes(_._) &&
                  (_.splice(_.indexOf(_._), 1),
                  _({
                    ..._,
                    attending: _,
                  }));
            },
            tooltip: (0, _._)("#MeetSteam_attend_ttip"),
          });
        }
        function _(_) {
          const { oRegistration: _, fnSetRegistration: _ } = _,
            _ = (0, _._)(_._.accountid),
            _ = _(_?.partner_id),
            [_, _] = (0, _.useState)(
              () => !!((_.email_override && _.email_override != _) || !_),
            ),
            [_, _, _] = (0, _._)(() => [
              !_.have_you_met_steam,
              !!_.english_not_good,
              _.preferred_language,
            ]);
          return _.data
            ? (0, _.jsxs)("div", {
                children: [
                  (0, _.jsx)("h1", {
                    children: (0, _._)("#MeetSteam_You"),
                  }),
                  (0, _.jsx)("p", {
                    children: (0, _._)("#MeetSteam_You_Desc"),
                  }),
                  (0, _.jsx)(_, {
                    nPartnerID: _.partner_id,
                    label: (0, _._)("#MeetSteam_You_Company"),
                    setPartnerID: (_) =>
                      _({
                        ..._,
                        partner_id: _,
                      }),
                  }),
                  (0, _.jsxs)("div", {
                    className: _().EmailInfoRow,
                    children: [
                      (0, _.jsx)("div", {
                        className: _().EmailField,
                        children: (0, _.jsx)(_._, {
                          type: "string",
                          label: (0, _._)("#MeetSteam_You_Email"),
                          disabled: !_,
                          value: _.email_override || _ || "",
                          placeholder: (0, _._)("#MeetSteam_You_EmailMissing"),
                          mustBeEmail: !0,
                          onChange: (_) =>
                            _({
                              ..._,
                              email_override: _.currentTarget.value,
                            }),
                        }),
                      }),
                      !_ &&
                        (0, _.jsx)(_._, {
                          checked: _,
                          onChange: _,
                          label: (0, _._)("#MeetSteam_You_Update"),
                          tooltip: (0, _._)("#MeetSteam_You_Update_ttip"),
                        }),
                    ],
                  }),
                  (0, _.jsx)(_._, {
                    children: (0, _._)("#MeetSteam_NeverMet"),
                  }),
                  (0, _.jsx)(_._, {
                    label: (0, _._)("#MeetSteam_NeverMetNo"),
                    checked: _,
                    onChange: (_) =>
                      _({
                        ..._,
                        have_you_met_steam: !_,
                      }),
                  }),
                  (0, _.jsx)(_._, {
                    children: (0, _._)("#MeetSteam_CapabableEnglish"),
                  }),
                  (0, _.jsxs)("div", {
                    className: _().RadioButtonCtn,
                    children: [
                      (0, _.jsx)(_._, {
                        className: _().RadioButtons,
                        checked: !_,
                        onChange: (_) =>
                          _ &&
                          _({
                            ..._,
                            english_not_good: void 0,
                            preferred_language: void 0,
                          }),
                        label: (0, _._)("#MeetSteam_CapabableEnglish_Yes"),
                      }),
                      (0, _.jsx)(_._, {
                        className: _().RadioButtons,
                        checked: _,
                        onChange: (_) =>
                          _ &&
                          _({
                            ..._,
                            english_not_good: !0,
                            preferred_language: (0, _.sfN)(_._.LANGUAGE),
                          }),
                        label: (0, _._)("#MeetSteam_CapabableEnglish_No"),
                      }),
                    ],
                  }),
                  _ &&
                    (0, _.jsxs)(_.Fragment, {
                      children: [
                        (0, _.jsx)("br", {}),
                        (0, _.jsx)(_._, {
                          children: (0, _._)("#MeetSteam_LanguagePref"),
                        }),
                        (0, _.jsx)(_._, {
                          selectedLang: _,
                          bAllowUnsetOption: !1,
                          strTooltip: (0, _._)("#MeetSteam_LanguagePref_ttip"),
                          fnOnLanguageChanged: (_) =>
                            _({
                              ..._,
                              preferred_language: _,
                            }),
                        }),
                      ],
                    }),
                ],
              })
            : (0, _.jsx)(_._, {
                size: "medium",
                position: "center",
                string: (0, _._)("#Loading"),
              });
        }
        function _(_) {
          const { nPartnerID: _, setPartnerID: _, label: _ } = _,
            _ = (0, _._)(_._.accountid);
          if (!_)
            return (0, _.jsx)(_._, {
              size: "small",
              position: "center",
              string: (0, _._)("#Loading"),
            });
          if (_.length == 1) return null;
          const _ = [];
          return (
            _.forEach((_) =>
              _.push({
                label: _?.partner_name,
                data: _.partnerid,
              }),
            ),
            (0, _.jsx)(_._, {
              layout: "inline",
              label: _,
              rgOptions: _,
              selectedOption: _,
              onChange: (_) => {
                _(_.data);
              },
            })
          );
        }
        function _() {
          const [_] = (0, _.useState)(() =>
            (0, _._)("registration_open", "application_config"),
          );
          return _;
        }
        function _() {
          const [_] = (0, _.useState)(
            () => (0, _._)("user_reg", "application_config") || {},
          );
          return _;
        }
        function _() {
          const [_] = (0, _.useState)(
            () => (0, _._)("partner_user_email", "application_config") || "",
          );
          return _;
        }
        function _() {
          const [_] = (0, _.useState)(() =>
            (0, _._)("primary_partner_id", "application_config"),
          );
          return _;
        }
        function _(_) {
          const _ = _(),
            _ = _(),
            _ = _(_._.accountid, _ != _ ? _ : null);
          return _ == _ ? _ : _?.email;
        }
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__._(_);
        function _(_) {
          const { data: _ } = (0, _._)(_._.accountid),
            _ = _(),
            _ = _(),
            [_, _] = (0, _.useState)(() => _ || ""),
            { surveyGID: _ } = (0, _._)(),
            [_, _] = (0, _.useState)(!1),
            [_, _] = (0, _.useState)(!1),
            [_, _] = (0, _.useState)(!1);
          return !_ || _.m_bPlayerNamePending
            ? (0, _.jsx)(_._, {
                size: "medium",
                position: "center",
                string: (0, _._)("#Loading"),
              })
            : (0, _.jsxs)("div", {
                className: (0, _._)(_().AdminPageCtn, _().Ctn),
                children: [
                  (0, _.jsx)("div", {
                    className: _().PageTitle,
                    children: (0, _._)("#MeetSteam_PostSurvey_Title", _),
                  }),
                  (0, _.jsx)("hr", {}),
                  (0, _.jsx)("div", {
                    className: _().ColumnCtn,
                    children: (0, _.jsxs)("div", {
                      className: _().LeftCol,
                      children: [
                        (0, _.jsxs)("div", {
                          className: _().SectionCtn,
                          children: [
                            (0, _.jsx)("div", {
                              children: (0, _._)(
                                "#MeetSteam_PostSurvey_Question",
                              ),
                            }),
                            (0, _.jsx)("textarea", {
                              rows: 10,
                              onChange: (_) => _(_.currentTarget.value),
                              value: _,
                              autoFocus: !0,
                            }),
                          ],
                        }),
                        (0, _.jsxs)("div", {
                          className: (0, _._)(_().SectionCtn, _().ActionBar),
                          children: [
                            (0, _.jsx)(_._, {
                              onClick: async () => {
                                _(!0), _(!1), _(!1);
                                const _ = `${_._.PARTNER_BASE_URL}meetsteam/ajaxsubmitsurvey/${_}`,
                                  _ = new FormData();
                                _.append("gid", _),
                                  _.append("sessionid", (0, _._)());
                                let _ = {
                                  gid: _,
                                  simple_response: _,
                                  submit_time: Math.floor(
                                    new Date().getTime() / 1e3,
                                  ),
                                };
                                _.append("surveyjson", JSON.stringify(_));
                                try {
                                  const _ = await _().post(_, _, {
                                    withCredentials: !0,
                                  });
                                  _.data.success != _._
                                    ? (console.error(
                                        "MeetSteamLanding failed " +
                                          _.data.success,
                                      ),
                                      _(!0))
                                    : _(!0);
                                } catch (_) {
                                  console.error(
                                    "MeetSteamLanding failed caught",
                                    _,
                                  );
                                }
                                _(!1);
                              },
                              children: (0, _._)("#Button_Submit"),
                            }),
                            _ &&
                              (0, _.jsx)(_._, {
                                size: "medium",
                                position: "center",
                                string: (0, _._)("#Saving"),
                              }),
                            _ &&
                              (0, _.jsx)("div", {
                                children: (0, _._)("#Button_Saved"),
                              }),
                            _ &&
                              (0, _.jsx)("div", {
                                className: _.ErrorStylesWithIcon,
                                children: (0, _._)(
                                  "#Error_ErrorCommunicatingWithNetwork",
                                ),
                              }),
                          ],
                        }),
                      ],
                    }),
                  }),
                ],
              });
        }
        function _() {
          const [_] = (0, _.useState)(
            () => (0, _._)("survey_event_name", "application_config") || "",
          );
          return _;
        }
        function _() {
          const [_] = (0, _.useState)(
            () => (0, _._)("survey_data", "application_config") || "",
          );
          return _;
        }
        var _ = __webpack_require__("chunkid");
        function _(_) {
          const _ = _(),
            _ = _(),
            _ = _(),
            { surveyGID: _ } = (0, _._)(),
            { bIsLoading: _, events: _ } = (0, _._)(_),
            [_, _] = (0, _.useMemo)(
              () => [
                _.map((_) => {
                  const _ = new _._(_.steamid);
                  if (_.has(_.GetAccountID())) {
                    const _ = _.get(_.GetAccountID());
                    return JSON.parse(_[0].jsondata).partner_id;
                  }
                  return null;
                }).filter(Boolean),
                _.map((_) => new _._(_.steamid).GetAccountID()),
              ],
              [_, _],
            ),
            _ = (0, _._)(_),
            _ = (0, _._)(_);
          return _ || !_ || !_
            ? (0, _.jsx)(_._, {
                string: "Loading Event, Partner and User Info",
              })
            : (0, _.jsx)(_, {
                rgSurveyResults: _,
                mapAccountsToReg: _,
                meetSteamEvents: _,
              });
        }
        const _ = (0, _._)();
        function _(_) {
          const {
              rgSurveyResults: _,
              mapAccountsToReg: _,
              meetSteamEvents: _,
            } = _,
            _ = (0, _.useMemo)(() => {
              if (!_) return null;
              const _ = new Map();
              _.forEach((_) => _.set(_.GID, _));
              const _ = [];
              return (
                _.forEach((_) => {
                  const _ = JSON.parse(_.jsondata),
                    _ = new _._(_.steamid);
                  let _ = {
                    feedback: _.simple_response,
                    accountid: _.GetAccountID(),
                  };
                  if (_.has(_.GetAccountID())) {
                    const _ = _.get(_.GetAccountID()),
                      _ = JSON.parse(_[0].jsondata);
                    (_.partner_id = _.partner_id),
                      (_.email = _.email_override),
                      (_.name = _.name),
                      (_.registrations = "");
                    const _ = (0, _._)(_.partner_id);
                    _ && (_.partner_name = _.name),
                      _.forEach((_) => {
                        const _ = _.get(_.gidEvent);
                        if (_) {
                          const _ = _.jsondata.meet_steam_groups.find(
                            (_) => _.group_id === _.group_id,
                          ).localized_session_title[_.Bhc];
                          _.registrations.length > 0 &&
                            (_.registrations += "|"),
                            (_.registrations += _);
                        }
                      });
                  } else {
                    const _ = (0, _._)(_.GetAccountID());
                    _ && (_.name = _.persona_name);
                  }
                  _.push(_);
                }),
                _
              );
            }, [_, _, _]),
            _ = (0, _.useMemo)(
              () => [
                _.accessor("name", {
                  header: "Name",
                  size: 150,
                }),
                _.accessor("feedback", {
                  header: "Feedback",
                  size: 500,
                  cell: _._,
                }),
                _.accessor("registrations", {
                  header: "Sessions",
                  size: 200,
                  cell: _,
                }),
                _.accessor("accountid", {
                  header: "Account ID",
                  size: 150,
                }),
                _.accessor("email", {
                  header: "Email",
                  size: 150,
                }),
                _.accessor("partner_name", {
                  header: "Partner Name",
                  size: 200,
                }),
              ],
              [],
            );
          return _
            ? (0, _.jsx)(_._, {
                children: (0, _.jsxs)("div", {
                  className: _().AdminPageCtn,
                  children: [
                    (0, _.jsx)("div", {
                      className: _().PageTitle,
                      children: "Survey Results",
                    }),
                    (0, _.jsx)("hr", {}),
                    (0, _.jsx)(_._, {
                      _: "download-csv",
                      onClick: () =>
                        (0, _._)(
                          "meetsteam_survey_results.csv",
                          _,
                          _.map((_) => ({
                            accessorKey: _.accessorKey,
                            header:
                              typeof _.header == "string"
                                ? _.header
                                : (_.accessorKey ?? ""),
                          })),
                        ),
                      style: {
                        width: "120px",
                      },
                      children: "Download CSV",
                    }),
                    (0, _.jsx)("br", {}),
                    (0, _.jsx)(_._, {
                      columns: _,
                      data: _,
                      getRowKey: (_) => _,
                      stickyHeader: !0,
                      nItemHeight: 28,
                      overscan: _.length,
                    }),
                  ],
                }),
              })
            : (0, _.jsx)(_._, {
                string: (0, _._)("#Loading"),
              });
        }
        function _(_) {
          return _.getValue()?.length > 0
            ? (0, _.jsx)(_._, {
                text: _.getValue(),
                regExp: /\|/,
              })
            : "";
        }
        function _() {
          const _ = _();
          return (0, _.useMemo)(() => {
            const _ = new Map();
            return (
              _.forEach((_, _) => {
                _.forEach((_) => {
                  const _ = new _._(_.steamid);
                  _.has(_.GetAccountID()) || _.set(_.GetAccountID(), []),
                    (_.gidEvent = _),
                    _.get(_.GetAccountID()).push(_);
                });
              }),
              _
            );
          }, [_]);
        }
        function _() {
          const [_] = (0, _.useState)(() => {
            const _ = new Map(),
              _ = (0, _._)("registration_by_gid", "application_config") || {};
            for (const _ in _) {
              const _ = _[_];
              _.set(_, _);
            }
            return _;
          });
          return _;
        }
        function _() {
          const [_] = (0, _.useState)(
            () => (0, _._)("event_gids", "application_config") || [],
          );
          return _;
        }
        function _() {
          const [_] = (0, _.useState)(
            () => (0, _._)("survey_results", "application_config") || [],
          );
          return _;
        }
        const _ = {
          YearlySurvery: (_ = ":year") => `/${_}`,
          PostEventSurvey: (_ = ":surveyGID") => `/survey/${_}`,
          AdminDashboard: () => "/admin",
          PostEventSurveyResults: (_ = ":surveyGID") => `/surveyresults/${_}`,
        };
        function _(_) {
          return (
            (0, _.useEffect)(() => {
              _._.Init();
            }, []),
            (0, _.jsx)(_._, {
              children: (0, _.jsx)(_._, {
                basename: (0, _._)() + "meetsteam/",
                children: (0, _.jsxs)(_._, {
                  children: [
                    (0, _.jsx)(_._, {
                      exact: !0,
                      path: _._.DiagData(),
                      render: (_) =>
                        (0, _.jsx)(_._, {
                          ..._,
                          strConfigID: "application_config",
                        }),
                    }),
                    (0, _.jsx)(_._, {
                      exact: !0,
                      path: _.AdminDashboard(),
                      component: _,
                    }),
                    (0, _.jsx)(_._, {
                      exact: !0,
                      path: _.YearlySurvery(":year(\\d+)"),
                      component: _,
                    }),
                    (0, _.jsx)(_._, {
                      exact: !0,
                      path: _.PostEventSurvey(":surveyGID(\\d+)"),
                      component: _,
                    }),
                    (0, _.jsx)(_._, {
                      exact: !0,
                      path: _.PostEventSurveyResults(":surveyGID(\\d+)"),
                      component: _,
                    }),
                    (0, _.jsx)(_._, {
                      component: _._,
                    }),
                  ],
                }),
              }),
            })
          );
        }
      },
      chunkid: (module, module_exports, __webpack_require__) => {
        "use strict";
        __webpack_require__._(module_exports, {
          _: () => _,
          _: () => _,
        });
        async function _(_) {
          try {
            return await _;
          } catch (_) {
            console.error(_);
            return;
          }
        }
        function _() {
          let _, _;
          return {
            promise: new Promise((_, _) => {
              (_ = _), (_ = _);
            }),
            resolve: _,
            reject: _,
          };
        }
        function _(_) {
          return new Promise((_) => setTimeout(_, _));
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
          m_eCurLang = (0, _.sfN)(_._.LANGUAGE);
          m_rgHasData = (0, _._)([], _.bP9, !1);
          m_bHasLocalizationContext = !1;
          m_callback = new _._();
          GetCallback() {
            return this.m_callback;
          }
          GetCurEditLanguage() {
            return this.m_eCurLang;
          }
          SetCurEditLanguage(_) {
            return this.m_eCurLang != _
              ? ((this.m_eCurLang = _), this.GetCallback().Dispatch(_), !0)
              : !1;
          }
          SetHasLanguage(_) {
            _.forEach((_, _) => {
              this.m_rgHasData[_] != _ && (this.m_rgHasData[_] = _);
            });
          }
          BHasLanguageData(_) {
            return this.m_rgHasData[_];
          }
          GetHasLocalizationContext() {
            return this.m_bHasLocalizationContext;
          }
          SetHasLocalizationContext(_) {
            _ != this.m_bHasLocalizationContext &&
              (this.m_bHasLocalizationContext = _);
          }
          static s_globalSingletonStore;
          static Get() {
            return (
              _.s_globalSingletonStore || (_.s_globalSingletonStore = new _()),
              _.s_globalSingletonStore
            );
          }
          constructor() {
            (0, _._)(this);
          }
        };
        _([_._], _.prototype, "m_eCurLang", 2),
          _([_._], _.prototype, "m_rgHasData", 2),
          _([_._], _.prototype, "m_bHasLocalizationContext", 2),
          _([_._], _.prototype, "GetCurEditLanguage", 1),
          _([_._], _.prototype, "SetCurEditLanguage", 1),
          _([_._.bound], _.prototype, "SetHasLanguage", 1),
          _([_._], _.prototype, "BHasLanguageData", 1);
        let _ = _;
        function _() {
          return (0, _._)(() => _.Get().GetCurEditLanguage());
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
          _ = __webpack_require__("chunkid");
        function _(_) {
          const [_, _] = (0, _.useState)(!1),
            [_] = (0, _.useState)(() => _()),
            _ = (0, _.useMemo)(
              () => ({
                country: _._.COUNTRY,
                language: _._.LANGUAGE,
                bUsePartnerAPI: !0,
              }),
              [],
            );
          return (
            (0, _.useEffect)(() => (_(!0), _(_)), [_]),
            _
              ? (0, _.createElement)(_._, {
                  context: _,
                  serviceTransportOverride: _.GetServiceTransport(),
                  children: _.children,
                })
              : null
          );
        }
        function _(_) {
          const [_] = (0, _.useState)(() => _()),
            _ = (0, _.useMemo)(
              () => ({
                country: _._.COUNTRY,
                language: _._.LANGUAGE,
                bUsePartnerAPI: !0,
                bIncludeUnpublished: _.bIncludeUnpublished,
              }),
              [_.bIncludeUnpublished],
            );
          return (0, _.createElement)(_._, {
            context: _,
            serviceTransportOverride: _.GetServiceTransport(),
            children: _.children,
          });
        }
        function _() {
          const _ = (0, _._)(
            "partnerbrowse_webapi_token",
            "application_config",
          );
          return (0, _._)(new _._(_._.WEBAPI_BASE_URL, _));
        }
        function _(_) {
          return _._.Initialize(_.GetServiceTransport(), _._.is_partner_member);
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
          _ = __webpack_require__("chunkid");
        function _(_) {
          const _ = _.toLowerCase();
          if (_.endsWith(".jpg") || _.endsWith(".jpeg")) return "image/jpeg";
          if (_.endsWith(".png")) return "image/png";
          if (_.endsWith(".gif")) return "image/gif";
          if (_.endsWith(".mp4")) return "video/mp4";
          if (_.endsWith(".webm")) return "video/webm";
          if (_.endsWith(".srt")) return "text/srt";
          if (_.endsWith(".vtt")) return "text/vtt";
          if (_.endsWith(".webp")) return "image/webp";
        }
        function _(_) {
          switch (_) {
            case "image/jpeg":
              return ".jpg";
            case "image/png":
              return ".png";
            case "image/gif":
              return ".gif";
            case "video/mp4":
              return ".mp4";
            case "video/webm":
              return ".webm";
            case "text/vtt":
              return ".vtt";
            case "text/srt":
              return ".srt";
            case "image/webp":
              return ".webp";
          }
          return (
            console.error(
              "ConvertMimeTypeToExtension:Unexepected mime type ",
              _,
            ),
            ".jpg"
          );
        }
        function _(_) {
          switch (_) {
            case _._._:
              return ".jpg";
            case _._._:
              return ".gif";
            case _._._:
              return ".png";
            case _._._:
              return ".webm";
            case _._._:
              return ".mp4";
            case _._._:
              return ".srt";
            case _._._:
              return ".vtt";
            case _._._:
              return ".webp";
          }
        }
        function _(_) {
          const _ = (0, _._)(),
            _ = new Image();
          return (
            (_.onload = () => _.resolve(_)),
            (_.onerror = (_) => {
              console.error("LoadImage failed to load the image, details", _),
                _.resolve(void 0);
            }),
            (_.src = _),
            _.promise
          );
        }
        function _(_) {
          const _ = (0, _._)(),
            _ = document.createElement("video");
          return (
            (_.preload = "metadata"),
            _.addEventListener("loadedmetadata", () => _.resolve(_)),
            (_.onerror = (_) => {
              console.error("LoadVideo failed to load the video, details", _),
                _.resolve(void 0);
            }),
            (_.src = _),
            _.promise
          );
        }
        function _(_) {
          return _.startsWith("image/");
        }
        function _(_) {
          return _.startsWith("video/");
        }
        function _(_, _) {
          return _ ? _(_) : _(_);
        }
        async function _(_, _) {
          if (_) return _(URL.createObjectURL(_));
          {
            const _ = (0, _._)(),
              _ = new FileReader();
            (_.onload = () => _.resolve(_.result ?? void 0)),
              (_.onerror = () => {
                console.error(
                  "GetMediaElementFromFile failed to load the image, details",
                  _.error,
                ),
                  _.resolve(void 0);
              }),
              _.readAsDataURL(_);
            const _ = await _.promise;
            return _ ? _(_.toString()) : void 0;
          }
        }
        function _(_) {
          return _
            ? _ instanceof HTMLVideoElement
              ? {
                  width: _.videoWidth,
                  height: _.videoHeight,
                }
              : {
                  width: _.width,
                  height: _.height,
                }
            : {
                width: 0,
                height: 0,
              };
        }
        function _(_, _) {
          if (!_) return _;
          const _ = new Set([
            "content-length",
            "host",
            "origin",
            "referer",
            "user-agent",
            "cookie",
            "set-cookie",
            "connection",
            "upgrade",
          ]);
          for (const _ of _)
            _.has(_.name.toLowerCase()) || (_[_.name] = _.value);
          return _;
        }
      },
      chunkid: (module) => {
        module.exports = {
          EventList: "_3iKeBOMuwqPC87BLxvCKll",
          EventRow: "_3HCTdN7N0hxyB7WCoQkX-l",
          EventMainDetails: "_12wSR9wtG84Yh4obIARUAy",
          Title: "_1bLTz07sQnRA0DjTpjXCza",
          StartDate: "_6accgtG1qR7tHFL1wnO58",
          TitleLine: "_3VdcJeFNzpiS6C6nzlzZfv",
          ActionLine: "_2T7-EVSiD7wt3kh-UtbFwJ",
          SearchLine: "_3WR8L9DXe8JRgcUuBlzxCV",
          SearchSummary: "_2ZYKXsT05br_fBl6Al_Ok2",
          SearchMatch: "_3NPtUvJyTjDkKKBkXpmMMh",
          CapacityBarMax: "_1LKv33ip1CbofO_817Nx6_",
          CapacityBarCurrent: "_3lS1D6vNLfl6RVGdhdgWTY",
          Full: "ndEhtgivpXhCilYDnAAVe",
          MonthTitle: "_2OGsXaLxpf_2IFP6hi2egn",
          MonthEvents: "_3dLuE6Vg6u_xDsbtxjzVLZ",
        };
      },
      chunkid: (module) => {
        module.exports = {
          ImportButtonLabel: "_1QCMW1MwEkiLeTlmhMvSs_",
          AccountSummary: "_3ASk__24cRSvf749cMDwat",
          AccountAvatar: "_2xoRnY-a7zMtF4eXy564LW",
          AccountPersonaName: "_13y5R1N5OAhnGi8UjBv9ZK",
          PartnerList: "_EdCW3WiSPTQsVts-RIeJ",
          PartnerListHeader: "_4TErK934px6TrK1V9JGoD",
          PartnerListRow: "CZqR_ufpzWTsB5Z6N9Zut",
          PartnerListRowSelected: "_2d0ftwVO6CThilpy0rp1mx",
        };
      },
      chunkid: (module) => {
        module.exports = {
          Ctn: "_8n9wPNrWDu91tlwBW9bHt",
          Indicator: "_355XkH0xfIpJF1YsMX7I7k",
          EmailInfoRow: "_3bta6oovSNKe3Nv2b67SmP",
          EmailField: "_1E-g4exFlAQhvXDqspYTR0",
          RadioButtons: "_1ZG5Z9nFYtYu3B7aksbG67",
          RadioButtonCtn: "_3AoiDJJ1RWLAWBwcOjgm3f",
        };
      },
      chunkid: (module) => {
        module.exports = {
          Ctn: "_1olTwzPkPjzL36u0WgyDG0",
          Indicator: "_3d0cYrmQzzda_P3DQ994kX",
        };
      },
      chunkid: (module) => {
        module.exports = {
          ExportToCSV: "_2QfZu5-7jOdld1h2nYbca8",
          Table: "_2JSoC65mCQdxh-B_srjUjf",
        };
      },
      chunkid: function (_, _) {
        var _, _, _;
        ((_, _) => {
          (_ = []),
            (_ = _),
            (_ = typeof _ == "function" ? __webpack_require__.apply(_, _) : _),
            _ !== void 0 && (_.exports = _);
        })(this, function _() {
          var _ =
              typeof self < "u"
                ? self
                : typeof window < "u"
                  ? window
                  : _ !== void 0
                    ? _
                    : {},
            _,
            _ = !_.document && !!_.postMessage,
            _ = _.IS_PAPA_WORKER || !1,
            _ = {},
            _ = 0,
            _ = {};
          function _(_) {
            (this._handle = null),
              (this._finished = !1),
              (this._completed = !1),
              (this._halted = !1),
              (this._input = null),
              (this._baseIndex = 0),
              (this._partialLine = ""),
              (this._rowCount = 0),
              (this._start = 0),
              (this._nextChunk = null),
              (this.isFirstChunk = !0),
              (this._completeResults = {
                data: [],
                errors: [],
                meta: {},
              }),
              function (_) {
                var _ = _(_);
                (_.chunkSize = parseInt(_.chunkSize)),
                  _.step || _.chunk || (_.chunkSize = null),
                  (this._handle = new _(_)),
                  ((this._handle.streamer = this)._config = _);
              }.call(this, _),
              (this.parseChunk = function (_, _) {
                var _ = parseInt(this._config.skipFirstNLines) || 0;
                if (this.isFirstChunk && 0 < _) {
                  let _ = this._config.newline;
                  _ ||
                    ((_ = this._config.quoteChar || '"'),
                    (_ = this._handle.guessLineEndings(_, _))),
                    (_ = [..._.split(_).slice(_)].join(_));
                }
                this.isFirstChunk &&
                  _(this._config.beforeFirstChunk) &&
                  (_ = this._config.beforeFirstChunk(_)) !== void 0 &&
                  (_ = _),
                  (this.isFirstChunk = !1),
                  (this._halted = !1);
                var _ = this._partialLine + _,
                  _ =
                    ((this._partialLine = ""),
                    this._handle.parse(_, this._baseIndex, !this._finished));
                if (!this._handle.paused() && !this._handle.aborted()) {
                  if (
                    ((_ = _.meta.cursor),
                    (_ =
                      (this._finished ||
                        ((this._partialLine = _.substring(_ - this._baseIndex)),
                        (this._baseIndex = _)),
                      _ && _.data && (this._rowCount += _.data.length),
                      this._finished ||
                        (this._config.preview &&
                          this._rowCount >= this._config.preview))),
                    _)
                  )
                    _.postMessage({
                      results: _,
                      workerId: _.WORKER_ID,
                      finished: _,
                    });
                  else if (_(this._config.chunk) && !_) {
                    if (
                      (this._config.chunk(_, this._handle),
                      this._handle.paused() || this._handle.aborted())
                    )
                      return void (this._halted = !0);
                    this._completeResults = _ = void 0;
                  }
                  return (
                    this._config.step ||
                      this._config.chunk ||
                      ((this._completeResults.data =
                        this._completeResults.data.concat(_.data)),
                      (this._completeResults.errors =
                        this._completeResults.errors.concat(_.errors)),
                      (this._completeResults.meta = _.meta)),
                    this._completed ||
                      !_ ||
                      !_(this._config.complete) ||
                      (_ && _.meta.aborted) ||
                      (this._config.complete(
                        this._completeResults,
                        this._input,
                      ),
                      (this._completed = !0)),
                    _ || (_ && _.meta.paused) || this._nextChunk(),
                    _
                  );
                }
                this._halted = !0;
              }),
              (this._sendError = function (_) {
                _(this._config.error)
                  ? this._config.error(_)
                  : _ &&
                    this._config.error &&
                    _.postMessage({
                      workerId: _.WORKER_ID,
                      error: _,
                      finished: !1,
                    });
              });
          }
          function _(_) {
            var _;
            (_ = _ || {}).chunkSize || (_.chunkSize = _.RemoteChunkSize),
              _.call(this, _),
              (this._nextChunk = _
                ? function () {
                    this._readChunk(), this._chunkLoaded();
                  }
                : function () {
                    this._readChunk();
                  }),
              (this.stream = function (_) {
                (this._input = _), this._nextChunk();
              }),
              (this._readChunk = function () {
                if (this._finished) this._chunkLoaded();
                else {
                  if (
                    ((_ = new XMLHttpRequest()),
                    this._config.withCredentials &&
                      (_.withCredentials = this._config.withCredentials),
                    _ ||
                      ((_.onload = _(this._chunkLoaded, this)),
                      (_.onerror = _(this._chunkError, this))),
                    _.open(
                      this._config.downloadRequestBody ? "POST" : "GET",
                      this._input,
                      !_,
                    ),
                    this._config.downloadRequestHeaders)
                  ) {
                    var _,
                      _ = this._config.downloadRequestHeaders;
                    for (_ in _) _.setRequestHeader(_, _[_]);
                  }
                  var _;
                  this._config.chunkSize &&
                    ((_ = this._start + this._config.chunkSize - 1),
                    _.setRequestHeader(
                      "Range",
                      "bytes=" + this._start + "-" + _,
                    ));
                  try {
                    _.send(this._config.downloadRequestBody);
                  } catch (_) {
                    this._chunkError(_.message);
                  }
                  _ && _.status === 0 && this._chunkError();
                }
              }),
              (this._chunkLoaded = function () {
                _.readyState === 4 &&
                  (_.status < 200 || 400 <= _.status
                    ? this._chunkError()
                    : ((this._start +=
                        this._config.chunkSize || _.responseText.length),
                      (this._finished =
                        !this._config.chunkSize ||
                        this._start >=
                          ((_) =>
                            (_ = _.getResponseHeader("Content-Range")) !== null
                              ? parseInt(_.substring(_.lastIndexOf("/") + 1))
                              : -1)(_)),
                      this.parseChunk(_.responseText)));
              }),
              (this._chunkError = function (_) {
                (_ = _.statusText || _), this._sendError(new Error(_));
              });
          }
          function _(_) {
            (_ = _ || {}).chunkSize || (_.chunkSize = _.LocalChunkSize),
              _.call(this, _);
            var _,
              _,
              _ = typeof FileReader < "u";
            (this.stream = function (_) {
              (this._input = _),
                (_ = _.slice || _.webkitSlice || _.mozSlice),
                _
                  ? (((_ = new FileReader()).onload = _(
                      this._chunkLoaded,
                      this,
                    )),
                    (_.onerror = _(this._chunkError, this)))
                  : (_ = new FileReaderSync()),
                this._nextChunk();
            }),
              (this._nextChunk = function () {
                this._finished ||
                  (this._config.preview &&
                    !(this._rowCount < this._config.preview)) ||
                  this._readChunk();
              }),
              (this._readChunk = function () {
                var _ = this._input,
                  _ =
                    (this._config.chunkSize &&
                      ((_ = Math.min(
                        this._start + this._config.chunkSize,
                        this._input.size,
                      )),
                      (_ = _.call(_, this._start, _))),
                    _.readAsText(_, this._config.encoding));
                _ ||
                  this._chunkLoaded({
                    target: {
                      result: _,
                    },
                  });
              }),
              (this._chunkLoaded = function (_) {
                (this._start += this._config.chunkSize),
                  (this._finished =
                    !this._config.chunkSize || this._start >= this._input.size),
                  this.parseChunk(_.target.result);
              }),
              (this._chunkError = function () {
                this._sendError(_.error);
              });
          }
          function _(_) {
            var _;
            _.call(this, (_ = _ || {})),
              (this.stream = function (_) {
                return (_ = _), this._nextChunk();
              }),
              (this._nextChunk = function () {
                var _, _;
                if (!this._finished)
                  return (
                    (_ = this._config.chunkSize),
                    (_ = _
                      ? ((_ = _.substring(0, _)), _.substring(_))
                      : ((_ = _), "")),
                    (this._finished = !_),
                    this.parseChunk(_)
                  );
              });
          }
          function _(_) {
            _.call(this, (_ = _ || {}));
            var _ = [],
              _ = !0,
              _ = !1;
            (this.pause = function () {
              _.prototype.pause.apply(this, arguments), this._input.pause();
            }),
              (this.resume = function () {
                _.prototype.resume.apply(this, arguments), this._input.resume();
              }),
              (this.stream = function (_) {
                (this._input = _),
                  this._input._("data", this._streamData),
                  this._input._("end", this._streamEnd),
                  this._input._("error", this._streamError);
              }),
              (this._checkIsFinished = function () {
                _ && _.length === 1 && (this._finished = !0);
              }),
              (this._nextChunk = function () {
                this._checkIsFinished(),
                  _.length ? this.parseChunk(_.shift()) : (_ = !0);
              }),
              (this._streamData = _(function (_) {
                try {
                  _.push(
                    typeof _ == "string"
                      ? _
                      : _.toString(this._config.encoding),
                  ),
                    _ &&
                      ((_ = !1),
                      this._checkIsFinished(),
                      this.parseChunk(_.shift()));
                } catch (_) {
                  this._streamError(_);
                }
              }, this)),
              (this._streamError = _(function (_) {
                this._streamCleanUp(), this._sendError(_);
              }, this)),
              (this._streamEnd = _(function () {
                this._streamCleanUp(), (_ = !0), this._streamData("");
              }, this)),
              (this._streamCleanUp = _(function () {
                this._input.removeListener("data", this._streamData),
                  this._input.removeListener("end", this._streamEnd),
                  this._input.removeListener("error", this._streamError);
              }, this));
          }
          function _(_) {
            var _,
              _,
              _,
              _,
              _ = Math.pow(2, 53),
              _ = -_,
              _ = /^\s*-?(\d+\.?|\.\d+|\d+\.\d+)([eE][-+]?\d+)?\s*$/,
              _ =
                /^((\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z)))$/,
              _ = this,
              _ = 0,
              _ = 0,
              _ = !1,
              _ = !1,
              _ = [],
              _ = {
                data: [],
                errors: [],
                meta: {},
              };
            function _(_) {
              return _.skipEmptyLines === "greedy"
                ? _.join("").trim() === ""
                : _.length === 1 && _[0].length === 0;
            }
            function _() {
              if (
                (_ &&
                  _ &&
                  (_(
                    "Delimiter",
                    "UndetectableDelimiter",
                    "Unable to auto-detect delimiting character; defaulted to '" +
                      _.DefaultDelimiter +
                      "'",
                  ),
                  (_ = !1)),
                _.skipEmptyLines &&
                  (_.data = _.data.filter(function (_) {
                    return !_(_);
                  })),
                _())
              ) {
                let _ = function (_, _) {
                  _(_.transformHeader) && (_ = _.transformHeader(_, _)),
                    _.push(_);
                };
                var _ = _;
                if (_)
                  if (Array.isArray(_.data[0])) {
                    for (var _ = 0; _() && _ < _.data.length; _++)
                      _.data[_].forEach(_);
                    _.data.splice(0, 1);
                  } else _.data.forEach(_);
              }
              function _(_, _) {
                for (var _ = _.header ? {} : [], _ = 0; _ < _.length; _++) {
                  var _ = _,
                    _ = _[_],
                    _ = ((_, _) =>
                      ((_) => (
                        _.dynamicTypingFunction &&
                          _.dynamicTyping[_] === void 0 &&
                          (_.dynamicTyping[_] = _.dynamicTypingFunction(_)),
                        (_.dynamicTyping[_] || _.dynamicTyping) === !0
                      ))(_)
                        ? _ === "true" ||
                          _ === "TRUE" ||
                          (_ !== "false" &&
                            _ !== "FALSE" &&
                            (((_) => {
                              if (
                                _.test(_) &&
                                ((_ = parseFloat(_)), _ < _ && _ < _)
                              )
                                return 1;
                            })(_)
                              ? parseFloat(_)
                              : _.test(_)
                                ? new Date(_)
                                : _ === ""
                                  ? null
                                  : _))
                        : _)(
                      (_ = _.header
                        ? _ >= _.length
                          ? "__parsed_extra"
                          : _[_]
                        : _),
                      (_ = _.transform ? _.transform(_, _) : _),
                    );
                  _ === "__parsed_extra"
                    ? ((_[_] = _[_] || []), _[_].push(_))
                    : (_[_] = _);
                }
                return (
                  _.header &&
                    (_ > _.length
                      ? _(
                          "FieldMismatch",
                          "TooManyFields",
                          "Too many fields: expected " +
                            _.length +
                            " fields but parsed " +
                            _,
                          _ + _,
                        )
                      : _ < _.length &&
                        _(
                          "FieldMismatch",
                          "TooFewFields",
                          "Too few fields: expected " +
                            _.length +
                            " fields but parsed " +
                            _,
                          _ + _,
                        )),
                  _
                );
              }
              var _;
              _ &&
                (_.header || _.dynamicTyping || _.transform) &&
                ((_ = 1),
                !_.data.length || Array.isArray(_.data[0])
                  ? ((_.data = _.data.map(_)), (_ = _.data.length))
                  : (_.data = _(_.data, 0)),
                _.header && _.meta && (_.meta.fields = _),
                (_ += _));
            }
            function _() {
              return _.header && _.length === 0;
            }
            function _(_, _, _, _) {
              (_ = {
                type: _,
                code: _,
                message: _,
              }),
                _ !== void 0 && (_.row = _),
                _.errors.push(_);
            }
            _(_.step) &&
              ((_ = _.step),
              (_.step = function (_) {
                (_ = _),
                  _()
                    ? _()
                    : (_(),
                      _.data.length !== 0 &&
                        ((_ += _.data.length),
                        _.preview && _ > _.preview
                          ? _.abort()
                          : ((_.data = _.data[0]), _(_, _))));
              })),
              (this.parse = function (_, _, _) {
                var _ = _.quoteChar || '"',
                  _ =
                    (_.newline || (_.newline = this.guessLineEndings(_, _)),
                    (_ = !1),
                    _.delimiter
                      ? _(_.delimiter) &&
                        ((_.delimiter = _.delimiter(_)),
                        (_.meta.delimiter = _.delimiter))
                      : ((_ = ((_, _, _, _, _) => {
                          var _, _, _, _;
                          _ = _ || [
                            ",",
                            "	",
                            "|",
                            ";",
                            _.RECORD_SEP,
                            _.UNIT_SEP,
                          ];
                          for (var _ = 0; _ < _.length; _++) {
                            for (
                              var _,
                                _ = _[_],
                                _ = 0,
                                _ = 0,
                                _ = 0,
                                _ =
                                  ((_ = void 0),
                                  new _({
                                    comments: _,
                                    delimiter: _,
                                    newline: _,
                                    preview: 10,
                                  }).parse(_)),
                                _ = 0;
                              _ < _.data.length;
                              _++
                            )
                              _ && _(_.data[_])
                                ? _++
                                : ((_ = _.data[_].length),
                                  (_ += _),
                                  _ === void 0
                                    ? (_ = _)
                                    : 0 < _ &&
                                      ((_ += Math.abs(_ - _)), (_ = _)));
                            0 < _.data.length && (_ /= _.data.length - _),
                              (_ === void 0 || _ <= _) &&
                                (_ === void 0 || _ < _) &&
                                1.99 < _ &&
                                ((_ = _), (_ = _), (_ = _));
                          }
                          return {
                            successful: !!(_.delimiter = _),
                            bestDelimiter: _,
                          };
                        })(
                          _,
                          _.newline,
                          _.skipEmptyLines,
                          _.comments,
                          _.delimitersToGuess,
                        )).successful
                          ? (_.delimiter = _.bestDelimiter)
                          : ((_ = !0), (_.delimiter = _.DefaultDelimiter)),
                        (_.meta.delimiter = _.delimiter)),
                    _(_));
                return (
                  _.preview && _.header && _.preview++,
                  (_ = _),
                  (_ = new _(_)),
                  (_ = _.parse(_, _, _)),
                  _(),
                  _
                    ? {
                        meta: {
                          paused: !0,
                        },
                      }
                    : _ || {
                        meta: {
                          paused: !1,
                        },
                      }
                );
              }),
              (this.paused = function () {
                return _;
              }),
              (this.pause = function () {
                (_ = !0),
                  _.abort(),
                  (_ = _(_.chunk) ? "" : _.substring(_.getCharIndex()));
              }),
              (this.resume = function () {
                _.streamer._halted
                  ? ((_ = !1), _.streamer.parseChunk(_, !0))
                  : setTimeout(_.resume, 3);
              }),
              (this.aborted = function () {
                return _;
              }),
              (this.abort = function () {
                (_ = !0),
                  _.abort(),
                  (_.meta.aborted = !0),
                  _(_.complete) && _.complete(_),
                  (_ = "");
              }),
              (this.guessLineEndings = function (_, _) {
                _ = _.substring(0, 1048576);
                var _ = new RegExp(_(_) + "([^]*?)" + _(_), "gm"),
                  _ = (_ = _.replace(_, "")).split("\r"),
                  _ = _.split(`
`),
                  _ = 1 < _.length && _[0].length < _[0].length;
                if (_.length === 1 || _)
                  return `
`;
                for (var _ = 0, _ = 0; _ < _.length; _++)
                  _[_][0] ===
                    `
` && _++;
                return _ >= _.length / 2
                  ? `\r
`
                  : "\r";
              });
          }
          function _(_) {
            return _.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
          }
          function _(_) {
            var _ = (_ = _ || {}).delimiter,
              _ = _.newline,
              _ = _.comments,
              _ = _.step,
              _ = _.preview,
              _ = _.fastMode,
              _ = null,
              _ = !1,
              _ = _.quoteChar == null ? '"' : _.quoteChar,
              _ = _;
            if (
              (_.escapeChar !== void 0 && (_ = _.escapeChar),
              (typeof _ != "string" || -1 < _.BAD_DELIMITERS.indexOf(_)) &&
                (_ = ","),
              _ === _)
            )
              throw new Error("Comment character same as delimiter");
            _ === !0
              ? (_ = "#")
              : (typeof _ != "string" || -1 < _.BAD_DELIMITERS.indexOf(_)) &&
                (_ = !1),
              _ !==
                `
` &&
                _ !== "\r" &&
                _ !==
                  `\r
` &&
                (_ = `
`);
            var _ = 0,
              _ = !1;
            (this.parse = function (_, _, _) {
              if (typeof _ != "string")
                throw new Error("Input must be a string");
              var _ = _.length,
                _ = _.length,
                _ = _.length,
                _ = _.length,
                _ = _(_),
                _ = [],
                _ = [],
                _ = [],
                _ = (_ = 0);
              if (!_) return _();
              if (_ || (_ !== !1 && _.indexOf(_) === -1)) {
                for (var _ = _.split(_), _ = 0; _ < _.length; _++) {
                  if (((_ = _[_]), (_ += _.length), _ !== _.length - 1))
                    _ += _.length;
                  else if (_) return _();
                  if (!_ || _.substring(0, _) !== _) {
                    if (_) {
                      if (((_ = []), _(_.split(_)), _(), _)) return _();
                    } else _(_.split(_));
                    if (_ && _ <= _) return (_ = _.slice(0, _)), _(!0);
                  }
                }
                return _();
              }
              for (
                var _ = _.indexOf(_, _),
                  _ = _.indexOf(_, _),
                  _ = new RegExp(_(_) + _(_), "g"),
                  _ = _.indexOf(_, _);
                ;
              )
                if (_[_] === _)
                  for (_ = _, _++; ; ) {
                    if ((_ = _.indexOf(_, _ + 1)) === -1)
                      return (
                        _ ||
                          _.push({
                            type: "Quotes",
                            code: "MissingQuotes",
                            message: "Quoted field unterminated",
                            row: _.length,
                            index: _,
                          }),
                        _()
                      );
                    if (_ === _ - 1) return _(_.substring(_, _).replace(_, _));
                    if (_ === _ && _[_ + 1] === _) _++;
                    else if (_ === _ || _ === 0 || _[_ - 1] !== _) {
                      _ !== -1 && _ < _ + 1 && (_ = _.indexOf(_, _ + 1));
                      var _ = _(
                        (_ =
                          _ !== -1 && _ < _ + 1 ? _.indexOf(_, _ + 1) : _) ===
                          -1
                          ? _
                          : Math.min(_, _),
                      );
                      if (_.substr(_ + 1 + _, _) === _) {
                        _.push(_.substring(_, _).replace(_, _)),
                          _[(_ = _ + 1 + _ + _)] !== _ && (_ = _.indexOf(_, _)),
                          (_ = _.indexOf(_, _)),
                          (_ = _.indexOf(_, _));
                        break;
                      }
                      if (
                        ((_ = _(_)),
                        _.substring(_ + 1 + _, _ + 1 + _ + _) === _)
                      ) {
                        if (
                          (_.push(_.substring(_, _).replace(_, _)),
                          _(_ + 1 + _ + _),
                          (_ = _.indexOf(_, _)),
                          (_ = _.indexOf(_, _)),
                          _ && (_(), _))
                        )
                          return _();
                        if (_ && _.length >= _) return _(!0);
                        break;
                      }
                      _.push({
                        type: "Quotes",
                        code: "InvalidQuotes",
                        message: "Trailing quote on quoted field is malformed",
                        row: _.length,
                        index: _,
                      }),
                        _++;
                    }
                  }
                else if (_ && _.length === 0 && _.substring(_, _ + _) === _) {
                  if (_ === -1) return _();
                  (_ = _ + _), (_ = _.indexOf(_, _)), (_ = _.indexOf(_, _));
                } else if (_ !== -1 && (_ < _ || _ === -1))
                  _.push(_.substring(_, _)), (_ = _ + _), (_ = _.indexOf(_, _));
                else {
                  if (_ === -1) break;
                  if ((_.push(_.substring(_, _)), _(_ + _), _ && (_(), _)))
                    return _();
                  if (_ && _.length >= _) return _(!0);
                }
              return _();
              function _(_) {
                _.push(_), (_ = _);
              }
              function _(_) {
                var _ = 0;
                return (_ =
                  _ !== -1 && (_ = _.substring(_ + 1, _)) && _.trim() === ""
                    ? _.length
                    : _);
              }
              function _(_) {
                return (
                  _ ||
                    (_ === void 0 && (_ = _.substring(_)),
                    _.push(_),
                    (_ = _),
                    _(_),
                    _ && _()),
                  _()
                );
              }
              function _(_) {
                (_ = _), _(_), (_ = []), (_ = _.indexOf(_, _));
              }
              function _(_) {
                if (_.header && !_ && _.length && !_) {
                  var _ = _[0],
                    _ = Object.create(null),
                    _ = new Set(_);
                  let _ = !1;
                  for (let _ = 0; _ < _.length; _++) {
                    let _ = _[_];
                    if (
                      _[
                        (_ = _(_.transformHeader) ? _.transformHeader(_, _) : _)
                      ]
                    ) {
                      let _,
                        _ = _[_];
                      for (; (_ = _ + "_" + _), _++, _.has(_); );
                      _.add(_),
                        (_[_] = _),
                        _[_]++,
                        (_ = !0),
                        ((_ = _ === null ? {} : _)[_] = _);
                    } else (_[_] = 1), (_[_] = _);
                    _.add(_);
                  }
                  _ && console.warn("Duplicate headers found and renamed."),
                    (_ = !0);
                }
                return {
                  data: _,
                  errors: _,
                  meta: {
                    delimiter: _,
                    linebreak: _,
                    aborted: _,
                    truncated: !!_,
                    cursor: _ + (_ || 0),
                    renamedHeaders: _,
                  },
                };
              }
              function _() {
                _(_()), (_ = []), (_ = []);
              }
            }),
              (this.abort = function () {
                _ = !0;
              }),
              (this.getCharIndex = function () {
                return _;
              });
          }
          function _(_) {
            var _ = _.data,
              _ = _[_.workerId],
              _ = !1;
            if (_.error) _.userError(_.error, _.file);
            else if (_.results && _.results.data) {
              var _ = {
                abort: function () {
                  (_ = !0),
                    _(_.workerId, {
                      data: [],
                      errors: [],
                      meta: {
                        aborted: !0,
                      },
                    });
                },
                pause: _,
                resume: _,
              };
              if (_(_.userStep)) {
                for (
                  var _ = 0;
                  _ < _.results.data.length &&
                  (_.userStep(
                    {
                      data: _.results.data[_],
                      errors: _.results.errors,
                      meta: _.results.meta,
                    },
                    _,
                  ),
                  !_);
                  _++
                );
                delete _.results;
              } else
                _(_.userChunk) &&
                  (_.userChunk(_.results, _, _.file), delete _.results);
            }
            _.finished && !_ && _(_.workerId, _.results);
          }
          function _(_, _) {
            var _ = _[_];
            _(_.userComplete) && _.userComplete(_), _.terminate(), delete _[_];
          }
          function _() {
            throw new Error("Not implemented.");
          }
          function _(_) {
            if (typeof _ != "object" || _ === null) return _;
            var _,
              _ = Array.isArray(_) ? [] : {};
            for (_ in _) _[_] = _(_[_]);
            return _;
          }
          function _(_, _) {
            return function () {
              _.apply(_, arguments);
            };
          }
          function _(_) {
            return typeof _ == "function";
          }
          return (
            (_.parse = function (_, _) {
              var _ = (_ = _ || {}).dynamicTyping || !1;
              if (
                (_(_) && ((_.dynamicTypingFunction = _), (_ = {})),
                (_.dynamicTyping = _),
                (_.transform = !!_(_.transform) && _.transform),
                !_.worker || !_.WORKERS_SUPPORTED)
              )
                return (
                  (_ = null),
                  _.NODE_STREAM_INPUT,
                  typeof _ == "string"
                    ? ((_ = ((_) =>
                        _.charCodeAt(0) !== 65279 ? _ : _.slice(1))(_)),
                      (_ = new (_.download ? _ : _)(_)))
                    : _.readable === !0 && _(_.read) && _(_._)
                      ? (_ = new _(_))
                      : ((_.File && _ instanceof File) ||
                          _ instanceof Object) &&
                        (_ = new _(_)),
                  _.stream(_)
                );
              ((_ = (() => {
                var _;
                return (
                  !!_.WORKERS_SUPPORTED &&
                  ((_ = (() => {
                    var _ = _.URL || _.webkitURL || null,
                      _ = _.toString();
                    return (
                      _.BLOB_URL ||
                      (_.BLOB_URL = _.createObjectURL(
                        new Blob(
                          [
                            "var global = (function() { if (typeof self !== 'undefined') { return self; } if (typeof window !== 'undefined') { return window; } if (typeof global !== 'undefined') { return global; } return {}; })(); global.IS_PAPA_WORKER=true; ",
                            "(",
                            _,
                            ")();",
                          ],
                          {
                            type: "text/javascript",
                          },
                        ),
                      ))
                    );
                  })()),
                  ((_ = new _.Worker(_)).onmessage = _),
                  (_._ = _++),
                  (_[_._] = _))
                );
              })()).userStep = _.step),
                (_.userChunk = _.chunk),
                (_.userComplete = _.complete),
                (_.userError = _.error),
                (_.step = _(_.step)),
                (_.chunk = _(_.chunk)),
                (_.complete = _(_.complete)),
                (_.error = _(_.error)),
                delete _.worker,
                _.postMessage({
                  input: _,
                  config: _,
                  workerId: _._,
                });
            }),
            (_.unparse = function (_, _) {
              var _ = !1,
                _ = !0,
                _ = ",",
                _ = `\r
`,
                _ = '"',
                _ = _ + _,
                _ = !1,
                _ = null,
                _ = !1,
                _ =
                  ((() => {
                    if (typeof _ == "object") {
                      if (
                        (typeof _.delimiter != "string" ||
                          _.BAD_DELIMITERS.filter(function (_) {
                            return _.delimiter.indexOf(_) !== -1;
                          }).length ||
                          (_ = _.delimiter),
                        (typeof _.quotes != "boolean" &&
                          typeof _.quotes != "function" &&
                          !Array.isArray(_.quotes)) ||
                          (_ = _.quotes),
                        (typeof _.skipEmptyLines != "boolean" &&
                          typeof _.skipEmptyLines != "string") ||
                          (_ = _.skipEmptyLines),
                        typeof _.newline == "string" && (_ = _.newline),
                        typeof _.quoteChar == "string" && (_ = _.quoteChar),
                        typeof _.header == "boolean" && (_ = _.header),
                        Array.isArray(_.columns))
                      ) {
                        if (_.columns.length === 0)
                          throw new Error("Option columns is empty");
                        _ = _.columns;
                      }
                      _.escapeChar !== void 0 && (_ = _.escapeChar + _),
                        _.escapeFormulae instanceof RegExp
                          ? (_ = _.escapeFormulae)
                          : typeof _.escapeFormulae == "boolean" &&
                            _.escapeFormulae &&
                            (_ = /^[=+\-@\t\r].*$/);
                    }
                  })(),
                  new RegExp(_(_), "g"));
              if (
                (typeof _ == "string" && (_ = JSON.parse(_)), Array.isArray(_))
              ) {
                if (!_.length || Array.isArray(_[0])) return _(null, _, _);
                if (typeof _[0] == "object")
                  return _(_ || Object.keys(_[0]), _, _);
              } else if (typeof _ == "object")
                return (
                  typeof _.data == "string" && (_.data = JSON.parse(_.data)),
                  Array.isArray(_.data) &&
                    (_.fields || (_.fields = (_.meta && _.meta.fields) || _),
                    _.fields ||
                      (_.fields = Array.isArray(_.data[0])
                        ? _.fields
                        : typeof _.data[0] == "object"
                          ? Object.keys(_.data[0])
                          : []),
                    Array.isArray(_.data[0]) ||
                      typeof _.data[0] == "object" ||
                      (_.data = [_.data])),
                  _(_.fields || [], _.data || [], _)
                );
              throw new Error("Unable to serialize unrecognized input");
              function _(_, _, _) {
                var _ = "",
                  _ =
                    (typeof _ == "string" && (_ = JSON.parse(_)),
                    typeof _ == "string" && (_ = JSON.parse(_)),
                    Array.isArray(_) && 0 < _.length),
                  _ = !Array.isArray(_[0]);
                if (_ && _) {
                  for (var _ = 0; _ < _.length; _++)
                    0 < _ && (_ += _), (_ += _(_[_], _));
                  0 < _.length && (_ += _);
                }
                for (var _ = 0; _ < _.length; _++) {
                  var _ = (_ ? _ : _[_]).length,
                    _ = !1,
                    _ = _ ? Object.keys(_[_]).length === 0 : _[_].length === 0;
                  if (
                    (_ &&
                      !_ &&
                      (_ =
                        _ === "greedy"
                          ? _[_].join("").trim() === ""
                          : _[_].length === 1 && _[_][0].length === 0),
                    _ === "greedy" && _)
                  ) {
                    for (var _ = [], _ = 0; _ < _; _++) {
                      var _ = _ ? _[_] : _;
                      _.push(_[_][_]);
                    }
                    _ = _.join("").trim() === "";
                  }
                  if (!_) {
                    for (var _ = 0; _ < _; _++) {
                      0 < _ && !_ && (_ += _);
                      var _ = _ && _ ? _[_] : _;
                      _ += _(_[_][_], _);
                    }
                    _ < _.length - 1 && (!_ || (0 < _ && !_)) && (_ += _);
                  }
                }
                return _;
              }
              function _(_, _) {
                var _, _;
                return _ == null
                  ? ""
                  : _.constructor === Date
                    ? JSON.stringify(_).slice(1, 25)
                    : ((_ = !1),
                      _ &&
                        typeof _ == "string" &&
                        _.test(_) &&
                        ((_ = "'" + _), (_ = !0)),
                      (_ = _.toString().replace(_, _)),
                      (_ =
                        _ ||
                        _ === !0 ||
                        (typeof _ == "function" && _(_, _)) ||
                        (Array.isArray(_) && _[_]) ||
                        ((_, _) => {
                          for (var _ = 0; _ < _.length; _++)
                            if (-1 < _.indexOf(_[_])) return !0;
                          return !1;
                        })(_, _.BAD_DELIMITERS) ||
                        -1 < _.indexOf(_) ||
                        _.charAt(0) === " " ||
                        _.charAt(_.length - 1) === " ")
                        ? _ + _ + _
                        : _);
              }
            }),
            (_.RECORD_SEP = ""),
            (_.UNIT_SEP = ""),
            (_.BYTE_ORDER_MARK = "\uFEFF"),
            (_.BAD_DELIMITERS = [
              "\r",
              `
`,
              '"',
              _.BYTE_ORDER_MARK,
            ]),
            (_.WORKERS_SUPPORTED = !_ && !!_.Worker),
            (_.NODE_STREAM_INPUT = 1),
            (_.LocalChunkSize = 10485760),
            (_.RemoteChunkSize = 5242880),
            (_.DefaultDelimiter = ","),
            (_.Parser = _),
            (_.ParserHandle = _),
            (_.NetworkStreamer = _),
            (_.FileStreamer = _),
            (_.StringStreamer = _),
            (_.ReadableStreamStreamer = _),
            _.jQuery &&
              ((_ = _.jQuery)._.parse = function (_) {
                var _ = _.config || {},
                  _ = [];
                return (
                  this.each(function (_) {
                    if (
                      !(
                        _(this).prop("tagName").toUpperCase() === "INPUT" &&
                        _(this).attr("type").toLowerCase() === "file" &&
                        _.FileReader
                      ) ||
                      !this.files ||
                      this.files.length === 0
                    )
                      return !0;
                    for (var _ = 0; _ < this.files.length; _++)
                      _.push({
                        file: this.files[_],
                        inputElem: this,
                        instanceConfig: _.extend({}, _),
                      });
                  }),
                  _(),
                  this
                );
                function _() {
                  if (_.length === 0) _(_.complete) && _.complete();
                  else {
                    var _,
                      _,
                      _,
                      _,
                      _ = _[0];
                    if (_(_.before)) {
                      var _ = _.before(_.file, _.inputElem);
                      if (typeof _ == "object") {
                        if (_.action === "abort")
                          return (
                            (_ = "AbortError"),
                            (_ = _.file),
                            (_ = _.inputElem),
                            (_ = _.reason),
                            void (
                              _(_.error) &&
                              _.error(
                                {
                                  name: _,
                                },
                                _,
                                _,
                                _,
                              )
                            )
                          );
                        if (_.action === "skip") return void _();
                        typeof _.config == "object" &&
                          (_.instanceConfig = _.extend(
                            _.instanceConfig,
                            _.config,
                          ));
                      } else if (_ === "skip") return void _();
                    }
                    var _ = _.instanceConfig.complete;
                    (_.instanceConfig.complete = function (_) {
                      _(_) && _(_, _.file, _.inputElem), _();
                    }),
                      _.parse(_.file, _.instanceConfig);
                  }
                }
                function _() {
                  _.splice(0, 1), _();
                }
              }),
            _ &&
              (_.onmessage = function (_) {
                (_ = _.data),
                  _.WORKER_ID === void 0 && _ && (_.WORKER_ID = _.workerId),
                  typeof _.input == "string"
                    ? _.postMessage({
                        workerId: _.WORKER_ID,
                        results: _.parse(_.input, _.config),
                        finished: !0,
                      })
                    : ((_.File && _.input instanceof File) ||
                        _.input instanceof Object) &&
                      (_ = _.parse(_.input, _.config)) &&
                      _.postMessage({
                        workerId: _.WORKER_ID,
                        results: _,
                        finished: !0,
                      });
              }),
            ((_.prototype = Object.create(_.prototype)).constructor = _),
            ((_.prototype = Object.create(_.prototype)).constructor = _),
            ((_.prototype = Object.create(_.prototype)).constructor = _),
            ((_.prototype = Object.create(_.prototype)).constructor = _),
            _
          );
        });
      },
    },
  ]);
})();
