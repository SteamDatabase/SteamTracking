var _ = _(_(), 1),
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.bincremental || _(_._()),
        _.Message.initialize(this, _, 0, -1, [2], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            bincremental: {
              _: 1,
              _: _.readBool,
              _: _.writeBool,
            },
            friends: {
              _: 2,
              _: _,
              _: !0,
              _: !0,
            },
            max_friend_count: {
              _: 3,
              _: _.readUint32,
              _: _.writeUint32,
            },
            active_friend_count: {
              _: 4,
              _: _.readUint32,
              _: _.writeUint32,
            },
            friends_limit_hit: {
              _: 5,
              _: _.readBool,
              _: _.writeBool,
            },
          },
        }),
        _.sm_m
      );
    }
    static MBF() {
      return (_.sm_mbf ||= _(_._())), _.sm_mbf;
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _(_._(), _, _);
    }
    static fromObject(_) {
      return _(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new _.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new _.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
    }
    getClassName() {
      return `CMsgClientFriendsList`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.ulfriendid || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            ulfriendid: {
              _: 1,
              _: _.readFixed64String,
              _: _.writeFixed64String,
            },
            efriendrelationship: {
              _: 2,
              _: _.readUint32,
              _: _.writeUint32,
            },
          },
        }),
        _.sm_m
      );
    }
    static MBF() {
      return (_.sm_mbf ||= _(_._())), _.sm_mbf;
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _(_._(), _, _);
    }
    static fromObject(_) {
      return _(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new _.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new _.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
    }
    getClassName() {
      return `CMsgClientFriendsList_Friend`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.friendid || _(_._()),
        _.Message.initialize(this, _, 0, -1, [71, 82], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            friendid: {
              _: 1,
              _: _.readFixed64String,
              _: _.writeFixed64String,
            },
            persona_state: {
              _: 2,
              _: _.readUint32,
              _: _.writeUint32,
            },
            game_played_app_id: {
              _: 3,
              _: _.readUint32,
              _: _.writeUint32,
            },
            game_server_ip: {
              _: 4,
              _: _.readUint32,
              _: _.writeUint32,
            },
            game_server_port: {
              _: 5,
              _: _.readUint32,
              _: _.writeUint32,
            },
            persona_state_flags: {
              _: 6,
              _: _.readUint32,
              _: _.writeUint32,
            },
            online_session_instances: {
              _: 7,
              _: _.readUint32,
              _: _.writeUint32,
            },
            persona_set_by_user: {
              _: 10,
              _: _.readBool,
              _: _.writeBool,
            },
            player_name: {
              _: 15,
              _: _.readString,
              _: _.writeString,
            },
            query_port: {
              _: 20,
              _: _.readUint32,
              _: _.writeUint32,
            },
            steamid_source: {
              _: 25,
              _: _.readFixed64String,
              _: _.writeFixed64String,
            },
            avatar_hash: {
              _: 31,
              _: _.readBytes,
              _: _.writeBytes,
            },
            last_logoff: {
              _: 45,
              _: _.readUint32,
              _: _.writeUint32,
            },
            last_logon: {
              _: 46,
              _: _.readUint32,
              _: _.writeUint32,
            },
            last_seen_online: {
              _: 47,
              _: _.readUint32,
              _: _.writeUint32,
            },
            clan_rank: {
              _: 50,
              _: _.readUint32,
              _: _.writeUint32,
            },
            game_name: {
              _: 55,
              _: _.readString,
              _: _.writeString,
            },
            gameid: {
              _: 56,
              _: _.readFixed64String,
              _: _.writeFixed64String,
            },
            game_data_blob: {
              _: 60,
              _: _.readBytes,
              _: _.writeBytes,
            },
            clan_data: {
              _: 64,
              _: _,
            },
            clan_tag: {
              _: 65,
              _: _.readString,
              _: _.writeString,
            },
            rich_presence: {
              _: 71,
              _: _,
              _: !0,
              _: !0,
            },
            broadcast_id: {
              _: 72,
              _: _.readFixed64String,
              _: _.writeFixed64String,
            },
            game_lobby_id: {
              _: 73,
              _: _.readFixed64String,
              _: _.writeFixed64String,
            },
            watching_broadcast_accountid: {
              _: 74,
              _: _.readUint32,
              _: _.writeUint32,
            },
            watching_broadcast_appid: {
              _: 75,
              _: _.readUint32,
              _: _.writeUint32,
            },
            watching_broadcast_viewers: {
              _: 76,
              _: _.readUint32,
              _: _.writeUint32,
            },
            watching_broadcast_title: {
              _: 77,
              _: _.readString,
              _: _.writeString,
            },
            is_community_banned: {
              _: 78,
              _: _.readBool,
              _: _.writeBool,
            },
            player_name_pending_review: {
              _: 79,
              _: _.readBool,
              _: _.writeBool,
            },
            avatar_pending_review: {
              _: 80,
              _: _.readBool,
              _: _.writeBool,
            },
            on_steam_deck: {
              _: 81,
              _: _.readBool,
              _: _.writeBool,
            },
            other_game_data: {
              _: 82,
              _: _,
              _: !0,
              _: !0,
            },
            gaming_device_type: {
              _: 83,
              _: _.readUint32,
              _: _.writeUint32,
            },
          },
        }),
        _.sm_m
      );
    }
    static MBF() {
      return (_.sm_mbf ||= _(_._())), _.sm_mbf;
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _(_._(), _, _);
    }
    static fromObject(_) {
      return _(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new _.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new _.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
    }
    getClassName() {
      return `CMsgClientPersonaState_Friend`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.ogg_app_id || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            ogg_app_id: {
              _: 1,
              _: _.readUint32,
              _: _.writeUint32,
            },
            chat_group_id: {
              _: 2,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
          },
        }),
        _.sm_m
      );
    }
    static MBF() {
      return (_.sm_mbf ||= _(_._())), _.sm_mbf;
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _(_._(), _, _);
    }
    static fromObject(_) {
      return _(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new _.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new _.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
    }
    getClassName() {
      return `CMsgClientPersonaState_Friend_ClanData`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.key || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            key: {
              _: 1,
              _: _.readString,
              _: _.writeString,
            },
            value: {
              _: 2,
              _: _.readString,
              _: _.writeString,
            },
          },
        }),
        _.sm_m
      );
    }
    static MBF() {
      return (_.sm_mbf ||= _(_._())), _.sm_mbf;
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _(_._(), _, _);
    }
    static fromObject(_) {
      return _(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new _.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new _.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
    }
    getClassName() {
      return `CMsgClientPersonaState_Friend_KV`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.gameid || _(_._()),
        _.Message.initialize(this, _, 0, -1, [2], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            gameid: {
              _: 1,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            rich_presence: {
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
      return (_.sm_mbf ||= _(_._())), _.sm_mbf;
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _(_._(), _, _);
    }
    static fromObject(_) {
      return _(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new _.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new _.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
    }
    getClassName() {
      return `CMsgClientPersonaState_Friend_OtherGameData`;
    }
  };
export { _, _ };
