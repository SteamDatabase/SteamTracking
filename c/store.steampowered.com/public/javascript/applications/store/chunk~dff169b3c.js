"use strict";
(() => {
  (self.webpackChunkstore = self.webpackChunkstore || []).push([
    [28310],
    {
      chunkid: (module, module_exports, __webpack_require__) => {
        __webpack_require__._(module_exports, {
          _: () => _,
          _: () => _,
        });
        const _ = null,
          _ = 0,
          _ = 1,
          _ = 2;
      },
      chunkid: (module, module_exports, __webpack_require__) => {
        __webpack_require__._(module_exports, {
          _: () => _,
          _: () => _,
          _: () => _,
        });
        const _ = 0,
          _ = 1,
          _ = 2,
          _ = 3,
          _ = 4,
          _ = 5,
          _ = 6,
          _ = 7,
          _ = 8,
          _ = 9,
          _ = 10,
          _ = 11,
          _ = 12,
          _ = 13,
          _ = 14,
          _ = 15,
          _ = 16,
          _ = 17,
          _ = 18,
          _ = 19,
          _ = 20,
          _ = 21;
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
        });
        var _ = {};
        __webpack_require__._(_),
          __webpack_require__._(_, {
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
        var _ = {};
        __webpack_require__._(_),
          __webpack_require__._(_, {
            _: () => _,
          });
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__._(_),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        const _ = 0,
          _ = 1,
          _ = 2,
          _ = 3,
          _ = 4,
          _ = 5,
          _ = 6,
          _ = 7,
          _ = 8,
          _ = 9,
          _ = 10,
          _ = 11,
          _ = 12,
          _ = 13,
          _ = 14,
          _ = 15,
          _ = 16,
          _ = 17,
          _ = 18,
          _ = 19,
          _ = 20,
          _ = 21,
          _ = 22,
          _ = 23,
          _ = 24,
          _ = 25,
          _ = 26,
          _ = 27,
          _ = 28,
          _ = 29,
          _ = 30,
          _ = 0,
          _ = 1;
        function _(_) {
          return "unknown ESteamNotificationType ( " + _ + " )";
        }
        function _(_) {
          return "unknown ESteamNotificationTarget ( " + _ + " )";
        }
        function _(_) {
          return "unknown ESteamNotificationTargetClientType ( " + _ + " )";
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.notification_id || _._(_._()),
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
                    notification_id: {
                      _: 1,
                      _: _._.readUint64String,
                      _: _._.writeUint64String,
                    },
                    notification_targets: {
                      _: 2,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    notification_type: {
                      _: 3,
                      _: _._.readEnum,
                      _: _._.writeEnum,
                    },
                    body_data: {
                      _: 4,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    read: {
                      _: 7,
                      _: _._.readBool,
                      _: _._.writeBool,
                    },
                    timestamp: {
                      _: 8,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    hidden: {
                      _: 9,
                      _: _._.readBool,
                      _: _._.writeBool,
                    },
                    expiry: {
                      _: 10,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    viewed: {
                      _: 11,
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
            return "SteamNotificationData";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.include_hidden || _._(_._()),
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
                    include_hidden: {
                      _: 1,
                      _: !1,
                      _: _._.readBool,
                      _: _._.writeBool,
                    },
                    language: {
                      _: 2,
                      _: 0,
                      _: _._.readInt32,
                      _: _._.writeInt32,
                    },
                    include_confirmation_count: {
                      _: 3,
                      _: !0,
                      _: _._.readBool,
                      _: _._.writeBool,
                    },
                    include_pinned_counts: {
                      _: 4,
                      _: !1,
                      _: _._.readBool,
                      _: _._.writeBool,
                    },
                    include_read: {
                      _: 5,
                      _: !0,
                      _: _._.readBool,
                      _: _._.writeBool,
                    },
                    count_only: {
                      _: 6,
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
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamNotification_GetSteamNotifications_Request";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.notifications || _._(_._()),
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
                    notifications: {
                      _: 1,
                      _: _,
                      _: !0,
                      _: !0,
                    },
                    confirmation_count: {
                      _: 2,
                      _: _._.readInt32,
                      _: _._.writeInt32,
                    },
                    pending_gift_count: {
                      _: 3,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    pending_friend_count: {
                      _: 5,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    unread_count: {
                      _: 6,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    pending_family_invite_count: {
                      _: 7,
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
            return "CSteamNotification_GetSteamNotifications_Response";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.timestamp || _._(_._()),
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
                    timestamp: {
                      _: 1,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    notification_type: {
                      _: 2,
                      _: _._.readEnum,
                      _: _._.writeEnum,
                    },
                    notification_ids: {
                      _: 3,
                      _: !0,
                      _: !0,
                      _: _._.readUint64String,
                      pbr: _._.readPackedUint64String,
                      _: _._.writeRepeatedUint64String,
                    },
                    mark_all_read: {
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
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamNotification_MarkNotificationsRead_Notification";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.remote_client_id || _._(_._()),
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
                    remote_client_id: {
                      _: 1,
                      _: _._.readUint64String,
                      _: _._.writeUint64String,
                    },
                    target_client_type: {
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
            return "CSteamNotification_MarkNotificationsViewed_Notification";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.notification_type || _._(_._()),
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
                    notification_type: {
                      _: 1,
                      _: _._.readEnum,
                      _: _._.writeEnum,
                    },
                    notification_targets: {
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
            return "SteamNotificationPreference";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.preferences || _._(_._()),
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
                    preferences: {
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
            return "CSteamNotification_SetPreferences_Request";
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
            return "CSteamNotification_SetPreferences_Response";
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
            return "CSteamNotification_GetPreferences_Request";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.preferences || _._(_._()),
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
                    preferences: {
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
            return "CSteamNotification_GetPreferences_Response";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.notification_ids || _._(_._()),
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
                    notification_ids: {
                      _: 1,
                      _: !0,
                      _: !0,
                      _: _._.readUint64String,
                      pbr: _._.readPackedUint64String,
                      _: _._.writeRepeatedUint64String,
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
            return "CSteamNotification_HideNotification_Notification";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.notifications || _._(_._()),
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
                    notifications: {
                      _: 1,
                      _: _,
                      _: !0,
                      _: !0,
                    },
                    pending_gift_count: {
                      _: 2,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    pending_friend_count: {
                      _: 3,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    pending_family_invite_count: {
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
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamNotification_NotificationsReceived_Notification";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.preferences || _._(_._()),
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
                    preferences: {
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
            return "CSteamNotification_PreferencesUpdated_Notification";
          }
        }
        var _;
        ((_) => {
          function _(_, _, _) {
            return _.SendMsg(
              "SteamNotification.GetSteamNotifications#1",
              (0, _._)(_, _, _),
              _,
              {
                bConstMethod: !0,
                ePrivilege: 1,
                rgBrowserAPISites: ["partner", "help"],
              },
            );
          }
          _.GetSteamNotifications = _;
          function _(_, _) {
            return _.SendNotification(
              "SteamNotification.MarkNotificationsRead#1",
              (0, _._)(_, _),
              {
                ePrivilege: 1,
                rgBrowserAPISites: ["partner", "help"],
              },
            );
          }
          _.MarkNotificationsRead = _;
          function _(_, _) {
            return _.SendNotification(
              "SteamNotification.MarkNotificationsViewed#1",
              (0, _._)(_, _),
              {
                ePrivilege: 1,
                rgBrowserAPISites: ["partner", "help"],
              },
            );
          }
          _.MarkNotificationsViewed = _;
          function _(_, _) {
            return _.SendNotification(
              "SteamNotification.HideNotification#1",
              (0, _._)(_, _),
              {
                ePrivilege: 1,
                rgBrowserAPISites: ["partner"],
              },
            );
          }
          _.HideNotification = _;
          function _(_, _, _) {
            return _.SendMsg(
              "SteamNotification.SetPreferences#1",
              (0, _._)(_, _, _),
              _,
              {
                ePrivilege: 1,
                rgBrowserAPISites: ["partner"],
              },
            );
          }
          _.SetPreferences = _;
          function _(_, _, _) {
            return _.SendMsg(
              "SteamNotification.GetPreferences#1",
              (0, _._)(_, _, _),
              _,
              {
                bConstMethod: !0,
                ePrivilege: 1,
                rgBrowserAPISites: ["partner"],
              },
            );
          }
          _.GetPreferences = _;
        })(_ || (_ = {}));
        var _;
        ((_) => {
          (_.NotificationsReceivedHandler = {
            name: "SteamNotificationClient.NotificationsReceived#1",
            request: _,
          }),
            (_.PreferencesUpdatedHandler = {
              name: "SteamNotificationClient.PreferencesUpdated#1",
              request: _,
            });
        })(_ || (_ = {}));
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
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        function _(_) {
          const _ = (0, _._)(),
            _ = _.useContext(_);
          return (0, _._)(_(_, _, _));
        }
        function _(_) {
          const _ = React.useRef(void 0),
            _ = _(_);
          return _.data
            ? _
            : (_.current ||
                (_.current = new CPersonaStateImpl(
                  typeof _ == "string"
                    ? new CSteamID(_)
                    : CSteamID.InitFromAccountID(_),
                )),
              {
                ..._,
                data: _.current,
              });
        }
        function _(_) {
          const _ = (0, _._)(),
            _ = _.useContext(_);
          return (0, _._)({
            queries: _.map((_) => _(_, _, _)),
          });
        }
        function _(_) {
          return ReactQueryClient.getQueryData(["PlayerSummary", _]);
        }
        function _(_) {
          const { loadPersonaState: _, children: _ } = _,
            _ = React.useMemo(
              () => ({
                loadPersonaState: _,
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
          loadPersonaState: async (_, _) => {
            if (_ == null) return null;
            const _ = await _(_).load(
              _._.InitFromAccountID(_).ConvertTo64BitString(),
            );
            return _(_._.InitFromAccountID(_), _);
          },
        });
        function _() {
          return _.useContext(_);
        }
        function _(_, _, _) {
          const _ = typeof _ == "string" ? new _._(_).GetAccountID() : _;
          return {
            queryKey: ["PlayerSummary", _],
            queryFn: () => _.loadPersonaState(_, _),
            enabled: !!_,
          };
        }
        let _;
        function _(_) {
          return (_ ??= (0, _._)(_));
        }
        function _(_, _) {
          let _ = new _._(_);
          const _ = _?.public_data,
            _ = _?.private_data;
          return (
            (_.m_bInitialized = !!_),
            (_.m_ePersonaState = _?.persona_state ?? _.cU3),
            (_.m_strAvatarHash = _?.sha_digest_avatar
              ? (0, _._)(_.sha_digest_avatar)
              : _._),
            (_.m_strPlayerName = _?.persona_name ?? _.ConvertTo64BitString()),
            (_.m_strAccountName = _?.account_name),
            _?.persona_state_flags &&
              (_.m_unPersonaStateFlags = _?.persona_state_flags),
            _?.game_id && (_.m_gameid = _?.game_id),
            _?.game_server_ip_address &&
              (_.m_unGameServerIP = _?.game_server_ip_address),
            _?.lobby_steam_id && (_.m_game_lobby_id = _?.lobby_steam_id),
            _?.game_extra_info && (_.m_strGameExtraInfo = _?.game_extra_info),
            _?.profile_url && (_.m_strProfileURL = _.profile_url),
            _
          );
        }
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
          _ = __webpack_require__("chunkid");
        function _(_) {
          return "unknown EMarketBucketLevel ( " + _ + " )";
        }
        function _(_) {
          return "unknown EAssetPropertyType ( " + _ + " )";
        }
        function _(_) {
          return "unknown ETradeOfferState ( " + _ + " )";
        }
        function _(_) {
          return "unknown ETradeOfferConfirmationMethod ( " + _ + " )";
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.type || _._(_._()),
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
                    type: {
                      _: 1,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    value: {
                      _: 2,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    color: {
                      _: 3,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    label: {
                      _: 4,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    name: {
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
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CEconItem_DescriptionLine";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.link || _._(_._()),
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
                    link: {
                      _: 1,
                      _: _._.readString,
                      _: _._.writeString,
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
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CEconItem_Action";
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
                    category: {
                      _: 2,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    internal_name: {
                      _: 3,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    localized_category_name: {
                      _: 4,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    localized_tag_name: {
                      _: 5,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    color: {
                      _: 6,
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
            return "CEconItem_Tag";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.contained_items || _._(_._()),
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
                    contained_items: {
                      _: 1,
                      _: _,
                      _: !0,
                      _: !0,
                    },
                    search_tags: {
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
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CEconItem_ContainerProperties";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.classid || _._(_._()),
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
                    classid: {
                      _: 1,
                      _: _._.readUint64String,
                      _: _._.writeUint64String,
                    },
                    instanceid: {
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
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CEconItem_ClassIdentifiers";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.appid || _._(_._()),
              _.Message.initialize(
                this,
                _,
                0,
                -1,
                [8, 10, 11, 12, 13, 21, 26],
                null,
              );
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
                      _: _._.readInt32,
                      _: _._.writeInt32,
                    },
                    classid: {
                      _: 2,
                      _: _._.readUint64String,
                      _: _._.writeUint64String,
                    },
                    instanceid: {
                      _: 3,
                      _: _._.readUint64String,
                      _: _._.writeUint64String,
                    },
                    currency: {
                      _: 4,
                      _: _._.readBool,
                      _: _._.writeBool,
                    },
                    background_color: {
                      _: 5,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    icon_url: {
                      _: 6,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    icon_url_large: {
                      _: 7,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    descriptions: {
                      _: 8,
                      _: _,
                      _: !0,
                      _: !0,
                    },
                    tradable: {
                      _: 9,
                      _: _._.readBool,
                      _: _._.writeBool,
                    },
                    actions: {
                      _: 10,
                      _: _,
                      _: !0,
                      _: !0,
                    },
                    owner_descriptions: {
                      _: 11,
                      _: _,
                      _: !0,
                      _: !0,
                    },
                    owner_actions: {
                      _: 12,
                      _: _,
                      _: !0,
                      _: !0,
                    },
                    fraudwarnings: {
                      _: 13,
                      _: !0,
                      _: !0,
                      _: _._.readString,
                      _: _._.writeRepeatedString,
                    },
                    name: {
                      _: 14,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    name_color: {
                      _: 15,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    type: {
                      _: 16,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    market_name: {
                      _: 17,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    market_hash_name: {
                      _: 18,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    market_fee: {
                      _: 19,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    market_fee_app: {
                      _: 28,
                      _: _._.readInt32,
                      _: _._.writeInt32,
                    },
                    contained_item: {
                      _: 20,
                      _: _,
                    },
                    market_actions: {
                      _: 21,
                      _: _,
                      _: !0,
                      _: !0,
                    },
                    commodity: {
                      _: 22,
                      _: _._.readBool,
                      _: _._.writeBool,
                    },
                    market_tradable_restriction: {
                      _: 23,
                      _: _._.readInt32,
                      _: _._.writeInt32,
                    },
                    market_marketable_restriction: {
                      _: 24,
                      _: _._.readInt32,
                      _: _._.writeInt32,
                    },
                    marketable: {
                      _: 25,
                      _: _._.readBool,
                      _: _._.writeBool,
                    },
                    tags: {
                      _: 26,
                      _: _,
                      _: !0,
                      _: !0,
                    },
                    item_expiration: {
                      _: 27,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    market_buy_country_restriction: {
                      _: 30,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    market_sell_country_restriction: {
                      _: 31,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    sealed: {
                      _: 32,
                      _: _._.readBool,
                      _: _._.writeBool,
                    },
                    container_properties: {
                      _: 33,
                      _: _,
                    },
                    market_bucket_group_name: {
                      _: 34,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    market_bucket_group_id: {
                      _: 35,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    sealed_type: {
                      _: 37,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    market_name_inside_group: {
                      _: 38,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    market_bucket_id: {
                      _: 39,
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
            return "CEconItem_Description";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.propertyid || _._(_._()),
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
                    propertyid: {
                      _: 1,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    int_value: {
                      _: 2,
                      _: _._.readInt64String,
                      _: _._.writeInt64String,
                    },
                    float_value: {
                      _: 3,
                      _: _._.readFloat,
                      _: _._.writeFloat,
                    },
                    string_value: {
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
            return "CEconItem_AssetProperty";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.classid || _._(_._()),
              _.Message.initialize(this, _, 0, -1, [3, 4, 5], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    classid: {
                      _: 1,
                      _: _._.readUint64String,
                      _: _._.writeUint64String,
                    },
                    instanceid: {
                      _: 2,
                      _: _._.readUint64String,
                      _: _._.writeUint64String,
                    },
                    standalone_properties: {
                      _: 3,
                      _: _,
                      _: !0,
                      _: !0,
                    },
                    parent_relationship_properties: {
                      _: 4,
                      _: _,
                      _: !0,
                      _: !0,
                    },
                    nested_accessories: {
                      _: 5,
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
            return "CEconItem_AssetAccessory";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.appid || _._(_._()),
              _.Message.initialize(this, _, 0, -1, [4, 5], null);
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
                    contextid: {
                      _: 2,
                      _: _._.readUint64String,
                      _: _._.writeUint64String,
                    },
                    assetid: {
                      _: 3,
                      _: _._.readUint64String,
                      _: _._.writeUint64String,
                    },
                    asset_properties: {
                      _: 4,
                      _: _,
                      _: !0,
                      _: !0,
                    },
                    asset_accessories: {
                      _: 5,
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
            return "CEconItem_AssetProperties";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype._ || _._(_._()),
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
                    _: {
                      _: 1,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    name: {
                      _: 2,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    type: {
                      _: 3,
                      _: _._.readEnum,
                      _: _._.writeEnum,
                    },
                    float_min: {
                      _: 4,
                      _: _._.readFloat,
                      _: _._.writeFloat,
                    },
                    float_max: {
                      _: 5,
                      _: _._.readFloat,
                      _: _._.writeFloat,
                    },
                    int_min: {
                      _: 6,
                      _: _._.readInt64String,
                      _: _._.writeInt64String,
                    },
                    int_max: {
                      _: 7,
                      _: _._.readInt64String,
                      _: _._.writeInt64String,
                    },
                    localized_label: {
                      _: 8,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    hide_from_description: {
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
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CEconItem_AssetPropertySchema";
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
                    language: {
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
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CEcon_GetAssetPropertySchema_Request";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.property_schemas || _._(_._()),
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
                    property_schemas: {
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
            return "CEcon_GetAssetPropertySchema_Response";
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
                    contextid: {
                      _: 2,
                      _: _._.readUint64String,
                      _: _._.writeUint64String,
                    },
                    assetid: {
                      _: 3,
                      _: _._.readUint64String,
                      _: _._.writeUint64String,
                    },
                    classid: {
                      _: 4,
                      _: _._.readUint64String,
                      _: _._.writeUint64String,
                    },
                    instanceid: {
                      _: 5,
                      _: _._.readUint64String,
                      _: _._.writeUint64String,
                    },
                    currencyid: {
                      _: 6,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    amount: {
                      _: 7,
                      _: _._.readInt64String,
                      _: _._.writeInt64String,
                    },
                    missing: {
                      _: 8,
                      _: _._.readBool,
                      _: _._.writeBool,
                    },
                    est_usd: {
                      _: 9,
                      _: _._.readInt64String,
                      _: _._.writeInt64String,
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
            return "CEcon_Asset";
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
                    contextid: {
                      _: 3,
                      _: _._.readUint64String,
                      _: _._.writeUint64String,
                    },
                    get_descriptions: {
                      _: 4,
                      _: _._.readBool,
                      _: _._.writeBool,
                    },
                    get_asset_properties: {
                      _: 11,
                      _: _._.readBool,
                      _: _._.writeBool,
                    },
                    for_trade_offer_verification: {
                      _: 10,
                      _: _._.readBool,
                      _: _._.writeBool,
                    },
                    language: {
                      _: 5,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    filters: {
                      _: 6,
                      _: _,
                    },
                    start_assetid: {
                      _: 8,
                      _: _._.readUint64String,
                      _: _._.writeUint64String,
                    },
                    count: {
                      _: 9,
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
            return "CEcon_GetInventoryItemsWithDescriptions_Request";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.assetids || _._(_._()),
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
                    assetids: {
                      _: 1,
                      _: !0,
                      _: !0,
                      _: _._.readUint64String,
                      pbr: _._.readPackedUint64String,
                      _: _._.writeRepeatedUint64String,
                    },
                    currencyids: {
                      _: 2,
                      _: !0,
                      _: !0,
                      _: _._.readUint32,
                      pbr: _._.readPackedUint32,
                      _: _._.writeRepeatedUint32,
                    },
                    tradable_only: {
                      _: 3,
                      _: _._.readBool,
                      _: _._.writeBool,
                    },
                    marketable_only: {
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
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CEcon_GetInventoryItemsWithDescriptions_Request_FilterOptions";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.assets || _._(_._()),
              _.Message.initialize(this, _, 0, -1, [1, 2, 3, 7], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    assets: {
                      _: 1,
                      _: _,
                      _: !0,
                      _: !0,
                    },
                    descriptions: {
                      _: 2,
                      _: _,
                      _: !0,
                      _: !0,
                    },
                    missing_assets: {
                      _: 3,
                      _: _,
                      _: !0,
                      _: !0,
                    },
                    asset_properties: {
                      _: 7,
                      _: _,
                      _: !0,
                      _: !0,
                    },
                    more_items: {
                      _: 4,
                      _: _._.readBool,
                      _: _._.writeBool,
                    },
                    last_assetid: {
                      _: 5,
                      _: _._.readUint64String,
                      _: _._.writeUint64String,
                    },
                    total_inventory_count: {
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
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CEcon_GetInventoryItemsWithDescriptions_Response";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.generate_new_token || _._(_._()),
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
                    generate_new_token: {
                      _: 1,
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
            return "CEcon_GetTradeOfferAccessToken_Request";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.trade_offer_access_token || _._(_._()),
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
                    trade_offer_access_token: {
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
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CEcon_GetTradeOfferAccessToken_Response";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.return_url || _._(_._()),
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
                    return_url: {
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
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CEcon_ClientGetItemShopOverlayAuthURL_Request";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.url || _._(_._()),
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
                    url: {
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
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CEcon_ClientGetItemShopOverlayAuthURL_Response";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.language || _._(_._()),
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
                    language: {
                      _: 1,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    appid: {
                      _: 2,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    classes: {
                      _: 3,
                      _: _,
                      _: !0,
                      _: !0,
                    },
                    high_pri: {
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
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CEcon_GetAssetClassInfo_Request";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.descriptions || _._(_._()),
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
                    descriptions: {
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
            return "CEcon_GetAssetClassInfo_Response";
          }
        }
        var _;
        ((_) => {
          function _(_, _, _) {
            return _.SendMsg(
              "Econ.GetInventoryItemsWithDescriptions#1",
              (0, _._)(_, _, _),
              _,
              {
                bConstMethod: !0,
                ePrivilege: 2,
                eWebAPIKeyRequirement: 2,
                rgBrowserAPISites: ["partner", "help"],
              },
            );
          }
          _.GetInventoryItemsWithDescriptions = _;
          function _(_, _, _) {
            return _.SendMsg(
              "Econ.GetTradeOfferAccessToken#1",
              (0, _._)(_, _, _),
              _,
              {
                ePrivilege: 1,
              },
            );
          }
          _.GetTradeOfferAccessToken = _;
          function _(_, _, _) {
            return _.SendMsg(
              "Econ.ClientGetItemShopOverlayAuthURL#1",
              (0, _._)(_, _, _),
              _,
              {
                ePrivilege: 1,
              },
            );
          }
          _.ClientGetItemShopOverlayAuthURL = _;
          function _(_, _, _) {
            return _.SendMsg("Econ.GetAssetClassInfo#1", (0, _._)(_, _, _), _, {
              bConstMethod: !0,
              ePrivilege: 1,
              eWebAPIKeyRequirement: 1,
            });
          }
          _.GetAssetClassInfo = _;
          function _(_, _, _) {
            return _.SendMsg(
              "Econ.GetAssetPropertySchema#1",
              (0, _._)(_, _, _),
              _,
              {
                bConstMethod: !0,
                ePrivilege: 0,
                eWebAPIKeyRequirement: 1,
                rgBrowserAPISites: ["partner"],
              },
            );
          }
          _.GetAssetPropertySchema = _;
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
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        const _ = 0,
          _ = 1,
          _ = 2,
          _ = 3,
          _ = 0,
          _ = 1,
          _ = 2,
          _ = 3,
          _ = 4,
          _ = 5,
          _ = 6;
        function _(_) {
          return "unknown EReportedContentNotificationStatus ( " + _ + " )";
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
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "AdditionalSubjectData";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.key || _._(_._()),
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
                    key: {
                      _: 1,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    value: {
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
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "AdditionalSubjectData_DataEntry";
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
                    start: {
                      _: 2,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    count: {
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
            return "CContentModeration_GetReportsSubmittedByUser_Request";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.report_id || _._(_._()),
              _.Message.initialize(this, _, 0, -1, [23, 24], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    report_id: {
                      _: 1,
                      _: _._.readUint64String,
                      _: _._.writeUint64String,
                    },
                    reporter_steamid: {
                      _: 2,
                      _: _._.readUint64String,
                      _: _._.writeUint64String,
                    },
                    time_reported: {
                      _: 3,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    report_reason: {
                      _: 4,
                      _: _._.readEnum,
                      _: _._.writeEnum,
                    },
                    report_text: {
                      _: 5,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    subject_type: {
                      _: 6,
                      _: _._.readEnum,
                      _: _._.writeEnum,
                    },
                    subject_group_id: {
                      _: 7,
                      _: _._.readUint64String,
                      _: _._.writeUint64String,
                    },
                    subject_id: {
                      _: 8,
                      _: _._.readUint64String,
                      _: _._.writeUint64String,
                    },
                    resolved: {
                      _: 9,
                      _: _._.readEnum,
                      _: _._.writeEnum,
                    },
                    time_resolved: {
                      _: 10,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    resolver_steamid: {
                      _: 11,
                      _: _._.readUint64String,
                      _: _._.writeUint64String,
                    },
                    time_notified: {
                      _: 12,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    additional_subject_data: {
                      _: 13,
                      _: _,
                    },
                    time_disputed: {
                      _: 14,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    dispute_details: {
                      _: 15,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    dispute_resolver_steamid: {
                      _: 16,
                      _: _._.readUint64String,
                      _: _._.writeUint64String,
                    },
                    dispute_resolved: {
                      _: 17,
                      _: _._.readEnum,
                      _: _._.writeEnum,
                    },
                    time_dispute_resolved: {
                      _: 18,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    detected_by_automation: {
                      _: 19,
                      _: !1,
                      _: _._.readBool,
                      _: _._.writeBool,
                    },
                    resolved_by_automation: {
                      _: 20,
                      _: _,
                      _: _._.readEnum,
                      _: _._.writeEnum,
                    },
                    content_moderated_reason: {
                      _: 21,
                      _: _._.readEnum,
                      _: _._.writeEnum,
                    },
                    dispute_resolved_reason: {
                      _: 22,
                      _: _._.readEnum,
                      _: _._.writeEnum,
                    },
                    sanctions_applied: {
                      _: 23,
                      _: _,
                      _: !0,
                      _: !0,
                    },
                    sanctions_applied_on_dispute: {
                      _: 24,
                      _: _,
                      _: !0,
                      _: !0,
                    },
                    reported_content_id: {
                      _: 25,
                      _: _._.readUint64String,
                      _: _._.writeUint64String,
                    },
                    coordinates: {
                      _: 26,
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
            return "ContentReport";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.content_report || _._(_._()),
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
                    content_report: {
                      _: 1,
                      _: _,
                      _: !0,
                      _: !0,
                    },
                    total_count: {
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
            return "CContentModeration_GetReportsSubmittedByUser_Response";
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
                    subject_type: {
                      _: 2,
                      _: _._.readEnum,
                      _: _._.writeEnum,
                    },
                    subject_group_id: {
                      _: 3,
                      _: _._.readUint64String,
                      _: _._.writeUint64String,
                    },
                    subject_id: {
                      _: 4,
                      _: _._.readUint64String,
                      _: _._.writeUint64String,
                    },
                    reported_content_id: {
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
            return "CContentModeration_GetOneReportSubmittedByUser_Request";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.content_report || _._(_._()),
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
                    content_report: {
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
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CContentModeration_GetOneReportSubmittedByUser_Response";
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
            return "CContentModeration_GetReportedSubjectsByOwner_Request";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.subject_type || _._(_._()),
              _.Message.initialize(this, _, 0, -1, [13, 31, 32], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    subject_type: {
                      _: 1,
                      _: _._.readEnum,
                      _: _._.writeEnum,
                    },
                    subject_group_id: {
                      _: 2,
                      _: _._.readUint64String,
                      _: _._.writeUint64String,
                    },
                    subject_id: {
                      _: 3,
                      _: _._.readUint64String,
                      _: _._.writeUint64String,
                    },
                    owner_steam_id: {
                      _: 4,
                      _: _._.readUint64String,
                      _: _._.writeUint64String,
                    },
                    language: {
                      _: 5,
                      _: _._.readInt32,
                      _: _._.writeInt32,
                    },
                    resolved: {
                      _: 6,
                      _: _._.readEnum,
                      _: _._.writeEnum,
                    },
                    time_resolved: {
                      _: 7,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    unresolved_report_count: {
                      _: 8,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    oldest_unresolved_report_time: {
                      _: 9,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    resolver_steamid: {
                      _: 10,
                      _: _._.readUint64String,
                      _: _._.writeUint64String,
                    },
                    assigned_moderator_steamid: {
                      _: 11,
                      _: _._.readUint64String,
                      _: _._.writeUint64String,
                    },
                    time_claimed_by_moderator: {
                      _: 12,
                      _: _._.readUint64String,
                      _: _._.writeUint64String,
                    },
                    reports: {
                      _: 13,
                      _: _,
                      _: !0,
                      _: !0,
                    },
                    additional_subject_data: {
                      _: 14,
                      _: _,
                    },
                    csam_status: {
                      _: 15,
                      _: _._.readEnum,
                      _: _._.writeEnum,
                    },
                    terrorism_status: {
                      _: 16,
                      _: _._.readEnum,
                      _: _._.writeEnum,
                    },
                    content_moderated_reason: {
                      _: 17,
                      _: _._.readEnum,
                      _: _._.writeEnum,
                    },
                    unresolved_dispute_count: {
                      _: 18,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    oldest_unresolved_dispute_time: {
                      _: 19,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    owner_dispute_time: {
                      _: 24,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    owner_dispute_resolved_time: {
                      _: 25,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    owner_dispute_details: {
                      _: 26,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    required_moderator_level: {
                      _: 27,
                      _: _._.readEnum,
                      _: _._.writeEnum,
                    },
                    resolved_by_automation: {
                      _: 28,
                      _: _,
                      _: _._.readEnum,
                      _: _._.writeEnum,
                    },
                    detected_by_automation: {
                      _: 29,
                      _: !1,
                      _: _._.readBool,
                      _: _._.writeBool,
                    },
                    credible_threat_of_violence_status: {
                      _: 30,
                      _: _._.readEnum,
                      _: _._.writeEnum,
                    },
                    sanctions_applied: {
                      _: 31,
                      _: _,
                      _: !0,
                      _: !0,
                    },
                    sanctions_applied_after_dispute: {
                      _: 32,
                      _: _,
                      _: !0,
                      _: !0,
                    },
                    decision_reversed: {
                      _: 33,
                      _: _._.readBool,
                      _: _._.writeBool,
                    },
                    reported_content_id: {
                      _: 34,
                      _: _._.readUint64String,
                      _: _._.writeUint64String,
                    },
                    coordinates: {
                      _: 35,
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
            return "ContentReportSubject";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.subject || _._(_._()),
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
                    subject: {
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
            return "CContentModeration_GetReportedSubjectsByOwner_Response";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.sanction || _._(_._()),
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
                    sanction: {
                      _: 1,
                      _: _._.readEnum,
                      _: _._.writeEnum,
                    },
                    days: {
                      _: 2,
                      _: _._.readInt32,
                      _: _._.writeInt32,
                    },
                    escalate_to: {
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
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "ContentReportSubjectSanction";
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
            return "CContentModeration_GetSubjectOverview_Request";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.buckets || _._(_._()),
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
                    buckets: {
                      _: 1,
                      _: _,
                      _: !0,
                      _: !0,
                    },
                    pending_for_any_moderator: {
                      _: 2,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    pending_for_supervisor: {
                      _: 3,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    pending_for_valve: {
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
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CContentModeration_GetSubjectOverview_Response";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.subject_type || _._(_._()),
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
                    subject_type: {
                      _: 1,
                      _: _._.readEnum,
                      _: _._.writeEnum,
                    },
                    unresolved_count: {
                      _: 2,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    oldest_unresolved: {
                      _: 3,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    unclaimed_count: {
                      _: 4,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    oldest_disputed: {
                      _: 5,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    disputed_count: {
                      _: 6,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    unclaimed_disputed_count: {
                      _: 7,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    pending_for_any_moderator: {
                      _: 8,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    pending_for_supervisor: {
                      _: 9,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    pending_for_valve: {
                      _: 10,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    oldest_unresolved_for_any_moderator: {
                      _: 11,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    oldest_unresolved_for_supervisor: {
                      _: 12,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    oldest_unresolved_for_valve: {
                      _: 13,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    coordinates: {
                      _: 14,
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
            return "CContentModeration_GetSubjectOverview_Response_Bucket";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.subject_type || _._(_._()),
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
                    subject_type: {
                      _: 1,
                      _: _._.readEnum,
                      _: _._.writeEnum,
                    },
                    subject_group_id: {
                      _: 2,
                      _: _._.readUint64String,
                      _: _._.writeUint64String,
                    },
                    subject_id: {
                      _: 3,
                      _: _._.readUint64String,
                      _: _._.writeUint64String,
                    },
                    reported_content_id: {
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
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "ContentReportSubjectKey";
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
                    rtime_cooldown_ends: {
                      _: 2,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    acquit_unresolved_reports: {
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
            return "CContentModeration_UpdateReporterCooldown_Request";
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
            return "CContentModeration_UpdateReporterCooldown_Response";
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
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CContentModeration_GetReporterCooldown_Request";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.rtime_cooldown_ends || _._(_._()),
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
                    rtime_cooldown_ends: {
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
            return "CContentModeration_GetReporterCooldown_Response";
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
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CContentModeration_GetModeratorPreferences_Request";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.preferred_level || _._(_._()),
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
                    preferred_level: {
                      _: 1,
                      _: _._.readEnum,
                      _: _._.writeEnum,
                    },
                    enabled_subject_types: {
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
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CContentModeration_GetModeratorPreferences_Response";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.preferred_level || _._(_._()),
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
                    preferred_level: {
                      _: 1,
                      _: _._.readEnum,
                      _: _._.writeEnum,
                    },
                    enabled_subject_types: {
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
            return "CContentModeration_SetModeratorPreferences_Request";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.subject_types || _._(_._()),
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
                    subject_types: {
                      _: 1,
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
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CContentModeration_SetModeratorPreferences_Request_SubjectTypeList";
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
            return "CContentModeration_SetModeratorPreferences_Response";
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
                    rt_start: {
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
            return "CContentModeration_GetModeratorActivity_Request";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.activities || _._(_._()),
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
                    activities: {
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
            return "CContentModeration_GetModeratorActivity_Response";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.subject_type || _._(_._()),
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
                    subject_type: {
                      _: 1,
                      _: _._.readEnum,
                      _: _._.writeEnum,
                    },
                    subject_group_id: {
                      _: 2,
                      _: _._.readUint64String,
                      _: _._.writeUint64String,
                    },
                    subject_id: {
                      _: 3,
                      _: _._.readUint64String,
                      _: _._.writeUint64String,
                    },
                    timestamp: {
                      _: 4,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    action: {
                      _: 5,
                      _: _._.readEnum,
                      _: _._.writeEnum,
                    },
                    json_data: {
                      _: 6,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    reported_content_id: {
                      _: 7,
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
            return "CContentModeration_GetModeratorActivity_Response_ModerationActivity";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.rtime_start_date || _._(_._()),
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
                    rtime_start_date: {
                      _: 1,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    rtime_end_date: {
                      _: 2,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    subject_type: {
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
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CContentModeration_GetDailyModerationStatistics_Request";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.stats || _._(_._()),
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
                    stats: {
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
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CContentModeration_GetDailyModerationStatistics_Response";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.rtime_date || _._(_._()),
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
                    rtime_date: {
                      _: 1,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    times_unresolved: {
                      _: 2,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    times_resolved: {
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
            return "CContentModeration_GetDailyModerationStatistics_Response_DayStatistics";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.subject_type || _._(_._()),
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
                    subject_type: {
                      _: 1,
                      _: _._.readEnum,
                      _: _._.writeEnum,
                    },
                    count: {
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
            return "CContentModeration_GetOldestUnresolvedSubjects_Request";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.subjects || _._(_._()),
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
                    subjects: {
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
            return "CContentModeration_GetOldestUnresolvedSubjects_Response";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.subject_type || _._(_._()),
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
                    subject_type: {
                      _: 1,
                      _: _._.readEnum,
                      _: _._.writeEnum,
                    },
                    subject_group_id: {
                      _: 2,
                      _: _._.readUint64String,
                      _: _._.writeUint64String,
                    },
                    subject_id: {
                      _: 3,
                      _: _._.readUint64String,
                      _: _._.writeUint64String,
                    },
                    reported_content_id: {
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
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CContentModeration_GetOldestUnresolvedSubjects_Response_Subject";
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
            return "CContentModeration_GetReporterStats_Request";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.total_reports || _._(_._()),
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
                    total_reports: {
                      _: 1,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    total_acquitted_reports: {
                      _: 2,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    reports_in_last_week: {
                      _: 3,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    acquitted_reports_in_last_week: {
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
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CContentModeration_GetReporterStats_Response";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.subject_type || _._(_._()),
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
                    subject_type: {
                      _: 1,
                      _: _._.readEnum,
                      _: _._.writeEnum,
                    },
                    moderator_level: {
                      _: 2,
                      _: _._.readEnum,
                      _: _._.writeEnum,
                    },
                    filters: {
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
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CContentModeration_ClaimBatch_Request";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.subjects || _._(_._()),
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
                    subjects: {
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
            return "CContentModeration_ClaimBatch_Response";
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
            return "CContentModeration_GetClaimedSubjects_Request";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.subjects || _._(_._()),
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
                    subjects: {
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
            return "CContentModeration_GetClaimedSubjects_Response";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.subjects_to_release || _._(_._()),
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
                    subjects_to_release: {
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
            return "CContentModeration_ReleaseSubjects_Request";
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
            return "CContentModeration_ReleaseSubjects_Response";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.subject_type || _._(_._()),
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
                    subject_type: {
                      _: 1,
                      _: _._.readEnum,
                      _: _._.writeEnum,
                    },
                    steamid: {
                      _: 2,
                      _: _._.readUint64String,
                      _: _._.writeUint64String,
                    },
                    forum: {
                      _: 3,
                      _: _._.readUint64String,
                      _: _._.writeUint64String,
                    },
                    topic: {
                      _: 4,
                      _: _._.readUint64String,
                      _: _._.writeUint64String,
                    },
                    comment: {
                      _: 5,
                      _: _._.readUint64String,
                      _: _._.writeUint64String,
                    },
                    comment_thread_id: {
                      _: 6,
                      _: _._.readUint64String,
                      _: _._.writeUint64String,
                    },
                    sender_account_id: {
                      _: 7,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    chat_message_rtime: {
                      _: 8,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    chat_message_ordinal: {
                      _: 9,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    chat_group_id: {
                      _: 10,
                      _: _._.readUint64String,
                      _: _._.writeUint64String,
                    },
                    chat_room_id: {
                      _: 11,
                      _: _._.readUint64String,
                      _: _._.writeUint64String,
                    },
                    receiver_account_id: {
                      _: 12,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    published_file_id: {
                      _: 13,
                      _: _._.readUint64String,
                      _: _._.writeUint64String,
                    },
                    ugc_content_type: {
                      _: 14,
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
            return "ReportedContentCoordinates";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.reported_content_id || _._(_._()),
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
                    reported_content_id: {
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
            return "CContentModeration_GetReportedContentByID_Request";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.subject || _._(_._()),
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
                    subject: {
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
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CContentModeration_GetReportedContentByID_Response";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.coordinates || _._(_._()),
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
                    coordinates: {
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
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CContentModeration_GetReportedContent_Request";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.subjects || _._(_._()),
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
                    subjects: {
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
            return "CContentModeration_GetReportedContent_Response";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.reported_content_id || _._(_._()),
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
                    reported_content_id: {
                      _: 1,
                      _: _._.readUint64String,
                      _: _._.writeUint64String,
                    },
                    details: {
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
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CContentModeration_OwnerDisputeModeration_Request";
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
            return "CContentModeration_OwnerDisputeModeration_Response";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.reported_content_id || _._(_._()),
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
                    reported_content_id: {
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
            return "CContentModeration_GetAuditLogByID_Request";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.entries || _._(_._()),
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
                    entries: {
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
            return "CContentModeration_GetAuditLogByID_Response";
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
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    actor_steamid: {
                      _: 2,
                      _: _._.readFixed64String,
                      _: _._.writeFixed64String,
                    },
                    automated_action: {
                      _: 3,
                      _: _._.readBool,
                      _: _._.writeBool,
                    },
                    action: {
                      _: 4,
                      _: _._.readEnum,
                      _: _._.writeEnum,
                    },
                    additional_json_data: {
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
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CContentModeration_GetAuditLogByID_Response_AuditLogEntry";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.reported_content_id || _._(_._()),
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
                    reported_content_id: {
                      _: 1,
                      _: _._.readUint64String,
                      _: _._.writeUint64String,
                    },
                    report_id: {
                      _: 2,
                      _: _._.readUint64String,
                      _: _._.writeUint64String,
                    },
                    dispute_details: {
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
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CContentModeration_ReporterDisputeModeration_Request";
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
            return "CContentModeration_ReporterDisputeModeration_Response";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.reported_content_id || _._(_._()),
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
                    reported_content_id: {
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
            return "CContentModeration_SustainModerationByID_Request";
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
            return "CContentModeration_SustainModerationByID_Response";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.reported_content_id || _._(_._()),
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
                    reported_content_id: {
                      _: 1,
                      _: _._.readUint64String,
                      _: _._.writeUint64String,
                    },
                    new_level: {
                      _: 2,
                      _: _._.readEnum,
                      _: _._.writeEnum,
                    },
                    reason: {
                      _: 3,
                      _: _._.readEnum,
                      _: _._.writeEnum,
                    },
                    note: {
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
            return "CContentModeration_EscalateSubjectByID_Request";
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
            return "CContentModeration_EscalateSubjectByID_Response";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.reported_content_id || _._(_._()),
              _.Message.initialize(this, _, 0, -1, [9], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    reported_content_id: {
                      _: 1,
                      _: _._.readUint64String,
                      _: _._.writeUint64String,
                    },
                    resolution: {
                      _: 4,
                      _: _._.readEnum,
                      _: _._.writeEnum,
                    },
                    reason: {
                      _: 2,
                      _: _._.readEnum,
                      _: _._.writeEnum,
                    },
                    note: {
                      _: 3,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    resolved_by_automation: {
                      _: 7,
                      _: _._.readEnum,
                      _: _._.writeEnum,
                    },
                    sanctions_applied: {
                      _: 9,
                      _: _,
                      _: !0,
                      _: !0,
                    },
                    skip_lock: {
                      _: 10,
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
            return "CContentModeration_ResolveByID_Request";
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
            return "CContentModeration_ResolveByID_Response";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.reported_content_id || _._(_._()),
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
                    reported_content_id: {
                      _: 1,
                      _: _._.readUint64String,
                      _: _._.writeUint64String,
                    },
                    csam_status: {
                      _: 2,
                      _: _._.readEnum,
                      _: _._.writeEnum,
                    },
                    terrorism_status: {
                      _: 3,
                      _: _._.readEnum,
                      _: _._.writeEnum,
                    },
                    credible_threat_of_violence_status: {
                      _: 4,
                      _: _._.readEnum,
                      _: _._.writeEnum,
                    },
                    additional_subject_data: {
                      _: 5,
                      _: _,
                    },
                    owner_dispute_details: {
                      _: 6,
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
            return "CContentModeration_UpdateSubjectByID_Request";
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
            return "CContentModeration_UpdateSubjectByID_Response";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.reported_content_id || _._(_._()),
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
                    reported_content_id: {
                      _: 1,
                      _: _._.readUint64String,
                      _: _._.writeUint64String,
                    },
                    action: {
                      _: 2,
                      _: _._.readEnum,
                      _: _._.writeEnum,
                    },
                    automated_action: {
                      _: 3,
                      _: _._.readBool,
                      _: _._.writeBool,
                    },
                    additional_json_data: {
                      _: 4,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    actor_steamid: {
                      _: 5,
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
            return "CContentModeration_WriteToAuditLogByID_Request";
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
            return "CContentModeration_WriteToAuditLogByID_Response";
          }
        }
        var _;
        ((_) => {
          function _(_, _, _) {
            return _.SendMsg(
              "ContentModeration.ClaimBatch#1",
              (0, _._)(_, _, _),
              _,
              {
                ePrivilege: 5,
              },
            );
          }
          _.ClaimBatch = _;
          function _(_, _, _) {
            return _.SendMsg(
              "ContentModeration.GetClaimedSubjects#1",
              (0, _._)(_, _, _),
              _,
              {
                bConstMethod: !0,
                ePrivilege: 5,
              },
            );
          }
          _.GetClaimedSubjects = _;
          function _(_, _, _) {
            return _.SendMsg(
              "ContentModeration.ReleaseSubjects#1",
              (0, _._)(_, _, _),
              _,
              {
                ePrivilege: 5,
              },
            );
          }
          _.ReleaseSubjects = _;
          function _(_, _, _) {
            return _.SendMsg(
              "ContentModeration.GetReportsSubmittedByUser#1",
              (0, _._)(_, _, _),
              _,
              {
                bConstMethod: !0,
                ePrivilege: 1,
              },
            );
          }
          _.GetReportsSubmittedByUser = _;
          function _(_, _, _) {
            return _.SendMsg(
              "ContentModeration.GetOneReportSubmittedByUser#1",
              (0, _._)(_, _, _),
              _,
              {
                bConstMethod: !0,
                ePrivilege: 1,
              },
            );
          }
          _.GetOneReportSubmittedByUser = _;
          function _(_, _, _) {
            return _.SendMsg(
              "ContentModeration.GetReportedSubjectsByOwner#1",
              (0, _._)(_, _, _),
              _,
              {
                bConstMethod: !0,
                ePrivilege: 5,
              },
            );
          }
          _.GetReportedSubjectsByOwner = _;
          function _(_, _, _) {
            return _.SendMsg(
              "ContentModeration.GetSubjectOverview#1",
              (0, _._)(_, _, _),
              _,
              {
                ePrivilege: 5,
              },
            );
          }
          _.GetSubjectOverview = _;
          function _(_, _, _) {
            return _.SendMsg(
              "ContentModeration.UpdateReporterCooldown#1",
              (0, _._)(_, _, _),
              _,
              {
                ePrivilege: 5,
              },
            );
          }
          _.UpdateReporterCooldown = _;
          function _(_, _, _) {
            return _.SendMsg(
              "ContentModeration.GetReporterCooldown#1",
              (0, _._)(_, _, _),
              _,
              {
                bConstMethod: !0,
                ePrivilege: 1,
              },
            );
          }
          _.GetReporterCooldown = _;
          function _(_, _, _) {
            return _.SendMsg(
              "ContentModeration.GetModeratorPreferences#1",
              (0, _._)(_, _, _),
              _,
              {
                bConstMethod: !0,
                ePrivilege: 5,
              },
            );
          }
          _.GetModeratorPreferences = _;
          function _(_, _, _) {
            return _.SendMsg(
              "ContentModeration.SetModeratorPreferences#1",
              (0, _._)(_, _, _),
              _,
              {
                ePrivilege: 5,
              },
            );
          }
          _.SetModeratorPreferences = _;
          function _(_, _, _) {
            return _.SendMsg(
              "ContentModeration.GetModeratorActivity#1",
              (0, _._)(_, _, _),
              _,
              {
                ePrivilege: 5,
              },
            );
          }
          _.GetModeratorActivity = _;
          function _(_, _, _) {
            return _.SendMsg(
              "ContentModeration.GetDailyModerationStatistics#1",
              (0, _._)(_, _, _),
              _,
              {
                bConstMethod: !0,
                ePrivilege: 5,
              },
            );
          }
          _.GetDailyModerationStatistics = _;
          function _(_, _, _) {
            return _.SendMsg(
              "ContentModeration.GetOldestUnresolvedSubjects#1",
              (0, _._)(_, _, _),
              _,
              {
                bConstMethod: !0,
                ePrivilege: 5,
              },
            );
          }
          _.GetOldestUnresolvedSubjects = _;
          function _(_, _, _) {
            return _.SendMsg(
              "ContentModeration.GetReporterStats#1",
              (0, _._)(_, _, _),
              _,
              {
                bConstMethod: !0,
                ePrivilege: 5,
              },
            );
          }
          _.GetReporterStats = _;
          function _(_, _, _) {
            return _.SendMsg(
              "ContentModeration.GetReportedContentByID#1",
              (0, _._)(_, _, _),
              _,
              {
                bConstMethod: !0,
                ePrivilege: 1,
              },
            );
          }
          _.GetReportedContentByID = _;
          function _(_, _, _) {
            return _.SendMsg(
              "ContentModeration.GetReportedContent#1",
              (0, _._)(_, _, _),
              _,
              {
                bConstMethod: !0,
                ePrivilege: 5,
              },
            );
          }
          _.GetReportedContent = _;
          function _(_, _, _) {
            return _.SendMsg(
              "ContentModeration.OwnerDisputeModeration#1",
              (0, _._)(_, _, _),
              _,
              {
                ePrivilege: 1,
              },
            );
          }
          _.OwnerDisputeModeration = _;
          function _(_, _, _) {
            return _.SendMsg(
              "ContentModeration.GetAuditLogByID#1",
              (0, _._)(_, _, _),
              _,
              {
                bConstMethod: !0,
                ePrivilege: 5,
              },
            );
          }
          _.GetAuditLogByID = _;
          function _(_, _, _) {
            return _.SendMsg(
              "ContentModeration.ReporterDisputeModeration#1",
              (0, _._)(_, _, _),
              _,
              {
                ePrivilege: 1,
              },
            );
          }
          _.ReporterDisputeModeration = _;
          function _(_, _, _) {
            return _.SendMsg(
              "ContentModeration.SustainModerationByID#1",
              (0, _._)(_, _, _),
              _,
              {
                ePrivilege: 5,
              },
            );
          }
          _.SustainModerationByID = _;
          function _(_, _, _) {
            return _.SendMsg(
              "ContentModeration.EscalateSubjectByID#1",
              (0, _._)(_, _, _),
              _,
              {
                ePrivilege: 5,
              },
            );
          }
          _.EscalateSubjectByID = _;
          function _(_, _, _) {
            return _.SendMsg(
              "ContentModeration.ResolveByID#1",
              (0, _._)(_, _, _),
              _,
              {
                ePrivilege: 5,
              },
            );
          }
          _.ResolveByID = _;
          function _(_, _, _) {
            return _.SendMsg(
              "ContentModeration.UpdateSubjectByID#1",
              (0, _._)(_, _, _),
              _,
              {
                ePrivilege: 5,
              },
            );
          }
          _.UpdateSubjectByID = _;
          function _(_, _, _) {
            return _.SendMsg(
              "ContentModeration.WriteToAuditLogByID#1",
              (0, _._)(_, _, _),
              _,
              {
                ePrivilege: 5,
              },
            );
          }
          _.WriteToAuditLogByID = _;
        })(_ || (_ = {}));
        var _ = Object.defineProperty,
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
        function _(_) {
          const _ = _?.reported_content_id
            ? _.reported_content_id
            : `${_?.subject_type}-${_?.subject_group_id}-${_?.subject_id}`;
          return `${_._.COMMUNITY_BASE_URL}my/reportedcontent/${_}`;
        }
        const _ = {
          [_._._]: {
            displayNameLoc: "#SteamNotification_HelpRequest_Author",
            titleLoc: "#SteamNotification_HelpRequest_Title",
            bodyLoc: (_) => ({
              locString: "#SteamNotification_HelpRequest_Body",
              params: [_.ticket],
            }),
            link: (_) => _._.HELP_BASE_URL + "wizard/HelpRequest/" + _.ticket,
          },
          [_._._]: {
            displayNameLoc: "#SteamNotifications_MajorSale",
            titleLoc: (_) => ({
              locString: _.title,
            }),
            bodyLoc: (_) =>
              (0, _._)() && _.link.includes("https://store.steampowered.com")
                ? "#SteamNotifications_MajorSale_SteamChina_Title"
                : _.body,
            image: (_) => _.image,
            link: (_) =>
              (0, _._)() && _.link.includes("https://store.steampowered.com")
                ? _.link.replace(
                    "https://store.steampowered.com",
                    _._.STORE_BASE_URL,
                  )
                : _.link,
          },
          [_._._]: {
            displayNameLoc: (_) => _.display_name,
            titleLoc: (_) => _.title,
            bodyLoc: (_) => _.body,
            image: (_) => _.image,
            link: (_) => _.link,
          },
          [_._._]: {
            titleLoc: "#SteamNotification_ModeratorMessage_Title",
            link: (_) =>
              _._.COMMUNITY_BASE_URL + "my/moderatormessages/" + _.msgid,
          },
          [_._._]: {
            displayNameLoc: (_) =>
              _.is_limited_launch
                ? "#Notification_LimitedLaunchInviteTitle"
                : "#Notification_PlaytestInviteTitle",
            titleLoc: (_) =>
              _.is_limited_launch
                ? "#Notification_LimitedLaunchInviteBody"
                : "#Notification_PlaytestInviteBody",
            image: (_) => _.appid,
            link: (_) =>
              _._.STORE_BASE_URL + "account/gatedaccess?appid=" + _.appid,
          },
          [_._._]: {
            titleLoc: (_) => {
              switch (_.status) {
                case _:
                  return "#Notification_ReportedContentAction_Received";
                case _:
                  return "#Notification_ReportedContentAction_Sanctioned";
                case _:
                  return "#Notification_ReportedContentAction_Acquitted";
                case _:
                  return "#Notification_ReportedContentAction_DisputeReceived";
                case _:
                  return "#Notification_ReportedContentAction_DisputeSanctioned";
                case _:
                  return "#Notification_ReportedContentAction_DisputeAcquitted";
                default:
                  return "#Notification_ReportedContentAction_Unknown";
              }
            },
            link: (_) => _(_),
          },
        };
        function _(_) {
          if (_ !== void 0) return _[_];
        }
        function _(_) {
          return !!_(_);
        }
        const _ = {
          [_._._]: {
            steamidAttribute: "inviter",
            titleLoc: "#SteamNotifications_FamilyInviteTitle",
            bodyLoc: "#SteamNotifications_FamilyInviteBody",
            url: (_) =>
              `${_._.STORE_BASE_URL}account/familymanagement/join?invitation=${_.familyid}`,
          },
          [_._._]: {
            steamidAttribute: "steamid",
            titleLoc: "#SteamNotifications_ParentalFeatureRequestTitle",
            bodyLoc: "#SteamNotifications_ParentalFeatureRequestBody",
            url: () =>
              `${_._.STORE_BASE_URL}account/familymanagement?tab=requests`,
          },
          [_._._]: {
            steamidAttribute: "requestor_steamid",
            titleLoc: "#SteamNotifications_FamilyPurchaseRequestTitle",
            bodyLoc: "#SteamNotifications_FamilyPurchaseRequestBody",
            url: (_) => (0, _._)(_.familyid, _.request_id),
          },
          [_._._]: {
            steamidAttribute: "responder_steamid",
            titleLoc: (_) =>
              _.action == _._._
                ? "#SteamNotifications_FamilyPurchaseRequestResponseDeclinedTitle"
                : "",
            bodyLoc: (_) =>
              _.action == _._._
                ? "#SteamNotifications_FamilyPurchaseRequestDeclinedBody"
                : "",
            url: () =>
              `${_._.STORE_BASE_URL}account/familymanagement?tab=requests`,
          },
          [_._._]: {
            steamidAttribute: "steamid",
            titleLoc: "#SteamNotifications_ParentalPlaytimeRequestTitle",
            bodyLoc: "#SteamNotifications_ParentalPlaytimeRequestBody",
            url: () =>
              `${_._.STORE_BASE_URL}account/familymanagement?tab=requests`,
          },
          [_._._]: {
            steamidAttribute: "steamid_approver",
            titleLoc: (_) =>
              _.approved
                ? "#SteamNotifications_ParentalFeatureAccessResponseTitleApproved"
                : "#SteamNotifications_ParentalFeatureAccessResponseTitleDeclined",
            bodyLoc: (_) =>
              _.approved
                ? "#SteamNotifications_ParentalFeatureAccessResponseBodyApproved"
                : "#SteamNotifications_ParentalFeatureAccessResponseBodyDeclined",
            url: () =>
              `${_._.STORE_BASE_URL}account/familymanagement?tab=requests`,
          },
          [_._._]: {
            steamidAttribute: "steamid_approver",
            titleLoc: (_) =>
              _.approved
                ? "#SteamNotifications_ParentalPlaytimeResponseTitleApproved"
                : "#SteamNotifications_ParentalPlaytimeResponseTitleDeclined",
            bodyLoc: (_) =>
              _.approved
                ? "#SteamNotifications_ParentalPlaytimeResponseBodyApproved"
                : "#SteamNotifications_ParentalPlaytimeResponseBodyDeclined",
            url: () =>
              `${_._.STORE_BASE_URL}account/familymanagement?tab=requests`,
          },
        };
        function _(_) {
          if (_ !== void 0) return _[_];
        }
        function _(_) {
          return !!_(_);
        }
        const _ = [
          _._._,
          _._._,
          _._._,
          _._._,
          _._._,
          _._._,
          _._._,
          _._._,
          _._._,
          _._._,
          _._._,
        ];
        function _(_) {
          return _.findIndex((_) => _ == _) != null;
        }
        function _(_) {
          return _.hidden ? !1 : _(_.notification_type) && _(_.body_data);
        }
        function _(_) {
          return _(_) || _(_) || _(_);
        }
        var _ = ((_) => (
          (_[(_.New = 0)] = "New"),
          (_[(_.Update = 1)] = "Update"),
          (_[(_.Remove = 2)] = "Remove"),
          _
        ))(_ || {});
        const _ = "Test_",
          _ = 3600 * 48,
          _ = 600,
          _ = !1,
          _ = new _._("SteamNotificationStore"),
          _ = _.Debug,
          _ = _.Error,
          _ = _.Warning;
        class _ {
          constructor() {
            (0, _._)(this);
          }
          m_rgNotificationRollups = [];
          m_summary = _();
          m_bLoaded = !1;
          m_nUnviewed = 0;
          m_rgNotifyServerRead = [];
          m_rgNotifyServerHidden = [];
          m_keyNotifyServerRead = "";
          m_keyNotifyServerHidden = "";
          m_steamid;
          m_transport;
          m_rgUnreadNotificationIDs = [];
          m_rgNewRollupIDs = new Map();
          m_rgTestNotifications = [];
          m_currentNotificationsData = null;
          m_strRemoteClientID = "";
          m_eTargetClientType = _._._;
          m_fnOnNotificationCallback = null;
          BHasNotificationsData() {
            return this.m_currentNotificationsData != null;
          }
          setTransport(_) {
            this.m_transport = _;
          }
          RegisterOnNotificationCallback(_) {
            this.m_fnOnNotificationCallback = _;
          }
          SetClientFilters(_, _ = _._._) {
            (this.m_strRemoteClientID = _), (this.m_eTargetClientType = _);
          }
          NotifyServerNotificationsRead(_) {
            this.m_rgNotifyServerRead.push(..._), this.UpdateServer();
          }
          NotifyServerNotificationsHidden(_) {
            this.m_rgNotifyServerHidden.push(..._), this.UpdateServer();
          }
          BSendToCallbackAsNew(_) {
            return (
              !_.read &&
              !_(_) &&
              !this.m_rgUnreadNotificationIDs.includes(_.notification_id)
            );
          }
          Dev_AddTestNotification(_) {}
          Dev_UpdateTestNotificationReadState(_, _) {
            const _ = this.m_rgTestNotifications.findIndex(
              (_) => _.notification_id == _,
            );
            return _ !== -1 && this.m_rgTestNotifications[_].read != _
              ? ((this.m_rgTestNotifications[_].read = _), !0)
              : !1;
          }
          UpdateServer() {
            if (this.m_rgNotifyServerRead.length > 0) {
              const _ = _._.Init(_._);
              _.Body().set_notification_ids(this.m_rgNotifyServerRead),
                _._.MarkNotificationsRead(this.m_transport, _) &&
                  (this.m_rgNotifyServerRead = []);
            }
            if (this.m_rgNotifyServerHidden.length > 0) {
              const _ = _._.Init(_._);
              _.Body().set_notification_ids(this.m_rgNotifyServerHidden),
                _._.HideNotification(this.m_transport, _) &&
                  (this.m_rgNotifyServerHidden = []);
            }
          }
          MarkItemRead(_, _ = !1) {
            let _ = this.m_rgNotificationRollups.findIndex(
              (_) => _.item.notification_id == _,
            );
            if (_ === -1) {
              _
                ? this.NotifyServerNotificationsRead([_])
                : _(
                    "Attempted to mark notification read that is not in the notification store",
                  );
              return;
            }
            let _ = this.m_rgNotificationRollups[_];
            if (_.item.read) {
              _("Attempted to mark notification read that is already read");
              return;
            }
            if (((_.item.read = !0), _.rgunread?.length > 0)) {
              this.ReduceNewTotals(_.type, _.rgunread.length);
              let _ = [];
              _.rgunread.forEach((_) => {
                _.push(_);
              }),
                _.rgread.push(..._.rgunread),
                (_.rgunread = []),
                this.NotifyServerNotificationsRead(_);
            }
          }
          MarkItemHidden(_) {
            let _ = this.m_rgNotificationRollups.findIndex(
              (_) => _.item.notification_id == _,
            );
            if (_ === -1) {
              _(
                "Attempted to mark notification hidden that is not in the notification store",
              );
              return;
            }
            let _ = this.m_rgNotificationRollups[_];
            (_.item.hidden = !0),
              _.rgunread?.length > 0 &&
                this.ReduceNewTotals(_.type, _.rgunread?.length),
              this.NotifyServerNotificationsHidden([
                ..._.rgunread,
                ..._.rgread,
              ]);
          }
          ReduceNewTotals(_, _) {
            _(this.m_summary, _, -_);
          }
          MarkAllItemsViewed() {
            const _ = _._.Init(_._);
            _.Body().set_remote_client_id(this.m_strRemoteClientID),
              _.Body().set_target_client_type(this.m_eTargetClientType),
              _._.MarkNotificationsViewed(this.m_transport, _),
              (this.m_nUnviewed = 0);
          }
          MarkAllItemsRead(_) {
            let _ = [],
              _ = [],
              _ = 0;
            const _ = _ ?? this.m_rgNotificationRollups;
            return (
              _.forEach((_, _) => {
                _.rgunread.length > 0 &&
                  (_.rgunread.forEach((_) => {
                    _.push(_);
                  }),
                  _.push(_));
              }),
              _.length > 0 &&
                ((this.m_summary = Object.assign(_(), {
                  pending_gifts: this.m_summary.pending_gifts,
                  pending_invites: this.m_summary.pending_invites,
                  pending_family_invites: this.m_summary.pending_family_invites,
                })),
                _.forEach((_) => {
                  let _ = _[_];
                  (_.item.read = !0), (_.rgunread = []);
                }),
                this.NotifyServerNotificationsRead(_)),
              _.length + _
            );
          }
          ApplyNotificationsUpdate(_) {
            if (
              (_("ApplyNotificationsUpdate", _),
              !_ ||
                (!_.notifications?.length &&
                  _.pending_friend_count === void 0 &&
                  _.pending_gift_count === void 0))
            ) {
              _("Error: ApplyNotificationsUpdate was called with no data");
              return;
            }
            if (!this.m_currentNotificationsData) {
              _(
                "Error: ApplyNotificationsUpdate was called before this.m_currentNotificationsData was set",
              );
              return;
            }
            const _ = this.m_currentNotificationsData;
            _.notifications?.forEach((_) => {
              const _ = _.notifications.findIndex(
                (_) => _.notification_id == _.notification_id,
              );
              _ != -1
                ? Object.assign(_.notifications[_], _)
                : _.notifications.push(_);
            }),
              _.pending_friend_count !== void 0 &&
                (this.m_currentNotificationsData.pending_friend_count =
                  _.pending_friend_count),
              _.pending_gift_count !== void 0 &&
                (this.m_currentNotificationsData.pending_gift_count =
                  _.pending_gift_count),
              _.pending_family_invite_count !== void 0 &&
                (this.m_currentNotificationsData.pending_family_invite_count =
                  _.pending_family_invite_count),
              this.ProcessNotifications();
          }
          ProcessNewNotificationPayload(_) {
            (this.m_currentNotificationsData = JSON.parse(JSON.stringify(_))),
              this.ProcessNotifications();
          }
          ProcessNotifications() {
            let _ = [],
              _ = _(),
              _ = 0;
            if (
              (this.m_currentNotificationsData?.notifications?.forEach((_) => {
                this.BExcludeClientTargetedNotification(_) ||
                  (this.m_rgNotifyServerHidden.length > 0 &&
                    this.m_rgNotifyServerHidden.findIndex(
                      (_) => _ == _.notification_id,
                    ) !== -1 &&
                    (_.hidden = !0),
                  _(_) &&
                    (this.m_rgNotifyServerRead.length > 0 &&
                      this.m_rgNotifyServerRead.findIndex(
                        (_) => _ == _.notification_id,
                      ) !== -1 &&
                      (_.read = !0),
                    _.read || _(_, _.notification_type, 1),
                    _.viewed || _++,
                    this.AddNotificationToRollups(_, _)));
              }),
              _.sort((_, _) => _.timestamp - _.timestamp),
              this.m_fnOnNotificationCallback)
            ) {
              for (const _ of _)
                if (_.bSendToCallbackAsNew)
                  this.m_rgNewRollupIDs.set(
                    _.rollup_key,
                    JSON.parse(JSON.stringify(_)),
                  ),
                    this.m_fnOnNotificationCallback(_, 0);
                else if (this.m_rgNewRollupIDs.has(_.rollup_key)) {
                  let _ = this.m_rgNewRollupIDs.get(_.rollup_key);
                  (_.item.read != _.item.read ||
                    _.item.viewed != _.item.viewed) &&
                    (this.m_rgNewRollupIDs.set(
                      _.rollup_key,
                      JSON.parse(JSON.stringify(_)),
                    ),
                    this.m_fnOnNotificationCallback(_, 1));
                }
              for (const [_, _] of this.m_rgNewRollupIDs)
                _.findIndex((_) => _.rollup_key == _) == -1 &&
                  (this.m_fnOnNotificationCallback(_, 2),
                  this.m_rgNewRollupIDs.delete(_));
            }
            _.reverse(),
              (_.pending_gifts =
                this.m_currentNotificationsData?.pending_gift_count ?? 0),
              (_.pending_invites =
                this.m_currentNotificationsData?.pending_friend_count ?? 0),
              (_.pending_family_invites =
                this.m_currentNotificationsData?.pending_family_invite_count ??
                0),
              (this.m_rgNotificationRollups = _.slice()),
              (this.m_summary = _),
              (this.m_bLoaded = !0),
              (this.m_nUnviewed = _);
          }
          BExcludeClientTargetedNotification(_) {
            const _ = _(_.body_data);
            return _
              ? _.remote_client_id &&
                this.m_strRemoteClientID != _.remote_client_id
                ? !0
                : !!(
                    _.target_client_types &&
                    !(this.m_eTargetClientType & _.target_client_types)
                  )
              : !1;
          }
          BReplaceRollupItem(_, _) {
            return _.read != _.read
              ? _.read
              : (_.read && _.read) || _.viewed == _.viewed
                ? _.timestamp < _.timestamp
                : !_.viewed && _.viewed
                  ? !0
                  : _.viewed && _.viewed
                    ? _.viewed < _.viewed
                    : !1;
          }
          AddNotificationToRollups(_, _) {
            const _ = this.BSendToCallbackAsNew(_);
            _ && this.m_rgUnreadNotificationIDs.push(_.notification_id);
            let _ = _.notification_type;
            switch (_) {
              case _._._:
                {
                  const _ = _(_);
                  if (!_) return;
                  const _ =
                    "comment_" +
                    _.owner_steam_id?.GetAccountID() +
                    "_" +
                    _.forum_id +
                    "_" +
                    _.topic_id +
                    (_.brate_limited ? "_ratelimited" : "");
                  let _ = _.findIndex((_) => _.rollup_key == _);
                  if (_ == -1)
                    _.push({
                      type: _,
                      rollup_key: _,
                      item: _,
                      rollup_count: 1,
                      timestamp: _.timestamp,
                      rgunread: _.read ? [] : [_.notification_id],
                      rgread: _.read ? [_.notification_id] : [],
                      bSendToCallbackAsNew: _,
                      url: _(_),
                    });
                  else {
                    let _ = _[_];
                    this.BReplaceRollupItem(_, _.item) &&
                      ((!_ || _.item.read) && (_.url = _(_)),
                      (_.item = _),
                      (_.timestamp = _.timestamp),
                      (_.bSendToCallbackAsNew = _)),
                      (_.rollup_count = _.rollup_count + 1),
                      _.read
                        ? _.rgread.push(_.notification_id)
                        : _.rgunread.push(_.notification_id);
                  }
                }
                break;
              case _._._:
                const _ = _(_);
                if (_) {
                  const _ = "item_" + _.appid;
                  this.AddNotificationToRollupByAppID(_, _, _, _, _, _.appid);
                }
                break;
              case _._._:
                const _ = _(_)?.appid.toString();
                if (_) {
                  const _ = "asyncgame_" + _;
                  this.AddNotificationToRollupByAppID(_, _, _, _, _, _);
                }
                break;
              case _._._:
                const _ = _(_),
                  _ = _?.report_id,
                  _ = _(_),
                  _ = `contentreport_${_}`;
                let _ = _.findIndex((_) => _.rollup_key == _);
                if (_ == -1)
                  _.push({
                    type: _,
                    rollup_key: _,
                    item: _,
                    rollup_count: 1,
                    timestamp: _.timestamp,
                    rgunread: _.read ? [] : [_.notification_id],
                    rgread: _.read ? [_.notification_id] : [],
                    bSendToCallbackAsNew: _,
                    url: _,
                  });
                else {
                  let _ = _[_];
                  this.BReplaceRollupItem(_, _.item) &&
                    ((!_ || _.item.read) && (_.url = _),
                    (_.item = _),
                    (_.timestamp = _.timestamp),
                    (_.bSendToCallbackAsNew = _)),
                    (_.rollup_count = _.rollup_count + 1),
                    _.read
                      ? _.rgread.push(_.notification_id)
                      : _.rgunread.push(_.notification_id);
                }
                break;
              default:
                _.push({
                  type: _,
                  rollup_key: _.notification_id,
                  item: _,
                  timestamp: _.timestamp,
                  rgunread: _.read ? [] : [_.notification_id],
                  rgread: _.read ? [_.notification_id] : [],
                  bSendToCallbackAsNew: _,
                });
                break;
            }
          }
          AddNotificationToRollupByAppID(_, _, _, _, _, _) {
            let _ = _.findIndex((_) => _.rollup_key == _);
            if (_ == -1)
              _.push({
                type: _,
                rollup_key: _,
                item: _,
                rollup_count: 1,
                timestamp: _.timestamp,
                rgunread: _.read ? [] : [_.notification_id],
                rgread: _.read ? [_.notification_id] : [],
                bSendToCallbackAsNew: _,
              });
            else {
              let _ = _[_];
              this.BReplaceRollupItem(_, _.item) &&
                ((_.item = _),
                (_.timestamp = _.timestamp),
                (_.bSendToCallbackAsNew = _)),
                (_.rollup_count = _.rollup_count + 1),
                _.read
                  ? _.rgread.push(_.notification_id)
                  : _.rgunread.push(_.notification_id);
            }
          }
        }
        _([_._], _.prototype, "m_rgNotificationRollups", 2),
          _([_._], _.prototype, "m_summary", 2),
          _([_._], _.prototype, "m_bLoaded", 2),
          _([_._], _.prototype, "m_nUnviewed", 2),
          _([_._], _.prototype, "ProcessNotifications", 1);
        function _() {
          return {
            comments: 0,
            inventory_items: 0,
            invites: 0,
            gifts: 0,
            offline_messages: 0,
            trade_offers: 0,
            async_game_updates: 0,
            moderator_messages: 0,
            help_request_replies: 0,
            general: 0,
            wishlist: 0,
            pending_gifts: 0,
            pending_invites: 0,
            major_sale: 0,
            parental_feature_requests: 0,
            family_invites: 0,
            family_purchase_requests: 0,
            family_purchase_request_responses: 0,
            pending_family_invites: 0,
            parental_playtime_requests: 0,
            parental_feature_access_responses: 0,
            parental_playtime_responses: 0,
            requested_game_added: 0,
            playtest_invites: 0,
          };
        }
        async function _(_, _, _, _, _, _ = !0, _ = !1) {
          if (!_) throw new Error("Invalid steamid for GetSteamNotifications");
          const _ = _._.Init(_._);
          _.Body().set_language(_),
            _.Body().set_include_read(_),
            _.Body().set_include_pinned_counts(!0),
            _.Body().set_include_confirmation_count(_);
          const _ = await _._.GetSteamNotifications(_, _);
          if (_.GetEResult() !== _._)
            throw (
              (_(
                `Received error from GetSteamNotifications. Result ${_.GetEResult()}. Transport ${_.Hdr().transport_error()}`,
              ),
              new Error(`Error from GetSteamNotifications: ${_.GetEResult()}`))
            );
          const _ = _.Body().toObject();
          return (
            _ &&
              (_.notifications = _.notifications?.filter(
                (_) => !_(_.notification_type, _, _),
              )),
            _
          );
        }
        async function _(_, _) {
          if (!_ || !_.steamid || !_.contextid || !_.appid || !_.assetid)
            return _("Item notification missing required attributes"), null;
          const _ = _._.Init(_);
          _.Body().set_steamid(_.steamid),
            _.Body().set_contextid(_.contextid),
            _.Body().set_appid(parseInt(_.appid)),
            _.Body().set_get_descriptions(!0),
            _.Body().set_language(_._.LANGUAGE);
          let _ = new _();
          _.add_assetids(_.assetid), _.Body().set_filters(_);
          const _ = await _.GetInventoryItemsWithDescriptions(_, _);
          return _.GetEResult() !== _._
            ? (_(
                "Request for steam item metadata did not succeed",
                _.GetEResult(),
              ),
              null)
            : (_.Body().toObject().descriptions[0] ?? null);
        }
        const _ = "ItemMetadata";
        function _(_) {
          return [
            `${_}_${_?.steamid}_${_?.appid}_${_?.contextid}_${_?.assetid}`,
          ];
        }
        async function _(_, _) {
          if (!_) return [];
          const _ = CProtoBufMsg.Init(
            CSteamNotification_GetPreferences_Request,
          );
          let _ = await SteamNotificationService.GetPreferences(_, _);
          return _.GetEResult() != k_EResultOK
            ? (_("Getting notification preferences failed " + _.GetEResult()),
              [])
            : _.Body().toObject().preferences;
        }
        function _(_, _, _) {
          let _ = _(_._._, _.body_data);
          _.steamid = _;
          let _ = (0, _._)({
            queryKey: _(_),
            queryFn: async () => _(_, _),
            staleTime: 1 / 0,
          });
          return _.isSuccess ? _.data : null;
        }
        function _(_) {
          let _ = `comment/${_.comment_type}/bounce/${_.owner_steam_id.ConvertTo64BitString()}/${_.forum_id}/?feature2=${_.topic_id}`;
          return _.last_post > 0 && (_ += "&tscn=" + (_.last_post - 1)), _;
        }
        function _(_) {
          return _.comment_type == _._;
        }
        function _(_) {
          return _?.bhas_friend;
        }
        function _(_) {
          return _.comment_type == _._;
        }
        function _(_) {
          return _(_) || _(_);
        }
        function _(_) {
          return _(_);
        }
        function _(_) {
          if (!_) return null;
          try {
            return JSON.parse(_);
          } catch {
            _("Steam notification in invalid format:", _);
          }
          return null;
        }
        function _(_) {
          return _(_.notification_type, _.body_data);
        }
        function _(_) {
          return _(_.type, _.item?.body_data);
        }
        function _(_, _) {
          let _ = _(_);
          if (!_) return null;
          switch (_) {
            case _._._:
              return _.gifter_account;
            case _._._:
              return {
                responder_steamid: _.responder_steamid,
                package_id: _.package_id,
                bundle_id: _.bundle_id,
              };
            case _._._:
              return parseInt(_.sender);
            case _._._:
              return {
                appid: _.appid,
                count: _.count ?? 1,
                appids: _.appids ?? [],
              };
            case _._._:
              return !_.appid || !_.state || (_.state != _._ && _.state != _._)
                ? (_("Async game notification invalid data", _), null)
                : {
                    appid: parseInt(_.appid),
                    state: parseInt(_.state),
                  };
            case _._._:
              let _ = {
                owner_steam_id: _.owner_steam_id
                  ? new _._(_.owner_steam_id)
                  : null,
                bclan_account: _(_.bclan_account),
                title: _.title,
                comment: _.text,
                time: _.last_post,
                comment_type: Number(_.type),
                topic_id: _.topic_id,
                forum_id: _.forum_id,
                account_steam_id: _.account_id
                  ? _._.InitFromAccountID(_.account_id)
                  : null,
                bhas_friend: _(_.bhas_friend),
                bis_forum: _(_.bis_forum),
                last_post: _.last_post,
                bsubscribed: _(_.subscribed),
                bis_owner: _(_.bis_owner),
                brate_limited: !!_.brate_limited,
              };
              return (
                _.json_data &&
                  (_.json_data = {
                    app_id: parseInt(_.json_data.app_id),
                    file_type: parseInt(_.json_data.file_type),
                    title: _.json_data.title,
                  }),
                _
              );
            case _._._:
              return {
                requestorID: parseInt(_.requestor_id),
                state: _.state ? parseInt(_.state) : _.abL,
              };
            case _._._:
              return {
                appid: parseInt(_.app_id),
                assetid: _.asset_id ?? "",
                contextid: _.context_id ?? "",
              };
            case _._._:
              return {
                url: _.url ?? "",
                strGameName: _.content_app_name ?? "",
                mediaType: _.media_type ?? "clip",
                secDuration: parseFloat(_.duration_seconds ?? 0),
                nSize: parseInt(_.file_size ?? 0),
                strMachineName: _.machine_name,
                rtExpiration: _.expiration,
                thumbnailURL: _.thumbnail_url,
              };
            case _._._:
              return {
                report_id: _.report_id ?? "",
                reported_content_id: _.reported_content_id ?? "",
                subject_type: _.subject_type ?? 0,
                subject_group_id: _.subject_group_id ?? "0",
                subject_id: _.subject_id ?? "0",
                status: _.status ?? 0,
              };
            default:
              return (
                _(
                  "GetCustomNotificationDataByType called with unexpected type:" +
                    _,
                  _,
                ),
                null
              );
          }
        }
        function _(_) {
          if (typeof _ > "u") return !1;
          if (typeof _ == "number") return _ > 0;
          if (typeof _ == "string")
            switch (_.toLowerCase()?.trim()) {
              case "true":
              case "1":
                return !0;
              default:
                return !1;
            }
          return _("notification contained unexpected boolean value"), !1;
        }
        function _(_) {
          let _ = 0;
          return (
            (function (_) {
              return Object.keys(_);
            })(_).forEach((_) => {
              _ != "pending_gifts" && _ != "pending_invites" && (_ += _[_]);
            }),
            _
          );
        }
        const _ = {
          [_._._]: {
            rollup_field: void 0,
            eFeature: void 0,
          },
          [_._._]: {
            rollup_field: void 0,
            eFeature: void 0,
          },
          [_._._]: {
            rollup_field: "gifts",
            eFeature: _._,
          },
          [_._._]: {
            rollup_field: "comments",
            eFeature: _._,
          },
          [_._._]: {
            rollup_field: "inventory_items",
            eFeature: _._,
          },
          [_._._]: {
            rollup_field: "invites",
            eFeature: _._,
          },
          [_._._]: {
            rollup_field: "major_sale",
            eFeature: _._,
          },
          [_._._]: {
            rollup_field: void 0,
            eFeature: void 0,
          },
          [_._._]: {
            rollup_field: "wishlist",
            eFeature: _._,
          },
          [_._._]: {
            rollup_field: "trade_offers",
            eFeature: _._,
          },
          [_._._]: {
            rollup_field: "general",
            eFeature: _._,
          },
          [_._._]: {
            rollup_field: "help_request_replies",
            eFeature: _._,
          },
          [_._._]: {
            rollup_field: "async_game_updates",
            eFeature: _._,
          },
          [_._._]: {
            rollup_field: "moderator_messages",
            eFeature: _._,
          },
          [_._._]: {
            rollup_field: "parental_feature_requests",
            eFeature: _._,
          },
          [_._._]: {
            rollup_field: "family_invites",
            eFeature: _._,
          },
          [_._._]: {
            rollup_field: "family_purchase_requests",
            eFeature: _._,
          },
          [_._._]: {
            rollup_field: "parental_playtime_requests",
            eFeature: _._,
          },
          [_._._]: {
            rollup_field: "family_purchase_request_responses",
            eFeature: _._,
          },
          [_._._]: {
            rollup_field: "parental_feature_access_responses",
            eFeature: _._,
          },
          [_._._]: {
            rollup_field: "parental_playtime_responses",
            eFeature: _._,
          },
          [_._._]: {
            rollup_field: "requested_game_added",
            eFeature: _._,
          },
          [_._._]: {
            rollup_field: void 0,
            eFeature: _._,
          },
          [_._._]: {
            rollup_field: void 0,
            eFeature: _._,
          },
          [_._._]: {
            rollup_field: "playtest_invites",
            eFeature: _._,
          },
          [_._._]: {
            rollup_field: void 0,
            eFeature: _._,
          },
          [_._._]: {
            rollup_field: void 0,
            eFeature: _._,
          },
        };
        function _(_) {
          const _ = _[_];
          return (0, _._)(!!_, `Missing notification type data for ${_}`), _;
        }
        function _(_, _, _) {
          if (!_) return !1;
          const _ = _(_);
          return (0, _._)(_, _?.eFeature ?? _._, _);
        }
        function _(_, _, _) {
          (0, _._)(() => {
            const _ = _(_);
            _?.rollup_field &&
              (_[_.rollup_field] = Math.max(0, _[_.rollup_field] + _));
          });
        }
        function _(_) {
          return !_.viewed || _.viewed + _ > (0, _._)();
        }
        function _(_) {
          return _.viewed && _.viewed + _ < (0, _._)();
        }
        function _(_) {
          return (
            _(_) +
              _.pending_gifts +
              _.pending_invites +
              _.pending_family_invites >
            0
          );
        }
      },
    },
  ]);
})();
