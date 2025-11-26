import { _, _, _ } from "./chunk-XXXXXXXX.js";
import { _ } from "./chunk-XXXXXXXX.js";
import { _ } from "./chunk-XXXXXXXX.js";
import { _ } from "./chunk-XXXXXXXX.js";
import { _, _ } from "./chunk-XXXXXXXX.js";
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
var _ = _(_());
var _ = _(_());
var _ = class _ {
  static sm_strDomain;
  static sm_strController;
  static sm_strMethod;
  static sm_strSubmethod;
  static sm_strComputedLinkPrefix;
  static SetNavEventParams(_, _, _ = null, _ = null) {
    (_.sm_strDomain = _),
      (_.sm_strController = _),
      (_.sm_strMethod = _),
      (_.sm_strSubmethod = _),
      (_.sm_strComputedLinkPrefix = null);
  }
  static GetDefaultParams() {
    let _ = {
      domain: _.sm_strDomain,
      controller: _.sm_strController,
    };
    return (
      _.sm_strMethod && (_.method = _.sm_strMethod),
      _.sm_strSubmethod && (_.submethod = _.sm_strSubmethod),
      _
    );
  }
  static InstrumentLink(_, _, _ = null) {
    let _ = _.GetLinkParam(_, _);
    return _.AddNavParamToURL(_, _);
  }
  static GetLinkParam(_, _ = null) {
    let _;
    if (typeof _ != "string") {
      if (_.domain) return _.GetLinkParam(_, _);
      _ = _.feature || "";
    }
    let _;
    if (!_.sm_strComputedLinkPrefix && !_.ComputeStaticLinkPrefix())
      return null;
    _ = _.sm_strComputedLinkPrefix;
    let _ = _.EncodeEventComponent(_);
    return _ && ((_ += "_" + _), _ && (_ += "_" + _)), _;
  }
  static ComputeStaticLinkPrefix() {
    return _.sm_strDomain
      ? ((_.sm_strComputedLinkPrefix = _.ComputeLinkPrefix(
          _.sm_strDomain,
          _.sm_strController,
          _.sm_strMethod,
          _.sm_strSubmethod,
        )),
        !0)
      : (_(
          !1,
          "CStoreNavEvents::SetNavEventParams was not called before calling InstrumentLink!",
        ),
        !1);
  }
};
var _ = _(_()),
  _ = _(_()),
  _ = _.createContext({});
var _ = _(_());
function _(_) {
  let { children: _, ..._ } = _,
    _ = _(),
    _ = _.useMemo(
      () => ({
        ..._.GetDefaultParams(),
        ..._,
        ..._,
      }),
      [_, _.domain, _.controller, _.method, _.submethod, _.feature, _.depth],
    );
  return (0, _.jsx)(_, {
    ..._,
    children: _,
  });
}
export { _, _ };
