import { _, _, _, _, _, _, _, _, _, _, _, _, _, _ } from "./chunk-XXXXXXXX.js";
import { _ } from "./chunk-XXXXXXXX.js";
import { _ } from "./chunk-XXXXXXXX.js";
import { _, _, _, _, _, _ } from "./chunk-XXXXXXXX.js";
import { _ } from "./chunk-XXXXXXXX.js";
import { _ } from "./chunk-XXXXXXXX.js";
import { _, _ } from "./chunk-XXXXXXXX.js";
import { _ } from "./chunk-XXXXXXXX.js";
import { _, _, _, _, _, _ } from "./chunk-XXXXXXXX.js";
import { _ } from "./chunk-XXXXXXXX.js";
import { _, _, _, _, _, _, _ } from "./chunk-XXXXXXXX.js";
import { _ } from "./chunk-XXXXXXXX.js";
import { _, _, _, _, _, _ } from "./chunk-XXXXXXXX.js";
import { _ } from "./chunk-XXXXXXXX.js";
import { _, _, _, _ } from "./chunk-XXXXXXXX.js";
import { _ } from "./chunk-XXXXXXXX.js";
import { _, _, _, _ } from "./chunk-XXXXXXXX.js";
import { _, _ } from "./chunk-XXXXXXXX.js";
import { _ } from "./chunk-XXXXXXXX.js";
import { _, _, _, _, _, _, _, _, _, _ } from "./chunk-XXXXXXXX.js";
import { _ } from "./chunk-XXXXXXXX.js";
import { _ } from "./chunk-XXXXXXXX.js";
import { _, _, _, _, _, _, _, _, _, _, _, _ } from "./chunk-XXXXXXXX.js";
import { _, _, _, _, _, _, _, _ } from "./chunk-XXXXXXXX.js";
import { _, _, _ } from "./chunk-XXXXXXXX.js";
import { _ } from "./chunk-XXXXXXXX.js";
import { _ } from "./chunk-XXXXXXXX.js";
import { _, _, _, _, _, _, _, _, _, _ } from "./chunk-XXXXXXXX.js";
import { _, _, _, _ } from "./chunk-XXXXXXXX.js";
import { _, _, _, _ } from "./chunk-XXXXXXXX.js";
import { _, _ } from "./chunk-XXXXXXXX.js";
import { _, _, _, _, _ } from "./chunk-XXXXXXXX.js";
import { _ } from "./chunk-XXXXXXXX.js";
import { _, _, _ } from "./chunk-XXXXXXXX.js";
import { _, _ } from "./chunk-XXXXXXXX.js";
function _() {
  return _(_) === "desktop";
}
function _() {
  return _(_) === "touch";
}
function _() {
  let _ = [];
  return (
    _() ? _.push("force_desktop") : _.push("responsive"),
    _() && _.push("touch"),
    _.join(" ")
  );
}
function _() {
  _(_, "desktop"), "location" in window && location.reload();
}
function _() {
  _() && _(_), "location" in window && location.reload();
}
function _(_) {
  return _ == 1 || _ == 2 || _ == 13;
}
var _ = _(_(), 1),
  _ = _(_(), 1);
var _ = _(_()),
  _ = _(_());
var _ = _(_());
function _(_) {
  let [_, _] = (0, _.useState)(!1);
  return (
    (0, _.useEffect)(() => {
      (0, _.startTransition)(() => {
        _(!0);
      });
    }, []),
    _ ? _.children : (_.fallback ?? null)
  );
}
var _ = _(_());
function _(_) {
  let { dynamicImport: _, fallback: _, ..._ } = _,
    [_] = (0, _.useState)(() =>
      _.default.lazy(async () => ({
        default: await _(),
      })),
    );
  return (0, _.jsx)(_, {
    fallback: _,
    children: (0, _.jsx)(_.Suspense, {
      fallback: _,
      children: (0, _.jsx)(_, {
        ..._,
      }),
    }),
  });
}
var _ = _(_(), 1);
var _ = _(_(), 1),
  _ = new Map();
