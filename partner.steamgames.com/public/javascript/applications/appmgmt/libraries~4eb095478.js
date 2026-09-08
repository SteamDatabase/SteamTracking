/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
"use strict";
(self.webpackChunkappmgmt_storeadmin =
  self.webpackChunkappmgmt_storeadmin || []).push([
  [1784],
  {
    121: (e, r, t) => {
      t.d(r, { JY: () => fi, sx: () => Ji, gL: () => Zi });
      var n = t(90626),
        i = t(42891),
        o = t(58584),
        a = t(3998),
        l = n.createContext(null);
      var u = function (e) {
          e();
        },
        c = function () {
          return u;
        };
      var s = {
        notify: function () {},
        get: function () {
          return [];
        },
      };
      function d(e, r) {
        var t,
          n = s;
        function i() {
          a.onStateChange && a.onStateChange();
        }
        function o() {
          t ||
            ((t = r ? r.addNestedSub(i) : e.subscribe(i)),
            (n = (function () {
              var e = c(),
                r = null,
                t = null;
              return {
                clear: function () {
                  (r = null), (t = null);
                },
                notify: function () {
                  e(function () {
                    for (var e = r; e; ) e.callback(), (e = e.next);
                  });
                },
                get: function () {
                  for (var e = [], t = r; t; ) e.push(t), (t = t.next);
                  return e;
                },
                subscribe: function (e) {
                  var n = !0,
                    i = (t = { callback: e, next: null, prev: t });
                  return (
                    i.prev ? (i.prev.next = i) : (r = i),
                    function () {
                      n &&
                        null !== r &&
                        ((n = !1),
                        i.next ? (i.next.prev = i.prev) : (t = i.prev),
                        i.prev ? (i.prev.next = i.next) : (r = i.next));
                    }
                  );
                },
              };
            })()));
        }
        var a = {
          addNestedSub: function (e) {
            return o(), n.subscribe(e);
          },
          notifyNestedSubs: function () {
            n.notify();
          },
          handleChangeWrapper: i,
          isSubscribed: function () {
            return Boolean(t);
          },
          trySubscribe: o,
          tryUnsubscribe: function () {
            t && (t(), (t = void 0), n.clear(), (n = s));
          },
          getListeners: function () {
            return n;
          },
        };
        return a;
      }
      var p =
        "undefined" != typeof window &&
        void 0 !== window.document &&
        void 0 !== window.document.createElement
          ? n.useLayoutEffect
          : n.useEffect;
      const f = function (e) {
        var r = e.store,
          t = e.context,
          i = e.children,
          o = (0, n.useMemo)(
            function () {
              var e = d(r);
              return { store: r, subscription: e };
            },
            [r],
          ),
          a = (0, n.useMemo)(
            function () {
              return r.getState();
            },
            [r],
          );
        p(
          function () {
            var e = o.subscription;
            return (
              (e.onStateChange = e.notifyNestedSubs),
              e.trySubscribe(),
              a !== r.getState() && e.notifyNestedSubs(),
              function () {
                e.tryUnsubscribe(), (e.onStateChange = null);
              }
            );
          },
          [o, a],
        );
        var u = t || l;
        return n.createElement(u.Provider, { value: o }, i);
      };
      var g = t(81115),
        v = t(904),
        m = t.n(v),
        b = t(44019),
        h = [
          "getDisplayName",
          "methodName",
          "renderCountProp",
          "shouldHandleStateChanges",
          "storeKey",
          "withRef",
          "forwardRef",
          "context",
        ],
        y = ["reactReduxForwardedRef"],
        I = [],
        D = [null, null];
      function x(e, r) {
        var t = e[1];
        return [r.payload, t + 1];
      }
      function w(e, r, t) {
        p(function () {
          return e.apply(void 0, r);
        }, t);
      }
      function A(e, r, t, n, i, o, a) {
        (e.current = n),
          (r.current = i),
          (t.current = !1),
          o.current && ((o.current = null), a());
      }
      function E(e, r, t, n, i, o, a, l, u, c) {
        if (e) {
          var s = !1,
            d = null,
            p = function () {
              if (!s) {
                var e,
                  t,
                  p = r.getState();
                try {
                  e = n(p, i.current);
                } catch (e) {
                  (t = e), (d = e);
                }
                t || (d = null),
                  e === o.current
                    ? a.current || u()
                    : ((o.current = e),
                      (l.current = e),
                      (a.current = !0),
                      c({ type: "STORE_UPDATED", payload: { error: t } }));
              }
            };
          (t.onStateChange = p), t.trySubscribe(), p();
          return function () {
            if (((s = !0), t.tryUnsubscribe(), (t.onStateChange = null), d))
              throw d;
          };
        }
      }
      var C = function () {
        return [null, 0];
      };
      function P(e, r) {
        void 0 === r && (r = {});
        var t = r,
          i = t.getDisplayName,
          a =
            void 0 === i
              ? function (e) {
                  return "ConnectAdvanced(" + e + ")";
                }
              : i,
          u = t.methodName,
          c = void 0 === u ? "connectAdvanced" : u,
          s = t.renderCountProp,
          p = void 0 === s ? void 0 : s,
          f = t.shouldHandleStateChanges,
          v = void 0 === f || f,
          P = t.storeKey,
          S = void 0 === P ? "store" : P,
          N = (t.withRef, t.forwardRef),
          O = void 0 !== N && N,
          R = t.context,
          B = void 0 === R ? l : R,
          T = (0, g.A)(t, h),
          L = B;
        return function (r) {
          var t = r.displayName || r.name || "Component",
            i = a(t),
            l = (0, o.A)({}, T, {
              getDisplayName: a,
              methodName: c,
              renderCountProp: p,
              shouldHandleStateChanges: v,
              storeKey: S,
              displayName: i,
              wrappedComponentName: t,
              WrappedComponent: r,
            }),
            u = T.pure;
          var s = u
            ? n.useMemo
            : function (e) {
                return e();
              };
          function f(t) {
            var i = (0, n.useMemo)(
                function () {
                  var e = t.reactReduxForwardedRef,
                    r = (0, g.A)(t, y);
                  return [t.context, e, r];
                },
                [t],
              ),
              a = i[0],
              u = i[1],
              c = i[2],
              p = (0, n.useMemo)(
                function () {
                  return a &&
                    a.Consumer &&
                    (0, b.isContextConsumer)(n.createElement(a.Consumer, null))
                    ? a
                    : L;
                },
                [a, L],
              ),
              f = (0, n.useContext)(p),
              m =
                Boolean(t.store) &&
                Boolean(t.store.getState) &&
                Boolean(t.store.dispatch);
            Boolean(f) && Boolean(f.store);
            var h = m ? t.store : f.store,
              P = (0, n.useMemo)(
                function () {
                  return (function (r) {
                    return e(r.dispatch, l);
                  })(h);
                },
                [h],
              ),
              S = (0, n.useMemo)(
                function () {
                  if (!v) return D;
                  var e = d(h, m ? null : f.subscription),
                    r = e.notifyNestedSubs.bind(e);
                  return [e, r];
                },
                [h, m, f],
              ),
              N = S[0],
              O = S[1],
              R = (0, n.useMemo)(
                function () {
                  return m ? f : (0, o.A)({}, f, { subscription: N });
                },
                [m, f, N],
              ),
              B = (0, n.useReducer)(x, I, C),
              T = B[0][0],
              G = B[1];
            if (T && T.error) throw T.error;
            var M = (0, n.useRef)(),
              _ = (0, n.useRef)(c),
              F = (0, n.useRef)(),
              k = (0, n.useRef)(!1),
              W = s(
                function () {
                  return F.current && c === _.current
                    ? F.current
                    : P(h.getState(), c);
                },
                [h, T, c],
              );
            w(A, [_, M, k, c, W, F, O]),
              w(E, [v, h, N, P, _, M, k, F, O, G], [h, N, P]);
            var U = (0, n.useMemo)(
              function () {
                return n.createElement(r, (0, o.A)({}, W, { ref: u }));
              },
              [u, r, W],
            );
            return (0, n.useMemo)(
              function () {
                return v ? n.createElement(p.Provider, { value: R }, U) : U;
              },
              [p, U, R],
            );
          }
          var h = u ? n.memo(f) : f;
          if (
            ((h.WrappedComponent = r), (h.displayName = f.displayName = i), O)
          ) {
            var P = n.forwardRef(function (e, r) {
              return n.createElement(
                h,
                (0, o.A)({}, e, { reactReduxForwardedRef: r }),
              );
            });
            return (P.displayName = i), (P.WrappedComponent = r), m()(P, r);
          }
          return m()(h, r);
        };
      }
      function S(e, r) {
        return e === r
          ? 0 !== e || 0 !== r || 1 / e == 1 / r
          : e != e && r != r;
      }
      function N(e, r) {
        if (S(e, r)) return !0;
        if (
          "object" != typeof e ||
          null === e ||
          "object" != typeof r ||
          null === r
        )
          return !1;
        var t = Object.keys(e),
          n = Object.keys(r);
        if (t.length !== n.length) return !1;
        for (var i = 0; i < t.length; i++)
          if (
            !Object.prototype.hasOwnProperty.call(r, t[i]) ||
            !S(e[t[i]], r[t[i]])
          )
            return !1;
        return !0;
      }
      function O(e) {
        return function (r, t) {
          var n = e(r, t);
          function i() {
            return n;
          }
          return (i.dependsOnOwnProps = !1), i;
        };
      }
      function R(e) {
        return null !== e.dependsOnOwnProps && void 0 !== e.dependsOnOwnProps
          ? Boolean(e.dependsOnOwnProps)
          : 1 !== e.length;
      }
      function B(e, r) {
        return function (r, t) {
          t.displayName;
          var n = function (e, r) {
            return n.dependsOnOwnProps ? n.mapToProps(e, r) : n.mapToProps(e);
          };
          return (
            (n.dependsOnOwnProps = !0),
            (n.mapToProps = function (r, t) {
              (n.mapToProps = e), (n.dependsOnOwnProps = R(e));
              var i = n(r, t);
              return (
                "function" == typeof i &&
                  ((n.mapToProps = i),
                  (n.dependsOnOwnProps = R(i)),
                  (i = n(r, t))),
                i
              );
            }),
            n
          );
        };
      }
      const T = [
        function (e) {
          return "function" == typeof e ? B(e) : void 0;
        },
        function (e) {
          return e
            ? void 0
            : O(function (e) {
                return { dispatch: e };
              });
        },
        function (e) {
          return e && "object" == typeof e
            ? O(function (r) {
                return (function (e, r) {
                  var t = {},
                    n = function (n) {
                      var i = e[n];
                      "function" == typeof i &&
                        (t[n] = function () {
                          return r(i.apply(void 0, arguments));
                        });
                    };
                  for (var i in e) n(i);
                  return t;
                })(e, r);
              })
            : void 0;
        },
      ];
      const L = [
        function (e) {
          return "function" == typeof e ? B(e) : void 0;
        },
        function (e) {
          return e
            ? void 0
            : O(function () {
                return {};
              });
        },
      ];
      function G(e, r, t) {
        return (0, o.A)({}, t, e, r);
      }
      const M = [
        function (e) {
          return "function" == typeof e
            ? (function (e) {
                return function (r, t) {
                  t.displayName;
                  var n,
                    i = t.pure,
                    o = t.areMergedPropsEqual,
                    a = !1;
                  return function (r, t, l) {
                    var u = e(r, t, l);
                    return (
                      a ? (i && o(u, n)) || (n = u) : ((a = !0), (n = u)), n
                    );
                  };
                };
              })(e)
            : void 0;
        },
        function (e) {
          return e
            ? void 0
            : function () {
                return G;
              };
        },
      ];
      var _ = [
        "initMapStateToProps",
        "initMapDispatchToProps",
        "initMergeProps",
      ];
      function F(e, r, t, n) {
        return function (i, o) {
          return t(e(i, o), r(n, o), o);
        };
      }
      function k(e, r, t, n, i) {
        var o,
          a,
          l,
          u,
          c,
          s = i.areStatesEqual,
          d = i.areOwnPropsEqual,
          p = i.areStatePropsEqual,
          f = !1;
        function g(i, f) {
          var g,
            v,
            m = !d(f, a),
            b = !s(i, o, f, a);
          return (
            (o = i),
            (a = f),
            m && b
              ? ((l = e(o, a)),
                r.dependsOnOwnProps && (u = r(n, a)),
                (c = t(l, u, a)))
              : m
                ? (e.dependsOnOwnProps && (l = e(o, a)),
                  r.dependsOnOwnProps && (u = r(n, a)),
                  (c = t(l, u, a)))
                : b
                  ? ((g = e(o, a)),
                    (v = !p(g, l)),
                    (l = g),
                    v && (c = t(l, u, a)),
                    c)
                  : c
          );
        }
        return function (i, s) {
          return f
            ? g(i, s)
            : ((l = e((o = i), (a = s))),
              (u = r(n, a)),
              (c = t(l, u, a)),
              (f = !0),
              c);
        };
      }
      function W(e, r) {
        var t = r.initMapStateToProps,
          n = r.initMapDispatchToProps,
          i = r.initMergeProps,
          o = (0, g.A)(r, _),
          a = t(e, o),
          l = n(e, o),
          u = i(e, o);
        return (o.pure ? k : F)(a, l, u, e, o);
      }
      var U = [
        "pure",
        "areStatesEqual",
        "areOwnPropsEqual",
        "areStatePropsEqual",
        "areMergedPropsEqual",
      ];
      function H(e, r, t) {
        for (var n = r.length - 1; n >= 0; n--) {
          var i = r[n](e);
          if (i) return i;
        }
        return function (r, n) {
          throw new Error(
            "Invalid value of type " +
              typeof e +
              " for " +
              t +
              " argument when connecting component " +
              n.wrappedComponentName +
              ".",
          );
        };
      }
      function j(e, r) {
        return e === r;
      }
      function q(e) {
        var r = void 0 === e ? {} : e,
          t = r.connectHOC,
          n = void 0 === t ? P : t,
          i = r.mapStateToPropsFactories,
          a = void 0 === i ? L : i,
          l = r.mapDispatchToPropsFactories,
          u = void 0 === l ? T : l,
          c = r.mergePropsFactories,
          s = void 0 === c ? M : c,
          d = r.selectorFactory,
          p = void 0 === d ? W : d;
        return function (e, r, t, i) {
          void 0 === i && (i = {});
          var l = i,
            c = l.pure,
            d = void 0 === c || c,
            f = l.areStatesEqual,
            v = void 0 === f ? j : f,
            m = l.areOwnPropsEqual,
            b = void 0 === m ? N : m,
            h = l.areStatePropsEqual,
            y = void 0 === h ? N : h,
            I = l.areMergedPropsEqual,
            D = void 0 === I ? N : I,
            x = (0, g.A)(l, U),
            w = H(e, a, "mapStateToProps"),
            A = H(r, u, "mapDispatchToProps"),
            E = H(t, s, "mergeProps");
          return n(
            p,
            (0, o.A)(
              {
                methodName: "connect",
                getDisplayName: function (e) {
                  return "Connect(" + e + ")";
                },
                shouldHandleStateChanges: Boolean(e),
                initMapStateToProps: w,
                initMapDispatchToProps: A,
                initMergeProps: E,
                pure: d,
                areStatesEqual: v,
                areOwnPropsEqual: b,
                areStatePropsEqual: y,
                areMergedPropsEqual: D,
              },
              x,
            ),
          );
        };
      }
      const V = q();
      var K,
        z = t(72739);
      (K = z.unstable_batchedUpdates), (u = K);
      var Y = t(46311),
        J = t(48046),
        X =
          Number.isNaN ||
          function (e) {
            return "number" == typeof e && e != e;
          };
      function $(e, r) {
        return e === r || !(!X(e) || !X(r));
      }
      function Q(e, r) {
        if (e.length !== r.length) return !1;
        for (var t = 0; t < e.length; t++) if (!$(e[t], r[t])) return !1;
        return !0;
      }
      const Z = function (e, r) {
        var t;
        void 0 === r && (r = Q);
        var n,
          i = [],
          o = !1;
        return function () {
          for (var a = [], l = 0; l < arguments.length; l++)
            a[l] = arguments[l];
          return (
            (o && t === this && r(a, i)) ||
              ((n = e.apply(this, a)), (o = !0), (t = this), (i = a)),
            n
          );
        };
      };
      var ee = t(18651);
      function re(e, r) {}
      re.bind(null, "warn"), re.bind(null, "error");
      function te() {}
      function ne(e, r, t) {
        var n = r.map(function (r) {
          var n = (function (e, r) {
            return (0, o.A)({}, e, {}, r);
          })(t, r.options);
          return (
            e.addEventListener(r.eventName, r.fn, n),
            function () {
              e.removeEventListener(r.eventName, r.fn, n);
            }
          );
        });
        return function () {
          n.forEach(function (e) {
            e();
          });
        };
      }
      var ie = !0,
        oe = "Invariant failed";
      function ae(e) {
        this.message = e;
      }
      function le(e, r) {
        if (!e) throw new ae(ie ? oe : oe + ": " + (r || ""));
      }
      ae.prototype.toString = function () {
        return this.message;
      };
      var ue = (function (e) {
          function r() {
            for (
              var r, t = arguments.length, n = new Array(t), i = 0;
              i < t;
              i++
            )
              n[i] = arguments[i];
            return (
              ((r = e.call.apply(e, [this].concat(n)) || this).callbacks =
                null),
              (r.unbind = te),
              (r.onWindowError = function (e) {
                var t = r.getCallbacks();
                t.isDragging() && t.tryAbort(),
                  e.error instanceof ae && e.preventDefault();
              }),
              (r.getCallbacks = function () {
                if (!r.callbacks)
                  throw new Error(
                    "Unable to find AppCallbacks in <ErrorBoundary/>",
                  );
                return r.callbacks;
              }),
              (r.setCallbacks = function (e) {
                r.callbacks = e;
              }),
              r
            );
          }
          (0, i.A)(r, e);
          var t = r.prototype;
          return (
            (t.componentDidMount = function () {
              this.unbind = ne(window, [
                { eventName: "error", fn: this.onWindowError },
              ]);
            }),
            (t.componentDidCatch = function (e) {
              if (!(e instanceof ae)) throw e;
              this.setState({});
            }),
            (t.componentWillUnmount = function () {
              this.unbind();
            }),
            (t.render = function () {
              return this.props.children(this.setCallbacks);
            }),
            r
          );
        })(n.Component),
        ce = function (e) {
          return e + 1;
        },
        se = function (e, r) {
          var t = e.droppableId === r.droppableId,
            n = ce(e.index),
            i = ce(r.index);
          return t
            ? "\n      You have moved the item from position " +
                n +
                "\n      to position " +
                i +
                "\n    "
            : "\n    You have moved the item from position " +
                n +
                "\n    in list " +
                e.droppableId +
                "\n    to list " +
                r.droppableId +
                "\n    in position " +
                i +
                "\n  ";
        },
        de = function (e, r, t) {
          return r.droppableId === t.droppableId
            ? "\n      The item " +
                e +
                "\n      has been combined with " +
                t.draggableId
            : "\n      The item " +
                e +
                "\n      in list " +
                r.droppableId +
                "\n      has been combined with " +
                t.draggableId +
                "\n      in list " +
                t.droppableId +
                "\n    ";
        },
        pe = function (e) {
          return (
            "\n  The item has returned to its starting position\n  of " +
            ce(e.index) +
            "\n"
          );
        },
        fe = {
          dragHandleUsageInstructions:
            "\n  Press space bar to start a drag.\n  When dragging you can use the arrow keys to move the item around and escape to cancel.\n  Some screen readers may require you to be in focus mode or to use your pass through key\n",
          onDragStart: function (e) {
            return (
              "\n  You have lifted an item in position " +
              ce(e.source.index) +
              "\n"
            );
          },
          onDragUpdate: function (e) {
            var r = e.destination;
            if (r) return se(e.source, r);
            var t = e.combine;
            return t
              ? de(e.draggableId, e.source, t)
              : "You are over an area that cannot be dropped on";
          },
          onDragEnd: function (e) {
            if ("CANCEL" === e.reason)
              return (
                "\n      Movement cancelled.\n      " + pe(e.source) + "\n    "
              );
            var r = e.destination,
              t = e.combine;
            return r
              ? "\n      You have dropped the item.\n      " +
                  se(e.source, r) +
                  "\n    "
              : t
                ? "\n      You have dropped the item.\n      " +
                  de(e.draggableId, e.source, t) +
                  "\n    "
                : "\n    The item has been dropped while not over a drop area.\n    " +
                  pe(e.source) +
                  "\n  ";
          },
        },
        ge = { x: 0, y: 0 },
        ve = function (e, r) {
          return { x: e.x + r.x, y: e.y + r.y };
        },
        me = function (e, r) {
          return { x: e.x - r.x, y: e.y - r.y };
        },
        be = function (e, r) {
          return e.x === r.x && e.y === r.y;
        },
        he = function (e) {
          return { x: 0 !== e.x ? -e.x : 0, y: 0 !== e.y ? -e.y : 0 };
        },
        ye = function (e, r, t) {
          var n;
          return (
            void 0 === t && (t = 0),
            ((n = {})[e] = r),
            (n["x" === e ? "y" : "x"] = t),
            n
          );
        },
        Ie = function (e, r) {
          return Math.sqrt(Math.pow(r.x - e.x, 2) + Math.pow(r.y - e.y, 2));
        },
        De = function (e, r) {
          return Math.min.apply(
            Math,
            r.map(function (r) {
              return Ie(e, r);
            }),
          );
        },
        xe = function (e) {
          return function (r) {
            return { x: e(r.x), y: e(r.y) };
          };
        },
        we = function (e, r) {
          return {
            top: e.top + r.y,
            left: e.left + r.x,
            bottom: e.bottom + r.y,
            right: e.right + r.x,
          };
        },
        Ae = function (e) {
          return [
            { x: e.left, y: e.top },
            { x: e.right, y: e.top },
            { x: e.left, y: e.bottom },
            { x: e.right, y: e.bottom },
          ];
        },
        Ee = function (e, r) {
          return r && r.shouldClipSubject
            ? (function (e, r) {
                var t = (0, J.l)({
                  top: Math.max(r.top, e.top),
                  right: Math.min(r.right, e.right),
                  bottom: Math.min(r.bottom, e.bottom),
                  left: Math.max(r.left, e.left),
                });
                return t.width <= 0 || t.height <= 0 ? null : t;
              })(r.pageMarginBox, e)
            : (0, J.l)(e);
        },
        Ce = function (e) {
          var r = e.page,
            t = e.withPlaceholder,
            n = e.axis,
            i = e.frame,
            a = (function (e, r) {
              return r ? we(e, r.scroll.diff.displacement) : e;
            })(r.marginBox, i),
            l = (function (e, r, t) {
              var n;
              return t && t.increasedBy
                ? (0, o.A)(
                    {},
                    e,
                    (((n = {})[r.end] = e[r.end] + t.increasedBy[r.line]), n),
                  )
                : e;
            })(a, n, t);
          return { page: r, withPlaceholder: t, active: Ee(l, i) };
        },
        Pe = function (e, r) {
          e.frame || le(!1);
          var t = e.frame,
            n = me(r, t.scroll.initial),
            i = he(n),
            a = (0, o.A)({}, t, {
              scroll: {
                initial: t.scroll.initial,
                current: r,
                diff: { value: n, displacement: i },
                max: t.scroll.max,
              },
            }),
            l = Ce({
              page: e.subject.page,
              withPlaceholder: e.subject.withPlaceholder,
              axis: e.axis,
              frame: a,
            });
          return (0, o.A)({}, e, { frame: a, subject: l });
        };
      function Se(e) {
        return Object.values
          ? Object.values(e)
          : Object.keys(e).map(function (r) {
              return e[r];
            });
      }
      function Ne(e, r) {
        if (e.findIndex) return e.findIndex(r);
        for (var t = 0; t < e.length; t++) if (r(e[t])) return t;
        return -1;
      }
      function Oe(e, r) {
        if (e.find) return e.find(r);
        var t = Ne(e, r);
        return -1 !== t ? e[t] : void 0;
      }
      var Re = Z(function (e) {
          return e.reduce(function (e, r) {
            return (e[r.descriptor.id] = r), e;
          }, {});
        }),
        Be = Z(function (e) {
          return e.reduce(function (e, r) {
            return (e[r.descriptor.id] = r), e;
          }, {});
        }),
        Te = Z(function (e) {
          return Se(e);
        }),
        Le = Z(function (e) {
          return Se(e);
        }),
        Ge = Z(function (e, r) {
          var t = Le(r)
            .filter(function (r) {
              return e === r.descriptor.droppableId;
            })
            .sort(function (e, r) {
              return e.descriptor.index - r.descriptor.index;
            });
          return t;
        });
      function Me(e) {
        return e.at && "REORDER" === e.at.type ? e.at.destination : null;
      }
      function _e(e) {
        return e.at && "COMBINE" === e.at.type ? e.at.combine : null;
      }
      var Fe = Z(function (e, r) {
          return r.filter(function (r) {
            return r.descriptor.id !== e.descriptor.id;
          });
        }),
        ke = function (e, r) {
          return e.descriptor.droppableId === r.descriptor.id;
        },
        We = { point: ge, value: 0 },
        Ue = { invisible: {}, visible: {}, all: [] },
        He = { displaced: Ue, displacedBy: We, at: null },
        je = function (e, r) {
          return function (t) {
            return e <= t && t <= r;
          };
        },
        qe = function (e) {
          var r = je(e.top, e.bottom),
            t = je(e.left, e.right);
          return function (n) {
            if (r(n.top) && r(n.bottom) && t(n.left) && t(n.right)) return !0;
            var i = r(n.top) || r(n.bottom),
              o = t(n.left) || t(n.right);
            if (i && o) return !0;
            var a = n.top < e.top && n.bottom > e.bottom,
              l = n.left < e.left && n.right > e.right;
            return !(!a || !l) || (a && o) || (l && i);
          };
        },
        Ve = function (e) {
          var r = je(e.top, e.bottom),
            t = je(e.left, e.right);
          return function (e) {
            return r(e.top) && r(e.bottom) && t(e.left) && t(e.right);
          };
        },
        Ke = {
          direction: "vertical",
          line: "y",
          crossAxisLine: "x",
          start: "top",
          end: "bottom",
          size: "height",
          crossAxisStart: "left",
          crossAxisEnd: "right",
          crossAxisSize: "width",
        },
        ze = {
          direction: "horizontal",
          line: "x",
          crossAxisLine: "y",
          start: "left",
          end: "right",
          size: "width",
          crossAxisStart: "top",
          crossAxisEnd: "bottom",
          crossAxisSize: "height",
        },
        Ye = function (e) {
          var r = e.target,
            t = e.destination,
            n = e.viewport,
            i = e.withDroppableDisplacement,
            o = e.isVisibleThroughFrameFn,
            a = i
              ? (function (e, r) {
                  var t = r.frame ? r.frame.scroll.diff.displacement : ge;
                  return we(e, t);
                })(r, t)
              : r;
          return (
            (function (e, r, t) {
              return !!r.subject.active && t(r.subject.active)(e);
            })(a, t, o) &&
            (function (e, r, t) {
              return t(r)(e);
            })(a, n, o)
          );
        },
        Je = function (e) {
          return Ye((0, o.A)({}, e, { isVisibleThroughFrameFn: qe }));
        },
        Xe = function (e) {
          return Ye((0, o.A)({}, e, { isVisibleThroughFrameFn: Ve }));
        };
      function $e(e) {
        var r = e.afterDragging,
          t = e.destination,
          n = e.displacedBy,
          i = e.viewport,
          o = e.forceShouldAnimate,
          a = e.last;
        return r.reduce(
          function (e, r) {
            var l = (function (e, r) {
                var t = e.page.marginBox,
                  n = { top: r.point.y, right: 0, bottom: 0, left: r.point.x };
                return (0, J.l)((0, J.fT)(t, n));
              })(r, n),
              u = r.descriptor.id;
            if (
              (e.all.push(u),
              !Je({
                target: l,
                destination: t,
                viewport: i,
                withDroppableDisplacement: !0,
              }))
            )
              return (e.invisible[r.descriptor.id] = !0), e;
            var c = (function (e, r, t) {
                if ("boolean" == typeof t) return t;
                if (!r) return !0;
                var n = r.invisible,
                  i = r.visible;
                if (n[e]) return !1;
                var o = i[e];
                return !o || o.shouldAnimate;
              })(u, a, o),
              s = { draggableId: u, shouldAnimate: c };
            return (e.visible[u] = s), e;
          },
          { all: [], visible: {}, invisible: {} },
        );
      }
      function Qe(e) {
        var r = e.insideDestination,
          t = e.inHomeList,
          n = e.displacedBy,
          i = e.destination,
          o = (function (e, r) {
            if (!e.length) return 0;
            var t = e[e.length - 1].descriptor.index;
            return r.inHomeList ? t : t + 1;
          })(r, { inHomeList: t });
        return {
          displaced: Ue,
          displacedBy: n,
          at: {
            type: "REORDER",
            destination: { droppableId: i.descriptor.id, index: o },
          },
        };
      }
      function Ze(e) {
        var r = e.draggable,
          t = e.insideDestination,
          n = e.destination,
          i = e.viewport,
          o = e.displacedBy,
          a = e.last,
          l = e.index,
          u = e.forceShouldAnimate,
          c = ke(r, n);
        if (null == l)
          return Qe({
            insideDestination: t,
            inHomeList: c,
            displacedBy: o,
            destination: n,
          });
        var s = Oe(t, function (e) {
          return e.descriptor.index === l;
        });
        if (!s)
          return Qe({
            insideDestination: t,
            inHomeList: c,
            displacedBy: o,
            destination: n,
          });
        var d = Fe(r, t),
          p = t.indexOf(s);
        return {
          displaced: $e({
            afterDragging: d.slice(p),
            destination: n,
            displacedBy: o,
            last: a,
            viewport: i.frame,
            forceShouldAnimate: u,
          }),
          displacedBy: o,
          at: {
            type: "REORDER",
            destination: { droppableId: n.descriptor.id, index: l },
          },
        };
      }
      function er(e, r) {
        return Boolean(r.effected[e]);
      }
      var rr = function (e) {
          var r = e.isMovingForward,
            t = e.isInHomeList,
            n = e.draggable,
            i = e.draggables,
            o = e.destination,
            a = e.insideDestination,
            l = e.previousImpact,
            u = e.viewport,
            c = e.afterCritical,
            s = l.at;
          if ((s || le(!1), "REORDER" === s.type)) {
            var d = (function (e) {
              var r = e.isMovingForward,
                t = e.isInHomeList,
                n = e.insideDestination,
                i = e.location;
              if (!n.length) return null;
              var o = i.index,
                a = r ? o + 1 : o - 1,
                l = n[0].descriptor.index,
                u = n[n.length - 1].descriptor.index;
              return a < l || a > (t ? u : u + 1) ? null : a;
            })({
              isMovingForward: r,
              isInHomeList: t,
              location: s.destination,
              insideDestination: a,
            });
            return null == d
              ? null
              : Ze({
                  draggable: n,
                  insideDestination: a,
                  destination: o,
                  viewport: u,
                  last: l.displaced,
                  displacedBy: l.displacedBy,
                  index: d,
                });
          }
          var p = (function (e) {
            var r = e.isMovingForward,
              t = e.destination,
              n = e.draggables,
              i = e.combine,
              o = e.afterCritical;
            if (!t.isCombineEnabled) return null;
            var a = i.draggableId,
              l = n[a].descriptor.index;
            return er(a, o) ? (r ? l : l - 1) : r ? l + 1 : l;
          })({
            isMovingForward: r,
            destination: o,
            displaced: l.displaced,
            draggables: i,
            combine: s.combine,
            afterCritical: c,
          });
          return null == p
            ? null
            : Ze({
                draggable: n,
                insideDestination: a,
                destination: o,
                viewport: u,
                last: l.displaced,
                displacedBy: l.displacedBy,
                index: p,
              });
        },
        tr = function (e) {
          var r = e.afterCritical,
            t = e.impact,
            n = e.draggables,
            i = _e(t);
          i || le(!1);
          var o = i.draggableId,
            a = n[o].page.borderBox.center,
            l = (function (e) {
              var r = e.displaced,
                t = e.afterCritical,
                n = e.combineWith,
                i = e.displacedBy,
                o = Boolean(r.visible[n] || r.invisible[n]);
              return er(n, t) ? (o ? ge : he(i.point)) : o ? i.point : ge;
            })({
              displaced: t.displaced,
              afterCritical: r,
              combineWith: o,
              displacedBy: t.displacedBy,
            });
          return ve(a, l);
        },
        nr = function (e, r) {
          return r.margin[e.start] + r.borderBox[e.size] / 2;
        },
        ir = function (e, r, t) {
          return (
            r[e.crossAxisStart] +
            t.margin[e.crossAxisStart] +
            t.borderBox[e.crossAxisSize] / 2
          );
        },
        or = function (e) {
          var r = e.axis,
            t = e.moveRelativeTo,
            n = e.isMoving;
          return ye(
            r.line,
            t.marginBox[r.end] + nr(r, n),
            ir(r, t.marginBox, n),
          );
        },
        ar = function (e) {
          var r = e.axis,
            t = e.moveRelativeTo,
            n = e.isMoving;
          return ye(
            r.line,
            t.marginBox[r.start] -
              (function (e, r) {
                return r.margin[e.end] + r.borderBox[e.size] / 2;
              })(r, n),
            ir(r, t.marginBox, n),
          );
        },
        lr = function (e) {
          var r = e.impact,
            t = e.draggable,
            n = e.draggables,
            i = e.droppable,
            o = e.afterCritical,
            a = Ge(i.descriptor.id, n),
            l = t.page,
            u = i.axis;
          if (!a.length)
            return (function (e) {
              var r = e.axis,
                t = e.moveInto,
                n = e.isMoving;
              return ye(
                r.line,
                t.contentBox[r.start] + nr(r, n),
                ir(r, t.contentBox, n),
              );
            })({ axis: u, moveInto: i.page, isMoving: l });
          var c = r.displaced,
            s = r.displacedBy,
            d = c.all[0];
          if (d) {
            var p = n[d];
            if (er(d, o))
              return ar({ axis: u, moveRelativeTo: p.page, isMoving: l });
            var f = (0, J.cY)(p.page, s.point);
            return ar({ axis: u, moveRelativeTo: f, isMoving: l });
          }
          var g = a[a.length - 1];
          if (g.descriptor.id === t.descriptor.id) return l.borderBox.center;
          if (er(g.descriptor.id, o)) {
            var v = (0, J.cY)(g.page, he(o.displacedBy.point));
            return or({ axis: u, moveRelativeTo: v, isMoving: l });
          }
          return or({ axis: u, moveRelativeTo: g.page, isMoving: l });
        },
        ur = function (e, r) {
          var t = e.frame;
          return t ? ve(r, t.scroll.diff.displacement) : r;
        },
        cr = function (e) {
          var r = (function (e) {
              var r = e.impact,
                t = e.draggable,
                n = e.droppable,
                i = e.draggables,
                o = e.afterCritical,
                a = t.page.borderBox.center,
                l = r.at;
              return n && l
                ? "REORDER" === l.type
                  ? lr({
                      impact: r,
                      draggable: t,
                      draggables: i,
                      droppable: n,
                      afterCritical: o,
                    })
                  : tr({ impact: r, draggables: i, afterCritical: o })
                : a;
            })(e),
            t = e.droppable;
          return t ? ur(t, r) : r;
        },
        sr = function (e, r) {
          var t = me(r, e.scroll.initial),
            n = he(t);
          return {
            frame: (0, J.l)({
              top: r.y,
              bottom: r.y + e.frame.height,
              left: r.x,
              right: r.x + e.frame.width,
            }),
            scroll: {
              initial: e.scroll.initial,
              max: e.scroll.max,
              current: r,
              diff: { value: t, displacement: n },
            },
          };
        };
      function dr(e, r) {
        return e.map(function (e) {
          return r[e];
        });
      }
      var pr = function (e) {
          var r = e.pageBorderBoxCenter,
            t = e.draggable,
            n = (function (e, r) {
              return ve(e.scroll.diff.displacement, r);
            })(e.viewport, r),
            i = me(n, t.page.borderBox.center);
          return ve(t.client.borderBox.center, i);
        },
        fr = function (e) {
          var r = e.draggable,
            t = e.destination,
            n = e.newPageBorderBoxCenter,
            i = e.viewport,
            a = e.withDroppableDisplacement,
            l = e.onlyOnMainAxis,
            u = void 0 !== l && l,
            c = me(n, r.page.borderBox.center),
            s = {
              target: we(r.page.borderBox, c),
              destination: t,
              withDroppableDisplacement: a,
              viewport: i,
            };
          return u
            ? (function (e) {
                return Ye(
                  (0, o.A)({}, e, {
                    isVisibleThroughFrameFn:
                      ((r = e.destination.axis),
                      function (e) {
                        var t = je(e.top, e.bottom),
                          n = je(e.left, e.right);
                        return function (e) {
                          return r === Ke
                            ? t(e.top) && t(e.bottom)
                            : n(e.left) && n(e.right);
                        };
                      }),
                  }),
                );
                var r;
              })(s)
            : Xe(s);
        },
        gr = function (e) {
          var r = e.isMovingForward,
            t = e.draggable,
            n = e.destination,
            i = e.draggables,
            a = e.previousImpact,
            l = e.viewport,
            u = e.previousPageBorderBoxCenter,
            c = e.previousClientSelection,
            s = e.afterCritical;
          if (!n.isEnabled) return null;
          var d = Ge(n.descriptor.id, i),
            p = ke(t, n),
            f =
              (function (e) {
                var r = e.isMovingForward,
                  t = e.draggable,
                  n = e.destination,
                  i = e.insideDestination,
                  a = e.previousImpact;
                if (!n.isCombineEnabled) return null;
                if (!Me(a)) return null;
                function l(e) {
                  var r = {
                    type: "COMBINE",
                    combine: { draggableId: e, droppableId: n.descriptor.id },
                  };
                  return (0, o.A)({}, a, { at: r });
                }
                var u = a.displaced.all,
                  c = u.length ? u[0] : null;
                if (r) return c ? l(c) : null;
                var s = Fe(t, i);
                if (!c)
                  return s.length ? l(s[s.length - 1].descriptor.id) : null;
                var d = Ne(s, function (e) {
                  return e.descriptor.id === c;
                });
                -1 === d && le(!1);
                var p = d - 1;
                return p < 0 ? null : l(s[p].descriptor.id);
              })({
                isMovingForward: r,
                draggable: t,
                destination: n,
                insideDestination: d,
                previousImpact: a,
              }) ||
              rr({
                isMovingForward: r,
                isInHomeList: p,
                draggable: t,
                draggables: i,
                destination: n,
                insideDestination: d,
                previousImpact: a,
                viewport: l,
                afterCritical: s,
              });
          if (!f) return null;
          var g = cr({
            impact: f,
            draggable: t,
            droppable: n,
            draggables: i,
            afterCritical: s,
          });
          if (
            fr({
              draggable: t,
              destination: n,
              newPageBorderBoxCenter: g,
              viewport: l.frame,
              withDroppableDisplacement: !1,
              onlyOnMainAxis: !0,
            })
          )
            return {
              clientSelection: pr({
                pageBorderBoxCenter: g,
                draggable: t,
                viewport: l,
              }),
              impact: f,
              scrollJumpRequest: null,
            };
          var v = me(g, u),
            m = (function (e) {
              var r = e.impact,
                t = e.viewport,
                n = e.destination,
                i = e.draggables,
                a = e.maxScrollChange,
                l = sr(t, ve(t.scroll.current, a)),
                u = n.frame ? Pe(n, ve(n.frame.scroll.current, a)) : n,
                c = r.displaced,
                s = $e({
                  afterDragging: dr(c.all, i),
                  destination: n,
                  displacedBy: r.displacedBy,
                  viewport: l.frame,
                  last: c,
                  forceShouldAnimate: !1,
                }),
                d = $e({
                  afterDragging: dr(c.all, i),
                  destination: u,
                  displacedBy: r.displacedBy,
                  viewport: t.frame,
                  last: c,
                  forceShouldAnimate: !1,
                }),
                p = {},
                f = {},
                g = [c, s, d];
              return (
                c.all.forEach(function (e) {
                  var r = (function (e, r) {
                    for (var t = 0; t < r.length; t++) {
                      var n = r[t].visible[e];
                      if (n) return n;
                    }
                    return null;
                  })(e, g);
                  r ? (f[e] = r) : (p[e] = !0);
                }),
                (0, o.A)({}, r, {
                  displaced: { all: c.all, invisible: p, visible: f },
                })
              );
            })({
              impact: f,
              viewport: l,
              destination: n,
              draggables: i,
              maxScrollChange: v,
            });
          return { clientSelection: c, impact: m, scrollJumpRequest: v };
        },
        vr = function (e) {
          var r = e.subject.active;
          return r || le(!1), r;
        },
        mr = function (e, r) {
          var t = e.page.borderBox.center;
          return er(e.descriptor.id, r) ? me(t, r.displacedBy.point) : t;
        },
        br = function (e, r) {
          var t = e.page.borderBox;
          return er(e.descriptor.id, r) ? we(t, he(r.displacedBy.point)) : t;
        },
        hr = Z(function (e, r) {
          var t = r[e.line];
          return { value: t, point: ye(e.line, t) };
        }),
        yr = function (e, r) {
          return (0, o.A)({}, e, {
            scroll: (0, o.A)({}, e.scroll, { max: r }),
          });
        },
        Ir = function (e, r, t) {
          var n = e.frame;
          ke(r, e) && le(!1), e.subject.withPlaceholder && le(!1);
          var i = hr(e.axis, r.displaceBy).point,
            a = (function (e, r, t) {
              var n = e.axis;
              if ("virtual" === e.descriptor.mode) return ye(n.line, r[n.line]);
              var i = e.subject.page.contentBox[n.size],
                o =
                  Ge(e.descriptor.id, t).reduce(function (e, r) {
                    return e + r.client.marginBox[n.size];
                  }, 0) +
                  r[n.line] -
                  i;
              return o <= 0 ? null : ye(n.line, o);
            })(e, i, t),
            l = {
              placeholderSize: i,
              increasedBy: a,
              oldFrameMaxScroll: e.frame ? e.frame.scroll.max : null,
            };
          if (!n) {
            var u = Ce({
              page: e.subject.page,
              withPlaceholder: l,
              axis: e.axis,
              frame: e.frame,
            });
            return (0, o.A)({}, e, { subject: u });
          }
          var c = a ? ve(n.scroll.max, a) : n.scroll.max,
            s = yr(n, c),
            d = Ce({
              page: e.subject.page,
              withPlaceholder: l,
              axis: e.axis,
              frame: s,
            });
          return (0, o.A)({}, e, { subject: d, frame: s });
        },
        Dr = function (e) {
          var r = e.isMovingForward,
            t = e.previousPageBorderBoxCenter,
            n = e.draggable,
            i = e.isOver,
            o = e.draggables,
            a = e.droppables,
            l = e.viewport,
            u = e.afterCritical,
            c = (function (e) {
              var r = e.isMovingForward,
                t = e.pageBorderBoxCenter,
                n = e.source,
                i = e.droppables,
                o = e.viewport,
                a = n.subject.active;
              if (!a) return null;
              var l = n.axis,
                u = je(a[l.start], a[l.end]),
                c = Te(i)
                  .filter(function (e) {
                    return e !== n;
                  })
                  .filter(function (e) {
                    return e.isEnabled;
                  })
                  .filter(function (e) {
                    return Boolean(e.subject.active);
                  })
                  .filter(function (e) {
                    return qe(o.frame)(vr(e));
                  })
                  .filter(function (e) {
                    var t = vr(e);
                    return r
                      ? a[l.crossAxisEnd] < t[l.crossAxisEnd]
                      : t[l.crossAxisStart] < a[l.crossAxisStart];
                  })
                  .filter(function (e) {
                    var r = vr(e),
                      t = je(r[l.start], r[l.end]);
                    return (
                      u(r[l.start]) ||
                      u(r[l.end]) ||
                      t(a[l.start]) ||
                      t(a[l.end])
                    );
                  })
                  .sort(function (e, t) {
                    var n = vr(e)[l.crossAxisStart],
                      i = vr(t)[l.crossAxisStart];
                    return r ? n - i : i - n;
                  })
                  .filter(function (e, r, t) {
                    return (
                      vr(e)[l.crossAxisStart] === vr(t[0])[l.crossAxisStart]
                    );
                  });
              if (!c.length) return null;
              if (1 === c.length) return c[0];
              var s = c.filter(function (e) {
                return je(vr(e)[l.start], vr(e)[l.end])(t[l.line]);
              });
              return 1 === s.length
                ? s[0]
                : s.length > 1
                  ? s.sort(function (e, r) {
                      return vr(e)[l.start] - vr(r)[l.start];
                    })[0]
                  : c.sort(function (e, r) {
                      var n = De(t, Ae(vr(e))),
                        i = De(t, Ae(vr(r)));
                      return n !== i ? n - i : vr(e)[l.start] - vr(r)[l.start];
                    })[0];
            })({
              isMovingForward: r,
              pageBorderBoxCenter: t,
              source: i,
              droppables: a,
              viewport: l,
            });
          if (!c) return null;
          var s = Ge(c.descriptor.id, o),
            d = (function (e) {
              var r = e.pageBorderBoxCenter,
                t = e.viewport,
                n = e.destination,
                i = e.insideDestination,
                o = e.afterCritical,
                a = i
                  .filter(function (e) {
                    return Xe({
                      target: br(e, o),
                      destination: n,
                      viewport: t.frame,
                      withDroppableDisplacement: !0,
                    });
                  })
                  .sort(function (e, t) {
                    var i = Ie(r, ur(n, mr(e, o))),
                      a = Ie(r, ur(n, mr(t, o)));
                    return i < a
                      ? -1
                      : a < i
                        ? 1
                        : e.descriptor.index - t.descriptor.index;
                  });
              return a[0] || null;
            })({
              pageBorderBoxCenter: t,
              viewport: l,
              destination: c,
              insideDestination: s,
              afterCritical: u,
            }),
            p = (function (e) {
              var r = e.previousPageBorderBoxCenter,
                t = e.moveRelativeTo,
                n = e.insideDestination,
                i = e.draggable,
                o = e.draggables,
                a = e.destination,
                l = e.viewport,
                u = e.afterCritical;
              if (!t) {
                if (n.length) return null;
                var c = {
                    displaced: Ue,
                    displacedBy: We,
                    at: {
                      type: "REORDER",
                      destination: { droppableId: a.descriptor.id, index: 0 },
                    },
                  },
                  s = cr({
                    impact: c,
                    draggable: i,
                    droppable: a,
                    draggables: o,
                    afterCritical: u,
                  }),
                  d = ke(i, a) ? a : Ir(a, i, o);
                return fr({
                  draggable: i,
                  destination: d,
                  newPageBorderBoxCenter: s,
                  viewport: l.frame,
                  withDroppableDisplacement: !1,
                  onlyOnMainAxis: !0,
                })
                  ? c
                  : null;
              }
              var p,
                f = Boolean(
                  r[a.axis.line] <= t.page.borderBox.center[a.axis.line],
                ),
                g =
                  ((p = t.descriptor.index),
                  t.descriptor.id === i.descriptor.id || f ? p : p + 1),
                v = hr(a.axis, i.displaceBy);
              return Ze({
                draggable: i,
                insideDestination: n,
                destination: a,
                viewport: l,
                displacedBy: v,
                last: Ue,
                index: g,
              });
            })({
              previousPageBorderBoxCenter: t,
              destination: c,
              draggable: n,
              draggables: o,
              moveRelativeTo: d,
              insideDestination: s,
              viewport: l,
              afterCritical: u,
            });
          if (!p) return null;
          var f = cr({
            impact: p,
            draggable: n,
            droppable: c,
            draggables: o,
            afterCritical: u,
          });
          return {
            clientSelection: pr({
              pageBorderBoxCenter: f,
              draggable: n,
              viewport: l,
            }),
            impact: p,
            scrollJumpRequest: null,
          };
        },
        xr = function (e) {
          var r = e.at;
          return r
            ? "REORDER" === r.type
              ? r.destination.droppableId
              : r.combine.droppableId
            : null;
        },
        wr = function (e) {
          var r = e.state,
            t = e.type,
            n = (function (e, r) {
              var t = xr(e);
              return t ? r[t] : null;
            })(r.impact, r.dimensions.droppables),
            i = Boolean(n),
            o = r.dimensions.droppables[r.critical.droppable.id],
            a = n || o,
            l = a.axis.direction,
            u =
              ("vertical" === l && ("MOVE_UP" === t || "MOVE_DOWN" === t)) ||
              ("horizontal" === l && ("MOVE_LEFT" === t || "MOVE_RIGHT" === t));
          if (u && !i) return null;
          var c = "MOVE_DOWN" === t || "MOVE_RIGHT" === t,
            s = r.dimensions.draggables[r.critical.draggable.id],
            d = r.current.page.borderBoxCenter,
            p = r.dimensions,
            f = p.draggables,
            g = p.droppables;
          return u
            ? gr({
                isMovingForward: c,
                previousPageBorderBoxCenter: d,
                draggable: s,
                destination: a,
                draggables: f,
                viewport: r.viewport,
                previousClientSelection: r.current.client.selection,
                previousImpact: r.impact,
                afterCritical: r.afterCritical,
              })
            : Dr({
                isMovingForward: c,
                previousPageBorderBoxCenter: d,
                draggable: s,
                isOver: a,
                draggables: f,
                droppables: g,
                viewport: r.viewport,
                afterCritical: r.afterCritical,
              });
        };
      function Ar(e) {
        return "DRAGGING" === e.phase || "COLLECTING" === e.phase;
      }
      function Er(e) {
        var r = je(e.top, e.bottom),
          t = je(e.left, e.right);
        return function (e) {
          return r(e.y) && t(e.x);
        };
      }
      function Cr(e) {
        var r = e.pageBorderBox,
          t = e.draggable,
          n = e.droppables,
          i = Te(n).filter(function (e) {
            if (!e.isEnabled) return !1;
            var t,
              n,
              i = e.subject.active;
            if (!i) return !1;
            if (
              ((n = i),
              !(
                (t = r).left < n.right &&
                t.right > n.left &&
                t.top < n.bottom &&
                t.bottom > n.top
              ))
            )
              return !1;
            if (Er(i)(r.center)) return !0;
            var o = e.axis,
              a = i.center[o.crossAxisLine],
              l = r[o.crossAxisStart],
              u = r[o.crossAxisEnd],
              c = je(i[o.crossAxisStart], i[o.crossAxisEnd]),
              s = c(l),
              d = c(u);
            return (!s && !d) || (s ? l < a : u > a);
          });
        return i.length
          ? 1 === i.length
            ? i[0].descriptor.id
            : (function (e) {
                var r = e.pageBorderBox,
                  t = e.draggable,
                  n = e.candidates,
                  i = t.page.borderBox.center,
                  o = n
                    .map(function (e) {
                      var t = e.axis,
                        n = ye(
                          e.axis.line,
                          r.center[t.line],
                          e.page.borderBox.center[t.crossAxisLine],
                        );
                      return { id: e.descriptor.id, distance: Ie(i, n) };
                    })
                    .sort(function (e, r) {
                      return r.distance - e.distance;
                    });
                return o[0] ? o[0].id : null;
              })({ pageBorderBox: r, draggable: t, candidates: i })
          : null;
      }
      var Pr = function (e, r) {
        return (0, J.l)(we(e, r));
      };
      function Sr(e) {
        var r = e.displaced,
          t = e.id;
        return Boolean(r.visible[t] || r.invisible[t]);
      }
      var Nr = function (e) {
          var r = e.pageOffset,
            t = e.draggable,
            n = e.draggables,
            i = e.droppables,
            o = e.previousImpact,
            a = e.viewport,
            l = e.afterCritical,
            u = Pr(t.page.borderBox, r),
            c = Cr({ pageBorderBox: u, draggable: t, droppables: i });
          if (!c) return He;
          var s = i[c],
            d = Ge(s.descriptor.id, n),
            p = (function (e, r) {
              var t = e.frame;
              return t ? Pr(r, t.scroll.diff.value) : r;
            })(s, u);
          return (
            (function (e) {
              var r = e.draggable,
                t = e.pageBorderBoxWithDroppableScroll,
                n = e.previousImpact,
                i = e.destination,
                o = e.insideDestination,
                a = e.afterCritical;
              if (!i.isCombineEnabled) return null;
              var l = i.axis,
                u = hr(i.axis, r.displaceBy),
                c = u.value,
                s = t[l.start],
                d = t[l.end],
                p = Oe(Fe(r, o), function (e) {
                  var r = e.descriptor.id,
                    t = e.page.borderBox,
                    i = t[l.size] / 4,
                    o = er(r, a),
                    u = Sr({ displaced: n.displaced, id: r });
                  return o
                    ? u
                      ? d > t[l.start] + i && d < t[l.end] - i
                      : s > t[l.start] - c + i && s < t[l.end] - c - i
                    : u
                      ? d > t[l.start] + c + i && d < t[l.end] + c - i
                      : s > t[l.start] + i && s < t[l.end] - i;
                });
              return p
                ? {
                    displacedBy: u,
                    displaced: n.displaced,
                    at: {
                      type: "COMBINE",
                      combine: {
                        draggableId: p.descriptor.id,
                        droppableId: i.descriptor.id,
                      },
                    },
                  }
                : null;
            })({
              pageBorderBoxWithDroppableScroll: p,
              draggable: t,
              previousImpact: o,
              destination: s,
              insideDestination: d,
              afterCritical: l,
            }) ||
            (function (e) {
              var r = e.pageBorderBoxWithDroppableScroll,
                t = e.draggable,
                n = e.destination,
                i = e.insideDestination,
                o = e.last,
                a = e.viewport,
                l = e.afterCritical,
                u = n.axis,
                c = hr(n.axis, t.displaceBy),
                s = c.value,
                d = r[u.start],
                p = r[u.end],
                f = (function (e) {
                  var r = e.draggable,
                    t = e.closest,
                    n = e.inHomeList;
                  return t
                    ? n && t.descriptor.index > r.descriptor.index
                      ? t.descriptor.index - 1
                      : t.descriptor.index
                    : null;
                })({
                  draggable: t,
                  closest: Oe(Fe(t, i), function (e) {
                    var r = e.descriptor.id,
                      t = e.page.borderBox.center[u.line],
                      n = er(r, l),
                      i = Sr({ displaced: o, id: r });
                    return n
                      ? i
                        ? p <= t
                        : d < t - s
                      : i
                        ? p <= t + s
                        : d < t;
                  }),
                  inHomeList: ke(t, n),
                });
              return Ze({
                draggable: t,
                insideDestination: i,
                destination: n,
                viewport: a,
                last: o,
                displacedBy: c,
                index: f,
              });
            })({
              pageBorderBoxWithDroppableScroll: p,
              draggable: t,
              destination: s,
              insideDestination: d,
              last: o.displaced,
              viewport: a,
              afterCritical: l,
            })
          );
        },
        Or = function (e, r) {
          var t;
          return (0, o.A)({}, e, (((t = {})[r.descriptor.id] = r), t));
        },
        Rr = function (e) {
          var r = e.previousImpact,
            t = e.impact,
            n = e.droppables,
            i = xr(r),
            a = xr(t);
          if (!i) return n;
          if (i === a) return n;
          var l = n[i];
          if (!l.subject.withPlaceholder) return n;
          var u = (function (e) {
            var r = e.subject.withPlaceholder;
            r || le(!1);
            var t = e.frame;
            if (!t) {
              var n = Ce({
                page: e.subject.page,
                axis: e.axis,
                frame: null,
                withPlaceholder: null,
              });
              return (0, o.A)({}, e, { subject: n });
            }
            var i = r.oldFrameMaxScroll;
            i || le(!1);
            var a = yr(t, i),
              l = Ce({
                page: e.subject.page,
                axis: e.axis,
                frame: a,
                withPlaceholder: null,
              });
            return (0, o.A)({}, e, { subject: l, frame: a });
          })(l);
          return Or(n, u);
        },
        Br = function (e) {
          var r = e.state,
            t = e.clientSelection,
            n = e.dimensions,
            i = e.viewport,
            a = e.impact,
            l = e.scrollJumpRequest,
            u = i || r.viewport,
            c = n || r.dimensions,
            s = t || r.current.client.selection,
            d = me(s, r.initial.client.selection),
            p = {
              offset: d,
              selection: s,
              borderBoxCenter: ve(r.initial.client.borderBoxCenter, d),
            },
            f = {
              selection: ve(p.selection, u.scroll.current),
              borderBoxCenter: ve(p.borderBoxCenter, u.scroll.current),
              offset: ve(p.offset, u.scroll.diff.value),
            },
            g = { client: p, page: f };
          if ("COLLECTING" === r.phase)
            return (0, o.A)({ phase: "COLLECTING" }, r, {
              dimensions: c,
              viewport: u,
              current: g,
            });
          var v = c.draggables[r.critical.draggable.id],
            m =
              a ||
              Nr({
                pageOffset: f.offset,
                draggable: v,
                draggables: c.draggables,
                droppables: c.droppables,
                previousImpact: r.impact,
                viewport: u,
                afterCritical: r.afterCritical,
              }),
            b = (function (e) {
              var r = e.draggable,
                t = e.draggables,
                n = e.droppables,
                i = e.previousImpact,
                o = e.impact,
                a = Rr({ previousImpact: i, impact: o, droppables: n }),
                l = xr(o);
              if (!l) return a;
              var u = n[l];
              if (ke(r, u)) return a;
              if (u.subject.withPlaceholder) return a;
              var c = Ir(u, r, t);
              return Or(a, c);
            })({
              draggable: v,
              impact: m,
              previousImpact: r.impact,
              draggables: c.draggables,
              droppables: c.droppables,
            });
          return (0, o.A)({}, r, {
            current: g,
            dimensions: { draggables: c.draggables, droppables: b },
            impact: m,
            viewport: u,
            scrollJumpRequest: l || null,
            forceShouldAnimate: !l && null,
          });
        };
      var Tr = function (e) {
          var r = e.impact,
            t = e.viewport,
            n = e.draggables,
            i = e.destination,
            a = e.forceShouldAnimate,
            l = r.displaced,
            u = (function (e, r) {
              return e.map(function (e) {
                return r[e];
              });
            })(l.all, n),
            c = $e({
              afterDragging: u,
              destination: i,
              displacedBy: r.displacedBy,
              viewport: t.frame,
              forceShouldAnimate: a,
              last: l,
            });
          return (0, o.A)({}, r, { displaced: c });
        },
        Lr = function (e) {
          var r = e.impact,
            t = e.draggable,
            n = e.droppable,
            i = e.draggables,
            o = e.viewport,
            a = e.afterCritical,
            l = cr({
              impact: r,
              draggable: t,
              draggables: i,
              droppable: n,
              afterCritical: a,
            });
          return pr({ pageBorderBoxCenter: l, draggable: t, viewport: o });
        },
        Gr = function (e) {
          var r = e.state,
            t = e.dimensions,
            n = e.viewport;
          "SNAP" !== r.movementMode && le(!1);
          var i = r.impact,
            o = n || r.viewport,
            a = t || r.dimensions,
            l = a.draggables,
            u = a.droppables,
            c = l[r.critical.draggable.id],
            s = xr(i);
          s || le(!1);
          var d = u[s],
            p = Tr({ impact: i, viewport: o, destination: d, draggables: l }),
            f = Lr({
              impact: p,
              draggable: c,
              droppable: d,
              draggables: l,
              viewport: o,
              afterCritical: r.afterCritical,
            });
          return Br({
            impact: p,
            clientSelection: f,
            state: r,
            dimensions: a,
            viewport: o,
          });
        },
        Mr = function (e) {
          var r = e.draggable,
            t = e.home,
            n = e.draggables,
            i = e.viewport,
            o = hr(t.axis, r.displaceBy),
            a = Ge(t.descriptor.id, n),
            l = a.indexOf(r);
          -1 === l && le(!1);
          var u,
            c = a.slice(l + 1),
            s = c.reduce(function (e, r) {
              return (e[r.descriptor.id] = !0), e;
            }, {}),
            d = {
              inVirtualList: "virtual" === t.descriptor.mode,
              displacedBy: o,
              effected: s,
            };
          return {
            impact: {
              displaced: $e({
                afterDragging: c,
                destination: t,
                displacedBy: o,
                last: null,
                viewport: i.frame,
                forceShouldAnimate: !1,
              }),
              displacedBy: o,
              at: {
                type: "REORDER",
                destination:
                  ((u = r.descriptor),
                  { index: u.index, droppableId: u.droppableId }),
              },
            },
            afterCritical: d,
          };
        },
        _r = function (e) {
          0;
        },
        Fr = function (e) {
          0;
        },
        kr = function (e) {
          var r = e.additions,
            t = e.updatedDroppables,
            n = e.viewport,
            i = n.scroll.diff.value;
          return r.map(function (e) {
            var r = e.descriptor.droppableId,
              a = (function (e) {
                var r = e.frame;
                return r || le(!1), r;
              })(t[r]),
              l = a.scroll.diff.value,
              u = (function (e) {
                var r = e.draggable,
                  t = e.offset,
                  n = e.initialWindowScroll,
                  i = (0, J.cY)(r.client, t),
                  a = (0, J.SQ)(i, n);
                return (0, o.A)({}, r, {
                  placeholder: (0, o.A)({}, r.placeholder, { client: i }),
                  client: i,
                  page: a,
                });
              })({
                draggable: e,
                offset: ve(i, l),
                initialWindowScroll: n.scroll.initial,
              });
            return u;
          });
        },
        Wr = function (e) {
          return "SNAP" === e.movementMode;
        },
        Ur = function (e, r, t) {
          var n = (function (e, r) {
            return {
              draggables: e.draggables,
              droppables: Or(e.droppables, r),
            };
          })(e.dimensions, r);
          return !Wr(e) || t
            ? Br({ state: e, dimensions: n })
            : Gr({ state: e, dimensions: n });
        };
      function Hr(e) {
        return e.isDragging && "SNAP" === e.movementMode
          ? (0, o.A)({ phase: "DRAGGING" }, e, { scrollJumpRequest: null })
          : e;
      }
      var jr = { phase: "IDLE", completed: null, shouldFlush: !1 },
        qr = function (e, r) {
          if ((void 0 === e && (e = jr), "FLUSH" === r.type))
            return (0, o.A)({}, jr, { shouldFlush: !0 });
          if ("INITIAL_PUBLISH" === r.type) {
            "IDLE" !== e.phase && le(!1);
            var t = r.payload,
              n = t.critical,
              i = t.clientSelection,
              a = t.viewport,
              l = t.dimensions,
              u = t.movementMode,
              c = l.draggables[n.draggable.id],
              s = l.droppables[n.droppable.id],
              d = {
                selection: i,
                borderBoxCenter: c.client.borderBox.center,
                offset: ge,
              },
              p = {
                client: d,
                page: {
                  selection: ve(d.selection, a.scroll.initial),
                  borderBoxCenter: ve(d.selection, a.scroll.initial),
                  offset: ve(d.selection, a.scroll.diff.value),
                },
              },
              f = Te(l.droppables).every(function (e) {
                return !e.isFixedOnPage;
              }),
              g = Mr({
                draggable: c,
                home: s,
                draggables: l.draggables,
                viewport: a,
              }),
              v = g.impact;
            return {
              phase: "DRAGGING",
              isDragging: !0,
              critical: n,
              movementMode: u,
              dimensions: l,
              initial: p,
              current: p,
              isWindowScrollAllowed: f,
              impact: v,
              afterCritical: g.afterCritical,
              onLiftImpact: v,
              viewport: a,
              scrollJumpRequest: null,
              forceShouldAnimate: null,
            };
          }
          if ("COLLECTION_STARTING" === r.type)
            return "COLLECTING" === e.phase || "DROP_PENDING" === e.phase
              ? e
              : ("DRAGGING" !== e.phase && le(!1),
                (0, o.A)({ phase: "COLLECTING" }, e, { phase: "COLLECTING" }));
          if ("PUBLISH_WHILE_DRAGGING" === r.type)
            return (
              "COLLECTING" !== e.phase && "DROP_PENDING" !== e.phase && le(!1),
              (function (e) {
                var r = e.state,
                  t = e.published;
                _r();
                var n = t.modified.map(function (e) {
                    var t = r.dimensions.droppables[e.droppableId];
                    return Pe(t, e.scroll);
                  }),
                  i = (0, o.A)({}, r.dimensions.droppables, {}, Re(n)),
                  a = Be(
                    kr({
                      additions: t.additions,
                      updatedDroppables: i,
                      viewport: r.viewport,
                    }),
                  ),
                  l = (0, o.A)({}, r.dimensions.draggables, {}, a);
                t.removals.forEach(function (e) {
                  delete l[e];
                });
                var u = { droppables: i, draggables: l },
                  c = xr(r.impact),
                  s = c ? u.droppables[c] : null,
                  d = u.draggables[r.critical.draggable.id],
                  p = u.droppables[r.critical.droppable.id],
                  f = Mr({
                    draggable: d,
                    home: p,
                    draggables: l,
                    viewport: r.viewport,
                  }),
                  g = f.impact,
                  v = f.afterCritical,
                  m = s && s.isCombineEnabled ? r.impact : g,
                  b = Nr({
                    pageOffset: r.current.page.offset,
                    draggable: u.draggables[r.critical.draggable.id],
                    draggables: u.draggables,
                    droppables: u.droppables,
                    previousImpact: m,
                    viewport: r.viewport,
                    afterCritical: v,
                  });
                Fr();
                var h = (0, o.A)({ phase: "DRAGGING" }, r, {
                  phase: "DRAGGING",
                  impact: b,
                  onLiftImpact: g,
                  dimensions: u,
                  afterCritical: v,
                  forceShouldAnimate: !1,
                });
                return "COLLECTING" === r.phase
                  ? h
                  : (0, o.A)({ phase: "DROP_PENDING" }, h, {
                      phase: "DROP_PENDING",
                      reason: r.reason,
                      isWaiting: !1,
                    });
              })({ state: e, published: r.payload })
            );
          if ("MOVE" === r.type) {
            if ("DROP_PENDING" === e.phase) return e;
            Ar(e) || le(!1);
            var m = r.payload.client;
            return be(m, e.current.client.selection)
              ? e
              : Br({
                  state: e,
                  clientSelection: m,
                  impact: Wr(e) ? e.impact : null,
                });
          }
          if ("UPDATE_DROPPABLE_SCROLL" === r.type) {
            if ("DROP_PENDING" === e.phase) return Hr(e);
            if ("COLLECTING" === e.phase) return Hr(e);
            Ar(e) || le(!1);
            var b = r.payload,
              h = b.id,
              y = b.newScroll,
              I = e.dimensions.droppables[h];
            if (!I) return e;
            var D = Pe(I, y);
            return Ur(e, D, !1);
          }
          if ("UPDATE_DROPPABLE_IS_ENABLED" === r.type) {
            if ("DROP_PENDING" === e.phase) return e;
            Ar(e) || le(!1);
            var x = r.payload,
              w = x.id,
              A = x.isEnabled,
              E = e.dimensions.droppables[w];
            E || le(!1), E.isEnabled === A && le(!1);
            var C = (0, o.A)({}, E, { isEnabled: A });
            return Ur(e, C, !0);
          }
          if ("UPDATE_DROPPABLE_IS_COMBINE_ENABLED" === r.type) {
            if ("DROP_PENDING" === e.phase) return e;
            Ar(e) || le(!1);
            var P = r.payload,
              S = P.id,
              N = P.isCombineEnabled,
              O = e.dimensions.droppables[S];
            O || le(!1), O.isCombineEnabled === N && le(!1);
            var R = (0, o.A)({}, O, { isCombineEnabled: N });
            return Ur(e, R, !0);
          }
          if ("MOVE_BY_WINDOW_SCROLL" === r.type) {
            if ("DROP_PENDING" === e.phase || "DROP_ANIMATING" === e.phase)
              return e;
            Ar(e) || le(!1), e.isWindowScrollAllowed || le(!1);
            var B = r.payload.newScroll;
            if (be(e.viewport.scroll.current, B)) return Hr(e);
            var T = sr(e.viewport, B);
            return Wr(e)
              ? Gr({ state: e, viewport: T })
              : Br({ state: e, viewport: T });
          }
          if ("UPDATE_VIEWPORT_MAX_SCROLL" === r.type) {
            if (!Ar(e)) return e;
            var L = r.payload.maxScroll;
            if (be(L, e.viewport.scroll.max)) return e;
            var G = (0, o.A)({}, e.viewport, {
              scroll: (0, o.A)({}, e.viewport.scroll, { max: L }),
            });
            return (0, o.A)({ phase: "DRAGGING" }, e, { viewport: G });
          }
          if (
            "MOVE_UP" === r.type ||
            "MOVE_DOWN" === r.type ||
            "MOVE_LEFT" === r.type ||
            "MOVE_RIGHT" === r.type
          ) {
            if ("COLLECTING" === e.phase || "DROP_PENDING" === e.phase)
              return e;
            "DRAGGING" !== e.phase && le(!1);
            var M = wr({ state: e, type: r.type });
            return M
              ? Br({
                  state: e,
                  impact: M.impact,
                  clientSelection: M.clientSelection,
                  scrollJumpRequest: M.scrollJumpRequest,
                })
              : e;
          }
          if ("DROP_PENDING" === r.type) {
            var _ = r.payload.reason;
            return (
              "COLLECTING" !== e.phase && le(!1),
              (0, o.A)({ phase: "DROP_PENDING" }, e, {
                phase: "DROP_PENDING",
                isWaiting: !0,
                reason: _,
              })
            );
          }
          if ("DROP_ANIMATE" === r.type) {
            var F = r.payload,
              k = F.completed,
              W = F.dropDuration,
              U = F.newHomeClientOffset;
            return (
              "DRAGGING" !== e.phase && "DROP_PENDING" !== e.phase && le(!1),
              {
                phase: "DROP_ANIMATING",
                completed: k,
                dropDuration: W,
                newHomeClientOffset: U,
                dimensions: e.dimensions,
              }
            );
          }
          return "DROP_COMPLETE" === r.type
            ? { phase: "IDLE", completed: r.payload.completed, shouldFlush: !1 }
            : e;
        },
        Vr = function (e) {
          return { type: "LIFT", payload: e };
        },
        Kr = function (e) {
          return { type: "PUBLISH_WHILE_DRAGGING", payload: e };
        },
        zr = function () {
          return { type: "COLLECTION_STARTING", payload: null };
        },
        Yr = function (e) {
          return { type: "UPDATE_DROPPABLE_SCROLL", payload: e };
        },
        Jr = function (e) {
          return { type: "UPDATE_DROPPABLE_IS_ENABLED", payload: e };
        },
        Xr = function (e) {
          return { type: "UPDATE_DROPPABLE_IS_COMBINE_ENABLED", payload: e };
        },
        $r = function (e) {
          return { type: "MOVE", payload: e };
        },
        Qr = function () {
          return { type: "MOVE_UP", payload: null };
        },
        Zr = function () {
          return { type: "MOVE_DOWN", payload: null };
        },
        et = function () {
          return { type: "MOVE_RIGHT", payload: null };
        },
        rt = function () {
          return { type: "MOVE_LEFT", payload: null };
        },
        tt = function () {
          return { type: "FLUSH", payload: null };
        },
        nt = function (e) {
          return { type: "DROP_COMPLETE", payload: e };
        },
        it = function (e) {
          return { type: "DROP", payload: e };
        },
        ot = function () {
          return { type: "DROP_ANIMATION_FINISHED", payload: null };
        };
      var at = "cubic-bezier(.2,1,.1,1)",
        lt = { drop: 0, combining: 0.7 },
        ut = { drop: 0.75 },
        ct = 0.2 + "s " + "cubic-bezier(0.2, 0, 0, 1)",
        st = {
          fluid: "opacity " + ct,
          snap: "transform " + ct + ", opacity " + ct,
          drop: function (e) {
            var r = e + "s " + at;
            return "transform " + r + ", opacity " + r;
          },
          outOfTheWay: "transform " + ct,
          placeholder: "height " + ct + ", width " + ct + ", margin " + ct,
        },
        dt = function (e) {
          return be(e, ge) ? null : "translate(" + e.x + "px, " + e.y + "px)";
        },
        pt = dt,
        ft = function (e, r) {
          var t = dt(e);
          return t ? (r ? t + " scale(" + ut.drop + ")" : t) : null;
        },
        gt = 0.33,
        vt = 0.55,
        mt = vt - gt,
        bt = function (e) {
          var r = e.getState,
            t = e.dispatch;
          return function (e) {
            return function (n) {
              if ("DROP" === n.type) {
                var i = r(),
                  a = n.payload.reason;
                if ("COLLECTING" !== i.phase) {
                  if ("IDLE" !== i.phase) {
                    "DROP_PENDING" === i.phase && i.isWaiting && le(!1),
                      "DRAGGING" !== i.phase &&
                        "DROP_PENDING" !== i.phase &&
                        le(!1);
                    var l = i.critical,
                      u = i.dimensions,
                      c = u.draggables[i.critical.draggable.id],
                      s = (function (e) {
                        var r = e.draggables,
                          t = e.reason,
                          n = e.lastImpact,
                          i = e.home,
                          a = e.viewport,
                          l = e.onLiftImpact;
                        return n.at && "DROP" === t
                          ? "REORDER" === n.at.type
                            ? { impact: n, didDropInsideDroppable: !0 }
                            : {
                                impact: (0, o.A)({}, n, { displaced: Ue }),
                                didDropInsideDroppable: !0,
                              }
                          : {
                              impact: Tr({
                                draggables: r,
                                impact: l,
                                destination: i,
                                viewport: a,
                                forceShouldAnimate: !0,
                              }),
                              didDropInsideDroppable: !1,
                            };
                      })({
                        reason: a,
                        lastImpact: i.impact,
                        afterCritical: i.afterCritical,
                        onLiftImpact: i.onLiftImpact,
                        home: i.dimensions.droppables[i.critical.droppable.id],
                        viewport: i.viewport,
                        draggables: i.dimensions.draggables,
                      }),
                      d = s.impact,
                      p = s.didDropInsideDroppable,
                      f = p ? Me(d) : null,
                      g = p ? _e(d) : null,
                      v = {
                        index: l.draggable.index,
                        droppableId: l.droppable.id,
                      },
                      m = {
                        draggableId: c.descriptor.id,
                        type: c.descriptor.type,
                        source: v,
                        reason: a,
                        mode: i.movementMode,
                        destination: f,
                        combine: g,
                      },
                      b = (function (e) {
                        var r = e.impact,
                          t = e.draggable,
                          n = e.dimensions,
                          i = e.viewport,
                          o = e.afterCritical,
                          a = n.draggables,
                          l = n.droppables,
                          u = xr(r),
                          c = u ? l[u] : null,
                          s = l[t.descriptor.droppableId],
                          d = Lr({
                            impact: r,
                            draggable: t,
                            draggables: a,
                            afterCritical: o,
                            droppable: c || s,
                            viewport: i,
                          });
                        return me(d, t.client.borderBox.center);
                      })({
                        impact: d,
                        draggable: c,
                        dimensions: u,
                        viewport: i.viewport,
                        afterCritical: i.afterCritical,
                      }),
                      h = {
                        critical: i.critical,
                        afterCritical: i.afterCritical,
                        result: m,
                        impact: d,
                      };
                    if (!be(i.current.client.offset, b) || Boolean(m.combine)) {
                      var y = (function (e) {
                        var r = e.current,
                          t = e.destination,
                          n = e.reason,
                          i = Ie(r, t);
                        if (i <= 0) return gt;
                        if (i >= 1500) return vt;
                        var o = gt + mt * (i / 1500);
                        return Number(
                          ("CANCEL" === n ? 0.6 * o : o).toFixed(2),
                        );
                      })({
                        current: i.current.client.offset,
                        destination: b,
                        reason: a,
                      });
                      t(
                        (function (e) {
                          return { type: "DROP_ANIMATE", payload: e };
                        })({
                          newHomeClientOffset: b,
                          dropDuration: y,
                          completed: h,
                        }),
                      );
                    } else t(nt({ completed: h }));
                  }
                } else
                  t(
                    (function (e) {
                      return { type: "DROP_PENDING", payload: e };
                    })({ reason: a }),
                  );
              } else e(n);
            };
          };
        },
        ht = function (e) {
          return { x: e.pageXOffset, y: e.pageYOffset };
        };
      function yt(e) {
        var r = e.onWindowScroll;
        var t = (0, ee.A)(function () {
            r(ht());
          }),
          n = (function (e) {
            return {
              eventName: "scroll",
              options: { passive: !0, capture: !1 },
              fn: function (r) {
                (r.target !== window && r.target !== window.document) || e();
              },
            };
          })(t),
          i = te;
        function o() {
          return i !== te;
        }
        return {
          start: function () {
            o() && le(!1), (i = ne(window, [n]));
          },
          stop: function () {
            o() || le(!1), t.cancel(), i(), (i = te);
          },
          isActive: o,
        };
      }
      var It = function (e) {
          var r = yt({
            onWindowScroll: function (r) {
              e.dispatch({
                type: "MOVE_BY_WINDOW_SCROLL",
                payload: { newScroll: r },
              });
            },
          });
          return function (e) {
            return function (t) {
              r.isActive() || "INITIAL_PUBLISH" !== t.type || r.start(),
                r.isActive() &&
                  (function (e) {
                    return (
                      "DROP_COMPLETE" === e.type ||
                      "DROP_ANIMATE" === e.type ||
                      "FLUSH" === e.type
                    );
                  })(t) &&
                  r.stop(),
                e(t);
            };
          };
        },
        Dt = function () {
          var e = [];
          return {
            add: function (r) {
              var t = setTimeout(function () {
                  return (function (r) {
                    var t = Ne(e, function (e) {
                      return e.timerId === r;
                    });
                    -1 === t && le(!1), e.splice(t, 1)[0].callback();
                  })(t);
                }),
                n = { timerId: t, callback: r };
              e.push(n);
            },
            flush: function () {
              if (e.length) {
                var r = [].concat(e);
                (e.length = 0),
                  r.forEach(function (e) {
                    clearTimeout(e.timerId), e.callback();
                  });
              }
            },
          };
        },
        xt = function (e, r) {
          _r(), r(), Fr();
        },
        wt = function (e, r) {
          return {
            draggableId: e.draggable.id,
            type: e.droppable.type,
            source: { droppableId: e.droppable.id, index: e.draggable.index },
            mode: r,
          };
        },
        At = function (e, r, t, n) {
          if (e) {
            var i = (function (e) {
              var r = !1,
                t = !1,
                n = setTimeout(function () {
                  t = !0;
                }),
                i = function (i) {
                  r || t || ((r = !0), e(i), clearTimeout(n));
                };
              return (
                (i.wasCalled = function () {
                  return r;
                }),
                i
              );
            })(t);
            e(r, { announce: i }), i.wasCalled() || t(n(r));
          } else t(n(r));
        },
        Et = function (e, r) {
          var t = (function (e, r) {
            var t = Dt(),
              n = null,
              i = function (t) {
                n || le(!1),
                  (n = null),
                  xt(0, function () {
                    return At(e().onDragEnd, t, r, fe.onDragEnd);
                  });
              };
            return {
              beforeCapture: function (r, t) {
                n && le(!1),
                  xt(0, function () {
                    var n = e().onBeforeCapture;
                    n && n({ draggableId: r, mode: t });
                  });
              },
              beforeStart: function (r, t) {
                n && le(!1),
                  xt(0, function () {
                    var n = e().onBeforeDragStart;
                    n && n(wt(r, t));
                  });
              },
              start: function (i, o) {
                n && le(!1);
                var a = wt(i, o);
                (n = {
                  mode: o,
                  lastCritical: i,
                  lastLocation: a.source,
                  lastCombine: null,
                }),
                  t.add(function () {
                    xt(0, function () {
                      return At(e().onDragStart, a, r, fe.onDragStart);
                    });
                  });
              },
              update: function (i, a) {
                var l = Me(a),
                  u = _e(a);
                n || le(!1);
                var c = !(function (e, r) {
                  if (e === r) return !0;
                  var t =
                      e.draggable.id === r.draggable.id &&
                      e.draggable.droppableId === r.draggable.droppableId &&
                      e.draggable.type === r.draggable.type &&
                      e.draggable.index === r.draggable.index,
                    n =
                      e.droppable.id === r.droppable.id &&
                      e.droppable.type === r.droppable.type;
                  return t && n;
                })(i, n.lastCritical);
                c && (n.lastCritical = i);
                var s,
                  d,
                  p =
                    ((d = l),
                    !(
                      (null == (s = n.lastLocation) && null == d) ||
                      (null != s &&
                        null != d &&
                        s.droppableId === d.droppableId &&
                        s.index === d.index)
                    ));
                p && (n.lastLocation = l);
                var f = !(function (e, r) {
                  return (
                    (null == e && null == r) ||
                    (null != e &&
                      null != r &&
                      e.draggableId === r.draggableId &&
                      e.droppableId === r.droppableId)
                  );
                })(n.lastCombine, u);
                if ((f && (n.lastCombine = u), c || p || f)) {
                  var g = (0, o.A)({}, wt(i, n.mode), {
                    combine: u,
                    destination: l,
                  });
                  t.add(function () {
                    xt(0, function () {
                      return At(e().onDragUpdate, g, r, fe.onDragUpdate);
                    });
                  });
                }
              },
              flush: function () {
                n || le(!1), t.flush();
              },
              drop: i,
              abort: function () {
                if (n) {
                  var e = (0, o.A)({}, wt(n.lastCritical, n.mode), {
                    combine: null,
                    destination: null,
                    reason: "CANCEL",
                  });
                  i(e);
                }
              },
            };
          })(e, r);
          return function (e) {
            return function (r) {
              return function (n) {
                if ("BEFORE_INITIAL_CAPTURE" !== n.type) {
                  if ("INITIAL_PUBLISH" === n.type) {
                    var i = n.payload.critical;
                    return (
                      t.beforeStart(i, n.payload.movementMode),
                      r(n),
                      void t.start(i, n.payload.movementMode)
                    );
                  }
                  if ("DROP_COMPLETE" === n.type) {
                    var o = n.payload.completed.result;
                    return t.flush(), r(n), void t.drop(o);
                  }
                  if ((r(n), "FLUSH" !== n.type)) {
                    var a = e.getState();
                    "DRAGGING" === a.phase && t.update(a.critical, a.impact);
                  } else t.abort();
                } else
                  t.beforeCapture(
                    n.payload.draggableId,
                    n.payload.movementMode,
                  );
              };
            };
          };
        },
        Ct = function (e) {
          return function (r) {
            return function (t) {
              if ("DROP_ANIMATION_FINISHED" === t.type) {
                var n = e.getState();
                "DROP_ANIMATING" !== n.phase && le(!1),
                  e.dispatch(nt({ completed: n.completed }));
              } else r(t);
            };
          };
        },
        Pt = function (e) {
          var r = null,
            t = null;
          return function (n) {
            return function (i) {
              if (
                (("FLUSH" !== i.type &&
                  "DROP_COMPLETE" !== i.type &&
                  "DROP_ANIMATION_FINISHED" !== i.type) ||
                  (t && (cancelAnimationFrame(t), (t = null)),
                  r && (r(), (r = null))),
                n(i),
                "DROP_ANIMATE" === i.type)
              ) {
                var o = {
                  eventName: "scroll",
                  options: { capture: !0, passive: !1, once: !0 },
                  fn: function () {
                    "DROP_ANIMATING" === e.getState().phase &&
                      e.dispatch({
                        type: "DROP_ANIMATION_FINISHED",
                        payload: null,
                      });
                  },
                };
                t = requestAnimationFrame(function () {
                  (t = null), (r = ne(window, [o]));
                });
              }
            };
          };
        },
        St = function (e) {
          return function (r) {
            return function (t) {
              if ((r(t), "PUBLISH_WHILE_DRAGGING" === t.type)) {
                var n = e.getState();
                "DROP_PENDING" === n.phase &&
                  (n.isWaiting || e.dispatch(it({ reason: n.reason })));
              }
            };
          };
        },
        Nt = a.Zz,
        Ot = function (e) {
          var r,
            t = e.dimensionMarshal,
            n = e.focusMarshal,
            i = e.styleMarshal,
            o = e.getResponders,
            l = e.announce,
            u = e.autoScroller;
          return (0, a.y$)(
            qr,
            Nt(
              (0, a.Tw)(
                ((r = i),
                function () {
                  return function (e) {
                    return function (t) {
                      "INITIAL_PUBLISH" === t.type && r.dragging(),
                        "DROP_ANIMATE" === t.type &&
                          r.dropping(t.payload.completed.result.reason),
                        ("FLUSH" !== t.type && "DROP_COMPLETE" !== t.type) ||
                          r.resting(),
                        e(t);
                    };
                  };
                }),
                (function (e) {
                  return function () {
                    return function (r) {
                      return function (t) {
                        ("DROP_COMPLETE" !== t.type &&
                          "FLUSH" !== t.type &&
                          "DROP_ANIMATE" !== t.type) ||
                          e.stopPublishing(),
                          r(t);
                      };
                    };
                  };
                })(t),
                (function (e) {
                  return function (r) {
                    var t = r.getState,
                      n = r.dispatch;
                    return function (r) {
                      return function (i) {
                        if ("LIFT" === i.type) {
                          var o = i.payload,
                            a = o.id,
                            l = o.clientSelection,
                            u = o.movementMode,
                            c = t();
                          "DROP_ANIMATING" === c.phase &&
                            n(nt({ completed: c.completed })),
                            "IDLE" !== t().phase && le(!1),
                            n(tt()),
                            n({
                              type: "BEFORE_INITIAL_CAPTURE",
                              payload: { draggableId: a, movementMode: u },
                            });
                          var s = {
                              draggableId: a,
                              scrollOptions: {
                                shouldPublishImmediately: "SNAP" === u,
                              },
                            },
                            d = e.startPublishing(s),
                            p = d.critical,
                            f = d.dimensions,
                            g = d.viewport;
                          n({
                            type: "INITIAL_PUBLISH",
                            payload: {
                              critical: p,
                              dimensions: f,
                              clientSelection: l,
                              movementMode: u,
                              viewport: g,
                            },
                          });
                        } else r(i);
                      };
                    };
                  };
                })(t),
                bt,
                Ct,
                Pt,
                St,
                (function (e) {
                  return function (r) {
                    return function (t) {
                      return function (n) {
                        if (
                          (function (e) {
                            return (
                              "DROP_COMPLETE" === e.type ||
                              "DROP_ANIMATE" === e.type ||
                              "FLUSH" === e.type
                            );
                          })(n)
                        )
                          return e.stop(), void t(n);
                        if ("INITIAL_PUBLISH" === n.type) {
                          t(n);
                          var i = r.getState();
                          return (
                            "DRAGGING" !== i.phase && le(!1), void e.start(i)
                          );
                        }
                        t(n), e.scroll(r.getState());
                      };
                    };
                  };
                })(u),
                It,
                (function (e) {
                  var r = !1;
                  return function () {
                    return function (t) {
                      return function (n) {
                        if ("INITIAL_PUBLISH" === n.type)
                          return (
                            (r = !0),
                            e.tryRecordFocus(n.payload.critical.draggable.id),
                            t(n),
                            void e.tryRestoreFocusRecorded()
                          );
                        if ((t(n), r)) {
                          if ("FLUSH" === n.type)
                            return (r = !1), void e.tryRestoreFocusRecorded();
                          if ("DROP_COMPLETE" === n.type) {
                            r = !1;
                            var i = n.payload.completed.result;
                            i.combine &&
                              e.tryShiftRecord(
                                i.draggableId,
                                i.combine.draggableId,
                              ),
                              e.tryRestoreFocusRecorded();
                          }
                        }
                      };
                    };
                  };
                })(n),
                Et(o, l),
              ),
            ),
          );
        };
      var Rt = function (e) {
          var r = e.scrollHeight,
            t = e.scrollWidth,
            n = e.height,
            i = e.width,
            o = me({ x: t, y: r }, { x: i, y: n });
          return { x: Math.max(0, o.x), y: Math.max(0, o.y) };
        },
        Bt = function (e) {
          var r = e.document.documentElement;
          return r || le(!1), r;
        },
        Tt = function (e) {
          var r = Bt(e);
          return Rt({
            scrollHeight: r.scrollHeight,
            scrollWidth: r.scrollWidth,
            width: r.clientWidth,
            height: r.clientHeight,
          });
        },
        Lt = function (e) {
          var r = e.windowToUse,
            t = e.critical,
            n = e.scrollOptions,
            i = e.registry;
          _r();
          var o = (function (e) {
              var r = ht(e),
                t = Tt(e),
                n = r.y,
                i = r.x,
                o = Bt(e),
                a = i + o.clientWidth,
                l = n + o.clientHeight;
              return {
                frame: (0, J.l)({ top: n, left: i, right: a, bottom: l }),
                scroll: {
                  initial: r,
                  current: r,
                  max: t,
                  diff: { value: ge, displacement: ge },
                },
              };
            })(r),
            a = o.scroll.current,
            l = t.droppable,
            u = i.droppable.getAllByType(l.type).map(function (e) {
              return e.callbacks.getDimensionAndWatchScroll(a, n);
            }),
            c = i.draggable.getAllByType(t.draggable.type).map(function (e) {
              return e.getDimension(a);
            }),
            s = { draggables: Be(c), droppables: Re(u) };
          return Fr(), { dimensions: s, critical: t, viewport: o };
        };
      function Gt(e, r, t) {
        return (
          t.descriptor.id !== r.id &&
          t.descriptor.type === r.type &&
          "virtual" ===
            e.droppable.getById(t.descriptor.droppableId).descriptor.mode
        );
      }
      var Mt,
        _t,
        Ft = function (e, r, t) {
          var n = null,
            i = (function (e) {
              var r = e.registry,
                t = e.callbacks,
                n = { additions: {}, removals: {}, modified: {} },
                i = null,
                o = function () {
                  i ||
                    (t.collectionStarting(),
                    (i = requestAnimationFrame(function () {
                      (i = null), _r();
                      var e = n,
                        o = e.additions,
                        a = e.removals,
                        l = e.modified,
                        u = Object.keys(o)
                          .map(function (e) {
                            return r.draggable.getById(e).getDimension(ge);
                          })
                          .sort(function (e, r) {
                            return e.descriptor.index - r.descriptor.index;
                          }),
                        c = Object.keys(l).map(function (e) {
                          return {
                            droppableId: e,
                            scroll: r.droppable
                              .getById(e)
                              .callbacks.getScrollWhileDragging(),
                          };
                        }),
                        s = {
                          additions: u,
                          removals: Object.keys(a),
                          modified: c,
                        };
                      (n = { additions: {}, removals: {}, modified: {} }),
                        Fr(),
                        t.publish(s);
                    })));
                };
              return {
                add: function (e) {
                  var r = e.descriptor.id;
                  (n.additions[r] = e),
                    (n.modified[e.descriptor.droppableId] = !0),
                    n.removals[r] && delete n.removals[r],
                    o();
                },
                remove: function (e) {
                  var r = e.descriptor;
                  (n.removals[r.id] = !0),
                    (n.modified[r.droppableId] = !0),
                    n.additions[r.id] && delete n.additions[r.id],
                    o();
                },
                stop: function () {
                  i &&
                    (cancelAnimationFrame(i),
                    (i = null),
                    (n = { additions: {}, removals: {}, modified: {} }));
                },
              };
            })({
              callbacks: {
                publish: t.publishWhileDragging,
                collectionStarting: t.collectionStarting,
              },
              registry: r,
            }),
            o = function (e) {
              n || le(!1);
              var t = n.critical.draggable;
              "ADDITION" === e.type && Gt(r, t, e.value) && i.add(e.value),
                "REMOVAL" === e.type && Gt(r, t, e.value) && i.remove(e.value);
            },
            a = {
              updateDroppableIsEnabled: function (e, i) {
                r.droppable.exists(e) || le(!1),
                  n && t.updateDroppableIsEnabled({ id: e, isEnabled: i });
              },
              updateDroppableIsCombineEnabled: function (e, i) {
                n &&
                  (r.droppable.exists(e) || le(!1),
                  t.updateDroppableIsCombineEnabled({
                    id: e,
                    isCombineEnabled: i,
                  }));
              },
              scrollDroppable: function (e, t) {
                n && r.droppable.getById(e).callbacks.scroll(t);
              },
              updateDroppableScroll: function (e, i) {
                n &&
                  (r.droppable.exists(e) || le(!1),
                  t.updateDroppableScroll({ id: e, newScroll: i }));
              },
              startPublishing: function (t) {
                n && le(!1);
                var i = r.draggable.getById(t.draggableId),
                  a = r.droppable.getById(i.descriptor.droppableId),
                  l = { draggable: i.descriptor, droppable: a.descriptor },
                  u = r.subscribe(o);
                return (
                  (n = { critical: l, unsubscribe: u }),
                  Lt({
                    windowToUse: e,
                    critical: l,
                    registry: r,
                    scrollOptions: t.scrollOptions,
                  })
                );
              },
              stopPublishing: function () {
                if (n) {
                  i.stop();
                  var e = n.critical.droppable;
                  r.droppable.getAllByType(e.type).forEach(function (e) {
                    return e.callbacks.dragStopped();
                  }),
                    n.unsubscribe(),
                    (n = null);
                }
              },
            };
          return a;
        },
        kt = function (e, r) {
          return (
            "IDLE" === e.phase ||
            ("DROP_ANIMATING" === e.phase &&
              e.completed.result.draggableId !== r &&
              "DROP" === e.completed.result.reason)
          );
        },
        Wt = function (e) {
          window.scrollBy(e.x, e.y);
        },
        Ut = Z(function (e) {
          return Te(e).filter(function (e) {
            return !!e.isEnabled && !!e.frame;
          });
        }),
        Ht = function (e) {
          var r = e.center,
            t = e.destination,
            n = e.droppables;
          if (t) {
            var i = n[t];
            return i.frame ? i : null;
          }
          var o = (function (e, r) {
            var t = Oe(Ut(r), function (r) {
              return r.frame || le(!1), Er(r.frame.pageMarginBox)(e);
            });
            return t;
          })(r, n);
          return o;
        },
        jt = 0.25,
        qt = 0.05,
        Vt = 28,
        Kt = function (e) {
          return Math.pow(e, 2);
        },
        zt = { stopDampeningAt: 1200, accelerateAt: 360 },
        Yt = function (e) {
          var r = e.startOfRange,
            t = e.endOfRange,
            n = e.current,
            i = t - r;
          return 0 === i ? 0 : (n - r) / i;
        },
        Jt = zt.accelerateAt,
        Xt = zt.stopDampeningAt,
        $t = function (e) {
          var r = e.distanceToEdge,
            t = e.thresholds,
            n = e.dragStartTime,
            i = e.shouldUseTimeDampening,
            o = (function (e, r) {
              if (e > r.startScrollingFrom) return 0;
              if (e <= r.maxScrollValueAt) return Vt;
              if (e === r.startScrollingFrom) return 1;
              var t = Yt({
                  startOfRange: r.maxScrollValueAt,
                  endOfRange: r.startScrollingFrom,
                  current: e,
                }),
                n = Vt * Kt(1 - t);
              return Math.ceil(n);
            })(r, t);
          return 0 === o
            ? 0
            : i
              ? Math.max(
                  (function (e, r) {
                    var t = r,
                      n = Xt,
                      i = Date.now() - t;
                    if (i >= Xt) return e;
                    if (i < Jt) return 1;
                    var o = Yt({ startOfRange: Jt, endOfRange: n, current: i }),
                      a = e * Kt(o);
                    return Math.ceil(a);
                  })(o, n),
                  1,
                )
              : o;
        },
        Qt = function (e) {
          var r = e.container,
            t = e.distanceToEdges,
            n = e.dragStartTime,
            i = e.axis,
            o = e.shouldUseTimeDampening,
            a = (function (e, r) {
              return {
                startScrollingFrom: e[r.size] * jt,
                maxScrollValueAt: e[r.size] * qt,
              };
            })(r, i);
          return t[i.end] < t[i.start]
            ? $t({
                distanceToEdge: t[i.end],
                thresholds: a,
                dragStartTime: n,
                shouldUseTimeDampening: o,
              })
            : -1 *
                $t({
                  distanceToEdge: t[i.start],
                  thresholds: a,
                  dragStartTime: n,
                  shouldUseTimeDampening: o,
                });
        },
        Zt = xe(function (e) {
          return 0 === e ? 0 : e;
        }),
        en = function (e) {
          var r = e.dragStartTime,
            t = e.container,
            n = e.subject,
            i = e.center,
            o = e.shouldUseTimeDampening,
            a = {
              top: i.y - t.top,
              right: t.right - i.x,
              bottom: t.bottom - i.y,
              left: i.x - t.left,
            },
            l = Qt({
              container: t,
              distanceToEdges: a,
              dragStartTime: r,
              axis: Ke,
              shouldUseTimeDampening: o,
            }),
            u = Qt({
              container: t,
              distanceToEdges: a,
              dragStartTime: r,
              axis: ze,
              shouldUseTimeDampening: o,
            }),
            c = Zt({ x: u, y: l });
          if (be(c, ge)) return null;
          var s = (function (e) {
            var r = e.container,
              t = e.subject,
              n = e.proposedScroll,
              i = t.height > r.height,
              o = t.width > r.width;
            return o || i
              ? o && i
                ? null
                : { x: o ? 0 : n.x, y: i ? 0 : n.y }
              : n;
          })({ container: t, subject: n, proposedScroll: c });
          return s ? (be(s, ge) ? null : s) : null;
        },
        rn = xe(function (e) {
          return 0 === e ? 0 : e > 0 ? 1 : -1;
        }),
        tn =
          ((Mt = function (e, r) {
            return e < 0 ? e : e > r ? e - r : 0;
          }),
          function (e) {
            var r = e.current,
              t = e.max,
              n = e.change,
              i = ve(r, n),
              o = { x: Mt(i.x, t.x), y: Mt(i.y, t.y) };
            return be(o, ge) ? null : o;
          }),
        nn = function (e) {
          var r = e.max,
            t = e.current,
            n = e.change,
            i = { x: Math.max(t.x, r.x), y: Math.max(t.y, r.y) },
            o = rn(n),
            a = tn({ max: i, current: t, change: o });
          return !a || (0 !== o.x && 0 === a.x) || (0 !== o.y && 0 === a.y);
        },
        on = function (e, r) {
          return nn({
            current: e.scroll.current,
            max: e.scroll.max,
            change: r,
          });
        },
        an = function (e, r) {
          var t = e.frame;
          return (
            !!t &&
            nn({ current: t.scroll.current, max: t.scroll.max, change: r })
          );
        },
        ln = function (e) {
          var r = e.state,
            t = e.dragStartTime,
            n = e.shouldUseTimeDampening,
            i = e.scrollWindow,
            o = e.scrollDroppable,
            a = r.current.page.borderBoxCenter,
            l = r.dimensions.draggables[r.critical.draggable.id].page.marginBox;
          if (r.isWindowScrollAllowed) {
            var u = (function (e) {
              var r = e.viewport,
                t = e.subject,
                n = e.center,
                i = e.dragStartTime,
                o = e.shouldUseTimeDampening,
                a = en({
                  dragStartTime: i,
                  container: r.frame,
                  subject: t,
                  center: n,
                  shouldUseTimeDampening: o,
                });
              return a && on(r, a) ? a : null;
            })({
              dragStartTime: t,
              viewport: r.viewport,
              subject: l,
              center: a,
              shouldUseTimeDampening: n,
            });
            if (u) return void i(u);
          }
          var c = Ht({
            center: a,
            destination: xr(r.impact),
            droppables: r.dimensions.droppables,
          });
          if (c) {
            var s = (function (e) {
              var r = e.droppable,
                t = e.subject,
                n = e.center,
                i = e.dragStartTime,
                o = e.shouldUseTimeDampening,
                a = r.frame;
              if (!a) return null;
              var l = en({
                dragStartTime: i,
                container: a.pageMarginBox,
                subject: t,
                center: n,
                shouldUseTimeDampening: o,
              });
              return l && an(r, l) ? l : null;
            })({
              dragStartTime: t,
              droppable: c,
              subject: l,
              center: a,
              shouldUseTimeDampening: n,
            });
            s && o(c.descriptor.id, s);
          }
        },
        un = function (e) {
          var r = e.move,
            t = e.scrollDroppable,
            n = e.scrollWindow,
            i = function (e, r) {
              if (!an(e, r)) return r;
              var n = (function (e, r) {
                var t = e.frame;
                return t && an(e, r)
                  ? tn({
                      current: t.scroll.current,
                      max: t.scroll.max,
                      change: r,
                    })
                  : null;
              })(e, r);
              if (!n) return t(e.descriptor.id, r), null;
              var i = me(r, n);
              return t(e.descriptor.id, i), me(r, i);
            },
            o = function (e, r, t) {
              if (!e) return t;
              if (!on(r, t)) return t;
              var i = (function (e, r) {
                if (!on(e, r)) return null;
                var t = e.scroll.max,
                  n = e.scroll.current;
                return tn({ current: n, max: t, change: r });
              })(r, t);
              if (!i) return n(t), null;
              var o = me(t, i);
              return n(o), me(t, o);
            };
          return function (e) {
            var t = e.scrollJumpRequest;
            if (t) {
              var n = xr(e.impact);
              n || le(!1);
              var a = i(e.dimensions.droppables[n], t);
              if (a) {
                var l = e.viewport,
                  u = o(e.isWindowScrollAllowed, l, a);
                u &&
                  (function (e, t) {
                    var n = ve(e.current.client.selection, t);
                    r({ client: n });
                  })(e, u);
              }
            }
          };
        },
        cn = function (e) {
          var r = e.scrollDroppable,
            t = e.scrollWindow,
            n = e.move,
            i = (function (e) {
              var r = e.scrollWindow,
                t = e.scrollDroppable,
                n = (0, ee.A)(r),
                i = (0, ee.A)(t),
                o = null,
                a = function (e) {
                  o || le(!1);
                  var r = o,
                    t = r.shouldUseTimeDampening,
                    a = r.dragStartTime;
                  ln({
                    state: e,
                    scrollWindow: n,
                    scrollDroppable: i,
                    dragStartTime: a,
                    shouldUseTimeDampening: t,
                  });
                };
              return {
                start: function (e) {
                  _r(), o && le(!1);
                  var r = Date.now(),
                    t = !1,
                    n = function () {
                      t = !0;
                    };
                  ln({
                    state: e,
                    dragStartTime: 0,
                    shouldUseTimeDampening: !1,
                    scrollWindow: n,
                    scrollDroppable: n,
                  }),
                    (o = { dragStartTime: r, shouldUseTimeDampening: t }),
                    Fr(),
                    t && a(e);
                },
                stop: function () {
                  o && (n.cancel(), i.cancel(), (o = null));
                },
                scroll: a,
              };
            })({ scrollWindow: t, scrollDroppable: r }),
            o = un({ move: n, scrollWindow: t, scrollDroppable: r });
          return {
            scroll: function (e) {
              "DRAGGING" === e.phase &&
                ("FLUID" !== e.movementMode
                  ? e.scrollJumpRequest && o(e)
                  : i.scroll(e));
            },
            start: i.start,
            stop: i.stop,
          };
        },
        sn = "data-rbd",
        dn = {
          base: (_t = sn + "-drag-handle"),
          draggableId: _t + "-draggable-id",
          contextId: _t + "-context-id",
        },
        pn = (function () {
          var e = sn + "-draggable";
          return { base: e, contextId: e + "-context-id", id: e + "-id" };
        })(),
        fn = (function () {
          var e = sn + "-droppable";
          return { base: e, contextId: e + "-context-id", id: e + "-id" };
        })(),
        gn = { contextId: sn + "-scroll-container-context-id" },
        vn = function (e, r) {
          return e
            .map(function (e) {
              var t = e.styles[r];
              return t ? e.selector + " { " + t + " }" : "";
            })
            .join(" ");
        },
        mn = function (e) {
          var r,
            t,
            n,
            i =
              ((r = e),
              function (e) {
                return "[" + e + '="' + r + '"]';
              }),
            o =
              ((t = "\n      cursor: -webkit-grab;\n      cursor: grab;\n    "),
              {
                selector: i(dn.contextId),
                styles: {
                  always:
                    "\n          -webkit-touch-callout: none;\n          -webkit-tap-highlight-color: rgba(0,0,0,0);\n          touch-action: manipulation;\n        ",
                  resting: t,
                  dragging: "pointer-events: none;",
                  dropAnimating: t,
                },
              }),
            a = [
              ((n = "\n      transition: " + st.outOfTheWay + ";\n    "),
              {
                selector: i(pn.contextId),
                styles: { dragging: n, dropAnimating: n, userCancel: n },
              }),
              o,
              {
                selector: i(fn.contextId),
                styles: { always: "overflow-anchor: none;" },
              },
              {
                selector: "body, :host",
                styles: {
                  dragging:
                    "\n        cursor: grabbing;\n        cursor: -webkit-grabbing;\n        user-select: none;\n        -webkit-user-select: none;\n        -moz-user-select: none;\n        -ms-user-select: none;\n        overflow-anchor: none;\n      ",
                },
              },
            ];
          return {
            always: vn(a, "always"),
            resting: vn(a, "resting"),
            dragging: vn(a, "dragging"),
            dropAnimating: vn(a, "dropAnimating"),
            userCancel: vn(a, "userCancel"),
          };
        },
        bn =
          "undefined" != typeof window &&
          void 0 !== window.document &&
          void 0 !== window.document.createElement
            ? n.useLayoutEffect
            : n.useEffect,
        hn = function (e) {
          var r = e || document.querySelector("head");
          return r || le(!1), r;
        },
        yn = function (e) {
          var r = document.createElement("style");
          return e && r.setAttribute("nonce", e), (r.type = "text/css"), r;
        };
      function In(e) {
        return (e.composedPath && e.composedPath()[0]) || e.target;
      }
      function Dn(e, r, t) {
        var n,
          i = e && e.getRootNode(),
          o = i && i.querySelectorAll ? i : document,
          a = Oe(
            ((n = o.querySelectorAll(r)), Array.prototype.slice.call(n)),
            t,
          );
        return !a && o.host ? Dn(o.host, r, t) : a;
      }
      var xn = function (e) {
        return e && e.ownerDocument ? e.ownerDocument.defaultView : window;
      };
      function wn(e) {
        return e instanceof xn(e).HTMLElement;
      }
      function An(e, r, t) {
        var n = Dn(t, "[" + dn.contextId + '="' + e + '"]', function (e) {
          return e.getAttribute(dn.draggableId) === r;
        });
        return n && wn(n) ? n : null;
      }
      function En() {
        var e = { draggables: {}, droppables: {} },
          r = [];
        function t(e) {
          r.length &&
            r.forEach(function (r) {
              return r(e);
            });
        }
        function n(r) {
          return e.draggables[r] || null;
        }
        function i(r) {
          return e.droppables[r] || null;
        }
        return {
          draggable: {
            register: function (r) {
              (e.draggables[r.descriptor.id] = r),
                t({ type: "ADDITION", value: r });
            },
            update: function (r, t) {
              var n = e.draggables[t.descriptor.id];
              n &&
                n.uniqueId === r.uniqueId &&
                (delete e.draggables[t.descriptor.id],
                (e.draggables[r.descriptor.id] = r));
            },
            unregister: function (r) {
              var i = r.descriptor.id,
                o = n(i);
              o &&
                r.uniqueId === o.uniqueId &&
                (delete e.draggables[i], t({ type: "REMOVAL", value: r }));
            },
            getById: function (e) {
              var r = n(e);
              return r || le(!1), r;
            },
            findById: n,
            exists: function (e) {
              return Boolean(n(e));
            },
            getAllByType: function (r) {
              return Se(e.draggables).filter(function (e) {
                return e.descriptor.type === r;
              });
            },
          },
          droppable: {
            register: function (r) {
              e.droppables[r.descriptor.id] = r;
            },
            unregister: function (r) {
              var t = i(r.descriptor.id);
              t &&
                r.uniqueId === t.uniqueId &&
                delete e.droppables[r.descriptor.id];
            },
            getById: function (e) {
              var r = i(e);
              return r || le(!1), r;
            },
            findById: i,
            exists: function (e) {
              return Boolean(i(e));
            },
            getAllByType: function (r) {
              return Se(e.droppables).filter(function (e) {
                return e.descriptor.type === r;
              });
            },
          },
          subscribe: function (e) {
            return (
              r.push(e),
              function () {
                var t = r.indexOf(e);
                -1 !== t && r.splice(t, 1);
              }
            );
          },
          clean: function () {
            (e.draggables = {}), (e.droppables = {}), (r.length = 0);
          },
        };
      }
      var Cn = n.createContext(null),
        Pn = function () {
          var e = document.body;
          return e || le(!1), e;
        },
        Sn = {
          position: "absolute",
          width: "1px",
          height: "1px",
          margin: "-1px",
          border: "0",
          padding: "0",
          overflow: "hidden",
          clip: "rect(0 0 0 0)",
          "clip-path": "inset(100%)",
        },
        Nn = function (e) {
          return "rbd-announcement-" + e;
        };
      var On = 0,
        Rn = { separator: "::" };
      function Bn(e, r) {
        return (
          void 0 === r && (r = Rn),
          (0, Y.Kr)(
            function () {
              return "" + e + r.separator + On++;
            },
            [r.separator, e],
          )
        );
      }
      var Tn = n.createContext(null);
      function Ln(e) {
        0;
      }
      function Gn(e, r) {
        Ln();
      }
      function Mn(e) {
        var r = (0, n.useRef)(e);
        return (
          (0, n.useEffect)(function () {
            r.current = e;
          }),
          r
        );
      }
      var _n,
        Fn = (((_n = {})[13] = !0), (_n[9] = !0), _n),
        kn = function (e) {
          Fn[e.keyCode] && e.preventDefault();
        },
        Wn = (function () {
          var e = "visibilitychange";
          return "undefined" == typeof document
            ? e
            : Oe([e, "ms" + e, "webkit" + e, "moz" + e, "o" + e], function (e) {
                return "on" + e in document;
              }) || e;
        })();
      var Un,
        Hn = { type: "IDLE" };
      function jn(e) {
        var r = e.cancel,
          t = e.completed,
          n = e.getPhase,
          i = e.setPhase;
        return [
          {
            eventName: "mousemove",
            fn: function (e) {
              var r = e.button,
                t = e.clientX,
                o = e.clientY;
              if (0 === r) {
                var a = { x: t, y: o },
                  l = n();
                if ("DRAGGING" === l.type)
                  return e.preventDefault(), void l.actions.move(a);
                "PENDING" !== l.type && le(!1);
                var u = l.point;
                if (
                  ((c = u),
                  (s = a),
                  Math.abs(s.x - c.x) >= 5 || Math.abs(s.y - c.y) >= 5)
                ) {
                  var c, s;
                  e.preventDefault();
                  var d = l.actions.fluidLift(a);
                  i({ type: "DRAGGING", actions: d });
                }
              }
            },
          },
          {
            eventName: "mouseup",
            fn: function (e) {
              var i = n();
              "DRAGGING" === i.type
                ? (e.preventDefault(),
                  i.actions.drop({ shouldBlockNextClick: !0 }),
                  t())
                : r();
            },
          },
          {
            eventName: "mousedown",
            fn: function (e) {
              "DRAGGING" === n().type && e.preventDefault(), r();
            },
          },
          {
            eventName: "keydown",
            fn: function (e) {
              if ("PENDING" !== n().type)
                return 27 === e.keyCode
                  ? (e.preventDefault(), void r())
                  : void kn(e);
              r();
            },
          },
          { eventName: "resize", fn: r },
          {
            eventName: "scroll",
            options: { passive: !0, capture: !1 },
            fn: function () {
              "PENDING" === n().type && r();
            },
          },
          {
            eventName: "webkitmouseforcedown",
            fn: function (e) {
              var t = n();
              "IDLE" === t.type && le(!1),
                t.actions.shouldRespectForcePress() ? r() : e.preventDefault();
            },
          },
          { eventName: Wn, fn: r },
        ];
      }
      function qn() {}
      var Vn =
        (((Un = {})[34] = !0), (Un[33] = !0), (Un[36] = !0), (Un[35] = !0), Un);
      function Kn(e, r) {
        function t() {
          r(), e.cancel();
        }
        return [
          {
            eventName: "keydown",
            fn: function (n) {
              return 27 === n.keyCode
                ? (n.preventDefault(), void t())
                : 32 === n.keyCode
                  ? (n.preventDefault(), r(), void e.drop())
                  : 40 === n.keyCode
                    ? (n.preventDefault(), void e.moveDown())
                    : 38 === n.keyCode
                      ? (n.preventDefault(), void e.moveUp())
                      : 39 === n.keyCode
                        ? (n.preventDefault(), void e.moveRight())
                        : 37 === n.keyCode
                          ? (n.preventDefault(), void e.moveLeft())
                          : void (Vn[n.keyCode] ? n.preventDefault() : kn(n));
            },
          },
          { eventName: "mousedown", fn: t },
          { eventName: "mouseup", fn: t },
          { eventName: "click", fn: t },
          { eventName: "touchstart", fn: t },
          { eventName: "resize", fn: t },
          { eventName: "wheel", fn: t, options: { passive: !0 } },
          { eventName: Wn, fn: t },
        ];
      }
      var zn = { type: "IDLE" };
      var Yn = {
        input: !0,
        button: !0,
        textarea: !0,
        select: !0,
        option: !0,
        optgroup: !0,
        video: !0,
        audio: !0,
      };
      function Jn(e, r) {
        if (null == r) return !1;
        if (Boolean(Yn[r.tagName.toLowerCase()])) return !0;
        var t = r.getAttribute("contenteditable");
        return "true" === t || "" === t || (r !== e && Jn(e, r.parentElement));
      }
      function Xn(e, r) {
        var t = In(r);
        return !!wn(t) && Jn(e, t);
      }
      var $n = function (e) {
        return (0, J.l)(e.getBoundingClientRect()).center;
      };
      var Qn = (function () {
        var e = "matches";
        return "undefined" == typeof document
          ? e
          : Oe([e, "msMatchesSelector", "webkitMatchesSelector"], function (e) {
              return e in Element.prototype;
            }) || e;
      })();
      function Zn(e, r) {
        return null == e ? null : e[Qn](r) ? e : Zn(e.parentElement, r);
      }
      function ei(e, r) {
        return e.closest ? e.closest(r) : Zn(e, r);
      }
      function ri(e, r) {
        if (!e || e === document || e === window) return null;
        var t = ei(e, r);
        return t || ri(e.getRootNode().host, r);
      }
      function ti(e, r) {
        var t = In(r);
        if (
          !(function (e) {
            return e instanceof xn(e).Element;
          })(t)
        )
          return null;
        var n = (function (e) {
            return "[" + dn.contextId + '="' + e + '"]';
          })(e),
          i = ri(t, n);
        return i && wn(i) ? i : null;
      }
      function ni(e) {
        e.preventDefault();
      }
      function ii(e) {
        var r = e.expected,
          t = e.phase,
          n = e.isLockActive;
        e.shouldWarn;
        return !!n() && r === t;
      }
      function oi(e) {
        var r = e.lockAPI,
          t = e.store,
          n = e.registry,
          i = e.draggableId;
        if (r.isClaimed()) return !1;
        var o = n.draggable.findById(i);
        return !!o && !!o.options.isEnabled && !!kt(t.getState(), i);
      }
      function ai(e) {
        var r = e.lockAPI,
          t = e.contextId,
          n = e.store,
          i = e.registry,
          a = e.draggableId,
          l = e.forceSensorStop,
          u = e.sourceEvent;
        if (!oi({ lockAPI: r, store: n, registry: i, draggableId: a }))
          return null;
        var c,
          s,
          d = i.draggable.getById(a),
          p = (function (e, r, t) {
            var n = Dn(t, "[" + pn.contextId + '="' + e + '"]', function (e) {
              return e.getAttribute(pn.id) === r;
            });
            return n && wn(n) ? n : null;
          })(
            t,
            d.descriptor.id,
            ((s = (c = u) && c.composedPath && c.composedPath()[0]) &&
              s.getRootNode()) ||
              document,
          );
        if (!p) return null;
        if (u && !d.options.canDragInteractiveElements && Xn(p, u)) return null;
        var f = r.claim(l || te),
          g = "PRE_DRAG";
        function v() {
          return d.options.shouldRespectForcePress;
        }
        function m() {
          return r.isActive(f);
        }
        var b = function (e, r) {
          ii({ expected: e, phase: g, isLockActive: m, shouldWarn: !0 }) &&
            n.dispatch(r());
        }.bind(null, "DRAGGING");
        function h(e) {
          function t() {
            r.release(), (g = "COMPLETED");
          }
          function i(r, i) {
            if (
              (void 0 === i && (i = { shouldBlockNextClick: !1 }),
              e.cleanup(),
              i.shouldBlockNextClick)
            ) {
              var o = ne(window, [
                {
                  eventName: "click",
                  fn: ni,
                  options: { once: !0, passive: !1, capture: !0 },
                },
              ]);
              setTimeout(o);
            }
            t(), n.dispatch(it({ reason: r }));
          }
          return (
            "PRE_DRAG" !== g && (t(), "PRE_DRAG" !== g && le(!1)),
            n.dispatch(Vr(e.liftActionArgs)),
            (g = "DRAGGING"),
            (0, o.A)(
              {
                isActive: function () {
                  return ii({
                    expected: "DRAGGING",
                    phase: g,
                    isLockActive: m,
                    shouldWarn: !1,
                  });
                },
                shouldRespectForcePress: v,
                drop: function (e) {
                  return i("DROP", e);
                },
                cancel: function (e) {
                  return i("CANCEL", e);
                },
              },
              e.actions,
            )
          );
        }
        return {
          isActive: function () {
            return ii({
              expected: "PRE_DRAG",
              phase: g,
              isLockActive: m,
              shouldWarn: !1,
            });
          },
          shouldRespectForcePress: v,
          fluidLift: function (e) {
            var r = (0, ee.A)(function (e) {
                b(function () {
                  return $r({ client: e });
                });
              }),
              t = h({
                liftActionArgs: {
                  id: a,
                  clientSelection: e,
                  movementMode: "FLUID",
                },
                cleanup: function () {
                  return r.cancel();
                },
                actions: { move: r },
              });
            return (0, o.A)({}, t, { move: r });
          },
          snapLift: function () {
            var e = {
              moveUp: function () {
                return b(Qr);
              },
              moveRight: function () {
                return b(et);
              },
              moveDown: function () {
                return b(Zr);
              },
              moveLeft: function () {
                return b(rt);
              },
            };
            return h({
              liftActionArgs: {
                id: a,
                clientSelection: $n(p),
                movementMode: "SNAP",
              },
              cleanup: te,
              actions: e,
            });
          },
          abort: function () {
            ii({
              expected: "PRE_DRAG",
              phase: g,
              isLockActive: m,
              shouldWarn: !0,
            }) && r.release();
          },
        };
      }
      var li = [
        function (e) {
          var r = (0, n.useRef)(Hn),
            t = (0, n.useRef)(te),
            i = (0, Y.Kr)(
              function () {
                return {
                  eventName: "mousedown",
                  fn: function (r) {
                    if (
                      !r.defaultPrevented &&
                      0 === r.button &&
                      !(r.ctrlKey || r.metaKey || r.shiftKey || r.altKey)
                    ) {
                      var n = e.findClosestDraggableId(r);
                      if (n) {
                        var i = e.tryGetLock(n, l, { sourceEvent: r });
                        if (i) {
                          r.preventDefault();
                          var o = { x: r.clientX, y: r.clientY };
                          t.current(), s(i, o);
                        }
                      }
                    }
                  },
                };
              },
              [e],
            ),
            o = (0, Y.Kr)(
              function () {
                return {
                  eventName: "webkitmouseforcewillbegin",
                  fn: function (r) {
                    if (!r.defaultPrevented) {
                      var t = e.findClosestDraggableId(r);
                      if (t) {
                        var n = e.findOptionsForDraggable(t);
                        n &&
                          (n.shouldRespectForcePress ||
                            (e.canGetLock(t) && r.preventDefault()));
                      }
                    }
                  },
                };
              },
              [e],
            ),
            a = (0, Y.hb)(
              function () {
                t.current = ne(e.getWindow(), [o, i], {
                  passive: !1,
                  capture: !0,
                });
              },
              [e, o, i],
            ),
            l = (0, Y.hb)(
              function () {
                "IDLE" !== r.current.type &&
                  ((r.current = Hn), t.current(), a());
              },
              [a],
            ),
            u = (0, Y.hb)(
              function () {
                var e = r.current;
                l(),
                  "DRAGGING" === e.type &&
                    e.actions.cancel({ shouldBlockNextClick: !0 }),
                  "PENDING" === e.type && e.actions.abort();
              },
              [l],
            ),
            c = (0, Y.hb)(
              function () {
                var n = jn({
                  cancel: u,
                  completed: l,
                  getPhase: function () {
                    return r.current;
                  },
                  setPhase: function (e) {
                    r.current = e;
                  },
                });
                t.current = ne(e.getWindow(), n, { capture: !0, passive: !1 });
              },
              [e, u, l],
            ),
            s = (0, Y.hb)(
              function (e, t) {
                "IDLE" !== r.current.type && le(!1),
                  (r.current = { type: "PENDING", point: t, actions: e }),
                  c();
              },
              [c],
            );
          bn(
            function () {
              return (
                a(),
                function () {
                  t.current();
                }
              );
            },
            [a],
          );
        },
        function (e) {
          var r = (0, n.useRef)(qn),
            t = (0, Y.Kr)(
              function () {
                return {
                  eventName: "keydown",
                  fn: function (t) {
                    if (!t.defaultPrevented && 32 === t.keyCode) {
                      var n = e.findClosestDraggableId(t);
                      if (n) {
                        var o = e.tryGetLock(n, u, { sourceEvent: t });
                        if (o) {
                          t.preventDefault();
                          var a = !0,
                            l = o.snapLift();
                          r.current(),
                            (r.current = ne(e.getWindow(), Kn(l, u), {
                              capture: !0,
                              passive: !1,
                            }));
                        }
                      }
                    }
                    function u() {
                      a || le(!1), (a = !1), r.current(), i();
                    }
                  },
                };
              },
              [e],
            ),
            i = (0, Y.hb)(
              function () {
                r.current = ne(e.getWindow(), [t], {
                  passive: !1,
                  capture: !0,
                });
              },
              [e, t],
            );
          bn(
            function () {
              return (
                i(),
                function () {
                  r.current();
                }
              );
            },
            [i],
          );
        },
        function (e) {
          var r = (0, n.useRef)(zn),
            t = (0, n.useRef)(te),
            i = (0, Y.hb)(function () {
              return r.current;
            }, []),
            o = (0, Y.hb)(function (e) {
              r.current = e;
            }, []),
            a = (0, Y.Kr)(
              function () {
                return {
                  eventName: "touchstart",
                  fn: function (r) {
                    if (!r.defaultPrevented) {
                      var n = e.findClosestDraggableId(r);
                      if (n) {
                        var i = e.tryGetLock(n, u, { sourceEvent: r });
                        if (i) {
                          var o = r.touches[0],
                            a = { x: o.clientX, y: o.clientY };
                          t.current(), p(i, a);
                        }
                      }
                    }
                  },
                };
              },
              [e],
            ),
            l = (0, Y.hb)(
              function () {
                t.current = ne(e.getWindow(), [a], {
                  capture: !0,
                  passive: !1,
                });
              },
              [e, a],
            ),
            u = (0, Y.hb)(
              function () {
                var e = r.current;
                "IDLE" !== e.type &&
                  ("PENDING" === e.type && clearTimeout(e.longPressTimerId),
                  o(zn),
                  t.current(),
                  l());
              },
              [l, o],
            ),
            c = (0, Y.hb)(
              function () {
                var e = r.current;
                u(),
                  "DRAGGING" === e.type &&
                    e.actions.cancel({ shouldBlockNextClick: !0 }),
                  "PENDING" === e.type && e.actions.abort();
              },
              [u],
            ),
            s = (0, Y.hb)(
              function () {
                var r = { capture: !0, passive: !1 },
                  n = { cancel: c, completed: u, getPhase: i },
                  o = ne(
                    e.getWindow(),
                    (function (e) {
                      var r = e.cancel,
                        t = e.completed,
                        n = e.getPhase;
                      return [
                        {
                          eventName: "touchmove",
                          options: { capture: !1 },
                          fn: function (e) {
                            var t = n();
                            if ("DRAGGING" === t.type) {
                              t.hasMoved = !0;
                              var i = e.touches[0],
                                o = { x: i.clientX, y: i.clientY };
                              e.preventDefault(), t.actions.move(o);
                            } else r();
                          },
                        },
                        {
                          eventName: "touchend",
                          fn: function (e) {
                            var i = n();
                            "DRAGGING" === i.type
                              ? (e.preventDefault(),
                                i.actions.drop({ shouldBlockNextClick: !0 }),
                                t())
                              : r();
                          },
                        },
                        {
                          eventName: "touchcancel",
                          fn: function (e) {
                            "DRAGGING" === n().type
                              ? (e.preventDefault(), r())
                              : r();
                          },
                        },
                        {
                          eventName: "touchforcechange",
                          fn: function (e) {
                            var t = n();
                            "IDLE" === t.type && le(!1);
                            var i = e.touches[0];
                            if (i && i.force >= 0.15) {
                              var o = t.actions.shouldRespectForcePress();
                              if ("PENDING" !== t.type)
                                return o
                                  ? t.hasMoved
                                    ? void e.preventDefault()
                                    : void r()
                                  : void e.preventDefault();
                              o && r();
                            }
                          },
                        },
                        { eventName: Wn, fn: r },
                      ];
                    })(n),
                    r,
                  ),
                  a = ne(
                    e.getWindow(),
                    (function (e) {
                      var r = e.cancel,
                        t = e.getPhase;
                      return [
                        { eventName: "orientationchange", fn: r },
                        { eventName: "resize", fn: r },
                        {
                          eventName: "contextmenu",
                          fn: function (e) {
                            e.preventDefault();
                          },
                        },
                        {
                          eventName: "keydown",
                          fn: function (e) {
                            "DRAGGING" === t().type
                              ? (27 === e.keyCode && e.preventDefault(), r())
                              : r();
                          },
                        },
                        { eventName: Wn, fn: r },
                      ];
                    })(n),
                    r,
                  );
                t.current = function () {
                  o(), a();
                };
              },
              [e, c, i, u],
            ),
            d = (0, Y.hb)(
              function () {
                var e = i();
                "PENDING" !== e.type && le(!1);
                var r = e.actions.fluidLift(e.point);
                o({ type: "DRAGGING", actions: r, hasMoved: !1 });
              },
              [i, o],
            ),
            p = (0, Y.hb)(
              function (e, r) {
                "IDLE" !== i().type && le(!1);
                var t = setTimeout(d, 120);
                o({
                  type: "PENDING",
                  point: r,
                  actions: e,
                  longPressTimerId: t,
                }),
                  s();
              },
              [s, i, o, d],
            );
          bn(
            function () {
              return (
                l(),
                function () {
                  t.current();
                  var e = i();
                  "PENDING" === e.type &&
                    (clearTimeout(e.longPressTimerId), o(zn));
                }
              );
            },
            [i, l, o],
          ),
            bn(
              function () {
                return ne(e.getWindow(), [
                  {
                    eventName: "touchmove",
                    fn: function () {},
                    options: { capture: !1, passive: !1 },
                  },
                ]);
              },
              [e],
            );
        },
      ];
      function ui(e) {
        var r = e.contextId,
          t = e.store,
          i = e.registry,
          o = e.customSensors,
          a = e.enableDefaultSensors,
          l = e.windowToUse,
          u = [].concat(a ? li : [], o || []),
          c = (0, n.useState)(function () {
            return (function () {
              var e = null;
              function r() {
                e || le(!1), (e = null);
              }
              return {
                isClaimed: function () {
                  return Boolean(e);
                },
                isActive: function (r) {
                  return r === e;
                },
                claim: function (r) {
                  e && le(!1);
                  var t = { abandon: r };
                  return (e = t), t;
                },
                release: r,
                tryAbandon: function () {
                  e && (e.abandon(), r());
                },
              };
            })();
          })[0],
          s = (0, Y.hb)(
            function (e, r) {
              e.isDragging && !r.isDragging && c.tryAbandon();
            },
            [c],
          );
        bn(
          function () {
            var e = t.getState();
            return t.subscribe(function () {
              var r = t.getState();
              s(e, r), (e = r);
            });
          },
          [c, t, s],
        ),
          bn(
            function () {
              return c.tryAbandon;
            },
            [c.tryAbandon],
          );
        var d = (0, Y.hb)(
            function (e) {
              return oi({ lockAPI: c, registry: i, store: t, draggableId: e });
            },
            [c, i, t],
          ),
          p = (0, Y.hb)(
            function (e, n, o) {
              return ai({
                lockAPI: c,
                registry: i,
                contextId: r,
                store: t,
                draggableId: e,
                forceSensorStop: n,
                sourceEvent: o && o.sourceEvent ? o.sourceEvent : null,
              });
            },
            [r, c, i, t],
          ),
          f = (0, Y.hb)(
            function (e) {
              return (function (e, r) {
                var t = ti(e, r);
                return t ? t.getAttribute(dn.draggableId) : null;
              })(r, e);
            },
            [r],
          ),
          g = (0, Y.hb)(
            function (e) {
              var r = i.draggable.findById(e);
              return r ? r.options : null;
            },
            [i.draggable],
          ),
          v = (0, Y.hb)(
            function () {
              c.isClaimed() &&
                (c.tryAbandon(),
                "IDLE" !== t.getState().phase && t.dispatch(tt()));
            },
            [c, t],
          ),
          m = (0, Y.hb)(c.isClaimed, [c]),
          b = (0, Y.hb)(
            function () {
              return l;
            },
            [l],
          ),
          h = (0, Y.Kr)(
            function () {
              return {
                canGetLock: d,
                tryGetLock: p,
                findClosestDraggableId: f,
                findOptionsForDraggable: g,
                tryReleaseLock: v,
                isLockClaimed: m,
                getWindow: b,
              };
            },
            [d, p, f, g, v, m, b],
          );
        Ln();
        for (var y = 0; y < u.length; y++) u[y](h);
      }
      var ci = function (e) {
        return {
          onBeforeCapture: e.onBeforeCapture,
          onBeforeDragStart: e.onBeforeDragStart,
          onDragStart: e.onDragStart,
          onDragEnd: e.onDragEnd,
          onDragUpdate: e.onDragUpdate,
        };
      };
      function si(e) {
        return e.current || le(!1), e.current;
      }
      function di(e) {
        var r = e.contextId,
          t = e.setCallbacks,
          i = e.sensors,
          l = e.nonce,
          u = e.dragHandleUsageInstructions,
          c = (0, n.useRef)(null),
          [s, d] = n.useState(),
          p = n.useMemo(
            function () {
              return s ? s.ownerDocument.defaultView : window;
            },
            [s],
          );
        Gn();
        var g = Mn(e),
          v = (0, Y.hb)(
            function () {
              return ci(g.current);
            },
            [g],
          ),
          m = (function (e) {
            var r = (0, Y.Kr)(
                function () {
                  return Nn(e);
                },
                [e],
              ),
              t = (0, n.useRef)(null);
            return (
              (0, n.useEffect)(
                function () {
                  var e = document.createElement("div");
                  return (
                    (t.current = e),
                    (e.id = r),
                    e.setAttribute("aria-live", "assertive"),
                    e.setAttribute("aria-atomic", "true"),
                    (0, o.A)(e.style, Sn),
                    Pn().appendChild(e),
                    function () {
                      setTimeout(function () {
                        var r = Pn();
                        r.contains(e) && r.removeChild(e),
                          e === t.current && (t.current = null);
                      });
                    }
                  );
                },
                [r],
              ),
              (0, Y.hb)(function (e) {
                var r = t.current;
                r && (r.textContent = e);
              }, [])
            );
          })(r),
          b = (function (e) {
            var r = e.contextId,
              t = e.text,
              i = Bn("hidden-text", { separator: "-" }),
              o = (0, Y.Kr)(
                function () {
                  return (
                    "rbd-hidden-text-" +
                    (e = { contextId: r, uniqueId: i }).contextId +
                    "-" +
                    e.uniqueId
                  );
                  var e;
                },
                [i, r],
              );
            return (
              (0, n.useEffect)(
                function () {
                  var e = document.createElement("div");
                  return (
                    (e.id = o),
                    (e.textContent = t),
                    (e.style.display = "none"),
                    Pn().appendChild(e),
                    function () {
                      var r = Pn();
                      r.contains(e) && r.removeChild(e);
                    }
                  );
                },
                [o, t],
              ),
              o
            );
          })({ contextId: r, text: u }),
          h = (function (e, r, t) {
            var i = (0, Y.Kr)(
                function () {
                  return mn(e);
                },
                [e],
              ),
              o = (0, n.useRef)(null),
              a = (0, n.useRef)(null),
              l = (0, Y.hb)(
                Z(function (e) {
                  var r = a.current;
                  r || le(!1), (r.textContent = e);
                }),
                [],
              ),
              u = (0, Y.hb)(function (e) {
                var r = o.current;
                r || le(!1), (r.textContent = e);
              }, []);
            bn(
              function () {
                (o.current || a.current) && le(!1);
                var n = yn(r),
                  c = yn(r);
                (o.current = n),
                  (a.current = c),
                  n.setAttribute(sn + "-always", e),
                  c.setAttribute(sn + "-dynamic", e);
                var s = hn(t);
                return (
                  s.appendChild(n),
                  s.appendChild(c),
                  u(i.always),
                  l(i.resting),
                  function () {
                    var e = function (e) {
                      var r = e.current;
                      r || le(!1), s.removeChild(r), (e.current = null);
                    };
                    e(o), e(a);
                  }
                );
              },
              [r, u, l, i.always, i.resting, e, t],
            );
            var c = (0, Y.hb)(
                function () {
                  return l(i.dragging);
                },
                [l, i.dragging],
              ),
              s = (0, Y.hb)(
                function (e) {
                  l("DROP" !== e ? i.userCancel : i.dropAnimating);
                },
                [l, i.dropAnimating, i.userCancel],
              ),
              d = (0, Y.hb)(
                function () {
                  a.current && l(i.resting);
                },
                [l, i.resting],
              );
            return (0, Y.Kr)(
              function () {
                return { dragging: c, dropping: s, resting: d };
              },
              [c, s, d],
            );
          })(r, l, e.stylesInsertionPoint),
          y = (0, Y.hb)(function (e) {
            si(c).dispatch(e);
          }, []),
          I = (0, Y.Kr)(
            function () {
              return (0, a.zH)(
                {
                  publishWhileDragging: Kr,
                  updateDroppableScroll: Yr,
                  updateDroppableIsEnabled: Jr,
                  updateDroppableIsCombineEnabled: Xr,
                  collectionStarting: zr,
                },
                y,
              );
            },
            [y],
          ),
          D = (function () {
            var e = (0, Y.Kr)(En, []);
            return (
              (0, n.useEffect)(
                function () {
                  return function () {
                    requestAnimationFrame(e.clean);
                  };
                },
                [e],
              ),
              e
            );
          })(),
          x = (0, Y.Kr)(
            function () {
              return Ft(p, D, I);
            },
            [p, D, I],
          ),
          w = (0, Y.Kr)(
            function () {
              return cn(
                (0, o.A)(
                  { scrollWindow: Wt, scrollDroppable: x.scrollDroppable },
                  (0, a.zH)({ move: $r }, y),
                ),
              );
            },
            [x.scrollDroppable, y],
          ),
          A = (function (e) {
            var r = (0, n.useRef)({}),
              t = (0, n.useRef)(null),
              i = (0, n.useRef)(null),
              o = (0, n.useRef)(!1),
              a = (0, Y.hb)(function (e, t) {
                var n = { id: e, focus: t };
                return (
                  (r.current[e] = n),
                  function () {
                    var t = r.current;
                    t[e] !== n && delete t[e];
                  }
                );
              }, []),
              l = (0, Y.hb)(
                function (r) {
                  var t = An(e, r);
                  t && t !== document.activeElement && t.focus();
                },
                [e],
              ),
              u = (0, Y.hb)(function (e, r) {
                t.current === e && (t.current = r);
              }, []),
              c = (0, Y.hb)(
                function () {
                  i.current ||
                    (o.current &&
                      (i.current = requestAnimationFrame(function () {
                        i.current = null;
                        var e = t.current;
                        e && l(e);
                      })));
                },
                [l],
              ),
              s = (0, Y.hb)(function (e) {
                t.current = null;
                var r = document.activeElement;
                r && r.getAttribute(dn.draggableId) === e && (t.current = e);
              }, []);
            return (
              bn(function () {
                return (
                  (o.current = !0),
                  function () {
                    o.current = !1;
                    var e = i.current;
                    e && cancelAnimationFrame(e);
                  }
                );
              }, []),
              (0, Y.Kr)(
                function () {
                  return {
                    register: a,
                    tryRecordFocus: s,
                    tryRestoreFocusRecorded: c,
                    tryShiftRecord: u,
                  };
                },
                [a, s, c, u],
              )
            );
          })(r),
          E = (0, Y.Kr)(
            function () {
              return Ot({
                announce: m,
                autoScroller: w,
                dimensionMarshal: x,
                focusMarshal: A,
                getResponders: v,
                styleMarshal: h,
              });
            },
            [m, w, x, A, v, h],
          );
        s && (c.current = E);
        var C = (0, Y.hb)(function () {
            var e = si(c);
            "IDLE" !== e.getState().phase && e.dispatch(tt());
          }, []),
          P = (0, Y.hb)(function () {
            var e = si(c).getState();
            return e.isDragging || "DROP_ANIMATING" === e.phase;
          }, []);
        t(
          (0, Y.Kr)(
            function () {
              return { isDragging: P, tryAbort: C };
            },
            [P, C],
          ),
        );
        var S = (0, Y.hb)(function (e) {
            return kt(si(c).getState(), e);
          }, []),
          N = (0, Y.hb)(function () {
            return Ar(si(c).getState());
          }, []),
          O = (0, Y.Kr)(
            function () {
              return {
                marshal: x,
                focus: A,
                contextId: r,
                canLift: S,
                isMovementAllowed: N,
                dragHandleUsageInstructionsId: b,
                registry: D,
              };
            },
            [r, x, b, A, S, N, D],
          );
        return (
          ui({
            contextId: r,
            store: E,
            registry: D,
            customSensors: i,
            enableDefaultSensors: !1 !== e.enableDefaultSensors,
            windowToUse: p,
          }),
          (0, n.useEffect)(
            function () {
              return C;
            },
            [C],
          ),
          n.createElement(
            Tn.Provider,
            { value: O },
            n.createElement("div", { ref: d }),
            s && n.createElement(f, { context: Cn, store: E }, e.children),
          )
        );
      }
      var pi = 0;
      function fi(e) {
        var r = (0, Y.Kr)(function () {
            return "" + pi++;
          }, []),
          t = e.dragHandleUsageInstructions || fe.dragHandleUsageInstructions;
        return n.createElement(ue, null, function (i) {
          return n.createElement(
            di,
            {
              nonce: e.nonce,
              contextId: r,
              setCallbacks: i,
              dragHandleUsageInstructions: t,
              enableDefaultSensors: e.enableDefaultSensors,
              sensors: e.sensors,
              onBeforeCapture: e.onBeforeCapture,
              onBeforeDragStart: e.onBeforeDragStart,
              onDragStart: e.onDragStart,
              onDragUpdate: e.onDragUpdate,
              onDragEnd: e.onDragEnd,
              stylesInsertionPoint: e.stylesInsertionPoint,
            },
            e.children,
          );
        });
      }
      var gi = function (e) {
          return function (r) {
            return e === r;
          };
        },
        vi = gi("scroll"),
        mi = gi("auto"),
        bi =
          (gi("visible"),
          function (e, r) {
            return r(e.overflowX) || r(e.overflowY);
          }),
        hi = function (e) {
          var r = e.ownerDocument.defaultView.getComputedStyle(e),
            t = { overflowX: r.overflowX, overflowY: r.overflowY };
          return bi(t, vi) || bi(t, mi);
        },
        yi = function e(r) {
          return null == r ||
            r === document.body ||
            r === document.documentElement
            ? null
            : hi(r)
              ? r
              : e(r.parentElement);
        },
        Ii = function (e) {
          return { x: e.scrollLeft, y: e.scrollTop };
        },
        Di = function e(r) {
          return (
            !!r &&
            ("fixed" ===
              r.ownerDocument.defaultView.getComputedStyle(r).position ||
              e(r.parentElement))
          );
        },
        xi = function (e) {
          var r = e.ref,
            t = e.descriptor,
            n = e.env,
            i = e.windowScroll,
            o = e.direction,
            a = e.isDropDisabled,
            l = e.isCombineEnabled,
            u = e.shouldClipSubject,
            c = n.closestScrollable,
            s = (function (e, r) {
              var t = (0, J.YH)(e);
              if (!r) return t;
              if (e !== r) return t;
              var n = t.paddingBox.top - r.scrollTop,
                i = t.paddingBox.left - r.scrollLeft,
                o = n + r.scrollHeight,
                a = { top: n, right: i + r.scrollWidth, bottom: o, left: i },
                l = (0, J.fT)(a, t.border);
              return (0, J.ge)({
                borderBox: l,
                margin: t.margin,
                border: t.border,
                padding: t.padding,
              });
            })(r, c),
            d = (0, J.SQ)(s, i),
            p = (function () {
              if (!c) return null;
              var e = (0, J.YH)(c),
                r = {
                  scrollHeight: c.scrollHeight,
                  scrollWidth: c.scrollWidth,
                };
              return {
                client: e,
                page: (0, J.SQ)(e, i),
                scroll: Ii(c),
                scrollSize: r,
                shouldClipSubject: u,
              };
            })(),
            f = (function (e) {
              var r = e.descriptor,
                t = e.isEnabled,
                n = e.isCombineEnabled,
                i = e.isFixedOnPage,
                o = e.direction,
                a = e.client,
                l = e.page,
                u = e.closest,
                c = (function () {
                  if (!u) return null;
                  var e = u.scrollSize,
                    r = u.client,
                    t = Rt({
                      scrollHeight: e.scrollHeight,
                      scrollWidth: e.scrollWidth,
                      height: r.paddingBox.height,
                      width: r.paddingBox.width,
                    });
                  return {
                    pageMarginBox: u.page.marginBox,
                    frameClient: r,
                    scrollSize: e,
                    shouldClipSubject: u.shouldClipSubject,
                    scroll: {
                      initial: u.scroll,
                      current: u.scroll,
                      max: t,
                      diff: { value: ge, displacement: ge },
                    },
                  };
                })(),
                s = "vertical" === o ? Ke : ze;
              return {
                descriptor: r,
                isCombineEnabled: n,
                isFixedOnPage: i,
                axis: s,
                isEnabled: t,
                client: a,
                page: l,
                frame: c,
                subject: Ce({
                  page: l,
                  withPlaceholder: null,
                  axis: s,
                  frame: c,
                }),
              };
            })({
              descriptor: t,
              isEnabled: !a,
              isCombineEnabled: l,
              isFixedOnPage: n.isFixedOnPage,
              direction: o,
              client: s,
              page: d,
              closest: p,
            });
          return f;
        },
        wi = { passive: !1 },
        Ai = { passive: !0 },
        Ei = function (e) {
          return e.shouldPublishImmediately ? wi : Ai;
        };
      function Ci(e) {
        var r = (0, n.useContext)(e);
        return r || le(!1), r;
      }
      var Pi = function (e) {
        return (e && e.env.closestScrollable) || null;
      };
      function Si(e) {
        var r = (0, n.useRef)(null),
          t = Ci(Tn),
          i = Bn("droppable"),
          o = t.registry,
          a = t.marshal,
          l = Mn(e),
          u = (0, Y.Kr)(
            function () {
              return { id: e.droppableId, type: e.type, mode: e.mode };
            },
            [e.droppableId, e.mode, e.type],
          ),
          c = (0, n.useRef)(u),
          s = (0, Y.Kr)(
            function () {
              return Z(function (e, t) {
                r.current || le(!1);
                var n = { x: e, y: t };
                a.updateDroppableScroll(u.id, n);
              });
            },
            [u.id, a],
          ),
          d = (0, Y.hb)(function () {
            var e = r.current;
            return e && e.env.closestScrollable
              ? Ii(e.env.closestScrollable)
              : ge;
          }, []),
          p = (0, Y.hb)(
            function () {
              var e = d();
              s(e.x, e.y);
            },
            [d, s],
          ),
          f = (0, Y.Kr)(
            function () {
              return (0, ee.A)(p);
            },
            [p],
          ),
          g = (0, Y.hb)(
            function () {
              var e = r.current,
                t = Pi(e);
              (e && t) || le(!1),
                e.scrollOptions.shouldPublishImmediately ? p() : f();
            },
            [f, p],
          ),
          v = (0, Y.hb)(
            function (e, n) {
              r.current && le(!1);
              var i = l.current,
                o = i.getDroppableRef();
              o || le(!1);
              var a = (function (e) {
                  return { closestScrollable: yi(e), isFixedOnPage: Di(e) };
                })(o),
                c = { ref: o, descriptor: u, env: a, scrollOptions: n };
              r.current = c;
              var s = xi({
                  ref: o,
                  descriptor: u,
                  env: a,
                  windowScroll: e,
                  direction: i.direction,
                  isDropDisabled: i.isDropDisabled,
                  isCombineEnabled: i.isCombineEnabled,
                  shouldClipSubject: !i.ignoreContainerClipping,
                }),
                d = a.closestScrollable;
              return (
                d &&
                  (d.setAttribute(gn.contextId, t.contextId),
                  d.addEventListener("scroll", g, Ei(c.scrollOptions))),
                s
              );
            },
            [t.contextId, u, g, l],
          ),
          m = (0, Y.hb)(function () {
            var e = r.current,
              t = Pi(e);
            return (e && t) || le(!1), Ii(t);
          }, []),
          b = (0, Y.hb)(
            function () {
              var e = r.current;
              e || le(!1);
              var t = Pi(e);
              (r.current = null),
                t &&
                  (f.cancel(),
                  t.removeAttribute(gn.contextId),
                  t.removeEventListener("scroll", g, Ei(e.scrollOptions)));
            },
            [g, f],
          ),
          h = (0, Y.hb)(function (e) {
            var t = r.current;
            t || le(!1);
            var n = Pi(t);
            n || le(!1), (n.scrollTop += e.y), (n.scrollLeft += e.x);
          }, []),
          y = (0, Y.Kr)(
            function () {
              return {
                getDimensionAndWatchScroll: v,
                getScrollWhileDragging: m,
                dragStopped: b,
                scroll: h,
              };
            },
            [b, v, m, h],
          ),
          I = (0, Y.Kr)(
            function () {
              return { uniqueId: i, descriptor: u, callbacks: y };
            },
            [y, u, i],
          );
        bn(
          function () {
            return (
              (c.current = I.descriptor),
              o.droppable.register(I),
              function () {
                r.current && b(), o.droppable.unregister(I);
              }
            );
          },
          [y, u, b, I, a, o.droppable],
        ),
          bn(
            function () {
              r.current &&
                a.updateDroppableIsEnabled(c.current.id, !e.isDropDisabled);
            },
            [e.isDropDisabled, a],
          ),
          bn(
            function () {
              r.current &&
                a.updateDroppableIsCombineEnabled(
                  c.current.id,
                  e.isCombineEnabled,
                );
            },
            [e.isCombineEnabled, a],
          );
      }
      function Ni() {}
      var Oi = {
          width: 0,
          height: 0,
          margin: { top: 0, right: 0, bottom: 0, left: 0 },
        },
        Ri = function (e) {
          var r = e.isAnimatingOpenOnMount,
            t = e.placeholder,
            n = e.animate,
            i = (function (e) {
              var r = e.isAnimatingOpenOnMount,
                t = e.placeholder,
                n = e.animate;
              return r || "close" === n
                ? Oi
                : {
                    height: t.client.borderBox.height,
                    width: t.client.borderBox.width,
                    margin: t.client.margin,
                  };
            })({ isAnimatingOpenOnMount: r, placeholder: t, animate: n });
          return {
            display: t.display,
            boxSizing: "border-box",
            width: i.width,
            height: i.height,
            marginTop: i.margin.top,
            marginRight: i.margin.right,
            marginBottom: i.margin.bottom,
            marginLeft: i.margin.left,
            flexShrink: "0",
            flexGrow: "0",
            pointerEvents: "none",
            transition: "none" !== n ? st.placeholder : null,
          };
        };
      var Bi = n.memo(function (e) {
          var r = (0, n.useRef)(null),
            t = (0, Y.hb)(function () {
              r.current && (clearTimeout(r.current), (r.current = null));
            }, []),
            i = e.animate,
            o = e.onTransitionEnd,
            a = e.onClose,
            l = e.contextId,
            u = (0, n.useState)("open" === e.animate),
            c = u[0],
            s = u[1];
          (0, n.useEffect)(
            function () {
              return c
                ? "open" !== i
                  ? (t(), s(!1), Ni)
                  : r.current
                    ? Ni
                    : ((r.current = setTimeout(function () {
                        (r.current = null), s(!1);
                      })),
                      t)
                : Ni;
            },
            [i, c, t],
          );
          var d = (0, Y.hb)(
              function (e) {
                "height" === e.propertyName && (o(), "close" === i && a());
              },
              [i, a, o],
            ),
            p = Ri({
              isAnimatingOpenOnMount: c,
              animate: e.animate,
              placeholder: e.placeholder,
            });
          return n.createElement(e.placeholder.tagName, {
            style: p,
            "data-rbd-placeholder-context-id": l,
            onTransitionEnd: d,
            ref: e.innerRef,
          });
        }),
        Ti = n.createContext(null);
      var Li = (function (e) {
          function r() {
            for (
              var r, t = arguments.length, n = new Array(t), i = 0;
              i < t;
              i++
            )
              n[i] = arguments[i];
            return (
              ((r = e.call.apply(e, [this].concat(n)) || this).state = {
                isVisible: Boolean(r.props.on),
                data: r.props.on,
                animate: r.props.shouldAnimate && r.props.on ? "open" : "none",
              }),
              (r.onClose = function () {
                "close" === r.state.animate && r.setState({ isVisible: !1 });
              }),
              r
            );
          }
          return (
            (0, i.A)(r, e),
            (r.getDerivedStateFromProps = function (e, r) {
              return e.shouldAnimate
                ? e.on
                  ? { isVisible: !0, data: e.on, animate: "open" }
                  : r.isVisible
                    ? { isVisible: !0, data: r.data, animate: "close" }
                    : { isVisible: !1, animate: "close", data: null }
                : { isVisible: Boolean(e.on), data: e.on, animate: "none" };
            }),
            (r.prototype.render = function () {
              if (!this.state.isVisible) return null;
              var e = {
                onClose: this.onClose,
                data: this.state.data,
                animate: this.state.animate,
              };
              return this.props.children(e);
            }),
            r
          );
        })(n.PureComponent),
        Gi = 5e3,
        Mi = 4500,
        _i = function (e, r) {
          return r ? st.drop(r.duration) : e ? st.snap : st.fluid;
        },
        Fi = function (e, r) {
          return e ? (r ? lt.drop : lt.combining) : null;
        };
      function ki(e) {
        return "DRAGGING" === e.type
          ? ((n = (t = e).dimension.client),
            (i = t.offset),
            (o = t.combineWith),
            (a = t.dropping),
            (l = Boolean(o)),
            (u = (function (e) {
              return null != e.forceShouldAnimate
                ? e.forceShouldAnimate
                : "SNAP" === e.mode;
            })(t)),
            (c = Boolean(a)),
            (s = c ? ft(i, l) : pt(i)),
            {
              position: "fixed",
              top: n.marginBox.top,
              left: n.marginBox.left,
              boxSizing: "border-box",
              width: n.borderBox.width,
              height: n.borderBox.height,
              transition: _i(u, a),
              transform: s,
              opacity: Fi(l, c),
              zIndex: c ? Mi : Gi,
              pointerEvents: "none",
            })
          : {
              transform: pt((r = e).offset),
              transition: r.shouldAnimateDisplacement ? null : "none",
            };
        var r, t, n, i, o, a, l, u, c, s;
      }
      function Wi(e) {
        var r = Bn("draggable"),
          t = e.descriptor,
          i = e.registry,
          o = e.getDraggableRef,
          a = e.canDragInteractiveElements,
          l = e.shouldRespectForcePress,
          u = e.isEnabled,
          c = (0, Y.Kr)(
            function () {
              return {
                canDragInteractiveElements: a,
                shouldRespectForcePress: l,
                isEnabled: u,
              };
            },
            [a, u, l],
          ),
          s = (0, Y.hb)(
            function (e) {
              var r = o();
              return (
                r || le(!1),
                (function (e, r, t) {
                  void 0 === t && (t = ge);
                  var n = window.getComputedStyle(r),
                    i = r.getBoundingClientRect(),
                    o = (0, J.a)(i, n),
                    a = (0, J.SQ)(o, t);
                  return {
                    descriptor: e,
                    placeholder: {
                      client: o,
                      tagName: r.tagName.toLowerCase(),
                      display: n.display,
                    },
                    displaceBy: { x: o.marginBox.width, y: o.marginBox.height },
                    client: o,
                    page: a,
                  };
                })(t, r, e)
              );
            },
            [t, o],
          ),
          d = (0, Y.Kr)(
            function () {
              return {
                uniqueId: r,
                descriptor: t,
                options: c,
                getDimension: s,
              };
            },
            [t, s, c, r],
          ),
          p = (0, n.useRef)(d),
          f = (0, n.useRef)(!0);
        bn(
          function () {
            return (
              i.draggable.register(p.current),
              function () {
                return i.draggable.unregister(p.current);
              }
            );
          },
          [i.draggable],
        ),
          bn(
            function () {
              if (f.current) f.current = !1;
              else {
                var e = p.current;
                (p.current = d), i.draggable.update(d, e);
              }
            },
            [d, i.draggable],
          );
      }
      function Ui(e, r, t) {
        Gn();
      }
      function Hi(e) {
        e.preventDefault();
      }
      var ji = function (e, r) {
          return e === r;
        },
        qi = function (e) {
          var r = e.combine,
            t = e.destination;
          return t ? t.droppableId : r ? r.droppableId : null;
        };
      function Vi(e) {
        return {
          isDragging: !1,
          isDropAnimating: !1,
          isClone: !1,
          dropAnimation: null,
          mode: null,
          draggingOver: null,
          combineTargetFor: e,
          combineWith: null,
        };
      }
      var Ki = {
        mapped: {
          type: "SECONDARY",
          offset: ge,
          combineTargetFor: null,
          shouldAnimateDisplacement: !0,
          snapshot: Vi(null),
        },
      };
      var zi = V(
        function () {
          var e,
            r,
            t,
            n =
              ((e = Z(function (e, r) {
                return { x: e, y: r };
              })),
              (r = Z(function (e, r, t, n, i) {
                return {
                  isDragging: !0,
                  isClone: r,
                  isDropAnimating: Boolean(i),
                  dropAnimation: i,
                  mode: e,
                  draggingOver: t,
                  combineWith: n,
                  combineTargetFor: null,
                };
              })),
              (t = Z(function (e, t, n, i, o, a, l) {
                return {
                  mapped: {
                    type: "DRAGGING",
                    dropping: null,
                    draggingOver: o,
                    combineWith: a,
                    mode: t,
                    offset: e,
                    dimension: n,
                    forceShouldAnimate: l,
                    snapshot: r(t, i, o, a, null),
                  },
                };
              })),
              function (n, i) {
                if (n.isDragging) {
                  if (n.critical.draggable.id !== i.draggableId) return null;
                  var o = n.current.client.offset,
                    a = n.dimensions.draggables[i.draggableId],
                    l = xr(n.impact),
                    u =
                      (s = n.impact).at && "COMBINE" === s.at.type
                        ? s.at.combine.draggableId
                        : null,
                    c = n.forceShouldAnimate;
                  return t(e(o.x, o.y), n.movementMode, a, i.isClone, l, u, c);
                }
                var s;
                if ("DROP_ANIMATING" === n.phase) {
                  var d = n.completed;
                  if (d.result.draggableId !== i.draggableId) return null;
                  var p = i.isClone,
                    f = n.dimensions.draggables[i.draggableId],
                    g = d.result,
                    v = g.mode,
                    m = qi(g),
                    b = (function (e) {
                      return e.combine ? e.combine.draggableId : null;
                    })(g),
                    h = {
                      duration: n.dropDuration,
                      curve: at,
                      moveTo: n.newHomeClientOffset,
                      opacity: b ? lt.drop : null,
                      scale: b ? ut.drop : null,
                    };
                  return {
                    mapped: {
                      type: "DRAGGING",
                      offset: n.newHomeClientOffset,
                      dimension: f,
                      dropping: h,
                      draggingOver: m,
                      combineWith: b,
                      mode: v,
                      forceShouldAnimate: null,
                      snapshot: r(v, p, m, b, h),
                    },
                  };
                }
                return null;
              }),
            i = (function () {
              var e = Z(function (e, r) {
                  return { x: e, y: r };
                }),
                r = Z(Vi),
                t = Z(function (e, t, n) {
                  return (
                    void 0 === t && (t = null),
                    {
                      mapped: {
                        type: "SECONDARY",
                        offset: e,
                        combineTargetFor: t,
                        shouldAnimateDisplacement: n,
                        snapshot: r(t),
                      },
                    }
                  );
                }),
                n = function (e) {
                  return e ? t(ge, e, !0) : null;
                },
                i = function (r, i, o, a) {
                  var l = o.displaced.visible[r],
                    u = Boolean(a.inVirtualList && a.effected[r]),
                    c = _e(o),
                    s = c && c.draggableId === r ? i : null;
                  if (!l) {
                    if (!u) return n(s);
                    if (o.displaced.invisible[r]) return null;
                    var d = he(a.displacedBy.point),
                      p = e(d.x, d.y);
                    return t(p, s, !0);
                  }
                  if (u) return n(s);
                  var f = o.displacedBy.point,
                    g = e(f.x, f.y);
                  return t(g, s, l.shouldAnimate);
                };
              return function (e, r) {
                if (e.isDragging)
                  return e.critical.draggable.id === r.draggableId
                    ? null
                    : i(
                        r.draggableId,
                        e.critical.draggable.id,
                        e.impact,
                        e.afterCritical,
                      );
                if ("DROP_ANIMATING" === e.phase) {
                  var t = e.completed;
                  return t.result.draggableId === r.draggableId
                    ? null
                    : i(
                        r.draggableId,
                        t.result.draggableId,
                        t.impact,
                        t.afterCritical,
                      );
                }
                return null;
              };
            })();
          return function (e, r) {
            return n(e, r) || i(e, r) || Ki;
          };
        },
        { dropAnimationFinished: ot },
        null,
        { context: Cn, pure: !0, areStatePropsEqual: ji },
      )(function (e) {
        var r = (0, n.useRef)(null),
          t = (0, Y.hb)(function (e) {
            r.current = e;
          }, []),
          i = (0, Y.hb)(function () {
            return r.current;
          }, []),
          o = Ci(Tn),
          a = o.contextId,
          l = o.dragHandleUsageInstructionsId,
          u = o.registry,
          c = Ci(Ti),
          s = c.type,
          d = c.droppableId,
          p = (0, Y.Kr)(
            function () {
              return {
                id: e.draggableId,
                index: e.index,
                type: s,
                droppableId: d,
              };
            },
            [e.draggableId, e.index, s, d],
          ),
          f = e.children,
          g = e.draggableId,
          v = e.isEnabled,
          m = e.shouldRespectForcePress,
          b = e.canDragInteractiveElements,
          h = e.isClone,
          y = e.mapped,
          I = e.dropAnimationFinished;
        Ui(),
          Ln(),
          h ||
            Wi(
              (0, Y.Kr)(
                function () {
                  return {
                    descriptor: p,
                    registry: u,
                    getDraggableRef: i,
                    canDragInteractiveElements: b,
                    shouldRespectForcePress: m,
                    isEnabled: v,
                  };
                },
                [p, u, i, b, m, v],
              ),
            );
        var D = (0, Y.Kr)(
            function () {
              return v
                ? {
                    tabIndex: 0,
                    role: "button",
                    "aria-describedby": l,
                    "data-rbd-drag-handle-draggable-id": g,
                    "data-rbd-drag-handle-context-id": a,
                    draggable: !1,
                    onDragStart: Hi,
                  }
                : null;
            },
            [a, l, g, v],
          ),
          x = (0, Y.hb)(
            function (e) {
              "DRAGGING" === y.type &&
                y.dropping &&
                "transform" === e.propertyName &&
                I();
            },
            [I, y],
          ),
          w = (0, Y.Kr)(
            function () {
              var e = ki(y),
                r = "DRAGGING" === y.type && y.dropping ? x : null;
              return {
                innerRef: t,
                draggableProps: {
                  "data-rbd-draggable-context-id": a,
                  "data-rbd-draggable-id": g,
                  style: e,
                  onTransitionEnd: r,
                },
                dragHandleProps: D,
              };
            },
            [a, D, g, y, x, t],
          ),
          A = (0, Y.Kr)(
            function () {
              return {
                draggableId: p.id,
                type: p.type,
                source: { index: p.index, droppableId: p.droppableId },
              };
            },
            [p.droppableId, p.id, p.index, p.type],
          );
        return f(w, y.snapshot, A);
      });
      function Yi(e) {
        return Ci(Ti).isUsingCloneFor !== e.draggableId || e.isClone
          ? n.createElement(zi, e)
          : null;
      }
      function Ji(e) {
        var r = "boolean" != typeof e.isDragDisabled || !e.isDragDisabled,
          t = Boolean(e.disableInteractiveElementBlocking),
          i = Boolean(e.shouldRespectForcePress);
        return n.createElement(
          Yi,
          (0, o.A)({}, e, {
            isClone: !1,
            isEnabled: r,
            canDragInteractiveElements: t,
            shouldRespectForcePress: i,
          }),
        );
      }
      var Xi = function (e, r) {
          return e === r.droppable.type;
        },
        $i = function (e, r) {
          return r.draggables[e.draggable.id];
        };
      var Qi = {
          mode: "standard",
          type: "DEFAULT",
          direction: "vertical",
          isDropDisabled: !1,
          isCombineEnabled: !1,
          ignoreContainerClipping: !1,
          renderClone: null,
          getContainerForClone: function () {
            return document.body || le(!1), document.body;
          },
        },
        Zi = V(
          function () {
            var e = {
                placeholder: null,
                shouldAnimatePlaceholder: !0,
                snapshot: {
                  isDraggingOver: !1,
                  draggingOverWith: null,
                  draggingFromThisWith: null,
                  isUsingPlaceholder: !1,
                },
                useClone: null,
              },
              r = (0, o.A)({}, e, { shouldAnimatePlaceholder: !1 }),
              t = Z(function (e) {
                return {
                  draggableId: e.id,
                  type: e.type,
                  source: { index: e.index, droppableId: e.droppableId },
                };
              }),
              n = Z(function (n, i, o, a, l, u) {
                var c = l.descriptor.id;
                if (l.descriptor.droppableId === n) {
                  var s = u ? { render: u, dragging: t(l.descriptor) } : null,
                    d = {
                      isDraggingOver: o,
                      draggingOverWith: o ? c : null,
                      draggingFromThisWith: c,
                      isUsingPlaceholder: !0,
                    };
                  return {
                    placeholder: l.placeholder,
                    shouldAnimatePlaceholder: !1,
                    snapshot: d,
                    useClone: s,
                  };
                }
                if (!i) return r;
                if (!a) return e;
                var p = {
                  isDraggingOver: o,
                  draggingOverWith: c,
                  draggingFromThisWith: null,
                  isUsingPlaceholder: !0,
                };
                return {
                  placeholder: l.placeholder,
                  shouldAnimatePlaceholder: !0,
                  snapshot: p,
                  useClone: null,
                };
              });
            return function (t, i) {
              var o = i.droppableId,
                a = i.type,
                l = !i.isDropDisabled,
                u = i.renderClone;
              if (t.isDragging) {
                var c = t.critical;
                if (!Xi(a, c)) return r;
                var s = $i(c, t.dimensions),
                  d = xr(t.impact) === o;
                return n(o, l, d, d, s, u);
              }
              if ("DROP_ANIMATING" === t.phase) {
                var p = t.completed;
                if (!Xi(a, p.critical)) return r;
                var f = $i(p.critical, t.dimensions);
                return n(o, l, qi(p.result) === o, xr(p.impact) === o, f, u);
              }
              if ("IDLE" === t.phase && t.completed && !t.shouldFlush) {
                var g = t.completed;
                if (!Xi(a, g.critical)) return r;
                var v = xr(g.impact) === o,
                  m = Boolean(g.impact.at && "COMBINE" === g.impact.at.type),
                  b = g.critical.droppable.id === o;
                return v ? (m ? e : r) : b ? e : r;
              }
              return r;
            };
          },
          {
            updateViewportMaxScroll: function (e) {
              return { type: "UPDATE_VIEWPORT_MAX_SCROLL", payload: e };
            },
          },
          null,
          { context: Cn, pure: !0, areStatePropsEqual: ji },
        )(function (e) {
          var r = (0, n.useContext)(Tn);
          r || le(!1);
          var t = r.contextId,
            i = r.isMovementAllowed,
            o = (0, n.useRef)(null),
            a = (0, n.useRef)(null),
            l = e.children,
            u = e.droppableId,
            c = e.type,
            s = e.mode,
            d = e.direction,
            p = e.ignoreContainerClipping,
            f = e.isDropDisabled,
            g = e.isCombineEnabled,
            v = e.snapshot,
            m = e.useClone,
            b = e.updateViewportMaxScroll,
            h = e.getContainerForClone,
            y = (0, Y.hb)(function () {
              return o.current;
            }, []),
            I = (0, Y.hb)(function (e) {
              o.current = e;
            }, []),
            D =
              ((0, Y.hb)(function () {
                return a.current;
              }, []),
              (0, Y.hb)(function (e) {
                a.current = e;
              }, []));
          Gn();
          var x = (0, Y.hb)(
            function () {
              var e;
              i() &&
                b({
                  maxScroll: Tt(
                    (null == (e = o.current)
                      ? void 0
                      : e.ownerDocument.defaultView) || window,
                  ),
                });
            },
            [i, b],
          );
          Si({
            droppableId: u,
            type: c,
            mode: s,
            direction: d,
            isDropDisabled: f,
            isCombineEnabled: g,
            ignoreContainerClipping: p,
            getDroppableRef: y,
          });
          var w = n.createElement(
              Li,
              { on: e.placeholder, shouldAnimate: e.shouldAnimatePlaceholder },
              function (e) {
                var r = e.onClose,
                  i = e.data,
                  o = e.animate;
                return n.createElement(Bi, {
                  placeholder: i,
                  onClose: r,
                  innerRef: D,
                  animate: o,
                  contextId: t,
                  onTransitionEnd: x,
                });
              },
            ),
            A = (0, Y.Kr)(
              function () {
                return {
                  innerRef: I,
                  placeholder: w,
                  droppableProps: {
                    "data-rbd-droppable-id": u,
                    "data-rbd-droppable-context-id": t,
                  },
                };
              },
              [t, u, w, I],
            ),
            E = m ? m.dragging.draggableId : null,
            C = (0, Y.Kr)(
              function () {
                return { droppableId: u, type: c, isUsingCloneFor: E };
              },
              [u, E, c],
            );
          return n.createElement(
            Ti.Provider,
            { value: C },
            l(A, v),
            (function () {
              if (!m) return null;
              var e = m.dragging,
                r = m.render,
                t = n.createElement(
                  Yi,
                  {
                    draggableId: e.draggableId,
                    index: e.source.index,
                    isClone: !0,
                    isEnabled: !0,
                    shouldRespectForcePress: !1,
                    canDragInteractiveElements: !0,
                  },
                  function (t, n) {
                    return r(t, n, e);
                  },
                );
              return z.createPortal(t, h());
            })(),
          );
        });
      Zi.defaultProps = Qi;
    },
    59671: (e, r) => {
      var t = 60103,
        n = 60106,
        i = 60107,
        o = 60108,
        a = 60114,
        l = 60109,
        u = 60110,
        c = 60112,
        s = 60113,
        d = 60120,
        p = 60115,
        f = 60116,
        g = 60121,
        v = 60122,
        m = 60117,
        b = 60129,
        h = 60131;
      /** @license React v17.0.2
       * react-is.production.min.js
       *
       * Copyright (c) Facebook, Inc. and its affiliates.
       *
       * This source code is licensed under the MIT license found in the
       * LICENSE file in the root directory of this source tree.
       */ if ("function" == typeof Symbol && Symbol.for) {
        var y = Symbol.for;
        (t = y("react.element")),
          (n = y("react.portal")),
          (i = y("react.fragment")),
          (o = y("react.strict_mode")),
          (a = y("react.profiler")),
          (l = y("react.provider")),
          (u = y("react.context")),
          (c = y("react.forward_ref")),
          (s = y("react.suspense")),
          (d = y("react.suspense_list")),
          (p = y("react.memo")),
          (f = y("react.lazy")),
          (g = y("react.block")),
          (v = y("react.server.block")),
          (m = y("react.fundamental")),
          (b = y("react.debug_trace_mode")),
          (h = y("react.legacy_hidden"));
      }
      function I(e) {
        if ("object" == typeof e && null !== e) {
          var r = e.$$typeof;
          switch (r) {
            case t:
              switch ((e = e.type)) {
                case i:
                case a:
                case o:
                case s:
                case d:
                  return e;
                default:
                  switch ((e = e && e.$$typeof)) {
                    case u:
                    case c:
                    case f:
                    case p:
                    case l:
                      return e;
                    default:
                      return r;
                  }
              }
            case n:
              return r;
          }
        }
      }
      r.isContextConsumer = function (e) {
        return I(e) === u;
      };
    },
    44019: (e, r, t) => {
      e.exports = t(59671);
    },
    55635: (e, r, t) => {
      t.d(r, { A: () => i });
      var n = t(53144);
      function i(e, r, t) {
        return (
          (r = (0, n.A)(r)) in e
            ? Object.defineProperty(e, r, {
                value: t,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[r] = t),
          e
        );
      }
    },
    54883: (e, r, t) => {
      t.d(r, { A: () => o });
      var n = t(55635);
      function i(e, r) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          r &&
            (n = n.filter(function (r) {
              return Object.getOwnPropertyDescriptor(e, r).enumerable;
            })),
            t.push.apply(t, n);
        }
        return t;
      }
      function o(e) {
        for (var r = 1; r < arguments.length; r++) {
          var t = null != arguments[r] ? arguments[r] : {};
          r % 2
            ? i(Object(t), !0).forEach(function (r) {
                (0, n.A)(e, r, t[r]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
              : i(Object(t)).forEach(function (r) {
                  Object.defineProperty(
                    e,
                    r,
                    Object.getOwnPropertyDescriptor(t, r),
                  );
                });
        }
        return e;
      }
    },
    53144: (e, r, t) => {
      t.d(r, { A: () => i });
      var n = t(11052);
      function i(e) {
        var r = (function (e, r) {
          if ("object" != (0, n.A)(e) || !e) return e;
          var t = e[Symbol.toPrimitive];
          if (void 0 !== t) {
            var i = t.call(e, r || "default");
            if ("object" != (0, n.A)(i)) return i;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === r ? String : Number)(e);
        })(e, "string");
        return "symbol" == (0, n.A)(r) ? r : r + "";
      }
    },
    11052: (e, r, t) => {
      function n(e) {
        return (
          (n =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e &&
                    "function" == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? "symbol"
                    : typeof e;
                }),
          n(e)
        );
      }
      t.d(r, { A: () => n });
    },
  },
]);
