_();
function _(_, _, _ = !0) {
  let _ = new URLSearchParams({
    ima: `fit`,
    impolicy: `Letterbox`,
    imcolor: `#000000`,
  });
  return (
    _ && _.set(`imw`, Math.round(_).toString()),
    _ && _.set(`imh`, Math.round(_).toString()),
    !_ || !_ || !_ ? _.set(`letterbox`, `false`) : _.set(`letterbox`, `true`),
    `?` + _.toString()
  );
}
export { _ };
