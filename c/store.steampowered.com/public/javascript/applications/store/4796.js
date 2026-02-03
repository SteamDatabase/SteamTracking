"use strict";
(self.webpackChunkstore = self.webpackChunkstore || []).push([
  [4796],
  {
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
      __webpack_require__("chunkid"), __webpack_require__("chunkid");
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
            curator_title: _.curator_title,
            curator_description: _.curator_description,
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
        _: () => _,
        _: () => _,
        _: () => _,
        _: () => _,
      });
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
                    _,
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
      var _,
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
                  clanid: {
                    _: 2,
                    _: _._.readUint32,
                    _: _._.writeUint32,
                  },
                  link_url: {
                    _: 3,
                    _: _._.readString,
                    _: _._.writeString,
                  },
                  link_text: {
                    _: 4,
                    _: _._.readString,
                    _: _._.writeString,
                  },
                  blurb: {
                    _: 5,
                    _: _._.readString,
                    _: _._.writeString,
                  },
                  time_recommended: {
                    _: 6,
                    _: _._.readUint32,
                    _: _._.writeUint32,
                  },
                  comment_count: {
                    _: 7,
                    _: _._.readInt32,
                    _: _._.writeInt32,
                  },
                  upvote_count: {
                    _: 8,
                    _: _._.readInt32,
                    _: _._.writeInt32,
                  },
                  accountid_creator: {
                    _: 9,
                    _: _._.readUint32,
                    _: _._.writeUint32,
                  },
                  recommendation_state: {
                    _: 10,
                    _: _._.readEnum,
                    _: _._.writeEnum,
                  },
                  received_compensation: {
                    _: 11,
                    _: _._.readBool,
                    _: _._.writeBool,
                  },
                  received_for_free: {
                    _: 12,
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
          return "CStoreCuration_RecommendedApp";
        }
      }
      class _ extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(_ = null) {
          super(),
            _.prototype.listid || _._(_._()),
            _.Message.initialize(this, _, 0, -1, [10, 12, 13, 14], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            _.sm_m ||
              (_.sm_m = {
                proto: _,
                fields: {
                  listid: {
                    _: 1,
                    _: _._.readUint64String,
                    _: _._.writeUint64String,
                  },
                  title: {
                    _: 2,
                    _: _._.readString,
                    _: _._.writeString,
                  },
                  blurb: {
                    _: 3,
                    _: _._.readString,
                    _: _._.writeString,
                  },
                  link: {
                    _: 4,
                    _: _._.readString,
                    _: _._.writeString,
                  },
                  list_state: {
                    _: 5,
                    _: _._.readEnum,
                    _: _._.writeEnum,
                  },
                  sort_order: {
                    _: 6,
                    _: _._.readUint32,
                    _: _._.writeUint32,
                  },
                  time_created: {
                    _: 7,
                    _: _._.readUint32,
                    _: _._.writeUint32,
                  },
                  time_updated: {
                    _: 8,
                    _: _._.readUint32,
                    _: _._.writeUint32,
                  },
                  accountid: {
                    _: 9,
                    _: _._.readUint32,
                    _: _._.writeUint32,
                  },
                  apps: {
                    _: 10,
                    _: _,
                    _: !0,
                    _: !0,
                  },
                  list_type: {
                    _: 11,
                    _: _._.readEnum,
                    _: _._.writeEnum,
                  },
                  title_localization: {
                    _: 12,
                    _: _._,
                    _: !0,
                    _: !0,
                  },
                  blurb_localization: {
                    _: 13,
                    _: _._,
                    _: !0,
                    _: !0,
                  },
                  link_localization: {
                    _: 14,
                    _: _._,
                    _: !0,
                    _: !0,
                  },
                  sale_clan_steamid: {
                    _: 15,
                    _: _._.readFixed64String,
                    _: _._.writeFixed64String,
                  },
                  sale_clan_event_gid: {
                    _: 16,
                    _: _._.readFixed64String,
                    _: _._.writeFixed64String,
                  },
                  list_jsondata: {
                    _: 17,
                    _: _._.readString,
                    _: _._.writeString,
                  },
                  clan_account_id: {
                    _: 18,
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
          return "CStoreCuration_ListDetails";
        }
      }
      class _ extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(_ = null) {
          super(),
            _.prototype.recommended_app || _._(_._()),
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
                  recommended_app: {
                    _: 1,
                    _: _,
                  },
                  blurb: {
                    _: 2,
                    _: _._.readString,
                    _: _._.writeString,
                  },
                  sort_order: {
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
          return "CStoreCuration_ListDetails_ListItem";
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
                  list_state: {
                    _: 2,
                    _: _._.readEnum,
                    _: _._.writeEnum,
                  },
                  start: {
                    _: 3,
                    _: _._.readUint32,
                    _: _._.writeUint32,
                  },
                  count: {
                    _: 4,
                    _: _._.readUint32,
                    _: _._.writeUint32,
                  },
                  return_total_only: {
                    _: 5,
                    _: _._.readBool,
                    _: _._.writeBool,
                  },
                  return_metadata_only: {
                    _: 6,
                    _: _._.readBool,
                    _: _._.writeBool,
                  },
                  max_apps: {
                    _: 7,
                    _: _._.readInt32,
                    _: _._.writeInt32,
                  },
                  sale_clan_event_gid: {
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
          return "CStoreCuration_GetLists_Request";
        }
      }
      class _ extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(_ = null) {
          super(),
            _.prototype.list_details || _._(_._()),
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
                  list_details: {
                    _: 1,
                    _: _,
                    _: !0,
                    _: !0,
                  },
                  total: {
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
          return "CStoreCuration_GetLists_Response";
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
                  listid: {
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
          return "CStoreCuration_GetListDetails_Request";
        }
      }
      class _ extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(_ = null) {
          super(),
            _.prototype.list_details || _._(_._()),
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
                  list_details: {
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
          return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
        }
        getClassName() {
          return "CStoreCuration_GetListDetails_Response";
        }
      }
      !(function (_) {
        (_.GetLists = function (_, _) {
          return _.SendMsg("StoreCuration.GetLists#1", (0, _._)(_, _), _, {
            bConstMethod: !0,
            ePrivilege: 2,
            eWebAPIKeyRequirement: 1,
          });
        }),
          (_.GetListDetails = function (_, _) {
            return _.SendMsg(
              "StoreCuration.GetListDetails#1",
              (0, _._)(_, _),
              _,
              {
                bConstMethod: !0,
                ePrivilege: 2,
                eWebAPIKeyRequirement: 1,
              },
            );
          });
      })(_ || (_ = {}));
      var _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__._(_),
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
        m_linkedEvent = void 0;
        m_mapListInfo = new Map();
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
            (this.m_linkedEvent = _.linked_event),
            (this.m_mapListInfo = new Map(Object.entries(_.list_info ?? {}))),
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
        GetLinkedEventGID() {
          return this.m_linkedEvent;
        }
        GetListInfo() {
          return this.m_mapListInfo;
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
      var _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid");
      class _ {
        constructor() {
          (0, _._)(this);
        }
        m_mapClanToCreatorHome = new Map();
        m_mapAppToCreatorIDList = new Map();
        m_bLoadedFromConfig = !1;
        m_serviceTransport = void 0;
        LazyInit() {
          if (!this.m_bLoadedFromConfig) {
            const _ = (0, _._)("creatorhome", "application_config");
            this.ValidateStoreDefault(_) &&
              _.forEach((_) => {
                const _ = Number(_.creator_clan_id),
                  _ = _._.InitFromClanID(_),
                  _ = new _(_);
                _.Initialize(_),
                  (_.m_promise = _.GetAsPromise(_)),
                  this.m_mapClanToCreatorHome.set(_, _);
              });
            const _ = (0, _._)("creatorhomeforapp", "application_config");
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
        GetServiceTransport() {
          if (!this.m_serviceTransport) {
            const _ = (0, _._)("loyalty_webapi_token", "application_config"),
              _ = new _._(_._.WEBAPI_BASE_URL, _ || void 0);
            this.m_serviceTransport = _.GetServiceTransport();
          }
          return this.m_serviceTransport;
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
        async LoadCreatorHome(_, _ = !1, _) {
          if (
            (this.LazyInit(),
            _ || !this.m_mapClanToCreatorHome.has(_.GetAccountID()))
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
      window.g_CreatorHomeStore = _;
      class _ {
        constructor() {
          (0, _._)(this);
        }
        m_mapListInfo = new Map();
        m_bLoadedFromConfig = !1;
        LazyInit() {
          if (!this.m_bLoadedFromConfig) {
            const _ = (0, _._)("creator_home_list_info", "application_config");
            if (this.ValidateCreatorHomeTitles(_))
              for (const [
                _,
                {
                  title: __webpack_require__,
                  description: _,
                  listtileimage: _,
                },
              ] of Object.entries(_ ?? {}))
                __webpack_require__ &&
                  this.m_mapListInfo.set(_, {
                    title: __webpack_require__ ?? "",
                    description: _?.length ? _ : void 0,
                    imageUrl: _?.length ? _ : void 0,
                  });
            this.m_bLoadedFromConfig = !0;
          }
        }
        ValidateCreatorHomeTitles(_) {
          return null != _ && "object" == typeof _ && !Array.isArray(_);
        }
        GetListTitle(_) {
          return this.LazyInit(), _ ? this.m_mapListInfo.get(_)?.title : void 0;
        }
        GetListSubtitle(_) {
          return (
            this.LazyInit(), _ ? this.m_mapListInfo.get(_)?.description : void 0
          );
        }
        GetListtileImage(_) {
          return (
            this.LazyInit(), _ ? this.m_mapListInfo.get(_)?.imageUrl : void 0
          );
        }
      }
      (0, _._)([_._], _.prototype, "m_mapListInfo", void 0),
        (0, _._)([_._], _.prototype, "LazyInit", null);
      const _ = new _();
      function _(_) {
        const _ = _._.InitFromClanID(_);
        return {
          queryKey: ["CreatorHome", _],
          initialData: () => _.GetCreatorHome(_),
          queryFn: async () => {
            const _ = _._.InitFromClanID(_);
            return await _.LoadCreatorHome(_, !0);
          },
        };
      }
      function _(_) {
        const {
          data: _,
          isFetching: __webpack_require__,
          refetch: _,
        } = (0, _._)(_(_));
        return {
          creatorHome: _,
          isFetching: __webpack_require__,
          refetch: _,
        };
      }
      function _(_, _) {
        return {
          queryKey: ["GetCreatorHomeGetAllListsQuery", _],
          queryFn: async () => {
            const _ = _.GetServiceTransport(),
              _ = _._.Init(_);
            _.Body().set_steamid(
              new _._(_, _._.EUNIVERSE, 7, 0).ConvertTo64BitString(),
            ),
              _.Body().set_count(100);
            const _ = await _.GetLists(_, _);
            return _.BSuccess()
              ? _.Body()
                  .list_details()
                  .filter((_) => _ || 0 != _.list_state())
              : null;
          },
          enabled: _ > 0,
        };
      }
      function _(_, _) {
        return {
          queryKey: ["GetCreatorHomeGetListsDetailsQuery", _, _],
          queryFn: async () => {
            const _ = _.GetServiceTransport(),
              _ = _._.Init(_);
            _.Body().set_steamid(
              new _._(_, _._.EUNIVERSE, 7, 0).ConvertTo64BitString(),
            ),
              _.Body().set_listid(_);
            const _ = await _.GetListDetails(_, _);
            return _.BSuccess() ? (_.Body().list_details() ?? null) : null;
          },
          enabled: _ > 0,
        };
      }
      window.g_CreatorHomeListInfoStore = _;
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
        _ = __webpack_require__._(_),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid");
      class _ {
        m_CMInterface;
        m_setShownEvents = new Set();
        m_setReadEvents = new Set();
        m_rgPendingUpload = [];
        m_schUpload = new _._();
        m_bUploading = !1;
        constructor(_) {
          this.m_CMInterface = _;
        }
        MarkEventShown(_, _, _) {
          let _ = this.MakeKey(_, _);
          if (this.m_setShownEvents.has(_)) return !1;
          this.m_setShownEvents.add(_);
          let _ = new _._();
          return (
            _.set_event_gid(_),
            _.set_clanid(_),
            _.set_display_location(_),
            _.set_mark_shown(!0),
            this.QueueForUpload(_),
            !0
          );
        }
        MarkEventRead(_, _, _) {
          let _ = this.MakeKey(_, _);
          if (this.m_setReadEvents.has(_)) return !1;
          this.m_setReadEvents.add(_);
          let _ = new _._();
          return (
            _.set_event_gid(_),
            _.set_clanid(_),
            _.set_display_location(_),
            _.set_mark_read(!0),
            this.QueueForUpload(_),
            !0
          );
        }
        MakeKey(_, _) {
          return `${_}_${_}`;
        }
        QueueForUpload(_) {
          this.m_rgPendingUpload.push(_), this.ScheduleUpload();
        }
        ScheduleUpload() {
          this.m_bUploading ||
            (this.m_rgPendingUpload.length >= 30
              ? this.UploadPendingData()
              : this.m_schUpload.IsScheduled() ||
                this.m_schUpload.Schedule(6e4, this.UploadPendingData));
        }
        async Flush() {
          if (!this.m_bUploading) return this.UploadPendingData();
        }
        async UploadPendingData() {
          if (this.m_bUploading) return;
          this.m_schUpload.Cancel();
          let _ = this.m_rgPendingUpload.splice(0, 30);
          if (0 == _.length) return;
          let _ = !1;
          if (this.m_CMInterface) {
            let _ = _._.Init(_._);
            for (let _ of _) __webpack_require__.Body().add_markings(_);
            this.m_bUploading = !0;
            let _ = await _._.MarkPartnerEventsForUser(
              this.m_CMInterface.GetServiceTransport(),
              _,
            );
            (this.m_bUploading = !1), (_ = 1 == _.GetEResult());
          } else {
            if (!_._.logged_in) return;
            let _ = _.map((_) => _.toObject()),
              _ = (0, _._)() + "actions/ajaxmarkpartnerevents";
            const _ = new FormData();
            _.append("sessionid", _._.SESSIONID),
              _.append("request", JSON.stringify(_));
            try {
              _ =
                1 ==
                (
                  await _().post(_, _, {
                    withCredentials: !0,
                  })
                ).data.success;
            } catch (_) {
              let _ = (0, _._)(_);
              console.error(
                "CPartnerEventUserTracking.UploadPendingData error " +
                  _.strErrorMsg,
                _,
              );
            }
          }
          _
            ? this.m_rgPendingUpload.length > 0 && this.ScheduleUpload()
            : (console.log(
                "Saving news event state failed. Will try again soon!",
              ),
              (this.m_rgPendingUpload = this.m_rgPendingUpload.concat(_)),
              this.m_schUpload.Schedule(6e4, this.UploadPendingData));
        }
      }
      (0, _._)([_._], _.prototype, "UploadPendingData", null);
      var _,
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid");
      class _ {
        clanid = void 0;
        appid = 0;
        can_edit = !1;
        owns_app = !1;
        follows_app = !1;
        support_user = !1;
        valve_admin = !1;
        limited_user = !1;
        event_ignored = new Array();
        event_followed = new Array();
        event_followed_flags = new Array();
        constructor(_) {
          (0, _._)(this), (this.clanid = _);
        }
      }
      (0, _._)([_._], _.prototype, "clanid", void 0),
        (0, _._)([_._], _.prototype, "appid", void 0),
        (0, _._)([_._], _.prototype, "can_edit", void 0),
        (0, _._)([_._], _.prototype, "owns_app", void 0),
        (0, _._)([_._], _.prototype, "follows_app", void 0),
        (0, _._)([_._], _.prototype, "support_user", void 0),
        (0, _._)([_._], _.prototype, "valve_admin", void 0),
        (0, _._)([_._], _.prototype, "limited_user", void 0),
        (0, _._)([_._], _.prototype, "event_ignored", void 0),
        (0, _._)([_._], _.prototype, "event_followed", void 0),
        (0, _._)([_._], _.prototype, "event_followed_flags", void 0),
        (function (_) {
          (_[(_.k_ENotifyFlagNone = 0)] = "k_ENotifyFlagNone"),
            (_[(_.k_ENotifyFlagByEmail = 1)] = "k_ENotifyFlagByEmail"),
            (_[(_.k_ENotifyFlagByPush = 2)] = "k_ENotifyFlagByPush");
        })(_ || (_ = {}));
      class _ {
        constructor() {
          (0, _._)(this);
        }
        m_mapClanToUserPermissions = new Map();
        m_mapAnnounceGIDToVote = new Map();
        m_setReadEventGIDs = new Set();
        m_tracker = void 0;
        m_cm = void 0;
        static s_EventUserStore;
        m_bIsPresentationMode = (0, _._)();
        static Get() {
          return (
            (0, _._)(
              !!_.s_EventUserStore,
              "Have not yet initialized global EventUserStore",
            ),
            _.s_EventUserStore
          );
        }
        static IsInitialized() {
          return !!_.s_EventUserStore;
        }
        static async InitGlobal(_) {
          if (!_.s_EventUserStore) {
            const _ = new _();
            await _.Init(_),
              (_.s_EventUserStore = _),
              "dev" == _._.WEB_UNIVERSE && (window.g_EventUserStore = _);
          }
        }
        static BIsInited() {
          return Boolean(_.s_EventUserStore);
        }
        async Init(_) {
          (this.m_cm = _), (this.m_tracker = new _(_));
          const _ = (0, _._)("partnereventpermissions", "application_config");
          this.ValidateStoreDefault(_) &&
            ((0, _._)(() => {
              _.forEach((_) => {
                let _ = new _(_.clanid),
                  _ = {
                    result: _,
                    promise: _.RemapToPromise(_),
                    bLoaded: !0,
                  };
                this.CopyFromResponseToTrack(_, _),
                  this.m_mapClanToUserPermissions.set(_.clanid, _);
              });
            }),
            ("dev" != _._.WEB_UNIVERSE && "beta" != _._.WEB_UNIVERSE) ||
              console.log(
                "CEventUserStore has loaded",
                this.m_mapClanToUserPermissions.size,
                this.m_mapClanToUserPermissions,
              ));
          let _ = (0, _._)("uservotes", "application_config");
          _ &&
            (0, _._)(() => {
              __webpack_require__.forEach((_) => {
                let _ = !!_.voted_up || (!_.voted_down && void 0);
                this.m_mapAnnounceGIDToVote.set(_.clanAnnouncementGID, _);
              });
            });
        }
        GetTracker() {
          return this.m_tracker;
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
            "number" == typeof _[0].clanid &&
            "number" == typeof _[0].appid
          );
        }
        RecordEventShown(_, _) {
          _ &&
            !_.bOldAnnouncement &&
            _.GID &&
            this.m_tracker.MarkEventShown(
              _.GID,
              _.clanSteamID.GetAccountID(),
              _,
            );
        }
        RecordEventRead(_, _) {
          _ &&
            !_.bOldAnnouncement &&
            _.GID &&
            (this.HasEventBeenRead(_.GID) ||
              (this.SetEventAsRead(_.GID),
              this.m_tracker.MarkEventRead(
                _.GID,
                _.clanSteamID.GetAccountID(),
                _,
              )));
        }
        SetEventAsRead(_) {
          this.m_setReadEventGIDs.add(_);
        }
        HasEventBeenRead(_) {
          return this.m_setReadEventGIDs.has(_);
        }
        static async RemapToPromise(_) {
          return _;
        }
        BIsUserLoggedIn() {
          return _._.logged_in;
        }
        BIsPartnerEventPermissionsLoaded(_) {
          return (
            this.m_mapClanToUserPermissions.has(_) &&
            this.m_mapClanToUserPermissions.get(_).bLoaded
          );
        }
        GetPartnerEventPermissions(_) {
          if (!_ || !_.BIsValid()) return new _(0);
          const _ = _.GetAccountID();
          this.m_mapClanToUserPermissions.has(_) ||
            this.LoadSingleAppEventPermissions(_);
          return this.m_mapClanToUserPermissions.get(_).result;
        }
        BFollowsEvent(_, _) {
          return (
            -1 != this.GetPartnerEventPermissions(_).event_followed.indexOf(_)
          );
        }
        BFollowsEventAndNotifiedBy(_, _, _) {
          let _ = this.GetPartnerEventPermissions(_),
            _ = _.event_followed.indexOf(_);
          return -1 !== _ && (_.event_followed_flags[_] & _) == _;
        }
        BIgnoresEvent(_, _) {
          return (
            -1 != this.GetPartnerEventPermissions(_).event_ignored.indexOf(_)
          );
        }
        async LoadSingleAppEventPermissions(_) {
          let _ = _.GetAccountID(),
            _ = this.m_mapClanToUserPermissions.get(_);
          return (
            _ ||
              ((_ = {
                promise: this.InternalLoadSingleAppEventPermissions(_),
                result: new _(_),
                bLoaded: !1,
              }),
              this.m_mapClanToUserPermissions.set(_, _)),
            _.promise
          );
        }
        CopyFromResponseToTrack(_, _) {
          (_.result.appid = _.appid ?? 0),
            (_.result.can_edit = !!_.can_edit),
            (_.result.clanid = _.appid),
            (_.result.event_followed = _.event_followed ?? []),
            (_.result.event_ignored = _.event_ignored ?? []),
            (_.result.event_followed_flags = _.event_followed_flags ?? []),
            (_.result.follows_app = !!_.follows_app),
            (_.result.owns_app = !!_.owns_app),
            (_.result.limited_user = !!_.limited_user),
            (_.support_user || _.valve_admin) && this.m_bIsPresentationMode
              ? ((_.result.can_edit = !0),
                (_.result.support_user = !1),
                (_.result.valve_admin = !1))
              : ((_.result.support_user = !!_.support_user),
                (_.result.valve_admin = !!_.valve_admin)),
            (_.bLoaded = !0);
        }
        async InternalLoadSingleAppEventPermissions(_) {
          let _ = null,
            _ = _.GetAccountID(),
            _ = !Boolean(_._.logged_in);
          if (!this.m_mapClanToUserPermissions.has(_)) {
            let _ = new _(_.GetAccountID());
            this.m_mapClanToUserPermissions.set(_, {
              result: _,
              promise: _.RemapToPromise(_),
              bLoaded: !1,
            });
          }
          try {
            if (Boolean(_._.logged_in)) {
              let _ =
                  _._.COMMUNITY_BASE_URL +
                  "gid/" +
                  _.ConvertTo64BitString() +
                  "/ajaxgetpartnereventpermissions/",
                _ = {};
              if (
                ("partnerweb" == (0, _._)()
                  ? ((_ =
                      _._.PARTNER_BASE_URL +
                      "partnerevents/ajaxgetpartnereventpermissions"),
                    (_ = {
                      clanaccountid: _.GetAccountID(),
                    }))
                  : "store" == (0, _._)() &&
                    ((_ =
                      _._.STORE_BASE_URL +
                      "events/ajaxgetpartnereventpermissions"),
                    (_ = {
                      clanaccountid: _.GetAccountID(),
                    })),
                (_ = await _().get(_, {
                  params: _,
                  withCredentials: !0,
                })),
                _ && 1 == _.data.success)
              ) {
                let _ = this.m_mapClanToUserPermissions.get(_);
                _ && this.CopyFromResponseToTrack(_, _.data);
              } else
                console.error(
                  "Partner Events Failed Load:" + (0, _._)(_?.data).strErrorMsg,
                ),
                  (_ = !0);
            }
          } catch (_) {
            if (
              ((_ = _.response),
              (_ = !0),
              _ &&
                void 0 !== _.response &&
                void 0 !== _.response.data &&
                void 0 !== _.response.data.success &&
                21 == _.response.data.success)
            );
            else {
              const _ = (0, _._)(_);
              console.error(
                "InternalLoadSingleAppEventPermissions account: " +
                  _ +
                  ": " +
                  _.strErrorMsg,
                _,
              );
            }
          } finally {
            _ &&
              (0, _._)(() => {
                let _ = this.m_mapClanToUserPermissions.get(_);
                (_.result.appid = _?.data.appid ?? 0),
                  (_.result.can_edit = !1),
                  (_.result.clanid = _ && _.data ? _.data.clanid : 0),
                  (_.result.event_followed = new Array()),
                  (_.result.event_ignored = new Array()),
                  (_.result.event_followed_flags = new Array()),
                  (_.result.follows_app = !1),
                  (_.result.owns_app = !1),
                  (_.result.support_user = !1),
                  (_.result.valve_admin = !1),
                  (_.result.limited_user = !1),
                  (_.bLoaded = !0);
              });
          }
          return this.m_mapClanToUserPermissions.get(_).result;
        }
        async SetFollowOrUnfollowEvent(_, _, _, _, _) {
          let _ = this.GetPartnerEventPermissions(_),
            _ = _.event_followed.indexOf(_),
            _ = 0;
          -1 !== _ &&
            ((_ = _.event_followed_flags[_]), _ ? (_ = _ & ~_) : (_ |= _));
          let _ = 0 == _,
            _ =
              ("store" === (0, _._)()
                ? _._.STORE_BASE_URL + "events"
                : _._.COMMUNITY_BASE_URL +
                  "/gid/" +
                  __webpack_require__.ConvertTo64BitString()) +
              (_ ? "/unfolloworunignoreevent" : "/followorignoreevent"),
            _ = new URLSearchParams();
          _.append("sessionid", _._.SESSIONID),
            _.append("ignore", "" + _),
            _.append("gid", _),
            _.append("notification_flag", "" + _),
            _.append("clan_accountid", "" + __webpack_require__.GetAccountID());
          await _().post(_, _, {
            withCredentials: !0,
          });
          (0, _._)(() => {
            let _ = this.m_mapClanToUserPermissions.get(
                __webpack_require__.GetAccountID(),
              ),
              _ = null,
              _ = null,
              _ = null,
              _ = null;
            _
              ? ((_ = _ ? _.result.event_ignored : _.result.event_followed),
                (_ = _ ? null : _.result.event_followed_flags))
              : _
                ? ((_ = _.result.event_followed),
                  (_ = _.result.event_followed_flags),
                  (_ = _.result.event_ignored))
                : ((_ = _.result.event_ignored),
                  (_ = _.result.event_followed),
                  (_ = _.result.event_followed_flags));
            let _ = _.indexOf(_);
            if ((_ > -1 && (_.splice(_, 1), _ && _.splice(_, 1)), _)) {
              let _ = _.indexOf(_);
              -1 == _ ? (_.push(_), _ && _.push(_)) : _ && (_[_] = _);
            }
          });
        }
        async Vote(_, _, _) {
          if (!_ || !_.AnnouncementGID) return !1;
          const _ = this.m_mapAnnounceGIDToVote.get(_.AnnouncementGID);
          if (_ === _) return !0;
          if (
            (this.m_mapAnnounceGIDToVote.set(_.AnnouncementGID, _),
            (0, _._)(() => {
              !0 === _ && _.UpdateVoteCount("up", -1),
                !1 === _ && _.UpdateVoteCount("down", -1),
                !0 === _ && _.UpdateVoteCount("up", 1),
                !1 === _ && _.UpdateVoteCount("down", 1);
            }),
            this.m_cm)
          ) {
            let _ = _._.Init(_._);
            return (
              __webpack_require__.Body().set_announcementid(_.AnnouncementGID),
              __webpack_require__.Body().set_vote_up(!!_),
              __webpack_require__
                .Body()
                .set_clan_accountid(_.clanSteamID.GetAccountID()),
              1 ==
                (
                  await _._.RateClanAnnouncement(
                    this.m_cm.GetServiceTransport(),
                    _,
                  )
                ).GetEResult()
            );
          }
          {
            const _ = (0, _._)(),
              _ =
                "community" == _ || "steamtv" == _
                  ? _._.COMMUNITY_BASE_URL +
                    "gid/" +
                    _.clanSteamID.ConvertTo64BitString() +
                    "/announcements/rate/" +
                    _.AnnouncementGID
                  : _._.STORE_BASE_URL +
                    "updated/ajaxrateupdate/" +
                    _.AnnouncementGID,
              _ = new URLSearchParams();
            _.append("sessionid", _._.SESSIONID),
              _.append("voteup", _ ? "1" : "0"),
              _.append("clanid", "" + _.clanSteamID.GetAccountID()),
              _.append("ajax", "1");
            const _ = {
              withCredentials: !0,
              cancelToken: _.token,
            };
            return 1 == (await _().post(_, _, _)).data.success;
          }
        }
        async LoadMyVote(_, _) {
          if (_?.AnnouncementGID) {
            if (this.m_mapAnnounceGIDToVote.has(_.AnnouncementGID))
              return !!this.m_mapAnnounceGIDToVote.get(_.AnnouncementGID);
            let _;
            if (this.m_cm) {
              let _ = _._.Init(_._);
              _.Body().set_announcementid(_.AnnouncementGID);
              let _ = await _._.GetClanAnnouncementVoteForUser(
                this.m_cm.GetServiceTransport(),
                _,
              );
              1 == _.GetEResult() &&
                (_ =
                  !!_.Body().voted_up() || (!_.Body().voted_down() && void 0));
            } else {
              const _ = "store" == (0, _._)(),
                _ = _
                  ? _._.STORE_BASE_URL + "actions/ajaxgetmyannouncementvote"
                  : _._.COMMUNITY_BASE_URL +
                    "gid/" +
                    _.clanSteamID.ConvertTo64BitString() +
                    "/announcements/ajaxgetmyvote/" +
                    _.AnnouncementGID,
                _ = {
                  gid: _ ? _.AnnouncementGID : void 0,
                },
                _ = await _().get(_, {
                  withCredentials: !0,
                  cancelToken: _.token,
                  params: _,
                });
              _ = !!_.data.voted_up || (!_.data.voted_down && void 0);
            }
            return this.m_mapAnnounceGIDToVote.set(_.AnnouncementGID, _), _;
          }
        }
        SetVote(_, _) {
          this.m_mapAnnounceGIDToVote.set(_, _);
        }
        BHasMyVote(_) {
          return (
            !!_.AnnouncementGID &&
            this.m_mapAnnounceGIDToVote.has(_.AnnouncementGID)
          );
        }
        GetPreviouslyLoadedVote(_) {
          return _.AnnouncementGID
            ? this.m_mapAnnounceGIDToVote.get(_.AnnouncementGID)
            : void 0;
        }
        BShowEmailEditorTab(_) {
          if (_.BHasEmailEnabled()) return !0;
          if (_.clanSteamID.GetAccountID() == (0, _._)()) return !0;
          let _ = this.GetPartnerEventPermissions(_.clanSteamID);
          return (_._.IS_OGG || _._.IS_VALVE_GROUP) && _.valve_admin;
        }
      }
      function _() {
        const [_, _] = (0, _.useState)(() => _.BIsInited());
        return (
          (0, _.useEffect)(() => {
            if (!_) {
              (async () => {
                await Promise.all([_.InitGlobal()]), _(!0);
              })();
            }
          }, [_]),
          _
        );
      }
      function _(_) {
        const [_, __webpack_require__] = (0, _.useState)(
            _.Get().BIsPartnerEventPermissionsLoaded(_),
          ),
          _ = _._.InitFromClanID(_),
          [_, _] = (0, _.useState)(_.Get().GetPartnerEventPermissions(_));
        return (
          (0, _.useEffect)(() => {
            if (!_) {
              const _ = _._.InitFromClanID(_);
              _.Get()
                .LoadSingleAppEventPermissions(_)
                .then((_) => {
                  _(_), __webpack_require__(!0);
                });
            }
          }, [_, _]),
          _
        );
      }
      (0, _._)([_._], _.prototype, "m_mapClanToUserPermissions", void 0),
        (0, _._)([_._], _.prototype, "m_mapAnnounceGIDToVote", void 0),
        (0, _._)([_._], _.prototype, "m_setReadEventGIDs", void 0),
        (0, _._)([_._], _.prototype, "CopyFromResponseToTrack", null);
    },
    chunkid: (module, module_exports, __webpack_require__) => {
      __webpack_require__._(module_exports, {
        _: () => _,
      });
      var _ = __webpack_require__("chunkid");
      const _ = () => (2 === _._.EUNIVERSE ? 2581 : 45267781);
    },
  },
]);
