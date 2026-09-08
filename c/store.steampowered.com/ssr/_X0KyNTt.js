async function _(_) {
  return _(
    `${_.COMMUNITY_BASE_URL}ogg/${_}/ajaxgetvanityandclanid/?origin=${_()}`,
  );
}
async function _(_) {
  let _ = _.InitFromClanID(_);
  return _(
    `${_.COMMUNITY_BASE_URL}gid/${_.ConvertTo64BitString()}/ajaxgetvanityandclanid/?origin=${_()}`,
  );
}
async function _(_) {
  return _(
    `${_.COMMUNITY_BASE_URL}groups/${_}/ajaxgetvanityandclanid/?origin=${_()}`,
  );
}
async function _(_) {
  return _(
    `${_.COMMUNITY_BASE_URL}games/${_}/ajaxgetvanityandclanid/?origin=${_()}`,
  );
}
async function _(_) {
  let _ = await fetch(_, {
    method: `GET`,
  });
  if (_.status == 404) return null;
  if (!_._) throw Error(`Server returned ${_.status}`);
  let _ = await _.json();
  return _.success == 1 ? _ : null;
}
function _() {
  return typeof window < `u` && typeof self < `u` ? self.origin : `ssr_server`;
}
function _(_) {
  return [`clantoclaninfo`, _];
}
function _(_) {
  return [`apptoclanid`, _];
}
function _(_, _ = `group`) {
  return [`vanitytoclanid`, _, _?.toLocaleLowerCase()];
}
function _(_) {
  let _ = _?.[0];
  return _ == `clantoclaninfo` || _ == `apptoclanid` || _ == `vanitytoclanid`;
}
var _ = new WeakSet();
function _(_) {
  if (!_.has(_)) {
    _.add(_);
    for (let _ of [[`clantoclaninfo`], [`apptoclanid`], [`vanitytoclanid`]])
      _.setQueryDefaults(_, {
        staleTime: 1 / 0,
        gcTime: 1 / 0,
        retry: !1,
      });
  }
}
var _ = new WeakMap();
function _(_) {
  if (!_) return null;
  let _ = _.get(_);
  return (
    _ ||
      ((_ = {
        ..._,
        clanSteamID: _.clanSteamIDString
          ? new _(_.clanSteamIDString)
          : _.InitFromClanID(_.clanAccountID),
      }),
      _.set(_, _)),
    _
  );
}
function _(_) {
  let { msg: _, success: _, ..._ } = _;
  return {
    ..._,
    rss_language: _.rss_language ? _.rss_language : 0,
  };
}
function _(_, _) {
  if (!_) return null;
  _(_);
  let _ = _(_);
  return (
    _.setQueryData(_(_.clanAccountID), _),
    _.appid && _.setQueryData(_(_.appid), _.clanAccountID),
    _.vanity_url && _.setQueryData(_(_.vanity_url, `group`), _.clanAccountID),
    _
  );
}
function _(_, _) {
  for (let _ of _) _(_, _);
}
function _(_) {
  return _(_(_, _()));
}
function _(_, _) {
  return (
    _(_),
    {
      queryKey: _(_ ?? null),
      queryFn: async () => (_ ? _(_, await _(_)) : null),
      enabled: _ !== void 0,
      select: _,
    }
  );
}
function _(_, _) {
  return (
    _(_),
    {
      queryKey: _(_),
      queryFn: async () => _(_, await _(_))?.clanAccountID ?? null,
      enabled: !!_,
    }
  );
}
function _(_, _, _ = `group`) {
  return (
    _(_),
    {
      queryKey: _(_, _),
      queryFn: async () => {
        if (_ == `store`) {
          let _ = _.getQueryData(_(_, `group`));
          if (_) return _;
        }
        return (
          _(_, _ == `store` ? await _(_) : await _(_))?.clanAccountID ?? null
        );
      },
      enabled: !!_,
    }
  );
}
function _(_, _) {
  if (_) return _(_.getQueryData(_(_))) ?? void 0;
}
function _(_, _) {
  if (_) return _(_.getQueryData(_(_)), _);
}
function _(_, _, _) {
  if (!_) return;
  let _ = _ ? [_] : [`store`, `group`];
  for (let _ of _) {
    let _ = _(_.getQueryData(_(_, _)), _);
    if (_) return _;
  }
}
async function _(_, _) {
  return _ ? _(await _.fetchQuery(_(_, _))) : null;
}
async function _(_, _) {
  return _ ? _(await _.fetchQuery(_(_, _)), _) : null;
}
async function _(_, _, _ = `group`) {
  return _ ? _(await _.fetchQuery(_(_, _, _)), _) : null;
}
var _ = _(_());
function _(_) {
  if (_.default.isCancel(_))
    return {
      strErrorMsg: `Action Cancelled:` + _,
      errorCode: 52,
    };
  if (
    _.response !== void 0 &&
    _.response.data &&
    typeof _.response.data == `object`
  ) {
    if (`msg` in _.response.data)
      return {
        strErrorMsg: _.response.data.msg,
        errorCode: _.response.data.success,
      };
    if (`err_msg` in _.response.data)
      return {
        strErrorMsg: _.response.data.err_msg,
        errorCode: _.response.data.success,
      };
    if (`message` in _.response.data)
      return {
        strErrorMsg: _.response.data.message,
        errorCode: _.response.data.success,
      };
    if (`success` in _.response.data)
      return {
        strErrorMsg: `error code: ` + _.response.data.success,
        errorCode: _.response.data.success,
      };
  } else if (typeof _.data == `object`) {
    if (`msg` in _.data)
      return {
        strErrorMsg: _.data.msg,
        errorCode: _.data.success,
      };
    if (`err_msg` in _.data)
      return {
        strErrorMsg: _.data.err_msg,
        errorCode: _.data.success,
      };
    if (`message` in _.data)
      return {
        strErrorMsg: _.data.message,
        errorCode: _.data.success,
      };
    if (`success` in _.data)
      return {
        strErrorMsg: `error code: ` + _.data.success,
        errorCode: _.data.success,
      };
  } else if (_.success !== void 0 && _.msg !== void 0)
    return {
      strErrorMsg: _.msg,
      errorCode: _.success,
    };
  else if (_.success !== void 0 && _.message !== void 0)
    return {
      strErrorMsg: _.message,
      errorCode: _.success,
    };
  else if (_.success !== void 0 && _.err_msg !== void 0)
    return {
      strErrorMsg: _.err_msg,
      errorCode: _.success,
    };
  else if (typeof _ == `string` && _.length > 1024)
    console.groupCollapsed(`GetMsgAndErrorCodeFromResponse cannot parse: `),
      console.warn(_),
      console.groupEnd();
  else if (typeof _ == `object` && _ instanceof _)
    return {
      strErrorMsg: `` + _.GetErrorMessage(),
      errorCode: _.GetEResult(),
    };
  else console.warn(`GetMsgAndErrorCodeFromResponse cannot parse: `, _);
  return typeof _ == `object` && `status` in _
    ? {
        strErrorMsg:
          `Unknown Error: ` +
          _ +
          `
Status Code:` +
          _.status,
        errorCode: 2,
      }
    : {
        strErrorMsg: `Unknown Error: ` + _,
        errorCode: 2,
      };
}
var _ = _(_(), 1),
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
            clanid: {
              _: 2,
              _: _.readUint32,
              _: _.writeUint32,
            },
            link_url: {
              _: 3,
              _: _.readString,
              _: _.writeString,
            },
            link_text: {
              _: 4,
              _: _.readString,
              _: _.writeString,
            },
            blurb: {
              _: 5,
              _: _.readString,
              _: _.writeString,
            },
            time_recommended: {
              _: 6,
              _: _.readUint32,
              _: _.writeUint32,
            },
            comment_count: {
              _: 7,
              _: _.readInt32,
              _: _.writeInt32,
            },
            upvote_count: {
              _: 8,
              _: _.readInt32,
              _: _.writeInt32,
            },
            accountid_creator: {
              _: 9,
              _: _.readUint32,
              _: _.writeUint32,
            },
            recommendation_state: {
              _: 10,
              _: _.readEnum,
              _: _.writeEnum,
            },
            received_compensation: {
              _: 11,
              _: _.readBool,
              _: _.writeBool,
            },
            received_for_free: {
              _: 12,
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
      return `CStoreCuration_RecommendedApp`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.listid || _(_._()),
        _.Message.initialize(this, _, 0, -1, [10, 12, 13, 14], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            listid: {
              _: 1,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            title: {
              _: 2,
              _: _.readString,
              _: _.writeString,
            },
            blurb: {
              _: 3,
              _: _.readString,
              _: _.writeString,
            },
            link: {
              _: 4,
              _: _.readString,
              _: _.writeString,
            },
            list_state: {
              _: 5,
              _: _.readEnum,
              _: _.writeEnum,
            },
            sort_order: {
              _: 6,
              _: _.readUint32,
              _: _.writeUint32,
            },
            time_created: {
              _: 7,
              _: _.readUint32,
              _: _.writeUint32,
            },
            time_updated: {
              _: 8,
              _: _.readUint32,
              _: _.writeUint32,
            },
            accountid: {
              _: 9,
              _: _.readUint32,
              _: _.writeUint32,
            },
            apps: {
              _: 10,
              _: _,
              _: !0,
              _: !0,
            },
            list_type: {
              _: 11,
              _: _.readEnum,
              _: _.writeEnum,
            },
            title_localization: {
              _: 12,
              _: _,
              _: !0,
              _: !0,
            },
            blurb_localization: {
              _: 13,
              _: _,
              _: !0,
              _: !0,
            },
            link_localization: {
              _: 14,
              _: _,
              _: !0,
              _: !0,
            },
            sale_clan_steamid: {
              _: 15,
              _: _.readFixed64String,
              _: _.writeFixed64String,
            },
            sale_clan_event_gid: {
              _: 16,
              _: _.readFixed64String,
              _: _.writeFixed64String,
            },
            list_jsondata: {
              _: 17,
              _: _.readString,
              _: _.writeString,
            },
            clan_account_id: {
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
      return `CStoreCuration_ListDetails`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.recommended_app || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            recommended_app: {
              _: 1,
              _: _,
            },
            blurb: {
              _: 2,
              _: _.readString,
              _: _.writeString,
            },
            sort_order: {
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
      return `CStoreCuration_ListDetails_ListItem`;
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
            list_state: {
              _: 2,
              _: _.readEnum,
              _: _.writeEnum,
            },
            start: {
              _: 3,
              _: _.readUint32,
              _: _.writeUint32,
            },
            count: {
              _: 4,
              _: _.readUint32,
              _: _.writeUint32,
            },
            return_total_only: {
              _: 5,
              _: _.readBool,
              _: _.writeBool,
            },
            return_metadata_only: {
              _: 6,
              _: _.readBool,
              _: _.writeBool,
            },
            max_apps: {
              _: 7,
              _: _.readInt32,
              _: _.writeInt32,
            },
            sale_clan_event_gid: {
              _: 8,
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
      return `CStoreCuration_GetLists_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.list_details || _(_._()),
        _.Message.initialize(this, _, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
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
      return `CStoreCuration_GetLists_Response`;
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
            listid: {
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
      return `CStoreCuration_GetListDetails_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.list_details || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
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
      return `CStoreCuration_GetListDetails_Response`;
    }
  },
  _;
(function (_) {
  function _(_, _, _) {
    return _.SendMsg(`StoreCuration.GetLists#1`, _(_, _, _), _, {
      bConstMethod: !0,
      ePrivilege: 2,
      eWebAPIKeyRequirement: 1,
    });
  }
  _.GetLists = _;
  function _(_, _, _) {
    return _.SendMsg(`StoreCuration.GetListDetails#1`, _(_, _, _), _, {
      bConstMethod: !0,
      ePrivilege: 2,
      eWebAPIKeyRequirement: 1,
    });
  }
  _.GetListDetails = _;
})((_ ||= {}));
var _ = `fef49e7fa7e1997310d705b2a6158ff8dc1cdfeb`;
function _(_, _) {
  let _ = `.jpg`;
  (!_ || _ === `0000000000000000000000000000000000000000`) && (_ = _),
    _.length == 44 && ((_ = _.substr(-4)), (_ = _.substr(0, 40)));
  let _ = _.AVATAR_BASE_URL;
  return (
    _ ||
      ((_ = _.MEDIA_CDN_COMMUNITY_URL + `images/avatars/`),
      (_ += _.substr(0, 2) + `/`)),
    (_ += _),
    _ && _ != `small` && (_ += `_` + _),
    (_ += _),
    _
  );
}
var _ = `061818254b2c99ac49e6626adb128ed1282a392f`,
  _ = class {
    m_unAppID;
    m_bInitialized = !1;
    m_strName;
    m_strIconURL;
    m_dtUpdatedFromServer;
    m_eAppType;
    constructor(_) {
      this.m_unAppID = _;
    }
    get appid() {
      return this.m_unAppID;
    }
    get is_initialized() {
      return this.m_bInitialized;
    }
    get is_valid() {
      return this.m_bInitialized && !!this.m_strName;
    }
    get name() {
      return this.m_strName;
    }
    get icon_url_no_default() {
      return this.m_strIconURL && this.BuildAppURL(this.m_strIconURL, _);
    }
    get icon_url() {
      return this.BuildAppURL(this.m_strIconURL, _);
    }
    get time_updated_from_server() {
      return this.m_dtUpdatedFromServer;
    }
    get apptype() {
      return this.m_eAppType;
    }
    BIsApplicationOrTool() {
      return this.apptype == 4 || this.apptype == 2;
    }
    BuildAppURL(_, _) {
      return _
        ? _.MEDIA_CDN_COMMUNITY_URL +
            `images/apps/` +
            this.appid +
            `/` +
            _ +
            `.jpg`
        : _(_);
    }
    DeserializeFromMessage(_) {
      (this.m_bInitialized = !0),
        (this.m_strName = _.name()),
        (this.m_strIconURL = _.icon()),
        (this.m_dtUpdatedFromServer = new Date()),
        (this.m_eAppType = _.app_type());
    }
    DeserializeFromAppOverview(_) {
      _.icon_hash() && _.app_type() != 1073741824
        ? ((this.m_bInitialized = !0),
          (this.m_strName = _.display_name()),
          (this.m_strIconURL = _.icon_hash()),
          (this.m_dtUpdatedFromServer = new Date()),
          (this.m_eAppType = _.app_type()))
        : (this.m_bInitialized = !1);
    }
    DeserializeFromCacheObject(_) {
      try {
        (this.m_strName = _.strName),
          (this.m_strIconURL = _.strIconURL),
          (this.m_dtUpdatedFromServer = new Date(_.strUpdatedFromServer)),
          (this.m_eAppType = _.eAppType),
          (this.m_bInitialized = !0);
      } catch {}
    }
    SerializeToCacheObject() {
      return (
        _(
          this.m_bInitialized,
          `Attempting to serialize an uninitialized AppInfo object for caching!`,
        ),
        this.m_bInitialized
          ? {
              strName: this.m_strName,
              strIconURL: this.m_strIconURL,
              strUpdatedFromServer: this.m_dtUpdatedFromServer.toJSON(),
              eAppType: this.m_eAppType,
            }
          : null
      );
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
            accept: {
              _: 2,
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
      return `CClan_RespondToClanInvite_Request`;
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
      return `CClan_RespondToClanInvite_Response`;
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
            rtime_oldest_date: {
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
      return `CClan_GetDraftAndRecentPartnerEventSnippet_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.snippets || _(_._()),
        _.Message.initialize(this, _, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            snippets: {
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
      return `CClan_GetDraftAndRecentPartnerEventSnippet_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.gid || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            gid: {
              _: 1,
              _: _.readFixed64String,
              _: _.writeFixed64String,
            },
            announcement_gid: {
              _: 2,
              _: _.readFixed64String,
              _: _.writeFixed64String,
            },
            hidden: {
              _: 3,
              _: _.readBool,
              _: _.writeBool,
            },
            published: {
              _: 4,
              _: _.readBool,
              _: _.writeBool,
            },
            rtime32_start_time: {
              _: 5,
              _: _.readUint32,
              _: _.writeUint32,
            },
            event_name: {
              _: 6,
              _: _.readString,
              _: _.writeString,
            },
            event_type: {
              _: 7,
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
      return `CClan_GetDraftAndRecentPartnerEventSnippet_Response_CEventSnippetData`;
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
            cursor: {
              _: 2,
              _: _.readString,
              _: _.writeString,
            },
            count: {
              _: 3,
              _: 100,
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
      return `CClan_GetPartnerEventsByBuildIDRange_Request`;
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
            start_build_id: {
              _: 2,
              _: _.readUint32,
              _: _.writeUint32,
            },
            end_build_id: {
              _: 3,
              _: _.readUint32,
              _: _.writeUint32,
            },
            branch: {
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
      return `CClan_GetPartnerEventsByBuildIDRange_Request_PatchNoteRange`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.matches || _(_._()),
        _.Message.initialize(this, _, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            matches: {
              _: 1,
              _: _,
              _: !0,
              _: !0,
            },
            num_total_results: {
              _: 2,
              _: _.readUint32,
              _: _.writeUint32,
            },
            next_cursor: {
              _: 3,
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
      return `CClan_GetPartnerEventsByBuildIDRange_Response`;
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
            build_id: {
              _: 2,
              _: _.readUint32,
              _: _.writeUint32,
            },
            branch: {
              _: 3,
              _: _.readString,
              _: _.writeString,
            },
            clan_event_gid: {
              _: 4,
              _: _.readFixed64String,
              _: _.writeFixed64String,
            },
            clan_account_id: {
              _: 5,
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
      return `CClan_GetPartnerEventsByBuildIDRange_Response_PatchNotesDesc`;
    }
  },
  _;
(function (_) {
  function _(_, _, _) {
    return _.SendMsg(`Clan.RespondToClanInvite#1`, _(_, _, _), _, {
      ePrivilege: 1,
    });
  }
  _.RespondToClanInvite = _;
  function _(_, _, _) {
    return _.SendMsg(
      `Clan.GetDraftAndRecentPartnerEventSnippet#1`,
      _(_, _, _),
      _,
      {
        bConstMethod: !0,
        ePrivilege: 1,
      },
    );
  }
  _.GetDraftAndRecentPartnerEventSnippet = _;
  function _(_, _, _) {
    return _.SendMsg(`Clan.GetPartnerEventsByBuildIDRange#1`, _(_, _, _), _, {
      bConstMethod: !0,
      ePrivilege: 1,
      eWebAPIKeyRequirement: 1,
    });
  }
  _.GetPartnerEventsByBuildIDRange = _;
})((_ ||= {}));
var _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.gid || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            gid: {
              _: 1,
              _: _.readFixed64String,
              _: _.writeFixed64String,
            },
            title: {
              _: 2,
              _: _.readString,
              _: _.writeString,
            },
            type: {
              _: 3,
              _: _.readEnum,
              _: _.writeEnum,
            },
            visibility: {
              _: 4,
              _: _.readEnum,
              _: _.writeEnum,
            },
            priority: {
              _: 5,
              _: _.readUint32,
              _: _.writeUint32,
            },
            association_type: {
              _: 6,
              _: _.readEnum,
              _: _.writeEnum,
            },
            associated_id: {
              _: 7,
              _: _.readUint32,
              _: _.writeUint32,
            },
            associated_name: {
              _: 8,
              _: _.readString,
              _: _.writeString,
            },
            start_date: {
              _: 9,
              _: _.readUint32,
              _: _.writeUint32,
            },
            end_date: {
              _: 10,
              _: _.readUint32,
              _: _.writeUint32,
            },
            country_allow: {
              _: 11,
              _: _.readString,
              _: _.writeString,
            },
            country_deny: {
              _: 12,
              _: _.readString,
              _: _.writeString,
            },
            ownership_restrictions_overridden: {
              _: 13,
              _: _.readBool,
              _: _.writeBool,
            },
            must_own_appid: {
              _: 14,
              _: _.readUint32,
              _: _.writeUint32,
            },
            must_not_own_appid: {
              _: 15,
              _: _.readUint32,
              _: _.writeUint32,
            },
            must_own_packageid: {
              _: 16,
              _: _.readUint32,
              _: _.writeUint32,
            },
            must_not_own_packageid: {
              _: 17,
              _: _.readUint32,
              _: _.writeUint32,
            },
            must_have_launched_appid: {
              _: 18,
              _: _.readUint32,
              _: _.writeUint32,
            },
            additional_restrictions: {
              _: 19,
              _: _.readString,
              _: _.writeString,
            },
            template_type: {
              _: 20,
              _: _.readString,
              _: _.writeString,
            },
            template_vars: {
              _: 21,
              _: _.readString,
              _: _.writeString,
            },
            flags: {
              _: 22,
              _: _.readUint32,
              _: _.writeUint32,
            },
            creator_name: {
              _: 23,
              _: _.readString,
              _: _.writeString,
            },
            template_vars_json: {
              _: 24,
              _: _.readString,
              _: _.writeString,
            },
            additional_restrictions_json: {
              _: 25,
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
      return `CMarketingMessageProto`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.gid || _(_._()),
        _.Message.initialize(this, _, 0, -1, [12], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            gid: {
              _: 1,
              _: _.readFixed64String,
              _: _.writeFixed64String,
            },
            title: {
              _: 2,
              _: _.readString,
              _: _.writeString,
            },
            type: {
              _: 3,
              _: _.readEnum,
              _: _.writeEnum,
            },
            associated_item_id: {
              _: 4,
              _: _,
            },
            associated_item: {
              _: 5,
              _: _,
            },
            associated_name: {
              _: 6,
              _: _.readString,
              _: _.writeString,
            },
            template_type: {
              _: 10,
              _: _.readString,
              _: _.writeString,
            },
            template_vars_json: {
              _: 11,
              _: _.readString,
              _: _.writeString,
            },
            recommended_items: {
              _: 12,
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
      return `CDisplayMarketingMessage`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.country || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            country: {
              _: 1,
              _: _.readString,
              _: _.writeString,
            },
            anonymous_user: {
              _: 2,
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
      return `CMarketingMessages_GetActiveMarketingMessages_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.messages || _(_._()),
        _.Message.initialize(this, _, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            messages: {
              _: 1,
              _: _,
              _: !0,
              _: !0,
            },
            time_next_message_age: {
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
      return `CMarketingMessages_GetActiveMarketingMessages_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.start_past_days || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            start_past_days: {
              _: 1,
              _: _.readUint32,
              _: _.writeUint32,
            },
            upto_past_days: {
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
      return `CMarketingMessages_GetPastMarketingMessages_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.messages || _(_._()),
        _.Message.initialize(this, _, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            messages: {
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
      return `CMarketingMessages_GetPastMarketingMessages_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.include_seen_messages || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            include_seen_messages: {
              _: 1,
              _: _.readBool,
              _: _.writeBool,
            },
            country_code: {
              _: 2,
              _: _.readString,
              _: _.writeString,
            },
            elanguage: {
              _: 3,
              _: _.readInt32,
              _: _.writeInt32,
            },
            operating_system: {
              _: 4,
              _: _.readInt32,
              _: _.writeInt32,
            },
            client_package_version: {
              _: 5,
              _: _.readInt32,
              _: _.writeInt32,
            },
            context: {
              _: 6,
              _: _,
            },
            data_request: {
              _: 7,
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
      return `CMarketingMessages_GetMarketingMessagesForUser_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.messages || _(_._()),
        _.Message.initialize(this, _, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            messages: {
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
      return `CMarketingMessages_GetMarketingMessagesForUser_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.already_seen || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            already_seen: {
              _: 1,
              _: _.readBool,
              _: _.writeBool,
            },
            message: {
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
      return `CMarketingMessages_GetMarketingMessagesForUser_Response_MarketingMessageForUser`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.country_code || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            country_code: {
              _: 2,
              _: _.readString,
              _: _.writeString,
            },
            elanguage: {
              _: 3,
              _: _.readInt32,
              _: _.writeInt32,
            },
            operating_system: {
              _: 4,
              _: _.readInt32,
              _: _.writeInt32,
            },
            client_package_version: {
              _: 5,
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
      return `CMarketingMessages_DoesUserHavePendingMarketingMessages_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.has_pending_messages || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            has_pending_messages: {
              _: 1,
              _: _.readBool,
              _: _.writeBool,
            },
            pending_message_count: {
              _: 2,
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
      return `CMarketingMessages_DoesUserHavePendingMarketingMessages_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.gid || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            gid: {
              _: 1,
              _: _.readFixed64String,
              _: _.writeFixed64String,
            },
            context: {
              _: 2,
              _: _,
            },
            data_request: {
              _: 3,
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
      return `CMarketingMessages_GetDisplayMarketingMessage_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.message || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            message: {
              _: 1,
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
      return `CMarketingMessages_GetDisplayMarketingMessage_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.gid || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            gid: {
              _: 1,
              _: _.readFixed64String,
              _: _.writeFixed64String,
            },
            display_index: {
              _: 2,
              _: 0,
              _: _.readUint32,
              _: _.writeUint32,
            },
            template_type: {
              _: 3,
              _: 0,
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
      return `CMarketingMessages_MarkMessageSeen_Notification`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.gid || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            gid: {
              _: 1,
              _: _.readFixed64String,
              _: _.writeFixed64String,
            },
            display_index: {
              _: 2,
              _: 0,
              _: _.readUint32,
              _: _.writeUint32,
            },
            template_type: {
              _: 3,
              _: 0,
              _: _.readEnum,
              _: _.writeEnum,
            },
            click_location: {
              _: 4,
              _: 0,
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
      return `CMarketingMessages_MarkMessageClicked_Notification`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.gid || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            gid: {
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
      return `CMarketingMessages_GetMarketingMessage_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.message || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            message: {
              _: 1,
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
      return `CMarketingMessages_GetMarketingMessage_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.lookup_type || _(_._()),
        _.Message.initialize(this, _, 0, -1, [4], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            lookup_type: {
              _: 1,
              _: _.readEnum,
              _: _.writeEnum,
            },
            gid: {
              _: 2,
              _: _.readFixed64String,
              _: _.writeFixed64String,
            },
            message_type: {
              _: 3,
              _: _.readEnum,
              _: _.writeEnum,
            },
            gidlist: {
              _: 4,
              _: !0,
              _: !0,
              _: _.readFixed64String,
              pbr: _.readPackedFixed64String,
              _: _.writeRepeatedFixed64String,
            },
            title: {
              _: 5,
              _: _.readString,
              _: _.writeString,
            },
            associated_id: {
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
      return `CMarketingMessages_FindMarketingMessages_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.messages || _(_._()),
        _.Message.initialize(this, _, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            messages: {
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
      return `CMarketingMessages_FindMarketingMessages_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.message || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            message: {
              _: 1,
              _: _,
            },
            from_json: {
              _: 2,
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
      return `CMarketingMessages_CreateMarketingMessage_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.gid || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            gid: {
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
      return `CMarketingMessages_CreateMarketingMessage_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.gid || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            gid: {
              _: 1,
              _: _.readFixed64String,
              _: _.writeFixed64String,
            },
            message: {
              _: 2,
              _: _,
            },
            from_json: {
              _: 3,
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
      return `CMarketingMessages_UpdateMarketingMessage_Request`;
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
      return `CMarketingMessages_UpdateMarketingMessage_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.gid || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            gid: {
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
      return `CMarketingMessages_DeleteMarketingMessage_Request`;
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
      return `CMarketingMessages_DeleteMarketingMessage_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.gid || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            gid: {
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
      return `CMarketingMessages_GetMarketingMessageViewerStats_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.rt_time_hour || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            rt_time_hour: {
              _: 1,
              _: _.readUint32,
              _: _.writeUint32,
            },
            seen_count: {
              _: 2,
              _: _.readUint32,
              _: _.writeUint32,
            },
            template_type: {
              _: 3,
              _: _.readEnum,
              _: _.writeEnum,
            },
            display_index: {
              _: 4,
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
      return `CMarketingMessageHourlyStats`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.stats || _(_._()),
        _.Message.initialize(this, _, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            stats: {
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
      return `CMarketingMessages_GetMarketingMessageViewerStats_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.rt_start_time || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            rt_start_time: {
              _: 1,
              _: _.readUint32,
              _: _.writeUint32,
            },
            rt_end_time: {
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
      return `CMarketingMessages_GetMarketingMessagesViewerRangeStats_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.rt_time_hour || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            rt_time_hour: {
              _: 1,
              _: _.readUint32,
              _: _.writeUint32,
            },
            clicked_count: {
              _: 2,
              _: _.readUint32,
              _: _.writeUint32,
            },
            display_index: {
              _: 3,
              _: _.readUint32,
              _: _.writeUint32,
            },
            template_type: {
              _: 4,
              _: _.readEnum,
              _: _.writeEnum,
            },
            click_location: {
              _: 5,
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
      return `CMarketingMessageClickedHourlyStats`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.stats || _(_._()),
        _.Message.initialize(this, _, 0, -1, [1, 2], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            stats: {
              _: 1,
              _: _,
              _: !0,
              _: !0,
            },
            clicked_stats: {
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
      return `CMarketingMessages_GetMarketingMessagesViewerRangeStats_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.gid || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            gid: {
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
      return `CMarketingMessages_GetMarketingMessageClickedStats_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.stats || _(_._()),
        _.Message.initialize(this, _, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            stats: {
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
      return `CMarketingMessages_GetMarketingMessageClickedStats_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.partnerid || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            partnerid: {
              _: 1,
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
      return `CMarketingMessages_GetPartnerReadyToPublishMessages_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.messages || _(_._()),
        _.Message.initialize(this, _, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            messages: {
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
      return `CMarketingMessages_GetPartnerReadyToPublishMessages_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.gid || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            gid: {
              _: 1,
              _: _.readFixed64String,
              _: _.writeFixed64String,
            },
            partnerid: {
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
      return `CMarketingMessages_PartnerPublishMessage_Request`;
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
      return `CMarketingMessages_PartnerPublishMessage_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.gid || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            gid: {
              _: 1,
              _: _.readFixed64String,
              _: _.writeFixed64String,
            },
            partnerid: {
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
      return `CMarketingMessages_GetPartnerMessagePreview_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.message || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            message: {
              _: 1,
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
      return `CMarketingMessages_GetPartnerMessagePreview_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.appids || _(_._()),
        _.Message.initialize(this, _, 0, -1, [1], null);
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
      return `CMarketingMessage_GetMarketingMessagesForApps_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.messages || _(_._()),
        _.Message.initialize(this, _, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            messages: {
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
      return `CMarketingMessage_GetMarketingMessagesForApps_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.partnerid || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            partnerid: {
              _: 1,
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
      return `CMarketingMessage_GetMarketingMessagesForPartner_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.messages || _(_._()),
        _.Message.initialize(this, _, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            messages: {
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
      return `CMarketingMessage_GetMarketingMessagesForPartner_Response`;
    }
  },
  _;
(function (_) {
  function _(_, _, _) {
    return _.SendMsg(
      `MarketingMessages.GetActiveMarketingMessages#1`,
      _(_, _, _),
      _,
      {
        bConstMethod: !0,
        ePrivilege: 0,
        eWebAPIKeyRequirement: 1,
      },
    );
  }
  _.GetActiveMarketingMessages = _;
  function _(_, _, _) {
    return _.SendMsg(
      `MarketingMessages.GetPastMarketingMessages#1`,
      _(_, _, _),
      _,
      {
        bConstMethod: !0,
        ePrivilege: 4,
      },
    );
  }
  _.GetPastMarketingMessages = _;
  function _(_, _, _) {
    return _.SendMsg(
      `MarketingMessages.GetMarketingMessagesForUser#1`,
      _(_, _, _),
      _,
      {
        bConstMethod: !0,
        ePrivilege: 1,
      },
    );
  }
  _.GetMarketingMessagesForUser = _;
  function _(_, _, _) {
    return _.SendMsg(
      `MarketingMessages.DoesUserHavePendingMarketingMessages#1`,
      _(_, _, _),
      _,
      {
        bConstMethod: !0,
        ePrivilege: 1,
      },
    );
  }
  _.DoesUserHavePendingMarketingMessages = _;
  function _(_, _, _) {
    return _.SendMsg(
      `MarketingMessages.GetDisplayMarketingMessage#1`,
      _(_, _, _),
      _,
      {
        bConstMethod: !0,
        ePrivilege: 0,
        eWebAPIKeyRequirement: 1,
      },
    );
  }
  _.GetDisplayMarketingMessage = _;
  function _(_, _, _) {
    return _.SendMsg(
      `MarketingMessages.GetDisplayMarketingMessageForUser#1`,
      _(_, _, _),
      _,
      {
        bConstMethod: !0,
        ePrivilege: 1,
      },
    );
  }
  _.GetDisplayMarketingMessageForUser = _;
  function _(_, _, _) {
    return _.SendMsg(
      `MarketingMessages.GetDisplayMarketingMessageAdmin#1`,
      _(_, _, _),
      _,
      {
        bConstMethod: !0,
        ePrivilege: 4,
      },
    );
  }
  _.GetDisplayMarketingMessageAdmin = _;
  function _(_, _) {
    return _.SendNotification(`MarketingMessages.MarkMessageSeen#1`, _(_, _), {
      ePrivilege: 1,
    });
  }
  _.MarkMessageSeen = _;
  function _(_, _) {
    return _.SendNotification(
      `MarketingMessages.MarkMessageClicked#1`,
      _(_, _),
      {
        ePrivilege: 1,
      },
    );
  }
  _.MarkMessageClicked = _;
  function _(_, _, _) {
    return _.SendMsg(`MarketingMessages.GetMarketingMessage#1`, _(_, _, _), _, {
      ePrivilege: 2,
      eWebAPIKeyRequirement: 1,
    });
  }
  _.GetMarketingMessage = _;
  function _(_, _, _) {
    return _.SendMsg(
      `MarketingMessages.CreateMarketingMessage#1`,
      _(_, _, _),
      _,
      {
        ePrivilege: 4,
      },
    );
  }
  _.CreateMarketingMessage = _;
  function _(_, _, _) {
    return _.SendMsg(
      `MarketingMessages.UpdateMarketingMessage#1`,
      _(_, _, _),
      _,
      {
        ePrivilege: 5,
      },
    );
  }
  _.UpdateMarketingMessage = _;
  function _(_, _, _) {
    return _.SendMsg(
      `MarketingMessages.DeleteMarketingMessage#1`,
      _(_, _, _),
      _,
      {
        ePrivilege: 4,
      },
    );
  }
  _.DeleteMarketingMessage = _;
  function _(_, _, _) {
    return _.SendMsg(
      `MarketingMessages.FindMarketingMessages#1`,
      _(_, _, _),
      _,
      {
        ePrivilege: 5,
      },
    );
  }
  _.FindMarketingMessages = _;
  function _(_, _, _) {
    return _.SendMsg(
      `MarketingMessages.GetMarketingMessageViewerStats#1`,
      _(_, _, _),
      _,
      {
        ePrivilege: 4,
      },
    );
  }
  _.GetMarketingMessageViewerStats = _;
  function _(_, _, _) {
    return _.SendMsg(
      `MarketingMessages.GetMarketingMessagesViewerRangeStats#1`,
      _(_, _, _),
      _,
      {
        ePrivilege: 4,
      },
    );
  }
  _.GetMarketingMessagesViewerRangeStats = _;
  function _(_, _, _) {
    return _.SendMsg(
      `MarketingMessages.GetMarketingMessageClickedStats#1`,
      _(_, _, _),
      _,
      {
        ePrivilege: 4,
      },
    );
  }
  _.GetMarketingMessageClickedStats = _;
  function _(_, _, _) {
    return _.SendMsg(
      `MarketingMessages.GetPartnerReadyToPublishMessages#1`,
      _(_, _, _),
      _,
      {
        bConstMethod: !0,
        ePrivilege: 1,
        eWebAPIKeyRequirement: 2,
      },
    );
  }
  _.GetPartnerReadyToPublishMessages = _;
  function _(_, _, _) {
    return _.SendMsg(
      `MarketingMessages.PublishPartnerMessage#1`,
      _(_, _, _),
      _,
      {
        bConstMethod: !0,
        ePrivilege: 1,
        eWebAPIKeyRequirement: 2,
      },
    );
  }
  _.PublishPartnerMessage = _;
  function _(_, _, _) {
    return _.SendMsg(
      `MarketingMessages.GetPartnerMessagePreview#1`,
      _(_, _, _),
      _,
      {
        bConstMethod: !0,
        ePrivilege: 1,
        eWebAPIKeyRequirement: 2,
      },
    );
  }
  _.GetPartnerMessagePreview = _;
  function _(_, _, _) {
    return _.SendMsg(
      `MarketingMessages.GetMarketingMessagesForPartner#1`,
      _(_, _, _),
      _,
      {
        bConstMethod: !0,
        ePrivilege: 1,
        eWebAPIKeyRequirement: 2,
      },
    );
  }
  _.GetMarketingMessagesForPartner = _;
  function _(_, _, _) {
    return _.SendMsg(
      `MarketingMessages.GetMarketingMessagesForApps#1`,
      _(_, _, _),
      _,
      {
        ePrivilege: 4,
      },
    );
  }
  _.GetMarketingMessagesForApps = _;
})((_ ||= {}));
var _ = [`app`, `sub`, `bundle`];
function _(_) {
  return _.includes(_);
}
var _ = class _ {
  m_eItemType;
  m_unID;
  m_bVisible = !1;
  m_strName;
  m_strStoreURLPath;
  m_unAppID;
  m_eAppType;
  m_rgIncludedAppTypes;
  m_rgIncludedAppIDs;
  m_bIsFree;
  m_bIsFreeTemporary;
  m_bIsComingSoon;
  m_bIsEarlyAccess;
  m_RelatedItems;
  m_ContentDescriptorIDs;
  m_StoreCategories;
  m_ReviewInfo;
  m_BasicInfo;
  m_rgStoreTags = [];
  m_rgStoreTagIDs = [];
  m_Assets;
  m_AssetsWithoutOverrides;
  m_ReleaseInfo;
  m_Platforms;
  m_BestPurchaseOption;
  m_SelfPurchaseOption;
  m_rgPurchaseOptions;
  m_Screenshots;
  m_Trailers;
  m_rgSupportedLanguages;
  m_strStoreURLPathOverride;
  m_freeWeekend;
  m_DataRequested = {
    include_tag_count: 0,
  };
  m_strInternalName;
  m_rgLinks;
  m_userFilterFailure;
  m_strFullDescriptionBBCode;
  constructor(_, _) {
    (this.m_eItemType = _.item_type()),
      (this.m_unID = _._()),
      (this.m_bVisible = !!_.visible()),
      (this.m_strName = _.name()),
      (this.m_strStoreURLPath = _.store_url_path()),
      (this.m_unAppID = _.appid()),
      (this.m_eAppType = _.type()),
      (this.m_rgIncludedAppTypes = _.included_types()),
      (this.m_rgIncludedAppIDs = _.included_appids()),
      (this.m_bIsFree = !!_.is_free()),
      (this.m_bIsFreeTemporary = !!_.is_free_temporarily()),
      (this.m_bIsComingSoon =
        !!_.is_coming_soon() || !!_.release()?.is_coming_soon()),
      (this.m_bIsEarlyAccess = !!_.is_early_access()),
      (this.m_RelatedItems = _.related_items()?.toObject()),
      (this.m_ContentDescriptorIDs = _.content_descriptorids()),
      (this.m_StoreCategories = _.categories().toObject()),
      (this.m_BestPurchaseOption = _.best_purchase_option()?.toObject()),
      (this.m_strStoreURLPathOverride = _.store_url_path_override()),
      (this.m_freeWeekend = _.free_weekend()?.toObject()),
      (this.m_strInternalName = _.internal_name()),
      (this.m_eItemType == 1 || this.m_eItemType == 2) &&
        (this.m_SelfPurchaseOption = _.self_purchase_option(!1)
          ? _.self_purchase_option().toObject()
          : this.m_BestPurchaseOption),
      this.MergeData(_, _);
  }
  MergeData(_, _) {
    _.include_assets &&
      !this.m_Assets &&
      ((this.m_Assets = new _(_.assets(), _._())),
      (this.m_DataRequested.include_assets = !0)),
      _.include_assets_without_overrides &&
        !this.m_AssetsWithoutOverrides &&
        ((this.m_AssetsWithoutOverrides = new _(
          _.assets_without_overrides(),
          _._(),
        )),
        (this.m_DataRequested.include_assets_without_overrides = !0)),
      _.include_release &&
        !this.m_ReleaseInfo &&
        ((this.m_ReleaseInfo = _.release().toObject()),
        (this.m_DataRequested.include_release = !0)),
      _.include_platforms &&
        !this.m_Platforms &&
        ((this.m_Platforms = _.platforms().toObject()),
        (this.m_DataRequested.include_platforms = !0)),
      _.include_all_purchase_options &&
        !this.m_rgPurchaseOptions &&
        ((this.m_rgPurchaseOptions = _.purchase_options().map((_) =>
          _.toObject(),
        )),
        (this.m_DataRequested.include_all_purchase_options = !0)),
      _.include_screenshots &&
        !this.m_Screenshots &&
        ((this.m_Screenshots = new _(_.screenshots())),
        (this.m_DataRequested.include_screenshots = !0)),
      _.include_trailers &&
        !this.m_Trailers &&
        ((this.m_Trailers = new _(_.trailers())),
        (this.m_DataRequested.include_trailers = !0)),
      _.include_tag_count &&
        _.include_tag_count > this.m_rgStoreTags.length &&
        this.m_DataRequested.include_tag_count < _.include_tag_count &&
        ((this.m_rgStoreTags = _.tags().map((_) => _.toObject())),
        (this.m_rgStoreTagIDs = this.m_rgStoreTags.map((_) => _.tagid)),
        (this.m_DataRequested.include_tag_count = Math.max(
          _.include_tag_count,
          this.m_rgStoreTags.length || 0,
        ))),
      _.include_reviews &&
        !this.m_ReviewInfo &&
        ((this.m_ReviewInfo = _.reviews().toObject()),
        (this.m_DataRequested.include_reviews = !0)),
      _.include_basic_info &&
        !this.m_BasicInfo &&
        ((this.m_BasicInfo = _.basic_info().toObject()),
        (this.m_DataRequested.include_basic_info = !0)),
      _.include_supported_languages &&
        !this.m_rgSupportedLanguages &&
        ((this.m_rgSupportedLanguages = _.supported_languages().map((_) =>
          _.toObject(),
        )),
        (this.m_DataRequested.include_supported_languages = !0)),
      _.include_links &&
        !this.m_rgLinks &&
        ((this.m_rgLinks = _.links().map((_) => _.toObject())),
        (this.m_DataRequested.include_links = !0)),
      _.apply_user_filters &&
        !this.m_userFilterFailure &&
        ((this.m_userFilterFailure = _.user_filter_failure()?.toObject()),
        (this.m_DataRequested.apply_user_filters = !0)),
      _.include_full_description &&
        !this.m_strFullDescriptionBBCode &&
        ((this.m_strFullDescriptionBBCode = _.full_description_bbcode()),
        (this.m_DataRequested.include_full_description = !0));
  }
  static BDataRequestContainsOtherDataRequest(_, _) {
    return !!(
      (!_.include_assets || _.include_assets) &&
      (!_.include_assets_without_overrides ||
        _.include_assets_without_overrides) &&
      (!_.include_release || _.include_release) &&
      (!_.include_platforms || _.include_platforms) &&
      (!_.include_all_purchase_options || _.include_all_purchase_options) &&
      (!_.include_screenshots || _.include_screenshots) &&
      (!_.include_trailers || _.include_trailers) &&
      (!_.include_ratings || _.include_ratings) &&
      (!_.include_tag_count ||
        (_.include_tag_count || 0) >= _.include_tag_count) &&
      (!_.include_reviews || _.include_reviews) &&
      (!_.include_basic_info || _.include_basic_info) &&
      (!_.include_supported_languages || _.include_supported_languages) &&
      (!_.include_full_description || _.include_full_description) &&
      (!_.include_links || _.include_links)
    );
  }
  BContainDataRequest(_) {
    return _.BDataRequestContainsOtherDataRequest(this.m_DataRequested, _);
  }
  BCheckDataRequestIncluded(_) {}
  GetStoreItemType() {
    return this.m_eItemType;
  }
  GetID() {
    return this.m_unID;
  }
  GetUniqueID() {
    return this.m_eItemType + `_` + this.m_unID;
  }
  BIsVisible() {
    return this.m_bVisible;
  }
  GetName() {
    return this.m_strName;
  }
  GetStorePageURL(_ = !1) {
    return _ && this.HasDemoStandaloneStorePage()
      ? _.STORE_BASE_URL + `app/` + this.GetDemoStandaloneStorePageAppIDs()[0]
      : _.STORE_BASE_URL + this.m_strStoreURLPath;
  }
  GetStorePageURLWithOverride() {
    return this.m_strStoreURLPathOverride &&
      this.m_strStoreURLPathOverride.length > 0
      ? this.GetStorePageURLOverride()
      : this.GetStorePageURL();
  }
  GetStorePageURLOverride() {
    return this.m_strStoreURLPathOverride;
  }
  GetCommunityPageURL() {
    return this.GetAppID()
      ? _.COMMUNITY_BASE_URL + `app/` + this.GetAppID()
      : null;
  }
  GetCommunityDiscussionForumsURL() {
    return this.GetAppID()
      ? _.COMMUNITY_BASE_URL + `app/` + this.GetAppID() + `/discussions/`
      : null;
  }
  GetAppID() {
    return this.m_unAppID;
  }
  GetAppType() {
    return this.m_eAppType;
  }
  BIsApplicationOrTool() {
    return this.GetAppType() == 6 || this.GetAppType() == 13;
  }
  k_regexSalePage =
    /^https?:\/\/[^\/]*(?:valvesoftware|steampowered).com\/(?:(curator|dev|developer|pub|publisher|franchise)\/[0-9a-zA-Z\-_]+\/)?sale\//;
  BIsSalePage() {
    return (
      this.GetStoreItemType() === 0 &&
      this.k_regexSalePage.test(this.GetStorePageURLWithOverride())
    );
  }
  GetSalePageVanityURL() {
    let _ = this.GetStorePageURLWithOverride();
    return (
      this.GetStoreItemType() === 0 &&
        ((_ = this.GetStorePageURLWithOverride().replace(
          this.k_regexSalePage,
          ``,
        )),
        _.endsWith(`/`) && (_ = _.replace(`/`, ``))),
      _
    );
  }
  GetIncludedAppTypes() {
    return this.m_rgIncludedAppTypes;
  }
  GetIncludedAppIDs() {
    return this.m_rgIncludedAppIDs;
  }
  GetIncludedAppIDsOrSelf() {
    return this.GetStoreItemType() == 0
      ? [this.GetID()]
      : this.GetIncludedAppIDs();
  }
  BIsFree() {
    return this.m_bIsFree;
  }
  BIsFreeTemporary() {
    return this.m_bIsFreeTemporary;
  }
  BIsFreeWeekend() {
    let _ = Date.now() / 1e3;
    return (
      !!this.m_freeWeekend &&
      this.m_freeWeekend.start_time <= _ &&
      _ <= this.m_freeWeekend.end_time
    );
  }
  GetFreeWeekendEnd() {
    return this.m_freeWeekend?.end_time;
  }
  GetFreeWeekendPlayTextOverride() {
    return this.m_freeWeekend?.text;
  }
  BIsEarlyAccess() {
    return this.m_bIsEarlyAccess;
  }
  GetParentAppID() {
    return this.m_RelatedItems?.parent_appid;
  }
  BHasDemo() {
    return (this.m_RelatedItems?.demo_appid?.length ?? 0) > 0;
  }
  GetDemoAppIDs() {
    return this.m_RelatedItems?.demo_appid ?? [];
  }
  HasDemoStandaloneStorePage() {
    return (this.m_RelatedItems?.standalone_demo_appid?.length ?? 0) > 0;
  }
  GetDemoStandaloneStorePageAppIDs() {
    return this.m_RelatedItems?.standalone_demo_appid ?? [];
  }
  GetContentDescriptorIDs() {
    return this.m_ContentDescriptorIDs;
  }
  HasContentDescriptorID(_) {
    return this.m_ContentDescriptorIDs?.includes(_);
  }
  GetStoreCategories_SupportedPlayers() {
    return this.m_StoreCategories?.supported_player_categoryids || [];
  }
  GetStoreCategories_Features() {
    return this.m_StoreCategories?.feature_categoryids || [];
  }
  GetStoreCategories_Controller() {
    return this.m_StoreCategories?.controller_categoryids || [];
  }
  BHasStoreCategory(_) {
    return !!(
      this.GetStoreCategories_SupportedPlayers().find((_) => _ === _) ||
      this.GetStoreCategories_Features().find((_) => _ === _) ||
      this.GetStoreCategories_Controller().find((_) => _ === _)
    );
  }
  GetFilteredReviewSummary() {
    return (
      this.BCheckDataRequestIncluded({
        include_reviews: !0,
      }),
      this.m_ReviewInfo?.summary_filtered
    );
  }
  GetUnfilteredReviewSummary() {
    return (
      this.BCheckDataRequestIncluded({
        include_reviews: !0,
      }),
      this.m_ReviewInfo?.summary_unfiltered ||
        this.m_ReviewInfo?.summary_filtered
    );
  }
  GetFilteredReviewSummaryLanguage() {
    return (
      this.BCheckDataRequestIncluded({
        include_reviews: !0,
      }),
      this.m_ReviewInfo?.summary_language_specific
    );
  }
  GetFullDescriptionBBCode() {
    return (
      this.BCheckDataRequestIncluded({
        include_full_description: !0,
      }),
      this.m_strFullDescriptionBBCode
    );
  }
  GetShortDescription() {
    return (
      this.BCheckDataRequestIncluded({
        include_basic_info: !0,
      }),
      this.m_BasicInfo?.short_description ?? ``
    );
  }
  GetDeveloperNames() {
    return (
      this.BCheckDataRequestIncluded({
        include_basic_info: !0,
      }),
      this.m_BasicInfo?.developers
        ?.map((_) => _.name.trim())
        ?.filter((_) => _?.length > 0) ?? []
    );
  }
  GetFranchiseNames() {
    return (
      this.BCheckDataRequestIncluded({
        include_basic_info: !0,
      }),
      this.m_BasicInfo?.franchises
        ?.map((_) => _.name.trim())
        ?.filter((_) => _?.length > 0) ?? []
    );
  }
  GetPublisherNames() {
    this.BCheckDataRequestIncluded({
      include_basic_info: !0,
    });
    let _ =
      this.m_BasicInfo?.publishers
        ?.map((_) => _.name.trim())
        ?.filter((_) => _?.length > 0) ?? [];
    return _?.length > 0 ? _ : this.GetDeveloperNames();
  }
  GetAllCreatorClanIDs() {
    return (
      this.BCheckDataRequestIncluded({
        include_basic_info: !0,
      }),
      this.m_BasicInfo
        ? _([
            ...this.m_BasicInfo.developers,
            ...this.m_BasicInfo.publishers,
            ...this.m_BasicInfo.franchises,
          ])
        : []
    );
  }
  GetAllPublisherCreatorClans() {
    return (
      this.BCheckDataRequestIncluded({
        include_basic_info: !0,
      }),
      this.m_BasicInfo ? _(this.m_BasicInfo.publishers) : []
    );
  }
  GetAllDeveloperCreatorClans() {
    return (
      this.BCheckDataRequestIncluded({
        include_basic_info: !0,
      }),
      this.m_BasicInfo ? _(this.m_BasicInfo.developers) : []
    );
  }
  GetAllFranchiseCreatorClans() {
    return (
      this.BCheckDataRequestIncluded({
        include_basic_info: !0,
      }),
      this.m_BasicInfo ? _(this.m_BasicInfo.franchises) : []
    );
  }
  GetCapsuleHeadline() {
    return (
      this.BCheckDataRequestIncluded({
        include_basic_info: !0,
      }),
      this.m_BasicInfo?.capsule_headline
    );
  }
  GetTags() {
    return (
      this.BCheckDataRequestIncluded({
        include_tag_count: 1,
      }),
      this.m_rgStoreTags
    );
  }
  GetTagIDs() {
    return (
      this.BCheckDataRequestIncluded({
        include_tag_count: 1,
      }),
      this.m_rgStoreTagIDs
    );
  }
  BHasTags() {
    return (
      this.BCheckDataRequestIncluded({
        include_tag_count: 1,
      }),
      this.m_rgStoreTagIDs?.length > 0
    );
  }
  GetAssets() {
    return (
      this.BCheckDataRequestIncluded({
        include_assets: !0,
      }),
      this.m_Assets
    );
  }
  GetAssetsWithoutOverrides() {
    return (
      this.BCheckDataRequestIncluded({
        include_assets_without_overrides: !0,
      }),
      this.m_AssetsWithoutOverrides
    );
  }
  GetOriginalReleaseDateRTime() {
    this.BCheckDataRequestIncluded({
      include_release: !0,
    });
    let _ = this.m_ReleaseInfo?.original_steam_release_date;
    return (_ ||= this.GetReleaseDateRTime()), _;
  }
  GetReleaseDateRTime(_ = !1) {
    if (
      (this.BCheckDataRequestIncluded({
        include_release: !0,
      }),
      this.m_ReleaseInfo?.is_coming_soon && !_)
    )
      return 0;
    let _ = this.m_ReleaseInfo?.steam_release_date;
    return (_ ||= this.m_ReleaseInfo?.original_release_date), _;
  }
  GetFormattedSteamReleaseDate() {
    if (
      (this.BCheckDataRequestIncluded({
        include_release: !0,
      }),
      this.m_ReleaseInfo?.is_coming_soon)
    ) {
      if (this.m_ReleaseInfo?.coming_soon_display) return _(this.m_ReleaseInfo);
      if (this.m_ReleaseInfo?.custom_release_date_message)
        return this.m_ReleaseInfo.custom_release_date_message;
      let _ = this.m_ReleaseInfo?.steam_release_date;
      return _
        ? this.m_ReleaseInfo?.is_abridged_release_date
          ? _(new Date(_ * 1e3))
          : _(_)
        : ``;
    }
    let _ = this.GetReleaseDateRTime();
    return _ ? _(_) : ``;
  }
  BIsComingSoon() {
    return this.m_bIsComingSoon;
  }
  BIsCustomComingSoonDisplay() {
    return (
      this.BCheckDataRequestIncluded({
        include_release: !0,
      }),
      this.BIsComingSoon()
        ? this.m_ReleaseInfo?.coming_soon_display
          ? [`text_tba`, `text_comingsoon`].includes(
              this.m_ReleaseInfo.coming_soon_display,
            )
          : !!this.m_ReleaseInfo?.custom_release_date_message
        : !1
    );
  }
  BLimitedLaunchActive() {
    return this.m_ReleaseInfo?.limited_launch_active;
  }
  BIsPrePurchase() {
    return this.BIsComingSoon() && !!this.GetBestPurchaseOption()?.packageid;
  }
  BIsReleased() {
    return !this.BIsComingSoon();
  }
  GetPlatforms() {
    return (
      this.BCheckDataRequestIncluded({
        include_platforms: !0,
      }),
      this.m_Platforms
    );
  }
  GetBestPurchaseOption() {
    return this.m_BestPurchaseOption;
  }
  GetBestPurchasePriceInCents() {
    if (this.m_BestPurchaseOption?.final_price_in_cents)
      return Number.parseInt(this.m_BestPurchaseOption.final_price_in_cents);
  }
  GetBestPurchasePriceFormatted() {
    return this.m_BestPurchaseOption?.formatted_final_price;
  }
  GetBestPurchaseOriginalPriceInCents() {
    return this.m_BestPurchaseOption?.original_price_in_cents
      ? Number.parseInt(this.m_BestPurchaseOption.final_price_in_cents)
      : this.GetBestPurchasePriceInCents();
  }
  GetBestPurchaseOriginalPriceFormatted() {
    return (
      this.m_BestPurchaseOption?.formatted_original_price ??
      this.m_BestPurchaseOption?.formatted_final_price
    );
  }
  GetAllPurchaseOptions() {
    return (
      this.BCheckDataRequestIncluded({
        include_all_purchase_options: !0,
      }),
      this.m_rgPurchaseOptions
    );
  }
  GetSelfPurchaseOption() {
    return this.m_SelfPurchaseOption;
  }
  BHasAgeSafeScreenshots() {
    return this.GetScreenshots(!0).length > 0;
  }
  GetScreenshots(_) {
    return (
      this.BCheckDataRequestIncluded({
        include_screenshots: !0,
      }),
      this.m_Screenshots
        ? _
          ? this.m_Screenshots.GetOnlyAllAgesScreenshots()
          : this.m_Screenshots.GetAllAgesAndMatureScreenshots()
        : []
    );
  }
  BIsAgeSafeScreenshot(_) {
    return this.m_Screenshots.GetOnlyAllAgesScreenshots().includes(_);
  }
  BHasTrailers(_) {
    return (
      this.BCheckDataRequestIncluded({
        include_trailers: !0,
      }),
      this.m_Trailers?.BHasTrailers(_)
    );
  }
  BHasHighlightTrailers(_) {
    return (
      this.BCheckDataRequestIncluded({
        include_trailers: !0,
      }),
      (this.m_Trailers?.GetHighlightTrailers(_)?.length ?? 0) > 0
    );
  }
  GetAllTrailers() {
    return (
      this.BCheckDataRequestIncluded({
        include_trailers: !0,
      }),
      this.m_Trailers
    );
  }
  BHasSomeLanguageSupport(_) {
    return (
      this.BCheckDataRequestIncluded({
        include_supported_languages: !0,
      }),
      this.m_rgSupportedLanguages?.some(
        (_) => _.elanguage == _ && (_.supported || _.subtitles || _.full_audio),
      ) || !1
    );
  }
  GetAllLanguagesWithSomeSupport() {
    return (
      this.BCheckDataRequestIncluded({
        include_supported_languages: !0,
      }),
      this.m_rgSupportedLanguages
        ?.filter((_) => _.supported || _.subtitles || _.full_audio)
        .map((_) => _.elanguage) || []
    );
  }
  GetDataRequest() {
    return this.m_DataRequested;
  }
  GetMicroTrailer(_) {
    if (
      (this.BCheckDataRequestIncluded({
        include_trailers: !0,
      }),
      this.m_Trailers)
    ) {
      let _ = this.m_Trailers
        .GetAllTrailers(_)
        .find((_) => !!_.GetMicroTrailer());
      if (_) return _.GetMicroTrailer();
    }
    return null;
  }
  GetLinks() {
    return (
      this.BCheckDataRequestIncluded({
        include_links: !0,
      }),
      this.m_rgLinks
    );
  }
  GetUserFilterFailure() {
    return (
      this.BCheckDataRequestIncluded({
        apply_user_filters: !0,
      }),
      this.m_userFilterFailure
    );
  }
  ReplaceBestPurchaseOption(_) {
    this.m_BestPurchaseOption = _;
  }
  GetInternalName() {
    return this.m_strInternalName;
  }
};
function _(_) {
  if (!_?.length) return [];
  let _ = _.map((_) => _.creator_clan_account_id).filter((_) => !!_);
  return Array.from(new Set(_));
}
var _ = class {
    m_strMainCapsuleURL;
    m_strSmallCapsuleURL;
    m_strHeaderURL;
    m_strPackageHeaderURL;
    m_strPageBackgroundURL;
    m_strRawPageBackgroundURL;
    m_strHeroCapsuleURL;
    m_strHeroCapsuleURL_2x;
    m_strLibraryCapsuleURL;
    m_strLibraryCapsuleURL_2x;
    m_strLibraryHeroURL;
    m_strLibraryHeroURL_2x;
    m_strCommunityIcon;
    m_strCommunityIcon_Full;
    constructor(_, _) {
      let _ = _.asset_url_format();
      _ &&
        (_.main_capsule() &&
          (this.m_strMainCapsuleURL = this.ConstructAssetURL(
            _,
            _.main_capsule(),
          )),
        _.small_capsule() &&
          (this.m_strSmallCapsuleURL = this.ConstructAssetURL(
            _,
            _.small_capsule(),
          )),
        _.header() &&
          (this.m_strHeaderURL = this.ConstructAssetURL(_, _.header())),
        _.package_header() &&
          (this.m_strPackageHeaderURL = this.ConstructAssetURL(
            _,
            _.package_header(),
          )),
        _.raw_page_background() &&
          (this.m_strRawPageBackgroundURL = this.ConstructAssetURL(
            _,
            _.raw_page_background(),
          )),
        _.hero_capsule() &&
          (this.m_strHeroCapsuleURL = this.ConstructAssetURL(
            _,
            _.hero_capsule(),
          )),
        _.hero_capsule_2x() &&
          (this.m_strHeroCapsuleURL_2x = this.ConstructAssetURL(
            _,
            _.hero_capsule_2x(),
          )),
        _.library_capsule() &&
          (this.m_strLibraryCapsuleURL = this.ConstructAssetURL(
            _,
            _.library_capsule(),
          )),
        _.library_capsule_2x() &&
          (this.m_strLibraryCapsuleURL_2x = this.ConstructAssetURL(
            _,
            _.library_capsule_2x(),
          )),
        _.library_hero() &&
          (this.m_strLibraryHeroURL = this.ConstructAssetURL(
            _,
            _.library_hero(),
          )),
        _.library_hero_2x() &&
          (this.m_strLibraryHeroURL_2x = this.ConstructAssetURL(
            _,
            _.library_hero_2x(),
          ))),
        _.community_icon() &&
          ((this.m_strCommunityIcon = `${_.MEDIA_CDN_COMMUNITY_URL}images/apps/${_}/${_.community_icon()}.jpg`),
          (this.m_strCommunityIcon_Full = `${_.MEDIA_CDN_COMMUNITY_URL}images/apps/${_}/${_.community_icon()}_full.jpg`)),
        _.page_background_path() &&
          (this.m_strPageBackgroundURL = `${_.STORE_CDN_URL}images/storepagebackground/${_.page_background_path()}`);
    }
    GetMainCapsuleURL() {
      return this.m_strMainCapsuleURL;
    }
    GetSmallCapsuleURL() {
      return this.m_strSmallCapsuleURL;
    }
    GetHeaderURL() {
      return this.m_strHeaderURL;
    }
    GetPackageHeaderURL() {
      return this.m_strPackageHeaderURL;
    }
    GetPageBackgroundURL() {
      return this.m_strPageBackgroundURL;
    }
    GetRawPageBackgroundURL() {
      return this.m_strRawPageBackgroundURL;
    }
    GetHeroCapsuleURL() {
      return this.m_strHeroCapsuleURL;
    }
    GetHeroCapsuleURL_2x() {
      return this.m_strHeroCapsuleURL_2x;
    }
    GetLibraryCapsuleURL() {
      return this.m_strLibraryCapsuleURL;
    }
    GetLibraryCapsuleURL_2x() {
      return this.m_strLibraryCapsuleURL_2x;
    }
    GetLibraryHeroURL() {
      return this.m_strLibraryHeroURL;
    }
    GetLibraryHeroURL_2x() {
      return this.m_strLibraryHeroURL_2x;
    }
    ConstructAssetURL(_, _) {
      return (
        _.BASE_URL_SHARED_CDN +
        `/store_item_assets/` +
        _.replace("${FILENAME}", _)
      );
    }
    GetCommunityIconURL() {
      return this.m_strCommunityIcon;
    }
    GetCommunityIconURL_Full() {
      return this.m_strCommunityIcon_Full;
    }
  },
  _ = class {
    m_mapTrailer;
    m_highlightTrailers;
    m_highlightTrailersAllAges;
    m_otherTrailers;
    m_otherTrailersAllAges;
    constructor(_) {
      (this.m_highlightTrailers = _.highlights()?.map((_) => new _(_)) ?? []),
        (this.m_highlightTrailersAllAges = this.m_highlightTrailers.filter(
          (_) => _.BIsAllAges(),
        )),
        (this.m_otherTrailers = _.other_trailers()?.map((_) => new _(_)) ?? []),
        (this.m_otherTrailersAllAges = this.m_otherTrailers.filter((_) =>
          _.BIsAllAges(),
        )),
        (this.m_mapTrailer = new Map(
          [...this.m_highlightTrailers, ...this.m_otherTrailers].map((_) => [
            _.GetTrailerID(),
            _,
          ]),
        ));
    }
    BHasTrailers(_) {
      return _
        ? this.m_highlightTrailersAllAges.length > 0 ||
            this.m_otherTrailersAllAges.length > 0
        : this.m_highlightTrailers.length > 0 ||
            this.m_otherTrailers.length > 0;
    }
    GetHighlightTrailers(_) {
      return _ ? this.m_highlightTrailersAllAges : this.m_highlightTrailers;
    }
    GetOtherTrailers(_) {
      return _ ? this.m_otherTrailersAllAges : this.m_otherTrailers;
    }
    GetAllTrailers(_) {
      return [...this.GetHighlightTrailers(_), ...this.GetOtherTrailers(_)];
    }
    GetTrailerByID(_) {
      return this.m_mapTrailer.get(_);
    }
  },
  _ = class {
    m_strTrailerName;
    m_eTrailerCategory;
    m_nBaseID;
    m_MicroTrailer;
    m_rgDashTrailers;
    m_rgHlsTrailer;
    m_strScreenshotMedium;
    m_strScreenshotFull;
    m_bIsAllAges;
    m_strCaptionManifest;
    constructor(_) {
      (this.m_strTrailerName = _.trailer_name()),
        (this.m_nBaseID = _.trailer_base_id()),
        (this.m_eTrailerCategory = _.trailer_category());
      let _ = _.trailer_url_format();
      if (
        (_ &&
          (_.microtrailer() &&
            (this.m_MicroTrailer = this.ExtractTrailerFormats(
              _,
              _.microtrailer(),
            )),
          _.screenshot_medium() &&
            (this.m_strScreenshotMedium = this.ConstructScreenshotURL(
              _,
              _.screenshot_medium(),
            )),
          _.screenshot_full() &&
            (this.m_strScreenshotFull = this.ConstructScreenshotURL(
              _,
              _.screenshot_full(),
            ))),
        _.adaptive_trailers())
      ) {
        this.m_rgDashTrailers = this.ExtractAdaptiveTrailers(
          _.adaptive_trailers(),
          `dash`,
        );
        let _ = this.ExtractAdaptiveTrailers(_.adaptive_trailers(), `hls`);
        _.length > 0 && (this.m_rgHlsTrailer = _[0]);
      }
      (this.m_bIsAllAges = _.all_ages() ?? !0),
        (this.m_strCaptionManifest = _(_));
    }
    GetName() {
      return this.m_strTrailerName;
    }
    GetTrailerID() {
      return this.m_nBaseID;
    }
    GetTrailerCategory() {
      return this.m_eTrailerCategory;
    }
    GetTrailersDash() {
      return this.m_rgDashTrailers;
    }
    GetTrailerHls() {
      return this.m_rgHlsTrailer;
    }
    GetMicroTrailer() {
      return this.m_MicroTrailer;
    }
    GetScreenshot() {
      return this.m_strScreenshotFull
        ? this.m_strScreenshotFull
        : this.m_strScreenshotMedium;
    }
    BIsAllAges() {
      return this.m_bIsAllAges;
    }
    GetCaptionManifest() {
      return this.m_strCaptionManifest;
    }
    ExtractTrailerFormats(_, _) {
      let _ = {};
      return (
        _.forEach((_) => {
          _.type() == `video/mp4`
            ? (_.strMP4URL = this.ConstructAssetURL(_, _.filename()))
            : _.type() == `video/webm` &&
              (_.strWebMURL = this.ConstructAssetURL(_, _.filename()));
        }),
        _
      );
    }
    ExtractAdaptiveTrailers(_, _) {
      let _ = `${_}_`,
        _ = _.filter(
          (_) => _.encoding() && _.cdn_path() && _.encoding().startsWith(_),
        ),
        _ = _.findIndex((_) => _.encoding().endsWith(`_av1`));
      return (
        _ > 0 && _(_, _, 0),
        _.map((_) => this.ConstructAssetURL(_.cdn_path(), ``))
      );
    }
    ConstructScreenshotURL(_, _) {
      return (
        _.BASE_URL_SHARED_CDN +
        `/store_item_assets/` +
        _.replace("${FILENAME}", _)
      );
    }
    ConstructAssetURL(_, _) {
      return _.VIDEO_CDN_URL + `/store_trailers/` + _.replace("${FILENAME}", _);
    }
  },
  _ = class {
    m_rgAllScreenshots;
    m_rgOnlyAllAgesScreenshots;
    constructor(_) {
      let _ = _.all_ages_screenshots() || [],
        _ = _.mature_content_screenshots() || [],
        _ = (_) => _.BASE_URL_SHARED_CDN + `/store_item_assets/` + _.filename();
      (this.m_rgOnlyAllAgesScreenshots = _.map(_)),
        (this.m_rgAllScreenshots = [..._, ..._]
          .sort((_, _) => _.ordinal() - _.ordinal())
          .map(_));
    }
    GetAllAgesAndMatureScreenshots() {
      return this.m_rgAllScreenshots;
    }
    GetOnlyAllAgesScreenshots() {
      return this.m_rgOnlyAllAgesScreenshots;
    }
  };
function _(_) {
  if (_)
    switch (_.item_type) {
      case 0:
        return {
          appid: _.appid,
        };
      case 1:
        return {
          packageid: _._,
        };
      case 2:
        return {
          bundleid: _._,
        };
      case 4:
        return {
          tagid: _._,
        };
      case 5:
        return {
          creatorid: _._,
        };
      case 6:
        return {
          hubcategoryid: _._,
        };
      case 7:
        return _.gid
          ? {
              salepagegid: _.gid,
            }
          : void 0;
      case 3:
      case -1:
        return;
      default:
        _(
          _.item_type,
          `Unknown EStoreItemType ${_.item_type} ${_(_.item_type)} `,
        );
        return;
    }
}
export { _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _ };
