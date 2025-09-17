import { _, _, _ } from "./chunk-XXXXXXXX.js";
import { _, _, _, _, _, _, _, _, _, _ } from "./chunk-XXXXXXXX.js";
import { _, _ } from "./chunk-XXXXXXXX.js";
var _ = _((_, _) => {
  "use strict";
  var _ = (function () {
      function _(_, _) {
        if (typeof _ != "function")
          throw new TypeError(
            "DataLoader must be constructed with a function which accepts " +
              ("Array<key> and returns Promise<Array<value>>, but got: " +
                _ +
                "."),
          );
        (this._batchLoadFn = _),
          (this._maxBatchSize = _(_)),
          (this._batchScheduleFn = _(_)),
          (this._cacheKeyFn = _(_)),
          (this._cacheMap = _(_)),
          (this._batch = null),
          (this.name = _(_));
      }
      var _ = _.prototype;
      return (
        (_.load = function (_) {
          if (_ == null)
            throw new TypeError(
              "The loader.load() function must be called with a value, " +
                ("but got: " + String(_) + "."),
            );
          var _ = _(this),
            _ = this._cacheMap,
            _ = this._cacheKeyFn(_);
          if (_) {
            var _ = _.get(_);
            if (_) {
              var _ = _.cacheHits || (_.cacheHits = []);
              return new Promise(function (_) {
                _.push(function () {
                  _(_);
                });
              });
            }
          }
          _.keys.push(_);
          var _ = new Promise(function (_, _) {
            _.callbacks.push({
              resolve: _,
              reject: _,
            });
          });
          return _ && _.set(_, _), _;
        }),
        (_.loadMany = function (_) {
          if (!_(_))
            throw new TypeError(
              "The loader.loadMany() function must be called with Array<key> " +
                ("but got: " + _ + "."),
            );
          for (var _ = [], _ = 0; _ < _.length; _++)
            _.push(
              this.load(_[_]).catch(function (_) {
                return _;
              }),
            );
          return Promise.all(_);
        }),
        (_.clear = function (_) {
          var _ = this._cacheMap;
          if (_) {
            var _ = this._cacheKeyFn(_);
            _.delete(_);
          }
          return this;
        }),
        (_.clearAll = function () {
          var _ = this._cacheMap;
          return _ && _.clear(), this;
        }),
        (_.prime = function (_, _) {
          var _ = this._cacheMap;
          if (_) {
            var _ = this._cacheKeyFn(_);
            if (_.get(_) === void 0) {
              var _;
              _ instanceof Error
                ? ((_ = Promise.reject(_)), _.catch(function () {}))
                : (_ = Promise.resolve(_)),
                _.set(_, _);
            }
          }
          return this;
        }),
        _
      );
    })(),
    _ =
      typeof process == "object" && typeof process.nextTick == "function"
        ? function (_) {
            _ || (_ = Promise.resolve()),
              _.then(function () {
                process.nextTick(_);
              });
          }
        : typeof setImmediate == "function"
          ? function (_) {
              setImmediate(_);
            }
          : function (_) {
              setTimeout(_);
            },
    _;
  function _(_) {
    var _ = _._batch;
    if (_ !== null && !_.hasDispatched && _.keys.length < _._maxBatchSize)
      return _;
    var _ = {
      hasDispatched: !1,
      keys: [],
      callbacks: [],
    };
    return (
      (_._batch = _),
      _._batchScheduleFn(function () {
        _(_, _);
      }),
      _
    );
  }
  function _(_, _) {
    if (((_.hasDispatched = !0), _.keys.length === 0)) {
      _(_);
      return;
    }
    var _;
    try {
      _ = _._batchLoadFn(_.keys);
    } catch (_) {
      return _(
        _,
        _,
        new TypeError(
          "DataLoader must be constructed with a function which accepts Array<key> and returns Promise<Array<value>>, but the function " +
            ("errored synchronously: " + String(_) + "."),
        ),
      );
    }
    if (!_ || typeof _.then != "function")
      return _(
        _,
        _,
        new TypeError(
          "DataLoader must be constructed with a function which accepts Array<key> and returns Promise<Array<value>>, but the function did " +
            ("not return a Promise: " + String(_) + "."),
        ),
      );
    _.then(function (_) {
      if (!_(_))
        throw new TypeError(
          "DataLoader must be constructed with a function which accepts Array<key> and returns Promise<Array<value>>, but the function did " +
            ("not return a Promise of an Array: " + String(_) + "."),
        );
      if (_.length !== _.keys.length)
        throw new TypeError(
          "DataLoader must be constructed with a function which accepts Array<key> and returns Promise<Array<value>>, but the function did not return a Promise of an Array of the same length as the Array of keys." +
            (`

Keys:
` +
              String(_.keys)) +
            (`

Values:
` +
              String(_)),
        );
      _(_);
      for (var _ = 0; _ < _.callbacks.length; _++) {
        var _ = _[_];
        _ instanceof Error
          ? _.callbacks[_].reject(_)
          : _.callbacks[_].resolve(_);
      }
    }).catch(function (_) {
      _(_, _, _);
    });
  }
  function _(_, _, _) {
    _(_);
    for (var _ = 0; _ < _.keys.length; _++)
      _.clear(_.keys[_]), _.callbacks[_].reject(_);
  }
  function _(_) {
    if (_.cacheHits)
      for (var _ = 0; _ < _.cacheHits.length; _++) _.cacheHits[_]();
  }
  function _(_) {
    var _ = !_ || _.batch !== !1;
    if (!_) return 1;
    var _ = _ && _.maxBatchSize;
    if (_ === void 0) return 1 / 0;
    if (typeof _ != "number" || _ < 1)
      throw new TypeError("maxBatchSize must be a positive number: " + _);
    return _;
  }
  function _(_) {
    var _ = _ && _.batchScheduleFn;
    if (_ === void 0) return _;
    if (typeof _ != "function")
      throw new TypeError("batchScheduleFn must be a function: " + _);
    return _;
  }
  function _(_) {
    var _ = _ && _.cacheKeyFn;
    if (_ === void 0)
      return function (_) {
        return _;
      };
    if (typeof _ != "function")
      throw new TypeError("cacheKeyFn must be a function: " + _);
    return _;
  }
  function _(_) {
    var _ = !_ || _.cache !== !1;
    if (!_) return null;
    var _ = _ && _.cacheMap;
    if (_ === void 0) return new Map();
    if (_ !== null) {
      var _ = ["get", "set", "delete", "clear"],
        _ = _.filter(function (_) {
          return _ && typeof _[_] != "function";
        });
      if (_.length !== 0)
        throw new TypeError("Custom cacheMap missing methods: " + _.join(", "));
    }
    return _;
  }
  function _(_) {
    return _ && _.name ? _.name : null;
  }
  function _(_) {
    return (
      typeof _ == "object" &&
      _ !== null &&
      typeof _.length == "number" &&
      (_.length === 0 ||
        (_.length > 0 && Object.prototype.hasOwnProperty.call(_, _.length - 1)))
    );
  }
  _.exports = _;
});
var _ = _(_());
var _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.getitems_request || _(_._()),
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
              getitems_request: {
                _: 1,
                _: _,
              },
              include_unpublished: {
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
      return "CPartnerStoreBrowse_GetItems_Request";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.ids || _(_._()),
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
              ids: {
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
      return "CPartnerStoreBrowse_GetCountryRestrictions_Request";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.results || _(_._()),
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
              results: {
                _: 1,
                _: _,
                _: !0,
                _: !0,
              },
              no_info: {
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
      return "CPartnerStoreBrowse_GetCountryRestrictions_Response";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype._ || _(_._()),
        _.Message.initialize(this, _, 0, -1, [3, 4], null);
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
                _: _,
              },
              no_restrictions: {
                _: 2,
                _: _.readBool,
                _: _.writeBool,
              },
              allowed_countries: {
                _: 3,
                _: !0,
                _: !0,
                _: _.readString,
                _: _.writeRepeatedString,
              },
              restricted_countries: {
                _: 4,
                _: !0,
                _: !0,
                _: _.readString,
                _: _.writeRepeatedString,
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
      return "CPartnerStoreBrowse_GetCountryRestrictions_Response_CCountryRestrictions";
    }
  },
  _;
((_) => {
  function _(_, _) {
    return _.SendMsg("PartnerStoreBrowse.GetItems#1", _(_, _), _, {
      bConstMethod: !0,
      ePrivilege: 1,
    });
  }
  _.GetItems = _;
  function _(_, _) {
    return _.SendMsg(
      "PartnerStoreBrowse.GetCountryRestrictions#1",
      _(_, _),
      _,
      {
        bConstMethod: !0,
        ePrivilege: 1,
      },
    );
  }
  _.GetCountryRestrictions = _;
})((_ ||= {}));
export { _, _, _ };
