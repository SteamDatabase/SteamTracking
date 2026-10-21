(() => {
  (self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
    [27634],
    {
      chunkid: (module, module_exports, __webpack_require__) => {
        "use strict";
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
        "use strict";
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
          _ = __webpack_require__("chunkid");
        const _ = 0,
          _ = 1,
          _ = 2,
          _ = 3,
          _ = 4,
          _ = 5,
          _ = 0,
          _ = 1,
          _ = 2,
          _ = 3,
          _ = 4,
          _ = 6,
          _ = 7,
          _ = 8,
          _ = 9,
          _ = 10,
          _ = 11,
          _ = 12,
          _ = 13,
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
          _ = 30;
        function _(_) {
          return "unknown EFamilyGroupRole ( " + _ + " )";
        }
        function _(_) {
          return "unknown EFamilyGroupMembershipRemovalReason ( " + _ + " )";
        }
        function _(_) {
          return "unknown EFamilyGroupsTwoFactorMethod ( " + _ + " )";
        }
        function _(_) {
          return "unknown EPurchaseRequestAction ( " + _ + " )";
        }
        function _(_) {
          return "unknown EFamilyGroupChangeLogType ( " + _ + " )";
        }
        function _(_) {
          return "unknown ESharedLibraryExcludeReason ( " + _ + " )";
        }
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
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
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
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
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
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
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
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
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
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
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
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
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
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
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
                    invite_id: {
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
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
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
                    rtime_joined: {
                      _: 2,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    rtime_left: {
                      _: 3,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    role: {
                      _: 4,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    participated: {
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
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "FamilyGroupMembership";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.family_groupid || _._(_._()),
              _.Message.initialize(this, _, 0, -1, [5, 10], null);
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
                    membership_history: {
                      _: 10,
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
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
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
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
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
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
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
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
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
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
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
                    cooldown_seconds_remaining: {
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
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
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
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
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
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
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
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
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
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
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
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
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
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
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
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
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
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
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
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
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
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
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
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
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
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
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
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
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
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
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
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
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
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
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
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
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
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
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
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
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
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
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
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
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
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
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
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
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
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
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
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
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
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
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
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
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
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
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
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
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
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
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
                      _: _,
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
                      _: _._,
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
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
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
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
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
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
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
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
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
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
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
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
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
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
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
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
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
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
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
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
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
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
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
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
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
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
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
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
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
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
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
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
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
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
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
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
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
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
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
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CFamilyGroups_ClearCooldownSkip_Response";
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
                    rtime32_target: {
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
            return "CFamilyGroups_RollbackFamilyGroup_Request";
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
            return "CFamilyGroups_RollbackFamilyGroup_Response";
          }
        }
        var _;
        ((_) => {
          function _(_, _, _) {
            return _.SendMsg(
              "FamilyGroups.CreateFamilyGroup#1",
              (0, _._)(_, _, _),
              _,
              {
                ePrivilege: 1,
                rgBrowserAPISites: ["partner"],
              },
            );
          }
          _.CreateFamilyGroup = _;
          function _(_, _, _) {
            return _.SendMsg(
              "FamilyGroups.GetFamilyGroup#1",
              (0, _._)(_, _, _),
              _,
              {
                bConstMethod: !0,
                ePrivilege: 1,
                rgBrowserAPISites: ["partner"],
              },
            );
          }
          _.GetFamilyGroup = _;
          function _(_, _, _) {
            return _.SendMsg(
              "FamilyGroups.GetFamilyGroupForUser#1",
              (0, _._)(_, _, _),
              _,
              {
                bConstMethod: !0,
                ePrivilege: 1,
                rgBrowserAPISites: ["partner"],
              },
            );
          }
          _.GetFamilyGroupForUser = _;
          function _(_, _, _) {
            return _.SendMsg(
              "FamilyGroups.ModifyFamilyGroupDetails#1",
              (0, _._)(_, _, _),
              _,
              {
                ePrivilege: 1,
                rgBrowserAPISites: ["partner"],
              },
            );
          }
          _.ModifyFamilyGroupDetails = _;
          function _(_, _, _) {
            return _.SendMsg(
              "FamilyGroups.InviteToFamilyGroup#1",
              (0, _._)(_, _, _),
              _,
              {
                ePrivilege: 1,
                rgBrowserAPISites: ["partner"],
              },
            );
          }
          _.InviteToFamilyGroup = _;
          function _(_, _, _) {
            return _.SendMsg(
              "FamilyGroups.ConfirmInviteToFamilyGroup#1",
              (0, _._)(_, _, _),
              _,
              {
                ePrivilege: 1,
                rgBrowserAPISites: ["partner"],
              },
            );
          }
          _.ConfirmInviteToFamilyGroup = _;
          function _(_, _, _) {
            return _.SendMsg(
              "FamilyGroups.ResendInvitationToFamilyGroup#1",
              (0, _._)(_, _, _),
              _,
              {
                ePrivilege: 1,
                rgBrowserAPISites: ["partner"],
              },
            );
          }
          _.ResendInvitationToFamilyGroup = _;
          function _(_, _, _) {
            return _.SendMsg(
              "FamilyGroups.JoinFamilyGroup#1",
              (0, _._)(_, _, _),
              _,
              {
                ePrivilege: 1,
                rgBrowserAPISites: ["partner"],
              },
            );
          }
          _.JoinFamilyGroup = _;
          function _(_, _, _) {
            return _.SendMsg(
              "FamilyGroups.ConfirmJoinFamilyGroup#1",
              (0, _._)(_, _, _),
              _,
              {
                ePrivilege: 1,
                rgBrowserAPISites: ["partner"],
              },
            );
          }
          _.ConfirmJoinFamilyGroup = _;
          function _(_, _, _) {
            return _.SendMsg(
              "FamilyGroups.RemoveFromFamilyGroup#1",
              (0, _._)(_, _, _),
              _,
              {
                ePrivilege: 1,
                rgBrowserAPISites: ["partner"],
              },
            );
          }
          _.RemoveFromFamilyGroup = _;
          function _(_, _, _) {
            return _.SendMsg(
              "FamilyGroups.CancelFamilyGroupInvite#1",
              (0, _._)(_, _, _),
              _,
              {
                ePrivilege: 1,
                rgBrowserAPISites: ["partner"],
              },
            );
          }
          _.CancelFamilyGroupInvite = _;
          function _(_, _, _) {
            return _.SendMsg(
              "FamilyGroups.GetUsersSharingDevice#1",
              (0, _._)(_, _, _),
              _,
              {
                bConstMethod: !0,
                ePrivilege: 1,
                rgBrowserAPISites: ["partner"],
              },
            );
          }
          _.GetUsersSharingDevice = _;
          function _(_, _, _) {
            return _.SendMsg(
              "FamilyGroups.DeleteFamilyGroup#1",
              (0, _._)(_, _, _),
              _,
              {
                ePrivilege: 1,
                rgBrowserAPISites: ["partner"],
              },
            );
          }
          _.DeleteFamilyGroup = _;
          function _(_, _, _) {
            return _.SendMsg(
              "FamilyGroups.UndeleteFamilyGroup#1",
              (0, _._)(_, _, _),
              _,
              {
                ePrivilege: 1,
                rgBrowserAPISites: ["partner"],
              },
            );
          }
          _.UndeleteFamilyGroup = _;
          function _(_, _, _) {
            return _.SendMsg(
              "FamilyGroups.GetPlaytimeSummary#1",
              (0, _._)(_, _, _),
              _,
              {
                ePrivilege: 1,
                rgBrowserAPISites: ["partner"],
              },
            );
          }
          _.GetPlaytimeSummary = _;
          function _(_, _, _) {
            return _.SendMsg(
              "FamilyGroups.RequestPurchase#1",
              (0, _._)(_, _, _),
              _,
              {
                ePrivilege: 1,
                rgBrowserAPISites: ["partner"],
              },
            );
          }
          _.RequestPurchase = _;
          function _(_, _, _) {
            return _.SendMsg(
              "FamilyGroups.GetPurchaseRequests#1",
              (0, _._)(_, _, _),
              _,
              {
                bConstMethod: !0,
                ePrivilege: 1,
                rgBrowserAPISites: ["partner"],
              },
            );
          }
          _.GetPurchaseRequests = _;
          function _(_, _, _) {
            return _.SendMsg(
              "FamilyGroups.RespondToRequestedPurchase#1",
              (0, _._)(_, _, _),
              _,
              {
                ePrivilege: 1,
                rgBrowserAPISites: ["partner"],
              },
            );
          }
          _.RespondToRequestedPurchase = _;
          function _(_, _, _) {
            return _.SendMsg(
              "FamilyGroups.GetChangeLog#1",
              (0, _._)(_, _, _),
              _,
              {
                bConstMethod: !0,
                ePrivilege: 1,
                rgBrowserAPISites: ["partner"],
              },
            );
          }
          _.GetChangeLog = _;
          function _(_, _, _) {
            return _.SendMsg(
              "FamilyGroups.SetFamilyCooldownOverrides#1",
              (0, _._)(_, _, _),
              _,
              {
                ePrivilege: 5,
              },
            );
          }
          _.SetFamilyCooldownOverrides = _;
          function _(_, _, _) {
            return _.SendMsg(
              "FamilyGroups.GetSharedLibraryApps#1",
              (0, _._)(_, _, _),
              _,
              {
                bConstMethod: !0,
                ePrivilege: 1,
                rgBrowserAPISites: ["partner"],
              },
            );
          }
          _.GetSharedLibraryApps = _;
          function _(_, _, _) {
            return _.SendMsg(
              "FamilyGroups.SetPreferredLender#1",
              (0, _._)(_, _, _),
              _,
              {
                ePrivilege: 1,
              },
            );
          }
          _.SetPreferredLender = _;
          function _(_, _, _) {
            return _.SendMsg(
              "FamilyGroups.GetPreferredLenders#1",
              (0, _._)(_, _, _),
              _,
              {
                bConstMethod: !0,
                ePrivilege: 1,
              },
            );
          }
          _.GetPreferredLenders = _;
          function _(_, _, _) {
            return _.SendMsg(
              "FamilyGroups.ForceAcceptInvite#1",
              (0, _._)(_, _, _),
              _,
              {
                ePrivilege: 5,
              },
            );
          }
          _.ForceAcceptInvite = _;
          function _(_, _, _) {
            return _.SendMsg(
              "FamilyGroups.GetInviteCheckResults#1",
              (0, _._)(_, _, _),
              _,
              {
                bConstMethod: !0,
                ePrivilege: 5,
              },
            );
          }
          _.GetInviteCheckResults = _;
          function _(_, _, _) {
            return _.SendMsg(
              "FamilyGroups.ClearCooldownSkip#1",
              (0, _._)(_, _, _),
              _,
              {
                ePrivilege: 5,
              },
            );
          }
          _.ClearCooldownSkip = _;
          function _(_, _, _) {
            return _.SendMsg(
              "FamilyGroups.RollbackFamilyGroup#1",
              (0, _._)(_, _, _),
              _,
              {
                ePrivilege: 5,
              },
            );
          }
          _.RollbackFamilyGroup = _;
        })(_ || (_ = {}));
        var _;
        ((_) => {
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
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        const _ = (_, _) =>
            _ === void 0
              ? ["get_family_group_for_user ", _]
              : ["get_family_group_for_user ", _, _],
          _ = (_) => ["get_family_group", _],
          _ = (_) => ["get_family_history", _],
          _ = (_) => ["get_users_sharing_device", _],
          _ = (_) => ["get_shopping_cart_contents", _],
          _ = (_) => ["recent_playtime_sessions", _],
          _ = (_) => ["get_playtime_summary", _],
          _ = (_, _) => ["get_invite_check_results", _, _];
        function _(_, _, _) {
          return _
            ? ["get_purchase_requests", _, _, _]
            : _
              ? ["get_purchase_requests", _, _]
              : ["get_purchase_requests", _];
        }
        function _(_, _) {
          if (_ != k_EResultOK) throw _;
        }
        const _ = _.createContext({
          staleTimeMs: 1 / 0,
        });
        function _(_) {
          const { staleTimeMs: _, children: _ } = _,
            _ = React.useMemo(
              () => ({
                staleTimeMs: _ ?? 3e3,
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
        function _(_ = !1) {
          return _(useActiveAccount(), _);
        }
        function _(_, _ = !1) {
          const _ = useActiveServiceTransport(),
            _ = useContext(_).staleTimeMs;
          return useQuery({
            queryKey: _(_, _),
            queryFn: async () => {
              const _ = CProtoBufMsg.Init(
                FGS.CFamilyGroups_GetFamilyGroupForUser_Request,
              );
              _.Body().set_steamid(_),
                _.Body().set_include_family_group_response(_);
              const _ = await FGS.FamilyGroupsService.GetFamilyGroupForUser(
                _,
                _,
              );
              return _(_.GetEResult(), "GetFamilyGroupForUser"), _.Body();
            },
            staleTime: _,
            enabled: !!_,
            placeholderData: _
              ? void 0
              : new FGS.CFamilyGroups_GetFamilyGroupForUser_Response(),
          });
        }
        function _(_) {
          const _ = useActiveServiceTransport(),
            _ = useContext(_).staleTimeMs;
          return useQuery({
            queryKey: _(_),
            queryFn: async () => {
              if (_) {
                const _ = CProtoBufMsg.Init(
                  FGS.CFamilyGroups_GetFamilyGroup_Request,
                );
                _.Body().set_family_groupid(_);
                const _ = await FGS.FamilyGroupsService.GetFamilyGroup(_, _);
                return _(_.GetEResult(), "GetFamilyGroup"), _.Body();
              } else throw k_EResultNoMatch;
            },
            staleTime: _,
          });
        }
        function _() {
          const _ = useActiveServiceTransport(),
            _ = useQueryClient(),
            _ = useActiveAccount();
          return useMutation({
            mutationFn: async (_) => {
              const _ = CProtoBufMsg.Init(
                FGS.CFamilyGroups_CreateFamilyGroup_Request,
              );
              _.Body().set_name(_);
              const _ = await FGS.FamilyGroupsService.CreateFamilyGroup(_, _);
              return _(_.GetEResult(), "CreateFamilyGroup"), _.Body();
            },
            onSuccess: () => {
              _.invalidateQueries({
                queryKey: _(_),
              });
            },
          });
        }
        function _(_) {
          const _ = useActiveServiceTransport(),
            _ = useQueryClient(),
            _ = useActiveAccount();
          return useMutation({
            mutationFn: async () => {
              const _ = CProtoBufMsg.Init(
                FGS.CFamilyGroups_DeleteFamilyGroup_Request,
              );
              _.Body().set_family_groupid(_);
              const _ = await FGS.FamilyGroupsService.DeleteFamilyGroup(_, _);
              return _(_.GetEResult(), "DeleteFamilyGroup"), _.Body();
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
          const _ = useActiveServiceTransport(),
            _ = useQueryClient();
          return useMutation({
            mutationFn: async (_) => {
              const _ = CProtoBufMsg.Init(
                FGS.CFamilyGroups_ModifyFamilyGroupDetails_Request,
              );
              _.Body().set_family_groupid(_), _.Body().set_name(_);
              const _ = await FGS.FamilyGroupsService.ModifyFamilyGroupDetails(
                _,
                _,
              );
              return _(_.GetEResult(), "ModifyFamilyGroupDetails"), _.Body();
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
        function _(_, _, _) {
          const _ = useActiveServiceTransport(),
            _ = useQueryClient();
          return useMutation({
            mutationFn: async () => {
              const _ = CProtoBufMsg.Init(
                FGS.CFamilyGroups_InviteToFamilyGroup_Request,
              );
              _.Body().set_family_groupid(_),
                _.Body().set_receiver_steamid(_),
                _.Body().set_receiver_role(_);
              const _ = await FGS.FamilyGroupsService.InviteToFamilyGroup(_, _);
              return _(_.GetEResult(), "InviteToFamilyGroup"), _.Body();
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
          const _ = useActiveServiceTransport(),
            _ = useActiveAccount(),
            _ = useQueryClient();
          return useMutation({
            mutationFn: async () => {
              const _ = CProtoBufMsg.Init(
                FGS.CFamilyGroups_JoinFamilyGroup_Request,
              );
              _.Body().set_family_groupid(_);
              const _ = await FGS.FamilyGroupsService.JoinFamilyGroup(_, _);
              return _(_.GetEResult(), "JoinFamilyGroup"), _.Body();
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
          const _ = useActiveServiceTransport(),
            _ = useQueryClient();
          return useMutation({
            mutationFn: async () => {
              const _ = CProtoBufMsg.Init(
                FGS.CFamilyGroups_CancelFamilyGroupInvite_Request,
              );
              _.Body().set_family_groupid(_), _.Body().set_steamid_to_cancel(_);
              const _ = await FGS.FamilyGroupsService.CancelFamilyGroupInvite(
                _,
                _,
              );
              return _(_.GetEResult(), "CancelFamilyGroupInvite"), _.Body();
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
          const _ = useActiveServiceTransport(),
            _ = useQueryClient();
          return useMutation({
            mutationFn: async () => {
              const _ = CProtoBufMsg.Init(
                FGS.CFamilyGroups_RemoveFromFamilyGroup_Request,
              );
              _.Body().set_family_groupid(_), _.Body().set_steamid_to_remove(_);
              const _ = await FGS.FamilyGroupsService.RemoveFromFamilyGroup(
                _,
                _,
              );
              return _(_.GetEResult(), "RemoveFromFamilyGroup"), _.Body();
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
          const _ = useActiveServiceTransport();
          return useQuery({
            queryKey: _(_),
            queryFn: async () => {
              const _ = GetCookie("clientsessionid"),
                _ = _ && BigInt("0x" + _).toString(),
                _ = CProtoBufMsg.Init(
                  FGS.CFamilyGroups_GetUsersSharingDevice_Request,
                );
              _.Body().set_family_groupid(_),
                _.Body().set_client_instance_id(_ ?? void 0);
              const _ = await FGS.FamilyGroupsService.GetUsersSharingDevice(
                _,
                _,
              );
              return _(_.GetEResult(), "GetUsersSharingDevice"), _.Body();
            },
          });
        }
        function _(_) {
          const _ = useActiveAccount();
          return _(_)
            .data?.members()
            .find((_) => _.steamid() == _)
            ?.role();
        }
        function _(_, _) {
          const _ = useActiveServiceTransport();
          return useMutation({
            mutationFn: async () => {
              const _ = CProtoBufMsg.Init(
                FGS.CFamilyGroups_RequestPurchase_Request,
              );
              _.Body().set_family_groupid(_),
                _.Body().set_use_account_cart(!0),
                _.Body().set_store_country_code(_);
              const _ = await FGS.FamilyGroupsService.RequestPurchase(_, _);
              return _(_.GetEResult(), "RequestPurchase"), _.Body();
            },
          });
        }
        function _(_, _) {
          const _ = useActiveServiceTransport(),
            _ = useActiveAccount();
          return useQuery({
            queryKey: _(_, _),
            queryFn: async () => {
              const _ = CProtoBufMsg.Init(
                FGS.CFamilyGroups_GetPurchaseRequests_Request,
              );
              _.Body().set_family_groupid(_),
                _ !== void 0 && _.Body().set_rt_include_completed_since(_);
              const _ = await FGS.FamilyGroupsService.GetPurchaseRequests(_, _);
              return _(_.GetEResult(), "GetPurchaseRequests"), _.Body();
            },
          });
        }
        function _(_, _) {
          const _ = useActiveServiceTransport(),
            _ = useActiveAccount();
          return useQuery({
            queryKey: _(_, _, _),
            queryFn: async () => {
              const _ = CProtoBufMsg.Init(
                FGS.CFamilyGroups_GetPurchaseRequests_Request,
              );
              _.Body().set_family_groupid(_), _.Body().add_request_ids(_);
              const _ = await FGS.FamilyGroupsService.GetPurchaseRequests(_, _);
              return _(_.GetEResult(), "GetPurchaseRequests"), _.Body();
            },
            select: (_) =>
              _.toObject().requests?.find(({ request_id: _ }) => _ === _),
          });
        }
        function _(_, _, _) {
          const _ = useActiveServiceTransport(),
            _ = useQueryClient();
          return useMutation({
            mutationFn: async () => {
              const _ = CProtoBufMsg.Init(
                FGS.CFamilyGroups_RespondToRequestedPurchase_Request,
              );
              _.Body().set_family_groupid(_),
                _.Body().set_request_id(_),
                _.Body().set_action(_);
              const _ =
                await FGS.FamilyGroupsService.RespondToRequestedPurchase(_, _);
              return _(_.GetEResult(), "RespondToRequestedPurchase"), _.Body();
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
        function _(_, _) {
          return _;
        }
        var _ = ((_) => (
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
            "k_EFamilyQueryResendInvite"),
          _
        ))(_ || {});
        const _ = {
          [_._]: "#FamilyManagement_ErrorInternalServerError",
          [_._]: "#FamilyManagement_ErrorInternalServerError",
          [_._]: "#FamilyManagement_ErrorInternalServerError",
          [_._]: "#FamilyManagement_ErrorInternalServerError",
          [_._]: "#FamilyManagement_AccessDenied",
          [_._]: "#FamilyManagement_ErrorNoMatch",
          [_._]: "#FamilyManagement_ErrorAccountDisabled",
          [_._]: "#FamilyManagement_ErrorNoActiveInvite",
          [_._]: "#FamilyManagement_PartnerAccountCannotJoinAsChild",
          [_._]: "#FamilyManagement_ErrorFamilySizeLimitExceeded",
          [_._]: "#FamilyManagement_ErrorLimitExceeded",
          [_._]: "#FamilyManagement_ErrorAccountActivityLimitExceeded",
          [_._]: "#FamilyManagement_LimitedAccount_CreateFamily",
          [_._]: {
            5: "#FamilyManagement_RateLimitExceeded_CreateFamily",
          },
          [_._]: {
            5: "#FamilyManagement_RegionLocked_CreateFamily",
            2: "#FamilyManagement_RegionLocked_JoinFamily",
          },
          [_._]: {
            2: "#FamilyManagement_Household_JoinFamily",
          },
          [_._]: {
            5: "#FamilyManagement_ErrorAccountLimitExceeded_CreateFamily",
            2: "#FamilyManagement_ErrorAccountLimitExceeded_JoinFamily",
            8: "#FamilyManagement_ErrorAccountLimitExceeded_RemoveFromFamily",
          },
          [_._]: {
            2: "#FamilyManagement_ErrorDuplicateRequest_JoinFamily",
            4: "#FamilyManagement_ErrorDuplicateRequest_InviteToFamily",
            8: "#FamilyManagement_ErrorDuplicateRequest_RemoveFromFamily",
          },
          [_._]: {
            4: "#FamilyManagement_ErrorFailed_NoAdditionalDetails",
          },
        };
        function _(_, _, _, _) {
          let _ = "";
          if (_ in _) {
            const _ = _[_];
            if (typeof _ == "string") _ = Localize(_, ..._);
            else {
              const _ = _;
              _ in _ && (_ = Localize(_[_], ..._));
            }
          }
          return _(Localize(_, _), _);
        }
        function _() {
          const { setErrorMessage: _ } = useContext(_);
          return {
            setErrorMessage: _,
          };
        }
        function _(_, _, _) {
          const { setErrorMessage: _ } = _(),
            { isError: _, error: _ } = _,
            _ = _();
          useEffect(() => {
            if (_) {
              const _ = _,
                _ = [];
              if (
                _ === k_EResultLimitExceeded ||
                _ === k_EResultAccountActivityLimitExceeded
              ) {
                let _;
                _.isSuccess &&
                  _.data &&
                  (_ = _.data.cooldown_seconds_remaining()),
                  _.push(_(_));
              }
              _(_(_, _, _, _));
            }
          }, [_, _, _, _, _, _.isSuccess, _.data]);
        }
        function _(_) {
          if (!_) return Localize("#FamilyManagement_LoadingPlaceholder");
          const _ = {
            month: "long",
            day: "numeric",
            year: "numeric",
            weekday: void 0,
          };
          return LocalizeDateHumanReadable(Date.now() / 1e3 + _, _);
        }
        function _(_, _) {
          const { setErrorMessage: _ } = _();
          useEffect(() => {
            _.isError && _(Localize(_));
          }, [_, _.isError, _]);
        }
        function _(_) {
          const _ = useActiveServiceTransport();
          return useQuery({
            queryKey: _(_),
            queryFn: async () => {
              const _ = CProtoBufMsg.Init(
                FGS.CFamilyGroups_GetChangeLog_Request,
              );
              _.Body().set_family_groupid(_);
              const _ = await FGS.FamilyGroupsService.GetChangeLog(_, _);
              return (
                _(_.GetEResult(), "GetFamilyGroupChangeLog"), _.Body().changes()
              );
            },
            staleTime: 0,
          });
        }
        function _(_) {
          const _ = useActiveServiceTransport();
          return useQuery({
            queryKey: _(_),
            queryFn: async () => {
              const _ = CProtoBufMsg.Init(CShoppingCart_GetContents_Request);
              _.Body().set_gidshoppingcart(_);
              const _ = await ShoppingCartService.GetShoppingCartContents(_, _);
              return _(_.GetEResult(), "GetShoppingCartContents"), _.Body();
            },
          });
        }
        function _(_) {
          const _ = useActiveServiceTransport(),
            _ = useQueryClient();
          return useMutation({
            mutationFn: async (_) => {
              const _ = CProtoBufMsg.Init(
                FGS.CFamilyGroups_SetFamilyCooldownOverrides_Request,
              );
              _.Body().set_family_groupid(_), _.Body().set_cooldown_count(_);
              const _ =
                await FGS.FamilyGroupsService.SetFamilyCooldownOverrides(_, _);
              return _(_.GetEResult(), "SetFamilyCooldownOverrides"), _.Body();
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
          return `${_._.STORE_BASE_URL}cart/purchaserequest/${_}/${_}`;
        }
        function _(_) {
          return `${Config.STORE_BASE_URL}cart/purchaserequested/${_}`;
        }
        function _(_, _) {
          const _ = useActiveServiceTransport(),
            _ = useQueryClient();
          return useMutation({
            mutationFn: async () => {
              const _ = CProtoBufMsg.Init(
                FGS.CFamilyGroups_CreateFamilyGroup_Request,
              );
              _.Body().set_steamid(_), _.Body().set_name(_);
              const _ = await FGS.FamilyGroupsService.CreateFamilyGroup(_, _);
              return (
                _(_.GetEResult(), "ForceCreateFamilyGroup"),
                _.Body().family_groupid()
              );
            },
            onSuccess: () => {
              _.invalidateQueries({
                queryKey: _(_),
              });
            },
          });
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
          const _ = useActiveAccount(),
            { settings: _, mapAppsAllowed: _ } = useParentalSettings(_).data,
            _ = useIsCurrentUserParentalLocked(),
            _ = useActiveServiceTransport(),
            {
              bIncludeOwn: _,
              bIncludeExcluded: _,
              bIncludeNonGames: _,
              for_account_id: _,
            } = _ ?? {},
            _ = _?.enabled !== void 0 ? _.enabled : !0,
            _ = _(_, _, _, _),
            _ = (_) => !BIsAppBlocked(_.appid(), _, _, _);
          return useQuery({
            queryKey: _,
            queryFn: async () => {
              const _ = CProtoBufMsg.Init(
                FGS.CFamilyGroups_GetSharedLibraryApps_Request,
              );
              if (
                (_.Body().set_family_groupid(_),
                _.Body().set_include_own(_),
                _.Body().set_include_excluded(_),
                _.Body().set_language(Config.LANGUAGE),
                _.Body().set_include_non_games(_),
                _)
              ) {
                const _ = CSteamID.InitFromAccountID(_, Config.EUNIVERSE);
                _.Body().set_steamid(_.ConvertTo64BitString());
              }
              const _ = await FGS.FamilyGroupsService.GetSharedLibraryApps(
                _,
                _,
              );
              return (
                _(_.GetEResult(), "GetSharedLibraryApps"),
                _.Body()
                  .apps()
                  .filter(_)
                  .map((_) => _.toObject())
              );
            },
            enabled: !!_ && _,
            placeholderData: keepPreviousData,
            select: _?.select,
          });
        }
        function _(_, _) {
          const _ = useQueryClient(),
            _ = useActiveAccount(),
            { settings: _ } = useParentalSettings(_).data ?? {},
            _ = useIsCurrentUserParentalLocked(),
            _ = _(_, _, _, _);
          return useCallback(() => {
            _.invalidateQueries({
              queryKey: _,
            });
          }, [_, _]);
        }
        function _(_, _) {
          let _ = _.sort_as || _.name,
            _ = _.sort_as || _.name;
          return stricmp(_, _);
        }
        function _(_, _) {
          return _.rt_time_acquired - _.rt_time_acquired || _(_, _);
        }
        function _(_, _, _) {
          if (!_ && _.length === 0) return !0;
          const _ = _.name?.toLocaleLowerCase(),
            _ = _.toLocaleLowerCase(),
            _ = _?.includes(_) || _.appid?.toString() == _;
          let _ = !0;
          if (_.content_descriptors) {
            for (const _ of _)
              if (!_.content_descriptors.includes(_)) {
                _ = !1;
                break;
              }
          }
          return _ && _;
        }
        function _(_, _, _, _ = []) {
          const _ = useMemo(
              () => _?.filter((_) => _(_, _, _)) || [],
              [_, _, _],
            ),
            _ = useCallback(
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
                    break;
                }
                return _(_, _);
              },
              [_],
            );
          return useMemo(() => _.slice().sort(_), [_, _]);
        }
        function _(_, _) {
          const _ = useActiveServiceTransport(),
            _ = useQueryClient(),
            _ = useActiveAccount();
          return useMutation({
            mutationFn: async (_) => {
              const _ = CProtoBufMsg.Init(
                FGS.CFamilyGroups_ConfirmJoinFamilyGroup_Request,
              );
              _.Body().set_family_groupid(_),
                _.Body().set_invite_id(_),
                _.Body().set_nonce(_);
              const _ = await FGS.FamilyGroupsService.ConfirmJoinFamilyGroup(
                _,
                _,
              );
              return _(_.GetEResult(), "ConfirmJoinFamilyGroup"), _.Body();
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
          const _ = useActiveServiceTransport(),
            _ = useQueryClient();
          return useMutation({
            mutationFn: async () => {
              const _ = CProtoBufMsg.Init(
                FGS.CFamilyGroups_ConfirmInviteToFamilyGroup_Request,
              );
              _.Body().set_family_groupid(_),
                _.Body().set_invite_id(_),
                _.Body().set_nonce(_);
              const _ =
                await FGS.FamilyGroupsService.ConfirmInviteToFamilyGroup(_, _);
              return _(_.GetEResult(), "ConfirmInviteToFamilyGroup"), _.Body();
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
          const _ = useActiveServiceTransport();
          return useMutation({
            mutationFn: async () => {
              const _ = CProtoBufMsg.Init(
                FGS.CFamilyGroups_ResendInvitationToFamilyGroup_Request,
              );
              _.Body().set_family_groupid(_), _.Body().set_steamid(_);
              const _ =
                await FGS.FamilyGroupsService.ResendInvitationToFamilyGroup(
                  _,
                  _,
                );
              return _(_.GetEResult(), "ResendInvitationToFamilyGroup"), _;
            },
          });
        }
        function _(_) {
          let _ = [];
          _.sort((_, _) => _.time_start - _.time_start);
          let _ = new Map();
          for (const _ of _) {
            let _ = _.get(_.appid);
            _ === void 0
              ? _.set(_.appid, _)
              : _.time_start <= _.time_end
                ? (_.time_end = Math.max(_.time_end, _.time_end))
                : (_.push(_), _.set(_.appid, _));
          }
          for (const _ of _.values()) _.push(_);
          return _.sort((_, _) => _.time_start - _.time_start), _;
        }
        function _(_) {
          const _ = useActiveServiceTransport();
          return useQuery({
            queryKey: _(_),
            queryFn: async () => {
              const _ = CProtoBufMsg.Init(
                _.CPlayer_GetRecentPlaytimeSessionsForChild_Request,
              );
              _.Body().set_steamid(_);
              const _ = await _.PlayerService.GetRecentPlaytimeSessionsForChild(
                _,
                _,
              );
              _(_.GetEResult(), "GetRecentPlaytimeSessionsForChild");
              let _ = _.Body().toObject().sessions || [];
              return _(_);
            },
          });
        }
        function _(_) {
          const _ = useActiveServiceTransport();
          return useQuery({
            queryKey: _(_),
            queryFn: async () => {
              const _ = CProtoBufMsg.Init(
                FGS.CFamilyGroups_GetPlaytimeSummary_Request,
              );
              _.Body().set_family_groupid(_);
              const _ = await FGS.FamilyGroupsService.GetPlaytimeSummary(_, _);
              _(_.GetEResult(), "GetPlaytimeSummary");
              let _ = _.Body().toObject().entries ?? [];
              _.sort((_, _) => _.seconds_played - _.seconds_played);
              let _ = _.Body().toObject().entries_by_owner ?? [];
              return (
                _.sort((_, _) => _.seconds_played - _.seconds_played),
                {
                  borrowed: _,
                  loaned: _,
                }
              );
            },
            enabled: _ !== "0",
          });
        }
        function _(_) {
          const _ = useActiveServiceTransport(),
            _ = useActiveAccount(),
            _ = useQueryClient();
          return useMutation({
            mutationFn: async () => {
              const _ = CProtoBufMsg.Init(
                FGS.CFamilyGroups_UndeleteFamilyGroup_Request,
              );
              _.Body().set_family_groupid(_);
              const _ = await FGS.FamilyGroupsService.UndeleteFamilyGroup(_, _);
              return _(_.GetEResult(), "UndeleteFamilyGroup"), _;
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
          const _ = useActiveServiceTransport(),
            _ = useQueryClient();
          return useMutation({
            mutationFn: async () => {
              const _ = CProtoBufMsg.Init(
                FGS.CFamilyGroups_ForceAcceptInvite_Request,
              );
              _.Body().set_family_groupid(_), _.Body().set_steamid(_);
              const _ = await FGS.FamilyGroupsService.ForceAcceptInvite(_, _);
              return _(_.GetEResult(), "ForceAcceptInvite"), null;
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
          const _ = useActiveServiceTransport();
          return useQuery({
            queryKey: _(_, _),
            queryFn: async () => {
              const _ = CProtoBufMsg.Init(
                FGS.CFamilyGroups_GetInviteCheckResults_Request,
              );
              _.Body().set_family_groupid(_), _.Body().set_steamid(_);
              const _ = await FGS.FamilyGroupsService.GetInviteCheckResults(
                _,
                _,
              );
              return (
                _(_.GetEResult(), "GetInviteCheckResults"), _.Body().toObject()
              );
            },
          });
        }
        function _(_, _) {
          return _.members().find((_) => _.steamid() == _);
        }
        var _ = __webpack_require__("chunkid"),
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
                case _._._:
                  return "#Notification_ReportedContentAction_Received";
                case _._._:
                  return "#Notification_ReportedContentAction_Sanctioned";
                case _._._:
                  return "#Notification_ReportedContentAction_Acquitted";
                case _._._:
                  return "#Notification_ReportedContentAction_DisputeReceived";
                case _._._:
                  return "#Notification_ReportedContentAction_DisputeSanctioned";
                case _._._:
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
            url: (_) => _(_.familyid, _.request_id),
          },
          [_._._]: {
            steamidAttribute: "responder_steamid",
            titleLoc: (_) =>
              _.action == _
                ? "#SteamNotifications_FamilyPurchaseRequestResponseDeclinedTitle"
                : "",
            bodyLoc: (_) =>
              _.action == _
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
          const _ = _._.Init(_._);
          _.Body().set_steamid(_.steamid),
            _.Body().set_contextid(_.contextid),
            _.Body().set_appid(parseInt(_.appid)),
            _.Body().set_get_descriptions(!0),
            _.Body().set_language(_._.LANGUAGE);
          let _ = new _._();
          _.add_assetids(_.assetid), _.Body().set_filters(_);
          const _ = await _._.GetInventoryItemsWithDescriptions(_, _);
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
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        function _(_) {
          if (!_) return;
          const _ = typeof _ == "string" ? _ : _.locString,
            _ = typeof _ == "string" ? [] : _.params || [];
          if (_) return _[0] !== "#" ? _ : (0, _._)(_, ..._);
        }
        function _(_, _) {
          return _.useMemo(() => {
            if (_ === void 0) return null;
            let _ = (0, _._)(_);
            const _ = (0, _._)(_);
            if (!_ || !_) return null;
            const _ =
                typeof _.displayNameLoc != "function"
                  ? {
                      locString: _.displayNameLoc,
                    }
                  : _.displayNameLoc(_),
              _ =
                typeof _.titleLoc != "function"
                  ? {
                      locString: _.titleLoc,
                    }
                  : _.titleLoc(_),
              _ =
                typeof _.bodyLoc != "function"
                  ? {
                      locString: _.bodyLoc,
                    }
                  : _.bodyLoc(_),
              _ = typeof _.image != "function" ? _.image : _.image(_),
              _ = typeof _.link != "function" ? _.link : _.link(_);
            return {
              display_name: _(_),
              title: _(_),
              body: _(_),
              image: _,
              link: _,
            };
          }, [_, _]);
        }
        function _(_, _) {
          return _.useMemo(() => {
            const _ = _,
              _ = (0, _._)(_),
              _ = (0, _._)(_);
            if (!_) return null;
            const _ =
                typeof _.titleLoc == "string" ? _.titleLoc : _.titleLoc(_),
              _ = typeof _.bodyLoc == "string" ? _.bodyLoc : _.bodyLoc(_),
              _ = typeof _.url == "string" ? _.url : _.url(_),
              _ =
                typeof _.steamidAttribute == "string"
                  ? _.steamidAttribute
                  : _.steamidAttribute(_),
              _ = _ && _[_];
            return {
              strTitleLoc: _,
              strBodyLoc: _,
              strUrl: _,
              steamid: _,
            };
          }, [_, _]);
        }
        function _(_) {
          return _.useMemo(() => ((0, _._)(_.type) ? (0, _._)(_) : null), [_]);
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
          _ = __webpack_require__._(_);
        const _ = !0;
        function _(_) {
          let {
              onActivate: _,
              icon: _,
              body: _,
              eUIMode: _,
              classNames: _,
            } = _,
            _ = _,
            _ = _().PinnedTemplate;
          return (
            _ == _.ogI
              ? (_ = _().PinnedTemplateDesktop)
              : _ == _.yrU && (_ = _().PinnedTemplateWeb),
            (_ = (0, _._)(_, _)),
            (0, _.jsx)(_._, {
              className: _,
              onActivate: _,
              children: (0, _.jsx)("div", {
                className: _().Content,
                children: (0, _.jsxs)("div", {
                  className: _().PinnedBody,
                  children: [
                    (0, _.jsx)("span", {
                      className: _().Icon,
                      children: _,
                    }),
                    _,
                  ],
                }),
              }),
            })
          );
        }
        function _(_) {
          const {
            count: _,
            icon: _,
            onActivate: _,
            strBody: _,
            bAlwaysShow: _,
            eUIMode: _,
            classNames: _,
            visible: _,
          } = _;
          return !_ && !_
            ? null
            : (0, _.jsx)(_, {
                icon: _,
                body: _,
                onActivate: _,
                eUIMode: _,
                classNames: _,
                visible: _,
              });
        }
        var _ = ((_) => (
          (_[(_.none = 0)] = "none"),
          (_[(_.loadingActive = 1)] = "loadingActive"),
          (_[(_.loadingComplete = 2)] = "loadingComplete"),
          _
        ))(_ || {});
        function _(_) {
          let {
            nUnread: _,
            location: _,
            eUIMode: _,
            bLoading: _,
            footer: _,
            bNewIndicator: _,
          } = _;
          const [_, _] = _.useState(_ ? 1 : 0),
            [_, _] = _.useState(void 0);
          _.useEffect(() => {
            _ == 1 && !_ ? _(2) : _ == 2 && _ && _(1);
          }, [_, _]),
            _.useEffect(() => {
              let _ =
                parseInt(_().loadinganimationiterationcount) *
                parseInt(_().loadinganimationduration) *
                1e3;
              const _ = window.setTimeout(() => _(0), _);
              return () => window.clearTimeout(_);
            }, []),
            _.useEffect(() => {
              _ && _ > 0 && _ !== _().Unread && _ != _.miK && _ != _.PN1
                ? _(_().Unread)
                : !_ && _ == _().Unread && _(_().MarkedRead);
            }, [_, _, _]);
          let _ = _.onActivate;
          _ || (_ = () => console.log("Missing activate function")),
            _ == 1 && (_ = void 0);
          let _ = _().StandardTemplate;
          _ == _.oYe
            ? (_ = _().AllNotificationsTemplate)
            : _ == _.miK
              ? (_ = _().DesktopToastTemplate)
              : (_ == _.ogI || _ == _.yrU) && (_ = _().StandardTemplateDesktop);
          let _ = null;
          if (_ != 0 && _ != _.miK && _ != _.PN1) {
            let _ = _ == 2 ? _().Hide : null;
            _ = (0, _.jsxs)("div", {
              className: (0, _._)(_().LoadingTemplate, _),
              children: [
                (0, _.jsx)("div", {
                  className: (0, _._)(
                    _().StandardLogoDimensions,
                    _().ShimmerLogo,
                  ),
                }),
                (0, _.jsxs)("div", {
                  className: _().Content,
                  children: [
                    (0, _.jsx)("div", {
                      className: (0, _._)(_().Header, _().ShimmerHeader),
                    }),
                    (0, _.jsx)("div", {
                      className: (0, _._)(_().Body, _().ShimmerBody),
                    }),
                  ],
                }),
              ],
            });
          }
          return (0, _.jsxs)(_._, {
            onActivate: _,
            className: _().StandardTemplateContainer,
            onOptionsButton: _.onOptionsButton,
            onOptionsActionDescription: _.onOptionsButtonDesc,
            children: [
              (0, _.jsxs)("div", {
                className: (0, _._)(_, _),
                children: [
                  (0, _.jsx)("div", {
                    className: _().StandardLogoDimensions,
                    children: _.logo,
                  }),
                  _.personaStatus &&
                    (0, _.jsx)("div", {
                      className: (0, _._)(_().AvatarStatus, _.personaStatus),
                    }),
                  (0, _.jsx)("div", {
                    className: _().Content,
                    children: _.children,
                  }),
                  _,
                  _ &&
                    (0, _.jsx)(_, {
                      location: _,
                    }),
                ],
              }),
              _ || null,
            ],
          });
        }
        function _(_) {
          const { location: _ } = _;
          return !_ || _ != _.B3I
            ? null
            : (0, _.jsx)("div", {
                className: _().NewIndicator,
                children: (0, _.jsx)(_.jlt, {}),
              });
        }
        function _(_) {
          let {
            icon: _,
            title: _,
            timestamp: _,
            location: _,
            fnRenderTimestamp: _,
          } = _;
          const _ = !!_ && (_ == _.B3I || _ == _.oYe);
          let _;
          return (
            _ == _.oYe ? (_ = _) : (_ = _ ?? _),
            (0, _.jsxs)("div", {
              className: _().Header,
              children: [
                (0, _.jsx)(_, {
                  icon: _,
                }),
                !!_ &&
                  (0, _.jsx)(_, {
                    title: _,
                  }),
                _ &&
                  _({
                    timestamp: _,
                  }),
              ],
            })
          );
        }
        function _(_) {
          return (0, _.jsxs)(_.Fragment, {
            children: [
              !!_.icon &&
                (0, _.jsx)("div", {
                  className: _().Icon,
                  children: _.icon,
                }),
              " ",
            ],
          });
        }
        function _(_) {
          return (0, _.jsx)("div", {
            className: _().Title,
            children: _.title,
          });
        }
        function _(_) {
          let _ = (0, _._)(
            _().StandardNotificationDescription,
            _.multiline && _().Multiline,
          );
          return (0, _.jsx)("div", {
            className: _,
            children: _.children,
          });
        }
        function _(_) {
          let _ = (0, _._)(
            _().StandardNotificationSubText,
            _.multiline && _().Multiline,
          );
          return (0, _.jsx)("div", {
            className: _,
            children: _.children,
          });
        }
        function _(_) {
          if (_.timestamp === void 0) return null;
          let _ = new Date(),
            _ = new Date(_.timestamp * 1e3),
            _ = (0, _._)(_.timestamp);
          return (
            (0, _._)(_, _) || (_ = (0, _._)(_.timestamp, !1, !1, !1) + " " + _),
            (0, _.jsx)("div", {
              className: _().Timestamp,
              children: _,
            })
          );
        }
        function _(_) {
          if (_.timestamp === void 0) return null;
          let _ = new Date(),
            _ = new Date(_.timestamp * 1e3),
            _ = (0, _._)(_, _)
              ? (0, _._)(_.timestamp)
              : (0, _._)(_.timestamp, !1, !1, !1);
          return (0, _.jsx)("div", {
            className: _().Timestamp,
            children: _,
          });
        }
        function _(_) {
          const { text: _ } = _;
          return jsx("div", {
            className: styles.BottomBar,
            children: _,
          });
        }
        function _(_) {
          let {
              playerName: _,
              nickName: _,
              parenthesizeNickNames: _,
              state: _,
            } = _,
            _ = !!_,
            _ = _ && !_,
            _ = _ ? _ : _,
            _ = _ == "ingame" ? styles.IngameTitle : styles.OnlineTitle;
          return jsxs(Fragment, {
            children: [
              jsx("span", {
                className: classnames(_),
                children: _,
              }),
              _ &&
                _ &&
                jsxs("span", {
                  className: classnames(styles.PlayerNickName, styles.FullName),
                  children: ["(", _, ")"],
                }),
              _ &&
                jsx("span", {
                  className: styles.PlayerNickName,
                  children: " *",
                }),
            ],
          });
        }
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        function _(_) {
          return _ == _.PN1;
        }
        function _(_, _) {
          return _.useCallback(
            (_) => {
              _ && _(_), _ && _();
            },
            [_, _],
          );
        }
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__._(_);
        function _(_) {
          let {
              onActivate: _,
              onDismiss: _,
              logo: _,
              icon: _,
              title: _,
              body: _,
              personaStatus: _,
              className: _,
              singleLineOnly: _,
              fullWidth: _,
            } = _,
            _ = _(_, _),
            _ = (_) => {
              _.button == 1 && _ && _();
            };
          return (0, _.jsxs)(_._, {
            className: (0, _._)(_().ShortTemplate, !_ && _().TwoLine, _),
            onActivate: _,
            onMouseDown: _,
            children: [
              (0, _.jsx)("div", {
                className: _().ShortLogoDimensions,
                children: _,
              }),
              _.personaStatus &&
                (0, _.jsx)("div", {
                  className: (0, _._)(_().AvatarStatus, _),
                }),
              (0, _.jsxs)("div", {
                className: (0, _._)(_().Content, _ && _().FullWidth),
                children: [
                  (0, _.jsxs)("div", {
                    className: _().Header,
                    children: [
                      !!_ &&
                        (0, _.jsx)("div", {
                          className: _().Icon,
                          children: _,
                        }),
                      (0, _.jsx)("div", {
                        className: _().Title,
                        children: _,
                      }),
                    ],
                  }),
                  (0, _.jsx)("div", {
                    className: _().Body,
                    children: _,
                  }),
                ],
              }),
            ],
          });
        }
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__._(_),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        function _(_) {
          switch (_) {
            case _._._:
              return (0, _.jsx)(_.ilR, {});
            case _._._:
              return (0, _.jsx)(_.Cv4, {});
            default:
              return (0, _.jsx)(_.Qte, {});
          }
        }
        function _(_) {
          let {
            fallbackLogo: _,
            data: _,
            location: _,
            icon: _,
            timestamp: _,
            fnRenderTimestamp: _,
            onHide: _,
          } = _;
          const _ = typeof _?.image == "number",
            _ = _
              ? {
                  appid: _.image,
                }
              : void 0,
            { data: _ } = (0, _._)(_),
            { data: _ } = (0, _._)(_),
            _ = _?.display_name ?? "",
            _ = _?.title ?? _?.body,
            _ = _?.title ? _.body : null,
            _ = _(_),
            _ = _ && (!_ || !_),
            [_, _] = _.useState(!1),
            _ = () => _(!0);
          let _ = null;
          if (_) _ = _(_, _, _);
          else {
            const _ = _ ? _().ShortLogoDimensions : _().StandardLogoDimensions;
            _ =
              _?.image && !_
                ? (0, _.jsx)("img", {
                    className: _,
                    src: _.image,
                    onError: _,
                  })
                : _;
          }
          return _
            ? (0, _.jsx)(_, {
                ..._,
                logo: _,
                icon: _,
                title: _,
                body: _,
              })
            : (0, _.jsx)(_, {
                children: (0, _.jsxs)(_, {
                  logo: _,
                  bLoading: _,
                  ..._,
                  children: [
                    (0, _.jsx)(_, {
                      icon: _,
                      title: _,
                      timestamp: _,
                      location: _,
                      fnRenderTimestamp: _,
                    }),
                    (0, _.jsx)(_, {
                      multiline: !_,
                      children: _,
                    }),
                    !!_ &&
                      (0, _.jsx)(_, {
                        children: _,
                      }),
                    _
                      ? (0, _.jsx)(_, {
                          onHide: _,
                        })
                      : null,
                  ],
                }),
              });
        }
        function _(_) {
          let {
            displayName: _,
            location: _,
            icon: _,
            timestamp: _,
            fnRenderTimestamp: _,
            onHide: _,
          } = _;
          const _ = _(_),
            _ = (0, _._)("#SteamNotifications_TradeOffer_Title"),
            _ = _
              ? (0, _._)("#SteamNotifications_TradeOffer_Body_Short", _ ?? "")
              : (0, _._)("#SteamNotifications_TradeOffer_Body"),
            _ = (0, _._)("#SteamNotifications_TradeOffer_Description", _ ?? ""),
            _ = !_;
          return _
            ? (0, _.jsx)(_, {
                ..._,
                logo: _.logo,
                icon: _.icon,
                title: _,
                body: _,
              })
            : (0, _.jsx)(_, {
                children: (0, _.jsxs)(_, {
                  bLoading: _,
                  ..._,
                  children: [
                    (0, _.jsx)(_, {
                      icon: _,
                      title: _,
                      timestamp: _,
                      location: _,
                      fnRenderTimestamp: _,
                    }),
                    (0, _.jsx)(_, {
                      children: _,
                    }),
                    (0, _.jsx)(_, {
                      children: _,
                    }),
                    _
                      ? (0, _.jsx)(_, {
                          onHide: _,
                        })
                      : null,
                  ],
                }),
              });
        }
        const _ = (_) => {
          let {
            location: _,
            icon: _,
            timestamp: _,
            fnRenderTimestamp: _,
            onHide: _,
          } = _;
          const _ = _(_),
            _ = (0, _._)("#SteamNotifications_TradeReversal_Title"),
            _ = _
              ? (0, _._)("#SteamNotifications_TradeReversal_Body_Short")
              : (0, _._)("#SteamNotifications_TradeReversal_Body"),
            _ = (0, _._)("#SteamNotifications_TradeReversal_Description");
          return _
            ? (0, _.jsx)(_, {
                ..._,
                logo: _.logo,
                icon: _.icon,
                title: _,
                body: _,
              })
            : (0, _.jsx)(_, {
                children: (0, _.jsxs)(_, {
                  ..._,
                  children: [
                    (0, _.jsx)(_, {
                      icon: _,
                      title: _,
                      timestamp: _,
                      location: _,
                      fnRenderTimestamp: _,
                    }),
                    (0, _.jsx)(_, {
                      children: _,
                    }),
                    (0, _.jsx)(_, {
                      children: _,
                    }),
                    _
                      ? (0, _.jsx)(_, {
                          onHide: _,
                        })
                      : null,
                  ],
                }),
              });
        };
        function _(_) {
          let {
            senderName: _,
            location: _,
            icon: _,
            timestamp: _,
            fnRenderTimestamp: _,
            onHide: _,
          } = _;
          const _ = _(_),
            _ = _
              ? (0, _._)("#Notification_GiftReceived_Body_Short", _ ?? "")
              : (0, _._)("#Notification_GiftReceived_Body"),
            _ = _
              ? (0, _._)("#Notification_GiftReceived_Description", _)
              : null,
            _ = (0, _._)("#Notification_GiftReceived_Title"),
            _ = !_;
          return _
            ? (0, _.jsx)(_, {
                ..._,
                logo: _.logo,
                icon: _.icon,
                title: _,
                body: _,
              })
            : (0, _.jsx)(_, {
                children: (0, _.jsxs)(_, {
                  bLoading: _,
                  ..._,
                  children: [
                    (0, _.jsx)(_, {
                      icon: _,
                      title: _,
                      timestamp: _,
                      location: _,
                      fnRenderTimestamp: _,
                    }),
                    (0, _.jsx)(_, {
                      multiline: !_,
                      children: _,
                    }),
                    !!_ &&
                      (0, _.jsx)(_, {
                        children: _,
                      }),
                    _
                      ? (0, _.jsx)(_, {
                          onHide: _,
                        })
                      : null,
                  ],
                }),
              });
        }
        function _(_) {
          let {
            requestorName: _,
            requestorAvatarURL: _,
            fallbackLogo: _,
            data: _,
            location: _,
            icon: _,
            timestamp: _,
            fnRenderTimestamp: _,
            onHide: _,
          } = _;
          const _ = _(_);
          let _ = "";
          _ && _.state == _.UXi
            ? (_ = (0, _._)(
                "#SteamNotifications_FriendInvite_Description_AwaitingResponse",
              ))
            : _ && _.state == _._UC
              ? (_ = (0, _._)(
                  "#SteamNotifications_FriendInvite_Description_Friends",
                ))
              : _ &&
                (_ = (0, _._)("#SteamNotifications_FriendInvite_Description"));
          const [_, _] = _.useState(!1),
            _ = () => _(!0);
          let _ = _;
          if (_ && !_) {
            const _ = _.state == _._UC && _ != _.PN1,
              _ = _ ? _().ShortLogoDimensions : _().StandardLogoDimensions;
            _ = (0, _.jsxs)(_._, {
              style: {
                position: "relative",
              },
              children: [
                _ &&
                  (0, _.jsx)(_.GSe, {
                    className: _().FriendIndicator,
                  }),
                (0, _.jsx)("img", {
                  className: _,
                  src: _,
                  onError: _,
                }),
              ],
            });
          }
          const _ =
              _ || (0, _._)("#SteamNotifications_FriendInvite_Body_Generic"),
            _ = !_;
          return _
            ? (0, _.jsx)(_, {
                ..._,
                logo: _,
                icon: _.icon,
                title: (0, _._)("#Notification_FriendInvite_Title"),
                body: _,
              })
            : (0, _.jsx)(_, {
                children: (0, _.jsxs)(_, {
                  logo: _,
                  bLoading: _,
                  ..._,
                  children: [
                    (0, _.jsx)(_, {
                      icon: _,
                      title: (0, _._)("#Notification_FriendInvite_Title"),
                      timestamp: _,
                      location: _,
                      fnRenderTimestamp: _,
                    }),
                    (0, _.jsx)(_, {
                      multiline: !_,
                      children: _,
                    }),
                    !!_ &&
                      (0, _.jsx)(_, {
                        children: _,
                      }),
                    _
                      ? (0, _.jsx)(_, {
                          onHide: _,
                        })
                      : null,
                  ],
                }),
              });
        }
        function _(_) {
          let {
            itemState: _,
            fallbackLogo: _,
            data: _,
            location: _,
            icon: _,
            timestamp: _,
            appName: _,
            fnRenderTimestamp: _,
            nUnread: _,
            onHide: _,
          } = _;
          const [_, _] = _.useState(!1),
            _ = () => _(!0),
            _ = _(_);
          let _ = _;
          if (_?.icon_url && !_) {
            let _ = `${_._.COMMUNITY_CDN_URL}economy/image/${_.icon_url}`,
              _ = _.background_color ? "#" + _.background_color : null;
            const _ = _ ? _().ShortLogoDimensions : _().StandardLogoDimensions;
            _ = (0, _.jsx)(_._, {
              style: {
                position: "relative",
              },
              children: (0, _.jsx)("img", {
                className: _,
                style: {
                  backgroundColor: _ ?? void 0,
                  justifyContent: "center",
                },
                src: _,
                onError: _,
              }),
            });
          }
          const _ = _.appid == 753;
          let _ = null;
          if (_ !== void 0 && _ > 1) {
            const _ = _ - 1;
            _
              ? (_ = (0, _._)("#Notification_Item_RollupMore_Steam", _))
              : _
                ? (_ = (0, _._)("#Notification_Item_RollupMore_GameName", _, _))
                : (_ = (0, _._)("#Notification_Item_RollupMore", _));
          } else
            _ &&
              (_ = _ ? _ : (0, _._)("#Notification_Item_Single_GameName", _));
          const _ = _?.name
              ? _.name
              : (0, _._)("#Notification_Item_Body_Generic"),
            _ = !_;
          if (_) {
            let _ = "";
            return (
              _
                ? (_ =
                    _ > 1
                      ? (0, _._)("#Notification_Item_Body_Short_Plural", _)
                      : (0, _._)("#Notification_Item_Body_Short", _))
                : (_ = (0, _._)("#Notification_Item_Body_Generic")),
              (0, _.jsx)(_, {
                ..._,
                logo: _,
                icon: _.icon,
                title: (0, _._)("#Notification_ItemAnnouncement_Body"),
                body: _,
              })
            );
          }
          return (0, _.jsx)(_, {
            children: (0, _.jsxs)(_, {
              logo: _,
              bLoading: _,
              ..._,
              children: [
                (0, _.jsx)(_, {
                  icon: _,
                  title: (0, _._)("#Notification_ItemAnnouncement_TitleLong"),
                  timestamp: _,
                  location: _,
                  fnRenderTimestamp: _,
                }),
                (0, _.jsx)(_, {
                  multiline: !_,
                  children: _,
                }),
                !!_ &&
                  (0, _.jsx)(_, {
                    children: _,
                  }),
                _
                  ? (0, _.jsx)(_, {
                      onHide: _,
                    })
                  : null,
              ],
            }),
          });
        }
        function _(_) {
          let {
            fallbackLogo: _,
            data: _,
            location: _,
            icon: _,
            timestamp: _,
            fnRenderTimestamp: _,
            onHide: _,
          } = _;
          const _ = _(_),
            _ = _.appid
              ? {
                  appid: _.appid,
                }
              : void 0,
            { data: _ } = (0, _._)(_),
            { data: _ } = (0, _._)(_),
            _ = _(_, _, _),
            _ = _ && (!_ || !_);
          let _ = "";
          return (
            _.state == _._
              ? (_ =
                  _ && _?.name
                    ? (0, _._)(
                        "#SteamNotification_AsyncGame_Action_Short",
                        _.name,
                      )
                    : (0, _._)("#SteamNotification_AsyncGame_Action"))
              : _.state == _._ &&
                (_ =
                  _ && _?.name
                    ? (0, _._)(
                        "#SteamNotification_AsyncGame_Done_Short",
                        _.name,
                      )
                    : (0, _._)("#SteamNotification_AsyncGame_Done")),
            _
              ? (0, _.jsx)(_, {
                  ..._,
                  logo: _,
                  icon: _.icon,
                  title: (0, _._)("#SteamNotification_AsyncGame_Title"),
                  body: _,
                })
              : (0, _.jsx)(_, {
                  children: (0, _.jsxs)(_, {
                    logo: _,
                    bLoading: _,
                    ..._,
                    children: [
                      (0, _.jsx)(_, {
                        icon: _,
                        title: (0, _._)("#SteamNotification_AsyncGame_Title"),
                        timestamp: _,
                        location: _,
                        fnRenderTimestamp: _,
                      }),
                      (0, _.jsx)(_, {
                        children: _,
                      }),
                      (0, _.jsx)(_, {
                        children: _?.name,
                      }),
                      _
                        ? (0, _.jsx)(_, {
                            onHide: _,
                          })
                        : null,
                    ],
                  }),
                })
          );
        }
        function _(_) {
          const {
              title: _,
              body: _,
              logoUrl: _,
              bDataLoading: _,
              icon: _,
              onHide: _,
              location: _,
              timestamp: _,
              fnRenderTimestamp: _,
              onActivate: _,
              personaStatus: _,
            } = _,
            _ = _(_),
            _ = _ ? _().ShortLogoDimensions : _().StandardLogoDimensions,
            _ = (0, _.jsx)(_._, {
              style: {
                position: "relative",
              },
              children: (0, _.jsx)("img", {
                className: _,
                style: {
                  justifyContent: "center",
                },
                src: _,
              }),
            });
          return _
            ? (0, _.jsx)(_, {
                logo: _,
                icon: _.icon,
                title: _,
                body: _,
                onActivate: _,
                personaStatus: _,
              })
            : (0, _.jsx)(_, {
                children: (0, _.jsxs)(_, {
                  logo: _,
                  bLoading: _,
                  onActivate: _,
                  personaStatus: _,
                  ..._,
                  children: [
                    (0, _.jsx)(_, {
                      icon: _,
                      title: _,
                      timestamp: _,
                      location: _,
                      fnRenderTimestamp: _,
                    }),
                    (0, _.jsx)(_, {
                      multiline: !0,
                      children: _,
                    }),
                    _
                      ? (0, _.jsx)(_, {
                          onHide: _,
                        })
                      : null,
                  ],
                }),
              });
        }
        function _(_) {
          let {
              currentUserSteamID: _,
              fallbackLogo: _,
              postedByDisplayName: _,
              postedByAvatarURL: _,
              ownerDisplayName: _,
              data: _,
              location: _,
              icon: _,
              timestamp: _,
              fnRenderTimestamp: _,
              nUnread: _,
              appName: _,
              onHide: _,
              commentTitle: _,
              commentBody: _,
            } = _,
            _ = _;
          const _ = _(_),
            [_, _] = _.useState(!1),
            _ = () => _(!0),
            [_, _] = (0, _._)(
              _.bclan_account ? _.owner_steam_id?.GetAccountID() : void 0,
            ),
            _ = (0, _._)(_) ? _ : null,
            _ = (0, _._)(_) ? _ : null;
          _.comment_type == _._
            ? _.owner_steam_id?.ConvertTo64BitString() == _
              ? _ == _.oYe && _
                ? (_ = (0, _._)(
                    "#SteamNotifications_Comment_Your_Profile_By",
                    _,
                  ))
                : (_ = (0, _._)("#SteamNotifications_Comment_Your_Profile"))
              : _
                ? _ == _.oYe && _
                  ? (_ = (0, _._)(
                      "#SteamNotifications_Comment_Player_Profile_By",
                      _,
                      _,
                    ))
                  : (_ = (0, _._)(
                      "#SteamNotifications_Comment_Player_Profile",
                      _,
                    ))
                : (_ = (0, _._)("#SteamNotifications_Comment_Profile"))
            : _.comment_type == _._ && _.json_data?.file_type == _.pmA
              ? _.owner_steam_id?.ConvertTo64BitString() == _
                ? _
                  ? (_ = (0, _._)(
                      "#SteamNotifications_Comment_Your_Screenshot_Game",
                      _,
                    ))
                  : (_ = (0, _._)(
                      "#SteamNotifications_Comment_Your_Screenshot",
                    ))
                : _
                  ? (_ = (0, _._)(
                      "#SteamNotifications_Comment_Screenshot_Game",
                      _,
                    ))
                  : (_ = (0, _._)("#SteamNotifications_Comment_Screenshot"))
              : !_ && _.json_data?.title && (_ = _.json_data.title);
          let _ = null;
          _.brate_limited
            ? _.comment_type == _._ && _.bis_forum && _
              ? (_ = (0, _._)(
                  "#SteamNotifications_Comment_RateLimited_Forum",
                  _,
                ))
              : (_ = (0, _._)("#SteamNotifications_Comment_RateLimited"))
            : _.comment_type == _._ && _.bis_forum && _
              ? (_ = (0, _.jsx)(_, {
                  children: (0, _._)(
                    "#SteamNotifications_Comment_NewDiscussion",
                    _,
                  ),
                }))
              : (_ = (0, _.jsxs)(_, {
                  children: ['"', _, '"'],
                }));
          let _ = (0, _._)("#SteamNotifications_Comment"),
            _ = null;
          if (_ !== void 0 && _ > 1) {
            const _ = "+" + (_ - 1);
            _ == _.oYe
              ? (_ = (0, _.jsx)("div", {
                  className: _().AllNotificationsCommentPlus,
                  children: _,
                }))
              : (_ = _ + " " + _);
          }
          let _ = _;
          if (!_) {
            const _ = _ ? _().ShortLogoDimensions : _().StandardLogoDimensions;
            if (_ && (0, _._)(_)) {
              const _ = _.bhas_friend && _ != _.PN1;
              _ = (0, _.jsxs)("div", {
                style: {
                  position: "relative",
                },
                children: [
                  _ &&
                    (0, _.jsx)(_.GSe, {
                      className: _().FriendIndicator,
                    }),
                  (0, _.jsx)("img", {
                    className: _,
                    src: _,
                    onError: _,
                  }),
                ],
              });
            } else
              _?.avatar_medium_url &&
                (_ = (0, _.jsx)("img", {
                  className: _,
                  src: _.avatar_medium_url,
                  onError: _,
                }));
          }
          return _
            ? (0, _.jsx)(_, {
                ..._,
                logo: _,
                icon: _.icon,
                title: _,
                body: _,
              })
            : (0, _.jsx)(_, {
                children: (0, _.jsxs)(_, {
                  logo: _,
                  ..._,
                  children: [
                    (0, _.jsx)(_, {
                      icon: _,
                      title: _,
                      timestamp: _,
                      location: _,
                      fnRenderTimestamp: _,
                    }),
                    (0, _.jsx)(_, {
                      children: _,
                    }),
                    _,
                    _,
                    _
                      ? (0, _.jsx)(_, {
                          onHide: _,
                        })
                      : null,
                  ],
                }),
              });
        }
        function _(_) {
          let {
            fallbackLogo: _,
            data: _,
            location: _,
            icon: _,
            timestamp: _,
            fnRenderTimestamp: _,
            onHide: _,
          } = _;
          const _ = _(_),
            _ = _.appid
              ? {
                  appid: _.appid,
                }
              : void 0,
            { data: _ } = (0, _._)(_),
            { data: _ } = (0, _._)(_),
            { data: _ } = (0, _._)(_),
            _ = _(_, _, _),
            _ = _ && (!_ || !_ || !_);
          let _ = "",
            _ = null;
          if (_) {
            const _ = _.name ?? "";
            (_ = _),
              _.count == 1
                ? _
                  ? (_ = (0, _._)(
                      "#SteamNotifications_Wishlist_OnSale_Single_Short",
                      (0, _.jsx)("span", {
                        children: _,
                      }),
                      (0, _.jsx)("span", {
                        style: {
                          color: "#FFFFFF",
                        },
                        children: _?.formatted_final_price,
                      }),
                    ))
                  : (_ = (0, _._)(
                      "#SteamNotifications_Wishlist_OnSale_Single",
                      (0, _.jsx)("span", {
                        style: {
                          color: "#FFFFFF",
                        },
                        children: _?.formatted_final_price,
                      }),
                    ))
                : _.count == 2
                  ? _
                    ? (_ = (0, _._)(
                        "#SteamNotifications_Wishlist_OnSale_PlusOne_Short",
                        _,
                      ))
                    : (_ = (0, _._)(
                        "#SteamNotifications_Wishlist_OnSale_PlusOne",
                      ))
                  : _
                    ? (_ = (0, _._)(
                        "#SteamNotifications_Wishlist_OnSale_PlusMany_Short",
                        _,
                        _.count - 1,
                      ))
                    : (_ = (0, _._)(
                        "#SteamNotifications_Wishlist_OnSale_PlusMany",
                        _.count - 1,
                      ));
          } else _ = (0, _._)("#SteamNotifications_Wishlist_Generic");
          return _
            ? (0, _.jsx)(_, {
                ..._,
                logo: _,
                icon: _.icon,
                title: (0, _._)("#SteamNotifications_Wishlist"),
                body: _,
              })
            : (0, _.jsx)(_, {
                children: (0, _.jsxs)(_, {
                  logo: _,
                  bLoading: _,
                  ..._,
                  children: [
                    (0, _.jsx)(_, {
                      icon: _,
                      title: (0, _._)("#SteamNotifications_Wishlist"),
                      timestamp: _,
                      location: _,
                      fnRenderTimestamp: _,
                    }),
                    (0, _.jsx)(_, {
                      multiline: !_,
                      children: _,
                    }),
                    !!_ &&
                      (0, _.jsx)(_, {
                        children: _,
                      }),
                    _
                      ? (0, _.jsx)(_, {
                          onHide: _,
                        })
                      : null,
                  ],
                }),
              });
        }
        function _(_, _, _ = !1) {
          const [_, _] = _.useState(!1),
            _ = () => _(!0);
          if (!_ || _)
            return (0, _.jsx)(_._, {
              style: {
                position: "relative",
              },
              children: _,
            });
          const _ = (0, _._)(_, "community_icon");
          return _
            ? (0, _.jsx)(_._, {
                style: {
                  position: "relative",
                },
                children: (0, _.jsx)("img", {
                  src: _,
                  className: _().ShortLogoDimensions,
                  onError: _,
                }),
              })
            : (0, _.jsxs)(_._, {
                style: {
                  position: "relative",
                },
                children: [
                  (0, _.jsx)("img", {
                    className: (0, _._)(_().WishlistBlurImage),
                    src: _,
                    onError: _,
                  }),
                  (0, _.jsx)("img", {
                    src: _,
                    onError: _,
                    style: {
                      position: "absolute",
                      left: 7,
                      top: 7,
                      height: 32,
                      width: 32,
                    },
                  }),
                ],
              });
        }
        function _(_) {
          const _ = (_) => {
              _.stopPropagation(), _.preventDefault();
            },
            _ = (_) => {
              _.onHide(), _.stopPropagation(), _.preventDefault();
            };
          return (0, _.jsx)("div", {
            className: _().HideButton,
            onClick: _,
            onMouseDown: _,
            children: (0, _.jsx)(_.zHo, {}),
          });
        }
        function _(_) {
          return (0, _.jsx)("div", {
            className: _().SteamNotificationWrapper,
            children: _.children,
          });
        }
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        let _ = null,
          _ = !1;
        function _() {
          return (
            _ ||
              (_ = new _._({
                BIsFriend: (0, _._)(),
              })),
            _
          );
        }
        function _() {
          const _ = (0, _._)(),
            _ = (0, _._)(),
            _ = (0, _._)(() => _().m_bInitialized);
          return (
            !_ &&
              !_ &&
              ((_ = !0), _.Init(_._.accountid, _, _).finally(() => (_ = !1))),
            [_, _]
          );
        }
        function _(_) {
          let _ = null;
          return (
            (0, _._)(_) ? (_ = _) : (0, _._)(_) ? (_ = _) : _[_] && (_ = _[_]),
            _
          );
        }
        function _(_) {
          const { rollup: _, uimode: _, location: _ } = _,
            _ = _(_.type);
          return _
            ? (0, _.jsx)(_._, {
                controller: "notification",
                method: (0, _.fLp)(_),
                submethod: (0, _.ey3)(_),
                children: (0, _.jsx)(_, {
                  ..._,
                }),
              })
            : null;
        }
        function _(_) {
          const {
              rollup: _,
              onNotificationClick: _,
              location: _,
              uimode: _,
              onHide: _,
            } = _,
            _ = _(_.item.notification_type, _.item.body_data),
            _ = (0, _._)(_.type)
              .replace("k_ESteamNotificationType_", "")
              ?.toLowerCase(),
            _ = (0, _._)(_?.link ?? "#", _),
            _ = () =>
              _(() => {
                _?.link && _ && window.location.assign(_);
              }, _.item),
            _ = (_) => _(() => {}, _.item, _);
          return (0, _.jsx)("a", {
            href: _?.link ? _ : "#",
            onMouseDown: _,
            children: (0, _.jsx)(_, {
              icon: _(_.type),
              onActivate: _,
              fallbackLogo: (0, _.jsx)(_.Qte, {}),
              location: _,
              eUIMode: _,
              data: _,
              timestamp: _.timestamp,
              nUnread: _.rgunread.length,
              bNewIndicator: (0, _._)(_.item),
              onHide: _,
            }),
          });
        }
        function _(_) {
          const {
              rollup: _,
              onNotificationClick: _,
              location: _,
              uimode: _,
              onHide: _,
            } = _,
            _ = `${_._.COMMUNITY_BASE_URL}my/gamenotifications/`,
            _ = () => _(() => window.location.assign(_), _.item),
            _ = (_) => _(() => {}, _.item, _),
            _ = _(_);
          return (0, _.jsx)("a", {
            href: _,
            onMouseDown: _,
            children: (0, _.jsx)(_, {
              icon: (0, _.jsx)(_.Qte, {}),
              fallbackLogo: (0, _.jsx)(_.wC1, {}),
              onActivate: _,
              location: _,
              eUIMode: _,
              data: _,
              timestamp: _.timestamp,
              nUnread: _.rgunread.length,
              bNewIndicator: (0, _._)(_.item),
              onHide: _,
            }),
          });
        }
        function _(_) {
          const {
              steamid: _,
              url: _,
              strTitleLoc: _,
              strBodyLoc: _,
              rollup: _,
              onNotificationClick: _,
              location: _,
              uimode: _,
              onHide: _,
            } = _,
            { data: _ } = (0, _._)(_),
            _ = (_) => _(() => {}, _.item, _),
            _ = () => _(() => window.location.assign(_), _.item);
          if (!_) return null;
          const _ = !_,
            _ = (0, _._)(_, _?.m_strPlayerName ?? ""),
            _ = (0, _._)(_, _?.m_strPlayerName ?? "");
          return (0, _.jsx)("a", {
            href: _,
            onMouseDown: _,
            children: (0, _.jsx)(_, {
              title: _,
              body: _,
              bDataLoading: _,
              logoUrl: _?.avatar_url_medium,
              icon: (0, _.jsx)(_.Qte, {}),
              onActivate: _,
              location: _,
              eUIMode: _,
              timestamp: _.timestamp,
              nUnread: _.rgunread.length,
              bNewIndicator: (0, _._)(_.item),
              onHide: _,
            }),
          });
        }
        function _(_) {
          const _ = _(_.rollup.type, _.rollup.item.body_data);
          if (!_) return null;
          const { strTitleLoc: _, strBodyLoc: _, strUrl: _, steamid: _ } = _;
          return !_ || !_ || !_
            ? null
            : (0, _.jsx)(_, {
                steamid: _,
                url: _,
                strTitleLoc: _,
                strBodyLoc: _,
                ..._,
              });
        }
        function _(_) {
          const {
              rollup: _,
              onNotificationClick: _,
              location: _,
              uimode: _,
              onHide: _,
            } = _,
            _ = (0, _._)(),
            _ = _(_),
            _ = `${_._.COMMUNITY_BASE_URL}profiles/${_}/tradeoffers`,
            _ = () => _(() => window.location.assign(_), _.item),
            _ = (_) => _(() => {}, _.item, _),
            _ = _._.InitFromAccountID(_),
            { data: _ } = (0, _._)(_.GetAccountID());
          return (0, _.jsx)("a", {
            href: _,
            onMouseDown: _,
            children: (0, _.jsx)(_, {
              logo: (0, _.jsx)(_.Qte, {}),
              icon: (0, _.jsx)(_.h20, {}),
              onActivate: _,
              location: _,
              eUIMode: _,
              timestamp: _.timestamp,
              nUnread: _.rgunread.length,
              displayName: _?.m_strPlayerName,
              bNewIndicator: (0, _._)(_.item),
              onHide: _,
            }),
          });
        }
        const _ = (_) => {
          const {
              rollup: _,
              onNotificationClick: _,
              location: _,
              uimode: _,
              onHide: _,
            } = _,
            _ = `${_._.COMMUNITY_BASE_URL}my/tradehistory`,
            _ = () => _(() => window.location.assign(_), _.item),
            _ = (_) => _(() => {}, _.item, _);
          return (0, _.jsx)("a", {
            href: _,
            onMouseDown: _,
            children: (0, _.jsx)(_, {
              logo: (0, _.jsx)(_.Qte, {}),
              icon: (0, _.jsx)(_.h20, {}),
              onActivate: _,
              location: _,
              eUIMode: _,
              timestamp: _.timestamp,
              nUnread: _.rgunread.length,
              bNewIndicator: (0, _._)(_.item),
              onHide: _,
            }),
          });
        };
        function _(_) {
          const {
              rollup: _,
              onNotificationClick: _,
              location: _,
              uimode: _,
              onHide: _,
            } = _,
            _ = (0, _._)(),
            _ = `${_._.COMMUNITY_BASE_URL}profiles/${_}/inventory/#pending_gifts`,
            _ = () => _(() => window.location.assign(_), _.item),
            _ = (_) => _(() => {}, _.item, _),
            _ = _(_),
            _ = _._.InitFromAccountID(_),
            { data: _ } = (0, _._)(_.GetAccountID());
          return (0, _.jsx)("a", {
            href: _,
            onMouseDown: _,
            children: (0, _.jsx)(_, {
              logo: (0, _.jsx)(_.Qte, {}),
              icon: (0, _.jsx)(_._, {}),
              onActivate: _,
              location: _,
              eUIMode: _,
              timestamp: _.timestamp,
              nUnread: _.rgunread.length,
              senderName: _?.m_strPlayerName,
              bNewIndicator: (0, _._)(_.item),
              onHide: _,
            }),
          });
        }
        function _(_) {
          const {
              rollup: _,
              onNotificationClick: _,
              location: _,
              uimode: _,
              onHide: _,
            } = _,
            _ = _(_),
            { data: _ } = (0, _._)(_.responder_steamid),
            _ =
              _.package_id > 0
                ? {
                    packageid: _.package_id,
                  }
                : {
                    bundleid: _.bundle_id,
                  },
            { data: _ } = (0, _._)(_),
            _ = _ ? `app/${_.appid}` : "",
            _ = `${_._.STORE_BASE_URL}${_}`,
            _ = () => _(() => window.location.assign(_), _.item),
            _ = (_) => _(() => {}, _.item, _),
            _ = !_ || !_,
            _ = (0, _._)("#SteamNotifications_RequestedGameAddedTitle"),
            _ = _
              ? (0, _._)(
                  "#SteamNotifications_RequestedGameAddedBody",
                  _.name ?? "",
                )
              : "";
          return (0, _.jsx)("a", {
            href: _,
            onMouseDown: _,
            children: (0, _.jsx)(_, {
              title: _,
              body: _,
              bDataLoading: _,
              logoUrl: _?.avatar_url_medium,
              icon: (0, _.jsx)(_.Qte, {}),
              onActivate: _,
              location: _,
              eUIMode: _,
              timestamp: _.timestamp,
              nUnread: _.rgunread.length,
              bNewIndicator: (0, _._)(_.item),
              onHide: _,
            }),
          });
        }
        function _(_) {
          const {
              rollup: _,
              onNotificationClick: _,
              location: _,
              uimode: _,
              onHide: _,
            } = _,
            _ = (0, _._)(),
            _ = (0, _._)(),
            _ = (0, _._)(_.item, _, _),
            _ = _(_),
            { data: _ } = (0, _._)(
              _?.appid
                ? {
                    appid: _.appid,
                  }
                : void 0,
            ),
            _ = `${_._.COMMUNITY_BASE_URL}profiles/${_}/inventory`,
            _ = () => _(() => window.location.assign(_), _.item),
            _ = (_) => _(() => {}, _.item, _);
          return (0, _.jsx)("a", {
            href: _,
            onMouseDown: _,
            children: (0, _.jsx)(_, {
              appName: _?.name,
              icon: (0, _.jsx)(_.rI_, {}),
              fallbackLogo: (0, _.jsx)(_.Qte, {}),
              onActivate: _,
              location: _,
              eUIMode: _,
              data: _,
              timestamp: _.timestamp,
              nUnread: _.rgunread.length,
              itemState: _,
              bNewIndicator: (0, _._)(_.item),
              onHide: _,
            }),
          });
        }
        function _(_) {
          const {
              rollup: _,
              onNotificationClick: _,
              location: _,
              uimode: _,
              onHide: _,
            } = _,
            _ = (0, _._)(),
            _ = `${_._.COMMUNITY_BASE_URL}profiles/${_}/friends/pending`,
            _ = () => _(() => window.location.assign(_), _.item),
            _ = (_) => _(() => {}, _.item, _),
            _ = _(_),
            { data: _ } = (0, _._)(_.requestorID);
          return (0, _.jsx)("a", {
            href: _,
            onMouseDown: _,
            children: (0, _.jsx)(_, {
              fallbackLogo: (0, _.jsx)(_.Gv$, {}),
              icon: (0, _.jsx)(_.sdo, {}),
              onActivate: _,
              location: _,
              eUIMode: _,
              data: _,
              timestamp: _.timestamp,
              nUnread: _.rgunread.length,
              requestorAvatarURL: _?.avatar_url_medium,
              requestorName: _?.m_strPlayerName,
              bNewIndicator: (0, _._)(_.item),
              onHide: _,
            }),
          });
        }
        function _(_) {
          const {
              rollup: _,
              onNotificationClick: _,
              location: _,
              uimode: _,
              onHide: _,
            } = _,
            _ = _(_),
            _ = (0, _._)(),
            _ = _._.COMMUNITY_BASE_URL + _.url,
            _ = () => _(() => window.location.assign(_), _.item),
            _ = (_) => {
              _(() => {}, _.item, _);
            },
            _ = (0, _._)(_) ? _?.account_steam_id?.GetAccountID() : null,
            { data: _ } = (0, _._)(_),
            _ = (0, _._)(_) ? _?.owner_steam_id?.GetAccountID() : null,
            { data: _ } = (0, _._)(_),
            _ = _.json_data?.app_id
              ? {
                  appid: _.json_data?.app_id,
                }
              : void 0,
            { data: _ } = (0, _._)(_),
            [_, _] = _(),
            _ = _
              ? _.FilterText(_.account_steam_id.GetAccountID(), _.title)
              : "",
            _ = _
              ? _.FilterText(_.account_steam_id.GetAccountID(), _.comment)
              : "";
          return (0, _.jsx)("a", {
            href: _,
            onMouseDown: _,
            children: (0, _.jsx)(_, {
              fallbackLogo: (0, _.jsx)(_.Qte, {}),
              icon: (0, _.jsx)(_.MwB, {}),
              onActivate: _,
              location: _,
              currentUserSteamID: _,
              eUIMode: _,
              data: _,
              timestamp: _.timestamp,
              nUnread: _.rgunread.length,
              postedByAvatarURL: _?.avatar_url_medium,
              postedByDisplayName: _?.m_strPlayerName,
              ownerDisplayName: _?.m_strPlayerName,
              bNewIndicator: (0, _._)(_.item),
              appName: _?.name,
              onHide: _,
              commentTitle: _,
              commentBody: _,
              bLoading: !_,
            }),
          });
        }
        function _(_) {
          const {
              rollup: _,
              onNotificationClick: _,
              location: _,
              uimode: _,
              onHide: _,
            } = _,
            _ = _(_),
            { data: _ } = (0, _._)({
              appid: _.appid,
            }),
            [_, _] = (0, _.useState)(""),
            _ = (0, _._)();
          (0, _.useEffect)(() => {
            if (_.count > 1 && _.appids?.length)
              return _(
                _._.STORE_BASE_URL +
                  `wishlist/profiles/${_}/?wng=${_.appids.toString()}#sort=discount`,
              );
            if (_) return _(_._.STORE_BASE_URL + _.store_url_path);
            const _ = _.appid ? `?appid=${_.appid}` : "";
            _(_._.STORE_BASE_URL + `wishlist/profiles/${_}/${_}#sort=discount`);
          }, [_, _, _]);
          const _ = () => _(() => window.location.assign(_), _.item),
            _ = (_) => _(() => {}, _.item, _);
          return (0, _.jsx)("a", {
            href: _,
            onMouseDown: _,
            children: (0, _.jsx)(_, {
              fallbackLogo: (0, _.jsx)(_.Qte, {}),
              icon: (0, _.jsx)(_.ilR, {}),
              onActivate: _,
              location: _,
              data: _,
              timestamp: _.timestamp,
              nUnread: _.rgunread.length,
              eUIMode: _,
              bNewIndicator: (0, _._)(_.item),
              onHide: _,
            }),
          });
        }
        function _(_) {
          const { url: _, count: _, icon: _, strBody: _, eFeature: _ } = _,
            _ = (0, _._)(_);
          return !_ || _
            ? null
            : (0, _.jsx)("a", {
                href: _,
                className: _().WebPinnedNotification,
                children: (0, _.jsx)(_, {
                  icon: (0, _.jsx)(_, {}),
                  count: _,
                  onActivate: () => window.location.assign(_),
                  strBody: _,
                  eUIMode: _.yrU,
                  visible: !0,
                }),
              });
        }
        const _ = {
          [_._._]: _,
          [_._._]: _,
          [_._._]: _,
          [_._._]: _,
          [_._._]: _,
          [_._._]: _,
          [_._._]: _,
          [_._._]: _,
          [_._._]: _,
        };
      },
      chunkid: (module) => {
        module.exports = {
          "duration-app-launch": "800ms",
          loadinganimationiterationcount: "20",
          loadinganimationduration: "1s",
          StandardTemplateContainer: "_2yhmcyeUOyM8lt__Skbk9O",
          "ItemFocusAnim-darkerGrey": "_3mfiE_PUWOPy8UTDJlYI0u",
          Timestamp: "_26rvbcKFCQjLKx-pD7BhvY",
          StandardTemplate: "_3-H47wPl1Ng3lh7xGZOPIg",
          PinnedTemplate: "_3V6804k2yutEiF6IWg8axH",
          StandardLogoDimensions: "_1KIwOtwkYQUtRoPyxlh3G-",
          Content: "_2axKS7MCnzMBRXRcYLn2Is",
          Header: "_1WuK_iZ6ARkIiptCX5qd7G",
          Icon: "_2F0wqsu2mqsHxBSJcu1sPJ",
          Title: "_18PwvOcpWfW3M8j2-bEPPJ",
          StandardNotificationDescription: "_3fUrGm-WHq3qxIpSqRZDgc",
          StandardNotificationSubText: "_2yUEtF_eCucoxdu85zlOCp",
          Multiline: "_2sQoMK-0onl8u8WHHUnDdw",
          Count: "_2zZKXEnYcEZsL5OGHzkKv2",
          PinnedBody: "_1nziGc41LlyGfDufK0iQos",
          AllNotificationsTemplate: "_1xvIUtLkTrdEk2Ob1MqFcQ",
          StandardTemplateDesktop: "_1GcAugE5c4nbBUwrA4_xwS",
          DesktopToastTemplate: "_3ENh9LzRnZgfTyfxp_J2rr",
          PinnedTemplateWeb: "_2Mo87NUHyjLkjvKcPQxPRu",
          PinnedTemplateDesktop: "j9jQA6QaLJ23lyfuo9nY6",
          AppLogo: "_3mWpfn1_PDwd1gOm26RhMl",
          AppLogoBackgroundImage: "_2FcBwxd4lGOEMTXCnmxczK",
          MarkedRead: "_15_E6efeCt2NTqCgUKav1W",
          markReadBackground: "_1paPuAH6aCXNKdXvf5jv1d",
          Unread: "_1YAQHDHv4hsPaauccvAFtn",
          PlayerNickName: "_2n0ipWJFroZdQVwkXHqdJL",
          FullName: "_2EWNcLrlrl9Gx-yZH039tH",
          IngameTitle: "_3uSbhtY3vHtdj-3tpua_Pb",
          OnlineTitle: "_3bqD-bBMgrGwLsBY2L1gSL",
          GroupMessageTitle: "_3C8GdaaS-zmchnCHHiHG6n",
          GroupMessageUserName: "_2hs2ZR_wYkRHWdtlr681Z6",
          GroupMessageBody: "_3AbCrY-d5NpL5E5DUfgdQ8",
          GroupMessageIcon: "_3vDmqJBvNPH1D_p-Da_djj",
          Body: "_2jpxEWvo06efD6-NR1cplA",
          FriendInGameAppColor: "_2XSwzNWGiJvW0zTgqT0DUI",
          WishlistBlurImage: "_2HBcq6niThHlNihI9xiBSm",
          AvatarStatus: "_1mMC7Hv71CzO0jfm_66W4K",
          IncomingCallToast: "_3wNcsYlo3lQ-yamJPMco8F",
          ShortLogoDimensions: "_1-CP3jNFd252Y0uV_Ua0VE",
          LoadingTemplate: "_2mFLv5Puw95n9oUFp9OMAs",
          Hide: "_1W2rIElq16YPQi4DqoqPLM",
          ShimmerLogo: "_3QrlTtpidzjKPhrvgxFXbI",
          ShimmerBody: "_1ugrCy0x7fRJ7TyoURzzTa",
          ShimmerHeader: "_1Tp3oOeqWARWDsQDI3owRD",
          loading: "_3CI8AFu67GMoINumH6Yvax",
          BottomBar: "_2FMNpalUV1wDdi-cywGIMN",
          NewIndicator: "-B93GaGXJf0lPTNh66m4i",
          ShortTemplate: "fntOoeLPSTpmyXGGmgf99",
          TwoLine: "P1FhGdWv2NCXZXWsaKqqY",
          FullWidth: "_6EcDVXFHtdirTkETQjKOK",
        };
      },
      chunkid: (module) => {
        module.exports = {
          "duration-app-launch": "800ms",
          loadinganimationiterationcount: "20",
          loadinganimationduration: "1s",
          StandardTemplateContainer: "_30fVm4Rsel-4nUKEiPJgz9",
          "ItemFocusAnim-darkerGrey": "_3z4hV832fi8W9gRRPhmC1V",
          Timestamp: "_7XKFnSNjW_tHfyxaezoD3",
          StandardTemplate: "_2h6KD6p6y4vIgO2Toxx-_K",
          PinnedTemplate: "_3oKFhPrh1lbp-WtA72Q2Yi",
          StandardLogoDimensions: "_1VRx9qVxigUC4qeM0NWNMR",
          Content: "_1SQjN025UZ0z_8AkWHCsGd",
          Header: "_3u0Sb5gUTscs0TQlKpA7WZ",
          Icon: "_2auM-VHPU-KKomAWyuWrSV",
          Title: "_2MGSmn9lIFnmLVIX49POSx",
          StandardNotificationDescription: "_26v9mHAi56x63OwY-jxett",
          StandardNotificationSubText: "_3hEeummFKRey8l5VXxZwxz",
          Multiline: "_21DVSDVmPUgGXuTkI2HqbO",
          Count: "CRYjulQaQOjokS7b_8cOH",
          PinnedBody: "h-lNlCUnCRbIcn38-Oqaw",
          AllNotificationsTemplate: "QFW0BtI4l77AFmv1xLAkx",
          StandardTemplateDesktop: "_3B8wRA4H7e_oSksYNqpSPv",
          DesktopToastTemplate: "_2NdiftmP-B3C4LPWnNGTCB",
          PinnedTemplateWeb: "_25gii5r23MmAqXvLZj24tK",
          PinnedTemplateDesktop: "_3k90ug209sE23xAMqcM74s",
          AppLogo: "_3p74fAyjLzNltNbJUf55kk",
          AppLogoBackgroundImage: "_2qpzt_PffGJwN3Vm2bkKQI",
          MarkedRead: "FMwg5OFGT6NP3h3EW89IP",
          markReadBackground: "_3eZECZ7BxfGeq4yfoKHDal",
          Unread: "_1B1XTNsfuwOaDPAkkr8M42",
          PlayerNickName: "_1YqYJ2yaHfODWbIB0abgzQ",
          FullName: "fozLrCNjCbPGiVKYi2L_M",
          IngameTitle: "rN6p14MiFEoCZvdjnfpgQ",
          OnlineTitle: "_35uWYHT2zJoSv9PE_euqxo",
          GroupMessageTitle: "_33qpBDHTkkQ4TCFB4gPGk_",
          GroupMessageUserName: "_3m94SADycX0JIk8urdZQ2X",
          GroupMessageBody: "_1XTFkmspXcukxWSFz5Fn61",
          GroupMessageIcon: "brsvX3XkZwkemQ_HM3JOP",
          Body: "_3JT9UI68R_-oZc63_NRIcA",
          FriendInGameAppColor: "_10165iFPxrqzt0kfV00tbu",
          WishlistBlurImage: "_3QLXE6SzCKiwEgK5iORZPA",
          AvatarStatus: "_1iutOH026zK2dbpsMFDmMm",
          IncomingCallToast: "j2oDsM6xV2rFx-UrisfYh",
          ShortLogoDimensions: "BNKAIWal-7E00ymauRaHg",
          LoadingTemplate: "Lakql1yamweHbP1OPuahF",
          Hide: "WnLkF0HwOQr2BIjlAlrjF",
          ShimmerLogo: "_2macs5lWMPN5NfDpGE3Iyh",
          ShimmerBody: "_3Ivl8dbxH6D6LwaSLTNTLe",
          ShimmerHeader: "_2a2loheX4ZKGZCGNEdAT3h",
          loading: "_2PdZZCNo176UV7FcPPdqTt",
          BottomBar: "_3yiWpBXwEmDLlaIupVXjUt",
          NewIndicator: "_1pIhbqWsrCVPaGGYc6fT-H",
        };
      },
      chunkid: (module) => {
        module.exports = {
          "duration-app-launch": "800ms",
          loadinganimationiterationcount: "20",
          loadinganimationduration: "1s",
          StandardTemplateContainer: "_1lqXpJpRlYvyM2fBx6beHd",
          "ItemFocusAnim-darkerGrey": "_3WRewosNPP9V6g7O3hWH5k",
          Timestamp: "w1Bf_xO8scHETzsfr2HtM",
          StandardTemplate: "_1k275cE1gk-jpZE5r-37zl",
          PinnedTemplate: "_4egmnB1wTrDll5Mc_eal8",
          StandardLogoDimensions: "_3n8vALReUk851YHiEiWEfQ",
          Content: "_3c_vhR2WnZLHuyVP2m4UO2",
          Header: "_1186NyOXeTBoB-vvWlJq1I",
          Icon: "_1piyUE09t3QXktcD3FrCwJ",
          Title: "_2x6qMHeQndH78e6sL2XHk_",
          StandardNotificationDescription: "Wh50moO-nKvfE3l4Buav",
          StandardNotificationSubText: "_2T5BxMT87QHfYWXDHFzpT1",
          Multiline: "_2fLmG6Oxk7tiZGLfH8dwXG",
          Count: "sdjVIgKSOKqyi7O2VDy70",
          PinnedBody: "_3OCMnBpXVpdYv5isBLVdJK",
          AllNotificationsTemplate: "d9RJTj9G8qU-U9-he2cQx",
          StandardTemplateDesktop: "_2uW9K6fqc6jZX1XBjnLjw",
          DesktopToastTemplate: "QbSr4hMpMfp0Qtsg4qOh5",
          PinnedTemplateWeb: "_3BvcYKoq-n7GgNwbfFgRAc",
          PinnedTemplateDesktop: "alS2LW_qAwNkYk_GPUC_3",
          AppLogo: "CA_EGBMvnnGy5ib6McPk1",
          AppLogoBackgroundImage: "_1WuzAPck-kGxa4mMIJvAzm",
          MarkedRead: "Wu9rtfDDzG6xfABpqX6oN",
          markReadBackground: "ULHzVL1tuahqUcVisVW-P",
          Unread: "_2kLHZTRgRl0POZfXPcfxks",
          PlayerNickName: "_2YpLUGZ7uC8ZZn67r0WFW_",
          FullName: "_31kBipdYxJf7OOfdvXt0_h",
          IngameTitle: "uoMiFtc9c1Qj-4N-yFmVY",
          OnlineTitle: "_1HmXUbyHRzGqMtpIXrI9-T",
          GroupMessageTitle: "_2sd1s2w2m26_3gQi1EUTR_",
          GroupMessageUserName: "gAoOCl1gHHigL5slBv_yA",
          GroupMessageBody: "_8o4Xz7dGPPQqf36w2HN--",
          GroupMessageIcon: "_15V41jl8st_uQsDMGCqnBx",
          Body: "_1bPTPIVs6QoX2gWvrhM6J-",
          FriendInGameAppColor: "_3xh1N-yvA3u7rLrq-DYZ1U",
          WishlistBlurImage: "_1GTWEgiW95vRIhUWfk6omo",
          AvatarStatus: "_2wKwJWdgy12ZO1tSjI9lXY",
          IncomingCallToast: "YukY0Anz5NHyFELGf9mPn",
          ShortLogoDimensions: "_1DaCc7OUCLHfc6VrQ3OIne",
          LoadingTemplate: "_5iNL0HazAvED5sWE9InJy",
          Hide: "_40XuJsiNG2Ls-sTWqrXG8",
          ShimmerLogo: "_1vzYeDqT7Eiy-LKfLm42sI",
          ShimmerBody: "_12dqPPvVDehwCa8i2oM-eA",
          ShimmerHeader: "_2ZzsgKvsaWmnKQRz0W83GA",
          loading: "_2qr7PO4jvslSCsJbTRFpwd",
          BottomBar: "IUPLZJhHdBex9tQTgC6Ug",
          NewIndicator: "_38yM72K6RxKmOhKZtInP2x",
          AllNotificationsCommentPlus: "WbA7y77Ujam9JOnYuGsMj",
          FriendIndicator: "_2Hphxk564S5yQHog-MFXfN",
          HideButton: "_3M-7E5Nj8iNX_jL5pAQDy_",
          SteamNotificationWrapper: "UmtNgXD92RoDeYjxKEskk",
        };
      },
      chunkid: (module) => {
        module.exports = {
          WebPinnedNotification: "_34nLZDNirxRHssbsjB_dJf",
        };
      },
    },
  ]);
})();
