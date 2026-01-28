import { _, _, _ } from "./chunk-XXXXXXXX.js";
import { _, _ } from "./chunk-XXXXXXXX.js";
import { _ } from "./chunk-XXXXXXXX.js";
import { _, _ } from "./chunk-XXXXXXXX.js";
import { _ } from "./chunk-XXXXXXXX.js";
var _ = _(_());
var _ = _(_());
function _(_, _, _ = null) {
  let _ = _(_, _);
  return _.AddNavParamToURL(_, _);
}
function _(_, _, _, _ = null) {
  let _ = _(_, _, _);
  if (_ && Object.keys(_).length > 0)
    try {
      let _ = new URL(_(_)),
        _ = new URLSearchParams(_.search);
      return (
        Object.entries(_).forEach(([_, _]) => {
          _.set(_, encodeURIComponent(_ ?? ""));
        }),
        _.origin + _.pathname + "?" + _.toString() + _.hash
      );
    } catch (_) {
      _.WEB_UNIVERSE == "dev" &&
        console.error("UTM parameter parsing failed:", _, _);
    }
  return _;
}
function _(_, _ = null) {
  return _?.domain ? _.GetLinkParam(_, _) : _.SNR;
}
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
function _() {
  return _.useContext(_);
}
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
export { _, _, _ };
