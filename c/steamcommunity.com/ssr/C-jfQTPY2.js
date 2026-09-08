var _ = _(_(), 1);
function _() {
  return typeof window < `u`;
}
function _(_) {
  return _(_) ? (_.nodeName || ``).toLowerCase() : `#document`;
}
function _(_) {
  var _;
  return (
    (_ == null || (_ = _.ownerDocument) == null ? void 0 : _.defaultView) ||
    window
  );
}
function _(_) {
  return ((_(_) ? _.ownerDocument : _.document) || window.document)
    ?.documentElement;
}
function _(_) {
  return _() ? _ instanceof Node || _ instanceof _(_).Node : !1;
}
function _(_) {
  return _() ? _ instanceof Element || _ instanceof _(_).Element : !1;
}
function _(_) {
  return _() ? _ instanceof HTMLElement || _ instanceof _(_).HTMLElement : !1;
}
function _(_) {
  return !_() || typeof ShadowRoot > `u`
    ? !1
    : _ instanceof ShadowRoot || _ instanceof _(_).ShadowRoot;
}
function _(_) {
  let { overflow: _, overflowX: _, overflowY: _, display: _ } = _(_);
  return (
    /auto|scroll|overlay|hidden|clip/.test(_ + _ + _) &&
    _ !== `inline` &&
    _ !== `contents`
  );
}
function _(_) {
  return /^(table|td|th)$/.test(_(_));
}
function _(_) {
  try {
    if (_.matches(`:popover-open`)) return !0;
  } catch {}
  try {
    return _.matches(`:modal`);
  } catch {
    return !1;
  }
}
var _ = /transform|translate|scale|rotate|perspective|filter/,
  _ = /paint|layout|strict|content/,
  _ = (_) => !!_ && _ !== `none`,
  _;
