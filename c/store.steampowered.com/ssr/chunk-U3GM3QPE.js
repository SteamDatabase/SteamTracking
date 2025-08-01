import { _, _ } from "./chunk-XXXXXXXX.js";
import { _, _, _ } from "./chunk-XXXXXXXX.js";
import { _ } from "./chunk-XXXXXXXX.js";
import { _, _ } from "./chunk-XXXXXXXX.js";
import { _ } from "./chunk-XXXXXXXX.js";
import { _, _, _ } from "./chunk-XXXXXXXX.js";
import { _ } from "./chunk-XXXXXXXX.js";
import { _ } from "./chunk-XXXXXXXX.js";
import { _ } from "./chunk-XXXXXXXX.js";
var _ = _(_());
var _ = _(_()),
  _ = _.createContext({
    ePreferredHWCompat: 0,
  });
function _(_) {
  let { ePreferredHWCompat: _ } = _;
  return (0, _.jsx)(_.Provider, {
    value: {
      ePreferredHWCompat: _,
    },
    children: _.children,
  });
}
function _() {
  return _.useContext(_).ePreferredHWCompat;
}
function _(_) {
  let _ = _(),
    _ = _();
  return _(_(_.GetAnonymousServiceTransport(), _, _));
}
function _(_, _, _) {
  return {
    queryKey: ["LocalizedTagNames", _],
    queryFn: async () => {
      let _ = `LocalizedTagNames2_${_}`,
        _ = await _.GetObject(_),
        _ = _.Init(_);
      _.Body().set_language(_),
        _?.version_hash && _.Body().set_have_version_hash(_.version_hash);
      let _ = await _.GetTagList(_, _),
        _;
      if (_.GetEResult() == 1)
        (_ = _.Body().toObject()), _ && _.StoreObject(_, _);
      else if (_.GetEResult() == 29) _ = _ || void 0;
      else if (_)
        console.warn(
          "Couldn't load updated tag localization, will continue with what we have from storage.",
        ),
          (_ = _);
      else throw _.GetErrorMessage();
      let _ = {};
      return (_?.tags || []).forEach(({ tagid: _, name: _ }) => (_[_] = _)), _;
    },
    staleTime: 60 * 60 * 1e3,
  };
}
function _(_, _) {
  let { data: _ } = _(_);
  return _ && _[_];
}
var _ = _(_(), 1),
  _ = _(_(), 1),
  _ = _.createContext({
    AddImpression: () => {
      console.log("Impression Tracking not enabled");
    },
    BIsValid: () => !1,
  });
function _() {
  return _.useContext(_);
}
function _(_) {
  return (0, _.jsx)(_.Provider, {
    value: _.ImpressionTracker,
    children: _.children,
  });
}
var _ = _(_(), 1),
  _ = _(_(), 1);
