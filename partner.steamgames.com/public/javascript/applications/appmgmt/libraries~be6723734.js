/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
"use strict";
(self.webpackChunkappmgmt_storeadmin =
  self.webpackChunkappmgmt_storeadmin || []).push([
  [5557],
  {
    39234: (t, e, n) => {
      function s(t, e) {
        t.classList
          ? t.classList.add(e)
          : (function (t, e) {
              return t.classList
                ? !!e && t.classList.contains(e)
                : -1 !==
                    (" " + (t.className.baseVal || t.className) + " ").indexOf(
                      " " + e + " ",
                    );
            })(t, e) ||
            ("string" == typeof t.className
              ? (t.className = t.className + " " + e)
              : t.setAttribute(
                  "class",
                  ((t.className && t.className.baseVal) || "") + " " + e,
                ));
      }
      n.d(e, { A: () => s });
    },
    16673: (t, e, n) => {
      function s(t, e) {
        return t
          .replace(new RegExp("(^|\\s)" + e + "(?:\\s|$)", "g"), "$1")
          .replace(/\s+/g, " ")
          .replace(/^\s*|\s*$/g, "");
      }
      function a(t, e) {
        t.classList
          ? t.classList.remove(e)
          : "string" == typeof t.className
            ? (t.className = s(t.className, e))
            : t.setAttribute(
                "class",
                s((t.className && t.className.baseVal) || "", e),
              );
      }
      n.d(e, { A: () => a });
    },
    80724: (t, e, n) => {
      n.d(e, { A: () => A });
      var s = n(58584),
        a = n(81115),
        i = n(42891),
        o = n(39234),
        r = n(16673),
        p = n(90626),
        l = n(72739);
      const u = !1;
      var c = n(28679),
        d = function (t) {
          return t.scrollTop;
        },
        f = "unmounted",
        E = "exited",
        h = "entering",
        m = "entered",
        x = "exiting",
        v = (function (t) {
          function e(e, n) {
            var s;
            s = t.call(this, e, n) || this;
            var a,
              i = n && !n.isMounting ? e.enter : e.appear;
            return (
              (s.appearStatus = null),
              e.in
                ? i
                  ? ((a = E), (s.appearStatus = h))
                  : (a = m)
                : (a = e.unmountOnExit || e.mountOnEnter ? f : E),
              (s.state = { status: a }),
              (s.nextCallback = null),
              s
            );
          }
          (0, i.A)(e, t),
            (e.getDerivedStateFromProps = function (t, e) {
              return t.in && e.status === f ? { status: E } : null;
            });
          var n = e.prototype;
          return (
            (n.componentDidMount = function () {
              this.updateStatus(!0, this.appearStatus);
            }),
            (n.componentDidUpdate = function (t) {
              var e = null;
              if (t !== this.props) {
                var n = this.state.status;
                this.props.in
                  ? n !== h && n !== m && (e = h)
                  : (n !== h && n !== m) || (e = x);
              }
              this.updateStatus(!1, e);
            }),
            (n.componentWillUnmount = function () {
              this.cancelNextCallback();
            }),
            (n.getTimeouts = function () {
              var t,
                e,
                n,
                s = this.props.timeout;
              return (
                (t = e = n = s),
                null != s &&
                  "number" != typeof s &&
                  ((t = s.exit),
                  (e = s.enter),
                  (n = void 0 !== s.appear ? s.appear : e)),
                { exit: t, enter: e, appear: n }
              );
            }),
            (n.updateStatus = function (t, e) {
              if ((void 0 === t && (t = !1), null !== e))
                if ((this.cancelNextCallback(), e === h)) {
                  if (this.props.unmountOnExit || this.props.mountOnEnter) {
                    var n = this.props.nodeRef
                      ? this.props.nodeRef.current
                      : l.findDOMNode(this);
                    n && d(n);
                  }
                  this.performEnter(t);
                } else this.performExit();
              else
                this.props.unmountOnExit &&
                  this.state.status === E &&
                  this.setState({ status: f });
            }),
            (n.performEnter = function (t) {
              var e = this,
                n = this.props.enter,
                s = this.context ? this.context.isMounting : t,
                a = this.props.nodeRef ? [s] : [l.findDOMNode(this), s],
                i = a[0],
                o = a[1],
                r = this.getTimeouts(),
                p = s ? r.appear : r.enter;
              (!t && !n) || u
                ? this.safeSetState({ status: m }, function () {
                    e.props.onEntered(i);
                  })
                : (this.props.onEnter(i, o),
                  this.safeSetState({ status: h }, function () {
                    e.props.onEntering(i, o),
                      e.onTransitionEnd(p, function () {
                        e.safeSetState({ status: m }, function () {
                          e.props.onEntered(i, o);
                        });
                      });
                  }));
            }),
            (n.performExit = function () {
              var t = this,
                e = this.props.exit,
                n = this.getTimeouts(),
                s = this.props.nodeRef ? void 0 : l.findDOMNode(this);
              e && !u
                ? (this.props.onExit(s),
                  this.safeSetState({ status: x }, function () {
                    t.props.onExiting(s),
                      t.onTransitionEnd(n.exit, function () {
                        t.safeSetState({ status: E }, function () {
                          t.props.onExited(s);
                        });
                      });
                  }))
                : this.safeSetState({ status: E }, function () {
                    t.props.onExited(s);
                  });
            }),
            (n.cancelNextCallback = function () {
              null !== this.nextCallback &&
                (this.nextCallback.cancel(), (this.nextCallback = null));
            }),
            (n.safeSetState = function (t, e) {
              (e = this.setNextCallback(e)), this.setState(t, e);
            }),
            (n.setNextCallback = function (t) {
              var e = this,
                n = !0;
              return (
                (this.nextCallback = function (s) {
                  n && ((n = !1), (e.nextCallback = null), t(s));
                }),
                (this.nextCallback.cancel = function () {
                  n = !1;
                }),
                this.nextCallback
              );
            }),
            (n.onTransitionEnd = function (t, e) {
              this.setNextCallback(e);
              var n = this.props.nodeRef
                  ? this.props.nodeRef.current
                  : l.findDOMNode(this),
                s = null == t && !this.props.addEndListener;
              if (n && !s) {
                if (this.props.addEndListener) {
                  var a = this.props.nodeRef
                      ? [this.nextCallback]
                      : [n, this.nextCallback],
                    i = a[0],
                    o = a[1];
                  this.props.addEndListener(i, o);
                }
                null != t && setTimeout(this.nextCallback, t);
              } else setTimeout(this.nextCallback, 0);
            }),
            (n.render = function () {
              var t = this.state.status;
              if (t === f) return null;
              var e = this.props,
                n = e.children,
                s =
                  (e.in,
                  e.mountOnEnter,
                  e.unmountOnExit,
                  e.appear,
                  e.enter,
                  e.exit,
                  e.timeout,
                  e.addEndListener,
                  e.onEnter,
                  e.onEntering,
                  e.onEntered,
                  e.onExit,
                  e.onExiting,
                  e.onExited,
                  e.nodeRef,
                  (0, a.A)(e, [
                    "children",
                    "in",
                    "mountOnEnter",
                    "unmountOnExit",
                    "appear",
                    "enter",
                    "exit",
                    "timeout",
                    "addEndListener",
                    "onEnter",
                    "onEntering",
                    "onEntered",
                    "onExit",
                    "onExiting",
                    "onExited",
                    "nodeRef",
                  ]));
              return p.createElement(
                c.A.Provider,
                { value: null },
                "function" == typeof n
                  ? n(t, s)
                  : p.cloneElement(p.Children.only(n), s),
              );
            }),
            e
          );
        })(p.Component);
      function C() {}
      (v.contextType = c.A),
        (v.propTypes = {}),
        (v.defaultProps = {
          in: !1,
          mountOnEnter: !1,
          unmountOnExit: !1,
          appear: !1,
          enter: !0,
          exit: !0,
          onEnter: C,
          onEntering: C,
          onEntered: C,
          onExit: C,
          onExiting: C,
          onExited: C,
        }),
        (v.UNMOUNTED = f),
        (v.EXITED = E),
        (v.ENTERING = h),
        (v.ENTERED = m),
        (v.EXITING = x);
      const g = v;
      var N = function (t, e) {
          return (
            t &&
            e &&
            e.split(" ").forEach(function (e) {
              return (0, r.A)(t, e);
            })
          );
        },
        b = (function (t) {
          function e() {
            for (
              var e, n = arguments.length, s = new Array(n), a = 0;
              a < n;
              a++
            )
              s[a] = arguments[a];
            return (
              ((e = t.call.apply(t, [this].concat(s)) || this).appliedClasses =
                { appear: {}, enter: {}, exit: {} }),
              (e.onEnter = function (t, n) {
                var s = e.resolveArguments(t, n),
                  a = s[0],
                  i = s[1];
                e.removeClasses(a, "exit"),
                  e.addClass(a, i ? "appear" : "enter", "base"),
                  e.props.onEnter && e.props.onEnter(t, n);
              }),
              (e.onEntering = function (t, n) {
                var s = e.resolveArguments(t, n),
                  a = s[0],
                  i = s[1] ? "appear" : "enter";
                e.addClass(a, i, "active"),
                  e.props.onEntering && e.props.onEntering(t, n);
              }),
              (e.onEntered = function (t, n) {
                var s = e.resolveArguments(t, n),
                  a = s[0],
                  i = s[1] ? "appear" : "enter";
                e.removeClasses(a, i),
                  e.addClass(a, i, "done"),
                  e.props.onEntered && e.props.onEntered(t, n);
              }),
              (e.onExit = function (t) {
                var n = e.resolveArguments(t)[0];
                e.removeClasses(n, "appear"),
                  e.removeClasses(n, "enter"),
                  e.addClass(n, "exit", "base"),
                  e.props.onExit && e.props.onExit(t);
              }),
              (e.onExiting = function (t) {
                var n = e.resolveArguments(t)[0];
                e.addClass(n, "exit", "active"),
                  e.props.onExiting && e.props.onExiting(t);
              }),
              (e.onExited = function (t) {
                var n = e.resolveArguments(t)[0];
                e.removeClasses(n, "exit"),
                  e.addClass(n, "exit", "done"),
                  e.props.onExited && e.props.onExited(t);
              }),
              (e.resolveArguments = function (t, n) {
                return e.props.nodeRef ? [e.props.nodeRef.current, t] : [t, n];
              }),
              (e.getClassNames = function (t) {
                var n = e.props.classNames,
                  s = "string" == typeof n,
                  a = s ? "" + (s && n ? n + "-" : "") + t : n[t];
                return {
                  baseClassName: a,
                  activeClassName: s ? a + "-active" : n[t + "Active"],
                  doneClassName: s ? a + "-done" : n[t + "Done"],
                };
              }),
              e
            );
          }
          (0, i.A)(e, t);
          var n = e.prototype;
          return (
            (n.addClass = function (t, e, n) {
              var s = this.getClassNames(e)[n + "ClassName"],
                a = this.getClassNames("enter").doneClassName;
              "appear" === e && "done" === n && a && (s += " " + a),
                "active" === n && t && d(t),
                s &&
                  ((this.appliedClasses[e][n] = s),
                  (function (t, e) {
                    t &&
                      e &&
                      e.split(" ").forEach(function (e) {
                        return (0, o.A)(t, e);
                      });
                  })(t, s));
            }),
            (n.removeClasses = function (t, e) {
              var n = this.appliedClasses[e],
                s = n.base,
                a = n.active,
                i = n.done;
              (this.appliedClasses[e] = {}),
                s && N(t, s),
                a && N(t, a),
                i && N(t, i);
            }),
            (n.render = function () {
              var t = this.props,
                e = (t.classNames, (0, a.A)(t, ["classNames"]));
              return p.createElement(
                g,
                (0, s.A)({}, e, {
                  onEnter: this.onEnter,
                  onEntered: this.onEntered,
                  onEntering: this.onEntering,
                  onExit: this.onExit,
                  onExiting: this.onExiting,
                  onExited: this.onExited,
                }),
              );
            }),
            e
          );
        })(p.Component);
      (b.defaultProps = { classNames: "" }), (b.propTypes = {});
      const A = b;
    },
    28679: (t, e, n) => {
      n.d(e, { A: () => s });
      const s = n(90626).createContext(null);
    },
  },
]);
