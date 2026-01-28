import { _ } from "./chunk-XXXXXXXX.js";
import { _ } from "./chunk-XXXXXXXX.js";
import { _ } from "./chunk-XXXXXXXX.js";
import { _ } from "./chunk-XXXXXXXX.js";
var _ = _(_());
var _ = {
  HoverPosition: "pKS2pegh-RQ-",
  Ready: "lNlkfTairww-",
  NoSpace: "_--Ss-RzFfa4-",
  EnablePointerEvents: "WKYfhU-e-Vs-",
  HoverAboveModal: "l5PVpLvx0Ik-",
  HoverPositionOuter: "jAGa1MCcCRo-",
};
var _ = _(_());
function _(_) {
  let {
      target: _,
      visibilityObserver: _,
      className: _,
      style: _,
      bEnablePointerEvents: _,
      direction: _ = "right",
      nBodyAlignment: _ = 0.5,
      nBodyDistance: _ = 8,
      nAllowOffscreenPx: _ = 10,
      nMaxLateralMoveOnScreen: _ = void 0,
      onNoSpace: _,
      bTopmost: _,
      children: _,
      ..._
    } = _,
    [_, _] = _.useState(void 0),
    [_, _] = _.useState(void 0),
    [_, _] = _.useState(!1),
    [_, _] = _.useState(!1),
    [_, _] = _.useState(null),
    _ = _.useCallback(() => {
      let _ = _;
      if (!_ || !_ || (_ && _ && !_.visible)) return;
      let _ = _.ownerDocument.defaultView;
      if (!_ || _.closed) return;
      let _ = _.querySelector(".hover_arrow.left"),
        _ = _.querySelector(".hover_arrow.right"),
        _ = _.querySelector(".hover_arrow.top"),
        _ = _.querySelector(".hover_arrow.bottom"),
        _ = _.getBoundingClientRect(),
        _ = _.getBoundingClientRect(),
        _ = _ == "overlay" || _ == "overlay-center";
      _ && _.setAttribute("style", "display: none;"),
        _ && _.setAttribute("style", "display: none;"),
        _ && _.setAttribute("style", "display: none;"),
        _ && _.setAttribute("style", "display: none;");
      let _ = _;
      _.matches(":dir(rtl)") &&
        (_ === "left" ? (_ = "right") : _ === "right" && (_ = "left"));
      let {
          nLeft: _,
          nTop: _,
          nOverflow: _,
          nLateralOverflow: _,
        } = _(_, _, _, _, _, _.innerWidth, _.innerHeight),
        _ = _;
      if (_ > (_ ?? 10) && !_) {
        let _ = _(_),
          {
            nLeft: _,
            nTop: _,
            nOverflow: _,
            nLateralOverflow: _,
          } = _(_, _, _, _, _, _.innerWidth, _.innerHeight);
        if (
          (_ < _ && ((_ = _), (_ = _), (_ = _), (_ = _), (_ = _)),
          _ > (_ ?? 10))
        ) {
          console.log(
            "Not showing hover because it didn't fit in the main or alt direction",
          ),
            _.setAttribute("style", "display: none;"),
            _(!0),
            _?.();
          return;
        }
      }
      _ !== 0 && !_ && ([_, _] = _(_, _, _, _, _));
      let _ = null;
      switch (_) {
        case "left":
          _ = _;
          break;
        case "right":
          _ = _;
          break;
        case "top":
          _ = _;
          break;
        case "bottom":
          _ = _;
          break;
      }
      _ && _.setAttribute("style", ""),
        _ != _ && _(_),
        _ != _ && _(_),
        _ || _(!0);
    }, [_, _, _, _, _, _, _, _, _, _, _, _]);
  _.useEffect(() => _(), [_]);
  let _ = Object.assign(
      {
        left: _,
        top: _,
      },
      _,
    ),
    _ = !_ || _.visible;
  return (0, _.jsx)("div", {
    className: _(_.HoverPositionOuter, _ && _.HoverAboveModal),
    children: (0, _.jsx)("div", {
      ..._,
      className: _(
        _.HoverPosition,
        _ && _ && _.Ready,
        _ && _.NoSpace,
        _ && _.EnablePointerEvents,
        _,
      ),
      style: _,
      ref: _,
      children: _,
    }),
  });
}
function _(_) {
  switch (_) {
    case "right":
      return "left";
    case "left":
      return "right";
    case "bottom":
      return "top";
    case "top":
      return "bottom";
    case "overlay":
      return "overlay";
    case "overlay-center":
      return "overlay-center";
  }
}
function _(_, _, _, _, _, _, _) {
  let _ = _,
    _ = _,
    _ = 0,
    _ = 0,
    _,
    _,
    _,
    _;
  switch (_) {
    case "right":
      (_ = _.right + _),
        (_ = _(_.top, _.height, _.height, _)),
        (_ = Math.max(0, _ + _.width - _)),
        (_ = [Math.max(0, _ - _), Math.max(0, _ + _.height - _)]);
      break;
    case "left":
      (_ = _.left - _ - _.width),
        (_ = _(_.top, _.height, _.height, _)),
        (_ = Math.max(0, _ - _)),
        (_ = [Math.max(0, _ - _), Math.max(0, _ + _.height - _)]);
      break;
    case "bottom":
      (_ = _(_.left, _.width, _.width, _)),
        (_ = _.bottom + _),
        (_ = Math.max(0, _ + _.height - _)),
        (_ = [Math.max(0, _ - _), Math.max(0, _ + _.width - _)]);
      break;
    case "top":
      (_ = _(_.left, _.width, _.width, _)),
        (_ = _.top - _ - _.height),
        (_ = Math.max(0, _ - _)),
        (_ = [Math.max(0, _ - _), Math.max(0, _ + _.width - _)]);
      break;
    case "overlay":
      (_ = _.left), (_ = _.top), (_ = 0), (_ = [0, 0]);
      break;
    case "overlay-center":
      (_ = _.left + 0.5 * _.width - 0.5 * _.width),
        (_ = _.top + 0.5 * _.height - 0.5 * _.height),
        (_ = 0),
        (_ = [0, 0]);
      break;
  }
  return {
    nLeft: _,
    nTop: _,
    nOverflow: _,
    nLateralOverflow: _,
  };
}
function _(_, _, _, _) {
  return Math.max(0, Math.min(1, _)) * (_ - _) + _;
}
function _(_, _, _, _, _) {
  let _ = Math.max(_[0], _[1]);
  _ !== void 0 && (_ = Math.min(_, _)), (_ = Math.max(0, _));
  let _ = _[0] > _[1] ? _ : -_;
  return _ === "left" || _ === "right" ? (_ += _) : (_ += _), [_, _];
}
export { _ };