var _ = "F0YMvqVKHkY-";
function _() {
  return !(
    typeof HTMLElement < "u" &&
    typeof HTMLElement.prototype == "object" &&
    "popover" in HTMLElement.prototype
  );
}
async function _() {
  _() && (await import("./popover-fn-XXXXXXXX.js")).apply();
}
var _ = _(_(), 1);
_();
function _(_) {
  let [_, _] = _(_, "-");
  return _ === "left" || _ === "right" ? [void 0, _] : [_, _];
}
function _(_) {
  let {
      direction: _,
      ignoreHorizontal: _,
      ignoreVertical: _,
      dismissOnClick: _,
      interactionMode: _ = 0,
    } = _,
    _ = (0, _.useRef)(null),
    _ = (0, _.useRef)(!1),
    _ = (0, _.useRef)(!1),
    _ = (0, _.useRef)(null),
    [_, _] = (0, _.useState)(!1),
    [_, _] = (0, _.useMemo)(() => _(_), [_]),
    _ = (0, _.useCallback)(() => {
      if (!_.current || !_.current) return;
      let _ = _.current.getBoundingClientRect();
      _.current.style.setProperty("--parentWidth", `${_.width}px`),
        _.current.style.setProperty("--parentHeight", `${_.height}px`),
        _ ||
          (_ === "left"
            ? _
              ? ((_.current.style.left = "unset"),
                (_.current.style.right = `${document.documentElement.clientWidth - _.right}px`))
              : ((_.current.style.left = "unset"),
                (_.current.style.right = `${document.documentElement.clientWidth - _.left}px`))
            : _ === "right"
              ? _
                ? ((_.current.style.left = `${_.left}px`),
                  (_.current.style.right = "unset"))
                : ((_.current.style.left = `${_.right}px`),
                  (_.current.style.right = "unset"))
              : _ === void 0 &&
                ((_.current.style.left = `${_.left}px`),
                (_.current.style.right = "unset"))),
        _ ||
          (_ === "down"
            ? ((_.current.style.top = `${_.bottom}px`),
              (_.current.style.bottom = "unset"),
              _.current.style.setProperty(
                "--availableHeight",
                `${document.documentElement.clientHeight - _.bottom}px`,
              ))
            : _ === "up"
              ? ((_.current.style.top = "unset"),
                (_.current.style.bottom = `${document.documentElement.clientHeight - _.top}px`),
                _.current.style.setProperty("--availableHeight", `${_.top}px`))
              : _ === void 0 &&
                ((_.current.style.top = `${_.top}px`),
                (_.current.style.bottom = "unset"),
                _.current.style.setProperty(
                  "--availableHeight",
                  `${document.documentElement.clientHeight - _.top}px`,
                )));
    }, [_, _, _, _]),
    _ = (0, _.useMemo)(() => {
      if (_.current) return _(_.current);
    }, [_.current]);
  (0, _.useEffect)(() => {
    if (_)
      return (
        _.current?.showPopover(),
        _?.addEventListener("scroll", _),
        () => _?.removeEventListener("scroll", _)
      );
    window.sessionStorage.getItem("DEBUG_StickyContextMenus") != "true" &&
      _.current?.hidePopover();
  }, [_, _, _]);
  let _ = (0, _.useCallback)(() => {
      _(), _(!0), (_.current = !0);
    }, [_]),
    _ = (0, _.useCallback)(() => {
      (_.current = !1), _.current || _(!1);
    }, []),
    _ = (0, _.useCallback)(() => {
      (_.current = !0), _(!0);
    }, []),
    _ = (0, _.useCallback)(() => {
      (_.current = !1), _.current || _(!1);
    }, []),
    _ = (0, _.useCallback)(() => {
      _(), _();
    }, [_, _]),
    _ = (0, _.useCallback)(
      (_) => {
        _.key === "Enter" && (_.preventDefault(), _ ? _() : _());
      },
      [_, _, _],
    ),
    _ = (0, _.useCallback)(
      (_) => {
        !_.currentTarget.contains(_.relatedTarget) &&
          !_.current?.contains(_.relatedTarget) &&
          _();
      },
      [_],
    ),
    _ = (0, _.useCallback)(
      (_) => {
        let _ = _.relatedTarget && !_.currentTarget.contains(_.relatedTarget),
          _ = !_.relatedTarget && !_.current;
        (_ || _) && (_(), _(!1));
      },
      [_],
    ),
    _ = (0, _.useCallback)(() => {
      _ && _ ? _() : _();
    }, [_, _, _, _]),
    _ = (0, _.useCallback)(
      (_) => {
        _.key === "Enter" && _ && _ ? _() : _(),
          _.key === "Escape" && _ && (_(), _.stopPropagation());
      },
      [_, _, _, _],
    ),
    _ = _ === 0,
    _;
  return (
    _ && !_
      ? (_ = (_) => {
          _.preventDefault(), _();
        })
      : _ || (_ = _ ? _ : _),
    {
      isShowingMenu: _,
      triggerProps: {
        "aria-expanded": _,
        role: "button",
        onMouseEnter: _ ? _ : void 0,
        onMouseLeave: _ ? _ : void 0,
        onClick: _,
        ref: _,
        onKeyDown: _,
        onBlur: _,
      },
      menuProps: {
        popover: "manual",
        ref: _,
        onMouseEnter: _,
        onMouseLeave: _,
        onFocus: _,
        onBlur: _,
        onClick: _,
        onKeyDown: _,
        className: _,
      },
      closeMenu: _,
    }
  );
}
function _(_) {
  let {
      direction: _,
      interactionMode: _ = 0,
      ignoreHorizontal: _,
      ignoreVertical: _,
      dismissOnClick: _,
      menuTarget: _,
      className: _,
      children: _,
      _: _ = "div",
      ..._
    } = _,
    { triggerProps: _, menuProps: _ } = _(_);
  if (!_ || _.Children.toArray(_).length === 0) return _;
  let _ = _;
  return (0, _.jsxs)(_.Fragment, {
    children: [
      (0, _.cloneElement)(_, _),
      (0, _.jsx)(_, {
        ..._,
        className: (0, _.default)(_.className, _),
        ..._,
        children: _,
      }),
    ],
  });
}
var _ = _(_());
function _(_) {
  let { appID: _, feature: _, depth: _, children: _ } = _,
    _ = _(_, _),
    _ = _(),
    [_, _] = _.default.useState(void 0),
    _ = _.default.useCallback(
      (_) => {
        _.isIntersecting &&
          _((_) =>
            _?.appID == _ && _?.snr == _
              ? _
              : {
                  appID: _,
                  snr: _,
                },
          );
      },
      [_, _],
    );
  (0, _.useEffect)(() => {
    _ && _.appID != null && _.AddImpression(_.appID, _.snr);
  }, [_, _]);
  let _ = _(_),
    _ = _ && (!_ || (_.appID != _ && _.snr != _)),
    _ = _(_.ref, _ ? _ : void 0);
  return _.default.cloneElement(_, {
    ref: _,
  });
}
export { _, _, _, _, _, _, _, _ };
