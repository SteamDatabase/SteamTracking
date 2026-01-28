import { _ } from "./chunk-XXXXXXXX.js";
var _ = {};
_(_, {
  ArrayEquals: () => _,
  ArrayEqualsUnsorted: () => _,
  ArrayWithoutElement: () => _,
  ArrayWithoutFalsyValues: () => _,
  BInsertBeforeElement: () => _,
  CountMatches: () => _,
  DiffArrays: () => _,
  FilterInPlace: () => _,
  FilterNonNull: () => _,
  FilterNonNullOrFalse: () => _,
  FindAndRemove: () => _,
  FindAndRemoveWhere: () => _,
  FindLast: () => _,
  GetNRandomElements: () => _,
  GetRandomElementArray: () => _,
  MoveElement: () => _,
  MoveElementToTail: () => _,
  PadArray: () => _,
  RandomElement: () => _,
  ShallowCompare: () => _,
  ShuffleArray: () => _,
  SortLocaleIndependent: () => _,
  SortedFindLessOrEqual: () => _,
  SortedInsert: () => _,
  ToLookup: () => _,
  Unique: () => _,
  Zip: () => _,
});
function _(_, _, ..._) {
  console.assert
    ? _.length == 0
      ? console.assert(!!_, _)
      : console.assert(!!_, _, ..._)
    : _ || console.warn(_, ..._);
}
function _(_, _, ..._) {
  _(!1, _, ..._);
}
function _(_, _ = 0, _ = Math.random) {
  if (_?.length > 1) {
    let _ = _ > 0 ? Math.min(_, _.length) : _.length;
    for (; _ !== 0; ) {
      let _ = Math.floor(_() * _);
      _ -= 1;
      let _ = _[_];
      (_[_] = _[_]), (_[_] = _);
    }
  }
  return _;
}
function _(_, _ = Math.random) {
  return _[Math.floor(_() * _.length)];
}
function _(_, _, _ = Math.random) {
  let _ = [],
    _ = _;
  for (let _ = 0; _ < _.length && _ > 0; _++)
    _() <= _ / (_.length - _) && (_.push(_[_]), _--);
  return _;
}
function _(_, _) {
  let _ = _.slice();
  return _(_), _.slice(0, _);
}
function _(_, _, _) {
  if (_ >= 0 || _ >= 0) {
    let _ = _.splice(_, 1)[0];
    _ >= _.length ? (_[_] = _) : _.splice(_, 0, _);
  }
  return _;
}
function _(_, _) {
  _(_, _, _.length - 1);
}
function _(_, _) {
  if (!_ && !_) return !0;
  if (!_ || !_ || _.length != _.length) return !1;
  for (let _ = 0; _ < _.length; _++) if (_[_] !== _[_]) return !1;
  return !0;
}
function _(_, _, _) {
  if (!_ && !_) return !0;
  if (!_ || !_ || _.length !== _.length) return !1;
  let _ = _.slice().sort(_),
    _ = _.slice().sort(_);
  for (let _ = 0; _ < _.length; _++) if (_[_] !== _[_]) return !1;
  return !0;
}
function _(_, _) {
  return _(_, (_) => _ == _);
}
function _(_, _) {
  let _ = _.findIndex(_);
  return _ >= 0 ? (_.splice(_, 1), !0) : !1;
}
function _(_, _) {
  return _.reduce((_, _, _, _) => _ + (_(_, _, _) ? 1 : 0), 0);
}
function _(_, _) {
  return _.filter((_) => _ !== _);
}
function _(_) {
  return (_ ?? []).filter(Boolean);
}
function _(_, _) {
  if (_.length != _.length) return !1;
  for (let _ = 0; _ < _.length; _++) if (_[_] != _[_]) return !1;
  return !0;
}
function _(_, _) {
  let _ = 0,
    _ = _.length - 1;
  for (; _ <= _; ) {
    let _ = Math.floor((_ + _) / 2),
      _ = _(_[_]);
    if (_ > 0) _ = _ + 1;
    else if (_ < 0) _ = _ - 1;
    else {
      if (_ == _) return _;
      if (_ == _) return _ > _ && _(_[_ + 1]) < 0 ? _ : _ + 1;
      _ = _;
    }
  }
  return _;
}
function _(_, _, _) {
  let _ = _(_, (_) => _(_, _));
  _.splice(_ + 1, 0, _);
}
function _(_, _) {
  let _ = 0,
    _ = 0;
  for (; _ < _.length; ) {
    let _ = _[_];
    _(_, _, _) && (_[_++] = _), _++;
  }
  return (_.length = _), _;
}
function _(_, _, _) {
  return (
    _ ||
      console.error(
        "array should be defined for us to fill in the missing indexes",
      ),
    _.length < _ ? _.concat(Array(_ - _.length).fill(_)) : _
  );
}
function _(_, _) {
  if (_)
    for (let _ = _.length - 1; _ >= 0; --_) {
      let _ = _[_];
      if (_(_, _, _)) return _;
    }
}
function _(_) {
  return Array.from(new Set(_));
}
function _(_, _, _) {
  let _ = _.findIndex(_);
  return _ >= 0 ? (_.splice(_, 0, _), !0) : !1;
}
function _(_, _) {
  let _ = Math.min(_.length, _.length);
  return Array.from(
    {
      length: _,
    },
    (_, _) => [_[_], _[_]],
  );
}
function _(_, _) {
  return _.reduce((_, _) => (_.set(_(_), _), _), new Map());
}
function _(_, _, _ = !0) {
  return !_ || _.length == 0
    ? _
    : _
      ? _.sort((_, _) => (_ == _ ? 0 : _ ? (_ < _ ? -1 : 1) : _ > _ ? -1 : 1))
      : _.sort((_, _) => {
          let _ = _.toLowerCase(),
            _ = _.toLowerCase();
          return _ == _ ? 0 : _ ? (_ < _ ? -1 : 1) : _ > _ ? -1 : 1;
        });
}
function _(_) {
  return _.filter((_) => _ != null);
}
function _(_) {
  return _.filter((_) => _ != null && _ !== !1);
}
function _(_, _) {
  let _ = new Set(_),
    _ = new Set(_),
    _ = [..._].filter((_) => _.has(_)),
    _ = [..._].filter((_) => !_.has(_)),
    _ = [..._].filter((_) => !_.has(_));
  return {
    intersection: _,
    removed: _,
    added: _,
  };
}
var _ = {};
_(_, {
  GenerateRandomSeed: () => _,
  SeededRandom: () => _,
});
function _(_) {
  return () => (
    (_ = (_ * 1664525 + 1013904223) % 4294967296), (_ >>> 0) / 4294967296
  );
}
function _() {
  return Math.floor(Math.random() * 4294967296);
}
var _ = {};
_(_, {
  GenerateSHA: () => _,
});
async function _(_, _ = "SHA-256") {
  let _;
  typeof _ == "string" ? (_ = _(_)) : (_ = _);
  let _ = await window.crypto.subtle.digest(_, _);
  return _(_);
}
function _(_) {
  return Array.prototype.map
    .call(new Uint8Array(_), (_) => ("00" + _.toString(16)).slice(-2))
    .join("");
}
function _(_) {
  return new TextEncoder().encode(_).buffer;
}
var _ = class extends Error {
  eResult;
  constructor(_, _) {
    super(_ ? `EResult ${_}: ${_}` : `EResult ${_}`), (this.eResult = _);
  }
};
var _ = class {
  m_vecCallbacks = [];
  Register(_) {
    return (
      this.m_vecCallbacks.push(_),
      {
        Unregister: () => {
          _(this.m_vecCallbacks, _);
        },
      }
    );
  }
  Dispatch(..._) {
    for (let _ of Array.from(this.m_vecCallbacks)) _(..._);
  }
  ClearAllCallbacks() {
    this.m_vecCallbacks = [];
  }
  CountRegistered() {
    return this.m_vecCallbacks.length;
  }
  static PromiseFromAny(_) {
    return new Promise((_) => {
      let _ = [],
        _ = () => {
          _.forEach((_) => _.Unregister()), _();
        };
      for (let _ of _) _.push(_.Register(_));
    });
  }
};
function _(_, _) {
  return _.split(_);
}
function _(_) {
  return !!_;
}
var _ = /^(steam|ftp|https?):\/\//;
function _(_) {
  return _.test(_) ? _ : "https://" + _;
}
function _(_) {
  return Object.prototype.toString.call(_) === "[object Object]";
}
function _(_) {
  if (!_(_)) return !1;
  let _ = _.constructor;
  if (typeof _ > "u") return !0;
  let _ = _.prototype;
  return !(!_(_) || !Object.prototype.hasOwnProperty.call(_, "isPrototypeOf"));
}
function _(..._) {
  return JSON.stringify(_, (_, _) => {
    if (_(_)) {
      let _ = {};
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
function _(_, _, _) {
  return {
    get() {
      let _ = _.value.bind(this);
      return (
        Object.prototype.hasOwnProperty.call(this, _) ||
          Object.defineProperty(this, _, {
            value: _,
          }),
        _
      );
    },
  };
}
function _(_) {
  switch (_) {
    case 0:
      return Uint8Array;
    case 1:
      return Int8Array;
    case 2:
      return Uint8ClampedArray;
    case 3:
      return Int16Array;
    case 4:
      return Uint16Array;
    case 5:
      return Int32Array;
    case 6:
      return Uint32Array;
    case 7:
      return Float32Array;
    case 8:
      return Float64Array;
    case 9:
      return Set;
    case 10:
      return Map;
  }
}
function _(_) {
  return JSON.stringify(_, (_, _) =>
    _ instanceof Uint8Array
      ? {
          _: 0,
          _: [..._],
        }
      : _ instanceof Int8Array
        ? {
            _: 1,
            _: [..._],
          }
        : _ instanceof Uint8ClampedArray
          ? {
              _: 2,
              _: [..._],
            }
          : _ instanceof Int16Array
            ? {
                _: 3,
                _: [..._],
              }
            : _ instanceof Uint16Array
              ? {
                  _: 4,
                  _: [..._],
                }
              : _ instanceof Int32Array
                ? {
                    _: 5,
                    _: [..._],
                  }
                : _ instanceof Uint32Array
                  ? {
                      _: 6,
                      _: [..._],
                    }
                  : _ instanceof Float32Array
                    ? {
                        _: 7,
                        _: [..._],
                      }
                    : _ instanceof Float64Array
                      ? {
                          _: 8,
                          _: [..._],
                        }
                      : _ instanceof Set
                        ? {
                            _: 9,
                            _: Array.from(_.values()),
                          }
                        : _ instanceof Map
                          ? {
                              _: 10,
                              _: Array.from(_.entries()),
                            }
                          : _,
  );
}
function _(_) {
  return JSON.parse(_, (_, _) => {
    if (_ && typeof _ == "object" && "_t" in _) {
      let _ = _(_._);
      return _ ? new _(_._) : _;
    }
    return _;
  });
}
export { _, _, _, _, _, _, _, _, _, _, _, _, _, _, _ };
