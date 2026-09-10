function _(_, _, _, _, _) {
  return _(
    _,
    ((_, _) => {
      let _ = _[_];
      if (_ === void 0) throw TypeError(_(_));
      return _;
    })(_, _),
    _,
    _,
    _,
  );
}
function _(_, _, _, _, _, _) {
  let _ = _(_, _, _);
  if (_ && _ !== _) throw RangeError(_(_, _, _, _, _));
  return _;
}
function _(_) {
  return _ !== null && /object|function/.test(typeof _);
}
function _(_, _ = Map) {
  let _ = new _();
  return (_, ..._) => {
    if (_.has(_)) return _.get(_);
    let _ = _(_, ..._);
    return _.set(_, _), _;
  };
}
function _(_) {
  return _(
    {
      name: _,
    },
    1,
  );
}
function _(_, _) {
  return _(
    (_) => ({
      value: _,
      configurable: 1,
      writable: !_,
    }),
    _,
  );
}
function _(_) {
  return _(
    (_) => ({
      get: _,
      configurable: 1,
    }),
    _,
  );
}
function _(_) {
  return {
    [Symbol.toStringTag]: {
      value: _,
      configurable: 1,
    },
  };
}
function _(_, _) {
  let _ = {},
    _ = _.length;
  for (let _ of _) _[_[--_]] = _;
  return _;
}
function _(_, _, _) {
  let _ = {};
  for (let _ in _) _[_] = _(_[_], _, _);
  return _;
}
function _(_, _, _) {
  let _ = {};
  for (let _ = 0; _ < _.length; _++) {
    let _ = _[_];
    _[_] = _(_, _, _);
  }
  return _;
}
function _(_, _, _) {
  let _ = {};
  for (let _ = 0; _ < _.length; _++) _[_[_]] = _[_[_]];
  return _;
}
function _(_, _) {
  let _ = Object.create(null);
  for (let _ of _) _[_] = _[_];
  return _;
}
function _(_, _) {
  for (let _ of _) if (_ in _) return 1;
  return 0;
}
function _(_, _, _) {
  for (let _ of _) if (_[_] !== _[_]) return 0;
  return 1;
}
function _(_, _, _) {
  let _ = {
    ..._,
  };
  for (let _ = 0; _ < _; _++) _[_[_]] = 0;
  return _;
}
function _(_, ..._) {
  return (..._) => _(..._, ..._);
}
function _() {}
function _(_) {
  return _[0].toUpperCase() + _.substring(1);
}
function _(_) {
  return _.slice().sort();
}
function _(_, _) {
  return String(_).padStart(_, `0`);
}
function _(_, _) {
  return Math.sign(_ - _);
}
function _(_, _, _) {
  return Math.min(Math.max(_, _), _);
}
function _(_, _) {
  return [Math.floor(_ / _), _(_, _)];
}
function _(_, _) {
  return ((_ % _) + _) % _;
}
function _(_, _) {
  return [_(_, _), _(_, _)];
}
function _(_, _) {
  return Math.trunc(_ / _) || 0;
}
function _(_, _) {
  return _ % _ || 0;
}
function _(_) {
  return Math.abs(_ % 1) === 0.5;
}
function _(_, _, _) {
  let _ = 0,
    _ = 0;
  for (let _ = 0; _ <= _; _++) {
    let _ = _[_[_]],
      _ = _[_],
      [_, _] = _(_, _ / _);
    (_ += _ * _), (_ += _);
  }
  let [_, _] = _(_, _);
  return [_ + _, _];
}
function _(_, _, _) {
  let _ = {};
  for (let _ = _; _ >= 0; _--) {
    let _ = _[_];
    (_[_[_]] = _(_, _)), (_ = _(_, _));
  }
  return _;
}
function _(_) {
  if (_ !== void 0) return _(_);
}
function _(_) {
  if (_ !== void 0) return _(_);
}
function _(_) {
  if (_ !== void 0) return _(_);
}
function _(_) {
  return _(_(_));
}
function _(_) {
  return _(_(_));
}
function _(_, _) {
  if (_ == null) throw RangeError(_(_));
  return _;
}
function _(_) {
  if (!_(_)) throw TypeError(_);
  return _;
}
function _(_, _, _ = _) {
  if (typeof _ !== _) throw TypeError(_(_, _));
  return _;
}
function _(_, _ = `number`) {
  if (!Number.isInteger(_)) throw RangeError(_(_, _));
  return _ || 0;
}
function _(_, _ = `number`) {
  if (_ <= 0) throw RangeError(_(_, _));
  return _;
}
function _(_) {
  if (typeof _ == `symbol`) throw TypeError(_);
  return String(_);
}
function _(_, _) {
  return _(_) ? String(_) : _(_, _);
}
function _(_) {
  if (typeof _ == `string`) return BigInt(_);
  if (typeof _ != `bigint`) throw TypeError(_(_));
  return _;
}
function _(_, _ = `number`) {
  if (typeof _ == `bigint`) throw TypeError(_(_));
  if (((_ = Number(_)), !Number.isFinite(_))) throw RangeError(_(_, _));
  return _;
}
function _(_, _) {
  return Math.trunc(_(_, _)) || 0;
}
function _(_, _) {
  return _(_(_, _), _);
}
function _(_, _) {
  return _(_(_, _), _);
}
function _(_, _) {
  let [_, _] = _(_, _),
    _ = _ + _,
    _ = Math.sign(_);
  return _ && _ === -Math.sign(_) && ((_ -= _), (_ += _ * 864e11)), [_, _];
}
function _(_, _, _ = 1) {
  return _(_[0] + _[0] * _, _[1] + _[1] * _);
}
function _(_, _) {
  return _(_[0], _[1] + _);
}
function _(_, _) {
  return _(_, _, -1);
}
function _(_, _) {
  return _(_[0], _[0]) || _(_[1], _[1]);
}
function _(_, _, _) {
  return _(_, _) === -1 || _(_, _) === 1;
}
function _(_, _ = 1) {
  let _ = BigInt(_ / _);
  return [Number(_ / _), Number(_ % _) * _];
}
function _(_, _ = 1) {
  let [_, _] = _(_, _ / _);
  return [_, _ * _];
}
function _(_, _ = 1) {
  let [_, _] = _,
    _ = Math.floor(_ / _),
    _ = _ / _;
  return BigInt(_) * BigInt(_) + BigInt(_);
}
function _(_, _ = 1, _) {
  let [_, _] = _,
    [_, _] = _(_, _);
  return (_ / _) * _ + (_ + (_ ? _ / _ : 0));
}
function _(_) {
  return _[0] + _[1] / _;
}
function _(_, _, _ = _) {
  let [_, _] = _,
    [_, _] = _(_, _);
  return [(_ / _) * _ + _, _];
}
function _(_) {
  return (
    _(_, `isoYear`, _, _, 1),
    _.isoYear === _
      ? _(_, `isoMonth`, 4, 12, 1)
      : _.isoYear === _ && _(_, `isoMonth`, 1, 9, 1),
    _
  );
}
function _(_) {
  return (
    _({
      ..._,
      ..._,
      isoHour: 12,
    }),
    _
  );
}
function _(_) {
  let _ = _(_, `isoYear`, _, _, 1),
    _ = _ === _ ? 1 : _ === _ ? -1 : 0;
  return (
    _ &&
      _(
        _({
          ..._,
          isoDay: _.isoDay + _,
          isoNanosecond: _.isoNanosecond - _,
        }),
      ),
    _
  );
}
function _(_) {
  if (!_ || _(_, _, _)) throw RangeError(_);
  return _;
}
function _(_) {
  return _(_, 5, _)[1];
}
function _(_) {
  let [_, _] = _(_, _);
  return [_(_, 5, _), _];
}
function _(_) {
  return _(_)[0];
}
function _(_) {
  return _(_, _);
}
function _(_) {
  return _(
    _.isoYear,
    _.isoMonth,
    _.isoDay,
    _.isoHour,
    _.isoMinute,
    _.isoSecond,
    _.isoMillisecond,
  );
}
function _(_) {
  let _ = _(_);
  if (_ !== void 0) {
    let [_, _] = _(_, _);
    return [_, _ * _ + (_.isoMicrosecond || 0) * _ + (_.isoNanosecond || 0)];
  }
}
function _(_, _) {
  let [_, _] = _(_(_) - _);
  return _(
    _({
      ..._,
      isoDay: _.isoDay + _,
      ..._,
    }),
  );
}
function _(..._) {
  return _(..._) / _;
}
function _(..._) {
  let [_, _] = _(..._),
    _ = _.valueOf();
  if (!isNaN(_)) return _ - _ * _;
}
function _(_, _ = 1, _ = 1, _ = 0, _ = 0, _ = 0, _ = 0) {
  let _ = _ === _ ? 1 : _ === _ ? -1 : 0,
    _ = new Date();
  return _.setUTCHours(_, _, _, _), _.setUTCFullYear(_, _ - 1, _ + _), [_, _];
}
function _(_, _) {
  let [_, _] = _(_, _);
  _ < 0 && ((_ += 864e11), --_);
  let [_, _] = _(_, _),
    [_, _] = _(_, _);
  return _(_ * _ + _, _, _);
}
function _(_, _ = 0, _ = 0) {
  let _ = Math.ceil(Math.max(0, Math.abs(_) - _) / _) * Math.sign(_),
    _ = new Date(_ - _ * _);
  return _(_, [
    _.getUTCFullYear(),
    _.getUTCMonth() + 1,
    _.getUTCDate() + _,
    _.getUTCHours(),
    _.getUTCMinutes(),
    _.getUTCSeconds(),
    _.getUTCMilliseconds(),
    _,
    _,
  ]);
}
function _(_, _) {
  if (_ < -_) throw RangeError(_);
  let _ = _.formatToParts(_),
    _ = {};
  for (let _ of _) _[_.type] = _.value;
  return _;
}
function _(_) {
  return _.isoDay;
}
function _(_) {
  return [_.isoYear, _.isoMonth, _.isoDay];
}
function _(_, _) {
  return [_, 0];
}
function _(_, _) {
  if (!_) return [_, _];
}
function _(_, _, _) {
  return {
    isoYear: _,
    isoMonth: _,
    isoDay: _,
  };
}
function _() {
  return 7;
}
function _() {
  return _;
}
function _(_, _) {
  switch (_) {
    case 2:
      return _(_) ? 29 : 28;
    case 4:
    case 6:
    case 9:
    case 11:
      return 30;
  }
  return 31;
}
function _(_) {
  return _(_) ? 366 : 365;
}
function _(_) {
  return _ % 4 == 0 && (_ % 100 != 0 || _ % 400 == 0);
}
function _(_) {
  let [_, _] = _(_.isoYear, _.isoMonth, _.isoDay);
  return _(_.getUTCDay() - _, 7) || 7;
}
function _(_) {
  return this._ === _
    ? (({ isoYear: _ }) =>
        _ < 1 ? [`gregory-inverse`, 1 - _] : [`gregory`, _])(_)
    : this._ === _
      ? _(_)
      : [];
}
function _(_) {
  let _ = _(_);
  if (_ < _) {
    let { isoYear: _ } = _;
    return _ < 1 ? [`japanese-inverse`, 1 - _] : [`japanese`, _];
  }
  let { era: _, eraYear: _ } = _(_(_(_), _), _);
  return [_, _];
}
function _(_) {
  return _(_), _(_, 1), _;
}
function _(_) {
  return _(_, 1), _;
}
function _(_) {
  return _(_, _, _(_));
}
function _(_, _) {
  let { isoYear: _ } = _,
    _ = _(_, `isoMonth`, 1, _(), _);
  return {
    isoYear: _,
    isoMonth: _,
    isoDay: _(_, `isoDay`, 1, _(_, _), _),
  };
}
function _(_, _) {
  return _(_, [
    _(_, `isoHour`, 0, 23, _),
    _(_, `isoMinute`, 0, 59, _),
    _(_, `isoSecond`, 0, 59, _),
    _(_, `isoMillisecond`, 0, 999, _),
    _(_, `isoMicrosecond`, 0, 999, _),
    _(_, `isoNanosecond`, 0, 999, _),
  ]);
}
function _(_) {
  return _ === void 0 ? 0 : _(_(_));
}
function _(_, _ = 0) {
  _ = _(_);
  let _ = _(_),
    _ = _(_, _);
  return [_(_), _, _];
}
function _(_, _, _, _ = 9, _ = 0, _ = 4) {
  _ = _(_);
  let _ = _(_, _, _),
    _ = _(_),
    _ = _(_, _),
    _ = _(_, _, _, 1);
  return (
    _ == null ? (_ = Math.max(_, _)) : _(_, _),
    (_ = _(_, _, 1)),
    _ && (_ = ((_) => (_ < 4 ? (_ + 2) % 4 : _))(_)),
    [_, _, _, _]
  );
}
function _(_, _ = 6, _) {
  let _ = _((_ = _(_, _))),
    _ = _(_, 7),
    _ = _(_, _);
  return (_ = _(_, _)), (_ = _(_, _, void 0, _)), [_, _, _];
}
function _(_) {
  return _(_(_));
}
function _(_, _) {
  return _(_(_), _);
}
function _(_) {
  let _ = _(_, _, _(_, _), 0);
  if (!_) throw RangeError(_(_, _));
  return _;
}
function _(_, _ = 4) {
  let _ = _(_);
  return [_(_, 4), ..._(_(_, _), _)];
}
function _(_, _) {
  return _ == null
    ? [_ === void 0 ? 1 : 10 ** (9 - _), _]
    : [_[_], _ < 4 ? 9 - 3 * _ : -1];
}
function _(_) {
  let _ = _[_];
  return _ === void 0 ? 1 : _(_, _);
}
function _(_, _, _, _) {
  let _ = _ ? _ : _[_ + 1];
  if (_) {
    let _ = _[_];
    if (_ % ((_ = _(_, _, 1, _ / _ - +!_, 1)) * _)) throw RangeError(_(_, _));
  } else _ = _(_, _, 1, _ ? 10 ** 9 : 1, 1);
  return _;
}
function _(_) {
  let _ = _[_];
  if (_ !== void 0) {
    if (typeof _ != `number`) {
      if (_(_) === `auto`) return;
      throw RangeError(_(_, _));
    }
    _ = _(_, Math.floor(_), 0, 9, 1);
  }
  return _;
}
function _(_) {
  return _ === void 0 ? {} : _(_);
}
function _(_, _) {
  return typeof _ == `string`
    ? {
        [_]: _,
      }
    : _(_);
}
function _(_) {
  return {
    overflow: _[_],
  };
}
function _(_, _, _ = 9, _ = 0, _) {
  let _ = _[_];
  if (_ === void 0) return _ ? _ : void 0;
  if (((_ = _(_)), _ === `auto`)) return _ ? _ : null;
  let _ = _[_];
  if ((_ === void 0 && (_ = _[_]), _ === void 0)) throw RangeError(_(_, _, _));
  return _(_, _, _, _, 1, _), _;
}
function _(_, _, _, _ = 0) {
  let _ = _[_];
  if (_ === void 0) return _;
  let _ = _(_),
    _ = _[_];
  if (_ === void 0) throw RangeError(_(_, _, _));
  return _;
}
function _(_, _) {
  if (_ > _) throw RangeError(_);
}
function _(_) {
  return {
    branding: _,
    epochNanoseconds: _,
  };
}
function _(_, _, _) {
  return {
    branding: _,
    calendar: _,
    timeZone: _,
    epochNanoseconds: _,
  };
}
function _(_, _ = _.calendar) {
  return {
    branding: _,
    calendar: _,
    ..._(_, _),
  };
}
function _(_, _ = _.calendar) {
  return {
    branding: _,
    calendar: _,
    ..._(_, _),
  };
}
function _(_, _ = _.calendar) {
  return {
    branding: _,
    calendar: _,
    ..._(_, _),
  };
}
function _(_, _ = _.calendar) {
  return {
    branding: _,
    calendar: _,
    ..._(_, _),
  };
}
function _(_) {
  return {
    branding: _,
    ..._(_, _),
  };
}
function _(_) {
  return {
    branding: _,
    sign: _(_),
    ..._(_, _),
  };
}
function _(_) {
  return _(_.epochNanoseconds, _)[0];
}
function _(_) {
  return _(_.epochNanoseconds);
}
function _(_) {
  return _.epochNanoseconds;
}
function _(_, _, _, _, _) {
  let _ = _(_),
    [_, _] = ((_, _) => {
      let _ = _((_ = _(_, _))[_]),
        _ = _(_);
      return (_ = _(_, _)), [_, _];
    })(_, _);
  if (!_ && _(Math.max(_, _), _)) return _(_, _);
  if (!_) throw RangeError(_);
  if (!_.sign) return 0;
  let [_, _, _] = _(_, _, _),
    _ = _(_),
    _ = _(_),
    _ = _(_),
    _ = _(_, _, _);
  _(_) || (_(_), _(_));
  let _ = _(_, _, _, _);
  return _(_, _) ? _(_, _) : _(_, _(_), _, _, _, _, _);
}
function _(_, _, _, _, _, _, _) {
  let _ = _(_),
    [_, _] = _(_, _(_, _), _, _, _, _, _),
    _ = _(_, _, _);
  return _[_[_]] + _ * _;
}
function _(_, _) {
  return _(_(_), _[_], 1);
}
function _(_, _, _, _, _, _, _) {
  let _ = _[_],
    _ = {
      ..._,
      [_]: _[_] + _,
    },
    _ = _(_, _, _),
    _ = _(_, _, _);
  return [_(_), _(_)];
}
function _(_, _, _) {
  let _ = _(_(_, _));
  if (!_) throw RangeError(_);
  return _(_(_, _)) / _;
}
function _(_, _) {
  let [_, _, _] = _(_, 5, 1);
  return _(_(_.epochNanoseconds, _, _, _, 1));
}
function _(_, _, _) {
  let { epochNanoseconds: _, timeZone: _, calendar: _ } = _,
    [_, _, _] = _(_);
  if (_ === 0 && _ === 1) return _;
  let _ = _(_);
  if (_ === 6) _ = _(_, _, _, _);
  else {
    let _ = _._(_);
    _ = _(_, _(_(_, _), _, _, _), _, 2, 0, 1);
  }
  return _(_, _, _);
}
function _(_, _) {
  return _(_(_, ..._(_)), _.calendar);
}
function _(_, _) {
  let [_, _, _] = _(_, 5);
  var _;
  return _(((_ = _), _(_, _(_, _), _)[0]));
}
function _(_, _) {
  let _ = _(_.timeZone),
    [_, _] = _(_(_, _)),
    _ = _(_(_(_, _), _(_, _)), _, 1);
  if (_ <= 0) throw RangeError(_);
  return _;
}
function _(_, _) {
  let { timeZone: _, calendar: _ } = _;
  return _(_(_, _(_), _), _, _);
}
function _(_, _, _) {
  return _(_, _(_(_, _)));
}
function _(_, _, _, _) {
  let [_, _] = _(_(_, _)),
    _ = _.epochNanoseconds,
    _ = _(_, _),
    _ = _(_, _);
  if (_(_, _, _)) throw RangeError(_);
  return _(_(_, _, _), _) ? _ : _;
}
function _(_, _, _, _) {
  return _(_, _(_, _), _);
}
function _(_, _, _) {
  let [_, _] = _(_, _, _);
  return _({
    ..._(_, _),
    ..._,
  });
}
function _(_, _, _) {
  return _(_(_(_), _, _));
}
function _(_) {
  return _(_, _, 7);
}
function _(_, _) {
  return _[_] * _;
}
function _(_) {
  let _ = _(_);
  return [_, _(_, 1)];
}
function _(_) {
  return _(6, _);
}
function _(_, _, _) {
  let _ = Math.min(_(_), 6);
  return _(_(_(_, _), _, _), _);
}
function _(_, _, _, _, _, _, _, _, _, _) {
  if (_ === 0 && _ === 1) return _;
  let [_, _, _] = (_(_, _) ? (_(_) && _ < 6 && _ >= 6 ? _ : _) : _)(
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
  );
  return (
    _ &&
      _ !== 7 &&
      (_ = ((_, _, _, _, _, _, _, _) => {
        let _ = _(_);
        for (let _ = _ + 1; _ <= _; _++) {
          if (_ === 7 && _ !== 7) continue;
          let _ = _(_, _);
          _[_[_]] += _;
          let _ = _(_(_(_(_, _, _)), _));
          if (_ && Math.sign(_) !== _) break;
          _ = _;
        }
        return _;
      })(_, _, _, Math.max(6, _), _, _, _, _)),
    _
  );
}
function _(_, _, _, _, _) {
  return _ === 6 ? [_(_(_), _, _), 0] : _(_, _(_, _), _, _);
}
function _(_, _, _, _) {
  let [_, _] = _;
  _ && _ < 0 && ((_ += 864e11), --_);
  let [_, _] = _(_(_, _, _), _);
  return _(_ + _, _);
}
function _(_, _, _) {
  return _(_ / _, _) * _;
}
function _(_, _) {
  return _[_](_);
}
function _(_, _, _, _, _, _) {
  let _ = _(_),
    _ = _(_),
    _ = _(_, _, _, _),
    _ = _(_, _),
    _ = Math.sign(_[0] - _[0]) === _,
    _ = _(_, Math.min(_, 6));
  return [
    {
      ..._,
      ..._,
    },
    _(_, _),
    _,
  ];
}
function _(_, _, _, _, _, _, _, _, _, _) {
  let _ = _(_) || 1,
    _ = _(_(_, 5)),
    _ = _(_, _),
    _ = _(_, _, _),
    [_, _] = _(
      _,
      {
        ..._,
        ..._,
      },
      6,
      _,
      _,
      _,
      _,
    ),
    _ = _ - _(_(_, _)),
    _ = 0;
  _ && Math.sign(_) !== _
    ? (_ = _(_, _))
    : ((_ += _), (_ = _(_, _, _)), (_ = _(_, _)));
  let _ = _(_);
  return [
    {
      ..._,
      ..._,
      days: _.days + _,
    },
    _,
    !!_,
  ];
}
function _(_, _, _, _, _, _, _, _, _, _) {
  let _ = _(_),
    _ = _[_],
    _ = _(_, _);
  _ === 7 &&
    (_ = {
      ..._,
      weeks: _.weeks + Math.trunc(_.days / 7),
    });
  let _ = _(_[_], _) * _;
  _[_] = _;
  let [_, _] = _(_, _, _, _ * _, _, _, _),
    _ = _ + _(_, _, _) * _ * _,
    _ = _(_, _, _),
    _ = Math.sign(_ - _) === _;
  return (_[_] = _), [_, _ ? _ : _, _];
}
function _(_, _, _, _) {
  let [_, _, _, _] = ((_) => {
      let _ = _((_ = _(_)));
      return [_.timeZone, ..._];
    })(_),
    _ = _ !== void 0;
  return ((_, _, _, _, _, _) => {
    _ = _(_, _, _, 1);
    let _ = _._(_);
    return _(_(_, _), _) + (_ ? _(_(_)) : `Z`);
  })(_, _(_ ? _(_) : _), _.epochNanoseconds, _, _, _);
}
function _(_, _, _) {
  let [_, _, _, _, _, _] = ((_) => {
    _ = _(_);
    let _ = _(_),
      _ = _(_),
      _ = _(_),
      _ = _(_, 4),
      _ = _(_, 4);
    return [_, _(_), _, _, ..._(_, _)];
  })(_);
  return ((_, _, _, _, _, _, _, _, _, _) => {
    _ = _(_, _, _, 1);
    let _ = _(_)._(_);
    return (
      _(_(_, _), _) +
      _(_(_), _) +
      ((_, _) => (_ === 1 ? `` : `[` + (_ === 2 ? `!` : ``) + _ + `]`))(_, _) +
      _(_, _)
    );
  })(_, _.calendar, _.timeZone, _.epochNanoseconds, _, _, _, _, _, _);
}
function _(_, _) {
  let [_, _, _, _] = ((_) => ((_ = _(_)), [_(_), ..._(_)]))(_);
  return (_ = _.calendar), (_ = _), (_ = _), _(_(_, _, _), _) + _(_, _);
  var _, _, _;
}
function _(_, _) {
  return (_ = _.calendar), (_ = _), (_ = _(_)), _(_) + _(_, _);
  var _, _, _;
}
function _(_, _) {
  return _(_.calendar, _, _, _(_));
}
function _(_, _) {
  return _(_.calendar, _, _, _(_));
}
function _(_, _) {
  let [_, _, _] = _(_);
  return (_ = _), _(_(_, _, _)[0], _);
  var _;
}
function _(_, _) {
  let [_, _, _] = _(_, 3);
  return (
    _ > 1 &&
      _(
        (_ = {
          ..._,
          ..._(_, _, _),
        }),
      ),
    ((_, _) => {
      let { sign: _ } = _,
        _ = _ === -1 ? _(_) : _,
        { hours: _, minutes: _ } = _,
        [_, _] = _(_(_, 3), _, _);
      _(_);
      let _ = _(_, _),
        _ = _ >= 0 || !_ || _;
      return (
        (_ < 0 ? `-` : ``) +
        `P` +
        _({
          _: _(_.years),
          _: _(_.months),
          _: _(_.weeks),
          _: _(_.days),
        }) +
        (_ || _ || _ || _
          ? `T` +
            _({
              _: _(_),
              _: _(_),
              _: _(_, _) + _,
            })
          : ``)
      );
    })(_, _)
  );
}
function _(_, _, _, _) {
  return _ === 1
    ? _ === `iso8601`
      ? _(_)
      : _(_)
    : _ > 1 || (_ === 0 && _ !== `iso8601`)
      ? _(_) + _(_, _ === 2)
      : _(_);
}
function _(_) {
  let _ = [];
  for (let _ in _) {
    let _ = _[_];
    _ && _.push(_, _);
  }
  return _.join(``);
}
function _(_, _) {
  return _(_) + `T` + _(_, _);
}
function _(_) {
  return _(_) + `-` + _(_.isoDay);
}
function _(_) {
  let { isoYear: _ } = _;
  return (
    (_ < 0 || _ > 9999 ? _(_) + _(6, Math.abs(_)) : _(4, _)) +
    `-` +
    _(_.isoMonth)
  );
}
function _(_) {
  return _(_.isoMonth) + `-` + _(_.isoDay);
}
function _(_, _) {
  let _ = [_(_.isoHour), _(_.isoMinute)];
  return (
    _ !== -1 &&
      _.push(
        _(_.isoSecond) +
          ((_, _, _, _) => _(_ * 1e6 + _ * 1e3 + _, _))(
            _.isoMillisecond,
            _.isoMicrosecond,
            _.isoNanosecond,
            _,
          ),
      ),
    _.join(`:`)
  );
}
function _(_, _ = 0) {
  if (_ === 1) return ``;
  let [_, _] = _(Math.abs(_), _),
    [_, _] = _(_, _),
    [_, _] = _(_, _);
  return _(_) + _(_) + `:` + _(_) + (_ || _ ? `:` + _(_) + _(_) : ``);
}
function _(_, _) {
  return _ !== 1 && (_ > 1 || (_ === 0 && _ !== `iso8601`))
    ? _(_, _ === 2)
    : ``;
}
function _(_, _) {
  return `[` + (_ ? `!` : ``) + `u-ca=` + _ + `]`;
}
function _(_, _) {
  let _ = _(9, _);
  return (
    (_ = _ === void 0 ? _.replace(_, ``) : _.slice(0, _)), _ ? `.` + _ : ``
  );
}
function _(_) {
  return _ < 0 ? `-` : `+`;
}
function _(_, _) {
  return _ || _
    ? _.toLocaleString(`fullwide`, {
        useGrouping: 0,
      })
    : ``;
}
function _(_, _) {
  let { epochNanoseconds: _ } = _,
    _ = (_._ ? _ : _(_.timeZone))._(_),
    _ = _(_, _);
  return {
    calendar: _.calendar,
    ..._,
    offsetNanoseconds: _,
  };
}
function _(_, _, _, _ = 0, _ = 0, _, _) {
  if (_ !== void 0 && _ === 1 && (_ === 1 || _)) return _(_, _);
  let _ = _._(_);
  if (_ !== void 0 && _ !== 3) {
    let _ = ((_, _, _, _) => {
      let _ = _(_);
      _ && (_ = _(_));
      for (let _ of _) {
        let _ = _(_(_, _));
        if ((_ && (_ = _(_)), _ === _)) return _;
      }
    })(_, _, _, _);
    if (_ !== void 0) return _;
    if (_ === 0) throw RangeError(_);
  }
  return _ ? _(_) : _(_, _, _, _);
}
function _(_, _, _ = 0, _ = _._(_)) {
  if (_.length === 1) return _[0];
  if (_ === 1) throw RangeError(_);
  if (_.length) return _[+(_ === 3)];
  let _ = _(_),
    _ =
      ((_, _) => {
        let _ = _._(_(_, -_));
        return ((_) => {
          if (_ > 864e11) throw RangeError(_);
          return _;
        })(_._(_(_, _)) - _);
      })(_, _) * (_ === 2 ? -1 : 1);
  return (_ = _._(_(_, _)))[_ === 2 ? 0 : _.length - 1];
}
function _(_, _) {
  let _ = _._(_);
  if (_.length) return _[0];
  let _ = _(_(_), -_);
  return _._(_, 1);
}
function _(_, _, _) {
  return _(
    _(
      _(
        _.epochNanoseconds,
        ((_) => {
          if (_(_)) throw RangeError(_);
          return _(_, 5);
        })(_ ? _(_) : _),
      ),
    ),
  );
}
function _(_, _, _, _, _, _ = Object.create(null)) {
  let _ = _(_.timeZone),
    _ = _(_.calendar);
  return {
    ..._,
    ..._(_, _, _, _ ? _(_) : _, _),
  };
}
function _(_, _, _, _, _ = Object.create(null)) {
  let { calendar: _ } = _;
  return _(_(_(_), _, _ ? _(_) : _, _), _);
}
function _(_, _, _, _, _) {
  let { calendar: _ } = _;
  return _(_(_(_), _, _ ? _(_) : _, _), _);
}
function _(_, _, _, _, _) {
  let _ = _.calendar,
    _ = _(_),
    _ = _(_(_, _));
  return (
    _ && (_ = _(_)),
    _.sign < 0 &&
      ((_ = _._(_, {
        ..._,
        months: 1,
      })),
      (_ = _(_, -1))),
    _(_(_, _._(_, _, _)), _)
  );
}
function _(_, _, _) {
  return _(_(_, _ ? _(_) : _)[0]);
}
function _(_, _, _, _, _) {
  let _ = _(_, 5),
    _ = _.epochNanoseconds;
  if (_(_)) {
    let _ = _(_, _);
    _ = _(
      _(_, {
        ..._(
          _,
          _,
          {
            ..._,
            ..._,
          },
          _,
        ),
        ..._(_, _),
      }),
      _,
    );
  } else (_ = _(_, _)), _(_);
  return {
    epochNanoseconds: _(_),
  };
}
function _(_, _, _, _) {
  let [_, _] = _(_, _);
  return _({
    ..._(
      _,
      _,
      {
        ..._,
        ..._,
        days: _.days + _,
      },
      _,
    ),
    ..._,
  });
}
function _(_, _, _, _) {
  if (_.years || _.months || _.weeks) return _._(_, _, _);
  _(_);
  let _ = _.days + _(_, 5)[0];
  return _ ? _(_(_, _)) : _;
}
function _(_, _, _ = 1) {
  return _(_, _ - _.day(_));
}
function _(_, _) {
  let [_, _] = _(_, 5),
    [_, _] = _(_(_) + _);
  return [_, _ + _];
}
function _(_, _, _) {
  let _ = _(_),
    _,
    { years: _, months: _, weeks: _, days: _ } = _;
  if (((_ += _(_, 5)[0]), _ || _)) _ = _(this, _, _, _, _);
  else {
    if (!_ && !_) return _;
    _ = _(_);
  }
  if (_ === void 0) throw RangeError(_);
  return (_ += (7 * _ + _) * _), _(_(_));
}
function _(_, _, _, _, _) {
  let [_, _, _] = _._(_);
  if (_) {
    let [_, _] = _._(_, _);
    (_ += _), (_ = _(_, _, _._(_))), (_ = _(`month`, _, 1, _._(_), _));
  }
  return (
    _ && ([_, _] = _._(_, _, _)),
    (_ = _(`day`, _, 1, _._(_, _), _)),
    _._(_, _, _)
  );
}
function _(_, _, _) {
  return (
    (_ += _(_, _)),
    (_ += _(_, _)) < 1 ? (_--, (_ += _)) : _ > _ && (_++, (_ -= _)),
    [_, _]
  );
}
function _(_, _, _) {
  if (_) {
    if (((_ += _), !Number.isSafeInteger(_))) throw RangeError(_);
    if (_ < 0) for (; _ < 1; ) _ += _.call(this, --_);
    else {
      let _;
      for (; _ > (_ = _.call(this, _)); ) (_ -= _), _++;
    }
  }
  return [_, _];
}
function _(_, _) {
  return _
    ? {
        ..._,
        ..._(_(_) + _ * _),
      }
    : _;
}
function _(_, _, _) {
  let _ = _(_.calendar);
  return _(_)
    ? [_, _, _(_.timeZone)]
    : [
        {
          ..._,
          ..._,
        },
        _,
      ];
}
function _(_) {
  return _ ? _ : _;
}
function _(_) {
  return _ ? _(_, _) : _;
}
function _(_) {
  return _ ? _(_, _) : _;
}
function _(_) {
  return _ && _.epochNanoseconds;
}
function _(_, _) {
  return _ <= 6 - !!_(_);
}
function _(_, _, _, _, _, _, _) {
  let _ = _(_(_).relativeTo),
    _ = Math.max(_(_), _(_));
  if (_(_, _))
    return _(
      _(
        ((_, _, _, _) => {
          let _ = _(_(_), _(_), _ ? -1 : 1);
          if (!Number.isFinite(_[0])) throw RangeError(_);
          return {
            ..._,
            ..._(_, _),
          };
        })(_, _, _, _),
      ),
    );
  if (!_) throw RangeError(_);
  _ && (_ = _(_));
  let [_, _, _] = _(_, _, _),
    _ = _(_);
  return _(_(_)(_, _, _(_, _(_, _, _), _), _));
}
function _(_, _, _, _, _) {
  let _ = _(_),
    [_, _, _, _, _] = ((_, _, _) => {
      _ = _(_, _);
      let _ = _(_),
        _ = _(_[_]),
        _ = _(_),
        _ = _(_, 7),
        _ = _(_);
      if (_ === void 0 && _ === void 0) throw RangeError(_);
      if (
        ((_ ??= 0),
        (_ ??= Math.max(_, _)),
        _(_, _),
        (_ = _(_, _, 1)),
        _ > 1 && _ > 5 && _ !== _)
      )
        throw RangeError(
          `For calendar units with roundingIncrement > 1, use largestUnit = smallestUnit`,
        );
      return [_, _, _, _, _];
    })(_, _, _);
  if (!_ && Math.max(_, _) <= 6)
    return _(
      _(
        ((_, _, _, _, _) => {
          let _ = _(_(_), _, _, _);
          return {
            ..._,
            ..._(_, _),
          };
        })(_, _, _, _, _),
      ),
    );
  if (!_(_) && !_.sign) return _;
  if (!_) throw RangeError(_);
  let [_, _, _] = _(_, _, _),
    _ = _(_),
    _ = _(_),
    _ = _(_),
    _ = _(_, _, _);
  _(_) || (_(_), _(_));
  let _ = _(_, _, _, _),
    _ = _.sign,
    _ = _(_);
  if (_ && _ && _ !== _) throw RangeError(_);
  return (_ = _(_, _(_), _, _, _, _, _, _, _, _)), _(_);
}
function _(_) {
  return _.sign === -1 ? _(_) : _;
}
function _(_) {
  return _(_(_));
}
function _(_) {
  let _ = {};
  for (let _ of _) _[_] = -1 * _[_] || 0;
  return _;
}
function _(_) {
  return !_.sign;
}
function _(_, _ = _) {
  let _ = 0;
  for (let _ of _) {
    let _ = Math.sign(_[_]);
    if (_) {
      if (_ && _ !== _) throw RangeError(_);
      _ = _;
    }
  }
  return _;
}
function _(_) {
  for (let _ of _) _(_, _[_], -_, _, 1);
  return _(_(_(_), _)), _;
}
function _(_) {
  if (!Number.isSafeInteger(_)) throw RangeError(_);
}
function _(_, _ = 6) {
  return _(_, _, _);
}
function _(_, _ = 6) {
  let [_, _] = _,
    _ = _(_, _, _);
  if (((_[_[_]] += _ * (864e11 / _[_])), !Number.isFinite(_[_[_]])))
    throw RangeError(_);
  return _;
}
function _(_, _ = 5) {
  return _(_, _, _);
}
function _(_) {
  return !!_(_, _);
}
function _(_) {
  let _ = 9;
  for (; _ > 0 && !_[_[_]]; _--);
  return _;
}
function _(_, _) {
  return [_, _];
}
function _(_) {
  let _ = Math.floor(_ / _) * _;
  return [_, _ + _];
}
function _(_) {
  let _ = _((_ = _(_)));
  if (!_) throw RangeError(_(_));
  let _;
  if (_._) _ = 0;
  else {
    if (!_.offset) throw RangeError(_(_));
    _ = _(_.offset);
  }
  return _.timeZone && _(_.timeZone, 1), _(_(_(_), _));
}
function _(_) {
  let _ = _(_(_));
  if (!_) throw RangeError(_(_));
  if (_.timeZone) return _(_, _.offset ? _(_.offset) : void 0);
  if (_._) throw RangeError(_(_));
  return _(_);
}
function _(_, _) {
  let _ = _(_(_));
  if (!_ || !_.timeZone) throw RangeError(_(_));
  let { offset: _ } = _,
    _ = _ ? _(_) : void 0,
    [, _, _] = _(_);
  return _(_, _, _, _);
}
function _(_) {
  let _ = _(_);
  if (_ === void 0) throw RangeError(_(_));
  return _;
}
function _(_) {
  let _ = _(_(_));
  if (!_ || _._) throw RangeError(_(_));
  return _(_(_));
}
function _(_, _, _) {
  let _ = _(_(_));
  if (!_ || _._) throw RangeError(_(_));
  return (
    _
      ? _.calendar === `iso8601` &&
        (_ =
          _.isoYear === -271821 && _.isoMonth === 4
            ? {
                ..._,
                isoDay: 20,
                ..._,
              }
            : {
                ..._,
                isoDay: 1,
                ..._,
              })
      : _ &&
        _.calendar === `iso8601` &&
        (_ = {
          ..._,
          isoYear: _,
        }),
    _(_._ ? _(_) : _(_))
  );
}
function _(_, _) {
  let _ = _(_(_));
  if (_) return _(_), _(_(_(_)));
  let _ = _(_, 1);
  return _(_(_(_.calendar), _));
}
function _(_) {
  if (_.calendar !== `iso8601`) throw RangeError(_(_.calendar));
}
function _(_, _) {
  let _ = _(_(_));
  if (_) return _(_), _(_(_));
  let _ = _(_, 0, 1),
    { calendar: _ } = _,
    _ = _(_),
    [_, _, _] = _._(_),
    [_, _] = _._(_, _),
    [_, _] = _._(_, _, _);
  return _(_(_._(_, _, _)), _);
}
function _(_) {
  let _,
    _ = ((_) => {
      let _ = _.exec(_);
      return _ ? (_(_[10]), _(_)) : void 0;
    })(_(_));
  if (!_) {
    if (((_ = _(_)), !_ || !_._)) throw RangeError(_(_));
    if (_._) throw RangeError(_(`Z`));
    _(_);
  }
  if (((_ = _(_)) && _(_)) || ((_ = _(_)) && _(_))) throw RangeError(_(_));
  return _(_(_, 1));
}
function _(_) {
  let _ = ((_) => {
    let _ = _.exec(_);
    return _
      ? ((_) => {
          function _(_, _, _) {
            let _ = 0,
              _ = 0;
            if ((_ && ([_, _] = _(_, _[_])), _ !== void 0)) {
              if (_) throw RangeError(_(_));
              (_ = ((_) => {
                let _ = parseInt(_);
                if (!Number.isFinite(_)) throw RangeError(_(_));
                return _;
              })(_)),
                (_ = 1),
                _ && ((_ = _(_) * (_[_] / 1e9)), (_ = 1));
            }
            return _ + _;
          }
          let _ = 0,
            _ = 0,
            _ = 0,
            _ = {
              ..._(_, [
                _(_[2]),
                _(_[3]),
                _(_[4]),
                _(_[5]),
                _(_[6], _[7], 5),
                _(_[8], _[9], 4),
                _(_[10], _[11], 3),
              ]),
              ..._(_, 2, _),
            };
          if (!_) throw RangeError(_(_));
          return _(_[1]) < 0 && (_ = _(_)), _;
        })(_)
      : void 0;
  })(_(_));
  if (!_) throw RangeError(_(_));
  return _(_(_));
}
function _(_) {
  let _ = _(_) || _(_) || _(_);
  return _ ? _.calendar : _;
}
function _(_) {
  let _ = _(_);
  return (_ && (_.timeZone || (_._ && _) || _.offset)) || _;
}
function _(_, _, _ = 0, _ = 0) {
  let _ = _(_.timeZone),
    _ = _(_),
    _;
  return (
    _(_),
    (_ = _._ ? _(_, _, _, _, _, !_._, _._) : _(_, _)),
    _(_, _, _(_.calendar))
  );
}
function _(_) {
  return _(_(_(_)));
}
function _(_) {
  return _(_(_(_)));
}
function _(_) {
  return {
    ..._,
    calendar: _(_.calendar),
  };
}
function _(_) {
  let _ = _.exec(_);
  return _
    ? ((_) => {
        let _ = _[10],
          _ = (_ || ``).toUpperCase() === `Z`;
        return {
          isoYear: _(_),
          isoMonth: parseInt(_[4]),
          isoDay: parseInt(_[5]),
          ..._(_.slice(5)),
          ..._(_[16]),
          _: !!_[6],
          _: _,
          offset: _ ? void 0 : _,
        };
      })(_)
    : void 0;
}
function _(_) {
  let _ = _.exec(_);
  return _
    ? ((_) => ({
        isoYear: _(_),
        isoMonth: parseInt(_[4]),
        isoDay: 1,
        ..._(_[5]),
      }))(_)
    : void 0;
}
function _(_) {
  let _ = _.exec(_);
  return _
    ? ((_) => ({
        isoYear: _,
        isoMonth: parseInt(_[1]),
        isoDay: parseInt(_[2]),
        ..._(_[3]),
      }))(_)
    : void 0;
}
function _(_, _) {
  let _ = _.exec(_);
  return _
    ? ((_, _) => {
        let _ = _[4] || _[5];
        if (_ && _) throw RangeError(_(_));
        return ((_) => {
          if (Math.abs(_) >= 864e11) throw RangeError(_);
          return _;
        })((_(_[2]) * _ + _(_[3]) * _ + _(_[4]) * _ + _(_[5] || ``)) * _(_[1]));
      })(_, _)
    : void 0;
}
function _(_) {
  let _ = _(_[1]),
    _ = parseInt(_[2] || _[3]);
  if (_ < 0 && !_) throw RangeError(_(-0));
  return _ * _;
}
function _(_) {
  let _ = _(_[3]);
  return {
    ..._(_(_[4] || ``))[0],
    isoHour: _(_[1]),
    isoMinute: _(_[2]),
    isoSecond: _ === 60 ? 59 : _,
  };
}
function _(_) {
  let _,
    _,
    _ = [];
  if (
    (_.replace(_, (_, _, _) => {
      let _ = !!_,
        [_, _] = _.split(`=`).reverse();
      if (_) {
        if (_ === `u-ca`) _.push(_), (_ ||= _);
        else if (_ || /[A-Z]/.test(_)) throw RangeError(_(_));
      } else {
        if (_) throw RangeError(_(_));
        _ = _;
      }
      return ``;
    }),
    _.length > 1 && _)
  )
    throw RangeError(_(_));
  return {
    timeZone: _,
    calendar: _[0] || `iso8601`,
  };
}
function _(_) {
  return parseInt(_.padEnd(9, `0`));
}
function _(_) {
  return RegExp(`^${_}$`, `i`);
}
function _(_) {
  return _ && _ !== `+` ? -1 : 1;
}
function _(_) {
  return _ === void 0 ? 0 : parseInt(_);
}
function _(_) {
  return _(_(_));
}
function _(_) {
  let _ = _(_);
  return typeof _ == `number`
    ? _(_)
    : _
      ? ((_) => {
          if (_.test(_)) throw RangeError(_(_));
          if (_.test(_)) throw RangeError(_);
          return _.toLowerCase()
            .split(`/`)
            .map((_, _) =>
              (_.length <= 3 || /\d/.test(_)) && !/etc|yap/.test(_)
                ? _.toUpperCase()
                : _.replace(/baja|dumont|[a-z]+/g, (_, _) =>
                    (_.length <= 2 && !_) || _ === `in` || _ === `chat`
                      ? _.toUpperCase()
                      : _.length > 2 || !_
                        ? _(_).replace(
                            /island|noronha|murdo|rivadavia|urville/,
                            _,
                          )
                        : _,
                  ),
            )
            .join(`/`);
        })(_)
      : _;
}
function _(_) {
  let _ = _(_);
  return typeof _ == `number` ? _ : _ ? _.resolvedOptions().timeZone : _;
}
function _(_) {
  let _ = _((_ = _.toUpperCase()), 1);
  return _ === void 0 ? (_ === _ ? void 0 : _(_)) : _;
}
function _(_, _) {
  return _(_.epochNanoseconds, _.epochNanoseconds);
}
function _(_, _) {
  return _(_.epochNanoseconds, _.epochNanoseconds);
}
function _(_, _, _, _, _, _) {
  let _ = _(_(_).relativeTo),
    _ = Math.max(_(_), _(_));
  if (_(_, _, _)) return 0;
  if (_(_, _)) return _(_(_), _(_));
  if (!_) throw RangeError(_);
  let [_, _, _] = _(_, _, _),
    _ = _(_),
    _ = _(_);
  return _(_(_(_, _, _)), _(_(_, _, _)));
}
function _(_, _) {
  return _(_, _) || _(_, _);
}
function _(_, _) {
  return _(_(_), _(_));
}
function _(_, _) {
  return _(_(_), _(_));
}
function _(_, _) {
  return !_(_, _);
}
function _(_, _) {
  return !_(_, _) && !!_(_.timeZone, _.timeZone) && _.calendar === _.calendar;
}
function _(_, _) {
  return !_(_, _) && _.calendar === _.calendar;
}
function _(_, _) {
  return !_(_, _) && _.calendar === _.calendar;
}
function _(_, _) {
  return !_(_, _) && _.calendar === _.calendar;
}
function _(_, _) {
  return !_(_, _) && _.calendar === _.calendar;
}
function _(_, _) {
  return !_(_, _);
}
function _(_, _) {
  if (_ === _) return 1;
  try {
    return _(_) === _(_);
  } catch {}
}
function _(_, _, _, _) {
  let _ = _(_, _, 3, 5),
    _ = _(_.epochNanoseconds, _.epochNanoseconds, ..._);
  return _(_ ? _(_) : _);
}
function _(_, _, _, _, _, _) {
  let _ = _(_.calendar, _.calendar),
    [_, _, _, _] = _(_, _, 5),
    _ = _.epochNanoseconds,
    _ = _.epochNanoseconds,
    _ = _(_, _),
    _;
  if (_)
    if (_ < 6) _ = _(_, _, _, _, _, _);
    else {
      let _ = _(_(_.timeZone, _.timeZone)),
        _ = _(_);
      (_ = _(_, _, _, _, _, _, _)), (_ = _(_, _, _, _, _, _, _, _, _, _(_, _)));
    }
  else _ = _;
  return _(_ ? _(_) : _);
}
function _(_, _, _, _, _) {
  let _ = _(_.calendar, _.calendar),
    [_, _, _, _] = _(_, _, 6),
    _ = _(_),
    _ = _(_),
    _ = _(_, _),
    _;
  if (_)
    if (_ <= 6) _ = _(_, _, _, _, _, _);
    else {
      let _ = _(_);
      (_ = _(_, _, _, _, _, _)), (_ = _(_, _, _, _, _, _, _, _, _, _));
    }
  else _ = _;
  return _(_ ? _(_) : _);
}
function _(_, _, _, _, _) {
  let _ = _(_.calendar, _.calendar);
  return _(_, () => _(_), _, _, ..._(_, _, 6, 9, 6));
}
function _(_, _, _, _, _) {
  let _ = _(_.calendar, _.calendar),
    _ = _(_, _, 9, 9, 8),
    _ = _(_),
    _ = _(_, _),
    _ = _(_, _);
  return _.isoYear === _.isoYear &&
    _.isoMonth === _.isoMonth &&
    _.isoDay === _.isoDay
    ? _(_)
    : _(_, () => _, _(_), _(_), ..._, 8);
}
function _(_, _, _, _, _, _, _, _, _ = 6) {
  let _ = _(_),
    _ = _(_);
  if (_ === void 0 || _ === void 0) throw RangeError(_);
  let _;
  if (_(_, _))
    if (_ === 6) _ = _(_, _, _, _, _, _);
    else {
      let _ = _();
      (_ = _._(_, _, _)),
        (_ === _ && _ === 1) || (_ = _(_, _, _, _, _, _, _, _, _, _));
    }
  else _ = _;
  return _(_ ? _(_) : _);
}
function _(_, _, _, _) {
  let [_, _, _, _] = _(_, _, 5, 5),
    _ = _(_(_, _), _(_, _), _),
    _ = {
      ..._,
      ..._(_, _),
    };
  return _(_ ? _(_) : _);
}
function _(_, _, _, _, _, _) {
  let _ = _(_.epochNanoseconds, _.epochNanoseconds);
  return _
    ? _ < 6
      ? _(_.epochNanoseconds, _.epochNanoseconds, _)
      : _(_, _, _, _, _, _, _)
    : _;
}
function _(_, _, _, _, _) {
  let _ = _(_),
    _ = _(_),
    _ = _(_, _);
  return _ ? (_ <= 6 ? _(_, _, _) : _(_, _, _, _, _, _)) : _;
}
function _(_, _, _, _, _, _, _) {
  let [_, _, _] = _(_, _, _, _);
  var _, _;
  return {
    ...(_ === 6
      ? ((_ = _),
        (_ = _),
        {
          ..._,
          days: _(_, _),
        })
      : _._(_, _, _, _)),
    ..._(_),
  };
}
function _(_, _, _, _, _, _) {
  let [_, _, _] = ((_, _, _) => {
    let _ = _,
      _ = _(_, _);
    return (
      Math.sign(_) === -_ && ((_ = _(_, -_)), (_ += 864e11 * _)), [_, _, _]
    );
  })(_, _, _);
  return {
    ..._._(_, _, _, _),
    ..._(_),
  };
}
function _(_, _, _, _) {
  function _() {
    return (
      (_ = {
        ..._(_, _++ * -_),
        ..._,
      }),
      (_ = _(_, _)),
      _(_, _) === -_
    );
  }
  let _ = _(_, _),
    _ = _(_, _),
    _ = _(_, _),
    _ = _.epochNanoseconds,
    _ = 0,
    _ = _(_, _),
    _,
    _;
  if ((Math.sign(_) === -_ && _++, _() && (_ === -1 || _())))
    throw RangeError(_);
  let _ = _(_(_, _));
  return [_, _, _];
}
function _(_, _, _, _, _, _) {
  return {
    ..._,
    ..._(_(_(_, _), _, _, _), _),
  };
}
function _(_, _, _) {
  return {
    ..._,
    ..._(_(_, _), _),
  };
}
function _(_, _) {
  return _(_(_), _(_));
}
function _(_, _) {
  return Math.trunc((_ - _) / _);
}
function _(_, _) {
  return _(_) - _(_);
}
function _(_, _, _) {
  if (_ <= 7) {
    let _ = 0,
      _ = _(
        {
          ..._,
          ..._,
        },
        {
          ..._,
          ..._,
        },
      );
    return (
      _ === 7 && ([_, _] = _(_, 7)),
      {
        ..._,
        weeks: _,
        days: _,
      }
    );
  }
  let _ = this._(_),
    _ = this._(_),
    [_, _, _] = ((_, _, _, _, _, _, _) => {
      let _ = _ - _,
        _ = _ - _,
        _ = _ - _;
      if (_ || _) {
        let _ = Math.sign(_ || _),
          _ = _._(_, _),
          _ = 0;
        if (Math.sign(_) === -_) {
          let _ = _;
          ([_, _] = _._(_, _, -_)),
            (_ = _ - _),
            (_ = _ - _),
            (_ = _._(_, _)),
            (_ = _ < 0 ? -_ : _);
        }
        if (((_ = _ - Math.min(_, _) + _), _)) {
          let [_, _] = _._(_, _),
            [_, _] = _._(_, _);
          if (((_ = _ - _ || Number(_) - Number(_)), Math.sign(_) === -_)) {
            let _ = _ < 0 && -_._(_);
            (_ = (_ -= _) - _), (_ = _ - _(_, _, _._(_)) + (_ || _._(_)));
          }
        }
      }
      return [_, _, _];
    })(this, ..._, ..._);
  return (
    _ === 8 && ((_ += this._(_, _[0])), (_ = 0)),
    {
      ..._,
      years: _,
      months: _,
      days: _,
    }
  );
}
function _(_) {
  return _ * _;
}
function _(_, _) {
  let _ = _ + _,
    _ = Math.sign(_),
    _ = _ < 0 ? -1 : 0,
    _ = 0;
  for (let _ = _; _ !== _; _ += _) _ += _.call(this, _ + _);
  return _;
}
function _(_, _) {
  if (_ !== _) throw RangeError(_);
  return _;
}
function _(_, _) {
  if (!_(_, _)) throw RangeError(_);
  return _;
}
function _(_) {
  return this._(_)[0];
}
function _(_) {
  return this._(_)[1];
}
function _(_) {
  let [_] = this._(_);
  return this._(_);
}
function _(_) {
  let [_] = this._(_);
  return this._(_);
}
function _(_) {
  let [_, _] = this._(_);
  return this._(_, _);
}
function _(_) {
  let [_] = this._(_);
  return this._(_);
}
function _(_) {
  let [_] = this._(_);
  return _(this._(_), _(_)) + 1;
}
function _(_) {
  let _ = _.exec(_);
  if (!_) throw RangeError(_(_));
  return [parseInt(_[1]), !!_[2]];
}
function _(_, _) {
  return `M` + _(_) + (_ ? `L` : ``);
}
function _(_, _, _) {
  return _ + (_ || (_ && _ >= _) ? 1 : 0);
}
function _(_, _) {
  return _ - (_ && _ >= _ ? 1 : 0);
}
function _(_, _) {
  return (_ + _) * (Math.sign(_) || 1) || 0;
}
function _(_) {
  return _[_(_)];
}
function _(_) {
  return _[_(_)];
}
function _(_) {
  return _(_._ || `iso8601`);
}
function _(_) {
  function _(_) {
    return ((_, _) => ({
      ..._(_, _),
      _: _.month,
      day: parseInt(_.day),
    }))(_(_, _), _);
  }
  let _ = _(_),
    _ = _(_);
  return {
    _: _,
    _: _(_),
    _: _(_),
  };
}
function _(_) {
  return _((_) => _(_(_)), WeakMap);
}
function _(_) {
  let _ = _(0).year - _;
  return _((_) => {
    let _,
      _ = _(_ - _),
      _ = 0,
      _ = [],
      _ = [];
    do _ += 400 * _;
    while ((_ = _(_)).year <= _);
    do
      if (
        ((_ += (1 - _.day) * _),
        _.year === _ && (_.push(_), _.push(_._)),
        (_ -= _),
        ++_ > 100 || _ < -_)
      )
        throw RangeError(_);
    while ((_ = _(_)).year >= _);
    return {
      _: _.reverse(),
      _: _(_.reverse()),
    };
  });
}
function _(_, _) {
  let _,
    _,
    _ = _(_);
  if (_.era) {
    let _ = _[_],
      _ = _[_] || {};
    _ !== void 0 &&
      ((_ =
        _ === `islamic`
          ? `ah`
          : _.era
              .normalize(`NFD`)
              .toLowerCase()
              .replace(/[^a-z0-9]/g, ``)),
      _ === `bc` || _ === `b`
        ? (_ = `bce`)
        : _ === `ad` || _ === `a`
          ? (_ = `ce`)
          : _ === `beforeroc` && (_ = `broc`),
      (_ = _[_] || _),
      (_ = _),
      (_ = _(_, _[_] || 0)));
  }
  return {
    era: _,
    eraYear: _,
    year: _,
  };
}
function _(_) {
  return parseInt(_.relatedYear || _.year);
}
function _(_) {
  return this._(_).day;
}
function _(_) {
  let { year: _, _: _, day: _ } = this._(_),
    { _: _ } = this._(_);
  return [_, _[_] + 1, _];
}
function _(_, _, _) {
  return _(_.call(this, _, _, _));
}
function _(_, _ = 1, _ = 1) {
  return this._(_)._[_ - 1] + (_ - 1) * _;
}
function _(_, _) {
  let _ = _.call(this, _);
  return [_(_, _), _ === _];
}
function _(_) {
  let _ = _(this, _),
    _ = _(this, _ - 1),
    _ = _.length;
  if (_ > _.length) {
    let _ = _(this);
    if (_ < 0) return -_;
    for (let _ = 0; _ < _; _++) if (_[_] !== _[_]) return _ + 1;
  }
}
function _(_) {
  let _ = _.call(this, _);
  return _ > _.call(this, _ - 1) && _ > _.call(this, _ + 1);
}
function _(_) {
  return _(_.call(this, _), _.call(this, _ + 1));
}
function _(_, _) {
  let { _: _ } = this._(_),
    _ = _ + 1,
    _ = _;
  return (
    _ > _.length && ((_ = 1), (_ = this._(_ + 1)._)), _(_[_ - 1], _[_ - 1])
  );
}
function _(_) {
  return this._(_)._.length;
}
function _(_) {
  let _ = this._(_);
  return [_.era, _.eraYear];
}
function _(_, _, _) {
  let _ =
      this._ && _(this._) === `chinese`
        ? ((_, _, _) => {
            if (_)
              switch (_) {
                case 1:
                  return 1651;
                case 2:
                  return _ < 30 ? 1947 : 1765;
                case 3:
                  return _ < 30 ? 1966 : 1955;
                case 4:
                  return _ < 30 ? 1963 : 1944;
                case 5:
                  return _ < 30 ? 1971 : 1952;
                case 6:
                  return _ < 30 ? 1960 : 1941;
                case 7:
                  return _ < 30 ? 1968 : 1938;
                case 8:
                  return _ < 30 ? 1957 : 1718;
                case 9:
                  return 1832;
                case 10:
                  return 1870;
                case 11:
                  return 1814;
                case 12:
                  return 1890;
              }
            return 1972;
          })(_, _, _)
        : _,
    [_, _, _] = _.call(this, {
      isoYear: _,
      isoMonth: _,
      isoDay: 31,
    }),
    _ = _.call(this, _),
    _ = _ === _;
  (_(_, _(_, _)) || _(Number(_), Number(_)) || _(_, _)) === 1 && _--;
  for (let _ = 0; _ < 100; _++) {
    let _ = _ - _,
      _ = _.call(this, _),
      _ = _(_, _, _);
    if (_ === (_ === _) && _ <= _.call(this, _, _)) return [_, _];
  }
}
function _(_, _) {
  return Object.keys(_._(_)._);
}
function _(_) {
  return _(_(_));
}
function _(_) {
  if ((_ = _.toLowerCase()) !== `iso8601` && _ !== _) {
    let _ = _(_).resolvedOptions().calendar;
    if (_(_) !== _(_)) throw RangeError(_(_));
    return _;
  }
  return _;
}
function _(_) {
  return _ === `islamicc` && (_ = `islamic`), _.split(`-`)[0];
}
function _(_, _) {
  return (_) =>
    _ === `iso8601`
      ? _
      : _ === _ || _ === _
        ? Object.assign(Object.create(_), {
            _: _,
          })
        : Object.assign(Object.create(_), _(_));
}
function _(_, _, _, _) {
  let _ = _(_, _, _, [], _);
  if (_.timeZone !== void 0) {
    let _ = _._(_),
      _ = _(_),
      _ = _(_.timeZone);
    return {
      epochNanoseconds: _(
        _(_),
        {
          ..._,
          ..._,
        },
        _.offset === void 0 ? void 0 : _(_.offset),
      ),
      timeZone: _,
    };
  }
  return {
    ..._._(_),
    ..._,
  };
}
function _(_, _, _, _, _, _) {
  let _ = _(_, _, _, _, _),
    _ = _(_.timeZone),
    [_, _, _] = _(_),
    _ = _._(_, _(_)),
    _ = _(_, _);
  return _(
    _(
      _(_),
      {
        ..._,
        ..._,
      },
      _.offset === void 0 ? void 0 : _(_.offset),
      _,
      _,
    ),
    _,
    _,
  );
}
function _(_, _, _) {
  let _ = _(_, _, _, [], _),
    _ = _(_);
  return _(
    _({
      ..._._(_, _(_)),
      ..._(_, _),
    }),
  );
}
function _(_, _, _, _ = []) {
  let _ = _(_, _, _, _);
  return _._(_, _);
}
function _(_, _, _, _) {
  let _ = _(_, _, _, _);
  return _._(_, _);
}
function _(_, _, _, _) {
  let _ = _(_, _, _, _);
  return (
    _ &&
      _.month !== void 0 &&
      _.monthCode === void 0 &&
      _.year === void 0 &&
      (_.year = _),
    _._(_, _)
  );
}
function _(_, _) {
  return _(_(_(_, _, [], 1), _(_)));
}
function _(_) {
  let _ = _(_, _);
  return _(
    _({
      ..._,
      ..._,
    }),
  );
}
function _(_, _, _, _ = [], _ = []) {
  return _(_, [..._.fields(_), ..._].sort(), _);
}
function _(_, _, _, _ = !_) {
  let _ = {},
    _,
    _ = 0;
  for (let _ of _) {
    if (_ === _) throw RangeError(_(_));
    if (_ === `constructor` || _ === `__proto__`) throw RangeError(_(_));
    let _ = _[_];
    if (_ !== void 0) (_ = 1), _[_] && (_ = _[_](_, _)), (_[_] = _);
    else if (_) {
      if (_.includes(_)) throw TypeError(_(_));
      _[_] = _[_];
    }
    _ = _;
  }
  if (_ && !_) throw TypeError(_(_));
  return _;
}
function _(_, _) {
  return _(
    _({
      ..._,
      ..._,
    }),
    _,
  );
}
function _(_, _, _, _, _) {
  let { calendar: _, timeZone: _ } = _,
    _ = _(_),
    _ = _(_),
    _ = [..._.fields(_), ..._].sort(),
    _ = ((_) => {
      let _ = _(_, _),
        _ = _(_.offsetNanoseconds),
        _ = _(_.calendar),
        [_, _, _] = _._(_),
        [_, _] = _._(_, _),
        _ = _(_, _);
      return {
        ..._(_),
        year: _,
        monthCode: _,
        day: _,
        offset: _,
      };
    })(_),
    _ = _(_, _),
    _ = _._(_, _),
    _ = {
      ..._,
      ..._,
    },
    [_, _, _] = _(_, 2);
  return _(
    _(
      _,
      {
        ..._._(_, _(_)),
        ..._(_(_), _),
      },
      _(_.offset),
      _,
      _,
    ),
    _,
    _,
  );
}
function _(_, _, _, _) {
  let _ = _(_.calendar),
    _ = [..._.fields(_), ..._].sort(),
    _ = {
      ..._((_ = _)),
      hour: _.isoHour,
      minute: _.isoMinute,
      second: _.isoSecond,
      millisecond: _.isoMillisecond,
      microsecond: _.isoMicrosecond,
      nanosecond: _.isoNanosecond,
    };
  var _;
  let _ = _(_, _),
    _ = _(_),
    _ = _._(_, _),
    _ = {
      ..._,
      ..._,
    };
  return _(
    _({
      ..._._(_, _(_)),
      ..._(_(_), _),
    }),
  );
}
function _(_, _, _, _) {
  let _ = _(_.calendar),
    _ = _.fields(_).sort(),
    _ = _(_),
    _ = _(_, _),
    _ = _._(_, _);
  return _._(_, _);
}
function _(_, _, _, _) {
  let _ = _(_.calendar),
    _ = _.fields(_).sort(),
    _ = ((_) => {
      let _ = _(_.calendar),
        [_, _] = _._(_),
        [_, _] = _._(_, _);
      return {
        year: _,
        monthCode: _(_, _),
      };
    })(_),
    _ = _(_, _),
    _ = _._(_, _);
  return _._(_, _);
}
function _(_, _, _, _) {
  let _ = _(_.calendar),
    _ = _.fields(_).sort(),
    _ = ((_) => {
      let _ = _(_.calendar),
        [_, _, _] = _._(_),
        [_, _] = _._(_, _);
      return {
        monthCode: _(_, _),
        day: _,
      };
    })(_),
    _ = _(_, _),
    _ = _._(_, _);
  return _._(_, _);
}
function _(_, _, _) {
  return _(
    ((_, _, _) =>
      _(
        {
          ..._(_, _),
          ..._(_, _),
        },
        _(_),
      ))(_, _, _),
  );
}
function _(_, _) {
  return _(
    ((_ = _),
    (_ = _),
    _({
      ..._,
      ..._(_, _),
    })),
  );
  var _, _;
}
function _(_, _) {
  let _ = _(_, _, _);
  return _._(_);
}
function _(_, _, _) {
  let _ = _(_, _, _);
  return _._(_, _);
}
function _(_, _, _, _, _) {
  (_ = _((_ = _.fields(_)), _)), (_ = _(_, (_ = _.fields(_)), []));
  let _ = _._(_, _);
  return (_ = _(_, [..._, ..._].sort(), [])), _._(_);
}
function _(_, _) {
  let _ = _(_),
    _ = _(this, _),
    _ = _(this, _, _, _),
    _ = _(this, _, _, _, _);
  return _(_(this._(_, _, _)), this._ || `iso8601`);
}
function _(_, _) {
  let _ = _(_),
    _ = _(this, _),
    _ = _(this, _, _, _);
  return _(_(this._(_, _, 1)), this._ || `iso8601`);
}
function _(_, _) {
  let _ = _(_),
    _,
    _,
    _,
    _ = _.eraYear !== void 0 || _.year !== void 0 ? _(this, _) : void 0,
    _ = !this._;
  if ((_ === void 0 && _ && (_ = _), _ !== void 0)) {
    let _ = _(this, _, _, _);
    _ = _(this, _, _, _, _);
    let _ = this._(_);
    (_ = _(_, _)), (_ = _ === _);
  } else {
    if (_.monthCode === void 0) throw TypeError(_);
    if ((([_, _] = _(_.monthCode)), this._ && this._ !== _ && this._ !== _))
      if (this._ && _(this._) === `coptic` && _ === 0) {
        let _ = _ || _ !== 13 ? 30 : 6;
        (_ = _.day), (_ = _(_, 1, _));
      } else if (this._ && _(this._) === `chinese` && _ === 0) {
        let _ =
          !_ || (_ !== 1 && _ !== 9 && _ !== 10 && _ !== 11 && _ !== 12)
            ? 30
            : 29;
        (_ = _.day), (_ = _(_, 1, _));
      } else _ = _.day;
    else _ = _(this, _, _(this, _, _, _), _, _);
  }
  let _ = this._(_, _, _);
  if (!_) throw RangeError(`Cannot guess year`);
  let [_, _] = _;
  return _(_(this._(_, _, _)), this._ || `iso8601`);
}
function _(_) {
  return _(this) && _.includes(`year`) ? [..._, ..._] : _;
}
function _(_, _) {
  let _ = Object.assign(Object.create(null), _);
  return _(_, _, _), _(this) && (_(_, _, _), this._ === _ && _(_, _, _, _)), _;
}
function _(_, _) {
  let _ = _(_),
    _ = _[_._ || ``] || {},
    { era: _, eraYear: _, year: _ } = _;
  if (_ !== void 0 || _ !== void 0) {
    if (_ === void 0 || _ === void 0) throw TypeError(_);
    if (!_) throw RangeError(_);
    let _ = _[_[_] || _];
    if (_ === void 0) throw RangeError(_(_));
    let _ = _(_, _);
    if (_ !== void 0 && _ !== _) throw RangeError(_);
    _ = _;
  } else if (_ === void 0) throw TypeError(_(_));
  return _;
}
function _(_, _, _, _) {
  let { month: _, monthCode: _ } = _;
  if (_ !== void 0) {
    let _ = ((_, _, _, _) => {
      let _ = _._(_),
        [_, _] = _(_),
        _ = _(_, _, _);
      if (_) {
        let _ = _(_);
        if (_ === void 0) throw RangeError(_);
        if (_ > 0) {
          if (_ > _) throw RangeError(_);
          if (_ === void 0) {
            if (_ === 1) throw RangeError(_);
            _--;
          }
        } else if (_ !== -_ || (_ === void 0 && _ === 1)) throw RangeError(_);
      }
      return _;
    })(_, _, _, _);
    if (_ !== void 0 && _ !== _) throw RangeError(_);
    (_ = _), (_ = 1);
  } else if (_ === void 0) throw TypeError(_);
  return _(`month`, _, 1, _._(_), _);
}
function _(_, _, _, _, _) {
  return _(_, `day`, 1, _._(_, _), _);
}
function _(_, _, _, _) {
  let _ = 0,
    _ = [];
  for (let _ of _) _[_] === void 0 ? _.push(_) : (_ = 1);
  if ((Object.assign(_, _), _)) for (let _ of _ || _) delete _[_];
}
function _(_) {
  let _ = _(_.calendar),
    [_, _, _] = _._(_),
    [_, _] = _._(_, _);
  return {
    year: _,
    monthCode: _(_, _),
    day: _,
  };
}
function _(_) {
  return _(_(_(_(_))));
}
function _(_, _, _, _, _ = _) {
  return _(_(_(_(_))), _(_), _(_));
}
function _(_, _, _, _, _ = 0, _ = 0, _ = 0, _ = 0, _ = 0, _ = 0, _ = _) {
  return _(_(_(_(_, _(_, [_, _, _, _, _, _, _, _, _])))), _(_));
}
function _(_, _, _, _, _ = _) {
  return _(
    _(
      _(
        _(_, {
          isoYear: _,
          isoMonth: _,
          isoDay: _,
        }),
      ),
    ),
    _(_),
  );
}
function _(_, _, _, _ = _, _ = 1) {
  let _ = _(_),
    _ = _(_),
    _ = _(_);
  return _(
    _(
      _({
        isoYear: _,
        isoMonth: _,
        isoDay: _(_),
      }),
    ),
    _,
  );
}
function _(_, _, _, _ = _, _ = _) {
  let _ = _(_),
    _ = _(_),
    _ = _(_);
  return _(
    _(
      _({
        isoYear: _(_),
        isoMonth: _,
        isoDay: _,
      }),
    ),
    _,
  );
}
function _(_ = 0, _ = 0, _ = 0, _ = 0, _ = 0, _ = 0) {
  return _(_(_(_, _(_, [_, _, _, _, _, _])), 1));
}
function _(
  _ = 0,
  _ = 0,
  _ = 0,
  _ = 0,
  _ = 0,
  _ = 0,
  _ = 0,
  _ = 0,
  _ = 0,
  _ = 0,
) {
  return _(_(_(_, _(_, [_, _, _, _, _, _, _, _, _, _]))));
}
function _(_, _, _ = _) {
  return _(_.epochNanoseconds, _, _);
}
function _(_) {
  return _(_.epochNanoseconds);
}
function _(_, _) {
  return _(_(_, _));
}
function _(_, _) {
  return _(_(_, _));
}
function _(_, _) {
  return _(_(_, _));
}
function _(_, _, _, _) {
  return _(
    _(
      ((_, _, _, _) => {
        let _ = ((_) => _(_(_)))(_);
        return _(_(_), _, _);
      })(_, _, _, _),
    ),
    _,
    _.calendar,
  );
}
function _(_, _, _, _, _) {
  let _ = _(_.timeZone),
    _ = _.plainTime,
    _ = _ === void 0 ? void 0 : _(_),
    _ = _(_),
    _;
  return (
    (_ = _
      ? _(_, {
          ..._,
          ..._,
        })
      : _(_, {
          ..._,
          ..._,
        })),
    _(_, _, _.calendar)
  );
}
function _(_, _ = _) {
  return _(
    _({
      ..._,
      ..._,
    }),
  );
}
function _(_, _, _) {
  return _(_(_.calendar), _);
}
function _(_, _, _) {
  return _(_(_.calendar), _);
}
function _(_, _, _, _) {
  return ((_, _, _) => _(_, _, _, _(_), _))(_(_.calendar), _, _);
}
function _(_, _, _, _) {
  return ((_, _, _) => _(_, _, _, _(_), _))(_(_.calendar), _, _);
}
function _(_) {
  return _(_(_(_(_), _)));
}
function _(_) {
  return _(_(_(_(_))));
}
function _(_, _, _) {
  let _ = new Set(_);
  return (_, _) => {
    let _ = _ && _(_, _);
    if (
      !_(
        (_ = ((_, _) => {
          let _ = {};
          for (let _ in _) _.has(_) || (_[_] = _[_]);
          return _;
        })(_, _)),
        _,
      )
    ) {
      if (_ && _) throw TypeError(`Invalid formatting options`);
      _ = {
        ..._,
        ..._,
      };
    }
    return (
      _ &&
        ((_.timeZone = _), [`full`, `long`].includes(_._) && (_._ = `medium`)),
      _
    );
  };
}
function _(_, _ = _, _ = 0) {
  let [_, , , _] = _;
  return (_, _ = _, ..._) => {
    let _ = _(_ && _(..._), _, _, _, _);
    return [_, ..._(_, _.resolvedOptions(), _)];
  };
}
function _(_, _, _, _, _) {
  if (((_ = _(_, _)), _)) {
    if (_.timeZone !== void 0) throw TypeError(_);
    _.timeZone = _;
  }
  return new _(_, _);
}
function _() {
  return (
    new _(void 0, {
      calendar: _,
    }).resolvedOptions().calendar === _
  );
}
function _(_, _, _) {
  let [, _, _] = _;
  return _.map(
    (_) => (
      _.calendar &&
        ((_, _, _) => {
          if ((_ || _ !== `iso8601`) && _ !== _) throw RangeError(_);
        })(_.calendar, _.calendar, _),
      _(_, _)
    ),
  );
}
function _(_, _, _) {
  let _ = _.timeZone,
    _ = _(_),
    _ = {
      ..._(_, _),
      ...(_ || _),
    },
    _;
  return (
    (_ = _ ? _(_, _, _.offsetNanoseconds, 2) : _(_, _)), _(_, _, _.calendar)
  );
}
function _(_, _ = _) {
  return _(
    _({
      ..._,
      ..._,
    }),
  );
}
function _(_, _) {
  return {
    ..._,
    calendar: _,
  };
}
function _(_, _) {
  return {
    ..._,
    timeZone: _,
  };
}
function _(_) {
  let _ = _();
  return _(_, _._(_));
}
function _() {
  return _(Date.now(), _);
}
function _() {
  return new _().resolvedOptions().timeZone;
}
var _ = (_, _) => `Non-integer ${_}: ${_}`,
  _ = (_, _) => `Non-positive ${_}: ${_}`,
  _ = (_, _) => `Non-finite ${_}: ${_}`,
  _ = (_) => `Cannot convert bigint to ${_}`,
  _ = (_) => `Invalid bigint: ${_}`,
  _ = `Cannot convert Symbol to string`,
  _ = `Invalid object`,
  _ = (_, _, _, _, _) =>
    _ ? _(_, _[_], _[_], _[_]) : _(_, _) + `; must be between ${_}-${_}`,
  _ = (_, _) => `Invalid ${_}: ${_}`,
  _ = (_) => `Missing ${_}`,
  _ = (_) => `Invalid field ${_}`,
  _ = (_) => `Duplicate field ${_}`,
  _ = (_) => `No valid fields: ` + _.join(),
  _ = `Invalid bag`,
  _ = (_, _, _) => _(_, _) + `; must be ` + Object.keys(_).join(),
  _ = `Cannot use valueOf`,
  _ = `Invalid calling context`,
  _ = `Forbidden era/eraYear`,
  _ = `Mismatching era/eraYear`,
  _ = `Mismatching year/eraYear`,
  _ = (_) => `Invalid era: ${_}`,
  _ = (_) => `Missing year` + (_ ? `/era/eraYear` : ``),
  _ = (_) => `Invalid monthCode: ${_}`,
  _ = `Mismatching month/monthCode`,
  _ = `Missing month/monthCode`,
  _ = `Invalid leap month`,
  _ = `Invalid protocol results`,
  _ = (_) => _(`Calendar`, _),
  _ = `Mismatching Calendars`,
  _ = (_) => _(`TimeZone`, _),
  _ = `Mismatching TimeZones`,
  _ = `Forbidden ICU TimeZone`,
  _ = `Out-of-bounds offset`,
  _ = `Out-of-bounds TimeZone gap`,
  _ = `Invalid TimeZone offset`,
  _ = `Ambiguous offset`,
  _ = `Out-of-bounds date`,
  _ = `Out-of-bounds duration`,
  _ = `Cannot mix duration signs`,
  _ = `Missing relativeTo`,
  _ = `Cannot use large units`,
  _ = `Required smallestUnit or largestUnit`,
  _ = `smallestUnit > largestUnit`,
  _ = (_) => `Cannot parse: ${_}`,
  _ = (_) => `Invalid substring: ${_}`,
  _ = (_) => `Cannot format ${_}`,
  _ = `Mismatching types for formatting`,
  _ = `Cannot specify TimeZone`,
  _ = _(_, (_, _) => _),
  _ = _(_, (_, _, _) => _),
  _ = _(_, 2),
  _ = {
    nanosecond: 0,
    microsecond: 1,
    millisecond: 2,
    second: 3,
    minute: 4,
    hour: 5,
    day: 6,
    week: 7,
    month: 8,
    year: 9,
  },
  _ = Object.keys(_),
  _ = 864e5,
  _ = 1e3,
  _ = 1e3,
  _ = 1e6,
  _ = 1e9,
  _ = 6e10,
  _ = 36e11,
  _ = 864e11,
  _ = [1, _, _, _, _, _, _],
  _ = _.slice(0, 6),
  _ = _(_),
  _ = [`offset`],
  _ = [`timeZone`],
  _ = _.concat(_),
  _ = _.concat(_),
  _ = [`era`, `eraYear`],
  _ = _.concat([`year`]),
  _ = [`year`],
  _ = [`monthCode`],
  _ = [`month`].concat(_),
  _ = [`day`],
  _ = _.concat(_),
  _ = _.concat(_),
  _ = _.concat(_),
  _ = _.concat(_),
  _ = _.concat(_),
  _ = _(_, 0),
  _ = `iso8601`,
  _ = `gregory`,
  _ = `japanese`,
  _ = {
    [_]: {
      "gregory-inverse": -1,
      gregory: 0,
    },
    [_]: {
      "japanese-inverse": -1,
      japanese: 0,
      meiji: 1867,
      taisho: 1911,
      showa: 1925,
      heisei: 1988,
      reiwa: 2018,
    },
    ethiopic: {
      ethioaa: 0,
      ethiopic: 5500,
    },
    coptic: {
      "coptic-inverse": -1,
      coptic: 0,
    },
    roc: {
      "roc-inverse": -1,
      roc: 0,
    },
    buddhist: {
      _: 0,
    },
    islamic: {
      _: 0,
    },
    indian: {
      saka: 0,
    },
    persian: {
      _: 0,
    },
  },
  _ = {
    [_]: {
      bce: `gregory-inverse`,
      _: `gregory`,
    },
    [_]: {
      bce: `japanese-inverse`,
      _: `japanese`,
    },
    ethiopic: {
      era0: `ethioaa`,
      era1: `ethiopic`,
    },
    coptic: {
      era0: `coptic-inverse`,
      era1: `coptic`,
    },
    roc: {
      broc: `roc-inverse`,
      minguo: `roc`,
    },
  },
  _ = {
    chinese: 13,
    dangi: 13,
    hebrew: -6,
  },
  _ = _(_, `string`),
  _ = _(_, `boolean`),
  _ = _(_, `number`),
  _ = _.map((_) => _ + `s`),
  _ = _(_),
  _ = _.slice(0, 6),
  _ = _.slice(6),
  _ = _.slice(1),
  _ = _(_),
  _ = _(_, 0),
  _ = _(_, 0),
  _ = _(_, _),
  _ = [
    `isoNanosecond`,
    `isoMicrosecond`,
    `isoMillisecond`,
    `isoSecond`,
    `isoMinute`,
    `isoHour`,
  ],
  _ = [`isoDay`, `isoMonth`, `isoYear`],
  _ = _.concat(_),
  _ = _(_),
  _ = _(_),
  _ = _(_),
  _ = _(_, 0),
  _ = _(_, _),
  _ = 1e8,
  _ = _ * _,
  _ = [_, 0],
  _ = [-1e8, 0],
  _ = 275760,
  _ = -271821,
  _ = Intl.DateTimeFormat,
  _ = 1970,
  _ = 1972,
  _ = 12,
  _ = _(1868, 9, 8),
  _ = _(_, WeakMap),
  _ = `smallestUnit`,
  _ = `unit`,
  _ = `roundingMode`,
  _ = `roundingIncrement`,
  _ = `fractionalSecondDigits`,
  _ = `relativeTo`,
  _ = `direction`,
  _ = {
    constrain: 0,
    reject: 1,
  },
  _ = Object.keys(_),
  _ = {
    compatible: 0,
    reject: 1,
    earlier: 2,
    later: 3,
  },
  _ = {
    reject: 0,
    use: 1,
    prefer: 2,
    ignore: 3,
  },
  _ = {
    auto: 0,
    never: 1,
    critical: 2,
    always: 3,
  },
  _ = {
    auto: 0,
    never: 1,
    critical: 2,
  },
  _ = {
    auto: 0,
    never: 1,
  },
  _ = {
    floor: 0,
    halfFloor: 1,
    ceil: 2,
    halfCeil: 3,
    trunc: 4,
    halfTrunc: 5,
    expand: 6,
    halfExpand: 7,
    halfEven: 8,
  },
  _ = {
    previous: -1,
    next: 1,
  },
  _ = _(_, _),
  _ = _(_, `largestUnit`),
  _ = _(_, _),
  _ = _(_, `overflow`, _),
  _ = _(_, `disambiguation`, _),
  _ = _(_, `offset`, _),
  _ = _(_, `calendarName`, _),
  _ = _(_, `timeZoneName`, _),
  _ = _(_, `offset`, _),
  _ = _(_, _, _),
  _ = `PlainYearMonth`,
  _ = `PlainMonthDay`,
  _ = `PlainDate`,
  _ = `PlainDateTime`,
  _ = `PlainTime`,
  _ = `ZonedDateTime`,
  _ = `Instant`,
  _ = `Duration`,
  _ = [
    Math.floor,
    (_) => (_(_) ? Math.floor(_) : Math.round(_)),
    Math.ceil,
    (_) => (_(_) ? Math.ceil(_) : Math.round(_)),
    Math.trunc,
    (_) => (_(_) ? Math.trunc(_) || 0 : Math.round(_)),
    (_) => (_ < 0 ? Math.floor(_) : Math.ceil(_)),
    (_) => Math.sign(_) * Math.round(Math.abs(_)) || 0,
    (_) => (_(_) ? (_ = Math.trunc(_) || 0) + (_ % 2) : Math.round(_)),
  ],
  _ = `UTC`,
  _ = 5184e3,
  _ = _(1847),
  _ = _(
    (() => {
      let _ = new Date();
      return (_.getTime() === 0 ? 2040 : _.getUTCFullYear()) + 10;
    })(),
  ),
  _ = /0+$/,
  _ = _(_, WeakMap),
  _ = 2 ** 32 - 1,
  _ = _((_) => {
    let _ = _(_);
    return typeof _ == `object` ? new _(_) : new _(_ || 0);
  }),
  _ = class {
    constructor(_) {
      this._ = _;
    }
    N() {
      return this._;
    }
    v(_) {
      return (
        ((_) => {
          let _ = _({
            ..._,
            ..._,
          });
          if (!_ || Math.abs(_[0]) > 1e8) throw RangeError(_);
        })(_),
        [_(_, this._)]
      );
    }
    l() {}
  },
  _ = class {
    constructor(_) {
      this._ = ((_) => {
        function _(_) {
          let [_, _] = _(_(_, _, _)),
            _ = _(_),
            _ = _(_);
          return _ === _ ? _ : _(_(_, _), _, _, _);
        }
        function _(_, _, _, _) {
          let _, _;
          for (
            ;
            (_ === void 0 ||
              (_ = _ < _[0] ? _ : _ >= _[1] ? _ : void 0) === void 0) &&
            (_ = _[1] - _[0]);
          ) {
            let _ = _[0] + Math.floor(_ / 2);
            _(_) === _ ? (_[1] = _) : (_[0] = _ + 1);
          }
          return _;
        }
        let _ = _(_),
          _ = _(_),
          _ = _,
          _ = _;
        return {
          _(_) {
            let _ = _(_ - 86400),
              _ = _(_ + 86400),
              _ = _ - _,
              _ = _ - _;
            if (_ === _) return [_];
            let _ = _(_);
            return _ === _(_) ? [_ - _] : _ > _ ? [_, _] : [];
          },
          _: _,
          _(_, _) {
            let _ = _(_, _, _),
              [_, _] = _(_),
              _ = _ * _,
              _ =
                _ < 0
                  ? () => _ > _ || ((_ = _), 0)
                  : () => _ < _ || ((_ = _), 0);
            for (; _(); ) {
              let _ = _(_),
                _ = _(_);
              if (_ !== _) {
                let _ = _(_, _);
                _(_, _, _);
                let _ = _[0];
                if ((_(_, _) || 1) === _) return _;
              }
              (_ += _), (_ += _);
            }
          },
        };
      })(
        ((_) => (_) => {
          let _ = _(_, _ * _);
          return (
            _(
              _(_),
              parseInt(_.month),
              parseInt(_.day),
              parseInt(_.hour),
              parseInt(_.minute),
              parseInt(_.second),
            ) - _
          );
        })(_),
      );
    }
    N(_) {
      return this._._(_(_)) * _;
    }
    v(_) {
      let [_, _] = [
        _(
          (_ = _).isoYear,
          _.isoMonth,
          _.isoDay,
          _.isoHour,
          _.isoMinute,
          _.isoSecond,
        ),
        _.isoMillisecond * _ + _.isoMicrosecond * _ + _.isoNanosecond,
      ];
      var _;
      return this._._(_).map((_) => _(_(_(_, _), _)));
    }
    l(_, _) {
      let [_, _] = _(_),
        _ = this._._(_ + (_ > 0 || _ ? 1 : 0), _);
      if (_ !== void 0) return _(_, _);
    }
  },
  _ = `([+-])`,
  _ = `(?:[.,](\\d{1,9}))?`,
  _ = `(?:(?:${_}(\\d{6}))|(\\d{4}))-?(\\d{2})`,
  _ = `([+-])(\\d{2})(?::?(\\d{2})(?::?(\\d{2})(?:[.,](\\d{1,9}))?)?)?`,
  _ =
    _ +
    `-?(\\d{2})(?:[T ](\\d{2})(?::?(\\d{2})(?::?(\\d{2})(?:[.,](\\d{1,9}))?)?)?(Z|([+-])(\\d{2})(?::?(\\d{2})(?::?(\\d{2})(?:[.,](\\d{1,9}))?)?)?)?)?`,
  _ = `\\[(!?)([^\\]]*)\\]`,
  _ = `((?:${_}){0,9})`,
  _ = _(_ + _),
  _ = _(`(?:--)?(\\d{2})-?(\\d{2})` + _),
  _ = _(_ + _),
  _ = _(
    `T?(\\d{2})(?::?(\\d{2})(?::?(\\d{2})(?:[.,](\\d{1,9}))?)?)?(?:([+-])(\\d{2})(?::?(\\d{2})(?::?(\\d{2})(?:[.,](\\d{1,9}))?)?)?)?` +
      _,
  ),
  _ = _(_),
  _ = new RegExp(_, `g`),
  _ = _(
    `${_}?P(\\d+Y)?(\\d+M)?(\\d+W)?(\\d+D)?(?:T(?:(\\d+)${_}H)?(?:(\\d+)${_}M)?(?:(\\d+)${_}S)?)?`,
  ),
  _ = _(
    (_) =>
      new _(`en`, {
        calendar: _,
        timeZone: _,
        era: `short`,
        year: `numeric`,
        month: `numeric`,
        day: `numeric`,
        hour: `numeric`,
        minute: `numeric`,
        second: `numeric`,
        hour12: 0,
      }),
  ),
  _ =
    /^(AC|AE|AG|AR|AS|BE|BS|CA|CN|CS|CT|EA|EC|IE|IS|JS|MI|NE|NS|PL|PN|PR|PS|SS|VS)T$/,
  _ = /[^\w\/:+-]+/,
  _ = /^M(\d{2})(L?)$/,
  _ = _(_),
  _ = _(
    (_) =>
      new _(`en`, {
        calendar: _,
        timeZone: _,
        era: `short`,
        year: `numeric`,
        month: `short`,
        day: `numeric`,
        hour12: 0,
      }),
  ),
  _ = {
    _: _,
    _: _,
    _: _,
    _: _,
    _: _,
    fields: _,
    _: _,
    inLeapYear: _,
    monthsInYear: _,
    daysInMonth: _,
    daysInYear: _,
    dayOfYear: _,
    era(_) {
      return this._(_)[0];
    },
    eraYear(_) {
      return this._(_)[1];
    },
    monthCode(_) {
      let [_, _] = this._(_),
        [_, _] = this._(_, _);
      return _(_, _);
    },
    dayOfWeek: _,
    daysInWeek: _,
  },
  _ = {
    _: _,
    _: _,
    _: _,
  },
  _ = Object.assign(
    {},
    _,
    Object.assign(
      {},
      {
        dayOfYear: _,
        _: _,
        _: _,
      },
      {
        weekOfYear: _,
        yearOfWeek: _,
        _(_) {
          function _(_) {
            return (7 - _ < _ ? 7 : 0) - _;
          }
          function _(_) {
            let _ = _(_ + _),
              _ = _ || 1;
            return (_ = (_ + (_(_(_ + _ * _, 7)) - _) * _) / 7);
          }
          let _ = this._ ? 1 : 4,
            _ = _(_),
            _ = this.dayOfYear(_),
            _ = _(_ - 1, 7),
            _ = _ - 1,
            _ = _(_ - _, 7),
            _ = _(_),
            _,
            _ = Math.floor((_ - _) / 7) + 1,
            _ = _.isoYear;
          return _ ? _ > _(0) && ((_ = 1), _++) : ((_ = _(-1)), _--), [_, _, _];
        },
      },
    ),
    {
      _: _,
      _: _,
      _: _,
      _: _,
      _: _,
      _: _,
      _: _,
      _: _,
      _: _,
      _: _,
      _: _,
      _: _,
      _: _,
      year(_) {
        return _.isoYear;
      },
      month(_) {
        return _.isoMonth;
      },
      day: _,
    },
  ),
  _ = {
    _: _,
    _: _,
    _: _,
  },
  _ = Object.assign(
    {},
    _,
    Object.assign(
      {},
      {
        dayOfYear: _,
        _: _,
        _: _,
      },
      {
        _() {
          return [];
        },
      },
      {
        weekOfYear: _,
        yearOfWeek: _,
      },
    ),
    {
      _: _,
      _: _,
      _: _,
      _: _,
      _: _,
      _: _,
      _: _,
      _: _,
      _: _,
      _: _,
      _: _,
      _: _,
      _: _,
      year(_) {
        return this._(_).year;
      },
      month(_) {
        let { year: _, _: _ } = this._(_),
          { _: _ } = this._(_);
        return _[_] + 1;
      },
      day: _,
    },
  ),
  _ = _(_, _),
  _ = _(_, _),
  _ = Object.assign(
    {},
    {
      era: _,
      eraYear: _,
      year: _,
      month: _,
      monthCode(_) {
        let _ = _(_);
        return _(_), _;
      },
      day: _,
    },
    _(_, _),
    _(_, _),
    {
      offset(_) {
        let _ = _(_);
        return _(_), _;
      },
    },
  ),
  _ = _(_, _, _),
  _ = _(_, _, _),
  _ = `numeric`,
  _ = [`timeZoneName`],
  _ = {
    month: _,
    day: _,
  },
  _ = {
    year: _,
    month: _,
  },
  _ = Object.assign({}, _, {
    day: _,
  }),
  _ = {
    hour: _,
    minute: _,
    second: _,
  },
  _ = Object.assign({}, _, _),
  _ = Object.assign({}, _, {
    timeZoneName: `short`,
  }),
  _ = Object.keys(_),
  _ = Object.keys(_),
  _ = Object.keys(_),
  _ = Object.keys(_),
  _ = [`dateStyle`],
  _ = _.concat(_),
  _ = _.concat(_),
  _ = _.concat(_, [`weekday`]),
  _ = _.concat([`dayPeriod`, `timeStyle`, `fractionalSecondDigits`]),
  _ = _.concat(_),
  _ = _.concat(_),
  _ = _.concat(_),
  _ = _.concat([`day`, `weekday`], _),
  _ = _.concat([`year`, `weekday`], _),
  _ = _(_, _),
  _ = _(_, _),
  _ = _(_, _, _),
  _ = _(_, _, _),
  _ = _(_, _, _),
  _ = _(_, _, _),
  _ = _(_, _, _),
  _ = {},
  _ = _(),
  _ = [_, _],
  _ = [
    _,
    _,
    0,
    (_, _) => {
      let _ = _.timeZone;
      if (_ && _.timeZone !== _) throw RangeError(_);
      return _;
    },
  ],
  _ = [_, _],
  _ = [_, _],
  _ = [_, (_) => _(_) / _],
  _ = [_, _, _],
  _ = [_, _, _];
