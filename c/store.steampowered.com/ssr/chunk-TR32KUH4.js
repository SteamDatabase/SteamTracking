import { _, _ } from "./chunk-XXXXXXXX.js";
import { _ } from "./chunk-XXXXXXXX.js";
import { _ } from "./chunk-XXXXXXXX.js";
import { _ } from "./chunk-XXXXXXXX.js";
import { _ } from "./chunk-XXXXXXXX.js";
import { _ } from "./chunk-XXXXXXXX.js";
import { _ } from "./chunk-XXXXXXXX.js";
var _ = _(_(), 1);
var _ = _(_(), 1),
  _ = _.default.memo(function (_) {
    let { virtualizer: _, bDynamic: _, idx: _, rowGap: _, renderItem: _ } = _,
      _ = _.default.useCallback(
        (_, _, _) => (
          _.scrollToIndex(_, {
            align: "center",
          }),
          !0
        ),
        [_, _],
      );
    return (0, _.jsx)(_, {
      ref: _ ? _.measureElement : void 0,
      "data-index": _,
      fnScrollIntoViewHandler: _,
      scrollIntoViewWhenChildFocused: "force",
      style: {
        width: "100%",
        paddingBottom: _,
      },
      children: _(_),
    });
  }),
  _ = _.default.forwardRef(function (_, _) {
    let {
        nRows: _,
        nItemHeight: _,
        nRowGap: _,
        overscan: _,
        renderItem: _,
        bDynamic: _,
        measureElement: _,
        className: _,
        forceVirtualizeType: _,
        initialOffset: _,
        onOffsetChange: _,
        ..._
      } = _,
      [_, _] = (0, _.useState)(_),
      [_, _] = _.default.useState(),
      [_, _] = _.default.useState(),
      _ = _.default.useCallback(
        (_) => {
          if (!_ || _ == "window") return;
          let _ = _(_, "y");
          (0, _.startTransition)(() => {
            _(_ || void 0), _(_.offsetTop), _ || _(_ ? "element" : "window");
          });
        },
        [_],
      ),
      _ = _(_, _),
      _ = {
        nRows: _,
        nItemHeight: _,
        nRowGap: _,
        overscan: _,
        renderItem: _,
        bDynamic: _,
        measureElement: _,
        forceVirtualizeType: _,
        initialOffset: _,
        onOffsetChange: _,
      };
    return (0, _.jsx)(_, {
      className: _,
      ref: _,
      ..._,
      children: (0, _.jsxs)(_.Suspense, {
        children: [
          _ === "element" &&
            (0, _.jsx)(_, {
              ..._,
              nScrollMargin: _ || 0,
              elScrollable: _,
            }),
          _ === "window" &&
            (0, _.jsx)(_, {
              ..._,
              nScrollMargin: _,
            }),
        ],
      }),
    });
  });
function _(_) {
  let {
      nScrollMargin: _,
      nRows: _,
      nItemHeight: _,
      nRowGap: _ = 10,
      overscan: _ = 6,
      initialOffset: _,
      onOffsetChange: _,
      measureElement: _,
    } = _,
    _ = _ + _,
    _ = _({
      count: _,
      scrollMargin: _,
      estimateSize: _.default.useCallback(() => _, [_]),
      measureElement: _,
      overscan: _,
      initialOffset: _,
      initialRect: {
        height: 1e3,
        width: 1e3,
      },
      observeElementOffset: _,
      observeElementRect: _,
      onChange(_, _) {
        _?.(_.scrollOffset);
      },
    });
  return (
    _.default.useEffect(() => {
      (0, _.startTransition)(() => {
        _.measure();
      });
    }, [_, _]),
    (0, _.jsx)(_, {
      ..._,
      virtualizer: _,
    })
  );
}
function _(_) {
  let {
      nRows: _,
      nScrollMargin: _,
      elScrollable: _,
      nItemHeight: _,
      nRowGap: _ = 10,
      overscan: _ = 6,
      initialOffset: _,
      onOffsetChange: _,
      measureElement: _,
    } = _,
    _ = _ + _,
    _ = _({
      count: _,
      scrollMargin: _ - (_?.offsetTop || 0),
      getScrollElement: () => _,
      estimateSize: _.default.useCallback(() => _, [_]),
      measureElement: _,
      overscan: _,
      initialRect: {
        height: 1e3,
        width: 1e3,
      },
      initialOffset: _,
      observeElementOffset: _,
      observeElementRect: _,
      onChange(_, _) {
        _?.(_.scrollOffset);
      },
    });
  return (
    _.default.useEffect(() => {
      (0, _.startTransition)(() => {
        _.measure();
      });
    }, [_, _]),
    (0, _.jsx)(_, {
      ..._,
      virtualizer: _,
    })
  );
}
function _(_) {
  let { virtualizer: _, nRowGap: _, renderItem: _, bDynamic: _ } = _,
    _ = _.getVirtualItems(),
    _ = _.length ? _[0].start - _.options.scrollMargin : 0,
    _ = Math.max(0, _.getTotalSize());
  return (0, _.jsx)(_, {
    "flow-children": "column",
    navEntryPreferPosition: 3,
    style: {
      height: `${_}px`,
      width: "100%",
      position: "relative",
    },
    children: (0, _.jsx)("div", {
      style: {
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        transform: `translateY( ${_}px )`,
      },
      children: _.map((_) =>
        (0, _.jsx)(
          _,
          {
            virtualizer: _,
            bDynamic: _,
            idx: _.index,
            rowGap: _,
            renderItem: _,
          },
          _.key,
        ),
      ),
    }),
  });
}
function _(_) {
  return (..._) => {
    queueMicrotask(() => {
      (0, _.startTransition)(() => {
        _(..._);
      });
    });
  };
}
function _(_, _) {
  let _ = _.scrollElement;
  if (!_) return;
  let _;
  "scrollX" in _
    ? (_ = _((_) => _(_[_.options.horizontal ? "scrollX" : "scrollY"], _)))
    : (_ = _((_) =>
        _(_[_.options.horizontal ? "scrollLeft" : "scrollTop"], _),
      ));
  let _ = () => _(!0),
    _ = () => _(!1);
  return (
    _(),
    _.addEventListener("scroll", _, {
      passive: !0,
    }),
    _.addEventListener("scrollend", _, {
      passive: !0,
    }),
    () => {
      _.removeEventListener("scroll", _), _.removeEventListener("scrollend", _);
    }
  );
}
function _(_, _) {
  let _ = _.scrollElement;
  if (!_) return;
  let _ = _(() =>
    _({
      width: _.innerWidth,
      height: _.innerHeight,
    }),
  );
  return (
    _(),
    _.addEventListener("resize", _, {
      passive: !0,
    }),
    () => {
      _.removeEventListener("resize", _);
    }
  );
}
function _(_, _) {
  let _ = _.scrollElement;
  if (!_) return;
  let _ = _((_) =>
    _({
      width: Math.round(_.width),
      height: Math.round(_.height),
    }),
  );
  _(_.getBoundingClientRect());
  let _ = _.ownerDocument.defaultView;
  if (!_?.ResizeObserver) return () => {};
  let _ = new _.ResizeObserver((_) => {
    if (_[0]?.borderBoxSize[0]) {
      _({
        width: _[0].borderBoxSize[0].inlineSize,
        height: _[0].borderBoxSize[0].blockSize,
      });
      return;
    }
    _(_.getBoundingClientRect());
  });
  return (
    _.observe(_, {
      box: "border-box",
    }),
    () => {
      _.unobserve(_);
    }
  );
}
export { _, _, _, _ };