function _(_, _) {
  if (_.has(_)) return _.get(_);
  let _ = _(_, {}, {}, void 0);
  return _.set(_, _), _;
}
function _(_) {
  let { _: _, rscString: _ } = _,
    _ = _(_, _),
    _ = (0, _.use)(_);
  return (0, _.jsx)(_.Suspense, {
    fallback: _.fallback,
    children: _,
  });
}
function _(_) {
  let _ = (0, _.useId)(),
    _ = _().rsc?.[_];
  return _
    ? (0, _.jsx)(_.Suspense, {
        fallback: _.fallback,
        children: (0, _.jsx)(_, {
          _: _,
          rscString: _,
          fallback: _.fallback,
        }),
      })
    : _.fallback;
}
var _ = _(_());
var _ = class _ extends _.Message {
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
        _.sm_m ||
          (_.sm_m = {
            proto: _,
            fields: {
              country_code: {
                _: 1,
                _: _.readString,
                _: _.writeString,
              },
            },
          }),
        _.sm_m
      );
    }
    static MBF() {
      return _.sm_mbf || (_.sm_mbf = _(_._())), _.sm_mbf;
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
      let _ = new _.default.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new _.default.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.default.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
    }
    getClassName() {
      return "CUserAccount_GetAvailableValveDiscountPromotions_Request";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.promotions || _(_._()),
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
              promotions: {
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
      return _.sm_mbf || (_.sm_mbf = _(_._())), _.sm_mbf;
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
      let _ = new _.default.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new _.default.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.default.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
    }
    getClassName() {
      return "CUserAccount_GetAvailableValveDiscountPromotions_Response";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.promotionid || _(_._()),
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
              promotionid: {
                _: 1,
                _: _.readUint32,
                _: _.writeUint32,
              },
              promotion_description: {
                _: 2,
                _: _.readString,
                _: _.writeString,
              },
              minimum_cart_amount: {
                _: 3,
                _: _.readInt64String,
                _: _.writeInt64String,
              },
              minimum_cart_amount_for_display: {
                _: 4,
                _: _.readInt64String,
                _: _.writeInt64String,
              },
              discount_amount: {
                _: 5,
                _: _.readInt64String,
                _: _.writeInt64String,
              },
              currency_code: {
                _: 6,
                _: _.readInt32,
                _: _.writeInt32,
              },
              available_use_count: {
                _: 7,
                _: _.readInt32,
                _: _.writeInt32,
              },
              promotional_discount_type: {
                _: 8,
                _: _.readInt32,
                _: _.writeInt32,
              },
              loyalty_reward_id: {
                _: 9,
                _: _.readInt32,
                _: _.writeInt32,
              },
              localized_name_token: {
                _: 10,
                _: _.readString,
                _: _.writeString,
              },
              max_use_count: {
                _: 11,
                _: _.readInt32,
                _: _.writeInt32,
              },
            },
          }),
        _.sm_m
      );
    }
    static MBF() {
      return _.sm_mbf || (_.sm_mbf = _(_._())), _.sm_mbf;
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
      let _ = new _.default.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new _.default.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.default.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
    }
    getClassName() {
      return "CUserAccount_GetAvailableValveDiscountPromotions_Response_ValveDiscountPromotionDetails";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.has_wallet || _(_._()),
        _.Message.initialize(this, _, 0, -1, [13], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        _.sm_m ||
          (_.sm_m = {
            proto: _,
            fields: {
              has_wallet: {
                _: 1,
                _: _.readBool,
                _: _.writeBool,
              },
              user_country_code: {
                _: 2,
                _: _.readString,
                _: _.writeString,
              },
              wallet_country_code: {
                _: 3,
                _: _.readString,
                _: _.writeString,
              },
              wallet_state: {
                _: 4,
                _: _.readString,
                _: _.writeString,
              },
              balance: {
                _: 5,
                _: _.readInt64String,
                _: _.writeInt64String,
              },
              delayed_balance: {
                _: 6,
                _: _.readInt64String,
                _: _.writeInt64String,
              },
              currency_code: {
                _: 7,
                _: _.readInt32,
                _: _.writeInt32,
              },
              time_most_recent_txn: {
                _: 8,
                _: _.readUint32,
                _: _.writeUint32,
              },
              most_recent_txnid: {
                _: 9,
                _: _.readUint64String,
                _: _.writeUint64String,
              },
              balance_in_usd: {
                _: 10,
                _: _.readInt64String,
                _: _.writeInt64String,
              },
              delayed_balance_in_usd: {
                _: 11,
                _: _.readInt64String,
                _: _.writeInt64String,
              },
              has_wallet_in_other_regions: {
                _: 12,
                _: _.readBool,
                _: _.writeBool,
              },
              other_regions: {
                _: 13,
                _: !0,
                _: !0,
                _: _.readInt32,
                pbr: _.readPackedInt32,
                _: _.writeRepeatedInt32,
              },
              formatted_balance: {
                _: 14,
                _: _.readString,
                _: _.writeString,
              },
              formatted_delayed_balance: {
                _: 15,
                _: _.readString,
                _: _.writeString,
              },
              delayed_balance_available_min_time: {
                _: 16,
                _: _.readInt32,
                _: _.writeInt32,
              },
              delayed_balance_available_max_time: {
                _: 17,
                _: _.readInt32,
                _: _.writeInt32,
              },
              delayed_balance_newest_source: {
                _: 18,
                _: _.readInt32,
                _: _.writeInt32,
              },
            },
          }),
        _.sm_m
      );
    }
    static MBF() {
      return _.sm_mbf || (_.sm_mbf = _(_._())), _.sm_mbf;
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
      let _ = new _.default.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new _.default.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.default.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
    }
    getClassName() {
      return "CUserAccount_GetWalletDetails_Response";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.include_balance_in_usd || _(_._()),
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
              include_balance_in_usd: {
                _: 1,
                _: _.readBool,
                _: _.writeBool,
              },
              wallet_region: {
                _: 2,
                _: 1,
                _: _.readInt32,
                _: _.writeInt32,
              },
              include_formatted_balance: {
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
      return _.sm_mbf || (_.sm_mbf = _(_._())), _.sm_mbf;
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
      let _ = new _.default.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new _.default.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.default.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
    }
    getClassName() {
      return "CUserAccount_GetClientWalletDetails_Request";
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
      let _ = new _.default.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _;
    }
    serializeBinary() {
      var _ = new _.default.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
    }
    static serializeBinaryToWriter(_, _) {}
    serializeBase64String() {
      var _ = new _.default.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
    }
    getClassName() {
      return "CUserAccount_GetAccountLinkStatus_Request";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.pwid || _(_._()),
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
              pwid: {
                _: 1,
                _: _.readUint32,
                _: _.writeUint32,
              },
              identity_verification: {
                _: 2,
                _: _.readUint32,
                _: _.writeUint32,
              },
              performed_age_verification: {
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
      return _.sm_mbf || (_.sm_mbf = _(_._())), _.sm_mbf;
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
      let _ = new _.default.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new _.default.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.default.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
    }
    getClassName() {
      return "CUserAccount_GetAccountLinkStatus_Response";
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
        _.sm_m ||
          (_.sm_m = {
            proto: _,
            fields: {
              appid: {
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
      return _.sm_mbf || (_.sm_mbf = _(_._())), _.sm_mbf;
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
      let _ = new _.default.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new _.default.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.default.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
    }
    getClassName() {
      return "CUserAccount_CancelLicenseForApp_Request";
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
      let _ = new _.default.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _;
    }
    serializeBinary() {
      var _ = new _.default.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
    }
    static serializeBinaryToWriter(_, _) {}
    serializeBase64String() {
      var _ = new _.default.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
    }
    getClassName() {
      return "CUserAccount_CancelLicenseForApp_Response";
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
        _.sm_m ||
          (_.sm_m = {
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
      return _.sm_mbf || (_.sm_mbf = _(_._())), _.sm_mbf;
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
      let _ = new _.default.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new _.default.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.default.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
    }
    getClassName() {
      return "CUserAccount_GetUserCountry_Request";
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
        _.sm_m ||
          (_.sm_m = {
            proto: _,
            fields: {
              country: {
                _: 1,
                _: _.readString,
                _: _.writeString,
              },
            },
          }),
        _.sm_m
      );
    }
    static MBF() {
      return _.sm_mbf || (_.sm_mbf = _(_._())), _.sm_mbf;
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
      let _ = new _.default.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new _.default.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.default.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
    }
    getClassName() {
      return "CUserAccount_GetUserCountry_Response";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.invite_limit || _(_._()),
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
              invite_limit: {
                _: 1,
                _: _.readUint32,
                _: _.writeUint32,
              },
              invite_duration: {
                _: 2,
                _: _.readUint32,
                _: _.writeUint32,
              },
              invite_note: {
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
      return _.sm_mbf || (_.sm_mbf = _(_._())), _.sm_mbf;
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
      let _ = new _.default.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new _.default.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.default.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
    }
    getClassName() {
      return "CUserAccount_CreateFriendInviteToken_Request";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.invite_token || _(_._()),
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
              invite_token: {
                _: 1,
                _: _.readString,
                _: _.writeString,
              },
              invite_limit: {
                _: 2,
                _: _.readUint64String,
                _: _.writeUint64String,
              },
              invite_duration: {
                _: 3,
                _: _.readUint64String,
                _: _.writeUint64String,
              },
              time_created: {
                _: 4,
                _: _.readFixed32,
                _: _.writeFixed32,
              },
              valid: {
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
      return _.sm_mbf || (_.sm_mbf = _(_._())), _.sm_mbf;
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
      let _ = new _.default.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new _.default.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.default.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
    }
    getClassName() {
      return "CUserAccount_CreateFriendInviteToken_Response";
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
      let _ = new _.default.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _;
    }
    serializeBinary() {
      var _ = new _.default.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
    }
    static serializeBinaryToWriter(_, _) {}
    serializeBase64String() {
      var _ = new _.default.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
    }
    getClassName() {
      return "CUserAccount_GetFriendInviteTokens_Request";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.tokens || _(_._()),
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
              tokens: {
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
      return _.sm_mbf || (_.sm_mbf = _(_._())), _.sm_mbf;
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
      let _ = new _.default.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new _.default.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.default.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
    }
    getClassName() {
      return "CUserAccount_GetFriendInviteTokens_Response";
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
        _.sm_m ||
          (_.sm_m = {
            proto: _,
            fields: {
              steamid: {
                _: 1,
                _: _.readFixed64String,
                _: _.writeFixed64String,
              },
              invite_token: {
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
      return _.sm_mbf || (_.sm_mbf = _(_._())), _.sm_mbf;
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
      let _ = new _.default.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new _.default.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.default.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
    }
    getClassName() {
      return "CUserAccount_ViewFriendInviteToken_Request";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.valid || _(_._()),
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
              valid: {
                _: 1,
                _: _.readBool,
                _: _.writeBool,
              },
              steamid: {
                _: 2,
                _: _.readUint64String,
                _: _.writeUint64String,
              },
              invite_duration: {
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
      return _.sm_mbf || (_.sm_mbf = _(_._())), _.sm_mbf;
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
      let _ = new _.default.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new _.default.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.default.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
    }
    getClassName() {
      return "CUserAccount_ViewFriendInviteToken_Response";
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
        _.sm_m ||
          (_.sm_m = {
            proto: _,
            fields: {
              steamid: {
                _: 1,
                _: _.readFixed64String,
                _: _.writeFixed64String,
              },
              invite_token: {
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
      return _.sm_mbf || (_.sm_mbf = _(_._())), _.sm_mbf;
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
      let _ = new _.default.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new _.default.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.default.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
    }
    getClassName() {
      return "CUserAccount_RedeemFriendInviteToken_Request";
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
      let _ = new _.default.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _;
    }
    serializeBinary() {
      var _ = new _.default.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
    }
    static serializeBinaryToWriter(_, _) {}
    serializeBase64String() {
      var _ = new _.default.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
    }
    getClassName() {
      return "CUserAccount_RedeemFriendInviteToken_Response";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.invite_token || _(_._()),
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
              invite_token: {
                _: 1,
                _: _.readString,
                _: _.writeString,
              },
            },
          }),
        _.sm_m
      );
    }
    static MBF() {
      return _.sm_mbf || (_.sm_mbf = _(_._())), _.sm_mbf;
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
      let _ = new _.default.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new _.default.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.default.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
    }
    getClassName() {
      return "CUserAccount_RevokeFriendInviteToken_Request";
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
      let _ = new _.default.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _;
    }
    serializeBinary() {
      var _ = new _.default.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
    }
    static serializeBinaryToWriter(_, _) {}
    serializeBase64String() {
      var _ = new _.default.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
    }
    getClassName() {
      return "CUserAccount_RevokeFriendInviteToken_Response";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.compat_tool || _(_._()),
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
              compat_tool: {
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
      return _.sm_mbf || (_.sm_mbf = _(_._())), _.sm_mbf;
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
      let _ = new _.default.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new _.default.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.default.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
    }
    getClassName() {
      return "CUserAccount_RegisterCompatTool_Request";
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
      let _ = new _.default.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _;
    }
    serializeBinary() {
      var _ = new _.default.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
    }
    static serializeBinaryToWriter(_, _) {}
    serializeBase64String() {
      var _ = new _.default.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
    }
    getClassName() {
      return "CUserAccount_RegisterCompatTool_Response";
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
        _.sm_m ||
          (_.sm_m = {
            proto: _,
            fields: {
              steamid: {
                _: 1,
                _: _.readFixed64String,
                _: _.writeFixed64String,
              },
              client_token: {
                _: 2,
                _: _.readBytes,
                _: _.writeBytes,
              },
              expiry: {
                _: 3,
                _: _.readUint32,
                _: _.writeUint32,
              },
              deviceid: {
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
      return _.sm_mbf || (_.sm_mbf = _(_._())), _.sm_mbf;
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
      let _ = new _.default.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new _.default.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.default.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
    }
    getClassName() {
      return "CEmbeddedClient_Token";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.result || _(_._()),
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
              result: {
                _: 1,
                _: _.readUint32,
                _: _.writeUint32,
              },
              token: {
                _: 2,
                _: _,
              },
            },
          }),
        _.sm_m
      );
    }
    static MBF() {
      return _.sm_mbf || (_.sm_mbf = _(_._())), _.sm_mbf;
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
      let _ = new _.default.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new _.default.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.default.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
    }
    getClassName() {
      return "CEmbeddedClient_AuthorizeDevice_Response";
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
        _.sm_m ||
          (_.sm_m = {
            proto: _,
            fields: {
              steamid: {
                _: 1,
                _: _.readFixed64String,
                _: _.writeFixed64String,
              },
              appid: {
                _: 2,
                _: _.readUint32,
                _: _.writeUint32,
              },
              device_info: {
                _: 3,
                _: _.readString,
                _: _.writeString,
              },
              deviceid: {
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
      return _.sm_mbf || (_.sm_mbf = _(_._())), _.sm_mbf;
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
      let _ = new _.default.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new _.default.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.default.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
    }
    getClassName() {
      return "CEmbeddedClient_AuthorizeCurrentDevice_Request";
    }
  },
  _;
((_) => {
  function _(_, _) {
    return _.SendMsg(
      "UserAccount.GetAvailableValveDiscountPromotions#1",
      _(_, _),
      _,
      {
        bConstMethod: !0,
        ePrivilege: 2,
        eWebAPIKeyRequirement: 1,
      },
    );
  }
  _.GetAvailableValveDiscountPromotions = _;
  function _(_, _) {
    return _.SendMsg("UserAccount.GetClientWalletDetails#1", _(_, _), _, {
      ePrivilege: 1,
    });
  }
  _.GetClientWalletDetails = _;
  function _(_, _) {
    return _.SendMsg("UserAccount.GetAccountLinkStatus#1", _(_, _), _, {
      ePrivilege: 1,
    });
  }
  _.GetAccountLinkStatus = _;
  function _(_, _) {
    return _.SendMsg("UserAccount.CancelLicenseForApp#1", _(_, _), _, {
      ePrivilege: 1,
    });
  }
  _.CancelLicenseForApp = _;
  function _(_, _) {
    return _.SendMsg("UserAccount.GetUserCountry#1", _(_, _), _, {
      ePrivilege: 1,
    });
  }
  _.GetUserCountry = _;
  function _(_, _) {
    return _.SendMsg("UserAccount.CreateFriendInviteToken#1", _(_, _), _, {
      ePrivilege: 3,
    });
  }
  _.CreateFriendInviteToken = _;
  function _(_, _) {
    return _.SendMsg("UserAccount.GetFriendInviteTokens#1", _(_, _), _, {
      ePrivilege: 1,
    });
  }
  _.GetFriendInviteTokens = _;
  function _(_, _) {
    return _.SendMsg("UserAccount.ViewFriendInviteToken#1", _(_, _), _, {
      ePrivilege: 1,
    });
  }
  _.ViewFriendInviteToken = _;
  function _(_, _) {
    return _.SendMsg("UserAccount.RedeemFriendInviteToken#1", _(_, _), _, {
      ePrivilege: 1,
    });
  }
  _.RedeemFriendInviteToken = _;
  function _(_, _) {
    return _.SendMsg("UserAccount.RevokeFriendInviteToken#1", _(_, _), _, {
      ePrivilege: 1,
    });
  }
  _.RevokeFriendInviteToken = _;
  function _(_, _) {
    return _.SendMsg("UserAccount.RegisterCompatTool#1", _(_, _), _, {
      ePrivilege: 1,
    });
  }
  _.RegisterCompatTool = _;
})((_ ||= {}));
var _;
((_) => {
  function _(_, _) {
    return _.SendMsg("EmbeddedClient.AuthorizeCurrentDevice#1", _(_, _), _, {
      ePrivilege: 1,
    });
  }
  _.AuthorizeCurrentDevice = _;
})((_ ||= {}));
function _() {
  return ["CurrentUserWalletDetails", _.accountid];
}
function _(_) {
  return {
    queryKey: _(),
    queryFn: async () => {
      if (!_.accountid) return;
      let _ = _.EREALM === 2;
      return (
        await _.GetClientWalletDetails(_, {
          wallet_region: _ ? 2 : 1,
          include_formatted_balance: !0,
        })
      )
        .Body()
        .toObject();
    },
    staleTime: 600 * 1e3,
  };
}
function _() {
  let _ = _();
  return _(_(_));
}
var _ = _(_(), 1),
  _ = _(_(), 1);
var _ = _(_(), 1);
var _ = "FbRIoYoNi9g-";
var _ = "vnGo6vvKWMk-";
var _ = "kCO5XYi3veo-";
var _ = "Ca4SW9HC3ME-";
var _ = "P0JO-Sl0erw-";
var _ = _(_(), 1);
async function _(_, _) {
  let _ = new FormData();
  _.set("language", _);
  let _ = await fetch(_, {
    method: "POST",
    credentials: "same-origin",
    body: _,
  });
  if (!_._) throw _;
}
function _(_) {
  let {
      open: _,
      menuAction: _,
      changeLanguagePath: _,
      bLoggedIn: _,
      bSkipLanguagePrefs: _,
      onDismiss: _,
    } = _,
    [_, _] = (0, _.useState)(!1),
    _ = (0, _.useRef)(null);
  (0, _.useEffect)(() => {
    _ ? _.current?.showModal() : _.current?.close();
  }, [_]);
  async function _(_) {
    _(!0);
    try {
      await _(_, _);
    } catch (_) {
      console.error(_), _(!1);
      return;
    }
    _ && !_
      ? (location.href = _.STORE_BASE_URL + "account/languagepreferences/")
      : _.href
        ? (location.href = _.href)
        : location.reload();
  }
  return (0, _.jsx)("dialog", {
    ref: _,
    className: _,
    onMouseDown: (_) => _.target === _.current && _(),
    children: (0, _.jsxs)("div", {
      children: [
        (0, _.jsx)("hr", {
          className: _,
        }),
        (0, _.jsxs)("form", {
          method: "dialog",
          className: _,
          onSubmit: (_) => _(_.target.elements.namedItem("language")?.value),
          children: [
            (0, _.jsx)("select", {
              disabled: _,
              name: "language",
              onChange: (_) => _(_.target.value),
              defaultValue: _().strLanguage,
              children: _.menuAction.children?.map((_) =>
                (0, _.jsx)(
                  "option",
                  {
                    value: _.action_parameters?.language,
                    children: _.label,
                  },
                  _.label,
                ),
              ),
            }),
            (0, _.jsx)("div", {
              className: _,
              children: (0, _.jsx)("input", {
                type: "submit",
                value: "OK",
                className: _,
              }),
            }),
          ],
        }),
      ],
    }),
  });
}
var _ = "h3Jy-1Il1os-";
var _ = "HOrB6lehQpg-";
var _ = "_7iCcob-JJ4g-";
var _ = "QYT54GHN-rI-";
var _ = "_79DIT7RUQ5g-";
var _ = "Hxi-pnf9Xlw-";
var _ = "TwsehSqoph8-";
var _ = "cQPGTl-Lp-0-";
var _ = "rzUmQa-ty1I-";
var _ = "_2CYMhC951F4-";
var _ = "h8dQ-Uyh4L0-";
var _ = "NzGUCXVXDcA-";
var _ = "L09rGTMfR9c-";
var _ = "./global_header_arabic-XXXXXXXX.json";
var _ = "./global_header_brazilian-XXXXXXXX.json";
var _ = "./global_header_bulgarian-XXXXXXXX.json";
var _ = "./global_header_czech-XXXXXXXX.json";
var _ = "./global_header_danish-XXXXXXXX.json";
var _ = "./global_header_dutch-XXXXXXXX.json";
var _ = "./global_header_english-XXXXXXXX.json";
var _ = "./global_header_finnish-XXXXXXXX.json";
var _ = "./global_header_french-XXXXXXXX.json";
var _ = "./global_header_german-XXXXXXXX.json";
var _ = "./global_header_greek-XXXXXXXX.json";
var _ = "./global_header_hungarian-XXXXXXXX.json";
var _ = "./global_header_indonesian-XXXXXXXX.json";
var _ = "./global_header_italian-XXXXXXXX.json";
var _ = "./global_header_japanese-XXXXXXXX.json";
var _ = "./global_header_koreana-XXXXXXXX.json";
var _ = "./global_header_latam-XXXXXXXX.json";
var _ = "./global_header_norwegian-XXXXXXXX.json";
var _ = "./global_header_polish-XXXXXXXX.json";
var _ = "./global_header_portuguese-XXXXXXXX.json";
var _ = "./global_header_romanian-XXXXXXXX.json";
var _ = "./global_header_russian-XXXXXXXX.json";
var _ = "./global_header_sc_schinese-XXXXXXXX.json";
var _ = "./global_header_schinese-XXXXXXXX.json";
var _ = "./global_header_spanish-XXXXXXXX.json";
var _ = "./global_header_swedish-XXXXXXXX.json";
var _ = "./global_header_tchinese-XXXXXXXX.json";
var _ = "./global_header_thai-XXXXXXXX.json";
var _ = "./global_header_turkish-XXXXXXXX.json";
var _ = "./global_header_ukrainian-XXXXXXXX.json";
var _ = "./global_header_vietnamese-XXXXXXXX.json";
var _ = {};
_.arabic = _;
_.brazilian = _;
_.bulgarian = _;
_.czech = _;
_.danish = _;
_.dutch = _;
_.english = _;
_.finnish = _;
_.french = _;
_.german = _;
_.greek = _;
_.hungarian = _;
_.indonesian = _;
_.italian = _;
_.japanese = _;
_.koreana = _;
_.latam = _;
_.norwegian = _;
_.polish = _;
_.portuguese = _;
_.romanian = _;
_.russian = _;
_.sc_schinese = _;
_.schinese = _;
_.spanish = _;
_.swedish = _;
_.tchinese = _;
_.thai = _;
_.turkish = _;
_.ukrainian = _;
_.vietnamese = _;
async function _(_) {
  if (_[_]) return (await fetch(new URL(_[_], import.meta.url))).json();
}
var _ = _(_);
function _(_ = "/logout/") {
  let _ = document.createElement("form");
  (_.action = _), (_.method = "POST"), document.body.appendChild(_), _.submit();
}
var _ = _(_(), 1);
function _(_) {
  let { action: _ } = _,
    _ = (0, _.useContext)(_),
    _ = "span",
    _ = {};
  return (
    _.href &&
      ((_ = _),
      (_._ = _.href),
      (_.external = !_.ssr),
      _.href.startsWith(_.STORE_BASE_URL) &&
        (_.snr = {
          feature: "globalheader",
        })),
    _.action &&
      (_.href || (_ = "button"),
      (_.onClick = async function (_) {
        switch ((_.preventDefault(), _.action)) {
          case 1: {
            _();
            return;
          }
          case 2: {
            if (_.action_parameters?.language === void 0)
              throw "Missing language";
            try {
              await _(_.action_parameters.language, _.changeLanguagePath);
            } catch (_) {
              console.error(_);
              return;
            }
            _.userDetails
              ? (location.href =
                  _.STORE_BASE_URL + "account/languagepreferences/")
              : _.href
                ? (location.href = _.href)
                : location.reload();
            return;
          }
        }
      })),
    (0, _.jsx)(_, {
      menuTarget: (0, _.jsx)(_, {
        ..._,
        tabIndex: 0,
        className: _,
        children: _(
          _.label,
          (0, _.jsx)("span", {
            className: _,
          }),
        ),
      }),
      direction: "left",
      className: _,
      children: _.children?.map((_, _) =>
        (0, _.jsx)(
          _,
          {
            action: _,
          },
          _,
        ),
      ),
    })
  );
}
var _ = (0, _.createContext)({});
function _(_) {
  return (0, _.jsx)(_.Provider, {
    value: _,
    children: _.globalActions.map((_, _) =>
      (0, _.jsx)(
        _,
        {
          direction: "down-left",
          menuTarget: (0, _.jsx)("button", {
            className: _,
            children: _.label,
          }),
          className: _,
          interactionMode: 1,
          children: _.children?.map((_, _) =>
            (0, _.jsx)(
              _,
              {
                action: _,
              },
              _,
            ),
          ),
        },
        _,
      ),
    ),
  });
}
function _() {
  let { data: _ } = _();
  return (0, _.jsx)("div", {
    className: _,
    children: _?.formatted_balance,
  });
}
function _(_) {
  let { userDetails: _ } = _,
    [_, _] = (0, _.useState)(void 0),
    _ = `/login/${_ ? `?redir=${encodeURIComponent(_)}` : ""}`;
  return (
    (0, _.useEffect)(() => {
      _(location.href);
    }, []),
    _
      ? (0, _.jsxs)("div", {
          className: _,
          children: [
            (0, _.jsx)("a", {
              className: _,
              href: _.STORE_BASE_URL + "about/",
              children: _.Localize("#global_menu_install_steam"),
            }),
            _.notifications &&
              (0, _.jsx)("div", {
                className: _,
                children: (0, _.jsx)(_, {
                  dynamicImport: async () =>
                    (await import("./greenenvelope-XXXXXXXX.js")).GreenEnvelope,
                  fallback: (0, _.jsx)("div", {
                    className: _,
                  }),
                  bResponsiveHeader: !1,
                  notifications: _.notifications,
                }),
              }),
            (0, _.jsxs)("div", {
              className: _,
              children: [
                (0, _.jsx)(_, {
                  userDetails: _,
                  globalActions: _.globalActions,
                  changeLanguagePath: _.changeLanguagePath,
                }),
                (0, _.jsx)(_, {}),
              ],
            }),
            (0, _.jsx)("a", {
              className: _,
              href: _(_),
              children: (0, _.jsx)(_, {
                playerLinkDetails: _,
                statusPosition: "border",
                alt: "",
                role: "presentation",
                size: "Small",
              }),
            }),
          ],
        })
      : (0, _.jsx)("div", {
          className: _,
          children: (0, _.jsxs)("div", {
            className: _,
            children: [
              (0, _.jsx)("a", {
                className: (0, _.default)(_, _),
                href: _.STORE_BASE_URL + "about/",
                children: _.Localize("#global_menu_install_steam"),
              }),
              " ",
              (0, _.jsx)("a", {
                href: _,
                className: _,
                children: _.Localize("#global_menu_login"),
              }),
              _.globalActions.length > 0 &&
                (0, _.jsxs)(_.Fragment, {
                  children: [
                    "  |  ",
                    (0, _.jsx)(_, {
                      userDetails: _,
                      globalActions: _.globalActions,
                      changeLanguagePath: _.changeLanguagePath,
                    }),
                  ],
                }),
            ],
          }),
        })
  );
}
var _ = "eGsI8rO3zfU-";
var _ = "Ca2l5LKN6as-";
var _ = "CVZpOujCk08-";
var _ = "ewJx-kmPr-8-";
var _ = "_2GKjdN512t4-";
var _ = "SmaLDT4y0RE-";
var _ = "LyTAF1R-NHw-";
var _ = "FhcQPauG0Bc-";
var _ = "_40MmWrTStR0-";
var _ = "_5N8HUkyU1sA-";
var _ = _(_(), 1),
  _ = _(_(), 1);
var _ = "MMrgod6KQlc-";
var _ = "k0AAbwuFzJQ-";
var _ = "ofgQne2Wvqg-";
var _ = "FTufO00UqAw-";
var _ = "iHkamGVWNgw-";
var _ = "_9-ylsFqlD1Y-";
var _ = "_99jWUQL7ajk-";
var _ = "maI6DbOJuy4-";
var _ = _(_(), 1),
  _ = (0, _.forwardRef)(function (_, _) {
    let { item: _, responsive: _, className: _, ..._ } = _,
      _ = _.label;
    return (
      _ && (_ = _.label_responsive ?? _.label),
      (0, _.jsx)(_.Fragment, {
        children: (0, _.jsxs)(_, {
          className: (0, _.default)(_, _.valveOnly && _),
          _: _.href,
          "aria-current": _.active ? "page" : void 0,
          external: !_.ssr,
          snr: _.href.startsWith(_.STORE_BASE_URL) && {
            feature: "globalheader",
          },
          ref: _,
          ..._,
          children: [
            _,
            _.new &&
              (0, _.jsx)("span", {
                className: _,
                children: _.Localize("#m_ext_new"),
              }),
          ],
        }),
      })
    );
  });
function _(_) {
  let { navContent: _ } = _;
  return (0, _.jsx)(_, {
    menuTarget: (0, _.jsx)(_, {
      item: _,
      className: _,
    }),
    direction: "right",
    children: _.children?.map((_, _) =>
      (0, _.jsx)(
        _,
        {
          navContent: _,
        },
        _,
      ),
    ),
  });
}
function _(_) {
  return (0, _.jsx)("nav", {
    className: _,
    children: (0, _.jsx)("ul", {
      className: _,
      children: _.navContent.map((_, _) =>
        (0, _.jsx)(
          _,
          {
            menuTarget: (0, _.jsx)(_, {
              item: _,
              className: (0, _.default)(_, _.userContent && _),
            }),
            direction: "down",
            className: _,
            children: _.children?.map((_, _) =>
              (0, _.jsx)(
                _,
                {
                  navContent: _,
                },
                _,
              ),
            ),
          },
          _,
        ),
      ),
    }),
  });
}
var _ = "/X3MIBOBA.png";
var _ = "/TYQTXQDA.svg";
var _ = "/5EH3SHCA.svg";
var _ = "/KSEIVHDA.png";
var _ = _(_(), 1),
  _ = _(_(), 1);
var _ = "UJ-b28jREN4-";
var _ = "-ackiz2p900-";
var _ = "dsfHY-n2vRo-";
var _ = "_7QSpS4Fcxis-";
var _ = "SMuDlFUQZ7c-";
var _ = "fbumr489F1M-";
var _ = "_4Irj26b6cAc-";
var _ = "J0hwuL-5qaI-";
var _ = "vaiPH0LUuOg-";
var _ = "lHc2D8LzCAM-";
var _ = "qMsE88Z2WWg-";
var _ = "SI1K4dzVIa4-";
var _ = "wQ0CyaaCCZw-";
var _ = "QB99AacwCmk-";
var _ = "_8pHkaq8PPAw-";
var _ = "Ud1IMOOMuOI-";
var _ = "_58A1pqE2uSo-";
var _ = "myYtt3d51V4-";
var _ = "cmJ4ozhx9RE-";
var _ = "_2wGlOytoBKw-";
var _ = "_049Kz8GkLto-";
var _ = "qNNahG-7Lqc-";
var _ = "Yp-VG7Zk9AY-";
var _ = "CX4Bz9fkpP4-";
var _ = "mL8bNWbmixg-";
var _ = "fPuSnTPv8Sw-";
var _ = "pHDUu-G3uyI-";
var _ = "do714Zjyklo-";
var _ = "eemuAILDlkQ-";
var _ = "Q-TiFOlMJ8s-";
var _ = "V29-mSaJz7Q-";
var _ = "lFK0b3Au9I8-";
var _ = "eaAkMgON-CQ-";
var _ = "gLRm-ue6Z7Q-";
var _ = "RRZn8XwJQEk-";
var _ = _(_(), 1);
function _(_) {
  return _.private_data?.persona_state === 0
    ? _
    : _.private_data?.game_id !== void 0
      ? _
      : _;
}
function _() {
  let { data: _ } = _();
  return _
    ? (0, _.jsx)("div", {
        className: _,
        children: (0, _.jsx)(_, {
          snr: !0,
          external: !0,
          _: _.STORE_BASE_URL + "cart",
          className: _,
          children: _.LocalizeReact(
            "#Cart_CountWidget",
            (0, _.jsx)("b", {
              children: _(_),
            }),
          ),
        }),
      })
    : null;
}
function _() {
  let { data: _ } = _();
  return _?.formatted_balance
    ? (0, _.jsx)("div", {
        className: _,
        children: (0, _.jsx)(_, {
          snr: !0,
          external: !0,
          _: _.STORE_BASE_URL + "account",
          className: _,
          children: _.LocalizeReact(
            "#responsive_menu_wallet_balance",
            (0, _.jsx)("b", {
              children: _.formatted_balance,
            }),
          ),
        }),
      })
    : null;
}
function _(_) {
  let { navContent: _, children: _, labelAddition: _ } = _,
    _ = (0, _.useRef)(null),
    _ = (0, _.useRef)(null),
    _ = (0, _.useRef)(null),
    _ = (0, _.useRef)(void 0);
  if (!_ && (!_.children || _.children.length === 0))
    return (0, _.jsx)(_, {
      item: _,
      className: _,
      responsive: !0,
    });
  function _() {
    _.current &&
      (_.current && _.current.cancel(),
      (_.current = _.current.animate(
        {
          height: [
            `${_.current.offsetHeight}px`,
            `${_.current.offsetHeight + _.current.offsetHeight}px`,
          ],
        },
        {
          duration: 250,
          fill: "forwards",
        },
      )));
  }
  function _() {
    _.current &&
      (_.current && _.current.cancel(),
      (_.current = _.current.animate(
        {
          height: [
            `${_.current.offsetHeight + _.current.offsetHeight}px`,
            `${_.current.offsetHeight}px`,
          ],
        },
        {
          duration: 250,
          fill: "forwards",
        },
      )),
      _.current.addEventListener("finish", () => {
        _.current && (_.current.open = !1);
      }));
  }
  function _() {
    _.current?.open ? _() : _.current && _();
  }
  return (0, _.jsxs)("details", {
    name: "responsive-menu",
    className: _,
    ref: _,
    onToggle: _,
    children: [
      (0, _.jsxs)("summary", {
        className: _,
        ref: _,
        children: [
          _.label_responsive ?? _.label,
          " ",
          _,
          " ",
          (0, _.jsx)("div", {
            className: _,
          }),
        ],
      }),
      (0, _.jsxs)("div", {
        className: _,
        ref: _,
        children: [
          _.children?.map((_, _) =>
            (0, _.jsx)(
              _,
              {
                item: _,
                className: _,
                responsive: !0,
              },
              _,
            ),
          ),
          _,
        ],
      }),
    ],
  });
}
function _() {
  return (0, _.jsxs)(_.Fragment, {
    children: [
      (0, _.jsxs)("div", {
        className: _,
        children: [
          (0, _.jsx)(_, {
            snr: !0,
            external: !0,
            _: _.STORE_BASE_URL + "about",
            children: "关于蒸汽平台",
          }),
          "  |  ",
          (0, _.jsx)(_, {
            snr: !0,
            external: !0,
            _: _.STORE_BASE_URL + "steam_refunds",
            children: "退款政策",
          }),
          "  |  ",
          (0, _.jsx)(_, {
            snr: !0,
            external: !0,
            _: _.STORE_BASE_URL + "subscriber_agreement",
            children: "软件许可服务协议",
          }),
          "  |  ",
          (0, _.jsx)("br", {}),
          (0, _.jsx)(_, {
            snr: !0,
            external: !0,
            _: _.STORE_BASE_URL + "privacy_agreement",
            children: "个人信息保护政策",
          }),
          "  |  ",
          (0, _.jsx)(_, {
            snr: !0,
            external: !0,
            _: _.STORE_BASE_URL + "data_outbound",
            children: "个人信息出境告知书",
          }),
          "  |  ",
          (0, _.jsx)("br", {}),
          (0, _.jsx)(_, {
            _: "https://about.steamchina.com/content_report.html",
            target: "_blank",
            rel: "noreferrer",
            children: "不良内容举报投诉",
          }),
          "  |  ",
          (0, _.jsx)(_, {
            _: "https://about.steamchina.com/infringement_report.html",
            target: "_blank",
            rel: "noreferrer",
            children: "侵权投诉",
          }),
          "  |  ",
          (0, _.jsx)(_, {
            _: "https://about.steamchina.com/parentguardianship_agreement.html",
            target: "_blank",
            rel: "noreferrer",
            children: "家长监护",
          }),
        ],
      }),
      (0, _.jsxs)("div", {
        className: _,
        children: [
          (0, _.jsxs)(_, {
            external: !0,
            className: _,
            _: "http://qr.weibo.cn/g/7kla92",
            target: "_blank",
            rel: "noreferrer",
            children: [
              (0, _.jsx)("img", {
                alt: "微博",
                className: _,
                src: `${_.STORE_CDN_URL}/public/shared/images/footer/weibo_logo.svg?v=1`,
              }),
              (0, _.jsx)("div", {
                children: "微博",
              }),
            ],
          }),
          (0, _.jsxs)(_, {
            external: !0,
            className: _,
            _: "http://weixin.qq.com/r/LC-K0i3EunDFrWmx93o_",
            target: "_blank",
            rel: "noreferrer",
            children: [
              (0, _.jsx)("img", {
                alt: "微信",
                className: _,
                src: `${_.STORE_CDN_URL}/public/shared/images/footer/wechat_logo.svg?v=1`,
              }),
              (0, _.jsx)("div", {
                children: "微信",
              }),
            ],
          }),
        ],
      }),
      (0, _.jsx)("hr", {
        className: _,
      }),
      (0, _.jsxs)("div", {
        className: _,
        children: [
          (0, _.jsx)(_, {
            external: !0,
            _: "https://www.wanmei.com/",
            target: "_blank",
            rel: "noreferrer",
            children: (0, _.jsx)("img", {
              className: _,
              src: `${_.STORE_CDN_URL}/public/shared/images/footer/pw_logo.svg?v=1`,
              alt: "",
            }),
          }),
          (0, _.jsx)(_, {
            external: !0,
            _: "https://www.valvesoftware.com",
            target: "_blank",
            rel: "noreferrer",
            children: (0, _.jsx)("img", {
              className: _,
              src: `${_.STORE_CDN_URL}/public/shared/images/footer/valve_logo.svg?v=1`,
              alt: "",
            }),
          }),
        ],
      }),
      (0, _.jsxs)("div", {
        className: _,
        children: [
          (0, _.jsxs)("div", {
            children: [
              "© ",
              new Date().getFullYear(),
              " Valve Corporation 版权所有，完美世界已获授权。",
              (0, _.jsx)("br", {}),
              "所有商标均属于其在美国或其他国家的拥有者。",
            ],
          }),
          (0, _.jsxs)("div", {
            className: _,
            children: [
              "© 完美世界征奇(上海)多媒体科技有限公司 版权所有。",
              (0, _.jsx)("br", {}),
              "增值电信业务经营许可证沪B2-20180406",
            ],
          }),
        ],
      }),
    ],
  });
}
function _() {
  return (0, _.jsxs)(_.Fragment, {
    children: [
      (0, _.jsx)("div", {
        children: (0, _.jsx)("img", {
          src: `${_.STORE_CDN_URL}/public/shared/images/responsive/logo_valve_footer.png`,
          alt: "",
        }),
      }),
      _.Localize("#responsive_footer_copyright"),
      "  ",
      (0, _.jsxs)("span", {
        children: [
          (0, _.jsx)(_, {
            _: _.STORE_BASE_URL + "privacy_agreement/",
            target: "_blank",
            children: _.Localize("#Common_Footer_PrivacyPolicy"),
          }),
          " |  ",
          (0, _.jsx)(_, {
            _: "http://www.valvesoftware.com/legal.htm",
            target: "_blank",
            children: _.Localize("#Common_Footer_Legal"),
          }),
          " |  ",
          (0, _.jsx)(_, {
            _: _.STORE_BASE_URL + "subscriber_agreement/",
            target: "_blank",
            children: _.Localize("#Common_Footer_SSA"),
          }),
          " |  ",
          (0, _.jsx)(_, {
            _: _.STORE_BASE_URL + "steam_refunds/",
            target: "_blank",
            children: _.Localize("#Common_Footer_Refunds"),
          }),
        ],
      }),
    ],
  });
}
function _(_) {
  let {
      userDetails: _,
      navContent: _,
      globalActions: _,
      changeLanguagePath: _,
      open: _,
      onDismiss: _,
      cartInResponsiveMenu: _,
    } = _,
    [_, _] = (0, _.useState)(!1),
    _ = (0, _.useRef)(null),
    _ = (0, _.useRef)(void 0);
  (0, _.useEffect)(() => {
    _.current &&
      (_
        ? (_.current?.showModal(),
          _.current?.cancel(),
          (_.current = _.current.animate(
            {
              transform: ["translateX(var(--closedX))", "translateX(0)"],
            },
            {
              duration: 250,
              fill: "forwards",
              easing: "ease-in-out",
            },
          )))
        : _.current &&
          (_.current?.cancel(),
          (_.current = _.current.animate(
            {
              transform: ["translateX(0)", "translateX(var(--closedX))"],
            },
            {
              duration: 250,
              fill: "forwards",
              easing: "ease-in-out",
            },
          )),
          _.current.addEventListener("finish", () => _.current?.close())));
  }, [_]);
  let _ =
    _.find((_) => _._ === "language") ??
    _[0]?.children?.find((_) => _._ === "language");
  return (0, _.jsxs)(_.Fragment, {
    children: [
      (0, _.jsxs)("dialog", {
        className: (0, _.default)(_, _(_.EREALM) && _),
        ref: _,
        onMouseDown: (_) => _.target === _.current && _(),
        onKeyDown: (_) => _.key === "Escape" && _(),
        inert: !_,
        children: [
          (0, _.jsxs)("div", {
            className: _,
            children: [
              !_ &&
                (0, _.jsx)(_, {
                  className: (0, _.default)(_),
                  item: {
                    href: "/login/",
                    label: _.Localize("#global_menu_login_caps"),
                  },
                }),
              _ &&
                (0, _.jsxs)("div", {
                  className: (0, _.default)(_, _(_)),
                  children: [
                    (0, _.jsxs)("div", {
                      className: _,
                      children: [
                        (0, _.jsx)("a", {
                          className: _,
                          href: _(_),
                          children: (0, _.jsx)(_, {
                            playerLinkDetails: _,
                            statusPosition: "border",
                            alt: "",
                            role: "presentation",
                            size: "Small",
                            className: _,
                          }),
                        }),
                        " ",
                        (0, _.jsx)("a", {
                          className: _,
                          href: _(_),
                          children: _.public_data?.persona_name,
                        }),
                      ],
                    }),
                    _ && (0, _.jsx)(_, {}),
                    (0, _.jsx)(_, {}),
                  ],
                }),
              _.notifications &&
                (0, _.jsx)(_, {
                  navContent: {
                    label: "Notifications",
                    href: "",
                  },
                  labelAddition: (0, _.jsxs)("div", {
                    className: (0, _.default)(
                      _,
                      _.notifications?.unread_count && _,
                    ),
                    children: [
                      _.notifications.unread_count > 0 &&
                        (0, _.jsx)("span", {
                          className: _,
                        }),
                      (0, _.jsx)("span", {
                        className: _,
                        children: _(_.notifications?.unread_count ?? 0),
                      }),
                    ],
                  }),
                  children: (0, _.jsx)(_, {
                    dynamicImport: async () =>
                      (await import("./greenenvelope-XXXXXXXX.js"))
                        .GreenEnvelope,
                    fallback: (0, _.jsx)("div", {}),
                    bResponsiveHeader: !0,
                    notifications: _.notifications,
                  }),
                }),
              _.map((_, _) =>
                (0, _.jsx)(
                  _,
                  {
                    navContent: _,
                  },
                  _,
                ),
              ),
              (0, _.jsxs)("div", {
                className: "minor_menu_items",
                children: [
                  _ &&
                    (0, _.jsxs)(_.Fragment, {
                      children: [
                        (0, _.jsx)(_, {
                          className: (0, _.default)(_, _),
                          item: {
                            href: _.STORE_BASE_URL + "account",
                            label: _.Localize("#global_menu_account_details"),
                          },
                        }),
                        (0, _.jsx)(_, {
                          className: (0, _.default)(_, _),
                          item: {
                            href: _.STORE_BASE_URL + "account/preferences",
                            label: _.Localize(
                              "#global_menu_account_preferences",
                            ),
                          },
                        }),
                      ],
                    }),
                  !_(_.EREALM) &&
                    (0, _.jsx)(_.Fragment, {
                      children: (0, _.jsx)("button", {
                        className: (0, _.default)(_, _),
                        onClick: () => _(!0),
                        children: _.Localize("#global_menu_change_language"),
                      }),
                    }),
                  _ &&
                    (0, _.jsx)("button", {
                      className: (0, _.default)(_, _),
                      onClick: () => _,
                      children: _.Localize("#global_menu_change_user"),
                    }),
                  !_(_.EREALM) &&
                    (0, _.jsx)(_, {
                      className: (0, _.default)(_, _),
                      item: {
                        href: _.STORE_BASE_URL + "mobile",
                        label: _.Localize("#global_menu_getmobileapp"),
                      },
                    }),
                  !_() &&
                    (0, _.jsx)("button", {
                      className: (0, _.default)(_, _),
                      onClick: _,
                      children: _.Localize("#global_menu_view_desktop_website"),
                    }),
                ],
              }),
            ],
          }),
          (0, _.jsx)("footer", {
            className: _,
            children: _(_.EREALM) ? (0, _.jsx)(_, {}) : (0, _.jsx)(_, {}),
          }),
        ],
      }),
      _ &&
        (0, _.jsx)(_, {
          open: _,
          onDismiss: () => _(!1),
          menuAction: _,
          changeLanguagePath: _,
          bLoggedIn: _ != null,
        }),
    ],
  });
}
var _ = _(_(), 1);
function _(_) {
  let { fnRenderCustomHeader: _ = (_) => _ } = _,
    [_, _] = (0, _.useState)(!1);
  return (0, _.jsxs)(_.Fragment, {
    children: [
      (0, _.jsxs)("header", {
        className: (0, _.default)(_, _.className),
        children: [
          (0, _.jsxs)("div", {
            className: (0, _.default)(_, _.bWiderHeader && _),
            children: [
              (0, _.jsx)("a", {
                href: _.STORE_BASE_URL,
                "aria-label": _.Localize("#Aria_Steam_Home_Link"),
                className: _,
                children: (0, _.jsx)("img", {
                  src: _(_(_.EREALM) ? _ : _),
                  alt: _.Localize("#Aria_Steam_Home_Link"),
                  width: 176,
                  height: 44,
                }),
              }),
              (0, _.jsx)(_, {
                navContent: _.navContent,
              }),
              (0, _.jsx)(_, {
                globalActions: _.globalActions,
                userDetails: _.userDetails,
                notifications: _.notifications,
                changeLanguagePath: _.changeLanguagePath,
              }),
              (0, _.jsx)(_, {}),
              _.children,
            ],
          }),
          (0, _.jsx)("div", {
            className: _,
            children: (0, _.jsxs)("nav", {
              children: [
                (0, _.jsxs)("button", {
                  className: _,
                  onClick: () => _(!0),
                  "aria-expanded": _,
                  "aria-label": _.Localize("#Aria_Navigation"),
                  children: [
                    (0, _.jsx)("img", {
                      src: _(_),
                      alt: "",
                      className: _,
                    }),
                    _.notifications?.unread_count !== 0 &&
                      (0, _.jsx)("div", {
                        className: _,
                        children: (0, _.jsx)("div", {
                          className: (0, _.default)(_),
                          children: (0, _.jsx)("span", {
                            className: _,
                            children: _(_.notifications?.unread_count ?? 0),
                          }),
                        }),
                      }),
                  ],
                }),
                _(
                  (0, _.jsx)("a", {
                    href: _.STORE_BASE_URL,
                    "aria-label": _.Localize("#Aria_Steam_Home_Link"),
                    className: _,
                    children: (0, _.jsx)("img", {
                      src: _(_(_.EREALM) ? _ : _),
                      alt: _.Localize("#Aria_Steam_Home_Link"),
                      height: 36,
                    }),
                  }),
                ),
              ],
            }),
          }),
        ],
      }),
      (0, _.jsx)(_, {
        ..._,
        open: _,
        onDismiss: () => _(!1),
      }),
    ],
  });
}
var _ = _(_()),
  _ = _(_());
var _ = _(_());
var _ = _(_());
var _ = {
  m_unPID: 0,
  m_nBrowserID: -1,
};
var _ = class {
  m_fnRender;
  m_rgLoadingLinks = [];
  constructor(_, _, _) {
    if (((this.m_rgLoadingLinks = []), _))
      for (let _ = 0; _ < _.length; _++) this.AddLink(_[_], !0);
    else if (_) {
      let _ = _.getElementsByTagName("link");
      for (let _ = 0; _ < _.length; _++) {
        let _ = _[_];
        this.AddLink(_, !1);
      }
    }
  }
  AddLink(_, _) {
    if (_) {
      let _ = !1;
      try {
        (!_.sheet || !_.sheet.cssRules || _.sheet.cssRules.length == 0) &&
          (_ = !0);
      } catch {}
      _ &&
        (_.addEventListener("load", this.OnLinkLoad),
        this.m_rgLoadingLinks.push(_));
    } else
      _.addEventListener("load", this.OnLinkLoad),
        this.m_rgLoadingLinks.push(_);
  }
  SetTarget(_) {
    (this.m_fnRender = _),
      this.m_rgLoadingLinks.length == 0 &&
        (this.m_fnRender(), (this.m_fnRender = void 0));
  }
  OnLinkLoad(_) {
    _.currentTarget.removeEventListener("load", this.OnLinkLoad),
      _(this.m_rgLoadingLinks, _.currentTarget),
      this.m_rgLoadingLinks.length == 0 &&
        (this.m_fnRender?.(), (this.m_fnRender = void 0));
  }
};
_([_], _.prototype, "OnLinkLoad", 1);
var _ = _(_());
function _() {
  return _() ? 256 : 0;
}
function _(_) {
  let _ = 0;
  switch (_) {
    case 0:
      return (_ |= 8192), (_ |= 8), (_ |= 512), (_ |= 4194304), _;
    case 1:
      return (
        (_ |= _(0)),
        (_ |= 16384),
        (_ |= 262144),
        (_ |= 1048576),
        (_ |= 16777216),
        _
      );
    case 2:
      return (_ |= _(0)), (_ |= 262144), (_ |= 16384), (_ |= 4), (_ |= _()), _;
    case 3:
      return (
        (_ |= 8),
        (_ |= 262144),
        (_ |= 16384),
        (_ |= 65536),
        (_ |= 4194304),
        (_ |= _()),
        _
      );
    case 4:
      return (
        (_ = 8),
        (_ |= 262144),
        (_ |= 16384),
        (_ |= 1048576),
        (_ |= 4194304),
        (_ |= _()),
        _
      );
  }
}
function _() {
  let { ownerWindow: _ } = _();
  return _.GetPopupForWindow(_)?.browser_info || _;
}
var _ = _.createContext({
    ownerWindow: window,
  }),
  _ = () => _.useContext(_);
function _(_) {
  let { ownerWindow: _, children: _ } = _,
    _ = _.useMemo(
      () => ({
        ownerWindow: _,
      }),
      [_],
    );
  return _.createElement(
    _.Provider,
    {
      value: _,
    },
    _,
  );
}
var _ = class {
  m_strName;
  m_strTitle;
  m_rgParams;
  m_popup;
  m_element;
  m_renderWhenReady;
  m_bCreateHidden;
  m_bCreated = !1;
  m_onCreateRender = null;
  m_bFocused = !1;
  constructor(_, _) {
    _(this),
      _(
        _,
        "Name is required.  This is an internal name, different from title.",
      ),
      (this.m_strName = _);
    let { title: _, eCreationFlags: _, ..._ } = _;
    (this.m_rgParams = {
      ..._,
      eCreationFlags: _ ?? 0,
    }),
      this.m_rgParams.target_browser &&
        (this.m_strName += "_uid" + this.m_rgParams.target_browser.m_unPID),
      (this.m_bCreateHidden = !!(this.m_rgParams.eCreationFlags & 2)),
      (this.m_strTitle = _);
  }
  UpdateParamsBeforeShow(_) {
    return _;
  }
  OnDrop(_) {
    console.log("Ignoring drop onto toplevel window", _),
      _.preventDefault(),
      _.stopPropagation();
  }
  OnDragOver(_) {
    _.preventDefault(),
      (_.dataTransfer.dropEffect = "none"),
      _.stopPropagation();
  }
  OnMessage(_) {
    _.data === "window_moved" && this.OnMove(),
      _.data === "window_resized" && this.OnResize(),
      _.data === "popup-created" && this.OnCreateInternal();
  }
  Show(_ = 1) {
    let _;
    typeof _ == "boolean" ? (_ = _ ? 1 : 0) : (_ = _),
      window.SteamClient && (this.m_rgParams.eCreationFlags |= 2),
      this.m_rgParams.eCreationFlags & 512 && (_ = 0),
      this.BIsValid() &&
        (this.BIsClosed()
          ? ((this.m_popup = void 0), (this.m_element = void 0))
          : _ != 0 && this.Focus(_));
    let _ = _.GetExistingPopup(this.m_strName);
    if (_ && !this.m_rgParams.replace_existing_popup) return;
    this.m_rgParams = this.UpdateParamsBeforeShow(this.m_rgParams);
    let _, _, _;
    _
      ? ((_ = _.m_element),
        (_ = _.m_popup),
        (_ = _.m_renderWhenReady),
        _.RemoveTrackedPopup(_),
        _.ReleasePopup(),
        _?.removeEventListener("beforeunload", _.OnBeforeUnloadEvent),
        _?.removeEventListener("unload", _.OnUnload),
        _?.removeEventListener("resize", _.OnResizeEvent),
        _?.removeEventListener("focus", this.OnFocusInternal),
        _?.removeEventListener("blur", this.OnBlurInternal),
        _?.removeEventListener("drop", _.OnDrop),
        _?.removeEventListener("dragover", _.OnDragOver),
        _?.removeEventListener("message", this.OnMessage))
      : (({ popup: _, element: _ } = _.CreatePopup(this.m_strName, {
          ...this.m_rgParams,
          title: this.m_strTitle,
        })),
        (_ = new _(_?.document, _))),
      _ &&
        _ &&
        ((_.document.title = this.m_strTitle),
        _.addEventListener("beforeunload", this.OnBeforeUnloadEvent),
        _.addEventListener("unload", this.OnUnload),
        _.addEventListener("resize", this.OnResizeEvent),
        _.addEventListener("focus", this.OnFocusInternal),
        _.addEventListener("blur", this.OnBlurInternal),
        _.addEventListener("drop", this.OnDrop),
        _.addEventListener("dragover", this.OnDragOver),
        _.addEventListener("message", this.OnMessage),
        _.LANGUAGE &&
          (_.document.documentElement.setAttribute("lang", _() ?? ""),
          _(_.LANGUAGE) &&
            _.document.documentElement.setAttribute("dir", "rtl")),
        (this.m_popup = _),
        (this.m_element = _),
        (this.m_renderWhenReady = _),
        this.m_renderWhenReady?.SetTarget(() => {
          this.m_popup &&
            this.m_element &&
            this.RenderInternal(this.m_popup, this.m_element, _);
        })),
      _.AddTrackedPopup(this),
      _ && (this.OnCreateInternal(), _ != 0 && this.Focus(_));
  }
  RemoveEventListeners() {
    this.window?.removeEventListener("beforeunload", this.OnBeforeUnloadEvent),
      this.window?.removeEventListener("unload", this.OnUnload),
      this.window?.removeEventListener("resize", this.OnResizeEvent),
      this.window?.removeEventListener("focus", this.OnFocusInternal),
      this.window?.removeEventListener("blur", this.OnBlurInternal),
      this.window?.removeEventListener("drop", this.OnDrop),
      this.window?.removeEventListener("dragover", this.OnDragOver),
      this.window?.removeEventListener("message", this.OnMessage);
  }
  RenderInternal(_, _, _) {
    if (!this.m_bCreated) {
      this.m_onCreateRender = () => this.RenderInternal(_, _, _);
      return;
    }
    this.browser_info &&
      _(this.browser_info.m_eBrowserType) &&
      (_.ownerDocument.body.className += " VR"),
      this.Render(_, _),
      this.OnLoad(),
      _?.SteamClient &&
        !this.m_bCreateHidden &&
        (_ != 0
          ? _.SteamClient.Window.BringToFront(_)
          : _.SteamClient.Window.ShowWindow());
  }
  OnCreateInternal() {
    this.m_bCreated ||
      ((this.m_bCreated = !0),
      this.OnCreate(),
      this.m_onCreateRender &&
        (this.m_onCreateRender(), (this.m_onCreateRender = null)));
  }
  OnCreate() {}
  OnResizeEvent() {
    this.OnResize();
  }
  OnBeforeUnloadEvent() {
    this.OnBeforeUnload();
  }
  OnUnload(_) {
    this.RemoveEventListeners(),
      _.RemoveTrackedPopup(this),
      this.OnClose(),
      (this.m_popup = void 0);
  }
  get browser_info() {
    return this.m_rgParams.target_browser;
  }
  get window() {
    return this.m_popup;
  }
  get root_element() {
    return this.m_element;
  }
  get title() {
    return this.m_strTitle;
  }
  set title(_) {
    (this.m_strTitle = _),
      this.m_popup && (this.m_popup.document.title = this.m_strTitle);
  }
  get params() {
    return this.m_rgParams;
  }
  Focus(_ = 1) {
    _ != 0 &&
      (this.m_popup &&
      typeof this.m_popup.SteamClient < "u" &&
      typeof this.m_popup.SteamClient.Window < "u"
        ? this.m_popup.SteamClient.Window.BringToFront(_)
        : this.m_popup && this.m_popup.focus());
  }
  Close() {
    this.m_popup &&
      (_(this.m_popup.window, "Window.Close")
        ? this.m_popup.window.SteamClient.Window.Close()
        : this.m_popup.window.close());
  }
  GetName() {
    return this.m_strName;
  }
  BIsValid() {
    return !!this.m_popup;
  }
  BIsClosed() {
    return !this.m_popup || this.m_popup.closed;
  }
  BIsVisible() {
    return !!(
      this.m_popup &&
      !this.m_popup.closed &&
      this.m_popup.document.visibilityState == "visible"
    );
  }
  BIsFocused() {
    return this.BIsVisible() && !!this.m_popup?.document.hasFocus();
  }
  OnFocusInternal() {
    this.m_popup && this.m_popup.document.body.classList.add("WindowFocus"),
      (this.m_bFocused = !0),
      this.OnFocus();
  }
  OnBlurInternal() {
    this.m_popup && this.m_popup.document.body.classList.remove("WindowFocus"),
      (this.m_bFocused = !1),
      this.OnBlur();
  }
  get focused() {
    return this.m_bFocused;
  }
  GetWindowRestoreDetails() {
    return _(this.m_popup, "Window.GetWindowRestoreDetails") &&
      !this.m_popup.closed
      ? this.m_popup.SteamClient.Window.GetWindowRestoreDetails()
      : Promise.resolve("");
  }
  IsMinimized() {
    return _(this.m_popup, "Window.IsWindowMinimized") && !this.m_popup.closed
      ? this.m_popup.SteamClient.Window.IsWindowMinimized()
      : Promise.resolve(!1);
  }
  IsMaximized() {
    return _(this.m_popup, "Window.IsWindowMaximized") && !this.m_popup.closed
      ? this.m_popup.SteamClient.Window.IsWindowMaximized()
      : Promise.resolve(!1);
  }
  ReleasePopup() {
    this.OnClose(), (this.m_popup = null);
  }
  OnMove() {}
  OnResize() {
    this.IsMaximized().then((_) => {
      _
        ? this.m_popup?.document.body.classList.add("Maximized")
        : this.m_popup?.document.body.classList.remove("Maximized");
    });
  }
  OnBeforeUnload() {}
  OnFocus() {}
  OnBlur() {}
};
_([_], _.prototype, "m_bFocused", 2),
  _([_], _.prototype, "OnMessage", 1),
  _([_], _.prototype, "RenderInternal", 1),
  _([_], _.prototype, "OnCreateInternal", 1),
  _([_], _.prototype, "OnResizeEvent", 1),
  _([_], _.prototype, "OnBeforeUnloadEvent", 1),
  _([_], _.prototype, "OnUnload", 1),
  _([_], _.prototype, "OnFocusInternal", 1),
  _([_], _.prototype, "OnBlurInternal", 1);
var _ = class extends _ {
  m_strSavedDimensionsKey;
  m_strInitialSavedDimensionsKey;
  m_strInitialRestoreDetails;
  m_bExpires;
  constructor(_, _, _, _) {
    super(_, _), this.SetSavedDimensionsKey(_), (this.m_bExpires = _);
  }
  BIsInOverlay() {
    return (
      this.browser_info &&
      this.browser_info.m_unPID != 0 &&
      this.browser_info.m_nBrowserID != -1
    );
  }
  SetSavedDimensionsKey(_) {
    this.m_strSavedDimensionsKey = _;
  }
  UpdateParamsBeforeShow(_) {
    return (
      this.m_strSavedDimensionsKey &&
      !_.bIgnoreSavedDimensions &&
      !_.strRestoreDetails
        ? ((this.m_strInitialSavedDimensionsKey = this.GetSavedDimensionsKey()),
          (_.strRestoreDetails = _.GetRestoreDetails(
            this.m_strInitialSavedDimensionsKey,
          )))
        : _.strRestoreDetails &&
          ((this.m_strInitialSavedDimensionsKey = this.GetSavedDimensionsKey()),
          _.SetRestoreDetails(
            this.m_strInitialSavedDimensionsKey,
            _.strRestoreDetails,
            this.m_bExpires,
          )),
      _
    );
  }
  OnLoad() {
    this.GetWindowRestoreDetails().then((_) => {
      (this.m_strInitialRestoreDetails = _), this.OnResizeComplete(_);
    });
  }
  OnMove() {
    super.OnMove(), this.QueryAndStoreWindowPosition();
  }
  OnResize() {
    super.OnResize(), this.QueryAndStoreWindowPosition();
  }
  OnResizeComplete(_) {}
  QueryAndStoreWindowPosition() {
    if (this.m_strInitialRestoreDetails) {
      let _ = this.GetSavedDimensionsKey();
      this.m_popup?.setTimeout(() => {
        this.GetWindowRestoreDetails().then((_) => {
          let _ =
            this.m_rgParams.strRestoreDetails == _ &&
            _ == this.m_strInitialSavedDimensionsKey;
          this.m_popup &&
            this.m_strSavedDimensionsKey &&
            _ &&
            !_ &&
            (_.SetRestoreDetails(_, _, this.m_bExpires),
            (this.m_rgParams.strRestoreDetails = _),
            (this.m_strInitialSavedDimensionsKey = _),
            this.OnResizeComplete(_));
        });
      }, 30);
    }
  }
  OnBeforeUnload() {
    this.QueryAndStoreWindowPosition(), super.OnBeforeUnload();
  }
  OnClose() {}
  SaveWindowPosition(_) {
    _.SetRestoreDetails(this.GetSavedDimensionsKey(), _, !1),
      (this.m_rgParams.strRestoreDetails = _);
  }
};
_([_], _.prototype, "QueryAndStoreWindowPosition", 1);
var _ = class {
  m_bShuttingDown = !1;
  m_mapPopups = _.map([], {
    deep: !1,
  });
  m_rgShutdownCallbacks = [];
  m_rgPopupCreatedCallbacks = new _();
  m_rgPopupDestroyedCallbacks = new _();
  m_unCurrentAccountID = 0;
  m_mapRestoreDetails = new Map();
  m_bSaveRequired = !1;
  m_DynamicCSSObserver;
  constructor() {
    if ("addEventListener" in window) {
      window.addEventListener("beforeunload", (_) => {
        this.m_bShuttingDown = !0;
        for (let _ of this.m_rgShutdownCallbacks) _();
        let _ = [];
        this.m_mapPopups.forEach((_) => {
          _.BIsValid() && !_.BIsClosed() && _.push(_);
        });
        for (let _ of _)
          _.window?.SteamClient.Browser?.SetShouldExitSteamOnBrowserClosed &&
            _.window.SteamClient.Browser.SetShouldExitSteamOnBrowserClosed(!1),
            _.window?.SteamClient.Window.SetHideOnClose &&
              _.window?.SteamClient.Window.SetHideOnClose(!1),
            _.Close();
        this.m_bSaveRequired && this.SaveSavedDimensionStore(),
          this.m_mapPopups.clear();
      });
      let _ = document.querySelector("head");
      _(_, "Couldn't find head element"),
        _ &&
          ((this.m_DynamicCSSObserver = new MutationObserver(() => {
            let _ = _();
            this.m_mapPopups.forEach((_) => {
              _(_.window.document, _, !1);
            });
          })),
          this.m_DynamicCSSObserver.observe(_, {
            childList: !0,
          }));
    }
  }
  BAnyPopupHasFocus() {
    for (let _ of this.m_mapPopups.values()) if (_.focused) return !0;
    return !1;
  }
  BAnyMenuHasFocus() {
    for (let _ of this.m_mapPopups.values())
      if (_.focused && (_.params.eCreationFlags ?? 0) & 8) return !0;
    return !1;
  }
  SetCurrentLoggedInAccountID(_) {
    this.m_unCurrentAccountID != _ &&
      ((this.m_unCurrentAccountID = _),
      _ ? this.LoadSavedDimensionStore() : this.ClearSavedDimensionStore());
  }
  AddShutdownCallback(_) {
    this.m_rgShutdownCallbacks.push(_);
  }
  AddPopupCreatedCallback(_) {
    return this.m_rgPopupCreatedCallbacks.Register(_);
  }
  AddPopupDestroyedCallback(_) {
    return this.m_rgPopupDestroyedCallbacks.Register(_);
  }
  AddTrackedPopup(_) {
    this.m_mapPopups.set(_.GetName(), _),
      _.BIsValid() && this.m_rgPopupCreatedCallbacks.Dispatch(_);
  }
  RemoveTrackedPopup(_) {
    this.m_rgPopupDestroyedCallbacks.Dispatch(_),
      this.m_mapPopups.delete(_.GetName());
  }
  GetExistingPopup(_) {
    return this.m_mapPopups.get(_);
  }
  GetPopups() {
    return this.m_mapPopups.values();
  }
  GetPopupForWindow(_) {
    for (let _ of this.m_mapPopups.values()) if (_.window === _) return _;
  }
  ClosePopupsOwnedByBrowser(_) {
    this.m_mapPopups.forEach((_) => {
      _.browser_info &&
        _.browser_info.m_nBrowserID == _.m_nBrowserID &&
        _.browser_info.m_unPID == _.m_unPID &&
        _.Close();
    });
  }
  static CreatePopup(_, _) {
    let _ = _.dimensions || {},
      _ = _.width || 300,
      _ = _.height || 300,
      _ = _.title,
      _ = "width=" + _ + ",height=" + _;
    typeof _.left < "u" && (_ += ",left=" + _.left),
      typeof _.top < "u" && (_ += ",top=" + _.top),
      (_ += ",resizeable,status=0,toolbar=0,menubar=0,location=0");
    let _ = "about:blank",
      _ = [];
    _.push("createflags=" + _.eCreationFlags),
      _.minWidth && _.push("minwidth=" + _.minWidth),
      _.minHeight && _.push("minheight=" + _.minHeight),
      _.maxWidth && _.maxWidth != 1 / 0 && _.push("maxwidth=" + _.maxWidth),
      _.maxHeight && _.maxHeight != 1 / 0 && _.push("maxheight=" + _.maxHeight),
      _.target_browser
        ? (_.push("pid=" + _.target_browser.m_unPID),
          _.push("browser=" + _.target_browser.m_nBrowserID),
          _.target_browser.m_eBrowserType
            ? _.push("browserType=" + _.target_browser.m_eBrowserType)
            : _.browserType && _.push("browserType=" + _.browserType),
          _.availscreenwidth &&
            _.availscreenheight &&
            (_.push("screenavailwidth=" + _.availscreenwidth),
            _.push("screenavailheight=" + _.availscreenheight)))
        : _.browserType && _.push("browserType=" + _.browserType),
      _.strVROverlayKey && _.push("vrOverlayKey=" + _.strVROverlayKey),
      _.strRestoreDetails && _.push("restoredetails=" + _.strRestoreDetails),
      _.window_opener_id && _.push("openerid=" + _.window_opener_id),
      _.parent_container_popup_id &&
        _.push("parentcontainerpopupid=" + _.parent_container_popup_id),
      _.center_on_window &&
        typeof _.left > "u" &&
        typeof _.top > "u" &&
        _.push(
          "centerOnBrowserID=" +
            _.center_on_window.SteamClient.Browser.GetBrowserID(),
        ),
      _.strUserAgent && _.push("useragent=" + _.strUserAgent),
      _.hwndParent && _.push("hwndParent=" + _.hwndParent),
      _.bPinned && _.push("pinned=true"),
      _.bModal && _.push("modal=true"),
      _ && (_ += "?" + _.join("&"));
    let _ = (_.owner_window || window).open(_, _, _);
    if (!_)
      return (
        console.error(
          `Failed to create popup, browser/CEF may be blocking popups for "${window.location.origin}"`,
        ),
        {}
      );
    let _ = "";
    _.html_class && (_ = `class="${_.html_class}"`);
    let _ = "";
    _.body_class && (_ = `class="${_.body_class}"`);
    let _ = "";
    _.body_role && (_ = `role="${_.body_role}"`);
    let _ = "";
    _.popup_class && (_ = `class="${_.popup_class}"`);
    let _ = `<!DOCTYPE html><html ${_}><head><title></title></head><body ${_} ${_}><div id="popup_target" ${_}></div></body></html>`;
    return (
      _.document.write(_),
      (_.document.title = _),
      _.document.close(),
      _(_, _()),
      {
        popup: _,
        element: _.document.getElementById("popup_target"),
      }
    );
  }
  BShuttingDown() {
    return this.m_bShuttingDown;
  }
  GetLocalStorageKey() {
    return "PopupSavedDimensions_" + this.m_unCurrentAccountID;
  }
  LoadSavedDimensionStore() {
    if (!this.m_unCurrentAccountID) return;
    let _ = this.GetLocalStorageKey();
    this.m_mapRestoreDetails.clear();
    let _ = window.localStorage.getItem(_);
    if (_)
      try {
        let _ = JSON.parse(_);
        this.m_mapRestoreDetails = new Map(_);
      } catch {}
  }
  SaveSavedDimensionStore() {
    if (!this.m_unCurrentAccountID || !this.m_bSaveRequired) return;
    let _ = this.GetLocalStorageKey(),
      _ = JSON.stringify(Array.from(this.m_mapRestoreDetails));
    try {
      window.localStorage.setItem(_, _), (this.m_bSaveRequired = !1);
    } catch (_) {
      if ("name" in _ && _.name == "QuotaExceededError") {
        console.log("Quota exceeded");
        for (let _ of Object.keys(window.localStorage))
          _.startsWith("PopupSavedDimensions_") &&
            _ != _ &&
            window.localStorage.removeItem(_);
        window.localStorage.setItem(_, _), (this.m_bSaveRequired = !1);
      }
    }
  }
  DebouncedSaveSavedDimensionStore() {
    this.SaveSavedDimensionStore();
  }
  ClearSavedDimensionStore() {
    this.m_mapRestoreDetails?.clear(), (this.m_bSaveRequired = !1);
  }
  GetRestoreDetails(_) {
    if (!this.m_mapRestoreDetails?.has(_)) return "";
    let _ = this.m_mapRestoreDetails.get(_);
    return (
      (_.last_used = Date.now()),
      (this.m_bSaveRequired = !0),
      _.strRestoreDetails
    );
  }
  SetRestoreDetails(_, _, _) {
    if (_) {
      if (_) {
        if (this.m_mapRestoreDetails.size > 50) {
          let _ = null,
            _ = Date.now();
          for (let _ of Array.from(this.m_mapRestoreDetails.keys())) {
            let _ = this.m_mapRestoreDetails.get(_);
            _.last_used < _ && _.bExpires && ((_ = _.last_used), (_ = _));
          }
          _ && this.m_mapRestoreDetails.delete(_);
        }
        let _ = {
          strRestoreDetails: _,
          last_used: Date.now(),
          bExpires: _,
        };
        this.m_mapRestoreDetails.set(_, _);
      } else this.m_mapRestoreDetails.delete(_);
      (this.m_bSaveRequired = !0),
        this.m_bShuttingDown
          ? this.SaveSavedDimensionStore()
          : this.DebouncedSaveSavedDimensionStore();
    }
  }
};
_([_, _(100)], _.prototype, "DebouncedSaveSavedDimensionStore", 1);
var _ = new _();
window.g_PopupManager = _;
var _ = _(_()),
  _ = _.default.createContext(null);
function _(_) {
  let {
      refContextMenuManager: _,
      bRegisterMenuManager: _ = !0,
      children: _,
    } = _,
    _ = _()?.ownerWindow || window,
    _ = _.default.useRef(void 0);
  return (
    _.current || (_.current = new _()),
    _.default.useLayoutEffect(() => {
      if (_)
        return (
          _.SetMenuManager(_, _.current), () => _.SetMenuManager(_, void 0)
        );
    }, [_, _]),
    _.default.useLayoutEffect(() => (_(_, _.current), () => _(_, void 0)), [_]),
    (0, _.jsx)(_.Provider, {
      value: _.current,
      children: _,
    })
  );
}
function _() {
  return _.default.useContext(_);
}
var _ = _(_()),
  _ = _(_());
var _ = _(_());
var _ = _(_());
var _ = _(_()),
  _ = _.createContext({
    body_class: "",
  });
function _() {
  return _.useContext(_);
}
function _(_, _, _) {
  let _ = _.useRef(void 0),
    [_, _] = _.useState(void 0),
    _ = _();
  return (
    _.current || (_.current = new _(_, _(_, _), _)),
    (_.current.m_callbacks = _),
    _.useEffect(() => {
      if (!_.current?.params.bNoInitialShow) {
        let _ = _.current?.params.bNoFocusOnShow ? 2 : 1;
        _.current?.Show(_);
      }
      return () => {
        (_.current.m_callbacks = void 0),
          _.current.window?.SteamClient.Window.SetHideOnClose &&
            _.current.window?.SteamClient.Window.SetHideOnClose(!1),
          _.current.Close();
      };
    }, []),
    _.useEffect(() => {
      _.current.window?.SteamClient.Window.SetHideOnClose &&
        _.current.window?.SteamClient.Window.SetHideOnClose(!!_.bHideOnClose);
    }, [_.bHideOnClose]),
    {
      popup: _.current.window,
      element: _,
      popupObj: _.current,
    }
  );
}
function _(_, _) {
  return {
    ..._,
    body_class: _(_.body_class, _.body_class),
  };
}
var _ = class extends _ {
  m_callbacks;
  m_fnReadyToRender;
  constructor(_, _, _) {
    super(_, _), (this.m_fnReadyToRender = _);
  }
  DoCallback(_) {
    this.m_callbacks?.[_]?.(this.m_popup, this.m_element);
  }
  UpdateParamsBeforeShow(_) {
    return this.m_callbacks?.updateParamsBeforeShow
      ? this.m_callbacks.updateParamsBeforeShow(_)
      : _;
  }
  OnCreate() {
    this.m_callbacks?.onCreate &&
      this.m_callbacks.onCreate(this.m_popup, this.m_element);
  }
  OnBlur() {
    this.DoCallback("onBlur");
  }
  OnFocus() {
    this.DoCallback("onFocus");
  }
  OnLoad() {
    this.DoCallback("onLoad");
  }
  OnMove() {
    this.DoCallback("onMove");
  }
  OnResize() {
    this.DoCallback("onResize");
  }
  OnClose() {
    this.DoCallback("onClose");
  }
  Render(_, _) {
    this.m_fnReadyToRender(_);
  }
};
var _ = _(_());
function _(_) {
  let { managerOverride: _, bSuppressMouseOverlay: _ } = _,
    _ = _(),
    _ = _(),
    _ = _(),
    _ = _ ?? _;
  _(_.OnMenusChanged, _);
  let _ = !_ && _.BShouldRenderMouseOverlay(),
    _ = _.GetAllMenus();
  return (0, _.jsxs)(_.Fragment, {
    children: [
      _ && (0, _.jsx)(_, {}),
      _.map((_) =>
        (0, _.jsx)(
          _,
          {
            children: (0, _.jsx)(_, {
              instance: _,
              browserInfo: _,
            }),
          },
          _.key,
        ),
      ),
    ],
  });
}
function _(_) {
  let { instance: _, browserInfo: _, children: _ } = _,
    _ = !1,
    _ = _(),
    _ = _().ownerWindow,
    _ = _.default.useRef(void 0);
  _.current === void 0 &&
    (_.current =
      (_ || _.options.bForcePopup || _.innerWidth < 400 || _?.BOnlyPopups()) &&
      !!_.SteamClient?.Window);
  let _ = _.default.useMemo(
      () => ({
        instance: _,
        styles: _,
        presentation: 0,
      }),
      [_],
    ),
    _ = _ || _.ReactElement;
  return (0, _.jsx)(_.Provider, {
    value: _,
    children: _.current
      ? (0, _.jsx)(_, {
          instance: _,
          browserInfo: _,
          children: _,
        })
      : (0, _.jsx)(_, {
          instance: _,
          children: _,
        }),
  });
}
function _(_) {
  let { instance: _, children: _ } = _;
  return (0, _.jsx)(_, {
    ..._.position,
    children: _,
  });
}
function _(_) {
  let { instance: _, browserInfo: _, children: _ } = _,
    _ = _.default.useRef(null),
    _ = _().ownerWindow,
    _ = _.SteamClient.Browser.GetBrowserID(),
    _ = _.default.useCallback(
      (_) => {
        let { options: _, position: _ } = _,
          _ = _.element;
        if (_.bScreenCoordinates)
          _.dimensions = {
            left: _.clientX,
            top: _.clientY,
            width: 2,
            height: 1,
          };
        else {
          let _ = _(_, _.getBoundingClientRect());
          (_.dimensions = {
            left: _.right,
            top: _.top,
            width: 2,
            height: 1,
          }),
            (_.availscreenwidth = _.screen.availWidth),
            (_.availscreenheight = _.screen.availHeight);
        }
        return _;
      },
      [_, _],
    ),
    _ = _.options.bStandalone ? _(4) : _(3);
  _.options.bCreateHidden && (_ |= 2), _.options.bAlwaysOnTop && (_ |= 8192);
  let { popupObj: _, element: _ } = _(
    "contextmenu_" + _.key,
    {
      title: _.options.title || "Menu",
      html_class: _(
        _.ContextMenuPopup,
        "client_chat_frame",
        _.options.bStandalone && _.Standalone,
      ),
      popup_class: _.PopupTarget,
      body_class: _(_.ContextMenuPopupBody, "ContextMenuPopupBody"),
      replace_existing_popup: !1,
      target_browser: _,
      window_opener_id: _,
      bHideOnClose: !0,
      eCreationFlags: _,
    },
    {
      updateParamsBeforeShow: _,
    },
  );
  return (
    (0, _.useEffect)(() => {
      if (_)
        if (_.visible) {
          _.current && _.current.PositionMenu(),
            _.current && _.current.PositionPopupWindow();
          let _ = _.options.bNoFocusWhenShown ? 2 : 1;
          _.TakeFocus(_);
        } else
          _.options.bRetainOnHide &&
            window.setTimeout(() => {
              _.window?.SteamClient.Window.HideWindow();
            }, 30);
    }, [_, _, _.visible]),
    _(_.window),
    _.default.useEffect(() => {
      _.SetPopup(_);
    }, [_, _]),
    _
      ? _.default.createPortal(
          (0, _.jsx)(_, {
            ref: _,
            ..._.position,
            parentWin: _,
            popup: _,
            children: _,
          }),
          _,
        )
      : null
  );
}
var _ = _(_());
var _ = _(_()),
  _ = _(_());
var _ = _(_());
var _ = _(_());
function _(_) {
  let [_, _] = _.default.useState(!1),
    _ = _.default.useCallback(() => {
      _(_, "Window.IsWindowMaximized")
        ? _.SteamClient.Window.IsWindowMaximized().then((_) => {
            _(_);
          })
        : _?.screen &&
          _(
            _.screen.availWidth == _.innerWidth &&
              _.screen.availHeight == _.innerHeight,
          );
    }, [_]);
  return (
    _.default.useEffect(_, [_, _]),
    _(_, "resize", _),
    _(_, ["window_resized"], _),
    _
  );
}
function _(_, _ = 100) {
  let [_, _] = _.default.useState(!1),
    _ = _.default.useCallback(() => _(!0), [_]),
    _ = _.default.useCallback(() => _(!1), [_]);
  return (
    _.default.useEffect(() => {
      if (_)
        return (
          _.addEventListener("focus", _),
          _.addEventListener("blur", _),
          () => {
            _.removeEventListener("focus", _), _.removeEventListener("blur", _);
          }
        );
    }, [_, _, _]),
    _(_, _)
  );
}
var _ = _(_());
function _(_) {
  let { popup: _, onMaximize: _, bOSX: _ } = _,
    _ = _(_),
    _ = _.useCallback(() => {
      _
        ? _()
        : _(_, "Window.ToggleMaximize") &&
          _.SteamClient.Window.ToggleMaximize();
    }, [_, _]);
  return (0, _.jsx)(_, {
    className: _(_ ? "restoreButton" : "maximizeButton", "windowControlButton"),
    onClick: _,
    children: !_ && (_ ? (0, _.jsx)(_, {}) : (0, _.jsx)(_, {})),
  });
}
function _(_) {
  let { popup: _, onMinimize: _, bOSX: _ } = _,
    _ = _.useCallback(() => {
      _.SteamClient.Window.Minimize();
    }, [_]);
  return (0, _.jsx)(_, {
    className: "minimizeButton windowControlButton",
    onClick: _ ?? _,
    children: !_ && (0, _.jsx)(_, {}),
  });
}
function _(_) {
  let { popup: _, onClose: _, bOSX: _ } = _,
    _ = _.useCallback(() => {
      _ && (_(_, "Window.Close") ? _.SteamClient.Window.Close() : _.close());
    }, [_]);
  return (0, _.jsx)(_, {
    className: "closeButton windowControlButton",
    onClick: _ ?? _,
    children: !_ && (0, _.jsx)(_, {}),
  });
}
function _(_) {
  let { className: _, onClick: _, children: _ } = _,
    _ = _.useCallback(
      (_) => {
        _ && (_.stopPropagation(), _(_));
      },
      [_],
    );
  return (0, _.jsx)("div", {
    className: _("title-area-icon", _),
    onClick: _,
    children: (0, _.jsx)("div", {
      className: "title-area-icon-inner",
      children: _,
    }),
  });
}
function _(_) {
  let {
      className: _,
      style: _,
      hideActions: _,
      hideClose: _,
      hideMin: _,
      hideMax: _,
      bOSX: _ = _(),
      bForceWindowFocused: _,
      onMinimize: _,
      onMaximize: _,
      onClose: _,
      extraActions: _,
      popup: _,
      children: _,
    } = _,
    _ = _(_);
  return (0, _.jsxs)("div", {
    className: _(
      "TitleBar",
      "title-area",
      _ && "OSX",
      (_ || _) && "WindowFocus",
      _,
    ),
    style: _,
    children: [
      (0, _.jsx)("div", {
        className: "title-area-highlight",
      }),
      (0, _.jsx)("div", {
        className: "title-area-children",
        children: _,
      }),
      !_ &&
        (0, _.jsxs)(_.Fragment, {
          children: [
            _ &&
              (0, _.jsx)("div", {
                className: "title-bar-actions extra-actions",
                children: _,
              }),
            (0, _.jsxs)("div", {
              className: "title-bar-actions window-controls",
              children: [
                !_ &&
                  (0, _.jsx)(_, {
                    popup: _,
                    onClose: _,
                    bOSX: _,
                  }),
                !_ &&
                  (0, _.jsx)(_, {
                    popup: _,
                    onMaximize: _,
                    bOSX: _,
                  }),
                !_ &&
                  (0, _.jsx)(_, {
                    popup: _,
                    onMinimize: _,
                    bOSX: _,
                  }),
              ],
            }),
          ],
        }),
    ],
  });
}
var _ = _(_());
function _(_) {
  let { Modal: _ } = _,
    { name: _, modalProps: _, options: _ } = _,
    _ = _().ownerWindow,
    { popup: _, element: _ } = _(
      _,
      {
        title: _.strTitle,
        html_class:
          "client_chat_frame fullheight ModalDialogPopup LegacyPopup " +
          (_.className || ""),
        body_class: "fullheight ModalDialogBody",
        popup_class: "fullheight popup_chat_frame",
        owner_window: void 0,
        replace_existing_popup: !0,
        target_browser: _.browserContext,
        availscreenwidth: _.screen.availWidth,
        availscreenheight: _.screen.availHeight,
        bModal: _.bHideMainWindowForPopouts,
      },
      {
        updateParamsBeforeShow: (_) => _(_, _, _, _),
        onClose: () => _.fnOnClose && _.fnOnClose(),
      },
    ),
    _ = _.useCallback(() => {
      _.bHideMainWindowForPopouts && _?.SteamClient.Window.BringToFront();
    }, [_.bHideMainWindowForPopouts, _]);
  _(_, "click", _);
  let _ = _?.bHideActions,
    _ =
      typeof _?.nDragAreaHeight == "number"
        ? {
            height: _.nDragAreaHeight,
          }
        : void 0;
  return _
    ? _.createPortal(
        (0, _.jsx)(_, {
          ownerWindow: _,
          children: (0, _.jsxs)("div", {
            className: "PopupFullWindow",
            onContextMenu: _,
            children: [
              (0, _.jsx)(_, {
                hideMin: !0,
                hideMax: !0,
                popup: _,
                hideActions: _,
                style: _,
              }),
              (0, _.jsx)(_, {
                browserInfo: _.browserContext,
                bCenterPopupsOnWindow: _.bCenterOnWindow,
                children: _.element,
              }),
            ],
          }),
        }),
        _,
      )
    : null;
}
function _(_, _, _, _) {
  let _,
    _,
    _ = _.popupWidth || 500,
    _ = _.popupHeight || 400,
    _;
  if (_.IN_CLIENT && _?.SteamClient?.Browser?.GetBrowserID)
    _ = _.SteamClient.Browser.GetBrowserID();
  else {
    let _ = _.screen;
    (_ = (_.availWidth - _) / 2), (_ = (_.availHeight - _) / 2);
    let _ = _;
    typeof _.availLeft < "u" &&
      typeof _.availTop < "u" &&
      ((_ += _.availLeft), (_ += _.availTop));
  }
  return {
    ..._,
    dimensions: {
      width: _,
      height: _,
      left: _,
      top: _,
    },
    center_on_window: _.bCenterOnWindow ? _ : void 0,
    window_opener_id: _,
  };
}
var _ = _(_()),
  _ = _(_());
var _ = _(_());
function _(_) {
  let { ModalManager: _ } = _,
    [_, _] = _.useState(void 0),
    [_, _] = _.useState(!0),
    _ = _.useRef(0),
    _ = _.useCallback(() => {
      _.startTransition(() => {
        _(!0);
      });
    }, []);
  _.useEffect(() => _.RegisterMeasureModalCallback(_).Unregister, [_, _]),
    _.useLayoutEffect(() => {
      _ ||
        _.startTransition(() => {
          _(_.TakeMeasureModalRequest()), _(!1);
        });
    }, [_, _, _]);
  let _ = _.useCallback((_) => {
    _.current++,
      _.startTransition(() => {
        _((_) => (_ === _ ? void 0 : _));
      });
  }, []);
  return _
    ? (0, _.jsx)(
        _,
        {
          onMeasureComplete: _,
          request: _,
        },
        _.current,
      )
    : null;
}
function _(_) {
  let [_, _] = _.useState(),
    _ = _().ownerWindow;
  return (
    _.useLayoutEffect(() => {
      let _ = _.document.body,
        _ = _.document.createElement("div");
      return (
        (_.style.position = "absolute"),
        (_.style.visibility = "hidden"),
        _.appendChild(_),
        _(_),
        () => {
          _.removeChild(_);
        }
      );
    }, [_]),
    _
      ? _.createPortal(
          (0, _.jsx)(_, {
            ..._,
            elContainer: _,
          }),
          _,
        )
      : null
  );
}
function _(_) {
  let { elContainer: _, onMeasureComplete: _, request: _ } = _;
  return (
    _.useEffect(() => {
      let _ = !1,
        _ = (_) => {
          _ || (_.fnResults(_), _(_), (_ = !0));
        };
      return _(_, _.promiseContentReady).then(_), () => _(void 0);
    }, [_, _, _]),
    (0, _.jsx)(_, {
      children: _.rctToMeasure,
    })
  );
}
async function _(_, _) {
  _ && (await _);
  let _ = document;
  _.IN_STEAMUI && _.fonts && (await _.fonts.ready);
  let _ = _.getBoundingClientRect(),
    _ = Math.ceil(_.height),
    _ = Math.ceil(_.width);
  return {
    height: _,
    width: _,
  };
}
var _ = class _ {
    key;
    static sm_lastKey = 0;
    ModalClosedCallback = new _();
    constructor() {
      this.key = `Modal_${_.sm_lastKey++}`;
    }
  },
  _ = class extends _ {
    element;
    ModalUpdatedCallback = new _();
    constructor(_) {
      super(), (this.element = _);
    }
    UpdateModal(_) {
      (this.element = _), this.ModalUpdatedCallback.Dispatch();
    }
  },
  _ = class extends _ {
    m_OnElementReadyCallbacks = new _();
    m_OnActiveModalCallbacks = new _();
    constructor() {
      super();
    }
    get OnElementReadyCallbacks() {
      return this.m_OnElementReadyCallbacks;
    }
    get OnModalActiveCallbacks() {
      return this.m_OnActiveModalCallbacks;
    }
    RefModalElement(_) {
      _ && this.m_OnElementReadyCallbacks.Dispatch(_);
    }
    SetActive(_) {
      this.m_OnActiveModalCallbacks.Dispatch(_);
    }
  };
_([_], _.prototype, "RefModalElement", 1);
var _ = class extends _ {
  m_strName;
  m_modalProps;
  m_options;
  constructor(_, _, _, _) {
    super(_),
      (this.m_strName = _),
      (this.m_modalProps = _),
      (this.m_options = _);
  }
  get name() {
    return this.m_strName;
  }
  get modalProps() {
    return this.m_modalProps;
  }
  get options() {
    return this.m_options;
  }
};
var _ = _(_());
var _ = class {
    m_bUsePopups = !0;
    m_bOnlyPopups = !1;
    m_bCenterPopupsOnWindow = !1;
    m_rgModals = [];
    m_OnModalCountChangedCallbacks = new _();
    m_OnModalShownCallbacks = new _();
    m_OnModalHiddenCallbacks = new _();
    m_cMountedOverlays = 0;
    m_rgMeasureModalRequests = [];
    m_OnMeasureModal = new _();
    m_rgLegacyPopupModals = [];
    m_OnLegacyPopupModalCountChanged = new _();
    m_browserInfo;
    get ModalCountChangedCallbacks() {
      return this.m_OnModalCountChangedCallbacks;
    }
    get LegacyPopupModalCountChangedCallbacks() {
      return this.m_OnLegacyPopupModalCountChanged;
    }
    RegisterOnModalShownCallback(_) {
      return this.m_OnModalShownCallbacks.Register(_);
    }
    RegisterOnModalHiddenCallback(_) {
      return this.m_OnModalHiddenCallbacks.Register(_);
    }
    RegisterMeasureModalCallback(_) {
      return this.m_OnMeasureModal.Register(_);
    }
    TakeMeasureModalRequest() {
      if (this.m_rgMeasureModalRequests.length)
        return this.m_rgMeasureModalRequests.shift();
    }
    RegisterOverlay(_) {
      _(
        this.m_cMountedOverlays == 0,
        "Duplicate modal DialogOverlay; modals will appear in both",
      ),
        this.m_cMountedOverlays++;
      let _ = this.m_OnModalCountChangedCallbacks.Register(_);
      return () => {
        this.m_cMountedOverlays--, _.Unregister();
      };
    }
    OnModalCountChanged(_) {
      _ == "show" &&
        this.m_cMountedOverlays == 0 &&
        window.setTimeout(() => {
          _(
            this.m_cMountedOverlays > 0,
            "Modal was shown but ModalManager has no associated DialogOverlay",
          );
        }, 50),
        this.m_OnModalCountChangedCallbacks.Dispatch(this.m_rgModals.length),
        _ == "show"
          ? this.m_OnModalShownCallbacks.Dispatch(this.m_rgModals.length)
          : _ == "hide" &&
            this.m_OnModalHiddenCallbacks.Dispatch(this.m_rgModals.length);
    }
    get modals() {
      return this.m_rgModals;
    }
    get active_modal() {
      if (this.m_rgModals.length)
        return this.m_rgModals[this.m_rgModals.length - 1];
    }
    ShowModal(_) {
      return this.ShowModalInternal(_);
    }
    RemoveModal(_) {
      let _ = this.m_rgModals.indexOf(_);
      _ != -1 && this.m_rgModals.splice(_, 1),
        _.ModalClosedCallback.Dispatch(),
        this.OnModalCountChanged("hide");
    }
    ShowModalInternal(_) {
      _(
        !this.m_bOnlyPopups,
        "Attempting to show modal in popup-only modal manager; will not display.",
      );
      let _ = new _(_);
      this.m_rgModals.push(_);
      let _ = {
        Close: () => {
          this.RemoveModal(_);
        },
        Update: (_) => {
          _.UpdateModal(_);
        },
        ClosedPromise: new Promise((_) => {
          let _ = _.ModalClosedCallback.Register(() => {
            _(), _.Unregister();
          });
        }),
      };
      return this.OnModalCountChanged("show"), _;
    }
    ShowPortalModal() {
      _(
        !this.m_bOnlyPopups,
        "Attempting to show modal in popup-only modal manager; will not display.",
      );
      let _ = new _();
      return (
        this.m_rgModals.push(_),
        this.OnModalCountChanged("show"),
        {
          key: _.key,
          Close: () => {
            this.RemoveModal(_);
          },
          OnElementReadyCallbacks: _.OnElementReadyCallbacks,
          OnModalActiveCallbacks: _.OnModalActiveCallbacks,
        }
      );
    }
    SetUsePopups(_) {
      this.m_bUsePopups = _;
    }
    BUsePopups() {
      return this.m_bUsePopups || this.m_bOnlyPopups;
    }
    SetOnlyPopups(_) {
      this.m_bOnlyPopups = _;
    }
    BOnlyPopups() {
      return this.m_bOnlyPopups;
    }
    SetBrowserInfo(_) {
      this.m_browserInfo = _;
    }
    GetBrowserInfo() {
      return this.m_browserInfo;
    }
    SetCenterPopupsOnWindow(_) {
      this.m_bCenterPopupsOnWindow = _;
    }
    BCenterPopupsOnWindow() {
      return this.m_bCenterPopupsOnWindow;
    }
    RequestModalMeasure(_, _, _) {
      this.m_rgMeasureModalRequests.push({
        rctToMeasure: _,
        fnResults: _,
        promiseContentReady: _,
      }),
        this.m_OnMeasureModal.Dispatch();
    }
    get legacy_popup_modals() {
      return this.m_rgLegacyPopupModals;
    }
    ShowLegacyPopupModal(_, _, _, _) {
      let _ = () => {
          let _ = this.m_rgLegacyPopupModals.indexOf(_);
          _ != -1 && this.m_rgLegacyPopupModals.splice(_, 1),
            this.m_OnLegacyPopupModalCountChanged.Dispatch(
              this.m_rgLegacyPopupModals.length,
            ),
            _.ModalClosedCallback.Dispatch(),
            _.fnOnClose && _.fnOnClose();
        },
        _ = new _(
          _,
          _,
          {
            ..._,
            fnOnClose: _,
          },
          {
            bCenterOnWindow: this.m_bCenterPopupsOnWindow,
            ..._,
          },
        );
      return (
        this.m_rgLegacyPopupModals.push(_),
        this.m_OnLegacyPopupModalCountChanged.Dispatch(
          this.m_rgLegacyPopupModals.length,
        ),
        {
          Close: _,
          Update: (_) => {
            _.UpdateModal(_);
          },
          ClosedPromise: new Promise((_) => {
            let _ = _.ModalClosedCallback.Register(() => {
              _(), _.Unregister();
            });
          }),
        }
      );
    }
  },
  _ = class {
    m_mapModalManager = new WeakMap();
    GetModalManager(_) {
      let _ = this.m_mapModalManager.get(_);
      return (
        _ ||
          (console.assert(
            !1,
            `Early access to modal manager, creating one for ${_.document.title}`,
          ),
          (_ = new _()),
          this.m_mapModalManager.set(_, _)),
        _
      );
    }
    RegisterModalManager(_, _) {
      _(
        !this.m_mapModalManager.has(_) || _ == window,
        `Stomping CModalManager for ${_.document.title}!`,
      );
      let _ = this.m_mapModalManager.get(_);
      return (
        this.m_mapModalManager.set(_, _),
        () => {
          _
            ? this.m_mapModalManager.set(_, _)
            : this.m_mapModalManager.delete(_);
        }
      );
    }
    UnregisterModalManager(_) {
      this.m_mapModalManager.delete(_);
    }
  },
  _ = new _();
function _(_) {
  return _.GetModalManager(_);
}
var _ = "kNiAxGG9vCI-";
var _ = "_3G8oCr9ck-g-";
var _ = _(_()),
  _ = _(_());
var _ = {
  TextToolTip: "xa7nOX-adjA-",
  ToolTipCustom: "PlhA2maQjXM-",
  ToolTipTitle: "cIyIjwsfsgk-",
  Center: "anxU2KCS-vI-",
  ToolTipInsetContent: "l-gADqxrGeQ-",
};
var _ = _(_()),
  _ = _.createContext({}),
  _ = () => _.useContext(_);
function _(_) {
  let [_, _] = _.useState(null),
    _ = _.useMemo(
      () => ({
        targetElement: _,
      }),
      [_],
    );
  return (0, _.jsxs)(_.Provider, {
    value: _,
    children: [
      (0, _.jsx)("div", {
        ref: _,
      }),
      _.children,
    ],
  });
}
function _(_) {
  let { divProps: _, tooltipProps: _ } = _({
    ..._,
    toolTipContent: _.toolTipContent
      ? (0, _.jsx)(_, {
          children: _(_.toolTipContent),
        })
      : null,
  });
  return (0, _.jsxs)(_, {
    className: "tool-tip-source",
    noFocusRing: !0,
    focusable: _.bNavStop ?? !!_.onClick,
    ..._,
    children: [
      (0, _.jsx)(_, {
        ..._,
      }),
      _.children,
    ],
  });
}
function _(_) {
  let { divProps: _, tooltipProps: _ } = _(_);
  return (0, _.jsxs)(_, {
    className: "tool-tip-source",
    noFocusRing: !0,
    focusable: _.bNavStop ?? !!_.onClick,
    ..._,
    children: [
      (0, _.jsx)(_, {
        ..._,
      }),
      _.children,
    ],
  });
}
function _(_) {
  let {
      toolTipContent: _,
      nDelayShowMS: _ = 300,
      bDisabled: _,
      direction: _,
      nBodyAlignment: _,
      nBodyDistance: _,
      nAllowOffscreenPx: _,
      nMaxLateralMoveOnScreen: _,
      strTooltipClassname: _,
      bNavStop: _,
      bTopmost: _,
      usePointerEvents: _,
      children: _,
      onMouseLeave: _,
      ..._
    } = _,
    _ = {
      direction: _,
      nBodyAlignment: _,
      nBodyDistance: _,
      nAllowOffscreenPx: _,
      nMaxLateralMoveOnScreen: _,
      className: _,
      bTopmost: _,
    },
    [_, _] = _.useState(!1),
    [_, _] = _.useState(),
    _ = _.useCallback(
      (_) => {
        (_ && "pointerType" in _ && _.pointerType != "mouse") ||
          (_(!0), _(_.currentTarget));
      },
      [_],
    ),
    _ = _.useCallback(() => {
      _(!1);
    }, []),
    _ = {
      active: _ && !_,
      target: _,
      nDelayShowMS: _,
      hoverPositionProps: _,
      children: _,
    },
    _ = {
      ..._,
    };
  return (
    _
      ? ((_.onPointerEnter = _), (_.onPointerLeave = _))
      : ((_.onMouseEnter = _), (_.onMouseLeave = _)),
    {
      divProps: _,
      stateHandlers: {
        setTarget: _,
        setHovered: _,
      },
      tooltipProps: _,
    }
  );
}
function _(_) {
  return typeof _ == "string" ? _.LocalizeIfToken(_, !0) : _;
}
function _(_) {
  return (0, _.jsx)("div", {
    ..._,
    className: _(_.TextToolTip, _.className),
  });
}
function _(_) {
  let {
      active: _,
      target: _,
      nDelayShowMS: _ = 300,
      hoverPositionProps: _,
      children: _,
    } = _,
    [_, _] = _.useState(_),
    _ = _();
  if (
    (_.useEffect(() => {
      if (_)
        if (_) {
          let _ = window.setTimeout(() => _(!0), _);
          return () => window.clearTimeout(_);
        } else {
          _(!0);
          return;
        }
      else {
        _(!1);
        return;
      }
    }, [_]),
    !_ || !_ || !_)
  )
    return null;
  let { targetElement: _ } = _;
  return _.createPortal(
    (0, _.jsx)(_, {
      target: _,
      ..._,
      children: _,
    }),
    _ ?? _.ownerDocument.body,
  );
}
var _ = _(_()),
  _ = _(_());
function _(_) {
  _.useEffect(() => {
    if (_)
      return (
        document.body.classList.add(_), () => document.body.classList.remove(_)
      );
  }, [_]);
}
function _(_) {
  let _ = _().ownerWindow,
    _ = _(),
    _ = _.useCallback(() => {
      _?.SteamClient?.Window && _.SteamClient.Window.BringToFront();
    }, [_]);
  _.useEffect(() => _.RegisterOverlay(_), [_, _]),
    _.useEffect(() => _.RegisterOnModalShownCallback(_).Unregister, [_, _]);
}
function _(_, _) {
  return _(
    (_) => {
      if (!_ || !_) return;
      let _ = _.ownerDocument.defaultView;
      return _.RegisterModalManager(_, _);
    },
    [_],
  );
}
function _(_) {
  let {
      ModalManager: _,
      bRegisterModalManager: _ = !0,
      DialogWrapper: _,
      rctActiveContextMenus: _,
      bUseDialogElement: _ = !0,
      style: _,
      ..._
    } = _,
    _ = _.modals,
    _ = _ && !!_.length,
    _ = _.active_modal;
  _(_), _(_);
  let _ = _(_, _),
    _ = null,
    _ = !_;
  return (
    _ && _.length
      ? (_ = _.map((_) => {
          let _ = _ == _,
            _ = {
              key: _.key,
              active: _,
              rctActiveContextMenus: _ && _ ? _ : void 0,
            };
          return _ instanceof _
            ? (0, _.createElement)(_, {
                ..._,
                key: _.key,
                modal: _,
                Component: _ ?? _,
              })
            : _ instanceof _
              ? (0, _.createElement)(_, {
                  ..._,
                  key: _.key,
                  modal: _,
                  bUseDialogElement: _,
                })
              : void 0;
        }))
      : ((_ = !0),
        (_ = {
          ..._,
          display: "none",
        })),
    (0, _.jsxs)(_.Fragment, {
      children: [
        (0, _.jsxs)(_, {
          children: [
            (0, _.jsxs)("div", {
              ..._,
              style: _,
              ref: _,
              className: _(_.className, "FullModalOverlay"),
              children: [
                (0, _.jsx)("div", {
                  className: "ModalOverlayContent ModalOverlayBackground",
                }),
                _,
              ],
            }),
            _ && _,
          ],
        }),
        (0, _.jsx)(_, {
          ModalManager: _,
        }),
        (0, _.jsx)(_, {
          ModalManager: _,
        }),
      ],
    })
  );
}
function _(_) {
  let {
    modal: _,
    rctActiveContextMenus: _,
    active: _,
    bUseDialogElement: _,
  } = _;
  _.useEffect(() => {
    if (_)
      return (
        _.SetActive(_),
        () => {
          _.SetActive(!1);
        }
      );
  }, [_, _]);
  let _ = (0, _.jsxs)(_, {
    children: [
      (0, _.jsx)("div", {
        className: _("ModalOverlayContent", _ ? "active" : "inactive"),
        ref: _.RefModalElement,
      }),
      _,
    ],
  });
  return _
    ? (0, _.jsx)(_, {
        active: _,
        children: _,
      })
    : _;
}
function _(_) {
  let { modal: _, active: _, rctActiveContextMenus: _, Component: _ } = _,
    _ = _();
  return (
    _(_.ModalUpdatedCallback, _),
    (0, _.jsx)(_, {
      children: (0, _.jsxs)(_, {
        className: _("ModalOverlayContent", _ ? "active" : "inactive"),
        active: _,
        modalKey: _.key,
        children: [_, _.element],
      }),
    })
  );
}
function _(_) {
  let { className: _, active: _, children: _ } = _;
  return (0, _.jsx)(_, {
    active: _,
    children: (0, _.jsx)(_, {
      children: (0, _.jsx)("div", {
        className: _,
        tabIndex: -1,
        children: _,
      }),
    }),
  });
}
function _(_) {
  let { active: _, children: _ } = _,
    _ = _.useRef(null),
    [_, _] = _.useState(!1);
  return (
    _.useLayoutEffect(() => {
      _ && !_ ? _(!0) : !_ && _ && _.current?.close();
    }, [_, _]),
    _.useLayoutEffect(() => {
      _ && _.current.showModal();
    }, [_]),
    (0, _.jsx)("dialog", {
      ref: _,
      className: _,
      onClose: () => _(!1),
      onCancel: (_) => _.preventDefault(),
      children: _,
    })
  );
}
function _(_) {
  let { ModalManager: _ } = _,
    _ = _();
  return (
    _(_.LegacyPopupModalCountChangedCallbacks, _),
    (0, _.jsx)(_.Fragment, {
      children: _.legacy_popup_modals.map((_) =>
        (0, _.jsx)(
          _,
          {
            Modal: _,
          },
          _.key,
        ),
      ),
    })
  );
}
var _ = _(_()),
  _ = _.createContext({}),
  _ = _.memo(function (_) {
    let {
        children: _,
        bRenderOverlayAtRoot: _,
        refModalManager: _,
        DialogWrapper: _,
        bUseDialogElement: _ = !0,
        ContextMenuComponent: _ = _,
        refContextMenuManager: _,
        browserInfo: _,
        bUsePopups: _,
        bOnlyPopups: _,
        bCenterPopupsOnWindow: _,
        bRegisterManagersWithWindow: _ = !0,
        ..._
      } = _,
      _ = _.useRef(void 0);
    _.current || (_.current = new _());
    let _ = (0, _.jsx)(_, {
      ..._,
      DialogWrapper: _,
      ModalManager: _.current,
      bUseDialogElement: _,
      bRegisterModalManager: _,
      rctActiveContextMenus: (0, _.jsx)(_, {}),
    });
    _.bRenderOverlayAtRoot &&
      typeof document < "u" &&
      "body" in document &&
      (_ = _.createPortal(_, document.body)),
      _(_, _.current),
      _ !== void 0 && _.current?.SetUsePopups(_),
      _ !== void 0 && _.current?.SetCenterPopupsOnWindow(_),
      _ !== void 0 && _.current?.SetOnlyPopups(_),
      _.current.SetBrowserInfo(_);
    let _ = _.useMemo(
      () => ({
        ModalManager: _.current,
        DialogWrapper: _,
      }),
      [_],
    );
    return (0, _.jsx)(_.Provider, {
      value: _,
      children: (0, _.jsxs)(_, {
        refContextMenuManager: _,
        bRegisterMenuManager: _,
        children: [
          (0, _.jsx)(_, {
            children: _,
          }),
          _.children,
        ],
      }),
    });
  });
function _() {
  return _.useContext(_).ModalManager;
}
function _() {
  return _.useContext(_).DialogWrapper;
}
function _(_) {
  let _ = _();
  _.useEffect(() => {
    if (_) return _.RegisterModalManager(_, _);
  }, [_, _]);
}
var _ = _(_());
var _ = _(_());
var _ = _(_());
var _ = _(_()),
  _ = _.createContext({}),
  _ = () => _.useContext(_);
function _(_) {
  let _ = _().ModalPosition ?? _;
  return (0, _.jsx)(_, {
    ..._,
  });
}
function _(_) {
  let _ = {},
    _;
  _.onEscKeypress &&
    ((_.tabIndex = 0),
    (_.onKeyDown = (_) => {
      _.keyCode == 27 && (_.onEscKeypress(), _.stopPropagation());
    }),
    (_.onMouseDown = (_) => {
      _.currentTarget === _.target &&
        !_.bDisableBackgroundDismiss &&
        (_.onEscKeypress(), _.stopPropagation());
    }),
    (_ = (_) => {
      _ && (_(_, _.ownerDocument.activeElement) || _.focus());
    }));
  let _ = ["ModalPosition"];
  _.className && _.push(_.className),
    _.bDestructiveWarning && _.push("Destructive");
  let _ =
      _.renderContent ||
      ((_) =>
        (0, _.jsx)("div", {
          ..._,
        })),
    _ = (0, _.jsxs)(_.Fragment, {
      children: [
        !_.hideTopBar &&
          (0, _.jsx)("div", {
            className: "ModalPosition_TopBar",
          }),
        _.onEscKeypress &&
          !_.bHideCloseIcon &&
          (0, _.jsx)("div", {
            className: "ModalPosition_Dismiss",
            children: (0, _.jsx)("div", {
              className: "closeButton",
              onClick: (_) => {
                _.stopPropagation(), _.onEscKeypress();
              },
              children: (0, _.jsx)(_, {}),
            }),
          }),
        (0, _.jsx)(_, {
          children: _.children,
        }),
      ],
    });
  return (0, _.jsx)("div", {
    className: _.join(" "),
    ..._,
    ref: _,
    children: _({
      className: "ModalPosition_Content",
      children: _,
    }),
  });
}
var _ = _(_()),
  _ = _(_());
var _ = _(_());
function _(_) {
  let { active: _, children: _ } = _,
    _ = _() || _(window),
    _ = _(),
    [_, _] = _.useState(null),
    [_, _] = _.useState(!1),
    _ = _.useRef(void 0);
  if (
    (_.useEffect(() => {
      if (_) {
        let _ = _.ShowPortalModal(),
          _ = _.OnElementReadyCallbacks.Register(_),
          _ = _.OnModalActiveCallbacks.Register(_);
        return (
          (_.current = _.key),
          () => {
            _(null), _(!1), _.Close(), _.Unregister(), _.Unregister();
          }
        );
      } else return;
    }, [_, _]),
    !_ || !_)
  )
    return null;
  let _ = (0, _.jsx)(_, {
    children: _,
  });
  return (
    _ &&
      (_ = (0, _.jsx)(_, {
        active: _,
        modalKey: _.current,
        children: _,
      })),
    _.createPortal(_, _)
  );
}
var _ = {
  "duration-app-launch": "800ms",
  BasicContextMenuModal: "uJ0hG-CaVOs-",
  BasicContextMenuHeader: "AN2Hp1LQ9n0-",
  BasicContextMenuHeaderShrinkableSpacing: "hhS45xpvmfI-",
  BasicContextMenuContainer: "cDV5SKqaxnw-",
  slideInAnimation: "_9RJyOBZkv0I-",
  contextMenu: "VhLVP3Jhvgw-",
  contextMenuContents: "x1-2KO7vgJs-",
  hasSubMenu: "ATTtIklorIs-",
  contextMenuFade: "gTRyZgCh-Ho-",
  contextMenuItem: "FHkogJCCEy0-",
  Destructive: "Yxr6N2s2xws-",
  Positive: "eu5VX0tYz1Y-",
  Emphasis: "-WXzVoCu0h0-",
  active: "QKT3qH6x50k-",
  Selected: "c-X1QIVPLV4-",
  Focused: "RlhXEz57U1Q-",
  Capitalized: "Mn3ln2J648M-",
  MenuSectionHeader: "pOKcXNp9Arw-",
  UpperCase: "ToEy48RSk-A-",
  SubMenu: "Bntd5n9xKuk-",
  ContextMenuSeparator: "F-1ptqsIY-w-",
  Label: "iVtiM3Pigsc-",
  Arrow: "k1Y1vLMrtss-",
  BackgroundAnimation: "MgI1vEuUsqE-",
  "ItemFocusAnim-darkerGrey-nocolor": "DdWcJspeHns-",
  "ItemFocusAnim-darkerGrey": "_7oE4zLcHjdQ-",
  "ItemFocusAnim-darkGrey": "zz5u1HFpgNU-",
  "ItemFocusAnim-grey": "BUFXFGQP9Gs-",
  "ItemFocusAnim-translucent-white-10": "fMP0VfJIbPg-",
  "ItemFocusAnim-translucent-white-20": "dVMbtgn4Whs-",
  "ItemFocusAnimBorder-darkGrey": "l7pXZguduCo-",
  "ItemFocusAnim-green": "VQNbBo8A804-",
  focusAnimation: "_7XOpRmzNKi0-",
  hoverAnimation: "l-HXOknTs7g-",
};
var _ = _(_());
function _(_) {
  let { managerOverride: _ } = _,
    _ = _(),
    _ = _ ?? _,
    _ = _();
  return (
    _(_.OnMenusChanged, _),
    (0, _.jsx)(_, {
      active: !!_.ActiveMenu,
      children: (0, _.jsx)(_, {
        ActiveMenu: _.ActiveMenu,
      }),
    })
  );
}
function _(_) {
  let { ActiveMenu: _ } = _,
    _ = _.useCallback(() => {
      _?.OnCancel();
    }, [_]);
  _.useEffect(() => () => _?.Hide(), [_]);
  let _ = [],
    _ = null;
  _(() => {
    for (let _ = _; _ && _.visible; _ = _.submenu)
      _.push(
        (0, _.jsx)(
          _,
          {
            instance: _,
          },
          _.key,
        ),
      ),
        (_ = _.label);
  });
  let _ = _.useCallback(
    (_) => {
      _.currentTarget == _.target && _();
    },
    [_],
  );
  return (0, _.jsx)(_, {
    padding: "none",
    children: (0, _.jsxs)("div", {
      onClick: _,
      className: _("BasicUIContextMenu", _.BasicContextMenuModal),
      children: [
        _ &&
          (0, _.jsx)(_.Fragment, {
            children: (0, _.jsx)("div", {
              className: _.BasicContextMenuHeader,
              children: _,
            }),
          }),
        (0, _.jsx)(_, {
          className: _.BasicContextMenuContainer,
          onCancelButton: _,
          onClick: _,
          children: _,
        }),
      ],
    }),
  });
}
function _(_) {
  let { instance: _ } = _,
    _ = _(),
    _ = _.useCallback(() => {
      _ && _.PlayNavSound(25);
    }, [_]),
    _ = _.useMemo(
      () => ({
        instance: _,
        styles: _,
        presentation: 1,
        callbacks: {
          onDisabledItemSelected: _,
        },
      }),
      [_, _],
    );
  return (0, _.jsx)(_, {
    children: (0, _.jsx)(_.Provider, {
      value: _,
      children: _.ReactElement,
    }),
  });
}
var _ = _(_());
var _ = _(_());
var _ = _(_());
var _ = class {
  m_Promise;
  m_Value = void 0;
  constructor(_) {
    _(this), (this.promise = _);
  }
  set promise(_) {
    (this.m_Promise = _),
      (this.m_Value = void 0),
      _?.then((_) => {
        this.m_Promise === _ && (this.m_Value = _);
      });
  }
  get promise() {
    return this.m_Promise;
  }
  get value() {
    return this.m_Value;
  }
};
_([_], _.prototype, "m_Value", 2);
function _(_, _, _) {
  return _.forwardRef(function (_, _) {
    return (0, _.jsx)("div", {
      ..._,
      role: _,
      ..._,
      className: _(_, _.className),
      ref: _,
    });
  });
}
function _(_) {
  if (typeof _ != "string") return NaN;
  let _ = !_.includes("ms") && _.includes("s"),
    _ = Number.parseFloat(_);
  return _ && (_ *= 1e3), _;
}
var _ = "me1BHzZX9A0-";
var _ = _(_());
function _(_) {
  let { customTooltip: _, tooltip: _, className: _, icon: _ } = _;
  return (0, _.jsxs)(_ ? _ : _, {
    toolTipContent: _,
    className: _(_, "HelperTooltip", _),
    children: [" ", _ ?? (0, _.jsx)(_, {})],
  });
}
var _ = _(_()),
  _ = _.default.createContext({}),
  _ = () => _.default.useContext(_);
function _(_, _) {
  return _()[_] ?? _;
}
var _ = {
  Toggle: "iht2aUDj9M8-",
  Disabled: "YTEsHaVTRhQ-",
  ToggleRail: "smW0sc5P0Ac-",
  Highlight: "itL3LCJ2LME-",
  _: "cu29JgKd7Ng-",
  Off: "Rre7XjErr1w-",
  ToggleSwitch: "Py0EVswynbg-",
  ToggleRow: "LCqK-Jsy46k-",
  Label: "K-4Bc-GCthE-",
};
var _ = _(_());
function _(_) {
  let _ = _("ToggleControl", _);
  return (0, _.jsx)(_, {
    ..._,
  });
}
function _(_) {
  let { value: _, onChange: _, disabled: _ } = _;
  return (0, _.jsxs)("div", {
    className: _(_.Toggle, _ && _.Disabled),
    onClick: () => !_ && _ && _(!_),
    children: [
      (0, _.jsx)("div", {
        className: _.ToggleRail,
      }),
      (0, _.jsx)("div", {
        className: _(_.ToggleRail, _.Highlight, _ ? _._ : _.Off),
      }),
      (0, _.jsx)("div", {
        className: _(_.ToggleSwitch, _ ? _._ : _.Off),
      }),
    ],
  });
}
var _ = _(_());
function _(_) {
  return _.forwardRef(function (_, _) {
    return (0, _.jsx)(_, {
      ..._,
      className: _(_, _.className),
      ref: _,
    });
  });
}
var _ = _.createContext(null),
  _ = _.forwardRef(function (_, _) {
    let { _: _, className: _, ..._ } = _,
      _ = _.useContext(_)?.setHeaderId,
      _ = _.useId(),
      _ = _ || _;
    return (
      _.useEffect(() => {
        _ && _(_);
      }, [_, _]),
      (0, _.jsx)("div", {
        _: _,
        role: "heading",
        "aria-level": 2,
        ..._,
        className: _("DialogHeader", _),
        ref: _,
      })
    );
  }),
  _ = _("DialogSubHeader", "heading", {
    "aria-level": 3,
  }),
  _ = _("SettingsDialogSubHeader", "heading", {
    "aria-level": 3,
  }),
  _ = _("DialogFooter"),
  _ = _("DialogLabel _DialogLayout"),
  _ = _("DialogBodyText"),
  _ = _("DialogBody"),
  _ = _("DialogBody"),
  _ = _("DialogInnerBody"),
  _ = _("DialogControlsSection"),
  _ = _("DialogControlsSectionHeader", "heading", {
    "aria-level": 3,
  });
var _ = _("DialogTwoColLayout _DialogColLayout"),
  _ = _("DialogThreeColLayout _DialogColLayout"),
  _ = _("DialogTwoThirdColLayout _DialogColLayout"),
  _ = _("DialogColumn _DialogLayout");
function _(_) {
  let _ = _("Content", _);
  return (0, _.jsx)(_, {
    ..._,
  });
}
function _(_) {
  let { children: _, bCenterVertically: _, refElem: _, ..._ } = _,
    _ = "DialogContent _DialogLayout" + (_.className ? " " + _.className : "");
  return (
    _ && (_ += " _DialogCenterVertically"),
    (0, _.jsx)("div", {
      ..._,
      ref: _,
      className: _,
      children: (0, _.jsx)("div", {
        className: "DialogContent_InnerWidth",
        children: _,
      }),
    })
  );
}
var _ = class extends _.Component {
  OnSubmit(_) {
    _.preventDefault(),
      _.stopPropagation(),
      this.props.onSubmit && this.props.onSubmit(_);
  }
  render() {
    return (0, _.jsx)("form", {
      ...this.props,
      onSubmit: this.OnSubmit,
    });
  }
};
_([_], _.prototype, "OnSubmit", 1);
function _(_) {
  let { classNameContent: _, bCenterVertically: _, ..._ } = _;
  return (0, _.jsx)(_, {
    className: _,
    bCenterVertically: _,
    children: (0, _.jsx)(_, {
      ..._,
    }),
  });
}
function _(_) {
  let { label: _, tooltip: _, className: _, children: _ } = _;
  return (0, _.jsxs)("label", {
    className: _("DialogInputLabelGroup", "_DialogLayout", _),
    children: [
      _ &&
        (0, _.jsxs)(_, {
          children: [
            _,
            " ",
            _ &&
              (0, _.jsx)(_, {
                tooltip: _,
              }),
            " ",
          ],
        }),
      _,
    ],
  });
}
var _ = _.forwardRef(function (_, _) {
    let _ = _(),
      { svgicon: _, ..._ } = _,
      _ = _(
        _.className,
        _ !== void 0 && "hasSVGIcon",
        _.disabled && "Disabled",
        _.strButtonClassName,
      ),
      _ = (_) => {
        if (!(_.disabled || !_))
          return (_) => {
            _.stopPropagation(), _(_);
          };
      };
    return (0, _.jsxs)(_, {
      ref: _,
      onOKActionDescription: _.disabled ? null : void 0,
      noFocusRing: !!_.strButtonClassName,
      ..._,
      className: _,
      disabled: !1,
      onClick: _(_.onClick),
      onPointerDown: _(_.onPointerDown),
      onPointerUp: _(_.onPointerUp),
      onPointerCancel: _(_.onPointerCancel),
      onMouseDown: _(_.onMouseDown),
      onMouseUp: _(_.onMouseUp),
      onTouchStart: _(_.onTouchStart),
      onTouchEnd: _(_.onTouchEnd),
      onTouchCancel: _(_.onTouchCancel),
      onSubmit: _(_.onSubmit),
      children: [_ && _(), _.children],
    });
  }),
  _ = _.forwardRef(function (_, _) {
    return (0, _.jsx)(_, {
      preferredFocus: !0,
      type: _.onClick ? "button" : "submit",
      ..._,
      ref: _,
      className: _(_.className, "DialogButton", "_DialogLayout", "Primary"),
    });
  }),
  _ = _.forwardRef(function (_, _) {
    return (0, _.jsx)(_, {
      type: "button",
      ..._,
      ref: _,
      className: _(_.className, "DialogButton", "_DialogLayout", "Secondary"),
    });
  }),
  _ = _.forwardRef(function (_, _) {
    return (0, _.jsx)(_, {
      type: "button",
      ..._,
      ref: _,
      className: _(_.className, "DialogButton", "_DialogLayout", "EmptyButton"),
    });
  }),
  _ = _.forwardRef(function (_, _) {
    return (0, _.jsx)(_, {
      type: "button",
      ..._,
      ref: _,
      className: _(_.className, "DialogButton _DialogLayout Small"),
    });
  }),
  _ = _.forwardRef(function (_, _) {
    return (0, _.jsx)(_, {
      type: "button",
      ..._,
      ref: _,
      className: _(_.className, "TextButton"),
    });
  });
function _(_) {
  return (0, _.jsxs)(_, {
    className: _.className,
    children: [
      (0, _.jsxs)(_, {
        onClick: _.onOK,
        disabled: _.bOKDisabled,
        autoFocus: _.focusButton == "primary",
        children: [_.strOKText || _("#Button_Confirm"), " "],
      }),
      (0, _.jsx)(_, {
        onClick: _.onCancel,
        disabled: _.bCancelDisabled,
        autoFocus: _.focusButton == "secondary",
        children: _.strCancelText || _("#Button_Cancel"),
      }),
    ],
  });
}
function _(_) {
  let _ = _.bOKDisabled ? _ : _,
    _ = _.bOKDisabled ? _ : _;
  return (0, _.jsxs)(_, {
    children: [
      (0, _.jsxs)(_, {
        onClick: _.onOK,
        disabled: _.bOKDisabled,
        children: [_.strOKText || _("#Button_Confirm"), " "],
      }),
      (0, _.jsxs)(_, {
        onClick: _.onUpdate,
        disabled: _.bUpdateDisabled,
        children: [_.strUpdateText || _("#Button_Update"), " "],
      }),
      (0, _.jsx)(_, {
        onClick: _.onCancel,
        disabled: _.bCancelDisabled,
        children: _.strCancelText || _("#Button_Cancel"),
      }),
    ],
  });
}
var _ = class extends _.Component {
  constructor(_) {
    super(_),
      (this.state = {
        checked: _.checked,
        disabled: _.disabled,
      });
  }
  componentDidUpdate(_) {
    this.props.controlled ||
      (_.checked != this.props.checked &&
        this.props.checked != this.state.checked &&
        this.setState({
          checked: this.props.checked,
        })),
      _.disabled != this.props.disabled &&
        this.props.disabled != this.state.disabled &&
        this.setState({
          disabled: this.props.disabled,
        });
  }
  shouldComponentUpdate(_, _) {
    return !(
      _.label == this.props.label &&
      _.description == this.props.description &&
      _.onChange == this.props.onChange &&
      _.controlled == this.props.controlled &&
      _.disabled == this.props.disabled &&
      _.disabled == this.state.disabled &&
      _.checked == this.checked &&
      _.checked == this.state.checked
    );
  }
  get checked() {
    return this.props.controlled ? this.props.checked : this.state.checked;
  }
  GetPanelElementProps() {
    let {
      onChange: _,
      checked: _,
      label: _,
      description: _,
      tabIndex: _,
      disabled: _,
      className: _,
      tooltip: _,
      color: _,
      highlightColor: _,
      bottomSeparator: _,
      controlled: _,
      ..._
    } = this.props;
    return {
      ..._,
      tabIndex: _ || 0,
      onActivate: this.Toggle,
      onKeyDown: this.KeyDown,
    };
  }
  Toggle() {
    if (this.props.disabled) return;
    let _ = !this.checked;
    this.props.controlled ||
      this.setState({
        checked: _,
      }),
      this.props.onChange && this.props.onChange(_);
  }
  KeyDown(_) {
    _.keyCode == 32 && (this.Toggle(), _.preventDefault(), _.stopPropagation());
  }
  SetChecked(_, _) {
    this.setState({
      checked: _,
    }),
      _ && this.props.onChange && this.props.onChange(_);
  }
};
_([_], _.prototype, "Toggle", 1),
  _([_], _.prototype, "KeyDown", 1),
  _([_], _.prototype, "SetChecked", 1);
var _ = _.forwardRef(function (_, _) {
    let _ = _("ToggleField", _);
    return (0, _.jsx)(_, {
      ref: _,
      ..._,
    });
  }),
  _ = class extends _ {
    OnOffKeyDown(_) {
      (_.keyCode == 37 && this.checked) || (_.keyCode == 39 && !this.checked)
        ? (this.Toggle(), _.preventDefault(), _.stopPropagation())
        : this.KeyDown(_);
    }
    OnNewUIToggle(_) {
      _ !== this.checked && this.Toggle();
    }
    render() {
      let _ =
        "DialogToggleField _DialogInputContainer _DialogLayout " +
        (this.props.className ? this.props.className : "");
      return (
        this.props.disabled && (_ += " Disabled"),
        (0, _.jsxs)("div", {
          className: _,
          tabIndex: this.props.tabIndex || 0,
          onKeyDown: this.OnOffKeyDown,
          children: [
            (0, _.jsxs)("div", {
              className: "displayColumn alignSelfCenter",
              children: [
                (0, _.jsxs)("div", {
                  className: "DialogToggle_Label",
                  children: [
                    (0, _.jsx)("span", {
                      children: this.props.label,
                    }),
                    this.props.tooltip &&
                      (0, _.jsx)(_, {
                        tooltip: this.props.tooltip,
                      }),
                  ],
                }),
                this.props.description &&
                  (0, _.jsx)("div", {
                    className: "DialogToggle_Description",
                    children: this.props.description,
                  }),
                this.props.children,
              ],
            }),
            this.props.useToggleRail
              ? (0, _.jsx)("div", {
                  className: "DialogToggleField_NewUIContainer",
                  children: (0, _.jsx)(_, {
                    onChange: this.OnNewUIToggle,
                    value: this.checked,
                  }),
                })
              : (0, _.jsx)("div", {
                  className: "DialogToggleField_Control",
                  onClick: this.Toggle,
                  children: (0, _.jsxs)(_, {
                    className: "DialogToggleField_OptionPanel",
                    onOKButton: this.Toggle,
                    children: [
                      (0, _.jsx)("div", {
                        className:
                          "DialogToggleField_Option Off" +
                          (this.checked ? "" : " Active"),
                        children: _("#Dialog_Off"),
                      }),
                      (0, _.jsx)("div", {
                        className:
                          "DialogToggleField_Option On" +
                          (this.checked ? " Active" : ""),
                        children: _("#Dialog_On"),
                      }),
                    ],
                  }),
                }),
          ],
        })
      );
    }
  };
_([_], _.prototype, "OnOffKeyDown", 1), _([_], _.prototype, "OnNewUIToggle", 1);
var _ = _(_());
var _ = class extends _ {
  m_component;
  m_propTargets;
  m_props = {};
  m_setStateOnComplete;
  constructor(_, _, _) {
    super(_(_.ref.current), _),
      (this.m_component = _),
      (this.m_propTargets = _),
      (this.m_setStateOnComplete = _.setStateOnComplete);
  }
  Start() {
    this.m_props = {};
    for (let _ in this.m_propTargets) {
      let _ = parseFloat(this.m_component.state[_]) || 0,
        _ = this.m_propTargets[_];
      _ != _ &&
        (this.m_props[_] = {
          start: _,
          end: _,
        });
    }
    super.Start();
  }
  Update(_) {
    let _ = {};
    for (let _ in this.m_props) {
      let _ = this.m_props[_],
        _ = _.start + (_.end - _.start) * _;
      _[_] = _;
    }
    this.m_component.setState(_);
  }
  FireOnComplete() {
    super.FireOnComplete(),
      this.m_setStateOnComplete &&
        this.m_component.setState(this.m_setStateOnComplete);
  }
};
var _ = _(_()),
  _ = _.forwardRef(function (_, _) {
    let _ = _("InputElement", _);
    return (0, _.jsx)(_, {
      ..._,
      ref: _,
    });
  }),
  _ = class _ extends _.PureComponent {
    m_CopiedAnimation;
    ref = _.createRef();
    constructor(_) {
      super(_),
        this.CheckProps(_),
        (this.state = {
          m_CopiedYPos: 0,
          m_bPlayingCopiedAnimation: !1,
          m_bCompletedCopiedAnimation: !1,
          m_bNumberBelowMinRange: !1,
          m_bNumberAboveMaxRange: !1,
          m_bIsNotNumeric: !1,
          m_bIsInvalidURL: !1,
          m_strInvalidURLMessage: null,
          m_bIsInvalidEmail: !1,
          m_bAboveMaxChars: !1,
        });
    }
    componentDidUpdate(_) {
      this.CheckProps(this.props);
    }
    m_elInput;
    OnInputRef(_) {
      (this.m_elInput = _),
        this.m_elInput && this.props.focusOnMount && this.m_elInput.focus();
    }
    get element() {
      return this.m_elInput;
    }
    get value() {
      return this.m_elInput && this.m_elInput.value;
    }
    Focus() {
      this.m_elInput?.focus();
    }
    static validateUrl(_) {
      return (
        _ != null &&
        (/^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/i.test(
          _,
        ) ||
          /^steam:\/\/[-a-zA-Z0-9@:%._\+~#=]{2,256}/i.test(_))
      );
    }
    static validateEmail(_) {
      return (
        _ != null &&
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
          _.toLowerCase(),
        )
      );
    }
    Validate() {
      this.setState({
        m_bNumberBelowMinRange:
          this.props.rangeMin !== null &&
          this.props.rangeMin !== void 0 &&
          Number(this.m_elInput?.value) < this.props.rangeMin,
        m_bNumberAboveMaxRange:
          this.props.rangeMax !== null &&
          this.props.rangeMax !== void 0 &&
          Number(this.m_elInput?.value) > this.props.rangeMax,
        m_bIsNotNumeric:
          this.props.mustBeNumeric == !0 &&
          isNaN(Number(this.m_elInput?.value)),
        m_bIsInvalidURL:
          this.props.mustBeURL == !0 && !_.validateUrl(this.m_elInput?.value),
        m_strInvalidURLMessage: this.props.fnStrValidateURL
          ? this.props.fnStrValidateURL(this.m_elInput?.value)
          : null,
        m_bIsInvalidEmail:
          this.props.mustBeEmail == !0 &&
          !_.validateEmail(this.m_elInput?.value),
        m_bAboveMaxChars:
          this.props.maxChars != null &&
          this.m_elInput != null &&
          this.m_elInput.value.length > this.props.maxChars,
      });
    }
    OnChanged(_) {
      this.props.onChange && this.props.onChange(_), this.Validate();
    }
    OnCopyClick(_) {
      if (!this.m_elInput) return;
      this.m_elInput.select();
      let _ = this.m_elInput.ownerDocument;
      if (_.queryCommandEnabled("copy")) {
        _.execCommand("copy"),
          _.currentTarget.focus(),
          this.m_CopiedAnimation && this.m_CopiedAnimation.Cancel();
        let _ = -4,
          _ = -24;
        this.setState({
          m_bCompletedCopiedAnimation: !1,
        }),
          this.setState(
            {
              m_CopiedYPos: _,
            },
            () => {
              (this.m_CopiedAnimation = new _(
                this,
                {
                  m_CopiedYPos: _,
                },
                {
                  msDuration: 300,
                  timing: "sine",
                  setStateOnComplete: {
                    m_bCompletedCopiedAnimation: !0,
                  },
                },
              )),
                this.m_CopiedAnimation.Start();
            },
          );
      }
    }
    OnClearClick(_) {
      this.m_elInput &&
        this.m_elInput.value &&
        (Object.getOwnPropertyDescriptor(
          window.HTMLInputElement.prototype,
          "value",
        ).set.call(this.m_elInput, ""),
        this.m_elInput.dispatchEvent(
          new Event("input", {
            bubbles: !0,
          }),
        ));
    }
    CheckProps(_) {
      _(
        !(_.bShowClearAction || _.bAlwaysShowClearAction) || _.onChange,
        "In order for bShowClearAction to work correctly, you should be handling onChange and passing value to the Dialog.Input.",
      );
    }
    render() {
      let {
          label: _,
          description: _,
          requiredLabel: _,
          bShowCopyAction: _,
          bShowClearAction: _,
          bAlwaysShowClearAction: _,
          rangeMin: _,
          rangeMax: _,
          mustBeNumeric: _,
          mustBeURL: _,
          fnStrValidateURL: _,
          mustBeEmail: _,
          focusOnMount: _,
          tooltip: _,
          inlineControls: _,
          maxChars: _,
          ..._
        } = this.props,
        _ =
          "DialogInput DialogInputPlaceholder DialogTextInputBase" +
          (_.className ? " " + _.className : ""),
        _ = "copiedAnimation",
        _ = this.state.m_bCompletedCopiedAnimation;
      this.m_CopiedAnimation && (_ = "copiedAnimation animationPlaying"),
        _ && (_ = "copiedAnimation animationComplete");
      let _ = {};
      this.state.m_CopiedYPos !== void 0 &&
        (_.transform = "translateY(" + this.state.m_CopiedYPos + "px)");
      let _ = (0, _.jsxs)(_.Fragment, {
        children: [
          (0, _.jsxs)(_, {
            className: "DialogInput_Wrapper _DialogLayout",
            "flow-children": "row",
            ref: this.ref,
            children: [
              (0, _.jsx)(_, {
                type: "text",
                ..._,
                className: _,
                ref: this.OnInputRef,
                onChange: this.OnChanged,
              }),
              _ &&
                (0, _.jsxs)("div", {
                  className: "displayRow",
                  children: [
                    (0, _.jsx)(_, {
                      className: "DialogInput_CopyAction Primary",
                      onClick: this.OnCopyClick,
                      children: _("#Button_Copy"),
                    }),
                    (0, _.jsx)("div", {
                      style: _,
                      className: _,
                      children: _("#Button_Copied"),
                    }),
                  ],
                }),
              (_ || (_ && _.value)) &&
                (0, _.jsx)("div", {
                  className: "DialogInput_ClearAction",
                  onClick: this.OnClearClick,
                  children: (0, _.jsx)(_, {}),
                }),
              _,
            ],
          }),
          _ &&
            (0, _.jsx)("div", {
              className: "DialogLabelExplainer",
              children: _,
            }),
        ],
      });
      return _
        ? (0, _.jsx)("div", {
            className:
              "DialogInputLabelGroup _DialogLayout DialogRequirementLabel",
            children: (0, _.jsxs)("label", {
              children: [
                (0, _.jsxs)("div", {
                  className: "DialogLabel",
                  children: [
                    _,
                    " ",
                    this.props.tooltip &&
                      (0, _.jsx)(_, {
                        tooltip: this.props.tooltip,
                      }),
                    (0, _.jsx)("span", {
                      className: "DialogInputRequirementLabel",
                      children: this.props.requiredLabel,
                    }),
                    " ",
                  ],
                }),
                _,
                this.state.m_bNumberBelowMinRange
                  ? (0, _.jsxs)("div", {
                      children: [" ", _("#Input_Error_NumberTooSmall"), " "],
                    })
                  : null,
                this.state.m_bNumberAboveMaxRange
                  ? (0, _.jsxs)("div", {
                      children: [" ", _("#Input_Error_NumberTooLarge"), " "],
                    })
                  : null,
                this.state.m_bIsInvalidURL
                  ? (0, _.jsxs)("div", {
                      children: [" ", _("#Input_Error_MustBeURL"), " "],
                    })
                  : null,
                this.state.m_strInvalidURLMessage
                  ? (0, _.jsxs)("div", {
                      children: [" ", this.state.m_strInvalidURLMessage, " "],
                    })
                  : null,
                this.state.m_bIsInvalidEmail
                  ? (0, _.jsxs)("div", {
                      children: [" ", _("#Input_Error_MustBeEmail"), " "],
                    })
                  : null,
                this.state.m_bIsNotNumeric
                  ? (0, _.jsxs)("div", {
                      children: [" ", _("#Input_Error_MustBeNumber"), " "],
                    })
                  : null,
                this.state.m_bAboveMaxChars
                  ? (0, _.jsxs)("div", {
                      children: [
                        " ",
                        _("#Input_Error_TooManyCharacters", _),
                        " ",
                      ],
                    })
                  : null,
              ],
            }),
          })
        : _;
    }
  };
_([_], _.prototype, "OnInputRef", 1),
  _([_], _.prototype, "OnChanged", 1),
  _([_], _.prototype, "OnCopyClick", 1),
  _([_], _.prototype, "OnClearClick", 1);
var _ = _,
  _ = class extends _ {
    m_bFocused = !1;
    OnBackgroundClick() {
      this.m_elInput && this.m_elInput.focus();
    }
    OnInputFocus(_) {
      this.m_bFocused || ((this.m_bFocused = !0), this.forceUpdate()),
        this.props.onFocus && this.props.onFocus(_);
    }
    OnInputBlur(_) {
      this.m_bFocused && ((this.m_bFocused = !1), this.forceUpdate()),
        this.props.onBlur && this.props.onBlur(_);
    }
    render() {
      let {
        label: _,
        description: _,
        requiredLabel: _,
        bShowCopyAction: _,
        bShowClearAction: _,
        bAlwaysShowClearAction: _,
        rangeMin: _,
        rangeMax: _,
        maxChars: _,
        mustBeNumeric: _,
        mustBeURL: _,
        fnStrValidateURL: _,
        mustBeEmail: _,
        focusOnMount: _,
        tooltip: _,
        inlineControls: _,
        className: _,
        children: _,
        ..._
      } = this.props;
      return (0, _.jsx)("div", {
        className: "DialogInputLabelGroup _DialogLayout DialogListBuilderInput",
        children: (0, _.jsxs)("label", {
          children: [
            _ &&
              (0, _.jsx)("div", {
                className: "DialogLabel",
                children: _,
              }),
            (0, _.jsx)("div", {
              className: _(
                "_DialogInputContainer",
                "DialogTextInputBase",
                this.m_bFocused && "Active",
              ),
              onClick: this.OnBackgroundClick,
              children: (0, _.jsxs)(_, {
                className: "DialogListBuilderInput_List",
                "flow-children": "row",
                children: [
                  _.Children.map(_, (_, _) =>
                    (0, _.jsx)(
                      "div",
                      {
                        className: "DialogListBuilderInput_ListItem",
                        children: _,
                      },
                      _,
                    ),
                  ),
                  (0, _.jsx)(_, {
                    type: "text",
                    ..._,
                    className:
                      "DialogListBuilderInput_Input DialogInputPlaceholder",
                    ref: this.OnInputRef,
                    onFocus: this.OnInputFocus,
                    onBlur: this.OnInputBlur,
                    size: 4,
                  }),
                ],
              }),
            }),
            _ &&
              (0, _.jsx)("div", {
                className: "DialogLabelExplainer",
                children: _,
              }),
          ],
        }),
      });
    }
  };
_([_], _.prototype, "OnBackgroundClick", 1),
  _([_], _.prototype, "OnInputFocus", 1),
  _([_], _.prototype, "OnInputBlur", 1);
var _ = _(_());
var _ = _(_()),
  _ = (_, _) =>
    "" + (_ != null ? Number.parseFloat(_.toFixed(3)) : null) + (_ ?? "");
var _ = class extends _.Component {
  m_flLastSetValue = null;
  constructor(_) {
    super(_);
  }
  ClampValue(_) {
    return _ === void 0 || isNaN(_) || _ < this.props.min
      ? this.props.min
      : _ > this.props.max
        ? this.props.max
        : _;
  }
  BPropsValid() {
    return this.props.max > this.props.min;
  }
  m_elSlider;
  m_rectSlider;
  OnMouseDown(_) {
    (this.m_elSlider = _.currentTarget),
      (this.m_rectSlider = this.m_elSlider.getBoundingClientRect()),
      this.props.onChangeStart && this.props.onChangeStart(1),
      this.AdjustSliderForClientX(_.clientX, 1),
      this.m_elSlider.ownerDocument.defaultView?.addEventListener(
        "mousemove",
        this.OnMouseMove,
      ),
      this.m_elSlider.ownerDocument.defaultView?.addEventListener(
        "mouseup",
        this.OnMouseUp,
      );
  }
  OnMouseMove(_) {
    this.AdjustSliderForClientX(_.clientX, 1);
  }
  OnMouseUp(_) {
    this.m_elSlider?.ownerDocument.defaultView?.removeEventListener(
      "mousemove",
      this.OnMouseMove,
    ),
      this.m_elSlider?.ownerDocument.defaultView?.removeEventListener(
        "mouseup",
        this.OnMouseUp,
      ),
      this.CompleteChange(1);
  }
  OnTouchStart(_) {
    (this.m_elSlider = _.currentTarget),
      (this.m_rectSlider = this.m_elSlider.getBoundingClientRect()),
      this.props.onChangeStart && this.props.onChangeStart(0),
      this.AdjustSliderForClientX(_.touches[0].clientX, 0),
      this.m_elSlider.ownerDocument.defaultView?.addEventListener(
        "touchmove",
        this.OnTouchMove,
      ),
      this.m_elSlider.ownerDocument.defaultView?.addEventListener(
        "touchend",
        this.OnTouchEnd,
      );
  }
  OnTouchMove(_) {
    this.AdjustSliderForClientX(_.touches[0].clientX, 0);
  }
  OnTouchEnd(_) {
    this.m_elSlider?.ownerDocument.defaultView?.removeEventListener(
      "touchmove",
      this.OnTouchMove,
    ),
      this.m_elSlider?.ownerDocument.defaultView?.removeEventListener(
        "touchend",
        this.OnTouchEnd,
      ),
      this.CompleteChange(0);
  }
  OnKeyDown(_) {
    let _ = 1;
    _.ctrlKey &&
      (_ = Math.max(
        1,
        Math.floor((this.props.max - this.props.min) * 0.1 + 0.5),
      )),
      _.keyCode == 37
        ? (this.IncrementValue(-1 * _), _.preventDefault())
        : _.keyCode == 39 && (this.IncrementValue(1 * _), _.preventDefault()),
      this.CompleteChange(2);
  }
  AdjustSliderForClientX(_, _) {
    let _ =
      (_ - this.m_rectSlider.left) /
      (this.m_rectSlider.right - this.m_rectSlider.left);
    this.m_elSlider?.matches(":dir(rtl)") && (_ = 1 - _);
    let _ = _ * (this.props.max - this.props.min) + this.props.min;
    _ = Math.floor(_ + 0.5);
    let _ = this.ClampValue(_);
    _ != this.props.value &&
      (this.props.onChange && this.props.onChange(_, _),
      (this.m_flLastSetValue = _));
  }
  CompleteChange(_) {
    this.m_flLastSetValue != null &&
      (this.props.onChangeComplete &&
        this.props.onChangeComplete(this.m_flLastSetValue, _),
      (this.m_flLastSetValue = null));
  }
  IncrementValue(_) {
    let _ = this.ClampValue(this.props.value + _);
    _ != this.props.value &&
      (this.props.onChange && this.props.onChange(_, 2),
      (this.m_flLastSetValue = _));
  }
  render() {
    let _ = {},
      _ = {};
    if (this.BPropsValid()) {
      let _ =
        (100 * (this.props.value - this.props.min)) /
          (this.props.max - this.props.min) +
        "%";
      (_.width = _),
        (_ = {
          "--position": _,
        });
    }
    let { label: _, description: _, tooltip: _, ..._ } = this.props,
      _ = this.props.renderValue ?? _;
    return (0, _.jsxs)("div", {
      className:
        "DialogSlider_Container _DialogInputContainer _DialogLayout" +
        (this.props.className ? " " + this.props.className : ""),
      onKeyDown: this.OnKeyDown,
      tabIndex: this.props.tabIndex || 0,
      children: [
        _ &&
          (0, _.jsxs)("div", {
            className: "DialogLabel",
            children: [
              _,
              !!_ &&
                (0, _.jsx)(_, {
                  tooltip: _,
                }),
            ],
          }),
        (0, _.jsxs)("div", {
          className: "DialogSlider_Slider",
          onMouseDown: this.OnMouseDown,
          onTouchStart: this.OnTouchStart,
          children: [
            (0, _.jsx)("div", {
              className: "DialogSlider_Value",
              style: _,
            }),
            (0, _.jsx)("div", {
              className: "DialogSlider_Grabber",
              style: _,
            }),
          ],
        }),
        this.props.showValue &&
          (0, _.jsx)("div", {
            className: "DialogLabelExplainer",
            children: _(this.props.value, this.props.valueSuffix),
          }),
        _ &&
          (0, _.jsx)("div", {
            className: "DialogLabelExplainer",
            children: _,
          }),
      ],
    });
  }
};
_([_], _.prototype, "OnMouseDown", 1),
  _([_], _.prototype, "OnMouseMove", 1),
  _([_], _.prototype, "OnMouseUp", 1),
  _([_], _.prototype, "OnTouchStart", 1),
  _([_], _.prototype, "OnTouchMove", 1),
  _([_], _.prototype, "OnTouchEnd", 1),
  _([_], _.prototype, "OnKeyDown", 1);
var _ = _(_());
var _ = _(_()),
  _ = {
    setValue: () => {},
  },
  _ = _.default.createContext(_);
var _ = _(_());
var _ = {
  DialogDropDownMenu_Item: "jHkXIJHJm88-",
  DialogDropDownMenu_Separator: "_8Ba71jUzzWw-",
  DialogDropDownMenu: "_865BbeRmTtw-",
};
var _ = _(_());
function _(_) {
  return typeof _ == "object" && "data" in _;
}
function _(_) {
  return typeof _ == "object" && "bIsSeparator" in _;
}
function _(_) {
  return typeof _ == "object" && "options" in _;
}
function _(_, _) {
  if (_ === _) return !0;
  if (!Array.isArray(_) || !Array.isArray(_) || _.length != _.length) return !1;
  for (let _ = 0; _ < _.length; _++) if (!_(_[_], _[_])) return !1;
  return !0;
}
function _(_, _) {
  return _ == null || _ == null
    ? _ == _
    : _(_) && _(_)
      ? !0
      : !(
          _(_) ||
          _(_) ||
          typeof _.label != typeof _.label ||
          (typeof _.label == "string" && _.label !== _.label) ||
          _.tooltip !== _.tooltip ||
          _(_) != _(_) ||
          (_(_) && _(_) && !_(_.options, _.options)) ||
          (_(_) && _(_) && _.data !== _.data)
        );
}
function _(_, _) {
  if (_ != null)
    for (let _ = 0; _ < _.length; _++) {
      let _ = _[_];
      if (_(_) && _.data === _) return _;
      if (_(_)) {
        let _ = _(_.options, _);
        if (_ != null) return _;
      }
    }
}
function _(_) {
  let _ = _("DropDownField", _);
  return (0, _.jsx)(_, {
    ..._,
  });
}
function _(_) {
  let {
    label: _,
    tooltip: _,
    strClassName: _,
    dropDownControlRef: _,
    ..._
  } = _;
  return (0, _.jsx)(_, {
    label: _,
    tooltip: _,
    className: _,
    children: (0, _.jsx)(_, {
      menuLabel: _,
      ..._,
      ref: _,
    }),
  });
}
var _ = _.forwardRef(function (_, _) {
    return (0, _.jsxs)(_, {
      _: _._,
      focusable: _.focusable,
      className: _(_.className, "DialogDropDown", "_DialogInputContainer", {
        Active: _.opened,
        Disabled: _.disabled,
      }),
      tabIndex: _.tabIndex,
      onClick: _.onClick,
      onKeyDown: _.onKeyDown,
      disabled: _.disabled,
      type: "button",
      ref: _,
      noFocusRing: _.noFocusRing,
      role: _.role ?? "combobox",
      "aria-controls": _["aria-controls"],
      "aria-expanded": _.opened,
      "aria-label": _["aria-label"],
      "aria-labelledby": _["aria-labelledby"],
      "aria-describedby": _["aria-describedby"],
      children: [
        (0, _.jsx)("div", {
          className: "DialogDropDown_CurrentDisplay",
          children: _.children,
        }),
        !_.disabled &&
          (0, _.jsx)("div", {
            className: _(_.arrowClassName, "DialogDropDown_Arrow"),
            children: (0, _.jsx)(_, {
              role: "presentation",
            }),
          }),
      ],
    });
  }),
  _ = class extends _.Component {
    static contextType = _;
    m_elInput;
    m_iMenuInstance;
    constructor(_) {
      super(_),
        (this.state = {
          value: _(_.rgOptions, _.selectedOption),
          bOpened: !1,
        });
    }
    SetSelectedOption(_) {
      if (this.props.controlled) return;
      let _ = _(this.props.rgOptions, _);
      _(_, this.value) ||
        this.setState({
          value: _,
        });
    }
    get value() {
      return this.props.controlled
        ? _(this.props.rgOptions, this.props.selectedOption)
        : this.state.value;
    }
    shouldComponentUpdate(_, _, _) {
      if (
        _.selectedOption !== this.props.selectedOption ||
        _.disabled != this.props.disabled ||
        _.bOpened !== this.state.bOpened ||
        !_(this.props.rgOptions, _.rgOptions) ||
        !_(_.value, this.value)
      )
        return !0;
      let _ = ["selectedOption", "tabIndex", "onChange", "strDefaultLabel"];
      for (let _ of _) if (_[_] !== this.props[_]) return !0;
      return !1;
    }
    componentDidUpdate(_, _) {
      _(
        this.props.controlled === _.controlled,
        '"controlled" prop should never change after mount',
      );
      let _ = !_(_.rgOptions, this.props.rgOptions),
        _ = _.selectedOption !== this.props.selectedOption,
        _ = !_(this.value, _.value);
      !this.props.controlled &&
        (_ || _ || _) &&
        (_ || this.value == null
          ? this.SetSelectedOption(this.props.selectedOption)
          : this.SetSelectedOption(this.value.data)),
        (_ || _) &&
          (this.state.bOpened
            ? (this.m_iMenuInstance?.SetOnHideCallback(void 0),
              this.m_iMenuInstance?.Hide(),
              (this.m_iMenuInstance = void 0),
              this.BuildMenu())
            : this.m_iMenuInstance &&
              (this.m_iMenuInstance.SetOnHideCallback(void 0),
              (this.m_iMenuInstance = void 0)));
    }
    OnInputRef(_) {
      _ && (this.m_elInput = _);
    }
    get element() {
      return this.m_elInput;
    }
    ToggleMenu() {
      if (this.state.bOpened) this.HideMenu();
      else {
        if (
          this.props.onMenuWillOpen &&
          this.props.onMenuWillOpen(this.ShowMenu) == !1
        )
          return;
        this.ShowMenu();
      }
    }
    OnValueSelected(_, _) {
      this.HideMenu(),
        this.setState({
          value: _,
        }),
        this.props.onChange && this.props.onChange(_, this, _);
    }
    BuildMenu() {
      let _ = "DialogMenuPosition";
      this.props.strDropDownClassName &&
        (_ += " " + this.props.strDropDownClassName);
      let _ = {
          bOverlapHorizontal: !0,
          bMatchWidth: this.props.bMatchWidth ?? !0,
          bFitToWindow: !0,
          strClassName: _,
          bDisableMouseOverlay: this.props.bDisableMouseOverlay,
          ...this.props.contextMenuPositionOptions,
        },
        _ = this.props.contextMenuPositionOptions?.onCancel;
      (this.m_iMenuInstance = _(
        (0, _.jsx)(_, {
          rgOptions: this.props.rgOptions,
          onValueSelected: this.OnValueSelected,
          onCancel: _,
          selectedValue: this.value?.data,
          strDropDownMenuCtnClass: this.props.strDropDownMenuCtnClass,
          strDropDownItemClassName: this.props.strDropDownItemClassName,
          _: `dropdownmenu_${this.m_iMenuInstance?.key}`,
        }),
        this.m_elInput,
        _,
      )),
        this.m_iMenuInstance.SetLabel(
          this.props.menuLabel ??
            (typeof this.props.strDefaultLabel == "string" &&
              this.props.strDefaultLabel),
        ),
        this.m_iMenuInstance.SetOnHideCallback(this.HideMenu);
    }
    ShowMenu() {
      this.m_iMenuInstance ? this.m_iMenuInstance.Show() : this.BuildMenu(),
        this.props.onMenuOpened && this.props.onMenuOpened(),
        this.setState({
          bOpened: !0,
        });
    }
    HideMenu() {
      this.m_iMenuInstance && this.m_iMenuInstance.Hide(),
        this.setState(
          {
            bOpened: !1,
          },
          () => this.m_elInput.focus(),
        );
    }
    OnKeyDown(_) {
      _(_, this.props.rgOptions.filter(_), this.value?.data, (_) =>
        this.OnValueSelected(void 0, _),
      );
    }
    render() {
      let _ = this.value?.label ?? this.props.strDefaultLabel;
      this.props.renderButtonValue != null &&
        (_ = this.props.renderButtonValue(_));
      let _ = this.props.focusable ?? !0,
        _ = this.props.renderButton || this.context.DropDownControlButton || _;
      return (0, _.jsx)(_, {
        focusable: _,
        disabled: this.props.disabled ?? !1,
        opened: this.state.bOpened,
        onClick: this.props.disabled ? void 0 : this.ToggleMenu,
        onKeyDown: this.props.disabled ? void 0 : this.OnKeyDown,
        tabIndex: this.props.tabIndex ?? (_ ? 0 : void 0),
        ref: this.OnInputRef,
        className: this.props.strDropDownButtonClassName,
        arrowClassName: this.props.arrowClassName,
        role: "combobox",
        "aria-controls": this.m_iMenuInstance
          ? `dropdownmenu_${this.m_iMenuInstance.key}`
          : void 0,
        "aria-expanded": this.state.bOpened,
        "aria-label": this.props["aria-label"],
        "aria-labelledby": this.props["aria-labelledby"],
        "aria-describedby": this.props["aria-describedby"],
        children: _,
      });
    }
  };
_([_], _.prototype, "OnInputRef", 1),
  _([_], _.prototype, "ToggleMenu", 1),
  _([_], _.prototype, "OnValueSelected", 1),
  _([_], _.prototype, "ShowMenu", 1),
  _([_], _.prototype, "HideMenu", 1),
  _([_], _.prototype, "OnKeyDown", 1);
var _ = _.createContext(null);
function _(_) {
  let _ = _("DropDownMenu", _);
  return (0, _.jsx)(_.Provider, {
    value: {},
    children: (0, _.jsx)(_, {
      ..._,
    }),
  });
}
function _(_, _, _, _) {
  let _;
  if (_.key === "ArrowDown")
    _ = (_.findIndex((_) => _.data === _) + 1) % _.length;
  else if (_.key === "ArrowUp") {
    let _ = _.findIndex((_) => _.data === _);
    _ = _ <= 0 ? _.length - 1 : _ - 1;
  }
  _ !== void 0 && (_(_[_]), _.preventDefault());
}
function _(_) {
  let {
      rgOptions: _,
      strDropDownItemClassName: _,
      onValueSelected: _,
      selectedValue: _,
    } = _,
    [_, _] = _.useState(_),
    _ = _.useMemo(() => _.filter(_), [_]),
    _ = _.useCallback(
      (_) => {
        _(_, _, _, (_) => _(_.data));
      },
      [_, _],
    );
  return (0, _.jsx)("div", {
    className: _(
      _.DialogDropDownMenu,
      "_DialogInputContainer",
      _.strDropDownMenuCtnClass,
    ),
    onKeyDown: _,
    children: (0, _.jsx)(_, {
      rgOptions: _,
      strDropDownItemClassName: _,
      onValueSelected: _,
      activeValue: _,
      setActiveValue: _,
    }),
  });
}
function _(_) {
  let { rgOptions: _, ..._ } = _;
  return _.map((_, _) =>
    _(_)
      ? (0, _.jsx)(
          "hr",
          {
            className: _(
              _.DialogDropDownMenu_Item,
              _.DialogDropDownMenu_Separator,
            ),
          },
          _,
        )
      : _(_)
        ? (0, _.jsx)(
            _,
            {
              ..._,
              rgOptions: _.options,
            },
            _,
          )
        : (0, _.jsx)(
            _,
            {
              ..._,
              option: _,
            },
            _,
          ),
  );
}
function _(_) {
  let {
      option: _,
      strDropDownItemClassName: _,
      onValueSelected: _,
      activeValue: _,
      setActiveValue: _,
    } = _,
    _ = _.useCallback((_) => _ && _.focus(), []),
    _ = _.useCallback(() => {
      _(_.data);
    }, [_, _]),
    _ = _.data === _;
  return (0, _.jsx)("button", {
    type: "button",
    className: _(
      _.DialogDropDownMenu_Item,
      _,
      _.strOptionClass,
      _ && "ContextMenuAutoFocus",
    ),
    onClick: (_) => _(_, _),
    ref: _ ? _ : void 0,
    onMouseEnter: _,
    role: "option",
    "aria-selected": _,
    children: _.tooltip
      ? (0, _.jsx)(_, {
          toolTipContent: _.tooltip,
          bTopmost: !0,
          className: "TooltipContainer",
          children: _.label,
        })
      : (0, _.jsx)("div", {
          children: _.label,
        }),
  });
}
var _ = class extends _.Component {
  state = {
    rgOptions: void 0,
  };
  async OnMenuOpened() {
    if (!this.state.rgOptions) {
      let _ = await this.props.fnLoadOptions();
      this.setState({
        rgOptions: _,
      });
    }
  }
  render() {
    let {
        fnLoadOptions: _,
        strInitialDisplay: _,
        initialValue: _,
        ..._
      } = this.props,
      { rgOptions: _ } = this.state;
    return (
      _ === void 0 &&
        (_ || _
          ? ((_ = [
              {
                label: _,
                data: _,
              },
            ]),
            (_.selectedOption = _))
          : (_ = [])),
      (0, _.jsx)(_, {
        ..._,
        rgOptions: _,
        onMenuOpened: this.OnMenuOpened,
      })
    );
  }
};
_([_], _.prototype, "OnMenuOpened", 1);
var _ = _(_());
var _ = _(_());
var _ = _(_());
var _ = _(_());
var _ = class {
  activeObject;
  instance;
  constructor(_) {
    this.instance = new _(_, !1);
  }
};
var _ = class {
    m_parent;
    m_window;
    m_container = null;
    iIntervalShow;
    m_bRemoveOnHide;
    m_reactRoot;
    constructor(_, _ = !0) {
      (this.m_parent = _),
        (this.m_window = _.ownerDocument.defaultView),
        (this.m_bRemoveOnHide = _);
    }
    Show(_, _) {
      return (
        this.CancelShowInterval(),
        _
          ? new Promise((_, _) => {
              this.iIntervalShow = this.m_window.setTimeout(() => {
                let _ = this.m_parent.ownerDocument;
                _.defaultView &&
                  !_.defaultView.closed &&
                  (this.InternalShow(_), _());
              }, _);
            })
          : (this.InternalShow(_), Promise.resolve())
      );
    }
    InternalShow(_) {
      this.m_container ||
        ((this.m_container = this.m_parent.ownerDocument.createElement("div")),
        this.m_parent.appendChild(this.m_container)),
        this.m_reactRoot || (this.m_reactRoot = _.createRoot(this.m_container)),
        this.m_reactRoot.render(_);
    }
    Hide(_) {
      this.CancelShowInterval(),
        _
          ? (this.iIntervalShow = this.m_window.setTimeout(() => {
              this.InternalHide();
            }, _))
          : this.InternalHide();
    }
    InternalHide() {
      this.m_reactRoot &&
        (this.m_reactRoot.unmount(), (this.m_reactRoot = void 0)),
        this.m_container &&
          this.m_bRemoveOnHide &&
          (this.m_parent.removeChild(this.m_container),
          (this.m_container = null));
    }
    CancelShowInterval() {
      this.iIntervalShow !== void 0 &&
        (this.m_window.clearInterval(this.iIntervalShow),
        (this.iIntervalShow = void 0));
    }
    BIsChildElement(_) {
      return this.m_container && _(this.m_container, _);
    }
  },
  _ = class {
    m_strUniqueID;
    m_mapEmbeddedHovers = new WeakMap();
    constructor(_) {
      this.m_strUniqueID = _;
    }
    ShowElementDelayed(_, _, _, _) {
      let _ = this.GetEmbeddedElement(_);
      return (_.activeObject = _), _.instance.Show(_, _);
    }
    ShowElement(_, _, _) {
      let _ = this.GetEmbeddedElement(_);
      (_.activeObject = _), _.instance.Show(_);
    }
    HideElement(_, _, _) {
      let _ = this.GetEmbeddedElement(_);
      _.activeObject == _ && ((_.activeObject = void 0), _.instance.Hide(_));
    }
    GetEmbeddedElement(_) {
      let _ = this.m_mapEmbeddedHovers.get(_);
      return _ || ((_ = new _(_.body)), this.m_mapEmbeddedHovers.set(_, _)), _;
    }
  };
var _ = _(_()),
  _ = new _("DragDrop").Debug;
var _ = class extends _.Component {
  m_coordinator = new _();
  OnDrop(_, _) {
    _ > _ && _--, _ != _ && this.props.onReorder(_, _);
  }
  render() {
    let _ = [];
    return (
      _.push(
        (0, _.jsx)(
          _,
          {
            coordinator: this.m_coordinator,
            fnBAcceptDraggable: (_) => _.props.data != 0,
            fnOnDrop: (_) => this.OnDrop(_.props.data, 0),
          },
          "dropregion_top",
        ),
      ),
      _.Children.forEach(this.props.children, (_, _) => {
        let _ = _.props._ || "__list_" + _,
          _ = _ + 1;
        _.push(
          (0, _.jsx)(
            _,
            {
              coordinator: this.m_coordinator,
              data: _,
              children: _,
            },
            _,
          ),
        ),
          _.push(
            (0, _.jsx)(
              _,
              {
                coordinator: this.m_coordinator,
                fnBAcceptDraggable: (_) => _.props.data != _,
                fnOnDrop: (_) => this.OnDrop(_.props.data, _),
              },
              "dropregion_" + _,
            ),
          );
      }),
      (0, _.jsx)("div", {
        className: "DialogReorderableList",
        children: _,
      })
    );
  }
};
_([_], _.prototype, "OnDrop", 1);
function _(_) {
  if ("touches" in _) {
    let _ = _;
    return [_.touches[0].clientX, _.touches[0].clientY];
  } else return [_.clientX, _.clientY];
}
function _(_, _, _, _) {
  return _
    ? _ && _ > _.left && _ < _.right && _ > _.top && _ < _.bottom
    : _ && _ >= _.left && _ <= _.right && _ >= _.top && _ <= _.bottom;
}
var _ = class {
  m_embeddedElement = new _("DragGhosts");
  m_rgDropRegions = [];
  m_activeDraggable;
  m_rgActiveDropRegions = [];
  m_activeDropRegion;
  m_dropGhost;
  m_dragGhost;
  m_dragOffWindowTimer;
  RegisterDropRegion(_) {
    this.m_rgDropRegions.push(_),
      this.m_activeDraggable &&
        _.BAcceptDraggable(this.m_activeDraggable) &&
        (_.OnDragStarted(this.m_activeDraggable),
        this.m_rgActiveDropRegions.push(_));
  }
  UnregisterDropRegion(_) {
    _(this.m_rgDropRegions, _),
      _(this.m_rgActiveDropRegions, _),
      this.m_activeDropRegion == _ &&
        ((this.m_activeDropRegion = void 0),
        this.m_activeDraggable && this.ShowDragGhost());
  }
  OnDragGhostRef(_) {
    this.m_dragGhost = _;
  }
  ShowDragGhost() {
    let _ = this.m_activeDraggable.renderDragGhost(),
      _ = _(
        _.props.className,
        !!this.m_activeDropRegion && "DraggedOverActiveDrop",
      ),
      _ = _.cloneElement(_, {
        ref: this.OnDragGhostRef,
        className: _,
      });
    this.m_embeddedElement.ShowElement(
      this.m_activeDraggable.GetDragDocument(),
      _,
      this.m_activeDraggable,
    );
  }
  HideDragGhost() {
    this.m_embeddedElement.HideElement(
      this.m_activeDraggable.GetDragDocument(),
      this.m_activeDraggable,
    );
  }
  m_elCloneContainer;
  m_elCloneOriginal;
  m_nodeCloneCopy;
  MakeDragClone(_) {
    _(
      !this.m_nodeCloneCopy && !this.m_elCloneOriginal,
      "Drag already in progress",
    ),
      (this.m_elCloneOriginal = _.m_divRef.current),
      (this.m_nodeCloneCopy = this.m_elCloneOriginal.cloneNode(!0)),
      _.m_divRef.current.replaceWith(this.m_nodeCloneCopy),
      this.m_elCloneContainer ||
        ((this.m_elCloneContainer =
          _.GetDragDocument().body.ownerDocument.createElement("div")),
        _.GetDragDocument().body.appendChild(this.m_elCloneContainer)),
      this.m_elCloneContainer.appendChild(this.m_elCloneOriginal);
  }
  ReverseDragClone() {
    this.m_nodeCloneCopy.parentNode?.replaceChild(
      this.m_elCloneOriginal,
      this.m_nodeCloneCopy,
    ),
      (this.m_nodeCloneCopy = void 0),
      (this.m_elCloneOriginal = void 0);
  }
  OnDragStart(_) {
    (this.m_activeDraggable = _), (this.m_rgActiveDropRegions = []);
    for (let _ of this.m_rgDropRegions)
      _.BAcceptDraggable(_) &&
        (_.OnDragStarted(_), this.m_rgActiveDropRegions.push(_));
    this.MakeDragClone(_), this.ShowDragGhost();
  }
  EndDrag() {
    if (this.m_activeDraggable) {
      this.ReverseDragClone(),
        this.HideDragGhost(),
        this.m_activeDropRegion &&
          this.m_activeDropRegion.OnDrop(this.m_activeDraggable);
      for (let _ of this.m_rgActiveDropRegions)
        _.OnDragEnded(this.m_activeDraggable);
      (this.m_activeDraggable = void 0),
        (this.m_dropGhost = void 0),
        (this.m_rgActiveDropRegions = []);
    }
  }
  FindBestActiveDropRegionForPoint(_, _) {
    let _ = this.m_activeDraggable.GetDragDocument(),
      _;
    if (("elementsFromPoint" in _ && (_ = _.elementsFromPoint(_, _)), _)) {
      let _ = new Map();
      this.m_rgActiveDropRegions.forEach((_) => _.set(_.GetElement(), _));
      for (let _ of _) {
        let _ = _.get(_);
        if (_) return _;
      }
    } else {
      if (
        this.m_activeDropRegion &&
        this.m_activeDropRegion.BDraggableInRegion(_, _, this.m_activeDraggable)
      )
        return this.m_activeDropRegion;
      for (let _ = this.m_rgActiveDropRegions.length - 1; _ >= 0; _--) {
        let _ = this.m_rgActiveDropRegions[_];
        if (_.BDraggableInRegion(_, _, this.m_activeDraggable)) return _;
      }
    }
  }
  m_prevClientX = 0;
  m_prevClientY = 0;
  OnDrag(_, _, _) {
    let _ = this.m_prevClientX || _,
      _ = this.m_prevClientY || _;
    if (
      (_.props.bEnableHTMLDrag &&
        this.m_dragOffWindowTimer &&
        window.clearTimeout(this.m_dragOffWindowTimer),
      this.m_dragGhost)
    ) {
      let _ = _ === void 0 ? 0 : _ - (this.m_dragGhost.state.clientX ?? 0),
        _ = _ === void 0 ? 0 : _ - (this.m_dragGhost.state.clientY ?? 0);
      if (
        (this.m_dragGhost.setState({
          clientX: _,
          clientY: _,
          clientXDelta: _,
          clientYDelta: _,
          bVisible: !0,
        }),
        _.props.bEnableHTMLDrag && (_ || _))
      ) {
        let _ = _ + _,
          _ = _ + _,
          _ = _.GetDragDocument().body.getBoundingClientRect();
        if (_(_, _, _) && !_(_, _, _, !0)) {
          let _ = _(_, _.left, _.right, _.left - 200, _.right + 200),
            _ = _(_, _.top, _.bottom, _.top - 100, _.bottom + 100),
            _ = 50;
          this.m_dragOffWindowTimer = window.setTimeout(() => {
            _ == this.m_activeDraggable && this.OnDrag(_, _, _);
          }, _);
        }
      }
    }
    let _ = this.FindBestActiveDropRegionForPoint(_, _);
    (this.m_prevClientX = _),
      (this.m_prevClientY = _),
      !!this.m_activeDropRegion != !!_ &&
        (this.ShowDragGhost(),
        this.m_dropGhost ||
          (this.m_dropGhost = this.m_activeDraggable.renderDropGhost())),
      this.m_activeDropRegion &&
        this.m_activeDropRegion != _ &&
        this.m_activeDropRegion.OnDragLeave(this.m_activeDraggable),
      _ &&
        this.m_activeDropRegion != _ &&
        _.OnDragEnter(this.m_activeDraggable, this.m_dropGhost),
      (this.m_activeDropRegion = _),
      this.m_activeDropRegion &&
        this.m_activeDropRegion.OnDragMove(_, _, this.m_activeDraggable);
  }
};
_([_], _.prototype, "OnDragGhostRef", 1);
var _ = 5,
  _ = class extends _.Component {
    constructor(_) {
      super(_), _(this);
    }
    m_DragInfo = {
      bStarted: !1,
      startClientX: void 0,
      startClientY: void 0,
      startOffsetX: void 0,
      startOffsetY: void 0,
      startWidth: void 0,
      startHeight: void 0,
      ownerWin: void 0,
    };
    m_divRef = _.createRef();
    GetDragDocument() {
      return this.m_DragInfo.ownerWin?.document;
    }
    RecordDragStart(_, _, _) {
      (this.m_DragInfo.startClientX = _), (this.m_DragInfo.startClientY = _);
      let _ = _.getBoundingClientRect();
      (this.m_DragInfo.startOffsetX = _ - _.left),
        (this.m_DragInfo.startOffsetY = _ - _.top),
        (this.m_DragInfo.startWidth = _.width),
        (this.m_DragInfo.startHeight = _.height),
        (this.m_DragInfo.ownerWin = _.ownerDocument.defaultView);
    }
    ProcessDragMove(_) {
      _("ProcessDragMove", _, this.props.data);
      let [_, _] = _(_);
      if (!this.m_DragInfo.bStarted)
        Math.pow(_ - (this.m_DragInfo.startClientX ?? 0), 2) +
          Math.pow(_ - (this.m_DragInfo.startClientY ?? 0), 2) >=
          _ * _ &&
          ((this.m_DragInfo.bStarted = !0),
          this.forceUpdate(),
          this.props.fnOnDragStart && this.props.fnOnDragStart(),
          this.props.coordinator.OnDragStart(this),
          this.props.coordinator.OnDrag(this, _, _));
      else {
        if (this.props.bEnableHTMLDrag && _ == 0 && _ == 0) return;
        this.props.coordinator.OnDrag(this, _, _);
      }
    }
    OnMouseDown(_) {
      !this.m_DragInfo.bStarted &&
        _.button == 0 &&
        (this.RecordDragStart(_.currentTarget, _.clientX, _.clientY),
        this.m_DragInfo.ownerWin?.addEventListener(
          "mousemove",
          this.ProcessDragMove,
        ),
        this.m_DragInfo.ownerWin?.addEventListener("mouseup", this.OnMouseUp));
    }
    OnMouseUp(_) {
      this.m_DragInfo.ownerWin?.removeEventListener(
        "mousemove",
        this.ProcessDragMove,
      ),
        this.m_DragInfo.ownerWin?.removeEventListener(
          "mouseup",
          this.OnMouseUp,
        ),
        this.ResetDragState();
    }
    OnTouchStart(_) {
      this.m_DragInfo.bStarted ||
        (this.RecordDragStart(
          _.currentTarget,
          _.touches[0].clientX,
          _.touches[0].clientY,
        ),
        this.m_DragInfo.ownerWin?.addEventListener(
          "touchmove",
          this.ProcessDragMove,
        ),
        this.m_DragInfo.ownerWin?.addEventListener(
          "touchend",
          this.OnTouchEnd,
        ));
    }
    OnTouchEnd(_) {
      this.m_DragInfo.ownerWin?.removeEventListener(
        "touchmove",
        this.ProcessDragMove,
      ),
        this.m_DragInfo.ownerWin?.removeEventListener(
          "touchend",
          this.OnTouchEnd,
        ),
        this.ResetDragState();
    }
    ResetDragState() {
      _("ResetDragState", this.props.data),
        this.m_DragInfo.bStarted &&
          (this.props.coordinator.EndDrag(),
          this.props.fnOnDragEnd && this.props.fnOnDragEnd()),
        (this.m_DragInfo.bStarted = !1),
        (this.m_DragInfo.startClientX = void 0),
        (this.m_DragInfo.startClientY = void 0),
        (this.m_DragInfo.startOffsetX = void 0),
        (this.m_DragInfo.startOffsetY = void 0),
        (this.m_DragInfo.ownerWin = void 0),
        this.forceUpdate();
    }
    OnHTMLDragStart(_) {
      _("HTMLDragStart", _, this.props.data, this.props.strHTMLDragData),
        (_.dataTransfer.effectAllowed = "copyMove"),
        this.props.strHTMLDragData &&
          this.props.strHTMLDragData.forEach((_, _) =>
            _.dataTransfer.setData(_, _),
          ),
        _.dataTransfer.getData("text/plain") ||
          _.dataTransfer.setData("text/plain", this.props.data.toString());
      let _ = new Image();
      _.dataTransfer.setDragImage(_, 0, 0),
        this.RecordDragStart(_.currentTarget, _.clientX, _.clientY),
        this.m_DragInfo.ownerWin?.addEventListener("drag", this.OnHTMLDrag),
        this.m_DragInfo.ownerWin?.addEventListener(
          "dragend",
          this.OnHTMLDragEnd,
        );
    }
    OnHTMLDrag(_) {
      _("HTMLDrag", _, _.dataTransfer?.types.length), this.ProcessDragMove(_);
    }
    OnHTMLDragEnd(_) {
      _(
        "HTMLDragEnd",
        _,
        _.dataTransfer?.getData("text/plain") || "NOTHING",
        this.props.data,
      ),
        this.m_DragInfo.ownerWin?.removeEventListener("drag", this.OnHTMLDrag),
        this.m_DragInfo.ownerWin?.removeEventListener(
          "dragend",
          this.OnHTMLDragEnd,
        ),
        this.ResetDragState();
    }
    render() {
      let {
          coordinator: _,
          data: _,
          bEnableHTMLDrag: _,
          strHTMLDragData: _,
          fnOnDragStart: _,
          fnOnDragEnd: _,
          fnRenderDragGhost: _,
          fnRenderDropGhost: _,
          className: _,
          strActiveClassName: _,
          children: _,
          ..._
        } = this.props,
        _ = {},
        _ = _ || "DialogDraggable";
      return (
        this.m_DragInfo.bStarted
          ? ((_ = _(_, _ || "DraggedOut")),
            _ &&
              (_ = {
                onDragEnd: this.OnHTMLDragEnd,
              }))
          : _
            ? (_ = {
                onDragStart: this.OnHTMLDragStart,
              })
            : (_ = {
                onMouseDown: this.OnMouseDown,
                onTouchStart: this.OnTouchStart,
              }),
        (0, _.jsx)("div", {
          ref: this.m_divRef,
          className: _,
          ..._,
          ..._,
          draggable: _,
          children: _,
        })
      );
    }
    renderDropGhost() {
      return this.props.fnRenderDropGhost
        ? this.props.fnRenderDropGhost()
        : (0, _.jsx)(_, {
            elContent: this.GetClone(),
          });
    }
    renderDragGhost() {
      return this.props.fnRenderDragGhost
        ? this.props.fnRenderDragGhost()
        : (0, _.jsx)(_, {
            elContent: this.GetClone(),
            offsetX: this.m_DragInfo.startOffsetX,
            offsetY: this.m_DragInfo.startOffsetY,
            width: this.m_DragInfo.startWidth,
            height: this.m_DragInfo.startHeight,
          });
    }
    GetClone() {
      let _ = this.m_divRef.current,
        _;
      if (_ && _.childElementCount)
        if (_.childElementCount == 1) _ = _.firstElementChild.cloneNode(!0);
        else {
          _ = document.createElement("div");
          for (let _ = _.firstChild; _; _ = _.nextSibling)
            _.appendChild(_.cloneNode(!0));
        }
      return _;
    }
  };
_([_], _.prototype, "ProcessDragMove", 1),
  _([_], _.prototype, "OnMouseDown", 1),
  _([_], _.prototype, "OnMouseUp", 1),
  _([_], _.prototype, "OnTouchStart", 1),
  _([_], _.prototype, "OnTouchEnd", 1),
  _([_], _.prototype, "ResetDragState", 1),
  _([_], _.prototype, "OnHTMLDragStart", 1),
  _([_], _.prototype, "OnHTMLDrag", 1),
  _([_], _.prototype, "OnHTMLDragEnd", 1);
var _ = class extends _.Component {
  OnRef(_) {
    _ && this.props.elContent && _.appendChild(this.props.elContent);
  }
  render() {
    return (0, _.jsx)("div", {
      className: "DialogDraggable_DropGhost",
      ref: this.OnRef,
    });
  }
};
_([_], _.prototype, "OnRef", 1);
var _ = class extends _.Component {
  state = {
    clientX: void 0,
    clientY: void 0,
    bVisible: !0,
    clientXDelta: void 0,
    clientYDelta: void 0,
  };
  OnRef(_) {
    _ && this.props.elContent && _.appendChild(this.props.elContent);
  }
  CalculateRotationDegrees(_) {
    return !_ || Math.abs(_) < 4
      ? 0
      : (_ > 0 ? 7.5 : -7.5) * Math.sqrt(Math.abs(_));
  }
  render() {
    if (
      !this.state.bVisible ||
      this.state.clientX === void 0 ||
      this.state.clientY === void 0
    )
      return (0, _.jsx)("div", {});
    let _ = {
        left: this.state.clientX - (this.props.offsetX || 0),
        top: this.state.clientY - (this.props.offsetY || 0),
        width: this.props.width || "auto",
        height: this.props.height || "auto",
        perspective: "600px",
      },
      _ = _(
        this.CalculateRotationDegrees(this.state.clientYDelta),
        -90,
        90,
        2,
        0,
      ),
      _ = {
        transform: `rotateX(${this.CalculateRotationDegrees(-1 * (this.state.clientYDelta ?? 0))}deg) rotateY( ${this.CalculateRotationDegrees(this.state.clientXDelta)}deg)`,
        transition: "transform .16s ease-out, filter .16s ease-out",
        filter: "brightness(" + _ + ")",
      },
      _ = this.props.className || "DialogDraggable_DragGhost";
    return (0, _.jsx)("div", {
      className: _,
      style: _,
      children: (0, _.jsx)("div", {
        ref: this.OnRef,
        style: _,
      }),
    });
  }
};
_([_], _.prototype, "OnRef", 1);
var _ = class extends _.Component {
    m_divRef = _.createRef();
    constructor(_) {
      super(_), (this.state = {});
    }
    componentDidMount() {
      this.props.coordinator.RegisterDropRegion(this);
    }
    componentWillUnmount() {
      this.props.coordinator.UnregisterDropRegion(this);
    }
    OnDragStarted(_) {
      this.setState({
        bDraggableActive: !0,
      });
    }
    OnDragEnded(_) {
      this.setState({
        bDraggableActive: !1,
      });
    }
    OnDragEnter(_, _) {
      this.setState({
        dropGhost: _,
      }),
        this.props.fnOnDragEnter && this.props.fnOnDragEnter(_);
    }
    OnDragLeave(_) {
      this.setState({
        dropGhost: void 0,
      }),
        this.props.fnOnDragLeave && this.props.fnOnDragLeave(_);
    }
    OnDragMove(_, _, _) {}
    OnDrop(_) {
      this.setState({
        dropGhost: void 0,
      }),
        this.props.fnOnDrop(_);
    }
    BAcceptDraggable(_) {
      return !this.props.fnBAcceptDraggable || this.props.fnBAcceptDraggable(_);
    }
    BDraggableInRegion(_, _, _) {
      return _(_, _, this.GetClientRect());
    }
    GetElement() {
      return this.m_divRef.current;
    }
    GetClientRect() {
      return (
        this.m_divRef.current && this.m_divRef.current.getBoundingClientRect()
      );
    }
    render() {
      let {
          coordinator: _,
          fnBAcceptDraggable: _,
          fnOnDrop: _,
          fnOnDragEnter: _,
          fnOnDragLeave: _,
          className: _,
          strActiveClassName: _,
          children: _,
          focusable: _,
          containerRef: _,
          ..._
        } = this.props,
        _ = _(
          _ || "DialogDropRegion",
          this.state.bDraggableActive && (_ || "Active"),
        );
      return (0, _.jsxs)(_, {
        ref: _(_, this.m_divRef),
        className: _,
        ..._,
        focusable: _ === void 0 ? !!_.onClick : _,
        children: [this.state.dropGhost, _],
      });
    }
  },
  _ = class extends _ {
    BDraggableInRegion(_, _, _) {
      let _ = this.GetClientRect();
      return _
        ? _ >= _.left && _ <= _.right && _ >= _.top - 20 && _ <= _.bottom + 20
        : !1;
    }
  };
var _ = _(_());
var _ = {
  narrowWidth: "500px",
  "duration-app-launch": "800ms",
  PagedSettingsDialog: "fb--znpA9iY-",
  PagedSettingDialog_ContentColumn: "j1MmI35qVcc-",
  PagedSettingsDialog_PageListColumn: "ByZLSOXEJi8-",
  ResponsivePageList: "se2JFXkqcLA-",
  ResponsiveActivePage: "_5XW9bozMUTA-",
  PagedSettingsDialog_PageContent: "Qe9z1N90-mU-",
  NoPadding: "_25gxUTuvrIE-",
  Hidden: "PeXPE70M0-U-",
  NewNoteButton: "qrmLtG95jB0-",
  PagedSettingsDialog_Title: "vcucl2oj9Fk-",
  PagedSettingsDialog_PageList: "Tw4UqPnHT-Y-",
  PagedSettingsDialog_PageList_DisableScrolling: "_6ojc--MD434-",
  PagedSettingsDialog_PageListItem: "r3lLnZCioSI-",
  PageListItem_Icon: "fyzIFdjZ-zo-",
  PageListItem_Title: "YHbhPD53VXA-",
  DisabledItem: "_79-MLEJ4qwk-",
  Active: "kFlFNnkL7qo-",
  PageListSpacer: "msIgvzU-CxQ-",
  PageListSeparator: "Y5n0jzYJBSg-",
  Transparent: "K-hjH6eEVZs-",
  HidePageListButton: "Q4sUKE2nwwg-",
  ReturnToPageListButton: "Vr19V2RKWC8-",
};
var _ = _(_()),
  _ = "separator",
  _ = "spacer",
  _ = class {
    constructor() {
      _(this);
    }
    m_flPageListScrollTop = 0;
    m_flPageScrollTop = 0;
  };
_([_], _.prototype, "m_flPageListScrollTop", 2),
  _([_], _.prototype, "m_flPageScrollTop", 2);
var _ = class _ {
  static s_Instance;
  static Get() {
    return _.s_Instance || (_.s_Instance = new _()), _.s_Instance;
  }
  constructor() {
    _(this);
  }
  m_setPagedSettingsInstances = new Set();
};
_([_], _.prototype, "m_setPagedSettingsInstances", 2);
var _ = _;
function _(_) {
  let {
      stylesheet: _,
      pages: _,
      iActivePage: _,
      onPageSelected: _,
      PageListItemComponent: _ = _,
      PageListSeparatorComponent: _ = _,
    } = _,
    _ = _.useContext(_);
  return _.filter((_, _) => {
    if (_ === _ || _ === _) {
      for (let _ = _ + 1; _ < _.length; _++) {
        let _ = _[_];
        if (_ !== _ && _ !== _ && _.visible) return !0;
      }
      return !1;
    }
    return !0;
  }).map((_, _) => {
    let _ = _ === _;
    if (_ === _) {
      let _ = _ === _ + 1 || _ === _ - 1;
      return (0, _.jsx)(
        _,
        {
          role: "separator",
          bTransparent: _,
        },
        _,
      );
    } else {
      if (_ === _)
        return (0, _.jsx)(
          "div",
          {
            className: _.PageListSpacer,
          },
          _,
        );
      {
        if (_.visible === !1) return null;
        let _ = _.identifier || _.title || _.toString(),
          _ = () => _(_, _);
        return (0, _.jsx)(
          _,
          {
            className: _(_.PagedSettingsDialog_PageListItem, {
              [_.Active]: _,
            }),
            onClick: _,
            title: _.title,
            icon: _.icon,
            active: _,
            _: _ + _.identifier,
            role: "tab",
            "aria-selected": _,
            "aria-controls": _ + _.identifier + "_Content",
          },
          _,
        );
      }
    }
  });
}
function _(_) {
  let { title: _, icon: _, active: _, className: _, onClick: _, ..._ } = _;
  return (0, _.jsxs)("div", {
    className: _,
    onClick: _,
    ..._,
    children: [
      _
        ? (0, _.jsx)("div", {
            className: _.PageListItem_Icon,
            children: _,
          })
        : null,
      (0, _.jsx)("div", {
        className: _.PageListItem_Title,
        ..._,
        children: _,
      }),
    ],
  });
}
var _ = _.forwardRef(function (_, _) {
  let { activePage: _, style: _, stylesheet: _ } = _,
    _ = _.useContext(_),
    _ = _?.padding ?? "standard";
  return (0, _.jsxs)(_, {
    style: _,
    className: _(
      _?.PagedSettingsDialog_PageContent,
      _?.pageClassName,
      _ == "none" && _?.NoPadding,
    ),
    refElem: _,
    role: "tabpanel",
    "aria-labelledby": _ + _?.identifier,
    _: _ + _?.identifier + "_Content",
    children: [
      _?.header,
      !_?.hideTitle &&
        (0, _.jsx)(_, {
          children: _?.title,
        }),
      (0, _.jsx)(_, {
        children: _?.content,
      }),
    ],
  });
});
function _(_) {
  let { bTransparent: _, className: _, ..._ } = _;
  return (0, _.jsx)("div", {
    className: _(_, _.PageListSeparator, {
      [_.Transparent]: _,
    }),
    ..._,
  });
}
var _ = _.createContext(void 0),
  _ = _.forwardRef(function (_, _) {
    let { stylesheet: _ = _, pages: _, onPageRequested: _ } = _,
      _ = _.useId(),
      _ = _.page == null,
      [_, _] = _.useState(() =>
        _.startingPage === void 0
          ? -1
          : _.findIndex(
              (_) => typeof _ == "object" && _.identifier === _.startingPage,
            ),
      ),
      _ = _;
    _ ||
      (_ = _.findIndex((_) => typeof _ == "object" && _.identifier === _.page)),
      (_ < 0 || _ >= _.length) && (_ = 0);
    let _ = null;
    typeof _[_] == "object" && (_ = _[_]);
    let _ = _.useRef(null),
      _ = _.useCallback(() => _.current?.TakeFocus() || !1, [_]),
      [_, _] = _.useState(!1),
      _ = _ ? _ : void 0,
      _ = _.useCallback((_) => {
        _ && _(!0);
      }, []),
      _ = _.useCallback(
        (_, _) => {
          _(!0),
            _.PlayNavSound(15),
            _ && _(_.identifier),
            _.click ? _.click() : _ && _(_);
        },
        [_, _],
      ),
      _ = _.useRef(null),
      _ = (_) => {
        _.detail.button == 1 && _.current?.TakeFocus(_.detail.button);
      },
      _ = _.showTitle ?? !0,
      _ = _("DialogContentTransition", _.PagedSettingDialog_ContentColumn);
    _.useEffect(() => {
      _.bAutoFocusPageContent && _.current?.TakeFocus();
    }, []);
    let { refForPageList: _, refForPage: _ } = _();
    return (0, _.jsx)(_.Provider, {
      value: _,
      children: (0, _.jsxs)(_, {
        className: _(_.PagedSettingsDialog, _.className),
        ref: _,
        children: [
          (0, _.jsxs)(_, {
            className: _(
              _.PagedSettingsDialog_PageListColumn,
              _.hideList && _.Hidden,
              "PageListColumn",
            ),
            navRef: _,
            onButtonDown: _,
            onFocusWithin: _,
            children: [
              _ &&
                (0, _.jsx)("div", {
                  className: _.PagedSettingsDialog_Title,
                  children: _.title,
                }),
              _.topControls &&
                (0, _.jsx)("div", {
                  children: _.topControls,
                }),
              (0, _.jsx)(_, {
                className: _(
                  _.PagedSettingsDialog_PageList,
                  _.disablePageListScrolling &&
                    _.PagedSettingsDialog_PageList_DisableScrolling,
                  _ && _.PagedSettingsDialog_PageList_ShowTitle,
                  _.bNoHeaderPadding &&
                    _.PageSettingsDialog_PageList_NoHeaderPadding,
                ),
                role: "tablist",
                "aria-orientation": "vertical",
                navEntryPreferPosition: 4,
                ref: _,
                children: (0, _.jsx)(_, {
                  stylesheet: _,
                  pages: _,
                  iActivePage: _,
                  onPageSelected: _,
                  PageListItemComponent: _.PageListItemComponent,
                  PageListSeparatorComponent: _.PageListSeparatorComponent,
                }),
              }),
              _.bottomControls &&
                (0, _.jsx)("div", {
                  children: _.bottomControls,
                }),
            ],
          }),
          (0, _.jsxs)(_, {
            className: _,
            onCancelButton: _,
            navRef: _,
            children: [
              _.toggleHideList &&
                (0, _.jsx)(_, {
                  hideList: _.hideList,
                  toggleHideList: _.toggleHideList,
                }),
              _.renderPageContent
                ? _.renderPageContent(_, _, _)
                : (0, _.jsx)(_, {
                    ref: _,
                    activePage: _,
                    stylesheet: _,
                  }),
            ],
          }),
        ],
      }),
    });
  });
var _ = _.createContext(!1);
var _ = _.memo(function (_) {
  let {
      isActive: _,
      refForPage: _,
      page: _,
      PageComponent: _,
      stylesheet: _,
    } = _,
    _ = _.useContext(_),
    _ = _.useRef(!1);
  if (!_ && !_.current) return null;
  _.current = !0;
  let _ = _
    ? void 0
    : {
        display: "none",
      };
  return (0, _.jsx)(_.Provider, {
    value: _,
    children: (0, _.jsx)(_, {
      ref: _,
      style: _,
      activePage: _,
      stylesheet: _,
      role: "tabpanel",
      "aria-labelledby": _ + _.identifier,
      _: _ + _.identifier + "_Content",
    }),
  });
});
function _(_) {
  let { hideList: _, toggleHideList: _ } = _;
  return (0, _.jsx)("div", {
    className: _(_.HidePageListButton, _ && _.ListHidden),
    onClick: _,
    children: _
      ? (0, _.jsx)(_, {
          direction: "right",
        })
      : (0, _.jsx)(_, {
          direction: "left",
        }),
  });
}
function _() {
  let _ = _.useMemo(() => new _(), []);
  _.useEffect(
    () => (
      _.Get().m_setPagedSettingsInstances.add(_),
      () => {
        _.Get().m_setPagedSettingsInstances.delete(_);
      }
    ),
    [_],
  );
  let _ = _.useCallback(
      (_) => (_.m_flPageListScrollTop = _.currentTarget.scrollTop),
      [_],
    ),
    _ = _.useCallback(
      (_) => (_.m_flPageScrollTop = _.currentTarget.scrollTop),
      [_],
    ),
    _ = _("scroll", _),
    _ = _("scroll", _),
    _ = _.useCallback(
      (_) => {
        _.m_flPageListScrollTop = _?.scrollTop ?? 0;
      },
      [_],
    ),
    _ = _.useCallback(
      (_) => {
        _.m_flPageScrollTop = _?.scrollTop ?? 0;
      },
      [_],
    ),
    _ = _(_, _),
    _ = _(_, _);
  return {
    refForPageList: _,
    refForPage: _,
  };
}
var _ = _(_());
var _ = _(_()),
  _ = class extends _.Component {
    m_refTextArea = _.createRef();
    m_nTextAreaPadding;
    m_cEntryLength = Number.MAX_VALUE;
    get textarea() {
      return this.m_refTextArea.current;
    }
    get value() {
      return this.m_refTextArea.current?.value;
    }
    focus() {
      this.m_refTextArea.current?.focus();
    }
    InternalOnInput() {
      let _ = this.m_refTextArea.current,
        _ = this.GetMinHeight(),
        _ = this.GetMaxHeight(),
        _,
        _ = _.value.length;
      if (
        (this.m_nTextAreaPadding === void 0 && this.CalculatePadding(),
        _ < this.m_cEntryLength &&
          ((_ = window.scrollY), (_.style.height = _ + "px")),
        _.scrollHeight > _)
      )
        (_.style.height = _ + "px"), (_.style.overflow = "auto");
      else if (_.scrollHeight != _.clientHeight) {
        let _ = Math.max(_.scrollHeight, _);
        (_.style.height = _ - this.m_nTextAreaPadding + "px"),
          _.style.overflow == "auto" && (_.style.overflow = "hidden");
      }
      _ !== void 0 && window.scrollTo(window.scrollX, _),
        (this.m_cEntryLength = _);
    }
    CalculatePadding() {
      let _ = getComputedStyle(this.m_refTextArea.current);
      this.m_nTextAreaPadding =
        _.boxSizing == "border-box"
          ? 0
          : parseFloat(_.paddingTop) + parseFloat(_.paddingBottom);
    }
    GetMinHeight() {
      return this.props.nMinHeight || 20;
    }
    GetMaxHeight() {
      return this.props.nMaxHeight || 500;
    }
    DeferredInternalOnInput() {
      window.setTimeout(this.InternalOnInput, 1);
    }
    OnKeyUp(_) {
      this.InternalOnInput(), this.props.onKeyUp && this.props.onKeyUp(_);
    }
    OnBlur(_) {
      this.DeferredInternalOnInput(), this.props.onBlur && this.props.onBlur(_);
    }
    OnClick(_) {
      this.InternalOnInput(), this.props.onClick && this.props.onClick(_);
    }
    OnPaste(_) {
      this.DeferredInternalOnInput(),
        this.props.onPaste && this.props.onPaste(_);
    }
    OnCut(_) {
      this.InternalOnInput(), this.props.onCut && this.props.onCut(_);
    }
    componentDidMount() {
      (this.m_refTextArea.current.style.overflow = "hidden"),
        (this.m_refTextArea.current.style.resize = "none"),
        this.InternalOnInput();
    }
    componentDidUpdate(_) {
      (_.nMinHeight != this.props.nMinHeight ||
        _.nMaxHeight != this.props.nMaxHeight) &&
        (this.m_cEntryLength = Number.MAX_VALUE),
        this.m_refTextArea.current?.value.length != this.m_cEntryLength &&
          this.InternalOnInput();
    }
    render() {
      let { nMinHeight: _, nMaxHeight: _, ..._ } = this.props;
      return (0, _.jsx)(_, {
        ..._,
        ref: this.m_refTextArea,
        onKeyUp: this.OnKeyUp,
        onBlur: this.OnBlur,
        onClick: this.OnClick,
        onPaste: this.OnPaste,
        onCut: this.OnCut,
      });
    }
  };
_([_], _.prototype, "InternalOnInput", 1),
  _([_], _.prototype, "OnKeyUp", 1),
  _([_], _.prototype, "OnBlur", 1),
  _([_], _.prototype, "OnClick", 1),
  _([_], _.prototype, "OnPaste", 1),
  _([_], _.prototype, "OnCut", 1);
var _ = _(_());
var _ = {
  "duration-app-launch": "800ms",
  narrowWidth: "500px",
  GamepadDialogContent: "hphqAIPfg2M-",
  GamepadDialogContent_InnerWidth: "LnWFhQhlcNM-",
  Field: "u6UxwRzex6Y-",
  Button: "n2lNcrU1FOA-",
  NoMinWidth: "FWT-g2SKMM0-",
  ActiveAndUnfocused: "sLya3q2VeV4-",
  StandaloneFieldSeparator: "N0nsIkWClzg-",
  StandardPadding: "Z0am8Dm2jfA-",
  CompactPadding: "XguX0XZI9XA-",
  WithDescription: "hiDXWuue9Ng-",
  WithBottomSeparatorStandard: "AXmVytBQVxA-",
  WithBottomSeparatorThick: "kW0log3-ANI-",
  HighlightOnFocus: "hYZwQTmms04-",
  Clickable: "_046KFlpPhi4-",
  Disabled: "N7wH4pXSFNg-",
  WithBottomSeparator: "_0AzPckEBOD4-",
  "ItemFocusAnim-darkerGrey": "arvRRZ9-C9Y-",
  "ItemFocusAnim-darkGrey": "_9jyy72RowfQ-",
  FieldChildrenWithIcon: "saFoLyssBQo-",
  FieldChildrenInner: "y-N79TWWLB0-",
  FieldClickTarget: "NeJGNNDdkHM-",
  FieldIcon: "_6lnixjah-90-",
  Front: "zh7sbd-UiyU-",
  BeforeChildren: "I9bIyopp1uc-",
  FieldLabelRow: "L9bBFKETjDc-",
  VerticalAlignCenter: "R74QljenKiQ-",
  InlineWrapShiftsChildrenBelow: "GKP4TEGtYjE-",
  ExtraPaddingOnChildrenBelow: "DsyywImFP3g-",
  ChildrenWidthFixed: "aiMxPe7cnx8-",
  ChildrenWidthGrow: "XE9DTUy61Jk-",
  WithFirstRow: "ApU36qw6S8o-",
  WithChildrenBelow: "IbvehGFvqy0-",
  FieldLabel: "HzfVYZAQM1I-",
  FieldLabelValue: "HOM-11Jf2cw-",
  FieldDescription: "_5BLJdCp0mew-",
  ModalPosition: "eGUcXf9qmGo-",
  _: "jLL34-DFetc-",
  FooterVisible: "MKL8peeVDj4-",
  WithStandardPadding: "_0pzkMgnBDek-",
  NoHeaderPadding: "thcCErzFlaA-",
  ModalClickToDismiss: "BO2jqunP5fQ-",
  slideInAnimation: "UM0fZCgqJds-",
  ScrollWithin: "A-yiOzX2zo8-",
  BasicTextInput: "IkgK3r9TyY4-",
  Toggle: "QaOnAvj7KDc-",
  ToggleRail: "gqoU6kzzga0-",
  _: "WszZCY9cJuU-",
  ToggleSwitch: "m-ViVI3jM2c-",
  LabelFieldValue: "xx9P2lluZR4-",
  DropDownControlButtonContents: "_4wpsx4CUbWY-",
  DropDownRow: "AtvTnUalXdo-",
  IconContainer: "-TYBSdzS9vM-",
  Label: "_2mNIgxcZZ6U-",
  ControlsListOuterPanel: "-D54syxDRFE-",
  StandardSpacing: "m-e4YJsJZjs-",
  ExtraSpacing: "Z6JwpLpx6PI-",
  ItemMaxSizeDesktop: "RzL4-TdmlAA-",
  AlignRight: "pmJ7XNli6U4-",
  AlignLeft: "gjnbAGxS0yc-",
  AlignCenter: "PDaSRT8ViFo-",
  FullWidth: "GSk7FKAGFT4-",
  ControlsListChild: "h4Ytu5NGGqM-",
  "QuickAccess-Menu": "dpQ3XFHsodk-",
  BottomButtons: "RdkTX3BYU54-",
  TextareaWrapper: "X25Qp11Ngnw-",
  Textarea: "dd4R06-lKvI-",
  BackgroundAnimation: "HN-1eGY9Nmo-",
  "ItemFocusAnim-darkerGrey-nocolor": "_4ZiGgSYhigE-",
  "ItemFocusAnim-grey": "_0vm28U-NXYE-",
  "ItemFocusAnim-translucent-white-10": "Omlo74OCNh4-",
  "ItemFocusAnim-translucent-white-20": "_4y-sz5WDrKM-",
  "ItemFocusAnimBorder-darkGrey": "yVxuhcF-Jqo-",
  "ItemFocusAnim-green": "DGu9xeM67Ec-",
  focusAnimation: "AUSFtgMHqZk-",
  hoverAnimation: "_---TIKL-l4M-",
};
var _ = _(_());
var _ = _(_());
var _ = _(_());
async function _(_, _, _) {
  let _ = _(_),
    _ = _?.bForcePopOut || _(_);
  _(
    !(_ && _?.bNeverPopOut),
    "Conflicting popout options; will ignore bNeverPopOut",
  );
  let _ = !_ && _?.bNeverPopOut === !0,
    _ = _(_) || (!_ && _(_, _)),
    _ = _ && _?.popupWidth && _?.popupHeight,
    _;
  if (_ && !_) {
    let _ = _.cloneElement(_, {
      closeModal: () => {},
    });
    _ = await _(_, _, _?.promiseRenderComplete);
  }
  let _ = _ && _.height / _.innerHeight < 0.9 && _.width / _.innerWidth < 0.8;
  if (_ || (!_ && _))
    return _(_, _, void 0, {
      fnOnClose: _?.fnOnClose,
    });
  {
    let _ = {
        strTitle: _?.strTitle || _("#Dialog_DefaultWindowTitle"),
        fnOnClose: _?.fnOnClose,
        popupWidth: _?.popupWidth || _?.width,
        popupHeight: _?.popupHeight || _?.height,
        bHideMainWindowForPopouts: _?.bHideMainWindowForPopouts,
        className: _?.className,
      },
      _ = {
        bHideActions: _?.bHideActionIcons,
      },
      _ = _?.browserContext || _.browserInfo;
    return _(_, _, _.strTitle, _, _, _, _);
  }
}
async function _(_, _, _) {
  return _(_, _, {
    bHideMainWindowForPopouts: !0,
    ..._,
  });
}
function _(_, _, _, _, _, _, _) {
  let _,
    _,
    _ = _.props.closeModal,
    _ = () => {
      _ && _.Close(), _ && _(), _?.fnOnClose && _.fnOnClose();
    },
    _ = () => {
      _ && _.Close(), _();
    },
    _ = _.cloneElement(_, {
      closeModal: _,
    });
  if (((_ = _ || _(_)), _(_, _) && _ && _)) {
    if (_.bHideMainWindowForPopouts) {
      let _ = (0, _.jsx)(_, {
        className: "Hidden",
        onEscKeypress: _.props.bDisableBackgroundDismiss ? void 0 : _,
        children: (0, _.jsx)("div", {}),
      });
      _ = _.ShowModal(_);
    }
    let _ = {
      ..._,
      fnOnClose: _,
      browserContext: _,
    };
    _ = _.ShowLegacyPopupModal(_, _, _, _);
  } else _ = _.ShowModal(_);
  return _;
}
function _(_, _) {
  return (_ = _ || _(_ || window)), _.USE_POPUPS && _.BUsePopups();
}
function _(_) {
  return _.BOnlyPopups && _.BOnlyPopups();
}
async function _(_, _, _) {
  return new Promise((_, _) => {
    _.RequestModalMeasure(_, _, _);
  });
}
var _ = _(_());
var _ = _(_());
function _(_) {
  let {
      className: _,
      modalClassName: _,
      onCancel: _,
      closeModal: _,
      bOKDisabled: _,
      bCloseAfterOK: _ = !0,
      onOK: _,
      bAllowFullSize: _,
      bDestructiveWarning: _,
      bDisableBackgroundDismiss: _,
      bHideCloseIcon: _,
      children: _,
      "aria-labelledby": _,
      ..._
    } = _,
    _ = _();
  _(
    _ || _,
    `Either closeModal or onCancel should be passed to GenericDialog. Classes: ${_} ${_}`,
  );
  let _ = _.useCallback(() => {
      (_ && _()) || (_ && _());
    }, [_, _]),
    _ = _.useCallback(async () => {
      _ || (_ && (await _()), _ && _ && _());
    }, [_, _, _, _]);
  return (0, _.jsx)(_, {
    onEscKeypress: _,
    className: _,
    bDestructiveWarning: _,
    bDisableBackgroundDismiss: _,
    bHideCloseIcon: _,
    children: (0, _.jsx)(_, {
      role: "dialog",
      "aria-labelledby": _ || void 0,
      ..._,
      classNameContent: _(
        "GenericDialogBase",
        "GenericConfirmDialog",
        _ && "DialogContentFullSize",
        _,
      ),
      onSubmit: _,
      bCenterVertically: !_,
      children: _,
    }),
  });
}
function _(_) {
  let { title: _, children: _, ..._ } = _,
    _ = _.useId();
  return (0, _.jsxs)(_, {
    "aria-labelledby": _ ? _ : "",
    ..._,
    children: [
      _ &&
        (0, _.jsx)(_, {
          _: _,
          children: _,
        }),
      _,
    ],
  });
}
var _ = _(_());
function _(_) {
  function _(_) {
    return () => {
      _ && _(), _.closeModal && _.closeModal();
    };
  }
  let {
      strTitle: _,
      strDescription: _,
      strOKButtonText: _,
      strCancelButtonText: _,
      onGamepadCancel: _,
      strMiddleButtonText: _,
      onMiddleButton: _,
      bAlertDialog: _,
      bProgressDialog: _,
      children: _,
      ..._
    } = _,
    _ = _ || _("#Button_Close"),
    _ = (0, _.jsx)(_, {
      bOKDisabled: _.bOKDisabled,
      bCancelDisabled: _.bCancelDisabled,
      strOKText: _,
      onCancel: _(_.onCancel),
      strCancelText: _,
    });
  _
    ? (_ = void 0)
    : _
      ? (_ = (0, _.jsx)(_, {
          children: _,
        }))
      : _ &&
        (_ = (0, _.jsx)(_, {
          bOKDisabled: _.bOKDisabled,
          bCancelDisabled: _.bCancelDisabled,
          strOKText: _,
          onCancel: _(_.onCancel),
          strCancelText: _,
          onUpdate: () => {
            _(), _.closeModal && _.closeModal();
          },
          strUpdateText: _,
          bUpdateDisabled: _.bMiddleDisabled,
        }));
  let _ = _.useId();
  return (0, _.jsx)(_, {
    ..._,
    title:
      _ ||
      (0, _.jsx)(_.Fragment, {
        children: " ",
      }),
    "aria-describedby": _,
    children: (0, _.jsxs)(_, {
      onCancelButton: _(_ || _.onCancel),
      children: [
        (0, _.jsxs)(_, {
          children: [
            (0, _.jsx)("div", {
              _: _,
              style: {
                display: "contents",
              },
              children: _,
            }),
            _,
          ],
        }),
        (0, _.jsx)(_, {
          children: _,
        }),
      ],
    }),
  });
}
function _(_) {
  let _ = {
    onOK: () => {},
    onCancel: () => {},
    strDescription: (0, _.jsxs)("span", {
      style: {
        whiteSpace: "pre-line",
      },
      children: [" ", _.strDescription, " "],
    }),
    bAlertDialog: !0,
    ..._,
  };
  return (0, _.jsx)(_, {
    ..._,
  });
}
function _(_, _, _) {
  _(
    (0, _.jsx)(_, {
      strTitle: _,
      strDescription: _,
    }),
    _,
  );
}
var _ = _(_());
function _(_) {
  return _ ? _ + "_Label" : void 0;
}
function _(_) {
  return _ ? _ + "_Description" : void 0;
}
function _(_, _) {
  let { label: _, description: _ } = _;
  return {
    "aria-labelledby": _ ? _(_) : void 0,
    "aria-describedby": _ ? _(_) : void 0,
  };
}
var _ = _.forwardRef(function (_, _) {
  let {
      accessibilityId: _,
      label: _,
      description: _,
      icon: _,
      children: _,
      childrenLayout: _,
      inlineWrap: _,
      childrenContainerWidth: _,
      spacingBetweenLabelAndChild: _,
      padding: _,
      disabled: _,
      bottomSeparator: _,
      className: _,
      highlightOnFocus: _,
      indentLevel: _,
      verticalAlignment: _,
      iconLocation: _,
      tooltip: _,
      explainer: _,
      explainerTitle: _,
      ..._
    } = _,
    _ = _(),
    _ = _ ?? "inline",
    _ = _ ?? "front",
    _ = _ == "front" && !!_,
    _ = _ == "before-children" && !!_,
    _ = _ == "inline" && !!_,
    _ = _ == "below" && !!_,
    _ = _ ?? (_ ? "shift-children-below" : "keep-inline"),
    _ = !!(_.onClick || _.onActivate || _.focusable),
    _ = (_ != null && _) || _ != null || (_ && _ != null),
    _ = _ ?? "min",
    _ = _ ?? "standard",
    _ = _ ?? "standard",
    _ = _ ?? "standard",
    _ = _ ?? !0,
    _ = _ ?? 0,
    _ = _ ?? "center",
    _ = _(_ ?? _, _),
    _ = _.useRef(void 0),
    _ = _(_, _.navRef),
    _ = _.useCallback(
      (_) => {
        _.current && (_.current?.TakeFocus(), _.preventDefault());
      },
      [_],
    );
  return (0, _.jsxs)(_, {
    focusable: _,
    noFocusRing: !0,
    scrollIntoViewWhenChildFocused: !0,
    onActivate: _.onClick ? (_) => _.onClick?.(_) : void 0,
    ref: _,
    onMouseDown: _ ? void 0 : _,
    ..._,
    ..._,
    navRef: _,
    className: _(
      _,
      _.Field,
      _ && _.Disabled,
      _ && _.WithFirstRow,
      _ && _.WithChildrenInline,
      _ && _.WithChildrenBelow,
      _ == "center" && _.VerticalAlignCenter,
      _ == "shift-children-below" && _.InlineWrapShiftsChildrenBelow,
      !!_ && _.WithDescription,
      _ == "standard" && _.WithBottomSeparatorStandard,
      _ == "thick" && _.WithBottomSeparatorThick,
      _ == "fixed" && _.ChildrenWidthFixed,
      _ == "max" && _.ChildrenWidthGrow,
      _ == "standard" && _.ExtraPaddingOnChildrenBelow,
      _ == "standard" && _.StandardPadding,
      _ == "compact" && _.CompactPadding,
      _ && _.Clickable,
      _ && _.HighlightOnFocus,
    ),
    style: {
      "--indent-level": _,
    },
    children: [
      _ &&
        (0, _.jsxs)("div", {
          className: _.FieldLabelRow,
          children: [
            (0, _.jsxs)("div", {
              className: _.FieldLabel,
              _: _(_),
              children: [
                _ &&
                  (0, _.jsx)("div", {
                    className: _(_.FieldIcon, _.Front),
                    children: _,
                  }),
                _,
                _ &&
                  (0, _.jsx)(_, {
                    tooltip: _,
                  }),
              ],
            }),
            _ &&
              (0, _.jsxs)("div", {
                className: _.FieldChildrenWithIcon,
                children: [
                  _ &&
                    (0, _.jsx)("div", {
                      className: _(_.FieldIcon, _.BeforeChildren),
                      children: _,
                    }),
                  (0, _.jsx)("div", {
                    className: _.FieldChildrenInner,
                    children: _,
                  }),
                ],
              }),
          ],
        }),
      _ &&
        (0, _.jsxs)("div", {
          className: _.FieldChildrenWithIcon,
          children: [
            _ &&
              (0, _.jsx)("div", {
                className: _(_.FieldIcon, _.BeforeChildren),
                children: _,
              }),
            (0, _.jsx)("div", {
              className: _.FieldChildrenInner,
              children: _,
            }),
          ],
        }),
      _ &&
        (0, _.jsx)("div", {
          className: _.FieldDescription,
          _: _(_),
          children: _,
        }),
    ],
  });
});
function _(_, _) {
  let _ = _(),
    _ = _.useCallback(() => {
      _(_, _, _.ownerWindow ?? window);
    }, [_, _, _]);
  if (_ == null) return {};
  let _ = _("#Field_MoreInfo_Action");
  return {
    onOptionsButton: _,
    onOptionsActionDescription: _,
  };
}
var _ = _.forwardRef(function (_, _) {
  return (0, _.jsx)(_, {
    ref: _,
    accessibilityId: null,
    ..._,
  });
});
function _(_, _, _ = ["label", "button"]) {
  let _ = _.useId(),
    _ = _(_, _),
    _ = {
      _: _,
      "aria-labelledby": "",
    };
  return (
    (_["aria-labelledby"] = _.map((_) =>
      _ == "button" ? _ : _["aria-labelledby"],
    ).join(" ")),
    (_["aria-describedby"] = _["aria-describedby"]),
    _
  );
}
var _ = _.forwardRef(function (_, _) {
    let {
        label: _,
        description: _,
        explainer: _,
        icon: _,
        layout: _,
        disabled: _,
        onActivate: _,
        indentLevel: _,
        bottomSeparator: _,
        highlightOnFocus: _,
        childrenContainerWidth: _,
        padding: _,
        inlineWrap: _,
        fieldClassName: _,
        fieldChildren: _,
        accessibilityNameOrder: _,
        ..._
      } = _,
      { refWithValue: _, refForElement: _ } = _(_),
      _ = _.useId();
    return (0, _.jsxs)(_, {
      accessibilityId: _,
      label: _,
      indentLevel: _,
      description: _,
      icon: _,
      bottomSeparator: _,
      highlightOnFocus: _,
      childrenLayout: _ ?? "inline",
      childrenContainerWidth: _ ?? "min",
      onMouseDown: (_) => {
        _.current?.focus(), _.preventDefault();
      },
      padding: _,
      inlineWrap: _,
      explainer: _,
      className: _,
      disabled: _,
      onActivate: _ ? _ : void 0,
      children: [
        (0, _.jsx)(_, {
          accessibilityId: _,
          ..._,
          ref: _,
        }),
        _,
      ],
    });
  }),
  _ = _.forwardRef(function (_, _) {
    let {
        accessibilityId: _,
        label: _,
        description: _,
        explainer: _,
        icon: _,
        layout: _,
        disabled: _,
        onActivate: _,
        indentLevel: _,
        bottomSeparator: _,
        highlightOnFocus: _,
        childrenContainerWidth: _,
        padding: _,
        inlineWrap: _,
        fieldClassName: _,
        fieldChildren: _,
        accessibilityNameOrder: _,
        ..._
      } = _,
      _ = _(_, _, _);
    return (0, _.jsx)(_, {
      ..._,
      ..._,
      disabled: _,
      ref: _,
    });
  }),
  _ = _.forwardRef(function (_, _) {
    let {
        label: _,
        description: _,
        icon: _,
        layout: _,
        bottomSeparator: _,
        highlightOnFocus: _,
        ..._
      } = _,
      { refWithValue: _, refForElement: _ } = _(_),
      _ = _.useId();
    return (0, _.jsx)(_, {
      accessibilityId: _,
      label: _,
      description: _,
      icon: _,
      bottomSeparator: _,
      highlightOnFocus: _,
      childrenLayout: _ ?? "inline",
      childrenContainerWidth: "fixed",
      onMouseDown: (_) => {
        _.current?.element?.focus(), _.preventDefault();
      },
      children: (0, _.jsx)(_, {
        ..._(_, _),
        ..._,
        ref: _,
      }),
    });
  });
var _ = _(_());
var _ = _(_());
var _ = {
  TransitionGroup: "xbJxDr3b7qU-",
  ContentWrapper: "CNH6rvKas2k-",
};
function _(_, _) {
  return _.classList
    ? !!_ && _.classList.contains(_)
    : (" " + (_.className.baseVal || _.className) + " ").indexOf(
        " " + _ + " ",
      ) !== -1;
}
function _(_, _) {
  _.classList
    ? _.classList.add(_)
    : _(_, _) ||
      (typeof _.className == "string"
        ? (_.className = _.className + " " + _)
        : _.setAttribute(
            "class",
            ((_.className && _.className.baseVal) || "") + " " + _,
          ));
}
function _(_, _) {
  return _.replace(new RegExp("(^|\\s)" + _ + "(?:\\s|$)", "g"), "$1")
    .replace(/\s+/g, " ")
    .replace(/^\s*|\s*$/g, "");
}
function _(_, _) {
  _.classList
    ? _.classList.remove(_)
    : typeof _.className == "string"
      ? (_.className = _(_.className, _))
      : _.setAttribute(
          "class",
          _((_.className && _.className.baseVal) || "", _),
        );
}
var _ = _(_());
var _ = _(_()),
  _ = _(_());
var _ = {
  disabled: !1,
};
var _ = _(_()),
  _ = _.default.createContext(null);
var _ = function (_) {
  return _.scrollTop;
};
var _ = "unmounted",
  _ = "exited",
  _ = "entering",
  _ = "entered",
  _ = "exiting",
  _ = (function (_) {
    _(_, _);
    function _(_, _) {
      var _;
      _ = _.call(this, _, _) || this;
      var _ = _,
        _ = _ && !_.isMounting ? _.enter : _.appear,
        _;
      return (
        (_.appearStatus = null),
        _._
          ? _
            ? ((_ = _), (_.appearStatus = _))
            : (_ = _)
          : _.unmountOnExit || _.mountOnEnter
            ? (_ = _)
            : (_ = _),
        (_.state = {
          status: _,
        }),
        (_.nextCallback = null),
        _
      );
    }
    _.getDerivedStateFromProps = function (_, _) {
      var _ = _._;
      return _ && _.status === _
        ? {
            status: _,
          }
        : null;
    };
    var _ = _.prototype;
    return (
      (_.componentDidMount = function () {
        this.updateStatus(!0, this.appearStatus);
      }),
      (_.componentDidUpdate = function (_) {
        var _ = null;
        if (_ !== this.props) {
          var _ = this.state.status;
          this.props._
            ? _ !== _ && _ !== _ && (_ = _)
            : (_ === _ || _ === _) && (_ = _);
        }
        this.updateStatus(!1, _);
      }),
      (_.componentWillUnmount = function () {
        this.cancelNextCallback();
      }),
      (_.getTimeouts = function () {
        var _ = this.props.timeout,
          _,
          _,
          _;
        return (
          (_ = _ = _ = _),
          _ != null &&
            typeof _ != "number" &&
            ((_ = _.exit),
            (_ = _.enter),
            (_ = _.appear !== void 0 ? _.appear : _)),
          {
            exit: _,
            enter: _,
            appear: _,
          }
        );
      }),
      (_.updateStatus = function (_, _) {
        if ((_ === void 0 && (_ = !1), _ !== null))
          if ((this.cancelNextCallback(), _ === _)) {
            if (this.props.unmountOnExit || this.props.mountOnEnter) {
              var _ = this.props.nodeRef
                ? this.props.nodeRef.current
                : _.default.findDOMNode(this);
              _ && _(_);
            }
            this.performEnter(_);
          } else this.performExit();
        else
          this.props.unmountOnExit &&
            this.state.status === _ &&
            this.setState({
              status: _,
            });
      }),
      (_.performEnter = function (_) {
        var _ = this,
          _ = this.props.enter,
          _ = this.context ? this.context.isMounting : _,
          _ = this.props.nodeRef ? [_] : [_.default.findDOMNode(this), _],
          _ = _[0],
          _ = _[1],
          _ = this.getTimeouts(),
          _ = _ ? _.appear : _.enter;
        if ((!_ && !_) || _.disabled) {
          this.safeSetState(
            {
              status: _,
            },
            function () {
              _.props.onEntered(_);
            },
          );
          return;
        }
        this.props.onEnter(_, _),
          this.safeSetState(
            {
              status: _,
            },
            function () {
              _.props.onEntering(_, _),
                _.onTransitionEnd(_, function () {
                  _.safeSetState(
                    {
                      status: _,
                    },
                    function () {
                      _.props.onEntered(_, _);
                    },
                  );
                });
            },
          );
      }),
      (_.performExit = function () {
        var _ = this,
          _ = this.props.exit,
          _ = this.getTimeouts(),
          _ = this.props.nodeRef ? void 0 : _.default.findDOMNode(this);
        if (!_ || _.disabled) {
          this.safeSetState(
            {
              status: _,
            },
            function () {
              _.props.onExited(_);
            },
          );
          return;
        }
        this.props.onExit(_),
          this.safeSetState(
            {
              status: _,
            },
            function () {
              _.props.onExiting(_),
                _.onTransitionEnd(_.exit, function () {
                  _.safeSetState(
                    {
                      status: _,
                    },
                    function () {
                      _.props.onExited(_);
                    },
                  );
                });
            },
          );
      }),
      (_.cancelNextCallback = function () {
        this.nextCallback !== null &&
          (this.nextCallback.cancel(), (this.nextCallback = null));
      }),
      (_.safeSetState = function (_, _) {
        (_ = this.setNextCallback(_)), this.setState(_, _);
      }),
      (_.setNextCallback = function (_) {
        var _ = this,
          _ = !0;
        return (
          (this.nextCallback = function (_) {
            _ && ((_ = !1), (_.nextCallback = null), _(_));
          }),
          (this.nextCallback.cancel = function () {
            _ = !1;
          }),
          this.nextCallback
        );
      }),
      (_.onTransitionEnd = function (_, _) {
        this.setNextCallback(_);
        var _ = this.props.nodeRef
            ? this.props.nodeRef.current
            : _.default.findDOMNode(this),
          _ = _ == null && !this.props.addEndListener;
        if (!_ || _) {
          setTimeout(this.nextCallback, 0);
          return;
        }
        if (this.props.addEndListener) {
          var _ = this.props.nodeRef
              ? [this.nextCallback]
              : [_, this.nextCallback],
            _ = _[0],
            _ = _[1];
          this.props.addEndListener(_, _);
        }
        _ != null && setTimeout(this.nextCallback, _);
      }),
      (_.render = function () {
        var _ = this.state.status;
        if (_ === _) return null;
        var _ = this.props,
          _ = _.children,
          _ = _._,
          _ = _.mountOnEnter,
          _ = _.unmountOnExit,
          _ = _.appear,
          _ = _.enter,
          _ = _.exit,
          _ = _.timeout,
          _ = _.addEndListener,
          _ = _.onEnter,
          _ = _.onEntering,
          _ = _.onEntered,
          _ = _.onExit,
          _ = _.onExiting,
          _ = _.onExited,
          _ = _.nodeRef,
          _ = _(_, [
            "children",
            "in",
            "mountOnEnter",
            "unmountOnExit",
            "appear",
            "enter",
            "exit",
            "timeout",
            "addEndListener",
            "onEnter",
            "onEntering",
            "onEntered",
            "onExit",
            "onExiting",
            "onExited",
            "nodeRef",
          ]);
        return _.default.createElement(
          _.Provider,
          {
            value: null,
          },
          typeof _ == "function"
            ? _(_, _)
            : _.default.cloneElement(_.default.Children.only(_), _),
        );
      }),
      _
    );
  })(_.default.Component);
_.contextType = _;
_.propTypes = {};
function _() {}
_.defaultProps = {
  _: !1,
  mountOnEnter: !1,
  unmountOnExit: !1,
  appear: !1,
  enter: !0,
  exit: !0,
  onEnter: _,
  onEntering: _,
  onEntered: _,
  onExit: _,
  onExiting: _,
  onExited: _,
};
_.UNMOUNTED = _;
_.EXITED = _;
_.ENTERING = _;
_.ENTERED = _;
_.EXITING = _;
var _ = _;
var _ = function (_, _) {
    return (
      _ &&
      _ &&
      _.split(" ").forEach(function (_) {
        return _(_, _);
      })
    );
  },
  _ = function (_, _) {
    return (
      _ &&
      _ &&
      _.split(" ").forEach(function (_) {
        return _(_, _);
      })
    );
  },
  _ = (function (_) {
    _(_, _);
    function _() {
      for (var _, _ = arguments.length, _ = new Array(_), _ = 0; _ < _; _++)
        _[_] = arguments[_];
      return (
        (_ = _.call.apply(_, [this].concat(_)) || this),
        (_.appliedClasses = {
          appear: {},
          enter: {},
          exit: {},
        }),
        (_.onEnter = function (_, _) {
          var _ = _.resolveArguments(_, _),
            _ = _[0],
            _ = _[1];
          _.removeClasses(_, "exit"),
            _.addClass(_, _ ? "appear" : "enter", "base"),
            _.props.onEnter && _.props.onEnter(_, _);
        }),
        (_.onEntering = function (_, _) {
          var _ = _.resolveArguments(_, _),
            _ = _[0],
            _ = _[1],
            _ = _ ? "appear" : "enter";
          _.addClass(_, _, "active"),
            _.props.onEntering && _.props.onEntering(_, _);
        }),
        (_.onEntered = function (_, _) {
          var _ = _.resolveArguments(_, _),
            _ = _[0],
            _ = _[1],
            _ = _ ? "appear" : "enter";
          _.removeClasses(_, _),
            _.addClass(_, _, "done"),
            _.props.onEntered && _.props.onEntered(_, _);
        }),
        (_.onExit = function (_) {
          var _ = _.resolveArguments(_),
            _ = _[0];
          _.removeClasses(_, "appear"),
            _.removeClasses(_, "enter"),
            _.addClass(_, "exit", "base"),
            _.props.onExit && _.props.onExit(_);
        }),
        (_.onExiting = function (_) {
          var _ = _.resolveArguments(_),
            _ = _[0];
          _.addClass(_, "exit", "active"),
            _.props.onExiting && _.props.onExiting(_);
        }),
        (_.onExited = function (_) {
          var _ = _.resolveArguments(_),
            _ = _[0];
          _.removeClasses(_, "exit"),
            _.addClass(_, "exit", "done"),
            _.props.onExited && _.props.onExited(_);
        }),
        (_.resolveArguments = function (_, _) {
          return _.props.nodeRef ? [_.props.nodeRef.current, _] : [_, _];
        }),
        (_.getClassNames = function (_) {
          var _ = _.props.classNames,
            _ = typeof _ == "string",
            _ = _ && _ ? _ + "-" : "",
            _ = _ ? "" + _ + _ : _[_],
            _ = _ ? _ + "-active" : _[_ + "Active"],
            _ = _ ? _ + "-done" : _[_ + "Done"];
          return {
            baseClassName: _,
            activeClassName: _,
            doneClassName: _,
          };
        }),
        _
      );
    }
    var _ = _.prototype;
    return (
      (_.addClass = function (_, _, _) {
        var _ = this.getClassNames(_)[_ + "ClassName"],
          _ = this.getClassNames("enter"),
          _ = _.doneClassName;
        _ === "appear" && _ === "done" && _ && (_ += " " + _),
          _ === "active" && _ && _(_),
          _ && ((this.appliedClasses[_][_] = _), _(_, _));
      }),
      (_.removeClasses = function (_, _) {
        var _ = this.appliedClasses[_],
          _ = _.base,
          _ = _.active,
          _ = _.done;
        (this.appliedClasses[_] = {}), _ && _(_, _), _ && _(_, _), _ && _(_, _);
      }),
      (_.render = function () {
        var _ = this.props,
          _ = _.classNames,
          _ = _(_, ["classNames"]);
        return _.default.createElement(
          _,
          _({}, _, {
            onEnter: this.onEnter,
            onEntered: this.onEntered,
            onEntering: this.onEntering,
            onExit: this.onExit,
            onExiting: this.onExiting,
            onExited: this.onExited,
          }),
        );
      }),
      _
    );
  })(_.default.Component);
_.defaultProps = {
  classNames: "",
};
_.propTypes = {};
var _ = _;
function _(_) {
  if (_ === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called",
    );
  return _;
}
var _ = _(_());
var _ = _(_());
function _(_, _) {
  var _ = function (_) {
      return _ && (0, _.isValidElement)(_) ? _(_) : _;
    },
    _ = Object.create(null);
  return (
    _ &&
      _.Children.map(_, function (_) {
        return _;
      }).forEach(function (_) {
        _[_.key] = _(_);
      }),
    _
  );
}
function _(_, _) {
  (_ = _ || {}), (_ = _ || {});
  function _(_) {
    return _ in _ ? _[_] : _[_];
  }
  var _ = Object.create(null),
    _ = [];
  for (var _ in _) _ in _ ? _.length && ((_[_] = _), (_ = [])) : _.push(_);
  var _,
    _ = {};
  for (var _ in _) {
    if (_[_])
      for (_ = 0; _ < _[_].length; _++) {
        var _ = _[_][_];
        _[_[_][_]] = _(_);
      }
    _[_] = _(_);
  }
  for (_ = 0; _ < _.length; _++) _[_[_]] = _(_[_]);
  return _;
}
function _(_, _, _) {
  return _[_] != null ? _[_] : _.props[_];
}
function _(_, _) {
  return _(_.children, function (_) {
    return (0, _.cloneElement)(_, {
      onExited: _.bind(null, _),
      _: !0,
      appear: _(_, "appear", _),
      enter: _(_, "enter", _),
      exit: _(_, "exit", _),
    });
  });
}
function _(_, _, _) {
  var _ = _(_.children),
    _ = _(_, _);
  return (
    Object.keys(_).forEach(function (_) {
      var _ = _[_];
      if ((0, _.isValidElement)(_)) {
        var _ = _ in _,
          _ = _ in _,
          _ = _[_],
          _ = (0, _.isValidElement)(_) && !_.props._;
        _ && (!_ || _)
          ? (_[_] = (0, _.cloneElement)(_, {
              onExited: _.bind(null, _),
              _: !0,
              exit: _(_, "exit", _),
              enter: _(_, "enter", _),
            }))
          : !_ && _ && !_
            ? (_[_] = (0, _.cloneElement)(_, {
                _: !1,
              }))
            : _ &&
              _ &&
              (0, _.isValidElement)(_) &&
              (_[_] = (0, _.cloneElement)(_, {
                onExited: _.bind(null, _),
                _: _.props._,
                exit: _(_, "exit", _),
                enter: _(_, "enter", _),
              }));
      }
    }),
    _
  );
}
var _ =
    Object.values ||
    function (_) {
      return Object.keys(_).map(function (_) {
        return _[_];
      });
    },
  _ = {
    component: "div",
    childFactory: function (_) {
      return _;
    },
  },
  _ = (function (_) {
    _(_, _);
    function _(_, _) {
      var _;
      _ = _.call(this, _, _) || this;
      var _ = _.handleExited.bind(_(_));
      return (
        (_.state = {
          contextValue: {
            isMounting: !0,
          },
          handleExited: _,
          firstRender: !0,
        }),
        _
      );
    }
    var _ = _.prototype;
    return (
      (_.componentDidMount = function () {
        (this.mounted = !0),
          this.setState({
            contextValue: {
              isMounting: !1,
            },
          });
      }),
      (_.componentWillUnmount = function () {
        this.mounted = !1;
      }),
      (_.getDerivedStateFromProps = function (_, _) {
        var _ = _.children,
          _ = _.handleExited,
          _ = _.firstRender;
        return {
          children: _ ? _(_, _) : _(_, _, _),
          firstRender: !1,
        };
      }),
      (_.handleExited = function (_, _) {
        var _ = _(this.props.children);
        _.key in _ ||
          (_.props.onExited && _.props.onExited(_),
          this.mounted &&
            this.setState(function (_) {
              var _ = _({}, _.children);
              return (
                delete _[_.key],
                {
                  children: _,
                }
              );
            }));
      }),
      (_.render = function () {
        var _ = this.props,
          _ = _.component,
          _ = _.childFactory,
          _ = _(_, ["component", "childFactory"]),
          _ = this.state.contextValue,
          _ = _(this.state.children).map(_);
        return (
          delete _.appear,
          delete _.enter,
          delete _.exit,
          _ === null
            ? _.default.createElement(
                _.Provider,
                {
                  value: _,
                },
                _,
              )
            : _.default.createElement(
                _.Provider,
                {
                  value: _,
                },
                _.default.createElement(_, _, _),
              )
        );
      }),
      _
    );
  })(_.default.Component);
_.propTypes = {};
_.defaultProps = _;
var _ = _;
var _ = _(_());
function _(_) {
  let {
      childrenKey: _,
      childrenClasses: _,
      children: _,
      directionClass: _,
      animate: _ = !0,
      sizeClass: _,
    } = _,
    _ = _(_.TransitionGroup, _);
  return (0, _.jsx)(_, {
    className: _,
    appear: !1,
    enter: _,
    exit: _,
    children: (0, _.jsx)(
      _,
      {
        childrenClasses: _,
        sizeClass: _,
        children: _,
      },
      _,
    ),
  });
}
function _(_) {
  let { sizeClass: _, children: _, childrenClasses: _, navKey: _, ..._ } = _,
    [_, _, _, _] = _(),
    _ = _.useRef(!0),
    _ = _.useCallback(() => _.current, [_]),
    _ = _.useCallback(() => {
      (_.current = !0), _();
    }, [_]),
    _ = _.useCallback(() => {
      (_.current = !1), _();
    }, [_]),
    _ = 1e4,
    _ = _.childrenClasses,
    _ = {
      enter: _.enterStart,
      enterActive: _.enterEnd,
      exit: _.exitStart,
      exitActive: _.exitEnd,
    };
  return _.current && !_.current.ownerDocument.defaultView
    ? null
    : (0, _.jsx)(_, {
        nodeRef: _,
        classNames: _,
        _: !0,
        timeout: _,
        addEndListener: _,
        onEntering: _,
        onExiting: _,
        ..._,
        children: (0, _.jsx)("div", {
          ref: _,
          className: _(_.ContentWrapper, _, _.base),
          children: (0, _.jsx)(_, {
            className: _,
            fnCanTakeFocus: _,
            navKey: _,
            children: _.children,
          }),
        }),
      });
}
function _() {
  let _ = _.useRef(null),
    _ = _.useRef(void 0);
  _.useLayoutEffect(() => {
    let _ = _.current;
    if (!_ || _.current) return;
    _.current = {
      element: _,
      activeProps: new Set(),
      bExiting: !1,
      fnDone: null,
    };
    let _ = _.current,
      _ = (_) => {
        _.target == _ && _.activeProps.add(_.propertyName);
      };
    _.addEventListener("transitionrun", _, !1);
    let _ = (_) => {
      _.target == _ &&
        (_.activeProps.delete(_.propertyName),
        _.fnDone && _.activeProps.size == 0 && _.bExiting && _.fnDone());
    };
    _.addEventListener("transitionend", _, !1),
      _.addEventListener("transitioncancel", _, !1);
  }, []);
  let _ = _.useCallback(
      (_) => {
        if (!_.current) {
          _();
          return;
        }
        _.current.fnDone = _;
      },
      [_],
    ),
    _ = _.useCallback(() => {
      _.current && (_.current.bExiting = !1);
    }, [_]),
    _ = _.useCallback(() => {
      _.current && (_.current.bExiting = !0);
    }, [_]);
  return [_, _, _, _];
}
function _(_, _) {
  return {
    base: _,
    enterStart: _.Enter,
    enterEnd: _.EnterActive,
    exitStart: _.Exit,
    exitEnd: _.ExitActive,
  };
}
function _(_, _) {
  return _ == 1
    ? _.Left
    : _ == 2
      ? _.Right
      : _ == 3
        ? _._
        : _ == 4
          ? _.Down
          : "";
}
var _ = {
  narrowWidth: "500px",
  "duration-app-launch": "800ms",
  PagedSettingsDialog: "Syc5CEejpCs-",
  PagedSettingsDialog_PageContent: "spl7ARNTMuI-",
  NoPadding: "JE-edA2AHZU-",
  PagedSettingsDialog_PageListColumn: "_7w8xPpmaJYI-",
  PagedSettingsDialog_Title: "IkEy5ScXPLA-",
  PagedSettingsDialog_PageList: "_05n8dH6yzlk-",
  PagedSettingsDialog_PageList_DisableScrolling: "kCFp7ufol-Q-",
  PagedSettingsDialog_PageList_ShowTitle: "_6MMl04DZdyk-",
  PageSettingsDialog_PageList_NoHeaderPadding: "B77h1ty4tmw-",
  PagedSettingsDialog_PageListItem: "meSl50NBW8s-",
  DisabledItem: "CIL35Lmv31Y-",
  Active: "_7HVRI1bmcvY-",
  "ItemFocusAnim-darkerGrey": "vn2pzERIjAA-",
  "ItemFocusAnim-darkGrey": "_3-IWLVbzoio-",
  PageListItem_Icon: "yzO7X4cm1OE-",
  PageListItem_Title: "TVggJx59aXM-",
  Separator: "ALQx3i1U-SY-",
  PagedSettingDialog_ContentColumn: "dC8z7R4w4eU-",
  _: "pO-epRkhPx8-",
  ContentTransition: "UWiPLueCfHo-",
  Enter: "KB1G8hQC1Z0-",
  EnterActive: "_8NY5W7Wocgo-",
  Exit: "lwgKtPYHcKg-",
  ExitActive: "RI6Chi7gF-s-",
  Down: "U7gwOwC0auU-",
  BackgroundAnimation: "ELqxp2DLKF8-",
  "ItemFocusAnim-darkerGrey-nocolor": "o0VXPmdxuUc-",
  "ItemFocusAnim-grey": "_7kx878X5F4U-",
  "ItemFocusAnim-translucent-white-10": "_47U-YjIajBc-",
  "ItemFocusAnim-translucent-white-20": "T7MuEoxoS4g-",
  "ItemFocusAnimBorder-darkGrey": "rEWG7AndCQc-",
  "ItemFocusAnim-green": "FMEBbK-Sl-8-",
  focusAnimation: "_08jd-D3p5XU-",
  hoverAnimation: "P1X-i3YFXCU-",
};
var _ = _(_()),
  _ = _.createContext(null);
function _(_) {
  let _ = _.useContext(_),
    _ = _().IN_VR,
    { title: _, icon: _, active: _, ..._ } = _;
  return (0, _.jsxs)(_, {
    preferredFocus: _,
    navRef: _ && _ ? _ : void 0,
    noFocusRing: !0,
    onActivate: _ ? void 0 : _.onClick,
    onFocus: _ ? void 0 : _.onClick,
    ..._,
    children: [
      _ &&
        (0, _.jsx)("div", {
          className: _.PageListItem_Icon,
          children: _,
        }),
      (0, _.jsx)("div", {
        className: _.PageListItem_Title,
        children: _,
      }),
    ],
  });
}
function _(_) {
  let { bTransparent: _, className: _, ..._ } = _;
  return (0, _.jsx)("div", {
    className: _(_, _.Separator),
    ..._,
  });
}
var _ = _.forwardRef(function (_, _) {
  let { page: _, bAutoFocusPageContent: _, showTitle: _ = !1 } = _,
    _ = _.useRef(null),
    _ = _.useRef(!0);
  _.useEffect(() => {
    (!_.current || !_) && _.current?.TakeFocus(), (_.current = !1);
  }, [_, _]);
  let _ = (_, _, _) =>
    (0, _.jsx)(_, {
      pages: _.pages,
      activePage: _,
      refForPage: _,
      PageComponent: _,
    });
  return (0, _.jsx)(_.Provider, {
    value: _,
    children: (0, _.jsx)(_, {
      ..._,
      stylesheet: _,
      showTitle: _,
      PageListItemComponent: _,
      PageListSeparatorComponent: _,
      renderPageContent: _.renderPageContent || _,
    }),
  });
});
function _(_) {
  let { pages: _, activePage: _, refForPage: _, PageComponent: _ } = _,
    _ = _.useMemo(() => _.findIndex((_) => _ == _), [_, _]),
    _ = _(_),
    _ = _(_?.identifier, _),
    _ = _(_, _);
  return (0, _.jsx)(_, {
    childrenKey: _?.identifier,
    childrenClasses: _(_, _.ContentTransition),
    directionClass: _,
    animate: _ != 0,
    children:
      _ &&
      (0, _.jsx)(
        _,
        {
          ref: _(_.identifier),
          stylesheet: _,
          activePage: _,
        },
        _.identifier,
      ),
  });
}
function _(_) {
  let _ = _.useRef(_),
    _ = _.useRef(0),
    _ = _.current;
  if (_ == _) return _.current;
  let _ = 0;
  return (
    _ < _ ? (_ = 4) : _ > _ && (_ = 3), (_.current = _), (_.current = _), _
  );
}
function _(_, _) {
  let _ = _.useMemo(() => new Map(), []),
    _ = _.useRef(_);
  _.current = _;
  let _ = _.useRef(_);
  _.current = _;
  let _ = _.useCallback(
    (_) => (_) => {
      _.set(_, _), _ === _.current && _(_.current, _);
    },
    [_],
  );
  return (
    _.useEffect(() => (_(_, _ && _.get(_)), () => _(_, void 0)), [_, _, _]), _
  );
}
var _ = _(_());
var _ = _(_());
var _ = {
  "duration-app-launch": "800ms",
  DropDownControlButton: "SN62O1Nd2Uc-",
};
var _ = _(_());
function _(_, _) {
  for (let _ of _.options)
    if ((_(_) && _.data === _) || (_(_) && _(_, _))) return !0;
  return !1;
}
function _(_) {
  let _ = (_) =>
    _?.map((_, _) =>
      _(_)
        ? (0, _.jsx)(_, {}, _)
        : _(_)
          ? (0, _.jsx)(
              _,
              {
                role: "option",
                onSelected: (_) => _.onValueSelected && _.onValueSelected(_, _),
                selected: _.selectedValue === _.data,
                children: (0, _.jsx)(_.Fragment, {
                  children: _.label,
                }),
              },
              _,
            )
          : _(_)
            ? (0, _.jsx)(
                _,
                {
                  label: _.label,
                  selectedWithin: _(_, _.selectedValue),
                  children: _(_.options),
                },
                _,
              )
            : null,
    );
  return (0, _.jsx)(_, {
    onCancel: _.onCancel,
    role: "listbox",
    children: _(_.rgOptions),
  });
}
var _ = _.forwardRef(function (_, _) {
  let {
      className: _,
      opened: _,
      arrowClassName: _,
      "aria-label": _,
      "aria-labelledby": _ = "",
      ..._
    } = _,
    _ = _.useId(),
    _ = _.useId();
  return (0, _.jsxs)(_.Fragment, {
    children: [
      (0, _.jsx)(_, {
        _: _,
        className: _(_.DropDownControlButton, _),
        "aria-labelledby": _ || _,
        ..._,
        ref: _,
        children: (0, _.jsxs)("div", {
          className: _.DropDownControlButtonContents,
          children: [
            (0, _.jsx)("div", {
              className: "DialogDropDown_CurrentDisplay",
              children: _.children,
            }),
            (0, _.jsx)(_, {
              direction: "down",
            }),
          ],
        }),
      }),
      _ &&
        (0, _.jsx)("div", {
          _: _,
          style: {
            display: "none",
          },
          children: _,
        }),
    ],
  });
});
var _ = _(_());
var _ = "TW2ZQnLvgIc-";
var _ = _(_()),
  _ = _.forwardRef(function (_, _) {
    let { className: _, ..._ } = _,
      _ = _.useRef(void 0),
      _ = _(_, _),
      [_, _] = _.useState(!1),
      _ = _.useCallback(() => {
        _((_) => !_), window.setTimeout(() => _.current?.Focus(), 1);
      }, []);
    return (0, _.jsx)(_, {
      className: _,
      onOptionsButton: _,
      onOptionsActionDescription: _(
        _ ? "#Login_HidePassword" : "#Login_ShowPassword",
      ),
      children: (0, _.jsx)(_, {
        autoComplete: "off",
        ref: _,
        inlineControls: (0, _.jsx)(_, {
          "aria-label": _(_ ? "#Login_HidePassword" : "#Login_ShowPassword"),
          className: _,
          onPointerDown: _,
          onOKButton: _,
          children: _ ? (0, _.jsx)(_, {}) : (0, _.jsx)(_, {}),
        }),
        ..._,
        type: _ ? "text" : "password",
      }),
    });
  }),
  _ = _.forwardRef(function (_, _) {
    let {
        label: _,
        className: _,
        description: _,
        icon: _,
        bottomSeparator: _,
        highlightOnFocus: _,
        ..._
      } = _,
      _ = _.useId();
    return (0, _.jsx)(_, {
      accessibilityId: _,
      className: _,
      label: _,
      description: _,
      icon: _,
      bottomSeparator: _,
      highlightOnFocus: _,
      childrenContainerWidth: "fixed",
      children: (0, _.jsx)(_, {
        ..._(_, _),
        ..._,
        ref: _,
      }),
    });
  });
function _(_) {
  let _ = _.split(".");
  if (_.length > 4) return !1;
  for (let _ = 0; _ < _.length; _++) {
    let _ = _[_];
    if (_ == "") {
      if (_ == _.length - 1) continue;
      return !1;
    }
    if (!/^[0-9]*$/.test(_)) return !1;
    let _ = parseInt(_);
    if (!(_ >= 0 && _ <= 255)) return !1;
  }
  return !0;
}
var _ = _.forwardRef(function (_, _) {
  let { className: _, value: _, ..._ } = _,
    _ = _ ?? "";
  return (0, _.jsx)(_, {
    autoComplete: "off",
    value: _,
    ref: _,
    placeholder: "   .   .   .   ",
    ..._,
    onChange: (_) => {
      let _ = _.target.value;
      if (_(_)) _.onChange && _.onChange(_);
      else {
        _.target.value = _;
        return;
      }
    },
  });
});
var _ = _(_());
var _ = {
  "duration-app-launch": "800ms",
  "error-shake-duration": "500ms",
  SliderControlPanelGroup: "S4m6S4lbgWU-",
  SliderControlAndNotches: "TSGeP5nQ2eE-",
  WithDefaultValue: "bMn8P19ST3I-",
  SliderControl: "-sSi0mqDQEc-",
  Disabled: "gX0ZSjUXBoI-",
  SliderTrack: "JcZPqsmZCrs-",
  SliderHasNotches: "_99yc6l0bUM8-",
  DefaultValueIsColorRange: "R2grr9aqjqU-",
  DefaultValueColorLeft: "_-6vA11qHT8w-",
  DefaultValueColorRight: "m8UQ6Eo-HTQ-",
  ForegroundInvisible: "roOa1TV2NUU-",
  SliderTrackDark: "OfeMaDvhS4M-",
  SliderHandleContainer: "gEzroWiQ10A-",
  VerticalLineSliderHandleContainer: "_3ppdnVE1H3A-",
  ParenSliderHandleContainer: "_1Iz6XvWonug-",
  SliderHandle: "aTE6aUB0R0c-",
  SliderHandleFocusPop: "SknjTtzI4lo-",
  VerticalLineSliderHandle: "Bo42-AtikgY-",
  ParenSliderHandle: "_9YeVS-YAFPA-",
  Left: "FXMelMR3PWk-",
  Icon: "cqcpHpjo8zI-",
  SliderNotchContainer: "PUlK4jhI1LI-",
  SliderNotch: "egqaF5PBrnM-",
  AlignToEnds: "M9-w5yPyef8-",
  SliderNotchLabel: "VxQ-bQawiuo-",
  AlignToLeft: "_3gVMVUrVouE-",
  AlignToRight: "V-7czEj9CP8-",
  SliderNotchTick: "e84hOS74IEE-",
  TickActive: "Q-OxmMuerTg-",
  LabelText: "G7nK2YgP-s0-",
  DescriptionValue: "_9DahJpVzGWQ-",
  EditableValue: "hDOGbd8g268-",
  FakeEditableValue: "CDypuWjk2cI-",
  RedBorder: "CXJDXvghByw-",
  ErrorShake: "u7OFkUkvl4Q-",
  "error-shake": "pDBWpRO7L-A-",
  CompoundSlider: "pkpACrKtYxg-",
  CompoundSliderSubSlider: "bVo2ux2WBZg-",
  Right: "eAR6MDPFR6A-",
  CompoundSliderSubSliderLabelContainer: "-Kf-ENxw6Fc-",
  CompoundSliderSubSliderLabelPositioner: "SHWtMAO6Ovs-",
  CompoundSliderSubSliderLabel: "_7d0MjH6VujQ-",
  CompoundSliderSubSliderLabelInternal: "p5Dnr3ULfG8-",
  DefaultValueTickContainer: "_-6ZxRWNF2co-",
  DefaultValueTick: "OGdq5YYrCEk-",
  BackgroundAnimation: "rZZpaXvr8xw-",
  "ItemFocusAnim-darkerGrey-nocolor": "F1Gvr3xtsjQ-",
  "ItemFocusAnim-darkerGrey": "aiPJtdOz5TQ-",
  "ItemFocusAnim-darkGrey": "tDpKQmHutBk-",
  "ItemFocusAnim-grey": "ADELUD39uD4-",
  "ItemFocusAnim-translucent-white-10": "_0Mx6icQvg2A-",
  "ItemFocusAnim-translucent-white-20": "jax3iKWCNi4-",
  "ItemFocusAnimBorder-darkGrey": "kIPtFrURqQk-",
  "ItemFocusAnim-green": "nHBdcYV-iW0-",
};
var _ = _(_()),
  _ = 10,
  _ = 1,
  _ = !0,
  _ = 0.01,
  _ = 0.05,
  _ = _(_["error-shake-duration"]);
function _(_, _) {
  return _ < 0 ? 0 : _ > 1 ? 1 : _ == 0 ? _ : Math.round(_ / _) * _;
}
function _(_, _, _) {
  let _ = _ + _ * (_ - _);
  return Number.parseFloat(_.toFixed(10));
}
function _(_, _, _) {
  return (_ - _) / (_ - _);
}
var _ = class extends _.Component {
  m_refSlider = _.createRef();
  m_refHandle = _.createRef();
  m_navRefSlider = _.createRef();
  m_sliderBounds = void 0;
  m_handleBounds = void 0;
  m_fZoom = 1;
  m_eDragMode = 0;
  m_vTouchStartPosition = _();
  m_fStartValue;
  m_fLatestUserValue;
  m_fLatestOnChangeValue;
  m_bInnerSliderHasFocus = !1;
  m_nRepeatCount = 0;
  m_fInitalRepeatTime = void 0;
  get showHandle() {
    return this.props.showHandle ?? !0;
  }
  get isKeyNavTarget() {
    return this.props.isKeyNavTarget ?? !0;
  }
  get validRange() {
    return this.props.min < this.props.max;
  }
  get range() {
    return this.validRange ? this.props.max - this.props.min : 0;
  }
  get step() {
    return Math.abs(this.props.step ?? _);
  }
  get stepSound() {
    return this.props.stepSound ?? _;
  }
  get normalizedStep() {
    return this.step / this.range;
  }
  get normalizedDpadStep() {
    let _ = this.props.dpadStep ?? this.step,
      _ = _ > 0 ? _ / this.range : _;
    return Math.max(_, this.normalizedStep);
  }
  get normalizedClampedValue() {
    let _ =
      this.props.value == null || isNaN(this.props.value)
        ? this.props.min
        : _(this.props.value, this.props.min, this.props.max);
    return _(this.props.min, this.props.max, _);
  }
  get normalizedDefaultValue() {
    let _ = this.props.resetValue;
    if (!(_ == null || isNaN(_) || _ < this.props.min || _ > this.props.max))
      return _(this.props.min, this.props.max, _);
  }
  get normalizedSliderOrigin() {
    let _ = _(0, this.props.min, this.props.max);
    return _(this.props.min, this.props.max, _);
  }
  get CanResetToDefault() {
    return (
      this.props.resetValue != null && this.props.value != this.props.resetValue
    );
  }
  get SliderChangeSource() {
    switch (this.m_eDragMode) {
      case 1:
        return 1;
      case 3:
      case 2:
        return 0;
      case 0:
        return;
    }
  }
  constructor(_) {
    super(_),
      (this.m_fStartValue = this.props.value),
      (this.m_fLatestUserValue = this.props.value),
      (this.m_fLatestOnChangeValue = this.props.value);
  }
  RecomputeSliderBounds() {
    (this.m_sliderBounds = this.m_refSlider.current?.getBoundingClientRect()),
      (this.m_handleBounds = this.m_refHandle.current?.getBoundingClientRect());
  }
  SetDragMode(_) {
    if (_ != this.m_eDragMode) {
      switch (
        ((this.m_eDragMode = _),
        this.props.onChangeStart &&
          this.props.onChangeStart(this.SliderChangeSource),
        _)
      ) {
        case 1:
        case 3:
        case 2:
          this.RecomputeSliderBounds(),
            (this.m_fStartValue = this.props.value),
            (this.m_fLatestUserValue = this.props.value);
          break;
        case 0:
          break;
      }
      switch (_) {
        case 1:
          this.m_refSlider.current?.ownerDocument?.addEventListener(
            "mousemove",
            this.OnWindowMouseMove,
            {
              passive: !1,
            },
          ),
            this.m_refSlider.current?.ownerDocument?.addEventListener(
              "mouseup",
              this.OnWindowMouseUp,
              {
                passive: !1,
              },
            );
          break;
        case 2:
        case 3:
          this.m_refSlider.current?.ownerDocument?.addEventListener(
            "touchmove",
            this.OnWindowTouchMove,
            {
              passive: !1,
            },
          ),
            this.m_refSlider.current?.ownerDocument?.addEventListener(
              "touchend",
              this.OnWindowTouchEnd,
              {
                passive: !1,
              },
            );
          break;
        case 0:
          this.RemoveDocumentEventListeners();
          break;
      }
    }
  }
  OnGamepadDirection(_) {
    if (this.props.disabled) return !1;
    let _ = 0;
    if (_.detail.button == 11) _ = -1;
    else if (_.detail.button == 12) _ = 1;
    else return !1;
    _.detail.is_repeat
      ? (this.m_nRepeatCount == 0 &&
          (this.m_fInitalRepeatTime = performance.now()),
        this.m_nRepeatCount++)
      : ((this.m_nRepeatCount = 0),
        (this.m_fInitalRepeatTime = performance.now()));
    let _ = performance.now() - this.m_fInitalRepeatTime,
      _ = _(_, 0, 2e3, 500, 250),
      _ = Math.pow(2, Math.floor(_ / _)),
      _ = this.normalizedDpadStep * _,
      _ = _(_, this.normalizedDpadStep, _) * _,
      _ = _(this.normalizedStep, this.normalizedClampedValue + _),
      _ = _(this.props.min, this.props.max, _);
    if (
      ((_ = _(
        _,
        this.props.clampMin ?? this.props.min,
        this.props.clampMax ?? this.props.max,
      )),
      _ != this.props.value)
    ) {
      let _ = _ > this.m_fLatestUserValue;
      _.PlayNavSound(_ ? 18 : 19),
        (this.m_fLatestUserValue = _),
        this.FireOnChange(_, 2);
    } else _.PlayNavSound(25);
    return !0;
  }
  FireOnChange(_, _) {
    this.m_fLatestOnChangeValue != _ &&
      ((this.m_fLatestOnChangeValue = _),
      this.props.onChange && this.props.onChange(_, _));
  }
  ComputeNormalizedValueForMousePosition(_) {
    if (this.m_sliderBounds == null) return 0;
    let _ = _ / this.m_fZoom,
      _ = this.m_sliderBounds.right - this.m_sliderBounds.left,
      _ =
        this.m_handleBounds == null
          ? 0
          : this.m_handleBounds.right - this.m_handleBounds.left,
      _ = _ - _,
      _ = (_ - this.m_sliderBounds.left - _ / 2) / _;
    return this.m_refSlider.current?.matches(":dir(rtl)") ? 1 - _ : _;
  }
  BShouldTriggerHapticOnSnap() {
    let _ = this.normalizedStep;
    return _ > 0 && _ >= 1 / 40;
  }
  PlayHaptic(_) {
    this.m_refSlider.current?.ownerDocument.defaultView?.SteamClient?.OpenVR?.TriggerOverlayHapticEffect?.(
      _,
      0,
    );
  }
  UpdateSliderValueForPosition(_) {
    if (this.props.disabled || !this.m_refSlider.current) return;
    let _ = this.ComputeNormalizedValueForMousePosition(_),
      _ = _(this.normalizedStep, _),
      _ = _(this.props.min, this.props.max, _),
      _ = this.props.clampMin ?? this.props.min,
      _ = this.props.clampMax ?? this.props.max;
    if (((_ = _(_, _, _)), _ != this.props.value)) {
      let _ = _ > this.props.value,
        _ = this.step == 0;
      if (
        ((this.m_eDragMode == 0 || !_) &&
          this.props.stepSound &&
          _.PlayNavSound(_ ? 18 : 19),
        this.m_eDragMode == 1 || this.m_eDragMode == 3)
      ) {
        let _ = !1;
        if (
          (_ == _ || _ == _) &&
          this.m_fLatestUserValue > _ &&
          this.m_fLatestUserValue < _ &&
          !_
        )
          this.PlayHaptic(5), (_ = !0);
        else if (
          !this.BShouldTriggerHapticOnSnap() &&
          this.m_fLatestUserValue >= _ &&
          this.m_fLatestUserValue <= _
        ) {
          let _ = Math.floor(((this.m_fLatestUserValue - _) / (_ - _)) * 40),
            _ = Math.floor(((_ - _) / (_ - _)) * 40);
          _ != _ && !_ && (this.PlayHaptic(4), (_ = !0));
        }
        !_ && !_ && (this.PlayHaptic(3), (_ = !0));
      }
      (this.m_fLatestUserValue = _),
        this.FireOnChange(_, this.SliderChangeSource);
    }
  }
  OnWindowMouseMove(_) {
    this.UpdateSliderValueForPosition(_.clientX);
  }
  OnWindowMouseUp(_) {
    this.m_eDragMode != 0 && this.Complete();
  }
  OnMouseDown(_) {
    _.button == 0 &&
      (this.props.disabled ||
        (_.preventDefault(),
        this.SetDragMode(1),
        this.UpdateSliderValueForPosition(_.clientX)));
  }
  OnTouchStart(_) {
    if (this.props.disabled || _.touches.length != 1) return;
    _.preventDefault();
    let _ = this.ComputeNormalizedValueForMousePosition(_.touches[0].clientX);
    _ < 0 ||
      _ > 1 ||
      (this.SetDragMode(2),
      (this.m_vTouchStartPosition = {
        _: _.touches[0].clientX,
        _: _.touches[0].clientY,
      }));
  }
  OnWindowTouchMove(_) {
    if (_.touches.length == 1) {
      switch (this.m_eDragMode) {
        case 2:
          let _ = {
            _: _.touches[0].clientX,
            _: _.touches[0].clientY,
          };
          if (_(this.m_vTouchStartPosition, _) >= _) {
            let _ = _(this.m_vTouchStartPosition, _);
            Math.abs(_._) > Math.abs(_._)
              ? (this.SetDragMode(3), this.m_refSlider.current?.focus())
              : this.SetDragMode(0);
          }
          break;
        case 3:
          this.UpdateSliderValueForPosition(_.touches[0].clientX);
          break;
      }
      _.preventDefault();
    }
  }
  OnWindowTouchEnd(_) {
    this.m_eDragMode != 0 && this.Complete();
  }
  Complete() {
    let _ = this.m_eDragMode != 0;
    this.FireOnChange(this.m_fLatestUserValue, this.SliderChangeSource),
      this.props.onChangeComplete &&
        this.props.onChangeComplete(
          this.m_fLatestUserValue,
          this.SliderChangeSource,
        ),
      this.SetDragMode(0);
    let _ = this.step == 0;
    if (
      this.m_fLatestUserValue != this.m_fStartValue &&
      (_ || !this.props.stepSound) &&
      _
    ) {
      let _ = this.m_fLatestUserValue > this.m_fStartValue;
      _.PlayNavSound(_ ? 18 : 19);
    }
  }
  RemoveDocumentEventListeners() {
    this.m_refSlider.current?.ownerDocument?.removeEventListener(
      "mousemove",
      this.OnWindowMouseMove,
    ),
      this.m_refSlider.current?.ownerDocument?.removeEventListener(
        "touchmove",
        this.OnWindowTouchMove,
      ),
      this.m_refSlider.current?.ownerDocument?.removeEventListener(
        "mouseup",
        this.OnWindowMouseUp,
      ),
      this.m_refSlider.current?.ownerDocument?.removeEventListener(
        "touchend",
        this.OnWindowTouchEnd,
      );
  }
  componentDidMount() {
    this.m_fZoom = _(this.m_refSlider.current);
  }
  componentWillUnmount() {
    this.RemoveDocumentEventListeners();
  }
  BlurInnerSlider() {
    this.m_navRefSlider.current?.ParentTakeFocus();
  }
  OnInnerSliderFocus() {
    (this.m_bInnerSliderHasFocus = !0), (this.m_fStartValue = this.props.value);
  }
  OnInnerSliderBlur() {
    (this.m_bInnerSliderHasFocus = !1),
      this.m_fStartValue != this.m_fLatestUserValue && this.Complete();
  }
  ResetToDefault() {
    if (!this.CanResetToDefault || this.m_eDragMode != 0) return;
    let _;
    (this.m_fLatestUserValue = this.props.resetValue),
      this.FireOnChange(this.props.resetValue, 4),
      this.m_bInnerSliderHasFocus
        ? (_ = this.props.resetValue > this.m_fLatestUserValue)
        : ((_ = this.props.resetValue > this.props.value),
          this.props.onChangeComplete &&
            this.props.onChangeComplete(this.props.resetValue, 4)),
      _.PlayNavSound(_ ? 18 : 19);
  }
  OnContextMenu(_) {
    if (this.props.resetValue != null) {
      let _ = (0, _.jsx)(_, {
        children: (0, _.jsx)(_, {
          disabled: !this.CanResetToDefault,
          onSelected: this.ResetToDefault,
          children: _("#ResetToDefault"),
        }),
      });
      _(_, _);
    }
  }
  render() {
    let {
        min: _,
        max: _,
        value: _,
        clampMax: _,
        clampMin: _,
        className: _,
        disabled: _,
        dpadStep: _,
        extraNotchPadding: _,
        focusable: _,
        handleType: _,
        innerRef: _,
        isKeyNavTarget: _,
        navRef: _,
        notchCount: _,
        notchLabels: _,
        notchTicksVisible: _,
        onChange: _,
        onChangeComplete: _,
        onChangeStart: _,
        renderNotch: _,
        renderValue: _,
        resetValue: _,
        resetValueAppearance: _ = "top-caret",
        showBookendLabels: _,
        showHandle: _,
        step: _,
        stepSound: _,
        strValueSuffix: _,
        trackStyleOverride: _,
        trackStyleBackground: _,
        trackForegroundVisible: _ = !0,
        trackTone: _,
        ..._
      } = this.props,
      _ = _ ?? !1,
      _ = _ ?? !_,
      _ = _ ? 2 : _,
      _ = [
        {
          notchIndex: 0,
          label: `${_}`,
        },
        {
          notchIndex: 1,
          label: `${_}`,
        },
      ],
      _ = _ ? _ : _,
      _ = _ ?? !0,
      _ = this.normalizedDefaultValue,
      _ = this.normalizedSliderOrigin,
      _ = _ != null,
      _ = _ == "top-caret",
      _ = !_,
      _ = _ || _,
      _ = {};
    this.CanResetToDefault && (_[3] = _("#ResetToDefault"));
    let _ = `${_.SliderHandle} SliderHandle`,
      _ = `${_.SliderHandleContainer} SliderHandleContainer `;
    _ == "verticalline"
      ? ((_ = `${_.VerticalLineSliderHandle} SliderHandle`),
        (_ = `${_.VerticalLineSliderHandleContainer} SliderHandleContainer `))
      : (_ == "leftparen" || _ == "rightparen") &&
        ((_ = _(
          _.ParenSliderHandle,
          _ == "leftparen" ? _.Left : _.Right,
          "SliderHandle",
        )),
        (_ = _(
          _.ParenSliderHandleContainer,
          _ == "leftparen" ? _.Left : _.Right,
          "SliderHandleContainer",
        )));
    let _ = _(_);
    return (0, _.jsx)(_, {
      noFocusRing: !0,
      className: _(_.SliderControlPanelGroup, "SliderControlPanelGroup", _),
      navRef: _,
      onMouseDown: (_) => this.OnMouseDown(_.nativeEvent),
      onTouchStart: (_) => this.OnTouchStart(_.nativeEvent),
      onOKActionDescription: _ ? null : _("#Slider_AdjustSlider"),
      focusable: _,
      childFocusDisabled: _ || !_,
      onContextMenu: this.OnContextMenu,
      onOKButton: _ ? () => _.PlayNavSound(25) : void 0,
      onSecondaryButton: this.CanResetToDefault ? this.ResetToDefault : void 0,
      onSecondaryActionDescription: this.CanResetToDefault
        ? _("#ResetToDefault")
        : void 0,
      actionDescriptionMap: _,
      "aria-roledescription": _("#Slider_Button"),
      "aria-labelledby": _["aria-labelledby"],
      "aria-label": _["aria-label"],
      children: (0, _.jsxs)(_, {
        role: "slider",
        "aria-valuenow": _,
        "aria-valuetext": _,
        ..._,
        className: _(
          _.SliderControlAndNotches,
          _ && _.Disabled,
          _ && _.WithDefaultValue,
          _ && _ && _.DefaultValueIsColorRange,
          _ && _ && _.side == "left" && _.DefaultValueColorLeft,
          _ && _ && _.side != "left" && _.DefaultValueColorRight,
          !_ && _.ForegroundInvisible,
        ),
        focusable: this.isKeyNavTarget,
        noFocusRing: !0,
        onFocus: this.OnInnerSliderFocus,
        onBlur: this.OnInnerSliderBlur,
        style: {
          "--normalized-slider-value": this.normalizedClampedValue,
          "--normalized-slider-default-value": _,
          "--normalized-slider-origin": _,
          "--default-value-track-color": _ ? _.trackForegroundColor : void 0,
          "--slider-extra-notch-padding": _ ?? "0px",
        },
        ref: _(this.m_refSlider, _),
        navRef: this.m_navRefSlider,
        onGamepadDirection: this.OnGamepadDirection,
        onOKButton: this.BlurInnerSlider,
        onOKActionDescription: null,
        onCancelButton: this.BlurInnerSlider,
        onCancelActionDescription: _("#ActionButtonLabelDone"),
        children: [
          (0, _.jsxs)("div", {
            className: _(_.SliderControl, "SliderControl"),
            children: [
              (0, _.jsx)("div", {
                className: _(
                  _.SliderTrack,
                  _ != null && _ && _.SliderHasNotches,
                  {
                    [_.SliderTrackDark]: _ === "dark",
                  },
                  _,
                  "SliderTrack",
                ),
                style: this.props.trackStyleOverride,
              }),
              _ &&
                _ &&
                (0, _.jsx)("div", {
                  className: _.DefaultValueTickContainer,
                  children: (0, _.jsx)("div", {
                    className: _.DefaultValueTick,
                    children: (0, _.jsx)(_, {
                      direction: "down",
                    }),
                  }),
                }),
              this.validRange &&
                _ != null &&
                !isNaN(_) &&
                this.showHandle &&
                (0, _.jsx)("div", {
                  className: _,
                  children: (0, _.jsxs)("div", {
                    className: _,
                    ref: this.m_refHandle,
                    children: [
                      _ == "leftparen" && (0, _.jsx)(_, {}),
                      _ == "rightparen" && (0, _.jsx)(_, {}),
                    ],
                  }),
                }),
            ],
          }),
          (0, _.jsx)(_, {
            notchCount: _,
            notchLabels: _,
            sliderValue: this.normalizedClampedValue,
            notchTicksVisible: _,
            renderNotch: _,
          }),
        ],
      }),
    });
  }
};
_([_], _.prototype, "RecomputeSliderBounds", 1),
  _([_], _.prototype, "SetDragMode", 1),
  _([_], _.prototype, "OnGamepadDirection", 1),
  _([_], _.prototype, "UpdateSliderValueForPosition", 1),
  _([_], _.prototype, "OnWindowMouseMove", 1),
  _([_], _.prototype, "OnWindowMouseUp", 1),
  _([_], _.prototype, "OnMouseDown", 1),
  _([_], _.prototype, "OnTouchStart", 1),
  _([_], _.prototype, "OnWindowTouchMove", 1),
  _([_], _.prototype, "OnWindowTouchEnd", 1),
  _([_], _.prototype, "Complete", 1),
  _([_], _.prototype, "BlurInnerSlider", 1),
  _([_], _.prototype, "OnInnerSliderFocus", 1),
  _([_], _.prototype, "OnInnerSliderBlur", 1),
  _([_], _.prototype, "ResetToDefault", 1),
  _([_], _.prototype, "OnContextMenu", 1);
function _(_) {
  let {
      sliderValue: _,
      notchCount: _,
      notchLabels: _,
      notchTicksVisible: _,
      renderNotch: _,
    } = _,
    _ = _ ?? [];
  if (!_) return null;
  let _ = !1,
    _ = [];
  for (let _ = 0; _ < _; ++_) {
    let _ = _.find((_) => _.notchIndex == _);
    _ && (_ = !0),
      _.push(
        (0, _.jsx)(
          _,
          {
            notchIndex: _,
            sliderValue: _,
            notchLabel: _,
            notchCount: _,
            notchTicksVisible: _,
            renderNotch: _,
          },
          _,
        ),
      );
  }
  return (0, _.jsx)(_, {
    className: _(_.SliderNotchContainer),
    children: _,
  });
}
function _(_) {
  let _ = _.notchIndex <= (_.notchCount - 1) * _.sliderValue,
    _ = _.notchCount <= 3 && !_.notchTicksVisible,
    _ = _ && _.notchIndex == 0,
    _ = _ && _.notchIndex == _.notchCount - 1,
    _ = {
      ..._,
      alignLeftEnd: _,
      alignRightEnd: _,
      active: _,
    };
  return (0, _.jsx)("div", {
    className: _(_.SliderNotch, _ && _.AlignToEnds),
    children: _.renderNotch
      ? _.renderNotch(_)
      : (0, _.jsx)(_, {
          ..._,
        }),
  });
}
function _(_) {
  let { alignLeftEnd: _, alignRightEnd: _, active: _ } = _;
  return (0, _.jsxs)(_.Fragment, {
    children: [
      _.notchTicksVisible &&
        (0, _.jsx)("div", {
          className: _(_.SliderNotchTick, _ && _.TickActive),
        }),
      _.notchLabel &&
        (0, _.jsx)("div", {
          className: _(
            _.SliderNotchLabel,
            _ && _.AlignToLeft,
            _ && _.AlignToRight,
          ),
          children: _.notchLabel?.label,
        }),
    ],
  });
}
var _ = _.forwardRef(function (_, _) {
  let {
    label: _,
    labelIndex: _,
    xOffset: _,
    onResize: _,
    OnMouseDown: _,
    OnTouchStart: _,
  } = _;
  _.useEffect(() => {
    _(_);
  }, [_, _]);
  let _ = _.useCallback(
      (_) => {
        _(_);
      },
      [_, _],
    ),
    _ = _(_),
    _ = _(_, _);
  return (0, _.jsx)("div", {
    className: _.CompoundSliderSubSliderLabel,
    ref: _,
    onMouseDown: _,
    onTouchStart: _,
    style: {
      transform: `translateX(${_}px)`,
    },
    children: (0, _.jsx)("div", {
      className: _.CompoundSliderSubSliderLabelInternal,
      children: _,
    }),
  });
});
var _ = _(_());
var _ = _(_()),
  _ = _.forwardRef(function (_, _) {
    let {
        value: _,
        onChange: _,
        disabled: _,
        className: _,
        focusable: _,
        children: _,
        navRef: _,
        ..._
      } = _,
      _ = () => {
        if (!_ && _) {
          let _ = !_;
          _(_), _.PlayNavSound(_ ? 16 : 17);
        }
      };
    return (0, _.jsxs)(_, {
      ..._,
      noFocusRing: !0,
      className: _(_, _.Toggle, {
        [_.Disabled]: !!_,
        [_._]: !!_,
      }),
      onClick: _,
      ref: _,
      navRef: _,
      focusable: _,
      role: "checkbox",
      "aria-checked": !!_,
      children: [
        (0, _.jsx)("div", {
          className: _.ToggleRail,
        }),
        (0, _.jsx)("div", {
          className: _.ToggleSwitch,
        }),
        _,
      ],
    });
  });
function _(_) {
  let _ = !!_.disabled,
    { actionDescriptions: _, gamepadEvents: _ } = _(_),
    _ = _.useId(),
    { "aria-expanded": _, "aria-controls": _ } = _;
  return (0, _.jsx)(_, {
    accessibilityId: _,
    className: _.className,
    disabled: _,
    label: _.label,
    icon: _.icon,
    description: _.description,
    explainer: _.explainer,
    explainerTitle: _.explainerTitle,
    padding: _.padding,
    bottomSeparator: _.bottomSeparator,
    highlightOnFocus: _.highlightOnFocus,
    inlineWrap: "keep-inline",
    onContextMenu: _.onContextMenu,
    actionDescriptionMap: _,
    onClick: _.onClick,
    indentLevel: _.indentLevel,
    ..._,
    children: (0, _.jsx)(_, {
      "aria-expanded": _,
      "aria-controls": _,
      ..._(_, _),
      onChange: _.OnToggleChange,
      value: _.checked,
      disabled: _,
      navRef: _.navRef,
    }),
  });
}
var _ = class extends _ {
  OnToggleChange(_) {
    !this.props.disabled && _ !== this.checked && this.Toggle();
  }
  render() {
    return (0, _.jsx)(_, {
      ...this.props,
      OnToggleChange: this.OnToggleChange,
      checked: this.checked,
    });
  }
};
_([_], _.prototype, "OnToggleChange", 1);
var _ = _(_());
function _(_) {
  let { children: _, bCenterVertically: _, refElem: _, ..._ } = _,
    _ = _(
      _.GamepadDialogContent,
      "DialogContent _DialogLayout",
      _.className,
      _ && " _DialogCenterVertically",
    ),
    { ref: _, navRef: _ } = _(),
    _ = _(_, _);
  return (0, _.jsx)(_, {
    ..._,
    className: _,
    ref: _,
    navRef: _,
    children: (0, _.jsx)(_, {
      className: _(
        _.GamepadDialogContent_InnerWidth,
        "DialogContent_InnerWidth",
      ),
      children: _,
    }),
  });
}
var _ = _(_());
var _ = _(_());
function _() {
  return _.useMemo(() => _(), []);
}
function _() {
  return function (_) {
    let {
        refNavTree: _,
        className: _,
        active: _,
        children: _,
        modalKey: _,
      } = _,
      _ = _.useRef(void 0);
    _(_, _, !0);
    let _ = _(_, _);
    return (0, _.jsx)(_, {
      className: _,
      navTreeRef: _,
      modal: !0,
      enabled: _,
      navID: `ModalDialogOverlay_${_}`,
      children: _,
    });
  };
}
function _(_) {
  let {
      className: _,
      onEscKeypress: _,
      padding: _ = "standard",
      bGamepadUIScrollWithin: _,
      children: _,
    } = _,
    _ = _(
      _.ModalPosition,
      _ == "standard" && _.WithStandardPadding,
      _ && _.ScrollWithin,
      _,
    );
  return (0, _.jsx)(_, {
    className: _,
    onCancelButton: _,
    focusableIfEmpty: !0,
    children: (0, _.jsx)(_, {
      children: (0, _.jsx)(_, {
        children: _,
      }),
    }),
  });
}
function _(_) {
  let _ = _.useMemo(
    () => ({
      ModalPosition: _,
    }),
    [],
  );
  return (0, _.jsx)(_.Provider, {
    value: _,
    children: _.children,
  });
}
var _ = _(_());
function _(_) {
  let _ = _(),
    _ = _.useMemo(
      () => ({
        DropDownMenu: _,
        Content: _,
      }),
      [],
    );
  return (0, _.jsx)(_.Provider, {
    value: _,
    children: (0, _.jsx)(_, {
      children: (0, _.jsx)(_, {
        ..._,
        bUseDialogElement: !1,
        DialogWrapper: _,
        ContextMenuComponent: _,
      }),
    }),
  });
}
var _ = _(_());
function _(_) {
  let _ = _(),
    _ = {
      bRenderOverlayAtRoot: !0,
      bUsePopups: !1,
      ..._,
    };
  return _
    ? (0, _.jsx)(_, {
        ..._,
      })
    : (0, _.jsx)(_, {
        ..._,
      });
}
var _ = _(_(), 1);
var _ = "/RDNVLABA.png";
var _ = "/QQGETVBA.png";
var _ = "/MVIQJMBA.png";
var _ = "/62SHH2CA.png";
var _ = "Ksy4XAVZlM0-";
var _ = "n2wjqqfVgC4-";
var _ = "osYYItlitxA-";
var _ = "knntvUEkLRg-";
var _ = "_1ToiOSH69g8-";
var _ = "s6DTWBl90Rc-";
var _ = "UnRkTYm5fo0-";
var _ = "ftmxCcsknb4-";
var _ = "byvXpNiaYrs-";
var _ = "y9kERlobJ88-";
var _ = "Hf0BSchKz6g-";
var _ = _(_(), 1);
function _() {
  return (0, _.jsx)("span", {
    "aria-hidden": "true",
    className: _,
    children: "|",
  });
}
function _(_) {
  return (0, _.jsx)("footer", {
    className: (0, _.default)(_, _.className, !_.logged_in && _),
    children: (0, _.jsxs)("div", {
      className: _,
      children: [
        (0, _.jsx)("hr", {}),
        (0, _.jsxs)("div", {
          className: _,
          children: [
            (0, _.jsx)(_, {
              className: _,
              _: "https://www.valvesoftware.com",
              openInNewWindow: !0,
              children: (0, _.jsx)("img", {
                src: _(_),
                alt: "Valve Software",
              }),
            }),
            (0, _.jsxs)("div", {
              className: _,
              children: [
                (0, _.jsx)("div", {
                  children: _.Localize(
                    "#footer_legal_notice",
                    new Date().getFullYear(),
                  ),
                }),
                (0, _.jsxs)("div", {
                  children: [
                    _.Localize("#footer_vat_included"),
                    "  ",
                    (0, _.jsx)(_, {
                      openInNewWindow: !0,
                      _: _.STORE_BASE_URL + "privacy_agreement/",
                      children: _.Localize("#footer_privacy_policy"),
                    }),
                    (0, _.jsx)(_, {}),
                    (0, _.jsx)(_, {
                      openInNewWindow: !0,
                      _: _.STORE_BASE_URL + "legal/",
                      children: _.Localize("#footer_legal"),
                    }),
                    (0, _.jsx)(_, {}),
                    (0, _.jsx)(_, {
                      openInNewWindow: !0,
                      _: "https://help.steampowered.com/faqs/view/10BB-D27A-6378-4436",
                      children: _.Localize("#footer_accessibility"),
                    }),
                    (0, _.jsx)(_, {}),
                    (0, _.jsx)(_, {
                      openInNewWindow: !0,
                      _: _.STORE_BASE_URL + "subscriber_agreement/",
                      children: _.Localize("#footer_ssa"),
                    }),
                    (0, _.jsx)(_, {}),
                    (0, _.jsx)(_, {
                      openInNewWindow: !0,
                      _: _.STORE_BASE_URL + "steam_refunds/",
                      children: _.Localize("#footer_refunds"),
                    }),
                    (0, _.jsx)(_, {}),
                    (0, _.jsx)(_, {
                      openInNewWindow: !0,
                      _: _.STORE_BASE_URL + "account/cookiepreferences/",
                      children: _.Localize("#footer_cookies"),
                    }),
                  ],
                }),
              ],
            }),
            (0, _.jsx)("div", {
              className: _,
              children: (0, _.jsx)("img", {
                src: _(_),
                alt: "Valve Software",
              }),
            }),
          ],
        }),
        _() &&
          (0, _.jsx)("div", {
            className: _,
            children: (0, _.jsx)("button", {
              onClick: _,
              children: _.Localize("#global_menu_view_mobile_website"),
            }),
          }),
        (0, _.jsx)("hr", {}),
        (0, _.jsxs)("div", {
          className: _,
          children: [
            (0, _.jsx)(_, {
              openInNewWindow: !0,
              _: "https://www.valvesoftware.com/about",
              children: _.Localize("#footer_about_valve"),
            }),
            (0, _.jsx)(_, {}),
            (0, _.jsx)(_, {
              openInNewWindow: !0,
              _: "http://www.valvesoftware.com",
              children: _.Localize("#footer_jobs"),
            }),
            (0, _.jsx)(_, {}),
            (0, _.jsx)(_, {
              openInNewWindow: !0,
              _: "http://www.steampowered.com/steamworks/",
              children: _.Localize("#footer_steamworks"),
            }),
            (0, _.jsx)(_, {}),
            (0, _.jsx)(_, {
              openInNewWindow: !0,
              _: _.PARTNER_BASE_URL + "steamdirect",
              children: _.Localize("#footer_steam_distribution"),
            }),
            (0, _.jsx)(_, {}),
            (0, _.jsx)(_, {
              external: !0,
              _: _.HELP_BASE_URL + _().strISOCode + "/",
              children: _.Localize("#footer_nav_help_support"),
            }),
            (0, _.jsx)(_, {}),
            _.COUNTRY === "US" &&
              (0, _.jsxs)(_.Fragment, {
                children: [
                  (0, _.jsx)(_, {
                    snr: !0,
                    external: !0,
                    _: _.STORE_BASE_URL + "hardware_recycling/",
                    children: _.Localize("#footer_recycling"),
                  }),
                  (0, _.jsx)(_, {}),
                ],
              }),
            !_(_.EREALM) &&
              (0, _.jsxs)(_.Fragment, {
                children: [
                  (0, _.jsx)(_, {
                    snr: !0,
                    external: !0,
                    _: _.STORE_BASE_URL + "digitalgiftcards/",
                    children: _.Localize("#footer_walletcode"),
                  }),
                  (0, _.jsx)(_, {}),
                  (0, _.jsxs)(_, {
                    openInNewWindow: !0,
                    _: "http://www.facebook.com/Steam",
                    children: [
                      (0, _.jsx)("img", {
                        src: _(_),
                        alt: "Facebook",
                        className: _,
                      }),
                      " Steam",
                    ],
                  }),
                  (0, _.jsx)(_, {}),
                  (0, _.jsxs)(_, {
                    openInNewWindow: !0,
                    _: "http://twitter.com/steam",
                    children: [
                      (0, _.jsx)("img", {
                        src: _(_),
                        alt: "X",
                        className: _,
                      }),
                      " @steam",
                    ],
                  }),
                ],
              }),
          ],
        }),
        _.children,
      ],
    }),
  });
}
export { _, _, _, _, _, _ };
