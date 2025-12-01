import { _, _, _, _, _, _, _ } from "./chunk-XXXXXXXX.js";
import { _ } from "./chunk-XXXXXXXX.js";
import { _ } from "./chunk-XXXXXXXX.js";
import { _ } from "./chunk-XXXXXXXX.js";
import { _ } from "./chunk-XXXXXXXX.js";
import { _ } from "./chunk-XXXXXXXX.js";
var _ = _(_()),
  _ = _(_());
var _ = _(_()),
  _ = _.default.createContext({
    Component: _,
  });
function _(_) {
  let {
      "flow-children": _,
      onActivate: _,
      onCancel: _,
      focusClassName: _,
      focusWithinClassName: _,
      ..._
    } = _,
    { elemProps: _, navOptions: _, gamepadEvents: _ } = _(_),
    _ = {},
    _ = _(_);
  _ != 0 && (_.layout = _),
    _ && ((_.onClick = _.onClick || _), (_.onOKButton = _.onOKButton || _)),
    _.onOKButton &&
      _.focusable === void 0 &&
      _.focusableIfEmpty === void 0 &&
      (_.focusable = !0),
    _ && (_.onCancelButton = _.onCancelButton || _);
  let { ref: _, node: _ } = _({
      ..._,
      ..._,
    }),
    _ = _();
  (_.className = (0, _.default)(_.className, "Panel", _ && "Focusable")),
    _(_, _);
  let _ = _(_, _.ref);
  (_.focusable || _.focusableIfEmpty) &&
    (!_ || !_.Tree.BUseVirtualFocus()) &&
    (_.tabIndex = _.tabIndex || 0),
    _.focusable && (_ || _.onOKButton) && (_.role ??= "button");
  let _ = (0, _.useContext)(_).Component;
  return (0, _.jsx)(_.Provider, {
    value: _,
    children: _
      ? (0, _.jsx)(_, {
          ..._,
          divRef: _,
          node: _,
          focusClassName: (0, _.default)(_, "gpfocus"),
          focusWithinClassName: (0, _.default)(_, "gpfocuswithin"),
        })
      : (0, _.jsx)("div", {
          ..._,
          ref: _,
        }),
  });
}
export { _ };
