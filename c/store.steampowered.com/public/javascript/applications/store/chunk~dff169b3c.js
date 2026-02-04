"use strict";
(self.webpackChunkstore = self.webpackChunkstore || []).push([
  [8310],
  {
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
        _,
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__._(_),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid");
      function _(_) {
        return "unknown ESteamNotificationType ( " + _ + " )";
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
          return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
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
          return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
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
          return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
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
          return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
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
          return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
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
          return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
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
          return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
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
          return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
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
          return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
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
          return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
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
          return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
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
          return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
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
          return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
        }
        getClassName() {
          return "CSteamNotification_PreferencesUpdated_Notification";
        }
      }
      !(function (_) {
        (_.GetSteamNotifications = function (_, _) {
          return _.SendMsg(
            "SteamNotification.GetSteamNotifications#1",
            (0, _._)(_, _),
            _,
            {
              bConstMethod: !0,
              ePrivilege: 1,
            },
          );
        }),
          (_.MarkNotificationsRead = function (_, _) {
            return _.SendNotification(
              "SteamNotification.MarkNotificationsRead#1",
              (0, _._)(_, _),
              {
                ePrivilege: 1,
              },
            );
          }),
          (_.MarkNotificationsViewed = function (_, _) {
            return _.SendNotification(
              "SteamNotification.MarkNotificationsViewed#1",
              (0, _._)(_, _),
              {
                ePrivilege: 1,
              },
            );
          }),
          (_.HideNotification = function (_, _) {
            return _.SendNotification(
              "SteamNotification.HideNotification#1",
              (0, _._)(_, _),
              {
                ePrivilege: 1,
              },
            );
          }),
          (_.SetPreferences = function (_, _) {
            return _.SendMsg(
              "SteamNotification.SetPreferences#1",
              (0, _._)(_, _),
              _,
              {
                ePrivilege: 1,
              },
            );
          }),
          (_.GetPreferences = function (_, _) {
            return _.SendMsg(
              "SteamNotification.GetPreferences#1",
              (0, _._)(_, _),
              _,
              {
                bConstMethod: !0,
                ePrivilege: 1,
              },
            );
          });
      })(_ || (_ = {})),
        (function (_) {
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
          return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
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
          return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
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
          return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
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
          return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
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
          return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
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
          return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
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
          return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
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
          return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
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
          return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
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
          return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
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
          return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
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
          return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
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
          return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
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
          return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
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
          return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
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
          return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
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
          return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
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
          return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
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
          return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
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
          return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
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
          return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
        }
        getClassName() {
          return "CEcon_GetAssetClassInfo_Response";
        }
      }
      !(function (_) {
        (_.GetInventoryItemsWithDescriptions = function (_, _) {
          return _.SendMsg(
            "Econ.GetInventoryItemsWithDescriptions#1",
            (0, _._)(_, _),
            _,
            {
              bConstMethod: !0,
              ePrivilege: 2,
              eWebAPIKeyRequirement: 2,
            },
          );
        }),
          (_.GetTradeOfferAccessToken = function (_, _) {
            return _.SendMsg(
              "Econ.GetTradeOfferAccessToken#1",
              (0, _._)(_, _),
              _,
              {
                ePrivilege: 1,
              },
            );
          }),
          (_.ClientGetItemShopOverlayAuthURL = function (_, _) {
            return _.SendMsg(
              "Econ.ClientGetItemShopOverlayAuthURL#1",
              (0, _._)(_, _),
              _,
              {
                ePrivilege: 1,
              },
            );
          }),
          (_.GetAssetClassInfo = function (_, _) {
            return _.SendMsg("Econ.GetAssetClassInfo#1", (0, _._)(_, _), _, {
              bConstMethod: !0,
              ePrivilege: 1,
              eWebAPIKeyRequirement: 1,
            });
          }),
          (_.GetAssetPropertySchema = function (_, _) {
            return _.SendMsg(
              "Econ.GetAssetPropertySchema#1",
              (0, _._)(_, _),
              _,
              {
                bConstMethod: !0,
                ePrivilege: 0,
                eWebAPIKeyRequirement: 1,
              },
            );
          });
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
        _ = __webpack_require__("chunkid");
      const _ = {
        11: {
          displayNameLoc: "#SteamNotification_HelpRequest_Author",
          titleLoc: "#SteamNotification_HelpRequest_Title",
          bodyLoc: (_) => ({
            locString: "#SteamNotification_HelpRequest_Body",
            params: [_.ticket],
          }),
          link: (_) => _._.HELP_BASE_URL + "wizard/HelpRequest/" + _.ticket,
        },
        6: {
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
        10: {
          displayNameLoc: (_) => _.display_name,
          titleLoc: (_) => _.title,
          bodyLoc: (_) => _.body,
          image: (_) => _.image,
          link: (_) => _.link,
        },
        14: {
          titleLoc: "#SteamNotification_ModeratorMessage_Title",
          link: (_) =>
            _._.COMMUNITY_BASE_URL + "my/moderatormessages/" + _.msgid,
        },
        28: {
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
      };
      function _(_) {
        if (void 0 !== _) return _[_];
      }
      function _(_) {
        return !!_(_);
      }
      const _ = {
        16: {
          steamidAttribute: "inviter",
          titleLoc: "#SteamNotifications_FamilyInviteTitle",
          bodyLoc: "#SteamNotifications_FamilyInviteBody",
          url: (_) =>
            `${_._.STORE_BASE_URL}account/familymanagement/join?invitation=${_.familyid}`,
        },
        15: {
          steamidAttribute: "steamid",
          titleLoc: "#SteamNotifications_ParentalFeatureRequestTitle",
          bodyLoc: "#SteamNotifications_ParentalFeatureRequestBody",
          url: () =>
            `${_._.STORE_BASE_URL}account/familymanagement?tab=requests`,
        },
        17: {
          steamidAttribute: "requestor_steamid",
          titleLoc: "#SteamNotifications_FamilyPurchaseRequestTitle",
          bodyLoc: "#SteamNotifications_FamilyPurchaseRequestBody",
          url: (_) => (0, _._)(_.familyid, _.request_id),
        },
        19: {
          steamidAttribute: "responder_steamid",
          titleLoc: (_) =>
            1 == _.action
              ? "#SteamNotifications_FamilyPurchaseRequestResponseDeclinedTitle"
              : "",
          bodyLoc: (_) =>
            1 == _.action
              ? "#SteamNotifications_FamilyPurchaseRequestDeclinedBody"
              : "",
          url: () =>
            `${_._.STORE_BASE_URL}account/familymanagement?tab=requests`,
        },
        18: {
          steamidAttribute: "steamid",
          titleLoc: "#SteamNotifications_ParentalPlaytimeRequestTitle",
          bodyLoc: "#SteamNotifications_ParentalPlaytimeRequestBody",
          url: () =>
            `${_._.STORE_BASE_URL}account/familymanagement?tab=requests`,
        },
        20: {
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
        21: {
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
        if (void 0 !== _) return _[_];
      }
      function _(_) {
        return !!_(_);
      }
      const _ = [3, 5, 2, 4, 8, 9, 12, 22, 24, 23, 29];
      function _(_) {
        return null != _.findIndex((_) => _ == _);
      }
      function _(_) {
        return (
          !_.hidden &&
          (_((_ = _.notification_type)) || _(_) || _(_)) &&
          _(_.body_data)
        );
        var _;
      }
      var _;
      !(function (_) {
        (_[(_.New = 0)] = "New"),
          (_[(_.Update = 1)] = "Update"),
          (_[(_.Remove = 2)] = "Remove");
      })(_ || (_ = {}));
      const _ = 172800,
        _ = 600,
        _ = new _._("SteamNotificationStore"),
        _ = _.Debug,
        _ = _.Error,
        _ = _.Warning;
      class _ {
        constructor() {
          (0, _._)(this);
        }
        m_rgNotificationRollups = [];
        m_summary = {
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
        m_eTargetClientType = 0;
        m_fnOnNotificationCallback = null;
        BHasNotificationsData() {
          return null != this.m_currentNotificationsData;
        }
        setTransport(_) {
          this.m_transport = _;
        }
        RegisterOnNotificationCallback(_) {
          this.m_fnOnNotificationCallback = _;
        }
        SetClientFilters(_, _ = 0) {
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
          return (
            -1 !== _ &&
            this.m_rgTestNotifications[_].read != _ &&
            ((this.m_rgTestNotifications[_].read = _), !0)
          );
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
          if (-1 === _)
            return void (_
              ? this.NotifyServerNotificationsRead([_])
              : _(
                  "Attempted to mark notification read that is not in the notification store",
                ));
          let _ = this.m_rgNotificationRollups[_];
          if (_.item.read)
            _("Attempted to mark notification read that is already read");
          else if (((_.item.read = !0), _.rgunread?.length > 0)) {
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
          if (-1 === _)
            return void _(
              "Attempted to mark notification hidden that is not in the notification store",
            );
          let _ = this.m_rgNotificationRollups[_];
          (_.item.hidden = !0),
            _.rgunread?.length > 0 &&
              this.ReduceNewTotals(_.type, _.rgunread?.length),
            this.NotifyServerNotificationsHidden([..._.rgunread, ..._.rgread]);
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
            _ = [];
          const _ = _ ?? this.m_rgNotificationRollups;
          return (
            _.forEach((_, _) => {
              _.rgunread.length > 0 &&
                (_.rgunread.forEach((_) => {
                  _.push(_);
                }),
                __webpack_require__.push(_));
            }),
            _.length > 0 &&
              ((this.m_summary = Object.assign(
                {
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
                },
                {
                  pending_gifts: this.m_summary.pending_gifts,
                  pending_invites: this.m_summary.pending_invites,
                  pending_family_invites: this.m_summary.pending_family_invites,
                },
              )),
              __webpack_require__.forEach((_) => {
                let _ = _[_];
                (_.item.read = !0), (_.rgunread = []);
              }),
              this.NotifyServerNotificationsRead(_)),
            _.length + 0
          );
        }
        ApplyNotificationsUpdate(_) {
          if (
            (_("ApplyNotificationsUpdate", _),
            !_ ||
              (!_.notifications?.length &&
                void 0 === _.pending_friend_count &&
                void 0 === _.pending_gift_count))
          )
            return void _(
              "Error: ApplyNotificationsUpdate was called with no data",
            );
          if (!this.m_currentNotificationsData)
            return void _(
              "Error: ApplyNotificationsUpdate was called before this.m_currentNotificationsData was set",
            );
          const _ = this.m_currentNotificationsData;
          _.notifications?.forEach((_) => {
            const _ = _.notifications.findIndex(
              (_) => _.notification_id == _.notification_id,
            );
            -1 != _
              ? Object.assign(_.notifications[_], _)
              : _.notifications.push(_);
          }),
            void 0 !== _.pending_friend_count &&
              (this.m_currentNotificationsData.pending_friend_count =
                _.pending_friend_count),
            void 0 !== _.pending_gift_count &&
              (this.m_currentNotificationsData.pending_gift_count =
                _.pending_gift_count),
            void 0 !== _.pending_family_invite_count &&
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
            _ = {
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
            },
            _ = 0;
          if (
            (this.m_currentNotificationsData?.notifications?.forEach((_) => {
              if (!this.BExcludeClientTargetedNotification(_)) {
                if (this.m_rgNotifyServerHidden.length > 0) {
                  -1 !==
                    this.m_rgNotifyServerHidden.findIndex(
                      (_) => _ == _.notification_id,
                    ) && (_.hidden = !0);
                }
                if (_(_)) {
                  if (this.m_rgNotifyServerRead.length > 0) {
                    -1 !==
                      this.m_rgNotifyServerRead.findIndex(
                        (_) => _ == _.notification_id,
                      ) && (_.read = !0);
                  }
                  _.read || _(_, _.notification_type, 1),
                    _.viewed || _++,
                    this.AddNotificationToRollups(_, _);
                }
              }
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
                  this.m_fnOnNotificationCallback(_, _.New);
              else if (this.m_rgNewRollupIDs.has(_.rollup_key)) {
                let _ = this.m_rgNewRollupIDs.get(_.rollup_key);
                (_.item.read == _.item.read &&
                  _.item.viewed == _.item.viewed) ||
                  (this.m_rgNewRollupIDs.set(
                    _.rollup_key,
                    JSON.parse(JSON.stringify(_)),
                  ),
                  this.m_fnOnNotificationCallback(_, _.Update));
              }
            for (const [_, _] of this.m_rgNewRollupIDs)
              -1 == _.findIndex((_) => _.rollup_key == _) &&
                (this.m_fnOnNotificationCallback(_, _.Remove),
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
          return (
            !!_ &&
            (!(
              !_.remote_client_id ||
              this.m_strRemoteClientID == _.remote_client_id
            ) ||
              !(
                !_.target_client_types ||
                this.m_eTargetClientType & _.target_client_types
              ))
          );
        }
        BReplaceRollupItem(_, _) {
          return _.read != _.read
            ? _.read
            : (_.read && _.read) || _.viewed == _.viewed
              ? _.timestamp < _.timestamp
              : !(_.viewed || !_.viewed) ||
                (!(!_.viewed || !_.viewed) && _.viewed < _.viewed);
        }
        AddNotificationToRollups(_, _) {
          const _ = this.BSendToCallbackAsNew(_);
          _ && this.m_rgUnreadNotificationIDs.push(_.notification_id);
          let _ = _.notification_type;
          switch (_) {
            case 3:
              {
                const _ = _(_);
                if (!_) return;
                const _ =
                  "comment_" +
                  _.owner_steam_id?.GetAccountID() +
                  "_" +
                  _.forum_id +
                  "_" +
                  _.topic_id;
                let _ = _.findIndex((_) => _.rollup_key == _);
                if (-1 == _)
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
                    ((_.url = _(_)),
                    (_.item = _),
                    (_.timestamp = _.timestamp),
                    (_.bSendToCallbackAsNew = _)),
                    (_.rollup_count = _.rollup_count + 1),
                    _.read
                      ? _.rgread.push(_.notification_id)
                      : _.rgunread.push(_.notification_id);
                }
                _.json_data?.app_id &&
                  _._.Get().QueueAppRequest(_.json_data.app_id, {
                    include_assets: !0,
                  });
              }
              break;
            case 4:
              const _ = _(_);
              if (_) {
                const _ = "item_" + _.appid;
                this.AddNotificationToRollupByAppID(_, _, _, _, _, _.appid);
              }
              break;
            case 12:
              const _ = _(_)?.appid.toString();
              if (_) {
                const _ = "asyncgame_" + _;
                this.AddNotificationToRollupByAppID(_, _, _, _, _, _);
              }
              break;
            case 8:
              const _ = _(_)?.appid;
              _ &&
                _._.Get().QueueAppRequest(_, {
                  include_assets: !0,
                });
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
          }
        }
        AddNotificationToRollupByAppID(_, _, _, _, _, _) {
          let _ = _.findIndex((_) => _.rollup_key == _);
          if (-1 == _)
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
          _._.Get().QueueAppRequest(parseInt(_), {
            include_assets: !0,
          });
        }
      }
      async function _(_, _, _, _, _, _ = !0, _ = !1) {
        if (!_) throw new Error("Invalid steamid for GetSteamNotifications");
        const _ = _._.Init(_._);
        _.Body().set_language(_),
          _.Body().set_include_read(_),
          _.Body().set_include_pinned_counts(!0),
          _.Body().set_include_confirmation_count(_);
        const _ = await _._.GetSteamNotifications(_, _);
        if (1 !== _.GetEResult())
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
      (0, _._)([_._], _.prototype, "m_rgNotificationRollups", void 0),
        (0, _._)([_._], _.prototype, "m_summary", void 0),
        (0, _._)([_._], _.prototype, "m_bLoaded", void 0),
        (0, _._)([_._], _.prototype, "m_nUnviewed", void 0),
        (0, _._)([_._], _.prototype, "ProcessNotifications", null);
      const _ = "ItemMetadata";
      function _(_) {
        return [`${_}_${_?.steamid}_${_?.appid}_${_?.contextid}_${_?.assetid}`];
      }
      function _(_, _, _) {
        let _ = _(4, _.body_data);
        _.steamid = _;
        let _ = (0, _._)({
          queryKey: _(_),
          queryFn: async () =>
            (async function (_, _) {
              if (!(_ && _.steamid && _.contextid && _.appid && _.assetid))
                return _("Item notification missing required attributes"), null;
              const _ = _._.Init(_);
              __webpack_require__.Body().set_steamid(_.steamid),
                __webpack_require__.Body().set_contextid(_.contextid),
                __webpack_require__.Body().set_appid(parseInt(_.appid)),
                __webpack_require__.Body().set_get_descriptions(!0),
                __webpack_require__.Body().set_language(_._.LANGUAGE);
              let _ = new _();
              _.add_assetids(_.assetid),
                __webpack_require__.Body().set_filters(_);
              const _ = await _.GetInventoryItemsWithDescriptions(_, _);
              if (1 !== _.GetEResult())
                return (
                  _(
                    "Request for steam item metadata did not succeed",
                    _.GetEResult(),
                  ),
                  null
                );
              let _ = "";
              const _ = await _._.Get().QueueAppRequest(parseInt(_.appid), {});
              if (1 == _) {
                const _ = _._.Get().GetApp(parseInt(_.appid));
                _ = _?.GetName();
              } else _("Failed getting app info", _);
              return {
                app_name: _,
                item_data: _.Body().toObject().descriptions[0],
              };
            })(_, _),
          staleTime: 1 / 0,
        });
        return _.isSuccess ? _.data : null;
      }
      function _(_) {
        let _ = `comment/${_.comment_type}/bounce/${_.owner_steam_id.ConvertTo64BitString()}/${_.forum_id}/?feature2=${_.topic_id}`;
        return _.last_post > 0 && (_ += "&tscn=" + (_.last_post - 1)), _;
      }
      function _(_) {
        return 10 == _.comment_type;
      }
      function _(_) {
        return _?.bhas_friend;
      }
      function _(_) {
        return 10 == _.comment_type;
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
        } catch (_) {
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
          case 2:
            return _.gifter_account;
          case 22:
            return {
              responder_steamid: _.responder_steamid,
              package_id: _.package_id,
              bundle_id: _.bundle_id,
            };
          case 9:
            return parseInt(_.sender);
          case 8:
            return {
              appid: _.appid,
              count: _.count ?? 1,
              appids: _.appids ?? [],
            };
          case 12:
            return !_.appid || !_.state || (1 != _.state && 2 != _.state)
              ? (_("Async game notification invalid data", _), null)
              : {
                  appid: parseInt(_.appid),
                  state: parseInt(_.state),
                };
          case 3:
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
          case 5:
            return {
              requestorID: parseInt(_.requestor_id),
              state: _.state ? parseInt(_.state) : 0,
            };
          case 4:
            return {
              appid: parseInt(_.app_id),
              assetid: _.asset_id ?? "",
              contextid: _.context_id ?? "",
            };
          case 23:
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
        if (void 0 === _) return !1;
        if ("number" == typeof _) return _ > 0;
        if ("string" == typeof _)
          switch (_.toLowerCase()?.trim()) {
            case "true":
            case "1":
              return !0;
            default:
              return !1;
          }
        return _("notification contained unexpected boolean value"), !1;
      }
      const _ = {
        0: {
          rollup_field: void 0,
          eFeature: void 0,
        },
        1: {
          rollup_field: void 0,
          eFeature: void 0,
        },
        2: {
          rollup_field: "gifts",
          eFeature: _._,
        },
        3: {
          rollup_field: "comments",
          eFeature: 2,
        },
        4: {
          rollup_field: "inventory_items",
          eFeature: 3,
        },
        5: {
          rollup_field: "invites",
          eFeature: 4,
        },
        6: {
          rollup_field: "major_sale",
          eFeature: 1,
        },
        7: {
          rollup_field: void 0,
          eFeature: void 0,
        },
        8: {
          rollup_field: "wishlist",
          eFeature: 1,
        },
        9: {
          rollup_field: "trade_offers",
          eFeature: 6,
        },
        10: {
          rollup_field: "general",
          eFeature: _._,
        },
        11: {
          rollup_field: "help_request_replies",
          eFeature: _._,
        },
        12: {
          rollup_field: "async_game_updates",
          eFeature: _._,
        },
        14: {
          rollup_field: "moderator_messages",
          eFeature: 2,
        },
        15: {
          rollup_field: "parental_feature_requests",
          eFeature: _._,
        },
        16: {
          rollup_field: "family_invites",
          eFeature: _._,
        },
        17: {
          rollup_field: "family_purchase_requests",
          eFeature: _._,
        },
        18: {
          rollup_field: "parental_playtime_requests",
          eFeature: _._,
        },
        19: {
          rollup_field: "family_purchase_request_responses",
          eFeature: _._,
        },
        20: {
          rollup_field: "parental_feature_access_responses",
          eFeature: _._,
        },
        21: {
          rollup_field: "parental_playtime_responses",
          eFeature: _._,
        },
        22: {
          rollup_field: "requested_game_added",
          eFeature: _._,
        },
        23: {
          rollup_field: void 0,
          eFeature: _._,
        },
        24: {
          rollup_field: void 0,
          eFeature: _._,
        },
        28: {
          rollup_field: "playtest_invites",
          eFeature: 1,
        },
        29: {
          rollup_field: void 0,
          eFeature: 6,
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
    },
  },
]);
