function _(_, _) {
  return _ ? typeof _.SteamClient == "object" && _ in _.SteamClient : !1;
}
function _(_, _) {
  if (!_) return !1;
  let [_, _] = _.split(".", 2);
  return _ && _ && _(_, _) && _ in _.SteamClient[_];
}
function _(_) {
  return _(window, _);
}
function _(_) {
  return _ != null && _.focus !== void 0;
}
function _(_, _) {
  let _ = _;
  for (; _; ) {
    if (
      (_.parentNode?.nodeType == Node.DOCUMENT_FRAGMENT_NODE &&
        (_ = _.parentNode.host),
      _ == _)
    )
      return !0;
    _ = _.parentElement;
  }
  return !1;
}
function _(_, _) {
  let _ = 0,
    _ = 0;
  return (
    _.right < _.left
      ? (_ = _.left - _.right)
      : _.left > _.right && (_ = _.left - _.right),
    _.bottom < _.top
      ? (_ = _.top - _.bottom)
      : _.top > _.bottom && (_ = _.top - _.bottom),
    Math.sqrt(_ * _ + _ * _)
  );
}
function _(_, _) {
  return {
    top: _.screenTop + _.top,
    bottom: _.screenTop + _.bottom,
    left: _.screenLeft + _.left,
    right: _.screenLeft + _.right,
  };
}
function _(_) {
  let _ = 1,
    _ = _;
  for (; _ != null && _.tagName != "HTML"; ) {
    let _ = getComputedStyle(_);
    if (_.zoom) {
      let _ = Number.parseFloat(_.zoom);
      isNaN(_) || (_ *= _);
    }
    _ = _.parentElement;
  }
  return _;
}
function _(_) {
  let _;
  return (
    _ && _(_.currentTarget) && (_ = _.currentTarget.ownerDocument.defaultView),
    _
  );
}
function _(_) {
  let _;
  return _ && (_ = _.ownerDocument.defaultView), _;
}
function _(_) {
  return _.nodeName === "INPUT";
}
function _(_, _) {
  switch (_) {
    case "TEXTAREA":
      return !0;
    case "INPUT":
      switch (_) {
        case "date":
        case "datetime-local":
        case "datetime":
        case "email":
        case "month":
        case "number":
        case "password":
        case "search":
        case "tel":
        case "text":
        case "time":
        case "url":
        case "week":
          return !0;
        default:
          return !1;
      }
    default:
      return !1;
  }
}
function _(_, _) {
  let _ = _?.parentElement;
  for (; _; ) {
    if (_(_)) {
      if (!_ || _ == "x") {
        let _ = window.getComputedStyle(_);
        if (
          _.overflowX == "scroll" ||
          _.overflowX == "auto" ||
          _.position == "fixed"
        )
          break;
      }
      if (!_ || _ == "y") {
        let _ = window.getComputedStyle(_);
        if (
          _.overflowY == "scroll" ||
          _.overflowY == "auto" ||
          _.position == "fixed"
        )
          break;
      }
    }
    _ = _.parentElement;
  }
  return _(_) ? _ : null;
}
function _(_, _) {
  let _ = [],
    _ = _;
  for (; (_ = _(_, _)); ) _.push(_);
  return _;
}
function _(_, _) {
  let _ = _;
  for (; _; ) {
    if (_(_)) return _;
    _ = _.parentElement;
  }
}
function _() {
  return _(document);
}
function _(_) {
  let _ = {};
  return (
    _.querySelectorAll('link[rel="stylesheet"]').forEach((_) => {
      _[_.href] = _;
    }),
    _
  );
}
function _(_, _) {
  _(_.document, _, !0);
}
function _(_, _, _) {
  let _ = Object.assign({}, _),
    _ = _.getElementsByTagName("head")[0],
    _ = _.getElementsByTagName("link"),
    _ = _.length;
  for (let _ = 0; _ < _; ++_) {
    let _ = _[_];
    _[_.href] ? delete _[_.href] : _ && _.parentNode?.removeChild(_);
  }
  let _ = [];
  for (let _ in _) {
    let _ = _[_],
      _ = _.createElement("link");
    for (let _ = 0; _ < _.attributes.length; _++) {
      let _ = _.attributes.item(_);
      _.setAttribute(_.name, _.value);
    }
    _.push(_);
  }
  return _.prepend(..._), _;
}
export { _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _ };
