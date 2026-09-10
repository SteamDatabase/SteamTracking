function _(_, _) {
  return _ < _ ? -1 : +(_ > _);
}
function _(_, _) {
  let _ = _.toString(),
    _ = ``;
  for (let _ = 0; _ < _ - _.length; _++) _ += `0`;
  return _ + _;
}
function _(_, _ = !1) {
  if (Number.isNaN(_) || !Number.isFinite(_)) return ``;
  let _ = _ < 0;
  _ = Math.abs(_);
  let _ = Math.floor(_ / 3600),
    _ = Math.floor((_ % 3600) / 60),
    _ = Math.floor(_ % 60),
    _ = _ ? `-` : ``;
  return !_ || _ > 0 ? `${_}${_}:${_(_, 2)}:${_(_, 2)}` : `${_}${_}:${_(_, 2)}`;
}
function _(_) {
  return _
    ? DOMParser
      ? new DOMParser().parseFromString(_, `text/html`).documentElement
          .textContent
      : _
    : ``;
}
function _(_, _ = ``) {
  return _.replace(/\bhttps?:\/\/\S+/gi, _);
}
function _(_, _, _ = !0) {
  let _ = _.trim();
  if (((_ = _.replace(_ ? /\s+/g : /[ \t]+/g, ` `)), _.length > _)) {
    _ = _.substring(0, _);
    let _ = _.replace(/^(.*([.!?])) .*$/, `$1`),
      _ = _.length;
    (_ < _ * 0.6 || _ == _) && (_ = _.replace(/ [^ ]*$/, `...`)),
      (_ = _ ? _.replace(/(\r\n|\n|\r)/gm, ``) : _);
  }
  return _;
}
function _(_) {
  return atob(_.replace(/-/g, `+`).replace(/_/g, `/`));
}
function _(_) {
  return btoa(_).replace(/\+/g, `-`).replace(`///g`, `_`).replace(/=/g, ``);
}
export { _, _, _, _, _, _, _ };
