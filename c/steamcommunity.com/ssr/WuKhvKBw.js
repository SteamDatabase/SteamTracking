var _ = _(_(), 1),
  _ = class {
    reactNodes = [];
    AppendText(_, _ = !1) {
      _.length &&
        (_
          ? this.reactNodes.push(
              _.createElement(
                `span`,
                {
                  "data-copytext": ``,
                  "data-copystyle": `merge-adjacent`,
                  "bbcode-text": _,
                },
                _,
              ),
            )
          : this.reactNodes.push(_));
    }
    AppendNode(_) {
      this.reactNodes.push(_);
    }
    GetElements() {
      return this.reactNodes;
    }
  },
  _ = class {
    m_decoratedAccumulator;
    constructor(_) {
      _(_, `decorated accumulator cannot be null`),
        (this.m_decoratedAccumulator = _);
    }
    AppendText(_, _ = !1) {
      this.m_decoratedAccumulator.AppendText(_, _);
    }
    AppendNode(_) {
      this.m_decoratedAccumulator.AppendNode(_);
    }
    GetElements() {
      return this.m_decoratedAccumulator.GetElements();
    }
  },
  _ = class extends _ {
    constructor(_) {
      super(_);
    }
    AppendText(_) {
      let _ = _,
        _ = [];
      for (
        let _ = _.indexOf(`
`);
        _ !== -1;
        _ = _.indexOf(`
`)
      )
        _.push(_.substr(0, _)),
          _.push(_.createElement(`br`)),
          (_ = _.substr(_ + 1));
      _.length && _.push(_),
        _.forEach((_) => {
          super.AppendNode(_);
        });
    }
  },
  _ = class {
    m_fnAccumulatorFactory;
    m_dictComponents;
    constructor(_, _) {
      _ instanceof Map
        ? (this.m_dictComponents = _)
        : (this.m_dictComponents = new Map(Object.entries(_))),
        (this.m_fnAccumulatorFactory = _);
    }
    Parse(_, _, _ = !0) {
      let _ = _(_ || ``, _);
      return this.Parse_BuildElements(_, _);
    }
    Parse_BuildElements(_, _) {
      let _ = this.m_fnAccumulatorFactory(void 0),
        _ = [],
        _ = () => (_.length < 1 ? void 0 : _[_.length - 1]),
        _ = this.m_dictComponents,
        _ = (_) => !!(_.tag && _.get(_.tag)?.autocloses),
        _ = !1,
        _ = !0,
        _ = (_, _) => {
          let _ = _.text.toLowerCase();
          if (_ && _.node.tag === _ && _.get(_.node.tag)) {
            let _ = _.get(_.node.tag),
              _ = {
                tagname: _.node.tag,
                args: _.node.args,
                rawargs: _.node.rawargs,
              },
              _ = _(_.Constructor, _, ..._.GetElements());
            (_ = _.accumulator),
              Array.isArray(_)
                ? _.forEach((_) => _.AppendNode(_))
                : _.AppendNode(_),
              (_ = !!_.skipFollowingNewline),
              (_ = _.bWrapTextForCopying);
          } else if (_) {
            let _ = _.accumulator;
            _.AppendText(`[` + _.node.text + `]`, !1),
              _.GetElements().forEach((_) => _.AppendNode(_)),
              _.AppendText(`[/` + _.text + `]`, !1),
              (_ = _),
              (_ = _.bWrapTextForCopying);
          }
        };
      for (
        _.forEach((_, _) => {
          if (_.type == 1) {
            let _ = _ ? _.text.replace(/^[\t\r ]*\n/g, ``) : _.text;
            _.AppendText(_, _), (_ = !1);
          } else if (_.type == 2) {
            let _ = _.get(_.tag);
            if (!_) _.AppendText(`[` + _.text + `]`, _.length == 0);
            else {
              let _ = _();
              if (_ !== void 0) {
                let _ = _.get(_.node.tag);
                _ && _.autocloses && _.tag === _.node.tag && _(_.pop(), _.node);
              }
              _.push({
                accumulator: _,
                node: _,
                bWrapTextForCopying: _,
              }),
                (_ = this.m_fnAccumulatorFactory(_)),
                (_ = !!_.skipInternalNewline),
                (_ = _.allowWrapTextForCopying ?? !1);
            }
          } else if (_.type == 3) {
            let _ = _.text.toLowerCase();
            for (; _() && _().node.tag !== _ && _(_().node); ) {
              let _ = _.pop();
              _(_, _.node);
            }
            if (_()?.node.tag == _) {
              let _ = _.pop();
              _(_, _);
            } else _.AppendText(`[/` + _.text + `]`, _.length == 0);
          }
        });
        _.length > 0;
      ) {
        let _ = _.pop();
        _(_, _.node);
      }
      return _.GetElements();
    }
  };