function _(_) {
  let _ = _(_) ? _(_) : _;
  return (
    _(_.transform) ||
    _(_.translate) ||
    _(_.scale) ||
    _(_.rotate) ||
    _(_.perspective) ||
    (!_() && (_(_.backdropFilter) || _(_.filter))) ||
    _.test(_.willChange || ``) ||
    _.test(_.contain || ``)
  );
}
function _(_) {
  let _ = _(_);
  for (; _(_) && !_(_); ) {
    if (_(_)) return _;
    if (_(_)) return null;
    _ = _(_);
  }
  return null;
}
function _() {
  return (
    (_ ??=
      typeof CSS < `u` &&
      CSS.supports &&
      CSS.supports(`-webkit-backdrop-filter`, `none`)),
    _
  );
}
function _(_) {
  return /^(html|body|#document)$/.test(_(_));
}
function _(_) {
  return _(_).getComputedStyle(_);
}
function _(_) {
  return _(_)
    ? {
        scrollLeft: _.scrollLeft,
        scrollTop: _.scrollTop,
      }
    : {
        scrollLeft: _.scrollX,
        scrollTop: _.scrollY,
      };
}
function _(_) {
  if (_(_) === `html`) return _;
  let _ = _.assignedSlot || _.parentNode || (_(_) && _.host) || _(_);
  return _(_) ? _.host : _;
}
function _(_) {
  let _ = _(_);
  return _(_) ? (_.ownerDocument || _).body : _(_) && _(_) ? _ : _(_);
}
function _(_, _, _) {
  _ === void 0 && (_ = []), _ === void 0 && (_ = !0);
  let _ = _(_),
    _ = _ === _.ownerDocument?.body,
    _ = _(_);
  if (_) {
    let _ = _(_);
    return _.concat(
      _,
      _.visualViewport || [],
      _(_) ? _ : [],
      _ && _ ? _(_) : [],
    );
  } else return _.concat(_, _(_, [], _));
}
function _(_) {
  return _.parent && Object.getPrototypeOf(_.parent) ? _.frameElement : null;
}
function _(_) {
  let _ = _.activeElement;
  for (
    ;
    ((_ = _) == null || (_ = _.shadowRoot) == null
      ? void 0
      : _.activeElement) != null;
  ) {
    var _;
    _ = _.shadowRoot.activeElement;
  }
  return _;
}
function _(_, _) {
  if (!_ || !_) return !1;
  let _ = _.getRootNode == null ? void 0 : _.getRootNode();
  if (_.contains(_)) return !0;
  if (_ && _(_)) {
    let _ = _;
    for (; _; ) {
      if (_ === _) return !0;
      _ = _.parentNode || _.host;
    }
  }
  return !1;
}
function _() {
  let _ = navigator.userAgentData;
  return _ != null && _.platform ? _.platform : navigator.platform;
}
function _() {
  let _ = navigator.userAgentData;
  return _ && Array.isArray(_.brands)
    ? _.brands
        .map((_) => {
          let { brand: _, version: _ } = _;
          return _ + `/` + _;
        })
        .join(` `)
    : navigator.userAgent;
}
function _(_) {
  return _.mozInputSource === 0 && _.isTrusted
    ? !0
    : _() && _.pointerType
      ? _.type === `click` && _.buttons === 1
      : _.detail === 0 && !_.pointerType;
}
function _(_) {
  return _()
    ? !1
    : (!_() && _.width === 0 && _.height === 0) ||
        (_() &&
          _.width === 1 &&
          _.height === 1 &&
          _.pressure === 0 &&
          _.detail === 0 &&
          _.pointerType === `mouse`) ||
        (_.width < 1 &&
          _.height < 1 &&
          _.pressure === 0 &&
          _.detail === 0 &&
          _.pointerType === `touch`);
}
function _() {
  return /apple/i.test(navigator.vendor);
}
function _() {
  let _ = /android/i;
  return _.test(_()) || _.test(_());
}
function _() {
  return _().toLowerCase().startsWith(`mac`) && !navigator.maxTouchPoints;
}
function _() {
  return _().includes(`jsdom/`);
}
function _(_, _) {
  let _ = [`mouse`, `pen`];
  return _ || _.push(``, void 0), _.includes(_);
}
function _(_) {
  return `nativeEvent` in _;
}
function _(_) {
  return _.matches(`html,body`);
}
function _(_) {
  return _?.ownerDocument || document;
}
function _(_, _) {
  if (_ == null) return !1;
  if (`composedPath` in _) return _.composedPath().includes(_);
  let _ = _;
  return _.target != null && _.contains(_.target);
}
function _(_) {
  return `composedPath` in _ ? _.composedPath()[0] : _.target;
}
function _(_) {
  return (
    _(_) &&
    _.matches(
      `input:not([type='hidden']):not([disabled]),[contenteditable]:not([contenteditable='false']),textarea:not([disabled])`,
    )
  );
}
function _(_) {
  _.preventDefault(), _.stopPropagation();
}
function _(_) {
  return _ ? _.getAttribute(`role`) === `combobox` && _(_) : !1;
}
var _ = Math.min,
  _ = Math.max,
  _ = Math.round,
  _ = Math.floor,
  _ = (_) => ({
    _: _,
    _: _,
  }),
  _ = {
    left: `right`,
    right: `left`,
    bottom: `top`,
    top: `bottom`,
  };
function _(_, _, _) {
  return _(_, _(_, _));
}
function _(_, _) {
  return typeof _ == `function` ? _(_) : _;
}
function _(_) {
  return _.split(`-`)[0];
}
function _(_) {
  return _.split(`-`)[1];
}
function _(_) {
  return _ === `x` ? `y` : `x`;
}
function _(_) {
  return _ === `y` ? `height` : `width`;
}
function _(_) {
  let _ = _[0];
  return _ === `t` || _ === `b` ? `y` : `x`;
}
function _(_) {
  return _(_(_));
}
function _(_, _, _) {
  _ === void 0 && (_ = !1);
  let _ = _(_),
    _ = _(_),
    _ = _(_),
    _ =
      _ === `x`
        ? _ === (_ ? `end` : `start`)
          ? `right`
          : `left`
        : _ === `start`
          ? `bottom`
          : `top`;
  return _.reference[_] > _.floating[_] && (_ = _(_)), [_, _(_)];
}
function _(_) {
  let _ = _(_);
  return [_(_), _, _(_)];
}
function _(_) {
  return _.includes(`start`)
    ? _.replace(`start`, `end`)
    : _.replace(`end`, `start`);
}
var _ = [`left`, `right`],
  _ = [`right`, `left`],
  _ = [`top`, `bottom`],
  _ = [`bottom`, `top`];
function _(_, _, _) {
  switch (_) {
    case `top`:
    case `bottom`:
      return _ ? (_ ? _ : _) : _ ? _ : _;
    case `left`:
    case `right`:
      return _ ? _ : _;
    default:
      return [];
  }
}
function _(_, _, _, _) {
  let _ = _(_),
    _ = _(_(_), _ === `start`, _);
  return (
    _ && ((_ = _.map((_) => _ + `-` + _)), _ && (_ = _.concat(_.map(_)))), _
  );
}
function _(_) {
  let _ = _(_);
  return _[_] + _.slice(_.length);
}
function _(_) {
  return {
    top: _.top ?? 0,
    right: _.right ?? 0,
    bottom: _.bottom ?? 0,
    left: _.left ?? 0,
  };
}
function _(_) {
  return typeof _ == `number`
    ? {
        top: _,
        right: _,
        bottom: _,
        left: _,
      }
    : _(_);
}
function _(_) {
  let { _: _, _: _, width: _, height: _ } = _;
  return {
    width: _,
    height: _,
    top: _,
    left: _,
    right: _ + _,
    bottom: _ + _,
    _: _,
    _: _,
  };
}
var _ = _(),
  _ = [
    `input:not([inert])`,
    `select:not([inert])`,
    `textarea:not([inert])`,
    `a[href]:not([inert])`,
    `button:not([inert])`,
    `[tabindex]:not(slot):not([inert])`,
    `audio[controls]:not([inert])`,
    `video[controls]:not([inert])`,
    `[contenteditable]:not([contenteditable="false"]):not([inert])`,
    `details>summary:first-of-type:not([inert])`,
    `details:not([inert])`,
  ].join(`,`),
  _ = typeof Element > `u`,
  _ = _
    ? function () {}
    : Element.prototype.matches ||
      Element.prototype.msMatchesSelector ||
      Element.prototype.webkitMatchesSelector,
  _ =
    !_ && Element.prototype.getRootNode
      ? function (_) {
          return _?.getRootNode?.call(_);
        }
      : function (_) {
          return _?.ownerDocument;
        },
  _ = function _(_, _) {
    _ === void 0 && (_ = !0);
    var _ = _?.getAttribute?.call(_, `inert`);
    return _ === `` || _ === `true` || (_ && _ && _(_.parentNode));
  },
  _ = function (_) {
    var _ = _?.getAttribute?.call(_, `contenteditable`);
    return _ === `` || _ === `true`;
  },
  _ = function (_, _, _) {
    if (_(_)) return [];
    var _ = Array.prototype.slice.apply(_.querySelectorAll(_));
    return _ && _.call(_, _) && _.unshift(_), (_ = _.filter(_)), _;
  },
  _ = function _(_, _, _) {
    for (var _ = [], _ = Array.from(_); _.length; ) {
      var _ = _.shift();
      if (!_(_, !1))
        if (_.tagName === `SLOT`) {
          var _ = _.assignedElements(),
            _ = _(_.length ? _ : _.children, !0, _);
          _.flatten
            ? _.push.apply(_, _)
            : _.push({
                scopeParent: _,
                candidates: _,
              });
        } else {
          _.call(_, _) && _.filter(_) && (_ || !_.includes(_)) && _.push(_);
          var _ =
              _.shadowRoot ||
              (typeof _.getShadowRoot == `function` && _.getShadowRoot(_)),
            _ = !_(_, !1) && (!_.shadowRootFilter || _.shadowRootFilter(_));
          if (_ && _) {
            var _ = _(_ === !0 ? _.children : _.children, !0, _);
            _.flatten
              ? _.push.apply(_, _)
              : _.push({
                  scopeParent: _,
                  candidates: _,
                });
          } else _.unshift.apply(_, _.children);
        }
    }
    return _;
  },
  _ = function (_) {
    return !isNaN(parseInt(_.getAttribute(`tabindex`), 10));
  },
  _ = function (_) {
    if (!_) throw Error(`No node provided`);
    return _.tabIndex < 0 &&
      (/^(AUDIO|VIDEO|DETAILS)$/.test(_.tagName) || _(_)) &&
      !_(_)
      ? 0
      : _.tabIndex;
  },
  _ = function (_, _) {
    var _ = _(_);
    return _ < 0 && _ && !_(_) ? 0 : _;
  },
  _ = function (_, _) {
    return _.tabIndex === _.tabIndex
      ? _.documentOrder - _.documentOrder
      : _.tabIndex - _.tabIndex;
  },
  _ = function (_) {
    return _.tagName === `INPUT`;
  },
  _ = function (_) {
    return _(_) && _.type === `hidden`;
  },
  _ = function (_) {
    return (
      _.tagName === `DETAILS` &&
      Array.prototype.slice.apply(_.children).some(function (_) {
        return _.tagName === `SUMMARY`;
      })
    );
  },
  _ = function (_, _) {
    for (var _ = 0; _ < _.length; _++)
      if (_[_].checked && _[_].form === _) return _[_];
  },
  _ = function (_) {
    if (!_.name) return !0;
    var _ = _.form || _(_),
      _ = function (_) {
        return _.querySelectorAll(`input[type="radio"][name="` + _ + `"]`);
      },
      _;
    if (
      typeof window < `u` &&
      window.CSS !== void 0 &&
      typeof window.CSS.escape == `function`
    )
      _ = _(window.CSS.escape(_.name));
    else
      try {
        _ = _(_.name);
      } catch (_) {
        return (
          console.error(
            `Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s`,
            _.message,
          ),
          !1
        );
      }
    var _ = _(_, _.form);
    return !_ || _ === _;
  },
  _ = function (_) {
    return _(_) && _.type === `radio`;
  },
  _ = function (_) {
    return _(_) && !_(_);
  },
  _ = function (_) {
    var _ = _ && _(_),
      _ = _?.host,
      _ = !1;
    if (_ && _ !== _) {
      var _, _, _;
      for (
        _ = !!(
          ((_ = _) != null && (_ = _.ownerDocument) != null && _.contains(_)) ||
          (_ != null && (_ = _.ownerDocument) != null && _.contains(_))
        );
        !_ && _;
      ) {
        var _, _;
        (_ = _(_)),
          (_ = _?.host),
          (_ = !!(
            (_ = _) != null &&
            (_ = _.ownerDocument) != null &&
            _.contains(_)
          ));
      }
    }
    return _;
  },
  _ = function (_) {
    var _ = _.getBoundingClientRect(),
      _ = _.width,
      _ = _.height;
    return _ === 0 && _ === 0;
  },
  _ = function (_, _) {
    var _ = _.displayCheck,
      _ = _.getShadowRoot;
    if (getComputedStyle(_).visibility === `hidden`) return !0;
    var _ = _.call(_, `details>summary:first-of-type`) ? _.parentElement : _;
    if (_.call(_, `details:not([open]) *`)) return !0;
    if (!_ || _ === `full` || _ === `legacy-full`) {
      if (typeof _ == `function`) {
        for (var _ = _; _; ) {
          var _ = _.parentElement,
            _ = _(_);
          if (_ && !_.shadowRoot && _(_) === !0) return _(_);
          _ = _.assignedSlot
            ? _.assignedSlot
            : !_ && _ !== _.ownerDocument
              ? _.host
              : _;
        }
        _ = _;
      }
      if (_(_)) return !_.getClientRects().length;
      if (_ !== `legacy-full`) return !0;
    } else if (_ === `non-zero-area`) return _(_);
    return !1;
  },
  _ = function (_) {
    if (/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(_.tagName))
      for (var _ = _.parentElement; _; ) {
        if (_.tagName === `FIELDSET` && _.disabled) {
          for (var _ = 0; _ < _.children.length; _++) {
            var _ = _.children.item(_);
            if (_.tagName === `LEGEND`)
              return _.call(_, `fieldset[disabled] *`) ? !0 : !_.contains(_);
          }
          return !0;
        }
        _ = _.parentElement;
      }
    return !1;
  },
  _ = function (_, _) {
    return !(_.disabled || _(_) || _(_) || _(_, _) || _(_) || _(_));
  },
  _ = function (_, _) {
    return !(_(_) || _(_) < 0 || !_(_, _));
  },
  _ = function (_) {
    var _ = parseInt(_.getAttribute(`tabindex`), 10);
    return !!(isNaN(_) || _ >= 0);
  },
  _ = function _(_) {
    var _ = [],
      _ = [];
    return (
      _.forEach(function (_, _) {
        var _ = !!_.scopeParent,
          _ = _ ? _.scopeParent : _,
          _ = _(_, _),
          _ = _ ? _(_.candidates) : _;
        _ === 0
          ? _
            ? _.push.apply(_, _)
            : _.push(_)
          : _.push({
              documentOrder: _,
              tabIndex: _,
              item: _,
              isScope: _,
              content: _,
            });
      }),
      _.sort(_)
        .reduce(function (_, _) {
          return _.isScope ? _.push.apply(_, _.content) : _.push(_.content), _;
        }, [])
        .concat(_)
    );
  },
  _ = function (_, _) {
    return (
      (_ ||= {}),
      _(
        _.getShadowRoot
          ? _([_], _.includeContainer, {
              filter: _.bind(null, _),
              flatten: !1,
              getShadowRoot: _.getShadowRoot,
              shadowRootFilter: _,
            })
          : _(_, _.includeContainer, _.bind(null, _)),
      )
    );
  },
  _ = function (_, _) {
    if (((_ ||= {}), !_)) throw Error(`No node provided`);
    return _.call(_, _) !== !1 && _(_, _);
  },
  _ = _(_(), 1);
function _(_, _, _) {
  let { reference: _, floating: _ } = _,
    _ = _(_),
    _ = _(_),
    _ = _(_),
    _ = _(_),
    _ = _ === `y`,
    _ = _._ + _.width / 2 - _.width / 2,
    _ = _._ + _.height / 2 - _.height / 2,
    _ = _[_] / 2 - _[_] / 2,
    _;
  switch (_) {
    case `top`:
      _ = {
        _: _,
        _: _._ - _.height,
      };
      break;
    case `bottom`:
      _ = {
        _: _,
        _: _._ + _.height,
      };
      break;
    case `right`:
      _ = {
        _: _._ + _.width,
        _: _,
      };
      break;
    case `left`:
      _ = {
        _: _._ - _.width,
        _: _,
      };
      break;
    default:
      _ = {
        _: _._,
        _: _._,
      };
  }
  let _ = _(_);
  return _ && (_[_] += _ * (_ === `end` ? 1 : -1) * (_ && _ ? -1 : 1)), _;
}
async function _(_, _) {
  _ === void 0 && (_ = {});
  let { _: _, _: _, platform: _, rects: _, elements: _, strategy: _ } = _,
    {
      boundary: _ = `clippingAncestors`,
      rootBoundary: _ = `viewport`,
      elementContext: _ = `floating`,
      altBoundary: _ = !1,
      padding: _ = 0,
    } = _(_, _),
    _ = _(_),
    _ = _[_ ? (_ === `floating` ? `reference` : `floating`) : _],
    _ = _(
      await _.getClippingRect({
        element:
          ((await (_.isElement == null ? void 0 : _.isElement(_))) ?? !0)
            ? _
            : _.contextElement ||
              (await (_.getDocumentElement == null
                ? void 0
                : _.getDocumentElement(_.floating))),
        boundary: _,
        rootBoundary: _,
        strategy: _,
      }),
    ),
    _ =
      _ === `floating`
        ? {
            _: _,
            _: _,
            width: _.floating.width,
            height: _.floating.height,
          }
        : _.reference,
    _ = await (_.getOffsetParent == null
      ? void 0
      : _.getOffsetParent(_.floating)),
    _ = ((await (_.isElement == null ? void 0 : _.isElement(_))) &&
      (await (_.getScale == null ? void 0 : _.getScale(_)))) || {
      _: 1,
      _: 1,
    },
    _ = _(
      _.convertOffsetParentRelativeRectToViewportRelativeRect
        ? await _.convertOffsetParentRelativeRectToViewportRelativeRect({
            elements: _,
            rect: _,
            offsetParent: _,
            strategy: _,
          })
        : _,
    );
  return {
    top: (_.top - _.top + _.top) / _._,
    bottom: (_.bottom - _.bottom + _.bottom) / _._,
    left: (_.left - _.left + _.left) / _._,
    right: (_.right - _.right + _.right) / _._,
  };
}
var _ = 50,
  _ = async (_, _, _) => {
    let {
        placement: _ = `bottom`,
        strategy: _ = `absolute`,
        middleware: _ = [],
        platform: _,
      } = _,
      _ = _.detectOverflow
        ? _
        : {
            ..._,
            detectOverflow: _,
          },
      _ = await (_.isRTL == null ? void 0 : _.isRTL(_)),
      _ = await _.getElementRects({
        reference: _,
        floating: _,
        strategy: _,
      }),
      { _: _, _: _ } = _(_, _, _),
      _ = _,
      _ = 0,
      _ = {};
    for (let _ = 0; _ < _.length; _++) {
      let _ = _[_];
      if (!_) continue;
      let { name: _, _: _ } = _,
        {
          _: _,
          _,
          data: _,
          reset: _,
        } = await _({
          _: _,
          _: _,
          initialPlacement: _,
          placement: _,
          strategy: _,
          middlewareData: _,
          rects: _,
          platform: _,
          elements: {
            reference: _,
            floating: _,
          },
        });
      (_ = _ ?? _),
        (_ = _ ?? _),
        (_[_] = {
          ..._[_],
          ..._,
        }),
        _ &&
          _ < _ &&
          (_++,
          typeof _ == `object` &&
            (_.placement && (_ = _.placement),
            _.rects &&
              (_ =
                _.rects === !0
                  ? await _.getElementRects({
                      reference: _,
                      floating: _,
                      strategy: _,
                    })
                  : _.rects),
            ({ _: _, _: _ } = _(_, _, _))),
          (_ = -1));
    }
    return {
      _: _,
      _: _,
      placement: _,
      strategy: _,
      middlewareData: _,
    };
  },
  _ = function (_) {
    return (
      _ === void 0 && (_ = {}),
      {
        name: `flip`,
        options: _,
        async _(_) {
          var _;
          let {
              placement: _,
              middlewareData: _,
              rects: _,
              initialPlacement: _,
              platform: _,
              elements: _,
            } = _,
            {
              mainAxis: _ = !0,
              crossAxis: _ = !0,
              fallbackPlacements: _,
              fallbackStrategy: _ = `bestFit`,
              fallbackAxisSideDirection: _ = `none`,
              flipAlignment: _ = !0,
              ..._
            } = _(_, _);
          if ((_ = _.arrow) != null && _.alignmentOffset) return {};
          let _ = _(_),
            _ = _(_),
            _ = _(_) === _,
            _ = await (_.isRTL == null ? void 0 : _.isRTL(_.floating)),
            _ = _ || (_ || !_ ? [_(_)] : _(_)),
            _ = _ !== `none`;
          !_ && _ && _.push(..._(_, _, _, _));
          let _ = [_, ..._],
            _ = await _.detectOverflow(_, _),
            _ = [],
            _ = _.flip?.overflows || [];
          if ((_ && _.push(_[_]), _)) {
            let _ = _(_, _, _);
            _.push(_[_[0]], _[_[1]]);
          }
          if (
            ((_ = [
              ..._,
              {
                placement: _,
                overflows: _,
              },
            ]),
            !_.every((_) => _ <= 0))
          ) {
            let _ = (_.flip?.index || 0) + 1,
              _ = _[_];
            if (
              _ &&
              (!(_ === `alignment` && _ !== _(_)) ||
                _.every((_) => _(_.placement) !== _ || _.overflows[0] > 0))
            )
              return {
                data: {
                  index: _,
                  overflows: _,
                },
                reset: {
                  placement: _,
                },
              };
            let _ = _.filter((_) => _.overflows[0] <= 0).sort(
              (_, _) => _.overflows[1] - _.overflows[1],
            )[0]?.placement;
            if (!_)
              switch (_) {
                case `bestFit`: {
                  let _ = _.filter((_) => {
                    if (_) {
                      let _ = _(_.placement);
                      return _ === _ || _ === `y`;
                    }
                    return !0;
                  })
                    .map((_) => [
                      _.placement,
                      _.overflows
                        .filter((_) => _ > 0)
                        .reduce((_, _) => _ + _, 0),
                    ])
                    .sort((_, _) => _[1] - _[1])[0]?.[0];
                  _ && (_ = _);
                  break;
                }
                case `initialPlacement`:
                  _ = _;
                  break;
              }
            if (_ !== _)
              return {
                reset: {
                  placement: _,
                },
              };
          }
          return {};
        },
      }
    );
  },
  _ = new Set([`left`, `top`]);
async function _(_, _) {
  let { placement: _, platform: _, elements: _ } = _,
    _ = await (_.isRTL == null ? void 0 : _.isRTL(_.floating)),
    _ = _(_),
    _ = _(_),
    _ = _(_) === `y`,
    _ = _.has(_) ? -1 : 1,
    _ = _ && _ ? -1 : 1,
    _ = _(_, _),
    {
      mainAxis: _,
      crossAxis: _,
      alignmentAxis: _,
    } = typeof _ == `number`
      ? {
          mainAxis: _,
          crossAxis: 0,
          alignmentAxis: null,
        }
      : {
          mainAxis: _.mainAxis || 0,
          crossAxis: _.crossAxis || 0,
          alignmentAxis: _.alignmentAxis,
        };
  return (
    _ && typeof _ == `number` && (_ = _ === `end` ? _ * -1 : _),
    _
      ? {
          _: _ * _,
          _: _ * _,
        }
      : {
          _: _ * _,
          _: _ * _,
        }
  );
}
var _ = function (_) {
    return (
      _ === void 0 && (_ = 0),
      {
        name: `offset`,
        options: _,
        async _(_) {
          var _;
          let { _: _, _: _, placement: _, middlewareData: _ } = _,
            _ = await _(_, _);
          return _ === _.offset?.placement &&
            (_ = _.arrow) != null &&
            _.alignmentOffset
            ? {}
            : {
                _: _ + _._,
                _: _ + _._,
                data: {
                  ..._,
                  placement: _,
                },
              };
        },
      }
    );
  },
  _ = function (_) {
    return (
      _ === void 0 && (_ = {}),
      {
        name: `shift`,
        options: _,
        async _(_) {
          let { _: _, _: _, placement: _, platform: _ } = _,
            {
              mainAxis: _ = !0,
              crossAxis: _ = !1,
              limiter: _ = {
                _: (_) => {
                  let { _: _, _: _ } = _;
                  return {
                    _: _,
                    _: _,
                  };
                },
              },
              ..._
            } = _(_, _),
            _ = {
              _: _,
              _: _,
            },
            _ = await _.detectOverflow(_, _),
            _ = _(_),
            _ = _(_),
            _ = _[_],
            _ = _[_],
            _ = (_, _) =>
              _(
                _ + _[_ === `y` ? `top` : `left`],
                _,
                _ - _[_ === `y` ? `bottom` : `right`],
              );
          _ && (_ = _(_, _)), _ && (_ = _(_, _));
          let _ = _._({
            ..._,
            [_]: _,
            [_]: _,
          });
          return {
            ..._,
            data: {
              _: _._ - _,
              _: _._ - _,
              enabled: {
                [_]: _,
                [_]: _,
              },
            },
          };
        },
      }
    );
  },
  _ = function (_) {
    return (
      _ === void 0 && (_ = {}),
      {
        name: `size`,
        options: _,
        async _(_) {
          let { placement: _, rects: _, platform: _, elements: _ } = _,
            { apply: _ = () => {}, ..._ } = _(_, _),
            _ = await _.detectOverflow(_, _),
            _ = _(_),
            _ = _(_),
            _ = _(_) === `y`,
            { width: _, height: _ } = _.floating,
            _,
            _;
          _ === `top` || _ === `bottom`
            ? ((_ = _),
              (_ =
                _ ===
                ((await (_.isRTL == null ? void 0 : _.isRTL(_.floating)))
                  ? `start`
                  : `end`)
                  ? `left`
                  : `right`))
            : ((_ = _), (_ = _ === `end` ? `top` : `bottom`));
          let _ = _ - _.top - _.bottom,
            _ = _ - _.left - _.right,
            _ = _(_ - _[_], _),
            _ = _(_ - _[_], _),
            _ = _.middlewareData.shift,
            _ = !_,
            _ = _,
            _ = _;
          _ != null && _.enabled._ && (_ = _),
            _ != null && _.enabled._ && (_ = _),
            _ &&
              !_ &&
              (_
                ? (_ = _ - 2 * _(_.left, _.right))
                : (_ = _ - 2 * _(_.top, _.bottom))),
            await _({
              ..._,
              availableWidth: _,
              availableHeight: _,
            });
          let _ = await _.getDimensions(_.floating);
          return _ !== _.width || _ !== _.height
            ? {
                reset: {
                  rects: !0,
                },
              }
            : {};
        },
      }
    );
  };
function _(_) {
  let _ = _(_),
    _ = parseFloat(_.width) || 0,
    _ = parseFloat(_.height) || 0,
    _ = _(_),
    _ = _ ? _.offsetWidth : _,
    _ = _ ? _.offsetHeight : _,
    _ = _(_) !== _ || _(_) !== _;
  return (
    _ && ((_ = _), (_ = _)),
    {
      width: _,
      height: _,
      _: _,
    }
  );
}
function _(_) {
  return _(_) ? _ : _.contextElement;
}
function _(_) {
  let _ = _(_);
  if (!_(_)) return _(1);
  let _ = _.getBoundingClientRect(),
    { width: _, height: _, _: _ } = _(_),
    _ = (_ ? _(_.width) : _.width) / _,
    _ = (_ ? _(_.height) : _.height) / _;
  return (
    (!_ || !Number.isFinite(_)) && (_ = 1),
    (!_ || !Number.isFinite(_)) && (_ = 1),
    {
      _: _,
      _: _,
    }
  );
}
var _ = _(0);
function _(_) {
  let _ = _(_);
  return !_() || !_.visualViewport
    ? _
    : {
        _: _.visualViewport.offsetLeft,
        _: _.visualViewport.offsetTop,
      };
}
function _(_, _, _) {
  return _ === void 0 && (_ = !1), !!_ && _ && _ === _(_);
}
function _(_, _, _, _) {
  _ === void 0 && (_ = !1), _ === void 0 && (_ = !1);
  let _ = _.getBoundingClientRect(),
    _ = _(_),
    _ = _(1);
  _ && (_ ? _(_) && (_ = _(_)) : (_ = _(_)));
  let _ = _(_, _, _) ? _(_) : _(0),
    _ = (_.left + _._) / _._,
    _ = (_.top + _._) / _._,
    _ = _.width / _._,
    _ = _.height / _._;
  if (_ && _) {
    let _ = _(_),
      _ = _(_) ? _(_) : _,
      _ = _,
      _ = _(_);
    for (; _ && _ !== _; ) {
      let _ = _(_),
        _ = _.getBoundingClientRect(),
        _ = _(_),
        _ = _.left + (_.clientLeft + parseFloat(_.paddingLeft)) * _._,
        _ = _.top + (_.clientTop + parseFloat(_.paddingTop)) * _._;
      (_ *= _._),
        (_ *= _._),
        (_ *= _._),
        (_ *= _._),
        (_ += _),
        (_ += _),
        (_ = _(_)),
        (_ = _(_));
    }
  }
  return _({
    width: _,
    height: _,
    _: _,
    _: _,
  });
}
function _(_, _) {
  let _ = _(_).scrollLeft;
  return _ ? _.left + _ : _(_(_)).left + _;
}
function _(_, _) {
  let _ = _.getBoundingClientRect();
  return {
    _: _.left + _.scrollLeft - _(_, _),
    _: _.top + _.scrollTop,
  };
}
function _(_) {
  let { elements: _, rect: _, offsetParent: _, strategy: _ } = _,
    _ = _ === `fixed`,
    _ = _(_),
    _ = _ ? _(_.floating) : !1;
  if (_ === _ || (_ && _)) return _;
  let _ = {
      scrollLeft: 0,
      scrollTop: 0,
    },
    _ = _(1),
    _ = _(0),
    _ = _(_);
  if ((_ || !_) && ((_(_) !== `body` || _(_)) && (_ = _(_)), _)) {
    let _ = _(_);
    (_ = _(_)), (_._ = _._ + _.clientLeft), (_._ = _._ + _.clientTop);
  }
  let _ = _ && !_ && !_ ? _(_, _) : _(0);
  return {
    width: _.width * _._,
    height: _.height * _._,
    _: _._ * _._ - _.scrollLeft * _._ + _._ + _._,
    _: _._ * _._ - _.scrollTop * _._ + _._ + _._,
  };
}
function _(_) {
  return _.getClientRects ? Array.from(_.getClientRects()) : [];
}
function _(_) {
  let _ = _(_),
    _ = _.ownerDocument.body,
    _ = _(_.scrollWidth, _.clientWidth, _.scrollWidth, _.clientWidth),
    _ = _(_.scrollHeight, _.clientHeight, _.scrollHeight, _.clientHeight),
    _ = -_.scrollLeft + _(_),
    _ = -_.scrollTop;
  return (
    _(_).direction === `rtl` && (_ += _(_.clientWidth, _.clientWidth) - _),
    {
      width: _,
      height: _,
      _: _,
      _: _,
    }
  );
}
var _ = 25;
function _(_, _, _) {
  _ === void 0 && (_ = `viewport`);
  let _ = _ === `layoutViewport`,
    _ = _(_),
    _ = _(_),
    _ = _.visualViewport,
    _ = _.clientWidth,
    _ = _.clientHeight,
    _ = 0,
    _ = 0;
  if (_) {
    let _ = !_() || _ === `fixed`;
    _
      ? _ || ((_ = -_.offsetLeft), (_ = -_.offsetTop))
      : ((_ = _.width),
        (_ = _.height),
        _ && ((_ = _.offsetLeft), (_ = _.offsetTop)));
  }
  if (_(_) <= 0) {
    let _ = _.ownerDocument,
      _ = _.body,
      _ = getComputedStyle(_),
      _ =
        (_.compatMode === `CSS1Compat` &&
          parseFloat(_.marginLeft) + parseFloat(_.marginRight)) ||
        0,
      _ = Math.abs(_.clientWidth - _.clientWidth - _),
      _ =
        getComputedStyle(_).scrollbarGutter === `stable both-edges` ? _ / 2 : _;
    _ <= _ && (_ -= _);
  }
  return {
    width: _,
    height: _,
    _: _,
    _: _,
  };
}
function _(_, _) {
  let _ = _(_, !0, _ === `fixed`),
    _ = _.top + _.clientTop,
    _ = _.left + _.clientLeft,
    _ = _(_);
  return {
    width: _.clientWidth * _._,
    height: _.clientHeight * _._,
    _: _ * _._,
    _: _ * _._,
  };
}
function _(_, _, _) {
  let _;
  if (_ === `viewport` || _ === `layoutViewport`) _ = _(_, _, _);
  else if (_ === `document`) _ = _(_(_));
  else if (_(_)) _ = _(_, _);
  else {
    let _ = _(_);
    _ = {
      _: _._ - _._,
      _: _._ - _._,
      width: _.width,
      height: _.height,
    };
  }
  return _(_);
}
function _(_, _) {
  let _ = _.get(_);
  if (_) return _;
  let _ = _(_, [], !1).filter((_) => _(_) && _(_) !== `body`),
    _ = null,
    _ = _(_).position === `fixed`,
    _ = _ ? _(_) : _;
  for (; _(_) && !_(_); ) {
    let _ = _(_),
      _ = _(_),
      _ = _ ? _.position : _ ? `fixed` : ``;
    !_ && (_ === `fixed` || (_ === `absolute` && _.position === `static`))
      ? (_ = _.filter((_) => _ !== _))
      : (_ = _),
      (_ = _(_));
  }
  return _.set(_, _), _;
}
function _(_) {
  let { element: _, boundary: _, rootBoundary: _, strategy: _ } = _,
    _ = [
      ...(_ === `clippingAncestors`
        ? _(_)
          ? []
          : _(_, this._)
        : [].concat(_)),
      _,
    ],
    _ = _(_, _[0], _),
    _ = _.top,
    _ = _.right,
    _ = _.bottom,
    _ = _.left;
  for (let _ = 1; _ < _.length; _++) {
    let _ = _(_, _[_], _);
    (_ = _(_.top, _)),
      (_ = _(_.right, _)),
      (_ = _(_.bottom, _)),
      (_ = _(_.left, _));
  }
  return {
    width: _ - _,
    height: _ - _,
    _: _,
    _: _,
  };
}
function _(_) {
  let { width: _, height: _ } = _(_);
  return {
    width: _,
    height: _,
  };
}
function _(_, _, _) {
  let _ = _(_),
    _ = _(_),
    _ = _ === `fixed`,
    _ = _(_, !0, _, _),
    _ = {
      scrollLeft: 0,
      scrollTop: 0,
    },
    _ = _(0);
  if ((_ || !_) && ((_(_) !== `body` || _(_)) && (_ = _(_)), _)) {
    let _ = _(_, !0, _, _);
    (_._ = _._ + _.clientLeft), (_._ = _._ + _.clientTop);
  }
  !_ && _ && (_._ = _(_));
  let _ = _ && !_ && !_ ? _(_, _) : _(0);
  return {
    _: _.left + _.scrollLeft - _._ - _._,
    _: _.top + _.scrollTop - _._ - _._,
    width: _.width,
    height: _.height,
  };
}
function _(_) {
  return _(_).position === `static`;
}
function _(_, _) {
  if (!_(_) || _(_).position === `fixed`) return null;
  if (_) return _(_);
  let _ = _.offsetParent;
  return _(_) === _ && (_ = _.ownerDocument.body), _;
}
function _(_, _) {
  let _ = _(_);
  if (_(_)) return _;
  if (!_(_)) {
    let _ = _(_);
    for (; _ && !_(_); ) {
      if (_(_) && !_(_)) return _;
      _ = _(_);
    }
    return _;
  }
  let _ = _(_, _);
  for (; _ && _(_) && _(_); ) _ = _(_, _);
  return _ && _(_) && _(_) && !_(_) ? _ : _ || _(_) || _;
}
var _ = async function (_) {
  let _ = this.getOffsetParent || _,
    _ = this.getDimensions,
    _ = await _(_.floating);
  return {
    reference: _(_.reference, await _(_.floating), _.strategy),
    floating: {
      _: 0,
      _: 0,
      width: _.width,
      height: _.height,
    },
  };
};
function _(_) {
  return _(_).direction === `rtl`;
}
var _ = {
  convertOffsetParentRelativeRectToViewportRelativeRect: _,
  getDocumentElement: _,
  getClippingRect: _,
  getOffsetParent: _,
  getElementRects: _,
  getClientRects: _,
  getDimensions: _,
  getScale: _,
  isElement: _,
  isRTL: _,
};
function _(_, _) {
  return (
    _._ === _._ && _._ === _._ && _.width === _.width && _.height === _.height
  );
}
function _(_, _, _) {
  let _ = null,
    _,
    _ = _(_);
  function _() {
    var _;
    clearTimeout(_), (_ = _) == null || _.disconnect(), (_ = null);
  }
  function _(_, _) {
    _ === void 0 && (_ = !1), _ === void 0 && (_ = 1), _();
    let _ = _.getBoundingClientRect(),
      { left: _, top: _, width: _, height: _ } = _;
    if ((_ || _(), !_ || !_)) return;
    let _ = _(_),
      _ = _(_.clientWidth - (_ + _)),
      _ = _(_.clientHeight - (_ + _)),
      _ = _(_),
      _ = {
        rootMargin: -_ + `px ` + -_ + `px ` + -_ + `px ` + -_ + `px`,
        threshold: _(0, _(1, _)) || 1,
      },
      _ = !0;
    function _(_) {
      let _ = _[0].intersectionRatio;
      if (!_(_, _.getBoundingClientRect())) return _();
      if (_ !== _) {
        if (!_) return _();
        _
          ? _(!1, _)
          : (_ = setTimeout(() => {
              _(!1, 1e-7);
            }, 1e3));
      }
      _ = !1;
    }
    try {
      _ = new IntersectionObserver(_, {
        ..._,
        root: _.ownerDocument,
      });
    } catch {
      _ = new IntersectionObserver(_, _);
    }
    _.observe(_);
  }
  let _ = _(_),
    _ = () => _(_);
  return (
    _.addEventListener(`resize`, _),
    _(!0),
    () => {
      _.removeEventListener(`resize`, _), _();
    }
  );
}
function _(_, _, _, _) {
  _ === void 0 && (_ = {});
  let {
      ancestorScroll: _ = !0,
      ancestorResize: _ = !0,
      elementResize: _ = typeof ResizeObserver == `function`,
      layoutShift: _ = typeof IntersectionObserver == `function`,
      animationFrame: _ = !1,
    } = _,
    _ = _(_),
    _ = _ || _ ? [...(_ ? _(_) : []), ...(_ ? _(_) : [])] : [];
  _.forEach((_) => {
    _ && _.addEventListener(`scroll`, _), _ && _.addEventListener(`resize`, _);
  });
  let _ = _ && _ ? _(_, _, _) : null,
    _ = -1,
    _ = null;
  _ &&
    ((_ = new ResizeObserver((_) => {
      let [_] = _;
      _ &&
        _.target === _ &&
        _ &&
        _ &&
        (_.unobserve(_),
        cancelAnimationFrame(_),
        (_ = requestAnimationFrame(() => {
          var _;
          (_ = _) == null || _.observe(_);
        }))),
        _();
    })),
    _ && !_ && _.observe(_),
    _ && _.observe(_));
  let _,
    _ = _ ? _(_) : null;
  _ && _();
  function _() {
    let _ = _(_);
    _ && !_(_, _) && _(), (_ = _), (_ = requestAnimationFrame(_));
  }
  return (
    _(),
    () => {
      var _;
      _.forEach((_) => {
        _ && _.removeEventListener(`scroll`, _),
          _ && _.removeEventListener(`resize`, _);
      }),
        _?.(),
        (_ = _) == null || _.disconnect(),
        (_ = null),
        _ && cancelAnimationFrame(_);
    }
  );
}
var _ = _,
  _ = _,
  _ = _,
  _ = _,
  _ = (_, _, _) => {
    let _ = new Map(),
      _ = _ ?? {},
      _ = {
        ..._,
        ..._.platform,
        _: _,
      };
    return _(_, _, {
      ..._,
      platform: _,
    });
  },
  _ = typeof document < `u` ? _.useLayoutEffect : _.useEffect;
function _(_, _) {
  if (_ === _) return !0;
  if (typeof _ != typeof _) return !1;
  if (typeof _ == `function` && _.toString() === _.toString()) return !0;
  let _, _, _;
  if (_ && _ && typeof _ == `object`) {
    if (Array.isArray(_)) {
      if (((_ = _.length), _ !== _.length)) return !1;
      for (_ = _; _-- !== 0; ) if (!_(_[_], _[_])) return !1;
      return !0;
    }
    if (((_ = Object.keys(_)), (_ = _.length), _ !== Object.keys(_).length))
      return !1;
    for (_ = _; _-- !== 0; ) if (!{}.hasOwnProperty.call(_, _[_])) return !1;
    for (_ = _; _-- !== 0; ) {
      let _ = _[_];
      if (!(_ === `_owner` && _.$$typeof) && !_(_[_], _[_])) return !1;
    }
    return !0;
  }
  return _ !== _ && _ !== _;
}
function _(_) {
  return typeof window > `u`
    ? 1
    : (_.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function _(_, _) {
  let _ = _(_);
  return Math.round(_ * _) / _;
}
function _(_) {
  let _ = _.useRef(_);
  return (
    _(() => {
      _.current = _;
    }),
    _
  );
}
function _(_) {
  _ === void 0 && (_ = {});
  let {
      placement: _ = `bottom`,
      strategy: _ = `absolute`,
      middleware: _ = [],
      platform: _,
      elements: { reference: _, floating: _ } = {},
      transform: _ = !0,
      whileElementsMounted: _,
      open: _,
    } = _,
    [_, _] = _.useState({
      _: 0,
      _: 0,
      strategy: _,
      placement: _,
      middlewareData: {},
      isPositioned: !1,
    }),
    [_, _] = _.useState(_);
  _(_, _) || _(_);
  let [_, _] = _.useState(null),
    [_, _] = _.useState(null),
    _ = _.useCallback((_) => {
      _ !== _.current && ((_.current = _), _(_));
    }, []),
    _ = _.useCallback((_) => {
      _ !== _.current && ((_.current = _), _(_));
    }, []),
    _ = _ || _,
    _ = _ || _,
    _ = _.useRef(null),
    _ = _.useRef(null),
    _ = _.useRef(_),
    _ = _ != null,
    _ = _(_),
    _ = _(_),
    _ = _(_),
    _ = _.useCallback(() => {
      if (!_.current || !_.current) return;
      let _ = {
        placement: _,
        strategy: _,
        middleware: _,
      };
      _.current && (_.platform = _.current),
        _(_.current, _.current, _).then((_) => {
          let _ = {
            ..._,
            isPositioned: _.current !== !1,
          };
          _.current &&
            !_(_.current, _) &&
            ((_.current = _),
            _.flushSync(() => {
              _(_);
            }));
        });
    }, [_, _, _, _, _]);
  _(() => {
    _ === !1 &&
      _.current.isPositioned &&
      ((_.current.isPositioned = !1),
      _((_) => ({
        ..._,
        isPositioned: !1,
      })));
  }, [_]);
  let _ = _.useRef(!1);
  _(
    () => (
      (_.current = !0),
      () => {
        _.current = !1;
      }
    ),
    [],
  ),
    _(() => {
      if ((_ && (_.current = _), _ && (_.current = _), _ && _)) {
        if (_.current) return _.current(_, _, _);
        _();
      }
    }, [_, _, _, _, _]);
  let _ = _.useMemo(
      () => ({
        reference: _,
        floating: _,
        setReference: _,
        setFloating: _,
      }),
      [_, _],
    ),
    _ = _.useMemo(
      () => ({
        reference: _,
        floating: _,
      }),
      [_, _],
    ),
    _ = _.useMemo(() => {
      let _ = {
        position: _,
        left: 0,
        top: 0,
      };
      if (!_.floating) return _;
      let _ = _(_.floating, _._),
        _ = _(_.floating, _._);
      return _
        ? {
            ..._,
            transform: `translate(` + _ + `px, ` + _ + `px)`,
            ...(_(_.floating) >= 1.5 && {
              willChange: `transform`,
            }),
          }
        : {
            position: _,
            left: _,
            top: _,
          };
    }, [_, _, _.floating, _._, _._]);
  return _.useMemo(
    () => ({
      ..._,
      update: _,
      refs: _,
      elements: _,
      floatingStyles: _,
    }),
    [_, _, _, _, _],
  );
}
var _ = (_, _) => ({
    ..._(_),
    options: [_, _],
  }),
  _ = (_, _) => ({
    ..._(_),
    options: [_, _],
  }),
  _ = (_, _) => ({
    ..._(_),
    options: [_, _],
  }),
  _ = (_, _) => ({
    ..._(_),
    options: [_, _],
  });
function _(_) {
  let _ = _.useRef(void 0),
    _ = _.useCallback((_) => {
      let _ = _.map((_) => {
        if (_ != null) {
          if (typeof _ == `function`) {
            let _ = _,
              _ = _(_);
            return typeof _ == `function`
              ? _
              : () => {
                  _(null);
                };
          }
          return (
            (_.current = _),
            () => {
              _.current = null;
            }
          );
        }
      });
      return () => {
        _.forEach((_) => _?.());
      };
    }, _);
  return _.useMemo(
    () =>
      _.every((_) => _ == null)
        ? null
        : (_) => {
            (_.current &&= (_.current(), void 0)),
              _ != null && (_.current = _(_));
          },
    _,
  );
}
var _ = {
    ..._,
  },
  _ = _.useInsertionEffect || ((_) => _());
function _(_) {
  let _ = _.useRef(() => {});
  return (
    _(() => {
      _.current = _;
    }),
    _.useCallback(function () {
      var _ = [...arguments];
      return _.current == null ? void 0 : _.current(..._);
    }, [])
  );
}
var _ = `ArrowUp`,
  _ = `ArrowDown`,
  _ = `ArrowLeft`,
  _ = `ArrowRight`;
function _(_, _, _) {
  return Math.floor(_ / _) !== _;
}
function _(_, _) {
  return _ < 0 || _ >= _.current.length;
}
function _(_, _) {
  return _(_, {
    disabledIndices: _,
  });
}
function _(_, _) {
  return _(_, {
    decrement: !0,
    startingIndex: _.current.length,
    disabledIndices: _,
  });
}
function _(_, _) {
  let {
      startingIndex: _ = -1,
      decrement: _ = !1,
      disabledIndices: _,
      amount: _ = 1,
    } = _ === void 0 ? {} : _,
    _ = _.current,
    _ = _;
  do _ += _ ? -_ : _;
  while (_ >= 0 && _ <= _.length - 1 && _(_, _, _));
  return _;
}
function _(_, _) {
  let {
      event: _,
      orientation: _,
      loop: _,
      rtl: _,
      cols: _,
      disabledIndices: _,
      minIndex: _,
      maxIndex: _,
      prevIndex: _,
      stopEvent: _ = !1,
    } = _,
    _ = _;
  if (_.key === _) {
    if ((_ && _(_), _ === -1)) _ = _;
    else if (
      ((_ = _(_, {
        startingIndex: _,
        amount: _,
        decrement: !0,
        disabledIndices: _,
      })),
      _ && (_ - _ < _ || _ < 0))
    ) {
      let _ = _ % _,
        _ = _ % _,
        _ = _ - (_ - _);
      _ = _ === _ ? _ : _ > _ ? _ : _ - _;
    }
    _(_, _) && (_ = _);
  }
  if (
    (_.key === _ &&
      (_ && _(_),
      _ === -1
        ? (_ = _)
        : ((_ = _(_, {
            startingIndex: _,
            amount: _,
            disabledIndices: _,
          })),
          _ &&
            _ + _ > _ &&
            (_ = _(_, {
              startingIndex: (_ % _) - _,
              amount: _,
              disabledIndices: _,
            }))),
      _(_, _) && (_ = _)),
    _ === `both`)
  ) {
    let _ = _(_ / _);
    _.key === (_ ? _ : _) &&
      (_ && _(_),
      _ % _ === _ - 1
        ? _ &&
          (_ = _(_, {
            startingIndex: _ - (_ % _) - 1,
            disabledIndices: _,
          }))
        : ((_ = _(_, {
            startingIndex: _,
            disabledIndices: _,
          })),
          _ &&
            _(_, _, _) &&
            (_ = _(_, {
              startingIndex: _ - (_ % _) - 1,
              disabledIndices: _,
            }))),
      _(_, _, _) && (_ = _)),
      _.key === (_ ? _ : _) &&
        (_ && _(_),
        _ % _ === 0
          ? _ &&
            (_ = _(_, {
              startingIndex: _ + (_ - (_ % _)),
              decrement: !0,
              disabledIndices: _,
            }))
          : ((_ = _(_, {
              startingIndex: _,
              decrement: !0,
              disabledIndices: _,
            })),
            _ &&
              _(_, _, _) &&
              (_ = _(_, {
                startingIndex: _ + (_ - (_ % _)),
                decrement: !0,
                disabledIndices: _,
              }))),
        _(_, _, _) && (_ = _));
    let _ = _(_ / _) === _;
    _(_, _) &&
      (_ =
        _ && _
          ? _.key === (_ ? _ : _)
            ? _
            : _(_, {
                startingIndex: _ - (_ % _) - 1,
                disabledIndices: _,
              })
          : _);
  }
  return _;
}
function _(_, _, _) {
  let _ = [],
    _ = 0;
  return (
    _.forEach((_, _) => {
      let { width: _, height: _ } = _,
        _ = !1;
      for (_ && (_ = 0); !_; ) {
        let _ = [];
        for (let _ = 0; _ < _; _++)
          for (let _ = 0; _ < _; _++) _.push(_ + _ + _ * _);
        (_ % _) + _ <= _ && _.every((_) => _[_] == null)
          ? (_.forEach((_) => {
              _[_] = _;
            }),
            (_ = !0))
          : _++;
      }
    }),
    [..._]
  );
}
function _(_, _, _, _, _) {
  if (_ === -1) return -1;
  let _ = _.indexOf(_),
    _ = _[_];
  switch (_) {
    case `tl`:
      return _;
    case `tr`:
      return _ ? _ + _.width - 1 : _;
    case `bl`:
      return _ ? _ + (_.height - 1) * _ : _;
    case `br`:
      return _.lastIndexOf(_);
  }
}
function _(_, _) {
  return _.flatMap((_, _) => (_.includes(_) ? [_] : []));
}
function _(_, _, _) {
  if (_) return _.includes(_);
  let _ = _[_];
  return (
    _ == null ||
    _.hasAttribute(`disabled`) ||
    _.getAttribute(`aria-disabled`) === `true`
  );
}
var _ = typeof document < `u` ? _.useLayoutEffect : _.useEffect;
function _(_, _) {
  let _ = _.compareDocumentPosition(_);
  return _ & Node.DOCUMENT_POSITION_FOLLOWING ||
    _ & Node.DOCUMENT_POSITION_CONTAINED_BY
    ? -1
    : _ & Node.DOCUMENT_POSITION_PRECEDING ||
        _ & Node.DOCUMENT_POSITION_CONTAINS
      ? 1
      : 0;
}
var _ = _.createContext({
  register: () => {},
  unregister: () => {},
  map: new Map(),
  elementsRef: {
    current: [],
  },
});
function _(_) {
  let { children: _, elementsRef: _, labelsRef: _ } = _,
    [_, _] = _.useState(() => new Set()),
    _ = _.useCallback((_) => {
      _((_) => new Set(_).add(_));
    }, []),
    _ = _.useCallback((_) => {
      _((_) => {
        let _ = new Set(_);
        return _.delete(_), _;
      });
    }, []),
    _ = _.useMemo(() => {
      let _ = new Map();
      return (
        Array.from(_.keys())
          .sort(_)
          .forEach((_, _) => {
            _.set(_, _);
          }),
        _
      );
    }, [_]);
  return (0, _.jsx)(_.Provider, {
    value: _.useMemo(
      () => ({
        register: _,
        unregister: _,
        map: _,
        elementsRef: _,
        labelsRef: _,
      }),
      [_, _, _, _, _],
    ),
    children: _,
  });
}
function _(_) {
  _ === void 0 && (_ = {});
  let { label: _ } = _,
    {
      register: _,
      unregister: _,
      map: _,
      elementsRef: _,
      labelsRef: _,
    } = _.useContext(_),
    [_, _] = _.useState(null),
    _ = _.useRef(null),
    _ = _.useCallback(
      (_) => {
        if (((_.current = _), _ !== null && ((_.current[_] = _), _))) {
          let _ = _ !== void 0;
          _.current[_] = _ ? _ : (_?.textContent ?? null);
        }
      },
      [_, _, _, _],
    );
  return (
    _(() => {
      let _ = _.current;
      if (_)
        return (
          _(_),
          () => {
            _(_);
          }
        );
    }, [_, _]),
    _(() => {
      let _ = _.current ? _.get(_.current) : null;
      _ != null && _(_);
    }, [_]),
    _.useMemo(
      () => ({
        ref: _,
        index: _ ?? -1,
      }),
      [_, _],
    )
  );
}
var _ = [_, _],
  _ = [_, _];
[..._, ..._];
var _ = !1,
  _ = 0,
  _ = () => `floating-ui-` + Math.random().toString(36).slice(2, 6) + _++;
function _() {
  let [_, _] = _.useState(() => (_ ? _() : void 0));
  return (
    _(() => {
      _ ?? _(_());
    }, []),
    _.useEffect(() => {
      _ = !0;
    }, []),
    _
  );
}
var _ = _.useId || _;
function _() {
  let _ = new Map();
  return {
    emit(_, _) {
      var _;
      (_ = _.get(_)) == null || _.forEach((_) => _(_));
    },
    _(_, _) {
      _.set(_, [...(_.get(_) || []), _]);
    },
    off(_, _) {
      _.set(_, _.get(_)?.filter((_) => _ !== _) || []);
    },
  };
}
var _ = _.createContext(null),
  _ = _.createContext(null),
  _ = () => _.useContext(_)?._ || null,
  _ = () => _.useContext(_);
function _(_) {
  return `data-floating-ui-` + _;
}
function _(_) {
  _.current !== -1 && (clearTimeout(_.current), (_.current = -1));
}
function _(_) {
  let _ = (0, _.useRef)(_);
  return (
    _(() => {
      _.current = _;
    }),
    _
  );
}
var _ = _(`safe-polygon`);
function _(_, _, _) {
  return _ && !_(_) ? 0 : typeof _ == `number` ? _ : _?.[_];
}
function _(_, _) {
  _ === void 0 && (_ = {});
  let { open: _, onOpenChange: _, dataRef: _, events: _, elements: _ } = _,
    {
      enabled: _ = !0,
      delay: _ = 0,
      handleClose: _ = null,
      mouseOnly: _ = !1,
      restMs: _ = 0,
      move: _ = !0,
    } = _,
    _ = _(),
    _ = _(),
    _ = _(_),
    _ = _(_),
    _ = _(_),
    _ = _.useRef(),
    _ = _.useRef(-1),
    _ = _.useRef(),
    _ = _.useRef(-1),
    _ = _.useRef(!0),
    _ = _.useRef(!1),
    _ = _.useRef(() => {}),
    _ = _.useRef(!1),
    _ = _.useCallback(() => {
      let _ = _.current.openEvent?.type;
      return _?.includes(`mouse`) && _ !== `mousedown`;
    }, [_]);
  _.useEffect(() => {
    if (!_) return;
    function _(_) {
      let { open: _ } = _;
      _ || (_(_), _(_), (_.current = !0), (_.current = !1));
    }
    return (
      _._(`openchange`, _),
      () => {
        _.off(`openchange`, _);
      }
    );
  }, [_, _]),
    _.useEffect(() => {
      if (!_ || !_.current || !_) return;
      function _(_) {
        _() && _(!1, _, `hover`);
      }
      let _ = _(_.floating).documentElement;
      return (
        _.addEventListener(`mouseleave`, _),
        () => {
          _.removeEventListener(`mouseleave`, _);
        }
      );
    }, [_.floating, _, _, _, _, _]);
  let _ = _.useCallback(
      function (_, _, _) {
        _ === void 0 && (_ = !0), _ === void 0 && (_ = `hover`);
        let _ = _(_.current, `close`, _.current);
        _ && !_.current
          ? (_(_), (_.current = window.setTimeout(() => _(!1, _, _), _)))
          : _ && (_(_), _(!1, _, _));
      },
      [_, _],
    ),
    _ = _(() => {
      _.current(), (_.current = void 0);
    }),
    _ = _(() => {
      if (_.current) {
        let _ = _(_.floating).body;
        (_.style.pointerEvents = ``), _.removeAttribute(_), (_.current = !1);
      }
    }),
    _ = _(() =>
      _.current.openEvent
        ? [`click`, `mousedown`].includes(_.current.openEvent.type)
        : !1,
    );
  _.useEffect(() => {
    if (!_) return;
    function _(_) {
      if (
        (_(_),
        (_.current = !1),
        (_ && !_(_.current)) || (_ > 0 && !_(_.current, `open`)))
      )
        return;
      let _ = _(_.current, `open`, _.current);
      _
        ? (_.current = window.setTimeout(() => {
            _.current || _(!0, _, `hover`);
          }, _))
        : _ || _(!0, _, `hover`);
    }
    function _(_) {
      if (_()) return;
      _.current();
      let _ = _(_.floating);
      if ((_(_), (_.current = !1), _.current && _.current.floatingContext)) {
        _ || _(_),
          (_.current = _.current({
            ..._.current.floatingContext,
            tree: _,
            _: _.clientX,
            _: _.clientY,
            onClose() {
              _(), _(), _() || _(_, !0, `safe-polygon`);
            },
          }));
        let _ = _.current;
        _.addEventListener(`mousemove`, _),
          (_.current = () => {
            _.removeEventListener(`mousemove`, _);
          });
        return;
      }
      (_.current !== `touch` || !_(_.floating, _.relatedTarget)) && _(_);
    }
    function _(_) {
      _() ||
        (_.current.floatingContext &&
          (_.current == null ||
            _.current({
              ..._.current.floatingContext,
              tree: _,
              _: _.clientX,
              _: _.clientY,
              onClose() {
                _(), _(), _() || _(_);
              },
            })(_)));
    }
    if (_(_.domReference)) {
      var _;
      let _ = _.domReference;
      return (
        _ && _.addEventListener(`mouseleave`, _),
        (_ = _.floating) == null || _.addEventListener(`mouseleave`, _),
        _ &&
          _.addEventListener(`mousemove`, _, {
            once: !0,
          }),
        _.addEventListener(`mouseenter`, _),
        _.addEventListener(`mouseleave`, _),
        () => {
          var _;
          _ && _.removeEventListener(`mouseleave`, _),
            (_ = _.floating) == null || _.removeEventListener(`mouseleave`, _),
            _ && _.removeEventListener(`mousemove`, _),
            _.removeEventListener(`mouseenter`, _),
            _.removeEventListener(`mouseleave`, _);
        }
      );
    }
  }, [_, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _]),
    _(() => {
      var _;
      if (
        _ &&
        _ &&
        (_ = _.current) != null &&
        _.__options.blockPointerEvents &&
        _()
      ) {
        _.current = !0;
        let _ = _.floating;
        if (_(_.domReference) && _) {
          var _;
          let _ = _(_.floating).body;
          _.setAttribute(_, ``);
          let _ = _.domReference,
            _ =
              _ == null ||
              (_ = _.nodesRef.current.find((_) => _._ === _)) == null ||
              (_ = _.context) == null
                ? void 0
                : _.elements.floating;
          return (
            _ && (_.style.pointerEvents = ``),
            (_.style.pointerEvents = `none`),
            (_.style.pointerEvents = `auto`),
            (_.style.pointerEvents = `auto`),
            () => {
              (_.style.pointerEvents = ``),
                (_.style.pointerEvents = ``),
                (_.style.pointerEvents = ``);
            }
          );
        }
      }
    }, [_, _, _, _, _, _, _]),
    _(() => {
      _ || ((_.current = void 0), (_.current = !1), _(), _());
    }, [_, _, _]),
    _.useEffect(
      () => () => {
        _(), _(_), _(_), _();
      },
      [_, _.domReference, _, _],
    );
  let _ = _.useMemo(() => {
      function _(_) {
        _.current = _.pointerType;
      }
      return {
        onPointerDown: _,
        onPointerEnter: _,
        onMouseMove(_) {
          let { nativeEvent: _ } = _;
          function _() {
            !_.current && !_.current && _(!0, _, `hover`);
          }
          (_ && !_(_.current)) ||
            _ ||
            _ === 0 ||
            (_.current && _.movementX ** 2 + _.movementY ** 2 < 2) ||
            (_(_),
            _.current === `touch`
              ? _()
              : ((_.current = !0), (_.current = window.setTimeout(_, _))));
        },
      };
    }, [_, _, _, _, _]),
    _ = _.useMemo(
      () => ({
        onMouseEnter() {
          _(_);
        },
        onMouseLeave(_) {
          _() || _(_.nativeEvent, !1);
        },
      }),
      [_, _],
    );
  return _.useMemo(
    () =>
      _
        ? {
            reference: _,
            floating: _,
          }
        : {},
    [_, _, _],
  );
}
var _ = 0;
function _(_, _) {
  _ === void 0 && (_ = {});
  let { preventScroll: _ = !1, cancelPrevious: _ = !0, sync: _ = !1 } = _;
  _ && cancelAnimationFrame(_);
  let _ = () =>
    _?.focus({
      preventScroll: _,
    });
  _ ? _() : (_ = requestAnimationFrame(_));
}
function _(_, _) {
  let _ = [],
    _ = _.find((_) => _._ === _)?.parentId;
  for (; _; ) {
    let _ = _.find((_) => _._ === _);
    (_ = _?.parentId), _ && (_ = _.concat(_));
  }
  return _;
}
function _(_, _) {
  let _ = _.filter((_) => _.parentId === _ && _.context?.open),
    _ = _;
  for (; _.length; )
    (_ = _.filter((_) =>
      _?.some((_) => _.parentId === _._ && _.context?.open),
    )),
      (_ = _.concat(_));
  return _;
}
function _(_, _) {
  let _,
    _ = -1;
  function _(_, _) {
    _ > _ && ((_ = _), (_ = _)),
      _(_, _).forEach((_) => {
        _(_._, _ + 1);
      });
  }
  return _(_, 0), _.find((_) => _._ === _);
}
var _ = new WeakMap(),
  _ = new WeakSet(),
  _ = {},
  _ = 0,
  _ = () => typeof HTMLElement < `u` && `inert` in HTMLElement.prototype,
  _ = (_) => _ && (_.host || _(_.parentNode)),
  _ = (_, _) =>
    _.map((_) => {
      if (_.contains(_)) return _;
      let _ = _(_);
      return _.contains(_) ? _ : null;
    }).filter((_) => _ != null);
function _(_, _, _, _) {
  let _ = `data-floating-ui-inert`,
    _ = _ ? `inert` : _ ? `aria-hidden` : null,
    _ = _(_, _),
    _ = new Set(),
    _ = new Set(_),
    _ = [];
  _[_] || (_[_] = new WeakMap());
  let _ = _[_];
  _.forEach(_), _(_), _.clear();
  function _(_) {
    !_ || _.has(_) || (_.add(_), _.parentNode && _(_.parentNode));
  }
  function _(_) {
    !_ ||
      _.has(_) ||
      [].forEach.call(_.children, (_) => {
        if (_(_) !== `script`)
          if (_.has(_)) _(_);
          else {
            let _ = _ ? _.getAttribute(_) : null,
              _ = _ !== null && _ !== `false`,
              _ = _.get(_) || 0,
              _ = _ ? _ + 1 : _,
              _ = (_.get(_) || 0) + 1;
            _.set(_, _),
              _.set(_, _),
              _.push(_),
              _ === 1 && _ && _.add(_),
              _ === 1 && _.setAttribute(_, ``),
              !_ && _ && _.setAttribute(_, `true`);
          }
      });
  }
  return (
    _++,
    () => {
      _.forEach((_) => {
        let _ = _.get(_) || 0,
          _ = _ ? _ - 1 : _,
          _ = (_.get(_) || 0) - 1;
        _.set(_, _),
          _.set(_, _),
          _ || (!_.has(_) && _ && _.removeAttribute(_), _.delete(_)),
          _ || _.removeAttribute(_);
      }),
        _--,
        _ ||
          ((_ = new WeakMap()),
          (_ = new WeakMap()),
          (_ = new WeakSet()),
          (_ = {}));
    }
  );
}
function _(_, _, _) {
  _ === void 0 && (_ = !1), _ === void 0 && (_ = !1);
  let _ = _(_[0]).body;
  return _(_.concat(Array.from(_.querySelectorAll(`[aria-live]`))), _, _, _);
}
var _ = () => ({
  getShadowRoot: !0,
  displayCheck:
    typeof ResizeObserver == `function` &&
    ResizeObserver.toString().includes(`[native code]`)
      ? `full`
      : `none`,
});
function _(_, _) {
  let _ = _(_, _());
  _ === `prev` && _.reverse();
  let _ = _.indexOf(_(_(_)));
  return _.slice(_ + 1)[0];
}
function _() {
  return _(document.body, `next`);
}
function _() {
  return _(document.body, `prev`);
}
function _(_, _) {
  let _ = _ || _.currentTarget,
    _ = _.relatedTarget;
  return !_ || !_(_, _);
}
var _ = {
    border: 0,
    clip: `rect(0 0 0 0)`,
    height: `1px`,
    margin: `-1px`,
    overflow: `hidden`,
    padding: 0,
    position: `fixed`,
    whiteSpace: `nowrap`,
    width: `1px`,
    top: 0,
    left: 0,
  },
  _ = _.forwardRef(function (_, _) {
    let [_, _] = _.useState();
    _(() => {
      _() && _(`button`);
    }, []);
    let _ = {
      ref: _,
      tabIndex: 0,
      role: _,
      "aria-hidden": !_ || void 0,
      [_(`focus-guard`)]: ``,
      style: _,
    };
    return (0, _.jsx)(`span`, {
      ..._,
      ..._,
    });
  }),
  _ = _.createContext(null),
  _ = () => _.useContext(_),
  _ = `data-floating-ui-focusable`;
function _(_) {
  return _
    ? _.hasAttribute(_)
      ? _
      : _.querySelector(`[data-floating-ui-focusable]`) || _
    : null;
}
function _(_) {
  return _.useMemo(
    () => (_) => {
      _.forEach((_) => {
        _ && (_.current = _);
      });
    },
    _,
  );
}
var _ = 20,
  _ = [];
function _(_) {
  (_ = _.filter((_) => _.isConnected)),
    _ && _(_) !== `body` && (_.push(_), _.length > _ && (_ = _.slice(-20)));
}
function _() {
  return _.slice()
    .reverse()
    .find((_) => _.isConnected);
}
function _(_) {
  let _ = _();
  return _(_, _) ? _ : _(_, _)[0] || _;
}
var _ = _.forwardRef(function (_, _) {
  return (0, _.jsx)(`button`, {
    ..._,
    type: `button`,
    ref: _,
    tabIndex: -1,
    style: _,
  });
});
function _(_) {
  let {
      context: _,
      children: _,
      disabled: _ = !1,
      order: _ = [`content`],
      guards: _ = !0,
      initialFocus: _ = 0,
      returnFocus: _ = !0,
      restoreFocus: _ = !1,
      modal: _ = !0,
      visuallyHiddenDismiss: _ = !1,
      closeOnFocusOut: _ = !0,
      outsideElementsInert: _ = !1,
    } = _,
    {
      open: _,
      onOpenChange: _,
      events: _,
      dataRef: _,
      elements: { domReference: _, floating: _ },
    } = _,
    _ = _(() => _.current.floatingContext?.nodeId),
    _ = typeof _ == `number` && _ < 0,
    _ = _(_) && _,
    _ = _(),
    _ = !_ || _,
    _ = !_ || (_ && _),
    _ = _(_),
    _ = _(_),
    _ = _(_),
    _ = _(),
    _ = _(),
    _ = _.useRef(null),
    _ = _.useRef(null),
    _ = _.useRef(!1),
    _ = _.useRef(!1),
    _ = _.useRef(-1),
    _ = _ != null,
    _ = _(_),
    _ = _(function (_) {
      return _ === void 0 && (_ = _), _ ? _(_, _()) : [];
    }),
    _ = _((_) => {
      let _ = _(_);
      return _.current
        .map((_) =>
          _ && _ === `reference` ? _ : _ && _ === `floating` ? _ : _,
        )
        .filter(Boolean)
        .flat();
    });
  _.useEffect(() => {
    if (_ || !_) return;
    function _(_) {
      if (_.key === `Tab`) {
        _(_, _(_(_))) && _().length === 0 && !_ && _(_);
        let _ = _(),
          _ = _(_);
        _.current[0] === `reference` &&
          _ === _ &&
          (_(_), _.shiftKey ? _(_[_.length - 1]) : _(_[1])),
          _.current[1] === `floating` &&
            _ === _ &&
            _.shiftKey &&
            (_(_), _(_[0]));
      }
    }
    let _ = _(_);
    return (
      _.addEventListener(`keydown`, _),
      () => {
        _.removeEventListener(`keydown`, _);
      }
    );
  }, [_, _, _, _, _, _, _, _]),
    _.useEffect(() => {
      if (_ || !_) return;
      function _(_) {
        let _ = _(_),
          _ = _().indexOf(_);
        _ !== -1 && (_.current = _);
      }
      return (
        _.addEventListener(`focusin`, _),
        () => {
          _.removeEventListener(`focusin`, _);
        }
      );
    }, [_, _, _]),
    _.useEffect(() => {
      if (_ || !_) return;
      function _() {
        (_.current = !0),
          setTimeout(() => {
            _.current = !1;
          });
      }
      function _(_) {
        let _ = _.relatedTarget;
        queueMicrotask(() => {
          let _ = _(),
            _ = !(
              _(_, _) ||
              _(_, _) ||
              _(_, _) ||
              _(_?.portalNode, _) ||
              (_ != null && _.hasAttribute(_(`focus-guard`))) ||
              (_ &&
                (_(_.nodesRef.current, _).find(
                  (_) =>
                    _(_.context?.elements.floating, _) ||
                    _(_.context?.elements.domReference, _),
                ) ||
                  _(_.nodesRef.current, _).find(
                    (_) =>
                      [
                        _.context?.elements.floating,
                        _(_.context?.elements.floating),
                      ].includes(_) || _.context?.elements.domReference === _,
                  )))
            );
          if (_ && _ && _(_(_)) === _(_).body) {
            _(_) && _.focus();
            let _ = _.current,
              _ = _(),
              _ = _[_] || _[_.length - 1] || _;
            _(_) && _.focus();
          }
          (_ || !_) &&
            _ &&
            _ &&
            !_.current &&
            _ !== _() &&
            ((_.current = !0), _(!1, _, `focus-out`));
        });
      }
      if (_ && _(_))
        return (
          _.addEventListener(`focusout`, _),
          _.addEventListener(`pointerdown`, _),
          _.addEventListener(`focusout`, _),
          () => {
            _.removeEventListener(`focusout`, _),
              _.removeEventListener(`pointerdown`, _),
              _.removeEventListener(`focusout`, _);
          }
        );
    }, [_, _, _, _, _, _, _, _, _, _, _, _, _]);
  let _ = _.useRef(null),
    _ = _.useRef(null),
    _ = _([_, _?.beforeInsideRef]),
    _ = _([_, _?.afterInsideRef]);
  _.useEffect(() => {
    var _;
    if (_ || !_) return;
    let _ = Array.from(
        (_ == null || (_ = _.portalNode) == null
          ? void 0
          : _.querySelectorAll(`[` + _(`portal`) + `]`)) || [],
      ),
      _ =
        _ && !_
          ? _(_?.nodesRef.current, _()).map((_) => _.context?.elements.floating)
          : [],
      _ = [
        _,
        ..._,
        ..._,
        _.current,
        _.current,
        _.current,
        _.current,
        _?.beforeOutsideRef.current,
        _?.afterOutsideRef.current,
        _.current.includes(`reference`) || _ ? _ : null,
      ].filter((_) => _ != null),
      _ = _ || _ ? _(_, !_, _) : _(_);
    return () => {
      _();
    };
  }, [_, _, _, _, _, _, _, _, _, _, _]),
    _(() => {
      if (_ || !_(_)) return;
      let _ = _(_(_));
      queueMicrotask(() => {
        let _ = _(_),
          _ = _.current,
          _ = (typeof _ == `number` ? _[_] : _.current) || _,
          _ = _(_, _);
        !_ &&
          !_ &&
          _ &&
          _(_, {
            preventScroll: _ === _,
          });
      });
    }, [_, _, _, _, _, _]),
    _(() => {
      if (_ || !_) return;
      let _ = !1,
        _ = !1,
        _ = _(_),
        _ = _(_),
        _ = _.current.openEvent;
      _(_);
      function _(_) {
        let { open: _, reason: _, event: _, nested: _ } = _;
        if (
          (_ && (_ = _),
          _ === `escape-key` && (_ = !0),
          [`hover`, `safe-polygon`].includes(_) &&
            _.type === `mouseleave` &&
            (_.current = !0),
          _ === `outside-press`)
        )
          if (_) (_.current = !1), (_ = !0);
          else if (_(_) || _(_)) _.current = !1;
          else {
            let _ = !1;
            document.createElement(`div`).focus({
              get preventScroll() {
                return (_ = !0), !1;
              },
            }),
              _ ? ((_.current = !1), (_ = !0)) : (_.current = !0);
          }
      }
      _._(`openchange`, _);
      let _ = _.createElement(`span`);
      _.setAttribute(`tabindex`, `-1`),
        _.setAttribute(`aria-hidden`, `true`),
        Object.assign(_.style, _),
        _ && _ && _.insertAdjacentElement(`afterend`, _);
      function _() {
        return typeof _.current == `boolean`
          ? _ && _
            ? _
            : _() || _
          : _.current.current || _;
      }
      return () => {
        _.off(`openchange`, _);
        let _ = _(_),
          _ =
            _(_, _) ||
            (_ &&
              _(_.nodesRef.current, _()).some((_) =>
                _(_.context?.elements.floating, _),
              ));
        (_ || (_ && [`click`, `mousedown`].includes(_.type))) && (_ = !0);
        let _ = _();
        queueMicrotask(() => {
          let _ = _(_);
          _.current &&
            !_.current &&
            _(_) &&
            (!(_ !== _ && _ !== _.body) || _) &&
            _.focus({
              preventScroll: _,
            }),
            _.remove();
        });
      };
    }, [_, _, _, _, _, _, _, _, _, _]),
    _.useEffect(() => {
      queueMicrotask(() => {
        _.current = !1;
      });
    }, [_]),
    _(() => {
      if (!_ && _)
        return (
          _.setFocusManagerState({
            modal: _,
            closeOnFocusOut: _,
            open: _,
            onOpenChange: _,
            domReference: _,
          }),
          () => {
            _.setFocusManagerState(null);
          }
        );
    }, [_, _, _, _, _, _, _]),
    _(() => {
      if (_ || !_ || typeof MutationObserver != `function` || _) return;
      let _ = () => {
        let _ = _.getAttribute(`tabindex`),
          _ = _(),
          _ = _(_(_)),
          _ = _.indexOf(_);
        _ !== -1 && (_.current = _),
          _.current.includes(`floating`) || (_ !== _ && _.length === 0)
            ? _ !== `0` && _.setAttribute(`tabindex`, `0`)
            : _ !== `-1` && _.setAttribute(`tabindex`, `-1`);
      };
      _();
      let _ = new MutationObserver(_);
      return (
        _.observe(_, {
          childList: !0,
          subtree: !0,
          attributes: !0,
        }),
        () => {
          _.disconnect();
        }
      );
    }, [_, _, _, _, _, _, _]);
  function _(_) {
    return _ || !_ || !_
      ? null
      : (0, _.jsx)(_, {
          ref: _ === `start` ? _ : _,
          onClick: (_) => _(!1, _.nativeEvent),
          children: typeof _ == `string` ? _ : `Dismiss`,
        });
  }
  let _ = !_ && _ && (!_ || !_) && (_ || _);
  return (0, _.jsxs)(_.Fragment, {
    children: [
      _ &&
        (0, _.jsx)(_, {
          "data-type": `inside`,
          ref: _,
          onFocus: (_) => {
            if (_) {
              let _ = _();
              _(_[0] === `reference` ? _[0] : _[_.length - 1]);
            } else if (_ != null && _.preserveTabOrder && _.portalNode)
              if (((_.current = !1), _(_, _.portalNode))) (_() || _)?.focus();
              else {
                var _;
                (_ = _.beforeOutsideRef.current) == null || _.focus();
              }
          },
        }),
      !_ && _(`start`),
      _,
      _(`end`),
      _ &&
        (0, _.jsx)(_, {
          "data-type": `inside`,
          ref: _,
          onFocus: (_) => {
            if (_) _(_()[0]);
            else if (_ != null && _.preserveTabOrder && _.portalNode)
              if ((_ && (_.current = !0), _(_, _.portalNode)))
                (_() || _)?.focus();
              else {
                var _;
                (_ = _.afterOutsideRef.current) == null || _.focus();
              }
          },
        }),
    ],
  });
}
function _(_) {
  return _(_.target) && _.target.tagName === `BUTTON`;
}
function _(_) {
  return _(_);
}
function _(_, _) {
  _ === void 0 && (_ = {});
  let {
      open: _,
      onOpenChange: _,
      dataRef: _,
      elements: { domReference: _ },
    } = _,
    {
      enabled: _ = !0,
      event: _ = `click`,
      toggle: _ = !0,
      ignoreMouse: _ = !1,
      keyboardHandlers: _ = !0,
      stickIfOpen: _ = !0,
    } = _,
    _ = _.useRef(),
    _ = _.useRef(!1),
    _ = _.useMemo(
      () => ({
        onPointerDown(_) {
          _.current = _.pointerType;
        },
        onMouseDown(_) {
          let _ = _.current;
          _.button === 0 &&
            _ !== `click` &&
            ((_(_, !0) && _) ||
              (_ &&
              _ &&
              (!(_.current.openEvent && _) ||
                _.current.openEvent.type === `mousedown`)
                ? _(!1, _.nativeEvent, `click`)
                : (_.preventDefault(), _(!0, _.nativeEvent, `click`))));
        },
        onClick(_) {
          let _ = _.current;
          if (_ === `mousedown` && _.current) {
            _.current = void 0;
            return;
          }
          (_(_, !0) && _) ||
            (_ &&
            _ &&
            (!(_.current.openEvent && _) ||
              _.current.openEvent.type === `click`)
              ? _(!1, _.nativeEvent, `click`)
              : _(!0, _.nativeEvent, `click`));
        },
        onKeyDown(_) {
          (_.current = void 0),
            !(_.defaultPrevented || !_ || _(_)) &&
              (_.key === ` ` && !_(_) && (_.preventDefault(), (_.current = !0)),
              _.key === `Enter` && _(!(_ && _), _.nativeEvent, `click`));
        },
        onKeyUp(_) {
          _.defaultPrevented ||
            !_ ||
            _(_) ||
            _(_) ||
            (_.key === ` ` &&
              _.current &&
              ((_.current = !1), _(!(_ && _), _.nativeEvent, `click`)));
        },
      }),
      [_, _, _, _, _, _, _, _, _],
    );
  return _.useMemo(
    () =>
      _
        ? {
            reference: _,
          }
        : {},
    [_, _],
  );
}
var _ = {
    pointerdown: `onPointerDown`,
    mousedown: `onMouseDown`,
    click: `onClick`,
  },
  _ = {
    pointerdown: `onPointerDownCapture`,
    mousedown: `onMouseDownCapture`,
    click: `onClickCapture`,
  },
  _ = (_) => ({
    escapeKey: typeof _ == `boolean` ? _ : (_?.escapeKey ?? !1),
    outsidePress: typeof _ == `boolean` ? _ : (_?.outsidePress ?? !0),
  });
function _(_, _) {
  _ === void 0 && (_ = {});
  let { open: _, onOpenChange: _, elements: _, dataRef: _ } = _,
    {
      enabled: _ = !0,
      escapeKey: _ = !0,
      outsidePress: _ = !0,
      outsidePressEvent: _ = `pointerdown`,
      referencePress: _ = !1,
      referencePressEvent: _ = `pointerdown`,
      ancestorScroll: _ = !1,
      bubbles: _,
      capture: _,
    } = _,
    _ = _(),
    _ = _(typeof _ == `function` ? _ : () => !1),
    _ = typeof _ == `function` ? _ : _,
    _ = _.useRef(!1),
    _ = _.useRef(!1),
    { escapeKey: _, outsidePress: _ } = _(_),
    { escapeKey: _, outsidePress: _ } = _(_),
    _ = _.useRef(!1),
    _ = _((_) => {
      if (!_ || !_ || !_ || _.key !== `Escape` || _.current) return;
      let _ = _.current.floatingContext?.nodeId,
        _ = _ ? _(_.nodesRef.current, _) : [];
      if (!_ && (_.stopPropagation(), _.length > 0)) {
        let _ = !0;
        if (
          (_.forEach((_) => {
            var _;
            if (
              (_ = _.context) != null &&
              _.open &&
              !_.context.dataRef.current.__escapeKeyBubbles
            ) {
              _ = !1;
              return;
            }
          }),
          !_)
        )
          return;
      }
      _(!1, _(_) ? _.nativeEvent : _, `escape-key`);
    }),
    _ = _((_) => {
      var _;
      let _ = () => {
        var _;
        _(_), (_ = _(_)) == null || _.removeEventListener(`keydown`, _);
      };
      (_ = _(_)) == null || _.addEventListener(`keydown`, _);
    }),
    _ = _((_) => {
      let _ = _.current;
      _.current = !1;
      let _ = _.current;
      if (
        ((_.current = !1),
        (_ === `click` && _) || _ || (typeof _ == `function` && !_(_)))
      )
        return;
      let _ = _(_),
        _ = `[` + _(`inert`) + `]`,
        _ = _(_.floating).querySelectorAll(_),
        _ = _(_) ? _ : null;
      for (; _ && !_(_); ) {
        let _ = _(_);
        if (_(_) || !_(_)) break;
        _ = _;
      }
      if (
        _.length &&
        _(_) &&
        !_(_) &&
        !_(_, _.floating) &&
        Array.from(_).every((_) => !_(_, _))
      )
        return;
      if (_(_) && _) {
        let _ = _(_),
          _ = _(_),
          _ = /auto|scroll/,
          _ = _ || _.test(_.overflowX),
          _ = _ || _.test(_.overflowY),
          _ = _ && _.clientWidth > 0 && _.scrollWidth > _.clientWidth,
          _ = _ && _.clientHeight > 0 && _.scrollHeight > _.clientHeight,
          _ = _.direction === `rtl`,
          _ =
            _ &&
            (_
              ? _.offsetX <= _.offsetWidth - _.clientWidth
              : _.offsetX > _.clientWidth),
          _ = _ && _.offsetY > _.clientHeight;
        if (_ || _) return;
      }
      let _ = _.current.floatingContext?.nodeId,
        _ =
          _ &&
          _(_.nodesRef.current, _).some((_) =>
            _(_, _.context?.elements.floating),
          );
      if (_(_, _.floating) || _(_, _.domReference) || _) return;
      let _ = _ ? _(_.nodesRef.current, _) : [];
      if (_.length > 0) {
        let _ = !0;
        if (
          (_.forEach((_) => {
            var _;
            if (
              (_ = _.context) != null &&
              _.open &&
              !_.context.dataRef.current.__outsidePressBubbles
            ) {
              _ = !1;
              return;
            }
          }),
          !_)
        )
          return;
      }
      _(!1, _, `outside-press`);
    }),
    _ = _((_) => {
      var _;
      let _ = () => {
        var _;
        _(_), (_ = _(_)) == null || _.removeEventListener(_, _);
      };
      (_ = _(_)) == null || _.addEventListener(_, _);
    });
  _.useEffect(() => {
    if (!_ || !_) return;
    (_.current.__escapeKeyBubbles = _), (_.current.__outsidePressBubbles = _);
    let _ = -1;
    function _(_) {
      _(!1, _, `ancestor-scroll`);
    }
    function _() {
      window.clearTimeout(_), (_.current = !0);
    }
    function _() {
      _ = window.setTimeout(
        () => {
          _.current = !1;
        },
        _() ? 5 : 0,
      );
    }
    let _ = _(_.floating);
    _ &&
      (_.addEventListener(`keydown`, _ ? _ : _, _),
      _.addEventListener(`compositionstart`, _),
      _.addEventListener(`compositionend`, _)),
      _ && _.addEventListener(_, _ ? _ : _, _);
    let _ = [];
    return (
      _ &&
        (_(_.domReference) && (_ = _(_.domReference)),
        _(_.floating) && (_ = _.concat(_(_.floating))),
        !_(_.reference) &&
          _.reference &&
          _.reference.contextElement &&
          (_ = _.concat(_(_.reference.contextElement)))),
      (_ = _.filter((_) => _ !== _.defaultView?.visualViewport)),
      _.forEach((_) => {
        _.addEventListener(`scroll`, _, {
          passive: !0,
        });
      }),
      () => {
        _ &&
          (_.removeEventListener(`keydown`, _ ? _ : _, _),
          _.removeEventListener(`compositionstart`, _),
          _.removeEventListener(`compositionend`, _)),
          _ && _.removeEventListener(_, _ ? _ : _, _),
          _.forEach((_) => {
            _.removeEventListener(`scroll`, _);
          }),
          window.clearTimeout(_);
      }
    );
  }, [_, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _]),
    _.useEffect(() => {
      _.current = !1;
    }, [_, _]);
  let _ = _.useMemo(
      () => ({
        onKeyDown: _,
        ...(_ && {
          [_[_]]: (_) => {
            _(!1, _.nativeEvent, `reference-press`);
          },
          ...(_ !== `click` && {
            onClick(_) {
              _(!1, _.nativeEvent, `reference-press`);
            },
          }),
        }),
      }),
      [_, _, _, _],
    ),
    _ = _.useMemo(
      () => ({
        onKeyDown: _,
        onMouseDown() {
          _.current = !0;
        },
        onMouseUp() {
          _.current = !0;
        },
        [_[_]]: () => {
          _.current = !0;
        },
      }),
      [_, _],
    );
  return _.useMemo(
    () =>
      _
        ? {
            reference: _,
            floating: _,
          }
        : {},
    [_, _, _],
  );
}
function _(_) {
  let { open: _ = !1, onOpenChange: _, elements: _ } = _,
    _ = _(),
    _ = _.useRef({}),
    [_] = _.useState(() => _()),
    _ = _() != null,
    [_, _] = _.useState(_.reference),
    _ = _((_, _, _) => {
      (_.current.openEvent = _ ? _ : void 0),
        _.emit(`openchange`, {
          open: _,
          event: _,
          reason: _,
          nested: _,
        }),
        _?.(_, _, _);
    }),
    _ = _.useMemo(
      () => ({
        setPositionReference: _,
      }),
      [],
    ),
    _ = _.useMemo(
      () => ({
        reference: _ || _.reference || null,
        floating: _.floating || null,
        domReference: _.reference,
      }),
      [_, _.reference, _.floating],
    );
  return _.useMemo(
    () => ({
      dataRef: _,
      open: _,
      onOpenChange: _,
      elements: _,
      events: _,
      floatingId: _,
      refs: _,
    }),
    [_, _, _, _, _, _],
  );
}
function _(_) {
  _ === void 0 && (_ = {});
  let { nodeId: _ } = _,
    _ = _({
      ..._,
      elements: {
        reference: null,
        floating: null,
        ..._.elements,
      },
    }),
    _ = _.rootContext || _,
    _ = _.elements,
    [_, _] = _.useState(null),
    [_, _] = _.useState(null),
    _ = _?.domReference || _,
    _ = _.useRef(null),
    _ = _();
  _(() => {
    _ && (_.current = _);
  }, [_]);
  let _ = _({
      ..._,
      elements: {
        ..._,
        ...(_ && {
          reference: _,
        }),
      },
    }),
    _ = _.useCallback(
      (_) => {
        let _ = _(_)
          ? {
              getBoundingClientRect: () => _.getBoundingClientRect(),
              contextElement: _,
            }
          : _;
        _(_), _.refs.setReference(_);
      },
      [_.refs],
    ),
    _ = _.useCallback(
      (_) => {
        (_(_) || _ === null) && ((_.current = _), _(_)),
          (_(_.refs.reference.current) ||
            _.refs.reference.current === null ||
            (_ !== null && !_(_))) &&
            _.refs.setReference(_);
      },
      [_.refs],
    ),
    _ = _.useMemo(
      () => ({
        ..._.refs,
        setReference: _,
        setPositionReference: _,
        domReference: _,
      }),
      [_.refs, _, _],
    ),
    _ = _.useMemo(
      () => ({
        ..._.elements,
        domReference: _,
      }),
      [_.elements, _],
    ),
    _ = _.useMemo(
      () => ({
        ..._,
        ..._,
        refs: _,
        elements: _,
        nodeId: _,
      }),
      [_, _, _, _, _],
    );
  return (
    _(() => {
      _.dataRef.current.floatingContext = _;
      let _ = _?.nodesRef.current.find((_) => _._ === _);
      _ && (_.context = _);
    }),
    _.useMemo(
      () => ({
        ..._,
        context: _,
        refs: _,
        elements: _,
      }),
      [_, _, _, _],
    )
  );
}
function _(_, _) {
  _ === void 0 && (_ = {});
  let { open: _, onOpenChange: _, events: _, dataRef: _, elements: _ } = _,
    { enabled: _ = !0, visibleOnly: _ = !0 } = _,
    _ = _.useRef(!1),
    _ = _.useRef(-1),
    _ = _.useRef(!0);
  _.useEffect(() => {
    if (!_) return;
    let _ = _(_.domReference);
    function _() {
      !_ &&
        _(_.domReference) &&
        _.domReference === _(_(_.domReference)) &&
        (_.current = !0);
    }
    function _() {
      _.current = !0;
    }
    return (
      _.addEventListener(`blur`, _),
      _.addEventListener(`keydown`, _, !0),
      () => {
        _.removeEventListener(`blur`, _),
          _.removeEventListener(`keydown`, _, !0);
      }
    );
  }, [_.domReference, _, _]),
    _.useEffect(() => {
      if (!_) return;
      function _(_) {
        let { reason: _ } = _;
        (_ === `reference-press` || _ === `escape-key`) && (_.current = !0);
      }
      return (
        _._(`openchange`, _),
        () => {
          _.off(`openchange`, _);
        }
      );
    }, [_, _]),
    _.useEffect(
      () => () => {
        _(_);
      },
      [],
    );
  let _ = _.useMemo(
    () => ({
      onPointerDown(_) {
        _(_.nativeEvent) || (_.current = !1);
      },
      onMouseLeave() {
        _.current = !1;
      },
      onFocus(_) {
        if (_.current) return;
        let _ = _(_.nativeEvent);
        if (_ && _(_))
          try {
            if (_() && _()) throw Error();
            if (!_.matches(`:focus-visible`)) return;
          } catch {
            if (!_.current && !_(_)) return;
          }
        _(!0, _.nativeEvent, `focus`);
      },
      onBlur(_) {
        _.current = !1;
        let _ = _.relatedTarget,
          _ = _.nativeEvent,
          _ =
            _(_) &&
            _.hasAttribute(_(`focus-guard`)) &&
            _.getAttribute(`data-type`) === `outside`;
        _.current = window.setTimeout(() => {
          let _ = _(_.domReference ? _.domReference.ownerDocument : document);
          (!_ && _ === _.domReference) ||
            _(_.current.floatingContext?.refs.floating.current, _) ||
            _(_.domReference, _) ||
            _ ||
            _(!1, _, `focus`);
        });
      },
    }),
    [_, _.domReference, _, _],
  );
  return _.useMemo(
    () =>
      _
        ? {
            reference: _,
          }
        : {},
    [_, _],
  );
}
var _ = `active`,
  _ = `selected`;
function _(_, _, _) {
  let _ = new Map(),
    _ = _ === `item`,
    _ = _;
  if (_ && _) {
    let { [_]: _, [_]: _, ..._ } = _;
    _ = _;
  }
  return {
    ...(_ === `floating` && {
      tabIndex: -1,
      [_]: ``,
    }),
    ..._,
    ..._.map((_) => {
      let _ = _ ? _[_] : null;
      return typeof _ == `function` ? (_ ? _(_) : null) : _;
    })
      .concat(_)
      .reduce(
        (_, _) => (
          _ &&
            Object.entries(_).forEach((_) => {
              let [_, _] = _;
              if (!(_ && [_, _].includes(_)))
                if (_.indexOf(`on`) === 0) {
                  if ((_.has(_) || _.set(_, []), typeof _ == `function`)) {
                    var _;
                    (_ = _.get(_)) == null || _.push(_),
                      (_[_] = function () {
                        var _ = [...arguments];
                        return _.get(_)
                          ?.map((_) => _(..._))
                          .find((_) => _ !== void 0);
                      });
                  }
                } else _[_] = _;
            }),
          _
        ),
        {},
      ),
  };
}
function _(_) {
  _ === void 0 && (_ = []);
  let _ = _.map((_) => _?.reference),
    _ = _.map((_) => _?.floating),
    _ = _.map((_) => _?.item),
    _ = _.useCallback((_) => _(_, _, `reference`), _),
    _ = _.useCallback((_) => _(_, _, `floating`), _),
    _ = _.useCallback((_) => _(_, _, `item`), _);
  return _.useMemo(
    () => ({
      getReferenceProps: _,
      getFloatingProps: _,
      getItemProps: _,
    }),
    [_, _, _],
  );
}
var _ = `Escape`;
function _(_, _, _) {
  switch (_) {
    case `vertical`:
      return _;
    case `horizontal`:
      return _;
    default:
      return _ || _;
  }
}
function _(_, _) {
  return _(_, _ === _ || _ === _, _ === _ || _ === _);
}
function _(_, _, _) {
  return (
    _(_, _ === _, _ ? _ === _ : _ === _) ||
    _ === `Enter` ||
    _ === ` ` ||
    _ === ``
  );
}
function _(_, _, _) {
  return _(_, _ ? _ === _ : _ === _, _ === _);
}
function _(_, _, _, _) {
  return _ === `both` || (_ === `horizontal` && _ && _ > 1)
    ? _ === _
    : _(_, _ ? _ === _ : _ === _, _ === _);
}
function _(_, _) {
  let { open: _, onOpenChange: _, elements: _ } = _,
    {
      listRef: _,
      activeIndex: _,
      onNavigate: _ = () => {},
      enabled: _ = !0,
      selectedIndex: _ = null,
      allowEscape: _ = !1,
      loop: _ = !1,
      nested: _ = !1,
      rtl: _ = !1,
      virtual: _ = !1,
      focusItemOnOpen: _ = `auto`,
      focusItemOnHover: _ = !0,
      openOnArrowKeyDown: _ = !0,
      disabledIndices: _ = void 0,
      orientation: _ = `vertical`,
      cols: _ = 1,
      scrollItemIntoView: _ = !0,
      virtualItemRef: _,
      itemSizes: _,
      dense: _ = !1,
    } = _,
    _ = _(_(_.floating)),
    _ = _(),
    _ = _();
  _(() => {
    _.dataRef.current.orientation = _;
  }, [_, _]);
  let _ = _(() => {
      _(_.current === -1 ? null : _.current);
    }),
    _ = _(_.domReference),
    _ = _.useRef(_),
    _ = _.useRef(_ ?? -1),
    _ = _.useRef(null),
    _ = _.useRef(!0),
    _ = _.useRef(_),
    _ = _.useRef(!!_.floating),
    _ = _.useRef(_),
    _ = _.useRef(!1),
    _ = _.useRef(!1),
    _ = _(_),
    _ = _(_),
    _ = _(_),
    _ = _(_),
    [_, _] = _.useState(),
    [_, _] = _.useState(),
    _ = _(() => {
      function _(_) {
        _
          ? (_(_._), _?.events.emit(`virtualfocus`, _), _ && (_.current = _))
          : _(_, {
              sync: _.current,
              preventScroll: !0,
            });
      }
      let _ = _.current[_.current];
      _ && _(_),
        (_.current ? (_) => _() : requestAnimationFrame)(() => {
          let _ = _.current[_.current] || _;
          if (!_) return;
          _ || _(_);
          let _ = _.current;
          _ &&
            _ &&
            (_.current || !_.current) &&
            (_.scrollIntoView == null ||
              _.scrollIntoView(
                typeof _ == `boolean`
                  ? {
                      block: `nearest`,
                      inline: `nearest`,
                    }
                  : _,
              ));
        });
    });
  _(() => {
    _ &&
      (_ && _.floating
        ? _.current && _ != null && ((_.current = !0), (_.current = _), _())
        : _.current && ((_.current = -1), _.current()));
  }, [_, _, _.floating, _, _]),
    _(() => {
      if (_ && _ && _.floating)
        if (_ == null) {
          if (((_.current = !1), _.current != null)) return;
          if (
            (_.current && ((_.current = -1), _()),
            (!_.current || !_.current) &&
              _.current &&
              (_.current != null || (_.current === !0 && _.current == null)))
          ) {
            let _ = 0,
              _ = () => {
                _.current[0] == null
                  ? (_ < 2 && (_ ? requestAnimationFrame : queueMicrotask)(_),
                    _++)
                  : ((_.current =
                      _.current == null || _(_.current, _, _) || _
                        ? _(_, _.current)
                        : _(_, _.current)),
                    (_.current = null),
                    _());
              };
            _();
          }
        } else _(_, _) || ((_.current = _), _(), (_.current = !1));
    }, [_, _, _.floating, _, _, _, _, _, _, _, _, _]),
    _(() => {
      var _;
      if (!_ || _.floating || !_ || _ || !_.current) return;
      let _ = _.nodesRef.current,
        _ =
          (_ = _.find((_) => _._ === _)) == null || (_ = _.context) == null
            ? void 0
            : _.elements.floating,
        _ = _(_(_.floating)),
        _ = _.some((_) => _.context && _(_.context.elements.floating, _));
      _ &&
        !_ &&
        _.current &&
        _.focus({
          preventScroll: !0,
        });
    }, [_, _.floating, _, _, _]),
    _(() => {
      if (!_ || !_ || !_ || _) return;
      function _(_) {
        _(_._), _ && (_.current = _);
      }
      return (
        _.events._(`virtualfocus`, _),
        () => {
          _.events.off(`virtualfocus`, _);
        }
      );
    }, [_, _, _, _, _]),
    _(() => {
      (_.current = _), (_.current = _), (_.current = !!_.floating);
    }),
    _(() => {
      _ || (_.current = null);
    }, [_]);
  let _ = _ != null,
    _ = _.useMemo(() => {
      function _(_) {
        if (!_) return;
        let _ = _.current.indexOf(_);
        _ !== -1 && _.current !== _ && ((_.current = _), _());
      }
      return {
        onFocus(_) {
          let { currentTarget: _ } = _;
          (_.current = !0), _(_);
        },
        onClick: (_) => {
          let { currentTarget: _ } = _;
          return _.focus({
            preventScroll: !0,
          });
        },
        ...(_ && {
          onMouseMove(_) {
            let { currentTarget: _ } = _;
            (_.current = !0), (_.current = !1), _(_);
          },
          onPointerLeave(_) {
            let { pointerType: _ } = _;
            if (
              !(!_.current || _ === `touch`) &&
              ((_.current = !0), (_.current = -1), _(), !_)
            ) {
              var _;
              (_ = _.current) == null ||
                _.focus({
                  preventScroll: !0,
                });
            }
          },
        }),
      };
    }, [_, _, _, _, _, _]),
    _ = _((_) => {
      if (
        ((_.current = !1),
        (_.current = !0),
        _.which === 229 || (!_.current && _.currentTarget === _.current))
      )
        return;
      if (_ && _(_.key, _, _, _)) {
        _(_),
          _(!1, _.nativeEvent, `list-navigation`),
          _(_.domReference) &&
            (_
              ? _?.events.emit(`virtualfocus`, _.domReference)
              : _.domReference.focus());
        return;
      }
      let _ = _.current,
        _ = _(_, _),
        _ = _(_, _);
      if (
        (_ ||
          (_.key === `Home` && (_(_), (_.current = _), _()),
          _.key === `End` && (_(_), (_.current = _), _())),
        _ > 1)
      ) {
        let _ =
            _ ||
            Array.from(
              {
                length: _.current.length,
              },
              () => ({
                width: 1,
                height: 1,
              }),
            ),
          _ = _(_, _, _),
          _ = _.findIndex((_) => _ != null && !_(_.current, _, _)),
          _ = _.reduce(
            (_, _, _) => (_ != null && !_(_.current, _, _) ? _ : _),
            -1,
          ),
          _ =
            _[
              _(
                {
                  current: _.map((_) => (_ == null ? null : _.current[_])),
                },
                {
                  event: _,
                  orientation: _,
                  loop: _,
                  rtl: _,
                  cols: _,
                  disabledIndices: _(
                    [
                      ...(_ ||
                        _.current.map((_, _) =>
                          _(_.current, _) ? _ : void 0,
                        )),
                      void 0,
                    ],
                    _,
                  ),
                  minIndex: _,
                  maxIndex: _,
                  prevIndex: _(
                    _.current > _ ? _ : _.current,
                    _,
                    _,
                    _,
                    _.key === _ ? `bl` : _.key === (_ ? _ : _) ? `tr` : `tl`,
                  ),
                  stopEvent: !0,
                },
              )
            ];
        if ((_ != null && ((_.current = _), _()), _ === `both`)) return;
      }
      if (_(_.key, _)) {
        if (
          (_(_),
          _ && !_ && _(_.currentTarget.ownerDocument) === _.currentTarget)
        ) {
          (_.current = _(_.key, _, _) ? _ : _), _();
          return;
        }
        _(_.key, _, _)
          ? _
            ? (_.current =
                _ >= _
                  ? _ && _ !== _.current.length
                    ? -1
                    : _
                  : _(_, {
                      startingIndex: _,
                      disabledIndices: _,
                    }))
            : (_.current = Math.min(
                _,
                _(_, {
                  startingIndex: _,
                  disabledIndices: _,
                }),
              ))
          : _
            ? (_.current =
                _ <= _
                  ? _ && _ !== -1
                    ? _.current.length
                    : _
                  : _(_, {
                      startingIndex: _,
                      decrement: !0,
                      disabledIndices: _,
                    }))
            : (_.current = Math.max(
                _,
                _(_, {
                  startingIndex: _,
                  decrement: !0,
                  disabledIndices: _,
                }),
              )),
          _(_, _.current) && (_.current = -1),
          _();
      }
    }),
    _ = _.useMemo(
      () =>
        _ &&
        _ &&
        _ && {
          "aria-activedescendant": _ || _,
        },
      [_, _, _, _, _],
    ),
    _ = _.useMemo(
      () => ({
        "aria-orientation": _ === `both` ? void 0 : _,
        ...(_ ? {} : _),
        onKeyDown: _,
        onPointerMove() {
          _.current = !0;
        },
      }),
      [_, _, _, _],
    ),
    _ = _.useMemo(() => {
      function _(_) {
        _ === `auto` && _(_.nativeEvent) && (_.current = !0);
      }
      function _(_) {
        (_.current = _), _ === `auto` && _(_.nativeEvent) && (_.current = !0);
      }
      return {
        ..._,
        onKeyDown(_) {
          var _;
          _.current = !1;
          let _ = _.key.startsWith(`Arrow`),
            _ = [`Home`, `End`].includes(_.key),
            _ = _ || _,
            _ =
              _ == null ||
              (_ = _.nodesRef.current.find((_) => _._ === _)) == null ||
              (_ = _.context) == null ||
              (_ = _.dataRef) == null
                ? void 0
                : _.current.orientation,
            _ = _(_.key, _, _),
            _ = _(_.key, _, _, _),
            _ = _(_.key, _, _),
            _ = _(_.key, _),
            _ = (_ ? _ : _) || _.key === `Enter` || _.key.trim() === ``;
          if (_ && _) {
            let _ = _?.nodesRef.current.find((_) => _.parentId == null),
              _ = _ && _ ? _(_.nodesRef.current, _._) : null;
            if (_ && _ && _) {
              let _ = new KeyboardEvent(`keydown`, {
                key: _.key,
                bubbles: !0,
              });
              if (_ || _) {
                let _ = _.context?.elements.domReference === _.currentTarget,
                  _ =
                    _ && !_
                      ? _.context?.elements.domReference
                      : _
                        ? _.current.find((_) => _?._ === _)
                        : null;
                _ && (_(_), _.dispatchEvent(_), _(void 0));
              }
              if (
                (_ || _) &&
                _.context &&
                _.context.open &&
                _.parentId &&
                _.currentTarget !== _.context.elements.domReference
              ) {
                var _;
                _(_),
                  (_ = _.context.elements.domReference) == null ||
                    _.dispatchEvent(_);
                return;
              }
            }
            return _(_);
          }
          if (!(!_ && !_ && _)) {
            if (_) {
              let _ = _(_.key, _);
              _.current = _ && _ ? null : _.key;
            }
            if (_) {
              _ &&
                (_(_),
                _
                  ? ((_.current = _(_, _.current)), _())
                  : _(!0, _.nativeEvent, `list-navigation`));
              return;
            }
            _ &&
              (_ != null && (_.current = _),
              _(_),
              !_ && _ ? _(!0, _.nativeEvent, `list-navigation`) : _(_),
              _ && _());
          }
        },
        onFocus() {
          _ && !_ && ((_.current = -1), _());
        },
        onPointerDown: _,
        onPointerEnter: _,
        onMouseDown: _,
        onClick: _,
      };
    }, [_, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _]);
  return _.useMemo(
    () =>
      _
        ? {
            reference: _,
            floating: _,
            item: _,
          }
        : {},
    [_, _, _, _],
  );
}
var _ = new Map([
  [`select`, `listbox`],
  [`combobox`, `listbox`],
  [`label`, !1],
]);
function _(_, _) {
  _ === void 0 && (_ = {});
  let { open: _, floatingId: _ } = _,
    { enabled: _ = !0, role: _ = `dialog` } = _,
    _ = _.get(_) ?? _,
    _ = _(),
    _ = _() != null,
    _ = _.useMemo(
      () =>
        _ === `tooltip` || _ === `label`
          ? {
              [`aria-` + (_ === `label` ? `labelledby` : `describedby`)]: _
                ? _
                : void 0,
            }
          : {
              "aria-expanded": _ ? `true` : `false`,
              "aria-haspopup": _ === `alertdialog` ? `dialog` : _,
              "aria-controls": _ ? _ : void 0,
              ...(_ === `listbox` && {
                role: `combobox`,
              }),
              ...(_ === `menu` && {
                _: _,
              }),
              ...(_ === `menu` &&
                _ && {
                  role: `menuitem`,
                }),
              ...(_ === `select` && {
                "aria-autocomplete": `none`,
              }),
              ...(_ === `combobox` && {
                "aria-autocomplete": `list`,
              }),
            },
      [_, _, _, _, _, _],
    ),
    _ = _.useMemo(() => {
      let _ = {
        _: _,
        ...(_ && {
          role: _,
        }),
      };
      return _ === `tooltip` || _ === `label`
        ? _
        : {
            ..._,
            ...(_ === `menu` && {
              "aria-labelledby": _,
            }),
          };
    }, [_, _, _, _]),
    _ = _.useCallback(
      (_) => {
        let { active: _, selected: _ } = _,
          _ = {
            role: `option`,
            ...(_ && {
              _: _ + `-option`,
            }),
          };
        switch (_) {
          case `select`:
            return {
              ..._,
              "aria-selected": _ && _,
            };
          case `combobox`:
            return {
              ..._,
              ...(_ && {
                "aria-selected": !0,
              }),
            };
        }
        return {};
      },
      [_, _],
    );
  return _.useMemo(
    () =>
      _
        ? {
            reference: _,
            floating: _,
            item: _,
          }
        : {},
    [_, _, _, _],
  );
}
function _(_, _) {
  let { open: _, dataRef: _ } = _,
    {
      listRef: _,
      activeIndex: _,
      onMatch: _,
      onTypingChange: _,
      enabled: _ = !0,
      findMatch: _ = null,
      resetMs: _ = 750,
      ignoreKeys: _ = [],
      selectedIndex: _ = null,
    } = _,
    _ = _.useRef(-1),
    _ = _.useRef(``),
    _ = _.useRef(_ ?? _ ?? -1),
    _ = _.useRef(null),
    _ = _(_),
    _ = _(_),
    _ = _(_),
    _ = _(_);
  _(() => {
    _ && (_(_), (_.current = null), (_.current = ``));
  }, [_]),
    _(() => {
      _ && _.current === `` && (_.current = _ ?? _ ?? -1);
    }, [_, _, _]);
  let _ = _((_) => {
      _
        ? _.current.typing || ((_.current.typing = _), _(_))
        : _.current.typing && ((_.current.typing = _), _(_));
    }),
    _ = _((_) => {
      function _(_, _, _) {
        let _ = _.current
          ? _.current(_, _)
          : _.find(
              (_) =>
                _?.toLocaleLowerCase().indexOf(_.toLocaleLowerCase()) === 0,
            );
        return _ ? _.indexOf(_) : -1;
      }
      let _ = _.current;
      if (
        (_.current.length > 0 &&
          _.current[0] !== ` ` &&
          (_(_, _, _.current) === -1 ? _(!1) : _.key === ` ` && _(_)),
        _ == null ||
          _.current.includes(_.key) ||
          _.key.length !== 1 ||
          _.ctrlKey ||
          _.metaKey ||
          _.altKey)
      )
        return;
      _ && _.key !== ` ` && (_(_), _(!0)),
        _.every(
          (_) => !_ || _[0]?.toLocaleLowerCase() !== _[1]?.toLocaleLowerCase(),
        ) &&
          _.current === _.key &&
          ((_.current = ``), (_.current = _.current)),
        (_.current += _.key),
        _(_),
        (_.current = window.setTimeout(() => {
          (_.current = ``), (_.current = _.current), _(!1);
        }, _));
      let _ = _.current,
        _ = _(
          _,
          [..._.slice((_ || 0) + 1), ..._.slice(0, (_ || 0) + 1)],
          _.current,
        );
      _ === -1
        ? _.key !== ` ` && ((_.current = ``), _(!1))
        : (_(_), (_.current = _));
    }),
    _ = _.useMemo(
      () => ({
        onKeyDown: _,
      }),
      [_],
    ),
    _ = _.useMemo(
      () => ({
        onKeyDown: _,
        onKeyUp(_) {
          _.key === ` ` && _(!1);
        },
      }),
      [_, _],
    );
  return _.useMemo(
    () =>
      _
        ? {
            reference: _,
            floating: _,
          }
        : {},
    [_, _, _],
  );
}
function _(_, _) {
  let [_, _] = _,
    _ = !1,
    _ = _.length;
  for (let _ = 0, _ = _ - 1; _ < _; _ = _++) {
    let [_, _] = _[_] || [0, 0],
      [_, _] = _[_] || [0, 0];
    _ >= _ != _ >= _ && _ <= ((_ - _) * (_ - _)) / (_ - _) + _ && (_ = !_);
  }
  return _;
}
function _(_, _) {
  return (
    _[0] >= _._ &&
    _[0] <= _._ + _.width &&
    _[1] >= _._ &&
    _[1] <= _._ + _.height
  );
}
function _(_) {
  _ === void 0 && (_ = {});
  let {
      buffer: _ = 0.5,
      blockPointerEvents: _ = !1,
      requireIntent: _ = !0,
    } = _,
    _,
    _ = !1,
    _ = null,
    _ = null,
    _ = performance.now();
  function _(_, _) {
    let _ = performance.now(),
      _ = _ - _;
    if (_ === null || _ === null || _ === 0)
      return (_ = _), (_ = _), (_ = _), null;
    let _ = _ - _,
      _ = _ - _,
      _ = Math.sqrt(_ * _ + _ * _) / _;
    return (_ = _), (_ = _), (_ = _), _;
  }
  let _ = (_) => {
    let {
      _: _,
      _: _,
      placement: _,
      elements: _,
      onClose: _,
      nodeId: _,
      tree: _,
    } = _;
    return function (_) {
      function _() {
        clearTimeout(_), _();
      }
      if (
        (clearTimeout(_),
        !_.domReference || !_.floating || _ == null || _ == null || _ == null)
      )
        return;
      let { clientX: _, clientY: _ } = _,
        _ = [_, _],
        _ = _(_),
        _ = _.type === `mouseleave`,
        _ = _(_.floating, _),
        _ = _(_.domReference, _),
        _ = _.domReference.getBoundingClientRect(),
        _ = _.floating.getBoundingClientRect(),
        _ = _.split(`-`)[0],
        _ = _ > _.right - _.width / 2,
        _ = _ > _.bottom - _.height / 2,
        _ = _(_, _),
        _ = _.width > _.width,
        _ = _.height > _.height,
        _ = (_ ? _ : _).left,
        _ = (_ ? _ : _).right,
        _ = (_ ? _ : _).top,
        _ = (_ ? _ : _).bottom;
      if (_ && ((_ = !0), !_)) return;
      if ((_ && (_ = !1), _ && !_)) {
        _ = !0;
        return;
      }
      if (
        (_ && _(_.relatedTarget) && _(_.floating, _.relatedTarget)) ||
        (_ &&
          _(_.nodesRef.current, _).some((_) => {
            let { context: _ } = _;
            return _?.open;
          }))
      )
        return;
      if (
        (_ === `top` && _ >= _.bottom - 1) ||
        (_ === `bottom` && _ <= _.top + 1) ||
        (_ === `left` && _ >= _.right - 1) ||
        (_ === `right` && _ <= _.left + 1)
      )
        return _();
      let _ = [];
      switch (_) {
        case `top`:
          _ = [
            [_, _.top + 1],
            [_, _.bottom - 1],
            [_, _.bottom - 1],
            [_, _.top + 1],
          ];
          break;
        case `bottom`:
          _ = [
            [_, _.top + 1],
            [_, _.bottom - 1],
            [_, _.bottom - 1],
            [_, _.top + 1],
          ];
          break;
        case `left`:
          _ = [
            [_.right - 1, _],
            [_.right - 1, _],
            [_.left + 1, _],
            [_.left + 1, _],
          ];
          break;
        case `right`:
          _ = [
            [_.right - 1, _],
            [_.right - 1, _],
            [_.left + 1, _],
            [_.left + 1, _],
          ];
          break;
      }
      function _(_) {
        let [_, _] = _;
        switch (_) {
          case `top`:
            return [
              [_ ? _ + _ / 2 : _ ? _ + _ * 4 : _ - _ * 4, _ + _ + 1],
              [_ ? _ - _ / 2 : _ ? _ + _ * 4 : _ - _ * 4, _ + _ + 1],
              [_.left, _ || _ ? _.bottom - _ : _.top],
              [_.right, _ ? (_ ? _.bottom - _ : _.top) : _.bottom - _],
            ];
          case `bottom`:
            return [
              [_ ? _ + _ / 2 : _ ? _ + _ * 4 : _ - _ * 4, _ - _],
              [_ ? _ - _ / 2 : _ ? _ + _ * 4 : _ - _ * 4, _ - _],
              [_.left, _ || _ ? _.top + _ : _.bottom],
              [_.right, _ ? (_ ? _.top + _ : _.bottom) : _.top + _],
            ];
          case `left`: {
            let _ = [_ + _ + 1, _ ? _ + _ / 2 : _ ? _ + _ * 4 : _ - _ * 4],
              _ = [_ + _ + 1, _ ? _ - _ / 2 : _ ? _ + _ * 4 : _ - _ * 4];
            return [
              [_ || _ ? _.right - _ : _.left, _.top],
              [_ ? (_ ? _.right - _ : _.left) : _.right - _, _.bottom],
              _,
              _,
            ];
          }
          case `right`:
            return [
              [_ - _, _ ? _ + _ / 2 : _ ? _ + _ * 4 : _ - _ * 4],
              [_ - _, _ ? _ - _ / 2 : _ ? _ + _ * 4 : _ - _ * 4],
              [_ || _ ? _.left + _ : _.right, _.top],
              [_ ? (_ ? _.left + _ : _.right) : _.left + _, _.bottom],
            ];
        }
      }
      if (!_([_, _], _)) {
        if (_ && !_) return _();
        if (!_ && _) {
          let _ = _(_.clientX, _.clientY);
          if (_ !== null && _ < 0.1) return _();
        }
        _([_, _], _([_, _])) ? !_ && _ && (_ = window.setTimeout(_, 40)) : _();
      }
    };
  };
  return (
    (_.__options = {
      blockPointerEvents: _,
    }),
    _
  );
}
var _ = _(_(), 1),
  _ = (0, _.createContext)(null);
function _(_) {
  let { children: _, ..._ } = _,
    _ = _(_);
  return (0, _.jsx)(_.Provider, {
    value: _,
    children: _,
  });
}
function _(_) {
  let { children: _ } = _,
    _ = _.Children.only(_),
    _ = (0, _.useContext)(_);
  return _
    ? _
      ? (0, _.cloneElement)(_, {
          ..._.getReferenceProps(_.props),
          ref: _(_.props.ref, _.floating.refs.setReference),
        })
      : (console.error(`<PopoverAnchor> must be a child of <PopoverRoot>.`),
        null)
    : null;
}
function _(_) {
  let { children: _, className: _, ref: _ } = _,
    _ = (0, _.useContext)(_),
    _ = _([_, _?.floating.refs.setFloating, (_) => _?.showPopover?.()]);
  if (!_)
    return (
      console.error(`<Popover.Positioner> must be a child of <Popover.Root>.`),
      null
    );
  if (!_.open) return null;
  let _ = _.Children.only(_),
    _ = _.Fragment;
  _.type == _.FocusManager &&
    ((_ = _.Children.only(_.props.children)), (_ = _));
  let _ = (0, _.cloneElement)(_, {
    ref: _,
    style: {
      ..._.floating.floatingStyles,
    },
    className: (0, _.default)(_(), _),
    popover: `manual`,
    ..._.getFloatingProps(),
  });
  return (0, _.jsx)(_, {
    children: _,
  });
}
function _(_) {
  return _()
    ? (0, _.jsx)(_, {
        ..._,
      })
    : (0, _.jsx)(_, {
        ..._,
      });
}
function _(_) {
  let { children: _ } = _,
    _ = (0, _.useContext)(_);
  _(!!_, `<Popover.Positioner> must be a child of <Popover.Root>.`);
  let _ = () => _.floating.context.onOpenChange(!1),
    _ = _.useRef(void 0);
  return (
    _(_, !!_.current, !1),
    (0, _.jsx)(_, {
      navID: `Popover`,
      onCancelButton: _,
      modal: !0,
      navTreeRef: _,
      children: (0, _.jsx)(`div`, {
        style: {
          display: `contents`,
        },
        children: (0, _.jsx)(_, {
          children: _,
        }),
      }),
    })
  );
}
function _(_) {
  let { children: _ } = _,
    _ = (0, _.useContext)(_);
  return (
    _(!!_, `<Popover.Positioner> must be a child of <Popover.Root>.`),
    (0, _.jsx)(_, {
      context: _.floating.context,
      initialFocus: -1,
      returnFocus: !1,
      children: _,
    })
  );
}
function _(_) {
  let { open: _, onOpenChange: _, placement: _, interactions: _ = {} } = _,
    _ = _,
    _ = _({
      open: _,
      onOpenChange: _,
      middleware: _(_),
      whileElementsMounted: _,
      placement: _ && typeof _ == `object` ? _.initial : _,
      strategy: `fixed`,
      platform: {
        ..._,
        getOffsetParent: (_) => _?.ownerDocument?.defaultView ?? window,
      },
    }),
    _ = {
      enabled: !!_.click,
    },
    _ = typeof _.click == `function` ? _.click(_) : _,
    _ = _(_.context, _),
    _ = {
      enabled: !!_.focus,
    },
    _ = typeof _.focus == `function` ? _.focus(_) : _,
    _ = _(_.context, _),
    _ = {
      handleClose: _(),
    },
    _ = typeof _.hover == `function` ? _.hover(_) : _,
    { getFloatingProps: _, getReferenceProps: _ } = _([
      _,
      _,
      _(_.context, {
        enabled: !!_.hover,
        ..._,
      }),
      _(_.context),
    ]);
  return {
    floating: _,
    getFloatingProps: _,
    getReferenceProps: _,
    open: _,
  };
}
function _(_) {
  let { gutter: _ = 0, placement: _ } = _,
    _ = [],
    _ = _ && typeof _ == `object`;
  return (
    _ && _.offset
      ? _.push(_(_.offset))
      : (!_ || _.offset === void 0) && _.push(_(2)),
    _ && _.flip ? _.push(_(_.flip)) : (!_ || _.flip === void 0) && _.push(_()),
    _ && _.shift
      ? _.push(_(_.shift))
      : (!_ || _.shift === void 0) && _.push(_()),
    _.push(
      _({
        apply: (_) => {
          let { rects: _, elements: _, availableHeight: _ } = _,
            _ = {
              boxSizing: `border-box`,
              zIndex: `1`,
            };
          switch ((_.scroll && (_.overflowY = `auto`), _.width)) {
            case `target`:
              _.width = `${_.reference.width}px`;
              break;
            case `content`:
              _.width = `${_.floating.width}px`;
              break;
            case `dropdown`: {
              let _ = _.reference.width;
              _.floating.width > _ && _ < 200 && (_ = _.floating.width),
                (_.width = `${_}px`);
            }
          }
          typeof _.width == `function` &&
            (_.width = _.width({
              unContentWidth: _.floating.width,
              unTargetWidth: _.reference.width,
            }));
          let _ = typeof _ == `number` ? `${_}px` : `var(--spacing-${_})`;
          typeof _.maxHeight == `function`
            ? (_.maxHeight = _.maxHeight({
                unAvailableHeight: _,
                gutter: _,
              }))
            : typeof _.maxHeight == `number`
              ? (_.maxHeight = `min( calc( ${_}px - ${_} ), ${_.maxHeight}px )`)
              : typeof _ == `number`
                ? (_.maxHeight = `${_ - _}px`)
                : (_.maxHeight = `calc( ${_}px - var(--spacing-${_}) )`),
            Object.assign(_.floating.style, _),
            _.floating.style.setProperty(`--popover-max-height`, _.maxHeight);
        },
      }),
    ),
    _
  );
}
var _ = {
  Root: _,
  Anchor: _,
  Positioner: _,
  FocusManager: _,
};
export { _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _ };
