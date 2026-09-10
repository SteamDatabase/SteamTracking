var _ = _(_(), 1),
  _ = _(_(), 1),
  _ = `h2hJmhz41JY-`;
function _() {
  return !(
    typeof HTMLElement < `u` &&
    typeof HTMLElement.prototype == `object` &&
    `popover` in HTMLElement.prototype
  );
}
async function _() {
  _() && (await _(() => import(`./FD42jJVK.js`), [], import.meta.url)).apply();
}
var _ = _();
_();
function _(_) {
  let [_, _] = _(_, `-`);
  return _ === `left` || _ === `right` ? [void 0, _] : [_, _];
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
      let _ = _.current.getBoundingClientRect(),
        _ = _.current.getBoundingClientRect(),
        _ = _,
        _ = _.current.matches(`:dir(rtl)`);
      _ && (_ === `left` ? (_ = `right`) : _ === `right` && (_ = `left`)),
        _.current.style.setProperty(`--parentWidth`, `${_.width}px`),
        _.current.style.setProperty(`--parentHeight`, `${_.height}px`);
      let _ = 0;
      if (!_) {
        if (_.width) {
          if (
            (_ === `left` && (_ = (_ ? _.right : _.left) - _.width),
            _ === `right`)
          ) {
            let _ = _ ? _.left : _.right;
            _ = document.body.clientWidth - (_ + _.width);
          }
          _ === void 0 &&
            (_ = _
              ? _.right - _.width
              : document.body.clientWidth - (_.left + _.width)),
            (_ = Math.min(_, 0));
        }
        _ === `left`
          ? _
            ? ((_.current.style.left = `unset`),
              (_.current.style.right = `${document.body.clientWidth - _.right + _}px`))
            : ((_.current.style.left = `unset`),
              (_.current.style.right = `${document.body.clientWidth - _.left + _}px`))
          : _ === `right`
            ? _
              ? ((_.current.style.left = `${_.left + _}px`),
                (_.current.style.right = `unset`))
              : ((_.current.style.left = `${_.right + _}px`),
                (_.current.style.right = `unset`))
            : _ === void 0 &&
              (_
                ? ((_.current.style.left = `unset`),
                  (_.current.style.right = `${document.body.clientWidth - _.right + _}px`))
                : ((_.current.style.left = `${_.left + _}px`),
                  (_.current.style.right = `unset`)));
      }
      _ ||
        (_ === `down`
          ? ((_.current.style.top = `${_.bottom}px`),
            (_.current.style.bottom = `unset`),
            _.current.style.setProperty(
              `--availableHeight`,
              `${document.documentElement.clientHeight - _.bottom}px`,
            ))
          : _ === `up`
            ? ((_.current.style.top = `unset`),
              (_.current.style.bottom = `${document.documentElement.clientHeight - _.top}px`),
              _.current.style.setProperty(`--availableHeight`, `${_.top}px`))
            : _ === void 0 &&
              ((_.current.style.top = `${_.top}px`),
              (_.current.style.bottom = `unset`),
              _.current.style.setProperty(
                `--availableHeight`,
                `${document.documentElement.clientHeight - _.top}px`,
              )));
    }, [_, _, _, _]),
    _ = (0, _.useMemo)(() => {
      if (_.current) return _(_.current);
    }, [_.current]);
  (0, _.useEffect)(
    () =>
      _
        ? (_.current?.showPopover(),
          _(),
          _?.addEventListener(`scroll`, _),
          window.addEventListener(`scroll`, _),
          () => {
            _?.removeEventListener(`scroll`, _),
              window.addEventListener(`scroll`, _);
          })
        : (window.sessionStorage.getItem(`DEBUG_StickyContextMenus`) !=
            `true` && _.current?.hidePopover(),
          () => {}),
    [_, _, _],
  );
  let _ = (0, _.useCallback)(() => {
      _(), _(!0), (_.current = !0);
    }, [_]),
    _ = (0, _.useCallback)(() => {
      (_.current = !1), _.current || _(!1);
    }, []),
    _ = (0, _.useCallback)(() => {
      (_.current = !0), _(!0);
    }, []),
    _ = (0, _.useCallback)(
      (_) => {
        _.current?.contains(_.target) && _();
      },
      [_],
    ),
    _ = (0, _.useCallback)(
      (_) => {
        _.current?.contains(_.target) && _();
      },
      [_],
    ),
    _ = (0, _.useCallback)(() => {
      (_.current = !1), _.current || _(!1);
    }, []),
    _ = (0, _.useCallback)(
      (_) => {
        _.current?.contains(_.target) && _();
      },
      [_],
    ),
    _ = (0, _.useCallback)(() => {
      _(), _();
    }, [_, _]),
    _ = (0, _.useCallback)(
      (_) => {
        _.key === `Enter` && (_.preventDefault(), _ ? _() : _());
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
        _ === 2 && _();
      },
      [_, _],
    ),
    _ = (0, _.useCallback)(
      (_) => {
        let _ = _.relatedTarget && !_.currentTarget.contains(_.relatedTarget),
          _ = !_.relatedTarget && !_.current;
        (_ || _) && (_(), _(!1));
      },
      [_],
    ),
    _ = (0, _.useCallback)(
      (_) => {
        _.current?.contains(_.target) && (_ && _ ? _() : _.current && _());
      },
      [_, _, _, _],
    ),
    _ = (0, _.useCallback)(
      (_) => {
        _.current?.contains(_.target) &&
          (_.key === `Enter` && _ && _ ? _() : _(),
          _.key === `Escape` && _ && (_(), _.stopPropagation()));
      },
      [_, _, _, _],
    ),
    _;
  _ === 0 && !_
    ? (_ = (_) => {
        _.preventDefault(), _();
      })
    : _ === 1 && (_ = _ ? _ : _);
  let _ = {
      "aria-expanded": _,
      role: `button`,
      onMouseEnter: _ === 0 ? _ : void 0,
      onMouseLeave: _ === 0 ? _ : void 0,
      onClick: _,
      ref: _,
      onKeyDown: _,
      onFocus: _,
      onBlur: _,
    },
    _ = {
      popover: `manual`,
      ref: _,
      onMouseEnter: _,
      onMouseLeave: _,
      onFocus: _,
      onBlur: _,
      onClick: _,
      onKeyDown: _,
      className: _,
    };
  return (
    (0, _.useImperativeHandle)(
      _.ref,
      () => ({
        show: _,
        hide: _,
        close: _,
      }),
      [_, _, _],
    ),
    {
      isShowingMenu: _,
      triggerProps: _,
      menuProps: _,
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
      _: _ = `div`,
      renderWhenClosed: _ = !0,
      ref: _,
      ..._
    } = _,
    { triggerProps: _, menuProps: _, isShowingMenu: _ } = _(_);
  if (!_ || _.Children.toArray(_).length === 0) return _;
  let _ = _;
  return (0, _.jsxs)(_.Fragment, {
    children: [
      (0, _.cloneElement)(_, _),
      (0, _.jsx)(_, {
        ..._,
        className: (0, _.default)(_.className, _),
        ..._,
        children: (_ || _) && _,
      }),
    ],
  });
}
export { _, _ };
