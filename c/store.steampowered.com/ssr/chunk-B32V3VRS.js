import { _, _ } from "./chunk-XXXXXXXX.js";
import { _, _ } from "./chunk-XXXXXXXX.js";
import { _ } from "./chunk-XXXXXXXX.js";
import { _, _, _, _ } from "./chunk-XXXXXXXX.js";
import { _ } from "./chunk-XXXXXXXX.js";
import { _, _, _, _, _, _, _, _, _, _, _ } from "./chunk-XXXXXXXX.js";
import { _ } from "./chunk-XXXXXXXX.js";
import { _ } from "./chunk-XXXXXXXX.js";
import { _, _, _ } from "./chunk-XXXXXXXX.js";
import { _ } from "./chunk-XXXXXXXX.js";
import { _ } from "./chunk-XXXXXXXX.js";
import { _ } from "./chunk-XXXXXXXX.js";
var _ = _(_());
var _ = _(_(), 1);
var _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.accountid_giftee || _(_._()),
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
              accountid_giftee: {
                _: 1,
                _: _.readInt32,
                _: _.writeInt32,
              },
              gift_message: {
                _: 2,
                _: _,
              },
              time_scheduled_send: {
                _: 3,
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
      return "CartGiftInfo";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.gifteename || _(_._()),
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
              gifteename: {
                _: 1,
                _: _.readString,
                _: _.writeString,
              },
              message: {
                _: 2,
                _: _.readString,
                _: _.writeString,
              },
              sentiment: {
                _: 3,
                _: _.readString,
                _: _.writeString,
              },
              signature: {
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
      return "CartGiftMessage";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.amount_in_cents || _(_._()),
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
              amount_in_cents: {
                _: 1,
                _: _.readInt64String,
                _: _.writeInt64String,
              },
              currency_code: {
                _: 2,
                _: _.readInt32,
                _: _.writeInt32,
              },
              formatted_amount: {
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
      return "CartAmount";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.couponid || _(_._()),
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
              couponid: {
                _: 1,
                _: _.readUint32,
                _: _.writeUint32,
              },
              gidcoupon: {
                _: 2,
                _: _.readUint64String,
                _: _.writeUint64String,
              },
              title: {
                _: 5,
                _: _.readString,
                _: _.writeString,
              },
              coupon_description: {
                _: 6,
                _: _.readString,
                _: _.writeString,
              },
              large_icon_url: {
                _: 7,
                _: _.readString,
                _: _.writeString,
              },
              discount_pct: {
                _: 8,
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
      return "CartCoupon";
    }
  };
var _ = _(_(), 1);
var _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.clanid || _(_._()),
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
                _: _.readUint32,
                _: _.writeUint32,
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
      return "CUserInterface_CuratorData";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.domain || _(_._()),
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
              domain: {
                _: 1,
                _: _.readString,
                _: _.writeString,
              },
              controller: {
                _: 2,
                _: _.readString,
                _: _.writeString,
              },
              method: {
                _: 3,
                _: _.readString,
                _: _.writeString,
              },
              submethod: {
                _: 4,
                _: _.readString,
                _: _.writeString,
              },
              feature: {
                _: 5,
                _: _.readString,
                _: _.writeString,
              },
              depth: {
                _: 6,
                _: _.readUint32,
                _: _.writeUint32,
              },
              countrycode: {
                _: 7,
                _: _.readString,
                _: _.writeString,
              },
              webkey: {
                _: 8,
                _: _.readUint64String,
                _: _.writeUint64String,
              },
              is_client: {
                _: 9,
                _: _.readBool,
                _: _.writeBool,
              },
              curator_data: {
                _: 10,
                _: _,
              },
              is_likely_bot: {
                _: 11,
                _: _.readBool,
                _: _.writeBool,
              },
              is_utm: {
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
      return "CUserInterface_NavData";
    }
  };
var _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.validation_failure || _(_._()),
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
              validation_failure: {
                _: 1,
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
      return "AccountCartValidationDetails";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.is_gift || _(_._()),
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
              is_gift: {
                _: 1,
                _: _.readBool,
                _: _.writeBool,
              },
              is_private: {
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
      return "AccountCartLineItemFlags";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.line_item_id || _(_._()),
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
              line_item_id: {
                _: 1,
                _: _.readUint64String,
                _: _.writeUint64String,
              },
              type: {
                _: 2,
                _: _.readEnum,
                _: _.writeEnum,
              },
              packageid: {
                _: 3,
                _: _.readUint32,
                _: _.writeUint32,
              },
              bundleid: {
                _: 4,
                _: _.readUint32,
                _: _.writeUint32,
              },
              is_valid: {
                _: 8,
                _: _.readBool,
                _: _.writeBool,
              },
              validation_details: {
                _: 9,
                _: _,
              },
              time_added: {
                _: 10,
                _: _.readUint32,
                _: _.writeUint32,
              },
              price_when_added: {
                _: 11,
                _: _,
              },
              gift_info: {
                _: 12,
                _: _,
              },
              flags: {
                _: 13,
                _: _,
              },
              gidcoupon_applied: {
                _: 14,
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
      return "AccountCartLineItem";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.line_items || _(_._()),
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
              line_items: {
                _: 1,
                _: _,
                _: !0,
                _: !0,
              },
              subtotal: {
                _: 2,
                _: _,
              },
              is_valid: {
                _: 3,
                _: _.readBool,
                _: _.writeBool,
              },
              validation_details: {
                _: 4,
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
      return "AccountCartContents";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.user_country || _(_._()),
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
              user_country: {
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
      return "CAccountCart_GetCart_Request";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.cart || _(_._()),
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
              cart: {
                _: 1,
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
      return "CAccountCart_GetCart_Response";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.user_country || _(_._()),
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
              user_country: {
                _: 1,
                _: _.readString,
                _: _.writeString,
              },
              items: {
                _: 2,
                _: _,
                _: !0,
                _: !0,
              },
              navdata: {
                _: 3,
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
      return "CAccountCart_AddItemsToCart_Request";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.packageid || _(_._()),
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
              packageid: {
                _: 1,
                _: _.readUint32,
                _: _.writeUint32,
              },
              bundleid: {
                _: 2,
                _: _.readUint32,
                _: _.writeUint32,
              },
              gift_info: {
                _: 10,
                _: _,
              },
              flags: {
                _: 11,
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
      return "CAccountCart_AddItemsToCart_Request_ItemToAdd";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.line_item_ids || _(_._()),
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
              line_item_ids: {
                _: 1,
                _: !0,
                _: !0,
                _: _.readUint64String,
                pbr: _.readPackedUint64String,
                _: _.writeRepeatedUint64String,
              },
              cart: {
                _: 2,
                _: _,
              },
              replaced_packages: {
                _: 3,
                _: !0,
                _: !0,
                _: _.readUint32,
                pbr: _.readPackedUint32,
                _: _.writeRepeatedUint32,
              },
              existing_billing_agreementid: {
                _: 4,
                _: _.readUint64String,
                _: _.writeUint64String,
              },
              new_billing_agreement_recurring_packageid: {
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
      return "CAccountCart_AddItemsToCart_Response";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.line_item_id || _(_._()),
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
              line_item_id: {
                _: 1,
                _: _.readUint64String,
                _: _.writeUint64String,
              },
              user_country: {
                _: 2,
                _: _.readString,
                _: _.writeString,
              },
              gift_info: {
                _: 10,
                _: _,
              },
              flags: {
                _: 11,
                _: _,
              },
              apply_gidcoupon: {
                _: 12,
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
      return "CAccountCart_ModifyLineItem_Request";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.cart || _(_._()),
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
              cart: {
                _: 1,
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
      return "CAccountCart_ModifyLineItem_Response";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.line_item_id || _(_._()),
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
              line_item_id: {
                _: 1,
                _: _.readUint64String,
                _: _.writeUint64String,
              },
              user_country: {
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
      return "CAccountCart_RemoveItemFromCart_Request";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.cart || _(_._()),
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
              cart: {
                _: 1,
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
      return "CAccountCart_RemoveItemFromCart_Response";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.gidshoppingcart || _(_._()),
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
                _: _.readFixed64String,
                _: _.writeFixed64String,
              },
              user_country: {
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
      return "CAccountCart_MergeShoppingCartContents_Request";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.cart || _(_._()),
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
              cart: {
                _: 1,
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
      return "CAccountCart_MergeShoppingCartContents_Response";
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
      return "CAccountCart_DeleteCart_Request";
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
      return "CAccountCart_DeleteCart_Response";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.language || _(_._()),
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
      return "CAccountCart_GetRelevantCoupons_Request";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.line_items || _(_._()),
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
              line_items: {
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
      return "CAccountCart_GetRelevantCoupons_Response";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.line_item_id || _(_._()),
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
              line_item_id: {
                _: 1,
                _: _.readUint64String,
                _: _.writeUint64String,
              },
              coupons: {
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
      return "CAccountCart_GetRelevantCoupons_Response_LineItemCoupons";
    }
  },
  _;
((_) => {
  function _(_, _) {
    return _.SendMsg("AccountCart.GetCart#1", _(_, _), _, {
      bConstMethod: !0,
      ePrivilege: 1,
    });
  }
  _.GetCart = _;
  function _(_, _) {
    return _.SendMsg("AccountCart.AddItemsToCart#1", _(_, _), _, {
      ePrivilege: 1,
    });
  }
  _.AddItemsToCart = _;
  function _(_, _) {
    return _.SendMsg("AccountCart.ModifyLineItem#1", _(_, _), _, {
      ePrivilege: 1,
    });
  }
  _.ModifyLineItem = _;
  function _(_, _) {
    return _.SendMsg("AccountCart.RemoveItemFromCart#1", _(_, _), _, {
      ePrivilege: 1,
    });
  }
  _.RemoveItemFromCart = _;
  function _(_, _) {
    return _.SendMsg("AccountCart.MergeShoppingCartContents#1", _(_, _), _, {
      ePrivilege: 1,
    });
  }
  _.MergeShoppingCartContents = _;
  function _(_, _) {
    return _.SendMsg("AccountCart.DeleteCart#1", _(_, _), _, {
      ePrivilege: 1,
    });
  }
  _.DeleteCart = _;
  function _(_, _) {
    return _.SendMsg("AccountCart.GetRelevantCoupons#1", _(_, _), _, {
      ePrivilege: 1,
    });
  }
  _.GetRelevantCoupons = _;
})((_ ||= {}));
var _ = _(_());
var _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.context || _(_._()),
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
              context: {
                _: 2,
                _: _,
              },
              data_request: {
                _: 3,
                _: _,
              },
              gift_info: {
                _: 4,
                _: _,
              },
              gidshoppingcart: {
                _: 1,
                _: _.readInt64String,
                _: _.writeInt64String,
              },
              gidreplayoftransid: {
                _: 5,
                _: _.readFixed64String,
                _: _.writeFixed64String,
              },
              for_init_purchase: {
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
      return "CCheckout_ValidateCart_Request";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.cart_items || _(_._()),
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
              cart_items: {
                _: 1,
                _: _,
                _: !0,
                _: !0,
              },
              estimated_totals: {
                _: 5,
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
      return "CCheckout_ValidateCart_Response";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.line_item_id || _(_._()),
        _.Message.initialize(this, _, 0, -1, [15], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        _.sm_m ||
          (_.sm_m = {
            proto: _,
            fields: {
              line_item_id: {
                _: 1,
                _: _.readUint64String,
                _: _.writeUint64String,
              },
              item_id: {
                _: 2,
                _: _,
              },
              store_item: {
                _: 3,
                _: _,
              },
              gift_info: {
                _: 4,
                _: _,
              },
              errors: {
                _: 5,
                _: _,
              },
              warnings: {
                _: 6,
                _: _,
              },
              subtotal: {
                _: 7,
                _: _,
              },
              price_when_added: {
                _: 8,
                _: _,
              },
              original_price: {
                _: 9,
                _: _,
              },
              coupon_applied: {
                _: 10,
                _: _,
              },
              coupon_discount: {
                _: 11,
                _: _,
              },
              can_purchase_as_gift: {
                _: 12,
                _: _.readBool,
                _: _.writeBool,
              },
              restrict_add_additional_to_cart: {
                _: 13,
                _: _.readBool,
                _: _.writeBool,
              },
              quantity: {
                _: 14,
                _: _.readUint32,
                _: _.writeUint32,
              },
              included_packageids: {
                _: 15,
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
      return "CCheckout_ValidateCart_Response_CartItem";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.owned_appids || _(_._()),
        _.Message.initialize(this, _, 0, -1, [1, 2, 11], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        _.sm_m ||
          (_.sm_m = {
            proto: _,
            fields: {
              owned_appids: {
                _: 1,
                _: !0,
                _: !0,
                _: _.readInt32,
                pbr: _.readPackedInt32,
                _: _.writeRepeatedInt32,
              },
              duplicate_appids_in_cart: {
                _: 2,
                _: !0,
                _: !0,
                _: _.readInt32,
                pbr: _.readPackedInt32,
                _: _.writeRepeatedInt32,
              },
              unavailable_in_country: {
                _: 3,
                _: _.readBool,
                _: _.writeBool,
              },
              invalid_coupon: {
                _: 4,
                _: _.readBool,
                _: _.writeBool,
              },
              invalid_coupon_for_item: {
                _: 5,
                _: _.readBool,
                _: _.writeBool,
              },
              coupon_exclusive_promo: {
                _: 6,
                _: _.readBool,
                _: _.writeBool,
              },
              cannot_purchase_as_gift: {
                _: 7,
                _: _.readBool,
                _: _.writeBool,
              },
              invalid_item: {
                _: 8,
                _: _.readBool,
                _: _.writeBool,
              },
              too_many_in_cart: {
                _: 9,
                _: _.readBool,
                _: _.writeBool,
              },
              has_existing_billing_agreement: {
                _: 10,
                _: _.readBool,
                _: _.writeBool,
              },
              missing_must_own_appids: {
                _: 11,
                _: !0,
                _: !0,
                _: _.readInt32,
                pbr: _.readPackedInt32,
                _: _.writeRepeatedInt32,
              },
              adult_content_restricted: {
                _: 12,
                _: _.readBool,
                _: _.writeBool,
              },
              commercial_license_restricted: {
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
      return "CCheckout_ValidateCart_Response_CartItem_Errors";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.owned_appids || _(_._()),
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
              owned_appids: {
                _: 1,
                _: !0,
                _: !0,
                _: _.readInt32,
                pbr: _.readPackedInt32,
                _: _.writeRepeatedInt32,
              },
              owned_appids_extra_copy: {
                _: 2,
                _: !0,
                _: !0,
                _: _.readInt32,
                pbr: _.readPackedInt32,
                _: _.writeRepeatedInt32,
              },
              appids_in_mastersub: {
                _: 3,
                _: _,
                _: !0,
                _: !0,
              },
              price_has_changed: {
                _: 4,
                _: _.readBool,
                _: _.writeBool,
              },
              non_refundable: {
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
      return "CCheckout_ValidateCart_Response_CartItem_Warnings";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.cart_appid || _(_._()),
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
              cart_appid: {
                _: 1,
                _: _.readUint32,
                _: _.writeUint32,
              },
              mastersub_appid: {
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
      return "CCheckout_ValidateCart_Response_CartItem_Warnings_AppInMasterSub";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.subtotal || _(_._()),
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
              subtotal: {
                _: 1,
                _: _,
              },
              wallet_balance: {
                _: 2,
                _: _,
              },
              exceeding_wallet_balance: {
                _: 3,
                _: _,
              },
              remaining_wallet_balance: {
                _: 4,
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
      return "CCheckout_ValidateCart_Response_EstimatedTotals";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.item_ids || _(_._()),
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
              item_ids: {
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
      return "CCheckout_GetFriendOwnershipForGifting_Request";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.ownership_info || _(_._()),
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
              ownership_info: {
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
      return "CCheckout_GetFriendOwnershipForGifting_Response";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.accountid || _(_._()),
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
              accountid: {
                _: 1,
                _: _.readUint32,
                _: _.writeUint32,
              },
              already_owns: {
                _: 2,
                _: _.readBool,
                _: _.writeBool,
              },
              wishes_for: {
                _: 3,
                _: _.readBool,
                _: _.writeBool,
              },
              partial_owns_appids: {
                _: 4,
                _: !0,
                _: !0,
                _: _.readUint32,
                pbr: _.readPackedUint32,
                _: _.writeRepeatedUint32,
              },
              partial_wishes_for: {
                _: 5,
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
      return "CCheckout_GetFriendOwnershipForGifting_Response_FriendOwnership";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.item_id || _(_._()),
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
              item_id: {
                _: 1,
                _: _,
              },
              friend_ownership: {
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
      return "CCheckout_GetFriendOwnershipForGifting_Response_OwnershipInfo";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.item_id || _(_._()),
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
              item_id: {
                _: 1,
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
      return "CCheckout_AddFreeLicense_Request";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.packageids_added || _(_._()),
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
              packageids_added: {
                _: 1,
                _: !0,
                _: !0,
                _: _.readUint32,
                pbr: _.readPackedUint32,
                _: _.writeRepeatedUint32,
              },
              appids_added: {
                _: 2,
                _: !0,
                _: !0,
                _: _.readUint32,
                pbr: _.readPackedUint32,
                _: _.writeRepeatedUint32,
              },
              purchase_result_detail: {
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
      return "CCheckout_AddFreeLicense_Response";
    }
  },
  _;
((_) => {
  function _(_, _) {
    return _.SendMsg("Checkout.ValidateCart#1", _(_, _), _, {
      bConstMethod: !0,
      ePrivilege: 2,
      eWebAPIKeyRequirement: 1,
    });
  }
  _.ValidateCart = _;
  function _(_, _) {
    return _.SendMsg("Checkout.GetFriendOwnershipForGifting#1", _(_, _), _, {
      bConstMethod: !0,
      ePrivilege: 1,
    });
  }
  _.GetFriendOwnershipForGifting = _;
  function _(_, _) {
    return _.SendMsg("Checkout.AddFreeLicense#1", _(_, _), _, {
      ePrivilege: 1,
    });
  }
  _.AddFreeLicense = _;
})((_ ||= {}));
function _(_) {
  return _.type === "account";
}
function _(_) {
  return _.type === "anonymous";
}
function _(_) {
  return _.type === "request";
}
function _(_) {
  return _.type === "replay";
}
function _(_) {
  return _(_) ? _.type : _.gid;
}
function _(_) {
  return ["shopping_cart", _(_), _.accountid];
}
function _(_, _) {
  return _(_)
    ? ["validate_checkout", _(_), _.accountid]
    : ["validate_checkout", _(_), _?.accountid_giftee];
}
function _(_, _) {
  _.invalidateQueries({
    queryKey: ["validate_checkout"],
    exact: !1,
  });
}
function _(_, _) {
  _.invalidateQueries({
    queryKey: _(_),
  }),
    _(_, _);
}
function _(_, _, _) {
  _.setQueryData(_(_), _), _(_, _);
}
var _ = _(_(), 1);
var _ = _(_(), 1);
function _() {
  return _.logged_in
    ? {
        type: "account",
      }
    : {
        type: "anonymous",
        gid: _(_),
      };
}
var _ = _.default.createContext({
  cartID: void 0,
});
function _() {
  return _.default.useContext(_).cartID || _();
}
var _ = "unUserdataVersion";
function _() {
  return Number.parseInt(window.localStorage.getItem(_) || "0");
}
function _(_, _, _) {
  let _ = _(),
    _ = `${_}dynamicstore/userdata/?id=${_}&cc=${_}&origin=${self.origin}`;
  return _ && (_ += `&v=${_}`), _;
}
function _() {
  window.localStorage.setItem(
    _,
    (Number.parseInt(window.localStorage.getItem(_) || "0") + 1).toString(),
  );
}
function _(_, _, _) {
  return {
    queryKey: _(_),
    queryFn: () => _(_, _),
    staleTime: 1800 * 1e3,
    ..._,
  };
}
function _(_) {
  let _ = _(),
    _ = _();
  return _(_(_, _, _));
}
function _(_, _, _) {
  if (_ !== void 0)
    return _
      ? _.line_items.some((_) => _.type == 1 && _.packageid === _)
      : _
        ? _.line_items.some((_) => _.type == 2 && _.bundleid === _)
        : void 0;
}
function _(_) {
  return _({
    select: (_) => _.line_items?.length ?? 0,
    ..._,
  });
}
async function _(_, _, _, _) {
  let _ = new FormData();
  _ &&
    (_.length === 1
      ? _.set("subid", _[0].toString())
      : _.forEach((_) => _.set("subid[]", _.toString()))),
    _ && _.set("bundleid", _.toString()),
    _.set("action", "add_to_cart");
  let _ = await fetch(`${_.STORE_BASE_URL}cart/addtocart`, {
    method: "post",
    body: _,
  });
  if (!_._) throw new Error("Failed to fetch /cart/addtocart");
  let _ = await _.json();
  return [_?.success ? 1 : 2, _?.contents];
}
async function _(_, _, _, _, _, _) {
  return _(
    _,
    _,
    [
      {
        packageid: _,
        bundleid: _,
        bIsGift: _,
      },
    ],
    _,
  );
}
async function _(_, _, _, _) {
  let _ = _.Init(_);
  if (!_ || _.length === 0)
    return (
      console.error("No valid Package or Bundle provided to add to cart"),
      [8, null]
    );
  _.forEach((_) => {
    let _ = _.Body().add_items();
    _.packageid
      ? _.set_packageid(_.packageid)
      : _.bundleid
        ? _.set_bundleid(_.bundleid)
        : console.error(
            "Neither a package nor bundle ID were provided with an item in AddItemsToAccountCart",
          ),
      _.bIsGift && _.flags(!0).set_is_gift(!0);
  }),
    _ && _.Body().set_navdata(_.fromObject(_(_))),
    _.Body().set_user_country(_);
  let _ = await _.AddItemsToCart(_, _);
  return (
    _.BSuccess() ||
      console.warn(`Failed to add item to account cart: ${_.GetEResult()}`),
    [_.GetEResult(), _.Body().toObject()]
  );
}
async function _(_, _) {
  if (_(_)) {
    let _ = _.Init(_);
    _.Body().set_user_country(_.country_code);
    let _ = await _.GetCart(_, _);
    if (!_.BSuccess())
      throw `Error loading AccountCart: ${_.GetErrorMessage()}`;
    return _.Body().toObject()?.cart;
  } else if (_(_)) {
    let _ = _.Init(_);
    _(
      {
        country: _.country_code,
        language: _.LANGUAGE,
      },
      _,
    ),
      _.Body().set_gidreplayoftransid(_.gid);
    let _ = await _.ValidateCart(_, _);
    if (!_.BSuccess()) throw `Error loading ReplayCart: ${_.GetErrorMessage()}`;
    return _(_.Body().toObject());
  } else {
    if (!_.gid) return _(void 0);
    let _ = _.Init(_);
    _.Body().set_gidshoppingcart(_.gid);
    let _ = await _.GetShoppingCartContents(_, _);
    if (!_.BSuccess())
      throw `Error loading Legacy Cart: ${_.GetErrorMessage()}`;
    return _(_.Body().toObject().contents);
  }
}
function _(_) {
  let _ = {
    line_items: [],
  };
  return (
    _?.lineitems?.length &&
      (_.line_items = _.lineitems
        .map((_) => (_.package_item?.gidbundle ? null : _(_)))
        .filter(_)),
    _
  );
}
function _(_) {
  let _ = {
    price_when_added: {},
    flags: {},
  };
  return (
    (_.line_item_id = _.gidlineitem),
    _.bundle_item?.bundleid
      ? ((_.bundleid = _.bundle_item.bundleid), (_.type = 2))
      : _.package_item &&
        ((_.packageid = _.package_item.packageid),
        (_.price_when_added.amount_in_cents =
          _.package_item.costwhenadded?.amount ?? ""),
        (_.price_when_added.currency_code =
          _.package_item.costwhenadded?.currencycode ?? 0),
        (_.type = 1)),
    _
  );
}
function _(_) {
  let _ = {
    subtotal: _.estimated_totals.subtotal,
    line_items: [],
  };
  return (
    (_.line_items = _.cart_items
      ?.map((_) => {
        let _;
        if (_.item_id?.packageid) _ = 1;
        else if (_.item_id?.bundleid) _ = 2;
        else return;
        return {
          line_item_id: _.line_item_id,
          type: _,
          packageid: _.item_id.packageid,
          bundleid: _.item_id.bundleid,
          is_valid: !0,
          price_when_added: _.price_when_added,
          gift_info: _.gift_info,
          flags: {
            is_gift: !!_.gift_info?.accountid_giftee,
          },
          gidcoupon_applied: _.coupon_applied?.gidcoupon,
        };
      })
      .filter(_)),
    _
  );
}
export { _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _ };
