/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
"use strict";
(self.webpackChunkappmgmt_storeadmin =
  self.webpackChunkappmgmt_storeadmin || []).push([
  [8310],
  {
    89558: (e, t, n) => {
      n.d(t, { JY: () => Qi, sx: () => hr, gL: () => Mr });
      var i = n(90626),
        r = n(72739),
        a = n(3998),
        o = n(61702),
        s = n(72648);
      let u = function (e) {
        e();
      };
      const l = () => u,
        c = Symbol.for("react-redux-context"),
        d = "undefined" != typeof globalThis ? globalThis : {};
      function m() {
        var e;
        if (!i.createContext) return {};
        const t = null != (e = d[c]) ? e : (d[c] = new Map());
        let n = t.get(i.createContext);
        return n || ((n = i.createContext(null)), t.set(i.createContext, n)), n;
      }
      const p = m();
      let g = null;
      var f = n(58584),
        v = n(81115),
        h = n(904),
        b = n.n(h),
        $ = n(98193);
      const y = [
        "initMapStateToProps",
        "initMapDispatchToProps",
        "initMergeProps",
      ];
      function I(
        e,
        t,
        n,
        i,
        { areStatesEqual: r, areOwnPropsEqual: a, areStatePropsEqual: o },
      ) {
        let s,
          u,
          l,
          c,
          d,
          m = !1;
        function p(m, p) {
          const g = !a(p, u),
            f = !r(m, s, p, u);
          return (
            (s = m),
            (u = p),
            g && f
              ? ((l = e(s, u)),
                t.dependsOnOwnProps && (c = t(i, u)),
                (d = n(l, c, u)),
                d)
              : g
                ? (e.dependsOnOwnProps && (l = e(s, u)),
                  t.dependsOnOwnProps && (c = t(i, u)),
                  (d = n(l, c, u)),
                  d)
                : f
                  ? (function () {
                      const t = e(s, u),
                        i = !o(t, l);
                      return (l = t), i && (d = n(l, c, u)), d;
                    })()
                  : d
          );
        }
        return function (r, a) {
          return m
            ? p(r, a)
            : ((s = r),
              (u = a),
              (l = e(s, u)),
              (c = t(i, u)),
              (d = n(l, c, u)),
              (m = !0),
              d);
        };
      }
      function _(e) {
        return function (t) {
          const n = e(t);
          function i() {
            return n;
          }
          return (i.dependsOnOwnProps = !1), i;
        };
      }
      function x(e) {
        return e.dependsOnOwnProps
          ? Boolean(e.dependsOnOwnProps)
          : 1 !== e.length;
      }
      function k(e, t) {
        return function (t, { displayName: n }) {
          const i = function (e, t) {
            return i.dependsOnOwnProps
              ? i.mapToProps(e, t)
              : i.mapToProps(e, void 0);
          };
          return (
            (i.dependsOnOwnProps = !0),
            (i.mapToProps = function (t, n) {
              (i.mapToProps = e), (i.dependsOnOwnProps = x(e));
              let r = i(t, n);
              return (
                "function" == typeof r &&
                  ((i.mapToProps = r),
                  (i.dependsOnOwnProps = x(r)),
                  (r = i(t, n))),
                r
              );
            }),
            i
          );
        };
      }
      function w(e, t) {
        return (n, i) => {
          throw new Error(
            `Invalid value of type ${typeof e} for ${t} argument when connecting component ${i.wrappedComponentName}.`,
          );
        };
      }
      function S(e, t, n) {
        return (0, f.A)({}, n, e, t);
      }
      const D = { notify() {}, get: () => [] };
      function O(e, t) {
        let n,
          i = D,
          r = 0,
          a = !1;
        function o() {
          c.onStateChange && c.onStateChange();
        }
        function s() {
          r++,
            n ||
              ((n = t ? t.addNestedSub(o) : e.subscribe(o)),
              (i = (function () {
                const e = l();
                let t = null,
                  n = null;
                return {
                  clear() {
                    (t = null), (n = null);
                  },
                  notify() {
                    e(() => {
                      let e = t;
                      for (; e; ) e.callback(), (e = e.next);
                    });
                  },
                  get() {
                    let e = [],
                      n = t;
                    for (; n; ) e.push(n), (n = n.next);
                    return e;
                  },
                  subscribe(e) {
                    let i = !0,
                      r = (n = { callback: e, next: null, prev: n });
                    return (
                      r.prev ? (r.prev.next = r) : (t = r),
                      function () {
                        i &&
                          null !== t &&
                          ((i = !1),
                          r.next ? (r.next.prev = r.prev) : (n = r.prev),
                          r.prev ? (r.prev.next = r.next) : (t = r.next));
                      }
                    );
                  },
                };
              })()));
        }
        function u() {
          r--, n && 0 === r && (n(), (n = void 0), i.clear(), (i = D));
        }
        const c = {
          addNestedSub: function (e) {
            s();
            const t = i.subscribe(e);
            let n = !1;
            return () => {
              n || ((n = !0), t(), u());
            };
          },
          notifyNestedSubs: function () {
            i.notify();
          },
          handleChangeWrapper: o,
          isSubscribed: function () {
            return a;
          },
          trySubscribe: function () {
            a || ((a = !0), s());
          },
          tryUnsubscribe: function () {
            a && ((a = !1), u());
          },
          getListeners: () => i,
        };
        return c;
      }
      const U = !(
        "undefined" == typeof window ||
        void 0 === window.document ||
        void 0 === window.document.createElement
      )
        ? i.useLayoutEffect
        : i.useEffect;
      function N(e, t) {
        return e === t
          ? 0 !== e || 0 !== t || 1 / e == 1 / t
          : e != e && t != t;
      }
      function z(e, t) {
        if (N(e, t)) return !0;
        if (
          "object" != typeof e ||
          null === e ||
          "object" != typeof t ||
          null === t
        )
          return !1;
        const n = Object.keys(e),
          i = Object.keys(t);
        if (n.length !== i.length) return !1;
        for (let i = 0; i < n.length; i++)
          if (
            !Object.prototype.hasOwnProperty.call(t, n[i]) ||
            !N(e[n[i]], t[n[i]])
          )
            return !1;
        return !0;
      }
      const E = ["reactReduxForwardedRef"];
      let P = () => {
        throw new Error("uSES not initialized!");
      };
      const j = [null, null];
      function A(e, t, n, i, r, a) {
        (e.current = i),
          (n.current = !1),
          r.current && ((r.current = null), a());
      }
      function T(e, t) {
        return e === t;
      }
      const C = function (
        e,
        t,
        n,
        {
          pure: r,
          areStatesEqual: a = T,
          areOwnPropsEqual: o = z,
          areStatePropsEqual: s = z,
          areMergedPropsEqual: u = z,
          forwardRef: l = !1,
          context: c = p,
        } = {},
      ) {
        const d = c,
          m = (function (e) {
            return e
              ? "function" == typeof e
                ? k(e)
                : w(e, "mapStateToProps")
              : _(() => ({}));
          })(e),
          g = (function (e) {
            return e && "object" == typeof e
              ? _((t) =>
                  (function (e, t) {
                    const n = {};
                    for (const i in e) {
                      const r = e[i];
                      "function" == typeof r && (n[i] = (...e) => t(r(...e)));
                    }
                    return n;
                  })(e, t),
                )
              : e
                ? "function" == typeof e
                  ? k(e)
                  : w(e, "mapDispatchToProps")
                : _((e) => ({ dispatch: e }));
          })(t),
          h = (function (e) {
            return e
              ? "function" == typeof e
                ? (function (e) {
                    return function (
                      t,
                      { displayName: n, areMergedPropsEqual: i },
                    ) {
                      let r,
                        a = !1;
                      return function (t, n, o) {
                        const s = e(t, n, o);
                        return a ? i(s, r) || (r = s) : ((a = !0), (r = s)), r;
                      };
                    };
                  })(e)
                : w(e, "mergeProps")
              : () => S;
          })(n),
          x = Boolean(e);
        return (e) => {
          const t = e.displayName || e.name || "Component",
            n = `Connect(${t})`,
            r = {
              shouldHandleStateChanges: x,
              displayName: n,
              wrappedComponentName: t,
              WrappedComponent: e,
              initMapStateToProps: m,
              initMapDispatchToProps: g,
              initMergeProps: h,
              areStatesEqual: a,
              areStatePropsEqual: s,
              areOwnPropsEqual: o,
              areMergedPropsEqual: u,
            };
          function c(t) {
            const [n, a, o] = i.useMemo(() => {
                const { reactReduxForwardedRef: e } = t,
                  n = (0, v.A)(t, E);
                return [t.context, e, n];
              }, [t]),
              s = i.useMemo(
                () =>
                  n &&
                  n.Consumer &&
                  (0, $.isContextConsumer)(i.createElement(n.Consumer, null))
                    ? n
                    : d,
                [n, d],
              ),
              u = i.useContext(s),
              l =
                Boolean(t.store) &&
                Boolean(t.store.getState) &&
                Boolean(t.store.dispatch),
              c = Boolean(u) && Boolean(u.store);
            const m = l ? t.store : u.store,
              p = c ? u.getServerState : m.getState,
              g = i.useMemo(
                () =>
                  (function (e, t) {
                    let {
                        initMapStateToProps: n,
                        initMapDispatchToProps: i,
                        initMergeProps: r,
                      } = t,
                      a = (0, v.A)(t, y);
                    return I(n(e, a), i(e, a), r(e, a), e, a);
                  })(m.dispatch, r),
                [m],
              ),
              [h, b] = i.useMemo(() => {
                if (!x) return j;
                const e = O(m, l ? void 0 : u.subscription),
                  t = e.notifyNestedSubs.bind(e);
                return [e, t];
              }, [m, l, u]),
              _ = i.useMemo(
                () => (l ? u : (0, f.A)({}, u, { subscription: h })),
                [l, u, h],
              ),
              k = i.useRef(),
              w = i.useRef(o),
              S = i.useRef(),
              D = i.useRef(!1),
              N = (i.useRef(!1), i.useRef(!1)),
              z = i.useRef();
            U(
              () => (
                (N.current = !0),
                () => {
                  N.current = !1;
                }
              ),
              [],
            );
            const T = i.useMemo(
                () => () =>
                  S.current && o === w.current ? S.current : g(m.getState(), o),
                [m, o],
              ),
              C = i.useMemo(
                () => (e) =>
                  h
                    ? (function (e, t, n, i, r, a, o, s, u, l, c) {
                        if (!e) return () => {};
                        let d = !1,
                          m = null;
                        const p = () => {
                          if (d || !s.current) return;
                          const e = t.getState();
                          let n, p;
                          try {
                            n = i(e, r.current);
                          } catch (e) {
                            (p = e), (m = e);
                          }
                          p || (m = null),
                            n === a.current
                              ? o.current || l()
                              : ((a.current = n),
                                (u.current = n),
                                (o.current = !0),
                                c());
                        };
                        return (
                          (n.onStateChange = p),
                          n.trySubscribe(),
                          p(),
                          () => {
                            if (
                              ((d = !0),
                              n.tryUnsubscribe(),
                              (n.onStateChange = null),
                              m)
                            )
                              throw m;
                          }
                        );
                      })(x, m, h, g, w, k, D, N, S, b, e)
                    : () => {},
                [h],
              );
            var R, L, B;
            let G;
            (R = A), (L = [w, k, D, o, S, b]), U(() => R(...L), B);
            try {
              G = P(C, T, p ? () => g(p(), o) : T);
            } catch (e) {
              throw (
                (z.current &&
                  (e.message += `\nThe error may be correlated with this previous error:\n${z.current.stack}\n\n`),
                e)
              );
            }
            U(() => {
              (z.current = void 0), (S.current = void 0), (k.current = G);
            });
            const M = i.useMemo(
              () => i.createElement(e, (0, f.A)({}, G, { ref: a })),
              [a, e, G],
            );
            return i.useMemo(
              () => (x ? i.createElement(s.Provider, { value: _ }, M) : M),
              [s, M, _],
            );
          }
          const p = i.memo(c);
          if (
            ((p.WrappedComponent = e), (p.displayName = c.displayName = n), l)
          ) {
            const t = i.forwardRef(function (e, t) {
              return i.createElement(
                p,
                (0, f.A)({}, e, { reactReduxForwardedRef: t }),
              );
            });
            return (t.displayName = n), (t.WrappedComponent = e), b()(t, e);
          }
          return b()(p, e);
        };
      };
      const R = function ({
        store: e,
        context: t,
        children: n,
        serverState: r,
        stabilityCheck: a = "once",
        noopCheck: o = "once",
      }) {
        const s = i.useMemo(() => {
            const t = O(e);
            return {
              store: e,
              subscription: t,
              getServerState: r ? () => r : void 0,
              stabilityCheck: a,
              noopCheck: o,
            };
          }, [e, r, a, o]),
          u = i.useMemo(() => e.getState(), [e]);
        U(() => {
          const { subscription: t } = s;
          return (
            (t.onStateChange = t.notifyNestedSubs),
            t.trySubscribe(),
            u !== e.getState() && t.notifyNestedSubs(),
            () => {
              t.tryUnsubscribe(), (t.onStateChange = void 0);
            }
          );
        }, [s, u]);
        const l = t || p;
        return i.createElement(l.Provider, { value: s }, n);
      };
      var L, B;
      (L = s.useSyncExternalStoreWithSelector),
        (g = L),
        ((e) => {
          P = e;
        })(o.useSyncExternalStore),
        (B = r.unstable_batchedUpdates),
        (u = B);
      var G = n(46311),
        M = n(48046),
        W =
          Number.isNaN ||
          function (e) {
            return "number" == typeof e && e != e;
          };
      function Z(e, t) {
        return e === t || !(!W(e) || !W(t));
      }
      function J(e, t) {
        if (e.length !== t.length) return !1;
        for (var n = 0; n < e.length; n++) if (!Z(e[n], t[n])) return !1;
        return !0;
      }
      function F(e, t) {
        void 0 === t && (t = J);
        var n = null;
        function i() {
          for (var i = [], r = 0; r < arguments.length; r++)
            i[r] = arguments[r];
          if (n && n.lastThis === this && t(i, n.lastArgs)) return n.lastResult;
          var a = e.apply(this, i);
          return (n = { lastResult: a, lastArgs: i, lastThis: this }), a;
        }
        return (
          (i.clear = function () {
            n = null;
          }),
          i
        );
      }
      var K = n(18651);
      function V(e, t) {}
      V.bind(null, "warn"), V.bind(null, "error");
      function H() {}
      function q(e, t, n) {
        const i = t.map((t) => {
          const i = (function (e, t) {
            return { ...e, ...t };
          })(n, t.options);
          return (
            e.addEventListener(t.eventName, t.fn, i),
            function () {
              e.removeEventListener(t.eventName, t.fn, i);
            }
          );
        });
        return function () {
          i.forEach((e) => {
            e();
          });
        };
      }
      const X = !0,
        Y = "Invariant failed";
      class Q extends Error {}
      function ee(e, t) {
        if (!e) throw new Q(X ? Y : `${Y}: ${t || ""}`);
      }
      Q.prototype.toString = function () {
        return this.message;
      };
      class te extends i.Component {
        constructor(...e) {
          super(...e),
            (this.callbacks = null),
            (this.unbind = H),
            (this.onWindowError = (e) => {
              const t = this.getCallbacks();
              t.isDragging() && t.tryAbort();
              e.error instanceof Q && e.preventDefault();
            }),
            (this.getCallbacks = () => {
              if (!this.callbacks)
                throw new Error(
                  "Unable to find AppCallbacks in <ErrorBoundary/>",
                );
              return this.callbacks;
            }),
            (this.setCallbacks = (e) => {
              this.callbacks = e;
            });
        }
        componentDidMount() {
          this.unbind = q(window, [
            { eventName: "error", fn: this.onWindowError },
          ]);
        }
        componentDidCatch(e) {
          if (!(e instanceof Q)) throw e;
          this.setState({});
        }
        componentWillUnmount() {
          this.unbind();
        }
        render() {
          return this.props.children(this.setCallbacks);
        }
      }
      const ne = (e) => e + 1,
        ie = (e, t) => {
          const n = e.droppableId === t.droppableId,
            i = ne(e.index),
            r = ne(t.index);
          return n
            ? `\n      You have moved the item from position ${i}\n      to position ${r}\n    `
            : `\n    You have moved the item from position ${i}\n    in list ${e.droppableId}\n    to list ${t.droppableId}\n    in position ${r}\n  `;
        },
        re = (e, t, n) =>
          t.droppableId === n.droppableId
            ? `\n      The item ${e}\n      has been combined with ${n.draggableId}`
            : `\n      The item ${e}\n      in list ${t.droppableId}\n      has been combined with ${n.draggableId}\n      in list ${n.droppableId}\n    `,
        ae = (e) =>
          `\n  The item has returned to its starting position\n  of ${ne(e.index)}\n`,
        oe = {
          dragHandleUsageInstructions:
            "\n  Press space bar to start a drag.\n  When dragging you can use the arrow keys to move the item around and escape to cancel.\n  Some screen readers may require you to be in focus mode or to use your pass through key\n",
          onDragStart: (e) =>
            `\n  You have lifted an item in position ${ne(e.source.index)}\n`,
          onDragUpdate: (e) => {
            const t = e.destination;
            if (t) return ie(e.source, t);
            const n = e.combine;
            return n
              ? re(e.draggableId, e.source, n)
              : "You are over an area that cannot be dropped on";
          },
          onDragEnd: (e) => {
            if ("CANCEL" === e.reason)
              return `\n      Movement cancelled.\n      ${ae(e.source)}\n    `;
            const t = e.destination,
              n = e.combine;
            return t
              ? `\n      You have dropped the item.\n      ${ie(e.source, t)}\n    `
              : n
                ? `\n      You have dropped the item.\n      ${re(e.draggableId, e.source, n)}\n    `
                : `\n    The item has been dropped while not over a drop area.\n    ${ae(e.source)}\n  `;
          },
        };
      var se = oe;
      const ue = { x: 0, y: 0 },
        le = (e, t) => ({ x: e.x + t.x, y: e.y + t.y }),
        ce = (e, t) => ({ x: e.x - t.x, y: e.y - t.y }),
        de = (e, t) => e.x === t.x && e.y === t.y,
        me = (e) => ({ x: 0 !== e.x ? -e.x : 0, y: 0 !== e.y ? -e.y : 0 }),
        pe = (e, t, n = 0) => ("x" === e ? { x: t, y: n } : { x: n, y: t }),
        ge = (e, t) => Math.sqrt((t.x - e.x) ** 2 + (t.y - e.y) ** 2),
        fe = (e, t) => Math.min(...t.map((t) => ge(e, t))),
        ve = (e) => (t) => ({ x: e(t.x), y: e(t.y) });
      const he = (e, t) => ({
          top: e.top + t.y,
          left: e.left + t.x,
          bottom: e.bottom + t.y,
          right: e.right + t.x,
        }),
        be = (e) => [
          { x: e.left, y: e.top },
          { x: e.right, y: e.top },
          { x: e.left, y: e.bottom },
          { x: e.right, y: e.bottom },
        ],
        $e = (e, t) =>
          t && t.shouldClipSubject
            ? ((e, t) => {
                const n = (0, M.l)({
                  top: Math.max(t.top, e.top),
                  right: Math.min(t.right, e.right),
                  bottom: Math.min(t.bottom, e.bottom),
                  left: Math.max(t.left, e.left),
                });
                return n.width <= 0 || n.height <= 0 ? null : n;
              })(t.pageMarginBox, e)
            : (0, M.l)(e);
      var ye = ({ page: e, withPlaceholder: t, axis: n, frame: i }) => {
          const r = ((e, t) => (t ? he(e, t.scroll.diff.displacement) : e))(
              e.marginBox,
              i,
            ),
            a = ((e, t, n) =>
              n && n.increasedBy
                ? { ...e, [t.end]: e[t.end] + n.increasedBy[t.line] }
                : e)(r, n, t);
          return { page: e, withPlaceholder: t, active: $e(a, i) };
        },
        Ie = (e, t) => {
          e.frame || ee(!1);
          const n = e.frame,
            i = ce(t, n.scroll.initial),
            r = me(i),
            a = {
              ...n,
              scroll: {
                initial: n.scroll.initial,
                current: t,
                diff: { value: i, displacement: r },
                max: n.scroll.max,
              },
            },
            o = ye({
              page: e.subject.page,
              withPlaceholder: e.subject.withPlaceholder,
              axis: e.axis,
              frame: a,
            });
          return { ...e, frame: a, subject: o };
        };
      const _e = F((e) =>
          e.reduce((e, t) => ((e[t.descriptor.id] = t), e), {}),
        ),
        xe = F((e) => e.reduce((e, t) => ((e[t.descriptor.id] = t), e), {})),
        ke = F((e) => Object.values(e)),
        we = F((e) => Object.values(e));
      var Se = F((e, t) => {
        const n = we(t)
          .filter((t) => e === t.descriptor.droppableId)
          .sort((e, t) => e.descriptor.index - t.descriptor.index);
        return n;
      });
      function De(e) {
        return e.at && "REORDER" === e.at.type ? e.at.destination : null;
      }
      function Oe(e) {
        return e.at && "COMBINE" === e.at.type ? e.at.combine : null;
      }
      var Ue = F((e, t) =>
          t.filter((t) => t.descriptor.id !== e.descriptor.id),
        ),
        Ne = (e, t) => e.descriptor.droppableId === t.descriptor.id;
      const ze = { point: ue, value: 0 },
        Ee = { invisible: {}, visible: {}, all: [] };
      var Pe = { displaced: Ee, displacedBy: ze, at: null },
        je = (e, t) => (n) => e <= n && n <= t,
        Ae = (e) => {
          const t = je(e.top, e.bottom),
            n = je(e.left, e.right);
          return (i) => {
            if (t(i.top) && t(i.bottom) && n(i.left) && n(i.right)) return !0;
            const r = t(i.top) || t(i.bottom),
              a = n(i.left) || n(i.right);
            if (r && a) return !0;
            const o = i.top < e.top && i.bottom > e.bottom,
              s = i.left < e.left && i.right > e.right;
            if (o && s) return !0;
            return (o && a) || (s && r);
          };
        },
        Te = (e) => {
          const t = je(e.top, e.bottom),
            n = je(e.left, e.right);
          return (e) => t(e.top) && t(e.bottom) && n(e.left) && n(e.right);
        };
      const Ce = {
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
        Re = {
          direction: "horizontal",
          line: "x",
          crossAxisLine: "y",
          start: "left",
          end: "right",
          size: "width",
          crossAxisStart: "top",
          crossAxisEnd: "bottom",
          crossAxisSize: "height",
        };
      const Le = ({
          target: e,
          destination: t,
          viewport: n,
          withDroppableDisplacement: i,
          isVisibleThroughFrameFn: r,
        }) => {
          const a = i
            ? ((e, t) => {
                const n = t.frame ? t.frame.scroll.diff.displacement : ue;
                return he(e, n);
              })(e, t)
            : e;
          return (
            ((e, t, n) => !!t.subject.active && n(t.subject.active)(e))(
              a,
              t,
              r,
            ) && ((e, t, n) => n(t)(e))(a, n, r)
          );
        },
        Be = (e) => Le({ ...e, isVisibleThroughFrameFn: Te });
      function Ge({
        afterDragging: e,
        destination: t,
        displacedBy: n,
        viewport: i,
        forceShouldAnimate: r,
        last: a,
      }) {
        return e.reduce(
          function (e, o) {
            const s = (function (e, t) {
                const n = e.page.marginBox,
                  i = { top: t.point.y, right: 0, bottom: 0, left: t.point.x };
                return (0, M.l)((0, M.fT)(n, i));
              })(o, n),
              u = o.descriptor.id;
            e.all.push(u);
            var l;
            if (
              !((l = {
                target: s,
                destination: t,
                viewport: i,
                withDroppableDisplacement: !0,
              }),
              Le({ ...l, isVisibleThroughFrameFn: Ae }))
            )
              return (e.invisible[o.descriptor.id] = !0), e;
            const c = ((e, t, n) => {
                if ("boolean" == typeof n) return n;
                if (!t) return !0;
                const { invisible: i, visible: r } = t;
                if (i[e]) return !1;
                const a = r[e];
                return !a || a.shouldAnimate;
              })(u, a, r),
              d = { draggableId: u, shouldAnimate: c };
            return (e.visible[u] = d), e;
          },
          { all: [], visible: {}, invisible: {} },
        );
      }
      function Me({
        insideDestination: e,
        inHomeList: t,
        displacedBy: n,
        destination: i,
      }) {
        const r = (function (e, t) {
          if (!e.length) return 0;
          const n = e[e.length - 1].descriptor.index;
          return t.inHomeList ? n : n + 1;
        })(e, { inHomeList: t });
        return {
          displaced: Ee,
          displacedBy: n,
          at: {
            type: "REORDER",
            destination: { droppableId: i.descriptor.id, index: r },
          },
        };
      }
      function We({
        draggable: e,
        insideDestination: t,
        destination: n,
        viewport: i,
        displacedBy: r,
        last: a,
        index: o,
        forceShouldAnimate: s,
      }) {
        const u = Ne(e, n);
        if (null == o)
          return Me({
            insideDestination: t,
            inHomeList: u,
            displacedBy: r,
            destination: n,
          });
        const l = t.find((e) => e.descriptor.index === o);
        if (!l)
          return Me({
            insideDestination: t,
            inHomeList: u,
            displacedBy: r,
            destination: n,
          });
        const c = Ue(e, t),
          d = t.indexOf(l);
        return {
          displaced: Ge({
            afterDragging: c.slice(d),
            destination: n,
            displacedBy: r,
            last: a,
            viewport: i.frame,
            forceShouldAnimate: s,
          }),
          displacedBy: r,
          at: {
            type: "REORDER",
            destination: { droppableId: n.descriptor.id, index: o },
          },
        };
      }
      function Ze(e, t) {
        return Boolean(t.effected[e]);
      }
      var Je = ({
          isMovingForward: e,
          isInHomeList: t,
          draggable: n,
          draggables: i,
          destination: r,
          insideDestination: a,
          previousImpact: o,
          viewport: s,
          afterCritical: u,
        }) => {
          const l = o.at;
          if ((l || ee(!1), "REORDER" === l.type)) {
            const i = (({
              isMovingForward: e,
              isInHomeList: t,
              insideDestination: n,
              location: i,
            }) => {
              if (!n.length) return null;
              const r = i.index,
                a = e ? r + 1 : r - 1,
                o = n[0].descriptor.index,
                s = n[n.length - 1].descriptor.index;
              return a < o || a > (t ? s : s + 1) ? null : a;
            })({
              isMovingForward: e,
              isInHomeList: t,
              location: l.destination,
              insideDestination: a,
            });
            return null == i
              ? null
              : We({
                  draggable: n,
                  insideDestination: a,
                  destination: r,
                  viewport: s,
                  last: o.displaced,
                  displacedBy: o.displacedBy,
                  index: i,
                });
          }
          const c = (({
            isMovingForward: e,
            destination: t,
            draggables: n,
            combine: i,
            afterCritical: r,
          }) => {
            if (!t.isCombineEnabled) return null;
            const a = i.draggableId,
              o = n[a].descriptor.index;
            return Ze(a, r) ? (e ? o : o - 1) : e ? o + 1 : o;
          })({
            isMovingForward: e,
            destination: r,
            displaced: o.displaced,
            draggables: i,
            combine: l.combine,
            afterCritical: u,
          });
          return null == c
            ? null
            : We({
                draggable: n,
                insideDestination: a,
                destination: r,
                viewport: s,
                last: o.displaced,
                displacedBy: o.displacedBy,
                index: c,
              });
        },
        Fe = ({ afterCritical: e, impact: t, draggables: n }) => {
          const i = Oe(t);
          i || ee(!1);
          const r = i.draggableId,
            a = n[r].page.borderBox.center,
            o = (({
              displaced: e,
              afterCritical: t,
              combineWith: n,
              displacedBy: i,
            }) => {
              const r = Boolean(e.visible[n] || e.invisible[n]);
              return Ze(n, t) ? (r ? ue : me(i.point)) : r ? i.point : ue;
            })({
              displaced: t.displaced,
              afterCritical: e,
              combineWith: r,
              displacedBy: t.displacedBy,
            });
          return le(a, o);
        };
      const Ke = (e, t) => t.margin[e.start] + t.borderBox[e.size] / 2,
        Ve = (e, t, n) =>
          t[e.crossAxisStart] +
          n.margin[e.crossAxisStart] +
          n.borderBox[e.crossAxisSize] / 2,
        He = ({ axis: e, moveRelativeTo: t, isMoving: n }) =>
          pe(e.line, t.marginBox[e.end] + Ke(e, n), Ve(e, t.marginBox, n)),
        qe = ({ axis: e, moveRelativeTo: t, isMoving: n }) =>
          pe(
            e.line,
            t.marginBox[e.start] -
              ((e, t) => t.margin[e.end] + t.borderBox[e.size] / 2)(e, n),
            Ve(e, t.marginBox, n),
          );
      var Xe = ({
          impact: e,
          draggable: t,
          draggables: n,
          droppable: i,
          afterCritical: r,
        }) => {
          const a = Se(i.descriptor.id, n),
            o = t.page,
            s = i.axis;
          if (!a.length)
            return (({ axis: e, moveInto: t, isMoving: n }) =>
              pe(
                e.line,
                t.contentBox[e.start] + Ke(e, n),
                Ve(e, t.contentBox, n),
              ))({ axis: s, moveInto: i.page, isMoving: o });
          const { displaced: u, displacedBy: l } = e,
            c = u.all[0];
          if (c) {
            const e = n[c];
            if (Ze(c, r))
              return qe({ axis: s, moveRelativeTo: e.page, isMoving: o });
            const t = (0, M.cY)(e.page, l.point);
            return qe({ axis: s, moveRelativeTo: t, isMoving: o });
          }
          const d = a[a.length - 1];
          if (d.descriptor.id === t.descriptor.id) return o.borderBox.center;
          if (Ze(d.descriptor.id, r)) {
            const e = (0, M.cY)(d.page, me(r.displacedBy.point));
            return He({ axis: s, moveRelativeTo: e, isMoving: o });
          }
          return He({ axis: s, moveRelativeTo: d.page, isMoving: o });
        },
        Ye = (e, t) => {
          const n = e.frame;
          return n ? le(t, n.scroll.diff.displacement) : t;
        };
      var Qe = (e) => {
          const t = (({
              impact: e,
              draggable: t,
              droppable: n,
              draggables: i,
              afterCritical: r,
            }) => {
              const a = t.page.borderBox.center,
                o = e.at;
              return n && o
                ? "REORDER" === o.type
                  ? Xe({
                      impact: e,
                      draggable: t,
                      draggables: i,
                      droppable: n,
                      afterCritical: r,
                    })
                  : Fe({ impact: e, draggables: i, afterCritical: r })
                : a;
            })(e),
            n = e.droppable;
          return n ? Ye(n, t) : t;
        },
        et = (e, t) => {
          const n = ce(t, e.scroll.initial),
            i = me(n);
          return {
            frame: (0, M.l)({
              top: t.y,
              bottom: t.y + e.frame.height,
              left: t.x,
              right: t.x + e.frame.width,
            }),
            scroll: {
              initial: e.scroll.initial,
              max: e.scroll.max,
              current: t,
              diff: { value: n, displacement: i },
            },
          };
        };
      function tt(e, t) {
        return e.map((e) => t[e]);
      }
      var nt = ({ pageBorderBoxCenter: e, draggable: t, viewport: n }) => {
          const i = ((e, t) => le(e.scroll.diff.displacement, t))(n, e),
            r = ce(i, t.page.borderBox.center);
          return le(t.client.borderBox.center, r);
        },
        it = ({
          draggable: e,
          destination: t,
          newPageBorderBoxCenter: n,
          viewport: i,
          withDroppableDisplacement: r,
          onlyOnMainAxis: a = !1,
        }) => {
          const o = ce(n, e.page.borderBox.center),
            s = {
              target: he(e.page.borderBox, o),
              destination: t,
              withDroppableDisplacement: r,
              viewport: i,
            };
          return a
            ? ((e) => {
                return Le({
                  ...e,
                  isVisibleThroughFrameFn:
                    ((t = e.destination.axis),
                    (e) => {
                      const n = je(e.top, e.bottom),
                        i = je(e.left, e.right);
                      return (e) =>
                        t === Ce
                          ? n(e.top) && n(e.bottom)
                          : i(e.left) && i(e.right);
                    }),
                });
                var t;
              })(s)
            : Be(s);
        },
        rt = ({
          isMovingForward: e,
          draggable: t,
          destination: n,
          draggables: i,
          previousImpact: r,
          viewport: a,
          previousPageBorderBoxCenter: o,
          previousClientSelection: s,
          afterCritical: u,
        }) => {
          if (!n.isEnabled) return null;
          const l = Se(n.descriptor.id, i),
            c = Ne(t, n),
            d =
              (({
                isMovingForward: e,
                draggable: t,
                destination: n,
                insideDestination: i,
                previousImpact: r,
              }) => {
                if (!n.isCombineEnabled) return null;
                if (!De(r)) return null;
                function a(e) {
                  const t = {
                    type: "COMBINE",
                    combine: { draggableId: e, droppableId: n.descriptor.id },
                  };
                  return { ...r, at: t };
                }
                const o = r.displaced.all,
                  s = o.length ? o[0] : null;
                if (e) return s ? a(s) : null;
                const u = Ue(t, i);
                if (!s)
                  return u.length ? a(u[u.length - 1].descriptor.id) : null;
                const l = u.findIndex((e) => e.descriptor.id === s);
                -1 === l && ee(!1);
                const c = l - 1;
                return c < 0 ? null : a(u[c].descriptor.id);
              })({
                isMovingForward: e,
                draggable: t,
                destination: n,
                insideDestination: l,
                previousImpact: r,
              }) ||
              Je({
                isMovingForward: e,
                isInHomeList: c,
                draggable: t,
                draggables: i,
                destination: n,
                insideDestination: l,
                previousImpact: r,
                viewport: a,
                afterCritical: u,
              });
          if (!d) return null;
          const m = Qe({
            impact: d,
            draggable: t,
            droppable: n,
            draggables: i,
            afterCritical: u,
          });
          if (
            it({
              draggable: t,
              destination: n,
              newPageBorderBoxCenter: m,
              viewport: a.frame,
              withDroppableDisplacement: !1,
              onlyOnMainAxis: !0,
            })
          ) {
            return {
              clientSelection: nt({
                pageBorderBoxCenter: m,
                draggable: t,
                viewport: a,
              }),
              impact: d,
              scrollJumpRequest: null,
            };
          }
          const p = ce(m, o),
            g = (({
              impact: e,
              viewport: t,
              destination: n,
              draggables: i,
              maxScrollChange: r,
            }) => {
              const a = et(t, le(t.scroll.current, r)),
                o = n.frame ? Ie(n, le(n.frame.scroll.current, r)) : n,
                s = e.displaced,
                u = Ge({
                  afterDragging: tt(s.all, i),
                  destination: n,
                  displacedBy: e.displacedBy,
                  viewport: a.frame,
                  last: s,
                  forceShouldAnimate: !1,
                }),
                l = Ge({
                  afterDragging: tt(s.all, i),
                  destination: o,
                  displacedBy: e.displacedBy,
                  viewport: t.frame,
                  last: s,
                  forceShouldAnimate: !1,
                }),
                c = {},
                d = {},
                m = [s, u, l];
              return (
                s.all.forEach((e) => {
                  const t = (function (e, t) {
                    for (let n = 0; n < t.length; n++) {
                      const i = t[n].visible[e];
                      if (i) return i;
                    }
                    return null;
                  })(e, m);
                  t ? (d[e] = t) : (c[e] = !0);
                }),
                { ...e, displaced: { all: s.all, invisible: c, visible: d } }
              );
            })({
              impact: d,
              viewport: a,
              destination: n,
              draggables: i,
              maxScrollChange: p,
            });
          return { clientSelection: s, impact: g, scrollJumpRequest: p };
        };
      const at = (e) => {
        const t = e.subject.active;
        return t || ee(!1), t;
      };
      const ot = (e, t) => {
          const n = e.page.borderBox.center;
          return Ze(e.descriptor.id, t) ? ce(n, t.displacedBy.point) : n;
        },
        st = (e, t) => {
          const n = e.page.borderBox;
          return Ze(e.descriptor.id, t) ? he(n, me(t.displacedBy.point)) : n;
        };
      var ut = F(function (e, t) {
        const n = t[e.line];
        return { value: n, point: pe(e.line, n) };
      });
      const lt = (e, t) => ({ ...e, scroll: { ...e.scroll, max: t } }),
        ct = (e, t, n) => {
          const i = e.frame;
          Ne(t, e) && ee(!1), e.subject.withPlaceholder && ee(!1);
          const r = ut(e.axis, t.displaceBy).point,
            a = ((e, t, n) => {
              const i = e.axis;
              if ("virtual" === e.descriptor.mode) return pe(i.line, t[i.line]);
              const r = e.subject.page.contentBox[i.size],
                a =
                  Se(e.descriptor.id, n).reduce(
                    (e, t) => e + t.client.marginBox[i.size],
                    0,
                  ) +
                  t[i.line] -
                  r;
              return a <= 0 ? null : pe(i.line, a);
            })(e, r, n),
            o = {
              placeholderSize: r,
              increasedBy: a,
              oldFrameMaxScroll: e.frame ? e.frame.scroll.max : null,
            };
          if (!i) {
            const t = ye({
              page: e.subject.page,
              withPlaceholder: o,
              axis: e.axis,
              frame: e.frame,
            });
            return { ...e, subject: t };
          }
          const s = a ? le(i.scroll.max, a) : i.scroll.max,
            u = lt(i, s),
            l = ye({
              page: e.subject.page,
              withPlaceholder: o,
              axis: e.axis,
              frame: u,
            });
          return { ...e, subject: l, frame: u };
        };
      var dt = ({
          isMovingForward: e,
          previousPageBorderBoxCenter: t,
          draggable: n,
          isOver: i,
          draggables: r,
          droppables: a,
          viewport: o,
          afterCritical: s,
        }) => {
          const u = (({
            isMovingForward: e,
            pageBorderBoxCenter: t,
            source: n,
            droppables: i,
            viewport: r,
          }) => {
            const a = n.subject.active;
            if (!a) return null;
            const o = n.axis,
              s = je(a[o.start], a[o.end]),
              u = ke(i)
                .filter((e) => e !== n)
                .filter((e) => e.isEnabled)
                .filter((e) => Boolean(e.subject.active))
                .filter((e) => Ae(r.frame)(at(e)))
                .filter((t) => {
                  const n = at(t);
                  return e
                    ? a[o.crossAxisEnd] < n[o.crossAxisEnd]
                    : n[o.crossAxisStart] < a[o.crossAxisStart];
                })
                .filter((e) => {
                  const t = at(e),
                    n = je(t[o.start], t[o.end]);
                  return (
                    s(t[o.start]) || s(t[o.end]) || n(a[o.start]) || n(a[o.end])
                  );
                })
                .sort((t, n) => {
                  const i = at(t)[o.crossAxisStart],
                    r = at(n)[o.crossAxisStart];
                  return e ? i - r : r - i;
                })
                .filter(
                  (e, t, n) =>
                    at(e)[o.crossAxisStart] === at(n[0])[o.crossAxisStart],
                );
            if (!u.length) return null;
            if (1 === u.length) return u[0];
            const l = u.filter((e) =>
              je(at(e)[o.start], at(e)[o.end])(t[o.line]),
            );
            return 1 === l.length
              ? l[0]
              : l.length > 1
                ? l.sort((e, t) => at(e)[o.start] - at(t)[o.start])[0]
                : u.sort((e, n) => {
                    const i = fe(t, be(at(e))),
                      r = fe(t, be(at(n)));
                    return i !== r ? i - r : at(e)[o.start] - at(n)[o.start];
                  })[0];
          })({
            isMovingForward: e,
            pageBorderBoxCenter: t,
            source: i,
            droppables: a,
            viewport: o,
          });
          if (!u) return null;
          const l = Se(u.descriptor.id, r),
            c = (({
              pageBorderBoxCenter: e,
              viewport: t,
              destination: n,
              insideDestination: i,
              afterCritical: r,
            }) => {
              const a = i
                .filter((e) =>
                  Be({
                    target: st(e, r),
                    destination: n,
                    viewport: t.frame,
                    withDroppableDisplacement: !0,
                  }),
                )
                .sort((t, i) => {
                  const a = ge(e, Ye(n, ot(t, r))),
                    o = ge(e, Ye(n, ot(i, r)));
                  return a < o
                    ? -1
                    : o < a
                      ? 1
                      : t.descriptor.index - i.descriptor.index;
                });
              return a[0] || null;
            })({
              pageBorderBoxCenter: t,
              viewport: o,
              destination: u,
              insideDestination: l,
              afterCritical: s,
            }),
            d = (({
              previousPageBorderBoxCenter: e,
              moveRelativeTo: t,
              insideDestination: n,
              draggable: i,
              draggables: r,
              destination: a,
              viewport: o,
              afterCritical: s,
            }) => {
              if (!t) {
                if (n.length) return null;
                const e = {
                    displaced: Ee,
                    displacedBy: ze,
                    at: {
                      type: "REORDER",
                      destination: { droppableId: a.descriptor.id, index: 0 },
                    },
                  },
                  t = Qe({
                    impact: e,
                    draggable: i,
                    droppable: a,
                    draggables: r,
                    afterCritical: s,
                  }),
                  u = Ne(i, a) ? a : ct(a, i, r);
                return it({
                  draggable: i,
                  destination: u,
                  newPageBorderBoxCenter: t,
                  viewport: o.frame,
                  withDroppableDisplacement: !1,
                  onlyOnMainAxis: !0,
                })
                  ? e
                  : null;
              }
              const u = Boolean(
                  e[a.axis.line] <= t.page.borderBox.center[a.axis.line],
                ),
                l = (() => {
                  const e = t.descriptor.index;
                  return t.descriptor.id === i.descriptor.id || u ? e : e + 1;
                })(),
                c = ut(a.axis, i.displaceBy);
              return We({
                draggable: i,
                insideDestination: n,
                destination: a,
                viewport: o,
                displacedBy: c,
                last: Ee,
                index: l,
              });
            })({
              previousPageBorderBoxCenter: t,
              destination: u,
              draggable: n,
              draggables: r,
              moveRelativeTo: c,
              insideDestination: l,
              viewport: o,
              afterCritical: s,
            });
          if (!d) return null;
          const m = Qe({
            impact: d,
            draggable: n,
            droppable: u,
            draggables: r,
            afterCritical: s,
          });
          return {
            clientSelection: nt({
              pageBorderBoxCenter: m,
              draggable: n,
              viewport: o,
            }),
            impact: d,
            scrollJumpRequest: null,
          };
        },
        mt = (e) => {
          const t = e.at;
          return t
            ? "REORDER" === t.type
              ? t.destination.droppableId
              : t.combine.droppableId
            : null;
        };
      var pt = ({ state: e, type: t }) => {
        const n = ((e, t) => {
            const n = mt(e);
            return n ? t[n] : null;
          })(e.impact, e.dimensions.droppables),
          i = Boolean(n),
          r = e.dimensions.droppables[e.critical.droppable.id],
          a = n || r,
          o = a.axis.direction,
          s =
            ("vertical" === o && ("MOVE_UP" === t || "MOVE_DOWN" === t)) ||
            ("horizontal" === o && ("MOVE_LEFT" === t || "MOVE_RIGHT" === t));
        if (s && !i) return null;
        const u = "MOVE_DOWN" === t || "MOVE_RIGHT" === t,
          l = e.dimensions.draggables[e.critical.draggable.id],
          c = e.current.page.borderBoxCenter,
          { draggables: d, droppables: m } = e.dimensions;
        return s
          ? rt({
              isMovingForward: u,
              previousPageBorderBoxCenter: c,
              draggable: l,
              destination: a,
              draggables: d,
              viewport: e.viewport,
              previousClientSelection: e.current.client.selection,
              previousImpact: e.impact,
              afterCritical: e.afterCritical,
            })
          : dt({
              isMovingForward: u,
              previousPageBorderBoxCenter: c,
              draggable: l,
              isOver: a,
              draggables: d,
              droppables: m,
              viewport: e.viewport,
              afterCritical: e.afterCritical,
            });
      };
      function gt(e) {
        return "DRAGGING" === e.phase || "COLLECTING" === e.phase;
      }
      function ft(e) {
        const t = je(e.top, e.bottom),
          n = je(e.left, e.right);
        return function (e) {
          return t(e.y) && n(e.x);
        };
      }
      function vt({ pageBorderBox: e, draggable: t, droppables: n }) {
        const i = ke(n).filter((t) => {
          if (!t.isEnabled) return !1;
          const n = t.subject.active;
          if (!n) return !1;
          if (
            ((r = n),
            !(
              (i = e).left < r.right &&
              i.right > r.left &&
              i.top < r.bottom &&
              i.bottom > r.top
            ))
          )
            return !1;
          var i, r;
          if (ft(n)(e.center)) return !0;
          const a = t.axis,
            o = n.center[a.crossAxisLine],
            s = e[a.crossAxisStart],
            u = e[a.crossAxisEnd],
            l = je(n[a.crossAxisStart], n[a.crossAxisEnd]),
            c = l(s),
            d = l(u);
          return (!c && !d) || (c ? s < o : u > o);
        });
        return i.length
          ? 1 === i.length
            ? i[0].descriptor.id
            : (function ({ pageBorderBox: e, draggable: t, candidates: n }) {
                const i = t.page.borderBox.center,
                  r = n
                    .map((t) => {
                      const n = t.axis,
                        r = pe(
                          t.axis.line,
                          e.center[n.line],
                          t.page.borderBox.center[n.crossAxisLine],
                        );
                      return { id: t.descriptor.id, distance: ge(i, r) };
                    })
                    .sort((e, t) => t.distance - e.distance);
                return r[0] ? r[0].id : null;
              })({ pageBorderBox: e, draggable: t, candidates: i })
          : null;
      }
      const ht = (e, t) => (0, M.l)(he(e, t));
      function bt({ displaced: e, id: t }) {
        return Boolean(e.visible[t] || e.invisible[t]);
      }
      var $t = ({
          pageOffset: e,
          draggable: t,
          draggables: n,
          droppables: i,
          previousImpact: r,
          viewport: a,
          afterCritical: o,
        }) => {
          const s = ht(t.page.borderBox, e),
            u = vt({ pageBorderBox: s, draggable: t, droppables: i });
          if (!u) return Pe;
          const l = i[u],
            c = Se(l.descriptor.id, n),
            d = ((e, t) => {
              const n = e.frame;
              return n ? ht(t, n.scroll.diff.value) : t;
            })(l, s);
          return (
            (({
              draggable: e,
              pageBorderBoxWithDroppableScroll: t,
              previousImpact: n,
              destination: i,
              insideDestination: r,
              afterCritical: a,
            }) => {
              if (!i.isCombineEnabled) return null;
              const o = i.axis,
                s = ut(i.axis, e.displaceBy),
                u = s.value,
                l = t[o.start],
                c = t[o.end],
                d = Ue(e, r).find((e) => {
                  const t = e.descriptor.id,
                    i = e.page.borderBox,
                    r = i[o.size] / 4,
                    s = Ze(t, a),
                    d = bt({ displaced: n.displaced, id: t });
                  return s
                    ? d
                      ? c > i[o.start] + r && c < i[o.end] - r
                      : l > i[o.start] - u + r && l < i[o.end] - u - r
                    : d
                      ? c > i[o.start] + u + r && c < i[o.end] + u - r
                      : l > i[o.start] + r && l < i[o.end] - r;
                });
              return d
                ? {
                    displacedBy: s,
                    displaced: n.displaced,
                    at: {
                      type: "COMBINE",
                      combine: {
                        draggableId: d.descriptor.id,
                        droppableId: i.descriptor.id,
                      },
                    },
                  }
                : null;
            })({
              pageBorderBoxWithDroppableScroll: d,
              draggable: t,
              previousImpact: r,
              destination: l,
              insideDestination: c,
              afterCritical: o,
            }) ||
            (({
              pageBorderBoxWithDroppableScroll: e,
              draggable: t,
              destination: n,
              insideDestination: i,
              last: r,
              viewport: a,
              afterCritical: o,
            }) => {
              const s = n.axis,
                u = ut(n.axis, t.displaceBy),
                l = u.value,
                c = e[s.start],
                d = e[s.end],
                m = (function ({ draggable: e, closest: t, inHomeList: n }) {
                  return t
                    ? n && t.descriptor.index > e.descriptor.index
                      ? t.descriptor.index - 1
                      : t.descriptor.index
                    : null;
                })({
                  draggable: t,
                  closest:
                    Ue(t, i).find((e) => {
                      const t = e.descriptor.id,
                        n = e.page.borderBox.center[s.line],
                        i = Ze(t, o),
                        a = bt({ displaced: r, id: t });
                      return i
                        ? a
                          ? d <= n
                          : c < n - l
                        : a
                          ? d <= n + l
                          : c < n;
                    }) || null,
                  inHomeList: Ne(t, n),
                });
              return We({
                draggable: t,
                insideDestination: i,
                destination: n,
                viewport: a,
                last: r,
                displacedBy: u,
                index: m,
              });
            })({
              pageBorderBoxWithDroppableScroll: d,
              draggable: t,
              destination: l,
              insideDestination: c,
              last: r.displaced,
              viewport: a,
              afterCritical: o,
            })
          );
        },
        yt = (e, t) => ({ ...e, [t.descriptor.id]: t });
      const It = ({ previousImpact: e, impact: t, droppables: n }) => {
        const i = mt(e),
          r = mt(t);
        if (!i) return n;
        if (i === r) return n;
        const a = n[i];
        if (!a.subject.withPlaceholder) return n;
        const o = ((e) => {
          const t = e.subject.withPlaceholder;
          t || ee(!1);
          const n = e.frame;
          if (!n) {
            const t = ye({
              page: e.subject.page,
              axis: e.axis,
              frame: null,
              withPlaceholder: null,
            });
            return { ...e, subject: t };
          }
          const i = t.oldFrameMaxScroll;
          i || ee(!1);
          const r = lt(n, i),
            a = ye({
              page: e.subject.page,
              axis: e.axis,
              frame: r,
              withPlaceholder: null,
            });
          return { ...e, subject: a, frame: r };
        })(a);
        return yt(n, o);
      };
      var _t = ({
        state: e,
        clientSelection: t,
        dimensions: n,
        viewport: i,
        impact: r,
        scrollJumpRequest: a,
      }) => {
        const o = i || e.viewport,
          s = n || e.dimensions,
          u = t || e.current.client.selection,
          l = ce(u, e.initial.client.selection),
          c = {
            offset: l,
            selection: u,
            borderBoxCenter: le(e.initial.client.borderBoxCenter, l),
          },
          d = {
            selection: le(c.selection, o.scroll.current),
            borderBoxCenter: le(c.borderBoxCenter, o.scroll.current),
            offset: le(c.offset, o.scroll.diff.value),
          },
          m = { client: c, page: d };
        if ("COLLECTING" === e.phase)
          return { ...e, dimensions: s, viewport: o, current: m };
        const p = s.draggables[e.critical.draggable.id],
          g =
            r ||
            $t({
              pageOffset: d.offset,
              draggable: p,
              draggables: s.draggables,
              droppables: s.droppables,
              previousImpact: e.impact,
              viewport: o,
              afterCritical: e.afterCritical,
            }),
          f = (({
            draggable: e,
            draggables: t,
            droppables: n,
            previousImpact: i,
            impact: r,
          }) => {
            const a = It({ previousImpact: i, impact: r, droppables: n }),
              o = mt(r);
            if (!o) return a;
            const s = n[o];
            if (Ne(e, s)) return a;
            if (s.subject.withPlaceholder) return a;
            const u = ct(s, e, t);
            return yt(a, u);
          })({
            draggable: p,
            impact: g,
            previousImpact: e.impact,
            draggables: s.draggables,
            droppables: s.droppables,
          });
        return {
          ...e,
          current: m,
          dimensions: { draggables: s.draggables, droppables: f },
          impact: g,
          viewport: o,
          scrollJumpRequest: a || null,
          forceShouldAnimate: !a && null,
        };
      };
      var xt = ({
          impact: e,
          viewport: t,
          draggables: n,
          destination: i,
          forceShouldAnimate: r,
        }) => {
          const a = e.displaced,
            o = (function (e, t) {
              return e.map((e) => t[e]);
            })(a.all, n),
            s = Ge({
              afterDragging: o,
              destination: i,
              displacedBy: e.displacedBy,
              viewport: t.frame,
              forceShouldAnimate: r,
              last: a,
            });
          return { ...e, displaced: s };
        },
        kt = ({
          impact: e,
          draggable: t,
          droppable: n,
          draggables: i,
          viewport: r,
          afterCritical: a,
        }) => {
          const o = Qe({
            impact: e,
            draggable: t,
            draggables: i,
            droppable: n,
            afterCritical: a,
          });
          return nt({ pageBorderBoxCenter: o, draggable: t, viewport: r });
        },
        wt = ({ state: e, dimensions: t, viewport: n }) => {
          "SNAP" !== e.movementMode && ee(!1);
          const i = e.impact,
            r = n || e.viewport,
            a = t || e.dimensions,
            { draggables: o, droppables: s } = a,
            u = o[e.critical.draggable.id],
            l = mt(i);
          l || ee(!1);
          const c = s[l],
            d = xt({ impact: i, viewport: r, destination: c, draggables: o }),
            m = kt({
              impact: d,
              draggable: u,
              droppable: c,
              draggables: o,
              viewport: r,
              afterCritical: e.afterCritical,
            });
          return _t({
            impact: d,
            clientSelection: m,
            state: e,
            dimensions: a,
            viewport: r,
          });
        },
        St = ({ draggable: e, home: t, draggables: n, viewport: i }) => {
          const r = ut(t.axis, e.displaceBy),
            a = Se(t.descriptor.id, n),
            o = a.indexOf(e);
          -1 === o && ee(!1);
          const s = a.slice(o + 1),
            u = s.reduce((e, t) => ((e[t.descriptor.id] = !0), e), {}),
            l = {
              inVirtualList: "virtual" === t.descriptor.mode,
              displacedBy: r,
              effected: u,
            };
          var c;
          return {
            impact: {
              displaced: Ge({
                afterDragging: s,
                destination: t,
                displacedBy: r,
                last: null,
                viewport: i.frame,
                forceShouldAnimate: !1,
              }),
              displacedBy: r,
              at: {
                type: "REORDER",
                destination:
                  ((c = e.descriptor),
                  { index: c.index, droppableId: c.droppableId }),
              },
            },
            afterCritical: l,
          };
        };
      const Dt = (e) => {
          0;
        },
        Ot = (e) => {
          0;
        };
      var Ut = ({ additions: e, updatedDroppables: t, viewport: n }) => {
        const i = n.scroll.diff.value;
        return e.map((e) => {
          const r = e.descriptor.droppableId,
            a = ((e) => {
              const t = e.frame;
              return t || ee(!1), t;
            })(t[r]),
            o = a.scroll.diff.value,
            s = (({ draggable: e, offset: t, initialWindowScroll: n }) => {
              const i = (0, M.cY)(e.client, t),
                r = (0, M.SQ)(i, n);
              return {
                ...e,
                placeholder: { ...e.placeholder, client: i },
                client: i,
                page: r,
              };
            })({
              draggable: e,
              offset: le(i, o),
              initialWindowScroll: n.scroll.initial,
            });
          return s;
        });
      };
      const Nt = (e) => "SNAP" === e.movementMode,
        zt = (e, t, n) => {
          const i = ((e, t) => ({
            draggables: e.draggables,
            droppables: yt(e.droppables, t),
          }))(e.dimensions, t);
          return !Nt(e) || n
            ? _t({ state: e, dimensions: i })
            : wt({ state: e, dimensions: i });
        };
      function Et(e) {
        return e.isDragging && "SNAP" === e.movementMode
          ? { ...e, scrollJumpRequest: null }
          : e;
      }
      const Pt = { phase: "IDLE", completed: null, shouldFlush: !1 };
      var jt = (e = Pt, t) => {
        if ("FLUSH" === t.type) return { ...Pt, shouldFlush: !0 };
        if ("INITIAL_PUBLISH" === t.type) {
          "IDLE" !== e.phase && ee(!1);
          const {
              critical: n,
              clientSelection: i,
              viewport: r,
              dimensions: a,
              movementMode: o,
            } = t.payload,
            s = a.draggables[n.draggable.id],
            u = a.droppables[n.droppable.id],
            l = {
              selection: i,
              borderBoxCenter: s.client.borderBox.center,
              offset: ue,
            },
            c = {
              client: l,
              page: {
                selection: le(l.selection, r.scroll.initial),
                borderBoxCenter: le(l.selection, r.scroll.initial),
                offset: le(l.selection, r.scroll.diff.value),
              },
            },
            d = ke(a.droppables).every((e) => !e.isFixedOnPage),
            { impact: m, afterCritical: p } = St({
              draggable: s,
              home: u,
              draggables: a.draggables,
              viewport: r,
            });
          return {
            phase: "DRAGGING",
            isDragging: !0,
            critical: n,
            movementMode: o,
            dimensions: a,
            initial: c,
            current: c,
            isWindowScrollAllowed: d,
            impact: m,
            afterCritical: p,
            onLiftImpact: m,
            viewport: r,
            scrollJumpRequest: null,
            forceShouldAnimate: null,
          };
        }
        if ("COLLECTION_STARTING" === t.type) {
          if ("COLLECTING" === e.phase || "DROP_PENDING" === e.phase) return e;
          "DRAGGING" !== e.phase && ee(!1);
          return { ...e, phase: "COLLECTING" };
        }
        if ("PUBLISH_WHILE_DRAGGING" === t.type)
          return (
            "COLLECTING" !== e.phase && "DROP_PENDING" !== e.phase && ee(!1),
            (({ state: e, published: t }) => {
              Dt();
              const n = t.modified.map((t) => {
                  const n = e.dimensions.droppables[t.droppableId];
                  return Ie(n, t.scroll);
                }),
                i = { ...e.dimensions.droppables, ..._e(n) },
                r = xe(
                  Ut({
                    additions: t.additions,
                    updatedDroppables: i,
                    viewport: e.viewport,
                  }),
                ),
                a = { ...e.dimensions.draggables, ...r };
              t.removals.forEach((e) => {
                delete a[e];
              });
              const o = { droppables: i, draggables: a },
                s = mt(e.impact),
                u = s ? o.droppables[s] : null,
                l = o.draggables[e.critical.draggable.id],
                c = o.droppables[e.critical.droppable.id],
                { impact: d, afterCritical: m } = St({
                  draggable: l,
                  home: c,
                  draggables: a,
                  viewport: e.viewport,
                }),
                p = u && u.isCombineEnabled ? e.impact : d,
                g = $t({
                  pageOffset: e.current.page.offset,
                  draggable: o.draggables[e.critical.draggable.id],
                  draggables: o.draggables,
                  droppables: o.droppables,
                  previousImpact: p,
                  viewport: e.viewport,
                  afterCritical: m,
                });
              Ot();
              const f = {
                ...e,
                phase: "DRAGGING",
                impact: g,
                onLiftImpact: d,
                dimensions: o,
                afterCritical: m,
                forceShouldAnimate: !1,
              };
              return "COLLECTING" === e.phase
                ? f
                : {
                    ...f,
                    phase: "DROP_PENDING",
                    reason: e.reason,
                    isWaiting: !1,
                  };
            })({ state: e, published: t.payload })
          );
        if ("MOVE" === t.type) {
          if ("DROP_PENDING" === e.phase) return e;
          gt(e) || ee(!1);
          const { client: n } = t.payload;
          return de(n, e.current.client.selection)
            ? e
            : _t({
                state: e,
                clientSelection: n,
                impact: Nt(e) ? e.impact : null,
              });
        }
        if ("UPDATE_DROPPABLE_SCROLL" === t.type) {
          if ("DROP_PENDING" === e.phase) return Et(e);
          if ("COLLECTING" === e.phase) return Et(e);
          gt(e) || ee(!1);
          const { id: n, newScroll: i } = t.payload,
            r = e.dimensions.droppables[n];
          if (!r) return e;
          const a = Ie(r, i);
          return zt(e, a, !1);
        }
        if ("UPDATE_DROPPABLE_IS_ENABLED" === t.type) {
          if ("DROP_PENDING" === e.phase) return e;
          gt(e) || ee(!1);
          const { id: n, isEnabled: i } = t.payload,
            r = e.dimensions.droppables[n];
          r || ee(!1), r.isEnabled === i && ee(!1);
          const a = { ...r, isEnabled: i };
          return zt(e, a, !0);
        }
        if ("UPDATE_DROPPABLE_IS_COMBINE_ENABLED" === t.type) {
          if ("DROP_PENDING" === e.phase) return e;
          gt(e) || ee(!1);
          const { id: n, isCombineEnabled: i } = t.payload,
            r = e.dimensions.droppables[n];
          r || ee(!1), r.isCombineEnabled === i && ee(!1);
          const a = { ...r, isCombineEnabled: i };
          return zt(e, a, !0);
        }
        if ("MOVE_BY_WINDOW_SCROLL" === t.type) {
          if ("DROP_PENDING" === e.phase || "DROP_ANIMATING" === e.phase)
            return e;
          gt(e) || ee(!1), e.isWindowScrollAllowed || ee(!1);
          const n = t.payload.newScroll;
          if (de(e.viewport.scroll.current, n)) return Et(e);
          const i = et(e.viewport, n);
          return Nt(e)
            ? wt({ state: e, viewport: i })
            : _t({ state: e, viewport: i });
        }
        if ("UPDATE_VIEWPORT_MAX_SCROLL" === t.type) {
          if (!gt(e)) return e;
          const n = t.payload.maxScroll;
          if (de(n, e.viewport.scroll.max)) return e;
          const i = { ...e.viewport, scroll: { ...e.viewport.scroll, max: n } };
          return { ...e, viewport: i };
        }
        if (
          "MOVE_UP" === t.type ||
          "MOVE_DOWN" === t.type ||
          "MOVE_LEFT" === t.type ||
          "MOVE_RIGHT" === t.type
        ) {
          if ("COLLECTING" === e.phase || "DROP_PENDING" === e.phase) return e;
          "DRAGGING" !== e.phase && ee(!1);
          const n = pt({ state: e, type: t.type });
          return n
            ? _t({
                state: e,
                impact: n.impact,
                clientSelection: n.clientSelection,
                scrollJumpRequest: n.scrollJumpRequest,
              })
            : e;
        }
        if ("DROP_PENDING" === t.type) {
          const n = t.payload.reason;
          "COLLECTING" !== e.phase && ee(!1);
          return { ...e, phase: "DROP_PENDING", isWaiting: !0, reason: n };
        }
        if ("DROP_ANIMATE" === t.type) {
          const {
            completed: n,
            dropDuration: i,
            newHomeClientOffset: r,
          } = t.payload;
          "DRAGGING" !== e.phase && "DROP_PENDING" !== e.phase && ee(!1);
          return {
            phase: "DROP_ANIMATING",
            completed: n,
            dropDuration: i,
            newHomeClientOffset: r,
            dimensions: e.dimensions,
          };
        }
        if ("DROP_COMPLETE" === t.type) {
          const { completed: e } = t.payload;
          return { phase: "IDLE", completed: e, shouldFlush: !1 };
        }
        return e;
      };
      const At = (e) => ({ type: "LIFT", payload: e }),
        Tt = (e) => ({ type: "PUBLISH_WHILE_DRAGGING", payload: e }),
        Ct = () => ({ type: "COLLECTION_STARTING", payload: null }),
        Rt = (e) => ({ type: "UPDATE_DROPPABLE_SCROLL", payload: e }),
        Lt = (e) => ({ type: "UPDATE_DROPPABLE_IS_ENABLED", payload: e }),
        Bt = (e) => ({
          type: "UPDATE_DROPPABLE_IS_COMBINE_ENABLED",
          payload: e,
        }),
        Gt = (e) => ({ type: "MOVE", payload: e }),
        Mt = () => ({ type: "MOVE_UP", payload: null }),
        Wt = () => ({ type: "MOVE_DOWN", payload: null }),
        Zt = () => ({ type: "MOVE_RIGHT", payload: null }),
        Jt = () => ({ type: "MOVE_LEFT", payload: null }),
        Ft = () => ({ type: "FLUSH", payload: null }),
        Kt = (e) => ({ type: "DROP_COMPLETE", payload: e }),
        Vt = (e) => ({ type: "DROP", payload: e }),
        Ht = () => ({ type: "DROP_ANIMATION_FINISHED", payload: null });
      const qt = "cubic-bezier(.2,1,.1,1)",
        Xt = { drop: 0, combining: 0.7 },
        Yt = { drop: 0.75 },
        Qt = { outOfTheWay: 0.2, minDropTime: 0.33, maxDropTime: 0.55 },
        en = `${Qt.outOfTheWay}s ${"cubic-bezier(0.2, 0, 0, 1)"}`,
        tn = {
          fluid: `opacity ${en}`,
          snap: `transform ${en}, opacity ${en}`,
          drop: (e) => {
            const t = `${e}s ${qt}`;
            return `transform ${t}, opacity ${t}`;
          },
          outOfTheWay: `transform ${en}`,
          placeholder: `height ${en}, width ${en}, margin ${en}`,
        },
        nn = (e) => (de(e, ue) ? void 0 : `translate(${e.x}px, ${e.y}px)`),
        rn = nn,
        an = (e, t) => {
          const n = nn(e);
          if (n) return t ? `${n} scale(${Yt.drop})` : n;
        },
        { minDropTime: on, maxDropTime: sn } = Qt,
        un = sn - on;
      var ln =
          ({ getState: e, dispatch: t }) =>
          (n) =>
          (i) => {
            if ("DROP" !== i.type) return void n(i);
            const r = e(),
              a = i.payload.reason;
            if ("COLLECTING" === r.phase)
              return void t(
                ((e) => ({ type: "DROP_PENDING", payload: e }))({ reason: a }),
              );
            if ("IDLE" === r.phase) return;
            "DROP_PENDING" === r.phase && r.isWaiting && ee(!1),
              "DRAGGING" !== r.phase && "DROP_PENDING" !== r.phase && ee(!1);
            const o = r.critical,
              s = r.dimensions,
              u = s.draggables[r.critical.draggable.id],
              { impact: l, didDropInsideDroppable: c } = (({
                draggables: e,
                reason: t,
                lastImpact: n,
                home: i,
                viewport: r,
                onLiftImpact: a,
              }) => {
                if (!n.at || "DROP" !== t)
                  return {
                    impact: xt({
                      draggables: e,
                      impact: a,
                      destination: i,
                      viewport: r,
                      forceShouldAnimate: !0,
                    }),
                    didDropInsideDroppable: !1,
                  };
                return "REORDER" === n.at.type
                  ? { impact: n, didDropInsideDroppable: !0 }
                  : {
                      impact: { ...n, displaced: Ee },
                      didDropInsideDroppable: !0,
                    };
              })({
                reason: a,
                lastImpact: r.impact,
                afterCritical: r.afterCritical,
                onLiftImpact: r.onLiftImpact,
                home: r.dimensions.droppables[r.critical.droppable.id],
                viewport: r.viewport,
                draggables: r.dimensions.draggables,
              }),
              d = c ? De(l) : null,
              m = c ? Oe(l) : null,
              p = { index: o.draggable.index, droppableId: o.droppable.id },
              g = {
                draggableId: u.descriptor.id,
                type: u.descriptor.type,
                source: p,
                reason: a,
                mode: r.movementMode,
                destination: d,
                combine: m,
              },
              f = (({
                impact: e,
                draggable: t,
                dimensions: n,
                viewport: i,
                afterCritical: r,
              }) => {
                const { draggables: a, droppables: o } = n,
                  s = mt(e),
                  u = s ? o[s] : null,
                  l = o[t.descriptor.droppableId],
                  c = kt({
                    impact: e,
                    draggable: t,
                    draggables: a,
                    afterCritical: r,
                    droppable: u || l,
                    viewport: i,
                  });
                return ce(c, t.client.borderBox.center);
              })({
                impact: l,
                draggable: u,
                dimensions: s,
                viewport: r.viewport,
                afterCritical: r.afterCritical,
              }),
              v = {
                critical: r.critical,
                afterCritical: r.afterCritical,
                result: g,
                impact: l,
              };
            if (!(!de(r.current.client.offset, f) || Boolean(g.combine)))
              return void t(Kt({ completed: v }));
            const h = (({ current: e, destination: t, reason: n }) => {
              const i = ge(e, t);
              if (i <= 0) return on;
              if (i >= 1500) return sn;
              const r = on + un * (i / 1500);
              return Number(("CANCEL" === n ? 0.6 * r : r).toFixed(2));
            })({ current: r.current.client.offset, destination: f, reason: a });
            t(
              ((e) => ({ type: "DROP_ANIMATE", payload: e }))({
                newHomeClientOffset: f,
                dropDuration: h,
                completed: v,
              }),
            );
          },
        cn = () => ({ x: window.pageXOffset, y: window.pageYOffset });
      function dn({ onWindowScroll: e }) {
        const t = (0, K.A)(function () {
            e(cn());
          }),
          n = (function (e) {
            return {
              eventName: "scroll",
              options: { passive: !0, capture: !1 },
              fn: (t) => {
                (t.target !== window && t.target !== window.document) || e();
              },
            };
          })(t);
        let i = H;
        function r() {
          return i !== H;
        }
        return {
          start: function () {
            r() && ee(!1), (i = q(window, [n]));
          },
          stop: function () {
            r() || ee(!1), t.cancel(), i(), (i = H);
          },
          isActive: r,
        };
      }
      var mn = (e) => {
          const t = dn({
            onWindowScroll: (t) => {
              e.dispatch({
                type: "MOVE_BY_WINDOW_SCROLL",
                payload: { newScroll: t },
              });
            },
          });
          return (e) => (n) => {
            t.isActive() || "INITIAL_PUBLISH" !== n.type || t.start(),
              t.isActive() &&
                ((e) =>
                  "DROP_COMPLETE" === e.type ||
                  "DROP_ANIMATE" === e.type ||
                  "FLUSH" === e.type)(n) &&
                t.stop(),
              e(n);
          };
        },
        pn = () => {
          const e = [];
          return {
            add: (t) => {
              const n = setTimeout(() =>
                  ((t) => {
                    const n = e.findIndex((e) => e.timerId === t);
                    -1 === n && ee(!1);
                    const [i] = e.splice(n, 1);
                    i.callback();
                  })(n),
                ),
                i = { timerId: n, callback: t };
              e.push(i);
            },
            flush: () => {
              if (!e.length) return;
              const t = [...e];
              (e.length = 0),
                t.forEach((e) => {
                  clearTimeout(e.timerId), e.callback();
                });
            },
          };
        };
      const gn = (e, t) => {
          Dt(), t(), Ot();
        },
        fn = (e, t) => ({
          draggableId: e.draggable.id,
          type: e.droppable.type,
          source: { droppableId: e.droppable.id, index: e.draggable.index },
          mode: t,
        });
      function vn(e, t, n, i) {
        if (!e) return void n(i(t));
        const r = ((e) => {
          let t = !1,
            n = !1;
          const i = setTimeout(() => {
              n = !0;
            }),
            r = (r) => {
              t || n || ((t = !0), e(r), clearTimeout(i));
            };
          return (r.wasCalled = () => t), r;
        })(n);
        e(t, { announce: r }), r.wasCalled() || n(i(t));
      }
      var hn = (e, t) => {
        const n = ((e, t) => {
          const n = pn();
          let i = null;
          const r = (n) => {
            i || ee(!1),
              (i = null),
              gn(0, () => vn(e().onDragEnd, n, t, se.onDragEnd));
          };
          return {
            beforeCapture: (t, n) => {
              i && ee(!1),
                gn(0, () => {
                  const i = e().onBeforeCapture;
                  i && i({ draggableId: t, mode: n });
                });
            },
            beforeStart: (t, n) => {
              i && ee(!1),
                gn(0, () => {
                  const i = e().onBeforeDragStart;
                  i && i(fn(t, n));
                });
            },
            start: (r, a) => {
              i && ee(!1);
              const o = fn(r, a);
              (i = {
                mode: a,
                lastCritical: r,
                lastLocation: o.source,
                lastCombine: null,
              }),
                n.add(() => {
                  gn(0, () => vn(e().onDragStart, o, t, se.onDragStart));
                });
            },
            update: (r, a) => {
              const o = De(a),
                s = Oe(a);
              i || ee(!1);
              const u = !((e, t) => {
                if (e === t) return !0;
                const n =
                    e.draggable.id === t.draggable.id &&
                    e.draggable.droppableId === t.draggable.droppableId &&
                    e.draggable.type === t.draggable.type &&
                    e.draggable.index === t.draggable.index,
                  i =
                    e.droppable.id === t.droppable.id &&
                    e.droppable.type === t.droppable.type;
                return n && i;
              })(r, i.lastCritical);
              u && (i.lastCritical = r);
              const l =
                ((d = o),
                !(
                  (null == (c = i.lastLocation) && null == d) ||
                  (null != c &&
                    null != d &&
                    c.droppableId === d.droppableId &&
                    c.index === d.index)
                ));
              var c, d;
              l && (i.lastLocation = o);
              const m = !((e, t) =>
                (null == e && null == t) ||
                (null != e &&
                  null != t &&
                  e.draggableId === t.draggableId &&
                  e.droppableId === t.droppableId))(i.lastCombine, s);
              if ((m && (i.lastCombine = s), !u && !l && !m)) return;
              const p = { ...fn(r, i.mode), combine: s, destination: o };
              n.add(() => {
                gn(0, () => vn(e().onDragUpdate, p, t, se.onDragUpdate));
              });
            },
            flush: () => {
              i || ee(!1), n.flush();
            },
            drop: r,
            abort: () => {
              if (!i) return;
              const e = {
                ...fn(i.lastCritical, i.mode),
                combine: null,
                destination: null,
                reason: "CANCEL",
              };
              r(e);
            },
          };
        })(e, t);
        return (e) => (t) => (i) => {
          if ("BEFORE_INITIAL_CAPTURE" === i.type)
            return void n.beforeCapture(
              i.payload.draggableId,
              i.payload.movementMode,
            );
          if ("INITIAL_PUBLISH" === i.type) {
            const e = i.payload.critical;
            return (
              n.beforeStart(e, i.payload.movementMode),
              t(i),
              void n.start(e, i.payload.movementMode)
            );
          }
          if ("DROP_COMPLETE" === i.type) {
            const e = i.payload.completed.result;
            return n.flush(), t(i), void n.drop(e);
          }
          if ((t(i), "FLUSH" === i.type)) return void n.abort();
          const r = e.getState();
          "DRAGGING" === r.phase && n.update(r.critical, r.impact);
        };
      };
      var bn = (e) => (t) => (n) => {
        if ("DROP_ANIMATION_FINISHED" !== n.type) return void t(n);
        const i = e.getState();
        "DROP_ANIMATING" !== i.phase && ee(!1),
          e.dispatch(Kt({ completed: i.completed }));
      };
      var $n = (e) => {
        let t = null,
          n = null;
        return (i) => (r) => {
          if (
            (("FLUSH" !== r.type &&
              "DROP_COMPLETE" !== r.type &&
              "DROP_ANIMATION_FINISHED" !== r.type) ||
              (n && (cancelAnimationFrame(n), (n = null)),
              t && (t(), (t = null))),
            i(r),
            "DROP_ANIMATE" !== r.type)
          )
            return;
          const a = {
            eventName: "scroll",
            options: { capture: !0, passive: !1, once: !0 },
            fn: function () {
              "DROP_ANIMATING" === e.getState().phase &&
                e.dispatch({ type: "DROP_ANIMATION_FINISHED", payload: null });
            },
          };
          n = requestAnimationFrame(() => {
            (n = null), (t = q(window, [a]));
          });
        };
      };
      var yn = (e) => (t) => (n) => {
        if ((t(n), "PUBLISH_WHILE_DRAGGING" !== n.type)) return;
        const i = e.getState();
        "DROP_PENDING" === i.phase &&
          (i.isWaiting || e.dispatch(Vt({ reason: i.reason })));
      };
      const In = a.Zz;
      var _n = ({
        dimensionMarshal: e,
        focusMarshal: t,
        styleMarshal: n,
        getResponders: i,
        announce: r,
        autoScroller: o,
      }) => {
        return (0, a.y$)(
          jt,
          In(
            (0, a.Tw)(
              ((s = n),
              () => (e) => (t) => {
                "INITIAL_PUBLISH" === t.type && s.dragging(),
                  "DROP_ANIMATE" === t.type &&
                    s.dropping(t.payload.completed.result.reason),
                  ("FLUSH" !== t.type && "DROP_COMPLETE" !== t.type) ||
                    s.resting(),
                  e(t);
              }),
              ((e) => () => (t) => (n) => {
                ("DROP_COMPLETE" !== n.type &&
                  "FLUSH" !== n.type &&
                  "DROP_ANIMATE" !== n.type) ||
                  e.stopPublishing(),
                  t(n);
              })(e),
              (
                (e) =>
                ({ getState: t, dispatch: n }) =>
                (i) =>
                (r) => {
                  if ("LIFT" !== r.type) return void i(r);
                  const {
                      id: a,
                      clientSelection: o,
                      movementMode: s,
                    } = r.payload,
                    u = t();
                  "DROP_ANIMATING" === u.phase &&
                    n(Kt({ completed: u.completed })),
                    "IDLE" !== t().phase && ee(!1),
                    n(Ft()),
                    n({
                      type: "BEFORE_INITIAL_CAPTURE",
                      payload: { draggableId: a, movementMode: s },
                    });
                  const l = {
                      draggableId: a,
                      scrollOptions: { shouldPublishImmediately: "SNAP" === s },
                    },
                    {
                      critical: c,
                      dimensions: d,
                      viewport: m,
                    } = e.startPublishing(l);
                  n({
                    type: "INITIAL_PUBLISH",
                    payload: {
                      critical: c,
                      dimensions: d,
                      clientSelection: o,
                      movementMode: s,
                      viewport: m,
                    },
                  });
                }
              )(e),
              ln,
              bn,
              $n,
              yn,
              ((e) => (t) => (n) => (i) => {
                if (
                  ((e) =>
                    "DROP_COMPLETE" === e.type ||
                    "DROP_ANIMATE" === e.type ||
                    "FLUSH" === e.type)(i)
                )
                  return e.stop(), void n(i);
                if ("INITIAL_PUBLISH" === i.type) {
                  n(i);
                  const r = t.getState();
                  return "DRAGGING" !== r.phase && ee(!1), void e.start(r);
                }
                n(i), e.scroll(t.getState());
              })(o),
              mn,
              ((e) => {
                let t = !1;
                return () => (n) => (i) => {
                  if ("INITIAL_PUBLISH" === i.type)
                    return (
                      (t = !0),
                      e.tryRecordFocus(i.payload.critical.draggable.id),
                      n(i),
                      void e.tryRestoreFocusRecorded()
                    );
                  if ((n(i), t)) {
                    if ("FLUSH" === i.type)
                      return (t = !1), void e.tryRestoreFocusRecorded();
                    if ("DROP_COMPLETE" === i.type) {
                      t = !1;
                      const n = i.payload.completed.result;
                      n.combine &&
                        e.tryShiftRecord(n.draggableId, n.combine.draggableId),
                        e.tryRestoreFocusRecorded();
                    }
                  }
                };
              })(t),
              hn(i, r),
            ),
          ),
        );
        var s;
      };
      var xn = ({ scrollHeight: e, scrollWidth: t, height: n, width: i }) => {
          const r = ce({ x: t, y: e }, { x: i, y: n });
          return { x: Math.max(0, r.x), y: Math.max(0, r.y) };
        },
        kn = () => {
          const e = document.documentElement;
          return e || ee(!1), e;
        },
        wn = () => {
          const e = kn();
          return xn({
            scrollHeight: e.scrollHeight,
            scrollWidth: e.scrollWidth,
            width: e.clientWidth,
            height: e.clientHeight,
          });
        },
        Sn = ({ critical: e, scrollOptions: t, registry: n }) => {
          Dt();
          const i = (() => {
              const e = cn(),
                t = wn(),
                n = e.y,
                i = e.x,
                r = kn(),
                a = i + r.clientWidth,
                o = n + r.clientHeight;
              return {
                frame: (0, M.l)({ top: n, left: i, right: a, bottom: o }),
                scroll: {
                  initial: e,
                  current: e,
                  max: t,
                  diff: { value: ue, displacement: ue },
                },
              };
            })(),
            r = i.scroll.current,
            a = e.droppable,
            o = n.droppable
              .getAllByType(a.type)
              .map((e) => e.callbacks.getDimensionAndWatchScroll(r, t)),
            s = n.draggable
              .getAllByType(e.draggable.type)
              .map((e) => e.getDimension(r)),
            u = { draggables: xe(s), droppables: _e(o) };
          Ot();
          return { dimensions: u, critical: e, viewport: i };
        };
      function Dn(e, t, n) {
        if (n.descriptor.id === t.id) return !1;
        if (n.descriptor.type !== t.type) return !1;
        return (
          "virtual" ===
          e.droppable.getById(n.descriptor.droppableId).descriptor.mode
        );
      }
      var On = (e, t) => {
          let n = null;
          const i = (function ({ registry: e, callbacks: t }) {
              let n = { additions: {}, removals: {}, modified: {} },
                i = null;
              const r = () => {
                i ||
                  (t.collectionStarting(),
                  (i = requestAnimationFrame(() => {
                    (i = null), Dt();
                    const { additions: r, removals: a, modified: o } = n,
                      s = Object.keys(r)
                        .map((t) => e.draggable.getById(t).getDimension(ue))
                        .sort(
                          (e, t) => e.descriptor.index - t.descriptor.index,
                        ),
                      u = Object.keys(o).map((t) => ({
                        droppableId: t,
                        scroll: e.droppable
                          .getById(t)
                          .callbacks.getScrollWhileDragging(),
                      })),
                      l = {
                        additions: s,
                        removals: Object.keys(a),
                        modified: u,
                      };
                    (n = { additions: {}, removals: {}, modified: {} }),
                      Ot(),
                      t.publish(l);
                  })));
              };
              return {
                add: (e) => {
                  const t = e.descriptor.id;
                  (n.additions[t] = e),
                    (n.modified[e.descriptor.droppableId] = !0),
                    n.removals[t] && delete n.removals[t],
                    r();
                },
                remove: (e) => {
                  const t = e.descriptor;
                  (n.removals[t.id] = !0),
                    (n.modified[t.droppableId] = !0),
                    n.additions[t.id] && delete n.additions[t.id],
                    r();
                },
                stop: () => {
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
              registry: e,
            }),
            r = (t) => {
              n || ee(!1);
              const r = n.critical.draggable;
              "ADDITION" === t.type && Dn(e, r, t.value) && i.add(t.value),
                "REMOVAL" === t.type && Dn(e, r, t.value) && i.remove(t.value);
            },
            a = {
              updateDroppableIsEnabled: (i, r) => {
                e.droppable.exists(i) || ee(!1),
                  n && t.updateDroppableIsEnabled({ id: i, isEnabled: r });
              },
              updateDroppableIsCombineEnabled: (i, r) => {
                n &&
                  (e.droppable.exists(i) || ee(!1),
                  t.updateDroppableIsCombineEnabled({
                    id: i,
                    isCombineEnabled: r,
                  }));
              },
              scrollDroppable: (t, i) => {
                n && e.droppable.getById(t).callbacks.scroll(i);
              },
              updateDroppableScroll: (i, r) => {
                n &&
                  (e.droppable.exists(i) || ee(!1),
                  t.updateDroppableScroll({ id: i, newScroll: r }));
              },
              startPublishing: (t) => {
                n && ee(!1);
                const i = e.draggable.getById(t.draggableId),
                  a = e.droppable.getById(i.descriptor.droppableId),
                  o = { draggable: i.descriptor, droppable: a.descriptor },
                  s = e.subscribe(r);
                return (
                  (n = { critical: o, unsubscribe: s }),
                  Sn({
                    critical: o,
                    registry: e,
                    scrollOptions: t.scrollOptions,
                  })
                );
              },
              stopPublishing: () => {
                if (!n) return;
                i.stop();
                const t = n.critical.droppable;
                e.droppable
                  .getAllByType(t.type)
                  .forEach((e) => e.callbacks.dragStopped()),
                  n.unsubscribe(),
                  (n = null);
              },
            };
          return a;
        },
        Un = (e, t) =>
          "IDLE" === e.phase ||
          ("DROP_ANIMATING" === e.phase &&
            e.completed.result.draggableId !== t &&
            "DROP" === e.completed.result.reason),
        Nn = (e) => {
          window.scrollBy(e.x, e.y);
        };
      const zn = F((e) => ke(e).filter((e) => !!e.isEnabled && !!e.frame));
      var En = ({ center: e, destination: t, droppables: n }) => {
        if (t) {
          const e = n[t];
          return e.frame ? e : null;
        }
        const i = ((e, t) => {
          const n =
            zn(t).find(
              (t) => (t.frame || ee(!1), ft(t.frame.pageMarginBox)(e)),
            ) || null;
          return n;
        })(e, n);
        return i;
      };
      const Pn = {
        startFromPercentage: 0.25,
        maxScrollAtPercentage: 0.05,
        maxPixelScroll: 28,
        ease: (e) => e ** 2,
        durationDampening: { stopDampeningAt: 1200, accelerateAt: 360 },
        disabled: !1,
      };
      var jn = ({ startOfRange: e, endOfRange: t, current: n }) => {
          const i = t - e;
          if (0 === i) return 0;
          return (n - e) / i;
        },
        An = ({
          distanceToEdge: e,
          thresholds: t,
          dragStartTime: n,
          shouldUseTimeDampening: i,
          getAutoScrollerOptions: r,
        }) => {
          const a = ((e, t, n = () => Pn) => {
            const i = n();
            if (e > t.startScrollingFrom) return 0;
            if (e <= t.maxScrollValueAt) return i.maxPixelScroll;
            if (e === t.startScrollingFrom) return 1;
            const r =
                1 -
                jn({
                  startOfRange: t.maxScrollValueAt,
                  endOfRange: t.startScrollingFrom,
                  current: e,
                }),
              a = i.maxPixelScroll * i.ease(r);
            return Math.ceil(a);
          })(e, t, r);
          return 0 === a
            ? 0
            : i
              ? Math.max(
                  ((e, t, n) => {
                    const i = n(),
                      r = i.durationDampening.accelerateAt,
                      a = i.durationDampening.stopDampeningAt,
                      o = t,
                      s = a,
                      u = Date.now() - o;
                    if (u >= a) return e;
                    if (u < r) return 1;
                    const l = jn({
                        startOfRange: r,
                        endOfRange: s,
                        current: u,
                      }),
                      c = e * i.ease(l);
                    return Math.ceil(c);
                  })(a, n, r),
                  1,
                )
              : a;
        },
        Tn = ({
          container: e,
          distanceToEdges: t,
          dragStartTime: n,
          axis: i,
          shouldUseTimeDampening: r,
          getAutoScrollerOptions: a,
        }) => {
          const o = ((e, t, n = () => Pn) => {
            const i = n();
            return {
              startScrollingFrom: e[t.size] * i.startFromPercentage,
              maxScrollValueAt: e[t.size] * i.maxScrollAtPercentage,
            };
          })(e, i, a);
          return t[i.end] < t[i.start]
            ? An({
                distanceToEdge: t[i.end],
                thresholds: o,
                dragStartTime: n,
                shouldUseTimeDampening: r,
                getAutoScrollerOptions: a,
              })
            : -1 *
                An({
                  distanceToEdge: t[i.start],
                  thresholds: o,
                  dragStartTime: n,
                  shouldUseTimeDampening: r,
                  getAutoScrollerOptions: a,
                });
        };
      const Cn = ve((e) => (0 === e ? 0 : e));
      var Rn = ({
        dragStartTime: e,
        container: t,
        subject: n,
        center: i,
        shouldUseTimeDampening: r,
        getAutoScrollerOptions: a,
      }) => {
        const o = {
            top: i.y - t.top,
            right: t.right - i.x,
            bottom: t.bottom - i.y,
            left: i.x - t.left,
          },
          s = Tn({
            container: t,
            distanceToEdges: o,
            dragStartTime: e,
            axis: Ce,
            shouldUseTimeDampening: r,
            getAutoScrollerOptions: a,
          }),
          u = Tn({
            container: t,
            distanceToEdges: o,
            dragStartTime: e,
            axis: Re,
            shouldUseTimeDampening: r,
            getAutoScrollerOptions: a,
          }),
          l = Cn({ x: u, y: s });
        if (de(l, ue)) return null;
        const c = (({ container: e, subject: t, proposedScroll: n }) => {
          const i = t.height > e.height,
            r = t.width > e.width;
          return r || i
            ? r && i
              ? null
              : { x: r ? 0 : n.x, y: i ? 0 : n.y }
            : n;
        })({ container: t, subject: n, proposedScroll: l });
        return c ? (de(c, ue) ? null : c) : null;
      };
      const Ln = ve((e) => (0 === e ? 0 : e > 0 ? 1 : -1)),
        Bn = (() => {
          const e = (e, t) => (e < 0 ? e : e > t ? e - t : 0);
          return ({ current: t, max: n, change: i }) => {
            const r = le(t, i),
              a = { x: e(r.x, n.x), y: e(r.y, n.y) };
            return de(a, ue) ? null : a;
          };
        })(),
        Gn = ({ max: e, current: t, change: n }) => {
          const i = { x: Math.max(t.x, e.x), y: Math.max(t.y, e.y) },
            r = Ln(n),
            a = Bn({ max: i, current: t, change: r });
          return !a || (0 !== r.x && 0 === a.x) || (0 !== r.y && 0 === a.y);
        },
        Mn = (e, t) =>
          Gn({ current: e.scroll.current, max: e.scroll.max, change: t }),
        Wn = (e, t) => {
          const n = e.frame;
          return (
            !!n &&
            Gn({ current: n.scroll.current, max: n.scroll.max, change: t })
          );
        };
      var Zn = ({
          state: e,
          dragStartTime: t,
          shouldUseTimeDampening: n,
          scrollWindow: i,
          scrollDroppable: r,
          getAutoScrollerOptions: a,
        }) => {
          const o = e.current.page.borderBoxCenter,
            s = e.dimensions.draggables[e.critical.draggable.id].page.marginBox;
          if (e.isWindowScrollAllowed) {
            const r = (({
              viewport: e,
              subject: t,
              center: n,
              dragStartTime: i,
              shouldUseTimeDampening: r,
              getAutoScrollerOptions: a,
            }) => {
              const o = Rn({
                dragStartTime: i,
                container: e.frame,
                subject: t,
                center: n,
                shouldUseTimeDampening: r,
                getAutoScrollerOptions: a,
              });
              return o && Mn(e, o) ? o : null;
            })({
              dragStartTime: t,
              viewport: e.viewport,
              subject: s,
              center: o,
              shouldUseTimeDampening: n,
              getAutoScrollerOptions: a,
            });
            if (r) return void i(r);
          }
          const u = En({
            center: o,
            destination: mt(e.impact),
            droppables: e.dimensions.droppables,
          });
          if (!u) return;
          const l = (({
            droppable: e,
            subject: t,
            center: n,
            dragStartTime: i,
            shouldUseTimeDampening: r,
            getAutoScrollerOptions: a,
          }) => {
            const o = e.frame;
            if (!o) return null;
            const s = Rn({
              dragStartTime: i,
              container: o.pageMarginBox,
              subject: t,
              center: n,
              shouldUseTimeDampening: r,
              getAutoScrollerOptions: a,
            });
            return s && Wn(e, s) ? s : null;
          })({
            dragStartTime: t,
            droppable: u,
            subject: s,
            center: o,
            shouldUseTimeDampening: n,
            getAutoScrollerOptions: a,
          });
          l && r(u.descriptor.id, l);
        },
        Jn = ({ move: e, scrollDroppable: t, scrollWindow: n }) => {
          const i = (e, n) => {
              if (!Wn(e, n)) return n;
              const i = ((e, t) => {
                const n = e.frame;
                return n && Wn(e, t)
                  ? Bn({
                      current: n.scroll.current,
                      max: n.scroll.max,
                      change: t,
                    })
                  : null;
              })(e, n);
              if (!i) return t(e.descriptor.id, n), null;
              const r = ce(n, i);
              t(e.descriptor.id, r);
              return ce(n, r);
            },
            r = (e, t, i) => {
              if (!e) return i;
              if (!Mn(t, i)) return i;
              const r = ((e, t) => {
                if (!Mn(e, t)) return null;
                const n = e.scroll.max,
                  i = e.scroll.current;
                return Bn({ current: i, max: n, change: t });
              })(t, i);
              if (!r) return n(i), null;
              const a = ce(i, r);
              n(a);
              return ce(i, a);
            };
          return (t) => {
            const n = t.scrollJumpRequest;
            if (!n) return;
            const a = mt(t.impact);
            a || ee(!1);
            const o = i(t.dimensions.droppables[a], n);
            if (!o) return;
            const s = t.viewport,
              u = r(t.isWindowScrollAllowed, s, o);
            u &&
              ((t, n) => {
                const i = le(t.current.client.selection, n);
                e({ client: i });
              })(t, u);
          };
        },
        Fn = ({
          scrollDroppable: e,
          scrollWindow: t,
          move: n,
          getAutoScrollerOptions: i,
        }) => {
          const r = (({
              scrollWindow: e,
              scrollDroppable: t,
              getAutoScrollerOptions: n = () => Pn,
            }) => {
              const i = (0, K.A)(e),
                r = (0, K.A)(t);
              let a = null;
              const o = (e) => {
                a || ee(!1);
                const { shouldUseTimeDampening: t, dragStartTime: o } = a;
                Zn({
                  state: e,
                  scrollWindow: i,
                  scrollDroppable: r,
                  dragStartTime: o,
                  shouldUseTimeDampening: t,
                  getAutoScrollerOptions: n,
                });
              };
              return {
                start: (e) => {
                  Dt(), a && ee(!1);
                  const t = Date.now();
                  let i = !1;
                  const r = () => {
                    i = !0;
                  };
                  Zn({
                    state: e,
                    dragStartTime: 0,
                    shouldUseTimeDampening: !1,
                    scrollWindow: r,
                    scrollDroppable: r,
                    getAutoScrollerOptions: n,
                  }),
                    (a = { dragStartTime: t, shouldUseTimeDampening: i }),
                    Ot(),
                    i && o(e);
                },
                stop: () => {
                  a && (i.cancel(), r.cancel(), (a = null));
                },
                scroll: o,
              };
            })({
              scrollWindow: t,
              scrollDroppable: e,
              getAutoScrollerOptions: i,
            }),
            a = Jn({ move: n, scrollWindow: t, scrollDroppable: e });
          return {
            scroll: (e) => {
              i().disabled ||
                "DRAGGING" !== e.phase ||
                ("FLUID" !== e.movementMode
                  ? e.scrollJumpRequest && a(e)
                  : r.scroll(e));
            },
            start: r.start,
            stop: r.stop,
          };
        };
      const Kn = "data-rfd",
        Vn = (() => {
          const e = `${Kn}-drag-handle`;
          return {
            base: e,
            draggableId: `${e}-draggable-id`,
            contextId: `${e}-context-id`,
          };
        })(),
        Hn = (() => {
          const e = `${Kn}-draggable`;
          return { base: e, contextId: `${e}-context-id`, id: `${e}-id` };
        })(),
        qn = (() => {
          const e = `${Kn}-droppable`;
          return { base: e, contextId: `${e}-context-id`, id: `${e}-id` };
        })(),
        Xn = { contextId: `${Kn}-scroll-container-context-id` },
        Yn = (e, t) =>
          e
            .map((e) => {
              const n = e.styles[t];
              return n ? `${e.selector} { ${n} }` : "";
            })
            .join(" ");
      var Qn = (e) => {
        const t = ((n = e), (e) => `[${e}="${n}"]`);
        var n;
        const i = (() => {
            const e =
              "\n      cursor: -webkit-grab;\n      cursor: grab;\n    ";
            return {
              selector: t(Vn.contextId),
              styles: {
                always:
                  "\n          -webkit-touch-callout: none;\n          -webkit-tap-highlight-color: rgba(0,0,0,0);\n          touch-action: manipulation;\n        ",
                resting: e,
                dragging: "pointer-events: none;",
                dropAnimating: e,
              },
            };
          })(),
          r = [
            (() => {
              const e = `\n      transition: ${tn.outOfTheWay};\n    `;
              return {
                selector: t(Hn.contextId),
                styles: { dragging: e, dropAnimating: e, userCancel: e },
              };
            })(),
            i,
            {
              selector: t(qn.contextId),
              styles: { always: "overflow-anchor: none;" },
            },
            {
              selector: "body",
              styles: {
                dragging:
                  "\n        cursor: grabbing;\n        cursor: -webkit-grabbing;\n        user-select: none;\n        -webkit-user-select: none;\n        -moz-user-select: none;\n        -ms-user-select: none;\n        overflow-anchor: none;\n      ",
              },
            },
          ];
        return {
          always: Yn(r, "always"),
          resting: Yn(r, "resting"),
          dragging: Yn(r, "dragging"),
          dropAnimating: Yn(r, "dropAnimating"),
          userCancel: Yn(r, "userCancel"),
        };
      };
      var ei =
        "undefined" != typeof window &&
        void 0 !== window.document &&
        void 0 !== window.document.createElement
          ? i.useLayoutEffect
          : i.useEffect;
      const ti = () => {
          const e = document.querySelector("head");
          return e || ee(!1), e;
        },
        ni = (e) => {
          const t = document.createElement("style");
          return e && t.setAttribute("nonce", e), (t.type = "text/css"), t;
        };
      function ii(e, t) {
        return Array.from(e.querySelectorAll(t));
      }
      var ri = (e) =>
        e && e.ownerDocument && e.ownerDocument.defaultView
          ? e.ownerDocument.defaultView
          : window;
      function ai(e) {
        return e instanceof ri(e).HTMLElement;
      }
      function oi(e, t) {
        const n = `[${Vn.contextId}="${e}"]`,
          i = ii(document, n);
        if (!i.length) return null;
        const r = i.find((e) => e.getAttribute(Vn.draggableId) === t);
        return r && ai(r) ? r : null;
      }
      function si() {
        const e = { draggables: {}, droppables: {} },
          t = [];
        function n(e) {
          t.length && t.forEach((t) => t(e));
        }
        function i(t) {
          return e.draggables[t] || null;
        }
        function r(t) {
          return e.droppables[t] || null;
        }
        return {
          draggable: {
            register: (t) => {
              (e.draggables[t.descriptor.id] = t),
                n({ type: "ADDITION", value: t });
            },
            update: (t, n) => {
              const i = e.draggables[n.descriptor.id];
              i &&
                i.uniqueId === t.uniqueId &&
                (delete e.draggables[n.descriptor.id],
                (e.draggables[t.descriptor.id] = t));
            },
            unregister: (t) => {
              const r = t.descriptor.id,
                a = i(r);
              a &&
                t.uniqueId === a.uniqueId &&
                (delete e.draggables[r],
                e.droppables[t.descriptor.droppableId] &&
                  n({ type: "REMOVAL", value: t }));
            },
            getById: function (e) {
              const t = i(e);
              return t || ee(!1), t;
            },
            findById: i,
            exists: (e) => Boolean(i(e)),
            getAllByType: (t) =>
              Object.values(e.draggables).filter(
                (e) => e.descriptor.type === t,
              ),
          },
          droppable: {
            register: (t) => {
              e.droppables[t.descriptor.id] = t;
            },
            unregister: (t) => {
              const n = r(t.descriptor.id);
              n &&
                t.uniqueId === n.uniqueId &&
                delete e.droppables[t.descriptor.id];
            },
            getById: function (e) {
              const t = r(e);
              return t || ee(!1), t;
            },
            findById: r,
            exists: (e) => Boolean(r(e)),
            getAllByType: (t) =>
              Object.values(e.droppables).filter(
                (e) => e.descriptor.type === t,
              ),
          },
          subscribe: function (e) {
            return (
              t.push(e),
              function () {
                const n = t.indexOf(e);
                -1 !== n && t.splice(n, 1);
              }
            );
          },
          clean: function () {
            (e.draggables = {}), (e.droppables = {}), (t.length = 0);
          },
        };
      }
      var ui = i.createContext(null),
        li = () => {
          const e = document.body;
          return e || ee(!1), e;
        };
      var ci = {
        position: "absolute",
        width: "1px",
        height: "1px",
        margin: "-1px",
        border: "0",
        padding: "0",
        overflow: "hidden",
        clip: "rect(0 0 0 0)",
        "clip-path": "inset(100%)",
      };
      const di = (e) => `rfd-announcement-${e}`;
      const mi = { separator: "::" };
      var pi = function (e, t = mi) {
        const n = i.useId();
        return (0, G.Kr)(() => `${e}${t.separator}${n}`, [t.separator, e, n]);
      };
      var gi = i.createContext(null);
      function fi(e) {
        0;
      }
      function vi(e, t) {
        fi();
      }
      function hi(e) {
        const t = (0, i.useRef)(e);
        return (
          (0, i.useEffect)(() => {
            t.current = e;
          }),
          t
        );
      }
      function bi(e) {
        return (
          "IDLE" !== e.phase && "DROP_ANIMATING" !== e.phase && e.isDragging
        );
      }
      const $i = 9,
        yi = 13,
        Ii = 33,
        _i = 34,
        xi = 35,
        ki = 36,
        wi = { [yi]: !0, [$i]: !0 };
      var Si = (e) => {
        wi[e.keyCode] && e.preventDefault();
      };
      var Di = (() => {
        const e = "visibilitychange";
        if ("undefined" == typeof document) return e;
        return (
          [e, `ms${e}`, `webkit${e}`, `moz${e}`, `o${e}`].find(
            (e) => `on${e}` in document,
          ) || e
        );
      })();
      const Oi = { type: "IDLE" };
      function Ui({ cancel: e, completed: t, getPhase: n, setPhase: i }) {
        return [
          {
            eventName: "mousemove",
            fn: (e) => {
              const { button: t, clientX: r, clientY: a } = e;
              if (0 !== t) return;
              const o = { x: r, y: a },
                s = n();
              if ("DRAGGING" === s.type)
                return e.preventDefault(), void s.actions.move(o);
              "PENDING" !== s.type && ee(!1);
              const u = s.point;
              if (
                ((l = u),
                (c = o),
                !(Math.abs(c.x - l.x) >= 5 || Math.abs(c.y - l.y) >= 5))
              )
                return;
              var l, c;
              e.preventDefault();
              const d = s.actions.fluidLift(o);
              i({ type: "DRAGGING", actions: d });
            },
          },
          {
            eventName: "mouseup",
            fn: (i) => {
              const r = n();
              "DRAGGING" === r.type
                ? (i.preventDefault(),
                  r.actions.drop({ shouldBlockNextClick: !0 }),
                  t())
                : e();
            },
          },
          {
            eventName: "mousedown",
            fn: (t) => {
              "DRAGGING" === n().type && t.preventDefault(), e();
            },
          },
          {
            eventName: "keydown",
            fn: (t) => {
              if ("PENDING" !== n().type)
                return 27 === t.keyCode
                  ? (t.preventDefault(), void e())
                  : void Si(t);
              e();
            },
          },
          { eventName: "resize", fn: e },
          {
            eventName: "scroll",
            options: { passive: !0, capture: !1 },
            fn: () => {
              "PENDING" === n().type && e();
            },
          },
          {
            eventName: "webkitmouseforcedown",
            fn: (t) => {
              const i = n();
              "IDLE" === i.type && ee(!1),
                i.actions.shouldRespectForcePress() ? e() : t.preventDefault();
            },
          },
          { eventName: Di, fn: e },
        ];
      }
      function Ni() {}
      const zi = { [_i]: !0, [Ii]: !0, [ki]: !0, [xi]: !0 };
      function Ei(e, t) {
        function n() {
          t(), e.cancel();
        }
        return [
          {
            eventName: "keydown",
            fn: (i) =>
              27 === i.keyCode
                ? (i.preventDefault(), void n())
                : 32 === i.keyCode
                  ? (i.preventDefault(), t(), void e.drop())
                  : 40 === i.keyCode
                    ? (i.preventDefault(), void e.moveDown())
                    : 38 === i.keyCode
                      ? (i.preventDefault(), void e.moveUp())
                      : 39 === i.keyCode
                        ? (i.preventDefault(), void e.moveRight())
                        : 37 === i.keyCode
                          ? (i.preventDefault(), void e.moveLeft())
                          : void (zi[i.keyCode] ? i.preventDefault() : Si(i)),
          },
          { eventName: "mousedown", fn: n },
          { eventName: "mouseup", fn: n },
          { eventName: "click", fn: n },
          { eventName: "touchstart", fn: n },
          { eventName: "resize", fn: n },
          { eventName: "wheel", fn: n, options: { passive: !0 } },
          { eventName: Di, fn: n },
        ];
      }
      const Pi = { type: "IDLE" };
      const ji = [
        "input",
        "button",
        "textarea",
        "select",
        "option",
        "optgroup",
        "video",
        "audio",
      ];
      function Ai(e, t) {
        if (null == t) return !1;
        if (ji.includes(t.tagName.toLowerCase())) return !0;
        const n = t.getAttribute("contenteditable");
        return "true" === n || "" === n || (t !== e && Ai(e, t.parentElement));
      }
      function Ti(e, t) {
        const n = t.target;
        return !!ai(n) && Ai(e, n);
      }
      var Ci = (e) => (0, M.l)(e.getBoundingClientRect()).center;
      const Ri = (() => {
        const e = "matches";
        if ("undefined" == typeof document) return e;
        return (
          [e, "msMatchesSelector", "webkitMatchesSelector"].find(
            (e) => e in Element.prototype,
          ) || e
        );
      })();
      function Li(e, t) {
        return null == e ? null : e[Ri](t) ? e : Li(e.parentElement, t);
      }
      function Bi(e, t) {
        return e.closest ? e.closest(t) : Li(e, t);
      }
      function Gi(e, t) {
        const n = t.target;
        if (!((i = n) instanceof ri(i).Element)) return null;
        var i;
        const r = (function (e) {
            return `[${Vn.contextId}="${e}"]`;
          })(e),
          a = Bi(n, r);
        return a && ai(a) ? a : null;
      }
      function Mi(e) {
        e.preventDefault();
      }
      function Wi({ expected: e, phase: t, isLockActive: n, shouldWarn: i }) {
        return !!n() && e === t;
      }
      function Zi({ lockAPI: e, store: t, registry: n, draggableId: i }) {
        if (e.isClaimed()) return !1;
        const r = n.draggable.findById(i);
        return !!r && !!r.options.isEnabled && !!Un(t.getState(), i);
      }
      function Ji({
        lockAPI: e,
        contextId: t,
        store: n,
        registry: i,
        draggableId: r,
        forceSensorStop: a,
        sourceEvent: o,
      }) {
        if (!Zi({ lockAPI: e, store: n, registry: i, draggableId: r }))
          return null;
        const s = i.draggable.getById(r),
          u = (function (e, t) {
            const n = `[${Hn.contextId}="${e}"]`,
              i = ii(document, n).find((e) => e.getAttribute(Hn.id) === t);
            return i && ai(i) ? i : null;
          })(t, s.descriptor.id);
        if (!u) return null;
        if (o && !s.options.canDragInteractiveElements && Ti(u, o)) return null;
        const l = e.claim(a || H);
        let c = "PRE_DRAG";
        function d() {
          return s.options.shouldRespectForcePress;
        }
        function m() {
          return e.isActive(l);
        }
        const p = function (e, t) {
          Wi({ expected: e, phase: c, isLockActive: m, shouldWarn: !0 }) &&
            n.dispatch(t());
        }.bind(null, "DRAGGING");
        function g(t) {
          function i() {
            e.release(), (c = "COMPLETED");
          }
          function r(e, r = { shouldBlockNextClick: !1 }) {
            if ((t.cleanup(), r.shouldBlockNextClick)) {
              const e = q(window, [
                {
                  eventName: "click",
                  fn: Mi,
                  options: { once: !0, passive: !1, capture: !0 },
                },
              ]);
              setTimeout(e);
            }
            i(), n.dispatch(Vt({ reason: e }));
          }
          return (
            "PRE_DRAG" !== c && (i(), ee(!1)),
            n.dispatch(At(t.liftActionArgs)),
            (c = "DRAGGING"),
            {
              isActive: () =>
                Wi({
                  expected: "DRAGGING",
                  phase: c,
                  isLockActive: m,
                  shouldWarn: !1,
                }),
              shouldRespectForcePress: d,
              drop: (e) => r("DROP", e),
              cancel: (e) => r("CANCEL", e),
              ...t.actions,
            }
          );
        }
        return {
          isActive: () =>
            Wi({
              expected: "PRE_DRAG",
              phase: c,
              isLockActive: m,
              shouldWarn: !1,
            }),
          shouldRespectForcePress: d,
          fluidLift: function (e) {
            const t = (0, K.A)((e) => {
              p(() => Gt({ client: e }));
            });
            return {
              ...g({
                liftActionArgs: {
                  id: r,
                  clientSelection: e,
                  movementMode: "FLUID",
                },
                cleanup: () => t.cancel(),
                actions: { move: t },
              }),
              move: t,
            };
          },
          snapLift: function () {
            const e = {
              moveUp: () => p(Mt),
              moveRight: () => p(Zt),
              moveDown: () => p(Wt),
              moveLeft: () => p(Jt),
            };
            return g({
              liftActionArgs: {
                id: r,
                clientSelection: Ci(u),
                movementMode: "SNAP",
              },
              cleanup: H,
              actions: e,
            });
          },
          abort: function () {
            Wi({
              expected: "PRE_DRAG",
              phase: c,
              isLockActive: m,
              shouldWarn: !0,
            }) && e.release();
          },
        };
      }
      const Fi = [
        function (e) {
          const t = (0, i.useRef)(Oi),
            n = (0, i.useRef)(H),
            r = (0, G.Kr)(
              () => ({
                eventName: "mousedown",
                fn: function (t) {
                  if (t.defaultPrevented) return;
                  if (0 !== t.button) return;
                  if (t.ctrlKey || t.metaKey || t.shiftKey || t.altKey) return;
                  const i = e.findClosestDraggableId(t);
                  if (!i) return;
                  const r = e.tryGetLock(i, s, { sourceEvent: t });
                  if (!r) return;
                  t.preventDefault();
                  const a = { x: t.clientX, y: t.clientY };
                  n.current(), c(r, a);
                },
              }),
              [e],
            ),
            a = (0, G.Kr)(
              () => ({
                eventName: "webkitmouseforcewillbegin",
                fn: (t) => {
                  if (t.defaultPrevented) return;
                  const n = e.findClosestDraggableId(t);
                  if (!n) return;
                  const i = e.findOptionsForDraggable(n);
                  i &&
                    (i.shouldRespectForcePress ||
                      (e.canGetLock(n) && t.preventDefault()));
                },
              }),
              [e],
            ),
            o = (0, G.hb)(
              function () {
                n.current = q(window, [a, r], { passive: !1, capture: !0 });
              },
              [a, r],
            ),
            s = (0, G.hb)(() => {
              "IDLE" !== t.current.type && ((t.current = Oi), n.current(), o());
            }, [o]),
            u = (0, G.hb)(() => {
              const e = t.current;
              s(),
                "DRAGGING" === e.type &&
                  e.actions.cancel({ shouldBlockNextClick: !0 }),
                "PENDING" === e.type && e.actions.abort();
            }, [s]),
            l = (0, G.hb)(
              function () {
                const e = Ui({
                  cancel: u,
                  completed: s,
                  getPhase: () => t.current,
                  setPhase: (e) => {
                    t.current = e;
                  },
                });
                n.current = q(window, e, { capture: !0, passive: !1 });
              },
              [u, s],
            ),
            c = (0, G.hb)(
              function (e, n) {
                "IDLE" !== t.current.type && ee(!1),
                  (t.current = { type: "PENDING", point: n, actions: e }),
                  l();
              },
              [l],
            );
          ei(
            function () {
              return (
                o(),
                function () {
                  n.current();
                }
              );
            },
            [o],
          );
        },
        function (e) {
          const t = (0, i.useRef)(Ni),
            n = (0, G.Kr)(
              () => ({
                eventName: "keydown",
                fn: function (n) {
                  if (n.defaultPrevented) return;
                  if (32 !== n.keyCode) return;
                  const i = e.findClosestDraggableId(n);
                  if (!i) return;
                  const a = e.tryGetLock(i, u, { sourceEvent: n });
                  if (!a) return;
                  n.preventDefault();
                  let o = !0;
                  const s = a.snapLift();
                  function u() {
                    o || ee(!1), (o = !1), t.current(), r();
                  }
                  t.current(),
                    (t.current = q(window, Ei(s, u), {
                      capture: !0,
                      passive: !1,
                    }));
                },
              }),
              [e],
            ),
            r = (0, G.hb)(
              function () {
                t.current = q(window, [n], { passive: !1, capture: !0 });
              },
              [n],
            );
          ei(
            function () {
              return (
                r(),
                function () {
                  t.current();
                }
              );
            },
            [r],
          );
        },
        function (e) {
          const t = (0, i.useRef)(Pi),
            n = (0, i.useRef)(H),
            r = (0, G.hb)(function () {
              return t.current;
            }, []),
            a = (0, G.hb)(function (e) {
              t.current = e;
            }, []),
            o = (0, G.Kr)(
              () => ({
                eventName: "touchstart",
                fn: function (t) {
                  if (t.defaultPrevented) return;
                  const i = e.findClosestDraggableId(t);
                  if (!i) return;
                  const r = e.tryGetLock(i, u, { sourceEvent: t });
                  if (!r) return;
                  const a = t.touches[0],
                    { clientX: o, clientY: s } = a,
                    l = { x: o, y: s };
                  n.current(), m(r, l);
                },
              }),
              [e],
            ),
            s = (0, G.hb)(
              function () {
                n.current = q(window, [o], { capture: !0, passive: !1 });
              },
              [o],
            ),
            u = (0, G.hb)(() => {
              const e = t.current;
              "IDLE" !== e.type &&
                ("PENDING" === e.type && clearTimeout(e.longPressTimerId),
                a(Pi),
                n.current(),
                s());
            }, [s, a]),
            l = (0, G.hb)(() => {
              const e = t.current;
              u(),
                "DRAGGING" === e.type &&
                  e.actions.cancel({ shouldBlockNextClick: !0 }),
                "PENDING" === e.type && e.actions.abort();
            }, [u]),
            c = (0, G.hb)(
              function () {
                const e = { capture: !0, passive: !1 },
                  t = { cancel: l, completed: u, getPhase: r },
                  i = q(
                    window,
                    (function ({ cancel: e, completed: t, getPhase: n }) {
                      return [
                        {
                          eventName: "touchmove",
                          options: { capture: !1 },
                          fn: (t) => {
                            const i = n();
                            if ("DRAGGING" !== i.type) return void e();
                            i.hasMoved = !0;
                            const { clientX: r, clientY: a } = t.touches[0],
                              o = { x: r, y: a };
                            t.preventDefault(), i.actions.move(o);
                          },
                        },
                        {
                          eventName: "touchend",
                          fn: (i) => {
                            const r = n();
                            "DRAGGING" === r.type
                              ? (i.preventDefault(),
                                r.actions.drop({ shouldBlockNextClick: !0 }),
                                t())
                              : e();
                          },
                        },
                        {
                          eventName: "touchcancel",
                          fn: (t) => {
                            "DRAGGING" === n().type
                              ? (t.preventDefault(), e())
                              : e();
                          },
                        },
                        {
                          eventName: "touchforcechange",
                          fn: (t) => {
                            const i = n();
                            "IDLE" === i.type && ee(!1);
                            const r = t.touches[0];
                            if (!r) return;
                            if (!(r.force >= 0.15)) return;
                            const a = i.actions.shouldRespectForcePress();
                            if ("PENDING" !== i.type)
                              return a
                                ? i.hasMoved
                                  ? void t.preventDefault()
                                  : void e()
                                : void t.preventDefault();
                            a && e();
                          },
                        },
                        { eventName: Di, fn: e },
                      ];
                    })(t),
                    e,
                  ),
                  a = q(
                    window,
                    (function ({ cancel: e, getPhase: t }) {
                      return [
                        { eventName: "orientationchange", fn: e },
                        { eventName: "resize", fn: e },
                        {
                          eventName: "contextmenu",
                          fn: (e) => {
                            e.preventDefault();
                          },
                        },
                        {
                          eventName: "keydown",
                          fn: (n) => {
                            "DRAGGING" === t().type
                              ? (27 === n.keyCode && n.preventDefault(), e())
                              : e();
                          },
                        },
                        { eventName: Di, fn: e },
                      ];
                    })(t),
                    e,
                  );
                n.current = function () {
                  i(), a();
                };
              },
              [l, r, u],
            ),
            d = (0, G.hb)(
              function () {
                const e = r();
                "PENDING" !== e.type && ee(!1);
                const t = e.actions.fluidLift(e.point);
                a({ type: "DRAGGING", actions: t, hasMoved: !1 });
              },
              [r, a],
            ),
            m = (0, G.hb)(
              function (e, t) {
                "IDLE" !== r().type && ee(!1);
                const n = setTimeout(d, 120);
                a({
                  type: "PENDING",
                  point: t,
                  actions: e,
                  longPressTimerId: n,
                }),
                  c();
              },
              [c, r, a, d],
            );
          ei(
            function () {
              return (
                s(),
                function () {
                  n.current();
                  const e = r();
                  "PENDING" === e.type &&
                    (clearTimeout(e.longPressTimerId), a(Pi));
                }
              );
            },
            [r, s, a],
          ),
            ei(function () {
              return q(window, [
                {
                  eventName: "touchmove",
                  fn: () => {},
                  options: { capture: !1, passive: !1 },
                },
              ]);
            }, []);
        },
      ];
      function Ki({
        contextId: e,
        store: t,
        registry: n,
        customSensors: r,
        enableDefaultSensors: a,
      }) {
        const o = [...(a ? Fi : []), ...(r || [])],
          s = (0, i.useState)(() =>
            (function () {
              let e = null;
              function t() {
                e || ee(!1), (e = null);
              }
              return {
                isClaimed: function () {
                  return Boolean(e);
                },
                isActive: function (t) {
                  return t === e;
                },
                claim: function (t) {
                  e && ee(!1);
                  const n = { abandon: t };
                  return (e = n), n;
                },
                release: t,
                tryAbandon: function () {
                  e && (e.abandon(), t());
                },
              };
            })(),
          )[0],
          u = (0, G.hb)(
            function (e, t) {
              bi(e) && !bi(t) && s.tryAbandon();
            },
            [s],
          );
        ei(
          function () {
            let e = t.getState();
            return t.subscribe(() => {
              const n = t.getState();
              u(e, n), (e = n);
            });
          },
          [s, t, u],
        ),
          ei(() => s.tryAbandon, [s.tryAbandon]);
        const l = (0, G.hb)(
            (e) => Zi({ lockAPI: s, registry: n, store: t, draggableId: e }),
            [s, n, t],
          ),
          c = (0, G.hb)(
            (i, r, a) =>
              Ji({
                lockAPI: s,
                registry: n,
                contextId: e,
                store: t,
                draggableId: i,
                forceSensorStop: r || null,
                sourceEvent: a && a.sourceEvent ? a.sourceEvent : null,
              }),
            [e, s, n, t],
          ),
          d = (0, G.hb)(
            (t) =>
              (function (e, t) {
                const n = Gi(e, t);
                return n ? n.getAttribute(Vn.draggableId) : null;
              })(e, t),
            [e],
          ),
          m = (0, G.hb)(
            (e) => {
              const t = n.draggable.findById(e);
              return t ? t.options : null;
            },
            [n.draggable],
          ),
          p = (0, G.hb)(
            function () {
              s.isClaimed() &&
                (s.tryAbandon(),
                "IDLE" !== t.getState().phase && t.dispatch(Ft()));
            },
            [s, t],
          ),
          g = (0, G.hb)(() => s.isClaimed(), [s]),
          f = (0, G.Kr)(
            () => ({
              canGetLock: l,
              tryGetLock: c,
              findClosestDraggableId: d,
              findOptionsForDraggable: m,
              tryReleaseLock: p,
              isLockClaimed: g,
            }),
            [l, c, d, m, p, g],
          );
        fi();
        for (let e = 0; e < o.length; e++) o[e](f);
      }
      const Vi = (e) => ({
          onBeforeCapture: (t) => {
            const n = () => {
              e.onBeforeCapture && e.onBeforeCapture(t);
            };
            i.version.startsWith("16") || i.version.startsWith("17")
              ? n()
              : (0, r.flushSync)(n);
          },
          onBeforeDragStart: e.onBeforeDragStart,
          onDragStart: e.onDragStart,
          onDragEnd: e.onDragEnd,
          onDragUpdate: e.onDragUpdate,
        }),
        Hi = (e) => ({
          ...Pn,
          ...e.autoScrollerOptions,
          durationDampening: {
            ...Pn.durationDampening,
            ...e.autoScrollerOptions,
          },
        });
      function qi(e) {
        return e.current || ee(!1), e.current;
      }
      function Xi(e) {
        const {
            contextId: t,
            setCallbacks: n,
            sensors: r,
            nonce: o,
            dragHandleUsageInstructions: s,
          } = e,
          u = (0, i.useRef)(null);
        vi();
        const l = hi(e),
          c = (0, G.hb)(() => Vi(l.current), [l]),
          d = (0, G.hb)(() => Hi(l.current), [l]),
          m = (function (e) {
            const t = (0, G.Kr)(() => di(e), [e]),
              n = (0, i.useRef)(null);
            return (
              (0, i.useEffect)(
                function () {
                  const e = document.createElement("div");
                  return (
                    (n.current = e),
                    (e.id = t),
                    e.setAttribute("aria-live", "assertive"),
                    e.setAttribute("aria-atomic", "true"),
                    (0, f.A)(e.style, ci),
                    li().appendChild(e),
                    function () {
                      setTimeout(function () {
                        const t = li();
                        t.contains(e) && t.removeChild(e),
                          e === n.current && (n.current = null);
                      });
                    }
                  );
                },
                [t],
              ),
              (0, G.hb)((e) => {
                const t = n.current;
                t && (t.textContent = e);
              }, [])
            );
          })(t),
          p = (function ({ contextId: e, text: t }) {
            const n = pi("hidden-text", { separator: "-" }),
              r = (0, G.Kr)(
                () =>
                  (function ({ contextId: e, uniqueId: t }) {
                    return `rfd-hidden-text-${e}-${t}`;
                  })({ contextId: e, uniqueId: n }),
                [n, e],
              );
            return (
              (0, i.useEffect)(
                function () {
                  const e = document.createElement("div");
                  return (
                    (e.id = r),
                    (e.textContent = t),
                    (e.style.display = "none"),
                    li().appendChild(e),
                    function () {
                      const t = li();
                      t.contains(e) && t.removeChild(e);
                    }
                  );
                },
                [r, t],
              ),
              r
            );
          })({ contextId: t, text: s }),
          g = (function (e, t) {
            const n = (0, G.Kr)(() => Qn(e), [e]),
              r = (0, i.useRef)(null),
              a = (0, i.useRef)(null),
              o = (0, G.hb)(
                F((e) => {
                  const t = a.current;
                  t || ee(!1), (t.textContent = e);
                }),
                [],
              ),
              s = (0, G.hb)((e) => {
                const t = r.current;
                t || ee(!1), (t.textContent = e);
              }, []);
            ei(() => {
              (r.current || a.current) && ee(!1);
              const i = ni(t),
                u = ni(t);
              return (
                (r.current = i),
                (a.current = u),
                i.setAttribute(`${Kn}-always`, e),
                u.setAttribute(`${Kn}-dynamic`, e),
                ti().appendChild(i),
                ti().appendChild(u),
                s(n.always),
                o(n.resting),
                () => {
                  const e = (e) => {
                    const t = e.current;
                    t || ee(!1), ti().removeChild(t), (e.current = null);
                  };
                  e(r), e(a);
                }
              );
            }, [t, s, o, n.always, n.resting, e]);
            const u = (0, G.hb)(() => o(n.dragging), [o, n.dragging]),
              l = (0, G.hb)(
                (e) => {
                  o("DROP" !== e ? n.userCancel : n.dropAnimating);
                },
                [o, n.dropAnimating, n.userCancel],
              ),
              c = (0, G.hb)(() => {
                a.current && o(n.resting);
              }, [o, n.resting]);
            return (0, G.Kr)(
              () => ({ dragging: u, dropping: l, resting: c }),
              [u, l, c],
            );
          })(t, o),
          v = (0, G.hb)((e) => {
            qi(u).dispatch(e);
          }, []),
          h = (0, G.Kr)(
            () =>
              (0, a.zH)(
                {
                  publishWhileDragging: Tt,
                  updateDroppableScroll: Rt,
                  updateDroppableIsEnabled: Lt,
                  updateDroppableIsCombineEnabled: Bt,
                  collectionStarting: Ct,
                },
                v,
              ),
            [v],
          ),
          b = (function () {
            const e = (0, G.Kr)(si, []);
            return (
              (0, i.useEffect)(
                () =>
                  function () {
                    i.version.startsWith("16") || i.version.startsWith("17")
                      ? requestAnimationFrame(e.clean)
                      : e.clean();
                  },
                [e],
              ),
              e
            );
          })(),
          $ = (0, G.Kr)(() => On(b, h), [b, h]),
          y = (0, G.Kr)(
            () =>
              Fn({
                scrollWindow: Nn,
                scrollDroppable: $.scrollDroppable,
                getAutoScrollerOptions: d,
                ...(0, a.zH)({ move: Gt }, v),
              }),
            [$.scrollDroppable, v, d],
          ),
          I = (function (e) {
            const t = (0, i.useRef)({}),
              n = (0, i.useRef)(null),
              r = (0, i.useRef)(null),
              a = (0, i.useRef)(!1),
              o = (0, G.hb)(function (e, n) {
                const i = { id: e, focus: n };
                return (
                  (t.current[e] = i),
                  function () {
                    const n = t.current;
                    n[e] !== i && delete n[e];
                  }
                );
              }, []),
              s = (0, G.hb)(
                function (t) {
                  const n = oi(e, t);
                  n && n !== document.activeElement && n.focus();
                },
                [e],
              ),
              u = (0, G.hb)(function (e, t) {
                n.current === e && (n.current = t);
              }, []),
              l = (0, G.hb)(
                function () {
                  r.current ||
                    (a.current &&
                      (r.current = requestAnimationFrame(() => {
                        r.current = null;
                        const e = n.current;
                        e && s(e);
                      })));
                },
                [s],
              ),
              c = (0, G.hb)(function (e) {
                n.current = null;
                const t = document.activeElement;
                t && t.getAttribute(Vn.draggableId) === e && (n.current = e);
              }, []);
            return (
              ei(
                () => (
                  (a.current = !0),
                  function () {
                    a.current = !1;
                    const e = r.current;
                    e && cancelAnimationFrame(e);
                  }
                ),
                [],
              ),
              (0, G.Kr)(
                () => ({
                  register: o,
                  tryRecordFocus: c,
                  tryRestoreFocusRecorded: l,
                  tryShiftRecord: u,
                }),
                [o, c, l, u],
              )
            );
          })(t),
          _ = (0, G.Kr)(
            () =>
              _n({
                announce: m,
                autoScroller: y,
                dimensionMarshal: $,
                focusMarshal: I,
                getResponders: c,
                styleMarshal: g,
              }),
            [m, y, $, I, c, g],
          );
        u.current = _;
        const x = (0, G.hb)(() => {
            const e = qi(u);
            "IDLE" !== e.getState().phase && e.dispatch(Ft());
          }, []),
          k = (0, G.hb)(() => {
            const e = qi(u).getState();
            return (
              "DROP_ANIMATING" === e.phase ||
              ("IDLE" !== e.phase && e.isDragging)
            );
          }, []);
        n((0, G.Kr)(() => ({ isDragging: k, tryAbort: x }), [k, x]));
        const w = (0, G.hb)((e) => Un(qi(u).getState(), e), []),
          S = (0, G.hb)(() => gt(qi(u).getState()), []),
          D = (0, G.Kr)(
            () => ({
              marshal: $,
              focus: I,
              contextId: t,
              canLift: w,
              isMovementAllowed: S,
              dragHandleUsageInstructionsId: p,
              registry: b,
            }),
            [t, $, p, I, w, S, b],
          );
        return (
          Ki({
            contextId: t,
            store: _,
            registry: b,
            customSensors: r || null,
            enableDefaultSensors: !1 !== e.enableDefaultSensors,
          }),
          (0, i.useEffect)(() => x, [x]),
          i.createElement(
            gi.Provider,
            { value: D },
            i.createElement(R, { context: ui, store: _ }, e.children),
          )
        );
      }
      var Yi = function () {
        return i.useId();
      };
      function Qi(e) {
        const t = Yi(),
          n = e.dragHandleUsageInstructions || se.dragHandleUsageInstructions;
        return i.createElement(te, null, (r) =>
          i.createElement(
            Xi,
            {
              nonce: e.nonce,
              contextId: t,
              setCallbacks: r,
              dragHandleUsageInstructions: n,
              enableDefaultSensors: e.enableDefaultSensors,
              sensors: e.sensors,
              onBeforeCapture: e.onBeforeCapture,
              onBeforeDragStart: e.onBeforeDragStart,
              onDragStart: e.onDragStart,
              onDragUpdate: e.onDragUpdate,
              onDragEnd: e.onDragEnd,
              autoScrollerOptions: e.autoScrollerOptions,
            },
            e.children,
          ),
        );
      }
      const er = 5e3,
        tr = 4500,
        nr = (e, t) => (t ? tn.drop(t.duration) : e ? tn.snap : tn.fluid),
        ir = (e, t) => {
          if (e) return t ? Xt.drop : Xt.combining;
        };
      function rr(e) {
        return "DRAGGING" === e.type
          ? (function (e) {
              const t = e.dimension.client,
                { offset: n, combineWith: i, dropping: r } = e,
                a = Boolean(i),
                o = ((e) =>
                  null != e.forceShouldAnimate
                    ? e.forceShouldAnimate
                    : "SNAP" === e.mode)(e),
                s = Boolean(r),
                u = s ? an(n, a) : rn(n);
              return {
                position: "fixed",
                top: t.marginBox.top,
                left: t.marginBox.left,
                boxSizing: "border-box",
                width: t.borderBox.width,
                height: t.borderBox.height,
                transition: nr(o, r),
                transform: u,
                opacity: ir(a, s),
                zIndex: s ? tr : er,
                pointerEvents: "none",
              };
            })(e)
          : {
              transform: rn((t = e).offset),
              transition: t.shouldAnimateDisplacement ? void 0 : "none",
            };
        var t;
      }
      function ar(e) {
        const t = pi("draggable"),
          {
            descriptor: n,
            registry: r,
            getDraggableRef: a,
            canDragInteractiveElements: o,
            shouldRespectForcePress: s,
            isEnabled: u,
          } = e,
          l = (0, G.Kr)(
            () => ({
              canDragInteractiveElements: o,
              shouldRespectForcePress: s,
              isEnabled: u,
            }),
            [o, u, s],
          ),
          c = (0, G.hb)(
            (e) => {
              const t = a();
              return (
                t || ee(!1),
                (function (e, t, n = ue) {
                  const i = window.getComputedStyle(t),
                    r = t.getBoundingClientRect(),
                    a = (0, M.a)(r, i),
                    o = (0, M.SQ)(a, n);
                  return {
                    descriptor: e,
                    placeholder: {
                      client: a,
                      tagName: t.tagName.toLowerCase(),
                      display: i.display,
                    },
                    displaceBy: { x: a.marginBox.width, y: a.marginBox.height },
                    client: a,
                    page: o,
                  };
                })(n, t, e)
              );
            },
            [n, a],
          ),
          d = (0, G.Kr)(
            () => ({ uniqueId: t, descriptor: n, options: l, getDimension: c }),
            [n, c, l, t],
          ),
          m = (0, i.useRef)(d),
          p = (0, i.useRef)(!0);
        ei(
          () => (
            r.draggable.register(m.current),
            () => r.draggable.unregister(m.current)
          ),
          [r.draggable],
        ),
          ei(() => {
            if (p.current) return void (p.current = !1);
            const e = m.current;
            (m.current = d), r.draggable.update(d, e);
          }, [d, r.draggable]);
      }
      var or = i.createContext(null);
      function sr(e) {
        const t = (0, i.useContext)(e);
        return t || ee(!1), t;
      }
      function ur(e) {
        e.preventDefault();
      }
      var lr = (e) => {
          const t = (0, i.useRef)(null),
            n = (0, G.hb)((e = null) => {
              t.current = e;
            }, []),
            a = (0, G.hb)(() => t.current, []),
            {
              contextId: o,
              dragHandleUsageInstructionsId: s,
              registry: u,
            } = sr(gi),
            { type: l, droppableId: c } = sr(or),
            d = (0, G.Kr)(
              () => ({
                id: e.draggableId,
                index: e.index,
                type: l,
                droppableId: c,
              }),
              [e.draggableId, e.index, l, c],
            ),
            {
              children: m,
              draggableId: p,
              isEnabled: g,
              shouldRespectForcePress: f,
              canDragInteractiveElements: v,
              isClone: h,
              mapped: b,
              dropAnimationFinished: $,
            } = e;
          if ((vi(), fi(), !h)) {
            ar(
              (0, G.Kr)(
                () => ({
                  descriptor: d,
                  registry: u,
                  getDraggableRef: a,
                  canDragInteractiveElements: v,
                  shouldRespectForcePress: f,
                  isEnabled: g,
                }),
                [d, u, a, v, f, g],
              ),
            );
          }
          const y = (0, G.Kr)(
              () =>
                g
                  ? {
                      tabIndex: 0,
                      role: "button",
                      "aria-describedby": s,
                      "data-rfd-drag-handle-draggable-id": p,
                      "data-rfd-drag-handle-context-id": o,
                      draggable: !1,
                      onDragStart: ur,
                    }
                  : null,
              [o, s, p, g],
            ),
            I = (0, G.hb)(
              (e) => {
                "DRAGGING" === b.type &&
                  b.dropping &&
                  "transform" === e.propertyName &&
                  (i.version.startsWith("16") || i.version.startsWith("17")
                    ? $()
                    : (0, r.flushSync)($));
              },
              [$, b],
            ),
            _ = (0, G.Kr)(() => {
              const e = rr(b),
                t = "DRAGGING" === b.type && b.dropping ? I : void 0;
              return {
                innerRef: n,
                draggableProps: {
                  "data-rfd-draggable-context-id": o,
                  "data-rfd-draggable-id": p,
                  style: e,
                  onTransitionEnd: t,
                },
                dragHandleProps: y,
              };
            }, [o, y, p, b, I, n]),
            x = (0, G.Kr)(
              () => ({
                draggableId: d.id,
                type: d.type,
                source: { index: d.index, droppableId: d.droppableId },
              }),
              [d.droppableId, d.id, d.index, d.type],
            );
          return i.createElement(i.Fragment, null, m(_, b.snapshot, x));
        },
        cr = (e, t) => e === t,
        dr = (e) => {
          const { combine: t, destination: n } = e;
          return n ? n.droppableId : t ? t.droppableId : null;
        };
      function mr(e = null) {
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
      const pr = {
        mapped: {
          type: "SECONDARY",
          offset: ue,
          combineTargetFor: null,
          shouldAnimateDisplacement: !0,
          snapshot: mr(null),
        },
      };
      const gr = C(
        () => {
          const e = (function () {
              const e = F((e, t) => ({ x: e, y: t })),
                t = F((e, t, n = null, i = null, r = null) => ({
                  isDragging: !0,
                  isClone: t,
                  isDropAnimating: Boolean(r),
                  dropAnimation: r,
                  mode: e,
                  draggingOver: n,
                  combineWith: i,
                  combineTargetFor: null,
                })),
                n = F((e, n, i, r, a = null, o = null, s = null) => ({
                  mapped: {
                    type: "DRAGGING",
                    dropping: null,
                    draggingOver: a,
                    combineWith: o,
                    mode: n,
                    offset: e,
                    dimension: i,
                    forceShouldAnimate: s,
                    snapshot: t(n, r, a, o, null),
                  },
                }));
              return (i, r) => {
                if (bi(i)) {
                  if (i.critical.draggable.id !== r.draggableId) return null;
                  const t = i.current.client.offset,
                    o = i.dimensions.draggables[r.draggableId],
                    s = mt(i.impact),
                    u =
                      (a = i.impact).at && "COMBINE" === a.at.type
                        ? a.at.combine.draggableId
                        : null,
                    l = i.forceShouldAnimate;
                  return n(e(t.x, t.y), i.movementMode, o, r.isClone, s, u, l);
                }
                var a;
                if ("DROP_ANIMATING" === i.phase) {
                  const e = i.completed;
                  if (e.result.draggableId !== r.draggableId) return null;
                  const n = r.isClone,
                    a = i.dimensions.draggables[r.draggableId],
                    o = e.result,
                    s = o.mode,
                    u = dr(o),
                    l = ((e) => (e.combine ? e.combine.draggableId : null))(o),
                    c = {
                      duration: i.dropDuration,
                      curve: qt,
                      moveTo: i.newHomeClientOffset,
                      opacity: l ? Xt.drop : null,
                      scale: l ? Yt.drop : null,
                    };
                  return {
                    mapped: {
                      type: "DRAGGING",
                      offset: i.newHomeClientOffset,
                      dimension: a,
                      dropping: c,
                      draggingOver: u,
                      combineWith: l,
                      mode: s,
                      forceShouldAnimate: null,
                      snapshot: t(s, n, u, l, c),
                    },
                  };
                }
                return null;
              };
            })(),
            t = (function () {
              const e = F((e, t) => ({ x: e, y: t })),
                t = F(mr),
                n = F((e, n = null, i) => ({
                  mapped: {
                    type: "SECONDARY",
                    offset: e,
                    combineTargetFor: n,
                    shouldAnimateDisplacement: i,
                    snapshot: t(n),
                  },
                })),
                i = (e) => (e ? n(ue, e, !0) : null),
                r = (t, r, a, o) => {
                  const s = a.displaced.visible[t],
                    u = Boolean(o.inVirtualList && o.effected[t]),
                    l = Oe(a),
                    c = l && l.draggableId === t ? r : null;
                  if (!s) {
                    if (!u) return i(c);
                    if (a.displaced.invisible[t]) return null;
                    const r = me(o.displacedBy.point),
                      s = e(r.x, r.y);
                    return n(s, c, !0);
                  }
                  if (u) return i(c);
                  const d = a.displacedBy.point,
                    m = e(d.x, d.y);
                  return n(m, c, s.shouldAnimate);
                };
              return (e, t) => {
                if (bi(e))
                  return e.critical.draggable.id === t.draggableId
                    ? null
                    : r(
                        t.draggableId,
                        e.critical.draggable.id,
                        e.impact,
                        e.afterCritical,
                      );
                if ("DROP_ANIMATING" === e.phase) {
                  const n = e.completed;
                  return n.result.draggableId === t.draggableId
                    ? null
                    : r(
                        t.draggableId,
                        n.result.draggableId,
                        n.impact,
                        n.afterCritical,
                      );
                }
                return null;
              };
            })();
          return (n, i) => e(n, i) || t(n, i) || pr;
        },
        { dropAnimationFinished: Ht },
        null,
        { context: ui, areStatePropsEqual: cr },
      )(lr);
      var fr = gr;
      function vr(e) {
        return sr(or).isUsingCloneFor !== e.draggableId || e.isClone
          ? i.createElement(fr, e)
          : null;
      }
      function hr(e) {
        const t = "boolean" != typeof e.isDragDisabled || !e.isDragDisabled,
          n = Boolean(e.disableInteractiveElementBlocking),
          r = Boolean(e.shouldRespectForcePress);
        return i.createElement(
          vr,
          (0, f.A)({}, e, {
            isClone: !1,
            isEnabled: t,
            canDragInteractiveElements: n,
            shouldRespectForcePress: r,
          }),
        );
      }
      const br = (e) => (t) => e === t,
        $r = br("scroll"),
        yr = br("auto"),
        Ir = (br("visible"), (e, t) => t(e.overflowX) || t(e.overflowY)),
        _r = (e) => {
          const t = window.getComputedStyle(e),
            n = { overflowX: t.overflowX, overflowY: t.overflowY };
          return Ir(n, $r) || Ir(n, yr);
        },
        xr = (e) =>
          null == e || e === document.body || e === document.documentElement
            ? null
            : _r(e)
              ? e
              : xr(e.parentElement);
      var kr = (e) => ({ x: e.scrollLeft, y: e.scrollTop });
      const wr = (e) => {
        if (!e) return !1;
        return (
          "fixed" === window.getComputedStyle(e).position || wr(e.parentElement)
        );
      };
      var Sr = ({
        ref: e,
        descriptor: t,
        env: n,
        windowScroll: i,
        direction: r,
        isDropDisabled: a,
        isCombineEnabled: o,
        shouldClipSubject: s,
      }) => {
        const u = n.closestScrollable,
          l = ((e, t) => {
            const n = (0, M.YH)(e);
            if (!t) return n;
            if (e !== t) return n;
            const i = n.paddingBox.top - t.scrollTop,
              r = n.paddingBox.left - t.scrollLeft,
              a = i + t.scrollHeight,
              o = { top: i, right: r + t.scrollWidth, bottom: a, left: r },
              s = (0, M.fT)(o, n.border);
            return (0, M.ge)({
              borderBox: s,
              margin: n.margin,
              border: n.border,
              padding: n.padding,
            });
          })(e, u),
          c = (0, M.SQ)(l, i),
          d = (() => {
            if (!u) return null;
            const e = (0, M.YH)(u),
              t = { scrollHeight: u.scrollHeight, scrollWidth: u.scrollWidth };
            return {
              client: e,
              page: (0, M.SQ)(e, i),
              scroll: kr(u),
              scrollSize: t,
              shouldClipSubject: s,
            };
          })(),
          m = (({
            descriptor: e,
            isEnabled: t,
            isCombineEnabled: n,
            isFixedOnPage: i,
            direction: r,
            client: a,
            page: o,
            closest: s,
          }) => {
            const u = (() => {
                if (!s) return null;
                const { scrollSize: e, client: t } = s,
                  n = xn({
                    scrollHeight: e.scrollHeight,
                    scrollWidth: e.scrollWidth,
                    height: t.paddingBox.height,
                    width: t.paddingBox.width,
                  });
                return {
                  pageMarginBox: s.page.marginBox,
                  frameClient: t,
                  scrollSize: e,
                  shouldClipSubject: s.shouldClipSubject,
                  scroll: {
                    initial: s.scroll,
                    current: s.scroll,
                    max: n,
                    diff: { value: ue, displacement: ue },
                  },
                };
              })(),
              l = "vertical" === r ? Ce : Re;
            return {
              descriptor: e,
              isCombineEnabled: n,
              isFixedOnPage: i,
              axis: l,
              isEnabled: t,
              client: a,
              page: o,
              frame: u,
              subject: ye({
                page: o,
                withPlaceholder: null,
                axis: l,
                frame: u,
              }),
            };
          })({
            descriptor: t,
            isEnabled: !a,
            isCombineEnabled: o,
            isFixedOnPage: n.isFixedOnPage,
            direction: r,
            client: l,
            page: c,
            closest: d,
          });
        return m;
      };
      const Dr = { passive: !1 },
        Or = { passive: !0 };
      var Ur = (e) => (e.shouldPublishImmediately ? Dr : Or);
      const Nr = (e) => (e && e.env.closestScrollable) || null;
      function zr(e) {
        const t = (0, i.useRef)(null),
          n = sr(gi),
          r = pi("droppable"),
          { registry: a, marshal: o } = n,
          s = hi(e),
          u = (0, G.Kr)(
            () => ({ id: e.droppableId, type: e.type, mode: e.mode }),
            [e.droppableId, e.mode, e.type],
          ),
          l = (0, i.useRef)(u),
          c = (0, G.Kr)(
            () =>
              F((e, n) => {
                t.current || ee(!1);
                const i = { x: e, y: n };
                o.updateDroppableScroll(u.id, i);
              }),
            [u.id, o],
          ),
          d = (0, G.hb)(() => {
            const e = t.current;
            return e && e.env.closestScrollable
              ? kr(e.env.closestScrollable)
              : ue;
          }, []),
          m = (0, G.hb)(() => {
            const e = d();
            c(e.x, e.y);
          }, [d, c]),
          p = (0, G.Kr)(() => (0, K.A)(m), [m]),
          g = (0, G.hb)(() => {
            const e = t.current,
              n = Nr(e);
            (e && n) || ee(!1);
            e.scrollOptions.shouldPublishImmediately ? m() : p();
          }, [p, m]),
          f = (0, G.hb)(
            (e, i) => {
              t.current && ee(!1);
              const r = s.current,
                a = r.getDroppableRef();
              a || ee(!1);
              const o = ((e) => ({
                  closestScrollable: xr(e),
                  isFixedOnPage: wr(e),
                }))(a),
                l = { ref: a, descriptor: u, env: o, scrollOptions: i };
              t.current = l;
              const c = Sr({
                  ref: a,
                  descriptor: u,
                  env: o,
                  windowScroll: e,
                  direction: r.direction,
                  isDropDisabled: r.isDropDisabled,
                  isCombineEnabled: r.isCombineEnabled,
                  shouldClipSubject: !r.ignoreContainerClipping,
                }),
                d = o.closestScrollable;
              return (
                d &&
                  (d.setAttribute(Xn.contextId, n.contextId),
                  d.addEventListener("scroll", g, Ur(l.scrollOptions))),
                c
              );
            },
            [n.contextId, u, g, s],
          ),
          v = (0, G.hb)(() => {
            const e = t.current,
              n = Nr(e);
            return (e && n) || ee(!1), kr(n);
          }, []),
          h = (0, G.hb)(() => {
            const e = t.current;
            e || ee(!1);
            const n = Nr(e);
            (t.current = null),
              n &&
                (p.cancel(),
                n.removeAttribute(Xn.contextId),
                n.removeEventListener("scroll", g, Ur(e.scrollOptions)));
          }, [g, p]),
          b = (0, G.hb)((e) => {
            const n = t.current;
            n || ee(!1);
            const i = Nr(n);
            i || ee(!1), (i.scrollTop += e.y), (i.scrollLeft += e.x);
          }, []),
          $ = (0, G.Kr)(
            () => ({
              getDimensionAndWatchScroll: f,
              getScrollWhileDragging: v,
              dragStopped: h,
              scroll: b,
            }),
            [h, f, v, b],
          ),
          y = (0, G.Kr)(
            () => ({ uniqueId: r, descriptor: u, callbacks: $ }),
            [$, u, r],
          );
        ei(
          () => (
            (l.current = y.descriptor),
            a.droppable.register(y),
            () => {
              t.current && h(), a.droppable.unregister(y);
            }
          ),
          [$, u, h, y, o, a.droppable],
        ),
          ei(() => {
            t.current &&
              o.updateDroppableIsEnabled(l.current.id, !e.isDropDisabled);
          }, [e.isDropDisabled, o]),
          ei(() => {
            t.current &&
              o.updateDroppableIsCombineEnabled(
                l.current.id,
                e.isCombineEnabled,
              );
          }, [e.isCombineEnabled, o]);
      }
      function Er() {}
      const Pr = {
          width: 0,
          height: 0,
          margin: { top: 0, right: 0, bottom: 0, left: 0 },
        },
        jr = ({ isAnimatingOpenOnMount: e, placeholder: t, animate: n }) => {
          const i = (({
            isAnimatingOpenOnMount: e,
            placeholder: t,
            animate: n,
          }) =>
            e || "close" === n
              ? Pr
              : {
                  height: t.client.borderBox.height,
                  width: t.client.borderBox.width,
                  margin: t.client.margin,
                })({ isAnimatingOpenOnMount: e, placeholder: t, animate: n });
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
            transition: "none" !== n ? tn.placeholder : null,
          };
        };
      var Ar = i.memo((e) => {
        const t = (0, i.useRef)(null),
          n = (0, G.hb)(() => {
            t.current && (clearTimeout(t.current), (t.current = null));
          }, []),
          { animate: r, onTransitionEnd: a, onClose: o, contextId: s } = e,
          [u, l] = (0, i.useState)("open" === e.animate);
        (0, i.useEffect)(
          () =>
            u
              ? "open" !== r
                ? (n(), l(!1), Er)
                : t.current
                  ? Er
                  : ((t.current = setTimeout(() => {
                      (t.current = null), l(!1);
                    })),
                    n)
              : Er,
          [r, u, n],
        );
        const c = (0, G.hb)(
            (e) => {
              "height" === e.propertyName && (a(), "close" === r && o());
            },
            [r, o, a],
          ),
          d = jr({
            isAnimatingOpenOnMount: u,
            animate: e.animate,
            placeholder: e.placeholder,
          });
        return i.createElement(e.placeholder.tagName, {
          style: d,
          "data-rfd-placeholder-context-id": s,
          onTransitionEnd: c,
          ref: e.innerRef,
        });
      });
      class Tr extends i.PureComponent {
        constructor(...e) {
          super(...e),
            (this.state = {
              isVisible: Boolean(this.props.on),
              data: this.props.on,
              animate:
                this.props.shouldAnimate && this.props.on ? "open" : "none",
            }),
            (this.onClose = () => {
              "close" === this.state.animate &&
                this.setState({ isVisible: !1 });
            });
        }
        static getDerivedStateFromProps(e, t) {
          return e.shouldAnimate
            ? e.on
              ? { isVisible: !0, data: e.on, animate: "open" }
              : t.isVisible
                ? { isVisible: !0, data: t.data, animate: "close" }
                : { isVisible: !1, animate: "close", data: null }
            : { isVisible: Boolean(e.on), data: e.on, animate: "none" };
        }
        render() {
          if (!this.state.isVisible) return null;
          const e = {
            onClose: this.onClose,
            data: this.state.data,
            animate: this.state.animate,
          };
          return this.props.children(e);
        }
      }
      var Cr = (e) => {
        const t = (0, i.useContext)(gi);
        t || ee(!1);
        const { contextId: n, isMovementAllowed: a } = t,
          o = (0, i.useRef)(null),
          s = (0, i.useRef)(null),
          {
            children: u,
            droppableId: l,
            type: c,
            mode: d,
            direction: m,
            ignoreContainerClipping: p,
            isDropDisabled: g,
            isCombineEnabled: f,
            snapshot: v,
            useClone: h,
            updateViewportMaxScroll: b,
            getContainerForClone: $,
          } = e,
          y = (0, G.hb)(() => o.current, []),
          I = (0, G.hb)((e = null) => {
            o.current = e;
          }, []),
          _ =
            ((0, G.hb)(() => s.current, []),
            (0, G.hb)((e = null) => {
              s.current = e;
            }, []));
        vi();
        const x = (0, G.hb)(() => {
          a() && b({ maxScroll: wn() });
        }, [a, b]);
        zr({
          droppableId: l,
          type: c,
          mode: d,
          direction: m,
          isDropDisabled: g,
          isCombineEnabled: f,
          ignoreContainerClipping: p,
          getDroppableRef: y,
        });
        const k = (0, G.Kr)(
            () =>
              i.createElement(
                Tr,
                {
                  on: e.placeholder,
                  shouldAnimate: e.shouldAnimatePlaceholder,
                },
                ({ onClose: e, data: t, animate: r }) =>
                  i.createElement(Ar, {
                    placeholder: t,
                    onClose: e,
                    innerRef: _,
                    animate: r,
                    contextId: n,
                    onTransitionEnd: x,
                  }),
              ),
            [n, x, e.placeholder, e.shouldAnimatePlaceholder, _],
          ),
          w = (0, G.Kr)(
            () => ({
              innerRef: I,
              placeholder: k,
              droppableProps: {
                "data-rfd-droppable-id": l,
                "data-rfd-droppable-context-id": n,
              },
            }),
            [n, l, k, I],
          ),
          S = h ? h.dragging.draggableId : null,
          D = (0, G.Kr)(
            () => ({ droppableId: l, type: c, isUsingCloneFor: S }),
            [l, S, c],
          );
        return i.createElement(
          or.Provider,
          { value: D },
          u(w, v),
          (function () {
            if (!h) return null;
            const { dragging: e, render: t } = h,
              n = i.createElement(
                vr,
                {
                  draggableId: e.draggableId,
                  index: e.source.index,
                  isClone: !0,
                  isEnabled: !0,
                  shouldRespectForcePress: !1,
                  canDragInteractiveElements: !0,
                },
                (n, i) => t(n, i, e),
              );
            return r.createPortal(n, $());
          })(),
        );
      };
      const Rr = {
          mode: "standard",
          type: "DEFAULT",
          direction: "vertical",
          isDropDisabled: !1,
          isCombineEnabled: !1,
          ignoreContainerClipping: !1,
          renderClone: null,
          getContainerForClone: function () {
            return document.body || ee(!1), document.body;
          },
        },
        Lr = (e) => {
          let t,
            n = { ...e };
          for (t in Rr) void 0 === e[t] && (n = { ...n, [t]: Rr[t] });
          return n;
        },
        Br = (e, t) => e === t.droppable.type,
        Gr = (e, t) => t.draggables[e.draggable.id];
      var Mr = C(
        () => {
          const e = {
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
            t = { ...e, shouldAnimatePlaceholder: !1 },
            n = F((e) => ({
              draggableId: e.id,
              type: e.type,
              source: { index: e.index, droppableId: e.droppableId },
            })),
            i = F((i, r, a, o, s, u) => {
              const l = s.descriptor.id;
              if (s.descriptor.droppableId === i) {
                const e = u ? { render: u, dragging: n(s.descriptor) } : null,
                  t = {
                    isDraggingOver: a,
                    draggingOverWith: a ? l : null,
                    draggingFromThisWith: l,
                    isUsingPlaceholder: !0,
                  };
                return {
                  placeholder: s.placeholder,
                  shouldAnimatePlaceholder: !1,
                  snapshot: t,
                  useClone: e,
                };
              }
              if (!r) return t;
              if (!o) return e;
              const c = {
                isDraggingOver: a,
                draggingOverWith: l,
                draggingFromThisWith: null,
                isUsingPlaceholder: !0,
              };
              return {
                placeholder: s.placeholder,
                shouldAnimatePlaceholder: !0,
                snapshot: c,
                useClone: null,
              };
            });
          return (n, r) => {
            const a = Lr(r),
              o = a.droppableId,
              s = a.type,
              u = !a.isDropDisabled,
              l = a.renderClone;
            if (bi(n)) {
              const e = n.critical;
              if (!Br(s, e)) return t;
              const r = Gr(e, n.dimensions),
                a = mt(n.impact) === o;
              return i(o, u, a, a, r, l);
            }
            if ("DROP_ANIMATING" === n.phase) {
              const e = n.completed;
              if (!Br(s, e.critical)) return t;
              const r = Gr(e.critical, n.dimensions);
              return i(o, u, dr(e.result) === o, mt(e.impact) === o, r, l);
            }
            if ("IDLE" === n.phase && n.completed && !n.shouldFlush) {
              const i = n.completed;
              if (!Br(s, i.critical)) return t;
              const r = mt(i.impact) === o,
                a = Boolean(i.impact.at && "COMBINE" === i.impact.at.type),
                u = i.critical.droppable.id === o;
              return r ? (a ? e : t) : u ? e : t;
            }
            return t;
          };
        },
        {
          updateViewportMaxScroll: (e) => ({
            type: "UPDATE_VIEWPORT_MAX_SCROLL",
            payload: e,
          }),
        },
        (e, t, n) => ({ ...Lr(n), ...e, ...t }),
        { context: ui, areStatePropsEqual: cr },
      )(Cr);
    },
    38877: (e, t) => {
      var n,
        i = Symbol.for("react.element"),
        r = Symbol.for("react.portal"),
        a = Symbol.for("react.fragment"),
        o = Symbol.for("react.strict_mode"),
        s = Symbol.for("react.profiler"),
        u = Symbol.for("react.provider"),
        l = Symbol.for("react.context"),
        c = Symbol.for("react.server_context"),
        d = Symbol.for("react.forward_ref"),
        m = Symbol.for("react.suspense"),
        p = Symbol.for("react.suspense_list"),
        g = Symbol.for("react.memo"),
        f = Symbol.for("react.lazy"),
        v = Symbol.for("react.offscreen");
      /**
       * @license React
       * react-is.production.min.js
       *
       * Copyright (c) Facebook, Inc. and its affiliates.
       *
       * This source code is licensed under the MIT license found in the
       * LICENSE file in the root directory of this source tree.
       */ function h(e) {
        if ("object" == typeof e && null !== e) {
          var t = e.$$typeof;
          switch (t) {
            case i:
              switch ((e = e.type)) {
                case a:
                case s:
                case o:
                case m:
                case p:
                  return e;
                default:
                  switch ((e = e && e.$$typeof)) {
                    case c:
                    case l:
                    case d:
                    case f:
                    case g:
                    case u:
                      return e;
                    default:
                      return t;
                  }
              }
            case r:
              return t;
          }
        }
      }
      (n = Symbol.for("react.module.reference")),
        (t.isContextConsumer = function (e) {
          return h(e) === l;
        }),
        (t.isFragment = function (e) {
          return h(e) === a;
        });
    },
    98193: (e, t, n) => {
      e.exports = n(38877);
    },
    68980: (e, t, n) => {
      n.d(t, {
        YOg: () => zi,
        rLB: () => tr,
        auy: () => r,
        k5n: () => Ri,
        Whr: () => _i,
        euz: () => Bi,
        aig: () => yi,
        Ikc: () => Pi,
        A$I: () => i,
        YjP: () => Yn,
        uEf: () => rr,
        ZSL: () => R,
      });
      var i = {};
      n.r(i),
        n.d(i, {
          K3: () => _,
          r0: () => x,
          o: () => E,
          zM: () => A,
          zr: () => y,
          l7: () => I,
          gF: () => o,
          Gl: () => s,
          p6: () => D,
          w$: () => N,
          p0: () => m,
          hQ: () => w,
          Rp: () => f,
          Zg: () => h,
          Os: () => p,
          F: () => k,
          nd: () => P,
          uX: () => b,
          ug: () => $,
          fO: () => c,
          AC: () => T,
          Ak: () => d,
          ai: () => j,
          Yj: () => z,
          kB: () => U,
          Z0: () => u,
          Zv: () => C,
          uR: () => g,
          kM: () => l,
        });
      var r = {};
      n.r(r),
        n.d(r, {
          bigint: () => lr,
          boolean: () => ur,
          date: () => cr,
          number: () => sr,
          string: () => or,
        });
      var a = n(62617);
      const o = /^[cC][0-9a-z]{6,}$/,
        s = /^[0-9a-z]+$/,
        u = /^[0-9A-HJKMNP-TV-Za-hjkmnp-tv-z]{26}$/,
        l = /^[0-9a-vA-V]{20}$/,
        c = /^[A-Za-z0-9]{27}$/,
        d = /^[a-zA-Z0-9_-]{21}$/,
        m =
          /^P(?:(\d+W)|(?!.*W)(?=\d|T\d)(\d+Y)?(\d+M)?(\d+D)?(T(?=\d)(\d+H)?(\d+M)?(\d+([.,]\d+)?S)?)?)$/,
        p =
          /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12})$/,
        g = (e) =>
          e
            ? new RegExp(
                `^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-${e}[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$`,
              )
            : /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$/,
        f =
          /^(?!\.)(?!.*\.\.)([A-Za-z0-9_'+\-\.]*)[A-Za-z0-9_+-]@([A-Za-z0-9][A-Za-z0-9\-]*\.)+[A-Za-z]{2,}$/,
        v = "^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$";
      function h() {
        return new RegExp(v, "u");
      }
      const b =
          /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/,
        $ =
          /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:))$/,
        y =
          /^((25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/([0-9]|[1-2][0-9]|3[0-2])$/,
        I =
          /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|::|([0-9a-fA-F]{1,4})?::([0-9a-fA-F]{1,4}:?){0,6})\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/,
        _ =
          /^$|^(?:[0-9a-zA-Z+/]{4})*(?:(?:[0-9a-zA-Z+/]{2}==)|(?:[0-9a-zA-Z+/]{3}=))?$/,
        x = /^[A-Za-z0-9_-]*$/,
        k = /^https?$/,
        w = /^\+[1-9]\d{6,14}$/,
        S =
          "(?:(?:\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\\d|30)|(?:02)-(?:0[1-9]|1\\d|2[0-8])))",
        D = new RegExp(`^${S}$`);
      function O(e) {
        const t = "(?:[01]\\d|2[0-3]):[0-5]\\d";
        return "number" == typeof e.precision
          ? -1 === e.precision
            ? `${t}`
            : 0 === e.precision
              ? `${t}:[0-5]\\d`
              : `${t}:[0-5]\\d\\.\\d{${e.precision}}`
          : `${t}(?::[0-5]\\d(?:\\.\\d+)?)?`;
      }
      function U(e) {
        return new RegExp(`^${O(e)}$`);
      }
      function N(e) {
        const t = O({ precision: e.precision }),
          n = ["Z"];
        e.local && n.push(""),
          e.offset && n.push("([+-](?:[01]\\d|2[0-3]):[0-5]\\d)");
        const i = `${t}(?:${n.join("|")})`;
        return new RegExp(`^${S}T(?:${i})$`);
      }
      const z = (e) =>
          new RegExp(
            `^${e ? `[\\s\\S]{${e?.minimum ?? 0},${e?.maximum ?? ""}}` : "[\\s\\S]*"}$`,
          ),
        E = /^-?\d+n?$/,
        P = /^-?\d+$/,
        j = /^-?\d+(?:\.\d+)?$/,
        A = /^(?:true|false)$/i,
        T = /^[^A-Z]*$/,
        C = /^[^a-z]*$/;
      var R = n(99482);
      const L = a.xI("$ZodCheck", (e, t) => {
          var n;
          e._zod ?? (e._zod = {}),
            (e._zod.def = t),
            (n = e._zod).onattach ?? (n.onattach = []);
        }),
        B = { number: "number", bigint: "bigint", object: "date" },
        G = a.xI("$ZodCheckLessThan", (e, t) => {
          L.init(e, t);
          const n = B[typeof t.value];
          e._zod.onattach.push((e) => {
            const n = e._zod.bag,
              i =
                (t.inclusive ? n.maximum : n.exclusiveMaximum) ??
                Number.POSITIVE_INFINITY;
            t.value < i &&
              (t.inclusive
                ? (n.maximum = t.value)
                : (n.exclusiveMaximum = t.value));
          }),
            (e._zod.check = (i) => {
              (t.inclusive ? i.value <= t.value : i.value < t.value) ||
                i.issues.push({
                  origin: n,
                  code: "too_big",
                  maximum:
                    "object" == typeof t.value ? t.value.getTime() : t.value,
                  input: i.value,
                  inclusive: t.inclusive,
                  inst: e,
                  continue: !t.abort,
                });
            });
        }),
        M = a.xI("$ZodCheckGreaterThan", (e, t) => {
          L.init(e, t);
          const n = B[typeof t.value];
          e._zod.onattach.push((e) => {
            const n = e._zod.bag,
              i =
                (t.inclusive ? n.minimum : n.exclusiveMinimum) ??
                Number.NEGATIVE_INFINITY;
            t.value > i &&
              (t.inclusive
                ? (n.minimum = t.value)
                : (n.exclusiveMinimum = t.value));
          }),
            (e._zod.check = (i) => {
              (t.inclusive ? i.value >= t.value : i.value > t.value) ||
                i.issues.push({
                  origin: n,
                  code: "too_small",
                  minimum:
                    "object" == typeof t.value ? t.value.getTime() : t.value,
                  input: i.value,
                  inclusive: t.inclusive,
                  inst: e,
                  continue: !t.abort,
                });
            });
        }),
        W = a.xI("$ZodCheckMultipleOf", (e, t) => {
          L.init(e, t),
            e._zod.onattach.push((e) => {
              var n;
              (n = e._zod.bag).multipleOf ?? (n.multipleOf = t.value);
            }),
            (e._zod.check = (n) => {
              if (typeof n.value != typeof t.value)
                throw new Error(
                  "Cannot mix number and bigint in multiple_of check.",
                );
              ("bigint" == typeof n.value
                ? n.value % t.value === BigInt(0)
                : 0 === R.LG(n.value, t.value)) ||
                n.issues.push({
                  origin: typeof n.value,
                  code: "not_multiple_of",
                  divisor: t.value,
                  input: n.value,
                  inst: e,
                  continue: !t.abort,
                });
            });
        }),
        Z = a.xI("$ZodCheckNumberFormat", (e, t) => {
          L.init(e, t), (t.format = t.format || "float64");
          const n = t.format?.includes("int"),
            i = n ? "int" : "number",
            [r, a] = R.zH[t.format];
          e._zod.onattach.push((e) => {
            const i = e._zod.bag;
            (i.format = t.format),
              (i.minimum = r),
              (i.maximum = a),
              n && (i.pattern = P);
          }),
            (e._zod.check = (o) => {
              const s = o.value;
              if (n) {
                if (!Number.isInteger(s))
                  return void o.issues.push({
                    expected: i,
                    format: t.format,
                    code: "invalid_type",
                    continue: !1,
                    input: s,
                    inst: e,
                  });
                if (!Number.isSafeInteger(s))
                  return void (s > 0
                    ? o.issues.push({
                        input: s,
                        code: "too_big",
                        maximum: Number.MAX_SAFE_INTEGER,
                        note: "Integers must be within the safe integer range.",
                        inst: e,
                        origin: i,
                        inclusive: !0,
                        continue: !t.abort,
                      })
                    : o.issues.push({
                        input: s,
                        code: "too_small",
                        minimum: Number.MIN_SAFE_INTEGER,
                        note: "Integers must be within the safe integer range.",
                        inst: e,
                        origin: i,
                        inclusive: !0,
                        continue: !t.abort,
                      }));
              }
              s < r &&
                o.issues.push({
                  origin: "number",
                  input: s,
                  code: "too_small",
                  minimum: r,
                  inclusive: !0,
                  inst: e,
                  continue: !t.abort,
                }),
                s > a &&
                  o.issues.push({
                    origin: "number",
                    input: s,
                    code: "too_big",
                    maximum: a,
                    inclusive: !0,
                    inst: e,
                    continue: !t.abort,
                  });
            });
        }),
        J = a.xI("$ZodCheckMaxLength", (e, t) => {
          var n;
          L.init(e, t),
            (n = e._zod.def).when ??
              (n.when = (e) => {
                const t = e.value;
                return !R.cl(t) && void 0 !== t.length;
              }),
            e._zod.onattach.push((e) => {
              const n = e._zod.bag.maximum ?? Number.POSITIVE_INFINITY;
              t.maximum < n && (e._zod.bag.maximum = t.maximum);
            }),
            (e._zod.check = (n) => {
              const i = n.value;
              if (i.length <= t.maximum) return;
              const r = R.Rc(i);
              n.issues.push({
                origin: r,
                code: "too_big",
                maximum: t.maximum,
                inclusive: !0,
                input: i,
                inst: e,
                continue: !t.abort,
              });
            });
        }),
        F = a.xI("$ZodCheckMinLength", (e, t) => {
          var n;
          L.init(e, t),
            (n = e._zod.def).when ??
              (n.when = (e) => {
                const t = e.value;
                return !R.cl(t) && void 0 !== t.length;
              }),
            e._zod.onattach.push((e) => {
              const n = e._zod.bag.minimum ?? Number.NEGATIVE_INFINITY;
              t.minimum > n && (e._zod.bag.minimum = t.minimum);
            }),
            (e._zod.check = (n) => {
              const i = n.value;
              if (i.length >= t.minimum) return;
              const r = R.Rc(i);
              n.issues.push({
                origin: r,
                code: "too_small",
                minimum: t.minimum,
                inclusive: !0,
                input: i,
                inst: e,
                continue: !t.abort,
              });
            });
        }),
        K = a.xI("$ZodCheckLengthEquals", (e, t) => {
          var n;
          L.init(e, t),
            (n = e._zod.def).when ??
              (n.when = (e) => {
                const t = e.value;
                return !R.cl(t) && void 0 !== t.length;
              }),
            e._zod.onattach.push((e) => {
              const n = e._zod.bag;
              (n.minimum = t.length),
                (n.maximum = t.length),
                (n.length = t.length);
            }),
            (e._zod.check = (n) => {
              const i = n.value,
                r = i.length;
              if (r === t.length) return;
              const a = R.Rc(i),
                o = r > t.length;
              n.issues.push({
                origin: a,
                ...(o
                  ? { code: "too_big", maximum: t.length }
                  : { code: "too_small", minimum: t.length }),
                inclusive: !0,
                exact: !0,
                input: n.value,
                inst: e,
                continue: !t.abort,
              });
            });
        }),
        V = a.xI("$ZodCheckStringFormat", (e, t) => {
          var n, i;
          L.init(e, t),
            e._zod.onattach.push((e) => {
              const n = e._zod.bag;
              (n.format = t.format),
                t.pattern &&
                  (n.patterns ?? (n.patterns = new Set()),
                  n.patterns.add(t.pattern));
            }),
            t.pattern
              ? ((n = e._zod).check ??
                (n.check = (n) => {
                  (t.pattern.lastIndex = 0),
                    t.pattern.test(n.value) ||
                      n.issues.push({
                        origin: "string",
                        code: "invalid_format",
                        format: t.format,
                        input: n.value,
                        ...(t.pattern ? { pattern: t.pattern.toString() } : {}),
                        inst: e,
                        continue: !t.abort,
                      });
                }))
              : ((i = e._zod).check ?? (i.check = () => {}));
        }),
        H = a.xI("$ZodCheckRegex", (e, t) => {
          V.init(e, t),
            (e._zod.check = (n) => {
              (t.pattern.lastIndex = 0),
                t.pattern.test(n.value) ||
                  n.issues.push({
                    origin: "string",
                    code: "invalid_format",
                    format: "regex",
                    input: n.value,
                    pattern: t.pattern.toString(),
                    inst: e,
                    continue: !t.abort,
                  });
            });
        }),
        q = a.xI("$ZodCheckLowerCase", (e, t) => {
          t.pattern ?? (t.pattern = T), V.init(e, t);
        }),
        X = a.xI("$ZodCheckUpperCase", (e, t) => {
          t.pattern ?? (t.pattern = C), V.init(e, t);
        }),
        Y = a.xI("$ZodCheckIncludes", (e, t) => {
          L.init(e, t);
          const n = R.$f(t.includes),
            i = new RegExp(
              "number" == typeof t.position ? `^.{${t.position}}${n}` : n,
            );
          (t.pattern = i),
            e._zod.onattach.push((e) => {
              const t = e._zod.bag;
              t.patterns ?? (t.patterns = new Set()), t.patterns.add(i);
            }),
            (e._zod.check = (n) => {
              n.value.includes(t.includes, t.position) ||
                n.issues.push({
                  origin: "string",
                  code: "invalid_format",
                  format: "includes",
                  includes: t.includes,
                  input: n.value,
                  inst: e,
                  continue: !t.abort,
                });
            });
        }),
        Q = a.xI("$ZodCheckStartsWith", (e, t) => {
          L.init(e, t);
          const n = new RegExp(`^${R.$f(t.prefix)}.*`);
          t.pattern ?? (t.pattern = n),
            e._zod.onattach.push((e) => {
              const t = e._zod.bag;
              t.patterns ?? (t.patterns = new Set()), t.patterns.add(n);
            }),
            (e._zod.check = (n) => {
              n.value.startsWith(t.prefix) ||
                n.issues.push({
                  origin: "string",
                  code: "invalid_format",
                  format: "starts_with",
                  prefix: t.prefix,
                  input: n.value,
                  inst: e,
                  continue: !t.abort,
                });
            });
        }),
        ee = a.xI("$ZodCheckEndsWith", (e, t) => {
          L.init(e, t);
          const n = new RegExp(`.*${R.$f(t.suffix)}$`);
          t.pattern ?? (t.pattern = n),
            e._zod.onattach.push((e) => {
              const t = e._zod.bag;
              t.patterns ?? (t.patterns = new Set()), t.patterns.add(n);
            }),
            (e._zod.check = (n) => {
              n.value.endsWith(t.suffix) ||
                n.issues.push({
                  origin: "string",
                  code: "invalid_format",
                  format: "ends_with",
                  suffix: t.suffix,
                  input: n.value,
                  inst: e,
                  continue: !t.abort,
                });
            });
        });
      const te = a.xI("$ZodCheckOverwrite", (e, t) => {
        L.init(e, t),
          (e._zod.check = (e) => {
            e.value = t.tx(e.value);
          });
      });
      class ne {
        constructor(e = []) {
          (this.content = []), (this.indent = 0), this && (this.args = e);
        }
        indented(e) {
          (this.indent += 1), e(this), (this.indent -= 1);
        }
        write(e) {
          if ("function" == typeof e)
            return (
              e(this, { execution: "sync" }),
              void e(this, { execution: "async" })
            );
          const t = e.split("\n").filter((e) => e),
            n = Math.min(...t.map((e) => e.length - e.trimStart().length)),
            i = t
              .map((e) => e.slice(n))
              .map((e) => " ".repeat(2 * this.indent) + e);
          for (const e of i) this.content.push(e);
        }
        compile() {
          const e = Function,
            t = this?.args;
          return new e(
            ...t,
            [...(this?.content ?? [""]).map((e) => `  ${e}`)].join("\n"),
          );
        }
      }
      const ie = (e, t) => {
          (e.name = "$ZodError"),
            Object.defineProperty(e, "_zod", { value: e._zod, enumerable: !1 }),
            Object.defineProperty(e, "issues", { value: t, enumerable: !1 }),
            (e.message = JSON.stringify(t, R.k8, 2)),
            Object.defineProperty(e, "toString", {
              value: () => e.message,
              enumerable: !1,
            });
        },
        re = (0, a.xI)("$ZodError", ie),
        ae = (0, a.xI)("$ZodError", ie, { Parent: Error });
      const oe = (e) => (t, n, i, r) => {
          const o = i ? { ...i, async: !1 } : { async: !1 },
            s = t._zod.run({ value: n, issues: [] }, o);
          if (s instanceof Promise) throw new a.GT();
          if (s.issues.length) {
            const t = new (r?.Err ?? e)(
              s.issues.map((e) => R.iR(e, o, a.$W())),
            );
            throw (R.gx(t, r?.callee), t);
          }
          return s.value;
        },
        se = (e) => async (t, n, i, r) => {
          const o = i ? { ...i, async: !0 } : { async: !0 };
          let s = t._zod.run({ value: n, issues: [] }, o);
          if ((s instanceof Promise && (s = await s), s.issues.length)) {
            const t = new (r?.Err ?? e)(
              s.issues.map((e) => R.iR(e, o, a.$W())),
            );
            throw (R.gx(t, r?.callee), t);
          }
          return s.value;
        },
        ue = (e) => (t, n, i) => {
          const r = i ? { ...i, async: !1 } : { async: !1 },
            o = t._zod.run({ value: n, issues: [] }, r);
          if (o instanceof Promise) throw new a.GT();
          return o.issues.length
            ? {
                success: !1,
                error: new (e ?? re)(o.issues.map((e) => R.iR(e, r, a.$W()))),
              }
            : { success: !0, data: o.value };
        },
        le = ue(ae),
        ce = (e) => async (t, n, i) => {
          const r = i ? { ...i, async: !0 } : { async: !0 };
          let o = t._zod.run({ value: n, issues: [] }, r);
          return (
            o instanceof Promise && (o = await o),
            o.issues.length
              ? {
                  success: !1,
                  error: new e(o.issues.map((e) => R.iR(e, r, a.$W()))),
                }
              : { success: !0, data: o.value }
          );
        },
        de = ce(ae),
        me = (e) => (t, n, i) => {
          const r = i
            ? { ...i, direction: "backward" }
            : { direction: "backward" };
          return oe(e)(t, n, r);
        },
        pe = (e) => (t, n, i) => oe(e)(t, n, i),
        ge = (e) => async (t, n, i) => {
          const r = i
            ? { ...i, direction: "backward" }
            : { direction: "backward" };
          return se(e)(t, n, r);
        },
        fe = (e) => async (t, n, i) => se(e)(t, n, i),
        ve = (e) => (t, n, i) => {
          const r = i
            ? { ...i, direction: "backward" }
            : { direction: "backward" };
          return ue(e)(t, n, r);
        },
        he = (e) => (t, n, i) => ue(e)(t, n, i),
        be = (e) => async (t, n, i) => {
          const r = i
            ? { ...i, direction: "backward" }
            : { direction: "backward" };
          return ce(e)(t, n, r);
        },
        $e = (e) => async (t, n, i) => ce(e)(t, n, i),
        ye = { major: 4, minor: 4, patch: 3 },
        Ie = a.xI("$ZodType", (e, t) => {
          var n;
          e ?? (e = {}),
            (e._zod.def = t),
            (e._zod.bag = e._zod.bag || {}),
            (e._zod.version = ye);
          const i = [...(e._zod.def.checks ?? [])];
          e._zod.traits.has("$ZodCheck") && i.unshift(e);
          for (const t of i) for (const n of t._zod.onattach) n(e);
          if (0 === i.length)
            (n = e._zod).deferred ?? (n.deferred = []),
              e._zod.deferred?.push(() => {
                e._zod.run = e._zod.parse;
              });
          else {
            const t = (e, t, n) => {
                let i,
                  r = R.QH(e);
                for (const o of t) {
                  if (o._zod.def.when) {
                    if (R.rL(e)) continue;
                    if (!o._zod.def.when(e)) continue;
                  } else if (r) continue;
                  const t = e.issues.length,
                    s = o._zod.check(e);
                  if (s instanceof Promise && !1 === n?.async) throw new a.GT();
                  if (i || s instanceof Promise)
                    i = (i ?? Promise.resolve()).then(async () => {
                      await s;
                      e.issues.length !== t && (r || (r = R.QH(e, t)));
                    });
                  else {
                    if (e.issues.length === t) continue;
                    r || (r = R.QH(e, t));
                  }
                }
                return i ? i.then(() => e) : e;
              },
              n = (n, r, o) => {
                if (R.QH(n)) return (n.aborted = !0), n;
                const s = t(r, i, o);
                if (s instanceof Promise) {
                  if (!1 === o.async) throw new a.GT();
                  return s.then((t) => e._zod.parse(t, o));
                }
                return e._zod.parse(s, o);
              };
            e._zod.run = (r, o) => {
              if (o.skipChecks) return e._zod.parse(r, o);
              if ("backward" === o.direction) {
                const t = e._zod.parse(
                  { value: r.value, issues: [] },
                  { ...o, skipChecks: !0 },
                );
                return t instanceof Promise
                  ? t.then((e) => n(e, r, o))
                  : n(t, r, o);
              }
              const s = e._zod.parse(r, o);
              if (s instanceof Promise) {
                if (!1 === o.async) throw new a.GT();
                return s.then((e) => t(e, i, o));
              }
              return t(s, i, o);
            };
          }
          R.gJ(e, "~standard", () => ({
            validate: (t) => {
              try {
                const n = le(e, t);
                return n.success
                  ? { value: n.data }
                  : { issues: n.error?.issues };
              } catch (n) {
                return de(e, t).then((e) =>
                  e.success ? { value: e.data } : { issues: e.error?.issues },
                );
              }
            },
            vendor: "zod",
            version: 1,
          }));
        }),
        _e = a.xI("$ZodString", (e, t) => {
          Ie.init(e, t),
            (e._zod.pattern =
              [...(e?._zod.bag?.patterns ?? [])].pop() ?? z(e._zod.bag)),
            (e._zod.parse = (n, i) => {
              if (t.coerce)
                try {
                  n.value = String(n.value);
                } catch (i) {}
              return (
                "string" == typeof n.value ||
                  n.issues.push({
                    expected: "string",
                    code: "invalid_type",
                    input: n.value,
                    inst: e,
                  }),
                n
              );
            });
        }),
        xe = a.xI("$ZodStringFormat", (e, t) => {
          V.init(e, t), _e.init(e, t);
        }),
        ke = a.xI("$ZodGUID", (e, t) => {
          t.pattern ?? (t.pattern = p), xe.init(e, t);
        }),
        we = a.xI("$ZodUUID", (e, t) => {
          if (t.version) {
            const e = {
              v1: 1,
              v2: 2,
              v3: 3,
              v4: 4,
              v5: 5,
              v6: 6,
              v7: 7,
              v8: 8,
            }[t.version];
            if (void 0 === e)
              throw new Error(`Invalid UUID version: "${t.version}"`);
            t.pattern ?? (t.pattern = g(e));
          } else t.pattern ?? (t.pattern = g());
          xe.init(e, t);
        }),
        Se = a.xI("$ZodEmail", (e, t) => {
          t.pattern ?? (t.pattern = f), xe.init(e, t);
        }),
        De = a.xI("$ZodURL", (e, t) => {
          xe.init(e, t),
            (e._zod.check = (n) => {
              try {
                const i = n.value.trim();
                if (
                  !t.normalize &&
                  t.protocol?.source === k.source &&
                  !/^https?:\/\//i.test(i)
                )
                  return void n.issues.push({
                    code: "invalid_format",
                    format: "url",
                    note: "Invalid URL format",
                    input: n.value,
                    inst: e,
                    continue: !t.abort,
                  });
                const r = new URL(i);
                return (
                  t.hostname &&
                    ((t.hostname.lastIndex = 0),
                    t.hostname.test(r.hostname) ||
                      n.issues.push({
                        code: "invalid_format",
                        format: "url",
                        note: "Invalid hostname",
                        pattern: t.hostname.source,
                        input: n.value,
                        inst: e,
                        continue: !t.abort,
                      })),
                  t.protocol &&
                    ((t.protocol.lastIndex = 0),
                    t.protocol.test(
                      r.protocol.endsWith(":")
                        ? r.protocol.slice(0, -1)
                        : r.protocol,
                    ) ||
                      n.issues.push({
                        code: "invalid_format",
                        format: "url",
                        note: "Invalid protocol",
                        pattern: t.protocol.source,
                        input: n.value,
                        inst: e,
                        continue: !t.abort,
                      })),
                  void (t.normalize ? (n.value = r.href) : (n.value = i))
                );
              } catch (i) {
                n.issues.push({
                  code: "invalid_format",
                  format: "url",
                  input: n.value,
                  inst: e,
                  continue: !t.abort,
                });
              }
            });
        }),
        Oe = a.xI("$ZodEmoji", (e, t) => {
          t.pattern ?? (t.pattern = h()), xe.init(e, t);
        }),
        Ue = a.xI("$ZodNanoID", (e, t) => {
          t.pattern ?? (t.pattern = d), xe.init(e, t);
        }),
        Ne = a.xI("$ZodCUID", (e, t) => {
          t.pattern ?? (t.pattern = o), xe.init(e, t);
        }),
        ze = a.xI("$ZodCUID2", (e, t) => {
          t.pattern ?? (t.pattern = s), xe.init(e, t);
        }),
        Ee = a.xI("$ZodULID", (e, t) => {
          t.pattern ?? (t.pattern = u), xe.init(e, t);
        }),
        Pe = a.xI("$ZodXID", (e, t) => {
          t.pattern ?? (t.pattern = l), xe.init(e, t);
        }),
        je = a.xI("$ZodKSUID", (e, t) => {
          t.pattern ?? (t.pattern = c), xe.init(e, t);
        }),
        Ae = a.xI("$ZodISODateTime", (e, t) => {
          t.pattern ?? (t.pattern = N(t)), xe.init(e, t);
        }),
        Te = a.xI("$ZodISODate", (e, t) => {
          t.pattern ?? (t.pattern = D), xe.init(e, t);
        }),
        Ce = a.xI("$ZodISOTime", (e, t) => {
          t.pattern ?? (t.pattern = U(t)), xe.init(e, t);
        }),
        Re = a.xI("$ZodISODuration", (e, t) => {
          t.pattern ?? (t.pattern = m), xe.init(e, t);
        }),
        Le = a.xI("$ZodIPv4", (e, t) => {
          t.pattern ?? (t.pattern = b),
            xe.init(e, t),
            (e._zod.bag.format = "ipv4");
        }),
        Be = a.xI("$ZodIPv6", (e, t) => {
          t.pattern ?? (t.pattern = $),
            xe.init(e, t),
            (e._zod.bag.format = "ipv6"),
            (e._zod.check = (n) => {
              try {
                new URL(`http://[${n.value}]`);
              } catch {
                n.issues.push({
                  code: "invalid_format",
                  format: "ipv6",
                  input: n.value,
                  inst: e,
                  continue: !t.abort,
                });
              }
            });
        }),
        Ge = a.xI("$ZodCIDRv4", (e, t) => {
          t.pattern ?? (t.pattern = y), xe.init(e, t);
        }),
        Me = a.xI("$ZodCIDRv6", (e, t) => {
          t.pattern ?? (t.pattern = I),
            xe.init(e, t),
            (e._zod.check = (n) => {
              const i = n.value.split("/");
              try {
                if (2 !== i.length) throw new Error();
                const [e, t] = i;
                if (!t) throw new Error();
                const n = Number(t);
                if (`${n}` !== t) throw new Error();
                if (n < 0 || n > 128) throw new Error();
                new URL(`http://[${e}]`);
              } catch {
                n.issues.push({
                  code: "invalid_format",
                  format: "cidrv6",
                  input: n.value,
                  inst: e,
                  continue: !t.abort,
                });
              }
            });
        });
      function We(e) {
        if ("" === e) return !0;
        if (/\s/.test(e)) return !1;
        if (e.length % 4 != 0) return !1;
        try {
          return atob(e), !0;
        } catch {
          return !1;
        }
      }
      const Ze = a.xI("$ZodBase64", (e, t) => {
        t.pattern ?? (t.pattern = _),
          xe.init(e, t),
          (e._zod.bag.contentEncoding = "base64"),
          (e._zod.check = (n) => {
            We(n.value) ||
              n.issues.push({
                code: "invalid_format",
                format: "base64",
                input: n.value,
                inst: e,
                continue: !t.abort,
              });
          });
      });
      const Je = a.xI("$ZodBase64URL", (e, t) => {
          t.pattern ?? (t.pattern = x),
            xe.init(e, t),
            (e._zod.bag.contentEncoding = "base64url"),
            (e._zod.check = (n) => {
              (function (e) {
                if (!x.test(e)) return !1;
                const t = e.replace(/[-_]/g, (e) => ("-" === e ? "+" : "/"));
                return We(t.padEnd(4 * Math.ceil(t.length / 4), "="));
              })(n.value) ||
                n.issues.push({
                  code: "invalid_format",
                  format: "base64url",
                  input: n.value,
                  inst: e,
                  continue: !t.abort,
                });
            });
        }),
        Fe = a.xI("$ZodE164", (e, t) => {
          t.pattern ?? (t.pattern = w), xe.init(e, t);
        });
      const Ke = a.xI("$ZodJWT", (e, t) => {
          xe.init(e, t),
            (e._zod.check = (n) => {
              (function (e, t = null) {
                try {
                  const n = e.split(".");
                  if (3 !== n.length) return !1;
                  const [i] = n;
                  if (!i) return !1;
                  const r = JSON.parse(atob(i));
                  return !(
                    ("typ" in r && "JWT" !== r?.typ) ||
                    !r.alg ||
                    (t && (!("alg" in r) || r.alg !== t))
                  );
                } catch {
                  return !1;
                }
              })(n.value, t.alg) ||
                n.issues.push({
                  code: "invalid_format",
                  format: "jwt",
                  input: n.value,
                  inst: e,
                  continue: !t.abort,
                });
            });
        }),
        Ve = a.xI("$ZodNumber", (e, t) => {
          Ie.init(e, t),
            (e._zod.pattern = e._zod.bag.pattern ?? j),
            (e._zod.parse = (n, i) => {
              if (t.coerce)
                try {
                  n.value = Number(n.value);
                } catch (e) {}
              const r = n.value;
              if (
                "number" == typeof r &&
                !Number.isNaN(r) &&
                Number.isFinite(r)
              )
                return n;
              const a =
                "number" == typeof r
                  ? Number.isNaN(r)
                    ? "NaN"
                    : Number.isFinite(r)
                      ? void 0
                      : "Infinity"
                  : void 0;
              return (
                n.issues.push({
                  expected: "number",
                  code: "invalid_type",
                  input: r,
                  inst: e,
                  ...(a ? { received: a } : {}),
                }),
                n
              );
            });
        }),
        He = a.xI("$ZodNumberFormat", (e, t) => {
          Z.init(e, t), Ve.init(e, t);
        }),
        qe = a.xI("$ZodBoolean", (e, t) => {
          Ie.init(e, t),
            (e._zod.pattern = A),
            (e._zod.parse = (n, i) => {
              if (t.coerce)
                try {
                  n.value = Boolean(n.value);
                } catch (e) {}
              const r = n.value;
              return (
                "boolean" == typeof r ||
                  n.issues.push({
                    expected: "boolean",
                    code: "invalid_type",
                    input: r,
                    inst: e,
                  }),
                n
              );
            });
        }),
        Xe = a.xI("$ZodBigInt", (e, t) => {
          Ie.init(e, t),
            (e._zod.pattern = E),
            (e._zod.parse = (n, i) => {
              if (t.coerce)
                try {
                  n.value = BigInt(n.value);
                } catch (e) {}
              return (
                "bigint" == typeof n.value ||
                  n.issues.push({
                    expected: "bigint",
                    code: "invalid_type",
                    input: n.value,
                    inst: e,
                  }),
                n
              );
            });
        }),
        Ye = a.xI("$ZodUnknown", (e, t) => {
          Ie.init(e, t), (e._zod.parse = (e) => e);
        }),
        Qe = a.xI("$ZodNever", (e, t) => {
          Ie.init(e, t),
            (e._zod.parse = (t, n) => (
              t.issues.push({
                expected: "never",
                code: "invalid_type",
                input: t.value,
                inst: e,
              }),
              t
            ));
        }),
        et = a.xI("$ZodDate", (e, t) => {
          Ie.init(e, t),
            (e._zod.parse = (n, i) => {
              if (t.coerce)
                try {
                  n.value = new Date(n.value);
                } catch (e) {}
              const r = n.value,
                a = r instanceof Date;
              return (
                (a && !Number.isNaN(r.getTime())) ||
                  n.issues.push({
                    expected: "date",
                    code: "invalid_type",
                    input: r,
                    ...(a ? { received: "Invalid Date" } : {}),
                    inst: e,
                  }),
                n
              );
            });
        });
      function tt(e, t, n) {
        e.issues.length && t.issues.push(...R.lQ(n, e.issues)),
          (t.value[n] = e.value);
      }
      const nt = a.xI("$ZodArray", (e, t) => {
        Ie.init(e, t),
          (e._zod.parse = (n, i) => {
            const r = n.value;
            if (!Array.isArray(r))
              return (
                n.issues.push({
                  expected: "array",
                  code: "invalid_type",
                  input: r,
                  inst: e,
                }),
                n
              );
            n.value = Array(r.length);
            const a = [];
            for (let e = 0; e < r.length; e++) {
              const o = r[e],
                s = t.element._zod.run({ value: o, issues: [] }, i);
              s instanceof Promise
                ? a.push(s.then((t) => tt(t, n, e)))
                : tt(s, n, e);
            }
            return a.length ? Promise.all(a).then(() => n) : n;
          });
      });
      function it(e, t, n, i, r, a) {
        const o = n in i;
        if (e.issues.length) {
          if (r && a && !o) return;
          t.issues.push(...R.lQ(n, e.issues));
        }
        o || r
          ? void 0 === e.value
            ? o && (t.value[n] = void 0)
            : (t.value[n] = e.value)
          : e.issues.length ||
            t.issues.push({
              code: "invalid_type",
              expected: "nonoptional",
              input: void 0,
              path: [n],
            });
      }
      function rt(e) {
        const t = Object.keys(e.shape);
        for (const n of t)
          if (!e.shape?.[n]?._zod?.traits?.has("$ZodType"))
            throw new Error(
              `Invalid element at key "${n}": expected a Zod schema`,
            );
        const n = R.NM(e.shape);
        return {
          ...e,
          keys: t,
          keySet: new Set(t),
          numKeys: t.length,
          optionalKeys: new Set(n),
        };
      }
      function at(e, t, n, i, r, a) {
        const o = [],
          s = r.keySet,
          u = r.catchall._zod,
          l = u.def.type,
          c = "optional" === u.optin,
          d = "optional" === u.optout;
        for (const r in t) {
          if ("__proto__" === r) continue;
          if (s.has(r)) continue;
          if ("never" === l) {
            o.push(r);
            continue;
          }
          const a = u.run({ value: t[r], issues: [] }, i);
          a instanceof Promise
            ? e.push(a.then((e) => it(e, n, r, t, c, d)))
            : it(a, n, r, t, c, d);
        }
        return (
          o.length &&
            n.issues.push({
              code: "unrecognized_keys",
              keys: o,
              input: t,
              inst: a,
            }),
          e.length ? Promise.all(e).then(() => n) : n
        );
      }
      const ot = a.xI("$ZodObject", (e, t) => {
          Ie.init(e, t);
          const n = Object.getOwnPropertyDescriptor(t, "shape");
          if (!n?.get) {
            const e = t.shape;
            Object.defineProperty(t, "shape", {
              get: () => {
                const n = { ...e };
                return Object.defineProperty(t, "shape", { value: n }), n;
              },
            });
          }
          const i = R.PO(() => rt(t));
          R.gJ(e._zod, "propValues", () => {
            const e = t.shape,
              n = {};
            for (const t in e) {
              const i = e[t]._zod;
              if (i.values) {
                n[t] ?? (n[t] = new Set());
                for (const e of i.values) n[t].add(e);
              }
            }
            return n;
          });
          const r = R.Gv,
            a = t.catchall;
          let o;
          e._zod.parse = (t, n) => {
            o ?? (o = i.value);
            const s = t.value;
            if (!r(s))
              return (
                t.issues.push({
                  expected: "object",
                  code: "invalid_type",
                  input: s,
                  inst: e,
                }),
                t
              );
            t.value = {};
            const u = [],
              l = o.shape;
            for (const e of o.keys) {
              const i = l[e],
                r = "optional" === i._zod.optin,
                a = "optional" === i._zod.optout,
                o = i._zod.run({ value: s[e], issues: [] }, n);
              o instanceof Promise
                ? u.push(o.then((n) => it(n, t, e, s, r, a)))
                : it(o, t, e, s, r, a);
            }
            return a
              ? at(u, s, t, n, i.value, e)
              : u.length
                ? Promise.all(u).then(() => t)
                : t;
          };
        }),
        st = a.xI("$ZodObjectJIT", (e, t) => {
          ot.init(e, t);
          const n = e._zod.parse,
            i = R.PO(() => rt(t));
          let r;
          const o = R.Gv,
            s = !a.cr.jitless,
            u = R.hI,
            l = s && u.value,
            c = t.catchall;
          let d;
          e._zod.parse = (a, u) => {
            d ?? (d = i.value);
            const m = a.value;
            return o(m)
              ? s && l && !1 === u?.async && !0 !== u.jitless
                ? (r ||
                    (r = ((e) => {
                      const t = new ne(["shape", "payload", "ctx"]),
                        n = i.value,
                        r = (e) => {
                          const t = R.UQ(e);
                          return `shape[${t}]._zod.run({ value: input[${t}], issues: [] }, ctx)`;
                        };
                      t.write("const input = payload.value;");
                      const a = Object.create(null);
                      let o = 0;
                      for (const e of n.keys) a[e] = "key_" + o++;
                      t.write("const newResult = {};");
                      for (const i of n.keys) {
                        const n = a[i],
                          o = R.UQ(i),
                          s = e[i],
                          u = "optional" === s?._zod?.optin,
                          l = "optional" === s?._zod?.optout;
                        t.write(`const ${n} = ${r(i)};`),
                          u && l
                            ? t.write(
                                `\n        if (${n}.issues.length) {\n          if (${o} in input) {\n            payload.issues = payload.issues.concat(${n}.issues.map(iss => ({\n              ...iss,\n              path: iss.path ? [${o}, ...iss.path] : [${o}]\n            })));\n          }\n        }\n        \n        if (${n}.value === undefined) {\n          if (${o} in input) {\n            newResult[${o}] = undefined;\n          }\n        } else {\n          newResult[${o}] = ${n}.value;\n        }\n        \n      `,
                              )
                            : u
                              ? t.write(
                                  `\n        if (${n}.issues.length) {\n          payload.issues = payload.issues.concat(${n}.issues.map(iss => ({\n            ...iss,\n            path: iss.path ? [${o}, ...iss.path] : [${o}]\n          })));\n        }\n        \n        if (${n}.value === undefined) {\n          if (${o} in input) {\n            newResult[${o}] = undefined;\n          }\n        } else {\n          newResult[${o}] = ${n}.value;\n        }\n        \n      `,
                                )
                              : t.write(
                                  `\n        const ${n}_present = ${o} in input;\n        if (${n}.issues.length) {\n          payload.issues = payload.issues.concat(${n}.issues.map(iss => ({\n            ...iss,\n            path: iss.path ? [${o}, ...iss.path] : [${o}]\n          })));\n        }\n        if (!${n}_present && !${n}.issues.length) {\n          payload.issues.push({\n            code: "invalid_type",\n            expected: "nonoptional",\n            input: undefined,\n            path: [${o}]\n          });\n        }\n\n        if (${n}_present) {\n          if (${n}.value === undefined) {\n            newResult[${o}] = undefined;\n          } else {\n            newResult[${o}] = ${n}.value;\n          }\n        }\n\n      `,
                                );
                      }
                      t.write("payload.value = newResult;"),
                        t.write("return payload;");
                      const s = t.compile();
                      return (t, n) => s(e, t, n);
                    })(t.shape)),
                  (a = r(a, u)),
                  c ? at([], m, a, u, d, e) : a)
                : n(a, u)
              : (a.issues.push({
                  expected: "object",
                  code: "invalid_type",
                  input: m,
                  inst: e,
                }),
                a);
          };
        });
      function ut(e, t, n, i) {
        for (const n of e)
          if (0 === n.issues.length) return (t.value = n.value), t;
        const r = e.filter((e) => !R.QH(e));
        return 1 === r.length
          ? ((t.value = r[0].value), r[0])
          : (t.issues.push({
              code: "invalid_union",
              input: t.value,
              inst: n,
              errors: e.map((e) => e.issues.map((e) => R.iR(e, i, a.$W()))),
            }),
            t);
      }
      const lt = a.xI("$ZodUnion", (e, t) => {
        Ie.init(e, t),
          R.gJ(e._zod, "optin", () =>
            t.options.some((e) => "optional" === e._zod.optin)
              ? "optional"
              : void 0,
          ),
          R.gJ(e._zod, "optout", () =>
            t.options.some((e) => "optional" === e._zod.optout)
              ? "optional"
              : void 0,
          ),
          R.gJ(e._zod, "values", () => {
            if (t.options.every((e) => e._zod.values))
              return new Set(
                t.options.flatMap((e) => Array.from(e._zod.values)),
              );
          }),
          R.gJ(e._zod, "pattern", () => {
            if (t.options.every((e) => e._zod.pattern)) {
              const e = t.options.map((e) => e._zod.pattern);
              return new RegExp(
                `^(${e.map((e) => R.p6(e.source)).join("|")})$`,
              );
            }
          });
        const n = 1 === t.options.length ? t.options[0]._zod.run : null;
        e._zod.parse = (i, r) => {
          if (n) return n(i, r);
          let a = !1;
          const o = [];
          for (const e of t.options) {
            const t = e._zod.run({ value: i.value, issues: [] }, r);
            if (t instanceof Promise) o.push(t), (a = !0);
            else {
              if (0 === t.issues.length) return t;
              o.push(t);
            }
          }
          return a
            ? Promise.all(o).then((t) => ut(t, i, e, r))
            : ut(o, i, e, r);
        };
      });
      const ct = a.xI("$ZodIntersection", (e, t) => {
        Ie.init(e, t),
          (e._zod.parse = (e, n) => {
            const i = e.value,
              r = t.left._zod.run({ value: i, issues: [] }, n),
              a = t.right._zod.run({ value: i, issues: [] }, n);
            return r instanceof Promise || a instanceof Promise
              ? Promise.all([r, a]).then(([t, n]) => mt(e, t, n))
              : mt(e, r, a);
          });
      });
      function dt(e, t) {
        if (e === t) return { valid: !0, data: e };
        if (e instanceof Date && t instanceof Date && +e === +t)
          return { valid: !0, data: e };
        if (R.Qd(e) && R.Qd(t)) {
          const n = Object.keys(t),
            i = Object.keys(e).filter((e) => -1 !== n.indexOf(e)),
            r = { ...e, ...t };
          for (const n of i) {
            const i = dt(e[n], t[n]);
            if (!i.valid)
              return { valid: !1, mergeErrorPath: [n, ...i.mergeErrorPath] };
            r[n] = i.data;
          }
          return { valid: !0, data: r };
        }
        if (Array.isArray(e) && Array.isArray(t)) {
          if (e.length !== t.length) return { valid: !1, mergeErrorPath: [] };
          const n = [];
          for (let i = 0; i < e.length; i++) {
            const r = dt(e[i], t[i]);
            if (!r.valid)
              return { valid: !1, mergeErrorPath: [i, ...r.mergeErrorPath] };
            n.push(r.data);
          }
          return { valid: !0, data: n };
        }
        return { valid: !1, mergeErrorPath: [] };
      }
      function mt(e, t, n) {
        const i = new Map();
        let r;
        for (const n of t.issues)
          if ("unrecognized_keys" === n.code) {
            r ?? (r = n);
            for (const e of n.keys) i.has(e) || i.set(e, {}), (i.get(e).l = !0);
          } else e.issues.push(n);
        for (const t of n.issues)
          if ("unrecognized_keys" === t.code)
            for (const e of t.keys) i.has(e) || i.set(e, {}), (i.get(e).r = !0);
          else e.issues.push(t);
        const a = [...i].filter(([, e]) => e.l && e.r).map(([e]) => e);
        if ((a.length && r && e.issues.push({ ...r, keys: a }), R.QH(e)))
          return e;
        const o = dt(t.value, n.value);
        if (!o.valid)
          throw new Error(
            `Unmergable intersection. Error path: ${JSON.stringify(o.mergeErrorPath)}`,
          );
        return (e.value = o.data), e;
      }
      const pt = a.xI("$ZodEnum", (e, t) => {
          Ie.init(e, t);
          const n = R.w5(t.entries),
            i = new Set(n);
          (e._zod.values = i),
            (e._zod.pattern = new RegExp(
              `^(${n
                .filter((e) => R.qQ.has(typeof e))
                .map((e) => ("string" == typeof e ? R.$f(e) : e.toString()))
                .join("|")})$`,
            )),
            (e._zod.parse = (t, r) => {
              const a = t.value;
              return (
                i.has(a) ||
                  t.issues.push({
                    code: "invalid_value",
                    values: n,
                    input: a,
                    inst: e,
                  }),
                t
              );
            });
        }),
        gt = a.xI("$ZodLiteral", (e, t) => {
          if ((Ie.init(e, t), 0 === t.values.length))
            throw new Error(
              "Cannot create literal schema with no valid values",
            );
          const n = new Set(t.values);
          (e._zod.values = n),
            (e._zod.pattern = new RegExp(
              `^(${t.values.map((e) => ("string" == typeof e ? R.$f(e) : e ? R.$f(e.toString()) : String(e))).join("|")})$`,
            )),
            (e._zod.parse = (i, r) => {
              const a = i.value;
              return (
                n.has(a) ||
                  i.issues.push({
                    code: "invalid_value",
                    values: t.values,
                    input: a,
                    inst: e,
                  }),
                i
              );
            });
        }),
        ft = a.xI("$ZodTransform", (e, t) => {
          Ie.init(e, t),
            (e._zod.optin = "optional"),
            (e._zod.parse = (n, i) => {
              if ("backward" === i.direction)
                throw new a.cV(e.constructor.name);
              const r = t.transform(n.value, n);
              if (i.async) {
                return (r instanceof Promise ? r : Promise.resolve(r)).then(
                  (e) => ((n.value = e), (n.fallback = !0), n),
                );
              }
              if (r instanceof Promise) throw new a.GT();
              return (n.value = r), (n.fallback = !0), n;
            });
        });
      function vt(e, t) {
        return void 0 === t && (e.issues.length || e.fallback)
          ? { issues: [], value: void 0 }
          : e;
      }
      const ht = a.xI("$ZodOptional", (e, t) => {
          Ie.init(e, t),
            (e._zod.optin = "optional"),
            (e._zod.optout = "optional"),
            R.gJ(e._zod, "values", () =>
              t.innerType._zod.values
                ? new Set([...t.innerType._zod.values, void 0])
                : void 0,
            ),
            R.gJ(e._zod, "pattern", () => {
              const e = t.innerType._zod.pattern;
              return e ? new RegExp(`^(${R.p6(e.source)})?$`) : void 0;
            }),
            (e._zod.parse = (e, n) => {
              if ("optional" === t.innerType._zod.optin) {
                const i = e.value,
                  r = t.innerType._zod.run(e, n);
                return r instanceof Promise
                  ? r.then((e) => vt(e, i))
                  : vt(r, i);
              }
              return void 0 === e.value ? e : t.innerType._zod.run(e, n);
            });
        }),
        bt = a.xI("$ZodExactOptional", (e, t) => {
          ht.init(e, t),
            R.gJ(e._zod, "values", () => t.innerType._zod.values),
            R.gJ(e._zod, "pattern", () => t.innerType._zod.pattern),
            (e._zod.parse = (e, n) => t.innerType._zod.run(e, n));
        }),
        $t = a.xI("$ZodNullable", (e, t) => {
          Ie.init(e, t),
            R.gJ(e._zod, "optin", () => t.innerType._zod.optin),
            R.gJ(e._zod, "optout", () => t.innerType._zod.optout),
            R.gJ(e._zod, "pattern", () => {
              const e = t.innerType._zod.pattern;
              return e ? new RegExp(`^(${R.p6(e.source)}|null)$`) : void 0;
            }),
            R.gJ(e._zod, "values", () =>
              t.innerType._zod.values
                ? new Set([...t.innerType._zod.values, null])
                : void 0,
            ),
            (e._zod.parse = (e, n) =>
              null === e.value ? e : t.innerType._zod.run(e, n));
        }),
        yt = a.xI("$ZodDefault", (e, t) => {
          Ie.init(e, t),
            (e._zod.optin = "optional"),
            R.gJ(e._zod, "values", () => t.innerType._zod.values),
            (e._zod.parse = (e, n) => {
              if ("backward" === n.direction) return t.innerType._zod.run(e, n);
              if (void 0 === e.value) return (e.value = t.defaultValue), e;
              const i = t.innerType._zod.run(e, n);
              return i instanceof Promise ? i.then((e) => It(e, t)) : It(i, t);
            });
        });
      function It(e, t) {
        return void 0 === e.value && (e.value = t.defaultValue), e;
      }
      const _t = a.xI("$ZodPrefault", (e, t) => {
          Ie.init(e, t),
            (e._zod.optin = "optional"),
            R.gJ(e._zod, "values", () => t.innerType._zod.values),
            (e._zod.parse = (e, n) => (
              "backward" === n.direction ||
                (void 0 === e.value && (e.value = t.defaultValue)),
              t.innerType._zod.run(e, n)
            ));
        }),
        xt = a.xI("$ZodNonOptional", (e, t) => {
          Ie.init(e, t),
            R.gJ(e._zod, "values", () => {
              const e = t.innerType._zod.values;
              return e ? new Set([...e].filter((e) => void 0 !== e)) : void 0;
            }),
            (e._zod.parse = (n, i) => {
              const r = t.innerType._zod.run(n, i);
              return r instanceof Promise ? r.then((t) => kt(t, e)) : kt(r, e);
            });
        });
      function kt(e, t) {
        return (
          e.issues.length ||
            void 0 !== e.value ||
            e.issues.push({
              code: "invalid_type",
              expected: "nonoptional",
              input: e.value,
              inst: t,
            }),
          e
        );
      }
      const wt = a.xI("$ZodCatch", (e, t) => {
          Ie.init(e, t),
            (e._zod.optin = "optional"),
            R.gJ(e._zod, "optout", () => t.innerType._zod.optout),
            R.gJ(e._zod, "values", () => t.innerType._zod.values),
            (e._zod.parse = (e, n) => {
              if ("backward" === n.direction) return t.innerType._zod.run(e, n);
              const i = t.innerType._zod.run(e, n);
              return i instanceof Promise
                ? i.then(
                    (i) => (
                      (e.value = i.value),
                      i.issues.length &&
                        ((e.value = t.catchValue({
                          ...e,
                          error: {
                            issues: i.issues.map((e) => R.iR(e, n, a.$W())),
                          },
                          input: e.value,
                        })),
                        (e.issues = []),
                        (e.fallback = !0)),
                      e
                    ),
                  )
                : ((e.value = i.value),
                  i.issues.length &&
                    ((e.value = t.catchValue({
                      ...e,
                      error: {
                        issues: i.issues.map((e) => R.iR(e, n, a.$W())),
                      },
                      input: e.value,
                    })),
                    (e.issues = []),
                    (e.fallback = !0)),
                  e);
            });
        }),
        St = a.xI("$ZodPipe", (e, t) => {
          Ie.init(e, t),
            R.gJ(e._zod, "values", () => t.in._zod.values),
            R.gJ(e._zod, "optin", () => t.in._zod.optin),
            R.gJ(e._zod, "optout", () => t.out._zod.optout),
            R.gJ(e._zod, "propValues", () => t.in._zod.propValues),
            (e._zod.parse = (e, n) => {
              if ("backward" === n.direction) {
                const i = t.out._zod.run(e, n);
                return i instanceof Promise
                  ? i.then((e) => Dt(e, t.in, n))
                  : Dt(i, t.in, n);
              }
              const i = t.in._zod.run(e, n);
              return i instanceof Promise
                ? i.then((e) => Dt(e, t.out, n))
                : Dt(i, t.out, n);
            });
        });
      function Dt(e, t, n) {
        return e.issues.length
          ? ((e.aborted = !0), e)
          : t._zod.run(
              { value: e.value, issues: e.issues, fallback: e.fallback },
              n,
            );
      }
      const Ot = a.xI("$ZodCodec", (e, t) => {
        Ie.init(e, t),
          R.gJ(e._zod, "values", () => t.in._zod.values),
          R.gJ(e._zod, "optin", () => t.in._zod.optin),
          R.gJ(e._zod, "optout", () => t.out._zod.optout),
          R.gJ(e._zod, "propValues", () => t.in._zod.propValues),
          (e._zod.parse = (e, n) => {
            if ("forward" === (n.direction || "forward")) {
              const i = t.in._zod.run(e, n);
              return i instanceof Promise
                ? i.then((e) => Ut(e, t, n))
                : Ut(i, t, n);
            }
            {
              const i = t.out._zod.run(e, n);
              return i instanceof Promise
                ? i.then((e) => Ut(e, t, n))
                : Ut(i, t, n);
            }
          });
      });
      function Ut(e, t, n) {
        if (e.issues.length) return (e.aborted = !0), e;
        if ("forward" === (n.direction || "forward")) {
          const i = t.transform(e.value, e);
          return i instanceof Promise
            ? i.then((i) => Nt(e, i, t.out, n))
            : Nt(e, i, t.out, n);
        }
        {
          const i = t.reverseTransform(e.value, e);
          return i instanceof Promise
            ? i.then((i) => Nt(e, i, t.in, n))
            : Nt(e, i, t.in, n);
        }
      }
      function Nt(e, t, n, i) {
        return e.issues.length
          ? ((e.aborted = !0), e)
          : n._zod.run({ value: t, issues: e.issues }, i);
      }
      const zt = a.xI("$ZodReadonly", (e, t) => {
        Ie.init(e, t),
          R.gJ(e._zod, "propValues", () => t.innerType._zod.propValues),
          R.gJ(e._zod, "values", () => t.innerType._zod.values),
          R.gJ(e._zod, "optin", () => t.innerType?._zod?.optin),
          R.gJ(e._zod, "optout", () => t.innerType?._zod?.optout),
          (e._zod.parse = (e, n) => {
            if ("backward" === n.direction) return t.innerType._zod.run(e, n);
            const i = t.innerType._zod.run(e, n);
            return i instanceof Promise ? i.then(Et) : Et(i);
          });
      });
      function Et(e) {
        return (e.value = Object.freeze(e.value)), e;
      }
      const Pt = a.xI("$ZodCustom", (e, t) => {
        L.init(e, t),
          Ie.init(e, t),
          (e._zod.parse = (e, t) => e),
          (e._zod.check = (n) => {
            const i = n.value,
              r = t.fn(i);
            if (r instanceof Promise) return r.then((t) => jt(t, n, i, e));
            jt(r, n, i, e);
          });
      });
      function jt(e, t, n, i) {
        if (!e) {
          const e = {
            code: "custom",
            input: n,
            inst: i,
            path: [...(i._zod.def.path ?? [])],
            continue: !i._zod.def.abort,
          };
          i._zod.def.params && (e.params = i._zod.def.params),
            t.issues.push(R.sn(e));
        }
      }
      var At;
      Symbol("ZodOutput"), Symbol("ZodInput");
      class Tt {
        constructor() {
          (this._map = new WeakMap()), (this._idmap = new Map());
        }
        add(e, ...t) {
          const n = t[0];
          return (
            this._map.set(e, n),
            n && "object" == typeof n && "id" in n && this._idmap.set(n.id, e),
            this
          );
        }
        clear() {
          return (this._map = new WeakMap()), (this._idmap = new Map()), this;
        }
        remove(e) {
          const t = this._map.get(e);
          return (
            t && "object" == typeof t && "id" in t && this._idmap.delete(t.id),
            this._map.delete(e),
            this
          );
        }
        get(e) {
          const t = e._zod.parent;
          if (t) {
            const n = { ...(this.get(t) ?? {}) };
            delete n.id;
            const i = { ...n, ...this._map.get(e) };
            return Object.keys(i).length ? i : void 0;
          }
          return this._map.get(e);
        }
        has(e) {
          return this._map.has(e);
        }
      }
      (At = globalThis).__zod_globalRegistry ??
        (At.__zod_globalRegistry = new Tt());
      const Ct = globalThis.__zod_globalRegistry;
      function Rt(e, t) {
        return new e({
          type: "string",
          format: "guid",
          check: "string_format",
          abort: !1,
          ...R.A2(t),
        });
      }
      function Lt(e, t) {
        return new G({
          check: "less_than",
          ...R.A2(t),
          value: e,
          inclusive: !1,
        });
      }
      function Bt(e, t) {
        return new G({
          check: "less_than",
          ...R.A2(t),
          value: e,
          inclusive: !0,
        });
      }
      function Gt(e, t) {
        return new M({
          check: "greater_than",
          ...R.A2(t),
          value: e,
          inclusive: !1,
        });
      }
      function Mt(e, t) {
        return new M({
          check: "greater_than",
          ...R.A2(t),
          value: e,
          inclusive: !0,
        });
      }
      function Wt(e, t) {
        return new W({ check: "multiple_of", ...R.A2(t), value: e });
      }
      function Zt(e, t) {
        return new J({ check: "max_length", ...R.A2(t), maximum: e });
      }
      function Jt(e, t) {
        return new F({ check: "min_length", ...R.A2(t), minimum: e });
      }
      function Ft(e, t) {
        return new K({ check: "length_equals", ...R.A2(t), length: e });
      }
      function Kt(e) {
        return new te({ check: "overwrite", tx: e });
      }
      function Vt(e, t) {
        const n = (function (e, t) {
          const n = new L({ check: "custom", ...R.A2(t) });
          return (n._zod.check = e), n;
        })(
          (t) => (
            (t.addIssue = (e) => {
              if ("string" == typeof e)
                t.issues.push(R.sn(e, t.value, n._zod.def));
              else {
                const i = e;
                i.fatal && (i.continue = !1),
                  i.code ?? (i.code = "custom"),
                  i.input ?? (i.input = t.value),
                  i.inst ?? (i.inst = n),
                  i.continue ?? (i.continue = !n._zod.def.abort),
                  t.issues.push(R.sn(i));
              }
            }),
            e(t.value, t)
          ),
          t,
        );
        return n;
      }
      function Ht(e) {
        let t = e?.target ?? "draft-2020-12";
        return (
          "draft-4" === t && (t = "draft-04"),
          "draft-7" === t && (t = "draft-07"),
          {
            processors: e.processors ?? {},
            metadataRegistry: e?.metadata ?? Ct,
            target: t,
            unrepresentable: e?.unrepresentable ?? "throw",
            override: e?.override ?? (() => {}),
            io: e?.io ?? "output",
            counter: 0,
            seen: new Map(),
            cycles: e?.cycles ?? "ref",
            reused: e?.reused ?? "inline",
            external: e?.external ?? void 0,
          }
        );
      }
      function qt(e, t, n = { path: [], schemaPath: [] }) {
        var i;
        const r = e._zod.def,
          a = t.seen.get(e);
        if (a) {
          a.count++;
          return n.schemaPath.includes(e) && (a.cycle = n.path), a.schema;
        }
        const o = { schema: {}, count: 1, cycle: void 0, path: n.path };
        t.seen.set(e, o);
        const s = e._zod.toJSONSchema?.();
        if (s) o.schema = s;
        else {
          const i = { ...n, schemaPath: [...n.schemaPath, e], path: n.path };
          if (e._zod.processJSONSchema)
            e._zod.processJSONSchema(t, o.schema, i);
          else {
            const n = o.schema,
              a = t.processors[r.type];
            if (!a)
              throw new Error(
                `[toJSONSchema]: Non-representable type encountered: ${r.type}`,
              );
            a(e, t, n, i);
          }
          const a = e._zod.parent;
          a &&
            (o.ref || (o.ref = a), qt(a, t, i), (t.seen.get(a).isParent = !0));
        }
        const u = t.metadataRegistry.get(e);
        u && Object.assign(o.schema, u),
          "input" === t.io &&
            Qt(e) &&
            (delete o.schema.examples, delete o.schema.default),
          "input" === t.io &&
            "_prefault" in o.schema &&
            ((i = o.schema).default ?? (i.default = o.schema._prefault)),
          delete o.schema._prefault;
        return t.seen.get(e).schema;
      }
      function Xt(e, t) {
        const n = e.seen.get(t);
        if (!n) throw new Error("Unprocessed schema. This is a bug in Zod.");
        const i = new Map();
        for (const t of e.seen.entries()) {
          const n = e.metadataRegistry.get(t[0])?.id;
          if (n) {
            const e = i.get(n);
            if (e && e !== t[0])
              throw new Error(
                `Duplicate schema id "${n}" detected during JSON Schema conversion. Two different schemas cannot share the same id when converted together.`,
              );
            i.set(n, t[0]);
          }
        }
        const r = (t) => {
          if (t[1].schema.$ref) return;
          const i = t[1],
            { ref: r, defId: a } = ((t) => {
              const i = "draft-2020-12" === e.target ? "$defs" : "definitions";
              if (e.external) {
                const n = e.external.registry.get(t[0])?.id,
                  r = e.external.uri ?? ((e) => e);
                if (n) return { ref: r(n) };
                const a =
                  t[1].defId ?? t[1].schema.id ?? "schema" + e.counter++;
                return (
                  (t[1].defId = a),
                  { defId: a, ref: `${r("__shared")}#/${i}/${a}` }
                );
              }
              if (t[1] === n) return { ref: "#" };
              const r = `#/${i}/`,
                a = t[1].schema.id ?? "__schema" + e.counter++;
              return { defId: a, ref: r + a };
            })(t);
          (i.def = { ...i.schema }), a && (i.defId = a);
          const o = i.schema;
          for (const e in o) delete o[e];
          o.$ref = r;
        };
        if ("throw" === e.cycles)
          for (const t of e.seen.entries()) {
            const e = t[1];
            if (e.cycle)
              throw new Error(
                `Cycle detected: #/${e.cycle?.join("/")}/<root>\n\nSet the \`cycles\` parameter to \`"ref"\` to resolve cyclical schemas with defs.`,
              );
          }
        for (const n of e.seen.entries()) {
          const i = n[1];
          if (t === n[0]) {
            r(n);
            continue;
          }
          if (e.external) {
            const i = e.external.registry.get(n[0])?.id;
            if (t !== n[0] && i) {
              r(n);
              continue;
            }
          }
          const a = e.metadataRegistry.get(n[0])?.id;
          a ? r(n) : (i.cycle || (i.count > 1 && "ref" === e.reused)) && r(n);
        }
      }
      function Yt(e, t) {
        const n = e.seen.get(t);
        if (!n) throw new Error("Unprocessed schema. This is a bug in Zod.");
        const i = (t) => {
          const n = e.seen.get(t);
          if (null === n.ref) return;
          const r = n.def ?? n.schema,
            a = { ...r },
            o = n.ref;
          if (((n.ref = null), o)) {
            i(o);
            const n = e.seen.get(o),
              s = n.schema;
            !s.$ref ||
            ("draft-07" !== e.target &&
              "draft-04" !== e.target &&
              "openapi-3.0" !== e.target)
              ? Object.assign(r, s)
              : ((r.allOf = r.allOf ?? []), r.allOf.push(s)),
              Object.assign(r, a);
            if (t._zod.parent === o)
              for (const e in r)
                "$ref" !== e && "allOf" !== e && (e in a || delete r[e]);
            if (s.$ref && n.def)
              for (const e in r)
                "$ref" !== e &&
                  "allOf" !== e &&
                  e in n.def &&
                  JSON.stringify(r[e]) === JSON.stringify(n.def[e]) &&
                  delete r[e];
          }
          const s = t._zod.parent;
          if (s && s !== o) {
            i(s);
            const t = e.seen.get(s);
            if (t?.schema.$ref && ((r.$ref = t.schema.$ref), t.def))
              for (const e in r)
                "$ref" !== e &&
                  "allOf" !== e &&
                  e in t.def &&
                  JSON.stringify(r[e]) === JSON.stringify(t.def[e]) &&
                  delete r[e];
          }
          e.override({ zodSchema: t, jsonSchema: r, path: n.path ?? [] });
        };
        for (const t of [...e.seen.entries()].reverse()) i(t[0]);
        const r = {};
        if (
          ("draft-2020-12" === e.target
            ? (r.$schema = "https://json-schema.org/draft/2020-12/schema")
            : "draft-07" === e.target
              ? (r.$schema = "http://json-schema.org/draft-07/schema#")
              : "draft-04" === e.target
                ? (r.$schema = "http://json-schema.org/draft-04/schema#")
                : e.target,
          e.external?.uri)
        ) {
          const n = e.external.registry.get(t)?.id;
          if (!n) throw new Error("Schema is missing an `id` property");
          r.$id = e.external.uri(n);
        }
        Object.assign(r, n.def ?? n.schema);
        const a = e.metadataRegistry.get(t)?.id;
        void 0 !== a && r.id === a && delete r.id;
        const o = e.external?.defs ?? {};
        for (const t of e.seen.entries()) {
          const e = t[1];
          e.def &&
            e.defId &&
            (e.def.id === e.defId && delete e.def.id, (o[e.defId] = e.def));
        }
        e.external ||
          (Object.keys(o).length > 0 &&
            ("draft-2020-12" === e.target
              ? (r.$defs = o)
              : (r.definitions = o)));
        try {
          const n = JSON.parse(JSON.stringify(r));
          return (
            Object.defineProperty(n, "~standard", {
              value: {
                ...t["~standard"],
                jsonSchema: {
                  input: en(t, "input", e.processors),
                  output: en(t, "output", e.processors),
                },
              },
              enumerable: !1,
              writable: !1,
            }),
            n
          );
        } catch (e) {
          throw new Error("Error converting schema to JSON.");
        }
      }
      function Qt(e, t) {
        const n = t ?? { seen: new Set() };
        if (n.seen.has(e)) return !1;
        n.seen.add(e);
        const i = e._zod.def;
        if ("transform" === i.type) return !0;
        if ("array" === i.type) return Qt(i.element, n);
        if ("set" === i.type) return Qt(i.valueType, n);
        if ("lazy" === i.type) return Qt(i.getter(), n);
        if (
          "promise" === i.type ||
          "optional" === i.type ||
          "nonoptional" === i.type ||
          "nullable" === i.type ||
          "readonly" === i.type ||
          "default" === i.type ||
          "prefault" === i.type
        )
          return Qt(i.innerType, n);
        if ("intersection" === i.type) return Qt(i.left, n) || Qt(i.right, n);
        if ("record" === i.type || "map" === i.type)
          return Qt(i.keyType, n) || Qt(i.valueType, n);
        if ("pipe" === i.type)
          return (
            !!e._zod.traits.has("$ZodCodec") || Qt(i.in, n) || Qt(i.out, n)
          );
        if ("object" === i.type) {
          for (const e in i.shape) if (Qt(i.shape[e], n)) return !0;
          return !1;
        }
        if ("union" === i.type) {
          for (const e of i.options) if (Qt(e, n)) return !0;
          return !1;
        }
        if ("tuple" === i.type) {
          for (const e of i.items) if (Qt(e, n)) return !0;
          return !(!i.rest || !Qt(i.rest, n));
        }
        return !1;
      }
      const en =
          (e, t, n = {}) =>
          (i) => {
            const { libraryOptions: r, target: a } = i ?? {},
              o = Ht({ ...(r ?? {}), target: a, io: t, processors: n });
            return qt(e, o), Xt(o, e), Yt(o, e);
          },
        tn = {
          guid: "uuid",
          url: "uri",
          datetime: "date-time",
          json_string: "json-string",
          regex: "",
        },
        nn = (e, t, n, i) => {
          const r = n;
          r.type = "string";
          const {
            minimum: a,
            maximum: o,
            format: s,
            patterns: u,
            contentEncoding: l,
          } = e._zod.bag;
          if (
            ("number" == typeof a && (r.minLength = a),
            "number" == typeof o && (r.maxLength = o),
            s &&
              ((r.format = tn[s] ?? s),
              "" === r.format && delete r.format,
              "time" === s && delete r.format),
            l && (r.contentEncoding = l),
            u && u.size > 0)
          ) {
            const e = [...u];
            1 === e.length
              ? (r.pattern = e[0].source)
              : e.length > 1 &&
                (r.allOf = [
                  ...e.map((e) => ({
                    ...("draft-07" === t.target ||
                    "draft-04" === t.target ||
                    "openapi-3.0" === t.target
                      ? { type: "string" }
                      : {}),
                    pattern: e.source,
                  })),
                ]);
          }
        },
        rn = (e, t, n, i) => {
          const r = n,
            {
              minimum: a,
              maximum: o,
              format: s,
              multipleOf: u,
              exclusiveMaximum: l,
              exclusiveMinimum: c,
            } = e._zod.bag;
          "string" == typeof s && s.includes("int")
            ? (r.type = "integer")
            : (r.type = "number");
          const d =
              "number" == typeof c && c >= (a ?? Number.NEGATIVE_INFINITY),
            m = "number" == typeof l && l <= (o ?? Number.POSITIVE_INFINITY),
            p = "draft-04" === t.target || "openapi-3.0" === t.target;
          d
            ? p
              ? ((r.minimum = c), (r.exclusiveMinimum = !0))
              : (r.exclusiveMinimum = c)
            : "number" == typeof a && (r.minimum = a),
            m
              ? p
                ? ((r.maximum = l), (r.exclusiveMaximum = !0))
                : (r.exclusiveMaximum = l)
              : "number" == typeof o && (r.maximum = o),
            "number" == typeof u && (r.multipleOf = u);
        },
        an = (e, t, n, i) => {
          n.type = "boolean";
        },
        on = (e, t, n, i) => {
          if ("throw" === t.unrepresentable)
            throw new Error("BigInt cannot be represented in JSON Schema");
        },
        sn = (e, t, n, i) => {
          n.not = {};
        },
        un = (e, t, n, i) => {
          if ("throw" === t.unrepresentable)
            throw new Error("Date cannot be represented in JSON Schema");
        },
        ln = (e, t, n, i) => {
          const r = e._zod.def,
            a = (0, R.w5)(r.entries);
          a.every((e) => "number" == typeof e) && (n.type = "number"),
            a.every((e) => "string" == typeof e) && (n.type = "string"),
            (n.enum = a);
        },
        cn = (e, t, n, i) => {
          const r = e._zod.def,
            a = [];
          for (const e of r.values)
            if (void 0 === e) {
              if ("throw" === t.unrepresentable)
                throw new Error(
                  "Literal `undefined` cannot be represented in JSON Schema",
                );
            } else if ("bigint" == typeof e) {
              if ("throw" === t.unrepresentable)
                throw new Error(
                  "BigInt literals cannot be represented in JSON Schema",
                );
              a.push(Number(e));
            } else a.push(e);
          if (0 === a.length);
          else if (1 === a.length) {
            const e = a[0];
            (n.type = null === e ? "null" : typeof e),
              "draft-04" === t.target || "openapi-3.0" === t.target
                ? (n.enum = [e])
                : (n.const = e);
          } else
            a.every((e) => "number" == typeof e) && (n.type = "number"),
              a.every((e) => "string" == typeof e) && (n.type = "string"),
              a.every((e) => "boolean" == typeof e) && (n.type = "boolean"),
              a.every((e) => null === e) && (n.type = "null"),
              (n.enum = a);
        },
        dn = (e, t, n, i) => {
          if ("throw" === t.unrepresentable)
            throw new Error(
              "Custom types cannot be represented in JSON Schema",
            );
        },
        mn = (e, t, n, i) => {
          if ("throw" === t.unrepresentable)
            throw new Error("Transforms cannot be represented in JSON Schema");
        },
        pn = (e, t, n, i) => {
          const r = n,
            a = e._zod.def,
            { minimum: o, maximum: s } = e._zod.bag;
          "number" == typeof o && (r.minItems = o),
            "number" == typeof s && (r.maxItems = s),
            (r.type = "array"),
            (r.items = qt(a.element, t, { ...i, path: [...i.path, "items"] }));
        },
        gn = (e, t, n, i) => {
          const r = n,
            a = e._zod.def;
          (r.type = "object"), (r.properties = {});
          const o = a.shape;
          for (const e in o)
            r.properties[e] = qt(o[e], t, {
              ...i,
              path: [...i.path, "properties", e],
            });
          const s = new Set(Object.keys(o)),
            u = new Set(
              [...s].filter((e) => {
                const n = a.shape[e]._zod;
                return "input" === t.io
                  ? void 0 === n.optin
                  : void 0 === n.optout;
              }),
            );
          u.size > 0 && (r.required = Array.from(u)),
            "never" === a.catchall?._zod.def.type
              ? (r.additionalProperties = !1)
              : a.catchall
                ? a.catchall &&
                  (r.additionalProperties = qt(a.catchall, t, {
                    ...i,
                    path: [...i.path, "additionalProperties"],
                  }))
                : "output" === t.io && (r.additionalProperties = !1);
        },
        fn = (e, t, n, i) => {
          const r = e._zod.def,
            a = !1 === r.inclusive,
            o = r.options.map((e, n) =>
              qt(e, t, { ...i, path: [...i.path, a ? "oneOf" : "anyOf", n] }),
            );
          a ? (n.oneOf = o) : (n.anyOf = o);
        },
        vn = (e, t, n, i) => {
          const r = e._zod.def,
            a = qt(r.left, t, { ...i, path: [...i.path, "allOf", 0] }),
            o = qt(r.right, t, { ...i, path: [...i.path, "allOf", 1] }),
            s = (e) => "allOf" in e && 1 === Object.keys(e).length,
            u = [...(s(a) ? a.allOf : [a]), ...(s(o) ? o.allOf : [o])];
          n.allOf = u;
        },
        hn = (e, t, n, i) => {
          const r = e._zod.def,
            a = qt(r.innerType, t, i),
            o = t.seen.get(e);
          "openapi-3.0" === t.target
            ? ((o.ref = r.innerType), (n.nullable = !0))
            : (n.anyOf = [a, { type: "null" }]);
        },
        bn = (e, t, n, i) => {
          const r = e._zod.def;
          qt(r.innerType, t, i);
          t.seen.get(e).ref = r.innerType;
        },
        $n = (e, t, n, i) => {
          const r = e._zod.def;
          qt(r.innerType, t, i);
          (t.seen.get(e).ref = r.innerType),
            (n.default = JSON.parse(JSON.stringify(r.defaultValue)));
        },
        yn = (e, t, n, i) => {
          const r = e._zod.def;
          qt(r.innerType, t, i);
          (t.seen.get(e).ref = r.innerType),
            "input" === t.io &&
              (n._prefault = JSON.parse(JSON.stringify(r.defaultValue)));
        },
        In = (e, t, n, i) => {
          const r = e._zod.def;
          qt(r.innerType, t, i);
          let a;
          t.seen.get(e).ref = r.innerType;
          try {
            a = r.catchValue(void 0);
          } catch {
            throw new Error(
              "Dynamic catch values are not supported in JSON Schema",
            );
          }
          n.default = a;
        },
        _n = (e, t, n, i) => {
          const r = e._zod.def,
            a = r.in._zod.traits.has("$ZodTransform"),
            o = "input" === t.io ? (a ? r.out : r.in) : r.out;
          qt(o, t, i);
          t.seen.get(e).ref = o;
        },
        xn = (e, t, n, i) => {
          const r = e._zod.def;
          qt(r.innerType, t, i);
          (t.seen.get(e).ref = r.innerType), (n.readOnly = !0);
        },
        kn = (e, t, n, i) => {
          const r = e._zod.def;
          qt(r.innerType, t, i);
          t.seen.get(e).ref = r.innerType;
        };
      const wn = a.xI("ZodISODateTime", (e, t) => {
        Ae.init(e, t), Qn.init(e, t);
      });
      function Sn(e) {
        return (function (e, t) {
          return new e({
            type: "string",
            format: "datetime",
            check: "string_format",
            offset: !1,
            local: !1,
            precision: null,
            ...R.A2(t),
          });
        })(wn, e);
      }
      const Dn = a.xI("ZodISODate", (e, t) => {
        Te.init(e, t), Qn.init(e, t);
      });
      function On(e) {
        return (function (e, t) {
          return new e({
            type: "string",
            format: "date",
            check: "string_format",
            ...R.A2(t),
          });
        })(Dn, e);
      }
      const Un = a.xI("ZodISOTime", (e, t) => {
        Ce.init(e, t), Qn.init(e, t);
      });
      function Nn(e) {
        return (function (e, t) {
          return new e({
            type: "string",
            format: "time",
            check: "string_format",
            precision: null,
            ...R.A2(t),
          });
        })(Un, e);
      }
      const zn = a.xI("ZodISODuration", (e, t) => {
        Re.init(e, t), Qn.init(e, t);
      });
      function En(e) {
        return (function (e, t) {
          return new e({
            type: "string",
            format: "duration",
            check: "string_format",
            ...R.A2(t),
          });
        })(zn, e);
      }
      const Pn = (e, t) => {
          re.init(e, t),
            (e.name = "ZodError"),
            Object.defineProperties(e, {
              format: {
                value: (t) =>
                  (function (e, t = (e) => e.message) {
                    const n = { _errors: [] },
                      i = (e, r = []) => {
                        for (const a of e.issues)
                          if ("invalid_union" === a.code && a.errors.length)
                            a.errors.map((e) =>
                              i({ issues: e }, [...r, ...a.path]),
                            );
                          else if ("invalid_key" === a.code)
                            i({ issues: a.issues }, [...r, ...a.path]);
                          else if ("invalid_element" === a.code)
                            i({ issues: a.issues }, [...r, ...a.path]);
                          else {
                            const e = [...r, ...a.path];
                            if (0 === e.length) n._errors.push(t(a));
                            else {
                              let i = n,
                                r = 0;
                              for (; r < e.length; ) {
                                const n = e[r];
                                r === e.length - 1
                                  ? ((i[n] = i[n] || { _errors: [] }),
                                    i[n]._errors.push(t(a)))
                                  : (i[n] = i[n] || { _errors: [] }),
                                  (i = i[n]),
                                  r++;
                              }
                            }
                          }
                      };
                    return i(e), n;
                  })(e, t),
              },
              flatten: {
                value: (t) =>
                  (function (e, t = (e) => e.message) {
                    const n = {},
                      i = [];
                    for (const r of e.issues)
                      r.path.length > 0
                        ? ((n[r.path[0]] = n[r.path[0]] || []),
                          n[r.path[0]].push(t(r)))
                        : i.push(t(r));
                    return { formErrors: i, fieldErrors: n };
                  })(e, t),
              },
              addIssue: {
                value: (t) => {
                  e.issues.push(t),
                    (e.message = JSON.stringify(e.issues, R.k8, 2));
                },
              },
              addIssues: {
                value: (t) => {
                  e.issues.push(...t),
                    (e.message = JSON.stringify(e.issues, R.k8, 2));
                },
              },
              isEmpty: { get: () => 0 === e.issues.length },
            });
        },
        jn = a.xI("ZodError", Pn, { Parent: Error }),
        An = oe(jn),
        Tn = se(jn),
        Cn = ue(jn),
        Rn = ce(jn),
        Ln = me(jn),
        Bn = pe(jn),
        Gn = ge(jn),
        Mn = fe(jn),
        Wn = ve(jn),
        Zn = he(jn),
        Jn = be(jn),
        Fn = $e(jn),
        Kn = new WeakMap();
      function Vn(e, t, n) {
        const i = Object.getPrototypeOf(e);
        let r = Kn.get(i);
        if ((r || ((r = new Set()), Kn.set(i, r)), !r.has(t))) {
          r.add(t);
          for (const e in n) {
            const t = n[e];
            Object.defineProperty(i, e, {
              configurable: !0,
              enumerable: !1,
              get() {
                const n = t.bind(this);
                return (
                  Object.defineProperty(this, e, {
                    configurable: !0,
                    writable: !0,
                    enumerable: !0,
                    value: n,
                  }),
                  n
                );
              },
              set(t) {
                Object.defineProperty(this, e, {
                  configurable: !0,
                  writable: !0,
                  enumerable: !0,
                  value: t,
                });
              },
            });
          }
        }
      }
      const Hn = a.xI(
          "ZodType",
          (e, t) => (
            Ie.init(e, t),
            Object.assign(e["~standard"], {
              jsonSchema: { input: en(e, "input"), output: en(e, "output") },
            }),
            (e.toJSONSchema = (
              (e, t = {}) =>
              (n) => {
                const i = Ht({ ...n, processors: t });
                return qt(e, i), Xt(i, e), Yt(i, e);
              }
            )(e, {})),
            (e.def = t),
            (e.type = t.type),
            Object.defineProperty(e, "_def", { value: t }),
            (e.parse = (t, n) => An(e, t, n, { callee: e.parse })),
            (e.safeParse = (t, n) => Cn(e, t, n)),
            (e.parseAsync = async (t, n) =>
              Tn(e, t, n, { callee: e.parseAsync })),
            (e.safeParseAsync = async (t, n) => Rn(e, t, n)),
            (e.spa = e.safeParseAsync),
            (e.encode = (t, n) => Ln(e, t, n)),
            (e.decode = (t, n) => Bn(e, t, n)),
            (e.encodeAsync = async (t, n) => Gn(e, t, n)),
            (e.decodeAsync = async (t, n) => Mn(e, t, n)),
            (e.safeEncode = (t, n) => Wn(e, t, n)),
            (e.safeDecode = (t, n) => Zn(e, t, n)),
            (e.safeEncodeAsync = async (t, n) => Jn(e, t, n)),
            (e.safeDecodeAsync = async (t, n) => Fn(e, t, n)),
            Vn(e, "ZodType", {
              check(...e) {
                const t = this.def;
                return this.clone(
                  R.zM(t, {
                    checks: [
                      ...(t.checks ?? []),
                      ...e.map((e) =>
                        "function" == typeof e
                          ? {
                              _zod: {
                                check: e,
                                def: { check: "custom" },
                                onattach: [],
                              },
                            }
                          : e,
                      ),
                    ],
                  }),
                  { parent: !0 },
                );
              },
              with(...e) {
                return this.check(...e);
              },
              clone(e, t) {
                return R.o8(this, e, t);
              },
              brand() {
                return this;
              },
              register(e, t) {
                return e.add(this, t), this;
              },
              refine(e, t) {
                return this.check(
                  (function (e, t = {}) {
                    return (function (e, t, n) {
                      return new e({
                        type: "custom",
                        check: "custom",
                        fn: t,
                        ...R.A2(n),
                      });
                    })(ir, e, t);
                  })(e, t),
                );
              },
              superRefine(e, t) {
                return this.check(
                  (function (e, t) {
                    return Vt(e, t);
                  })(e, t),
                );
              },
              overwrite(e) {
                return this.check(Kt(e));
              },
              optional() {
                return Zi(this);
              },
              exactOptional() {
                return new Ji({ type: "optional", innerType: this });
              },
              nullable() {
                return Ki(this);
              },
              nullish() {
                return Zi(Ki(this));
              },
              nonoptional(e) {
                return (function (e, t) {
                  return new qi({
                    type: "nonoptional",
                    innerType: e,
                    ...R.A2(t),
                  });
                })(this, e);
              },
              array() {
                return zi(this);
              },
              or(e) {
                return Ai([this, e]);
              },
              and(e) {
                return new Ti({ type: "intersection", left: this, right: e });
              },
              transform(e) {
                return Qi(this, Mi(e));
              },
              default(e) {
                return (
                  (t = e),
                  new Vi({
                    type: "default",
                    innerType: this,
                    get defaultValue() {
                      return "function" == typeof t ? t() : R.yG(t);
                    },
                  })
                );
                var t;
              },
              prefault(e) {
                return (
                  (t = e),
                  new Hi({
                    type: "prefault",
                    innerType: this,
                    get defaultValue() {
                      return "function" == typeof t ? t() : R.yG(t);
                    },
                  })
                );
                var t;
              },
              catch(e) {
                return new Xi({
                  type: "catch",
                  innerType: this,
                  catchValue: "function" == typeof (t = e) ? t : () => t,
                });
                var t;
              },
              pipe(e) {
                return Qi(this, e);
              },
              readonly() {
                return new nr({ type: "readonly", innerType: this });
              },
              describe(e) {
                const t = this.clone();
                return Ct.add(t, { description: e }), t;
              },
              meta(...e) {
                if (0 === e.length) return Ct.get(this);
                const t = this.clone();
                return Ct.add(t, e[0]), t;
              },
              isOptional() {
                return this.safeParse(void 0).success;
              },
              isNullable() {
                return this.safeParse(null).success;
              },
              apply(e) {
                return e(this);
              },
            }),
            Object.defineProperty(e, "description", {
              get: () => Ct.get(e)?.description,
              configurable: !0,
            }),
            e
          ),
        ),
        qn = a.xI("_ZodString", (e, t) => {
          _e.init(e, t),
            Hn.init(e, t),
            (e._zod.processJSONSchema = (t, n, i) => nn(e, t, n));
          const n = e._zod.bag;
          (e.format = n.format ?? null),
            (e.minLength = n.minimum ?? null),
            (e.maxLength = n.maximum ?? null),
            Vn(e, "_ZodString", {
              regex(...e) {
                return this.check(
                  (function (e, t) {
                    return new H({
                      check: "string_format",
                      format: "regex",
                      ...R.A2(t),
                      pattern: e,
                    });
                  })(...e),
                );
              },
              includes(...e) {
                return this.check(
                  (function (e, t) {
                    return new Y({
                      check: "string_format",
                      format: "includes",
                      ...R.A2(t),
                      includes: e,
                    });
                  })(...e),
                );
              },
              startsWith(...e) {
                return this.check(
                  (function (e, t) {
                    return new Q({
                      check: "string_format",
                      format: "starts_with",
                      ...R.A2(t),
                      prefix: e,
                    });
                  })(...e),
                );
              },
              endsWith(...e) {
                return this.check(
                  (function (e, t) {
                    return new ee({
                      check: "string_format",
                      format: "ends_with",
                      ...R.A2(t),
                      suffix: e,
                    });
                  })(...e),
                );
              },
              min(...e) {
                return this.check(Jt(...e));
              },
              max(...e) {
                return this.check(Zt(...e));
              },
              length(...e) {
                return this.check(Ft(...e));
              },
              nonempty(...e) {
                return this.check(Jt(1, ...e));
              },
              lowercase(e) {
                return this.check(
                  (function (e) {
                    return new q({
                      check: "string_format",
                      format: "lowercase",
                      ...R.A2(e),
                    });
                  })(e),
                );
              },
              uppercase(e) {
                return this.check(
                  (function (e) {
                    return new X({
                      check: "string_format",
                      format: "uppercase",
                      ...R.A2(e),
                    });
                  })(e),
                );
              },
              trim() {
                return this.check(Kt((e) => e.trim()));
              },
              normalize(...e) {
                return this.check(
                  (function (e) {
                    return Kt((t) => t.normalize(e));
                  })(...e),
                );
              },
              toLowerCase() {
                return this.check(Kt((e) => e.toLowerCase()));
              },
              toUpperCase() {
                return this.check(Kt((e) => e.toUpperCase()));
              },
              slugify() {
                return this.check(Kt((e) => R.Yv(e)));
              },
            });
        }),
        Xn = a.xI("ZodString", (e, t) => {
          _e.init(e, t),
            qn.init(e, t),
            (e.email = (t) =>
              e.check(
                (function (e, t) {
                  return new e({
                    type: "string",
                    format: "email",
                    check: "string_format",
                    abort: !1,
                    ...R.A2(t),
                  });
                })(ei, t),
              )),
            (e.url = (t) =>
              e.check(
                (function (e, t) {
                  return new e({
                    type: "string",
                    format: "url",
                    check: "string_format",
                    abort: !1,
                    ...R.A2(t),
                  });
                })(ii, t),
              )),
            (e.jwt = (t) =>
              e.check(
                (function (e, t) {
                  return new e({
                    type: "string",
                    format: "jwt",
                    check: "string_format",
                    abort: !1,
                    ...R.A2(t),
                  });
                })(bi, t),
              )),
            (e.emoji = (t) =>
              e.check(
                (function (e, t) {
                  return new e({
                    type: "string",
                    format: "emoji",
                    check: "string_format",
                    abort: !1,
                    ...R.A2(t),
                  });
                })(ri, t),
              )),
            (e.guid = (t) => e.check(Rt(ti, t))),
            (e.uuid = (t) =>
              e.check(
                (function (e, t) {
                  return new e({
                    type: "string",
                    format: "uuid",
                    check: "string_format",
                    abort: !1,
                    ...R.A2(t),
                  });
                })(ni, t),
              )),
            (e.uuidv4 = (t) =>
              e.check(
                (function (e, t) {
                  return new e({
                    type: "string",
                    format: "uuid",
                    check: "string_format",
                    abort: !1,
                    version: "v4",
                    ...R.A2(t),
                  });
                })(ni, t),
              )),
            (e.uuidv6 = (t) =>
              e.check(
                (function (e, t) {
                  return new e({
                    type: "string",
                    format: "uuid",
                    check: "string_format",
                    abort: !1,
                    version: "v6",
                    ...R.A2(t),
                  });
                })(ni, t),
              )),
            (e.uuidv7 = (t) =>
              e.check(
                (function (e, t) {
                  return new e({
                    type: "string",
                    format: "uuid",
                    check: "string_format",
                    abort: !1,
                    version: "v7",
                    ...R.A2(t),
                  });
                })(ni, t),
              )),
            (e.nanoid = (t) =>
              e.check(
                (function (e, t) {
                  return new e({
                    type: "string",
                    format: "nanoid",
                    check: "string_format",
                    abort: !1,
                    ...R.A2(t),
                  });
                })(ai, t),
              )),
            (e.guid = (t) => e.check(Rt(ti, t))),
            (e.cuid = (t) =>
              e.check(
                (function (e, t) {
                  return new e({
                    type: "string",
                    format: "cuid",
                    check: "string_format",
                    abort: !1,
                    ...R.A2(t),
                  });
                })(oi, t),
              )),
            (e.cuid2 = (t) =>
              e.check(
                (function (e, t) {
                  return new e({
                    type: "string",
                    format: "cuid2",
                    check: "string_format",
                    abort: !1,
                    ...R.A2(t),
                  });
                })(si, t),
              )),
            (e.ulid = (t) =>
              e.check(
                (function (e, t) {
                  return new e({
                    type: "string",
                    format: "ulid",
                    check: "string_format",
                    abort: !1,
                    ...R.A2(t),
                  });
                })(ui, t),
              )),
            (e.base64 = (t) =>
              e.check(
                (function (e, t) {
                  return new e({
                    type: "string",
                    format: "base64",
                    check: "string_format",
                    abort: !1,
                    ...R.A2(t),
                  });
                })(fi, t),
              )),
            (e.base64url = (t) =>
              e.check(
                (function (e, t) {
                  return new e({
                    type: "string",
                    format: "base64url",
                    check: "string_format",
                    abort: !1,
                    ...R.A2(t),
                  });
                })(vi, t),
              )),
            (e.xid = (t) =>
              e.check(
                (function (e, t) {
                  return new e({
                    type: "string",
                    format: "xid",
                    check: "string_format",
                    abort: !1,
                    ...R.A2(t),
                  });
                })(li, t),
              )),
            (e.ksuid = (t) =>
              e.check(
                (function (e, t) {
                  return new e({
                    type: "string",
                    format: "ksuid",
                    check: "string_format",
                    abort: !1,
                    ...R.A2(t),
                  });
                })(ci, t),
              )),
            (e.ipv4 = (t) =>
              e.check(
                (function (e, t) {
                  return new e({
                    type: "string",
                    format: "ipv4",
                    check: "string_format",
                    abort: !1,
                    ...R.A2(t),
                  });
                })(di, t),
              )),
            (e.ipv6 = (t) =>
              e.check(
                (function (e, t) {
                  return new e({
                    type: "string",
                    format: "ipv6",
                    check: "string_format",
                    abort: !1,
                    ...R.A2(t),
                  });
                })(mi, t),
              )),
            (e.cidrv4 = (t) =>
              e.check(
                (function (e, t) {
                  return new e({
                    type: "string",
                    format: "cidrv4",
                    check: "string_format",
                    abort: !1,
                    ...R.A2(t),
                  });
                })(pi, t),
              )),
            (e.cidrv6 = (t) =>
              e.check(
                (function (e, t) {
                  return new e({
                    type: "string",
                    format: "cidrv6",
                    check: "string_format",
                    abort: !1,
                    ...R.A2(t),
                  });
                })(gi, t),
              )),
            (e.e164 = (t) =>
              e.check(
                (function (e, t) {
                  return new e({
                    type: "string",
                    format: "e164",
                    check: "string_format",
                    abort: !1,
                    ...R.A2(t),
                  });
                })(hi, t),
              )),
            (e.datetime = (t) => e.check(Sn(t))),
            (e.date = (t) => e.check(On(t))),
            (e.time = (t) => e.check(Nn(t))),
            (e.duration = (t) => e.check(En(t)));
        });
      function Yn(e) {
        return (function (e, t) {
          return new e({ type: "string", ...R.A2(t) });
        })(Xn, e);
      }
      const Qn = a.xI("ZodStringFormat", (e, t) => {
          xe.init(e, t), qn.init(e, t);
        }),
        ei = a.xI("ZodEmail", (e, t) => {
          Se.init(e, t), Qn.init(e, t);
        });
      const ti = a.xI("ZodGUID", (e, t) => {
        ke.init(e, t), Qn.init(e, t);
      });
      const ni = a.xI("ZodUUID", (e, t) => {
        we.init(e, t), Qn.init(e, t);
      });
      const ii = a.xI("ZodURL", (e, t) => {
        De.init(e, t), Qn.init(e, t);
      });
      const ri = a.xI("ZodEmoji", (e, t) => {
        Oe.init(e, t), Qn.init(e, t);
      });
      const ai = a.xI("ZodNanoID", (e, t) => {
        Ue.init(e, t), Qn.init(e, t);
      });
      const oi = a.xI("ZodCUID", (e, t) => {
        Ne.init(e, t), Qn.init(e, t);
      });
      const si = a.xI("ZodCUID2", (e, t) => {
        ze.init(e, t), Qn.init(e, t);
      });
      const ui = a.xI("ZodULID", (e, t) => {
        Ee.init(e, t), Qn.init(e, t);
      });
      const li = a.xI("ZodXID", (e, t) => {
        Pe.init(e, t), Qn.init(e, t);
      });
      const ci = a.xI("ZodKSUID", (e, t) => {
        je.init(e, t), Qn.init(e, t);
      });
      const di = a.xI("ZodIPv4", (e, t) => {
        Le.init(e, t), Qn.init(e, t);
      });
      const mi = a.xI("ZodIPv6", (e, t) => {
        Be.init(e, t), Qn.init(e, t);
      });
      const pi = a.xI("ZodCIDRv4", (e, t) => {
        Ge.init(e, t), Qn.init(e, t);
      });
      const gi = a.xI("ZodCIDRv6", (e, t) => {
        Me.init(e, t), Qn.init(e, t);
      });
      const fi = a.xI("ZodBase64", (e, t) => {
        Ze.init(e, t), Qn.init(e, t);
      });
      const vi = a.xI("ZodBase64URL", (e, t) => {
        Je.init(e, t), Qn.init(e, t);
      });
      const hi = a.xI("ZodE164", (e, t) => {
        Fe.init(e, t), Qn.init(e, t);
      });
      const bi = a.xI("ZodJWT", (e, t) => {
        Ke.init(e, t), Qn.init(e, t);
      });
      const $i = a.xI("ZodNumber", (e, t) => {
        Ve.init(e, t),
          Hn.init(e, t),
          (e._zod.processJSONSchema = (t, n, i) => rn(e, t, n)),
          Vn(e, "ZodNumber", {
            gt(e, t) {
              return this.check(Gt(e, t));
            },
            gte(e, t) {
              return this.check(Mt(e, t));
            },
            min(e, t) {
              return this.check(Mt(e, t));
            },
            lt(e, t) {
              return this.check(Lt(e, t));
            },
            lte(e, t) {
              return this.check(Bt(e, t));
            },
            max(e, t) {
              return this.check(Bt(e, t));
            },
            int(e) {
              return this.check(_i(e));
            },
            safe(e) {
              return this.check(_i(e));
            },
            positive(e) {
              return this.check(Gt(0, e));
            },
            nonnegative(e) {
              return this.check(Mt(0, e));
            },
            negative(e) {
              return this.check(Lt(0, e));
            },
            nonpositive(e) {
              return this.check(Bt(0, e));
            },
            multipleOf(e, t) {
              return this.check(Wt(e, t));
            },
            step(e, t) {
              return this.check(Wt(e, t));
            },
            finite() {
              return this;
            },
          });
        const n = e._zod.bag;
        (e.minValue =
          Math.max(
            n.minimum ?? Number.NEGATIVE_INFINITY,
            n.exclusiveMinimum ?? Number.NEGATIVE_INFINITY,
          ) ?? null),
          (e.maxValue =
            Math.min(
              n.maximum ?? Number.POSITIVE_INFINITY,
              n.exclusiveMaximum ?? Number.POSITIVE_INFINITY,
            ) ?? null),
          (e.isInt =
            (n.format ?? "").includes("int") ||
            Number.isSafeInteger(n.multipleOf ?? 0.5)),
          (e.isFinite = !0),
          (e.format = n.format ?? null);
      });
      function yi(e) {
        return (function (e, t) {
          return new e({ type: "number", checks: [], ...R.A2(t) });
        })($i, e);
      }
      const Ii = a.xI("ZodNumberFormat", (e, t) => {
        He.init(e, t), $i.init(e, t);
      });
      function _i(e) {
        return (function (e, t) {
          return new e({
            type: "number",
            check: "number_format",
            abort: !1,
            format: "safeint",
            ...R.A2(t),
          });
        })(Ii, e);
      }
      const xi = a.xI("ZodBoolean", (e, t) => {
        qe.init(e, t),
          Hn.init(e, t),
          (e._zod.processJSONSchema = (e, t, n) => an(0, 0, t));
      });
      const ki = a.xI("ZodBigInt", (e, t) => {
        Xe.init(e, t),
          Hn.init(e, t),
          (e._zod.processJSONSchema = (e, t, n) => on(0, e)),
          (e.gte = (t, n) => e.check(Mt(t, n))),
          (e.min = (t, n) => e.check(Mt(t, n))),
          (e.gt = (t, n) => e.check(Gt(t, n))),
          (e.gte = (t, n) => e.check(Mt(t, n))),
          (e.min = (t, n) => e.check(Mt(t, n))),
          (e.lt = (t, n) => e.check(Lt(t, n))),
          (e.lte = (t, n) => e.check(Bt(t, n))),
          (e.max = (t, n) => e.check(Bt(t, n))),
          (e.positive = (t) => e.check(Gt(BigInt(0), t))),
          (e.negative = (t) => e.check(Lt(BigInt(0), t))),
          (e.nonpositive = (t) => e.check(Bt(BigInt(0), t))),
          (e.nonnegative = (t) => e.check(Mt(BigInt(0), t))),
          (e.multipleOf = (t, n) => e.check(Wt(t, n)));
        const n = e._zod.bag;
        (e.minValue = n.minimum ?? null),
          (e.maxValue = n.maximum ?? null),
          (e.format = n.format ?? null);
      });
      const wi = a.xI("ZodUnknown", (e, t) => {
        Ye.init(e, t),
          Hn.init(e, t),
          (e._zod.processJSONSchema = (e, t, n) => {});
      });
      function Si() {
        return new wi({ type: "unknown" });
      }
      const Di = a.xI("ZodNever", (e, t) => {
        Qe.init(e, t),
          Hn.init(e, t),
          (e._zod.processJSONSchema = (e, t, n) => sn(0, 0, t));
      });
      function Oi(e) {
        return (function (e, t) {
          return new e({ type: "never", ...R.A2(t) });
        })(Di, e);
      }
      const Ui = a.xI("ZodDate", (e, t) => {
        et.init(e, t),
          Hn.init(e, t),
          (e._zod.processJSONSchema = (e, t, n) => un(0, e)),
          (e.min = (t, n) => e.check(Mt(t, n))),
          (e.max = (t, n) => e.check(Bt(t, n)));
        const n = e._zod.bag;
        (e.minDate = n.minimum ? new Date(n.minimum) : null),
          (e.maxDate = n.maximum ? new Date(n.maximum) : null);
      });
      const Ni = a.xI("ZodArray", (e, t) => {
        nt.init(e, t),
          Hn.init(e, t),
          (e._zod.processJSONSchema = (t, n, i) => pn(e, t, n, i)),
          (e.element = t.element),
          Vn(e, "ZodArray", {
            min(e, t) {
              return this.check(Jt(e, t));
            },
            nonempty(e) {
              return this.check(Jt(1, e));
            },
            max(e, t) {
              return this.check(Zt(e, t));
            },
            length(e, t) {
              return this.check(Ft(e, t));
            },
            unwrap() {
              return this.element;
            },
          });
      });
      function zi(e, t) {
        return (function (e, t, n) {
          return new e({ type: "array", element: t, ...R.A2(n) });
        })(Ni, e, t);
      }
      const Ei = a.xI("ZodObject", (e, t) => {
        st.init(e, t),
          Hn.init(e, t),
          (e._zod.processJSONSchema = (t, n, i) => gn(e, t, n, i)),
          R.gJ(e, "shape", () => t.shape),
          Vn(e, "ZodObject", {
            keyof() {
              return Ri(Object.keys(this._zod.def.shape));
            },
            catchall(e) {
              return this.clone({ ...this._zod.def, catchall: e });
            },
            passthrough() {
              return this.clone({ ...this._zod.def, catchall: Si() });
            },
            loose() {
              return this.clone({ ...this._zod.def, catchall: Si() });
            },
            strict() {
              return this.clone({ ...this._zod.def, catchall: Oi() });
            },
            strip() {
              return this.clone({ ...this._zod.def, catchall: void 0 });
            },
            extend(e) {
              return R.X$(this, e);
            },
            safeExtend(e) {
              return R.W0(this, e);
            },
            merge(e) {
              return R.h1(this, e);
            },
            pick(e) {
              return R.Up(this, e);
            },
            omit(e) {
              return R.cJ(this, e);
            },
            partial(...e) {
              return R.OH(Wi, this, e[0]);
            },
            required(...e) {
              return R.mw(qi, this, e[0]);
            },
          });
      });
      function Pi(e, t) {
        const n = { type: "object", shape: e ?? {}, ...R.A2(t) };
        return new Ei(n);
      }
      const ji = a.xI("ZodUnion", (e, t) => {
        lt.init(e, t),
          Hn.init(e, t),
          (e._zod.processJSONSchema = (t, n, i) => fn(e, t, n, i)),
          (e.options = t.options);
      });
      function Ai(e, t) {
        return new ji({ type: "union", options: e, ...R.A2(t) });
      }
      const Ti = a.xI("ZodIntersection", (e, t) => {
        ct.init(e, t),
          Hn.init(e, t),
          (e._zod.processJSONSchema = (t, n, i) => vn(e, t, n, i));
      });
      const Ci = a.xI("ZodEnum", (e, t) => {
        pt.init(e, t),
          Hn.init(e, t),
          (e._zod.processJSONSchema = (t, n, i) => ln(e, 0, n)),
          (e.enum = t.entries),
          (e.options = Object.values(t.entries));
        const n = new Set(Object.keys(t.entries));
        (e.extract = (e, i) => {
          const r = {};
          for (const i of e) {
            if (!n.has(i)) throw new Error(`Key ${i} not found in enum`);
            r[i] = t.entries[i];
          }
          return new Ci({ ...t, checks: [], ...R.A2(i), entries: r });
        }),
          (e.exclude = (e, i) => {
            const r = { ...t.entries };
            for (const t of e) {
              if (!n.has(t)) throw new Error(`Key ${t} not found in enum`);
              delete r[t];
            }
            return new Ci({ ...t, checks: [], ...R.A2(i), entries: r });
          });
      });
      function Ri(e, t) {
        const n = Array.isArray(e)
          ? Object.fromEntries(e.map((e) => [e, e]))
          : e;
        return new Ci({ type: "enum", entries: n, ...R.A2(t) });
      }
      const Li = a.xI("ZodLiteral", (e, t) => {
        gt.init(e, t),
          Hn.init(e, t),
          (e._zod.processJSONSchema = (t, n, i) => cn(e, t, n)),
          (e.values = new Set(t.values)),
          Object.defineProperty(e, "value", {
            get() {
              if (t.values.length > 1)
                throw new Error(
                  "This schema contains multiple valid literal values. Use `.values` instead.",
                );
              return t.values[0];
            },
          });
      });
      function Bi(e, t) {
        return new Li({
          type: "literal",
          values: Array.isArray(e) ? e : [e],
          ...R.A2(t),
        });
      }
      const Gi = a.xI("ZodTransform", (e, t) => {
        ft.init(e, t),
          Hn.init(e, t),
          (e._zod.processJSONSchema = (e, t, n) => mn(0, e)),
          (e._zod.parse = (n, i) => {
            if ("backward" === i.direction) throw new a.cV(e.constructor.name);
            n.addIssue = (i) => {
              if ("string" == typeof i) n.issues.push(R.sn(i, n.value, t));
              else {
                const t = i;
                t.fatal && (t.continue = !1),
                  t.code ?? (t.code = "custom"),
                  t.input ?? (t.input = n.value),
                  t.inst ?? (t.inst = e),
                  n.issues.push(R.sn(t));
              }
            };
            const r = t.transform(n.value, n);
            return r instanceof Promise
              ? r.then((e) => ((n.value = e), (n.fallback = !0), n))
              : ((n.value = r), (n.fallback = !0), n);
          });
      });
      function Mi(e) {
        return new Gi({ type: "transform", transform: e });
      }
      const Wi = a.xI("ZodOptional", (e, t) => {
        ht.init(e, t),
          Hn.init(e, t),
          (e._zod.processJSONSchema = (t, n, i) => kn(e, t, 0, i)),
          (e.unwrap = () => e._zod.def.innerType);
      });
      function Zi(e) {
        return new Wi({ type: "optional", innerType: e });
      }
      const Ji = a.xI("ZodExactOptional", (e, t) => {
        bt.init(e, t),
          Hn.init(e, t),
          (e._zod.processJSONSchema = (t, n, i) => kn(e, t, 0, i)),
          (e.unwrap = () => e._zod.def.innerType);
      });
      const Fi = a.xI("ZodNullable", (e, t) => {
        $t.init(e, t),
          Hn.init(e, t),
          (e._zod.processJSONSchema = (t, n, i) => hn(e, t, n, i)),
          (e.unwrap = () => e._zod.def.innerType);
      });
      function Ki(e) {
        return new Fi({ type: "nullable", innerType: e });
      }
      const Vi = a.xI("ZodDefault", (e, t) => {
        yt.init(e, t),
          Hn.init(e, t),
          (e._zod.processJSONSchema = (t, n, i) => $n(e, t, n, i)),
          (e.unwrap = () => e._zod.def.innerType),
          (e.removeDefault = e.unwrap);
      });
      const Hi = a.xI("ZodPrefault", (e, t) => {
        _t.init(e, t),
          Hn.init(e, t),
          (e._zod.processJSONSchema = (t, n, i) => yn(e, t, n, i)),
          (e.unwrap = () => e._zod.def.innerType);
      });
      const qi = a.xI("ZodNonOptional", (e, t) => {
        xt.init(e, t),
          Hn.init(e, t),
          (e._zod.processJSONSchema = (t, n, i) => bn(e, t, 0, i)),
          (e.unwrap = () => e._zod.def.innerType);
      });
      const Xi = a.xI("ZodCatch", (e, t) => {
        wt.init(e, t),
          Hn.init(e, t),
          (e._zod.processJSONSchema = (t, n, i) => In(e, t, n, i)),
          (e.unwrap = () => e._zod.def.innerType),
          (e.removeCatch = e.unwrap);
      });
      const Yi = a.xI("ZodPipe", (e, t) => {
        St.init(e, t),
          Hn.init(e, t),
          (e._zod.processJSONSchema = (t, n, i) => _n(e, t, 0, i)),
          (e.in = t.in),
          (e.out = t.out);
      });
      function Qi(e, t) {
        return new Yi({ type: "pipe", in: e, out: t });
      }
      const er = a.xI("ZodCodec", (e, t) => {
        Yi.init(e, t), Ot.init(e, t);
      });
      function tr(e, t, n) {
        return new er({
          type: "pipe",
          in: e,
          out: t,
          transform: n.decode,
          reverseTransform: n.encode,
        });
      }
      const nr = a.xI("ZodReadonly", (e, t) => {
        zt.init(e, t),
          Hn.init(e, t),
          (e._zod.processJSONSchema = (t, n, i) => xn(e, t, n, i)),
          (e.unwrap = () => e._zod.def.innerType);
      });
      const ir = a.xI("ZodCustom", (e, t) => {
        Pt.init(e, t),
          Hn.init(e, t),
          (e._zod.processJSONSchema = (e, t, n) => dn(0, e));
      });
      const rr = (...e) =>
        (function (e, t) {
          const n = R.A2(t);
          let i = n.truthy ?? ["true", "1", "yes", "on", "y", "enabled"],
            r = n.falsy ?? ["false", "0", "no", "off", "n", "disabled"];
          "sensitive" !== n.case &&
            ((i = i.map((e) => ("string" == typeof e ? e.toLowerCase() : e))),
            (r = r.map((e) => ("string" == typeof e ? e.toLowerCase() : e))));
          const a = new Set(i),
            o = new Set(r),
            s = e.Codec ?? Ot,
            u = e.Boolean ?? qe,
            l = new s({
              type: "pipe",
              in: new (e.String ?? _e)({ type: "string", error: n.error }),
              out: new u({ type: "boolean", error: n.error }),
              transform: (e, t) => {
                let i = e;
                return (
                  "sensitive" !== n.case && (i = i.toLowerCase()),
                  !!a.has(i) ||
                    (!o.has(i) &&
                      (t.issues.push({
                        code: "invalid_value",
                        expected: "stringbool",
                        values: [...a, ...o],
                        input: t.value,
                        inst: l,
                        continue: !1,
                      }),
                      {}))
                );
              },
              reverseTransform: (e, t) =>
                !0 === e ? i[0] || "true" : r[0] || "false",
              error: n.error,
            });
          return l;
        })({ Codec: er, Boolean: xi, String: Xn }, ...e);
      var ar = n(84847);
      function or(e) {
        return (function (e, t) {
          return new e({ type: "string", coerce: !0, ...R.A2(t) });
        })(Xn, e);
      }
      function sr(e) {
        return (function (e, t) {
          return new e({ type: "number", coerce: !0, checks: [], ...R.A2(t) });
        })($i, e);
      }
      function ur(e) {
        return (function (e, t) {
          return new e({ type: "boolean", coerce: !0, ...R.A2(t) });
        })(xi, e);
      }
      function lr(e) {
        return (function (e, t) {
          return new e({ type: "bigint", coerce: !0, ...R.A2(t) });
        })(ki, e);
      }
      function cr(e) {
        return (function (e, t) {
          return new e({ type: "date", coerce: !0, ...R.A2(t) });
        })(Ui, e);
      }
      (0, a.$W)((0, ar.A)());
    },
    62617: (e, t, n) => {
      var i;
      n.d(t, {
        $W: () => u,
        GT: () => a,
        cV: () => o,
        cr: () => s,
        xI: () => r,
      });
      function r(e, t, n) {
        function i(n, i) {
          if (
            (n._zod ||
              Object.defineProperty(n, "_zod", {
                value: { def: i, constr: o, traits: new Set() },
                enumerable: !1,
              }),
            n._zod.traits.has(e))
          )
            return;
          n._zod.traits.add(e), t(n, i);
          const r = o.prototype,
            a = Object.keys(r);
          for (let e = 0; e < a.length; e++) {
            const t = a[e];
            t in n || (n[t] = r[t].bind(n));
          }
        }
        const r = n?.Parent ?? Object;
        class a extends r {}
        function o(e) {
          var t;
          const r = n?.Parent ? new a() : this;
          i(r, e), (t = r._zod).deferred ?? (t.deferred = []);
          for (const e of r._zod.deferred) e();
          return r;
        }
        return (
          Object.defineProperty(a, "name", { value: e }),
          Object.defineProperty(o, "init", { value: i }),
          Object.defineProperty(o, Symbol.hasInstance, {
            value: (t) =>
              !!(n?.Parent && t instanceof n.Parent) || t?._zod?.traits?.has(e),
          }),
          Object.defineProperty(o, "name", { value: e }),
          o
        );
      }
      Symbol("zod_brand");
      class a extends Error {
        constructor() {
          super(
            "Encountered Promise during synchronous parse. Use .parseAsync() instead.",
          );
        }
      }
      class o extends Error {
        constructor(e) {
          super(`Encountered unidirectional transform during encode: ${e}`),
            (this.name = "ZodEncodeError");
        }
      }
      (i = globalThis).__zod_globalConfig ?? (i.__zod_globalConfig = {});
      const s = globalThis.__zod_globalConfig;
      function u(e) {
        return e && Object.assign(s, e), s;
      }
    },
    99482: (e, t, n) => {
      n.d(t, {
        $f: () => x,
        A2: () => w,
        B7: () => S,
        GW: () => M,
        Gv: () => b,
        LG: () => c,
        NM: () => D,
        OH: () => j,
        PO: () => s,
        QH: () => T,
        Qd: () => y,
        Rc: () => G,
        UQ: () => f,
        Up: () => U,
        W0: () => E,
        X$: () => z,
        Yv: () => v,
        cJ: () => N,
        cl: () => u,
        gJ: () => m,
        gx: () => h,
        h1: () => P,
        hI: () => $,
        iR: () => B,
        jw: () => a,
        k8: () => o,
        lQ: () => R,
        mw: () => A,
        o8: () => k,
        p6: () => l,
        qQ: () => _,
        rL: () => C,
        sn: () => W,
        w5: () => r,
        yG: () => I,
        zH: () => O,
        zM: () => g,
      });
      var i = n(62617);
      function r(e) {
        const t = Object.values(e).filter((e) => "number" == typeof e);
        return Object.entries(e)
          .filter(([e, n]) => -1 === t.indexOf(+e))
          .map(([e, t]) => t);
      }
      function a(e, t = "|") {
        return e.map((e) => S(e)).join(t);
      }
      function o(e, t) {
        return "bigint" == typeof t ? t.toString() : t;
      }
      function s(e) {
        return {
          get value() {
            {
              const t = e();
              return Object.defineProperty(this, "value", { value: t }), t;
            }
          },
        };
      }
      function u(e) {
        return null == e;
      }
      function l(e) {
        const t = e.startsWith("^") ? 1 : 0,
          n = e.endsWith("$") ? e.length - 1 : e.length;
        return e.slice(t, n);
      }
      function c(e, t) {
        const n = e / t,
          i = Math.round(n),
          r = Number.EPSILON * Math.max(Math.abs(n), 1);
        return Math.abs(n - i) < r ? 0 : n - i;
      }
      const d = Symbol("evaluating");
      function m(e, t, n) {
        let i;
        Object.defineProperty(e, t, {
          get() {
            if (i !== d) return void 0 === i && ((i = d), (i = n())), i;
          },
          set(n) {
            Object.defineProperty(e, t, { value: n });
          },
          configurable: !0,
        });
      }
      function p(e, t, n) {
        Object.defineProperty(e, t, {
          value: n,
          writable: !0,
          enumerable: !0,
          configurable: !0,
        });
      }
      function g(...e) {
        const t = {};
        for (const n of e) {
          const e = Object.getOwnPropertyDescriptors(n);
          Object.assign(t, e);
        }
        return Object.defineProperties({}, t);
      }
      function f(e) {
        return JSON.stringify(e);
      }
      function v(e) {
        return e
          .toLowerCase()
          .trim()
          .replace(/[^\w\s-]/g, "")
          .replace(/[\s_-]+/g, "-")
          .replace(/^-+|-+$/g, "");
      }
      const h =
        "captureStackTrace" in Error ? Error.captureStackTrace : (...e) => {};
      function b(e) {
        return "object" == typeof e && null !== e && !Array.isArray(e);
      }
      const $ = s(() => {
        if (i.cr.jitless) return !1;
        if (
          "undefined" != typeof navigator &&
          navigator?.userAgent?.includes("Cloudflare")
        )
          return !1;
        try {
          return new Function(""), !0;
        } catch (e) {
          return !1;
        }
      });
      function y(e) {
        if (!1 === b(e)) return !1;
        const t = e.constructor;
        if (void 0 === t) return !0;
        if ("function" != typeof t) return !0;
        const n = t.prototype;
        return (
          !1 !== b(n) &&
          !1 !== Object.prototype.hasOwnProperty.call(n, "isPrototypeOf")
        );
      }
      function I(e) {
        return y(e)
          ? { ...e }
          : Array.isArray(e)
            ? [...e]
            : e instanceof Map
              ? new Map(e)
              : e instanceof Set
                ? new Set(e)
                : e;
      }
      const _ = new Set(["string", "number", "symbol"]);
      function x(e) {
        return e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      }
      function k(e, t, n) {
        const i = new e._zod.constr(t ?? e._zod.def);
        return (t && !n?.parent) || (i._zod.parent = e), i;
      }
      function w(e) {
        const t = e;
        if (!t) return {};
        if ("string" == typeof t) return { error: () => t };
        if (void 0 !== t?.message) {
          if (void 0 !== t?.error)
            throw new Error("Cannot specify both `message` and `error` params");
          t.error = t.message;
        }
        return (
          delete t.message,
          "string" == typeof t.error ? { ...t, error: () => t.error } : t
        );
      }
      function S(e) {
        return "bigint" == typeof e
          ? e.toString() + "n"
          : "string" == typeof e
            ? `"${e}"`
            : `${e}`;
      }
      function D(e) {
        return Object.keys(e).filter(
          (t) =>
            "optional" === e[t]._zod.optin && "optional" === e[t]._zod.optout,
        );
      }
      const O = {
        safeint: [Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER],
        int32: [-2147483648, 2147483647],
        uint32: [0, 4294967295],
        float32: [-34028234663852886e22, 34028234663852886e22],
        float64: [-Number.MAX_VALUE, Number.MAX_VALUE],
      };
      function U(e, t) {
        const n = e._zod.def,
          i = n.checks;
        if (i && i.length > 0)
          throw new Error(
            ".pick() cannot be used on object schemas containing refinements",
          );
        return k(
          e,
          g(e._zod.def, {
            get shape() {
              const e = {};
              for (const i in t) {
                if (!(i in n.shape))
                  throw new Error(`Unrecognized key: "${i}"`);
                t[i] && (e[i] = n.shape[i]);
              }
              return p(this, "shape", e), e;
            },
            checks: [],
          }),
        );
      }
      function N(e, t) {
        const n = e._zod.def,
          i = n.checks;
        if (i && i.length > 0)
          throw new Error(
            ".omit() cannot be used on object schemas containing refinements",
          );
        const r = g(e._zod.def, {
          get shape() {
            const i = { ...e._zod.def.shape };
            for (const e in t) {
              if (!(e in n.shape)) throw new Error(`Unrecognized key: "${e}"`);
              t[e] && delete i[e];
            }
            return p(this, "shape", i), i;
          },
          checks: [],
        });
        return k(e, r);
      }
      function z(e, t) {
        if (!y(t))
          throw new Error("Invalid input to extend: expected a plain object");
        const n = e._zod.def.checks;
        if (n && n.length > 0) {
          const n = e._zod.def.shape;
          for (const e in t)
            if (void 0 !== Object.getOwnPropertyDescriptor(n, e))
              throw new Error(
                "Cannot overwrite keys on object schemas containing refinements. Use `.safeExtend()` instead.",
              );
        }
        const i = g(e._zod.def, {
          get shape() {
            const n = { ...e._zod.def.shape, ...t };
            return p(this, "shape", n), n;
          },
        });
        return k(e, i);
      }
      function E(e, t) {
        if (!y(t))
          throw new Error(
            "Invalid input to safeExtend: expected a plain object",
          );
        const n = g(e._zod.def, {
          get shape() {
            const n = { ...e._zod.def.shape, ...t };
            return p(this, "shape", n), n;
          },
        });
        return k(e, n);
      }
      function P(e, t) {
        if (e._zod.def.checks?.length)
          throw new Error(
            ".merge() cannot be used on object schemas containing refinements. Use .safeExtend() instead.",
          );
        const n = g(e._zod.def, {
          get shape() {
            const n = { ...e._zod.def.shape, ...t._zod.def.shape };
            return p(this, "shape", n), n;
          },
          get catchall() {
            return t._zod.def.catchall;
          },
          checks: t._zod.def.checks ?? [],
        });
        return k(e, n);
      }
      function j(e, t, n) {
        const i = t._zod.def.checks;
        if (i && i.length > 0)
          throw new Error(
            ".partial() cannot be used on object schemas containing refinements",
          );
        const r = g(t._zod.def, {
          get shape() {
            const i = t._zod.def.shape,
              r = { ...i };
            if (n)
              for (const t in n) {
                if (!(t in i)) throw new Error(`Unrecognized key: "${t}"`);
                n[t] &&
                  (r[t] = e
                    ? new e({ type: "optional", innerType: i[t] })
                    : i[t]);
              }
            else
              for (const t in i)
                r[t] = e ? new e({ type: "optional", innerType: i[t] }) : i[t];
            return p(this, "shape", r), r;
          },
          checks: [],
        });
        return k(t, r);
      }
      function A(e, t, n) {
        const i = g(t._zod.def, {
          get shape() {
            const i = t._zod.def.shape,
              r = { ...i };
            if (n)
              for (const t in n) {
                if (!(t in r)) throw new Error(`Unrecognized key: "${t}"`);
                n[t] &&
                  (r[t] = new e({ type: "nonoptional", innerType: i[t] }));
              }
            else
              for (const t in i)
                r[t] = new e({ type: "nonoptional", innerType: i[t] });
            return p(this, "shape", r), r;
          },
        });
        return k(t, i);
      }
      function T(e, t = 0) {
        if (!0 === e.aborted) return !0;
        for (let n = t; n < e.issues.length; n++)
          if (!0 !== e.issues[n]?.continue) return !0;
        return !1;
      }
      function C(e, t = 0) {
        if (!0 === e.aborted) return !0;
        for (let n = t; n < e.issues.length; n++)
          if (!1 === e.issues[n]?.continue) return !0;
        return !1;
      }
      function R(e, t) {
        return t.map((t) => {
          var n;
          return (n = t).path ?? (n.path = []), t.path.unshift(e), t;
        });
      }
      function L(e) {
        return "string" == typeof e ? e : e?.message;
      }
      function B(e, t, n) {
        const i = e.message
            ? e.message
            : (L(e.inst?._zod.def?.error?.(e)) ??
              L(t?.error?.(e)) ??
              L(n.customError?.(e)) ??
              L(n.localeError?.(e)) ??
              "Invalid input"),
          { inst: r, continue: a, input: o, ...s } = e;
        return (
          s.path ?? (s.path = []),
          (s.message = i),
          t?.reportInput && (s.input = o),
          s
        );
      }
      function G(e) {
        return Array.isArray(e)
          ? "array"
          : "string" == typeof e
            ? "string"
            : "unknown";
      }
      function M(e) {
        const t = typeof e;
        switch (t) {
          case "number":
            return Number.isNaN(e) ? "nan" : "number";
          case "object": {
            if (null === e) return "null";
            if (Array.isArray(e)) return "array";
            const t = e;
            if (
              t &&
              Object.getPrototypeOf(t) !== Object.prototype &&
              "constructor" in t &&
              t.constructor
            )
              return t.constructor.name;
          }
        }
        return t;
      }
      function W(...e) {
        const [t, n, i] = e;
        return "string" == typeof t
          ? { message: t, code: "custom", input: n, inst: i }
          : { ...t };
      }
    },
    84847: (e, t, n) => {
      n.d(t, { A: () => a });
      var i = n(99482);
      const r = () => {
        const e = {
          string: { unit: "characters", verb: "to have" },
          file: { unit: "bytes", verb: "to have" },
          array: { unit: "items", verb: "to have" },
          set: { unit: "items", verb: "to have" },
          map: { unit: "entries", verb: "to have" },
        };
        function t(t) {
          return e[t] ?? null;
        }
        const n = {
            regex: "input",
            email: "email address",
            url: "URL",
            emoji: "emoji",
            uuid: "UUID",
            uuidv4: "UUIDv4",
            uuidv6: "UUIDv6",
            nanoid: "nanoid",
            guid: "GUID",
            cuid: "cuid",
            cuid2: "cuid2",
            ulid: "ULID",
            xid: "XID",
            ksuid: "KSUID",
            datetime: "ISO datetime",
            date: "ISO date",
            time: "ISO time",
            duration: "ISO duration",
            ipv4: "IPv4 address",
            ipv6: "IPv6 address",
            mac: "MAC address",
            cidrv4: "IPv4 range",
            cidrv6: "IPv6 range",
            base64: "base64-encoded string",
            base64url: "base64url-encoded string",
            json_string: "JSON string",
            e164: "E.164 number",
            jwt: "JWT",
            template_literal: "input",
          },
          r = { nan: "NaN" };
        return (e) => {
          switch (e.code) {
            case "invalid_type": {
              const t = r[e.expected] ?? e.expected,
                n = i.GW(e.input);
              return `Invalid input: expected ${t}, received ${r[n] ?? n}`;
            }
            case "invalid_value":
              return 1 === e.values.length
                ? `Invalid input: expected ${i.B7(e.values[0])}`
                : `Invalid option: expected one of ${i.jw(e.values, "|")}`;
            case "too_big": {
              const n = e.inclusive ? "<=" : "<",
                i = t(e.origin);
              return i
                ? `Too big: expected ${e.origin ?? "value"} to have ${n}${e.maximum.toString()} ${i.unit ?? "elements"}`
                : `Too big: expected ${e.origin ?? "value"} to be ${n}${e.maximum.toString()}`;
            }
            case "too_small": {
              const n = e.inclusive ? ">=" : ">",
                i = t(e.origin);
              return i
                ? `Too small: expected ${e.origin} to have ${n}${e.minimum.toString()} ${i.unit}`
                : `Too small: expected ${e.origin} to be ${n}${e.minimum.toString()}`;
            }
            case "invalid_format": {
              const t = e;
              return "starts_with" === t.format
                ? `Invalid string: must start with "${t.prefix}"`
                : "ends_with" === t.format
                  ? `Invalid string: must end with "${t.suffix}"`
                  : "includes" === t.format
                    ? `Invalid string: must include "${t.includes}"`
                    : "regex" === t.format
                      ? `Invalid string: must match pattern ${t.pattern}`
                      : `Invalid ${n[t.format] ?? e.format}`;
            }
            case "not_multiple_of":
              return `Invalid number: must be a multiple of ${e.divisor}`;
            case "unrecognized_keys":
              return `Unrecognized key${e.keys.length > 1 ? "s" : ""}: ${i.jw(e.keys, ", ")}`;
            case "invalid_key":
              return `Invalid key in ${e.origin}`;
            case "invalid_union":
              if (
                e.options &&
                Array.isArray(e.options) &&
                e.options.length > 0
              ) {
                return `Invalid discriminator value. Expected ${e.options.map((e) => `'${e}'`).join(" | ")}`;
              }
              return "Invalid input";
            case "invalid_element":
              return `Invalid value in ${e.origin}`;
            default:
              return "Invalid input";
          }
        };
      };
      function a() {
        return { localeError: r() };
      }
    },
    10410: (e, t, n) => {
      n.r(t),
        n.d(t, {
          ar: () => a,
          az: () => s,
          be: () => c,
          bg: () => m,
          ca: () => g,
          cs: () => v,
          da: () => b,
          de: () => y,
          el: () => _,
          en: () => x.A,
          eo: () => w,
          es: () => D,
          fa: () => U,
          fi: () => z,
          fr: () => P,
          frCA: () => A,
          he: () => C,
          hr: () => L,
          hu: () => G,
          hy: () => J,
          id: () => K,
          is: () => H,
          it: () => X,
          ja: () => Q,
          ka: () => te,
          kh: () => re,
          km: () => ie,
          ko: () => oe,
          lt: () => ce,
          mk: () => me,
          ms: () => ge,
          nl: () => ve,
          no: () => be,
          ota: () => ye,
          pl: () => ke,
          ps: () => _e,
          pt: () => Se,
          ro: () => Oe,
          ru: () => ze,
          sl: () => Pe,
          sv: () => Ae,
          ta: () => Ce,
          th: () => Le,
          tr: () => Ge,
          ua: () => Ze,
          uk: () => We,
          ur: () => Fe,
          uz: () => Ve,
          vi: () => qe,
          yo: () => nt,
          zhCN: () => Ye,
          zhTW: () => et,
        });
      var i = n(99482);
      const r = () => {
        const e = {
          string: { unit: "حرف", verb: "أن يحوي" },
          file: { unit: "بايت", verb: "أن يحوي" },
          array: { unit: "عنصر", verb: "أن يحوي" },
          set: { unit: "عنصر", verb: "أن يحوي" },
        };
        function t(t) {
          return e[t] ?? null;
        }
        const n = {
            regex: "مدخل",
            email: "بريد إلكتروني",
            url: "رابط",
            emoji: "إيموجي",
            uuid: "UUID",
            uuidv4: "UUIDv4",
            uuidv6: "UUIDv6",
            nanoid: "nanoid",
            guid: "GUID",
            cuid: "cuid",
            cuid2: "cuid2",
            ulid: "ULID",
            xid: "XID",
            ksuid: "KSUID",
            datetime: "تاريخ ووقت بمعيار ISO",
            date: "تاريخ بمعيار ISO",
            time: "وقت بمعيار ISO",
            duration: "مدة بمعيار ISO",
            ipv4: "عنوان IPv4",
            ipv6: "عنوان IPv6",
            cidrv4: "مدى عناوين بصيغة IPv4",
            cidrv6: "مدى عناوين بصيغة IPv6",
            base64: "نَص بترميز base64-encoded",
            base64url: "نَص بترميز base64url-encoded",
            json_string: "نَص على هيئة JSON",
            e164: "رقم هاتف بمعيار E.164",
            jwt: "JWT",
            template_literal: "مدخل",
          },
          r = { nan: "NaN" };
        return (e) => {
          switch (e.code) {
            case "invalid_type": {
              const t = r[e.expected] ?? e.expected,
                n = i.GW(e.input),
                a = r[n] ?? n;
              return /^[A-Z]/.test(e.expected)
                ? `مدخلات غير مقبولة: يفترض إدخال instanceof ${e.expected}، ولكن تم إدخال ${a}`
                : `مدخلات غير مقبولة: يفترض إدخال ${t}، ولكن تم إدخال ${a}`;
            }
            case "invalid_value":
              return 1 === e.values.length
                ? `مدخلات غير مقبولة: يفترض إدخال ${i.B7(e.values[0])}`
                : `اختيار غير مقبول: يتوقع انتقاء أحد هذه الخيارات: ${i.jw(e.values, "|")}`;
            case "too_big": {
              const n = e.inclusive ? "<=" : "<",
                i = t(e.origin);
              return i
                ? ` أكبر من اللازم: يفترض أن تكون ${e.origin ?? "القيمة"} ${n} ${e.maximum.toString()} ${i.unit ?? "عنصر"}`
                : `أكبر من اللازم: يفترض أن تكون ${e.origin ?? "القيمة"} ${n} ${e.maximum.toString()}`;
            }
            case "too_small": {
              const n = e.inclusive ? ">=" : ">",
                i = t(e.origin);
              return i
                ? `أصغر من اللازم: يفترض لـ ${e.origin} أن يكون ${n} ${e.minimum.toString()} ${i.unit}`
                : `أصغر من اللازم: يفترض لـ ${e.origin} أن يكون ${n} ${e.minimum.toString()}`;
            }
            case "invalid_format": {
              const t = e;
              return "starts_with" === t.format
                ? `نَص غير مقبول: يجب أن يبدأ بـ "${e.prefix}"`
                : "ends_with" === t.format
                  ? `نَص غير مقبول: يجب أن ينتهي بـ "${t.suffix}"`
                  : "includes" === t.format
                    ? `نَص غير مقبول: يجب أن يتضمَّن "${t.includes}"`
                    : "regex" === t.format
                      ? `نَص غير مقبول: يجب أن يطابق النمط ${t.pattern}`
                      : `${n[t.format] ?? e.format} غير مقبول`;
            }
            case "not_multiple_of":
              return `رقم غير مقبول: يجب أن يكون من مضاعفات ${e.divisor}`;
            case "unrecognized_keys":
              return `معرف${e.keys.length > 1 ? "ات" : ""} غريب${e.keys.length > 1 ? "ة" : ""}: ${i.jw(e.keys, "، ")}`;
            case "invalid_key":
              return `معرف غير مقبول في ${e.origin}`;
            case "invalid_union":
            default:
              return "مدخل غير مقبول";
            case "invalid_element":
              return `مدخل غير مقبول في ${e.origin}`;
          }
        };
      };
      function a() {
        return { localeError: r() };
      }
      const o = () => {
        const e = {
          string: { unit: "simvol", verb: "olmalıdır" },
          file: { unit: "bayt", verb: "olmalıdır" },
          array: { unit: "element", verb: "olmalıdır" },
          set: { unit: "element", verb: "olmalıdır" },
        };
        function t(t) {
          return e[t] ?? null;
        }
        const n = {
            regex: "input",
            email: "email address",
            url: "URL",
            emoji: "emoji",
            uuid: "UUID",
            uuidv4: "UUIDv4",
            uuidv6: "UUIDv6",
            nanoid: "nanoid",
            guid: "GUID",
            cuid: "cuid",
            cuid2: "cuid2",
            ulid: "ULID",
            xid: "XID",
            ksuid: "KSUID",
            datetime: "ISO datetime",
            date: "ISO date",
            time: "ISO time",
            duration: "ISO duration",
            ipv4: "IPv4 address",
            ipv6: "IPv6 address",
            cidrv4: "IPv4 range",
            cidrv6: "IPv6 range",
            base64: "base64-encoded string",
            base64url: "base64url-encoded string",
            json_string: "JSON string",
            e164: "E.164 number",
            jwt: "JWT",
            template_literal: "input",
          },
          r = { nan: "NaN" };
        return (e) => {
          switch (e.code) {
            case "invalid_type": {
              const t = r[e.expected] ?? e.expected,
                n = i.GW(e.input),
                a = r[n] ?? n;
              return /^[A-Z]/.test(e.expected)
                ? `Yanlış dəyər: gözlənilən instanceof ${e.expected}, daxil olan ${a}`
                : `Yanlış dəyər: gözlənilən ${t}, daxil olan ${a}`;
            }
            case "invalid_value":
              return 1 === e.values.length
                ? `Yanlış dəyər: gözlənilən ${i.B7(e.values[0])}`
                : `Yanlış seçim: aşağıdakılardan biri olmalıdır: ${i.jw(e.values, "|")}`;
            case "too_big": {
              const n = e.inclusive ? "<=" : "<",
                i = t(e.origin);
              return i
                ? `Çox böyük: gözlənilən ${e.origin ?? "dəyər"} ${n}${e.maximum.toString()} ${i.unit ?? "element"}`
                : `Çox böyük: gözlənilən ${e.origin ?? "dəyər"} ${n}${e.maximum.toString()}`;
            }
            case "too_small": {
              const n = e.inclusive ? ">=" : ">",
                i = t(e.origin);
              return i
                ? `Çox kiçik: gözlənilən ${e.origin} ${n}${e.minimum.toString()} ${i.unit}`
                : `Çox kiçik: gözlənilən ${e.origin} ${n}${e.minimum.toString()}`;
            }
            case "invalid_format": {
              const t = e;
              return "starts_with" === t.format
                ? `Yanlış mətn: "${t.prefix}" ilə başlamalıdır`
                : "ends_with" === t.format
                  ? `Yanlış mətn: "${t.suffix}" ilə bitməlidir`
                  : "includes" === t.format
                    ? `Yanlış mətn: "${t.includes}" daxil olmalıdır`
                    : "regex" === t.format
                      ? `Yanlış mətn: ${t.pattern} şablonuna uyğun olmalıdır`
                      : `Yanlış ${n[t.format] ?? e.format}`;
            }
            case "not_multiple_of":
              return `Yanlış ədəd: ${e.divisor} ilə bölünə bilən olmalıdır`;
            case "unrecognized_keys":
              return `Tanınmayan açar${e.keys.length > 1 ? "lar" : ""}: ${i.jw(e.keys, ", ")}`;
            case "invalid_key":
              return `${e.origin} daxilində yanlış açar`;
            case "invalid_union":
            default:
              return "Yanlış dəyər";
            case "invalid_element":
              return `${e.origin} daxilində yanlış dəyər`;
          }
        };
      };
      function s() {
        return { localeError: o() };
      }
      function u(e, t, n, i) {
        const r = Math.abs(e),
          a = r % 10,
          o = r % 100;
        return o >= 11 && o <= 19 ? i : 1 === a ? t : a >= 2 && a <= 4 ? n : i;
      }
      const l = () => {
        const e = {
          string: {
            unit: { one: "сімвал", few: "сімвалы", many: "сімвалаў" },
            verb: "мець",
          },
          array: {
            unit: { one: "элемент", few: "элементы", many: "элементаў" },
            verb: "мець",
          },
          set: {
            unit: { one: "элемент", few: "элементы", many: "элементаў" },
            verb: "мець",
          },
          file: {
            unit: { one: "байт", few: "байты", many: "байтаў" },
            verb: "мець",
          },
        };
        function t(t) {
          return e[t] ?? null;
        }
        const n = {
            regex: "увод",
            email: "email адрас",
            url: "URL",
            emoji: "эмодзі",
            uuid: "UUID",
            uuidv4: "UUIDv4",
            uuidv6: "UUIDv6",
            nanoid: "nanoid",
            guid: "GUID",
            cuid: "cuid",
            cuid2: "cuid2",
            ulid: "ULID",
            xid: "XID",
            ksuid: "KSUID",
            datetime: "ISO дата і час",
            date: "ISO дата",
            time: "ISO час",
            duration: "ISO працягласць",
            ipv4: "IPv4 адрас",
            ipv6: "IPv6 адрас",
            cidrv4: "IPv4 дыяпазон",
            cidrv6: "IPv6 дыяпазон",
            base64: "радок у фармаце base64",
            base64url: "радок у фармаце base64url",
            json_string: "JSON радок",
            e164: "нумар E.164",
            jwt: "JWT",
            template_literal: "увод",
          },
          r = { nan: "NaN", number: "лік", array: "масіў" };
        return (e) => {
          switch (e.code) {
            case "invalid_type": {
              const t = r[e.expected] ?? e.expected,
                n = i.GW(e.input),
                a = r[n] ?? n;
              return /^[A-Z]/.test(e.expected)
                ? `Няправільны ўвод: чакаўся instanceof ${e.expected}, атрымана ${a}`
                : `Няправільны ўвод: чакаўся ${t}, атрымана ${a}`;
            }
            case "invalid_value":
              return 1 === e.values.length
                ? `Няправільны ўвод: чакалася ${i.B7(e.values[0])}`
                : `Няправільны варыянт: чакаўся адзін з ${i.jw(e.values, "|")}`;
            case "too_big": {
              const n = e.inclusive ? "<=" : "<",
                i = t(e.origin);
              if (i) {
                const t = u(
                  Number(e.maximum),
                  i.unit.one,
                  i.unit.few,
                  i.unit.many,
                );
                return `Занадта вялікі: чакалася, што ${e.origin ?? "значэнне"} павінна ${i.verb} ${n}${e.maximum.toString()} ${t}`;
              }
              return `Занадта вялікі: чакалася, што ${e.origin ?? "значэнне"} павінна быць ${n}${e.maximum.toString()}`;
            }
            case "too_small": {
              const n = e.inclusive ? ">=" : ">",
                i = t(e.origin);
              if (i) {
                const t = u(
                  Number(e.minimum),
                  i.unit.one,
                  i.unit.few,
                  i.unit.many,
                );
                return `Занадта малы: чакалася, што ${e.origin} павінна ${i.verb} ${n}${e.minimum.toString()} ${t}`;
              }
              return `Занадта малы: чакалася, што ${e.origin} павінна быць ${n}${e.minimum.toString()}`;
            }
            case "invalid_format": {
              const t = e;
              return "starts_with" === t.format
                ? `Няправільны радок: павінен пачынацца з "${t.prefix}"`
                : "ends_with" === t.format
                  ? `Няправільны радок: павінен заканчвацца на "${t.suffix}"`
                  : "includes" === t.format
                    ? `Няправільны радок: павінен змяшчаць "${t.includes}"`
                    : "regex" === t.format
                      ? `Няправільны радок: павінен адпавядаць шаблону ${t.pattern}`
                      : `Няправільны ${n[t.format] ?? e.format}`;
            }
            case "not_multiple_of":
              return `Няправільны лік: павінен быць кратным ${e.divisor}`;
            case "unrecognized_keys":
              return `Нераспазнаны ${e.keys.length > 1 ? "ключы" : "ключ"}: ${i.jw(e.keys, ", ")}`;
            case "invalid_key":
              return `Няправільны ключ у ${e.origin}`;
            case "invalid_union":
            default:
              return "Няправільны ўвод";
            case "invalid_element":
              return `Няправільнае значэнне ў ${e.origin}`;
          }
        };
      };
      function c() {
        return { localeError: l() };
      }
      const d = () => {
        const e = {
          string: { unit: "символа", verb: "да съдържа" },
          file: { unit: "байта", verb: "да съдържа" },
          array: { unit: "елемента", verb: "да съдържа" },
          set: { unit: "елемента", verb: "да съдържа" },
        };
        function t(t) {
          return e[t] ?? null;
        }
        const n = {
            regex: "вход",
            email: "имейл адрес",
            url: "URL",
            emoji: "емоджи",
            uuid: "UUID",
            uuidv4: "UUIDv4",
            uuidv6: "UUIDv6",
            nanoid: "nanoid",
            guid: "GUID",
            cuid: "cuid",
            cuid2: "cuid2",
            ulid: "ULID",
            xid: "XID",
            ksuid: "KSUID",
            datetime: "ISO време",
            date: "ISO дата",
            time: "ISO време",
            duration: "ISO продължителност",
            ipv4: "IPv4 адрес",
            ipv6: "IPv6 адрес",
            cidrv4: "IPv4 диапазон",
            cidrv6: "IPv6 диапазон",
            base64: "base64-кодиран низ",
            base64url: "base64url-кодиран низ",
            json_string: "JSON низ",
            e164: "E.164 номер",
            jwt: "JWT",
            template_literal: "вход",
          },
          r = { nan: "NaN", number: "число", array: "масив" };
        return (e) => {
          switch (e.code) {
            case "invalid_type": {
              const t = r[e.expected] ?? e.expected,
                n = i.GW(e.input),
                a = r[n] ?? n;
              return /^[A-Z]/.test(e.expected)
                ? `Невалиден вход: очакван instanceof ${e.expected}, получен ${a}`
                : `Невалиден вход: очакван ${t}, получен ${a}`;
            }
            case "invalid_value":
              return 1 === e.values.length
                ? `Невалиден вход: очакван ${i.B7(e.values[0])}`
                : `Невалидна опция: очаквано едно от ${i.jw(e.values, "|")}`;
            case "too_big": {
              const n = e.inclusive ? "<=" : "<",
                i = t(e.origin);
              return i
                ? `Твърде голямо: очаква се ${e.origin ?? "стойност"} да съдържа ${n}${e.maximum.toString()} ${i.unit ?? "елемента"}`
                : `Твърде голямо: очаква се ${e.origin ?? "стойност"} да бъде ${n}${e.maximum.toString()}`;
            }
            case "too_small": {
              const n = e.inclusive ? ">=" : ">",
                i = t(e.origin);
              return i
                ? `Твърде малко: очаква се ${e.origin} да съдържа ${n}${e.minimum.toString()} ${i.unit}`
                : `Твърде малко: очаква се ${e.origin} да бъде ${n}${e.minimum.toString()}`;
            }
            case "invalid_format": {
              const t = e;
              if ("starts_with" === t.format)
                return `Невалиден низ: трябва да започва с "${t.prefix}"`;
              if ("ends_with" === t.format)
                return `Невалиден низ: трябва да завършва с "${t.suffix}"`;
              if ("includes" === t.format)
                return `Невалиден низ: трябва да включва "${t.includes}"`;
              if ("regex" === t.format)
                return `Невалиден низ: трябва да съвпада с ${t.pattern}`;
              let i = "Невалиден";
              return (
                "emoji" === t.format && (i = "Невалидно"),
                "datetime" === t.format && (i = "Невалидно"),
                "date" === t.format && (i = "Невалидна"),
                "time" === t.format && (i = "Невалидно"),
                "duration" === t.format && (i = "Невалидна"),
                `${i} ${n[t.format] ?? e.format}`
              );
            }
            case "not_multiple_of":
              return `Невалидно число: трябва да бъде кратно на ${e.divisor}`;
            case "unrecognized_keys":
              return `Неразпознат${e.keys.length > 1 ? "и" : ""} ключ${e.keys.length > 1 ? "ове" : ""}: ${i.jw(e.keys, ", ")}`;
            case "invalid_key":
              return `Невалиден ключ в ${e.origin}`;
            case "invalid_union":
            default:
              return "Невалиден вход";
            case "invalid_element":
              return `Невалидна стойност в ${e.origin}`;
          }
        };
      };
      function m() {
        return { localeError: d() };
      }
      const p = () => {
        const e = {
          string: { unit: "caràcters", verb: "contenir" },
          file: { unit: "bytes", verb: "contenir" },
          array: { unit: "elements", verb: "contenir" },
          set: { unit: "elements", verb: "contenir" },
        };
        function t(t) {
          return e[t] ?? null;
        }
        const n = {
            regex: "entrada",
            email: "adreça electrònica",
            url: "URL",
            emoji: "emoji",
            uuid: "UUID",
            uuidv4: "UUIDv4",
            uuidv6: "UUIDv6",
            nanoid: "nanoid",
            guid: "GUID",
            cuid: "cuid",
            cuid2: "cuid2",
            ulid: "ULID",
            xid: "XID",
            ksuid: "KSUID",
            datetime: "data i hora ISO",
            date: "data ISO",
            time: "hora ISO",
            duration: "durada ISO",
            ipv4: "adreça IPv4",
            ipv6: "adreça IPv6",
            cidrv4: "rang IPv4",
            cidrv6: "rang IPv6",
            base64: "cadena codificada en base64",
            base64url: "cadena codificada en base64url",
            json_string: "cadena JSON",
            e164: "número E.164",
            jwt: "JWT",
            template_literal: "entrada",
          },
          r = { nan: "NaN" };
        return (e) => {
          switch (e.code) {
            case "invalid_type": {
              const t = r[e.expected] ?? e.expected,
                n = i.GW(e.input),
                a = r[n] ?? n;
              return /^[A-Z]/.test(e.expected)
                ? `Tipus invàlid: s'esperava instanceof ${e.expected}, s'ha rebut ${a}`
                : `Tipus invàlid: s'esperava ${t}, s'ha rebut ${a}`;
            }
            case "invalid_value":
              return 1 === e.values.length
                ? `Valor invàlid: s'esperava ${i.B7(e.values[0])}`
                : `Opció invàlida: s'esperava una de ${i.jw(e.values, " o ")}`;
            case "too_big": {
              const n = e.inclusive ? "com a màxim" : "menys de",
                i = t(e.origin);
              return i
                ? `Massa gran: s'esperava que ${e.origin ?? "el valor"} contingués ${n} ${e.maximum.toString()} ${i.unit ?? "elements"}`
                : `Massa gran: s'esperava que ${e.origin ?? "el valor"} fos ${n} ${e.maximum.toString()}`;
            }
            case "too_small": {
              const n = e.inclusive ? "com a mínim" : "més de",
                i = t(e.origin);
              return i
                ? `Massa petit: s'esperava que ${e.origin} contingués ${n} ${e.minimum.toString()} ${i.unit}`
                : `Massa petit: s'esperava que ${e.origin} fos ${n} ${e.minimum.toString()}`;
            }
            case "invalid_format": {
              const t = e;
              return "starts_with" === t.format
                ? `Format invàlid: ha de començar amb "${t.prefix}"`
                : "ends_with" === t.format
                  ? `Format invàlid: ha d'acabar amb "${t.suffix}"`
                  : "includes" === t.format
                    ? `Format invàlid: ha d'incloure "${t.includes}"`
                    : "regex" === t.format
                      ? `Format invàlid: ha de coincidir amb el patró ${t.pattern}`
                      : `Format invàlid per a ${n[t.format] ?? e.format}`;
            }
            case "not_multiple_of":
              return `Número invàlid: ha de ser múltiple de ${e.divisor}`;
            case "unrecognized_keys":
              return `Clau${e.keys.length > 1 ? "s" : ""} no reconeguda${e.keys.length > 1 ? "s" : ""}: ${i.jw(e.keys, ", ")}`;
            case "invalid_key":
              return `Clau invàlida a ${e.origin}`;
            case "invalid_union":
            default:
              return "Entrada invàlida";
            case "invalid_element":
              return `Element invàlid a ${e.origin}`;
          }
        };
      };
      function g() {
        return { localeError: p() };
      }
      const f = () => {
        const e = {
          string: { unit: "znaků", verb: "mít" },
          file: { unit: "bajtů", verb: "mít" },
          array: { unit: "prvků", verb: "mít" },
          set: { unit: "prvků", verb: "mít" },
        };
        function t(t) {
          return e[t] ?? null;
        }
        const n = {
            regex: "regulární výraz",
            email: "e-mailová adresa",
            url: "URL",
            emoji: "emoji",
            uuid: "UUID",
            uuidv4: "UUIDv4",
            uuidv6: "UUIDv6",
            nanoid: "nanoid",
            guid: "GUID",
            cuid: "cuid",
            cuid2: "cuid2",
            ulid: "ULID",
            xid: "XID",
            ksuid: "KSUID",
            datetime: "datum a čas ve formátu ISO",
            date: "datum ve formátu ISO",
            time: "čas ve formátu ISO",
            duration: "doba trvání ISO",
            ipv4: "IPv4 adresa",
            ipv6: "IPv6 adresa",
            cidrv4: "rozsah IPv4",
            cidrv6: "rozsah IPv6",
            base64: "řetězec zakódovaný ve formátu base64",
            base64url: "řetězec zakódovaný ve formátu base64url",
            json_string: "řetězec ve formátu JSON",
            e164: "číslo E.164",
            jwt: "JWT",
            template_literal: "vstup",
          },
          r = {
            nan: "NaN",
            number: "číslo",
            string: "řetězec",
            function: "funkce",
            array: "pole",
          };
        return (e) => {
          switch (e.code) {
            case "invalid_type": {
              const t = r[e.expected] ?? e.expected,
                n = i.GW(e.input),
                a = r[n] ?? n;
              return /^[A-Z]/.test(e.expected)
                ? `Neplatný vstup: očekáváno instanceof ${e.expected}, obdrženo ${a}`
                : `Neplatný vstup: očekáváno ${t}, obdrženo ${a}`;
            }
            case "invalid_value":
              return 1 === e.values.length
                ? `Neplatný vstup: očekáváno ${i.B7(e.values[0])}`
                : `Neplatná možnost: očekávána jedna z hodnot ${i.jw(e.values, "|")}`;
            case "too_big": {
              const n = e.inclusive ? "<=" : "<",
                i = t(e.origin);
              return i
                ? `Hodnota je příliš velká: ${e.origin ?? "hodnota"} musí mít ${n}${e.maximum.toString()} ${i.unit ?? "prvků"}`
                : `Hodnota je příliš velká: ${e.origin ?? "hodnota"} musí být ${n}${e.maximum.toString()}`;
            }
            case "too_small": {
              const n = e.inclusive ? ">=" : ">",
                i = t(e.origin);
              return i
                ? `Hodnota je příliš malá: ${e.origin ?? "hodnota"} musí mít ${n}${e.minimum.toString()} ${i.unit ?? "prvků"}`
                : `Hodnota je příliš malá: ${e.origin ?? "hodnota"} musí být ${n}${e.minimum.toString()}`;
            }
            case "invalid_format": {
              const t = e;
              return "starts_with" === t.format
                ? `Neplatný řetězec: musí začínat na "${t.prefix}"`
                : "ends_with" === t.format
                  ? `Neplatný řetězec: musí končit na "${t.suffix}"`
                  : "includes" === t.format
                    ? `Neplatný řetězec: musí obsahovat "${t.includes}"`
                    : "regex" === t.format
                      ? `Neplatný řetězec: musí odpovídat vzoru ${t.pattern}`
                      : `Neplatný formát ${n[t.format] ?? e.format}`;
            }
            case "not_multiple_of":
              return `Neplatné číslo: musí být násobkem ${e.divisor}`;
            case "unrecognized_keys":
              return `Neznámé klíče: ${i.jw(e.keys, ", ")}`;
            case "invalid_key":
              return `Neplatný klíč v ${e.origin}`;
            case "invalid_union":
            default:
              return "Neplatný vstup";
            case "invalid_element":
              return `Neplatná hodnota v ${e.origin}`;
          }
        };
      };
      function v() {
        return { localeError: f() };
      }
      const h = () => {
        const e = {
          string: { unit: "tegn", verb: "havde" },
          file: { unit: "bytes", verb: "havde" },
          array: { unit: "elementer", verb: "indeholdt" },
          set: { unit: "elementer", verb: "indeholdt" },
        };
        function t(t) {
          return e[t] ?? null;
        }
        const n = {
            regex: "input",
            email: "e-mailadresse",
            url: "URL",
            emoji: "emoji",
            uuid: "UUID",
            uuidv4: "UUIDv4",
            uuidv6: "UUIDv6",
            nanoid: "nanoid",
            guid: "GUID",
            cuid: "cuid",
            cuid2: "cuid2",
            ulid: "ULID",
            xid: "XID",
            ksuid: "KSUID",
            datetime: "ISO dato- og klokkeslæt",
            date: "ISO-dato",
            time: "ISO-klokkeslæt",
            duration: "ISO-varighed",
            ipv4: "IPv4-område",
            ipv6: "IPv6-område",
            cidrv4: "IPv4-spektrum",
            cidrv6: "IPv6-spektrum",
            base64: "base64-kodet streng",
            base64url: "base64url-kodet streng",
            json_string: "JSON-streng",
            e164: "E.164-nummer",
            jwt: "JWT",
            template_literal: "input",
          },
          r = {
            nan: "NaN",
            string: "streng",
            number: "tal",
            boolean: "boolean",
            array: "liste",
            object: "objekt",
            set: "sæt",
            file: "fil",
          };
        return (e) => {
          switch (e.code) {
            case "invalid_type": {
              const t = r[e.expected] ?? e.expected,
                n = i.GW(e.input),
                a = r[n] ?? n;
              return /^[A-Z]/.test(e.expected)
                ? `Ugyldigt input: forventede instanceof ${e.expected}, fik ${a}`
                : `Ugyldigt input: forventede ${t}, fik ${a}`;
            }
            case "invalid_value":
              return 1 === e.values.length
                ? `Ugyldig værdi: forventede ${i.B7(e.values[0])}`
                : `Ugyldigt valg: forventede en af følgende ${i.jw(e.values, "|")}`;
            case "too_big": {
              const n = e.inclusive ? "<=" : "<",
                i = t(e.origin),
                a = r[e.origin] ?? e.origin;
              return i
                ? `For stor: forventede ${a ?? "value"} ${i.verb} ${n} ${e.maximum.toString()} ${i.unit ?? "elementer"}`
                : `For stor: forventede ${a ?? "value"} havde ${n} ${e.maximum.toString()}`;
            }
            case "too_small": {
              const n = e.inclusive ? ">=" : ">",
                i = t(e.origin),
                a = r[e.origin] ?? e.origin;
              return i
                ? `For lille: forventede ${a} ${i.verb} ${n} ${e.minimum.toString()} ${i.unit}`
                : `For lille: forventede ${a} havde ${n} ${e.minimum.toString()}`;
            }
            case "invalid_format": {
              const t = e;
              return "starts_with" === t.format
                ? `Ugyldig streng: skal starte med "${t.prefix}"`
                : "ends_with" === t.format
                  ? `Ugyldig streng: skal ende med "${t.suffix}"`
                  : "includes" === t.format
                    ? `Ugyldig streng: skal indeholde "${t.includes}"`
                    : "regex" === t.format
                      ? `Ugyldig streng: skal matche mønsteret ${t.pattern}`
                      : `Ugyldig ${n[t.format] ?? e.format}`;
            }
            case "not_multiple_of":
              return `Ugyldigt tal: skal være deleligt med ${e.divisor}`;
            case "unrecognized_keys":
              return `${e.keys.length > 1 ? "Ukendte nøgler" : "Ukendt nøgle"}: ${i.jw(e.keys, ", ")}`;
            case "invalid_key":
              return `Ugyldig nøgle i ${e.origin}`;
            case "invalid_union":
              return "Ugyldigt input: matcher ingen af de tilladte typer";
            case "invalid_element":
              return `Ugyldig værdi i ${e.origin}`;
            default:
              return "Ugyldigt input";
          }
        };
      };
      function b() {
        return { localeError: h() };
      }
      const $ = () => {
        const e = {
          string: { unit: "Zeichen", verb: "zu haben" },
          file: { unit: "Bytes", verb: "zu haben" },
          array: { unit: "Elemente", verb: "zu haben" },
          set: { unit: "Elemente", verb: "zu haben" },
        };
        function t(t) {
          return e[t] ?? null;
        }
        const n = {
            regex: "Eingabe",
            email: "E-Mail-Adresse",
            url: "URL",
            emoji: "Emoji",
            uuid: "UUID",
            uuidv4: "UUIDv4",
            uuidv6: "UUIDv6",
            nanoid: "nanoid",
            guid: "GUID",
            cuid: "cuid",
            cuid2: "cuid2",
            ulid: "ULID",
            xid: "XID",
            ksuid: "KSUID",
            datetime: "ISO-Datum und -Uhrzeit",
            date: "ISO-Datum",
            time: "ISO-Uhrzeit",
            duration: "ISO-Dauer",
            ipv4: "IPv4-Adresse",
            ipv6: "IPv6-Adresse",
            cidrv4: "IPv4-Bereich",
            cidrv6: "IPv6-Bereich",
            base64: "Base64-codierter String",
            base64url: "Base64-URL-codierter String",
            json_string: "JSON-String",
            e164: "E.164-Nummer",
            jwt: "JWT",
            template_literal: "Eingabe",
          },
          r = { nan: "NaN", number: "Zahl", array: "Array" };
        return (e) => {
          switch (e.code) {
            case "invalid_type": {
              const t = r[e.expected] ?? e.expected,
                n = i.GW(e.input),
                a = r[n] ?? n;
              return /^[A-Z]/.test(e.expected)
                ? `Ungültige Eingabe: erwartet instanceof ${e.expected}, erhalten ${a}`
                : `Ungültige Eingabe: erwartet ${t}, erhalten ${a}`;
            }
            case "invalid_value":
              return 1 === e.values.length
                ? `Ungültige Eingabe: erwartet ${i.B7(e.values[0])}`
                : `Ungültige Option: erwartet eine von ${i.jw(e.values, "|")}`;
            case "too_big": {
              const n = e.inclusive ? "<=" : "<",
                i = t(e.origin);
              return i
                ? `Zu groß: erwartet, dass ${e.origin ?? "Wert"} ${n}${e.maximum.toString()} ${i.unit ?? "Elemente"} hat`
                : `Zu groß: erwartet, dass ${e.origin ?? "Wert"} ${n}${e.maximum.toString()} ist`;
            }
            case "too_small": {
              const n = e.inclusive ? ">=" : ">",
                i = t(e.origin);
              return i
                ? `Zu klein: erwartet, dass ${e.origin} ${n}${e.minimum.toString()} ${i.unit} hat`
                : `Zu klein: erwartet, dass ${e.origin} ${n}${e.minimum.toString()} ist`;
            }
            case "invalid_format": {
              const t = e;
              return "starts_with" === t.format
                ? `Ungültiger String: muss mit "${t.prefix}" beginnen`
                : "ends_with" === t.format
                  ? `Ungültiger String: muss mit "${t.suffix}" enden`
                  : "includes" === t.format
                    ? `Ungültiger String: muss "${t.includes}" enthalten`
                    : "regex" === t.format
                      ? `Ungültiger String: muss dem Muster ${t.pattern} entsprechen`
                      : `Ungültig: ${n[t.format] ?? e.format}`;
            }
            case "not_multiple_of":
              return `Ungültige Zahl: muss ein Vielfaches von ${e.divisor} sein`;
            case "unrecognized_keys":
              return `${e.keys.length > 1 ? "Unbekannte Schlüssel" : "Unbekannter Schlüssel"}: ${i.jw(e.keys, ", ")}`;
            case "invalid_key":
              return `Ungültiger Schlüssel in ${e.origin}`;
            case "invalid_union":
            default:
              return "Ungültige Eingabe";
            case "invalid_element":
              return `Ungültiger Wert in ${e.origin}`;
          }
        };
      };
      function y() {
        return { localeError: $() };
      }
      const I = () => {
        const e = {
          string: { unit: "χαρακτήρες", verb: "να έχει" },
          file: { unit: "bytes", verb: "να έχει" },
          array: { unit: "στοιχεία", verb: "να έχει" },
          set: { unit: "στοιχεία", verb: "να έχει" },
          map: { unit: "καταχωρήσεις", verb: "να έχει" },
        };
        function t(t) {
          return e[t] ?? null;
        }
        const n = {
            regex: "είσοδος",
            email: "διεύθυνση email",
            url: "URL",
            emoji: "emoji",
            uuid: "UUID",
            uuidv4: "UUIDv4",
            uuidv6: "UUIDv6",
            nanoid: "nanoid",
            guid: "GUID",
            cuid: "cuid",
            cuid2: "cuid2",
            ulid: "ULID",
            xid: "XID",
            ksuid: "KSUID",
            datetime: "ISO ημερομηνία και ώρα",
            date: "ISO ημερομηνία",
            time: "ISO ώρα",
            duration: "ISO διάρκεια",
            ipv4: "διεύθυνση IPv4",
            ipv6: "διεύθυνση IPv6",
            mac: "διεύθυνση MAC",
            cidrv4: "εύρος IPv4",
            cidrv6: "εύρος IPv6",
            base64: "συμβολοσειρά κωδικοποιημένη σε base64",
            base64url: "συμβολοσειρά κωδικοποιημένη σε base64url",
            json_string: "συμβολοσειρά JSON",
            e164: "αριθμός E.164",
            jwt: "JWT",
            template_literal: "είσοδος",
          },
          r = { nan: "NaN" };
        return (e) => {
          switch (e.code) {
            case "invalid_type": {
              const t = r[e.expected] ?? e.expected,
                n = i.GW(e.input),
                a = r[n] ?? n;
              return "string" == typeof e.expected && /^[A-Z]/.test(e.expected)
                ? `Μη έγκυρη είσοδος: αναμενόταν instanceof ${e.expected}, λήφθηκε ${a}`
                : `Μη έγκυρη είσοδος: αναμενόταν ${t}, λήφθηκε ${a}`;
            }
            case "invalid_value":
              return 1 === e.values.length
                ? `Μη έγκυρη είσοδος: αναμενόταν ${i.B7(e.values[0])}`
                : `Μη έγκυρη επιλογή: αναμενόταν ένα από ${i.jw(e.values, "|")}`;
            case "too_big": {
              const n = e.inclusive ? "<=" : "<",
                i = t(e.origin);
              return i
                ? `Πολύ μεγάλο: αναμενόταν ${e.origin ?? "τιμή"} να έχει ${n}${e.maximum.toString()} ${i.unit ?? "στοιχεία"}`
                : `Πολύ μεγάλο: αναμενόταν ${e.origin ?? "τιμή"} να είναι ${n}${e.maximum.toString()}`;
            }
            case "too_small": {
              const n = e.inclusive ? ">=" : ">",
                i = t(e.origin);
              return i
                ? `Πολύ μικρό: αναμενόταν ${e.origin} να έχει ${n}${e.minimum.toString()} ${i.unit}`
                : `Πολύ μικρό: αναμενόταν ${e.origin} να είναι ${n}${e.minimum.toString()}`;
            }
            case "invalid_format": {
              const t = e;
              return "starts_with" === t.format
                ? `Μη έγκυρη συμβολοσειρά: πρέπει να ξεκινά με "${t.prefix}"`
                : "ends_with" === t.format
                  ? `Μη έγκυρη συμβολοσειρά: πρέπει να τελειώνει με "${t.suffix}"`
                  : "includes" === t.format
                    ? `Μη έγκυρη συμβολοσειρά: πρέπει να περιέχει "${t.includes}"`
                    : "regex" === t.format
                      ? `Μη έγκυρη συμβολοσειρά: πρέπει να ταιριάζει με το μοτίβο ${t.pattern}`
                      : `Μη έγκυρο: ${n[t.format] ?? e.format}`;
            }
            case "not_multiple_of":
              return `Μη έγκυρος αριθμός: πρέπει να είναι πολλαπλάσιο του ${e.divisor}`;
            case "unrecognized_keys":
              return `Άγνωστ${e.keys.length > 1 ? "α" : "ο"} κλειδ${e.keys.length > 1 ? "ιά" : "ί"}: ${i.jw(e.keys, ", ")}`;
            case "invalid_key":
              return `Μη έγκυρο κλειδί στο ${e.origin}`;
            case "invalid_union":
            default:
              return "Μη έγκυρη είσοδος";
            case "invalid_element":
              return `Μη έγκυρη τιμή στο ${e.origin}`;
          }
        };
      };
      function _() {
        return { localeError: I() };
      }
      var x = n(84847);
      const k = () => {
        const e = {
          string: { unit: "karaktrojn", verb: "havi" },
          file: { unit: "bajtojn", verb: "havi" },
          array: { unit: "elementojn", verb: "havi" },
          set: { unit: "elementojn", verb: "havi" },
        };
        function t(t) {
          return e[t] ?? null;
        }
        const n = {
            regex: "enigo",
            email: "retadreso",
            url: "URL",
            emoji: "emoĝio",
            uuid: "UUID",
            uuidv4: "UUIDv4",
            uuidv6: "UUIDv6",
            nanoid: "nanoid",
            guid: "GUID",
            cuid: "cuid",
            cuid2: "cuid2",
            ulid: "ULID",
            xid: "XID",
            ksuid: "KSUID",
            datetime: "ISO-datotempo",
            date: "ISO-dato",
            time: "ISO-tempo",
            duration: "ISO-daŭro",
            ipv4: "IPv4-adreso",
            ipv6: "IPv6-adreso",
            cidrv4: "IPv4-rango",
            cidrv6: "IPv6-rango",
            base64: "64-ume kodita karaktraro",
            base64url: "URL-64-ume kodita karaktraro",
            json_string: "JSON-karaktraro",
            e164: "E.164-nombro",
            jwt: "JWT",
            template_literal: "enigo",
          },
          r = {
            nan: "NaN",
            number: "nombro",
            array: "tabelo",
            null: "senvalora",
          };
        return (e) => {
          switch (e.code) {
            case "invalid_type": {
              const t = r[e.expected] ?? e.expected,
                n = i.GW(e.input),
                a = r[n] ?? n;
              return /^[A-Z]/.test(e.expected)
                ? `Nevalida enigo: atendiĝis instanceof ${e.expected}, riceviĝis ${a}`
                : `Nevalida enigo: atendiĝis ${t}, riceviĝis ${a}`;
            }
            case "invalid_value":
              return 1 === e.values.length
                ? `Nevalida enigo: atendiĝis ${i.B7(e.values[0])}`
                : `Nevalida opcio: atendiĝis unu el ${i.jw(e.values, "|")}`;
            case "too_big": {
              const n = e.inclusive ? "<=" : "<",
                i = t(e.origin);
              return i
                ? `Tro granda: atendiĝis ke ${e.origin ?? "valoro"} havu ${n}${e.maximum.toString()} ${i.unit ?? "elementojn"}`
                : `Tro granda: atendiĝis ke ${e.origin ?? "valoro"} havu ${n}${e.maximum.toString()}`;
            }
            case "too_small": {
              const n = e.inclusive ? ">=" : ">",
                i = t(e.origin);
              return i
                ? `Tro malgranda: atendiĝis ke ${e.origin} havu ${n}${e.minimum.toString()} ${i.unit}`
                : `Tro malgranda: atendiĝis ke ${e.origin} estu ${n}${e.minimum.toString()}`;
            }
            case "invalid_format": {
              const t = e;
              return "starts_with" === t.format
                ? `Nevalida karaktraro: devas komenciĝi per "${t.prefix}"`
                : "ends_with" === t.format
                  ? `Nevalida karaktraro: devas finiĝi per "${t.suffix}"`
                  : "includes" === t.format
                    ? `Nevalida karaktraro: devas inkluzivi "${t.includes}"`
                    : "regex" === t.format
                      ? `Nevalida karaktraro: devas kongrui kun la modelo ${t.pattern}`
                      : `Nevalida ${n[t.format] ?? e.format}`;
            }
            case "not_multiple_of":
              return `Nevalida nombro: devas esti oblo de ${e.divisor}`;
            case "unrecognized_keys":
              return `Nekonata${e.keys.length > 1 ? "j" : ""} ŝlosilo${e.keys.length > 1 ? "j" : ""}: ${i.jw(e.keys, ", ")}`;
            case "invalid_key":
              return `Nevalida ŝlosilo en ${e.origin}`;
            case "invalid_union":
            default:
              return "Nevalida enigo";
            case "invalid_element":
              return `Nevalida valoro en ${e.origin}`;
          }
        };
      };
      function w() {
        return { localeError: k() };
      }
      const S = () => {
        const e = {
          string: { unit: "caracteres", verb: "tener" },
          file: { unit: "bytes", verb: "tener" },
          array: { unit: "elementos", verb: "tener" },
          set: { unit: "elementos", verb: "tener" },
        };
        function t(t) {
          return e[t] ?? null;
        }
        const n = {
            regex: "entrada",
            email: "dirección de correo electrónico",
            url: "URL",
            emoji: "emoji",
            uuid: "UUID",
            uuidv4: "UUIDv4",
            uuidv6: "UUIDv6",
            nanoid: "nanoid",
            guid: "GUID",
            cuid: "cuid",
            cuid2: "cuid2",
            ulid: "ULID",
            xid: "XID",
            ksuid: "KSUID",
            datetime: "fecha y hora ISO",
            date: "fecha ISO",
            time: "hora ISO",
            duration: "duración ISO",
            ipv4: "dirección IPv4",
            ipv6: "dirección IPv6",
            cidrv4: "rango IPv4",
            cidrv6: "rango IPv6",
            base64: "cadena codificada en base64",
            base64url: "URL codificada en base64",
            json_string: "cadena JSON",
            e164: "número E.164",
            jwt: "JWT",
            template_literal: "entrada",
          },
          r = {
            nan: "NaN",
            string: "texto",
            number: "número",
            boolean: "booleano",
            array: "arreglo",
            object: "objeto",
            set: "conjunto",
            file: "archivo",
            date: "fecha",
            bigint: "número grande",
            symbol: "símbolo",
            undefined: "indefinido",
            null: "nulo",
            function: "función",
            map: "mapa",
            record: "registro",
            tuple: "tupla",
            enum: "enumeración",
            union: "unión",
            literal: "literal",
            promise: "promesa",
            void: "vacío",
            never: "nunca",
            unknown: "desconocido",
            any: "cualquiera",
          };
        return (e) => {
          switch (e.code) {
            case "invalid_type": {
              const t = r[e.expected] ?? e.expected,
                n = i.GW(e.input),
                a = r[n] ?? n;
              return /^[A-Z]/.test(e.expected)
                ? `Entrada inválida: se esperaba instanceof ${e.expected}, recibido ${a}`
                : `Entrada inválida: se esperaba ${t}, recibido ${a}`;
            }
            case "invalid_value":
              return 1 === e.values.length
                ? `Entrada inválida: se esperaba ${i.B7(e.values[0])}`
                : `Opción inválida: se esperaba una de ${i.jw(e.values, "|")}`;
            case "too_big": {
              const n = e.inclusive ? "<=" : "<",
                i = t(e.origin),
                a = r[e.origin] ?? e.origin;
              return i
                ? `Demasiado grande: se esperaba que ${a ?? "valor"} tuviera ${n}${e.maximum.toString()} ${i.unit ?? "elementos"}`
                : `Demasiado grande: se esperaba que ${a ?? "valor"} fuera ${n}${e.maximum.toString()}`;
            }
            case "too_small": {
              const n = e.inclusive ? ">=" : ">",
                i = t(e.origin),
                a = r[e.origin] ?? e.origin;
              return i
                ? `Demasiado pequeño: se esperaba que ${a} tuviera ${n}${e.minimum.toString()} ${i.unit}`
                : `Demasiado pequeño: se esperaba que ${a} fuera ${n}${e.minimum.toString()}`;
            }
            case "invalid_format": {
              const t = e;
              return "starts_with" === t.format
                ? `Cadena inválida: debe comenzar con "${t.prefix}"`
                : "ends_with" === t.format
                  ? `Cadena inválida: debe terminar en "${t.suffix}"`
                  : "includes" === t.format
                    ? `Cadena inválida: debe incluir "${t.includes}"`
                    : "regex" === t.format
                      ? `Cadena inválida: debe coincidir con el patrón ${t.pattern}`
                      : `Inválido ${n[t.format] ?? e.format}`;
            }
            case "not_multiple_of":
              return `Número inválido: debe ser múltiplo de ${e.divisor}`;
            case "unrecognized_keys":
              return `Llave${e.keys.length > 1 ? "s" : ""} desconocida${e.keys.length > 1 ? "s" : ""}: ${i.jw(e.keys, ", ")}`;
            case "invalid_key":
              return `Llave inválida en ${r[e.origin] ?? e.origin}`;
            case "invalid_union":
            default:
              return "Entrada inválida";
            case "invalid_element":
              return `Valor inválido en ${r[e.origin] ?? e.origin}`;
          }
        };
      };
      function D() {
        return { localeError: S() };
      }
      const O = () => {
        const e = {
          string: { unit: "کاراکتر", verb: "داشته باشد" },
          file: { unit: "بایت", verb: "داشته باشد" },
          array: { unit: "آیتم", verb: "داشته باشد" },
          set: { unit: "آیتم", verb: "داشته باشد" },
        };
        function t(t) {
          return e[t] ?? null;
        }
        const n = {
            regex: "ورودی",
            email: "آدرس ایمیل",
            url: "URL",
            emoji: "ایموجی",
            uuid: "UUID",
            uuidv4: "UUIDv4",
            uuidv6: "UUIDv6",
            nanoid: "nanoid",
            guid: "GUID",
            cuid: "cuid",
            cuid2: "cuid2",
            ulid: "ULID",
            xid: "XID",
            ksuid: "KSUID",
            datetime: "تاریخ و زمان ایزو",
            date: "تاریخ ایزو",
            time: "زمان ایزو",
            duration: "مدت زمان ایزو",
            ipv4: "IPv4 آدرس",
            ipv6: "IPv6 آدرس",
            cidrv4: "IPv4 دامنه",
            cidrv6: "IPv6 دامنه",
            base64: "base64-encoded رشته",
            base64url: "base64url-encoded رشته",
            json_string: "JSON رشته",
            e164: "E.164 عدد",
            jwt: "JWT",
            template_literal: "ورودی",
          },
          r = { nan: "NaN", number: "عدد", array: "آرایه" };
        return (e) => {
          switch (e.code) {
            case "invalid_type": {
              const t = r[e.expected] ?? e.expected,
                n = i.GW(e.input),
                a = r[n] ?? n;
              return /^[A-Z]/.test(e.expected)
                ? `ورودی نامعتبر: می‌بایست instanceof ${e.expected} می‌بود، ${a} دریافت شد`
                : `ورودی نامعتبر: می‌بایست ${t} می‌بود، ${a} دریافت شد`;
            }
            case "invalid_value":
              return 1 === e.values.length
                ? `ورودی نامعتبر: می‌بایست ${i.B7(e.values[0])} می‌بود`
                : `گزینه نامعتبر: می‌بایست یکی از ${i.jw(e.values, "|")} می‌بود`;
            case "too_big": {
              const n = e.inclusive ? "<=" : "<",
                i = t(e.origin);
              return i
                ? `خیلی بزرگ: ${e.origin ?? "مقدار"} باید ${n}${e.maximum.toString()} ${i.unit ?? "عنصر"} باشد`
                : `خیلی بزرگ: ${e.origin ?? "مقدار"} باید ${n}${e.maximum.toString()} باشد`;
            }
            case "too_small": {
              const n = e.inclusive ? ">=" : ">",
                i = t(e.origin);
              return i
                ? `خیلی کوچک: ${e.origin} باید ${n}${e.minimum.toString()} ${i.unit} باشد`
                : `خیلی کوچک: ${e.origin} باید ${n}${e.minimum.toString()} باشد`;
            }
            case "invalid_format": {
              const t = e;
              return "starts_with" === t.format
                ? `رشته نامعتبر: باید با "${t.prefix}" شروع شود`
                : "ends_with" === t.format
                  ? `رشته نامعتبر: باید با "${t.suffix}" تمام شود`
                  : "includes" === t.format
                    ? `رشته نامعتبر: باید شامل "${t.includes}" باشد`
                    : "regex" === t.format
                      ? `رشته نامعتبر: باید با الگوی ${t.pattern} مطابقت داشته باشد`
                      : `${n[t.format] ?? e.format} نامعتبر`;
            }
            case "not_multiple_of":
              return `عدد نامعتبر: باید مضرب ${e.divisor} باشد`;
            case "unrecognized_keys":
              return `کلید${e.keys.length > 1 ? "های" : ""} ناشناس: ${i.jw(e.keys, ", ")}`;
            case "invalid_key":
              return `کلید ناشناس در ${e.origin}`;
            case "invalid_union":
            default:
              return "ورودی نامعتبر";
            case "invalid_element":
              return `مقدار نامعتبر در ${e.origin}`;
          }
        };
      };
      function U() {
        return { localeError: O() };
      }
      const N = () => {
        const e = {
          string: { unit: "merkkiä", subject: "merkkijonon" },
          file: { unit: "tavua", subject: "tiedoston" },
          array: { unit: "alkiota", subject: "listan" },
          set: { unit: "alkiota", subject: "joukon" },
          number: { unit: "", subject: "luvun" },
          bigint: { unit: "", subject: "suuren kokonaisluvun" },
          int: { unit: "", subject: "kokonaisluvun" },
          date: { unit: "", subject: "päivämäärän" },
        };
        function t(t) {
          return e[t] ?? null;
        }
        const n = {
            regex: "säännöllinen lauseke",
            email: "sähköpostiosoite",
            url: "URL-osoite",
            emoji: "emoji",
            uuid: "UUID",
            uuidv4: "UUIDv4",
            uuidv6: "UUIDv6",
            nanoid: "nanoid",
            guid: "GUID",
            cuid: "cuid",
            cuid2: "cuid2",
            ulid: "ULID",
            xid: "XID",
            ksuid: "KSUID",
            datetime: "ISO-aikaleima",
            date: "ISO-päivämäärä",
            time: "ISO-aika",
            duration: "ISO-kesto",
            ipv4: "IPv4-osoite",
            ipv6: "IPv6-osoite",
            cidrv4: "IPv4-alue",
            cidrv6: "IPv6-alue",
            base64: "base64-koodattu merkkijono",
            base64url: "base64url-koodattu merkkijono",
            json_string: "JSON-merkkijono",
            e164: "E.164-luku",
            jwt: "JWT",
            template_literal: "templaattimerkkijono",
          },
          r = { nan: "NaN" };
        return (e) => {
          switch (e.code) {
            case "invalid_type": {
              const t = r[e.expected] ?? e.expected,
                n = i.GW(e.input),
                a = r[n] ?? n;
              return /^[A-Z]/.test(e.expected)
                ? `Virheellinen tyyppi: odotettiin instanceof ${e.expected}, oli ${a}`
                : `Virheellinen tyyppi: odotettiin ${t}, oli ${a}`;
            }
            case "invalid_value":
              return 1 === e.values.length
                ? `Virheellinen syöte: täytyy olla ${i.B7(e.values[0])}`
                : `Virheellinen valinta: täytyy olla yksi seuraavista: ${i.jw(e.values, "|")}`;
            case "too_big": {
              const n = e.inclusive ? "<=" : "<",
                i = t(e.origin);
              return i
                ? `Liian suuri: ${i.subject} täytyy olla ${n}${e.maximum.toString()} ${i.unit}`.trim()
                : `Liian suuri: arvon täytyy olla ${n}${e.maximum.toString()}`;
            }
            case "too_small": {
              const n = e.inclusive ? ">=" : ">",
                i = t(e.origin);
              return i
                ? `Liian pieni: ${i.subject} täytyy olla ${n}${e.minimum.toString()} ${i.unit}`.trim()
                : `Liian pieni: arvon täytyy olla ${n}${e.minimum.toString()}`;
            }
            case "invalid_format": {
              const t = e;
              return "starts_with" === t.format
                ? `Virheellinen syöte: täytyy alkaa "${t.prefix}"`
                : "ends_with" === t.format
                  ? `Virheellinen syöte: täytyy loppua "${t.suffix}"`
                  : "includes" === t.format
                    ? `Virheellinen syöte: täytyy sisältää "${t.includes}"`
                    : "regex" === t.format
                      ? `Virheellinen syöte: täytyy vastata säännöllistä lauseketta ${t.pattern}`
                      : `Virheellinen ${n[t.format] ?? e.format}`;
            }
            case "not_multiple_of":
              return `Virheellinen luku: täytyy olla luvun ${e.divisor} monikerta`;
            case "unrecognized_keys":
              return `${e.keys.length > 1 ? "Tuntemattomat avaimet" : "Tuntematon avain"}: ${i.jw(e.keys, ", ")}`;
            case "invalid_key":
              return "Virheellinen avain tietueessa";
            case "invalid_union":
              return "Virheellinen unioni";
            case "invalid_element":
              return "Virheellinen arvo joukossa";
            default:
              return "Virheellinen syöte";
          }
        };
      };
      function z() {
        return { localeError: N() };
      }
      const E = () => {
        const e = {
          string: { unit: "caractères", verb: "avoir" },
          file: { unit: "octets", verb: "avoir" },
          array: { unit: "éléments", verb: "avoir" },
          set: { unit: "éléments", verb: "avoir" },
        };
        function t(t) {
          return e[t] ?? null;
        }
        const n = {
            regex: "entrée",
            email: "adresse e-mail",
            url: "URL",
            emoji: "emoji",
            uuid: "UUID",
            uuidv4: "UUIDv4",
            uuidv6: "UUIDv6",
            nanoid: "nanoid",
            guid: "GUID",
            cuid: "cuid",
            cuid2: "cuid2",
            ulid: "ULID",
            xid: "XID",
            ksuid: "KSUID",
            datetime: "date et heure ISO",
            date: "date ISO",
            time: "heure ISO",
            duration: "durée ISO",
            ipv4: "adresse IPv4",
            ipv6: "adresse IPv6",
            cidrv4: "plage IPv4",
            cidrv6: "plage IPv6",
            base64: "chaîne encodée en base64",
            base64url: "chaîne encodée en base64url",
            json_string: "chaîne JSON",
            e164: "numéro E.164",
            jwt: "JWT",
            template_literal: "entrée",
          },
          r = {
            string: "chaîne",
            number: "nombre",
            int: "entier",
            boolean: "booléen",
            bigint: "grand entier",
            symbol: "symbole",
            undefined: "indéfini",
            null: "null",
            never: "jamais",
            void: "vide",
            date: "date",
            array: "tableau",
            object: "objet",
            tuple: "tuple",
            record: "enregistrement",
            map: "carte",
            set: "ensemble",
            file: "fichier",
            nonoptional: "non-optionnel",
            nan: "NaN",
            function: "fonction",
          };
        return (e) => {
          switch (e.code) {
            case "invalid_type": {
              const t = r[e.expected] ?? e.expected,
                n = i.GW(e.input),
                a = r[n] ?? n;
              return /^[A-Z]/.test(e.expected)
                ? `Entrée invalide : instanceof ${e.expected} attendu, ${a} reçu`
                : `Entrée invalide : ${t} attendu, ${a} reçu`;
            }
            case "invalid_value":
              return 1 === e.values.length
                ? `Entrée invalide : ${i.B7(e.values[0])} attendu`
                : `Option invalide : une valeur parmi ${i.jw(e.values, "|")} attendue`;
            case "too_big": {
              const n = e.inclusive ? "<=" : "<",
                i = t(e.origin);
              return i
                ? `Trop grand : ${r[e.origin] ?? "valeur"} doit ${i.verb} ${n}${e.maximum.toString()} ${i.unit ?? "élément(s)"}`
                : `Trop grand : ${r[e.origin] ?? "valeur"} doit être ${n}${e.maximum.toString()}`;
            }
            case "too_small": {
              const n = e.inclusive ? ">=" : ">",
                i = t(e.origin);
              return i
                ? `Trop petit : ${r[e.origin] ?? "valeur"} doit ${i.verb} ${n}${e.minimum.toString()} ${i.unit}`
                : `Trop petit : ${r[e.origin] ?? "valeur"} doit être ${n}${e.minimum.toString()}`;
            }
            case "invalid_format": {
              const t = e;
              return "starts_with" === t.format
                ? `Chaîne invalide : doit commencer par "${t.prefix}"`
                : "ends_with" === t.format
                  ? `Chaîne invalide : doit se terminer par "${t.suffix}"`
                  : "includes" === t.format
                    ? `Chaîne invalide : doit inclure "${t.includes}"`
                    : "regex" === t.format
                      ? `Chaîne invalide : doit correspondre au modèle ${t.pattern}`
                      : `${n[t.format] ?? e.format} invalide`;
            }
            case "not_multiple_of":
              return `Nombre invalide : doit être un multiple de ${e.divisor}`;
            case "unrecognized_keys":
              return `Clé${e.keys.length > 1 ? "s" : ""} non reconnue${e.keys.length > 1 ? "s" : ""} : ${i.jw(e.keys, ", ")}`;
            case "invalid_key":
              return `Clé invalide dans ${e.origin}`;
            case "invalid_union":
            default:
              return "Entrée invalide";
            case "invalid_element":
              return `Valeur invalide dans ${e.origin}`;
          }
        };
      };
      function P() {
        return { localeError: E() };
      }
      const j = () => {
        const e = {
          string: { unit: "caractères", verb: "avoir" },
          file: { unit: "octets", verb: "avoir" },
          array: { unit: "éléments", verb: "avoir" },
          set: { unit: "éléments", verb: "avoir" },
        };
        function t(t) {
          return e[t] ?? null;
        }
        const n = {
            regex: "entrée",
            email: "adresse courriel",
            url: "URL",
            emoji: "emoji",
            uuid: "UUID",
            uuidv4: "UUIDv4",
            uuidv6: "UUIDv6",
            nanoid: "nanoid",
            guid: "GUID",
            cuid: "cuid",
            cuid2: "cuid2",
            ulid: "ULID",
            xid: "XID",
            ksuid: "KSUID",
            datetime: "date-heure ISO",
            date: "date ISO",
            time: "heure ISO",
            duration: "durée ISO",
            ipv4: "adresse IPv4",
            ipv6: "adresse IPv6",
            cidrv4: "plage IPv4",
            cidrv6: "plage IPv6",
            base64: "chaîne encodée en base64",
            base64url: "chaîne encodée en base64url",
            json_string: "chaîne JSON",
            e164: "numéro E.164",
            jwt: "JWT",
            template_literal: "entrée",
          },
          r = { nan: "NaN" };
        return (e) => {
          switch (e.code) {
            case "invalid_type": {
              const t = r[e.expected] ?? e.expected,
                n = i.GW(e.input),
                a = r[n] ?? n;
              return /^[A-Z]/.test(e.expected)
                ? `Entrée invalide : attendu instanceof ${e.expected}, reçu ${a}`
                : `Entrée invalide : attendu ${t}, reçu ${a}`;
            }
            case "invalid_value":
              return 1 === e.values.length
                ? `Entrée invalide : attendu ${i.B7(e.values[0])}`
                : `Option invalide : attendu l'une des valeurs suivantes ${i.jw(e.values, "|")}`;
            case "too_big": {
              const n = e.inclusive ? "≤" : "<",
                i = t(e.origin);
              return i
                ? `Trop grand : attendu que ${e.origin ?? "la valeur"} ait ${n}${e.maximum.toString()} ${i.unit}`
                : `Trop grand : attendu que ${e.origin ?? "la valeur"} soit ${n}${e.maximum.toString()}`;
            }
            case "too_small": {
              const n = e.inclusive ? "≥" : ">",
                i = t(e.origin);
              return i
                ? `Trop petit : attendu que ${e.origin} ait ${n}${e.minimum.toString()} ${i.unit}`
                : `Trop petit : attendu que ${e.origin} soit ${n}${e.minimum.toString()}`;
            }
            case "invalid_format": {
              const t = e;
              return "starts_with" === t.format
                ? `Chaîne invalide : doit commencer par "${t.prefix}"`
                : "ends_with" === t.format
                  ? `Chaîne invalide : doit se terminer par "${t.suffix}"`
                  : "includes" === t.format
                    ? `Chaîne invalide : doit inclure "${t.includes}"`
                    : "regex" === t.format
                      ? `Chaîne invalide : doit correspondre au motif ${t.pattern}`
                      : `${n[t.format] ?? e.format} invalide`;
            }
            case "not_multiple_of":
              return `Nombre invalide : doit être un multiple de ${e.divisor}`;
            case "unrecognized_keys":
              return `Clé${e.keys.length > 1 ? "s" : ""} non reconnue${e.keys.length > 1 ? "s" : ""} : ${i.jw(e.keys, ", ")}`;
            case "invalid_key":
              return `Clé invalide dans ${e.origin}`;
            case "invalid_union":
            default:
              return "Entrée invalide";
            case "invalid_element":
              return `Valeur invalide dans ${e.origin}`;
          }
        };
      };
      function A() {
        return { localeError: j() };
      }
      const T = () => {
        const e = {
            string: { label: "מחרוזת", gender: "f" },
            number: { label: "מספר", gender: "m" },
            boolean: { label: "ערך בוליאני", gender: "m" },
            bigint: { label: "BigInt", gender: "m" },
            date: { label: "תאריך", gender: "m" },
            array: { label: "מערך", gender: "m" },
            object: { label: "אובייקט", gender: "m" },
            null: { label: "ערך ריק (null)", gender: "m" },
            undefined: { label: "ערך לא מוגדר (undefined)", gender: "m" },
            symbol: { label: "סימבול (Symbol)", gender: "m" },
            function: { label: "פונקציה", gender: "f" },
            map: { label: "מפה (Map)", gender: "f" },
            set: { label: "קבוצה (Set)", gender: "f" },
            file: { label: "קובץ", gender: "m" },
            promise: { label: "Promise", gender: "m" },
            NaN: { label: "NaN", gender: "m" },
            unknown: { label: "ערך לא ידוע", gender: "m" },
            value: { label: "ערך", gender: "m" },
          },
          t = {
            string: { unit: "תווים", shortLabel: "קצר", longLabel: "ארוך" },
            file: { unit: "בייטים", shortLabel: "קטן", longLabel: "גדול" },
            array: { unit: "פריטים", shortLabel: "קטן", longLabel: "גדול" },
            set: { unit: "פריטים", shortLabel: "קטן", longLabel: "גדול" },
            number: { unit: "", shortLabel: "קטן", longLabel: "גדול" },
          },
          n = (t) => (t ? e[t] : void 0),
          r = (t) => {
            const i = n(t);
            return i ? i.label : (t ?? e.unknown.label);
          },
          a = (e) => `ה${r(e)}`,
          o = (e) => {
            const t = n(e);
            return "f" === (t?.gender ?? "m") ? "צריכה להיות" : "צריך להיות";
          },
          s = (e) => (e ? (t[e] ?? null) : null),
          u = {
            regex: { label: "קלט", gender: "m" },
            email: { label: "כתובת אימייל", gender: "f" },
            url: { label: "כתובת רשת", gender: "f" },
            emoji: { label: "אימוג'י", gender: "m" },
            uuid: { label: "UUID", gender: "m" },
            nanoid: { label: "nanoid", gender: "m" },
            guid: { label: "GUID", gender: "m" },
            cuid: { label: "cuid", gender: "m" },
            cuid2: { label: "cuid2", gender: "m" },
            ulid: { label: "ULID", gender: "m" },
            xid: { label: "XID", gender: "m" },
            ksuid: { label: "KSUID", gender: "m" },
            datetime: { label: "תאריך וזמן ISO", gender: "m" },
            date: { label: "תאריך ISO", gender: "m" },
            time: { label: "זמן ISO", gender: "m" },
            duration: { label: "משך זמן ISO", gender: "m" },
            ipv4: { label: "כתובת IPv4", gender: "f" },
            ipv6: { label: "כתובת IPv6", gender: "f" },
            cidrv4: { label: "טווח IPv4", gender: "m" },
            cidrv6: { label: "טווח IPv6", gender: "m" },
            base64: { label: "מחרוזת בבסיס 64", gender: "f" },
            base64url: { label: "מחרוזת בבסיס 64 לכתובות רשת", gender: "f" },
            json_string: { label: "מחרוזת JSON", gender: "f" },
            e164: { label: "מספר E.164", gender: "m" },
            jwt: { label: "JWT", gender: "m" },
            ends_with: { label: "קלט", gender: "m" },
            includes: { label: "קלט", gender: "m" },
            lowercase: { label: "קלט", gender: "m" },
            starts_with: { label: "קלט", gender: "m" },
            uppercase: { label: "קלט", gender: "m" },
          },
          l = { nan: "NaN" };
        return (t) => {
          switch (t.code) {
            case "invalid_type": {
              const n = t.expected,
                a = l[n ?? ""] ?? r(n),
                o = i.GW(t.input),
                s = l[o] ?? e[o]?.label ?? o;
              return /^[A-Z]/.test(t.expected)
                ? `קלט לא תקין: צריך להיות instanceof ${t.expected}, התקבל ${s}`
                : `קלט לא תקין: צריך להיות ${a}, התקבל ${s}`;
            }
            case "invalid_value": {
              if (1 === t.values.length)
                return `ערך לא תקין: הערך חייב להיות ${i.B7(t.values[0])}`;
              const e = t.values.map((e) => i.B7(e));
              if (2 === t.values.length)
                return `ערך לא תקין: האפשרויות המתאימות הן ${e[0]} או ${e[1]}`;
              const n = e[e.length - 1];
              return `ערך לא תקין: האפשרויות המתאימות הן ${e.slice(0, -1).join(", ")} או ${n}`;
            }
            case "too_big": {
              const e = s(t.origin),
                n = a(t.origin ?? "value");
              if ("string" === t.origin)
                return `${e?.longLabel ?? "ארוך"} מדי: ${n} צריכה להכיל ${t.maximum.toString()} ${e?.unit ?? ""} ${t.inclusive ? "או פחות" : "לכל היותר"}`.trim();
              if ("number" === t.origin) {
                return `גדול מדי: ${n} צריך להיות ${t.inclusive ? `קטן או שווה ל-${t.maximum}` : `קטן מ-${t.maximum}`}`;
              }
              if ("array" === t.origin || "set" === t.origin) {
                return `גדול מדי: ${n} ${"set" === t.origin ? "צריכה" : "צריך"} להכיל ${t.inclusive ? `${t.maximum} ${e?.unit ?? ""} או פחות` : `פחות מ-${t.maximum} ${e?.unit ?? ""}`}`.trim();
              }
              const i = t.inclusive ? "<=" : "<",
                r = o(t.origin ?? "value");
              return e?.unit
                ? `${e.longLabel} מדי: ${n} ${r} ${i}${t.maximum.toString()} ${e.unit}`
                : `${e?.longLabel ?? "גדול"} מדי: ${n} ${r} ${i}${t.maximum.toString()}`;
            }
            case "too_small": {
              const e = s(t.origin),
                n = a(t.origin ?? "value");
              if ("string" === t.origin)
                return `${e?.shortLabel ?? "קצר"} מדי: ${n} צריכה להכיל ${t.minimum.toString()} ${e?.unit ?? ""} ${t.inclusive ? "או יותר" : "לפחות"}`.trim();
              if ("number" === t.origin) {
                return `קטן מדי: ${n} צריך להיות ${t.inclusive ? `גדול או שווה ל-${t.minimum}` : `גדול מ-${t.minimum}`}`;
              }
              if ("array" === t.origin || "set" === t.origin) {
                const i = "set" === t.origin ? "צריכה" : "צריך";
                if (1 === t.minimum && t.inclusive) {
                  return `קטן מדי: ${n} ${i} להכיל ${(t.origin, "לפחות פריט אחד")}`;
                }
                return `קטן מדי: ${n} ${i} להכיל ${t.inclusive ? `${t.minimum} ${e?.unit ?? ""} או יותר` : `יותר מ-${t.minimum} ${e?.unit ?? ""}`}`.trim();
              }
              const i = t.inclusive ? ">=" : ">",
                r = o(t.origin ?? "value");
              return e?.unit
                ? `${e.shortLabel} מדי: ${n} ${r} ${i}${t.minimum.toString()} ${e.unit}`
                : `${e?.shortLabel ?? "קטן"} מדי: ${n} ${r} ${i}${t.minimum.toString()}`;
            }
            case "invalid_format": {
              const e = t;
              if ("starts_with" === e.format)
                return `המחרוזת חייבת להתחיל ב "${e.prefix}"`;
              if ("ends_with" === e.format)
                return `המחרוזת חייבת להסתיים ב "${e.suffix}"`;
              if ("includes" === e.format)
                return `המחרוזת חייבת לכלול "${e.includes}"`;
              if ("regex" === e.format)
                return `המחרוזת חייבת להתאים לתבנית ${e.pattern}`;
              const n = u[e.format];
              return `${n?.label ?? e.format} לא ${"f" === (n?.gender ?? "m") ? "תקינה" : "תקין"}`;
            }
            case "not_multiple_of":
              return `מספר לא תקין: חייב להיות מכפלה של ${t.divisor}`;
            case "unrecognized_keys":
              return `מפתח${t.keys.length > 1 ? "ות" : ""} לא מזוה${t.keys.length > 1 ? "ים" : "ה"}: ${i.jw(t.keys, ", ")}`;
            case "invalid_key":
              return "שדה לא תקין באובייקט";
            case "invalid_union":
            default:
              return "קלט לא תקין";
            case "invalid_element":
              return `ערך לא תקין ב${a(t.origin ?? "array")}`;
          }
        };
      };
      function C() {
        return { localeError: T() };
      }
      const R = () => {
        const e = {
          string: { unit: "znakova", verb: "imati" },
          file: { unit: "bajtova", verb: "imati" },
          array: { unit: "stavki", verb: "imati" },
          set: { unit: "stavki", verb: "imati" },
        };
        function t(t) {
          return e[t] ?? null;
        }
        const n = {
            regex: "unos",
            email: "email adresa",
            url: "URL",
            emoji: "emoji",
            uuid: "UUID",
            uuidv4: "UUIDv4",
            uuidv6: "UUIDv6",
            nanoid: "nanoid",
            guid: "GUID",
            cuid: "cuid",
            cuid2: "cuid2",
            ulid: "ULID",
            xid: "XID",
            ksuid: "KSUID",
            datetime: "ISO datum i vrijeme",
            date: "ISO datum",
            time: "ISO vrijeme",
            duration: "ISO trajanje",
            ipv4: "IPv4 adresa",
            ipv6: "IPv6 adresa",
            cidrv4: "IPv4 raspon",
            cidrv6: "IPv6 raspon",
            base64: "base64 kodirani tekst",
            base64url: "base64url kodirani tekst",
            json_string: "JSON tekst",
            e164: "E.164 broj",
            jwt: "JWT",
            template_literal: "unos",
          },
          r = {
            nan: "NaN",
            string: "tekst",
            number: "broj",
            boolean: "boolean",
            array: "niz",
            object: "objekt",
            set: "skup",
            file: "datoteka",
            date: "datum",
            bigint: "bigint",
            symbol: "simbol",
            undefined: "undefined",
            null: "null",
            function: "funkcija",
            map: "mapa",
          };
        return (e) => {
          switch (e.code) {
            case "invalid_type": {
              const t = r[e.expected] ?? e.expected,
                n = i.GW(e.input),
                a = r[n] ?? n;
              return /^[A-Z]/.test(e.expected)
                ? `Neispravan unos: očekuje se instanceof ${e.expected}, a primljeno je ${a}`
                : `Neispravan unos: očekuje se ${t}, a primljeno je ${a}`;
            }
            case "invalid_value":
              return 1 === e.values.length
                ? `Neispravna vrijednost: očekivano ${i.B7(e.values[0])}`
                : `Neispravna opcija: očekivano jedno od ${i.jw(e.values, "|")}`;
            case "too_big": {
              const n = e.inclusive ? "<=" : "<",
                i = t(e.origin),
                a = r[e.origin] ?? e.origin;
              return i
                ? `Preveliko: očekivano da ${a ?? "vrijednost"} ima ${n}${e.maximum.toString()} ${i.unit ?? "elemenata"}`
                : `Preveliko: očekivano da ${a ?? "vrijednost"} bude ${n}${e.maximum.toString()}`;
            }
            case "too_small": {
              const n = e.inclusive ? ">=" : ">",
                i = t(e.origin),
                a = r[e.origin] ?? e.origin;
              return i
                ? `Premalo: očekivano da ${a} ima ${n}${e.minimum.toString()} ${i.unit}`
                : `Premalo: očekivano da ${a} bude ${n}${e.minimum.toString()}`;
            }
            case "invalid_format": {
              const t = e;
              return "starts_with" === t.format
                ? `Neispravan tekst: mora započinjati s "${t.prefix}"`
                : "ends_with" === t.format
                  ? `Neispravan tekst: mora završavati s "${t.suffix}"`
                  : "includes" === t.format
                    ? `Neispravan tekst: mora sadržavati "${t.includes}"`
                    : "regex" === t.format
                      ? `Neispravan tekst: mora odgovarati uzorku ${t.pattern}`
                      : `Neispravna ${n[t.format] ?? e.format}`;
            }
            case "not_multiple_of":
              return `Neispravan broj: mora biti višekratnik od ${e.divisor}`;
            case "unrecognized_keys":
              return `Neprepoznat${e.keys.length > 1 ? "i ključevi" : " ključ"}: ${i.jw(e.keys, ", ")}`;
            case "invalid_key":
              return `Neispravan ključ u ${r[e.origin] ?? e.origin}`;
            case "invalid_union":
            default:
              return "Neispravan unos";
            case "invalid_element":
              return `Neispravna vrijednost u ${r[e.origin] ?? e.origin}`;
          }
        };
      };
      function L() {
        return { localeError: R() };
      }
      const B = () => {
        const e = {
          string: { unit: "karakter", verb: "legyen" },
          file: { unit: "byte", verb: "legyen" },
          array: { unit: "elem", verb: "legyen" },
          set: { unit: "elem", verb: "legyen" },
        };
        function t(t) {
          return e[t] ?? null;
        }
        const n = {
            regex: "bemenet",
            email: "email cím",
            url: "URL",
            emoji: "emoji",
            uuid: "UUID",
            uuidv4: "UUIDv4",
            uuidv6: "UUIDv6",
            nanoid: "nanoid",
            guid: "GUID",
            cuid: "cuid",
            cuid2: "cuid2",
            ulid: "ULID",
            xid: "XID",
            ksuid: "KSUID",
            datetime: "ISO időbélyeg",
            date: "ISO dátum",
            time: "ISO idő",
            duration: "ISO időintervallum",
            ipv4: "IPv4 cím",
            ipv6: "IPv6 cím",
            cidrv4: "IPv4 tartomány",
            cidrv6: "IPv6 tartomány",
            base64: "base64-kódolt string",
            base64url: "base64url-kódolt string",
            json_string: "JSON string",
            e164: "E.164 szám",
            jwt: "JWT",
            template_literal: "bemenet",
          },
          r = { nan: "NaN", number: "szám", array: "tömb" };
        return (e) => {
          switch (e.code) {
            case "invalid_type": {
              const t = r[e.expected] ?? e.expected,
                n = i.GW(e.input),
                a = r[n] ?? n;
              return /^[A-Z]/.test(e.expected)
                ? `Érvénytelen bemenet: a várt érték instanceof ${e.expected}, a kapott érték ${a}`
                : `Érvénytelen bemenet: a várt érték ${t}, a kapott érték ${a}`;
            }
            case "invalid_value":
              return 1 === e.values.length
                ? `Érvénytelen bemenet: a várt érték ${i.B7(e.values[0])}`
                : `Érvénytelen opció: valamelyik érték várt ${i.jw(e.values, "|")}`;
            case "too_big": {
              const n = e.inclusive ? "<=" : "<",
                i = t(e.origin);
              return i
                ? `Túl nagy: ${e.origin ?? "érték"} mérete túl nagy ${n}${e.maximum.toString()} ${i.unit ?? "elem"}`
                : `Túl nagy: a bemeneti érték ${e.origin ?? "érték"} túl nagy: ${n}${e.maximum.toString()}`;
            }
            case "too_small": {
              const n = e.inclusive ? ">=" : ">",
                i = t(e.origin);
              return i
                ? `Túl kicsi: a bemeneti érték ${e.origin} mérete túl kicsi ${n}${e.minimum.toString()} ${i.unit}`
                : `Túl kicsi: a bemeneti érték ${e.origin} túl kicsi ${n}${e.minimum.toString()}`;
            }
            case "invalid_format": {
              const t = e;
              return "starts_with" === t.format
                ? `Érvénytelen string: "${t.prefix}" értékkel kell kezdődnie`
                : "ends_with" === t.format
                  ? `Érvénytelen string: "${t.suffix}" értékkel kell végződnie`
                  : "includes" === t.format
                    ? `Érvénytelen string: "${t.includes}" értéket kell tartalmaznia`
                    : "regex" === t.format
                      ? `Érvénytelen string: ${t.pattern} mintának kell megfelelnie`
                      : `Érvénytelen ${n[t.format] ?? e.format}`;
            }
            case "not_multiple_of":
              return `Érvénytelen szám: ${e.divisor} többszörösének kell lennie`;
            case "unrecognized_keys":
              return `Ismeretlen kulcs${e.keys.length > 1 ? "s" : ""}: ${i.jw(e.keys, ", ")}`;
            case "invalid_key":
              return `Érvénytelen kulcs ${e.origin}`;
            case "invalid_union":
            default:
              return "Érvénytelen bemenet";
            case "invalid_element":
              return `Érvénytelen érték: ${e.origin}`;
          }
        };
      };
      function G() {
        return { localeError: B() };
      }
      function M(e, t, n) {
        return 1 === Math.abs(e) ? t : n;
      }
      function W(e) {
        if (!e) return "";
        const t = e[e.length - 1];
        return (
          e + (["ա", "ե", "ը", "ի", "ո", "ու", "օ"].includes(t) ? "ն" : "ը")
        );
      }
      const Z = () => {
        const e = {
          string: { unit: { one: "նշան", many: "նշաններ" }, verb: "ունենալ" },
          file: { unit: { one: "բայթ", many: "բայթեր" }, verb: "ունենալ" },
          array: { unit: { one: "տարր", many: "տարրեր" }, verb: "ունենալ" },
          set: { unit: { one: "տարր", many: "տարրեր" }, verb: "ունենալ" },
        };
        function t(t) {
          return e[t] ?? null;
        }
        const n = {
            regex: "մուտք",
            email: "էլ. հասցե",
            url: "URL",
            emoji: "էմոջի",
            uuid: "UUID",
            uuidv4: "UUIDv4",
            uuidv6: "UUIDv6",
            nanoid: "nanoid",
            guid: "GUID",
            cuid: "cuid",
            cuid2: "cuid2",
            ulid: "ULID",
            xid: "XID",
            ksuid: "KSUID",
            datetime: "ISO ամսաթիվ և ժամ",
            date: "ISO ամսաթիվ",
            time: "ISO ժամ",
            duration: "ISO տևողություն",
            ipv4: "IPv4 հասցե",
            ipv6: "IPv6 հասցե",
            cidrv4: "IPv4 միջակայք",
            cidrv6: "IPv6 միջակայք",
            base64: "base64 ձևաչափով տող",
            base64url: "base64url ձևաչափով տող",
            json_string: "JSON տող",
            e164: "E.164 համար",
            jwt: "JWT",
            template_literal: "մուտք",
          },
          r = { nan: "NaN", number: "թիվ", array: "զանգված" };
        return (e) => {
          switch (e.code) {
            case "invalid_type": {
              const t = r[e.expected] ?? e.expected,
                n = i.GW(e.input),
                a = r[n] ?? n;
              return /^[A-Z]/.test(e.expected)
                ? `Սխալ մուտքագրում․ սպասվում էր instanceof ${e.expected}, ստացվել է ${a}`
                : `Սխալ մուտքագրում․ սպասվում էր ${t}, ստացվել է ${a}`;
            }
            case "invalid_value":
              return 1 === e.values.length
                ? `Սխալ մուտքագրում․ սպասվում էր ${i.B7(e.values[1])}`
                : `Սխալ տարբերակ․ սպասվում էր հետևյալներից մեկը՝ ${i.jw(e.values, "|")}`;
            case "too_big": {
              const n = e.inclusive ? "<=" : "<",
                i = t(e.origin);
              if (i) {
                const t = M(Number(e.maximum), i.unit.one, i.unit.many);
                return `Չափազանց մեծ արժեք․ սպասվում է, որ ${W(e.origin ?? "արժեք")} կունենա ${n}${e.maximum.toString()} ${t}`;
              }
              return `Չափազանց մեծ արժեք․ սպասվում է, որ ${W(e.origin ?? "արժեք")} լինի ${n}${e.maximum.toString()}`;
            }
            case "too_small": {
              const n = e.inclusive ? ">=" : ">",
                i = t(e.origin);
              if (i) {
                const t = M(Number(e.minimum), i.unit.one, i.unit.many);
                return `Չափազանց փոքր արժեք․ սպասվում է, որ ${W(e.origin)} կունենա ${n}${e.minimum.toString()} ${t}`;
              }
              return `Չափազանց փոքր արժեք․ սպասվում է, որ ${W(e.origin)} լինի ${n}${e.minimum.toString()}`;
            }
            case "invalid_format": {
              const t = e;
              return "starts_with" === t.format
                ? `Սխալ տող․ պետք է սկսվի "${t.prefix}"-ով`
                : "ends_with" === t.format
                  ? `Սխալ տող․ պետք է ավարտվի "${t.suffix}"-ով`
                  : "includes" === t.format
                    ? `Սխալ տող․ պետք է պարունակի "${t.includes}"`
                    : "regex" === t.format
                      ? `Սխալ տող․ պետք է համապատասխանի ${t.pattern} ձևաչափին`
                      : `Սխալ ${n[t.format] ?? e.format}`;
            }
            case "not_multiple_of":
              return `Սխալ թիվ․ պետք է բազմապատիկ լինի ${e.divisor}-ի`;
            case "unrecognized_keys":
              return `Չճանաչված բանալի${e.keys.length > 1 ? "ներ" : ""}. ${i.jw(e.keys, ", ")}`;
            case "invalid_key":
              return `Սխալ բանալի ${W(e.origin)}-ում`;
            case "invalid_union":
            default:
              return "Սխալ մուտքագրում";
            case "invalid_element":
              return `Սխալ արժեք ${W(e.origin)}-ում`;
          }
        };
      };
      function J() {
        return { localeError: Z() };
      }
      const F = () => {
        const e = {
          string: { unit: "karakter", verb: "memiliki" },
          file: { unit: "byte", verb: "memiliki" },
          array: { unit: "item", verb: "memiliki" },
          set: { unit: "item", verb: "memiliki" },
        };
        function t(t) {
          return e[t] ?? null;
        }
        const n = {
            regex: "input",
            email: "alamat email",
            url: "URL",
            emoji: "emoji",
            uuid: "UUID",
            uuidv4: "UUIDv4",
            uuidv6: "UUIDv6",
            nanoid: "nanoid",
            guid: "GUID",
            cuid: "cuid",
            cuid2: "cuid2",
            ulid: "ULID",
            xid: "XID",
            ksuid: "KSUID",
            datetime: "tanggal dan waktu format ISO",
            date: "tanggal format ISO",
            time: "jam format ISO",
            duration: "durasi format ISO",
            ipv4: "alamat IPv4",
            ipv6: "alamat IPv6",
            cidrv4: "rentang alamat IPv4",
            cidrv6: "rentang alamat IPv6",
            base64: "string dengan enkode base64",
            base64url: "string dengan enkode base64url",
            json_string: "string JSON",
            e164: "angka E.164",
            jwt: "JWT",
            template_literal: "input",
          },
          r = { nan: "NaN" };
        return (e) => {
          switch (e.code) {
            case "invalid_type": {
              const t = r[e.expected] ?? e.expected,
                n = i.GW(e.input),
                a = r[n] ?? n;
              return /^[A-Z]/.test(e.expected)
                ? `Input tidak valid: diharapkan instanceof ${e.expected}, diterima ${a}`
                : `Input tidak valid: diharapkan ${t}, diterima ${a}`;
            }
            case "invalid_value":
              return 1 === e.values.length
                ? `Input tidak valid: diharapkan ${i.B7(e.values[0])}`
                : `Pilihan tidak valid: diharapkan salah satu dari ${i.jw(e.values, "|")}`;
            case "too_big": {
              const n = e.inclusive ? "<=" : "<",
                i = t(e.origin);
              return i
                ? `Terlalu besar: diharapkan ${e.origin ?? "value"} memiliki ${n}${e.maximum.toString()} ${i.unit ?? "elemen"}`
                : `Terlalu besar: diharapkan ${e.origin ?? "value"} menjadi ${n}${e.maximum.toString()}`;
            }
            case "too_small": {
              const n = e.inclusive ? ">=" : ">",
                i = t(e.origin);
              return i
                ? `Terlalu kecil: diharapkan ${e.origin} memiliki ${n}${e.minimum.toString()} ${i.unit}`
                : `Terlalu kecil: diharapkan ${e.origin} menjadi ${n}${e.minimum.toString()}`;
            }
            case "invalid_format": {
              const t = e;
              return "starts_with" === t.format
                ? `String tidak valid: harus dimulai dengan "${t.prefix}"`
                : "ends_with" === t.format
                  ? `String tidak valid: harus berakhir dengan "${t.suffix}"`
                  : "includes" === t.format
                    ? `String tidak valid: harus menyertakan "${t.includes}"`
                    : "regex" === t.format
                      ? `String tidak valid: harus sesuai pola ${t.pattern}`
                      : `${n[t.format] ?? e.format} tidak valid`;
            }
            case "not_multiple_of":
              return `Angka tidak valid: harus kelipatan dari ${e.divisor}`;
            case "unrecognized_keys":
              return `Kunci tidak dikenali ${e.keys.length > 1 ? "s" : ""}: ${i.jw(e.keys, ", ")}`;
            case "invalid_key":
              return `Kunci tidak valid di ${e.origin}`;
            case "invalid_union":
            default:
              return "Input tidak valid";
            case "invalid_element":
              return `Nilai tidak valid di ${e.origin}`;
          }
        };
      };
      function K() {
        return { localeError: F() };
      }
      const V = () => {
        const e = {
          string: { unit: "stafi", verb: "að hafa" },
          file: { unit: "bæti", verb: "að hafa" },
          array: { unit: "hluti", verb: "að hafa" },
          set: { unit: "hluti", verb: "að hafa" },
        };
        function t(t) {
          return e[t] ?? null;
        }
        const n = {
            regex: "gildi",
            email: "netfang",
            url: "vefslóð",
            emoji: "emoji",
            uuid: "UUID",
            uuidv4: "UUIDv4",
            uuidv6: "UUIDv6",
            nanoid: "nanoid",
            guid: "GUID",
            cuid: "cuid",
            cuid2: "cuid2",
            ulid: "ULID",
            xid: "XID",
            ksuid: "KSUID",
            datetime: "ISO dagsetning og tími",
            date: "ISO dagsetning",
            time: "ISO tími",
            duration: "ISO tímalengd",
            ipv4: "IPv4 address",
            ipv6: "IPv6 address",
            cidrv4: "IPv4 range",
            cidrv6: "IPv6 range",
            base64: "base64-encoded strengur",
            base64url: "base64url-encoded strengur",
            json_string: "JSON strengur",
            e164: "E.164 tölugildi",
            jwt: "JWT",
            template_literal: "gildi",
          },
          r = { nan: "NaN", number: "númer", array: "fylki" };
        return (e) => {
          switch (e.code) {
            case "invalid_type": {
              const t = r[e.expected] ?? e.expected,
                n = i.GW(e.input),
                a = r[n] ?? n;
              return /^[A-Z]/.test(e.expected)
                ? `Rangt gildi: Þú slóst inn ${a} þar sem á að vera instanceof ${e.expected}`
                : `Rangt gildi: Þú slóst inn ${a} þar sem á að vera ${t}`;
            }
            case "invalid_value":
              return 1 === e.values.length
                ? `Rangt gildi: gert ráð fyrir ${i.B7(e.values[0])}`
                : `Ógilt val: má vera eitt af eftirfarandi ${i.jw(e.values, "|")}`;
            case "too_big": {
              const n = e.inclusive ? "<=" : "<",
                i = t(e.origin);
              return i
                ? `Of stórt: gert er ráð fyrir að ${e.origin ?? "gildi"} hafi ${n}${e.maximum.toString()} ${i.unit ?? "hluti"}`
                : `Of stórt: gert er ráð fyrir að ${e.origin ?? "gildi"} sé ${n}${e.maximum.toString()}`;
            }
            case "too_small": {
              const n = e.inclusive ? ">=" : ">",
                i = t(e.origin);
              return i
                ? `Of lítið: gert er ráð fyrir að ${e.origin} hafi ${n}${e.minimum.toString()} ${i.unit}`
                : `Of lítið: gert er ráð fyrir að ${e.origin} sé ${n}${e.minimum.toString()}`;
            }
            case "invalid_format": {
              const t = e;
              return "starts_with" === t.format
                ? `Ógildur strengur: verður að byrja á "${t.prefix}"`
                : "ends_with" === t.format
                  ? `Ógildur strengur: verður að enda á "${t.suffix}"`
                  : "includes" === t.format
                    ? `Ógildur strengur: verður að innihalda "${t.includes}"`
                    : "regex" === t.format
                      ? `Ógildur strengur: verður að fylgja mynstri ${t.pattern}`
                      : `Rangt ${n[t.format] ?? e.format}`;
            }
            case "not_multiple_of":
              return `Röng tala: verður að vera margfeldi af ${e.divisor}`;
            case "unrecognized_keys":
              return `Óþekkt ${e.keys.length > 1 ? "ir lyklar" : "ur lykill"}: ${i.jw(e.keys, ", ")}`;
            case "invalid_key":
              return `Rangur lykill í ${e.origin}`;
            case "invalid_union":
            default:
              return "Rangt gildi";
            case "invalid_element":
              return `Rangt gildi í ${e.origin}`;
          }
        };
      };
      function H() {
        return { localeError: V() };
      }
      const q = () => {
        const e = {
          string: { unit: "caratteri", verb: "avere" },
          file: { unit: "byte", verb: "avere" },
          array: { unit: "elementi", verb: "avere" },
          set: { unit: "elementi", verb: "avere" },
        };
        function t(t) {
          return e[t] ?? null;
        }
        const n = {
            regex: "input",
            email: "indirizzo email",
            url: "URL",
            emoji: "emoji",
            uuid: "UUID",
            uuidv4: "UUIDv4",
            uuidv6: "UUIDv6",
            nanoid: "nanoid",
            guid: "GUID",
            cuid: "cuid",
            cuid2: "cuid2",
            ulid: "ULID",
            xid: "XID",
            ksuid: "KSUID",
            datetime: "data e ora ISO",
            date: "data ISO",
            time: "ora ISO",
            duration: "durata ISO",
            ipv4: "indirizzo IPv4",
            ipv6: "indirizzo IPv6",
            cidrv4: "intervallo IPv4",
            cidrv6: "intervallo IPv6",
            base64: "stringa codificata in base64",
            base64url: "URL codificata in base64",
            json_string: "stringa JSON",
            e164: "numero E.164",
            jwt: "JWT",
            template_literal: "input",
          },
          r = { nan: "NaN", number: "numero", array: "vettore" };
        return (e) => {
          switch (e.code) {
            case "invalid_type": {
              const t = r[e.expected] ?? e.expected,
                n = i.GW(e.input),
                a = r[n] ?? n;
              return /^[A-Z]/.test(e.expected)
                ? `Input non valido: atteso instanceof ${e.expected}, ricevuto ${a}`
                : `Input non valido: atteso ${t}, ricevuto ${a}`;
            }
            case "invalid_value":
              return 1 === e.values.length
                ? `Input non valido: atteso ${i.B7(e.values[0])}`
                : `Opzione non valida: atteso uno tra ${i.jw(e.values, "|")}`;
            case "too_big": {
              const n = e.inclusive ? "<=" : "<",
                i = t(e.origin);
              return i
                ? `Troppo grande: ${e.origin ?? "valore"} deve avere ${n}${e.maximum.toString()} ${i.unit ?? "elementi"}`
                : `Troppo grande: ${e.origin ?? "valore"} deve essere ${n}${e.maximum.toString()}`;
            }
            case "too_small": {
              const n = e.inclusive ? ">=" : ">",
                i = t(e.origin);
              return i
                ? `Troppo piccolo: ${e.origin} deve avere ${n}${e.minimum.toString()} ${i.unit}`
                : `Troppo piccolo: ${e.origin} deve essere ${n}${e.minimum.toString()}`;
            }
            case "invalid_format": {
              const t = e;
              return "starts_with" === t.format
                ? `Stringa non valida: deve iniziare con "${t.prefix}"`
                : "ends_with" === t.format
                  ? `Stringa non valida: deve terminare con "${t.suffix}"`
                  : "includes" === t.format
                    ? `Stringa non valida: deve includere "${t.includes}"`
                    : "regex" === t.format
                      ? `Stringa non valida: deve corrispondere al pattern ${t.pattern}`
                      : `Input non valido: ${n[t.format] ?? e.format}`;
            }
            case "not_multiple_of":
              return `Numero non valido: deve essere un multiplo di ${e.divisor}`;
            case "unrecognized_keys":
              return `Chiav${e.keys.length > 1 ? "i" : "e"} non riconosciut${e.keys.length > 1 ? "e" : "a"}: ${i.jw(e.keys, ", ")}`;
            case "invalid_key":
              return `Chiave non valida in ${e.origin}`;
            case "invalid_union":
            default:
              return "Input non valido";
            case "invalid_element":
              return `Valore non valido in ${e.origin}`;
          }
        };
      };
      function X() {
        return { localeError: q() };
      }
      const Y = () => {
        const e = {
          string: { unit: "文字", verb: "である" },
          file: { unit: "バイト", verb: "である" },
          array: { unit: "要素", verb: "である" },
          set: { unit: "要素", verb: "である" },
        };
        function t(t) {
          return e[t] ?? null;
        }
        const n = {
            regex: "入力値",
            email: "メールアドレス",
            url: "URL",
            emoji: "絵文字",
            uuid: "UUID",
            uuidv4: "UUIDv4",
            uuidv6: "UUIDv6",
            nanoid: "nanoid",
            guid: "GUID",
            cuid: "cuid",
            cuid2: "cuid2",
            ulid: "ULID",
            xid: "XID",
            ksuid: "KSUID",
            datetime: "ISO日時",
            date: "ISO日付",
            time: "ISO時刻",
            duration: "ISO期間",
            ipv4: "IPv4アドレス",
            ipv6: "IPv6アドレス",
            cidrv4: "IPv4範囲",
            cidrv6: "IPv6範囲",
            base64: "base64エンコード文字列",
            base64url: "base64urlエンコード文字列",
            json_string: "JSON文字列",
            e164: "E.164番号",
            jwt: "JWT",
            template_literal: "入力値",
          },
          r = { nan: "NaN", number: "数値", array: "配列" };
        return (e) => {
          switch (e.code) {
            case "invalid_type": {
              const t = r[e.expected] ?? e.expected,
                n = i.GW(e.input),
                a = r[n] ?? n;
              return /^[A-Z]/.test(e.expected)
                ? `無効な入力: instanceof ${e.expected}が期待されましたが、${a}が入力されました`
                : `無効な入力: ${t}が期待されましたが、${a}が入力されました`;
            }
            case "invalid_value":
              return 1 === e.values.length
                ? `無効な入力: ${i.B7(e.values[0])}が期待されました`
                : `無効な選択: ${i.jw(e.values, "、")}のいずれかである必要があります`;
            case "too_big": {
              const n = e.inclusive ? "以下である" : "より小さい",
                i = t(e.origin);
              return i
                ? `大きすぎる値: ${e.origin ?? "値"}は${e.maximum.toString()}${i.unit ?? "要素"}${n}必要があります`
                : `大きすぎる値: ${e.origin ?? "値"}は${e.maximum.toString()}${n}必要があります`;
            }
            case "too_small": {
              const n = e.inclusive ? "以上である" : "より大きい",
                i = t(e.origin);
              return i
                ? `小さすぎる値: ${e.origin}は${e.minimum.toString()}${i.unit}${n}必要があります`
                : `小さすぎる値: ${e.origin}は${e.minimum.toString()}${n}必要があります`;
            }
            case "invalid_format": {
              const t = e;
              return "starts_with" === t.format
                ? `無効な文字列: "${t.prefix}"で始まる必要があります`
                : "ends_with" === t.format
                  ? `無効な文字列: "${t.suffix}"で終わる必要があります`
                  : "includes" === t.format
                    ? `無効な文字列: "${t.includes}"を含む必要があります`
                    : "regex" === t.format
                      ? `無効な文字列: パターン${t.pattern}に一致する必要があります`
                      : `無効な${n[t.format] ?? e.format}`;
            }
            case "not_multiple_of":
              return `無効な数値: ${e.divisor}の倍数である必要があります`;
            case "unrecognized_keys":
              return `認識されていないキー${e.keys.length > 1 ? "群" : ""}: ${i.jw(e.keys, "、")}`;
            case "invalid_key":
              return `${e.origin}内の無効なキー`;
            case "invalid_union":
            default:
              return "無効な入力";
            case "invalid_element":
              return `${e.origin}内の無効な値`;
          }
        };
      };
      function Q() {
        return { localeError: Y() };
      }
      const ee = () => {
        const e = {
          string: { unit: "სიმბოლო", verb: "უნდა შეიცავდეს" },
          file: { unit: "ბაიტი", verb: "უნდა შეიცავდეს" },
          array: { unit: "ელემენტი", verb: "უნდა შეიცავდეს" },
          set: { unit: "ელემენტი", verb: "უნდა შეიცავდეს" },
        };
        function t(t) {
          return e[t] ?? null;
        }
        const n = {
            regex: "შეყვანა",
            email: "ელ-ფოსტის მისამართი",
            url: "URL",
            emoji: "ემოჯი",
            uuid: "UUID",
            uuidv4: "UUIDv4",
            uuidv6: "UUIDv6",
            nanoid: "nanoid",
            guid: "GUID",
            cuid: "cuid",
            cuid2: "cuid2",
            ulid: "ULID",
            xid: "XID",
            ksuid: "KSUID",
            datetime: "თარიღი-დრო",
            date: "თარიღი",
            time: "დრო",
            duration: "ხანგრძლივობა",
            ipv4: "IPv4 მისამართი",
            ipv6: "IPv6 მისამართი",
            cidrv4: "IPv4 დიაპაზონი",
            cidrv6: "IPv6 დიაპაზონი",
            base64: "base64-კოდირებული ველი",
            base64url: "base64url-კოდირებული ველი",
            json_string: "JSON ველი",
            e164: "E.164 ნომერი",
            jwt: "JWT",
            template_literal: "შეყვანა",
          },
          r = {
            nan: "NaN",
            number: "რიცხვი",
            string: "ველი",
            boolean: "ბულეანი",
            function: "ფუნქცია",
            array: "მასივი",
          };
        return (e) => {
          switch (e.code) {
            case "invalid_type": {
              const t = r[e.expected] ?? e.expected,
                n = i.GW(e.input),
                a = r[n] ?? n;
              return /^[A-Z]/.test(e.expected)
                ? `არასწორი შეყვანა: მოსალოდნელი instanceof ${e.expected}, მიღებული ${a}`
                : `არასწორი შეყვანა: მოსალოდნელი ${t}, მიღებული ${a}`;
            }
            case "invalid_value":
              return 1 === e.values.length
                ? `არასწორი შეყვანა: მოსალოდნელი ${i.B7(e.values[0])}`
                : `არასწორი ვარიანტი: მოსალოდნელია ერთ-ერთი ${i.jw(e.values, "|")}-დან`;
            case "too_big": {
              const n = e.inclusive ? "<=" : "<",
                i = t(e.origin);
              return i
                ? `ზედმეტად დიდი: მოსალოდნელი ${e.origin ?? "მნიშვნელობა"} ${i.verb} ${n}${e.maximum.toString()} ${i.unit}`
                : `ზედმეტად დიდი: მოსალოდნელი ${e.origin ?? "მნიშვნელობა"} იყოს ${n}${e.maximum.toString()}`;
            }
            case "too_small": {
              const n = e.inclusive ? ">=" : ">",
                i = t(e.origin);
              return i
                ? `ზედმეტად პატარა: მოსალოდნელი ${e.origin} ${i.verb} ${n}${e.minimum.toString()} ${i.unit}`
                : `ზედმეტად პატარა: მოსალოდნელი ${e.origin} იყოს ${n}${e.minimum.toString()}`;
            }
            case "invalid_format": {
              const t = e;
              return "starts_with" === t.format
                ? `არასწორი ველი: უნდა იწყებოდეს "${t.prefix}"-ით`
                : "ends_with" === t.format
                  ? `არასწორი ველი: უნდა მთავრდებოდეს "${t.suffix}"-ით`
                  : "includes" === t.format
                    ? `არასწორი ველი: უნდა შეიცავდეს "${t.includes}"-ს`
                    : "regex" === t.format
                      ? `არასწორი ველი: უნდა შეესაბამებოდეს შაბლონს ${t.pattern}`
                      : `არასწორი ${n[t.format] ?? e.format}`;
            }
            case "not_multiple_of":
              return `არასწორი რიცხვი: უნდა იყოს ${e.divisor}-ის ჯერადი`;
            case "unrecognized_keys":
              return `უცნობი გასაღებ${e.keys.length > 1 ? "ები" : "ი"}: ${i.jw(e.keys, ", ")}`;
            case "invalid_key":
              return `არასწორი გასაღები ${e.origin}-ში`;
            case "invalid_union":
            default:
              return "არასწორი შეყვანა";
            case "invalid_element":
              return `არასწორი მნიშვნელობა ${e.origin}-ში`;
          }
        };
      };
      function te() {
        return { localeError: ee() };
      }
      const ne = () => {
        const e = {
          string: { unit: "តួអក្សរ", verb: "គួរមាន" },
          file: { unit: "បៃ", verb: "គួរមាន" },
          array: { unit: "ធាតុ", verb: "គួរមាន" },
          set: { unit: "ធាតុ", verb: "គួរមាន" },
        };
        function t(t) {
          return e[t] ?? null;
        }
        const n = {
            regex: "ទិន្នន័យបញ្ចូល",
            email: "អាសយដ្ឋានអ៊ីមែល",
            url: "URL",
            emoji: "សញ្ញាអារម្មណ៍",
            uuid: "UUID",
            uuidv4: "UUIDv4",
            uuidv6: "UUIDv6",
            nanoid: "nanoid",
            guid: "GUID",
            cuid: "cuid",
            cuid2: "cuid2",
            ulid: "ULID",
            xid: "XID",
            ksuid: "KSUID",
            datetime: "កាលបរិច្ឆេទ និងម៉ោង ISO",
            date: "កាលបរិច្ឆេទ ISO",
            time: "ម៉ោង ISO",
            duration: "រយៈពេល ISO",
            ipv4: "អាសយដ្ឋាន IPv4",
            ipv6: "អាសយដ្ឋាន IPv6",
            cidrv4: "ដែនអាសយដ្ឋាន IPv4",
            cidrv6: "ដែនអាសយដ្ឋាន IPv6",
            base64: "ខ្សែអក្សរអ៊ិកូដ base64",
            base64url: "ខ្សែអក្សរអ៊ិកូដ base64url",
            json_string: "ខ្សែអក្សរ JSON",
            e164: "លេខ E.164",
            jwt: "JWT",
            template_literal: "ទិន្នន័យបញ្ចូល",
          },
          r = {
            nan: "NaN",
            number: "លេខ",
            array: "អារេ (Array)",
            null: "គ្មានតម្លៃ (null)",
          };
        return (e) => {
          switch (e.code) {
            case "invalid_type": {
              const t = r[e.expected] ?? e.expected,
                n = i.GW(e.input),
                a = r[n] ?? n;
              return /^[A-Z]/.test(e.expected)
                ? `ទិន្នន័យបញ្ចូលមិនត្រឹមត្រូវ៖ ត្រូវការ instanceof ${e.expected} ប៉ុន្តែទទួលបាន ${a}`
                : `ទិន្នន័យបញ្ចូលមិនត្រឹមត្រូវ៖ ត្រូវការ ${t} ប៉ុន្តែទទួលបាន ${a}`;
            }
            case "invalid_value":
              return 1 === e.values.length
                ? `ទិន្នន័យបញ្ចូលមិនត្រឹមត្រូវ៖ ត្រូវការ ${i.B7(e.values[0])}`
                : `ជម្រើសមិនត្រឹមត្រូវ៖ ត្រូវជាមួយក្នុងចំណោម ${i.jw(e.values, "|")}`;
            case "too_big": {
              const n = e.inclusive ? "<=" : "<",
                i = t(e.origin);
              return i
                ? `ធំពេក៖ ត្រូវការ ${e.origin ?? "តម្លៃ"} ${n} ${e.maximum.toString()} ${i.unit ?? "ធាតុ"}`
                : `ធំពេក៖ ត្រូវការ ${e.origin ?? "តម្លៃ"} ${n} ${e.maximum.toString()}`;
            }
            case "too_small": {
              const n = e.inclusive ? ">=" : ">",
                i = t(e.origin);
              return i
                ? `តូចពេក៖ ត្រូវការ ${e.origin} ${n} ${e.minimum.toString()} ${i.unit}`
                : `តូចពេក៖ ត្រូវការ ${e.origin} ${n} ${e.minimum.toString()}`;
            }
            case "invalid_format": {
              const t = e;
              return "starts_with" === t.format
                ? `ខ្សែអក្សរមិនត្រឹមត្រូវ៖ ត្រូវចាប់ផ្តើមដោយ "${t.prefix}"`
                : "ends_with" === t.format
                  ? `ខ្សែអក្សរមិនត្រឹមត្រូវ៖ ត្រូវបញ្ចប់ដោយ "${t.suffix}"`
                  : "includes" === t.format
                    ? `ខ្សែអក្សរមិនត្រឹមត្រូវ៖ ត្រូវមាន "${t.includes}"`
                    : "regex" === t.format
                      ? `ខ្សែអក្សរមិនត្រឹមត្រូវ៖ ត្រូវតែផ្គូផ្គងនឹងទម្រង់ដែលបានកំណត់ ${t.pattern}`
                      : `មិនត្រឹមត្រូវ៖ ${n[t.format] ?? e.format}`;
            }
            case "not_multiple_of":
              return `លេខមិនត្រឹមត្រូវ៖ ត្រូវតែជាពហុគុណនៃ ${e.divisor}`;
            case "unrecognized_keys":
              return `រកឃើញសោមិនស្គាល់៖ ${i.jw(e.keys, ", ")}`;
            case "invalid_key":
              return `សោមិនត្រឹមត្រូវនៅក្នុង ${e.origin}`;
            case "invalid_union":
            default:
              return "ទិន្នន័យមិនត្រឹមត្រូវ";
            case "invalid_element":
              return `ទិន្នន័យមិនត្រឹមត្រូវនៅក្នុង ${e.origin}`;
          }
        };
      };
      function ie() {
        return { localeError: ne() };
      }
      function re() {
        return ie();
      }
      const ae = () => {
        const e = {
          string: { unit: "문자", verb: "to have" },
          file: { unit: "바이트", verb: "to have" },
          array: { unit: "개", verb: "to have" },
          set: { unit: "개", verb: "to have" },
        };
        function t(t) {
          return e[t] ?? null;
        }
        const n = {
            regex: "입력",
            email: "이메일 주소",
            url: "URL",
            emoji: "이모지",
            uuid: "UUID",
            uuidv4: "UUIDv4",
            uuidv6: "UUIDv6",
            nanoid: "nanoid",
            guid: "GUID",
            cuid: "cuid",
            cuid2: "cuid2",
            ulid: "ULID",
            xid: "XID",
            ksuid: "KSUID",
            datetime: "ISO 날짜시간",
            date: "ISO 날짜",
            time: "ISO 시간",
            duration: "ISO 기간",
            ipv4: "IPv4 주소",
            ipv6: "IPv6 주소",
            cidrv4: "IPv4 범위",
            cidrv6: "IPv6 범위",
            base64: "base64 인코딩 문자열",
            base64url: "base64url 인코딩 문자열",
            json_string: "JSON 문자열",
            e164: "E.164 번호",
            jwt: "JWT",
            template_literal: "입력",
          },
          r = { nan: "NaN" };
        return (e) => {
          switch (e.code) {
            case "invalid_type": {
              const t = r[e.expected] ?? e.expected,
                n = i.GW(e.input),
                a = r[n] ?? n;
              return /^[A-Z]/.test(e.expected)
                ? `잘못된 입력: 예상 타입은 instanceof ${e.expected}, 받은 타입은 ${a}입니다`
                : `잘못된 입력: 예상 타입은 ${t}, 받은 타입은 ${a}입니다`;
            }
            case "invalid_value":
              return 1 === e.values.length
                ? `잘못된 입력: 값은 ${i.B7(e.values[0])} 이어야 합니다`
                : `잘못된 옵션: ${i.jw(e.values, "또는 ")} 중 하나여야 합니다`;
            case "too_big": {
              const n = e.inclusive ? "이하" : "미만",
                i = "미만" === n ? "이어야 합니다" : "여야 합니다",
                r = t(e.origin),
                a = r?.unit ?? "요소";
              return r
                ? `${e.origin ?? "값"}이 너무 큽니다: ${e.maximum.toString()}${a} ${n}${i}`
                : `${e.origin ?? "값"}이 너무 큽니다: ${e.maximum.toString()} ${n}${i}`;
            }
            case "too_small": {
              const n = e.inclusive ? "이상" : "초과",
                i = "이상" === n ? "이어야 합니다" : "여야 합니다",
                r = t(e.origin),
                a = r?.unit ?? "요소";
              return r
                ? `${e.origin ?? "값"}이 너무 작습니다: ${e.minimum.toString()}${a} ${n}${i}`
                : `${e.origin ?? "값"}이 너무 작습니다: ${e.minimum.toString()} ${n}${i}`;
            }
            case "invalid_format": {
              const t = e;
              return "starts_with" === t.format
                ? `잘못된 문자열: "${t.prefix}"(으)로 시작해야 합니다`
                : "ends_with" === t.format
                  ? `잘못된 문자열: "${t.suffix}"(으)로 끝나야 합니다`
                  : "includes" === t.format
                    ? `잘못된 문자열: "${t.includes}"을(를) 포함해야 합니다`
                    : "regex" === t.format
                      ? `잘못된 문자열: 정규식 ${t.pattern} 패턴과 일치해야 합니다`
                      : `잘못된 ${n[t.format] ?? e.format}`;
            }
            case "not_multiple_of":
              return `잘못된 숫자: ${e.divisor}의 배수여야 합니다`;
            case "unrecognized_keys":
              return `인식할 수 없는 키: ${i.jw(e.keys, ", ")}`;
            case "invalid_key":
              return `잘못된 키: ${e.origin}`;
            case "invalid_union":
            default:
              return "잘못된 입력";
            case "invalid_element":
              return `잘못된 값: ${e.origin}`;
          }
        };
      };
      function oe() {
        return { localeError: ae() };
      }
      const se = (e) => e.charAt(0).toUpperCase() + e.slice(1);
      function ue(e) {
        const t = Math.abs(e),
          n = t % 10,
          i = t % 100;
        return (i >= 11 && i <= 19) || 0 === n
          ? "many"
          : 1 === n
            ? "one"
            : "few";
      }
      const le = () => {
        const e = {
          string: {
            unit: { one: "simbolis", few: "simboliai", many: "simbolių" },
            verb: {
              smaller: {
                inclusive: "turi būti ne ilgesnė kaip",
                notInclusive: "turi būti trumpesnė kaip",
              },
              bigger: {
                inclusive: "turi būti ne trumpesnė kaip",
                notInclusive: "turi būti ilgesnė kaip",
              },
            },
          },
          file: {
            unit: { one: "baitas", few: "baitai", many: "baitų" },
            verb: {
              smaller: {
                inclusive: "turi būti ne didesnis kaip",
                notInclusive: "turi būti mažesnis kaip",
              },
              bigger: {
                inclusive: "turi būti ne mažesnis kaip",
                notInclusive: "turi būti didesnis kaip",
              },
            },
          },
          array: {
            unit: { one: "elementą", few: "elementus", many: "elementų" },
            verb: {
              smaller: {
                inclusive: "turi turėti ne daugiau kaip",
                notInclusive: "turi turėti mažiau kaip",
              },
              bigger: {
                inclusive: "turi turėti ne mažiau kaip",
                notInclusive: "turi turėti daugiau kaip",
              },
            },
          },
          set: {
            unit: { one: "elementą", few: "elementus", many: "elementų" },
            verb: {
              smaller: {
                inclusive: "turi turėti ne daugiau kaip",
                notInclusive: "turi turėti mažiau kaip",
              },
              bigger: {
                inclusive: "turi turėti ne mažiau kaip",
                notInclusive: "turi turėti daugiau kaip",
              },
            },
          },
        };
        function t(t, n, i, r) {
          const a = e[t] ?? null;
          return null === a
            ? a
            : {
                unit: a.unit[n],
                verb: a.verb[r][i ? "inclusive" : "notInclusive"],
              };
        }
        const n = {
            regex: "įvestis",
            email: "el. pašto adresas",
            url: "URL",
            emoji: "jaustukas",
            uuid: "UUID",
            uuidv4: "UUIDv4",
            uuidv6: "UUIDv6",
            nanoid: "nanoid",
            guid: "GUID",
            cuid: "cuid",
            cuid2: "cuid2",
            ulid: "ULID",
            xid: "XID",
            ksuid: "KSUID",
            datetime: "ISO data ir laikas",
            date: "ISO data",
            time: "ISO laikas",
            duration: "ISO trukmė",
            ipv4: "IPv4 adresas",
            ipv6: "IPv6 adresas",
            cidrv4: "IPv4 tinklo prefiksas (CIDR)",
            cidrv6: "IPv6 tinklo prefiksas (CIDR)",
            base64: "base64 užkoduota eilutė",
            base64url: "base64url užkoduota eilutė",
            json_string: "JSON eilutė",
            e164: "E.164 numeris",
            jwt: "JWT",
            template_literal: "įvestis",
          },
          r = {
            nan: "NaN",
            number: "skaičius",
            bigint: "sveikasis skaičius",
            string: "eilutė",
            boolean: "loginė reikšmė",
            undefined: "neapibrėžta reikšmė",
            function: "funkcija",
            symbol: "simbolis",
            array: "masyvas",
            object: "objektas",
            null: "nulinė reikšmė",
          };
        return (e) => {
          switch (e.code) {
            case "invalid_type": {
              const t = r[e.expected] ?? e.expected,
                n = i.GW(e.input),
                a = r[n] ?? n;
              return /^[A-Z]/.test(e.expected)
                ? `Gautas tipas ${a}, o tikėtasi - instanceof ${e.expected}`
                : `Gautas tipas ${a}, o tikėtasi - ${t}`;
            }
            case "invalid_value":
              return 1 === e.values.length
                ? `Privalo būti ${i.B7(e.values[0])}`
                : `Privalo būti vienas iš ${i.jw(e.values, "|")} pasirinkimų`;
            case "too_big": {
              const n = r[e.origin] ?? e.origin,
                i = t(
                  e.origin,
                  ue(Number(e.maximum)),
                  e.inclusive ?? !1,
                  "smaller",
                );
              if (i?.verb)
                return `${se(n ?? e.origin ?? "reikšmė")} ${i.verb} ${e.maximum.toString()} ${i.unit ?? "elementų"}`;
              const a = e.inclusive ? "ne didesnis kaip" : "mažesnis kaip";
              return `${se(n ?? e.origin ?? "reikšmė")} turi būti ${a} ${e.maximum.toString()} ${i?.unit}`;
            }
            case "too_small": {
              const n = r[e.origin] ?? e.origin,
                i = t(
                  e.origin,
                  ue(Number(e.minimum)),
                  e.inclusive ?? !1,
                  "bigger",
                );
              if (i?.verb)
                return `${se(n ?? e.origin ?? "reikšmė")} ${i.verb} ${e.minimum.toString()} ${i.unit ?? "elementų"}`;
              const a = e.inclusive ? "ne mažesnis kaip" : "didesnis kaip";
              return `${se(n ?? e.origin ?? "reikšmė")} turi būti ${a} ${e.minimum.toString()} ${i?.unit}`;
            }
            case "invalid_format": {
              const t = e;
              return "starts_with" === t.format
                ? `Eilutė privalo prasidėti "${t.prefix}"`
                : "ends_with" === t.format
                  ? `Eilutė privalo pasibaigti "${t.suffix}"`
                  : "includes" === t.format
                    ? `Eilutė privalo įtraukti "${t.includes}"`
                    : "regex" === t.format
                      ? `Eilutė privalo atitikti ${t.pattern}`
                      : `Neteisingas ${n[t.format] ?? e.format}`;
            }
            case "not_multiple_of":
              return `Skaičius privalo būti ${e.divisor} kartotinis.`;
            case "unrecognized_keys":
              return `Neatpažint${e.keys.length > 1 ? "i" : "as"} rakt${e.keys.length > 1 ? "ai" : "as"}: ${i.jw(e.keys, ", ")}`;
            case "invalid_key":
              return "Rastas klaidingas raktas";
            case "invalid_union":
            default:
              return "Klaidinga įvestis";
            case "invalid_element": {
              const t = r[e.origin] ?? e.origin;
              return `${se(t ?? e.origin ?? "reikšmė")} turi klaidingą įvestį`;
            }
          }
        };
      };
      function ce() {
        return { localeError: le() };
      }
      const de = () => {
        const e = {
          string: { unit: "знаци", verb: "да имаат" },
          file: { unit: "бајти", verb: "да имаат" },
          array: { unit: "ставки", verb: "да имаат" },
          set: { unit: "ставки", verb: "да имаат" },
        };
        function t(t) {
          return e[t] ?? null;
        }
        const n = {
            regex: "внес",
            email: "адреса на е-пошта",
            url: "URL",
            emoji: "емоџи",
            uuid: "UUID",
            uuidv4: "UUIDv4",
            uuidv6: "UUIDv6",
            nanoid: "nanoid",
            guid: "GUID",
            cuid: "cuid",
            cuid2: "cuid2",
            ulid: "ULID",
            xid: "XID",
            ksuid: "KSUID",
            datetime: "ISO датум и време",
            date: "ISO датум",
            time: "ISO време",
            duration: "ISO времетраење",
            ipv4: "IPv4 адреса",
            ipv6: "IPv6 адреса",
            cidrv4: "IPv4 опсег",
            cidrv6: "IPv6 опсег",
            base64: "base64-енкодирана низа",
            base64url: "base64url-енкодирана низа",
            json_string: "JSON низа",
            e164: "E.164 број",
            jwt: "JWT",
            template_literal: "внес",
          },
          r = { nan: "NaN", number: "број", array: "низа" };
        return (e) => {
          switch (e.code) {
            case "invalid_type": {
              const t = r[e.expected] ?? e.expected,
                n = i.GW(e.input),
                a = r[n] ?? n;
              return /^[A-Z]/.test(e.expected)
                ? `Грешен внес: се очекува instanceof ${e.expected}, примено ${a}`
                : `Грешен внес: се очекува ${t}, примено ${a}`;
            }
            case "invalid_value":
              return 1 === e.values.length
                ? `Invalid input: expected ${i.B7(e.values[0])}`
                : `Грешана опција: се очекува една ${i.jw(e.values, "|")}`;
            case "too_big": {
              const n = e.inclusive ? "<=" : "<",
                i = t(e.origin);
              return i
                ? `Премногу голем: се очекува ${e.origin ?? "вредноста"} да има ${n}${e.maximum.toString()} ${i.unit ?? "елементи"}`
                : `Премногу голем: се очекува ${e.origin ?? "вредноста"} да биде ${n}${e.maximum.toString()}`;
            }
            case "too_small": {
              const n = e.inclusive ? ">=" : ">",
                i = t(e.origin);
              return i
                ? `Премногу мал: се очекува ${e.origin} да има ${n}${e.minimum.toString()} ${i.unit}`
                : `Премногу мал: се очекува ${e.origin} да биде ${n}${e.minimum.toString()}`;
            }
            case "invalid_format": {
              const t = e;
              return "starts_with" === t.format
                ? `Неважечка низа: мора да започнува со "${t.prefix}"`
                : "ends_with" === t.format
                  ? `Неважечка низа: мора да завршува со "${t.suffix}"`
                  : "includes" === t.format
                    ? `Неважечка низа: мора да вклучува "${t.includes}"`
                    : "regex" === t.format
                      ? `Неважечка низа: мора да одгоара на патернот ${t.pattern}`
                      : `Invalid ${n[t.format] ?? e.format}`;
            }
            case "not_multiple_of":
              return `Грешен број: мора да биде делив со ${e.divisor}`;
            case "unrecognized_keys":
              return `${e.keys.length > 1 ? "Непрепознаени клучеви" : "Непрепознаен клуч"}: ${i.jw(e.keys, ", ")}`;
            case "invalid_key":
              return `Грешен клуч во ${e.origin}`;
            case "invalid_union":
            default:
              return "Грешен внес";
            case "invalid_element":
              return `Грешна вредност во ${e.origin}`;
          }
        };
      };
      function me() {
        return { localeError: de() };
      }
      const pe = () => {
        const e = {
          string: { unit: "aksara", verb: "mempunyai" },
          file: { unit: "bait", verb: "mempunyai" },
          array: { unit: "elemen", verb: "mempunyai" },
          set: { unit: "elemen", verb: "mempunyai" },
        };
        function t(t) {
          return e[t] ?? null;
        }
        const n = {
            regex: "input",
            email: "alamat e-mel",
            url: "URL",
            emoji: "emoji",
            uuid: "UUID",
            uuidv4: "UUIDv4",
            uuidv6: "UUIDv6",
            nanoid: "nanoid",
            guid: "GUID",
            cuid: "cuid",
            cuid2: "cuid2",
            ulid: "ULID",
            xid: "XID",
            ksuid: "KSUID",
            datetime: "tarikh masa ISO",
            date: "tarikh ISO",
            time: "masa ISO",
            duration: "tempoh ISO",
            ipv4: "alamat IPv4",
            ipv6: "alamat IPv6",
            cidrv4: "julat IPv4",
            cidrv6: "julat IPv6",
            base64: "string dikodkan base64",
            base64url: "string dikodkan base64url",
            json_string: "string JSON",
            e164: "nombor E.164",
            jwt: "JWT",
            template_literal: "input",
          },
          r = { nan: "NaN", number: "nombor" };
        return (e) => {
          switch (e.code) {
            case "invalid_type": {
              const t = r[e.expected] ?? e.expected,
                n = i.GW(e.input),
                a = r[n] ?? n;
              return /^[A-Z]/.test(e.expected)
                ? `Input tidak sah: dijangka instanceof ${e.expected}, diterima ${a}`
                : `Input tidak sah: dijangka ${t}, diterima ${a}`;
            }
            case "invalid_value":
              return 1 === e.values.length
                ? `Input tidak sah: dijangka ${i.B7(e.values[0])}`
                : `Pilihan tidak sah: dijangka salah satu daripada ${i.jw(e.values, "|")}`;
            case "too_big": {
              const n = e.inclusive ? "<=" : "<",
                i = t(e.origin);
              return i
                ? `Terlalu besar: dijangka ${e.origin ?? "nilai"} ${i.verb} ${n}${e.maximum.toString()} ${i.unit ?? "elemen"}`
                : `Terlalu besar: dijangka ${e.origin ?? "nilai"} adalah ${n}${e.maximum.toString()}`;
            }
            case "too_small": {
              const n = e.inclusive ? ">=" : ">",
                i = t(e.origin);
              return i
                ? `Terlalu kecil: dijangka ${e.origin} ${i.verb} ${n}${e.minimum.toString()} ${i.unit}`
                : `Terlalu kecil: dijangka ${e.origin} adalah ${n}${e.minimum.toString()}`;
            }
            case "invalid_format": {
              const t = e;
              return "starts_with" === t.format
                ? `String tidak sah: mesti bermula dengan "${t.prefix}"`
                : "ends_with" === t.format
                  ? `String tidak sah: mesti berakhir dengan "${t.suffix}"`
                  : "includes" === t.format
                    ? `String tidak sah: mesti mengandungi "${t.includes}"`
                    : "regex" === t.format
                      ? `String tidak sah: mesti sepadan dengan corak ${t.pattern}`
                      : `${n[t.format] ?? e.format} tidak sah`;
            }
            case "not_multiple_of":
              return `Nombor tidak sah: perlu gandaan ${e.divisor}`;
            case "unrecognized_keys":
              return `Kunci tidak dikenali: ${i.jw(e.keys, ", ")}`;
            case "invalid_key":
              return `Kunci tidak sah dalam ${e.origin}`;
            case "invalid_union":
            default:
              return "Input tidak sah";
            case "invalid_element":
              return `Nilai tidak sah dalam ${e.origin}`;
          }
        };
      };
      function ge() {
        return { localeError: pe() };
      }
      const fe = () => {
        const e = {
          string: { unit: "tekens", verb: "heeft" },
          file: { unit: "bytes", verb: "heeft" },
          array: { unit: "elementen", verb: "heeft" },
          set: { unit: "elementen", verb: "heeft" },
        };
        function t(t) {
          return e[t] ?? null;
        }
        const n = {
            regex: "invoer",
            email: "emailadres",
            url: "URL",
            emoji: "emoji",
            uuid: "UUID",
            uuidv4: "UUIDv4",
            uuidv6: "UUIDv6",
            nanoid: "nanoid",
            guid: "GUID",
            cuid: "cuid",
            cuid2: "cuid2",
            ulid: "ULID",
            xid: "XID",
            ksuid: "KSUID",
            datetime: "ISO datum en tijd",
            date: "ISO datum",
            time: "ISO tijd",
            duration: "ISO duur",
            ipv4: "IPv4-adres",
            ipv6: "IPv6-adres",
            cidrv4: "IPv4-bereik",
            cidrv6: "IPv6-bereik",
            base64: "base64-gecodeerde tekst",
            base64url: "base64 URL-gecodeerde tekst",
            json_string: "JSON string",
            e164: "E.164-nummer",
            jwt: "JWT",
            template_literal: "invoer",
          },
          r = { nan: "NaN", number: "getal" };
        return (e) => {
          switch (e.code) {
            case "invalid_type": {
              const t = r[e.expected] ?? e.expected,
                n = i.GW(e.input),
                a = r[n] ?? n;
              return /^[A-Z]/.test(e.expected)
                ? `Ongeldige invoer: verwacht instanceof ${e.expected}, ontving ${a}`
                : `Ongeldige invoer: verwacht ${t}, ontving ${a}`;
            }
            case "invalid_value":
              return 1 === e.values.length
                ? `Ongeldige invoer: verwacht ${i.B7(e.values[0])}`
                : `Ongeldige optie: verwacht één van ${i.jw(e.values, "|")}`;
            case "too_big": {
              const n = e.inclusive ? "<=" : "<",
                i = t(e.origin),
                r =
                  "date" === e.origin
                    ? "laat"
                    : "string" === e.origin
                      ? "lang"
                      : "groot";
              return i
                ? `Te ${r}: verwacht dat ${e.origin ?? "waarde"} ${n}${e.maximum.toString()} ${i.unit ?? "elementen"} ${i.verb}`
                : `Te ${r}: verwacht dat ${e.origin ?? "waarde"} ${n}${e.maximum.toString()} is`;
            }
            case "too_small": {
              const n = e.inclusive ? ">=" : ">",
                i = t(e.origin),
                r =
                  "date" === e.origin
                    ? "vroeg"
                    : "string" === e.origin
                      ? "kort"
                      : "klein";
              return i
                ? `Te ${r}: verwacht dat ${e.origin} ${n}${e.minimum.toString()} ${i.unit} ${i.verb}`
                : `Te ${r}: verwacht dat ${e.origin} ${n}${e.minimum.toString()} is`;
            }
            case "invalid_format": {
              const t = e;
              return "starts_with" === t.format
                ? `Ongeldige tekst: moet met "${t.prefix}" beginnen`
                : "ends_with" === t.format
                  ? `Ongeldige tekst: moet op "${t.suffix}" eindigen`
                  : "includes" === t.format
                    ? `Ongeldige tekst: moet "${t.includes}" bevatten`
                    : "regex" === t.format
                      ? `Ongeldige tekst: moet overeenkomen met patroon ${t.pattern}`
                      : `Ongeldig: ${n[t.format] ?? e.format}`;
            }
            case "not_multiple_of":
              return `Ongeldig getal: moet een veelvoud van ${e.divisor} zijn`;
            case "unrecognized_keys":
              return `Onbekende key${e.keys.length > 1 ? "s" : ""}: ${i.jw(e.keys, ", ")}`;
            case "invalid_key":
              return `Ongeldige key in ${e.origin}`;
            case "invalid_union":
            default:
              return "Ongeldige invoer";
            case "invalid_element":
              return `Ongeldige waarde in ${e.origin}`;
          }
        };
      };
      function ve() {
        return { localeError: fe() };
      }
      const he = () => {
        const e = {
          string: { unit: "tegn", verb: "å ha" },
          file: { unit: "bytes", verb: "å ha" },
          array: { unit: "elementer", verb: "å inneholde" },
          set: { unit: "elementer", verb: "å inneholde" },
        };
        function t(t) {
          return e[t] ?? null;
        }
        const n = {
            regex: "input",
            email: "e-postadresse",
            url: "URL",
            emoji: "emoji",
            uuid: "UUID",
            uuidv4: "UUIDv4",
            uuidv6: "UUIDv6",
            nanoid: "nanoid",
            guid: "GUID",
            cuid: "cuid",
            cuid2: "cuid2",
            ulid: "ULID",
            xid: "XID",
            ksuid: "KSUID",
            datetime: "ISO dato- og klokkeslett",
            date: "ISO-dato",
            time: "ISO-klokkeslett",
            duration: "ISO-varighet",
            ipv4: "IPv4-område",
            ipv6: "IPv6-område",
            cidrv4: "IPv4-spekter",
            cidrv6: "IPv6-spekter",
            base64: "base64-enkodet streng",
            base64url: "base64url-enkodet streng",
            json_string: "JSON-streng",
            e164: "E.164-nummer",
            jwt: "JWT",
            template_literal: "input",
          },
          r = { nan: "NaN", number: "tall", array: "liste" };
        return (e) => {
          switch (e.code) {
            case "invalid_type": {
              const t = r[e.expected] ?? e.expected,
                n = i.GW(e.input),
                a = r[n] ?? n;
              return /^[A-Z]/.test(e.expected)
                ? `Ugyldig input: forventet instanceof ${e.expected}, fikk ${a}`
                : `Ugyldig input: forventet ${t}, fikk ${a}`;
            }
            case "invalid_value":
              return 1 === e.values.length
                ? `Ugyldig verdi: forventet ${i.B7(e.values[0])}`
                : `Ugyldig valg: forventet en av ${i.jw(e.values, "|")}`;
            case "too_big": {
              const n = e.inclusive ? "<=" : "<",
                i = t(e.origin);
              return i
                ? `For stor(t): forventet ${e.origin ?? "value"} til å ha ${n}${e.maximum.toString()} ${i.unit ?? "elementer"}`
                : `For stor(t): forventet ${e.origin ?? "value"} til å ha ${n}${e.maximum.toString()}`;
            }
            case "too_small": {
              const n = e.inclusive ? ">=" : ">",
                i = t(e.origin);
              return i
                ? `For lite(n): forventet ${e.origin} til å ha ${n}${e.minimum.toString()} ${i.unit}`
                : `For lite(n): forventet ${e.origin} til å ha ${n}${e.minimum.toString()}`;
            }
            case "invalid_format": {
              const t = e;
              return "starts_with" === t.format
                ? `Ugyldig streng: må starte med "${t.prefix}"`
                : "ends_with" === t.format
                  ? `Ugyldig streng: må ende med "${t.suffix}"`
                  : "includes" === t.format
                    ? `Ugyldig streng: må inneholde "${t.includes}"`
                    : "regex" === t.format
                      ? `Ugyldig streng: må matche mønsteret ${t.pattern}`
                      : `Ugyldig ${n[t.format] ?? e.format}`;
            }
            case "not_multiple_of":
              return `Ugyldig tall: må være et multiplum av ${e.divisor}`;
            case "unrecognized_keys":
              return `${e.keys.length > 1 ? "Ukjente nøkler" : "Ukjent nøkkel"}: ${i.jw(e.keys, ", ")}`;
            case "invalid_key":
              return `Ugyldig nøkkel i ${e.origin}`;
            case "invalid_union":
            default:
              return "Ugyldig input";
            case "invalid_element":
              return `Ugyldig verdi i ${e.origin}`;
          }
        };
      };
      function be() {
        return { localeError: he() };
      }
      const $e = () => {
        const e = {
          string: { unit: "harf", verb: "olmalıdır" },
          file: { unit: "bayt", verb: "olmalıdır" },
          array: { unit: "unsur", verb: "olmalıdır" },
          set: { unit: "unsur", verb: "olmalıdır" },
        };
        function t(t) {
          return e[t] ?? null;
        }
        const n = {
            regex: "giren",
            email: "epostagâh",
            url: "URL",
            emoji: "emoji",
            uuid: "UUID",
            uuidv4: "UUIDv4",
            uuidv6: "UUIDv6",
            nanoid: "nanoid",
            guid: "GUID",
            cuid: "cuid",
            cuid2: "cuid2",
            ulid: "ULID",
            xid: "XID",
            ksuid: "KSUID",
            datetime: "ISO hengâmı",
            date: "ISO tarihi",
            time: "ISO zamanı",
            duration: "ISO müddeti",
            ipv4: "IPv4 nişânı",
            ipv6: "IPv6 nişânı",
            cidrv4: "IPv4 menzili",
            cidrv6: "IPv6 menzili",
            base64: "base64-şifreli metin",
            base64url: "base64url-şifreli metin",
            json_string: "JSON metin",
            e164: "E.164 sayısı",
            jwt: "JWT",
            template_literal: "giren",
          },
          r = { nan: "NaN", number: "numara", array: "saf", null: "gayb" };
        return (e) => {
          switch (e.code) {
            case "invalid_type": {
              const t = r[e.expected] ?? e.expected,
                n = i.GW(e.input),
                a = r[n] ?? n;
              return /^[A-Z]/.test(e.expected)
                ? `Fâsit giren: umulan instanceof ${e.expected}, alınan ${a}`
                : `Fâsit giren: umulan ${t}, alınan ${a}`;
            }
            case "invalid_value":
              return 1 === e.values.length
                ? `Fâsit giren: umulan ${i.B7(e.values[0])}`
                : `Fâsit tercih: mûteberler ${i.jw(e.values, "|")}`;
            case "too_big": {
              const n = e.inclusive ? "<=" : "<",
                i = t(e.origin);
              return i
                ? `Fazla büyük: ${e.origin ?? "value"}, ${n}${e.maximum.toString()} ${i.unit ?? "elements"} sahip olmalıydı.`
                : `Fazla büyük: ${e.origin ?? "value"}, ${n}${e.maximum.toString()} olmalıydı.`;
            }
            case "too_small": {
              const n = e.inclusive ? ">=" : ">",
                i = t(e.origin);
              return i
                ? `Fazla küçük: ${e.origin}, ${n}${e.minimum.toString()} ${i.unit} sahip olmalıydı.`
                : `Fazla küçük: ${e.origin}, ${n}${e.minimum.toString()} olmalıydı.`;
            }
            case "invalid_format": {
              const t = e;
              return "starts_with" === t.format
                ? `Fâsit metin: "${t.prefix}" ile başlamalı.`
                : "ends_with" === t.format
                  ? `Fâsit metin: "${t.suffix}" ile bitmeli.`
                  : "includes" === t.format
                    ? `Fâsit metin: "${t.includes}" ihtivâ etmeli.`
                    : "regex" === t.format
                      ? `Fâsit metin: ${t.pattern} nakşına uymalı.`
                      : `Fâsit ${n[t.format] ?? e.format}`;
            }
            case "not_multiple_of":
              return `Fâsit sayı: ${e.divisor} katı olmalıydı.`;
            case "unrecognized_keys":
              return `Tanınmayan anahtar ${e.keys.length > 1 ? "s" : ""}: ${i.jw(e.keys, ", ")}`;
            case "invalid_key":
              return `${e.origin} için tanınmayan anahtar var.`;
            case "invalid_union":
              return "Giren tanınamadı.";
            case "invalid_element":
              return `${e.origin} için tanınmayan kıymet var.`;
            default:
              return "Kıymet tanınamadı.";
          }
        };
      };
      function ye() {
        return { localeError: $e() };
      }
      const Ie = () => {
        const e = {
          string: { unit: "توکي", verb: "ولري" },
          file: { unit: "بایټس", verb: "ولري" },
          array: { unit: "توکي", verb: "ولري" },
          set: { unit: "توکي", verb: "ولري" },
        };
        function t(t) {
          return e[t] ?? null;
        }
        const n = {
            regex: "ورودي",
            email: "بریښنالیک",
            url: "یو آر ال",
            emoji: "ایموجي",
            uuid: "UUID",
            uuidv4: "UUIDv4",
            uuidv6: "UUIDv6",
            nanoid: "nanoid",
            guid: "GUID",
            cuid: "cuid",
            cuid2: "cuid2",
            ulid: "ULID",
            xid: "XID",
            ksuid: "KSUID",
            datetime: "نیټه او وخت",
            date: "نېټه",
            time: "وخت",
            duration: "موده",
            ipv4: "د IPv4 پته",
            ipv6: "د IPv6 پته",
            cidrv4: "د IPv4 ساحه",
            cidrv6: "د IPv6 ساحه",
            base64: "base64-encoded متن",
            base64url: "base64url-encoded متن",
            json_string: "JSON متن",
            e164: "د E.164 شمېره",
            jwt: "JWT",
            template_literal: "ورودي",
          },
          r = { nan: "NaN", number: "عدد", array: "ارې" };
        return (e) => {
          switch (e.code) {
            case "invalid_type": {
              const t = r[e.expected] ?? e.expected,
                n = i.GW(e.input),
                a = r[n] ?? n;
              return /^[A-Z]/.test(e.expected)
                ? `ناسم ورودي: باید instanceof ${e.expected} وای, مګر ${a} ترلاسه شو`
                : `ناسم ورودي: باید ${t} وای, مګر ${a} ترلاسه شو`;
            }
            case "invalid_value":
              return 1 === e.values.length
                ? `ناسم ورودي: باید ${i.B7(e.values[0])} وای`
                : `ناسم انتخاب: باید یو له ${i.jw(e.values, "|")} څخه وای`;
            case "too_big": {
              const n = e.inclusive ? "<=" : "<",
                i = t(e.origin);
              return i
                ? `ډیر لوی: ${e.origin ?? "ارزښت"} باید ${n}${e.maximum.toString()} ${i.unit ?? "عنصرونه"} ولري`
                : `ډیر لوی: ${e.origin ?? "ارزښت"} باید ${n}${e.maximum.toString()} وي`;
            }
            case "too_small": {
              const n = e.inclusive ? ">=" : ">",
                i = t(e.origin);
              return i
                ? `ډیر کوچنی: ${e.origin} باید ${n}${e.minimum.toString()} ${i.unit} ولري`
                : `ډیر کوچنی: ${e.origin} باید ${n}${e.minimum.toString()} وي`;
            }
            case "invalid_format": {
              const t = e;
              return "starts_with" === t.format
                ? `ناسم متن: باید د "${t.prefix}" سره پیل شي`
                : "ends_with" === t.format
                  ? `ناسم متن: باید د "${t.suffix}" سره پای ته ورسيږي`
                  : "includes" === t.format
                    ? `ناسم متن: باید "${t.includes}" ولري`
                    : "regex" === t.format
                      ? `ناسم متن: باید د ${t.pattern} سره مطابقت ولري`
                      : `${n[t.format] ?? e.format} ناسم دی`;
            }
            case "not_multiple_of":
              return `ناسم عدد: باید د ${e.divisor} مضرب وي`;
            case "unrecognized_keys":
              return `ناسم ${e.keys.length > 1 ? "کلیډونه" : "کلیډ"}: ${i.jw(e.keys, ", ")}`;
            case "invalid_key":
              return `ناسم کلیډ په ${e.origin} کې`;
            case "invalid_union":
            default:
              return "ناسمه ورودي";
            case "invalid_element":
              return `ناسم عنصر په ${e.origin} کې`;
          }
        };
      };
      function _e() {
        return { localeError: Ie() };
      }
      const xe = () => {
        const e = {
          string: { unit: "znaków", verb: "mieć" },
          file: { unit: "bajtów", verb: "mieć" },
          array: { unit: "elementów", verb: "mieć" },
          set: { unit: "elementów", verb: "mieć" },
        };
        function t(t) {
          return e[t] ?? null;
        }
        const n = {
            regex: "wyrażenie",
            email: "adres email",
            url: "URL",
            emoji: "emoji",
            uuid: "UUID",
            uuidv4: "UUIDv4",
            uuidv6: "UUIDv6",
            nanoid: "nanoid",
            guid: "GUID",
            cuid: "cuid",
            cuid2: "cuid2",
            ulid: "ULID",
            xid: "XID",
            ksuid: "KSUID",
            datetime: "data i godzina w formacie ISO",
            date: "data w formacie ISO",
            time: "godzina w formacie ISO",
            duration: "czas trwania ISO",
            ipv4: "adres IPv4",
            ipv6: "adres IPv6",
            cidrv4: "zakres IPv4",
            cidrv6: "zakres IPv6",
            base64: "ciąg znaków zakodowany w formacie base64",
            base64url: "ciąg znaków zakodowany w formacie base64url",
            json_string: "ciąg znaków w formacie JSON",
            e164: "liczba E.164",
            jwt: "JWT",
            template_literal: "wejście",
          },
          r = { nan: "NaN", number: "liczba", array: "tablica" };
        return (e) => {
          switch (e.code) {
            case "invalid_type": {
              const t = r[e.expected] ?? e.expected,
                n = i.GW(e.input),
                a = r[n] ?? n;
              return /^[A-Z]/.test(e.expected)
                ? `Nieprawidłowe dane wejściowe: oczekiwano instanceof ${e.expected}, otrzymano ${a}`
                : `Nieprawidłowe dane wejściowe: oczekiwano ${t}, otrzymano ${a}`;
            }
            case "invalid_value":
              return 1 === e.values.length
                ? `Nieprawidłowe dane wejściowe: oczekiwano ${i.B7(e.values[0])}`
                : `Nieprawidłowa opcja: oczekiwano jednej z wartości ${i.jw(e.values, "|")}`;
            case "too_big": {
              const n = e.inclusive ? "<=" : "<",
                i = t(e.origin);
              return i
                ? `Za duża wartość: oczekiwano, że ${e.origin ?? "wartość"} będzie mieć ${n}${e.maximum.toString()} ${i.unit ?? "elementów"}`
                : `Zbyt duż(y/a/e): oczekiwano, że ${e.origin ?? "wartość"} będzie wynosić ${n}${e.maximum.toString()}`;
            }
            case "too_small": {
              const n = e.inclusive ? ">=" : ">",
                i = t(e.origin);
              return i
                ? `Za mała wartość: oczekiwano, że ${e.origin ?? "wartość"} będzie mieć ${n}${e.minimum.toString()} ${i.unit ?? "elementów"}`
                : `Zbyt mał(y/a/e): oczekiwano, że ${e.origin ?? "wartość"} będzie wynosić ${n}${e.minimum.toString()}`;
            }
            case "invalid_format": {
              const t = e;
              return "starts_with" === t.format
                ? `Nieprawidłowy ciąg znaków: musi zaczynać się od "${t.prefix}"`
                : "ends_with" === t.format
                  ? `Nieprawidłowy ciąg znaków: musi kończyć się na "${t.suffix}"`
                  : "includes" === t.format
                    ? `Nieprawidłowy ciąg znaków: musi zawierać "${t.includes}"`
                    : "regex" === t.format
                      ? `Nieprawidłowy ciąg znaków: musi odpowiadać wzorcowi ${t.pattern}`
                      : `Nieprawidłow(y/a/e) ${n[t.format] ?? e.format}`;
            }
            case "not_multiple_of":
              return `Nieprawidłowa liczba: musi być wielokrotnością ${e.divisor}`;
            case "unrecognized_keys":
              return `Nierozpoznane klucze${e.keys.length > 1 ? "s" : ""}: ${i.jw(e.keys, ", ")}`;
            case "invalid_key":
              return `Nieprawidłowy klucz w ${e.origin}`;
            case "invalid_union":
            default:
              return "Nieprawidłowe dane wejściowe";
            case "invalid_element":
              return `Nieprawidłowa wartość w ${e.origin}`;
          }
        };
      };
      function ke() {
        return { localeError: xe() };
      }
      const we = () => {
        const e = {
          string: { unit: "caracteres", verb: "ter" },
          file: { unit: "bytes", verb: "ter" },
          array: { unit: "itens", verb: "ter" },
          set: { unit: "itens", verb: "ter" },
        };
        function t(t) {
          return e[t] ?? null;
        }
        const n = {
            regex: "padrão",
            email: "endereço de e-mail",
            url: "URL",
            emoji: "emoji",
            uuid: "UUID",
            uuidv4: "UUIDv4",
            uuidv6: "UUIDv6",
            nanoid: "nanoid",
            guid: "GUID",
            cuid: "cuid",
            cuid2: "cuid2",
            ulid: "ULID",
            xid: "XID",
            ksuid: "KSUID",
            datetime: "data e hora ISO",
            date: "data ISO",
            time: "hora ISO",
            duration: "duração ISO",
            ipv4: "endereço IPv4",
            ipv6: "endereço IPv6",
            cidrv4: "faixa de IPv4",
            cidrv6: "faixa de IPv6",
            base64: "texto codificado em base64",
            base64url: "URL codificada em base64",
            json_string: "texto JSON",
            e164: "número E.164",
            jwt: "JWT",
            template_literal: "entrada",
          },
          r = { nan: "NaN", number: "número", null: "nulo" };
        return (e) => {
          switch (e.code) {
            case "invalid_type": {
              const t = r[e.expected] ?? e.expected,
                n = i.GW(e.input),
                a = r[n] ?? n;
              return /^[A-Z]/.test(e.expected)
                ? `Tipo inválido: esperado instanceof ${e.expected}, recebido ${a}`
                : `Tipo inválido: esperado ${t}, recebido ${a}`;
            }
            case "invalid_value":
              return 1 === e.values.length
                ? `Entrada inválida: esperado ${i.B7(e.values[0])}`
                : `Opção inválida: esperada uma das ${i.jw(e.values, "|")}`;
            case "too_big": {
              const n = e.inclusive ? "<=" : "<",
                i = t(e.origin);
              return i
                ? `Muito grande: esperado que ${e.origin ?? "valor"} tivesse ${n}${e.maximum.toString()} ${i.unit ?? "elementos"}`
                : `Muito grande: esperado que ${e.origin ?? "valor"} fosse ${n}${e.maximum.toString()}`;
            }
            case "too_small": {
              const n = e.inclusive ? ">=" : ">",
                i = t(e.origin);
              return i
                ? `Muito pequeno: esperado que ${e.origin} tivesse ${n}${e.minimum.toString()} ${i.unit}`
                : `Muito pequeno: esperado que ${e.origin} fosse ${n}${e.minimum.toString()}`;
            }
            case "invalid_format": {
              const t = e;
              return "starts_with" === t.format
                ? `Texto inválido: deve começar com "${t.prefix}"`
                : "ends_with" === t.format
                  ? `Texto inválido: deve terminar com "${t.suffix}"`
                  : "includes" === t.format
                    ? `Texto inválido: deve incluir "${t.includes}"`
                    : "regex" === t.format
                      ? `Texto inválido: deve corresponder ao padrão ${t.pattern}`
                      : `${n[t.format] ?? e.format} inválido`;
            }
            case "not_multiple_of":
              return `Número inválido: deve ser múltiplo de ${e.divisor}`;
            case "unrecognized_keys":
              return `Chave${e.keys.length > 1 ? "s" : ""} desconhecida${e.keys.length > 1 ? "s" : ""}: ${i.jw(e.keys, ", ")}`;
            case "invalid_key":
              return `Chave inválida em ${e.origin}`;
            case "invalid_union":
              return "Entrada inválida";
            case "invalid_element":
              return `Valor inválido em ${e.origin}`;
            default:
              return "Campo inválido";
          }
        };
      };
      function Se() {
        return { localeError: we() };
      }
      const De = () => {
        const e = {
          string: { unit: "caractere", verb: "să aibă" },
          file: { unit: "octeți", verb: "să aibă" },
          array: { unit: "elemente", verb: "să aibă" },
          set: { unit: "elemente", verb: "să aibă" },
          map: { unit: "intrări", verb: "să aibă" },
        };
        function t(t) {
          return e[t] ?? null;
        }
        const n = {
            regex: "intrare",
            email: "adresă de email",
            url: "URL",
            emoji: "emoji",
            uuid: "UUID",
            uuidv4: "UUIDv4",
            uuidv6: "UUIDv6",
            nanoid: "nanoid",
            guid: "GUID",
            cuid: "cuid",
            cuid2: "cuid2",
            ulid: "ULID",
            xid: "XID",
            ksuid: "KSUID",
            datetime: "dată și oră ISO",
            date: "dată ISO",
            time: "oră ISO",
            duration: "durată ISO",
            ipv4: "adresă IPv4",
            ipv6: "adresă IPv6",
            mac: "adresă MAC",
            cidrv4: "interval IPv4",
            cidrv6: "interval IPv6",
            base64: "șir codat base64",
            base64url: "șir codat base64url",
            json_string: "șir JSON",
            e164: "număr E.164",
            jwt: "JWT",
            template_literal: "intrare",
          },
          r = {
            nan: "NaN",
            string: "șir",
            number: "număr",
            boolean: "boolean",
            function: "funcție",
            array: "matrice",
            object: "obiect",
            undefined: "nedefinit",
            symbol: "simbol",
            bigint: "număr mare",
            void: "void",
            never: "never",
            map: "hartă",
            set: "set",
          };
        return (e) => {
          switch (e.code) {
            case "invalid_type": {
              const t = r[e.expected] ?? e.expected,
                n = i.GW(e.input);
              return `Intrare invalidă: așteptat ${t}, primit ${r[n] ?? n}`;
            }
            case "invalid_value":
              return 1 === e.values.length
                ? `Intrare invalidă: așteptat ${i.B7(e.values[0])}`
                : `Opțiune invalidă: așteptat una dintre ${i.jw(e.values, "|")}`;
            case "too_big": {
              const n = e.inclusive ? "<=" : "<",
                i = t(e.origin);
              return i
                ? `Prea mare: așteptat ca ${e.origin ?? "valoarea"} ${i.verb} ${n}${e.maximum.toString()} ${i.unit ?? "elemente"}`
                : `Prea mare: așteptat ca ${e.origin ?? "valoarea"} să fie ${n}${e.maximum.toString()}`;
            }
            case "too_small": {
              const n = e.inclusive ? ">=" : ">",
                i = t(e.origin);
              return i
                ? `Prea mic: așteptat ca ${e.origin} ${i.verb} ${n}${e.minimum.toString()} ${i.unit}`
                : `Prea mic: așteptat ca ${e.origin} să fie ${n}${e.minimum.toString()}`;
            }
            case "invalid_format": {
              const t = e;
              return "starts_with" === t.format
                ? `Șir invalid: trebuie să înceapă cu "${t.prefix}"`
                : "ends_with" === t.format
                  ? `Șir invalid: trebuie să se termine cu "${t.suffix}"`
                  : "includes" === t.format
                    ? `Șir invalid: trebuie să includă "${t.includes}"`
                    : "regex" === t.format
                      ? `Șir invalid: trebuie să se potrivească cu modelul ${t.pattern}`
                      : `Format invalid: ${n[t.format] ?? e.format}`;
            }
            case "not_multiple_of":
              return `Număr invalid: trebuie să fie multiplu de ${e.divisor}`;
            case "unrecognized_keys":
              return `Chei nerecunoscute: ${i.jw(e.keys, ", ")}`;
            case "invalid_key":
              return `Cheie invalidă în ${e.origin}`;
            case "invalid_union":
            default:
              return "Intrare invalidă";
            case "invalid_element":
              return `Valoare invalidă în ${e.origin}`;
          }
        };
      };
      function Oe() {
        return { localeError: De() };
      }
      function Ue(e, t, n, i) {
        const r = Math.abs(e),
          a = r % 10,
          o = r % 100;
        return o >= 11 && o <= 19 ? i : 1 === a ? t : a >= 2 && a <= 4 ? n : i;
      }
      const Ne = () => {
        const e = {
          string: {
            unit: { one: "символ", few: "символа", many: "символов" },
            verb: "иметь",
          },
          file: {
            unit: { one: "байт", few: "байта", many: "байт" },
            verb: "иметь",
          },
          array: {
            unit: { one: "элемент", few: "элемента", many: "элементов" },
            verb: "иметь",
          },
          set: {
            unit: { one: "элемент", few: "элемента", many: "элементов" },
            verb: "иметь",
          },
        };
        function t(t) {
          return e[t] ?? null;
        }
        const n = {
            regex: "ввод",
            email: "email адрес",
            url: "URL",
            emoji: "эмодзи",
            uuid: "UUID",
            uuidv4: "UUIDv4",
            uuidv6: "UUIDv6",
            nanoid: "nanoid",
            guid: "GUID",
            cuid: "cuid",
            cuid2: "cuid2",
            ulid: "ULID",
            xid: "XID",
            ksuid: "KSUID",
            datetime: "ISO дата и время",
            date: "ISO дата",
            time: "ISO время",
            duration: "ISO длительность",
            ipv4: "IPv4 адрес",
            ipv6: "IPv6 адрес",
            cidrv4: "IPv4 диапазон",
            cidrv6: "IPv6 диапазон",
            base64: "строка в формате base64",
            base64url: "строка в формате base64url",
            json_string: "JSON строка",
            e164: "номер E.164",
            jwt: "JWT",
            template_literal: "ввод",
          },
          r = { nan: "NaN", number: "число", array: "массив" };
        return (e) => {
          switch (e.code) {
            case "invalid_type": {
              const t = r[e.expected] ?? e.expected,
                n = i.GW(e.input),
                a = r[n] ?? n;
              return /^[A-Z]/.test(e.expected)
                ? `Неверный ввод: ожидалось instanceof ${e.expected}, получено ${a}`
                : `Неверный ввод: ожидалось ${t}, получено ${a}`;
            }
            case "invalid_value":
              return 1 === e.values.length
                ? `Неверный ввод: ожидалось ${i.B7(e.values[0])}`
                : `Неверный вариант: ожидалось одно из ${i.jw(e.values, "|")}`;
            case "too_big": {
              const n = e.inclusive ? "<=" : "<",
                i = t(e.origin);
              if (i) {
                const t = Ue(
                  Number(e.maximum),
                  i.unit.one,
                  i.unit.few,
                  i.unit.many,
                );
                return `Слишком большое значение: ожидалось, что ${e.origin ?? "значение"} будет иметь ${n}${e.maximum.toString()} ${t}`;
              }
              return `Слишком большое значение: ожидалось, что ${e.origin ?? "значение"} будет ${n}${e.maximum.toString()}`;
            }
            case "too_small": {
              const n = e.inclusive ? ">=" : ">",
                i = t(e.origin);
              if (i) {
                const t = Ue(
                  Number(e.minimum),
                  i.unit.one,
                  i.unit.few,
                  i.unit.many,
                );
                return `Слишком маленькое значение: ожидалось, что ${e.origin} будет иметь ${n}${e.minimum.toString()} ${t}`;
              }
              return `Слишком маленькое значение: ожидалось, что ${e.origin} будет ${n}${e.minimum.toString()}`;
            }
            case "invalid_format": {
              const t = e;
              return "starts_with" === t.format
                ? `Неверная строка: должна начинаться с "${t.prefix}"`
                : "ends_with" === t.format
                  ? `Неверная строка: должна заканчиваться на "${t.suffix}"`
                  : "includes" === t.format
                    ? `Неверная строка: должна содержать "${t.includes}"`
                    : "regex" === t.format
                      ? `Неверная строка: должна соответствовать шаблону ${t.pattern}`
                      : `Неверный ${n[t.format] ?? e.format}`;
            }
            case "not_multiple_of":
              return `Неверное число: должно быть кратным ${e.divisor}`;
            case "unrecognized_keys":
              return `Нераспознанн${e.keys.length > 1 ? "ые" : "ый"} ключ${e.keys.length > 1 ? "и" : ""}: ${i.jw(e.keys, ", ")}`;
            case "invalid_key":
              return `Неверный ключ в ${e.origin}`;
            case "invalid_union":
            default:
              return "Неверные входные данные";
            case "invalid_element":
              return `Неверное значение в ${e.origin}`;
          }
        };
      };
      function ze() {
        return { localeError: Ne() };
      }
      const Ee = () => {
        const e = {
          string: { unit: "znakov", verb: "imeti" },
          file: { unit: "bajtov", verb: "imeti" },
          array: { unit: "elementov", verb: "imeti" },
          set: { unit: "elementov", verb: "imeti" },
        };
        function t(t) {
          return e[t] ?? null;
        }
        const n = {
            regex: "vnos",
            email: "e-poštni naslov",
            url: "URL",
            emoji: "emoji",
            uuid: "UUID",
            uuidv4: "UUIDv4",
            uuidv6: "UUIDv6",
            nanoid: "nanoid",
            guid: "GUID",
            cuid: "cuid",
            cuid2: "cuid2",
            ulid: "ULID",
            xid: "XID",
            ksuid: "KSUID",
            datetime: "ISO datum in čas",
            date: "ISO datum",
            time: "ISO čas",
            duration: "ISO trajanje",
            ipv4: "IPv4 naslov",
            ipv6: "IPv6 naslov",
            cidrv4: "obseg IPv4",
            cidrv6: "obseg IPv6",
            base64: "base64 kodiran niz",
            base64url: "base64url kodiran niz",
            json_string: "JSON niz",
            e164: "E.164 številka",
            jwt: "JWT",
            template_literal: "vnos",
          },
          r = { nan: "NaN", number: "število", array: "tabela" };
        return (e) => {
          switch (e.code) {
            case "invalid_type": {
              const t = r[e.expected] ?? e.expected,
                n = i.GW(e.input),
                a = r[n] ?? n;
              return /^[A-Z]/.test(e.expected)
                ? `Neveljaven vnos: pričakovano instanceof ${e.expected}, prejeto ${a}`
                : `Neveljaven vnos: pričakovano ${t}, prejeto ${a}`;
            }
            case "invalid_value":
              return 1 === e.values.length
                ? `Neveljaven vnos: pričakovano ${i.B7(e.values[0])}`
                : `Neveljavna možnost: pričakovano eno izmed ${i.jw(e.values, "|")}`;
            case "too_big": {
              const n = e.inclusive ? "<=" : "<",
                i = t(e.origin);
              return i
                ? `Preveliko: pričakovano, da bo ${e.origin ?? "vrednost"} imelo ${n}${e.maximum.toString()} ${i.unit ?? "elementov"}`
                : `Preveliko: pričakovano, da bo ${e.origin ?? "vrednost"} ${n}${e.maximum.toString()}`;
            }
            case "too_small": {
              const n = e.inclusive ? ">=" : ">",
                i = t(e.origin);
              return i
                ? `Premajhno: pričakovano, da bo ${e.origin} imelo ${n}${e.minimum.toString()} ${i.unit}`
                : `Premajhno: pričakovano, da bo ${e.origin} ${n}${e.minimum.toString()}`;
            }
            case "invalid_format": {
              const t = e;
              return "starts_with" === t.format
                ? `Neveljaven niz: mora se začeti z "${t.prefix}"`
                : "ends_with" === t.format
                  ? `Neveljaven niz: mora se končati z "${t.suffix}"`
                  : "includes" === t.format
                    ? `Neveljaven niz: mora vsebovati "${t.includes}"`
                    : "regex" === t.format
                      ? `Neveljaven niz: mora ustrezati vzorcu ${t.pattern}`
                      : `Neveljaven ${n[t.format] ?? e.format}`;
            }
            case "not_multiple_of":
              return `Neveljavno število: mora biti večkratnik ${e.divisor}`;
            case "unrecognized_keys":
              return `Neprepoznan${e.keys.length > 1 ? "i ključi" : " ključ"}: ${i.jw(e.keys, ", ")}`;
            case "invalid_key":
              return `Neveljaven ključ v ${e.origin}`;
            case "invalid_union":
            default:
              return "Neveljaven vnos";
            case "invalid_element":
              return `Neveljavna vrednost v ${e.origin}`;
          }
        };
      };
      function Pe() {
        return { localeError: Ee() };
      }
      const je = () => {
        const e = {
          string: { unit: "tecken", verb: "att ha" },
          file: { unit: "bytes", verb: "att ha" },
          array: { unit: "objekt", verb: "att innehålla" },
          set: { unit: "objekt", verb: "att innehålla" },
        };
        function t(t) {
          return e[t] ?? null;
        }
        const n = {
            regex: "reguljärt uttryck",
            email: "e-postadress",
            url: "URL",
            emoji: "emoji",
            uuid: "UUID",
            uuidv4: "UUIDv4",
            uuidv6: "UUIDv6",
            nanoid: "nanoid",
            guid: "GUID",
            cuid: "cuid",
            cuid2: "cuid2",
            ulid: "ULID",
            xid: "XID",
            ksuid: "KSUID",
            datetime: "ISO-datum och tid",
            date: "ISO-datum",
            time: "ISO-tid",
            duration: "ISO-varaktighet",
            ipv4: "IPv4-intervall",
            ipv6: "IPv6-intervall",
            cidrv4: "IPv4-spektrum",
            cidrv6: "IPv6-spektrum",
            base64: "base64-kodad sträng",
            base64url: "base64url-kodad sträng",
            json_string: "JSON-sträng",
            e164: "E.164-nummer",
            jwt: "JWT",
            template_literal: "mall-literal",
          },
          r = { nan: "NaN", number: "antal", array: "lista" };
        return (e) => {
          switch (e.code) {
            case "invalid_type": {
              const t = r[e.expected] ?? e.expected,
                n = i.GW(e.input),
                a = r[n] ?? n;
              return /^[A-Z]/.test(e.expected)
                ? `Ogiltig inmatning: förväntat instanceof ${e.expected}, fick ${a}`
                : `Ogiltig inmatning: förväntat ${t}, fick ${a}`;
            }
            case "invalid_value":
              return 1 === e.values.length
                ? `Ogiltig inmatning: förväntat ${i.B7(e.values[0])}`
                : `Ogiltigt val: förväntade en av ${i.jw(e.values, "|")}`;
            case "too_big": {
              const n = e.inclusive ? "<=" : "<",
                i = t(e.origin);
              return i
                ? `För stor(t): förväntade ${e.origin ?? "värdet"} att ha ${n}${e.maximum.toString()} ${i.unit ?? "element"}`
                : `För stor(t): förväntat ${e.origin ?? "värdet"} att ha ${n}${e.maximum.toString()}`;
            }
            case "too_small": {
              const n = e.inclusive ? ">=" : ">",
                i = t(e.origin);
              return i
                ? `För lite(t): förväntade ${e.origin ?? "värdet"} att ha ${n}${e.minimum.toString()} ${i.unit}`
                : `För lite(t): förväntade ${e.origin ?? "värdet"} att ha ${n}${e.minimum.toString()}`;
            }
            case "invalid_format": {
              const t = e;
              return "starts_with" === t.format
                ? `Ogiltig sträng: måste börja med "${t.prefix}"`
                : "ends_with" === t.format
                  ? `Ogiltig sträng: måste sluta med "${t.suffix}"`
                  : "includes" === t.format
                    ? `Ogiltig sträng: måste innehålla "${t.includes}"`
                    : "regex" === t.format
                      ? `Ogiltig sträng: måste matcha mönstret "${t.pattern}"`
                      : `Ogiltig(t) ${n[t.format] ?? e.format}`;
            }
            case "not_multiple_of":
              return `Ogiltigt tal: måste vara en multipel av ${e.divisor}`;
            case "unrecognized_keys":
              return `${e.keys.length > 1 ? "Okända nycklar" : "Okänd nyckel"}: ${i.jw(e.keys, ", ")}`;
            case "invalid_key":
              return `Ogiltig nyckel i ${e.origin ?? "värdet"}`;
            case "invalid_union":
            default:
              return "Ogiltig input";
            case "invalid_element":
              return `Ogiltigt värde i ${e.origin ?? "värdet"}`;
          }
        };
      };
      function Ae() {
        return { localeError: je() };
      }
      const Te = () => {
        const e = {
          string: { unit: "எழுத்துக்கள்", verb: "கொண்டிருக்க வேண்டும்" },
          file: { unit: "பைட்டுகள்", verb: "கொண்டிருக்க வேண்டும்" },
          array: { unit: "உறுப்புகள்", verb: "கொண்டிருக்க வேண்டும்" },
          set: { unit: "உறுப்புகள்", verb: "கொண்டிருக்க வேண்டும்" },
        };
        function t(t) {
          return e[t] ?? null;
        }
        const n = {
            regex: "உள்ளீடு",
            email: "மின்னஞ்சல் முகவரி",
            url: "URL",
            emoji: "emoji",
            uuid: "UUID",
            uuidv4: "UUIDv4",
            uuidv6: "UUIDv6",
            nanoid: "nanoid",
            guid: "GUID",
            cuid: "cuid",
            cuid2: "cuid2",
            ulid: "ULID",
            xid: "XID",
            ksuid: "KSUID",
            datetime: "ISO தேதி நேரம்",
            date: "ISO தேதி",
            time: "ISO நேரம்",
            duration: "ISO கால அளவு",
            ipv4: "IPv4 முகவரி",
            ipv6: "IPv6 முகவரி",
            cidrv4: "IPv4 வரம்பு",
            cidrv6: "IPv6 வரம்பு",
            base64: "base64-encoded சரம்",
            base64url: "base64url-encoded சரம்",
            json_string: "JSON சரம்",
            e164: "E.164 எண்",
            jwt: "JWT",
            template_literal: "input",
          },
          r = { nan: "NaN", number: "எண்", array: "அணி", null: "வெறுமை" };
        return (e) => {
          switch (e.code) {
            case "invalid_type": {
              const t = r[e.expected] ?? e.expected,
                n = i.GW(e.input),
                a = r[n] ?? n;
              return /^[A-Z]/.test(e.expected)
                ? `தவறான உள்ளீடு: எதிர்பார்க்கப்பட்டது instanceof ${e.expected}, பெறப்பட்டது ${a}`
                : `தவறான உள்ளீடு: எதிர்பார்க்கப்பட்டது ${t}, பெறப்பட்டது ${a}`;
            }
            case "invalid_value":
              return 1 === e.values.length
                ? `தவறான உள்ளீடு: எதிர்பார்க்கப்பட்டது ${i.B7(e.values[0])}`
                : `தவறான விருப்பம்: எதிர்பார்க்கப்பட்டது ${i.jw(e.values, "|")} இல் ஒன்று`;
            case "too_big": {
              const n = e.inclusive ? "<=" : "<",
                i = t(e.origin);
              return i
                ? `மிக பெரியது: எதிர்பார்க்கப்பட்டது ${e.origin ?? "மதிப்பு"} ${n}${e.maximum.toString()} ${i.unit ?? "உறுப்புகள்"} ஆக இருக்க வேண்டும்`
                : `மிக பெரியது: எதிர்பார்க்கப்பட்டது ${e.origin ?? "மதிப்பு"} ${n}${e.maximum.toString()} ஆக இருக்க வேண்டும்`;
            }
            case "too_small": {
              const n = e.inclusive ? ">=" : ">",
                i = t(e.origin);
              return i
                ? `மிகச் சிறியது: எதிர்பார்க்கப்பட்டது ${e.origin} ${n}${e.minimum.toString()} ${i.unit} ஆக இருக்க வேண்டும்`
                : `மிகச் சிறியது: எதிர்பார்க்கப்பட்டது ${e.origin} ${n}${e.minimum.toString()} ஆக இருக்க வேண்டும்`;
            }
            case "invalid_format": {
              const t = e;
              return "starts_with" === t.format
                ? `தவறான சரம்: "${t.prefix}" இல் தொடங்க வேண்டும்`
                : "ends_with" === t.format
                  ? `தவறான சரம்: "${t.suffix}" இல் முடிவடைய வேண்டும்`
                  : "includes" === t.format
                    ? `தவறான சரம்: "${t.includes}" ஐ உள்ளடக்க வேண்டும்`
                    : "regex" === t.format
                      ? `தவறான சரம்: ${t.pattern} முறைபாட்டுடன் பொருந்த வேண்டும்`
                      : `தவறான ${n[t.format] ?? e.format}`;
            }
            case "not_multiple_of":
              return `தவறான எண்: ${e.divisor} இன் பலமாக இருக்க வேண்டும்`;
            case "unrecognized_keys":
              return `அடையாளம் தெரியாத விசை${e.keys.length > 1 ? "கள்" : ""}: ${i.jw(e.keys, ", ")}`;
            case "invalid_key":
              return `${e.origin} இல் தவறான விசை`;
            case "invalid_union":
            default:
              return "தவறான உள்ளீடு";
            case "invalid_element":
              return `${e.origin} இல் தவறான மதிப்பு`;
          }
        };
      };
      function Ce() {
        return { localeError: Te() };
      }
      const Re = () => {
        const e = {
          string: { unit: "ตัวอักษร", verb: "ควรมี" },
          file: { unit: "ไบต์", verb: "ควรมี" },
          array: { unit: "รายการ", verb: "ควรมี" },
          set: { unit: "รายการ", verb: "ควรมี" },
        };
        function t(t) {
          return e[t] ?? null;
        }
        const n = {
            regex: "ข้อมูลที่ป้อน",
            email: "ที่อยู่อีเมล",
            url: "URL",
            emoji: "อิโมจิ",
            uuid: "UUID",
            uuidv4: "UUIDv4",
            uuidv6: "UUIDv6",
            nanoid: "nanoid",
            guid: "GUID",
            cuid: "cuid",
            cuid2: "cuid2",
            ulid: "ULID",
            xid: "XID",
            ksuid: "KSUID",
            datetime: "วันที่เวลาแบบ ISO",
            date: "วันที่แบบ ISO",
            time: "เวลาแบบ ISO",
            duration: "ช่วงเวลาแบบ ISO",
            ipv4: "ที่อยู่ IPv4",
            ipv6: "ที่อยู่ IPv6",
            cidrv4: "ช่วง IP แบบ IPv4",
            cidrv6: "ช่วง IP แบบ IPv6",
            base64: "ข้อความแบบ Base64",
            base64url: "ข้อความแบบ Base64 สำหรับ URL",
            json_string: "ข้อความแบบ JSON",
            e164: "เบอร์โทรศัพท์ระหว่างประเทศ (E.164)",
            jwt: "โทเคน JWT",
            template_literal: "ข้อมูลที่ป้อน",
          },
          r = {
            nan: "NaN",
            number: "ตัวเลข",
            array: "อาร์เรย์ (Array)",
            null: "ไม่มีค่า (null)",
          };
        return (e) => {
          switch (e.code) {
            case "invalid_type": {
              const t = r[e.expected] ?? e.expected,
                n = i.GW(e.input),
                a = r[n] ?? n;
              return /^[A-Z]/.test(e.expected)
                ? `ประเภทข้อมูลไม่ถูกต้อง: ควรเป็น instanceof ${e.expected} แต่ได้รับ ${a}`
                : `ประเภทข้อมูลไม่ถูกต้อง: ควรเป็น ${t} แต่ได้รับ ${a}`;
            }
            case "invalid_value":
              return 1 === e.values.length
                ? `ค่าไม่ถูกต้อง: ควรเป็น ${i.B7(e.values[0])}`
                : `ตัวเลือกไม่ถูกต้อง: ควรเป็นหนึ่งใน ${i.jw(e.values, "|")}`;
            case "too_big": {
              const n = e.inclusive ? "ไม่เกิน" : "น้อยกว่า",
                i = t(e.origin);
              return i
                ? `เกินกำหนด: ${e.origin ?? "ค่า"} ควรมี${n} ${e.maximum.toString()} ${i.unit ?? "รายการ"}`
                : `เกินกำหนด: ${e.origin ?? "ค่า"} ควรมี${n} ${e.maximum.toString()}`;
            }
            case "too_small": {
              const n = e.inclusive ? "อย่างน้อย" : "มากกว่า",
                i = t(e.origin);
              return i
                ? `น้อยกว่ากำหนด: ${e.origin} ควรมี${n} ${e.minimum.toString()} ${i.unit}`
                : `น้อยกว่ากำหนด: ${e.origin} ควรมี${n} ${e.minimum.toString()}`;
            }
            case "invalid_format": {
              const t = e;
              return "starts_with" === t.format
                ? `รูปแบบไม่ถูกต้อง: ข้อความต้องขึ้นต้นด้วย "${t.prefix}"`
                : "ends_with" === t.format
                  ? `รูปแบบไม่ถูกต้อง: ข้อความต้องลงท้ายด้วย "${t.suffix}"`
                  : "includes" === t.format
                    ? `รูปแบบไม่ถูกต้อง: ข้อความต้องมี "${t.includes}" อยู่ในข้อความ`
                    : "regex" === t.format
                      ? `รูปแบบไม่ถูกต้อง: ต้องตรงกับรูปแบบที่กำหนด ${t.pattern}`
                      : `รูปแบบไม่ถูกต้อง: ${n[t.format] ?? e.format}`;
            }
            case "not_multiple_of":
              return `ตัวเลขไม่ถูกต้อง: ต้องเป็นจำนวนที่หารด้วย ${e.divisor} ได้ลงตัว`;
            case "unrecognized_keys":
              return `พบคีย์ที่ไม่รู้จัก: ${i.jw(e.keys, ", ")}`;
            case "invalid_key":
              return `คีย์ไม่ถูกต้องใน ${e.origin}`;
            case "invalid_union":
              return "ข้อมูลไม่ถูกต้อง: ไม่ตรงกับรูปแบบยูเนียนที่กำหนดไว้";
            case "invalid_element":
              return `ข้อมูลไม่ถูกต้องใน ${e.origin}`;
            default:
              return "ข้อมูลไม่ถูกต้อง";
          }
        };
      };
      function Le() {
        return { localeError: Re() };
      }
      const Be = () => {
        const e = {
          string: { unit: "karakter", verb: "olmalı" },
          file: { unit: "bayt", verb: "olmalı" },
          array: { unit: "öğe", verb: "olmalı" },
          set: { unit: "öğe", verb: "olmalı" },
        };
        function t(t) {
          return e[t] ?? null;
        }
        const n = {
            regex: "girdi",
            email: "e-posta adresi",
            url: "URL",
            emoji: "emoji",
            uuid: "UUID",
            uuidv4: "UUIDv4",
            uuidv6: "UUIDv6",
            nanoid: "nanoid",
            guid: "GUID",
            cuid: "cuid",
            cuid2: "cuid2",
            ulid: "ULID",
            xid: "XID",
            ksuid: "KSUID",
            datetime: "ISO tarih ve saat",
            date: "ISO tarih",
            time: "ISO saat",
            duration: "ISO süre",
            ipv4: "IPv4 adresi",
            ipv6: "IPv6 adresi",
            cidrv4: "IPv4 aralığı",
            cidrv6: "IPv6 aralığı",
            base64: "base64 ile şifrelenmiş metin",
            base64url: "base64url ile şifrelenmiş metin",
            json_string: "JSON dizesi",
            e164: "E.164 sayısı",
            jwt: "JWT",
            template_literal: "Şablon dizesi",
          },
          r = { nan: "NaN" };
        return (e) => {
          switch (e.code) {
            case "invalid_type": {
              const t = r[e.expected] ?? e.expected,
                n = i.GW(e.input),
                a = r[n] ?? n;
              return /^[A-Z]/.test(e.expected)
                ? `Geçersiz değer: beklenen instanceof ${e.expected}, alınan ${a}`
                : `Geçersiz değer: beklenen ${t}, alınan ${a}`;
            }
            case "invalid_value":
              return 1 === e.values.length
                ? `Geçersiz değer: beklenen ${i.B7(e.values[0])}`
                : `Geçersiz seçenek: aşağıdakilerden biri olmalı: ${i.jw(e.values, "|")}`;
            case "too_big": {
              const n = e.inclusive ? "<=" : "<",
                i = t(e.origin);
              return i
                ? `Çok büyük: beklenen ${e.origin ?? "değer"} ${n}${e.maximum.toString()} ${i.unit ?? "öğe"}`
                : `Çok büyük: beklenen ${e.origin ?? "değer"} ${n}${e.maximum.toString()}`;
            }
            case "too_small": {
              const n = e.inclusive ? ">=" : ">",
                i = t(e.origin);
              return i
                ? `Çok küçük: beklenen ${e.origin} ${n}${e.minimum.toString()} ${i.unit}`
                : `Çok küçük: beklenen ${e.origin} ${n}${e.minimum.toString()}`;
            }
            case "invalid_format": {
              const t = e;
              return "starts_with" === t.format
                ? `Geçersiz metin: "${t.prefix}" ile başlamalı`
                : "ends_with" === t.format
                  ? `Geçersiz metin: "${t.suffix}" ile bitmeli`
                  : "includes" === t.format
                    ? `Geçersiz metin: "${t.includes}" içermeli`
                    : "regex" === t.format
                      ? `Geçersiz metin: ${t.pattern} desenine uymalı`
                      : `Geçersiz ${n[t.format] ?? e.format}`;
            }
            case "not_multiple_of":
              return `Geçersiz sayı: ${e.divisor} ile tam bölünebilmeli`;
            case "unrecognized_keys":
              return `Tanınmayan anahtar${e.keys.length > 1 ? "lar" : ""}: ${i.jw(e.keys, ", ")}`;
            case "invalid_key":
              return `${e.origin} içinde geçersiz anahtar`;
            case "invalid_union":
            default:
              return "Geçersiz değer";
            case "invalid_element":
              return `${e.origin} içinde geçersiz değer`;
          }
        };
      };
      function Ge() {
        return { localeError: Be() };
      }
      const Me = () => {
        const e = {
          string: { unit: "символів", verb: "матиме" },
          file: { unit: "байтів", verb: "матиме" },
          array: { unit: "елементів", verb: "матиме" },
          set: { unit: "елементів", verb: "матиме" },
        };
        function t(t) {
          return e[t] ?? null;
        }
        const n = {
            regex: "вхідні дані",
            email: "адреса електронної пошти",
            url: "URL",
            emoji: "емодзі",
            uuid: "UUID",
            uuidv4: "UUIDv4",
            uuidv6: "UUIDv6",
            nanoid: "nanoid",
            guid: "GUID",
            cuid: "cuid",
            cuid2: "cuid2",
            ulid: "ULID",
            xid: "XID",
            ksuid: "KSUID",
            datetime: "дата та час ISO",
            date: "дата ISO",
            time: "час ISO",
            duration: "тривалість ISO",
            ipv4: "адреса IPv4",
            ipv6: "адреса IPv6",
            cidrv4: "діапазон IPv4",
            cidrv6: "діапазон IPv6",
            base64: "рядок у кодуванні base64",
            base64url: "рядок у кодуванні base64url",
            json_string: "рядок JSON",
            e164: "номер E.164",
            jwt: "JWT",
            template_literal: "вхідні дані",
          },
          r = { nan: "NaN", number: "число", array: "масив" };
        return (e) => {
          switch (e.code) {
            case "invalid_type": {
              const t = r[e.expected] ?? e.expected,
                n = i.GW(e.input),
                a = r[n] ?? n;
              return /^[A-Z]/.test(e.expected)
                ? `Неправильні вхідні дані: очікується instanceof ${e.expected}, отримано ${a}`
                : `Неправильні вхідні дані: очікується ${t}, отримано ${a}`;
            }
            case "invalid_value":
              return 1 === e.values.length
                ? `Неправильні вхідні дані: очікується ${i.B7(e.values[0])}`
                : `Неправильна опція: очікується одне з ${i.jw(e.values, "|")}`;
            case "too_big": {
              const n = e.inclusive ? "<=" : "<",
                i = t(e.origin);
              return i
                ? `Занадто велике: очікується, що ${e.origin ?? "значення"} ${i.verb} ${n}${e.maximum.toString()} ${i.unit ?? "елементів"}`
                : `Занадто велике: очікується, що ${e.origin ?? "значення"} буде ${n}${e.maximum.toString()}`;
            }
            case "too_small": {
              const n = e.inclusive ? ">=" : ">",
                i = t(e.origin);
              return i
                ? `Занадто мале: очікується, що ${e.origin} ${i.verb} ${n}${e.minimum.toString()} ${i.unit}`
                : `Занадто мале: очікується, що ${e.origin} буде ${n}${e.minimum.toString()}`;
            }
            case "invalid_format": {
              const t = e;
              return "starts_with" === t.format
                ? `Неправильний рядок: повинен починатися з "${t.prefix}"`
                : "ends_with" === t.format
                  ? `Неправильний рядок: повинен закінчуватися на "${t.suffix}"`
                  : "includes" === t.format
                    ? `Неправильний рядок: повинен містити "${t.includes}"`
                    : "regex" === t.format
                      ? `Неправильний рядок: повинен відповідати шаблону ${t.pattern}`
                      : `Неправильний ${n[t.format] ?? e.format}`;
            }
            case "not_multiple_of":
              return `Неправильне число: повинно бути кратним ${e.divisor}`;
            case "unrecognized_keys":
              return `Нерозпізнаний ключ${e.keys.length > 1 ? "і" : ""}: ${i.jw(e.keys, ", ")}`;
            case "invalid_key":
              return `Неправильний ключ у ${e.origin}`;
            case "invalid_union":
            default:
              return "Неправильні вхідні дані";
            case "invalid_element":
              return `Неправильне значення у ${e.origin}`;
          }
        };
      };
      function We() {
        return { localeError: Me() };
      }
      function Ze() {
        return We();
      }
      const Je = () => {
        const e = {
          string: { unit: "حروف", verb: "ہونا" },
          file: { unit: "بائٹس", verb: "ہونا" },
          array: { unit: "آئٹمز", verb: "ہونا" },
          set: { unit: "آئٹمز", verb: "ہونا" },
        };
        function t(t) {
          return e[t] ?? null;
        }
        const n = {
            regex: "ان پٹ",
            email: "ای میل ایڈریس",
            url: "یو آر ایل",
            emoji: "ایموجی",
            uuid: "یو یو آئی ڈی",
            uuidv4: "یو یو آئی ڈی وی 4",
            uuidv6: "یو یو آئی ڈی وی 6",
            nanoid: "نینو آئی ڈی",
            guid: "جی یو آئی ڈی",
            cuid: "سی یو آئی ڈی",
            cuid2: "سی یو آئی ڈی 2",
            ulid: "یو ایل آئی ڈی",
            xid: "ایکس آئی ڈی",
            ksuid: "کے ایس یو آئی ڈی",
            datetime: "آئی ایس او ڈیٹ ٹائم",
            date: "آئی ایس او تاریخ",
            time: "آئی ایس او وقت",
            duration: "آئی ایس او مدت",
            ipv4: "آئی پی وی 4 ایڈریس",
            ipv6: "آئی پی وی 6 ایڈریس",
            cidrv4: "آئی پی وی 4 رینج",
            cidrv6: "آئی پی وی 6 رینج",
            base64: "بیس 64 ان کوڈڈ سٹرنگ",
            base64url: "بیس 64 یو آر ایل ان کوڈڈ سٹرنگ",
            json_string: "جے ایس او این سٹرنگ",
            e164: "ای 164 نمبر",
            jwt: "جے ڈبلیو ٹی",
            template_literal: "ان پٹ",
          },
          r = { nan: "NaN", number: "نمبر", array: "آرے", null: "نل" };
        return (e) => {
          switch (e.code) {
            case "invalid_type": {
              const t = r[e.expected] ?? e.expected,
                n = i.GW(e.input),
                a = r[n] ?? n;
              return /^[A-Z]/.test(e.expected)
                ? `غلط ان پٹ: instanceof ${e.expected} متوقع تھا، ${a} موصول ہوا`
                : `غلط ان پٹ: ${t} متوقع تھا، ${a} موصول ہوا`;
            }
            case "invalid_value":
              return 1 === e.values.length
                ? `غلط ان پٹ: ${i.B7(e.values[0])} متوقع تھا`
                : `غلط آپشن: ${i.jw(e.values, "|")} میں سے ایک متوقع تھا`;
            case "too_big": {
              const n = e.inclusive ? "<=" : "<",
                i = t(e.origin);
              return i
                ? `بہت بڑا: ${e.origin ?? "ویلیو"} کے ${n}${e.maximum.toString()} ${i.unit ?? "عناصر"} ہونے متوقع تھے`
                : `بہت بڑا: ${e.origin ?? "ویلیو"} کا ${n}${e.maximum.toString()} ہونا متوقع تھا`;
            }
            case "too_small": {
              const n = e.inclusive ? ">=" : ">",
                i = t(e.origin);
              return i
                ? `بہت چھوٹا: ${e.origin} کے ${n}${e.minimum.toString()} ${i.unit} ہونے متوقع تھے`
                : `بہت چھوٹا: ${e.origin} کا ${n}${e.minimum.toString()} ہونا متوقع تھا`;
            }
            case "invalid_format": {
              const t = e;
              return "starts_with" === t.format
                ? `غلط سٹرنگ: "${t.prefix}" سے شروع ہونا چاہیے`
                : "ends_with" === t.format
                  ? `غلط سٹرنگ: "${t.suffix}" پر ختم ہونا چاہیے`
                  : "includes" === t.format
                    ? `غلط سٹرنگ: "${t.includes}" شامل ہونا چاہیے`
                    : "regex" === t.format
                      ? `غلط سٹرنگ: پیٹرن ${t.pattern} سے میچ ہونا چاہیے`
                      : `غلط ${n[t.format] ?? e.format}`;
            }
            case "not_multiple_of":
              return `غلط نمبر: ${e.divisor} کا مضاعف ہونا چاہیے`;
            case "unrecognized_keys":
              return `غیر تسلیم شدہ کی${e.keys.length > 1 ? "ز" : ""}: ${i.jw(e.keys, "، ")}`;
            case "invalid_key":
              return `${e.origin} میں غلط کی`;
            case "invalid_union":
            default:
              return "غلط ان پٹ";
            case "invalid_element":
              return `${e.origin} میں غلط ویلیو`;
          }
        };
      };
      function Fe() {
        return { localeError: Je() };
      }
      const Ke = () => {
        const e = {
          string: { unit: "belgi", verb: "bo‘lishi kerak" },
          file: { unit: "bayt", verb: "bo‘lishi kerak" },
          array: { unit: "element", verb: "bo‘lishi kerak" },
          set: { unit: "element", verb: "bo‘lishi kerak" },
          map: { unit: "yozuv", verb: "bo‘lishi kerak" },
        };
        function t(t) {
          return e[t] ?? null;
        }
        const n = {
            regex: "kirish",
            email: "elektron pochta manzili",
            url: "URL",
            emoji: "emoji",
            uuid: "UUID",
            uuidv4: "UUIDv4",
            uuidv6: "UUIDv6",
            nanoid: "nanoid",
            guid: "GUID",
            cuid: "cuid",
            cuid2: "cuid2",
            ulid: "ULID",
            xid: "XID",
            ksuid: "KSUID",
            datetime: "ISO sana va vaqti",
            date: "ISO sana",
            time: "ISO vaqt",
            duration: "ISO davomiylik",
            ipv4: "IPv4 manzil",
            ipv6: "IPv6 manzil",
            mac: "MAC manzil",
            cidrv4: "IPv4 diapazon",
            cidrv6: "IPv6 diapazon",
            base64: "base64 kodlangan satr",
            base64url: "base64url kodlangan satr",
            json_string: "JSON satr",
            e164: "E.164 raqam",
            jwt: "JWT",
            template_literal: "kirish",
          },
          r = { nan: "NaN", number: "raqam", array: "massiv" };
        return (e) => {
          switch (e.code) {
            case "invalid_type": {
              const t = r[e.expected] ?? e.expected,
                n = i.GW(e.input),
                a = r[n] ?? n;
              return /^[A-Z]/.test(e.expected)
                ? `Noto‘g‘ri kirish: kutilgan instanceof ${e.expected}, qabul qilingan ${a}`
                : `Noto‘g‘ri kirish: kutilgan ${t}, qabul qilingan ${a}`;
            }
            case "invalid_value":
              return 1 === e.values.length
                ? `Noto‘g‘ri kirish: kutilgan ${i.B7(e.values[0])}`
                : `Noto‘g‘ri variant: quyidagilardan biri kutilgan ${i.jw(e.values, "|")}`;
            case "too_big": {
              const n = e.inclusive ? "<=" : "<",
                i = t(e.origin);
              return i
                ? `Juda katta: kutilgan ${e.origin ?? "qiymat"} ${n}${e.maximum.toString()} ${i.unit} ${i.verb}`
                : `Juda katta: kutilgan ${e.origin ?? "qiymat"} ${n}${e.maximum.toString()}`;
            }
            case "too_small": {
              const n = e.inclusive ? ">=" : ">",
                i = t(e.origin);
              return i
                ? `Juda kichik: kutilgan ${e.origin} ${n}${e.minimum.toString()} ${i.unit} ${i.verb}`
                : `Juda kichik: kutilgan ${e.origin} ${n}${e.minimum.toString()}`;
            }
            case "invalid_format": {
              const t = e;
              return "starts_with" === t.format
                ? `Noto‘g‘ri satr: "${t.prefix}" bilan boshlanishi kerak`
                : "ends_with" === t.format
                  ? `Noto‘g‘ri satr: "${t.suffix}" bilan tugashi kerak`
                  : "includes" === t.format
                    ? `Noto‘g‘ri satr: "${t.includes}" ni o‘z ichiga olishi kerak`
                    : "regex" === t.format
                      ? `Noto‘g‘ri satr: ${t.pattern} shabloniga mos kelishi kerak`
                      : `Noto‘g‘ri ${n[t.format] ?? e.format}`;
            }
            case "not_multiple_of":
              return `Noto‘g‘ri raqam: ${e.divisor} ning karralisi bo‘lishi kerak`;
            case "unrecognized_keys":
              return `Noma’lum kalit${e.keys.length > 1 ? "lar" : ""}: ${i.jw(e.keys, ", ")}`;
            case "invalid_key":
              return `${e.origin} dagi kalit noto‘g‘ri`;
            case "invalid_union":
            default:
              return "Noto‘g‘ri kirish";
            case "invalid_element":
              return `${e.origin} da noto‘g‘ri qiymat`;
          }
        };
      };
      function Ve() {
        return { localeError: Ke() };
      }
      const He = () => {
        const e = {
          string: { unit: "ký tự", verb: "có" },
          file: { unit: "byte", verb: "có" },
          array: { unit: "phần tử", verb: "có" },
          set: { unit: "phần tử", verb: "có" },
        };
        function t(t) {
          return e[t] ?? null;
        }
        const n = {
            regex: "đầu vào",
            email: "địa chỉ email",
            url: "URL",
            emoji: "emoji",
            uuid: "UUID",
            uuidv4: "UUIDv4",
            uuidv6: "UUIDv6",
            nanoid: "nanoid",
            guid: "GUID",
            cuid: "cuid",
            cuid2: "cuid2",
            ulid: "ULID",
            xid: "XID",
            ksuid: "KSUID",
            datetime: "ngày giờ ISO",
            date: "ngày ISO",
            time: "giờ ISO",
            duration: "khoảng thời gian ISO",
            ipv4: "địa chỉ IPv4",
            ipv6: "địa chỉ IPv6",
            cidrv4: "dải IPv4",
            cidrv6: "dải IPv6",
            base64: "chuỗi mã hóa base64",
            base64url: "chuỗi mã hóa base64url",
            json_string: "chuỗi JSON",
            e164: "số E.164",
            jwt: "JWT",
            template_literal: "đầu vào",
          },
          r = { nan: "NaN", number: "số", array: "mảng" };
        return (e) => {
          switch (e.code) {
            case "invalid_type": {
              const t = r[e.expected] ?? e.expected,
                n = i.GW(e.input),
                a = r[n] ?? n;
              return /^[A-Z]/.test(e.expected)
                ? `Đầu vào không hợp lệ: mong đợi instanceof ${e.expected}, nhận được ${a}`
                : `Đầu vào không hợp lệ: mong đợi ${t}, nhận được ${a}`;
            }
            case "invalid_value":
              return 1 === e.values.length
                ? `Đầu vào không hợp lệ: mong đợi ${i.B7(e.values[0])}`
                : `Tùy chọn không hợp lệ: mong đợi một trong các giá trị ${i.jw(e.values, "|")}`;
            case "too_big": {
              const n = e.inclusive ? "<=" : "<",
                i = t(e.origin);
              return i
                ? `Quá lớn: mong đợi ${e.origin ?? "giá trị"} ${i.verb} ${n}${e.maximum.toString()} ${i.unit ?? "phần tử"}`
                : `Quá lớn: mong đợi ${e.origin ?? "giá trị"} ${n}${e.maximum.toString()}`;
            }
            case "too_small": {
              const n = e.inclusive ? ">=" : ">",
                i = t(e.origin);
              return i
                ? `Quá nhỏ: mong đợi ${e.origin} ${i.verb} ${n}${e.minimum.toString()} ${i.unit}`
                : `Quá nhỏ: mong đợi ${e.origin} ${n}${e.minimum.toString()}`;
            }
            case "invalid_format": {
              const t = e;
              return "starts_with" === t.format
                ? `Chuỗi không hợp lệ: phải bắt đầu bằng "${t.prefix}"`
                : "ends_with" === t.format
                  ? `Chuỗi không hợp lệ: phải kết thúc bằng "${t.suffix}"`
                  : "includes" === t.format
                    ? `Chuỗi không hợp lệ: phải bao gồm "${t.includes}"`
                    : "regex" === t.format
                      ? `Chuỗi không hợp lệ: phải khớp với mẫu ${t.pattern}`
                      : `${n[t.format] ?? e.format} không hợp lệ`;
            }
            case "not_multiple_of":
              return `Số không hợp lệ: phải là bội số của ${e.divisor}`;
            case "unrecognized_keys":
              return `Khóa không được nhận dạng: ${i.jw(e.keys, ", ")}`;
            case "invalid_key":
              return `Khóa không hợp lệ trong ${e.origin}`;
            case "invalid_union":
            default:
              return "Đầu vào không hợp lệ";
            case "invalid_element":
              return `Giá trị không hợp lệ trong ${e.origin}`;
          }
        };
      };
      function qe() {
        return { localeError: He() };
      }
      const Xe = () => {
        const e = {
          string: { unit: "字符", verb: "包含" },
          file: { unit: "字节", verb: "包含" },
          array: { unit: "项", verb: "包含" },
          set: { unit: "项", verb: "包含" },
        };
        function t(t) {
          return e[t] ?? null;
        }
        const n = {
            regex: "输入",
            email: "电子邮件",
            url: "URL",
            emoji: "表情符号",
            uuid: "UUID",
            uuidv4: "UUIDv4",
            uuidv6: "UUIDv6",
            nanoid: "nanoid",
            guid: "GUID",
            cuid: "cuid",
            cuid2: "cuid2",
            ulid: "ULID",
            xid: "XID",
            ksuid: "KSUID",
            datetime: "ISO日期时间",
            date: "ISO日期",
            time: "ISO时间",
            duration: "ISO时长",
            ipv4: "IPv4地址",
            ipv6: "IPv6地址",
            cidrv4: "IPv4网段",
            cidrv6: "IPv6网段",
            base64: "base64编码字符串",
            base64url: "base64url编码字符串",
            json_string: "JSON字符串",
            e164: "E.164号码",
            jwt: "JWT",
            template_literal: "输入",
          },
          r = { nan: "NaN", number: "数字", array: "数组", null: "空值(null)" };
        return (e) => {
          switch (e.code) {
            case "invalid_type": {
              const t = r[e.expected] ?? e.expected,
                n = i.GW(e.input),
                a = r[n] ?? n;
              return /^[A-Z]/.test(e.expected)
                ? `无效输入：期望 instanceof ${e.expected}，实际接收 ${a}`
                : `无效输入：期望 ${t}，实际接收 ${a}`;
            }
            case "invalid_value":
              return 1 === e.values.length
                ? `无效输入：期望 ${i.B7(e.values[0])}`
                : `无效选项：期望以下之一 ${i.jw(e.values, "|")}`;
            case "too_big": {
              const n = e.inclusive ? "<=" : "<",
                i = t(e.origin);
              return i
                ? `数值过大：期望 ${e.origin ?? "值"} ${n}${e.maximum.toString()} ${i.unit ?? "个元素"}`
                : `数值过大：期望 ${e.origin ?? "值"} ${n}${e.maximum.toString()}`;
            }
            case "too_small": {
              const n = e.inclusive ? ">=" : ">",
                i = t(e.origin);
              return i
                ? `数值过小：期望 ${e.origin} ${n}${e.minimum.toString()} ${i.unit}`
                : `数值过小：期望 ${e.origin} ${n}${e.minimum.toString()}`;
            }
            case "invalid_format": {
              const t = e;
              return "starts_with" === t.format
                ? `无效字符串：必须以 "${t.prefix}" 开头`
                : "ends_with" === t.format
                  ? `无效字符串：必须以 "${t.suffix}" 结尾`
                  : "includes" === t.format
                    ? `无效字符串：必须包含 "${t.includes}"`
                    : "regex" === t.format
                      ? `无效字符串：必须满足正则表达式 ${t.pattern}`
                      : `无效${n[t.format] ?? e.format}`;
            }
            case "not_multiple_of":
              return `无效数字：必须是 ${e.divisor} 的倍数`;
            case "unrecognized_keys":
              return `出现未知的键(key): ${i.jw(e.keys, ", ")}`;
            case "invalid_key":
              return `${e.origin} 中的键(key)无效`;
            case "invalid_union":
            default:
              return "无效输入";
            case "invalid_element":
              return `${e.origin} 中包含无效值(value)`;
          }
        };
      };
      function Ye() {
        return { localeError: Xe() };
      }
      const Qe = () => {
        const e = {
          string: { unit: "字元", verb: "擁有" },
          file: { unit: "位元組", verb: "擁有" },
          array: { unit: "項目", verb: "擁有" },
          set: { unit: "項目", verb: "擁有" },
        };
        function t(t) {
          return e[t] ?? null;
        }
        const n = {
            regex: "輸入",
            email: "郵件地址",
            url: "URL",
            emoji: "emoji",
            uuid: "UUID",
            uuidv4: "UUIDv4",
            uuidv6: "UUIDv6",
            nanoid: "nanoid",
            guid: "GUID",
            cuid: "cuid",
            cuid2: "cuid2",
            ulid: "ULID",
            xid: "XID",
            ksuid: "KSUID",
            datetime: "ISO 日期時間",
            date: "ISO 日期",
            time: "ISO 時間",
            duration: "ISO 期間",
            ipv4: "IPv4 位址",
            ipv6: "IPv6 位址",
            cidrv4: "IPv4 範圍",
            cidrv6: "IPv6 範圍",
            base64: "base64 編碼字串",
            base64url: "base64url 編碼字串",
            json_string: "JSON 字串",
            e164: "E.164 數值",
            jwt: "JWT",
            template_literal: "輸入",
          },
          r = { nan: "NaN" };
        return (e) => {
          switch (e.code) {
            case "invalid_type": {
              const t = r[e.expected] ?? e.expected,
                n = i.GW(e.input),
                a = r[n] ?? n;
              return /^[A-Z]/.test(e.expected)
                ? `無效的輸入值：預期為 instanceof ${e.expected}，但收到 ${a}`
                : `無效的輸入值：預期為 ${t}，但收到 ${a}`;
            }
            case "invalid_value":
              return 1 === e.values.length
                ? `無效的輸入值：預期為 ${i.B7(e.values[0])}`
                : `無效的選項：預期為以下其中之一 ${i.jw(e.values, "|")}`;
            case "too_big": {
              const n = e.inclusive ? "<=" : "<",
                i = t(e.origin);
              return i
                ? `數值過大：預期 ${e.origin ?? "值"} 應為 ${n}${e.maximum.toString()} ${i.unit ?? "個元素"}`
                : `數值過大：預期 ${e.origin ?? "值"} 應為 ${n}${e.maximum.toString()}`;
            }
            case "too_small": {
              const n = e.inclusive ? ">=" : ">",
                i = t(e.origin);
              return i
                ? `數值過小：預期 ${e.origin} 應為 ${n}${e.minimum.toString()} ${i.unit}`
                : `數值過小：預期 ${e.origin} 應為 ${n}${e.minimum.toString()}`;
            }
            case "invalid_format": {
              const t = e;
              return "starts_with" === t.format
                ? `無效的字串：必須以 "${t.prefix}" 開頭`
                : "ends_with" === t.format
                  ? `無效的字串：必須以 "${t.suffix}" 結尾`
                  : "includes" === t.format
                    ? `無效的字串：必須包含 "${t.includes}"`
                    : "regex" === t.format
                      ? `無效的字串：必須符合格式 ${t.pattern}`
                      : `無效的 ${n[t.format] ?? e.format}`;
            }
            case "not_multiple_of":
              return `無效的數字：必須為 ${e.divisor} 的倍數`;
            case "unrecognized_keys":
              return `無法識別的鍵值${e.keys.length > 1 ? "們" : ""}：${i.jw(e.keys, "、")}`;
            case "invalid_key":
              return `${e.origin} 中有無效的鍵值`;
            case "invalid_union":
            default:
              return "無效的輸入值";
            case "invalid_element":
              return `${e.origin} 中有無效的值`;
          }
        };
      };
      function et() {
        return { localeError: Qe() };
      }
      const tt = () => {
        const e = {
          string: { unit: "àmi", verb: "ní" },
          file: { unit: "bytes", verb: "ní" },
          array: { unit: "nkan", verb: "ní" },
          set: { unit: "nkan", verb: "ní" },
        };
        function t(t) {
          return e[t] ?? null;
        }
        const n = {
            regex: "ẹ̀rọ ìbáwọlé",
            email: "àdírẹ́sì ìmẹ́lì",
            url: "URL",
            emoji: "emoji",
            uuid: "UUID",
            uuidv4: "UUIDv4",
            uuidv6: "UUIDv6",
            nanoid: "nanoid",
            guid: "GUID",
            cuid: "cuid",
            cuid2: "cuid2",
            ulid: "ULID",
            xid: "XID",
            ksuid: "KSUID",
            datetime: "àkókò ISO",
            date: "ọjọ́ ISO",
            time: "àkókò ISO",
            duration: "àkókò tó pé ISO",
            ipv4: "àdírẹ́sì IPv4",
            ipv6: "àdírẹ́sì IPv6",
            cidrv4: "àgbègbè IPv4",
            cidrv6: "àgbègbè IPv6",
            base64: "ọ̀rọ̀ tí a kọ́ ní base64",
            base64url: "ọ̀rọ̀ base64url",
            json_string: "ọ̀rọ̀ JSON",
            e164: "nọ́mbà E.164",
            jwt: "JWT",
            template_literal: "ẹ̀rọ ìbáwọlé",
          },
          r = { nan: "NaN", number: "nọ́mbà", array: "akopọ" };
        return (e) => {
          switch (e.code) {
            case "invalid_type": {
              const t = r[e.expected] ?? e.expected,
                n = i.GW(e.input),
                a = r[n] ?? n;
              return /^[A-Z]/.test(e.expected)
                ? `Ìbáwọlé aṣìṣe: a ní láti fi instanceof ${e.expected}, àmọ̀ a rí ${a}`
                : `Ìbáwọlé aṣìṣe: a ní láti fi ${t}, àmọ̀ a rí ${a}`;
            }
            case "invalid_value":
              return 1 === e.values.length
                ? `Ìbáwọlé aṣìṣe: a ní láti fi ${i.B7(e.values[0])}`
                : `Àṣàyàn aṣìṣe: yan ọ̀kan lára ${i.jw(e.values, "|")}`;
            case "too_big": {
              const n = e.inclusive ? "<=" : "<",
                i = t(e.origin);
              return i
                ? `Tó pọ̀ jù: a ní láti jẹ́ pé ${e.origin ?? "iye"} ${i.verb} ${n}${e.maximum} ${i.unit}`
                : `Tó pọ̀ jù: a ní láti jẹ́ ${n}${e.maximum}`;
            }
            case "too_small": {
              const n = e.inclusive ? ">=" : ">",
                i = t(e.origin);
              return i
                ? `Kéré ju: a ní láti jẹ́ pé ${e.origin} ${i.verb} ${n}${e.minimum} ${i.unit}`
                : `Kéré ju: a ní láti jẹ́ ${n}${e.minimum}`;
            }
            case "invalid_format": {
              const t = e;
              return "starts_with" === t.format
                ? `Ọ̀rọ̀ aṣìṣe: gbọ́dọ̀ bẹ̀rẹ̀ pẹ̀lú "${t.prefix}"`
                : "ends_with" === t.format
                  ? `Ọ̀rọ̀ aṣìṣe: gbọ́dọ̀ parí pẹ̀lú "${t.suffix}"`
                  : "includes" === t.format
                    ? `Ọ̀rọ̀ aṣìṣe: gbọ́dọ̀ ní "${t.includes}"`
                    : "regex" === t.format
                      ? `Ọ̀rọ̀ aṣìṣe: gbọ́dọ̀ bá àpẹẹrẹ mu ${t.pattern}`
                      : `Aṣìṣe: ${n[t.format] ?? e.format}`;
            }
            case "not_multiple_of":
              return `Nọ́mbà aṣìṣe: gbọ́dọ̀ jẹ́ èyà pípín ti ${e.divisor}`;
            case "unrecognized_keys":
              return `Bọtìnì àìmọ̀: ${i.jw(e.keys, ", ")}`;
            case "invalid_key":
              return `Bọtìnì aṣìṣe nínú ${e.origin}`;
            case "invalid_union":
            default:
              return "Ìbáwọlé aṣìṣe";
            case "invalid_element":
              return `Iye aṣìṣe nínú ${e.origin}`;
          }
        };
      };
      function nt() {
        return { localeError: tt() };
      }
    },
  },
]);
