"use strict";
(self.webpackChunkstore = self.webpackChunkstore || []).push([
  [2837],
  {
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
      var _,
        _,
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
      class _ extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(_ = null) {
          super(),
            _.prototype.name || _._(_._()),
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
                  name: {
                    _: 1,
                    _: _._.readString,
                    _: _._.writeString,
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
          return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
        }
        getClassName() {
          return "CFamilyGroups_CreateFamilyGroup_Request";
        }
      }
      class _ extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(_ = null) {
          super(),
            _.prototype.family_groupid || _._(_._()),
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
                  family_groupid: {
                    _: 1,
                    _: _._.readUint64String,
                    _: _._.writeUint64String,
                  },
                  cooldown_skip_granted: {
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
          return "CFamilyGroups_CreateFamilyGroup_Response";
        }
      }
      class _ extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(_ = null) {
          super(),
            _.prototype.family_groupid || _._(_._()),
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
                  family_groupid: {
                    _: 1,
                    _: _._.readUint64String,
                    _: _._.writeUint64String,
                  },
                  send_running_apps: {
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
          return "CFamilyGroups_GetFamilyGroup_Request";
        }
      }
      class _ extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(_ = null) {
          super(),
            _.prototype.steamid || _._(_._()),
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
                  steamid: {
                    _: 1,
                    _: _._.readFixed64String,
                    _: _._.writeFixed64String,
                  },
                  role: {
                    _: 2,
                    _: _._.readEnum,
                    _: _._.writeEnum,
                  },
                  time_joined: {
                    _: 3,
                    _: _._.readUint32,
                    _: _._.writeUint32,
                  },
                  cooldown_seconds_remaining: {
                    _: 4,
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
          return "FamilyGroupMember";
        }
      }
      class _ extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(_ = null) {
          super(),
            _.prototype.steamid || _._(_._()),
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
                  steamid: {
                    _: 1,
                    _: _._.readFixed64String,
                    _: _._.writeFixed64String,
                  },
                  role: {
                    _: 2,
                    _: _._.readEnum,
                    _: _._.writeEnum,
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
          return "FamilyGroupPendingInvite";
        }
      }
      class _ extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(_ = null) {
          super(),
            _.prototype.steamid || _._(_._()),
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
                  steamid: {
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
          return "FamilyGroupFormerMember";
        }
      }
      class _ extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(_ = null) {
          super(),
            _.prototype.name || _._(_._()),
            _.Message.initialize(this, _, 0, -1, [2, 3, 7], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            _.sm_m ||
              (_.sm_m = {
                proto: _,
                fields: {
                  name: {
                    _: 1,
                    _: _._.readString,
                    _: _._.writeString,
                  },
                  members: {
                    _: 2,
                    _: _,
                    _: !0,
                    _: !0,
                  },
                  pending_invites: {
                    _: 3,
                    _: _,
                    _: !0,
                    _: !0,
                  },
                  free_spots: {
                    _: 4,
                    _: _._.readUint32,
                    _: _._.writeUint32,
                  },
                  country: {
                    _: 5,
                    _: _._.readString,
                    _: _._.writeString,
                  },
                  slot_cooldown_remaining_seconds: {
                    _: 6,
                    _: _._.readUint32,
                    _: _._.writeUint32,
                  },
                  former_members: {
                    _: 7,
                    _: _,
                    _: !0,
                    _: !0,
                  },
                  slot_cooldown_overrides: {
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
          return "CFamilyGroups_GetFamilyGroup_Response";
        }
      }
      class _ extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(_ = null) {
          super(),
            _.prototype.family_groupid || _._(_._()),
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
                  family_groupid: {
                    _: 1,
                    _: _._.readUint64String,
                    _: _._.writeUint64String,
                  },
                  role: {
                    _: 2,
                    _: _._.readEnum,
                    _: _._.writeEnum,
                  },
                  inviter_steamid: {
                    _: 3,
                    _: _._.readFixed64String,
                    _: _._.writeFixed64String,
                  },
                  awaiting_2fa: {
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
          return "FamilyGroupPendingInviteForUser";
        }
      }
      class _ extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(_ = null) {
          super(),
            _.prototype.steamid || _._(_._()),
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
                  steamid: {
                    _: 1,
                    _: _._.readUint64String,
                    _: _._.writeUint64String,
                  },
                  include_family_group_response: {
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
          return "CFamilyGroups_GetFamilyGroupForUser_Request";
        }
      }
      class _ extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(_ = null) {
          super(),
            _.prototype.family_groupid || _._(_._()),
            _.Message.initialize(this, _, 0, -1, [5], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            _.sm_m ||
              (_.sm_m = {
                proto: _,
                fields: {
                  family_groupid: {
                    _: 1,
                    _: _._.readUint64String,
                    _: _._.writeUint64String,
                  },
                  is_not_member_of_any_group: {
                    _: 2,
                    _: _._.readBool,
                    _: _._.writeBool,
                  },
                  latest_time_joined: {
                    _: 3,
                    _: _._.readUint32,
                    _: _._.writeUint32,
                  },
                  latest_joined_family_groupid: {
                    _: 4,
                    _: _._.readUint64String,
                    _: _._.writeUint64String,
                  },
                  pending_group_invites: {
                    _: 5,
                    _: _,
                    _: !0,
                    _: !0,
                  },
                  role: {
                    _: 6,
                    _: _._.readUint32,
                    _: _._.writeUint32,
                  },
                  cooldown_seconds_remaining: {
                    _: 7,
                    _: _._.readUint32,
                    _: _._.writeUint32,
                  },
                  family_group: {
                    _: 8,
                    _: _,
                  },
                  can_undelete_last_joined_family: {
                    _: 9,
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
          return "CFamilyGroups_GetFamilyGroupForUser_Response";
        }
      }
      class _ extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(_ = null) {
          super(),
            _.prototype.family_groupid || _._(_._()),
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
                  family_groupid: {
                    _: 1,
                    _: _._.readUint64String,
                    _: _._.writeUint64String,
                  },
                  name: {
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
          return "CFamilyGroups_ModifyFamilyGroupDetails_Request";
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
          return "CFamilyGroups_ModifyFamilyGroupDetails_Response";
        }
      }
      class _ extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(_ = null) {
          super(),
            _.prototype.family_groupid || _._(_._()),
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
                  family_groupid: {
                    _: 1,
                    _: _._.readUint64String,
                    _: _._.writeUint64String,
                  },
                  receiver_steamid: {
                    _: 2,
                    _: _._.readFixed64String,
                    _: _._.writeFixed64String,
                  },
                  receiver_role: {
                    _: 3,
                    _: _._.readEnum,
                    _: _._.writeEnum,
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
          return "CFamilyGroups_InviteToFamilyGroup_Request";
        }
      }
      class _ extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(_ = null) {
          super(),
            _.prototype.invite_id || _._(_._()),
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
                  invite_id: {
                    _: 1,
                    _: _._.readUint64String,
                    _: _._.writeUint64String,
                  },
                  two_factor_method: {
                    _: 2,
                    _: _._.readEnum,
                    _: _._.writeEnum,
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
          return "CFamilyGroups_InviteToFamilyGroup_Response";
        }
      }
      class _ extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(_ = null) {
          super(),
            _.prototype.family_groupid || _._(_._()),
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
                  family_groupid: {
                    _: 1,
                    _: _._.readUint64String,
                    _: _._.writeUint64String,
                  },
                  nonce: {
                    _: 2,
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
          return "CFamilyGroups_JoinFamilyGroup_Request";
        }
      }
      class _ extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(_ = null) {
          super(),
            _.prototype.two_factor_method || _._(_._()),
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
                  two_factor_method: {
                    _: 2,
                    _: _._.readEnum,
                    _: _._.writeEnum,
                  },
                  cooldown_skip_granted: {
                    _: 3,
                    _: _._.readBool,
                    _: _._.writeBool,
                  },
                  invite_already_accepted: {
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
          return "CFamilyGroups_JoinFamilyGroup_Response";
        }
      }
      class _ extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(_ = null) {
          super(),
            _.prototype.family_groupid || _._(_._()),
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
                  family_groupid: {
                    _: 1,
                    _: _._.readUint64String,
                    _: _._.writeUint64String,
                  },
                  steamid_to_remove: {
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
          return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
        }
        getClassName() {
          return "CFamilyGroups_RemoveFromFamilyGroup_Request";
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
          return "CFamilyGroups_RemoveFromFamilyGroup_Response";
        }
      }
      class _ extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(_ = null) {
          super(),
            _.prototype.family_groupid || _._(_._()),
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
                  family_groupid: {
                    _: 1,
                    _: _._.readUint64String,
                    _: _._.writeUint64String,
                  },
                  steamid_to_cancel: {
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
          return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
        }
        getClassName() {
          return "CFamilyGroups_CancelFamilyGroupInvite_Request";
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
          return "CFamilyGroups_CancelFamilyGroupInvite_Response";
        }
      }
      class _ extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(_ = null) {
          super(),
            _.prototype.family_groupid || _._(_._()),
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
                  family_groupid: {
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
          return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
        }
        getClassName() {
          return "CFamilyGroups_DeleteFamilyGroup_Request";
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
          return "CFamilyGroups_DeleteFamilyGroup_Response";
        }
      }
      class _ extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(_ = null) {
          super(),
            _.prototype.family_groupid || _._(_._()),
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
                  family_groupid: {
                    _: 1,
                    _: _._.readUint64String,
                    _: _._.writeUint64String,
                  },
                  client_instance_id: {
                    _: 2,
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
          return "CFamilyGroups_GetUsersSharingDevice_Request";
        }
      }
      class _ extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(_ = null) {
          super(),
            _.prototype.users || _._(_._()),
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
                  users: {
                    _: 1,
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
          return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
        }
        getClassName() {
          return "CFamilyGroups_GetUsersSharingDevice_Response";
        }
      }
      class _ extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(_ = null) {
          super(),
            _.prototype.family_groupid || _._(_._()),
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
                  family_groupid: {
                    _: 1,
                    _: _._.readUint64String,
                    _: _._.writeUint64String,
                  },
                  gidshoppingcart: {
                    _: 2,
                    _: _._.readUint64String,
                    _: _._.writeUint64String,
                  },
                  store_country_code: {
                    _: 3,
                    _: _._.readString,
                    _: _._.writeString,
                  },
                  use_account_cart: {
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
          return "CFamilyGroups_RequestPurchase_Request";
        }
      }
      class _ extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(_ = null) {
          super(),
            _.prototype.gidshoppingcart || _._(_._()),
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
                  gidshoppingcart: {
                    _: 1,
                    _: _._.readUint64String,
                    _: _._.writeUint64String,
                  },
                  request_id: {
                    _: 2,
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
          return "CFamilyGroups_RequestPurchase_Response";
        }
      }
      class _ extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(_ = null) {
          super(),
            _.prototype.family_groupid || _._(_._()),
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
                  family_groupid: {
                    _: 1,
                    _: _._.readUint64String,
                    _: _._.writeUint64String,
                  },
                  request_ids: {
                    _: 3,
                    _: !0,
                    _: !0,
                    _: _._.readUint64String,
                    pbr: _._.readPackedUint64String,
                    _: _._.writeRepeatedUint64String,
                  },
                  rt_include_completed_since: {
                    _: 4,
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
          return "CFamilyGroups_GetPurchaseRequests_Request";
        }
      }
      class _ extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(_ = null) {
          super(),
            _.prototype.requester_steamid || _._(_._()),
            _.Message.initialize(this, _, 0, -1, [9, 10, 11, 12], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            _.sm_m ||
              (_.sm_m = {
                proto: _,
                fields: {
                  requester_steamid: {
                    _: 1,
                    _: _._.readFixed64String,
                    _: _._.writeFixed64String,
                  },
                  gidshoppingcart: {
                    _: 2,
                    _: _._.readUint64String,
                    _: _._.writeUint64String,
                  },
                  time_requested: {
                    _: 3,
                    _: _._.readUint32,
                    _: _._.writeUint32,
                  },
                  time_responded: {
                    _: 4,
                    _: _._.readUint32,
                    _: _._.writeUint32,
                  },
                  responder_steamid: {
                    _: 5,
                    _: _._.readFixed64String,
                    _: _._.writeFixed64String,
                  },
                  response_action: {
                    _: 6,
                    _: _._.readEnum,
                    _: _._.writeEnum,
                  },
                  is_completed: {
                    _: 7,
                    _: _._.readBool,
                    _: _._.writeBool,
                  },
                  request_id: {
                    _: 8,
                    _: _._.readUint64String,
                    _: _._.writeUint64String,
                  },
                  requested_packageids: {
                    _: 9,
                    _: !0,
                    _: !0,
                    _: _._.readUint32,
                    pbr: _._.readPackedUint32,
                    _: _._.writeRepeatedUint32,
                  },
                  purchased_packageids: {
                    _: 10,
                    _: !0,
                    _: !0,
                    _: _._.readUint32,
                    pbr: _._.readPackedUint32,
                    _: _._.writeRepeatedUint32,
                  },
                  requested_bundleids: {
                    _: 11,
                    _: !0,
                    _: !0,
                    _: _._.readUint32,
                    pbr: _._.readPackedUint32,
                    _: _._.writeRepeatedUint32,
                  },
                  purchased_bundleids: {
                    _: 12,
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
          return "PurchaseRequest";
        }
      }
      class _ extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(_ = null) {
          super(),
            _.prototype.requests || _._(_._()),
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
                  requests: {
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
          return "CFamilyGroups_GetPurchaseRequests_Response";
        }
      }
      class _ extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(_ = null) {
          super(),
            _.prototype.family_groupid || _._(_._()),
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
                  family_groupid: {
                    _: 1,
                    _: _._.readUint64String,
                    _: _._.writeUint64String,
                  },
                  action: {
                    _: 3,
                    _: _._.readEnum,
                    _: _._.writeEnum,
                  },
                  request_id: {
                    _: 4,
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
          return "CFamilyGroups_RespondToRequestedPurchase_Request";
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
          return "CFamilyGroups_RespondToRequestedPurchase_Response";
        }
      }
      class _ extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(_ = null) {
          super(),
            _.prototype.family_groupid || _._(_._()),
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
                  family_groupid: {
                    _: 1,
                    _: _._.readUint64String,
                    _: _._.writeUint64String,
                  },
                  running_apps: {
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
          return "CFamilyGroupsClient_NotifyRunningApps_Notification";
        }
      }
      class _ extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(_ = null) {
          super(),
            _.prototype.member_steamid || _._(_._()),
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
                  member_steamid: {
                    _: 1,
                    _: _._.readFixed64String,
                    _: _._.writeFixed64String,
                  },
                  owner_steamid: {
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
          return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
        }
        getClassName() {
          return "CFamilyGroupsClient_NotifyRunningApps_Notification_PlayingMember";
        }
      }
      class _ extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(_ = null) {
          super(),
            _.prototype.appid || _._(_._()),
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
                  appid: {
                    _: 1,
                    _: _._.readUint32,
                    _: _._.writeUint32,
                  },
                  playing_members: {
                    _: 3,
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
          return "CFamilyGroupsClient_NotifyRunningApps_Notification_RunningApp";
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
          return "CFamilyGroupsClient_InviteStatus_Notification";
        }
      }
      class _ extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(_ = null) {
          super(),
            _.prototype.family_groupid || _._(_._()),
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
                  family_groupid: {
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
          return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
        }
        getClassName() {
          return "CFamilyGroupsClient_GroupChanged_Notification";
        }
      }
      class _ extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(_ = null) {
          super(),
            _.prototype.family_groupid || _._(_._()),
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
                  family_groupid: {
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
          return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
        }
        getClassName() {
          return "CFamilyGroups_GetChangeLog_Request";
        }
      }
      class _ extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(_ = null) {
          super(),
            _.prototype.changes || _._(_._()),
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
                  changes: {
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
          return "CFamilyGroups_GetChangeLog_Response";
        }
      }
      class _ extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(_ = null) {
          super(),
            _.prototype.timestamp || _._(_._()),
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
                  timestamp: {
                    _: 1,
                    _: _._.readFixed64String,
                    _: _._.writeFixed64String,
                  },
                  actor_steamid: {
                    _: 2,
                    _: _._.readFixed64String,
                    _: _._.writeFixed64String,
                  },
                  type: {
                    _: 3,
                    _: _._.readEnum,
                    _: _._.writeEnum,
                  },
                  body: {
                    _: 4,
                    _: _._.readString,
                    _: _._.writeString,
                  },
                  by_support: {
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
          return "CFamilyGroups_GetChangeLog_Response_Change";
        }
      }
      class _ extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(_ = null) {
          super(),
            _.prototype.steamid || _._(_._()),
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
                  steamid: {
                    _: 1,
                    _: _._.readFixed64String,
                    _: _._.writeFixed64String,
                  },
                  appid: {
                    _: 2,
                    _: _._.readUint32,
                    _: _._.writeUint32,
                  },
                  first_played: {
                    _: 3,
                    _: _._.readUint32,
                    _: _._.writeUint32,
                  },
                  latest_played: {
                    _: 4,
                    _: _._.readUint32,
                    _: _._.writeUint32,
                  },
                  seconds_played: {
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
          return "CFamilyGroups_PlaytimeEntry";
        }
      }
      class _ extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(_ = null) {
          super(),
            _.prototype.family_groupid || _._(_._()),
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
                  family_groupid: {
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
          return "CFamilyGroups_GetPlaytimeSummary_Request";
        }
      }
      class _ extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(_ = null) {
          super(),
            _.prototype.entries || _._(_._()),
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
                  entries: {
                    _: 1,
                    _: _,
                    _: !0,
                    _: !0,
                  },
                  entries_by_owner: {
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
          return "CFamilyGroups_GetPlaytimeSummary_Response";
        }
      }
      class _ extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(_ = null) {
          super(),
            _.prototype.family_groupid || _._(_._()),
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
                  family_groupid: {
                    _: 1,
                    _: _._.readUint64String,
                    _: _._.writeUint64String,
                  },
                  cooldown_count: {
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
          return "CFamilyGroups_SetFamilyCooldownOverrides_Request";
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
          return "CFamilyGroups_SetFamilyCooldownOverrides_Response";
        }
      }
      class _ extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(_ = null) {
          super(),
            _.prototype.family_groupid || _._(_._()),
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
                  family_groupid: {
                    _: 1,
                    _: _._.readFixed64String,
                    _: _._.writeFixed64String,
                  },
                  include_own: {
                    _: 2,
                    _: _._.readBool,
                    _: _._.writeBool,
                  },
                  include_excluded: {
                    _: 3,
                    _: _._.readBool,
                    _: _._.writeBool,
                  },
                  language: {
                    _: 5,
                    _: _._.readString,
                    _: _._.writeString,
                  },
                  max_apps: {
                    _: 6,
                    _: _._.readUint32,
                    _: _._.writeUint32,
                  },
                  include_non_games: {
                    _: 7,
                    _: _._.readBool,
                    _: _._.writeBool,
                  },
                  steamid: {
                    _: 8,
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
          return "CFamilyGroups_GetSharedLibraryApps_Request";
        }
      }
      class _ extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(_ = null) {
          super(),
            _.prototype.apps || _._(_._()),
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
                  apps: {
                    _: 1,
                    _: _,
                    _: !0,
                    _: !0,
                  },
                  owner_steamid: {
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
          return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
        }
        getClassName() {
          return "CFamilyGroups_GetSharedLibraryApps_Response";
        }
      }
      class _ extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(_ = null) {
          super(),
            _.prototype.appid || _._(_._()),
            _.Message.initialize(this, _, 0, -1, [2, 15], null);
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
                  owner_steamids: {
                    _: 2,
                    _: !0,
                    _: !0,
                    _: _._.readFixed64String,
                    pbr: _._.readPackedFixed64String,
                    _: _._.writeRepeatedFixed64String,
                  },
                  name: {
                    _: 6,
                    _: _._.readString,
                    _: _._.writeString,
                  },
                  sort_as: {
                    _: 7,
                    _: _._.readString,
                    _: _._.writeString,
                  },
                  capsule_filename: {
                    _: 8,
                    _: _._.readString,
                    _: _._.writeString,
                  },
                  img_icon_hash: {
                    _: 9,
                    _: _._.readString,
                    _: _._.writeString,
                  },
                  exclude_reason: {
                    _: 10,
                    _: 0,
                    _: _._.readEnum,
                    _: _._.writeEnum,
                  },
                  rt_time_acquired: {
                    _: 11,
                    _: _._.readUint32,
                    _: _._.writeUint32,
                  },
                  rt_last_played: {
                    _: 12,
                    _: _._.readUint32,
                    _: _._.writeUint32,
                  },
                  rt_playtime: {
                    _: 13,
                    _: _._.readUint32,
                    _: _._.writeUint32,
                  },
                  app_type: {
                    _: 14,
                    _: 1,
                    _: _._.readEnum,
                    _: _._.writeEnum,
                  },
                  content_descriptors: {
                    _: 15,
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
          return "CFamilyGroups_GetSharedLibraryApps_Response_SharedApp";
        }
      }
      class _ extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(_ = null) {
          super(),
            _.prototype.family_groupid || _._(_._()),
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
                  family_groupid: {
                    _: 1,
                    _: _._.readUint64String,
                    _: _._.writeUint64String,
                  },
                  invite_id: {
                    _: 2,
                    _: _._.readUint64String,
                    _: _._.writeUint64String,
                  },
                  nonce: {
                    _: 3,
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
          return "CFamilyGroups_ConfirmInviteToFamilyGroup_Request";
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
          return "CFamilyGroups_ConfirmInviteToFamilyGroup_Response";
        }
      }
      class _ extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(_ = null) {
          super(),
            _.prototype.family_groupid || _._(_._()),
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
                  family_groupid: {
                    _: 1,
                    _: _._.readUint64String,
                    _: _._.writeUint64String,
                  },
                  invite_id: {
                    _: 2,
                    _: _._.readUint64String,
                    _: _._.writeUint64String,
                  },
                  nonce: {
                    _: 3,
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
          return "CFamilyGroups_ConfirmJoinFamilyGroup_Request";
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
          return "CFamilyGroups_ConfirmJoinFamilyGroup_Response";
        }
      }
      class _ extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(_ = null) {
          super(),
            _.prototype.family_groupid || _._(_._()),
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
                  family_groupid: {
                    _: 1,
                    _: _._.readUint64String,
                    _: _._.writeUint64String,
                  },
                  steamid: {
                    _: 2,
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
          return "CFamilyGroups_ResendInvitationToFamilyGroup_Request";
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
          return "CFamilyGroups_ResendInvitationToFamilyGroup_Response";
        }
      }
      class _ extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(_ = null) {
          super(),
            _.prototype.family_groupid || _._(_._()),
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
                  family_groupid: {
                    _: 1,
                    _: _._.readUint64String,
                    _: _._.writeUint64String,
                  },
                  appid: {
                    _: 2,
                    _: _._.readUint32,
                    _: _._.writeUint32,
                  },
                  lender_steamid: {
                    _: 3,
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
          return "CFamilyGroups_SetPreferredLender_Request";
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
          return "CFamilyGroups_SetPreferredLender_Response";
        }
      }
      class _ extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(_ = null) {
          super(),
            _.prototype.family_groupid || _._(_._()),
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
                  family_groupid: {
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
          return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
        }
        getClassName() {
          return "CFamilyGroups_GetPreferredLenders_Request";
        }
      }
      class _ extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(_ = null) {
          super(),
            _.prototype.members || _._(_._()),
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
                  members: {
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
          return "CFamilyGroups_GetPreferredLenders_Response";
        }
      }
      class _ extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(_ = null) {
          super(),
            _.prototype.steamid || _._(_._()),
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
                  steamid: {
                    _: 1,
                    _: _._.readFixed64String,
                    _: _._.writeFixed64String,
                  },
                  preferred_appids: {
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
          return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
        }
        getClassName() {
          return "CFamilyGroups_GetPreferredLenders_Response_FamilyMember";
        }
      }
      class _ extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(_ = null) {
          super(),
            _.prototype.family_groupid || _._(_._()),
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
                  family_groupid: {
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
          return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
        }
        getClassName() {
          return "CFamilyGroups_UndeleteFamilyGroup_Request";
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
          return "CFamilyGroups_UndeleteFamilyGroup_Response";
        }
      }
      class _ extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(_ = null) {
          super(),
            _.prototype.family_groupid || _._(_._()),
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
                  family_groupid: {
                    _: 1,
                    _: _._.readUint64String,
                    _: _._.writeUint64String,
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
          return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
        }
        getClassName() {
          return "CFamilyGroups_ForceAcceptInvite_Request";
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
          return "CFamilyGroups_ForceAcceptInvite_Response";
        }
      }
      class _ extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(_ = null) {
          super(),
            _.prototype.family_groupid || _._(_._()),
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
                  family_groupid: {
                    _: 1,
                    _: _._.readUint64String,
                    _: _._.writeUint64String,
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
          return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
        }
        getClassName() {
          return "CFamilyGroups_GetInviteCheckResults_Request";
        }
      }
      class _ extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(_ = null) {
          super(),
            _.prototype.wallet_country_matches || _._(_._()),
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
                  wallet_country_matches: {
                    _: 1,
                    _: _._.readBool,
                    _: _._.writeBool,
                  },
                  ip_match: {
                    _: 2,
                    _: _._.readBool,
                    _: _._.writeBool,
                  },
                  join_restriction: {
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
          return "CFamilyGroups_GetInviteCheckResults_Response";
        }
      }
      class _ extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(_ = null) {
          super(),
            _.prototype.steamid || _._(_._()),
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
                  steamid: {
                    _: 1,
                    _: _._.readFixed64String,
                    _: _._.writeFixed64String,
                  },
                  invite_id: {
                    _: 2,
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
          return "CFamilyGroups_ClearCooldownSkip_Request";
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
          return "CFamilyGroups_ClearCooldownSkip_Response";
        }
      }
      !(function (_) {
        (_.CreateFamilyGroup = function (_, _) {
          return _.SendMsg(
            "FamilyGroups.CreateFamilyGroup#1",
            (0, _._)(_, _),
            _,
            {
              ePrivilege: 1,
            },
          );
        }),
          (_.GetFamilyGroup = function (_, _) {
            return _.SendMsg(
              "FamilyGroups.GetFamilyGroup#1",
              (0, _._)(_, _),
              _,
              {
                bConstMethod: !0,
                ePrivilege: 1,
              },
            );
          }),
          (_.GetFamilyGroupForUser = function (_, _) {
            return _.SendMsg(
              "FamilyGroups.GetFamilyGroupForUser#1",
              (0, _._)(_, _),
              _,
              {
                bConstMethod: !0,
                ePrivilege: 1,
              },
            );
          }),
          (_.ModifyFamilyGroupDetails = function (_, _) {
            return _.SendMsg(
              "FamilyGroups.ModifyFamilyGroupDetails#1",
              (0, _._)(_, _),
              _,
              {
                ePrivilege: 1,
              },
            );
          }),
          (_.InviteToFamilyGroup = function (_, _) {
            return _.SendMsg(
              "FamilyGroups.InviteToFamilyGroup#1",
              (0, _._)(_, _),
              _,
              {
                ePrivilege: 1,
              },
            );
          }),
          (_.ConfirmInviteToFamilyGroup = function (_, _) {
            return _.SendMsg(
              "FamilyGroups.ConfirmInviteToFamilyGroup#1",
              (0, _._)(_, _),
              _,
              {
                ePrivilege: 1,
              },
            );
          }),
          (_.ResendInvitationToFamilyGroup = function (_, _) {
            return _.SendMsg(
              "FamilyGroups.ResendInvitationToFamilyGroup#1",
              (0, _._)(_, _),
              _,
              {
                ePrivilege: 1,
              },
            );
          }),
          (_.JoinFamilyGroup = function (_, _) {
            return _.SendMsg(
              "FamilyGroups.JoinFamilyGroup#1",
              (0, _._)(_, _),
              _,
              {
                ePrivilege: 1,
              },
            );
          }),
          (_.ConfirmJoinFamilyGroup = function (_, _) {
            return _.SendMsg(
              "FamilyGroups.ConfirmJoinFamilyGroup#1",
              (0, _._)(_, _),
              _,
              {
                ePrivilege: 1,
              },
            );
          }),
          (_.RemoveFromFamilyGroup = function (_, _) {
            return _.SendMsg(
              "FamilyGroups.RemoveFromFamilyGroup#1",
              (0, _._)(_, _),
              _,
              {
                ePrivilege: 1,
              },
            );
          }),
          (_.CancelFamilyGroupInvite = function (_, _) {
            return _.SendMsg(
              "FamilyGroups.CancelFamilyGroupInvite#1",
              (0, _._)(_, _),
              _,
              {
                ePrivilege: 1,
              },
            );
          }),
          (_.GetUsersSharingDevice = function (_, _) {
            return _.SendMsg(
              "FamilyGroups.GetUsersSharingDevice#1",
              (0, _._)(_, _),
              _,
              {
                bConstMethod: !0,
                ePrivilege: 1,
              },
            );
          }),
          (_.DeleteFamilyGroup = function (_, _) {
            return _.SendMsg(
              "FamilyGroups.DeleteFamilyGroup#1",
              (0, _._)(_, _),
              _,
              {
                ePrivilege: 1,
              },
            );
          }),
          (_.UndeleteFamilyGroup = function (_, _) {
            return _.SendMsg(
              "FamilyGroups.UndeleteFamilyGroup#1",
              (0, _._)(_, _),
              _,
              {
                ePrivilege: 1,
              },
            );
          }),
          (_.GetPlaytimeSummary = function (_, _) {
            return _.SendMsg(
              "FamilyGroups.GetPlaytimeSummary#1",
              (0, _._)(_, _),
              _,
              {
                ePrivilege: 1,
              },
            );
          }),
          (_.RequestPurchase = function (_, _) {
            return _.SendMsg(
              "FamilyGroups.RequestPurchase#1",
              (0, _._)(_, _),
              _,
              {
                ePrivilege: 1,
              },
            );
          }),
          (_.GetPurchaseRequests = function (_, _) {
            return _.SendMsg(
              "FamilyGroups.GetPurchaseRequests#1",
              (0, _._)(_, _),
              _,
              {
                bConstMethod: !0,
                ePrivilege: 1,
              },
            );
          }),
          (_.RespondToRequestedPurchase = function (_, _) {
            return _.SendMsg(
              "FamilyGroups.RespondToRequestedPurchase#1",
              (0, _._)(_, _),
              _,
              {
                ePrivilege: 1,
              },
            );
          }),
          (_.GetChangeLog = function (_, _) {
            return _.SendMsg("FamilyGroups.GetChangeLog#1", (0, _._)(_, _), _, {
              bConstMethod: !0,
              ePrivilege: 1,
            });
          }),
          (_.SetFamilyCooldownOverrides = function (_, _) {
            return _.SendMsg(
              "FamilyGroups.SetFamilyCooldownOverrides#1",
              (0, _._)(_, _),
              _,
              {
                ePrivilege: 1,
              },
            );
          }),
          (_.GetSharedLibraryApps = function (_, _) {
            return _.SendMsg(
              "FamilyGroups.GetSharedLibraryApps#1",
              (0, _._)(_, _),
              _,
              {
                bConstMethod: !0,
                ePrivilege: 1,
              },
            );
          }),
          (_.SetPreferredLender = function (_, _) {
            return _.SendMsg(
              "FamilyGroups.SetPreferredLender#1",
              (0, _._)(_, _),
              _,
              {
                ePrivilege: 1,
              },
            );
          }),
          (_.GetPreferredLenders = function (_, _) {
            return _.SendMsg(
              "FamilyGroups.GetPreferredLenders#1",
              (0, _._)(_, _),
              _,
              {
                bConstMethod: !0,
                ePrivilege: 1,
              },
            );
          }),
          (_.ForceAcceptInvite = function (_, _) {
            return _.SendMsg(
              "FamilyGroups.ForceAcceptInvite#1",
              (0, _._)(_, _),
              _,
              {
                ePrivilege: 5,
              },
            );
          }),
          (_.GetInviteCheckResults = function (_, _) {
            return _.SendMsg(
              "FamilyGroups.GetInviteCheckResults#1",
              (0, _._)(_, _),
              _,
              {
                bConstMethod: !0,
                ePrivilege: 5,
              },
            );
          }),
          (_.ClearCooldownSkip = function (_, _) {
            return _.SendMsg(
              "FamilyGroups.ClearCooldownSkip#1",
              (0, _._)(_, _),
              _,
              {
                ePrivilege: 5,
              },
            );
          });
      })(_ || (_ = {})),
        (function (_) {
          (_.NotifyRunningAppsHandler = {
            name: "FamilyGroupsClient.NotifyRunningApps#1",
            request: _,
          }),
            (_.NotifyInviteStatusHandler = {
              name: "FamilyGroupsClient.NotifyInviteStatus#1",
              request: _,
            }),
            (_.NotifyGroupChangedHandler = {
              name: "FamilyGroupsClient.NotifyGroupChanged#1",
              request: _,
            });
        })(_ || (_ = {}));
      var _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = (__webpack_require__("chunkid"), __webpack_require__("chunkid")),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid");
      const _ = (_, _) =>
          void 0 === _
            ? ["get_family_group_for_user ", _]
            : ["get_family_group_for_user ", _, _],
        _ = (_) => ["get_family_group", _],
        _ = (_) => ["get_family_history", _],
        _ = (_) => ["get_users_sharing_device", _],
        _ = (_) => ["recent_playtime_sessions", _];
      function _(_, _, _) {
        return _
          ? ["get_purchase_requests", _, _, _]
          : _
            ? ["get_purchase_requests", _, _]
            : ["get_purchase_requests", _];
      }
      function _(_, _) {
        if (1 != _) throw _;
      }
      const _ = _.createContext({
        staleTimeMs: 1 / 0,
      });
      function _(_) {
        const { staleTimeMs: _, children: __webpack_require__ } = _,
          _ = _.useMemo(
            () => ({
              staleTimeMs: _ ?? 3e3,
            }),
            [_],
          );
        return _.createElement(
          _.Provider,
          {
            value: _,
          },
          __webpack_require__,
        );
      }
      function _(_ = !1) {
        return _((0, _._)(), _);
      }
      function _(_, _ = !1) {
        const _ = (0, _._)(),
          _ = (0, _.useContext)(_).staleTimeMs;
        return (0, _._)({
          queryKey: _(_, _),
          queryFn: async () => {
            const _ = _._.Init(_);
            _.Body().set_steamid(_),
              _.Body().set_include_family_group_response(_);
            const _ = await _.GetFamilyGroupForUser(_, _);
            return _(_.GetEResult()), _.Body();
          },
          staleTime: _,
          enabled: !!_,
          placeholderData: _ ? void 0 : new _(),
        });
      }
      function _(_) {
        const _ = (0, _._)(),
          _ = (0, _.useContext)(_).staleTimeMs;
        return (0, _._)({
          queryKey: _(_),
          queryFn: async () => {
            if (_) {
              const _ = _._.Init(_);
              __webpack_require__.Body().set_family_groupid(_);
              const _ = await _.GetFamilyGroup(_, _);
              return _(_.GetEResult()), _.Body();
            }
            throw 42;
          },
          staleTime: _,
        });
      }
      function _() {
        const _ = (0, _._)(),
          _ = (0, _._)(),
          _ = (0, _._)();
        return (0, _._)({
          mutationFn: async (_) => {
            const _ = _._.Init(_);
            __webpack_require__.Body().set_name(_);
            const _ = await _.CreateFamilyGroup(_, _);
            return _(_.GetEResult()), _.Body();
          },
          onSuccess: () => {
            _.invalidateQueries({
              queryKey: _(_),
            });
          },
        });
      }
      function _(_) {
        const _ = (0, _._)(),
          _ = (0, _._)(),
          _ = (0, _._)();
        return (0, _._)({
          mutationFn: async () => {
            const _ = _._.Init(_);
            __webpack_require__.Body().set_family_groupid(_);
            const _ = await _.DeleteFamilyGroup(_, _);
            return _(_.GetEResult()), _.Body();
          },
          onSuccess: () => {
            __webpack_require__.invalidateQueries({
              queryKey: _(_),
            }),
              __webpack_require__.invalidateQueries({
                queryKey: _(_),
              }),
              __webpack_require__.invalidateQueries({
                queryKey: _(_),
              });
          },
        });
      }
      function _(_) {
        const _ = (0, _._)(),
          _ = (0, _._)();
        return (0, _._)({
          mutationFn: async (_) => {
            const _ = _._.Init(_);
            _.Body().set_family_groupid(_), _.Body().set_name(_);
            const _ = await _.ModifyFamilyGroupDetails(_, _);
            return _(_.GetEResult()), _.Body();
          },
          onSuccess: () => {
            __webpack_require__.invalidateQueries({
              queryKey: _(_),
            }),
              __webpack_require__.invalidateQueries({
                queryKey: _(_),
              });
          },
        });
      }
      function _(_, _, _) {
        const _ = (0, _._)(),
          _ = (0, _._)();
        return (0, _._)({
          mutationFn: async () => {
            const _ = _._.Init(_);
            _.Body().set_family_groupid(_),
              _.Body().set_receiver_steamid(_),
              _.Body().set_receiver_role(_);
            const _ = await _.InviteToFamilyGroup(_, _);
            return _(_.GetEResult()), _.Body();
          },
          onSuccess: () => {
            _.invalidateQueries({
              queryKey: _(_),
            }),
              _.invalidateQueries({
                queryKey: _(_),
              }),
              _.invalidateQueries({
                queryKey: _(_),
              });
          },
        });
      }
      function _(_, _ = null) {
        const _ = (0, _._)(),
          _ = (0, _._)(),
          _ = (0, _._)();
        return (0, _._)({
          mutationFn: async () => {
            const _ = _._.Init(_);
            _.Body().set_family_groupid(_), null !== _ && _.Body().set_nonce(_);
            const _ = await _.JoinFamilyGroup(_, _);
            return _(_.GetEResult()), _.Body();
          },
          onSuccess: () => {
            _.invalidateQueries({
              queryKey: _(_),
            }),
              _.invalidateQueries({
                queryKey: _(_),
              }),
              _.invalidateQueries({
                queryKey: _(_),
              });
          },
        });
      }
      function _(_, _) {
        const _ = (0, _._)(),
          _ = (0, _._)();
        return (0, _._)({
          mutationFn: async () => {
            const _ = _._.Init(_);
            _.Body().set_family_groupid(_), _.Body().set_steamid_to_cancel(_);
            const _ = await _.CancelFamilyGroupInvite(_, _);
            return _(_.GetEResult()), _.Body();
          },
          onSuccess: () => {
            _.invalidateQueries({
              queryKey: _(_),
            }),
              _.invalidateQueries({
                queryKey: _(_),
              }),
              _.invalidateQueries({
                queryKey: _(_),
              });
          },
        });
      }
      function _(_, _) {
        const _ = (0, _._)(),
          _ = (0, _._)();
        return (0, _._)({
          mutationFn: async () => {
            const _ = _._.Init(_);
            _.Body().set_family_groupid(_), _.Body().set_steamid_to_remove(_);
            const _ = await _.RemoveFromFamilyGroup(_, _);
            return _(_.GetEResult()), _.Body();
          },
          onSuccess: () => {
            _.invalidateQueries({
              queryKey: _(_),
            }),
              _.invalidateQueries({
                queryKey: _(_),
              }),
              _.invalidateQueries({
                queryKey: _(_),
              });
          },
        });
      }
      function _(_) {
        const _ = (0, _._)();
        return (0, _._)({
          queryKey: _(_),
          queryFn: async () => {
            const _ = (0, _._)("clientsessionid"),
              _ = _ && BigInt("0x" + _).toString(),
              _ = _._.Init(_);
            _.Body().set_family_groupid(_),
              _.Body().set_client_instance_id(_ ?? void 0);
            const _ = await _.GetUsersSharingDevice(_, _);
            return _(_.GetEResult()), _.Body();
          },
        });
      }
      function _(_) {
        const _ = (0, _._)(),
          _ = _(_);
        return _.data
          ?.members()
          .find((_) => _.steamid() == _)
          ?.role();
      }
      function _(_, _) {
        const _ = (0, _._)();
        return (0, _._)({
          mutationFn: async () => {
            const _ = _._.Init(_);
            _.Body().set_family_groupid(_),
              _.Body().set_use_account_cart(!0),
              _.Body().set_store_country_code(_);
            const _ = await _.RequestPurchase(_, _);
            return _(_.GetEResult()), _.Body();
          },
        });
      }
      function _(_, _) {
        const _ = (0, _._)(),
          _ = (0, _._)();
        return (0, _._)({
          queryKey: _(_, _),
          queryFn: async () => {
            const _ = _._.Init(_);
            _.Body().set_family_groupid(_),
              void 0 !== _ && _.Body().set_rt_include_completed_since(_);
            const _ = await _.GetPurchaseRequests(_, _);
            return _(_.GetEResult()), _.Body();
          },
        });
      }
      function _(_, _) {
        const _ = (0, _._)(),
          _ = (0, _._)();
        return (0, _._)({
          queryKey: _(_, _, _),
          queryFn: async () => {
            const _ = _._.Init(_);
            _.Body().set_family_groupid(_), _.Body().add_request_ids(_);
            const _ = await _.GetPurchaseRequests(_, _);
            return _(_.GetEResult()), _.Body();
          },
          select: (_) =>
            _.toObject().requests?.find(({ request_id: _ }) => _ === _),
        });
      }
      function _(_, _, _) {
        const _ = (0, _._)(),
          _ = (0, _._)();
        return (0, _._)({
          mutationFn: async () => {
            const _ = _._.Init(_);
            _.Body().set_family_groupid(_),
              _.Body().set_request_id(_),
              _.Body().set_action(_);
            const _ = await _.RespondToRequestedPurchase(_, _);
            return _(_.GetEResult()), _.Body();
          },
          onSuccess: () => {
            _.invalidateQueries({
              queryKey: _(_),
            }),
              _.invalidateQueries({
                queryKey: _(_),
              });
          },
        });
      }
      const _ = (0, _.createContext)({
        errorMessage: null,
        setErrorMessage: (_) => {},
      });
      var _;
      !(function (_) {
        (_[(_.k_EFamilyQueryNone = 0)] = "k_EFamilyQueryNone"),
          (_[(_.k_EFamilyQueryLoadFamily = 1)] = "k_EFamilyQueryLoadFamily"),
          (_[(_.k_EFamilyQueryJoinFamily = 2)] = "k_EFamilyQueryJoinFamily"),
          (_[(_.k_EFamilyQueryDeclineInvite = 3)] =
            "k_EFamilyQueryDeclineInvite"),
          (_[(_.k_EFamilyQueryInviteToFamily = 4)] =
            "k_EFamilyQueryInviteToFamily"),
          (_[(_.k_EFamilyQueryCreateFamily = 5)] =
            "k_EFamilyQueryCreateFamily"),
          (_[(_.k_EFamilyQueryDeleteFamily = 6)] =
            "k_EFamilyQueryDeleteFamily"),
          (_[(_.k_EFamilyQueryModifyFamily = 7)] =
            "k_EFamilyQueryModifyFamily"),
          (_[(_.k_EFamilyQueryRemoveFromFamily = 8)] =
            "k_EFamilyQueryRemoveFromFamily"),
          (_[(_.k_EFamilyQueryGetUsersSharingDevice = 9)] =
            "k_EFamilyQueryGetUsersSharingDevice"),
          (_[(_.k_EFamilyQueryPurchaseRequest = 10)] =
            "k_EFamilyQueryPurchaseRequest"),
          (_[(_.k_EFamilyQueryGetPurchaseRequests = 11)] =
            "k_EFamilyQueryGetPurchaseRequests"),
          (_[(_.k_EFamilyQueryDeclinePurchaseRequest = 12)] =
            "k_EFamilyQueryDeclinePurchaseRequest"),
          (_[(_.k_EFamilyQueryLoadHistory = 13)] = "k_EFamilyQueryLoadHistory"),
          (_[(_.k_EFamilyQueryLoadCart = 14)] = "k_EFamilyQueryLoadCart"),
          (_[(_.k_EFamilyQuerySetCooldownOverrides = 15)] =
            "k_EFamilyQuerySetCooldownOverrides"),
          (_[(_.k_EFamilyQueryResendInvite = 16)] =
            "k_EFamilyQueryResendInvite");
      })(_ || (_ = {}));
      const _ = {
        8: "#FamilyManagement_ErrorInternalServerError",
        2: "#FamilyManagement_ErrorInternalServerError",
        10: "#FamilyManagement_ErrorInternalServerError",
        37: "#FamilyManagement_ErrorInternalServerError",
        15: "#FamilyManagement_AccessDenied",
        42: "#FamilyManagement_ErrorNoMatch",
        43: "#FamilyManagement_ErrorAccountDisabled",
        11: "#FamilyManagement_ErrorNoActiveInvite",
        45: "#FamilyManagement_PartnerAccountCannotJoinAsChild",
        129: "#FamilyManagement_ErrorFamilySizeLimitExceeded",
        25: "#FamilyManagement_ErrorLimitExceeded",
        96: "#FamilyManagement_ErrorAccountActivityLimitExceeded",
        112: "#FamilyManagement_LimitedAccount_CreateFamily",
        84: {
          [_.k_EFamilyQueryCreateFamily]:
            "#FamilyManagement_RateLimitExceeded_CreateFamily",
        },
        83: {
          [_.k_EFamilyQueryCreateFamily]:
            "#FamilyManagement_RegionLocked_CreateFamily",
          [_.k_EFamilyQueryJoinFamily]:
            "#FamilyManagement_RegionLocked_JoinFamily",
        },
        31: {
          [_.k_EFamilyQueryJoinFamily]:
            "#FamilyManagement_Household_JoinFamily",
        },
        95: {
          [_.k_EFamilyQueryCreateFamily]:
            "#FamilyManagement_ErrorAccountLimitExceeded_CreateFamily",
          [_.k_EFamilyQueryJoinFamily]:
            "#FamilyManagement_ErrorAccountLimitExceeded_JoinFamily",
          [_.k_EFamilyQueryRemoveFromFamily]:
            "#FamilyManagement_ErrorAccountLimitExceeded_RemoveFromFamily",
        },
        29: {
          [_.k_EFamilyQueryJoinFamily]:
            "#FamilyManagement_ErrorDuplicateRequest_JoinFamily",
          [_.k_EFamilyQueryInviteToFamily]:
            "#FamilyManagement_ErrorDuplicateRequest_InviteToFamily",
          [_.k_EFamilyQueryRemoveFromFamily]:
            "#FamilyManagement_ErrorDuplicateRequest_RemoveFromFamily",
        },
        40: {
          [_.k_EFamilyQueryInviteToFamily]:
            "#FamilyManagement_ErrorFailed_NoAdditionalDetails",
        },
      };
      function _() {
        const { setErrorMessage: _ } = (0, _.useContext)(_);
        return {
          setErrorMessage: _,
        };
      }
      function _(_, _, _) {
        const { setErrorMessage: _ } = _();
        (0, _.useEffect)(() => {
          if (_.isError) {
            const _ = _.error;
            _(
              (function (_, _, _) {
                let _ = "";
                if (_ in _) {
                  const _ = _[_];
                  if ("string" == typeof _) _ = (0, _._)(_);
                  else {
                    const _ = _;
                    _ in _ && (_ = (0, _._)(_[_]));
                  }
                }
                return (0, _._)(_, _);
              })(_, _, _),
            );
          }
        }, [_, _.isError, _.error, _, _]);
      }
      function _(_, _) {
        const { setErrorMessage: __webpack_require__ } = _();
        (0, _.useEffect)(() => {
          _.isError && __webpack_require__((0, _._)(_));
        }, [__webpack_require__, _.isError, _]);
      }
      function _(_) {
        const _ = (0, _._)();
        return (0, _._)({
          queryKey: _(_),
          queryFn: async () => {
            const _ = _._.Init(_);
            __webpack_require__.Body().set_family_groupid(_);
            const _ = await _.GetChangeLog(_, _);
            return _(_.GetEResult()), _.Body().changes();
          },
          staleTime: 0,
        });
      }
      function _(_, _) {
        return `${_._.STORE_BASE_URL}cart/purchaserequest/${_}/${_}`;
      }
      function _(_) {
        return `${_._.STORE_BASE_URL}cart/purchaserequested/${_}`;
      }
      function _(_, _, _, _) {
        return [
          "get_shared_library_apps",
          _,
          _?.bIncludeOwn,
          _?.bIncludeExcluded,
          _?.bIncludeNonGames,
          _?.for_account_id,
          _,
          _,
        ];
      }
      function _(_, _) {
        const _ = (0, _._)(),
          { settings: _, mapAppsAllowed: _ } = (0, _._)(_).data,
          _ = (0, _._)(),
          _ = (0, _._)(),
          {
            bIncludeOwn: _,
            bIncludeExcluded: _,
            bIncludeNonGames: _,
            for_account_id: _,
          } = _ ?? {},
          _ = void 0 === _?.enabled || _.enabled,
          _ = _(_, _, _, _),
          _ = (_) => !(0, _._)(_.appid(), _, _, _);
        return (0, _._)({
          queryKey: _,
          queryFn: async () => {
            const _ = _._.Init(_);
            if (
              (_.Body().set_family_groupid(_),
              _.Body().set_include_own(_),
              _.Body().set_include_excluded(_),
              _.Body().set_language(_._.LANGUAGE),
              _.Body().set_include_non_games(_),
              _)
            ) {
              const _ = _._.InitFromAccountID(_, _._.EUNIVERSE);
              _.Body().set_steamid(_.ConvertTo64BitString());
            }
            const _ = await _.GetSharedLibraryApps(_, _);
            return (
              _(__webpack_require__.GetEResult()),
              __webpack_require__
                .Body()
                .apps()
                .filter(_)
                .map((_) => _.toObject())
            );
          },
          enabled: !!_ && _,
          placeholderData: _._,
          select: _?.select,
        });
      }
      function _(_, _) {
        const _ = (0, _._)(),
          _ = (0, _._)(),
          { settings: _ } = (0, _._)(_).data ?? {},
          _ = _(_, _, _, (0, _._)());
        return (0, _.useCallback)(() => {
          __webpack_require__.invalidateQueries({
            queryKey: _,
          });
        }, [_, _]);
      }
      function _(_, _) {
        let _ = _.sort_as || _.name,
          _ = _.sort_as || _.name;
        return (0, _._)(_, _);
      }
      function _(_, _) {
        return _.rt_time_acquired - _.rt_time_acquired || _(_, _);
      }
      function _(_, _, _, _ = []) {
        const _ = (0, _.useMemo)(
            () =>
              _?.filter((_) =>
                (function (_, _, _) {
                  if (!_ && 0 === _.length) return !0;
                  const _ = _.name?.toLocaleLowerCase(),
                    _ = _.toLocaleLowerCase(),
                    _ = _?.includes(_) || _.appid?.toString() == _;
                  let _ = !0;
                  if (_.content_descriptors)
                    for (const _ of _)
                      if (!_.content_descriptors.includes(_)) {
                        _ = !1;
                        break;
                      }
                  return _ && _;
                })(_, _, _),
              ) || [],
            [_, _, _],
          ),
          _ = (0, _.useCallback)(
            (_, _) => {
              let _ = _;
              switch (_) {
                case "alpha-asc":
                  _ = _;
                  break;
                case "alpha-desc":
                  _ = (_, _) => _(_, _);
                  break;
                case "date_acquired-asc":
                  _ = (_, _) => _(_, _);
                  break;
                case "date_acquired-desc":
                  _ = _;
              }
              return _(_, _);
            },
            [_],
          );
        return (0, _.useMemo)(() => _.slice().sort(_), [_, _]);
      }
      function _(_, _, _) {
        const _ = (0, _._)(),
          _ = (0, _._)(),
          _ = (0, _._)();
        return (0, _._)({
          mutationFn: async () => {
            const _ = _._.Init(_);
            _.Body().set_family_groupid(_),
              _.Body().set_invite_id(_),
              _.Body().set_nonce(_);
            const _ = await _.ConfirmJoinFamilyGroup(_, _);
            return _(_.GetEResult()), _.Body();
          },
          onSuccess: () => {
            _.invalidateQueries({
              queryKey: _(_),
            }),
              _.invalidateQueries({
                queryKey: _(_),
              }),
              _.invalidateQueries({
                queryKey: _(_),
              });
          },
        });
      }
      function _(_, _, _) {
        const _ = (0, _._)(),
          _ = (0, _._)();
        return (0, _._)({
          mutationFn: async () => {
            const _ = _._.Init(_);
            _.Body().set_family_groupid(_),
              _.Body().set_invite_id(_),
              _.Body().set_nonce(_);
            const _ = await _.ConfirmInviteToFamilyGroup(_, _);
            return _(_.GetEResult()), _.Body();
          },
          onSuccess: () => {
            _.invalidateQueries({
              queryKey: _(_),
            }),
              _.invalidateQueries({
                queryKey: _(_),
              });
          },
        });
      }
      function _(_, _) {
        const _ = (0, _._)();
        return (0, _._)({
          mutationFn: async () => {
            const _ = _._.Init(_);
            _.Body().set_family_groupid(_), _.Body().set_steamid(_);
            const _ = await _.ResendInvitationToFamilyGroup(_, _);
            return _(_.GetEResult()), _;
          },
        });
      }
      function _(_) {
        const _ = (0, _._)();
        return (0, _._)({
          queryKey: _(_),
          queryFn: async () => {
            const _ = _._.Init(_._);
            __webpack_require__.Body().set_steamid(_);
            const _ = await _._.GetRecentPlaytimeSessionsForChild(_, _);
            _(_.GetEResult());
            const _ = (function (_) {
              let _ = [];
              _.sort((_, _) => _.time_start - _.time_start);
              let _ = new Map();
              for (const _ of _) {
                let _ = __webpack_require__.get(_.appid);
                void 0 === _
                  ? __webpack_require__.set(_.appid, _)
                  : _.time_start <= _.time_end
                    ? (_.time_end = Math.max(_.time_end, _.time_end))
                    : (_.push(_), __webpack_require__.set(_.appid, _));
              }
              for (const _ of __webpack_require__.values()) _.push(_);
              return _.sort((_, _) => _.time_start - _.time_start), _;
            })(_.Body().toObject().sessions || []);
            return _;
          },
        });
      }
      function _(_) {
        const _ = (0, _._)(),
          _ = (0, _._)(),
          _ = (0, _._)();
        return (0, _._)({
          mutationFn: async () => {
            const _ = _._.Init(_);
            __webpack_require__.Body().set_family_groupid(_);
            const _ = await _.UndeleteFamilyGroup(_, _);
            return _(_.GetEResult()), _;
          },
          onSuccess: () => {
            _.invalidateQueries({
              queryKey: _(_),
            }),
              _.invalidateQueries({
                queryKey: _(_),
              }),
              _.invalidateQueries({
                queryKey: _(_),
              });
          },
        });
      }
    },
    chunkid: (module, module_exports, __webpack_require__) => {
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
        _ = __webpack_require__("chunkid");
      class _ {
        constructor() {
          (0, _._)(this);
        }
        m_mapAppIDToClanInfo = new Map();
        m_mapVanityToClanInfo = new Map();
        m_mapClanAccountIDToClanInfo = new Map();
        m_mapPromisesLoading = new Map();
        m_rgQueuedEventsClanIDs = new Array();
        m_bLoadedFromConfig = !1;
        Init() {
          this.LazyInit();
        }
        LazyInit() {
          this.m_bLoadedFromConfig ||
            ((0, _._)(() => {
              let _ = (0, _._)("groupvanityinfo", "application_config");
              this.ValidateClanConfig(_) &&
                _.forEach((_) => {
                  this.InternalSetupValue(_);
                });
            }),
            (this.m_bLoadedFromConfig = !0));
        }
        AddGroupVanities(_) {
          (0, _._)(() => {
            this.ValidateClanConfig(_) &&
              _.forEach((_) => {
                this.InternalSetupValue(_);
              });
          });
        }
        ValidateClanConfig(_) {
          const _ = _;
          return (
            !!(
              _ &&
              Array.isArray(_) &&
              _.length > 0 &&
              "object" == typeof _[0]
            ) &&
            "number" == typeof _[0].clanAccountID &&
            ("number" == typeof _[0].appid ||
              "string" == typeof _[0].vanity_url)
          );
        }
        BHasClanInfoLoaded(_) {
          return (
            (0, _._)(_.BIsValid(), "Clan SteamID is not valid when ClanInfo"),
            (0, _._)(
              _.BIsClanAccount(),
              "Clan SteamID is not a clan account id when requesting clan info ",
            ),
            this.m_mapClanAccountIDToClanInfo.has(_.GetAccountID())
          );
        }
        BHasClanInfoLoadedByAccountID(_) {
          return this.m_mapClanAccountIDToClanInfo.has(_);
        }
        RegisterClanData(_) {
          for (const _ of _) this.InternalSetupValue(_);
        }
        InternalSetupValue(_) {
          const _ = {
            clanAccountID: _.clanAccountID,
            clanSteamID: new _._(_.clanSteamIDString),
            appid: _.appid,
            vanity_url: _.vanity_url,
            member_count: _.member_count,
            is_ogg: _.is_ogg,
            is_creator_home: _.is_creator_home,
            is_curator: _.is_curator,
            has_visible_store_page: _.has_visible_store_page,
            has_rss_feed: _.has_rss_feed,
            rss_language: _.rss_language ? _.rss_language : 0,
            avatar_full_url: _.avatar_full_url,
            avatar_medium_url: _.avatar_medium_url,
            group_name: _.group_name,
            creator_page_bg_url: _.creator_page_bg_url,
            partner_events_enabled: _.partner_events_enabled,
          };
          0 != _.appid && this.m_mapAppIDToClanInfo.set(_.appid, _),
            _.vanity_url &&
              _.vanity_url.length > 0 &&
              this.m_mapVanityToClanInfo.set(
                _.vanity_url.toLocaleLowerCase(),
                _,
              ),
            this.m_mapClanAccountIDToClanInfo.set(_.clanAccountID, _);
        }
        GetRequestParam() {
          return {
            origin: self.origin,
          };
        }
        async LoadOGGClanInfoForAppID(_) {
          if (
            (this.LazyInit(),
            "string" == typeof _ && (_ = parseInt(_)),
            (0, _._)(
              0 != _,
              "LoadOGGClanInfoForAppID called with appid of zero",
            ),
            0 == _)
          )
            return null;
          if (this.m_mapAppIDToClanInfo.has(_))
            return this.m_mapAppIDToClanInfo.get(_);
          let _ = "appid_" + _;
          return (
            this.m_mapPromisesLoading.has(_) ||
              this.m_mapPromisesLoading.set(
                _,
                this.InternalLoadOGGClanInfoForAppID(_),
              ),
            this.m_mapPromisesLoading.get(_)
          );
        }
        async InternalLoadOGGClanInfoForAppID(_) {
          const _ =
            _._.COMMUNITY_BASE_URL + "ogg/" + _ + "/ajaxgetvanityandclanid/";
          let _ = null;
          try {
            _ = (
              await _().get(_, {
                params: this.GetRequestParam(),
              })
            ).data;
          } catch (_) {}
          return _
            ? (this.InternalSetupValue(_), this.m_mapAppIDToClanInfo.get(_))
            : null;
        }
        async LoadOGGClanInfoForIdentifier(_) {
          if (
            (this.LazyInit(),
            this.m_mapVanityToClanInfo.has(_?.toLocaleLowerCase()))
          )
            return this.m_mapVanityToClanInfo.get(_?.toLocaleLowerCase());
          let _ = "storevanity_" + _?.toLocaleLowerCase();
          return (
            this.m_mapPromisesLoading.has(_) ||
              this.m_mapPromisesLoading.set(
                _,
                this.InternalLoadOGGClanInfoForIdentifier(_),
              ),
            this.m_mapPromisesLoading.get(_)
          );
        }
        async InternalLoadOGGClanInfoForIdentifier(_) {
          const _ =
            _._.COMMUNITY_BASE_URL + "games/" + _ + "/ajaxgetvanityandclanid/";
          let _ = await _().get(_, {
            params: this.GetRequestParam(),
          });
          return (
            this.InternalSetupValue(_.data),
            this.m_mapVanityToClanInfo.get(_?.toLocaleLowerCase())
          );
        }
        async LoadOGGClanInfoForGroupVanity(_) {
          if (
            (this.LazyInit(),
            this.m_mapVanityToClanInfo.has(_?.toLocaleLowerCase()))
          )
            return this.m_mapVanityToClanInfo.get(_?.toLocaleLowerCase());
          let _ = "community_name_" + _;
          return (
            this.m_mapPromisesLoading.has(_) ||
              this.m_mapPromisesLoading.set(
                _,
                this.InternalLoadOGGClanInfoForGroupVanity(
                  _?.toLocaleLowerCase(),
                ),
              ),
            this.m_mapPromisesLoading.get(_)
          );
        }
        async InternalLoadOGGClanInfoForGroupVanity(_) {
          const _ =
            _._.COMMUNITY_BASE_URL + "groups/" + _ + "/ajaxgetvanityandclanid/";
          let _ = await _().get(_, {
            params: this.GetRequestParam(),
          });
          return (
            this.InternalSetupValue(_.data),
            this.m_mapVanityToClanInfo.get(_?.toLocaleLowerCase())
          );
        }
        async LoadClanInfoForClanSteamID(_) {
          this.LazyInit();
          let _ = _.GetAccountID();
          if (this.m_mapClanAccountIDToClanInfo.has(_))
            return this.m_mapClanAccountIDToClanInfo.get(_);
          let _ = "clanaccountid_" + _;
          return (
            this.m_mapPromisesLoading.has(_) ||
              this.m_mapPromisesLoading.set(
                _,
                this.InternalLoadClanInfoForClanSteamID(_),
              ),
            this.m_mapPromisesLoading.get(_)
          );
        }
        async LoadClanInfoForClanAccountID(_) {
          const _ = _._.InitFromClanID(_);
          return this.LoadClanInfoForClanSteamID(_);
        }
        async InternalLoadClanInfoForClanSteamID(_) {
          let _ = _.GetAccountID();
          const _ =
            _._.COMMUNITY_BASE_URL +
            "gid/" +
            _.ConvertTo64BitString() +
            "/ajaxgetvanityandclanid/";
          let _ = await _().get(_, {
            params: this.GetRequestParam(),
          });
          return (
            this.InternalSetupValue(_.data),
            this.m_mapClanAccountIDToClanInfo.get(_)
          );
        }
        GetOGGClanInfo(_) {
          return "string" == typeof _
            ? this.m_mapVanityToClanInfo.get(_?.toLocaleLowerCase())
            : this.m_mapAppIDToClanInfo.get(_);
        }
        GetClanSteamIDForAppID(_) {
          if ((this.LazyInit(), this.m_mapAppIDToClanInfo.has(_)))
            return _._.InitFromClanID(
              this.m_mapAppIDToClanInfo.get(_).clanAccountID,
            );
        }
        GetClanVanityForAppID(_) {
          if ((this.LazyInit(), this.m_mapAppIDToClanInfo.has(_)))
            return this.m_mapAppIDToClanInfo.get(_).vanity_url;
        }
        GetClanVanityForClanSteamID(_) {
          if (
            (this.LazyInit(),
            this.m_mapClanAccountIDToClanInfo.has(_.GetAccountID()))
          )
            return this.m_mapClanAccountIDToClanInfo.get(_.GetAccountID())
              .vanity_url;
        }
        HasLoadedClanAccountID(_) {
          return this.LazyInit(), this.m_mapClanAccountIDToClanInfo.has(_);
        }
        GetClanMemberCount(_) {
          return this.m_mapAppIDToClanInfo.has(_)
            ? this.m_mapAppIDToClanInfo.get(_).member_count
            : 0;
        }
        GetClanInfoByClanAccountID(_) {
          return (
            this.LazyInit(),
            (0, _._)(
              !!_,
              "Unepxected clanid when requesting information. GetClanInfoByClanAccountID ",
            ),
            this.m_mapClanAccountIDToClanInfo.get(_)
          );
        }
        GetCreatorStoreURL(_) {
          let _ = _._.GetCreatorHome(_);
          if (_) return _.GetCreatorHomeURL("developer");
          let _ = this.GetClanInfoByClanAccountID(_.GetAccountID());
          return (
            _._.COMMUNITY_BASE_URL +
            (_.vanity_url
              ? "groups/" + _.vanity_url
              : "gid/" + _.ConvertTo64BitString())
          );
        }
      }
      (0, _._)([_._], _.prototype, "m_mapAppIDToClanInfo", void 0),
        (0, _._)([_._], _.prototype, "m_mapVanityToClanInfo", void 0),
        (0, _._)([_._], _.prototype, "m_mapClanAccountIDToClanInfo", void 0),
        (0, _._)([_._], _.prototype, "RegisterClanData", null),
        (0, _._)([_._], _.prototype, "InternalSetupValue", null);
      const _ = new _();
      function _(_) {
        const [_, __webpack_require__] = (0, _.useState)(
            _ ? _.GetClanInfoByClanAccountID(_) : void 0,
          ),
          [_, _] = (0, _.useState)(!!_ && !_.BHasClanInfoLoadedByAccountID(_));
        return (
          (0, _.useEffect)(() => {
            if (_)
              if (_.BHasClanInfoLoadedByAccountID(_))
                __webpack_require__(_.GetClanInfoByClanAccountID(_)), _(!1);
              else {
                _(!0);
                const _ = _._.InitFromClanID(
                  "string" == typeof _ ? Number.parseInt(_) : _,
                );
                _.LoadClanInfoForClanSteamID(_)
                  .then((_) => {
                    __webpack_require__(_ ?? void 0), _(!1);
                  })
                  .catch((_) =>
                    console.error(`Failed to load clan info ${_}`, _),
                  );
              }
            else __webpack_require__(void 0), _(!1);
          }, [_]),
          [_, _]
        );
      }
      window.g_ClanStore = _;
    },
    chunkid: (module, module_exports, __webpack_require__) => {
      __webpack_require__._(module_exports, {
        _: () => _,
        _: () => _,
      });
      var _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__._(_),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid");
      class _ {
        m_clanSteamID;
        m_appidList = new Array();
        m_strName = "";
        m_strAvatarURLFullSize = "";
        m_strTagLineLoc = "";
        m_nFollowers = 0;
        m_strVanity = "";
        m_webLink = void 0;
        m_promise;
        m_bIsLoaded = !1;
        m_bIsHidden = !1;
        m_clanAccountFlags = 0;
        constructor(_) {
          (0, _._)(this), (this.m_clanSteamID = _);
        }
        Initialize(_) {
          (this.m_strName = _.name || ""),
            (this.m_strAvatarURLFullSize =
              _.avatar_url_full_size ||
              "https://avatars.steamstatic.com/fef49e7fa7e1997310d705b2a6158ff8dc1cdfeb_full.jpg"),
            (this.m_strTagLineLoc = _.tag_line_localized || ""),
            (this.m_nFollowers = _.followers || 0),
            (this.m_strVanity = _.vanity || void 0),
            (this.m_webLink = _.weblink),
            (this.m_bIsHidden = _.hidden || !1),
            (this.m_clanAccountFlags = _.clan_account_flags ?? 0),
            _.appids && _.appids.forEach((_) => this.m_appidList.push(_)),
            (this.m_bIsLoaded = !0);
        }
        GetCreatorHomeIdentifier() {
          return {
            name: this.m_strName,
            clan_account_id: this.m_clanSteamID.GetAccountID(),
            type: "developer",
            hidden: this.m_bIsHidden,
          };
        }
        BIsPartnerEventEditorEnabled() {
          return Boolean(8 & this.m_clanAccountFlags);
        }
        BHasClanAccountFlagSet(_) {
          return Boolean(this.m_clanAccountFlags & _);
        }
        BIsLoaded() {
          return this.m_bIsLoaded;
        }
        GetClanSteamID() {
          return this.m_clanSteamID;
        }
        GetClanAccountID() {
          return this.m_clanSteamID.GetAccountID();
        }
        GetAppIDList() {
          return this.m_appidList;
        }
        GetName() {
          return this.m_strName;
        }
        GetAvatarURLFullSize() {
          return this.m_strAvatarURLFullSize;
        }
        GetTagLine() {
          return this.m_strTagLineLoc;
        }
        GetNumFollowers() {
          return this.m_nFollowers;
        }
        BIsHidden() {
          return this.m_bIsHidden;
        }
        GetCreatorHomeURL(_) {
          if (this.m_strVanity) {
            switch (_) {
              case "publisher":
                return (
                  _._.STORE_BASE_URL + "publisher/" + this.m_strVanity + "/"
                );
              case "franchise":
                return (
                  _._.STORE_BASE_URL + "franchise/" + this.m_strVanity + "/"
                );
            }
            return _._.STORE_BASE_URL + "developer/" + this.m_strVanity + "/";
          }
          return (
            _._.STORE_BASE_URL +
            "curator/" +
            this.m_clanSteamID.GetAccountID() +
            "/"
          );
        }
        BHasWebLink() {
          return void 0 !== this.m_webLink;
        }
        GetWebLink() {
          return this.m_webLink;
        }
        GetVanityString() {
          return this.m_strVanity;
        }
        AdjustFollower(_) {
          this.m_nFollowers += _;
        }
        async EnablePartnerEventEditorFlag() {
          this.BIsPartnerEventEditorEnabled() ||
            (await this.UpdateGroupFlagsFeature([2, 8], !0));
        }
        async UpdateGroupFlagsFeature(_, _) {
          let _ = _._.PARTNER_BASE_URL + "sales/ajaxupdateclanaccountflags",
            _ = this.m_clanAccountFlags;
          if (
            (_.forEach((_) => {
              _ ? (_ |= _) : (_ &= ~_);
            }),
            _ == this.m_clanAccountFlags)
          )
            return;
          let _ = new Array();
          1 & _ && _.push(1),
            8 & _ && _.push(8),
            2 & _ && _.push(2),
            4 & _ && _.push(4),
            16 & _ && _.push(16),
            32 & _ && _.push(32),
            64 & _ && _.push(64);
          let _ = new FormData();
          _.append("sessionid", _._.SESSIONID),
            _.append("clan_account_id", this.GetClanAccountID().toString()),
            _.append("accountflags", JSON.stringify(_));
          let _ = await _().post(_, _);
          _ &&
            200 == _.status &&
            1 == _.data.success &&
            (this.m_clanAccountFlags = _);
        }
      }
      (0, _._)([_._], _.prototype, "m_appidList", void 0),
        (0, _._)([_._], _.prototype, "m_nFollowers", void 0),
        (0, _._)([_._], _.prototype, "m_clanAccountFlags", void 0);
      var _,
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__._(_),
        _ = __webpack_require__("chunkid");
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
                  clan_steamid: {
                    _: 2,
                    _: _._.readFixed64String,
                    _: _._.writeFixed64String,
                  },
                  relation: {
                    _: 3,
                    _: _._.readEnum,
                    _: _._.writeEnum,
                  },
                  linkname: {
                    _: 4,
                    _: _._.readString,
                    _: _._.writeString,
                  },
                  json: {
                    _: 5,
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
          return "CDeveloperPageLink";
        }
      }
      class _ extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(_ = null) {
          super(),
            _.prototype.clan_account_id || _._(_._()),
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
                  clan_account_id: {
                    _: 1,
                    _: _._.readUint32,
                    _: _._.writeUint32,
                  },
                  appid_list: {
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
          return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
        }
        getClassName() {
          return "CDeveloperPageToApps";
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
                  link: {
                    _: 2,
                    _: _,
                  },
                  remove: {
                    _: 3,
                    _: !1,
                    _: _._.readBool,
                    _: _._.writeBool,
                  },
                  update_json_only: {
                    _: 4,
                    _: !1,
                    _: _._.readBool,
                    _: _._.writeBool,
                  },
                  skip_clan_permissions: {
                    _: 5,
                    _: !1,
                    _: _._.readBool,
                    _: _._.writeBool,
                  },
                  partner_id: {
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
          return "CStoreCatalog_SetDevPageLink_Request";
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
          return "CStoreCatalog_SetDevPageLink_Response";
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
          return "CStoreCatalog_GetDevPageLinks_Request";
        }
      }
      class _ extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(_ = null) {
          super(),
            _.prototype.links || _._(_._()),
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
                  links: {
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
          return "CStoreCatalog_GetDevPageLinks_Response";
        }
      }
      class _ extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(_ = null) {
          super(),
            _.prototype.clan_account_ids || _._(_._()),
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
                  clan_account_ids: {
                    _: 1,
                    _: !0,
                    _: !0,
                    _: _._.readUint32,
                    pbr: _._.readPackedUint32,
                    _: _._.writeRepeatedUint32,
                  },
                  ignore_dlc: {
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
          return "CStoreCatalog_GetDevPageAllAppsLinked_Request";
        }
      }
      class _ extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(_ = null) {
          super(),
            _.prototype.results || _._(_._()),
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
                  results: {
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
          return "CStoreCatalog_GetDevPageAllAppsLinked_Response";
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
          return "CStoreCatalog_GetDevPagesForPartner_Request";
        }
      }
      class _ extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(_ = null) {
          super(),
            _.prototype.results || _._(_._()),
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
                  results: {
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
          return "CStoreCatalog_GetDevPagesForPartner_Response";
        }
      }
      class _ extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(_ = null) {
          super(),
            _.prototype.clan_accountid || _._(_._()),
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
                  clan_accountid: {
                    _: 1,
                    _: _._.readUint32,
                    _: _._.writeUint32,
                  },
                  linknames: {
                    _: 2,
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
          return "CStoreCatalog_GetDevPagesForPartner_Response_CDevPageInfo";
        }
      }
      !(function (_) {
        (_.SetDevPageLink = function (_, _) {
          return _.SendMsg("StoreCatalog.SetDevPageLink#1", (0, _._)(_, _), _, {
            ePrivilege: 1,
            eWebAPIKeyRequirement: 2,
          });
        }),
          (_.GetDevPageLinks = function (_, _) {
            return _.SendMsg(
              "StoreCatalog.GetDevPageLinks#1",
              (0, _._)(_, _),
              _,
              {
                bConstMethod: !0,
                ePrivilege: 1,
                eWebAPIKeyRequirement: 2,
              },
            );
          }),
          (_.GetDevPageAllAppsLinked = function (_, _) {
            return _.SendMsg(
              "StoreCatalog.GetDevPageAllAppsLinked#1",
              (0, _._)(_, _),
              _,
              {
                ePrivilege: 1,
              },
            );
          }),
          (_.GetDevPagesForPartner = function (_, _) {
            return _.SendMsg(
              "StoreCatalog.GetDevPagesForPartner#1",
              (0, _._)(_, _),
              _,
              {
                bConstMethod: !0,
                ePrivilege: 1,
              },
            );
          });
      })(_ || (_ = {}));
      class _ {
        constructor() {
          (0, _._)(this);
        }
        m_mapClanToCreatorHome = new Map();
        m_mapAppToCreatorIDList = new Map();
        m_bLoadedFromConfig = !1;
        LazyInit() {
          if (!this.m_bLoadedFromConfig) {
            let _ = (0, _._)("creatorhome", "application_config");
            this.ValidateStoreDefault(_) &&
              _.forEach((_) => {
                let _ = Number(_.creator_clan_id),
                  _ = _._.InitFromClanID(_),
                  _ = new _(_);
                _.Initialize(_),
                  (_.m_promise = _.GetAsPromise(_)),
                  this.m_mapClanToCreatorHome.set(_, _);
              });
            let _ = (0, _._)("creatorhomeforapp", "application_config");
            this.ValidateStoreDefaultAppList(_) &&
              _.forEach((_) => {
                void 0 !== _.appid &&
                  (this.m_mapAppToCreatorIDList.has(_.appid) ||
                    this.m_mapAppToCreatorIDList.set(_.appid, new Array()),
                  this.m_mapAppToCreatorIDList.get(_.appid).push(_));
              }),
              (this.m_bLoadedFromConfig = !0);
          }
        }
        static async GetAsPromise(_) {
          return _;
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
            "string" == typeof _[0].name &&
            ("string" == typeof _[0].creator_clan_id ||
              "number" == typeof _[0].creator_clan_id)
          );
        }
        ValidateStoreDefaultAppList(_) {
          const _ = _;
          return (
            !!(
              _ &&
              Array.isArray(_) &&
              _.length > 0 &&
              "object" == typeof _[0]
            ) &&
            "number" == typeof _[0].clan_account_id &&
              _[0].clan_account_id > 0 &&
              "number" == typeof _[0].appid &&
            _[0].appid > 0
          );
        }
        BHasCreatorHomeLoaded(_) {
          return (
            this.m_mapClanToCreatorHome.has(_.GetAccountID()) &&
            this.m_mapClanToCreatorHome.get(_.GetAccountID()).BIsLoaded()
          );
        }
        GetCreatorHome(_) {
          return this.m_mapClanToCreatorHome.get(_.GetAccountID());
        }
        GetCreatorHomeByID(_) {
          return this.m_mapClanToCreatorHome.get(_.clan_account_id);
        }
        async LoadCreatorHome(_, _) {
          if (
            (this.LazyInit(),
            !this.m_mapClanToCreatorHome.has(_.GetAccountID()))
          ) {
            let _ = new _(_);
            (_.m_promise = this.InternalCreatorHome(_, _)),
              await _.m_promise,
              this.m_mapClanToCreatorHome.set(_.GetAccountID(), _);
          }
          return this.m_mapClanToCreatorHome.get(_.GetAccountID()).m_promise;
        }
        async InternalCreatorHome(_, _) {
          let _ = {
              get_appids: !0,
              _: _._.LANGUAGE,
              origin: self.origin,
            },
            _ =
              _._.STORE_BASE_URL +
              "curator/" +
              _.GetClanAccountID() +
              "/ajaxgetcreatorhomeinfo",
            _ = await _().get(_, {
              params: _,
              cancelToken: _ && _.token,
            });
          return _.Initialize(_.data), _;
        }
        async LoadCreatorHomeListForAppIncludeHiddden(_, _) {
          if ((this.LazyInit(), !this.m_mapAppToCreatorIDList.has(_))) {
            let _ = {
                appid: _,
              },
              _ = _._.STORE_BASE_URL + "events/ajaxgetcreatorhomeidforapp",
              _ = await _().get(_, {
                params: _,
                cancelToken: _ && _.token,
                withCredentials: !0,
              });
            this.m_mapAppToCreatorIDList.set(_, _.data.creator_list);
          }
          return this.m_mapAppToCreatorIDList.get(_);
        }
        async SearchCreatorHomeStore(_, _, _) {
          let _ = `${_._.STORE_BASE_URL}curator/0/ajaxsearchcurators`,
            _ = {
              term: _.replace(" ", "+"),
              require_creator: _,
              _: _._.COUNTRY,
              _: _._.LANGUAGE,
              origin: self.origin,
            },
            _ = new Array();
          const _ = await _().get(_, {
            params: _,
            cancelToken: _.token,
          });
          return (
            _.data.curators &&
              (0, _._)(() => {
                _.data.curators.forEach((_) => {
                  if (!this.m_mapClanToCreatorHome.has(_.creator_clan_id)) {
                    let _ = _._.InitFromClanID(_.creator_clan_id),
                      _ = new _(_);
                    __webpack_require__.Initialize(_),
                      this.m_mapClanToCreatorHome.set(_.creator_clan_id, _);
                  }
                  _.push(this.m_mapClanToCreatorHome.get(_.creator_clan_id));
                });
              }),
            _
          );
        }
        GetCreatorHomeListForAppIncludeHidden(_) {
          return this.m_mapAppToCreatorIDList.has(_)
            ? this.m_mapAppToCreatorIDList.get(_)
            : [];
        }
      }
      (0, _._)([_._], _.prototype, "m_mapClanToCreatorHome", void 0),
        (0, _._)([_._], _.prototype, "m_mapAppToCreatorIDList", void 0),
        (0, _._)([_._], _.prototype, "LazyInit", null);
      const _ = new _();
      function _(_) {
        const _ = _._.InitFromClanID(_),
          [__webpack_require__, _] = _.useState(_.GetCreatorHome(_)),
          _ = (0, _._)("useCreatorHome");
        return (
          _.useEffect(() => {
            const _ = _._.InitFromClanID(_);
            _.BHasCreatorHomeLoaded(_)
              ? __webpack_require__
                ? __webpack_require__.GetClanAccountID() != _ &&
                  _(_.GetCreatorHome(_))
                : _(_.GetCreatorHome(_))
              : _.LoadCreatorHome(_).then(() => {
                  _?.token?.reason || _(_.GetCreatorHome(_));
                });
          }, [_?.token?.reason, _, __webpack_require__]),
          __webpack_require__
        );
      }
      window.g_CreatorHomeStore = _;
    },
  },
]);
