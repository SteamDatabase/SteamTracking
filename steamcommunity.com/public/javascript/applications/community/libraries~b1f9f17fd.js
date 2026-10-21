/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
"use strict";
(() => {
  (self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
    [9402],
    {
      33551: (Se) => {
        Se.exports = function J(O, A) {
          if (O === A) return !0;
          if (O && A && typeof O == "object" && typeof A == "object") {
            if (O.constructor !== A.constructor) return !1;
            var P, E, M;
            if (Array.isArray(O)) {
              if (((P = O.length), P != A.length)) return !1;
              for (E = P; E-- !== 0; ) if (!J(O[E], A[E])) return !1;
              return !0;
            }
            if (O.constructor === RegExp)
              return O.source === A.source && O.flags === A.flags;
            if (O.valueOf !== Object.prototype.valueOf)
              return O.valueOf() === A.valueOf();
            if (O.toString !== Object.prototype.toString)
              return O.toString() === A.toString();
            if (
              ((M = Object.keys(O)),
              (P = M.length),
              P !== Object.keys(A).length)
            )
              return !1;
            for (E = P; E-- !== 0; )
              if (!Object.prototype.hasOwnProperty.call(A, M[E])) return !1;
            for (E = P; E-- !== 0; ) {
              var D = M[E];
              if (!J(O[D], A[D])) return !1;
            }
            return !0;
          }
          return O !== O && A !== A;
        };
      },
      34822: (Se, J, O) => {
        O.d(J, { xA: () => Q });
        var A = O(30549),
          P = O(50181),
          E = O(20822),
          M = O(61474),
          D = O(35549),
          h = O(55635),
          C = O(90626);
        function Pe() {
          var n = this.constructor.getDerivedStateFromProps(
            this.props,
            this.state,
          );
          n != null && this.setState(n);
        }
        function Ge(n) {
          function r(t) {
            var e = this.constructor.getDerivedStateFromProps(n, t);
            return e ?? null;
          }
          this.setState(r.bind(this));
        }
        function ke(n, r) {
          try {
            var t = this.props,
              e = this.state;
            (this.props = n),
              (this.state = r),
              (this.__reactInternalSnapshotFlag = !0),
              (this.__reactInternalSnapshot = this.getSnapshotBeforeUpdate(
                t,
                e,
              ));
          } finally {
            (this.props = t), (this.state = e);
          }
        }
        (Pe.__suppressDeprecationWarning = !0),
          (Ge.__suppressDeprecationWarning = !0),
          (ke.__suppressDeprecationWarning = !0);
        function se(n) {
          var r = n.prototype;
          if (!r || !r.isReactComponent)
            throw new Error("Can only polyfill class components");
          if (
            typeof n.getDerivedStateFromProps != "function" &&
            typeof r.getSnapshotBeforeUpdate != "function"
          )
            return n;
          var t = null,
            e = null,
            o = null;
          if (
            (typeof r.componentWillMount == "function"
              ? (t = "componentWillMount")
              : typeof r.UNSAFE_componentWillMount == "function" &&
                (t = "UNSAFE_componentWillMount"),
            typeof r.componentWillReceiveProps == "function"
              ? (e = "componentWillReceiveProps")
              : typeof r.UNSAFE_componentWillReceiveProps == "function" &&
                (e = "UNSAFE_componentWillReceiveProps"),
            typeof r.componentWillUpdate == "function"
              ? (o = "componentWillUpdate")
              : typeof r.UNSAFE_componentWillUpdate == "function" &&
                (o = "UNSAFE_componentWillUpdate"),
            t !== null || e !== null || o !== null)
          ) {
            var l = n.displayName || n.name,
              i =
                typeof n.getDerivedStateFromProps == "function"
                  ? "getDerivedStateFromProps()"
                  : "getSnapshotBeforeUpdate()";
            throw Error(
              `Unsafe legacy lifecycles will not be called for components using new component APIs.

` +
                l +
                " uses " +
                i +
                " but also contains the following legacy lifecycles:" +
                (t !== null
                  ? `
  ` + t
                  : "") +
                (e !== null
                  ? `
  ` + e
                  : "") +
                (o !== null
                  ? `
  ` + o
                  : "") +
                `

The above lifecycles should be removed. Learn more about this warning here:
https://fb.me/react-async-component-lifecycle-hooks`,
            );
          }
          if (
            (typeof n.getDerivedStateFromProps == "function" &&
              ((r.componentWillMount = Pe), (r.componentWillReceiveProps = Ge)),
            typeof r.getSnapshotBeforeUpdate == "function")
          ) {
            if (typeof r.componentDidUpdate != "function")
              throw new Error(
                "Cannot polyfill getSnapshotBeforeUpdate() for components that do not define componentDidUpdate() on the prototype",
              );
            r.componentWillUpdate = ke;
            var s = r.componentDidUpdate;
            r.componentDidUpdate = function (c, d, u) {
              var f = this.__reactInternalSnapshotFlag
                ? this.__reactInternalSnapshot
                : u;
              s.call(this, c, d, f);
            };
          }
          return n;
        }
        function Ee(n, r) {
          var t = Object.keys(n);
          if (Object.getOwnPropertySymbols) {
            var e = Object.getOwnPropertySymbols(n);
            r &&
              (e = e.filter(function (o) {
                return Object.getOwnPropertyDescriptor(n, o).enumerable;
              })),
              t.push.apply(t, e);
          }
          return t;
        }
        function We(n) {
          for (var r = 1; r < arguments.length; r++) {
            var t = arguments[r] != null ? arguments[r] : {};
            r % 2
              ? Ee(Object(t), !0).forEach(function (e) {
                  (0, h.A)(n, e, t[e]);
                })
              : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(
                    n,
                    Object.getOwnPropertyDescriptors(t),
                  )
                : Ee(Object(t)).forEach(function (e) {
                    Object.defineProperty(
                      n,
                      e,
                      Object.getOwnPropertyDescriptor(t, e),
                    );
                  });
          }
          return n;
        }
        function Dt(n, r, t) {
          return (
            (r = (0, M.A)(r)),
            (0, E.A)(
              n,
              De()
                ? Reflect.construct(r, t || [], (0, M.A)(n).constructor)
                : r.apply(n, t),
            )
          );
        }
        function De() {
          try {
            var n = !Boolean.prototype.valueOf.call(
              Reflect.construct(Boolean, [], function () {}),
            );
          } catch {}
          return (De = function () {
            return !!n;
          })();
        }
        var He = (function (n) {
          function r() {
            var t;
            (0, A.A)(this, r);
            for (var e = arguments.length, o = new Array(e), l = 0; l < e; l++)
              o[l] = arguments[l];
            return (
              (t = Dt(this, r, [].concat(o))),
              (0, h.A)(t, "state", {
                scrollToColumn: 0,
                scrollToRow: 0,
                instanceProps: { prevScrollToColumn: 0, prevScrollToRow: 0 },
              }),
              (0, h.A)(t, "_columnStartIndex", 0),
              (0, h.A)(t, "_columnStopIndex", 0),
              (0, h.A)(t, "_rowStartIndex", 0),
              (0, h.A)(t, "_rowStopIndex", 0),
              (0, h.A)(t, "_onKeyDown", function (i) {
                var s = t.props,
                  a = s.columnCount,
                  c = s.disabled,
                  d = s.mode,
                  u = s.rowCount;
                if (!c) {
                  var f = t._getScrollState(),
                    p = f.scrollToColumn,
                    g = f.scrollToRow,
                    v = t._getScrollState(),
                    S = v.scrollToColumn,
                    _ = v.scrollToRow;
                  switch (i.key) {
                    case "ArrowDown":
                      _ = Math.min(
                        d === "cells" ? _ + 1 : t._rowStopIndex + 1,
                        u - 1,
                      );
                      break;
                    case "ArrowLeft":
                      S = Math.max(
                        d === "cells" ? S - 1 : t._columnStartIndex - 1,
                        0,
                      );
                      break;
                    case "ArrowRight":
                      S = Math.min(
                        d === "cells" ? S + 1 : t._columnStopIndex + 1,
                        a - 1,
                      );
                      break;
                    case "ArrowUp":
                      _ = Math.max(
                        d === "cells" ? _ - 1 : t._rowStartIndex - 1,
                        0,
                      );
                      break;
                  }
                  (S !== p || _ !== g) &&
                    (i.preventDefault(),
                    t._updateScrollState({
                      scrollToColumn: S,
                      scrollToRow: _,
                    }));
                }
              }),
              (0, h.A)(t, "_onSectionRendered", function (i) {
                var s = i.columnStartIndex,
                  a = i.columnStopIndex,
                  c = i.rowStartIndex,
                  d = i.rowStopIndex;
                (t._columnStartIndex = s),
                  (t._columnStopIndex = a),
                  (t._rowStartIndex = c),
                  (t._rowStopIndex = d);
              }),
              t
            );
          }
          return (
            (0, D.A)(r, n),
            (0, P.A)(
              r,
              [
                {
                  key: "setScrollIndexes",
                  value: function (e) {
                    var o = e.scrollToColumn,
                      l = e.scrollToRow;
                    this.setState({ scrollToRow: l, scrollToColumn: o });
                  },
                },
                {
                  key: "render",
                  value: function () {
                    var e = this.props,
                      o = e.className,
                      l = e.children,
                      i = this._getScrollState(),
                      s = i.scrollToColumn,
                      a = i.scrollToRow;
                    return C.createElement(
                      "div",
                      { className: o, onKeyDown: this._onKeyDown },
                      l({
                        onSectionRendered: this._onSectionRendered,
                        scrollToColumn: s,
                        scrollToRow: a,
                      }),
                    );
                  },
                },
                {
                  key: "_getScrollState",
                  value: function () {
                    return this.props.isControlled ? this.props : this.state;
                  },
                },
                {
                  key: "_updateScrollState",
                  value: function (e) {
                    var o = e.scrollToColumn,
                      l = e.scrollToRow,
                      i = this.props,
                      s = i.isControlled,
                      a = i.onScrollToChange;
                    typeof a == "function" &&
                      a({ scrollToColumn: o, scrollToRow: l }),
                      s || this.setState({ scrollToColumn: o, scrollToRow: l });
                  },
                },
              ],
              [
                {
                  key: "getDerivedStateFromProps",
                  value: function (e, o) {
                    return e.isControlled
                      ? {}
                      : e.scrollToColumn !==
                            o.instanceProps.prevScrollToColumn ||
                          e.scrollToRow !== o.instanceProps.prevScrollToRow
                        ? We(
                            We({}, o),
                            {},
                            {
                              scrollToColumn: e.scrollToColumn,
                              scrollToRow: e.scrollToRow,
                              instanceProps: {
                                prevScrollToColumn: e.scrollToColumn,
                                prevScrollToRow: e.scrollToRow,
                              },
                            },
                          )
                        : {};
                  },
                },
              ],
            )
          );
        })(C.PureComponent);
        (0, h.A)(He, "defaultProps", {
          disabled: !1,
          isControlled: !1,
          mode: "edges",
          scrollToColumn: 0,
          scrollToRow: 0,
        }),
          se(He);
        const _r = null;
        function Ne(n, r) {
          var t;
          typeof r < "u"
            ? (t = r)
            : typeof window < "u"
              ? (t = window)
              : typeof self < "u"
                ? (t = self)
                : (t = O.g);
          var e = typeof t.document < "u" && t.document.attachEvent;
          if (!e) {
            var o = (function () {
                var y =
                  t.requestAnimationFrame ||
                  t.mozRequestAnimationFrame ||
                  t.webkitRequestAnimationFrame ||
                  function (m) {
                    return t.setTimeout(m, 20);
                  };
                return function (m) {
                  return y(m);
                };
              })(),
              l = (function () {
                var y =
                  t.cancelAnimationFrame ||
                  t.mozCancelAnimationFrame ||
                  t.webkitCancelAnimationFrame ||
                  t.clearTimeout;
                return function (m) {
                  return y(m);
                };
              })(),
              i = function (m) {
                var x = m.__resizeTriggers__,
                  R = x.firstElementChild,
                  z = x.lastElementChild,
                  W = R.firstElementChild;
                (z.scrollLeft = z.scrollWidth),
                  (z.scrollTop = z.scrollHeight),
                  (W.style.width = R.offsetWidth + 1 + "px"),
                  (W.style.height = R.offsetHeight + 1 + "px"),
                  (R.scrollLeft = R.scrollWidth),
                  (R.scrollTop = R.scrollHeight);
              },
              s = function (m) {
                return (
                  m.offsetWidth != m.__resizeLast__.width ||
                  m.offsetHeight != m.__resizeLast__.height
                );
              },
              a = function (m) {
                if (
                  !(
                    m.target.className &&
                    typeof m.target.className.indexOf == "function" &&
                    m.target.className.indexOf("contract-trigger") < 0 &&
                    m.target.className.indexOf("expand-trigger") < 0
                  )
                ) {
                  var x = this;
                  i(this),
                    this.__resizeRAF__ && l(this.__resizeRAF__),
                    (this.__resizeRAF__ = o(function () {
                      s(x) &&
                        ((x.__resizeLast__.width = x.offsetWidth),
                        (x.__resizeLast__.height = x.offsetHeight),
                        x.__resizeListeners__.forEach(function (R) {
                          R.call(x, m);
                        }));
                    }));
                }
              },
              c = !1,
              d = "",
              u = "animationstart",
              f = "Webkit Moz O ms".split(" "),
              p =
                "webkitAnimationStart animationstart oAnimationStart MSAnimationStart".split(
                  " ",
                ),
              g = "";
            {
              var v = t.document.createElement("fakeelement");
              if ((v.style.animationName !== void 0 && (c = !0), c === !1)) {
                for (var S = 0; S < f.length; S++)
                  if (v.style[f[S] + "AnimationName"] !== void 0) {
                    (g = f[S]),
                      (d = "-" + g.toLowerCase() + "-"),
                      (u = p[S]),
                      (c = !0);
                    break;
                  }
              }
            }
            var _ = "resizeanim",
              T =
                "@" +
                d +
                "keyframes " +
                _ +
                " { from { opacity: 0; } to { opacity: 0; } } ",
              w = d + "animation: 1ms " + _ + "; ";
          }
          var b = function (m) {
              if (!m.getElementById("detectElementResize")) {
                var x =
                    (T || "") +
                    ".resize-triggers { " +
                    (w || "") +
                    'visibility: hidden; opacity: 0; } .resize-triggers, .resize-triggers > div, .contract-trigger:before { content: " "; display: block; position: absolute; top: 0; left: 0; height: 100%; width: 100%; overflow: hidden; z-index: -1; } .resize-triggers > div { background: #eee; overflow: auto; } .contract-trigger:before { width: 200%; height: 200%; }',
                  R = m.head || m.getElementsByTagName("head")[0],
                  z = m.createElement("style");
                (z.id = "detectElementResize"),
                  (z.type = "text/css"),
                  n != null && z.setAttribute("nonce", n),
                  z.styleSheet
                    ? (z.styleSheet.cssText = x)
                    : z.appendChild(m.createTextNode(x)),
                  R.appendChild(z);
              }
            },
            I = function (m, x) {
              if (e) m.attachEvent("onresize", x);
              else {
                if (!m.__resizeTriggers__) {
                  var R = m.ownerDocument,
                    z = t.getComputedStyle(m);
                  z &&
                    z.position == "static" &&
                    (m.style.position = "relative"),
                    b(R),
                    (m.__resizeLast__ = {}),
                    (m.__resizeListeners__ = []),
                    ((m.__resizeTriggers__ = R.createElement("div")).className =
                      "resize-triggers");
                  var W = R.createElement("div");
                  (W.className = "expand-trigger"),
                    W.appendChild(R.createElement("div"));
                  var G = R.createElement("div");
                  (G.className = "contract-trigger"),
                    m.__resizeTriggers__.appendChild(W),
                    m.__resizeTriggers__.appendChild(G),
                    m.appendChild(m.__resizeTriggers__),
                    i(m),
                    m.addEventListener("scroll", a, !0),
                    u &&
                      ((m.__resizeTriggers__.__animationListener__ = function (
                        $,
                      ) {
                        $.animationName == _ && i(m);
                      }),
                      m.__resizeTriggers__.addEventListener(
                        u,
                        m.__resizeTriggers__.__animationListener__,
                      ));
                }
                m.__resizeListeners__.push(x);
              }
            },
            L = function (m, x) {
              if (e) m.detachEvent("onresize", x);
              else if (
                (m.__resizeListeners__.splice(
                  m.__resizeListeners__.indexOf(x),
                  1,
                ),
                !m.__resizeListeners__.length)
              ) {
                m.removeEventListener("scroll", a, !0),
                  m.__resizeTriggers__.__animationListener__ &&
                    (m.__resizeTriggers__.removeEventListener(
                      u,
                      m.__resizeTriggers__.__animationListener__,
                    ),
                    (m.__resizeTriggers__.__animationListener__ = null));
                try {
                  m.__resizeTriggers__ = !m.removeChild(m.__resizeTriggers__);
                } catch {}
              }
            };
          return { addResizeListener: I, removeResizeListener: L };
        }
        function Fe(n, r) {
          var t = Object.keys(n);
          if (Object.getOwnPropertySymbols) {
            var e = Object.getOwnPropertySymbols(n);
            r &&
              (e = e.filter(function (o) {
                return Object.getOwnPropertyDescriptor(n, o).enumerable;
              })),
              t.push.apply(t, e);
          }
          return t;
        }
        function je(n) {
          for (var r = 1; r < arguments.length; r++) {
            var t = arguments[r] != null ? arguments[r] : {};
            r % 2
              ? Fe(Object(t), !0).forEach(function (e) {
                  (0, h.A)(n, e, t[e]);
                })
              : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(
                    n,
                    Object.getOwnPropertyDescriptors(t),
                  )
                : Fe(Object(t)).forEach(function (e) {
                    Object.defineProperty(
                      n,
                      e,
                      Object.getOwnPropertyDescriptor(t, e),
                    );
                  });
          }
          return n;
        }
        function Ht(n, r, t) {
          return (
            (r = (0, M.A)(r)),
            (0, E.A)(
              n,
              Ue()
                ? Reflect.construct(r, t || [], (0, M.A)(n).constructor)
                : r.apply(n, t),
            )
          );
        }
        function Ue() {
          try {
            var n = !Boolean.prototype.valueOf.call(
              Reflect.construct(Boolean, [], function () {}),
            );
          } catch {}
          return (Ue = function () {
            return !!n;
          })();
        }
        var Nt = (function (n) {
          function r() {
            var t;
            (0, A.A)(this, r);
            for (var e = arguments.length, o = new Array(e), l = 0; l < e; l++)
              o[l] = arguments[l];
            return (
              (t = Ht(this, r, [].concat(o))),
              (0, h.A)(t, "state", {
                height: t.props.defaultHeight || 0,
                width: t.props.defaultWidth || 0,
              }),
              (0, h.A)(t, "_parentNode", void 0),
              (0, h.A)(t, "_autoSizer", void 0),
              (0, h.A)(t, "_window", void 0),
              (0, h.A)(t, "_detectElementResize", void 0),
              (0, h.A)(t, "_onResize", function () {
                var i = t.props,
                  s = i.disableHeight,
                  a = i.disableWidth,
                  c = i.onResize;
                if (t._parentNode) {
                  var d = t._parentNode.offsetHeight || 0,
                    u = t._parentNode.offsetWidth || 0,
                    f = t._window || window,
                    p = f.getComputedStyle(t._parentNode) || {},
                    g = parseInt(p.paddingLeft, 10) || 0,
                    v = parseInt(p.paddingRight, 10) || 0,
                    S = parseInt(p.paddingTop, 10) || 0,
                    _ = parseInt(p.paddingBottom, 10) || 0,
                    T = d - S - _,
                    w = u - g - v;
                  ((!s && t.state.height !== T) ||
                    (!a && t.state.width !== w)) &&
                    (t.setState({ height: d - S - _, width: u - g - v }),
                    c({ height: d, width: u }));
                }
              }),
              (0, h.A)(t, "_setRef", function (i) {
                t._autoSizer = i;
              }),
              t
            );
          }
          return (
            (0, D.A)(r, n),
            (0, P.A)(r, [
              {
                key: "componentDidMount",
                value: function () {
                  var e = this.props.nonce;
                  this._autoSizer &&
                    this._autoSizer.parentNode &&
                    this._autoSizer.parentNode.ownerDocument &&
                    this._autoSizer.parentNode.ownerDocument.defaultView &&
                    this._autoSizer.parentNode instanceof
                      this._autoSizer.parentNode.ownerDocument.defaultView
                        .HTMLElement &&
                    ((this._parentNode = this._autoSizer.parentNode),
                    (this._window =
                      this._autoSizer.parentNode.ownerDocument.defaultView),
                    (this._detectElementResize = Ne(e, this._window)),
                    this._detectElementResize.addResizeListener(
                      this._parentNode,
                      this._onResize,
                    ),
                    this._onResize());
                },
              },
              {
                key: "componentWillUnmount",
                value: function () {
                  this._detectElementResize &&
                    this._parentNode &&
                    this._detectElementResize.removeResizeListener(
                      this._parentNode,
                      this._onResize,
                    );
                },
              },
              {
                key: "render",
                value: function () {
                  var e = this.props,
                    o = e.children,
                    l = e.className,
                    i = e.disableHeight,
                    s = e.disableWidth,
                    a = e.style,
                    c = this.state,
                    d = c.height,
                    u = c.width,
                    f = { overflow: "visible" },
                    p = {};
                  return (
                    i || ((f.height = 0), (p.height = d)),
                    s || ((f.width = 0), (p.width = u)),
                    C.createElement(
                      "div",
                      {
                        className: l,
                        ref: this._setRef,
                        style: je(je({}, f), a),
                      },
                      o(p),
                    )
                  );
                },
              },
            ])
          );
        })(C.Component);
        (0, h.A)(Nt, "defaultProps", {
          onResize: function () {},
          disableHeight: !1,
          disableWidth: !1,
          style: {},
        });
        function Ft(n, r, t) {
          return (
            (r = (0, M.A)(r)),
            (0, E.A)(
              n,
              Be()
                ? Reflect.construct(r, t || [], (0, M.A)(n).constructor)
                : r.apply(n, t),
            )
          );
        }
        function Be() {
          try {
            var n = !Boolean.prototype.valueOf.call(
              Reflect.construct(Boolean, [], function () {}),
            );
          } catch {}
          return (Be = function () {
            return !!n;
          })();
        }
        var jt = (function (n) {
          function r() {
            var t;
            (0, A.A)(this, r);
            for (var e = arguments.length, o = new Array(e), l = 0; l < e; l++)
              o[l] = arguments[l];
            return (
              (t = Ft(this, r, [].concat(o))),
              (0, h.A)(t, "_child", C.createRef()),
              (0, h.A)(t, "_measure", function () {
                var i = t.props,
                  s = i.cache,
                  a = i.columnIndex,
                  c = a === void 0 ? 0 : a,
                  d = i.parent,
                  u = i.rowIndex,
                  f = u === void 0 ? t.props.index || 0 : u,
                  p = t._getCellMeasurements(),
                  g = p.height,
                  v = p.width;
                (g !== s.getHeight(f, c) || v !== s.getWidth(f, c)) &&
                  (s.set(f, c, v, g),
                  d &&
                    typeof d.recomputeGridSize == "function" &&
                    d.recomputeGridSize({ columnIndex: c, rowIndex: f }));
              }),
              (0, h.A)(t, "_registerChild", function (i) {
                i &&
                  !(i instanceof Element) &&
                  console.warn(
                    "CellMeasurer registerChild expects to be passed Element or null",
                  ),
                  (t._child.current = i),
                  i && t._maybeMeasureCell();
              }),
              t
            );
          }
          return (
            (0, D.A)(r, n),
            (0, P.A)(r, [
              {
                key: "componentDidMount",
                value: function () {
                  this._maybeMeasureCell();
                },
              },
              {
                key: "componentDidUpdate",
                value: function () {
                  this._maybeMeasureCell();
                },
              },
              {
                key: "render",
                value: function () {
                  var e = this,
                    o = this.props.children,
                    l =
                      typeof o == "function"
                        ? o({
                            measure: this._measure,
                            registerChild: this._registerChild,
                          })
                        : o;
                  return l === null
                    ? l
                    : (0, C.cloneElement)(l, {
                        ref: function (s) {
                          typeof l.ref == "function"
                            ? l.ref(s)
                            : l.ref && (l.ref.current = s),
                            (e._child.current = s);
                        },
                      });
                },
              },
              {
                key: "_getCellMeasurements",
                value: function () {
                  var e = this.props.cache,
                    o = this._child.current;
                  if (
                    o &&
                    o.ownerDocument &&
                    o.ownerDocument.defaultView &&
                    o instanceof o.ownerDocument.defaultView.HTMLElement
                  ) {
                    var l = o.style.width,
                      i = o.style.height;
                    e.hasFixedWidth() || (o.style.width = "auto"),
                      e.hasFixedHeight() || (o.style.height = "auto");
                    var s = Math.ceil(o.offsetHeight),
                      a = Math.ceil(o.offsetWidth);
                    return (
                      l && (o.style.width = l),
                      i && (o.style.height = i),
                      { height: s, width: a }
                    );
                  } else return { height: 0, width: 0 };
                },
              },
              {
                key: "_maybeMeasureCell",
                value: function () {
                  var e = this.props,
                    o = e.cache,
                    l = e.columnIndex,
                    i = l === void 0 ? 0 : l,
                    s = e.parent,
                    a = e.rowIndex,
                    c = a === void 0 ? this.props.index || 0 : a;
                  if (!o.has(c, i)) {
                    var d = this._getCellMeasurements(),
                      u = d.height,
                      f = d.width;
                    o.set(c, i, f, u),
                      s &&
                        typeof s.invalidateCellSizeAfterRender == "function" &&
                        s.invalidateCellSizeAfterRender({
                          columnIndex: i,
                          rowIndex: c,
                        });
                  }
                },
              },
            ])
          );
        })(C.PureComponent);
        (0, h.A)(jt, "__internalCellMeasurerFlag", !1);
        const Cr = null;
        function Ut(n) {
          if (n == null) throw new TypeError("Cannot destructure " + n);
        }
        var U = O(58584);
        function $e(n) {
          var r,
            t,
            e = "";
          if (typeof n == "string" || typeof n == "number") e += n;
          else if (typeof n == "object")
            if (Array.isArray(n))
              for (r = 0; r < n.length; r++)
                n[r] && (t = $e(n[r])) && (e && (e += " "), (e += t));
            else for (r in n) n[r] && (e && (e += " "), (e += r));
          return e;
        }
        function Bt() {
          for (var n, r, t = 0, e = ""; t < arguments.length; )
            (n = arguments[t++]) && (r = $e(n)) && (e && (e += " "), (e += r));
          return e;
        }
        const j = Bt;
        function ee() {
          var n =
              arguments.length > 0 && arguments[0] !== void 0
                ? arguments[0]
                : !0,
            r = {};
          return function (t) {
            var e = t.callback,
              o = t.indices,
              l = Object.keys(o),
              i =
                !n ||
                l.every(function (a) {
                  var c = o[a];
                  return Array.isArray(c) ? c.length > 0 : c >= 0;
                }),
              s =
                l.length !== Object.keys(r).length ||
                l.some(function (a) {
                  var c = r[a],
                    d = o[a];
                  return Array.isArray(d)
                    ? c.join(",") !== d.join(",")
                    : c !== d;
                });
            (r = o), i && s && e(o);
          };
        }
        const $t = !!(
          typeof window < "u" &&
          window.document &&
          window.document.createElement
        );
        var fe;
        function _e(n) {
          if (((!fe && fe !== 0) || n) && $t) {
            var r = document.createElement("div");
            (r.style.position = "absolute"),
              (r.style.top = "-9999px"),
              (r.style.width = "50px"),
              (r.style.height = "50px"),
              (r.style.overflow = "scroll"),
              document.body.appendChild(r),
              (fe = r.offsetWidth - r.clientWidth),
              document.body.removeChild(r);
          }
          return fe;
        }
        function Ve(n, r) {
          var t = Object.keys(n);
          if (Object.getOwnPropertySymbols) {
            var e = Object.getOwnPropertySymbols(n);
            r &&
              (e = e.filter(function (o) {
                return Object.getOwnPropertyDescriptor(n, o).enumerable;
              })),
              t.push.apply(t, e);
          }
          return t;
        }
        function Ke(n) {
          for (var r = 1; r < arguments.length; r++) {
            var t = arguments[r] != null ? arguments[r] : {};
            r % 2
              ? Ve(Object(t), !0).forEach(function (e) {
                  (0, h.A)(n, e, t[e]);
                })
              : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(
                    n,
                    Object.getOwnPropertyDescriptors(t),
                  )
                : Ve(Object(t)).forEach(function (e) {
                    Object.defineProperty(
                      n,
                      e,
                      Object.getOwnPropertyDescriptor(t, e),
                    );
                  });
          }
          return n;
        }
        function Vt(n, r, t) {
          return (
            (r = (0, M.A)(r)),
            (0, E.A)(
              n,
              qe()
                ? Reflect.construct(r, t || [], (0, M.A)(n).constructor)
                : r.apply(n, t),
            )
          );
        }
        function qe() {
          try {
            var n = !Boolean.prototype.valueOf.call(
              Reflect.construct(Boolean, [], function () {}),
            );
          } catch {}
          return (qe = function () {
            return !!n;
          })();
        }
        var Kt = 150,
          te = { OBSERVED: "observed", REQUESTED: "requested" },
          pe = (function (n) {
            function r() {
              var t;
              (0, A.A)(this, r);
              for (
                var e = arguments.length, o = new Array(e), l = 0;
                l < e;
                l++
              )
                o[l] = arguments[l];
              return (
                (t = Vt(this, r, [].concat(o))),
                (0, h.A)(t, "state", {
                  isScrolling: !1,
                  scrollLeft: 0,
                  scrollTop: 0,
                }),
                (0, h.A)(t, "_calculateSizeAndPositionDataOnNextUpdate", !1),
                (0, h.A)(t, "_onSectionRenderedMemoizer", ee()),
                (0, h.A)(t, "_onScrollMemoizer", ee(!1)),
                (0, h.A)(t, "_invokeOnSectionRenderedHelper", function () {
                  var i = t.props,
                    s = i.cellLayoutManager,
                    a = i.onSectionRendered;
                  t._onSectionRenderedMemoizer({
                    callback: a,
                    indices: { indices: s.getLastRenderedIndices() },
                  });
                }),
                (0, h.A)(t, "_setScrollingContainerRef", function (i) {
                  t._scrollingContainer = i;
                }),
                (0, h.A)(
                  t,
                  "_updateScrollPositionForScrollToCell",
                  function () {
                    var i = t.props,
                      s = i.cellLayoutManager,
                      a = i.height,
                      c = i.scrollToAlignment,
                      d = i.scrollToCell,
                      u = i.width,
                      f = t.state,
                      p = f.scrollLeft,
                      g = f.scrollTop;
                    if (d >= 0) {
                      var v = s.getScrollPositionForCell({
                        align: c,
                        cellIndex: d,
                        height: a,
                        scrollLeft: p,
                        scrollTop: g,
                        width: u,
                      });
                      (v.scrollLeft !== p || v.scrollTop !== g) &&
                        t._setScrollPosition(v);
                    }
                  },
                ),
                (0, h.A)(t, "_onScroll", function (i) {
                  if (i.target === t._scrollingContainer) {
                    t._enablePointerEventsAfterDelay();
                    var s = t.props,
                      a = s.cellLayoutManager,
                      c = s.height,
                      d = s.isScrollingChange,
                      u = s.width,
                      f = t._scrollbarSize,
                      p = a.getTotalSize(),
                      g = p.height,
                      v = p.width,
                      S = Math.max(0, Math.min(v - u + f, i.target.scrollLeft)),
                      _ = Math.max(0, Math.min(g - c + f, i.target.scrollTop));
                    if (t.state.scrollLeft !== S || t.state.scrollTop !== _) {
                      var T = i.cancelable ? te.OBSERVED : te.REQUESTED;
                      t.state.isScrolling || d(!0),
                        t.setState({
                          isScrolling: !0,
                          scrollLeft: S,
                          scrollPositionChangeReason: T,
                          scrollTop: _,
                        });
                    }
                    t._invokeOnScrollMemoizer({
                      scrollLeft: S,
                      scrollTop: _,
                      totalWidth: v,
                      totalHeight: g,
                    });
                  }
                }),
                (t._scrollbarSize = _e()),
                t._scrollbarSize === void 0
                  ? ((t._scrollbarSizeMeasured = !1), (t._scrollbarSize = 0))
                  : (t._scrollbarSizeMeasured = !0),
                t
              );
            }
            return (
              (0, D.A)(r, n),
              (0, P.A)(
                r,
                [
                  {
                    key: "recomputeCellSizesAndPositions",
                    value: function () {
                      (this._calculateSizeAndPositionDataOnNextUpdate = !0),
                        this.forceUpdate();
                    },
                  },
                  {
                    key: "componentDidMount",
                    value: function () {
                      var e = this.props,
                        o = e.cellLayoutManager,
                        l = e.scrollLeft,
                        i = e.scrollToCell,
                        s = e.scrollTop;
                      this._scrollbarSizeMeasured ||
                        ((this._scrollbarSize = _e()),
                        (this._scrollbarSizeMeasured = !0),
                        this.setState({})),
                        i >= 0
                          ? this._updateScrollPositionForScrollToCell()
                          : (l >= 0 || s >= 0) &&
                            this._setScrollPosition({
                              scrollLeft: l,
                              scrollTop: s,
                            }),
                        this._invokeOnSectionRenderedHelper();
                      var a = o.getTotalSize(),
                        c = a.height,
                        d = a.width;
                      this._invokeOnScrollMemoizer({
                        scrollLeft: l || 0,
                        scrollTop: s || 0,
                        totalHeight: c,
                        totalWidth: d,
                      });
                    },
                  },
                  {
                    key: "componentDidUpdate",
                    value: function (e, o) {
                      var l = this.props,
                        i = l.height,
                        s = l.scrollToAlignment,
                        a = l.scrollToCell,
                        c = l.width,
                        d = this.state,
                        u = d.scrollLeft,
                        f = d.scrollPositionChangeReason,
                        p = d.scrollTop;
                      f === te.REQUESTED &&
                        (u >= 0 &&
                          u !== o.scrollLeft &&
                          u !== this._scrollingContainer.scrollLeft &&
                          (this._scrollingContainer.scrollLeft = u),
                        p >= 0 &&
                          p !== o.scrollTop &&
                          p !== this._scrollingContainer.scrollTop &&
                          (this._scrollingContainer.scrollTop = p)),
                        (i !== e.height ||
                          s !== e.scrollToAlignment ||
                          a !== e.scrollToCell ||
                          c !== e.width) &&
                          this._updateScrollPositionForScrollToCell(),
                        this._invokeOnSectionRenderedHelper();
                    },
                  },
                  {
                    key: "componentWillUnmount",
                    value: function () {
                      this._disablePointerEventsTimeoutId &&
                        clearTimeout(this._disablePointerEventsTimeoutId);
                    },
                  },
                  {
                    key: "render",
                    value: function () {
                      var e = this.props,
                        o = e.autoHeight,
                        l = e.cellCount,
                        i = e.cellLayoutManager,
                        s = e.className,
                        a = e.height,
                        c = e.horizontalOverscanSize,
                        d = e.id,
                        u = e.noContentRenderer,
                        f = e.style,
                        p = e.verticalOverscanSize,
                        g = e.width,
                        v = this.state,
                        S = v.isScrolling,
                        _ = v.scrollLeft,
                        T = v.scrollTop;
                      (this._lastRenderedCellCount !== l ||
                        this._lastRenderedCellLayoutManager !== i ||
                        this._calculateSizeAndPositionDataOnNextUpdate) &&
                        ((this._lastRenderedCellCount = l),
                        (this._lastRenderedCellLayoutManager = i),
                        (this._calculateSizeAndPositionDataOnNextUpdate = !1),
                        i.calculateSizeAndPositionData());
                      var w = i.getTotalSize(),
                        b = w.height,
                        I = w.width,
                        L = Math.max(0, _ - c),
                        y = Math.max(0, T - p),
                        m = Math.min(I, _ + g + c),
                        x = Math.min(b, T + a + p),
                        R =
                          a > 0 && g > 0
                            ? i.cellRenderers({
                                height: x - y,
                                isScrolling: S,
                                width: m - L,
                                x: L,
                                y,
                              })
                            : [],
                        z = {
                          boxSizing: "border-box",
                          direction: "ltr",
                          height: o ? "auto" : a,
                          position: "relative",
                          WebkitOverflowScrolling: "touch",
                          width: g,
                          willChange: "transform",
                        },
                        W = b > a ? this._scrollbarSize : 0,
                        G = I > g ? this._scrollbarSize : 0;
                      return (
                        (z.overflowX = I + W <= g ? "hidden" : "auto"),
                        (z.overflowY = b + G <= a ? "hidden" : "auto"),
                        C.createElement(
                          "div",
                          {
                            ref: this._setScrollingContainerRef,
                            "aria-label": this.props["aria-label"],
                            className: j("ReactVirtualized__Collection", s),
                            id: d,
                            onScroll: this._onScroll,
                            role: "grid",
                            style: Ke(Ke({}, z), f),
                            tabIndex: 0,
                          },
                          l > 0 &&
                            C.createElement(
                              "div",
                              {
                                className:
                                  "ReactVirtualized__Collection__innerScrollContainer",
                                style: {
                                  height: b,
                                  maxHeight: b,
                                  maxWidth: I,
                                  overflow: "hidden",
                                  pointerEvents: S ? "none" : "",
                                  width: I,
                                },
                              },
                              R,
                            ),
                          l === 0 && u(),
                        )
                      );
                    },
                  },
                  {
                    key: "_enablePointerEventsAfterDelay",
                    value: function () {
                      var e = this;
                      this._disablePointerEventsTimeoutId &&
                        clearTimeout(this._disablePointerEventsTimeoutId),
                        (this._disablePointerEventsTimeoutId = setTimeout(
                          function () {
                            var o = e.props.isScrollingChange;
                            o(!1),
                              (e._disablePointerEventsTimeoutId = null),
                              e.setState({ isScrolling: !1 });
                          },
                          Kt,
                        ));
                    },
                  },
                  {
                    key: "_invokeOnScrollMemoizer",
                    value: function (e) {
                      var o = this,
                        l = e.scrollLeft,
                        i = e.scrollTop,
                        s = e.totalHeight,
                        a = e.totalWidth;
                      this._onScrollMemoizer({
                        callback: function (d) {
                          var u = d.scrollLeft,
                            f = d.scrollTop,
                            p = o.props,
                            g = p.height,
                            v = p.onScroll,
                            S = p.width;
                          v({
                            clientHeight: g,
                            clientWidth: S,
                            scrollHeight: s,
                            scrollLeft: u,
                            scrollTop: f,
                            scrollWidth: a,
                          });
                        },
                        indices: { scrollLeft: l, scrollTop: i },
                      });
                    },
                  },
                  {
                    key: "_setScrollPosition",
                    value: function (e) {
                      var o = e.scrollLeft,
                        l = e.scrollTop,
                        i = { scrollPositionChangeReason: te.REQUESTED };
                      o >= 0 && (i.scrollLeft = o),
                        l >= 0 && (i.scrollTop = l),
                        ((o >= 0 && o !== this.state.scrollLeft) ||
                          (l >= 0 && l !== this.state.scrollTop)) &&
                          this.setState(i);
                    },
                  },
                ],
                [
                  {
                    key: "getDerivedStateFromProps",
                    value: function (e, o) {
                      return e.cellCount === 0 &&
                        (o.scrollLeft !== 0 || o.scrollTop !== 0)
                        ? {
                            scrollLeft: 0,
                            scrollTop: 0,
                            scrollPositionChangeReason: te.REQUESTED,
                          }
                        : e.scrollLeft !== o.scrollLeft ||
                            e.scrollTop !== o.scrollTop
                          ? {
                              scrollLeft:
                                e.scrollLeft != null
                                  ? e.scrollLeft
                                  : o.scrollLeft,
                              scrollTop:
                                e.scrollTop != null ? e.scrollTop : o.scrollTop,
                              scrollPositionChangeReason: te.REQUESTED,
                            }
                          : null;
                    },
                  },
                ],
              )
            );
          })(C.PureComponent);
        (0, h.A)(pe, "defaultProps", {
          "aria-label": "grid",
          horizontalOverscanSize: 0,
          noContentRenderer: function () {
            return null;
          },
          onScroll: function () {
            return null;
          },
          onSectionRendered: function () {
            return null;
          },
          scrollToAlignment: "auto",
          scrollToCell: -1,
          style: {},
          verticalOverscanSize: 0,
        }),
          (pe.propTypes = {}),
          se(pe);
        const qt = pe;
        var Zt = (function () {
            function n(r) {
              var t = r.height,
                e = r.width,
                o = r.x,
                l = r.y;
              (0, A.A)(this, n),
                (this.height = t),
                (this.width = e),
                (this.x = o),
                (this.y = l),
                (this._indexMap = {}),
                (this._indices = []);
            }
            return (0, P.A)(n, [
              {
                key: "addCellIndex",
                value: function (t) {
                  var e = t.index;
                  this._indexMap[e] ||
                    ((this._indexMap[e] = !0), this._indices.push(e));
                },
              },
              {
                key: "getCellIndices",
                value: function () {
                  return this._indices;
                },
              },
              {
                key: "toString",
                value: function () {
                  return ""
                    .concat(this.x, ",")
                    .concat(this.y, " ")
                    .concat(this.width, "x")
                    .concat(this.height);
                },
              },
            ]);
          })(),
          Qt = 100,
          Xt = (function () {
            function n() {
              var r =
                arguments.length > 0 && arguments[0] !== void 0
                  ? arguments[0]
                  : Qt;
              (0, A.A)(this, n),
                (this._sectionSize = r),
                (this._cellMetadata = []),
                (this._sections = {});
            }
            return (0, P.A)(n, [
              {
                key: "getCellIndices",
                value: function (t) {
                  var e = t.height,
                    o = t.width,
                    l = t.x,
                    i = t.y,
                    s = {};
                  return (
                    this.getSections({
                      height: e,
                      width: o,
                      x: l,
                      y: i,
                    }).forEach(function (a) {
                      return a.getCellIndices().forEach(function (c) {
                        s[c] = c;
                      });
                    }),
                    Object.keys(s).map(function (a) {
                      return s[a];
                    })
                  );
                },
              },
              {
                key: "getCellMetadata",
                value: function (t) {
                  var e = t.index;
                  return this._cellMetadata[e];
                },
              },
              {
                key: "getSections",
                value: function (t) {
                  for (
                    var e = t.height,
                      o = t.width,
                      l = t.x,
                      i = t.y,
                      s = Math.floor(l / this._sectionSize),
                      a = Math.floor((l + o - 1) / this._sectionSize),
                      c = Math.floor(i / this._sectionSize),
                      d = Math.floor((i + e - 1) / this._sectionSize),
                      u = [],
                      f = s;
                    f <= a;
                    f++
                  )
                    for (var p = c; p <= d; p++) {
                      var g = "".concat(f, ".").concat(p);
                      this._sections[g] ||
                        (this._sections[g] = new Zt({
                          height: this._sectionSize,
                          width: this._sectionSize,
                          x: f * this._sectionSize,
                          y: p * this._sectionSize,
                        })),
                        u.push(this._sections[g]);
                    }
                  return u;
                },
              },
              {
                key: "getTotalSectionCount",
                value: function () {
                  return Object.keys(this._sections).length;
                },
              },
              {
                key: "toString",
                value: function () {
                  var t = this;
                  return Object.keys(this._sections).map(function (e) {
                    return t._sections[e].toString();
                  });
                },
              },
              {
                key: "registerCell",
                value: function (t) {
                  var e = t.cellMetadatum,
                    o = t.index;
                  (this._cellMetadata[o] = e),
                    this.getSections(e).forEach(function (l) {
                      return l.addCellIndex({ index: o });
                    });
                },
              },
            ]);
          })();
        function Yt(n) {
          for (
            var r = n.cellCount,
              t = n.cellSizeAndPositionGetter,
              e = n.sectionSize,
              o = [],
              l = new Xt(e),
              i = 0,
              s = 0,
              a = 0;
            a < r;
            a++
          ) {
            var c = t({ index: a });
            if (
              c.height == null ||
              isNaN(c.height) ||
              c.width == null ||
              isNaN(c.width) ||
              c.x == null ||
              isNaN(c.x) ||
              c.y == null ||
              isNaN(c.y)
            )
              throw Error(
                "Invalid metadata returned for cell "
                  .concat(
                    a,
                    `:
        x:`,
                  )
                  .concat(c.x, ", y:")
                  .concat(c.y, ", width:")
                  .concat(c.width, ", height:")
                  .concat(c.height),
              );
            (i = Math.max(i, c.y + c.height)),
              (s = Math.max(s, c.x + c.width)),
              (o[a] = c),
              l.registerCell({ cellMetadatum: c, index: a });
          }
          return { cellMetadata: o, height: i, sectionManager: l, width: s };
        }
        function Ze(n) {
          var r = n.align,
            t = r === void 0 ? "auto" : r,
            e = n.cellOffset,
            o = n.cellSize,
            l = n.containerSize,
            i = n.currentOffset,
            s = e,
            a = s - l + o;
          switch (t) {
            case "start":
              return s;
            case "end":
              return a;
            case "center":
              return s - (l - o) / 2;
            default:
              return Math.max(a, Math.min(s, i));
          }
        }
        function Jt(n, r, t) {
          return (
            (r = (0, M.A)(r)),
            (0, E.A)(
              n,
              Qe()
                ? Reflect.construct(r, t || [], (0, M.A)(n).constructor)
                : r.apply(n, t),
            )
          );
        }
        function Qe() {
          try {
            var n = !Boolean.prototype.valueOf.call(
              Reflect.construct(Boolean, [], function () {}),
            );
          } catch {}
          return (Qe = function () {
            return !!n;
          })();
        }
        var Xe = (function (n) {
          function r(t, e) {
            var o;
            return (
              (0, A.A)(this, r),
              (o = Jt(this, r, [t, e])),
              (o._cellMetadata = []),
              (o._lastRenderedCellIndices = []),
              (o._cellCache = []),
              (o._isScrollingChange = o._isScrollingChange.bind(o)),
              (o._setCollectionViewRef = o._setCollectionViewRef.bind(o)),
              o
            );
          }
          return (
            (0, D.A)(r, n),
            (0, P.A)(r, [
              {
                key: "forceUpdate",
                value: function () {
                  this._collectionView !== void 0 &&
                    this._collectionView.forceUpdate();
                },
              },
              {
                key: "recomputeCellSizesAndPositions",
                value: function () {
                  (this._cellCache = []),
                    this._collectionView.recomputeCellSizesAndPositions();
                },
              },
              {
                key: "render",
                value: function () {
                  var e = (0, U.A)({}, (Ut(this.props), this.props));
                  return C.createElement(
                    qt,
                    (0, U.A)(
                      {
                        cellLayoutManager: this,
                        isScrollingChange: this._isScrollingChange,
                        ref: this._setCollectionViewRef,
                      },
                      e,
                    ),
                  );
                },
              },
              {
                key: "calculateSizeAndPositionData",
                value: function () {
                  var e = this.props,
                    o = e.cellCount,
                    l = e.cellSizeAndPositionGetter,
                    i = e.sectionSize,
                    s = Yt({
                      cellCount: o,
                      cellSizeAndPositionGetter: l,
                      sectionSize: i,
                    });
                  (this._cellMetadata = s.cellMetadata),
                    (this._sectionManager = s.sectionManager),
                    (this._height = s.height),
                    (this._width = s.width);
                },
              },
              {
                key: "getLastRenderedIndices",
                value: function () {
                  return this._lastRenderedCellIndices;
                },
              },
              {
                key: "getScrollPositionForCell",
                value: function (e) {
                  var o = e.align,
                    l = e.cellIndex,
                    i = e.height,
                    s = e.scrollLeft,
                    a = e.scrollTop,
                    c = e.width,
                    d = this.props.cellCount;
                  if (l >= 0 && l < d) {
                    var u = this._cellMetadata[l];
                    (s = Ze({
                      align: o,
                      cellOffset: u.x,
                      cellSize: u.width,
                      containerSize: c,
                      currentOffset: s,
                      targetIndex: l,
                    })),
                      (a = Ze({
                        align: o,
                        cellOffset: u.y,
                        cellSize: u.height,
                        containerSize: i,
                        currentOffset: a,
                        targetIndex: l,
                      }));
                  }
                  return { scrollLeft: s, scrollTop: a };
                },
              },
              {
                key: "getTotalSize",
                value: function () {
                  return { height: this._height, width: this._width };
                },
              },
              {
                key: "cellRenderers",
                value: function (e) {
                  var o = this,
                    l = e.height,
                    i = e.isScrolling,
                    s = e.width,
                    a = e.x,
                    c = e.y,
                    d = this.props,
                    u = d.cellGroupRenderer,
                    f = d.cellRenderer;
                  return (
                    (this._lastRenderedCellIndices =
                      this._sectionManager.getCellIndices({
                        height: l,
                        width: s,
                        x: a,
                        y: c,
                      })),
                    u({
                      cellCache: this._cellCache,
                      cellRenderer: f,
                      cellSizeAndPositionGetter: function (g) {
                        var v = g.index;
                        return o._sectionManager.getCellMetadata({ index: v });
                      },
                      indices: this._lastRenderedCellIndices,
                      isScrolling: i,
                    })
                  );
                },
              },
              {
                key: "_isScrollingChange",
                value: function (e) {
                  e || (this._cellCache = []);
                },
              },
              {
                key: "_setCollectionViewRef",
                value: function (e) {
                  this._collectionView = e;
                },
              },
            ])
          );
        })(C.PureComponent);
        (0, h.A)(Xe, "defaultProps", {
          "aria-label": "grid",
          cellGroupRenderer: eo,
        }),
          (Xe.propTypes = {});
        function eo(n) {
          var r = n.cellCache,
            t = n.cellRenderer,
            e = n.cellSizeAndPositionGetter,
            o = n.indices,
            l = n.isScrolling;
          return o
            .map(function (i) {
              var s = e({ index: i }),
                a = {
                  index: i,
                  isScrolling: l,
                  key: i,
                  style: {
                    height: s.height,
                    left: s.x,
                    position: "absolute",
                    top: s.y,
                    width: s.width,
                  },
                };
              return l ? (i in r || (r[i] = t(a)), r[i]) : t(a);
            })
            .filter(function (i) {
              return !!i;
            });
        }
        const wr = null;
        function to(n, r, t) {
          return (
            (r = (0, M.A)(r)),
            (0, E.A)(
              n,
              Ye()
                ? Reflect.construct(r, t || [], (0, M.A)(n).constructor)
                : r.apply(n, t),
            )
          );
        }
        function Ye() {
          try {
            var n = !Boolean.prototype.valueOf.call(
              Reflect.construct(Boolean, [], function () {}),
            );
          } catch {}
          return (Ye = function () {
            return !!n;
          })();
        }
        var oo = (function (n) {
          function r(t, e) {
            var o;
            return (
              (0, A.A)(this, r),
              (o = to(this, r, [t, e])),
              (o._registerChild = o._registerChild.bind(o)),
              o
            );
          }
          return (
            (0, D.A)(r, n),
            (0, P.A)(r, [
              {
                key: "componentDidUpdate",
                value: function (e) {
                  var o = this.props,
                    l = o.columnMaxWidth,
                    i = o.columnMinWidth,
                    s = o.columnCount,
                    a = o.width;
                  (l !== e.columnMaxWidth ||
                    i !== e.columnMinWidth ||
                    s !== e.columnCount ||
                    a !== e.width) &&
                    this._registeredChild &&
                    this._registeredChild.recomputeGridSize();
                },
              },
              {
                key: "render",
                value: function () {
                  var e = this.props,
                    o = e.children,
                    l = e.columnMaxWidth,
                    i = e.columnMinWidth,
                    s = e.columnCount,
                    a = e.width,
                    c = i || 1,
                    d = l ? Math.min(l, a) : a,
                    u = a / s;
                  (u = Math.max(c, u)),
                    (u = Math.min(d, u)),
                    (u = Math.floor(u));
                  var f = Math.min(a, u * s);
                  return o({
                    adjustedWidth: f,
                    columnWidth: u,
                    getColumnWidth: function () {
                      return u;
                    },
                    registerChild: this._registerChild,
                  });
                },
              },
              {
                key: "_registerChild",
                value: function (e) {
                  if (e && typeof e.recomputeGridSize != "function")
                    throw Error(
                      "Unexpected child type registered; only Grid/MultiGrid children are supported.",
                    );
                  (this._registeredChild = e),
                    this._registeredChild &&
                      this._registeredChild.recomputeGridSize();
                },
              },
            ])
          );
        })(C.PureComponent);
        oo.propTypes = {};
        const yr = null;
        var ro = O(11052);
        function Je(n) {
          var r = n.cellCount,
            t = n.cellSize,
            e = n.computeMetadataCallback,
            o = n.computeMetadataCallbackProps,
            l = n.nextCellsCount,
            i = n.nextCellSize,
            s = n.nextScrollToIndex,
            a = n.scrollToIndex,
            c = n.updateScrollOffsetForScrollToIndex;
          (r !== l ||
            ((typeof t == "number" || typeof i == "number") && t !== i)) &&
            (e(o), a >= 0 && a === s && c());
        }
        var ae = O(2829),
          no = (function () {
            function n(r) {
              var t = r.cellCount,
                e = r.cellSizeGetter,
                o = r.estimatedCellSize;
              (0, A.A)(this, n),
                (0, h.A)(this, "_cellSizeAndPositionData", {}),
                (0, h.A)(this, "_lastMeasuredIndex", -1),
                (0, h.A)(this, "_lastBatchedIndex", -1),
                (0, h.A)(this, "_cellCount", void 0),
                (0, h.A)(this, "_cellSizeGetter", void 0),
                (0, h.A)(this, "_estimatedCellSize", void 0),
                (this._cellSizeGetter = e),
                (this._cellCount = t),
                (this._estimatedCellSize = o);
            }
            return (0, P.A)(n, [
              {
                key: "areOffsetsAdjusted",
                value: function () {
                  return !1;
                },
              },
              {
                key: "configure",
                value: function (t) {
                  var e = t.cellCount,
                    o = t.estimatedCellSize,
                    l = t.cellSizeGetter;
                  (this._cellCount = e),
                    (this._estimatedCellSize = o),
                    (this._cellSizeGetter = l);
                },
              },
              {
                key: "getCellCount",
                value: function () {
                  return this._cellCount;
                },
              },
              {
                key: "getEstimatedCellSize",
                value: function () {
                  return this._estimatedCellSize;
                },
              },
              {
                key: "getLastMeasuredIndex",
                value: function () {
                  return this._lastMeasuredIndex;
                },
              },
              {
                key: "getOffsetAdjustment",
                value: function () {
                  return 0;
                },
              },
              {
                key: "getSizeAndPositionOfCell",
                value: function (t) {
                  if (t < 0 || t >= this._cellCount)
                    throw Error(
                      "Requested index "
                        .concat(t, " is outside of range 0..")
                        .concat(this._cellCount),
                    );
                  if (t > this._lastMeasuredIndex)
                    for (
                      var e = this.getSizeAndPositionOfLastMeasuredCell(),
                        o = e.offset + e.size,
                        l = this._lastMeasuredIndex + 1;
                      l <= t;
                      l++
                    ) {
                      var i = this._cellSizeGetter({ index: l });
                      if (i === void 0 || isNaN(i))
                        throw Error(
                          "Invalid size returned for cell "
                            .concat(l, " of value ")
                            .concat(i),
                        );
                      i === null
                        ? ((this._cellSizeAndPositionData[l] = {
                            offset: o,
                            size: 0,
                          }),
                          (this._lastBatchedIndex = t))
                        : ((this._cellSizeAndPositionData[l] = {
                            offset: o,
                            size: i,
                          }),
                          (o += i),
                          (this._lastMeasuredIndex = t));
                    }
                  return this._cellSizeAndPositionData[t];
                },
              },
              {
                key: "getSizeAndPositionOfLastMeasuredCell",
                value: function () {
                  return this._lastMeasuredIndex >= 0
                    ? this._cellSizeAndPositionData[this._lastMeasuredIndex]
                    : { offset: 0, size: 0 };
                },
              },
              {
                key: "getTotalSize",
                value: function () {
                  var t = this.getSizeAndPositionOfLastMeasuredCell(),
                    e = t.offset + t.size,
                    o = this._cellCount - this._lastMeasuredIndex - 1,
                    l = o * this._estimatedCellSize;
                  return e + l;
                },
              },
              {
                key: "getUpdatedOffsetForIndex",
                value: function (t) {
                  var e = t.align,
                    o = e === void 0 ? "auto" : e,
                    l = t.containerSize,
                    i = t.currentOffset,
                    s = t.targetIndex;
                  if (l <= 0) return 0;
                  var a = this.getSizeAndPositionOfCell(s),
                    c = a.offset,
                    d = c - l + a.size,
                    u;
                  switch (o) {
                    case "start":
                      u = c;
                      break;
                    case "end":
                      u = d;
                      break;
                    case "center":
                      u = c - (l - a.size) / 2;
                      break;
                    default:
                      u = Math.max(d, Math.min(c, i));
                      break;
                  }
                  var f = this.getTotalSize();
                  return Math.max(0, Math.min(f - l, u));
                },
              },
              {
                key: "getVisibleCellRange",
                value: function (t) {
                  var e = t.containerSize,
                    o = t.offset,
                    l = this.getTotalSize();
                  if (l === 0) return {};
                  var i = o + e,
                    s = this._findNearestCell(o),
                    a = this.getSizeAndPositionOfCell(s);
                  o = a.offset + a.size;
                  for (var c = s; o < i && c < this._cellCount - 1; )
                    c++, (o += this.getSizeAndPositionOfCell(c).size);
                  return { start: s, stop: c };
                },
              },
              {
                key: "resetCell",
                value: function (t) {
                  this._lastMeasuredIndex = Math.min(
                    this._lastMeasuredIndex,
                    t - 1,
                  );
                },
              },
              {
                key: "_binarySearch",
                value: function (t, e, o) {
                  for (; e <= t; ) {
                    var l = e + Math.floor((t - e) / 2),
                      i = this.getSizeAndPositionOfCell(l).offset;
                    if (i === o) return l;
                    i < o ? (e = l + 1) : i > o && (t = l - 1);
                  }
                  return e > 0 ? e - 1 : 0;
                },
              },
              {
                key: "_exponentialSearch",
                value: function (t, e) {
                  for (
                    var o = 1;
                    t < this._cellCount &&
                    this.getSizeAndPositionOfCell(t).offset < e;
                  )
                    (t += o), (o *= 2);
                  return this._binarySearch(
                    Math.min(t, this._cellCount - 1),
                    Math.floor(t / 2),
                    e,
                  );
                },
              },
              {
                key: "_findNearestCell",
                value: function (t) {
                  if (isNaN(t))
                    throw Error("Invalid offset ".concat(t, " specified"));
                  t = Math.max(0, t);
                  var e = this.getSizeAndPositionOfLastMeasuredCell(),
                    o = Math.max(0, this._lastMeasuredIndex);
                  return e.offset >= t
                    ? this._binarySearch(o, 0, t)
                    : this._exponentialSearch(o, t);
                },
              },
            ]);
          })(),
          io = 15e5,
          lo = 16777100,
          so = function () {
            return typeof window < "u";
          },
          ao = function () {
            return !!window.chrome;
          },
          co = function () {
            return so() && ao() ? lo : io;
          },
          uo = ["maxScrollSize"],
          et = (function () {
            function n(r) {
              var t = r.maxScrollSize,
                e = t === void 0 ? co() : t,
                o = (0, ae.A)(r, uo);
              (0, A.A)(this, n),
                (0, h.A)(this, "_cellSizeAndPositionManager", void 0),
                (0, h.A)(this, "_maxScrollSize", void 0),
                (this._cellSizeAndPositionManager = new no(o)),
                (this._maxScrollSize = e);
            }
            return (0, P.A)(n, [
              {
                key: "areOffsetsAdjusted",
                value: function () {
                  return (
                    this._cellSizeAndPositionManager.getTotalSize() >
                    this._maxScrollSize
                  );
                },
              },
              {
                key: "configure",
                value: function (t) {
                  this._cellSizeAndPositionManager.configure(t);
                },
              },
              {
                key: "getCellCount",
                value: function () {
                  return this._cellSizeAndPositionManager.getCellCount();
                },
              },
              {
                key: "getEstimatedCellSize",
                value: function () {
                  return this._cellSizeAndPositionManager.getEstimatedCellSize();
                },
              },
              {
                key: "getLastMeasuredIndex",
                value: function () {
                  return this._cellSizeAndPositionManager.getLastMeasuredIndex();
                },
              },
              {
                key: "getOffsetAdjustment",
                value: function (t) {
                  var e = t.containerSize,
                    o = t.offset,
                    l = this._cellSizeAndPositionManager.getTotalSize(),
                    i = this.getTotalSize(),
                    s = this._getOffsetPercentage({
                      containerSize: e,
                      offset: o,
                      totalSize: i,
                    });
                  return Math.round(s * (i - l));
                },
              },
              {
                key: "getSizeAndPositionOfCell",
                value: function (t) {
                  return this._cellSizeAndPositionManager.getSizeAndPositionOfCell(
                    t,
                  );
                },
              },
              {
                key: "getSizeAndPositionOfLastMeasuredCell",
                value: function () {
                  return this._cellSizeAndPositionManager.getSizeAndPositionOfLastMeasuredCell();
                },
              },
              {
                key: "getTotalSize",
                value: function () {
                  return Math.min(
                    this._maxScrollSize,
                    this._cellSizeAndPositionManager.getTotalSize(),
                  );
                },
              },
              {
                key: "getUpdatedOffsetForIndex",
                value: function (t) {
                  var e = t.align,
                    o = e === void 0 ? "auto" : e,
                    l = t.containerSize,
                    i = t.currentOffset,
                    s = t.targetIndex;
                  i = this._safeOffsetToOffset({ containerSize: l, offset: i });
                  var a =
                    this._cellSizeAndPositionManager.getUpdatedOffsetForIndex({
                      align: o,
                      containerSize: l,
                      currentOffset: i,
                      targetIndex: s,
                    });
                  return this._offsetToSafeOffset({
                    containerSize: l,
                    offset: a,
                  });
                },
              },
              {
                key: "getVisibleCellRange",
                value: function (t) {
                  var e = t.containerSize,
                    o = t.offset;
                  return (
                    (o = this._safeOffsetToOffset({
                      containerSize: e,
                      offset: o,
                    })),
                    this._cellSizeAndPositionManager.getVisibleCellRange({
                      containerSize: e,
                      offset: o,
                    })
                  );
                },
              },
              {
                key: "resetCell",
                value: function (t) {
                  this._cellSizeAndPositionManager.resetCell(t);
                },
              },
              {
                key: "_getOffsetPercentage",
                value: function (t) {
                  var e = t.containerSize,
                    o = t.offset,
                    l = t.totalSize;
                  return l <= e ? 0 : o / (l - e);
                },
              },
              {
                key: "_offsetToSafeOffset",
                value: function (t) {
                  var e = t.containerSize,
                    o = t.offset,
                    l = this._cellSizeAndPositionManager.getTotalSize(),
                    i = this.getTotalSize();
                  if (l === i) return o;
                  var s = this._getOffsetPercentage({
                    containerSize: e,
                    offset: o,
                    totalSize: l,
                  });
                  return Math.round(s * (i - e));
                },
              },
              {
                key: "_safeOffsetToOffset",
                value: function (t) {
                  var e = t.containerSize,
                    o = t.offset,
                    l = this._cellSizeAndPositionManager.getTotalSize(),
                    i = this.getTotalSize();
                  if (l === i) return o;
                  var s = this._getOffsetPercentage({
                    containerSize: e,
                    offset: o,
                    totalSize: i,
                  });
                  return Math.round(s * (l - e));
                },
              },
            ]);
          })(),
          ge = -1,
          V = 1,
          Rr = "horizontal",
          Tr = "vertical";
        function ho(n) {
          var r = n.cellCount,
            t = n.overscanCellsCount,
            e = n.scrollDirection,
            o = n.startIndex,
            l = n.stopIndex;
          return e === V
            ? {
                overscanStartIndex: Math.max(0, o),
                overscanStopIndex: Math.min(r - 1, l + t),
              }
            : {
                overscanStartIndex: Math.max(0, o - t),
                overscanStopIndex: Math.min(r - 1, l),
              };
        }
        function tt(n) {
          var r = n.cellSize,
            t = n.cellSizeAndPositionManager,
            e = n.previousCellsCount,
            o = n.previousCellSize,
            l = n.previousScrollToAlignment,
            i = n.previousScrollToIndex,
            s = n.previousSize,
            a = n.scrollOffset,
            c = n.scrollToAlignment,
            d = n.scrollToIndex,
            u = n.size,
            f = n.sizeJustIncreasedFromZero,
            p = n.updateScrollIndexCallback,
            g = t.getCellCount(),
            v = d >= 0 && d < g,
            S = u !== s || f || !o || (typeof r == "number" && r !== o);
          v && (S || c !== l || d !== i)
            ? p(d)
            : !v &&
              g > 0 &&
              (u < s || g < e) &&
              a > t.getTotalSize() - u &&
              p(g - 1);
        }
        function fo(n) {
          for (
            var r = n.cellCache,
              t = n.cellRenderer,
              e = n.columnSizeAndPositionManager,
              o = n.columnStartIndex,
              l = n.columnStopIndex,
              i = n.deferredMeasurementCache,
              s = n.horizontalOffsetAdjustment,
              a = n.isScrolling,
              c = n.isScrollingOptOut,
              d = n.parent,
              u = n.rowSizeAndPositionManager,
              f = n.rowStartIndex,
              p = n.rowStopIndex,
              g = n.styleCache,
              v = n.verticalOffsetAdjustment,
              S = n.visibleColumnIndices,
              _ = n.visibleRowIndices,
              T = [],
              w = e.areOffsetsAdjusted() || u.areOffsetsAdjusted(),
              b = !a && !w,
              I = f;
            I <= p;
            I++
          )
            for (var L = u.getSizeAndPositionOfCell(I), y = o; y <= l; y++) {
              var m = e.getSizeAndPositionOfCell(y),
                x = y >= S.start && y <= S.stop && I >= _.start && I <= _.stop,
                R = "".concat(I, "-").concat(y),
                z = void 0;
              b && g[R]
                ? (z = g[R])
                : i && !i.has(I, y)
                  ? (z = {
                      height: "auto",
                      left: 0,
                      position: "absolute",
                      top: 0,
                      width: "auto",
                    })
                  : ((z = {
                      height: L.size,
                      left: m.offset + s,
                      position: "absolute",
                      top: L.offset + v,
                      width: m.size,
                    }),
                    (g[R] = z));
              var W = {
                  columnIndex: y,
                  isScrolling: a,
                  isVisible: x,
                  key: R,
                  parent: d,
                  rowIndex: I,
                  style: z,
                },
                G = void 0;
              (c || a) && !s && !v
                ? (r[R] || (r[R] = t(W)), (G = r[R]))
                : (G = t(W)),
                !(G == null || G === !1) &&
                  (G.props.role ||
                    (G = C.cloneElement(G, { role: "gridcell" })),
                  T.push(G));
            }
          return T;
        }
        function zr(n, r) {}
        var N;
        typeof window < "u"
          ? (N = window)
          : typeof self < "u"
            ? (N = self)
            : (N = {});
        var po =
            N.requestAnimationFrame ||
            N.webkitRequestAnimationFrame ||
            N.mozRequestAnimationFrame ||
            N.oRequestAnimationFrame ||
            N.msRequestAnimationFrame ||
            function (n) {
              return N.setTimeout(n, 1e3 / 60);
            },
          go =
            N.cancelAnimationFrame ||
            N.webkitCancelAnimationFrame ||
            N.mozCancelAnimationFrame ||
            N.oCancelAnimationFrame ||
            N.msCancelAnimationFrame ||
            function (n) {
              N.clearTimeout(n);
            },
          ot = po,
          vo = go,
          oe = function (r) {
            return vo(r.id);
          },
          Ce = function (r, t) {
            var e;
            Promise.resolve().then(function () {
              e = Date.now();
            });
            var o = function () {
                Date.now() - e >= t ? r.call() : (l.id = ot(o));
              },
              l = { id: ot(o) };
            return l;
          };
        function rt(n, r) {
          var t = Object.keys(n);
          if (Object.getOwnPropertySymbols) {
            var e = Object.getOwnPropertySymbols(n);
            r &&
              (e = e.filter(function (o) {
                return Object.getOwnPropertyDescriptor(n, o).enumerable;
              })),
              t.push.apply(t, e);
          }
          return t;
        }
        function F(n) {
          for (var r = 1; r < arguments.length; r++) {
            var t = arguments[r] != null ? arguments[r] : {};
            r % 2
              ? rt(Object(t), !0).forEach(function (e) {
                  (0, h.A)(n, e, t[e]);
                })
              : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(
                    n,
                    Object.getOwnPropertyDescriptors(t),
                  )
                : rt(Object(t)).forEach(function (e) {
                    Object.defineProperty(
                      n,
                      e,
                      Object.getOwnPropertyDescriptor(t, e),
                    );
                  });
          }
          return n;
        }
        function mo(n, r, t) {
          return (
            (r = (0, M.A)(r)),
            (0, E.A)(
              n,
              nt()
                ? Reflect.construct(r, t || [], (0, M.A)(n).constructor)
                : r.apply(n, t),
            )
          );
        }
        function nt() {
          try {
            var n = !Boolean.prototype.valueOf.call(
              Reflect.construct(Boolean, [], function () {}),
            );
          } catch {}
          return (nt = function () {
            return !!n;
          })();
        }
        var So = 150,
          we = { OBSERVED: "observed", REQUESTED: "requested" },
          _o = function () {
            return null;
          },
          ye = (function (n) {
            function r(t) {
              var e;
              (0, A.A)(this, r),
                (e = mo(this, r, [t])),
                (0, h.A)(e, "_onGridRenderedMemoizer", ee()),
                (0, h.A)(e, "_onScrollMemoizer", ee(!1)),
                (0, h.A)(e, "_deferredInvalidateColumnIndex", null),
                (0, h.A)(e, "_deferredInvalidateRowIndex", null),
                (0, h.A)(e, "_recomputeScrollLeftFlag", !1),
                (0, h.A)(e, "_recomputeScrollTopFlag", !1),
                (0, h.A)(e, "_horizontalScrollBarSize", 0),
                (0, h.A)(e, "_verticalScrollBarSize", 0),
                (0, h.A)(e, "_scrollbarPresenceChanged", !1),
                (0, h.A)(e, "_scrollingContainer", void 0),
                (0, h.A)(e, "_childrenToDisplay", void 0),
                (0, h.A)(e, "_columnStartIndex", void 0),
                (0, h.A)(e, "_columnStopIndex", void 0),
                (0, h.A)(e, "_rowStartIndex", void 0),
                (0, h.A)(e, "_rowStopIndex", void 0),
                (0, h.A)(e, "_renderedColumnStartIndex", 0),
                (0, h.A)(e, "_renderedColumnStopIndex", 0),
                (0, h.A)(e, "_renderedRowStartIndex", 0),
                (0, h.A)(e, "_renderedRowStopIndex", 0),
                (0, h.A)(e, "_initialScrollTop", void 0),
                (0, h.A)(e, "_initialScrollLeft", void 0),
                (0, h.A)(e, "_disablePointerEventsTimeoutId", void 0),
                (0, h.A)(e, "_styleCache", {}),
                (0, h.A)(e, "_cellCache", {}),
                (0, h.A)(e, "_debounceScrollEndedCallback", function () {
                  (e._disablePointerEventsTimeoutId = null),
                    e.setState({ isScrolling: !1, needToResetStyleCache: !1 });
                }),
                (0, h.A)(e, "_invokeOnGridRenderedHelper", function () {
                  var i = e.props.onSectionRendered;
                  e._onGridRenderedMemoizer({
                    callback: i,
                    indices: {
                      columnOverscanStartIndex: e._columnStartIndex,
                      columnOverscanStopIndex: e._columnStopIndex,
                      columnStartIndex: e._renderedColumnStartIndex,
                      columnStopIndex: e._renderedColumnStopIndex,
                      rowOverscanStartIndex: e._rowStartIndex,
                      rowOverscanStopIndex: e._rowStopIndex,
                      rowStartIndex: e._renderedRowStartIndex,
                      rowStopIndex: e._renderedRowStopIndex,
                    },
                  });
                }),
                (0, h.A)(e, "_setScrollingContainerRef", function (i) {
                  (e._scrollingContainer = i),
                    typeof e.props.elementRef == "function"
                      ? e.props.elementRef(i)
                      : (0, ro.A)(e.props.elementRef) === "object" &&
                        (e.props.elementRef.current = i);
                }),
                (0, h.A)(e, "_onScroll", function (i) {
                  i.target === e._scrollingContainer &&
                    e.handleScrollEvent(i.target);
                });
              var o = new et({
                  cellCount: t.columnCount,
                  cellSizeGetter: function (s) {
                    return r._wrapSizeGetter(t.columnWidth)(s);
                  },
                  estimatedCellSize: r._getEstimatedColumnSize(t),
                }),
                l = new et({
                  cellCount: t.rowCount,
                  cellSizeGetter: function (s) {
                    return r._wrapSizeGetter(t.rowHeight)(s);
                  },
                  estimatedCellSize: r._getEstimatedRowSize(t),
                });
              return (
                (e.state = {
                  instanceProps: {
                    columnSizeAndPositionManager: o,
                    rowSizeAndPositionManager: l,
                    prevColumnWidth: t.columnWidth,
                    prevRowHeight: t.rowHeight,
                    prevColumnCount: t.columnCount,
                    prevRowCount: t.rowCount,
                    prevIsScrolling: t.isScrolling === !0,
                    prevScrollToColumn: t.scrollToColumn,
                    prevScrollToRow: t.scrollToRow,
                    scrollbarSize: 0,
                    scrollbarSizeMeasured: !1,
                  },
                  isScrolling: !1,
                  scrollDirectionHorizontal: V,
                  scrollDirectionVertical: V,
                  scrollLeft: 0,
                  scrollTop: 0,
                  scrollPositionChangeReason: null,
                  needToResetStyleCache: !1,
                }),
                t.scrollToRow > 0 &&
                  (e._initialScrollTop = e._getCalculatedScrollTop(t, e.state)),
                t.scrollToColumn > 0 &&
                  (e._initialScrollLeft = e._getCalculatedScrollLeft(
                    t,
                    e.state,
                  )),
                e
              );
            }
            return (
              (0, D.A)(r, n),
              (0, P.A)(
                r,
                [
                  {
                    key: "getOffsetForCell",
                    value: function () {
                      var e =
                          arguments.length > 0 && arguments[0] !== void 0
                            ? arguments[0]
                            : {},
                        o = e.alignment,
                        l = o === void 0 ? this.props.scrollToAlignment : o,
                        i = e.columnIndex,
                        s = i === void 0 ? this.props.scrollToColumn : i,
                        a = e.rowIndex,
                        c = a === void 0 ? this.props.scrollToRow : a,
                        d = F(
                          F({}, this.props),
                          {},
                          {
                            scrollToAlignment: l,
                            scrollToColumn: s,
                            scrollToRow: c,
                          },
                        );
                      return {
                        scrollLeft: this._getCalculatedScrollLeft(d),
                        scrollTop: this._getCalculatedScrollTop(d),
                      };
                    },
                  },
                  {
                    key: "getTotalRowsHeight",
                    value: function () {
                      return this.state.instanceProps.rowSizeAndPositionManager.getTotalSize();
                    },
                  },
                  {
                    key: "getTotalColumnsWidth",
                    value: function () {
                      return this.state.instanceProps.columnSizeAndPositionManager.getTotalSize();
                    },
                  },
                  {
                    key: "handleScrollEvent",
                    value: function (e) {
                      var o = e.scrollLeft,
                        l = o === void 0 ? 0 : o,
                        i = e.scrollTop,
                        s = i === void 0 ? 0 : i;
                      if (!(s < 0)) {
                        this._debounceScrollEnded();
                        var a = this.props,
                          c = a.autoHeight,
                          d = a.autoWidth,
                          u = a.height,
                          f = a.width,
                          p = this.state.instanceProps,
                          g = p.scrollbarSize,
                          v = p.rowSizeAndPositionManager.getTotalSize(),
                          S = p.columnSizeAndPositionManager.getTotalSize(),
                          _ = Math.min(Math.max(0, S - f + g), l),
                          T = Math.min(Math.max(0, v - u + g), s);
                        if (
                          this.state.scrollLeft !== _ ||
                          this.state.scrollTop !== T
                        ) {
                          var w =
                              _ !== this.state.scrollLeft
                                ? _ > this.state.scrollLeft
                                  ? V
                                  : ge
                                : this.state.scrollDirectionHorizontal,
                            b =
                              T !== this.state.scrollTop
                                ? T > this.state.scrollTop
                                  ? V
                                  : ge
                                : this.state.scrollDirectionVertical,
                            I = {
                              isScrolling: !0,
                              scrollDirectionHorizontal: w,
                              scrollDirectionVertical: b,
                              scrollPositionChangeReason: we.OBSERVED,
                            };
                          c || (I.scrollTop = T),
                            d || (I.scrollLeft = _),
                            (I.needToResetStyleCache = !1),
                            this.setState(I);
                        }
                        this._invokeOnScrollMemoizer({
                          scrollLeft: _,
                          scrollTop: T,
                          totalColumnsWidth: S,
                          totalRowsHeight: v,
                        });
                      }
                    },
                  },
                  {
                    key: "invalidateCellSizeAfterRender",
                    value: function (e) {
                      var o = e.columnIndex,
                        l = e.rowIndex;
                      (this._deferredInvalidateColumnIndex =
                        typeof this._deferredInvalidateColumnIndex == "number"
                          ? Math.min(this._deferredInvalidateColumnIndex, o)
                          : o),
                        (this._deferredInvalidateRowIndex =
                          typeof this._deferredInvalidateRowIndex == "number"
                            ? Math.min(this._deferredInvalidateRowIndex, l)
                            : l);
                    },
                  },
                  {
                    key: "measureAllCells",
                    value: function () {
                      var e = this.props,
                        o = e.columnCount,
                        l = e.rowCount,
                        i = this.state.instanceProps;
                      i.columnSizeAndPositionManager.getSizeAndPositionOfCell(
                        o - 1,
                      ),
                        i.rowSizeAndPositionManager.getSizeAndPositionOfCell(
                          l - 1,
                        );
                    },
                  },
                  {
                    key: "recomputeGridSize",
                    value: function () {
                      var e =
                          arguments.length > 0 && arguments[0] !== void 0
                            ? arguments[0]
                            : {},
                        o = e.columnIndex,
                        l = o === void 0 ? 0 : o,
                        i = e.rowIndex,
                        s = i === void 0 ? 0 : i,
                        a = this.props,
                        c = a.scrollToColumn,
                        d = a.scrollToRow,
                        u = this.state.instanceProps;
                      u.columnSizeAndPositionManager.resetCell(l),
                        u.rowSizeAndPositionManager.resetCell(s),
                        (this._recomputeScrollLeftFlag =
                          c >= 0 &&
                          (this.state.scrollDirectionHorizontal === V
                            ? l <= c
                            : l >= c)),
                        (this._recomputeScrollTopFlag =
                          d >= 0 &&
                          (this.state.scrollDirectionVertical === V
                            ? s <= d
                            : s >= d)),
                        (this._styleCache = {}),
                        (this._cellCache = {}),
                        this.forceUpdate();
                    },
                  },
                  {
                    key: "scrollToCell",
                    value: function (e) {
                      var o = e.columnIndex,
                        l = e.rowIndex,
                        i = this.props.columnCount,
                        s = this.props;
                      i > 1 &&
                        o !== void 0 &&
                        this._updateScrollLeftForScrollToColumn(
                          F(F({}, s), {}, { scrollToColumn: o }),
                        ),
                        l !== void 0 &&
                          this._updateScrollTopForScrollToRow(
                            F(F({}, s), {}, { scrollToRow: l }),
                          );
                    },
                  },
                  {
                    key: "componentDidMount",
                    value: function () {
                      var e = this.props,
                        o = e.getScrollbarSize,
                        l = e.height,
                        i = e.scrollLeft,
                        s = e.scrollToColumn,
                        a = e.scrollTop,
                        c = e.scrollToRow,
                        d = e.width,
                        u = this.state.instanceProps;
                      if (
                        ((this._initialScrollTop = 0),
                        (this._initialScrollLeft = 0),
                        this._handleInvalidatedGridSize(),
                        u.scrollbarSizeMeasured ||
                          this.setState(function (g) {
                            var v = F(
                              F({}, g),
                              {},
                              { needToResetStyleCache: !1 },
                            );
                            return (
                              (v.instanceProps.scrollbarSize = o()),
                              (v.instanceProps.scrollbarSizeMeasured = !0),
                              v
                            );
                          }),
                        (typeof i == "number" && i >= 0) ||
                          (typeof a == "number" && a >= 0))
                      ) {
                        var f = r._getScrollToPositionStateUpdate({
                          prevState: this.state,
                          scrollLeft: i,
                          scrollTop: a,
                        });
                        f && ((f.needToResetStyleCache = !1), this.setState(f));
                      }
                      this._scrollingContainer &&
                        (this._scrollingContainer.scrollLeft !==
                          this.state.scrollLeft &&
                          (this._scrollingContainer.scrollLeft =
                            this.state.scrollLeft),
                        this._scrollingContainer.scrollTop !==
                          this.state.scrollTop &&
                          (this._scrollingContainer.scrollTop =
                            this.state.scrollTop));
                      var p = l > 0 && d > 0;
                      s >= 0 && p && this._updateScrollLeftForScrollToColumn(),
                        c >= 0 && p && this._updateScrollTopForScrollToRow(),
                        this._invokeOnGridRenderedHelper(),
                        this._invokeOnScrollMemoizer({
                          scrollLeft: i || 0,
                          scrollTop: a || 0,
                          totalColumnsWidth:
                            u.columnSizeAndPositionManager.getTotalSize(),
                          totalRowsHeight:
                            u.rowSizeAndPositionManager.getTotalSize(),
                        }),
                        this._maybeCallOnScrollbarPresenceChange();
                    },
                  },
                  {
                    key: "componentDidUpdate",
                    value: function (e, o) {
                      var l = this,
                        i = this.props,
                        s = i.autoHeight,
                        a = i.autoWidth,
                        c = i.columnCount,
                        d = i.height,
                        u = i.rowCount,
                        f = i.scrollToAlignment,
                        p = i.scrollToColumn,
                        g = i.scrollToRow,
                        v = i.width,
                        S = this.state,
                        _ = S.scrollLeft,
                        T = S.scrollPositionChangeReason,
                        w = S.scrollTop,
                        b = S.instanceProps;
                      this._handleInvalidatedGridSize();
                      var I =
                        (c > 0 && e.columnCount === 0) ||
                        (u > 0 && e.rowCount === 0);
                      T === we.REQUESTED &&
                        (!a &&
                          _ >= 0 &&
                          (_ !== this._scrollingContainer.scrollLeft || I) &&
                          (this._scrollingContainer.scrollLeft = _),
                        !s &&
                          w >= 0 &&
                          (w !== this._scrollingContainer.scrollTop || I) &&
                          (this._scrollingContainer.scrollTop = w));
                      var L =
                        (e.width === 0 || e.height === 0) && d > 0 && v > 0;
                      if (
                        (this._recomputeScrollLeftFlag
                          ? ((this._recomputeScrollLeftFlag = !1),
                            this._updateScrollLeftForScrollToColumn(this.props))
                          : tt({
                              cellSizeAndPositionManager:
                                b.columnSizeAndPositionManager,
                              previousCellsCount: e.columnCount,
                              previousCellSize: e.columnWidth,
                              previousScrollToAlignment: e.scrollToAlignment,
                              previousScrollToIndex: e.scrollToColumn,
                              previousSize: e.width,
                              scrollOffset: _,
                              scrollToAlignment: f,
                              scrollToIndex: p,
                              size: v,
                              sizeJustIncreasedFromZero: L,
                              updateScrollIndexCallback: function () {
                                return l._updateScrollLeftForScrollToColumn(
                                  l.props,
                                );
                              },
                            }),
                        this._recomputeScrollTopFlag
                          ? ((this._recomputeScrollTopFlag = !1),
                            this._updateScrollTopForScrollToRow(this.props))
                          : tt({
                              cellSizeAndPositionManager:
                                b.rowSizeAndPositionManager,
                              previousCellsCount: e.rowCount,
                              previousCellSize: e.rowHeight,
                              previousScrollToAlignment: e.scrollToAlignment,
                              previousScrollToIndex: e.scrollToRow,
                              previousSize: e.height,
                              scrollOffset: w,
                              scrollToAlignment: f,
                              scrollToIndex: g,
                              size: d,
                              sizeJustIncreasedFromZero: L,
                              updateScrollIndexCallback: function () {
                                return l._updateScrollTopForScrollToRow(
                                  l.props,
                                );
                              },
                            }),
                        this._invokeOnGridRenderedHelper(),
                        _ !== o.scrollLeft || w !== o.scrollTop)
                      ) {
                        var y = b.rowSizeAndPositionManager.getTotalSize(),
                          m = b.columnSizeAndPositionManager.getTotalSize();
                        this._invokeOnScrollMemoizer({
                          scrollLeft: _,
                          scrollTop: w,
                          totalColumnsWidth: m,
                          totalRowsHeight: y,
                        });
                      }
                      this._maybeCallOnScrollbarPresenceChange();
                    },
                  },
                  {
                    key: "componentWillUnmount",
                    value: function () {
                      this._disablePointerEventsTimeoutId &&
                        oe(this._disablePointerEventsTimeoutId);
                    },
                  },
                  {
                    key: "render",
                    value: function () {
                      var e = this.props,
                        o = e.autoContainerWidth,
                        l = e.autoHeight,
                        i = e.autoWidth,
                        s = e.className,
                        a = e.containerProps,
                        c = e.containerRole,
                        d = e.containerStyle,
                        u = e.height,
                        f = e.id,
                        p = e.noContentRenderer,
                        g = e.role,
                        v = e.style,
                        S = e.tabIndex,
                        _ = e.width,
                        T = this.state,
                        w = T.instanceProps,
                        b = T.needToResetStyleCache,
                        I = this._isScrolling(),
                        L = {
                          boxSizing: "border-box",
                          direction: "ltr",
                          height: l ? "auto" : u,
                          position: "relative",
                          width: i ? "auto" : _,
                          WebkitOverflowScrolling: "touch",
                          willChange: "transform",
                        };
                      b && (this._styleCache = {}),
                        this.state.isScrolling || this._resetStyleCache(),
                        this._calculateChildrenToRender(this.props, this.state);
                      var y = w.columnSizeAndPositionManager.getTotalSize(),
                        m = w.rowSizeAndPositionManager.getTotalSize(),
                        x = m > u ? w.scrollbarSize : 0,
                        R = y > _ ? w.scrollbarSize : 0;
                      (R !== this._horizontalScrollBarSize ||
                        x !== this._verticalScrollBarSize) &&
                        ((this._horizontalScrollBarSize = R),
                        (this._verticalScrollBarSize = x),
                        (this._scrollbarPresenceChanged = !0)),
                        (L.overflowX = y + x <= _ ? "hidden" : "auto"),
                        (L.overflowY = m + R <= u ? "hidden" : "auto");
                      var z = this._childrenToDisplay,
                        W = z.length === 0 && u > 0 && _ > 0;
                      return C.createElement(
                        "div",
                        (0, U.A)({ ref: this._setScrollingContainerRef }, a, {
                          "aria-label": this.props["aria-label"],
                          "aria-readonly": this.props["aria-readonly"],
                          className: j("ReactVirtualized__Grid", s),
                          id: f,
                          onScroll: this._onScroll,
                          role: g,
                          style: F(F({}, L), v),
                          tabIndex: S,
                        }),
                        z.length > 0 &&
                          C.createElement(
                            "div",
                            {
                              className:
                                "ReactVirtualized__Grid__innerScrollContainer",
                              role: c,
                              style: F(
                                {
                                  width: o ? "auto" : y,
                                  height: m,
                                  maxWidth: y,
                                  maxHeight: m,
                                  overflow: "hidden",
                                  pointerEvents: I ? "none" : "",
                                  position: "relative",
                                },
                                d,
                              ),
                            },
                            z,
                          ),
                        W && p(),
                      );
                    },
                  },
                  {
                    key: "_calculateChildrenToRender",
                    value: function () {
                      var e =
                          arguments.length > 0 && arguments[0] !== void 0
                            ? arguments[0]
                            : this.props,
                        o =
                          arguments.length > 1 && arguments[1] !== void 0
                            ? arguments[1]
                            : this.state,
                        l = e.cellRenderer,
                        i = e.cellRangeRenderer,
                        s = e.columnCount,
                        a = e.deferredMeasurementCache,
                        c = e.height,
                        d = e.overscanColumnCount,
                        u = e.overscanIndicesGetter,
                        f = e.overscanRowCount,
                        p = e.rowCount,
                        g = e.width,
                        v = e.isScrollingOptOut,
                        S = o.scrollDirectionHorizontal,
                        _ = o.scrollDirectionVertical,
                        T = o.instanceProps,
                        w =
                          this._initialScrollTop > 0
                            ? this._initialScrollTop
                            : o.scrollTop,
                        b =
                          this._initialScrollLeft > 0
                            ? this._initialScrollLeft
                            : o.scrollLeft,
                        I = this._isScrolling(e, o);
                      if (((this._childrenToDisplay = []), c > 0 && g > 0)) {
                        var L =
                            T.columnSizeAndPositionManager.getVisibleCellRange({
                              containerSize: g,
                              offset: b,
                            }),
                          y = T.rowSizeAndPositionManager.getVisibleCellRange({
                            containerSize: c,
                            offset: w,
                          }),
                          m =
                            T.columnSizeAndPositionManager.getOffsetAdjustment({
                              containerSize: g,
                              offset: b,
                            }),
                          x = T.rowSizeAndPositionManager.getOffsetAdjustment({
                            containerSize: c,
                            offset: w,
                          });
                        (this._renderedColumnStartIndex = L.start),
                          (this._renderedColumnStopIndex = L.stop),
                          (this._renderedRowStartIndex = y.start),
                          (this._renderedRowStopIndex = y.stop);
                        var R = u({
                            direction: "horizontal",
                            cellCount: s,
                            overscanCellsCount: d,
                            scrollDirection: S,
                            startIndex:
                              typeof L.start == "number" ? L.start : 0,
                            stopIndex: typeof L.stop == "number" ? L.stop : -1,
                          }),
                          z = u({
                            direction: "vertical",
                            cellCount: p,
                            overscanCellsCount: f,
                            scrollDirection: _,
                            startIndex:
                              typeof y.start == "number" ? y.start : 0,
                            stopIndex: typeof y.stop == "number" ? y.stop : -1,
                          }),
                          W = R.overscanStartIndex,
                          G = R.overscanStopIndex,
                          H = z.overscanStartIndex,
                          $ = z.overscanStopIndex;
                        if (a) {
                          if (!a.hasFixedHeight()) {
                            for (var Z = H; Z <= $; Z++)
                              if (!a.has(Z, 0)) {
                                (W = 0), (G = s - 1);
                                break;
                              }
                          }
                          if (!a.hasFixedWidth()) {
                            for (var he = W; he <= G; he++)
                              if (!a.has(0, he)) {
                                (H = 0), ($ = p - 1);
                                break;
                              }
                          }
                        }
                        (this._childrenToDisplay = i({
                          cellCache: this._cellCache,
                          cellRenderer: l,
                          columnSizeAndPositionManager:
                            T.columnSizeAndPositionManager,
                          columnStartIndex: W,
                          columnStopIndex: G,
                          deferredMeasurementCache: a,
                          horizontalOffsetAdjustment: m,
                          isScrolling: I,
                          isScrollingOptOut: v,
                          parent: this,
                          rowSizeAndPositionManager:
                            T.rowSizeAndPositionManager,
                          rowStartIndex: H,
                          rowStopIndex: $,
                          scrollLeft: b,
                          scrollTop: w,
                          styleCache: this._styleCache,
                          verticalOffsetAdjustment: x,
                          visibleColumnIndices: L,
                          visibleRowIndices: y,
                        })),
                          (this._columnStartIndex = W),
                          (this._columnStopIndex = G),
                          (this._rowStartIndex = H),
                          (this._rowStopIndex = $);
                      }
                    },
                  },
                  {
                    key: "_debounceScrollEnded",
                    value: function () {
                      var e = this.props.scrollingResetTimeInterval;
                      this._disablePointerEventsTimeoutId &&
                        oe(this._disablePointerEventsTimeoutId),
                        (this._disablePointerEventsTimeoutId = Ce(
                          this._debounceScrollEndedCallback,
                          e,
                        ));
                    },
                  },
                  {
                    key: "_handleInvalidatedGridSize",
                    value: function () {
                      if (
                        typeof this._deferredInvalidateColumnIndex ==
                          "number" &&
                        typeof this._deferredInvalidateRowIndex == "number"
                      ) {
                        var e = this._deferredInvalidateColumnIndex,
                          o = this._deferredInvalidateRowIndex;
                        (this._deferredInvalidateColumnIndex = null),
                          (this._deferredInvalidateRowIndex = null),
                          this.recomputeGridSize({
                            columnIndex: e,
                            rowIndex: o,
                          });
                      }
                    },
                  },
                  {
                    key: "_invokeOnScrollMemoizer",
                    value: function (e) {
                      var o = this,
                        l = e.scrollLeft,
                        i = e.scrollTop,
                        s = e.totalColumnsWidth,
                        a = e.totalRowsHeight;
                      this._onScrollMemoizer({
                        callback: function (d) {
                          var u = d.scrollLeft,
                            f = d.scrollTop,
                            p = o.props,
                            g = p.height,
                            v = p.onScroll,
                            S = p.width;
                          v({
                            clientHeight: g,
                            clientWidth: S,
                            scrollHeight: a,
                            scrollLeft: u,
                            scrollTop: f,
                            scrollWidth: s,
                          });
                        },
                        indices: { scrollLeft: l, scrollTop: i },
                      });
                    },
                  },
                  {
                    key: "_isScrolling",
                    value: function () {
                      var e =
                          arguments.length > 0 && arguments[0] !== void 0
                            ? arguments[0]
                            : this.props,
                        o =
                          arguments.length > 1 && arguments[1] !== void 0
                            ? arguments[1]
                            : this.state;
                      return Object.hasOwnProperty.call(e, "isScrolling")
                        ? !!e.isScrolling
                        : !!o.isScrolling;
                    },
                  },
                  {
                    key: "_maybeCallOnScrollbarPresenceChange",
                    value: function () {
                      if (this._scrollbarPresenceChanged) {
                        var e = this.props.onScrollbarPresenceChange;
                        (this._scrollbarPresenceChanged = !1),
                          e({
                            horizontal: this._horizontalScrollBarSize > 0,
                            size: this.state.instanceProps.scrollbarSize,
                            vertical: this._verticalScrollBarSize > 0,
                          });
                      }
                    },
                  },
                  {
                    key: "scrollToPosition",
                    value: function (e) {
                      var o = e.scrollLeft,
                        l = e.scrollTop,
                        i = r._getScrollToPositionStateUpdate({
                          prevState: this.state,
                          scrollLeft: o,
                          scrollTop: l,
                        });
                      i && ((i.needToResetStyleCache = !1), this.setState(i));
                    },
                  },
                  {
                    key: "_getCalculatedScrollLeft",
                    value: function () {
                      var e =
                          arguments.length > 0 && arguments[0] !== void 0
                            ? arguments[0]
                            : this.props,
                        o =
                          arguments.length > 1 && arguments[1] !== void 0
                            ? arguments[1]
                            : this.state;
                      return r._getCalculatedScrollLeft(e, o);
                    },
                  },
                  {
                    key: "_updateScrollLeftForScrollToColumn",
                    value: function () {
                      var e =
                          arguments.length > 0 && arguments[0] !== void 0
                            ? arguments[0]
                            : this.props,
                        o =
                          arguments.length > 1 && arguments[1] !== void 0
                            ? arguments[1]
                            : this.state,
                        l = r._getScrollLeftForScrollToColumnStateUpdate(e, o);
                      l && ((l.needToResetStyleCache = !1), this.setState(l));
                    },
                  },
                  {
                    key: "_getCalculatedScrollTop",
                    value: function () {
                      var e =
                          arguments.length > 0 && arguments[0] !== void 0
                            ? arguments[0]
                            : this.props,
                        o =
                          arguments.length > 1 && arguments[1] !== void 0
                            ? arguments[1]
                            : this.state;
                      return r._getCalculatedScrollTop(e, o);
                    },
                  },
                  {
                    key: "_resetStyleCache",
                    value: function () {
                      var e = this._styleCache,
                        o = this._cellCache,
                        l = this.props.isScrollingOptOut;
                      (this._cellCache = {}), (this._styleCache = {});
                      for (
                        var i = this._rowStartIndex;
                        i <= this._rowStopIndex;
                        i++
                      )
                        for (
                          var s = this._columnStartIndex;
                          s <= this._columnStopIndex;
                          s++
                        ) {
                          var a = "".concat(i, "-").concat(s);
                          (this._styleCache[a] = e[a]),
                            l && (this._cellCache[a] = o[a]);
                        }
                    },
                  },
                  {
                    key: "_updateScrollTopForScrollToRow",
                    value: function () {
                      var e =
                          arguments.length > 0 && arguments[0] !== void 0
                            ? arguments[0]
                            : this.props,
                        o =
                          arguments.length > 1 && arguments[1] !== void 0
                            ? arguments[1]
                            : this.state,
                        l = r._getScrollTopForScrollToRowStateUpdate(e, o);
                      l && ((l.needToResetStyleCache = !1), this.setState(l));
                    },
                  },
                ],
                [
                  {
                    key: "getDerivedStateFromProps",
                    value: function (e, o) {
                      var l = {};
                      (e.columnCount === 0 && o.scrollLeft !== 0) ||
                      (e.rowCount === 0 && o.scrollTop !== 0)
                        ? ((l.scrollLeft = 0), (l.scrollTop = 0))
                        : ((e.scrollLeft !== o.scrollLeft &&
                            e.scrollToColumn < 0) ||
                            (e.scrollTop !== o.scrollTop &&
                              e.scrollToRow < 0)) &&
                          Object.assign(
                            l,
                            r._getScrollToPositionStateUpdate({
                              prevState: o,
                              scrollLeft: e.scrollLeft,
                              scrollTop: e.scrollTop,
                            }),
                          );
                      var i = o.instanceProps;
                      (l.needToResetStyleCache = !1),
                        (e.columnWidth !== i.prevColumnWidth ||
                          e.rowHeight !== i.prevRowHeight) &&
                          (l.needToResetStyleCache = !0),
                        i.columnSizeAndPositionManager.configure({
                          cellCount: e.columnCount,
                          estimatedCellSize: r._getEstimatedColumnSize(e),
                          cellSizeGetter: r._wrapSizeGetter(e.columnWidth),
                        }),
                        i.rowSizeAndPositionManager.configure({
                          cellCount: e.rowCount,
                          estimatedCellSize: r._getEstimatedRowSize(e),
                          cellSizeGetter: r._wrapSizeGetter(e.rowHeight),
                        }),
                        (i.prevColumnCount === 0 || i.prevRowCount === 0) &&
                          ((i.prevColumnCount = 0), (i.prevRowCount = 0)),
                        e.autoHeight &&
                          e.isScrolling === !1 &&
                          i.prevIsScrolling === !0 &&
                          Object.assign(l, { isScrolling: !1 });
                      var s, a;
                      return (
                        Je({
                          cellCount: i.prevColumnCount,
                          cellSize:
                            typeof i.prevColumnWidth == "number"
                              ? i.prevColumnWidth
                              : null,
                          computeMetadataCallback: function () {
                            return i.columnSizeAndPositionManager.resetCell(0);
                          },
                          computeMetadataCallbackProps: e,
                          nextCellsCount: e.columnCount,
                          nextCellSize:
                            typeof e.columnWidth == "number"
                              ? e.columnWidth
                              : null,
                          nextScrollToIndex: e.scrollToColumn,
                          scrollToIndex: i.prevScrollToColumn,
                          updateScrollOffsetForScrollToIndex: function () {
                            s = r._getScrollLeftForScrollToColumnStateUpdate(
                              e,
                              o,
                            );
                          },
                        }),
                        Je({
                          cellCount: i.prevRowCount,
                          cellSize:
                            typeof i.prevRowHeight == "number"
                              ? i.prevRowHeight
                              : null,
                          computeMetadataCallback: function () {
                            return i.rowSizeAndPositionManager.resetCell(0);
                          },
                          computeMetadataCallbackProps: e,
                          nextCellsCount: e.rowCount,
                          nextCellSize:
                            typeof e.rowHeight == "number" ? e.rowHeight : null,
                          nextScrollToIndex: e.scrollToRow,
                          scrollToIndex: i.prevScrollToRow,
                          updateScrollOffsetForScrollToIndex: function () {
                            a = r._getScrollTopForScrollToRowStateUpdate(e, o);
                          },
                        }),
                        (i.prevColumnCount = e.columnCount),
                        (i.prevColumnWidth = e.columnWidth),
                        (i.prevIsScrolling = e.isScrolling === !0),
                        (i.prevRowCount = e.rowCount),
                        (i.prevRowHeight = e.rowHeight),
                        (i.prevScrollToColumn = e.scrollToColumn),
                        (i.prevScrollToRow = e.scrollToRow),
                        (i.scrollbarSize = e.getScrollbarSize()),
                        i.scrollbarSize === void 0
                          ? ((i.scrollbarSizeMeasured = !1),
                            (i.scrollbarSize = 0))
                          : (i.scrollbarSizeMeasured = !0),
                        (l.instanceProps = i),
                        F(F(F({}, l), s), a)
                      );
                    },
                  },
                  {
                    key: "_getEstimatedColumnSize",
                    value: function (e) {
                      return typeof e.columnWidth == "number"
                        ? e.columnWidth
                        : e.estimatedColumnSize;
                    },
                  },
                  {
                    key: "_getEstimatedRowSize",
                    value: function (e) {
                      return typeof e.rowHeight == "number"
                        ? e.rowHeight
                        : e.estimatedRowSize;
                    },
                  },
                  {
                    key: "_getScrollToPositionStateUpdate",
                    value: function (e) {
                      var o = e.prevState,
                        l = e.scrollLeft,
                        i = e.scrollTop,
                        s = { scrollPositionChangeReason: we.REQUESTED };
                      return (
                        typeof l == "number" &&
                          l >= 0 &&
                          ((s.scrollDirectionHorizontal =
                            l > o.scrollLeft ? V : ge),
                          (s.scrollLeft = l)),
                        typeof i == "number" &&
                          i >= 0 &&
                          ((s.scrollDirectionVertical =
                            i > o.scrollTop ? V : ge),
                          (s.scrollTop = i)),
                        (typeof l == "number" &&
                          l >= 0 &&
                          l !== o.scrollLeft) ||
                        (typeof i == "number" && i >= 0 && i !== o.scrollTop)
                          ? s
                          : {}
                      );
                    },
                  },
                  {
                    key: "_wrapSizeGetter",
                    value: function (e) {
                      return typeof e == "function"
                        ? e
                        : function () {
                            return e;
                          };
                    },
                  },
                  {
                    key: "_getCalculatedScrollLeft",
                    value: function (e, o) {
                      var l = e.columnCount,
                        i = e.height,
                        s = e.scrollToAlignment,
                        a = e.scrollToColumn,
                        c = e.width,
                        d = o.scrollLeft,
                        u = o.instanceProps;
                      if (l > 0) {
                        var f = l - 1,
                          p = a < 0 ? f : Math.min(f, a),
                          g = u.rowSizeAndPositionManager.getTotalSize(),
                          v =
                            u.scrollbarSizeMeasured && g > i
                              ? u.scrollbarSize
                              : 0;
                        return u.columnSizeAndPositionManager.getUpdatedOffsetForIndex(
                          {
                            align: s,
                            containerSize: c - v,
                            currentOffset: d,
                            targetIndex: p,
                          },
                        );
                      }
                      return 0;
                    },
                  },
                  {
                    key: "_getScrollLeftForScrollToColumnStateUpdate",
                    value: function (e, o) {
                      var l = o.scrollLeft,
                        i = r._getCalculatedScrollLeft(e, o);
                      return typeof i == "number" && i >= 0 && l !== i
                        ? r._getScrollToPositionStateUpdate({
                            prevState: o,
                            scrollLeft: i,
                            scrollTop: -1,
                          })
                        : {};
                    },
                  },
                  {
                    key: "_getCalculatedScrollTop",
                    value: function (e, o) {
                      var l = e.height,
                        i = e.rowCount,
                        s = e.scrollToAlignment,
                        a = e.scrollToRow,
                        c = e.width,
                        d = o.scrollTop,
                        u = o.instanceProps;
                      if (i > 0) {
                        var f = i - 1,
                          p = a < 0 ? f : Math.min(f, a),
                          g = u.columnSizeAndPositionManager.getTotalSize(),
                          v =
                            u.scrollbarSizeMeasured && g > c
                              ? u.scrollbarSize
                              : 0;
                        return u.rowSizeAndPositionManager.getUpdatedOffsetForIndex(
                          {
                            align: s,
                            containerSize: l - v,
                            currentOffset: d,
                            targetIndex: p,
                          },
                        );
                      }
                      return 0;
                    },
                  },
                  {
                    key: "_getScrollTopForScrollToRowStateUpdate",
                    value: function (e, o) {
                      var l = o.scrollTop,
                        i = r._getCalculatedScrollTop(e, o);
                      return typeof i == "number" && i >= 0 && l !== i
                        ? r._getScrollToPositionStateUpdate({
                            prevState: o,
                            scrollLeft: -1,
                            scrollTop: i,
                          })
                        : {};
                    },
                  },
                ],
              )
            );
          })(C.PureComponent);
        (0, h.A)(ye, "defaultProps", {
          "aria-label": "grid",
          "aria-readonly": !0,
          autoContainerWidth: !1,
          autoHeight: !1,
          autoWidth: !1,
          cellRangeRenderer: fo,
          containerRole: "row",
          containerStyle: {},
          estimatedColumnSize: 100,
          estimatedRowSize: 30,
          getScrollbarSize: _e,
          noContentRenderer: _o,
          onScroll: function () {},
          onScrollbarPresenceChange: function () {},
          onSectionRendered: function () {},
          overscanColumnCount: 0,
          overscanIndicesGetter: ho,
          overscanRowCount: 10,
          role: "grid",
          scrollingResetTimeInterval: So,
          scrollToAlignment: "auto",
          scrollToColumn: -1,
          scrollToRow: -1,
          style: {},
          tabIndex: 0,
          isScrollingOptOut: !1,
        }),
          se(ye);
        const Q = ye;
        var Ir = null,
          Co = 1,
          xr = "horizontal",
          br = "vertical";
        function it(n) {
          var r = n.cellCount,
            t = n.overscanCellsCount,
            e = n.scrollDirection,
            o = n.startIndex,
            l = n.stopIndex;
          return (
            (t = Math.max(1, t)),
            e === Co
              ? {
                  overscanStartIndex: Math.max(0, o - 1),
                  overscanStopIndex: Math.min(r - 1, l + t),
                }
              : {
                  overscanStartIndex: Math.max(0, o - t),
                  overscanStopIndex: Math.min(r - 1, l + 1),
                }
          );
        }
        var wo = O(2223);
        function yo(n, r, t) {
          return (
            (r = (0, M.A)(r)),
            (0, E.A)(
              n,
              lt()
                ? Reflect.construct(r, t || [], (0, M.A)(n).constructor)
                : r.apply(n, t),
            )
          );
        }
        function lt() {
          try {
            var n = !Boolean.prototype.valueOf.call(
              Reflect.construct(Boolean, [], function () {}),
            );
          } catch {}
          return (lt = function () {
            return !!n;
          })();
        }
        var st = (function (n) {
          function r(t, e) {
            var o;
            return (
              (0, A.A)(this, r),
              (o = yo(this, r, [t, e])),
              (o._loadMoreRowsMemoizer = ee()),
              (o._onRowsRendered = o._onRowsRendered.bind(o)),
              (o._registerChild = o._registerChild.bind(o)),
              o
            );
          }
          return (
            (0, D.A)(r, n),
            (0, P.A)(r, [
              {
                key: "resetLoadMoreRowsCache",
                value: function (e) {
                  (this._loadMoreRowsMemoizer = ee()),
                    e &&
                      this._doStuff(
                        this._lastRenderedStartIndex,
                        this._lastRenderedStopIndex,
                      );
                },
              },
              {
                key: "render",
                value: function () {
                  var e = this.props.children;
                  return e({
                    onRowsRendered: this._onRowsRendered,
                    registerChild: this._registerChild,
                  });
                },
              },
              {
                key: "_loadUnloadedRanges",
                value: function (e) {
                  var o = this,
                    l = this.props.loadMoreRows;
                  e.forEach(function (i) {
                    var s = l(i);
                    s &&
                      s.then(function () {
                        Ro({
                          lastRenderedStartIndex: o._lastRenderedStartIndex,
                          lastRenderedStopIndex: o._lastRenderedStopIndex,
                          startIndex: i.startIndex,
                          stopIndex: i.stopIndex,
                        }) &&
                          o._registeredChild &&
                          zo(o._registeredChild, o._lastRenderedStartIndex);
                      });
                  });
                },
              },
              {
                key: "_onRowsRendered",
                value: function (e) {
                  var o = e.startIndex,
                    l = e.stopIndex;
                  (this._lastRenderedStartIndex = o),
                    (this._lastRenderedStopIndex = l),
                    this._doStuff(o, l);
                },
              },
              {
                key: "_doStuff",
                value: function (e, o) {
                  var l,
                    i = this,
                    s = this.props,
                    a = s.isRowLoaded,
                    c = s.minimumBatchSize,
                    d = s.rowCount,
                    u = s.threshold,
                    f = To({
                      isRowLoaded: a,
                      minimumBatchSize: c,
                      rowCount: d,
                      startIndex: Math.max(0, e - u),
                      stopIndex: Math.min(d - 1, o + u),
                    }),
                    p = (l = []).concat.apply(
                      l,
                      (0, wo.A)(
                        f.map(function (g) {
                          var v = g.startIndex,
                            S = g.stopIndex;
                          return [v, S];
                        }),
                      ),
                    );
                  this._loadMoreRowsMemoizer({
                    callback: function () {
                      i._loadUnloadedRanges(f);
                    },
                    indices: { squashedUnloadedRanges: p },
                  });
                },
              },
              {
                key: "_registerChild",
                value: function (e) {
                  this._registeredChild = e;
                },
              },
            ])
          );
        })(C.PureComponent);
        (0, h.A)(st, "defaultProps", {
          minimumBatchSize: 10,
          rowCount: 0,
          threshold: 15,
        }),
          (st.propTypes = {});
        function Ro(n) {
          var r = n.lastRenderedStartIndex,
            t = n.lastRenderedStopIndex,
            e = n.startIndex,
            o = n.stopIndex;
          return !(e > t || o < r);
        }
        function To(n) {
          for (
            var r = n.isRowLoaded,
              t = n.minimumBatchSize,
              e = n.rowCount,
              o = n.startIndex,
              l = n.stopIndex,
              i = [],
              s = null,
              a = null,
              c = o;
            c <= l;
            c++
          ) {
            var d = r({ index: c });
            d
              ? a !== null &&
                (i.push({ startIndex: s, stopIndex: a }), (s = a = null))
              : ((a = c), s === null && (s = c));
          }
          if (a !== null) {
            for (
              var u = Math.min(Math.max(a, s + t - 1), e - 1), f = a + 1;
              f <= u && !r({ index: f });
              f++
            )
              a = f;
            i.push({ startIndex: s, stopIndex: a });
          }
          if (i.length)
            for (
              var p = i[0];
              p.stopIndex - p.startIndex + 1 < t && p.startIndex > 0;
            ) {
              var g = p.startIndex - 1;
              if (!r({ index: g })) p.startIndex = g;
              else break;
            }
          return i;
        }
        function zo(n) {
          var r =
              arguments.length > 1 && arguments[1] !== void 0
                ? arguments[1]
                : 0,
            t =
              typeof n.recomputeGridSize == "function"
                ? n.recomputeGridSize
                : n.recomputeRowHeights;
          t ? t.call(n, r) : n.forceUpdate();
        }
        const Ar = null;
        function Io(n, r, t) {
          return (
            (r = (0, M.A)(r)),
            (0, E.A)(
              n,
              at()
                ? Reflect.construct(r, t || [], (0, M.A)(n).constructor)
                : r.apply(n, t),
            )
          );
        }
        function at() {
          try {
            var n = !Boolean.prototype.valueOf.call(
              Reflect.construct(Boolean, [], function () {}),
            );
          } catch {}
          return (at = function () {
            return !!n;
          })();
        }
        var xo = (function (n) {
          function r() {
            var t;
            (0, A.A)(this, r);
            for (var e = arguments.length, o = new Array(e), l = 0; l < e; l++)
              o[l] = arguments[l];
            return (
              (t = Io(this, r, [].concat(o))),
              (0, h.A)(t, "Grid", void 0),
              (0, h.A)(t, "_cellRenderer", function (i) {
                var s = i.parent,
                  a = i.rowIndex,
                  c = i.style,
                  d = i.isScrolling,
                  u = i.isVisible,
                  f = i.key,
                  p = t.props.rowRenderer,
                  g = Object.getOwnPropertyDescriptor(c, "width");
                return (
                  g && g.writable && (c.width = "100%"),
                  p({
                    index: a,
                    style: c,
                    isScrolling: d,
                    isVisible: u,
                    key: f,
                    parent: s,
                  })
                );
              }),
              (0, h.A)(t, "_setRef", function (i) {
                t.Grid = i;
              }),
              (0, h.A)(t, "_onScroll", function (i) {
                var s = i.clientHeight,
                  a = i.scrollHeight,
                  c = i.scrollTop,
                  d = t.props.onScroll;
                d({ clientHeight: s, scrollHeight: a, scrollTop: c });
              }),
              (0, h.A)(t, "_onSectionRendered", function (i) {
                var s = i.rowOverscanStartIndex,
                  a = i.rowOverscanStopIndex,
                  c = i.rowStartIndex,
                  d = i.rowStopIndex,
                  u = t.props.onRowsRendered;
                u({
                  overscanStartIndex: s,
                  overscanStopIndex: a,
                  startIndex: c,
                  stopIndex: d,
                });
              }),
              t
            );
          }
          return (
            (0, D.A)(r, n),
            (0, P.A)(r, [
              {
                key: "forceUpdateGrid",
                value: function () {
                  this.Grid && this.Grid.forceUpdate();
                },
              },
              {
                key: "getOffsetForRow",
                value: function (e) {
                  var o = e.alignment,
                    l = e.index;
                  if (this.Grid) {
                    var i = this.Grid.getOffsetForCell({
                        alignment: o,
                        rowIndex: l,
                        columnIndex: 0,
                      }),
                      s = i.scrollTop;
                    return s;
                  }
                  return 0;
                },
              },
              {
                key: "invalidateCellSizeAfterRender",
                value: function (e) {
                  var o = e.columnIndex,
                    l = e.rowIndex;
                  this.Grid &&
                    this.Grid.invalidateCellSizeAfterRender({
                      rowIndex: l,
                      columnIndex: o,
                    });
                },
              },
              {
                key: "measureAllRows",
                value: function () {
                  this.Grid && this.Grid.measureAllCells();
                },
              },
              {
                key: "recomputeGridSize",
                value: function () {
                  var e =
                      arguments.length > 0 && arguments[0] !== void 0
                        ? arguments[0]
                        : {},
                    o = e.columnIndex,
                    l = o === void 0 ? 0 : o,
                    i = e.rowIndex,
                    s = i === void 0 ? 0 : i;
                  this.Grid &&
                    this.Grid.recomputeGridSize({
                      rowIndex: s,
                      columnIndex: l,
                    });
                },
              },
              {
                key: "recomputeRowHeights",
                value: function () {
                  var e =
                    arguments.length > 0 && arguments[0] !== void 0
                      ? arguments[0]
                      : 0;
                  this.Grid &&
                    this.Grid.recomputeGridSize({
                      rowIndex: e,
                      columnIndex: 0,
                    });
                },
              },
              {
                key: "scrollToPosition",
                value: function () {
                  var e =
                    arguments.length > 0 && arguments[0] !== void 0
                      ? arguments[0]
                      : 0;
                  this.Grid && this.Grid.scrollToPosition({ scrollTop: e });
                },
              },
              {
                key: "scrollToRow",
                value: function () {
                  var e =
                    arguments.length > 0 && arguments[0] !== void 0
                      ? arguments[0]
                      : 0;
                  this.Grid &&
                    this.Grid.scrollToCell({ columnIndex: 0, rowIndex: e });
                },
              },
              {
                key: "render",
                value: function () {
                  var e = this.props,
                    o = e.className,
                    l = e.noRowsRenderer,
                    i = e.scrollToIndex,
                    s = e.width,
                    a = j("ReactVirtualized__List", o);
                  return C.createElement(
                    Q,
                    (0, U.A)({}, this.props, {
                      autoContainerWidth: !0,
                      cellRenderer: this._cellRenderer,
                      className: a,
                      columnWidth: s,
                      columnCount: 1,
                      noContentRenderer: l,
                      onScroll: this._onScroll,
                      onSectionRendered: this._onSectionRendered,
                      ref: this._setRef,
                      scrollToRow: i,
                    }),
                  );
                },
              },
            ])
          );
        })(C.PureComponent);
        (0, h.A)(xo, "defaultProps", {
          autoHeight: !1,
          estimatedRowSize: 30,
          onScroll: function () {},
          noRowsRenderer: function () {
            return null;
          },
          onRowsRendered: function () {},
          overscanIndicesGetter: it,
          overscanRowCount: 10,
          scrollToAlignment: "auto",
          scrollToIndex: -1,
          style: {},
        });
        var bo = O(98465);
        function Ao(n, r, t, e) {
          for (var o = t + 1; r <= t; ) {
            var l = (r + t) >>> 1,
              i = n[l];
            i >= e ? ((o = l), (t = l - 1)) : (r = l + 1);
          }
          return o;
        }
        function Oo(n, r, t, e, o) {
          for (var l = t + 1; r <= t; ) {
            var i = (r + t) >>> 1,
              s = n[i];
            o(s, e) >= 0 ? ((l = i), (t = i - 1)) : (r = i + 1);
          }
          return l;
        }
        function Mo(n, r, t, e, o) {
          return typeof t == "function"
            ? Oo(
                n,
                e === void 0 ? 0 : e | 0,
                o === void 0 ? n.length - 1 : o | 0,
                r,
                t,
              )
            : Ao(
                n,
                t === void 0 ? 0 : t | 0,
                e === void 0 ? n.length - 1 : e | 0,
                r,
              );
        }
        function Lo(n, r, t, e) {
          for (var o = t + 1; r <= t; ) {
            var l = (r + t) >>> 1,
              i = n[l];
            i > e ? ((o = l), (t = l - 1)) : (r = l + 1);
          }
          return o;
        }
        function Po(n, r, t, e, o) {
          for (var l = t + 1; r <= t; ) {
            var i = (r + t) >>> 1,
              s = n[i];
            o(s, e) > 0 ? ((l = i), (t = i - 1)) : (r = i + 1);
          }
          return l;
        }
        function Go(n, r, t, e, o) {
          return typeof t == "function"
            ? Po(
                n,
                e === void 0 ? 0 : e | 0,
                o === void 0 ? n.length - 1 : o | 0,
                r,
                t,
              )
            : Lo(
                n,
                t === void 0 ? 0 : t | 0,
                e === void 0 ? n.length - 1 : e | 0,
                r,
              );
        }
        function ko(n, r, t, e) {
          for (var o = r - 1; r <= t; ) {
            var l = (r + t) >>> 1,
              i = n[l];
            i < e ? ((o = l), (r = l + 1)) : (t = l - 1);
          }
          return o;
        }
        function Eo(n, r, t, e, o) {
          for (var l = r - 1; r <= t; ) {
            var i = (r + t) >>> 1,
              s = n[i];
            o(s, e) < 0 ? ((l = i), (r = i + 1)) : (t = i - 1);
          }
          return l;
        }
        function Wo(n, r, t, e, o) {
          return typeof t == "function"
            ? Eo(
                n,
                e === void 0 ? 0 : e | 0,
                o === void 0 ? n.length - 1 : o | 0,
                r,
                t,
              )
            : ko(
                n,
                t === void 0 ? 0 : t | 0,
                e === void 0 ? n.length - 1 : e | 0,
                r,
              );
        }
        function Do(n, r, t, e) {
          for (var o = r - 1; r <= t; ) {
            var l = (r + t) >>> 1,
              i = n[l];
            i <= e ? ((o = l), (r = l + 1)) : (t = l - 1);
          }
          return o;
        }
        function Ho(n, r, t, e, o) {
          for (var l = r - 1; r <= t; ) {
            var i = (r + t) >>> 1,
              s = n[i];
            o(s, e) <= 0 ? ((l = i), (r = i + 1)) : (t = i - 1);
          }
          return l;
        }
        function No(n, r, t, e, o) {
          return typeof t == "function"
            ? Ho(
                n,
                e === void 0 ? 0 : e | 0,
                o === void 0 ? n.length - 1 : o | 0,
                r,
                t,
              )
            : Do(
                n,
                t === void 0 ? 0 : t | 0,
                e === void 0 ? n.length - 1 : e | 0,
                r,
              );
        }
        function Fo(n, r, t, e) {
          for (r - 1; r <= t; ) {
            var o = (r + t) >>> 1,
              l = n[o];
            if (l === e) return o;
            l <= e ? (r = o + 1) : (t = o - 1);
          }
          return -1;
        }
        function jo(n, r, t, e, o) {
          for (r - 1; r <= t; ) {
            var l = (r + t) >>> 1,
              i = n[l],
              s = o(i, e);
            if (s === 0) return l;
            s <= 0 ? (r = l + 1) : (t = l - 1);
          }
          return -1;
        }
        function Uo(n, r, t, e, o) {
          return typeof t == "function"
            ? jo(
                n,
                e === void 0 ? 0 : e | 0,
                o === void 0 ? n.length - 1 : o | 0,
                r,
                t,
              )
            : Fo(
                n,
                t === void 0 ? 0 : t | 0,
                e === void 0 ? n.length - 1 : e | 0,
                r,
              );
        }
        const ve = { ge: Mo, gt: Go, lt: Wo, le: No, eq: Uo };
        var re = 0,
          X = 1,
          me = 2;
        function Re(n, r, t, e, o) {
          (this.mid = n),
            (this.left = r),
            (this.right = t),
            (this.leftPoints = e),
            (this.rightPoints = o),
            (this.count = (r ? r.count : 0) + (t ? t.count : 0) + e.length);
        }
        var ce = Re.prototype;
        function Te(n, r) {
          (n.mid = r.mid),
            (n.left = r.left),
            (n.right = r.right),
            (n.leftPoints = r.leftPoints),
            (n.rightPoints = r.rightPoints),
            (n.count = r.count);
        }
        function ct(n, r) {
          var t = ne(r);
          (n.mid = t.mid),
            (n.left = t.left),
            (n.right = t.right),
            (n.leftPoints = t.leftPoints),
            (n.rightPoints = t.rightPoints),
            (n.count = t.count);
        }
        function dt(n, r) {
          var t = n.intervals([]);
          t.push(r), ct(n, t);
        }
        function ut(n, r) {
          var t = n.intervals([]),
            e = t.indexOf(r);
          return e < 0 ? re : (t.splice(e, 1), ct(n, t), X);
        }
        (ce.intervals = function (n) {
          return (
            n.push.apply(n, this.leftPoints),
            this.left && this.left.intervals(n),
            this.right && this.right.intervals(n),
            n
          );
        }),
          (ce.insert = function (n) {
            var r = this.count - this.leftPoints.length;
            if (((this.count += 1), n[1] < this.mid))
              this.left
                ? 4 * (this.left.count + 1) > 3 * (r + 1)
                  ? dt(this, n)
                  : this.left.insert(n)
                : (this.left = ne([n]));
            else if (n[0] > this.mid)
              this.right
                ? 4 * (this.right.count + 1) > 3 * (r + 1)
                  ? dt(this, n)
                  : this.right.insert(n)
                : (this.right = ne([n]));
            else {
              var t = ve.ge(this.leftPoints, n, ze),
                e = ve.ge(this.rightPoints, n, Ie);
              this.leftPoints.splice(t, 0, n), this.rightPoints.splice(e, 0, n);
            }
          }),
          (ce.remove = function (n) {
            var r = this.count - this.leftPoints;
            if (n[1] < this.mid) {
              if (!this.left) return re;
              var t = this.right ? this.right.count : 0;
              if (4 * t > 3 * (r - 1)) return ut(this, n);
              var e = this.left.remove(n);
              return e === me
                ? ((this.left = null), (this.count -= 1), X)
                : (e === X && (this.count -= 1), e);
            } else if (n[0] > this.mid) {
              if (!this.right) return re;
              var o = this.left ? this.left.count : 0;
              if (4 * o > 3 * (r - 1)) return ut(this, n);
              var e = this.right.remove(n);
              return e === me
                ? ((this.right = null), (this.count -= 1), X)
                : (e === X && (this.count -= 1), e);
            } else {
              if (this.count === 1) return this.leftPoints[0] === n ? me : re;
              if (this.leftPoints.length === 1 && this.leftPoints[0] === n) {
                if (this.left && this.right) {
                  for (var l = this, i = this.left; i.right; )
                    (l = i), (i = i.right);
                  if (l === this) i.right = this.right;
                  else {
                    var s = this.left,
                      e = this.right;
                    (l.count -= i.count),
                      (l.right = i.left),
                      (i.left = s),
                      (i.right = e);
                  }
                  Te(this, i),
                    (this.count =
                      (this.left ? this.left.count : 0) +
                      (this.right ? this.right.count : 0) +
                      this.leftPoints.length);
                } else this.left ? Te(this, this.left) : Te(this, this.right);
                return X;
              }
              for (
                var s = ve.ge(this.leftPoints, n, ze);
                s < this.leftPoints.length && this.leftPoints[s][0] === n[0];
                ++s
              )
                if (this.leftPoints[s] === n) {
                  (this.count -= 1), this.leftPoints.splice(s, 1);
                  for (
                    var e = ve.ge(this.rightPoints, n, Ie);
                    e < this.rightPoints.length &&
                    this.rightPoints[e][1] === n[1];
                    ++e
                  )
                    if (this.rightPoints[e] === n)
                      return this.rightPoints.splice(e, 1), X;
                }
              return re;
            }
          });
        function ht(n, r, t) {
          for (var e = 0; e < n.length && n[e][0] <= r; ++e) {
            var o = t(n[e]);
            if (o) return o;
          }
        }
        function ft(n, r, t) {
          for (var e = n.length - 1; e >= 0 && n[e][1] >= r; --e) {
            var o = t(n[e]);
            if (o) return o;
          }
        }
        function pt(n, r) {
          for (var t = 0; t < n.length; ++t) {
            var e = r(n[t]);
            if (e) return e;
          }
        }
        (ce.queryPoint = function (n, r) {
          if (n < this.mid) {
            if (this.left) {
              var t = this.left.queryPoint(n, r);
              if (t) return t;
            }
            return ht(this.leftPoints, n, r);
          } else if (n > this.mid) {
            if (this.right) {
              var t = this.right.queryPoint(n, r);
              if (t) return t;
            }
            return ft(this.rightPoints, n, r);
          } else return pt(this.leftPoints, r);
        }),
          (ce.queryInterval = function (n, r, t) {
            if (n < this.mid && this.left) {
              var e = this.left.queryInterval(n, r, t);
              if (e) return e;
            }
            if (r > this.mid && this.right) {
              var e = this.right.queryInterval(n, r, t);
              if (e) return e;
            }
            return r < this.mid
              ? ht(this.leftPoints, r, t)
              : n > this.mid
                ? ft(this.rightPoints, n, t)
                : pt(this.leftPoints, t);
          });
        function Bo(n, r) {
          return n - r;
        }
        function ze(n, r) {
          var t = n[0] - r[0];
          return t || n[1] - r[1];
        }
        function Ie(n, r) {
          var t = n[1] - r[1];
          return t || n[0] - r[0];
        }
        function ne(n) {
          if (n.length === 0) return null;
          for (var r = [], t = 0; t < n.length; ++t) r.push(n[t][0], n[t][1]);
          r.sort(Bo);
          for (
            var e = r[r.length >> 1], o = [], l = [], i = [], t = 0;
            t < n.length;
            ++t
          ) {
            var s = n[t];
            s[1] < e ? o.push(s) : e < s[0] ? l.push(s) : i.push(s);
          }
          var a = i,
            c = i.slice();
          return a.sort(ze), c.sort(Ie), new Re(e, ne(o), ne(l), a, c);
        }
        function xe(n) {
          this.root = n;
        }
        var ie = xe.prototype;
        (ie.insert = function (n) {
          this.root
            ? this.root.insert(n)
            : (this.root = new Re(n[0], null, null, [n], [n]));
        }),
          (ie.remove = function (n) {
            if (this.root) {
              var r = this.root.remove(n);
              return r === me && (this.root = null), r !== re;
            }
            return !1;
          }),
          (ie.queryPoint = function (n, r) {
            if (this.root) return this.root.queryPoint(n, r);
          }),
          (ie.queryInterval = function (n, r, t) {
            if (n <= r && this.root) return this.root.queryInterval(n, r, t);
          }),
          Object.defineProperty(ie, "count", {
            get: function () {
              return this.root ? this.root.count : 0;
            },
          }),
          Object.defineProperty(ie, "intervals", {
            get: function () {
              return this.root ? this.root.intervals([]) : [];
            },
          });
        function $o(n) {
          return !n || n.length === 0 ? new xe(null) : new xe(ne(n));
        }
        var be = (function () {
          function n() {
            (0, A.A)(this, n),
              (0, h.A)(this, "_columnSizeMap", {}),
              (0, h.A)(this, "_intervalTree", $o()),
              (0, h.A)(this, "_leftMap", {});
          }
          return (0, P.A)(n, [
            {
              key: "estimateTotalHeight",
              value: function (t, e, o) {
                var l = t - this.count;
                return this.tallestColumnSize + Math.ceil(l / e) * o;
              },
            },
            {
              key: "range",
              value: function (t, e, o) {
                var l = this;
                this._intervalTree.queryInterval(t, t + e, function (i) {
                  var s = (0, bo.A)(i, 3),
                    a = s[0],
                    c = s[1],
                    d = s[2];
                  return o(d, l._leftMap[d], a);
                });
              },
            },
            {
              key: "setPosition",
              value: function (t, e, o, l) {
                this._intervalTree.insert([o, o + l, t]),
                  (this._leftMap[t] = e);
                var i = this._columnSizeMap,
                  s = i[e];
                s === void 0 ? (i[e] = o + l) : (i[e] = Math.max(s, o + l));
              },
            },
            {
              key: "count",
              get: function () {
                return this._intervalTree.count;
              },
            },
            {
              key: "shortestColumnSize",
              get: function () {
                var t = this._columnSizeMap,
                  e = 0;
                for (var o in t) {
                  var l = t[o];
                  e = e === 0 ? l : Math.min(e, l);
                }
                return e;
              },
            },
            {
              key: "tallestColumnSize",
              get: function () {
                var t = this._columnSizeMap,
                  e = 0;
                for (var o in t) {
                  var l = t[o];
                  e = Math.max(e, l);
                }
                return e;
              },
            },
          ]);
        })();
        function gt(n, r) {
          var t = Object.keys(n);
          if (Object.getOwnPropertySymbols) {
            var e = Object.getOwnPropertySymbols(n);
            r &&
              (e = e.filter(function (o) {
                return Object.getOwnPropertyDescriptor(n, o).enumerable;
              })),
              t.push.apply(t, e);
          }
          return t;
        }
        function Vo(n) {
          for (var r = 1; r < arguments.length; r++) {
            var t = arguments[r] != null ? arguments[r] : {};
            r % 2
              ? gt(Object(t), !0).forEach(function (e) {
                  (0, h.A)(n, e, t[e]);
                })
              : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(
                    n,
                    Object.getOwnPropertyDescriptors(t),
                  )
                : gt(Object(t)).forEach(function (e) {
                    Object.defineProperty(
                      n,
                      e,
                      Object.getOwnPropertyDescriptor(t, e),
                    );
                  });
          }
          return n;
        }
        function Ko(n, r, t) {
          return (
            (r = (0, M.A)(r)),
            (0, E.A)(
              n,
              vt()
                ? Reflect.construct(r, t || [], (0, M.A)(n).constructor)
                : r.apply(n, t),
            )
          );
        }
        function vt() {
          try {
            var n = !Boolean.prototype.valueOf.call(
              Reflect.construct(Boolean, [], function () {}),
            );
          } catch {}
          return (vt = function () {
            return !!n;
          })();
        }
        var qo = {},
          Zo = 150,
          mt = (function (n) {
            function r() {
              var t;
              (0, A.A)(this, r);
              for (
                var e = arguments.length, o = new Array(e), l = 0;
                l < e;
                l++
              )
                o[l] = arguments[l];
              return (
                (t = Ko(this, r, [].concat(o))),
                (0, h.A)(t, "state", { isScrolling: !1, scrollTop: 0 }),
                (0, h.A)(t, "_debounceResetIsScrollingId", void 0),
                (0, h.A)(t, "_invalidateOnUpdateStartIndex", null),
                (0, h.A)(t, "_invalidateOnUpdateStopIndex", null),
                (0, h.A)(t, "_positionCache", new be()),
                (0, h.A)(t, "_startIndex", null),
                (0, h.A)(t, "_startIndexMemoized", null),
                (0, h.A)(t, "_stopIndex", null),
                (0, h.A)(t, "_stopIndexMemoized", null),
                (0, h.A)(t, "_debounceResetIsScrollingCallback", function () {
                  t.setState({ isScrolling: !1 });
                }),
                (0, h.A)(t, "_setScrollingContainerRef", function (i) {
                  t._scrollingContainer = i;
                }),
                (0, h.A)(t, "_onScroll", function (i) {
                  var s = t.props.height,
                    a = i.currentTarget.scrollTop,
                    c = Math.min(
                      Math.max(0, t._getEstimatedTotalHeight() - s),
                      a,
                    );
                  a === c &&
                    (t._debounceResetIsScrolling(),
                    t.state.scrollTop !== c &&
                      t.setState({ isScrolling: !0, scrollTop: c }));
                }),
                t
              );
            }
            return (
              (0, D.A)(r, n),
              (0, P.A)(
                r,
                [
                  {
                    key: "clearCellPositions",
                    value: function () {
                      (this._positionCache = new be()), this.forceUpdate();
                    },
                  },
                  {
                    key: "invalidateCellSizeAfterRender",
                    value: function (e) {
                      var o = e.rowIndex;
                      this._invalidateOnUpdateStartIndex === null
                        ? ((this._invalidateOnUpdateStartIndex = o),
                          (this._invalidateOnUpdateStopIndex = o))
                        : ((this._invalidateOnUpdateStartIndex = Math.min(
                            this._invalidateOnUpdateStartIndex,
                            o,
                          )),
                          (this._invalidateOnUpdateStopIndex = Math.max(
                            this._invalidateOnUpdateStopIndex,
                            o,
                          )));
                    },
                  },
                  {
                    key: "recomputeCellPositions",
                    value: function () {
                      var e = this._positionCache.count - 1;
                      (this._positionCache = new be()),
                        this._populatePositionCache(0, e),
                        this.forceUpdate();
                    },
                  },
                  {
                    key: "componentDidMount",
                    value: function () {
                      this._checkInvalidateOnUpdate(),
                        this._invokeOnScrollCallback(),
                        this._invokeOnCellsRenderedCallback();
                    },
                  },
                  {
                    key: "componentDidUpdate",
                    value: function (e, o) {
                      this._checkInvalidateOnUpdate(),
                        this._invokeOnScrollCallback(),
                        this._invokeOnCellsRenderedCallback(),
                        this.props.scrollTop !== e.scrollTop &&
                          this._debounceResetIsScrolling();
                    },
                  },
                  {
                    key: "componentWillUnmount",
                    value: function () {
                      this._debounceResetIsScrollingId &&
                        oe(this._debounceResetIsScrollingId);
                    },
                  },
                  {
                    key: "render",
                    value: function () {
                      var e = this,
                        o = this.props,
                        l = o.autoHeight,
                        i = o.cellCount,
                        s = o.cellMeasurerCache,
                        a = o.cellRenderer,
                        c = o.className,
                        d = o.height,
                        u = o.id,
                        f = o.keyMapper,
                        p = o.overscanByPixels,
                        g = o.role,
                        v = o.style,
                        S = o.tabIndex,
                        _ = o.width,
                        T = o.rowDirection,
                        w = this.state,
                        b = w.isScrolling,
                        I = w.scrollTop,
                        L = [],
                        y = this._getEstimatedTotalHeight(),
                        m = this._positionCache.shortestColumnSize,
                        x = this._positionCache.count,
                        R = 0,
                        z;
                      if (
                        (this._positionCache.range(
                          Math.max(0, I - p),
                          d + p * 2,
                          function (H, $, Z) {
                            typeof z > "u"
                              ? ((R = H), (z = H))
                              : ((R = Math.min(R, H)), (z = Math.max(z, H))),
                              L.push(
                                a({
                                  index: H,
                                  isScrolling: b,
                                  key: f(H),
                                  parent: e,
                                  style: (0, h.A)(
                                    (0, h.A)(
                                      (0, h.A)(
                                        (0, h.A)(
                                          { height: s.getHeight(H) },
                                          T === "ltr" ? "left" : "right",
                                          $,
                                        ),
                                        "position",
                                        "absolute",
                                      ),
                                      "top",
                                      Z,
                                    ),
                                    "width",
                                    s.getWidth(H),
                                  ),
                                }),
                              );
                          },
                        ),
                        m < I + d + p && x < i)
                      )
                        for (
                          var W = Math.min(
                              i - x,
                              Math.ceil(
                                (((I + d + p - m) / s.defaultHeight) * _) /
                                  s.defaultWidth,
                              ),
                            ),
                            G = x;
                          G < x + W;
                          G++
                        )
                          (z = G),
                            L.push(
                              a({
                                index: G,
                                isScrolling: b,
                                key: f(G),
                                parent: this,
                                style: { width: s.getWidth(G) },
                              }),
                            );
                      return (
                        (this._startIndex = R),
                        (this._stopIndex = z),
                        C.createElement(
                          "div",
                          {
                            ref: this._setScrollingContainerRef,
                            "aria-label": this.props["aria-label"],
                            className: j("ReactVirtualized__Masonry", c),
                            id: u,
                            onScroll: this._onScroll,
                            role: g,
                            style: Vo(
                              {
                                boxSizing: "border-box",
                                direction: "ltr",
                                height: l ? "auto" : d,
                                overflowX: "hidden",
                                overflowY: y < d ? "hidden" : "auto",
                                position: "relative",
                                width: _,
                                WebkitOverflowScrolling: "touch",
                                willChange: "transform",
                              },
                              v,
                            ),
                            tabIndex: S,
                          },
                          C.createElement(
                            "div",
                            {
                              className:
                                "ReactVirtualized__Masonry__innerScrollContainer",
                              style: {
                                width: "100%",
                                height: y,
                                maxWidth: "100%",
                                maxHeight: y,
                                overflow: "hidden",
                                pointerEvents: b ? "none" : "",
                                position: "relative",
                              },
                            },
                            L,
                          ),
                        )
                      );
                    },
                  },
                  {
                    key: "_checkInvalidateOnUpdate",
                    value: function () {
                      if (
                        typeof this._invalidateOnUpdateStartIndex == "number"
                      ) {
                        var e = this._invalidateOnUpdateStartIndex,
                          o = this._invalidateOnUpdateStopIndex;
                        (this._invalidateOnUpdateStartIndex = null),
                          (this._invalidateOnUpdateStopIndex = null),
                          this._populatePositionCache(e, o),
                          this.forceUpdate();
                      }
                    },
                  },
                  {
                    key: "_debounceResetIsScrolling",
                    value: function () {
                      var e = this.props.scrollingResetTimeInterval;
                      this._debounceResetIsScrollingId &&
                        oe(this._debounceResetIsScrollingId),
                        (this._debounceResetIsScrollingId = Ce(
                          this._debounceResetIsScrollingCallback,
                          e,
                        ));
                    },
                  },
                  {
                    key: "_getEstimatedTotalHeight",
                    value: function () {
                      var e = this.props,
                        o = e.cellCount,
                        l = e.cellMeasurerCache,
                        i = e.width,
                        s = Math.max(1, Math.floor(i / l.defaultWidth));
                      return this._positionCache.estimateTotalHeight(
                        o,
                        s,
                        l.defaultHeight,
                      );
                    },
                  },
                  {
                    key: "_invokeOnScrollCallback",
                    value: function () {
                      var e = this.props,
                        o = e.height,
                        l = e.onScroll,
                        i = this.state.scrollTop;
                      this._onScrollMemoized !== i &&
                        (l({
                          clientHeight: o,
                          scrollHeight: this._getEstimatedTotalHeight(),
                          scrollTop: i,
                        }),
                        (this._onScrollMemoized = i));
                    },
                  },
                  {
                    key: "_invokeOnCellsRenderedCallback",
                    value: function () {
                      if (
                        this._startIndexMemoized !== this._startIndex ||
                        this._stopIndexMemoized !== this._stopIndex
                      ) {
                        var e = this.props.onCellsRendered;
                        e({
                          startIndex: this._startIndex,
                          stopIndex: this._stopIndex,
                        }),
                          (this._startIndexMemoized = this._startIndex),
                          (this._stopIndexMemoized = this._stopIndex);
                      }
                    },
                  },
                  {
                    key: "_populatePositionCache",
                    value: function (e, o) {
                      for (
                        var l = this.props,
                          i = l.cellMeasurerCache,
                          s = l.cellPositioner,
                          a = e;
                        a <= o;
                        a++
                      ) {
                        var c = s(a),
                          d = c.left,
                          u = c.top;
                        this._positionCache.setPosition(
                          a,
                          d,
                          u,
                          i.getHeight(a),
                        );
                      }
                    },
                  },
                ],
                [
                  {
                    key: "getDerivedStateFromProps",
                    value: function (e, o) {
                      return e.scrollTop !== void 0 &&
                        o.scrollTop !== e.scrollTop
                        ? { isScrolling: !0, scrollTop: e.scrollTop }
                        : null;
                    },
                  },
                ],
              )
            );
          })(C.PureComponent);
        (0, h.A)(mt, "defaultProps", {
          autoHeight: !1,
          keyMapper: Qo,
          onCellsRendered: St,
          onScroll: St,
          overscanByPixels: 20,
          role: "grid",
          scrollingResetTimeInterval: Zo,
          style: qo,
          tabIndex: 0,
          rowDirection: "ltr",
        });
        function Qo(n) {
          return n;
        }
        function St() {}
        se(mt);
        const Or = null,
          Mr = null;
        var Ae = (function () {
            function n() {
              var r = this,
                t =
                  arguments.length > 0 && arguments[0] !== void 0
                    ? arguments[0]
                    : {};
              (0, A.A)(this, n),
                (0, h.A)(this, "_cellMeasurerCache", void 0),
                (0, h.A)(this, "_columnIndexOffset", void 0),
                (0, h.A)(this, "_rowIndexOffset", void 0),
                (0, h.A)(this, "columnWidth", function (a) {
                  var c = a.index;
                  r._cellMeasurerCache.columnWidth({
                    index: c + r._columnIndexOffset,
                  });
                }),
                (0, h.A)(this, "rowHeight", function (a) {
                  var c = a.index;
                  r._cellMeasurerCache.rowHeight({
                    index: c + r._rowIndexOffset,
                  });
                });
              var e = t.cellMeasurerCache,
                o = t.columnIndexOffset,
                l = o === void 0 ? 0 : o,
                i = t.rowIndexOffset,
                s = i === void 0 ? 0 : i;
              (this._cellMeasurerCache = e),
                (this._columnIndexOffset = l),
                (this._rowIndexOffset = s);
            }
            return (0, P.A)(n, [
              {
                key: "clear",
                value: function (t, e) {
                  this._cellMeasurerCache.clear(
                    t + this._rowIndexOffset,
                    e + this._columnIndexOffset,
                  );
                },
              },
              {
                key: "clearAll",
                value: function () {
                  this._cellMeasurerCache.clearAll();
                },
              },
              {
                key: "defaultHeight",
                get: function () {
                  return this._cellMeasurerCache.defaultHeight;
                },
              },
              {
                key: "defaultWidth",
                get: function () {
                  return this._cellMeasurerCache.defaultWidth;
                },
              },
              {
                key: "hasFixedHeight",
                value: function () {
                  return this._cellMeasurerCache.hasFixedHeight();
                },
              },
              {
                key: "hasFixedWidth",
                value: function () {
                  return this._cellMeasurerCache.hasFixedWidth();
                },
              },
              {
                key: "getHeight",
                value: function (t) {
                  var e =
                    arguments.length > 1 && arguments[1] !== void 0
                      ? arguments[1]
                      : 0;
                  return this._cellMeasurerCache.getHeight(
                    t + this._rowIndexOffset,
                    e + this._columnIndexOffset,
                  );
                },
              },
              {
                key: "getWidth",
                value: function (t) {
                  var e =
                    arguments.length > 1 && arguments[1] !== void 0
                      ? arguments[1]
                      : 0;
                  return this._cellMeasurerCache.getWidth(
                    t + this._rowIndexOffset,
                    e + this._columnIndexOffset,
                  );
                },
              },
              {
                key: "has",
                value: function (t) {
                  var e =
                    arguments.length > 1 && arguments[1] !== void 0
                      ? arguments[1]
                      : 0;
                  return this._cellMeasurerCache.has(
                    t + this._rowIndexOffset,
                    e + this._columnIndexOffset,
                  );
                },
              },
              {
                key: "set",
                value: function (t, e, o, l) {
                  this._cellMeasurerCache.set(
                    t + this._rowIndexOffset,
                    e + this._columnIndexOffset,
                    o,
                    l,
                  );
                },
              },
            ]);
          })(),
          Xo = ["rowIndex"],
          Yo = ["columnIndex", "rowIndex"],
          Jo = ["columnIndex"],
          er = [
            "onScroll",
            "onSectionRendered",
            "onScrollbarPresenceChange",
            "scrollLeft",
            "scrollToColumn",
            "scrollTop",
            "scrollToRow",
          ];
        function _t(n, r) {
          var t = Object.keys(n);
          if (Object.getOwnPropertySymbols) {
            var e = Object.getOwnPropertySymbols(n);
            r &&
              (e = e.filter(function (o) {
                return Object.getOwnPropertyDescriptor(n, o).enumerable;
              })),
              t.push.apply(t, e);
          }
          return t;
        }
        function k(n) {
          for (var r = 1; r < arguments.length; r++) {
            var t = arguments[r] != null ? arguments[r] : {};
            r % 2
              ? _t(Object(t), !0).forEach(function (e) {
                  (0, h.A)(n, e, t[e]);
                })
              : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(
                    n,
                    Object.getOwnPropertyDescriptors(t),
                  )
                : _t(Object(t)).forEach(function (e) {
                    Object.defineProperty(
                      n,
                      e,
                      Object.getOwnPropertyDescriptor(t, e),
                    );
                  });
          }
          return n;
        }
        function tr(n, r, t) {
          return (
            (r = (0, M.A)(r)),
            (0, E.A)(
              n,
              Ct()
                ? Reflect.construct(r, t || [], (0, M.A)(n).constructor)
                : r.apply(n, t),
            )
          );
        }
        function Ct() {
          try {
            var n = !Boolean.prototype.valueOf.call(
              Reflect.construct(Boolean, [], function () {}),
            );
          } catch {}
          return (Ct = function () {
            return !!n;
          })();
        }
        var wt = 20,
          Oe = (function (n) {
            function r(t, e) {
              var o;
              (0, A.A)(this, r),
                (o = tr(this, r, [t, e])),
                (0, h.A)(o, "state", {
                  scrollLeft: 0,
                  scrollTop: 0,
                  scrollbarSize: 0,
                  showHorizontalScrollbar: !1,
                  showVerticalScrollbar: !1,
                }),
                (0, h.A)(o, "_deferredInvalidateColumnIndex", null),
                (0, h.A)(o, "_deferredInvalidateRowIndex", null),
                (0, h.A)(o, "_bottomLeftGridRef", function (a) {
                  o._bottomLeftGrid = a;
                }),
                (0, h.A)(o, "_bottomRightGridRef", function (a) {
                  o._bottomRightGrid = a;
                }),
                (0, h.A)(o, "_cellRendererBottomLeftGrid", function (a) {
                  var c = a.rowIndex,
                    d = (0, ae.A)(a, Xo),
                    u = o.props,
                    f = u.cellRenderer,
                    p = u.fixedRowCount,
                    g = u.rowCount;
                  return c === g - p
                    ? C.createElement("div", {
                        key: d.key,
                        style: k(k({}, d.style), {}, { height: wt }),
                      })
                    : f(k(k({}, d), {}, { parent: o, rowIndex: c + p }));
                }),
                (0, h.A)(o, "_cellRendererBottomRightGrid", function (a) {
                  var c = a.columnIndex,
                    d = a.rowIndex,
                    u = (0, ae.A)(a, Yo),
                    f = o.props,
                    p = f.cellRenderer,
                    g = f.fixedColumnCount,
                    v = f.fixedRowCount;
                  return p(
                    k(
                      k({}, u),
                      {},
                      { columnIndex: c + g, parent: o, rowIndex: d + v },
                    ),
                  );
                }),
                (0, h.A)(o, "_cellRendererTopRightGrid", function (a) {
                  var c = a.columnIndex,
                    d = (0, ae.A)(a, Jo),
                    u = o.props,
                    f = u.cellRenderer,
                    p = u.columnCount,
                    g = u.fixedColumnCount;
                  return c === p - g
                    ? C.createElement("div", {
                        key: d.key,
                        style: k(k({}, d.style), {}, { width: wt }),
                      })
                    : f(k(k({}, d), {}, { columnIndex: c + g, parent: o }));
                }),
                (0, h.A)(o, "_columnWidthRightGrid", function (a) {
                  var c = a.index,
                    d = o.props,
                    u = d.columnCount,
                    f = d.fixedColumnCount,
                    p = d.columnWidth,
                    g = o.state,
                    v = g.scrollbarSize,
                    S = g.showHorizontalScrollbar;
                  return S && c === u - f
                    ? v
                    : typeof p == "function"
                      ? p({ index: c + f })
                      : p;
                }),
                (0, h.A)(o, "_onScroll", function (a) {
                  var c = a.scrollLeft,
                    d = a.scrollTop;
                  o.setState({ scrollLeft: c, scrollTop: d });
                  var u = o.props.onScroll;
                  u && u(a);
                }),
                (0, h.A)(o, "_onScrollbarPresenceChange", function (a) {
                  var c = a.horizontal,
                    d = a.size,
                    u = a.vertical,
                    f = o.state,
                    p = f.showHorizontalScrollbar,
                    g = f.showVerticalScrollbar;
                  if (c !== p || u !== g) {
                    o.setState({
                      scrollbarSize: d,
                      showHorizontalScrollbar: c,
                      showVerticalScrollbar: u,
                    });
                    var v = o.props.onScrollbarPresenceChange;
                    typeof v == "function" &&
                      v({ horizontal: c, size: d, vertical: u });
                  }
                }),
                (0, h.A)(o, "_onScrollLeft", function (a) {
                  var c = a.scrollLeft;
                  o._onScroll({ scrollLeft: c, scrollTop: o.state.scrollTop });
                }),
                (0, h.A)(o, "_onScrollTop", function (a) {
                  var c = a.scrollTop;
                  o._onScroll({ scrollTop: c, scrollLeft: o.state.scrollLeft });
                }),
                (0, h.A)(o, "_rowHeightBottomGrid", function (a) {
                  var c = a.index,
                    d = o.props,
                    u = d.fixedRowCount,
                    f = d.rowCount,
                    p = d.rowHeight,
                    g = o.state,
                    v = g.scrollbarSize,
                    S = g.showVerticalScrollbar;
                  return S && c === f - u
                    ? v
                    : typeof p == "function"
                      ? p({ index: c + u })
                      : p;
                }),
                (0, h.A)(o, "_topLeftGridRef", function (a) {
                  o._topLeftGrid = a;
                }),
                (0, h.A)(o, "_topRightGridRef", function (a) {
                  o._topRightGrid = a;
                });
              var l = t.deferredMeasurementCache,
                i = t.fixedColumnCount,
                s = t.fixedRowCount;
              return (
                o._maybeCalculateCachedStyles(!0),
                l &&
                  ((o._deferredMeasurementCacheBottomLeftGrid =
                    s > 0
                      ? new Ae({
                          cellMeasurerCache: l,
                          columnIndexOffset: 0,
                          rowIndexOffset: s,
                        })
                      : l),
                  (o._deferredMeasurementCacheBottomRightGrid =
                    i > 0 || s > 0
                      ? new Ae({
                          cellMeasurerCache: l,
                          columnIndexOffset: i,
                          rowIndexOffset: s,
                        })
                      : l),
                  (o._deferredMeasurementCacheTopRightGrid =
                    i > 0
                      ? new Ae({
                          cellMeasurerCache: l,
                          columnIndexOffset: i,
                          rowIndexOffset: 0,
                        })
                      : l)),
                o
              );
            }
            return (
              (0, D.A)(r, n),
              (0, P.A)(
                r,
                [
                  {
                    key: "forceUpdateGrids",
                    value: function () {
                      this._bottomLeftGrid &&
                        this._bottomLeftGrid.forceUpdate(),
                        this._bottomRightGrid &&
                          this._bottomRightGrid.forceUpdate(),
                        this._topLeftGrid && this._topLeftGrid.forceUpdate(),
                        this._topRightGrid && this._topRightGrid.forceUpdate();
                    },
                  },
                  {
                    key: "invalidateCellSizeAfterRender",
                    value: function () {
                      var e =
                          arguments.length > 0 && arguments[0] !== void 0
                            ? arguments[0]
                            : {},
                        o = e.columnIndex,
                        l = o === void 0 ? 0 : o,
                        i = e.rowIndex,
                        s = i === void 0 ? 0 : i;
                      (this._deferredInvalidateColumnIndex =
                        typeof this._deferredInvalidateColumnIndex == "number"
                          ? Math.min(this._deferredInvalidateColumnIndex, l)
                          : l),
                        (this._deferredInvalidateRowIndex =
                          typeof this._deferredInvalidateRowIndex == "number"
                            ? Math.min(this._deferredInvalidateRowIndex, s)
                            : s);
                    },
                  },
                  {
                    key: "measureAllCells",
                    value: function () {
                      this._bottomLeftGrid &&
                        this._bottomLeftGrid.measureAllCells(),
                        this._bottomRightGrid &&
                          this._bottomRightGrid.measureAllCells(),
                        this._topLeftGrid &&
                          this._topLeftGrid.measureAllCells(),
                        this._topRightGrid &&
                          this._topRightGrid.measureAllCells();
                    },
                  },
                  {
                    key: "recomputeGridSize",
                    value: function () {
                      var e =
                          arguments.length > 0 && arguments[0] !== void 0
                            ? arguments[0]
                            : {},
                        o = e.columnIndex,
                        l = o === void 0 ? 0 : o,
                        i = e.rowIndex,
                        s = i === void 0 ? 0 : i,
                        a = this.props,
                        c = a.fixedColumnCount,
                        d = a.fixedRowCount,
                        u = Math.max(0, l - c),
                        f = Math.max(0, s - d);
                      this._bottomLeftGrid &&
                        this._bottomLeftGrid.recomputeGridSize({
                          columnIndex: l,
                          rowIndex: f,
                        }),
                        this._bottomRightGrid &&
                          this._bottomRightGrid.recomputeGridSize({
                            columnIndex: u,
                            rowIndex: f,
                          }),
                        this._topLeftGrid &&
                          this._topLeftGrid.recomputeGridSize({
                            columnIndex: l,
                            rowIndex: s,
                          }),
                        this._topRightGrid &&
                          this._topRightGrid.recomputeGridSize({
                            columnIndex: u,
                            rowIndex: s,
                          }),
                        (this._leftGridWidth = null),
                        (this._topGridHeight = null),
                        this._maybeCalculateCachedStyles(!0);
                    },
                  },
                  {
                    key: "componentDidMount",
                    value: function () {
                      var e = this.props,
                        o = e.scrollLeft,
                        l = e.scrollTop;
                      if (o > 0 || l > 0) {
                        var i = {};
                        o > 0 && (i.scrollLeft = o),
                          l > 0 && (i.scrollTop = l),
                          this.setState(i);
                      }
                      this._handleInvalidatedGridSize();
                    },
                  },
                  {
                    key: "componentDidUpdate",
                    value: function () {
                      this._handleInvalidatedGridSize();
                    },
                  },
                  {
                    key: "render",
                    value: function () {
                      var e = this.props,
                        o = e.onScroll,
                        l = e.onSectionRendered,
                        i = e.onScrollbarPresenceChange,
                        s = e.scrollLeft,
                        a = e.scrollToColumn,
                        c = e.scrollTop,
                        d = e.scrollToRow,
                        u = (0, ae.A)(e, er);
                      if (
                        (this._prepareForRender(),
                        this.props.width === 0 || this.props.height === 0)
                      )
                        return null;
                      var f = this.state,
                        p = f.scrollLeft,
                        g = f.scrollTop;
                      return C.createElement(
                        "div",
                        { style: this._containerOuterStyle },
                        C.createElement(
                          "div",
                          { style: this._containerTopStyle },
                          this._renderTopLeftGrid(u),
                          this._renderTopRightGrid(
                            k(k({}, u), {}, { onScroll: o, scrollLeft: p }),
                          ),
                        ),
                        C.createElement(
                          "div",
                          { style: this._containerBottomStyle },
                          this._renderBottomLeftGrid(
                            k(k({}, u), {}, { onScroll: o, scrollTop: g }),
                          ),
                          this._renderBottomRightGrid(
                            k(
                              k({}, u),
                              {},
                              {
                                onScroll: o,
                                onSectionRendered: l,
                                scrollLeft: p,
                                scrollToColumn: a,
                                scrollToRow: d,
                                scrollTop: g,
                              },
                            ),
                          ),
                        ),
                      );
                    },
                  },
                  {
                    key: "_getBottomGridHeight",
                    value: function (e) {
                      var o = e.height,
                        l = this._getTopGridHeight(e);
                      return o - l;
                    },
                  },
                  {
                    key: "_getLeftGridWidth",
                    value: function (e) {
                      var o = e.fixedColumnCount,
                        l = e.columnWidth;
                      if (this._leftGridWidth == null)
                        if (typeof l == "function") {
                          for (var i = 0, s = 0; s < o; s++)
                            i += l({ index: s });
                          this._leftGridWidth = i;
                        } else this._leftGridWidth = l * o;
                      return this._leftGridWidth;
                    },
                  },
                  {
                    key: "_getRightGridWidth",
                    value: function (e) {
                      var o = e.width,
                        l = this._getLeftGridWidth(e);
                      return o - l;
                    },
                  },
                  {
                    key: "_getTopGridHeight",
                    value: function (e) {
                      var o = e.fixedRowCount,
                        l = e.rowHeight;
                      if (this._topGridHeight == null)
                        if (typeof l == "function") {
                          for (var i = 0, s = 0; s < o; s++)
                            i += l({ index: s });
                          this._topGridHeight = i;
                        } else this._topGridHeight = l * o;
                      return this._topGridHeight;
                    },
                  },
                  {
                    key: "_handleInvalidatedGridSize",
                    value: function () {
                      if (
                        typeof this._deferredInvalidateColumnIndex == "number"
                      ) {
                        var e = this._deferredInvalidateColumnIndex,
                          o = this._deferredInvalidateRowIndex;
                        (this._deferredInvalidateColumnIndex = null),
                          (this._deferredInvalidateRowIndex = null),
                          this.recomputeGridSize({
                            columnIndex: e,
                            rowIndex: o,
                          }),
                          this.forceUpdate();
                      }
                    },
                  },
                  {
                    key: "_maybeCalculateCachedStyles",
                    value: function (e) {
                      var o = this.props,
                        l = o.columnWidth,
                        i = o.enableFixedColumnScroll,
                        s = o.enableFixedRowScroll,
                        a = o.height,
                        c = o.fixedColumnCount,
                        d = o.fixedRowCount,
                        u = o.rowHeight,
                        f = o.style,
                        p = o.styleBottomLeftGrid,
                        g = o.styleBottomRightGrid,
                        v = o.styleTopLeftGrid,
                        S = o.styleTopRightGrid,
                        _ = o.width,
                        T =
                          e ||
                          a !== this._lastRenderedHeight ||
                          _ !== this._lastRenderedWidth,
                        w =
                          e ||
                          l !== this._lastRenderedColumnWidth ||
                          c !== this._lastRenderedFixedColumnCount,
                        b =
                          e ||
                          d !== this._lastRenderedFixedRowCount ||
                          u !== this._lastRenderedRowHeight;
                      (e || T || f !== this._lastRenderedStyle) &&
                        (this._containerOuterStyle = k(
                          { height: a, overflow: "visible", width: _ },
                          f,
                        )),
                        (e || T || b) &&
                          ((this._containerTopStyle = {
                            height: this._getTopGridHeight(this.props),
                            position: "relative",
                            width: _,
                          }),
                          (this._containerBottomStyle = {
                            height: a - this._getTopGridHeight(this.props),
                            overflow: "visible",
                            position: "relative",
                            width: _,
                          })),
                        (e || p !== this._lastRenderedStyleBottomLeftGrid) &&
                          (this._bottomLeftGridStyle = k(
                            {
                              left: 0,
                              overflowX: "hidden",
                              overflowY: i ? "auto" : "hidden",
                              position: "absolute",
                            },
                            p,
                          )),
                        (e ||
                          w ||
                          g !== this._lastRenderedStyleBottomRightGrid) &&
                          (this._bottomRightGridStyle = k(
                            {
                              left: this._getLeftGridWidth(this.props),
                              position: "absolute",
                            },
                            g,
                          )),
                        (e || v !== this._lastRenderedStyleTopLeftGrid) &&
                          (this._topLeftGridStyle = k(
                            {
                              left: 0,
                              overflowX: "hidden",
                              overflowY: "hidden",
                              position: "absolute",
                              top: 0,
                            },
                            v,
                          )),
                        (e || w || S !== this._lastRenderedStyleTopRightGrid) &&
                          (this._topRightGridStyle = k(
                            {
                              left: this._getLeftGridWidth(this.props),
                              overflowX: s ? "auto" : "hidden",
                              overflowY: "hidden",
                              position: "absolute",
                              top: 0,
                            },
                            S,
                          )),
                        (this._lastRenderedColumnWidth = l),
                        (this._lastRenderedFixedColumnCount = c),
                        (this._lastRenderedFixedRowCount = d),
                        (this._lastRenderedHeight = a),
                        (this._lastRenderedRowHeight = u),
                        (this._lastRenderedStyle = f),
                        (this._lastRenderedStyleBottomLeftGrid = p),
                        (this._lastRenderedStyleBottomRightGrid = g),
                        (this._lastRenderedStyleTopLeftGrid = v),
                        (this._lastRenderedStyleTopRightGrid = S),
                        (this._lastRenderedWidth = _);
                    },
                  },
                  {
                    key: "_prepareForRender",
                    value: function () {
                      (this._lastRenderedColumnWidth !==
                        this.props.columnWidth ||
                        this._lastRenderedFixedColumnCount !==
                          this.props.fixedColumnCount) &&
                        (this._leftGridWidth = null),
                        (this._lastRenderedFixedRowCount !==
                          this.props.fixedRowCount ||
                          this._lastRenderedRowHeight !==
                            this.props.rowHeight) &&
                          (this._topGridHeight = null),
                        this._maybeCalculateCachedStyles(),
                        (this._lastRenderedColumnWidth =
                          this.props.columnWidth),
                        (this._lastRenderedFixedColumnCount =
                          this.props.fixedColumnCount),
                        (this._lastRenderedFixedRowCount =
                          this.props.fixedRowCount),
                        (this._lastRenderedRowHeight = this.props.rowHeight);
                    },
                  },
                  {
                    key: "_renderBottomLeftGrid",
                    value: function (e) {
                      var o = e.enableFixedColumnScroll,
                        l = e.fixedColumnCount,
                        i = e.fixedRowCount,
                        s = e.rowCount,
                        a = e.hideBottomLeftGridScrollbar,
                        c = this.state.showVerticalScrollbar;
                      if (!l) return null;
                      var d = c ? 1 : 0,
                        u = this._getBottomGridHeight(e),
                        f = this._getLeftGridWidth(e),
                        p = this.state.showVerticalScrollbar
                          ? this.state.scrollbarSize
                          : 0,
                        g = a ? f + p : f,
                        v = C.createElement(
                          Q,
                          (0, U.A)({}, e, {
                            cellRenderer: this._cellRendererBottomLeftGrid,
                            className: this.props.classNameBottomLeftGrid,
                            columnCount: l,
                            deferredMeasurementCache:
                              this._deferredMeasurementCacheBottomLeftGrid,
                            height: u,
                            onScroll: o ? this._onScrollTop : void 0,
                            ref: this._bottomLeftGridRef,
                            rowCount: Math.max(0, s - i) + d,
                            rowHeight: this._rowHeightBottomGrid,
                            style: this._bottomLeftGridStyle,
                            tabIndex: null,
                            width: g,
                          }),
                        );
                      return a
                        ? C.createElement(
                            "div",
                            {
                              className: "BottomLeftGrid_ScrollWrapper",
                              style: k(
                                k({}, this._bottomLeftGridStyle),
                                {},
                                { height: u, width: f, overflowY: "hidden" },
                              ),
                            },
                            v,
                          )
                        : v;
                    },
                  },
                  {
                    key: "_renderBottomRightGrid",
                    value: function (e) {
                      var o = e.columnCount,
                        l = e.fixedColumnCount,
                        i = e.fixedRowCount,
                        s = e.rowCount,
                        a = e.scrollToColumn,
                        c = e.scrollToRow;
                      return C.createElement(
                        Q,
                        (0, U.A)({}, e, {
                          cellRenderer: this._cellRendererBottomRightGrid,
                          className: this.props.classNameBottomRightGrid,
                          columnCount: Math.max(0, o - l),
                          columnWidth: this._columnWidthRightGrid,
                          deferredMeasurementCache:
                            this._deferredMeasurementCacheBottomRightGrid,
                          height: this._getBottomGridHeight(e),
                          onScroll: this._onScroll,
                          onScrollbarPresenceChange:
                            this._onScrollbarPresenceChange,
                          ref: this._bottomRightGridRef,
                          rowCount: Math.max(0, s - i),
                          rowHeight: this._rowHeightBottomGrid,
                          scrollToColumn: a - l,
                          scrollToRow: c - i,
                          style: this._bottomRightGridStyle,
                          width: this._getRightGridWidth(e),
                        }),
                      );
                    },
                  },
                  {
                    key: "_renderTopLeftGrid",
                    value: function (e) {
                      var o = e.fixedColumnCount,
                        l = e.fixedRowCount;
                      return !o || !l
                        ? null
                        : C.createElement(
                            Q,
                            (0, U.A)({}, e, {
                              className: this.props.classNameTopLeftGrid,
                              columnCount: o,
                              height: this._getTopGridHeight(e),
                              ref: this._topLeftGridRef,
                              rowCount: l,
                              style: this._topLeftGridStyle,
                              tabIndex: null,
                              width: this._getLeftGridWidth(e),
                            }),
                          );
                    },
                  },
                  {
                    key: "_renderTopRightGrid",
                    value: function (e) {
                      var o = e.columnCount,
                        l = e.enableFixedRowScroll,
                        i = e.fixedColumnCount,
                        s = e.fixedRowCount,
                        a = e.scrollLeft,
                        c = e.hideTopRightGridScrollbar,
                        d = this.state,
                        u = d.showHorizontalScrollbar,
                        f = d.scrollbarSize;
                      if (!s) return null;
                      var p = u ? 1 : 0,
                        g = this._getTopGridHeight(e),
                        v = this._getRightGridWidth(e),
                        S = u ? f : 0,
                        _ = g,
                        T = this._topRightGridStyle;
                      c &&
                        ((_ = g + S),
                        (T = k(
                          k({}, this._topRightGridStyle),
                          {},
                          { left: 0 },
                        )));
                      var w = C.createElement(
                        Q,
                        (0, U.A)({}, e, {
                          cellRenderer: this._cellRendererTopRightGrid,
                          className: this.props.classNameTopRightGrid,
                          columnCount: Math.max(0, o - i) + p,
                          columnWidth: this._columnWidthRightGrid,
                          deferredMeasurementCache:
                            this._deferredMeasurementCacheTopRightGrid,
                          height: _,
                          onScroll: l ? this._onScrollLeft : void 0,
                          ref: this._topRightGridRef,
                          rowCount: s,
                          scrollLeft: a,
                          style: T,
                          tabIndex: null,
                          width: v,
                        }),
                      );
                      return c
                        ? C.createElement(
                            "div",
                            {
                              className: "TopRightGrid_ScrollWrapper",
                              style: k(
                                k({}, this._topRightGridStyle),
                                {},
                                { height: g, width: v, overflowX: "hidden" },
                              ),
                            },
                            w,
                          )
                        : w;
                    },
                  },
                ],
                [
                  {
                    key: "getDerivedStateFromProps",
                    value: function (e, o) {
                      return e.scrollLeft !== o.scrollLeft ||
                        e.scrollTop !== o.scrollTop
                        ? {
                            scrollLeft:
                              e.scrollLeft != null && e.scrollLeft >= 0
                                ? e.scrollLeft
                                : o.scrollLeft,
                            scrollTop:
                              e.scrollTop != null && e.scrollTop >= 0
                                ? e.scrollTop
                                : o.scrollTop,
                          }
                        : null;
                    },
                  },
                ],
              )
            );
          })(C.PureComponent);
        (0, h.A)(Oe, "defaultProps", {
          classNameBottomLeftGrid: "",
          classNameBottomRightGrid: "",
          classNameTopLeftGrid: "",
          classNameTopRightGrid: "",
          enableFixedColumnScroll: !1,
          enableFixedRowScroll: !1,
          fixedColumnCount: 0,
          fixedRowCount: 0,
          scrollToColumn: -1,
          scrollToRow: -1,
          style: {},
          styleBottomLeftGrid: {},
          styleBottomRightGrid: {},
          styleTopLeftGrid: {},
          styleTopRightGrid: {},
          hideTopRightGridScrollbar: !1,
          hideBottomLeftGridScrollbar: !1,
        }),
          (Oe.propTypes = {}),
          se(Oe);
        const Lr = null,
          Pr = null;
        function or(n, r, t) {
          return (
            (r = (0, M.A)(r)),
            (0, E.A)(
              n,
              yt()
                ? Reflect.construct(r, t || [], (0, M.A)(n).constructor)
                : r.apply(n, t),
            )
          );
        }
        function yt() {
          try {
            var n = !Boolean.prototype.valueOf.call(
              Reflect.construct(Boolean, [], function () {}),
            );
          } catch {}
          return (yt = function () {
            return !!n;
          })();
        }
        var rr = (function (n) {
          function r(t, e) {
            var o;
            return (
              (0, A.A)(this, r),
              (o = or(this, r, [t, e])),
              (o.state = {
                clientHeight: 0,
                clientWidth: 0,
                scrollHeight: 0,
                scrollLeft: 0,
                scrollTop: 0,
                scrollWidth: 0,
              }),
              (o._onScroll = o._onScroll.bind(o)),
              o
            );
          }
          return (
            (0, D.A)(r, n),
            (0, P.A)(r, [
              {
                key: "render",
                value: function () {
                  var e = this.props.children,
                    o = this.state,
                    l = o.clientHeight,
                    i = o.clientWidth,
                    s = o.scrollHeight,
                    a = o.scrollLeft,
                    c = o.scrollTop,
                    d = o.scrollWidth;
                  return e({
                    clientHeight: l,
                    clientWidth: i,
                    onScroll: this._onScroll,
                    scrollHeight: s,
                    scrollLeft: a,
                    scrollTop: c,
                    scrollWidth: d,
                  });
                },
              },
              {
                key: "_onScroll",
                value: function (e) {
                  var o = e.clientHeight,
                    l = e.clientWidth,
                    i = e.scrollHeight,
                    s = e.scrollLeft,
                    a = e.scrollTop,
                    c = e.scrollWidth;
                  this.setState({
                    clientHeight: o,
                    clientWidth: l,
                    scrollHeight: i,
                    scrollLeft: s,
                    scrollTop: a,
                    scrollWidth: c,
                  });
                },
              },
            ])
          );
        })(C.PureComponent);
        rr.propTypes = {};
        const Gr = null;
        function nr(n) {
          var r = n.className,
            t = n.columns,
            e = n.style;
          return C.createElement(
            "div",
            { className: r, role: "row", style: e },
            t,
          );
        }
        var ir = { ASC: "ASC", DESC: "DESC" };
        const K = ir;
        function Rt(n) {
          var r = n.sortDirection,
            t = j("ReactVirtualized__Table__sortableHeaderIcon", {
              "ReactVirtualized__Table__sortableHeaderIcon--ASC": r === K.ASC,
              "ReactVirtualized__Table__sortableHeaderIcon--DESC": r === K.DESC,
            });
          return C.createElement(
            "svg",
            { className: t, width: 18, height: 18, viewBox: "0 0 24 24" },
            r === K.ASC
              ? C.createElement("path", { d: "M7 14l5-5 5 5z" })
              : C.createElement("path", { d: "M7 10l5 5 5-5z" }),
            C.createElement("path", { d: "M0 0h24v24H0z", fill: "none" }),
          );
        }
        Rt.propTypes = {};
        function lr(n) {
          var r = n.dataKey,
            t = n.label,
            e = n.sortBy,
            o = n.sortDirection,
            l = e === r,
            i = [
              C.createElement(
                "span",
                {
                  className: "ReactVirtualized__Table__headerTruncatedText",
                  key: "label",
                  title: typeof t == "string" ? t : null,
                },
                t,
              ),
            ];
          return (
            l &&
              i.push(
                C.createElement(Rt, { key: "SortIndicator", sortDirection: o }),
              ),
            i
          );
        }
        function sr(n) {
          var r = n.className,
            t = n.columns,
            e = n.index,
            o = n.key,
            l = n.onRowClick,
            i = n.onRowDoubleClick,
            s = n.onRowMouseOut,
            a = n.onRowMouseOver,
            c = n.onRowRightClick,
            d = n.rowData,
            u = n.style,
            f = { "aria-rowindex": e + 1 };
          return (
            (l || i || s || a || c) &&
              ((f["aria-label"] = "row"),
              (f.tabIndex = 0),
              l &&
                (f.onClick = function (p) {
                  return l({ event: p, index: e, rowData: d });
                }),
              i &&
                (f.onDoubleClick = function (p) {
                  return i({ event: p, index: e, rowData: d });
                }),
              s &&
                (f.onMouseOut = function (p) {
                  return s({ event: p, index: e, rowData: d });
                }),
              a &&
                (f.onMouseOver = function (p) {
                  return a({ event: p, index: e, rowData: d });
                }),
              c &&
                (f.onContextMenu = function (p) {
                  return c({ event: p, index: e, rowData: d });
                })),
            C.createElement(
              "div",
              (0, U.A)({}, f, { className: r, key: o, role: "row", style: u }),
              t,
            )
          );
        }
        function ar(n) {
          var r = n.cellData;
          return r == null ? "" : String(r);
        }
        function cr(n) {
          var r = n.dataKey,
            t = n.rowData;
          return typeof t.get == "function" ? t.get(r) : t[r];
        }
        function dr(n, r, t) {
          return (
            (r = (0, M.A)(r)),
            (0, E.A)(
              n,
              Tt()
                ? Reflect.construct(r, t || [], (0, M.A)(n).constructor)
                : r.apply(n, t),
            )
          );
        }
        function Tt() {
          try {
            var n = !Boolean.prototype.valueOf.call(
              Reflect.construct(Boolean, [], function () {}),
            );
          } catch {}
          return (Tt = function () {
            return !!n;
          })();
        }
        var Me = (function (n) {
          function r() {
            return (0, A.A)(this, r), dr(this, r, arguments);
          }
          return (0, D.A)(r, n), (0, P.A)(r);
        })(C.Component);
        (0, h.A)(Me, "defaultProps", {
          cellDataGetter: cr,
          cellRenderer: ar,
          defaultSortDirection: K.ASC,
          flexGrow: 0,
          flexShrink: 1,
          headerRenderer: lr,
          style: {},
        }),
          (Me.propTypes = {});
        function zt(n, r) {
          var t = Object.keys(n);
          if (Object.getOwnPropertySymbols) {
            var e = Object.getOwnPropertySymbols(n);
            r &&
              (e = e.filter(function (o) {
                return Object.getOwnPropertyDescriptor(n, o).enumerable;
              })),
              t.push.apply(t, e);
          }
          return t;
        }
        function B(n) {
          for (var r = 1; r < arguments.length; r++) {
            var t = arguments[r] != null ? arguments[r] : {};
            r % 2
              ? zt(Object(t), !0).forEach(function (e) {
                  (0, h.A)(n, e, t[e]);
                })
              : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(
                    n,
                    Object.getOwnPropertyDescriptors(t),
                  )
                : zt(Object(t)).forEach(function (e) {
                    Object.defineProperty(
                      n,
                      e,
                      Object.getOwnPropertyDescriptor(t, e),
                    );
                  });
          }
          return n;
        }
        function ur(n, r, t) {
          return (
            (r = (0, M.A)(r)),
            (0, E.A)(
              n,
              It()
                ? Reflect.construct(r, t || [], (0, M.A)(n).constructor)
                : r.apply(n, t),
            )
          );
        }
        function It() {
          try {
            var n = !Boolean.prototype.valueOf.call(
              Reflect.construct(Boolean, [], function () {}),
            );
          } catch {}
          return (It = function () {
            return !!n;
          })();
        }
        var xt = (function (n) {
          function r(t) {
            var e;
            return (
              (0, A.A)(this, r),
              (e = ur(this, r, [t])),
              (e.state = { scrollbarWidth: 0 }),
              (e._createColumn = e._createColumn.bind(e)),
              (e._createRow = e._createRow.bind(e)),
              (e._onScroll = e._onScroll.bind(e)),
              (e._onSectionRendered = e._onSectionRendered.bind(e)),
              (e._setRef = e._setRef.bind(e)),
              (e._setGridElementRef = e._setGridElementRef.bind(e)),
              e
            );
          }
          return (
            (0, D.A)(r, n),
            (0, P.A)(r, [
              {
                key: "forceUpdateGrid",
                value: function () {
                  this.Grid && this.Grid.forceUpdate();
                },
              },
              {
                key: "getOffsetForRow",
                value: function (e) {
                  var o = e.alignment,
                    l = e.index;
                  if (this.Grid) {
                    var i = this.Grid.getOffsetForCell({
                        alignment: o,
                        rowIndex: l,
                      }),
                      s = i.scrollTop;
                    return s;
                  }
                  return 0;
                },
              },
              {
                key: "invalidateCellSizeAfterRender",
                value: function (e) {
                  var o = e.columnIndex,
                    l = e.rowIndex;
                  this.Grid &&
                    this.Grid.invalidateCellSizeAfterRender({
                      rowIndex: l,
                      columnIndex: o,
                    });
                },
              },
              {
                key: "measureAllRows",
                value: function () {
                  this.Grid && this.Grid.measureAllCells();
                },
              },
              {
                key: "recomputeGridSize",
                value: function () {
                  var e =
                      arguments.length > 0 && arguments[0] !== void 0
                        ? arguments[0]
                        : {},
                    o = e.columnIndex,
                    l = o === void 0 ? 0 : o,
                    i = e.rowIndex,
                    s = i === void 0 ? 0 : i;
                  this.Grid &&
                    this.Grid.recomputeGridSize({
                      rowIndex: s,
                      columnIndex: l,
                    });
                },
              },
              {
                key: "recomputeRowHeights",
                value: function () {
                  var e =
                    arguments.length > 0 && arguments[0] !== void 0
                      ? arguments[0]
                      : 0;
                  this.Grid && this.Grid.recomputeGridSize({ rowIndex: e });
                },
              },
              {
                key: "scrollToPosition",
                value: function () {
                  var e =
                    arguments.length > 0 && arguments[0] !== void 0
                      ? arguments[0]
                      : 0;
                  this.Grid && this.Grid.scrollToPosition({ scrollTop: e });
                },
              },
              {
                key: "scrollToRow",
                value: function () {
                  var e =
                    arguments.length > 0 && arguments[0] !== void 0
                      ? arguments[0]
                      : 0;
                  this.Grid &&
                    this.Grid.scrollToCell({ columnIndex: 0, rowIndex: e });
                },
              },
              {
                key: "getScrollbarWidth",
                value: function () {
                  if (this.GridElement) {
                    var e = this.GridElement,
                      o = e.clientWidth || 0,
                      l = e.offsetWidth || 0;
                    return l - o;
                  }
                  return 0;
                },
              },
              {
                key: "componentDidMount",
                value: function () {
                  this._setScrollbarWidth();
                },
              },
              {
                key: "componentDidUpdate",
                value: function () {
                  this._setScrollbarWidth();
                },
              },
              {
                key: "render",
                value: function () {
                  var e = this,
                    o = this.props,
                    l = o.children,
                    i = o.className,
                    s = o.disableHeader,
                    a = o.gridClassName,
                    c = o.gridStyle,
                    d = o.headerHeight,
                    u = o.headerRowRenderer,
                    f = o.height,
                    p = o.id,
                    g = o.noRowsRenderer,
                    v = o.rowClassName,
                    S = o.rowStyle,
                    _ = o.scrollToIndex,
                    T = o.style,
                    w = o.width,
                    b = this.state.scrollbarWidth,
                    I = s ? f : f - d,
                    L = typeof v == "function" ? v({ index: -1 }) : v,
                    y = typeof S == "function" ? S({ index: -1 }) : S;
                  return (
                    (this._cachedColumnStyles = []),
                    C.Children.toArray(l).forEach(function (m, x) {
                      var R = e._getFlexStyleForColumn(
                        m,
                        m.props.style || Me.defaultProps.style,
                      );
                      e._cachedColumnStyles[x] = B({ overflow: "hidden" }, R);
                    }),
                    C.createElement(
                      "div",
                      {
                        "aria-label": this.props["aria-label"],
                        "aria-labelledby": this.props["aria-labelledby"],
                        "aria-colcount": C.Children.toArray(l).length,
                        "aria-rowcount": this.props.rowCount,
                        className: j("ReactVirtualized__Table", i),
                        id: p,
                        role: "grid",
                        style: T,
                      },
                      !s &&
                        u({
                          className: j("ReactVirtualized__Table__headerRow", L),
                          columns: this._getHeaderColumns(),
                          style: B(
                            {
                              height: d,
                              overflow: "hidden",
                              paddingRight: b,
                              width: w,
                            },
                            y,
                          ),
                        }),
                      C.createElement(
                        Q,
                        (0, U.A)({}, this.props, {
                          elementRef: this._setGridElementRef,
                          "aria-readonly": null,
                          autoContainerWidth: !0,
                          className: j("ReactVirtualized__Table__Grid", a),
                          cellRenderer: this._createRow,
                          columnWidth: w,
                          columnCount: 1,
                          height: I,
                          id: void 0,
                          noContentRenderer: g,
                          onScroll: this._onScroll,
                          onSectionRendered: this._onSectionRendered,
                          ref: this._setRef,
                          role: "rowgroup",
                          scrollbarWidth: b,
                          scrollToRow: _,
                          style: B(B({}, c), {}, { overflowX: "hidden" }),
                        }),
                      ),
                    )
                  );
                },
              },
              {
                key: "_createColumn",
                value: function (e) {
                  var o = e.column,
                    l = e.columnIndex,
                    i = e.isScrolling,
                    s = e.parent,
                    a = e.rowData,
                    c = e.rowIndex,
                    d = this.props.onColumnClick,
                    u = o.props,
                    f = u.cellDataGetter,
                    p = u.cellRenderer,
                    g = u.className,
                    v = u.columnData,
                    S = u.dataKey,
                    _ = u.id,
                    T = f({ columnData: v, dataKey: S, rowData: a }),
                    w = p({
                      cellData: T,
                      columnData: v,
                      columnIndex: l,
                      dataKey: S,
                      isScrolling: i,
                      parent: s,
                      rowData: a,
                      rowIndex: c,
                    }),
                    b = function (m) {
                      d && d({ columnData: v, dataKey: S, event: m });
                    },
                    I = this._cachedColumnStyles[l],
                    L = typeof w == "string" ? w : null;
                  return C.createElement(
                    "div",
                    {
                      "aria-colindex": l + 1,
                      "aria-describedby": _,
                      className: j("ReactVirtualized__Table__rowColumn", g),
                      key: "Row" + c + "-Col" + l,
                      onClick: b,
                      role: "gridcell",
                      style: I,
                      title: L,
                    },
                    w,
                  );
                },
              },
              {
                key: "_createHeader",
                value: function (e) {
                  var o = e.column,
                    l = e.index,
                    i = this.props,
                    s = i.headerClassName,
                    a = i.headerStyle,
                    c = i.onHeaderClick,
                    d = i.sort,
                    u = i.sortBy,
                    f = i.sortDirection,
                    p = o.props,
                    g = p.columnData,
                    v = p.dataKey,
                    S = p.defaultSortDirection,
                    _ = p.disableSort,
                    T = p.headerRenderer,
                    w = p.id,
                    b = p.label,
                    I = !_ && d,
                    L = j(
                      "ReactVirtualized__Table__headerColumn",
                      s,
                      o.props.headerClassName,
                      { ReactVirtualized__Table__sortableHeaderColumn: I },
                    ),
                    y = this._getFlexStyleForColumn(
                      o,
                      B(B({}, a), o.props.headerStyle),
                    ),
                    m = T({
                      columnData: g,
                      dataKey: v,
                      disableSort: _,
                      label: b,
                      sortBy: u,
                      sortDirection: f,
                    }),
                    x,
                    R,
                    z,
                    W,
                    G;
                  if (I || c) {
                    var H = u !== v,
                      $ = H ? S : f === K.DESC ? K.ASC : K.DESC,
                      Z = function (le) {
                        I &&
                          d({
                            defaultSortDirection: S,
                            event: le,
                            sortBy: v,
                            sortDirection: $,
                          }),
                          c && c({ columnData: g, dataKey: v, event: le });
                      },
                      he = function (le) {
                        (le.key === "Enter" || le.key === " ") && Z(le);
                      };
                    (G = o.props["aria-label"] || b || v),
                      (W = "none"),
                      (z = 0),
                      (x = Z),
                      (R = he);
                  }
                  return (
                    u === v && (W = f === K.ASC ? "ascending" : "descending"),
                    C.createElement(
                      "div",
                      {
                        "aria-label": G,
                        "aria-sort": W,
                        className: L,
                        id: w,
                        key: "Header-Col" + l,
                        onClick: x,
                        onKeyDown: R,
                        role: "columnheader",
                        style: y,
                        tabIndex: z,
                      },
                      m,
                    )
                  );
                },
              },
              {
                key: "_createRow",
                value: function (e) {
                  var o = this,
                    l = e.rowIndex,
                    i = e.isScrolling,
                    s = e.key,
                    a = e.parent,
                    c = e.style,
                    d = this.props,
                    u = d.children,
                    f = d.onRowClick,
                    p = d.onRowDoubleClick,
                    g = d.onRowRightClick,
                    v = d.onRowMouseOver,
                    S = d.onRowMouseOut,
                    _ = d.rowClassName,
                    T = d.rowGetter,
                    w = d.rowRenderer,
                    b = d.rowStyle,
                    I = this.state.scrollbarWidth,
                    L = typeof _ == "function" ? _({ index: l }) : _,
                    y = typeof b == "function" ? b({ index: l }) : b,
                    m = T({ index: l }),
                    x = C.Children.toArray(u).map(function (W, G) {
                      return o._createColumn({
                        column: W,
                        columnIndex: G,
                        isScrolling: i,
                        parent: a,
                        rowData: m,
                        rowIndex: l,
                        scrollbarWidth: I,
                      });
                    }),
                    R = j("ReactVirtualized__Table__row", L),
                    z = B(
                      B({}, c),
                      {},
                      {
                        height: this._getRowHeight(l),
                        overflow: "hidden",
                        paddingRight: I,
                      },
                      y,
                    );
                  return w({
                    className: R,
                    columns: x,
                    index: l,
                    isScrolling: i,
                    key: s,
                    onRowClick: f,
                    onRowDoubleClick: p,
                    onRowRightClick: g,
                    onRowMouseOver: v,
                    onRowMouseOut: S,
                    rowData: m,
                    style: z,
                  });
                },
              },
              {
                key: "_getFlexStyleForColumn",
                value: function (e) {
                  var o =
                      arguments.length > 1 && arguments[1] !== void 0
                        ? arguments[1]
                        : {},
                    l = ""
                      .concat(e.props.flexGrow, " ")
                      .concat(e.props.flexShrink, " ")
                      .concat(e.props.width, "px"),
                    i = B(B({}, o), {}, { flex: l, msFlex: l, WebkitFlex: l });
                  return (
                    e.props.maxWidth && (i.maxWidth = e.props.maxWidth),
                    e.props.minWidth && (i.minWidth = e.props.minWidth),
                    i
                  );
                },
              },
              {
                key: "_getHeaderColumns",
                value: function () {
                  var e = this,
                    o = this.props,
                    l = o.children,
                    i = o.disableHeader,
                    s = i ? [] : C.Children.toArray(l);
                  return s.map(function (a, c) {
                    return e._createHeader({ column: a, index: c });
                  });
                },
              },
              {
                key: "_getRowHeight",
                value: function (e) {
                  var o = this.props.rowHeight;
                  return typeof o == "function" ? o({ index: e }) : o;
                },
              },
              {
                key: "_onScroll",
                value: function (e) {
                  var o = e.clientHeight,
                    l = e.scrollHeight,
                    i = e.scrollTop,
                    s = this.props.onScroll;
                  s({ clientHeight: o, scrollHeight: l, scrollTop: i });
                },
              },
              {
                key: "_onSectionRendered",
                value: function (e) {
                  var o = e.rowOverscanStartIndex,
                    l = e.rowOverscanStopIndex,
                    i = e.rowStartIndex,
                    s = e.rowStopIndex,
                    a = this.props.onRowsRendered;
                  a({
                    overscanStartIndex: o,
                    overscanStopIndex: l,
                    startIndex: i,
                    stopIndex: s,
                  });
                },
              },
              {
                key: "_setRef",
                value: function (e) {
                  this.Grid = e;
                },
              },
              {
                key: "_setGridElementRef",
                value: function (e) {
                  this.GridElement = e;
                },
              },
              {
                key: "_setScrollbarWidth",
                value: function () {
                  var e = this.getScrollbarWidth();
                  this.setState({ scrollbarWidth: e });
                },
              },
            ])
          );
        })(C.PureComponent);
        (0, h.A)(xt, "defaultProps", {
          disableHeader: !1,
          estimatedRowSize: 30,
          headerHeight: 0,
          headerStyle: {},
          noRowsRenderer: function () {
            return null;
          },
          onRowsRendered: function () {
            return null;
          },
          onScroll: function () {
            return null;
          },
          overscanIndicesGetter: it,
          overscanRowCount: 10,
          rowRenderer: sr,
          headerRowRenderer: nr,
          rowStyle: {},
          scrollToAlignment: "auto",
          scrollToIndex: -1,
          style: {},
        }),
          (xt.propTypes = {});
        const kr = null;
        var q = [],
          de = null,
          Y = null;
        function bt() {
          Y &&
            ((Y = null),
            document.body &&
              de != null &&
              (document.body.style.pointerEvents = de),
            (de = null));
        }
        function hr() {
          bt(),
            q.forEach(function (n) {
              return n.__resetIsScrolling();
            });
        }
        function fr() {
          Y && oe(Y);
          var n = 0;
          q.forEach(function (r) {
            n = Math.max(n, r.props.scrollingResetTimeInterval);
          }),
            (Y = Ce(hr, n));
        }
        function At(n) {
          n.currentTarget === window &&
            de == null &&
            document.body &&
            ((de = document.body.style.pointerEvents),
            (document.body.style.pointerEvents = "none")),
            fr(),
            q.forEach(function (r) {
              r.props.scrollElement === n.currentTarget &&
                r.__handleWindowScrollEvent();
            });
        }
        function Ot(n, r) {
          q.some(function (t) {
            return t.props.scrollElement === r;
          }) || r.addEventListener("scroll", At),
            q.push(n);
        }
        function Mt(n, r) {
          (q = q.filter(function (t) {
            return t !== n;
          })),
            q.length ||
              (r.removeEventListener("scroll", At), Y && (oe(Y), bt()));
        }
        var Le = function (r) {
            return r === window;
          },
          ue = function (r) {
            return r.getBoundingClientRect();
          };
        function Lt(n, r) {
          if (n)
            if (Le(n)) {
              var t = window,
                e = t.innerHeight,
                o = t.innerWidth;
              return {
                height: typeof e == "number" ? e : 0,
                width: typeof o == "number" ? o : 0,
              };
            } else return ue(n);
          else return { height: r.serverHeight, width: r.serverWidth };
        }
        function pr(n, r) {
          if (Le(r) && document.documentElement) {
            var t = document.documentElement,
              e = ue(n),
              o = ue(t);
            return { top: e.top - o.top, left: e.left - o.left };
          } else {
            var l = Pt(r),
              i = ue(n),
              s = ue(r);
            return {
              top: i.top + l.top - s.top,
              left: i.left + l.left - s.left,
            };
          }
        }
        function Pt(n) {
          return Le(n) && document.documentElement
            ? {
                top:
                  "scrollY" in window
                    ? window.scrollY
                    : document.documentElement.scrollTop,
                left:
                  "scrollX" in window
                    ? window.scrollX
                    : document.documentElement.scrollLeft,
              }
            : { top: n.scrollTop, left: n.scrollLeft };
        }
        function Gt(n, r) {
          var t = Object.keys(n);
          if (Object.getOwnPropertySymbols) {
            var e = Object.getOwnPropertySymbols(n);
            r &&
              (e = e.filter(function (o) {
                return Object.getOwnPropertyDescriptor(n, o).enumerable;
              })),
              t.push.apply(t, e);
          }
          return t;
        }
        function kt(n) {
          for (var r = 1; r < arguments.length; r++) {
            var t = arguments[r] != null ? arguments[r] : {};
            r % 2
              ? Gt(Object(t), !0).forEach(function (e) {
                  (0, h.A)(n, e, t[e]);
                })
              : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(
                    n,
                    Object.getOwnPropertyDescriptors(t),
                  )
                : Gt(Object(t)).forEach(function (e) {
                    Object.defineProperty(
                      n,
                      e,
                      Object.getOwnPropertyDescriptor(t, e),
                    );
                  });
          }
          return n;
        }
        function gr(n, r, t) {
          return (
            (r = (0, M.A)(r)),
            (0, E.A)(
              n,
              Et()
                ? Reflect.construct(r, t || [], (0, M.A)(n).constructor)
                : r.apply(n, t),
            )
          );
        }
        function Et() {
          try {
            var n = !Boolean.prototype.valueOf.call(
              Reflect.construct(Boolean, [], function () {}),
            );
          } catch {}
          return (Et = function () {
            return !!n;
          })();
        }
        var vr = 150,
          Wt = function () {
            return typeof window < "u" ? window : void 0;
          },
          mr = (function (n) {
            function r() {
              var t;
              (0, A.A)(this, r);
              for (
                var e = arguments.length, o = new Array(e), l = 0;
                l < e;
                l++
              )
                o[l] = arguments[l];
              return (
                (t = gr(this, r, [].concat(o))),
                (0, h.A)(t, "_window", Wt()),
                (0, h.A)(t, "_isMounted", !1),
                (0, h.A)(t, "_positionFromTop", 0),
                (0, h.A)(t, "_positionFromLeft", 0),
                (0, h.A)(t, "_detectElementResize", void 0),
                (0, h.A)(t, "_child", void 0),
                (0, h.A)(t, "_windowScrollerRef", C.createRef()),
                (0, h.A)(
                  t,
                  "state",
                  kt(
                    kt({}, Lt(t.props.scrollElement, t.props)),
                    {},
                    { isScrolling: !1, scrollLeft: 0, scrollTop: 0 },
                  ),
                ),
                (0, h.A)(t, "_registerChild", function (i) {
                  i &&
                    !(i instanceof Element) &&
                    console.warn(
                      "WindowScroller registerChild expects to be passed Element or null",
                    ),
                    (t._child = i),
                    t.updatePosition();
                }),
                (0, h.A)(t, "_onChildScroll", function (i) {
                  var s = i.scrollTop;
                  if (t.state.scrollTop !== s) {
                    var a = t.props.scrollElement;
                    a &&
                      (typeof a.scrollTo == "function"
                        ? a.scrollTo(0, s + t._positionFromTop)
                        : (a.scrollTop = s + t._positionFromTop));
                  }
                }),
                (0, h.A)(t, "_registerResizeListener", function (i) {
                  i === window
                    ? window.addEventListener("resize", t._onResize, !1)
                    : t._detectElementResize.addResizeListener(i, t._onResize);
                }),
                (0, h.A)(t, "_unregisterResizeListener", function (i) {
                  i === window
                    ? window.removeEventListener("resize", t._onResize, !1)
                    : i &&
                      t._detectElementResize.removeResizeListener(
                        i,
                        t._onResize,
                      );
                }),
                (0, h.A)(t, "_onResize", function () {
                  t.updatePosition();
                }),
                (0, h.A)(t, "__handleWindowScrollEvent", function () {
                  if (t._isMounted) {
                    var i = t.props.onScroll,
                      s = t.props.scrollElement;
                    if (s) {
                      var a = Pt(s),
                        c = Math.max(0, a.left - t._positionFromLeft),
                        d = Math.max(0, a.top - t._positionFromTop);
                      t.setState({
                        isScrolling: !0,
                        scrollLeft: c,
                        scrollTop: d,
                      }),
                        i({ scrollLeft: c, scrollTop: d });
                    }
                  }
                }),
                (0, h.A)(t, "__resetIsScrolling", function () {
                  t.setState({ isScrolling: !1 });
                }),
                t
              );
            }
            return (
              (0, D.A)(r, n),
              (0, P.A)(r, [
                {
                  key: "updatePosition",
                  value: function () {
                    var e =
                        arguments.length > 0 && arguments[0] !== void 0
                          ? arguments[0]
                          : this.props.scrollElement,
                      o = this.props.onResize,
                      l = this.state,
                      i = l.height,
                      s = l.width,
                      a = this._child || this._windowScrollerRef.current;
                    if (a instanceof Element && e) {
                      var c = pr(a, e);
                      (this._positionFromTop = c.top),
                        (this._positionFromLeft = c.left);
                    }
                    var d = Lt(e, this.props);
                    (i !== d.height || s !== d.width) &&
                      (this.setState({ height: d.height, width: d.width }),
                      o({ height: d.height, width: d.width })),
                      this.props.updateScrollTopOnUpdatePosition === !0 &&
                        (this.__handleWindowScrollEvent(),
                        this.__resetIsScrolling());
                  },
                },
                {
                  key: "componentDidMount",
                  value: function () {
                    var e = this.props.scrollElement;
                    (this._detectElementResize = Ne()),
                      this.updatePosition(e),
                      e && (Ot(this, e), this._registerResizeListener(e)),
                      (this._isMounted = !0);
                  },
                },
                {
                  key: "componentDidUpdate",
                  value: function (e, o) {
                    var l = this.props.scrollElement,
                      i = e.scrollElement;
                    i !== l &&
                      i != null &&
                      l != null &&
                      (this.updatePosition(l),
                      Mt(this, i),
                      Ot(this, l),
                      this._unregisterResizeListener(i),
                      this._registerResizeListener(l));
                  },
                },
                {
                  key: "componentWillUnmount",
                  value: function () {
                    var e = this.props.scrollElement;
                    e && (Mt(this, e), this._unregisterResizeListener(e)),
                      (this._isMounted = !1);
                  },
                },
                {
                  key: "render",
                  value: function () {
                    var e = this.props.children,
                      o = this.state,
                      l = o.isScrolling,
                      i = o.scrollTop,
                      s = o.scrollLeft,
                      a = o.height,
                      c = o.width;
                    return C.createElement(
                      "div",
                      { ref: this._windowScrollerRef },
                      e({
                        onChildScroll: this._onChildScroll,
                        registerChild: this._registerChild,
                        height: a,
                        isScrolling: l,
                        scrollLeft: s,
                        scrollTop: i,
                        width: c,
                      }),
                    );
                  },
                },
              ])
            );
          })(C.PureComponent);
        (0, h.A)(mr, "defaultProps", {
          onResize: function () {},
          onScroll: function () {},
          scrollingResetTimeInterval: vr,
          scrollElement: Wt(),
          serverHeight: 0,
          serverWidth: 0,
        });
        const Er = null;
      },
      54273: (Se, J, O) => {
        O.d(J, { j: () => A });
        function A(P) {
          return P;
        }
      },
    },
  ]);
})();
