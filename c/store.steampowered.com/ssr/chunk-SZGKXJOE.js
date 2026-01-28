import { _ } from "./chunk-XXXXXXXX.js";
var _ = _((_) => {
  "use strict";
  _.byteLength = _;
  _.toByteArray = _;
  _.fromByteArray = _;
  var _ = [],
    _ = [],
    _ = typeof Uint8Array < "u" ? Uint8Array : Array,
    _ = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
  for (_ = 0, _ = _.length; _ < _; ++_) (_[_] = _[_]), (_[_.charCodeAt(_)] = _);
  var _, _;
  _[45] = 62;
  _[95] = 63;
  function _(_) {
    var _ = _.length;
    if (_ % 4 > 0)
      throw new Error("Invalid string. Length must be a multiple of 4");
    var _ = _.indexOf("=");
    _ === -1 && (_ = _);
    var _ = _ === _ ? 0 : 4 - (_ % 4);
    return [_, _];
  }
  function _(_) {
    var _ = _(_),
      _ = _[0],
      _ = _[1];
    return ((_ + _) * 3) / 4 - _;
  }
  function _(_, _, _) {
    return ((_ + _) * 3) / 4 - _;
  }
  function _(_) {
    var _,
      _ = _(_),
      _ = _[0],
      _ = _[1],
      _ = new _(_(_, _, _)),
      _ = 0,
      _ = _ > 0 ? _ - 4 : _,
      _;
    for (_ = 0; _ < _; _ += 4)
      (_ =
        (_[_.charCodeAt(_)] << 18) |
        (_[_.charCodeAt(_ + 1)] << 12) |
        (_[_.charCodeAt(_ + 2)] << 6) |
        _[_.charCodeAt(_ + 3)]),
        (_[_++] = (_ >> 16) & 255),
        (_[_++] = (_ >> 8) & 255),
        (_[_++] = _ & 255);
    return (
      _ === 2 &&
        ((_ = (_[_.charCodeAt(_)] << 2) | (_[_.charCodeAt(_ + 1)] >> 4)),
        (_[_++] = _ & 255)),
      _ === 1 &&
        ((_ =
          (_[_.charCodeAt(_)] << 10) |
          (_[_.charCodeAt(_ + 1)] << 4) |
          (_[_.charCodeAt(_ + 2)] >> 2)),
        (_[_++] = (_ >> 8) & 255),
        (_[_++] = _ & 255)),
      _
    );
  }
  function _(_) {
    return _[(_ >> 18) & 63] + _[(_ >> 12) & 63] + _[(_ >> 6) & 63] + _[_ & 63];
  }
  function _(_, _, _) {
    for (var _, _ = [], _ = _; _ < _; _ += 3)
      (_ =
        ((_[_] << 16) & 16711680) +
        ((_[_ + 1] << 8) & 65280) +
        (_[_ + 2] & 255)),
        _.push(_(_));
    return _.join("");
  }
  function _(_) {
    for (
      var _, _ = _.length, _ = _ % 3, _ = [], _ = 16383, _ = 0, _ = _ - _;
      _ < _;
      _ += _
    )
      _.push(_(_, _, _ + _ > _ ? _ : _ + _));
    return (
      _ === 1
        ? ((_ = _[_ - 1]), _.push(_[_ >> 2] + _[(_ << 4) & 63] + "=="))
        : _ === 2 &&
          ((_ = (_[_ - 2] << 8) + _[_ - 1]),
          _.push(_[_ >> 10] + _[(_ >> 4) & 63] + _[(_ << 2) & 63] + "=")),
      _.join("")
    );
  }
});
export { _ };
