var _ = _(_(), 1),
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.steamid || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            steamid: {
              _: 1,
              _: _.readFixed64String,
              _: _.writeFixed64String,
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
      return `CLoyaltyRewards_GetSummary_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.summary || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            summary: {
              _: 1,
              _: _,
            },
            timestamp_updated: {
              _: 2,
              _: _.readUint32,
              _: _.writeUint32,
            },
            auditid_highwater: {
              _: 3,
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
      return `CLoyaltyRewards_GetSummary_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.points || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            points: {
              _: 1,
              _: _.readInt64String,
              _: _.writeInt64String,
            },
            points_earned: {
              _: 2,
              _: _.readInt64String,
              _: _.writeInt64String,
            },
            points_spent: {
              _: 3,
              _: _.readInt64String,
              _: _.writeInt64String,
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
      return `CLoyaltyRewards_GetSummary_Response_Summary`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.amount || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            amount: {
              _: 1,
              _: _.readInt64String,
              _: _.writeInt64String,
            },
            ecurrency: {
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
      return `CLoyaltyRewards_GetPointsForSpend_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.points || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            points: {
              _: 1,
              _: _.readInt64String,
              _: _.writeInt64String,
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
      return `CLoyaltyRewards_GetPointsForSpend_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.defid || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            defid: {
              _: 1,
              _: _.readUint32,
              _: _.writeUint32,
            },
            expected_points_cost: {
              _: 2,
              _: _.readInt64String,
              _: _.writeInt64String,
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
      return `CLoyaltyRewards_RedeemPoints_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.defid || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            defid: {
              _: 1,
              _: _.readUint32,
              _: _.writeUint32,
            },
            num_levels: {
              _: 2,
              _: 1,
              _: _.readInt32,
              _: _.writeInt32,
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
      return `CLoyaltyRewards_RedeemPointsForBadgeLevel_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.defid || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            defid: {
              _: 1,
              _: _.readUint32,
              _: _.writeUint32,
            },
            communityitemid: {
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
      return `CLoyaltyRewards_RedeemPointsToUpgradeItem_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.communityitemid || _(_._()),
        _.Message.initialize(this, _, 0, -1, [2], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            communityitemid: {
              _: 1,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            bundle_community_item_ids: {
              _: 2,
              _: !0,
              _: !0,
              _: _.readUint64String,
              pbr: _.readPackedUint64String,
              _: _.writeRepeatedUint64String,
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
      return `CLoyaltyRewards_RedeemPoints_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.customization_type || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            customization_type: {
              _: 1,
              _: _.readEnum,
              _: _.writeEnum,
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
      return `CLoyaltyRewards_RedeemPointsForProfileCustomization_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.purchaseid || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            purchaseid: {
              _: 1,
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
      return `CLoyaltyRewards_RedeemPointsForProfileCustomization_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.customization_type || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            customization_type: {
              _: 1,
              _: _.readEnum,
              _: _.writeEnum,
            },
            new_level: {
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
      return `CLoyaltyRewards_RedeemPointsForProfileCustomizationUpgrade_Request`;
    }
  },
  _ = class _ extends _.Message {
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
      let _ = new _.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _;
    }
    serializeBinary() {
      var _ = new _.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
    }
    static serializeBinaryToWriter(_, _) {}
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
    }
    getClassName() {
      return `CLoyaltyRewards_RedeemPointsForProfileCustomizationUpgrade_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.serial_number || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            serial_number: {
              _: 1,
              _: _.readString,
              _: _.writeString,
            },
            controller_code: {
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
      return `CLoyaltyRewards_RegisterForSteamDeckRewards_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.granted_profile_modifier || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            granted_profile_modifier: {
              _: 1,
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
      return `CLoyaltyRewards_RegisterForSteamDeckRewards_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.target_type || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            target_type: {
              _: 1,
              _: _.readEnum,
              _: _.writeEnum,
            },
            targetid: {
              _: 2,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            reactionid: {
              _: 3,
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
      return `CLoyaltyRewards_AddReaction_Request`;
    }
  },
  _ = class _ extends _.Message {
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
      let _ = new _.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _;
    }
    serializeBinary() {
      var _ = new _.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
    }
    static serializeBinaryToWriter(_, _) {}
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
    }
    getClassName() {
      return `CLoyaltyRewards_AddReaction_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.target_type || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            target_type: {
              _: 1,
              _: _.readEnum,
              _: _.writeEnum,
            },
            targetid: {
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
      return `CLoyaltyRewards_GetReactions_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.reactionids || _(_._()),
        _.Message.initialize(this, _, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            reactionids: {
              _: 1,
              _: !0,
              _: !0,
              _: _.readUint32,
              pbr: _.readPackedUint32,
              _: _.writeRepeatedUint32,
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
      return `CLoyaltyRewards_GetReactions_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.steamid || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            steamid: {
              _: 1,
              _: _.readFixed64String,
              _: _.writeFixed64String,
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
      return `CLoyaltyRewards_GetReactionsSummaryForUser_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.total || _(_._()),
        _.Message.initialize(this, _, 0, -1, [1, 2, 3, 4, 5, 6], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            total: {
              _: 1,
              _: _,
              _: !0,
              _: !0,
            },
            user_reviews: {
              _: 2,
              _: _,
              _: !0,
              _: !0,
            },
            ugc: {
              _: 3,
              _: _,
              _: !0,
              _: !0,
            },
            profile: {
              _: 4,
              _: _,
              _: !0,
              _: !0,
            },
            forum_topics: {
              _: 5,
              _: _,
              _: !0,
              _: !0,
            },
            comments: {
              _: 6,
              _: _,
              _: !0,
              _: !0,
            },
            total_given: {
              _: 7,
              _: _.readUint32,
              _: _.writeUint32,
            },
            total_received: {
              _: 8,
              _: _.readUint32,
              _: _.writeUint32,
            },
            total_points_given: {
              _: 9,
              _: _.readInt64String,
              _: _.writeInt64String,
            },
            total_points_received: {
              _: 10,
              _: _.readInt64String,
              _: _.writeInt64String,
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
      return `CLoyaltyRewards_GetReactionsSummaryForUser_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.reactionid || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            reactionid: {
              _: 1,
              _: _.readEnum,
              _: _.writeEnum,
            },
            given: {
              _: 2,
              _: _.readUint32,
              _: _.writeUint32,
            },
            received: {
              _: 3,
              _: _.readUint32,
              _: _.writeUint32,
            },
            points_given: {
              _: 4,
              _: _.readInt64String,
              _: _.writeInt64String,
            },
            points_received: {
              _: 5,
              _: _.readInt64String,
              _: _.writeInt64String,
            },
            purchaseable: {
              _: 6,
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
      return `CLoyaltyRewards_GetReactionsSummaryForUser_Response_Breakdown`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.elanguage || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            elanguage: {
              _: 1,
              _: _.readInt32,
              _: _.writeInt32,
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
      return `CLoyaltyRewards_GetReactionConfig_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.reactions || _(_._()),
        _.Message.initialize(this, _, 0, -1, [3], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            reactions: {
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
      return `CLoyaltyRewards_GetReactionConfig_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.reactionid || _(_._()),
        _.Message.initialize(this, _, 0, -1, [4, 5], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            reactionid: {
              _: 1,
              _: _.readEnum,
              _: _.writeEnum,
            },
            points_cost: {
              _: 2,
              _: _.readUint32,
              _: _.writeUint32,
            },
            points_transferred: {
              _: 3,
              _: _.readUint32,
              _: _.writeUint32,
            },
            valid_target_types: {
              _: 4,
              _: !0,
              _: !0,
              _: _.readEnum,
              pbr: _.readPackedEnum,
              _: _.writeRepeatedEnum,
            },
            valid_ugc_types: {
              _: 5,
              _: !0,
              _: !0,
              _: _.readUint32,
              pbr: _.readPackedUint32,
              _: _.writeRepeatedUint32,
            },
            purchaseable: {
              _: 6,
              _: _.readBool,
              _: _.writeBool,
            },
            localized_title: {
              _: 7,
              _: _.readString,
              _: _.writeString,
            },
            localized_desc: {
              _: 8,
              _: _.readString,
              _: _.writeString,
            },
            available_until: {
              _: 9,
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
      return `CLoyaltyRewards_GetReactionConfig_Response_ReactionConfig`;
    }
  },
  _ = class _ extends _.Message {
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
      let _ = new _.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _;
    }
    serializeBinary() {
      var _ = new _.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
    }
    static serializeBinaryToWriter(_, _) {}
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
    }
    getClassName() {
      return `CLoyaltyRewards_GetProfileCustomizationsConfig_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.points_cost || _(_._()),
        _.Message.initialize(this, _, 0, -1, [3, 4], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            points_cost: {
              _: 1,
              _: _.readUint32,
              _: _.writeUint32,
            },
            upgrade_points_cost: {
              _: 2,
              _: _.readUint32,
              _: _.writeUint32,
            },
            purchasable_customization_types: {
              _: 3,
              _: !0,
              _: !0,
              _: _.readEnum,
              pbr: _.readPackedEnum,
              _: _.writeRepeatedEnum,
            },
            upgradable_customization_types: {
              _: 4,
              _: !0,
              _: !0,
              _: _.readEnum,
              pbr: _.readPackedEnum,
              _: _.writeRepeatedEnum,
            },
            max_slots_per_type: {
              _: 5,
              _: _.readUint32,
              _: _.writeUint32,
            },
            max_upgradable_level: {
              _: 6,
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
      return `CLoyaltyRewards_GetProfileCustomizationsConfig_Response`;
    }
  },
  _ = class _ extends _.Message {
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
      let _ = new _.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _;
    }
    serializeBinary() {
      var _ = new _.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
    }
    static serializeBinaryToWriter(_, _) {}
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
    }
    getClassName() {
      return `CLoyaltyRewards_GetEligibleApps_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.apps || _(_._()),
        _.Message.initialize(this, _, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            apps: {
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
      return `CLoyaltyRewards_GetEligibleApps_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.appid || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            appid: {
              _: 1,
              _: _.readUint32,
              _: _.writeUint32,
            },
            has_items_anyone_can_purchase: {
              _: 2,
              _: _.readBool,
              _: _.writeBool,
            },
            event_app: {
              _: 3,
              _: _.readBool,
              _: _.writeBool,
            },
            hero_carousel_image: {
              _: 4,
              _: _.readString,
              _: _.writeString,
            },
            owned: {
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
      return `CLoyaltyRewards_GetEligibleApps_Response_EligibleApp`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.appid || _(_._()),
        _.Message.initialize(this, _, 0, -1, [15], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            appid: {
              _: 1,
              _: _.readUint32,
              _: _.writeUint32,
            },
            defid: {
              _: 2,
              _: _.readUint32,
              _: _.writeUint32,
            },
            type: {
              _: 3,
              _: _.readEnum,
              _: _.writeEnum,
            },
            community_item_class: {
              _: 4,
              _: _.readInt32,
              _: _.writeInt32,
            },
            community_item_type: {
              _: 5,
              _: _.readUint32,
              _: _.writeUint32,
            },
            point_cost: {
              _: 6,
              _: _.readInt64String,
              _: _.writeInt64String,
            },
            timestamp_created: {
              _: 7,
              _: _.readUint32,
              _: _.writeUint32,
            },
            timestamp_updated: {
              _: 8,
              _: _.readUint32,
              _: _.writeUint32,
            },
            timestamp_available: {
              _: 9,
              _: _.readUint32,
              _: _.writeUint32,
            },
            timestamp_available_end: {
              _: 14,
              _: _.readUint32,
              _: _.writeUint32,
            },
            quantity: {
              _: 10,
              _: _.readInt64String,
              _: _.writeInt64String,
            },
            internal_description: {
              _: 11,
              _: _.readString,
              _: _.writeString,
            },
            active: {
              _: 12,
              _: _.readBool,
              _: _.writeBool,
            },
            community_item_data: {
              _: 13,
              _: _,
            },
            bundle_defids: {
              _: 15,
              _: !0,
              _: !0,
              _: _.readUint32,
              pbr: _.readPackedUint32,
              _: _.writeRepeatedUint32,
            },
            usable_duration: {
              _: 16,
              _: _.readUint32,
              _: _.writeUint32,
            },
            bundle_discount: {
              _: 17,
              _: _.readUint32,
              _: _.writeUint32,
            },
            timestamp_free_until: {
              _: 18,
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
      return `LoyaltyRewardDefinition`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.item_name || _(_._()),
        _.Message.initialize(this, _, 0, -1, [9], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            item_name: {
              _: 1,
              _: _.readString,
              _: _.writeString,
            },
            item_title: {
              _: 2,
              _: _.readString,
              _: _.writeString,
            },
            item_description: {
              _: 3,
              _: _.readString,
              _: _.writeString,
            },
            item_image_small: {
              _: 4,
              _: _.readString,
              _: _.writeString,
            },
            item_image_large: {
              _: 5,
              _: _.readString,
              _: _.writeString,
            },
            item_movie_webm: {
              _: 6,
              _: _.readString,
              _: _.writeString,
            },
            item_movie_mp4: {
              _: 7,
              _: _.readString,
              _: _.writeString,
            },
            item_movie_webm_small: {
              _: 10,
              _: _.readString,
              _: _.writeString,
            },
            item_movie_mp4_small: {
              _: 11,
              _: _.readString,
              _: _.writeString,
            },
            animated: {
              _: 8,
              _: _.readBool,
              _: _.writeBool,
            },
            badge_data: {
              _: 9,
              _: _,
              _: !0,
              _: !0,
            },
            profile_theme_id: {
              _: 12,
              _: _.readString,
              _: _.writeString,
            },
            tiled: {
              _: 13,
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
      return `LoyaltyRewardDefinition_CommunityItemData`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.level || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            level: {
              _: 1,
              _: _.readInt32,
              _: _.writeInt32,
            },
            image: {
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
      return `LoyaltyRewardDefinition_BadgeData`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.bonusid || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            bonusid: {
              _: 1,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            appid: {
              _: 2,
              _: _.readUint32,
              _: _.writeUint32,
            },
            active: {
              _: 3,
              _: _.readBool,
              _: _.writeBool,
            },
            points: {
              _: 4,
              _: _.readInt32,
              _: _.writeInt32,
            },
            timestamp_start: {
              _: 5,
              _: _.readUint32,
              _: _.writeUint32,
            },
            timestamp_end: {
              _: 6,
              _: _.readUint32,
              _: _.writeUint32,
            },
            internal_description: {
              _: 7,
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
      return `LoyaltyRewardPurchaseBonus`;
    }
  },
  _ = class _ extends _.Message {
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
      let _ = new _.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _;
    }
    serializeBinary() {
      var _ = new _.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
    }
    static serializeBinaryToWriter(_, _) {}
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
    }
    getClassName() {
      return `CLoyaltyRewards_GetActivePurchaseBonuses_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.bonuses || _(_._()),
        _.Message.initialize(this, _, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            bonuses: {
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
      return `CLoyaltyRewards_GetActivePurchaseBonuses_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.appids || _(_._()),
        _.Message.initialize(
          this,
          _,
          0,
          -1,
          [1, 3, 9, 10, 11, 12, 13, 14, 15, 17, 18, 19, 20],
          null,
        );
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            appids: {
              _: 1,
              _: !0,
              _: !0,
              _: _.readUint32,
              pbr: _.readPackedUint32,
              _: _.writeRepeatedUint32,
            },
            time_available: {
              _: 2,
              _: _.readUint32,
              _: _.writeUint32,
            },
            community_item_classes: {
              _: 3,
              _: !0,
              _: !0,
              _: _.readInt32,
              pbr: _.readPackedInt32,
              _: _.writeRepeatedInt32,
            },
            language: {
              _: 4,
              _: _.readString,
              _: _.writeString,
            },
            count: {
              _: 5,
              _: _.readInt32,
              _: _.writeInt32,
            },
            cursor: {
              _: 6,
              _: _.readString,
              _: _.writeString,
            },
            sort: {
              _: 7,
              _: 1,
              _: _.readEnum,
              _: _.writeEnum,
            },
            sort_descending: {
              _: 8,
              _: !0,
              _: _.readBool,
              _: _.writeBool,
            },
            reward_types: {
              _: 9,
              _: !0,
              _: !0,
              _: _.readEnum,
              pbr: _.readPackedEnum,
              _: _.writeRepeatedEnum,
            },
            excluded_community_item_classes: {
              _: 10,
              _: !0,
              _: !0,
              _: _.readInt32,
              pbr: _.readPackedInt32,
              _: _.writeRepeatedInt32,
            },
            definitionids: {
              _: 11,
              _: !0,
              _: !0,
              _: _.readUint32,
              pbr: _.readPackedUint32,
              _: _.writeRepeatedUint32,
            },
            filters: {
              _: 12,
              _: !0,
              _: !0,
              _: _.readEnum,
              pbr: _.readPackedEnum,
              _: _.writeRepeatedEnum,
            },
            filter_match_all_category_tags: {
              _: 13,
              _: !0,
              _: !0,
              _: _.readString,
              _: _.writeRepeatedString,
            },
            filter_match_any_category_tags: {
              _: 14,
              _: !0,
              _: !0,
              _: _.readString,
              _: _.writeRepeatedString,
            },
            contains_definitionids: {
              _: 15,
              _: !0,
              _: !0,
              _: _.readUint32,
              pbr: _.readPackedUint32,
              _: _.writeRepeatedUint32,
            },
            include_direct_purchase_disabled: {
              _: 16,
              _: _.readBool,
              _: _.writeBool,
            },
            excluded_content_descriptors: {
              _: 17,
              _: !0,
              _: !0,
              _: _.readUint32,
              pbr: _.readPackedUint32,
              _: _.writeRepeatedUint32,
            },
            excluded_appids: {
              _: 18,
              _: !0,
              _: !0,
              _: _.readUint32,
              pbr: _.readPackedUint32,
              _: _.writeRepeatedUint32,
            },
            excluded_store_tagids: {
              _: 19,
              _: !0,
              _: !0,
              _: _.readUint32,
              pbr: _.readPackedUint32,
              _: _.writeRepeatedUint32,
            },
            store_tagids: {
              _: 20,
              _: !0,
              _: !0,
              _: _.readUint32,
              pbr: _.readPackedUint32,
              _: _.writeRepeatedUint32,
            },
            search_term: {
              _: 21,
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
      return `CLoyaltyRewards_QueryRewardItems_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.definitions || _(_._()),
        _.Message.initialize(this, _, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            definitions: {
              _: 1,
              _: _,
              _: !0,
              _: !0,
            },
            total_count: {
              _: 2,
              _: _.readInt32,
              _: _.writeInt32,
            },
            count: {
              _: 3,
              _: _.readInt32,
              _: _.writeInt32,
            },
            next_cursor: {
              _: 4,
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
      return `CLoyaltyRewards_QueryRewardItems_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.requests || _(_._()),
        _.Message.initialize(this, _, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
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
      return `CLoyaltyRewards_BatchedQueryRewardItems_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.responses || _(_._()),
        _.Message.initialize(this, _, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            responses: {
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
      return `CLoyaltyRewards_BatchedQueryRewardItems_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.eresult || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            eresult: {
              _: 1,
              _: _.readInt32,
              _: _.writeInt32,
            },
            response: {
              _: 2,
              _: _,
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
      return `CLoyaltyRewards_BatchedQueryRewardItems_Response_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.steamid || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            steamid: {
              _: 1,
              _: _.readFixed64String,
              _: _.writeFixed64String,
            },
            language: {
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
      return `CLoyaltyRewards_GetEquippedProfileItems_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.active_definitions || _(_._()),
        _.Message.initialize(this, _, 0, -1, [1, 2, 3], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            active_definitions: {
              _: 1,
              _: _,
              _: !0,
              _: !0,
            },
            inactive_definitions: {
              _: 2,
              _: _,
              _: !0,
              _: !0,
            },
            bundle_definitions: {
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
      return `CLoyaltyRewards_GetEquippedProfileItems_Response`;
    }
  },
  _;
(function (_) {
  function _(_, _, _) {
    return _.SendMsg(`LoyaltyRewards.GetPointsForSpend#1`, _(_, _, _), _, {
      bConstMethod: !0,
      ePrivilege: 0,
      eWebAPIKeyRequirement: 1,
    });
  }
  _.GetPointsForSpend = _;
  function _(_, _, _) {
    return _.SendMsg(`LoyaltyRewards.GetSummary#1`, _(_, _, _), _, {
      bConstMethod: !0,
      ePrivilege: 1,
    });
  }
  _.GetSummary = _;
  function _(_, _, _) {
    return _.SendMsg(`LoyaltyRewards.RedeemPoints#1`, _(_, _, _), _, {
      ePrivilege: 1,
    });
  }
  _.RedeemPoints = _;
  function _(_, _, _) {
    return _.SendMsg(
      `LoyaltyRewards.RedeemPointsForBadgeLevel#1`,
      _(_, _, _),
      _,
      {
        ePrivilege: 1,
      },
    );
  }
  _.RedeemPointsForBadgeLevel = _;
  function _(_, _, _) {
    return _.SendMsg(
      `LoyaltyRewards.RedeemPointsToUpgradeItem#1`,
      _(_, _, _),
      _,
      {
        ePrivilege: 1,
      },
    );
  }
  _.RedeemPointsToUpgradeItem = _;
  function _(_, _, _) {
    return _.SendMsg(
      `LoyaltyRewards.RedeemPointsForProfileCustomization#1`,
      _(_, _, _),
      _,
      {
        ePrivilege: 1,
      },
    );
  }
  _.RedeemPointsForProfileCustomization = _;
  function _(_, _, _) {
    return _.SendMsg(
      `LoyaltyRewards.RedeemPointsForProfileCustomizationUpgrade#1`,
      _(_, _, _),
      _,
      {
        ePrivilege: 1,
      },
    );
  }
  _.RedeemPointsForProfileCustomizationUpgrade = _;
  function _(_, _, _) {
    return _.SendMsg(
      `LoyaltyRewards.RegisterForSteamDeckRewards#1`,
      _(_, _, _),
      _,
      {
        ePrivilege: 1,
      },
    );
  }
  _.RegisterForSteamDeckRewards = _;
  function _(_, _, _) {
    return _.SendMsg(`LoyaltyRewards.AddReaction#1`, _(_, _, _), _, {
      ePrivilege: 1,
    });
  }
  _.AddReaction = _;
  function _(_, _, _) {
    return _.SendMsg(`LoyaltyRewards.GetReactions#1`, _(_, _, _), _, {
      bConstMethod: !0,
      ePrivilege: 1,
    });
  }
  _.GetReactions = _;
  function _(_, _, _) {
    return _.SendMsg(
      `LoyaltyRewards.GetReactionsSummaryForUser#1`,
      _(_, _, _),
      _,
      {
        bConstMethod: !0,
        ePrivilege: 2,
        eWebAPIKeyRequirement: 1,
      },
    );
  }
  _.GetReactionsSummaryForUser = _;
  function _(_, _, _) {
    return _.SendMsg(`LoyaltyRewards.GetReactionConfig#1`, _(_, _, _), _, {
      bConstMethod: !0,
      ePrivilege: 0,
      eWebAPIKeyRequirement: 1,
    });
  }
  _.GetReactionConfig = _;
  function _(_, _, _) {
    return _.SendMsg(
      `LoyaltyRewards.GetProfileCustomizationsConfig#1`,
      _(_, _, _),
      _,
      {
        bConstMethod: !0,
        ePrivilege: 0,
        eWebAPIKeyRequirement: 1,
      },
    );
  }
  _.GetProfileCustomizationsConfig = _;
  function _(_, _, _) {
    return _.SendMsg(`LoyaltyRewards.GetEligibleApps#1`, _(_, _, _), _, {
      bConstMethod: !0,
      ePrivilege: 2,
      eWebAPIKeyRequirement: 1,
    });
  }
  _.GetEligibleApps = _;
  function _(_, _, _) {
    return _.SendMsg(
      `LoyaltyRewards.GetActivePurchaseBonuses#1`,
      _(_, _, _),
      _,
      {
        bConstMethod: !0,
        ePrivilege: 2,
        eWebAPIKeyRequirement: 1,
      },
    );
  }
  _.GetActivePurchaseBonuses = _;
  function _(_, _, _) {
    return _.SendMsg(`LoyaltyRewards.QueryRewardItems#1`, _(_, _, _), _, {
      bConstMethod: !0,
      ePrivilege: 2,
      eWebAPIKeyRequirement: 1,
    });
  }
  _.QueryRewardItems = _;
  function _(_, _, _) {
    return _.SendMsg(
      `LoyaltyRewards.BatchedQueryRewardItems#1`,
      _(_, _, _),
      _,
      {
        bConstMethod: !0,
        ePrivilege: 2,
        eWebAPIKeyRequirement: 1,
      },
    );
  }
  _.BatchedQueryRewardItems = _;
  function _(_, _, _) {
    return _.SendMsg(
      `LoyaltyRewards.GetEquippedProfileItems#1`,
      _(_, _, _),
      _,
      {
        bConstMethod: !0,
        ePrivilege: 2,
        eWebAPIKeyRequirement: 1,
      },
    );
  }
  _.GetEquippedProfileItems = _;
})((_ ||= {}));
function _(_) {
  let _ = _();
  return _({
    mutationFn: async (_) => {
      if (!_.logged_in) throw 21;
      let { targetid: _, targetType: _, nReactionId: _ } = _,
        _ = _.Init(_);
      _.Body().set_target_type(_),
        _.Body().set_targetid(_),
        _.Body().set_reactionid(_);
      let _ = await _.AddReaction(_, _);
      if (_.GetEResult() != 1) throw _.GetEResult();
    },
    onSuccess: () => {
      _.invalidateQueries({
        queryKey: [`UserPointBalance`],
      });
    },
  });
}
function _(_, _) {
  return _({
    queryKey: [`UserPointBalance`],
    queryFn: async () => {
      if (!_.logged_in) throw 21;
      let _ = _.steamid,
        _ = _.Init(_);
      _.Body().set_steamid(_);
      let _ = await _.GetSummary(_, _);
      if (_.GetEResult() == 1)
        return _.fromString(_.Body().toObject().summary?.points ?? `0`);
      throw _.GetEResult();
    },
    enabled: _,
  });
}
function _(_, _) {
  return _({
    queryKey: [`AwardsConfiguration`],
    queryFn: async () => {
      let _ = _.Init(_);
      _.Body().set_elanguage(_(_.LANGUAGE));
      let _ = await _.GetReactionConfig(_, _);
      if (_.GetEResult() == 1) {
        let _ = new Map(),
          _ = _.Body().toObject().reactions ?? [];
        for (let _ of _) _.reactionid && _.set(_.reactionid, _);
        return _;
      } else throw _.GetEResult();
    },
    enabled: _,
  });
}
function _(_, _, _, _) {
  return _({
    queryKey: [`UserReactions`, _, _],
    queryFn: async () => {
      if (!_.logged_in) throw 21;
      let _ = _.Init(_);
      _.Body().set_target_type(_), _.Body().set_targetid(_);
      let _ = await _.GetReactions(_, _);
      if (_.GetEResult() == 1) return new Set(_.Body().reactionids());
      throw _.GetEResult();
    },
    enabled: _,
  });
}
var _ = _(),
  _ = (_) => _(_, _),
  _ = _();
_.write = (_) => _(_, _);
var _ = _();
_.onStart = (_) => _(_, _);
var _ = _();
_.onFrame = (_) => _(_, _);
var _ = _();
_.onFinish = (_) => _(_, _);
var _ = [];
_.setTimeout = (_, _) => {
  let _ = _.now() + _,
    _ = () => {
      let _ = _.findIndex((_) => _.cancel == _);
      ~_ && _.splice(_, 1), (_ -= +!!~_);
    },
    _ = {
      time: _,
      handler: _,
      cancel: _,
    };
  return _.splice(_(_), 0, _), (_ += 1), _(), _;
};
var _ = (_) => ~(~_.findIndex((_) => _.time > _) || ~_.length);
(_.cancel = (_) => {
  _.delete(_), _.delete(_), _.delete(_), _.delete(_), _.delete(_);
}),
  (_.sync = (_) => {
    (_ = !0), _.batchedUpdates(_), (_ = !1);
  }),
  (_.throttle = (_) => {
    let _;
    function _() {
      try {
        _(..._);
      } finally {
        _ = null;
      }
    }
    function _(..._) {
      (_ = _), _.onStart(_);
    }
    return (
      (_.handler = _),
      (_.cancel = () => {
        _.delete(_), (_ = null);
      }),
      _
    );
  });
var _ = typeof window < `u` ? window.requestAnimationFrame : () => {};
(_.use = (_) => (_ = _)),
  (_.now = typeof performance < `u` ? () => performance.now() : Date.now),
  (_.batchedUpdates = (_) => _()),
  (_.catch = console.error),
  (_.frameLoop = `always`),
  (_.advance = () => {
    _.frameLoop === `demand`
      ? _()
      : console.warn(
          `Cannot call the manual advancement of rafz whilst frameLoop is not set as demand`,
        );
  });
var _ = -1,
  _ = 0,
  _ = !1;
function _(_, _) {
  _ ? (_.delete(_), _(0)) : (_.add(_), _());
}
function _() {
  _ < 0 && ((_ = 0), _.frameLoop !== `demand` && _(_));
}
function _() {
  _ = -1;
}
function _() {
  ~_ && (_(_), _.batchedUpdates(_));
}
function _() {
  let _ = _;
  _ = _.now();
  let _ = _(_);
  if ((_ && (_(_.splice(0, _), (_) => _.handler()), (_ -= _)), !_)) {
    _();
    return;
  }
  _.flush(),
    _.flush(_ ? Math.min(64, _ - _) : 16.667),
    _.flush(),
    _.flush(),
    _.flush();
}
function _() {
  let _ = new Set(),
    _ = _;
  return {
    add(_) {
      (_ += +(_ == _ && !_.has(_))), _.add(_);
    },
    delete(_) {
      return (_ -= _ == _ && _.has(_) ? 1 : 0), _.delete(_);
    },
    flush(_) {
      _.size &&
        ((_ = new Set()),
        (_ -= _.size),
        _(_, (_) => _(_) && _.add(_)),
        (_ += _.size),
        (_ = _));
    },
  };
}
function _(_, _) {
  _.forEach((_) => {
    try {
      _(_);
    } catch (_) {
      _.catch(_);
    }
  });
}
var _ = _(_(), 1),
  _ = Object.defineProperty,
  _ = (_, _) => {
    for (var _ in _)
      _(_, _, {
        get: _[_],
        enumerable: !0,
      });
  },
  _ = {};
_(_, {
  assign: () => _,
  colors: () => _,
  createStringInterpolator: () => _,
  skipAnimation: () => _,
  _: () => _,
  willAdvance: () => _,
});
function _() {}
var _ = (_, _, _) =>
    Object.defineProperty(_, _, {
      value: _,
      writable: !0,
      configurable: !0,
    }),
  _ = {
    arr: Array.isArray,
    obj: (_) => !!_ && _.constructor.name === `Object`,
    fun: (_) => typeof _ == `function`,
    str: (_) => typeof _ == `string`,
    num: (_) => typeof _ == `number`,
    und: (_) => _ === void 0,
  };
function _(_, _) {
  if (_.arr(_)) {
    if (!_.arr(_) || _.length !== _.length) return !1;
    for (let _ = 0; _ < _.length; _++) if (_[_] !== _[_]) return !1;
    return !0;
  }
  return _ === _;
}
var _ = (_, _) => _.forEach(_);
function _(_, _, _) {
  if (_.arr(_)) {
    for (let _ = 0; _ < _.length; _++) _.call(_, _[_], `${_}`);
    return;
  }
  for (let _ in _) _.hasOwnProperty(_) && _.call(_, _[_], _);
}
var _ = (_) => (_.und(_) ? [] : _.arr(_) ? _ : [_]);
function _(_, _) {
  if (_.size) {
    let _ = Array.from(_);
    _.clear(), _(_, _);
  }
}
var _ = (_, ..._) => _(_, (_) => _(..._)),
  _ = () =>
    typeof window > `u` ||
    !window.navigator ||
    /ServerSideRendering|^Deno\//.test(window.navigator.userAgent),
  _,
  _,
  _ = null,
  _ = !1,
  _ = _,
  _ = (_) => {
    _._ && (_ = _._),
      _.now && (_.now = _.now),
      _.colors !== void 0 && (_ = _.colors),
      _.skipAnimation != null && (_ = _.skipAnimation),
      _.createStringInterpolator && (_ = _.createStringInterpolator),
      _.requestAnimationFrame && _.use(_.requestAnimationFrame),
      _.batchedUpdates && (_.batchedUpdates = _.batchedUpdates),
      _.willAdvance && (_ = _.willAdvance),
      _.frameLoop && (_.frameLoop = _.frameLoop);
  },
  _ = new Set(),
  _ = [],
  _ = [],
  _ = 0,
  _ = {
    get idle() {
      return !_.size && !_.length;
    },
    start(_) {
      _ > _.priority ? (_.add(_), _.onStart(_)) : (_(_), _(_));
    },
    advance: _,
    sort(_) {
      if (_) _.onFrame(() => _.sort(_));
      else {
        let _ = _.indexOf(_);
        ~_ && (_.splice(_, 1), _(_));
      }
    },
    clear() {
      (_ = []), _.clear();
    },
  };
function _() {
  _.forEach(_), _.clear(), _(_);
}
function _(_) {
  _.includes(_) || _(_);
}
function _(_) {
  _.splice(
    _(_, (_) => _.priority > _.priority),
    0,
    _,
  );
}
function _(_) {
  let _ = _;
  for (let _ = 0; _ < _.length; _++) {
    let _ = _[_];
    (_ = _.priority), _.idle || (_(_), _.advance(_), _.idle || _.push(_));
  }
  return (_ = 0), (_ = _), (_.length = 0), (_ = _), _.length > 0;
}
function _(_, _) {
  let _ = _.findIndex(_);
  return _ < 0 ? _.length : _;
}
var _ = (_, _, _) => Math.min(Math.max(_, _), _),
  _ = {
    transparent: 0,
    aliceblue: 4042850303,
    antiquewhite: 4209760255,
    aqua: 16777215,
    aquamarine: 2147472639,
    azure: 4043309055,
    beige: 4126530815,
    bisque: 4293182719,
    black: 255,
    blanchedalmond: 4293643775,
    blue: 65535,
    blueviolet: 2318131967,
    brown: 2771004159,
    burlywood: 3736635391,
    burntsienna: 3934150143,
    cadetblue: 1604231423,
    chartreuse: 2147418367,
    chocolate: 3530104575,
    coral: 4286533887,
    cornflowerblue: 1687547391,
    cornsilk: 4294499583,
    crimson: 3692313855,
    cyan: 16777215,
    darkblue: 35839,
    darkcyan: 9145343,
    darkgoldenrod: 3095792639,
    darkgray: 2846468607,
    darkgreen: 6553855,
    darkgrey: 2846468607,
    darkkhaki: 3182914559,
    darkmagenta: 2332068863,
    darkolivegreen: 1433087999,
    darkorange: 4287365375,
    darkorchid: 2570243327,
    darkred: 2332033279,
    darksalmon: 3918953215,
    darkseagreen: 2411499519,
    darkslateblue: 1211993087,
    darkslategray: 793726975,
    darkslategrey: 793726975,
    darkturquoise: 13554175,
    darkviolet: 2483082239,
    deeppink: 4279538687,
    deepskyblue: 12582911,
    dimgray: 1768516095,
    dimgrey: 1768516095,
    dodgerblue: 512819199,
    firebrick: 2988581631,
    floralwhite: 4294635775,
    forestgreen: 579543807,
    fuchsia: 4278255615,
    gainsboro: 3705462015,
    ghostwhite: 4177068031,
    gold: 4292280575,
    goldenrod: 3668254975,
    gray: 2155905279,
    green: 8388863,
    greenyellow: 2919182335,
    grey: 2155905279,
    honeydew: 4043305215,
    hotpink: 4285117695,
    indianred: 3445382399,
    indigo: 1258324735,
    ivory: 4294963455,
    khaki: 4041641215,
    lavender: 3873897215,
    lavenderblush: 4293981695,
    lawngreen: 2096890111,
    lemonchiffon: 4294626815,
    lightblue: 2916673279,
    lightcoral: 4034953471,
    lightcyan: 3774873599,
    lightgoldenrodyellow: 4210742015,
    lightgray: 3553874943,
    lightgreen: 2431553791,
    lightgrey: 3553874943,
    lightpink: 4290167295,
    lightsalmon: 4288707327,
    lightseagreen: 548580095,
    lightskyblue: 2278488831,
    lightslategray: 2005441023,
    lightslategrey: 2005441023,
    lightsteelblue: 2965692159,
    lightyellow: 4294959359,
    lime: 16711935,
    limegreen: 852308735,
    linen: 4210091775,
    magenta: 4278255615,
    maroon: 2147483903,
    mediumaquamarine: 1724754687,
    mediumblue: 52735,
    mediumorchid: 3126187007,
    mediumpurple: 2473647103,
    mediumseagreen: 1018393087,
    mediumslateblue: 2070474495,
    mediumspringgreen: 16423679,
    mediumturquoise: 1221709055,
    mediumvioletred: 3340076543,
    midnightblue: 421097727,
    mintcream: 4127193855,
    mistyrose: 4293190143,
    moccasin: 4293178879,
    navajowhite: 4292783615,
    navy: 33023,
    oldlace: 4260751103,
    olive: 2155872511,
    olivedrab: 1804477439,
    orange: 4289003775,
    orangered: 4282712319,
    orchid: 3664828159,
    palegoldenrod: 4008225535,
    palegreen: 2566625535,
    paleturquoise: 2951671551,
    palevioletred: 3681588223,
    papayawhip: 4293907967,
    peachpuff: 4292524543,
    peru: 3448061951,
    pink: 4290825215,
    plum: 3718307327,
    powderblue: 2967529215,
    purple: 2147516671,
    rebeccapurple: 1714657791,
    red: 4278190335,
    rosybrown: 3163525119,
    royalblue: 1097458175,
    saddlebrown: 2336560127,
    salmon: 4202722047,
    sandybrown: 4104413439,
    seagreen: 780883967,
    seashell: 4294307583,
    sienna: 2689740287,
    silver: 3233857791,
    skyblue: 2278484991,
    slateblue: 1784335871,
    slategray: 1887473919,
    slategrey: 1887473919,
    snow: 4294638335,
    springgreen: 16744447,
    steelblue: 1182971135,
    tan: 3535047935,
    teal: 8421631,
    thistle: 3636451583,
    tomato: 4284696575,
    turquoise: 1088475391,
    violet: 4001558271,
    wheat: 4125012991,
    white: 4294967295,
    whitesmoke: 4126537215,
    yellow: 4294902015,
    yellowgreen: 2597139199,
  },
  _ = `[-+]?\\d*\\.?\\d+`,
  _ = _ + `%`;
function _(..._) {
  return `\\(\\s*(` + _.join(`)\\s*,\\s*(`) + `)\\s*\\)`;
}
var _ = RegExp(`rgb` + _(_, _, _)),
  _ = RegExp(`rgba` + _(_, _, _, _)),
  _ = RegExp(`hsl` + _(_, _, _)),
  _ = RegExp(`hsla` + _(_, _, _, _)),
  _ = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
  _ = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
  _ = /^#([0-9a-fA-F]{6})$/,
  _ = /^#([0-9a-fA-F]{8})$/;
function _(_) {
  let _;
  return typeof _ == `number`
    ? _ >>> 0 === _ && _ >= 0 && _ <= 4294967295
      ? _
      : null
    : (_ = _.exec(_))
      ? parseInt(_[1] + `ff`, 16) >>> 0
      : _ && _[_] !== void 0
        ? _[_]
        : (_ = _.exec(_))
          ? ((_(_[1]) << 24) | (_(_[2]) << 16) | (_(_[3]) << 8) | 255) >>> 0
          : (_ = _.exec(_))
            ? ((_(_[1]) << 24) | (_(_[2]) << 16) | (_(_[3]) << 8) | _(_[4])) >>>
              0
            : (_ = _.exec(_))
              ? parseInt(_[1] + _[1] + _[2] + _[2] + _[3] + _[3] + `ff`, 16) >>>
                0
              : (_ = _.exec(_))
                ? parseInt(_[1], 16) >>> 0
                : (_ = _.exec(_))
                  ? parseInt(
                      _[1] + _[1] + _[2] + _[2] + _[3] + _[3] + _[4] + _[4],
                      16,
                    ) >>> 0
                  : (_ = _.exec(_))
                    ? (_(_(_[1]), _(_[2]), _(_[3])) | 255) >>> 0
                    : (_ = _.exec(_))
                      ? (_(_(_[1]), _(_[2]), _(_[3])) | _(_[4])) >>> 0
                      : null;
}
function _(_, _, _) {
  return (
    _ < 0 && (_ += 1),
    _ > 1 && --_,
    _ < 1 / 6
      ? _ + (_ - _) * 6 * _
      : _ < 1 / 2
        ? _
        : _ < 2 / 3
          ? _ + (_ - _) * (2 / 3 - _) * 6
          : _
  );
}
function _(_, _, _) {
  let _ = _ < 0.5 ? _ * (1 + _) : _ + _ - _ * _,
    _ = 2 * _ - _,
    _ = _(_, _, _ + 1 / 3),
    _ = _(_, _, _),
    _ = _(_, _, _ - 1 / 3);
  return (
    (Math.round(_ * 255) << 24) |
    (Math.round(_ * 255) << 16) |
    (Math.round(_ * 255) << 8)
  );
}
function _(_) {
  let _ = parseInt(_, 10);
  return _ < 0 ? 0 : _ > 255 ? 255 : _;
}
function _(_) {
  return (((parseFloat(_) % 360) + 360) % 360) / 360;
}
function _(_) {
  let _ = parseFloat(_);
  return _ < 0 ? 0 : _ > 1 ? 255 : Math.round(_ * 255);
}
function _(_) {
  let _ = parseFloat(_);
  return _ < 0 ? 0 : _ > 100 ? 1 : _ / 100;
}
function _(_) {
  let _ = _(_);
  return _ === null
    ? _
    : ((_ ||= 0),
      `rgba(${(_ & 4278190080) >>> 24}, ${(_ & 16711680) >>> 16}, ${(_ & 65280) >>> 8}, ${(_ & 255) / 255})`);
}
var _ = (_, _, _) => {
  if (_.fun(_)) return _;
  if (_.arr(_))
    return _({
      range: _,
      output: _,
      extrapolate: _,
    });
  if (_.str(_.output[0])) return _(_);
  let _ = _,
    _ = _.output,
    _ = _.range || [0, 1],
    _ = _.extrapolateLeft || _.extrapolate || `extend`,
    _ = _.extrapolateRight || _.extrapolate || `extend`,
    _ = _.easing || ((_) => _);
  return (_) => {
    let _ = _(_, _);
    return _(_, _[_], _[_ + 1], _[_], _[_ + 1], _, _, _, _.map);
  };
};
function _(_, _, _, _, _, _, _, _, _) {
  let _ = _ ? _(_) : _;
  if (_ < _) {
    if (_ === `identity`) return _;
    _ === `clamp` && (_ = _);
  }
  if (_ > _) {
    if (_ === `identity`) return _;
    _ === `clamp` && (_ = _);
  }
  return _ === _
    ? _
    : _ === _
      ? _ <= _
        ? _
        : _
      : (_ === -1 / 0
          ? (_ = -_)
          : _ === 1 / 0
            ? (_ -= _)
            : (_ = (_ - _) / (_ - _)),
        (_ = _(_)),
        _ === -1 / 0
          ? (_ = -_)
          : _ === 1 / 0
            ? (_ += _)
            : (_ = _ * (_ - _) + _),
        _);
}
function _(_, _) {
  for (var _ = 1; _ < _.length - 1 && !(_[_] >= _); ++_);
  return _ - 1;
}
var _ =
    (_, _ = `end`) =>
    (_) => {
      _ = _ === `end` ? Math.min(_, 0.999) : Math.max(_, 0.001);
      let _ = _ * _;
      return _(0, 1, (_ === `end` ? Math.floor(_) : Math.ceil(_)) / _);
    },
  _ = 1.70158,
  _ = _ * 1.525,
  _ = _ + 1,
  _ = (2 * Math._) / 3,
  _ = (2 * Math._) / 4.5,
  _ = (_) => {
    let _ = 7.5625,
      _ = 2.75;
    return _ < 1 / _
      ? _ * _ * _
      : _ < 2 / _
        ? _ * (_ -= 1.5 / _) * _ + 0.75
        : _ < 2.5 / _
          ? _ * (_ -= 2.25 / _) * _ + 0.9375
          : _ * (_ -= 2.625 / _) * _ + 0.984375;
  },
  _ = {
    linear: (_) => _,
    easeInQuad: (_) => _ * _,
    easeOutQuad: (_) => 1 - (1 - _) * (1 - _),
    easeInOutQuad: (_) => (_ < 0.5 ? 2 * _ * _ : 1 - (-2 * _ + 2) ** 2 / 2),
    easeInCubic: (_) => _ * _ * _,
    easeOutCubic: (_) => 1 - (1 - _) ** 3,
    easeInOutCubic: (_) =>
      _ < 0.5 ? 4 * _ * _ * _ : 1 - (-2 * _ + 2) ** 3 / 2,
    easeInQuart: (_) => _ * _ * _ * _,
    easeOutQuart: (_) => 1 - (1 - _) ** 4,
    easeInOutQuart: (_) =>
      _ < 0.5 ? 8 * _ * _ * _ * _ : 1 - (-2 * _ + 2) ** 4 / 2,
    easeInQuint: (_) => _ * _ * _ * _ * _,
    easeOutQuint: (_) => 1 - (1 - _) ** 5,
    easeInOutQuint: (_) =>
      _ < 0.5 ? 16 * _ * _ * _ * _ * _ : 1 - (-2 * _ + 2) ** 5 / 2,
    easeInSine: (_) => 1 - Math.cos((_ * Math._) / 2),
    easeOutSine: (_) => Math.sin((_ * Math._) / 2),
    easeInOutSine: (_) => -(Math.cos(Math._ * _) - 1) / 2,
    easeInExpo: (_) => (_ === 0 ? 0 : 2 ** (10 * _ - 10)),
    easeOutExpo: (_) => (_ === 1 ? 1 : 1 - 2 ** (-10 * _)),
    easeInOutExpo: (_) =>
      _ === 0
        ? 0
        : _ === 1
          ? 1
          : _ < 0.5
            ? 2 ** (20 * _ - 10) / 2
            : (2 - 2 ** (-20 * _ + 10)) / 2,
    easeInCirc: (_) => 1 - Math.sqrt(1 - _ ** 2),
    easeOutCirc: (_) => Math.sqrt(1 - (_ - 1) ** 2),
    easeInOutCirc: (_) =>
      _ < 0.5
        ? (1 - Math.sqrt(1 - (2 * _) ** 2)) / 2
        : (Math.sqrt(1 - (-2 * _ + 2) ** 2) + 1) / 2,
    easeInBack: (_) => _ * _ * _ * _ - _ * _ * _,
    easeOutBack: (_) => 1 + _ * (_ - 1) ** 3 + _ * (_ - 1) ** 2,
    easeInOutBack: (_) =>
      _ < 0.5
        ? ((2 * _) ** 2 * ((_ + 1) * 2 * _ - _)) / 2
        : ((2 * _ - 2) ** 2 * ((_ + 1) * (_ * 2 - 2) + _) + 2) / 2,
    easeInElastic: (_) =>
      _ === 0
        ? 0
        : _ === 1
          ? 1
          : -(2 ** (10 * _ - 10)) * Math.sin((_ * 10 - 10.75) * _),
    easeOutElastic: (_) =>
      _ === 0
        ? 0
        : _ === 1
          ? 1
          : 2 ** (-10 * _) * Math.sin((_ * 10 - 0.75) * _) + 1,
    easeInOutElastic: (_) =>
      _ === 0
        ? 0
        : _ === 1
          ? 1
          : _ < 0.5
            ? -(2 ** (20 * _ - 10) * Math.sin((20 * _ - 11.125) * _)) / 2
            : (2 ** (-20 * _ + 10) * Math.sin((20 * _ - 11.125) * _)) / 2 + 1,
    easeInBounce: (_) => 1 - _(1 - _),
    easeOutBounce: _,
    easeInOutBounce: (_) =>
      _ < 0.5 ? (1 - _(1 - 2 * _)) / 2 : (1 + _(2 * _ - 1)) / 2,
    steps: _,
  },
  _ = Symbol.for(`FluidValue.get`),
  _ = Symbol.for(`FluidValue.observers`),
  _ = (_) => !!(_ && _[_]),
  _ = (_) => (_ && _[_] ? _[_]() : _),
  _ = (_) => _[_] || null;
function _(_, _) {
  _.eventObserved ? _.eventObserved(_) : _(_);
}
function _(_, _) {
  let _ = _[_];
  _ &&
    _.forEach((_) => {
      _(_, _);
    });
}
var _ = class {
    constructor(_) {
      if (!_ && !(_ = this.get)) throw Error(`Unknown getter`);
      _(this, _);
    }
  },
  _ = (_, _) => _(_, _, _);
function _(_, _) {
  if (_[_]) {
    let _ = _[_];
    _ || _(_, _, (_ = new Set())),
      _.has(_) || (_.add(_), _.observerAdded && _.observerAdded(_.size, _));
  }
  return _;
}
function _(_, _) {
  let _ = _[_];
  if (_ && _.has(_)) {
    let _ = _.size - 1;
    _ ? _.delete(_) : (_[_] = null),
      _.observerRemoved && _.observerRemoved(_, _);
  }
}
var _ = (_, _, _) =>
    Object.defineProperty(_, _, {
      value: _,
      writable: !0,
      configurable: !0,
    }),
  _ = /[+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
  _ =
    /(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))/gi,
  _ = RegExp(`(${_.source})(%|[a-z]+)`, `i`),
  _ = /rgba\(([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+)\)/gi,
  _ = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/,
  _ = (_) => {
    let [_, _] = _(_);
    if (!_ || _()) return _;
    let _ = window
      .getComputedStyle(document.documentElement)
      .getPropertyValue(_);
    return _
      ? _.trim()
      : _ && _.startsWith(`--`)
        ? window
            .getComputedStyle(document.documentElement)
            .getPropertyValue(_) || _
        : _ && _.test(_)
          ? _(_)
          : _ || _;
  },
  _ = (_) => {
    let _ = _.exec(_);
    if (!_) return [,];
    let [, _, _] = _;
    return [_, _];
  },
  _,
  _ = (_, _, _, _, _) =>
    `rgba(${Math.round(_)}, ${Math.round(_)}, ${Math.round(_)}, ${_})`,
  _ = (_) => {
    _ ||= _ ? RegExp(`(${Object.keys(_).join(`|`)})(?!\\w)`, `g`) : /^\b$/;
    let _ = _.output.map((_) => _(_).replace(_, _).replace(_, _).replace(_, _)),
      _ = _.map((_) => _.match(_).map(Number)),
      _ = _[0]
        .map((_, _) =>
          _.map((_) => {
            if (!(_ in _))
              throw Error(`The arity of each "output" value must be equal`);
            return _[_];
          }),
        )
        .map((_) =>
          _({
            ..._,
            output: _,
          }),
        );
    return (_) => {
      let _ = !_.test(_[0]) && _.find((_) => _.test(_))?.replace(_, ``),
        _ = 0;
      return _[0].replace(_, () => `${_[_++](_)}${_ || ``}`).replace(_, _);
    };
  },
  _ = `react-spring: `,
  _ = (_) => {
    let _ = _,
      _ = !1;
    if (typeof _ != `function`)
      throw TypeError(`${_}once requires a function parameter`);
    return (..._) => {
      _ ||= (_(..._), !0);
    };
  },
  _ = _(console.warn);
function _() {
  _(`${_}The "interpolate" function is deprecated in v9 (use "to" instead)`);
}
var _ = _(console.warn);
function _() {
  _(
    `${_}Directly calling start instead of using the api object is deprecated in v9 (use ".start" instead), this will be removed in later 0.X.0 versions`,
  );
}
function _(_) {
  return (
    _.str(_) &&
    (_[0] == `#` || /\d/.test(_) || (!_() && _.test(_)) || _ in (_ || {}))
  );
}
var _ = _() ? _.useEffect : _.useLayoutEffect,
  _ = () => {
    let _ = (0, _.useRef)(!1);
    return (
      _(
        () => (
          (_.current = !0),
          () => {
            _.current = !1;
          }
        ),
        [],
      ),
      _
    );
  };
function _() {
  let _ = (0, _.useState)()[1],
    _ = _();
  return () => {
    _.current && _(Math.random());
  };
}
var _ = (_) => (0, _.useEffect)(_, _),
  _ = [];
function _(_) {
  let _ = (0, _.useRef)(void 0);
  return (
    (0, _.useEffect)(() => {
      _.current = _;
    }),
    _.current
  );
}
var _ = Symbol.for(`Animated:node`),
  _ = (_) => !!_ && _[_] === _,
  _ = (_) => _ && _[_],
  _ = (_, _) => _(_, _, _),
  _ = (_) => _ && _[_] && _[_].getPayload(),
  _ = class {
    constructor() {
      _(this, this);
    }
    getPayload() {
      return this.payload || [];
    }
  },
  _ = class _ extends _ {
    constructor(_) {
      super(),
        (this._value = _),
        (this.done = !0),
        (this.durationProgress = 0),
        _.num(this._value) && (this.lastPosition = this._value);
    }
    static create(_) {
      return new _(_);
    }
    getPayload() {
      return [this];
    }
    getValue() {
      return this._value;
    }
    setValue(_, _) {
      return (
        _.num(_) &&
          ((this.lastPosition = _),
          _ &&
            ((_ = Math.round(_ / _) * _),
            this.done && (this.lastPosition = _))),
        this._value === _ ? !1 : ((this._value = _), !0)
      );
    }
    reset() {
      let { done: _ } = this;
      (this.done = !1),
        _.num(this._value) &&
          ((this.elapsedTime = 0),
          (this.durationProgress = 0),
          (this.lastPosition = this._value),
          _ && (this.lastVelocity = null),
          (this._ = null));
    }
  },
  _ = class _ extends _ {
    constructor(_) {
      super(0),
        (this._string = null),
        (this._toString = _({
          output: [_, _],
        }));
    }
    static create(_) {
      return new _(_);
    }
    getValue() {
      return (this._string ??= this._toString(this._value));
    }
    setValue(_) {
      if (_.str(_)) {
        if (_ == this._string) return !1;
        (this._string = _), (this._value = 1);
      } else if (super.setValue(_)) this._string = null;
      else return !1;
      return !0;
    }
    reset(_) {
      _ &&
        (this._toString = _({
          output: [this.getValue(), _],
        })),
        (this._value = 0),
        super.reset();
    }
  },
  _ = {
    dependencies: null,
  },
  _ = class extends _ {
    constructor(_) {
      super(), (this.source = _), this.setValue(_);
    }
    getValue(_) {
      let _ = {};
      return (
        _(this.source, (_, _) => {
          _(_)
            ? (_[_] = _.getValue(_))
            : _(_)
              ? (_[_] = _(_))
              : _ || (_[_] = _);
        }),
        _
      );
    }
    setValue(_) {
      (this.source = _), (this.payload = this._makePayload(_));
    }
    reset() {
      this.payload && _(this.payload, (_) => _.reset());
    }
    _makePayload(_) {
      if (_) {
        let _ = new Set();
        return _(_, this._addToPayload, _), Array.from(_);
      }
    }
    _addToPayload(_) {
      _.dependencies && _(_) && _.dependencies.add(_);
      let _ = _(_);
      _ && _(_, (_) => this.add(_));
    }
  },
  _ = class _ extends _ {
    constructor(_) {
      super(_);
    }
    static create(_) {
      return new _(_);
    }
    getValue() {
      return this.source.map((_) => _.getValue());
    }
    setValue(_) {
      let _ = this.getPayload();
      return _.length == _.length
        ? _.map((_, _) => _.setValue(_[_])).some(Boolean)
        : (super.setValue(_.map(_)), !0);
    }
  };
function _(_) {
  return (_(_) ? _ : _).create(_);
}
function _(_) {
  let _ = _(_);
  return _ ? _.constructor : _.arr(_) ? _ : _(_) ? _ : _;
}
var _ = (_, _) => {
    let _ = !_.fun(_) || (_.prototype && _.prototype.isReactComponent);
    return (0, _.forwardRef)((_, _) => {
      let _ = (0, _.useRef)(null),
        _ =
          _ &&
          (0, _.useCallback)(
            (_) => {
              _.current = _(_, _);
            },
            [_],
          ),
        [_, _] = _(_, _),
        _ = _(),
        _ = () => {
          let _ = _.current;
          (_ && !_) ||
            ((_ ? _.applyAnimatedValues(_, _.getValue(!0)) : !1) === !1 && _());
        },
        _ = new _(_, _),
        _ = (0, _.useRef)(void 0);
      _(
        () => (
          (_.current = _),
          _(_, (_) => _(_, _)),
          () => {
            _.current &&
              (_(_.current.deps, (_) => _(_, _.current)),
              _.cancel(_.current.update));
          }
        ),
      ),
        (0, _.useEffect)(_, []),
        _(() => () => {
          let _ = _.current;
          _(_.deps, (_) => _(_, _));
        });
      let _ = _.getComponentProps(_.getValue());
      return _.createElement(_, {
        ..._,
        ref: _,
      });
    });
  },
  _ = class {
    constructor(_, _) {
      (this.update = _), (this.deps = _);
    }
    eventObserved(_) {
      _.type == `change` && _.write(this.update);
    }
  };
function _(_, _) {
  let _ = new Set();
  return (
    (_.dependencies = _),
    _.style &&
      (_ = {
        ..._,
        style: _.createAnimatedStyle(_.style),
      }),
    (_ = new _(_)),
    (_.dependencies = null),
    [_, _]
  );
}
function _(_, _) {
  return _ && (_.fun(_) ? _(_) : (_.current = _)), _;
}
var _ = Symbol.for(`AnimatedComponent`),
  _ = (
    _,
    {
      applyAnimatedValues: _ = () => !1,
      createAnimatedStyle: _ = (_) => new _(_),
      getComponentProps: _ = (_) => _,
    } = {},
  ) => {
    let _ = {
        applyAnimatedValues: _,
        createAnimatedStyle: _,
        getComponentProps: _,
      },
      _ = (_) => {
        let _ = _(_) || `Anonymous`;
        return (
          (_ = _.str(_) ? _[_] || (_[_] = _(_, _)) : _[_] || (_[_] = _(_, _))),
          (_.displayName = `Animated(${_})`),
          _
        );
      };
    return (
      _(_, (_, _) => {
        _.arr(_) && (_ = _(_)), (_[_] = _(_));
      }),
      {
        animated: _,
      }
    );
  },
  _ = (_) =>
    _.str(_)
      ? _
      : _ && _.str(_.displayName)
        ? _.displayName
        : (_.fun(_) && _.name) || null;
function _(_, ..._) {
  return _.fun(_) ? _(..._) : _;
}
var _ = (_, _) =>
    _ === !0 || !!(_ && _ && (_.fun(_) ? _(_) : _(_).includes(_))),
  _ = (_, _) => (_.obj(_) ? _ && _[_] : _),
  _ = (_, _) => (_.default === !0 ? _[_] : _.default ? _.default[_] : void 0),
  _ = (_) => _,
  _ = (_, _ = _) => {
    let _ = _;
    _.default && _.default !== !0 && ((_ = _.default), (_ = Object.keys(_)));
    let _ = {};
    for (let _ of _) {
      let _ = _(_[_], _);
      _.und(_) || (_[_] = _);
    }
    return _;
  },
  _ = [
    `config`,
    `onProps`,
    `onStart`,
    `onChange`,
    `onPause`,
    `onResume`,
    `onRest`,
  ],
  _ = {
    config: 1,
    from: 1,
    _: 1,
    ref: 1,
    loop: 1,
    reset: 1,
    pause: 1,
    cancel: 1,
    reverse: 1,
    immediate: 1,
    default: 1,
    delay: 1,
    onProps: 1,
    onStart: 1,
    onChange: 1,
    onPause: 1,
    onResume: 1,
    onRest: 1,
    onResolve: 1,
    items: 1,
    trail: 1,
    sort: 1,
    expires: 1,
    initial: 1,
    enter: 1,
    update: 1,
    leave: 1,
    children: 1,
    onDestroyed: 1,
    keys: 1,
    callId: 1,
    parentId: 1,
  };
function _(_) {
  let _ = {},
    _ = 0;
  if (
    (_(_, (_, _) => {
      _[_] || ((_[_] = _), _++);
    }),
    _)
  )
    return _;
}
function _(_) {
  let _ = _(_);
  if (_) {
    let _ = {
      _: _,
    };
    return _(_, (_, _) => _ in _ || (_[_] = _)), _;
  }
  return {
    ..._,
  };
}
function _(_) {
  return (
    (_ = _(_)),
    _.arr(_)
      ? _.map(_)
      : _(_)
        ? _.createStringInterpolator({
            range: [0, 1],
            output: [_, _],
          })(1)
        : _
  );
}
function _(_) {
  for (let _ in _) return !0;
  return !1;
}
function _(_) {
  return _.fun(_) || (_.arr(_) && _.obj(_[0]));
}
function _(_, _) {
  _.ref?.delete(_), _?.delete(_);
}
function _(_, _) {
  _ && _.ref !== _ && (_.ref?.delete(_), _.add(_), (_.ref = _));
}
var _ = {
    ...{
      default: {
        tension: 170,
        friction: 26,
      },
      gentle: {
        tension: 120,
        friction: 14,
      },
      wobbly: {
        tension: 180,
        friction: 12,
      },
      stiff: {
        tension: 210,
        friction: 20,
      },
      slow: {
        tension: 280,
        friction: 60,
      },
      molasses: {
        tension: 280,
        friction: 120,
      },
    }.default,
    mass: 1,
    damping: 1,
    easing: _.linear,
    clamp: !1,
  },
  _ = class {
    constructor() {
      (this.velocity = 0), Object.assign(this, _);
    }
  };
function _(_, _, _) {
  _ &&
    ((_ = {
      ..._,
    }),
    _(_, _),
    (_ = {
      ..._,
      ..._,
    })),
    _(_, _),
    Object.assign(_, _);
  for (let _ in _) _[_] ?? (_[_] = _[_]);
  let { frequency: _, damping: _ } = _,
    { mass: _ } = _;
  return (
    _.und(_) ||
      (_ < 0.01 && (_ = 0.01),
      _ < 0 && (_ = 0),
      (_.tension = ((2 * Math._) / _) ** 2 * _),
      (_.friction = (4 * Math._ * _ * _) / _)),
    _
  );
}
function _(_, _) {
  if (!_.und(_.decay)) _.duration = void 0;
  else {
    let _ = !_.und(_.tension) || !_.und(_.friction);
    (_ || !_.und(_.frequency) || !_.und(_.damping) || !_.und(_.mass)) &&
      ((_.duration = void 0), (_.decay = void 0)),
      _ && (_.frequency = void 0);
  }
}
var _ = [],
  _ = class {
    constructor() {
      (this.changed = !1),
        (this.values = _),
        (this.toValues = null),
        (this.fromValues = _),
        (this.config = new _()),
        (this.immediate = !1);
    }
  };
function _(_, { key: _, props: _, defaultProps: _, state: _, actions: _ }) {
  return new Promise((_, _) => {
    let _,
      _,
      _ = _(_.cancel ?? _?.cancel, _);
    if (_) _();
    else {
      _.und(_.pause) || (_.paused = _(_.pause, _));
      let _ = _?.pause;
      _ !== !0 && (_ = _.paused || _(_, _)),
        (_ = _(_.delay || 0, _)),
        _ ? (_.resumeQueue.add(_), _.pause()) : (_.resume(), _());
    }
    function _() {
      _.resumeQueue.add(_),
        _.timeouts.delete(_),
        _.cancel(),
        (_ = _.time - _.now());
    }
    function _() {
      _ > 0 && !_.skipAnimation
        ? ((_.delayed = !0),
          (_ = _.setTimeout(_, _)),
          _.pauseQueue.add(_),
          _.timeouts.add(_))
        : _();
    }
    function _() {
      (_.delayed &&= !1),
        _.pauseQueue.delete(_),
        _.timeouts.delete(_),
        _ <= (_.cancelId || 0) && (_ = !0);
      try {
        _.start(
          {
            ..._,
            callId: _,
            cancel: _,
          },
          _,
        );
      } catch (_) {
        _(_);
      }
    }
  });
}
var _ = (_, _) =>
    _.length == 1
      ? _[0]
      : _.some((_) => _.cancelled)
        ? _(_.get())
        : _.every((_) => _.noop)
          ? _(_.get())
          : _(
              _.get(),
              _.every((_) => _.finished),
            ),
  _ = (_) => ({
    value: _,
    noop: !0,
    finished: !0,
    cancelled: !1,
  }),
  _ = (_, _, _ = !1) => ({
    value: _,
    finished: _,
    cancelled: _,
  }),
  _ = (_) => ({
    value: _,
    cancelled: !0,
    finished: !1,
  });
function _(_, _, _, _) {
  let { callId: _, parentId: _, onRest: _ } = _,
    { asyncTo: _, promise: _ } = _;
  return !_ && _ === _ && !_.reset
    ? _
    : (_.promise = (async () => {
        (_.asyncId = _), (_.asyncTo = _);
        let _ = _(_, (_, _) => (_ === `onRest` ? void 0 : _)),
          _,
          _,
          _ = new Promise((_, _) => ((_ = _), (_ = _))),
          _ = (_) => {
            let _ =
              (_ <= (_.cancelId || 0) && _(_)) || (_ !== _.asyncId && _(_, !1));
            if (_) throw ((_.result = _), _(_), _);
          },
          _ = (_, _) => {
            let _ = new _(),
              _ = new _();
            return (async () => {
              if (_.skipAnimation) throw (_(_), (_.result = _(_, !1)), _(_), _);
              _(_);
              let _ = _.obj(_)
                ? {
                    ..._,
                  }
                : {
                    ..._,
                    _: _,
                  };
              (_.parentId = _),
                _(_, (_, _) => {
                  _.und(_[_]) && (_[_] = _);
                });
              let _ = await _.start(_);
              return (
                _(_),
                _.paused &&
                  (await new Promise((_) => {
                    _.resumeQueue.add(_);
                  })),
                _
              );
            })();
          },
          _;
        if (_.skipAnimation) return _(_), _(_, !1);
        try {
          let _;
          (_ = _.arr(_)
            ? (async (_) => {
                for (let _ of _) await _(_);
              })(_)
            : Promise.resolve(_(_, _.stop.bind(_)))),
            await Promise.all([_.then(_), _]),
            (_ = _(_.get(), !0, !1));
        } catch (_) {
          if (_ instanceof _) _ = _.result;
          else if (_ instanceof _) _ = _.result;
          else throw _;
        } finally {
          _ == _.asyncId &&
            ((_.asyncId = _),
            (_.asyncTo = _ ? _ : void 0),
            (_.promise = _ ? _ : void 0));
        }
        return (
          _.fun(_) &&
            _.batchedUpdates(() => {
              _(_, _, _.item);
            }),
          _
        );
      })());
}
function _(_, _) {
  _(_.timeouts, (_) => _.cancel()),
    _.pauseQueue.clear(),
    _.resumeQueue.clear(),
    (_.asyncId = _.asyncTo = _.promise = void 0),
    _ && (_.cancelId = _);
}
var _ = class extends Error {
    constructor() {
      super(
        "An async animation has been interrupted. You see this error because you forgot to use `await` or `.catch(...)` on its returned promise.",
      );
    }
  },
  _ = class extends Error {
    constructor() {
      super(`SkipAnimationSignal`);
    }
  },
  _ = (_) => _ instanceof _,
  _ = 1,
  _ = class extends _ {
    constructor() {
      super(...arguments), (this._ = _++), (this._priority = 0);
    }
    get priority() {
      return this._priority;
    }
    set priority(_) {
      this._priority != _ && ((this._priority = _), this._onPriorityChange(_));
    }
    get() {
      let _ = _(this);
      return _ && _.getValue();
    }
    to(..._) {
      return _._(this, _);
    }
    interpolate(..._) {
      return _(), _._(this, _);
    }
    toJSON() {
      return this.get();
    }
    observerAdded(_) {
      _ == 1 && this._attach();
    }
    observerRemoved(_) {
      _ == 0 && this._detach();
    }
    _attach() {}
    _detach() {}
    _onChange(_, _ = !1) {
      _(this, {
        type: `change`,
        parent: this,
        value: _,
        idle: _,
      });
    }
    _onPriorityChange(_) {
      this.idle || _.sort(this),
        _(this, {
          type: `priority`,
          parent: this,
          priority: _,
        });
    }
  },
  _ = Symbol.for(`SpringPhase`),
  _ = 1,
  _ = 2,
  _ = 4,
  _ = (_) => (_[_] & _) > 0,
  _ = (_) => (_[_] & _) > 0,
  _ = (_) => (_[_] & _) > 0,
  _ = (_, _) => (_ ? (_[_] |= _ | _) : (_[_] &= ~_)),
  _ = (_, _) => (_ ? (_[_] |= _) : (_[_] &= ~_)),
  _ = class extends _ {
    constructor(_, _) {
      if (
        (super(),
        (this.animation = new _()),
        (this.defaultProps = {}),
        (this._state = {
          paused: !1,
          delayed: !1,
          pauseQueue: new Set(),
          resumeQueue: new Set(),
          timeouts: new Set(),
        }),
        (this._pendingCalls = new Set()),
        (this._lastCallId = 0),
        (this._lastToId = 0),
        (this._memoizedDuration = 0),
        !_.und(_) || !_.und(_))
      ) {
        let _ = _.obj(_)
          ? {
              ..._,
            }
          : {
              ..._,
              from: _,
            };
        _.und(_.default) && (_.default = !0), this.start(_);
      }
    }
    get idle() {
      return !(_(this) || this._state.asyncTo) || _(this);
    }
    get goal() {
      return _(this.animation._);
    }
    get velocity() {
      let _ = _(this);
      return _ instanceof _
        ? _.lastVelocity || 0
        : _.getPayload().map((_) => _.lastVelocity || 0);
    }
    get hasAnimated() {
      return _(this);
    }
    get isAnimating() {
      return _(this);
    }
    get isPaused() {
      return _(this);
    }
    get isDelayed() {
      return this._state.delayed;
    }
    advance(_) {
      let _ = !0,
        _ = !1,
        _ = this.animation,
        { toValues: _ } = _,
        { config: _ } = _,
        _ = _(_._);
      !_ && _(_._) && (_ = _(_(_._))),
        _.values.forEach((_, _) => {
          if (_.done) return;
          let _ = _.constructor == _ ? 1 : _ ? _[_].lastPosition : _[_],
            _ = _.immediate,
            _ = _;
          if (!_) {
            if (((_ = _.lastPosition), _.tension <= 0)) {
              _.done = !0;
              return;
            }
            let _ = (_.elapsedTime += _),
              _ = _.fromValues[_],
              _ =
                _._ == null
                  ? (_._ = _.arr(_.velocity) ? _.velocity[_] : _.velocity)
                  : _._,
              _,
              _ =
                _.precision ||
                (_ == _ ? 0.005 : Math.min(1, Math.abs(_ - _) * 0.001));
            if (!_.und(_.duration)) {
              let _ = 1;
              _.duration > 0 &&
                (this._memoizedDuration !== _.duration &&
                  ((this._memoizedDuration = _.duration),
                  _.durationProgress > 0 &&
                    ((_.elapsedTime = _.duration * _.durationProgress),
                    (_ = _.elapsedTime += _))),
                (_ = (_.progress || 0) + _ / this._memoizedDuration),
                (_ = _ > 1 ? 1 : _ < 0 ? 0 : _),
                (_.durationProgress = _)),
                (_ = _ + _.easing(_) * (_ - _)),
                (_ = (_ - _.lastPosition) / _),
                (_ = _ == 1);
            } else if (_.decay) {
              let _ = _.decay === !0 ? 0.998 : _.decay,
                _ = Math.exp(-(1 - _) * _);
              (_ = _ + (_ / (1 - _)) * (1 - _)),
                (_ = Math.abs(_.lastPosition - _) <= _),
                (_ = _ * _);
            } else {
              _ = _.lastVelocity == null ? _ : _.lastVelocity;
              let _ = _.restVelocity || _ / 10,
                _ = _.clamp ? 0 : _.bounce,
                _ = !_.und(_),
                _ = _ == _ ? _._ > 0 : _ < _,
                _,
                _ = !1,
                _ = Math.ceil(_ / 1);
              for (
                let _ = 0;
                _ < _ &&
                ((_ = Math.abs(_) > _),
                !(!_ && ((_ = Math.abs(_ - _) <= _), _)));
                ++_
              ) {
                _ && ((_ = _ == _ || _ > _ == _), _ && ((_ = -_ * _), (_ = _)));
                let _ =
                  (-_.tension * 1e-6 * (_ - _) + -_.friction * 0.001 * _) /
                  _.mass;
                (_ += _ * 1), (_ += _ * 1);
              }
            }
            (_.lastVelocity = _),
              Number.isNaN(_) &&
                (console.warn(`Got NaN while animating:`, this), (_ = !0));
          }
          _ && !_[_].done && (_ = !1),
            _ ? (_.done = !0) : (_ = !1),
            _.setValue(_, _.round) && (_ = !0);
        });
      let _ = _(this),
        _ = _.getValue();
      if (_) {
        let _ = _(_._);
        (_ !== _ || _) && !_.decay
          ? (_.setValue(_), this._onChange(_))
          : _ && _.decay && this._onChange(_),
          this._stop();
      } else _ && this._onChange(_);
    }
    set(_) {
      return (
        _.batchedUpdates(() => {
          this._stop(), this._focus(_), this._set(_);
        }),
        this
      );
    }
    pause() {
      this._update({
        pause: !0,
      });
    }
    resume() {
      this._update({
        pause: !1,
      });
    }
    finish() {
      if (_(this)) {
        let { _: _, config: _ } = this.animation;
        _.batchedUpdates(() => {
          this._onStart(), _.decay || this._set(_, !1), this._stop();
        });
      }
      return this;
    }
    update(_) {
      return (this.queue ||= []).push(_), this;
    }
    start(_, _) {
      let _;
      return (
        _.und(_)
          ? ((_ = this.queue || []), (this.queue = []))
          : (_ = [
              _.obj(_)
                ? _
                : {
                    ..._,
                    _: _,
                  },
            ]),
        Promise.all(_.map((_) => this._update(_))).then((_) => _(this, _))
      );
    }
    stop(_) {
      let { _: _ } = this.animation;
      return (
        this._focus(this.get()),
        _(this._state, _ && this._lastCallId),
        _.batchedUpdates(() => this._stop(_, _)),
        this
      );
    }
    reset() {
      this._update({
        reset: !0,
      });
    }
    eventObserved(_) {
      _.type == `change`
        ? this._start()
        : _.type == `priority` && (this.priority = _.priority + 1);
    }
    _prepareNode(_) {
      let _ = this.key || ``,
        { _: _, from: _ } = _;
      (_ = _.obj(_) ? _[_] : _),
        (_ == null || _(_)) && (_ = void 0),
        (_ = _.obj(_) ? _[_] : _),
        (_ ??= void 0);
      let _ = {
        _: _,
        from: _,
      };
      return (
        _(this) ||
          (_.reverse && ([_, _] = [_, _]),
          (_ = _(_)),
          _.und(_) ? _(this) || this._set(_) : this._set(_)),
        _
      );
    }
    _update({ ..._ }, _) {
      let { key: _, defaultProps: _ } = this;
      _.default &&
        Object.assign(
          _,
          _(_, (_, _) => (/^on/.test(_) ? _(_, _) : _)),
        ),
        _(this, _, `onProps`),
        _(this, `onProps`, _, this);
      let _ = this._prepareNode(_);
      if (Object.isFrozen(this))
        throw Error(
          "Cannot animate a `SpringValue` object that is frozen. Did you forget to pass your component to `animated(...)` before animating its props?",
        );
      let _ = this._state;
      return _(++this._lastCallId, {
        key: _,
        props: _,
        defaultProps: _,
        state: _,
        actions: {
          pause: () => {
            _(this) ||
              (_(this, !0),
              _(_.pauseQueue),
              _(this, `onPause`, _(this, _(this, this.animation._)), this));
          },
          resume: () => {
            _(this) &&
              (_(this, !1),
              _(this) && this._resume(),
              _(_.resumeQueue),
              _(this, `onResume`, _(this, _(this, this.animation._)), this));
          },
          start: this._merge.bind(this, _),
        },
      }).then((_) => {
        if (_.loop && _.finished && !(_ && _.noop)) {
          let _ = _(_);
          if (_) return this._update(_, !0);
        }
        return _;
      });
    }
    _merge(_, _, _) {
      if (_.cancel) return this.stop(!0), _(_(this));
      let _ = !_.und(_._),
        _ = !_.und(_.from);
      if (_ || _)
        if (_.callId > this._lastToId) this._lastToId = _.callId;
        else return _(_(this));
      let { key: _, defaultProps: _, animation: _ } = this,
        { _: _, from: _ } = _,
        { _: _ = _, from: _ = _ } = _;
      _ && !_ && (!_.default || _.und(_)) && (_ = _),
        _.reverse && ([_, _] = [_, _]);
      let _ = !_(_, _);
      _ && (_.from = _), (_ = _(_));
      let _ = !_(_, _);
      _ && this._focus(_);
      let _ = _(_._),
        { config: _ } = _,
        { decay: _, velocity: _ } = _;
      (_ || _) && (_.velocity = 0),
        _.config &&
          !_ &&
          _(_, _(_.config, _), _.config === _.config ? void 0 : _(_.config, _));
      let _ = _(this);
      if (!_ || _.und(_)) return _(_(this, !0));
      let _ = _.und(_.reset) ? _ && !_.default : !_.und(_) && _(_.reset, _),
        _ = _ ? _ : this.get(),
        _ = _(_),
        _ = _.num(_) || _.arr(_) || _(_),
        _ = !_ && (!_ || _(_.immediate || _.immediate, _));
      if (_) {
        let _ = _(_);
        if (_ !== _.constructor)
          if (_) _ = this._set(_);
          else
            throw Error(
              `Cannot animate between ${_.constructor.name} and ${_.name}, as the "to" prop suggests`,
            );
      }
      let _ = _.constructor,
        _ = _(_),
        _ = !1;
      if (!_) {
        let _ = _ || (!_(this) && _);
        (_ || _) && ((_ = _(_(_), _)), (_ = !_)),
          ((!_(_.immediate, _) && !_) || !_(_.decay, _) || !_(_.velocity, _)) &&
            (_ = !0);
      }
      if (
        (_ && _(this) && (_.changed && !_ ? (_ = !0) : _ || this._stop(_)),
        !_ &&
          ((_ || _(_)) &&
            ((_.values = _.getPayload()),
            (_.toValues = _(_) ? null : _ == _ ? [1] : _(_))),
          _.immediate != _ && ((_.immediate = _), !_ && !_ && this._set(_)),
          _))
      ) {
        let { onRest: _ } = _;
        _(_, (_) => _(this, _, _));
        let _ = _(this, _(this, _));
        _(this._pendingCalls, _),
          this._pendingCalls.add(_),
          _.changed &&
            _.batchedUpdates(() => {
              (_.changed = !_),
                _?.(_, this),
                _ ? _(_.onRest, _) : _.onStart?.(_, this);
            });
      }
      _ && this._set(_),
        _
          ? _(_(_._, _, this._state, this))
          : _
            ? this._start()
            : _(this) && !_
              ? this._pendingCalls.add(_)
              : _(_(_));
    }
    _focus(_) {
      let _ = this.animation;
      _ !== _._ &&
        (_(this) && this._detach(), (_._ = _), _(this) && this._attach());
    }
    _attach() {
      let _ = 0,
        { _: _ } = this.animation;
      _(_) && (_(_, this), _(_) && (_ = _.priority + 1)), (this.priority = _);
    }
    _detach() {
      let { _: _ } = this.animation;
      _(_) && _(_, this);
    }
    _set(_, _ = !0) {
      let _ = _(_);
      if (!_.und(_)) {
        let _ = _(this);
        if (!_ || !_(_, _.getValue())) {
          let _ = _(_);
          !_ || _.constructor != _ ? _(this, _.create(_)) : _.setValue(_),
            _ &&
              _.batchedUpdates(() => {
                this._onChange(_, _);
              });
        }
      }
      return _(this);
    }
    _onStart() {
      let _ = this.animation;
      _.changed ||
        ((_.changed = !0), _(this, `onStart`, _(this, _(this, _._)), this));
    }
    _onChange(_, _) {
      _ || (this._onStart(), _(this.animation.onChange, _, this)),
        _(this.defaultProps.onChange, _, this),
        super._onChange(_, _);
    }
    _start() {
      let _ = this.animation;
      _(this).reset(_(_._)),
        _.immediate || (_.fromValues = _.values.map((_) => _.lastPosition)),
        _(this) || (_(this, !0), _(this) || this._resume());
    }
    _resume() {
      _.skipAnimation ? this.finish() : _.start(this);
    }
    _stop(_, _) {
      if (_(this)) {
        _(this, !1);
        let _ = this.animation;
        _(_.values, (_) => {
          _.done = !0;
        }),
          _.toValues && (_.onChange = _.onPause = _.onResume = void 0),
          _(this, {
            type: `idle`,
            parent: this,
          });
        let _ = _ ? _(this.get()) : _(this.get(), _(this, _ ?? _._));
        _(this._pendingCalls, _),
          _.changed && ((_.changed = !1), _(this, `onRest`, _, this));
      }
    }
  };
function _(_, _) {
  let _ = _(_);
  return _(_(_.get()), _);
}
function _(_, _ = _.loop, _ = _._) {
  let _ = _(_);
  if (_) {
    let _ = _ !== !0 && _(_),
      _ = (_ || _).reverse,
      _ = !_ || _.reset;
    return _({
      ..._,
      loop: _,
      default: !1,
      pause: void 0,
      _: !_ || _(_) ? _ : void 0,
      from: _ ? _.from : void 0,
      reset: _,
      ..._,
    });
  }
}
function _(_) {
  let { _: _, from: _ } = (_ = _(_)),
    _ = new Set();
  return (
    _.obj(_) && _(_, _),
    _.obj(_) && _(_, _),
    (_.keys = _.size ? Array.from(_) : null),
    _
  );
}
function _(_) {
  let _ = _(_);
  return _.und(_.default) && (_.default = _(_)), _;
}
function _(_, _) {
  _(_, (_, _) => _ != null && _.add(_));
}
var _ = [`onStart`, `onRest`, `onChange`, `onPause`, `onResume`];
function _(_, _, _) {
  _.animation[_] = _[_] === _(_, _) ? void 0 : _(_[_], _.key);
}
function _(_, _, ..._) {
  _.animation[_]?.(..._), _.defaultProps[_]?.(..._);
}
var _ = [`onStart`, `onChange`, `onRest`],
  _ = 1,
  _ = class {
    constructor(_, _) {
      (this._ = _++),
        (this.springs = {}),
        (this.queue = []),
        (this._lastAsyncId = 0),
        (this._active = new Set()),
        (this._changed = new Set()),
        (this._started = !1),
        (this._state = {
          paused: !1,
          pauseQueue: new Set(),
          resumeQueue: new Set(),
          timeouts: new Set(),
        }),
        (this._events = {
          onStart: new Map(),
          onChange: new Map(),
          onRest: new Map(),
        }),
        (this._onFrame = this._onFrame.bind(this)),
        _ && (this._flush = _),
        _ &&
          this.start({
            default: !0,
            ..._,
          });
    }
    get idle() {
      return (
        !this._state.asyncTo &&
        Object.values(this.springs).every(
          (_) => _.idle && !_.isDelayed && !_.isPaused,
        )
      );
    }
    get item() {
      return this._item;
    }
    set item(_) {
      this._item = _;
    }
    get() {
      let _ = {};
      return this.each((_, _) => (_[_] = _.get())), _;
    }
    set(_) {
      for (let _ in _) {
        let _ = _[_];
        _.und(_) || this.springs[_].set(_);
      }
    }
    update(_) {
      return _ && this.queue.push(_(_)), this;
    }
    start(_) {
      let { queue: _ } = this;
      return (
        _ ? (_ = _(_).map(_)) : (this.queue = []),
        this._flush ? this._flush(this, _) : (_(this, _), _(this, _))
      );
    }
    stop(_, _) {
      if ((_ !== !!_ && (_ = _), _)) {
        let _ = this.springs;
        _(_(_), (_) => _[_].stop(!!_));
      } else _(this._state, this._lastAsyncId), this.each((_) => _.stop(!!_));
      return this;
    }
    pause(_) {
      if (_.und(_))
        this.start({
          pause: !0,
        });
      else {
        let _ = this.springs;
        _(_(_), (_) => _[_].pause());
      }
      return this;
    }
    resume(_) {
      if (_.und(_))
        this.start({
          pause: !1,
        });
      else {
        let _ = this.springs;
        _(_(_), (_) => _[_].resume());
      }
      return this;
    }
    each(_) {
      _(this.springs, _);
    }
    _onFrame() {
      let { onStart: _, onChange: _, onRest: _ } = this._events,
        _ = this._active.size > 0,
        _ = this._changed.size > 0;
      ((_ && !this._started) || (_ && !this._started)) &&
        ((this._started = !0),
        _(_, ([_, _]) => {
          (_.value = this.get()), _(_, this, this._item);
        }));
      let _ = !_ && this._started,
        _ = _ || (_ && _.size) ? this.get() : null;
      _ &&
        _.size &&
        _(_, ([_, _]) => {
          (_.value = _), _(_, this, this._item);
        }),
        _ &&
          ((this._started = !1),
          _(_, ([_, _]) => {
            (_.value = _), _(_, this, this._item);
          }));
    }
    eventObserved(_) {
      if (_.type == `change`)
        this._changed.add(_.parent), _.idle || this._active.add(_.parent);
      else if (_.type == `idle`) this._active.delete(_.parent);
      else return;
      _.onFrame(this._onFrame);
    }
  };
function _(_, _) {
  return Promise.all(_.map((_) => _(_, _))).then((_) => _(_, _));
}
async function _(_, _, _) {
  let { keys: _, _: _, from: _, loop: _, onRest: _, onResolve: _ } = _,
    _ = _.obj(_.default) && _.default;
  _ && (_.loop = !1), _ === !1 && (_._ = null), _ === !1 && (_.from = null);
  let _ = _.arr(_) || _.fun(_) ? _ : void 0;
  _
    ? ((_._ = void 0), (_.onRest = void 0), _ && (_.onRest = void 0))
    : _(_, (_) => {
        let _ = _[_];
        if (_.fun(_)) {
          let _ = _._events[_];
          (_[_] = ({ finished: _, cancelled: _ }) => {
            let _ = _.get(_);
            _
              ? (_ || (_.finished = !1), _ && (_.cancelled = !0))
              : _.set(_, {
                  value: null,
                  finished: _ || !1,
                  cancelled: _ || !1,
                });
          }),
            _ && (_[_] = _[_]);
        }
      });
  let _ = _._state;
  _.pause === !_.paused
    ? ((_.paused = _.pause), _(_.pause ? _.pauseQueue : _.resumeQueue))
    : _.paused && (_.pause = !0);
  let _ = (_ || Object.keys(_.springs)).map((_) => _.springs[_].start(_)),
    _ = _.cancel === !0 || _(_, `cancel`) === !0;
  (_ || (_ && _.asyncId)) &&
    _.push(
      _(++_._lastAsyncId, {
        props: _,
        state: _,
        actions: {
          pause: _,
          resume: _,
          start(_, _) {
            _
              ? (_(_, _._lastAsyncId), _(_(_)))
              : ((_.onRest = _), _(_(_, _, _, _)));
          },
        },
      }),
    ),
    _.paused &&
      (await new Promise((_) => {
        _.resumeQueue.add(_);
      }));
  let _ = _(_, await Promise.all(_));
  if (_ && _.finished && !(_ && _.noop)) {
    let _ = _(_, _, _);
    if (_) return _(_, [_]), _(_, _, !0);
  }
  return _ && _.batchedUpdates(() => _(_, _, _.item)), _;
}
function _(_, _) {
  let _ = {
    ..._.springs,
  };
  return (
    _ &&
      _(_(_), (_) => {
        _.und(_.keys) && (_ = _(_)),
          _.obj(_._) ||
            (_ = {
              ..._,
              _: void 0,
            }),
          _(_, _, (_) => _(_));
      }),
    _(_, _),
    _
  );
}
function _(_, _) {
  _(_, (_, _) => {
    _.springs[_] || ((_.springs[_] = _), _(_, _));
  });
}
function _(_, _) {
  let _ = new _();
  return (_.key = _), _ && _(_, _), _;
}
function _(_, _, _) {
  _.keys &&
    _(_.keys, (_) => {
      (_[_] || (_[_] = _(_)))._prepareNode(_);
    });
}
function _(_, _) {
  _(_, (_) => {
    _(_.springs, _, (_) => _(_, _));
  });
}
var _ = _.createContext({
    pause: !1,
    immediate: !1,
  }),
  _ = () => {
    let _ = [],
      _ = function (_) {
        _();
        let _ = [];
        return (
          _(_, (_, _) => {
            if (_.und(_)) _.push(_.start());
            else {
              let _ = _(_, _, _);
              _ && _.push(_.start(_));
            }
          }),
          _
        );
      };
    (_.current = _),
      (_.add = function (_) {
        _.includes(_) || _.push(_);
      }),
      (_.delete = function (_) {
        let _ = _.indexOf(_);
        ~_ && _.splice(_, 1);
      }),
      (_.pause = function () {
        return _(_, (_) => _.pause(...arguments)), this;
      }),
      (_.resume = function () {
        return _(_, (_) => _.resume(...arguments)), this;
      }),
      (_.set = function (_) {
        _(_, (_, _) => {
          let _ = _.fun(_) ? _(_, _) : _;
          _ && _.set(_);
        });
      }),
      (_.start = function (_) {
        let _ = [];
        return (
          _(_, (_, _) => {
            if (_.und(_)) _.push(_.start());
            else {
              let _ = this._getProps(_, _, _);
              _ && _.push(_.start(_));
            }
          }),
          _
        );
      }),
      (_.stop = function () {
        return _(_, (_) => _.stop(...arguments)), this;
      }),
      (_.update = function (_) {
        return _(_, (_, _) => _.update(this._getProps(_, _, _))), this;
      });
    let _ = function (_, _, _) {
      return _.fun(_) ? _(_, _) : _;
    };
    return (_._getProps = _), _;
  };
function _(_, _, _) {
  let _ = _.fun(_) && _;
  _ && !_ && (_ = []);
  let _ = (0, _.useMemo)(() => (_ || arguments.length == 3 ? _() : void 0), []),
    _ = (0, _.useRef)(0),
    _ = _(),
    _ = (0, _.useMemo)(
      () => ({
        ctrls: [],
        queue: [],
        flush(_, _) {
          let _ = _(_, _);
          return _.current > 0 &&
            !_.queue.length &&
            !Object.keys(_).some((_) => !_.springs[_])
            ? _(_, _)
            : new Promise((_) => {
                _(_, _),
                  _.queue.push(() => {
                    _(_(_, _));
                  }),
                  _();
              });
        },
      }),
      [],
    ),
    _ = (0, _.useRef)([..._.ctrls]),
    _ = (0, _.useRef)([]),
    _ = _(_) || 0;
  (0, _.useMemo)(() => {
    _(_.current.slice(_, _), (_) => {
      _(_, _), _.stop(!0);
    }),
      (_.current.length = _),
      _(_, _);
  }, [_]),
    (0, _.useMemo)(() => {
      _(0, Math.min(_, _));
    }, _);
  function _(_, _) {
    for (let _ = _; _ < _; _++) {
      let _ = _.current[_] || (_.current[_] = new _(null, _.flush)),
        _ = _ ? _(_, _) : _[_];
      _ && (_.current[_] = _(_));
    }
  }
  let _ = _.current.map((_, _) => _(_, _.current[_])),
    _ = (0, _.useContext)(_),
    _ = _ !== _(_) && _(_);
  _(() => {
    _.current++, (_.ctrls = _.current);
    let { queue: _ } = _;
    _.length && ((_.queue = []), _(_, (_) => _())),
      _(_.current, (_, _) => {
        _?.add(_),
          _ &&
            _.start({
              default: _,
            });
        let _ = _.current[_];
        _ && (_(_, _.ref), _.ref ? _.queue.push(_) : _.start(_));
      });
  }),
    _(() => () => {
      _(_.ctrls, (_) => _.stop(!0));
    });
  let _ = _.map((_) => ({
    ..._,
  }));
  return _ ? [_, _] : _;
}
function _(_, _) {
  let _ = _.fun(_),
    [[_], _] = _(1, _ ? _ : [_], _ ? _ || [] : _);
  return _ || arguments.length == 2 ? [_, _] : _;
}
var _ = class extends _ {
  constructor(_, _) {
    super(),
      (this.source = _),
      (this.idle = !0),
      (this._active = new Set()),
      (this.calc = _(..._));
    let _ = this._get(),
      _ = _(_);
    _(this, _.create(_));
  }
  advance(_) {
    let _ = this._get();
    _(_, this.get()) || (_(this).setValue(_), this._onChange(_, this.idle)),
      !this.idle && _(this._active) && _(this);
  }
  _get() {
    let _ = _.arr(this.source) ? this.source.map(_) : _(_(this.source));
    return this.calc(..._);
  }
  _start() {
    this.idle &&
      !_(this._active) &&
      ((this.idle = !1),
      _(_(this), (_) => {
        _.done = !1;
      }),
      _.skipAnimation
        ? (_.batchedUpdates(() => this.advance()), _(this))
        : _.start(this));
  }
  _attach() {
    let _ = 1;
    _(_(this.source), (_) => {
      _(_) && _(_, this),
        _(_) &&
          (_.idle || this._active.add(_), (_ = Math.max(_, _.priority + 1)));
    }),
      (this.priority = _),
      this._start();
  }
  _detach() {
    _(_(this.source), (_) => {
      _(_) && _(_, this);
    }),
      this._active.clear(),
      _(this);
  }
  eventObserved(_) {
    _.type == `change`
      ? _.idle
        ? this.advance()
        : (this._active.add(_.parent), this._start())
      : _.type == `idle`
        ? this._active.delete(_.parent)
        : _.type == `priority` &&
          (this.priority = _(this.source).reduce(
            (_, _) => Math.max(_, (_(_) ? _.priority : 0) + 1),
            0,
          ));
  }
};
function _(_) {
  return _.idle !== !1;
}
function _(_) {
  return !_.size || Array.from(_).every(_);
}
function _(_) {
  _.idle ||
    ((_.idle = !0),
    _(_(_), (_) => {
      _.done = !0;
    }),
    _(_, {
      type: `idle`,
      parent: _,
    }));
}
_.assign({
  createStringInterpolator: _,
  _: (_, _) => new _(_, _),
}),
  _.advance;
var _ = _(_(), 1),
  _ = /^--/;
function _(_, _) {
  return _ == null || typeof _ == `boolean` || _ === ``
    ? ``
    : typeof _ == `number` &&
        _ !== 0 &&
        !_.test(_) &&
        !(_.hasOwnProperty(_) && _[_])
      ? _ + `px`
      : (`` + _).trim();
}
var _ = {};
function _(_, _) {
  if (!_.nodeType || !_.setAttribute) return !1;
  let _ =
      _.nodeName === `filter` ||
      (_.parentNode && _.parentNode.nodeName === `filter`),
    {
      className: _,
      style: _,
      children: _,
      scrollTop: _,
      scrollLeft: _,
      viewBox: _,
      ..._
    } = _,
    _ = Object.values(_),
    _ = Object.keys(_).map((_) =>
      _ || _.hasAttribute(_)
        ? _
        : _[_] || (_[_] = _.replace(/([A-Z])/g, (_) => `-` + _.toLowerCase())),
    );
  _ !== void 0 && (_.textContent = _);
  for (let _ in _)
    if (_.hasOwnProperty(_)) {
      let _ = _(_, _[_]);
      _.test(_) ? _.style.setProperty(_, _) : (_.style[_] = _);
    }
  _.forEach((_, _) => {
    _.setAttribute(_, _[_]);
  }),
    _ !== void 0 && (_.className = _),
    _ !== void 0 && (_.scrollTop = _),
    _ !== void 0 && (_.scrollLeft = _),
    _ !== void 0 && _.setAttribute(`viewBox`, _);
}
var _ = {
    animationIterationCount: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  _ = (_, _) => _ + _.charAt(0).toUpperCase() + _.substring(1),
  _ = [`Webkit`, `Ms`, `Moz`, `O`];
_ = Object.keys(_).reduce(
  (_, _) => (_.forEach((_) => (_[_(_, _)] = _[_])), _),
  _,
);
var _ = /^(matrix|translate|scale|rotate|skew)/,
  _ = /^(translate)/,
  _ = /^(rotate|skew)/,
  _ = (_, _) => (_.num(_) && _ !== 0 ? _ + _ : _),
  _ = (_, _) =>
    _.arr(_)
      ? _.every((_) => _(_, _))
      : _.num(_)
        ? _ === _
        : parseFloat(_) === _,
  _ = class extends _ {
    constructor({ _: _, _: _, _: _, ..._ }) {
      let _ = [],
        _ = [];
      (_ || _ || _) &&
        (_.push([_ || 0, _ || 0, _ || 0]),
        _.push((_) => [
          `translate3d(${_.map((_) => _(_, `px`)).join(`,`)})`,
          _(_, 0),
        ])),
        _(_, (_, _) => {
          if (_ === `transform`)
            _.push([_ || ``]), _.push((_) => [_, _ === ``]);
          else if (_.test(_)) {
            if ((delete _[_], _.und(_))) return;
            let _ = _.test(_) ? `px` : _.test(_) ? `deg` : ``;
            _.push(_(_)),
              _.push(
                _ === `rotate3d`
                  ? ([_, _, _, _]) => [
                      `rotate3d(${_},${_},${_},${_(_, _)})`,
                      _(_, 0),
                    ]
                  : (_) => [
                      `${_}(${_.map((_) => _(_, _)).join(`,`)})`,
                      _(_, +!!_.startsWith(`scale`)),
                    ],
              );
          }
        }),
        _.length && (_.transform = new _(_, _)),
        super(_);
    }
  },
  _ = class extends _ {
    constructor(_, _) {
      super(), (this.inputs = _), (this.transforms = _), (this._value = null);
    }
    get() {
      return (this._value ||= this._get());
    }
    _get() {
      let _ = ``,
        _ = !0;
      return (
        _(this.inputs, (_, _) => {
          let _ = _(_[0]),
            [_, _] = this.transforms[_](_.arr(_) ? _ : _.map(_));
          (_ += ` ` + _), (_ &&= _);
        }),
        _ ? `none` : _
      );
    }
    observerAdded(_) {
      _ == 1 && _(this.inputs, (_) => _(_, (_) => _(_) && _(_, this)));
    }
    observerRemoved(_) {
      _ == 0 && _(this.inputs, (_) => _(_, (_) => _(_) && _(_, this)));
    }
    eventObserved(_) {
      _.type == `change` && (this._value = null), _(this, _);
    }
  },
  _ =
    `a.abbr.address.area.article.aside.audio.b.base.bdi.bdo.big.blockquote.body.br.button.canvas.caption.cite.code.col.colgroup.data.datalist.dd.del.details.dfn.dialog.div.dl.dt.em.embed.fieldset.figcaption.figure.footer.form.h1.h2.h3.h4.h5.h6.head.header.hgroup.hr.html.i.iframe.img.input.ins.kbd.keygen.label.legend.li.link.main.map.mark.menu.menuitem.meta.meter.nav.noscript.object.ol.optgroup.option.output.p.param.picture.pre.progress.q.rp.rt.ruby.s.samp.script.section.select.small.source.span.strong.style.sub.summary.sup.table.tbody.td.textarea.tfoot.th.thead.time.title.tr.track.u.ul.var.video.wbr.circle.clipPath.defs.ellipse.foreignObject.g.image.line.linearGradient.mask.path.pattern.polygon.polyline.radialGradient.rect.stop.svg.text.tspan`.split(
      `.`,
    );
_.assign({
  batchedUpdates: _.unstable_batchedUpdates,
  createStringInterpolator: _,
  colors: _,
});
var _ = _(_, {
    applyAnimatedValues: _,
    createAnimatedStyle: (_) => new _(_),
    getComponentProps: ({ scrollTop: _, scrollLeft: _, ..._ }) => _,
  }).animated,
  _ = _(),
  _ = 8e3,
  _ = 200,
  _ = (function (_) {
    return (
      (_[(_.Default = 0)] = `Default`),
      (_[(_.Gold = 1)] = `Gold`),
      (_[(_.LNY2020 = 2)] = `LNY2020`),
      _
    );
  })({});
function _(_) {
  switch (_) {
    case 1:
      return `hsl(${51 + Math.random() * -16}, 93%, 54%)`;
    case 2:
      return `hsl(${51 + Math.random() * -16}, 93%, 54%)`;
    default:
      return `hsl(${Math.random() * 360}, 100%, 40%)`;
  }
}
function _(_) {
  return _ == 2 ? `hue-rotate(${360 + _(-30, 10)}deg)` : ``;
}
function _(_, _) {
  let _ = [];
  if (!_) return _;
  let { width: _, height: _ } = _;
  for (let _ = 0; _ < _; _++) {
    let _ = Math.random(),
      _ = Math.random() * _,
      _ = Math.random() * _,
      _ = (Math.random() - 0.5) * 4 * Math._ * 20,
      _ = Math.random() + 0.5,
      _ = [Math.random() * _ - _ - 20, _ + 20 + Math.random() * _ * _],
      _ = _ * (_ <= 1e3 ? 1 : _ / 1e3) * (_ == 1 ? 2 : 1),
      _ = (Math.random() - 0.5) * _,
      _ = (Math.random() - 0.5) * _,
      _ = [_, _ + _],
      _ = _(_),
      _ = _(_);
    _.push({
      rotationCoefficient: _,
      rotationRatioY: _,
      rotationRatioX: _,
      rotationRatioZ: _,
      yRange: _,
      xRange: _,
      scale: _,
      colorHue: _,
      filter: _,
    });
  }
  return _;
}
function _(_, _, _) {
  let {
    rotationCoefficient: _,
    rotationRatioY: _,
    rotationRatioX: _,
    rotationRatioZ: _,
    yRange: _,
    xRange: _,
    scale: _,
    colorHue: _,
    filter: _,
  } = _;
  return {
    backgroundColor: _,
    fill: _,
    filter: _,
    flRandom: 0,
    transform: _.interpolate((_) => {
      let _ = _ * _ * _,
        _ = _ * _ * _,
        _ = _ * _ * _,
        _ = _ * (_[1] - _[0]) + _[0];
      return `translate(${_ * (_[1] - _[0]) + _[0]}px, ${_}px) rotateY(${_}rad) rotateX(${_}rad) rotateZ(${_}rad) scale(${_})`;
    }),
  };
}
function _(_, _, _) {
  if (Math.random() > 0.1) return null;
  let {
    rotationCoefficient: _,
    rotationRatioZ: _,
    yRange: _,
    xRange: _,
    scale: _,
    colorHue: _,
    filter: _,
  } = _;
  return {
    backgroundColor: void 0,
    fill: _,
    filter: _,
    flRandom: Math.random(),
    transform: _.interpolate((_) => {
      let _ = ((_ * _) / 4) * _,
        _ = _ * (_[1] - _[0]) + _[0];
      return `translate(${_ * (_[1] - _[0]) + _[0]}px, ${_}px) rotateZ(${_}rad) scale(${_})`;
    }),
  };
}
var _ = (_, _) => {
    let { anim: _ } = _({
      anim: 1,
      from: {
        anim: 0,
      },
      config: {
        duration: _,
      },
    });
    return (0, _.useMemo)(() => {
      let _ = _(_, _);
      return {
        rgParticleStyles: _.map((_) => _(_, _, _)),
        rgStreamerStyles: _.map((_) => _(_, _, _)).filter((_) => !!_),
      };
    }, [_, _, _]);
  },
  _ = {
    position: `absolute`,
    left: `50%`,
    top: 0,
  },
  _ = {
    ..._,
    width: 10,
    height: 5,
    borderWidth: 1,
    borderColor: `black`,
  },
  _ = ({ eType: _ }) => {
    let [_, _] = _(),
      { rgParticleStyles: _, rgStreamerStyles: _ } = _(_, _),
      _;
    switch (_) {
      case 1:
        _ = _.map((_, _) =>
          (0, _.jsx)(
            _,
            {
              style: _,
            },
            _,
          ),
        );
        break;
      case 2:
        _ = _.map((_, _) =>
          _ % 2
            ? (0, _.jsx)(
                _,
                {
                  style: _,
                },
                _,
              )
            : (0, _.jsx)(
                _,
                {
                  style: _,
                },
                _,
              ),
        );
        break;
      case 0:
        _ = _.map((_, _) =>
          (0, _.jsx)(
            _,
            {
              style: _,
            },
            _,
          ),
        );
        break;
    }
    return (0, _.jsxs)(`div`, {
      style: {
        position: `absolute`,
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        overflow: `hidden`,
      },
      ref: _,
      children: [
        _,
        _.map((_, _) =>
          _.flRandom > 0.5
            ? (0, _.jsx)(
                _,
                {
                  style: _,
                },
                _,
              )
            : (0, _.jsx)(
                _,
                {
                  style: _,
                },
                _,
              ),
        ),
      ],
    });
  },
  _ = ({ style: _ }) =>
    (0, _.jsx)(_.div, {
      style: {
        ..._,
        ..._,
      },
    }),
  _ = ({ style: _ }) => {
    let [_] = (0, _.useState)(Math.floor(Math.random() * _.length)),
      _ = _[_];
    return (0, _.jsx)(_, {
      style: {
        ..._,
        ..._,
        backgroundColor: void 0,
      },
    });
  },
  _ = ({ style: _ }) => {
    let [_] = (0, _.useState)(Math.floor(Math.random() * _.length)),
      _ = _[_];
    return (0, _.jsx)(_, {
      style: {
        ..._,
        ..._,
        backgroundColor: void 0,
      },
    });
  },
  _ = ({ style: _ }) =>
    (0, _.jsx)(_.svg, {
      viewBox: `0 0 48 102`,
      fill: `none`,
      xmlns: `http://www.w3.org/2000/svg`,
      style: {
        width: 5,
        height: 10,
        ..._,
      },
      children: (0, _.jsx)(`path`, {
        fillRule: `evenodd`,
        clipRule: `evenodd`,
        _: `M45.8382 77.0734L24 0L2.16179 77.0734C0.773631 79.3013 0 81.7786 0 84.3885C0 84.4894 0.00115761 84.5902 0.00346361 84.6908L0 84.703H0.00374963C0.23239 94.2845 10.8883 102 24 102C37.1117 102 47.7676 94.2845 47.9963 84.703H48L47.9965 84.6908C47.9988 84.5902 48 84.4894 48 84.3885C48 81.7786 47.2264 79.3013 45.8382 77.0734Z`,
        fill: `#F7D51E`,
      }),
    }),
  _ = ({ style: _ }) =>
    (0, _.jsxs)(_.svg, {
      viewBox: `0 0 50 39`,
      fill: `none`,
      xmlns: `http://www.w3.org/2000/svg`,
      style: {
        width: 10,
        height: 7,
        ..._,
      },
      children: [
        (0, _.jsx)(`path`, {
          _: `M48.444 16.0525L32.7132 0.633915C20.0884 16.8827 7.13568 21.7989 0.597293 21.9904C7.33478 28.5984 14.1472 37.4728 14.1472 37.4728C31.6473 38.7751 44.3035 23.7352 48.444 16.0525Z`,
          fill: `#C4C4C4`,
        }),
        (0, _.jsx)(`path`, {
          _: `M48.444 16.0525L32.7132 0.633915C20.0884 16.8827 7.13568 21.7989 0.597293 21.9904C7.33478 28.5984 14.1472 37.4728 14.1472 37.4728C31.6473 38.7751 44.3035 23.7352 48.444 16.0525Z`,
          fill: _.fill,
        }),
      ],
    }),
  _ = ({ style: _ }) =>
    (0, _.jsx)(_.svg, {
      viewBox: `0 0 68 69`,
      fill: `none`,
      xmlns: `http://www.w3.org/2000/svg`,
      style: {
        width: 10,
        height: 10,
        ..._,
      },
      children: (0, _.jsx)(`rect`, {
        _: `34.6389`,
        width: `48`,
        height: `48`,
        transform: `rotate(-45 0 34.6389)`,
        fill: _.fill,
      }),
    }),
  _ = ({ style: _ }) =>
    (0, _.jsx)(_.svg, {
      viewBox: `0 0 48 48`,
      fill: `none`,
      xmlns: `http://www.w3.org/2000/svg`,
      style: {
        width: 10,
        height: 10,
        ..._,
      },
      children: (0, _.jsx)(`path`, {
        fillRule: `evenodd`,
        clipRule: `evenodd`,
        _: `M24 0L0 24L24 47.9999L48 24L24 0ZM23.7089 8.48533L8.48527 23.7089L23.7089 38.9325L38.9324 23.7089L23.7089 8.48533Z`,
        fill: _.fill,
      }),
    }),
  _ = ({ style: _ }) =>
    (0, _.jsx)(_.svg, {
      viewBox: `0 0 48 30`,
      fill: `none`,
      xmlns: `http://www.w3.org/2000/svg`,
      style: {
        width: 10,
        height: 8,
        ..._,
      },
      children: (0, _.jsx)(`ellipse`, {
        _: `24`,
        _: `15`,
        _: `24`,
        _: `15`,
        fill: _.fill,
      }),
    }),
  _ = ({ style: _ }) =>
    (0, _.jsx)(_.svg, {
      viewBox: `0 0 48 30`,
      fill: `none`,
      xmlns: `http://www.w3.org/2000/svg`,
      style: {
        width: 10,
        height: 8,
        ..._,
      },
      children: (0, _.jsx)(`ellipse`, {
        _: `24`,
        _: `15`,
        _: `24`,
        _: `15`,
        fill: _.fill,
      }),
    }),
  _ = ({ style: _ }) =>
    (0, _.jsx)(_.svg, {
      viewBox: `0 0 48 30`,
      fill: `none`,
      xmlns: `http://www.w3.org/2000/svg`,
      style: {
        width: 10,
        height: 8,
        ..._,
      },
      children: (0, _.jsx)(`ellipse`, {
        _: `24`,
        _: `15`,
        _: `24`,
        _: `15`,
        fill: _.fill,
      }),
    }),
  _ = ({ style: _ }) =>
    (0, _.jsx)(_.svg, {
      viewBox: `0 0 80 620`,
      fill: `none`,
      xmlns: `http://www.w3.org/2000/svg`,
      style: {
        width: 10,
        height: 70,
        ..._,
      },
      children: (0, _.jsx)(`path`, {
        fillRule: `evenodd`,
        clipRule: `evenodd`,
        _: `M0.53418 0.446363C4.80788 7.96949 8.99436 15.2008 13.0073 22.1324C35.0383 60.1862 51.8397 89.2071 49.1318 107.895C48.8475 101.617 47.1164 95.1506 43.6182 89.4997C22.9652 56.1375 -2.34054 7.06674 0.53418 0.446363ZM56.8207 188.805C55.1885 180.279 48.7591 170.011 41.3806 161.521C37.204 156.715 9.25983 141.889 7.31883 141.711L7.31474 141.711L7.31468 141.71L7.31452 141.71L7.11268 139.174L6.5244 131.791L6.5251 131.791L6.52505 131.79L6.52672 131.791C34.8022 129.659 47.1567 121.526 49.1318 107.895C49.6795 119.989 44.859 131.385 36.9599 134.917C33.2606 136.571 29.1329 137.843 25.1609 138.813C32.3599 142.599 44.0294 149.927 51.5956 160.751C60.8324 173.966 58.2537 184.901 56.8207 188.805ZM14.1541 214.387C28.3318 211.43 49.5183 206.914 54.7559 200.428C57.1974 197.404 57.6912 193.352 56.8207 188.805C56.4544 189.804 56.163 190.342 56.163 190.342C50.7646 194.114 26.0806 200.624 11.3908 204.497L11.3906 204.497L11.3904 204.497C7.40758 205.548 4.15949 206.404 2.22967 206.96L2.67009 212.483L3.21786 219.36C12.4021 224.467 20.8538 228.732 28.2879 232.483C70.3706 253.717 79.8458 258.498 5.02032 306.544C5.02047 306.546 5.02063 306.548 5.02078 306.55C5.01989 306.548 5.019 306.547 5.01812 306.545C5.24371 309.369 5.53845 312.547 5.79092 315.269C5.89859 316.43 5.99858 317.508 6.08223 318.44C6.15188 319.464 6.19564 320.436 6.20554 321.424C6.20464 321.331 6.23688 321.223 6.30064 321.101C6.31949 321.398 6.32799 321.609 6.32408 321.719C6.27561 321.616 6.23528 321.518 6.20333 321.425C6.28038 321.817 6.31788 321.895 6.32408 321.719C7.33553 323.874 11.894 328.285 17.8731 334.069C41.6329 357.056 87.8264 401.748 23.0228 412.886C23.5764 419.833 23.1631 419.992 23.1631 419.992C23.1631 419.992 24.3205 419.752 26.2506 419.305C34.1052 423.989 55.3095 438.589 58.8169 442.625C66.1955 451.115 72.6248 461.382 74.2571 469.909C73.8908 470.907 73.5993 471.446 73.5993 471.446C68.4367 475.053 42.2327 481.635 25.7172 485.783L25.7152 485.783L25.7147 485.784L25.7135 485.784L25.7028 485.787C20.6602 487.053 16.5222 488.093 14.1645 488.751L13.6222 488.439L13.6585 488.894L13.653 488.896L13.6602 488.916L14.4124 498.36C47.1778 516.58 73.923 535.597 77.6114 557.121C77.1891 558.457 76.6366 559.776 75.9628 561.084C62.5946 587.039 41.1874 608.612 24.1016 619.88C66.6744 596.331 80.8095 575.784 77.6114 557.121C81.823 543.801 73.0945 528.757 42.6319 505.104L26.8056 496.013C27.3301 495.908 27.8664 495.802 28.4133 495.693L28.4153 495.693C43.5756 492.685 66.9267 488.052 72.1923 481.531C74.6338 478.508 75.1275 474.456 74.2571 469.909C75.69 466.004 78.2687 455.069 69.032 441.855C57.4339 425.262 36.1944 416.886 36.1944 416.886L35.6563 416.927C41.635 415.285 48.7178 413.074 54.4334 410.519C66.4332 405.154 68.2307 384.374 57.9941 367.838C51.515 357.372 43.7231 350.194 35.4751 342.596C27.6489 335.386 19.4122 327.798 11.4967 316.664C12.7089 315.779 14.0928 314.791 15.6091 313.709C40.2963 296.086 100.082 253.407 25.4758 221.439L14.1541 214.387Z`,
        fill: _.fill,
      }),
    }),
  _ = ({ style: _ }) =>
    (0, _.jsx)(_.svg, {
      viewBox: `0 0 203 295`,
      fill: `none`,
      xmlns: `http://www.w3.org/2000/svg`,
      style: {
        width: 10,
        height: 20,
        ..._,
      },
      children: (0, _.jsx)(`path`, {
        fillRule: `evenodd`,
        clipRule: `evenodd`,
        _: `M104.427 22.6009L104.428 22.6013C125.146 59.4015 140.687 87.0059 133.282 102.839C134.662 95.3303 133.62 86.4659 129.246 79.1843C112.124 50.6796 91.1453 8.75528 93.5285 3.10091C97.2525 9.85693 100.914 16.3611 104.427 22.6009ZM142.726 166.38C141.373 159.096 136.043 150.323 129.926 143.069C127.078 139.691 110.154 127.651 103.342 123.396C101.494 123.638 100.371 123.725 100.371 123.725C100.371 123.725 100.713 123.589 100.254 117.655C119.247 116.187 129.407 111.125 133.282 102.839C131.985 109.898 128.547 115.759 123.726 117.978C120.124 119.637 116.182 120.838 112.579 121.699C116.941 123.721 130.418 130.653 138.395 142.414C146.052 153.705 143.914 163.045 142.726 166.38ZM103.389 188.664C103.824 188.575 104.268 188.484 104.721 188.392L104.722 188.392C117.291 185.827 136.649 181.876 141.015 176.307C143.039 173.725 143.448 170.264 142.726 166.38C142.423 167.232 142.181 167.693 142.181 167.693C137.901 170.772 116.177 176.387 102.486 179.926C98.3006 181.007 94.8659 181.895 92.9093 182.457L92.4596 182.191L92.4896 182.579C92.4878 182.58 92.486 182.58 92.4842 182.581L92.4914 182.602L93.1147 190.665C120.278 206.239 142.45 222.491 145.508 240.879C145.158 242.02 144.7 243.146 144.141 244.263C133.059 266.43 115.312 284.852 101.148 294.472C136.441 274.369 148.16 256.821 145.508 240.879C149 229.501 141.764 216.649 116.509 196.435L103.389 188.664Z`,
        fill: _.fill,
      }),
    }),
  _ = [
    _,
    _,
    _,
    _,
    _,
    _,
    _,
    ({ style: _ }) =>
      (0, _.jsx)(_.svg, {
        viewBox: `0 0 48 39`,
        fill: `none`,
        xmlns: `http://www.w3.org/2000/svg`,
        style: {
          width: 10,
          height: 8,
          ..._,
        },
        children: (0, _.jsx)(`path`, {
          _: `M33.8287 29.6914L24.9705 21.1201C23.199 24.5487 23.4612 24.5487 21.4282 27.9773C19.3952 31.4058 13.4557 29.6914 12.57 27.9773C7.25553 22.8344 10.7985 17.6914 12.57 15.9773C19.656 5.69155 36.5247 4.54869 48 5.69155C47.4095 4.54865 45.5199 1.92 42.6855 0.548571C39.1425 -1.16571 1.94169 0.548571 0.170191 14.2629C-1.60131 27.9771 10.7992 38.2629 21.4282 38.2629C29.9314 38.2629 33.2382 32.5486 33.8287 29.6914Z`,
          fill: _.fill,
        }),
      }),
    ({ style: _ }) =>
      (0, _.jsx)(_.svg, {
        width: `48`,
        height: `35`,
        viewBox: `0 0 48 35`,
        fill: `none`,
        xmlns: `http://www.w3.org/2000/svg`,
        style: {
          width: 10,
          height: 7,
          ..._,
        },
        children: (0, _.jsx)(`path`, {
          _: `M48 0H0L24 35L48 0Z`,
          fill: _.fill,
        }),
      }),
  ],
  _ = [
    ({ style: _ }) =>
      (0, _.jsxs)(_.svg, {
        xmlns: `http://www.w3.org/2000/svg`,
        viewBox: `0 0 54 47.18`,
        style: {
          width: 28,
          height: 28,
          ..._,
        },
        children: [
          (0, _.jsx)(`polygon`, {
            fill: `#60000e`,
            points: `10.02 14.06 10.02 14.06 10.02 14.06 10.02 14.06`,
          }),
          (0, _.jsx)(`path`, {
            fill: `#f93838`,
            _: `M54,9.53A9.52,9.52,0,0,0,37.74,2.79a10.82,10.82,0,0,0-2.25,3.54,21.52,21.52,0,0,0-1.19,4.08A16.55,16.55,0,0,0,27,8.73h-.24a16.38,16.38,0,0,0-7,1.69,22.41,22.41,0,0,0-1.2-4.09,10.82,10.82,0,0,0-2.25-3.54A9.52,9.52,0,1,0,2.79,16.26h0a10.82,10.82,0,0,0,3.54,2.25,23.87,23.87,0,0,0,5,1.36,16.34,16.34,0,0,0-.94,5.48h0v0a16.57,16.57,0,0,0,4.92,11.81A7.36,7.36,0,0,1,17.05,40a10.5,10.5,0,0,0,10,7.15,10.38,10.38,0,0,0,6.17-2,10.57,10.57,0,0,0,3.77-5.11,7.48,7.48,0,0,1,1.79-2.89,16.66,16.66,0,0,0,4-17.3l.65-.12a22.44,22.44,0,0,0,4.31-1.24,10.82,10.82,0,0,0,3.54-2.25L50.9,16l.31.31A9.5,9.5,0,0,0,54,9.53ZM32.11,21.28a9.27,9.27,0,0,1,2.68-.38,9.06,9.06,0,0,1,2.87.44.44.44,0,0,1,.28.56.44.44,0,0,1-.56.27,8.4,8.4,0,0,0-2.59-.39,8.59,8.59,0,0,0-2.43.34h0a.44.44,0,1,1-.26-.84Zm-7.88,8.64a9.27,9.27,0,0,1,2.68-.38,9.06,9.06,0,0,1,2.87.44.44.44,0,0,1,.28.56.44.44,0,0,1-.56.27,8.35,8.35,0,0,0-2.59-.39,8.46,8.46,0,0,0-2.42.34h0a.44.44,0,1,1-.26-.84ZM24.31,33a.45.45,0,0,1,.54-.32l2.16.55,2.14-.55a.45.45,0,0,1,.54.32.44.44,0,0,1-.32.53l-2.25.58a.41.41,0,0,1-.22,0l-2.27-.58h0A.44.44,0,0,1,24.31,33ZM21.9,21.34a.44.44,0,0,1,.28.56.44.44,0,0,1-.56.27A8.35,8.35,0,0,0,19,21.78a8.46,8.46,0,0,0-2.42.34h0a.44.44,0,0,1-.26-.84A9.27,9.27,0,0,1,19,20.9,9.06,9.06,0,0,1,21.9,21.34Zm-1.6,8.08h0v0a.41.41,0,0,1,0-.1c0-.08-.06-.19-.12-.33a4.39,4.39,0,0,0-.47-.95,2.16,2.16,0,0,0-.43-.5,1.11,1.11,0,0,0-.24-.16.7.7,0,0,0-.25-.05.88.88,0,0,0-.29.05,1.82,1.82,0,0,0-.4.24,5,5,0,0,0-1.16,1.3.66.66,0,0,1-.92.17.65.65,0,0,1-.17-.91,7.44,7.44,0,0,1,1.1-1.32A3.45,3.45,0,0,1,18,26.13a2.21,2.21,0,0,1,.75-.14,2,2,0,0,1,.87.21,2.37,2.37,0,0,1,.66.49,4.41,4.41,0,0,1,.84,1.21,7.08,7.08,0,0,1,.3.72c.1.27.14.45.15.46h0a.67.67,0,0,1-.47.81A.66.66,0,0,1,20.3,29.42Zm12.19,8.86a4.18,4.18,0,0,1-.92.52,7.57,7.57,0,0,1-1.11,2.55A4.85,4.85,0,0,1,28.58,43a3.56,3.56,0,0,1-3.16,0,4.71,4.71,0,0,1-1.33-1,7.14,7.14,0,0,1-1.66-3.24,4.18,4.18,0,0,1-.92-.52.44.44,0,0,1-.1-.61.45.45,0,0,1,.62-.1,2.89,2.89,0,0,0,1.76.61,3,3,0,0,0,1.58-.47,4.28,4.28,0,0,0,1.26-1.31.43.43,0,0,1,.74,0,4.28,4.28,0,0,0,1.26,1.31,3,3,0,0,0,1.58.47A2.89,2.89,0,0,0,32,37.57h0a.45.45,0,0,1,.62.1A.44.44,0,0,1,32.49,38.28ZM38,29.07a.66.66,0,0,1-.92-.17,6.25,6.25,0,0,0-.9-1.09,2.25,2.25,0,0,0-.66-.45.88.88,0,0,0-.29-.05.58.58,0,0,0-.28.07,1,1,0,0,0-.31.23,3.29,3.29,0,0,0-.58.84c-.1.21-.19.42-.25.59s-.12.37-.13.38h0a.66.66,0,0,1-.8.47.67.67,0,0,1-.47-.81s.07-.25.2-.58a6.91,6.91,0,0,1,.59-1.2,3.66,3.66,0,0,1,.69-.79,2.3,2.3,0,0,1,.56-.35,1.82,1.82,0,0,1,.78-.17,2.21,2.21,0,0,1,.75.14,3,3,0,0,1,.73.41,6.6,6.6,0,0,1,1.46,1.62A.65.65,0,0,1,38,29.07Z`,
          }),
          (0, _.jsx)(`path`, {
            fill: `#f93838`,
            _: `M27,40.35c1.12,0,1.55-.37,1.89-1.53a4.17,4.17,0,0,1-.73-.37A5,5,0,0,1,27,37.39a5,5,0,0,1-1.16,1.06,4.17,4.17,0,0,1-.73.37C25.45,40,25.88,40.35,27,40.35Z`,
          }),
        ],
      }),
    ({ style: _ }) =>
      (0, _.jsxs)(_.svg, {
        version: `1.1`,
        xmlns: `http://www.w3.org/2000/svg`,
        _: `0px`,
        _: `0px`,
        viewBox: `0 0 14.5 22`,
        style: {
          width: 28,
          height: 28,
          ..._,
        },
        children: [
          (0, _.jsx)(`path`, {
            fill: `#fc1010`,
            _: `M1.6,10.1c0,0-0.1,0-0.4-0.1C1,10,0.8,9.9,0.8,9.9c-0.1,0-0.2-0.1-0.2-0.2c0-0.2,0.1-0.4,0.3-0.6v0L1,9c0.1-0.1,0.2-0.3,0.5-0.6C1.8,8.1,2,7.8,2.2,7.5c0-0.1,0.1-0.1,0.1-0.2s0.1-0.1,0.1-0.2C2.6,7,2.7,6.8,2.8,6.5c0-0.1,0.1-0.2,0.1-0.3C3,6.1,3,6,3,5.9c0-0.2-0.1-0.4-0.2-0.5C2.6,5.3,2.4,5.3,2.1,5.3c-0.2,0-0.4,0-0.6,0.1c-0.1,0-0.4,0.1-0.7,0.3c0,0,0,0,0,0c0,0,0-0.1,0-0.1c0-0.2,0-0.4-0.1-0.8l0-0.6l0-0.3l0-0.2V3.5l0.5-0.2C1.6,3.2,2,3.1,2.5,3c0.5-0.1,0.9-0.1,1.4-0.1c0.4,0,0.8,0,1.1,0.1c0.4,0.1,0.7,0.2,0.9,0.4c0.6,0.4,0.9,1,0.9,1.8c0,0.4-0.1,0.8-0.4,1.2C6.1,6.8,5.7,7.2,5.1,7.6h0.5h0.5c0.2,0,0.4,0,0.5,0c0.2,0.1,0.3,0.1,0.3,0.3c0,0.2,0,0.5,0,0.8V9v0.3c0,0.2,0,0.4-0.1,0.5C6.6,10,6.5,10,6.2,10c0,0-0.1,0-0.2,0c-0.1,0-0.4,0-0.9,0H4H3.6H3.1H2.6C1.9,10.1,1.6,10.1,1.6,10.1z`,
          }),
          (0, _.jsx)(`path`, {
            fill: `#fc1010`,
            _: `M9.8,10.3c-0.1,0-0.2,0-0.3,0l-0.6-0.1c0,0-0.1,0-0.1-0.1c0,0-0.1,0-0.1,0c0,0,0,0-0.1,0c0,0,0,0,0-0.1c-0.1,0-0.2-0.1-0.3-0.1C8.1,9.8,8,9.8,8,9.7L7.8,9.6c-0.1,0-0.1-0.1-0.2-0.1C7.4,9.3,7.2,9,7.1,8.6C7,8.3,6.9,8,6.9,7.6c0-0.2,0-0.6,0-0.9c0-0.5,0-0.8,0.1-1.1c0-0.3,0.1-0.7,0.3-1.1c0.1,0,0.1-0.2,0.3-0.5c0,0,0.1-0.1,0.1-0.1s0-0.1,0.1-0.1c0,0,0,0,0-0.1s0-0.1,0.1-0.1c0.1,0,0.2-0.1,0.3-0.2c0,0,0.1-0.1,0.2-0.1c0.1-0.1,0.1-0.1,0.2-0.1C8.5,3.1,8.8,3,9.1,2.9c0.1,0,0.1,0,0.2,0c0.1,0,0.2,0,0.2,0c0.1,0,0.2,0,0.3,0c0.1,0,0.1,0,0.2,0c0.5,0,0.9,0,1.3,0.1c0.3,0,0.7,0.1,1.1,0.2c0,0,0.1,0,0.1,0c0.3,0.1,0.5,0.2,0.6,0.2c0.1,0,0.1,0.1,0.1,0.1v0.1c0.1,0,0.2,0,0.3,0.1s0.2,0.2,0.3,0.3c0.1,0.1,0.2,0.2,0.2,0.4c0,0.1,0.1,0.2,0.1,0.3c0.1,0,0.1,0,0.1,0s0,0,0,0.1c0,0.2,0.1,0.4,0.1,0.5c0,0.1,0,0.1,0.1,0.2c0,0.1,0,0.2,0.1,0.3l0,0.1l0,0.4v0.3c0,0.6,0,1.1-0.1,1.4C14.2,8.6,14,9,13.7,9.3c-0.1,0.1-0.3,0.2-0.4,0.3l-0.4,0.3c-0.2,0.1-0.4,0.1-0.5,0.2l-0.5,0.2c-0.3,0-0.6,0-0.9,0.1c-0.3,0-0.6,0.1-0.9,0.1C9.9,10.3,9.9,10.3,9.8,10.3z M11.2,8.3c0-0.1,0.1-0.2,0.1-0.3c0-0.1,0-0.2,0-0.2l0-0.3c0-0.2,0-0.5,0-0.7c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.6c0-0.2-0.1-0.3-0.1-0.5c0-0.2-0.1-0.3-0.1-0.3c0-0.1,0-0.3-0.1-0.3c-0.1-0.1-0.1-0.1-0.3-0.1c-0.2,0-0.4,0.1-0.5,0.4c0,0.1-0.1,0.2-0.1,0.3c0,0,0,0.2,0,0.3L10,6.2C9.9,6.4,9.9,6.6,9.9,6.8c0,0.3,0,0.5,0.1,0.8c0,0.1,0,0.2,0.1,0.4s0.1,0.2,0.1,0.3c0,0.1,0.1,0.2,0.2,0.2c0,0,0.1,0.1,0.1,0.1c0,0,0.1,0,0.1,0C10.9,8.6,11.1,8.5,11.2,8.3z`,
          }),
          (0, _.jsx)(`path`, {
            fill: `#fc1010`,
            _: `M1.6,17.5c0,0-0.1,0-0.4-0.1c-0.2,0-0.4-0.1-0.4-0.1c-0.1,0-0.2-0.1-0.2-0.2c0-0.2,0.1-0.4,0.3-0.6v0L1,16.4c0.1-0.1,0.2-0.3,0.5-0.6c0.2-0.2,0.4-0.5,0.7-0.9c0-0.1,0.1-0.1,0.1-0.2s0.1-0.1,0.1-0.2c0.1-0.1,0.2-0.3,0.3-0.6c0-0.1,0.1-0.2,0.1-0.3C3,13.5,3,13.4,3,13.3c0-0.2-0.1-0.4-0.2-0.5c-0.1-0.1-0.4-0.1-0.7-0.1c-0.2,0-0.4,0-0.6,0.1c-0.1,0-0.4,0.1-0.7,0.3c0,0,0,0,0,0c0,0,0-0.1,0-0.1c0-0.2,0-0.4-0.1-0.8l0-0.6l0-0.3l0-0.2v-0.1l0.5-0.2c0.4-0.1,0.9-0.2,1.3-0.3c0.5-0.1,0.9-0.1,1.4-0.1c0.4,0,0.8,0,1.1,0.1c0.4,0.1,0.7,0.2,0.9,0.4c0.6,0.4,0.9,1,0.9,1.8c0,0.4-0.1,0.8-0.4,1.2c-0.3,0.4-0.7,0.8-1.3,1.2h0.5h0.5c0.2,0,0.4,0,0.5,0c0.2,0.1,0.3,0.1,0.3,0.3c0,0.2,0,0.5,0,0.8v0.3v0.3c0,0.2,0,0.4-0.1,0.5c-0.1,0.1-0.3,0.2-0.5,0.2c0,0-0.1,0-0.2,0c-0.1,0-0.4,0-0.9,0H4H3.6H3.1H2.6C1.9,17.5,1.6,17.5,1.6,17.5z`,
          }),
          (0, _.jsx)(`path`, {
            fill: `#fc1010`,
            _: `M9.8,17.7c-0.1,0-0.2,0-0.3,0l-0.6-0.1c0,0-0.1,0-0.1-0.1c0,0-0.1,0-0.1,0c0,0,0,0-0.1,0c0,0,0,0,0-0.1c-0.1,0-0.2-0.1-0.3-0.1c-0.1,0-0.2-0.1-0.3-0.1L7.8,17c-0.1,0-0.1-0.1-0.2-0.1c-0.2-0.2-0.4-0.5-0.5-0.9C7,15.7,6.9,15.4,6.9,15c0-0.2,0-0.6,0-0.9c0-0.5,0-0.8,0.1-1.1c0-0.3,0.1-0.7,0.3-1.1c0.1,0,0.1-0.2,0.3-0.5c0,0,0.1-0.1,0.1-0.1s0-0.1,0.1-0.1c0,0,0,0,0-0.1s0-0.1,0.1-0.1c0.1,0,0.2-0.1,0.3-0.2c0,0,0.1-0.1,0.2-0.1c0.1-0.1,0.1-0.1,0.2-0.1c0.2-0.1,0.5-0.2,0.8-0.3c0.1,0,0.1,0,0.2,0c0.1,0,0.2,0,0.2,0c0.1,0,0.2,0,0.3,0c0.1,0,0.1,0,0.2,0c0.5,0,0.9,0,1.3,0.1c0.3,0,0.7,0.1,1.1,0.2c0,0,0.1,0,0.1,0c0.3,0.1,0.5,0.2,0.6,0.2c0.1,0,0.1,0.1,0.1,0.1v0.1c0.1,0,0.2,0,0.3,0.1s0.2,0.2,0.3,0.3c0.1,0.1,0.2,0.2,0.2,0.4c0,0.1,0.1,0.2,0.1,0.3c0.1,0,0.1,0,0.1,0s0,0,0,0.1c0,0.2,0.1,0.4,0.1,0.5c0,0.1,0,0.1,0.1,0.2c0,0.1,0,0.2,0.1,0.3l0,0.1l0,0.4v0.3c0,0.6,0,1.1-0.1,1.4c-0.1,0.5-0.3,0.9-0.7,1.2c-0.1,0.1-0.3,0.2-0.4,0.3l-0.4,0.3c-0.2,0.1-0.4,0.1-0.5,0.2l-0.5,0.2c-0.3,0-0.6,0-0.9,0.1c-0.3,0-0.6,0.1-0.9,0.1C9.9,17.7,9.9,17.7,9.8,17.7z M11.2,15.7c0-0.1,0.1-0.2,0.1-0.3c0-0.1,0-0.2,0-0.2l0-0.3c0-0.2,0-0.5,0-0.7c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.6c0-0.2-0.1-0.3-0.1-0.5c0-0.2-0.1-0.3-0.1-0.3c0-0.1,0-0.3-0.1-0.3C10.9,12,10.8,12,10.7,12c-0.2,0-0.4,0.1-0.5,0.4c0,0.1-0.1,0.2-0.1,0.3c0,0,0,0.2,0,0.3L10,13.6c-0.1,0.2-0.1,0.4-0.1,0.6c0,0.3,0,0.5,0.1,0.8c0,0.1,0,0.2,0.1,0.4s0.1,0.2,0.1,0.3c0,0.1,0.1,0.2,0.2,0.2c0,0,0.1,0.1,0.1,0.1c0,0,0.1,0,0.1,0C10.9,16,11.1,15.9,11.2,15.7z`,
          }),
        ],
      }),
  ];
function _() {
  let [_, _] = (0, _.useState)(null);
  return [
    _,
    (0, _.useCallback)((_) => {
      _ &&
        typeof _.getBoundingClientRect == `function` &&
        _(_.getBoundingClientRect());
    }, []),
  ];
}
var _ = `X1gCBTGtbQo-`,
  _ = `pwoEuOdIEU8-`,
  _ = `_8gzuK-ehd2c-`,
  _ = `KxWl4F-ThBg-`,
  _ = `-k3vfGVJ2z8-`,
  _ = `hjnyUvjsuM0-`,
  _ = `gpQal19AH3g-`,
  _ = `ipfUysnOe38-`,
  _ = `KMujcG7s040-`,
  _ = `ihNex1qsDHE-`,
  _ = `K1SbjeK9LvQ-`,
  _ = `X5dwwz8fIXE-`,
  _ = `_5zWPqKJ33KE-`,
  _ = `_1G-T-zONst0-`,
  _ = `Czke6RtXW3o-`,
  _ = `_8CEnNxDShgs-`,
  _ = `yi3-qg349IA-`,
  _ = `GaPyf2MjF2E-`,
  _ = `_4H1RQ7-yur4-`,
  _ = `yMXGuiDOIJM-`,
  _ = `TVan0xtpqqs-`,
  _ = `-doWcGR8eMk-`,
  _ = `cOllkn85Qg0-`,
  _ = `LZ8e1bYHfYA-`,
  _ = `IcJ-oYdhbmY-`,
  _ = `mJ0DNYwkPL0-`,
  _ = `_7UII5ie-Zyw-`,
  _ = `qlx3jmY-fYs-`,
  _ = `p1vtepGhSwM-`,
  _ = `gjb6TWp3ljM-`,
  _ = `YBdqolTvxSI-`,
  _ = `jxFDeB5vHwI-`,
  _ = `tQ0eTDYO-n0-`,
  _ = `sqHW022p4uQ-`,
  _ = `_9laXcVDhko4-`,
  _ = `to0SBwTzjHE-`,
  _ = `_-8SK-njcPZY-`;
function _(_, _) {
  return `${_.STORE_CDN_URL}public/images/loyalty/reactions/${_ ? `animated` : `still`}/${_}.png`;
}
function _() {
  let _ = _();
  return _({
    queryKey: [`useGetReactionConfiguration`],
    queryFn: async () => {
      let _ = _.Init(_);
      _.Body().set_elanguage(_(_.LANGUAGE));
      let _ = await _.GetReactionConfig(_, _);
      return _.GetEResult() == 1
        ? _.Body().toObject().reactions
        : (console.error(
            `Error when calling LoyaltyRewardsService.GetReactionConfig: EResult=${_.GetEResult()}`,
          ),
          null);
    },
    staleTime: 1 / 0,
  });
}
function _(_) {
  let _ = _();
  return (0, _.useMemo)(() => _?.data?.find((_) => _.reactionid === _), [_, _]);
}
var _ = `BnfeTjJPQ-g-`,
  _ = (_) => {
    let { className: _, ..._ } = _;
    return (0, _.jsx)(_, {
      className: _(_, _),
      ..._,
    });
  },
  _ = (_) =>
    (0, _.jsx)(`svg`, {
      viewBox: `0 0 24 24`,
      fill: `none`,
      xmlns: `http://www.w3.org/2000/svg`,
      ..._,
      children: (0, _.jsx)(`path`, {
        fill: `currentColor`,
        fillRule: `evenodd`,
        clipRule: `evenodd`,
        _: `M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24ZM10.9577 17.254L18.8038 10.0384L16.773 7.83022L10.0706 13.9941L7.71092 11.2399L5.43271 13.1918L8.80323 17.1259C9.06802 17.4349 9.44701 17.6231 9.85327 17.6473C10.2595 17.6715 10.6582 17.5295 10.9577 17.254Z`,
      }),
    }),
  _ = class extends _.PureComponent {
    constructor(_) {
      super(_),
        (this.state = {
          bHovered: !1,
        });
    }
    handleMouseOver(_) {
      this.setState({
        bHovered: !0,
      });
    }
    handleMouseOut() {
      this.setState({
        bHovered: !1,
      });
    }
    render() {
      let _ = _(
        this.props.reactionType,
        this.props.bDisableAnimation == 0 &&
          (!!this.state.bHovered || !!this.props.bForceAnimated),
      );
      return (0, _.jsx)(`img`, {
        className: this.props.className,
        src: _,
        onMouseEnter: this.handleMouseOver,
        onMouseLeave: this.handleMouseOut,
      });
    }
  };
_([_], _.prototype, `handleMouseOver`, null),
  _([_], _.prototype, `handleMouseOut`, null);
function _(_, _, _) {
  let _ = [];
  return (
    _.forEach(function (_) {
      if (
        _.valid_target_types?.includes(_) &&
        !(!_.purchaseable || !_.reactionid)
      )
        switch (_) {
          case 1:
            _.push(_.reactionid);
            break;
          case 2:
            _ !== void 0 &&
              _.valid_ugc_types?.includes(_) &&
              _.push(_.reactionid);
            break;
          case 3:
            _.push(_.reactionid);
            break;
          case 4:
            _.push(_.reactionid);
            break;
          case 5:
            _.push(_.reactionid);
            break;
        }
    }),
    _
  );
}
_.Component;
function _(_) {
  let {
    targetType: _,
    targetid: _,
    bShowModal: _,
    ugcType: _,
    initialSelectedReaction: _,
    onDismiss: _,
    onSuccess: _,
  } = _;
  return (0, _.jsx)(
    _,
    {
      targetid: _,
      active: _,
      targetType: _,
      ugcType: _,
      onDismiss: _,
      onSuccess: _,
      initialSelectedReaction: _,
    },
    _,
  );
}
function _(_) {
  let {
      active: _,
      targetid: _,
      targetType: _,
      ugcType: _,
      initialSelectedReaction: _,
      onSuccess: _,
      onDismiss: _,
    } = _,
    [_, _] = _.useState(_ || 0),
    [_, _] = _.useState(0),
    [_, _] = _.useState(!1),
    [_, _] = _.useState(2),
    _ = _(),
    _ = _(),
    _ = _(!!_, _, _, _),
    _ = _(!!_, _),
    _ = _(!!_, _),
    _ = _(_),
    _ = _.isPending || _.isPending;
  async function _() {
    _ === null ||
      _ == 0 ||
      (_(2),
      await _.mutate(
        {
          targetid: _,
          targetType: _,
          nReactionId: _,
        },
        {
          onSuccess: () => {
            _(3),
              _(!0),
              setTimeout(() => {
                _ && _(_, _);
              }, 2e3);
          },
          onError: (_) => {
            _(4), _(_);
          },
        },
      ));
  }
  if (
    (_.useEffect(() => {
      _.error && (_(_.error), _(5));
    }, [_.error]),
    !_)
  )
    return null;
  let _ = _.data ?? new Map(),
    _ = _.data ?? new _(0),
    _ = _(_, _, _),
    _ = _ === 0 ? null : _.get(_),
    _ = _ ? _.points_cost : 0,
    _ = _ ? _.points_transferred : 0,
    _ = ``;
  switch (_) {
    case 1:
      _ = _(`#GrantAwardDescription_Review`);
      break;
    case 2:
      _ = _(`#GrantAwardDescription_UGC`);
      break;
    case 3:
      _ = _(`#GrantAwardDescription_Profile`);
      break;
    case 4:
      _ = _(`#GrantAwardDescription_ForumTopic`);
      break;
    case 5:
      _ = _(`#GrantAwardDescription_Comment`);
      break;
  }
  let _;
  switch (_) {
    case 0:
      {
        let _ = _ === 0 || _.data?.has(_),
          _ = !_ || _.greaterThanOrEqual(_),
          _ = (0, _.jsx)(_, {
            onClick: () => _(1),
            disabled: _,
            focusable: !_,
            title: _(
              _ ? `#GrantAward_PromptTooltip` : `#GrantAward_SubmitTooltip`,
            ),
            children: _(_ ? `#GrantAward_SelectAward` : `#GrantAward_Next`),
          });
        _ = (0, _.jsxs)(_.Fragment, {
          children: [
            (0, _.jsx)(_, {
              description: _,
            }),
            (0, _.jsx)(_, {}),
            _ &&
              (0, _.jsx)(`div`, {
                className: `UX-R-ILV2P8-`,
                children: (0, _.jsx)(`div`, {
                  className: _(`p1vtepGhSwM-`, `eB8lwgwsGp0-`),
                  children: (0, _.jsx)(_, {}),
                }),
              }),
            (0, _.jsx)(_, {
              className: _,
              scrollDirection: _ ? `x` : `y`,
              "flow-children": `grid`,
              children:
                !_ &&
                _.map((_, _) =>
                  (0, _.jsx)(
                    _,
                    {
                      autoFocus:
                        (_ === void 0 && _ == 0) ||
                        (_ === _ && !_.data?.has(_)),
                      reaction: _,
                      selected: _ === _ && !_.data?.has(_),
                      cost: _.get(_).points_cost,
                      alreadyAwarded: _.data?.has(_),
                      awardConfig: _.get(_),
                      onClick: () => {
                        _.data?.has(_) || _(_ === _ ? 0 : _);
                      },
                    },
                    _,
                  ),
                ),
            }),
            (0, _.jsx)(_, {}),
            (0, _.jsx)(_, {
              pointBalance: _,
              children:
                _ || _
                  ? _
                  : [
                      (0, _.jsx)(
                        `div`,
                        {
                          className: _,
                          children: _(
                            `#GrantAward_CantAfford`,
                            _(_.negate().add(_).toNumber()),
                          ),
                        },
                        `msg`,
                      ),
                      (0, _.jsx)(
                        _,
                        {
                          href: `${_.STORE_BASE_URL}points/howitworks`,
                          children: (0, _.jsx)(
                            _,
                            {
                              children: _(`#GrantAward_HowToGetPoints`),
                            },
                            `button`,
                          ),
                        },
                        `button`,
                      ),
                    ],
            }),
          ],
        });
      }
      break;
    case 1:
    case 2:
    case 3:
      {
        let _ = (0, _.jsxs)(_, {
          pointBalance: _,
          children: [
            (0, _.jsx)(_, {
              onClick: () => _(0),
              disabled: _ !== 1,
              children: _(`#GrantAward_Back`),
            }),
            (0, _.jsx)(_, {
              onClick: _,
              title: _(`#GrantAward_SubmitTooltip`),
              disabled: _ !== 1,
              children: _(`#GrantAwardNowButton`),
            }),
          ],
        });
        _ === 3 &&
          (_ = (0, _.jsx)(_, {
            pointBalance: _,
            children: (0, _.jsx)(_, {
              onClick: _,
              children: _(`#Button_Close`),
            }),
          })),
          (_ = (0, _.jsxs)(_.Fragment, {
            children: [
              (0, _.jsx)(_, {
                description: _,
              }),
              (0, _.jsx)(_, {}),
              (0, _.jsxs)(`div`, {
                style: {
                  position: `relative`,
                },
                children: [
                  (0, _.jsxs)(`div`, {
                    className: _(_, _ === 1 && `eB8lwgwsGp0-`),
                    children: [
                      (0, _.jsx)(_, {
                        className: _,
                        reactionType: _,
                      }),
                      (0, _.jsxs)(`div`, {
                        className: _,
                        children: [
                          (0, _.jsx)(`div`, {
                            className: _,
                            children: _(
                              `#GrantAward_Confirm`,
                              (0, _.jsx)(_, {
                                children: _(_),
                              }),
                              (0, _.jsx)(`span`, {
                                className: _,
                                children: _.data?.get(_)?.localized_title,
                              }),
                            ),
                          }),
                          _ > 0 &&
                            (0, _.jsx)(`div`, {
                              className: `mJ0DNYwkPL0-`,
                              children: _(
                                `#GrantAward_Confirm_Details`,
                                (0, _.jsx)(_, {
                                  children: _(_),
                                }),
                                (0, _.jsx)(`span`, {
                                  className: `JG6-rTArZSI-`,
                                  children: _(
                                    `#GrantAward_Confirm_DetailsTimePeriod`,
                                  ),
                                }),
                              ),
                            }),
                        ],
                      }),
                    ],
                  }),
                  (0, _.jsx)(`div`, {
                    className: _(_, _ === 2 && `eB8lwgwsGp0-`),
                    children: (0, _.jsx)(_, {}),
                  }),
                  (0, _.jsxs)(`div`, {
                    className: _(_, _ === 3 && `eB8lwgwsGp0-`),
                    children: [
                      (0, _.jsx)(_, {
                        className: _,
                        reactionType: _,
                        bForceAnimated: !0,
                      }),
                      (0, _.jsx)(`div`, {
                        className: _,
                        children: _(`#GrantAward_Success`),
                      }),
                    ],
                  }),
                ],
              }),
              (0, _.jsx)(_, {}),
              _,
            ],
          }));
      }
      break;
    case 4:
      {
        let _ = ``;
        switch (_) {
          case 10:
            _ = _(`#GrantAwardError_Busy`);
            break;
          case 32:
            _ = _(`#GrantAwardError_PersistFailed`);
            break;
          case 8:
            _ = _(`#GrantAwardError_InvalidParam`);
            break;
          case 42:
            _ = _(`#GrantAwardError_NoMatch`);
            break;
          case 107:
            _ = _(`#GrantAwardError_InsufficientFunds`);
            break;
          case 15:
            _ = _(`#GrantAwardError_AccessDenied`);
            break;
          case 21:
            _ = _(`#GrantAwardError_NotLoggedOn`);
            break;
          case 29:
            _ = _(`#GrantAwardError_DuplicateRequest`);
            break;
          default:
            _ = _(`#GrantAwardError_Fail`);
            break;
        }
        _ = (0, _.jsxs)(_.Fragment, {
          children: [
            (0, _.jsx)(_, {
              description: _,
            }),
            (0, _.jsx)(_, {}),
            (0, _.jsx)(`div`, {
              style: {
                position: `relative`,
              },
              children: (0, _.jsx)(`div`, {
                className: _,
                children: (0, _.jsx)(`div`, {
                  className: _,
                  children: _,
                }),
              }),
            }),
            (0, _.jsx)(_, {}),
            (0, _.jsx)(_, {
              pointBalance: _,
              children: (0, _.jsx)(_, {
                onClick: () => _(0),
                children: _(`#GrantAward_Back`),
              }),
            }),
          ],
        });
      }
      break;
    case 5:
      {
        let _ = ``;
        switch (_) {
          case 10:
            _ = _(`#GrantAwardError_Busy`);
            break;
          case 21:
            _ = _(`#GrantAwardError_NotLoggedOn`);
            break;
          default:
            _ = _(`#GrantAwardError_LoadExistingReactions`);
            break;
        }
        _ = (0, _.jsxs)(_.Fragment, {
          children: [
            (0, _.jsx)(_, {
              description: _,
            }),
            (0, _.jsx)(_, {}),
            (0, _.jsx)(`div`, {
              style: {
                position: `relative`,
              },
              children: (0, _.jsx)(`div`, {
                className: _,
                children: (0, _.jsx)(`div`, {
                  className: _,
                  children: _,
                }),
              }),
            }),
            (0, _.jsx)(_, {}),
          ],
        });
      }
      break;
  }
  return (0, _.jsxs)(_, {
    className: _,
    active: _,
    onDismiss: _,
    children: [
      _ &&
        (0, _.jsx)(_, {
          eType: _.Default,
        }),
      _,
    ],
  });
}
var _ = ({ description: _ }) =>
  (0, _.jsxs)(`div`, {
    className: _,
    children: [
      (0, _.jsx)(`div`, {
        className: _,
        children: _(`#GrantAwardTitle`),
      }),
      (0, _.jsx)(`div`, {
        className: _,
        children: _,
      }),
    ],
  });
function _(_) {
  let { pointBalance: _, children: _ } = _,
    _ = _ && _(_.toNumber());
  return (0, _.jsxs)(`div`, {
    className: _,
    children: [
      (0, _.jsxs)(`div`, {
        className: _,
        children: [
          (0, _.jsxs)(`div`, {
            className: _,
            children: [
              (0, _.jsx)(_, {
                className: _,
              }),
              (0, _.jsxs)(`div`, {
                className: _,
                children: [
                  (0, _.jsx)(`div`, {
                    className: _,
                    children: _(`#YourBalance`),
                  }),
                  (0, _.jsx)(`div`, {
                    className: _,
                    children: _,
                  }),
                ],
              }),
            ],
          }),
          (0, _.jsx)(`div`, {
            className: _,
            children: (0, _.jsx)(`a`, {
              className: _,
              href: `${_.STORE_BASE_URL}points/howitworks`,
              children: _(`#GrantAward_PointsLink`),
            }),
          }),
        ],
      }),
      (0, _.jsx)(`div`, {
        className: _,
        children: (0, _.jsx)(_, {
          className: _,
          "flow-children": `row`,
          children: _.Children.map(_, (_) =>
            (0, _.jsx)(`div`, {
              className: _,
              children: _,
            }),
          ),
        }),
      }),
    ],
  });
}
var _ = () =>
    (0, _.jsx)(`div`, {
      className: _,
    }),
  _ = class extends _.PureComponent {
    constructor(_) {
      super(_),
        (this.state = {
          bHovered: !1,
        });
    }
    handleMouseOver(_) {
      this.setState({
        bHovered: !0,
      });
    }
    handleMouseOut() {
      this.setState({
        bHovered: !1,
      });
    }
    render() {
      let {
        reaction: _,
        selected: _,
        alreadyAwarded: _,
        cost: _,
        autoFocus: _,
        awardConfig: _,
        ..._
      } = this.props;
      return (0, _.jsxs)(_, {
        type: `button`,
        onMouseEnter: this.handleMouseOver,
        onMouseLeave: this.handleMouseOut,
        className: _(_, _ && `v5Y6-9-HzHc-`, _ && `ZqJew-Soils-`),
        autoFocus: _,
        ..._,
        children: [
          (0, _.jsx)(`div`, {
            className: _,
            children: (0, _.jsx)(_, {
              reactionType: _,
              bForceAnimated: this.state.bHovered,
              bDisableAnimation: _,
            }),
          }),
          (0, _.jsxs)(`div`, {
            className: _,
            children: [
              (0, _.jsx)(`div`, {
                className: _,
                children: _?.localized_title,
              }),
              (0, _.jsx)(_, {
                className: _,
                children: _(_ ?? 0),
              }),
            ],
          }),
          _ &&
            (0, _.jsx)(_, {
              className: `RvQ6Pyfb094-`,
            }),
        ],
      });
    }
  };
_([_], _.prototype, `handleMouseOver`, null),
  _([_], _.prototype, `handleMouseOut`, null);
var _ = () =>
    (0, _.jsx)(_, {
      size: `large`,
      className: _,
    }),
  _ = (_) => {
    let { children: _, className: _, ..._ } = _;
    return (0, _.jsxs)(`span`, {
      ..._,
      className: _(_, _),
      children: [
        (0, _.jsx)(_, {
          className: _,
        }),
        _,
      ],
    });
  },
  _ = `tBM2tRu7sCE-`,
  _ = `JI7HWj0E-5g-`,
  _ = `vrGKKSSQv5A-`,
  _ = `_9tJXlayVUkk-`,
  _ = `mqu35KRdk0k-`;
function _(_) {
  let { eReactionID: _, nCount: _ } = _,
    _ = _(_);
  return _
    ? (0, _.jsxs)(`div`, {
        className: _,
        children: [
          (0, _.jsx)(`div`, {
            className: _,
            children: (0, _.jsx)(`img`, {
              src: _(_, !0),
              alt: _.localized_title,
            }),
          }),
          (0, _.jsxs)(`div`, {
            className: _,
            children: [
              (0, _.jsx)(`div`, {
                className: _,
                children: _.localized_title,
              }),
              (0, _.jsx)(`div`, {
                className: _,
                children: _.localized_desc,
              }),
              !!_.points_transferred &&
                (0, _.jsx)(`div`, {
                  className: `zhSYwI9CGAw-`,
                  children: _(
                    `#RewardsReaction_ToolTip_Points`,
                    _(_.points_transferred),
                  ),
                }),
              !!_ &&
                (0, _.jsx)(`div`, {
                  className: `FcztL8xbJ9w-`,
                  children: _(`#RewardsReaction_ToolTip_Granted`, _(_)),
                }),
            ],
          }),
        ],
      })
    : null;
}
var _ = `XXlEfHjWjow-`,
  _ = `v5pkDSvX7yQ-`,
  _ = `EvyIQQe4kEQ-`;
function _(_) {
  let { bShowDialog: _, setShowDialog: _, contentURL: _ } = _,
    _ = `${_.STORE_BASE_URL}login/?redir=${encodeURIComponent(window.location.href)}`,
    _ = `${_.STORE_BASE_URL}join/`,
    _ =
      `${_.HELP_BASE_URL}wizard/HelpWithAnonymousContentReport` +
      (_ ? `?contenturl=${encodeURIComponent(_)}` : ``);
  return (0, _.jsx)(_, {
    active: _,
    children: (0, _.jsxs)(_, {
      closeModal: () => _(!1),
      title: _.Localize(`#anonymousreport_title`),
      children: [
        (0, _.jsx)(_, {
          className: _,
          children: _.Localize(`#anonymousreport_description`),
        }),
        (0, _.jsx)(_, {
          className: _,
          children: _(
            _.Localize(`#anonymousreport_footer`),
            (0, _.jsx)(_, {
              href: _,
            }),
          ),
        }),
        (0, _.jsxs)(_, {
          className: _,
          children: [
            (0, _.jsx)(_, {
              href: _,
              children: (0, _.jsx)(_, {
                onClick: () => !1,
                children: _.Localize(`#anonymousreport_signin`),
              }),
            }),
            (0, _.jsx)(_, {
              href: _,
              children: (0, _.jsx)(_, {
                onClick: () => !1,
                children: _.Localize(`#anonymousreport_createaccount`),
              }),
            }),
          ],
        }),
      ],
    }),
  });
}
var _ = `rORIT8EPP08-`,
  _ = `P2CT6pxsvv8-`,
  _ = `rj6kLDl2-xk-`,
  _ = `b4JBNj9biUk-`,
  _ = `UpHojYmKaTA-`,
  _ = `j11C6lgziYw-`,
  _ = `BY8PlBQ-v04-`,
  _ = `Yv1Bk96nRv8-`,
  _ = `cEvRL-e8tP4-`,
  _ = `QwdNae7qyGo-`,
  _ = `vBFhYRicC7A-`,
  _ = `vsP0veiFSEg-`,
  _ = `RKDCa-F51uA-`,
  _ = `RK-6QFPfZP0-`,
  _ = `QOeEXw9R05w-`,
  _ = `rg4edDxK3aw-`,
  _ = `UPnxoRId-aw-`,
  _ = `JsnqHsmDlfQ-`,
  _ = `_8uif7a9EMr8-`,
  _ = `pKVlm1vgHoc-`,
  _ = `ZXANZ-xycN4-`,
  _ = `dBvBdiIw0sU-`;
function _(_, _, _) {
  let _ = encodeURIComponent(_),
    _ = encodeURIComponent(_);
  switch (_) {
    case `facebook`:
      return `https://www.facebook.com/sharer/sharer.php?u=${_}`;
    case `x`:
      return `https://x.com/intent/post?url=${_}&text=${_}`;
    case `reddit`:
      return `https://www.reddit.com/submit?url=${_}&title=${_}`;
  }
}
var _ = [
    {
      target: `facebook`,
      token: `facebook`,
    },
    {
      target: `x`,
      token: `x`,
    },
    {
      target: `reddit`,
      token: `reddit`,
    },
  ],
  _ = {
    facebook: `Facebook`,
    _: `X`,
    reddit: `Reddit`,
  };
function _(_) {
  let { details: _, onClose: _ } = _,
    [_, _] = (0, _.useState)(!1),
    _ = _.Details(_.publishedfileid),
    _ = _.title ?? ``;
  return _
    ? (0, _.jsx)(_, {
        details: _,
        onClose: _,
      })
    : (0, _.jsxs)(_, {
        className: _,
        strTitle: _.Localize(`#Workshop_Share_Title`),
        onClose: _,
        children: [
          (0, _.jsxs)(_, {
            direction: `column`,
            gap: `3`,
            children: [
              _.logged_in &&
                (0, _.jsx)(_, {
                  color: `accent`,
                  onClick: () => _(!0),
                  children: _.Localize(`#Workshop_Share_OnSteam`),
                }),
              (0, _.jsx)(_, {
                direction: `row`,
                gap: `2`,
                wrap: `wrap`,
                children: _.map(({ target: _ }) =>
                  (0, _.jsx)(
                    _,
                    {
                      color: `dull`,
                      onClick: () => _(_(_, _, _)),
                      children: _[_],
                    },
                    _,
                  ),
                ),
              }),
              (0, _.jsxs)(_, {
                direction: `column`,
                gap: `1`,
                children: [
                  (0, _.jsx)(`div`, {
                    className: _,
                    children: _.Localize(`#Workshop_Share_Link`),
                  }),
                  (0, _.jsx)(_, {
                    strURL: _,
                  }),
                ],
              }),
            ],
          }),
          (0, _.jsx)(_, {
            justify: `end`,
            gap: `3`,
            align: `center`,
            marginTop: `3`,
            children: (0, _.jsx)(_, {
              onClick: _,
              children: (0, _.jsx)(`span`, {
                children: _.Localize(`#Button_Close`),
              }),
            }),
          }),
        ],
      });
}
function _(_) {
  if (_.IN_CLIENT) {
    window.location.href = `steam://openurl/${_}`;
    return;
  }
  window.open(_, `_blank`, `noopener,noreferrer`);
}
function _(_) {
  let { strURL: _ } = _,
    [_, _] = (0, _.useState)(!1);
  return (0, _.jsxs)(_, {
    direction: `row`,
    gap: `2`,
    align: `center`,
    children: [
      (0, _.jsx)(`div`, {
        className: _,
        children: (0, _.jsx)(_, {
          value: _,
          onTextChange: () => {},
          readOnly: !0,
          onFocus: (_) => _.target.select(),
        }),
      }),
      (0, _.jsx)(_, {
        size: `1`,
        color: `dull`,
        onClick: async () => {
          try {
            await navigator.clipboard.writeText(_), _(!0);
          } catch {}
        },
        children: _.Localize(
          _ ? `#Workshop_Share_Copied` : `#Workshop_Share_Copy`,
        ),
      }),
    ],
  });
}
function _(_) {
  let { details: _, onClose: _ } = _,
    [_, _] = (0, _.useState)(``),
    { errorDialog: _, HandleMutationError: _ } = _(),
    _ = _({
      mutationFn: async () =>
        _(
          `/sharedfiles/actions`,
          `ShareUGCItemToActivityFeed`,
          _.publishedfileid,
          _,
        ),
    });
  return (0, _.jsxs)(_.Fragment, {
    children: [
      (0, _.jsxs)(_, {
        className: _,
        strTitle: _.Localize(`#Workshop_Share_OnSteam`),
        onClose: _,
        children: [
          (0, _.jsx)(_, {
            children: _.Localize(`#Workshop_Share_OnSteam_Desc`),
          }),
          (0, _.jsx)(_, {
            direction: `column`,
            gap: `1`,
            marginTop: `3`,
            children: (0, _.jsx)(_, {
              value: _,
              onTextChange: _,
              maxLength: _,
              rows: 4,
              resize: `vertical`,
              placeholder: _.Localize(`#Workshop_Share_OnSteam_Placeholder`),
            }),
          }),
          (0, _.jsx)(_, {
            marginTop: `2`,
            className: _,
            children: _.Details(_.publishedfileid),
          }),
          (0, _.jsxs)(_, {
            justify: `end`,
            gap: `3`,
            align: `center`,
            marginTop: `3`,
            children: [
              (0, _.jsx)(_, {
                disabled: _.isPending,
                onClick: () => {
                  _.mutate(void 0, {
                    onSuccess: _,
                    onError: _,
                  });
                },
                autoFocus: !0,
                children: _.Localize(`#Workshop_Share_OnSteam_Post`),
              }),
              (0, _.jsx)(_, {
                onClick: _,
                children: (0, _.jsx)(`span`, {
                  children: _.Localize(`#Button_Cancel`),
                }),
              }),
            ],
          }),
        ],
      }),
      _,
    ],
  });
}
var _ = `gfH-5yhErEw-`,
  _ = `qbsxSRZc5FI-`,
  _ = `_3oUkt3lGODw-`,
  _ = `_8mffKPxmPPs-`,
  _ = `_2cGscAFdIm8-`,
  _ = `MM448jlh9Sg-`,
  _ = `KlvR5dT3u6Q-`,
  _ = `Hc68--pi8M4-`,
  _ = `Z3GHlXfENIQ-`,
  _ = `_9tZzquHA8Hw-`,
  _ = `TjfxYFRbvW0-`,
  _ = `aXrOhtp-f6M-`,
  _ = `Vgwo-lFsJ2s-`,
  _ = `ccp2Ydcl5AQ-`,
  _ = `QkjOt39blJA-`,
  _ = `QmqsdxxVc-4-`,
  _ = `nqCzE8rZBhc-`,
  _ = _(_(), 1);
function _(_) {
  let { details: _, className: _ } = _,
    _ = _.consumer_appid || 0,
    _ = _.publishedfileid;
  return _(_, 1, _.file_type, _).data
    ? (0, _.jsx)(_, {
        toolTipContent: _.Localize(`#Workshop_StatusIcon_TT_Subscribed`),
        direction: `right`,
        nDelayShowMS: 100,
        children: (0, _.jsx)(`div`, {
          className: (0, _.default)(_, _),
          children: (0, _.jsx)(_, {}),
        }),
      })
    : null;
}
function _(_) {
  let { details: _, className: _ } = _,
    _ = _.consumer_appid,
    _ = _.publishedfileid;
  return _(_, 2, _.file_type, _).data
    ? (0, _.jsx)(_, {
        toolTipContent: _.Localize(`#Workshop_StatusIcon_TT_Favorited`),
        direction: `right`,
        nDelayShowMS: 100,
        children: (0, _.jsx)(`div`, {
          className: (0, _.default)(_, _),
          children: (0, _.jsx)(_, {
            filled: !0,
          }),
        }),
      })
    : null;
}
function _(_) {
  let { details: _, className: _ } = _,
    _ = _.consumer_appid,
    _ = _.publishedfileid;
  return _(_, 3, _.file_type, _).data
    ? (0, _.jsx)(_, {
        toolTipContent: _.Localize(`#Workshop_StatusIcon_TT_Played`),
        direction: `right`,
        nDelayShowMS: 100,
        children: (0, _.jsx)(`div`, {
          className: (0, _.default)(_, _),
          children: (0, _.jsx)(_, {}),
        }),
      })
    : null;
}
function _(_) {
  let { details: _, className: _ } = _;
  return (_.flags ?? 0) & _.kPFIFlag_Incompatible
    ? (0, _.jsx)(_, {
        toolTipContent: _.Localize(`#Workshop_StatusIcon_TT_Incompatible`),
        direction: `right`,
        nDelayShowMS: 100,
        children: (0, _.jsx)(`div`, {
          className: (0, _.default)(_, _),
          children: (0, _.jsx)(_, {}),
        }),
      })
    : null;
}
function _(_) {
  let { className: _ } = _;
  return (0, _.jsx)(_, {
    toolTipContent: _.Localize(`#Workshop_StatusIcon_TT_VotedDown`),
    direction: `right`,
    nDelayShowMS: 100,
    children: (0, _.jsx)(`div`, {
      className: (0, _.default)(_, _),
      children: (0, _.jsx)(_, {}),
    }),
  });
}
function _(_) {
  let { className: _ } = _;
  return (0, _.jsx)(_, {
    toolTipContent: _.Localize(`#Workshop_StatusIcon_TT_VotedUp`),
    direction: `right`,
    nDelayShowMS: 100,
    children: (0, _.jsx)(`div`, {
      className: (0, _.default)(_, _),
      children: (0, _.jsx)(_, {}),
    }),
  });
}
function _(_) {
  let { className: _ } = _;
  return (0, _.jsx)(_, {
    toolTipContent: _.Localize(`#Workshop_StatusIcon_TT_Reported`),
    direction: `right`,
    nDelayShowMS: 100,
    children: (0, _.jsx)(`div`, {
      className: (0, _.default)(_, _),
      children: (0, _.jsx)(_, {}),
    }),
  });
}
function _(_) {
  let { className: _ } = _;
  return (0, _.jsx)(_, {
    toolTipContent: _.Localize(`#Workshop_StatusIcon_TT_BlockedCreator`),
    direction: `right`,
    nDelayShowMS: 100,
    children: (0, _.jsx)(`div`, {
      className: (0, _.default)(_, _),
      children: (0, _.jsx)(_, {}),
    }),
  });
}
function _(_) {
  let { details: _, className: _ } = _;
  return _.workshop_accepted
    ? (0, _.jsx)(_, {
        toolTipContent: _.Localize(`#Workshop_StatusIcon_TT_Accepted`),
        direction: `right`,
        nDelayShowMS: 100,
        children: (0, _.jsx)(`div`, {
          className: (0, _.default)(_, _),
          children: (0, _.jsx)(_, {}),
        }),
      })
    : null;
}
var _ = `oANGzvAVSAs-`,
  _ = `aP4Gy0iCXGk-`,
  _ = `y0E8iqKrgIk-`,
  _ = `Hwk2iwzQzLk-`,
  _ = `kNiYVnGBT4s-`,
  _ = `y-EAQH8Pox0-`;
function _(_) {
  let { steamid: _ } = _,
    _ = _(_);
  if (!_.data) return;
  let _ = _.data?.public_data?.persona_name ?? ``;
  return (0, _.jsx)(_, {
    playerLinkDetails: _.data,
    size: `X-Small`,
    alt: _,
  });
}
function _(_) {
  let { details: _ } = _,
    _ = _(_);
  return _.data?.length
    ? (0, _.jsxs)(_, {
        className: _,
        children: [
          (0, _.jsx)(_, {
            size: `2`,
            children: _.LocalizePlural(
              `#Workshop_ItemTooltip_FriendsWhoFavorited`,
              _.data.length,
            ),
          }),
          (0, _.jsx)(_, {
            direction: `row`,
            gap: `1`,
            children: _.data.map((_) =>
              (0, _.jsx)(
                _,
                {
                  steamid: _,
                },
                _,
              ),
            ),
          }),
        ],
      })
    : null;
}
function _(_) {
  let { details: _ } = _,
    _ = _(_),
    _ = _(_.tags ?? [], _.file_type);
  return (0, _.jsxs)(`div`, {
    className: (0, _.default)(_, _),
    children: [
      (0, _.jsx)(`div`, {
        className: _,
        children: _.title,
      }),
      (0, _.jsx)(`div`, {
        className: _,
        children: _.length == 0 ? `` : _ + `...`,
      }),
      (0, _.jsxs)(_, {
        direction: `column`,
        className: _,
        children: [
          (0, _.jsxs)(`div`, {
            children: [
              _.Localize(`#Workshop_ItemDetails_TimestampCreated`),
              `\xA0`,
              _(_.time_created),
            ],
          }),
          _.time_created != _.time_updated &&
            (0, _.jsxs)(`div`, {
              children: [
                _.Localize(`#Workshop_ItemDetails_TimestampUpdated`),
                `\xA0`,
                _(_.time_updated),
              ],
            }),
        ],
      }),
      _.length != 0 &&
        (0, _.jsx)(_, {
          gap: `1`,
          marginTop: `1`,
          wrap: `wrap`,
          children: _.map((_) =>
            (0, _.jsx)(
              `div`,
              {
                className: `o-1nl4PVk5c-`,
                children: _.display_name ?? _.name,
              },
              _._,
            ),
          ),
        }),
      (0, _.jsx)(_, {
        details: _,
      }),
    ],
  });
}
function _(_) {
  let { details: _ } = _,
    {
      numChildItems: _,
      numChildCollections: _,
      rgChildIDs: _,
      rgChildCollectionIDs: _,
    } = _(_),
    _ = _(_);
  return (
    _.length != 0 && (_ += `...`),
    (0, _.useMemo)(
      () =>
        (0, _.jsxs)(`div`, {
          className: (0, _.default)(_, _),
          children: [
            (0, _.jsx)(`div`, {
              className: _,
              children: _.title,
            }),
            (0, _.jsx)(`div`, {
              className: _,
              children: _,
            }),
            (0, _.jsxs)(`div`, {
              className: _,
              children: [
                _ != 0 &&
                  (0, _.jsxs)(_.Fragment, {
                    children: [
                      (0, _.jsx)(`div`, {
                        children: _.LocalizePlural(
                          `#Workshop_Collection_NumChildItems`,
                          _,
                          _(_),
                        ),
                      }),
                      (0, _.jsxs)(_, {
                        direction: `row`,
                        gap: `1`,
                        wrap: `wrap`,
                        children: [
                          _.slice(0, 10).map((_) =>
                            (0, _.jsx)(
                              _,
                              {
                                publishedfileid: _,
                                className: `VxIeTz3s0GQ-`,
                              },
                              _,
                            ),
                          ),
                          _ > 10 &&
                            (0, _.jsxs)(`div`, {
                              className: `QDN3gIbHDvM-`,
                              children: [`+`, _(_ - 10)],
                            }),
                        ],
                      }),
                    ],
                  }),
                _ != 0 &&
                  (0, _.jsxs)(_.Fragment, {
                    children: [
                      (0, _.jsx)(`div`, {
                        children: _.LocalizePlural(
                          `#Workshop_Collection_NumChildCollections`,
                          _,
                          _(_),
                        ),
                      }),
                      (0, _.jsxs)(_, {
                        direction: `row`,
                        gap: `1`,
                        wrap: `wrap`,
                        children: [
                          _.slice(0, 10).map((_) =>
                            (0, _.jsx)(
                              _,
                              {
                                publishedfileid: _,
                                className: `VxIeTz3s0GQ-`,
                              },
                              _,
                            ),
                          ),
                          _ > 10 &&
                            (0, _.jsxs)(`div`, {
                              className: `QDN3gIbHDvM-`,
                              children: [`+`, _(_ - 10)],
                            }),
                        ],
                      }),
                    ],
                  }),
              ],
            }),
            (0, _.jsx)(_, {
              details: _,
            }),
          ],
        }),
      [_, _, _, _, _, _],
    )
  );
}
function _(_) {
  return (0, _.useMemo)(() => {
    let _ = [],
      _ = [];
    _.children?.forEach((_) => {
      switch (_.file_type) {
        case 2:
          _.push(_);
          break;
        case 0:
        case 1:
        case 11:
          _.push(_);
          break;
      }
    });
    let _ = _.sort((_, _) => (_.sortorder ?? 0) - (_.sortorder ?? 0)).map(
        (_) => _.publishedfileid ?? ``,
      ),
      _ = _.sort((_, _) => (_.sortorder ?? 0) - (_.sortorder ?? 0)).map(
        (_) => _.publishedfileid ?? ``,
      );
    return {
      numChildItems: _.length,
      numChildCollections: _.length,
      rgChildIDs: _,
      rgChildCollectionIDs: _,
    };
  }, [_.children]);
}
function _(_) {
  let {
      publishedfileid: _,
      className: _,
      imageClassName: _,
      forcedWidth: _,
      bShowTitle: _,
    } = _,
    _ = _(_),
    _ = _(_),
    _ = (0, _.useMemo)(
      () =>
        _.data
          ? (0, _.jsx)(_, {
              details: _.data,
            })
          : null,
      [_.data],
    );
  if (!_ || !_.data)
    return (0, _.jsx)(_, {
      direction: `row`,
      gap: `1`,
      className: (0, _.default)(_, _),
      align: `center`,
      children: (0, _.jsx)(
        `div`,
        {
          className: _,
        },
        `preview_image`,
      ),
    });
  let _ = _(_.data.file_type);
  return (0, _.jsx)(_, {
    hoverContent: _,
    popoverProps: {
      placement: `right-start`,
      width: `content`,
    },
    nDelayShowMS: 250,
    bTooltipMode: !0,
    children: (0, _.jsxs)(_, {
      direction: `row`,
      gap: `1`,
      className: (0, _.default)(_, _, _.data?.vote_against && `zny-h-wOMDQ-`),
      align: `center`,
      children: [
        (0, _.jsx)(
          _,
          {
            details: _.data,
            className: _,
            forcedWidth: _ ?? 50,
          },
          `preview_image`,
        ),
        _ &&
          (0, _.jsx)(_, {
            className: `_9cqyto1BPcs-`,
            _: _.Details(_.data.publishedfileid),
            children: (0, _.jsx)(`span`, {
              className: `_9cqyto1BPcs-`,
              children: _.data.title,
            }),
          }),
        (0, _.jsxs)(_, {
          direction: `row`,
          className: _,
          children: [
            _ &&
              (0, _.jsx)(_, {
                details: _.data,
                className: `kxZfjkEvZ6c-`,
              }),
            (0, _.jsx)(_, {
              details: _.data,
              className: _,
            }),
            (0, _.jsx)(_, {
              details: _.data,
              className: _,
            }),
            _.data?.vote_for &&
              (0, _.jsx)(_, {
                className: `W--iOqX4elA-`,
              }),
            _.data?.vote_against &&
              (0, _.jsx)(_, {
                className: `z20-5XzomdA-`,
              }),
          ],
        }),
      ],
    }),
  });
}
function _(_) {
  let {
      publishedfileid: _,
      className: _,
      imageClassName: _,
      forcedWidth: _,
      bShowDetails: _,
    } = _,
    _ = _(_),
    _ = (0, _.useMemo)(
      () =>
        _.data
          ? (0, _.jsx)(_, {
              details: _.data,
            })
          : null,
      [_.data],
    );
  if (!_ || !_.data)
    return (0, _.jsx)(_, {
      direction: `row`,
      gap: `1`,
      className: (0, _.default)(_, _),
      align: `center`,
      children: (0, _.jsx)(
        `div`,
        {
          className: _,
        },
        `preview_image`,
      ),
    });
  let _ = _.data,
    _ = _.num_children ?? 0;
  return (0, _.jsx)(_, {
    hoverContent: _,
    popoverProps: {
      placement: `right-start`,
      width: `content`,
    },
    nDelayShowMS: 250,
    bTooltipMode: !0,
    children: (0, _.jsxs)(_, {
      direction: _ ? `column` : `row`,
      gap: `1`,
      className: (0, _.default)(_, _ && `fUK3ZTu43uU-`, _),
      align: _ ? `stretch` : `center`,
      children: [
        (0, _.jsx)(
          _,
          {
            details: _,
            className: _,
            forcedWidth: _ ?? 50,
          },
          `preview_image`,
        ),
        _ &&
          (0, _.jsxs)(_.Fragment, {
            children: [
              _(_.file_type) &&
                (0, _.jsx)(_, {
                  details: _,
                  className: `Jzaj85UYk30-`,
                }),
              (0, _.jsx)(_, {
                className: `CCtpmU4SmYk-`,
                _: _.Details(_.publishedfileid),
                children: _.title,
              }),
              (0, _.jsx)(`div`, {
                className: `ruzN1ND839E-`,
                children: _.LocalizePlural(
                  `#Workshop_Collection_NumChildItems`,
                  _,
                  _(_),
                ),
              }),
            ],
          }),
      ],
    }),
  });
}
function _(_) {
  let { publishedfileid: _, className: _ } = _,
    _ = _(_);
  return _.data
    ? (0, _.jsx)(_, {
        details: _.data,
        className: _,
      })
    : (0, _.jsx)(`div`, {
        className: (0, _.default)(_, _),
      });
}
function _(_) {
  let { details: _, className: _ } = _,
    _ = _(_.publishedfileid),
    _ = _(_.creator),
    _ = (0, _.useMemo)(
      () =>
        (0, _.jsx)(_, {
          details: _,
        }),
      [_],
    ),
    _ = _(_);
  _.length != 0 && (_ += `...`);
  let _ = _(_.file_type),
    _ = _.data;
  return (0, _.jsx)(_, {
    hoverContent: _,
    popoverProps: {
      placement: `right-start`,
      width: `content`,
    },
    nDelayShowMS: 250,
    bTooltipMode: !0,
    children: (0, _.jsxs)(_, {
      direction: `row`,
      gap: `2`,
      className: (0, _.default)(_, _, _.data?.vote_against && `zny-h-wOMDQ-`),
      children: [
        (0, _.jsx)(_, {
          details: _,
          className: _,
          forcedWidth: 100,
        }),
        (0, _.jsxs)(_, {
          direction: `column`,
          className: _,
          children: [
            (0, _.jsx)(_, {
              className: _,
              _: _.Details(_.publishedfileid),
              children: _.title,
            }),
            _ &&
              (0, _.jsxs)(`div`, {
                className: `QeB75XECBVY-`,
                children: [
                  _.Localize(`#SharedFiles_ManageCollection_Author`),
                  (0, _.jsx)(_, {
                    className: `M-YYNnNLTgg-`,
                    _: `${_(_)}/myworkshopfiles/?appid=${_.consumer_appid}`,
                    children: _(_),
                  }),
                ],
              }),
            _(_.file_type) &&
              (0, _.jsx)(_, {
                details: _,
                className: `Jzaj85UYk30-`,
              }),
            (0, _.jsx)(`div`, {
              className: _,
              children: _,
            }),
          ],
        }),
        (0, _.jsxs)(_, {
          direction: `row`,
          gap: `2`,
          align: `center`,
          className: _,
          children: [
            (0, _.jsxs)(_, {
              direction: `row`,
              gap: `1`,
              children: [
                (0, _.jsx)(_, {
                  details: _,
                  className: _,
                }),
                (0, _.jsx)(_, {
                  details: _,
                  className: _,
                }),
                _.data?.vote_for &&
                  (0, _.jsx)(_, {
                    className: `W--iOqX4elA-`,
                  }),
                _.data?.vote_against &&
                  (0, _.jsx)(_, {
                    className: `z20-5XzomdA-`,
                  }),
              ],
            }),
            _ &&
              (0, _.jsx)(_, {
                details: _,
                size: `1`,
              }),
          ],
        }),
      ],
    }),
  });
}
var _ = `CjYXupratSE-`,
  _ = `DpTRucSz4GM-`,
  _ = `L4HeIBwT4P4-`,
  _ = `_47WVf1GTq30-`;
function _(_, _) {
  let [_, _] = (0, _.useState)(!1),
    _ = (0, _.useCallback)(() => _(!0), [_]),
    _ = (0, _.useCallback)(() => _(!1), [_]),
    _ = _.consumer_appid || 0,
    _ = _.publishedfileid,
    _ = _(_, _, _.file_type, _),
    _ = _(_, _, _.file_type, _),
    _ = _.isFetched && _.data,
    { errorDialog: _, HandleMutationError: _ } = _();
  return {
    onMouseEnter: _,
    onMouseLeave: _,
    bHovered: _,
    bSubscribed: _,
    fnToggleWorkshopSubscription: (0, _.useCallback)(async () => {
      _.mutate(!_, {
        onError: _,
      });
    }, [_, _, _]),
    errorDialog: _,
  };
}
function _(_, _) {
  let _ = _();
  return _({
    mutationFn: async (_) =>
      _(
        `/workshop/actions`,
        `SetSubscriptionListFromCollection`,
        _,
        _,
        _.publishedfileid,
        _.bAddOnly,
      ),
    onSuccess: (_) => {
      _ &&
        (_.invalidateQueries({
          queryKey: [`ugcliststatus`, _, _],
        }),
        _.invalidateQueries({
          queryKey: _(_),
        }),
        _(_));
    },
  });
}
function _(_, _) {
  let _ = _();
  return _({
    mutationFn: async (_) =>
      _(`/workshop/actions`, `UnsubscribeCollection`, _.publishedfileid),
    onSuccess: (_) => {
      _ &&
        (_.invalidateQueries({
          queryKey: [`ugcliststatus`, _, _],
        }),
        _.invalidateQueries({
          queryKey: _(_),
        }),
        _(_));
    },
  });
}
function _(_) {
  let { details: _, onSubscribe: _, onClose: _ } = _,
    { rgChildIDs: _ } = _(_),
    _ = _(_.consumer_appid || 0, 1, _.file_type, _.publishedfileid),
    { errorDialog: _, HandleMutationError: _ } = _();
  return (0, _.jsxs)(_.Fragment, {
    children: [
      (0, _.jsx)(_, {
        strTitle: _.Localize(`#Workshop_Dialog_ItemDependencies`),
        onClose: _,
        children: (0, _.jsxs)(_, {
          className: _,
          children: [
            (0, _.jsxs)(_, {
              gap: `1`,
              direction: `column`,
              marginTop: `1`,
              children: [
                (0, _.jsx)(`div`, {
                  children: _(
                    _.title
                      ? _.Localize(
                          `#Workshop_Dialog_ItemDependencies_Desc1_itemName`,
                          _.title,
                        )
                      : _.Localize(`#Workshop_Dialog_ItemDependencies_Desc1`),
                    (0, _.jsx)(`b`, {}),
                  ),
                }),
                (0, _.jsx)(`div`, {
                  children: _.Localize(
                    `#Workshop_Dialog_ItemDependencies_Desc2`,
                  ),
                }),
                (0, _.jsx)(`div`, {
                  children: _.Localize(
                    `#Workshop_Dialog_ItemDependencies_Desc3`,
                  ),
                }),
                (0, _.jsx)(_, {
                  className: _,
                  direction: `row`,
                  gap: `1`,
                  wrap: `wrap`,
                  children: _.map((_) =>
                    (0, _.jsx)(
                      _,
                      {
                        publishedfileid: _,
                        className: _,
                        imageClassName: _,
                        forcedWidth: 100,
                      },
                      _,
                    ),
                  ),
                }),
              ],
            }),
            (0, _.jsxs)(_, {
              justify: `end`,
              gap: `3`,
              align: `center`,
              marginTop: `5`,
              wrap: `wrap`,
              children: [
                (0, _.jsx)(_, {
                  onClick: _,
                  children: _.Localize(
                    `#Workshop_Dialog_SubscribeJustThisItem`,
                  ),
                }),
                (0, _.jsx)(_, {
                  onClick: async () => {
                    (await _.mutateAsync(void 0, {
                      onError: _,
                    })) && _();
                  },
                  children: _.Localize(`#Workshop_Dialog_SubscribeAll`),
                }),
                (0, _.jsx)(_, {
                  onClick: _,
                  children: _.Localize(`#Button_Cancel`),
                }),
              ],
            }),
          ],
        }),
      }),
      _,
    ],
  });
}
function _(_) {
  let { details: _, size: _ } = _,
    _ = _(_.publishedfileid),
    _ = _(_.publishedfileid),
    _ = !!_.data?.vote_for,
    _ = !!_.data?.vote_against,
    { errorDialog: _, HandleMutationError: _ } = _();
  return (0, _.jsxs)(_.Fragment, {
    children: [
      (0, _.jsx)(`div`, {
        className: (0, _.default)(_, _ && `Znsa0JpgewY-`),
        children: (0, _.jsx)(_, {
          disabled: !_.logged_in,
          onClick: async () => {
            _ ||
              (await _.mutate(!0, {
                onError: _,
              }));
          },
          size: _,
          icon: !0,
          color: `dull`,
          children: (0, _.jsx)(_, {}),
        }),
      }),
      (0, _.jsx)(`div`, {
        className: (0, _.default)(_, _ && `Znsa0JpgewY-`),
        children: (0, _.jsx)(_, {
          disabled: !_.logged_in,
          onClick: async () => {
            _ ||
              (await _.mutate(!1, {
                onError: _,
              }));
          },
          size: _,
          icon: !0,
          color: `dull`,
          children: (0, _.jsx)(_, {}),
        }),
      }),
      _,
    ],
  });
}
function _(_) {
  let { details: _, size: _ } = _,
    {
      bSubscribed: _,
      fnToggleWorkshopSubscription: _,
      bHovered: _,
      onMouseEnter: _,
      onMouseLeave: _,
      errorDialog: _,
    } = _(_, 1),
    [_, _] = (0, _.useState)(!1),
    _ = _
      ? `#Workshop_ItemDetails_Subscribed`
      : `#Workshop_ItemDetails_Subscribe`,
    _ = _
      ? `#Workshop_ItemDetails_Unsubscribe`
      : `#Workshop_ItemDetails_Subscribe`,
    _ = !_.logged_in,
    _ = _.Localize(
      _
        ? `#Workshop_ItemDetails_Signin_TT`
        : _
          ? `#Workshop_ItemDetails_Unsubscribe_TT`
          : `#Workshop_ItemDetails_Subscribe_TT`,
    );
  return (0, _.jsxs)(_.Fragment, {
    children: [
      (0, _.jsx)(_, {
        toolTipContent: _,
        direction: `top`,
        children: (0, _.jsx)(`div`, {
          className: _,
          children: (0, _.jsxs)(_, {
            color: `green`,
            disabled: _,
            onClick: async () => {
              if (!_ && _.file_type == 0 && _.num_children != 0) {
                _(!0);
                return;
              }
              _();
            },
            size: _,
            onMouseEnter: _,
            onMouseLeave: _,
            icon: !0,
            children: [
              _ && !_ && (0, _.jsx)(_, {}),
              _ && _ && (0, _.jsx)(_, {}),
              !_ && (0, _.jsx)(_, {}),
              !_ && _.Localize(_),
              _ && _.Localize(_),
            ],
          }),
        }),
      }),
      _ &&
        (0, _.jsx)(_, {
          details: _,
          onSubscribe: () => {
            _(), _(!1);
          },
          onClose: () => _(!1),
        }),
      _,
    ],
  });
}
function _(_) {
  let { details: _, className: _ } = _,
    {
      bSubscribed: _,
      fnToggleWorkshopSubscription: _,
      bHovered: _,
      onMouseEnter: _,
      onMouseLeave: _,
      errorDialog: _,
    } = _(_, 1),
    [_, _] = (0, _.useState)(!1),
    { data: _, refetch: _ } = _(_.publishedfileid, !1),
    _ = _
      ? `#Workshop_ItemDetails_Unsubscribe_TT`
      : `#Workshop_ItemDetails_Subscribe_TT`;
  return (0, _.jsxs)(_.Fragment, {
    children: [
      (0, _.jsx)(_, {
        toolTipContent: _.Localize(_),
        direction: `right`,
        nDelayShowMS: 250,
        children: (0, _.jsx)(`div`, {
          className: _,
          children: (0, _.jsxs)(_, {
            color: `green`,
            onClick: async () => {
              if (!_ && _.file_type == 0) {
                if (_ === void 0) {
                  if ((await _()).data?.num_children) {
                    _(!0);
                    return;
                  }
                } else if (_?.num_children) {
                  _(!0);
                  return;
                }
              }
              _();
            },
            size: `1`,
            onMouseEnter: _,
            onMouseLeave: _,
            children: [
              _ && !_ && (0, _.jsx)(_, {}),
              _ && _ && (0, _.jsx)(_, {}),
              !_ && (0, _.jsx)(_, {}),
            ],
          }),
        }),
      }),
      _ &&
        (0, _.jsx)(_, {
          details: _ ?? _,
          onSubscribe: () => {
            _(), _(!1);
          },
          onClose: () => _(!1),
        }),
      _,
    ],
  });
}
function _(_) {
  let { details: _, size: _, className: _ } = _,
    {
      bSubscribed: _,
      fnToggleWorkshopSubscription: _,
      bHovered: _,
      onMouseEnter: _,
      onMouseLeave: _,
      errorDialog: _,
    } = _(_, 1),
    _ = !_.logged_in;
  return (0, _.jsxs)(_.Fragment, {
    children: [
      (0, _.jsx)(_, {
        toolTipContent: _.Localize(
          _
            ? `#Workshop_ItemDetails_Signin_TT`
            : _
              ? `#Workshop_ItemDetails_Unsubscribe_TT`
              : `#Workshop_ItemDetails_Subscribe_TT`,
        ),
        direction: `top`,
        children: (0, _.jsx)(`div`, {
          className: (0, _.default)(_, _, _),
          children: (0, _.jsxs)(_, {
            color: `green`,
            disabled: _,
            onClick: _,
            size: _,
            onMouseEnter: _,
            onMouseLeave: _,
            icon: !0,
            children: [
              _ && !_ && (0, _.jsx)(_, {}),
              _ && _ && (0, _.jsx)(_, {}),
              !_ && (0, _.jsx)(_, {}),
            ],
          }),
        }),
      }),
      _,
    ],
  });
}
function _(_) {
  let { details: _, size: _ } = _,
    [_, _] = (0, _.useState)(!1),
    _ = _.consumer_appid || 0,
    _ = _.publishedfileid,
    { errorDialog: _, HandleMutationError: _ } = _(),
    _ = _(_, 1),
    _ = async (_) => {
      await _.mutate(
        {
          publishedfileid: _,
          bAddOnly: _,
        },
        {
          onError: _,
        },
      ),
        _(!1);
    };
  return (0, _.jsxs)(_.Fragment, {
    children: [
      (0, _.jsx)(`div`, {
        className: _,
        children: (0, _.jsxs)(_, {
          disabled: !_.logged_in,
          onClick: () => _(!0),
          size: _,
          icon: !0,
          color: `dull`,
          children: [
            (0, _.jsx)(_, {}),
            _.Localize(`#Workshop_Collection_SubscribeToAll`),
          ],
        }),
      }),
      _ &&
        (0, _.jsxs)(_, {
          strTitle: _.Localize(`#Workshop_Dialog_CollectionSubscribe`),
          onClose: () => _(!1),
          children: [
            (0, _.jsx)(_, {
              children: _.Localize(`#Workshop_Dialog_CollectionSubscribe_Desc`),
            }),
            (0, _.jsxs)(_, {
              justify: `end`,
              gap: `3`,
              align: `center`,
              marginTop: `3`,
              children: [
                (0, _.jsx)(_, {
                  onClick: () => _(!0),
                  autoFocus: !0,
                  children: _.Localize(
                    `#Workshop_Dialog_CollectionSubscribe_AddOnly`,
                  ),
                }),
                (0, _.jsx)(_, {
                  onClick: () => _(!1),
                  children: _.Localize(
                    `#Workshop_Dialog_CollectionSubscribe_Overwrite`,
                  ),
                }),
                (0, _.jsx)(_, {
                  onClick: () => _(!1),
                  children: (0, _.jsx)(`span`, {
                    children: _.Localize(`#Button_Cancel`),
                  }),
                }),
              ],
            }),
          ],
        }),
      _,
    ],
  });
}
function _(_) {
  let { details: _, size: _ } = _,
    _ = _.consumer_appid || 0,
    _ = _.publishedfileid,
    { errorDialog: _, HandleMutationError: _ } = _(),
    _ = _(_, 1);
  return (0, _.jsxs)(_.Fragment, {
    children: [
      (0, _.jsx)(`div`, {
        className: _,
        children: (0, _.jsxs)(_, {
          disabled: !_.logged_in,
          onClick: async () => {
            await _.mutate(
              {
                publishedfileid: _,
              },
              {
                onError: _,
              },
            );
          },
          size: _,
          icon: !0,
          color: `dull`,
          children: [
            (0, _.jsx)(_, {}),
            _.Localize(`#Workshop_Collection_UnsubscribeFromAll`),
          ],
        }),
      }),
      _,
    ],
  });
}
function _(_) {
  let { details: _, size: _ } = _,
    {
      bSubscribed: _,
      fnToggleWorkshopSubscription: _,
      bHovered: _,
      onMouseEnter: _,
      onMouseLeave: _,
      errorDialog: _,
    } = _(_, 2),
    _ = _
      ? `#Workshop_ItemDetails_Favorited`
      : `#Workshop_ItemDetails_Favorite`,
    _ = _
      ? `#Workshop_ItemDetails_Unfavorite`
      : `#Workshop_ItemDetails_Favorite`,
    _ = !_.logged_in;
  return (0, _.jsxs)(_.Fragment, {
    children: [
      (0, _.jsx)(_, {
        toolTipContent: _.Localize(
          _
            ? `#Workshop_ItemDetails_Signin_TT`
            : `#Workshop_ItemDetails_Favorite_TT`,
        ),
        direction: `top`,
        children: (0, _.jsx)(`div`, {
          className: _,
          children: (0, _.jsxs)(_, {
            disabled: _,
            onClick: _,
            size: _,
            onMouseEnter: _,
            onMouseLeave: _,
            icon: !0,
            color: `dull`,
            children: [
              _ &&
                !_ &&
                (0, _.jsx)(_, {
                  filled: !0,
                }),
              _ && _ && (0, _.jsx)(_, {}),
              !_ && (0, _.jsx)(_, {}),
              !_ && _.Localize(_),
              _ && _.Localize(_),
            ],
          }),
        }),
      }),
      _,
    ],
  });
}
function _(_) {
  let { details: _, size: _ } = _,
    [_, _] = (0, _.useState)(!1);
  return (0, _.jsxs)(_.Fragment, {
    children: [
      (0, _.jsx)(_, {
        toolTipContent: _.Localize(`#Workshop_ItemDetails_Share_TT`),
        direction: `top`,
        children: (0, _.jsx)(`div`, {
          className: _,
          children: (0, _.jsxs)(_, {
            onClick: () => _(!0),
            size: _,
            icon: !0,
            color: `dull`,
            children: [
              (0, _.jsx)(_, {}),
              _.Localize(`#Workshop_ItemDetails_Share`),
            ],
          }),
        }),
      }),
      _ &&
        (0, _.jsx)(_, {
          details: _,
          onClose: () => _(!1),
        }),
    ],
  });
}
function _(_) {
  let _ = _();
  return _({
    mutationFn: async (_) =>
      _(`/sharedfiles/actions`, `ReportUGC`, _, _.description, _.reason),
    onSuccess: (_) => {
      _ &&
        _.invalidateQueries({
          queryKey: [`ugcvote`, _],
        });
    },
  });
}
function _(_) {
  let { details: _, size: _ } = _,
    _ = _(_.publishedfileid),
    [_, _] = (0, _.useState)(!1),
    [_, _] = (0, _.useState)(``),
    [_, _] = (0, _.useState)(0),
    { errorDialog: _, HandleMutationError: _ } = _(),
    _ = _(_.publishedfileid),
    _ = async () => {
      await _.mutate({
        description: _,
        reason: _,
      }),
        _(!1);
    },
    _ = _,
    _ = (0, _.jsx)(_, {
      _: `${_.COMMUNITY_BASE_URL}dmca/create/${_.publishedfileid}`,
      children: _.Localize(`#Workshop_Dialog_Report_Here`),
    }),
    _ = (0, _.jsx)(_, {
      _: `${_.COMMUNITY_BASE_URL}trademark/createtrademarkcomplaint/${_.publishedfileid}`,
      children: _.Localize(`#Workshop_Dialog_Report_Here`),
    });
  return (0, _.jsxs)(_.Fragment, {
    children: [
      (0, _.jsx)(_, {
        toolTipContent: _.Localize(`#Workshop_ItemDetails_Report_TT`),
        direction: `top`,
        children: (0, _.jsx)(`div`, {
          className: (0, _.default)(_, _.data?.reported && `Znsa0JpgewY-`),
          children: (0, _.jsx)(_, {
            disabled: _.data?.reported,
            onClick: () => _(!0),
            size: _,
            icon: !0,
            color: `dull`,
            children: (0, _.jsx)(_, {}),
          }),
        }),
      }),
      _ &&
        !_.logged_in &&
        (0, _.jsx)(_, {
          bShowDialog: !0,
          setShowDialog: _,
        }),
      _ &&
        _.logged_in &&
        (0, _.jsx)(_, {
          className: `O16OB-hnU-8-`,
          strTitle: _.Localize(`#Workshop_Dialog_Report`),
          onClose: () => _(!1),
          children: (0, _.jsxs)(_, {
            direction: `column`,
            gap: `2`,
            children: [
              _ == 0 &&
                (0, _.jsxs)(_.Fragment, {
                  children: [
                    (0, _.jsx)(_, {
                      children: _.Localize(
                        `#Workshop_Dialog_Report_Reason_Desc`,
                      ),
                    }),
                    (0, _.jsx)(_, {
                      reasons: _,
                      onSelect: (_) => _(_ ?? 0),
                    }),
                  ],
                }),
              _ != 0 &&
                (0, _.jsxs)(_.Fragment, {
                  children: [
                    (0, _.jsx)(_, {
                      children: _.Localize(
                        `#Workshop_Dialog_Report_Reason`,
                        _(_),
                      ),
                    }),
                    (0, _.jsx)(_, {
                      children: _.Localize(`#Workshop_Dialog_Report_Desc`),
                    }),
                    (0, _.jsx)(_, {
                      value: _,
                      onTextChange: _,
                    }),
                  ],
                }),
              (0, _.jsx)(_, {
                children: _.LocalizeReact(
                  `#Workshop_Dialog_Report_DMCA_Desc`,
                  _,
                ),
              }),
              (0, _.jsx)(_, {
                children: _.LocalizeReact(
                  `#Workshop_Dialog_Report_Trademark_Desc`,
                  _,
                ),
              }),
              (0, _.jsxs)(_, {
                justify: `end`,
                gap: `3`,
                align: `center`,
                marginTop: `3`,
                children: [
                  (0, _.jsx)(_, {
                    disabled: _.trim().length == 0 || _ == 0,
                    onClick: _,
                    autoFocus: !0,
                    children: _.Localize(`#Button_OK`),
                  }),
                  (0, _.jsx)(_, {
                    onClick: () => _(!1),
                    children: (0, _.jsx)(`span`, {
                      children: _.Localize(`#Button_Cancel`),
                    }),
                  }),
                ],
              }),
            ],
          }),
        }),
      _,
    ],
  });
}
var _ = {
  1: _,
  2: _,
  3: _,
};
function _(_) {
  let { details: _, size: _, className: _, classNameReaction: _ } = _,
    [_, _] = (0, _.useState)(!0),
    _ = _(),
    [_, _, _] = _(),
    _ = _(_),
    _ = (0, _.default)(_ && _[_], _);
  if (!_.isSuccess || !_.reactions || _.reactions?.length == 0) return null;
  let _ = [],
    _ = 0;
  for (let _ of _.reactions) {
    let _ = _.data?.find((_) => _.reactionid == _.reactionid);
    _ &&
      (!_ || (_.length < 3 && _.purchaseable)
        ? _.push(_)
        : _.count && (_ += _.count));
  }
  return (0, _.jsxs)(_, {
    className: (0, _.default)(_, _),
    children: [
      (0, _.jsx)(`div`, {
        className: (0, _.default)(_),
        children: (0, _.jsx)(_, {
          disabled: !_.logged_in,
          onClick: _,
          size: _,
          icon: !0,
          color: `dull`,
          children: (0, _.jsx)(_, {}),
        }),
      }),
      (0, _.jsx)(_, {
        targetType: 2,
        bShowModal: _,
        targetid: _.publishedfileid,
        ugcType: _.file_type ?? 0,
        onDismiss: _,
        onSuccess: () => {},
      }),
      _.map((_, _) =>
        (0, _.jsx)(
          _,
          {
            className: _,
            details: _,
            reaction: _,
          },
          _.reactionid,
        ),
      ),
      _ &&
        _ > 0 &&
        (0, _.jsx)(_, {
          className: _,
          nReactions: _,
          onActivate: () => _(!1),
        }),
    ],
  });
}
function _(_) {
  let { details: _, reaction: _, className: _ } = _,
    [_, _, _] = _(),
    _ = _(_.reactionid ?? 0);
  return _.reactionid
    ? (0, _.jsx)(_, {
        bDisabled: _,
        toolTipContent: (0, _.jsx)(_, {
          eReactionID: _.reactionid,
          nCount: _.count,
        }),
        direction: `top`,
        children: (0, _.jsxs)(_, {
          className: (0, _.default)(_, _),
          onActivate: _,
          focusable: !0,
          children: [
            (0, _.jsx)(_, {
              targetType: 2,
              bShowModal: _,
              targetid: _.publishedfileid,
              ugcType: _.file_type ?? 0,
              onDismiss: _,
              initialSelectedReaction: _.reactionid,
              onSuccess: () => {},
            }),
            (0, _.jsx)(`img`, {
              className: _,
              src: _(_.reactionid, !1),
              alt: _?.localized_title,
            }),
            !!_.count &&
              (0, _.jsx)(`div`, {
                className: `vsP0veiFSEg-`,
                children: _(_.count),
              }),
          ],
        }),
      })
    : null;
}
function _(_) {
  let { nReactions: _, onActivate: _, className: _ } = _;
  return (0, _.jsx)(_, {
    toolTipContent: _.Localize(`#Workshop_ItemDetails_ShowAllReactions`),
    direction: `top`,
    children: (0, _.jsxs)(_, {
      className: (0, _.default)(_, _),
      onActivate: _,
      children: [
        (0, _.jsx)(`img`, {
          className: _,
          src: _.STORE_BASE_URL + `public/shared/images/award_icon_blue.svg`,
          alt: _.LocalizePlural(`#Workshop_ItemDetails_ReactionCount`, _, _(_)),
        }),
        (0, _.jsx)(`div`, {
          className: _,
          children: _,
        }),
      ],
    }),
  });
}
function _(_) {
  return _({
    queryKey: [`user_collections`, _],
    queryFn: async () => await _(`/workshop/actions`, `GetUserCollections`, _),
    staleTime: 3600 * 1e3,
  });
}
function _(_) {
  let _ = _();
  return _({
    mutationFn: async (_) =>
      _(`/workshop/actions`, `CreateCollection`, _, _.newCollectionTitle),
    onSuccess: (_) => {
      _.invalidateQueries({
        queryKey: [`user_collections`, _],
      });
    },
  });
}
function _(_) {
  return _({
    mutationFn: async (_) =>
      _(`/workshop/actions`, `ModifyCollections`, _, _.rgCollectionIDs, !0),
    onSuccess: (_) => {},
  });
}
function _(_) {
  let { details: _, onClose: _ } = _,
    { errorDialog: _, HandleMutationError: _ } = _(),
    _ = _(_.consumer_appid),
    [_, _] = (0, _.useState)([]),
    [_, _] = (0, _.useState)(``),
    _ = _(_.consumer_appid),
    _ = _(_.publishedfileid),
    _ = async () => {
      await _.mutate(
        {
          newCollectionTitle: _,
        },
        {
          onError: _,
        },
      );
    },
    _ = async () => {
      await _.mutate(
        {
          rgCollectionIDs: _,
        },
        {
          onError: _,
        },
      ),
        _();
    };
  return (0, _.jsxs)(_.Fragment, {
    children: [
      (0, _.jsxs)(_, {
        strTitle: _.Localize(`#Workshop_Dialog_AddToCollection`),
        onClose: _,
        className: _,
        children: [
          (0, _.jsxs)(_, {
            children: [
              _.data &&
                _.data.length == 0 &&
                (0, _.jsxs)(_.Fragment, {
                  children: [
                    _.Localize(
                      `#Workshop_Dialog_AddToCollection_NoSavedCollections_Desc`,
                    ),
                    (0, _.jsx)(_, {
                      onTextChange: _,
                      value: _,
                      maxLength: 255,
                    }),
                  ],
                }),
              _.data &&
                _.data.length != 0 &&
                (0, _.jsx)(_.Fragment, {
                  children: _.Localize(
                    `#Workshop_Dialog_AddToCollection_Desc`,
                    _.title ?? ``,
                  ),
                }),
            ],
          }),
          (0, _.jsx)(_, {
            className: _,
            children:
              _.data &&
              _.data.length != 0 &&
              (0, _.jsx)(_, {
                marginTop: `2`,
                selected: _,
                onSelectedChange: _,
                direction: `column`,
                children: _.data.map((_) =>
                  (0, _.jsx)(
                    _.Item,
                    {
                      value: _.publishedfileid,
                      children: _.title,
                    },
                    _.publishedfileid,
                  ),
                ),
              }),
          }),
          (0, _.jsxs)(_, {
            justify: `end`,
            gap: `3`,
            align: `center`,
            marginTop: `3`,
            children: [
              _.data &&
                _.data.length != 0 &&
                (0, _.jsx)(_, {
                  disabled: _.length == 0,
                  onClick: () => _(),
                  autoFocus: !0,
                  children: _.Localize(`#Workshop_Dialog_AddToCollection_OK`),
                }),
              _.data &&
                _.data.length == 0 &&
                (0, _.jsx)(_, {
                  disabled: _.trim().length == 0,
                  onClick: () => _(),
                  autoFocus: !0,
                  children: _.Localize(
                    `#Workshop_Dialog_AddToCollection_Create`,
                  ),
                }),
              (0, _.jsx)(_, {
                onClick: _,
                children: (0, _.jsx)(`span`, {
                  children: _.Localize(`#Button_Cancel`),
                }),
              }),
            ],
          }),
        ],
      }),
      _,
    ],
  });
}
function _(_) {
  let { details: _, size: _ } = _,
    [_, _] = (0, _.useState)(!1),
    _ = !_.logged_in;
  return (0, _.jsxs)(_.Fragment, {
    children: [
      (0, _.jsx)(_, {
        toolTipContent: _.Localize(
          _
            ? `#Workshop_ItemDetails_Signin_TT`
            : `#Workshop_ItemDetails_AddToCollection_TT`,
        ),
        direction: `top`,
        children: (0, _.jsx)(`div`, {
          className: _,
          children: (0, _.jsx)(_, {
            disabled: _,
            onClick: () => _(!0),
            size: _,
            icon: !0,
            color: `dull`,
            children: _.Localize(`#Workshop_ItemDetails_AddToCollection`),
          }),
        }),
      }),
      _ &&
        (0, _.jsx)(_, {
          details: _,
          onClose: () => _(!1),
        }),
    ],
  });
}
function _(_, _) {
  let _ = _();
  return _({
    mutationFn: async (_) =>
      _(
        `/workshop/actions`,
        `SaveCollectionToCollection`,
        _,
        _,
        _.dstCollectionID,
        _.newCollectionTitle,
      ),
    onSuccess: (_) => {
      _.invalidateQueries({
        queryKey: [`user_collections`, _],
      });
    },
  });
}
function _(_) {
  let { details: _, onClose: _ } = _,
    { errorDialog: _, HandleMutationError: _ } = _(),
    _ = _(_.consumer_appid),
    [_, _] = (0, _.useState)(0),
    [_, _] = (0, _.useState)(0),
    [_, _] = (0, _.useState)(``),
    { mutateAsync: _ } = _(_.consumer_appid, _.publishedfileid),
    _ = async () => {
      if (!_.data || _ >= _.data.length) return;
      let _ = ``;
      if (_ == 2 && ((_ = _.data[_].publishedfileid), !_)) return;
      let _ = await _(
        {
          dstCollectionID: _,
          newCollectionTitle: _,
        },
        {
          onError: _,
        },
      );
      if ((_(), _ == 1 && _)) {
        let _ = _.Details(_);
        window.location.href = _;
      }
    };
  return (0, _.jsxs)(_.Fragment, {
    children: [
      (0, _.jsxs)(_, {
        strTitle: _.Localize(`#Workshop_Dialog_SaveCollectionToCollection`),
        onClose: _,
        children: [
          (0, _.jsxs)(_, {
            children: [
              _ == 0 &&
                (0, _.jsx)(_.Fragment, {
                  children: _.Localize(
                    `#Workshop_Dialog_SaveCollectionToCollection_Desc`,
                  ),
                }),
              _ == 1 &&
                (0, _.jsx)(_.Fragment, {
                  children: _.Localize(
                    `#Workshop_Dialog_SaveCollectionToCollection_NewPrompt`,
                  ),
                }),
              _ == 2 &&
                (0, _.jsx)(_.Fragment, {
                  children: _.Localize(
                    `#Workshop_Dialog_SaveCollectionToCollection_Select`,
                  ),
                }),
            ],
          }),
          (0, _.jsxs)(_, {
            children: [
              _ == 1 &&
                (0, _.jsx)(_, {
                  onTextChange: _,
                  value: _,
                  maxLength: 255,
                }),
              _ == 2 &&
                _.data &&
                _.data.length != 0 &&
                (0, _.jsx)(_, {
                  options: _.data,
                  getOptionLabel: (_) => _.title ?? ``,
                  selectedValue: _.data[_],
                  onSelectionChange: (_) =>
                    _(
                      _.data.findIndex(
                        (_) => _.publishedfileid == _.publishedfileid,
                      ),
                    ),
                }),
            ],
          }),
          (0, _.jsxs)(_, {
            justify: `end`,
            gap: `3`,
            align: `center`,
            marginTop: `3`,
            children: [
              _ == 0 &&
                (0, _.jsxs)(_.Fragment, {
                  children: [
                    (0, _.jsx)(_, {
                      onClick: () => _(1),
                      autoFocus: !0,
                      children: _.Localize(
                        `#Workshop_Dialog_SaveCollectionToCollection_New`,
                      ),
                    }),
                    (0, _.jsx)(_, {
                      disabled: !_.data || _.data.length == 0,
                      onClick: () => _(2),
                      children: _.Localize(
                        `#Workshop_Dialog_SaveCollectionToCollection_Existing`,
                      ),
                    }),
                  ],
                }),
              _ == 1 &&
                (0, _.jsx)(_.Fragment, {
                  children: (0, _.jsx)(_, {
                    disabled: _.trim().length == 0,
                    onClick: _,
                    children: _.Localize(`#Button_OK`),
                  }),
                }),
              _ == 2 &&
                (0, _.jsx)(_.Fragment, {
                  children: (0, _.jsx)(_, {
                    onClick: _,
                    children: _.Localize(`#Button_OK`),
                  }),
                }),
              (0, _.jsx)(_, {
                onClick: _,
                children: (0, _.jsx)(`span`, {
                  children: _.Localize(`#Button_Cancel`),
                }),
              }),
            ],
          }),
        ],
      }),
      _,
    ],
  });
}
function _(_) {
  let { details: _, size: _ } = _,
    [_, _] = (0, _.useState)(!1);
  return (0, _.jsxs)(_.Fragment, {
    children: [
      (0, _.jsx)(`div`, {
        className: _,
        children: (0, _.jsxs)(_, {
          disabled: !_.logged_in,
          onClick: () => _(!0),
          size: _,
          icon: !0,
          color: `dull`,
          children: [
            (0, _.jsx)(_, {}),
            _.Localize(`#Workshop_ItemDetails_SaveCollectionToCollection`),
          ],
        }),
      }),
      _ &&
        (0, _.jsx)(_, {
          details: _,
          onClose: () => _(!1),
        }),
    ],
  });
}
function _(_) {
  return _({
    queryKey: [`workshop_parents`, _],
    queryFn: async () => await _(`/workshop/actions`, `GetParentsCounts`, _),
    staleTime: 3600 * 1e3,
  });
}
function _(_) {
  let { details: _, onClick: _, bFullWidth: _ } = _,
    _ = _(_.publishedfileid);
  return !_.data || !_.data.total_parent_items || _.data.total_parent_items < 10
    ? null
    : (0, _.jsx)(_.Fragment, {
        children: (0, _.jsx)(_, {
          toolTipContent: _.Localize(
            `#Workshop_ItemDetails_ViewDependentItems_TT`,
            _(_.data.total_parent_items),
          ),
          direction: `top`,
          children: (0, _.jsx)(`div`, {
            className: (0, _.default)(_, _ && `YWBe6JCgXaE-`),
            children: (0, _.jsxs)(_, {
              onClick: _,
              size: `1`,
              color: `dull`,
              children: [
                (0, _.jsx)(_, {
                  children: (0, _.jsx)(_, {}),
                }),
                _.Localize(`#Workshop_ItemDetails_ViewDependentItems`),
              ],
            }),
          }),
        }),
      });
}
function _(_) {
  let { details: _ } = _,
    { setQuickViewItem: _ } = _();
  return (0, _.jsx)(_.Fragment, {
    children: (0, _.jsx)(_, {
      toolTipContent: _.Localize(`#Workshop_Item_QuickView`),
      direction: `right`,
      nDelayShowMS: 100,
      children: (0, _.jsx)(_, {
        className: _,
        onActivate: () => _(_.publishedfileid),
        children: (0, _.jsx)(_, {}),
      }),
    }),
  });
}
export {
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
};