function _(_, _, _ = !1) {
  let _ = `[` + _;
  _?.[``] && (_ += `=${_ ? `` + _[``] : _(`` + _[``])}`);
  for (let _ in _) _ !== `` && (_ += ` ${_(_)}=${_(`` + _[_])}`);
  return (_ += `]`), _;
}
function _(_) {
  return `"${_.replace(/(\\|"|\])/g, `\\$1`)}"`;
}
function _(_) {
  return _.replace(/(\\| |\])/g, `\\$1`);
}
function _(_) {
  return `[/${_}]`;
}
function _(_) {
  return _.replace(/(\\|\[)/g, `\\$1`);
}
function _(_, _, _ = 0) {
  let { type: _, text: _ = `` } = _;
  if (_ == 2) {
    let _ = _.indexOf(`=`),
      _ = _.indexOf(` `);
    _ != -1 && (_ == -1 || _ < _) && (_ = _);
    let _,
      _,
      _ = ``;
    _ > 0
      ? ((_ = _.substr(0, _).toLocaleLowerCase()),
        (_ = _.substr(_)),
        (_ = _(_)))
      : ((_ = {}), (_ = _.toLocaleLowerCase())),
      _.push({
        type: _,
        text: _,
        tag: _,
        args: _,
        rawargs: _,
      });
  } else
    _ != 0 &&
      _.push({
        type: _,
        text: _,
      });
  return {
    type: _,
    text: ``,
  };
}
function _(_) {
  let _ = ``;
  return (
    _.type == 3 ? (_ = `[/`) : _.type == 2 && (_ = `[`),
    {
      type: 1,
      text: _ + (_.text ?? ``),
    }
  );
}
function _(_, _) {
  let _ = [],
    _ = {
      type: 0,
      text: ``,
    },
    _ = !1,
    _ = !1,
    _ = !1;
  for (let _ = 0; _ < _.length; _++) {
    let _ = _[_];
    switch (_.type) {
      case 0:
        _ == `[`
          ? ((_.type = 2), (_ = !0))
          : ((_.type = 1), _ == `\\` && _ ? (_ = !_) : (_.text += _));
        break;
      case 2:
      case 3:
        if (_ == `/` && _) (_.type = 3), (_.text = ``), (_ = !1);
        else if (_ == `[` && !_) (_ = _(_, _(_), 2)), (_ = !0);
        else if (_ == `]` && !_) {
          let _ = _.type == 2 && _.text?.toLocaleLowerCase() == `noparse`,
            _ = _.type == 3 && _.text?.toLocaleLowerCase() == `noparse`;
          _ || (_ && !_)
            ? ((_ = _(_)), (_.text += _))
            : _
              ? (_ = !0)
              : _ && (_ = !1),
            (_ = _(_, _)),
            (_ = !1);
        } else
          _ == `\\` && _
            ? ((_.text += _), (_ = !_), (_ = !1))
            : ((_.text += _), (_ = !1), (_ = !1));
        break;
      case 1:
        _ == `[` && !_
          ? ((_ = _(_, _, 2)), (_ = !0))
          : _ == `\\` && _
            ? (_ && (_.text += _), (_ = !_))
            : ((_.text += _), (_ = !1));
        break;
    }
  }
  return (
    _.type != 0 &&
      (_.type == 2 || _.type == 3
        ? _.push(_(_))
        : _.push({
            type: _.type,
            text: _.text ?? ``,
          })),
    _
  );
}
function _(_) {
  if (!_ || _.length < 1) return {};
  let _ = {},
    _ = ``,
    _ = ``,
    _ = 0,
    _ = 0;
  _[0] == `=` && (_ = 2);
  let _ = !1;
  for (_++; _ < _.length; _++) {
    let _ = _[_],
      _ = !0,
      _ = !1;
    switch (_) {
      case 0:
        if (_ == `=`) return {};
        if (_ == ` `) continue;
        _ = 1;
        break;
      case 1:
        (_ == `=` || _ == ` `) &&
          !_ &&
          (_ == ` ` ? ((_ = 0), (_ = !0)) : (_ = 2), (_ = !1));
        break;
      case 2:
        _ == ` `
          ? ((_ = 0), (_ = !1), (_ = !0))
          : _ == `"`
            ? ((_ = 4), (_ = !1))
            : (_ = 3);
        break;
      case 3:
      case 4:
        ((_ == ` ` && _ != 4 && !_) || (_ == `"` && _ == 4 && !_)) &&
          ((_ = 0), (_ = !1), (_ = !0));
        break;
    }
    if (_)
      if (_ == `\\` && !_) _ = !0;
      else if (((_ = !1), _ == 1)) _ += _;
      else if (_ == 3 || _ == 4) _ += _;
      else throw Error(`Not expecting to accumulate buffer in state ` + _);
    _ && ((_[_] = _), (_ = ``), (_ = ``));
  }
  return _ != 0 && (_[_] = _), _;
}
var _ = class extends _ {
  m_renderingLanguage;
  constructor(_, _, _) {
    super(_, _ ?? (() => new _())),
      (this.m_renderingLanguage = typeof _ == `string` ? _(_) : _);
  }
  UpdateOverrideLanguage(_) {
    this.m_renderingLanguage = _;
  }
  ParseBBCode(_, _, _ = !0) {
    let _ = 0,
      _ = this.Parse(
        _,
        (_, _, ..._) =>
          _.createElement(
            _,
            {
              ..._,
              context: _,
              language: this.m_renderingLanguage,
              key: `bbnode_${_++}`,
            },
            ..._,
          ),
        _,
      );
    return _.length > 1
      ? _.createElement(_.Fragment, null, ..._)
      : _.length == 1
        ? _[0]
        : null;
  }
};
export { _, _, _, _, _, _, _, _ };
