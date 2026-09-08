"use strict";
(self.webpackChunkstore = self.webpackChunkstore || []).push([
  [63089],
  {
    chunkid: (module, module_exports, __webpack_require__) => {
      __webpack_require__._(module_exports, {
        _: () => _,
        _: () => _,
        _: () => _,
        _: () => _,
      });
      const _ = [
          "p",
          "h1",
          "h2",
          "h3",
          "h4",
          "h5",
          "smalltext",
          "b",
          "u",
          "hr",
          "i",
          "emoticon",
          "dynamiclink",
          "img",
          "strike",
          "spoiler",
          "noparse",
          "url",
          "list",
          "olist",
          "*",
          "quote",
          "pullquote",
          "code",
          "table",
          "tr",
          "td",
          "th",
          "carousel",
          "previewyoutube",
          "looping_media",
          "roomeffect",
          "sticker",
          "price",
          "pricesavings",
          "trailer",
          "speaker",
          "doclink",
          "video",
          "vod",
          "youtubeorvideo",
          "giveawayeligible",
          "claimitem",
          "packagepurchaseable",
          "actiondialog",
          "uploadfilebutton",
          "docimg",
          "meetsteamsessiongroup",
          "meetsteamscheduleview",
          "center",
          "c",
          "expand",
          "remindme",
          "calendarevent",
          "color",
          "bgcolor",
          "userpolls",
        ],
        _ = [
          "h1",
          "h2",
          "h3",
          "b",
          "u",
          "i",
          "strike",
          "spoiler",
          "noparse",
          "url",
        ],
        _ = [
          "img",
          "carousel",
          "previewyoutube",
          "looping_media",
          "roomeffect",
          "video",
          "vod",
          "trailer",
          "youtubeorvideo",
          "docimg",
        ];
      _.filter((_) => !_.includes(_));
      let _;
      function _(_) {
        return _
          ? _.map((_) => ("*" == _ ? "\\*" : _)).join("|")
          : (_ || (_ = _(_)), _);
      }
      function _(_, _ = null, _ = " ") {
        const _ = new RegExp(
          "\\[(" + _(_) + ")\\b[^\\]]*\\].*?\\[/\\1\\]",
          "gi",
        );
        return _.replace(_, _);
      }
      function _(_, _ = null, _ = "") {
        const _ = "\\[\\/?(?:" + _(_) + "){1,}.*?]";
        return _.replace(new RegExp(_, "gi"), _);
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
      var _ = {};
      __webpack_require__._(_),
        __webpack_require__._(_, {
          _: () => _,
          _: () => _,
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
        _ = 2,
        _ = 3,
        _ = 0,
        _ = 3,
        _ = 4,
        _ = 6,
        _ = 7;
      class _ extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(_ = null) {
          super(),
            _.prototype.voteid || _._(_._()),
            _.Message.initialize(this, _, 0, -1, [5, 7], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            _.sm_m ||
              (_.sm_m = {
                proto: _,
                fields: {
                  voteid: {
                    _: 1,
                    _: _._.readInt32,
                    _: _._.writeInt32,
                  },
                  active: {
                    _: 2,
                    _: _._.readBool,
                    _: _._.writeBool,
                  },
                  start_time: {
                    _: 3,
                    _: _._.readUint32,
                    _: _._.writeUint32,
                  },
                  end_time: {
                    _: 4,
                    _: _._.readUint32,
                    _: _._.writeUint32,
                  },
                  app_discounts: {
                    _: 5,
                    _: _,
                    _: !0,
                    _: !0,
                  },
                  grouped_vote_options: {
                    _: 6,
                    _: _._.readUint32,
                    _: _._.writeUint32,
                  },
                  groups: {
                    _: 7,
                    _: _,
                    _: !0,
                    _: !0,
                  },
                  internal_name: {
                    _: 8,
                    _: _._.readString,
                    _: _._.writeString,
                  },
                  localization: {
                    _: 9,
                    _: _,
                  },
                  reveal_time: {
                    _: 10,
                    _: _._.readUint32,
                    _: _._.writeUint32,
                  },
                  release_date_min: {
                    _: 11,
                    _: _._.readUint32,
                    _: _._.writeUint32,
                  },
                  winner_appid: {
                    _: 12,
                    _: _._.readUint32,
                    _: _._.writeUint32,
                  },
                  flag: {
                    _: 13,
                    _: _._.readEnum,
                    _: _._.writeEnum,
                  },
                  release_date_max: {
                    _: 14,
                    _: _._.readUint32,
                    _: _._.writeUint32,
                  },
                  item_type: {
                    _: 15,
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
          return "CStore_VoteDefinition";
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
                  discount: {
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
          return "CStore_VoteDefinition_AppDefinition";
        }
      }
      class _ extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(_ = null) {
          super(),
            _.prototype.groupid || _._(_._()),
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
                  groupid: {
                    _: 1,
                    _: _._.readUint32,
                    _: _._.writeUint32,
                  },
                  group_name: {
                    _: 2,
                    _: _._.readString,
                    _: _._.writeString,
                  },
                  app_discounts: {
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
          return "CStore_VoteDefinition_GroupDefinition";
        }
      }
      class _ extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(_ = null) {
          super(),
            _.prototype.title || _._(_._()),
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
                  title: {
                    _: 1,
                    _: _._.readString,
                    _: _._.writeString,
                  },
                  title_linebreak: {
                    _: 2,
                    _: _._.readString,
                    _: _._.writeString,
                  },
                  title_award: {
                    _: 3,
                    _: _._.readString,
                    _: _._.writeString,
                  },
                  award_description: {
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
          return "CStore_VoteDefinition_Localization";
        }
      }
      class _ extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(_ = null) {
          super(),
            _.prototype.language || _._(_._()),
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
                  language: {
                    _: 1,
                    _: _._.readString,
                    _: _._.writeString,
                  },
                  sale_appid: {
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
          return "CStore_GetVoteDefinitions_Request";
        }
      }
      class _ extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(_ = null) {
          super(),
            _.prototype.votes || _._(_._()),
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
                  votes: {
                    _: 1,
                    _: _,
                    _: !0,
                    _: !0,
                  },
                  labor_of_love_winners: {
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
          return "CStore_GetVoteDefinitions_Response";
        }
      }
      class _ extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(_ = null) {
          super(),
            _.prototype.voteid || _._(_._()),
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
                  voteid: {
                    _: 1,
                    _: _._.readUint32,
                    _: _._.writeUint32,
                  },
                  appid: {
                    _: 2,
                    _: _._.readUint32,
                    _: _._.writeUint32,
                  },
                  communityitemid: {
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
          return "SteamAwardsUserVote";
        }
      }
      class _ extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(_ = null) {
          super(),
            _.prototype.sale_appid || _._(_._()),
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
                  sale_appid: {
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
          return "CStore_GetUserVotes_Request";
        }
      }
      class _ extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(_ = null) {
          super(),
            _.prototype.user_votes || _._(_._()),
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
                  user_votes: {
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
          return "CStore_GetUserVotes_Response";
        }
      }
      class _ extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(_ = null) {
          super(),
            _.prototype.voteid || _._(_._()),
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
                  voteid: {
                    _: 1,
                    _: _._.readInt32,
                    _: _._.writeInt32,
                  },
                  appid: {
                    _: 2,
                    _: _._.readUint32,
                    _: _._.writeUint32,
                  },
                  sale_appid: {
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
          return "CStore_SetVote_Request";
        }
      }
      class _ extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(_ = null) {
          super(),
            _.prototype.user_votes || _._(_._()),
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
                  user_votes: {
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
          return "CStore_SetVote_Response";
        }
      }
      class _ extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(_ = null) {
          super(),
            _.prototype.category_id || _._(_._()),
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
                  category_id: {
                    _: 1,
                    _: _._.readUint32,
                    _: _._.writeUint32,
                  },
                  appid: {
                    _: 2,
                    _: _._.readUint32,
                    _: _._.writeUint32,
                  },
                  last_updated: {
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
          return "CSteamAwardsNomination";
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
          return "CSteamAwards_GetUserNominations_Request";
        }
      }
      class _ extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(_ = null) {
          super(),
            _.prototype.nominations || _._(_._()),
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
                  nominations: {
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
          return "CSteamAwards_GetUserNominations_Response";
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
                  code: {
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
          return "CSteamAwards_GetOtherUserNominations_Request";
        }
      }
      class _ extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(_ = null) {
          super(),
            _.prototype.category_id || _._(_._()),
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
                  category_id: {
                    _: 1,
                    _: _._.readUint32,
                    _: _._.writeUint32,
                  },
                  nominated_id: {
                    _: 2,
                    _: _._.readUint32,
                    _: _._.writeUint32,
                  },
                  source: {
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
          return "CSteamAwards_Nominate_Request";
        }
      }
      class _ extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(_ = null) {
          super(),
            _.prototype.nominations || _._(_._()),
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
                  nominations: {
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
          return "CSteamAwards_Nominate_Response";
        }
      }
      class _ extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(_ = null) {
          super(),
            _.prototype.category_id || _._(_._()),
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
                  category_id: {
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
          return "CSteamAwards_GetNominationRecommendations_Request";
        }
      }
      class _ extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(_ = null) {
          super(),
            _.prototype.played_app || _._(_._()),
            _.Message.initialize(this, _, 0, -1, [1, 2, 3], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            _.sm_m ||
              (_.sm_m = {
                proto: _,
                fields: {
                  played_app: {
                    _: 1,
                    _: _,
                    _: !0,
                    _: !0,
                  },
                  suggested_events: {
                    _: 2,
                    _: _,
                    _: !0,
                    _: !0,
                  },
                  suggested_apps: {
                    _: 3,
                    _: _,
                    _: !0,
                    _: !0,
                  },
                  debug_query: {
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
          return "CSteamAwards_GetNominationRecommendations_Response";
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
                  playtime: {
                    _: 2,
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
          return "CSteamAwards_GetNominationRecommendations_Response_PlayedApps";
        }
      }
      class _ extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(_ = null) {
          super(),
            _.prototype.clanid || _._(_._()),
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
                  clanid: {
                    _: 1,
                    _: _._.readUint32,
                    _: _._.writeUint32,
                  },
                  event_gid: {
                    _: 2,
                    _: _._.readUint64String,
                    _: _._.writeUint64String,
                  },
                  appid: {
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
          return "CSteamAwards_GetNominationRecommendations_Response_SuggestedEvent";
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
          return "CSteamAwards_GetNominationRecommendations_Response_SuggestedApp";
        }
      }
      class _ extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(_ = null) {
          super(),
            _.prototype.generate_new || _._(_._()),
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
                  generate_new: {
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
          return "CSteamAwards_GetNominationShareLink_Request";
        }
      }
      class _ extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(_ = null) {
          super(),
            _.prototype.code || _._(_._()),
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
                  code: {
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
          return "CSteamAwards_GetNominationShareLink_Response";
        }
      }
      var _, _;
      !(function (_) {
        (_.GetVoteDefinitions = function (_, _, _) {
          return _.SendMsg(
            "StoreSales.GetVoteDefinitions#1",
            (0, _._)(_, _, _),
            _,
            {
              bConstMethod: !0,
              ePrivilege: 2,
              eWebAPIKeyRequirement: 1,
            },
          );
        }),
          (_.SetVote = function (_, _, _) {
            return _.SendMsg("StoreSales.SetVote#1", (0, _._)(_, _, _), _, {
              ePrivilege: 1,
            });
          }),
          (_.GetUserVotes = function (_, _, _) {
            return _.SendMsg(
              "StoreSales.GetUserVotes#1",
              (0, _._)(_, _, _),
              _,
              {
                bConstMethod: !0,
                ePrivilege: 1,
              },
            );
          });
      })(_ || (_ = {})),
        (function (_) {
          (_.GetUserNominations = function (_, _, _) {
            return _.SendMsg(
              "SteamAwards.GetUserNominations#1",
              (0, _._)(_, _, _),
              _,
              {
                bConstMethod: !0,
                ePrivilege: 1,
              },
            );
          }),
            (_.GetOtherUserNominations = function (_, _, _) {
              return _.SendMsg(
                "SteamAwards.GetOtherUserNominations#1",
                (0, _._)(_, _, _),
                _,
                {
                  bConstMethod: !0,
                  ePrivilege: 2,
                },
              );
            }),
            (_.Nominate = function (_, _, _) {
              return _.SendMsg("SteamAwards.Nominate#1", (0, _._)(_, _, _), _, {
                bConstMethod: !0,
                ePrivilege: 1,
              });
            }),
            (_.GetNominationRecommendations = function (_, _, _) {
              return _.SendMsg(
                "SteamAwards.GetNominationRecommendations#1",
                (0, _._)(_, _, _),
                _,
                {
                  bConstMethod: !0,
                  ePrivilege: 1,
                },
              );
            }),
            (_.GetNominationShareLink = function (_, _, _) {
              return _.SendMsg(
                "SteamAwards.GetNominationShareLink#1",
                (0, _._)(_, _, _),
                _,
                {
                  ePrivilege: 1,
                },
              );
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
      var _ = __webpack_require__("chunkid");
      const _ = _._.box(void 0);
      function _() {
        return _.get();
      }
      function _(_) {
        (0, _._)(() => _.set(_));
      }
      function _() {
        const _ = _.get();
        return _ || Math.floor(Date.now() / 1e3);
      }
      function _() {
        const _ = _.get();
        return _ ? new Date(1e3 * _) : new Date();
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
        _ = __webpack_require__("chunkid");
      const _ = {
        bBroadcastEnabled: !1,
        broadcastChatSetting: "hide",
        default_broadcast_title: "#Broadcast_default_title_dev",
        localized_broadcast_title: new Array(_.bP9),
        localized_broadcast_left_image: new Array(_.bP9),
        localized_broadcast_right_image: new Array(_.bP9),
        broadcast_whitelist: [],
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
        _ = __webpack_require__("chunkid");
      (0, _._)(
        [_._],
        class {
          m_eventModel;
          m_entry;
          constructor(_, _) {
            (this.m_eventModel = _), (this.m_entry = _);
          }
          GetEventStartTime() {
            return this.m_entry.rtime_start_specific
              ? this.m_entry.rtime_start_specific
              : (this.m_eventModel.startTime ?? 0) +
                  (this.m_entry.delta_from_event_start_seconds ?? 0);
          }
        }.prototype,
        "GetEventStartTime",
        null,
      );
      const _ = 99999;
      var _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid");
      const _ = [
        _._,
        _.zeJ,
        _.Fa4,
        _.Aav,
        _.SRb,
        _._,
        _._,
        _.hGl,
        _.WNR,
        _.pIh,
        _.izQ,
        _.uYK,
        _.f4X,
        _.zcX,
        _.yhO,
      ];
      function _(_) {
        return (
          _.some((_) => _ == _.GetEventType()) &&
          !_.BHasTag("steam_award_nomination_request") &&
          !_.BHasTag("curator")
        );
      }
      const _ = [_.HRy, _.LOv, _.HFK];
      function _(_) {
        return !_.some((_) => _ == _.GetEventType()) && !_.BHasTag("curator");
      }
      _.Fwr, _.HFK;
      const _ = [
        _.L0X,
        _.KDJ,
        _.HRy,
        _.C$4,
        _._,
        _._,
        _.hGl,
        _.pIh,
        _.izQ,
        _.I5b,
        _.LOv,
        _.WNR,
      ];
      new Set(_);
      const _ = 593110,
        _ = [_, 766, 221410],
        _ = [_.Fwr, _.HFK];
      function _(_) {
        return !_.some((_) => _ == _.GetEventType()) && !_.BHasTag("curator");
      }
      function _(_, _ = (0, _._)()) {
        const _ = 60 * _._.PerDay;
        return (
          _.BIsVisibleEvent(_) &&
          _.BIsOGGEvent() &&
          (_.rtime32_last_modified ?? 0) > _ - _ &&
          !_(_)
        );
      }
      function _(_) {
        return _.BHasTag("mod_reviewed") && !_.BHasTag("mod_require_rereview");
      }
      var _;
      function _(_) {
        switch (_) {
          case "links":
          case "itemdef":
            return {
              nMaxItemsPerRow: 5,
              nItemMinimumWidth: 200,
            };
          case "contenthubspecials":
            return {
              nMaxItemsPerRow: 3,
              nItemMinimumWidth: 306,
            };
          default:
            return {
              nMaxItemsPerRow: 4,
              nItemMinimumWidth: 280,
            };
        }
      }
      !(function (_) {
        (_[(_.k_EEventStateUnpublished = 0)] = "k_EEventStateUnpublished"),
          (_[(_.k_EEventStateStaged = 1)] = "k_EEventStateStaged"),
          (_[(_.k_EEventStateVisible = 2)] = "k_EEventStateVisible"),
          (_[(_.k_EEventStateUnlisted = 3)] = "k_EEventStateUnlisted");
      })(_ || (_ = {}));
      const _ = "bordered";
      var _, _, _, _, _, _;
      function _(_) {
        return _ && !!_.show_as_carousel && !_.enable_faceted_browsing;
      }
      function _(_) {
        return _.carousel_rows || 1;
      }
      function _(_) {
        return _.cap_item_count || 0;
      }
      function _(_) {
        return _.cap_section_row_count && _.cap_section_row_count > 0
          ? _.cap_section_row_count
          : "trailercarousel" == _.section_type
            ? 1
            : _.cap_section_content
              ? 4
              : 0;
      }
      function _(_) {
        return Boolean(_?.store_filter)
          ? JSON.stringify(_.store_filter)
          : void 0;
      }
      function _(_) {
        switch (_) {
          case "items":
          case "trailercarousel":
          case "crosspromotesalepage":
          case "creator_list":
          case "calendar":
            return !0;
        }
        return !1;
      }
      function _(_) {
        switch (_) {
          case "items":
          case "crosspromotesalepage":
          case "creator_list":
            return !0;
        }
        return !1;
      }
      function _(_, _ = !1) {
        return (
          !(
            !_ ||
            !(function (_) {
              switch (_) {
                case "items":
                case "trailercarousel":
                case "crosspromotesalepage":
                case "creator_list":
                case "calendar":
                case "events":
                case "sale_events":
                case "contenthubspecials":
                  return !0;
              }
              return !1;
            })(_.section_type)
          ) &&
          (_
            ? !!_.sale_tag_filter?.clauses?.length || !!_.smart_section
            : !!_.smart_section && null != _.smart_section_type)
        );
      }
      function _(_) {
        return _(_) ? _?.smart_section_type : void 0;
      }
      function _(_) {
        return (
          (_.jsondata.sale_ml_recommender_delay_hours &&
            (_.startTime ?? 0) +
              _.jsondata.sale_ml_recommender_delay_hours * _._.PerHour -
              new Date().getTime() / 1e3) ??
          0
        );
      }
      function _(_, _, _) {
        return (
          !!_.BIsNextFest() &&
          !!_(_.section_type) &&
          (_ == _._.Random || _(_) > 0)
        );
      }
      function _(_, _, _) {
        return !!_.use_random_order || !!_(_, _, _);
      }
      !(function (_) {
        (_[(_.k_EStoreFilterClauseTypeOr = 0)] = "k_EStoreFilterClauseTypeOr"),
          (_[(_.k_EStoreFilterClauseTypeAnd = 1)] =
            "k_EStoreFilterClauseTypeAnd"),
          (_[(_.k_EStoreFilterClauseTypeStoreTag = 2)] =
            "k_EStoreFilterClauseTypeStoreTag"),
          (_[(_.k_EStoreFilterClauseTypeFeatureTag = 3)] =
            "k_EStoreFilterClauseTypeFeatureTag"),
          (_[(_.k_EStoreFilterClauseTypeLanguage = 4)] =
            "k_EStoreFilterClauseTypeLanguage"),
          (_[(_.k_EStoreFilterClauseTypeContentDescriptor = 5)] =
            "k_EStoreFilterClauseTypeContentDescriptor"),
          (_[(_.k_EStoreFilterClauseTypePrice = 6)] =
            "k_EStoreFilterClauseTypePrice"),
          (_[(_.k_EStoreFilterClauseTypeAppType = 7)] =
            "k_EStoreFilterClauseTypeAppType");
      })(_ || (_ = {})),
        (function (_) {
          (_[(_.k_ESaleTagFilter = 0)] = "k_ESaleTagFilter"),
            (_[(_.k_ELanguage = 1)] = "k_ELanguage"),
            (_[(_.k_EContentDescriptor = 2)] = "k_EContentDescriptor"),
            (_[(_.k_EUserPreference = 3)] = "k_EUserPreference"),
            (_[(_.k_EPrice = 4)] = "k_EPrice"),
            (_[(_.k_EAppType = 5)] = "k_EAppType");
        })(_ || (_ = {})),
        (function (_) {
          (_[(_.k_EHideOwnedItems = 0)] = "k_EHideOwnedItems"),
            (_[(_.k_EHideWishlistedItems = 1)] = "k_EHideWishlistedItems"),
            (_[(_.k_EHideIgnoredItems = 2)] = "k_EHideIgnoredItems");
        })(_ || (_ = {})),
        (function (_) {
          (_[(_.k_ESortFacetsByName = 0)] = "k_ESortFacetsByName"),
            (_[(_.k_ESortFacetsByMatchCount = 1)] =
              "k_ESortFacetsByMatchCount"),
            (_[(_.k_ESortFacetsManually = 2)] = "k_ESortFacetsManually");
        })(_ || (_ = {})),
        (function (_) {
          (_.Steam = "Steam"),
            (_.Facebook = "Facebook"),
            (_.Twitter = "Twitter"),
            (_.Reddit = "Reddit");
        })(_ || (_ = {})),
        (function (_) {
          (_.Summary = "summary"),
            (_.SummaryLargeImage = "summary_large_image");
        })(_ || (_ = {}));
      const _ = {
        capsules: [],
        events: [],
        links: [],
        localized_label: new Array(_.bP9),
        localized_label_image: new Array(_.bP9),
        default_label: "#Sale_default_label",
        section_type: "unselected_empty",
      };
      var _;
      function _(_) {
        return {
          arrowFill: _?.sale_carousel_arrow_color,
          arrowStyle: _?.sale_carousel_arrow_style,
          breadcrumbActiveColor: _?.sale_carousel_active_breadcrumb_color,
          breadcrumbColor: _?.sale_carousel_breadcrumb_color,
          breadcrumbStyle: _?.sale_carousel_breadcrumb_style,
        };
      }
      !(function (_) {
        (_[(_.k_ETaggedItems = 0)] = "k_ETaggedItems"),
          (_[(_.k_EContentHub = 1)] = "k_EContentHub");
      })(_ || (_ = {}));
      const _ = {
          localized_subtitle: new Array(_.bP9),
          localized_summary: new Array(_.bP9),
          localized_title_image: new Array(_.bP9),
          localized_capsule_image: new Array(_.bP9),
          bSaleEnabled: !1,
          sale_show_creator: !1,
          sale_sections: [],
          sale_browsemore_text: "",
          sale_browsemore_url: "",
          sale_browsemore_color: "",
          sale_browsemore_bgcolor: "",
          localized_sale_header: new Array(_.bP9),
          localized_sale_overlay: new Array(_.bP9),
          localized_sale_product_banner: new Array(_.bP9),
          localized_sale_product_mobile_banner: new Array(_.bP9),
          localized_sale_logo: new Array(_.bP9),
          sale_font: "",
          sale_background_color: "",
          sale_header_offset: 530,
          referenced_appids: [],
          ..._,
          bScheduleEnabled: !1,
          scheduleEntries: [],
        },
        _ = "old_announce_",
        _ = [
          "workshop",
          "patchnotes",
          "contenthub",
          "skip_megaphone",
          "curator",
          "curator_group_members",
          "curator_public",
          "audience_followers",
          "enable_steam_china",
          "disable_steam_global",
          "adult_only_content",
          "stablechannel",
          "betachannel",
          "previewchannel",
        ],
        _ = [
          "steam_blog_featured",
          "workshop",
          "steam_blog",
          "blog",
          "audience_followers",
          "steamvr",
          "patchnotes",
          "steam_library_beta",
          "hide_library_overview",
          "mod_hide_library_overview",
          "hide_library_detail",
          "mod_hide_library_detail",
          "hide_store",
          "mod_hide_store",
          "halloween2019candidate",
          "halloween2019",
          "halloween2019reviewed",
          "horror",
          "cute",
          "halloween",
          "mod_reviewed",
          "steam_award_nomination_request",
          "steam_award_vote_request",
          "steam_game_festival_artist_statement",
          "steam_game_festival_office_hour",
          "steam_game_festival_broadcast",
          "curator",
          "curator_group_members",
          "curator_public",
          "mod_require_rereview",
          "auto_rssfeed",
          "auto_migrated",
          "enable_steam_china",
          "disable_steam_global",
          "skip_megaphone",
          "seasonal_sale_featuring",
          "show_library_demo_detail",
          "clear_library_demo_detail",
          "repost_source_possible",
          "autocreate_promotools",
          "vo_marketing_message",
        ],
        _ = [
          "patchnotes",
          "steam_award_nomination_request",
          "steam_award_vote_request",
          "mod_hide_library_overview",
          "steam_game_festival_artist_statement",
          "steam_game_festival_office_hour",
          "steam_game_festival_broadcast",
          "halloween",
          "curator",
          "curator_group_members",
          "curator_public",
          "audience_followers",
        ],
        _ = [_.HRy, _.LOv, _.HFK],
        _ = [
          _.L0X,
          _.KDJ,
          _.HRy,
          _.C$4,
          _._,
          _._,
          _.hGl,
          _.pIh,
          _.izQ,
          _.I5b,
          _.LOv,
          _.WNR,
        ];
      class _ {
        constructor() {
          (0, _._)(this);
        }
        GID = void 0;
        AnnouncementGID = void 0;
        clanSteamID = new _._();
        forumTopicGID = void 0;
        type = _.DRF;
        appid = 0;
        name = new Map();
        description = new Map();
        timestamp_loc_updated = new Map();
        createTime = void 0;
        startTime = void 0;
        endTime = void 0;
        visibilityStartTime = void 0;
        visibilityEndTime = void 0;
        m_nBuildID = void 0;
        m_strBuildBranch = void 0;
        postTime = void 0;
        visibility_state = _.k_EEventStateUnpublished;
        broadcaster = void 0;
        jsondata = _;
        nCommentCount = 0;
        nVotesUp = 0;
        nVotesDown = 0;
        comment_type;
        gidfeature;
        gidfeature2;
        featured_app_tagid;
        bOldAnnouncement = !1;
        announcementClanSteamID = void 0;
        loadedAllLanguages = !1;
        bLoaded = !1;
        deleteInProgress = !1;
        vecTags = new Array();
        creator_steamid;
        last_update_steamid = void 0;
        rtime32_last_modified = void 0;
        rtime32_last_solr_search_col_updated = void 0;
        rtime32_last_local_modification = void 0;
        rtime32_moderator_reviewed = void 0;
        video_preview_type = void 0;
        video_preview_id = void 0;
        has_live_stream;
        live_stream_viewer_count;
        m_overrideCurrentDay = void 0;
        fnGetLocalizedGroupImages;
        BIsPartnerEvent() {
          return !this.bOldAnnouncement && Boolean(this.GID);
        }
        static FromJSON(_) {
          let _ = new _(),
            _ = JSON.parse(_);
          return (
            Object.assign(_, _),
            (_.name = new Map(_.name)),
            (_.description = new Map(_.description)),
            (_.vecTags = [...(_.vecTags ?? _.tags ?? [])]),
            (_.clanSteamID = new _._(_.clanSteamID)),
            (0, _._)(
              _.clanSteamID && _.clanSteamID.BIsValid(),
              "Invalid Clan SteamID: " + _.clanSteamID.ConvertTo64BitString(),
            ),
            _.broadcaster &&
              ((_.broadcaster = new _._(_.broadcaster)),
              (0, _._)(
                _.broadcaster && _.broadcaster.BIsValid(),
                "Invalid Broadcast SteamID: " +
                  _.broadcaster.ConvertTo64BitString(),
              )),
            _
          );
        }
        static FromCClanEventData(_, _) {
          let _ = new _();
          return (
            (_.GID = _.gid),
            (_.clanSteamID = new _._(_.clan_steamid)),
            _.name.set(_, _.event_name ?? ""),
            (_.type = _.event_type),
            (_.appid = _.appid ?? 0),
            (_.startTime = _.rtime32_start_time),
            (_.endTime = _.rtime32_end_time),
            (_.nCommentCount = _.comment_count ?? 0),
            (_.creator_steamid = _.creator_steamid),
            (_.last_update_steamid = _.last_update_steamid),
            (_.jsondata = JSON.parse(_.jsondata ?? "{}")),
            (_.rtime32_last_local_modification = _.rtime32_last_modified),
            _.published
              ? _.hidden
                ? (_.visibility_state = _.unlisted
                    ? _.k_EEventStateUnlisted
                    : _.k_EEventStateStaged)
                : (_.visibility_state = _.k_EEventStateVisible)
              : (_.visibility_state = _.k_EEventStateUnpublished),
            (_.createTime = _.rtime_created),
            (_.m_nBuildID = _.build_id),
            (_.m_strBuildBranch = _.build_branch),
            (_.visibilityStartTime = _.rtime32_visibility_start),
            (_.visibilityEndTime = _.rtime32_visibility_end),
            (_.rtime32_moderator_reviewed = _.rtime_mod_reviewed),
            (_.featured_app_tagid = _.featured_app_tagid),
            _.broadcaster_accountid &&
              (_.broadcaster = _._.InitFromAccountID(_.broadcaster_accountid)),
            (_.AnnouncementGID = _.announcement_body?.gid ?? "0"),
            (_.postTime = _.announcement_body?.posttime),
            (_.forumTopicGID = _.forum_topic_id),
            _.name.set(_, _.announcement_body?.headline ?? ""),
            _.description.set(_, _.announcement_body?.body ?? ""),
            (_.nCommentCount = _.comment_count ?? 0),
            (_.vecTags = [...(_.announcement_body?.tags ?? [])]),
            (_.forumTopicGID = _.announcement_body?.forum_topic_id),
            (_.nVotesUp = _.announcement_body?.voteupcount ?? 0),
            (_.nVotesDown = _.announcement_body?.votedowncount ?? 0),
            _
          );
        }
        toJSON(_) {
          let _ = new Object();
          return (
            Object.assign(_, this),
            (_.name = Array.from(this.name)),
            (_.description = Array.from(this.description)),
            (_.vecTags = Array.from(this.vecTags)),
            (_.tags = _.vecTags),
            (_.clanSteamID = this.clanSteamID.ConvertTo64BitString()),
            this.broadcaster &&
              (_.broadcaster = this.broadcaster.ConvertTo64BitString()),
            _
          );
        }
        clone(_ = !1) {
          let _ = new _();
          if (
            ((_.GID = this.GID),
            (_.AnnouncementGID = this.AnnouncementGID),
            (_.clanSteamID = this.clanSteamID),
            (_.bOldAnnouncement = this.bOldAnnouncement),
            (_.nCommentCount = this.nCommentCount),
            (_.nVotesUp = this.nVotesUp),
            (_.nVotesDown = this.nVotesDown),
            (_.forumTopicGID = this.forumTopicGID),
            (_.comment_type = this.comment_type),
            (_.gidfeature = this.gidfeature),
            (_.gidfeature2 = this.gidfeature2),
            (_.featured_app_tagid = this.featured_app_tagid),
            (_.creator_steamid = this.creator_steamid),
            (_.last_update_steamid = this.last_update_steamid),
            (_.rtime32_last_modified = this.rtime32_last_modified),
            (_.rtime32_last_solr_search_col_updated =
              this.rtime32_last_solr_search_col_updated),
            (_.rtime32_moderator_reviewed = this.rtime32_moderator_reviewed),
            (_.type = this.type),
            (_.appid = this.appid),
            (_.name = new Map()),
            this.name.forEach((_, _) => {
              _.name.set(_, _);
            }),
            (_.description = new Map()),
            this.description.forEach((_, _) => {
              _.description.set(_, _);
            }),
            (_.timestamp_loc_updated = new Map()),
            this.timestamp_loc_updated.forEach((_, _) => {
              _.timestamp_loc_updated.set(_, _);
            }),
            (_.createTime = this.createTime ?? 0),
            (_.startTime = this.startTime),
            (_.endTime = this.endTime),
            (_.visibilityStartTime = this.visibilityStartTime),
            (_.visibilityEndTime = this.visibilityEndTime),
            (_.postTime = this.postTime),
            (_.visibility_state = this.visibility_state),
            (_.loadedAllLanguages = this.loadedAllLanguages),
            (_.bLoaded = this.bLoaded),
            (_.broadcaster = this.broadcaster
              ? new _._(this.broadcaster.ConvertTo64BitString())
              : void 0),
            (_.jsondata = JSON.parse(JSON.stringify(this.jsondata))),
            (_.vecTags = new Array()),
            _
              ? ((_.m_nBuildID = this.m_nBuildID),
                (_.m_strBuildBranch = this.m_strBuildBranch),
                this.vecTags.forEach((_) => _.vecTags.push(_)))
              : this.vecTags.forEach((_) => {
                  _.includes(_) && _.vecTags.push(_);
                }),
            _.jsondata.email_setting)
          ) {
            let _ = 100;
            for (let _ of _.jsondata.email_setting.sections)
              _.unique_id || ((_.unique_id = `email_section_${_}`), _++);
          }
          return _;
        }
        GetLastReferencedSaleDayFromCapsules(_, _) {
          let _ = _;
          return (
            _?.forEach((_) => {
              void 0 !== _.visibility_index &&
                (_ =
                  void 0 === _
                    ? _.visibility_index
                    : Math.max(_, _.visibility_index));
            }),
            _
          );
        }
        GetLastReferencedSaleDay() {
          let _;
          for (const _ of this.GetSaleSections())
            if ("tabs" === _.section_type) {
              if ((_.tabs?.length ?? 0) > 0)
                for (const _ of _.tabs ?? [])
                  _ = this.GetLastReferencedSaleDayFromCapsules(_.capsules, _);
            } else _ = this.GetLastReferencedSaleDayFromCapsules(_.capsules, _);
          return (
            (this.jsondata.sale_num_headers ?? 0) > 1 &&
              (null == _ || _ < (this.jsondata.sale_num_headers ?? 0)) &&
              (_ = this.jsondata.sale_num_headers),
            _
          );
        }
        GetDayIndexFromEventStart(_ = (0, _._)()) {
          let _ = 0;
          void 0 !== this.startTime &&
            _ >= this.startTime &&
            (_ = Math.floor((_ - this.startTime) / 86400)),
            void 0 !== this.m_overrideCurrentDay &&
              this.m_overrideCurrentDay >= 0 &&
              (_ = this.m_overrideCurrentDay);
          const _ = this.GetLastReferencedSaleDay() || 0;
          return Math.min(_, _);
        }
        GetNameWithFallback(_) {
          const _ = _._.GetELanguageFallback(_);
          return this.name.get(_) || this.name.get(_);
        }
        BInRealmGlobal() {
          return !this.BHasTag("disable_steam_global");
        }
        BInRealmChina() {
          return this.BHasTag("enable_steam_china");
        }
        BIsLanguageValidForRealms(_) {
          return (
            !(
              !this.BInRealmGlobal() ||
              !_._.IsELanguageValidInRealm(_, _._.k_ESteamRealmGlobal)
            ) ||
            !(
              !this.BInRealmChina() ||
              !_._.IsELanguageValidInRealm(_, _._.k_ESteamRealmChina)
            )
          );
        }
        GetImgArray(_) {
          let _ = [];
          if (
            (("background" !== _ && "localized_title_image" != _) ||
              (_ = this.jsondata.localized_title_image),
            "capsule" === _)
          )
            _ = this.jsondata.localized_capsule_image;
          else if ("spotlight" === _)
            _ = this.jsondata.localized_spotlight_image;
          else if ("email_full" === _ || "email_centered" === _)
            _ = this.jsondata.email_setting
              ? this.jsondata.email_setting.sections[0].localized_image
              : [];
          else if ("broadcast_left" === _)
            _ = this.jsondata.localized_broadcast_left_image;
          else if ("broadcast_right" === _)
            _ = this.jsondata.localized_broadcast_right_image;
          else if ("sale_header" === _)
            if ((this.jsondata.sale_num_headers ?? 0) > 1) {
              const _ = Math.min(
                (this.jsondata.sale_num_headers ?? 0) - 1,
                this.GetDayIndexFromEventStart(),
              );
              _ = this.jsondata.localized_per_day_sales_header?.[_];
            } else _ = this.jsondata.localized_sale_header;
          else
            "sale_logo" === _
              ? (_ = this.jsondata.localized_sale_logo)
              : "sale_overlay" === _
                ? (_ = this.jsondata.localized_sale_overlay)
                : _._.includes(_)
                  ? (_ = this.fnGetLocalizedGroupImages?.())
                  : "product_banner" === _
                    ? (_ = this.jsondata.localized_sale_product_banner)
                    : "product_mobile_banner" === _
                      ? (_ = this.jsondata.localized_sale_product_mobile_banner)
                      : "bestofyear_banner" === _
                        ? (_ = this.jsondata.localized_bestofyear_banner)
                        : "bestofyear_banner_mobile" === _
                          ? (_ =
                              this.jsondata.localized_bestofyear_banner_mobile)
                          : "localized_store_app_spotlight" === _
                            ? (_ = this.jsondata.localized_store_app_spotlight)
                            : "localized_store_app_spotlight_mobile" === _ &&
                              (_ =
                                this.jsondata
                                  .localized_store_app_spotlight_mobile);
          return _;
        }
        GetImageURL(_, _ = _.Bhc, _ = _._.full) {
          const _ = this.GetImgArray(_),
            _ = _ && _.length > _ && null != _[_];
          return _ && _[_]?.startsWith("http")
            ? _[_]
            : _
              ? _._.GenerateURLFromHashAndExt(this.clanSteamID, _[_] ?? "", _)
              : void 0;
        }
        GetImageHash(_, _ = _.Bhc) {
          let _ = this.GetImgArray(_);
          return _ && _.length > _ && null != _[_]
            ? _[_].substr(0, _[_].length - 4)
            : null;
        }
        GetImageHashAndExt(_, _ = _.Bhc) {
          let _ = this.GetImgArray(_);
          return _ && _.length > _ && null != _[_] ? _[_] : null;
        }
        BHasSomeImage(_) {
          let _ = this.GetImgArray(_);
          return !!_ && _.some((_) => null != _ && _.length > 0);
        }
        BHasImage(_, _) {
          let _ = this.GetImgArray(_);
          return !!_ && _.length > _ && null != _[_];
        }
        BHasAnnouncementGID() {
          return (
            null !== this.AnnouncementGID &&
            void 0 !== this.AnnouncementGID &&
            this.AnnouncementGID.length > 1
          );
        }
        GetAnnouncementGID() {
          return this.AnnouncementGID;
        }
        BHasForumTopicGID() {
          return (
            null !== this.forumTopicGID &&
            void 0 !== this.forumTopicGID &&
            this.forumTopicGID.length > 1
          );
        }
        GetForumTopicURL(_) {
          return this.BHasForumTopicGID()
            ? this.appid
              ? _._.COMMUNITY_BASE_URL +
                "app/" +
                this.appid +
                "/eventcomments/" +
                this.forumTopicGID
              : _
                ? _._.COMMUNITY_BASE_URL +
                  "groups/" +
                  _ +
                  "/eventcomments/" +
                  this.forumTopicGID
                : _._.COMMUNITY_BASE_URL +
                  "gid/" +
                  this.clanSteamID.ConvertTo64BitString() +
                  "/eventcomments/" +
                  this.forumTopicGID
            : "";
        }
        BIsEventInFuture(_ = (0, _._)()) {
          return _ < (this.startTime ?? 0);
        }
        BHasEventEnded(_ = (0, _._)()) {
          return (this.endTime ?? 0) < _;
        }
        UpdateVoteCount(_, _) {
          "up" == _
            ? (this.nVotesUp = (0, _._)(
                this.nVotesUp + _,
                0,
                Number.MAX_SAFE_INTEGER,
              ))
            : "down" == _ &&
              (this.nVotesDown = (0, _._)(
                this.nVotesDown + _,
                0,
                Number.MAX_SAFE_INTEGER,
              ));
        }
        GetImageFromBeginningOfDescription(_, _) {
          let _ = this.GetDescriptionWithFallback(_);
          if (_) {
            let _ = __webpack_require__.indexOf("[img]");
            if (-1 !== _ && _ < _) {
              _ += 5;
              let _ = __webpack_require__.indexOf("[/img]", _);
              if (-1 != _) {
                let _ = __webpack_require__.substring(_, _).trim();
                if (0 != _.length) return _._.ReplacementTokenToClanImageURL(_);
              }
            }
          }
          return null;
        }
        GetAppIDOrReferenceAppID() {
          return this.appid
            ? this.appid
            : this.jsondata?.referenced_appids?.[0];
        }
        BImageNeedScreenshotFallback(_, _) {
          let _ = this.GetImageURL(_, _);
          if (!_ || 0 == _.length) {
            const _ = _._.GetELanguageFallback(_);
            _ != _ && (_ = this.GetImageURL(_, _));
          }
          return !_ || 0 == _.length;
        }
        GetDescriptionWithFallback(_) {
          const _ = _._.GetELanguageFallback(_);
          return this.description.get(_) || this.description.get(_);
        }
        BIsImageSafeForAllAges(_, _, _ = {}) {
          const _ = _._.GetELanguageFallback(_);
          return (
            null != this.GetImageURL(_, _) ||
            (_ != _ && null != this.GetImageURL(_, _)) ||
            (this.appid && _.bAppHasAgeSafeScreenshots) ||
            (!this.appid &&
              _.clanInfo &&
              ((_.clanInfo.is_creator_home && !_.clanInfo.is_ogg) ||
                _.clanInfo.is_curator))
          );
        }
        BIsVisibleEvent(_ = (0, _._)()) {
          let _ = Math.floor(_);
          return (
            this.visibility_state == _.k_EEventStateUnlisted ||
            (this.visibility_state == _.k_EEventStateVisible &&
              _ > (this.visibilityStartTime ?? 0) &&
              ((this.visibilityEndTime ?? 0) < 10 ||
                _ < (this.visibilityEndTime ?? 0)))
          );
        }
        BIsStagedEvent() {
          return this.visibility_state == _.k_EEventStateStaged;
        }
        BIsUnlistedEvent() {
          return this.visibility_state == _.k_EEventStateUnlisted;
        }
        GetStartTimeAndDateUnixSeconds() {
          return this.startTime ?? 0;
        }
        GetEndTimeAndDateUnixSeconds() {
          return this.endTime ?? 0;
        }
        GetPostTimeAndDateUnixSeconds() {
          return this.postTime ?? 0;
        }
        GetVisibilityStartTimeAndDateUnixSeconds() {
          return this.visibilityStartTime ?? 0;
        }
        BIsEventActionEnabled(_ = (0, _._)()) {
          return (
            !!this.jsondata.action_end_time &&
            (this.jsondata.action_end_time > _ ||
              (1575396e3 == this.jsondata.action_end_time && 1606845600 > _))
          );
        }
        BHasSubTitle(_) {
          if (
            !this.jsondata ||
            !this.jsondata.localized_subtitle ||
            _ >= this.jsondata.localized_subtitle.length
          )
            return !1;
          let _ = this.jsondata.localized_subtitle[_];
          return null != _ && "" != _;
        }
        GetSubTitle(_) {
          if (
            !this.jsondata ||
            !this.jsondata.localized_subtitle ||
            _ >= this.jsondata.localized_subtitle.length
          )
            return "";
          let _ = this.jsondata.localized_subtitle[_];
          return _ || "";
        }
        GetSubTitleWithLanguageFallback(_) {
          return this.jsondata
            ? _._.GetWithFallback(this.jsondata.localized_subtitle, _)
            : "";
        }
        GetSubTitleWithSummaryFallback(_) {
          return (
            _._.GetWithFallback(this.jsondata?.localized_subtitle, _) ||
            _.GenerateSummaryFromText(this.GetDescriptionWithFallback(_))
          );
        }
        GetSummaryWithFallback(_, _) {
          return (
            _._.GetWithFallback(this.jsondata?.localized_summary, _) ||
            _.GenerateSummaryFromText(this.GetDescriptionWithFallback(_), _)
          );
        }
        GetSummary(_) {
          return _._.Get(this.jsondata?.localized_summary ?? [], _);
        }
        BHasSummary(_) {
          return Boolean(this.GetSummary(_));
        }
        static GenerateSummaryFromText(_, _) {
          return _ && 0 != _.trim().length
            ? ((_ = (0, _._)(_, [
                "img",
                "h1",
                "h2",
                "h3",
                "spoiler",
                "table",
                "previewyoutube",
                "looping_media",
                "roomeffect",
                "sticker",
              ])),
              (_ = (0, _._)(_, ["p"], " ")),
              (_ = (0, _._)(_)),
              (_ = (0, _._)(_)),
              (0, _._)(_, _ || 180))
            : "";
        }
        BHasTag(_) {
          return -1 != this.vecTags.indexOf(_);
        }
        BHasTagStartingWith(_) {
          return this.vecTags.some((_) => _?.startsWith(_));
        }
        BIsOGGEvent() {
          return Boolean(this.appid) && this.appid > 0;
        }
        BShowLibrarySpotlight(_) {
          if (!_) return Boolean(this.jsondata.library_spotlight);
          if (!this.jsondata.library_spotlight) return !1;
          if (_.includes(this.type)) return !1;
          const _ = new Date().getTime() / 1e3;
          return (
            !(_.includes(this.type) && this.endTime && _ > this.endTime) &&
            !(this.startTime && _ > this.startTime + 60 * _._.PerDay)
          );
        }
        BShowLibrarySpotlightText() {
          return Boolean(this.jsondata.library_spotlight_text);
        }
        BHasBroadcastEnabled() {
          return !!this.jsondata.bBroadcastEnabled;
        }
        BEventCanShowBroadcastWidget(_, _ = (0, _._)()) {
          if (this.jsondata.bSaleEnabled) return this.BHasBroadcastEnabled();
          const _ = this.endTime ? this.endTime : _ + 3600;
          return (
            this.BHasBroadcastEnabled() &&
            !!this.jsondata.broadcast_whitelist &&
            this.jsondata.broadcast_whitelist.length > 0 &&
            (_ || ((this.startTime ?? 0) - 600 <= _ && _ < _))
          );
        }
        BHasBroadcastForceBanner() {
          return !!this.jsondata.broadcast_force_banner;
        }
        BSaleShowBroadcastAtTopOfPage() {
          return !(
            this.jsondata.sale_sections &&
            this.jsondata.sale_sections.some(
              (_) => "broadcast" == _.section_type,
            )
          );
        }
        BSaleShowCuratorRecommendationAtBottomOfPage() {
          return !(
            this.jsondata.sale_sections &&
            this.jsondata.sale_sections.some(
              (_) => "curator_recommendation" == _.section_type,
            )
          );
        }
        GetBroadcastChatVisibility() {
          return this.jsondata.broadcastChatSetting || "hide";
        }
        GetBroadcastTitle(_) {
          return (
            _._.GetWithFallback(this.jsondata.localized_broadcast_title, _) ||
            (0, _._)(
              this.jsondata.default_broadcast_title ??
                "#Broadcast_default_title_dev",
            )
          );
        }
        GetBroadcastWhitelist() {
          return this.jsondata.broadcast_whitelist ?? [];
        }
        GetBroadcastWhitelistAsSteamIDs() {
          return (
            this.jsondata.broadcast_whitelist?.map((_) =>
              _._.InitFromAccountID(_).ConvertTo64BitString(),
            ) ?? []
          );
        }
        BIsBroadcastAccountIDWhiteListed(_) {
          return (this.jsondata.broadcast_whitelist || []).includes(Number(_));
        }
        BHasSaleEnabled() {
          return !!this.jsondata.bSaleEnabled;
        }
        BHasSaleVanity() {
          return (
            !!this.jsondata.bSaleEnabled &&
            Boolean(this.jsondata.sale_vanity_id)
          );
        }
        GetSaleVanity() {
          return this.jsondata.sale_vanity_id ?? "";
        }
        BHasSaleUpdateLandingPageVanity() {
          return (
            !!this.jsondata.bSaleEnabled &&
            Boolean(this.jsondata.sale_update_landing_page_vanity_id)
          );
        }
        GetSaleUpdateLandingPageVanity() {
          return this.jsondata.sale_update_landing_page_vanity_id ?? "";
        }
        GetSaleURL(_) {
          if (!this.jsondata.bSaleEnabled) return null;
          if (this.jsondata.sale_update_landing_page_vanity_id)
            return (
              _._.STORE_BASE_URL +
              `app${this.appid}/landing/${this.jsondata.sale_update_landing_page_vanity_id}`
            );
          if (!Boolean(this.jsondata.sale_vanity_id))
            return (
              _._.STORE_BASE_URL +
              "newshub/" +
              (this.appid
                ? "app/" + this.appid
                : "group/" + this.clanSteamID.GetAccountID()) +
              "/view/" +
              this.GID
            );
          if (this.BUsesContentHubForItemSource()) {
            const _ = this.jsondata.source_content_hub;
            return _
              ? "string" == typeof _
                ? _._.STORE_BASE_URL + "category/" + _
                : "category" == _.type
                  ? _._.STORE_BASE_URL + "category/" + _.category
                  : "tags" == _.type
                    ? _._.STORE_BASE_URL +
                      "tags/" +
                      ((0, _._)() || "en") +
                      "/" +
                      _.tagid
                    : "freetoplay" == _.type
                      ? _._.STORE_BASE_URL + "genre/Free%20to%20Play/"
                      : "earlyaccess" == _.type
                        ? _._.STORE_BASE_URL + "genre/Early%20Access/"
                        : _._.STORE_BASE_URL + _.type
              : _._.STORE_BASE_URL + "sale/" + this.jsondata.sale_vanity_id;
          }
          return this.jsondata.sale_vanity_id_valve_approved_for_sale_subpath
            ? _._.STORE_BASE_URL + "sale/" + this.jsondata.sale_vanity_id
            : _
              ? _ + "sale/" + this.jsondata.sale_vanity_id
              : _._.STORE_BASE_URL +
                "curator/" +
                this.clanSteamID.GetAccountID() +
                "/sale/" +
                this.jsondata.sale_vanity_id;
        }
        BHasEmailEnabled() {
          return (
            !!this.jsondata.email_setting && this.jsondata.email_setting.bEnable
          );
        }
        GetSaleSections() {
          return this.jsondata.sale_sections ?? [];
        }
        GenerateDynamicSaleSections(_, _, _, _, _, _) {
          const _ = [],
            _ = {
              section_type: "unselected_empty",
              capsules: [],
              events: [],
              links: [],
              localized_label: [],
              default_label: "",
            };
          let _ = 100009;
          return (
            _ &&
              _.push({
                ..._,
                section_type: "footer_self_creator_home",
                unique_id: _++,
                curator_clan_id: this.clanSteamID.GetAccountID(),
              }),
            _ &&
              _.push({
                ..._,
                section_type: "footer_browse_more",
                unique_id: _++,
              }),
            _ &&
              _.push(
                this.GenerateDynamicCreatorHomeItemBrowserSection(_++, _, _),
              ),
            _ &&
              _.push({
                ..._,
                section_type: "footer_default_social_share",
                unique_id: _++,
              }),
            _ &&
              _.push({
                ..._,
                section_type: "nextfest_header",
                unique_id: _++,
              }),
            _
          );
        }
        GetSaleSectionIncludingFooterSections(_ = 0) {
          const _ = this.jsondata?.sale_show_creator,
            _ = this.jsondata.sale_browse_more_button,
            _ =
              0 == this.GetSaleSectionsByType("social_share").length &&
              !this.jsondata.sale_default_social_media_disabled,
            _ = this.GetEventType() == _.ajI,
            _ = this.BShowNextFestHeader(!0);
          return _ || _ || _ || _ || _
            ? [
                ...this.GenerateDynamicSaleSections(!1, !1, !1, !1, _, _),
                ...this.GetSaleSections(),
                ...this.GenerateDynamicSaleSections(!!_, !!_, _, _, !1, _),
              ]
            : this.GetSaleSections();
        }
        GetSaleSectionByID(_, _ = 0) {
          if (_ > _) {
            return this.GenerateDynamicSaleSections(!0, !0, !0, !0, !0, _).find(
              (_) => _.unique_id == _,
            );
          }
          return this.jsondata.sale_sections?.find((_) => _.unique_id == _);
        }
        GetSaleSectionCount() {
          return this.jsondata.sale_sections?.length ?? 0;
        }
        GetSaleSectionsByType(_) {
          return (
            this.jsondata.sale_sections?.filter((_) => _.section_type == _) ??
            []
          );
        }
        GetLastUpdateTime() {
          return this.rtime32_last_modified ?? 0;
        }
        GetLastUpdaterSteamIDStr() {
          return this.last_update_steamid ?? "";
        }
        GetSaleSectionFirstMatchByType(_) {
          const _ = this.jsondata.sale_sections?.length ?? 0;
          if (0 != _)
            for (let _ = 0; _ < _; ++_)
              if (this.jsondata.sale_sections[_].section_type === _)
                return this.jsondata.sale_sections[_];
        }
        static AccumulateCapsuleListIDs(_, _, _, _) {
          _ &&
            _.forEach((_) => {
              if (_) {
                _.type &&
                  _.has(_.type) &&
                  ((_ && !_(_._)) || __webpack_require__.add(_._));
              }
            });
        }
        GetSaleItemOfType(_, _) {
          if (!this.jsondata.sale_sections) return new Set();
          const _ = new Set(_),
            _ = new Set();
          return (
            (0, _._)(
              !this.jsondata.bOptimizedForSize,
              "Cannot find all items in optimized json",
            ),
            this.jsondata.bOptimizedForSize,
            this.jsondata.tagged_items?.forEach((_) => {
              _.AccumulateCapsuleListIDs([_.capsule], _, _, _);
            }),
            this.jsondata.sale_sections.forEach((_) => {
              if (_(_.section_type))
                _.AccumulateCapsuleListIDs(_.capsules, _, _, _);
              else if ("tabs" === _.section_type && _.tabs)
                for (const _ of _.tabs)
                  _.AccumulateCapsuleListIDs(_.capsules, _, _, _);
            }),
            _
          );
        }
        GetSaleItemCountOfType(_, _) {
          return this.GetSaleItemOfType(_, _).size;
        }
        GetSaleFeaturedAppsCount(_) {
          return this.GetSaleItemCountOfType(
            ["game", "application", "software", "dlc", "music"],
            _,
          );
        }
        GetSaleFeaturedAppsAndDemosCount(_) {
          return this.GetSaleItemCountOfType(
            ["game", "application", "software", "dlc", "music", "demo"],
            _,
          );
        }
        GetSaleFeaturedBundlesCount(_) {
          return this.GetSaleItemCountOfType(["bundle"], _);
        }
        GetSaleFeaturedPackagesCount(_) {
          return this.GetSaleItemCountOfType(["sub"], _);
        }
        GetSaleFeaturedApps(_) {
          return this.GetSaleItemOfType(
            ["game", "application", "software", "dlc", "music"],
            _,
          );
        }
        GetSaleFeaturedAppsAndDemos(_) {
          return this.GetSaleItemOfType(
            ["game", "application", "software", "dlc", "music", "demo"],
            _,
          );
        }
        GetSaleFeaturedBundles(_) {
          return this.GetSaleItemOfType(["bundle"], _);
        }
        GetSaleFeaturedPackages(_) {
          return this.GetSaleItemOfType(["sub"], _);
        }
        GetTaggedItems() {
          return this.jsondata.tagged_items || [];
        }
        BHasScheduleEnabled() {
          return this.jsondata.bScheduleEnabled;
        }
        GetEventType() {
          return this.type;
        }
        GetEventTypeAsString() {
          return (0, _._)(this.type);
        }
        GetCategoryAsString(_) {
          return this.BHasTag("steam_award_nomination_request")
            ? (0, _._)("#PartnerEvent_SteamAwardNominations")
            : this.BHasTag("steam_award_vote_request")
              ? (0, _._)("#PartnerEvent_SteamAwardVoteRequest")
              : this.BHasTag("steam_game_festival_artist_statement")
                ? (0, _._)("#PartnerEvent_SteamGameFestival_ArtistState")
                : this.BHasTag("steam_game_festival_office_hour")
                  ? (0, _._)("#PartnerEvent_SteamGameFestival_OfficeHour")
                  : this.BHasTag("steam_game_festival_broadcast") ||
                      (this.BHasTagStartingWith("sale_nextfest_") &&
                        this.type == _.KDJ)
                    ? (0, _._)("#PartnerEvent_SteamGameFestival_Broadcast")
                    : this.BHasTag("vo_marketing_message") && _
                      ? (0, _._)("#PartnerEvent_MM_MajorUpdate")
                      : this.GetEventTypeAsString();
        }
        GetAllTags() {
          return this.vecTags;
        }
        BMatchesAllTags(_) {
          let _ = !0;
          return (
            _?.forEach((_) => {
              this.vecTags.includes(_) || (_ = !1);
            }),
            _
          );
        }
        BAllowedSteamStoreSpotlight() {
          return Boolean(this.jsondata.store_spotlight);
        }
        BHasLibaryHomeSpotlight() {
          return Boolean(this.jsondata.library_home_spotlight);
        }
        BHasSaleProductBanners() {
          return (
            !!this.jsondata.bSaleEnabled &&
            (this.BHasSomeImage("product_banner") ||
              this.BHasSomeImage("product_banner_override"))
          );
        }
        GetSteamAwardCategory() {
          return this.jsondata.steam_award_category_suggestion ?? _._._;
        }
        GetSteamAwardNomineeCategories() {
          return this.jsondata.steam_award_category_voteids ?? [];
        }
        BIsLockedToGameOwners() {
          return Boolean(
            this.jsondata.ownership_requirement_info?.bLockedToAppOwners,
          );
        }
        GetRequiredAppIDs() {
          return this.jsondata.ownership_requirement_info
            ? this.jsondata.ownership_requirement_info.rgRequiredAppIDs
            : [];
        }
        GetRequiredPackageIDs() {
          return this.jsondata.ownership_requirement_info
            ? this.jsondata.ownership_requirement_info.rgRequiredPackageIDs
            : [];
        }
        BUseSubscriptionLayout() {
          return !!this.jsondata.sale_use_subscription_layout;
        }
        BIsLockedToPartnerAppRights() {
          return Boolean(
            this.jsondata.app_right_requirement_info?.bLockedToPartnerAppRights,
          );
        }
        GetRequiredPartnerAppRights() {
          return this.jsondata.app_right_requirement_info;
        }
        GetValveAccessLog() {
          return Array.isArray(this.jsondata.valve_access_log)
            ? this.jsondata.valve_access_log
            : [];
        }
        BUsesContentHubForItemSource() {
          return (
            this.jsondata.item_source_type === _.k_EContentHub &&
            Boolean(this.jsondata.source_content_hub)
          );
        }
        GetContentHubType() {
          return this.BUsesContentHubForItemSource()
            ? null == this.jsondata.source_content_hub
              ? "games"
              : "string" == typeof this.jsondata.source_content_hub
                ? "category"
                : this.jsondata.source_content_hub.type
            : void 0;
        }
        GetContentHubCategory() {
          return null == this.jsondata.source_content_hub
            ? void 0
            : "string" == typeof this.jsondata.source_content_hub
              ? this.jsondata.source_content_hub
              : this.jsondata.source_content_hub.category;
        }
        GetContentHubTag() {
          return null == this.jsondata.source_content_hub
            ? void 0
            : "string" == typeof this.jsondata.source_content_hub
              ? 0
              : this.jsondata.source_content_hub.tagid;
        }
        GetContentHub() {
          return "string" == typeof this.jsondata.source_content_hub
            ? {
                type: "category",
                category: this.jsondata.source_content_hub,
              }
            : this.jsondata.source_content_hub;
        }
        BContentHubDiscountedOnly() {
          return !!this.jsondata.content_hub_discounted_only;
        }
        BIsBackgroundImageGroupingEnabled() {
          return !!this.jsondata.sale_background_img_groups?.enabled;
        }
        GetSalePageGroupDefinition() {
          return this.jsondata.sale_background_img_groups;
        }
        GetSalePageBackgroundImageGroupCount() {
          return this.jsondata.sale_background_img_groups?.enabled
            ? (this.jsondata.sale_background_img_groups.groups?.length ?? 0)
            : 0;
        }
        GetAllSalePageGroups() {
          return this.jsondata.sale_background_img_groups?.enabled
            ? this.jsondata.sale_background_img_groups.groups
            : [];
        }
        GetSalePageBackgroundGroup(_) {
          return this.jsondata.sale_background_img_groups?.enabled
            ? this.jsondata.sale_background_img_groups.groups?.[_]
            : void 0;
        }
        GetIncludedRealmList() {
          const _ = new Array();
          return (
            this.BInRealmGlobal() && _.push(_._.k_ESteamRealmGlobal),
            this.BInRealmChina() && _.push(_._.k_ESteamRealmChina),
            (0, _._)(
              _.length > 0,
              `Event ${this.GID} is currently configured so that no realms are valid for display. Either enable Steam China or Global to address this issue`,
            ),
            _
          );
        }
        BIsValidForRealm(_) {
          return this.GetIncludedRealmList().includes(_);
        }
        BIsNextFest(_ = !1) {
          const _ = this.jsondata.sale_vanity_id?.toLowerCase(),
            _ = new _._(this.clanSteamID).GetAccountID();
          return (
            !(!_ || _ != _._) &&
            !!_.startsWith("nextfest") &&
            (!_ || (!_.endsWith("preview") && !_.endsWith("press")))
          );
        }
        BShowNextFestHeader(_) {
          return _ && _._.is_valve_email
            ? this.BIsNextFest(!1)
            : this.BIsNextFest(!0) &&
                !!this.startTime &&
                this.startTime > new Date("2026-03-01").getTime() / 1e3;
        }
        GenerateDynamicCreatorHomeItemBrowserSection(_, _, _) {
          return {
            ..._,
            section_type: "sale_item_browser",
            unique_id: _,
            item_browse_section_data: {
              enable_search: !0,
              tabs: [
                "all_released",
                "popularpurchased",
                "all_upcoming",
                "discounted",
              ],
              prefer_assets_without_overrides: !1,
            },
            prefer_assets_without_overrides: !1,
            enable_faceted_browsing: _ >= 7,
            min_capsule_matches_for_facet_values: 5,
            max_facet_values_for_facet: 5,
            background_gradient_top: "#0000006b",
            background_gradient_bottom: "#0000006b",
            facet_sort_order: 1,
            cap_item_count: 24,
            show_more_count: 48,
            facet_auto_generate_options: {
              only_facets: [
                {
                  loc_token: "#App_Taxonomy_Survey_QSuperGenreTitle",
                },
                {
                  loc_token: "#AppTypeLabelTitle",
                  only_values: [
                    "#AppTypeLabel_game",
                    "#AppTypeLabel_dlc",
                    "#AppTypeLabel_demo",
                    "#AppTypeLabel_music",
                  ],
                  initially_selected_values: ["#AppTypeLabel_game"],
                },
                {
                  loc_token: "#Sale_Preferences",
                },
              ],
              initially_expanded_facets: [
                "#AppTypeLabelTitle",
                "#App_Taxonomy_Survey_QSuperGenreTitle",
              ],
              prioritized_facets: [
                "#AppTypeLabelTitle",
                "#App_Taxonomy_Survey_QSuperGenreTitle",
              ],
            },
          };
        }
      }
      function _(_) {
        if (_) return _?.replace(/[()]/g, "\\$&");
      }
      (0, _._)([_._], _.prototype, "GID", void 0),
        (0, _._)([_._], _.prototype, "AnnouncementGID", void 0),
        (0, _._)([_._], _.prototype, "forumTopicGID", void 0),
        (0, _._)([_._], _.prototype, "type", void 0),
        (0, _._)([_._], _.prototype, "appid", void 0),
        (0, _._)([_._], _.prototype, "name", void 0),
        (0, _._)([_._], _.prototype, "description", void 0),
        (0, _._)([_._], _.prototype, "timestamp_loc_updated", void 0),
        (0, _._)([_._], _.prototype, "startTime", void 0),
        (0, _._)([_._], _.prototype, "endTime", void 0),
        (0, _._)([_._], _.prototype, "visibilityStartTime", void 0),
        (0, _._)([_._], _.prototype, "visibilityEndTime", void 0),
        (0, _._)([_._], _.prototype, "m_nBuildID", void 0),
        (0, _._)([_._], _.prototype, "m_strBuildBranch", void 0),
        (0, _._)([_._], _.prototype, "postTime", void 0),
        (0, _._)([_._], _.prototype, "visibility_state", void 0),
        (0, _._)([_._], _.prototype, "broadcaster", void 0),
        (0, _._)([_._], _.prototype, "jsondata", void 0),
        (0, _._)([_._], _.prototype, "nCommentCount", void 0),
        (0, _._)([_._], _.prototype, "nVotesUp", void 0),
        (0, _._)([_._], _.prototype, "nVotesDown", void 0),
        (0, _._)([_._], _.prototype, "bOldAnnouncement", void 0),
        (0, _._)([_._], _.prototype, "announcementClanSteamID", void 0),
        (0, _._)([_._], _.prototype, "loadedAllLanguages", void 0),
        (0, _._)([_._], _.prototype, "bLoaded", void 0),
        (0, _._)([_._], _.prototype, "deleteInProgress", void 0),
        (0, _._)([_._], _.prototype, "vecTags", void 0),
        (0, _._)([_._], _.prototype, "last_update_steamid", void 0),
        (0, _._)([_._], _.prototype, "rtime32_last_modified", void 0),
        (0, _._)(
          [_._],
          _.prototype,
          "rtime32_last_solr_search_col_updated",
          void 0,
        ),
        (0, _._)([_._], _.prototype, "rtime32_last_local_modification", void 0),
        (0, _._)([_._], _.prototype, "rtime32_moderator_reviewed", void 0),
        (0, _._)([_._], _.prototype, "video_preview_type", void 0),
        (0, _._)([_._], _.prototype, "video_preview_id", void 0),
        (0, _._)([_._], _.prototype, "m_overrideCurrentDay", void 0);
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
      });
      var _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid");
      const _ = "100% 0px 100% 0px",
        _ = "tab",
        _ = "SaleSection_",
        _ = "exploration";
      var _;
      !(function (_) {
        (_.Random = "r"), (_.Personalized = "p");
      })(_ || (_ = {}));
      const _ = 940,
        _ = 1920;
      function _() {
        return window.innerWidth ?? _;
      }
      function _() {
        return _() >= _;
      }
      function _() {
        (0, _._)();
        const [_, _] = (0, _.useState)(() => _());
        return (
          (0, _.useEffect)(() => {
            const _ = () => {
              _(_());
            };
            return (
              _(),
              window.addEventListener("resize", _),
              () => window.removeEventListener("resize", _)
            );
          }, []),
          _
        );
      }
      function _(_ = _) {
        return _() >= _;
      }
      function _(_) {
        const _ = _(_),
          _ = (0, _._)(_);
        return _
          ? {
              nMaxCapsulesPerRow: _.nMaxItemsPerRow,
              bScreenIsWide: _,
            }
          : {
              nMaxCapsulesPerRow: Math.min(
                Math.max(
                  Math.floor(window.innerWidth / _.nItemMinimumWidth),
                  1,
                ),
                _.nMaxItemsPerRow,
              ),
              bScreenIsWide: _,
            };
      }
      function _(_) {
        const _ = (0, _._)(_);
        return _()
          ? _.nMaxItemsPerRow
          : Math.min(
              Math.max(Math.floor(window.innerWidth / _.nItemMinimumWidth), 1),
              _.nMaxItemsPerRow,
            );
      }
      function _(_) {
        switch (_) {
          case _._:
            return _.mv5;
          case _._:
            return _.KH9;
          case _._:
            return _.hmR;
          case _._:
            return _.R2g;
          default:
            return;
        }
      }
      function _(_) {
        switch (_) {
          case _.mv5:
            return _._;
          case _.KH9:
            return _._;
          case _.hmR:
            return _._;
          default:
            return;
        }
      }
    },
    chunkid: (module, module_exports, __webpack_require__) => {
      __webpack_require__._(module_exports, {
        _: () => _,
        _: () => _,
      });
      var _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid");
      function _(_) {
        switch (_) {
          case _.Aqr:
          case _.I5b:
          case _.jO6:
          case _.Y3j:
          case _.Bb7:
          case _.TiP:
          case _.EPt:
          case _.E3D:
          case _.L0X:
          case _.KDJ:
          case _.Fa4:
          case _.Aav:
          case _.SRb:
          case _.HRy:
          case _.C$4:
          case _._:
          case _._:
          case _.hGl:
          case _.WNR:
          case _.pIh:
          case _.izQ:
          case _.LOv:
          case _.zcX:
          case _.DRF:
          case _.HFK:
            return !0;
        }
        return !1;
      }
      function _(_) {
        let _ = "#PartnerEvent_" + _,
          _ = _._.Localize(_);
        return _ != _ ? _ : _._.Localize("#PartnerEvent_Other");
      }
    },
  },
]);
