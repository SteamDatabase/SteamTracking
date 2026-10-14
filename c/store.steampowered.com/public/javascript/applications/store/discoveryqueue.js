(() => {
  (self.webpackChunkstore = self.webpackChunkstore || []).push([
    [89672],
    {
      chunkid: (module, module_exports, __webpack_require__) => {
        "use strict";
        __webpack_require__._(module_exports, {
          _: () => _,
          _: () => _,
        });
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__._(_);
        function _(_, _) {
          return new (_())(
            async (_) => {
              const _ = [..._],
                _ = await _.xtC.GetPlayerLinkDetails(_, {
                  steamids: _,
                }),
                _ = new Map();
              return (
                _.Body()
                  .accounts()
                  .forEach((_) => {
                    const _ = _.toObject();
                    _.set(_.public_data.steamid, _);
                  }),
                _.map((_) => _.get(_) ?? null)
              );
            },
            {
              maxBatchSize: 100,
              cache: !1,
              ..._,
            },
          );
        }
        function _(_) {
          return (0, _._)("PlayerLinkDetails", () => _(_));
        }
      },
      chunkid: (module, module_exports, __webpack_require__) => {
        "use strict";
        __webpack_require__._(module_exports, {
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
        var _ = {};
        __webpack_require__._(_),
          __webpack_require__._(_, {
            _: () => _,
            _: () => _,
            _: () => _,
          });
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__._(_),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        const _ = 0,
          _ = 1,
          _ = 0,
          _ = 1,
          _ = 2;
        function _(_) {
          return "unknown EUserReviewFlaggedByDeveloperType ( " + _ + " )";
        }
        function _(_) {
          return "unknown EUserReviewQuality ( " + _ + " )";
        }
        function _(_) {
          return "unknown EUserReviewVoteTag ( " + _ + " )";
        }
        function _(_) {
          return "unknown EUserReviewAuditAction ( " + _ + " )";
        }
        function _(_) {
          return "unknown EUserReviewsAppReviewsFilter ( " + _ + " )";
        }
        function _(_) {
          return "unknown EUserReviewsReviewType ( " + _ + " )";
        }
        function _(_) {
          return "unknown EUserReviewsPurchaseType ( " + _ + " )";
        }
        function _(_) {
          return "unknown EReviewTagType ( " + _ + " )";
        }
        function _(_) {
          return "unknown EUserReviewBombPeriodType ( " + _ + " )";
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.recommendationid || _._(_._()),
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
                    recommendationid: {
                      _: 1,
                      _: _._.readUint64String,
                      _: _._.writeUint64String,
                    },
                    review_text: {
                      _: 2,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    voted_up: {
                      _: 3,
                      _: _._.readBool,
                      _: _._.writeBool,
                    },
                    is_public: {
                      _: 4,
                      _: _._.readBool,
                      _: _._.writeBool,
                    },
                    language: {
                      _: 5,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    is_in_early_access: {
                      _: 6,
                      _: _._.readBool,
                      _: _._.writeBool,
                    },
                    received_compensation: {
                      _: 7,
                      _: _._.readBool,
                      _: _._.writeBool,
                    },
                    comments_disabled: {
                      _: 8,
                      _: _._.readBool,
                      _: _._.writeBool,
                    },
                    hide_in_steam_china: {
                      _: 9,
                      _: _._.readBool,
                      _: _._.writeBool,
                    },
                    saved_hardware_id: {
                      _: 10,
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
            return "CUserReviews_Update_Request";
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
            return "CUserReviews_Update_Response";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.saved_hardware_id || _._(_._()),
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
                    saved_hardware_id: {
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
            return "CUserReviews_BackfillSavedHardware_Request";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.num_backfilled || _._(_._()),
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
                    num_backfilled: {
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
            return "CUserReviews_BackfillSavedHardware_Response";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.reaction_type || _._(_._()),
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
                    reaction_type: {
                      _: 1,
                      _: _._.readUint32,
                      _: _._.writeUint32,
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
            return "CUserReviews_Recommendation_LoyaltyReaction";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype._ || _._(_._()),
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
                    _: {
                      _: 1,
                      _: _._.readEnum,
                      _: _._.writeEnum,
                    },
                    ranges: {
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
            return "CUserReviews_Recommendation_Tag";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.start || _._(_._()),
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
                    start: {
                      _: 1,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    end: {
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
            return "CUserReviews_Recommendation_Tag_Range";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.recommendationid || _._(_._()),
              _.Message.initialize(this, _, 0, -1, [27, 40, 54], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    recommendationid: {
                      _: 1,
                      _: _._.readUint64String,
                      _: _._.writeUint64String,
                    },
                    steamid: {
                      _: 2,
                      _: _._.readUint64String,
                      _: _._.writeUint64String,
                    },
                    appid: {
                      _: 3,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    review: {
                      _: 4,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    time_created: {
                      _: 5,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    time_updated: {
                      _: 6,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    votes_up: {
                      _: 7,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    votes_down: {
                      _: 8,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    vote_score: {
                      _: 9,
                      _: _._.readFloat,
                      _: _._.writeFloat,
                    },
                    language: {
                      _: 10,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    comment_count: {
                      _: 11,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    voted_up: {
                      _: 12,
                      _: _._.readBool,
                      _: _._.writeBool,
                    },
                    is_public: {
                      _: 13,
                      _: _._.readBool,
                      _: _._.writeBool,
                    },
                    moderator_hidden: {
                      _: 14,
                      _: _._.readBool,
                      _: _._.writeBool,
                    },
                    flagged_by_developer: {
                      _: 15,
                      _: _._.readEnum,
                      _: _._.writeEnum,
                    },
                    report_score: {
                      _: 16,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    steamid_moderator: {
                      _: 17,
                      _: _._.readUint64String,
                      _: _._.writeUint64String,
                    },
                    steamid_developer: {
                      _: 18,
                      _: _._.readUint64String,
                      _: _._.writeUint64String,
                    },
                    steamid_dev_responder: {
                      _: 19,
                      _: _._.readUint64String,
                      _: _._.writeUint64String,
                    },
                    developer_response: {
                      _: 20,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    time_developer_responded: {
                      _: 21,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    developer_flag_cleared: {
                      _: 22,
                      _: _._.readBool,
                      _: _._.writeBool,
                    },
                    written_during_early_access: {
                      _: 23,
                      _: _._.readBool,
                      _: _._.writeBool,
                    },
                    votes_funny: {
                      _: 24,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    received_compensation: {
                      _: 25,
                      _: _._.readBool,
                      _: _._.writeBool,
                    },
                    unverified_purchase: {
                      _: 26,
                      _: _._.readBool,
                      _: _._.writeBool,
                    },
                    review_qualities: {
                      _: 27,
                      _: !0,
                      _: !0,
                      _: _._.readEnum,
                      pbr: _._.readPackedEnum,
                      _: _._.writeRepeatedEnum,
                    },
                    weighted_vote_score: {
                      _: 28,
                      _: _._.readFloat,
                      _: _._.writeFloat,
                    },
                    moderation_note: {
                      _: 29,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    payment_method: {
                      _: 30,
                      _: _._.readInt32,
                      _: _._.writeInt32,
                    },
                    playtime_2weeks: {
                      _: 31,
                      _: _._.readInt32,
                      _: _._.writeInt32,
                    },
                    playtime_forever: {
                      _: 32,
                      _: _._.readInt32,
                      _: _._.writeInt32,
                    },
                    last_playtime: {
                      _: 33,
                      _: _._.readInt32,
                      _: _._.writeInt32,
                    },
                    comments_disabled: {
                      _: 34,
                      _: _._.readBool,
                      _: _._.writeBool,
                    },
                    playtime_at_review: {
                      _: 35,
                      _: _._.readInt32,
                      _: _._.writeInt32,
                    },
                    approved_for_china: {
                      _: 36,
                      _: _._.readBool,
                      _: _._.writeBool,
                    },
                    ban_check_result: {
                      _: 37,
                      _: _._.readEnum,
                      _: _._.writeEnum,
                    },
                    refunded: {
                      _: 38,
                      _: _._.readBool,
                      _: _._.writeBool,
                    },
                    account_score_spend: {
                      _: 39,
                      _: _._.readInt32,
                      _: _._.writeInt32,
                    },
                    reactions: {
                      _: 40,
                      _: _,
                      _: !0,
                      _: !0,
                    },
                    ipaddress: {
                      _: 41,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    hidden_in_steam_china: {
                      _: 42,
                      _: _._.readBool,
                      _: _._.writeBool,
                    },
                    steam_china_location: {
                      _: 43,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    category_ascii_pct: {
                      _: 44,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    category_meme_pct: {
                      _: 45,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    category_offtopic_pct: {
                      _: 46,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    category_uninformative_pct: {
                      _: 47,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    category_votefarming_pct: {
                      _: 48,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    deck_playtime_at_review: {
                      _: 49,
                      _: _._.readInt32,
                      _: _._.writeInt32,
                    },
                    is_bot_review_pct: {
                      _: 50,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    positivity_pct: {
                      _: 51,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    tags_with_ranges: {
                      _: 54,
                      _: _,
                      _: !0,
                      _: !0,
                    },
                    saved_hardware_id: {
                      _: 56,
                      _: _._.readUint64String,
                      _: _._.writeUint64String,
                    },
                    hardware_cluster_id: {
                      _: 57,
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
            return "RecommendationDetails";
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
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CUserReviews_GetFriendsRecommendedApp_Request";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.accountids_recommended || _._(_._()),
              _.Message.initialize(this, _, 0, -1, [1, 3], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    accountids_recommended: {
                      _: 1,
                      _: !0,
                      _: !0,
                      _: _._.readUint32,
                      pbr: _._.readPackedUint32,
                      _: _._.writeRepeatedUint32,
                    },
                    accountids_not_recommended: {
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
            return "CUserReviews_GetFriendsRecommendedApp_Response";
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
            return "CUserReviews_GetIndividualRecommendations_Request";
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
                    appid: {
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
            return "CUserReviews_GetIndividualRecommendations_Request_RecommendationRequest";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.recommendations || _._(_._()),
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
                    recommendations: {
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
            return "CUserReviews_GetIndividualRecommendations_Response";
          }
        }
        var _;
        ((_) => {
          function _(_, _, _) {
            return _.SendMsg("UserReviews.Update#1", (0, _._)(_, _, _), _, {
              ePrivilege: 3,
            });
          }
          _.Update = _;
          function _(_, _, _) {
            return _.SendMsg(
              "UserReviews.BackfillSavedHardware#1",
              (0, _._)(_, _, _),
              _,
              {
                ePrivilege: 1,
              },
            );
          }
          _.BackfillSavedHardware = _;
          function _(_, _, _) {
            return _.SendMsg(
              "UserReviews.GetFriendsRecommendedApp#1",
              (0, _._)(_, _, _),
              _,
              {
                bConstMethod: !0,
                ePrivilege: 1,
              },
            );
          }
          _.GetFriendsRecommendedApp = _;
          function _(_, _, _) {
            return _.SendMsg(
              "UserReviews.GetIndividualRecommendations#1",
              (0, _._)(_, _, _),
              _,
              {
                bConstMethod: !0,
                ePrivilege: 1,
                eWebAPIKeyRequirement: 2,
              },
            );
          }
          _.GetIndividualRecommendations = _;
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
        const _ = {
          bCanClaimNewItem: !1,
          bAlreadyClaimedCurrentItem: !1,
        };
        async function _(_, _) {
          const _ = await _._.CanClaimItem(_, {
            language: _,
          });
          if (_.GetEResult() != _._)
            throw new Error(
              "SaleItemRewards.CanClaimItem answered " + _.GetEResult(),
            );
          const _ = _.Body().toObject(),
            _ = _.reward_item?.defid ? _.reward_item : void 0;
          return {
            bCanClaimNewItem: !!_.can_claim,
            bAlreadyClaimedCurrentItem: !!_,
            appid: _?.appid,
            community_item_type: _?.community_item_type,
            community_item_class: _?.community_item_class,
            rtNextClaimTime:
              (_.next_claim_time ?? 0) > 0 ? _.next_claim_time : void 0,
          };
        }
        async function _(_, _) {
          const _ = await _._.ClaimItem(_, {
            language: _,
          });
          if (_.GetEResult() == _._) return _(_, _);
          if (_.GetEResult() != _._)
            throw new Error(
              "SaleItemRewards.ClaimItem answered " + _.GetEResult(),
            );
          const _ = _.Body().toObject().reward_item;
          return {
            bCanClaimNewItem: !1,
            bAlreadyClaimedCurrentItem: !0,
            appid: _?.appid,
            community_item_type: _?.community_item_type,
            community_item_class: _?.community_item_class,
            rtNextClaimTime:
              (_.Body().next_claim_time() ?? 0) > 0
                ? _.Body().next_claim_time()
                : void 0,
          };
        }
        async function _(_, _) {
          const _ = await _._.ActivateProfileModifierItem(_, {
            communityitemid: _.communityitemid,
            appid: _.appid,
            activate: !0,
          });
          if (_.GetEResult() != _._)
            throw new Error(
              "Quest.ActivateProfileModifierItem answered " + _.GetEResult(),
            );
          return _.GetEResult();
        }
        async function _(_, _, _, _) {
          return (
            await _._.GetCurrentDefinition(_, {
              sale_def_type: _,
              language: _,
              include_community_item_def: _,
            })
          )
            .Body()
            .toObject();
        }
        async function _(_, _, _, _) {
          return (
            await _._.GetClaimedSaleRewards(_, {
              sale_def_type: _,
              language: _,
              include_community_item_def: _,
            })
          )
            .Body()
            .toObject();
        }
        let _;
        function _() {
          const _ = (0, _._)();
          if (_) return _.GetServiceTransport();
          if (!_) {
            const _ = (0, _._)("loyalty_webapi_token", "application_config");
            _ = _ ? new _._(_._.WEBAPI_BASE_URL, _) : (0, _._)();
          }
          return _.GetServiceTransport();
        }
        async function _(_) {
          return _(_(), _);
        }
        async function _(_) {
          return _(_(), _);
        }
        async function _(_) {
          return _(_(), _);
        }
        const _ = 300 * 1e3;
        let _ = !1,
          _ = null;
        const _ = {
          appid: 2243810,
          community_item_type: 2,
          community_item_class: _._,
        };
        function _(_) {
          return ["SaleItemCanClaim", _];
        }
        function _(_) {
          return {
            queryKey: _(_),
            queryFn: () => _(_),
            enabled: !_,
            staleTime: 1 / 0,
            retry: !1,
          };
        }
        function _() {
          const _ = _._.LANGUAGE,
            _ = (0, _._)(),
            { data: _, isLoading: _ } = (0, _._)(_(_)),
            _ = _?.rtNextClaimTime;
          return (
            (0, _.useEffect)(() => {
              let _ = 0;
              if (_) {
                const _ = () => {
                  const _ = _ * 1e3 - Date.now();
                  if (_ <= 0) {
                    _.invalidateQueries({
                      queryKey: _(_),
                    });
                    return;
                  }
                  _ = window.setTimeout(_, _ > _ ? _ / 2 : _);
                };
                _();
              }
              return () => window.clearTimeout(_);
            }, [_, _, _]),
            {
              ...(_ ?? _),
              bLoading: _,
            }
          );
        }
        function _() {
          const _ = (0, _._)(),
            { mutateAsync: _ } = (0, _._)({
              mutationFn: () => {
                if (_) {
                  const _ = _;
                  return (_ = null), Promise.resolve(_);
                }
                return _
                  ? Promise.resolve(_.getQueryData(_(_._.LANGUAGE)) ?? _)
                  : _(_._.LANGUAGE);
              },
              onSuccess: (_) => _.setQueryData(_(_._.LANGUAGE), _),
            });
          return {
            fnClaimItem: (0, _.useCallback)(() => _(), [_]),
          };
        }
        function _() {
          return (0, _._)({
            mutationFn: (_) => _(_),
          });
        }
        function _() {
          const _ = (0, _._)();
          return {
            fnSetClaimState: (0, _.useCallback)(
              (_) => {
                (_ = !0),
                  (_ = _.bCanClaimNewItem
                    ? {
                        bAlreadyClaimedCurrentItem: !0,
                        bCanClaimNewItem: !1,
                        rtNextClaimTime: Math.floor(Date.now() / 1e3) + 3600,
                        ..._,
                      }
                    : null),
                  _.setQueryData(_(_._.LANGUAGE), _);
              },
              [_],
            ),
          };
        }
        function _(_, _, _) {
          return ["SaleRewardsGetDefinition", _, _, _];
        }
        function _(_, _, _, _) {
          return {
            queryKey: _(_, _, _),
            queryFn: () => _(_, _, _, _),
            staleTime: 1 / 0,
          };
        }
        function _(_, _, _) {
          const _ = (0, _._)();
          return (0, _._)(_(_, _, _, _));
        }
        function _(_, _, _, _) {
          return ["GetClaimedSaleRewards", _, _, !!_, _];
        }
        function _(_, _, _, _, _) {
          return {
            queryKey: _(_, _, _, _),
            queryFn: () => _(_, _, _, _),
            staleTime: 1 / 0,
          };
        }
        function _(_, _, _, _) {
          const _ = (0, _._)();
          return (0, _._)(_(_, _, _, _, _));
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
          _ = __webpack_require__("chunkid");
        const _ = {
            name: "trailerPrefs",
            options: {
              path: "/",
              secure: !0,
              maxAge: 720 * 60 * 60 * 1e3,
            },
            preferenceControls: {
              isTechnicallyNecessary: !0,
            },
          },
          _ = {
            flVolume: 0.8,
            bMuted: !0,
          };
        function _(_) {
          return _.flVolume === _.flVolume && _.bMuted === _.bMuted;
        }
        function _() {
          try {
            const _ = (0, _._)(_);
            if (!_) return _;
            const _ = JSON.parse(_);
            return {
              flVolume: typeof _.flVolume == "number" ? _.flVolume : _.flVolume,
              bMuted: typeof _.bMuted == "boolean" ? _.bMuted : _.bMuted,
            };
          } catch {
            return _;
          }
        }
        function _(_) {
          _(_) || Object.keys(_).length == 0
            ? (0, _._)(_)
            : (0, _._)(_, JSON.stringify(_));
        }
        function _(_) {
          let { children: _ } = _;
          const [_, _] = (0, _.useState)(() => _());
          return (
            (0, _.useEffect)(() => {
              _(_);
            }, [_]),
            (0, _.jsx)(_._, {
              playerVolume: _.flVolume,
              setPlayerVolume: (_) =>
                _((_) => ({
                  ..._,
                  flVolume: _,
                })),
              audioMuted: _.bMuted,
              setAudioMuted: (_) =>
                _((_) => ({
                  ..._,
                  bMuted: _,
                })),
              children: _,
            })
          );
        }
      },
      chunkid: (module, module_exports, __webpack_require__) => {
        "use strict";
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
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        async function _(_, _) {
          const _ = (0, _._)(_._.STORE_BASE_URL, _, _._.country_code);
          return (await (await fetch(_)).json()).rgRecommendedTags || [];
        }
        function _() {
          const _ = (0, _._)(),
            _ = _._.accountid;
          return (0, _._)(_(_, _));
        }
        function _(_, _) {
          return {
            queryKey: _(_),
            queryFn: async () => (_ ? await _(_, _) : []),
            staleTime: 600 * 1e3,
          };
        }
        function _(_) {
          return ["RecommendedTag", _ ?? 0];
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
          _ = __webpack_require__._(_);
        function _(_, _) {
          _.useEffect(() => {
            if (!_ || !_.onended || !_) return;
            let _ = _.onended,
              _ = setTimeout(() => {
                _();
              }, 6 * 1e3);
            return () => clearTimeout(_);
          }, [_, _]);
        }
        function _(_, _) {
          _.useEffect(() => {
            if (!_) return;
            const _ = () => _(!0),
              _ = () => _(!1);
            return (
              _.addEventListener("play", _),
              _.addEventListener("pause", _),
              () => {
                _.removeEventListener("play", _),
                  _.removeEventListener("pause", _);
              }
            );
          }, [_, _]);
        }
        function _(_, _, _, _) {
          return _.useCallback(() => {
            _ == _._
              ? _(!0)
              : _ == _._ && _
                ? _.paused
                  ? _.play()
                  : _.pause()
                : _ == _._ && _ && (_.IsPaused() ? _.Play() : _.Pause());
          }, [_, _, _, _]);
        }
        function _(_, _, _, _, _, _) {
          const [_, _] = _.useState(!1);
          _.useEffect(() => {
            _ && !_
              ? _ == _._ && _ && _
                ? (_.pause(), _(!0))
                : _ == _._ && _ && _ && (_.Pause(), _(!0))
              : !_ &&
                _ &&
                (_ == _._ && _ ? _.play() : _ == _._ && _ && _.Play(), _(!1));
          }, [_, _, _, _, _, _, _]);
        }
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        const _ = new _._("TrailerAppVideo"),
          _ = "bGameHighlightAutoplayDisabled";
        function _(_) {
          const {
              _: _,
              bCurrentlyActive: _,
              autoPlayCookieName: _,
              trailerBaseID: _,
              showScreenshotInsteadOfMainCap: _,
              autoplayCheckboxPosition: _,
              refTogglePlayPause: _,
              bShowAOAutoPlayWarning: _,
              ..._
            } = _,
            [_, _] = _.useState(!1),
            [_, _] = _.useState(!1),
            _ = (0, _._)(),
            _ = (0, _._)(_, _, !0, _),
            { data: _ } = (0, _._)(_),
            { data: _ } = (0, _._)(_),
            _ = (0, _._)(_),
            _ = (_ ?? !0) && _ && !_.all_ages && _ == "masked",
            _ = (0, _._)(),
            [_, _] = _.useState(!1),
            [_, _] = _.useState(_._),
            [_, _] = (0, _.useState)(null),
            [_, _] = (0, _.useState)(null),
            { bCookieLoaded: _ } = _(_, _, _),
            _ = _;
          _.useEffect(() => {
            _ && _ && _ && !_ && _(!0);
          }, [_, _, _, _]),
            _.useEffect(() => {
              _ && _ && _ && _();
            }, [_, _, _, _]);
          const _ = (_) => {
              (0, _._)(_ ?? _, String(!_), 365 * 10), _(_), _(_);
            },
            _ = _(_, _, _, _);
          _.useEffect(() => {
            _ && (_.current = _);
          }, [_, _]);
          const _ =
            _ && _ && _.length > 0
              ? (0, _._)(_[0], "600x338")
              : _
                ? (0, _._)(_, "main_capsule")
                : void 0;
          return (0, _.jsxs)(_._, {
            className: _().AppCarouselTrailerCtn,
            onMouseEnter: () => _(!0),
            onMouseLeave: () => _(!1),
            children: [
              (0, _.jsx)("button", {
                onClick: _,
                "aria-label": _._.Localize("#SaleTrailerCarousel_PlayPause"),
                children: (0, _.jsx)("img", {
                  className: (0, _._)(_().AppMainCap, _ != _._ && _().Hidden),
                  src: _,
                  alt: "",
                }),
              }),
              _ &&
                (0, _.jsx)(_, {
                  appID: _.appid,
                  bAutoplayVideos: _,
                  autoplayCheckboxPosition: _,
                  fnSetAutoPlayVideos: _,
                }),
              (0, _.jsx)(_._, {
                name: _?.name ?? "",
                trailerCategory: _?.trailer_category,
                trailerDisplay: _,
                mouseOver: _,
              }),
              (0, _.jsx)(_, {
                eTrailerDisplay: _,
                setTrailerDisplay: _,
                featuredTrailer: _,
                fnSetMainTrailer: _,
                fnSetMicroTrailer: _,
                loadedAndActive: _ && _,
                setVideoShouldStart: _,
                bMouseOverVideo: _,
                _: _,
                fnTogglePlayPause: _,
                bAutoplayVideos: _,
                bVideoShouldStart: _,
                ..._,
              }),
              _ &&
                _ &&
                (0, _.jsxs)("div", {
                  className: _().AOWarning,
                  children: [
                    (0, _.jsx)("div", {
                      className: _().Text,
                      children: (0, _._)("#StoreTrailer_AOWarning_1"),
                    }),
                    (0, _.jsx)("div", {
                      className: _().Text,
                      children: (0, _._)("#StoreTrailer_AOWarning_2"),
                    }),
                  ],
                }),
            ],
          });
        }
        function _(_, _) {
          const [_, _] = _.useState(!1);
          return (
            _.useEffect(() => (_ && (_(), _(!0)), () => _(!1)), [_, _]),
            {
              bCookieLoaded: _,
            }
          );
        }
        function _(_, _, _) {
          const _ = _.useCallback(() => {
            const _ = (0, _._)(_ ?? _),
              _ = !!(_ && _.toLowerCase() === "true");
            _(!_);
          }, [_, _]);
          return _(_, _);
        }
        function _(_) {
          const {
              _: _,
              featuredTrailer: _,
              bSkipMicroTrailer: _,
              nFadeRatio: _,
              fnPlayPause: _,
              bRequestPause: _,
              fnComplete: _,
              eTrailerDisplay: _,
              setTrailerDisplay: _,
              fnSetMainTrailer: _,
              fnSetMicroTrailer: _,
              loadedAndActive: _,
              setVideoShouldStart: _,
              fnTogglePlayPause: _,
              bAutoplayVideos: _,
              bVideoShouldStart: _,
            } = _,
            [_, _] = _.useState(!1),
            [_, _] = _.useState(!1),
            [_, _] = _.useState(!1),
            [_, _] = _.useState(!1),
            [_, _] = (0, _.useState)(null),
            [_, _] = (0, _.useState)(null),
            { data: _ } = (0, _._)(_),
            _ = !!_;
          _.useEffect(() => {
            let _ = !1;
            _ &&
              _ &&
              _ &&
              (_ = _ === _._ || (_ === _._ && !_) || (_ === _._ && !_)),
              _(_),
              _?.(_ && _);
          }, [_, _, _, _, _, _, _, _]),
            _(_, _),
            _.useEffect(() => {
              _ ||
                (_(_._),
                _(!1),
                _(!1),
                _ && (_.pause(), (_.currentTime = 0)),
                _ && (_.Pause(), _.SeekToStart()));
            }, [_, _, _, _]);
          const _ = _.useRef(!1);
          _.useEffect(() => {
            if (_ && _ === _._)
              if ((_(!0), _)) {
                if (_) {
                  _.Debug("Starting microtrailer"), _(_._);
                  const _ = () => _(_, _, _);
                  _ || !_
                    ? _()
                    : (_(!0),
                      (_.onended = _),
                      _(_, "microtrailer", () => _(!1)));
                }
              } else _.Debug("Showing image");
          }, [_, _, _, _, _, _, _, _]),
            _(_, _),
            _.useEffect(() => {
              _ || _(!1);
            }, [_, _]),
            _(!!_, _, _, _, _, _);
          const _ = (0, _.useCallback)((_) => {
            _(_), _(_);
          }, []);
          return !_ || !_.visible || !_
            ? null
            : (0, _.jsxs)(_.Fragment, {
                children: [
                  _ &&
                    (0, _.jsx)(_._, {
                      focusable: !0,
                      onClick: _,
                      className: _().PlayButton,
                      children: (0, _.jsx)(_.IOc, {}),
                    }),
                  _.microtrailer &&
                    (0, _.jsx)("video", {
                      className: _(!0, _),
                      ref: _,
                      preload: "auto",
                      playsInline: !0,
                      muted: !0,
                      onClick: _,
                      children: (0, _.jsx)(_._, {
                        trailer: _,
                      }),
                    }),
                  (0, _.jsx)(_, {
                    trailer: _,
                    onRefChange: (_) => {
                      _(_), _(_);
                    },
                    eTrailerDisplay: _,
                    fadeRatio: _,
                    onPlayPauseChange: _,
                    onPlaybackEnd: _,
                  }),
                ],
              });
        }
        function _(_) {
          let {
            trailer: _,
            eTrailerDisplay: _,
            fadeRatio: _,
            onPlayPauseChange: _,
            onPlaybackEnd: _,
            onRefChange: _,
          } = _;
          const [_, _] = (0, _.useState)(null);
          (0, _.useEffect)(() => {
            if (_ !== void 0 && _) {
              let _ = _.GetVolume() * _;
              _.SetVolume(_, !0);
            }
          }, [_, _]);
          let _ = _ != _._,
            _ = _(!1, _);
          const _ = (0, _.useMemo)(() => (0, _._)(_), [_]),
            _ = (0, _.useCallback)((_) => {
              _(_), _(_);
            }, []),
            _ = (0, _.useCallback)(() => {
              _(!0);
            }, [_]);
          return (0, _.jsx)(_._, {
            children: (0, _.jsx)("div", {
              className: _,
              children: (0, _.jsx)(_._, {
                ref: _,
                dashManifests: _.rgDashTrailers,
                hlsManifest: _.rgHlsTrailers[0],
                captionManifest: (0, _._)(_),
                screenshot: "",
                altText: _.trailer_name,
                forcePause: _,
                muteWhenAutoplayBlocked: !0,
                onPlaybackEnd: _,
                onPlaybackStart: _,
                onPlayPauseChange: _,
              }),
            }),
          });
        }
        function _(_, _, _) {
          _.current ||
            ((_.current = !0),
            _.Debug("Starting main trailer"),
            _(_._),
            _.Play());
        }
        function _(_, _, _) {
          _.play().catch((_) => {
            _(), _.Warning(`Failed to play ${_}: `, _);
          });
        }
        function _(_, _) {
          return (0, _._)({
            [_().AppVideo]: !0,
            [_().PlayFullTrailer]: _ == _._,
            [_().PlayMicrotrailer]: _ == _._,
            [_().NoTrailer]: _ == _._,
            [_().Microtrailer]: _,
            [_().Trailer]: !_,
          });
        }
        function _(_) {
          const {
              appID: _,
              bAutoplayVideos: _,
              fnSetAutoPlayVideos: _,
              autoplayCheckboxPosition: _,
            } = _,
            _ = {
              [_ || "top"]: 0,
            };
          return (0, _.jsx)(_.Fragment, {
            children: (0, _.jsx)("div", {
              onClick: (_) => {
                _.preventDefault(), _.stopPropagation();
              },
              className: _().AutoplayCheckboxCtn,
              children: (0, _.jsx)(
                _._,
                {
                  controlled: !0,
                  checked: _,
                  className: _().AutoplayCheckbox,
                  style: _,
                  label: _._.Localize("#StoreTrailer_AutoPlayVideos"),
                  onChange: _,
                },
                _,
              ),
            }),
          });
        }
        function _(_) {
          const {
              appID: _,
              trailerBaseID: _,
              focused: _,
              skipMicroTrailer: _,
              autoPlayCookieName: _,
              showAOAutoPlayWarning: _,
              showScreenshotInsteadOfMainCap: _,
              fadeRatio: _,
              fnPlayPause: _,
              refTogglePlayPause: _,
              bRequestPause: _,
              fnComplete: _,
            } = _,
            _ = (0, _._)(_),
            { data: _ } = (0, _._)(_),
            { data: _ } = (0, _._)(_),
            { bIsIgnored: _ } = _(_),
            { bIsWishlisted: _ } = _(_),
            { bIsWishlisted: _ } = _(_?.related_items?.parent_appid),
            [_, _] = (0, _._)();
          return (0, _.jsxs)(_._, {
            className: (0, _._)(_().AppVideoCtn, "AppVideoCtn"),
            children: [
              (0, _.jsx)("div", {
                className: (0, _._)(_().WishlistBadge, (_ || _) && _().Active),
                children: (0, _._)("#Sale_OnWishlist"),
              }),
              _ &&
                (0, _.jsx)(_._, {
                  eDisplay: _,
                  className: _().DeckVerifiedLogo,
                  storeItemPlatform: _,
                }),
              (0, _.jsxs)("div", {
                className: _().VideoArea,
                children: [
                  (0, _.jsx)(_, {
                    appID: _,
                  }),
                  (0, _.jsx)(
                    _,
                    {
                      _: _,
                      trailerBaseID: _,
                      bCurrentlyActive: _ && !_,
                      autoplayCheckboxPosition: "top",
                      autoPlayCookieName: _,
                      bShowAOAutoPlayWarning: _,
                      bSkipMicroTrailer: _,
                      nFadeRatio: _,
                      showScreenshotInsteadOfMainCap: _,
                      fnPlayPause: _,
                      refTogglePlayPause: _,
                      bRequestPause: _,
                      fnComplete: _,
                    },
                    _,
                  ),
                ],
              }),
            ],
          });
        }
        function _(_) {
          const _ = (0, _._)(_),
            _ = (0, _._)(),
            { mutateAsync: _ } = (0, _._)(_, !_, _);
          return {
            bIsIgnored: _,
            fnUpdateIgnored: _,
          };
        }
        function _(_) {
          const { appID: _ } = _,
            _ = (0, _._)(),
            { bIsIgnored: _, fnUpdateIgnored: _ } = _(_);
          return (0, _.jsx)("div", {
            className: (0, _._)(_().IgnoredCtn, _ && _().Active),
            children: (0, _.jsxs)("div", {
              className: (0, _._)(_().IgnoredInfo, _ && _().Active),
              children: [
                (0, _.jsx)("div", {
                  className: _().IgnoredTitle,
                  children: (0, _._)("#SaleTrailerCarousel_Ignored"),
                }),
                (0, _.jsx)("div", {
                  className: _().IgnoredDescription,
                  children: (0, _._)(
                    "#SaleTrailerCarousel_IgnoredConfirmation",
                  ),
                }),
                (0, _.jsxs)(_._, {
                  className: (0, _._)(_().UndoButton, _().UndoIgnoreButton),
                  onClick: _,
                  children: [
                    _ &&
                      (0, _.jsx)(_._, {
                        button: _._._,
                        type: _._.Light,
                        size: _._.Medium,
                      }),
                    (0, _._)("#SaleTrailerCarousel_Undo"),
                  ],
                }),
              ],
            }),
          });
        }
        function _(_) {
          const _ = !!(0, _._)(_),
            _ = (0, _._)(),
            { mutate: _ } = (0, _._)(_, !_, _);
          return {
            bIsWishlisted: _,
            fnUpdateWishlist: _,
          };
        }
        function _(_) {
          const { data: _ } = _(),
            _ = _.useMemo(
              () =>
                new Map((_ || []).map((_) => _.tagid).map((_, _) => [_, _])),
              [_],
            ),
            _ = _.useMemo(() => new Map(_.map((_, _) => [_, _])), [_]);
          return _.useMemo(
            () =>
              _.slice().sort((_, _) =>
                _.has(_) && !_.has(_)
                  ? -1
                  : !_.has(_) && _.has(_)
                    ? 1
                    : _.has(_)
                      ? _.get(_) - (_.get(_) ?? 0)
                      : _.get(_) - _.get(_),
              ),
            [_, _, _],
          );
        }
      },
      chunkid: (module, module_exports, __webpack_require__) => {
        "use strict";
        __webpack_require__._(module_exports, {
          _: () => _,
        });
        function _(_) {
          return Object.prototype.toString.call(_) === "[object Object]";
        }
        function _(_) {
          if (!_(_)) return !1;
          const _ = _.constructor;
          if (typeof _ > "u") return !0;
          const _ = _.prototype;
          return !(
            !_(_) || !Object.prototype.hasOwnProperty.call(_, "isPrototypeOf")
          );
        }
        function _(..._) {
          return JSON.stringify(_, (_, _) => {
            if (_(_)) {
              const _ = {};
              return (
                Object.keys(_)
                  .sort()
                  .forEach((_) => {
                    _[_] = _[_];
                  }),
                _
              );
            }
            return _;
          });
        }
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        const _ = (0, _.createContext)({
          instances: {},
          factories: {},
        });
        function _(_) {
          const { name: _, fnFactory: _, children: _ } = _,
            _ = React.useContext(_),
            [_] = useState({}),
            _ = useMemo(
              () => ({
                instances: _,
                factories: {
                  ..._.factories,
                  [_]: _,
                },
                parent: _,
              }),
              [_, _, _],
            );
          return jsx(_.Provider, {
            value: _,
            children: _,
          });
        }
        function _(_, _) {
          const _ = (0, _.useContext)(_),
            _ = typeof _ == "string" ? _ : _(..._);
          let _ = _;
          for (; _; ) {
            if (_ in _.instances) return _.instances[_];
            if (_ in _.factories) break;
            _ = _.parent;
          }
          const _ = (_?.factories[_] ?? _)();
          return ((_ ?? _).instances[_] = _), _;
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
          _ = __webpack_require__("chunkid");
        const _ = _.createContext({
          enabled: !0,
        });
        function _(_) {
          const { enabled: _, children: _ } = _,
            _ = _.useMemo(
              () => ({
                enabled: _,
              }),
              [_],
            );
          return (0, _.jsx)(_.Provider, {
            value: _,
            children: _,
          });
        }
        function _(_) {
          const {
              placeholderWidth: _,
              placeholderHeight: _,
              holdGamepadFocus: _ = !1,
              onRender: _,
              style: _,
              mode: _ = "JustLoad",
              children: _,
              ..._
            } = _,
            _ = _.useContext(_),
            [_, _] = _.useState(() => ({
              bRenderChildren: !_.enabled,
              nPrevRenderHeight: 0,
              nPrevRenderWidth: 0,
            })),
            _ = _.useRef(null),
            _ = _ === "LoadAndUnload" && _.enabled,
            _ = _.useCallback(
              (_) => {
                _((_) => {
                  if (_.bRenderChildren === _ || (_.bRenderChildren && !_))
                    return _;
                  let _ = 0,
                    _ = 0;
                  if (_.current) {
                    const _ = _.current.getBoundingClientRect();
                    _ && ((_ = _.width), (_ = _.height));
                  }
                  return (
                    _ && _ && _(),
                    {
                      bRenderChildren: _,
                      nPrevRenderWidth: _,
                      nPrevRenderHeight: _,
                    }
                  );
                });
              },
              [_, _],
            );
          _.useEffect(() => {
            _.enabled || _(!0);
          }, [_.enabled, _]);
          let _ = _;
          if (!_.bRenderChildren) {
            const _ = _.nPrevRenderWidth || _,
              _ = _.nPrevRenderHeight || _;
            (_ !== void 0 || _ !== void 0) &&
              (_ = {
                ..._,
                minHeight: _,
                minWidth: _,
              });
          }
          const _ = _ ? "repeated" : "once";
          let _ = (0, _.jsx)(_._, {
            containerRef: _,
            style: _,
            ..._,
            onVisibilityChange: _,
            trigger: _,
            children: _.bRenderChildren && _,
          });
          return (
            _ &&
              (_ = (0, _.jsx)(_._, {
                focusableIfEmpty: !0,
                style: {
                  height: "100%",
                },
                children: _,
              })),
            _
          );
        }
      },
      chunkid: (module, module_exports, __webpack_require__) => {
        "use strict";
        __webpack_require__._(module_exports),
          __webpack_require__._(module_exports, {
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
          _ = __webpack_require__("chunkid");
        function _(_) {
          const { appID: _ } = _,
            _ = (0, _._)(),
            [_] = (0, _._)("inqueue", "" + _._._),
            [_, _] = (0, _.useState)(!1),
            _ = (0, _._)(),
            { eStoreDiscoveryQueueType: _, storePageFilter: _ } =
              _.useMemo(() => {
                if (_?.length > 0) {
                  const _ = _.split("_"),
                    _ = Number(_[0]);
                  let _;
                  return (
                    _.length > 1 && (_ = (0, _._)(_[1])),
                    {
                      eStoreDiscoveryQueueType: _,
                      storePageFilter: _,
                    }
                  );
                } else
                  return {
                    eStoreDiscoveryQueueType: _._._,
                    storePageFilter: void 0,
                  };
              }, [_]),
            { showDiscoveryQueue: _ } = (0, _._)(_, {
              includeAppID: _,
              storePageFilter: _,
            }),
            _ = _.useCallback(() => {
              _(!0);
            }, []),
            _ = (0, _._)(_, _);
          return !_ || _
            ? null
            : (0, _.jsxs)(_._, {
                focusable: !0,
                className: _().DiscoveryQueueWidgetCtn,
                onSecondaryButton: _,
                onOKButton: _,
                onOKActionDescription: (0, _._)("#DiscoveryQueue_ResumeWizard"),
                onSecondaryActionDescription: (0, _._)("#Button_Close"),
                children: [
                  (0, _.jsxs)("div", {
                    onClick: _,
                    className: _().WidgetText,
                    children: [
                      (0, _.jsx)(_.mcU, {}),
                      (0, _._)("#DiscoveryQueue_ResumeWizard"),
                      _?.length > 0 && ": " + _,
                    ],
                  }),
                  !_ &&
                    (0, _.jsx)("div", {
                      className: _().CloseButton,
                      onClick: _,
                      children: (0, _.jsx)(_._, {}),
                    }),
                ],
              });
        }
      },
      chunkid: (module, module_exports, __webpack_require__) => {
        "use strict";
        __webpack_require__._(module_exports, {
          _: () => _,
        });
        const _ = {
          include_assets: !0,
          include_trailers: !0,
          include_basic_info: !0,
          include_tag_count: 20,
          include_release: !0,
          include_platforms: !0,
          include_screenshots: !0,
          include_reviews: !0,
        };
      },
      chunkid: (module, module_exports, __webpack_require__) => {
        "use strict";
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
        const _ =
            "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD//gA7Q1JFQVRPUjogZ2QtanBlZyB2MS4wICh1c2luZyBJSkcgSlBFRyB2NjIpLCBxdWFsaXR5ID0gOTAK/9sAQwADAgIDAgIDAwMDBAMDBAUIBQUEBAUKBwcGCAwKDAwLCgsLDQ4SEA0OEQ4LCxAWEBETFBUVFQwPFxgWFBgSFBUU/9sAQwEDBAQFBAUJBQUJFA0LDRQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQU/8AAEQgAIAAgAwEiAAIRAQMRAf/EAB8AAAEFAQEBAQEBAAAAAAAAAAABAgMEBQYHCAkKC//EALUQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+v/EAB8BAAMBAQEBAQEBAQEAAAAAAAABAgMEBQYHCAkKC//EALURAAIBAgQEAwQHBQQEAAECdwABAgMRBAUhMQYSQVEHYXETIjKBCBRCkaGxwQkjM1LwFWJy0QoWJDThJfEXGBkaJicoKSo1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoKDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uLj5OXm5+jp6vLz9PX29/j5+v/aAAwDAQACEQMRAD8A/P4mW5nmllmeSR3LMzMSSc1a07R73V72KzsILi9u5TiOC2RpJHPoFGSarQ/ef6n+de4fAn9oaL4D+DfGX9i6Uf8AhO9XSKDT9eZY3WxiDZcBGByTkn0JCZBxQB41qeiX+iXslnqNtdWF3H9+3uo2jkX6q2CKpgy208MsUzxyI4ZWViCDmvsr9rrUdT1j9nb4T6h8RBbH4qXUs0zMsSxXJ04hivnKoAU5MPGBg7uM7q+NpvvJ9R/OgAh+8/1P867T4POI/iz4Mc6U+u7NZtG/suPbuu8TKfKG4hct93njnmuKIltp5opYXjkRyrKykEHNWbDVbvSr63vbKaezvLeRZYbi3ZkkidTlWVhyCCMgjpQB6l+1F411nx58dPFWpa5a3mnXaXP2ZNOvXVpLKNBhYflJUY5PB5JJ6k15LN95PqP51a1PWr7WtQnvtRuLm/vrhzJNc3TtJLIx6lmbJJ9zVQCW5nhiiheSR3CqqqSSc0Af/9k=",
          _ =
            "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD//gA7Q1JFQVRPUjogZ2QtanBlZyB2MS4wICh1c2luZyBJSkcgSlBFRyB2NjIpLCBxdWFsaXR5ID0gODAK/9sAQwAGBAUGBQQGBgUGBwcGCAoQCgoJCQoUDg8MEBcUGBgXFBYWGh0lHxobIxwWFiAsICMmJykqKRkfLTAtKDAlKCko/9sAQwEHBwcKCAoTCgoTKBoWGigoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgo/8AAEQgAQABAAwEiAAIRAQMRAf/EAB8AAAEFAQEBAQEBAAAAAAAAAAABAgMEBQYHCAkKC//EALUQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+v/EAB8BAAMBAQEBAQEBAQEAAAAAAAABAgMEBQYHCAkKC//EALURAAIBAgQEAwQHBQQEAAECdwABAgMRBAUhMQYSQVEHYXETIjKBCBRCkaGxwQkjM1LwFWJy0QoWJDThJfEXGBkaJicoKSo1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoKDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uLj5OXm5+jp6vLz9PX29/j5+v/aAAwDAQACEQMRAD8A8Inmk8+T94/3j/EfWmedJ/z0f/vo0T/6+T/eP86ZQA/zpP8Ano//AH0aPOk/56P/AN9GmVo6Loeq65M0Wj6ddXrr94QRF9v1I6fjQBR86T/no/8A30aPOk/56P8A99GtHW/Dus6GV/tjS7yyD8K00RVW+h6GsugB/nSf89H/AO+jT4JpPPj/AHj/AHh/EfWoafB/r4/94fzoAJ/9fJ/vH+dMp8/+vk/3j/OmUAXdE099W1mw06Jgsl3PHApPYswUH9a+qPF3iHSPhF4S0+003TxK0hMcEAbZvIA3SO2OvIz6k18nW88ttcRz28jxTRMHSRGKsrA5BBHQg1b1TWdT1fy/7V1G8vfLzs+0TNJtz1xknHQUAfUXw+8c6Z8UdN1HS9V0xIpUTM1s7eYkiE43KcAgg/lxg180+NtEHhzxZqmkqxdLWcojHqUPK598EV9CfBbwpF4G8J3fiLxA4trm5hEsnmceRCOQD/tHqR9B1r568a63/wAJH4r1TVghRLqYuinqE6KD74AoAxafB/r4/wDeH86ZT4P9fH/vD+dABP8A6+T/AHj/ADplPn/18n+8f50ygArt/gtpltq/xK0e2vYxJArPMUYZDFEZhn2yBXEV0/w203VNX8YWdloOoHTtQkWQx3IZl2gISeV55AI/GgD1H9pvxPdi/s/DcDGOz8pbqfHWRizBQfYbc/U+1eD12PxW0fWtE8Tpa+I9UOqXpt0cTl2bCEthctz1B/OuOoAKfB/r4/8AeH86ZT4P9fH/ALw/nQAT/wCvk/3j/OmVNPDJ58n7t/vH+E+tM8mT/nm//fJoAZV7Q9Xv9C1KLUNJuGtryMEJIoBIyCD1BHQmqnkyf883/wC+TR5Mn/PN/wDvk0AaHiHXtT8RX4vdau2u7oIIxIygHaCSBwB6msyn+TJ/zzf/AL5NHkyf883/AO+TQAynwf6+P/eH86PJk/55v/3yafBDJ58f7t/vD+E+tAH/2Q==",
          _ =
            __webpack_require__._ +
            "images/applications/store/avatar_default_full.jpg?v=valveisgoodatcaching";
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__._(_),
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
          switch (_) {
            case "X-Small":
            case "Small":
              return _;
            case "Medium":
            case "MediumLarge":
              return _;
            case "Large":
            case "X-Large":
            case "FillArea":
              return _;
            default:
              return (0, _._)(_, `Unhandled size ${_}`), _;
          }
        }
        const _ = _.memo(function (_) {
          const {
              strAvatarURL: _,
              size: _ = "Medium",
              className: _,
              statusStyle: _,
              statusPosition: _,
              children: _,
              ..._
            } = _,
            _ = _.useMemo(() => {
              const _ = [];
              return _ && _.push(_), _.push(_(_)), _;
            }, [_, _]);
          return (0, _.jsxs)("div", {
            className: (0, _._)(
              _().avatarHolder,
              "avatarHolder",
              "no-drag",
              _,
              _,
            ),
            ..._,
            children: [
              (0, _.jsx)("div", {
                className: (0, _._)(_().avatarStatus, "avatarStatus", _),
                style: _,
              }),
              (0, _.jsx)(_._, {
                className: (0, _._)(_().avatar, "avatar"),
                rgSources: _,
                draggable: !1,
              }),
              _,
            ],
          });
        });
        let _ = class extends _.Component {
          render() {
            const {
              persona: _,
              size: _ = "Medium",
              animatedAvatar: _,
              className: _,
              strBackupAvatarURL: _,
              ..._
            } = this.props;
            let _ = "";
            return (
              _ && _.image_small && _.image_small.length != 0
                ? (_ = _._.MEDIA_CDN_COMMUNITY_URL + "images/" + _.image_small)
                : _
                  ? ((_ = _.avatar_url_medium),
                    _ == "Small" || _ == "X-Small"
                      ? (_ = _.avatar_url)
                      : (_ == "Large" || _ == "X-Large" || _ == "FillArea") &&
                        (_ = _.avatar_url_full))
                  : _ && (_ = _),
              (0, _.jsx)(_, {
                strAvatarURL: _,
                size: _,
                className: (0, _._)((0, _._)(_), _),
                ..._,
              })
            );
          }
        };
        _ = _([_._], _);
        const _ = (0, _._)((_) => {
          const {
            profileItem: _,
            className: _,
            bDisableAnimation: _,
            ..._
          } = _;
          if (!_ || !_.image_small || _.image_small.length == 0) return null;
          let _ = _ ? _.image_large : _.image_small;
          return (
            _ || (_ = _.image_small),
            _.startsWith("https://") ||
              (_ = _._.MEDIA_CDN_COMMUNITY_URL + "images/" + _),
            (0, _.jsx)("div", {
              className: (0, _._)(_().avatarFrame, _, "avatarFrame"),
              ..._,
              children: (0, _.jsx)("img", {
                className: _().avatarFrameImg,
                src: _,
              }),
            })
          );
        });
        let _ = class extends _.Component {
          m_timer;
          constructor(_) {
            super(_),
              (this.state = {
                bAnimate: this.props.loopDuration != "None",
              }),
              (this.m_timer = 0);
          }
          componentDidMount() {
            this.props.bParentHovered || this.SetupAnimationTimer();
          }
          SetupAnimationTimer() {
            let _ = 0;
            switch (this.props.loopDuration) {
              case "Short":
                _ = 2500;
                break;
              case "Medium":
                _ = 5e3;
                break;
              case "Long":
                _ = 1e4;
                break;
            }
            _ != 0 &&
              (this.setState({
                bAnimate: this.props.loopDuration != "None",
              }),
              (this.m_timer = window.setTimeout(
                () =>
                  this.setState({
                    bAnimate: !1,
                  }),
                _,
              )));
          }
          StopAnimationTimer() {
            this.m_timer &&
              (window.clearTimeout(this.m_timer), (this.m_timer = 0));
          }
          onHover() {
            this.SetupAnimationTimer();
          }
          componentWillUnmount() {
            this.StopAnimationTimer();
          }
          componentDidUpdate(_) {
            this.props.loopDuration != _.loopDuration &&
              (this.props.loopDuration == "None"
                ? (this.setState({
                    bAnimate: !1,
                  }),
                  this.StopAnimationTimer())
                : this.props.loopDuration == "Infinite"
                  ? (this.setState({
                      bAnimate: !0,
                    }),
                    this.StopAnimationTimer())
                  : (this.setState({
                      bAnimate: !0,
                    }),
                    this.SetupAnimationTimer())),
              this.props.bParentHovered != _.bParentHovered &&
                (this.props.bParentHovered &&
                this.props.loopDuration != "None" &&
                this.props.loopDuration != "Infinite"
                  ? (this.setState({
                      bAnimate: !0,
                    }),
                    this.StopAnimationTimer())
                  : this.state.bAnimate && this.SetupAnimationTimer());
          }
          render() {
            let {
              loopDuration: _,
              animatedAvatar: _,
              avatarFrame: _,
              children: _,
              style: _,
              bLimitProfileFrameAnimationTime: _,
              bParentHovered: _,
              ..._
            } = this.props;
            _.onClick &&
              (_ = {
                ..._,
                cursor: "pointer",
              });
            const _ = this.state.bAnimate ? (_ ?? void 0) : void 0;
            return (0, _.jsx)("div", {
              onMouseEnter: () =>
                this.setState({
                  bAnimate: this.props.loopDuration != "None",
                }),
              onMouseLeave: () => this.SetupAnimationTimer(),
              children: (0, _.jsxs)(_, {
                animatedAvatar: _,
                ..._,
                children: [
                  _,
                  (0, _.jsx)(_, {
                    profileItem: _ ?? null,
                    bDisableAnimation: _ && !this.state.bAnimate,
                  }),
                ],
              }),
            });
          }
        };
        _ = _([_._], _);
      },
      chunkid: (module, module_exports, __webpack_require__) => {
        "use strict";
        __webpack_require__._(module_exports, {
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
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        function _(_) {
          return ["AppRelevanceStore", "FriendsRecommended", _];
        }
        function _(_) {
          const _ = (0, _._)();
          return (0, _._)({
            queryKey: _(_),
            queryFn: () => _(_, _),
            enabled: _._.logged_in,
          });
        }
        function _() {
          const _ = (0, _._)();
          return _.useCallback(
            (_, _) => {
              _.setQueryData(_(_), _);
            },
            [_],
          );
        }
        function _(_) {
          return (0, _._)({
            queryKey: ["AppRelevanceStore", "StoreRelevance", _],
            queryFn: () => _(_),
            enabled: _._.logged_in,
          });
        }
        function _() {
          return (0, _._)("App Relevance Store Top Sellers", {
            sort: _._._,
            start: 0,
            count: 100,
          });
        }
        function _() {
          const { data: _ } = _();
          return _;
        }
        async function _(_, _) {
          const _ = _._.Init(_._);
          _.Body().set_appid(_);
          const _ = await _._.GetFriendsRecommendedApp(_, _),
            _ = _.GetEResult();
          if (_ == _._) return _.Body().toObject();
          throw `Error ${_} failed to call GetFriendsRecommendedApp ${_}`;
        }
        async function _(_) {
          let _ = {
              appid: _,
            },
            _ = {
              arrSimilarPlayedApps: [],
              bRecommendedByIR: !1,
            };
          const _ = (
            await _().get(
              `${_._.STORE_BASE_URL}explore/ajaxgetstorerelevancedata`,
              {
                params: _,
                withCredentials: !0,
                timeout: 1e4,
              },
            )
          ).data;
          return (
            _ &&
              _.success == _._ &&
              (_.results.similar_played_apps &&
                (_.arrSimilarPlayedApps = _.results.similar_played_apps.map(
                  (_) => ({
                    appid: _.appid,
                    playtimeForever: _.playtime_forever,
                  }),
                )),
              _.results.recommended_by_ir && (_.bRecommendedByIR = !0)),
            _
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
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        const _ = new WeakSet();
        function _(_ = _._) {
          if (typeof window > "u" || typeof document > "u" || _.has(_)) return;
          const _ = (0, _._)("groupvanityinfo", "application_config");
          (_ === void 0 && document.readyState != "complete") ||
            (_.add(_), _(_) && (0, _._)(_, _));
        }
        function _(_) {
          const _ = _;
          return _ &&
            Array.isArray(_) &&
            _.length > 0 &&
            typeof _[0] == "object"
            ? typeof _[0].clanAccountID == "number" &&
                (typeof _[0].appid == "number" ||
                  typeof _[0].vanity_url == "string")
            : !1;
        }
        function _(_) {
          return typeof _ == "string" ? parseInt(_) : _;
        }
        function _(_) {
          return typeof _ == "string" ? Number.parseInt(_) : _;
        }
        class _ {
          m_queryClient = _._;
          m_boxCacheVersion = _._.box(0);
          m_bWatchingCache = !1;
          m_bBumpScheduled = !1;
          Init() {
            this.LazyInit();
          }
          LazyInit() {
            _(this.m_queryClient),
              this.m_bWatchingCache ||
                ((this.m_bWatchingCache = !0),
                this.m_queryClient.getQueryCache().subscribe((_) => {
                  (_?.type != "added" &&
                    _?.type != "updated" &&
                    _?.type != "removed") ||
                    ((0, _._)(_.query?.queryKey) &&
                      this.ScheduleCacheVersionBump());
                }));
          }
          ScheduleCacheVersionBump() {
            this.m_bBumpScheduled ||
              ((this.m_bBumpScheduled = !0),
              queueMicrotask(() => {
                (this.m_bBumpScheduled = !1),
                  (0, _._)(() =>
                    this.m_boxCacheVersion.set(
                      this.m_boxCacheVersion.get() + 1,
                    ),
                  );
              }));
          }
          ReadCache() {
            return (
              this.LazyInit(), this.m_boxCacheVersion.get(), this.m_queryClient
            );
          }
          AddGroupVanities(_) {
            this.LazyInit(), _(_) && (0, _._)(this.m_queryClient, _);
          }
          BHasClanInfoLoaded(_) {
            return (
              (0, _._)(_.BIsValid(), "Clan SteamID is not valid when ClanInfo"),
              (0, _._)(
                _.BIsClanAccount(),
                "Clan SteamID is not a clan account id when requesting clan info ",
              ),
              this.BHasClanInfoLoadedByAccountID(_.GetAccountID())
            );
          }
          BHasClanInfoLoadedByAccountID(_) {
            return !!(0, _._)(_(_), this.ReadCache());
          }
          RegisterClanData(_) {
            this.LazyInit(), (0, _._)(this.m_queryClient, _);
          }
          async LoadOGGClanInfoForAppID(_) {
            return (
              this.LazyInit(),
              (_ = _(_)),
              (0, _._)(
                _ != 0,
                "LoadOGGClanInfoForAppID called with appid of zero",
              ),
              _ == 0 ? null : (0, _._)(_, this.m_queryClient).catch(() => null)
            );
          }
          async LoadOGGClanInfoForIdentifier(_) {
            return this.LazyInit(), (0, _._)(_, this.m_queryClient, "store");
          }
          async LoadOGGClanInfoForGroupVanity(_) {
            return this.LazyInit(), (0, _._)(_, this.m_queryClient, "group");
          }
          async LoadClanInfoForClanSteamID(_) {
            return this.LoadClanInfoForClanAccountID(_.GetAccountID());
          }
          async LoadClanInfoForClanAccountID(_) {
            return this.LazyInit(), (0, _._)(_(_), this.m_queryClient);
          }
          GetOGGClanInfo(_) {
            const _ = this.ReadCache();
            return typeof _ == "string" ? (0, _._)(_, _) : (0, _._)(_, _);
          }
          GetClanSteamIDForAppID(_) {
            const _ = (0, _._)(_(_), this.ReadCache());
            return _ ? _._.InitFromClanID(_.clanAccountID) : void 0;
          }
          GetClanVanityForAppID(_) {
            return (0, _._)(_(_), this.ReadCache())?.vanity_url;
          }
          GetClanVanityForClanSteamID(_) {
            return (0, _._)(_.GetAccountID(), this.ReadCache())?.vanity_url;
          }
          HasLoadedClanAccountID(_) {
            return this.BHasClanInfoLoadedByAccountID(_);
          }
          GetClanMemberCount(_) {
            return (0, _._)(_(_), this.ReadCache())?.member_count ?? 0;
          }
          GetClanInfoByClanAccountID(_) {
            return (
              (0, _._)(
                !!_,
                "Unepxected clanid when requesting information. GetClanInfoByClanAccountID ",
              ),
              (0, _._)(_(_), this.ReadCache())
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
        const _ = new _();
        (0, _._)("g_ClanStore", _);
        function _() {
          const _ = (0, _._)();
          return _(_), _;
        }
        function _(_) {
          _();
          const { data: _, isPending: _ } = (0, _._)(_ ? _(_) : void 0);
          return [!!_ && _, _ ?? void 0];
        }
        function _(_) {
          const _ = _();
          (0, _.useEffect)(() => {
            _ &&
              (0, _._)(_(_), _).catch((_) =>
                console.error(`Failed to hint load clan info ${_}`, _),
              );
          }, [_, _]);
        }
        function _(_) {
          return _(), useClanInfoByVanityQuery(_).data ?? null;
        }
        function _(_) {
          _();
          const _ = _ ? _(_) : void 0,
            { data: _, isPending: _ } = useClanInfoByAppIDQuery(_);
          return {
            bLoadingClanInfo: !!_ && _,
            clanInfo: _ ?? null,
          };
        }
        function _(_, _) {
          if (_.BIsOGGEvent())
            return {
              bVisible: !1,
            };
          if (_.GetEventType() == k_EClanEventType_CreatorHome)
            return {
              bVisible: !1,
            };
          if (_.BHasSaleEnabled())
            return {
              bVisible: !0,
            };
          if (
            _.jsondata.clone_from_event_gid &&
            _.jsondata.clone_from_sale_enabled
          )
            return {
              bVisible: !0,
            };
          if (_.clanSteamID.GetAccountID() == getMeetSteamClanID())
            return {
              bVisible: !1,
            };
          const _ = g_CreatorHomeStore.GetCreatorHome(_.clanSteamID);
          return _ &&
            _.BHasClanAccountFlagSet(
              EClanAccountFlags.k_EClanAccountFlag_AllowSalePageEditing,
            )
            ? {
                bVisible: !0,
              }
            : _
              ? {
                  bVisible: !0,
                  bValveOnly: !0,
                }
              : {
                  bVisible: !1,
                };
        }
        function _(_, _) {
          return _.BIsOGGEvent()
            ? _.BHasSaleEnabled()
              ? {
                  bVisible: !0,
                }
              : Config.EUNIVERSE == k_EUniversePublic
                ? {
                    bVisible: !1,
                  }
                : _
                  ? _.GetEventType() == k_EClanEventType_MajorUpdateEvent
                    ? {
                        bVisible: !0,
                        bValveOnly: !0,
                      }
                    : {
                        bVisible: !1,
                      }
                  : {
                      bVisible: !1,
                    }
            : {
                bVisible: !1,
              };
        }
        function _(_) {
          return _.BIsOGGEvent()
            ? {
                bVisible: !1,
              }
            : _.GetEventType() != k_EClanEventType_CreatorHome
              ? {
                  bVisible: !1,
                }
              : _.BHasSaleEnabled()
                ? {
                    bVisible: !0,
                  }
                : _.clanSteamID.GetAccountID() == getMeetSteamClanID()
                  ? {
                      bVisible: !1,
                    }
                  : {
                      bVisible: !1,
                    };
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
        function _(_, _) {
          let _ = _.toString();
          if (
            _?.strContentHubType != "newreleases" &&
            _?.strContentHubType != "upcoming"
          ) {
            const _ = _?.nSaleTagID,
              _ = _?.strContentHubType,
              _ = _?.strContentHubCategory,
              _ = _?.nContentHubTagID,
              _ = _?.bDiscountsOnly,
              _ = _?.bPrioritizeDiscounts,
              _ = _?.strOptInName,
              _ = _?.nOptInTagID,
              _ = _?.nPruneTagID;
            _
              ? (_ += "_" + _)
              : _ &&
                ((_ += "_" + _),
                _ === "category" && _
                  ? (_ += "_" + _)
                  : _ === "tags" && _ && (_ += "_" + _),
                _ ? (_ += "_d") : _ && (_ += "_p"),
                _ && _ && _ && (_ += "_" + _));
          }
          return _;
        }
        function _(_) {
          return (0, _._)(JSON.stringify(_));
        }
        function _(_) {
          return JSON.parse((0, _._)(_));
        }
        const _ = class _ {
          m_transport;
          m_mapDiscoveryQueues = new Map();
          m_mapSkippedApps = new Map();
          m_mapSkippedAppCount = new Map();
          m_mapInClientCompleted = new Map();
          m_mapInClientCompletedCallback = new Map();
          m_setExhuasted = new Set();
          m_mapExhuastedCallback = new Map();
          GetTotalSkippedAppsForDiscoveryQueue(_, _) {
            const _ = _(_, _);
            return this.m_mapDiscoveryQueues.get(_)?.skipped ?? 0;
          }
          GetNumAppsSeenForDiscoveryQueue(_, _) {
            const _ = _(_, _);
            return this.m_mapSkippedAppCount.get(_) || 0;
          }
          GetSkippedAppKey(_, _, _) {
            const _ = _(_, _);
            return `${_}_${_}`;
          }
          GetInClientCompletedQueues(_, _) {
            const _ = _(_, _);
            return this.m_mapInClientCompleted.get(_) || 0;
          }
          GetInClientCompletedQueuesCallback(_, _) {
            const _ = _(_, _);
            return (
              this.m_mapInClientCompletedCallback.has(_) ||
                this.m_mapInClientCompletedCallback.set(_, new _._()),
              this.m_mapInClientCompletedCallback.get(_)
            );
          }
          GetExhaustedCallback(_, _) {
            const _ = _(_, _);
            return (
              this.m_mapExhuastedCallback.has(_) ||
                this.m_mapExhuastedCallback.set(_, (0, _._)(!1)),
              this.m_mapExhuastedCallback.get(_)
            );
          }
          BIsExhausted(_, _) {
            const _ = _(_, _);
            return this.m_setExhuasted.has(_);
          }
          async LoadDiscoveryQueue(_, _, _) {
            const _ = _(_, _);
            if (!this.m_transport) return _._;
            try {
              const _ = (0, _._)(this.m_transport, _, _, _);
              _ &&
                (await _._.invalidateQueries({
                  queryKey: _.queryKey,
                }));
              const _ = await _._.fetchQuery(_);
              return (
                this.m_mapDiscoveryQueues.set(_, _),
                _.exhausted
                  ? (this.m_setExhuasted.add(_),
                    this.GetExhaustedCallback(_, _).Set(!0))
                  : (this.m_setExhuasted.delete(_),
                    this.GetExhaustedCallback(_, _).Set(!1)),
                this.m_mapSkippedAppCount.set(_, _.skipped || 0),
                _._
              );
            } catch (_) {
              return (
                console.warn(
                  "Error",
                  _,
                  "failed to get discovery queue type",
                  _,
                  "key",
                  _,
                ),
                _._
              );
            }
          }
          async GetDiscoveryQueueAppsOfType(_, _, _) {
            const _ = _(_, _);
            return !_ && this.m_mapDiscoveryQueues.has(_)
              ? {
                  appids: this.m_mapDiscoveryQueues.get(_).appids,
                  exhausted: !!this.m_mapDiscoveryQueues.get(_).exhausted,
                }
              : (await this.LoadDiscoveryQueue(_, _, _),
                {
                  appids: this.m_mapDiscoveryQueues.get(_).appids,
                  exhausted: !!this.m_mapDiscoveryQueues.get(_).exhausted,
                });
          }
          async SkipDiscoveryQueueItem(_, _, _) {
            const _ = this.GetSkippedAppKey(_, _, _);
            if (!this.m_mapSkippedApps.has(_)) {
              const _ = _(_, _),
                _ = this.m_mapDiscoveryQueues.get(_)?.appids,
                _ = _?.[_.length - 1] == _;
              this.m_mapSkippedApps.set(_, !0),
                this.m_mapSkippedAppCount.set(
                  _,
                  (this.m_mapSkippedAppCount.get(_) || 0) + 1,
                );
              const _ = _._.Init(_._);
              if (
                (_.Body().set_appid(_),
                _.Body().set_queue_type(_),
                (_?.nSaleTagID || _?.strContentHubType) &&
                  _.Body().set_store_page_filter((0, _._)(_, !0)),
                !this.m_transport)
              ) {
                console.warn(
                  "Error",
                  "no transport",
                  "failed to skip appid ",
                  _,
                ),
                  this.m_mapSkippedApps.delete(_);
                return;
              }
              const _ = (
                await _._.SkipDiscoveryQueueItem(this.m_transport, _)
              ).GetEResult();
              _ != _._ && _ != _._
                ? (console.warn("Error", _, "failed to skip appid ", _),
                  this.m_mapSkippedApps.delete(_))
                : _ && this.MarkDiscoveryQueueCompleted(_, _);
            }
          }
          MarkDiscoveryQueueCompleted(_, _) {
            const _ = _(_, _);
            if (this.m_mapInClientCompleted.has(_)) {
              const _ = this.m_mapInClientCompleted.get(_) + 1;
              this.m_mapInClientCompleted.set(_, _),
                this.GetInClientCompletedQueuesCallback(_, _).Dispatch(_);
            } else
              this.m_mapInClientCompleted.set(_, 0),
                this.GetInClientCompletedQueuesCallback(_, _).Dispatch(0);
          }
          async LoadSkippedApps(_, _) {
            const _ = _(_, _),
              _ = _._.Init(_._);
            if (
              (_.Body().set_steamid(_._.steamid),
              _.Body().set_queue_type(_),
              (_?.nSaleTagID || _?.strContentHubType) &&
                _.Body().set_store_page_filter((0, _._)(_, !0)),
              !this.m_transport)
            )
              return (
                console.warn(
                  "Failed to retrieve skipped apps for discovery queue, no transport.",
                  _,
                  _,
                ),
                []
              );
            const _ = await _._.GetDiscoveryQueueSkippedApps(
              this.m_transport,
              _,
            );
            return _.GetEResult() === _._
              ? _.Body().appids() || []
              : (console.warn(
                  "Failed to retrieve skipped apps for discovery queue.",
                  _,
                  _,
                  _.GetEResult(),
                ),
                []);
          }
          static s_DiscoveryQueueStore = null;
          static Init(_) {
            _.Get().m_transport = _;
          }
          static BHasTransport() {
            return !!_.Get().m_transport;
          }
          static Get() {
            return (
              this.s_DiscoveryQueueStore ||
                (this.s_DiscoveryQueueStore = new _()),
              this.s_DiscoveryQueueStore
            );
          }
          constructor() {
            (0, _._)(this);
          }
        };
        _([_._], _.prototype, "m_mapDiscoveryQueues", 2);
        let _ = _;
        function _(_, _) {
          const [_, _] = (0, _.useState)(
            _.Get().GetInClientCompletedQueues(_, _),
          );
          return (
            (0, _._)(_.Get().GetInClientCompletedQueuesCallback(_, _), _), _
          );
        }
        function _(_, _) {
          return (0, _._)(_.Get().GetExhaustedCallback(_, _));
        }
        function _(_, _) {
          const _ = _.useMemo(
            () => (0, _._)("discovery_queue_name", "application_config"),
            [],
          );
          return typeof _ == "string" && _.length > 0 ? _ : "";
        }
      },
      chunkid: (module, module_exports, __webpack_require__) => {
        "use strict";
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
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        const _ = _.createContext({}),
          _ = () => _.useContext(_);
        function _(_) {
          let { defaultOptions: _, children: _ } = _,
            _ = _.useMemo(
              () => ({
                defaultOptions: _ || {},
              }),
              [_],
            );
          return (0, _.jsx)(_.Provider, {
            value: _,
            children: _,
          });
        }
        const _ = "StoreQueryStore";
        function _(_, _, _, _) {
          let _ = _();
          const _ = (0, _._)();
          _ ||
            (0, _._)(!1, "useStoreQuery called outside of a <StoreQueryRoot>");
          let _ = _.defaultOptions;
          const _ = _.useMemo(() => {
            let _ = [];
            return (
              _?.content_descriptors_excluded
                ? (_ = _.content_descriptors_excluded)
                : _?.content_descriptors_excluded &&
                  (_ = _.content_descriptors_excluded),
              {
                ..._,
                filters: {
                  content_descriptors_excluded: _,
                  ..._.filters,
                },
              }
            );
          }, [_, _, _]);
          let _;
          _?.override_country_code !== void 0
            ? (_ = _.override_country_code)
            : _?.override_country_code !== void 0 &&
              (_ = _.override_country_code);
          let _ = {
            staleTime: 3600 * 1e3,
          };
          _?.reactQuery &&
            (_ = {
              ..._,
              ..._.reactQuery,
            });
          const _ = [_, _, _ ?? {}, _ ?? {}];
          return (0, _._)({
            queryKey: _,
            queryFn: () => _(_, _, _, _ ?? {}, _),
            ..._,
          });
        }
        async function _(_, _, _, _, _) {
          const _ = _._.Init(_._);
          (0, _._)(_),
            _ && (0, _._)(_, _),
            _ && _.Body().set_override_country_code(_),
            _.Body().set_query(_._.fromObject(_)),
            _.Body().set_query_name(_);
          const _ = await _._.Query(_, _);
          if (_.GetEResult() != _._)
            throw `Error executing StoreQuery "${_}", EResult: ${_.GetEResult()}`;
          return new _(_, _);
        }
        class _ {
          m_Items = void 0;
          m_rgItemIDs = void 0;
          m_metadata = void 0;
          constructor(_, _) {
            this.ReadResults(_, _);
          }
          GetItems() {
            return this.m_Items;
          }
          GetItemIDs() {
            return this.m_rgItemIDs;
          }
          GetMetadata() {
            return this.m_metadata;
          }
          ReadResults(_, _) {
            this.m_Items ||
              ((0, _._)(
                _.Body().metadata().start() == 0,
                "Empty item list - expected to start at 0",
              ),
              (this.m_Items = []));
            const _ = _.Body().ids() || [];
            if (
              ((this.m_rgItemIDs = _.map((_) => _.toObject())),
              _.Body().store_items())
            )
              for (const _ of _.Body().store_items()) {
                const _ = _._.Get().ReadItem(_, _);
                _ && this.m_Items.push(_);
              }
            this.m_metadata = _.Body().metadata().toObject();
          }
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
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
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
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        function _(_) {
          const {
              arrDiscoveryApps: _,
              onClick: _,
              className: _,
              bDisableAnimation: _ = !1,
              children: _,
              ..._
            } = _,
            _ = (0, _._)(),
            [_, _] = (0, _.useState)(!_),
            [_, _] = (0, _.useState)(!1),
            _ = (0, _.useRef)(Date.now()),
            _ = 3e4,
            _ = _.useCallback(
              (_) => {
                _(_), _ || _(_);
              },
              [_],
            ),
            _ = _.useCallback(() => {
              (_.current = Date.now()), !_ && _ && _(!0);
            }, [_, _]);
          return (
            (0, _._)(() => {
              Date.now() - _.current > _ && !_ && _(!1);
            }, 5e3),
            (0, _._)(window, "scroll", _),
            (0, _._)(window, "mousemove", _),
            (0, _.jsx)(_._, {
              trigger: "repeated",
              onVisibilityChange: _,
              children: (0, _.jsxs)(_._, {
                focusable: !0,
                onGamepadFocus: () => _(!0),
                onMouseEnter: () => _ && _(!0),
                onGamepadBlur: () => _(!1),
                onMouseLeave: () => _ && _(!1),
                onActivate: _,
                onOKActionDescription: (0, _._)("#DiscoveryQueue_OpenWizard"),
                className: (0, _._)(
                  _.DiscoveryQueueWidgetCtn,
                  _,
                  _ !== void 0 && _.Initialized,
                ),
                ..._,
                children: [
                  (0, _.jsx)(_, {
                    rgAppIDs: _,
                    bAnimationEnabled: !_ && _,
                  }),
                  _,
                ],
              }),
            })
          );
        }
        let _;
        function _(_) {
          const {
              rgAppIDs: _,
              bAnimationEnabled: _ = !0,
              nCapsuleWidth: _ = 320,
            } = _,
            [_, _] = _.useState(null);
          return (
            _.useEffect(() => {
              if (!_ || !_) return;
              _ || (_ = performance.now());
              const _ = _.offsetWidth;
              let _;
              const _ = () => {
                const _ =
                  (((performance.now() - _) / 40) % (_ - 3 * _ - 16)) + _;
                (_.style.transform = `translateX( -${_}px )`),
                  (_ = requestAnimationFrame(_));
              };
              return (
                (_ = requestAnimationFrame(_)), () => cancelAnimationFrame(_)
              );
            }, [_, _, _]),
            !_ || !_.length
              ? null
              : (0, _.jsx)("div", {
                  className: _.AppCarouselPosition,
                  style: {
                    "--capsule-width": `${_}px`,
                  },
                  children: (0, _.jsxs)("div", {
                    ref: _,
                    className: (0, _._)(_.AppCarouselCtn, "vt-scrollable"),
                    style: {
                      transform: `translateX( -${_}px )`,
                    },
                    children: [
                      _.map((_) =>
                        (0, _.jsx)(
                          _,
                          {
                            appID: _,
                          },
                          "Capsule_" + _,
                        ),
                      ),
                      [..._, ..._].slice(0, 3).map((_, _) =>
                        (0, _.jsx)(
                          _,
                          {
                            appID: _,
                          },
                          `Capsule2_${_}_${_}`,
                        ),
                      ),
                    ],
                  }),
                })
          );
        }
        function _(_) {
          const { appID: _ } = _,
            _ = {
              appid: _,
            },
            { data: _ } = (0, _._)(_),
            _ = (0, _._)(_),
            _ = (0, _._)(_) || [],
            { data: _ } = (0, _._)(_);
          if (!_) return null;
          let _ = _.length
            ? (0, _._)(_[0], "600x338")
            : _ && (0, _._)(_, "main_capsule");
          const _ = {
            backgroundImage: `radial-gradient(135% 125% at 100% 0%, rgba(0, 0, 0, 0) 22.5%, rgba(0, 0, 0, 1) 92.5%)${_ ? `, url('${_}')` : ""}`,
          };
          return (0, _.jsxs)("div", {
            className: _.AppCapsuleCtn,
            style: _,
            children: [
              (0, _.jsx)("div", {
                className: (0, _._)(_.CapsuleColumn, _.LibraryImage),
                children: (0, _.jsx)("img", {
                  src: _,
                  alt: _?.name,
                }),
              }),
              (0, _.jsx)("div", {
                className: _.CapsuleColumn,
                children: (0, _.jsx)("div", {
                  className: _.AppName,
                  children: _?.name,
                }),
              }),
            ],
          });
        }
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        function _(_) {
          return (0, _._)()
            ? (0, _.jsxs)(_, {
                children: [
                  (0, _.jsx)(_, {}),
                  _._.logged_in
                    ? (0, _.jsx)(_, {
                        ..._,
                      })
                    : (0, _.jsx)(_, {
                        ..._,
                      }),
                ],
              })
            : null;
        }
        function _(_) {
          const [_, _] = (0, _._)();
          let _ = (0, _._)(() => _.ExcludedContentDescriptor),
            _ = _.useMemo(
              () => ({
                content_descriptors_excluded: _,
              }),
              [_],
            );
          return _
            ? null
            : (0, _.jsx)(_._, {
                defaultOptions: _,
                children: _.children,
              });
        }
        function _(_, _) {
          const { data: _ } = (0, _._)({
            queryKey: ["DiscoveryQueueLoader", _, _],
            queryFn: async () => {
              const { appids: _, exhausted: _ } =
                await _._.Get().GetDiscoveryQueueAppsOfType(_, !1, _);
              let _ = {
                ..._._,
                include_screenshots: !0,
              };
              return (
                await _._.Get().QueueMultipleAppRequests(_ ?? [], _),
                {
                  rgDiscoveryApps: _,
                  exhausted: _,
                }
              );
            },
            enabled: _._.logged_in,
          });
          return [_?.rgDiscoveryApps, _?.exhausted];
        }
        function _(_) {
          const {
              eStoreDiscoveryQueueType: _,
              strQueueDescriptionOverride: _,
              ..._
            } = _,
            { showDiscoveryQueue: _, bQueueVisible: _ } = (0, _._)(_, _),
            _ = (0, _._)(),
            [_, _] = _(_, _.storePageFilter),
            _ = _ || !!_.data?.preferences?.disable_animated_marketing,
            _ = _.useCallback(() => {
              !_ && _();
            }, [_, _]),
            _ = _.useId();
          return (0, _.jsx)(_.Fragment, {
            children: (0, _.jsx)(_, {
              "aria-labelledby": _,
              onClick: _,
              arrDiscoveryApps: _,
              bDisableAnimation: _,
              className: _().DiscoveryQueueWidget,
              children:
                !_ &&
                (0, _.jsx)(_, {
                  _: _,
                  strQueueDescriptionOverride: _,
                }),
            }),
          });
        }
        function _(_) {
          const { strQueueDescriptionOverride: _, _: _ } = _,
            _ = _ ?? (0, _._)("#DiscoveryQueue_WidgetHeader");
          return (0, _.jsxs)("div", {
            _: _,
            className: (0, _._)(_().WidgetHeaderCtn, "WidgetHeaderCtn"),
            children: [
              (0, _.jsx)("div", {
                className: _().WidgetHeaderText,
                children: (0, _._)("#DiscoveryQueue_WidgetHeader_Yours"),
              }),
              (0, _.jsx)("div", {
                className: _().WidgetHeaderSubText,
                children: _,
              }),
            ],
          });
        }
        function _(_) {
          const _ = _(!0),
            _ = _.useCallback(() => {
              window.location.href = `${_._.STORE_BASE_URL}login?redir=${encodeURIComponent(document.location.href)}`;
            }, []);
          return (0, _.jsx)(_, {
            onClick: _,
            arrDiscoveryApps: _ ? _._(_) : void 0,
            children: (0, _.jsxs)("div", {
              className: (0, _._)(_().WidgetHeaderCtn, "WidgetHeaderCtn"),
              children: [
                (0, _.jsx)("div", {
                  className: _().WidgetHeaderText,
                  children: (0, _._)("#DiscoveryQueue_WidgetHeader_Yours"),
                }),
                (0, _.jsx)("div", {
                  className: _().WidgetHeaderSubText,
                  children: (0, _._)("#DiscoveryQueue_WidgetHeader_LoggedOut"),
                }),
                (0, _.jsx)("div", {
                  className: _().LoginButton,
                  children: (0, _._)("#DiscoveryQueue_Error_Login_Title"),
                }),
              ],
            }),
          });
        }
        function _(_) {
          let { data: _ } = (0, _._)(
            "DiscoveryQueueWidget",
            {
              sort: _._._,
              start: 0,
              count: 12,
              filters: {
                type_filters: {
                  include_games: !0,
                },
              },
            },
            {
              ..._._,
              include_screenshots: !0,
            },
            {
              reactQuery: {
                enabled: _,
                staleTime: 1 / 0,
              },
            },
          );
          return (0, _.useMemo)(
            () => _ && _.GetItemIDs().map((_) => _.appid),
            [_],
          );
        }
        function _() {
          const _ = (0, _._)(_._._, _._.LANGUAGE, !0),
            _ = (0, _._)();
          if (!_.data?.definition || (_.data?.reward_items?.length ?? 0) == 0)
            return null;
          const _ = _?.data.reward_items ?? [];
          (0, _._)(_);
          const _ = _.slice(0, 3);
          let _ = null;
          return (
            _._.logged_in &&
              !_ &&
              (_ = (0, _.jsxs)(_.Fragment, {
                children: [
                  " - ",
                  (0, _.jsx)("a", {
                    href: _._.COMMUNITY_BASE_URL + "my/itemcollection",
                    children: (0, _._)("#DiscoveryQueue_SaleStatus_Link"),
                  }),
                ],
              })),
            (0, _.jsxs)("div", {
              className: _().SaleTopSection,
              children: [
                (0, _.jsx)(_, {
                  rgRewardItems: _,
                }),
                (0, _.jsxs)("div", {
                  className: _().SaleTextCtn,
                  children: [
                    (0, _.jsx)("div", {
                      className: _().BoldText,
                      children: (0, _._)("#DiscoveryQueue_Widget_SaleDesc"),
                    }),
                    (0, _.jsxs)("div", {
                      children: [
                        (0, _._)(
                          "#DiscoveryQueue_Widget_SaleTitle",
                          (0, _._)(
                            _.data.definition.rtime_end_time ?? 0,
                            !1,
                            !1,
                            !1,
                            !1,
                          ),
                        ),
                        _,
                      ],
                    }),
                  ],
                }),
              ],
            })
          );
        }
        function _(_) {
          const { rgRewardItems: _ } = _,
            _ = _.map((_) => {
              if (!_.community_definition || !_.community_definition.item_name)
                return null;
              const _ = `${_._.COMMUNITY_ASSETS_BASE_URL}images/items/${_.appid}/${_.community_definition.item_image_small}`;
              return (0, _.jsx)(
                "div",
                {
                  className: _().SaleSticker,
                  children: (0, _.jsx)("img", {
                    src: _,
                  }),
                },
                _.community_definition.item_name.toString(),
              );
            });
          return (0, _.jsx)("div", {
            className: _().StickerArrangement,
            children: _._(_),
          });
        }
      },
      chunkid: (module, module_exports, __webpack_require__) => {
        "use strict";
        __webpack_require__._(module_exports),
          __webpack_require__._(module_exports, {
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
        function _({
          nPercent: _,
          indeterminate: _,
          animate: _,
          className: _,
        }) {
          return jsx("div", {
            className: classnames(
              styles.ProgressBar,
              _ && styles.AnimateProgress,
              _ && styles.Indeterminate,
              _,
            ),
            style: {
              "--percent": _ / 100,
            },
          });
        }
        const _ = ({ nPercent: _, size: _ = 120, strokeWidth: _ = 20 }) => {
          const _ = (_ - _) / 2,
            _ = 2 * Math._ * _,
            _ = _ - (_ / 100) * _,
            _ = _ == 100;
          return (0, _.jsx)("div", {
            className: (0, _._)({
              [_.Circular]: !0,
              [_.Full]: _,
            }),
            children: (0, _.jsxs)("svg", {
              width: _,
              height: _,
              style: {
                transform: "rotate(-90deg)",
              },
              children: [
                (0, _.jsx)("circle", {
                  _: _ / 2,
                  _: _ / 2,
                  _: _,
                  stroke: "#0c131d",
                  strokeWidth: _,
                  fill: "none",
                }),
                (0, _.jsx)("circle", {
                  _: _ / 2,
                  _: _ / 2,
                  _: _,
                  stroke: "#1a9fff",
                  strokeWidth: _,
                  fill: "none",
                  strokeDasharray: _,
                  strokeDashoffset: _,
                  style: {
                    transition: "stroke-dashoffset 0.3s ease-in-out",
                  },
                }),
              ],
            }),
          });
        };
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
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__._(_),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        const _ = new _._("AppRelevance").Debug;
        function _(_, _) {
          const _ = (0, _.useMemo)(
            () => _._.Get().GetRecommendingCuratorsForApp(_) || [],
            [_],
          );
          return (0, _._)({
            queryKey: ["RecommendingCurators", _],
            queryFn: () =>
              Promise.all(_?.map((_) => _._.LoadClanInfoForClanAccountID(_))),
            enabled: !!_ && _ && _.length > 0,
          });
        }
        function _(_) {
          const {
              appID: _,
              bShowAvatars: _,
              storeItem: _,
              bHideDescription: _,
              bShowCuratorInfo: _,
              bShowCreatorInfo: _,
            } = _,
            _ = (0, _._)(_),
            _ = (0, _._)(_),
            _ = (0, _._)(_),
            _ = (0, _._)(),
            _ = (0, _._)({
              queryKey: ["SimilarPlayedAppsLoad", _],
              queryFn: () =>
                _._.Get().QueueMultipleAppRequests(
                  _.data.arrSimilarPlayedApps?.map((_) => _.appid),
                  {
                    include_basic_info: !0,
                    include_assets: !0,
                  },
                ),
              enabled: _.isSuccess,
            }),
            _ = _(_, _),
            _ = (0, _.useMemo)(() => {
              let _ = [];
              return (
                _ &&
                  ((_ = _.concat(
                    _.GetAllFranchiseCreatorClans().map((_) => ({
                      nAccountID: _,
                      type: "franchise",
                    })),
                  )),
                  (_ = _.concat(
                    _.GetAllDeveloperCreatorClans().map((_) => ({
                      nAccountID: _,
                      type: "developer",
                    })),
                  )),
                  (_ = _.concat(
                    _.GetAllPublisherCreatorClans().map((_) => ({
                      nAccountID: _,
                      type: "publisher",
                    })),
                  )),
                  (_ = _.filter((_) =>
                    _._.Get().BIsFollowingCurator(_.nAccountID),
                  ))),
                _
              );
            }, [_]),
            _ = (0, _._)({
              queryKey: ["FollowedCreators", _],
              queryFn: () =>
                _._.LoadClanInfoForClanAccountID(_[0].nAccountID).then((_) => ({
                  clanInfo: _,
                  type: _[0].type,
                })),
              enabled: !!_ && _ && _.length > 0,
            }),
            _ = (0, _._)({
              queryKey: ["PlayerSummaries", _, _],
              queryFn: async () => {
                let _ = [],
                  _ = [],
                  _ = [];
                const _ = _ ? 10 : 1;
                for (
                  let _ = 0;
                  _ < _.data.accountids_recommended?.length && _ < _;
                  _++
                ) {
                  const _ = _._.InitFromAccountID(
                    _.data.accountids_recommended[_],
                  );
                  _.push(_.ConvertTo64BitString());
                }
                for (let _ = 0; _ < _.data.in_wishlist?.length && _ < _; _++) {
                  const _ = new _._(_.data.in_wishlist[_].steamid);
                  _.push(_.ConvertTo64BitString());
                }
                for (let _ = 0; _ < _.data.owns?.length && _ < _; _++) {
                  const _ = new _._(_.data.owns[_].steamid);
                  _.push(_.ConvertTo64BitString());
                }
                return {
                  rgRecommendedFriends: _,
                  rgWishlistFriends: _,
                  rgOwnedFriends: _,
                };
              },
              enabled: _.isSuccess && _.isSuccess,
            });
          if (
            !_ ||
            _.isLoading ||
            _.isLoading ||
            _.isLoading ||
            _.isLoading ||
            _.isLoading ||
            _.isLoading ||
            _.isLoading
          )
            return (0, _.jsx)(_._, {
              size: "medium",
              position: "center",
            });
          let _ = [];
          _.isSuccess &&
            _.data.arrSimilarPlayedApps &&
            _.data.arrSimilarPlayedApps.slice(0, 2).forEach((_) => {
              const _ = _._.Get().GetApp(_.appid);
              _
                ? _.push(
                    (0, _.jsx)(
                      _,
                      {
                        lifetimePlaytime: _.playtimeForever,
                        storeItem: _,
                      },
                      _.appid,
                    ),
                  )
                : console.error("Failed to load store data ", _);
            });
          const _ = _.GetItemIDs().findIndex((_) => _.appid === _),
            _ = _.data?.bRecommendedByIR,
            _ = _.length > 0,
            _ = _.data?.owns?.length,
            _ = _.data?.in_wishlist?.length,
            _ = _.data?.accountids_recommended?.length;
          let _ = 0;
          return (
            _ > 0 && _++,
            _ > 0 && _++,
            _ > 0 && _++,
            _ && _++,
            _ >= 0 && _++,
            _.length > 0 && _++,
            _ && _?.data?.length > 0 && _++,
            _ && _.data && _++,
            _(
              "FriendsOwned: ",
              _,
              " FriendsWishlisted: ",
              _,
              "cRecommended: ",
              _,
            ),
            (0, _.jsxs)(_.Fragment, {
              children: [
                _ > 0 &&
                  (0, _.jsxs)(_.Fragment, {
                    children: [
                      (0, _.jsx)("div", {
                        className: _().WhyRelevant,
                        children: (0, _._)("#DiscoveryQueue_WhyRelevant"),
                      }),
                      (0, _.jsxs)("div", {
                        role: "list",
                        className: _().RelevantCtn,
                        children: [
                          _ &&
                            (0, _.jsx)(_, {
                              header: (0, _._)("#DiscoveryQueue_SimilarGames"),
                              children: (0, _.jsx)("div", {
                                className: _().ReleventSimilarAppsCtn,
                                children: _,
                              }),
                            }),
                          _ &&
                            _?.data?.length > 0 &&
                            (0, _.jsx)(_, {
                              header: (0, _._)(
                                "#ContentHub_Recommendation_Curators",
                              ),
                              children: (0, _.jsx)("div", {
                                className: (0, _._)(
                                  _().ReleventSimilarAppsCtn,
                                  _().RecommendingCuratorsCtn,
                                ),
                                children: _.data.filter(Boolean).map((_) =>
                                  (0, _.jsx)(
                                    _,
                                    {
                                      curator: _,
                                    },
                                    "curator_" + _.clanAccountID,
                                  ),
                                ),
                              }),
                            }),
                          _ &&
                            !!_.data &&
                            (0, _.jsx)(_, {
                              creatorInfo: _.data,
                            }),
                          _ >= 0 &&
                            (0, _.jsx)(_, {
                              header: (0, _._)(
                                "#DiscoveryQueue_TopSellers",
                                (0, _._)(_ + 1),
                                (0, _.jsx)("span", {
                                  className: _().RelevantTextBold,
                                }),
                              ),
                            }),
                          _ &&
                            !_ &&
                            (0, _.jsx)(_, {
                              header: (0, _._)(
                                "#DiscoveryQueue_RecommendedByIR",
                              ),
                            }),
                          (0, _.jsx)(_, {
                            bShowAvatars: _,
                            count: _.data?.accountids_recommended?.length,
                            locToken: "#DiscoveryQueue_FriendsRecommended",
                            arrSteamIDs: _.data?.rgRecommendedFriends,
                          }),
                          (0, _.jsx)(_, {
                            bShowAvatars: _,
                            count: _.data?.owns?.length,
                            locToken: "#DiscoveryQueue_FriendsOwned",
                            arrSteamIDs: _.data?.rgOwnedFriends,
                          }),
                          (0, _.jsx)(_, {
                            bShowAvatars: _,
                            count: _.data?.in_wishlist?.length,
                            locToken: "#DiscoveryQueue_FriendsWishlisted",
                            arrSteamIDs: _.data?.rgWishlistFriends,
                          }),
                        ],
                      }),
                    ],
                  }),
                !_ || _ == 0
                  ? (0, _.jsx)("div", {
                      className: (0, _._)(_().AppDescription, _ && _().Divider),
                      children: _.GetShortDescription(),
                    })
                  : (0, _.jsx)("div", {
                      "aria-label": _.GetShortDescription(),
                    }),
              ],
            })
          );
        }
        function _(_) {
          const { creatorInfo: _ } = _;
          if (!_) return null;
          let _;
          switch (_.type) {
            case "publisher":
              _ = "#ContentHub_Recommendation_FollowedPublisher";
              break;
            case "developer":
              _ = "#ContentHub_Recommendation_FollowedDeveloper";
              break;
            case "franchise":
              _ = "#ContentHub_Recommendation_FollowedFranchise";
              break;
          }
          return _
            ? (0, _.jsx)(_, {
                header: (0, _._)(
                  _,
                  (0, _.jsx)("span", {
                    className: _().RelevantTextBold,
                    children: _.clanInfo?.group_name,
                  }),
                ),
              })
            : null;
        }
        function _(_) {
          const { curator: _ } = _,
            { creatorHome: _ } = (0, _._)(_?.clanAccountID);
          return !_ || !_
            ? null
            : (0, _.jsx)(_._, {
                href: _.GetCreatorHomeURL(null),
                children: (0, _.jsx)("img", {
                  src: _.avatar_medium_url,
                }),
              });
        }
        function _(_) {
          const { lifetimePlaytime: _, storeItem: _ } = _,
            _ = (0, _._)(_);
          return (0, _.jsx)("div", {
            className: _().SimilarAppCtn,
            children: (0, _.jsx)(_._, {
              _: _,
              bHidePrice: !0,
              hoverProps: {
                direction: "overlay",
                nBodyAlignment: 1,
                style: {
                  minWidth: "320px",
                  zIndex: 5e3,
                },
              },
              children: (0, _.jsx)("img", {
                className: _().SimilarAppImg,
                alt: _.GetName(),
                src: _.GetAssets().GetSmallCapsuleURL(),
              }),
            }),
          });
        }
        function _(_) {
          const { arrSteamIDs: _, count: _, locToken: _, bShowAvatars: _ } = _;
          return _
            ? _ == 1 && !_
              ? (0, _.jsx)(_, {
                  header: (0, _._)(
                    _ + "_Single",
                    (0, _.jsx)(_, {
                      steamid: _[0],
                    }),
                  ),
                })
              : (0, _.jsx)(_, {
                  header: (0, _._)(
                    _,
                    _,
                    (0, _.jsx)("span", {
                      className: _().RelevantTextBold,
                    }),
                  ),
                  children:
                    _ &&
                    _.length > 0 &&
                    (0, _.jsx)("div", {
                      className: _().FriendAvatarsCtn,
                      children:
                        _ == 1
                          ? (0, _.jsx)(_, {
                              steamid: _[0],
                            })
                          : (0, _.jsx)(_, {
                              arrSteamIDs: _,
                            }),
                    }),
                })
            : null;
        }
        function _(_) {
          const { steamid: _ } = _,
            { data: _ } = (0, _._)(_);
          return !_ || !_.m_bInitialized
            ? null
            : (0, _.jsx)("span", {
                "data-miniprofile": "s" + _.m_steamid.ConvertTo64BitString(),
                className: _().RelevantTextBold,
                children: _.m_strPlayerName,
              });
        }
        function _(_) {
          const { arrSteamIDs: _ } = _,
            _ = (0, _._)(_);
          return (0, _.jsx)(_.Fragment, {
            children: _.map(
              ({ data: _ }) =>
                _ &&
                (0, _.jsx)(
                  _._,
                  {
                    "data-miniprofile":
                      "s" + _.m_steamid.ConvertTo64BitString(),
                    persona: _,
                    size: "Small",
                    statusPosition: "right",
                  },
                  _.m_steamid.ConvertTo64BitString(),
                ),
            ),
          });
        }
        function _(_) {
          const { steamid: _ } = _,
            { data: _ } = (0, _._)(_);
          return _
            ? (0, _.jsxs)(_._, {
                className: _().FriendBlockCtn,
                "data-miniprofile": "s" + _,
                children: [
                  (0, _.jsx)(_._, {
                    persona: _,
                    size: "Small",
                    statusPosition: "right",
                  }),
                  (0, _.jsx)(_._, {
                    className: _().PersonaStatus,
                    persona: _,
                    eFriendRelationship: _._UC,
                    bIsSelf: !1,
                    strNickname: null,
                    bParenthesizeNicknames: !1,
                    bCompactView: !1,
                    bNoMask: !0,
                  }),
                ],
              })
            : null;
        }
        function _(_) {
          const { children: _, header: _ } = _;
          return (0, _.jsxs)("div", {
            className: _().RelevantItem,
            children: [
              (0, _.jsx)("div", {
                className: _().RelevantCheck,
                children: (0, _.jsx)(_.Jlk, {}),
              }),
              (0, _.jsxs)("div", {
                className: _().RelevantColumn,
                children: [
                  (0, _.jsx)("div", {
                    className: _().ReleventText,
                    children: _,
                  }),
                  _,
                ],
              }),
            ],
          });
        }
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        const _ = new _._("DiscoveryQueueApp").Debug;
        function _(_) {
          const {
              appID: _,
              nItemHeight: _,
              nItemWidth: _,
              selected: _,
              fnFocused: _,
              eStoreDiscoveryQueueType: _,
              storePageFilter: _,
              bPreferDemoStorePage: _,
              elVideo: _,
              elDetails: _,
              appAriaIDs: _,
            } = _,
            [_] = (0, _._)(_, _._),
            _ = (0, _._)(),
            _ = (0, _._)()?.ownerWindow || window,
            _ = _(_, _, _, _),
            { bIsIgnored: _, fnUpdateIgnored: _ } = (0, _._)(_),
            { bIsWishlisted: _, fnUpdateWishlist: _ } = (0, _._)(_),
            _ = _.useRef(void 0);
          if (
            (_.useEffect(() => {
              _ &&
                _.current &&
                _.current.focus({
                  preventScroll: !0,
                });
            }, [_]),
            !_)
          )
            return (
              console.warn("Error: missing store item for appid ", _), null
            );
          const _ = {
            width: _ || void 0,
            height: _ || void 0,
          };
          return (0, _.jsxs)(_._, {
            "aria-labelledby": (0, _._)(
              _.nameId,
              _.tagsId,
              _.reviewId,
              _.relevanceId,
              _.buttonsId,
            ),
            ref: _,
            style: _,
            className: (0, _._)(_().DiscoveryQueueApp, _ && _().Selected),
            onOptionsActionDescription: _
              ? (0, _._)("#DiscoveryQueue_RemoveFromWishlist")
              : (0, _._)("#DiscoveryQueue_AddToWishlist"),
            onOptionsButton: _,
            onOKActionDescription: (0, _._)("#DiscoveryQueue_ViewStorePage"),
            onOKButton: () => {
              _.location.href = _;
            },
            onSecondaryActionDescription: _
              ? (0, _._)("#DiscoveryQueue_Undo")
              : (0, _._)("#DiscoveryQueue_IgnoreLink"),
            onSecondaryButton: _,
            fnScrollIntoViewHandler: () => (_(), !0),
            children: [
              (0, _.jsx)("div", {
                className: (0, _._)(_().IgnoredCtn, _ && _().Active),
                children: (0, _.jsxs)("div", {
                  className: (0, _._)(_().IgnoredInfo, _ && _().Active),
                  children: [
                    (0, _.jsx)("div", {
                      className: _().IgnoredTitle,
                      children: (0, _._)("#DiscoveryQueue_Ignored"),
                    }),
                    (0, _.jsx)("div", {
                      className: _().IgnoredDescription,
                      children: (0, _._)("#DiscoveryQueue_IgnoredConfirmation"),
                    }),
                    (0, _.jsxs)(_._, {
                      className: (0, _._)(
                        _().QueueButton,
                        _().UndoIgnoreButton,
                      ),
                      onClick: _,
                      children: [
                        _ &&
                          (0, _.jsx)(_._, {
                            button: _._._,
                            type: _._.Light,
                            size: _._.Medium,
                          }),
                        (0, _._)("#DiscoveryQueue_Undo"),
                      ],
                    }),
                  ],
                }),
              }),
              _,
              _,
            ],
          });
        }
        function _(_, _, _, _) {
          const _ = (0, _._)();
          return _.useMemo(() => {
            if (!_) return;
            const _ = (0, _._)(_),
              _ = _ >= _._._ ? "?inqueue=" + _ + (_ ? "_" + _ : "") : "",
              _ = (0, _._)(_, _.GetStorePageURL(_) + _);
            return (0, _._)(_);
          }, [_, _, _, _, _]);
        }
        function _(_) {
          const {
              appID: _,
              bShowMinimizedDisplay: _,
              eStoreDiscoveryQueueType: _,
              storePageFilter: _,
              bPreferDemoStorePage: _,
              appAriaIDs: _,
            } = _,
            [_] = (0, _._)(_, _._),
            _ = (0, _._)(_),
            { bIsIgnored: _, fnUpdateIgnored: _ } = (0, _._)(_),
            { bIsWishlisted: _, fnUpdateWishlist: _ } = (0, _._)(_),
            _ = _(_, _, _, _),
            _ = (0, _._)(),
            _ = _;
          if (!_) return;
          const _ = _.GetAssets().GetLibraryCapsuleURL(),
            _ = _.GetAssets().GetHeaderURL();
          return (0, _.jsxs)(_._, {
            className: _().AppDetailsCtn,
            children: [
              (0, _.jsxs)("div", {
                className: _().AppDetailsCtnTop,
                children: [
                  _ &&
                    (0, _.jsxs)("a", {
                      className: (0, _._)(_().CapsuleLink),
                      href: _,
                      children: [
                        (0, _.jsx)("img", {
                          className: _().AppLibraryHero,
                          src: _,
                        }),
                        _ &&
                          (0, _.jsx)("img", {
                            className: _().AppHeader,
                            src: _,
                          }),
                      ],
                    }),
                  (0, _.jsxs)("div", {
                    _: _.nameId,
                    className: _().RightColumn,
                    children: [
                      (0, _.jsx)("a", {
                        className: (0, _._)(_().AppName),
                        href: _,
                        children: _.GetName(),
                      }),
                      (0, _.jsx)(_._, {
                        bSingleLineMode: !0,
                        _: _,
                      }),
                    ],
                  }),
                  (0, _.jsx)(_, {
                    rgTagIDs: _.GetTagIDs(),
                    ariaLabelID: _.tagsId,
                  }),
                  (0, _.jsx)("div", {
                    className: _().AppReviews,
                    _: _.reviewId,
                    children: (0, _.jsx)(_._, {
                      bShowTooltip: !0,
                      bTruncateTotalReviews: _,
                      _: _,
                    }),
                  }),
                  (0, _.jsx)("div", {
                    _: _.relevanceId,
                    className: _().AppRelevanceCtn,
                    children: (0, _.jsx)(_, {
                      bHideDescription: _,
                      bShowAvatars: !_,
                      storeItem: _,
                      appID: _,
                    }),
                  }),
                ],
              }),
              !_ &&
                (0, _.jsx)("div", {
                  className: _().AppActionButtonsCtn,
                  children: (0, _.jsx)("div", {
                    _: _.buttonsId,
                    className: _().AppActionJustButtonsCtn,
                    children: (0, _.jsxs)("div", {
                      className: _().ButtonsRowWrap,
                      children: [
                        _.BHasDemo() &&
                          (0, _.jsx)(_._, {
                            _: _,
                            className: (0, _._)(
                              _().QueueButton,
                              _().Primary,
                              _().Launch,
                            ),
                          }),
                        (0, _.jsxs)("a", {
                          className: (0, _._)(_().QueueButton, _().Primary),
                          href: _,
                          children: [
                            _ &&
                              (0, _.jsx)(_._, {
                                button: _._._,
                                type: _._.Light,
                                size: _._.Medium,
                                additionalClassName: _().YGlyph,
                              }),
                            " ",
                            (0, _._)("#DiscoveryQueue_ViewStorePage"),
                          ],
                        }),
                        (0, _.jsx)(_._, {
                          toolTipContent: _
                            ? (0, _._)("#RemoveFromWishlist_ttip")
                            : (0, _._)("#AddToWishlist_ttip"),
                          children: (0, _.jsxs)(_._, {
                            "aria-label": _
                              ? (0, _._)("#Sale_RemoveFromWishlist")
                              : (0, _._)("#Sale_AddToWishlist"),
                            focusable: !0,
                            className: (0, _._)(
                              _().QueueButton,
                              _ && _().Active,
                            ),
                            onClick: _,
                            children: [
                              _ &&
                                (0, _.jsx)(_._, {
                                  button: _._._,
                                  type: _._.Light,
                                  size: _._.Medium,
                                  additionalClassName: _().YGlyph,
                                }),
                              _ ? (0, _.jsx)(_.qnF, {}) : (0, _.jsx)(_.T4m, {}),
                            ],
                          }),
                        }),
                        (0, _.jsx)(_._, {
                          toolTipContent: (0, _._)(
                            "#SaleTrailerCarousel_IgnoreLink_ttip",
                          ),
                          children: (0, _.jsx)(_._, {
                            "aria-label": (0, _._)(
                              "#DiscoveryQueue_IgnoreLink",
                            ),
                            focusable: !0,
                            className: (0, _._)(
                              _().QueueButton,
                              _ && _().Active,
                            ),
                            onClick: _,
                            children: (0, _.jsx)(_.NtH, {}),
                          }),
                        }),
                      ],
                    }),
                  }),
                }),
            ],
          });
        }
        function _(_) {
          const { rgTagIDs: _, ariaLabelID: _ } = _,
            _ = [...(0, _._)(_)].slice(0, 8);
          return (0, _.jsx)("div", {
            _: _,
            role: "list",
            className: _().AppTagsCtn,
            children: _.map((_) =>
              (0, _.jsx)(
                _._,
                {
                  className: _().TagEntry,
                  tagID: _,
                },
                _,
              ),
            ),
          });
        }
        function _() {
          const _ = _.useId(),
            _ = _.useId(),
            _ = _.useId(),
            _ = _.useId(),
            _ = _.useId();
          return {
            nameId: _,
            tagsId: _,
            reviewId: _,
            relevanceId: _,
            buttonsId: _,
          };
        }
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        const _ = new _._("DiscoveryQueueWizard").Debug,
          _ = 1,
          _ = 1400,
          _ = "discoveryqueue2022";
        async function _(_, _, _, _) {
          let _ = [],
            _ = !1;
          try {
            const { appids: _, exhausted: _ } =
              await _._.Get().GetDiscoveryQueueAppsOfType(_, _, _);
            (_ = [..._]),
              (_ = _),
              _ && _.findIndex((_) => _ === _) === -1 && _.unshift(_),
              await _._.Get().QueueMultipleAppRequests(_, {
                ..._._,
                ..._._,
              });
          } catch (_) {
            console.error("Failed getting discovery queue apps", _);
          }
          return {
            appids: _,
            exhausted: _,
          };
        }
        function _(_) {
          const [_, _] = _.useState(!1),
            _ = (0, _._)();
          return (
            (0, _.useEffect)(() => {
              _._.Init(_), _(!0);
            }, [_]),
            _
              ? (0, _.jsx)(_, {
                  ..._,
                })
              : null
          );
        }
        function _(_) {
          const {
              eStoreDiscoveryQueueType: _,
              fnCloseModal: _,
              includeAppID: _,
              storePageFilter: _,
              bPreferDemoStorePage: _,
              bShowAOAutoPlayWarning: _,
            } = _,
            [_, _] = _.useState(0),
            [_, _] = _.useState(void 0),
            [_, _] = _.useState(0),
            _ = (0, _._)()?.ownerWindow || window,
            _ = (0, _._)(_),
            [_, _] = _.useState(0),
            _ = (0, _._)();
          (0, _._)("ArrowLeft", () => _(!1), !0, !0),
            (0, _._)("Left", () => _(!1), !0, !0),
            (0, _._)("ArrowRight", () => _(!0), !0, !0),
            (0, _._)("Right", () => _(!0), !0, !0),
            (0, _._)("Escape", () => _?.(), !0, !0),
            (0, _._)("Esc", () => _?.(), !0, !0);
          const _ = _.useMemo(() => _.innerWidth < _, [_]),
            { fnGetDiscoveryQueue: _, rgAppIDs: _ } = _(_, _, _);
          _.useEffect(() => {
            _(!0), _._.Get().HintLoad();
          }, []),
            _.useEffect(() => {
              const _ = _[_];
              _ != _ && (_ && _ != _ && _.AddImpression(_, _), _(_));
            }, [_, _, _, _, _]);
          const _ = (_) => {
            const _ = _._(_ + (_ ? 1 : -1), 0, _.length - 1);
            _ != _ &&
              (_(_), _("New selected index: ", _, " Prev selected index: ", _));
          };
          _.useEffect(() => {
            _?.length &&
              _[_] !== _ &&
              (_((_) => _ + 1),
              _._.Get()
                .SkipDiscoveryQueueItem(_[_], _, _)
                .then(() => _((_) => _ - 1)));
          }, [_, _, _, _]),
            _.useEffect(() => {
              _.length != _ &&
                (_(_.length), _.length > _ && _[_] == _ && _(_ + 1));
            }, [_, _, _]);
          const [_] = _.useState(new Map()),
            _ = (0, _._)(_, _),
            _ = !(0, _._)() && _ > 0,
            _ = !(0, _._)() && _ < _.length - 1,
            {
              refContainer: _,
              bIsDragging: _,
              nDragOffset: _,
              nDragSelectedOffsetIndex: _,
              handleTouchStart: _,
              handleTouchMove: _,
              handleTouchEnd: _,
            } = _((_) => _(_), _.length),
            _ = (_) => {
              _.target == _.currentTarget && (_?.(), _.stopPropagation());
            },
            _ = (_) => _._(_ + _, _) && (_._(_, -1, 1) || _),
            _ = (0, _._)(_._.STORE_BASE_URL + "explore?dq=widget"),
            _ = !(0, _._)() && !(0, _._)() && _ === _._._,
            _ = (0, _._)(_._.STORE_BASE_URL + "explore/next/" + _._._),
            _ = _[_] !== _,
            { nQueueStart: _, nCount: _ } = _(_, _);
          return (0, _.jsx)(_._, {
            feature: _,
            children: (0, _.jsx)(_._, {
              role: "dialog",
              focusable: !1,
              "flow-children": "column",
              className: _().DiscoveryQueueCarouselCtn,
              navEntryPreferPosition: _._.LAST,
              onCancelButton: () => _?.(),
              onCancelActionDescription: (0, _._)("#Button_Close"),
              children: (0, _.jsxs)("div", {
                className: _().DiscoveryQueueWrapper,
                onClick: _,
                children: [
                  _.length > 0 &&
                    (0, _.jsx)(_._, {
                      "flow-children": "row",
                      className: _().DiscoveryQueueName,
                      children: _,
                    }),
                  (0, _.jsxs)(_._, {
                    "flow-children": "row",
                    className: _().TopBarCtn,
                    children: [
                      (0, _.jsx)(_._, {
                        className: _().LearnMore,
                        children: (0, _._)(
                          "#DiscoveryQueue_LearnMore_Default",
                          (0, _.jsx)(_._, {
                            className: _().LearnMoreLink,
                            href: (0, _._)(_),
                          }),
                        ),
                      }),
                      _ &&
                        (0, _.jsx)(_._, {
                          className: _().ClassicQueueLink,
                          children: (0, _._)(
                            "#DiscoveryQueue_ClassicQueue_Link",
                            (0, _.jsx)(_._, {
                              className: _().LearnMoreLink,
                              href: (0, _._)(_),
                            }),
                          ),
                        }),
                      (0, _.jsx)(_._, {
                        className: _().ControlsCtn,
                        children: (0, _.jsx)(_._, {
                          focusable: !0,
                          className: _().QueueButton,
                          onClick: _,
                          "aria-label": (0, _._)("#Button_Close"),
                          onActivate: () => _ && _(),
                          children: (0, _.jsx)(_._, {}),
                        }),
                      }),
                    ],
                  }),
                  (0, _.jsx)(_._, {
                    role: "button",
                    "aria-label": (0, _._)("#Carousel_Next"),
                    onClick: () => _(!1),
                    className: (0, _._)(
                      _().QueueNavArrow,
                      _().LeftArrow,
                      _ && _().Enable,
                    ),
                    children: (0, _.jsx)(_.l8x, {
                      angle: 180,
                    }),
                  }),
                  (0, _.jsx)(_._, {
                    role: "button",
                    "aria-label": (0, _._)("#Carousel_Prev"),
                    onClick: () => _(!0),
                    className: (0, _._)(
                      _().QueueNavArrow,
                      _().RightArrow,
                      _ && _().Enable,
                    ),
                    children: (0, _.jsx)(_.l8x, {
                      angle: 0,
                    }),
                  }),
                  (0, _.jsx)(_._, {
                    ref: _,
                    className: _().DiscoveryQueueItemsCtn,
                    focusable: !1,
                    onTouchStart: _,
                    onTouchMove: _,
                    onTouchEnd: _,
                    children: [-2, -1, 0, 1, 2].map((_) =>
                      (0, _.jsx)(
                        "div",
                        {
                          className: (0, _._)({
                            [_().DiscoveryQueueItemPositioner]: !0,
                            [_().Dragging]: _,
                            [_().InRange]: _(_),
                            [_().FarLeft]: _ == -2,
                            [_().Left]: _ == -1,
                            [_().Current]: _ == 0,
                            [_().Right]: _ == 1,
                            [_().FarRight]: _ == 2,
                            [_().Selected]: _ + _ == 0,
                          }),
                          style: {
                            "--dragOffsetX": `${_}px`,
                          },
                          children:
                            _(_) &&
                            (0, _.jsx)(_, {
                              eStoreDiscoveryQueueType: _,
                              storePageFilter: _,
                              rgAppIDs: _,
                              index: _ + _,
                              bShowMinimizedDisplay: _,
                              selectedIndex: _,
                              bPreferDemoStorePage: !!_,
                              mapViewedAppCount: _,
                              fnCloseModal: _,
                              fnLoadNextQueue: () => _(!1),
                              fnAdvance: _,
                              bSkipAppRequestPending: _ != 0,
                              showAOAutoPlayWarning: !!_,
                            }),
                        },
                        _ + _,
                      ),
                    ),
                  }),
                  (0, _.jsx)(_._, {
                    className: (0, _._)(!_ && _().ProgressHidden),
                    showPriorAsActive: !0,
                    count: _,
                    selectedIndex: _ - _,
                  }),
                ],
              }),
            }),
          });
        }
        function _(_, _) {
          let _ = 0;
          for (let _ = 0; _ < _; _++) _[_] == _ && (_ = _ + 1);
          let _ = 0;
          for (let _ = _; _ < _.length; _++)
            if (_[_] == _) {
              _ = _;
              break;
            } else _ == _.length - 1 && (_ = _.length);
          const _ = _ - _;
          return {
            nQueueStart: _,
            nQueueEnd: _,
            nCount: _,
          };
        }
        function _(_, _) {
          const _ = _.useRef(null),
            [_, _] = _.useState(0),
            [_, _] = _.useState(!1),
            [_, _] = _.useState(0),
            _ = _.useRef(0),
            _ = 50;
          return {
            refContainer: _,
            bIsDragging: _,
            nDragOffset: _,
            nDragSelectedOffsetIndex: _,
            handleTouchStart: (_) => {
              _(!0), (_.current = _.touches[0].clientX), _(0), _(0);
            },
            handleTouchMove: (_) => {
              if (!_) return;
              const _ = _.touches[0].clientX - _.current;
              _(_), _(_ > _ ? 1 : _ < -_ ? -1 : 0);
            },
            handleTouchEnd: () => {
              _ &&
                (_(!1),
                _ > _
                  ? _((_) => Math.max(_ - 1, 0))
                  : _ < -_ && _((_) => Math.min(_ + 1, _ - 1)),
                _(0),
                _(0));
            },
          };
        }
        function _(_) {
          const {
              eStoreDiscoveryQueueType: _,
              storePageFilter: _,
              rgAppIDs: _,
              index: _,
              bShowMinimizedDisplay: _,
              selectedIndex: _,
              bPreferDemoStorePage: _,
              mapViewedAppCount: _,
              fnCloseModal: _,
              fnLoadNextQueue: _,
              fnAdvance: _,
              bSkipAppRequestPending: _,
              showAOAutoPlayWarning: _,
            } = _,
            [_, _] = _.useState(!1),
            _ = _(),
            _ = () => {
              _ != _ && _(_ > _);
            },
            _ = _ === _,
            _ = _.useRef(_);
          if (
            (_.useEffect(() => {
              const _ = _.current;
              if (((_.current = _), _ && !_)) {
                _(!0);
                const _ = setTimeout(() => _(!1), 500);
                return () => {
                  clearTimeout(_);
                };
              }
            }, [_]),
            _[_] == _)
          ) {
            let _ = 0;
            for (let _ = _ - 1; _ >= 0; _--) _[_] == _ && (_ += 1);
            let _ = 0;
            for (let _ = _ - 1; _ >= 0 && _[_] !== _; _--) _++;
            return (
              _.has(_) ||
                _.set(_, _._.Get().GetTotalSkippedAppsForDiscoveryQueue(_, _)),
              (0, _.createElement)(_, {
                ..._,
                key: _,
                selected: _,
                lastCard: _ == _.length - 1,
                fnLoadNextQueue: _,
                fnCloseModal: _,
                summaryCardIndex: _,
                eStoreDiscoveryQueueType: _,
                viewedAppCount: (_.get(_) || 0) + _,
                fnFocused: _,
                fnAdvance: () => _(!0),
                bSkipAppRequestPending: _,
              })
            );
          }
          const _ = _ || _.current || _;
          return (0, _.jsx)(_, {
            appAriaIDs: _,
            eStoreDiscoveryQueueType: _,
            storePageFilter: _,
            selected: _,
            appID: _[_],
            bPreferDemoStorePage: _,
            fnFocused: _,
            elVideo: (0, _.jsx)(_._, {
              appID: _[_],
              focused: _,
              showAOAutoPlayWarning: _,
              fnComplete: void 0,
            }),
            elDetails: (0, _.jsx)(_, {
              appID: _[_],
              bShowMinimizedDisplay: _,
              eStoreDiscoveryQueueType: _,
              storePageFilter: _,
              bPreferDemoStorePage: _,
              appAriaIDs: _,
            }),
          });
        }
        function _(_, _, _) {
          const [_, _] = _.useState([]),
            _ = (0, _._)("DiscoveryQueueWizard");
          return {
            fnGetDiscoveryQueue: async (_) => {
              let { appids: _ } = await _(_, !_, _ && _, _);
              if (_ && !_.length) {
                let { appids: _ } = await _(_, !0, void 0, _);
                _ = _;
              }
              if (!_?.token?.reason) {
                const _ = [...(_ ?? []), ..._, _];
                _(_);
              }
              _("Loaded new discovery queue apps: ", _);
            },
            rgAppIDs: _,
          };
        }
        function _(_) {
          const {
              eStoreDiscoveryQueueType: _,
              fnCloseModal: _,
              summaryCardIndex: _,
              lastCard: _,
              selected: _,
              fnLoadNextQueue: _,
              storePageFilter: _,
              fnDisplaySummaryReward: _,
              viewedAppCount: _,
              fnFocused: _,
              fnAdvance: _,
              bSkipAppRequestPending: _,
            } = _,
            [_, _] = _.useState(!1),
            _ = (0, _._)(),
            _ = (0, _._)(_._._, _._.LANGUAGE, !1),
            [_, _] = _.useState(0),
            [_, _] = _.useState(0),
            { data: _ } = (0, _._)();
          _.useEffect(() => {
            _ &&
              !_ &&
              _ &&
              _._.Get()
                .HintLoad()
                .then(() => {
                  _._.Get()
                    .LoadSkippedApps(_, _)
                    .then((_) => {
                      _(_.reduce((_, _) => (_.has(_) ? _ + 1 : _), 0)),
                        _(
                          _.reduce(
                            (_, _) => (_._.Get().BIsGameIgnored(_) ? _ + 1 : _),
                            0,
                          ),
                        ),
                        _(!0);
                    });
                });
          }, [_, _, _, _, _]);
          const [_, _] = _.useState(!1),
            _ = (0, _._)(_, _),
            _ = (0, _._)("DiscoveryQueueSummary"),
            _ = async () => {
              if (!_) {
                _();
                return;
              }
              _ || (_(!0), await _(), _?.token?.reason || _(!1));
            };
          return (0, _.jsxs)(_, {
            selected: _,
            fnFocused: _,
            fnOnContinue: _,
            fnCloseModal: _,
            bLoaded: _,
            children: [
              (0, _.jsxs)("div", {
                className: _().SummaryContentCtn,
                children: [
                  (0, _.jsx)("div", {
                    className: _().SummaryTitle,
                    children: (0, _._)("#DiscoveryQueue_SummaryTitle"),
                  }),
                  !_ &&
                    _ &&
                    _.data?.definition &&
                    (0, _.jsx)(_, {
                      bSkipAppRequestPending: _,
                      summaryCardIdx: _,
                    }),
                  (0, _.jsx)("div", {
                    className: _().YourStats,
                    children: (0, _._)("#DiscoveryQueue_YourStats"),
                  }),
                  (0, _.jsxs)(_._, {
                    "flow-children": "row",
                    className: _().SummaryGrid,
                    children: [
                      (0, _.jsxs)("div", {
                        className: _().GridItem,
                        children: [
                          (0, _.jsx)("div", {
                            className: _().GridTitle,
                            children: (0, _._)("#DiscoveryQueue_ViewedCaps"),
                          }),
                          (0, _.jsx)("div", {
                            className: _().GridNumber,
                            children: (0, _._)(_),
                          }),
                          (0, _.jsx)("div", {
                            className: _().GridSubTitle,
                            children: (0, _._)("#DiscoveryQueue_Titles"),
                          }),
                        ],
                      }),
                      (0, _.jsxs)("div", {
                        className: _().GridItem,
                        children: [
                          (0, _.jsx)("div", {
                            className: _().GridTitle,
                            children: (0, _._)(
                              "#DiscoveryQueue_WishlistedCaps",
                            ),
                          }),
                          (0, _.jsx)("div", {
                            className: _().GridNumber,
                            children: (0, _._)(_),
                          }),
                          (0, _.jsx)(_._, {
                            className: (0, _._)(_().GridSubTitle, _().TextLink),
                            href: (0, _._)(_._.STORE_BASE_URL + "wishlist"),
                            children: (0, _._)("#DiscoveryQueue_ViewWishlist"),
                          }),
                        ],
                      }),
                      (0, _.jsxs)("div", {
                        className: _().GridItem,
                        children: [
                          (0, _.jsx)("div", {
                            className: _().GridTitle,
                            children: (0, _._)("#DiscoveryQueue_IgnoredCaps"),
                          }),
                          (0, _.jsx)("div", {
                            className: _().GridNumber,
                            children: (0, _._)(_),
                          }),
                          (0, _.jsx)(_._, {
                            className: (0, _._)(_().GridSubTitle, _().TextLink),
                            href: (0, _._)(
                              _._.STORE_BASE_URL + "account/notinterested",
                            ),
                            children: (0, _._)("#DiscoveryQueue_ViewIgnored"),
                          }),
                        ],
                      }),
                    ],
                  }),
                  !_ &&
                    (0, _.jsxs)(_._, {
                      className: _().SummaryActionButtonsCtn,
                      children: [
                        (0, _.jsx)(_._, {
                          className: (0, _._)(_().QueueButton, _().Wide),
                          onClick: _,
                          children: (0, _._)("#ActionButtonLabelDone"),
                        }),
                        !_ &&
                          (0, _.jsx)(_._, {
                            className: (0, _._)(
                              _ && _().Disabled,
                              _().QueueButton,
                              _().Primary,
                              _().Wide,
                            ),
                            onClick: _,
                            children: _
                              ? (0, _._)("#Loading")
                              : (0, _._)("#Button_Continue"),
                          }),
                      ],
                    }),
                ],
              }),
              !_ &&
                (0, _.jsx)(_.Fragment, {
                  children: !!_ && _(_ + 1),
                }),
            ],
          });
        }
        function _(_) {
          const {
              children: _,
              selected: _,
              fnOnContinue: _,
              fnCloseModal: _,
              fnFocused: _,
              bLoaded: _,
            } = _,
            _ = (0, _._)(_._.STORE_BASE_URL + "wishlist"),
            _ = (0, _._)()?.ownerWindow || window,
            _ = () => {
              _.location.href = (0, _._)(_);
            },
            _ = _.useRef(void 0);
          return (
            _.useEffect(() => {
              _ &&
                _.current &&
                _.current.focus({
                  preventScroll: !0,
                });
            }, [_]),
            (0, _.jsx)(_._, {
              ref: _,
              "aria-live": "polite",
              className: (0, _._)(
                _().SummaryCtn,
                _().DiscoveryQueueApp,
                _ && _().Selected,
              ),
              onOptionsActionDescription: (0, _._)(
                "#DiscoveryQueue_ViewWishlist",
              ),
              onOptionsButton: _,
              onOKActionDescription: (0, _._)("#Button_Continue"),
              onOKButton: () => {
                _();
              },
              onCancelActionDescription: (0, _._)("#ActionButtonLabelDone"),
              onCancelButton: () => _ && _(),
              fnScrollIntoViewHandler: () => (_(), !0),
              children: _
                ? _
                : (0, _.jsx)(_._, {
                    className: _().DiscoveryQueueThrobber,
                    msDelayAppear: 200,
                    size: "large",
                    position: "center",
                  }),
            })
          );
        }
        function _() {
          return (0, _.jsx)(_._, {
            className: _().SaleRewardsCtn,
            children: (0, _.jsx)(_._, {
              size: "large",
              position: "center",
            }),
          });
        }
        function _(_) {
          const { bSkipAppRequestPending: _, summaryCardIdx: _ } = _;
          return _
            ? (0, _.jsx)(_, {})
            : (0, _.jsx)(_, {
                summaryCardIdx: _,
              });
        }
        function _(_) {
          const { summaryCardIdx: _ } = _,
            _ = (0, _._)(_._._, _._.LANGUAGE, !1, _.toString()),
            [_] = (0, _._)(_?.data?.current_def?.appid, {}),
            _ = (0, _._)();
          if (!_?.data?.current_def || !_?.GetName().length)
            return (0, _.jsx)(_, {});
          const _ = _.data.num_items_earned,
            _ = _.data.current_def.num_items_per_def,
            _ = _ - _,
            _ = (_ / _) * 100;
          return (0, _.jsxs)(_._, {
            className: _().SaleRewardsCtn,
            children: [
              (0, _.jsx)(_, {
                nPercent: _,
                size: 70,
                strokeWidth: 12,
              }),
              (0, _.jsxs)(_._, {
                className: _().RewardStatusCtn,
                children: [
                  (0, _.jsx)("div", {
                    className: _().SaleRewardAppTitle,
                    children: (0, _._)(
                      `#DiscoveryQueue_SaleStatus_Title${_ ? "" : "_Complete"}`,
                      (0, _._)(_),
                      _.GetName(),
                    ),
                  }),
                  _ > 0 &&
                    (0, _.jsx)("div", {
                      className: _().SaleRewardAppTitle,
                      children: (0, _._)(
                        "#DiscoveryQueue_SaleStatus_Desc",
                        (0, _._)(_),
                        _.GetName(),
                      ),
                    }),
                  !_ &&
                    (0, _.jsx)("a", {
                      href: (0, _._)(
                        _._.COMMUNITY_BASE_URL + "my/itemcollection",
                      ),
                      children: (0, _._)("#DiscoveryQueue_SaleStatus_Link"),
                    }),
                ],
              }),
            ],
          });
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
        function _() {
          const [_, _] = (0, _.useState)(!_._.logged_in),
            [_] = (0, _._)(),
            _ = (0, _._)();
          return (
            (0, _.useEffect)(() => {
              _ || (_._.Init(_), _(!0));
            }, [_, _]),
            _ && !_
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
          _ = __webpack_require__._(_),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        function _(_) {
          const {
            className: _,
            showPriorAsActive: _,
            count: _,
            selectedIndex: _,
            fnNavigate: _,
          } = _;
          return (0, _.jsx)(_._, {
            "flow-children": "row",
            className: (0, _._)(_().ProgressCtn, _),
            children: Array.from({
              length: _,
            }).map((_, _) =>
              (0, _.jsx)(
                "div",
                {
                  className: (0, _._)({
                    [_().ProgressDot]: !0,
                    [_().ProgressDotActive]: _ && _ < _,
                    [_().ProgressDotSelected]: _ == _,
                    [_().ProgressDotClickable]: !!_,
                  }),
                  onClick: _ ? () => _(_) : void 0,
                },
                "dot_" + _,
              ),
            ),
          });
        }
      },
      chunkid: (module, module_exports, __webpack_require__) => {
        "use strict";
        __webpack_require__._(module_exports),
          __webpack_require__._(module_exports, {
            default: () => _,
          });
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        function _() {
          return (0, _.jsx)(_._, {
            placeholderHeight: "200px",
            rootMargin: "0px 0px 100% 0px",
            children: (0, _.jsx)(_._, {
              eStoreDiscoveryQueueType: _._._,
            }),
          });
        }
      },
      chunkid: (module, module_exports, __webpack_require__) => {
        "use strict";
        __webpack_require__._(module_exports),
          __webpack_require__._(module_exports, {
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
          _ = __webpack_require__("chunkid");
        function _(_) {
          const _ = (0, _._)(),
            { showDiscoveryQueue: _ } = (0, _._)(_._._),
            _ = _.useCallback(() => {
              _._.logged_in
                ? _()
                : (0, _._)(
                    (0, _.jsx)(_._, {
                      onOK: () => {
                        window.location.href = `${_._.STORE_BASE_URL}login?redir=${encodeURIComponent(document.location.href)}`;
                      },
                      strOKButtonText: (0, _._)(
                        "#DiscoveryQueue_Error_Login_Title",
                      ),
                      strDescription: (0, _._)("#DiscoveryQueue_Error_Login"),
                      strTitle: (0, _._)("#DiscoveryQueue_Error_Login_Title"),
                    }),
                    window,
                  );
            }, [_]);
          return _
            ? (0, _.jsx)(_._, {
                children: (0, _.jsx)("a", {
                  onClick: _,
                  className: "experiment-button",
                  children: (0, _._)("#DiscoveryQueue_OpenWizard"),
                }),
              })
            : (0, _.jsx)("div", {
                className: "experiment-button-placeholder",
                children: "\xA0",
              });
        }
      },
      chunkid: (module) => {
        module.exports = {
          "duration-app-launch": "800ms",
          AppCarouselTrailerCtn: "_2O2oGi6d4q3fJxsg-26cll",
          AutoplayCheckbox: "_1sEIT3Bh71g9JRzpjKvlIo",
          AppVideo: "_2YG6k4pQ2z4jwoRGrdPhbv",
          Microtrailer: "_2HvnbxzEFWWLlYvdP-FWFN",
          PlayFullTrailer: "_1yr-ANb75ms4sc2qaXuCYM",
          "microtrailer-trans-out": "_23fHbTINXOIsUypCFWMSTa",
          PlayMicrotrailer: "_2X47xgnvmgTDpH69RCBkZ7",
          "microtrailer-trans-in": "_25FSUgigrr0CQ9eVFmOuId",
          NoTrailer: "c42wWAo7Lp6uTn6LjeaO1",
          Trailer: "_27Hm281QxYE24wJqONIP0p",
          "trailer-trans-in": "_1nwjQUxY2CTD6YmThf7xQG",
          AppMainCap: "_1S2WeY58fI6yRef-8ArnWh",
          AppMainCapFadeIn: "_3fHap4fl2kZ5StUjb1DwDJ",
          PlayButton: "OsRdwk7Q3-sApCo2CDxtN",
          PlayButtonCapFadeIn: "_2o5mPh-Zx9EWF_H-KforbU",
          AutoplayCheckboxCtn: "_2J3J__8l3sk6LI4mpUfWDT",
          AOWarning: "_2IxWvaCkHcMl0aL8NM8v6T",
          Text: "_1r5F1Fy8uG639opEIjyS5Z",
          BackgroundAnimation: "_1G9QIfwsMh2XRR-bMBE97j",
          "ItemFocusAnim-darkerGrey-nocolor": "_2bun2taA5e3StPJT3cs6jH",
          "ItemFocusAnim-darkerGrey": "_39J4X61tugDHvSmGBzKD7p",
          "ItemFocusAnim-darkGreySettings": "_13-B6AE59KUQ-ABnyKYXkP",
          "ItemFocusAnim-darkGrey": "_2xXdz148UoxpJlfyVlUo0D",
          "ItemFocusAnim-grey": "_3-Rh6nRz4sRZLRVEQKPefw",
          "ItemFocusAnim-translucent-white-10": "_1b0mYc5KheDLRLQoHqAqhU",
          "ItemFocusAnim-translucent-white-20": "_3WVHjFeBrJOv0Xsqd7X2Vp",
          "ItemFocusAnimBorder-darkGrey": "_1TaBFa6F_r2oTJvni2yNqQ",
          "ItemFocusAnim-green": "_1dPdL7c_2dvq8gAaWTSq04",
          focusAnimation: "_3BX0kUvHLGH3mZJG4BP4cc",
          hoverAnimation: "_1om-YMcnj-8DLjL_ek0CxW",
          "capsule-trans-out": "YvTbl9XD-HkAs9W3pcEgp",
        };
      },
      chunkid: (module) => {
        module.exports = {
          "duration-app-launch": "800ms",
          AppVideoCtn: "_3ASFJGw8T9-hDikhxRScDI",
          WishlistBadge: "_2LOILpLspWCbXnRmFuUbwx",
          Active: "-iU7fWthqJgfmhzrdV74K",
          DeckVerifiedLogo: "_2EVzMYr528F1dVAm4e88Sy",
          VideoArea: "_1otwTolVlX9PfKD2myNigb",
          IgnoredCtn: "_35ODHCvm13mJ5gOunwQzs9",
          IgnoredInfo: "_2SriIWC_6CHPZkjggKoxjb",
          IgnoredTitle: "_1D4RHomSRy25j1Qxl-dDPw",
          IgnoredDescription: "_29zcmLd8LJQ2FR33D1_Ph6",
          UndoIgnoreButton: "_1rPGVQftqLzqjH04tebuaT",
          UndoButton: "_1nz7pkRvV4rRrybZrUZu0R",
          Disabled: "_2JvEs3_qRtYncXG7WCALur",
          BackgroundAnimation: "_64dUS3S7fOwtNFhEALHhx",
          "ItemFocusAnim-darkerGrey-nocolor": "UXmjEpq-9pbtC7T5d0MPv",
          "ItemFocusAnim-darkerGrey": "_1olTI2tKYS6IUSkIpca3Qo",
          "ItemFocusAnim-darkGreySettings": "_3JjCik6ZoOCqrb2F2DUuI1",
          "ItemFocusAnim-darkGrey": "_37RRjG54p7sk3Yvb-5BDVv",
          "ItemFocusAnim-grey": "yOH4BAo3sriSZckG9yR1g",
          "ItemFocusAnim-translucent-white-10": "_1USieHqb4yVt2P3Okqs7hF",
          "ItemFocusAnim-translucent-white-20": "_2MtHgIAnILIt8d4PMuS5mi",
          "ItemFocusAnimBorder-darkGrey": "_dHmntK-X7hqNpoiZplVM",
          "ItemFocusAnim-green": "_3CT6dHnuA3SYWZrgk1Sf1Y",
          focusAnimation: "_34YOI6hVEDmEAWHAHlUXon",
          hoverAnimation: "_1UXiQtSunyxlP1LxWHXACi",
        };
      },
      chunkid: (module) => {
        module.exports = {
          "duration-app-launch": "800ms",
          DiscoveryQueueWidgetCtn: "_2H-U0RGd3Y9d6UKdhsGJgZ",
          WidgetText: "-B2PBNVH5puz13sQ8u0Qv",
          WidgetCapsule: "_1Bk7kRLnGpX5NKJgUqayYy",
          CloseButton: "VqFB0E0yCOFJ7UdleH5Nl",
          _: "_31u523-OYDU23urGjLmZMv",
          BackgroundAnimation: "_1Xi-pSFWHdnqUZoL9mamhN",
          "ItemFocusAnim-darkerGrey-nocolor": "_30Zb423phvCDs3xM0hkaEE",
          "ItemFocusAnim-darkerGrey": "_1Mo4iXhlaRXgVjaGtq25YK",
          "ItemFocusAnim-darkGreySettings": "_2aBd-VP3SEE24KKFVyFsXv",
          "ItemFocusAnim-darkGrey": "_1D2t7t4aiQ0ispLkkxifr6",
          "ItemFocusAnim-grey": "_1xesYd5e59XN1JMVEsnIMY",
          "ItemFocusAnim-translucent-white-10": "_3z6L5JKa2Pwmh3aybbPsQa",
          "ItemFocusAnim-translucent-white-20": "_2q3ozadFkqcmuym9HPNbMO",
          "ItemFocusAnimBorder-darkGrey": "_1_c11GGKP0higc2_MkDCPO",
          "ItemFocusAnim-green": "_2-IPzUY6n_ibf285Pd6tDB",
          focusAnimation: "_39M5pNzI36diq2nKXni--u",
          hoverAnimation: "-rg5cQ0xDoWfXZW4k4Rug",
        };
      },
      chunkid: (module) => {
        module.exports = {
          DiscoveryQueueWidgetCtn: "_3PAP1PfUymQrLEveRsxQxP",
          WidgetHeaderCtn: "_3i8xWeKjrdNgEjml1PQRuq",
          AppCarouselPosition: "_1DaxYFphX9KPH-YWeuNTvO",
          Initialized: "gjxSD08f5aogKCSeys9k5",
          Spinner: "_3QqziF_w5iNtHF8dOkfrD0",
          AppCarouselCtn: "_2qPvUCeD7uiBSn261-Gg25",
          FadeIn: "Qc0gimNJ0GLAPE87EH3Gp",
          AppCapsuleCtn: "_3G65z75zOTQeHrXxszHO4b",
          AppName: "r6OCNSBahfTSSDTqXDVqY",
          LibraryImage: "_1QVat7gXKVzPNiStElIJCt",
          CapsuleColumn: "_3OUOaqR0a3uYqsWOZbfSSh",
        };
      },
      chunkid: (module) => {
        module.exports = {
          narrowWidth: "500px",
          avatarHolder: "nibodjvvrm86uCfnnAn4g",
          avatarStatus: "_3xUpb5DWXPFNcHHIcv-9pe",
          avatar: "_3h-QRJGxnVOIExtHD1R0f2",
          avatarFrame: "X_mJE4BYV5StDPwZhSiAu",
          avatarFrameImg: "_3fM0F85j3aWVzr4RJM9-eu",
        };
      },
      chunkid: (module) => {
        module.exports = {
          ProgressBar: "_3szjUMH5QeRwtXAsLRcWt9",
          AnimateProgress: "_3DjdoQj5NoknowwV5t5JPN",
          loadingBarAnim: "_2SA1xV5w3BGirkDWosGYoX",
          Indeterminate: "_3G7KLhFOuTiHW-fGxtWtRs",
          Circular: "_3wMS41OoTPnZyEddTVwzy_",
          Full: "_3t_UEZDy1QxxcYfn3TTvD2",
        };
      },
      chunkid: (module) => {
        module.exports = {
          WidgetHeaderCtn: "_2-tz2hqtOXPPtMnVPHNSdx",
          LaunchAction: "xD8XE561L4OLHkp9K3UIV",
          DiscoveryQueueWidget: "aKZCakHw7WVaUN3j36Nh",
          WidgetHeaderText: "_1mKVZY4-l46AZiZvctCEmx",
          WidgetHeaderSubText: "O2jA-VCFl9bmblncfI4k2",
          LoginButton: "_3u1HeR7JRPiiuKIT78j2Cc",
          Placeholder: "_3qFL88r7vVtG3lg2enLhfi",
          SaleTopSection: "_3Xj9phC0S8zL6qrQ5T1sUJ",
          StickerArrangement: "_1hvmhK7qgdrqLwH_Duphah",
          SaleSticker: "_19psoPSyaHlg76v5Cd9H-n",
          SaleTextCtn: "cwQNGPoPuJS67rykUgZdU",
          BoldText: "_1LS-qczKUuqKzg56ll_C0A",
        };
      },
      chunkid: (module) => {
        module.exports = {
          "duration-app-launch": "800ms",
          DiscoveryQueueCarouselCtn: "_2u0N2gUX44_tavazJJb_QP",
          TextLink: "_3ZdNCUMz9KZMkwPZlO8zmi",
          DiscoveryQueueApp: "_1xJSMubUWBlahkrtb4IFTc",
          DiscoveryQueueWrapper: "_2BYaxM7mBfooJbZYzhEv4D",
          revealDiscoveryQueueWrapper: "brzQbY6Z8TH8Ww-rFL4E0",
          DiscoveryQueueItemsCtn: "_3q6eNRFBrPSFSGEn8uRFZ3",
          DiscoveryQueueItemPositioner: "_16tdfw6vxg9Hdy0KfCutXn",
          Selected: "_2aeAhZ2Y99YIR2-zD6l27U",
          InRange: "_1XPIeNMxObbkYolTEj0Bwh",
          Dragging: "_3fTO0TgoWEAo4zdaHOCTh0",
          FarLeft: "vkLp1smRjDnZg7XQcMqjk",
          Left: "_3gBoKuhIxMBjlxU7FZ2L3a",
          Current: "_2CgJDPFhM9rbjsq9n0c9I_",
          Right: "_1AGP_wKeaN9phzlq_2K9H7",
          FarRight: "hBGRzfrW2Obp7QpzYCi2L",
          AppDetailsCtn: "_2Zwt2P5vy4W9Ha5ePOv54U",
          AppDetailsCtnTop: "_3TkhdqIi1gqwMzexQDS8Ab",
          CapsuleLink: "_2m8YEKXvKa2bcFNjqXdJu7",
          AppLibraryHero: "_uGgOnTsOzgIVK9BHMTUV",
          AppHeader: "Vwr5XZLr5tOEaVLYbj1mZ",
          RightColumn: "VVNgZo2T-rubrTvNMPSoh",
          AppName: "_3lk6f1XI_loCIhBevOddHP",
          AppTagsCtn: "xXcRKEuacDG8kYtDXu6OH",
          TagEntry: "xmqBa8sZa4Xhgktfr43Uh",
          AppReviews: "_2alBMAZOarIyf-vIiNazRg",
          RelevantCtn: "_3sfhS6SCV1q8dTaRIpWCHB",
          RelevantColumn: "Ne2AhbYmPfTxwJVmj1FZP",
          RelevantItem: "_2OUHZGUrr0FugrwCwIm6dF",
          RelevantCheck: "_1BOH1zFTOxtlgKkeEANpYO",
          IgnoreLink: "fir3UBZYT6EAmdYWAdr3a",
          AppActionButtonsCtn: "_2IQHDn5ZvlB1ThhSb_lhX",
          AppActionJustButtonsCtn: "duAyQ1rUX78lMmmZY1V0n",
          QueueButton: "_22Bfzcdg2l-RQEn-qKSIol",
          ButtonsRowWrap: "_1plvU4aLu4hq22gYwThZnH",
          IgnoredCtn: "_3G1MYmgXVcweTUK5jtU_Ft",
          Active: "_2D_EZlAEopCvqU0_w21FdH",
          IgnoredInfo: "_2j-elz350f4ndxI9CBUbyW",
          IgnoredTitle: "_18alvCecAAMAsyM_6zCY2T",
          IgnoredDescription: "CmI-HxKbBH8PjoSk7IVPC",
          UndoIgnoreButton: "_2E3PfDDIiiKoy4iDQV7Ewl",
          AppDesc: "_3-6CubUJWYN2tbKvwS2N9n",
          YGlyph: "_3ncywKLa2mgKgbsj-g2wJi",
          SummaryContentCtn: "Tvu6zAI3kbdYjGQGbypuQ",
          SummaryTitle: "_2o4_HDWD3bRMkoJT4RfiMv",
          YourStats: "_3-iD7yn2dCmqp9AL5xuwLX",
          SummaryGrid: "_3vRcTzxpTSFxcxVm9BKrlQ",
          GridItem: "_2w3xjuBZIgZJPO9HAa5Hb0",
          GridTitle: "_7HEa84jCz03LkGTjIZa7c",
          GridNumber: "jM11lU9OD9-2Hlu3Akwtj",
          GridSubTitle: "_2n8wa2hMCjKHhvMsS0v3_k",
          SummaryActionButtonsCtn: "nqmYD9sGBA3BEmNjp6qYF",
          TopBarCtn: "_1ewUwegRciiNydBWSQRCX-",
          LearnMoreLink: "CiFk6OuYAQSbv_DGXoBSX",
          ControlsCtn: "_2Gy72TJcKqY9gqP5-TAmSk",
          Disabled: "_2xsPifNspMLcbkoUSA5Ujl",
          Primary: "_3o2jhEGrGiVndMjUbNpOw-",
          Launch: "_3SOZx68qVakLwDvAYBOPMG",
          Wide: "_1tFfTbcTKjlfSGsMOJvdf_",
          QueueNavArrow: "_2sZ7DAljYV5Xd-nbhtlmyM",
          Enable: "_2CTzbHZ-C-FfnXEtLZPv9q",
          RightArrow: "_30_0NBq3DkV-qL7Eyqva-t",
          LeftArrow: "_36Cln2gIYtwR3sPPcOi9bT",
          ReleventSimilarAppsCtn: "_2akaWEht7jMXdxPJFmf3WN",
          RecommendingCuratorsCtn: "_RZQ6JnUY6lQGmRcgHFNA",
          AppRelevanceCtn: "_367qBdIRU4xAYHt5cqhPVa",
          WhyRelevant: "_29ReJunMtLbnxbnixF6VdE",
          SimilarAppCtn: "_2fNR47HGs7tI_v1HC2-N1h",
          SimilarAppImg: "_1q8mEyt8Rp7JweHMRGm6hq",
          SimilarAppText: "YWLoeGgBPsjUtXywol3_O",
          FriendAvatarsCtn: "_2hxko0SvUWCZ30U4JH4TNn",
          RelevantTextBold: "_1Z_ek2XNBZbkZqyR-QSwlo",
          AppDescription: "_2mksBeuafFs1CMp0t5Z9gX",
          TradingCardCtn: "_13ZcoCKc8H09LSHp4C197Z",
          TradingCardImage: "_2ZB_x5Jq7JGDapJVPsCZTo",
          Bold: "_2P6WAN13LnRVRmRb-VNu_L",
          FriendBlockCtn: "_34aoCP80lDRK3cq6_V0YQ_",
          PersonaStatus: "_1AYnL3n86EbaOCKf18KKV8",
          ProgressHidden: "UdYhfFDOguxduU7c3PVpv",
          DiscoveryQueueName: "D7yeVCEwaFr6qNo_bPGCr",
          SaleRewardsCtn: "u42zSEWdGrvBDimhV4QNI",
          RewardStatusCtn: "_2C1i6xEuF431h_KHPB53zS",
          SaleRewardAppTitle: "_1-pK3SWEOk30eo-q0EKyH7",
          BackgroundAnimation: "_3tn052OQVu3Bbdx7lAg8v3",
          "ItemFocusAnim-darkerGrey-nocolor": "WFiTs9SPGUObvgDncLEFm",
          "ItemFocusAnim-darkerGrey": "_18LH9gSLwgTgUzIl1C0-pq",
          "ItemFocusAnim-darkGreySettings": "_3bomS6MjDv4c5XbYu2Caqu",
          "ItemFocusAnim-darkGrey": "_3BW-wlgbU7_7zOW8-2d7OI",
          "ItemFocusAnim-grey": "_2PCW9DVf1EkOJw0pwtlWSj",
          "ItemFocusAnim-translucent-white-10": "A-_kb_s9v8pLyRrldCupj",
          "ItemFocusAnim-translucent-white-20": "_1fugsBQAve_CPDYfcK5fou",
          "ItemFocusAnimBorder-darkGrey": "_1X5xeHixS4XJusrPGRQ4nL",
          "ItemFocusAnim-green": "guH2fAOEkfwuIvOhn0oHl",
          focusAnimation: "_2XCqyPQ8Leg6L1dwSjpULK",
          hoverAnimation: "zU1NJEk7QqOdsECL2PI2d",
        };
      },
      chunkid: (module) => {
        module.exports = {
          "duration-app-launch": "800ms",
          ProgressCtn: "_3ed1Al-hFnjq4HQeLo6cIT",
          ProgressDot: "_2R187sMx7MTX5XQ2KN3Xnx",
          ProgressDotActive: "_3z2pS3DFn3MEl5ZPw6lsa9",
          ProgressDotSelected: "_1qJVCZsv51RtfBGao-PV8V",
          ProgressDotClickable: "jKfeFH4S6YhaeZ7RCZ8BN",
          BackgroundAnimation: "_3B8qOyTqC7rzOP_X5kvWK-",
          "ItemFocusAnim-darkerGrey-nocolor": "_2wYIdqvoWTU_8MPGJtV4j",
          "ItemFocusAnim-darkerGrey": "_5noNLXRGVi51cgI8nYBAm",
          "ItemFocusAnim-darkGreySettings": "_3UqXfp4k1blu2wv57exkEd",
          "ItemFocusAnim-darkGrey": "_6iLF1QqShrpEW0UiF0x2o",
          "ItemFocusAnim-grey": "PuZXrV7q9vI7p-jK9x2pN",
          "ItemFocusAnim-translucent-white-10": "_2RwwslrDVdOXePDy6QCEkZ",
          "ItemFocusAnim-translucent-white-20": "_1VijReQZ-moslCOSkJYKIt",
          "ItemFocusAnimBorder-darkGrey": "_1HaTvS9ANJY56lTVTb35I3",
          "ItemFocusAnim-green": "_3mF4OtweD7vY2bcN6piLTq",
          focusAnimation: "rpa_zF1YXxbH3-m1-AI6Q",
          hoverAnimation: "_2WTZTfL3dbXnfZM3Ly10Jo",
        };
      },
    },
  ]);
})();
