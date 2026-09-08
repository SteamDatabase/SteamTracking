var _ = _(_(), 1);
function _(_, ..._) {
  let _ = [],
    _ = new RegExp(/(.*?)<(\d+)>(.*?)<\/(\2)>/, `gs`),
    _ = 0,
    _;
  for (; (_ = _.exec(_)); ) {
    (_ += _[0].length), _.push(_[1]);
    let _ = parseInt(_[2]),
      _ = _[3] || ``,
      _ = _(_, ..._),
      _ =
        _ >= 1 && _ <= _.length && _[_ - 1]
          ? _.cloneElement(_[_ - 1], {}, _ ? _ : null)
          : _;
    _.push(_);
  }
  return _.push(_.substr(_)), _.createElement(_.Fragment, null, ..._);
}
var _ = [`1`, `2`, `3`, `4`, `5`, `6`, `7`, `8`, `9`, `10`, `11`, `12`],
  _ = [`title`, `subtitle`, `body`, `description`, `note`],
  _ = _();
function _(_) {
  let {
      accentColor: _,
      dullColor: _,
      bodyTextColor: _,
      successColor: _,
      warningColor: _,
      errorColor: _,
      successTextColor: _,
      warningTextColor: _,
      errorTextColor: _,
      children: _,
      breakpoints: _,
      variants: _,
    } = _,
    _ = {
      display: `contents`,
    },
    _;
  typeof _ == `string` ? (_ = _) : _ && _(_, `accent`, _);
  let _;
  typeof _ == `string` ? (_ = _) : _ && _(_, `dull`, _);
  let _;
  typeof _ == `string` ? (_ = _) : _ && _(_, `body`, _),
    _ && _(_, `success`, _),
    _ && _(_, `warning`, _),
    _ && _(_, `error`, _),
    _ && _(_, `success`, _),
    _ && _(_, `warning`, _),
    _ && _(_, `error`, _);
  let _ = (0, _.jsx)(_, {
    variants: _,
    children: (0, _.jsx)(`div`, {
      "data-accent-color": _,
      "data-dull-color": _,
      "data-body-text-color": _,
      style: _,
      children: (0, _.jsx)(`div`, {
        style: {
          display: `contents`,
          color: `var(--color-text-body-body)`,
        },
        children: _,
      }),
    }),
  });
  return _
    ? (0, _.jsx)(_, {
        breakpoints: _,
        children: _,
      })
    : _;
}
function _(_, _, _) {
  if (typeof _ == `string`)
    for (let _ of _) _[`--color-${_}-${_}`] = `var(--color-${_}-${_})`;
  else for (let [_, _] of Object.entries(_)) _[`--color-${_}-${_}`] = _;
}
function _(_, _, _) {
  if (typeof _ == `string`)
    for (let _ of _) _[`--color-text-${_}-${_}`] = `var(--color-${_}-${_})`;
  else for (let [_, _] of Object.entries(_)) _[`--color-text-${_}-${_}`] = _;
}
export { _, _ };