function _(_, _, _, _, _, _) {
  function _(..._) {
    if (!(this instanceof _)) throw TypeError(_);
    {
      let _ = _(..._);
      _(this, _), _(this, _, _);
    }
  }
  function _(_, _) {
    return Object.defineProperties(function (..._) {
      return _.call(this, _(this), ..._);
    }, _(_));
  }
  function _(_) {
    let _ = _(_);
    if (!_ || _.branding !== _) throw TypeError(_);
    return _;
  }
  return (
    Object.defineProperties(_.prototype, {
      ..._(_(_, _)),
      ..._(_(_, _)),
      ..._(`Temporal.` + _),
    }),
    Object.defineProperties(_, {
      ..._(_),
      ..._(_),
    }),
    [
      _,
      (_) => {
        let _ = Object.create(_.prototype);
        return _(_, _), _(_, _, _), _;
      },
      _,
    ]
  );
}
function _(_) {
  if (_(_) || _.calendar !== void 0 || _.timeZone !== void 0)
    throw TypeError(_);
  return _;
}
function _(_, _, _) {
  _.name === `dbg` &&
    Object.defineProperty(_, "o", {
      value: _(_),
      writable: 0,
      enumerable: 0,
      configurable: 0,
    });
}
function _(_) {
  return _(_) || `iso8601`;
}
function _(_) {
  let { calendar: _ } = _;
  if (_ !== void 0) return _(_);
}
function _(_) {
  if (_(_)) {
    let { calendar: _ } = _(_) || {};
    if (!_) throw TypeError(_(_));
    return _;
  }
  return ((_) => _(_(_(_))))(_);
}
function _(_) {
  let _ = {};
  for (let _ in _)
    _[_] = (_) => {
      let { calendar: _ } = _;
      return _(_)[_](_);
    };
  return _;
}
function _() {
  throw TypeError(_);
}
function _(_) {
  if (_(_)) {
    let { timeZone: _ } = _(_) || {};
    if (!_) throw TypeError(_(_));
    return _;
  }
  return ((_) => _(_(_(_))))(_);
}
function _(_) {
  if (_(_)) {
    let _ = _(_);
    return _ && _.branding === `Duration` ? _ : _(_);
  }
  return _(_);
}
function _(_) {
  if (_ !== void 0) {
    if (_(_)) {
      let _ = _(_) || {};
      switch (_.branding) {
        case _:
        case _:
          return _;
        case _:
          return _(_);
      }
      let _ = _(_);
      return {
        ..._(_, _, _(_), _),
        calendar: _,
      };
    }
    return _(_);
  }
}
function _(_, _) {
  if (_(_)) {
    let _ = _(_) || {};
    switch (_.branding) {
      case _:
        return _(_), _;
      case _:
        return _(_), _(_);
      case _:
        return _(_), _(_, _);
    }
    return _(_, _);
  }
  let _ = _(_);
  return _(_), _;
}
function _(_) {
  return _ === void 0 ? void 0 : _(_);
}
function _(_, _) {
  if (_(_)) {
    let _ = _(_) || {};
    switch (_.branding) {
      case _:
        return _(_), _;
      case _:
        return (
          _(_),
          _({
            ..._,
            ..._,
          })
        );
      case _:
        return _(_), _(_, _);
    }
    return _(_(_(_)), _, _);
  }
  let _ = _(_);
  return _(_), _;
}
function _(_, _) {
  if (_(_)) {
    let _ = _(_);
    if (_ && _.branding === `PlainMonthDay`) return _(_), _;
    let _ = _(_);
    return _(_(_ || `iso8601`), !_, _, _);
  }
  let _ = _(_, _);
  return _(_), _;
}
function _(_, _) {
  if (_(_)) {
    let _ = _(_);
    return _ && _.branding === `PlainYearMonth` ? (_(_), _) : _(_(_(_)), _, _);
  }
  let _ = _(_, _);
  return _(_), _;
}
function _(_, _) {
  if (_(_)) {
    let _ = _(_) || {};
    switch (_.branding) {
      case _:
        return _(_), _;
      case _:
        return _(_), _(_);
      case _:
        return _(_), _(_, _);
    }
    return _(_(_(_)), _, _);
  }
  let _ = _(_);
  return _(_), _;
}
function _(_, _) {
  if (_(_)) {
    let _ = _(_);
    if (_ && _.branding === `ZonedDateTime`) return _(_), _;
    let _ = _(_);
    return _(_, _, _(_), _, _, _);
  }
  return _(_, _);
}
function _(_) {
  return _((_) => (_) => _(_(_)), _);
}
function _(_) {
  return _(_, _);
}
function _(_) {
  if (_(_)) {
    let _ = _(_);
    if (_)
      switch (_.branding) {
        case _:
          return _;
        case _:
          return _(_.epochNanoseconds);
      }
  }
  return _(_);
}
function _() {
  function _(_, _) {
    return new _(_, _);
  }
  function _(_, _ = Object.create(null)) {
    _.set(
      this,
      ((_, _) => {
        let _ = new _(_, _),
          _ = _.resolvedOptions(),
          _ = _.locale,
          _ = _(Object.keys(_), _),
          _ = _(_),
          _ = (_, ..._) => {
            if (_) {
              if (_.length !== 2) throw TypeError(_);
              for (let _ of _) if (_ === void 0) throw TypeError(_);
            }
            _ || _[0] !== void 0 || (_ = []);
            let _ = _.map((_) => _(_) || Number(_)),
              _,
              _ = 0;
            for (let _ of _) {
              let _ = typeof _ == `object` ? _.branding : void 0;
              if (_++ && _ !== _) throw TypeError(_);
              _ = _;
            }
            return _ ? _(_)(_, _, ..._) : [_, ..._];
          };
        return (_._ = _), _;
      })(_, _),
    );
  }
  let _ = _.prototype,
    _ = Object.getOwnPropertyDescriptors(_),
    _ = Object.getOwnPropertyDescriptors(_);
  for (let _ in _) {
    let _ = _[_],
      _ = _.startsWith(`format`) && _(_);
    typeof _.value == `function`
      ? (_.value = _ === `constructor` ? _ : _ || _(_))
      : _ &&
        ((_.get = function () {
          if (!_.has(this)) throw TypeError(`Invalid calling context`);
          return (..._) => _.apply(this, _);
        }),
        Object.defineProperties(_.get, _(`get ${_}`)));
  }
  return (
    (_.prototype.value = _.prototype = Object.create({}, _)),
    Object.defineProperties(_, _),
    _
  );
}
function _(_) {
  return Object.defineProperties(function (..._) {
    let [_, ..._] = _.get(this)(_.includes(`Range`), ..._);
    return _[_](..._);
  }, _(_));
}
function _(_) {
  return Object.defineProperties(function (..._) {
    return _.get(this)._[_](..._);
  }, _(_));
}
function _(_) {
  let _ = _[_];
  if (!_) throw TypeError(_(_));
  return _(_, _(_), 1);
}
var _ = new WeakMap(),
  _ = _.get.bind(_),
  _ = _.set.bind(_),
  _ = {
    era: _,
    eraYear: _,
    year: _,
    month: _,
    daysInMonth: _,
    daysInYear: _,
    inLeapYear: _,
    monthsInYear: _,
  },
  _ = {
    monthCode: _,
  },
  _ = {
    day: _,
  },
  _ = _(
    Object.assign({}, _, _, _, {
      dayOfWeek: _,
      dayOfYear: _,
      weekOfYear: _,
      yearOfWeek: _,
      daysInWeek: _,
    }),
  ),
  _ = _({
    ..._,
    ..._,
  }),
  _ = _({
    ..._,
    ..._,
  }),
  _ = {
    calendarId: (_) => _.calendar,
  },
  _ = _((_) => (_) => _[_], _.concat(`sign`)),
  _ = _((_, _) => (_) => _[_[_]], _),
  _ = {
    epochMilliseconds: _,
    epochNanoseconds: _,
  },
  [_, _, _] = _(
    _,
    _,
    {
      ..._,
      blank: _,
    },
    {
      with: (_, _) => _(_(_, _)),
      negated: (_) => _(_(_)),
      abs: (_) => _(_(_)),
      add: (_, _, _) => _(_(_, _, _, 0, _, _(_), _)),
      subtract: (_, _, _) => _(_(_, _, _, 1, _, _(_), _)),
      round: (_, _) => _(_(_, _, _, _, _)),
      total: (_, _) => _(_, _, _, _, _),
      toLocaleString(_, _, _) {
        return Intl.DurationFormat
          ? new Intl.DurationFormat(_, _).format(this)
          : _(_);
      },
      toString: _,
      toJSON: (_) => _(_),
      valueOf: _,
    },
    {
      from: (_) => _(_(_)),
      compare: (_, _, _) => _(_, _, _, _(_), _(_), _),
    },
    _,
  ),
  _ = {
    Instant: _,
    PlainDateTime: _,
    PlainDate: _,
    PlainTime: _,
    PlainYearMonth: _,
    PlainMonthDay: _,
  },
  _ = _(_),
  _ = _(_),
  _ = _(_),
  _ = _(_),
  _ = _(_),
  _ = _(_),
  _ = _(_),
  [_, _] = _(
    _,
    _,
    _,
    {
      with(_, _, _) {
        return _(_(this, _(_), _));
      },
      add: (_, _) => _(_(0, _, _(_))),
      subtract: (_, _) => _(_(1, _, _(_))),
      until: (_, _, _) => _(_(0, _, _(_), _)),
      since: (_, _, _) => _(_(1, _, _(_), _)),
      round: (_, _) => _(_(_, _)),
      equals: (_, _) => _(_, _(_)),
      toLocaleString(_, _, _) {
        let [_, _] = _(_, _, _);
        return _.format(_);
      },
      toString: _,
      toJSON: (_) => _(_),
      valueOf: _,
    },
    {
      from: (_, _) => _(_(_, _)),
      compare: (_, _) => _(_(_), _(_)),
    },
    _,
  ),
  [_, _] = _(
    _,
    _(_, _),
    {
      ..._,
      ..._,
      ..._,
    },
    {
      with: (_, _, _) => _(_(_, _, _(_), _)),
      withCalendar: (_, _) => _(_(_, _(_))),
      withPlainTime: (_, _) => _(_(_, _(_))),
      add: (_, _, _) => _(_(_, 0, _, _(_), _)),
      subtract: (_, _, _) => _(_(_, 1, _, _(_), _)),
      until: (_, _, _) => _(_(_, 0, _, _(_), _)),
      since: (_, _, _) => _(_(_, 1, _, _(_), _)),
      round: (_, _) => _(_(_, _)),
      equals: (_, _) => _(_, _(_)),
      toZonedDateTime: (_, _, _) => _(_(_, _, _(_), _)),
      toPlainDate: (_) => _(_(_)),
      toPlainTime: (_) => _(_(_)),
      toLocaleString(_, _, _) {
        let [_, _] = _(_, _, _);
        return _.format(_);
      },
      toString: _,
      toJSON: (_) => _(_),
      valueOf: _,
    },
    {
      from: (_, _) => _(_(_, _)),
      compare: (_, _) => _(_(_), _(_)),
    },
    _,
  ),
  [_, _, _] = _(
    _,
    _(_, _),
    {
      ..._,
      ..._,
    },
    {
      with: (_, _, _) => _(_(_, _, _(_), _)),
      equals: (_, _) => _(_, _(_)),
      toPlainDate(_, _) {
        return _(_(_, _, this, _));
      },
      toLocaleString(_, _, _) {
        let [_, _] = _(_, _, _);
        return _.format(_);
      },
      toString: _,
      toJSON: (_) => _(_),
      valueOf: _,
    },
    {
      from: (_, _) => _(_(_, _)),
    },
    _,
  ),
  [_, _, _] = _(
    _,
    _(_, _),
    {
      ..._,
      ..._,
    },
    {
      with: (_, _, _) => _(_(_, _, _(_), _)),
      add: (_, _, _) => _(_(_, 0, _, _(_), _)),
      subtract: (_, _, _) => _(_(_, 1, _, _(_), _)),
      until: (_, _, _) => _(_(_, 0, _, _(_), _)),
      since: (_, _, _) => _(_(_, 1, _, _(_), _)),
      equals: (_, _) => _(_, _(_)),
      toPlainDate(_, _) {
        return _(_(_, _, this, _));
      },
      toLocaleString(_, _, _) {
        let [_, _] = _(_, _, _);
        return _.format(_);
      },
      toString: _,
      toJSON: (_) => _(_),
      valueOf: _,
    },
    {
      from: (_, _) => _(_(_, _)),
      compare: (_, _) => _(_(_), _(_)),
    },
    _,
  ),
  [_, _, _] = _(
    _,
    _(_, _),
    {
      ..._,
      ..._,
    },
    {
      with: (_, _, _) => _(_(_, _, _(_), _)),
      withCalendar: (_, _) => _(_(_, _(_))),
      add: (_, _, _) => _(_(_, 0, _, _(_), _)),
      subtract: (_, _, _) => _(_(_, 1, _, _(_), _)),
      until: (_, _, _) => _(_(_, 0, _, _(_), _)),
      since: (_, _, _) => _(_(_, 1, _, _(_), _)),
      equals: (_, _) => _(_, _(_)),
      toZonedDateTime(_, _) {
        return _(
          _(
            _,
            _,
            _,
            _,
            _(_)
              ? _
              : {
                  timeZone: _,
                },
          ),
        );
      },
      toPlainDateTime: (_, _) => _(_(_, _(_))),
      toPlainYearMonth(_) {
        return _(_(_, _, this));
      },
      toPlainMonthDay(_) {
        return _(_(_, _, this));
      },
      toLocaleString(_, _, _) {
        let [_, _] = _(_, _, _);
        return _.format(_);
      },
      toString: _,
      toJSON: (_) => _(_),
      valueOf: _,
    },
    {
      from: (_, _) => _(_(_, _)),
      compare: (_, _) => _(_(_), _(_)),
    },
    _,
  ),
  [_, _] = _(
    _,
    _(_, _, _),
    {
      ..._,
      ..._,
      ..._(_),
      ..._(_),
      offset: (_) => _(_(_).offsetNanoseconds),
      offsetNanoseconds: (_) => _(_).offsetNanoseconds,
      timeZoneId: (_) => _.timeZone,
      hoursInDay: (_) => _(_, _),
    },
    {
      with: (_, _, _) => _(_(_, _, _, _(_), _)),
      withCalendar: (_, _) => _(_(_, _(_))),
      withTimeZone: (_, _) => _(_(_, _(_))),
      withPlainTime: (_, _) => _(_(_, _, _(_))),
      add: (_, _, _) => _(_(_, _, 0, _, _(_), _)),
      subtract: (_, _, _) => _(_(_, _, 1, _, _(_), _)),
      until: (_, _, _) => _(_(_(_, _, 0, _, _(_), _))),
      since: (_, _, _) => _(_(_(_, _, 1, _, _(_), _))),
      round: (_, _) => _(_(_, _, _)),
      startOfDay: (_) => _(_(_, _)),
      equals: (_, _) => _(_, _(_)),
      toInstant: (_) => _(_(_)),
      toPlainDateTime: (_) => _(_(_, _)),
      toPlainDate: (_) => _(_(_, _)),
      toPlainTime: (_) => _(_(_, _)),
      toLocaleString(_, _, _ = {}) {
        let [_, _] = _(_, _, _);
        return _.format(_);
      },
      toString: (_, _) => _(_, _, _),
      toJSON: (_) => _(_, _),
      valueOf: _,
      getTimeZoneTransition(_, _) {
        let { timeZone: _, epochNanoseconds: _ } = _,
          _ = _(_),
          _ = _(_)._(_, _);
        return _
          ? _({
              ..._,
              epochNanoseconds: _,
            })
          : null;
      },
    },
    {
      from: (_, _) => _(_(_, _)),
      compare: (_, _) => _(_(_), _(_)),
    },
    (_) => _(_, _),
  ),
  [_, _, _] = _(
    _,
    _,
    _,
    {
      add: (_, _) => _(_(0, _, _(_))),
      subtract: (_, _) => _(_(1, _, _(_))),
      until: (_, _, _) => _(_(0, _, _(_), _)),
      since: (_, _, _) => _(_(1, _, _(_), _)),
      round: (_, _) => _(_(_, _)),
      equals: (_, _) => _(_, _(_)),
      toZonedDateTimeISO: (_, _) => _(_(_, _(_))),
      toLocaleString(_, _, _) {
        let [_, _] = _(_, _, _);
        return _.format(_);
      },
      toString: (_, _) => _(_, _, _, _),
      toJSON: (_) => _(_, _, _),
      valueOf: _,
    },
    {
      from: (_) => _(_(_)),
      fromEpochMilliseconds: (_) => _(_(_)),
      fromEpochNanoseconds: (_) => _(_(_)),
      compare: (_, _) => _(_(_), _(_)),
    },
    (_) => _(_, _, _),
  ),
  _ = Object.defineProperties(
    {},
    {
      ..._(`Temporal.Now`),
      ..._({
        timeZoneId: () => _(),
        instant: () => _(_(_())),
        zonedDateTimeISO: (_ = _()) => _(_(_(), _(_), _)),
        plainDateTimeISO: (_ = _()) => _(_(_(_(_(_))), _)),
        plainDateISO: (_ = _()) => _(_(_(_(_(_))), _)),
        plainTimeISO: (_ = _()) => _(_(_(_(_(_))))),
      }),
    },
  ),
  _ = Object.defineProperties(
    {},
    {
      ..._(`Temporal`),
      ..._({
        PlainYearMonth: _,
        PlainMonthDay: _,
        PlainDate: _,
        PlainTime: _,
        PlainDateTime: _,
        ZonedDateTime: _,
        Instant: _,
        Duration: _,
        Now: _,
      }),
    },
  ),
  _ = _(),
  _ = new WeakMap();
