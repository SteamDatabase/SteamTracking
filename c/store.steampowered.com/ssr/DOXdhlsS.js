_();
var _ = _();
function _(_) {
  let { color: _, contrast: _, size: _, weight: _, children: _ } = _,
    _ = {},
    _ = _();
  if (_ || _) {
    let _ = _(_(_, _) ?? `text-body`, _(_, _) ?? `body`);
    (_[`--text-color`] = _), (_.color = _);
  }
  if ((_ && (_[`--text-weight`] = _(_, _)), _)) {
    let _ = _(_, _);
    (_[`--font-size`] = `var(--text-size-${_})`),
      (_[`--line-height`] = `var(--line-height-${_})`),
      (_[`--letter-spacing`] = `var(--letter-spacing-${_})`);
  }
  return (0, _.jsx)(_, {
    display: `contents`,
    style: _,
    children: _,
  });
}
export { _ };
