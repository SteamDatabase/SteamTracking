var _ = _(_(), 1),
  _ = _(),
  _ = new Set([`img`, `noparse`, `url`, `dynamiclink`]),
  _ = class extends _ {
    m_parentNode;
    m_fnRenderURL;
    constructor(_, _, _) {
      super(_),
        (this.m_parentNode = _),
        (this.m_fnRenderURL =
          _ ??
          ((_) =>
            (0, _.jsx)(_, {
              strURL: _,
            })));
    }
    AppendText(_, _ = !1) {
      if (this.m_parentNode && _.has(this.m_parentNode.tag)) {
        super.AppendText(_, _);
        return;
      }
      let _ = _;
      for (let _ = _.exec(_); _; _ = _.exec(_))
        _.index > 0 && super.AppendText(_.slice(0, _.index), _),
          super.AppendNode(this.m_fnRenderURL(_[0])),
          (_ = _.slice(_.index + _[0].length));
      _.length > 0 && super.AppendText(_, _);
    }
  };
function _(_) {
  return (0, _.jsx)(_.Fragment, {
    children: _.children,
  });
}
var _ = {
  URLConstructor: _,
};
function _(_) {
  return {
    url: {
      Constructor: _.URLConstructor,
    },
    noparse: {
      Constructor: _,
    },
  };
}
function _(_, _) {
  return (_) => {
    let _ = new _(new _());
    return new _(_ ? _(_) : _, _, _.fnRenderBodyURL);
  };
}
var _ = `LeEh4XRr-pI-`,
  _ = `QT1eegn4bN0-`,
  _ = `Huk1UNtQ5ps-`;
function _(_) {
  let { strLabel: _, strTooltip: _, bCanReveal: _ } = _,
    [_, _] = _.useState(!1);
  if (_)
    return (0, _.jsx)(`span`, {
      className: _,
      children: _.children,
    });
  let _ = _
    ? (0, _.jsx)(`button`, {
        type: `button`,
        className: _(_, _),
        onClick: () => _(!0),
        children: _,
      })
    : (0, _.jsx)(`span`, {
        className: _,
        children: _,
      });
  return (0, _.jsx)(_, {
    toolTipContent: (0, _.jsx)(`p`, {
      children: _,
    }),
    children: _,
  });
}
var _ = `K0V2SQSqdng-`,
  _ = `ex9P5nB0SVY-`;
function _(_) {
  return (0, _.jsx)(`span`, {
    className: _,
    children: (0, _.jsx)(`span`, {
      className: _,
      children: _.children,
    }),
  });
}
export { _, _, _, _, _, _ };