Object.create(Intl),
  _({
    DateTimeFormat: _,
  });
var _ = _(_(), 1),
  _ = `LY1MepRH-JM-`,
  _ = _(_(), 1),
  _ = _();
function _(_) {
  return (0, _.jsxs)(_, {
    ..._,
    viewBoxSize: 25,
    children: [
      (0, _.jsx)(`path`, {
        fillRule: `evenodd`,
        clipRule: `evenodd`,
        _: `M1.97014 2.77093H4.44345V3.97865C4.44345 5.04817 5.31099 5.91572 6.38052 5.91572C7.45004 5.91572 8.31699 5.04817 8.31699 3.97865V2.77093H16.6836V3.97865C16.6836 5.04817 17.5511 5.91572 18.6207 5.91572C19.6902 5.91572 20.5571 5.04817 20.5571 3.97865V2.77093H23.0293C24.1136 2.77093 25 3.65738 25 4.74167V21.4991C25 22.5834 24.1136 23.4698 23.0293 23.4698H1.97073C0.886445 23.4698 0 22.5834 0 21.4991V4.74167C0 3.65738 0.886445 2.77093 1.97073 2.77093H1.97014ZM23.5005 8.23961V21.4991C23.5005 21.7578 23.2879 21.9704 23.0293 21.9704H1.97073C1.71206 21.9704 1.49946 21.7583 1.49946 21.4991V8.23961H23.5005V8.23961Z`,
        fill: `currentColor`,
      }),
      (0, _.jsx)(`path`, {
        _: `M5.29335 1.08724C5.29335 0.486629 5.77998 0 6.38059 0C6.98061 0 7.46724 0.486629 7.46724 1.08724V3.97867C7.46724 4.57928 6.98061 5.06591 6.38059 5.06591C5.77998 5.06591 5.29335 4.57928 5.29335 3.97867V1.08724V1.08724Z`,
        fill: `currentColor`,
      }),
      (0, _.jsx)(`path`, {
        _: `M17.5329 1.08724C17.5329 0.486629 18.0195 0 18.6201 0C19.2201 0 19.7068 0.486629 19.7068 1.08724V3.97867C19.7068 4.57928 19.2201 5.06591 18.6201 5.06591C18.0195 5.06591 17.5329 4.57928 17.5329 3.97867V1.08724V1.08724Z`,
        fill: `currentColor`,
      }),
    ],
  });
}
function _(_) {
  let {
      value: _,
      onValueChange: _,
      min: _,
      max: _,
      checkValidDate: _,
      placeholder: _,
      ..._
    } = _,
    [_, _] = (0, _.useState)(!1),
    _ = {
      value: _,
      onValueChange: _,
      min: _,
      max: _,
      checkValidDate: _,
      placeholder: _,
      setOpen: _,
    };
  return (0, _.jsxs)(_.Root, {
    open: _,
    onOpenChange: _,
    interactions: {
      click: !0,
      focus: !0,
    },
    children: [
      (0, _.jsx)(_.Anchor, {
        children: (0, _.jsx)(_, {
          ..._,
          ..._,
        }),
      }),
      (0, _.jsx)(_.Positioner, {
        children: (0, _.jsx)(_.FocusManager, {
          children: (0, _.jsx)(_, {
            ..._,
          }),
        }),
      }),
    ],
  });
}
function _(_) {
  let {
      value: _,
      onValueChange: _,
      checkValidDate: _,
      setOpen: _,
      min: _,
      max: _,
      clearable: _,
      ..._
    } = _,
    _ = _();
  return (0, _.jsx)(_, {
    value: _,
    onValueChange: _,
    valueFromString: (_) => _(_, _),
    valueToString: _,
    afterContent:
      _ && _
        ? (0, _.jsx)(_, {
            onClick: () => _(null),
          })
        : (0, _.jsx)(_, {}),
    readOnly: _,
    onClick: _ ? () => _(!0) : void 0,
    ..._,
  });
}
var _ = {};
function _() {
  let _ = _()[0];
  if (_[_] === void 0) {
    let _ = _.PlainDate.from(`1991-11-12`).toLocaleString(_);
    _[_] = _.indexOf(`12`) < _.indexOf(`11`);
  }
  return _[_];
}
function _(_, _) {
  if (_.clearable && !_) return null;
  let _ = _.split(`/`);
  if (_.length < 3) return _;
  let [_, _, _] = _,
    [_, _] = _() ? [_, _] : [_, _];
  try {
    let _ = _.PlainDate.from(
      `${_}-${_.padStart(2, `0`)}-${_.padStart(2, `0`)}`,
    );
    return _(_, _) ? _ : _;
  } catch {
    return _;
  }
}
function _(_) {
  return _ ? _.toLocaleString() : ``;
}
function _(_) {
  let [_, _] = (0, _.useState)(() => ({
      level: `day`,
      mountDate: _.Now.plainDateISO(),
    })),
    _ = _.focus ?? _.value ?? _.mountDate,
    _ = (_) =>
      _((_) => ({
        ..._,
        level: _,
      })),
    _ = (_) =>
      _((_) => ({
        ..._,
        focus: _,
      }));
  switch (_.level) {
    case `day`:
      return (0, _.jsx)(_, {
        ..._,
        zoom: _.level,
        onZoomChange: _,
        focus: _,
        onFocusChange: _,
      });
    case `month`:
      return (0, _.jsx)(_, {
        ..._,
        zoom: _.level,
        onZoomChange: _,
        focus: _,
        onFocusChange: _,
      });
    case `year`:
      return (0, _.jsx)(_, {
        ..._,
        zoom: _.level,
        onZoomChange: _,
        focus: _,
        onFocusChange: _,
      });
  }
}
function _(_) {
  let {
      value: _,
      zoom: _,
      onZoomChange: _,
      focus: _,
      onFocusChange: _,
      onValueChange: _,
      clearable: _,
      checkValidDate: _,
      min: _,
      max: _,
      ..._
    } = _,
    _ = _.with({
      year: Math.floor(_.year / 10) * 10,
    }),
    _ = [];
  for (let _ = 0; _ < 12; _++)
    _.push(
      _.add({
        years: _ - 1,
      }),
    );
  let _ = (_) => {
      _(`month`), _(_);
    },
    _ = (_) =>
      _(
        _.add({
          years: 10 * _,
        }),
      ),
    _ = _[0];
  return (
    _ && _.year >= _[0].year && _.year <= _[_.length - 1].year && (_ = _),
    (0, _.jsx)(_, {
      zoom: _,
      focus: _,
      onPrevPage: () => _(-1),
      onNextPage: () => _(1),
      ..._,
      children: (0, _.jsx)(_, {
        children: _.map((_) =>
          (0, _.jsx)(
            _,
            {
              onClick: () => _(_),
              selected: !!_ && _.year === _.year,
              disabled: _(_, _),
              navProps: {
                autoFocus: _.year === _.year,
              },
              minWidth: `6ch`,
              square: !0,
              children: _.toLocaleString(_(), {
                calendar: _.calendarId,
                year: `numeric`,
              }),
            },
            _.year,
          ),
        ),
      }),
    })
  );
}
function _(_) {
  let {
      value: _,
      zoom: _,
      onZoomChange: _,
      focus: _,
      onFocusChange: _,
      onValueChange: _,
      clearable: _,
      checkValidDate: _,
      min: _,
      max: _,
      ..._
    } = _,
    _ = [];
  for (
    let _ = _.with({
      month: 1,
    });
    _.year === _.year;
    _ = _.add({
      months: 1,
    })
  )
    _.push(_);
  let _ = (_) => {
      _(`day`), _(_);
    },
    _ = (_) =>
      _(
        _.add({
          years: _,
        }),
      ),
    _ = _[0];
  return (
    _ && _.year === _.year && (_ = _),
    (0, _.jsx)(_, {
      zoom: _,
      focus: _,
      onZoomOut: () => _(`year`),
      onPrevPage: () => _(-1),
      onNextPage: () => _(1),
      ..._,
      children: (0, _.jsx)(_, {
        children: _.map((_) =>
          (0, _.jsx)(
            _,
            {
              onClick: () => _(_),
              selected: !!_ && _.year === _.year && _.month === _.month,
              disabled: _(_, _),
              navProps: {
                autoFocus: _.month === _.month,
              },
              square: !0,
              children: _.toLocaleString(_(), {
                calendar: _.calendarId,
                month: `short`,
              }),
            },
            _.month,
          ),
        ),
      }),
    })
  );
}
function _(_) {
  let {
      value: _,
      zoom: _,
      onZoomChange: _,
      focus: _,
      onFocusChange: _,
      onValueChange: _,
      clearable: _,
      checkValidDate: _,
      min: _,
      max: _,
      ..._
    } = _,
    _ = [];
  for (
    let _ = _.with({
      day: 1,
    });
    _.month === _.month;
    _ = _.add({
      days: 1,
    })
  )
    _.push(_);
  let _ = _(new Intl.Locale(_()[0])),
    _ = _ === 1 ? _.daysInWeek : _ - 1;
  for (; _[0].dayOfWeek !== _; )
    _.unshift(
      _[0].add({
        days: -1,
      }),
    );
  for (; _[_.length - 1].dayOfWeek !== _; )
    _.push(
      _[_.length - 1].add({
        days: 1,
      }),
    );
  let _ = (_) =>
      _(
        _.add({
          months: _,
        }),
      ),
    _ = (_) => {
      _(_), _(void 0);
    },
    _ = _.with({
      day: 1,
    });
  return (
    _ && _.month === _.month && (_ = _),
    (0, _.jsx)(_, {
      zoom: _,
      focus: _,
      onZoomOut: () => _(`month`),
      onPrevPage: () => _(-1),
      onNextPage: () => _(1),
      ..._,
      children: (0, _.jsxs)(_, {
        columns: `repeat( ${_.daysInWeek}, 1fr )`,
        children: [
          (0, _.jsx)(_, {
            firstDay: _,
            focus: _,
          }),
          _.map((_) =>
            (0, _.jsx)(
              _,
              {
                onClick: () => _(_),
                dim: _.month !== _.month,
                selected: !!_ && _.equals(_),
                navProps: {
                  autoFocus: _.equals(_),
                },
                disabled: _(_, _),
                square: !0,
                children: _.toLocaleString(_(), {
                  day: `numeric`,
                }),
              },
              `${_.month}_${_.day}`,
            ),
          ),
        ],
      }),
    })
  );
}
function _(_, _) {
  let { min: _, max: _, checkValidDate: _ } = _;
  return !!(
    (_ && _.PlainDate.compare(_, _) < 0) ||
    (_ && _.PlainDate.compare(_, _) > 0) ||
    (_ && !_(_))
  );
}
function _(_, _) {
  let { min: _, max: _ } = _;
  return !!(
    (_ && _.PlainYearMonth.compare(_, _) < 0) ||
    (_ && _.PlainYearMonth.compare(_, _) > 0)
  );
}
function _(_, _) {
  let { min: _, max: _ } = _;
  return !!((_ && _.year < _.year) || (_ && _.year > _.year));
}
function _(_) {
  return (0, _.jsx)(_, {
    columns: `1fr 1fr 1fr 1fr`,
    rows: `1fr 1fr 1fr`,
    ..._,
  });
}
function _(_) {
  let {
      children: _,
      selected: _,
      disabled: _,
      dim: _,
      square: _,
      onClick: _,
      ..._
    } = _,
    _ = `title`;
  _ && (_ = `description`), _ && (_ = `note`);
  let _ = !_ && _;
  return (0, _.jsxs)(_, {
    justify: `center`,
    align: `center`,
    background: _ ? `accent-8` : void 0,
    onClick: _ ? void 0 : _,
    padding: `2`,
    radius: `md`,
    className: (0, _.default)(_, _ && `LlXL2-xu2kE-`, _ && `iO9Tcm4Ic-c-`),
    "data-active": _ ? 1 : void 0,
    ..._,
    children: [
      typeof _ == `string` &&
        (0, _.jsx)(_, {
          align: `center`,
          contrast: _,
          children: _,
        }),
      typeof _ != `string` && _,
    ],
  });
}
function _(_) {
  let { firstDay: _, focus: _ } = _,
    _ = [],
    _ = _.add({
      days: _ - _.dayOfWeek,
    });
  for (let _ = 0; _ < _.daysInWeek; _++)
    _.push(_),
      (_ = _.add({
        days: 1,
      }));
  return (0, _.jsx)(_.Fragment, {
    children: _.map((_) =>
      (0, _.jsx)(
        _,
        {
          background: `dull-4`,
          children: _.toLocaleString(_(), {
            calendar: _.calendarId,
            weekday: `narrow`,
          }),
        },
        _.dayOfWeek,
      ),
    ),
  });
}
function _(_) {
  try {
    if (`getWeekInfo` in _) {
      let _ = _.getWeekInfo();
      if (typeof _.firstDay == `number`) return _.firstDay;
    }
    if (`weekInfo` in _) {
      let _ = _.weekInfo;
      if (typeof _.firstDay == `number`) return _.firstDay;
    }
  } catch (_) {
    console.error(`Failed to get week info: "${_}"`, _);
  }
  return _.EREALM === _.k_ESteamRealmChina ? 1 : 7;
}
function _(_) {
  let {
    children: _,
    onNextPage: _,
    onPrevPage: _,
    onZoomOut: _,
    zoom: _,
    focus: _,
    setOpen: _,
    ..._
  } = _;
  return (0, _.jsx)(_, {
    background: `dull-8`,
    radius: `md`,
    padding: `3`,
    elevation: `1`,
    overflow: `hidden`,
    navProps: {
      layout: _.GRID,
      onButtonDown: (_) => {
        if (_.detail)
          switch (_.detail.button) {
            case _.BUMPER_LEFT:
              _.stopPropagation(), _.preventDefault(), _();
              break;
            case _.BUMPER_RIGHT:
              _.stopPropagation(), _.preventDefault(), _();
              break;
            case _.OPTIONS:
              _ && _();
              break;
            case _.CANCEL:
              _(!1);
              break;
          }
      },
      focusableIfEmpty: !0,
      onGamepadDirection: () => !0,
    },
    ..._,
    children: (0, _.jsxs)(_, {
      children: [
        (0, _.jsxs)(_, {
          align: `center`,
          children: [
            (0, _.jsx)(_, {
              onClick: _,
              square: !0,
              children: (0, _.jsx)(_, {
                direction: `left`,
                color: `text-body-title`,
              }),
            }),
            (0, _.jsx)(_, {
              flexGrow: `1`,
              align: `center`,
              justify: `center`,
              onClick: _,
              children: _(_, _),
            }),
            (0, _.jsx)(_, {
              onClick: _,
              square: !0,
              children: (0, _.jsx)(_, {
                direction: `right`,
                color: `text-body-title`,
              }),
            }),
          ],
        }),
        _,
      ],
    }),
  });
}
function _(_, _) {
  switch (_) {
    case `year`: {
      let _ = _.with({
          year: Math.floor(_.year / 10) * 10,
        }),
        _ = _.add({
          years: 9,
        });
      return `${_.toLocaleString(_(), {
        year: `numeric`,
      })} - ${_.toLocaleString(_(), {
        year: `numeric`,
      })}`;
    }
    case `month`:
      return _.toLocaleString(_(), {
        year: `numeric`,
      });
    case `day`:
      return _.toLocaleString(_(), {
        year: `numeric`,
        month: `short`,
      });
  }
}
function _(_) {
  let { tag: _, rgRequiredTags: _, rgExcludedTags: _ } = _,
    { onBrowseHandler: _ } = _(),
    _ = _.findIndex((_) => _ == _.name) != -1,
    _ = _.findIndex((_) => _ == _.name) != -1,
    _ = _(),
    _ = () => {
      let _ = _ ? _.filter((_) => _ !== _.name) : [..._, _.name],
        _ = _.filter((_) => _ !== _.name);
      _({
        required_tags: _,
        excluded_tags: _,
        page: 1,
      });
    };
  return (0, _.jsxs)(_, {
    className: _,
    direction: `row`,
    children: [
      (0, _.jsx)(_, {
        onActivate: _,
        className: (0, _.default)(_, _ && `mH2s1Tu6wP8-`),
        children: (0, _.jsx)(_, {}),
      }),
      (0, _.jsx)(_, {
        onActivate: () => {
          let _ = _.filter((_) => _ !== _.name),
            _ = _ ? _.filter((_) => _ !== _.name) : [..._, _.name];
          _({
            required_tags: _,
            excluded_tags: _,
            page: 1,
          });
        },
        className: (0, _.default)(_, _ && `mH2s1Tu6wP8-`),
        children: (0, _.jsx)(_, {}),
      }),
      (0, _.jsx)(_, {
        focusable: !_,
        onActivate: _,
        children: _.display_name,
      }),
    ],
  });
}
function _(_) {
  let {
      category: _,
      browseQuery: _,
      strText: _,
      setVisibility: _,
      bVisible: _,
    } = _,
    { onBrowseHandler: _ } = _(),
    [_, _] = (0, _.useState)(!1),
    _ = _.required_tags || [],
    _ = () => {
      _(!1);
    },
    _ = () => {
      _(!0);
    },
    _ = _.external_url;
  if (_ && _.length != 0) {
    let _ = new URL(location.href),
      _ = new URLSearchParams();
    _.set(`target_uri`, `https://` + _.hostname + _.pathname),
      _.forEach((_, _) => _.set(`tags[${_}]`, _)),
      (_ += `?` + _.toString());
  }
  return (
    (0, _.useEffect)(() => {
      let _ = `https://` + new URL(_.external_url ?? ``).hostname,
        _ = (_) => {
          if (_.origin !== _) return;
          let _ = JSON.parse(_.data);
          switch (_.method) {
            case `resize`:
              break;
            case `setfilter`:
              {
                let _ = _.tags;
                _({
                  required_tags: _,
                  page: 1,
                }),
                  _(!1);
              }
              break;
          }
        };
      return _.external_url?.length == 0
        ? () => {}
        : (window.addEventListener(`message`, _),
          () => {
            window.removeEventListener(`message`, _);
          });
    }, []),
    (0, _.jsx)(_, {
      active: _,
      children: (0, _.jsx)(_, {
        onClose: _,
        children: (0, _.jsx)(_, {
          background: `dull-7`,
          className: _,
          children: (0, _.jsx)(`iframe`, {
            scrolling: `no`,
            className: (0, _.default)(_, _ && `_2u8M7hDdjWk-`),
            title: _,
            src: _,
            onLoad: _,
          }),
        }),
      }),
    })
  );
}
function _(_) {
  let { category: _, browseQuery: _ } = _,
    { onBrowseHandler: _ } = _(),
    _ = _.required_tags || [],
    _ = _.excluded_tags || [],
    [_, _] = (0, _.useState)(!1),
    _ = () => {
      _(!0);
    },
    _ = (_) => {
      let _ = _.filter(
          (_) =>
            !_.tags.some((_) => _.toLowerCase() == _.name.toLocaleLowerCase()),
        ),
        _ = _.tags.find((_) => _._ == _);
      _.length != 0 && _ && _.push(_.name),
        _({
          required_tags: _,
          page: 1,
        });
    },
    _ = (_) => {
      if (_.length == 0) return _.Localize(`#Workshop_Tag_NoneSpecified`);
      let _ = _.tags.find((_) => _._ == _);
      return _
        ? (_.display_name ?? _.name)
        : _.Localize(`#Workshop_Tag_NoneSpecified`);
    },
    _ = [``, ..._.tags.map((_) => _._)],
    _ = _(_);
  switch (_.htmlelement || `checkbox`) {
    case `select`: {
      let _ = _.tags.find((_) =>
        _.find((_) => _.name.toLocaleLowerCase() == _.toLocaleLowerCase()),
      );
      return (0, _.jsxs)(`div`, {
        className: (0, _.default)(_, _),
        children: [
          (0, _.jsx)(`div`, {
            className: _,
            children: _,
          }),
          (0, _.jsx)(_, {
            placement: {
              flip: !1,
            },
            selectedValue: _?._ ?? ``,
            onSelectionChange: _,
            options: _,
            getOptionLabel: _,
          }),
        ],
      });
    }
    case `external_url`: {
      let _ = _.Localize(_.external_url_button_text);
      return (0, _.jsxs)(_.Fragment, {
        children: [
          (0, _.jsx)(_, {
            onClick: _,
            size: `1`,
            color: `dull`,
            children: _,
          }),
          (0, _.jsx)(_, {
            category: _,
            browseQuery: _,
            setVisibility: _,
            bVisible: _,
            strText: _,
          }),
        ],
      });
    }
    default:
      return (0, _.jsxs)(_, {
        className: _,
        direction: `column`,
        children: [
          (0, _.jsx)(`div`, {
            className: _,
            children: _,
          }),
          (0, _.jsx)(`div`, {
            className: _,
            children: (0, _.jsx)(`div`, {
              className: _,
              children: _.tags.map((_) =>
                (0, _.jsx)(
                  _,
                  {
                    tag: _,
                    rgRequiredTags: _,
                    rgExcludedTags: _,
                  },
                  _._,
                ),
              ),
            }),
          }),
        ],
      });
  }
}
function _(_) {
  if (_ != 0)
    return _.Instant.fromEpochMilliseconds(_ * 1e3)
      .toZonedDateTimeISO(`UTC`)
      .toPlainDate();
}
function _(_) {
  return _ ? _.toZonedDateTime(`UTC`).toInstant().epochMilliseconds / 1e3 : 0;
}
function _(_) {
  let { date_range: _, fnOnUpdate: _ } = _,
    _ = _.timestamp_start || 0,
    _ = _.timestamp_end || 0,
    _ = _(_),
    _ = _(_),
    _ = _.Now.plainDateISO(),
    _ = _ && _.PlainDate.compare(_, _) == -1 ? _ : _,
    _ = _ ?? void 0;
  return (0, _.jsxs)(`div`, {
    className: _,
    children: [
      (0, _.jsxs)(_, {
        direction: `column`,
        children: [
          _.Localize(`#Workshop_DateFilter_Between`),
          (0, _.jsx)(_, {
            value: _,
            onValueChange: (_) => {
              _(_(_), _);
            },
            max: _,
            checkValidDate: (_) => {
              let _ = _(_);
              return _ == 0 || _ <= _;
            },
            clearable: !0,
          }),
        ],
      }),
      (0, _.jsxs)(_, {
        direction: `column`,
        children: [
          _.Localize(`#Workshop_DateFilter_And`),
          (0, _.jsx)(_, {
            value: _,
            onValueChange: (_) => {
              _(_, _(_));
            },
            min: _,
            max: _,
            checkValidDate: (_) => {
              let _ = _(_);
              return _ == 0 || _ >= _;
            },
            clearable: !0,
          }),
        ],
      }),
    ],
  });
}
function _(_) {
  let { onBrowseHandler: _ } = _(),
    [_, _] = (0, _.useState)(!1),
    _ = () => {
      _(!_);
    },
    _ = _.date_range_created || {
      timestamp_start: 0,
      timestamp_end: 0,
    },
    _ = _.date_range_updated || {
      timestamp_start: 0,
      timestamp_end: 0,
    };
  return (0, _.jsxs)(`div`, {
    children: [
      (0, _.jsx)(_, {
        onClick: _,
        color: `dull`,
        children: _.Localize(`#Workshop_DateFilter_FilterByDate`),
      }),
      _ &&
        (0, _.jsxs)(`div`, {
          className: (0, _.default)(`rUAq16oV4IQ-`, `NO2bjhzH16U-`),
          children: [
            (0, _.jsx)(`div`, {
              className: `_5CceBD1-9Kg-`,
              children: _.Localize(`#Workshop_DateFilter_TimeCreated`),
            }),
            (0, _.jsx)(_, {
              date_range: _,
              fnOnUpdate: (_, _) => {
                _({
                  date_range_created: {
                    timestamp_start: _,
                    timestamp_end: _,
                  },
                  page: 1,
                });
              },
            }),
            (0, _.jsx)(`div`, {
              className: `_5CceBD1-9Kg-`,
              children: _.Localize(`#Workshop_DateFilter_TimeUpdated`),
            }),
            (0, _.jsx)(_, {
              date_range: _,
              fnOnUpdate: (_, _) => {
                _({
                  date_range_updated: {
                    timestamp_start: _,
                    timestamp_end: _,
                  },
                  page: 1,
                });
              },
            }),
          ],
        }),
    ],
  });
}
export { _, _ };
