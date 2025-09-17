import { _ } from "./chunk-XXXXXXXX.js";
import { _ } from "./chunk-XXXXXXXX.js";
import { _, _, _ } from "./chunk-XXXXXXXX.js";
import { _ } from "./chunk-XXXXXXXX.js";
import { _ } from "./chunk-XXXXXXXX.js";
var _ = _(_(), 1);
var _ = _.createContext({
  eAdultOnlyMediaBehavior: "masked",
});
function _() {
  return _.useMemo(() => {
    let _ = _("forceallages");
    return !!(
      (_ && _ !== "0") ||
      (_.IN_MOBILE_WEBVIEW && navigator.userAgent.match(/Android/))
    );
  }, []);
}
function _() {
  let { eAdultOnlyMediaBehavior: _ } = _.useContext(_),
    _ = _();
  return _() ||
    (_ == "masked" &&
      (_.excluded_content_descriptors.includes(4) ||
        _.excluded_content_descriptors.includes(3)))
    ? "blocked"
    : _ == "masked" && _
      ? "allowed"
      : _;
}
function _() {
  return _() != "allowed";
}
var _ = "bDisableAOWarning",
  _ = 2 * _.PerDay;
function _() {
  let _ = _(_),
    _ = _ ? parseInt(_) : 0;
  return _ != 0 ? _ : null;
}
function _() {
  let { data: _ } = _({
    queryKey: ["AOWarningCookie"],
    queryFn: () => _(),
    placeholderData: () => _(),
    staleTime: 0,
  });
  return _ && _ > Date.now() / 1e3;
}
export { _ };
