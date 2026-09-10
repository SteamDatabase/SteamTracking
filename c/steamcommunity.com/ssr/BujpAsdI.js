var _ = _(_(), 1),
  _ = _();
function _(_) {
  let {
      selected: _,
      onSelectedChange: _ = () => {},
      onItemChange: _ = () => {},
      disabled: _,
      direction: _ = `column`,
      ..._
    } = _,
    _ = {
      selected: _.reduce(
        (_, _) => ({
          ..._,
          [_]: !0,
        }),
        {},
      ),
      onChange: (_, _) => {
        if ((_(_, _), _)) _(_.concat(_));
        else {
          let _ = _.indexOf(_);
          _(_.slice(0, _).concat(_.slice(_ + 1)));
        }
      },
      disabled: _,
    },
    _ = _ === `row`;
  return (0, _.jsx)(_.Provider, {
    value: _,
    children: (0, _.jsx)(_, {
      direction: _,
      wrap: _ ? `wrap` : void 0,
      gap: _ === `column` ? `1` : `4`,
      role: `group`,
      ..._,
    }),
  });
}
function _(_) {
  let { value: _, children: _ } = _,
    _ = (0, _.useContext)(_);
  if (!_)
    return (
      console.error(
        `<CheckboxGroup.Item> must be used within a <CheckboxGroup>`,
      ),
      null
    );
  let { selected: _, onChange: _, disabled: _ } = _;
  return (0, _.jsx)(_, {
    checked: !!_[_],
    disabled: _,
    onChange: (_) => _(_, _),
    children:
      !!_ &&
      (0, _.jsx)(_, {
        children: _,
      }),
  });
}
var _ = (0, _.createContext)(null),
  _ = Object.assign(_, {
    Item: _,
  });
export { _ };
