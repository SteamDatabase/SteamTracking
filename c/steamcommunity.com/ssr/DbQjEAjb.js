var _ = _(_(), 1),
  _ = `G4UkZ85d6lA-`,
  _ = `JGS-lBdcrUY-`,
  _ = `SlFAAH-6wXs-`,
  _ = `wjIYRZj4b0g-`,
  _ = `kkqw2sMIUH4-`,
  _ = _(),
  _ = Object.assign(_, {
    Root: _,
    Track: _,
    Range: _,
    Handle: _,
  });
function _(_) {
  let { value: _, onValueChange: _, onValueSettled: _, min: _, ..._ } = _,
    _ = [_],
    _ = (0, _.useCallback)((_) => _(_[0]), [_]),
    _ = (0, _.useCallback)((_) => _?.(_[0]), [_]);
  return (0, _.jsxs)(_, {
    ..._,
    min: _,
    onValueChange: _,
    onValueSettled: _,
    value: _,
    children: [
      (0, _.jsx)(_, {
        children: (0, _.jsx)(_, {
          start: _,
          end: _,
        }),
      }),
      (0, _.jsx)(_, {}),
    ],
  });
}
function _(_) {
  let { value: _ } = _;
  return (0, _.jsxs)(_, {
    ..._,
    children: [
      (0, _.jsx)(_, {
        children: (0, _.jsx)(_, {
          start: _[0],
          end: _[1],
        }),
      }),
      (0, _.jsx)(_, {}),
      (0, _.jsx)(_, {}),
    ],
  });
}
var _ = (0, _.createContext)(null);
function _(_) {
  let { children: _, color: _, ..._ } = _,
    {
      min: _,
      max: _,
      onValueChange: _,
      value: _,
      step: _ = 1,
      onValueSettled: _,
    } = _,
    _ = (0, _.useRef)(null),
    _ = (0, _.useRef)(null),
    [_] = (0, _.useState)(() => new Set()),
    [_, _] = (0, _.useState)(!1);
  return (0, _.jsx)(_.Provider, {
    value: {
      ..._,
      handles: _,
      bDragActive: _,
    },
    children: (0, _.jsx)(`div`, {
      className: _,
      "data-accent-color": _,
      ref: _,
      onPointerDown: (_) => {
        if (_.current) {
          if ((_.target.setPointerCapture(_.pointerId), typeof _ != `number`)) {
            let _ = _.current.getBoundingClientRect(),
              _ = _(_.clientX - _.left, [0, _.width], [_, _]);
            _.current = {
              activeValueIndex: _(_, _),
              bMoved: !1,
            };
          } else
            _.current = {
              activeValueIndex: 0,
              bMoved: !1,
            };
          _(!0);
        }
      },
      onPointerUp: (_) => {
        let _ = _.target;
        _.hasPointerCapture(_.pointerId) &&
          (_.releasePointerCapture(_.pointerId),
          _ && _.current?.bMoved && _(_),
          _(!1));
      },
      onPointerMove: (_) => {
        if (_.target.hasPointerCapture(_.pointerId) && _.current && _.current) {
          let _ = _.current.getBoundingClientRect(),
            _ = _({
              value: _(_.clientX - _.left, [0, _.width], [_, _]),
              min: _,
              max: _,
              step: _,
            }),
            _ = [..._];
          (_[_.current.activeValueIndex] = _),
            _.sort((_, _) => _ - _),
            (_.current.activeValueIndex = _.indexOf(_)),
            (_.current.bMoved = !0),
            _(_);
        }
      },
      onClick: (_) => {
        if (!_.current || _.current?.bMoved) return;
        let _ = _.current.getBoundingClientRect(),
          _ = _(_.clientX - _.left, [0, _.width], [_, _]),
          _ = _({
            value: _,
            min: _,
            max: _,
            step: _,
          }),
          _ = _(_, _),
          _ = [..._];
        (_[_] = _), _(_), _ && _(_);
      },
      children: (0, _.jsx)(`div`, {
        className: _,
        children: _,
      }),
    }),
  });
}
function _(_, _) {
  if (_.length <= 1) return _.length - 1;
  let _ = 0,
    _ = Math.abs(_ - _[0]);
  for (let _ = 1; _ < _.length; _++) {
    let _ = Math.abs(_[_] - _);
    _ < _ && ((_ = _), (_ = _));
  }
  return _;
}
function _(_) {
  let { render: _, ..._ } = _;
  return _(
    _,
    (0, _.jsx)(`div`, {
      className: _,
    }),
    _,
    void 0,
  );
}
function _(_) {
  let { start: _, end: _, render: _ } = _,
    _ = (0, _.useContext)(_);
  _(_, `SliderRange must be used within a SliderRoot!`);
  let { min: _, max: _ } = _,
    _ = _(_, _, _),
    _ = 100 - _(_, _, _);
  return _(
    _,
    (0, _.jsx)(`div`, {
      className: _,
      style: {
        "--pct-left": `${_}%`,
        "--pct-right": `${_}%`,
      },
    }),
    {},
    void 0,
  );
}
function _(_) {
  let { render: _ } = _,
    _ = (0, _.useContext)(_);
  _(_, `SliderHandle must be used within a SliderRoot!`);
  let {
      min: _,
      max: _,
      handles: _,
      value: _,
      step: _ = 1,
      onValueChange: _,
      onValueSettled: _,
    } = _,
    [_, _] = (0, _.useState)(null),
    [_, _] = (0, _.useState)(-1);
  (0, _.useEffect)(
    () => (_ ? (_.add(_), _(_.size - 1), () => _.delete(_)) : () => {}),
    [_, _],
  );
  let _ = _ > -1,
    _ = {
      "--handle-pct": `${_(_ ? _[_] : _, _, _)}%`,
    },
    _ = (_) => {
      switch (_.key) {
        case `ArrowRight`:
        case `ArrowUp`:
        case `ArrowLeft`:
        case `ArrowDown`: {
          let _ = _.key === `ArrowRight` || _.key === `ArrowUp`,
            _ = _ * (_ ? 1 : -1),
            _ = _({
              value: _[_] + _,
              min: _,
              max: _,
              step: _,
            }),
            _ = [..._];
          (_[_] = _), _(_), _ && _(_), _.preventDefault(), _.stopPropagation();
          break;
        }
        case `PageUp`:
        case `PageDown`: {
          let _ = _.key === `PageUp`,
            _ = Math.round((_ - _) / 10) * (_ ? 1 : -1),
            _ = _({
              value: _[_] + _,
              min: _,
              max: _,
              step: _,
            }),
            _ = [..._];
          (_[_] = _), _(_), _ && _(_), _.preventDefault(), _.stopPropagation();
          break;
        }
      }
    };
  _ || (_.display = `none`);
  let _ = {
    ref: _,
    role: `slider`,
    "aria-valuenow": _[_],
    "aria-valuemin": _,
    "aria-valuemax": _,
    tabIndex: 0,
    onKeyDown: _,
  };
  return _(
    _,
    (0, _.jsx)(`span`, {
      className: _,
      style: _,
    }),
    _,
    {
      value: _[_],
      bDragActive: _.bDragActive,
    },
  );
}
function _(_, _, _) {
  return _[0] === _[1] || _[0] === _[1]
    ? _[0]
    : _(((_[1] - _[0]) / (_[1] - _[0])) * (_ - _[0]) + _[0], _[0], _[1]);
}
function _(_) {
  let { value: _, min: _, max: _, step: _ } = _;
  return _(Math.round((_ - _) / _) / (1 / _) + _, _, _);
}
function _(_, _, _) {
  return ((_ - _) / (_ - _)) * 100;
}
export { _, _ };
