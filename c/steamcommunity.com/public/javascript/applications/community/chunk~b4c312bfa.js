(self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
  [9870],
  {
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
    chunkid: (module, module_exports, __webpack_require__) => {
      "use strict";
      __webpack_require__._(module_exports, {
        _: () => _,
        _: () => _,
        _: () => _,
        _: () => _,
      });
      var _,
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__._(_),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid");
      class _ extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(_ = null) {
          super(),
            _.prototype.recommendationid || _._(_._()),
            _.Message.initialize(this, _, 0, -1, void 0, null);
        }
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
                },
              }),
            _.sm_m
          );
        }
        static MBF() {
          return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
        }
        toObject(_ = !1) {
          return _.toObject(_, this);
        }
        static toObject(_, _) {
          return _._(_._(), _, _);
        }
        static fromObject(_) {
          return _._(_._(), _);
        }
        static deserializeBinary(_) {
          let _ = new (_().BinaryReader)(_),
            _ = new _();
          return _.deserializeBinaryFromReader(_, _);
        }
        static deserializeBinaryFromReader(_, _) {
          return _._(_.MBF(), _, _);
        }
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
          return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
        }
        getClassName() {
          return "CUserReviews_Update_Response";
        }
      }
      class _ extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(_ = null) {
          super(),
            _.prototype.reaction_type || _._(_._()),
            _.Message.initialize(this, _, 0, -1, void 0, null);
        }
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
          return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
        }
        getClassName() {
          return "CUserReviews_Recommendation_LoyaltyReaction";
        }
      }
      class _ extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(_ = null) {
          super(),
            _.prototype.recommendationid || _._(_._()),
            _.Message.initialize(this, _, 0, -1, [27, 40], null);
        }
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
                    _,
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
                },
              }),
            _.sm_m
          );
        }
        static MBF() {
          return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
        }
        toObject(_ = !1) {
          return _.toObject(_, this);
        }
        static toObject(_, _) {
          return _._(_._(), _, _);
        }
        static fromObject(_) {
          return _._(_._(), _);
        }
        static deserializeBinary(_) {
          let _ = new (_().BinaryReader)(_),
            _ = new _();
          return _.deserializeBinaryFromReader(_, _);
        }
        static deserializeBinaryFromReader(_, _) {
          return _._(_.MBF(), _, _);
        }
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
          return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
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
          return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
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
          return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
        }
        getClassName() {
          return "CUserReviews_GetIndividualRecommendations_Response";
        }
      }
      !(function (_) {
        (_.Update = function (_, _) {
          return _.SendMsg("UserReviews.Update#1", (0, _._)(_, _), _, {
            ePrivilege: 3,
          });
        }),
          (_.GetFriendsRecommendedApp = function (_, _) {
            return _.SendMsg(
              "UserReviews.GetFriendsRecommendedApp#1",
              (0, _._)(_, _),
              _,
              {
                bConstMethod: !0,
                ePrivilege: 1,
              },
            );
          }),
          (_.GetIndividualRecommendations = function (_, _) {
            return _.SendMsg(
              "UserReviews.GetIndividualRecommendations#1",
              (0, _._)(_, _),
              _,
              {
                bConstMethod: !0,
                ePrivilege: 1,
                eWebAPIKeyRequirement: 2,
              },
            );
          });
      })(_ || (_ = {}));
    },
    chunkid: (module, module_exports, __webpack_require__) => {
      "use strict";
      __webpack_require__._(module_exports, {
        _: () => _,
        _: () => _,
      });
      var _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid");
      function _({
        nPercent: _,
        indeterminate: _,
        animate: __webpack_require__,
        className: _,
      }) {
        return _.createElement("div", {
          className: (0, _._)(
            _.ProgressBar,
            __webpack_require__ && _.AnimateProgress,
            _ && _.Indeterminate,
            _,
          ),
          style: {
            "--percent": _ / 100,
          },
        });
      }
      const _ = ({
        nPercent: _,
        size: _ = 120,
        strokeWidth: __webpack_require__ = 20,
      }) => {
        const _ = (_ - __webpack_require__) / 2,
          _ = 2 * Math._ * _,
          _ = _ - (_ / 100) * _,
          _ = 100 == _;
        return _.createElement(
          "div",
          {
            className: (0, _._)({
              [_.Circular]: !0,
              [_.Full]: _,
            }),
          },
          _.createElement(
            "svg",
            {
              width: _,
              height: _,
              style: {
                transform: "rotate(-90deg)",
              },
            },
            _.createElement("circle", {
              _: _ / 2,
              _: _ / 2,
              _: _,
              stroke: "#0c131d",
              strokeWidth: __webpack_require__,
              fill: "none",
            }),
            _.createElement("circle", {
              _: _ / 2,
              _: _ / 2,
              _: _,
              stroke: "#1a9fff",
              strokeWidth: __webpack_require__,
              fill: "none",
              strokeDasharray: _,
              strokeDashoffset: _,
              style: {
                transition: "stroke-dashoffset 0.3s ease-in-out",
              },
            }),
          ),
        );
      };
    },
    chunkid: (module, module_exports, __webpack_require__) => {
      "use strict";
      __webpack_require__._(module_exports, {
        _: () => _,
      });
      var _ = __webpack_require__("chunkid");
      function _(_, _ = "#Played_", __webpack_require__ = !1) {
        if (_ >= 120) {
          let _ = _ / 60;
          _ = Math.round(10 * _) / 10;
          let _ = _._.GetPreferredLocales(),
            _ = __webpack_require__.toLocaleString(_, {
              minimumFractionDigits: 0,
              maximumFractionDigits: 1,
            });
          return (0, _._)(_ + "Hours", _);
        }
        return _ && 1 == _
          ? (0, _._)(_ + "Minute", _)
          : (0, _._)(_ + "Minutes", _);
      }
    },
  },
]);
